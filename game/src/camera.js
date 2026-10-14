// Third-person follow camera: smooth, auto-aligns behind the player at speed,
// manual orbit by dragging the right side of the screen, avoids clipping into walls.
import * as THREE from 'three';
import { clamp, damp, dampAngle, wrapAngle } from './util.js';

export class CameraRig {
  constructor(camera, world) {
    this.cam = camera; this.world = world;
    this.yaw = 0; this.pitch = 0.32; this.dist = 7.5; this.curDist = 7.5;
    this.target = new THREE.Vector3();
    this.shakeAmt = 0;
    this.extraDist = 0;
  }

  snapBehind(yaw, player) {
    this.yaw = yaw; this.pitch = 0.32;
    if (player) this.target.set(player.pos.x, player.pos.y + 1.3, player.pos.z);
  }

  shake(a) { this.shakeAmt = Math.max(this.shakeAmt, a); }

  update(dt, player, input, settings, boss) {
    const now = performance.now() / 1000;
    // manual orbit
    if (input.camDX || input.camDY) {
      this.yaw -= input.camDX * 0.0065;
      this.pitch = clamp(this.pitch + input.camDY * 0.0045, -0.15, 1.0);
    }
    const p = player.pos;
    const sp = player.speed;
    const manualRecently = now - input.lastCamInput < 1.4;
    let wantYaw = null, wantDist = 7.2 + Math.min(sp, 30) * 0.09, wantPitch = null;
    let tx = p.x, ty = p.y + 1.3, tz = p.z;

    if (player.state === 'loop' && player.loop) {
      const L = player.loop;
      tx = L.x + L.rx * L.shift * 0.5; ty = L.y + L.R * 0.8; tz = L.z + L.fz * L.R * 0.3 + L.fx * 0;
      tx += L.fx * L.R * 0.3;
      wantYaw = L.yaw + Math.PI / 2; wantDist = L.R * 2.6; wantPitch = 0.12;
    } else if (player.state === 'dead') {
      tx = this.target.x; tz = this.target.z; ty = Math.max(this.target.y - dt * 2, p.y + 1.3);
    } else if (settings.autoCamera && !manualRecently && sp > 4 && player.state !== 'hurt') {
      const heading = Math.atan2(player.vel.x, player.vel.z);
      const diff = Math.abs(wrapAngle(heading - this.yaw));
      if (diff < 2.3) {
        wantYaw = heading;
        this.autoRate = 0.5 + Math.min(sp, 30) * 0.09;
      }
    }
    if (boss && boss.active && !boss.defeated) {
      wantDist += 3.5;
      if (!manualRecently) wantPitch = 0.42;
    }
    if (player.state === 'rail') wantDist += 1.5;

    if (wantYaw !== null) this.yaw = dampAngle(this.yaw, wantYaw, player.state === 'loop' ? 3 : (this.autoRate || 1.5), dt);
    if (wantPitch !== null) this.pitch = damp(this.pitch, wantPitch, 2.5, dt);
    else if (!manualRecently && settings.autoCamera) this.pitch = damp(this.pitch, 0.3, 0.8, dt);
    this.dist = damp(this.dist, wantDist, 3, dt);

    // smooth target: horizontal tight, vertical looser (less bobbing on jumps)
    const fast = player.state === 'loop' ? 4 : 14;
    this.target.x = damp(this.target.x, tx, fast, dt);
    this.target.z = damp(this.target.z, tz, fast, dt);
    this.target.y = damp(this.target.y, ty, player.body.grounded ? 9 : 5, dt);
    if (Math.abs(this.target.y - ty) > 6) this.target.y = ty + Math.sign(this.target.y - ty) * 6;

    const fx = Math.sin(this.yaw), fz = Math.cos(this.yaw);
    const cp = Math.cos(this.pitch), spch = Math.sin(this.pitch);
    // collision: pull in if the line target->camera is blocked
    const dx = -fx * cp * this.dist, dy = spch * this.dist, dz = -fz * cp * this.dist;
    const t = this.target;
    let frac = this.world.raySolid(t.x, t.y, t.z, t.x + dx, t.y + dy, t.z + dz, 8);
    const want = Math.max(1.6, this.dist * frac * 0.95);
    this.curDist = want < this.curDist ? damp(this.curDist, want, 25, dt) : damp(this.curDist, want, 3, dt);
    const k = this.curDist / this.dist;
    let cx = t.x + dx * k, cy = t.y + dy * k, cz = t.z + dz * k;
    // never below the fluid / kill plane look
    if (this.shakeAmt > 0) {
      cx += (Math.random() - 0.5) * this.shakeAmt; cy += (Math.random() - 0.5) * this.shakeAmt; cz += (Math.random() - 0.5) * this.shakeAmt;
      this.shakeAmt = Math.max(0, this.shakeAmt - dt * 1.6);
    }
    this.cam.position.set(cx, cy, cz);
    this.cam.lookAt(t.x, t.y + 0.3, t.z);
    // widen FOV slightly at high speed
    const fov = 62 + clamp((sp - 15) * 0.5, 0, 10);
    if (Math.abs(this.cam.fov - fov) > 0.1) { this.cam.fov = damp(this.cam.fov, fov, 3, dt); this.cam.updateProjectionMatrix(); }
  }
}
