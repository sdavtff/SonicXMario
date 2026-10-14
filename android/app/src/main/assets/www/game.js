(()=>{var Fl="162";var Iu=0,lh=1,Du=2;var Gs=1,ha=2,Pi=3,Ki=0,ze=1,Ie=2,$i=0,Zi=1,Cr=2,hh=3,ch=4,Uu=5,mn=100,Nu=101,Fu=102,uh=103,dh=104,zu=200,Ou=201,ku=202,Bu=203,Yo=204,$o=205,Hu=206,Gu=207,Vu=208,Wu=209,Xu=210,qu=211,Yu=212,$u=213,Zu=214,Ju=0,ju=1,Ku=2,Pr=3,Qu=4,td=5,ed=6,id=7,zl=0,nd=1,sd=2,Ji=0,rd=1,ad=2,od=3,ld=4,hd=5,cd=6,ud=7;var Hc=300,Jn=301,jn=302,Zo=303,Jo=304,ca=306,Cs=1e3,mi=1001,jo=1002,Se=1003,fh=1004;var xs=1005;var $e=1006,ho=1007;var Ii=1008;var ji=1009,dd=1010,fd=1011,Ol=1012,Gc=1013,Yi=1014,Mi=1015,Ps=1016,Vc=1017,Wc=1018,xn=1020,pd=1021,ni=1023,md=1024,gd=1025,yn=1026,Kn=1027,Xc=1028,qc=1029,xd=1030,Yc=1031,$c=1033,co=33776,uo=33777,fo=33778,po=33779,ph=35840,mh=35841,gh=35842,xh=35843,Zc=36196,yh=37492,vh=37496,_h=37808,Mh=37809,bh=37810,Sh=37811,Eh=37812,wh=37813,Th=37814,Ah=37815,Rh=37816,Ch=37817,Ph=37818,Lh=37819,Ih=37820,Dh=37821,mo=36492,Uh=36494,Nh=36495,yd=36283,Fh=36284,zh=36285,Oh=36286;var Lr=2300,Ir=2301,go=2302,kh=2400,Bh=2401,Hh=2402;var vd=3200,_d=3201,kl=0,Md=1,qi="",Ze="srgb",sn="srgb-linear",Bl="display-p3",ua="display-p3-linear",Dr="linear",he="srgb",Ur="rec709",Nr="p3";var An=7680;var Gh=519,bd=512,Sd=513,Ed=514,Jc=515,wd=516,Td=517,Ad=518,Rd=519,Vh=35044,Vs=35048;var Wh="300 es",Ko=1035,Di=2e3,Fr=2001,Qi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let n=this._listeners[t];if(n!==void 0){let r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,t);t.target=null}}},Ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var xo=Math.PI/180,Qo=180/Math.PI;function ls(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ue[s&255]+Ue[s>>8&255]+Ue[s>>16&255]+Ue[s>>24&255]+"-"+Ue[t&255]+Ue[t>>8&255]+"-"+Ue[t>>16&15|64]+Ue[t>>24&255]+"-"+Ue[e&63|128]+Ue[e>>8&255]+"-"+Ue[e>>16&255]+Ue[e>>24&255]+Ue[i&255]+Ue[i>>8&255]+Ue[i>>16&255]+Ue[i>>24&255]).toLowerCase()}function Fe(s,t,e){return Math.max(t,Math.min(e,s))}function Cd(s,t){return(s%t+t)%t}function yo(s,t,e){return(1-e)*s+e*t}function Xh(s){return(s&s-1)===0&&s!==0}function tl(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ys(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ye(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var ct=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Fe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*n+t.x,this.y=r*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Yt=class s{constructor(t,e,i,n,r,a,o,l,h){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,h)}set(t,e,i,n,r,a,o,l,h){let c=this.elements;return c[0]=t,c[1]=n,c[2]=o,c[3]=e,c[4]=r,c[5]=l,c[6]=i,c[7]=a,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],h=i[1],c=i[4],u=i[7],d=i[2],f=i[5],g=i[8],y=n[0],m=n[3],p=n[6],b=n[1],x=n[4],M=n[7],C=n[2],R=n[5],T=n[8];return r[0]=a*y+o*b+l*C,r[3]=a*m+o*x+l*R,r[6]=a*p+o*M+l*T,r[1]=h*y+c*b+u*C,r[4]=h*m+c*x+u*R,r[7]=h*p+c*M+u*T,r[2]=d*y+f*b+g*C,r[5]=d*m+f*x+g*R,r[8]=d*p+f*M+g*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],c=t[8];return e*a*c-e*o*h-i*r*c+i*o*l+n*r*h-n*a*l}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],c=t[8],u=c*a-o*h,d=o*l-c*r,f=h*r-a*l,g=e*u+i*d+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=u*y,t[1]=(n*h-c*i)*y,t[2]=(o*i-n*a)*y,t[3]=d*y,t[4]=(c*e-n*l)*y,t[5]=(n*r-o*e)*y,t[6]=f*y,t[7]=(i*l-h*e)*y,t[8]=(a*e-i*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,a,o){let l=Math.cos(r),h=Math.sin(r);return this.set(i*l,i*h,-i*(l*a+h*o)+a+t,-n*h,n*l,-n*(-h*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(vo.makeScale(t,e)),this}rotate(t){return this.premultiply(vo.makeRotation(-t)),this}translate(t,e){return this.premultiply(vo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},vo=new Yt;function jc(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function zr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Pd(){let s=zr("canvas");return s.style.display="block",s}var qh={};function Ld(s){s in qh||(qh[s]=!0,console.warn(s))}var Yh=new Yt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),$h=new Yt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),er={[sn]:{transfer:Dr,primaries:Ur,toReference:s=>s,fromReference:s=>s},[Ze]:{transfer:he,primaries:Ur,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[ua]:{transfer:Dr,primaries:Nr,toReference:s=>s.applyMatrix3($h),fromReference:s=>s.applyMatrix3(Yh)},[Bl]:{transfer:he,primaries:Nr,toReference:s=>s.convertSRGBToLinear().applyMatrix3($h),fromReference:s=>s.applyMatrix3(Yh).convertLinearToSRGB()}},Id=new Set([sn,ua]),se={enabled:!0,_workingColorSpace:sn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Id.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;let i=er[t].toReference,n=er[e].fromReference;return n(i(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return er[s].primaries},getTransfer:function(s){return s===qi?Dr:er[s].transfer}};function $n(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function _o(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Rn,Or=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Rn===void 0&&(Rn=zr("canvas")),Rn.width=t.width,Rn.height=t.height;let i=Rn.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Rn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=zr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=$n(r[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor($n(e[i]/255)*255):e[i]=$n(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Dd=0,kr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=ls(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(Mo(n[a].image)):r.push(Mo(n[a]))}else r=Mo(n);i.url=r}return e||(t.images[this.uuid]=i),i}};function Mo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Or.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ud=0,Je=class s extends Qi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,i=mi,n=mi,r=$e,a=Ii,o=ni,l=ji,h=s.DEFAULT_ANISOTROPY,c=qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=ls(),this.name="",this.source=new kr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Hc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Cs:t.x=t.x-Math.floor(t.x);break;case mi:t.x=t.x<0?0:1;break;case jo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Cs:t.y=t.y-Math.floor(t.y);break;case mi:t.y=t.y<0?0:1;break;case jo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}};Je.DEFAULT_IMAGE=null;Je.DEFAULT_MAPPING=Hc;Je.DEFAULT_ANISOTROPY=1;var Re=class s{constructor(t=0,e=0,i=0,n=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r,l=t.elements,h=l[0],c=l[4],u=l[8],d=l[1],f=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(c-d)<.01&&Math.abs(u-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+d)<.1&&Math.abs(u+y)<.1&&Math.abs(g+m)<.1&&Math.abs(h+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(h+1)/2,M=(f+1)/2,C=(p+1)/2,R=(c+d)/4,T=(u+y)/4,L=(g+m)/4;return x>M&&x>C?x<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(x),n=R/i,r=T/i):M>C?M<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(M),i=R/n,r=L/n):C<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(C),i=T/r,n=L/r),this.set(i,n,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(u-y)*(u-y)+(d-c)*(d-c));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-y)/b,this.z=(d-c)/b,this.w=Math.acos((h+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},el=class extends Qi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e);let n={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$e,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);let r=new Je(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,n=t.textures.length;i<n;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new kr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ui=class extends el{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Br=class extends Je{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Se,this.minFilter=Se,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var il=class extends Je{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Se,this.minFilter=Se,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ve=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,a,o){let l=i[n+0],h=i[n+1],c=i[n+2],u=i[n+3],d=r[a+0],f=r[a+1],g=r[a+2],y=r[a+3];if(o===0){t[e+0]=l,t[e+1]=h,t[e+2]=c,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=y;return}if(u!==y||l!==d||h!==f||c!==g){let m=1-o,p=l*d+h*f+c*g+u*y,b=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let C=Math.sqrt(x),R=Math.atan2(C,p*b);m=Math.sin(m*R)/C,o=Math.sin(o*R)/C}let M=o*b;if(l=l*m+d*M,h=h*m+f*M,c=c*m+g*M,u=u*m+y*M,m===1-o){let C=1/Math.sqrt(l*l+h*h+c*c+u*u);l*=C,h*=C,c*=C,u*=C}}t[e]=l,t[e+1]=h,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,r,a){let o=i[n],l=i[n+1],h=i[n+2],c=i[n+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+c*u+l*f-h*d,t[e+1]=l*g+c*d+h*u-o*f,t[e+2]=h*g+c*f+o*d-l*u,t[e+3]=c*g-o*u-l*d-h*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,h=o(i/2),c=o(n/2),u=o(r/2),d=l(i/2),f=l(n/2),g=l(r/2);switch(a){case"XYZ":this._x=d*c*u+h*f*g,this._y=h*f*u-d*c*g,this._z=h*c*g+d*f*u,this._w=h*c*u-d*f*g;break;case"YXZ":this._x=d*c*u+h*f*g,this._y=h*f*u-d*c*g,this._z=h*c*g-d*f*u,this._w=h*c*u+d*f*g;break;case"ZXY":this._x=d*c*u-h*f*g,this._y=h*f*u+d*c*g,this._z=h*c*g+d*f*u,this._w=h*c*u-d*f*g;break;case"ZYX":this._x=d*c*u-h*f*g,this._y=h*f*u+d*c*g,this._z=h*c*g-d*f*u,this._w=h*c*u+d*f*g;break;case"YZX":this._x=d*c*u+h*f*g,this._y=h*f*u+d*c*g,this._z=h*c*g-d*f*u,this._w=h*c*u-d*f*g;break;case"XZY":this._x=d*c*u-h*f*g,this._y=h*f*u-d*c*g,this._z=h*c*g+d*f*u,this._w=h*c*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],r=e[8],a=e[1],o=e[5],l=e[9],h=e[2],c=e[6],u=e[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(c-l)*f,this._y=(r-h)*f,this._z=(a-n)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(c-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(r+h)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(r-h)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+c)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(a-n)/f,this._x=(r+h)/f,this._y=(l+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Fe(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,r=t._z,a=t._w,o=e._x,l=e._y,h=e._z,c=e._w;return this._x=i*c+a*o+n*h-r*l,this._y=n*c+a*l+r*o-i*h,this._z=r*c+a*h+i*l-n*o,this._w=a*c-i*o-n*l-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,n=this._y,r=this._z,a=this._w,o=a*t._w+i*t._x+n*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=n,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*i+e*this._x,this._y=f*n+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let h=Math.sqrt(l),c=Math.atan2(h,o),u=Math.sin((1-e)*c)/h,d=Math.sin(e*c)/h;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},E=class s{constructor(t=0,e=0,i=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Zh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Zh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,r=t.x,a=t.y,o=t.z,l=t.w,h=2*(a*n-o*i),c=2*(o*e-r*n),u=2*(r*i-a*e);return this.x=e+l*h+a*u-o*c,this.y=i+l*c+o*h-r*u,this.z=n+l*u+r*c-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return bo.copy(this).projectOnVector(t),this.sub(bo)}reflect(t){return this.sub(bo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Fe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},bo=new E,Zh=new Ve,We=class{constructor(t=new E(1/0,1/0,1/0),e=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(di.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(di.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=di.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,di):di.fromBufferAttribute(r,a),di.applyMatrix4(t.matrixWorld),this.expandByPoint(di);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ir.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ir.copy(i.boundingBox)),ir.applyMatrix4(t.matrixWorld),this.union(ir)}let n=t.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,di),di.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(vs),nr.subVectors(this.max,vs),Cn.subVectors(t.a,vs),Pn.subVectors(t.b,vs),Ln.subVectors(t.c,vs),Bi.subVectors(Pn,Cn),Hi.subVectors(Ln,Pn),ln.subVectors(Cn,Ln);let e=[0,-Bi.z,Bi.y,0,-Hi.z,Hi.y,0,-ln.z,ln.y,Bi.z,0,-Bi.x,Hi.z,0,-Hi.x,ln.z,0,-ln.x,-Bi.y,Bi.x,0,-Hi.y,Hi.x,0,-ln.y,ln.x,0];return!So(e,Cn,Pn,Ln,nr)||(e=[1,0,0,0,1,0,0,0,1],!So(e,Cn,Pn,Ln,nr))?!1:(sr.crossVectors(Bi,Hi),e=[sr.x,sr.y,sr.z],So(e,Cn,Pn,Ln,nr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,di).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(di).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},wi=[new E,new E,new E,new E,new E,new E,new E,new E],di=new E,ir=new We,Cn=new E,Pn=new E,Ln=new E,Bi=new E,Hi=new E,ln=new E,vs=new E,nr=new E,sr=new E,hn=new E;function So(s,t,e,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){hn.fromArray(s,r);let o=n.x*Math.abs(hn.x)+n.y*Math.abs(hn.y)+n.z*Math.abs(hn.z),l=t.dot(hn),h=e.dot(hn),c=i.dot(hn);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}var Nd=new We,_s=new E,Eo=new E,tn=class{constructor(t=new E,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Nd.setFromPoints(t).getCenter(i);let n=0;for(let r=0,a=t.length;r<a;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_s.subVectors(t,this.center);let e=_s.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(_s,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Eo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_s.copy(t.center).add(Eo)),this.expandByPoint(_s.copy(t.center).sub(Eo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ti=new E,wo=new E,rr=new E,Gi=new E,To=new E,ar=new E,Ao=new E,Hr=class{constructor(t=new E,e=new E(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ti)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ti.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ti.copy(this.origin).addScaledVector(this.direction,e),Ti.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){wo.copy(t).add(e).multiplyScalar(.5),rr.copy(e).sub(t).normalize(),Gi.copy(this.origin).sub(wo);let r=t.distanceTo(e)*.5,a=-this.direction.dot(rr),o=Gi.dot(this.direction),l=-Gi.dot(rr),h=Gi.lengthSq(),c=Math.abs(1-a*a),u,d,f,g;if(c>0)if(u=a*l-o,d=a*o-l,g=r*c,u>=0)if(d>=-g)if(d<=g){let y=1/c;u*=y,d*=y,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+h}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+h;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+h;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+h):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+h):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+h);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(wo).addScaledVector(rr,d),f}intersectSphere(t,e){Ti.subVectors(t.center,this.origin);let i=Ti.dot(this.direction),n=Ti.dot(Ti)-i*i,r=t.radius*t.radius;if(n>r)return null;let a=Math.sqrt(r-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,a,o,l,h=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,d=this.origin;return h>=0?(i=(t.min.x-d.x)*h,n=(t.max.x-d.x)*h):(i=(t.max.x-d.x)*h,n=(t.min.x-d.x)*h),c>=0?(r=(t.min.y-d.y)*c,a=(t.max.y-d.y)*c):(r=(t.max.y-d.y)*c,a=(t.min.y-d.y)*c),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Ti)!==null}intersectTriangle(t,e,i,n,r){To.subVectors(e,t),ar.subVectors(i,t),Ao.crossVectors(To,ar);let a=this.direction.dot(Ao),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Gi.subVectors(this.origin,t);let l=o*this.direction.dot(ar.crossVectors(Gi,ar));if(l<0)return null;let h=o*this.direction.dot(To.cross(Gi));if(h<0||l+h>a)return null;let c=-o*Gi.dot(Ao);return c<0?null:this.at(c/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ee=class s{constructor(t,e,i,n,r,a,o,l,h,c,u,d,f,g,y,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,h,c,u,d,f,g,y,m)}set(t,e,i,n,r,a,o,l,h,c,u,d,f,g,y,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=n,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=h,p[6]=c,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,n=1/In.setFromMatrixColumn(t,0).length(),r=1/In.setFromMatrixColumn(t,1).length(),a=1/In.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),h=Math.sin(n),c=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*c,f=a*u,g=o*c,y=o*u;e[0]=l*c,e[4]=-l*u,e[8]=h,e[1]=f+g*h,e[5]=d-y*h,e[9]=-o*l,e[2]=y-d*h,e[6]=g+f*h,e[10]=a*l}else if(t.order==="YXZ"){let d=l*c,f=l*u,g=h*c,y=h*u;e[0]=d+y*o,e[4]=g*o-f,e[8]=a*h,e[1]=a*u,e[5]=a*c,e[9]=-o,e[2]=f*o-g,e[6]=y+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*c,f=l*u,g=h*c,y=h*u;e[0]=d-y*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*c,e[9]=y-d*o,e[2]=-a*h,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*c,f=a*u,g=o*c,y=o*u;e[0]=l*c,e[4]=g*h-f,e[8]=d*h+y,e[1]=l*u,e[5]=y*h+d,e[9]=f*h-g,e[2]=-h,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,f=a*h,g=o*l,y=o*h;e[0]=l*c,e[4]=y-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*c,e[9]=-o*c,e[2]=-h*c,e[6]=f*u+g,e[10]=d-y*u}else if(t.order==="XZY"){let d=a*l,f=a*h,g=o*l,y=o*h;e[0]=l*c,e[4]=-u,e[8]=h*c,e[1]=d*u+y,e[5]=a*c,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*c,e[10]=y*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Fd,t,zd)}lookAt(t,e,i){let n=this.elements;return ei.subVectors(t,e),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),Vi.crossVectors(i,ei),Vi.lengthSq()===0&&(Math.abs(i.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),Vi.crossVectors(i,ei)),Vi.normalize(),or.crossVectors(ei,Vi),n[0]=Vi.x,n[4]=or.x,n[8]=ei.x,n[1]=Vi.y,n[5]=or.y,n[9]=ei.y,n[2]=Vi.z,n[6]=or.z,n[10]=ei.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],h=i[12],c=i[1],u=i[5],d=i[9],f=i[13],g=i[2],y=i[6],m=i[10],p=i[14],b=i[3],x=i[7],M=i[11],C=i[15],R=n[0],T=n[4],L=n[8],k=n[12],v=n[1],A=n[5],J=n[9],j=n[13],I=n[2],W=n[6],N=n[10],Z=n[14],q=n[3],Y=n[7],ot=n[11],at=n[15];return r[0]=a*R+o*v+l*I+h*q,r[4]=a*T+o*A+l*W+h*Y,r[8]=a*L+o*J+l*N+h*ot,r[12]=a*k+o*j+l*Z+h*at,r[1]=c*R+u*v+d*I+f*q,r[5]=c*T+u*A+d*W+f*Y,r[9]=c*L+u*J+d*N+f*ot,r[13]=c*k+u*j+d*Z+f*at,r[2]=g*R+y*v+m*I+p*q,r[6]=g*T+y*A+m*W+p*Y,r[10]=g*L+y*J+m*N+p*ot,r[14]=g*k+y*j+m*Z+p*at,r[3]=b*R+x*v+M*I+C*q,r[7]=b*T+x*A+M*W+C*Y,r[11]=b*L+x*J+M*N+C*ot,r[15]=b*k+x*j+M*Z+C*at,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],a=t[1],o=t[5],l=t[9],h=t[13],c=t[2],u=t[6],d=t[10],f=t[14],g=t[3],y=t[7],m=t[11],p=t[15];return g*(+r*l*u-n*h*u-r*o*d+i*h*d+n*o*f-i*l*f)+y*(+e*l*f-e*h*d+r*a*d-n*a*f+n*h*c-r*l*c)+m*(+e*h*u-e*o*f-r*a*u+i*a*f+r*o*c-i*h*c)+p*(-n*o*c-e*l*u+e*o*d+n*a*u-i*a*d+i*l*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],h=t[7],c=t[8],u=t[9],d=t[10],f=t[11],g=t[12],y=t[13],m=t[14],p=t[15],b=u*m*h-y*d*h+y*l*f-o*m*f-u*l*p+o*d*p,x=g*d*h-c*m*h-g*l*f+a*m*f+c*l*p-a*d*p,M=c*y*h-g*u*h+g*o*f-a*y*f-c*o*p+a*u*p,C=g*u*l-c*y*l-g*o*d+a*y*d+c*o*m-a*u*m,R=e*b+i*x+n*M+r*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/R;return t[0]=b*T,t[1]=(y*d*r-u*m*r-y*n*f+i*m*f+u*n*p-i*d*p)*T,t[2]=(o*m*r-y*l*r+y*n*h-i*m*h-o*n*p+i*l*p)*T,t[3]=(u*l*r-o*d*r-u*n*h+i*d*h+o*n*f-i*l*f)*T,t[4]=x*T,t[5]=(c*m*r-g*d*r+g*n*f-e*m*f-c*n*p+e*d*p)*T,t[6]=(g*l*r-a*m*r-g*n*h+e*m*h+a*n*p-e*l*p)*T,t[7]=(a*d*r-c*l*r+c*n*h-e*d*h-a*n*f+e*l*f)*T,t[8]=M*T,t[9]=(g*u*r-c*y*r-g*i*f+e*y*f+c*i*p-e*u*p)*T,t[10]=(a*y*r-g*o*r+g*i*h-e*y*h-a*i*p+e*o*p)*T,t[11]=(c*o*r-a*u*r-c*i*h+e*u*h+a*i*f-e*o*f)*T,t[12]=C*T,t[13]=(c*y*n-g*u*n+g*i*d-e*y*d-c*i*m+e*u*m)*T,t[14]=(g*o*n-a*y*n-g*i*l+e*y*l+a*i*m-e*o*m)*T,t[15]=(a*u*n-c*o*n+c*i*l-e*u*l-a*i*d+e*o*d)*T,this}scale(t){let e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,h=r*a,c=r*o;return this.set(h*a+i,h*o-n*l,h*l+n*o,0,h*o+n*l,c*o+i,c*l-n*a,0,h*l-n*o,c*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,a){return this.set(1,i,r,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,h=r+r,c=a+a,u=o+o,d=r*h,f=r*c,g=r*u,y=a*c,m=a*u,p=o*u,b=l*h,x=l*c,M=l*u,C=i.x,R=i.y,T=i.z;return n[0]=(1-(y+p))*C,n[1]=(f+M)*C,n[2]=(g-x)*C,n[3]=0,n[4]=(f-M)*R,n[5]=(1-(d+p))*R,n[6]=(m+b)*R,n[7]=0,n[8]=(g+x)*T,n[9]=(m-b)*T,n[10]=(1-(d+y))*T,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements,r=In.set(n[0],n[1],n[2]).length(),a=In.set(n[4],n[5],n[6]).length(),o=In.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),t.x=n[12],t.y=n[13],t.z=n[14],fi.copy(this);let h=1/r,c=1/a,u=1/o;return fi.elements[0]*=h,fi.elements[1]*=h,fi.elements[2]*=h,fi.elements[4]*=c,fi.elements[5]*=c,fi.elements[6]*=c,fi.elements[8]*=u,fi.elements[9]*=u,fi.elements[10]*=u,e.setFromRotationMatrix(fi),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,n,r,a,o=Di){let l=this.elements,h=2*r/(e-t),c=2*r/(i-n),u=(e+t)/(e-t),d=(i+n)/(i-n),f,g;if(o===Di)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Fr)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,r,a,o=Di){let l=this.elements,h=1/(e-t),c=1/(i-n),u=1/(a-r),d=(e+t)*h,f=(i+n)*c,g,y;if(o===Di)g=(a+r)*u,y=-2*u;else if(o===Fr)g=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},In=new E,fi=new ee,Fd=new E(0,0,0),zd=new E(1,1,1),Vi=new E,or=new E,ei=new E,Jh=new ee,jh=new Ve,je=class s{constructor(t=0,e=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,r=n[0],a=n[4],o=n[8],l=n[1],h=n[5],c=n[9],u=n[2],d=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(Fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Fe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-c,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Jh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Jh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return jh.setFromEuler(this),this.setFromQuaternion(jh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};je.DEFAULT_ORDER="XYZ";var Gr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Od=0,Kh=new E,Dn=new Ve,Ai=new ee,lr=new E,Ms=new E,kd=new E,Bd=new Ve,Qh=new E(1,0,0),tc=new E(0,1,0),ec=new E(0,0,1),Hd={type:"added"},Gd={type:"removed"},Ro={type:"childadded",child:null},Co={type:"childremoved",child:null},Oe=class s extends Qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=ls(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new E,e=new je,i=new Ve,n=new E(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ee},normalMatrix:{value:new Yt}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Dn.setFromAxisAngle(t,e),this.quaternion.multiply(Dn),this}rotateOnWorldAxis(t,e){return Dn.setFromAxisAngle(t,e),this.quaternion.premultiply(Dn),this}rotateX(t){return this.rotateOnAxis(Qh,t)}rotateY(t){return this.rotateOnAxis(tc,t)}rotateZ(t){return this.rotateOnAxis(ec,t)}translateOnAxis(t,e){return Kh.copy(t).applyQuaternion(this.quaternion),this.position.add(Kh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Qh,t)}translateY(t){return this.translateOnAxis(tc,t)}translateZ(t){return this.translateOnAxis(ec,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?lr.copy(t):lr.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(Ms,lr,this.up):Ai.lookAt(lr,Ms,this.up),this.quaternion.setFromRotationMatrix(Ai),n&&(Ai.extractRotation(n.matrixWorld),Dn.setFromRotationMatrix(Ai),this.quaternion.premultiply(Dn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Hd),Ro.child=t,this.dispatchEvent(Ro),Ro.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Gd),Co.child=t,this.dispatchEvent(Co),Co.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ai.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ai),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,t,kd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,Bd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++){let r=e[i];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let n=this.children;for(let r=0,a=n.length;r<a;r++){let o=n[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){let u=l[h];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(r(t.materials,this.material[l]));n.material=o}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),h=a(t.textures),c=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),c.length>0&&(i.images=c),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(o){let l=[];for(let h in o){let c=o[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}};Oe.DEFAULT_UP=new E(0,1,0);Oe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var pi=new E,Ri=new E,Po=new E,Ci=new E,Un=new E,Nn=new E,ic=new E,Lo=new E,Io=new E,Do=new E,Wn=class s{constructor(t=new E,e=new E,i=new E){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),pi.subVectors(t,e),n.cross(pi);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){pi.subVectors(n,e),Ri.subVectors(i,e),Po.subVectors(t,e);let a=pi.dot(pi),o=pi.dot(Ri),l=pi.dot(Po),h=Ri.dot(Ri),c=Ri.dot(Po),u=a*h-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(h*l-o*c)*d,g=(a*c-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(t,e,i,n,r,a,o,l){return this.getBarycoord(t,e,i,n,Ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ci.x),l.addScaledVector(a,Ci.y),l.addScaledVector(o,Ci.z),l)}static isFrontFacing(t,e,i,n){return pi.subVectors(i,e),Ri.subVectors(t,e),pi.cross(Ri).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return pi.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),pi.cross(Ri).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return s.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,r=this.c,a,o;Un.subVectors(n,i),Nn.subVectors(r,i),Lo.subVectors(t,i);let l=Un.dot(Lo),h=Nn.dot(Lo);if(l<=0&&h<=0)return e.copy(i);Io.subVectors(t,n);let c=Un.dot(Io),u=Nn.dot(Io);if(c>=0&&u<=c)return e.copy(n);let d=l*u-c*h;if(d<=0&&l>=0&&c<=0)return a=l/(l-c),e.copy(i).addScaledVector(Un,a);Do.subVectors(t,r);let f=Un.dot(Do),g=Nn.dot(Do);if(g>=0&&f<=g)return e.copy(r);let y=f*h-l*g;if(y<=0&&h>=0&&g<=0)return o=h/(h-g),e.copy(i).addScaledVector(Nn,o);let m=c*g-f*u;if(m<=0&&u-c>=0&&f-g>=0)return ic.subVectors(r,n),o=(u-c)/(u-c+(f-g)),e.copy(n).addScaledVector(ic,o);let p=1/(m+y+d);return a=y*p,o=d*p,e.copy(i).addScaledVector(Un,a).addScaledVector(Nn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Kc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},hr={h:0,s:0,l:0};function Uo(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Dt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=se.workingColorSpace){return this.r=t,this.g=e,this.b=i,se.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=se.workingColorSpace){if(t=Cd(t,1),e=Fe(e,0,1),i=Fe(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Uo(a,r,t+1/3),this.g=Uo(a,r,t),this.b=Uo(a,r,t-1/3)}return se.toWorkingColorSpace(this,n),this}setStyle(t,e=Ze){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ze){let i=Kc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$n(t.r),this.g=$n(t.g),this.b=$n(t.b),this}copyLinearToSRGB(t){return this.r=_o(t.r),this.g=_o(t.g),this.b=_o(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ze){return se.fromWorkingColorSpace(Ne.copy(this),t),Math.round(Fe(Ne.r*255,0,255))*65536+Math.round(Fe(Ne.g*255,0,255))*256+Math.round(Fe(Ne.b*255,0,255))}getHexString(t=Ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.fromWorkingColorSpace(Ne.copy(this),e);let i=Ne.r,n=Ne.g,r=Ne.b,a=Math.max(i,n,r),o=Math.min(i,n,r),l,h,c=(o+a)/2;if(o===a)l=0,h=0;else{let u=a-o;switch(h=c<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-r)/u+(n<r?6:0);break;case n:l=(r-i)/u+2;break;case r:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=h,t.l=c,t}getRGB(t,e=se.workingColorSpace){return se.fromWorkingColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=Ze){se.fromWorkingColorSpace(Ne.copy(this),t);let e=Ne.r,i=Ne.g,n=Ne.b;return t!==Ze?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(Wi),this.setHSL(Wi.h+t,Wi.s+e,Wi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Wi),t.getHSL(hr);let i=yo(Wi.h,hr.h,e),n=yo(Wi.s,hr.s,e),r=yo(Wi.l,hr.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ne=new Dt;Dt.NAMES=Kc;var Vd=0,Ni=class extends Qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=ls(),this.name="",this.type="Material",this.blending=Zi,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yo,this.blendDst=$o,this.blendEquation=mn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=Pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=An,this.stencilZFail=An,this.stencilZPass=An,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zi&&(i.blending=this.blending),this.side!==Ki&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Yo&&(i.blendSrc=this.blendSrc),this.blendDst!==$o&&(i.blendDst=this.blendDst),this.blendEquation!==mn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Pr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==An&&(i.stencilFail=this.stencilFail),this.stencilZFail!==An&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==An&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=n(t.textures),a=n(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},si=class extends Ni{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new je,this.combine=zl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var be=new E,cr=new ct,_e=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Vh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Ld("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)cr.fromBufferAttribute(this,e),cr.applyMatrix3(t),this.setXY(e,cr.x,cr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ys(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ye(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ys(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ys(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ys(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ys(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),i=Ye(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),i=Ye(i,this.array),n=Ye(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),i=Ye(i,this.array),n=Ye(n,this.array),r=Ye(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Vh&&(t.usage=this.usage),t}};var Vr=class extends _e{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Wr=class extends _e{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Gt=class extends _e{constructor(t,e,i){super(new Float32Array(t),e,i)}},Wd=0,hi=new ee,No=new Oe,Fn=new E,ii=new We,bs=new We,Ae=new E,ce=class s extends Qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=ls(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(jc(t)?Wr:Vr)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Yt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return hi.makeRotationFromQuaternion(t),this.applyMatrix4(hi),this}rotateX(t){return hi.makeRotationX(t),this.applyMatrix4(hi),this}rotateY(t){return hi.makeRotationY(t),this.applyMatrix4(hi),this}rotateZ(t){return hi.makeRotationZ(t),this.applyMatrix4(hi),this}translate(t,e,i){return hi.makeTranslation(t,e,i),this.applyMatrix4(hi),this}scale(t,e,i){return hi.makeScale(t,e,i),this.applyMatrix4(hi),this}lookAt(t){return No.lookAt(t),No.updateMatrix(),this.applyMatrix4(No.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fn).negate(),this.translate(Fn.x,Fn.y,Fn.z),this}setFromPoints(t){let e=[];for(let i=0,n=t.length;i<n;i++){let r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Gt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new We);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let r=e[i];ii.setFromBufferAttribute(r),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(t){let i=this.boundingSphere.center;if(ii.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];bs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ae.addVectors(ii.min,bs.min),ii.expandByPoint(Ae),Ae.addVectors(ii.max,bs.max),ii.expandByPoint(Ae)):(ii.expandByPoint(bs.min),ii.expandByPoint(bs.max))}ii.getCenter(i);let n=0;for(let r=0,a=t.count;r<a;r++)Ae.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(Ae));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let h=0,c=o.count;h<c;h++)Ae.fromBufferAttribute(o,h),l&&(Fn.fromBufferAttribute(t,h),Ae.add(Fn)),n=Math.max(n,i.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,n=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _e(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<i.count;L++)o[L]=new E,l[L]=new E;let h=new E,c=new E,u=new E,d=new ct,f=new ct,g=new ct,y=new E,m=new E;function p(L,k,v){h.fromBufferAttribute(i,L),c.fromBufferAttribute(i,k),u.fromBufferAttribute(i,v),d.fromBufferAttribute(r,L),f.fromBufferAttribute(r,k),g.fromBufferAttribute(r,v),c.sub(h),u.sub(h),f.sub(d),g.sub(d);let A=1/(f.x*g.y-g.x*f.y);isFinite(A)&&(y.copy(c).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(A),m.copy(u).multiplyScalar(f.x).addScaledVector(c,-g.x).multiplyScalar(A),o[L].add(y),o[k].add(y),o[v].add(y),l[L].add(m),l[k].add(m),l[v].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let L=0,k=b.length;L<k;++L){let v=b[L],A=v.start,J=v.count;for(let j=A,I=A+J;j<I;j+=3)p(t.getX(j+0),t.getX(j+1),t.getX(j+2))}let x=new E,M=new E,C=new E,R=new E;function T(L){C.fromBufferAttribute(n,L),R.copy(C);let k=o[L];x.copy(k),x.sub(C.multiplyScalar(C.dot(k))).normalize(),M.crossVectors(R,k);let A=M.dot(l[L])<0?-1:1;a.setXYZW(L,x.x,x.y,x.z,A)}for(let L=0,k=b.length;L<k;++L){let v=b[L],A=v.start,J=v.count;for(let j=A,I=A+J;j<I;j+=3)T(t.getX(j+0)),T(t.getX(j+1)),T(t.getX(j+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new _e(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let n=new E,r=new E,a=new E,o=new E,l=new E,h=new E,c=new E,u=new E;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),y=t.getX(d+1),m=t.getX(d+2);n.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,m),c.subVectors(a,r),u.subVectors(n,r),c.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),h.fromBufferAttribute(i,m),o.add(c),l.add(c),h.add(c),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,h.x,h.y,h.z)}else for(let d=0,f=e.count;d<f;d+=3)n.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),c.subVectors(a,r),u.subVectors(n,r),c.cross(u),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(o,l){let h=o.array,c=o.itemSize,u=o.normalized,d=new h.constructor(l.length*c),f=0,g=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*c;for(let p=0;p<c;p++)d[g++]=h[f++]}return new _e(d,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,i=this.index.array,n=this.attributes;for(let o in n){let l=n[o],h=t(l,i);e.setAttribute(o,h)}let r=this.morphAttributes;for(let o in r){let l=[],h=r[o];for(let c=0,u=h.length;c<u;c++){let d=h[c],f=t(d,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let h=a[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let h=i[l];t.data.attributes[l]=h.toJSON(t.data)}let n={},r=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],c=[];for(let u=0,d=h.length;u<d;u++){let f=h[u];c.push(f.toJSON(t.data))}c.length>0&&(n[l]=c,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let n=t.attributes;for(let h in n){let c=n[h];this.setAttribute(h,c.clone(e))}let r=t.morphAttributes;for(let h in r){let c=[],u=r[h];for(let d=0,f=u.length;d<f;d++)c.push(u[d].clone(e));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let h=0,c=a.length;h<c;h++){let u=a[h];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},nc=new ee,cn=new Hr,ur=new tn,sc=new E,zn=new E,On=new E,kn=new E,Fo=new E,dr=new E,fr=new ct,pr=new ct,mr=new ct,rc=new E,ac=new E,oc=new E,gr=new E,xr=new E,St=class extends Oe{constructor(t=new ce,e=new si){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let o=this.morphTargetInfluences;if(r&&o){dr.set(0,0,0);for(let l=0,h=r.length;l<h;l++){let c=o[l],u=r[l];c!==0&&(Fo.fromBufferAttribute(u,t),a?dr.addScaledVector(Fo,c):dr.addScaledVector(Fo.sub(e),c))}e.add(dr)}return e}raycast(t,e){let i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ur.copy(i.boundingSphere),ur.applyMatrix4(r),cn.copy(t.ray).recast(t.near),!(ur.containsPoint(cn.origin)===!1&&(cn.intersectSphere(ur,sc)===null||cn.origin.distanceToSquared(sc)>(t.far-t.near)**2))&&(nc.copy(r).invert(),cn.copy(t.ray).applyMatrix4(nc),!(i.boundingBox!==null&&cn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,cn)))}_computeIntersections(t,e,i){let n,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,h=r.attributes.uv,c=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let m=d[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),x=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=b,C=x;M<C;M+=3){let R=o.getX(M),T=o.getX(M+1),L=o.getX(M+2);n=yr(this,p,t,i,h,c,u,R,T,L),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let b=o.getX(m),x=o.getX(m+1),M=o.getX(m+2);n=yr(this,a,t,i,h,c,u,b,x,M),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let m=d[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=b,C=x;M<C;M+=3){let R=M,T=M+1,L=M+2;n=yr(this,p,t,i,h,c,u,R,T,L),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let b=m,x=m+1,M=m+2;n=yr(this,a,t,i,h,c,u,b,x,M),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}};function Xd(s,t,e,i,n,r,a,o){let l;if(t.side===ze?l=i.intersectTriangle(a,r,n,!0,o):l=i.intersectTriangle(n,r,a,t.side===Ki,o),l===null)return null;xr.copy(o),xr.applyMatrix4(s.matrixWorld);let h=e.ray.origin.distanceTo(xr);return h<e.near||h>e.far?null:{distance:h,point:xr.clone(),object:s}}function yr(s,t,e,i,n,r,a,o,l,h){s.getVertexPosition(o,zn),s.getVertexPosition(l,On),s.getVertexPosition(h,kn);let c=Xd(s,t,e,i,zn,On,kn,gr);if(c){n&&(fr.fromBufferAttribute(n,o),pr.fromBufferAttribute(n,l),mr.fromBufferAttribute(n,h),c.uv=Wn.getInterpolation(gr,zn,On,kn,fr,pr,mr,new ct)),r&&(fr.fromBufferAttribute(r,o),pr.fromBufferAttribute(r,l),mr.fromBufferAttribute(r,h),c.uv1=Wn.getInterpolation(gr,zn,On,kn,fr,pr,mr,new ct)),a&&(rc.fromBufferAttribute(a,o),ac.fromBufferAttribute(a,l),oc.fromBufferAttribute(a,h),c.normal=Wn.getInterpolation(gr,zn,On,kn,rc,ac,oc,new E),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));let u={a:o,b:l,c:h,normal:new E,materialIndex:0};Wn.getNormal(zn,On,kn,u.normal),c.face=u}return c}var Fi=class s extends ce{constructor(t=1,e=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};let o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);let l=[],h=[],c=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,n,a,2),g("x","z","y",1,-1,t,i,-e,n,a,3),g("x","y","z",1,-1,t,e,i,n,r,4),g("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new Gt(h,3)),this.setAttribute("normal",new Gt(c,3)),this.setAttribute("uv",new Gt(u,2));function g(y,m,p,b,x,M,C,R,T,L,k){let v=M/T,A=C/L,J=M/2,j=C/2,I=R/2,W=T+1,N=L+1,Z=0,q=0,Y=new E;for(let ot=0;ot<N;ot++){let at=ot*A-j;for(let Mt=0;Mt<W;Mt++){let Ot=Mt*v-J;Y[y]=Ot*b,Y[m]=at*x,Y[p]=I,h.push(Y.x,Y.y,Y.z),Y[y]=0,Y[m]=0,Y[p]=R>0?1:-1,c.push(Y.x,Y.y,Y.z),u.push(Mt/T),u.push(1-ot/L),Z+=1}}for(let ot=0;ot<L;ot++)for(let at=0;at<T;at++){let Mt=d+at+W*ot,Ot=d+at+W*(ot+1),G=d+(at+1)+W*(ot+1),nt=d+(at+1)+W*ot;l.push(Mt,Ot,nt),l.push(Ot,G,nt),q+=6}o.addGroup(f,q,k),f+=q,d+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Qn(s){let t={};for(let e in s){t[e]={};for(let i in s[e]){let n=s[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function Ge(s){let t={};for(let e=0;e<s.length;e++){let i=Qn(s[e]);for(let n in i)t[n]=i[n]}return t}function qd(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Qc(s){return s.getRenderTarget()===null?s.outputColorSpace:se.workingColorSpace}var Yd={clone:Qn,merge:Ge},$d=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,bi=class extends Ni{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$d,this.fragmentShader=Zd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qn(t.uniforms),this.uniformsGroups=qd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Xr=class extends Oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=Di}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Xi=new E,lc=new ct,hc=new ct,Le=class extends Xr{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Qo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(xo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qo*2*Math.atan(Math.tan(xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Xi.x,Xi.y).multiplyScalar(-t/Xi.z),Xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xi.x,Xi.y).multiplyScalar(-t/Xi.z)}getViewSize(t,e){return this.getViewBounds(t,lc,hc),e.subVectors(hc,lc)}setViewOffset(t,e,i,n,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(xo*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,h=a.fullHeight;r+=a.offsetX*n/l,e-=a.offsetY*i/h,n*=a.width/l,i*=a.height/h}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Bn=-90,Hn=1,nl=class extends Oe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Le(Bn,Hn,t,e);n.layers=this.layers,this.add(n);let r=new Le(Bn,Hn,t,e);r.layers=this.layers,this.add(r);let a=new Le(Bn,Hn,t,e);a.layers=this.layers,this.add(a);let o=new Le(Bn,Hn,t,e);o.layers=this.layers,this.add(o);let l=new Le(Bn,Hn,t,e);l.layers=this.layers,this.add(l);let h=new Le(Bn,Hn,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,r,a,o,l]=e;for(let h of e)this.remove(h);if(t===Di)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Fr)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,h,c]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,r),t.setRenderTarget(i,1,n),t.render(e,a),t.setRenderTarget(i,2,n),t.render(e,o),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,h),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,n),t.render(e,c),t.setRenderTarget(u,d,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},qr=class extends Je{constructor(t,e,i,n,r,a,o,l,h,c){t=t!==void 0?t:[],e=e!==void 0?e:Jn,super(t,e,i,n,r,a,o,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},sl=class extends Ui{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new qr(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:$e}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new Fi(5,5,5),r=new bi({name:"CubemapFromEquirect",uniforms:Qn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ze,blending:$i});r.uniforms.tEquirect.value=e;let a=new St(n,r),o=e.minFilter;return e.minFilter===Ii&&(e.minFilter=$e),new nl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,n){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(r)}},zo=new E,Jd=new E,jd=new Yt,Li=class{constructor(t=new E(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=zo.subVectors(i,e).cross(Jd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(zo),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||jd.getNormalMatrix(t),n=this.coplanarPoint(zo).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},un=new tn,vr=new E,Ls=class{constructor(t=new Li,e=new Li,i=new Li,n=new Li,r=new Li,a=new Li){this.planes=[t,e,i,n,r,a]}set(t,e,i,n,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Di){let i=this.planes,n=t.elements,r=n[0],a=n[1],o=n[2],l=n[3],h=n[4],c=n[5],u=n[6],d=n[7],f=n[8],g=n[9],y=n[10],m=n[11],p=n[12],b=n[13],x=n[14],M=n[15];if(i[0].setComponents(l-r,d-h,m-f,M-p).normalize(),i[1].setComponents(l+r,d+h,m+f,M+p).normalize(),i[2].setComponents(l+a,d+c,m+g,M+b).normalize(),i[3].setComponents(l-a,d-c,m-g,M-b).normalize(),i[4].setComponents(l-o,d-u,m-y,M-x).normalize(),e===Di)i[5].setComponents(l+o,d+u,m+y,M+x).normalize();else if(e===Fr)i[5].setComponents(o,u,y,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),un.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),un.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(un)}intersectsSprite(t){return un.center.set(0,0,0),un.radius=.7071067811865476,un.applyMatrix4(t.matrixWorld),this.intersectsSphere(un)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(vr.x=n.normal.x>0?t.max.x:t.min.x,vr.y=n.normal.y>0?t.max.y:t.min.y,vr.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(vr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function tu(){let s=null,t=!1,e=null,i=null;function n(r,a){e(r,a),i=s.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Kd(s,t){let e=t.isWebGL2,i=new WeakMap;function n(h,c){let u=h.array,d=h.usage,f=u.byteLength,g=s.createBuffer();s.bindBuffer(c,g),s.bufferData(c,u,d),h.onUploadCallback();let y;if(u instanceof Float32Array)y=s.FLOAT;else if(u instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(e)y=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)y=s.SHORT;else if(u instanceof Uint32Array)y=s.UNSIGNED_INT;else if(u instanceof Int32Array)y=s.INT;else if(u instanceof Int8Array)y=s.BYTE;else if(u instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:y,bytesPerElement:u.BYTES_PER_ELEMENT,version:h.version,size:f}}function r(h,c,u){let d=c.array,f=c._updateRange,g=c.updateRanges;if(s.bindBuffer(u,h),f.count===-1&&g.length===0&&s.bufferSubData(u,0,d),g.length!==0){for(let y=0,m=g.length;y<m;y++){let p=g[y];e?s.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):s.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}c.clearUpdateRanges()}f.count!==-1&&(e?s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),c.onUploadCallback()}function a(h){return h.isInterleavedBufferAttribute&&(h=h.data),i.get(h)}function o(h){h.isInterleavedBufferAttribute&&(h=h.data);let c=i.get(h);c&&(s.deleteBuffer(c.buffer),i.delete(h))}function l(h,c){if(h.isGLBufferAttribute){let d=i.get(h);(!d||d.version<h.version)&&i.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);let u=i.get(h);if(u===void 0)i.set(h,n(h,c));else if(u.version<h.version){if(u.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,h,c),u.version=h.version}}return{get:a,remove:o,update:l}}var zi=class s extends ce{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(n),h=o+1,c=l+1,u=t/o,d=e/l,f=[],g=[],y=[],m=[];for(let p=0;p<c;p++){let b=p*d-a;for(let x=0;x<h;x++){let M=x*u-r;g.push(M,-b,0),y.push(0,0,1),m.push(x/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){let x=b+h*p,M=b+h*(p+1),C=b+1+h*(p+1),R=b+1+h*p;f.push(x,M,R),f.push(M,C,R)}this.setIndex(f),this.setAttribute("position",new Gt(g,3)),this.setAttribute("normal",new Gt(y,3)),this.setAttribute("uv",new Gt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},Qd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ef=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,af=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,of=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lf=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,cf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,df=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ff=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,pf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,mf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,gf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_f=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,bf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Sf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ef=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,wf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Tf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Af=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lf=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,If=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Df=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Uf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Nf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ff=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Of=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Gf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Vf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Yf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$f=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Qf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,tp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ep=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ip=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,np=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ap=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,op=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,up=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,gp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,xp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,yp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_p=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ep=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ap=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Pp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ip=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Up=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Np=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,zp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Op=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,kp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Bp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Gp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Wp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$p=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Zp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Qp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,tm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,em=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,am=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,om=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,lm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,hm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,um=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ym=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_m=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Mm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Em=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,wm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Am=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Cm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Im=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qt={alphahash_fragment:Qd,alphahash_pars_fragment:tf,alphamap_fragment:ef,alphamap_pars_fragment:nf,alphatest_fragment:sf,alphatest_pars_fragment:rf,aomap_fragment:af,aomap_pars_fragment:of,batching_pars_vertex:lf,batching_vertex:hf,begin_vertex:cf,beginnormal_vertex:uf,bsdfs:df,iridescence_fragment:ff,bumpmap_pars_fragment:pf,clipping_planes_fragment:mf,clipping_planes_pars_fragment:gf,clipping_planes_pars_vertex:xf,clipping_planes_vertex:yf,color_fragment:vf,color_pars_fragment:_f,color_pars_vertex:Mf,color_vertex:bf,common:Sf,cube_uv_reflection_fragment:Ef,defaultnormal_vertex:wf,displacementmap_pars_vertex:Tf,displacementmap_vertex:Af,emissivemap_fragment:Rf,emissivemap_pars_fragment:Cf,colorspace_fragment:Pf,colorspace_pars_fragment:Lf,envmap_fragment:If,envmap_common_pars_fragment:Df,envmap_pars_fragment:Uf,envmap_pars_vertex:Nf,envmap_physical_pars_fragment:Yf,envmap_vertex:Ff,fog_vertex:zf,fog_pars_vertex:Of,fog_fragment:kf,fog_pars_fragment:Bf,gradientmap_pars_fragment:Hf,lightmap_fragment:Gf,lightmap_pars_fragment:Vf,lights_lambert_fragment:Wf,lights_lambert_pars_fragment:Xf,lights_pars_begin:qf,lights_toon_fragment:$f,lights_toon_pars_fragment:Zf,lights_phong_fragment:Jf,lights_phong_pars_fragment:jf,lights_physical_fragment:Kf,lights_physical_pars_fragment:Qf,lights_fragment_begin:tp,lights_fragment_maps:ep,lights_fragment_end:ip,logdepthbuf_fragment:np,logdepthbuf_pars_fragment:sp,logdepthbuf_pars_vertex:rp,logdepthbuf_vertex:ap,map_fragment:op,map_pars_fragment:lp,map_particle_fragment:hp,map_particle_pars_fragment:cp,metalnessmap_fragment:up,metalnessmap_pars_fragment:dp,morphinstance_vertex:fp,morphcolor_vertex:pp,morphnormal_vertex:mp,morphtarget_pars_vertex:gp,morphtarget_vertex:xp,normal_fragment_begin:yp,normal_fragment_maps:vp,normal_pars_fragment:_p,normal_pars_vertex:Mp,normal_vertex:bp,normalmap_pars_fragment:Sp,clearcoat_normal_fragment_begin:Ep,clearcoat_normal_fragment_maps:wp,clearcoat_pars_fragment:Tp,iridescence_pars_fragment:Ap,opaque_fragment:Rp,packing:Cp,premultiplied_alpha_fragment:Pp,project_vertex:Lp,dithering_fragment:Ip,dithering_pars_fragment:Dp,roughnessmap_fragment:Up,roughnessmap_pars_fragment:Np,shadowmap_pars_fragment:Fp,shadowmap_pars_vertex:zp,shadowmap_vertex:Op,shadowmask_pars_fragment:kp,skinbase_vertex:Bp,skinning_pars_vertex:Hp,skinning_vertex:Gp,skinnormal_vertex:Vp,specularmap_fragment:Wp,specularmap_pars_fragment:Xp,tonemapping_fragment:qp,tonemapping_pars_fragment:Yp,transmission_fragment:$p,transmission_pars_fragment:Zp,uv_pars_fragment:Jp,uv_pars_vertex:jp,uv_vertex:Kp,worldpos_vertex:Qp,background_vert:tm,background_frag:em,backgroundCube_vert:im,backgroundCube_frag:nm,cube_vert:sm,cube_frag:rm,depth_vert:am,depth_frag:om,distanceRGBA_vert:lm,distanceRGBA_frag:hm,equirect_vert:cm,equirect_frag:um,linedashed_vert:dm,linedashed_frag:fm,meshbasic_vert:pm,meshbasic_frag:mm,meshlambert_vert:gm,meshlambert_frag:xm,meshmatcap_vert:ym,meshmatcap_frag:vm,meshnormal_vert:_m,meshnormal_frag:Mm,meshphong_vert:bm,meshphong_frag:Sm,meshphysical_vert:Em,meshphysical_frag:wm,meshtoon_vert:Tm,meshtoon_frag:Am,points_vert:Rm,points_frag:Cm,shadow_vert:Pm,shadow_frag:Lm,sprite_vert:Im,sprite_frag:Dm},pt={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},_i={basic:{uniforms:Ge([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:Ge([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Dt(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:Ge([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:Ge([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:Ge([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new Dt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:Ge([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:Ge([pt.points,pt.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:Ge([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:Ge([pt.common,pt.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:Ge([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:Ge([pt.sprite,pt.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:Ge([pt.common,pt.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:Ge([pt.lights,pt.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};_i.physical={uniforms:Ge([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};var _r={r:0,b:0,g:0},dn=new je,Um=new ee;function Nm(s,t,e,i,n,r,a){let o=new Dt(0),l=r===!0?0:1,h,c,u=null,d=0,f=null;function g(m,p){let b=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?e:t).get(x)),x===null?y(o,l):x&&x.isColor&&(y(x,1),b=!0);let M=s.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(s.autoClear||b)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===ca)?(c===void 0&&(c=new St(new Fi(1,1,1),new bi({name:"BackgroundCubeMaterial",uniforms:Qn(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:ze,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,R,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),dn.copy(p.backgroundRotation),dn.x*=-1,dn.y*=-1,dn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(dn.y*=-1,dn.z*=-1),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Um.makeRotationFromEuler(dn)),c.material.toneMapped=se.getTransfer(x.colorSpace)!==he,(u!==x||d!==x.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(h===void 0&&(h=new St(new zi(2,2),new bi({name:"BackgroundMaterial",uniforms:Qn(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(h)),h.material.uniforms.t2D.value=x,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=se.getTransfer(x.colorSpace)!==he,x.matrixAutoUpdate===!0&&x.updateMatrix(),h.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null))}function y(m,p){m.getRGB(_r,Qc(s)),i.buffers.color.setClear(_r.r,_r.g,_r.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,y(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,y(o,l)},render:g}}function Fm(s,t,e,i){let n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:t.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},l=m(null),h=l,c=!1;function u(I,W,N,Z,q){let Y=!1;if(a){let ot=y(Z,N,W);h!==ot&&(h=ot,f(h.object)),Y=p(I,Z,N,q),Y&&b(I,Z,N,q)}else{let ot=W.wireframe===!0;(h.geometry!==Z.id||h.program!==N.id||h.wireframe!==ot)&&(h.geometry=Z.id,h.program=N.id,h.wireframe=ot,Y=!0)}q!==null&&e.update(q,s.ELEMENT_ARRAY_BUFFER),(Y||c)&&(c=!1,L(I,W,N,Z),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function d(){return i.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function f(I){return i.isWebGL2?s.bindVertexArray(I):r.bindVertexArrayOES(I)}function g(I){return i.isWebGL2?s.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function y(I,W,N){let Z=N.wireframe===!0,q=o[I.id];q===void 0&&(q={},o[I.id]=q);let Y=q[W.id];Y===void 0&&(Y={},q[W.id]=Y);let ot=Y[Z];return ot===void 0&&(ot=m(d()),Y[Z]=ot),ot}function m(I){let W=[],N=[],Z=[];for(let q=0;q<n;q++)W[q]=0,N[q]=0,Z[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:N,attributeDivisors:Z,object:I,attributes:{},index:null}}function p(I,W,N,Z){let q=h.attributes,Y=W.attributes,ot=0,at=N.getAttributes();for(let Mt in at)if(at[Mt].location>=0){let G=q[Mt],nt=Y[Mt];if(nt===void 0&&(Mt==="instanceMatrix"&&I.instanceMatrix&&(nt=I.instanceMatrix),Mt==="instanceColor"&&I.instanceColor&&(nt=I.instanceColor)),G===void 0||G.attribute!==nt||nt&&G.data!==nt.data)return!0;ot++}return h.attributesNum!==ot||h.index!==Z}function b(I,W,N,Z){let q={},Y=W.attributes,ot=0,at=N.getAttributes();for(let Mt in at)if(at[Mt].location>=0){let G=Y[Mt];G===void 0&&(Mt==="instanceMatrix"&&I.instanceMatrix&&(G=I.instanceMatrix),Mt==="instanceColor"&&I.instanceColor&&(G=I.instanceColor));let nt={};nt.attribute=G,G&&G.data&&(nt.data=G.data),q[Mt]=nt,ot++}h.attributes=q,h.attributesNum=ot,h.index=Z}function x(){let I=h.newAttributes;for(let W=0,N=I.length;W<N;W++)I[W]=0}function M(I){C(I,0)}function C(I,W){let N=h.newAttributes,Z=h.enabledAttributes,q=h.attributeDivisors;N[I]=1,Z[I]===0&&(s.enableVertexAttribArray(I),Z[I]=1),q[I]!==W&&((i.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,W),q[I]=W)}function R(){let I=h.newAttributes,W=h.enabledAttributes;for(let N=0,Z=W.length;N<Z;N++)W[N]!==I[N]&&(s.disableVertexAttribArray(N),W[N]=0)}function T(I,W,N,Z,q,Y,ot){ot===!0?s.vertexAttribIPointer(I,W,N,q,Y):s.vertexAttribPointer(I,W,N,Z,q,Y)}function L(I,W,N,Z){if(i.isWebGL2===!1&&(I.isInstancedMesh||Z.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();let q=Z.attributes,Y=N.getAttributes(),ot=W.defaultAttributeValues;for(let at in Y){let Mt=Y[at];if(Mt.location>=0){let Ot=q[at];if(Ot===void 0&&(at==="instanceMatrix"&&I.instanceMatrix&&(Ot=I.instanceMatrix),at==="instanceColor"&&I.instanceColor&&(Ot=I.instanceColor)),Ot!==void 0){let G=Ot.normalized,nt=Ot.itemSize,vt=e.get(Ot);if(vt===void 0)continue;let Pt=vt.buffer,Tt=vt.type,Et=vt.bytesPerElement,$t=i.isWebGL2===!0&&(Tt===s.INT||Tt===s.UNSIGNED_INT||Ot.gpuType===Gc);if(Ot.isInterleavedBufferAttribute){let Lt=Ot.data,P=Lt.stride,ut=Ot.offset;if(Lt.isInstancedInterleavedBuffer){for(let $=0;$<Mt.locationSize;$++)C(Mt.location+$,Lt.meshPerAttribute);I.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Lt.meshPerAttribute*Lt.count)}else for(let $=0;$<Mt.locationSize;$++)M(Mt.location+$);s.bindBuffer(s.ARRAY_BUFFER,Pt);for(let $=0;$<Mt.locationSize;$++)T(Mt.location+$,nt/Mt.locationSize,Tt,G,P*Et,(ut+nt/Mt.locationSize*$)*Et,$t)}else{if(Ot.isInstancedBufferAttribute){for(let Lt=0;Lt<Mt.locationSize;Lt++)C(Mt.location+Lt,Ot.meshPerAttribute);I.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Ot.meshPerAttribute*Ot.count)}else for(let Lt=0;Lt<Mt.locationSize;Lt++)M(Mt.location+Lt);s.bindBuffer(s.ARRAY_BUFFER,Pt);for(let Lt=0;Lt<Mt.locationSize;Lt++)T(Mt.location+Lt,nt/Mt.locationSize,Tt,G,nt*Et,nt/Mt.locationSize*Lt*Et,$t)}}else if(ot!==void 0){let G=ot[at];if(G!==void 0)switch(G.length){case 2:s.vertexAttrib2fv(Mt.location,G);break;case 3:s.vertexAttrib3fv(Mt.location,G);break;case 4:s.vertexAttrib4fv(Mt.location,G);break;default:s.vertexAttrib1fv(Mt.location,G)}}}}R()}function k(){J();for(let I in o){let W=o[I];for(let N in W){let Z=W[N];for(let q in Z)g(Z[q].object),delete Z[q];delete W[N]}delete o[I]}}function v(I){if(o[I.id]===void 0)return;let W=o[I.id];for(let N in W){let Z=W[N];for(let q in Z)g(Z[q].object),delete Z[q];delete W[N]}delete o[I.id]}function A(I){for(let W in o){let N=o[W];if(N[I.id]===void 0)continue;let Z=N[I.id];for(let q in Z)g(Z[q].object),delete Z[q];delete N[I.id]}}function J(){j(),c=!0,h!==l&&(h=l,f(h.object))}function j(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:J,resetDefaultState:j,dispose:k,releaseStatesOfGeometry:v,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:M,disableUnusedAttributes:R}}function zm(s,t,e,i){let n=i.isWebGL2,r;function a(c){r=c}function o(c,u){s.drawArrays(r,c,u),e.update(u,r,1)}function l(c,u,d){if(d===0)return;let f,g;if(n)f=s,g="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,c,u,d),e.update(u,r,d)}function h(c,u,d){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(c[g],u[g]);else{f.multiDrawArraysWEBGL(r,c,0,u,0,d);let g=0;for(let y=0;y<d;y++)g+=u[y];e.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=h}function Om(s,t,e){let i;function n(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let h=a||t.has("WEBGL_draw_buffers"),c=e.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,M=a||t.has("OES_texture_float"),C=x&&M,R=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:h,getMaxAnisotropy:n,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:c,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:y,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:b,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:C,maxSamples:R}}function km(s){let t=this,e=null,i=0,n=!1,r=!1,a=new Li,o=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=c(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!n||g===null||g.length===0||r&&!m)r?c(null):h();else{let b=r?0:i,x=b*4,M=p.clippingState||null;l.value=M,M=c(g,d,x,f);for(let C=0;C!==x;++C)M[C]=e[C];p.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function c(u,d,f,g){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let p=f+y*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,M=f;x!==y;++x,M+=4)a.copy(u[x]).applyMatrix4(b,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function Bm(s){let t=new WeakMap;function e(a,o){return o===Zo?a.mapping=Jn:o===Jo&&(a.mapping=jn),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===Zo||o===Jo)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let h=new sl(l.height);return h.fromEquirectangularTexture(s,a),t.set(a,h),a.addEventListener("dispose",n),e(h.texture,a.mapping)}else return null}}return a}function n(a){let o=a.target;o.removeEventListener("dispose",n);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var Yr=class extends Xr{constructor(t=-1,e=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-t,a=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Xn=4,cc=[.125,.215,.35,.446,.526,.582],gn=20,Oo=new Yr,uc=new Dt,ko=null,Bo=0,Ho=0,pn=(1+Math.sqrt(5))/2,Gn=1/pn,dc=[new E(1,1,1),new E(-1,1,1),new E(1,1,-1),new E(-1,1,-1),new E(0,pn,Gn),new E(0,pn,-Gn),new E(Gn,0,pn),new E(-Gn,0,pn),new E(pn,Gn,0),new E(-pn,Gn,0)],$r=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){ko=this._renderer.getRenderTarget(),Bo=this._renderer.getActiveCubeFace(),Ho=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,n,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ko,Bo,Ho),t.scissorTest=!1,Mr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Jn||t.mapping===jn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ko=this._renderer.getRenderTarget(),Bo=this._renderer.getActiveCubeFace(),Ho=this._renderer.getActiveMipmapLevel();let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:$e,minFilter:$e,generateMipmaps:!1,type:Ps,format:ni,colorSpace:sn,depthBuffer:!1},n=fc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fc(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hm(r)),this._blurMaterial=Gm(r,t,e)}return n}_compileMaterial(t){let e=new St(this._lodPlanes[0],t);this._renderer.compile(e,Oo)}_sceneToCubeUV(t,e,i,n){let o=new Le(90,1,e,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],c=this._renderer,u=c.autoClear,d=c.toneMapping;c.getClearColor(uc),c.toneMapping=Ji,c.autoClear=!1;let f=new si({name:"PMREM.Background",side:ze,depthWrite:!1,depthTest:!1}),g=new St(new Fi,f),y=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,y=!0):(f.color.copy(uc),y=!0);for(let p=0;p<6;p++){let b=p%3;b===0?(o.up.set(0,l[p],0),o.lookAt(h[p],0,0)):b===1?(o.up.set(0,0,l[p]),o.lookAt(0,h[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,h[p]));let x=this._cubeSize;Mr(n,b*x,p>2?x:0,x,x),c.setRenderTarget(n),y&&c.render(g,o),c.render(t,o)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=d,c.autoClear=u,t.background=m}_textureToCubeUV(t,e){let i=this._renderer,n=t.mapping===Jn||t.mapping===jn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=mc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pc());let r=n?this._cubemapMaterial:this._equirectMaterial,a=new St(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Mr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Oo)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){let r=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),a=dc[(n-1)%dc.length];this._blur(t,n-1,n,r,a)}e.autoClear=i}_blur(t,e,i,n,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,n,"latitudinal",r),this._halfBlur(a,t,i,i,n,"longitudinal",r)}_halfBlur(t,e,i,n,r,a,o){let l=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let c=3,u=new St(this._lodPlanes[n],h),d=h.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*gn-1),y=r/g,m=isFinite(r)?1+Math.floor(c*y):gn;m>gn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${gn}`);let p=[],b=0;for(let T=0;T<gn;++T){let L=T/y,k=Math.exp(-L*L/2);p.push(k),T===0?b+=k:T<m&&(b+=2*k)}for(let T=0;T<p.length;T++)p[T]=p[T]/b;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-i;let M=this._sizeLods[n],C=3*M*(n>x-Xn?n-x+Xn:0),R=4*(this._cubeSize-M);Mr(e,C,R,3*M,2*M),l.setRenderTarget(e),l.render(u,Oo)}};function Hm(s){let t=[],e=[],i=[],n=s,r=s-Xn+1+cc.length;for(let a=0;a<r;a++){let o=Math.pow(2,n);e.push(o);let l=1/o;a>s-Xn?l=cc[a-s+Xn-1]:a===0&&(l=0),i.push(l);let h=1/(o-2),c=-h,u=1+h,d=[c,c,u,c,u,u,c,c,u,u,c,u],f=6,g=6,y=3,m=2,p=1,b=new Float32Array(y*g*f),x=new Float32Array(m*g*f),M=new Float32Array(p*g*f);for(let R=0;R<f;R++){let T=R%3*2/3-1,L=R>2?0:-1,k=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];b.set(k,y*g*R),x.set(d,m*g*R);let v=[R,R,R,R,R,R];M.set(v,p*g*R)}let C=new ce;C.setAttribute("position",new _e(b,y)),C.setAttribute("uv",new _e(x,m)),C.setAttribute("faceIndex",new _e(M,p)),t.push(C),n>Xn&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function fc(s,t,e){let i=new Ui(s,t,e);return i.texture.mapping=ca,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Mr(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function Gm(s,t,e){let i=new Float32Array(gn),n=new E(0,1,0);return new bi({name:"SphericalGaussianBlur",defines:{n:gn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function pc(){return new bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function mc(){return new bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Hl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Vm(s){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){let l=o.mapping,h=l===Zo||l===Jo,c=l===Jn||l===jn;if(h||c)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new $r(s)),u=h?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{let u=o.image;if(h&&u&&u.height>0||c&&u&&n(u)){e===null&&(e=new $r(s));let d=h?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function n(o){let l=0,h=6;for(let c=0;c<h;c++)o[c]!==void 0&&l++;return l===h}function r(o){let l=o.target;l.removeEventListener("dispose",r);let h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function Wm(s){let t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){let n=e(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Xm(s,t,e,i){let n={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let y=d.morphAttributes[g];for(let m=0,p=y.length;m<p;m++)t.remove(y[m])}d.removeEventListener("dispose",a),delete n[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return n[d.id]===!0||(d.addEventListener("dispose",a),n[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],s.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let y=f[g];for(let m=0,p=y.length;m<p;m++)t.update(y[m],s.ARRAY_BUFFER)}}function h(u){let d=[],f=u.index,g=u.attributes.position,y=0;if(f!==null){let b=f.array;y=f.version;for(let x=0,M=b.length;x<M;x+=3){let C=b[x+0],R=b[x+1],T=b[x+2];d.push(C,R,R,T,T,C)}}else if(g!==void 0){let b=g.array;y=g.version;for(let x=0,M=b.length/3-1;x<M;x+=3){let C=x+0,R=x+1,T=x+2;d.push(C,R,R,T,T,C)}}else return;let m=new(jc(d)?Wr:Vr)(d,1);m.version=y;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function c(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&h(u)}else h(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:c}}function qm(s,t,e,i){let n=i.isWebGL2,r;function a(f){r=f}let o,l;function h(f){o=f.type,l=f.bytesPerElement}function c(f,g){s.drawElements(r,g,o,f*l),e.update(g,r,1)}function u(f,g,y){if(y===0)return;let m,p;if(n)m=s,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,o,f*l,y),e.update(g,r,y)}function d(f,g,y){if(y===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<y;p++)this.render(f[p]/l,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,o,f,0,y);let p=0;for(let b=0;b<y;b++)p+=g[b];e.update(p,r,1)}}this.setMode=a,this.setIndex=h,this.render=c,this.renderInstances=u,this.renderMultiDraw=d}function Ym(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function $m(s,t){return s[0]-t[0]}function Zm(s,t){return Math.abs(t[1])-Math.abs(s[1])}function Jm(s,t,e){let i={},n=new Float32Array(8),r=new WeakMap,a=new Re,o=[];for(let h=0;h<8;h++)o[h]=[h,0];function l(h,c,u){let d=h.morphTargetInfluences;if(t.isWebGL2===!0){let f=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=f!==void 0?f.length:0,y=r.get(c);if(y===void 0||y.count!==g){let J=function(){v.dispose(),r.delete(c),c.removeEventListener("dispose",J)};y!==void 0&&y.texture.dispose();let m=c.morphAttributes.position!==void 0,p=c.morphAttributes.normal!==void 0,b=c.morphAttributes.color!==void 0,x=c.morphAttributes.position||[],M=c.morphAttributes.normal||[],C=c.morphAttributes.color||[],R=0;m===!0&&(R=1),p===!0&&(R=2),b===!0&&(R=3);let T=c.attributes.position.count*R,L=1;T>t.maxTextureSize&&(L=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);let k=new Float32Array(T*L*4*g),v=new Br(k,T,L,g);v.type=Mi,v.needsUpdate=!0;let A=R*4;for(let j=0;j<g;j++){let I=x[j],W=M[j],N=C[j],Z=T*L*4*j;for(let q=0;q<I.count;q++){let Y=q*A;m===!0&&(a.fromBufferAttribute(I,q),k[Z+Y+0]=a.x,k[Z+Y+1]=a.y,k[Z+Y+2]=a.z,k[Z+Y+3]=0),p===!0&&(a.fromBufferAttribute(W,q),k[Z+Y+4]=a.x,k[Z+Y+5]=a.y,k[Z+Y+6]=a.z,k[Z+Y+7]=0),b===!0&&(a.fromBufferAttribute(N,q),k[Z+Y+8]=a.x,k[Z+Y+9]=a.y,k[Z+Y+10]=a.z,k[Z+Y+11]=N.itemSize===4?a.w:1)}}y={count:g,texture:v,size:new ct(T,L)},r.set(c,y),c.addEventListener("dispose",J)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)u.getUniforms().setValue(s,"morphTexture",h.morphTexture,e);else{let m=0;for(let b=0;b<d.length;b++)m+=d[b];let p=c.morphTargetsRelative?1:1-m;u.getUniforms().setValue(s,"morphTargetBaseInfluence",p),u.getUniforms().setValue(s,"morphTargetInfluences",d)}u.getUniforms().setValue(s,"morphTargetsTexture",y.texture,e),u.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}else{let f=d===void 0?0:d.length,g=i[c.id];if(g===void 0||g.length!==f){g=[];for(let x=0;x<f;x++)g[x]=[x,0];i[c.id]=g}for(let x=0;x<f;x++){let M=g[x];M[0]=x,M[1]=d[x]}g.sort(Zm);for(let x=0;x<8;x++)x<f&&g[x][1]?(o[x][0]=g[x][0],o[x][1]=g[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort($m);let y=c.morphAttributes.position,m=c.morphAttributes.normal,p=0;for(let x=0;x<8;x++){let M=o[x],C=M[0],R=M[1];C!==Number.MAX_SAFE_INTEGER&&R?(y&&c.getAttribute("morphTarget"+x)!==y[C]&&c.setAttribute("morphTarget"+x,y[C]),m&&c.getAttribute("morphNormal"+x)!==m[C]&&c.setAttribute("morphNormal"+x,m[C]),n[x]=R,p+=R):(y&&c.hasAttribute("morphTarget"+x)===!0&&c.deleteAttribute("morphTarget"+x),m&&c.hasAttribute("morphNormal"+x)===!0&&c.deleteAttribute("morphNormal"+x),n[x]=0)}let b=c.morphTargetsRelative?1:1-p;u.getUniforms().setValue(s,"morphTargetBaseInfluence",b),u.getUniforms().setValue(s,"morphTargetInfluences",n)}}return{update:l}}function jm(s,t,e,i){let n=new WeakMap;function r(l){let h=i.render.frame,c=l.geometry,u=t.get(l,c);if(n.get(u)!==h&&(t.update(u),n.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==h&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;n.get(d)!==h&&(d.update(),n.set(d,h))}return u}function a(){n=new WeakMap}function o(l){let h=l.target;h.removeEventListener("dispose",o),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:a}}var Zr=class extends Je{constructor(t,e,i,n,r,a,o,l,h,c){if(c=c!==void 0?c:yn,c!==yn&&c!==Kn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===yn&&(i=Yi),i===void 0&&c===Kn&&(i=xn),super(null,n,r,a,o,l,c,i,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Se,this.minFilter=l!==void 0?l:Se,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},eu=new Je,iu=new Zr(1,1);iu.compareFunction=Jc;var nu=new Br,su=new il,ru=new qr,gc=[],xc=[],yc=new Float32Array(16),vc=new Float32Array(9),_c=new Float32Array(4);function hs(s,t,e){let i=s[0];if(i<=0||i>0)return s;let n=t*e,r=gc[n];if(r===void 0&&(r=new Float32Array(n),gc[n]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Ee(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function we(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function da(s,t){let e=xc[t];e===void 0&&(e=new Int32Array(t),xc[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function Km(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Qm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;s.uniform2fv(this.addr,t),we(e,t)}}function t0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;s.uniform3fv(this.addr,t),we(e,t)}}function e0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;s.uniform4fv(this.addr,t),we(e,t)}}function i0(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),we(e,t)}else{if(Ee(e,i))return;_c.set(i),s.uniformMatrix2fv(this.addr,!1,_c),we(e,i)}}function n0(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),we(e,t)}else{if(Ee(e,i))return;vc.set(i),s.uniformMatrix3fv(this.addr,!1,vc),we(e,i)}}function s0(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ee(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),we(e,t)}else{if(Ee(e,i))return;yc.set(i),s.uniformMatrix4fv(this.addr,!1,yc),we(e,i)}}function r0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function a0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;s.uniform2iv(this.addr,t),we(e,t)}}function o0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;s.uniform3iv(this.addr,t),we(e,t)}}function l0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;s.uniform4iv(this.addr,t),we(e,t)}}function h0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function c0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;s.uniform2uiv(this.addr,t),we(e,t)}}function u0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;s.uniform3uiv(this.addr,t),we(e,t)}}function d0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;s.uniform4uiv(this.addr,t),we(e,t)}}function f0(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r=this.type===s.SAMPLER_2D_SHADOW?iu:eu;e.setTexture2D(t||r,n)}function p0(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||su,n)}function m0(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||ru,n)}function g0(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||nu,n)}function x0(s){switch(s){case 5126:return Km;case 35664:return Qm;case 35665:return t0;case 35666:return e0;case 35674:return i0;case 35675:return n0;case 35676:return s0;case 5124:case 35670:return r0;case 35667:case 35671:return a0;case 35668:case 35672:return o0;case 35669:case 35673:return l0;case 5125:return h0;case 36294:return c0;case 36295:return u0;case 36296:return d0;case 35678:case 36198:case 36298:case 36306:case 35682:return f0;case 35679:case 36299:case 36307:return p0;case 35680:case 36300:case 36308:case 36293:return m0;case 36289:case 36303:case 36311:case 36292:return g0}}function y0(s,t){s.uniform1fv(this.addr,t)}function v0(s,t){let e=hs(t,this.size,2);s.uniform2fv(this.addr,e)}function _0(s,t){let e=hs(t,this.size,3);s.uniform3fv(this.addr,e)}function M0(s,t){let e=hs(t,this.size,4);s.uniform4fv(this.addr,e)}function b0(s,t){let e=hs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function S0(s,t){let e=hs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function E0(s,t){let e=hs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function w0(s,t){s.uniform1iv(this.addr,t)}function T0(s,t){s.uniform2iv(this.addr,t)}function A0(s,t){s.uniform3iv(this.addr,t)}function R0(s,t){s.uniform4iv(this.addr,t)}function C0(s,t){s.uniform1uiv(this.addr,t)}function P0(s,t){s.uniform2uiv(this.addr,t)}function L0(s,t){s.uniform3uiv(this.addr,t)}function I0(s,t){s.uniform4uiv(this.addr,t)}function D0(s,t,e){let i=this.cache,n=t.length,r=da(e,n);Ee(i,r)||(s.uniform1iv(this.addr,r),we(i,r));for(let a=0;a!==n;++a)e.setTexture2D(t[a]||eu,r[a])}function U0(s,t,e){let i=this.cache,n=t.length,r=da(e,n);Ee(i,r)||(s.uniform1iv(this.addr,r),we(i,r));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||su,r[a])}function N0(s,t,e){let i=this.cache,n=t.length,r=da(e,n);Ee(i,r)||(s.uniform1iv(this.addr,r),we(i,r));for(let a=0;a!==n;++a)e.setTextureCube(t[a]||ru,r[a])}function F0(s,t,e){let i=this.cache,n=t.length,r=da(e,n);Ee(i,r)||(s.uniform1iv(this.addr,r),we(i,r));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||nu,r[a])}function z0(s){switch(s){case 5126:return y0;case 35664:return v0;case 35665:return _0;case 35666:return M0;case 35674:return b0;case 35675:return S0;case 35676:return E0;case 5124:case 35670:return w0;case 35667:case 35671:return T0;case 35668:case 35672:return A0;case 35669:case 35673:return R0;case 5125:return C0;case 36294:return P0;case 36295:return L0;case 36296:return I0;case 35678:case 36198:case 36298:case 36306:case 35682:return D0;case 35679:case 36299:case 36307:return U0;case 35680:case 36300:case 36308:case 36293:return N0;case 36289:case 36303:case 36311:case 36292:return F0}}var rl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=x0(e.type)}},al=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=z0(e.type)}},ol=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let r=0,a=n.length;r!==a;++r){let o=n[r];o.setValue(t,e[o.id],i)}}},Go=/(\w+)(\])?(\[|\.)?/g;function Mc(s,t){s.seq.push(t),s.map[t.id]=t}function O0(s,t,e){let i=s.name,n=i.length;for(Go.lastIndex=0;;){let r=Go.exec(i),a=Go.lastIndex,o=r[1],l=r[2]==="]",h=r[3];if(l&&(o=o|0),h===void 0||h==="["&&a+2===n){Mc(e,h===void 0?new rl(o,s,t):new al(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new ol(o),Mc(e,u)),e=u}}}var Zn=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let r=t.getActiveUniform(e,n),a=t.getUniformLocation(e,r.name);O0(r,a,this)}}setValue(t,e,i,n){let r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,r=t.length;n!==r;++n){let a=t[n];a.id in e&&i.push(a)}return i}};function bc(s,t,e){let i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}var k0=37297,B0=0;function H0(s,t){let e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=n;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}function G0(s){let t=se.getPrimaries(se.workingColorSpace),e=se.getPrimaries(s),i;switch(t===e?i="":t===Nr&&e===Ur?i="LinearDisplayP3ToLinearSRGB":t===Ur&&e===Nr&&(i="LinearSRGBToLinearDisplayP3"),s){case sn:case ua:return[i,"LinearTransferOETF"];case Ze:case Bl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[i,"LinearTransferOETF"]}}function Sc(s,t,e){let i=s.getShaderParameter(t,s.COMPILE_STATUS),n=s.getShaderInfoLog(t).trim();if(i&&n==="")return"";let r=/ERROR: 0:(\d+)/.exec(n);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+n+`

`+H0(s.getShaderSource(t),a)}else return n}function V0(s,t){let e=G0(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function W0(s,t){let e;switch(t){case rd:e="Linear";break;case ad:e="Reinhard";break;case od:e="OptimizedCineon";break;case ld:e="ACESFilmic";break;case cd:e="AgX";break;case ud:e="Neutral";break;case hd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function X0(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.alphaToCoverage||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(qn).join(`
`)}function q0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qn).join(`
`)}function Y0(s){let t=[];for(let e in s){let i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function $0(s,t){let e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let r=s.getActiveAttrib(t,n),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function qn(s){return s!==""}function Ec(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Z0=/^[ \t]*#include +<([\w\d./]+)>/gm;function ll(s){return s.replace(Z0,j0)}var J0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function j0(s,t){let e=qt[t];if(e===void 0){let i=J0.get(t);if(i!==void 0)e=qt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return ll(e)}var K0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tc(s){return s.replace(K0,Q0)}function Q0(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Ac(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	`;return s.isWebGL2&&(t+=`precision ${s.precision} sampler3D;
		precision ${s.precision} sampler2DArray;
		precision ${s.precision} sampler2DShadow;
		precision ${s.precision} samplerCubeShadow;
		precision ${s.precision} sampler2DArrayShadow;
		precision ${s.precision} isampler2D;
		precision ${s.precision} isampler3D;
		precision ${s.precision} isamplerCube;
		precision ${s.precision} isampler2DArray;
		precision ${s.precision} usampler2D;
		precision ${s.precision} usampler3D;
		precision ${s.precision} usamplerCube;
		precision ${s.precision} usampler2DArray;
		`),s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function tg(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Gs?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===ha?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Pi&&(t="SHADOWMAP_TYPE_VSM"),t}function eg(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Jn:case jn:t="ENVMAP_TYPE_CUBE";break;case ca:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ig(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case jn:t="ENVMAP_MODE_REFRACTION";break}return t}function ng(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case zl:t="ENVMAP_BLENDING_MULTIPLY";break;case nd:t="ENVMAP_BLENDING_MIX";break;case sd:t="ENVMAP_BLENDING_ADD";break}return t}function sg(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function rg(s,t,e,i){let n=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=tg(e),h=eg(e),c=ig(e),u=ng(e),d=sg(e),f=e.isWebGL2?"":X0(e),g=q0(e),y=Y0(r),m=n.createProgram(),p,b,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(qn).join(`
`),p.length>0&&(p+=`
`),b=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(qn).join(`
`),b.length>0&&(b+=`
`)):(p=[Ac(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qn).join(`
`),b=[f,Ac(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ji?"#define TONE_MAPPING":"",e.toneMapping!==Ji?qt.tonemapping_pars_fragment:"",e.toneMapping!==Ji?W0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,V0("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(qn).join(`
`)),a=ll(a),a=Ec(a,e),a=wc(a,e),o=ll(o),o=Ec(o,e),o=wc(o,e),a=Tc(a),o=Tc(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,b=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Wh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Wh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);let M=x+p+a,C=x+b+o,R=bc(n,n.VERTEX_SHADER,M),T=bc(n,n.FRAGMENT_SHADER,C);n.attachShader(m,R),n.attachShader(m,T),e.index0AttributeName!==void 0?n.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(m,0,"position"),n.linkProgram(m);function L(J){if(s.debug.checkShaderErrors){let j=n.getProgramInfoLog(m).trim(),I=n.getShaderInfoLog(R).trim(),W=n.getShaderInfoLog(T).trim(),N=!0,Z=!0;if(n.getProgramParameter(m,n.LINK_STATUS)===!1)if(N=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,m,R,T);else{let q=Sc(n,R,"vertex"),Y=Sc(n,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(m,n.VALIDATE_STATUS)+`

Material Name: `+J.name+`
Material Type: `+J.type+`

Program Info Log: `+j+`
`+q+`
`+Y)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(I===""||W==="")&&(Z=!1);Z&&(J.diagnostics={runnable:N,programLog:j,vertexShader:{log:I,prefix:p},fragmentShader:{log:W,prefix:b}})}n.deleteShader(R),n.deleteShader(T),k=new Zn(n,m),v=$0(n,m)}let k;this.getUniforms=function(){return k===void 0&&L(this),k};let v;this.getAttributes=function(){return v===void 0&&L(this),v};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=n.getProgramParameter(m,k0)),A},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=B0++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=R,this.fragmentShader=T,this}var ag=0,hl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new cl(t),e.set(t,i)),i}},cl=class{constructor(t){this.id=ag++,this.code=t,this.usedTimes=0}};function og(s,t,e,i,n,r,a){let o=new Gr,l=new hl,h=new Set,c=[],u=n.isWebGL2,d=n.logarithmicDepthBuffer,f=n.vertexTextures,g=n.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return h.add(v),v===0?"uv":`uv${v}`}function p(v,A,J,j,I){let W=j.fog,N=I.geometry,Z=v.isMeshStandardMaterial?j.environment:null,q=(v.isMeshStandardMaterial?e:t).get(v.envMap||Z),Y=q&&q.mapping===ca?q.image.height:null,ot=y[v.type];v.precision!==null&&(g=n.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));let at=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Mt=at!==void 0?at.length:0,Ot=0;N.morphAttributes.position!==void 0&&(Ot=1),N.morphAttributes.normal!==void 0&&(Ot=2),N.morphAttributes.color!==void 0&&(Ot=3);let G,nt,vt,Pt;if(ot){let re=_i[ot];G=re.vertexShader,nt=re.fragmentShader}else G=v.vertexShader,nt=v.fragmentShader,l.update(v),vt=l.getVertexShaderID(v),Pt=l.getFragmentShaderID(v);let Tt=s.getRenderTarget(),Et=I.isInstancedMesh===!0,$t=I.isBatchedMesh===!0,Lt=!!v.map,P=!!v.matcap,ut=!!q,$=!!v.aoMap,lt=!!v.lightMap,tt=!!v.bumpMap,bt=!!v.normalMap,yt=!!v.displacementMap,wt=!!v.emissiveMap,Jt=!!v.metalnessMap,w=!!v.roughnessMap,_=v.anisotropy>0,V=v.clearcoat>0,X=v.iridescence>0,st=v.sheen>0,et=v.transmission>0,kt=_&&!!v.anisotropyMap,Ut=V&&!!v.clearcoatMap,ft=V&&!!v.clearcoatNormalMap,mt=V&&!!v.clearcoatRoughnessMap,Bt=X&&!!v.iridescenceMap,ht=X&&!!v.iridescenceThicknessMap,Me=st&&!!v.sheenColorMap,jt=st&&!!v.sheenRoughnessMap,It=!!v.specularMap,At=!!v.specularColorMap,Rt=!!v.specularIntensityMap,te=et&&!!v.transmissionMap,Vt=et&&!!v.thicknessMap,fe=!!v.gradientMap,D=!!v.alphaMap,gt=v.alphaTest>0,O=!!v.alphaHash,dt=!!v.extensions,xt=Ji;v.toneMapped&&(Tt===null||Tt.isXRRenderTarget===!0)&&(xt=s.toneMapping);let Kt={isWebGL2:u,shaderID:ot,shaderType:v.type,shaderName:v.name,vertexShader:G,fragmentShader:nt,defines:v.defines,customVertexShaderID:vt,customFragmentShaderID:Pt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:$t,instancing:Et,instancingColor:Et&&I.instanceColor!==null,instancingMorph:Et&&I.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Tt===null?s.outputColorSpace:Tt.isXRRenderTarget===!0?Tt.texture.colorSpace:sn,alphaToCoverage:!!v.alphaToCoverage,map:Lt,matcap:P,envMap:ut,envMapMode:ut&&q.mapping,envMapCubeUVHeight:Y,aoMap:$,lightMap:lt,bumpMap:tt,normalMap:bt,displacementMap:f&&yt,emissiveMap:wt,normalMapObjectSpace:bt&&v.normalMapType===Md,normalMapTangentSpace:bt&&v.normalMapType===kl,metalnessMap:Jt,roughnessMap:w,anisotropy:_,anisotropyMap:kt,clearcoat:V,clearcoatMap:Ut,clearcoatNormalMap:ft,clearcoatRoughnessMap:mt,iridescence:X,iridescenceMap:Bt,iridescenceThicknessMap:ht,sheen:st,sheenColorMap:Me,sheenRoughnessMap:jt,specularMap:It,specularColorMap:At,specularIntensityMap:Rt,transmission:et,transmissionMap:te,thicknessMap:Vt,gradientMap:fe,opaque:v.transparent===!1&&v.blending===Zi&&v.alphaToCoverage===!1,alphaMap:D,alphaTest:gt,alphaHash:O,combine:v.combine,mapUv:Lt&&m(v.map.channel),aoMapUv:$&&m(v.aoMap.channel),lightMapUv:lt&&m(v.lightMap.channel),bumpMapUv:tt&&m(v.bumpMap.channel),normalMapUv:bt&&m(v.normalMap.channel),displacementMapUv:yt&&m(v.displacementMap.channel),emissiveMapUv:wt&&m(v.emissiveMap.channel),metalnessMapUv:Jt&&m(v.metalnessMap.channel),roughnessMapUv:w&&m(v.roughnessMap.channel),anisotropyMapUv:kt&&m(v.anisotropyMap.channel),clearcoatMapUv:Ut&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:ft&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:mt&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Bt&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:jt&&m(v.sheenRoughnessMap.channel),specularMapUv:It&&m(v.specularMap.channel),specularColorMapUv:At&&m(v.specularColorMap.channel),specularIntensityMapUv:Rt&&m(v.specularIntensityMap.channel),transmissionMapUv:te&&m(v.transmissionMap.channel),thicknessMapUv:Vt&&m(v.thicknessMap.channel),alphaMapUv:D&&m(v.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(bt||_),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!N.attributes.uv&&(Lt||D),fog:!!W,useFog:v.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:I.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:Ot,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&J.length>0,shadowMapType:s.shadowMap.type,toneMapping:xt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Lt&&v.map.isVideoTexture===!0&&se.getTransfer(v.map.colorSpace)===he,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ie,flipSided:v.side===ze,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:dt&&v.extensions.derivatives===!0,extensionFragDepth:dt&&v.extensions.fragDepth===!0,extensionDrawBuffers:dt&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:dt&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:dt&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:dt&&v.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Kt.vertexUv1s=h.has(1),Kt.vertexUv2s=h.has(2),Kt.vertexUv3s=h.has(3),h.clear(),Kt}function b(v){let A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.customVertexShaderID),A.push(v.customFragmentShaderID)),v.defines!==void 0)for(let J in v.defines)A.push(J),A.push(v.defines[J]);return v.isRawShaderMaterial===!1&&(x(A,v),M(A,v),A.push(s.outputColorSpace)),A.push(v.customProgramCacheKey),A.join()}function x(v,A){v.push(A.precision),v.push(A.outputColorSpace),v.push(A.envMapMode),v.push(A.envMapCubeUVHeight),v.push(A.mapUv),v.push(A.alphaMapUv),v.push(A.lightMapUv),v.push(A.aoMapUv),v.push(A.bumpMapUv),v.push(A.normalMapUv),v.push(A.displacementMapUv),v.push(A.emissiveMapUv),v.push(A.metalnessMapUv),v.push(A.roughnessMapUv),v.push(A.anisotropyMapUv),v.push(A.clearcoatMapUv),v.push(A.clearcoatNormalMapUv),v.push(A.clearcoatRoughnessMapUv),v.push(A.iridescenceMapUv),v.push(A.iridescenceThicknessMapUv),v.push(A.sheenColorMapUv),v.push(A.sheenRoughnessMapUv),v.push(A.specularMapUv),v.push(A.specularColorMapUv),v.push(A.specularIntensityMapUv),v.push(A.transmissionMapUv),v.push(A.thicknessMapUv),v.push(A.combine),v.push(A.fogExp2),v.push(A.sizeAttenuation),v.push(A.morphTargetsCount),v.push(A.morphAttributeCount),v.push(A.numDirLights),v.push(A.numPointLights),v.push(A.numSpotLights),v.push(A.numSpotLightMaps),v.push(A.numHemiLights),v.push(A.numRectAreaLights),v.push(A.numDirLightShadows),v.push(A.numPointLightShadows),v.push(A.numSpotLightShadows),v.push(A.numSpotLightShadowsWithMaps),v.push(A.numLightProbes),v.push(A.shadowMapType),v.push(A.toneMapping),v.push(A.numClippingPlanes),v.push(A.numClipIntersection),v.push(A.depthPacking)}function M(v,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.instancingMorph&&o.enable(4),A.matcap&&o.enable(5),A.envMap&&o.enable(6),A.normalMapObjectSpace&&o.enable(7),A.normalMapTangentSpace&&o.enable(8),A.clearcoat&&o.enable(9),A.iridescence&&o.enable(10),A.alphaTest&&o.enable(11),A.vertexColors&&o.enable(12),A.vertexAlphas&&o.enable(13),A.vertexUv1s&&o.enable(14),A.vertexUv2s&&o.enable(15),A.vertexUv3s&&o.enable(16),A.vertexTangents&&o.enable(17),A.anisotropy&&o.enable(18),A.alphaHash&&o.enable(19),A.batching&&o.enable(20),v.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.alphaToCoverage&&o.enable(20),v.push(o.mask)}function C(v){let A=y[v.type],J;if(A){let j=_i[A];J=Yd.clone(j.uniforms)}else J=v.uniforms;return J}function R(v,A){let J;for(let j=0,I=c.length;j<I;j++){let W=c[j];if(W.cacheKey===A){J=W,++J.usedTimes;break}}return J===void 0&&(J=new rg(s,A,v,r),c.push(J)),J}function T(v){if(--v.usedTimes===0){let A=c.indexOf(v);c[A]=c[c.length-1],c.pop(),v.destroy()}}function L(v){l.remove(v)}function k(){l.dispose()}return{getParameters:p,getProgramCacheKey:b,getUniforms:C,acquireProgram:R,releaseProgram:T,releaseShaderCache:L,programs:c,dispose:k}}function lg(){let s=new WeakMap;function t(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function e(r){s.delete(r)}function i(r,a,o){s.get(r)[a]=o}function n(){s=new WeakMap}return{get:t,remove:e,update:i,dispose:n}}function hg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Rc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Cc(){let s=[],t=0,e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function a(u,d,f,g,y,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:y,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=y,p.group=m),t++,p}function o(u,d,f,g,y,m){let p=a(u,d,f,g,y,m);f.transmission>0?i.push(p):f.transparent===!0?n.push(p):e.push(p)}function l(u,d,f,g,y,m){let p=a(u,d,f,g,y,m);f.transmission>0?i.unshift(p):f.transparent===!0?n.unshift(p):e.unshift(p)}function h(u,d){e.length>1&&e.sort(u||hg),i.length>1&&i.sort(d||Rc),n.length>1&&n.sort(d||Rc)}function c(){for(let u=t,d=s.length;u<d;u++){let f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:o,unshift:l,finish:c,sort:h}}function cg(){let s=new WeakMap;function t(i,n){let r=s.get(i),a;return r===void 0?(a=new Cc,s.set(i,[a])):n>=r.length?(a=new Cc,r.push(a)):a=r[n],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function ug(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new E,color:new Dt};break;case"SpotLight":e={position:new E,direction:new E,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new E,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new E,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":e={color:new Dt,position:new E,halfWidth:new E,halfHeight:new E};break}return s[t.id]=e,e}}}function dg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var fg=0;function pg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function mg(s,t){let e=new ug,i=dg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new E);let r=new E,a=new ee,o=new ee;function l(c,u){let d=0,f=0,g=0;for(let J=0;J<9;J++)n.probe[J].set(0,0,0);let y=0,m=0,p=0,b=0,x=0,M=0,C=0,R=0,T=0,L=0,k=0;c.sort(pg);let v=u===!0?Math.PI:1;for(let J=0,j=c.length;J<j;J++){let I=c[J],W=I.color,N=I.intensity,Z=I.distance,q=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=W.r*N*v,f+=W.g*N*v,g+=W.b*N*v;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(I.sh.coefficients[Y],N);k++}else if(I.isDirectionalLight){let Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity*v),I.castShadow){let ot=I.shadow,at=i.get(I);at.shadowBias=ot.bias,at.shadowNormalBias=ot.normalBias,at.shadowRadius=ot.radius,at.shadowMapSize=ot.mapSize,n.directionalShadow[y]=at,n.directionalShadowMap[y]=q,n.directionalShadowMatrix[y]=I.shadow.matrix,M++}n.directional[y]=Y,y++}else if(I.isSpotLight){let Y=e.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(W).multiplyScalar(N*v),Y.distance=Z,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,n.spot[p]=Y;let ot=I.shadow;if(I.map&&(n.spotLightMap[T]=I.map,T++,ot.updateMatrices(I),I.castShadow&&L++),n.spotLightMatrix[p]=ot.matrix,I.castShadow){let at=i.get(I);at.shadowBias=ot.bias,at.shadowNormalBias=ot.normalBias,at.shadowRadius=ot.radius,at.shadowMapSize=ot.mapSize,n.spotShadow[p]=at,n.spotShadowMap[p]=q,R++}p++}else if(I.isRectAreaLight){let Y=e.get(I);Y.color.copy(W).multiplyScalar(N),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),n.rectArea[b]=Y,b++}else if(I.isPointLight){let Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity*v),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){let ot=I.shadow,at=i.get(I);at.shadowBias=ot.bias,at.shadowNormalBias=ot.normalBias,at.shadowRadius=ot.radius,at.shadowMapSize=ot.mapSize,at.shadowCameraNear=ot.camera.near,at.shadowCameraFar=ot.camera.far,n.pointShadow[m]=at,n.pointShadowMap[m]=q,n.pointShadowMatrix[m]=I.shadow.matrix,C++}n.point[m]=Y,m++}else if(I.isHemisphereLight){let Y=e.get(I);Y.skyColor.copy(I.color).multiplyScalar(N*v),Y.groundColor.copy(I.groundColor).multiplyScalar(N*v),n.hemi[x]=Y,x++}}b>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pt.LTC_FLOAT_1,n.rectAreaLTC2=pt.LTC_FLOAT_2):(n.rectAreaLTC1=pt.LTC_HALF_1,n.rectAreaLTC2=pt.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pt.LTC_FLOAT_1,n.rectAreaLTC2=pt.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=pt.LTC_HALF_1,n.rectAreaLTC2=pt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=g;let A=n.hash;(A.directionalLength!==y||A.pointLength!==m||A.spotLength!==p||A.rectAreaLength!==b||A.hemiLength!==x||A.numDirectionalShadows!==M||A.numPointShadows!==C||A.numSpotShadows!==R||A.numSpotMaps!==T||A.numLightProbes!==k)&&(n.directional.length=y,n.spot.length=p,n.rectArea.length=b,n.point.length=m,n.hemi.length=x,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=C,n.pointShadowMap.length=C,n.spotShadow.length=R,n.spotShadowMap.length=R,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=C,n.spotLightMatrix.length=R+T-L,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=k,A.directionalLength=y,A.pointLength=m,A.spotLength=p,A.rectAreaLength=b,A.hemiLength=x,A.numDirectionalShadows=M,A.numPointShadows=C,A.numSpotShadows=R,A.numSpotMaps=T,A.numLightProbes=k,n.version=fg++)}function h(c,u){let d=0,f=0,g=0,y=0,m=0,p=u.matrixWorldInverse;for(let b=0,x=c.length;b<x;b++){let M=c[b];if(M.isDirectionalLight){let C=n.directional[d];C.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(p),d++}else if(M.isSpotLight){let C=n.spot[g];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(p),C.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(p),g++}else if(M.isRectAreaLight){let C=n.rectArea[y];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(p),o.identity(),a.copy(M.matrixWorld),a.premultiply(p),o.extractRotation(a),C.halfWidth.set(M.width*.5,0,0),C.halfHeight.set(0,M.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),y++}else if(M.isPointLight){let C=n.point[f];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){let C=n.hemi[m];C.direction.setFromMatrixPosition(M.matrixWorld),C.direction.transformDirection(p),m++}}}return{setup:l,setupView:h,state:n}}function Pc(s,t){let e=new mg(s,t),i=[],n=[];function r(){i.length=0,n.length=0}function a(u){i.push(u)}function o(u){n.push(u)}function l(u){e.setup(i,u)}function h(u){e.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:n,lights:e},setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o}}function gg(s,t){let e=new WeakMap;function i(r,a=0){let o=e.get(r),l;return o===void 0?(l=new Pc(s,t),e.set(r,[l])):a>=o.length?(l=new Pc(s,t),o.push(l)):l=o[a],l}function n(){e=new WeakMap}return{get:i,dispose:n}}var ul=class extends Ni{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},dl=class extends Ni{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},xg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function vg(s,t,e){let i=new Ls,n=new ct,r=new ct,a=new Re,o=new ul({depthPacking:_d}),l=new dl,h={},c=e.maxTextureSize,u={[Ki]:ze,[ze]:Ki,[Ie]:Ie},d=new bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:xg,fragmentShader:yg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new ce;g.setAttribute("position",new _e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new St(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gs;let p=this.type;this.render=function(R,T,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let k=s.getRenderTarget(),v=s.getActiveCubeFace(),A=s.getActiveMipmapLevel(),J=s.state;J.setBlending($i),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);let j=p!==Pi&&this.type===Pi,I=p===Pi&&this.type!==Pi;for(let W=0,N=R.length;W<N;W++){let Z=R[W],q=Z.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;n.copy(q.mapSize);let Y=q.getFrameExtents();if(n.multiply(Y),r.copy(q.mapSize),(n.x>c||n.y>c)&&(n.x>c&&(r.x=Math.floor(c/Y.x),n.x=r.x*Y.x,q.mapSize.x=r.x),n.y>c&&(r.y=Math.floor(c/Y.y),n.y=r.y*Y.y,q.mapSize.y=r.y)),q.map===null||j===!0||I===!0){let at=this.type!==Pi?{minFilter:Se,magFilter:Se}:{};q.map!==null&&q.map.dispose(),q.map=new Ui(n.x,n.y,at),q.map.texture.name=Z.name+".shadowMap",q.camera.updateProjectionMatrix()}s.setRenderTarget(q.map),s.clear();let ot=q.getViewportCount();for(let at=0;at<ot;at++){let Mt=q.getViewport(at);a.set(r.x*Mt.x,r.y*Mt.y,r.x*Mt.z,r.y*Mt.w),J.viewport(a),q.updateMatrices(Z,at),i=q.getFrustum(),M(T,L,q.camera,Z,this.type)}q.isPointLightShadow!==!0&&this.type===Pi&&b(q,L),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(k,v,A)};function b(R,T){let L=t.update(y);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ui(n.x,n.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(T,null,L,d,y,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(T,null,L,f,y,null)}function x(R,T,L,k){let v=null,A=L.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(A!==void 0)v=A;else if(v=L.isPointLight===!0?l:o,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let J=v.uuid,j=T.uuid,I=h[J];I===void 0&&(I={},h[J]=I);let W=I[j];W===void 0&&(W=v.clone(),I[j]=W,T.addEventListener("dispose",C)),v=W}if(v.visible=T.visible,v.wireframe=T.wireframe,k===Pi?v.side=T.shadowSide!==null?T.shadowSide:T.side:v.side=T.shadowSide!==null?T.shadowSide:u[T.side],v.alphaMap=T.alphaMap,v.alphaTest=T.alphaTest,v.map=T.map,v.clipShadows=T.clipShadows,v.clippingPlanes=T.clippingPlanes,v.clipIntersection=T.clipIntersection,v.displacementMap=T.displacementMap,v.displacementScale=T.displacementScale,v.displacementBias=T.displacementBias,v.wireframeLinewidth=T.wireframeLinewidth,v.linewidth=T.linewidth,L.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let J=s.properties.get(v);J.light=L}return v}function M(R,T,L,k,v){if(R.visible===!1)return;if(R.layers.test(T.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&v===Pi)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,R.matrixWorld);let j=t.update(R),I=R.material;if(Array.isArray(I)){let W=j.groups;for(let N=0,Z=W.length;N<Z;N++){let q=W[N],Y=I[q.materialIndex];if(Y&&Y.visible){let ot=x(R,Y,k,v);R.onBeforeShadow(s,R,T,L,j,ot,q),s.renderBufferDirect(L,null,j,ot,R,q),R.onAfterShadow(s,R,T,L,j,ot,q)}}}else if(I.visible){let W=x(R,I,k,v);R.onBeforeShadow(s,R,T,L,j,W,null),s.renderBufferDirect(L,null,j,W,R,null),R.onAfterShadow(s,R,T,L,j,W,null)}}let J=R.children;for(let j=0,I=J.length;j<I;j++)M(J[j],T,L,k,v)}function C(R){R.target.removeEventListener("dispose",C);for(let L in h){let k=h[L],v=R.target.uuid;v in k&&(k[v].dispose(),delete k[v])}}}function _g(s,t,e){let i=e.isWebGL2;function n(){let D=!1,gt=new Re,O=null,dt=new Re(0,0,0,0);return{setMask:function(xt){O!==xt&&!D&&(s.colorMask(xt,xt,xt,xt),O=xt)},setLocked:function(xt){D=xt},setClear:function(xt,Kt,re,Pe,oi){oi===!0&&(xt*=Pe,Kt*=Pe,re*=Pe),gt.set(xt,Kt,re,Pe),dt.equals(gt)===!1&&(s.clearColor(xt,Kt,re,Pe),dt.copy(gt))},reset:function(){D=!1,O=null,dt.set(-1,0,0,0)}}}function r(){let D=!1,gt=null,O=null,dt=null;return{setTest:function(xt){xt?Et(s.DEPTH_TEST):$t(s.DEPTH_TEST)},setMask:function(xt){gt!==xt&&!D&&(s.depthMask(xt),gt=xt)},setFunc:function(xt){if(O!==xt){switch(xt){case Ju:s.depthFunc(s.NEVER);break;case ju:s.depthFunc(s.ALWAYS);break;case Ku:s.depthFunc(s.LESS);break;case Pr:s.depthFunc(s.LEQUAL);break;case Qu:s.depthFunc(s.EQUAL);break;case td:s.depthFunc(s.GEQUAL);break;case ed:s.depthFunc(s.GREATER);break;case id:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}O=xt}},setLocked:function(xt){D=xt},setClear:function(xt){dt!==xt&&(s.clearDepth(xt),dt=xt)},reset:function(){D=!1,gt=null,O=null,dt=null}}}function a(){let D=!1,gt=null,O=null,dt=null,xt=null,Kt=null,re=null,Pe=null,oi=null;return{setTest:function(ae){D||(ae?Et(s.STENCIL_TEST):$t(s.STENCIL_TEST))},setMask:function(ae){gt!==ae&&!D&&(s.stencilMask(ae),gt=ae)},setFunc:function(ae,He,vi){(O!==ae||dt!==He||xt!==vi)&&(s.stencilFunc(ae,He,vi),O=ae,dt=He,xt=vi)},setOp:function(ae,He,vi){(Kt!==ae||re!==He||Pe!==vi)&&(s.stencilOp(ae,He,vi),Kt=ae,re=He,Pe=vi)},setLocked:function(ae){D=ae},setClear:function(ae){oi!==ae&&(s.clearStencil(ae),oi=ae)},reset:function(){D=!1,gt=null,O=null,dt=null,xt=null,Kt=null,re=null,Pe=null,oi=null}}}let o=new n,l=new r,h=new a,c=new WeakMap,u=new WeakMap,d={},f={},g=new WeakMap,y=[],m=null,p=!1,b=null,x=null,M=null,C=null,R=null,T=null,L=null,k=new Dt(0,0,0),v=0,A=!1,J=null,j=null,I=null,W=null,N=null,Z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,Y=0,ot=s.getParameter(s.VERSION);ot.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(ot)[1]),q=Y>=1):ot.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(ot)[1]),q=Y>=2);let at=null,Mt={},Ot=s.getParameter(s.SCISSOR_BOX),G=s.getParameter(s.VIEWPORT),nt=new Re().fromArray(Ot),vt=new Re().fromArray(G);function Pt(D,gt,O,dt){let xt=new Uint8Array(4),Kt=s.createTexture();s.bindTexture(D,Kt),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let re=0;re<O;re++)i&&(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)?s.texImage3D(gt,0,s.RGBA,1,1,dt,0,s.RGBA,s.UNSIGNED_BYTE,xt):s.texImage2D(gt+re,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,xt);return Kt}let Tt={};Tt[s.TEXTURE_2D]=Pt(s.TEXTURE_2D,s.TEXTURE_2D,1),Tt[s.TEXTURE_CUBE_MAP]=Pt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Tt[s.TEXTURE_2D_ARRAY]=Pt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Tt[s.TEXTURE_3D]=Pt(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),h.setClear(0),Et(s.DEPTH_TEST),l.setFunc(Pr),yt(!1),wt(lh),Et(s.CULL_FACE),tt($i);function Et(D){d[D]!==!0&&(s.enable(D),d[D]=!0)}function $t(D){d[D]!==!1&&(s.disable(D),d[D]=!1)}function Lt(D,gt){return f[D]!==gt?(s.bindFramebuffer(D,gt),f[D]=gt,i&&(D===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=gt),D===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=gt)),!0):!1}function P(D,gt){let O=y,dt=!1;if(D){O=g.get(gt),O===void 0&&(O=[],g.set(gt,O));let xt=D.textures;if(O.length!==xt.length||O[0]!==s.COLOR_ATTACHMENT0){for(let Kt=0,re=xt.length;Kt<re;Kt++)O[Kt]=s.COLOR_ATTACHMENT0+Kt;O.length=xt.length,dt=!0}}else O[0]!==s.BACK&&(O[0]=s.BACK,dt=!0);if(dt)if(e.isWebGL2)s.drawBuffers(O);else if(t.has("WEBGL_draw_buffers")===!0)t.get("WEBGL_draw_buffers").drawBuffersWEBGL(O);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function ut(D){return m!==D?(s.useProgram(D),m=D,!0):!1}let $={[mn]:s.FUNC_ADD,[Nu]:s.FUNC_SUBTRACT,[Fu]:s.FUNC_REVERSE_SUBTRACT};if(i)$[uh]=s.MIN,$[dh]=s.MAX;else{let D=t.get("EXT_blend_minmax");D!==null&&($[uh]=D.MIN_EXT,$[dh]=D.MAX_EXT)}let lt={[zu]:s.ZERO,[Ou]:s.ONE,[ku]:s.SRC_COLOR,[Yo]:s.SRC_ALPHA,[Xu]:s.SRC_ALPHA_SATURATE,[Vu]:s.DST_COLOR,[Hu]:s.DST_ALPHA,[Bu]:s.ONE_MINUS_SRC_COLOR,[$o]:s.ONE_MINUS_SRC_ALPHA,[Wu]:s.ONE_MINUS_DST_COLOR,[Gu]:s.ONE_MINUS_DST_ALPHA,[qu]:s.CONSTANT_COLOR,[Yu]:s.ONE_MINUS_CONSTANT_COLOR,[$u]:s.CONSTANT_ALPHA,[Zu]:s.ONE_MINUS_CONSTANT_ALPHA};function tt(D,gt,O,dt,xt,Kt,re,Pe,oi,ae){if(D===$i){p===!0&&($t(s.BLEND),p=!1);return}if(p===!1&&(Et(s.BLEND),p=!0),D!==Uu){if(D!==b||ae!==A){if((x!==mn||R!==mn)&&(s.blendEquation(s.FUNC_ADD),x=mn,R=mn),ae)switch(D){case Zi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Cr:s.blendFunc(s.ONE,s.ONE);break;case hh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ch:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Zi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Cr:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case hh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ch:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}M=null,C=null,T=null,L=null,k.set(0,0,0),v=0,b=D,A=ae}return}xt=xt||gt,Kt=Kt||O,re=re||dt,(gt!==x||xt!==R)&&(s.blendEquationSeparate($[gt],$[xt]),x=gt,R=xt),(O!==M||dt!==C||Kt!==T||re!==L)&&(s.blendFuncSeparate(lt[O],lt[dt],lt[Kt],lt[re]),M=O,C=dt,T=Kt,L=re),(Pe.equals(k)===!1||oi!==v)&&(s.blendColor(Pe.r,Pe.g,Pe.b,oi),k.copy(Pe),v=oi),b=D,A=!1}function bt(D,gt){D.side===Ie?$t(s.CULL_FACE):Et(s.CULL_FACE);let O=D.side===ze;gt&&(O=!O),yt(O),D.blending===Zi&&D.transparent===!1?tt($i):tt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),o.setMask(D.colorWrite);let dt=D.stencilWrite;h.setTest(dt),dt&&(h.setMask(D.stencilWriteMask),h.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),h.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),w(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Et(s.SAMPLE_ALPHA_TO_COVERAGE):$t(s.SAMPLE_ALPHA_TO_COVERAGE)}function yt(D){J!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),J=D)}function wt(D){D!==Iu?(Et(s.CULL_FACE),D!==j&&(D===lh?s.cullFace(s.BACK):D===Du?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):$t(s.CULL_FACE),j=D}function Jt(D){D!==I&&(q&&s.lineWidth(D),I=D)}function w(D,gt,O){D?(Et(s.POLYGON_OFFSET_FILL),(W!==gt||N!==O)&&(s.polygonOffset(gt,O),W=gt,N=O)):$t(s.POLYGON_OFFSET_FILL)}function _(D){D?Et(s.SCISSOR_TEST):$t(s.SCISSOR_TEST)}function V(D){D===void 0&&(D=s.TEXTURE0+Z-1),at!==D&&(s.activeTexture(D),at=D)}function X(D,gt,O){O===void 0&&(at===null?O=s.TEXTURE0+Z-1:O=at);let dt=Mt[O];dt===void 0&&(dt={type:void 0,texture:void 0},Mt[O]=dt),(dt.type!==D||dt.texture!==gt)&&(at!==O&&(s.activeTexture(O),at=O),s.bindTexture(D,gt||Tt[D]),dt.type=D,dt.texture=gt)}function st(){let D=Mt[at];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function et(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function kt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ut(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ft(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function mt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Bt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ht(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function jt(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function It(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function At(D){nt.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),nt.copy(D))}function Rt(D){vt.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),vt.copy(D))}function te(D,gt){let O=u.get(gt);O===void 0&&(O=new WeakMap,u.set(gt,O));let dt=O.get(D);dt===void 0&&(dt=s.getUniformBlockIndex(gt,D.name),O.set(D,dt))}function Vt(D,gt){let dt=u.get(gt).get(D);c.get(gt)!==dt&&(s.uniformBlockBinding(gt,dt,D.__bindingPointIndex),c.set(gt,dt))}function fe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),i===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},at=null,Mt={},f={},g=new WeakMap,y=[],m=null,p=!1,b=null,x=null,M=null,C=null,R=null,T=null,L=null,k=new Dt(0,0,0),v=0,A=!1,J=null,j=null,I=null,W=null,N=null,nt.set(0,0,s.canvas.width,s.canvas.height),vt.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),h.reset()}return{buffers:{color:o,depth:l,stencil:h},enable:Et,disable:$t,bindFramebuffer:Lt,drawBuffers:P,useProgram:ut,setBlending:tt,setMaterial:bt,setFlipSided:yt,setCullFace:wt,setLineWidth:Jt,setPolygonOffset:w,setScissorTest:_,activeTexture:V,bindTexture:X,unbindTexture:st,compressedTexImage2D:et,compressedTexImage3D:kt,texImage2D:jt,texImage3D:It,updateUBOMapping:te,uniformBlockBinding:Vt,texStorage2D:ht,texStorage3D:Me,texSubImage2D:Ut,texSubImage3D:ft,compressedTexSubImage2D:mt,compressedTexSubImage3D:Bt,scissor:At,viewport:Rt,reset:fe}}function Mg(s,t,e,i,n,r,a){let o=n.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,u=new WeakMap,d,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(w,_){return g?new OffscreenCanvas(w,_):zr("canvas")}function m(w,_,V,X){let st=1,et=Jt(w);if((et.width>X||et.height>X)&&(st=X/Math.max(et.width,et.height)),st<1||_===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let kt=_?tl:Math.floor,Ut=kt(st*et.width),ft=kt(st*et.height);d===void 0&&(d=y(Ut,ft));let mt=V?y(Ut,ft):d;return mt.width=Ut,mt.height=ft,mt.getContext("2d").drawImage(w,0,0,Ut,ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+Ut+"x"+ft+")."),mt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),w;return w}function p(w){let _=Jt(w);return Xh(_.width)&&Xh(_.height)}function b(w){return o?!1:w.wrapS!==mi||w.wrapT!==mi||w.minFilter!==Se&&w.minFilter!==$e}function x(w,_){return w.generateMipmaps&&_&&w.minFilter!==Se&&w.minFilter!==$e}function M(w){s.generateMipmap(w)}function C(w,_,V,X,st=!1){if(o===!1)return _;if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let et=_;if(_===s.RED&&(V===s.FLOAT&&(et=s.R32F),V===s.HALF_FLOAT&&(et=s.R16F),V===s.UNSIGNED_BYTE&&(et=s.R8)),_===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(et=s.R8UI),V===s.UNSIGNED_SHORT&&(et=s.R16UI),V===s.UNSIGNED_INT&&(et=s.R32UI),V===s.BYTE&&(et=s.R8I),V===s.SHORT&&(et=s.R16I),V===s.INT&&(et=s.R32I)),_===s.RG&&(V===s.FLOAT&&(et=s.RG32F),V===s.HALF_FLOAT&&(et=s.RG16F),V===s.UNSIGNED_BYTE&&(et=s.RG8)),_===s.RG_INTEGER&&(V===s.UNSIGNED_BYTE&&(et=s.RG8UI),V===s.UNSIGNED_SHORT&&(et=s.RG16UI),V===s.UNSIGNED_INT&&(et=s.RG32UI),V===s.BYTE&&(et=s.RG8I),V===s.SHORT&&(et=s.RG16I),V===s.INT&&(et=s.RG32I)),_===s.RGBA){let kt=st?Dr:se.getTransfer(X);V===s.FLOAT&&(et=s.RGBA32F),V===s.HALF_FLOAT&&(et=s.RGBA16F),V===s.UNSIGNED_BYTE&&(et=kt===he?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT_4_4_4_4&&(et=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(et=s.RGB5_A1)}return(et===s.R16F||et===s.R32F||et===s.RG16F||et===s.RG32F||et===s.RGBA16F||et===s.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function R(w,_,V){return x(w,V)===!0||w.isFramebufferTexture&&w.minFilter!==Se&&w.minFilter!==$e?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function T(w){return w===Se||w===fh||w===xs?s.NEAREST:s.LINEAR}function L(w){let _=w.target;_.removeEventListener("dispose",L),v(_),_.isVideoTexture&&u.delete(_)}function k(w){let _=w.target;_.removeEventListener("dispose",k),J(_)}function v(w){let _=i.get(w);if(_.__webglInit===void 0)return;let V=w.source,X=f.get(V);if(X){let st=X[_.__cacheKey];st.usedTimes--,st.usedTimes===0&&A(w),Object.keys(X).length===0&&f.delete(V)}i.remove(w)}function A(w){let _=i.get(w);s.deleteTexture(_.__webglTexture);let V=w.source,X=f.get(V);delete X[_.__cacheKey],a.memory.textures--}function J(w){let _=i.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(_.__webglFramebuffer[X]))for(let st=0;st<_.__webglFramebuffer[X].length;st++)s.deleteFramebuffer(_.__webglFramebuffer[X][st]);else s.deleteFramebuffer(_.__webglFramebuffer[X]);_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer[X])}else{if(Array.isArray(_.__webglFramebuffer))for(let X=0;X<_.__webglFramebuffer.length;X++)s.deleteFramebuffer(_.__webglFramebuffer[X]);else s.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&s.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let X=0;X<_.__webglColorRenderbuffer.length;X++)_.__webglColorRenderbuffer[X]&&s.deleteRenderbuffer(_.__webglColorRenderbuffer[X]);_.__webglDepthRenderbuffer&&s.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let V=w.textures;for(let X=0,st=V.length;X<st;X++){let et=i.get(V[X]);et.__webglTexture&&(s.deleteTexture(et.__webglTexture),a.memory.textures--),i.remove(V[X])}i.remove(w)}let j=0;function I(){j=0}function W(){let w=j;return w>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+n.maxTextures),j+=1,w}function N(w){let _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function Z(w,_){let V=i.get(w);if(w.isVideoTexture&&yt(w),w.isRenderTargetTexture===!1&&w.version>0&&V.__version!==w.version){let X=w.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{vt(V,w,_);return}}e.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+_)}function q(w,_){let V=i.get(w);if(w.version>0&&V.__version!==w.version){vt(V,w,_);return}e.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+_)}function Y(w,_){let V=i.get(w);if(w.version>0&&V.__version!==w.version){vt(V,w,_);return}e.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+_)}function ot(w,_){let V=i.get(w);if(w.version>0&&V.__version!==w.version){Pt(V,w,_);return}e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+_)}let at={[Cs]:s.REPEAT,[mi]:s.CLAMP_TO_EDGE,[jo]:s.MIRRORED_REPEAT},Mt={[Se]:s.NEAREST,[fh]:s.NEAREST_MIPMAP_NEAREST,[xs]:s.NEAREST_MIPMAP_LINEAR,[$e]:s.LINEAR,[ho]:s.LINEAR_MIPMAP_NEAREST,[Ii]:s.LINEAR_MIPMAP_LINEAR},Ot={[bd]:s.NEVER,[Rd]:s.ALWAYS,[Sd]:s.LESS,[Jc]:s.LEQUAL,[Ed]:s.EQUAL,[Ad]:s.GEQUAL,[wd]:s.GREATER,[Td]:s.NOTEQUAL};function G(w,_,V){if(_.type===Mi&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===$e||_.magFilter===ho||_.magFilter===xs||_.magFilter===Ii||_.minFilter===$e||_.minFilter===ho||_.minFilter===xs||_.minFilter===Ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),V?(s.texParameteri(w,s.TEXTURE_WRAP_S,at[_.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,at[_.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,at[_.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,Mt[_.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,Mt[_.minFilter])):(s.texParameteri(w,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(w,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(_.wrapS!==mi||_.wrapT!==mi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(w,s.TEXTURE_MAG_FILTER,T(_.magFilter)),s.texParameteri(w,s.TEXTURE_MIN_FILTER,T(_.minFilter)),_.minFilter!==Se&&_.minFilter!==$e&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),_.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,Ot[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Se||_.minFilter!==xs&&_.minFilter!==Ii||_.type===Mi&&t.has("OES_texture_float_linear")===!1||o===!1&&_.type===Ps&&t.has("OES_texture_half_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let X=t.get("EXT_texture_filter_anisotropic");s.texParameterf(w,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,n.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function nt(w,_){let V=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",L));let X=_.source,st=f.get(X);st===void 0&&(st={},f.set(X,st));let et=N(_);if(et!==w.__cacheKey){st[et]===void 0&&(st[et]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,V=!0),st[et].usedTimes++;let kt=st[w.__cacheKey];kt!==void 0&&(st[w.__cacheKey].usedTimes--,kt.usedTimes===0&&A(_)),w.__cacheKey=et,w.__webglTexture=st[et].texture}return V}function vt(w,_,V){let X=s.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(X=s.TEXTURE_2D_ARRAY),_.isData3DTexture&&(X=s.TEXTURE_3D);let st=nt(w,_),et=_.source;e.bindTexture(X,w.__webglTexture,s.TEXTURE0+V);let kt=i.get(et);if(et.version!==kt.__version||st===!0){e.activeTexture(s.TEXTURE0+V);let Ut=se.getPrimaries(se.workingColorSpace),ft=_.colorSpace===qi?null:se.getPrimaries(_.colorSpace),mt=_.colorSpace===qi||Ut===ft?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);let Bt=b(_)&&p(_.image)===!1,ht=m(_.image,Bt,!1,n.maxTextureSize);ht=wt(_,ht);let Me=p(ht)||o,jt=r.convert(_.format,_.colorSpace),It=r.convert(_.type),At=C(_.internalFormat,jt,It,_.colorSpace,_.isVideoTexture);G(X,_,Me);let Rt,te=_.mipmaps,Vt=o&&_.isVideoTexture!==!0&&At!==Zc,fe=kt.__version===void 0||st===!0,D=et.dataReady,gt=R(_,ht,Me);if(_.isDepthTexture)At=s.DEPTH_COMPONENT,o?_.type===Mi?At=s.DEPTH_COMPONENT32F:_.type===Yi?At=s.DEPTH_COMPONENT24:_.type===xn?At=s.DEPTH24_STENCIL8:At=s.DEPTH_COMPONENT16:_.type===Mi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===yn&&At===s.DEPTH_COMPONENT&&_.type!==Ol&&_.type!==Yi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=Yi,It=r.convert(_.type)),_.format===Kn&&At===s.DEPTH_COMPONENT&&(At=s.DEPTH_STENCIL,_.type!==xn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=xn,It=r.convert(_.type))),fe&&(Vt?e.texStorage2D(s.TEXTURE_2D,1,At,ht.width,ht.height):e.texImage2D(s.TEXTURE_2D,0,At,ht.width,ht.height,0,jt,It,null));else if(_.isDataTexture)if(te.length>0&&Me){Vt&&fe&&e.texStorage2D(s.TEXTURE_2D,gt,At,te[0].width,te[0].height);for(let O=0,dt=te.length;O<dt;O++)Rt=te[O],Vt?D&&e.texSubImage2D(s.TEXTURE_2D,O,0,0,Rt.width,Rt.height,jt,It,Rt.data):e.texImage2D(s.TEXTURE_2D,O,At,Rt.width,Rt.height,0,jt,It,Rt.data);_.generateMipmaps=!1}else Vt?(fe&&e.texStorage2D(s.TEXTURE_2D,gt,At,ht.width,ht.height),D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ht.width,ht.height,jt,It,ht.data)):e.texImage2D(s.TEXTURE_2D,0,At,ht.width,ht.height,0,jt,It,ht.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Vt&&fe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,gt,At,te[0].width,te[0].height,ht.depth);for(let O=0,dt=te.length;O<dt;O++)Rt=te[O],_.format!==ni?jt!==null?Vt?D&&e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,O,0,0,0,Rt.width,Rt.height,ht.depth,jt,Rt.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,O,At,Rt.width,Rt.height,ht.depth,0,Rt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?D&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,O,0,0,0,Rt.width,Rt.height,ht.depth,jt,It,Rt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,O,At,Rt.width,Rt.height,ht.depth,0,jt,It,Rt.data)}else{Vt&&fe&&e.texStorage2D(s.TEXTURE_2D,gt,At,te[0].width,te[0].height);for(let O=0,dt=te.length;O<dt;O++)Rt=te[O],_.format!==ni?jt!==null?Vt?D&&e.compressedTexSubImage2D(s.TEXTURE_2D,O,0,0,Rt.width,Rt.height,jt,Rt.data):e.compressedTexImage2D(s.TEXTURE_2D,O,At,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?D&&e.texSubImage2D(s.TEXTURE_2D,O,0,0,Rt.width,Rt.height,jt,It,Rt.data):e.texImage2D(s.TEXTURE_2D,O,At,Rt.width,Rt.height,0,jt,It,Rt.data)}else if(_.isDataArrayTexture)Vt?(fe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,gt,At,ht.width,ht.height,ht.depth),D&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,jt,It,ht.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,At,ht.width,ht.height,ht.depth,0,jt,It,ht.data);else if(_.isData3DTexture)Vt?(fe&&e.texStorage3D(s.TEXTURE_3D,gt,At,ht.width,ht.height,ht.depth),D&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,jt,It,ht.data)):e.texImage3D(s.TEXTURE_3D,0,At,ht.width,ht.height,ht.depth,0,jt,It,ht.data);else if(_.isFramebufferTexture){if(fe)if(Vt)e.texStorage2D(s.TEXTURE_2D,gt,At,ht.width,ht.height);else{let O=ht.width,dt=ht.height;for(let xt=0;xt<gt;xt++)e.texImage2D(s.TEXTURE_2D,xt,At,O,dt,0,jt,It,null),O>>=1,dt>>=1}}else if(te.length>0&&Me){if(Vt&&fe){let O=Jt(te[0]);e.texStorage2D(s.TEXTURE_2D,gt,At,O.width,O.height)}for(let O=0,dt=te.length;O<dt;O++)Rt=te[O],Vt?D&&e.texSubImage2D(s.TEXTURE_2D,O,0,0,jt,It,Rt):e.texImage2D(s.TEXTURE_2D,O,At,jt,It,Rt);_.generateMipmaps=!1}else if(Vt){if(fe){let O=Jt(ht);e.texStorage2D(s.TEXTURE_2D,gt,At,O.width,O.height)}D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,jt,It,ht)}else e.texImage2D(s.TEXTURE_2D,0,At,jt,It,ht);x(_,Me)&&M(X),kt.__version=et.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function Pt(w,_,V){if(_.image.length!==6)return;let X=nt(w,_),st=_.source;e.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+V);let et=i.get(st);if(st.version!==et.__version||X===!0){e.activeTexture(s.TEXTURE0+V);let kt=se.getPrimaries(se.workingColorSpace),Ut=_.colorSpace===qi?null:se.getPrimaries(_.colorSpace),ft=_.colorSpace===qi||kt===Ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let mt=_.isCompressedTexture||_.image[0].isCompressedTexture,Bt=_.image[0]&&_.image[0].isDataTexture,ht=[];for(let O=0;O<6;O++)!mt&&!Bt?ht[O]=m(_.image[O],!1,!0,n.maxCubemapSize):ht[O]=Bt?_.image[O].image:_.image[O],ht[O]=wt(_,ht[O]);let Me=ht[0],jt=p(Me)||o,It=r.convert(_.format,_.colorSpace),At=r.convert(_.type),Rt=C(_.internalFormat,It,At,_.colorSpace),te=o&&_.isVideoTexture!==!0,Vt=et.__version===void 0||X===!0,fe=st.dataReady,D=R(_,Me,jt);G(s.TEXTURE_CUBE_MAP,_,jt);let gt;if(mt){te&&Vt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,D,Rt,Me.width,Me.height);for(let O=0;O<6;O++){gt=ht[O].mipmaps;for(let dt=0;dt<gt.length;dt++){let xt=gt[dt];_.format!==ni?It!==null?te?fe&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,dt,0,0,xt.width,xt.height,It,xt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,dt,Rt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):te?fe&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,dt,0,0,xt.width,xt.height,It,At,xt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,dt,Rt,xt.width,xt.height,0,It,At,xt.data)}}}else{if(gt=_.mipmaps,te&&Vt){gt.length>0&&D++;let O=Jt(ht[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,D,Rt,O.width,O.height)}for(let O=0;O<6;O++)if(Bt){te?fe&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,ht[O].width,ht[O].height,It,At,ht[O].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,Rt,ht[O].width,ht[O].height,0,It,At,ht[O].data);for(let dt=0;dt<gt.length;dt++){let Kt=gt[dt].image[O].image;te?fe&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,dt+1,0,0,Kt.width,Kt.height,It,At,Kt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,dt+1,Rt,Kt.width,Kt.height,0,It,At,Kt.data)}}else{te?fe&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,It,At,ht[O]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,Rt,It,At,ht[O]);for(let dt=0;dt<gt.length;dt++){let xt=gt[dt];te?fe&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,dt+1,0,0,It,At,xt.image[O]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+O,dt+1,Rt,It,At,xt.image[O])}}}x(_,jt)&&M(s.TEXTURE_CUBE_MAP),et.__version=st.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function Tt(w,_,V,X,st,et){let kt=r.convert(V.format,V.colorSpace),Ut=r.convert(V.type),ft=C(V.internalFormat,kt,Ut,V.colorSpace);if(!i.get(_).__hasExternalTextures){let Bt=Math.max(1,_.width>>et),ht=Math.max(1,_.height>>et);st===s.TEXTURE_3D||st===s.TEXTURE_2D_ARRAY?e.texImage3D(st,et,ft,Bt,ht,_.depth,0,kt,Ut,null):e.texImage2D(st,et,ft,Bt,ht,0,kt,Ut,null)}e.bindFramebuffer(s.FRAMEBUFFER,w),bt(_)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,X,st,i.get(V).__webglTexture,0,tt(_)):(st===s.TEXTURE_2D||st>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,X,st,i.get(V).__webglTexture,et),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Et(w,_,V){if(s.bindRenderbuffer(s.RENDERBUFFER,w),_.depthBuffer&&!_.stencilBuffer){let X=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(V||bt(_)){let st=_.depthTexture;st&&st.isDepthTexture&&(st.type===Mi?X=s.DEPTH_COMPONENT32F:st.type===Yi&&(X=s.DEPTH_COMPONENT24));let et=tt(_);bt(_)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,et,X,_.width,_.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,et,X,_.width,_.height)}else s.renderbufferStorage(s.RENDERBUFFER,X,_.width,_.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,w)}else if(_.depthBuffer&&_.stencilBuffer){let X=tt(_);V&&bt(_)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,X,s.DEPTH24_STENCIL8,_.width,_.height):bt(_)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,X,s.DEPTH24_STENCIL8,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,_.width,_.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,w)}else{let X=_.textures;for(let st=0;st<X.length;st++){let et=X[st],kt=r.convert(et.format,et.colorSpace),Ut=r.convert(et.type),ft=C(et.internalFormat,kt,Ut,et.colorSpace),mt=tt(_);V&&bt(_)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,mt,ft,_.width,_.height):bt(_)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,mt,ft,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,ft,_.width,_.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function $t(w,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Z(_.depthTexture,0);let X=i.get(_.depthTexture).__webglTexture,st=tt(_);if(_.depthTexture.format===yn)bt(_)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,X,0,st):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,X,0);else if(_.depthTexture.format===Kn)bt(_)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,X,0,st):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,X,0);else throw new Error("Unknown depthTexture format")}function Lt(w){let _=i.get(w),V=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!_.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");$t(_.__webglFramebuffer,w)}else if(V){_.__webglDepthbuffer=[];for(let X=0;X<6;X++)e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[X]),_.__webglDepthbuffer[X]=s.createRenderbuffer(),Et(_.__webglDepthbuffer[X],w,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=s.createRenderbuffer(),Et(_.__webglDepthbuffer,w,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function P(w,_,V){let X=i.get(w);_!==void 0&&Tt(X.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&Lt(w)}function ut(w){let _=w.texture,V=i.get(w),X=i.get(_);w.addEventListener("dispose",k);let st=w.textures,et=w.isWebGLCubeRenderTarget===!0,kt=st.length>1,Ut=p(w)||o;if(kt||(X.__webglTexture===void 0&&(X.__webglTexture=s.createTexture()),X.__version=_.version,a.memory.textures++),et){V.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(o&&_.mipmaps&&_.mipmaps.length>0){V.__webglFramebuffer[ft]=[];for(let mt=0;mt<_.mipmaps.length;mt++)V.__webglFramebuffer[ft][mt]=s.createFramebuffer()}else V.__webglFramebuffer[ft]=s.createFramebuffer()}else{if(o&&_.mipmaps&&_.mipmaps.length>0){V.__webglFramebuffer=[];for(let ft=0;ft<_.mipmaps.length;ft++)V.__webglFramebuffer[ft]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(kt)if(n.drawBuffers)for(let ft=0,mt=st.length;ft<mt;ft++){let Bt=i.get(st[ft]);Bt.__webglTexture===void 0&&(Bt.__webglTexture=s.createTexture(),a.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&w.samples>0&&bt(w)===!1){V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ft=0;ft<st.length;ft++){let mt=st[ft];V.__webglColorRenderbuffer[ft]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[ft]);let Bt=r.convert(mt.format,mt.colorSpace),ht=r.convert(mt.type),Me=C(mt.internalFormat,Bt,ht,mt.colorSpace,w.isXRRenderTarget===!0),jt=tt(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,jt,Me,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,V.__webglColorRenderbuffer[ft])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),Et(V.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(et){e.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture),G(s.TEXTURE_CUBE_MAP,_,Ut);for(let ft=0;ft<6;ft++)if(o&&_.mipmaps&&_.mipmaps.length>0)for(let mt=0;mt<_.mipmaps.length;mt++)Tt(V.__webglFramebuffer[ft][mt],w,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,mt);else Tt(V.__webglFramebuffer[ft],w,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);x(_,Ut)&&M(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(kt){for(let ft=0,mt=st.length;ft<mt;ft++){let Bt=st[ft],ht=i.get(Bt);e.bindTexture(s.TEXTURE_2D,ht.__webglTexture),G(s.TEXTURE_2D,Bt,Ut),Tt(V.__webglFramebuffer,w,Bt,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,0),x(Bt,Ut)&&M(s.TEXTURE_2D)}e.unbindTexture()}else{let ft=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(o?ft=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ft,X.__webglTexture),G(ft,_,Ut),o&&_.mipmaps&&_.mipmaps.length>0)for(let mt=0;mt<_.mipmaps.length;mt++)Tt(V.__webglFramebuffer[mt],w,_,s.COLOR_ATTACHMENT0,ft,mt);else Tt(V.__webglFramebuffer,w,_,s.COLOR_ATTACHMENT0,ft,0);x(_,Ut)&&M(ft),e.unbindTexture()}w.depthBuffer&&Lt(w)}function $(w){let _=p(w)||o,V=w.textures;for(let X=0,st=V.length;X<st;X++){let et=V[X];if(x(et,_)){let kt=w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Ut=i.get(et).__webglTexture;e.bindTexture(kt,Ut),M(kt),e.unbindTexture()}}}function lt(w){if(o&&w.samples>0&&bt(w)===!1){let _=w.textures,V=w.width,X=w.height,st=s.COLOR_BUFFER_BIT,et=[],kt=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ut=i.get(w),ft=_.length>1;if(ft)for(let mt=0;mt<_.length;mt++)e.bindFramebuffer(s.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Ut.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let mt=0;mt<_.length;mt++){et.push(s.COLOR_ATTACHMENT0+mt),w.depthBuffer&&et.push(kt);let Bt=Ut.__ignoreDepthValues!==void 0?Ut.__ignoreDepthValues:!1;if(Bt===!1&&(w.depthBuffer&&(st|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&(st|=s.STENCIL_BUFFER_BIT)),ft&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ut.__webglColorRenderbuffer[mt]),Bt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[kt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[kt])),ft){let ht=i.get(_[mt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ht,0)}s.blitFramebuffer(0,0,V,X,0,0,V,X,st,s.NEAREST),h&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,et)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ft)for(let mt=0;mt<_.length;mt++){e.bindFramebuffer(s.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.RENDERBUFFER,Ut.__webglColorRenderbuffer[mt]);let Bt=i.get(_[mt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Ut.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.TEXTURE_2D,Bt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer)}}function tt(w){return Math.min(n.maxSamples,w.samples)}function bt(w){let _=i.get(w);return o&&w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function yt(w){let _=a.render.frame;u.get(w)!==_&&(u.set(w,_),w.update())}function wt(w,_){let V=w.colorSpace,X=w.format,st=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Ko||V!==sn&&V!==qi&&(se.getTransfer(V)===he?o===!1?t.has("EXT_sRGB")===!0&&X===ni?(w.format=Ko,w.minFilter=$e,w.generateMipmaps=!1):_=Or.sRGBToLinear(_):(X!==ni||st!==ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),_}function Jt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=I,this.setTexture2D=Z,this.setTexture2DArray=q,this.setTexture3D=Y,this.setTextureCube=ot,this.rebindTextures=P,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=bt}function bg(s,t,e){let i=e.isWebGL2;function n(r,a=qi){let o,l=se.getTransfer(a);if(r===ji)return s.UNSIGNED_BYTE;if(r===Vc)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Wc)return s.UNSIGNED_SHORT_5_5_5_1;if(r===dd)return s.BYTE;if(r===fd)return s.SHORT;if(r===Ol)return s.UNSIGNED_SHORT;if(r===Gc)return s.INT;if(r===Yi)return s.UNSIGNED_INT;if(r===Mi)return s.FLOAT;if(r===Ps)return i?s.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===pd)return s.ALPHA;if(r===ni)return s.RGBA;if(r===md)return s.LUMINANCE;if(r===gd)return s.LUMINANCE_ALPHA;if(r===yn)return s.DEPTH_COMPONENT;if(r===Kn)return s.DEPTH_STENCIL;if(r===Ko)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Xc)return s.RED;if(r===qc)return s.RED_INTEGER;if(r===xd)return s.RG;if(r===Yc)return s.RG_INTEGER;if(r===$c)return s.RGBA_INTEGER;if(r===co||r===uo||r===fo||r===po)if(l===he)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===co)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===uo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===fo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===po)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===co)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===uo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===fo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===po)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ph||r===mh||r===gh||r===xh)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===ph)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===mh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===gh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===xh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Zc)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===yh||r===vh)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===yh)return l===he?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===vh)return l===he?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===_h||r===Mh||r===bh||r===Sh||r===Eh||r===wh||r===Th||r===Ah||r===Rh||r===Ch||r===Ph||r===Lh||r===Ih||r===Dh)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===_h)return l===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Mh)return l===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===bh)return l===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Sh)return l===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Eh)return l===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===wh)return l===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Th)return l===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ah)return l===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Rh)return l===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ch)return l===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ph)return l===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Lh)return l===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ih)return l===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Dh)return l===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===mo||r===Uh||r===Nh)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===mo)return l===he?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Uh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Nh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===yd||r===Fh||r===zh||r===Oh)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===mo)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Fh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===zh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Oh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===xn?i?s.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:n}}var fl=class extends Le{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ne=class extends Oe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Sg={type:"move"},ws=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ne,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ne,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ne,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,a=null,o=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,i),p=this._getHandJoint(h,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let c=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],d=c.position.distanceTo(u.position),f=.02,g=.005;h.inputState.pinching&&d>f+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&d<=f-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Sg)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new ne;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Eg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,pl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let n=new Je,r=t.properties.get(n);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}render(t,e){if(this.texture!==null){if(this.mesh===null){let i=e.cameras[0].viewport,n=new bi({extensions:{fragDepth:!0},vertexShader:Eg,fragmentShader:wg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new St(new zi(20,20),n)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}},ml=class extends Qi{constructor(t,e){super();let i=this,n=null,r=1,a=null,o="local-floor",l=1,h=null,c=null,u=null,d=null,f=null,g=null,y=new pl,m=e.getContextAttributes(),p=null,b=null,x=[],M=[],C=new ct,R=null,T=new Le;T.layers.enable(1),T.viewport=new Re;let L=new Le;L.layers.enable(2),L.viewport=new Re;let k=[T,L],v=new fl;v.layers.enable(1),v.layers.enable(2);let A=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let nt=x[G];return nt===void 0&&(nt=new ws,x[G]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(G){let nt=x[G];return nt===void 0&&(nt=new ws,x[G]=nt),nt.getGripSpace()},this.getHand=function(G){let nt=x[G];return nt===void 0&&(nt=new ws,x[G]=nt),nt.getHandSpace()};function j(G){let nt=M.indexOf(G.inputSource);if(nt===-1)return;let vt=x[nt];vt!==void 0&&(vt.update(G.inputSource,G.frame,h||a),vt.dispatchEvent({type:G.type,data:G.inputSource}))}function I(){n.removeEventListener("select",j),n.removeEventListener("selectstart",j),n.removeEventListener("selectend",j),n.removeEventListener("squeeze",j),n.removeEventListener("squeezestart",j),n.removeEventListener("squeezeend",j),n.removeEventListener("end",I),n.removeEventListener("inputsourceschange",W);for(let G=0;G<x.length;G++){let nt=M[G];nt!==null&&(M[G]=null,x[G].disconnect(nt))}A=null,J=null,y.reset(),t.setRenderTarget(p),f=null,d=null,u=null,n=null,b=null,Ot.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(G){h=G},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(G){if(n=G,n!==null){if(p=t.getRenderTarget(),n.addEventListener("select",j),n.addEventListener("selectstart",j),n.addEventListener("selectend",j),n.addEventListener("squeeze",j),n.addEventListener("squeezestart",j),n.addEventListener("squeezeend",j),n.addEventListener("end",I),n.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(C),n.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let nt={antialias:n.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(n,e,nt),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Ui(f.framebufferWidth,f.framebufferHeight,{format:ni,type:ji,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let nt=null,vt=null,Pt=null;m.depth&&(Pt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=m.stencil?Kn:yn,vt=m.stencil?xn:Yi);let Tt={colorFormat:e.RGBA8,depthFormat:Pt,scaleFactor:r};u=new XRWebGLBinding(n,e),d=u.createProjectionLayer(Tt),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new Ui(d.textureWidth,d.textureHeight,{format:ni,type:ji,depthTexture:new Zr(d.textureWidth,d.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0});let Et=t.properties.get(b);Et.__ignoreDepthValues=d.ignoreDepthValues}b.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await n.requestReferenceSpace(o),Ot.setContext(n),Ot.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function W(G){for(let nt=0;nt<G.removed.length;nt++){let vt=G.removed[nt],Pt=M.indexOf(vt);Pt>=0&&(M[Pt]=null,x[Pt].disconnect(vt))}for(let nt=0;nt<G.added.length;nt++){let vt=G.added[nt],Pt=M.indexOf(vt);if(Pt===-1){for(let Et=0;Et<x.length;Et++)if(Et>=M.length){M.push(vt),Pt=Et;break}else if(M[Et]===null){M[Et]=vt,Pt=Et;break}if(Pt===-1)break}let Tt=x[Pt];Tt&&Tt.connect(vt)}}let N=new E,Z=new E;function q(G,nt,vt){N.setFromMatrixPosition(nt.matrixWorld),Z.setFromMatrixPosition(vt.matrixWorld);let Pt=N.distanceTo(Z),Tt=nt.projectionMatrix.elements,Et=vt.projectionMatrix.elements,$t=Tt[14]/(Tt[10]-1),Lt=Tt[14]/(Tt[10]+1),P=(Tt[9]+1)/Tt[5],ut=(Tt[9]-1)/Tt[5],$=(Tt[8]-1)/Tt[0],lt=(Et[8]+1)/Et[0],tt=$t*$,bt=$t*lt,yt=Pt/(-$+lt),wt=yt*-$;nt.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(wt),G.translateZ(yt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();let Jt=$t+yt,w=Lt+yt,_=tt-wt,V=bt+(Pt-wt),X=P*Lt/w*Jt,st=ut*Lt/w*Jt;G.projectionMatrix.makePerspective(_,V,X,st,Jt,w),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function Y(G,nt){nt===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(nt.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(n===null)return;y.texture!==null&&(G.near=y.depthNear,G.far=y.depthFar),v.near=L.near=T.near=G.near,v.far=L.far=T.far=G.far,(A!==v.near||J!==v.far)&&(n.updateRenderState({depthNear:v.near,depthFar:v.far}),A=v.near,J=v.far,T.near=A,T.far=J,L.near=A,L.far=J,T.updateProjectionMatrix(),L.updateProjectionMatrix(),G.updateProjectionMatrix());let nt=G.parent,vt=v.cameras;Y(v,nt);for(let Pt=0;Pt<vt.length;Pt++)Y(vt[Pt],nt);vt.length===2?q(v,T,L):v.projectionMatrix.copy(T.projectionMatrix),ot(G,v,nt)};function ot(G,nt,vt){vt===null?G.matrix.copy(nt.matrixWorld):(G.matrix.copy(vt.matrixWorld),G.matrix.invert(),G.matrix.multiply(nt.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(nt.projectionMatrix),G.projectionMatrixInverse.copy(nt.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Qo*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)},this.hasDepthSensing=function(){return y.texture!==null};let at=null;function Mt(G,nt){if(c=nt.getViewerPose(h||a),g=nt,c!==null){let vt=c.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let Pt=!1;vt.length!==v.cameras.length&&(v.cameras.length=0,Pt=!0);for(let Et=0;Et<vt.length;Et++){let $t=vt[Et],Lt=null;if(f!==null)Lt=f.getViewport($t);else{let ut=u.getViewSubImage(d,$t);Lt=ut.viewport,Et===0&&(t.setRenderTargetTextures(b,ut.colorTexture,d.ignoreDepthValues?void 0:ut.depthStencilTexture),t.setRenderTarget(b))}let P=k[Et];P===void 0&&(P=new Le,P.layers.enable(Et),P.viewport=new Re,k[Et]=P),P.matrix.fromArray($t.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray($t.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),Et===0&&(v.matrix.copy(P.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),Pt===!0&&v.cameras.push(P)}let Tt=n.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")){let Et=u.getDepthInformation(vt[0]);Et&&Et.isValid&&Et.texture&&y.init(t,Et,n.renderState)}}for(let vt=0;vt<x.length;vt++){let Pt=M[vt],Tt=x[vt];Pt!==null&&Tt!==void 0&&Tt.update(Pt,nt,h||a)}y.render(t,v),at&&at(G,nt),nt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:nt}),g=null}let Ot=new tu;Ot.setAnimationLoop(Mt),this.setAnimationLoop=function(G){at=G},this.dispose=function(){}}},fn=new je,Tg=new ee;function Ag(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Qc(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,b,x,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),c(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,b,x):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ze&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ze&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=t.get(p),x=b.envMap,M=b.envMapRotation;if(x&&(m.envMap.value=x,fn.copy(M),fn.x*=-1,fn.y*=-1,fn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(fn.y*=-1,fn.z*=-1),m.envMapRotation.value.setFromMatrix4(Tg.makeRotationFromEuler(fn)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let C=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*C,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ze&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Rg(s,t,e,i){let n={},r={},a=[],o=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(b,x){let M=x.program;i.uniformBlockBinding(b,M)}function h(b,x){let M=n[b.id];M===void 0&&(g(b),M=c(b),n[b.id]=M,b.addEventListener("dispose",m));let C=x.program;i.updateUBOMapping(b,C);let R=t.render.frame;r[b.id]!==R&&(d(b),r[b.id]=R)}function c(b){let x=u();b.__bindingPointIndex=x;let M=s.createBuffer(),C=b.__size,R=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,C,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,M),M}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let x=n[b.id],M=b.uniforms,C=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let R=0,T=M.length;R<T;R++){let L=Array.isArray(M[R])?M[R]:[M[R]];for(let k=0,v=L.length;k<v;k++){let A=L[k];if(f(A,R,k,C)===!0){let J=A.__offset,j=Array.isArray(A.value)?A.value:[A.value],I=0;for(let W=0;W<j.length;W++){let N=j[W],Z=y(N);typeof N=="number"||typeof N=="boolean"?(A.__data[0]=N,s.bufferSubData(s.UNIFORM_BUFFER,J+I,A.__data)):N.isMatrix3?(A.__data[0]=N.elements[0],A.__data[1]=N.elements[1],A.__data[2]=N.elements[2],A.__data[3]=0,A.__data[4]=N.elements[3],A.__data[5]=N.elements[4],A.__data[6]=N.elements[5],A.__data[7]=0,A.__data[8]=N.elements[6],A.__data[9]=N.elements[7],A.__data[10]=N.elements[8],A.__data[11]=0):(N.toArray(A.__data,I),I+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,J,A.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(b,x,M,C){let R=b.value,T=x+"_"+M;if(C[T]===void 0)return typeof R=="number"||typeof R=="boolean"?C[T]=R:C[T]=R.clone(),!0;{let L=C[T];if(typeof R=="number"||typeof R=="boolean"){if(L!==R)return C[T]=R,!0}else if(L.equals(R)===!1)return L.copy(R),!0}return!1}function g(b){let x=b.uniforms,M=0,C=16;for(let T=0,L=x.length;T<L;T++){let k=Array.isArray(x[T])?x[T]:[x[T]];for(let v=0,A=k.length;v<A;v++){let J=k[v],j=Array.isArray(J.value)?J.value:[J.value];for(let I=0,W=j.length;I<W;I++){let N=j[I],Z=y(N),q=M%C;q!==0&&C-q<Z.boundary&&(M+=C-q),J.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=M,M+=Z.storage}}}let R=M%C;return R>0&&(M+=C-R),b.__size=M,b.__cache={},this}function y(b){let x={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function m(b){let x=b.target;x.removeEventListener("dispose",m);let M=a.indexOf(x.__bindingPointIndex);a.splice(M,1),s.deleteBuffer(n[x.id]),delete n[x.id],delete r[x.id]}function p(){for(let b in n)s.deleteBuffer(n[b]);a=[],n={},r={}}return{bind:l,update:h,dispose:p}}var Is=class{constructor(t={}){let{canvas:e=Pd(),context:i=null,depth:n=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;let f=new Uint32Array(4),g=new Int32Array(4),y=null,m=null,p=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ze,this._useLegacyLights=!1,this.toneMapping=Ji,this.toneMappingExposure=1;let x=this,M=!1,C=0,R=0,T=null,L=-1,k=null,v=new Re,A=new Re,J=null,j=new Dt(0),I=0,W=e.width,N=e.height,Z=1,q=null,Y=null,ot=new Re(0,0,W,N),at=new Re(0,0,W,N),Mt=!1,Ot=new Ls,G=!1,nt=!1,vt=null,Pt=new ee,Tt=new ct,Et=new E,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Lt(){return T===null?Z:1}let P=i;function ut(S,U){for(let B=0;B<S.length;B++){let H=S[B],z=e.getContext(H,U);if(z!==null)return z}return null}try{let S={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Fl}`),e.addEventListener("webglcontextlost",fe,!1),e.addEventListener("webglcontextrestored",D,!1),e.addEventListener("webglcontextcreationerror",gt,!1),P===null){let U=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&U.shift(),P=ut(U,S),P===null)throw ut(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&P instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let $,lt,tt,bt,yt,wt,Jt,w,_,V,X,st,et,kt,Ut,ft,mt,Bt,ht,Me,jt,It,At,Rt;function te(){$=new Wm(P),lt=new Om(P,$,t),$.init(lt),It=new bg(P,$,lt),tt=new _g(P,$,lt),bt=new Ym(P),yt=new lg,wt=new Mg(P,$,tt,yt,lt,It,bt),Jt=new Bm(x),w=new Vm(x),_=new Kd(P,lt),At=new Fm(P,$,_,lt),V=new Xm(P,_,bt,At),X=new jm(P,V,_,bt),ht=new Jm(P,lt,wt),ft=new km(yt),st=new og(x,Jt,w,$,lt,At,ft),et=new Ag(x,yt),kt=new cg,Ut=new gg($,lt),Bt=new Nm(x,Jt,w,tt,X,d,l),mt=new vg(x,X,lt),Rt=new Rg(P,bt,lt,tt),Me=new zm(P,$,bt,lt),jt=new qm(P,$,bt,lt),bt.programs=st.programs,x.capabilities=lt,x.extensions=$,x.properties=yt,x.renderLists=kt,x.shadowMap=mt,x.state=tt,x.info=bt}te();let Vt=new ml(x,P);this.xr=Vt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let S=$.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=$.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(S){S!==void 0&&(Z=S,this.setSize(W,N,!1))},this.getSize=function(S){return S.set(W,N)},this.setSize=function(S,U,B=!0){if(Vt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=S,N=U,e.width=Math.floor(S*Z),e.height=Math.floor(U*Z),B===!0&&(e.style.width=S+"px",e.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(W*Z,N*Z).floor()},this.setDrawingBufferSize=function(S,U,B){W=S,N=U,Z=B,e.width=Math.floor(S*B),e.height=Math.floor(U*B),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(v)},this.getViewport=function(S){return S.copy(ot)},this.setViewport=function(S,U,B,H){S.isVector4?ot.set(S.x,S.y,S.z,S.w):ot.set(S,U,B,H),tt.viewport(v.copy(ot).multiplyScalar(Z).round())},this.getScissor=function(S){return S.copy(at)},this.setScissor=function(S,U,B,H){S.isVector4?at.set(S.x,S.y,S.z,S.w):at.set(S,U,B,H),tt.scissor(A.copy(at).multiplyScalar(Z).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(S){tt.setScissorTest(Mt=S)},this.setOpaqueSort=function(S){q=S},this.setTransparentSort=function(S){Y=S},this.getClearColor=function(S){return S.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor.apply(Bt,arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha.apply(Bt,arguments)},this.clear=function(S=!0,U=!0,B=!0){let H=0;if(S){let z=!1;if(T!==null){let _t=T.texture.format;z=_t===$c||_t===Yc||_t===qc}if(z){let _t=T.texture.type,Ct=_t===ji||_t===Yi||_t===Ol||_t===xn||_t===Vc||_t===Wc,Nt=Bt.getClearColor(),zt=Bt.getClearAlpha(),Zt=Nt.r,Ht=Nt.g,Wt=Nt.b;Ct?(f[0]=Zt,f[1]=Ht,f[2]=Wt,f[3]=zt,P.clearBufferuiv(P.COLOR,0,f)):(g[0]=Zt,g[1]=Ht,g[2]=Wt,g[3]=zt,P.clearBufferiv(P.COLOR,0,g))}else H|=P.COLOR_BUFFER_BIT}U&&(H|=P.DEPTH_BUFFER_BIT),B&&(H|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",fe,!1),e.removeEventListener("webglcontextrestored",D,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),kt.dispose(),Ut.dispose(),yt.dispose(),Jt.dispose(),w.dispose(),X.dispose(),At.dispose(),Rt.dispose(),st.dispose(),Vt.dispose(),Vt.removeEventListener("sessionstart",oi),Vt.removeEventListener("sessionend",ae),vt&&(vt.dispose(),vt=null),He.stop()};function fe(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let S=bt.autoReset,U=mt.enabled,B=mt.autoUpdate,H=mt.needsUpdate,z=mt.type;te(),bt.autoReset=S,mt.enabled=U,mt.autoUpdate=B,mt.needsUpdate=H,mt.type=z}function gt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function O(S){let U=S.target;U.removeEventListener("dispose",O),dt(U)}function dt(S){xt(S),yt.remove(S)}function xt(S){let U=yt.get(S).programs;U!==void 0&&(U.forEach(function(B){st.releaseProgram(B)}),S.isShaderMaterial&&st.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,B,H,z,_t){U===null&&(U=$t);let Ct=z.isMesh&&z.matrixWorld.determinant()<0,Nt=Ru(S,U,B,H,z);tt.setMaterial(H,Ct);let zt=B.index,Zt=1;if(H.wireframe===!0){if(zt=V.getWireframeAttribute(B),zt===void 0)return;Zt=2}let Ht=B.drawRange,Wt=B.attributes.position,ve=Ht.start*Zt,ti=(Ht.start+Ht.count)*Zt;_t!==null&&(ve=Math.max(ve,_t.start*Zt),ti=Math.min(ti,(_t.start+_t.count)*Zt)),zt!==null?(ve=Math.max(ve,0),ti=Math.min(ti,zt.count)):Wt!=null&&(ve=Math.max(ve,0),ti=Math.min(ti,Wt.count));let Te=ti-ve;if(Te<0||Te===1/0)return;At.setup(z,H,Nt,B,zt);let Ei,ge=Me;if(zt!==null&&(Ei=_.get(zt),ge=jt,ge.setIndex(Ei)),z.isMesh)H.wireframe===!0?(tt.setLineWidth(H.wireframeLinewidth*Lt()),ge.setMode(P.LINES)):ge.setMode(P.TRIANGLES);else if(z.isLine){let Xt=H.linewidth;Xt===void 0&&(Xt=1),tt.setLineWidth(Xt*Lt()),z.isLineSegments?ge.setMode(P.LINES):z.isLineLoop?ge.setMode(P.LINE_LOOP):ge.setMode(P.LINE_STRIP)}else z.isPoints?ge.setMode(P.POINTS):z.isSprite&&ge.setMode(P.TRIANGLES);if(z.isBatchedMesh)ge.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)ge.renderInstances(ve,Te,z.count);else if(B.isInstancedBufferGeometry){let Xt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,ro=Math.min(B.instanceCount,Xt);ge.renderInstances(ve,Te,ro)}else ge.render(ve,Te)};function Kt(S,U,B){S.transparent===!0&&S.side===Ie&&S.forceSinglePass===!1?(S.side=ze,S.needsUpdate=!0,tr(S,U,B),S.side=Ki,S.needsUpdate=!0,tr(S,U,B),S.side=Ie):tr(S,U,B)}this.compile=function(S,U,B=null){B===null&&(B=S),m=Ut.get(B),m.init(),b.push(m),B.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),S!==B&&S.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights(x._useLegacyLights);let H=new Set;return S.traverse(function(z){let _t=z.material;if(_t)if(Array.isArray(_t))for(let Ct=0;Ct<_t.length;Ct++){let Nt=_t[Ct];Kt(Nt,B,z),H.add(Nt)}else Kt(_t,B,z),H.add(_t)}),b.pop(),m=null,H},this.compileAsync=function(S,U,B=null){let H=this.compile(S,U,B);return new Promise(z=>{function _t(){if(H.forEach(function(Ct){yt.get(Ct).currentProgram.isReady()&&H.delete(Ct)}),H.size===0){z(S);return}setTimeout(_t,10)}$.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let re=null;function Pe(S){re&&re(S)}function oi(){He.stop()}function ae(){He.start()}let He=new tu;He.setAnimationLoop(Pe),typeof self<"u"&&He.setContext(self),this.setAnimationLoop=function(S){re=S,Vt.setAnimationLoop(S),S===null?He.stop():He.start()},Vt.addEventListener("sessionstart",oi),Vt.addEventListener("sessionend",ae),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Vt.enabled===!0&&Vt.isPresenting===!0&&(Vt.cameraAutoUpdate===!0&&Vt.updateCamera(U),U=Vt.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,U,T),m=Ut.get(S,b.length),m.init(),b.push(m),Pt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ot.setFromProjectionMatrix(Pt),nt=this.localClippingEnabled,G=ft.init(this.clippingPlanes,nt),y=kt.get(S,p.length),y.init(),p.push(y),vi(S,U,0,x.sortObjects),y.finish(),x.sortObjects===!0&&y.sort(q,Y),this.info.render.frame++,G===!0&&ft.beginShadows();let B=m.state.shadowsArray;if(mt.render(B,S,U),G===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Vt.enabled===!1||Vt.isPresenting===!1||Vt.hasDepthSensing()===!1)&&Bt.render(y,S),m.setupLights(x._useLegacyLights),U.isArrayCamera){let H=U.cameras;for(let z=0,_t=H.length;z<_t;z++){let Ct=H[z];ih(y,S,Ct,Ct.viewport)}}else ih(y,S,U);T!==null&&(wt.updateMultisampleRenderTarget(T),wt.updateRenderTargetMipmap(T)),S.isScene===!0&&S.onAfterRender(x,S,U),At.resetDefaultState(),L=-1,k=null,b.pop(),b.length>0?m=b[b.length-1]:m=null,p.pop(),p.length>0?y=p[p.length-1]:y=null};function vi(S,U,B,H){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)B=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Ot.intersectsSprite(S)){H&&Et.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Pt);let Ct=X.update(S),Nt=S.material;Nt.visible&&y.push(S,Ct,Nt,B,Et.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Ot.intersectsObject(S))){let Ct=X.update(S),Nt=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Et.copy(S.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Et.copy(Ct.boundingSphere.center)),Et.applyMatrix4(S.matrixWorld).applyMatrix4(Pt)),Array.isArray(Nt)){let zt=Ct.groups;for(let Zt=0,Ht=zt.length;Zt<Ht;Zt++){let Wt=zt[Zt],ve=Nt[Wt.materialIndex];ve&&ve.visible&&y.push(S,Ct,ve,B,Et.z,Wt)}}else Nt.visible&&y.push(S,Ct,Nt,B,Et.z,null)}}let _t=S.children;for(let Ct=0,Nt=_t.length;Ct<Nt;Ct++)vi(_t[Ct],U,B,H)}function ih(S,U,B,H){let z=S.opaque,_t=S.transmissive,Ct=S.transparent;m.setupLightsView(B),G===!0&&ft.setGlobalState(x.clippingPlanes,B),_t.length>0&&Au(z,_t,U,B),H&&tt.viewport(v.copy(H)),z.length>0&&Qs(z,U,B),_t.length>0&&Qs(_t,U,B),Ct.length>0&&Qs(Ct,U,B),tt.buffers.depth.setTest(!0),tt.buffers.depth.setMask(!0),tt.buffers.color.setMask(!0),tt.setPolygonOffset(!1)}function Au(S,U,B,H){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;let _t=lt.isWebGL2;vt===null&&(vt=new Ui(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")?Ps:ji,minFilter:Ii,samples:_t?4:0})),x.getDrawingBufferSize(Tt),_t?vt.setSize(Tt.x,Tt.y):vt.setSize(tl(Tt.x),tl(Tt.y));let Ct=x.getRenderTarget();x.setRenderTarget(vt),x.getClearColor(j),I=x.getClearAlpha(),I<1&&x.setClearColor(16777215,.5),x.clear();let Nt=x.toneMapping;x.toneMapping=Ji,Qs(S,B,H),wt.updateMultisampleRenderTarget(vt),wt.updateRenderTargetMipmap(vt);let zt=!1;for(let Zt=0,Ht=U.length;Zt<Ht;Zt++){let Wt=U[Zt],ve=Wt.object,ti=Wt.geometry,Te=Wt.material,Ei=Wt.group;if(Te.side===Ie&&ve.layers.test(H.layers)){let ge=Te.side;Te.side=ze,Te.needsUpdate=!0,nh(ve,B,H,ti,Te,Ei),Te.side=ge,Te.needsUpdate=!0,zt=!0}}zt===!0&&(wt.updateMultisampleRenderTarget(vt),wt.updateRenderTargetMipmap(vt)),x.setRenderTarget(Ct),x.setClearColor(j,I),x.toneMapping=Nt}function Qs(S,U,B){let H=U.isScene===!0?U.overrideMaterial:null;for(let z=0,_t=S.length;z<_t;z++){let Ct=S[z],Nt=Ct.object,zt=Ct.geometry,Zt=H===null?Ct.material:H,Ht=Ct.group;Nt.layers.test(B.layers)&&nh(Nt,U,B,zt,Zt,Ht)}}function nh(S,U,B,H,z,_t){S.onBeforeRender(x,U,B,H,z,_t),S.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),z.onBeforeRender(x,U,B,H,S,_t),z.transparent===!0&&z.side===Ie&&z.forceSinglePass===!1?(z.side=ze,z.needsUpdate=!0,x.renderBufferDirect(B,U,H,z,S,_t),z.side=Ki,z.needsUpdate=!0,x.renderBufferDirect(B,U,H,z,S,_t),z.side=Ie):x.renderBufferDirect(B,U,H,z,S,_t),S.onAfterRender(x,U,B,H,z,_t)}function tr(S,U,B){U.isScene!==!0&&(U=$t);let H=yt.get(S),z=m.state.lights,_t=m.state.shadowsArray,Ct=z.state.version,Nt=st.getParameters(S,z.state,_t,U,B),zt=st.getProgramCacheKey(Nt),Zt=H.programs;H.environment=S.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(S.isMeshStandardMaterial?w:Jt).get(S.envMap||H.environment),H.envMapRotation=H.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Zt===void 0&&(S.addEventListener("dispose",O),Zt=new Map,H.programs=Zt);let Ht=Zt.get(zt);if(Ht!==void 0){if(H.currentProgram===Ht&&H.lightsStateVersion===Ct)return rh(S,Nt),Ht}else Nt.uniforms=st.getUniforms(S),S.onBuild(B,Nt,x),S.onBeforeCompile(Nt,x),Ht=st.acquireProgram(Nt,zt),Zt.set(zt,Ht),H.uniforms=Nt.uniforms;let Wt=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Wt.clippingPlanes=ft.uniform),rh(S,Nt),H.needsLights=Pu(S),H.lightsStateVersion=Ct,H.needsLights&&(Wt.ambientLightColor.value=z.state.ambient,Wt.lightProbe.value=z.state.probe,Wt.directionalLights.value=z.state.directional,Wt.directionalLightShadows.value=z.state.directionalShadow,Wt.spotLights.value=z.state.spot,Wt.spotLightShadows.value=z.state.spotShadow,Wt.rectAreaLights.value=z.state.rectArea,Wt.ltc_1.value=z.state.rectAreaLTC1,Wt.ltc_2.value=z.state.rectAreaLTC2,Wt.pointLights.value=z.state.point,Wt.pointLightShadows.value=z.state.pointShadow,Wt.hemisphereLights.value=z.state.hemi,Wt.directionalShadowMap.value=z.state.directionalShadowMap,Wt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Wt.spotShadowMap.value=z.state.spotShadowMap,Wt.spotLightMatrix.value=z.state.spotLightMatrix,Wt.spotLightMap.value=z.state.spotLightMap,Wt.pointShadowMap.value=z.state.pointShadowMap,Wt.pointShadowMatrix.value=z.state.pointShadowMatrix),H.currentProgram=Ht,H.uniformsList=null,Ht}function sh(S){if(S.uniformsList===null){let U=S.currentProgram.getUniforms();S.uniformsList=Zn.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function rh(S,U){let B=yt.get(S);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function Ru(S,U,B,H,z){U.isScene!==!0&&(U=$t),wt.resetTextureUnits();let _t=U.fog,Ct=H.isMeshStandardMaterial?U.environment:null,Nt=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:sn,zt=(H.isMeshStandardMaterial?w:Jt).get(H.envMap||Ct),Zt=H.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ht=!!B.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Wt=!!B.morphAttributes.position,ve=!!B.morphAttributes.normal,ti=!!B.morphAttributes.color,Te=Ji;H.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Te=x.toneMapping);let Ei=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ge=Ei!==void 0?Ei.length:0,Xt=yt.get(H),ro=m.state.lights;if(G===!0&&(nt===!0||S!==k)){let li=S===k&&H.id===L;ft.setState(H,S,li)}let pe=!1;H.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==ro.state.version||Xt.outputColorSpace!==Nt||z.isBatchedMesh&&Xt.batching===!1||!z.isBatchedMesh&&Xt.batching===!0||z.isInstancedMesh&&Xt.instancing===!1||!z.isInstancedMesh&&Xt.instancing===!0||z.isSkinnedMesh&&Xt.skinning===!1||!z.isSkinnedMesh&&Xt.skinning===!0||z.isInstancedMesh&&Xt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Xt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Xt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Xt.instancingMorph===!1&&z.morphTexture!==null||Xt.envMap!==zt||H.fog===!0&&Xt.fog!==_t||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==ft.numPlanes||Xt.numIntersection!==ft.numIntersection)||Xt.vertexAlphas!==Zt||Xt.vertexTangents!==Ht||Xt.morphTargets!==Wt||Xt.morphNormals!==ve||Xt.morphColors!==ti||Xt.toneMapping!==Te||lt.isWebGL2===!0&&Xt.morphTargetsCount!==ge)&&(pe=!0):(pe=!0,Xt.__version=H.version);let an=Xt.currentProgram;pe===!0&&(an=tr(H,U,z));let ah=!1,gs=!1,ao=!1,De=an.getUniforms(),on=Xt.uniforms;if(tt.useProgram(an.program)&&(ah=!0,gs=!0,ao=!0),H.id!==L&&(L=H.id,gs=!0),ah||k!==S){De.setValue(P,"projectionMatrix",S.projectionMatrix),De.setValue(P,"viewMatrix",S.matrixWorldInverse);let li=De.map.cameraPosition;li!==void 0&&li.setValue(P,Et.setFromMatrixPosition(S.matrixWorld)),lt.logarithmicDepthBuffer&&De.setValue(P,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&De.setValue(P,"isOrthographic",S.isOrthographicCamera===!0),k!==S&&(k=S,gs=!0,ao=!0)}if(z.isSkinnedMesh){De.setOptional(P,z,"bindMatrix"),De.setOptional(P,z,"bindMatrixInverse");let li=z.skeleton;li&&(lt.floatVertexTextures?(li.boneTexture===null&&li.computeBoneTexture(),De.setValue(P,"boneTexture",li.boneTexture,wt)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}z.isBatchedMesh&&(De.setOptional(P,z,"batchingTexture"),De.setValue(P,"batchingTexture",z._matricesTexture,wt));let oo=B.morphAttributes;if((oo.position!==void 0||oo.normal!==void 0||oo.color!==void 0&&lt.isWebGL2===!0)&&ht.update(z,B,an),(gs||Xt.receiveShadow!==z.receiveShadow)&&(Xt.receiveShadow=z.receiveShadow,De.setValue(P,"receiveShadow",z.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(on.envMap.value=zt,on.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),gs&&(De.setValue(P,"toneMappingExposure",x.toneMappingExposure),Xt.needsLights&&Cu(on,ao),_t&&H.fog===!0&&et.refreshFogUniforms(on,_t),et.refreshMaterialUniforms(on,H,Z,N,vt),Zn.upload(P,sh(Xt),on,wt)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Zn.upload(P,sh(Xt),on,wt),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&De.setValue(P,"center",z.center),De.setValue(P,"modelViewMatrix",z.modelViewMatrix),De.setValue(P,"normalMatrix",z.normalMatrix),De.setValue(P,"modelMatrix",z.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let li=H.uniformsGroups;for(let lo=0,Lu=li.length;lo<Lu;lo++)if(lt.isWebGL2){let oh=li[lo];Rt.update(oh,an),Rt.bind(oh,an)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return an}function Cu(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function Pu(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(S,U,B){yt.get(S.texture).__webglTexture=U,yt.get(S.depthTexture).__webglTexture=B;let H=yt.get(S);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=B===void 0,H.__autoAllocateDepthBuffer||$.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,U){let B=yt.get(S);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,B=0){T=S,C=U,R=B;let H=!0,z=null,_t=!1,Ct=!1;if(S){let zt=yt.get(S);zt.__useDefaultFramebuffer!==void 0?(tt.bindFramebuffer(P.FRAMEBUFFER,null),H=!1):zt.__webglFramebuffer===void 0?wt.setupRenderTarget(S):zt.__hasExternalTextures&&wt.rebindTextures(S,yt.get(S.texture).__webglTexture,yt.get(S.depthTexture).__webglTexture);let Zt=S.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(Ct=!0);let Ht=yt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ht[U])?z=Ht[U][B]:z=Ht[U],_t=!0):lt.isWebGL2&&S.samples>0&&wt.useMultisampledRTT(S)===!1?z=yt.get(S).__webglMultisampledFramebuffer:Array.isArray(Ht)?z=Ht[B]:z=Ht,v.copy(S.viewport),A.copy(S.scissor),J=S.scissorTest}else v.copy(ot).multiplyScalar(Z).floor(),A.copy(at).multiplyScalar(Z).floor(),J=Mt;if(tt.bindFramebuffer(P.FRAMEBUFFER,z)&&lt.drawBuffers&&H&&tt.drawBuffers(S,z),tt.viewport(v),tt.scissor(A),tt.setScissorTest(J),_t){let zt=yt.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+U,zt.__webglTexture,B)}else if(Ct){let zt=yt.get(S.texture),Zt=U||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,zt.__webglTexture,B||0,Zt)}L=-1},this.readRenderTargetPixels=function(S,U,B,H,z,_t,Ct){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=yt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ct!==void 0&&(Nt=Nt[Ct]),Nt){tt.bindFramebuffer(P.FRAMEBUFFER,Nt);try{let zt=S.texture,Zt=zt.format,Ht=zt.type;if(Zt!==ni&&It.convert(Zt)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Wt=Ht===Ps&&($.has("EXT_color_buffer_half_float")||lt.isWebGL2&&$.has("EXT_color_buffer_float"));if(Ht!==ji&&It.convert(Ht)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ht===Mi&&(lt.isWebGL2||$.has("OES_texture_float")||$.has("WEBGL_color_buffer_float")))&&!Wt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-H&&B>=0&&B<=S.height-z&&P.readPixels(U,B,H,z,It.convert(Zt),It.convert(Ht),_t)}finally{let zt=T!==null?yt.get(T).__webglFramebuffer:null;tt.bindFramebuffer(P.FRAMEBUFFER,zt)}}},this.copyFramebufferToTexture=function(S,U,B=0){let H=Math.pow(2,-B),z=Math.floor(U.image.width*H),_t=Math.floor(U.image.height*H);wt.setTexture2D(U,0),P.copyTexSubImage2D(P.TEXTURE_2D,B,0,0,S.x,S.y,z,_t),tt.unbindTexture()},this.copyTextureToTexture=function(S,U,B,H=0){let z=U.image.width,_t=U.image.height,Ct=It.convert(B.format),Nt=It.convert(B.type);wt.setTexture2D(B,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,B.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,B.unpackAlignment),U.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,H,S.x,S.y,z,_t,Ct,Nt,U.image.data):U.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,H,S.x,S.y,U.mipmaps[0].width,U.mipmaps[0].height,Ct,U.mipmaps[0].data):P.texSubImage2D(P.TEXTURE_2D,H,S.x,S.y,Ct,Nt,U.image),H===0&&B.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),tt.unbindTexture()},this.copyTextureToTexture3D=function(S,U,B,H,z=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let _t=Math.round(S.max.x-S.min.x),Ct=Math.round(S.max.y-S.min.y),Nt=S.max.z-S.min.z+1,zt=It.convert(H.format),Zt=It.convert(H.type),Ht;if(H.isData3DTexture)wt.setTexture3D(H,0),Ht=P.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)wt.setTexture2DArray(H,0),Ht=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,H.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,H.unpackAlignment);let Wt=P.getParameter(P.UNPACK_ROW_LENGTH),ve=P.getParameter(P.UNPACK_IMAGE_HEIGHT),ti=P.getParameter(P.UNPACK_SKIP_PIXELS),Te=P.getParameter(P.UNPACK_SKIP_ROWS),Ei=P.getParameter(P.UNPACK_SKIP_IMAGES),ge=B.isCompressedTexture?B.mipmaps[z]:B.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,ge.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ge.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,S.min.x),P.pixelStorei(P.UNPACK_SKIP_ROWS,S.min.y),P.pixelStorei(P.UNPACK_SKIP_IMAGES,S.min.z),B.isDataTexture||B.isData3DTexture?P.texSubImage3D(Ht,z,U.x,U.y,U.z,_t,Ct,Nt,zt,Zt,ge.data):H.isCompressedArrayTexture?P.compressedTexSubImage3D(Ht,z,U.x,U.y,U.z,_t,Ct,Nt,zt,ge.data):P.texSubImage3D(Ht,z,U.x,U.y,U.z,_t,Ct,Nt,zt,Zt,ge),P.pixelStorei(P.UNPACK_ROW_LENGTH,Wt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ve),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ti),P.pixelStorei(P.UNPACK_SKIP_ROWS,Te),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ei),z===0&&H.generateMipmaps&&P.generateMipmap(Ht),tt.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?wt.setTextureCube(S,0):S.isData3DTexture?wt.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?wt.setTexture2DArray(S,0):wt.setTexture2D(S,0),tt.unbindTexture()},this.resetState=function(){C=0,R=0,T=null,tt.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Bl?"display-p3":"srgb",e.unpackColorSpace=se.workingColorSpace===ua?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},gl=class extends Is{};gl.prototype.isWebGL1Renderer=!0;var ts=class s{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Dt(t),this.near=e,this.far=i}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},es=class extends Oe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new je,this.environmentRotation=new je,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Ds=class extends Je{constructor(t=null,e=1,i=1,n,r,a,o,l,h=Se,c=Se,u,d){super(null,a,o,l,h,c,n,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Us=class extends _e{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Vn=new ee,Lc=new ee,br=[],Ic=new We,Cg=new ee,Ss=new St,Es=new tn,en=class extends St{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Us(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Cg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new We),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Vn),Ic.copy(t.boundingBox).applyMatrix4(Vn),this.boundingBox.union(Ic)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new tn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Vn),Es.copy(t.boundingSphere).applyMatrix4(Vn),this.boundingSphere.union(Es)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(t,e){let i=this.matrixWorld,n=this.count;if(Ss.geometry=this.geometry,Ss.material=this.material,Ss.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Es.copy(this.boundingSphere),Es.applyMatrix4(i),t.ray.intersectsSphere(Es)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,Vn),Lc.multiplyMatrices(i,Vn),Ss.matrixWorld=Lc,Ss.raycast(t,br);for(let a=0,o=br.length;a<o;a++){let l=br[a];l.instanceId=r,l.object=this,e.push(l)}br.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Us(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ds(new Float32Array(n*this.count),n,this.count,Xc,Mi));let r=this.morphTexture.source.data.data,a=0;for(let h=0;h<i.length;h++)a+=i[h];let o=this.geometry.morphTargetsRelative?1:1-a,l=n*t;r[l]=o,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var vn=class extends Ni{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Dc=new ee,xl=new Hr,Sr=new tn,Er=new E,is=class extends Oe{constructor(t=new ce,e=new vn){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Sr.copy(i.boundingSphere),Sr.applyMatrix4(n),Sr.radius+=r,t.ray.intersectsSphere(Sr)===!1)return;Dc.copy(n).invert(),xl.copy(t.ray).applyMatrix4(Dc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=i.index,u=i.attributes.position;if(h!==null){let d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let g=d,y=f;g<y;g++){let m=h.getX(g);Er.fromBufferAttribute(u,m),Uc(Er,m,l,n,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,y=f;g<y;g++)Er.fromBufferAttribute(u,g),Uc(Er,g,l,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Uc(s,t,e,i,n,r,a){let o=xl.distanceSqToPoint(s);if(o<e){let l=new E;xl.closestPointToPoint(s,l),l.applyMatrix4(i);let h=n.ray.origin.distanceTo(l);if(h<n.near||h>n.far)return;r.push({distance:h,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}var Jr=class extends Je{constructor(t,e,i,n,r,a,o,l,h){super(t,e,i,n,r,a,o,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}},ci=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,n=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(n),e.push(r),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),n=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,l=r-1,h;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),h=i[n]-a,h<0)o=n+1;else if(h>0)l=n-1;else{l=n;break}if(n=l,i[n]===a)return n/(r-1);let c=i[n],d=i[n+1]-c,f=(a-c)/d;return(n+f)/(r-1)}getTangent(t,e){let n=t-1e-4,r=t+1e-4;n<0&&(n=0),r>1&&(r=1);let a=this.getPoint(n),o=this.getPoint(r),l=e||(a.isVector2?new ct:new E);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new E,n=[],r=[],a=[],o=new E,l=new ee;for(let f=0;f<=t;f++){let g=f/t;n[f]=this.getTangentAt(g,new E)}r[0]=new E,a[0]=new E;let h=Number.MAX_VALUE,c=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);c<=h&&(h=c,i.set(1,0,0)),u<=h&&(h=u,i.set(0,1,0)),d<=h&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],o),a[0].crossVectors(n[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(n[f-1],n[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Fe(n[f-1].dot(n[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(n[f],r[f])}if(e===!0){let f=Math.acos(Fe(r[0].dot(r[t]),-1,1));f/=t,n[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(n[g],f*g)),a[g].crossVectors(n[g],r[g])}return{tangents:n,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ns=class extends ci{constructor(t=0,e=0,i=1,n=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new ct){let i=e,n=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(a?r=0:r=n),this.aClockwise===!0&&!a&&(r===n?r=-n:r=r-n);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),h=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let c=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=h-this.aY;l=d*c-f*u+this.aX,h=d*u+f*c+this.aY}return i.set(l,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},yl=class extends Ns{constructor(t,e,i,n,r,a){super(t,e,i,i,n,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Gl(){let s=0,t=0,e=0,i=0;function n(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,h){n(a,o,h*(o-r),h*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,h,c,u){let d=(a-r)/h-(o-r)/(h+c)+(o-a)/c,f=(o-a)/c-(l-a)/(c+u)+(l-o)/u;d*=c,f*=c,n(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return s+t*r+e*a+i*o}}}var wr=new E,Vo=new Gl,Wo=new Gl,Xo=new Gl,ns=class extends ci{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new E){let i=e,n=this.points,r=n.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let h,c;this.closed||o>0?h=n[(o-1)%r]:(wr.subVectors(n[0],n[1]).add(n[0]),h=wr);let u=n[o%r],d=n[(o+1)%r];if(this.closed||o+2<r?c=n[(o+2)%r]:(wr.subVectors(n[r-1],n[r-2]).add(n[r-1]),c=wr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(h.distanceToSquared(u),f),y=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(c),f);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Vo.initNonuniformCatmullRom(h.x,u.x,d.x,c.x,g,y,m),Wo.initNonuniformCatmullRom(h.y,u.y,d.y,c.y,g,y,m),Xo.initNonuniformCatmullRom(h.z,u.z,d.z,c.z,g,y,m)}else this.curveType==="catmullrom"&&(Vo.initCatmullRom(h.x,u.x,d.x,c.x,this.tension),Wo.initCatmullRom(h.y,u.y,d.y,c.y,this.tension),Xo.initCatmullRom(h.z,u.z,d.z,c.z,this.tension));return i.set(Vo.calc(l),Wo.calc(l),Xo.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new E().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Nc(s,t,e,i,n){let r=(i-t)*.5,a=(n-e)*.5,o=s*s,l=s*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*s+e}function Pg(s,t){let e=1-s;return e*e*t}function Lg(s,t){return 2*(1-s)*s*t}function Ig(s,t){return s*s*t}function Ts(s,t,e,i){return Pg(s,t)+Lg(s,e)+Ig(s,i)}function Dg(s,t){let e=1-s;return e*e*e*t}function Ug(s,t){let e=1-s;return 3*e*e*s*t}function Ng(s,t){return 3*(1-s)*s*s*t}function Fg(s,t){return s*s*s*t}function As(s,t,e,i,n){return Dg(s,t)+Ug(s,e)+Ng(s,i)+Fg(s,n)}var jr=class extends ci{constructor(t=new ct,e=new ct,i=new ct,n=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new ct){let i=e,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(As(t,n.x,r.x,a.x,o.x),As(t,n.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},vl=class extends ci{constructor(t=new E,e=new E,i=new E,n=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new E){let i=e,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(As(t,n.x,r.x,a.x,o.x),As(t,n.y,r.y,a.y,o.y),As(t,n.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Kr=class extends ci{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_l=class extends ci{constructor(t=new E,e=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new E){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new E){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Qr=class extends ci{constructor(t=new ct,e=new ct,i=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ct){let i=e,n=this.v0,r=this.v1,a=this.v2;return i.set(Ts(t,n.x,r.x,a.x),Ts(t,n.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ta=class extends ci{constructor(t=new E,e=new E,i=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new E){let i=e,n=this.v0,r=this.v1,a=this.v2;return i.set(Ts(t,n.x,r.x,a.x),Ts(t,n.y,r.y,a.y),Ts(t,n.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ea=class extends ci{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){let i=e,n=this.points,r=(n.length-1)*t,a=Math.floor(r),o=r-a,l=n[a===0?a:a-1],h=n[a],c=n[a>n.length-2?n.length-1:a+1],u=n[a>n.length-3?n.length-1:a+2];return i.set(Nc(o,l.x,h.x,c.x,u.x),Nc(o,l.y,h.y,c.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new ct().fromArray(n))}return this}},ia=Object.freeze({__proto__:null,ArcCurve:yl,CatmullRomCurve3:ns,CubicBezierCurve:jr,CubicBezierCurve3:vl,EllipseCurve:Ns,LineCurve:Kr,LineCurve3:_l,QuadraticBezierCurve:Qr,QuadraticBezierCurve3:ta,SplineCurve:ea}),Ml=class extends ci{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ia[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),n=this.getCurveLengths(),r=0;for(;r<n.length;){if(n[r]>=i){let a=n[r]-i,o=this.curves[r],l=o.getLength(),h=l===0?0:1-a/l;return o.getPointAt(h,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let n=0,r=this.curves;n<r.length;n++){let a=r[n],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let h=0;h<l.length;h++){let c=l[h];i&&i.equals(c)||(e.push(c),i=c)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(new ia[n.type]().fromJSON(n))}return this}},na=class extends Ml{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Kr(this.currentPoint.clone(),new ct(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){let r=new Qr(this.currentPoint.clone(),new ct(t,e),new ct(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,r,a){let o=new jr(this.currentPoint.clone(),new ct(t,e),new ct(i,n),new ct(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new ea(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,n,r,a),this}absarc(t,e,i,n,r,a){return this.absellipse(t,e,i,i,n,r,a),this}ellipse(t,e,i,n,r,a,o,l){let h=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(t+h,e+c,i,n,r,a,o,l),this}absellipse(t,e,i,n,r,a,o,l){let h=new Ns(t,e,i,n,r,a,o,l);if(this.curves.length>0){let u=h.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(h);let c=h.getPoint(1);return this.currentPoint.copy(c),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var ui=class s extends ce{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);let r=[],a=[],o=[],l=[],h=new E,c=new ct;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=i+u/e*n;h.x=t*Math.cos(f),h.y=t*Math.sin(f),a.push(h.x,h.y,h.z),o.push(0,0,1),c.x=(a[d]/t+1)/2,c.y=(a[d+1]/t+1)/2,l.push(c.x,c.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Gt(a,3)),this.setAttribute("normal",new Gt(o,3)),this.setAttribute("uv",new Gt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},gi=class s extends ce{constructor(t=1,e=1,i=1,n=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let h=this;n=Math.floor(n),r=Math.floor(r);let c=[],u=[],d=[],f=[],g=0,y=[],m=i/2,p=0;b(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(c),this.setAttribute("position",new Gt(u,3)),this.setAttribute("normal",new Gt(d,3)),this.setAttribute("uv",new Gt(f,2));function b(){let M=new E,C=new E,R=0,T=(e-t)/i;for(let L=0;L<=r;L++){let k=[],v=L/r,A=v*(e-t)+t;for(let J=0;J<=n;J++){let j=J/n,I=j*l+o,W=Math.sin(I),N=Math.cos(I);C.x=A*W,C.y=-v*i+m,C.z=A*N,u.push(C.x,C.y,C.z),M.set(W,T,N).normalize(),d.push(M.x,M.y,M.z),f.push(j,1-v),k.push(g++)}y.push(k)}for(let L=0;L<n;L++)for(let k=0;k<r;k++){let v=y[k][L],A=y[k+1][L],J=y[k+1][L+1],j=y[k][L+1];c.push(v,A,j),c.push(A,J,j),R+=6}h.addGroup(p,R,0),p+=R}function x(M){let C=g,R=new ct,T=new E,L=0,k=M===!0?t:e,v=M===!0?1:-1;for(let J=1;J<=n;J++)u.push(0,m*v,0),d.push(0,v,0),f.push(.5,.5),g++;let A=g;for(let J=0;J<=n;J++){let I=J/n*l+o,W=Math.cos(I),N=Math.sin(I);T.x=k*N,T.y=m*v,T.z=k*W,u.push(T.x,T.y,T.z),d.push(0,v,0),R.x=W*.5+.5,R.y=N*.5*v+.5,f.push(R.x,R.y),g++}for(let J=0;J<n;J++){let j=C+J,I=A+J;M===!0?c.push(I,I+1,j):c.push(I+1,I,j),L+=3}h.addGroup(p,L,M===!0?1:2),p+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},nn=class s extends gi{constructor(t=1,e=1,i=32,n=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,n,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},sa=class s extends ce{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};let r=[],a=[];o(n),h(i),c(),this.setAttribute("position",new Gt(r,3)),this.setAttribute("normal",new Gt(r.slice(),3)),this.setAttribute("uv",new Gt(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(b){let x=new E,M=new E,C=new E;for(let R=0;R<e.length;R+=3)f(e[R+0],x),f(e[R+1],M),f(e[R+2],C),l(x,M,C,b)}function l(b,x,M,C){let R=C+1,T=[];for(let L=0;L<=R;L++){T[L]=[];let k=b.clone().lerp(M,L/R),v=x.clone().lerp(M,L/R),A=R-L;for(let J=0;J<=A;J++)J===0&&L===R?T[L][J]=k:T[L][J]=k.clone().lerp(v,J/A)}for(let L=0;L<R;L++)for(let k=0;k<2*(R-L)-1;k++){let v=Math.floor(k/2);k%2===0?(d(T[L][v+1]),d(T[L+1][v]),d(T[L][v])):(d(T[L][v+1]),d(T[L+1][v+1]),d(T[L+1][v]))}}function h(b){let x=new E;for(let M=0;M<r.length;M+=3)x.x=r[M+0],x.y=r[M+1],x.z=r[M+2],x.normalize().multiplyScalar(b),r[M+0]=x.x,r[M+1]=x.y,r[M+2]=x.z}function c(){let b=new E;for(let x=0;x<r.length;x+=3){b.x=r[x+0],b.y=r[x+1],b.z=r[x+2];let M=m(b)/2/Math.PI+.5,C=p(b)/Math.PI+.5;a.push(M,1-C)}g(),u()}function u(){for(let b=0;b<a.length;b+=6){let x=a[b+0],M=a[b+2],C=a[b+4],R=Math.max(x,M,C),T=Math.min(x,M,C);R>.9&&T<.1&&(x<.2&&(a[b+0]+=1),M<.2&&(a[b+2]+=1),C<.2&&(a[b+4]+=1))}}function d(b){r.push(b.x,b.y,b.z)}function f(b,x){let M=b*3;x.x=t[M+0],x.y=t[M+1],x.z=t[M+2]}function g(){let b=new E,x=new E,M=new E,C=new E,R=new ct,T=new ct,L=new ct;for(let k=0,v=0;k<r.length;k+=9,v+=6){b.set(r[k+0],r[k+1],r[k+2]),x.set(r[k+3],r[k+4],r[k+5]),M.set(r[k+6],r[k+7],r[k+8]),R.set(a[v+0],a[v+1]),T.set(a[v+2],a[v+3]),L.set(a[v+4],a[v+5]),C.copy(b).add(x).add(M).divideScalar(3);let A=m(C);y(R,v+0,b,A),y(T,v+2,x,A),y(L,v+4,M,A)}}function y(b,x,M,C){C<0&&b.x===1&&(a[x]=b.x-1),M.x===0&&M.z===0&&(a[x]=C/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.details)}};var ss=class extends na{constructor(t){super(t),this.uuid=ls(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,n=this.holes.length;i<n;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let n=t.holes[e];this.holes.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let n=this.holes[e];t.holes.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let n=t.holes[e];this.holes.push(new na().fromJSON(n))}return this}},zg={triangulate:function(s,t,e=2){let i=t&&t.length,n=i?t[0]*e:s.length,r=au(s,0,n,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,h,c,u,d,f;if(i&&(r=Gg(s,t,r,e)),s.length>80*e){o=h=s[0],l=c=s[1];for(let g=e;g<n;g+=e)u=s[g],d=s[g+1],u<o&&(o=u),d<l&&(l=d),u>h&&(h=u),d>c&&(c=d);f=Math.max(h-o,c-l),f=f!==0?32767/f:0}return Fs(r,a,e,o,l,f,0),a}};function au(s,t,e,i,n){let r,a;if(n===Qg(s,t,e,i)>0)for(r=t;r<e;r+=i)a=Fc(r,s[r],s[r+1],a);else for(r=e-i;r>=t;r-=i)a=Fc(r,s[r],s[r+1],a);return a&&fa(a,a.next)&&(Os(a),a=a.next),a}function _n(s,t){if(!s)return s;t||(t=s);let e=s,i;do if(i=!1,!e.steiner&&(fa(e,e.next)||xe(e.prev,e,e.next)===0)){if(Os(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Fs(s,t,e,i,n,r,a){if(!s)return;!a&&r&&Yg(s,i,n,r);let o=s,l,h;for(;s.prev!==s.next;){if(l=s.prev,h=s.next,r?kg(s,i,n,r):Og(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(h.i/e|0),Os(s),s=h.next,o=h.next;continue}if(s=h,s===o){a?a===1?(s=Bg(_n(s),t,e),Fs(s,t,e,i,n,r,2)):a===2&&Hg(s,t,e,i,n,r):Fs(_n(s),t,e,i,n,r,1);break}}}function Og(s){let t=s.prev,e=s,i=s.next;if(xe(t,e,i)>=0)return!1;let n=t.x,r=e.x,a=i.x,o=t.y,l=e.y,h=i.y,c=n<r?n<a?n:a:r<a?r:a,u=o<l?o<h?o:h:l<h?l:h,d=n>r?n>a?n:a:r>a?r:a,f=o>l?o>h?o:h:l>h?l:h,g=i.next;for(;g!==t;){if(g.x>=c&&g.x<=d&&g.y>=u&&g.y<=f&&Yn(n,o,r,l,a,h,g.x,g.y)&&xe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function kg(s,t,e,i){let n=s.prev,r=s,a=s.next;if(xe(n,r,a)>=0)return!1;let o=n.x,l=r.x,h=a.x,c=n.y,u=r.y,d=a.y,f=o<l?o<h?o:h:l<h?l:h,g=c<u?c<d?c:d:u<d?u:d,y=o>l?o>h?o:h:l>h?l:h,m=c>u?c>d?c:d:u>d?u:d,p=bl(f,g,t,e,i),b=bl(y,m,t,e,i),x=s.prevZ,M=s.nextZ;for(;x&&x.z>=p&&M&&M.z<=b;){if(x.x>=f&&x.x<=y&&x.y>=g&&x.y<=m&&x!==n&&x!==a&&Yn(o,c,l,u,h,d,x.x,x.y)&&xe(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=f&&M.x<=y&&M.y>=g&&M.y<=m&&M!==n&&M!==a&&Yn(o,c,l,u,h,d,M.x,M.y)&&xe(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=y&&x.y>=g&&x.y<=m&&x!==n&&x!==a&&Yn(o,c,l,u,h,d,x.x,x.y)&&xe(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=b;){if(M.x>=f&&M.x<=y&&M.y>=g&&M.y<=m&&M!==n&&M!==a&&Yn(o,c,l,u,h,d,M.x,M.y)&&xe(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Bg(s,t,e){let i=s;do{let n=i.prev,r=i.next.next;!fa(n,r)&&ou(n,i,i.next,r)&&zs(n,r)&&zs(r,n)&&(t.push(n.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),Os(i),Os(i.next),i=s=r),i=i.next}while(i!==s);return _n(i)}function Hg(s,t,e,i,n,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Jg(a,o)){let l=lu(a,o);a=_n(a,a.next),l=_n(l,l.next),Fs(a,t,e,i,n,r,0),Fs(l,t,e,i,n,r,0);return}o=o.next}a=a.next}while(a!==s)}function Gg(s,t,e,i){let n=[],r,a,o,l,h;for(r=0,a=t.length;r<a;r++)o=t[r]*i,l=r<a-1?t[r+1]*i:s.length,h=au(s,o,l,i,!1),h===h.next&&(h.steiner=!0),n.push(Zg(h));for(n.sort(Vg),r=0;r<n.length;r++)e=Wg(n[r],e);return e}function Vg(s,t){return s.x-t.x}function Wg(s,t){let e=Xg(s,t);if(!e)return t;let i=lu(e,s);return _n(i,i.next),_n(e,e.next)}function Xg(s,t){let e=t,i=-1/0,n,r=s.x,a=s.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>i&&(i=d,n=e.x<e.next.x?e:e.next,d===r))return n}e=e.next}while(e!==t);if(!n)return null;let o=n,l=n.x,h=n.y,c=1/0,u;e=n;do r>=e.x&&e.x>=l&&r!==e.x&&Yn(a<h?r:i,a,l,h,a<h?i:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),zs(e,s)&&(u<c||u===c&&(e.x>n.x||e.x===n.x&&qg(n,e)))&&(n=e,c=u)),e=e.next;while(e!==o);return n}function qg(s,t){return xe(s.prev,s,t.prev)<0&&xe(t.next,s,s.next)<0}function Yg(s,t,e,i){let n=s;do n.z===0&&(n.z=bl(n.x,n.y,t,e,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==s);n.prevZ.nextZ=null,n.prevZ=null,$g(n)}function $g(s){let t,e,i,n,r,a,o,l,h=1;do{for(e=s,s=null,r=null,a=0;e;){for(a++,i=e,o=0,t=0;t<h&&(o++,i=i.nextZ,!!i);t++);for(l=h;o>0||l>0&&i;)o!==0&&(l===0||!i||e.z<=i.z)?(n=e,e=e.nextZ,o--):(n=i,i=i.nextZ,l--),r?r.nextZ=n:s=n,n.prevZ=r,r=n;e=i}r.nextZ=null,h*=2}while(a>1);return s}function bl(s,t,e,i,n){return s=(s-e)*n|0,t=(t-i)*n|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Zg(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Yn(s,t,e,i,n,r,a,o){return(n-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(n-a)*(i-o)}function Jg(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!jg(s,t)&&(zs(s,t)&&zs(t,s)&&Kg(s,t)&&(xe(s.prev,s,t.prev)||xe(s,t.prev,t))||fa(s,t)&&xe(s.prev,s,s.next)>0&&xe(t.prev,t,t.next)>0)}function xe(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function fa(s,t){return s.x===t.x&&s.y===t.y}function ou(s,t,e,i){let n=Ar(xe(s,t,e)),r=Ar(xe(s,t,i)),a=Ar(xe(e,i,s)),o=Ar(xe(e,i,t));return!!(n!==r&&a!==o||n===0&&Tr(s,e,t)||r===0&&Tr(s,i,t)||a===0&&Tr(e,s,i)||o===0&&Tr(e,t,i))}function Tr(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Ar(s){return s>0?1:s<0?-1:0}function jg(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&ou(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function zs(s,t){return xe(s.prev,s,s.next)<0?xe(s,t,s.next)>=0&&xe(s,s.prev,t)>=0:xe(s,t,s.prev)<0||xe(s,s.next,t)<0}function Kg(s,t){let e=s,i=!1,n=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&n<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==s);return i}function lu(s,t){let e=new Sl(s.i,s.x,s.y),i=new Sl(t.i,t.x,t.y),n=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=n,n.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Fc(s,t,e,i){let n=new Sl(s,t,e);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function Os(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Sl(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Qg(s,t,e,i){let n=0;for(let r=t,a=e-i;r<e;r+=i)n+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return n}var Rs=class s{static area(t){let e=t.length,i=0;for(let n=e-1,r=0;r<e;n=r++)i+=t[n].x*t[r].y-t[r].x*t[n].y;return i*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let i=[],n=[],r=[];zc(t),Oc(i,t);let a=t.length;e.forEach(zc);for(let l=0;l<e.length;l++)n.push(a),a+=e[l].length,Oc(i,e[l]);let o=zg.triangulate(i,n);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function zc(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Oc(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var ks=class s extends ce{constructor(t=new ss([new ct(.5,.5),new ct(-.5,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,n=[],r=[];for(let o=0,l=t.length;o<l;o++){let h=t[o];a(h)}this.setAttribute("position",new Gt(n,3)),this.setAttribute("uv",new Gt(r,2)),this.computeVertexNormals();function a(o){let l=[],h=e.curveSegments!==void 0?e.curveSegments:12,c=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:tx,x,M=!1,C,R,T,L;p&&(x=p.getSpacedPoints(c),M=!0,d=!1,C=p.computeFrenetFrames(c,!1),R=new E,T=new E,L=new E),d||(m=0,f=0,g=0,y=0);let k=o.extractPoints(h),v=k.shape,A=k.holes;if(!Rs.isClockWise(v)){v=v.reverse();for(let P=0,ut=A.length;P<ut;P++){let $=A[P];Rs.isClockWise($)&&(A[P]=$.reverse())}}let j=Rs.triangulateShape(v,A),I=v;for(let P=0,ut=A.length;P<ut;P++){let $=A[P];v=v.concat($)}function W(P,ut,$){return ut||console.error("THREE.ExtrudeGeometry: vec does not exist"),P.clone().addScaledVector(ut,$)}let N=v.length,Z=j.length;function q(P,ut,$){let lt,tt,bt,yt=P.x-ut.x,wt=P.y-ut.y,Jt=$.x-P.x,w=$.y-P.y,_=yt*yt+wt*wt,V=yt*w-wt*Jt;if(Math.abs(V)>Number.EPSILON){let X=Math.sqrt(_),st=Math.sqrt(Jt*Jt+w*w),et=ut.x-wt/X,kt=ut.y+yt/X,Ut=$.x-w/st,ft=$.y+Jt/st,mt=((Ut-et)*w-(ft-kt)*Jt)/(yt*w-wt*Jt);lt=et+yt*mt-P.x,tt=kt+wt*mt-P.y;let Bt=lt*lt+tt*tt;if(Bt<=2)return new ct(lt,tt);bt=Math.sqrt(Bt/2)}else{let X=!1;yt>Number.EPSILON?Jt>Number.EPSILON&&(X=!0):yt<-Number.EPSILON?Jt<-Number.EPSILON&&(X=!0):Math.sign(wt)===Math.sign(w)&&(X=!0),X?(lt=-wt,tt=yt,bt=Math.sqrt(_)):(lt=yt,tt=wt,bt=Math.sqrt(_/2))}return new ct(lt/bt,tt/bt)}let Y=[];for(let P=0,ut=I.length,$=ut-1,lt=P+1;P<ut;P++,$++,lt++)$===ut&&($=0),lt===ut&&(lt=0),Y[P]=q(I[P],I[$],I[lt]);let ot=[],at,Mt=Y.concat();for(let P=0,ut=A.length;P<ut;P++){let $=A[P];at=[];for(let lt=0,tt=$.length,bt=tt-1,yt=lt+1;lt<tt;lt++,bt++,yt++)bt===tt&&(bt=0),yt===tt&&(yt=0),at[lt]=q($[lt],$[bt],$[yt]);ot.push(at),Mt=Mt.concat(at)}for(let P=0;P<m;P++){let ut=P/m,$=f*Math.cos(ut*Math.PI/2),lt=g*Math.sin(ut*Math.PI/2)+y;for(let tt=0,bt=I.length;tt<bt;tt++){let yt=W(I[tt],Y[tt],lt);Pt(yt.x,yt.y,-$)}for(let tt=0,bt=A.length;tt<bt;tt++){let yt=A[tt];at=ot[tt];for(let wt=0,Jt=yt.length;wt<Jt;wt++){let w=W(yt[wt],at[wt],lt);Pt(w.x,w.y,-$)}}}let Ot=g+y;for(let P=0;P<N;P++){let ut=d?W(v[P],Mt[P],Ot):v[P];M?(T.copy(C.normals[0]).multiplyScalar(ut.x),R.copy(C.binormals[0]).multiplyScalar(ut.y),L.copy(x[0]).add(T).add(R),Pt(L.x,L.y,L.z)):Pt(ut.x,ut.y,0)}for(let P=1;P<=c;P++)for(let ut=0;ut<N;ut++){let $=d?W(v[ut],Mt[ut],Ot):v[ut];M?(T.copy(C.normals[P]).multiplyScalar($.x),R.copy(C.binormals[P]).multiplyScalar($.y),L.copy(x[P]).add(T).add(R),Pt(L.x,L.y,L.z)):Pt($.x,$.y,u/c*P)}for(let P=m-1;P>=0;P--){let ut=P/m,$=f*Math.cos(ut*Math.PI/2),lt=g*Math.sin(ut*Math.PI/2)+y;for(let tt=0,bt=I.length;tt<bt;tt++){let yt=W(I[tt],Y[tt],lt);Pt(yt.x,yt.y,u+$)}for(let tt=0,bt=A.length;tt<bt;tt++){let yt=A[tt];at=ot[tt];for(let wt=0,Jt=yt.length;wt<Jt;wt++){let w=W(yt[wt],at[wt],lt);M?Pt(w.x,w.y+x[c-1].y,x[c-1].x+$):Pt(w.x,w.y,u+$)}}}G(),nt();function G(){let P=n.length/3;if(d){let ut=0,$=N*ut;for(let lt=0;lt<Z;lt++){let tt=j[lt];Tt(tt[2]+$,tt[1]+$,tt[0]+$)}ut=c+m*2,$=N*ut;for(let lt=0;lt<Z;lt++){let tt=j[lt];Tt(tt[0]+$,tt[1]+$,tt[2]+$)}}else{for(let ut=0;ut<Z;ut++){let $=j[ut];Tt($[2],$[1],$[0])}for(let ut=0;ut<Z;ut++){let $=j[ut];Tt($[0]+N*c,$[1]+N*c,$[2]+N*c)}}i.addGroup(P,n.length/3-P,0)}function nt(){let P=n.length/3,ut=0;vt(I,ut),ut+=I.length;for(let $=0,lt=A.length;$<lt;$++){let tt=A[$];vt(tt,ut),ut+=tt.length}i.addGroup(P,n.length/3-P,1)}function vt(P,ut){let $=P.length;for(;--$>=0;){let lt=$,tt=$-1;tt<0&&(tt=P.length-1);for(let bt=0,yt=c+m*2;bt<yt;bt++){let wt=N*bt,Jt=N*(bt+1),w=ut+lt+wt,_=ut+tt+wt,V=ut+tt+Jt,X=ut+lt+Jt;Et(w,_,V,X)}}}function Pt(P,ut,$){l.push(P),l.push(ut),l.push($)}function Tt(P,ut,$){$t(P),$t(ut),$t($);let lt=n.length/3,tt=b.generateTopUV(i,n,lt-3,lt-2,lt-1);Lt(tt[0]),Lt(tt[1]),Lt(tt[2])}function Et(P,ut,$,lt){$t(P),$t(ut),$t(lt),$t(ut),$t($),$t(lt);let tt=n.length/3,bt=b.generateSideWallUV(i,n,tt-6,tt-3,tt-2,tt-1);Lt(bt[0]),Lt(bt[1]),Lt(bt[3]),Lt(bt[1]),Lt(bt[2]),Lt(bt[3])}function $t(P){n.push(l[P*3+0]),n.push(l[P*3+1]),n.push(l[P*3+2])}function Lt(P){r.push(P.x),r.push(P.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return ex(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];i.push(o)}let n=t.options.extrudePath;return n!==void 0&&(t.options.extrudePath=new ia[n.type]().fromJSON(n)),new s(i,t.options)}},tx={generateTopUV:function(s,t,e,i,n){let r=t[e*3],a=t[e*3+1],o=t[i*3],l=t[i*3+1],h=t[n*3],c=t[n*3+1];return[new ct(r,a),new ct(o,l),new ct(h,c)]},generateSideWallUV:function(s,t,e,i,n,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],h=t[i*3],c=t[i*3+1],u=t[i*3+2],d=t[n*3],f=t[n*3+1],g=t[n*3+2],y=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-c)<Math.abs(a-h)?[new ct(a,1-l),new ct(h,1-u),new ct(d,1-g),new ct(y,1-p)]:[new ct(o,1-l),new ct(c,1-u),new ct(f,1-g),new ct(m,1-p)]}};function ex(s,t,e){if(e.shapes=[],Array.isArray(s))for(let i=0,n=s.length;i<n;i++){let r=s[i];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Mn=class s extends sa{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},ra=class s extends sa{constructor(t=1,e=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},aa=class s extends ce{constructor(t=.5,e=1,i=32,n=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:a},i=Math.max(3,i),n=Math.max(1,n);let o=[],l=[],h=[],c=[],u=t,d=(e-t)/n,f=new E,g=new ct;for(let y=0;y<=n;y++){for(let m=0;m<=i;m++){let p=r+m/i*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),h.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,c.push(g.x,g.y)}u+=d}for(let y=0;y<n;y++){let m=y*(i+1);for(let p=0;p<i;p++){let b=p+m,x=b,M=b+i+1,C=b+i+2,R=b+1;o.push(x,M,R),o.push(M,C,R)}}this.setIndex(o),this.setAttribute("position",new Gt(l,3)),this.setAttribute("normal",new Gt(h,3)),this.setAttribute("uv",new Gt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Oi=class s extends ce{constructor(t=1,e=32,i=16,n=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),h=0,c=[],u=new E,d=new E,f=[],g=[],y=[],m=[];for(let p=0;p<=i;p++){let b=[],x=p/i,M=0;p===0&&a===0?M=.5/e:p===i&&l===Math.PI&&(M=-.5/e);for(let C=0;C<=e;C++){let R=C/e;u.x=-t*Math.cos(n+R*r)*Math.sin(a+x*o),u.y=t*Math.cos(a+x*o),u.z=t*Math.sin(n+R*r)*Math.sin(a+x*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),m.push(R+M,1-x),b.push(h++)}c.push(b)}for(let p=0;p<i;p++)for(let b=0;b<e;b++){let x=c[p][b+1],M=c[p][b],C=c[p+1][b],R=c[p+1][b+1];(p!==0||a>0)&&f.push(x,M,R),(p!==i-1||l<Math.PI)&&f.push(M,C,R)}this.setIndex(f),this.setAttribute("position",new Gt(g,3)),this.setAttribute("normal",new Gt(y,3)),this.setAttribute("uv",new Gt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var bn=class s extends ce{constructor(t=1,e=.4,i=12,n=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:r},i=Math.floor(i),n=Math.floor(n);let a=[],o=[],l=[],h=[],c=new E,u=new E,d=new E;for(let f=0;f<=i;f++)for(let g=0;g<=n;g++){let y=g/n*r,m=f/i*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(y),u.y=(t+e*Math.cos(m))*Math.sin(y),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),c.x=t*Math.cos(y),c.y=t*Math.sin(y),d.subVectors(u,c).normalize(),l.push(d.x,d.y,d.z),h.push(g/n),h.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=n;g++){let y=(n+1)*f+g-1,m=(n+1)*(f-1)+g-1,p=(n+1)*(f-1)+g,b=(n+1)*f+g;a.push(y,m,b),a.push(m,p,b)}this.setIndex(a),this.setAttribute("position",new Gt(o,3)),this.setAttribute("normal",new Gt(l,3)),this.setAttribute("uv",new Gt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Bs=class s extends ce{constructor(t=new ta(new E(-1,-1,0),new E(-1,1,0),new E(1,1,0)),e=64,i=1,n=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:n,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new E,l=new E,h=new ct,c=new E,u=[],d=[],f=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new Gt(u,3)),this.setAttribute("normal",new Gt(d,3)),this.setAttribute("uv",new Gt(f,2));function y(){for(let x=0;x<e;x++)m(x);m(r===!1?e:0),b(),p()}function m(x){c=t.getPointAt(x/e,c);let M=a.normals[x],C=a.binormals[x];for(let R=0;R<=n;R++){let T=R/n*Math.PI*2,L=Math.sin(T),k=-Math.cos(T);l.x=k*M.x+L*C.x,l.y=k*M.y+L*C.y,l.z=k*M.z+L*C.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=c.x+i*l.x,o.y=c.y+i*l.y,o.z=c.z+i*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let x=1;x<=e;x++)for(let M=1;M<=n;M++){let C=(n+1)*(x-1)+(M-1),R=(n+1)*x+(M-1),T=(n+1)*x+M,L=(n+1)*(x-1)+M;g.push(C,R,L),g.push(R,T,L)}}function b(){for(let x=0;x<=e;x++)for(let M=0;M<=n;M++)h.x=x/e,h.y=M/n,f.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new ia[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var oa=class extends Ni{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Dt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kl,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ri=class extends Ni{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kl,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new je,this.combine=zl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Rr(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function ix(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var rs=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],r=e[i-1];i:{t:{let a;e:{n:if(!(t<n)){for(let o=i+2;;){if(n===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=n,n=e[++i],t<n)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break i}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(n=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=t*n;for(let a=0;a!==n;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},El=class extends rs{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:kh,endingEnd:kh}}intervalChanged_(t,e,i){let n=this.parameterPositions,r=t-2,a=t+1,o=n[r],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case Bh:r=t,o=2*e-i;break;case Hh:r=n.length-2,o=e+n[r]-n[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Bh:a=t,l=2*i-e;break;case Hh:a=1,l=i+n[1]-n[0];break;default:a=t-1,l=e}let h=(i-e)*.5,c=this.valueSize;this._weightPrev=h/(e-o),this._weightNext=h/(l-i),this._offsetPrev=r*c,this._offsetNext=a*c}interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,h=l-o,c=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-e)/(n-e),y=g*g,m=y*g,p=-d*m+2*d*y-d*g,b=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*g+1,x=(-1-f)*m+(1.5+f)*y+.5*g,M=f*m-f*y;for(let C=0;C!==o;++C)r[C]=p*a[c+C]+b*a[h+C]+x*a[l+C]+M*a[u+C];return r}},wl=class extends rs{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,h=l-o,c=(i-e)/(n-e),u=1-c;for(let d=0;d!==o;++d)r[d]=a[h+d]*u+a[l+d]*c;return r}},Tl=class extends rs{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},xi=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Rr(e,this.TimeBufferType),this.values=Rr(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Rr(t.times,Array),values:Rr(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Tl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new wl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new El(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Lr:e=this.InterpolantFactoryMethodDiscrete;break;case Ir:e=this.InterpolantFactoryMethodLinear;break;case go:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Lr;case this.InterpolantFactoryMethodLinear:return Ir;case this.InterpolantFactoryMethodSmooth:return go}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t}return this}trim(t,e){let i=this.times,n=i.length,r=0,a=n-1;for(;r!==n&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==n){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(n!==void 0&&ix(n))for(let o=0,l=n.length;o!==l;++o){let h=n[o];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===go,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,h=t[o],c=t[o+1];if(h!==c&&(o!==1||h!==t[0]))if(n)l=!0;else{let u=o*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let y=e[u+g];if(y!==e[d+g]||y!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*i,d=a*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,h=0;h!==i;++h)e[l+h]=e[o+h];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}};xi.prototype.TimeBufferType=Float32Array;xi.prototype.ValueBufferType=Float32Array;xi.prototype.DefaultInterpolation=Ir;var Sn=class extends xi{};Sn.prototype.ValueTypeName="bool";Sn.prototype.ValueBufferType=Array;Sn.prototype.DefaultInterpolation=Lr;Sn.prototype.InterpolantFactoryMethodLinear=void 0;Sn.prototype.InterpolantFactoryMethodSmooth=void 0;var Al=class extends xi{};Al.prototype.ValueTypeName="color";var Rl=class extends xi{};Rl.prototype.ValueTypeName="number";var Cl=class extends rs{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(n-e),h=t*o;for(let c=h+o;h!==c;h+=4)Ve.slerpFlat(r,0,a,h-o,a,h,l);return r}},Hs=class extends xi{InterpolantFactoryMethodLinear(t){return new Cl(this.times,this.values,this.getValueSize(),t)}};Hs.prototype.ValueTypeName="quaternion";Hs.prototype.DefaultInterpolation=Ir;Hs.prototype.InterpolantFactoryMethodSmooth=void 0;var En=class extends xi{};En.prototype.ValueTypeName="string";En.prototype.ValueBufferType=Array;En.prototype.DefaultInterpolation=Lr;En.prototype.InterpolantFactoryMethodLinear=void 0;En.prototype.InterpolantFactoryMethodSmooth=void 0;var Pl=class extends xi{};Pl.prototype.ValueTypeName="vector";var Ll=class{constructor(t,e,i){let n=this,r=!1,a=0,o=0,l,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(c){o++,r===!1&&n.onStart!==void 0&&n.onStart(c,a,o),r=!0},this.itemEnd=function(c){a++,n.onProgress!==void 0&&n.onProgress(c,a,o),a===o&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(c){n.onError!==void 0&&n.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,u){return h.push(c,u),this},this.removeHandler=function(c){let u=h.indexOf(c);return u!==-1&&h.splice(u,2),this},this.getHandler=function(c){for(let u=0,d=h.length;u<d;u+=2){let f=h[u],g=h[u+1];if(f.global&&(f.lastIndex=0),f.test(c))return g}return null}}},nx=new Ll,Il=class{constructor(t){this.manager=t!==void 0?t:nx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,r){i.load(t,n,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Il.DEFAULT_MATERIAL_NAME="__DEFAULT";var la=class extends Oe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Dt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},as=class extends la{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Dt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},qo=new ee,kc=new E,Bc=new E,Dl=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ls,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new Re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;kc.setFromMatrixPosition(t.matrixWorld),e.position.copy(kc),Bc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Bc),e.updateMatrixWorld(),qo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(qo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Ul=class extends Dl{constructor(){super(new Yr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},os=class extends la{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.target=new Oe,this.shadow=new Ul}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Vl="\\[\\]\\.:\\/",sx=new RegExp("["+Vl+"]","g"),Wl="[^"+Vl+"]",rx="[^"+Vl.replace("\\.","")+"]",ax=/((?:WC+[\/:])*)/.source.replace("WC",Wl),ox=/(WCOD+)?/.source.replace("WCOD",rx),lx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wl),hx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wl),cx=new RegExp("^"+ax+ox+lx+hx+"$"),ux=["material","materials","bones","map"],Nl=class{constructor(t,e,i){let n=i||me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},me=class s{constructor(t,e,i){this.path=e,this.parsedPath=i||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,i):new s(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(sx,"")}static parseTrackName(t){let e=cx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);ux.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===h){h=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let a=t[n];if(a===void 0){let h=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+n+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};me.Composite=Nl;me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};me.prototype.GetterByBindingType=[me.prototype._getValue_direct,me.prototype._getValue_array,me.prototype._getValue_arrayElement,me.prototype._getValue_toArray];me.prototype.SetterByBindingTypeAndVersioning=[[me.prototype._setValue_direct,me.prototype._setValue_direct_setNeedsUpdate,me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[me.prototype._setValue_array,me.prototype._setValue_array_setNeedsUpdate,me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[me.prototype._setValue_arrayElement,me.prototype._setValue_arrayElement_setNeedsUpdate,me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[me.prototype._setValue_fromArray,me.prototype._setValue_fromArray_setNeedsUpdate,me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ix=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fl);var hu="dashkingdom_save_v1",Ws={music:.6,sfx:.8,sensitivity:1,invertY:!1,autoCamera:!0,joystick:"dynamic",controlSize:1,quality:"auto",fpsCap:60,showFps:!1,vibration:!0};function pa(){return{version:1,character:"zip",unlocked:1,levels:{},settings:{...Ws},stats:{plays:0,deaths:0,bossesDefeated:0,gameCompleted:!1}}}function dx(){try{if(window.AndroidBridge&&window.AndroidBridge.loadData){let s=window.AndroidBridge.loadData();if(s)return s}}catch{}try{return localStorage.getItem(hu)}catch{return null}}var cu={data:pa(),load(){let s=dx(),t=pa();if(s)try{let e=JSON.parse(s);Object.assign(t,e),t.settings={...Ws,...e.settings||{}},t.stats={...pa().stats,...e.stats||{}},t.levels=e.levels||{}}catch(e){console.warn("Save corrompido, usando padr\xE3o",e)}return this.data=t,t},persist(){let s=JSON.stringify(this.data);try{window.AndroidBridge&&window.AndroidBridge.saveData&&window.AndroidBridge.saveData(s)}catch{}try{localStorage.setItem(hu,s)}catch{}},get settings(){return this.data.settings},levelRecord(s){return this.data.levels[s]||(this.data.levels[s]={completed:!1,bestScore:0,bestTime:0,medals:[!1,!1,!1]}),this.data.levels[s]},completeLevel(s,t,e,i,n){let r=this.levelRecord(t),a=e>r.bestScore;return r.completed=!0,a&&(r.bestScore=e),(!r.bestTime||i<r.bestTime)&&(r.bestTime=i),r.medals=r.medals.map((o,l)=>o||!!n[l]),this.data.unlocked=Math.max(this.data.unlocked,s+2),this.persist(),{newBest:a}},reset(){let s=this.data.settings;this.data=pa(),this.data.settings=s,this.persist()}};var ye=(s,t,e)=>s<t?t:s>e?e:s,fx=(s,t,e)=>s+(t-s)*e,Ke=(s,t,e,i)=>fx(s,t,1-Math.exp(-e*i)),uu=Math.PI*2;function cs(s){for(;s>Math.PI;)s-=uu;for(;s<-Math.PI;)s+=uu;return s}function Si(s,t,e,i){return s+cs(t-s)*(1-Math.exp(-e*i))}function Xl(s){let t=s>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>17,t^=t<<5,t>>>=0,t/4294967296)}function Xs(s){let t=Math.floor(s/60),e=Math.floor(s%60),i=Math.floor(s*100%100);return`${t}:${String(e).padStart(2,"0")}.${String(i).padStart(2,"0")}`}function qs(s){try{window.AndroidBridge&&window.AndroidBridge.vibrate?window.AndroidBridge.vibrate(s):navigator.vibrate&&navigator.vibrate(s)}catch{}}var ql=class{constructor(){this.moveX=0,this.moveY=0,this.jumpHeld=!1,this.attackHeld=!1,this.specialHeld=!1,this.jumpPressed=!1,this.attackPressed=!1,this.specialPressed=!1,this.pausePressed=!1,this.camDX=0,this.camDY=0,this.lastCamInput=-10,this.keys=new Set,this.joy={id:null,cx:0,cy:0,x:0,y:0},this.camPtr={id:null,x:0,y:0},this.enabled=!1,this.settings=null,this.kbX=0,this.kbY=0,this.padPrev={}}init(t,e){this.settings=e,this.root=t,t.innerHTML=`
      <div id="joy-zone"></div>
      <div id="cam-zone"></div>
      <div id="joy-base"><div id="joy-knob"></div></div>
      <div class="tbtn" id="btn-special"><span>\u2726</span><small>ESPECIAL</small></div>
      <div class="tbtn" id="btn-attack"><span>\u270A</span><small>ATAQUE</small></div>
      <div class="tbtn big" id="btn-jump"><span>\u25B2</span><small>PULO</small></div>`,this.base=t.querySelector("#joy-base"),this.knob=t.querySelector("#joy-knob");let i=t.querySelector("#joy-zone"),n=t.querySelector("#cam-zone");i.addEventListener("pointerdown",a=>this.joyDown(a)),window.addEventListener("pointermove",a=>this.ptrMove(a),{passive:!1}),window.addEventListener("pointerup",a=>this.ptrUp(a)),window.addEventListener("pointercancel",a=>this.ptrUp(a)),n.addEventListener("pointerdown",a=>{a.preventDefault(),this.camPtr={id:a.pointerId,x:a.clientX,y:a.clientY}});let r=(a,o)=>{let l=t.querySelector(a);l.addEventListener("pointerdown",c=>{c.preventDefault(),c.stopPropagation();try{l.setPointerCapture(c.pointerId)}catch{}l.classList.add("down"),this[o+"Held"]=!0,this[o+"Pressed"]=!0,l._pid=c.pointerId});let h=c=>{l._pid===c.pointerId&&(l.classList.remove("down"),this[o+"Held"]=!1,l._pid=null)};l.addEventListener("pointerup",h),l.addEventListener("pointercancel",h),l.addEventListener("lostpointercapture",h)};r("#btn-jump","jump"),r("#btn-attack","attack"),r("#btn-special","special"),window.addEventListener("keydown",a=>this.keyDown(a)),window.addEventListener("keyup",a=>this.keys.delete(a.code)),window.addEventListener("blur",()=>this.releaseAll()),this.applyLayout()}applyLayout(){if(!this.root)return;let t=this.settings.controlSize||1;this.root.style.setProperty("--ctl",t),this.fixedJoy=this.settings.joystick==="fixed",this.fixedJoy?this.base.classList.add("visible","fixed"):(this.base.classList.remove("fixed"),this.joy.id===null&&this.base.classList.remove("visible"))}setVisible(t){this.root.style.display=t?"block":"none",t||this.releaseAll()}joyRadius(){return 56*(this.settings.controlSize||1)}joyDown(t){if(t.preventDefault(),this.joy.id!==null)return;let e=t.clientX,i=t.clientY;if(this.fixedJoy){let n=this.base.getBoundingClientRect();e=n.left+n.width/2,i=n.top+n.height/2}else this.base.style.left=e+"px",this.base.style.top=i+"px",this.base.classList.add("visible");this.joy={id:t.pointerId,cx:e,cy:i,x:0,y:0},this.updateJoy(t.clientX,t.clientY)}updateJoy(t,e){let i=this.joyRadius(),n=t-this.joy.cx,r=e-this.joy.cy,a=Math.hypot(n,r);a>i&&(n*=i/a,r*=i/a),this.knob.style.transform=`translate(${n}px, ${r}px)`;let o=n/i,l=-r/i,h=Math.hypot(o,l);if(h<.12)o=0,l=0;else{let c=(h-.12)/(.88*h);o*=c,l*=c}this.joy.x=o,this.joy.y=l}ptrMove(t){if(t.pointerId===this.joy.id)t.preventDefault(),this.updateJoy(t.clientX,t.clientY);else if(t.pointerId===this.camPtr.id){t.preventDefault();let e=this.settings.sensitivity||1;this.camDX+=(t.clientX-this.camPtr.x)*e,this.camDY+=(t.clientY-this.camPtr.y)*e*(this.settings.invertY?-1:1),this.camPtr.x=t.clientX,this.camPtr.y=t.clientY,this.lastCamInput=performance.now()/1e3}}ptrUp(t){t.pointerId===this.joy.id&&(this.joy={id:null,cx:0,cy:0,x:0,y:0},this.knob.style.transform="translate(0px,0px)",this.fixedJoy||this.base.classList.remove("visible")),t.pointerId===this.camPtr.id&&(this.camPtr.id=null)}keyDown(t){if(t.repeat){this.keys.add(t.code);return}switch(this.keys.add(t.code),t.code){case"Space":case"KeyK":this.jumpPressed=!0;break;case"KeyJ":case"ShiftLeft":case"ShiftRight":this.attackPressed=!0;break;case"KeyL":case"KeyE":this.specialPressed=!0;break;case"Escape":case"KeyP":this.pausePressed=!0;break;default:break}["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(t.code)&&t.preventDefault()}releaseAll(){this.keys.clear(),this.jumpHeld=this.attackHeld=this.specialHeld=!1,this.joy={id:null,cx:0,cy:0,x:0,y:0},this.camPtr.id=null,this.knob&&(this.knob.style.transform="translate(0px,0px)"),this.root&&this.root.querySelectorAll(".tbtn").forEach(t=>t.classList.remove("down"))}pollGamepad(){let t=navigator.getGamepads?navigator.getGamepads():[],e=t&&t[0];if(!e)return null;let i=o=>!!(e.buttons[o]&&e.buttons[o].pressed),n=o=>{let l=i(o),h=this.padPrev[o];return this.padPrev[o]=l,l&&!h};n(0)&&(this.jumpPressed=!0),n(2)&&(this.attackPressed=!0),(n(1)||n(3))&&(this.specialPressed=!0),n(9)&&(this.pausePressed=!0);let r=Math.abs(e.axes[2]||0)>.15?e.axes[2]:0,a=Math.abs(e.axes[3]||0)>.15?e.axes[3]:0;return(r||a)&&(this.camDX+=r*14*(this.settings.sensitivity||1),this.camDY+=a*10*(this.settings.sensitivity||1),this.lastCamInput=performance.now()/1e3),{x:Math.abs(e.axes[0])>.15?e.axes[0]:0,y:Math.abs(e.axes[1])>.15?-e.axes[1]:0,jump:i(0),attack:i(2),special:i(1)||i(3)}}update(){let t=this.keys,e=0,i=0;(t.has("KeyA")||t.has("ArrowLeft"))&&(e-=1),(t.has("KeyD")||t.has("ArrowRight"))&&(e+=1),(t.has("KeyW")||t.has("ArrowUp"))&&(i+=1),(t.has("KeyS")||t.has("ArrowDown"))&&(i-=1);let n=Math.hypot(e,i);n>1&&(e/=n,i/=n);let r=this.pollGamepad();this.moveX=ye(this.joy.x+e+(r?r.x:0),-1,1),this.moveY=ye(this.joy.y+i+(r?r.y:0),-1,1),this.jumpDown=this.jumpHeld||t.has("Space")||t.has("KeyK")||!!(r&&r.jump),this.attackDown=this.attackHeld||t.has("KeyJ")||!!(r&&r.attack),this.specialDown=this.specialHeld||t.has("KeyL")||t.has("KeyE")||!!(r&&r.special),t.has("KeyQ")&&(this.camDX-=6,this.lastCamInput=performance.now()/1e3),t.has("KeyR")&&(this.camDX+=6,this.lastCamInput=performance.now()/1e3)}consume(){this.jumpPressed=this.attackPressed=this.specialPressed=this.pausePressed=!1,this.camDX=0,this.camDY=0}},ue=new ql;var px={C:0,D:2,E:4,F:5,G:7,A:9,B:11};function mx(s){let t=/^([A-G])([#b]?)(-?\d)$/.exec(s);if(!t)return null;let e=px[t[1]]+(t[2]==="#"?1:t[2]==="b"?-1:0),i=(parseInt(t[3],10)+1)*12+e;return 440*Math.pow(2,(i-69)/12)}function gx(s){let t=[],e=0;for(let i of s.replace(/\|/g," ").split(/\s+/)){if(!i)continue;let[n,r]=i.split(":"),a=parseFloat(r||"1");n!=="r"&&t.push({step:e,f:mx(n),len:a}),e+=a}return{ev:t,length:e}}function xx(s){let t=s.replace(/[\s|]/g,""),e=[];for(let i=0;i<t.length;i++)t[i]!=="."&&e.push({step:i,d:t[i],len:1});return{ev:e,length:t.length}}function Ys(s,t=16,e=[0,1,2,1]){let i="";for(let n of s){let r=n.split(" ");for(let a=0;a<t;a++)i+=r[e[a%e.length]%r.length]+":1 "}return i}var du={menu:{bpm:120,tracks:[{inst:"lead",vol:.16,seq:"G4:2 B4:2 D5:2 G5:2 F#5:2 D5:2 E5:4 | C5:2 E5:2 G5:2 E5:2 D5:8 | G4:2 B4:2 D5:2 G5:2 A5:2 B5:2 A5:4 | G5:4 D5:4 G5:8"},{inst:"bass",vol:.22,seq:"G2:4 D3:4 G2:4 D3:4 | C3:4 G2:4 D3:4 A2:4 | G2:4 D3:4 E2:4 B2:4 | C3:4 D3:4 G2:8"},{inst:"arp",vol:.05,seq:Ys(["G4 B4 D5","C5 E5 G5","G4 B4 D5","C5 D5 G5"])},{inst:"drums",vol:.5,seq:"k...h...s...h... k...h...s...h.h."}]},green:{bpm:150,tracks:[{inst:"lead",vol:.15,seq:"E5:2 G5:2 C6:4 B5:2 G5:2 A5:4 | G5:2 E5:2 C5:2 D5:2 E5:6 r:2 | F5:2 A5:2 C6:4 B5:2 A5:2 G5:4 | E5:2 G5:2 D5:2 E5:2 C5:6 r:2 | E5:2 G5:2 C6:4 D6:2 C6:2 B5:4 | A5:2 B5:2 C6:2 A5:2 G5:8 | F5:2 E5:2 D5:2 F5:2 E5:2 D5:2 C5:4 | D5:2 E5:2 F5:2 G5:2 C5:8"},{inst:"bass",vol:.24,seq:"C3:4 C3:2 G2:2 C3:4 G2:4 | A2:4 A2:2 E2:2 A2:4 E2:4 | F2:4 F2:2 C3:2 F2:4 C3:4 | G2:4 G2:2 D3:2 G2:4 B2:4 | C3:4 C3:2 G2:2 C3:4 G2:4 | F2:4 F2:2 C3:2 G2:4 D3:4 | D2:4 D2:2 A2:2 G2:4 D3:4 | G2:4 F2:4 E2:4 D2:4"},{inst:"arp",vol:.045,seq:Ys(["C5 E5 G5","A4 C5 E5","F4 A4 C5","G4 B4 D5","C5 E5 G5","F4 A4 C5","D5 F5 A5","G4 B4 D5"],16,[0,1,2,1,2,1])},{inst:"drums",vol:.55,seq:"k.h.s.h.k.k.s.h. k.h.s.h.k.k.s.hs"}]},mushroom:{bpm:132,tracks:[{inst:"lead",vol:.15,seq:"C5:2 r:1 C5:1 F5:2 A5:2 C6:2 A5:2 F5:4 | G5:2 r:1 G5:1 Bb5:2 G5:2 E5:4 C5:4 | A4:2 C5:2 F5:2 A5:2 G5:2 F5:2 D5:4 | E5:2 G5:2 E5:2 C5:2 F5:8"},{inst:"bass",vol:.24,seq:"F2:2 r:2 C3:2 r:2 F2:2 r:2 C3:2 r:2 | C2:2 r:2 G2:2 r:2 C2:2 r:2 G2:2 r:2 | D2:2 r:2 A2:2 r:2 Bb2:2 r:2 F2:2 r:2 | C2:2 r:2 G2:2 r:2 F2:2 r:2 C3:2 r:2"},{inst:"pluck",vol:.06,seq:"r:2 A4:2 r:2 A4:2 r:2 A4:2 r:2 A4:2 | r:2 G4:2 r:2 G4:2 r:2 Bb4:2 r:2 Bb4:2 | r:2 F4:2 r:2 F4:2 r:2 D4:2 r:2 D4:2 | r:2 E4:2 r:2 E4:2 r:2 A4:2 r:2 A4:2"},{inst:"drums",vol:.5,seq:"k...s.k.k...s... k...s.k.k...s.hh"}]},jungle:{bpm:112,tracks:[{inst:"flute",vol:.16,seq:"A4:3 C5:1 E5:4 D5:2 C5:2 B4:4 | A4:3 G4:1 A4:4 E4:8 | F4:3 A4:1 C5:4 B4:2 A4:2 G4:4 | E5:6 D5:2 C5:4 B4:4"},{inst:"bass",vol:.25,seq:"A2:6 A2:2 E2:4 G2:4 | A2:6 A2:2 E2:8 | F2:6 F2:2 C3:4 G2:4 | E2:6 E2:2 E2:4 G#2:4"},{inst:"pluck",vol:.05,seq:Ys(["A3 C4 E4","A3 C4 E4","F3 A3 C4","E3 G#3 B3"],16,[0,2,1,2])},{inst:"drums",vol:.55,seq:"k..tk.t.k..tk.ts k..tk.t.k.ttk.ts"}]},lava:{bpm:140,tracks:[{inst:"lead",vol:.14,seq:"D5:2 D5:2 F5:2 D5:2 G5:2 F5:2 E5:2 C5:2 | D5:4 A4:4 D5:8 | Bb4:2 Bb4:2 D5:2 Bb4:2 C5:2 D5:2 E5:2 G5:2 | A5:4 G5:2 E5:2 A4:8"},{inst:"bass",vol:.26,seq:"D2:2 D3:2 D2:2 D3:2 D2:2 D3:2 D2:2 D3:2 | D2:2 D3:2 D2:2 D3:2 C2:2 C3:2 C2:2 C3:2 | Bb1:2 Bb2:2 Bb1:2 Bb2:2 Bb1:2 Bb2:2 Bb1:2 Bb2:2 | A1:2 A2:2 A1:2 A2:2 A1:2 A2:2 C#2:2 C#3:2"},{inst:"organ",vol:.05,seq:"D4:16 C4:16 Bb3:16 A3:16"},{inst:"drums",vol:.6,seq:"k.h.s.hkk.h.s.h. k.h.s.hkk.hss.ss"}]},final:{bpm:156,tracks:[{inst:"lead",vol:.14,seq:"E5:2 B4:2 E5:2 G5:2 F#5:4 D5:4 | E5:2 B4:2 E5:2 G5:2 A5:4 B5:4 | C6:2 B5:2 A5:2 G5:2 F#5:4 D5:4 | E5:12 r:4"},{inst:"bass",vol:.25,seq:"E2:2 E3:2 E2:2 E3:2 D2:2 D3:2 D2:2 D3:2 | C2:2 C3:2 C2:2 C3:2 D2:2 D3:2 D2:2 D3:2 | A1:2 A2:2 A1:2 A2:2 B1:2 B2:2 B1:2 B2:2 | E2:2 E3:2 E2:2 E3:2 E2:2 E3:2 E2:2 E3:2"},{inst:"arp",vol:.05,seq:Ys(["E4 G4 B4 E5","C4 E4 G4 C5","A3 C4 E4 A4","B3 D#4 F#4 B4"],16,[0,1,2,3])},{inst:"drums",vol:.6,seq:"k.hsk.hsk.hsk.hs k.hsk.hskkhsk.ss"}]},boss:{bpm:168,tracks:[{inst:"lead",vol:.14,seq:"C5:1 r:1 C5:1 r:1 Eb5:2 C5:2 G5:2 F5:2 Eb5:2 D5:2 | C5:1 r:1 C5:1 r:1 Eb5:2 C5:2 Ab5:4 G5:4 | Bb4:1 r:1 Bb4:1 r:1 D5:2 Bb4:2 F5:2 Eb5:2 D5:2 C5:2 | B4:4 D5:4 G5:8"},{inst:"bass",vol:.27,seq:"C2:1 C2:1 C3:1 C2:1 C2:1 C2:1 C3:1 C2:1 C2:1 C2:1 C3:1 C2:1 C2:1 C2:1 C3:1 C2:1 | Ab1:2 Ab2:2 Ab1:2 Ab2:2 Ab1:2 Ab2:2 Ab1:2 Ab2:2 | Bb1:2 Bb2:2 Bb1:2 Bb2:2 Bb1:2 Bb2:2 Bb1:2 Bb2:2 | G1:2 G2:2 G1:2 G2:2 G1:2 G2:2 B1:2 B2:2"},{inst:"drums",vol:.65,seq:"k.hsk.hsk.hsk.hs k.hsk.hskkhskshs"}]},ending:{bpm:100,tracks:[{inst:"flute",vol:.16,seq:"C5:4 E5:4 G5:4 E5:4 | F5:4 A5:4 G5:8 | E5:4 D5:4 C5:4 A4:4 | B4:4 D5:4 C5:8"},{inst:"bass",vol:.22,seq:"C3:8 A2:8 | F2:8 G2:8 | C3:8 A2:8 | G2:8 C3:8"},{inst:"arp",vol:.045,seq:Ys(["C5 E5 G5","F4 A4 C5","C5 E5 G5","G4 B4 D5"])}]}},yx={victory:{bpm:160,tracks:[{inst:"lead",vol:.18,seq:"C5:2 E5:2 G5:2 C6:4 G5:2 C6:8 r:4"},{inst:"bass",vol:.25,seq:"C3:2 G2:2 C3:2 E3:4 G2:2 C3:8 r:4"}]},gameover:{bpm:90,tracks:[{inst:"lead",vol:.18,seq:"G4:4 E4:4 C4:4 Eb4:2 D4:2 C4:8"},{inst:"bass",vol:.25,seq:"C3:8 G2:8 C2:8"}]},death:{bpm:150,tracks:[{inst:"lead",vol:.18,seq:"B4:1 F5:2 r:1 F5:1 F5:2 E5:2 D5:2 C5:4"}]},bossclear:{bpm:140,tracks:[{inst:"lead",vol:.18,seq:"G4:2 C5:2 E5:2 G5:4 E5:2 G5:2 C6:10"},{inst:"bass",vol:.25,seq:"C3:4 E3:4 G3:4 C3:10"}]}},Yl=class{constructor(){this.ctx=null,this.musicVol=.6,this.sfxVol=.8,this.current=null,this.currentName=null,this.timer=null,this.noiseBuf=null,this.lastPlay={}}unlock(){try{if(!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t({latencyHint:"interactive"}),this.master=this.ctx.createGain(),this.master.gain.value=.9;let e=this.ctx.createDynamicsCompressor();this.master.connect(e),e.connect(this.ctx.destination),this.musicGain=this.ctx.createGain(),this.musicGain.connect(this.master),this.sfxGain=this.ctx.createGain(),this.sfxGain.connect(this.master),this.setVolumes(this.musicVol,this.sfxVol);let i=this.ctx.sampleRate;this.noiseBuf=this.ctx.createBuffer(1,i,this.ctx.sampleRate);let n=this.noiseBuf.getChannelData(0);for(let r=0;r<i;r++)n[r]=Math.random()*2-1;if(this.pendingMusic){let r=this.pendingMusic;this.pendingMusic=null,this.playMusic(r)}}this.ctx.state==="suspended"&&this.ctx.resume()}catch(t){console.warn("Audio indispon\xEDvel",t)}}suspend(){try{this.ctx&&this.ctx.suspend()}catch{}}resume(){try{this.ctx&&this.ctx.resume()}catch{}}setVolumes(t,e){this.musicVol=t,this.sfxVol=e,this.musicGain&&(this.musicGain.gain.value=t*.9,this.sfxGain.gain.value=e*.9)}tone(t,e,i,n,r,a=0,o=null,l=.005){let h=this.ctx,c=h.currentTime+a,u=h.createOscillator(),d=h.createGain();u.type=t,u.frequency.setValueAtTime(e,c),i&&i!==e&&u.frequency.exponentialRampToValueAtTime(Math.max(20,i),c+n),d.gain.setValueAtTime(1e-4,c),d.gain.linearRampToValueAtTime(r,c+l),d.gain.exponentialRampToValueAtTime(1e-4,c+n),u.connect(d),d.connect(o||this.sfxGain),u.start(c),u.stop(c+n+.02)}noise(t,e,i,n,r,a=0,o=null,l=1){let h=this.ctx,c=h.currentTime+a,u=h.createBufferSource();u.buffer=this.noiseBuf;let d=h.createBiquadFilter();d.type=i,d.Q.value=l,d.frequency.setValueAtTime(n,c),r&&d.frequency.exponentialRampToValueAtTime(r,c+t);let f=h.createGain();f.gain.setValueAtTime(e,c),f.gain.exponentialRampToValueAtTime(1e-4,c+t),u.connect(d),d.connect(f),f.connect(o||this.sfxGain),u.start(c,Math.random()*.5),u.stop(c+t+.02)}sfx(t){if(!this.ctx||this.ctx.state!=="running")return;let e=this.ctx.currentTime;if(this.lastPlay[t]&&e-this.lastPlay[t]<.03)return;this.lastPlay[t]=e;let i=(...r)=>this.tone(...r),n=(...r)=>this.noise(...r);switch(t){case"jump":i("square",320,760,.16,.14);break;case"jump2":i("square",520,1100,.16,.12);break;case"ring":i("square",1568,0,.08,.09),i("square",2093,0,.22,.09,.06),i("sine",3136,0,.2,.05,.06);break;case"coin":i("square",988,0,.07,.1),i("square",1319,0,.3,.1,.07);break;case"spring":i("triangle",180,1200,.32,.3),i("square",360,1400,.25,.06);break;case"boostpad":n(.35,.3,"bandpass",400,4e3,0,null,2),i("sawtooth",200,800,.3,.08);break;case"boost":n(.5,.35,"bandpass",300,2500,0,null,1.5);break;case"spin":n(.3,.25,"bandpass",800,3e3,0,null,4),i("square",200,500,.2,.06);break;case"homing":n(.18,.3,"highpass",1200,6e3),i("square",700,1600,.12,.08);break;case"stomp":i("square",420,90,.14,.2),n(.08,.2,"lowpass",900);break;case"kill":i("square",600,120,.18,.15),n(.25,.3,"lowpass",1500,200);break;case"hurt":i("sawtooth",500,80,.4,.2),n(.3,.25,"bandpass",1200,300);break;case"ringloss":for(let r=0;r<6;r++)i("square",1500-r*120,0,.08,.06,r*.035);break;case"break":n(.35,.45,"lowpass",2500,200),i("square",160,60,.2,.12);break;case"bump":i("square",140,90,.1,.2);break;case"itemappear":for(let r=0;r<6;r++)i("square",400+r*140,0,.05,.08,r*.045);break;case"powerup":[523,659,784,1047,784,1047,1319].forEach((r,a)=>i("square",r,0,.09,.1,a*.06));break;case"oneup":[659,784,1319,1047,1175,1568].forEach((r,a)=>i("square",r,0,.1,.11,a*.09));break;case"shield":i("sine",300,900,.4,.2),i("triangle",600,1800,.4,.08);break;case"checkpoint":i("triangle",784,0,.2,.2),i("triangle",1175,0,.5,.2,.15),i("sine",2350,0,.4,.05,.15);break;case"medal":[784,988,1175,1568,1976].forEach((r,a)=>i("triangle",r,0,.25,.14,a*.07));break;case"fireball":i("square",900,300,.1,.1),n(.12,.15,"highpass",2e3);break;case"explode":n(.8,.6,"lowpass",1800,60),i("sawtooth",120,30,.6,.2);break;case"bosshit":i("square",220,70,.3,.25),n(.3,.4,"lowpass",3e3,300),i("square",880,440,.15,.1,.05);break;case"laser":i("sawtooth",1400,200,.5,.1);break;case"slam":n(.6,.6,"lowpass",600,40),i("sine",90,30,.5,.5);break;case"roar":i("sawtooth",160,70,.9,.18),n(.9,.25,"bandpass",500,200,0,null,3);break;case"warp":i("square",800,120,.5,.1),i("square",600,90,.5,.06,.08);break;case"portal":i("sine",300,1500,.5,.2),i("triangle",1500,300,.5,.08,.1);break;case"grind":n(.15,.08,"bandpass",3e3,2500,0,null,6);break;case"splash":n(.5,.35,"lowpass",2e3,200);break;case"menu":i("square",880,0,.05,.08);break;case"select":i("square",660,0,.06,.1),i("square",1320,0,.12,.1,.06);break;case"back":i("square",520,260,.1,.1);break;case"pause":i("square",1047,0,.06,.1),i("square",784,0,.06,.1,.07),i("square",1047,0,.1,.1,.14);break;case"tick":i("square",1200,0,.03,.05);break;default:break}}playVoice(t,e,i,n,r){let a=this.ctx,o=a.createGain();o.connect(this.musicGain);let l=a.createOscillator(),h=.05;switch(t){case"lead":l.type="square",h=.04;break;case"bass":l.type="triangle",r*=1.6,h=.03;break;case"arp":l.type="square",h=.02,n=Math.min(n,.09);break;case"pluck":l.type="triangle",n=Math.min(n,.15),r*=2;break;case"flute":l.type="sine",r*=1.8,h=.12;break;case"organ":l.type="sawtooth",r*=.6,h=.2;break;default:l.type="square"}if(l.frequency.setValueAtTime(e,i),t==="flute"||t==="lead"){let u=a.createOscillator(),d=a.createGain();u.frequency.value=5.5,d.gain.value=e*.006,u.connect(d),d.connect(l.frequency),u.start(i+.12),u.stop(i+n+h+.05)}let c=l;if(t==="lead"||t==="organ"){let u=a.createBiquadFilter();u.type="lowpass",u.frequency.value=t==="organ"?1200:3200,l.connect(u),c=u}c.connect(o),o.gain.setValueAtTime(1e-4,i),o.gain.linearRampToValueAtTime(r,i+.008),o.gain.setValueAtTime(r*.8,i+Math.max(.01,n-.01)),o.gain.exponentialRampToValueAtTime(1e-4,i+n+h),l.start(i),l.stop(i+n+h+.05)}playDrum(t,e,i){let n=this.ctx;if(t==="k"){let r=n.createOscillator(),a=n.createGain();r.frequency.setValueAtTime(150,e),r.frequency.exponentialRampToValueAtTime(40,e+.12),a.gain.setValueAtTime(i*.9,e),a.gain.exponentialRampToValueAtTime(1e-4,e+.15),r.connect(a),a.connect(this.musicGain),r.start(e),r.stop(e+.16)}else if(t==="s"){this.noiseAt(e,.12,i*.45,"bandpass",1800);let r=n.createOscillator(),a=n.createGain();r.type="triangle",r.frequency.setValueAtTime(220,e),a.gain.setValueAtTime(i*.25,e),a.gain.exponentialRampToValueAtTime(1e-4,e+.08),r.connect(a),a.connect(this.musicGain),r.start(e),r.stop(e+.1)}else if(t==="h")this.noiseAt(e,.04,i*.18,"highpass",7e3);else if(t==="t"){let r=n.createOscillator(),a=n.createGain();r.frequency.setValueAtTime(220,e),r.frequency.exponentialRampToValueAtTime(110,e+.15),a.gain.setValueAtTime(i*.5,e),a.gain.exponentialRampToValueAtTime(1e-4,e+.18),r.connect(a),a.connect(this.musicGain),r.start(e),r.stop(e+.2)}}noiseAt(t,e,i,n,r){let a=this.ctx,o=a.createBufferSource();o.buffer=this.noiseBuf;let l=a.createBiquadFilter();l.type=n,l.frequency.value=r;let h=a.createGain();h.gain.setValueAtTime(i,t),h.gain.exponentialRampToValueAtTime(1e-4,t+e),o.connect(l),l.connect(h),h.connect(this.musicGain),o.start(t,Math.random()*.5),o.stop(t+e+.01)}playMusic(t,e=!0){if(!this.ctx){this.pendingMusic=t;return}if(this.currentName===t&&this.current&&e)return;this.stopMusic();let i=du[t]||yx[t];if(!i)return;let n=60/i.bpm/4,r=i.tracks.map(h=>({...h,...h.inst==="drums"?xx(h.seq):gx(h.seq),idx:0,loopStart:0})),a=this.ctx.currentTime+.08;r.forEach(h=>{h.loopStart=a});let o=Math.max(...r.map(h=>h.length));this.current={tracks:r,stepDur:n,loop:e,start:a,total:o},this.currentName=t;let l=()=>{if(!this.current||!this.ctx)return;let h=this.ctx.currentTime+.15,c=!0;for(let u of this.current.tracks){for(;;){if(u.idx>=u.ev.length){if(!e)break;u.idx=0,u.loopStart+=u.length*n}let d=u.ev[u.idx],f=u.loopStart+d.step*n;if(f>h){c=!1;break}f>=this.ctx.currentTime-.05&&(u.inst==="drums"?this.playDrum(d.d,f,u.vol):d.f&&this.playVoice(u.inst,d.f,f,d.len*n*.92,u.vol)),u.idx++}u.idx<u.ev.length&&(c=!1)}!e&&c&&(this.current=null,this.currentName=null,clearInterval(this.timer),this.timer=null)};l(),this.timer=setInterval(l,40)}stopMusic(){this.timer&&clearInterval(this.timer),this.timer=null,this.current=null,this.currentName=null}},it=new Yl,zx=Object.keys(du);var wn=null;function vx(){if(wn)return wn;let s=new Uint8Array([90,90,90,255,170,170,170,255,255,255,255,255]);return wn=new Ds(s,3,1,ni),wn.minFilter=wn.magFilter=Se,wn.needsUpdate=!0,wn}var us=new Map;function F(s,t={}){let e="t"+s+JSON.stringify(t);if(us.has(e))return us.get(e);let i=new oa({color:s,gradientMap:vx(),...t});return us.set(e,i),i}function ki(s,t={}){let e="b"+s+JSON.stringify(t);if(us.has(e))return us.get(e);let i=new si({color:s,...t});return us.set(e,i),i}function oe(s,t,e=!0){let i=document.createElement("canvas");i.width=i.height=s;let n=i.getContext("2d");t(n,s);let r=new Jr(i);return e&&(r.wrapS=r.wrapT=Cs),r.colorSpace=Ze,r.anisotropy=2,r.generateMipmaps=!0,r.minFilter=Ii,r}function rn(s,t,e,i,n=400,r=3){s.fillStyle=e,s.fillRect(0,0,t,t);for(let a=0;a<n;a++)s.fillStyle=i[a%i.length],s.globalAlpha=.35,s.fillRect(Math.random()*t,Math.random()*t,r,r);s.globalAlpha=1}var $l={};function Ce(s){if($l[s])return $l[s];let t;switch(s){case"grass":t=oe(64,(e,i)=>{rn(e,i,"#5cc542",["#4fb236","#74d957","#3f9c2c"],300,3)});break;case"grassDark":t=oe(64,(e,i)=>{rn(e,i,"#2f7d32",["#276b2a","#3a9440","#1f5c22"],300,3)});break;case"checker":t=oe(64,(e,i)=>{for(let n=0;n<4;n++)for(let r=0;r<4;r++)e.fillStyle=(r+n)%2?"#a0632e":"#c98443",e.fillRect(r*16,n*16,16,16);e.fillStyle="rgba(0,0,0,0.12)";for(let n=0;n<4;n++)e.fillRect(0,n*16+14,i,2)});break;case"dirt":t=oe(64,(e,i)=>{rn(e,i,"#b0743a",["#9a6230","#c4874a","#87552a"],400,4)});break;case"brickWall":t=oe(64,(e,i)=>{e.fillStyle="#c25b2a",e.fillRect(0,0,i,i),e.fillStyle="#7a3115";for(let n=0;n<4;n++){e.fillRect(0,n*16,i,2);let r=n%2?0:16;for(let a=0;a<3;a++)e.fillRect(r+a*32,n*16,2,16)}});break;case"stone":t=oe(64,(e,i)=>{rn(e,i,"#6b6b78",["#5a5a66","#7c7c8a","#4d4d58"],350,4),e.strokeStyle="#3e3e48",e.lineWidth=2;for(let n=0;n<2;n++)e.strokeRect(1+n%2*16,n*32+1,30,30),e.strokeRect(33+n%2*16-32*(n%2),n*32+1,30,30)});break;case"stoneDark":t=oe(64,(e,i)=>{rn(e,i,"#3c3440",["#2e2832","#4a404e","#5a2a2a"],350,4),e.strokeStyle="#1e1a20",e.lineWidth=2;for(let n=0;n<4;n++){e.beginPath(),e.moveTo(0,n*16),e.lineTo(i,n*16),e.stroke();let r=n%2?8:24;e.beginPath(),e.moveTo(r,n*16),e.lineTo(r,n*16+16),e.moveTo(r+32,n*16),e.lineTo(r+32,n*16+16),e.stroke()}});break;case"jungleTop":t=oe(64,(e,i)=>{rn(e,i,"#3f8f2f",["#2f7a22","#5aa83a","#6b4a24"],350,4)});break;case"ruin":t=oe(64,(e,i)=>{rn(e,i,"#8a8a6a",["#77775a","#9a9a78","#4f7a3a"],350,4),e.strokeStyle="#55553f",e.lineWidth=2;for(let n=0;n<4;n++)e.beginPath(),e.moveTo(0,n*16),e.lineTo(i,n*16),e.stroke()});break;case"crystal":t=oe(64,(e,i)=>{let n=e.createLinearGradient(0,0,i,i);n.addColorStop(0,"#5b2a9e"),n.addColorStop(1,"#2a1a5e"),e.fillStyle=n,e.fillRect(0,0,i,i),e.strokeStyle="#a77bff",e.lineWidth=2,e.strokeRect(2,2,i-4,i-4),e.strokeStyle="rgba(160,220,255,0.6)",e.beginPath(),e.moveTo(0,i/2),e.lineTo(i,i/2),e.moveTo(i/2,0),e.lineTo(i/2,i),e.stroke()});break;case"neonTop":t=oe(64,(e,i)=>{e.fillStyle="#1b1240",e.fillRect(0,0,i,i),e.strokeStyle="#38e8ff",e.lineWidth=3,e.strokeRect(1.5,1.5,i-3,i-3),e.strokeStyle="rgba(255,80,220,0.5)",e.lineWidth=1,e.strokeRect(10,10,i-20,i-20)});break;case"lava":t=oe(128,(e,i)=>{e.fillStyle="#d43b0b",e.fillRect(0,0,i,i);for(let n=0;n<60;n++){let r=Math.random()*i,a=Math.random()*i,o=6+Math.random()*18,l=e.createRadialGradient(r,a,0,r,a,o);l.addColorStop(0,"rgba(255,230,90,0.9)"),l.addColorStop(1,"rgba(255,120,0,0)"),e.fillStyle=l,e.fillRect(r-o,a-o,o*2,o*2)}});break;case"water":t=oe(64,(e,i)=>{e.fillStyle="#2a7fd4",e.fillRect(0,0,i,i),e.strokeStyle="rgba(255,255,255,0.35)",e.lineWidth=2;for(let n=0;n<6;n++){e.beginPath();let r=n*11+4;e.moveTo(0,r),e.bezierCurveTo(16,r-4,32,r+4,64,r),e.stroke()}});break;case"qblock":t=oe(64,(e,i)=>{e.fillStyle="#f5b324",e.fillRect(0,0,i,i),e.fillStyle="#c47a10",e.fillRect(0,i-5,i,5),e.fillRect(i-5,0,5,i),e.fillStyle="#ffe08a",e.fillRect(0,0,i,4),e.fillRect(0,0,4,i),e.fillStyle="#7a4a08",[[8,8],[52,8],[8,52],[52,52]].forEach(([n,r])=>e.fillRect(n,r,4,4)),e.font="bold 44px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillStyle="#7a4a08",e.fillText("?",34,36),e.fillStyle="#fff",e.fillText("?",32,33)},!1);break;case"usedblock":t=oe(64,(e,i)=>{e.fillStyle="#9a6a3a",e.fillRect(0,0,i,i),e.strokeStyle="#5a3a1a",e.lineWidth=4,e.strokeRect(2,2,i-4,i-4),e.fillStyle="#5a3a1a",[[8,8],[52,8],[8,52],[52,52]].forEach(([n,r])=>e.fillRect(n,r,4,4))},!1);break;case"brick":t=oe(64,(e,i)=>{e.fillStyle="#c8602a",e.fillRect(0,0,i,i),e.fillStyle="#3a1a0a";for(let n=0;n<4;n++){e.fillRect(0,n*16,i,2);let r=n%2?0:16;e.fillRect(r,n*16,2,16),e.fillRect(r+32,n*16,2,16)}e.fillStyle="rgba(255,200,150,0.35)";for(let n=0;n<4;n++)e.fillRect(0,n*16+2,i,2)},!1);break;case"monitor":t=oe(64,(e,i)=>{e.fillStyle="#d8dde6",e.fillRect(0,0,i,i),e.fillStyle="#20232b",e.fillRect(8,8,48,40),e.fillStyle="#5a6070",e.fillRect(0,54,i,10)},!1);break;case"boostpad":t=oe(64,(e,i)=>{e.fillStyle="#20262e",e.fillRect(0,0,i,i),e.fillStyle="#ffdd33";for(let n=0;n<2;n++){e.beginPath();let r=10+n*26;e.moveTo(10,r+18),e.lineTo(32,r),e.lineTo(54,r+18),e.lineTo(46,r+18),e.lineTo(32,r+8),e.lineTo(18,r+18),e.fill()}},!1);break;case"crusherFace":t=oe(64,(e,i)=>{rn(e,i,"#8a94a6",["#7a8496","#9aa4b6"],200,4),e.fillStyle="#fff",e.fillRect(12,18,14,12),e.fillRect(38,18,14,12),e.fillStyle="#000",e.fillRect(18,22,6,6),e.fillRect(40,22,6,6),e.fillRect(10,14,18,3),e.fillRect(36,14,18,3),e.fillStyle="#fff",e.fillRect(16,40,32,10),e.fillStyle="#000";for(let n=0;n<5;n++)e.fillRect(18+n*6,40,2,10)},!1);break;case"sign":t=oe(128,(e,i)=>{e.fillStyle="#ffffff",e.fillRect(0,0,i,i),e.fillStyle="#1f6fe0",e.beginPath(),e.arc(64,64,52,0,Math.PI*2),e.fill(),e.fillStyle="#ffd23f",e.font="bold 54px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("GO!",64,68)},!1);break;case"signBack":t=oe(128,(e,i)=>{e.fillStyle="#ffffff",e.fillRect(0,0,i,i),e.fillStyle="#e53935",e.beginPath(),e.arc(64,64,52,0,Math.PI*2),e.fill(),e.fillStyle="#fff",e.font="bold 40px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("META",64,68)},!1);break;case"emblemR":t=oe(64,(e,i)=>{e.fillStyle="#ffffff",e.beginPath(),e.arc(32,32,30,0,Math.PI*2),e.fill(),e.fillStyle="#e8541c",e.font="bold 40px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("R",32,35)},!1);break;case"flag":t=oe(64,(e,i)=>{e.fillStyle="#2ec44a",e.fillRect(0,0,i,i),e.fillStyle="#fff",e.beginPath(),e.arc(32,32,16,0,Math.PI*2),e.fill(),e.fillStyle="#ffcf33",e.beginPath();for(let n=0;n<10;n++){let r=-Math.PI/2+n*Math.PI/5,a=n%2?6:13;e.lineTo(32+Math.cos(r)*a,32+Math.sin(r)*a)}e.fill()},!1);break;default:t=oe(8,(e,i)=>{e.fillStyle="#ff00ff",e.fillRect(0,0,i,i)})}return $l[s]=t,t}var Zl={};function fu(s){if(Zl[s])return Zl[s];let t={grass:["grass","checker"],grassDirt:["grass","dirt"],mario:["grass","dirt"],brick:["brick","brick"],jungle:["jungleTop","ruin"],ruin:["ruin","ruin"],stone:["stone","stone"],castle:["stoneDark","stoneDark"],crystal:["neonTop","crystal"],wood:["dirt","dirt"]},[e,i]=t[s]||t.grass,n={top:new ri({map:Ce(e)}),side:new ri({map:Ce(i)})};return s==="crystal"&&(n.top.emissive=new Dt("#120a30"),n.side.emissive=new Dt("#1a0a3a")),Zl[s]=n,n}var Q={sphere:new Oi(1,14,10),sphereLo:new Oi(1,10,7),hemi:new Oi(1,14,8,0,Math.PI*2,0,Math.PI/2),cyl:new gi(1,1,1,10),cone:new nn(1,1,8),box:new Fi(1,1,1),torus:new bn(1,.25,8,20)},Ft=Q;function K(s,t,e=0,i=0,n=0,r=1,a=r,o=r,l=null){let h=new St(s,t);return h.position.set(e,i,n),h.scale.set(r,a,o),h.castShadow=!0,l&&l.add(h),h}function ke(s,t,e,i){let n=new ne;return n.position.set(t,e,i),s.add(n),n}function pu(s,t,e){let i={};for(let n of[-1,1]){let r=ke(s.body,n*.17,.72,0);K(Q.cyl,t.leg,0,-.17,0,.09,.34,.09,r);let a=ke(r,0,-.34,0);K(Q.cyl,t.leg,0,-.15,0,.085,.3,.085,a);let o=K(Q.sphere,t.shoe,0,-.32,.08,.15,.12,.27,a);e.shoeStripe&&K(Q.box,t.stripe,0,-.27,.12,.31,.05,.08,a),e.sole&&K(Q.box,t.sole,0,-.42,.08,.28,.05,.5,a),i[n<0?"hipL":"hipR"]=r,i[n<0?"kneeL":"kneeR"]=a}for(let n of[-1,1]){let r=ke(s.torso,n*.38,.22,0),a=K(Q.cyl,t.arm,0,-.15,0,.075,.3,.075,r);a.rotation.z=0;let o=ke(r,0,-.3,0);K(Q.cyl,t.forearm||t.arm,0,-.12,0,.07,.24,.07,o),K(Q.sphere,t.glove,0,-.3,0,.13,.13,.13,o),e.cuff&&K(Q.cyl,t.glove,0,-.2,0,.1,.07,.1,o),i[n<0?"shL":"shR"]=r,i[n<0?"elL":"elR"]=o}return i}function mu(s,t,e,i,n,r,a,o){for(let l of[-1,1])K(Q.sphere,t,l*r,i,n,a*.85,a,a*.6,s),K(Q.sphere,e,l*r*.9,i-a*.05,n+a*.45,a*.42,a*.55,a*.25,s),K(Q.sphere,ki(16777215),l*r*.85+.02,i+a*.15,n+a*.62,a*.13,a*.15,a*.08,s)}function Mx(){let s={blue:F(2056160),tan:F(15910810),leg:F(2056160),arm:F(15910810),forearm:F(15910810),glove:F(16777215),shoe:F(2274138),stripe:F(16777215),sole:F(15658734),white:F(16777215),iris:F(1740602),black:F(1118481),goggle:F(16747034),lens:F(8382463,{emissive:1131605}),scarf:F(16765503)},t=new ne;t.body=ke(t,0,0,0),t.torso=ke(t.body,0,.98,0),K(Q.sphere,s.blue,0,0,0,.38,.42,.34,t.torso),K(Q.sphere,s.tan,0,-.02,.17,.25,.3,.2,t.torso),K(Q.torus,s.scarf,0,.3,0,.27,.27,.35,t.torso).rotation.x=Math.PI/2;let e=K(Q.cone,s.scarf,0,.22,-.38,.1,.45,.06,t.torso);e.rotation.x=-1.9,t.scarfTail=e;let i=ke(t.torso,0,.55,.02);t.head=i,K(Q.sphere,s.blue,0,0,0,.43,.42,.42,i),K(Q.sphere,s.tan,0,-.12,.3,.24,.18,.18,i),K(Q.sphere,s.black,0,-.04,.48,.06,.05,.05,i),mu(i,s.white,s.iris,.06,.3,.13,.15);let n=[[0,.18,-1.2,.55],[.22,.05,-1.35,.5],[-.22,.05,-1.35,.5],[0,-.12,-1.55,.5],[.16,-.22,-1.7,.4],[-.16,-.22,-1.7,.4]];for(let[o,l,h,c]of n){let u=K(Q.cone,s.blue,o,l,-.32,.16,c,.16,i);u.rotation.x=h,u.rotation.z=-o*.8}for(let o of[-1,1]){let l=K(Q.cone,s.blue,o*.25,.36,-.05,.11,.25,.08,i);l.rotation.z=-o*.3}let r=K(Q.torus,s.goggle,0,.2,0,.42,.42,.3,i);r.rotation.x=Math.PI/2-.25;for(let o of[-1,1]){let l=K(Q.cyl,s.lens,o*.13,.27,.33,.1,.06,.1,i);l.rotation.x=Math.PI/2-.5}Object.assign(t,pu(t,s,{shoeStripe:!0,sole:!0,cuff:!0}));let a=new ne;K(Q.sphere,s.blue,0,0,0,.62,.62,.62,a);for(let o=0;o<8;o++){let l=o/8*Math.PI*2,h=K(Q.cone,s.blue,0,Math.cos(l)*.6,Math.sin(l)*.6,.18,.38,.18,a);h.rotation.x=l}return K(Q.torus,F(7317759,{transparent:!0,opacity:.45}),0,0,0,.7,.7,.7,a).rotation.y=Math.PI/2,a.position.y=.62,a.visible=!1,t.add(a),t.ball=a,t.kind="zip",t}function bx(){let s={skin:F(16172186),cap:F(15225884),shirt:F(15225884),overall:F(1740687),leg:F(1740687),arm:F(15225884),forearm:F(15225884),glove:F(16777215),shoe:F(7027482),sole:F(3809293),white:F(16777215),iris:F(2776023),hair:F(5911060),button:F(16765503)},t=new ne;t.body=ke(t,0,0,0),t.torso=ke(t.body,0,.98,0),K(Q.sphere,s.overall,0,-.08,0,.42,.4,.36,t.torso),K(Q.sphere,s.shirt,0,.16,-.02,.36,.26,.32,t.torso);for(let r of[-1,1])K(Q.box,s.overall,r*.15,.17,.25,.09,.32,.06,t.torso),K(Q.sphere,s.button,r*.15,.06,.32,.05,.05,.03,t.torso);let e=ke(t.torso,0,.6,.02);t.head=e,K(Q.sphere,s.skin,0,0,0,.4,.4,.38,e),K(Q.sphere,s.hair,0,-.02,-.12,.38,.3,.3,e),K(Q.sphere,s.skin,0,-.06,.38,.12,.11,.11,e);for(let r of[-1,1]){let a=K(Q.sphere,s.hair,r*.11,-.16,.34,.13,.06,.07,e);a.rotation.z=r*.25,K(Q.sphere,s.skin,r*.39,-.02,0,.07,.1,.06,e)}mu(e,s.white,s.iris,.1,.27,.11,.12),K(Q.hemi,s.cap,0,.1,-.02,.43,.36,.42,e);let i=K(Q.cyl,s.cap,0,.12,.3,.32,.04,.24,e);i.rotation.x=.12;let n=K(Q.cyl,F(16777215,{map:Ce("emblemR")}),0,.32,.3,.12,.02,.12,e);return n.rotation.x=Math.PI/2-.5,Object.assign(t,pu(t,s,{sole:!0})),t.kind="rocco",t}function ma(s){return s==="rocco"?bx():Mx()}var Sx=["hipL","hipR","kneeL","kneeR","shL","shR","elL","elR"];function ga(s,t,e){let i={hipL:[0,0,0],hipR:[0,0,0],kneeL:[0,0,0],kneeR:[0,0,0],shL:[0,0,.15],shR:[0,0,-.15],elL:[0,0,0],elR:[0,0,0]},n=0,r=0,a=0,o=0,l=0,h=t.t;s.phase=s.phase||0;let c=t.mode,u=!1;if(c==="run"||c==="idle"){let f=ye(t.speed,0,1.6);if(f<.05)r=Math.sin(h*2.5)*.02,i.shL=[.05,0,.18+Math.sin(h*2.5)*.03],i.shR=[.05,0,-.18-Math.sin(h*2.5)*.03],i.elL=[-.2,0,0],i.elR=[-.2,0,0],a=Math.sin(h*.7)*.05;else{s.phase+=e*(5+f*9);let g=s.phase,y=.45+Math.min(f,1)*.6;i.hipL=[Math.sin(g)*y,0,0],i.hipR=[-Math.sin(g)*y,0,0],i.kneeL=[-(Math.max(0,-Math.cos(g))*1.3*y+.1),0,0],i.kneeR=[-(Math.max(0,Math.cos(g))*1.3*y+.1),0,0],s.kind==="zip"&&f>1.05?(i.shL=[.9,0,.4],i.shR=[.9,0,-.4],i.elL=[.3,0,0],i.elR=[.3,0,0]):(i.shL=[-Math.sin(g)*y*.9,0,.15],i.shR=[Math.sin(g)*y*.9,0,-.15],i.elL=[-.7,0,0],i.elR=[-.7,0,0]),n=.1+Math.min(f,1.5)*.22,r=Math.abs(Math.sin(g))*.07*Math.min(f,1)}}else if(c==="ball"||c==="spindash"||c==="homing")u=s.kind==="zip",u||(i.hipL=i.hipR=[-1.6,0,0],i.kneeL=i.kneeR=[-2.2,0,0],i.shL=[-1.2,0,.3],i.shR=[-1.2,0,-.3],o=h*14);else if(c==="jump"||c==="spring")s.kind==="rocco"&&c==="jump"?(i.hipL=[-1,0,0],i.kneeL=[-1.2,0,0],i.hipR=[.4,0,0],i.kneeR=[-.3,0,0],i.shR=[-2.9,0,-.1],i.elR=[0,0,0],i.shL=[.3,0,.6],i.elL=[-.5,0,0]):(i.hipL=[.1,0,.05],i.hipR=[-.1,0,-.05],i.shL=[-2.8,0,.2],i.shR=[-2.8,0,-.2],i.kneeL=[-.2,0,0],i.kneeR=[-.2,0,0]);else if(c==="fall")i.hipL=[.3,0,.1],i.hipR=[-.4,0,-.1],i.kneeL=[-.6,0,0],i.kneeR=[-.3,0,0],i.shL=[-1.5+Math.sin(h*14)*.4,0,.9],i.shR=[-1.5-Math.sin(h*14)*.4,0,-.9];else if(c==="double")i.hipL=i.hipR=[-1.2,0,0],i.kneeL=i.kneeR=[-1.8,0,0],i.shL=[-1,0,1],i.shR=[-1,0,-1],o=(t.modeTime||0)*18;else if(c==="punch"){let f=Math.min(1,(t.modeTime||0)/.08);i.shR=[-1.55*f,0,-.1],i.elR=[0,0,0],i.shL=[.6,0,.3],i.elL=[-1.2,0,0],i.hipL=[-.5,0,0],i.hipR=[.4,0,0],i.kneeL=[-.4,0,0],n=.25}else if(c==="spinattack")i.shL=[0,0,1.4],i.shR=[0,0,-1.4],s.body.rotation.y=(t.modeTime||0)*28;else if(c==="pound")i.hipL=i.hipR=[-1.5,0,0],i.kneeL=i.kneeR=[-2,0,0],i.shL=[-.6,0,.6],i.shR=[-.6,0,-.6];else if(c==="grind")i.hipL=[-.5,0,.2],i.hipR=[.4,0,-.2],i.kneeL=[-.8,0,0],i.kneeR=[-.6,0,0],i.shL=[0,0,1.3+Math.sin(h*6)*.1],i.shR=[0,0,-1.3+Math.sin(h*6)*.1],l=-.15,n=.15;else if(c==="hurt")i.shL=[-.5,0,1.2],i.shR=[-.5,0,-1.2],i.hipL=[.6,0,0],i.hipR=[.3,0,0],i.kneeL=[-.8,0,0],n=-.5;else if(c==="victory"){let f=t.modeTime||0;s.body.rotation.y=f<.6?f*10.5:0,i.shR=[-2.8,0,-.3],i.elR=[-.3,0,0],i.shL=[0,0,.3+Math.abs(Math.sin(f*6))*.3],i.elL=[-1.5,0,0],l=Math.max(0,Math.sin(Math.min(f,.6)/.6*Math.PI))*.8,i.hipL=[-.3,0,.1],i.kneeL=[-.5,0,0]}else if(c==="dead")i.shL=[-2.9,0,.5],i.shR=[-2.9,0,-.5],i.hipL=[-.6,0,.3],i.hipR=[-.6,0,-.3],i.kneeL=[-1,0,0],i.kneeR=[-1,0,0];else if(c==="boost"){s.phase+=e*22;let f=s.phase;i.hipL=[Math.sin(f)*1.1,0,0],i.hipR=[-Math.sin(f)*1.1,0,0],i.kneeL=[-1.2,0,0],i.kneeR=[-1.2,0,0],i.shL=[1.1,0,.5],i.shR=[1.1,0,-.5],n=.5}c!=="spinattack"&&c!=="victory"&&(s.body.rotation.y=0),s.ball&&(s.ball.visible=u,u&&(s.ball.rotation.x+=e*(c==="spindash"?40:22))),s.body.visible=!u;let d=1-Math.exp(-18*e);for(let f of Sx){let g=s[f],y=i[f];g.rotation.x+=(y[0]-g.rotation.x)*d,g.rotation.y+=(y[1]-g.rotation.y)*d,g.rotation.z+=(y[2]-g.rotation.z)*d}s.torso.rotation.x=Ke(s.torso.rotation.x,n,12,e),s.body.position.y=Ke(s.body.position.y,r+l,20,e),s.body.rotation.x=o||Ke(s.body.rotation.x,0,20,e),o&&(s.body.position.y=Math.max(s.body.position.y,.2)),s.head.rotation.x=a,s.scarfTail&&(s.scarfTail.rotation.x=-1.9+Math.sin(h*15)*.15-ye(t.speed,0,1.5)*.3)}function gu(s){let t=new ne,e=F(1118481),i=F(16777215);if(t.parts={},s==="walker"||s==="firewalker"){let n=s==="firewalker"?9050762:11549210;K(Q.cyl,F(15980968),0,.45,0,.32,.5,.32,t);let r=K(Q.hemi,F(n),0,.62,0,.62,.55,.62,t);for(let a=0;a<5;a++){let o=a*1.3;K(Q.sphereLo,i,Math.cos(o)*.38,.95-a%2*.15,Math.sin(o)*.38,.11,.06,.11,t)}for(let a of[-1,1]){K(Q.sphere,i,a*.13,.5,.27,.1,.13,.06,t),K(Q.sphere,e,a*.12,.48,.32,.05,.07,.03,t);let o=K(Q.box,e,a*.13,.66,.3,.18,.04,.04,t);o.rotation.z=a*.4,t.parts[a<0?"footL":"footR"]=K(Q.sphere,F(3810320),a*.18,.1,.05,.17,.1,.24,t)}t.height=1.1,t.radius=.55}else if(s==="beetle"){let n=K(Q.hemi,F(14165532),0,.45,-.05,.62,.5,.75,t);for(let a=0;a<6;a++)K(Q.sphereLo,e,(a%2?1:-1)*(.22+a%3*.08),.75-Math.floor(a/2)*.1,-.35+Math.floor(a/2)*.28,.09,.05,.09,t);K(Q.sphere,F(2763322),0,.45,.62,.32,.28,.25,t);for(let a of[-1,1]){K(Q.sphere,F(16772693,{emissive:5587968}),a*.13,.52,.82,.08,.08,.05,t);let o=K(Q.cyl,e,a*.12,.85,.6,.02,.4,.02,t);o.rotation.x=.5}let r=K(Q.torus,F(3355443),0,.22,.1,.2,.2,.3,t);r.rotation.y=Math.PI/2,t.parts.wheel=r,t.height=1,t.radius=.65}else if(s==="buzzer"||s==="drone"){let n=s==="drone",r=F(n?8011007:16762394,n?{emissive:2228309}:{}),a=K(Q.sphere,r,0,0,0,.42,.36,.55,t);if(!n)for(let h=0;h<2;h++)K(Q.cyl,e,0,0,-.1+h*.25,.4,.06,.4,t).rotation.x=Math.PI/2;K(Q.sphere,F(n?61695:16724016,{emissive:n?43724:8912896}),0,.05,.48,.16,.16,.1,t);let o=K(Q.cone,e,0,-.1,-.6,.12,.35,.12,t);o.rotation.x=-Math.PI/2-.3;let l=F(13627135,{transparent:!0,opacity:.6});t.parts.wingL=K(Q.box,l,-.45,.32,0,.6,.03,.3,t),t.parts.wingR=K(Q.box,l,.45,.32,0,.6,.03,.3,t),t.height=.8,t.radius=.6,t.yOffset=-.4}else if(s==="spiny"){K(Q.sphere,F(14168106),0,.5,0,.55,.48,.55,t);for(let n=0;n<12;n++){let r=n/12*Math.PI*2,a=n%2?.5:1,o=K(Q.cone,i,Math.cos(r)*.42*a,.62+(1-a)*.3,Math.sin(r)*.42*a,.12,.38,.12,t);o.lookAt(Math.cos(r)*3,3,Math.sin(r)*3),o.rotateX(Math.PI/2)}K(Q.sphere,F(15980968),0,.35,.45,.25,.2,.15,t);for(let n of[-1,1])K(Q.sphere,e,n*.09,.42,.57,.04,.06,.03,t);t.height=1,t.radius=.6}else if(s==="plant"){let n=K(Q.cyl,F(3055162),0,.6,0,.12,1.2,.12,t);for(let o of[-1,1]){let l=K(Q.sphere,F(3055162),o*.3,.4,0,.3,.06,.14,t);l.rotation.z=o*.4}let r=ke(t,0,1.4,0);K(Q.sphere,F(14165532),0,.08,0,.45,.32,.45,r);for(let o=0;o<5;o++)K(Q.sphereLo,i,Math.cos(o*1.25)*.3,.28,Math.sin(o*1.25)*.3,.07,.04,.07,r);let a=K(Q.hemi,F(14165532),0,-.02,0,.42,.25,.42,r);a.rotation.x=Math.PI,K(Q.sphere,F(16777215),0,0,.2,.32,.05,.25,r),t.parts.head=r,t.parts.jaw=a,t.height=1.9,t.radius=.5}return t.traverse(n=>{n.isMesh&&(n.castShadow=!0)}),t}function xu(s){let t=new ne;if(t.parts={},s==="magmor"){let e=F(5904912),i=F(14708778),n=F(16764730,{emissive:16738816}),r=ke(t,0,2.2,0);K(Q.sphere,i,0,0,.2,2,1.8,2,r),K(Q.hemi,e,0,.2,-.3,2.3,2,2.3,r);for(let h=0;h<7;h++){let c=-.9+h*.3,u=K(Q.cone,F(16773836),Math.sin(c)*1.5,1.8-Math.abs(c)*.6,-.6+Math.cos(c)*.2,.3,.9,.3,r);u.rotation.z=-c*.8,u.rotation.x=-.3}let a=ke(r,0,.6,1.8);K(Q.sphere,i,0,0,0,1.1,.95,1,a);for(let h of[-1,1]){let c=K(Q.cone,F(16773836),h*.6,.8,-.2,.2,.9,.2,a);c.rotation.z=-h*.5,K(Q.sphere,n,h*.38,.25,.8,.2,.22,.12,a),K(Q.box,F(1118481),h*.38,.5,.82,.45,.08,.08,a).rotation.z=h*.35}let o=K(Q.box,F(11554842),0,-.45,.6,1.2,.3,.8,a);for(let h=0;h<4;h++)K(Q.cone,F(16777215),-.45+h*.3,-.25,.9,.08,.2,.08,a).rotation.x=Math.PI;t.parts.head=a,t.parts.jaw=o,t.parts.torso=r;for(let[h,c]of[[-1.3,1],[1.3,1],[-1.3,-1],[1.3,-1]]){let u=ke(t,h,1.2,c);K(Q.cyl,i,0,-.6,0,.5,1.2,.5,u),K(Q.sphere,e,0,-1.15,.1,.6,.3,.7,u),t.parts["leg"+(h<0?"L":"R")+(c>0?"F":"B")]=u}let l=K(Q.cone,i,0,1.6,-2.4,.5,1.6,.5,t);l.rotation.x=-1.9,t.radius=2.4,t.height=4.4}else if(s==="vortex"){let e=F(10134453),i=F(3817295),n=F(16727538,{emissive:11141290}),r=ke(t,0,0,0);K(Q.cyl,e,0,0,0,2.6,.7,2.6,r),K(Q.torus,i,0,0,0,2.6,2.6,1.6,r).rotation.x=Math.PI/2,K(Q.hemi,F(8972543,{transparent:!0,opacity:.55}),0,.3,0,1.6,1.3,1.6,r);let a=K(Q.sphere,n,0,.9,0,.7,.7,.7,r);K(Q.cone,i,0,-.9,0,1.2,1.2,1.2,r).rotation.x=Math.PI;for(let o=0;o<6;o++){let l=o/6*Math.PI*2;K(Q.sphere,F(3729663,{emissive:34986}),Math.cos(l)*2.4,.05,Math.sin(l)*2.4,.22,.22,.22,r)}for(let o of[-1,1]){let l=ke(r,o*2.6,-.2,0);K(Q.cyl,i,o*.4,-.4,0,.18,1.2,.18,l).rotation.z=o*.6;let h=K(Q.cone,e,o*.9,-1.1,0,.35,.8,.35,l);h.rotation.x=Math.PI,t.parts["arm"+(o<0?"L":"R")]=l}for(let o of[-1,1])K(Q.box,F(16722474,{emissive:11141120}),o*.6,.1,2.55,.5,.15,.1,r).rotation.z=o*.3;t.parts.hull=r,t.parts.core=a,t.radius=2.8,t.height=2.4}return t.traverse(e=>{e.isMesh&&(e.castShadow=!0)}),t}var Ex=(()=>{let s=new ss;for(let t=0;t<10;t++){let e=Math.PI/2+t*Math.PI/5,i=t%2?.22:.5;t===0?s.moveTo(Math.cos(e)*i,Math.sin(e)*i):s.lineTo(Math.cos(e)*i,Math.sin(e)*i)}return s.closePath(),s})(),$s=new ks(Ex,{depth:.18,bevelEnabled:!0,bevelSize:.05,bevelThickness:.05,bevelSegments:1});$s.center();var wx=(()=>{let s=new ss;return s.moveTo(0,-.45),s.bezierCurveTo(-.6,-.05,-.5,.45,0,.2),s.bezierCurveTo(.5,.45,.6,-.05,0,-.45),s})(),yu=new ks(wx,{depth:.2,bevelEnabled:!0,bevelSize:.04,bevelThickness:.04,bevelSegments:1});yu.center();function Jl(s){let t=new ne;switch(s){case"mushroom":case"oneup":{let e=s==="oneup"?3064906:15022389;K(Q.cyl,F(16509384),0,.25,0,.25,.4,.25,t),K(Q.hemi,F(e),0,.4,0,.45,.4,.45,t);for(let i=0;i<4;i++)K(Q.sphereLo,F(16777215),Math.cos(i*1.57)*.3,.62,Math.sin(i*1.57)*.3,.12,.07,.12,t);for(let i of[-1,1])K(Q.sphere,F(1118481),i*.09,.3,.24,.04,.08,.03,t);break}case"fire":{K(Q.cyl,F(3055162),0,.2,0,.06,.4,.06,t);for(let e=0;e<6;e++)K(Q.sphereLo,F(e%2?16734746:16765503),Math.cos(e*1.05)*.22,.55,Math.sin(e*1.05)*.06+.02,.16,.16,.08,t);K(Q.sphere,F(16777215),0,.55,.06,.12,.12,.06,t);break}case"star":{let e=K($s,F(16765503,{emissive:10053120}),0,.5,0,1.2,1.2,1.2,t);break}case"shield":{K(Q.sphere,F(3718648,{transparent:!0,opacity:.55,emissive:674426}),0,.5,0,.45,.45,.45,t),K(Q.torus,F(16777215),0,.5,0,.36,.36,.36,t);break}case"speed":{K(Q.sphere,F(15022389),0,.35,.05,.22,.18,.4,t),K(Q.box,F(16777215),0,.38,.1,.46,.06,.12,t),K(Q.cone,F(16765503),0,.6,-.2,.12,.3,.12,t).rotation.x=-1.2;break}case"heart":{K(yu,F(16727406,{emissive:5570584}),0,.5,0,.9,.9,.9,t);break}case"rings10":{K(Q.torus,F(16765503,{emissive:6702080}),0,.5,0,.32,.32,.6,t),K(Q.torus,F(16765503,{emissive:6702080}),.15,.55,.05,.25,.25,.5,t);break}default:K(Q.sphere,F(16777215),0,.5,0,.3,.3,.3,t)}return t}function xa(){let s=new ne,t=K(Q.cyl,F(16757504,{emissive:5583616}),0,0,0,.7,.14,.7,s);return t.rotation.x=Math.PI/2,K(Q.torus,F(16773800,{emissive:6706432}),0,0,0,.7,.7,.5,s),K($s,F(16777215,{emissive:6710886}),0,0,.06,.8,.8,.8,s),s}function Zs(){return new bn(.42,.09,6,16)}function ya(){let s=new gi(.4,.4,.1,14);return s.rotateX(Math.PI/2),s}var Js={zip:{id:"zip",name:"Zip",title:"O Velocista Azul",desc:"Alt\xEDssima velocidade, giro (spin dash), ataque teleguiado no ar e TURBO com a energia dos an\xE9is.",accel:30,decel:24,maxSpeed:19,airAccel:17,turnRate:11,jumpVel:12.6,gravity:34,doubleJumpVel:0,spinDashSpeed:30,boostSpeed:31,stats:{speed:5,jump:3,control:3,power:4},abilities:["ATAQUE no ch\xE3o: Spin Dash","PULO/ATAQUE no ar: Ataque Teleguiado","ESPECIAL (segurar): Turbo"]},rocco:{id:"rocco",name:"Rocco",title:"O Saltador Preciso",desc:"Pulo alto e preciso com pulo duplo, soco, pis\xE3o no ch\xE3o (quebra blocos) e bolas de fogo com a Flor de Fogo.",accel:22,decel:32,maxSpeed:10.5,airAccel:18,turnRate:16,jumpVel:13.6,gravity:34,doubleJumpVel:11.8,spinDashSpeed:0,boostSpeed:0,stats:{speed:3,jump:5,control:5,power:4},abilities:["Pulo duplo","ATAQUE no ch\xE3o: Soco | no ar: Pis\xE3o (quebra blocos)","ESPECIAL: Bola de fogo (Flor) ou Giro"]}},Yx=new E(0,1,0),va=class{constructor(t,e){this.game=t,this.c=Js[e],this.id=e,this.rig=ma(e),this.obj=new ne,this.obj.add(this.rig),t.scene.add(this.obj),this.body={pos:new E,vel:new E,radius:.42,height:1.6,grounded:!1,ground:null,groundVy:0},this.events={landed:!1,headHit:[],sideHit:[]},this.facing=0,this.state="normal",this.stateTime=0,this.mode="idle",this.modeTime=0,this.hearts=3,this.maxHearts=3,this.big=!1,this.fire=!1,this.shield=!1,this.starTime=0,this.speedTime=0,this.hurtTime=0,this.energy=100,this.coyote=0,this.jumpBuffer=0,this.jumping=!1,this.usedDouble=!1,this.usedAir=!1,this.usedSpin=!1,this.attackCd=0,this.homingTarget=null,this.t=0,this.lowGravity=0,this.stompChain=0,this.fireballs=0,this.shieldMesh=new St(Ft.sphere,F(5227519,{transparent:!0,opacity:.32,emissive:670314,depthWrite:!1})),this.shieldMesh.scale.setScalar(1.05),this.shieldMesh.position.y=.85,this.shieldMesh.visible=!1,this.obj.add(this.shieldMesh),this.blob=new St(new ui(.5,12),new si({color:0,transparent:!0,opacity:.3,depthWrite:!1})),this.blob.rotation.x=-Math.PI/2,t.scene.add(this.blob)}get pos(){return this.body.pos}get vel(){return this.body.vel}get speed(){return Math.hypot(this.body.vel.x,this.body.vel.z)}get maxSpeed(){return this.c.maxSpeed*(this.speedTime>0?1.4:1)}get alive(){return this.state!=="dead"}center(t=new E){return t.set(this.body.pos.x,this.body.pos.y+.8,this.body.pos.z)}spawn(t,e){this.body.pos.copy(t),this.body.vel.set(0,0,0),this.body.grounded=!1,this.body.ground=null,this.facing=e||0,this.state="normal",this.stateTime=0,this.hearts=this.maxHearts,this.big=!1,this.fire=!1,this.shield=!1,this.starTime=0,this.speedTime=0,this.hurtTime=0,this.energy=100,this.rail=null,this.loop=null,this.obj.visible=!0,this.rig.rotation.set(0,0,0),this.rig.position.set(0,0,0)}isInvincible(){return this.starTime>0}attackKind(){if(this.starTime>0)return"star";switch(this.state){case"spindash":case"homing":case"airdash":return"strong";case"pound":return"pound";case"spin":return"spin";case"boost":return"strong";default:break}return this.id==="zip"&&this.mode==="ball"?"ball":null}hitSphere(){return this.state==="punch"&&this.stateTime>.04&&this.stateTime<.25?{x:this.pos.x+Math.sin(this.facing)*1,y:this.pos.y+.9,z:this.pos.z+Math.cos(this.facing)*1,r:1}:this.state==="spin"?{x:this.pos.x,y:this.pos.y+.8,z:this.pos.z,r:1.6}:null}bounce(t=10){this.body.vel.y=t,this.body.grounded=!1,this.usedDouble=!1,this.usedAir=!1,this.usedSpin=!1,(this.state==="homing"||this.state==="airdash"||this.state==="pound")&&(this.state="normal"),this.jumping=!1,this.id==="zip"&&(this.mode="ball")}onEnemyKilled(t){(t==="stomp"||this.state==="homing")&&(this.stompChain++,this.state==="homing"&&(this.state="normal",this.body.vel.x*=.2,this.body.vel.z*=.2),this.bounce(this.game.input.jumpDown?13:10));let e=100*Math.pow(2,Math.min(this.stompChain-1,5));return Math.max(100,e)}launch(t,e,i,n=.25){this.body.vel.set(t,e,i),this.body.grounded=!1,this.state="normal",this.mode="spring",this.modeTime=0,this.springLock=n,this.jumping=!1,this.usedDouble=!1,this.usedAir=!1,this.usedSpin=!1,Math.hypot(t,i)>1&&(this.facing=Math.atan2(t,i))}hurt(t,e=1){if(this.state==="dead"||this.hurtTime>0||this.starTime>0||this.state==="victory")return!1;let i=this.game;if(this.shield?(this.shield=!1,it.sfx("hurt")):this.big?(this.big=!1,this.fire=!1,it.sfx("hurt")):(this.hearts-=e,it.sfx("hurt"),i.scatterCollectibles(this.pos)),i.settings.vibration&&qs(120),this.hurtTime=1.8,i.camShake(.35),this.hearts<=0)return this.die(),!0;let n=this.pos.x-(t?t.x:this.pos.x-Math.sin(this.facing)),r=this.pos.z-(t?t.z:this.pos.z-Math.cos(this.facing)),a=Math.hypot(n,r)||1;return this.body.vel.set(n/a*5,7.5,r/a*5),this.body.grounded=!1,this.state="hurt",this.stateTime=0,this.rail=null,this.loop=null,!0}die(){this.state!=="dead"&&(this.state="dead",this.stateTime=0,this.hearts=0,this.body.vel.set(0,12,0),this.rail=null,this.loop=null,this.game.settings.vibration&&qs(300),this.game.onPlayerDying())}victory(){this.state="victory",this.stateTime=0,this.body.vel.set(0,0,0),this.mode="victory",this.modeTime=0}inputDir(t,e){let i=t.moveX,n=t.moveY,r=Math.min(1,Math.hypot(i,n));if(r<.05)return{x:0,z:0,m:0};let a=Math.sin(e),o=Math.cos(e),l=-Math.cos(e),h=Math.sin(e),c=a*n+l*i,u=o*n+h*i,d=Math.hypot(c,u);return c/=d,u/=d,{x:c,z:u,m:r}}findHomingTarget(){let t=this.game,e=null,i=15,n=Math.sin(this.facing),r=Math.cos(this.facing);for(let a of t.homingTargets()){let o=a.targetPos(),l=o.x-this.pos.x,h=o.y-(this.pos.y+.8),c=o.z-this.pos.z,u=Math.hypot(l,h,c);if(u>i||h>4)continue;let d=Math.hypot(l,c)||1;(l*n+c*r)/d<.25&&u>3||(e=a,i=u)}return e}update(t,e,i){let n=this.body,r=this.c;if(this.t+=t,this.stateTime+=t,this.modeTime+=t,this.hurtTime>0&&(this.hurtTime-=t),this.starTime>0&&(this.starTime-=t),this.speedTime>0&&(this.speedTime-=t),this.attackCd>0&&(this.attackCd-=t),this.springLock>0&&(this.springLock-=t),this.id==="zip"&&this.state!=="boost"&&(this.energy=Math.min(100,this.energy+t*3)),this.state==="dead"){this.updateDead(t);return}if(this.state==="victory"){n.vel.x*=.9,n.vel.z*=.9,n.vel.y-=r.gravity*t,this.game.world.moveBody(n,t,this.events),this.mode="victory",this.visualUpdate(t);return}if(this.state==="warp"){this.visualUpdate(t);return}if(this.state==="rail"&&this.rail){this.rail.updateRider(this,t,e),this.visualUpdate(t);return}if(this.state==="loop"&&this.loop){this.loop.updateRider(this,t,e),this.visualUpdate(t);return}let a=this.inputDir(e,i),o=n.grounded;if(o?(this.coyote=.12,this.usedDouble=!1,this.usedAir=!1,this.usedSpin=!1,this.stompChain=0):this.coyote-=t,e.jumpPressed?this.jumpBuffer=.14:this.jumpBuffer-=t,this.state==="normal"||this.state==="boost"){if(this.jumpBuffer>0&&this.coyote>0?(this.jumpBuffer=0,this.coyote=0,n.vel.y=r.jumpVel+Math.min(this.speed,20)*.04,n.grounded=!1,this.jumping=!0,this.mode=this.id==="zip"?"ball":"jump",this.modeTime=0,it.sfx("jump")):e.jumpPressed&&!o&&this.coyote<=0&&(this.id==="rocco"&&!this.usedDouble?(this.usedDouble=!0,this.jumpBuffer=0,n.vel.y=r.doubleJumpVel,this.jumping=!0,this.mode="double",this.modeTime=0,it.sfx("jump2")):this.id==="zip"&&!this.usedAir&&(this.jumpBuffer=0,this.zipAirAttack())),e.attackPressed&&this.attackCd<=0)if(this.id==="zip")if(n.grounded){this.state="spindash",this.stateTime=0;let M=Math.max(this.speed,r.spinDashSpeed),C=a.m>0?Math.atan2(a.x,a.z):this.facing;this.facing=C,n.vel.x=Math.sin(C)*M,n.vel.z=Math.cos(C)*M,this.mode="spindash",this.attackCd=.55,it.sfx("spin")}else this.usedAir||this.zipAirAttack();else n.grounded?(this.state="punch",this.stateTime=0,this.attackCd=.38,this.mode="punch",this.modeTime=0,it.sfx("spin")):(this.state="pound",this.stateTime=0,this.attackCd=.5,n.vel.set(0,3,0),this.mode="pound",this.modeTime=0,it.sfx("spin"));this.id==="zip"?e.specialDown&&this.energy>2&&this.state!=="boost"&&(this.state="boost",this.stateTime=0,it.sfx("boost"),this.game.camShake(.15)):e.specialPressed&&(this.fire?this.shootFireball():this.usedSpin||(this.usedSpin=!0,this.state="spin",this.stateTime=0,n.grounded||(n.vel.y=Math.max(n.vel.y,9)),this.mode="spinattack",this.modeTime=0,it.sfx("spin")))}let h=1,c=1,u=this.maxSpeed;switch(this.state){case"spindash":h=.25,this.stateTime>.45&&(this.state="normal",this.mode=n.grounded?"run":"ball");break;case"homing":{h=0,c=0;let M=this.homingTarget;if(!M||!M.alive||this.stateTime>.7){this.state="normal",this.homingTarget=null;break}let C=M.targetPos(),R=C.x-this.pos.x,T=C.y-(this.pos.y+.6),L=C.z-this.pos.z,k=Math.hypot(R,T,L)||1;n.vel.set(R/k*34,T/k*34,L/k*34),this.facing=Math.atan2(R,L);break}case"airdash":h=.3,c=.35,(this.stateTime>.3||n.grounded)&&(this.state="normal");break;case"punch":h=.2,this.stateTime>.32&&(this.state="normal");break;case"spin":h=.8,c=.6,this.stateTime>.5&&(this.state="normal");break;case"pound":h=0,this.stateTime<.18?(n.vel.set(0,1.5,0),c=0):(n.vel.x=0,n.vel.z=0,n.vel.y=-30,c=0);break;case"boost":if(!e.specialDown||this.energy<=0){this.state="normal";break}this.energy=Math.max(0,this.energy-t*22),u=r.boostSpeed*(this.speedTime>0?1.15:1);break;case"hurt":h=0,this.stateTime>.45&&(n.grounded||this.stateTime>1.2)&&(this.state="normal");break;default:break}this.springLock>0&&(h=Math.min(h,.35));let d=this.speed,f=d>.01?n.vel.x/d:Math.sin(this.facing),g=d>.01?n.vel.z/d:Math.cos(this.facing);if(this.state==="boost"){if(a.m>0){let M=Math.atan2(f,g),C=Math.atan2(a.x,a.z),R=M+ye(cs(C-M),-4*t,4*t);f=Math.sin(R),g=Math.cos(R)}else d<.5&&(f=Math.sin(this.facing),g=Math.cos(this.facing));d=Math.min(u,d+80*t),n.vel.x=f*d,n.vel.z=g*d}else if(h>0&&this.state!=="homing"){let M=(n.grounded?r.accel:r.airAccel)*(this.speedTime>0?1.5:1);if(a.m>0){d<.5&&(f=a.x,g=a.z);let C=f*a.x+g*a.z;if(n.grounded&&C<-.6&&d>2)d=Math.max(0,d-r.decel*2.2*t),d<1&&(f=a.x,g=a.z);else{let R=Math.atan2(f,g),T=Math.atan2(a.x,a.z),L=(n.grounded?r.turnRate:r.turnRate*.6)*(1.2-.6*Math.min(1,d/30))*h,k=R+ye(cs(T-R),-L*t,L*t);f=Math.sin(k),g=Math.cos(k);let v=u*a.m;d<v?d=Math.min(v,d+M*h*t):n.grounded&&(d=Math.max(v,d-r.decel*(a.m>.9?.35:1)*t))}}else n.grounded?d=Math.max(0,d-r.decel*t):d=Math.max(0,d-1.5*t);if(n.grounded&&n.ground&&n.ground.ramp){let C=n.ground.slope(),R=C.x*f+C.z*g;if(d=Math.max(0,d-R*16*t),d<.5&&Math.hypot(C.x,C.z)>.35&&a.m===0){let T=Math.hypot(C.x,C.z);f=-C.x/T,g=-C.z/T,d=1}}d=Math.min(d,Math.max(u*1.45,34)),n.vel.x=f*d,n.vel.z=g*d}let y=r.gravity*(this.lowGravity>0?.45:1);n.grounded?n.vel.y<0&&(n.vel.y=0):(this.jumping&&!e.jumpDown&&n.vel.y>4&&this.state==="normal"&&(n.vel.y*=.5,this.jumping=!1),n.vel.y-=y*c*t,n.vel.y<-42&&(n.vel.y=-42)),this.lowGravity>0&&(this.lowGravity-=t);let m=!n.grounded,p=n.vel.y;this.game.world.moveBody(n,t,this.events);let b=this.events;for(let M of b.headHit)M.owner&&M.owner.onHeadHit&&M.owner.onHeadHit(this);if((this.state==="spindash"||this.state==="boost"||this.state==="punch"||this.state==="homing")&&b.sideHit.length)for(let M of b.sideHit)M.owner&&M.owner.onAttackHit&&M.owner.onAttackHit(this);b.landed&&(n.ground&&n.ground.owner&&n.ground.owner.onLand&&n.ground.owner.onLand(this,p),this.state==="pound"?(this.state="normal",this.game.groundPoundImpact(this.pos),this.game.camShake(.3),it.sfx("stomp"),n.ground&&n.ground.owner&&n.ground.owner.onPound&&n.ground.owner.onPound(this),this.bounce(6)):m&&(p<-14&&this.game.fx.dust(this.pos,8),this.jumping=!1,(this.state==="homing"||this.state==="airdash")&&(this.state="normal")));let x=this.speed;x>.6&&this.state!=="hurt"?this.facing=Math.atan2(n.vel.x,n.vel.z):a.m>0&&this.state==="normal"&&(this.facing=Math.atan2(a.x,a.z)),this.chooseMode(x),this.visualUpdate(t)}zipAirAttack(){let t=this.body;this.usedAir=!0;let e=this.findHomingTarget();if(e)this.homingTarget=e,this.state="homing",this.stateTime=0,this.mode="homing",it.sfx("homing");else{this.state="airdash",this.stateTime=0;let i=Math.max(this.speed,24);t.vel.x=Math.sin(this.facing)*i,t.vel.z=Math.cos(this.facing)*i,t.vel.y=Math.max(t.vel.y,2.5),this.mode="ball",it.sfx("homing")}this.game.fx.burst(this.center(),10,9425919,6,.3)}shootFireball(){this.fireballs>=3||this.attackCd>0||(this.attackCd=.28,this.game.spawnPlayerFireball(this),it.sfx("fireball"),this.state="punch",this.stateTime=.1,this.mode="punch",this.modeTime=0)}chooseMode(t){let e=this.body,i=this.mode;this.state==="hurt"?i="hurt":this.state==="spindash"?i="spindash":this.state==="homing"?i="homing":this.state==="airdash"?i="ball":this.state==="punch"?i="punch":this.state==="pound"?i="pound":this.state==="spin"?i="spinattack":this.state==="boost"?i=e.grounded?"boost":"ball":e.grounded?i=t>.3?"run":"idle":i==="spring"&&e.vel.y>-2?i="spring":i==="double"&&this.modeTime<.45?i="double":i==="ball"||this.id==="zip"&&this.jumping?i="ball":i==="jump"&&e.vel.y>-3?i="jump":i=this.id==="zip"&&i==="ball"?"ball":"fall",i!==this.mode&&(this.mode=i,this.modeTime=0)}updateDead(t){let e=this.body;this.stateTime>.4&&(e.vel.y-=30*t,e.pos.y+=e.vel.y*t),this.mode="dead",this.visualUpdate(t),this.stateTime>2&&!this.deathHandled&&(this.deathHandled=!0,this.game.onPlayerDead())}visualUpdate(t){let e=this.body;this.obj.position.copy(e.pos),this.state!=="loop"&&this.state!=="rail"&&this.obj.rotation.set(0,this.facing,0);let i=this.big?1.22:1;this.rig.scale.setScalar(i),ga(this.rig,{mode:this.mode,speed:this.speed/this.c.maxSpeed,t:this.t,modeTime:this.modeTime},t);let n=this.hurtTime>0&&this.state!=="dead"&&Math.floor(this.t*20)%2===0;this.rig.visible=!n,this.shieldMesh.visible=this.shield||this.starTime>0,this.starTime>0?(this.shieldMesh.material.color.setHSL(this.t*2%1,1,.6),this.shieldMesh.material.opacity=.25):(this.shieldMesh.material.color.set(this.fire?16742954:5227519),this.shieldMesh.material.opacity=.32),this.shieldMesh.scale.setScalar(i*(1.05+Math.sin(this.t*8)*.04));let r=this.game.world.ground(e.pos.x,e.pos.z,.1,e.pos.y+.1);if(r&&this.state!=="dead"){this.blob.visible=!0,this.blob.position.set(e.pos.x,r.y+.03,e.pos.z);let a=e.pos.y-r.y;this.blob.scale.setScalar(Math.max(.3,1-a*.08)),this.blob.material.opacity=Math.max(.08,.35-a*.03)}else this.blob.visible=!1;(this.state==="boost"||this.speedTime>0&&this.speed>12||this.state==="spindash")&&Math.random()<.6&&this.game.fx.trail(this.center(),this.state==="boost"?10479615:16777215),this.starTime>0&&Math.random()<.5&&this.game.fx.sparkle(this.center(),16772710)}dispose(){this.game.scene.remove(this.obj),this.game.scene.remove(this.blob)}};function Qe(s,t,e,i,n,r,a=10){let o=(t+e)/2,l=e-t;s.box(-(i+a/2),o,a,l,n,30,r),s.box(i+a/2,o,a,l,n,30,r)}function Tx(s){s.start(0,.1,0,0),s.box(0,25,18,72,0),Qe(s,-11,61,9,3,"grass"),s.hint(0,3,7,"Joystick: mover \u2022 PULO: pular \u2022 ATAQUE: atacar \u2022 ESPECIAL: habilidade"),s.rings(0,1,10,0,1,38,8),s.monitor(5,0,26,"rings10"),s.qblock(-1.5,3.75,20,"coin"),s.qblock(1.5,3.75,20,"speed"),s.enemy("beetle",-2,0,46,{patrol:4}),s.arc("ring",3,1,50,3,60,3,6),s.ramp(0,67.5,18,13,0,4,"z"),s.box(0,85,18,22,4),s.ramp(0,102.5,18,13,4,0,"z"),Qe(s,61,109,9,7.5,"grass"),s.arc("ring",0,5,76,0,94,3,8),s.enemy("beetle",3,4,88,{patrol:3}),s.hint(-6,76,3,"Molas lan\xE7am voc\xEA para caminhos secretos!"),s.spring(-6,4,78,28,[0,1,.35]),s.plat(-6,95,5,24,12,1,"grass"),s.plat(-6,115,5,10,12.5,1,"grass"),s.plat(-6,133,5,18,13,1,"grass"),s.rings(-6,13,86,-6,13,104,7),s.rings(-6,14,126,-6,14,134,4),s.medal(-6,14.6,139),s.box(0,145,18,72,0),s.box(14,145,10,72,3,30,"grass"),s.box(-14,145,10,72,3,30,"grass"),s.hint(0,114,5,"Painel de impulso + LOOP!"),s.boost(0,0,116,0),s.rings(0,1,112,0,1,120,4),s.loop(0,0,128,0,7,3.2),s.rings(3,1,143,3,1,163,6),s.enemy("buzzer",0,3.5,158,{patrol:3}),s.monitor(-5,0,150,"shield"),s.checkpoint(-5,0,170),s.boost(0,0,176,0),s.ramp(0,186,12,10,0,2.5,"z"),s.plat(-4,197,4,4,1,1,"grass"),s.arc("ring",0,4,191,0,203,6,7),s.box(0,230,18,54,0),Qe(s,203,257,9,3,"grass"),s.monitor(5,0,210,"heart"),s.enemy("beetle",0,0,220,{patrol:4}),s.enemy("buzzer",-4,3.2,236,{patrol:3,axis:"z"}),s.rings(-5,1,214,-5,1,232,5),s.hint(0,240,5,"Pule em cima do trilho para deslizar!"),s.rail([[0,.9,245],[0,3.5,258],[1.5,3.2,275],[0,.6,292],[0,.9,304]]),s.rings(0,5,258,1.5,4.6,275,6),s.box(0,279,22,44,-6),s.box(-14,280,6,10,-6),s.medal(-14,-4.5,280),s.coins(4,-5,266,4,-5,290,6),s.enemy("beetle",3,-6,272,{patrol:4}),s.spring(0,-6,296,28,[0,1,.4]),s.box(0,341,18,80,0),Qe(s,301,381,9,3,"grass"),s.checkpoint(-5,0,308),s.boost(0,0,315,0),s.loop(0,0,326,0,8,-3.2),s.enemy("beetle",2,0,346,{patrol:3}),s.monitor(-4,0,352,"star"),s.box(0,363.5,8,6,1.5,2,"grass"),s.box(0,369.5,8,6,3,3,"grass"),s.box(0,376.75,8,8.5,4.5,4.5,"grass"),s.rings(0,3,364,0,6,379,5),s.box(0,410,18,58,6),Qe(s,381,439,9,9,"grass"),s.spring(8,6,392,26,[0,1,.35]),s.plat(8,400,4,6,13,1,"grass"),s.medal(8,14.6,401),s.enemy("beetle",-2,6,400,{patrol:4}),s.enemy("buzzer",0,9,420,{patrol:4}),s.rings(-4,7,405,-4,7,430,6),s.ramp(0,445.5,18,13,6,0,"z"),Qe(s,439,452,9,8,"grass"),s.box(0,475,18,46,0),Qe(s,452,498,9,3,"grass"),s.rings(0,1,455,0,1,478,8),s.goal(0,0,486,"sign"),s.box(-40,245,42,540,1.5),s.box(40,245,42,540,1.5),s.forest(-60,-20,-21,500,70,"palm"),s.forest(21,-20,60,500,70,"palm"),s.forest(-18,-10,-10,498,30,"round",.7,1.1),s.forest(10,-10,18,498,30,"round",.7,1.1),s.scatter(-18,-10,18,498,160,(t,e,i,n)=>{Math.abs(t)>8&&s.flower(t,e,i,[16734858,16765503,11824127,16777215][Math.floor(n()*4)])}),s.waterfall(-19.5,-10,120,6,13,Math.PI/2),s.waterfall(19.5,-10,330,6,13,-Math.PI/2);for(let t=0;t<24;t++)s.cloud(-140+t%6*55,45+t%3*12,-40+Math.floor(t/6)*150,1.4);s.fluid("water",-14)}function Ax(s){s.start(0,.1,0,0),s.box(0,33,18,86,0),Qe(s,-10,76,9,2.5,"mario"),s.hint(0,6,6,"Bata nos blocos ? por baixo! Pise nos inimigos!"),s.brick(-3,3.75,18),s.qblock(-1.5,3.75,18,"coin"),s.brick(0,3.75,18),s.qblock(1.5,3.75,18,"mushroom"),s.brick(3,3.75,18),s.qblock(0,8.25,18,"coins5"),s.coins(-3,1,8,3,1,8,5),s.enemy("walker",-3,0,30,{patrol:3}),s.enemy("walker",3,0,38,{patrol:3}),s.arc("coin",0,1,42,0,50,3,5),s.pipe(-4,0,50,1.6),s.pipe(4,0,56,2),s.plantPipe(0,0,62,2),s.hint(-6,66,2.5,"Este cano parece especial..."),s.pipe(-6,0,68,2,[-60,-19.8,74,0]),s.qblock(4,3.75,68,"fire"),s.box(-60,85,12,34,-20,4,"brick"),s.box(-67,85,2,38,-11,13,"brick"),s.box(-53,85,2,38,-11,13,"brick"),s.box(-60,67,12,2,-11,13,"brick"),s.box(-60,103,12,2,-11,13,"brick"),s.plat(-60,85,16,40,-10,1,"brick");for(let t=0;t<4;t++)s.coins(-64,-18.8+t%2*1.5,78+t*4,-56,-18.8+t%2*1.5,78+t*4,6);s.medal(-60,-18.4,96),s.pipe(-60,-20,100,1.5,[5,2.1,108,0]),s.mover(0,0,78,4,4,{type:"line",to:[0,0,96],period:6},10119738),s.coins(0,2,82,0,2,94,5),s.box(0,129,18,62,0),Qe(s,98,160,9,2.5,"mario"),s.checkpoint(-5,0,104),s.pipe(5,0,108,2),s.coins(6,1,120,6,2.6,120,3),s.hidden(6,3.75,120,"oneup"),s.spring(5,0,111.5,20),s.medal(5,7,111.5),s.enemy("walker",-2,0,126,{patrol:3}),s.enemy("walker",2,0,132,{patrol:3}),s.enemy("spiny",0,0,142,{patrol:3}),s.hint(0,138,4,"Ouri\xE7os n\xE3o podem ser pisados \u2014 use ATAQUE!"),s.qblock(-3,3.75,148,"coin"),s.brick(-1.5,3.75,148),s.qblock(0,3.75,148,"star"),s.brick(1.5,3.75,148),s.qblock(3,3.75,148,"coin"),s.hint(0,158,3,"Plataformas que caem! Seja r\xE1pido."),s.falling(0,0,164,5,5),s.falling(0,.5,170.5,5,5),s.falling(0,1,177,5,5),s.falling(0,1,183.5,5,5),s.coins(0,2,164,0,3,183.5,4),s.box(0,223,18,74,0),Qe(s,186,260,9,2.5,"mario"),s.checkpoint(-5,0,190),s.plantPipe(-4,0,200,1.8),s.plantPipe(4,0,208,2.2),s.enemy("walker",0,0,212,{patrol:3}),s.enemy("buzzer",0,4,216,{patrol:3}),s.qblock(0,3.75,204,"coin"),s.monitor(-5,0,218,"heart");for(let t=0;t<6;t++)s.box(0,226+t*1.5+.75,4.5,1.5,(t+1)*1.5,(t+1)*1.5,"brick");s.plat(-6.5,235,3,3,10.5,1,"mario"),s.medal(-6.5,12,235),s.goal(0,0,246,"flag"),s.coins(-3,1,250,3,1,250,4),s.box(0,256,8,6,5,5,"brick"),s.box(0,256,3,6.2,2.6,2.6,"mario"),s.box(-40,125,42,300,1),s.box(40,125,42,300,1),s.forest(-60,-20,-21,270,35,"mushroom",.9,1.6),s.forest(21,-20,60,270,35,"mushroom",.9,1.6),s.forest(-60,-20,-21,270,25,"round"),s.forest(21,-20,60,270,25,"round"),s.scatter(-18,-10,18,260,60,(t,e,i)=>{Math.abs(t)>8&&s.bush(t,e,i,.8,4177738)});for(let t=0;t<24;t++)s.cloud(-120+t%6*50,40+t%3*10,-30+Math.floor(t/6)*90,1.2)}function Rx(s){s.start(0,.1,0,0),s.box(0,20,14,60,0,30,"jungle"),Qe(s,-10,50,7,3,"ruin",6),s.hint(0,14,5,"Cuidado com os troncos balan\xE7ando!"),s.enemy("walker",-2,0,12,{patrol:3}),s.pendulum(0,7.5,24,6,"x",1,2.6,0),s.pendulum(0,7.5,34,6,"x",1,2.6,1.3),s.rings(0,1,18,0,1,40,8),s.enemy("beetle",2,0,44,{patrol:3}),s.monitor(-4,0,6,"shield"),s.falling(0,0,54,5,5,8014370),s.falling(0,0,60.5,5,5,8014370),s.falling(0,0,67,5,5,8014370),s.falling(0,0,73.5,5,5,8014370),s.enemy("buzzer",0,4,88,{patrol:3}),s.box(0,105,14,56,0,30,"jungle"),s.box(-10,97.75,6,41.5,3,30,"ruin"),s.box(-10,128,6,10,3,30,"ruin"),s.box(10,105,6,56,3,30,"ruin"),s.checkpoint(-4,0,80),s.spikes(0,0,95,6,3),s.hint(0,90,4,"Espinhos e dardos! Pule ou contorne."),s.dart(-6.4,1.2,105,[1,0,0],2.2,0),s.dart(6.4,1.2,112,[-1,0,0],2.2,1.1),s.rings(4,1,98,4,1,112,5);for(let t of[119.25,120.75,122.25])for(let e of[.75,2.25])s.brick(-7.75,e,t);s.box(-14,120.75,13,4.5,0,30,"jungle"),s.box(-14,117.5,13,2,3,30,"ruin"),s.box(-14,124,13,2,3,30,"ruin"),s.box(-21.5,120.75,2,8.5,3,30,"ruin"),s.rings(-5,1,120.75,-6,1,120.75,2),s.medal(-17,1.5,120.75),s.rings(-12,1,119.5,-12,1,122,3),s.enemy("walker",2,0,126,{patrol:3}),s.hint(0,126,4,"Pule no cip\xF3 para atravessar o rio!"),s.rail([[0,.9,128],[0,2.5,140],[-2,3,155],[0,2,170],[0,1.2,186],[0,.9,193]],{color:4885034,vine:!0,noPosts:!0});for(let t=138;t<=187;t+=7)s.falling(6,0,t,3,3,8014370);s.rings(0,4,145,0,4,180,7),s.box(0,225,16,70,0,30,"jungle"),s.checkpoint(-4,0,195),s.box(5,205,3,3,2,30,"wood"),s.box(5,210,3,3,4,30,"wood"),s.box(5,215,3,3,6,30,"wood"),s.box(5,220,3,3,8,30,"wood"),s.plat(3,235,6,20,8,1,"jungle"),s.spring(-1.2,0,230,26,[.18,1,0]),s.rings(3,9,228,3,9,240,5),s.medal(3,9.6,243),s.enemy("spiny",-3,0,215,{patrol:3}),s.plantPipe(-5,0,248,1.5,3836474),s.enemy("buzzer",0,4,255,{patrol:3}),s.mover(0,0,262,4,4,{type:"line",to:[0,0,278],period:6},8014370),s.box(0,310,14,60,0,30,"ruin"),s.box(-10,310,6,60,4,30,"ruin"),s.box(10,298.5,6,37,4,30,"ruin"),s.box(10,333.5,6,17,4,30,"ruin"),s.hint(0,288,4,"Esmagadores de pedra! Passe quando subirem."),s.crusher(0,296,0,7,3.2,0),s.crusher(0,304,0,7,3.2,1.1),s.pendulum(0,7.5,314,6,"x",1.1,2.2,.4),s.box(12.5,321,7,8,0,30,"ruin"),s.box(16.5,321,1,8,4,30,"ruin"),s.box(12.5,322,7,6.4,5.5,1,"ruin"),s.waterfall(7.05,0,322,6,6,Math.PI/2),s.medal(13,1.5,322),s.rings(4,1,318,4,1,326,3),s.goal(0,0,334,"ring"),s.box(-40,170,50,400,-1,30,"jungle"),s.box(40,170,50,400,-1,30,"jungle"),s.forest(-60,-20,-16,350,90,"jungle"),s.forest(16,-20,60,350,90,"jungle"),s.scatter(-60,-20,60,350,120,(t,e,i,n)=>{Math.abs(t)>14&&s.bush(t,e,i,1+n(),2784563)}),s.fluid("water",-2.5)}function Cx(s){s.start(0,.1,0,0),s.box(0,20,16,60,0,30,"castle"),Qe(s,-10,50,8,6,"castle",6),s.hint(0,6,5,"N\xE3o toque na lava! Chegue ao chefe no fim do castelo."),s.monitor(5,0,8,"shield"),s.spring(-6.6,0,4,24),s.medal(-11,7.6,4),s.enemy("firewalker",-3,0,15,{patrol:3}),s.enemy("spiny",3,0,28,{patrol:3}),s.firebar(0,1,38,5,1.6),s.rings(-5,1,20,-5,1,34,5),s.plat(0,55,4,4,0,1,"castle"),s.mover(0,0,59,4,4,{type:"line",to:[0,0,70],period:5},5917264),s.plat(0,74,4,4,0,1,"castle"),s.plat(0,81,4,4,0,1,"castle"),s.plat(0,88,4,4,0,1,"castle"),s.bubble(2.8,-3,64,7,2.6,0),s.bubble(-2.8,-3,78,7,3,1),s.bubble(3,-3,91,7,2.4,.5),s.rings(0,1.5,55,0,1.5,88,6),s.box(0,120,10,52,0,30,"castle"),Qe(s,94,146,5,8,"castle",6),s.checkpoint(-3.5,0,98),s.hint(0,102,4,"Suba num esmagador quando ele descer... h\xE1 algo no alto!"),s.crusher(-3.3,108,0,7.5,2.4,0),s.crusher(0,108,0,7.5,2.4,0),s.crusher(3.3,108,0,7.5,2.4,0),s.crusher(-3.3,118,0,7.5,2.4,1.3),s.crusher(0,118,0,7.5,2.4,1.3),s.crusher(3.3,118,0,7.5,2.4,1.3),s.medal(0,10.6,118),s.firebar(0,3.5,136,4,1.8,"x"),s.enemy("firewalker",2,0,126,{patrol:2}),s.rings(0,1,124,0,1,132,4),s.falling(0,0,149.5,4,4,6969952),s.falling(0,0,155.5,4,4,6969952),s.falling(0,0,161.5,4,4,6969952),s.plat(0,166,4,4,0,1,"castle"),s.mover(0,0,176,4,4,{type:"circle",radius:4,period:6},5917264),s.plat(9,176,3,3,1,1,"castle"),s.medal(9,2.6,176),s.plat(0,186,4,4,0,1,"castle"),s.falling(0,0,191,4,4,6969952),s.falling(0,0,196,4,4,6969952),s.enemy("buzzer",2,4,232,{patrol:2}),s.enemy("buzzer",0,4,214,{patrol:3}),s.bubble(-3,-3,170,7,2.2,.3),s.bubble(3,-3,182,7,2.6,1.2),s.rings(0,1.5,149.5,0,1.5,161.5,3),s.box(0,222,14,46,0,30,"castle"),Qe(s,199,245,7,8,"castle",6),s.checkpoint(-4,0,203),s.monitor(4,0,210,"heart"),s.monitor(-4,0,210,"shield"),s.spikes(0,0,222,4,3),s.enemy("firewalker",-3,0,230,{patrol:2}),s.enemy("firewalker",3,0,236,{patrol:2}),s.rings(-5,1,218,-5,1,240,6),s.box(0,250,6,10,0,30,"castle"),s.box(0,270,32,32,0,30,"castle"),s.wall(-9.5,253.5,13,1,0,12),s.wall(9.5,253.5,13,1,0,12),s.wall(0,286.5,34,1,0,12),s.wall(-16.5,270,1,34,0,12),s.wall(16.5,270,1,34,0,12);for(let[t,e]of[[-14,256],[14,256],[-14,284],[14,284]])s.pillar(t,0,e,7,4864576);for(let[t,e]of[[-15,264],[15,264],[-15,276],[15,276]])s.torch(t,0,e);s.boss("magmor",0,0,270,16,[0,253.5,6,1]);for(let t=0;t<240;t+=12)s.torch(-7.3,0,t),s.torch(7.3,0,t);for(let t=0;t<30;t++)s.pillar(-30+t%2*60+t%3*4,-3,t*10,10+t%4*4,3811888);s.fluid("lava",-3)}function Px(s){s.start(0,.1,0,0),s.box(0,15,12,50,0,6,"crystal"),s.hint(0,6,5,"Dimens\xE3o Final: plataformas piscam! Observe o ritmo."),s.enemy("drone",0,3,16,{patrol:3}),s.rings(0,1,8,0,1,26,6),s.monitor(4,0,12,"heart"),s.blink(0,0,45,4,4,3,0),s.blink(0,0,51,4,4,3,2.25),s.blink(0,0,57,4,4,3,1.5),s.blink(0,0,63,4,4,3,.75),s.rings(0,1.5,45,0,1.5,63,4),s.box(0,85,14,34,0,6,"crystal"),s.checkpoint(-4,0,72),s.enemy("spiny",2,0,86,{patrol:3}),s.hint(0,96,5,"Gravidade baixa! Saltos muito mais altos."),s.gravity(0,0,113,16,30,26),s.plat(0,108,4,4,3,1,"crystal"),s.plat(-4,116,4,4,6,1,"crystal"),s.plat(2,124,4,4,9,1,"crystal"),s.spring(-5,6,116,20),s.medal(-5,17,116),s.rings(0,5,108,2,11,124,6),s.box(0,150,14,36,6,6,"crystal"),s.checkpoint(-4,6,136),s.boost(0,6,142,0),s.loop(0,6,152,0,7,3.2),s.hint(3,162,4,"Pule no trilho!"),s.rail([[3.2,6.9,165],[3,9,180],[0,7.5,200],[-2,5.5,214],[0,6.9,228]],{color:3729663,noPosts:!0}),s.rings(3,10,178,0,9,200,6),s.box(0,245,16,40,6,6,"crystal"),s.checkpoint(-4,6,231),s.firebar(0,7,240,6,1.5),s.enemy("spiny",4,6,248,{patrol:2}),s.enemy("drone",0,10,252,{patrol:3}),s.crusher(-4,256,6,13,3,0),s.crusher(4,256,6,13,3,1),s.hint(0,260,4,"Portais! Um deles esconde um segredo..."),s.portal(-4,6,263,[0,6.6,284,0]),s.portal(4,6,263,[40,20.6,261,0],3729663),s.box(40,263,8,10,20,4,"crystal"),s.medal(40,21.6,265),s.portal(40,20,267,[0,6.6,284,0]),s.box(0,300,14,36,6,6,"crystal"),s.spikes(0,6,295,6,3),s.enemy("buzzer",0,10,290,{patrol:3}),s.monitor(-4,6,290,"shield"),s.monitor(4,6,306,"star"),s.blink(9,7,305,3,3,2.5,0),s.blink(14,8,305,3,3,2.5,1.875),s.blink(19,9,305,3,3,2.5,1.25),s.plat(23,305,3,3,9,1,"crystal"),s.medal(23,10.6,305),s.rings(0,7,286,0,7,316,6),s.mover(0,6,320,4,4,{type:"line",to:[0,6,336],period:6},5913242),s.box(0,355,34,34,6,6,"crystal"),s.wall(-10,337.5,14,1,6,18),s.wall(10,337.5,14,1,6,18),s.wall(0,372.5,36,1,6,18),s.wall(-17.5,355,1,36,6,18),s.wall(17.5,355,1,36,6,18);for(let[t,e]of[[-15,340],[15,340],[-15,370],[15,370]])s.crystal(t,6,e,2.5,3729663);s.boss("vortex",0,6,355,17,[0,337.5,6,1]),s.scatter(-15,-10,15,370,50,(t,e,i,n)=>{Math.abs(t)>5&&s.crystal(t,e,i,.5+n()*.6,n()<.5?11824127:3729663)});for(let t=0;t<40;t++){let e=(t%2?1:-1)*(35+t*37%60),i=-20+t*10,n=-10+t*13%30;s.box(e,i,6+t%3*3,6+t%4*2,n,4,"crystal"),s.crystal(e,n,i,1.5,t%2?11824127:3729663)}for(let t=0;t<18;t++)s.cloud(-150+t%6*60,-25+t%3*8,-40+Math.floor(t/6)*150,2)}var Xe=[{id:"green",name:"Green Hills",theme:"green",build:Tx,killY:-20,par:150,objective:"Corra at\xE9 a placa de chegada!",color:"#3fb548",icon:"\u{1F334}"},{id:"mushroom",name:"Mushroom Kingdom",theme:"mushroom",build:Ax,killY:-30,par:180,objective:"Alcance o mastro da bandeira!",color:"#e53935",icon:"\u{1F344}"},{id:"jungle",name:"Lost Jungle",theme:"jungle",build:Rx,killY:-12,par:200,objective:"Encontre o Anel Gigante!",color:"#2a7d33",icon:"\u{1F33F}"},{id:"lava",name:"Lava Castle",theme:"lava",build:Cx,killY:-12,par:260,objective:"Derrote o Rei Magmor!",color:"#d43b0b",icon:"\u{1F30B}"},{id:"final",name:"Final Dimension",theme:"final",build:Px,killY:-25,par:300,objective:"Derrote o Imperador V\xF3rtex!",color:"#7a3cff",icon:"\u{1F30C}"}];var de=(s,t=document)=>t.querySelector(s),Be=s=>String(s).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),vu="1.0.0",_a=class{constructor(t){this.app=t,this.screens=de("#screens"),this.hud=de("#hud"),this.flashEl=de("#flash"),this.current=null,this.hudAcc=0,this.buildHud()}show(t,e,i){this.screens.innerHTML=`<div class="screen screen-${t}">${e}</div>`,this.current=t,this.screens.classList.remove("hidden"),this.screens.querySelectorAll("[data-act]").forEach(n=>{n.addEventListener("click",r=>{r.stopPropagation(),it.unlock();let a=n.getAttribute("data-act");it.sfx(a==="back"?"back":"select"),this.app.action(a,n.getAttribute("data-arg"),n)})}),i&&i(this.screens.firstElementChild)}hideScreens(){this.screens.innerHTML="",this.screens.classList.add("hidden"),this.current=null}loading(t,e="",i=""){let n=de("#loading");t?(n.innerHTML=`<div class="load-box"><div class="spinner"></div><h2>${Be(e)}</h2><p>${Be(i)}</p></div>`,n.classList.remove("hidden")):n.classList.add("hidden")}fade(t=.4){let e=de("#fade");e.style.transition="none",e.style.opacity="1",requestAnimationFrame(()=>{e.style.transition=`opacity ${t}s`,e.style.opacity="0"})}error(t){let e=de("#error");e.innerHTML=`<div class="panel"><h2>Ops! Ocorreu um erro</h2><p>${Be(t)}</p><button class="btn" id="err-menu">Voltar ao menu</button><button class="btn ghost" id="err-reload">Reiniciar jogo</button></div>`,e.classList.remove("hidden"),de("#err-menu").onclick=()=>{e.classList.add("hidden"),this.app.quitToMenu()},de("#err-reload").onclick=()=>location.reload()}mainMenu(){let t=this.app.save.data,e=Js[t.character],i=Xe.filter(r=>t.levels[r.id]&&t.levels[r.id].completed).length,n=Xe.reduce((r,a)=>r+(t.levels[a.id]?t.levels[a.id].medals.filter(Boolean).length:0),0);this.show("main",`
      <div class="title-wrap">
        <div class="logo"><span class="l1">DASH</span><span class="l2">KINGDOM</span><span class="l3">3D</span></div>
        <div class="subtitle">An\xE9is \u2022 Moedas \u2022 Velocidade \u2022 Aventura</div>
      </div>
      <div class="menu-col">
        <button class="btn big primary" data-act="play">\u25B6 JOGAR</button>
        <button class="btn" data-act="chars">\u{1F3AE} Selecionar Personagem <small>(${Be(e.name)})</small></button>
        <button class="btn" data-act="levels">\u{1F5FA} Selecionar Fase</button>
        <button class="btn" data-act="settings">\u2699 Configura\xE7\xF5es</button>
        <button class="btn" data-act="credits">\u2605 Cr\xE9ditos</button>
      </div>
      <div class="corner-info">Fases: ${i}/5 \u2022 Medalhas: ${n}/15 \u2022 v${vu}</div>`)}charMenu(){let t=this.app.save.data.character,e=i=>`
      <div class="char-card ${i.id===t?"sel":""}" data-act="pickchar" data-arg="${i.id}">
        <h3>${Be(i.name)}</h3><div class="ctitle">${Be(i.title)}</div>
        <p>${Be(i.desc)}</p>
        ${["speed","jump","control","power"].map(n=>`<div class="stat"><span>${{speed:"Velocidade",jump:"Pulo",control:"Controle",power:"For\xE7a"}[n]}</span><div class="bar"><i style="width:${i.stats[n]*20}%"></i></div></div>`).join("")}
        <ul>${i.abilities.map(n=>`<li>${Be(n)}</li>`).join("")}</ul>
      </div>`;this.show("chars",`
      <h1 class="scr-title">Selecionar Personagem</h1>
      <div class="char-row">${e(Js.zip)}<div class="char-spacer"></div>${e(Js.rocco)}</div>
      <div class="bottom-row"><button class="btn" data-act="back">\u25C0 Voltar</button><button class="btn primary" data-act="play">\u25B6 Jogar</button></div>`)}levelMenu(){let t=this.app.save.data,e=Xe.map((i,n)=>{let r=t.levels[i.id],a=n+1>t.unlocked,o=r?r.medals:[!1,!1,!1];return`<div class="lvl-card ${a?"locked":""}" ${a?"":`data-act="startlevel" data-arg="${n}"`} style="--c:${i.color}">
        <div class="lvl-num">${n+1}</div><div class="lvl-icon">${a?"\u{1F512}":i.icon}</div>
        <h3>${Be(i.name)}</h3>
        <div class="lvl-obj">${Be(i.objective)}</div>
        <div class="medals">${o.map(l=>`<span class="${l?"on":""}">\u2605</span>`).join("")}</div>
        <div class="lvl-best">${r&&r.completed?`Recorde: ${r.bestScore}<br>Tempo: ${Xs(r.bestTime)}`:a?"Bloqueada":"N\xE3o conclu\xEDda"}</div>
      </div>`}).join("");this.show("levels",`
      <h1 class="scr-title">Selecionar Fase</h1>
      <div class="lvl-row">${e}</div>
      <div class="bottom-row"><button class="btn" data-act="back">\u25C0 Voltar</button></div>`)}settingsMenu(t="main"){let e=this.app.save.settings,i=(a,o,l,h,c)=>`<label class="set-row"><span>${o}</span><input type="range" min="${l}" max="${h}" step="${c}" value="${e[a]}" data-k="${a}"><b data-v="${a}">${Math.round(e[a]*100)}%</b></label>`,n=(a,o)=>`<label class="set-row"><span>${o}</span><input type="checkbox" data-k="${a}" ${e[a]?"checked":""}></label>`,r=(a,o,l)=>`<label class="set-row"><span>${o}</span><select data-k="${a}">${l.map(([h,c])=>`<option value="${h}" ${String(e[a])===String(h)?"selected":""}>${c}</option>`).join("")}</select></label>`;this.show("settings",`
      <h1 class="scr-title">Configura\xE7\xF5es</h1>
      <div class="settings-grid">
        <div class="set-col">
          <h4>\xC1udio</h4>
          ${i("music","M\xFAsica",0,1,.05)}
          ${i("sfx","Efeitos",0,1,.05)}
          <h4>Controles</h4>
          ${i("sensitivity","Sensibilidade da c\xE2mera",.3,2.5,.05)}
          ${i("controlSize","Tamanho dos bot\xF5es",.7,1.4,.05)}
          ${r("joystick","Joystick",[["dynamic","Din\xE2mico (onde tocar)"],["fixed","Fixo"]])}
          ${n("invertY","Inverter eixo Y da c\xE2mera")}
          ${n("autoCamera","C\xE2mera autom\xE1tica")}
          ${n("vibration","Vibra\xE7\xE3o")}
        </div>
        <div class="set-col">
          <h4>Gr\xE1ficos e desempenho</h4>
          ${r("quality","Qualidade",[["auto","Autom\xE1tica"],["low","Baixa (mais FPS)"],["medium","M\xE9dia"],["high","Alta"]])}
          ${r("fpsCap","Limite de FPS",[[30,"30 FPS (economia de bateria)"],[60,"60 FPS"]])}
          ${n("showFps","Mostrar FPS")}
          <h4>Progresso</h4>
          <button class="btn danger small" id="reset-progress">Apagar progresso</button>
          <button class="btn small" id="reset-settings">Restaurar padr\xF5es</button>
          <p class="note">O progresso \xE9 salvo automaticamente neste aparelho.</p>
        </div>
      </div>
      <div class="bottom-row"><button class="btn" data-act="${t==="pause"?"settingsback":"back"}">\u25C0 Voltar</button></div>`,a=>{a.querySelectorAll("[data-k]").forEach(o=>{let l=o.getAttribute("data-k"),h=()=>{let c;if(o.type==="checkbox")c=o.checked;else if(o.type==="range"){c=parseFloat(o.value);let u=a.querySelector(`[data-v="${l}"]`);u&&(u.textContent=Math.round(c*100)+"%")}else c=l==="fpsCap"?parseInt(o.value,10):o.value;this.app.setSetting(l,c)};o.addEventListener("input",h),o.addEventListener("change",()=>{h(),it.sfx("menu")})}),a.querySelector("#reset-progress").onclick=()=>this.confirm("Apagar todo o progresso? Esta a\xE7\xE3o n\xE3o pode ser desfeita.",()=>{this.app.save.reset(),this.app.toast("Progresso apagado"),this.settingsMenu(t)}),a.querySelector("#reset-settings").onclick=()=>{Object.keys(Ws).forEach(o=>this.app.setSetting(o,Ws[o])),this.settingsMenu(t)}})}confirm(t,e){let i=document.createElement("div");i.className="modal",i.innerHTML=`<div class="panel"><p>${Be(t)}</p><button class="btn danger">Sim</button><button class="btn">Cancelar</button></div>`,document.body.appendChild(i);let[n,r]=i.querySelectorAll("button");n.onclick=()=>{i.remove(),e()},r.onclick=()=>i.remove()}creditsMenu(){this.show("credits",`
      <h1 class="scr-title">Cr\xE9ditos</h1>
      <div class="panel credits">
        <p><b>Dash Kingdom 3D</b> \u2014 um jogo de plataforma 3D que combina velocidade, loops, molas e an\xE9is com blocos, moedas, canos e power-ups.</p>
        <p><b>Design, programa\xE7\xE3o, modelos 3D, anima\xE7\xF5es, m\xFAsicas e efeitos sonoros:</b> criados de forma procedural para este projeto (Three.js + WebAudio).</p>
        <p><b>Personagens:</b> Zip e Rocco s\xE3o personagens <i>originais</i>, inspirados nos estilos cl\xE1ssicos de jogos de plataforma de velocidade e de explora\xE7\xE3o. Nenhum personagem, m\xFAsica ou arte de terceiros protegidos por direitos autorais foi utilizado.</p>
        <p><b>Tecnologia:</b> Three.js (licen\xE7a MIT), WebGL, WebAudio, Android WebView.</p>
        <p><b>Controles:</b> joystick \xE0 esquerda; PULO, ATAQUE e ESPECIAL \xE0 direita; arraste o lado direito da tela para girar a c\xE2mera.</p>
        <p>Vers\xE3o ${vu}</p>
      </div>
      <div class="bottom-row"><button class="btn" data-act="back">\u25C0 Voltar</button></div>`)}pauseMenu(t){let e=t.medals.map((i,n)=>`<span class="${i||t.savedMedals[n]?"on":""}">\u2605</span>`).join("");this.show("pause",`
      <div class="panel pause">
        <h1>PAUSA</h1>
        <div class="pause-info">${Be(t.def.name)} \u2022 ${Xs(t.time)}<div class="medals">${e}</div></div>
        <button class="btn big primary" data-act="resume">\u25B6 Continuar</button>
        <button class="btn" data-act="restart">\u21BB Reiniciar fase</button>
        <button class="btn" data-act="pausesettings">\u2699 Configura\xE7\xF5es</button>
        <button class="btn" data-act="quit">\u2302 Sair para o menu</button>
      </div>`)}resultsMenu(t,e){let i=t.levelIndex===Xe.length-1;this.show("results",`
      <div class="panel results">
        <h1>FASE CONCLU\xCDDA!</h1>
        <h3>${Be(t.def.name)}</h3>
        <table>
          <tr><td>Pontua\xE7\xE3o</td><td>${e.base}</td></tr>
          <tr><td>B\xF4nus de tempo (${Xs(t.time)})</td><td>+${e.timeBonus}</td></tr>
          <tr><td>B\xF4nus de an\xE9is/moedas (${t.rings+t.coins})</td><td>+${e.ringBonus}</td></tr>
          <tr><td>B\xF4nus sem morrer</td><td>+${e.perfect}</td></tr>
          <tr class="total"><td>TOTAL</td><td>${e.total}</td></tr>
        </table>
        <div class="medals big">${t.medals.map((n,r)=>`<span class="${n?"on":t.savedMedals[r]?"old":""}">\u2605</span>`).join("")}</div>
        ${e.newBest?'<div class="badge">NOVO RECORDE!</div>':""}
        <div class="row">
          ${i?'<button class="btn big primary" data-act="ending">\u2605 Final</button>':'<button class="btn big primary" data-act="next">Pr\xF3xima fase \u25B6</button>'}
          <button class="btn" data-act="restart">\u21BB Repetir</button>
          <button class="btn" data-act="quit">\u2302 Menu</button>
        </div>
      </div>`)}gameOverMenu(t){this.show("gameover",`
      <div class="panel gameover">
        <h1>FIM DE JOGO</h1>
        <p>${Be(t.def.name)} \u2022 Pontua\xE7\xE3o: ${t.score}</p>
        <button class="btn big primary" data-act="restart">\u21BB Tentar novamente</button>
        <button class="btn" data-act="quit">\u2302 Menu principal</button>
      </div>`)}endingScreen(){let t=this.app.save.data,e=Xe.reduce((n,r)=>n+(t.levels[r.id]?t.levels[r.id].medals.filter(Boolean).length:0),0),i=Xe.reduce((n,r)=>n+(t.levels[r.id]?t.levels[r.id].bestScore:0),0);this.show("ending",`
      <div class="ending-scroll">
        <h1>PARAB\xC9NS!</h1>
        <p>O Imperador V\xF3rtex foi derrotado e a Dimens\xE3o Final voltou \xE0 paz.</p>
        <p>Zip e Rocco reuniram os an\xE9is e as moedas dos cinco reinos \u2014 Green Hills, Mushroom Kingdom, Lost Jungle, Lava Castle e Final Dimension.</p>
        <p class="big-stat">Pontua\xE7\xE3o total: ${i}<br>Medalhas Estrela: ${e}/15</p>
        <p>${e<15?"Ainda h\xE1 medalhas escondidas... volte e encontre todas!":"Voc\xEA encontrou TODAS as medalhas. Lend\xE1rio!"}</p>
        <h3>Dash Kingdom 3D</h3>
        <p>Obrigado por jogar!</p>
      </div>
      <div class="bottom-row"><button class="btn primary" data-act="quit">\u2302 Menu principal</button></div>`)}toastMsg(t){let e=document.createElement("div");e.className="toast",e.textContent=t,document.body.appendChild(e),setTimeout(()=>e.remove(),2200)}buildHud(){this.hud.innerHTML=`
      <div class="hud-tl">
        <div class="hud-score"><span class="lbl">PONTOS</span><b id="h-score">0</b></div>
        <div class="hud-time"><span class="lbl">TEMPO</span><b id="h-time">0:00.00</b></div>
        <div class="hud-items"><span class="ico ring"></span><b id="h-rings">0</b><span class="ico coin"></span><b id="h-coins">0</b></div>
        <div class="hud-hearts" id="h-hearts"></div>
        <div class="hud-energy" id="h-energy-wrap"><span class="lbl">TURBO</span><div class="ebar"><i id="h-energy"></i></div></div>
        <div class="hud-power" id="h-power"></div>
      </div>
      <div class="hud-tc"><div id="boss" class="hidden"><div class="boss-name" id="boss-name"></div><div class="boss-bar"><i id="boss-hp"></i></div></div></div>
      <div class="hud-tr">
        <div class="hud-medals" id="h-medals"></div>
        <div class="hud-lives"><span class="life-ico" id="h-life-ico"></span>\xD7 <b id="h-lives">5</b></div>
        <button id="btn-pause" aria-label="Pausa">\u275A\u275A</button>
      </div>
      <div id="h-hint" class="hud-hint"></div>
      <div id="h-fps" class="hud-fps"></div>`,de("#btn-pause").addEventListener("pointerdown",t=>{t.preventDefault(),t.stopPropagation(),this.app.pause()}),this.el={score:de("#h-score"),time:de("#h-time"),rings:de("#h-rings"),coins:de("#h-coins"),hearts:de("#h-hearts"),energy:de("#h-energy"),energyWrap:de("#h-energy-wrap"),power:de("#h-power"),medals:de("#h-medals"),lives:de("#h-lives"),hint:de("#h-hint"),fps:de("#h-fps"),lifeIco:de("#h-life-ico")}}showHud(t){this.hud.classList.toggle("hidden",!t)}hudReset(t){this.cache={},this.el.lifeIco.className="life-ico "+t.charId,this.el.energyWrap.style.display=t.charId==="zip"?"":"none",this.bossBar(null),this.hudUpdate(t,1)}set(t,e){this.cache[t]!==e&&(this.cache[t]=e,this.el[t].innerHTML=e)}hudUpdate(t,e){if(this.hudAcc+=e,this.hudAcc<.066)return;this.hudAcc=0;let i=t.player;this.set("score",String(t.score)),this.set("time",Xs(t.time)),this.set("rings",String(t.rings)),this.set("coins",String(t.coins)),this.set("lives",String(t.lives));let n="";for(let a=0;a<i.maxHearts;a++)n+=`<span class="heart ${a<i.hearts?"on":""}">\u2665</span>`;this.set("hearts",n),this.set("medals",t.medals.map((a,o)=>`<span class="${a?"on":t.savedMedals[o]?"old":""}">\u2605</span>`).join("")),i.id==="zip"&&(this.el.energy.style.width=Math.round(i.energy)+"%");let r=[];i.shield&&r.push('<span class="pw sh">ESCUDO</span>'),i.big&&r.push('<span class="pw big">SUPER</span>'),i.fire&&r.push('<span class="pw fire">FOGO</span>'),i.starTime>0&&r.push(`<span class="pw star">\u2605 ${Math.ceil(i.starTime)}</span>`),i.speedTime>0&&r.push(`<span class="pw spd">\xBB ${Math.ceil(i.speedTime)}</span>`),this.set("power",r.join("")),this.set("hint",t.hintT>0?t.hintText:""),this.el.hint.classList.toggle("on",t.hintT>0),this.set("fps",this.app.save.settings.showFps?`${Math.round(this.app.fps)} FPS`:"")}bossBar(t,e,i){let n=de("#boss");if(!t){n.classList.add("hidden");return}n.classList.remove("hidden"),de("#boss-name").textContent=t,de("#boss-hp").style.width=Math.max(0,e/i*100)+"%"}flash(t,e="#fff",i=1.5,n=""){let r=this.flashEl;r.innerHTML=`<div class="flash-t" style="color:${e}">${Be(t)}</div>${n?`<div class="flash-s">${Be(n)}</div>`:""}`,r.classList.remove("show"),r.offsetWidth,r.classList.add("show"),clearTimeout(this.flashTimer),this.flashTimer=setTimeout(()=>r.classList.remove("show"),i*1e3)}};var jl=class{constructor(t,e,i,n,r,a,o={}){this.min={x:t,y:e,z:i},this.max={x:n,y:r,z:a},this.ramp=o.ramp||null,this.oneWay=!!o.oneWay,this.dynamic=!!o.dynamic,this.active=o.active!==void 0?o.active:!0,this.solidWalls=o.solidWalls!==void 0?o.solidWalls:!0,this.headOnly=!!o.headOnly,this.surface=o.surface||"normal",this.owner=o.owner||null,this.delta={x:0,y:0,z:0}}topAt(t,e){if(!this.ramp)return this.max.y;let i=this.ramp,n;return i.axis==="x"?n=(t-this.min.x)/(this.max.x-this.min.x):n=(e-this.min.z)/(this.max.z-this.min.z),n=n<0?0:n>1?1:n,i.h0+(i.h1-i.h0)*n}slope(){if(!this.ramp)return{x:0,z:0};let t=this.ramp;return t.axis==="x"?{x:(t.h1-t.h0)/(this.max.x-this.min.x),z:0}:{x:0,z:(t.h1-t.h0)/(this.max.z-this.min.z)}}moveTo(t,e,i){let n=(this.max.x-this.min.x)/2,r=(this.max.z-this.min.z)/2,a=this.max.y-this.min.y,o=(this.min.x+this.max.x)/2,l=this.max.y,h=(this.min.z+this.max.z)/2;this.delta.x=t-o,this.delta.y=e-l,this.delta.z=i-h,this.min.x=t-n,this.max.x=t+n,this.min.z=i-r,this.max.z=i+r,this.max.y=e,this.min.y=e-a}overlapsCircle(t,e,i){let n=t<this.min.x?this.min.x:t>this.max.x?this.max.x:t,r=e<this.min.z?this.min.z:e>this.max.z?this.max.z:e,a=t-n,o=e-r;return a*a+o*o<i*i}containsPoint(t,e,i){return t<this.min.x||t>this.max.x||i<this.min.z||i>this.max.z||e<this.min.y?!1:e<this.topAt(t,i)}},Ma=class{constructor(){this.grid=new Map,this.statics=[],this.dynamics=[],this.stamp=0,this.tmp=[]}key(t,e){return t*73856093^e*19349663}add(t){if(t.dynamic)return this.dynamics.push(t),t;this.statics.push(t),t._stamp=0;let e=Math.floor(t.min.x/8),i=Math.floor(t.max.x/8),n=Math.floor(t.min.z/8),r=Math.floor(t.max.z/8);for(let a=e;a<=i;a++)for(let o=n;o<=r;o++){let l=this.key(a,o),h=this.grid.get(l);h||(h=[],this.grid.set(l,h)),h.push(t)}return t}remove(t){t.active=!1;let e=this.dynamics.indexOf(t);e>=0&&this.dynamics.splice(e,1)}box(t,e,i,n,r,a,o){return this.add(new jl(t,e,i,n,r,a,o))}query(t,e,i){let n=this.tmp;n.length=0,this.stamp++;let r=Math.floor((t-i)/8),a=Math.floor((t+i)/8),o=Math.floor((e-i)/8),l=Math.floor((e+i)/8);for(let h=r;h<=a;h++)for(let c=o;c<=l;c++){let u=this.grid.get(this.key(h,c));if(u)for(let d=0;d<u.length;d++){let f=u[d];f._stamp===this.stamp||!f.active||(f._stamp=this.stamp,f.overlapsCircle(t,e,i)&&n.push(f))}}for(let h=0;h<this.dynamics.length;h++){let c=this.dynamics[h];c.active&&c.overlapsCircle(t,e,i)&&n.push(c)}return n}ground(t,e,i,n){let r=this.query(t,e,i),a=null,o=-1/0;for(let l=0;l<r.length;l++){let h=r[l];if(h.headOnly)continue;let c=h.topAt(t,e);c<=n&&c>o&&(o=c,a=h)}return a?{y:o,c:a}:null}pointSolid(t,e,i){let n=this.query(t,i,.01);for(let r=0;r<n.length;r++){let a=n[r];if(!(a.oneWay||a.headOnly)&&a.containsPoint(t,e,i))return!0}return!1}raySolid(t,e,i,n,r,a,o=10){for(let l=1;l<=o;l++){let h=l/o;if(this.pointSolid(t+(n-t)*h,e+(r-e)*h,i+(a-i)*h))return(l-1)/o}return 1}moveBody(t,e,i){i.landed=!1,i.headHit.length=0,i.sideHit.length=0;let n=t.grounded?.55:.25;t.grounded&&t.ground&&t.ground.dynamic&&(t.pos.x+=t.ground.delta.x,t.pos.y+=t.ground.delta.y,t.pos.z+=t.ground.delta.z);let r=Math.hypot(t.vel.x,t.vel.z)*e,a=Math.max(1,Math.min(10,Math.ceil(r/.3))),o=e/a,l=t.grounded,h=0;for(let c=0;c<a;c++){t.pos.x+=t.vel.x*o,t.pos.z+=t.vel.z*o;let u=this.query(t.pos.x,t.pos.z,t.radius+.05);for(let d=0;d<u.length;d++){let f=u[d];if(f.oneWay||f.headOnly||!f.solidWalls||f.min.y>=t.pos.y+t.height-.05||f.topAt(t.pos.x,t.pos.z)<=t.pos.y+n)continue;let y=Math.max(f.min.x,Math.min(t.pos.x,f.max.x)),m=Math.max(f.min.z,Math.min(t.pos.z,f.max.z)),p=t.pos.x-y,b=t.pos.z-m,x=Math.hypot(p,b);if(x>1e-5){if(x>=t.radius)continue;let M=t.radius-x;p/=x,b/=x,t.pos.x+=p*M,t.pos.z+=b*M;let C=t.vel.x*p+t.vel.z*b;C<0&&(t.vel.x-=C*p,t.vel.z-=C*b),i.sideHit.push(f)}else{let M=t.pos.x-f.min.x,C=f.max.x-t.pos.x,R=t.pos.z-f.min.z,T=f.max.z-t.pos.z,L=Math.min(M,C,R,T);L===M?(t.pos.x=f.min.x-t.radius,t.vel.x>0&&(t.vel.x=0)):L===C?(t.pos.x=f.max.x+t.radius,t.vel.x<0&&(t.vel.x=0)):L===R?(t.pos.z=f.min.z-t.radius,t.vel.z>0&&(t.vel.z=0)):(t.pos.z=f.max.z+t.radius,t.vel.z<0&&(t.vel.z=0)),i.sideHit.push(f)}}if(t.grounded){let d=this.ground(t.pos.x,t.pos.z,t.radius*.6,t.pos.y+n);d&&d.y>=t.pos.y-.7&&t.vel.y<=.01?(h+=(d.y-t.pos.y)/e,t.pos.y=d.y,t.ground=d.c):(t.grounded=!1,t.ground=null)}}if(!t.grounded){l&&t.vel.y<=0&&h>.5&&(t.vel.y=h);let c=t.pos.y;if(t.pos.y+=t.vel.y*e,t.vel.y>0){let u=this.query(t.pos.x,t.pos.z,t.radius*.75);for(let d=0;d<u.length;d++){let f=u[d];if(f.oneWay)continue;let g=c+t.height,y=t.pos.y+t.height;f.min.y>=g-.25&&f.min.y<=y&&(t.pos.y=f.min.y-t.height-.01,t.vel.y=0,i.headHit.push(f))}}else{let u=this.ground(t.pos.x,t.pos.z,t.radius*.6,Math.max(c,t.pos.y)+.25);u&&t.pos.y<=u.y&&(!u.c.oneWay||c>=u.y-.15)&&(t.pos.y=u.y,t.vel.y=0,t.grounded=!0,t.ground=u.c,i.landed=!0)}}return t.groundVy=h,i}};var ba=class{constructor(t,e){this.cam=t,this.world=e,this.yaw=0,this.pitch=.32,this.dist=7.5,this.curDist=7.5,this.target=new E,this.shakeAmt=0,this.extraDist=0}snapBehind(t,e){this.yaw=t,this.pitch=.32,e&&this.target.set(e.pos.x,e.pos.y+1.3,e.pos.z)}shake(t){this.shakeAmt=Math.max(this.shakeAmt,t)}update(t,e,i,n,r){let a=performance.now()/1e3;(i.camDX||i.camDY)&&(this.yaw-=i.camDX*.0065,this.pitch=ye(this.pitch+i.camDY*.0045,-.15,1));let o=e.pos,l=e.speed,h=a-i.lastCamInput<1.4,c=null,u=7.2+Math.min(l,30)*.09,d=null,f=o.x,g=o.y+1.3,y=o.z;if(e.state==="loop"&&e.loop){let N=e.loop;f=N.x+N.rx*N.shift*.5,g=N.y+N.R*.8,y=N.z+N.fz*N.R*.3+N.fx*0,f+=N.fx*N.R*.3,c=N.yaw+Math.PI/2,u=N.R*2.6,d=.12}else if(e.state==="dead")f=this.target.x,y=this.target.z,g=Math.max(this.target.y-t*2,o.y+1.3);else if(n.autoCamera&&!h&&l>4&&e.state!=="hurt"){let N=Math.atan2(e.vel.x,e.vel.z);Math.abs(cs(N-this.yaw))<2.3&&(c=N,this.autoRate=.5+Math.min(l,30)*.09)}r&&r.active&&!r.defeated&&(u+=3.5,h||(d=.42)),e.state==="rail"&&(u+=1.5),c!==null&&(this.yaw=Si(this.yaw,c,e.state==="loop"?3:this.autoRate||1.5,t)),d!==null?this.pitch=Ke(this.pitch,d,2.5,t):!h&&n.autoCamera&&(this.pitch=Ke(this.pitch,.3,.8,t)),this.dist=Ke(this.dist,u,3,t);let m=e.state==="loop"?4:14;this.target.x=Ke(this.target.x,f,m,t),this.target.z=Ke(this.target.z,y,m,t),this.target.y=Ke(this.target.y,g,e.body.grounded?9:5,t),Math.abs(this.target.y-g)>6&&(this.target.y=g+Math.sign(this.target.y-g)*6);let p=Math.sin(this.yaw),b=Math.cos(this.yaw),x=Math.cos(this.pitch),M=Math.sin(this.pitch),C=-p*x*this.dist,R=M*this.dist,T=-b*x*this.dist,L=this.target,k=this.world.raySolid(L.x,L.y,L.z,L.x+C,L.y+R,L.z+T,8),v=Math.max(1.6,this.dist*k*.95);this.curDist=v<this.curDist?Ke(this.curDist,v,25,t):Ke(this.curDist,v,3,t);let A=this.curDist/this.dist,J=L.x+C*A,j=L.y+R*A,I=L.z+T*A;this.shakeAmt>0&&(J+=(Math.random()-.5)*this.shakeAmt,j+=(Math.random()-.5)*this.shakeAmt,I+=(Math.random()-.5)*this.shakeAmt,this.shakeAmt=Math.max(0,this.shakeAmt-t*1.6)),this.cam.position.set(J,j,I),this.cam.lookAt(L.x,L.y+.3,L.z);let W=62+ye((l-15)*.5,0,10);Math.abs(this.cam.fov-W)>.1&&(this.cam.fov=Ke(this.cam.fov,W,3,t),this.cam.updateProjectionMatrix())}};var Lx=()=>oe(32,(s,t)=>{let e=s.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.4,"rgba(255,255,255,0.8)"),e.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=e,s.fillRect(0,0,t,t)},!1),js=class{constructor(t,e,i,n){this.n=e,this.pos=new Float32Array(e*3),this.col=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.max=new Float32Array(e),this.grav=new Float32Array(e),this.base=new Float32Array(e*3),this.geo=new ce,this.geo.setAttribute("position",new _e(this.pos,3).setUsage(Vs)),this.geo.setAttribute("color",new _e(this.col,3).setUsage(Vs)),this.mat=new vn({size:i,map:Lx(),vertexColors:!0,transparent:!0,depthWrite:!1,blending:n?Cr:Zi,sizeAttenuation:!0}),this.points=new is(this.geo,this.mat),this.points.frustumCulled=!1,t.add(this.points),this.cursor=0;for(let r=0;r<e;r++)this.pos[r*3+1]=-9999}emit(t,e,i,n,r,a,o,l,h){let c=this.cursor;this.cursor=(this.cursor+1)%this.n,this.pos[c*3]=t,this.pos[c*3+1]=e,this.pos[c*3+2]=i,this.vel[c*3]=n,this.vel[c*3+1]=r,this.vel[c*3+2]=a;let u=new Dt(o);this.base[c*3]=u.r,this.base[c*3+1]=u.g,this.base[c*3+2]=u.b,this.life[c]=l,this.max[c]=l,this.grav[c]=h}update(t){let e=!1;for(let i=0;i<this.n;i++){if(this.life[i]<=0)continue;e=!0,this.life[i]-=t;let n=i*3;if(this.life[i]<=0){this.pos[n+1]=-9999;continue}this.vel[n+1]-=this.grav[i]*t,this.pos[n]+=this.vel[n]*t,this.pos[n+1]+=this.vel[n+1]*t,this.pos[n+2]+=this.vel[n+2]*t;let r=Math.min(1,this.life[i]/this.max[i]*1.5);this.col[n]=this.base[n]*r,this.col[n+1]=this.base[n+1]*r,this.col[n+2]=this.base[n+2]*r}(e||this.dirty)&&(this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0,this.dirty=e)}},Sa=class{constructor(t,e){let i=e==="low"?220:500;this.small=new js(t,i,.35,!0),this.big=new js(t,Math.floor(i/3),1.1,!0),this.dustPool=new js(t,120,.9,!1)}burst(t,e,i,n=6,r=.6,a=6){for(let o=0;o<e;o++){let l=Math.random()*Math.PI*2,h=Math.random()*2-1,c=n*(.4+Math.random()*.6);this.small.emit(t.x,t.y,t.z,Math.cos(l)*c*Math.sqrt(1-h*h),h*c+n*.3,Math.sin(l)*c*Math.sqrt(1-h*h),i,r*(.6+Math.random()*.6),a)}}sparkle(t,e=16777130){this.small.emit(t.x+(Math.random()-.5),t.y+(Math.random()-.5)*1.2,t.z+(Math.random()-.5),0,1.5,0,e,.5,0)}trail(t,e){this.small.emit(t.x+(Math.random()-.5)*.5,t.y+(Math.random()-.5)*.8,t.z+(Math.random()-.5)*.5,0,.3,0,e,.35,0)}explosion(t,e=1){for(let i=0;i<18*e;i++){let n=Math.random()*Math.PI*2,r=(3+Math.random()*6)*e;this.big.emit(t.x,t.y,t.z,Math.cos(n)*r,Math.random()*6*e,Math.sin(n)*r,i%3?16747034:16769126,.7,4)}this.burst(t,20*e,16777215,8*e,.5)}dust(t,e=6){for(let i=0;i<e;i++){let n=Math.random()*Math.PI*2;this.dustPool.emit(t.x,t.y+.15,t.z,Math.cos(n)*2.5,.8+Math.random(),Math.sin(n)*2.5,14207928,.5,1)}}update(t){this.small.update(t),this.big.update(t),this.dustPool.update(t)}};function qe(s,t,e,i,n){let r=s.pos,a=r.x-t,o=r.z-i,l=n+s.body.radius;return a*a+o*o>l*l?!1:e+n>r.y&&e-n<r.y+s.body.height}function le(s,t,e,i,n,r,a=1,o=a,l=a,h=!0){let c=new St(t,e);return c.position.set(i,n,r),c.scale.set(a,o,l),c.castShadow=h,c.receiveShadow=h,s.add(c),c}var ds=new ee,_u=new Ve,Mu=new E,Ea=new E,bu=new je,wa=class{constructor(t){this.game=t,this.items=[],this.t=0}add(t,e,i,n){this.items.push({x:e,y:i,z:n,type:t,taken:!1})}finalize(){let t=this.game,e=this.items.filter(n=>n.type===0),i=this.items.filter(n=>n.type===1);this.rings=e,this.coins=i,e.length&&(this.ringMesh=new en(Zs(),F(16763938,{emissive:6965760}),e.length),t.scene.add(this.ringMesh)),i.length&&(this.coinMesh=new en(ya(),F(16761876,{emissive:5913088}),i.length),t.scene.add(this.coinMesh));for(let n of[this.ringMesh,this.coinMesh])n&&(n.castShadow=!1,n.frustumCulled=!1,n.instanceMatrix.setUsage(Vs));this.total={rings:e.length,coins:i.length}}update(t){this.t+=t;let e=this.game.player,i=e.alive?e.pos:null,n=[[this.rings,this.ringMesh,0],[this.coins,this.coinMesh,1]];for(let[r,a,o]of n)if(a){bu.set(0,this.t*(o?3:4),0),_u.setFromEuler(bu);for(let l=0;l<r.length;l++){let h=r[l];if(h.taken){h.dirty&&(ds.makeScale(0,0,0),a.setMatrixAt(l,ds),h.dirty=!1);continue}if(i){let c=i.x-h.x,u=i.y+.8-h.y,d=i.z-h.z;if(e.shield&&c*c+u*u+d*d<36&&(h.x+=c*t*6,h.y+=u*t*6,h.z+=d*t*6),c*c+d*d<1.3&&u*u<1.4){h.taken=!0,h.dirty=!0,o===0?(this.game.addRings(1),it.sfx("ring"),this.game.fx.burst(Ea.set(h.x,h.y,h.z),5,16769126,3,.35,0)):(this.game.addCoins(1),it.sfx("coin"),this.game.fx.burst(Ea.set(h.x,h.y,h.z),5,16765503,3,.35,0)),ds.makeScale(0,0,0),a.setMatrixAt(l,ds),h.dirty=!1;continue}}Mu.set(1,1,1),Ea.set(h.x,h.y,h.z),ds.compose(Ea,_u,Mu),a.setMatrixAt(l,ds)}a.instanceMatrix.needsUpdate=!0}}},Ta=class s{constructor(t,e,i){this.game=t,this.type=i;let n=i===0?s.rg||(s.rg=Zs()):s.cg||(s.cg=ya());this.mesh=le(t.scene,n,F(i===0?16763938:16761876,{emissive:6965760}),e.x,e.y+1,e.z,1,1,1,!1);let r=Math.random()*Math.PI*2,a=4+Math.random()*4;this.vel=new E(Math.cos(r)*a,7+Math.random()*4,Math.sin(r)*a),this.life=4,this.alive=!0,this.delay=.6}update(t){let e=this.game,i=this.mesh;this.life-=t,this.delay-=t,this.vel.y-=25*t,i.position.addScaledVector(this.vel,t);let n=e.world.ground(i.position.x,i.position.z,.1,i.position.y+.5);n&&i.position.y<n.y+.4&&this.vel.y<0&&(i.position.y=n.y+.4,this.vel.y*=-.6,this.vel.x*=.8,this.vel.z*=.8),i.rotation.y+=t*8,i.visible=this.life>1.2||Math.floor(this.life*12)%2===0,this.delay<=0&&e.player.alive&&qe(e.player,i.position.x,i.position.y,i.position.z,.6)&&(this.type===0?(e.addRings(1),it.sfx("ring")):(e.addCoins(1),it.sfx("coin")),this.life=0),this.life<=0&&(this.alive=!1,e.scene.remove(i))}},fs=1.5,Tn=class{constructor(t,e,i,n,r,a){this.game=t,this.kind=r,this.content=a||null,this.coinsLeft=a==="coins5"?5:0,this.x=e,this.y=i,this.z=n;let o=fs/2;this.col=t.world.box(e-o,i-o,n-o,e+o,i+o,n+o,{owner:this,headOnly:r==="hidden"});let l=r==="brick"?"brick":r==="q"?"qblock":r==="used"?"usedblock":"qblock";this.mesh=le(t.scene,Ft.box,F(16777215,{map:Ce(l)}),e,i,n,fs),this.mesh.visible=r!=="hidden",r==="hidden"&&(this.mesh.material=F(16777215,{map:Ce("qblock"),transparent:!0,opacity:0})),this.bumpT=0,this.alive=!0}becomeUsed(){this.kind="used",this.col.headOnly=!1,this.mesh.visible=!0,this.mesh.material=F(16777215,{map:Ce("usedblock")})}onHeadHit(t){this.hit(t,"below")}onAttackHit(t){this.hit(t,"side")}onPound(t){this.hit(t,"above")}hit(t,e){if(!this.alive||this.bumpT>0)return;let i=this.game;if(this.kind==="brick"){if(t.id==="zip"||t.big||e!=="below"){this.breakBlock();return}this.bumpT=.2,it.sfx("bump"),i.bumpEnemiesAbove(this.x,this.y+fs/2,this.z);return}if(this.kind==="used"){it.sfx("bump"),this.bumpT=.15;return}this.bumpT=.2,i.bumpEnemiesAbove(this.x,this.y+fs/2,this.z);let n=new E(this.x,this.y+fs/2,this.z);if(this.content==="coins5"){this.coinsLeft--,i.popCoin(n),this.coinsLeft<=0&&this.becomeUsed();return}!this.content||this.content==="coin"?i.popCoin(n):(i.spawnItem(this.content,n,!0),it.sfx("itemappear")),i.addScore(50),this.becomeUsed()}breakBlock(){let t=this.game;this.alive=!1,this.col.active=!1,t.scene.remove(this.mesh),t.fx.burst(new E(this.x,this.y,this.z),16,13131818,7,.7,20),it.sfx("break"),t.addScore(50),t.bumpEnemiesAbove(this.x,this.y+fs/2,this.z)}update(t){if(this.bumpT>0&&(this.bumpT-=t,this.mesh.position.y=this.y+Math.sin(Math.max(0,this.bumpT)/.2*Math.PI)*.35),this.kind==="hidden"&&this.mesh.material.opacity!==void 0){let e=this.game.player.pos,i=Math.hypot(e.x-this.x,e.z-this.z);this.mesh.visible=i<3,this.mesh.material.opacity=i<3?.12:0}}},Aa=class{constructor(t,e,i,n,r){this.game=t,this.content=r,this.alive=!0,this.x=e,this.y=i,this.z=n,this.col=t.world.box(e-.6,i,n-.6,e+.6,i+1.3,n+.6,{owner:this,dynamic:!0}),this.group=new ne,this.group.position.set(e,i,n),t.scene.add(this.group);let a=new St(Ft.box,F(16777215,{map:Ce("monitor")}));a.scale.set(1.2,1.3,1.2),a.position.y=.65,a.castShadow=!0,this.group.add(a);let o=Jl(r==="rings10"?"rings10":r);o.scale.setScalar(.62),o.position.set(0,.42,.78),this.group.add(o);let l=o.clone();l.position.z=-.78,l.rotation.y=Math.PI,this.group.add(l),this.icon=o,this.t=Math.random()*6}targetPos(){return new E(this.x,this.y+.7,this.z)}onLand(t,e){(t.attackKind()||e<-6)&&this.breakIt(t,!0)}onAttackHit(t){this.breakIt(t,!1)}onPound(t){this.breakIt(t,!0)}onHeadHit(t){this.breakIt(t,!1)}breakIt(t,e){if(!this.alive)return;let i=this.game;this.alive=!1,i.world.remove(this.col),i.scene.remove(this.group),i.fx.explosion(this.targetPos(),.6),it.sfx("break"),i.applyPowerUp(this.content,this.targetPos()),i.addScore(100),(e||t.state==="homing")&&t.onEnemyKilled("stomp")}update(t){if(!this.alive)return;this.t+=t,this.icon.rotation.y=Math.sin(this.t*2)*.5;let e=this.game.player;e.alive&&e.attackKind()&&qe(e,this.x,this.y+.65,this.z,.75)&&this.breakIt(e,e.vel.y<0);let i=e.hitSphere();i&&Math.hypot(i.x-this.x,i.y-this.y-.65,i.z-this.z)<i.r+.7&&this.breakIt(e,!1)}},Ra=class{constructor(t,e,i,n){this.game=t,this.kind=e,this.alive=!0,this.mesh=Jl(e),this.base=i.clone(),this.mesh.position.copy(i),n&&(this.mesh.position.y-=1.2),t.scene.add(this.mesh),this.t=0,this.riseT=n?.6:0}update(t){this.t+=t;let e=this.mesh;if(this.riseT>0){this.riseT-=t,e.position.y=this.base.y-1.2*Math.max(0,this.riseT/.6)+.05;return}e.position.y=this.base.y+.2+Math.sin(this.t*3)*.15,e.rotation.y+=t*2;let i=this.game.player;i.alive&&qe(i,e.position.x,e.position.y+.4,e.position.z,.6)&&(this.alive=!1,this.game.scene.remove(e),this.game.applyPowerUp(this.kind,e.position))}},Ca=class s{constructor(t,e){this.game=t,this.alive=!0,this.mesh=le(t.scene,s.geo||(s.geo=ya()),F(16761876,{emissive:5913088}),e.x,e.y+.6,e.z,1,1,1,!1),this.vy=11,this.t=0}update(t){this.t+=t,this.vy-=30*t,this.mesh.position.y+=this.vy*t,this.mesh.rotation.y+=t*20,this.t>.6&&(this.alive=!1,this.game.scene.remove(this.mesh),this.game.fx.burst(this.mesh.position,6,16769126,3,.3,0))}},Pa=class{constructor(t,e,i,n,r=20,a=null){this.game=t,this.x=e,this.y=i,this.z=n,this.alive=!0,this.power=r,this.dir=a?new E(a[0],a[1],a[2]).normalize():new E(0,1,0),this.group=new ne,this.group.position.set(e,i,n);let o=r>=26?15022389:16765503,l=new St(Ft.box,F(5593702));if(l.scale.set(1.3,.25,1.3),l.position.y=.12,this.group.add(l),this.coil=new St(Ft.cyl,F(12568272)),this.coil.scale.set(.35,.5,.35),this.coil.position.y=.45,this.group.add(this.coil),this.plate=new St(Ft.box,F(o)),this.plate.scale.set(1.25,.22,1.25),this.plate.position.y=.75,this.group.add(this.plate),this.group.traverse(h=>{h.isMesh&&(h.castShadow=!0)}),this.dir.y<.99){let h=new Ve().setFromUnitVectors(new E(0,1,0),this.dir);this.group.quaternion.copy(h)}t.scene.add(this.group),this.cd=0,this.anim=0}update(t){if(this.cd-=t,this.anim>0){this.anim-=t;let i=Math.sin(this.anim/.25*Math.PI);this.plate.position.y=.75+i*.5,this.coil.scale.y=.5+i*.6,this.coil.position.y=.45+i*.25}let e=this.game.player;if(!(this.cd>0||!e.alive||e.state==="rail"||e.state==="loop")&&qe(e,this.x,this.y+.6,this.z,.75)&&e.vel.y<=1){let i=this.dir;i.y>.99?(e.pos.x=this.x,e.pos.z=this.z,e.launch(e.vel.x*.25,this.power,e.vel.z*.25,.25)):(e.pos.y=Math.max(e.pos.y,this.y+.3),e.launch(i.x*this.power,i.y*this.power,i.z*this.power,.45)),e.pos.y+=.5,this.cd=.3,this.anim=.25,it.sfx("spring")}}},La=class{constructor(t,e,i,n,r,a=32){this.game=t,this.x=e,this.y=i,this.z=n,this.yaw=r,this.speed=a,this.alive=!0,this.mesh=le(t.scene,Ft.box,F(16777215,{map:Ce("boostpad"),emissive:3351040}),e,i+.03,n,2.2,.08,2.6),this.mesh.rotation.y=r,this.cd=0,this.t=0}update(t){this.cd-=t,this.t+=t,this.mesh.material.emissive.setRGB(.25+Math.sin(this.t*10)*.15,.18,0);let e=this.game.player;if(!(this.cd>0||!e.alive||e.state==="rail"||e.state==="loop"||e.state==="dead")&&Math.abs(e.pos.y-this.y)<.8&&Math.hypot(e.pos.x-this.x,e.pos.z-this.z)<1.6){let i=Math.max(e.speed,this.speed);e.body.vel.x=Math.sin(this.yaw)*i,e.body.vel.z=Math.cos(this.yaw)*i,e.facing=this.yaw,e.springLock=.35,e.state!=="boost"&&(e.state="normal"),this.cd=.4,it.sfx("boostpad"),this.game.camShake(.1)}}},Ia=class{constructor(t,e,i,n,r,a=7,o=3.2){this.game=t,this.x=e,this.y=i,this.z=n,this.yaw=r,this.R=a,this.shift=o,this.alive=!0,this.fx=Math.sin(r),this.fz=Math.cos(r),this.rx=Math.cos(r),this.rz=-Math.sin(r),this.len=2*Math.PI*a*1.02;let l=64,h=2.2,c=[],u=[],d=[],f=[];for(let b=0;b<=l;b++){let x=b/l,M=this.point(x),C=this.inward(x),R=this.lateral();for(let T of[-1,1])c.push(M.x+R.x*T*h,M.y,M.z+R.z*T*h),u.push(C.x,C.y,C.z),d.push(T<0?0:1,x*12);if(b<l){let T=b*2;f.push(T,T+2,T+1,T+1,T+2,T+3)}}let g=new ce;g.setAttribute("position",new Gt(c,3)),g.setAttribute("normal",new Gt(u,3)),g.setAttribute("uv",new Gt(d,2)),g.setIndex(f);let y=new ri({map:Ce("checker"),side:Ie});this.mesh=new St(g,y),this.mesh.receiveShadow=!0,t.scene.add(this.mesh);let m=[];for(let b=0;b<=48;b++)m.push(this.point(b/48));let p=new ns(m);for(let b of[-1,1]){let x=new St(new Bs(p,64,.12,5,!1),F(16765503));x.position.set(this.lateral().x*b*h,0,this.lateral().z*b*h),t.scene.add(x)}this.cd=0}lateral(){return{x:this.rx,z:this.rz}}smooth(t){return t*t*(3-2*t)}point(t){let e=t*Math.PI*2,i=this.R*Math.sin(e),n=this.R*(1-Math.cos(e)),r=this.shift*this.smooth(t);return new E(this.x+this.fx*i+this.rx*r,this.y+n,this.z+this.fz*i+this.rz*r)}inward(t){let e=t*Math.PI*2;return new E(-this.fx*Math.sin(e)*-1*0+this.fx*-Math.sin(e),Math.cos(e),this.fz*-Math.sin(e))}update(t){this.cd-=t;let e=this.game.player;if(this.cd>0||!e.alive||e.state==="loop"||e.state==="rail")return;let i=e.pos.x-this.x,n=e.pos.z-this.z,r=i*this.fx+n*this.fz,a=i*this.rx+n*this.rz,o=e.vel.x*this.fx+e.vel.z*this.fz;r>-.6&&r<.9&&Math.abs(a)<2.4&&Math.abs(e.pos.y-this.y)<1.2&&o>4&&(e.state="loop",e.loop=this,e.loopU=0,e.loopLat=ye(a,-1.5,1.5),e.loopSpeed=Math.max(e.speed,20),e.mode=(e.id==="zip","run"))}updateRider(t,e){let i=t.loopU*Math.PI*2;t.loopSpeed=Math.max(16,t.loopSpeed-Math.sin(i)*6*e),t.loopU+=t.loopSpeed*e/this.len;let n=Math.min(1,t.loopU),r=this.point(n);t.body.pos.set(r.x+this.rx*t.loopLat,r.y,r.z+this.rz*t.loopLat),t.obj.position.copy(t.body.pos),t.obj.rotation.set(-n*Math.PI*2,this.yaw,0,"YXZ"),t.facing=this.yaw,t.body.vel.set(this.fx*t.loopSpeed,0,this.fz*t.loopSpeed),t.loopU>=1&&(t.state="normal",t.loop=null,t.obj.rotation.set(0,this.yaw,0,"XYZ"),t.body.grounded=!0,this.cd=1),t.mode="run"}},Da=class{constructor(t,e,i={}){this.game=t,this.alive=!0,this.curve=new ns(e.map(l=>new E(l[0],l[1],l[2]))),this.length=this.curve.getLength();let n=Math.max(8,Math.ceil(this.length/.5));this.samples=this.curve.getSpacedPoints(n),this.n=n;let r=i.color||12634328,a=new St(new Bs(this.curve,n,.13,6,!1),F(r,i.vine?{}:{emissive:1118498}));if(a.castShadow=!0,t.scene.add(a),!i.noPosts){let l=F(i.vine?3828514:6975616);for(let h=0;h<=n;h+=12){let c=this.samples[h],u=t.world.ground(c.x,c.z,.1,c.y-.3),d=u?u.y:c.y-12,f=c.y-d;if(f<.3)continue;let g=new St(Ft.cyl,l);g.scale.set(.12,f,.12),g.position.set(c.x,d+f/2,c.z),i.vine||t.scene.add(g)}}let o=new We().setFromPoints(this.samples);o.expandByScalar(2),this.box=o,this.cd=0,this.sparkT=0}update(t){this.cd-=t;let e=this.game.player;if(this.cd>0||!e.alive||e.state==="rail"||e.state==="loop"||e.state==="hurt"||!this.box.containsPoint(e.pos)||e.vel.y>3)return;let i=-1,n=1.1;for(let l=0;l<=this.n;l++){let h=this.samples[l],c=h.x-e.pos.x,u=h.z-e.pos.z,d=h.y-e.pos.y;if(d>.5||d<-1)continue;let f=Math.hypot(c,u);f<n&&(n=f,i=l)}if(i<0)return;let r=i/this.n,a=this.curve.getTangentAt(r),o=e.vel.x*a.x+e.vel.z*a.z;e.state="rail",e.rail=this,e.railDist=r*this.length,e.railDir=o>=0?1:-1,e.railSpeed=Math.max(Math.abs(o),15),e.body.grounded=!1,e.usedDouble=!1,e.usedAir=!1,it.sfx("grind")}updateRider(t,e,i){let n=ye(t.railDist/this.length,0,1),r=this.curve.getTangentAt(n);t.railSpeed=ye(t.railSpeed-r.y*t.railDir*22*e,12,38),t.railDist+=t.railSpeed*t.railDir*e;let a=t.railDist/this.length,o=r.x*t.railSpeed*t.railDir,l=r.y*t.railSpeed*t.railDir,h=r.z*t.railSpeed*t.railDir;if(t.mode="grind",this.sparkT-=e,this.sparkT<=0&&(this.sparkT=.12,it.sfx("grind"),this.game.fx.burst(t.pos,2,16765578,3,.25,8)),a<=0||a>=1){t.state="normal",t.rail=null,t.body.vel.set(o,Math.max(l,2),h),t.body.grounded=!1,this.cd=.5,t.mode=t.id==="zip"?"ball":"fall";return}let c=this.curve.getPointAt(a);t.body.pos.set(c.x,c.y+.12,c.z),t.body.vel.set(o,l,h),t.facing=Math.atan2(o,h),t.obj.position.copy(t.body.pos),t.obj.rotation.set(0,t.facing,0),i.jumpPressed&&(t.state="normal",t.rail=null,t.body.vel.set(o,12,h),t.jumping=!0,t.mode=t.id==="zip"?"ball":"jump",this.cd=.4,it.sfx("jump"))}},Ua=class{constructor(t,e,i,n,r,a,o,l=9071178){this.game=t,this.alive=!0,this.origin=new E(e,i,n),this.path=o,this.t=o.phase||0,this.col=t.world.box(e-r/2,i-.6,n-a/2,e+r/2,i,n+a/2,{dynamic:!0,owner:this}),this.mesh=le(t.scene,Ft.box,F(l),e,i-.3,n,r,.6,a);let h=le(t.scene,Ft.box,F(16765503),0,.45,0,1.02,.15,1.02,!1);this.mesh.remove(h),this.mesh.add(h)}update(t){this.t+=t;let e=this.path,i=this.origin,n=i.x,r=i.y,a=i.z;if(e.type==="line"){let o=ye(((1-Math.cos(this.t/e.period*Math.PI*2))/2-.5)*1.35+.5,0,1);n+=(e.to[0]-i.x)*o,r+=(e.to[1]-i.y)*o,a+=(e.to[2]-i.z)*o}else{let o=this.t/e.period*Math.PI*2;n+=Math.cos(o)*e.radius,a+=Math.sin(o)*e.radius}this.col.moveTo(n,r,a),this.mesh.position.set(n,r-.3,a)}},Na=class{constructor(t,e,i,n,r=3,a=3,o=11569754){this.game=t,this.alive=!0,this.home=new E(e,i,n),this.w=r,this.d=a,this.col=t.world.box(e-r/2,i-.5,n-a/2,e+r/2,i,n+a/2,{dynamic:!0,owner:this}),this.mesh=le(t.scene,Ft.box,F(o),e,i-.25,n,r,.5,a),this.state="idle",this.t=0,this.vy=0,this.y=i}onLand(){this.state==="idle"&&(this.state="shake",this.t=0)}update(t){this.t+=t;let e=this.home;this.state==="shake"?(this.mesh.position.set(e.x+(Math.random()-.5)*.12,this.y-.25,e.z+(Math.random()-.5)*.12),this.t>.85&&(this.state="fall",this.t=0,this.vy=0)):this.state==="fall"?(this.vy-=25*t,this.y+=this.vy*t,this.col.moveTo(e.x,this.y,e.z),this.mesh.position.set(e.x,this.y-.25,e.z),this.t>1&&(this.col.active=!1),this.t>3.5&&(this.state="idle",this.y=e.y,this.col.active=!0,this.col.moveTo(e.x,e.y,e.z),this.col.delta.y=0,this.mesh.position.set(e.x,e.y-.25,e.z),this.game.fx.burst(e,8,16777215,3,.4,0))):this.col.delta.x=this.col.delta.y=this.col.delta.z=0}},Fa=class{constructor(t,e,i,n,r,a,o=3,l=0){this.game=t,this.alive=!0,this.period=o,this.t=l,this.col=t.world.box(e-r/2,i-.5,n-a/2,e+r/2,i,n+a/2,{dynamic:!0}),this.mesh=le(t.scene,Ft.box,F(3729663,{transparent:!0,opacity:.85,emissive:678522}),e,i-.25,n,r,.5,a)}update(t){this.t+=t;let e=this.t%this.period/this.period,i=e<.62,n=e>.45&&e<.62;this.col.active=i,this.mesh.visible=i&&!(n&&Math.floor(this.t*12)%2===0),this.mesh.material.opacity=i?.85:.2}},za=class{constructor(t,e,i,n,r=5,a=1.6,o="y"){this.game=t,this.alive=!0,this.x=e,this.y=i,this.z=n,this.n=r,this.speed=a,this.axis=o,this.t=Math.random()*6,t.world.box(e-.6,i-.6,n-.6,e+.6,i+.6,n+.6),le(t.scene,Ft.box,F(6974068),e,i,n,1.2),this.balls=[];for(let l=0;l<r;l++)this.balls.push(le(t.scene,Ft.sphereLo,F(16753178,{emissive:16733440}),e,i,n,.42,.42,.42,!1))}update(t){this.t+=t;let e=this.t*this.speed,i=this.game.player;for(let n=0;n<this.n;n++){let r=.9+n*.85,a=this.balls[n];this.axis==="y"?a.position.set(this.x+Math.cos(e)*r,this.y,this.z+Math.sin(e)*r):a.position.set(this.x+Math.cos(e)*r,this.y+Math.sin(e)*r,this.z),a.scale.setScalar(.42+Math.sin(this.t*20+n)*.05),i.alive&&qe(i,a.position.x,a.position.y,a.position.z,.38)&&i.hurt(a.position)}}},Oa=class{constructor(t,e,i,n,r,a){this.game=t,this.alive=!0,this.x=e,this.y=i,this.z=n,this.w=r,this.d=a;let o=Ft.cone,l=F(14212582),h=Math.max(1,Math.round(r/.8)),c=Math.max(1,Math.round(a/.8)),u=new en(o,l,h*c),d=0,f=new ee;for(let g=0;g<h;g++)for(let y=0;y<c;y++)f.compose(new E(e-r/2+(g+.5)*(r/h),i+.35,n-a/2+(y+.5)*(a/c)),new Ve,new E(.3,.7,.3)),u.setMatrixAt(d++,f);u.castShadow=!0,t.scene.add(u),le(t.scene,Ft.box,F(5264478),e,i+.05,n,r,.1,a)}update(){let t=this.game.player;t.alive&&Math.abs(t.pos.x-this.x)<this.w/2+.2&&Math.abs(t.pos.z-this.z)<this.d/2+.2&&t.pos.y<this.y+.7&&t.pos.y>this.y-.5&&t.hurt(new E(this.x,this.y,this.z))&&(t.body.vel.y=11)}},ka=class{constructor(t,e,i,n,r,a=3,o=0){this.game=t,this.alive=!0,this.x=e,this.z=i,this.low=n,this.high=r,this.size=a,this.t=o,this.y=r,this.state="up";let l=a;this.col=t.world.box(e-a/2,r-l,i-a/2,e+a/2,r,i+a/2,{dynamic:!0}),this.mesh=le(t.scene,Ft.box,F(16777215,{map:Ce("crusherFace")}),e,r-l/2,i,a,l,a),this.prevBottom=r-l}update(t){this.t+=t;let e=this.size,i=0;this.state==="up"?this.t>1.6&&(this.state="warn",this.t=0):this.state==="warn"?(i=.08,this.t>.45&&(this.state="down",this.t=0)):this.state==="down"?(this.y-=28*t,this.y-e<=this.low&&(this.y=this.low+e,this.state="ground",this.t=0,it.sfx("slam"),this.game.camShake(.25),this.game.fx.dust(new E(this.x,this.low,this.z),10))):this.state==="ground"?this.t>.9&&(this.state="rise",this.t=0):this.state==="rise"&&(this.y+=4*t,this.y>=this.high&&(this.y=this.high,this.state="up",this.t=0)),this.col.moveTo(this.x,this.y,this.z),this.mesh.position.set(this.x+(Math.random()-.5)*i,this.y-e/2,this.z+(Math.random()-.5)*i);let n=this.game.player,r=this.y-e;if(n.alive&&this.state==="down"&&Math.abs(n.pos.x-this.x)<this.size/2+.3&&Math.abs(n.pos.z-this.z)<this.size/2+.3&&n.pos.y+1.6>r-.2&&n.pos.y<this.prevBottom&&n.hurt(new E(this.x,n.pos.y,this.z))){let a=n.pos.x-this.x,o=n.pos.z-this.z,l=Math.hypot(a,o)||1;n.body.vel.set(a/l*12,6,o/l*12)}this.prevBottom=r}},Ba=class{constructor(t,e,i,n,r,a="x",o=1.1,l=2.6,h=0){this.game=t,this.alive=!0,this.x=e,this.y=i,this.z=n,this.L=r,this.axis=a,this.amp=o,this.period=l,this.t=h,this.pivot=new ne,this.pivot.position.set(e,i,n),t.scene.add(this.pivot);let c=new St(Ft.cyl,F(9071162));c.scale.set(.06,r,.06),c.position.y=-r/2,this.pivot.add(c);let u=new St(Ft.cyl,F(8014370));u.scale.set(.7,2.4,.7),u.position.y=-r,a==="x"?u.rotation.x=Math.PI/2:u.rotation.z=Math.PI/2,u.castShadow=!0,this.pivot.add(u);for(let d of[-1,1]){let f=new St(Ft.cone,F(14212582));f.scale.set(.25,.6,.25),f.position.set(a==="x"?d*.8:0,-r,a==="x"?0:d*.8),f.rotation.z=a==="x"?-d*Math.PI/2:0,f.rotation.x=a==="x"?0:d*Math.PI/2,this.pivot.add(f)}this.head=new E}update(t){this.t+=t;let e=Math.sin(this.t/this.period*Math.PI*2)*this.amp;this.axis==="x"?(this.pivot.rotation.z=e,this.head.set(this.x+Math.sin(e)*this.L,this.y-Math.cos(e)*this.L,this.z)):(this.pivot.rotation.x=-e,this.head.set(this.x,this.y-Math.cos(e)*this.L,this.z+Math.sin(e)*this.L));let i=this.game.player;i.alive&&qe(i,this.head.x,this.head.y,this.head.z,1)&&i.hurt(this.head)}},ai=class{constructor(t,e,i,n={}){this.game=t,this.alive=!0,this.vel=i.clone(),this.r=n.r||.35,this.life=n.life||4,this.grav=n.grav||0,this.friendly=!!n.friendly,this.bounce=!!n.bounce,this.destroyable=!!n.destroyable,this.homing=n.homing||0;let r=n.color||16742938;if(n.arrow){this.mesh=le(t.scene,Ft.cyl,F(9071162),e.x,e.y,e.z,.06,1.2,.06,!1);let a=new St(Ft.cone,F(13421772));a.scale.set(2.2,.25,2.2),a.position.y=.55,this.mesh.add(a),this.mesh.quaternion.setFromUnitVectors(new E(0,1,0),this.vel.clone().normalize())}else this.mesh=le(t.scene,Ft.sphereLo,F(r,{emissive:r}),e.x,e.y,e.z,this.r,this.r,this.r,!1);this.color=r,this.friendly&&t.player.fireballs++}targetPos(){return this.mesh.position}kill(){this.alive&&(this.alive=!1,this.game.scene.remove(this.mesh),this.friendly&&this.game.player.fireballs--,this.game.fx.burst(this.mesh.position,6,this.color,3,.3,0))}update(t){let e=this.game,i=this.mesh,n=e.player;if(this.life-=t,this.life<=0){this.kill();return}if(this.homing&&n.alive){let r=n.pos.x-i.position.x,a=n.pos.y+.8-i.position.y,o=n.pos.z-i.position.z,l=Math.hypot(r,a,o)||1,h=this.vel.length();this.vel.x+=(r/l*h-this.vel.x)*this.homing*t,this.vel.y+=(a/l*h-this.vel.y)*this.homing*t,this.vel.z+=(o/l*h-this.vel.z)*this.homing*t}if(this.vel.y-=this.grav*t,i.position.addScaledVector(this.vel,t),this.friendly){if(i.rotation.x+=t*20,this.bounce){let r=e.world.ground(i.position.x,i.position.z,.1,i.position.y+.3);r&&i.position.y-this.r<r.y&&(i.position.y=r.y+this.r,this.vel.y=7)}if(e.world.pointSolid(i.position.x,i.position.y,i.position.z)){this.kill();return}e.hitEnemiesAt(i.position,this.r+.3,"fire")&&this.kill();return}if(e.world.pointSolid(i.position.x,i.position.y,i.position.z)){this.kill();return}if(n.alive&&qe(n,i.position.x,i.position.y,i.position.z,this.r)){if(this.destroyable&&n.attackKind()){this.kill(),e.addScore(50),n.onEnemyKilled("stomp");return}n.hurt(i.position),this.kill()}}},Ha=class{constructor(t,e,i,n,r,a=2.2,o=0){this.game=t,this.alive=!0,this.pos=new E(e,i,n),this.dir=new E(r[0],0,r[2]).normalize(),this.period=a,this.t=o;let l=le(t.scene,Ft.box,F(7829338),e,i,n,1.2,1.2,1.2);le(t.scene,Ft.cyl,F(2236962),e+this.dir.x*.6,i,n+this.dir.z*.6,.25,.1,.25,!1).quaternion.setFromUnitVectors(new E(0,1,0),this.dir)}update(t){if(this.t+=t,this.t>this.period&&(this.t=0,this.game.player.pos.distanceTo(this.pos)<40)){let i=this.pos.clone().addScaledVector(this.dir,.9);this.game.spawn(new ai(this.game,i,this.dir.clone().multiplyScalar(14),{arrow:!0,r:.3,life:3}))}}},Ga=class{constructor(t,e,i,n,r=7,a=2.6,o=0){this.game=t,this.alive=!0,this.x=e,this.base=i,this.z=n,this.h=r,this.period=a,this.t=o,this.mesh=le(t.scene,Ft.sphereLo,F(16757274,{emissive:16729088}),e,i,n,.55,.55,.55,!1);for(let l of[-1,1]){let h=new St(Ft.sphereLo,ki(2228224));h.scale.set(.15,.2,.1),h.position.set(l*.2,.15,.48),this.mesh.add(h)}}update(t){this.t+=t;let e=this.t%this.period/this.period,i=e<.55,n=e/.55,r=i?this.base+Math.sin(n*Math.PI)*this.h:this.base-2;this.mesh.position.set(this.x,r,this.z),this.mesh.rotation.x=n<.5?0:Math.PI,this.mesh.visible=i,i&&Math.random()<.3&&this.game.fx.trail(this.mesh.position,16742938);let a=this.game.player;i&&a.alive&&qe(a,this.x,r,this.z,.5)&&a.hurt(this.mesh.position)}},Va=class{constructor(t,e,i,n,r,a=null,o=3064906){this.game=t,this.alive=!0,this.x=e,this.y=i,this.z=n,this.h=r,this.warp=a;let l=1.1;this.col=t.world.box(e-l,i-.5,n-l,e+l,i+r,n+l,{owner:this});let h=F(o);le(t.scene,Ft.cyl,h,e,i+r/2-.25,n,l*.92,r-.5,l*.92),le(t.scene,Ft.cyl,h,e,i+r-.3,n,l*1.08,.6,l*1.08),le(t.scene,Ft.cyl,ki(662026),e,i+r+.005,n,l*.8,.02,l*.8,!1),this.t=0}update(t,e){if(!this.warp)return;let i=this.game.player,n=i.alive&&i.body.grounded&&i.body.ground===this.col&&i.state==="normal";n&&this.game.hint("Toque em ATAQUE para entrar no cano",.1),n&&(e.attackPressed||e.moveY<-.8)&&(e.attackPressed=!1,this.game.warpPlayer(new E(this.x,this.y+this.h,this.z),this.warp))}},Wa=class{constructor(t,e,i,n,r,a=13130751){this.game=t,this.alive=!0,this.x=e,this.y=i,this.z=n,this.target=r,this.ring=le(t.scene,Ft.torus,F(a,{emissive:a}),e,i+1.6,n,1.4,1.4,1.4,!1),this.disc=le(t.scene,new ui(1.3,20),ki(a,{transparent:!0,opacity:.45,side:Ie}),e,i+1.6,n,1,1,1,!1),this.t=0,this.cd=0}update(t){this.t+=t,this.cd-=t,this.ring.rotation.y=this.t*1.5,this.disc.rotation.y=this.t*1.5,this.disc.material.opacity=.35+Math.sin(this.t*5)*.15;let e=this.game.player;this.cd<=0&&e.alive&&qe(e,this.x,this.y+1.2,this.z,1)&&(this.cd=1.5,it.sfx("portal"),this.game.fx.burst(e.center(),20,13130751,6,.6,0),e.body.pos.set(this.target[0],this.target[1],this.target[2]),e.body.vel.set(0,4,0),e.body.grounded=!1,this.target[3]!==void 0&&(e.facing=this.target[3],this.game.cam.snapBehind(e.facing)),this.game.fx.burst(e.center(),20,13130751,6,.6,0))}},Xa=class{constructor(t,e,i,n,r,a,o){this.game=t,this.alive=!0,this.min=new E(e-r/2,i,n-o/2),this.max=new E(e+r/2,i+a,n+o/2);let l=le(t.scene,Ft.box,ki(10120191,{transparent:!0,opacity:.12,depthWrite:!1}),e,i+a/2,n,r,a,o,!1);this.t=0}update(t){this.t+=t;let e=this.game.player,i=e.pos;if(i.x>this.min.x&&i.x<this.max.x&&i.z>this.min.z&&i.z<this.max.z&&i.y>this.min.y-1&&i.y<this.max.y&&(e.lowGravity=.15),Math.random()<.3){let n=this.min.x+Math.random()*(this.max.x-this.min.x),r=this.min.z+Math.random()*(this.max.z-this.min.z);this.game.fx.small.emit(n,this.min.y,r,0,3+Math.random()*3,0,11832575,2,0)}}},qa=class{constructor(t,e,i,n,r){this.game=t,this.alive=!0,this.x=e,this.z=i,this.r=n,this.text=r,this.shown=0}update(t){let e=this.game.player.pos;Math.hypot(e.x-this.x,e.z-this.z)<this.r&&this.game.hint(this.text,.2)}},Ya=class{constructor(t,e,i,n,r=0){this.game=t,this.alive=!0,this.x=e,this.y=i,this.z=n,this.yaw=r,this.active=!1,le(t.scene,Ft.cyl,F(3817295),e,i+1.2,n,.1,2.4,.1),le(t.scene,Ft.cyl,F(2764607),e,i+.08,n,.4,.16,.4),this.head=le(t.scene,Ft.sphere,F(2785279,{emissive:4403}),e,i+2.6,n,.32),this.t=0}update(t){this.t+=t,this.active&&(this.head.rotation.y+=t*6);let e=this.game.player;!this.active&&e.alive&&Math.abs(e.pos.z-this.z)<1.6&&Math.abs(e.pos.x-this.x)<11&&Math.abs(e.pos.y-this.y)<5&&(this.active=!0,this.head.material=F(16726586,{emissive:6688784}),this.game.setCheckpoint(new E(this.x,this.y+.1,this.z),this.yaw),this.game.fx.burst(this.head.position,20,16769126,5,.7,2),it.sfx("checkpoint"))}},ps=class{constructor(t,e,i,n,r="sign",a=0){if(this.game=t,this.alive=!0,this.x=e,this.y=i,this.z=n,this.type=r,this.done=!1,this.t=0,this.group=new ne,this.group.position.set(e,i,n),this.group.rotation.y=a,t.scene.add(this.group),r==="sign"){let o=new St(Ft.cyl,F(6975616));o.scale.set(.12,2.6,.12),o.position.y=1.3,this.group.add(o),this.panel=new ne,this.panel.position.y=3.4,this.group.add(this.panel);let l=new St(new ui(1.1,24),F(16777215,{map:Ce("sign")}));l.position.z=.06,this.panel.add(l);let h=new St(new ui(1.1,24),F(16777215,{map:Ce("signBack")}));h.rotation.y=Math.PI,h.position.z=-.06,this.panel.add(h);let c=new St(Ft.torus,F(6975616));c.scale.set(1.12,1.12,.4),this.panel.add(c)}else if(r==="flag"){let o=new St(Ft.cyl,F(14673646));o.scale.set(.12,11,.12),o.position.y=5.5,this.group.add(o);let l=new St(Ft.sphere,F(3064906));l.scale.setScalar(.35),l.position.y=11.1,this.group.add(l),this.flag=new St(new zi(1.8,1.3),F(16777215,{map:Ce("flag"),side:Ie})),this.flag.position.set(.95,10.2,0),this.group.add(this.flag);let h=new St(Ft.box,F(10119738));h.scale.set(1.5,1.5,1.5),h.position.y=.75,this.group.add(h),t.world.box(e-.75,i,n-.75,e+.75,i+1.5,n+.75)}else r==="ring"?(this.ring=new St(Ft.torus,F(16763938,{emissive:10053120})),this.ring.scale.set(2.2,2.2,2.2),this.ring.position.y=3,this.group.add(this.ring)):r==="star"&&(this.ring=new St($s,F(16765503,{emissive:11171584})),this.ring.scale.setScalar(3),this.ring.position.y=2.5,this.group.add(this.ring));this.group.traverse(o=>{o.isMesh&&(o.castShadow=!0)})}update(t){this.t+=t;let e=this.game.player;if((this.type==="ring"||this.type==="star")&&(this.ring.rotation.y+=t*2,this.game.fx.sparkle(new E(this.x,this.y+2.8,this.z))),this.panel&&(this.panel.rotation.y+=this.done?t*Math.max(0,25-this.t*8):0),this.flag&&this.done&&(this.flag.position.y=Math.max(1.8,this.flag.position.y-t*8)),this.done||!e.alive)return;let i=!1,n=0,r=Math.abs(e.pos.z-this.z)<1.4&&Math.abs(e.pos.x-this.x)<10&&e.pos.y>this.y-3&&e.pos.y<this.y+13;this.type==="flag"?r&&(i=!0,n=Math.abs(e.pos.x-this.x)<2.5?Math.round(ye((e.pos.y-this.y)/10,0,1)*4)*1e3+500:300):this.type==="star"?qe(e,this.x,this.y+2.5,this.z,2.2)&&(i=!0):r&&(i=!0),i&&(this.done=!0,this.t=0,this.game.win(n))}},$a=class{constructor(t,e,i,n,r){this.game=t,this.alive=!0,this.idx=r,this.x=e,this.y=i,this.z=n,this.mesh=xa(),this.mesh.position.set(e,i,n),t.scene.add(this.mesh),this.t=Math.random()*6,t.medals[r]&&this.mesh.traverse(a=>{a.isMesh&&(a.material=a.material.clone(),a.material.transparent=!0,a.material.opacity=.35)})}update(t){this.t+=t,this.mesh.rotation.y+=t*2.5,this.mesh.position.y=this.y+Math.sin(this.t*2)*.2,Math.random()<.15&&this.game.fx.sparkle(this.mesh.position,16773800);let e=this.game.player;e.alive&&qe(e,this.x,this.y,this.z,.9)&&(this.alive=!1,this.game.scene.remove(this.mesh),this.game.collectMedal(this.idx,this.mesh.position))}};function Kl(s,t=!1){let e=s[0].index!==null,i=new Set(Object.keys(s[0].attributes)),n=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new ce,h=0;for(let c=0;c<s.length;++c){let u=s[c],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,f,c),h+=f}}if(e){let c=0,u=[];for(let d=0;d<s.length;++d){let f=s[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+c);c+=s[d].attributes.position.count}l.setIndex(u)}for(let c in r){let u=Su(r[c]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,u)}for(let c in a){let u=a[c][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let d=0;d<u;++d){let f=[];for(let y=0;y<a[c].length;++y)f.push(a[c][y][d]);let g=Su(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(g)}}return l}function Su(s){let t,e,i,n=-1,r=0;for(let h=0;h<s.length;++h){let c=s[h];if(t===void 0&&(t=c.array.constructor),t!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=c.itemSize),e!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=c.normalized),i!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=c.gpuType),n!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=c.count*e}let a=new t(r),o=new _e(a,e,i),l=0;for(let h=0;h<s.length;++h){let c=s[h];if(c.isInterleavedBufferAttribute){let u=l/e;for(let d=0,f=c.count;d<f;d++)for(let g=0;g<e;g++){let y=c.getComponent(d,g);o.setComponent(d+u,g,y)}}else a.set(c.array,l);l+=c.count*e}return n!==void 0&&(o.gpuType=n),o}var Eu={walker:!0,firewalker:!0,beetle:!0,buzzer:!0,drone:!0,spiny:!1,plant:!1},ms=class{constructor(t,e,i,n,r,a={}){this.game=t,this.type=e,this.alive=!0,this.dying=0,this.mesh=gu(e),this.mesh.position.set(i,n,r),t.scene.add(this.mesh),this.pos=this.mesh.position,this.home=new E(i,n,r),this.vy=0,this.r=this.mesh.radius||.6,this.h=this.mesh.height||1,this.patrol=a.patrol!==void 0?a.patrol:4,this.axis=a.axis||"x",this.dir=1,this.speed=a.speed||(e==="spiny"?1.6:e==="beetle"?2.6:2.2),this.chase=a.chase!==void 0?a.chase:e==="walker"||e==="beetle"||e==="firewalker",this.yaw=0,this.t=Math.random()*10,this.state="patrol",this.stateT=0,this.shootT=1+Math.random()*2,this.flying=e==="buzzer"||e==="drone",this.hoverY=n,this.pipe=!!a.pipe}targetPos(){return new E(this.pos.x,this.pos.y+(this.flying?0:this.h*.5),this.pos.z)}kill(t="hit"){if(!this.alive||this.dying)return;let e=this.game;this.dying=.001,t==="stomp"?(it.sfx("stomp"),this.squash=!0):(it.sfx("kill"),e.fx.explosion(this.targetPos(),.45));let i=e.player.onEnemyKilled(t);e.addScore(i,this.targetPos()),e.fx.burst(this.targetPos(),10,16777215,5,.5,4),e.settings.vibration&&e.vibrate(30)}checkPlayer(){let t=this.game,e=t.player;if(!e.alive||this.dying||this.type==="plant"&&this.emerge<.3)return;let i=this.targetPos(),n=e.hitSphere();if(n&&Math.hypot(n.x-i.x,n.y-i.y,n.z-i.z)<n.r+this.r){this.kill("hit");return}if(!qe(e,i.x,i.y,i.z,this.r*.85))return;let r=e.attackKind(),a=e.vel.y<0&&e.pos.y>i.y-this.h*.15;if(r==="star"||r==="strong"||r==="pound"||r==="spin"){this.kill(r==="pound"?"stomp":"hit");return}if(r==="ball"){if(!Eu[this.type]){e.hurt(i),e.body.vel.y<6&&(e.body.vel.y=8);return}this.kill(a?"stomp":"hit"),a||e.bounce(7);return}if(a&&Eu[this.type]){this.kill("stomp");return}if(a&&this.type==="spiny"){e.hurt(i),e.body.vel.y=9;return}e.hurt(i)}groundAt(t,e,i){return this.game.world.ground(t,e,.2,i)}update(t){let e=this.game,i=e.player;if(this.t+=t,this.stateT+=t,this.dying){this.dying+=t,this.squash?this.mesh.scale.set(1.3,Math.max(.15,1-this.dying*4),1.3):(this.mesh.scale.multiplyScalar(.85),this.pos.y+=t*3),this.dying>.4&&(this.alive=!1,e.scene.remove(this.mesh));return}let n=i.pos.x-this.pos.x,r=i.pos.z-this.pos.z,a=Math.hypot(n,r);a>70||(this.type==="plant"?this.updatePlant(t,a):this.flying?this.updateFlyer(t,a,n,r):this.updateWalker(t,a,n,r),this.checkPlayer())}updateWalker(t,e,i,n){let r=this.game,a=r.player,o=this.pos,l=0,h=0,c=this.speed,u=Math.abs(a.pos.y-o.y);if(this.type==="beetle"&&(this.state==="patrol"&&e<11&&u<2.5&&a.alive&&(this.state="aim",this.stateT=0),this.state==="aim"?(this.yaw=Si(this.yaw,Math.atan2(i,n),10,t),this.stateT>.5&&(this.state="charge",this.stateT=0,this.cx=Math.sin(this.yaw),this.cz=Math.cos(this.yaw))):this.state==="charge"?(l=this.cx,h=this.cz,c=8,this.stateT>1.3&&(this.state="cool",this.stateT=0)):this.state==="cool"&&this.stateT>1.2&&(this.state="patrol",this.stateT=0)),this.state==="patrol"){if(this.chase&&e<9&&u<2&&a.alive)l=i/(e||1),h=n/(e||1),c=this.speed*1.6;else if(this.patrol>0){let y=this.axis==="x"?o.x-this.home.x:o.z-this.home.z;y>this.patrol?this.dir=-1:y<-this.patrol&&(this.dir=1),this.axis==="x"?l=this.dir:h=this.dir}}if(l||h){let y=o.x+l*c*t,m=o.z+h*c*t,p=this.groundAt(o.x+l*.8,o.z+h*.8,o.y+.5),b=r.world.pointSolid(o.x+l*(this.r+.1),o.y+.5,o.z+h*(this.r+.1));p&&p.y>o.y-.8&&!b?(o.x=y,o.z=m):(this.dir*=-1,this.state==="charge"&&(this.state="cool",this.stateT=0)),this.yaw=Si(this.yaw,Math.atan2(l,h),8,t)}let d=this.groundAt(o.x,o.z,o.y+.5);if(d&&o.y-d.y<.6?(o.y=d.y,this.vy=0,d.c.dynamic&&(o.x+=d.c.delta.x,o.z+=d.c.delta.z,o.y=d.c.topAt(o.x,o.z))):(this.vy-=30*t,o.y+=this.vy*t,d&&o.y<d.y&&(o.y=d.y,this.vy=0)),o.y<this.game.killY){this.alive=!1,this.game.scene.remove(this.mesh);return}this.mesh.rotation.y=this.yaw;let f=this.mesh.parts,g=l||h;if(f.footL){let y=g?Math.sin(this.t*14)*.15:0;f.footL.position.z=.05+y,f.footR.position.z=.05-y,this.mesh.rotation.z=g?Math.sin(this.t*14)*.08:0}f.wheel&&(f.wheel.rotation.x+=t*c*4*(g?1:0)),this.type==="spiny"&&(this.mesh.children[0].rotation.y+=t),this.state==="aim"&&(this.mesh.position.y=o.y+Math.abs(Math.sin(this.t*30))*.1)}updateFlyer(t,e,i,n){let r=this.game,a=r.player,o=this.pos,l=this.type==="drone",h=this.mesh.parts;if(h.wingL.rotation.z=Math.sin(this.t*40)*.5,h.wingR.rotation.z=-Math.sin(this.t*40)*.5,l&&this.state==="dash"){o.addScaledVector(this.dashV,t),this.stateT>.8&&(this.state="patrol",this.stateT=0,this.home.copy(o),this.hoverY=o.y);return}let c=Math.sin(this.t*.8)*this.patrol,u=this.home.x+(this.axis==="x"?c:0),d=this.home.z+(this.axis==="z"?c:0);if(e<14&&a.alive&&(u=this.home.x+ye(a.pos.x-this.home.x,-6,6),d=this.home.z+ye(a.pos.z-this.home.z,-6,6)),o.x+=(u-o.x)*Math.min(1,t*1.5),o.z+=(d-o.z)*Math.min(1,t*1.5),o.y=this.hoverY+Math.sin(this.t*2.5)*.4,this.mesh.rotation.y=Si(this.mesh.rotation.y,Math.atan2(i,n),5,t),this.shootT-=t,e<16&&a.alive&&this.shootT<=0)if(this.shootT=l?2.6:3.2,l&&Math.random()<.5){let f=new E(a.pos.x-o.x,a.pos.y+.8-o.y,a.pos.z-o.z).normalize();this.dashV=f.multiplyScalar(14),this.state="dash",this.stateT=0,it.sfx("homing")}else{let f=o.clone();f.y-=.3;let g=new E(a.pos.x-f.x,a.pos.y+.8-f.y,a.pos.z-f.z).normalize().multiplyScalar(9);r.spawn(new ai(r,f,g,{color:l?16727538:16734746,r:.28,life:3,destroyable:!0})),it.sfx("fireball")}}updatePlant(t,e){let i=this.game,n=i.player,r=this.t%5,a;r<1.2?a=0:r<1.8?a=(r-1.2)/.6:r<4?a=1:r<4.6?a=1-(r-4)/.6:a=0,this.pipe&&e<3&&a===0&&(a=0),this.emerge=a,this.mesh.position.y=this.home.y-(1-a)*2.2,this.mesh.visible=a>.02;let o=this.mesh.parts.head;if(o.rotation.y=Math.atan2(n.pos.x-this.pos.x,n.pos.z-this.pos.z),this.mesh.parts.jaw.rotation.x=Math.PI+Math.abs(Math.sin(this.t*6))*.5,a===1&&!this.shot&&r>2.6&&e<20&&n.alive){this.shot=!0;let l=new E(this.pos.x,this.pos.y+1.5,this.pos.z),h=new E(n.pos.x-l.x,n.pos.y+.8-l.y,n.pos.z-l.z).normalize().multiplyScalar(8);i.spawn(new ai(i,l,h,{color:16734746,r:.3,life:3})),it.sfx("fireball")}r<1&&(this.shot=!1)}};var Za=class{constructor(t,e,i,n,r=11,a=18){this.game=t,this.alive=!0,this.x=e,this.y=i,this.z=n,this.r=.5,this.speed=r,this.maxR=a,this.mesh=new St(new bn(1,.18,6,48),F(16753178,{emissive:16733440,transparent:!0,opacity:.9})),this.mesh.rotation.x=Math.PI/2,this.mesh.position.set(e,i+.25,n),t.scene.add(this.mesh)}update(t){this.r+=this.speed*t,this.mesh.scale.set(this.r,this.r,1.4),this.mesh.material.opacity=Math.max(0,1-this.r/this.maxR);let e=this.game.player,i=Math.hypot(e.pos.x-this.x,e.pos.z-this.z);e.alive&&Math.abs(i-this.r)<.6&&e.pos.y<this.y+.5&&e.hurt(new E(this.x,this.y,this.z)),this.r>this.maxR&&(this.alive=!1,this.game.scene.remove(this.mesh))}},Ks=class{constructor(t,e,i,n,r,a,o){this.game=t,this.alive=!0,this.t=0,this.delay=a,this.onImpact=o,this.x=e,this.y=i,this.z=n,this.r=r,this.mesh=new St(new aa(r*.8,r,24),ki(16722474,{transparent:!0,opacity:.6,side:Ie,depthWrite:!1})),this.mesh.rotation.x=-Math.PI/2,this.mesh.position.set(e,i+.05,n),t.scene.add(this.mesh)}update(t){this.t+=t,this.mesh.material.opacity=.3+Math.abs(Math.sin(this.t*12))*.5,this.t>=this.delay&&(this.alive=!1,this.game.scene.remove(this.mesh),this.onImpact(this))}},Ql=class{constructor(t,e,i,n,r){this.game=t,this.alive=!0,this.x=e,this.z=n,this.gy=r,this.mesh=new St(Ft.sphereLo,F(16738858,{emissive:11149824})),this.mesh.scale.setScalar(.8),this.mesh.position.set(e,i,n),t.scene.add(this.mesh)}update(t){if(this.mesh.position.y-=30*t,Math.random()<.6&&this.game.fx.trail(this.mesh.position,16742938),this.mesh.position.y<=this.gy){this.alive=!1,this.game.scene.remove(this.mesh),this.game.fx.explosion(this.mesh.position,.7),it.sfx("explode");let e=this.game.player;e.alive&&Math.hypot(e.pos.x-this.x,e.pos.z-this.z)<1.8&&e.pos.y<this.gy+2&&e.hurt(this.mesh.position)}}},Ja=class{constructor(t,e,i,n,r,a,o){this.game=t,this.type=e,this.alive=!0,this.active=!1,this.name=a,this.c=new E(i,n,r),this.hp=o,this.maxHp=o,this.mesh=xu(e),this.mesh.position.set(i,n,r+8),t.scene.add(this.mesh),this.pos=this.mesh.position,this.state="wait",this.t=0,this.inv=0,this.yaw=Math.PI,this.flash=0,this.defeated=!1}targetPos(){return new E(this.pos.x,this.pos.y+this.mesh.height*.6,this.pos.z)}get vulnerable(){return!1}get homingOk(){return this.vulnerable&&this.inv<=0}start(){this.active||(this.active=!0,this.state="intro",this.t=0,this.game.bossBar(this.name,this.hp,this.maxHp),it.playMusic("boss"),it.sfx("roar"),this.game.camShake(.5))}setState(t){this.state=t,this.t=0,this.inited=!1}takeHit(t=1){if(this.inv>0||this.defeated)return!1;let e=this.game;return this.hp=Math.max(0,this.hp-t),this.inv=1,this.flash=.6,it.sfx("bosshit"),e.camShake(.4),e.addScore(500,this.targetPos()),e.fx.burst(this.targetPos(),25,16777215,8,.6,4),e.bossBar(this.name,this.hp,this.maxHp),this.hp<=0?(this.defeated=!0,this.setState("dying"),it.stopMusic(),e.clearHazards(),this.laser&&(this.laser.visible=!1)):this.onHurt(),!0}onHurt(){}checkPlayer(){let t=this.game,e=t.player;if(!e.alive||this.defeated)return;let i=this.targetPos(),n=this.mesh.radius,r=e.hitSphere();if(r&&this.vulnerable&&Math.hypot(r.x-i.x,r.y-i.y,r.z-i.z)<r.r+n){this.takeHit();return}if(!qe(e,i.x,i.y,i.z,n))return;let a=e.attackKind(),o=e.vel.y<0&&e.pos.y>i.y-n*.5,l=e.pos.x-i.x,h=e.pos.z-i.z,c=Math.hypot(l,h)||1;this.vulnerable?(a||o)&&this.takeHit()?(e.state="normal",e.hurtTime=Math.max(e.hurtTime,.9),e.bounce(12),e.body.vel.x=l/c*9,e.body.vel.z=h/c*9):!a&&!o&&(e.body.vel.x+=l/c*2,e.body.vel.z+=h/c*2):(e.hurt(i),e.alive&&(e.body.vel.x=l/c*12,e.body.vel.z=h/c*12))}fireHit(){this.vulnerable?this.takeHit():it.sfx("bump")}dyingUpdate(t){let e=this.game;if(this.mesh.position.x+=(Math.random()-.5)*.2,Math.random()<t*10){let i=this.targetPos().add(new E((Math.random()-.5)*4,(Math.random()-.5)*3,(Math.random()-.5)*4));e.fx.explosion(i,.8),it.sfx("explode")}this.t>2.6&&(e.fx.explosion(this.targetPos(),2.5),it.sfx("explode"),this.alive=!1,e.scene.remove(this.mesh),e.onBossDefeated(this))}playerDist(){let t=this.game.player.pos;return Math.hypot(t.x-this.pos.x,t.z-this.pos.z)}},ja=class extends Ja{constructor(t,e,i,n,r){super(t,"magmor",e,i,n,"REI MAGMOR",6),this.R=r,this.next=0,this.stars=new ne;for(let a=0;a<3;a++){let o=new St(Ft.sphereLo,F(16772693,{emissive:8943360}));o.scale.setScalar(.25),this.stars.add(o)}this.stars.visible=!1,t.scene.add(this.stars)}get vulnerable(){return this.state==="stunned"}onHurt(){this.setState("recover")}update(t){let e=this.game,i=e.player;if(this.t+=t,this.inv>0&&(this.inv-=t),this.flash>0&&(this.flash-=t),this.mesh.visible=!(this.flash>0&&Math.floor(this.flash*20)%2===0),!this.active)return;let n=this.mesh.parts,r=this.hp<=3,a=Math.atan2(i.pos.x-this.pos.x,i.pos.z-this.pos.z);if(this.stars.visible=this.state==="stunned",this.state==="dying"){this.dyingUpdate(t);return}switch(this.state){case"intro":n.head.rotation.x=-.4+Math.sin(this.t*20)*.1,this.t>1.8&&this.setState("walk");break;case"walk":{this.yaw=Si(this.yaw,a,3,t);let c=r?5.5:3.8;this.playerDist()>5&&(this.pos.x+=Math.sin(this.yaw)*c*t,this.pos.z+=Math.cos(this.yaw)*c*t),this.walkAnim(t,1),this.t>(r?1.4:2.2)&&this.setState(Math.random()<.45?"breath":"jump");break}case"breath":if(this.yaw=Si(this.yaw,a,4,t),n.head.rotation.x=-.3,n.jaw.position.y=-.45-Math.min(.3,this.t*.6),this.t>.7&&!this.fired){this.fired=!0;let c=r?7:5;for(let u=0;u<c;u++){let d=this.yaw+(u-(c-1)/2)*.22,f=new E(this.pos.x+Math.sin(this.yaw)*2.8,this.c.y+1,this.pos.z+Math.cos(this.yaw)*2.8);e.spawn(new ai(e,f,new E(Math.sin(d)*11,0,Math.cos(d)*11),{color:16738842,r:.55,life:3}))}it.sfx("roar")}this.t>1.6&&(this.fired=!1,n.jaw.position.y=-.45,this.setState("jump"));break;case"jump":{if(!this.inited){this.inited=!0,this.jumpFrom=this.pos.clone();let d=i.pos.x,f=i.pos.z,g=Math.hypot(d-this.c.x,f-this.c.z),y=g>this.R-3?(this.R-3)/g:1;this.jumpTo=new E(this.c.x+(d-this.c.x)*y,this.c.y,this.c.z+(f-this.c.z)*y),this.tele=new Ks(e,this.jumpTo.x,this.c.y,this.jumpTo.z,3,1.1,()=>{}),e.spawn(this.tele)}let c=1.1,u=ye(this.t/c,0,1);this.pos.x=this.jumpFrom.x+(this.jumpTo.x-this.jumpFrom.x)*u,this.pos.z=this.jumpFrom.z+(this.jumpTo.z-this.jumpFrom.z)*u,this.pos.y=this.c.y+Math.sin(u*Math.PI)*9,this.yaw=Si(this.yaw,a,3,t),u>=1&&(this.pos.y=this.c.y,it.sfx("slam"),e.camShake(.6),e.fx.dust(this.pos,16),e.spawn(new Za(e,this.pos.x,this.c.y,this.pos.z,r?14:10,this.R+2)),this.setState("stunned"));break}case"stunned":n.head.rotation.x=.5+Math.sin(this.t*3)*.05,this.stars.position.set(this.pos.x+Math.sin(this.yaw)*1.8,this.c.y+4.3,this.pos.z+Math.cos(this.yaw)*1.8),this.stars.children.forEach((c,u)=>c.position.set(Math.cos(this.t*4+u*2.1)*.9,0,Math.sin(this.t*4+u*2.1)*.9)),this.t>(r?2.2:2.8)&&this.setState("walk");break;case"recover":n.head.rotation.x=-.5,this.t>.8&&(it.sfx("roar"),this.setState(Math.random()<.5?"breath":"jump"));break;default:break}let o=this.pos.x-this.c.x,l=this.pos.z-this.c.z,h=Math.hypot(o,l);h>this.R-2.5&&(this.pos.x=this.c.x+o/h*(this.R-2.5),this.pos.z=this.c.z+l/h*(this.R-2.5)),this.mesh.rotation.y=this.yaw,this.state!=="stunned"&&this.state!=="recover"&&(n.head.rotation.x*=.9),this.checkPlayer()}walkAnim(t,e){let i=this.mesh.parts,n=Math.sin(this.t*6*e)*.4;i.legLF.rotation.x=n,i.legRB.rotation.x=n,i.legRF.rotation.x=-n,i.legLB.rotation.x=-n,i.torso.position.y=2.2+Math.abs(Math.sin(this.t*6))*.12}},Ka=class extends Ja{constructor(t,e,i,n,r){super(t,"vortex",e,i,n,"IMPERADOR V\xD3RTEX",10),this.R=r,this.pos.set(e,i+8,n),this.laser=new St(Ft.box,F(16727538,{emissive:16711884,transparent:!0,opacity:.85})),this.laser.visible=!1,t.scene.add(this.laser),this.angle=0,this.cycle=0}get phase(){return this.hp>6?1:this.hp>3?2:3}get vulnerable(){return this.state==="exposed"}onHurt(){this.setState("rise")}update(t){let e=this.game,i=e.player;if(this.t+=t,this.inv>0&&(this.inv-=t),this.flash>0&&(this.flash-=t),this.mesh.visible=!(this.flash>0&&Math.floor(this.flash*20)%2===0),!this.active){this.mesh.parts.hull.rotation.y+=t*.5;return}let n=this.mesh.parts;if(n.hull.rotation.y+=t*(this.state==="exposed"?.3:1.5),n.core.material.emissive.setHex(this.state==="exposed"?16777215:11141290),n.core.scale.setScalar(this.state==="exposed"?.9+Math.sin(this.t*12)*.1:.7),this.state==="dying"){this.pos.y-=t*1.5,this.dyingUpdate(t);return}let r=this.c.y+7;switch(this.state){case"intro":this.pos.y=r+Math.sin(this.t*2)*.5,this.t>2&&this.setState("float");break;case"float":{this.angle+=t*(.5+this.phase*.15);let a=this.c.x+Math.cos(this.angle)*this.R*.55,o=this.c.z+Math.sin(this.angle)*this.R*.55;if(this.pos.x+=(a-this.pos.x)*Math.min(1,t*1.5),this.pos.z+=(o-this.pos.z)*Math.min(1,t*1.5),this.pos.y+=(r+Math.sin(this.t*2)*.6-this.pos.y)*Math.min(1,t*2),this.t>2.4-this.phase*.3){this.cycle++;let l=["orbs","slam"];this.phase>=2&&l.push("laser","drones"),this.phase>=3&&l.push("meteors");let h=l[Math.floor(Math.random()*l.length)];this.cycle%2===0&&(h="slam"),h==="drones"&&e.enemies.filter(c=>c.alive&&c.type==="drone").length>=2&&(h="orbs"),this.setState(h)}break}case"orbs":if(this.t>.4&&!this.fired){this.fired=!0;let a=2+this.phase;for(let o=0;o<a;o++){let l=o/a*Math.PI*2,h=new E(Math.cos(l)*6,-1,Math.sin(l)*6);e.spawn(new ai(e,this.pos.clone(),h,{color:16727538,r:.45,life:6,homing:1.1,destroyable:!0}))}it.sfx("laser")}this.t>1.4&&(this.fired=!1,this.setState("float"));break;case"slam":{if(!this.inited){this.inited=!0,this.slamTo=new E(i.pos.x,this.c.y,i.pos.z);let a=this.slamTo.x-this.c.x,o=this.slamTo.z-this.c.z,l=Math.hypot(a,o),h=this.R-3.5;l>h&&(this.slamTo.x=this.c.x+a/l*h,this.slamTo.z=this.c.z+o/l*h),e.spawn(new Ks(e,this.slamTo.x,this.c.y,this.slamTo.z,3.2,1.3,()=>{}))}this.t<1?(this.pos.x+=(this.slamTo.x-this.pos.x)*Math.min(1,t*4),this.pos.z+=(this.slamTo.z-this.pos.z)*Math.min(1,t*4)):(this.pos.y-=t*30,this.pos.y<=this.c.y+1.2&&(this.pos.y=this.c.y+1.2,it.sfx("slam"),e.camShake(.6),e.fx.dust(new E(this.pos.x,this.c.y,this.pos.z),16),e.spawn(new Za(e,this.pos.x,this.c.y,this.pos.z,9+this.phase*2,this.R+2)),this.setState("exposed")));break}case"exposed":this.t>3.2-this.phase*.3&&this.setState("rise");break;case"rise":this.pos.y+=t*6,this.pos.y>r&&this.setState("float");break;case"laser":{this.inited||(this.inited=!0,this.laserFrom=this.pos.clone(),it.sfx("laser"));let a=4.5,o=Math.min(1,this.t/.8);if(this.pos.x+=(this.c.x-this.pos.x)*Math.min(1,t*3),this.pos.z+=(this.c.z-this.pos.z)*Math.min(1,t*3),this.pos.y=r+(this.c.y+2.5-r)*o,this.t>1&&this.t<a){let l=(this.t-1)*(1.3+this.phase*.2),h=this.R+2;this.laser.visible=!0,this.laser.scale.set(.35,.35,h),this.laser.position.set(this.pos.x+Math.sin(l)*h/2,this.c.y+.55,this.pos.z+Math.cos(l)*h/2),this.laser.rotation.set(0,l,0);let c=i.pos.x-this.pos.x,u=i.pos.z-this.pos.z,d=c*Math.sin(l)+u*Math.cos(l),f=Math.abs(c*Math.cos(l)-u*Math.sin(l));i.alive&&d>0&&d<h&&f<.6&&i.pos.y<this.c.y+.9&&i.hurt(i.pos.clone().sub(new E(Math.sin(l+1.57),0,Math.cos(l+1.57)))),Math.random()<.5&&e.fx.sparkle(this.laser.position,16727538)}this.t>a&&(this.laser.visible=!1,this.setState("rise"));break}case"drones":if(this.t>.5&&!this.fired){this.fired=!0;for(let a of[-1,1]){let o=new ms(e,"drone",this.pos.x+a*4,this.c.y+3,this.pos.z,{patrol:3});e.addEnemy(o),e.fx.burst(o.pos,15,8011007,5,.5,0)}it.sfx("portal")}this.t>1.2&&(this.fired=!1,this.setState("float"));break;case"meteors":if(!this.inited){this.inited=!0;for(let a=0;a<7;a++){let o=Math.random()*Math.PI*2,l=Math.random()*5,h=a===0?i.pos.x:i.pos.x+Math.cos(o)*l,c=a===0?i.pos.z:i.pos.z+Math.sin(o)*l;Math.hypot(h-this.c.x,c-this.c.z)>this.R-1||e.spawn(new Ks(e,h,this.c.y,c,1.8,1.2+a*.15,d=>e.spawn(new Ql(e,d.x,this.c.y+20,d.z,this.c.y))))}it.sfx("roar")}this.t>2.6&&this.setState("float");break;default:break}this.checkPlayer()}},Qa=class{constructor(t,e,i,n,r,a,o){this.game=t,this.alive=!0,this.boss=e,this.c=new E(i,n,r),this.R=a,this.gate=o,this.closed=!1}update(){let t=this.game.player;if(this.closed||!t.alive)return;if(Math.hypot(t.pos.x-this.c.x,t.pos.z-this.c.z)<this.R-3&&Math.abs(t.pos.y-this.c.y)<3){if(this.closed=!0,this.gate){let[i,n,r,a]=this.gate;this.game.world.box(i-r/2,this.c.y,n-a/2,i+r/2,this.c.y+12,n+a/2);let o=new St(Ft.box,F(4211791));o.scale.set(r,6,a),o.position.set(i,this.c.y+3,n),this.game.scene.add(o)}this.game.setCheckpoint(t.pos.clone(),Math.atan2(this.c.x-t.pos.x,this.c.z-t.pos.z),!0),this.game.message(this.boss.name+"!","#ff5a3a"),this.boss.start()}}};var to=class{constructor(){this.pos=[],this.nor=[],this.uv=[],this.idx=[]}quad(t,e,i,n,r,a){let o=new E().subVectors(e,t),l=new E().subVectors(i,t),h=new E().crossVectors(o,l).normalize();if(h.dot(r)<0){let u=e;e=n,n=u,h.negate()}let c=this.pos.length/3;for(let u of[t,e,i,n]){this.pos.push(u.x,u.y,u.z),this.nor.push(h.x,h.y,h.z);let[d,f]=a(u);this.uv.push(d,f)}this.idx.push(c,c+1,c+2,c,c+2,c+3)}geometry(){let t=new ce;return t.setAttribute("position",new Gt(this.pos,3)),t.setAttribute("normal",new Gt(this.nor,3)),t.setAttribute("uv",new Gt(this.uv,2)),t.setIndex(this.idx),t.computeBoundingSphere(),t}},rt=(s,t,e)=>new E(s,t,e),ie=4,Qt={sphere:new Mn(1,1),sphere0:new Mn(1,0),cyl:new gi(1,1,1,7),cone:new nn(1,1,7),box:new Fi(1,1,1),oct:new ra(1,0),hemi:new Oi(1,10,5,0,Math.PI*2,0,Math.PI/2)};for(let s in Qt)Qt[s].deleteAttribute("uv");var eo=class{constructor(t,e){this.g=t,this.world=t.world,this.scene=t.scene,this.theme=e,this.style=e.ground,this.buffers={},this.deco=[],this.cloudGeos=[],this.rand=Xl(1234),this.bounds=new We,this.medalCount=0,this.animated=[]}buf(t){return this.buffers[t]||(this.buffers[t]={top:new to,side:new to}),this.buffers[t]}box(t,e,i,n,r,a=24,o=this.style,l={}){let h=t-i/2,c=t+i/2,u=e-n/2,d=e+n/2,f=r-a,g=r,y=this.world.box(h,f,u,c,g,d,l);return this.addBoxGeo(h,f,u,c,g,d,o),this.bounds.expandByPoint(rt(h,f,u)),this.bounds.expandByPoint(rt(c,g,d)),y}plat(t,e,i,n,r,a=1,o=this.style,l={}){return this.box(t,e,i,n,r,a,o,l)}slab(t,e,i,n,r,a=24,o=this.style){return this.box((t+i)/2,(e+n)/2,Math.abs(i-t),Math.abs(n-e),r,a,o)}addBoxGeo(t,e,i,n,r,a,o){let l=this.buf(o);l.top.quad(rt(t,r,i),rt(n,r,i),rt(n,r,a),rt(t,r,a),rt(0,1,0),c=>[c.x/ie,c.z/ie]);let h=l.side;h.quad(rt(t,e,i),rt(n,e,i),rt(n,r,i),rt(t,r,i),rt(0,0,-1),c=>[c.x/ie,c.y/ie]),h.quad(rt(t,e,a),rt(n,e,a),rt(n,r,a),rt(t,r,a),rt(0,0,1),c=>[c.x/ie,c.y/ie]),h.quad(rt(t,e,i),rt(t,e,a),rt(t,r,a),rt(t,r,i),rt(-1,0,0),c=>[c.z/ie,c.y/ie]),h.quad(rt(n,e,i),rt(n,e,a),rt(n,r,a),rt(n,r,i),rt(1,0,0),c=>[c.z/ie,c.y/ie]),h.quad(rt(t,e,i),rt(n,e,i),rt(n,e,a),rt(t,e,a),rt(0,-1,0),c=>[c.x/ie,c.z/ie])}ramp(t,e,i,n,r,a,o="z",l=this.style,h=24){let c=t-i/2,u=t+i/2,d=e-n/2,f=e+n/2,g=Math.min(r,a)-h;this.world.box(c,g,d,u,Math.max(r,a),f,{ramp:{axis:o,h0:r,h1:a}});let y=this.buf(l),m=y.side;o==="z"?(y.top.quad(rt(c,r,d),rt(u,r,d),rt(u,a,f),rt(c,a,f),rt(0,1,0),p=>[p.x/ie,p.z/ie]),m.quad(rt(c,g,d),rt(u,g,d),rt(u,r,d),rt(c,r,d),rt(0,0,-1),p=>[p.x/ie,p.y/ie]),m.quad(rt(c,g,f),rt(u,g,f),rt(u,a,f),rt(c,a,f),rt(0,0,1),p=>[p.x/ie,p.y/ie]),m.quad(rt(c,g,d),rt(c,g,f),rt(c,a,f),rt(c,r,d),rt(-1,0,0),p=>[p.z/ie,p.y/ie]),m.quad(rt(u,g,d),rt(u,g,f),rt(u,a,f),rt(u,r,d),rt(1,0,0),p=>[p.z/ie,p.y/ie])):(y.top.quad(rt(c,r,d),rt(u,a,d),rt(u,a,f),rt(c,r,f),rt(0,1,0),p=>[p.x/ie,p.z/ie]),m.quad(rt(c,g,d),rt(c,g,f),rt(c,r,f),rt(c,r,d),rt(-1,0,0),p=>[p.z/ie,p.y/ie]),m.quad(rt(u,g,d),rt(u,g,f),rt(u,a,f),rt(u,a,d),rt(1,0,0),p=>[p.z/ie,p.y/ie]),m.quad(rt(c,g,d),rt(u,g,d),rt(u,a,d),rt(c,r,d),rt(0,0,-1),p=>[p.x/ie,p.y/ie]),m.quad(rt(c,g,f),rt(u,g,f),rt(u,a,f),rt(c,r,f),rt(0,0,1),p=>[p.x/ie,p.y/ie])),this.bounds.expandByPoint(rt(c,g,d)),this.bounds.expandByPoint(rt(u,Math.max(r,a),f))}wall(t,e,i,n,r,a){this.world.box(t-i/2,r,e-n/2,t+i/2,a,e+n/2)}ring(t,e,i){this.g.pickups.add(0,t,e,i)}coin(t,e,i){this.g.pickups.add(1,t,e,i)}line(t,e,i,n,r,a,o,l){for(let h=0;h<l;h++){let c=l===1?0:h/(l-1);this.g.pickups.add(t==="coin"?1:0,e+(r-e)*c,i+(a-i)*c,n+(o-n)*c)}}rings(t,e,i,n,r,a,o){this.line("ring",t,e,i,n,r,a,o)}coins(t,e,i,n,r,a,o){this.line("coin",t,e,i,n,r,a,o)}arc(t,e,i,n,r,a,o,l){for(let h=0;h<l;h++){let c=h/(l-1);this.g.pickups.add(t==="coin"?1:0,e+(r-e)*c,i+Math.sin(c*Math.PI)*o,n+(a-n)*c)}}circle(t,e,i,n,r,a){for(let o=0;o<a;o++){let l=o/a*Math.PI*2;this.g.pickups.add(t==="coin"?1:0,e+Math.cos(l)*r,i,n+Math.sin(l)*r)}}add(t){return this.g.entities.push(t),t}qblock(t,e,i,n="coin"){return this.add(new Tn(this.g,t,e,i,"q",n))}brick(t,e,i,n=null){return this.add(new Tn(this.g,t,e,i,"brick",n))}hidden(t,e,i,n="coin"){return this.add(new Tn(this.g,t,e,i,"hidden",n))}hard(t,e,i){return this.add(new Tn(this.g,t,e,i,"used",null))}monitor(t,e,i,n){let r=this.add(new Aa(this.g,t,e,i,n));return this.g.monitors.push(r),r}spring(t,e,i,n,r){return this.add(new Pa(this.g,t,e,i,n,r))}boost(t,e,i,n=0,r){return this.add(new La(this.g,t,e,i,n,r))}loop(t,e,i,n=0,r=7,a=3.2){return this.add(new Ia(this.g,t,e,i,n,r,a))}rail(t,e){return this.add(new Da(this.g,t,e))}mover(t,e,i,n,r,a,o){return this.add(new Ua(this.g,t,e,i,n,r,a,o))}falling(t,e,i,n,r,a){return this.add(new Na(this.g,t,e,i,n,r,a))}blink(t,e,i,n,r,a,o){return this.add(new Fa(this.g,t,e,i,n,r,a,o))}firebar(t,e,i,n,r,a){return this.add(new za(this.g,t,e,i,n,r,a))}spikes(t,e,i,n,r){return this.add(new Oa(this.g,t,e,i,n,r))}crusher(t,e,i,n,r,a){return this.add(new ka(this.g,t,e,i,n,r,a))}pendulum(t,e,i,n,r,a,o,l){return this.add(new Ba(this.g,t,e,i,n,r,a,o,l))}dart(t,e,i,n,r,a){return this.add(new Ha(this.g,t,e,i,n,r,a))}bubble(t,e,i,n,r,a){return this.add(new Ga(this.g,t,e,i,n,r,a))}pipe(t,e,i,n,r,a){return this.add(new Va(this.g,t,e,i,n,r,a))}portal(t,e,i,n,r){return this.add(new Wa(this.g,t,e,i,n,r))}gravity(t,e,i,n,r,a){return this.add(new Xa(this.g,t,e,i,n,r,a))}hint(t,e,i,n){return this.add(new qa(this.g,t,e,i,n))}checkpoint(t,e,i,n=0){return this.add(new Ya(this.g,t,e,i,n))}goal(t,e,i,n,r){return this.add(new ps(this.g,t,e,i,n,r))}medal(t,e,i){return this.add(new $a(this.g,t,e,i,this.medalCount++))}enemy(t,e,i,n,r){let a=new ms(this.g,t,e,i,n,r);return this.g.addEnemy(a),a}plantPipe(t,e,i,n,r){return this.pipe(t,e,i,n,null,r),this.enemy("plant",t,e+n,i,{pipe:!0})}boss(t,e,i,n,r,a){let o=t==="magmor"?ja:Ka,l=new o(this.g,e,i,n,r);return this.g.bosses.push(l),this.add(l),this.add(new Qa(this.g,l,e,i,n,r,a)),l}start(t,e,i,n=0){this.g.startPos={p:rt(t,e,i),yaw:n}}put(t,e,i,n,r,a,o=a,l=a,h=0,c=0,u=0){let d=t.index?t.toNonIndexed():t.clone(),f=new ee().compose(rt(i,n,r),new Ve().setFromEuler(new je(h,c,u)),rt(a,o,l));d.applyMatrix4(f);let g=new Dt(e),y=d.attributes.position.count,m=new Float32Array(y*3);for(let p=0;p<y;p++)m[p*3]=g.r,m[p*3+1]=g.g,m[p*3+2]=g.b;d.setAttribute("color",new _e(m,3)),this.deco.push(d)}tree(t,e,i,n=1,r="round"){let a=this.rand,o=(...l)=>this.put(...l);switch(r){case"palm":{let l=5*n;for(let h=0;h<5;h++)o(Qt.cyl,h%2?10119738:8016424,t+h*.12*n,e+(h+.5)*l/5,i,.22*n,l/5,.22*n,0,0,-.08);for(let h=0;h<6;h++){let c=h/6*Math.PI*2;o(Qt.cone,3124799,t+.6*n+Math.cos(c)*1.3*n,e+l-.2,i+Math.sin(c)*1.3*n,.5*n,2.8*n,.25*n,Math.sin(c)*1.3,0,-Math.cos(c)*1.3)}o(Qt.sphere0,8014362,t+.6*n,e+l-.3,i,.4*n);break}case"pine":o(Qt.cyl,7029795,t,e+1*n,i,.25*n,2*n,.25*n);for(let l=0;l<3;l++)o(Qt.cone,l%2?2062906:2328906,t,e+(2+l*1.2)*n,i,(1.8-l*.45)*n,2.2*n,(1.8-l*.45)*n);break;case"jungle":{let l=(7+a()*4)*n;o(Qt.cyl,5913118,t,e+l/2,i,.45*n,l,.45*n);for(let h=0;h<4;h++)o(Qt.sphere,h%2?2059050:2784563,t+(a()-.5)*3*n,e+l+(a()-.3)*1.5*n,i+(a()-.5)*3*n,(2+a())*n,(1.2+a()*.5)*n,(2+a())*n);for(let h=0;h<3;h++)o(Qt.cyl,3832362,t+(a()-.5)*3*n,e+l-2*n,i+(a()-.5)*3*n,.06,4*n,.06);break}case"mushroom":{let l=(3+a()*3)*n;o(Qt.cyl,15983555,t,e+l/2,i,.5*n,l,.5*n);let h=[15022389,3055162,16757504,2001125][Math.floor(a()*4)];o(Qt.hemi,h,t,e+l-.2,i,2.2*n,1.4*n,2.2*n);for(let c=0;c<5;c++){let u=c*1.26;o(Qt.sphere0,16777215,t+Math.cos(u)*1.4*n,e+l+.6*n,i+Math.sin(u)*1.4*n,.35*n,.2*n,.35*n)}break}case"dead":o(Qt.cyl,3811882,t,e+2*n,i,.3*n,4*n,.3*n),o(Qt.cyl,3811882,t+.6*n,e+3.2*n,i,.12*n,2*n,.12*n,0,0,-.8),o(Qt.cyl,3811882,t-.5*n,e+2.8*n,i,.12*n,1.6*n,.12*n,0,0,.9);break;default:o(Qt.cyl,8016424,t,e+1.2*n,i,.3*n,2.4*n,.3*n),o(Qt.sphere,4177738,t,e+3.2*n,i,1.7*n,1.5*n,1.7*n),o(Qt.sphere,3450943,t+.6*n,e+3.9*n,i+.3*n,1.1*n)}}bush(t,e,i,n=1,r=3450943){this.put(Qt.sphere,r,t,e+.4*n,i,1.1*n,.8*n,1.1*n),this.put(Qt.sphere,r,t+.8*n,e+.3*n,i,.8*n,.6*n,.8*n)}flower(t,e,i,n=16734858){this.put(Qt.cyl,3055162,t,e+.3,i,.04,.6,.04),this.put(Qt.sphere0,n,t,e+.65,i,.18),this.put(Qt.sphere0,16772693,t,e+.66,i,.08)}rock(t,e,i,n=1,r=9079446){this.put(Qt.sphere0,r,t,e+.3*n,i,n,.7*n,n,0,this.rand()*3,0)}pillar(t,e,i,n=6,r=6974072,a=!1){this.put(Qt.cyl,r,t,e+n/2,i,.8,n,.8),this.put(Qt.box,r,t,e+n,i,2,.5,2),this.put(Qt.box,r,t,e+.25,i,2,.5,2),a&&this.world.box(t-.8,e,i-.8,t+.8,e+n+.25,i+.8)}torch(t,e,i){this.put(Qt.cyl,4866112,t,e+1,i,.12,2,.12),this.put(Qt.cone,16753178,t,e+2.3,i,.3,.7,.3,Math.PI),this.put(Qt.sphere0,16769126,t,e+2.25,i,.22)}crystal(t,e,i,n=1,r=11824127){this.put(Qt.oct,r,t,e+1.2*n,i,.6*n,1.6*n,.6*n,0,this.rand()*3,(this.rand()-.5)*.4)}waterfall(t,e,i,n,r,a=0){let o=Ce("water").clone();o.needsUpdate=!0;let l=new St(new zi(n,r),new si({map:o,transparent:!0,opacity:.8,side:Ie}));l.material.map.repeat.set(n/4,r/4),l.position.set(t,e+r/2,i),l.rotation.y=a,this.scene.add(l),this.animated.push({tex:l.material.map,vx:0,vy:1.2})}cloud(t,e,i,n=1){for(let r=0;r<4;r++){let a=Qt.sphere.clone();a.deleteAttribute("normal"),a.computeVertexNormals(),a.applyMatrix4(new ee().compose(rt(t+(r-1.5)*2.2*n,e+r%2*.8*n,i+(this.rand()-.5)*2*n),new Ve,rt(2.2*n,1.5*n,1.8*n))),this.cloudGeos.push(a)}}forest(t,e,i,n,r,a,o=.8,l=1.4){for(let h=0;h<r;h++){let c=t+this.rand()*(i-t),u=e+this.rand()*(n-e),d=this.world.ground(c,u,.1,200);d&&this.tree(c,d.y,u,o+this.rand()*(l-o),a)}}scatter(t,e,i,n,r,a){for(let o=0;o<r;o++){let l=t+this.rand()*(i-t),h=e+this.rand()*(n-e),c=this.world.ground(l,h,.1,200);c&&a(l,c.y,h,this.rand)}}fluid(t,e,i=2e3){let n=Ce(t).clone();n.needsUpdate=!0,n.repeat.set(i/8,i/8);let r=t==="lava"?new si({map:n,color:16777215}):new ri({map:n,transparent:!0,opacity:.85}),a=new St(new zi(i,i),r);a.rotation.x=-Math.PI/2;let o=this.bounds.getCenter(new E);return a.position.set(o.x,e,o.z),a.receiveShadow=t!=="lava",this.scene.add(a),this.animated.push({tex:n,vx:t==="lava"?.02:.03,vy:t==="lava"?.015:.01}),this.g.fluidY=e,this.g.fluidKind=t,a}finish(){let t=this.theme;for(let a in this.buffers){let o=fu(a);for(let l of["top","side"]){let h=this.buffers[a][l];if(!h.idx.length)continue;let c=new St(h.geometry(),o[l]);c.receiveShadow=!0,c.castShadow=!0,this.scene.add(c)}}let e=this.bounds.getCenter(new E),i=this.bounds.getSize(new E),n=Math.max(i.x,i.z)/2+90,r=this.bounds.min.y+18;if(t.mountains)for(let a=0;a<26;a++){let o=a/26*Math.PI*2+this.rand()*.2,l=n+this.rand()*60,h=40+this.rand()*70;this.put(Qt.cone,t.mountains[a%t.mountains.length],e.x+Math.cos(o)*l,r+h/2-10,e.z+Math.sin(o)*l,30+this.rand()*30,h,30+this.rand()*30),t.snow&&h>80&&this.put(Qt.cone,16777215,e.x+Math.cos(o)*l,r+h-10-7,e.z+Math.sin(o)*l,9,14,9)}if(this.deco.length){let a=Kl(this.deco,!1),o=new St(a,new ri({vertexColors:!0}));o.castShadow=this.g.quality==="high",o.receiveShadow=!1,this.scene.add(o),this.deco.length=0}if(this.cloudGeos.length){let a=Kl(this.cloudGeos,!1),o=new St(a,new ri({color:t.cloudColor||16777215,emissive:t.cloudEmissive||6710886}));this.scene.add(o)}return{center:e,size:i}}};function io(s){let t=new Oi(800,24,12),e=new Dt(s.skyTop),i=new Dt(s.skyMid||s.skyBottom),n=new Dt(s.skyBottom),r=[],a=t.attributes.position;for(let h=0;h<a.count;h++){let c=a.getY(h)/800,u=c>.15?i.clone().lerp(e,Math.min(1,(c-.15)/.6)):n.clone().lerp(i,Math.max(0,(c+.2)/.35));r.push(u.r,u.g,u.b)}t.setAttribute("color",new Gt(r,3));let o=new St(t,new si({vertexColors:!0,side:ze,fog:!1,depthWrite:!1}));o.renderOrder=-10;let l=new ne;if(l.add(o),s.stars){let c=new Float32Array(2700),u=Xl(77);for(let f=0;f<900;f++){let g=u()*2-1,y=u()*Math.PI*2,m=Math.sqrt(1-g*g);c[f*3]=Math.cos(y)*m*700,c[f*3+1]=Math.abs(g)*700*(s.stars==="full"&&Math.sign(g)||1),c[f*3+2]=Math.sin(y)*m*700}let d=new ce;d.setAttribute("position",new _e(c,3)),l.add(new is(d,new vn({color:16777215,size:2.2,sizeAttenuation:!1,fog:!1})))}if(s.sun){let h=new St(new ui(40,24),new si({color:s.sun,fog:!1,transparent:!0,opacity:.9})),c=new E(...s.sunDir).normalize().multiplyScalar(700);h.position.copy(c),h.lookAt(0,0,0),l.add(h)}return l}var no={green:{ground:"grass",skyTop:2784224,skyMid:8175871,skyBottom:14086399,fog:12575743,fogNear:90,fogFar:340,sun:16774848,sunDir:[.4,.6,.5],light:16777215,lightI:1.25,hemiSky:12575743,hemiGround:5933626,hemiI:.75,mountains:[5941338,5085773,6994026],cloudColor:16777215,cloudEmissive:9079434,music:"green",exposure:1},mushroom:{ground:"mario",skyTop:4885759,skyMid:9422079,skyBottom:15267583,fog:13625599,fogNear:90,fogFar:330,sun:16777168,sunDir:[-.3,.7,.4],light:16777215,lightI:1.2,hemiSky:13691135,hemiGround:8022586,hemiI:.8,mountains:[8046714,10147994,6994026],cloudColor:16777215,cloudEmissive:9474192,music:"mushroom"},jungle:{ground:"jungle",skyTop:2779738,skyMid:8042656,skyBottom:12114096,fog:9091226,fogNear:30,fogFar:170,sun:null,sunDir:[.2,.8,.3],light:16773836,lightI:.95,hemiSky:11065528,hemiGround:2767386,hemiI:.75,mountains:[2775610,3497791],cloudColor:14217440,cloudEmissive:6978154,music:"jungle"},lava:{ground:"castle",skyTop:1705221,skyMid:5904912,skyBottom:12075034,fog:4856338,fogNear:40,fogFar:200,sun:null,sunDir:[.3,.8,-.3],light:16756874,lightI:.9,hemiSky:16747098,hemiGround:3803658,hemiI:.8,mountains:[2757652,3807764],cloudColor:3811882,cloudEmissive:2755082,music:"lava"},final:{ground:"crystal",skyTop:328218,skyMid:2755162,skyBottom:6953610,fog:1706554,fogNear:60,fogFar:300,sun:16747248,sunDir:[-.5,.4,.6],light:14207231,lightI:1,hemiSky:10124031,hemiGround:2755146,hemiI:.9,mountains:null,stars:"full",cloudColor:10119935,cloudEmissive:3807850,music:"final"}};var so=class{constructor(t,e,i){this.app=t,this.levelIndex=e,this.def=Xe[e],this.charId=i,this.settings=t.save.settings,this.quality=t.quality,this.input=ue,this.vibrate=qs,this.scene=new es,this.camera=new Le(62,t.aspect(),.1,1200),this.world=new Ma,this.fx=new Sa(this.scene,this.quality),this.pickups=new wa(this),this.entities=[],this.enemies=[],this.bosses=[],this.monitors=[],this.spawned=[],this.medals=[!1,!1,!1];let n=t.save.levelRecord(this.def.id);this.savedMedals=n.medals.slice(),this.score=0,this.rings=0,this.coins=0,this.lives=5,this.time=0,this.nextLifeAt=100,this.killY=-40,this.fluidY=null,this.fluidKind=null,this.finished=!1,this.over=!1,this.hintText="",this.hintT=0,this.deaths=0,this.stats={enemies:0}}load(){let t=no[this.def.theme];this.theme=t;let e=this.scene;e.fog=new ts(t.fog,t.fogNear,t.fogFar),e.background=new Dt(t.fog),this.sky=io(t),e.add(this.sky);let i=new as(t.hemiSky,t.hemiGround,t.hemiI);if(e.add(i),this.sun=new os(t.light,t.lightI),this.sunDir=new E(...t.sunDir).normalize(),this.quality!=="low"){this.sun.castShadow=!0;let o=this.quality==="high"?2048:1024;this.sun.shadow.mapSize.set(o,o);let l=this.sun.shadow.camera;l.left=-28,l.right=28,l.top=28,l.bottom=-28,l.near=1,l.far=160,this.sun.shadow.bias=-6e-4,this.sun.shadow.normalBias=.02}e.add(this.sun),e.add(this.sun.target);let r=new eo(this,t);this.builder=r,this.startPos={p:new E(0,2,0),yaw:0},this.def.build(r,this);let a=r.finish();this.animated=r.animated,this.killY=this.def.killY!==void 0?this.def.killY:r.bounds.min.y+4,this.pickups.finalize(),this.totalRings=this.pickups.total.rings,this.totalCoins=this.pickups.total.coins,this.levelInfo=a,this.setupCulling(),this.player=new va(this,this.charId),this.checkpoint={p:this.startPos.p.clone(),yaw:this.startPos.yaw},this.player.spawn(this.checkpoint.p,this.checkpoint.yaw),this.cam=new ba(this.camera,this.world),this.cam.snapBehind(this.checkpoint.yaw,this.player),this.cam.update(.016,this.player,ue,this.settings,null),it.playMusic(t.music),this.app.ui.hudReset(this),this.message(this.def.name,"#ffffff",2.2,this.def.objective)}setupCulling(){let t=new Set([this.sky]);this.cullList=[];let e=new We,i=new E,n=new E;for(let r of this.scene.children){if(t.has(r)||r.isLight||r.isInstancedMesh||r.isPoints||(e.setFromObject(r),e.isEmpty())||(e.getCenter(i),e.getSize(n),Math.max(n.x,n.z)>40))continue;let a=[];r.traverse(o=>{o.isMesh&&a.push(o)}),this.quality!=="high"&&a.forEach(o=>{o.castShadow=!1}),this.cullList.push({o:r,meshes:a,near:!0,ox:i.x-r.position.x,oz:i.z-r.position.z})}this.cullT=0}updateCulling(t){if(this.cullT-=t,this.cullT>0)return;this.cullT=.25;let e=this.player.pos,i=this.quality==="low"?65:this.quality==="medium"?85:120,n=i*i;for(let r of this.cullList){let a=r.o,o=a.position.x+r.ox-e.x,l=a.position.z+r.oz-e.z,h=o*o+l*l<n;if(h!==r.near){r.near=h;for(let c of r.meshes)c.layers.set(h?0:1)}}}addEnemy(t){this.enemies.push(t),this.entities.push(t)}spawn(t){return this.spawned.push(t),t}homingTargets(){let t=[];for(let e of this.enemies)e.alive&&!e.dying&&(e.type!=="plant"||e.emerge>.5)&&t.push(e);for(let e of this.monitors)e.alive&&t.push(e);for(let e of this.bosses)e.alive&&e.active&&e.homingOk&&t.push(e);for(let e of this.spawned)e.alive&&e instanceof ai&&e.destroyable&&t.push(e);return t}hitEnemiesAt(t,e,i){for(let n of this.enemies){if(!n.alive||n.dying||n.type==="plant"&&n.emerge<.3)continue;if(n.targetPos().distanceTo(t)<e+n.r)return n.kill(i==="fire"?"hit":i),!0}for(let n of this.bosses)if(!(!n.alive||!n.active||n.defeated)&&n.targetPos().distanceTo(t)<e+n.mesh.radius)return n.fireHit(),!0;return!1}bumpEnemiesAbove(t,e,i){for(let n of this.enemies)!n.alive||n.dying||n.flying||Math.abs(n.pos.x-t)<1.2&&Math.abs(n.pos.z-i)<1.2&&Math.abs(n.pos.y-e)<.6&&n.kill("hit")}groundPoundImpact(t){for(let e of this.enemies)!e.alive||e.dying||Math.hypot(e.pos.x-t.x,e.pos.z-t.z)<3&&Math.abs(e.pos.y-t.y)<1.2&&e.kill("hit");this.fx.dust(t,12)}spawnPlayerFireball(t){let e=Math.atan2(Math.sin(t.facing),Math.cos(t.facing)),i=new E(t.pos.x+Math.sin(e)*.8,t.pos.y+.9,t.pos.z+Math.cos(e)*.8),n=new E(Math.sin(e)*16,-2,Math.cos(e)*16);this.spawn(new ai(this,i,n,{friendly:!0,bounce:!0,grav:30,color:16742938,r:.3,life:2.2}))}clearHazards(){for(let t of this.spawned){if(!t.alive)continue;(t instanceof ai&&!t.friendly||t.maxR!==void 0||t.onImpact||t.gy!==void 0)&&(t.alive=!1,t.mesh&&this.scene.remove(t.mesh))}for(let t of this.enemies)t.alive&&!t.dying&&t.type==="drone"&&t.kill("hit")}spawnItem(t,e,i){let n=t;this.charId==="zip"&&(n==="mushroom"&&(n="heart"),n==="fire"&&(n="shield")),this.spawn(new Ra(this,n,e,i))}popCoin(t){this.spawn(new Ca(this,t)),this.addCoins(1),it.sfx("coin")}scatterCollectibles(t){let e=Math.min(8,this.rings+this.coins);if(!(e<=0)){for(let i=0;i<e;i++){let n=this.rings>0?0:1;n===0?this.rings--:this.coins--,this.spawn(new Ta(this,t,n))}it.sfx("ringloss")}}applyPowerUp(t,e){let i=this.player,n=(r,a)=>this.message(r,a,1.4);switch(t){case"mushroom":i.hearts=Math.min(i.maxHearts,i.hearts+1),i.id==="rocco"&&(i.big=!0),it.sfx("powerup"),n("SUPER COGUMELO!","#ff6a5a");break;case"fire":i.hearts=Math.min(i.maxHearts,i.hearts+1),i.big=!0,i.fire=!0,it.sfx("powerup"),n("FLOR DE FOGO! (ESPECIAL)","#ff9a3a");break;case"star":i.starTime=10,it.sfx("powerup"),n("INVENC\xCDVEL!","#ffe03a");break;case"shield":i.shield=!0,it.sfx("shield"),n("ESCUDO!","#5ad0ff");break;case"speed":i.speedTime=12,it.sfx("powerup"),n("SUPER VELOCIDADE!","#ff5a8a");break;case"oneup":this.addLife();break;case"heart":i.hearts=Math.min(i.maxHearts,i.hearts+1),it.sfx("powerup"),n("+1 CORA\xC7\xC3O","#ff5a8a");break;case"rings10":this.addRings(10),it.sfx("ring");break;default:break}this.addScore(1e3,e),e&&this.fx.burst(e,16,16777215,5,.6,0)}addScore(t){this.score+=t}addRings(t){this.rings+=t,this.addScore(10*t),this.player&&this.player.id==="zip"&&(this.player.energy=Math.min(100,this.player.energy+4*t)),this.checkLifeBonus()}addCoins(t){this.coins+=t,this.addScore(10*t),this.player&&this.player.id==="zip"&&(this.player.energy=Math.min(100,this.player.energy+4*t)),this.checkLifeBonus()}checkLifeBonus(){this.rings+this.coins>=this.nextLifeAt&&(this.nextLifeAt+=100,this.addLife())}addLife(){this.lives=Math.min(99,this.lives+1),it.sfx("oneup"),this.message("1UP!","#5aff7a",1.2)}collectMedal(t,e){this.medals[t]=!0,it.sfx("medal"),this.addScore(2e3),this.fx.burst(e,30,16773800,7,.9,2),this.message("MEDALHA ESTRELA "+(t+1)+"/3","#ffd23f",1.6)}setCheckpoint(t,e,i){this.checkpoint={p:t.clone(),yaw:e},i||(this.message("CHECKPOINT!","#5ad0ff",1.2),this.addScore(100))}message(t,e="#fff",i=1.5,n=""){this.app.ui.flash(t,e,i,n)}hint(t,e=.2){this.hintText=t,this.hintT=e}camShake(t){this.cam&&this.cam.shake(t)}bossBar(t,e,i){this.app.ui.bossBar(t,e,i)}warpPlayer(t,e){let i=this.player;i.state="warp",i.stateTime=0,it.sfx("warp"),this.warp={t:0,from:t.clone(),to:new E(e[0],e[1],e[2]),yaw:e[3]!==void 0?e[3]:i.facing,moved:!1}}onBossDefeated(t){this.addScore(5e3),this.app.save.data.stats.bossesDefeated++,this.bossBar(null),it.playMusic("bossclear",!1),this.message("CHEFE DERROTADO!","#ffd23f",2.5);let e=new ps(this,t.c.x,t.c.y,t.c.z,"star");this.spawn(e)}win(t=0){this.finished||(this.finished=!0,this.player.victory(),it.playMusic("victory",!1),t&&this.addScore(t),this.flagBonus=t,this.winT=0)}onPlayerDying(){this.deaths++,this.app.save.data.stats.deaths++,it.stopMusic(),it.playMusic("death",!1),this.lives--}onPlayerDead(){if(this.lives<=0){this.over=!0,it.playMusic("gameover",!1),this.app.showGameOver(this);return}let t=this.player;t.deathHandled=!1,t.spawn(this.checkpoint.p,this.checkpoint.yaw),t.hurtTime=2,this.cam.snapBehind(this.checkpoint.yaw,t);let e=this.bosses.find(i=>i.active&&!i.defeated);it.playMusic(e?"boss":this.theme.music),this.message("VIDAS x "+this.lives,"#fff",1.2)}update(t){let e=this.player;ue.update(),this.finished||(this.time+=t);for(let i of this.entities)i.alive&&i.col&&i.col.dynamic&&i.update(t,ue);this.warp?this.updateWarp(t):e.update(t,ue,this.cam.yaw);for(let i of this.entities)i.alive&&!(i.col&&i.col.dynamic)&&i.update(t,ue);for(let i of this.spawned)i.alive&&i.update(t,ue);this.spawned.length>40&&(this.spawned=this.spawned.filter(i=>i.alive)),this.pickups.update(t),this.fx.update(t),e.alive&&!this.finished&&(this.fluidY!==null&&e.pos.y<this.fluidY+.15?(this.fx.burst(e.pos,25,this.fluidKind==="lava"?16742938:10475775,7,.7,10),it.sfx(this.fluidKind==="lava"?"explode":"splash"),e.die()):e.pos.y<this.killY&&e.die()),this.finished&&(this.winT+=t,this.winT>3.2&&!this.resultsShown&&(this.resultsShown=!0,this.app.showResults(this))),this.updateCulling(t),this.cam.update(t,e,ue,this.settings,this.bosses.find(i=>i.active)),this.sun.position.set(e.pos.x+this.sunDir.x*60,e.pos.y+this.sunDir.y*60,e.pos.z+this.sunDir.z*60),this.sun.target.position.set(e.pos.x,e.pos.y,e.pos.z),this.sky.position.copy(this.camera.position);for(let i of this.animated)i.tex.offset.x+=i.vx*t,i.tex.offset.y+=i.vy*t;this.hintT>0&&(this.hintT-=t),this.app.ui.hudUpdate(this,t),ue.consume()}updateWarp(t){let e=this.warp,i=this.player;e.t+=t,e.t<.7?i.body.pos.set(e.from.x,e.from.y-e.t*2.4,e.from.z):e.moved?e.t>1.2&&(i.state="normal",i.body.vel.set(0,8,0),i.body.grounded=!1,this.warp=null):(e.moved=!0,this.app.ui.fade(.35),i.body.pos.copy(e.to),i.facing=e.yaw,this.cam.snapBehind(e.yaw,i),it.sfx("warp")),i.visualUpdate(t)}render(t){t.render(this.scene,this.camera)}resize(t){this.camera.aspect=t,this.camera.updateProjectionMatrix()}dispose(){it.stopMusic(),this.app.ui.bossBar(null),this.scene.traverse(t=>{t.geometry&&t.geometry.dispose()}),this.scene.clear()}};var wu=["Dica: segure ESPECIAL com o Zip para usar o TURBO (a energia vem dos an\xE9is).","Dica: com o Rocco, aperte PULO no ar para dar um pulo duplo.","Dica: ATAQUE no ar com o Rocco faz um pis\xE3o que quebra blocos.","Dica: com o Zip, PULO no ar perto de um inimigo ativa o ataque teleguiado.","Dica: cada fase tem 3 Medalhas Estrela escondidas.","100 an\xE9is/moedas = 1 vida extra!","Arraste o lado direito da tela para girar a c\xE2mera."],th=class{constructor(t){this.app=t,this.scene=new es;let e=no.green;this.scene.fog=new ts(e.fog,30,120),this.scene.add(io(e)),this.scene.add(new as(e.hemiSky,e.hemiGround,.9));let i=new os(16777215,1.2);i.position.set(5,10,6),i.castShadow=t.quality!=="low",i.shadow.mapSize.set(1024,1024);let n=i.shadow.camera;n.left=-8,n.right=8,n.top=8,n.bottom=-8,this.scene.add(i);let r=new St(new gi(7,6,2,32),[F(11564090),F(6079810),F(9067050)]);r.position.y=-1,r.receiveShadow=!0,this.scene.add(r);let a=new St(new ui(300,32),new ri({color:5221946}));a.rotation.x=-Math.PI/2,a.position.y=-4,this.scene.add(a);for(let o=0;o<18;o++){let l=o/18*Math.PI*2,h=16+o%3*6,c=new ne,u=new St(new gi(.3,.4,3,6),F(8016424));u.position.y=1.5,c.add(u);let d=new St(new Mn(1.8,0),F(o%2?4177738:3055162));d.position.y=3.6,c.add(d),c.position.set(Math.cos(l)*h,-3.5,Math.sin(l)*h),this.scene.add(c)}for(let o=0;o<10;o++){let l=new St(new nn(30+o*3,50+o%4*15,6),F(o%2?5941338:5085773)),h=o/10*Math.PI*2;l.position.set(Math.cos(h)*160,10,Math.sin(h)*160),this.scene.add(l)}this.rings=new en(Zs(),F(16763938,{emissive:6965760}),12),this.scene.add(this.rings),this.medal=xa(),this.medal.position.set(-3.5,2.8,-1),this.scene.add(this.medal),this.camera=new Le(50,t.aspect(),.1,1e3),this.t=0,this.charId=null,this.m4=new ee}setChar(t){this.charId!==t&&(this.rig&&this.scene.remove(this.rig),this.rig=ma(t),this.rig.scale.setScalar(1.4),this.scene.add(this.rig),this.charId=t,this.rigT=0)}update(t){this.t+=t,this.rigT+=t;let e=this.t;if(this.rig){this.rig.rotation.y=Math.sin(e*.4)*.6+.3;let r=this.rigT<1.2?"victory":"idle";ga(this.rig,{mode:r,speed:0,t:e,modeTime:this.rigT},t)}for(let r=0;r<12;r++){let a=r/12*Math.PI*2+e*.6;this.m4.makeRotationY(e*3+r),this.m4.setPosition(Math.cos(a)*4.2,2.2+Math.sin(e*2+r)*.3,Math.sin(a)*4.2),this.rings.setMatrixAt(r,this.m4)}this.rings.instanceMatrix.needsUpdate=!0,this.medal.rotation.y=e*2;let n=this.camera.aspect>1.6?-2.6:-1.8;this.camera.position.set(n+Math.sin(e*.1)*.5,3.4,9.5),this.camera.lookAt(n,1.8,0)}render(t){t.render(this.scene,this.camera)}},eh=class{constructor(){this.save=cu,this.save.load(),this.state="menu",this.game=null,this.fps=60,this.fpsAcc=0,this.fpsFrames=0,this.lowFpsTime=0,this.canvas=document.getElementById("gl"),this.quality=this.resolveQuality(),this.createRenderer(),this.ui=new _a(this),ue.init(document.getElementById("touch"),this.save.settings),ue.setVisible(!1),it.setVolumes(this.save.settings.music,this.save.settings.sfx),this.menuScene=new th(this),this.menuScene.setChar(this.save.data.character),this.ui.mainMenu(),this.ui.showHud(!1),this.bindSystem(),this.last=performance.now(),this.acc=0,requestAnimationFrame(i=>this.frame(i)),it.playMusic("menu"),window.__app=this,window.__test={app:this,input:ue,audio:it,LEVELS:Xe};let t=this.renderer.getContext();console.log(`[DK] boot ok webgl=${this.renderer.capabilities.isWebGL2?2:1} quality=${this.quality} gpu=${t.getParameter(t.RENDERER)} size=${window.innerWidth}x${window.innerHeight}`);let e=new URLSearchParams(location.search).get("autostart");e!==null&&/^[0-4]$/.test(e)&&(this.save.data.unlocked=Math.max(this.save.data.unlocked,+e+1),setTimeout(()=>this.startLevel(+e),500)),setInterval(()=>{this.state==="playing"&&this.game&&console.log(`[DK] playing level=${this.game.def.id} fps=${this.fps.toFixed(1)} z=${this.game.player.pos.z.toFixed(1)}`)},5e3)}resolveQuality(){let t=this.save.settings.quality;if(t!=="auto")return t;let e=navigator.deviceMemory||4,i=navigator.hardwareConcurrency||4;return e<=2||i<=4?"low":"medium"}createRenderer(){let t=this.quality,e;try{e=new Is({canvas:this.canvas,antialias:t!=="low",powerPreference:"high-performance",stencil:!1})}catch(i){throw document.getElementById("error").innerHTML='<div class="panel"><h2>WebGL indispon\xEDvel</h2><p>Seu aparelho ou WebView n\xE3o suporta gr\xE1ficos 3D (WebGL). Atualize o "Android System WebView" pela Play Store e tente novamente.</p></div>',document.getElementById("error").classList.remove("hidden"),i}e.outputColorSpace=Ze,e.shadowMap.enabled=t!=="low",e.shadowMap.type=t==="high"?ha:Gs,this.baseRatio=t==="low"?1:t==="medium"?1.5:2,this.pixelRatio=Math.min(window.devicePixelRatio||1,this.baseRatio),e.setPixelRatio(this.pixelRatio),e.setSize(window.innerWidth,window.innerHeight,!1),this.renderer=e}aspect(){return window.innerWidth/Math.max(1,window.innerHeight)}bindSystem(){window.addEventListener("resize",()=>this.onResize()),window.addEventListener("orientationchange",()=>setTimeout(()=>this.onResize(),200)),this.evLog=0;for(let e of["pointerdown","touchstart","mousedown","click"])window.addEventListener(e,i=>{if(this.evLog++<12){let n=i.touches?i.touches[0]:i;console.log(`[DK] input ${e} ${i.pointerType||""} ${n?Math.round(n.clientX)+","+Math.round(n.clientY):""} target=${i.target&&(i.target.id||i.target.className||i.target.tagName)}`)}},{capture:!0,passive:!0});let t=()=>it.unlock();window.addEventListener("pointerdown",t,{capture:!0}),window.addEventListener("keydown",t,{capture:!0}),document.addEventListener("visibilitychange",()=>{document.hidden?(this.pause(!0),it.suspend()):it.resume()}),window.onAndroidPause=()=>{this.pause(!0),it.suspend()},window.onAndroidResume=()=>{it.resume()},window.onAndroidBack=()=>(this.back(),!0),this.canvas.addEventListener("webglcontextlost",e=>{e.preventDefault(),this.ui.loading(!0,"Recuperando gr\xE1ficos...","")}),this.canvas.addEventListener("webglcontextrestored",()=>location.reload()),document.addEventListener("contextmenu",e=>e.preventDefault())}onResize(){this.renderer.setSize(window.innerWidth,window.innerHeight,!1),this.menuScene.camera.aspect=this.aspect(),this.menuScene.camera.updateProjectionMatrix(),this.game&&this.game.resize(this.aspect()),document.getElementById("rotate-hint").classList.toggle("show",window.innerHeight>window.innerWidth*1.1)}setSetting(t,e){let i=this.save.settings;if(i[t]=e,this.save.persist(),(t==="music"||t==="sfx")&&it.setVolumes(i.music,i.sfx),(t==="controlSize"||t==="joystick")&&ue.applyLayout(),t==="quality"){this.quality=this.resolveQuality();let n=this.renderer;this.baseRatio=this.quality==="low"?1:this.quality==="medium"?1.5:2,this.pixelRatio=Math.min(window.devicePixelRatio||1,this.baseRatio),n.setPixelRatio(this.pixelRatio),n.setSize(window.innerWidth,window.innerHeight,!1),n.shadowMap.enabled=this.quality!=="low",n.shadowMap.type=this.quality==="high"?ha:Gs,n.shadowMap.needsUpdate=!0,this.toast("Qualidade aplicada"+(this.game?" (sombras completas ao reiniciar a fase)":""))}}toast(t){this.ui.toastMsg(t)}action(t,e){switch(console.log(`[DK] action ${t}${e?" "+e:""}`),t){case"play":{let i=this.save.data,n=Xe.findIndex((r,a)=>a<i.unlocked&&!(i.levels[r.id]&&i.levels[r.id].completed));if(n<0){this.ui.levelMenu();break}this.startLevel(n);break}case"chars":this.ui.charMenu();break;case"pickchar":this.save.data.character=e,this.save.persist(),this.menuScene.setChar(e),this.ui.charMenu();break;case"levels":this.ui.levelMenu();break;case"settings":this.ui.settingsMenu("main");break;case"credits":this.ui.creditsMenu();break;case"back":this.ui.mainMenu();break;case"startlevel":this.startLevel(parseInt(e,10));break;case"resume":this.resume();break;case"restart":this.startLevel(this.game?this.game.levelIndex:0);break;case"next":this.startLevel(Math.min(Xe.length-1,this.game.levelIndex+1));break;case"quit":this.quitToMenu();break;case"pausesettings":this.ui.settingsMenu("pause");break;case"settingsback":this.ui.pauseMenu(this.game);break;case"ending":this.showEnding();break;default:break}}back(){let t=this.state;if(t==="playing"){this.pause();return}if(t==="paused"){this.ui.current==="settings"?this.ui.pauseMenu(this.game):this.resume();return}if(t==="menu"){if(this.ui.current&&this.ui.current!=="main"){it.sfx("back"),this.ui.mainMenu();return}window.AndroidBridge&&window.AndroidBridge.exitApp&&window.AndroidBridge.exitApp();return}(t==="results"||t==="gameover"||t==="ending")&&this.quitToMenu()}startLevel(t){if(t+1>this.save.data.unlocked)return;let e=Xe[t];this.ui.hideScreens(),this.ui.loading(!0,`${t+1}. ${e.name}`,wu[Math.floor(Math.random()*wu.length)]),this.state="loading",console.log(`[DK] loading level ${e.id}`),it.stopMusic(),setTimeout(()=>{try{this.game&&(this.game.dispose(),this.game=null);let i=performance.now();this.game=new so(this,t,this.save.data.character),this.game.load(),this.renderer.compile(this.game.scene,this.game.camera),this.loadMs=performance.now()-i,this.save.data.stats.plays++,this.save.persist(),this.state="playing",console.log(`[DK] level loaded ${e.id} in ${Math.round(this.loadMs)}ms`),this.ui.showHud(!0),ue.setVisible(!0),ue.releaseAll(),this.ui.fade(.5)}catch(i){console.error("[DK] level load failed: "+(i&&i.stack||i)),this.ui.error("Falha ao carregar a fase: "+(i&&i.message)),this.state="menu"}this.ui.loading(!1)},60)}pause(t){this.state==="playing"&&(this.state="paused",ue.setVisible(!1),t||it.sfx("pause"),this.ui.pauseMenu(this.game))}resume(){this.state==="paused"&&(this.state="playing",this.ui.hideScreens(),ue.setVisible(!0),ue.releaseAll(),this.last=performance.now())}showResults(t){let e=t.score,i=Math.max(0,Math.round((t.def.par-t.time)*50)),n=(t.rings+t.coins)*20,r=t.deaths===0?3e3:0,a=e+i+n+r,o=this.save.completeLevel(t.levelIndex,t.def.id,a,t.time,t.medals);t.levelIndex===Xe.length-1&&(this.save.data.stats.gameCompleted=!0,this.save.persist()),this.state="results",ue.setVisible(!1),this.ui.resultsMenu(t,{base:e,timeBonus:i,ringBonus:n,perfect:r,total:a,newBest:o.newBest})}showGameOver(t){this.state="gameover",ue.setVisible(!1),setTimeout(()=>this.ui.gameOverMenu(t),1200)}showEnding(){this.game&&(this.game.dispose(),this.game=null),this.state="ending",this.ui.showHud(!1),this.menuScene.setChar(this.save.data.character),this.menuScene.rigT=0,it.playMusic("ending"),this.ui.endingScreen()}quitToMenu(){this.crashed=!1,this.game&&(this.game.dispose(),this.game=null),this.state="menu",this.ui.showHud(!1),ue.setVisible(!1),this.menuScene.setChar(this.save.data.character),this.ui.mainMenu(),it.playMusic("menu")}frame(t){requestAnimationFrame(n=>this.frame(n));let e=(t-this.last)/1e3,i=this.save.settings.fpsCap||60;if(!(i<60&&e<1/i-.004)&&(this.last=t,e>.1&&(e=.1),!(e<=0))){this.fpsAcc+=e,this.fpsFrames++,this.fpsAcc>=.5&&(this.fps=this.fpsFrames/this.fpsAcc,this.fpsAcc=0,this.fpsFrames=0,this.save.settings.quality==="auto"&&this.state==="playing"&&(this.fps<Math.min(i,60)*.75?this.lowFpsTime+=.5:this.lowFpsTime=0,this.lowFpsTime>=2&&this.pixelRatio>.7&&(this.pixelRatio=Math.max(.7,this.pixelRatio-.15),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight,!1),this.lowFpsTime=0)));try{let n=Math.min(e,.03333333333333333);if(this.state==="playing"&&this.game){if(ue.pausePressed)ue.consume(),this.pause();else{let r=e;for(;r>1e-4;){let a=Math.min(r,n);this.game.update(a),r-=a}}this.game.render(this.renderer)}else(this.state==="paused"||this.state==="results"||this.state==="gameover")&&this.game?(this.state!=="paused"&&(this.game.player.visualUpdate(e),this.game.fx.update(e)),this.game.render(this.renderer)):(this.menuScene.update(e),this.menuScene.render(this.renderer))}catch(n){console.error(n),this.crashed||(this.crashed=!0,this.ui.error(n&&n.message?n.message:String(n)),this.state="error")}}}};window.addEventListener("error",s=>{console.error("Erro global:",s.message)});function Tu(){try{new eh}catch(t){console.error(t);let e=document.getElementById("error");e&&!e.innerHTML&&(e.innerHTML=`<div class="panel"><h2>Erro ao iniciar</h2><p>${String(t&&t.message)}</p></div>`),e&&e.classList.remove("hidden")}let s=document.getElementById("boot");s&&s.remove()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Tu):Tu();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
