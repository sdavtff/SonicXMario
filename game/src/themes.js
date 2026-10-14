// Visual / audio theme per stage.
export const THEMES = {
  green: {
    ground: 'grass', skyTop: 0x2a7be0, skyMid: 0x7cc0ff, skyBottom: 0xd6f0ff, fog: 0xbfe3ff, fogNear: 90, fogFar: 340,
    sun: 0xfff6c0, sunDir: [0.4, 0.6, 0.5], light: 0xffffff, lightI: 1.25, hemiSky: 0xbfe3ff, hemiGround: 0x5a8a3a, hemiI: 0.75,
    mountains: [0x5aa85a, 0x4d9a4d, 0x6ab86a], cloudColor: 0xffffff, cloudEmissive: 0x8a8a8a, music: 'green', exposure: 1.0,
  },
  mushroom: {
    ground: 'mario', skyTop: 0x4a8cff, skyMid: 0x8fc4ff, skyBottom: 0xe8f6ff, fog: 0xcfe8ff, fogNear: 90, fogFar: 330,
    sun: 0xffffd0, sunDir: [-0.3, 0.7, 0.4], light: 0xffffff, lightI: 1.2, hemiSky: 0xd0e8ff, hemiGround: 0x7a6a3a, hemiI: 0.8,
    mountains: [0x7ac87a, 0x9ad89a, 0x6ab86a], cloudColor: 0xffffff, cloudEmissive: 0x909090, music: 'mushroom',
  },
  jungle: {
    ground: 'jungle', skyTop: 0x2a6a5a, skyMid: 0x7ab8a0, skyBottom: 0xb8d8b0, fog: 0x8ab89a, fogNear: 30, fogFar: 170,
    sun: null, sunDir: [0.2, 0.8, 0.3], light: 0xfff2cc, lightI: 0.95, hemiSky: 0xa8d8b8, hemiGround: 0x2a3a1a, hemiI: 0.75,
    mountains: [0x2a5a3a, 0x355f3f], cloudColor: 0xd8f0e0, cloudEmissive: 0x6a7a6a, music: 'jungle',
  },
  lava: {
    ground: 'castle', skyTop: 0x1a0505, skyMid: 0x5a1a10, skyBottom: 0xb8401a, fog: 0x4a1a12, fogNear: 40, fogFar: 200,
    sun: null, sunDir: [0.3, 0.8, -0.3], light: 0xffb08a, lightI: 0.9, hemiSky: 0xff8a5a, hemiGround: 0x3a0a0a, hemiI: 0.8,
    mountains: [0x2a1414, 0x3a1a14], cloudColor: 0x3a2a2a, cloudEmissive: 0x2a0a0a, music: 'lava',
  },
  final: {
    ground: 'crystal', skyTop: 0x05021a, skyMid: 0x2a0a5a, skyBottom: 0x6a1a8a, fog: 0x1a0a3a, fogNear: 60, fogFar: 300,
    sun: 0xff8af0, sunDir: [-0.5, 0.4, 0.6], light: 0xd8c8ff, lightI: 1.0, hemiSky: 0x9a7aff, hemiGround: 0x2a0a4a, hemiI: 0.9,
    mountains: null, stars: 'full', cloudColor: 0x9a6aff, cloudEmissive: 0x3a1a6a, music: 'final',
  },
};
