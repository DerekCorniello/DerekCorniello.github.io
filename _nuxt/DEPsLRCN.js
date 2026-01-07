const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./CNaAXYFU.js","./1wwtMGpE.js","./BoIsvr7U.js","./Container.CkKw5gHK.css","./gzUAsPPu.js","./XzjLRCW1.js","./BzDXOk23.js","./about.CSs33DmU.css","./D3Jz6Z4g.js","./index.DVhyo8z3.css","./Bkaehiim.js","./contact.XGZcb1Z1.css","./Cn10oaO6.js","./projects.BWT7qNhB.css","./tk9jFGsQ.js","./index.lEpxkQgE.css","./CWPCiBsK.js","./keyboard.abi00D3k.css","./WdK3ZD-x.js","./nvim-transition.LVYtbRr3.css","./BiyDuceT.js","./blog.CDCEkRUr.css","./D-HvJVqs.js","./default.DOrI_2TA.css","./IMOKl-JX.js","./error-404.CYUhy3y9.css","./DKEcqBIV.js","./error-500.CVLkTsZM.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function bc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const et={},Ir=[],Dn=()=>{},od=()=>!1,Fs=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ac=t=>t.startsWith("onUpdate:"),Mt=Object.assign,wc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},lg=Object.prototype.hasOwnProperty,Ke=(t,e)=>lg.call(t,e),Le=Array.isArray,Ur=t=>ns(t)==="[object Map]",la=t=>ns(t)==="[object Set]",uu=t=>ns(t)==="[object Date]",cg=t=>ns(t)==="[object RegExp]",De=t=>typeof t=="function",lt=t=>typeof t=="string",En=t=>typeof t=="symbol",Je=t=>t!==null&&typeof t=="object",ad=t=>(Je(t)||De(t))&&De(t.then)&&De(t.catch),ld=Object.prototype.toString,ns=t=>ld.call(t),ug=t=>ns(t).slice(8,-1),cd=t=>ns(t)==="[object Object]",ca=t=>lt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Nr=bc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ua=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},fg=/-\w/g,hn=ua(t=>t.replace(fg,e=>e.slice(1).toUpperCase())),hg=/\B([A-Z])/g,lr=ua(t=>t.replace(hg,"-$1").toLowerCase()),fa=ua(t=>t.charAt(0).toUpperCase()+t.slice(1)),Fa=ua(t=>t?`on${fa(t)}`:""),Mi=(t,e)=>!Object.is(t,e),Or=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},ud=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},Rc=t=>{const e=parseFloat(t);return isNaN(e)?t:e},fd=t=>{const e=lt(t)?Number(t):NaN;return isNaN(e)?t:e};let fu;const ha=()=>fu||(fu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function da(t){if(Le(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=lt(i)?gg(i):da(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(lt(t)||Je(t))return t}const dg=/;(?![^(]*\))/g,pg=/:([^]+)/,mg=/\/\*[^]*?\*\//g;function gg(t){const e={};return t.replace(mg,"").split(dg).forEach(n=>{if(n){const i=n.split(pg);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function pa(t){let e="";if(lt(t))e=t;else if(Le(t))for(let n=0;n<t.length;n++){const i=pa(t[n]);i&&(e+=i+" ")}else if(Je(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function _g(t){if(!t)return null;let{class:e,style:n}=t;return e&&!lt(e)&&(t.class=pa(e)),n&&(t.style=da(n)),t}const vg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",xg=bc(vg);function hd(t){return!!t||t===""}function yg(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=ma(t[i],e[i]);return n}function ma(t,e){if(t===e)return!0;let n=uu(t),i=uu(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=En(t),i=En(e),n||i)return t===e;if(n=Le(t),i=Le(e),n||i)return n&&i?yg(t,e):!1;if(n=Je(t),i=Je(e),n||i){if(!n||!i)return!1;const r=Object.keys(t).length,s=Object.keys(e).length;if(r!==s)return!1;for(const a in t){const o=t.hasOwnProperty(a),l=e.hasOwnProperty(a);if(o&&!l||!o&&l||!ma(t[a],e[a]))return!1}}return String(t)===String(e)}function dd(t,e){return t.findIndex(n=>ma(n,e))}const pd=t=>!!(t&&t.__v_isRef===!0),Sg=t=>lt(t)?t:t==null?"":Le(t)||Je(t)&&(t.toString===ld||!De(t.toString))?pd(t)?Sg(t.value):JSON.stringify(t,md,2):String(t),md=(t,e)=>pd(e)?md(t,e.value):Ur(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[Ba(i,s)+" =>"]=r,n),{})}:la(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ba(n))}:En(e)?Ba(e):Je(e)&&!Le(e)&&!cd(e)?String(e):e,Ba=(t,e="")=>{var n;return En(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};let Gt;class gd{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Gt,!e&&Gt&&(this.index=(Gt.scopes||(Gt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Gt;try{return Gt=this,e()}finally{Gt=n}}}on(){++this._on===1&&(this.prevScope=Gt,Gt=this)}off(){this._on>0&&--this._on===0&&(Gt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Eg(t){return new gd(t)}function _d(){return Gt}let it;const Ha=new WeakSet;class vd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Gt&&Gt.active&&Gt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ha.has(this)&&(Ha.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||yd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,hu(this),Sd(this);const e=it,n=Sn;it=this,Sn=!0;try{return this.fn()}finally{Ed(this),it=e,Sn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Lc(e);this.deps=this.depsTail=void 0,hu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ha.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Bl(this)&&this.run()}get dirty(){return Bl(this)}}let xd=0,Ss,Es;function yd(t,e=!1){if(t.flags|=8,e){t.next=Es,Es=t;return}t.next=Ss,Ss=t}function Cc(){xd++}function Pc(){if(--xd>0)return;if(Es){let e=Es;for(Es=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ss;){let e=Ss;for(Ss=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function Sd(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ed(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),Lc(i),Mg(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function Bl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Md(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Md(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Rs)||(t.globalVersion=Rs,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Bl(t))))return;t.flags|=2;const e=t.dep,n=it,i=Sn;it=t,Sn=!0;try{Sd(t);const r=t.fn(t._value);(e.version===0||Mi(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{it=n,Sn=i,Ed(t),t.flags&=-3}}function Lc(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)Lc(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Mg(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Sn=!0;const Td=[];function ni(){Td.push(Sn),Sn=!1}function ii(){const t=Td.pop();Sn=t===void 0?!0:t}function hu(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=it;it=void 0;try{e()}finally{it=n}}}let Rs=0;class Tg{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Dc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!it||!Sn||it===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==it)n=this.activeLink=new Tg(it,this),it.deps?(n.prevDep=it.depsTail,it.depsTail.nextDep=n,it.depsTail=n):it.deps=it.depsTail=n,bd(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=it.depsTail,n.nextDep=void 0,it.depsTail.nextDep=n,it.depsTail=n,it.deps===n&&(it.deps=i)}return n}trigger(e){this.version++,Rs++,this.notify(e)}notify(e){Cc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Pc()}}}function bd(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)bd(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Fo=new WeakMap,Qi=Symbol(""),Hl=Symbol(""),Cs=Symbol("");function It(t,e,n){if(Sn&&it){let i=Fo.get(t);i||Fo.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new Dc),r.map=i,r.key=n),r.track()}}function jn(t,e,n,i,r,s){const a=Fo.get(t);if(!a){Rs++;return}const o=l=>{l&&l.trigger()};if(Cc(),e==="clear")a.forEach(o);else{const l=Le(t),u=l&&ca(n);if(l&&n==="length"){const c=Number(i);a.forEach((f,h)=>{(h==="length"||h===Cs||!En(h)&&h>=c)&&o(f)})}else switch((n!==void 0||a.has(void 0))&&o(a.get(n)),u&&o(a.get(Cs)),e){case"add":l?u&&o(a.get("length")):(o(a.get(Qi)),Ur(t)&&o(a.get(Hl)));break;case"delete":l||(o(a.get(Qi)),Ur(t)&&o(a.get(Hl)));break;case"set":Ur(t)&&o(a.get(Qi));break}}Pc()}function bg(t,e){const n=Fo.get(t);return n&&n.get(e)}function ur(t){const e=je(t);return e===t?e:(It(e,"iterate",Cs),tn(t)?e:e.map(Mn))}function ga(t){return It(t=je(t),"iterate",Cs),t}function _i(t,e){return Un(t)?Ti(t)?qr(Mn(e)):qr(e):Mn(e)}const Ag={__proto__:null,[Symbol.iterator](){return ka(this,Symbol.iterator,t=>_i(this,t))},concat(...t){return ur(this).concat(...t.map(e=>Le(e)?ur(e):e))},entries(){return ka(this,"entries",t=>(t[1]=_i(this,t[1]),t))},every(t,e){return On(this,"every",t,e,void 0,arguments)},filter(t,e){return On(this,"filter",t,e,n=>n.map(i=>_i(this,i)),arguments)},find(t,e){return On(this,"find",t,e,n=>_i(this,n),arguments)},findIndex(t,e){return On(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return On(this,"findLast",t,e,n=>_i(this,n),arguments)},findLastIndex(t,e){return On(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return On(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ga(this,"includes",t)},indexOf(...t){return Ga(this,"indexOf",t)},join(t){return ur(this).join(t)},lastIndexOf(...t){return Ga(this,"lastIndexOf",t)},map(t,e){return On(this,"map",t,e,void 0,arguments)},pop(){return ls(this,"pop")},push(...t){return ls(this,"push",t)},reduce(t,...e){return du(this,"reduce",t,e)},reduceRight(t,...e){return du(this,"reduceRight",t,e)},shift(){return ls(this,"shift")},some(t,e){return On(this,"some",t,e,void 0,arguments)},splice(...t){return ls(this,"splice",t)},toReversed(){return ur(this).toReversed()},toSorted(t){return ur(this).toSorted(t)},toSpliced(...t){return ur(this).toSpliced(...t)},unshift(...t){return ls(this,"unshift",t)},values(){return ka(this,"values",t=>_i(this,t))}};function ka(t,e,n){const i=ga(t),r=i[e]();return i!==t&&!tn(t)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=n(s.value)),s}),r}const wg=Array.prototype;function On(t,e,n,i,r,s){const a=ga(t),o=a!==t&&!tn(t),l=a[e];if(l!==wg[e]){const f=l.apply(t,s);return o?Mn(f):f}let u=n;a!==t&&(o?u=function(f,h){return n.call(this,_i(t,f),h,t)}:n.length>2&&(u=function(f,h){return n.call(this,f,h,t)}));const c=l.call(a,u,i);return o&&r?r(c):c}function du(t,e,n,i){const r=ga(t);let s=n;return r!==t&&(tn(t)?n.length>3&&(s=function(a,o,l){return n.call(this,a,o,l,t)}):s=function(a,o,l){return n.call(this,a,_i(t,o),l,t)}),r[e](s,...i)}function Ga(t,e,n){const i=je(t);It(i,"iterate",Cs);const r=i[e](...n);return(r===-1||r===!1)&&_a(n[0])?(n[0]=je(n[0]),i[e](...n)):r}function ls(t,e,n=[]){ni(),Cc();const i=je(t)[e].apply(t,n);return Pc(),ii(),i}const Rg=bc("__proto__,__v_isRef,__isVue"),Ad=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(En));function Cg(t){En(t)||(t=String(t));const e=je(this);return It(e,"has",t),e.hasOwnProperty(t)}class wd{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?Hg:Ld:s?Pd:Cd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=Le(e);if(!r){let l;if(a&&(l=Ag[n]))return l;if(n==="hasOwnProperty")return Cg}const o=Reflect.get(e,n,mt(e)?e:i);if((En(n)?Ad.has(n):Rg(n))||(r||It(e,"get",n),s))return o;if(mt(o)){const l=a&&ca(n)?o:o.value;return r&&Je(l)?Gl(l):l}return Je(o)?r?Gl(o):Pi(o):o}}class Rd extends wd{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];const a=Le(e)&&ca(n);if(!this._isShallow){const u=Un(s);if(!tn(i)&&!Un(i)&&(s=je(s),i=je(i)),!a&&mt(s)&&!mt(i))return u||(s.value=i),!0}const o=a?Number(n)<e.length:Ke(e,n),l=Reflect.set(e,n,i,mt(e)?e:r);return e===je(r)&&(o?Mi(i,s)&&jn(e,"set",n,i):jn(e,"add",n,i)),l}deleteProperty(e,n){const i=Ke(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&jn(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!En(n)||!Ad.has(n))&&It(e,"has",n),i}ownKeys(e){return It(e,"iterate",Le(e)?"length":Qi),Reflect.ownKeys(e)}}class Pg extends wd{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Lg=new Rd,Dg=new Pg,Ig=new Rd(!0);const kl=t=>t,Ks=t=>Reflect.getPrototypeOf(t);function Ug(t,e,n){return function(...i){const r=this.__v_raw,s=je(r),a=Ur(s),o=t==="entries"||t===Symbol.iterator&&a,l=t==="keys"&&a,u=r[t](...i),c=n?kl:e?qr:Mn;return!e&&It(s,"iterate",l?Hl:Qi),{next(){const{value:f,done:h}=u.next();return h?{value:f,done:h}:{value:o?[c(f[0]),c(f[1])]:c(f),done:h}},[Symbol.iterator](){return this}}}}function Zs(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Ng(t,e){const n={get(r){const s=this.__v_raw,a=je(s),o=je(r);t||(Mi(r,o)&&It(a,"get",r),It(a,"get",o));const{has:l}=Ks(a),u=e?kl:t?qr:Mn;if(l.call(a,r))return u(s.get(r));if(l.call(a,o))return u(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!t&&It(je(r),"iterate",Qi),r.size},has(r){const s=this.__v_raw,a=je(s),o=je(r);return t||(Mi(r,o)&&It(a,"has",r),It(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=je(o),u=e?kl:t?qr:Mn;return!t&&It(l,"iterate",Qi),o.forEach((c,f)=>r.call(s,u(c),u(f),a))}};return Mt(n,t?{add:Zs("add"),set:Zs("set"),delete:Zs("delete"),clear:Zs("clear")}:{add(r){!e&&!tn(r)&&!Un(r)&&(r=je(r));const s=je(this);return Ks(s).has.call(s,r)||(s.add(r),jn(s,"add",r,r)),this},set(r,s){!e&&!tn(s)&&!Un(s)&&(s=je(s));const a=je(this),{has:o,get:l}=Ks(a);let u=o.call(a,r);u||(r=je(r),u=o.call(a,r));const c=l.call(a,r);return a.set(r,s),u?Mi(s,c)&&jn(a,"set",r,s):jn(a,"add",r,s),this},delete(r){const s=je(this),{has:a,get:o}=Ks(s);let l=a.call(s,r);l||(r=je(r),l=a.call(s,r)),o&&o.call(s,r);const u=s.delete(r);return l&&jn(s,"delete",r,void 0),u},clear(){const r=je(this),s=r.size!==0,a=r.clear();return s&&jn(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Ug(r,t,e)}),n}function Ic(t,e){const n=Ng(t,e);return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(Ke(n,r)&&r in i?n:i,r,s)}const Og={get:Ic(!1,!1)},Fg={get:Ic(!1,!0)},Bg={get:Ic(!0,!1)};const Cd=new WeakMap,Pd=new WeakMap,Ld=new WeakMap,Hg=new WeakMap;function kg(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Gg(t){return t.__v_skip||!Object.isExtensible(t)?0:kg(ug(t))}function Pi(t){return Un(t)?t:Uc(t,!1,Lg,Og,Cd)}function Jn(t){return Uc(t,!1,Ig,Fg,Pd)}function Gl(t){return Uc(t,!0,Dg,Bg,Ld)}function Uc(t,e,n,i,r){if(!Je(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=Gg(t);if(s===0)return t;const a=r.get(t);if(a)return a;const o=new Proxy(t,s===2?i:n);return r.set(t,o),o}function Ti(t){return Un(t)?Ti(t.__v_raw):!!(t&&t.__v_isReactive)}function Un(t){return!!(t&&t.__v_isReadonly)}function tn(t){return!!(t&&t.__v_isShallow)}function _a(t){return t?!!t.__v_raw:!1}function je(t){const e=t&&t.__v_raw;return e?je(e):t}function zg(t){return!Ke(t,"__v_skip")&&Object.isExtensible(t)&&ud(t,"__v_skip",!0),t}const Mn=t=>Je(t)?Pi(t):t,qr=t=>Je(t)?Gl(t):t;function mt(t){return t?t.__v_isRef===!0:!1}function In(t){return Dd(t,!1)}function Ps(t){return Dd(t,!0)}function Dd(t,e){return mt(t)?t:new Vg(t,e)}class Vg{constructor(e,n){this.dep=new Dc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:je(e),this._value=n?e:Mn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||tn(e)||Un(e);e=i?e:je(e),Mi(e,n)&&(this._rawValue=e,this._value=i?e:Mn(e),this.dep.trigger())}}function at(t){return mt(t)?t.value:t}function Wg(t){return De(t)?t():at(t)}const Xg={get:(t,e,n)=>e==="__v_raw"?t:at(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return mt(r)&&!mt(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function Id(t){return Ti(t)?t:new Proxy(t,Xg)}class qg{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._raw=je(e);let r=!0,s=e;if(!Le(e)||!ca(String(n)))do r=!_a(s)||tn(s);while(r&&(s=s.__v_raw));this._shallow=r}get value(){let e=this._object[this._key];return this._shallow&&(e=at(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&mt(this._raw[this._key])){const n=this._object[this._key];if(mt(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return bg(this._raw,this._key)}}class jg{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function $g(t,e,n){return mt(t)?t:De(t)?new jg(t):Je(t)&&arguments.length>1?Yg(t,e,n):In(t)}function Yg(t,e,n){return new qg(t,e,n)}class Kg{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Dc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Rs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&it!==this)return yd(this,!0),!0}get value(){const e=this.dep.track();return Md(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Zg(t,e,n=!1){let i,r;return De(t)?i=t:(i=t.get,r=t.set),new Kg(i,r,n)}const Js={},Bo=new WeakMap;let Wi;function Jg(t,e=!1,n=Wi){if(n){let i=Bo.get(n);i||Bo.set(n,i=[]),i.push(t)}}function Qg(t,e,n=et){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=n,u=S=>r?S:tn(S)||r===!1||r===0?$n(S,1):$n(S);let c,f,h,d,_=!1,v=!1;if(mt(t)?(f=()=>t.value,_=tn(t)):Ti(t)?(f=()=>u(t),_=!0):Le(t)?(v=!0,_=t.some(S=>Ti(S)||tn(S)),f=()=>t.map(S=>{if(mt(S))return S.value;if(Ti(S))return u(S);if(De(S))return l?l(S,2):S()})):De(t)?e?f=l?()=>l(t,2):t:f=()=>{if(h){ni();try{h()}finally{ii()}}const S=Wi;Wi=c;try{return l?l(t,3,[d]):t(d)}finally{Wi=S}}:f=Dn,e&&r){const S=f,T=r===!0?1/0:r;f=()=>$n(S(),T)}const m=_d(),p=()=>{c.stop(),m&&m.active&&wc(m.effects,c)};if(s&&e){const S=e;e=(...T)=>{S(...T),p()}}let E=v?new Array(t.length).fill(Js):Js;const g=S=>{if(!(!(c.flags&1)||!c.dirty&&!S))if(e){const T=c.run();if(r||_||(v?T.some((R,A)=>Mi(R,E[A])):Mi(T,E))){h&&h();const R=Wi;Wi=c;try{const A=[T,E===Js?void 0:v&&E[0]===Js?[]:E,d];E=T,l?l(e,3,A):e(...A)}finally{Wi=R}}}else c.run()};return o&&o(g),c=new vd(f),c.scheduler=a?()=>a(g,!1):g,d=S=>Jg(S,!1,c),h=c.onStop=()=>{const S=Bo.get(c);if(S){if(l)l(S,4);else for(const T of S)T();Bo.delete(c)}},e?i?g(!0):E=c.run():a?a(g.bind(null,!0),!0):c.run(),p.pause=c.pause.bind(c),p.resume=c.resume.bind(c),p.stop=p,p}function $n(t,e=1/0,n){if(e<=0||!Je(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,mt(t))$n(t.value,e,n);else if(Le(t))for(let i=0;i<t.length;i++)$n(t[i],e,n);else if(la(t)||Ur(t))t.forEach(i=>{$n(i,e,n)});else if(cd(t)){for(const i in t)$n(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&$n(t[i],e,n)}return t}function Bs(t,e,n,i){try{return i?t(...i):t()}catch(r){is(r,e,n)}}function Tn(t,e,n,i){if(De(t)){const r=Bs(t,e,n,i);return r&&ad(r)&&r.catch(s=>{is(s,e,n)}),r}if(Le(t)){const r=[];for(let s=0;s<t.length;s++)r.push(Tn(t[s],e,n,i));return r}}function is(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||et;if(e){let o=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;o;){const c=o.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](t,l,u)===!1)return}o=o.parent}if(s){ni(),Bs(s,null,10,[t,l,u]),ii();return}}e_(t,n,r,i,a)}function e_(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const Ht=[];let wn=-1;const Fr=[];let vi=null,Rr=0;const Ud=Promise.resolve();let Ho=null;function Ls(t){const e=Ho||Ud;return t?e.then(this?t.bind(this):t):e}function t_(t){let e=wn+1,n=Ht.length;for(;e<n;){const i=e+n>>>1,r=Ht[i],s=Ds(r);s<t||s===t&&r.flags&2?e=i+1:n=i}return e}function Nc(t){if(!(t.flags&1)){const e=Ds(t),n=Ht[Ht.length-1];!n||!(t.flags&2)&&e>=Ds(n)?Ht.push(t):Ht.splice(t_(e),0,t),t.flags|=1,Nd()}}function Nd(){Ho||(Ho=Ud.then(Od))}function zl(t){Le(t)?Fr.push(...t):vi&&t.id===-1?vi.splice(Rr+1,0,t):t.flags&1||(Fr.push(t),t.flags|=1),Nd()}function pu(t,e,n=wn+1){for(;n<Ht.length;n++){const i=Ht[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;Ht.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function ko(t){if(Fr.length){const e=[...new Set(Fr)].sort((n,i)=>Ds(n)-Ds(i));if(Fr.length=0,vi){vi.push(...e);return}for(vi=e,Rr=0;Rr<vi.length;Rr++){const n=vi[Rr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}vi=null,Rr=0}}const Ds=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Od(t){try{for(wn=0;wn<Ht.length;wn++){const e=Ht[wn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Bs(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;wn<Ht.length;wn++){const e=Ht[wn];e&&(e.flags&=-2)}wn=-1,Ht.length=0,ko(),Ho=null,(Ht.length||Fr.length)&&Od()}}let Rt=null,Fd=null;function Go(t){const e=Rt;return Rt=t,Fd=t&&t.type.__scopeId||null,e}function Bd(t,e=Rt,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&jo(-1);const s=Go(e);let a;try{a=t(...r)}finally{Go(s),i._d&&jo(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function yR(t,e){if(Rt===null)return t;const n=Ea(Rt),i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[s,a,o,l=et]=e[r];s&&(De(s)&&(s={mounted:s,updated:s}),s.deep&&$n(a),i.push({dir:s,instance:n,value:a,oldValue:void 0,arg:o,modifiers:l}))}return t}function Rn(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(ni(),Tn(l,n,8,[t.el,o,t,e]),ii())}}function Br(t,e){if(wt){let n=wt.provides;const i=wt.parent&&wt.parent.provides;i===n&&(n=wt.provides=Object.create(i)),n[t]=e}}function qt(t,e,n=!1){const i=rs();if(i||er){let r=er?er._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&De(e)?e.call(i&&i.proxy):e}}function Oc(){return!!(rs()||er)}const n_=Symbol.for("v-scx"),i_=()=>qt(n_);function r_(t,e){return Fc(t,null,e)}function Hr(t,e,n){return Fc(t,e,n)}function Fc(t,e,n=et){const{immediate:i,deep:r,flush:s,once:a}=n,o=Mt({},n),l=e&&i||!e&&s!=="post";let u;if(Yr){if(s==="sync"){const d=i_();u=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=Dn,d.resume=Dn,d.pause=Dn,d}}const c=wt;o.call=(d,_,v)=>Tn(d,c,_,v);let f=!1;s==="post"?o.scheduler=d=>{Et(d,c&&c.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(d,_)=>{_?d():Nc(d)}),o.augmentJob=d=>{e&&(d.flags|=4),f&&(d.flags|=2,c&&(d.id=c.uid,d.i=c))};const h=Qg(t,e,o);return Yr&&(u?u.push(h):l&&h()),h}function s_(t,e,n){const i=this.proxy,r=lt(t)?t.includes(".")?Hd(i,t):()=>i[t]:t.bind(i,i);let s;De(e)?s=e:(s=e.handler,n=e);const a=zs(this),o=Fc(r,s.bind(i),n);return a(),o}function Hd(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const o_=Symbol("_vte"),kd=t=>t.__isTeleport,qn=Symbol("_leaveCb"),Qs=Symbol("_enterCb");function a_(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return xa(()=>{t.isMounted=!0}),Gs(()=>{t.isUnmounting=!0}),t}const sn=[Function,Array],Gd={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:sn,onEnter:sn,onAfterEnter:sn,onEnterCancelled:sn,onBeforeLeave:sn,onLeave:sn,onAfterLeave:sn,onLeaveCancelled:sn,onBeforeAppear:sn,onAppear:sn,onAfterAppear:sn,onAppearCancelled:sn},zd=t=>{const e=t.subTree;return e.component?zd(e.component):e},l_={name:"BaseTransition",props:Gd,setup(t,{slots:e}){const n=rs(),i=a_();return()=>{const r=e.default&&Xd(e.default(),!0);if(!r||!r.length)return;const s=Vd(r),a=je(t),{mode:o}=a;if(i.isLeaving)return za(s);const l=mu(s);if(!l)return za(s);let u=Vl(l,a,i,n,f=>u=f);l.type!==pt&&jr(l,u);let c=n.subTree&&mu(n.subTree);if(c&&c.type!==pt&&!_n(c,l)&&zd(n).type!==pt){let f=Vl(c,a,i,n);if(jr(c,f),o==="out-in"&&l.type!==pt)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,c=void 0},za(s);o==="in-out"&&l.type!==pt?f.delayLeave=(h,d,_)=>{const v=Wd(i,c);v[String(c.key)]=c,h[qn]=()=>{d(),h[qn]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{_(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return s}}};function Vd(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==pt){e=n;break}}return e}const c_=l_;function Wd(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function Vl(t,e,n,i,r){const{appear:s,mode:a,persisted:o=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:c,onEnterCancelled:f,onBeforeLeave:h,onLeave:d,onAfterLeave:_,onLeaveCancelled:v,onBeforeAppear:m,onAppear:p,onAfterAppear:E,onAppearCancelled:g}=e,S=String(t.key),T=Wd(n,t),R=(G,y)=>{G&&Tn(G,i,9,y)},A=(G,y)=>{const C=y[1];R(G,y),Le(G)?G.every(B=>B.length<=1)&&C():G.length<=1&&C()},O={mode:a,persisted:o,beforeEnter(G){let y=l;if(!n.isMounted)if(s)y=m||l;else return;G[qn]&&G[qn](!0);const C=T[S];C&&_n(t,C)&&C.el[qn]&&C.el[qn](),R(y,[G])},enter(G){let y=u,C=c,B=f;if(!n.isMounted)if(s)y=p||u,C=E||c,B=g||f;else return;let j=!1;const L=G[Qs]=te=>{j||(j=!0,te?R(B,[G]):R(C,[G]),O.delayedLeave&&O.delayedLeave(),G[Qs]=void 0)};y?A(y,[G,L]):L()},leave(G,y){const C=String(t.key);if(G[Qs]&&G[Qs](!0),n.isUnmounting)return y();R(h,[G]);let B=!1;const j=G[qn]=L=>{B||(B=!0,y(),L?R(v,[G]):R(_,[G]),G[qn]=void 0,T[C]===t&&delete T[C])};T[C]=t,d?A(d,[G,j]):j()},clone(G){const y=Vl(G,e,n,i,r);return r&&r(y),y}};return O}function za(t){if(ks(t))return t=ri(t),t.children=null,t}function mu(t){if(!ks(t))return kd(t.type)&&t.children?Vd(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&De(n.default))return n.default()}}function jr(t,e){t.shapeFlag&6&&t.component?(t.transition=e,jr(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Xd(t,e=!1,n){let i=[],r=0;for(let s=0;s<t.length;s++){let a=t[s];const o=n==null?a.key:String(n)+String(a.key!=null?a.key:s);a.type===At?(a.patchFlag&128&&r++,i=i.concat(Xd(a.children,e,o))):(e||a.type!==pt)&&i.push(o!=null?ri(a,{key:o}):a)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function Hs(t,e){return De(t)?Mt({name:t.name},e,{setup:t}):t}function Bc(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const zo=new WeakMap;function kr(t,e,n,i,r=!1){if(Le(t)){t.forEach((_,v)=>kr(_,e&&(Le(e)?e[v]:e),n,i,r));return}if(ti(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&kr(t,e,n,i.component.subTree);return}const s=i.shapeFlag&4?Ea(i.component):i.el,a=r?null:s,{i:o,r:l}=t,u=e&&e.r,c=o.refs===et?o.refs={}:o.refs,f=o.setupState,h=je(f),d=f===et?od:_=>Ke(h,_);if(u!=null&&u!==l){if(gu(e),lt(u))c[u]=null,d(u)&&(f[u]=null);else if(mt(u)){u.value=null;const _=e;_.k&&(c[_.k]=null)}}if(De(l))Bs(l,o,12,[a,c]);else{const _=lt(l),v=mt(l);if(_||v){const m=()=>{if(t.f){const p=_?d(l)?f[l]:c[l]:l.value;if(r)Le(p)&&wc(p,s);else if(Le(p))p.includes(s)||p.push(s);else if(_)c[l]=[s],d(l)&&(f[l]=c[l]);else{const E=[s];l.value=E,t.k&&(c[t.k]=E)}}else _?(c[l]=a,d(l)&&(f[l]=a)):v&&(l.value=a,t.k&&(c[t.k]=a))};if(a){const p=()=>{m(),zo.delete(t)};p.id=-1,zo.set(t,p),Et(p,n)}else gu(t),m()}}}function gu(t){const e=zo.get(t);e&&(e.flags|=8,zo.delete(t))}let _u=!1;const fr=()=>{_u||(console.error("Hydration completed but contains mismatches."),_u=!0)},u_=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",f_=t=>t.namespaceURI.includes("MathML"),eo=t=>{if(t.nodeType===1){if(u_(t))return"svg";if(f_(t))return"mathml"}},Pr=t=>t.nodeType===8;function h_(t){const{mt:e,p:n,o:{patchProp:i,createText:r,nextSibling:s,parentNode:a,remove:o,insert:l,createComment:u}}=t,c=(g,S)=>{if(!S.hasChildNodes()){n(null,g,S),ko(),S._vnode=g;return}f(S.firstChild,g,null,null,null),ko(),S._vnode=g},f=(g,S,T,R,A,O=!1)=>{O=O||!!S.dynamicChildren;const G=Pr(g)&&g.data==="[",y=()=>v(g,S,T,R,A,G),{type:C,ref:B,shapeFlag:j,patchFlag:L}=S;let te=g.nodeType;S.el=g,L===-2&&(O=!1,S.dynamicChildren=null);let N=null;switch(C){case tr:te!==3?S.children===""?(l(S.el=r(""),a(g),g),N=g):N=y():(g.data!==S.children&&(fr(),g.data=S.children),N=s(g));break;case pt:E(g)?(N=s(g),p(S.el=g.content.firstChild,g,T)):te!==8||G?N=y():N=s(g);break;case Ts:if(G&&(g=s(g),te=g.nodeType),te===1||te===3){N=g;const W=!S.children.length;for(let H=0;H<S.staticCount;H++)W&&(S.children+=N.nodeType===1?N.outerHTML:N.data),H===S.staticCount-1&&(S.anchor=N),N=s(N);return G?s(N):N}else y();break;case At:G?N=_(g,S,T,R,A,O):N=y();break;default:if(j&1)(te!==1||S.type.toLowerCase()!==g.tagName.toLowerCase())&&!E(g)?N=y():N=h(g,S,T,R,A,O);else if(j&6){S.slotScopeIds=A;const W=a(g);if(G?N=m(g):Pr(g)&&g.data==="teleport start"?N=m(g,g.data,"teleport end"):N=s(g),e(S,W,null,T,R,eo(W),O),ti(S)&&!S.type.__asyncResolved){let H;G?(H=ut(At),H.anchor=N?N.previousSibling:W.lastChild):H=g.nodeType===3?wp(""):ut("div"),H.el=g,S.component.subTree=H}}else j&64?te!==8?N=y():N=S.type.hydrate(g,S,T,R,A,O,t,d):j&128&&(N=S.type.hydrate(g,S,T,R,eo(a(g)),A,O,t,f))}return B!=null&&kr(B,null,R,S),N},h=(g,S,T,R,A,O)=>{O=O||!!S.dynamicChildren;const{type:G,props:y,patchFlag:C,shapeFlag:B,dirs:j,transition:L}=S,te=G==="input"||G==="option";if(te||C!==-1){j&&Rn(S,null,T,"created");let N=!1;if(E(g)){N=mp(null,L)&&T&&T.vnode.props&&T.vnode.props.appear;const H=g.content.firstChild;if(N){const re=H.getAttribute("class");re&&(H.$cls=re),L.beforeEnter(H)}p(H,g,T),S.el=g=H}if(B&16&&!(y&&(y.innerHTML||y.textContent))){let H=d(g.firstChild,S,g,T,R,A,O);for(;H;){to(g,1)||fr();const re=H;H=H.nextSibling,o(re)}}else if(B&8){let H=S.children;H[0]===`
`&&(g.tagName==="PRE"||g.tagName==="TEXTAREA")&&(H=H.slice(1));const{textContent:re}=g;re!==H&&re!==H.replace(/\r\n|\r/g,`
`)&&(to(g,0)||fr(),g.textContent=S.children)}if(y){if(te||!O||C&48){const H=g.tagName.includes("-");for(const re in y)(te&&(re.endsWith("value")||re==="indeterminate")||Fs(re)&&!Nr(re)||re[0]==="."||H)&&i(g,re,null,y[re],void 0,T)}else if(y.onClick)i(g,"onClick",null,y.onClick,void 0,T);else if(C&4&&Ti(y.style))for(const H in y.style)y.style[H]}let W;(W=y&&y.onVnodeBeforeMount)&&zt(W,T,S),j&&Rn(S,null,T,"beforeMount"),((W=y&&y.onVnodeMounted)||j||N)&&Sp(()=>{W&&zt(W,T,S),N&&L.enter(g),j&&Rn(S,null,T,"mounted")},R)}return g.nextSibling},d=(g,S,T,R,A,O,G)=>{G=G||!!S.dynamicChildren;const y=S.children,C=y.length;for(let B=0;B<C;B++){const j=G?y[B]:y[B]=en(y[B]),L=j.type===tr;g?(L&&!G&&B+1<C&&en(y[B+1]).type===tr&&(l(r(g.data.slice(j.children.length)),T,s(g)),g.data=j.children),g=f(g,j,R,A,O,G)):L&&!j.children?l(j.el=r(""),T):(to(T,1)||fr(),n(null,j,T,null,R,A,eo(T),O))}return g},_=(g,S,T,R,A,O)=>{const{slotScopeIds:G}=S;G&&(A=A?A.concat(G):G);const y=a(g),C=d(s(g),S,y,T,R,A,O);return C&&Pr(C)&&C.data==="]"?s(S.anchor=C):(fr(),l(S.anchor=u("]"),y,C),C)},v=(g,S,T,R,A,O)=>{if(to(g.parentElement,1)||fr(),S.el=null,O){const C=m(g);for(;;){const B=s(g);if(B&&B!==C)o(B);else break}}const G=s(g),y=a(g);return o(g),n(null,S,y,G,T,R,eo(y),A),T&&(T.vnode.el=S.el,Sa(T,S.el)),G},m=(g,S="[",T="]")=>{let R=0;for(;g;)if(g=s(g),g&&Pr(g)&&(g.data===S&&R++,g.data===T)){if(R===0)return s(g);R--}return g},p=(g,S,T)=>{const R=S.parentNode;R&&R.replaceChild(g,S);let A=T;for(;A;)A.vnode.el===S&&(A.vnode.el=A.subTree.el=g),A=A.parent},E=g=>g.nodeType===1&&g.tagName==="TEMPLATE";return[c,f]}const vu="data-allow-mismatch",d_={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function to(t,e){if(e===0||e===1)for(;t&&!t.hasAttribute(vu);)t=t.parentElement;const n=t&&t.getAttribute(vu);if(n==null)return!1;if(n==="")return!0;{const i=n.split(",");return e===0&&i.includes("children")?!0:i.includes(d_[e])}}ha().requestIdleCallback;ha().cancelIdleCallback;function p_(t,e){if(Pr(t)&&t.data==="["){let n=1,i=t.nextSibling;for(;i;){if(i.nodeType===1){if(e(i)===!1)break}else if(Pr(i))if(i.data==="]"){if(--n===0)break}else i.data==="["&&n++;i=i.nextSibling}}else e(t)}const ti=t=>!!t.type.__asyncLoader;function Vo(t){De(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:i,delay:r=200,hydrate:s,timeout:a,suspensible:o=!0,onError:l}=t;let u=null,c,f=0;const h=()=>(f++,u=null,d()),d=()=>{let _;return u||(_=u=e().catch(v=>{if(v=v instanceof Error?v:new Error(String(v)),l)return new Promise((m,p)=>{l(v,()=>m(h()),()=>p(v),f+1)});throw v}).then(v=>_!==u&&u?u:(v&&(v.__esModule||v[Symbol.toStringTag]==="Module")&&(v=v.default),c=v,v)))};return Hs({name:"AsyncComponentWrapper",__asyncLoader:d,__asyncHydrate(_,v,m){let p=!1;(v.bu||(v.bu=[])).push(()=>p=!0);const E=()=>{p||m()},g=s?()=>{const S=s(E,T=>p_(_,T));S&&(v.bum||(v.bum=[])).push(S)}:E;c?g():d().then(()=>!v.isUnmounted&&g())},get __asyncResolved(){return c},setup(){const _=wt;if(Bc(_),c)return()=>no(c,_);const v=g=>{u=null,is(g,_,13,!i)};if(o&&_.suspense||Yr)return d().then(g=>()=>no(g,_)).catch(g=>(v(g),()=>i?ut(i,{error:g}):null));const m=In(!1),p=In(),E=In(!!r);return r&&setTimeout(()=>{E.value=!1},r),a!=null&&setTimeout(()=>{if(!m.value&&!p.value){const g=new Error(`Async component timed out after ${a}ms.`);v(g),p.value=g}},a),d().then(()=>{m.value=!0,_.parent&&ks(_.parent.vnode)&&_.parent.update()}).catch(g=>{v(g),p.value=g}),()=>{if(m.value&&c)return no(c,_);if(p.value&&i)return ut(i,{error:p.value});if(n&&!E.value)return no(n,_)}}})}function no(t,e){const{ref:n,props:i,children:r,ce:s}=e.vnode,a=ut(t,i,r);return a.ref=n,a.ce=s,delete e.vnode.ce,a}const ks=t=>t.type.__isKeepAlive,m_={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=rs(),i=n.ctx;if(!i.renderer)return()=>{const E=e.default&&e.default();return E&&E.length===1?E[0]:E};const r=new Map,s=new Set;let a=null;const o=n.suspense,{renderer:{p:l,m:u,um:c,o:{createElement:f}}}=i,h=f("div");i.activate=(E,g,S,T,R)=>{const A=E.component;u(E,g,S,0,o),l(A.vnode,E,g,S,A,o,T,E.slotScopeIds,R),Et(()=>{A.isDeactivated=!1,A.a&&Or(A.a);const O=E.props&&E.props.onVnodeMounted;O&&zt(O,A.parent,E)},o)},i.deactivate=E=>{const g=E.component;Xo(g.m),Xo(g.a),u(E,h,null,1,o),Et(()=>{g.da&&Or(g.da);const S=E.props&&E.props.onVnodeUnmounted;S&&zt(S,g.parent,E),g.isDeactivated=!0},o)};function d(E){Va(E),c(E,n,o,!0)}function _(E){r.forEach((g,S)=>{const T=Zl(ti(g)?g.type.__asyncResolved||{}:g.type);T&&!E(T)&&v(S)})}function v(E){const g=r.get(E);g&&(!a||!_n(g,a))?d(g):a&&Va(a),r.delete(E),s.delete(E)}Hr(()=>[t.include,t.exclude],([E,g])=>{E&&_(S=>vs(E,S)),g&&_(S=>!vs(g,S))},{flush:"post",deep:!0});let m=null;const p=()=>{m!=null&&(qo(n.subTree.type)?Et(()=>{r.set(m,io(n.subTree))},n.subTree.suspense):r.set(m,io(n.subTree)))};return xa(p),Yd(p),Gs(()=>{r.forEach(E=>{const{subTree:g,suspense:S}=n,T=io(g);if(E.type===T.type&&E.key===T.key){Va(T);const R=T.component.da;R&&Et(R,S);return}d(E)})}),()=>{if(m=null,!e.default)return a=null;const E=e.default(),g=E[0];if(E.length>1)return a=null,E;if(!or(g)||!(g.shapeFlag&4)&&!(g.shapeFlag&128))return a=null,g;let S=io(g);if(S.type===pt)return a=null,S;const T=S.type,R=Zl(ti(S)?S.type.__asyncResolved||{}:T),{include:A,exclude:O,max:G}=t;if(A&&(!R||!vs(A,R))||O&&R&&vs(O,R))return S.shapeFlag&=-257,a=S,g;const y=S.key==null?T:S.key,C=r.get(y);return S.el&&(S=ri(S),g.shapeFlag&128&&(g.ssContent=S)),m=y,C?(S.el=C.el,S.component=C.component,S.transition&&jr(S,S.transition),S.shapeFlag|=512,s.delete(y),s.add(y)):(s.add(y),G&&s.size>parseInt(G,10)&&v(s.values().next().value)),S.shapeFlag|=256,a=S,qo(g.type)?g:S}}},g_=m_;function vs(t,e){return Le(t)?t.some(n=>vs(n,e)):lt(t)?t.split(",").includes(e):cg(t)?(t.lastIndex=0,t.test(e)):!1}function qd(t,e){$d(t,"a",e)}function jd(t,e){$d(t,"da",e)}function $d(t,e,n=wt){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(va(e,i,n),n){let r=n.parent;for(;r&&r.parent;)ks(r.parent.vnode)&&__(i,e,n,r),r=r.parent}}function __(t,e,n,i){const r=va(e,t,i,!0);Kd(()=>{wc(i[e],r)},n)}function Va(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function io(t){return t.shapeFlag&128?t.ssContent:t}function va(t,e,n=wt,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...a)=>{ni();const o=zs(n),l=Tn(e,n,t,a);return o(),ii(),l});return i?r.unshift(s):r.push(s),s}}const oi=t=>(e,n=wt)=>{(!Yr||t==="sp")&&va(t,(...i)=>e(...i),n)},v_=oi("bm"),xa=oi("m"),x_=oi("bu"),Yd=oi("u"),Gs=oi("bum"),Kd=oi("um"),y_=oi("sp"),S_=oi("rtg"),E_=oi("rtc");function Zd(t,e=wt){va("ec",t,e)}const Jd="components";function SR(t,e){return ep(Jd,t,!0,e)||t}const Qd=Symbol.for("v-ndc");function M_(t){return lt(t)?ep(Jd,t,!1)||t:t||Qd}function ep(t,e,n=!0,i=!1){const r=Rt||wt;if(r){const s=r.type;{const o=Zl(s,!1);if(o&&(o===e||o===hn(e)||o===fa(hn(e))))return s}const a=xu(r[t]||s[t],e)||xu(r.appContext[t],e);return!a&&i?s:a}}function xu(t,e){return t&&(t[e]||t[hn(e)]||t[fa(hn(e))])}function ER(t,e,n,i){let r;const s=n,a=Le(t);if(a||lt(t)){const o=a&&Ti(t);let l=!1,u=!1;o&&(l=!tn(t),u=Un(t),t=ga(t)),r=new Array(t.length);for(let c=0,f=t.length;c<f;c++)r[c]=e(l?u?qr(Mn(t[c])):Mn(t[c]):t[c],c,void 0,s)}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,s)}else if(Je(t))if(t[Symbol.iterator])r=Array.from(t,(o,l)=>e(o,l,void 0,s));else{const o=Object.keys(t);r=new Array(o.length);for(let l=0,u=o.length;l<u;l++){const c=o[l];r[l]=e(t[c],c,l,s)}}else r=[];return r}function MR(t,e,n={},i,r){if(Rt.ce||Rt.parent&&ti(Rt.parent)&&Rt.parent.ce){const u=Object.keys(n).length>0;return e!=="default"&&(n.name=e),Qt(),Yn(At,null,[ut("slot",n,i)],u?-2:64)}let s=t[e];s&&s._c&&(s._d=!1),Qt();const a=s&&tp(s(n)),o=n.key||a&&a.key,l=Yn(At,{key:(o&&!En(o)?o:`_${e}`)+(!a&&i?"_fb":"")},a||[],a&&t._===1?64:-2);return s&&s._c&&(s._d=!0),l}function tp(t){return t.some(e=>or(e)?!(e.type===pt||e.type===At&&!tp(e.children)):!0)?t:null}const Wl=t=>t?Rp(t)?Ea(t):Wl(t.parent):null,Ms=Mt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Wl(t.parent),$root:t=>Wl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>ip(t),$forceUpdate:t=>t.f||(t.f=()=>{Nc(t.update)}),$nextTick:t=>t.n||(t.n=Ls.bind(t.proxy)),$watch:t=>s_.bind(t)}),Wa=(t,e)=>t!==et&&!t.__isScriptSetup&&Ke(t,e),T_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=t;if(e[0]!=="$"){const h=a[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(Wa(i,e))return a[e]=1,i[e];if(r!==et&&Ke(r,e))return a[e]=2,r[e];if(Ke(s,e))return a[e]=3,s[e];if(n!==et&&Ke(n,e))return a[e]=4,n[e];Xl&&(a[e]=0)}}const u=Ms[e];let c,f;if(u)return e==="$attrs"&&It(t.attrs,"get",""),u(t);if((c=o.__cssModules)&&(c=c[e]))return c;if(n!==et&&Ke(n,e))return a[e]=4,n[e];if(f=l.config.globalProperties,Ke(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return Wa(r,e)?(r[e]=n,!0):i!==et&&Ke(i,e)?(i[e]=n,!0):Ke(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,props:s,type:a}},o){let l;return!!(n[o]||t!==et&&o[0]!=="$"&&Ke(t,o)||Wa(e,o)||Ke(s,o)||Ke(i,o)||Ke(Ms,o)||Ke(r.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ke(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function yu(t){return Le(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Xl=!0;function b_(t){const e=ip(t),n=t.proxy,i=t.ctx;Xl=!1,e.beforeCreate&&Su(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:u,created:c,beforeMount:f,mounted:h,beforeUpdate:d,updated:_,activated:v,deactivated:m,beforeDestroy:p,beforeUnmount:E,destroyed:g,unmounted:S,render:T,renderTracked:R,renderTriggered:A,errorCaptured:O,serverPrefetch:G,expose:y,inheritAttrs:C,components:B,directives:j,filters:L}=e;if(u&&A_(u,i,null),a)for(const W in a){const H=a[W];De(H)&&(i[W]=H.bind(n))}if(r){const W=r.call(n,n);Je(W)&&(t.data=Pi(W))}if(Xl=!0,s)for(const W in s){const H=s[W],re=De(H)?H.bind(n,n):De(H.get)?H.get.bind(n,n):Dn,he=!De(H)&&De(H.set)?H.set.bind(n):Dn,de=vn({get:re,set:he});Object.defineProperty(i,W,{enumerable:!0,configurable:!0,get:()=>de.value,set:ye=>de.value=ye})}if(o)for(const W in o)np(o[W],i,n,W);if(l){const W=De(l)?l.call(n):l;Reflect.ownKeys(W).forEach(H=>{Br(H,W[H])})}c&&Su(c,t,"c");function N(W,H){Le(H)?H.forEach(re=>W(re.bind(n))):H&&W(H.bind(n))}if(N(v_,f),N(xa,h),N(x_,d),N(Yd,_),N(qd,v),N(jd,m),N(Zd,O),N(E_,R),N(S_,A),N(Gs,E),N(Kd,S),N(y_,G),Le(y))if(y.length){const W=t.exposed||(t.exposed={});y.forEach(H=>{Object.defineProperty(W,H,{get:()=>n[H],set:re=>n[H]=re,enumerable:!0})})}else t.exposed||(t.exposed={});T&&t.render===Dn&&(t.render=T),C!=null&&(t.inheritAttrs=C),B&&(t.components=B),j&&(t.directives=j),G&&Bc(t)}function A_(t,e,n=Dn){Le(t)&&(t=ql(t));for(const i in t){const r=t[i];let s;Je(r)?"default"in r?s=qt(r.from||i,r.default,!0):s=qt(r.from||i):s=qt(r),mt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function Su(t,e,n){Tn(Le(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function np(t,e,n,i){let r=i.includes(".")?Hd(n,i):()=>n[i];if(lt(t)){const s=e[t];De(s)&&Hr(r,s)}else if(De(t))Hr(r,t.bind(n));else if(Je(t))if(Le(t))t.forEach(s=>np(s,e,n,i));else{const s=De(t.handler)?t.handler.bind(n):e[t.handler];De(s)&&Hr(r,s,t)}}function ip(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=t.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(u=>Wo(l,u,a,!0)),Wo(l,e,a)),Je(e)&&s.set(e,l),l}function Wo(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&Wo(t,s,n,!0),r&&r.forEach(a=>Wo(t,a,n,!0));for(const a in e)if(!(i&&a==="expose")){const o=w_[a]||n&&n[a];t[a]=o?o(t[a],e[a]):e[a]}return t}const w_={data:Eu,props:Mu,emits:Mu,methods:xs,computed:xs,beforeCreate:Nt,created:Nt,beforeMount:Nt,mounted:Nt,beforeUpdate:Nt,updated:Nt,beforeDestroy:Nt,beforeUnmount:Nt,destroyed:Nt,unmounted:Nt,activated:Nt,deactivated:Nt,errorCaptured:Nt,serverPrefetch:Nt,components:xs,directives:xs,watch:C_,provide:Eu,inject:R_};function Eu(t,e){return e?t?function(){return Mt(De(t)?t.call(this,this):t,De(e)?e.call(this,this):e)}:e:t}function R_(t,e){return xs(ql(t),ql(e))}function ql(t){if(Le(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Nt(t,e){return t?[...new Set([].concat(t,e))]:e}function xs(t,e){return t?Mt(Object.create(null),t,e):e}function Mu(t,e){return t?Le(t)&&Le(e)?[...new Set([...t,...e])]:Mt(Object.create(null),yu(t),yu(e??{})):e}function C_(t,e){if(!t)return e;if(!e)return t;const n=Mt(Object.create(null),t);for(const i in e)n[i]=Nt(t[i],e[i]);return n}function rp(){return{app:null,config:{isNativeTag:od,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let P_=0;function L_(t,e){return function(i,r=null){De(i)||(i=Mt({},i)),r!=null&&!Je(r)&&(r=null);const s=rp(),a=new WeakSet,o=[];let l=!1;const u=s.app={_uid:P_++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:uv,get config(){return s.config},set config(c){},use(c,...f){return a.has(c)||(c&&De(c.install)?(a.add(c),c.install(u,...f)):De(c)&&(a.add(c),c(u,...f))),u},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),u},component(c,f){return f?(s.components[c]=f,u):s.components[c]},directive(c,f){return f?(s.directives[c]=f,u):s.directives[c]},mount(c,f,h){if(!l){const d=u._ceVNode||ut(i,r);return d.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),f&&e?e(d,c):t(d,c,h),l=!0,u._container=c,c.__vue_app__=u,Ea(d.component)}},onUnmount(c){o.push(c)},unmount(){l&&(Tn(o,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(c,f){return s.provides[c]=f,u},runWithContext(c){const f=er;er=u;try{return c()}finally{er=f}}};return u}}let er=null;const D_=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${hn(e)}Modifiers`]||t[`${lr(e)}Modifiers`];function I_(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||et;let r=n;const s=e.startsWith("update:"),a=s&&D_(i,e.slice(7));a&&(a.trim&&(r=n.map(c=>lt(c)?c.trim():c)),a.number&&(r=n.map(Rc)));let o,l=i[o=Fa(e)]||i[o=Fa(hn(e))];!l&&s&&(l=i[o=Fa(lr(e))]),l&&Tn(l,t,6,r);const u=i[o+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[o])return;t.emitted[o]=!0,Tn(u,t,6,r)}}const U_=new WeakMap;function sp(t,e,n=!1){const i=n?U_:e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let a={},o=!1;if(!De(t)){const l=u=>{const c=sp(u,e,!0);c&&(o=!0,Mt(a,c))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!o?(Je(t)&&i.set(t,null),null):(Le(s)?s.forEach(l=>a[l]=null):Mt(a,s),Je(t)&&i.set(t,a),a)}function ya(t,e){return!t||!Fs(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ke(t,e[0].toLowerCase()+e.slice(1))||Ke(t,lr(e))||Ke(t,e))}function Xa(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:u,renderCache:c,props:f,data:h,setupState:d,ctx:_,inheritAttrs:v}=t,m=Go(t);let p,E;try{if(n.shapeFlag&4){const S=r||i,T=S;p=en(u.call(T,S,c,f,d,h,_)),E=o}else{const S=e;p=en(S.length>1?S(f,{attrs:o,slots:a,emit:l}):S(f,null)),E=e.props?o:O_(o)}}catch(S){bs.length=0,is(S,t,1),p=ut(pt)}let g=p;if(E&&v!==!1){const S=Object.keys(E),{shapeFlag:T}=g;S.length&&T&7&&(s&&S.some(Ac)&&(E=F_(E,s)),g=ri(g,E,!1,!0))}return n.dirs&&(g=ri(g,null,!1,!0),g.dirs=g.dirs?g.dirs.concat(n.dirs):n.dirs),n.transition&&jr(g,n.transition),p=g,Go(m),p}function N_(t,e=!0){let n;for(let i=0;i<t.length;i++){const r=t[i];if(or(r)){if(r.type!==pt||r.children==="v-if"){if(n)return;n=r}}else return}return n}const O_=t=>{let e;for(const n in t)(n==="class"||n==="style"||Fs(n))&&((e||(e={}))[n]=t[n]);return e},F_=(t,e)=>{const n={};for(const i in t)(!Ac(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function B_(t,e,n){const{props:i,children:r,component:s}=t,{props:a,children:o,patchFlag:l}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Tu(i,a,u):!!a;if(l&8){const c=e.dynamicProps;for(let f=0;f<c.length;f++){const h=c[f];if(a[h]!==i[h]&&!ya(u,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Tu(i,a,u):!0:!!a;return!1}function Tu(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!ya(n,s))return!0}return!1}function Sa({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const op={},ap=()=>Object.create(op),lp=t=>Object.getPrototypeOf(t)===op;function H_(t,e,n,i=!1){const r={},s=ap();t.propsDefaults=Object.create(null),cp(t,e,r,s);for(const a in t.propsOptions[0])a in r||(r[a]=void 0);n?t.props=i?r:Jn(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function k_(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=t,o=je(r),[l]=t.propsOptions;let u=!1;if((i||a>0)&&!(a&16)){if(a&8){const c=t.vnode.dynamicProps;for(let f=0;f<c.length;f++){let h=c[f];if(ya(t.emitsOptions,h))continue;const d=e[h];if(l)if(Ke(s,h))d!==s[h]&&(s[h]=d,u=!0);else{const _=hn(h);r[_]=jl(l,o,_,d,t,!1)}else d!==s[h]&&(s[h]=d,u=!0)}}}else{cp(t,e,r,s)&&(u=!0);let c;for(const f in o)(!e||!Ke(e,f)&&((c=lr(f))===f||!Ke(e,c)))&&(l?n&&(n[f]!==void 0||n[c]!==void 0)&&(r[f]=jl(l,o,f,void 0,t,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!Ke(e,f))&&(delete s[f],u=!0)}u&&jn(t.attrs,"set","")}function cp(t,e,n,i){const[r,s]=t.propsOptions;let a=!1,o;if(e)for(let l in e){if(Nr(l))continue;const u=e[l];let c;r&&Ke(r,c=hn(l))?!s||!s.includes(c)?n[c]=u:(o||(o={}))[c]=u:ya(t.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,a=!0)}if(s){const l=je(n),u=o||et;for(let c=0;c<s.length;c++){const f=s[c];n[f]=jl(r,l,f,u[f],t,!Ke(u,f))}}return a}function jl(t,e,n,i,r,s){const a=t[n];if(a!=null){const o=Ke(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&De(l)){const{propsDefaults:u}=r;if(n in u)i=u[n];else{const c=zs(r);i=u[n]=l.call(null,e),c()}}else i=l;r.ce&&r.ce._setProp(n,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===lr(n))&&(i=!0))}return i}const G_=new WeakMap;function up(t,e,n=!1){const i=n?G_:e.propsCache,r=i.get(t);if(r)return r;const s=t.props,a={},o=[];let l=!1;if(!De(t)){const c=f=>{l=!0;const[h,d]=up(f,e,!0);Mt(a,h),d&&o.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}if(!s&&!l)return Je(t)&&i.set(t,Ir),Ir;if(Le(s))for(let c=0;c<s.length;c++){const f=hn(s[c]);bu(f)&&(a[f]=et)}else if(s)for(const c in s){const f=hn(c);if(bu(f)){const h=s[c],d=a[f]=Le(h)||De(h)?{type:h}:Mt({},h),_=d.type;let v=!1,m=!0;if(Le(_))for(let p=0;p<_.length;++p){const E=_[p],g=De(E)&&E.name;if(g==="Boolean"){v=!0;break}else g==="String"&&(m=!1)}else v=De(_)&&_.name==="Boolean";d[0]=v,d[1]=m,(v||Ke(d,"default"))&&o.push(f)}}const u=[a,o];return Je(t)&&i.set(t,u),u}function bu(t){return t[0]!=="$"&&!Nr(t)}const Hc=t=>t==="_"||t==="_ctx"||t==="$stable",kc=t=>Le(t)?t.map(en):[en(t)],z_=(t,e,n)=>{if(e._n)return e;const i=Bd((...r)=>kc(e(...r)),n);return i._c=!1,i},fp=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Hc(r))continue;const s=t[r];if(De(s))e[r]=z_(r,s,i);else if(s!=null){const a=kc(s);e[r]=()=>a}}},hp=(t,e)=>{const n=kc(e);t.slots.default=()=>n},dp=(t,e,n)=>{for(const i in e)(n||!Hc(i))&&(t[i]=e[i])},V_=(t,e,n)=>{const i=t.slots=ap();if(t.vnode.shapeFlag&32){const r=e._;r?(dp(i,e,n),n&&ud(i,"_",r,!0)):fp(e,i)}else e&&hp(t,e)},W_=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,a=et;if(i.shapeFlag&32){const o=e._;o?n&&o===1?s=!1:dp(r,e,n):(s=!e.$stable,fp(e,r)),a=e}else e&&(hp(t,e),a={default:1});if(s)for(const o in r)!Hc(o)&&a[o]==null&&delete r[o]},Et=Sp;function X_(t){return pp(t)}function q_(t){return pp(t,h_)}function pp(t,e){const n=ha();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:u,setElementText:c,parentNode:f,nextSibling:h,setScopeId:d=Dn,insertStaticContent:_}=t,v=(w,P,D,q=null,X=null,ee=null,ae=void 0,ce=null,M=!!P.dynamicChildren)=>{if(w===P)return;w&&!_n(w,P)&&(q=V(w),ye(w,X,ee,!0),w=null),P.patchFlag===-2&&(M=!1,P.dynamicChildren=null);const{type:x,ref:k,shapeFlag:F}=P;switch(x){case tr:m(w,P,D,q);break;case pt:p(w,P,D,q);break;case Ts:w==null&&E(P,D,q,ae);break;case At:B(w,P,D,q,X,ee,ae,ce,M);break;default:F&1?T(w,P,D,q,X,ee,ae,ce,M):F&6?j(w,P,D,q,X,ee,ae,ce,M):(F&64||F&128)&&x.process(w,P,D,q,X,ee,ae,ce,M,me)}k!=null&&X?kr(k,w&&w.ref,ee,P||w,!P):k==null&&w&&w.ref!=null&&kr(w.ref,null,ee,w,!0)},m=(w,P,D,q)=>{if(w==null)i(P.el=o(P.children),D,q);else{const X=P.el=w.el;P.children!==w.children&&u(X,P.children)}},p=(w,P,D,q)=>{w==null?i(P.el=l(P.children||""),D,q):P.el=w.el},E=(w,P,D,q)=>{[w.el,w.anchor]=_(w.children,P,D,q,w.el,w.anchor)},g=({el:w,anchor:P},D,q)=>{let X;for(;w&&w!==P;)X=h(w),i(w,D,q),w=X;i(P,D,q)},S=({el:w,anchor:P})=>{let D;for(;w&&w!==P;)D=h(w),r(w),w=D;r(P)},T=(w,P,D,q,X,ee,ae,ce,M)=>{if(P.type==="svg"?ae="svg":P.type==="math"&&(ae="mathml"),w==null)R(P,D,q,X,ee,ae,ce,M);else{const x=w.el&&w.el._isVueCE?w.el:null;try{x&&x._beginPatch(),G(w,P,X,ee,ae,ce,M)}finally{x&&x._endPatch()}}},R=(w,P,D,q,X,ee,ae,ce)=>{let M,x;const{props:k,shapeFlag:F,transition:$,dirs:K}=w;if(M=w.el=a(w.type,ee,k&&k.is,k),F&8?c(M,w.children):F&16&&O(w.children,M,null,q,X,qa(w,ee),ae,ce),K&&Rn(w,null,q,"created"),A(M,w,w.scopeId,ae,q),k){for(const Ee in k)Ee!=="value"&&!Nr(Ee)&&s(M,Ee,null,k[Ee],ee,q);"value"in k&&s(M,"value",null,k.value,ee),(x=k.onVnodeBeforeMount)&&zt(x,q,w)}K&&Rn(w,null,q,"beforeMount");const Se=mp(X,$);Se&&$.beforeEnter(M),i(M,P,D),((x=k&&k.onVnodeMounted)||Se||K)&&Et(()=>{x&&zt(x,q,w),Se&&$.enter(M),K&&Rn(w,null,q,"mounted")},X)},A=(w,P,D,q,X)=>{if(D&&d(w,D),q)for(let ee=0;ee<q.length;ee++)d(w,q[ee]);if(X){let ee=X.subTree;if(P===ee||qo(ee.type)&&(ee.ssContent===P||ee.ssFallback===P)){const ae=X.vnode;A(w,ae,ae.scopeId,ae.slotScopeIds,X.parent)}}},O=(w,P,D,q,X,ee,ae,ce,M=0)=>{for(let x=M;x<w.length;x++){const k=w[x]=ce?xi(w[x]):en(w[x]);v(null,k,P,D,q,X,ee,ae,ce)}},G=(w,P,D,q,X,ee,ae)=>{const ce=P.el=w.el;let{patchFlag:M,dynamicChildren:x,dirs:k}=P;M|=w.patchFlag&16;const F=w.props||et,$=P.props||et;let K;if(D&&Ui(D,!1),(K=$.onVnodeBeforeUpdate)&&zt(K,D,P,w),k&&Rn(P,w,D,"beforeUpdate"),D&&Ui(D,!0),(F.innerHTML&&$.innerHTML==null||F.textContent&&$.textContent==null)&&c(ce,""),x?y(w.dynamicChildren,x,ce,D,q,qa(P,X),ee):ae||H(w,P,ce,null,D,q,qa(P,X),ee,!1),M>0){if(M&16)C(ce,F,$,D,X);else if(M&2&&F.class!==$.class&&s(ce,"class",null,$.class,X),M&4&&s(ce,"style",F.style,$.style,X),M&8){const Se=P.dynamicProps;for(let Ee=0;Ee<Se.length;Ee++){const le=Se[Ee],pe=F[le],Re=$[le];(Re!==pe||le==="value")&&s(ce,le,pe,Re,X,D)}}M&1&&w.children!==P.children&&c(ce,P.children)}else!ae&&x==null&&C(ce,F,$,D,X);((K=$.onVnodeUpdated)||k)&&Et(()=>{K&&zt(K,D,P,w),k&&Rn(P,w,D,"updated")},q)},y=(w,P,D,q,X,ee,ae)=>{for(let ce=0;ce<P.length;ce++){const M=w[ce],x=P[ce],k=M.el&&(M.type===At||!_n(M,x)||M.shapeFlag&198)?f(M.el):D;v(M,x,k,null,q,X,ee,ae,!0)}},C=(w,P,D,q,X)=>{if(P!==D){if(P!==et)for(const ee in P)!Nr(ee)&&!(ee in D)&&s(w,ee,P[ee],null,X,q);for(const ee in D){if(Nr(ee))continue;const ae=D[ee],ce=P[ee];ae!==ce&&ee!=="value"&&s(w,ee,ce,ae,X,q)}"value"in D&&s(w,"value",P.value,D.value,X)}},B=(w,P,D,q,X,ee,ae,ce,M)=>{const x=P.el=w?w.el:o(""),k=P.anchor=w?w.anchor:o("");let{patchFlag:F,dynamicChildren:$,slotScopeIds:K}=P;K&&(ce=ce?ce.concat(K):K),w==null?(i(x,D,q),i(k,D,q),O(P.children||[],D,k,X,ee,ae,ce,M)):F>0&&F&64&&$&&w.dynamicChildren&&w.dynamicChildren.length===$.length?(y(w.dynamicChildren,$,D,X,ee,ae,ce),(P.key!=null||X&&P===X.subTree)&&gp(w,P,!0)):H(w,P,D,k,X,ee,ae,ce,M)},j=(w,P,D,q,X,ee,ae,ce,M)=>{P.slotScopeIds=ce,w==null?P.shapeFlag&512?X.ctx.activate(P,D,q,ae,M):L(P,D,q,X,ee,ae,M):te(w,P,M)},L=(w,P,D,q,X,ee,ae)=>{const ce=w.component=rv(w,q,X);if(ks(w)&&(ce.ctx.renderer=me),sv(ce,!1,ae),ce.asyncDep){if(X&&X.registerDep(ce,N,ae),!w.el){const M=ce.subTree=ut(pt);p(null,M,P,D),w.placeholder=M.el}}else N(ce,w,P,D,X,ee,ae)},te=(w,P,D)=>{const q=P.component=w.component;if(B_(w,P,D))if(q.asyncDep&&!q.asyncResolved){W(q,P,D);return}else q.next=P,q.update();else P.el=w.el,q.vnode=P},N=(w,P,D,q,X,ee,ae)=>{const ce=()=>{if(w.isMounted){let{next:F,bu:$,u:K,parent:Se,vnode:Ee}=w;{const qe=_p(w);if(qe){F&&(F.el=Ee.el,W(w,F,ae)),qe.asyncDep.then(()=>{w.isUnmounted||ce()});return}}let le=F,pe;Ui(w,!1),F?(F.el=Ee.el,W(w,F,ae)):F=Ee,$&&Or($),(pe=F.props&&F.props.onVnodeBeforeUpdate)&&zt(pe,Se,F,Ee),Ui(w,!0);const Re=Xa(w),fe=w.subTree;w.subTree=Re,v(fe,Re,f(fe.el),V(fe),w,X,ee),F.el=Re.el,le===null&&Sa(w,Re.el),K&&Et(K,X),(pe=F.props&&F.props.onVnodeUpdated)&&Et(()=>zt(pe,Se,F,Ee),X)}else{let F;const{el:$,props:K}=P,{bm:Se,m:Ee,parent:le,root:pe,type:Re}=w,fe=ti(P);if(Ui(w,!1),Se&&Or(Se),!fe&&(F=K&&K.onVnodeBeforeMount)&&zt(F,le,P),Ui(w,!0),$&&I){const qe=()=>{w.subTree=Xa(w),I($,w.subTree,w,X,null)};fe&&Re.__asyncHydrate?Re.__asyncHydrate($,w,qe):qe()}else{pe.ce&&pe.ce._def.shadowRoot!==!1&&pe.ce._injectChildStyle(Re);const qe=w.subTree=Xa(w);v(null,qe,D,q,w,X,ee),P.el=qe.el}if(Ee&&Et(Ee,X),!fe&&(F=K&&K.onVnodeMounted)){const qe=P;Et(()=>zt(F,le,qe),X)}(P.shapeFlag&256||le&&ti(le.vnode)&&le.vnode.shapeFlag&256)&&w.a&&Et(w.a,X),w.isMounted=!0,P=D=q=null}};w.scope.on();const M=w.effect=new vd(ce);w.scope.off();const x=w.update=M.run.bind(M),k=w.job=M.runIfDirty.bind(M);k.i=w,k.id=w.uid,M.scheduler=()=>Nc(k),Ui(w,!0),x()},W=(w,P,D)=>{P.component=w;const q=w.vnode.props;w.vnode=P,w.next=null,k_(w,P.props,q,D),W_(w,P.children,D),ni(),pu(w),ii()},H=(w,P,D,q,X,ee,ae,ce,M=!1)=>{const x=w&&w.children,k=w?w.shapeFlag:0,F=P.children,{patchFlag:$,shapeFlag:K}=P;if($>0){if($&128){he(x,F,D,q,X,ee,ae,ce,M);return}else if($&256){re(x,F,D,q,X,ee,ae,ce,M);return}}K&8?(k&16&&xe(x,X,ee),F!==x&&c(D,F)):k&16?K&16?he(x,F,D,q,X,ee,ae,ce,M):xe(x,X,ee,!0):(k&8&&c(D,""),K&16&&O(F,D,q,X,ee,ae,ce,M))},re=(w,P,D,q,X,ee,ae,ce,M)=>{w=w||Ir,P=P||Ir;const x=w.length,k=P.length,F=Math.min(x,k);let $;for($=0;$<F;$++){const K=P[$]=M?xi(P[$]):en(P[$]);v(w[$],K,D,null,X,ee,ae,ce,M)}x>k?xe(w,X,ee,!0,!1,F):O(P,D,q,X,ee,ae,ce,M,F)},he=(w,P,D,q,X,ee,ae,ce,M)=>{let x=0;const k=P.length;let F=w.length-1,$=k-1;for(;x<=F&&x<=$;){const K=w[x],Se=P[x]=M?xi(P[x]):en(P[x]);if(_n(K,Se))v(K,Se,D,null,X,ee,ae,ce,M);else break;x++}for(;x<=F&&x<=$;){const K=w[F],Se=P[$]=M?xi(P[$]):en(P[$]);if(_n(K,Se))v(K,Se,D,null,X,ee,ae,ce,M);else break;F--,$--}if(x>F){if(x<=$){const K=$+1,Se=K<k?P[K].el:q;for(;x<=$;)v(null,P[x]=M?xi(P[x]):en(P[x]),D,Se,X,ee,ae,ce,M),x++}}else if(x>$)for(;x<=F;)ye(w[x],X,ee,!0),x++;else{const K=x,Se=x,Ee=new Map;for(x=Se;x<=$;x++){const be=P[x]=M?xi(P[x]):en(P[x]);be.key!=null&&Ee.set(be.key,x)}let le,pe=0;const Re=$-Se+1;let fe=!1,qe=0;const Fe=new Array(Re);for(x=0;x<Re;x++)Fe[x]=0;for(x=K;x<=F;x++){const be=w[x];if(pe>=Re){ye(be,X,ee,!0);continue}let we;if(be.key!=null)we=Ee.get(be.key);else for(le=Se;le<=$;le++)if(Fe[le-Se]===0&&_n(be,P[le])){we=le;break}we===void 0?ye(be,X,ee,!0):(Fe[we-Se]=x+1,we>=qe?qe=we:fe=!0,v(be,P[we],D,null,X,ee,ae,ce,M),pe++)}const Pe=fe?j_(Fe):Ir;for(le=Pe.length-1,x=Re-1;x>=0;x--){const be=Se+x,we=P[be],We=P[be+1],Oe=be+1<k?We.el||vp(We):q;Fe[x]===0?v(null,we,D,Oe,X,ee,ae,ce,M):fe&&(le<0||x!==Pe[le]?de(we,D,Oe,2):le--)}}},de=(w,P,D,q,X=null)=>{const{el:ee,type:ae,transition:ce,children:M,shapeFlag:x}=w;if(x&6){de(w.component.subTree,P,D,q);return}if(x&128){w.suspense.move(P,D,q);return}if(x&64){ae.move(w,P,D,me);return}if(ae===At){i(ee,P,D);for(let F=0;F<M.length;F++)de(M[F],P,D,q);i(w.anchor,P,D);return}if(ae===Ts){g(w,P,D);return}if(q!==2&&x&1&&ce)if(q===0)ce.beforeEnter(ee),i(ee,P,D),Et(()=>ce.enter(ee),X);else{const{leave:F,delayLeave:$,afterLeave:K}=ce,Se=()=>{w.ctx.isUnmounted?r(ee):i(ee,P,D)},Ee=()=>{ee._isLeaving&&ee[qn](!0),F(ee,()=>{Se(),K&&K()})};$?$(ee,Se,Ee):Ee()}else i(ee,P,D)},ye=(w,P,D,q=!1,X=!1)=>{const{type:ee,props:ae,ref:ce,children:M,dynamicChildren:x,shapeFlag:k,patchFlag:F,dirs:$,cacheIndex:K}=w;if(F===-2&&(X=!1),ce!=null&&(ni(),kr(ce,null,D,w,!0),ii()),K!=null&&(P.renderCache[K]=void 0),k&256){P.ctx.deactivate(w);return}const Se=k&1&&$,Ee=!ti(w);let le;if(Ee&&(le=ae&&ae.onVnodeBeforeUnmount)&&zt(le,P,w),k&6)ue(w.component,D,q);else{if(k&128){w.suspense.unmount(D,q);return}Se&&Rn(w,null,P,"beforeUnmount"),k&64?w.type.remove(w,P,D,me,q):x&&!x.hasOnce&&(ee!==At||F>0&&F&64)?xe(x,P,D,!1,!0):(ee===At&&F&384||!X&&k&16)&&xe(M,P,D),q&&Ue(w)}(Ee&&(le=ae&&ae.onVnodeUnmounted)||Se)&&Et(()=>{le&&zt(le,P,w),Se&&Rn(w,null,P,"unmounted")},D)},Ue=w=>{const{type:P,el:D,anchor:q,transition:X}=w;if(P===At){ne(D,q);return}if(P===Ts){S(w);return}const ee=()=>{r(D),X&&!X.persisted&&X.afterLeave&&X.afterLeave()};if(w.shapeFlag&1&&X&&!X.persisted){const{leave:ae,delayLeave:ce}=X,M=()=>ae(D,ee);ce?ce(w.el,ee,M):M()}else ee()},ne=(w,P)=>{let D;for(;w!==P;)D=h(w),r(w),w=D;r(P)},ue=(w,P,D)=>{const{bum:q,scope:X,job:ee,subTree:ae,um:ce,m:M,a:x}=w;Xo(M),Xo(x),q&&Or(q),X.stop(),ee&&(ee.flags|=8,ye(ae,w,P,D)),ce&&Et(ce,P),Et(()=>{w.isUnmounted=!0},P)},xe=(w,P,D,q=!1,X=!1,ee=0)=>{for(let ae=ee;ae<w.length;ae++)ye(w[ae],P,D,q,X)},V=w=>{if(w.shapeFlag&6)return V(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const P=h(w.anchor||w.el),D=P&&P[o_];return D?h(D):P};let oe=!1;const se=(w,P,D)=>{let q;w==null?P._vnode&&(ye(P._vnode,null,null,!0),q=P._vnode.component):v(P._vnode||null,w,P,null,null,null,D),P._vnode=w,oe||(oe=!0,pu(q),ko(),oe=!1)},me={p:v,um:ye,m:de,r:Ue,mt:L,mc:O,pc:H,pbc:y,n:V,o:t};let ge,I;return e&&([ge,I]=e(me)),{render:se,hydrate:ge,createApp:L_(se,ge)}}function qa({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ui({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function mp(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function gp(t,e,n=!1){const i=t.children,r=e.children;if(Le(i)&&Le(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=xi(r[s]),o.el=a.el),!n&&o.patchFlag!==-2&&gp(a,o)),o.type===tr&&(o.patchFlag!==-1?o.el=a.el:o.__elIndex=s+(t.type===At?1:0)),o.type===pt&&!o.el&&(o.el=a.el)}}function j_(t){const e=t.slice(),n=[0];let i,r,s,a,o;const l=t.length;for(i=0;i<l;i++){const u=t[i];if(u!==0){if(r=n[n.length-1],t[r]<u){e[i]=r,n.push(i);continue}for(s=0,a=n.length-1;s<a;)o=s+a>>1,t[n[o]]<u?s=o+1:a=o;u<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,a=n[s-1];s-- >0;)n[s]=a,a=e[a];return n}function _p(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:_p(e)}function Xo(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function vp(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?vp(e.subTree):null}const qo=t=>t.__isSuspense;let $l=0;const $_={name:"Suspense",__isSuspense:!0,process(t,e,n,i,r,s,a,o,l,u){if(t==null)Y_(e,n,i,r,s,a,o,l,u);else{if(s&&s.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}K_(t,e,n,i,r,a,o,l,u)}},hydrate:Z_,normalize:J_},xp=$_;function Is(t,e){const n=t.props&&t.props[e];De(n)&&n()}function Y_(t,e,n,i,r,s,a,o,l){const{p:u,o:{createElement:c}}=l,f=c("div"),h=t.suspense=yp(t,r,i,e,f,n,s,a,o,l);u(null,h.pendingBranch=t.ssContent,f,null,i,h,s,a),h.deps>0?(Is(t,"onPending"),Is(t,"onFallback"),u(null,t.ssFallback,e,n,i,null,s,a),Gr(h,t.ssFallback)):h.resolve(!1,!0)}function K_(t,e,n,i,r,s,a,o,{p:l,um:u,o:{createElement:c}}){const f=e.suspense=t.suspense;f.vnode=e,e.el=t.el;const h=e.ssContent,d=e.ssFallback,{activeBranch:_,pendingBranch:v,isInFallback:m,isHydrating:p}=f;if(v)f.pendingBranch=h,_n(v,h)?(l(v,h,f.hiddenContainer,null,r,f,s,a,o),f.deps<=0?f.resolve():m&&(p||(l(_,d,n,i,r,null,s,a,o),Gr(f,d)))):(f.pendingId=$l++,p?(f.isHydrating=!1,f.activeBranch=v):u(v,r,f),f.deps=0,f.effects.length=0,f.hiddenContainer=c("div"),m?(l(null,h,f.hiddenContainer,null,r,f,s,a,o),f.deps<=0?f.resolve():(l(_,d,n,i,r,null,s,a,o),Gr(f,d))):_&&_n(_,h)?(l(_,h,n,i,r,f,s,a,o),f.resolve(!0)):(l(null,h,f.hiddenContainer,null,r,f,s,a,o),f.deps<=0&&f.resolve()));else if(_&&_n(_,h))l(_,h,n,i,r,f,s,a,o),Gr(f,h);else if(Is(e,"onPending"),f.pendingBranch=h,h.shapeFlag&512?f.pendingId=h.component.suspenseId:f.pendingId=$l++,l(null,h,f.hiddenContainer,null,r,f,s,a,o),f.deps<=0)f.resolve();else{const{timeout:E,pendingId:g}=f;E>0?setTimeout(()=>{f.pendingId===g&&f.fallback(d)},E):E===0&&f.fallback(d)}}function yp(t,e,n,i,r,s,a,o,l,u,c=!1){const{p:f,m:h,um:d,n:_,o:{parentNode:v,remove:m}}=u;let p;const E=Q_(t);E&&e&&e.pendingBranch&&(p=e.pendingId,e.deps++);const g=t.props?fd(t.props.timeout):void 0,S=s,T={vnode:t,parent:e,parentComponent:n,namespace:a,container:i,hiddenContainer:r,deps:0,pendingId:$l++,timeout:typeof g=="number"?g:-1,activeBranch:null,pendingBranch:null,isInFallback:!c,isHydrating:c,isUnmounted:!1,effects:[],resolve(R=!1,A=!1){const{vnode:O,activeBranch:G,pendingBranch:y,pendingId:C,effects:B,parentComponent:j,container:L,isInFallback:te}=T;let N=!1;T.isHydrating?T.isHydrating=!1:R||(N=G&&y.transition&&y.transition.mode==="out-in",N&&(G.transition.afterLeave=()=>{C===T.pendingId&&(h(y,L,s===S?_(G):s,0),zl(B),te&&O.ssFallback&&(O.ssFallback.el=null))}),G&&(v(G.el)===L&&(s=_(G)),d(G,j,T,!0),!N&&te&&O.ssFallback&&Et(()=>O.ssFallback.el=null,T)),N||h(y,L,s,0)),Gr(T,y),T.pendingBranch=null,T.isInFallback=!1;let W=T.parent,H=!1;for(;W;){if(W.pendingBranch){W.effects.push(...B),H=!0;break}W=W.parent}!H&&!N&&zl(B),T.effects=[],E&&e&&e.pendingBranch&&p===e.pendingId&&(e.deps--,e.deps===0&&!A&&e.resolve()),Is(O,"onResolve")},fallback(R){if(!T.pendingBranch)return;const{vnode:A,activeBranch:O,parentComponent:G,container:y,namespace:C}=T;Is(A,"onFallback");const B=_(O),j=()=>{T.isInFallback&&(f(null,R,y,B,G,null,C,o,l),Gr(T,R))},L=R.transition&&R.transition.mode==="out-in";L&&(O.transition.afterLeave=j),T.isInFallback=!0,d(O,G,null,!0),L||j()},move(R,A,O){T.activeBranch&&h(T.activeBranch,R,A,O),T.container=R},next(){return T.activeBranch&&_(T.activeBranch)},registerDep(R,A,O){const G=!!T.pendingBranch;G&&T.deps++;const y=R.vnode.el;R.asyncDep.catch(C=>{is(C,R,0)}).then(C=>{if(R.isUnmounted||T.isUnmounted||T.pendingId!==R.suspenseId)return;R.asyncResolved=!0;const{vnode:B}=R;Kl(R,C),y&&(B.el=y);const j=!y&&R.subTree.el;A(R,B,v(y||R.subTree.el),y?null:_(R.subTree),T,a,O),j&&(B.placeholder=null,m(j)),Sa(R,B.el),G&&--T.deps===0&&T.resolve()})},unmount(R,A){T.isUnmounted=!0,T.activeBranch&&d(T.activeBranch,n,R,A),T.pendingBranch&&d(T.pendingBranch,n,R,A)}};return T}function Z_(t,e,n,i,r,s,a,o,l){const u=e.suspense=yp(e,i,n,t.parentNode,document.createElement("div"),null,r,s,a,o,!0),c=l(t,u.pendingBranch=e.ssContent,n,u,s,a);return u.deps===0&&u.resolve(!1,!0),c}function J_(t){const{shapeFlag:e,children:n}=t,i=e&32;t.ssContent=Au(i?n.default:n),t.ssFallback=i?Au(n.fallback):ut(pt)}function Au(t){let e;if(De(t)){const n=$r&&t._c;n&&(t._d=!1,Qt()),t=t(),n&&(t._d=!0,e=Xt,Ep())}return Le(t)&&(t=N_(t)),t=en(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function Sp(t,e){e&&e.pendingBranch?Le(t)?e.effects.push(...t):e.effects.push(t):zl(t)}function Gr(t,e){t.activeBranch=e;const{vnode:n,parentComponent:i}=t;let r=e.el;for(;!r&&e.component;)e=e.component.subTree,r=e.el;n.el=r,i&&i.subTree===n&&(i.vnode.el=r,Sa(i,r))}function Q_(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}const At=Symbol.for("v-fgt"),tr=Symbol.for("v-txt"),pt=Symbol.for("v-cmt"),Ts=Symbol.for("v-stc"),bs=[];let Xt=null;function Qt(t=!1){bs.push(Xt=t?null:[])}function Ep(){bs.pop(),Xt=bs[bs.length-1]||null}let $r=1;function jo(t,e=!1){$r+=t,t<0&&Xt&&e&&(Xt.hasOnce=!0)}function Mp(t){return t.dynamicChildren=$r>0?Xt||Ir:null,Ep(),$r>0&&Xt&&Xt.push(t),t}function Gc(t,e,n,i,r,s){return Mp(bp(t,e,n,i,r,s,!0))}function Yn(t,e,n,i,r){return Mp(ut(t,e,n,i,r,!0))}function or(t){return t?t.__v_isVNode===!0:!1}function _n(t,e){return t.type===e.type&&t.key===e.key}const Tp=({key:t})=>t??null,Do=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?lt(t)||mt(t)||De(t)?{i:Rt,r:t,k:e,f:!!n}:t:null);function bp(t,e=null,n=null,i=0,r=null,s=t===At?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Tp(e),ref:e&&Do(e),scopeId:Fd,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Rt};return o?(zc(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=lt(n)?8:16),$r>0&&!a&&Xt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Xt.push(l),l}const ut=ev;function ev(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===Qd)&&(t=pt),or(t)){const o=ri(t,e,!0);return n&&zc(o,n),$r>0&&!s&&Xt&&(o.shapeFlag&6?Xt[Xt.indexOf(t)]=o:Xt.push(o)),o.patchFlag=-2,o}if(cv(t)&&(t=t.__vccOpts),e){e=Ap(e);let{class:o,style:l}=e;o&&!lt(o)&&(e.class=pa(o)),Je(l)&&(_a(l)&&!Le(l)&&(l=Mt({},l)),e.style=da(l))}const a=lt(t)?1:qo(t)?128:kd(t)?64:Je(t)?4:De(t)?2:0;return bp(t,e,n,i,r,a,s,!0)}function Ap(t){return t?_a(t)||lp(t)?Mt({},t):t:null}function ri(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=t,u=e?tv(r||{},e):r,c={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Tp(u),ref:e&&e.ref?n&&s?Le(s)?s.concat(Do(e)):[s,Do(e)]:Do(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==At?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ri(t.ssContent),ssFallback:t.ssFallback&&ri(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&jr(c,l.clone(c)),c}function wp(t=" ",e=0){return ut(tr,null,t,e)}function TR(t,e){const n=ut(Ts,null,t);return n.staticCount=e,n}function bR(t="",e=!1){return e?(Qt(),Yn(pt,null,t)):ut(pt,null,t)}function en(t){return t==null||typeof t=="boolean"?ut(pt):Le(t)?ut(At,null,t.slice()):or(t)?xi(t):ut(tr,null,String(t))}function xi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ri(t)}function zc(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Le(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),zc(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!lp(e)?e._ctx=Rt:r===3&&Rt&&(Rt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else De(e)?(e={default:e,_ctx:Rt},n=32):(e=String(e),i&64?(n=16,e=[wp(e)]):n=8);t.children=e,t.shapeFlag|=n}function tv(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=pa([e.class,i.class]));else if(r==="style")e.style=da([e.style,i.style]);else if(Fs(r)){const s=e[r],a=i[r];a&&s!==a&&!(Le(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function zt(t,e,n,i=null){Tn(t,e,7,[n,i])}const nv=rp();let iv=0;function rv(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||nv,s={uid:iv++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new gd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:up(i,r),emitsOptions:sp(i,r),emit:null,emitted:null,propsDefaults:et,inheritAttrs:i.inheritAttrs,ctx:et,data:et,props:et,attrs:et,slots:et,refs:et,setupState:et,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=I_.bind(null,s),t.ce&&t.ce(s),s}let wt=null;const rs=()=>wt||Rt;let $o,Yl;{const t=ha(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};$o=e("__VUE_INSTANCE_SETTERS__",n=>wt=n),Yl=e("__VUE_SSR_SETTERS__",n=>Yr=n)}const zs=t=>{const e=wt;return $o(t),t.scope.on(),()=>{t.scope.off(),$o(e)}},wu=()=>{wt&&wt.scope.off(),$o(null)};function Rp(t){return t.vnode.shapeFlag&4}let Yr=!1;function sv(t,e=!1,n=!1){e&&Yl(e);const{props:i,children:r}=t.vnode,s=Rp(t);H_(t,i,s,e),V_(t,r,n||e);const a=s?ov(t,e):void 0;return e&&Yl(!1),a}function ov(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,T_);const{setup:i}=n;if(i){ni();const r=t.setupContext=i.length>1?lv(t):null,s=zs(t),a=Bs(i,t,0,[t.props,r]),o=ad(a);if(ii(),s(),(o||t.sp)&&!ti(t)&&Bc(t),o){if(a.then(wu,wu),e)return a.then(l=>{Kl(t,l)}).catch(l=>{is(l,t,0)});t.asyncDep=a}else Kl(t,a)}else Cp(t)}function Kl(t,e,n){De(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Je(e)&&(t.setupState=Id(e)),Cp(t)}function Cp(t,e,n){const i=t.type;t.render||(t.render=i.render||Dn);{const r=zs(t);ni();try{b_(t)}finally{ii(),r()}}}const av={get(t,e){return It(t,"get",""),t[e]}};function lv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,av),slots:t.slots,emit:t.emit,expose:e}}function Ea(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Id(zg(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ms)return Ms[n](t)},has(e,n){return n in e||n in Ms}})):t.proxy}function Zl(t,e=!0){return De(t)?t.displayName||t.name:t.name||e&&t.__name}function cv(t){return De(t)&&"__vccOpts"in t}const vn=(t,e)=>Zg(t,e,Yr);function un(t,e,n){try{jo(-1);const i=arguments.length;return i===2?Je(e)&&!Le(e)?or(e)?ut(t,null,[e]):ut(t,e):ut(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&or(n)&&(n=[n]),ut(t,e,n))}finally{jo(1)}}const uv="3.5.26";let Jl;const Ru=typeof window<"u"&&window.trustedTypes;if(Ru)try{Jl=Ru.createPolicy("vue",{createHTML:t=>t})}catch{}const Pp=Jl?t=>Jl.createHTML(t):t=>t,fv="http://www.w3.org/2000/svg",hv="http://www.w3.org/1998/Math/MathML",Xn=typeof document<"u"?document:null,Cu=Xn&&Xn.createElement("template"),dv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?Xn.createElementNS(fv,t):e==="mathml"?Xn.createElementNS(hv,t):n?Xn.createElement(t,{is:n}):Xn.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>Xn.createTextNode(t),createComment:t=>Xn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Xn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const a=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{Cu.innerHTML=Pp(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const o=Cu.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},ci="transition",cs="animation",Us=Symbol("_vtc"),Lp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},pv=Mt({},Gd,Lp),mv=t=>(t.displayName="Transition",t.props=pv,t),gv=mv((t,{slots:e})=>un(c_,_v(t),e)),Ni=(t,e=[])=>{Le(t)?t.forEach(n=>n(...e)):t&&t(...e)},Pu=t=>t?Le(t)?t.some(e=>e.length>1):t.length>1:!1;function _v(t){const e={};for(const B in t)B in Lp||(e[B]=t[B]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:o=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:u=a,appearToClass:c=o,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=t,_=vv(r),v=_&&_[0],m=_&&_[1],{onBeforeEnter:p,onEnter:E,onEnterCancelled:g,onLeave:S,onLeaveCancelled:T,onBeforeAppear:R=p,onAppear:A=E,onAppearCancelled:O=g}=e,G=(B,j,L,te)=>{B._enterCancelled=te,Oi(B,j?c:o),Oi(B,j?u:a),L&&L()},y=(B,j)=>{B._isLeaving=!1,Oi(B,f),Oi(B,d),Oi(B,h),j&&j()},C=B=>(j,L)=>{const te=B?A:E,N=()=>G(j,B,L);Ni(te,[j,N]),Lu(()=>{Oi(j,B?l:s),Fn(j,B?c:o),Pu(te)||Du(j,i,v,N)})};return Mt(e,{onBeforeEnter(B){Ni(p,[B]),Fn(B,s),Fn(B,a)},onBeforeAppear(B){Ni(R,[B]),Fn(B,l),Fn(B,u)},onEnter:C(!1),onAppear:C(!0),onLeave(B,j){B._isLeaving=!0;const L=()=>y(B,j);Fn(B,f),B._enterCancelled?(Fn(B,h),Nu(B)):(Nu(B),Fn(B,h)),Lu(()=>{B._isLeaving&&(Oi(B,f),Fn(B,d),Pu(S)||Du(B,i,m,L))}),Ni(S,[B,L])},onEnterCancelled(B){G(B,!1,void 0,!0),Ni(g,[B])},onAppearCancelled(B){G(B,!0,void 0,!0),Ni(O,[B])},onLeaveCancelled(B){y(B),Ni(T,[B])}})}function vv(t){if(t==null)return null;if(Je(t))return[ja(t.enter),ja(t.leave)];{const e=ja(t);return[e,e]}}function ja(t){return fd(t)}function Fn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Us]||(t[Us]=new Set)).add(e)}function Oi(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[Us];n&&(n.delete(e),n.size||(t[Us]=void 0))}function Lu(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let xv=0;function Du(t,e,n,i){const r=t._endId=++xv,s=()=>{r===t._endId&&i()};if(n!=null)return setTimeout(s,n);const{type:a,timeout:o,propCount:l}=yv(t,e);if(!a)return i();const u=a+"end";let c=0;const f=()=>{t.removeEventListener(u,h),s()},h=d=>{d.target===t&&++c>=l&&f()};setTimeout(()=>{c<l&&f()},o+1),t.addEventListener(u,h)}function yv(t,e){const n=window.getComputedStyle(t),i=_=>(n[_]||"").split(", "),r=i(`${ci}Delay`),s=i(`${ci}Duration`),a=Iu(r,s),o=i(`${cs}Delay`),l=i(`${cs}Duration`),u=Iu(o,l);let c=null,f=0,h=0;e===ci?a>0&&(c=ci,f=a,h=s.length):e===cs?u>0&&(c=cs,f=u,h=l.length):(f=Math.max(a,u),c=f>0?a>u?ci:cs:null,h=c?c===ci?s.length:l.length:0);const d=c===ci&&/\b(?:transform|all)(?:,|$)/.test(i(`${ci}Property`).toString());return{type:c,timeout:f,propCount:h,hasTransform:d}}function Iu(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>Uu(n)+Uu(t[i])))}function Uu(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Nu(t){return(t?t.ownerDocument:document).body.offsetHeight}function Sv(t,e,n){const i=t[Us];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Ou=Symbol("_vod"),Ev=Symbol("_vsh"),Mv=Symbol(""),Tv=/(?:^|;)\s*display\s*:/;function bv(t,e,n){const i=t.style,r=lt(n);let s=!1;if(n&&!r){if(e)if(lt(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();n[o]==null&&Io(i,o,"")}else for(const a in e)n[a]==null&&Io(i,a,"");for(const a in n)a==="display"&&(s=!0),Io(i,a,n[a])}else if(r){if(e!==n){const a=i[Mv];a&&(n+=";"+a),i.cssText=n,s=Tv.test(n)}}else e&&t.removeAttribute("style");Ou in t&&(t[Ou]=s?i.display:"",t[Ev]&&(i.display="none"))}const Fu=/\s*!important$/;function Io(t,e,n){if(Le(n))n.forEach(i=>Io(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=Av(t,e);Fu.test(n)?t.setProperty(lr(i),n.replace(Fu,""),"important"):t[i]=n}}const Bu=["Webkit","Moz","ms"],$a={};function Av(t,e){const n=$a[e];if(n)return n;let i=hn(e);if(i!=="filter"&&i in t)return $a[e]=i;i=fa(i);for(let r=0;r<Bu.length;r++){const s=Bu[r]+i;if(s in t)return $a[e]=s}return e}const Hu="http://www.w3.org/1999/xlink";function ku(t,e,n,i,r,s=xg(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Hu,e.slice(6,e.length)):t.setAttributeNS(Hu,e,n):n==null||s&&!hd(n)?t.removeAttribute(e):t.setAttribute(e,s?"":En(n)?String(n):n)}function Gu(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Pp(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(o!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=hd(n):n==null&&o==="string"?(n="",a=!0):o==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(r||e)}function $i(t,e,n,i){t.addEventListener(e,n,i)}function wv(t,e,n,i){t.removeEventListener(e,n,i)}const zu=Symbol("_vei");function Rv(t,e,n,i,r=null){const s=t[zu]||(t[zu]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=Cv(e);if(i){const u=s[e]=Dv(i,r);$i(t,o,u,l)}else a&&(wv(t,o,a,l),s[e]=void 0)}}const Vu=/(?:Once|Passive|Capture)$/;function Cv(t){let e;if(Vu.test(t)){e={};let i;for(;i=t.match(Vu);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):lr(t.slice(2)),e]}let Ya=0;const Pv=Promise.resolve(),Lv=()=>Ya||(Pv.then(()=>Ya=0),Ya=Date.now());function Dv(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Tn(Iv(i,n.value),e,5,[i])};return n.value=t,n.attached=Lv(),n}function Iv(t,e){if(Le(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Wu=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Uv=(t,e,n,i,r,s)=>{const a=r==="svg";e==="class"?Sv(t,i,a):e==="style"?bv(t,n,i):Fs(e)?Ac(e)||Rv(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Nv(t,e,i,a))?(Gu(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ku(t,e,i,a,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!lt(i))?Gu(t,hn(e),i,s,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),ku(t,e,i,a))};function Nv(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Wu(e)&&De(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Wu(e)&&lt(n)?!1:e in t}const Yo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Le(e)?n=>Or(e,n):e};function Ov(t){t.target.composing=!0}function Xu(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const zr=Symbol("_assign");function qu(t,e,n){return e&&(t=t.trim()),n&&(t=Rc(t)),t}const AR={created(t,{modifiers:{lazy:e,trim:n,number:i}},r){t[zr]=Yo(r);const s=i||r.props&&r.props.type==="number";$i(t,e?"change":"input",a=>{a.target.composing||t[zr](qu(t.value,n,s))}),(n||s)&&$i(t,"change",()=>{t.value=qu(t.value,n,s)}),e||($i(t,"compositionstart",Ov),$i(t,"compositionend",Xu),$i(t,"change",Xu))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:r,number:s}},a){if(t[zr]=Yo(a),t.composing)return;const o=(s||t.type==="number")&&!/^0\d/.test(t.value)?Rc(t.value):t.value,l=e??"";o!==l&&(document.activeElement===t&&t.type!=="range"&&(i&&e===n||r&&t.value.trim()===l)||(t.value=l))}},wR={deep:!0,created(t,e,n){t[zr]=Yo(n),$i(t,"change",()=>{const i=t._modelValue,r=Fv(t),s=t.checked,a=t[zr];if(Le(i)){const o=dd(i,r),l=o!==-1;if(s&&!l)a(i.concat(r));else if(!s&&l){const u=[...i];u.splice(o,1),a(u)}}else if(la(i)){const o=new Set(i);s?o.add(r):o.delete(r),a(o)}else a(Dp(t,s))})},mounted:ju,beforeUpdate(t,e,n){t[zr]=Yo(n),ju(t,e,n)}};function ju(t,{value:e,oldValue:n},i){t._modelValue=e;let r;if(Le(e))r=dd(e,i.props.value)>-1;else if(la(e))r=e.has(i.props.value);else{if(e===n)return;r=ma(e,Dp(t,!0))}t.checked!==r&&(t.checked=r)}function Fv(t){return"_value"in t?t._value:t.value}function Dp(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Ip=Mt({patchProp:Uv},dv);let As,$u=!1;function Bv(){return As||(As=X_(Ip))}function Hv(){return As=$u?As:q_(Ip),$u=!0,As}const kv=((...t)=>{const e=Bv().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=Np(i);if(!r)return;const s=e._component;!De(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=n(r,!1,Up(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e}),Gv=((...t)=>{const e=Hv().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=Np(i);if(r)return n(r,!0,Up(r))},e});function Up(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Np(t){return lt(t)?document.querySelector(t):t}const zv=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,Vv=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,Wv=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function Xv(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){qv(t);return}return e}function qv(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function Ko(t,e={}){if(typeof t!="string")return t;if(t[0]==='"'&&t[t.length-1]==='"'&&t.indexOf("\\")===-1)return t.slice(1,-1);const n=t.trim();if(n.length<=9)switch(n.toLowerCase()){case"true":return!0;case"false":return!1;case"undefined":return;case"null":return null;case"nan":return Number.NaN;case"infinity":return Number.POSITIVE_INFINITY;case"-infinity":return Number.NEGATIVE_INFINITY}if(!Wv.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if(zv.test(t)||Vv.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,Xv)}return JSON.parse(t)}catch(i){if(e.strict)throw i;return t}}const jv=/#/g,$v=/&/g,Yv=/\//g,Kv=/=/g,Vc=/\+/g,Zv=/%5e/gi,Jv=/%60/gi,Qv=/%7c/gi,e0=/%20/gi;function t0(t){return encodeURI(""+t).replace(Qv,"|")}function Ql(t){return t0(typeof t=="string"?t:JSON.stringify(t)).replace(Vc,"%2B").replace(e0,"+").replace(jv,"%23").replace($v,"%26").replace(Jv,"`").replace(Zv,"^").replace(Yv,"%2F")}function Ka(t){return Ql(t).replace(Kv,"%3D")}function Zo(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function n0(t){return Zo(t.replace(Vc," "))}function i0(t){return Zo(t.replace(Vc," "))}function Op(t=""){const e=Object.create(null);t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const i=n.match(/([^=]+)=?(.*)/)||[];if(i.length<2)continue;const r=n0(i[1]);if(r==="__proto__"||r==="constructor")continue;const s=i0(i[2]||"");e[r]===void 0?e[r]=s:Array.isArray(e[r])?e[r].push(s):e[r]=[e[r],s]}return e}function r0(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${Ka(t)}=${Ql(n)}`).join("&"):`${Ka(t)}=${Ql(e)}`:Ka(t)}function s0(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>r0(e,t[e])).filter(Boolean).join("&")}const o0=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,a0=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,l0=/^([/\\]\s*){2,}[^/\\]/,c0=/^[\s\0]*(blob|data|javascript|vbscript):$/i,u0=/\/$|\/\?|\/#/,f0=/^\.?\//;function cr(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?o0.test(t):a0.test(t)||(e.acceptRelative?l0.test(t):!1)}function h0(t){return!!t&&c0.test(t)}function ec(t="",e){return e?u0.test(t):t.endsWith("/")}function Jo(t="",e){if(!e)return(ec(t)?t.slice(0,-1):t)||"/";if(!ec(t,!0))return t||"/";let n=t,i="";const r=t.indexOf("#");r!==-1&&(n=t.slice(0,r),i=t.slice(r));const[s,...a]=n.split("?");return((s.endsWith("/")?s.slice(0,-1):s)||"/")+(a.length>0?`?${a.join("?")}`:"")+i}function d0(t="",e){if(!e)return t.endsWith("/")?t:t+"/";if(ec(t,!0))return t||"/";let n=t,i="";const r=t.indexOf("#");if(r!==-1&&(n=t.slice(0,r),i=t.slice(r),!n))return i;const[s,...a]=n.split("?");return s+"/"+(a.length>0?`?${a.join("?")}`:"")+i}function p0(t,e){if(Bp(e)||cr(t))return t;const n=Jo(e);return t.startsWith(n)?t:Wc(n,t)}function Yu(t,e){if(Bp(e))return t;const n=Jo(e);if(!t.startsWith(n))return t;const i=t.slice(n.length);return i[0]==="/"?i:"/"+i}function Fp(t,e){const n=Gp(t),i={...Op(n.search),...e};return n.search=s0(i),_0(n)}function Bp(t){return!t||t==="/"}function m0(t){return t&&t!=="/"}function Wc(t,...e){let n=t||"";for(const i of e.filter(r=>m0(r)))if(n){const r=i.replace(f0,"");n=d0(n)+r}else n=i;return n}function Hp(...t){const e=/\/(?!\/)/,n=t.filter(Boolean),i=[];let r=0;for(const a of n)if(!(!a||a==="/")){for(const[o,l]of a.split(e).entries())if(!(!l||l===".")){if(l===".."){if(i.length===1&&cr(i[0]))continue;i.pop(),r--;continue}if(o===1&&i[i.length-1]?.endsWith(":/")){i[i.length-1]+="/"+l;continue}i.push(l),r++}}let s=i.join("/");return r>=0?n[0]?.startsWith("/")&&!s.startsWith("/")?s="/"+s:n[0]?.startsWith("./")&&!s.startsWith("./")&&(s="./"+s):s="../".repeat(-1*r)+s,n[n.length-1]?.endsWith("/")&&!s.endsWith("/")&&(s+="/"),s}function g0(t,e){return Zo(Jo(t))===Zo(Jo(e))}const kp=Symbol.for("ufo:protocolRelative");function Gp(t="",e){const n=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,f,h=""]=n;return{protocol:f.toLowerCase(),pathname:h,href:f+h,auth:"",host:"",search:"",hash:""}}if(!cr(t,{acceptRelative:!0}))return Ku(t);const[,i="",r,s=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,a="",o=""]=s.match(/([^#/?]*)(.*)?/)||[];i==="file:"&&(o=o.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:l,search:u,hash:c}=Ku(o);return{protocol:i.toLowerCase(),auth:r?r.slice(0,Math.max(0,r.length-1)):"",host:a,pathname:l,search:u,hash:c,[kp]:!i}}function Ku(t=""){const[e="",n="",i=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:i}}function _0(t){const e=t.pathname||"",n=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",i=t.hash||"",r=t.auth?t.auth+"@":"",s=t.host||"";return(t.protocol||t[kp]?(t.protocol||"")+"//":"")+r+s+e+n+i}class v0 extends Error{constructor(e,n){super(e,n),this.name="FetchError",n?.cause&&!this.cause&&(this.cause=n.cause)}}function x0(t){const e=t.error?.message||t.error?.toString()||"",n=t.request?.method||t.options?.method||"GET",i=t.request?.url||String(t.request)||"/",r=`[${n}] ${JSON.stringify(i)}`,s=t.response?`${t.response.status} ${t.response.statusText}`:"<no response>",a=`${r}: ${s}${e?` ${e}`:""}`,o=new v0(a,t.error?{cause:t.error}:void 0);for(const l of["request","options","response"])Object.defineProperty(o,l,{get(){return t[l]}});for(const[l,u]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(o,l,{get(){return t.response&&t.response[u]}});return o}const y0=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function Zu(t="GET"){return y0.has(t.toUpperCase())}function S0(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.buffer||t instanceof FormData||t instanceof URLSearchParams?!1:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const E0=new Set(["image/svg","application/xml","application/xhtml","application/html"]),M0=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function T0(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return M0.test(e)?"json":e==="text/event-stream"?"stream":E0.has(e)||e.startsWith("text/")?"text":"blob"}function b0(t,e,n,i){const r=A0(e?.headers??t?.headers,n?.headers,i);let s;return(n?.query||n?.params||e?.params||e?.query)&&(s={...n?.params,...n?.query,...e?.params,...e?.query}),{...n,...e,query:s,params:s,headers:r}}function A0(t,e,n){if(!e)return new n(t);const i=new n(e);if(t)for(const[r,s]of Symbol.iterator in t||Array.isArray(t)?t:new n(t))i.set(r,s);return i}async function ro(t,e){if(e)if(Array.isArray(e))for(const n of e)await n(t);else await e(t)}const w0=new Set([408,409,425,429,500,502,503,504]),R0=new Set([101,204,205,304]);function zp(t={}){const{fetch:e=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:i=globalThis.AbortController}=t;async function r(o){const l=o.error&&o.error.name==="AbortError"&&!o.options.timeout||!1;if(o.options.retry!==!1&&!l){let c;typeof o.options.retry=="number"?c=o.options.retry:c=Zu(o.options.method)?0:1;const f=o.response&&o.response.status||500;if(c>0&&(Array.isArray(o.options.retryStatusCodes)?o.options.retryStatusCodes.includes(f):w0.has(f))){const h=typeof o.options.retryDelay=="function"?o.options.retryDelay(o):o.options.retryDelay||0;return h>0&&await new Promise(d=>setTimeout(d,h)),s(o.request,{...o.options,retry:c-1})}}const u=x0(o);throw Error.captureStackTrace&&Error.captureStackTrace(u,s),u}const s=async function(l,u={}){const c={request:l,options:b0(l,u,t.defaults,n),response:void 0,error:void 0};if(c.options.method&&(c.options.method=c.options.method.toUpperCase()),c.options.onRequest&&(await ro(c,c.options.onRequest),c.options.headers instanceof n||(c.options.headers=new n(c.options.headers||{}))),typeof c.request=="string"&&(c.options.baseURL&&(c.request=p0(c.request,c.options.baseURL)),c.options.query&&(c.request=Fp(c.request,c.options.query),delete c.options.query),"query"in c.options&&delete c.options.query,"params"in c.options&&delete c.options.params),c.options.body&&Zu(c.options.method))if(S0(c.options.body)){const d=c.options.headers.get("content-type");typeof c.options.body!="string"&&(c.options.body=d==="application/x-www-form-urlencoded"?new URLSearchParams(c.options.body).toString():JSON.stringify(c.options.body)),d||c.options.headers.set("content-type","application/json"),c.options.headers.has("accept")||c.options.headers.set("accept","application/json")}else("pipeTo"in c.options.body&&typeof c.options.body.pipeTo=="function"||typeof c.options.body.pipe=="function")&&("duplex"in c.options||(c.options.duplex="half"));let f;if(!c.options.signal&&c.options.timeout){const d=new i;f=setTimeout(()=>{const _=new Error("[TimeoutError]: The operation was aborted due to timeout");_.name="TimeoutError",_.code=23,d.abort(_)},c.options.timeout),c.options.signal=d.signal}try{c.response=await e(c.request,c.options)}catch(d){return c.error=d,c.options.onRequestError&&await ro(c,c.options.onRequestError),await r(c)}finally{f&&clearTimeout(f)}if((c.response.body||c.response._bodyInit)&&!R0.has(c.response.status)&&c.options.method!=="HEAD"){const d=(c.options.parseResponse?"json":c.options.responseType)||T0(c.response.headers.get("content-type")||"");switch(d){case"json":{const _=await c.response.text(),v=c.options.parseResponse||Ko;c.response._data=v(_);break}case"stream":{c.response._data=c.response.body||c.response._bodyInit;break}default:c.response._data=await c.response[d]()}}return c.options.onResponse&&await ro(c,c.options.onResponse),!c.options.ignoreResponseError&&c.response.status>=400&&c.response.status<600?(c.options.onResponseError&&await ro(c,c.options.onResponseError),await r(c)):c.response},a=async function(l,u){return(await s(l,u))._data};return a.raw=s,a.native=(...o)=>e(...o),a.create=(o={},l={})=>zp({...t,...l,defaults:{...t.defaults,...l.defaults,...o}}),a}const Qo=(function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")})(),C0=Qo.fetch?(...t)=>Qo.fetch(...t):()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")),P0=Qo.Headers,L0=Qo.AbortController,D0=zp({fetch:C0,Headers:P0,AbortController:L0}),I0=D0,U0=()=>window?.__NUXT__?.config||{},Xc=()=>U0().app,N0=()=>Xc().baseURL,O0=()=>Xc().buildAssetsDir,qc=(...t)=>Hp(Vp(),O0(),...t),Vp=(...t)=>{const e=Xc(),n=e.cdnURL||e.baseURL;return t.length?Hp(n,...t):n};globalThis.__buildAssetsURL=qc,globalThis.__publicAssetsURL=Vp;globalThis.$fetch||(globalThis.$fetch=I0.create({baseURL:N0()}));"global"in globalThis||(globalThis.global=globalThis);function tc(t,e={},n){for(const i in t){const r=t[i],s=n?`${n}:${i}`:i;typeof r=="object"&&r!==null?tc(r,e,s):typeof r=="function"&&(e[s]=r)}return e}const F0={run:t=>t()},B0=()=>F0,Wp=typeof console.createTask<"u"?console.createTask:B0;function H0(t,e){const n=e.shift(),i=Wp(n);return t.reduce((r,s)=>r.then(()=>i.run(()=>s(...e))),Promise.resolve())}function k0(t,e){const n=e.shift(),i=Wp(n);return Promise.all(t.map(r=>i.run(()=>r(...e))))}function Za(t,e){for(const n of[...t])n(e)}class G0{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,i={}){if(!e||typeof n!="function")return()=>{};const r=e;let s;for(;this._deprecatedHooks[e];)s=this._deprecatedHooks[e],e=s.to;if(s&&!i.allowDeprecated){let a=s.message;a||(a=`${r} hook has been deprecated`+(s.to?`, please use ${s.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(a)||(console.warn(a),this._deprecatedMessages.add(a))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let i,r=(...s)=>(typeof i=="function"&&i(),i=void 0,r=void 0,n(...s));return i=this.hook(e,r),i}removeHook(e,n){if(this._hooks[e]){const i=this._hooks[e].indexOf(n);i!==-1&&this._hooks[e].splice(i,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const i=this._hooks[e]||[];delete this._hooks[e];for(const r of i)this.hook(e,r)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=tc(e),i=Object.keys(n).map(r=>this.hook(r,n[r]));return()=>{for(const r of i.splice(0,i.length))r()}}removeHooks(e){const n=tc(e);for(const i in n)this.removeHook(i,n[i])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(H0,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(k0,e,...n)}callHookWith(e,n,...i){const r=this._before||this._after?{name:n,args:i,context:{}}:void 0;this._before&&Za(this._before,r);const s=e(n in this._hooks?[...this._hooks[n]]:[],i);return s instanceof Promise?s.finally(()=>{this._after&&r&&Za(this._after,r)}):(this._after&&r&&Za(this._after,r),s)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function Xp(){return new G0}function z0(t={}){let e,n=!1;const i=a=>{if(e&&e!==a)throw new Error("Context conflict")};let r;if(t.asyncContext){const a=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;a?r=new a:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const s=()=>{if(r){const a=r.getStore();if(a!==void 0)return a}return e};return{use:()=>{const a=s();if(a===void 0)throw new Error("Context is not available");return a},tryUse:()=>s(),set:(a,o)=>{o||i(a),e=a,n=!0},unset:()=>{e=void 0,n=!1},call:(a,o)=>{i(a),e=a;try{return r?r.run(a,o):o()}finally{n||(e=void 0)}},async callAsync(a,o){e=a;const l=()=>{e=a},u=()=>e===a?l:void 0;nc.add(u);try{const c=r?r.run(a,o):o();return n||(e=void 0),await c}finally{nc.delete(u)}}}}function V0(t={}){const e={};return{get(n,i={}){return e[n]||(e[n]=z0({...t,...i})),e[n]}}}const ea=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},Ju="__unctx__",W0=ea[Ju]||(ea[Ju]=V0()),X0=(t,e={})=>W0.get(t,e),Qu="__unctx_async_handlers__",nc=ea[Qu]||(ea[Qu]=new Set);function Vr(t){const e=[];for(const r of nc){const s=r();s&&e.push(s)}const n=()=>{for(const r of e)r()};let i=t();return i&&typeof i=="object"&&"catch"in i&&(i=i.catch(r=>{throw n(),r})),[i,n]}const RR=!1,ef=!1,q0=!1,CR={componentName:"NuxtLink",prefetch:!0,prefetchOn:{visibility:!0}},j0=null,$0="#__nuxt",qp="nuxt-app",tf=36e5,Y0="vite:preloadError";function jp(t=qp){return X0(t,{asyncContext:!1})}const K0="__nuxt_plugin";function Z0(t){let e=0;const n={_id:t.id||qp||"nuxt-app",_scope:Eg(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.20.2"},get vue(){return n.vueApp.version}},payload:Jn({...t.ssrContext?.payload||{},data:Jn({}),state:Pi({}),once:new Set,_errors:Jn({})}),static:{data:{}},runWithContext(r){return n._scope.active&&!_d()?n._scope.run(()=>nf(n,r)):nf(n,r)},isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let r=!1;return()=>{if(!r&&(r=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:Jn({}),_payloadRevivers:{},...t};{const r=window.__NUXT__;if(r)for(const s in r)switch(s){case"data":case"state":case"_errors":Object.assign(n.payload[s],r[s]);break;default:n.payload[s]=r[s]}}n.hooks=Xp(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(r,s)=>{const a="$"+r;so(n,a,s),so(n.vueApp.config.globalProperties,a,s)},so(n.vueApp,"$nuxt",n),so(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener(Y0,s=>{n.callHook("app:chunkError",{error:s.payload}),s.payload.message.includes("Unable to preload CSS")&&s.preventDefault()}),window.useNuxtApp||=Tt;const r=n.hook("app:error",(...s)=>{console.error("[nuxt] error caught during app initialization",...s)});n.hook("app:mounted",r)}const i=n.payload.config;return n.provide("config",i),n}function J0(t,e){e.hooks&&t.hooks.addHooks(e.hooks)}async function Q0(t,e){if(typeof e=="function"){const{provide:n}=await t.runWithContext(()=>e(t))||{};if(n&&typeof n=="object")for(const i in n)t.provide(i,n[i])}}async function ex(t,e){const n=new Set,i=[],r=[];let s,a=0;async function o(l){const u=l.dependsOn?.filter(c=>e.some(f=>f._name===c)&&!n.has(c))??[];if(u.length>0)i.push([new Set(u),l]);else{const c=Q0(t,l).then(async()=>{l._name&&(n.add(l._name),await Promise.all(i.map(async([f,h])=>{f.has(l._name)&&(f.delete(l._name),f.size===0&&(a++,await o(h)))})))}).catch(f=>{if(!l.parallel&&!t.payload.error)throw f;s||=f});l.parallel?r.push(c):await c}}for(const l of e)J0(t,l);for(const l of e)await o(l);if(await Promise.all(r),a)for(let l=0;l<a;l++)await Promise.all(r);if(s)throw t.payload.error||s}function ai(t){if(typeof t=="function")return t;const e=t._name||t.name;return delete t.name,Object.assign(t.setup||(()=>{}),t,{[K0]:!0,_name:e})}function nf(t,e,n){const i=()=>e();return jp(t._id).set(t),t.vueApp.runWithContext(i)}function tx(t){let e;return Oc()&&(e=rs()?.appContext.app.$nuxt),e||=jp(t).tryUse(),e||null}function Tt(t){const e=tx(t);if(!e)throw new Error("[nuxt] instance unavailable");return e}function Ma(t){return Tt().$config}function so(t,e,n){Object.defineProperty(t,e,{get:()=>n})}function nx(t,e){return{ctx:{table:t},matchAll:n=>Yp(n,t)}}function $p(t){const e={};for(const n in t)e[n]=n==="dynamic"?new Map(Object.entries(t[n]).map(([i,r])=>[i,$p(r)])):new Map(Object.entries(t[n]));return e}function ix(t){return nx($p(t))}function Yp(t,e,n){t.endsWith("/")&&(t=t.slice(0,-1)||"/");const i=[];for(const[s,a]of rf(e.wildcard))(t===s||t.startsWith(s+"/"))&&i.push(a);for(const[s,a]of rf(e.dynamic))if(t.startsWith(s+"/")){const o="/"+t.slice(s.length).split("/").splice(2).join("/");i.push(...Yp(o,a))}const r=e.static.get(t);return r&&i.push(r),i.filter(Boolean)}function rf(t){return[...t.entries()].sort((e,n)=>e[0].length-n[0].length)}function Ja(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function ic(t,e,n=".",i){if(!Ja(e))return ic(t,{},n,i);const r=Object.assign({},e);for(const s in t){if(s==="__proto__"||s==="constructor")continue;const a=t[s];a!=null&&(i&&i(r,s,a,n)||(Array.isArray(a)&&Array.isArray(r[s])?r[s]=[...a,...r[s]]:Ja(a)&&Ja(r[s])?r[s]=ic(a,r[s],(n?`${n}.`:"")+s.toString(),i):r[s]=a))}return r}function rx(t){return(...e)=>e.reduce((n,i)=>ic(n,i,"",t),{})}const Kp=rx();function sx(t,e){try{return e in t}catch{return!1}}class sf extends Error{static __h3_error__=!0;statusCode=500;fatal=!1;unhandled=!1;statusMessage;data;cause;constructor(e,n={}){super(e,n),n.cause&&!this.cause&&(this.cause=n.cause)}toJSON(){const e={message:this.message,statusCode:rc(this.statusCode,500)};return this.statusMessage&&(e.statusMessage=Zp(this.statusMessage)),this.data!==void 0&&(e.data=this.data),e}}function ox(t){if(typeof t=="string")return new sf(t);if(ax(t))return t;const e=new sf(t.message??t.statusMessage??"",{cause:t.cause||t});if(sx(t,"stack"))try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=rc(t.statusCode,e.statusCode):t.status&&(e.statusCode=rc(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;Zp(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function ax(t){return t?.constructor?.__h3_error__===!0}const lx=/[^\u0009\u0020-\u007E]/g;function Zp(t=""){return t.replace(lx,"")}function rc(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}const cx=Symbol("layout-meta"),Ta=Symbol("route");import.meta.url.replace(/\/app\/.*$/,"/");const dn=()=>Tt()?.$router,Jp=()=>Oc()?qt(Ta,Tt()._route):Tt()._route;const ux=()=>{try{if(Tt()._processingMiddleware)return!0}catch{return!1}return!1},PR=(t,e)=>{t||="/";const n=typeof t=="string"?t:"path"in t?fx(t):dn().resolve(t).href;if(e?.open){const{target:l="_blank",windowFeatures:u={}}=e.open,c=[];for(const[f,h]of Object.entries(u))h!==void 0&&c.push(`${f.toLowerCase()}=${h}`);return open(n,l,c.join(", ")),Promise.resolve()}const i=cr(n,{acceptRelative:!0}),r=e?.external||i;if(r){if(!e?.external)throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:l}=new URL(n,window.location.href);if(l&&h0(l))throw new Error(`Cannot navigate to a URL with '${l}' protocol.`)}const s=ux();if(!r&&s){if(e?.replace){if(typeof t=="string"){const{pathname:l,search:u,hash:c}=Gp(t);return{path:l,...u&&{query:Op(u)},...c&&{hash:c},replace:!0}}return{...t,replace:!0}}return t}const a=dn(),o=Tt();return r?(o._scope.stop(),e?.replace?location.replace(n):location.href=n,s?o.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e?.replace?a.replace(t):a.push(t)};function fx(t){return Fp(t.path||"",t.query||{})+(t.hash||"")}const Qp="__nuxt_error",ba=()=>$g(Tt().payload,"error"),Xi=t=>{const e=nr(t);try{const n=ba();Tt().hooks.callHook("app:error",e),n.value||=e}catch{throw e}return e},hx=async(t={})=>{const e=Tt(),n=ba();e.callHook("app:error:cleared",t),t.redirect&&await dn().replace(t.redirect),n.value=j0},em=t=>!!t&&typeof t=="object"&&Qp in t,nr=t=>{const e=ox(t);return Object.defineProperty(e,Qp,{value:!0,configurable:!1,writable:!1}),e};function dx(t){const e=mx(t),n=new ArrayBuffer(e.length),i=new DataView(n);for(let r=0;r<n.byteLength;r++)i.setUint8(r,e.charCodeAt(r));return n}const px="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function mx(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,i=0;for(let r=0;r<t.length;r++)n<<=6,n|=px.indexOf(t[r]),i+=6,i===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=i=0);return i===12?(n>>=4,e+=String.fromCharCode(n)):i===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const gx=-1,_x=-2,vx=-3,xx=-4,yx=-5,Sx=-6;function Ex(t,e){return Mx(JSON.parse(t),e)}function Mx(t,e){if(typeof t=="number")return r(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,i=Array(n.length);function r(s,a=!1){if(s===gx)return;if(s===vx)return NaN;if(s===xx)return 1/0;if(s===yx)return-1/0;if(s===Sx)return-0;if(a||typeof s!="number")throw new Error("Invalid input");if(s in i)return i[s];const o=n[s];if(!o||typeof o!="object")i[s]=o;else if(Array.isArray(o))if(typeof o[0]=="string"){const l=o[0],u=e&&Object.hasOwn(e,l)?e[l]:void 0;if(u){let c=o[1];return typeof c!="number"&&(c=n.push(o[1])-1),i[s]=u(r(c))}switch(l){case"Date":i[s]=new Date(o[1]);break;case"Set":const c=new Set;i[s]=c;for(let d=1;d<o.length;d+=1)c.add(r(o[d]));break;case"Map":const f=new Map;i[s]=f;for(let d=1;d<o.length;d+=2)f.set(r(o[d]),r(o[d+1]));break;case"RegExp":i[s]=new RegExp(o[1],o[2]);break;case"Object":i[s]=Object(o[1]);break;case"BigInt":i[s]=BigInt(o[1]);break;case"null":const h=Object.create(null);i[s]=h;for(let d=1;d<o.length;d+=2)h[o[d]]=r(o[d+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const d=globalThis[l],_=new d(r(o[1]));i[s]=o[2]!==void 0?_.subarray(o[2],o[3]):_;break}case"ArrayBuffer":{const d=o[1],_=dx(d);i[s]=_;break}case"Temporal.Duration":case"Temporal.Instant":case"Temporal.PlainDate":case"Temporal.PlainTime":case"Temporal.PlainDateTime":case"Temporal.PlainMonthDay":case"Temporal.PlainYearMonth":case"Temporal.ZonedDateTime":{const d=l.slice(9);i[s]=Temporal[d].from(o[1]);break}case"URL":{const d=new URL(o[1]);i[s]=d;break}case"URLSearchParams":{const d=new URLSearchParams(o[1]);i[s]=d;break}default:throw new Error(`Unknown type ${l}`)}}else{const l=new Array(o.length);i[s]=l;for(let u=0;u<o.length;u+=1){const c=o[u];c!==_x&&(l[u]=r(c))}}else{const l={};i[s]=l;for(const u in o){if(u==="__proto__")throw new Error("Cannot parse an object with a `__proto__` property");const c=o[u];l[u]=r(c)}}return i[s]}return r(0)}const Tx=new Set(["link","style","script","noscript"]),bx=new Set(["title","titleTemplate","script","style","noscript"]),of=new Set(["base","meta","link","style","script","noscript"]),Ax=new Set(["title","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),wx=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),Rx=new Set(["key","tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent","processTemplateParams"]),Cx=new Set(["templateParams","htmlAttrs","bodyAttrs"]),Px=new Set(["theme-color","google-site-verification","og","article","book","profile","twitter","author"]);const Lx=["name","property","http-equiv"],Dx=new Set(["viewport","description","keywords","robots"]);function tm(t){const e=t.split(":");return e.length?Px.has(e[1]):!1}function sc(t){const{props:e,tag:n}=t;if(wx.has(n))return n;if(n==="link"&&e.rel==="canonical")return"canonical";if(e.charset)return"charset";if(t.tag==="meta"){for(const i of Lx)if(e[i]!==void 0){const r=e[i],s=r.includes(":"),a=Dx.has(r),l=!(s||a)&&t.key?`:key:${t.key}`:"";return`${n}:${r}${l}`}}if(t.key)return`${n}:key:${t.key}`;if(e.id)return`${n}:id:${e.id}`;if(bx.has(n)){const i=t.textContent||t.innerHTML;if(i)return`${n}:content:${i}`}}function af(t){const e=t._h||t._d;if(e)return e;const n=t.textContent||t.innerHTML;return n||`${t.tag}:${Object.entries(t.props).map(([i,r])=>`${i}:${String(r)}`).join(",")}`}function ta(t,e,n){typeof t==="function"&&(!n||n!=="titleTemplate"&&!(n[0]==="o"&&n[1]==="n"))&&(t=t());let r;if(e&&(r=e(n,t)),Array.isArray(r))return r.map(s=>ta(s,e));if(r?.constructor===Object){const s={};for(const a of Object.keys(r))s[a]=ta(r[a],e,a);return s}return r}function Ix(t,e){const n=t==="style"?new Map:new Set;function i(r){const s=r.trim();if(s)if(t==="style"){const[a,...o]=s.split(":").map(l=>l.trim());a&&o.length&&n.set(a,o.join(":"))}else s.split(" ").filter(Boolean).forEach(a=>n.add(a))}return typeof e=="string"?t==="style"?e.split(";").forEach(i):i(e):Array.isArray(e)?e.forEach(r=>i(r)):e&&typeof e=="object"&&Object.entries(e).forEach(([r,s])=>{s&&s!=="false"&&(t==="style"?n.set(r.trim(),s):i(r))}),n}function nm(t,e){return t.props=t.props||{},e?t.tag==="templateParams"?(t.props=e,t):(Object.entries(e).forEach(([n,i])=>{if(i===null){t.props[n]=null;return}if(n==="class"||n==="style"){t.props[n]=Ix(n,i);return}if(Rx.has(n)){if(["textContent","innerHTML"].includes(n)&&typeof i=="object"){let a=e.type;if(e.type||(a="application/json"),!a?.endsWith("json")&&a!=="speculationrules")return;e.type=a,t.props.type=a,t[n]=JSON.stringify(i)}else t[n]=i;return}const r=String(i),s=n.startsWith("data-");r==="true"||r===""?t.props[n]=s?r:!0:!i&&s&&r==="false"?t.props[n]="false":i!==void 0&&(t.props[n]=i)}),t):t}function Ux(t,e){const n=typeof e=="object"&&typeof e!="function"?e:{[t==="script"||t==="noscript"||t==="style"?"innerHTML":"textContent"]:e},i=nm({tag:t,props:{}},n);return i.key&&Tx.has(i.tag)&&(i.props["data-hid"]=i._h=i.key),i.tag==="script"&&typeof i.innerHTML=="object"&&(i.innerHTML=JSON.stringify(i.innerHTML),i.props.type=i.props.type||"application/json"),Array.isArray(i.props.content)?i.props.content.map(r=>({...i,props:{...i.props,content:r}})):i}function Nx(t,e){if(!t)return[];typeof t=="function"&&(t=t());const n=(r,s)=>{for(let a=0;a<e.length;a++)s=e[a](r,s);return s};t=n(void 0,t);const i=[];return t=ta(t,n),Object.entries(t||{}).forEach(([r,s])=>{if(s!==void 0)for(const a of Array.isArray(s)?s:[s])i.push(Ux(r,a))}),i.flat()}const oc=(t,e)=>t._w===e._w?t._p-e._p:t._w-e._w,lf={base:-10,title:10},Ox={critical:-8,high:-1,low:2},cf={meta:{"content-security-policy":-30,charset:-20,viewport:-15},link:{preconnect:20,stylesheet:60,preload:70,modulepreload:70,prefetch:90,"dns-prefetch":90,prerender:90},script:{async:30,defer:80,sync:50},style:{imported:40,sync:60}},Fx=/@import/,us=t=>t===""||t===!0;function Bx(t,e){if(typeof e.tagPriority=="number")return e.tagPriority;let n=100;const i=Ox[e.tagPriority]||0,r=t.resolvedOptions.disableCapoSorting?{link:{},script:{},style:{}}:cf;if(e.tag in lf)n=lf[e.tag];else if(e.tag==="meta"){const s=e.props["http-equiv"]==="content-security-policy"?"content-security-policy":e.props.charset?"charset":e.props.name==="viewport"?"viewport":null;s&&(n=cf.meta[s])}else e.tag==="link"&&e.props.rel?n=r.link[e.props.rel]:e.tag==="script"?us(e.props.async)?n=r.script.async:e.props.src&&!us(e.props.defer)&&!us(e.props.async)&&e.props.type!=="module"&&!e.props.type?.endsWith("json")?n=r.script.sync:us(e.props.defer)&&e.props.src&&!us(e.props.async)&&(n=r.script.defer):e.tag==="style"&&(n=e.innerHTML&&Fx.test(e.innerHTML)?r.style.imported:r.style.sync);return(n||100)+i}function uf(t,e){const n=typeof e=="function"?e(t):e,i=n.key||String(t.plugins.size+1);t.plugins.get(i)||(t.plugins.set(i,n),t.hooks.addHooks(n.hooks||{}))}function Hx(t={}){const e=Xp();e.addHooks(t.hooks||{});const n=!t.document,i=new Map,r=new Map,s=new Set,a={_entryCount:1,plugins:r,dirty:!1,resolvedOptions:t,hooks:e,ssr:n,entries:i,headEntries(){return[...i.values()]},use:o=>uf(a,o),push(o,l){const u={...l||{}};delete u.head;const c=u._index??a._entryCount++,f={_i:c,input:o,options:u},h={_poll(d=!1){a.dirty=!0,!d&&s.add(c),e.callHook("entries:updated",a)},dispose(){i.delete(c)&&a.invalidate()},patch(d){(!u.mode||u.mode==="server"&&n||u.mode==="client"&&!n)&&(f.input=d,i.set(c,f),h._poll())}};return h.patch(o),h},async resolveTags(){const o={tagMap:new Map,tags:[],entries:[...a.entries.values()]};for(await e.callHook("entries:resolve",o);s.size;){const h=s.values().next().value;s.delete(h);const d=i.get(h);if(d){const _={tags:Nx(d.input,t.propResolvers||[]).map(v=>Object.assign(v,d.options)),entry:d};await e.callHook("entries:normalize",_),d._tags=_.tags.map((v,m)=>(v._w=Bx(a,v),v._p=(d._i<<10)+m,v._d=sc(v),v))}}let l=!1;o.entries.flatMap(h=>(h._tags||[]).map(d=>({...d,props:{...d.props}}))).sort(oc).reduce((h,d)=>{const _=String(d._d||d._p);if(!h.has(_))return h.set(_,d);const v=h.get(_);if((d?.tagDuplicateStrategy||(Cx.has(d.tag)?"merge":null)||(d.key&&d.key===v.key?"merge":null))==="merge"){const p={...v.props};Object.entries(d.props).forEach(([E,g])=>p[E]=E==="style"?new Map([...v.props.style||new Map,...g]):E==="class"?new Set([...v.props.class||new Set,...g]):g),h.set(_,{...d,props:p})}else d._p>>10===v._p>>10&&d.tag==="meta"&&tm(_)?(h.set(_,Object.assign([...Array.isArray(v)?v:[v],d],d)),l=!0):(d._w===v._w?d._p>v._p:d?._w<v?._w)&&h.set(_,d);return h},o.tagMap);const u=o.tagMap.get("title"),c=o.tagMap.get("titleTemplate");if(a._title=u?.textContent,c){const h=c?.textContent;if(a._titleTemplate=h,h){let d=typeof h=="function"?h(u?.textContent):h;typeof d=="string"&&!a.plugins.has("template-params")&&(d=d.replace("%s",u?.textContent||"")),u?d===null?o.tagMap.delete("title"):o.tagMap.set("title",{...u,textContent:d}):(c.tag="title",c.textContent=d)}}o.tags=Array.from(o.tagMap.values()),l&&(o.tags=o.tags.flat().sort(oc)),await e.callHook("tags:beforeResolve",o),await e.callHook("tags:resolve",o),await e.callHook("tags:afterResolve",o);const f=[];for(const h of o.tags){const{innerHTML:d,tag:_,props:v}=h;if(Ax.has(_)&&!(Object.keys(v).length===0&&!h.innerHTML&&!h.textContent)&&!(_==="meta"&&!v.content&&!v["http-equiv"]&&!v.charset)){if(_==="script"&&d){if(v.type?.endsWith("json")){const m=typeof d=="string"?d:JSON.stringify(d);h.innerHTML=m.replace(/</g,"\\u003C")}else typeof d=="string"&&(h.innerHTML=d.replace(new RegExp(`</${_}`,"g"),`<\\/${_}`));h._d=sc(h)}f.push(h)}}return f},invalidate(){for(const o of i.values())s.add(o._i);a.dirty=!0,e.callHook("entries:updated",a)}};return(t?.plugins||[]).forEach(o=>uf(a,o)),a.hooks.callHook("init",a),t.init?.forEach(o=>o&&a.push(o)),a}const Qa="%separator";function kx(t,e,n=!1){let i;if(e==="s"||e==="pageTitle")i=t.pageTitle;else if(e.includes(".")){const r=e.indexOf(".");i=t[e.substring(0,r)]?.[e.substring(r+1)]}else i=t[e];if(i!==void 0)return n?(i||"").replace(/\\/g,"\\\\").replace(/</g,"\\u003C").replace(/"/g,'\\"'):i||""}function oo(t,e,n,i=!1){if(typeof t!="string"||!t.includes("%"))return t;let r=t;try{r=decodeURI(t)}catch{}const s=r.match(/%\w+(?:\.\w+)?/g);if(!s)return t;const a=t.includes(Qa);return t=t.replace(/%\w+(?:\.\w+)?/g,o=>{if(o===Qa||!s.includes(o))return o;const l=kx(e,o.slice(1),i);return l!==void 0?l:o}).trim(),a&&(t=t.split(Qa).map(o=>o.trim()).filter(o=>o!=="").join(n?` ${n} `:" ")),t}const ff=t=>t.includes(":key")?t:t.split(":").join(":key:"),Gx={key:"aliasSorting",hooks:{"tags:resolve":t=>{let e=!1;for(const n of t.tags){const i=n.tagPriority;if(!i)continue;const r=String(i);if(r.startsWith("before:")){const s=ff(r.slice(7)),a=t.tagMap.get(s);a&&(typeof a.tagPriority=="number"&&(n.tagPriority=a.tagPriority),n._p=a._p-1,e=!0)}else if(r.startsWith("after:")){const s=ff(r.slice(6)),a=t.tagMap.get(s);a&&(typeof a.tagPriority=="number"&&(n.tagPriority=a.tagPriority),n._p=a._p+1,e=!0)}}e&&(t.tags=t.tags.sort(oc))}}},zx={key:"deprecations",hooks:{"entries:normalize":({tags:t})=>{for(const e of t)e.props.children&&(e.innerHTML=e.props.children,delete e.props.children),e.props.hid&&(e.key=e.props.hid,delete e.props.hid),e.props.vmid&&(e.key=e.props.vmid,delete e.props.vmid),e.props.body&&(e.tagPosition="bodyClose",delete e.props.body)}}};async function ac(t){if(typeof t==="function")return t;if(t instanceof Promise)return await t;if(Array.isArray(t))return await Promise.all(t.map(n=>ac(n)));if(t?.constructor===Object){const n={};for(const i of Object.keys(t))n[i]=await ac(t[i]);return n}return t}const Vx={key:"promises",hooks:{"entries:resolve":async t=>{const e=[];for(const n in t.entries)t.entries[n]._promisesProcessed||e.push(ac(t.entries[n].input).then(i=>{t.entries[n].input=i,t.entries[n]._promisesProcessed=!0}));await Promise.all(e)}}},Wx={meta:"content",link:"href",htmlAttrs:"lang"},Xx=["innerHTML","textContent"],qx=t=>({key:"template-params",hooks:{"entries:normalize":e=>{const n=e.tags.filter(i=>i.tag==="templateParams"&&i.mode==="server")?.[0]?.props||{};Object.keys(n).length&&(t._ssrPayload={templateParams:{...t._ssrPayload?.templateParams||{},...n}})},"tags:resolve":({tagMap:e,tags:n})=>{const i=e.get("templateParams")?.props||{},r=i.separator||"|";delete i.separator,i.pageTitle=oo(i.pageTitle||t._title||"",i,r);for(const s of n){if(s.processTemplateParams===!1)continue;const a=Wx[s.tag];if(a&&typeof s.props[a]=="string")s.props[a]=oo(s.props[a],i,r);else if(s.processTemplateParams||s.tag==="titleTemplate"||s.tag==="title")for(const o of Xx)typeof s[o]=="string"&&(s[o]=oo(s[o],i,r,s.tag==="script"&&s.props.type.endsWith("json")))}t._templateParams=i,t._separator=r},"tags:afterResolve":({tagMap:e})=>{const n=e.get("title");n?.textContent&&n.processTemplateParams!==!1&&(n.textContent=oo(n.textContent,t._templateParams,t._separator))}}}),jx=(t,e)=>mt(e)?Wg(e):e,im="usehead";function $x(t){return{install(n){n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(im,t)}}.install}function Yx(){if(Oc()){const t=qt(im);if(!t)throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");return t}throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.")}function LR(t,e={}){const n=e.head||Yx();return n.ssr?n.push(t||{},e):Kx(n,t,e)}function Kx(t,e,n={}){const i=In(!1);let r;return r_(()=>{const a=i.value?{}:ta(e,jx);r?r.patch(a):r=t.push(a,n)}),rs()&&(Gs(()=>{r.dispose()}),jd(()=>{i.value=!0}),qd(()=>{i.value=!1})),r}let Uo,No;function Zx(){return Uo=$fetch(qc(`builds/meta/${Ma().app.buildId}.json`),{responseType:"json"}),Uo.then(t=>{No=ix(t.matcher)}).catch(t=>{console.error("[nuxt] Error fetching app manifest.",t)}),Uo}function Aa(){return Uo||Zx()}async function jc(t){const e=typeof t=="string"?t:t.path;if(await Aa(),!No)return console.error("[nuxt] Error creating app manifest matcher.",No),{};try{return Kp({},...No.matchAll(e).reverse())}catch(n){return console.error("[nuxt] Error matching route rules.",n),{}}}async function hf(t,e={}){if(!await sm(t))return null;const i=await Qx(t,e);return await rm(i)||null}const Jx="_payload.json";async function Qx(t,e={}){const n=new URL(t,"http://localhost");if(n.host!=="localhost"||cr(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+t);const i=Ma(),r=e.hash||(e.fresh?Date.now():i.app.buildId),s=i.app.cdnURL,a=s&&await sm(t)?s:i.app.baseURL;return Wc(a,n.pathname,Jx+(r?`?${r}`:""))}async function rm(t){const e=fetch(t,{cache:"force-cache"}).then(n=>n.text().then(om));try{return await e}catch(n){console.warn("[nuxt] Cannot load payload ",t,n)}return null}async function sm(t=Jp().path){const e=Tt();return t=t==="/"?t:t.replace(/\/$/,""),(await Aa()).prerendered.includes(t)?!0:e.runWithContext(async()=>{const i=await jc({path:t});return!!i.prerender&&!i.redirect})}let Fi=null;async function ey(){if(Fi)return Fi;const t=document.getElementById("__NUXT_DATA__");if(!t)return{};const e=await om(t.textContent||""),n=t.dataset.src?await rm(t.dataset.src):void 0;return Fi={...e,...n,...window.__NUXT__},Fi.config?.public&&(Fi.config.public=Pi(Fi.config.public)),Fi}async function om(t){return await Ex(t,Tt()._payloadRevivers)}function ty(t,e){Tt()._payloadRevivers[t]=e}const ny=[["NuxtError",t=>nr(t)],["EmptyShallowRef",t=>Ps(t==="_"?void 0:t==="0n"?BigInt(0):Ko(t))],["EmptyRef",t=>In(t==="_"?void 0:t==="0n"?BigInt(0):Ko(t))],["ShallowRef",t=>Ps(t)],["ShallowReactive",t=>Jn(t)],["Ref",t=>In(t)],["Reactive",t=>Pi(t)]],iy=ai({name:"nuxt:revive-payload:client",order:-30,async setup(t){let e,n;for(const[i,r]of ny)ty(i,r);Object.assign(t.payload,([e,n]=Vr(()=>t.runWithContext(ey)),e=await e,n(),e)),window.__NUXT__=t.payload}});async function $c(t,e={}){const n=e.document||t.resolvedOptions.document;if(!n||!t.dirty)return;const i={shouldRender:!0,tags:[]};if(await t.hooks.callHook("dom:beforeRender",i),!!i.shouldRender)return t._domUpdatePromise||(t._domUpdatePromise=new Promise(async r=>{const s=new Map,a=new Promise(d=>{t.resolveTags().then(_=>{d(_.map(v=>{const m=s.get(v._d)||0,p={tag:v,id:(m?`${v._d}:${m}`:v._d)||af(v),shouldRender:!0};return v._d&&tm(v._d)&&s.set(v._d,m+1),p}))})});let o=t._dom;if(!o){o={title:n.title,elMap:new Map().set("htmlAttrs",n.documentElement).set("bodyAttrs",n.body)};for(const d of["body","head"]){const _=n[d]?.children;for(const v of _){const m=v.tagName.toLowerCase();if(!of.has(m))continue;const p=nm({tag:m,props:{}},{innerHTML:v.innerHTML,...v.getAttributeNames().reduce((E,g)=>(E[g]=v.getAttribute(g),E),{})||{}});if(p.key=v.getAttribute("data-hid")||void 0,p._d=sc(p)||af(p),o.elMap.has(p._d)){let E=1,g=p._d;for(;o.elMap.has(g);)g=`${p._d}:${E++}`;o.elMap.set(g,v)}else o.elMap.set(p._d,v)}}}o.pendingSideEffects={...o.sideEffects},o.sideEffects={};function l(d,_,v){const m=`${d}:${_}`;o.sideEffects[m]=v,delete o.pendingSideEffects[m]}function u({id:d,$el:_,tag:v}){const m=v.tag.endsWith("Attrs");o.elMap.set(d,_),m||(v.textContent&&v.textContent!==_.textContent&&(_.textContent=v.textContent),v.innerHTML&&v.innerHTML!==_.innerHTML&&(_.innerHTML=v.innerHTML),l(d,"el",()=>{_?.remove(),o.elMap.delete(d)}));for(const p in v.props){if(!Object.prototype.hasOwnProperty.call(v.props,p))continue;const E=v.props[p];if(p.startsWith("on")&&typeof E=="function"){const S=_?.dataset;if(S&&S[`${p}fired`]){const T=p.slice(0,-5);E.call(_,new Event(T.substring(2)))}_.getAttribute(`data-${p}`)!==""&&((v.tag==="bodyAttrs"?n.defaultView:_).addEventListener(p.substring(2),E.bind(_)),_.setAttribute(`data-${p}`,""));continue}const g=`attr:${p}`;if(p==="class"){if(!E)continue;for(const S of E)m&&l(d,`${g}:${S}`,()=>_.classList.remove(S)),!_.classList.contains(S)&&_.classList.add(S)}else if(p==="style"){if(!E)continue;for(const[S,T]of E)l(d,`${g}:${S}`,()=>{_.style.removeProperty(S)}),_.style.setProperty(S,T)}else E!==!1&&E!==null&&(_.getAttribute(p)!==E&&_.setAttribute(p,E===!0?"":String(E)),m&&l(d,g,()=>_.removeAttribute(p)))}}const c=[],f={bodyClose:void 0,bodyOpen:void 0,head:void 0},h=await a;for(const d of h){const{tag:_,shouldRender:v,id:m}=d;if(v){if(_.tag==="title"){n.title=_.textContent,l("title","",()=>n.title=o.title);continue}d.$el=d.$el||o.elMap.get(m),d.$el?u(d):of.has(_.tag)&&c.push(d)}}for(const d of c){const _=d.tag.tagPosition||"head";d.$el=n.createElement(d.tag.tag),u(d),f[_]=f[_]||n.createDocumentFragment(),f[_].appendChild(d.$el)}for(const d of h)await t.hooks.callHook("dom:renderTag",d,n,l);f.head&&n.head.appendChild(f.head),f.bodyOpen&&n.body.insertBefore(f.bodyOpen,n.body.firstChild),f.bodyClose&&n.body.appendChild(f.bodyClose);for(const d in o.pendingSideEffects)o.pendingSideEffects[d]();t._dom=o,await t.hooks.callHook("dom:rendered",{renders:h}),r()}).finally(()=>{t._domUpdatePromise=void 0,t.dirty=!1})),t._domUpdatePromise}function ry(t={}){const e=t.domOptions?.render||$c;t.document=t.document||(typeof window<"u"?document:void 0);const n=t.document?.head.querySelector('script[id="unhead:payload"]')?.innerHTML||!1;return Hx({...t,plugins:[...t.plugins||[],{key:"client",hooks:{"entries:updated":e}}],init:[n?JSON.parse(n):!1,...t.init||[]]})}function sy(t,e){let n=0;return()=>{const i=++n;e(()=>{n===i&&t()})}}function oy(t={}){const e=ry({domOptions:{render:sy(()=>$c(e),n=>setTimeout(n,0))},...t});return e.install=$x(e),e}const ay={disableDefaults:!0,disableCapoSorting:!1,plugins:[zx,Vx,qx,Gx]},ly=ai({name:"nuxt:head",enforce:"pre",setup(t){const e=oy(ay);t.vueApp.use(e);{let n=!0;const i=async()=>{n=!1,await $c(e)};e.hooks.hook("dom:beforeRender",r=>{r.shouldRender=!n}),t.hooks.hook("page:start",()=>{n=!0}),t.hooks.hook("page:finish",()=>{t.isHydrating||i()}),t.hooks.hook("app:error",i),t.hooks.hook("app:suspense:resolve",i)}}});const Cr=typeof document<"u";function am(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function cy(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&am(t.default)}const Ye=Object.assign;function el(t,e){const n={};for(const i in e){const r=e[i];n[i]=bn(r)?r.map(t):t(r)}return n}const ws=()=>{},bn=Array.isArray;function df(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}const lm=/#/g,uy=/&/g,fy=/\//g,hy=/=/g,dy=/\?/g,cm=/\+/g,py=/%5B/g,my=/%5D/g,um=/%5E/g,gy=/%60/g,fm=/%7B/g,_y=/%7C/g,hm=/%7D/g,vy=/%20/g;function Yc(t){return t==null?"":encodeURI(""+t).replace(_y,"|").replace(py,"[").replace(my,"]")}function xy(t){return Yc(t).replace(fm,"{").replace(hm,"}").replace(um,"^")}function lc(t){return Yc(t).replace(cm,"%2B").replace(vy,"+").replace(lm,"%23").replace(uy,"%26").replace(gy,"`").replace(fm,"{").replace(hm,"}").replace(um,"^")}function yy(t){return lc(t).replace(hy,"%3D")}function Sy(t){return Yc(t).replace(lm,"%23").replace(dy,"%3F")}function Ey(t){return Sy(t).replace(fy,"%2F")}function Ns(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const My=/\/$/,Ty=t=>t.replace(My,"");function tl(t,e,n="/"){let i,r={},s="",a="";const o=e.indexOf("#");let l=e.indexOf("?");return l=o>=0&&l>o?-1:l,l>=0&&(i=e.slice(0,l),s=e.slice(l,o>0?o:e.length),r=t(s.slice(1))),o>=0&&(i=i||e.slice(0,o),a=e.slice(o,e.length)),i=Ry(i??e,n),{fullPath:i+s+a,path:i,query:r,hash:Ns(a)}}function by(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function pf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Ay(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&Kr(e.matched[i],n.matched[r])&&dm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Kr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function dm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!wy(t[n],e[n]))return!1;return!0}function wy(t,e){return bn(t)?mf(t,e):bn(e)?mf(e,t):t?.valueOf()===e?.valueOf()}function mf(t,e){return bn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function Ry(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=n.length-1,a,o;for(a=0;a<i.length;a++)if(o=i[a],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(a).join("/")}const an={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let cc=(function(t){return t.pop="pop",t.push="push",t})({}),nl=(function(t){return t.back="back",t.forward="forward",t.unknown="",t})({});function Cy(t){if(!t)if(Cr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Ty(t)}const Py=/^[^#]+#/;function Ly(t,e){return t.replace(Py,"#")+e}function Dy(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const wa=()=>({left:window.scrollX,top:window.scrollY});function Iy(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=Dy(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function gf(t,e){return(history.state?history.state.position-e:-1)+t}const uc=new Map;function Uy(t,e){uc.set(t,e)}function Ny(t){const e=uc.get(t);return uc.delete(t),e}function Oy(t){return typeof t=="string"||t&&typeof t=="object"}function pm(t){return typeof t=="string"||typeof t=="symbol"}let ft=(function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t})({});const mm=Symbol("");ft.MATCHER_NOT_FOUND+"",ft.NAVIGATION_GUARD_REDIRECT+"",ft.NAVIGATION_ABORTED+"",ft.NAVIGATION_CANCELLED+"",ft.NAVIGATION_DUPLICATED+"";function Zr(t,e){return Ye(new Error,{type:t,[mm]:!0},e)}function Bn(t,e){return t instanceof Error&&mm in t&&(e==null||!!(t.type&e))}const Fy=["params","query","hash"];function By(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of Fy)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function Hy(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<n.length;++i){const r=n[i].replace(cm," "),s=r.indexOf("="),a=Ns(s<0?r:r.slice(0,s)),o=s<0?null:Ns(r.slice(s+1));if(a in e){let l=e[a];bn(l)||(l=e[a]=[l]),l.push(o)}else e[a]=o}return e}function _f(t){let e="";for(let n in t){const i=t[n];if(n=yy(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(bn(i)?i.map(r=>r&&lc(r)):[i&&lc(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function ky(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=bn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const Gy=Symbol(""),vf=Symbol(""),Kc=Symbol(""),Zc=Symbol(""),fc=Symbol("");function fs(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function yi(t,e,n,i,r,s=a=>a()){const a=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,l)=>{const u=h=>{h===!1?l(Zr(ft.NAVIGATION_ABORTED,{from:n,to:e})):h instanceof Error?l(h):Oy(h)?l(Zr(ft.NAVIGATION_GUARD_REDIRECT,{from:e,to:h})):(a&&i.enterCallbacks[r]===a&&typeof h=="function"&&a.push(h),o())},c=s(()=>t.call(i&&i.instances[r],e,n,u));let f=Promise.resolve(c);t.length<3&&(f=f.then(u)),f.catch(h=>l(h))})}function il(t,e,n,i,r=s=>s()){const s=[];for(const a of t)for(const o in a.components){let l=a.components[o];if(!(e!=="beforeRouteEnter"&&!a.instances[o]))if(am(l)){const u=(l.__vccOpts||l)[e];u&&s.push(yi(u,n,i,a,o,r))}else{let u=l();s.push(()=>u.then(c=>{if(!c)throw new Error(`Couldn't resolve component "${o}" at "${a.path}"`);const f=cy(c)?c.default:c;a.mods[o]=c,a.components[o]=f;const h=(f.__vccOpts||f)[e];return h&&yi(h,n,i,a,o,r)()}))}}return s}function zy(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let a=0;a<s;a++){const o=e.matched[a];o&&(t.matched.find(u=>Kr(u,o))?i.push(o):n.push(o));const l=t.matched[a];l&&(e.matched.find(u=>Kr(u,l))||r.push(l))}return[n,i,r]}let Vy=()=>location.protocol+"//"+location.host;function gm(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let a=r.includes(t.slice(s))?t.slice(s).length:1,o=r.slice(a);return o[0]!=="/"&&(o="/"+o),pf(o,"")}return pf(n,t)+i+r}function Wy(t,e,n,i){let r=[],s=[],a=null;const o=({state:h})=>{const d=gm(t,location),_=n.value,v=e.value;let m=0;if(h){if(n.value=d,e.value=h,a&&a===_){a=null;return}m=v?h.position-v.position:0}else i(d);r.forEach(p=>{p(n.value,_,{delta:m,type:cc.pop,direction:m?m>0?nl.forward:nl.back:nl.unknown})})};function l(){a=n.value}function u(h){r.push(h);const d=()=>{const _=r.indexOf(h);_>-1&&r.splice(_,1)};return s.push(d),d}function c(){if(document.visibilityState==="hidden"){const{history:h}=window;if(!h.state)return;h.replaceState(Ye({},h.state,{scroll:wa()}),"")}}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",o),window.removeEventListener("pagehide",c),document.removeEventListener("visibilitychange",c)}return window.addEventListener("popstate",o),window.addEventListener("pagehide",c),document.addEventListener("visibilitychange",c),{pauseListeners:l,listen:u,destroy:f}}function xf(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?wa():null}}function Xy(t){const{history:e,location:n}=window,i={value:gm(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,u,c){const f=t.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:Vy()+t+l;try{e[c?"replaceState":"pushState"](u,"",h),r.value=u}catch(d){console.error(d),n[c?"replace":"assign"](h)}}function a(l,u){s(l,Ye({},e.state,xf(r.value.back,l,r.value.forward,!0),u,{position:r.value.position}),!0),i.value=l}function o(l,u){const c=Ye({},r.value,e.state,{forward:l,scroll:wa()});s(c.current,c,!0),s(l,Ye({},xf(i.value,l,null),{position:c.position+1},u),!1),i.value=l}return{location:i,state:r,push:o,replace:a}}function qy(t){t=Cy(t);const e=Xy(t),n=Wy(t,e.state,e.location,e.replace);function i(s,a=!0){a||n.pauseListeners(),history.go(s)}const r=Ye({location:"",base:t,go:i,createHref:Ly.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}let Zi=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t})({});var _t=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t})(_t||{});const jy={type:Zi.Static,value:""},$y=/[a-zA-Z0-9_]/;function Yy(t){if(!t)return[[]];if(t==="/")return[[jy]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${u}": ${d}`)}let n=_t.Static,i=n;const r=[];let s;function a(){s&&r.push(s),s=[]}let o=0,l,u="",c="";function f(){u&&(n===_t.Static?s.push({type:Zi.Static,value:u}):n===_t.Param||n===_t.ParamRegExp||n===_t.ParamRegExpEnd?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:Zi.Param,value:u,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function h(){u+=l}for(;o<t.length;){if(l=t[o++],l==="\\"&&n!==_t.ParamRegExp){i=n,n=_t.EscapeNext;continue}switch(n){case _t.Static:l==="/"?(u&&f(),a()):l===":"?(f(),n=_t.Param):h();break;case _t.EscapeNext:h(),n=i;break;case _t.Param:l==="("?n=_t.ParamRegExp:$y.test(l)?h():(f(),n=_t.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case _t.ParamRegExp:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=_t.ParamRegExpEnd:c+=l;break;case _t.ParamRegExpEnd:f(),n=_t.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--,c="";break;default:e("Unknown state");break}}return n===_t.ParamRegExp&&e(`Unfinished custom RegExp for param "${u}"`),f(),a(),r}const yf="[^/]+?",Ky={sensitive:!1,strict:!1,start:!0,end:!0};var Ft=(function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t})(Ft||{});const Zy=/[.+*?^${}()[\]/\\]/g;function Jy(t,e){const n=Ye({},Ky,e),i=[];let r=n.start?"^":"";const s=[];for(const u of t){const c=u.length?[]:[Ft.Root];n.strict&&!u.length&&(r+="/");for(let f=0;f<u.length;f++){const h=u[f];let d=Ft.Segment+(n.sensitive?Ft.BonusCaseSensitive:0);if(h.type===Zi.Static)f||(r+="/"),r+=h.value.replace(Zy,"\\$&"),d+=Ft.Static;else if(h.type===Zi.Param){const{value:_,repeatable:v,optional:m,regexp:p}=h;s.push({name:_,repeatable:v,optional:m});const E=p||yf;if(E!==yf){d+=Ft.BonusCustomRegExp;try{`${E}`}catch(S){throw new Error(`Invalid custom RegExp for param "${_}" (${E}): `+S.message)}}let g=v?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;f||(g=m&&u.length<2?`(?:/${g})`:"/"+g),m&&(g+="?"),r+=g,d+=Ft.Dynamic,m&&(d+=Ft.BonusOptional),v&&(d+=Ft.BonusRepeatable),E===".*"&&(d+=Ft.BonusWildcard)}c.push(d)}i.push(c)}if(n.strict&&n.end){const u=i.length-1;i[u][i[u].length-1]+=Ft.BonusStrict}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const a=new RegExp(r,n.sensitive?"":"i");function o(u){const c=u.match(a),f={};if(!c)return null;for(let h=1;h<c.length;h++){const d=c[h]||"",_=s[h-1];f[_.name]=d&&_.repeatable?d.split("/"):d}return f}function l(u){let c="",f=!1;for(const h of t){(!f||!c.endsWith("/"))&&(c+="/"),f=!1;for(const d of h)if(d.type===Zi.Static)c+=d.value;else if(d.type===Zi.Param){const{value:_,repeatable:v,optional:m}=d,p=_ in u?u[_]:"";if(bn(p)&&!v)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const E=bn(p)?p.join("/"):p;if(!E)if(m)h.length<2&&(c.endsWith("/")?c=c.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);c+=E}}return c||"/"}return{re:a,score:i,keys:s,parse:o,stringify:l}}function Qy(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===Ft.Static+Ft.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===Ft.Static+Ft.Segment?1:-1:0}function _m(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=Qy(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(Sf(i))return 1;if(Sf(r))return-1}return r.length-i.length}function Sf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const eS={strict:!1,end:!0,sensitive:!1};function tS(t,e,n){const i=Jy(Yy(t.path),n),r=Ye(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function nS(t,e){const n=[],i=new Map;e=df(eS,e);function r(f){return i.get(f)}function s(f,h,d){const _=!d,v=Mf(f);v.aliasOf=d&&d.record;const m=df(e,f),p=[v];if("alias"in f){const S=typeof f.alias=="string"?[f.alias]:f.alias;for(const T of S)p.push(Mf(Ye({},v,{components:d?d.record.components:v.components,path:T,aliasOf:d?d.record:v})))}let E,g;for(const S of p){const{path:T}=S;if(h&&T[0]!=="/"){const R=h.record.path,A=R[R.length-1]==="/"?"":"/";S.path=h.record.path+(T&&A+T)}if(E=tS(S,h,m),d?d.alias.push(E):(g=g||E,g!==E&&g.alias.push(E),_&&f.name&&!Tf(E)&&a(f.name)),vm(E)&&l(E),v.children){const R=v.children;for(let A=0;A<R.length;A++)s(R[A],E,d&&d.children[A])}d=d||E}return g?()=>{a(g)}:ws}function a(f){if(pm(f)){const h=i.get(f);h&&(i.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(a),h.alias.forEach(a))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&i.delete(f.record.name),f.children.forEach(a),f.alias.forEach(a))}}function o(){return n}function l(f){const h=sS(f,n);n.splice(h,0,f),f.record.name&&!Tf(f)&&i.set(f.record.name,f)}function u(f,h){let d,_={},v,m;if("name"in f&&f.name){if(d=i.get(f.name),!d)throw Zr(ft.MATCHER_NOT_FOUND,{location:f});m=d.record.name,_=Ye(Ef(h.params,d.keys.filter(g=>!g.optional).concat(d.parent?d.parent.keys.filter(g=>g.optional):[]).map(g=>g.name)),f.params&&Ef(f.params,d.keys.map(g=>g.name))),v=d.stringify(_)}else if(f.path!=null)v=f.path,d=n.find(g=>g.re.test(v)),d&&(_=d.parse(v),m=d.record.name);else{if(d=h.name?i.get(h.name):n.find(g=>g.re.test(h.path)),!d)throw Zr(ft.MATCHER_NOT_FOUND,{location:f,currentLocation:h});m=d.record.name,_=Ye({},h.params,f.params),v=d.stringify(_)}const p=[];let E=d;for(;E;)p.unshift(E.record),E=E.parent;return{name:m,path:v,params:_,matched:p,meta:rS(p)}}t.forEach(f=>s(f));function c(){n.length=0,i.clear()}return{addRoute:s,resolve:u,removeRoute:a,clearRoutes:c,getRoutes:o,getRecordMatcher:r}}function Ef(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function Mf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:iS(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function iS(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function Tf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function rS(t){return t.reduce((e,n)=>Ye(e,n.meta),{})}function sS(t,e){let n=0,i=e.length;for(;n!==i;){const s=n+i>>1;_m(t,e[s])<0?i=s:n=s+1}const r=oS(t);return r&&(i=e.lastIndexOf(r,i-1)),i}function oS(t){let e=t;for(;e=e.parent;)if(vm(e)&&_m(t,e)===0)return e}function vm({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function bf(t){const e=qt(Kc),n=qt(Zc),i=vn(()=>{const l=at(t.to);return e.resolve(l)}),r=vn(()=>{const{matched:l}=i.value,{length:u}=l,c=l[u-1],f=n.matched;if(!c||!f.length)return-1;const h=f.findIndex(Kr.bind(null,c));if(h>-1)return h;const d=Af(l[u-2]);return u>1&&Af(c)===d&&f[f.length-1].path!==d?f.findIndex(Kr.bind(null,l[u-2])):h}),s=vn(()=>r.value>-1&&fS(n.params,i.value.params)),a=vn(()=>r.value>-1&&r.value===n.matched.length-1&&dm(n.params,i.value.params));function o(l={}){if(uS(l)){const u=e[at(t.replace)?"replace":"push"](at(t.to)).catch(ws);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:i,href:vn(()=>i.value.href),isActive:s,isExactActive:a,navigate:o}}function aS(t){return t.length===1?t[0]:t}const lS=Hs({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:bf,setup(t,{slots:e}){const n=Pi(bf(t)),{options:i}=qt(Kc),r=vn(()=>({[wf(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[wf(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&aS(e.default(n));return t.custom?s:un("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),cS=lS;function uS(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function fS(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!bn(r)||r.length!==i.length||i.some((s,a)=>s.valueOf()!==r[a].valueOf()))return!1}return!0}function Af(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const wf=(t,e,n)=>t??e??n,hS=Hs({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=qt(fc),r=vn(()=>t.route||i.value),s=qt(vf,0),a=vn(()=>{let u=at(s);const{matched:c}=r.value;let f;for(;(f=c[u])&&!f.components;)u++;return u}),o=vn(()=>r.value.matched[a.value]);Br(vf,vn(()=>a.value+1)),Br(Gy,o),Br(fc,r);const l=In();return Hr(()=>[l.value,o.value,t.name],([u,c,f],[h,d,_])=>{c&&(c.instances[f]=u,d&&d!==c&&u&&u===h&&(c.leaveGuards.size||(c.leaveGuards=d.leaveGuards),c.updateGuards.size||(c.updateGuards=d.updateGuards))),u&&c&&(!d||!Kr(c,d)||!h)&&(c.enterCallbacks[f]||[]).forEach(v=>v(u))},{flush:"post"}),()=>{const u=r.value,c=t.name,f=o.value,h=f&&f.components[c];if(!h)return Rf(n.default,{Component:h,route:u});const d=f.props[c],_=d?d===!0?u.params:typeof d=="function"?d(u):d:null,m=un(h,Ye({},_,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[c]=null)},ref:l}));return Rf(n.default,{Component:m,route:u})||m}}});function Rf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const xm=hS;function dS(t){const e=nS(t.routes,t),n=t.parseQuery||Hy,i=t.stringifyQuery||_f,r=t.history,s=fs(),a=fs(),o=fs(),l=Ps(an);let u=an;Cr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=el.bind(null,V=>""+V),f=el.bind(null,Ey),h=el.bind(null,Ns);function d(V,oe){let se,me;return pm(V)?(se=e.getRecordMatcher(V),me=oe):me=V,e.addRoute(me,se)}function _(V){const oe=e.getRecordMatcher(V);oe&&e.removeRoute(oe)}function v(){return e.getRoutes().map(V=>V.record)}function m(V){return!!e.getRecordMatcher(V)}function p(V,oe){if(oe=Ye({},oe||l.value),typeof V=="string"){const P=tl(n,V,oe.path),D=e.resolve({path:P.path},oe),q=r.createHref(P.fullPath);return Ye(P,D,{params:h(D.params),hash:Ns(P.hash),redirectedFrom:void 0,href:q})}let se;if(V.path!=null)se=Ye({},V,{path:tl(n,V.path,oe.path).path});else{const P=Ye({},V.params);for(const D in P)P[D]==null&&delete P[D];se=Ye({},V,{params:f(P)}),oe.params=f(oe.params)}const me=e.resolve(se,oe),ge=V.hash||"";me.params=c(h(me.params));const I=by(i,Ye({},V,{hash:xy(ge),path:me.path})),w=r.createHref(I);return Ye({fullPath:I,hash:ge,query:i===_f?ky(V.query):V.query||{}},me,{redirectedFrom:void 0,href:w})}function E(V){return typeof V=="string"?tl(n,V,l.value.path):Ye({},V)}function g(V,oe){if(u!==V)return Zr(ft.NAVIGATION_CANCELLED,{from:oe,to:V})}function S(V){return A(V)}function T(V){return S(Ye(E(V),{replace:!0}))}function R(V,oe){const se=V.matched[V.matched.length-1];if(se&&se.redirect){const{redirect:me}=se;let ge=typeof me=="function"?me(V,oe):me;return typeof ge=="string"&&(ge=ge.includes("?")||ge.includes("#")?ge=E(ge):{path:ge},ge.params={}),Ye({query:V.query,hash:V.hash,params:ge.path!=null?{}:V.params},ge)}}function A(V,oe){const se=u=p(V),me=l.value,ge=V.state,I=V.force,w=V.replace===!0,P=R(se,me);if(P)return A(Ye(E(P),{state:typeof P=="object"?Ye({},ge,P.state):ge,force:I,replace:w}),oe||se);const D=se;D.redirectedFrom=oe;let q;return!I&&Ay(i,me,se)&&(q=Zr(ft.NAVIGATION_DUPLICATED,{to:D,from:me}),de(me,me,!0,!1)),(q?Promise.resolve(q):y(D,me)).catch(X=>Bn(X)?Bn(X,ft.NAVIGATION_GUARD_REDIRECT)?X:he(X):H(X,D,me)).then(X=>{if(X){if(Bn(X,ft.NAVIGATION_GUARD_REDIRECT))return A(Ye({replace:w},E(X.to),{state:typeof X.to=="object"?Ye({},ge,X.to.state):ge,force:I}),oe||D)}else X=B(D,me,!0,w,ge);return C(D,me,X),X})}function O(V,oe){const se=g(V,oe);return se?Promise.reject(se):Promise.resolve()}function G(V){const oe=ne.values().next().value;return oe&&typeof oe.runWithContext=="function"?oe.runWithContext(V):V()}function y(V,oe){let se;const[me,ge,I]=zy(V,oe);se=il(me.reverse(),"beforeRouteLeave",V,oe);for(const P of me)P.leaveGuards.forEach(D=>{se.push(yi(D,V,oe))});const w=O.bind(null,V,oe);return se.push(w),xe(se).then(()=>{se=[];for(const P of s.list())se.push(yi(P,V,oe));return se.push(w),xe(se)}).then(()=>{se=il(ge,"beforeRouteUpdate",V,oe);for(const P of ge)P.updateGuards.forEach(D=>{se.push(yi(D,V,oe))});return se.push(w),xe(se)}).then(()=>{se=[];for(const P of I)if(P.beforeEnter)if(bn(P.beforeEnter))for(const D of P.beforeEnter)se.push(yi(D,V,oe));else se.push(yi(P.beforeEnter,V,oe));return se.push(w),xe(se)}).then(()=>(V.matched.forEach(P=>P.enterCallbacks={}),se=il(I,"beforeRouteEnter",V,oe,G),se.push(w),xe(se))).then(()=>{se=[];for(const P of a.list())se.push(yi(P,V,oe));return se.push(w),xe(se)}).catch(P=>Bn(P,ft.NAVIGATION_CANCELLED)?P:Promise.reject(P))}function C(V,oe,se){o.list().forEach(me=>G(()=>me(V,oe,se)))}function B(V,oe,se,me,ge){const I=g(V,oe);if(I)return I;const w=oe===an,P=Cr?history.state:{};se&&(me||w?r.replace(V.fullPath,Ye({scroll:w&&P&&P.scroll},ge)):r.push(V.fullPath,ge)),l.value=V,de(V,oe,se,w),he()}let j;function L(){j||(j=r.listen((V,oe,se)=>{if(!ue.listening)return;const me=p(V),ge=R(me,ue.currentRoute.value);if(ge){A(Ye(ge,{replace:!0,force:!0}),me).catch(ws);return}u=me;const I=l.value;Cr&&Uy(gf(I.fullPath,se.delta),wa()),y(me,I).catch(w=>Bn(w,ft.NAVIGATION_ABORTED|ft.NAVIGATION_CANCELLED)?w:Bn(w,ft.NAVIGATION_GUARD_REDIRECT)?(A(Ye(E(w.to),{force:!0}),me).then(P=>{Bn(P,ft.NAVIGATION_ABORTED|ft.NAVIGATION_DUPLICATED)&&!se.delta&&se.type===cc.pop&&r.go(-1,!1)}).catch(ws),Promise.reject()):(se.delta&&r.go(-se.delta,!1),H(w,me,I))).then(w=>{w=w||B(me,I,!1),w&&(se.delta&&!Bn(w,ft.NAVIGATION_CANCELLED)?r.go(-se.delta,!1):se.type===cc.pop&&Bn(w,ft.NAVIGATION_ABORTED|ft.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),C(me,I,w)}).catch(ws)}))}let te=fs(),N=fs(),W;function H(V,oe,se){he(V);const me=N.list();return me.length?me.forEach(ge=>ge(V,oe,se)):console.error(V),Promise.reject(V)}function re(){return W&&l.value!==an?Promise.resolve():new Promise((V,oe)=>{te.add([V,oe])})}function he(V){return W||(W=!V,L(),te.list().forEach(([oe,se])=>V?se(V):oe()),te.reset()),V}function de(V,oe,se,me){const{scrollBehavior:ge}=t;if(!Cr||!ge)return Promise.resolve();const I=!se&&Ny(gf(V.fullPath,0))||(me||!se)&&history.state&&history.state.scroll||null;return Ls().then(()=>ge(V,oe,I)).then(w=>w&&Iy(w)).catch(w=>H(w,V,oe))}const ye=V=>r.go(V);let Ue;const ne=new Set,ue={currentRoute:l,listening:!0,addRoute:d,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:v,resolve:p,options:t,push:S,replace:T,go:ye,back:()=>ye(-1),forward:()=>ye(1),beforeEach:s.add,beforeResolve:a.add,afterEach:o.add,onError:N.add,isReady:re,install(V){V.component("RouterLink",cS),V.component("RouterView",xm),V.config.globalProperties.$router=ue,Object.defineProperty(V.config.globalProperties,"$route",{enumerable:!0,get:()=>at(l)}),Cr&&!Ue&&l.value===an&&(Ue=!0,S(r.location).catch(me=>{}));const oe={};for(const me in an)Object.defineProperty(oe,me,{get:()=>l.value[me],enumerable:!0});V.provide(Kc,ue),V.provide(Zc,Jn(oe)),V.provide(fc,l);const se=V.unmount;ne.add(V),V.unmount=function(){ne.delete(V),ne.size<1&&(u=an,j&&j(),j=null,l.value=an,Ue=!1,W=!1),se()}}};function xe(V){return V.reduce((oe,se)=>oe.then(()=>G(se)),Promise.resolve())}return ue}function DR(t){return qt(Zc)}const pS=/(:\w+)\([^)]+\)/g,mS=/(:\w+)[?+*]/g,gS=/:\w+/g,_S=(t,e)=>e.path.replace(pS,"$1").replace(mS,"$1").replace(gS,n=>t.params[n.slice(1)]?.toString()||""),hc=(t,e)=>{const n=t.route.matched.find(r=>r.components?.default===t.Component.type),i=e??n?.meta.key??(n&&_S(t.route,n));return typeof i=="function"?i(t.route):i},vS=(t,e)=>({default:()=>t?un(g_,t===!0?{}:t,e):e});function Jc(t){return Array.isArray(t)?t:[t]}const xS="modulepreload",yS=function(t,e){return new URL(t,e).href},Cf={},ln=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){let u=function(c){return Promise.all(c.map(f=>Promise.resolve(f).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");r=u(n.map(c=>{if(c=yS(c,i),c in Cf)return;Cf[c]=!0;const f=c.endsWith(".css"),h=f?'[rel="stylesheet"]':"";if(i)for(let _=a.length-1;_>=0;_--){const v=a[_];if(v.href===c&&(!f||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${h}`))return;const d=document.createElement("link");if(d.rel=f?"stylesheet":xS,f||(d.as="script"),d.crossOrigin="",d.href=c,l&&d.setAttribute("nonce",l),document.head.appendChild(d),f)return new Promise((_,v)=>{d.addEventListener("load",_),d.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})},rl=[{name:"about",path:"/about",component:()=>ln(()=>import("./CNaAXYFU.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url)},{name:"index",path:"/",component:()=>ln(()=>import("./D3Jz6Z4g.js"),__vite__mapDeps([8,4,5,6,9]),import.meta.url)},{name:"resume",path:"/resume",component:()=>ln(()=>import("./B4vQn5CZ.js"),[],import.meta.url)},{name:"contact",path:"/contact",component:()=>ln(()=>import("./Bkaehiim.js"),__vite__mapDeps([10,2,3,4,6,11]),import.meta.url)},{name:"projects",path:"/projects",component:()=>ln(()=>import("./Cn10oaO6.js"),__vite__mapDeps([12,2,3,4,6,13]),import.meta.url)},{name:"blog",path:"/blog",component:()=>ln(()=>import("./tk9jFGsQ.js"),__vite__mapDeps([14,2,3,1,4,6,15]),import.meta.url)},{name:"blogs-keyboard",path:"/blogs/keyboard",component:()=>ln(()=>import("./CWPCiBsK.js"),__vite__mapDeps([16,1,4,6,17]),import.meta.url)},{name:"blogs-nvim-transition",path:"/blogs/nvim-transition",component:()=>ln(()=>import("./WdK3ZD-x.js"),__vite__mapDeps([18,1,4,6,19]),import.meta.url)}],SS=(t,e)=>({default:()=>t?un(gv,t===!0?{}:t,e):e.default?.()}),ES=/(:\w+)\([^)]+\)/g,MS=/(:\w+)[?+*]/g,TS=/:\w+/g;function Pf(t){const e=t?.meta.key??t.path.replace(ES,"$1").replace(MS,"$1").replace(TS,n=>t.params[n.slice(1)]?.toString()||"");return typeof e=="function"?e(t):e}function bS(t,e){return t===e||e===an?!1:Pf(t)!==Pf(e)?!0:!t.matched.every((i,r)=>i.components&&i.components.default===e.matched[r]?.components?.default)}const AS={scrollBehavior(t,e,n){const i=Tt(),r=dn().options?.scrollBehaviorType??"auto";if(t.path.replace(/\/$/,"")===e.path.replace(/\/$/,""))return e.hash&&!t.hash?{left:0,top:0}:t.hash?{el:t.hash,top:ym(t.hash),behavior:r}:!1;if((typeof t.meta.scrollToTop=="function"?t.meta.scrollToTop(t,e):t.meta.scrollToTop)===!1)return!1;const a=i._runningTransition?"page:transition:finish":"page:loading:end";return new Promise(o=>{if(e===an){o(Lf(t,e,n,r));return}i.hooks.hookOnce(a,()=>{requestAnimationFrame(()=>o(Lf(t,e,n,r)))})})}};function ym(t){try{const e=document.querySelector(t);if(e)return(Number.parseFloat(getComputedStyle(e).scrollMarginTop)||0)+(Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0)}catch{}return 0}function Lf(t,e,n,i){if(n)return n;const r=bS(t,e);return t.hash?{el:t.hash,top:ym(t.hash),behavior:r?i:"instant"}:{left:0,top:0}}const wS={scrollBehaviorType:"smooth",hashMode:!1},ui={...wS,...AS},RS=async(t,e)=>{let n,i;if(!t.meta?.validate)return;const r=([n,i]=Vr(()=>Promise.resolve(t.meta.validate(t))),n=await n,i(),n);if(r===!0)return;const s=nr({fatal:!0,statusCode:r&&r.statusCode||404,statusMessage:r&&r.statusMessage||`Page Not Found: ${t.fullPath}`,data:{path:t.fullPath}});return typeof window<"u"&&window.history.pushState({},"",e.fullPath),s},CS=async t=>{let e,n;const i=([e,n]=Vr(()=>jc({path:t.path})),e=await e,n(),e);if(i.redirect){const r=i.redirect.includes("#")?i.redirect:i.redirect+t.hash;return cr(r,{acceptRelative:!0})?(window.location.href=r,!1):r}},PS=[RS,CS],dc={};function LS(t,e,n){const{pathname:i,search:r,hash:s}=e,a=t.indexOf("#");if(a>-1){const u=s.includes(t.slice(a))?t.slice(a).length:1;let c=s.slice(u);return c[0]!=="/"&&(c="/"+c),Yu(c,"")}const o=Yu(i,t),l=!n||g0(o,n)?o:n;return l+(l.includes("?")?"":r)+s}const DS=ai({name:"nuxt:router",enforce:"pre",async setup(t){let e,n,i=Ma().app.baseURL;const r=ui.history?.(i)??qy(i),s=ui.routes?([e,n]=Vr(()=>ui.routes(rl)),e=await e,n(),e??rl):rl;let a;const o=dS({...ui,scrollBehavior:(m,p,E)=>{if(p===an){a=E;return}if(ui.scrollBehavior){if(o.options.scrollBehavior=ui.scrollBehavior,"scrollRestoration"in window.history){const g=o.beforeEach(()=>{g(),window.history.scrollRestoration="manual"})}return ui.scrollBehavior(m,an,a||E)}},history:r,routes:s});"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto"),t.vueApp.use(o);const l=Ps(o.currentRoute.value);o.afterEach((m,p)=>{l.value=p}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>l.value});const u=LS(i,window.location,t.payload.path),c=Ps(o.currentRoute.value),f=()=>{c.value=o.currentRoute.value};o.afterEach((m,p)=>{m.matched.at(-1)?.components?.default===p.matched.at(-1)?.components?.default&&f()});const h={sync:f};for(const m in c.value)Object.defineProperty(h,m,{get:()=>c.value[m],enumerable:!0});t._route=Jn(h),t._middleware||={global:[],named:{}};const d=ba();o.afterEach(async(m,p,E)=>{delete t._processingMiddleware,!t.isHydrating&&d.value&&await t.runWithContext(hx),E&&await t.callHook("page:loading:end")});try{[e,n]=Vr(()=>o.isReady()),await e,n()}catch(m){[e,n]=Vr(()=>t.runWithContext(()=>Xi(m))),await e,n()}const _=u!==o.currentRoute.value.fullPath?o.resolve(u):o.currentRoute.value;f();const v=t.payload.state._layout;return o.beforeEach(async(m,p)=>{await t.callHook("page:loading:start"),m.meta=Pi(m.meta),t.isHydrating&&v&&!Un(m.meta.layout)&&(m.meta.layout=v),t._processingMiddleware=!0;{const E=new Set([...PS,...t._middleware.global]);for(const g of m.matched){const S=g.meta.middleware;if(S)for(const T of Jc(S))E.add(T)}{const g=await t.runWithContext(()=>jc({path:m.path}));if(g.appMiddleware)for(const S in g.appMiddleware)g.appMiddleware[S]?E.add(S):E.delete(S)}for(const g of E){const S=typeof g=="string"?t._middleware.named[g]||await dc[g]?.().then(T=>T.default||T):g;if(!S)throw new Error(`Unknown route middleware: '${g}'.`);try{const T=await t.runWithContext(()=>S(m,p));if(!t.payload.serverRendered&&t.isHydrating&&(T===!1||T instanceof Error)){const R=T||nr({statusCode:404,statusMessage:`Page Not Found: ${u}`});return await t.runWithContext(()=>Xi(R)),!1}if(T===!0)continue;if(T===!1)return T;if(T)return em(T)&&T.fatal&&await t.runWithContext(()=>Xi(T)),T}catch(T){const R=nr(T);return R.fatal&&await t.runWithContext(()=>Xi(R)),R}}}}),o.onError(async()=>{delete t._processingMiddleware,await t.callHook("page:loading:end")}),o.afterEach(m=>{if(m.matched.length===0)return t.runWithContext(()=>Xi(nr({statusCode:404,fatal:!1,statusMessage:`Page not found: ${m.fullPath}`,data:{path:m.fullPath}})))}),t.hooks.hookOnce("app:created",async()=>{try{"name"in _&&(_.name=void 0),await o.replace({..._,force:!0}),o.options.scrollBehavior=ui.scrollBehavior}catch(m){await t.runWithContext(()=>Xi(m))}}),{provide:{router:o}}}}),Df=globalThis.requestIdleCallback||(t=>{const e=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{t(n)},1)}),IR=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),Qc=t=>{const e=Tt();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{Df(()=>t())}):Df(()=>t())},IS=ai({name:"nuxt:payload",setup(t){const e=new Set;dn().beforeResolve(async(n,i)=>{if(n.path===i.path)return;const r=await hf(n.path);if(r){for(const s of e)delete t.static.data[s];for(const s in r.data)s in t.static.data||e.add(s),t.static.data[s]=r.data[s]}}),Qc(()=>{t.hooks.hook("link:prefetch",async n=>{const{hostname:i}=new URL(n,window.location.href);i===window.location.hostname&&await hf(n).catch(()=>{console.warn("[nuxt] Error preloading payload for",n)})}),navigator.connection?.effectiveType!=="slow-2g"&&setTimeout(Aa,1e3)})}}),US=ai(()=>{const t=dn();Qc(()=>{t.beforeResolve(async()=>{await new Promise(e=>{setTimeout(e,100),requestAnimationFrame(()=>{setTimeout(e,0)})})})})}),NS=ai(t=>{let e;async function n(){let i;try{i=await Aa()}catch(r){const s=r;if(!("status"in s&&(s.status===404||s.status===403)))throw s}e&&clearTimeout(e),e=setTimeout(n,tf);try{const r=await $fetch(qc("builds/latest.json")+`?${Date.now()}`);r.id!==i?.id&&(t.hooks.callHook("app:manifest:update",r),e&&clearTimeout(e))}catch{}}Qc(()=>{e=setTimeout(n,tf)})});function OS(t={}){const e=t.path||window.location.pathname;let n={};try{n=Ko(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||n?.path!==e||n?.expires<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:Tt().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const FS=ai({name:"nuxt:chunk-reload",setup(t){const e=dn(),n=Ma(),i=new Set;e.beforeEach(()=>{i.clear()}),t.hook("app:chunkError",({error:s})=>{i.add(s)});function r(s){const a=Wc(n.app.baseURL,s.fullPath);OS({path:a,persistState:!0})}t.hook("app:manifest:update",()=>{e.beforeResolve(r)}),e.onError((s,a)=>{i.has(s)&&r(a)})}}),BS=ai({name:"nuxt:global-components"}),ao={blog:Vo(()=>ln(()=>import("./BiyDuceT.js"),__vite__mapDeps([20,1,21]),import.meta.url).then(t=>t.default||t)),default:Vo(()=>ln(()=>import("./D-HvJVqs.js"),__vite__mapDeps([22,1,23]),import.meta.url).then(t=>t.default||t))};function HS(t){if(t?.__asyncLoader&&!t.__asyncResolved)return t.__asyncLoader()}async function kS(t,e=dn()){const{path:n,matched:i}=e.resolve(t);if(!i.length||(e._routePreloaded||=new Set,e._routePreloaded.has(n)))return;const r=e._preloadPromises||=[];if(r.length>4)return Promise.all(r).then(()=>kS(t,e));e._routePreloaded.add(n);for(const s of i){const a=s.components?.default;if(typeof a!="function")continue;const o=Promise.resolve(a()).catch(()=>{}).finally(()=>r.splice(r.indexOf(o)));r.push(o)}await Promise.all(r)}const GS=ai({name:"nuxt:prefetch",setup(t){const e=dn();t.hooks.hook("app:mounted",()=>{e.beforeEach(async n=>{const i=n?.meta?.layout;i&&typeof ao[i]=="function"&&await ao[i]()})}),t.hooks.hook("link:prefetch",n=>{if(cr(n))return;const i=e.resolve(n);if(!i)return;const r=i.meta.layout;let s=Jc(i.meta.middleware);s=s.filter(a=>typeof a=="string");for(const a of s)typeof dc[a]=="function"&&dc[a]();typeof r=="string"&&r in ao&&HS(ao[r])})}}),zS=[iy,ly,DS,IS,US,NS,FS,BS,GS];const eu="162",VS=0,If=1,WS=2,Sm=1,XS=2,Wn=3,Ri=0,jt=1,Kn=2,bi=0,Wr=1,Uf=2,Nf=3,Of=4,qS=5,Yi=100,jS=101,$S=102,Ff=103,Bf=104,YS=200,KS=201,ZS=202,JS=203,pc=204,mc=205,QS=206,eE=207,tE=208,nE=209,iE=210,rE=211,sE=212,oE=213,aE=214,lE=0,cE=1,uE=2,na=3,fE=4,hE=5,dE=6,pE=7,Em=0,mE=1,gE=2,Ai=0,_E=1,vE=2,xE=3,yE=4,SE=5,EE=6,ME=7,Mm=300,Jr=301,Qr=302,gc=303,_c=304,Ra=306,vc=1e3,xn=1001,xc=1002,Bt=1003,Hf=1004,hs=1005,Vt=1006,sl=1007,Ji=1008,wi=1009,TE=1010,bE=1011,tu=1012,Tm=1013,Ei=1014,Zn=1015,Os=1016,bm=1017,Am=1018,ir=1020,AE=1021,yn=1023,wE=1024,RE=1025,rr=1026,es=1027,CE=1028,wm=1029,PE=1030,Rm=1031,Cm=1033,ol=33776,al=33777,ll=33778,cl=33779,kf=35840,Gf=35841,zf=35842,Vf=35843,Pm=36196,Wf=37492,Xf=37496,qf=37808,jf=37809,$f=37810,Yf=37811,Kf=37812,Zf=37813,Jf=37814,Qf=37815,eh=37816,th=37817,nh=37818,ih=37819,rh=37820,sh=37821,ul=36492,oh=36494,ah=36495,LE=36283,lh=36284,ch=36285,uh=36286,DE=3200,IE=3201,UE=0,NE=1,Si="",Cn="srgb",Li="srgb-linear",nu="display-p3",Ca="display-p3-linear",ia="linear",rt="srgb",ra="rec709",sa="p3",hr=7680,fh=519,OE=512,FE=513,BE=514,Lm=515,HE=516,kE=517,GE=518,zE=519,hh=35044,dh="300 es",yc=1035,Qn=2e3,oa=2001;class ss{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fl=Math.PI/180,Sc=180/Math.PI;function Vs(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Lt[t&255]+Lt[t>>8&255]+Lt[t>>16&255]+Lt[t>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[n&63|128]+Lt[n>>8&255]+"-"+Lt[n>>16&255]+Lt[n>>24&255]+Lt[i&255]+Lt[i>>8&255]+Lt[i>>16&255]+Lt[i>>24&255]).toLowerCase()}function Wt(t,e,n){return Math.max(e,Math.min(n,t))}function VE(t,e){return(t%e+e)%e}function hl(t,e,n){return(1-n)*t+n*e}function ph(t){return(t&t-1)===0&&t!==0}function Ec(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function ds(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function kt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class $e{constructor(e=0,n=0){$e.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(e,n,i,r,s,a,o,l,u){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u)}set(e,n,i,r,s,a,o,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=o,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=a,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],c=i[4],f=i[7],h=i[2],d=i[5],_=i[8],v=r[0],m=r[3],p=r[6],E=r[1],g=r[4],S=r[7],T=r[2],R=r[5],A=r[8];return s[0]=a*v+o*E+l*T,s[3]=a*m+o*g+l*R,s[6]=a*p+o*S+l*A,s[1]=u*v+c*E+f*T,s[4]=u*m+c*g+f*R,s[7]=u*p+c*S+f*A,s[2]=h*v+d*E+_*T,s[5]=h*m+d*g+_*R,s[8]=h*p+d*S+_*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8];return n*a*c-n*o*u-i*s*c+i*o*l+r*s*u-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],f=c*a-o*u,h=o*l-c*s,d=u*s-a*l,_=n*f+i*h+r*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=f*v,e[1]=(r*u-c*i)*v,e[2]=(o*i-r*a)*v,e[3]=h*v,e[4]=(c*n-r*l)*v,e[5]=(r*s-o*n)*v,e[6]=d*v,e[7]=(i*l-u*n)*v,e[8]=(a*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(dl.makeScale(e,n)),this}rotate(e){return this.premultiply(dl.makeRotation(-e)),this}translate(e,n){return this.premultiply(dl.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const dl=new ze;function Dm(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function aa(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function WE(){const t=aa("canvas");return t.style.display="block",t}const mh={};function XE(t){t in mh||(mh[t]=!0,console.warn(t))}const gh=new ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),_h=new ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),lo={[Li]:{transfer:ia,primaries:ra,toReference:t=>t,fromReference:t=>t},[Cn]:{transfer:rt,primaries:ra,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Ca]:{transfer:ia,primaries:sa,toReference:t=>t.applyMatrix3(_h),fromReference:t=>t.applyMatrix3(gh)},[nu]:{transfer:rt,primaries:sa,toReference:t=>t.convertSRGBToLinear().applyMatrix3(_h),fromReference:t=>t.applyMatrix3(gh).convertLinearToSRGB()}},qE=new Set([Li,Ca]),Qe={enabled:!0,_workingColorSpace:Li,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!qE.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=lo[e].toReference,r=lo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return lo[t].primaries},getTransfer:function(t){return t===Si?ia:lo[t].transfer}};function Xr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function pl(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let dr;class Im{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{dr===void 0&&(dr=aa("canvas")),dr.width=e.width,dr.height=e.height;const i=dr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=dr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=aa("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Xr(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Xr(n[i]/255)*255):n[i]=Xr(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let jE=0;class Um{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jE++}),this.uuid=Vs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ml(r[a].image)):s.push(ml(r[a]))}else s=ml(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function ml(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Im.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $E=0;class $t extends ss{constructor(e=$t.DEFAULT_IMAGE,n=$t.DEFAULT_MAPPING,i=xn,r=xn,s=Vt,a=Ji,o=yn,l=wi,u=$t.DEFAULT_ANISOTROPY,c=Si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$E++}),this.uuid=Vs(),this.name="",this.source=new Um(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vc:e.x=e.x-Math.floor(e.x);break;case xn:e.x=e.x<0?0:1;break;case xc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vc:e.y=e.y-Math.floor(e.y);break;case xn:e.y=e.y<0?0:1;break;case xc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=Mm;$t.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,n=0,i=0,r=1){Ct.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],h=l[1],d=l[5],_=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+v)<.1&&Math.abs(_+m)<.1&&Math.abs(u+d+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(u+1)/2,S=(d+1)/2,T=(p+1)/2,R=(c+h)/4,A=(f+v)/4,O=(_+m)/4;return g>S&&g>T?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=R/i,s=A/i):S>T?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=R/r,s=O/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=A/s,r=O/s),this.set(i,r,s,n),this}let E=Math.sqrt((m-_)*(m-_)+(f-v)*(f-v)+(h-c)*(h-c));return Math.abs(E)<.001&&(E=1),this.x=(m-_)/E,this.y=(f-v)/E,this.z=(h-c)/E,this.w=Math.acos((u+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class YE extends ss{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ct(0,0,e,n),this.scissorTest=!1,this.viewport=new Ct(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const s=new $t(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Um(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ar extends YE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Nm extends $t{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class KE extends $t{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ws{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const h=s[a+0],d=s[a+1],_=s[a+2],v=s[a+3];if(o===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f;return}if(o===1){e[n+0]=h,e[n+1]=d,e[n+2]=_,e[n+3]=v;return}if(f!==v||l!==h||u!==d||c!==_){let m=1-o;const p=l*h+u*d+c*_+f*v,E=p>=0?1:-1,g=1-p*p;if(g>Number.EPSILON){const T=Math.sqrt(g),R=Math.atan2(T,p*E);m=Math.sin(m*R)/T,o=Math.sin(o*R)/T}const S=o*E;if(l=l*m+h*S,u=u*m+d*S,c=c*m+_*S,f=f*m+v*S,m===1-o){const T=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=T,u*=T,c*=T,f*=T}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[a],h=s[a+1],d=s[a+2],_=s[a+3];return e[n]=o*_+c*f+l*d-u*h,e[n+1]=l*_+c*h+u*f-o*d,e[n+2]=u*_+c*d+o*h-l*f,e[n+3]=c*_-o*f-l*h-u*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),c=o(r/2),f=o(s/2),h=l(i/2),d=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=h*c*f+u*d*_,this._y=u*d*f-h*c*_,this._z=u*c*_+h*d*f,this._w=u*c*f-h*d*_;break;case"YXZ":this._x=h*c*f+u*d*_,this._y=u*d*f-h*c*_,this._z=u*c*_-h*d*f,this._w=u*c*f+h*d*_;break;case"ZXY":this._x=h*c*f-u*d*_,this._y=u*d*f+h*c*_,this._z=u*c*_+h*d*f,this._w=u*c*f-h*d*_;break;case"ZYX":this._x=h*c*f-u*d*_,this._y=u*d*f+h*c*_,this._z=u*c*_-h*d*f,this._w=u*c*f+h*d*_;break;case"YZX":this._x=h*c*f+u*d*_,this._y=u*d*f+h*c*_,this._z=u*c*_-h*d*f,this._w=u*c*f-h*d*_;break;case"XZY":this._x=h*c*f-u*d*_,this._y=u*d*f-h*c*_,this._z=u*c*_+h*d*f,this._w=u*c*f+h*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],u=n[2],c=n[6],f=n[10],h=i+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(c-l)*d,this._y=(s-u)*d,this._z=(a-r)*d}else if(i>o&&i>f){const d=2*Math.sqrt(1+i-o-f);this._w=(c-l)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+u)/d}else if(o>f){const d=2*Math.sqrt(1+o-i-f);this._w=(s-u)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(l+c)/d}else{const d=2*Math.sqrt(1+f-i-o);this._w=(a-r)/d,this._x=(s+u)/d,this._y=(l+c)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Wt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+a*o+r*u-s*l,this._y=r*c+a*l+s*o-i*u,this._z=s*c+a*u+i*l-r*o,this._w=a*c-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-n;return this._w=d*a+n*this._w,this._x=d*i+n*this._x,this._y=d*r+n*this._y,this._z=d*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,o),f=Math.sin((1-n)*c)/u,h=Math.sin(n*c)/u;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,n=0,i=0){Z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(vh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(vh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*r-o*i),c=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+l*u+a*f-o*c,this.y=i+l*c+o*u-s*f,this.z=r+l*f+s*c-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return gl.copy(this).projectOnVector(e),this.sub(gl)}reflect(e){return this.sub(gl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gl=new Z,vh=new Ws;class Xs{constructor(e=new Z(1/0,1/0,1/0),n=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(pn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(pn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=pn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,pn):pn.fromBufferAttribute(s,a),pn.applyMatrix4(e.matrixWorld),this.expandByPoint(pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),co.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),co.copy(i.boundingBox)),co.applyMatrix4(e.matrixWorld),this.union(co)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,pn),pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ps),uo.subVectors(this.max,ps),pr.subVectors(e.a,ps),mr.subVectors(e.b,ps),gr.subVectors(e.c,ps),fi.subVectors(mr,pr),hi.subVectors(gr,mr),Bi.subVectors(pr,gr);let n=[0,-fi.z,fi.y,0,-hi.z,hi.y,0,-Bi.z,Bi.y,fi.z,0,-fi.x,hi.z,0,-hi.x,Bi.z,0,-Bi.x,-fi.y,fi.x,0,-hi.y,hi.x,0,-Bi.y,Bi.x,0];return!_l(n,pr,mr,gr,uo)||(n=[1,0,0,0,1,0,0,0,1],!_l(n,pr,mr,gr,uo))?!1:(fo.crossVectors(fi,hi),n=[fo.x,fo.y,fo.z],_l(n,pr,mr,gr,uo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Hn=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],pn=new Z,co=new Xs,pr=new Z,mr=new Z,gr=new Z,fi=new Z,hi=new Z,Bi=new Z,ps=new Z,uo=new Z,fo=new Z,Hi=new Z;function _l(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Hi.fromArray(t,s);const o=r.x*Math.abs(Hi.x)+r.y*Math.abs(Hi.y)+r.z*Math.abs(Hi.z),l=e.dot(Hi),u=n.dot(Hi),c=i.dot(Hi);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>o)return!1}return!0}const ZE=new Xs,ms=new Z,vl=new Z;class Pa{constructor(e=new Z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):ZE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ms.subVectors(e,this.center);const n=ms.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ms,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ms.copy(e.center).add(vl)),this.expandByPoint(ms.copy(e.center).sub(vl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const kn=new Z,xl=new Z,ho=new Z,di=new Z,yl=new Z,po=new Z,Sl=new Z;class Om{constructor(e=new Z,n=new Z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=kn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(kn.copy(this.origin).addScaledVector(this.direction,n),kn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){xl.copy(e).add(n).multiplyScalar(.5),ho.copy(n).sub(e).normalize(),di.copy(this.origin).sub(xl);const s=e.distanceTo(n)*.5,a=-this.direction.dot(ho),o=di.dot(this.direction),l=-di.dot(ho),u=di.lengthSq(),c=Math.abs(1-a*a);let f,h,d,_;if(c>0)if(f=a*l-o,h=a*o-l,_=s*c,f>=0)if(h>=-_)if(h<=_){const v=1/c;f*=v,h*=v,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+u}else h=s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+u;else h=-s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+u;else h<=-_?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+u):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+u):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+u);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(xl).addScaledVector(ho,h),d}intersectSphere(e,n){kn.subVectors(e.center,this.origin);const i=kn.dot(this.direction),r=kn.dot(kn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,a=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,a=(e.min.y-h.y)*c),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,kn)!==null}intersectTriangle(e,n,i,r,s){yl.subVectors(n,e),po.subVectors(i,e),Sl.crossVectors(yl,po);let a=this.direction.dot(Sl),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;di.subVectors(this.origin,e);const l=o*this.direction.dot(po.crossVectors(di,po));if(l<0)return null;const u=o*this.direction.dot(yl.cross(di));if(u<0||l+u>a)return null;const c=-o*di.dot(Sl);return c<0?null:this.at(c/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(e,n,i,r,s,a,o,l,u,c,f,h,d,_,v,m){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u,c,f,h,d,_,v,m)}set(e,n,i,r,s,a,o,l,u,c,f,h,d,_,v,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=u,p[6]=c,p[10]=f,p[14]=h,p[3]=d,p[7]=_,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/_r.setFromMatrixColumn(e,0).length(),s=1/_r.setFromMatrixColumn(e,1).length(),a=1/_r.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*c,d=a*f,_=o*c,v=o*f;n[0]=l*c,n[4]=-l*f,n[8]=u,n[1]=d+_*u,n[5]=h-v*u,n[9]=-o*l,n[2]=v-h*u,n[6]=_+d*u,n[10]=a*l}else if(e.order==="YXZ"){const h=l*c,d=l*f,_=u*c,v=u*f;n[0]=h+v*o,n[4]=_*o-d,n[8]=a*u,n[1]=a*f,n[5]=a*c,n[9]=-o,n[2]=d*o-_,n[6]=v+h*o,n[10]=a*l}else if(e.order==="ZXY"){const h=l*c,d=l*f,_=u*c,v=u*f;n[0]=h-v*o,n[4]=-a*f,n[8]=_+d*o,n[1]=d+_*o,n[5]=a*c,n[9]=v-h*o,n[2]=-a*u,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const h=a*c,d=a*f,_=o*c,v=o*f;n[0]=l*c,n[4]=_*u-d,n[8]=h*u+v,n[1]=l*f,n[5]=v*u+h,n[9]=d*u-_,n[2]=-u,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const h=a*l,d=a*u,_=o*l,v=o*u;n[0]=l*c,n[4]=v-h*f,n[8]=_*f+d,n[1]=f,n[5]=a*c,n[9]=-o*c,n[2]=-u*c,n[6]=d*f+_,n[10]=h-v*f}else if(e.order==="XZY"){const h=a*l,d=a*u,_=o*l,v=o*u;n[0]=l*c,n[4]=-f,n[8]=u*c,n[1]=h*f+v,n[5]=a*c,n[9]=d*f-_,n[2]=_*f-d,n[6]=o*c,n[10]=v*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(JE,e,QE)}lookAt(e,n,i){const r=this.elements;return Zt.subVectors(e,n),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),pi.crossVectors(i,Zt),pi.lengthSq()===0&&(Math.abs(i.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),pi.crossVectors(i,Zt)),pi.normalize(),mo.crossVectors(Zt,pi),r[0]=pi.x,r[4]=mo.x,r[8]=Zt.x,r[1]=pi.y,r[5]=mo.y,r[9]=Zt.y,r[2]=pi.z,r[6]=mo.z,r[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],c=i[1],f=i[5],h=i[9],d=i[13],_=i[2],v=i[6],m=i[10],p=i[14],E=i[3],g=i[7],S=i[11],T=i[15],R=r[0],A=r[4],O=r[8],G=r[12],y=r[1],C=r[5],B=r[9],j=r[13],L=r[2],te=r[6],N=r[10],W=r[14],H=r[3],re=r[7],he=r[11],de=r[15];return s[0]=a*R+o*y+l*L+u*H,s[4]=a*A+o*C+l*te+u*re,s[8]=a*O+o*B+l*N+u*he,s[12]=a*G+o*j+l*W+u*de,s[1]=c*R+f*y+h*L+d*H,s[5]=c*A+f*C+h*te+d*re,s[9]=c*O+f*B+h*N+d*he,s[13]=c*G+f*j+h*W+d*de,s[2]=_*R+v*y+m*L+p*H,s[6]=_*A+v*C+m*te+p*re,s[10]=_*O+v*B+m*N+p*he,s[14]=_*G+v*j+m*W+p*de,s[3]=E*R+g*y+S*L+T*H,s[7]=E*A+g*C+S*te+T*re,s[11]=E*O+g*B+S*N+T*he,s[15]=E*G+g*j+S*W+T*de,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],c=e[2],f=e[6],h=e[10],d=e[14],_=e[3],v=e[7],m=e[11],p=e[15];return _*(+s*l*f-r*u*f-s*o*h+i*u*h+r*o*d-i*l*d)+v*(+n*l*d-n*u*h+s*a*h-r*a*d+r*u*c-s*l*c)+m*(+n*u*f-n*o*d-s*a*f+i*a*d+s*o*c-i*u*c)+p*(-r*o*c-n*l*f+n*o*h+r*a*f-i*a*h+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],f=e[9],h=e[10],d=e[11],_=e[12],v=e[13],m=e[14],p=e[15],E=f*m*u-v*h*u+v*l*d-o*m*d-f*l*p+o*h*p,g=_*h*u-c*m*u-_*l*d+a*m*d+c*l*p-a*h*p,S=c*v*u-_*f*u+_*o*d-a*v*d-c*o*p+a*f*p,T=_*f*l-c*v*l-_*o*h+a*v*h+c*o*m-a*f*m,R=n*E+i*g+r*S+s*T;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=E*A,e[1]=(v*h*s-f*m*s-v*r*d+i*m*d+f*r*p-i*h*p)*A,e[2]=(o*m*s-v*l*s+v*r*u-i*m*u-o*r*p+i*l*p)*A,e[3]=(f*l*s-o*h*s-f*r*u+i*h*u+o*r*d-i*l*d)*A,e[4]=g*A,e[5]=(c*m*s-_*h*s+_*r*d-n*m*d-c*r*p+n*h*p)*A,e[6]=(_*l*s-a*m*s-_*r*u+n*m*u+a*r*p-n*l*p)*A,e[7]=(a*h*s-c*l*s+c*r*u-n*h*u-a*r*d+n*l*d)*A,e[8]=S*A,e[9]=(_*f*s-c*v*s-_*i*d+n*v*d+c*i*p-n*f*p)*A,e[10]=(a*v*s-_*o*s+_*i*u-n*v*u-a*i*p+n*o*p)*A,e[11]=(c*o*s-a*f*s-c*i*u+n*f*u+a*i*d-n*o*d)*A,e[12]=T*A,e[13]=(c*v*r-_*f*r+_*i*h-n*v*h-c*i*m+n*f*m)*A,e[14]=(_*o*r-a*v*r-_*i*l+n*v*l+a*i*m-n*o*m)*A,e[15]=(a*f*r-c*o*r+c*i*l-n*f*l-a*i*h+n*o*h)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,u=s*a,c=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,c*o+i,c*l-r*a,0,u*l-r*o,c*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,u=s+s,c=a+a,f=o+o,h=s*u,d=s*c,_=s*f,v=a*c,m=a*f,p=o*f,E=l*u,g=l*c,S=l*f,T=i.x,R=i.y,A=i.z;return r[0]=(1-(v+p))*T,r[1]=(d+S)*T,r[2]=(_-g)*T,r[3]=0,r[4]=(d-S)*R,r[5]=(1-(h+p))*R,r[6]=(m+E)*R,r[7]=0,r[8]=(_+g)*A,r[9]=(m-E)*A,r[10]=(1-(h+v))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=_r.set(r[0],r[1],r[2]).length();const a=_r.set(r[4],r[5],r[6]).length(),o=_r.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],mn.copy(this);const u=1/s,c=1/a,f=1/o;return mn.elements[0]*=u,mn.elements[1]*=u,mn.elements[2]*=u,mn.elements[4]*=c,mn.elements[5]*=c,mn.elements[6]*=c,mn.elements[8]*=f,mn.elements[9]*=f,mn.elements[10]*=f,n.setFromRotationMatrix(mn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=Qn){const l=this.elements,u=2*s/(n-e),c=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let d,_;if(o===Qn)d=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===oa)d=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=Qn){const l=this.elements,u=1/(n-e),c=1/(i-r),f=1/(a-s),h=(n+e)*u,d=(i+r)*c;let _,v;if(o===Qn)_=(a+s)*f,v=-2*f;else if(o===oa)_=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const _r=new Z,mn=new gt,JE=new Z(0,0,0),QE=new Z(1,1,1),pi=new Z,mo=new Z,Zt=new Z,xh=new gt,yh=new Ws;class si{constructor(e=0,n=0,i=0,r=si.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],c=r[9],f=r[2],h=r[6],d=r[10];switch(n){case"XYZ":this._y=Math.asin(Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Wt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return xh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xh,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return yh.setFromEuler(this),this.setFromQuaternion(yh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}si.DEFAULT_ORDER="XYZ";class Fm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let eM=0;const Sh=new Z,vr=new Ws,Gn=new gt,go=new Z,gs=new Z,tM=new Z,nM=new Ws,Eh=new Z(1,0,0),Mh=new Z(0,1,0),Th=new Z(0,0,1),iM={type:"added"},rM={type:"removed"},El={type:"childadded",child:null},Ml={type:"childremoved",child:null};class Yt extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=Vs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yt.DEFAULT_UP.clone();const e=new Z,n=new si,i=new Ws,r=new Z(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new gt},normalMatrix:{value:new ze}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=Yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return vr.setFromAxisAngle(e,n),this.quaternion.multiply(vr),this}rotateOnWorldAxis(e,n){return vr.setFromAxisAngle(e,n),this.quaternion.premultiply(vr),this}rotateX(e){return this.rotateOnAxis(Eh,e)}rotateY(e){return this.rotateOnAxis(Mh,e)}rotateZ(e){return this.rotateOnAxis(Th,e)}translateOnAxis(e,n){return Sh.copy(e).applyQuaternion(this.quaternion),this.position.add(Sh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Eh,e)}translateY(e){return this.translateOnAxis(Mh,e)}translateZ(e){return this.translateOnAxis(Th,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?go.copy(e):go.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(gs,go,this.up):Gn.lookAt(go,gs,this.up),this.quaternion.setFromRotationMatrix(Gn),r&&(Gn.extractRotation(r.matrixWorld),vr.setFromRotationMatrix(Gn),this.quaternion.premultiply(vr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(iM),El.child=e,this.dispatchEvent(El),El.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(rM),Ml.child=e,this.dispatchEvent(Ml),Ml.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,e,tM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,nM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),c=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const u in o){const c=o[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Yt.DEFAULT_UP=new Z(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gn=new Z,zn=new Z,Tl=new Z,Vn=new Z,xr=new Z,yr=new Z,bh=new Z,bl=new Z,Al=new Z,wl=new Z;class Ln{constructor(e=new Z,n=new Z,i=new Z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),gn.subVectors(e,n),r.cross(gn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){gn.subVectors(r,n),zn.subVectors(i,n),Tl.subVectors(e,n);const a=gn.dot(gn),o=gn.dot(zn),l=gn.dot(Tl),u=zn.dot(zn),c=zn.dot(Tl),f=a*u-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(u*l-o*c)*h,_=(a*c-o*l)*h;return s.set(1-d-_,_,d)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,Vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Vn.x),l.addScaledVector(a,Vn.y),l.addScaledVector(o,Vn.z),l)}static isFrontFacing(e,n,i,r){return gn.subVectors(i,n),zn.subVectors(e,n),gn.cross(zn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),gn.cross(zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Ln.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Ln.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;xr.subVectors(r,i),yr.subVectors(s,i),bl.subVectors(e,i);const l=xr.dot(bl),u=yr.dot(bl);if(l<=0&&u<=0)return n.copy(i);Al.subVectors(e,r);const c=xr.dot(Al),f=yr.dot(Al);if(c>=0&&f<=c)return n.copy(r);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return a=l/(l-c),n.copy(i).addScaledVector(xr,a);wl.subVectors(e,s);const d=xr.dot(wl),_=yr.dot(wl);if(_>=0&&d<=_)return n.copy(s);const v=d*u-l*_;if(v<=0&&u>=0&&_<=0)return o=u/(u-_),n.copy(i).addScaledVector(yr,o);const m=c*_-d*f;if(m<=0&&f-c>=0&&d-_>=0)return bh.subVectors(s,r),o=(f-c)/(f-c+(d-_)),n.copy(r).addScaledVector(bh,o);const p=1/(m+v+h);return a=v*p,o=h*p,n.copy(i).addScaledVector(xr,a).addScaledVector(yr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Bm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},_o={h:0,s:0,l:0};function Rl(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Qe.workingColorSpace){if(e=VE(e,1),n=Wt(n,0,1),i=Wt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Rl(a,s,e+1/3),this.g=Rl(a,s,e),this.b=Rl(a,s,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,n=Cn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Cn){const i=Bm[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xr(e.r),this.g=Xr(e.g),this.b=Xr(e.b),this}copyLinearToSRGB(e){return this.r=pl(e.r),this.g=pl(e.g),this.b=pl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Cn){return Qe.fromWorkingColorSpace(Dt.copy(this),e),Math.round(Wt(Dt.r*255,0,255))*65536+Math.round(Wt(Dt.g*255,0,255))*256+Math.round(Wt(Dt.b*255,0,255))}getHexString(e=Cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Dt.copy(this),n);const i=Dt.r,r=Dt.g,s=Dt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const c=(o+a)/2;if(o===a)l=0,u=0;else{const f=a-o;switch(u=c<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Dt.copy(this),n),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=Cn){Qe.fromWorkingColorSpace(Dt.copy(this),e);const n=Dt.r,i=Dt.g,r=Dt.b;return e!==Cn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(mi),this.setHSL(mi.h+e,mi.s+n,mi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(mi),e.getHSL(_o);const i=hl(mi.h,_o.h,n),r=hl(mi.s,_o.s,n),s=hl(mi.l,_o.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new Ze;Ze.NAMES=Bm;let sM=0;class qs extends ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=Vs(),this.name="",this.type="Material",this.blending=Wr,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pc,this.blendDst=mc,this.blendEquation=Yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=na,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hr,this.stencilZFail=hr,this.stencilZPass=hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Wr&&(i.blending=this.blending),this.side!==Ri&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==pc&&(i.blendSrc=this.blendSrc),this.blendDst!==mc&&(i.blendDst=this.blendDst),this.blendEquation!==Yi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==na&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==hr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==hr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Hm extends qs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.combine=Em,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dt=new Z,vo=new $e;class fn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=hh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return XE("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)vo.fromBufferAttribute(this,n),vo.applyMatrix3(e),this.setXY(n,vo.x,vo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)dt.fromBufferAttribute(this,n),dt.applyMatrix3(e),this.setXYZ(n,dt.x,dt.y,dt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)dt.fromBufferAttribute(this,n),dt.applyMatrix4(e),this.setXYZ(n,dt.x,dt.y,dt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)dt.fromBufferAttribute(this,n),dt.applyNormalMatrix(e),this.setXYZ(n,dt.x,dt.y,dt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)dt.fromBufferAttribute(this,n),dt.transformDirection(e),this.setXYZ(n,dt.x,dt.y,dt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ds(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=kt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ds(n,this.array)),n}setX(e,n){return this.normalized&&(n=kt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ds(n,this.array)),n}setY(e,n){return this.normalized&&(n=kt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ds(n,this.array)),n}setZ(e,n){return this.normalized&&(n=kt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ds(n,this.array)),n}setW(e,n){return this.normalized&&(n=kt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=kt(n,this.array),i=kt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=kt(n,this.array),i=kt(i,this.array),r=kt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=kt(n,this.array),i=kt(i,this.array),r=kt(r,this.array),s=kt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hh&&(e.usage=this.usage),e}}class km extends fn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Gm extends fn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class sr extends fn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let oM=0;const on=new gt,Cl=new Yt,Sr=new Z,Jt=new Xs,_s=new Xs,St=new Z;class li extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:oM++}),this.uuid=Vs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Dm(e)?Gm:km)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return on.makeRotationFromQuaternion(e),this.applyMatrix4(on),this}rotateX(e){return on.makeRotationX(e),this.applyMatrix4(on),this}rotateY(e){return on.makeRotationY(e),this.applyMatrix4(on),this}rotateZ(e){return on.makeRotationZ(e),this.applyMatrix4(on),this}translate(e,n,i){return on.makeTranslation(e,n,i),this.applyMatrix4(on),this}scale(e,n,i){return on.makeScale(e,n,i),this.applyMatrix4(on),this}lookAt(e){return Cl.lookAt(e),Cl.updateMatrix(),this.applyMatrix4(Cl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Sr).negate(),this.translate(Sr.x,Sr.y,Sr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new sr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xs);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Jt.setFromBufferAttribute(s),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const i=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];_s.setFromBufferAttribute(o),this.morphTargetsRelative?(St.addVectors(Jt.min,_s.min),Jt.expandByPoint(St),St.addVectors(Jt.max,_s.max),Jt.expandByPoint(St)):(Jt.expandByPoint(_s.min),Jt.expandByPoint(_s.max))}Jt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)St.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(St));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let u=0,c=o.count;u<c;u++)St.fromBufferAttribute(o,u),l&&(Sr.fromBufferAttribute(e,u),St.add(Sr)),r=Math.max(r,i.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let O=0;O<i.count;O++)o[O]=new Z,l[O]=new Z;const u=new Z,c=new Z,f=new Z,h=new $e,d=new $e,_=new $e,v=new Z,m=new Z;function p(O,G,y){u.fromBufferAttribute(i,O),c.fromBufferAttribute(i,G),f.fromBufferAttribute(i,y),h.fromBufferAttribute(s,O),d.fromBufferAttribute(s,G),_.fromBufferAttribute(s,y),c.sub(u),f.sub(u),d.sub(h),_.sub(h);const C=1/(d.x*_.y-_.x*d.y);isFinite(C)&&(v.copy(c).multiplyScalar(_.y).addScaledVector(f,-d.y).multiplyScalar(C),m.copy(f).multiplyScalar(d.x).addScaledVector(c,-_.x).multiplyScalar(C),o[O].add(v),o[G].add(v),o[y].add(v),l[O].add(m),l[G].add(m),l[y].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let O=0,G=E.length;O<G;++O){const y=E[O],C=y.start,B=y.count;for(let j=C,L=C+B;j<L;j+=3)p(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const g=new Z,S=new Z,T=new Z,R=new Z;function A(O){T.fromBufferAttribute(r,O),R.copy(T);const G=o[O];g.copy(G),g.sub(T.multiplyScalar(T.dot(G))).normalize(),S.crossVectors(R,G);const C=S.dot(l[O])<0?-1:1;a.setXYZW(O,g.x,g.y,g.z,C)}for(let O=0,G=E.length;O<G;++O){const y=E[O],C=y.start,B=y.count;for(let j=C,L=C+B;j<L;j+=3)A(e.getX(j+0)),A(e.getX(j+1)),A(e.getX(j+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new fn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new Z,s=new Z,a=new Z,o=new Z,l=new Z,u=new Z,c=new Z,f=new Z;if(e)for(let h=0,d=e.count;h<d;h+=3){const _=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,v),a.fromBufferAttribute(n,m),c.subVectors(a,s),f.subVectors(r,s),c.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,m),o.add(c),l.add(c),u.add(c),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,d=n.count;h<d;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),c.subVectors(a,s),f.subVectors(r,s),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)St.fromBufferAttribute(e,n),St.normalize(),e.setXYZ(n,St.x,St.y,St.z)}toNonIndexed(){function e(o,l){const u=o.array,c=o.itemSize,f=o.normalized,h=new u.constructor(l.length*c);let d=0,_=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*c;for(let p=0;p<c;p++)h[_++]=u[d++]}return new fn(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new li,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);n.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let c=0,f=u.length;c<f;c++){const h=u[c],d=e(h,i);l.push(d)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const d=u[f];c.push(d.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let h=0,d=f.length;h<d;h++)c.push(f[h].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,c=a.length;u<c;u++){const f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ah=new gt,ki=new Om,xo=new Pa,wh=new Z,Er=new Z,Mr=new Z,Tr=new Z,Pl=new Z,yo=new Z,So=new $e,Eo=new $e,Mo=new $e,Rh=new Z,Ch=new Z,Ph=new Z,To=new Z,bo=new Z;class ei extends Yt{constructor(e=new li,n=new Hm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){yo.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=o[l],f=s[l];c!==0&&(Pl.fromBufferAttribute(f,e),a?yo.addScaledVector(Pl,c):yo.addScaledVector(Pl.sub(n),c))}n.add(yo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),xo.copy(i.boundingSphere),xo.applyMatrix4(s),ki.copy(e.ray).recast(e.near),!(xo.containsPoint(ki.origin)===!1&&(ki.intersectSphere(xo,wh)===null||ki.origin.distanceToSquared(wh)>(e.far-e.near)**2))&&(Ah.copy(s).invert(),ki.copy(e.ray).applyMatrix4(Ah),!(i.boundingBox!==null&&ki.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ki)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=h.length;_<v;_++){const m=h[_],p=a[m.materialIndex],E=Math.max(m.start,d.start),g=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let S=E,T=g;S<T;S+=3){const R=o.getX(S),A=o.getX(S+1),O=o.getX(S+2);r=Ao(this,p,e,i,u,c,f,R,A,O),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let m=_,p=v;m<p;m+=3){const E=o.getX(m),g=o.getX(m+1),S=o.getX(m+2);r=Ao(this,a,e,i,u,c,f,E,g,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,v=h.length;_<v;_++){const m=h[_],p=a[m.materialIndex],E=Math.max(m.start,d.start),g=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let S=E,T=g;S<T;S+=3){const R=S,A=S+1,O=S+2;r=Ao(this,p,e,i,u,c,f,R,A,O),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=_,p=v;m<p;m+=3){const E=m,g=m+1,S=m+2;r=Ao(this,a,e,i,u,c,f,E,g,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function aM(t,e,n,i,r,s,a,o){let l;if(e.side===jt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Ri,o),l===null)return null;bo.copy(o),bo.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(bo);return u<n.near||u>n.far?null:{distance:u,point:bo.clone(),object:t}}function Ao(t,e,n,i,r,s,a,o,l,u){t.getVertexPosition(o,Er),t.getVertexPosition(l,Mr),t.getVertexPosition(u,Tr);const c=aM(t,e,n,i,Er,Mr,Tr,To);if(c){r&&(So.fromBufferAttribute(r,o),Eo.fromBufferAttribute(r,l),Mo.fromBufferAttribute(r,u),c.uv=Ln.getInterpolation(To,Er,Mr,Tr,So,Eo,Mo,new $e)),s&&(So.fromBufferAttribute(s,o),Eo.fromBufferAttribute(s,l),Mo.fromBufferAttribute(s,u),c.uv1=Ln.getInterpolation(To,Er,Mr,Tr,So,Eo,Mo,new $e)),a&&(Rh.fromBufferAttribute(a,o),Ch.fromBufferAttribute(a,l),Ph.fromBufferAttribute(a,u),c.normal=Ln.getInterpolation(To,Er,Mr,Tr,Rh,Ch,Ph,new Z),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a:o,b:l,c:u,normal:new Z,materialIndex:0};Ln.getNormal(Er,Mr,Tr,f.normal),c.face=f}return c}class js extends li{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],c=[],f=[];let h=0,d=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new sr(u,3)),this.setAttribute("normal",new sr(c,3)),this.setAttribute("uv",new sr(f,2));function _(v,m,p,E,g,S,T,R,A,O,G){const y=S/A,C=T/O,B=S/2,j=T/2,L=R/2,te=A+1,N=O+1;let W=0,H=0;const re=new Z;for(let he=0;he<N;he++){const de=he*C-j;for(let ye=0;ye<te;ye++){const Ue=ye*y-B;re[v]=Ue*E,re[m]=de*g,re[p]=L,u.push(re.x,re.y,re.z),re[v]=0,re[m]=0,re[p]=R>0?1:-1,c.push(re.x,re.y,re.z),f.push(ye/A),f.push(1-he/O),W+=1}}for(let he=0;he<O;he++)for(let de=0;de<A;de++){const ye=h+de+te*he,Ue=h+de+te*(he+1),ne=h+(de+1)+te*(he+1),ue=h+(de+1)+te*he;l.push(ye,Ue,ue),l.push(Ue,ne,ue),H+=6}o.addGroup(d,H,G),d+=H,h+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new js(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ts(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Ot(t){const e={};for(let n=0;n<t.length;n++){const i=ts(t[n]);for(const r in i)e[r]=i[r]}return e}function lM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function zm(t){return t.getRenderTarget()===null?t.outputColorSpace:Qe.workingColorSpace}const cM={clone:ts,merge:Ot};var uM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ci extends qs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uM,this.fragmentShader=fM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ts(e.uniforms),this.uniformsGroups=lM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Vm extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=Qn}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gi=new Z,Lh=new $e,Dh=new $e;class cn extends Vm{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Sc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sc*2*Math.atan(Math.tan(fl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gi.x,gi.y).multiplyScalar(-e/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(gi.x,gi.y).multiplyScalar(-e/gi.z)}getViewSize(e,n){return this.getViewBounds(e,Lh,Dh),n.subVectors(Dh,Lh)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(fl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const br=-90,Ar=1;class hM extends Yt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new cn(br,Ar,e,n);r.layers=this.layers,this.add(r);const s=new cn(br,Ar,e,n);s.layers=this.layers,this.add(s);const a=new cn(br,Ar,e,n);a.layers=this.layers,this.add(a);const o=new cn(br,Ar,e,n);o.layers=this.layers,this.add(o);const l=new cn(br,Ar,e,n);l.layers=this.layers,this.add(l);const u=new cn(br,Ar,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const u of n)this.remove(u);if(e===Qn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===oa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,c]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,c),e.setRenderTarget(f,h,d),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Wm extends $t{constructor(e,n,i,r,s,a,o,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:Jr,super(e,n,i,r,s,a,o,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class dM extends ar{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Wm(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Vt}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new js(5,5,5),s=new Ci({name:"CubemapFromEquirect",uniforms:ts(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:jt,blending:bi});s.uniforms.tEquirect.value=n;const a=new ei(r,s),o=n.minFilter;return n.minFilter===Ji&&(n.minFilter=Vt),new hM(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const Ll=new Z,pM=new Z,mM=new ze;class qi{constructor(e=new Z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Ll.subVectors(i,n).cross(pM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Ll),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||mM.getNormalMatrix(e),r=this.coplanarPoint(Ll).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gi=new Pa,wo=new Z;class Xm{constructor(e=new qi,n=new qi,i=new qi,r=new qi,s=new qi,a=new qi){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Qn){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],u=r[4],c=r[5],f=r[6],h=r[7],d=r[8],_=r[9],v=r[10],m=r[11],p=r[12],E=r[13],g=r[14],S=r[15];if(i[0].setComponents(l-s,h-u,m-d,S-p).normalize(),i[1].setComponents(l+s,h+u,m+d,S+p).normalize(),i[2].setComponents(l+a,h+c,m+_,S+E).normalize(),i[3].setComponents(l-a,h-c,m-_,S-E).normalize(),i[4].setComponents(l-o,h-f,m-v,S-g).normalize(),n===Qn)i[5].setComponents(l+o,h+f,m+v,S+g).normalize();else if(n===oa)i[5].setComponents(o,f,v,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Gi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(e){return Gi.center.set(0,0,0),Gi.radius=.7071067811865476,Gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(wo.x=r.normal.x>0?e.max.x:e.min.x,wo.y=r.normal.y>0?e.max.y:e.min.y,wo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(wo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function qm(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function gM(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,c){const f=u.array,h=u.usage,d=f.byteLength,_=t.createBuffer();t.bindBuffer(c,_),t.bufferData(c,f,h),u.onUploadCallback();let v;if(f instanceof Float32Array)v=t.FLOAT;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)v=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=t.SHORT;else if(f instanceof Uint32Array)v=t.UNSIGNED_INT;else if(f instanceof Int32Array)v=t.INT;else if(f instanceof Int8Array)v=t.BYTE;else if(f instanceof Uint8Array)v=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:d}}function s(u,c,f){const h=c.array,d=c._updateRange,_=c.updateRanges;if(t.bindBuffer(f,u),d.count===-1&&_.length===0&&t.bufferSubData(f,0,h),_.length!==0){for(let v=0,m=_.length;v<m;v++){const p=_[v];n?t.bufferSubData(f,p.start*h.BYTES_PER_ELEMENT,h,p.start,p.count):t.bufferSubData(f,p.start*h.BYTES_PER_ELEMENT,h.subarray(p.start,p.start+p.count))}c.clearUpdateRanges()}d.count!==-1&&(n?t.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):t.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1),c.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(t.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);if(f===void 0)i.set(u,r(u,c));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,u,c),f.version=u.version}}return{get:a,remove:o,update:l}}class La extends li{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),u=o+1,c=l+1,f=e/o,h=n/l,d=[],_=[],v=[],m=[];for(let p=0;p<c;p++){const E=p*h-a;for(let g=0;g<u;g++){const S=g*f-s;_.push(S,-E,0),v.push(0,0,1),m.push(g/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<o;E++){const g=E+u*p,S=E+u*(p+1),T=E+1+u*(p+1),R=E+1+u*p;d.push(g,S,R),d.push(S,T,R)}this.setIndex(d),this.setAttribute("position",new sr(_,3)),this.setAttribute("normal",new sr(v,3)),this.setAttribute("uv",new sr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new La(e.width,e.height,e.widthSegments,e.heightSegments)}}var _M=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vM=`#ifdef USE_ALPHAHASH
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
#endif`,xM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,SM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,EM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,MM=`#ifdef USE_AOMAP
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
#endif`,TM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bM=`#ifdef USE_BATCHING
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
#endif`,AM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,wM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,RM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,CM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,PM=`#ifdef USE_IRIDESCENCE
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
#endif`,LM=`#ifdef USE_BUMPMAP
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
#endif`,DM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,IM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,UM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,NM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,OM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,FM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,BM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,HM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,kM=`#define PI 3.141592653589793
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
} // validated`,GM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zM=`vec3 transformedNormal = objectNormal;
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
#endif`,VM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,WM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,XM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jM="gl_FragColor = linearToOutputTexel( gl_FragColor );",$M=`
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
}`,YM=`#ifdef USE_ENVMAP
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
#endif`,KM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ZM=`#ifdef USE_ENVMAP
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
#endif`,JM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,QM=`#ifdef USE_ENVMAP
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
#endif`,eT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,iT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rT=`#ifdef USE_GRADIENTMAP
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
}`,sT=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,oT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,aT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cT=`uniform bool receiveShadow;
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
#endif`,uT=`#ifdef USE_ENVMAP
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
#endif`,fT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mT=`PhysicalMaterial material;
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
#endif`,gT=`struct PhysicalMaterial {
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
}`,_T=`
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
#endif`,vT=`#if defined( RE_IndirectDiffuse )
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
#endif`,xT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ST=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ET=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,MT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,TT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,AT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wT=`#if defined( USE_POINTS_UV )
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
#endif`,RT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,CT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,PT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,LT=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,DT=`#ifdef USE_MORPHNORMALS
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
#endif`,IT=`#ifdef USE_MORPHTARGETS
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
#endif`,UT=`#ifdef USE_MORPHTARGETS
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
#endif`,NT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,OT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,FT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kT=`#ifdef USE_NORMALMAP
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
#endif`,GT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,VT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,WT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,XT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,jT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$T=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,YT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,KT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ZT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,JT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,QT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nb=`float getShadowMask() {
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
}`,ib=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rb=`#ifdef USE_SKINNING
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
#endif`,sb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ob=`#ifdef USE_SKINNING
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
#endif`,ab=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ub=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fb=`#ifdef USE_TRANSMISSION
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
#endif`,hb=`#ifdef USE_TRANSMISSION
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
#endif`,db=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _b=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vb=`uniform sampler2D t2D;
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
}`,xb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Sb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Eb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mb=`#include <common>
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
}`,Tb=`#if DEPTH_PACKING == 3200
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
}`,bb=`#define DISTANCE
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
}`,Ab=`#define DISTANCE
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
}`,wb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cb=`uniform float scale;
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
}`,Pb=`uniform vec3 diffuse;
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
}`,Lb=`#include <common>
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
}`,Db=`uniform vec3 diffuse;
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
}`,Ib=`#define LAMBERT
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
}`,Ub=`#define LAMBERT
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
}`,Nb=`#define MATCAP
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
}`,Ob=`#define MATCAP
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
}`,Fb=`#define NORMAL
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
}`,Bb=`#define NORMAL
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
}`,Hb=`#define PHONG
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
}`,kb=`#define PHONG
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
}`,Gb=`#define STANDARD
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
}`,zb=`#define STANDARD
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
}`,Vb=`#define TOON
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
}`,Wb=`#define TOON
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
}`,Xb=`uniform float size;
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
}`,qb=`uniform vec3 diffuse;
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
}`,jb=`#include <common>
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
}`,$b=`uniform vec3 color;
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
}`,Yb=`uniform float rotation;
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
}`,Kb=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:_M,alphahash_pars_fragment:vM,alphamap_fragment:xM,alphamap_pars_fragment:yM,alphatest_fragment:SM,alphatest_pars_fragment:EM,aomap_fragment:MM,aomap_pars_fragment:TM,batching_pars_vertex:bM,batching_vertex:AM,begin_vertex:wM,beginnormal_vertex:RM,bsdfs:CM,iridescence_fragment:PM,bumpmap_pars_fragment:LM,clipping_planes_fragment:DM,clipping_planes_pars_fragment:IM,clipping_planes_pars_vertex:UM,clipping_planes_vertex:NM,color_fragment:OM,color_pars_fragment:FM,color_pars_vertex:BM,color_vertex:HM,common:kM,cube_uv_reflection_fragment:GM,defaultnormal_vertex:zM,displacementmap_pars_vertex:VM,displacementmap_vertex:WM,emissivemap_fragment:XM,emissivemap_pars_fragment:qM,colorspace_fragment:jM,colorspace_pars_fragment:$M,envmap_fragment:YM,envmap_common_pars_fragment:KM,envmap_pars_fragment:ZM,envmap_pars_vertex:JM,envmap_physical_pars_fragment:uT,envmap_vertex:QM,fog_vertex:eT,fog_pars_vertex:tT,fog_fragment:nT,fog_pars_fragment:iT,gradientmap_pars_fragment:rT,lightmap_fragment:sT,lightmap_pars_fragment:oT,lights_lambert_fragment:aT,lights_lambert_pars_fragment:lT,lights_pars_begin:cT,lights_toon_fragment:fT,lights_toon_pars_fragment:hT,lights_phong_fragment:dT,lights_phong_pars_fragment:pT,lights_physical_fragment:mT,lights_physical_pars_fragment:gT,lights_fragment_begin:_T,lights_fragment_maps:vT,lights_fragment_end:xT,logdepthbuf_fragment:yT,logdepthbuf_pars_fragment:ST,logdepthbuf_pars_vertex:ET,logdepthbuf_vertex:MT,map_fragment:TT,map_pars_fragment:bT,map_particle_fragment:AT,map_particle_pars_fragment:wT,metalnessmap_fragment:RT,metalnessmap_pars_fragment:CT,morphinstance_vertex:PT,morphcolor_vertex:LT,morphnormal_vertex:DT,morphtarget_pars_vertex:IT,morphtarget_vertex:UT,normal_fragment_begin:NT,normal_fragment_maps:OT,normal_pars_fragment:FT,normal_pars_vertex:BT,normal_vertex:HT,normalmap_pars_fragment:kT,clearcoat_normal_fragment_begin:GT,clearcoat_normal_fragment_maps:zT,clearcoat_pars_fragment:VT,iridescence_pars_fragment:WT,opaque_fragment:XT,packing:qT,premultiplied_alpha_fragment:jT,project_vertex:$T,dithering_fragment:YT,dithering_pars_fragment:KT,roughnessmap_fragment:ZT,roughnessmap_pars_fragment:JT,shadowmap_pars_fragment:QT,shadowmap_pars_vertex:eb,shadowmap_vertex:tb,shadowmask_pars_fragment:nb,skinbase_vertex:ib,skinning_pars_vertex:rb,skinning_vertex:sb,skinnormal_vertex:ob,specularmap_fragment:ab,specularmap_pars_fragment:lb,tonemapping_fragment:cb,tonemapping_pars_fragment:ub,transmission_fragment:fb,transmission_pars_fragment:hb,uv_pars_fragment:db,uv_pars_vertex:pb,uv_vertex:mb,worldpos_vertex:gb,background_vert:_b,background_frag:vb,backgroundCube_vert:xb,backgroundCube_frag:yb,cube_vert:Sb,cube_frag:Eb,depth_vert:Mb,depth_frag:Tb,distanceRGBA_vert:bb,distanceRGBA_frag:Ab,equirect_vert:wb,equirect_frag:Rb,linedashed_vert:Cb,linedashed_frag:Pb,meshbasic_vert:Lb,meshbasic_frag:Db,meshlambert_vert:Ib,meshlambert_frag:Ub,meshmatcap_vert:Nb,meshmatcap_frag:Ob,meshnormal_vert:Fb,meshnormal_frag:Bb,meshphong_vert:Hb,meshphong_frag:kb,meshphysical_vert:Gb,meshphysical_frag:zb,meshtoon_vert:Vb,meshtoon_frag:Wb,points_vert:Xb,points_frag:qb,shadow_vert:jb,shadow_frag:$b,sprite_vert:Yb,sprite_frag:Kb},ve={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Pn={basic:{uniforms:Ot([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Ot([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Ot([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Ot([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Ot([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Ot([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Ot([ve.points,ve.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Ot([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Ot([ve.common,ve.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Ot([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Ot([ve.sprite,ve.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Ot([ve.common,ve.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Ot([ve.lights,ve.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Pn.physical={uniforms:Ot([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Ro={r:0,b:0,g:0},zi=new si,Zb=new gt;function Jb(t,e,n,i,r,s,a){const o=new Ze(0);let l=s===!0?0:1,u,c,f=null,h=0,d=null;function _(m,p){let E=!1,g=p.isScene===!0?p.background:null;g&&g.isTexture&&(g=(p.backgroundBlurriness>0?n:e).get(g)),g===null?v(o,l):g&&g.isColor&&(v(g,1),E=!0);const S=t.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||E)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Ra)?(c===void 0&&(c=new ei(new js(1,1,1),new Ci({name:"BackgroundCubeMaterial",uniforms:ts(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),zi.copy(p.backgroundRotation),zi.x*=-1,zi.y*=-1,zi.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),c.material.uniforms.envMap.value=g,c.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Zb.makeRotationFromEuler(zi)),c.material.toneMapped=Qe.getTransfer(g.colorSpace)!==rt,(f!==g||h!==g.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,f=g,h=g.version,d=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):g&&g.isTexture&&(u===void 0&&(u=new ei(new La(2,2),new Ci({name:"BackgroundMaterial",uniforms:ts(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=g,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=Qe.getTransfer(g.colorSpace)!==rt,g.matrixAutoUpdate===!0&&g.updateMatrix(),u.material.uniforms.uvTransform.value.copy(g.matrix),(f!==g||h!==g.version||d!==t.toneMapping)&&(u.material.needsUpdate=!0,f=g,h=g.version,d=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function v(m,p){m.getRGB(Ro,zm(t)),i.buffers.color.setClear(Ro.r,Ro.g,Ro.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(o,l)},render:_}}function Qb(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=m(null);let u=l,c=!1;function f(L,te,N,W,H){let re=!1;if(a){const he=v(W,N,te);u!==he&&(u=he,d(u.object)),re=p(L,W,N,H),re&&E(L,W,N,H)}else{const he=te.wireframe===!0;(u.geometry!==W.id||u.program!==N.id||u.wireframe!==he)&&(u.geometry=W.id,u.program=N.id,u.wireframe=he,re=!0)}H!==null&&n.update(H,t.ELEMENT_ARRAY_BUFFER),(re||c)&&(c=!1,O(L,te,N,W),H!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(H).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function d(L){return i.isWebGL2?t.bindVertexArray(L):s.bindVertexArrayOES(L)}function _(L){return i.isWebGL2?t.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function v(L,te,N){const W=N.wireframe===!0;let H=o[L.id];H===void 0&&(H={},o[L.id]=H);let re=H[te.id];re===void 0&&(re={},H[te.id]=re);let he=re[W];return he===void 0&&(he=m(h()),re[W]=he),he}function m(L){const te=[],N=[],W=[];for(let H=0;H<r;H++)te[H]=0,N[H]=0,W[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:te,enabledAttributes:N,attributeDivisors:W,object:L,attributes:{},index:null}}function p(L,te,N,W){const H=u.attributes,re=te.attributes;let he=0;const de=N.getAttributes();for(const ye in de)if(de[ye].location>=0){const ne=H[ye];let ue=re[ye];if(ue===void 0&&(ye==="instanceMatrix"&&L.instanceMatrix&&(ue=L.instanceMatrix),ye==="instanceColor"&&L.instanceColor&&(ue=L.instanceColor)),ne===void 0||ne.attribute!==ue||ue&&ne.data!==ue.data)return!0;he++}return u.attributesNum!==he||u.index!==W}function E(L,te,N,W){const H={},re=te.attributes;let he=0;const de=N.getAttributes();for(const ye in de)if(de[ye].location>=0){let ne=re[ye];ne===void 0&&(ye==="instanceMatrix"&&L.instanceMatrix&&(ne=L.instanceMatrix),ye==="instanceColor"&&L.instanceColor&&(ne=L.instanceColor));const ue={};ue.attribute=ne,ne&&ne.data&&(ue.data=ne.data),H[ye]=ue,he++}u.attributes=H,u.attributesNum=he,u.index=W}function g(){const L=u.newAttributes;for(let te=0,N=L.length;te<N;te++)L[te]=0}function S(L){T(L,0)}function T(L,te){const N=u.newAttributes,W=u.enabledAttributes,H=u.attributeDivisors;N[L]=1,W[L]===0&&(t.enableVertexAttribArray(L),W[L]=1),H[L]!==te&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,te),H[L]=te)}function R(){const L=u.newAttributes,te=u.enabledAttributes;for(let N=0,W=te.length;N<W;N++)te[N]!==L[N]&&(t.disableVertexAttribArray(N),te[N]=0)}function A(L,te,N,W,H,re,he){he===!0?t.vertexAttribIPointer(L,te,N,H,re):t.vertexAttribPointer(L,te,N,W,H,re)}function O(L,te,N,W){if(i.isWebGL2===!1&&(L.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const H=W.attributes,re=N.getAttributes(),he=te.defaultAttributeValues;for(const de in re){const ye=re[de];if(ye.location>=0){let Ue=H[de];if(Ue===void 0&&(de==="instanceMatrix"&&L.instanceMatrix&&(Ue=L.instanceMatrix),de==="instanceColor"&&L.instanceColor&&(Ue=L.instanceColor)),Ue!==void 0){const ne=Ue.normalized,ue=Ue.itemSize,xe=n.get(Ue);if(xe===void 0)continue;const V=xe.buffer,oe=xe.type,se=xe.bytesPerElement,me=i.isWebGL2===!0&&(oe===t.INT||oe===t.UNSIGNED_INT||Ue.gpuType===Tm);if(Ue.isInterleavedBufferAttribute){const ge=Ue.data,I=ge.stride,w=Ue.offset;if(ge.isInstancedInterleavedBuffer){for(let P=0;P<ye.locationSize;P++)T(ye.location+P,ge.meshPerAttribute);L.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let P=0;P<ye.locationSize;P++)S(ye.location+P);t.bindBuffer(t.ARRAY_BUFFER,V);for(let P=0;P<ye.locationSize;P++)A(ye.location+P,ue/ye.locationSize,oe,ne,I*se,(w+ue/ye.locationSize*P)*se,me)}else{if(Ue.isInstancedBufferAttribute){for(let ge=0;ge<ye.locationSize;ge++)T(ye.location+ge,Ue.meshPerAttribute);L.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Ue.meshPerAttribute*Ue.count)}else for(let ge=0;ge<ye.locationSize;ge++)S(ye.location+ge);t.bindBuffer(t.ARRAY_BUFFER,V);for(let ge=0;ge<ye.locationSize;ge++)A(ye.location+ge,ue/ye.locationSize,oe,ne,ue*se,ue/ye.locationSize*ge*se,me)}}else if(he!==void 0){const ne=he[de];if(ne!==void 0)switch(ne.length){case 2:t.vertexAttrib2fv(ye.location,ne);break;case 3:t.vertexAttrib3fv(ye.location,ne);break;case 4:t.vertexAttrib4fv(ye.location,ne);break;default:t.vertexAttrib1fv(ye.location,ne)}}}}R()}function G(){B();for(const L in o){const te=o[L];for(const N in te){const W=te[N];for(const H in W)_(W[H].object),delete W[H];delete te[N]}delete o[L]}}function y(L){if(o[L.id]===void 0)return;const te=o[L.id];for(const N in te){const W=te[N];for(const H in W)_(W[H].object),delete W[H];delete te[N]}delete o[L.id]}function C(L){for(const te in o){const N=o[te];if(N[L.id]===void 0)continue;const W=N[L.id];for(const H in W)_(W[H].object),delete W[H];delete N[L.id]}}function B(){j(),c=!0,u!==l&&(u=l,d(u.object))}function j(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:B,resetDefaultState:j,dispose:G,releaseStatesOfGeometry:y,releaseStatesOfProgram:C,initAttributes:g,enableAttribute:S,disableUnusedAttributes:R}}function eA(t,e,n,i){const r=i.isWebGL2;let s;function a(c){s=c}function o(c,f){t.drawArrays(s,c,f),n.update(f,s,1)}function l(c,f,h){if(h===0)return;let d,_;if(r)d=t,_="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[_](s,c,f,h),n.update(f,s,h)}function u(c,f,h){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<h;_++)this.render(c[_],f[_]);else{d.multiDrawArraysWEBGL(s,c,0,f,0,h);let _=0;for(let v=0;v<h;v++)_+=f[v];n.update(_,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=u}function tA(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let o=n.precision!==void 0?n.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const u=a||e.has("WEBGL_draw_buffers"),c=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),v=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),p=t.getParameter(t.MAX_VARYING_VECTORS),E=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),g=h>0,S=a||e.has("OES_texture_float"),T=g&&S,R=a?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:c,maxTextures:f,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:E,vertexTextures:g,floatFragmentTextures:S,floatVertexTextures:T,maxSamples:R}}function nA(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new qi,o=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=c(f,h,0)},this.setState=function(f,h,d){const _=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,p=t.get(f);if(!r||_===null||_.length===0||s&&!m)s?c(null):u();else{const E=s?0:i,g=E*4;let S=p.clippingState||null;l.value=S,S=c(_,h,g,d);for(let T=0;T!==g;++T)S[T]=n[T];p.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,h,d,_){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,_!==!0||m===null){const p=d+v*4,E=h.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let g=0,S=d;g!==v;++g,S+=4)a.copy(f[g]).applyMatrix4(E,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function iA(t){let e=new WeakMap;function n(a,o){return o===gc?a.mapping=Jr:o===_c&&(a.mapping=Qr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===gc||o===_c)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new dM(l.height);return u.fromEquirectangularTexture(t,a),e.set(a,u),a.addEventListener("dispose",r),n(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class rA extends Vm{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Lr=4,Ih=[.125,.215,.35,.446,.526,.582],Ki=20,Dl=new rA,Uh=new Ze;let Il=null,Ul=0,Nl=0;const ji=(1+Math.sqrt(5))/2,wr=1/ji,Nh=[new Z(1,1,1),new Z(-1,1,1),new Z(1,1,-1),new Z(-1,1,-1),new Z(0,ji,wr),new Z(0,ji,-wr),new Z(wr,0,ji),new Z(-wr,0,ji),new Z(ji,wr,0),new Z(-ji,wr,0)];class Oh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Il=this._renderer.getRenderTarget(),Ul=this._renderer.getActiveCubeFace(),Nl=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Il,Ul,Nl),e.scissorTest=!1,Co(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Jr||e.mapping===Qr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Il=this._renderer.getRenderTarget(),Ul=this._renderer.getActiveCubeFace(),Nl=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:Os,format:yn,colorSpace:Li,depthBuffer:!1},r=Fh(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fh(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sA(s)),this._blurMaterial=oA(s,e,n)}return r}_compileMaterial(e){const n=new ei(this._lodPlanes[0],e);this._renderer.compile(n,Dl)}_sceneToCubeUV(e,n,i,r){const o=new cn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,h=c.toneMapping;c.getClearColor(Uh),c.toneMapping=Ai,c.autoClear=!1;const d=new Hm({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1}),_=new ei(new js,d);let v=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,v=!0):(d.color.copy(Uh),v=!0);for(let p=0;p<6;p++){const E=p%3;E===0?(o.up.set(0,l[p],0),o.lookAt(u[p],0,0)):E===1?(o.up.set(0,0,l[p]),o.lookAt(0,u[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,u[p]));const g=this._cubeSize;Co(r,E*g,p>2?g:0,g,g),c.setRenderTarget(r),v&&c.render(_,o),c.render(e,o)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=h,c.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Jr||e.mapping===Qr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bh());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new ei(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Co(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Dl)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Nh[(r-1)%Nh.length];this._blur(e,r-1,r,s,a)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new ei(this._lodPlanes[r],u),h=u.uniforms,d=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Ki-1),v=s/_,m=isFinite(s)?1+Math.floor(c*v):Ki;m>Ki&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ki}`);const p=[];let E=0;for(let A=0;A<Ki;++A){const O=A/v,G=Math.exp(-O*O/2);p.push(G),A===0?E+=G:A<m&&(E+=2*G)}for(let A=0;A<p.length;A++)p[A]=p[A]/E;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:g}=this;h.dTheta.value=_,h.mipInt.value=g-i;const S=this._sizeLods[r],T=3*S*(r>g-Lr?r-g+Lr:0),R=4*(this._cubeSize-S);Co(n,T,R,3*S,2*S),l.setRenderTarget(n),l.render(f,Dl)}}function sA(t){const e=[],n=[],i=[];let r=t;const s=t-Lr+1+Ih.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-Lr?l=Ih[a-t+Lr-1]:a===0&&(l=0),i.push(l);const u=1/(o-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],d=6,_=6,v=3,m=2,p=1,E=new Float32Array(v*_*d),g=new Float32Array(m*_*d),S=new Float32Array(p*_*d);for(let R=0;R<d;R++){const A=R%3*2/3-1,O=R>2?0:-1,G=[A,O,0,A+2/3,O,0,A+2/3,O+1,0,A,O,0,A+2/3,O+1,0,A,O+1,0];E.set(G,v*_*R),g.set(h,m*_*R);const y=[R,R,R,R,R,R];S.set(y,p*_*R)}const T=new li;T.setAttribute("position",new fn(E,v)),T.setAttribute("uv",new fn(g,m)),T.setAttribute("faceIndex",new fn(S,p)),e.push(T),r>Lr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Fh(t,e,n){const i=new ar(t,e,n);return i.texture.mapping=Ra,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Co(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function oA(t,e,n){const i=new Float32Array(Ki),r=new Z(0,1,0);return new Ci({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:iu(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Bh(){return new Ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:iu(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Hh(){return new Ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function iu(){return`

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
	`}function aA(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,u=l===gc||l===_c,c=l===Jr||l===Qr;if(u||c)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return n===null&&(n=new Oh(t)),f=u?n.fromEquirectangular(o,f):n.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(u&&f&&f.height>0||c&&f&&r(f)){n===null&&(n=new Oh(t));const h=u?n.fromEquirectangular(o):n.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let l=0;const u=6;for(let c=0;c<u;c++)o[c]!==void 0&&l++;return l===u}function s(o){const l=o.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function lA(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function cA(t,e,n,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const v=h.morphAttributes[_];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}h.removeEventListener("dispose",a),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const d=f.morphAttributes;for(const _ in d){const v=d[_];for(let m=0,p=v.length;m<p;m++)e.update(v[m],t.ARRAY_BUFFER)}}function u(f){const h=[],d=f.index,_=f.attributes.position;let v=0;if(d!==null){const E=d.array;v=d.version;for(let g=0,S=E.length;g<S;g+=3){const T=E[g+0],R=E[g+1],A=E[g+2];h.push(T,R,R,A,A,T)}}else if(_!==void 0){const E=_.array;v=_.version;for(let g=0,S=E.length/3-1;g<S;g+=3){const T=g+0,R=g+1,A=g+2;h.push(T,R,R,A,A,T)}}else return;const m=new(Dm(h)?Gm:km)(h,1);m.version=v;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function c(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&u(f)}else u(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:c}}function uA(t,e,n,i){const r=i.isWebGL2;let s;function a(d){s=d}let o,l;function u(d){o=d.type,l=d.bytesPerElement}function c(d,_){t.drawElements(s,_,o,d*l),n.update(_,s,1)}function f(d,_,v){if(v===0)return;let m,p;if(r)m=t,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,_,o,d*l,v),n.update(_,s,v)}function h(d,_,v){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<v;p++)this.render(d[p]/l,_[p]);else{m.multiDrawElementsWEBGL(s,_,0,o,d,0,v);let p=0;for(let E=0;E<v;E++)p+=_[E];n.update(p,s,1)}}this.setMode=a,this.setIndex=u,this.render=c,this.renderInstances=f,this.renderMultiDraw=h}function fA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function hA(t,e){return t[0]-e[0]}function dA(t,e){return Math.abs(e[1])-Math.abs(t[1])}function pA(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,a=new Ct,o=[];for(let u=0;u<8;u++)o[u]=[u,0];function l(u,c,f){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const d=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,_=d!==void 0?d.length:0;let v=s.get(c);if(v===void 0||v.count!==_){let B=function(){y.dispose(),s.delete(c),c.removeEventListener("dispose",B)};v!==void 0&&v.texture.dispose();const m=c.morphAttributes.position!==void 0,p=c.morphAttributes.normal!==void 0,E=c.morphAttributes.color!==void 0,g=c.morphAttributes.position||[],S=c.morphAttributes.normal||[],T=c.morphAttributes.color||[];let R=0;m===!0&&(R=1),p===!0&&(R=2),E===!0&&(R=3);let A=c.attributes.position.count*R,O=1;A>e.maxTextureSize&&(O=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const G=new Float32Array(A*O*4*_),y=new Nm(G,A,O,_);y.type=Zn,y.needsUpdate=!0;const C=R*4;for(let j=0;j<_;j++){const L=g[j],te=S[j],N=T[j],W=A*O*4*j;for(let H=0;H<L.count;H++){const re=H*C;m===!0&&(a.fromBufferAttribute(L,H),G[W+re+0]=a.x,G[W+re+1]=a.y,G[W+re+2]=a.z,G[W+re+3]=0),p===!0&&(a.fromBufferAttribute(te,H),G[W+re+4]=a.x,G[W+re+5]=a.y,G[W+re+6]=a.z,G[W+re+7]=0),E===!0&&(a.fromBufferAttribute(N,H),G[W+re+8]=a.x,G[W+re+9]=a.y,G[W+re+10]=a.z,G[W+re+11]=N.itemSize===4?a.w:1)}}v={count:_,texture:y,size:new $e(A,O)},s.set(c,v),c.addEventListener("dispose",B)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)f.getUniforms().setValue(t,"morphTexture",u.morphTexture,n);else{let m=0;for(let E=0;E<h.length;E++)m+=h[E];const p=c.morphTargetsRelative?1:1-m;f.getUniforms().setValue(t,"morphTargetBaseInfluence",p),f.getUniforms().setValue(t,"morphTargetInfluences",h)}f.getUniforms().setValue(t,"morphTargetsTexture",v.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",v.size)}else{const d=h===void 0?0:h.length;let _=i[c.id];if(_===void 0||_.length!==d){_=[];for(let g=0;g<d;g++)_[g]=[g,0];i[c.id]=_}for(let g=0;g<d;g++){const S=_[g];S[0]=g,S[1]=h[g]}_.sort(dA);for(let g=0;g<8;g++)g<d&&_[g][1]?(o[g][0]=_[g][0],o[g][1]=_[g][1]):(o[g][0]=Number.MAX_SAFE_INTEGER,o[g][1]=0);o.sort(hA);const v=c.morphAttributes.position,m=c.morphAttributes.normal;let p=0;for(let g=0;g<8;g++){const S=o[g],T=S[0],R=S[1];T!==Number.MAX_SAFE_INTEGER&&R?(v&&c.getAttribute("morphTarget"+g)!==v[T]&&c.setAttribute("morphTarget"+g,v[T]),m&&c.getAttribute("morphNormal"+g)!==m[T]&&c.setAttribute("morphNormal"+g,m[T]),r[g]=R,p+=R):(v&&c.hasAttribute("morphTarget"+g)===!0&&c.deleteAttribute("morphTarget"+g),m&&c.hasAttribute("morphNormal"+g)===!0&&c.deleteAttribute("morphNormal"+g),r[g]=0)}const E=c.morphTargetsRelative?1:1-p;f.getUniforms().setValue(t,"morphTargetBaseInfluence",E),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function mA(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function a(){r=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:a}}class jm extends $t{constructor(e,n,i,r,s,a,o,l,u,c){if(c=c!==void 0?c:rr,c!==rr&&c!==es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===rr&&(i=Ei),i===void 0&&c===es&&(i=ir),super(null,r,s,a,o,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:Bt,this.minFilter=l!==void 0?l:Bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const $m=new $t,Ym=new jm(1,1);Ym.compareFunction=Lm;const Km=new Nm,Zm=new KE,Jm=new Wm,kh=[],Gh=[],zh=new Float32Array(16),Vh=new Float32Array(9),Wh=new Float32Array(4);function os(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=kh[r];if(s===void 0&&(s=new Float32Array(r),kh[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function vt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function xt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Da(t,e){let n=Gh[e];n===void 0&&(n=new Int32Array(e),Gh[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function gA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function _A(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(vt(n,e))return;t.uniform2fv(this.addr,e),xt(n,e)}}function vA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(vt(n,e))return;t.uniform3fv(this.addr,e),xt(n,e)}}function xA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(vt(n,e))return;t.uniform4fv(this.addr,e),xt(n,e)}}function yA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(vt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),xt(n,e)}else{if(vt(n,i))return;Wh.set(i),t.uniformMatrix2fv(this.addr,!1,Wh),xt(n,i)}}function SA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(vt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),xt(n,e)}else{if(vt(n,i))return;Vh.set(i),t.uniformMatrix3fv(this.addr,!1,Vh),xt(n,i)}}function EA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(vt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),xt(n,e)}else{if(vt(n,i))return;zh.set(i),t.uniformMatrix4fv(this.addr,!1,zh),xt(n,i)}}function MA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function TA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(vt(n,e))return;t.uniform2iv(this.addr,e),xt(n,e)}}function bA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(vt(n,e))return;t.uniform3iv(this.addr,e),xt(n,e)}}function AA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(vt(n,e))return;t.uniform4iv(this.addr,e),xt(n,e)}}function wA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function RA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(vt(n,e))return;t.uniform2uiv(this.addr,e),xt(n,e)}}function CA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(vt(n,e))return;t.uniform3uiv(this.addr,e),xt(n,e)}}function PA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(vt(n,e))return;t.uniform4uiv(this.addr,e),xt(n,e)}}function LA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?Ym:$m;n.setTexture2D(e||s,r)}function DA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Zm,r)}function IA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Jm,r)}function UA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Km,r)}function NA(t){switch(t){case 5126:return gA;case 35664:return _A;case 35665:return vA;case 35666:return xA;case 35674:return yA;case 35675:return SA;case 35676:return EA;case 5124:case 35670:return MA;case 35667:case 35671:return TA;case 35668:case 35672:return bA;case 35669:case 35673:return AA;case 5125:return wA;case 36294:return RA;case 36295:return CA;case 36296:return PA;case 35678:case 36198:case 36298:case 36306:case 35682:return LA;case 35679:case 36299:case 36307:return DA;case 35680:case 36300:case 36308:case 36293:return IA;case 36289:case 36303:case 36311:case 36292:return UA}}function OA(t,e){t.uniform1fv(this.addr,e)}function FA(t,e){const n=os(e,this.size,2);t.uniform2fv(this.addr,n)}function BA(t,e){const n=os(e,this.size,3);t.uniform3fv(this.addr,n)}function HA(t,e){const n=os(e,this.size,4);t.uniform4fv(this.addr,n)}function kA(t,e){const n=os(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function GA(t,e){const n=os(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function zA(t,e){const n=os(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function VA(t,e){t.uniform1iv(this.addr,e)}function WA(t,e){t.uniform2iv(this.addr,e)}function XA(t,e){t.uniform3iv(this.addr,e)}function qA(t,e){t.uniform4iv(this.addr,e)}function jA(t,e){t.uniform1uiv(this.addr,e)}function $A(t,e){t.uniform2uiv(this.addr,e)}function YA(t,e){t.uniform3uiv(this.addr,e)}function KA(t,e){t.uniform4uiv(this.addr,e)}function ZA(t,e,n){const i=this.cache,r=e.length,s=Da(n,r);vt(i,s)||(t.uniform1iv(this.addr,s),xt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||$m,s[a])}function JA(t,e,n){const i=this.cache,r=e.length,s=Da(n,r);vt(i,s)||(t.uniform1iv(this.addr,s),xt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Zm,s[a])}function QA(t,e,n){const i=this.cache,r=e.length,s=Da(n,r);vt(i,s)||(t.uniform1iv(this.addr,s),xt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Jm,s[a])}function ew(t,e,n){const i=this.cache,r=e.length,s=Da(n,r);vt(i,s)||(t.uniform1iv(this.addr,s),xt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Km,s[a])}function tw(t){switch(t){case 5126:return OA;case 35664:return FA;case 35665:return BA;case 35666:return HA;case 35674:return kA;case 35675:return GA;case 35676:return zA;case 5124:case 35670:return VA;case 35667:case 35671:return WA;case 35668:case 35672:return XA;case 35669:case 35673:return qA;case 5125:return jA;case 36294:return $A;case 36295:return YA;case 36296:return KA;case 35678:case 36198:case 36298:case 36306:case 35682:return ZA;case 35679:case 36299:case 36307:return JA;case 35680:case 36300:case 36308:case 36293:return QA;case 36289:case 36303:case 36311:case 36292:return ew}}class nw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=NA(n.type)}}class iw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=tw(n.type)}}class rw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Ol=/(\w+)(\])?(\[|\.)?/g;function Xh(t,e){t.seq.push(e),t.map[e.id]=e}function sw(t,e,n){const i=t.name,r=i.length;for(Ol.lastIndex=0;;){const s=Ol.exec(i),a=Ol.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){Xh(n,u===void 0?new nw(o,t,e):new iw(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new rw(o),Xh(n,f)),n=f}}}class Oo{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);sw(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function qh(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const ow=37297;let aw=0;function lw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function cw(t){const e=Qe.getPrimaries(Qe.workingColorSpace),n=Qe.getPrimaries(t);let i;switch(e===n?i="":e===sa&&n===ra?i="LinearDisplayP3ToLinearSRGB":e===ra&&n===sa&&(i="LinearSRGBToLinearDisplayP3"),t){case Li:case Ca:return[i,"LinearTransferOETF"];case Cn:case nu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function jh(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+lw(t.getShaderSource(e),a)}else return r}function uw(t,e){const n=cw(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function fw(t,e){let n;switch(e){case _E:n="Linear";break;case vE:n="Reinhard";break;case xE:n="OptimizedCineon";break;case yE:n="ACESFilmic";break;case EE:n="AgX";break;case ME:n="Neutral";break;case SE:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function hw(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.alphaToCoverage||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Dr).join(`
`)}function dw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Dr).join(`
`)}function pw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function mw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Dr(t){return t!==""}function $h(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yh(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mc(t){return t.replace(gw,vw)}const _w=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function vw(t,e){let n=Ge[e];if(n===void 0){const i=_w.get(e);if(i!==void 0)n=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Mc(n)}const xw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kh(t){return t.replace(xw,yw)}function yw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Zh(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	`;return t.isWebGL2&&(e+=`precision ${t.precision} sampler3D;
		precision ${t.precision} sampler2DArray;
		precision ${t.precision} sampler2DShadow;
		precision ${t.precision} samplerCubeShadow;
		precision ${t.precision} sampler2DArrayShadow;
		precision ${t.precision} isampler2D;
		precision ${t.precision} isampler3D;
		precision ${t.precision} isamplerCube;
		precision ${t.precision} isampler2DArray;
		precision ${t.precision} usampler2D;
		precision ${t.precision} usampler3D;
		precision ${t.precision} usamplerCube;
		precision ${t.precision} usampler2DArray;
		`),t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Sw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Sm?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===XS?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Wn&&(e="SHADOWMAP_TYPE_VSM"),e}function Ew(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Jr:case Qr:e="ENVMAP_TYPE_CUBE";break;case Ra:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Mw(t){let e="ENVMAP_MODE_REFLECTION";return t.envMap&&t.envMapMode===Qr&&(e="ENVMAP_MODE_REFRACTION"),e}function Tw(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Em:e="ENVMAP_BLENDING_MULTIPLY";break;case mE:e="ENVMAP_BLENDING_MIX";break;case gE:e="ENVMAP_BLENDING_ADD";break}return e}function bw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function Aw(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=Sw(n),u=Ew(n),c=Mw(n),f=Tw(n),h=bw(n),d=n.isWebGL2?"":hw(n),_=dw(n),v=pw(s),m=r.createProgram();let p,E,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Dr).join(`
`),p.length>0&&(p+=`
`),E=[d,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Dr).join(`
`),E.length>0&&(E+=`
`)):(p=[Zh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Dr).join(`
`),E=[d,Zh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ai?"#define TONE_MAPPING":"",n.toneMapping!==Ai?Ge.tonemapping_pars_fragment:"",n.toneMapping!==Ai?fw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,uw("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Dr).join(`
`)),a=Mc(a),a=$h(a,n),a=Yh(a,n),o=Mc(o),o=$h(o,n),o=Yh(o,n),a=Kh(a),o=Kh(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,p=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,E=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===dh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===dh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);const S=g+p+a,T=g+E+o,R=qh(r,r.VERTEX_SHADER,S),A=qh(r,r.FRAGMENT_SHADER,T);r.attachShader(m,R),r.attachShader(m,A),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function O(B){if(t.debug.checkShaderErrors){const j=r.getProgramInfoLog(m).trim(),L=r.getShaderInfoLog(R).trim(),te=r.getShaderInfoLog(A).trim();let N=!0,W=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(N=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,R,A);else{const H=jh(r,R,"vertex"),re=jh(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+j+`
`+H+`
`+re)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(L===""||te==="")&&(W=!1);W&&(B.diagnostics={runnable:N,programLog:j,vertexShader:{log:L,prefix:p},fragmentShader:{log:te,prefix:E}})}r.deleteShader(R),r.deleteShader(A),G=new Oo(r,m),y=mw(r,m)}let G;this.getUniforms=function(){return G===void 0&&O(this),G};let y;this.getAttributes=function(){return y===void 0&&O(this),y};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(m,ow)),C},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=aw++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=R,this.fragmentShader=A,this}let ww=0;class Rw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Cw(e),n.set(e,i)),i}}class Cw{constructor(e){this.id=ww++,this.code=e,this.usedTimes=0}}function Pw(t,e,n,i,r,s,a){const o=new Fm,l=new Rw,u=new Set,c=[],f=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let _=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return u.add(y),y===0?"uv":`uv${y}`}function p(y,C,B,j,L){const te=j.fog,N=L.geometry,W=y.isMeshStandardMaterial?j.environment:null,H=(y.isMeshStandardMaterial?n:e).get(y.envMap||W),re=H&&H.mapping===Ra?H.image.height:null,he=v[y.type];y.precision!==null&&(_=r.getMaxPrecision(y.precision),_!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",_,"instead."));const de=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ye=de!==void 0?de.length:0;let Ue=0;N.morphAttributes.position!==void 0&&(Ue=1),N.morphAttributes.normal!==void 0&&(Ue=2),N.morphAttributes.color!==void 0&&(Ue=3);let ne,ue,xe,V;if(he){const tt=Pn[he];ne=tt.vertexShader,ue=tt.fragmentShader}else ne=y.vertexShader,ue=y.fragmentShader,l.update(y),xe=l.getVertexShaderID(y),V=l.getFragmentShaderID(y);const oe=t.getRenderTarget(),se=L.isInstancedMesh===!0,me=L.isBatchedMesh===!0,ge=!!y.map,I=!!y.matcap,w=!!H,P=!!y.aoMap,D=!!y.lightMap,q=!!y.bumpMap,X=!!y.normalMap,ee=!!y.displacementMap,ae=!!y.emissiveMap,ce=!!y.metalnessMap,M=!!y.roughnessMap,x=y.anisotropy>0,k=y.clearcoat>0,F=y.iridescence>0,$=y.sheen>0,K=y.transmission>0,Se=x&&!!y.anisotropyMap,Ee=k&&!!y.clearcoatMap,le=k&&!!y.clearcoatNormalMap,pe=k&&!!y.clearcoatRoughnessMap,Re=F&&!!y.iridescenceMap,fe=F&&!!y.iridescenceThicknessMap,qe=$&&!!y.sheenColorMap,Fe=$&&!!y.sheenRoughnessMap,Pe=!!y.specularMap,be=!!y.specularColorMap,we=!!y.specularIntensityMap,We=K&&!!y.transmissionMap,Oe=K&&!!y.thicknessMap,st=!!y.gradientMap,U=!!y.alphaMap,Me=y.alphaTest>0,J=!!y.alphaHash,_e=!!y.extensions;let Te=Ai;y.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Te=t.toneMapping);const Xe={isWebGL2:f,shaderID:he,shaderType:y.type,shaderName:y.name,vertexShader:ne,fragmentShader:ue,defines:y.defines,customVertexShaderID:xe,customFragmentShaderID:V,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:_,batching:me,instancing:se,instancingColor:se&&L.instanceColor!==null,instancingMorph:se&&L.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:oe===null?t.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Li,alphaToCoverage:!!y.alphaToCoverage,map:ge,matcap:I,envMap:w,envMapMode:w&&H.mapping,envMapCubeUVHeight:re,aoMap:P,lightMap:D,bumpMap:q,normalMap:X,displacementMap:d&&ee,emissiveMap:ae,normalMapObjectSpace:X&&y.normalMapType===NE,normalMapTangentSpace:X&&y.normalMapType===UE,metalnessMap:ce,roughnessMap:M,anisotropy:x,anisotropyMap:Se,clearcoat:k,clearcoatMap:Ee,clearcoatNormalMap:le,clearcoatRoughnessMap:pe,iridescence:F,iridescenceMap:Re,iridescenceThicknessMap:fe,sheen:$,sheenColorMap:qe,sheenRoughnessMap:Fe,specularMap:Pe,specularColorMap:be,specularIntensityMap:we,transmission:K,transmissionMap:We,thicknessMap:Oe,gradientMap:st,opaque:y.transparent===!1&&y.blending===Wr&&y.alphaToCoverage===!1,alphaMap:U,alphaTest:Me,alphaHash:J,combine:y.combine,mapUv:ge&&m(y.map.channel),aoMapUv:P&&m(y.aoMap.channel),lightMapUv:D&&m(y.lightMap.channel),bumpMapUv:q&&m(y.bumpMap.channel),normalMapUv:X&&m(y.normalMap.channel),displacementMapUv:ee&&m(y.displacementMap.channel),emissiveMapUv:ae&&m(y.emissiveMap.channel),metalnessMapUv:ce&&m(y.metalnessMap.channel),roughnessMapUv:M&&m(y.roughnessMap.channel),anisotropyMapUv:Se&&m(y.anisotropyMap.channel),clearcoatMapUv:Ee&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:le&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:qe&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&m(y.sheenRoughnessMap.channel),specularMapUv:Pe&&m(y.specularMap.channel),specularColorMapUv:be&&m(y.specularColorMap.channel),specularIntensityMapUv:we&&m(y.specularIntensityMap.channel),transmissionMapUv:We&&m(y.transmissionMap.channel),thicknessMapUv:Oe&&m(y.thicknessMap.channel),alphaMapUv:U&&m(y.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(X||x),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!N.attributes.uv&&(ge||U),fog:!!te,useFog:y.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:L.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Ue,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&B.length>0,shadowMapType:t.shadowMap.type,toneMapping:Te,useLegacyLights:t._useLegacyLights,decodeVideoTexture:ge&&y.map.isVideoTexture===!0&&Qe.getTransfer(y.map.colorSpace)===rt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Kn,flipSided:y.side===jt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:_e&&y.extensions.derivatives===!0,extensionFragDepth:_e&&y.extensions.fragDepth===!0,extensionDrawBuffers:_e&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:_e&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:_e&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:_e&&y.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Xe.vertexUv1s=u.has(1),Xe.vertexUv2s=u.has(2),Xe.vertexUv3s=u.has(3),u.clear(),Xe}function E(y){const C=[];if(y.shaderID?C.push(y.shaderID):(C.push(y.customVertexShaderID),C.push(y.customFragmentShaderID)),y.defines!==void 0)for(const B in y.defines)C.push(B),C.push(y.defines[B]);return y.isRawShaderMaterial===!1&&(g(C,y),S(C,y),C.push(t.outputColorSpace)),C.push(y.customProgramCacheKey),C.join()}function g(y,C){y.push(C.precision),y.push(C.outputColorSpace),y.push(C.envMapMode),y.push(C.envMapCubeUVHeight),y.push(C.mapUv),y.push(C.alphaMapUv),y.push(C.lightMapUv),y.push(C.aoMapUv),y.push(C.bumpMapUv),y.push(C.normalMapUv),y.push(C.displacementMapUv),y.push(C.emissiveMapUv),y.push(C.metalnessMapUv),y.push(C.roughnessMapUv),y.push(C.anisotropyMapUv),y.push(C.clearcoatMapUv),y.push(C.clearcoatNormalMapUv),y.push(C.clearcoatRoughnessMapUv),y.push(C.iridescenceMapUv),y.push(C.iridescenceThicknessMapUv),y.push(C.sheenColorMapUv),y.push(C.sheenRoughnessMapUv),y.push(C.specularMapUv),y.push(C.specularColorMapUv),y.push(C.specularIntensityMapUv),y.push(C.transmissionMapUv),y.push(C.thicknessMapUv),y.push(C.combine),y.push(C.fogExp2),y.push(C.sizeAttenuation),y.push(C.morphTargetsCount),y.push(C.morphAttributeCount),y.push(C.numDirLights),y.push(C.numPointLights),y.push(C.numSpotLights),y.push(C.numSpotLightMaps),y.push(C.numHemiLights),y.push(C.numRectAreaLights),y.push(C.numDirLightShadows),y.push(C.numPointLightShadows),y.push(C.numSpotLightShadows),y.push(C.numSpotLightShadowsWithMaps),y.push(C.numLightProbes),y.push(C.shadowMapType),y.push(C.toneMapping),y.push(C.numClippingPlanes),y.push(C.numClipIntersection),y.push(C.depthPacking)}function S(y,C){o.disableAll(),C.isWebGL2&&o.enable(0),C.supportsVertexTextures&&o.enable(1),C.instancing&&o.enable(2),C.instancingColor&&o.enable(3),C.instancingMorph&&o.enable(4),C.matcap&&o.enable(5),C.envMap&&o.enable(6),C.normalMapObjectSpace&&o.enable(7),C.normalMapTangentSpace&&o.enable(8),C.clearcoat&&o.enable(9),C.iridescence&&o.enable(10),C.alphaTest&&o.enable(11),C.vertexColors&&o.enable(12),C.vertexAlphas&&o.enable(13),C.vertexUv1s&&o.enable(14),C.vertexUv2s&&o.enable(15),C.vertexUv3s&&o.enable(16),C.vertexTangents&&o.enable(17),C.anisotropy&&o.enable(18),C.alphaHash&&o.enable(19),C.batching&&o.enable(20),y.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.skinning&&o.enable(4),C.morphTargets&&o.enable(5),C.morphNormals&&o.enable(6),C.morphColors&&o.enable(7),C.premultipliedAlpha&&o.enable(8),C.shadowMapEnabled&&o.enable(9),C.useLegacyLights&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.alphaToCoverage&&o.enable(20),y.push(o.mask)}function T(y){const C=v[y.type];let B;if(C){const j=Pn[C];B=cM.clone(j.uniforms)}else B=y.uniforms;return B}function R(y,C){let B;for(let j=0,L=c.length;j<L;j++){const te=c[j];if(te.cacheKey===C){B=te,++B.usedTimes;break}}return B===void 0&&(B=new Aw(t,C,y,s),c.push(B)),B}function A(y){if(--y.usedTimes===0){const C=c.indexOf(y);c[C]=c[c.length-1],c.pop(),y.destroy()}}function O(y){l.remove(y)}function G(){l.dispose()}return{getParameters:p,getProgramCacheKey:E,getUniforms:T,acquireProgram:R,releaseProgram:A,releaseShaderCache:O,programs:c,dispose:G}}function Lw(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function Dw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Jh(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Qh(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f,h,d,_,v,m){let p=t[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:_,renderOrder:f.renderOrder,z:v,group:m},t[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=_,p.renderOrder=f.renderOrder,p.z=v,p.group=m),e++,p}function o(f,h,d,_,v,m){const p=a(f,h,d,_,v,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):n.push(p)}function l(f,h,d,_,v,m){const p=a(f,h,d,_,v,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):n.unshift(p)}function u(f,h){n.length>1&&n.sort(f||Dw),i.length>1&&i.sort(h||Jh),r.length>1&&r.sort(h||Jh)}function c(){for(let f=e,h=t.length;f<h;f++){const d=t[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:c,sort:u}}function Iw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Qh,t.set(i,[a])):r>=s.length?(a=new Qh,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function Uw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Z,color:new Ze};break;case"SpotLight":n={position:new Z,direction:new Z,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Z,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Z,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return t[e.id]=n,n}}}function Nw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Ow=0;function Fw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Bw(t,e){const n=new Uw,i=Nw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new Z);const s=new Z,a=new gt,o=new gt;function l(c,f){let h=0,d=0,_=0;for(let B=0;B<9;B++)r.probe[B].set(0,0,0);let v=0,m=0,p=0,E=0,g=0,S=0,T=0,R=0,A=0,O=0,G=0;c.sort(Fw);const y=f===!0?Math.PI:1;for(let B=0,j=c.length;B<j;B++){const L=c[B],te=L.color,N=L.intensity,W=L.distance,H=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=te.r*N*y,d+=te.g*N*y,_+=te.b*N*y;else if(L.isLightProbe){for(let re=0;re<9;re++)r.probe[re].addScaledVector(L.sh.coefficients[re],N);G++}else if(L.isDirectionalLight){const re=n.get(L);if(re.color.copy(L.color).multiplyScalar(L.intensity*y),L.castShadow){const he=L.shadow,de=i.get(L);de.shadowBias=he.bias,de.shadowNormalBias=he.normalBias,de.shadowRadius=he.radius,de.shadowMapSize=he.mapSize,r.directionalShadow[v]=de,r.directionalShadowMap[v]=H,r.directionalShadowMatrix[v]=L.shadow.matrix,S++}r.directional[v]=re,v++}else if(L.isSpotLight){const re=n.get(L);re.position.setFromMatrixPosition(L.matrixWorld),re.color.copy(te).multiplyScalar(N*y),re.distance=W,re.coneCos=Math.cos(L.angle),re.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),re.decay=L.decay,r.spot[p]=re;const he=L.shadow;if(L.map&&(r.spotLightMap[A]=L.map,A++,he.updateMatrices(L),L.castShadow&&O++),r.spotLightMatrix[p]=he.matrix,L.castShadow){const de=i.get(L);de.shadowBias=he.bias,de.shadowNormalBias=he.normalBias,de.shadowRadius=he.radius,de.shadowMapSize=he.mapSize,r.spotShadow[p]=de,r.spotShadowMap[p]=H,R++}p++}else if(L.isRectAreaLight){const re=n.get(L);re.color.copy(te).multiplyScalar(N),re.halfWidth.set(L.width*.5,0,0),re.halfHeight.set(0,L.height*.5,0),r.rectArea[E]=re,E++}else if(L.isPointLight){const re=n.get(L);if(re.color.copy(L.color).multiplyScalar(L.intensity*y),re.distance=L.distance,re.decay=L.decay,L.castShadow){const he=L.shadow,de=i.get(L);de.shadowBias=he.bias,de.shadowNormalBias=he.normalBias,de.shadowRadius=he.radius,de.shadowMapSize=he.mapSize,de.shadowCameraNear=he.camera.near,de.shadowCameraFar=he.camera.far,r.pointShadow[m]=de,r.pointShadowMap[m]=H,r.pointShadowMatrix[m]=L.shadow.matrix,T++}r.point[m]=re,m++}else if(L.isHemisphereLight){const re=n.get(L);re.skyColor.copy(L.color).multiplyScalar(N*y),re.groundColor.copy(L.groundColor).multiplyScalar(N*y),r.hemi[g]=re,g++}}E>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_FLOAT_1,r.rectAreaLTC2=ve.LTC_FLOAT_2):(r.rectAreaLTC1=ve.LTC_HALF_1,r.rectAreaLTC2=ve.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_FLOAT_1,r.rectAreaLTC2=ve.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_HALF_1,r.rectAreaLTC2=ve.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=d,r.ambient[2]=_;const C=r.hash;(C.directionalLength!==v||C.pointLength!==m||C.spotLength!==p||C.rectAreaLength!==E||C.hemiLength!==g||C.numDirectionalShadows!==S||C.numPointShadows!==T||C.numSpotShadows!==R||C.numSpotMaps!==A||C.numLightProbes!==G)&&(r.directional.length=v,r.spot.length=p,r.rectArea.length=E,r.point.length=m,r.hemi.length=g,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=R+A-O,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=G,C.directionalLength=v,C.pointLength=m,C.spotLength=p,C.rectAreaLength=E,C.hemiLength=g,C.numDirectionalShadows=S,C.numPointShadows=T,C.numSpotShadows=R,C.numSpotMaps=A,C.numLightProbes=G,r.version=Ow++)}function u(c,f){let h=0,d=0,_=0,v=0,m=0;const p=f.matrixWorldInverse;for(let E=0,g=c.length;E<g;E++){const S=c[E];if(S.isDirectionalLight){const T=r.directional[h];T.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),h++}else if(S.isSpotLight){const T=r.spot[_];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),_++}else if(S.isRectAreaLight){const T=r.rectArea[v];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(p),o.identity(),a.copy(S.matrixWorld),a.premultiply(p),o.extractRotation(a),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),v++}else if(S.isPointLight){const T=r.point[d];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(p),d++}else if(S.isHemisphereLight){const T=r.hemi[m];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(p),m++}}}return{setup:l,setupView:u,state:r}}function ed(t,e){const n=new Bw(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){n.setup(i,f)}function u(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o}}function Hw(t,e){let n=new WeakMap;function i(s,a=0){const o=n.get(s);let l;return o===void 0?(l=new ed(t,e),n.set(s,[l])):a>=o.length?(l=new ed(t,e),o.push(l)):l=o[a],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class kw extends qs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=DE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Gw extends qs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const zw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vw=`uniform sampler2D shadow_pass;
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
}`;function Ww(t,e,n){let i=new Xm;const r=new $e,s=new $e,a=new Ct,o=new kw({depthPacking:IE}),l=new Gw,u={},c=n.maxTextureSize,f={[Ri]:jt,[jt]:Ri,[Kn]:Kn},h=new Ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:zw,fragmentShader:Vw}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const _=new li;_.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ei(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sm;let p=this.type;this.render=function(R,A,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const G=t.getRenderTarget(),y=t.getActiveCubeFace(),C=t.getActiveMipmapLevel(),B=t.state;B.setBlending(bi),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const j=p!==Wn&&this.type===Wn,L=p===Wn&&this.type!==Wn;for(let te=0,N=R.length;te<N;te++){const W=R[te],H=W.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const re=H.getFrameExtents();if(r.multiply(re),s.copy(H.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/re.x),r.x=s.x*re.x,H.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/re.y),r.y=s.y*re.y,H.mapSize.y=s.y)),H.map===null||j===!0||L===!0){const de=this.type!==Wn?{minFilter:Bt,magFilter:Bt}:{};H.map!==null&&H.map.dispose(),H.map=new ar(r.x,r.y,de),H.map.texture.name=W.name+".shadowMap",H.camera.updateProjectionMatrix()}t.setRenderTarget(H.map),t.clear();const he=H.getViewportCount();for(let de=0;de<he;de++){const ye=H.getViewport(de);a.set(s.x*ye.x,s.y*ye.y,s.x*ye.z,s.y*ye.w),B.viewport(a),H.updateMatrices(W,de),i=H.getFrustum(),S(A,O,H.camera,W,this.type)}H.isPointLightShadow!==!0&&this.type===Wn&&E(H,O),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(G,y,C)};function E(R,A){const O=e.update(v);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ar(r.x,r.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(A,null,O,h,v,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(A,null,O,d,v,null)}function g(R,A,O,G){let y=null;const C=O.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(C!==void 0)y=C;else if(y=O.isPointLight===!0?l:o,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const B=y.uuid,j=A.uuid;let L=u[B];L===void 0&&(L={},u[B]=L);let te=L[j];te===void 0&&(te=y.clone(),L[j]=te,A.addEventListener("dispose",T)),y=te}if(y.visible=A.visible,y.wireframe=A.wireframe,G===Wn?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:f[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,O.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const B=t.properties.get(y);B.light=O}return y}function S(R,A,O,G,y){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===Wn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,R.matrixWorld);const j=e.update(R),L=R.material;if(Array.isArray(L)){const te=j.groups;for(let N=0,W=te.length;N<W;N++){const H=te[N],re=L[H.materialIndex];if(re&&re.visible){const he=g(R,re,G,y);R.onBeforeShadow(t,R,A,O,j,he,H),t.renderBufferDirect(O,null,j,he,R,H),R.onAfterShadow(t,R,A,O,j,he,H)}}}else if(L.visible){const te=g(R,L,G,y);R.onBeforeShadow(t,R,A,O,j,te,null),t.renderBufferDirect(O,null,j,te,R,null),R.onAfterShadow(t,R,A,O,j,te,null)}}const B=R.children;for(let j=0,L=B.length;j<L;j++)S(B[j],A,O,G,y)}function T(R){R.target.removeEventListener("dispose",T);for(const O in u){const G=u[O],y=R.target.uuid;y in G&&(G[y].dispose(),delete G[y])}}}function Xw(t,e,n){const i=n.isWebGL2;function r(){let U=!1;const Me=new Ct;let J=null;const _e=new Ct(0,0,0,0);return{setMask:function(Te){J!==Te&&!U&&(t.colorMask(Te,Te,Te,Te),J=Te)},setLocked:function(Te){U=Te},setClear:function(Te,Xe,tt,bt,nn){nn===!0&&(Te*=bt,Xe*=bt,tt*=bt),Me.set(Te,Xe,tt,bt),_e.equals(Me)===!1&&(t.clearColor(Te,Xe,tt,bt),_e.copy(Me))},reset:function(){U=!1,J=null,_e.set(-1,0,0,0)}}}function s(){let U=!1,Me=null,J=null,_e=null;return{setTest:function(Te){Te?se(t.DEPTH_TEST):me(t.DEPTH_TEST)},setMask:function(Te){Me!==Te&&!U&&(t.depthMask(Te),Me=Te)},setFunc:function(Te){if(J!==Te){switch(Te){case lE:t.depthFunc(t.NEVER);break;case cE:t.depthFunc(t.ALWAYS);break;case uE:t.depthFunc(t.LESS);break;case na:t.depthFunc(t.LEQUAL);break;case fE:t.depthFunc(t.EQUAL);break;case hE:t.depthFunc(t.GEQUAL);break;case dE:t.depthFunc(t.GREATER);break;case pE:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}J=Te}},setLocked:function(Te){U=Te},setClear:function(Te){_e!==Te&&(t.clearDepth(Te),_e=Te)},reset:function(){U=!1,Me=null,J=null,_e=null}}}function a(){let U=!1,Me=null,J=null,_e=null,Te=null,Xe=null,tt=null,bt=null,nn=null;return{setTest:function(nt){U||(nt?se(t.STENCIL_TEST):me(t.STENCIL_TEST))},setMask:function(nt){Me!==nt&&!U&&(t.stencilMask(nt),Me=nt)},setFunc:function(nt,Ut,An){(J!==nt||_e!==Ut||Te!==An)&&(t.stencilFunc(nt,Ut,An),J=nt,_e=Ut,Te=An)},setOp:function(nt,Ut,An){(Xe!==nt||tt!==Ut||bt!==An)&&(t.stencilOp(nt,Ut,An),Xe=nt,tt=Ut,bt=An)},setLocked:function(nt){U=nt},setClear:function(nt){nn!==nt&&(t.clearStencil(nt),nn=nt)},reset:function(){U=!1,Me=null,J=null,_e=null,Te=null,Xe=null,tt=null,bt=null,nn=null}}}const o=new r,l=new s,u=new a,c=new WeakMap,f=new WeakMap;let h={},d={},_=new WeakMap,v=[],m=null,p=!1,E=null,g=null,S=null,T=null,R=null,A=null,O=null,G=new Ze(0,0,0),y=0,C=!1,B=null,j=null,L=null,te=null,N=null;const W=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,re=0;const he=t.getParameter(t.VERSION);he.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(he)[1]),H=re>=1):he.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(he)[1]),H=re>=2);let de=null,ye={};const Ue=t.getParameter(t.SCISSOR_BOX),ne=t.getParameter(t.VIEWPORT),ue=new Ct().fromArray(Ue),xe=new Ct().fromArray(ne);function V(U,Me,J,_e){const Te=new Uint8Array(4),Xe=t.createTexture();t.bindTexture(U,Xe),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let tt=0;tt<J;tt++)i&&(U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY)?t.texImage3D(Me,0,t.RGBA,1,1,_e,0,t.RGBA,t.UNSIGNED_BYTE,Te):t.texImage2D(Me+tt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Te);return Xe}const oe={};oe[t.TEXTURE_2D]=V(t.TEXTURE_2D,t.TEXTURE_2D,1),oe[t.TEXTURE_CUBE_MAP]=V(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(oe[t.TEXTURE_2D_ARRAY]=V(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),oe[t.TEXTURE_3D]=V(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),u.setClear(0),se(t.DEPTH_TEST),l.setFunc(na),ee(!1),ae(If),se(t.CULL_FACE),q(bi);function se(U){h[U]!==!0&&(t.enable(U),h[U]=!0)}function me(U){h[U]!==!1&&(t.disable(U),h[U]=!1)}function ge(U,Me){return d[U]!==Me?(t.bindFramebuffer(U,Me),d[U]=Me,i&&(U===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=Me),U===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=Me)),!0):!1}function I(U,Me){let J=v,_e=!1;if(U){J=_.get(Me),J===void 0&&(J=[],_.set(Me,J));const Te=U.textures;if(J.length!==Te.length||J[0]!==t.COLOR_ATTACHMENT0){for(let Xe=0,tt=Te.length;Xe<tt;Xe++)J[Xe]=t.COLOR_ATTACHMENT0+Xe;J.length=Te.length,_e=!0}}else J[0]!==t.BACK&&(J[0]=t.BACK,_e=!0);if(_e)if(n.isWebGL2)t.drawBuffers(J);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(J);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function w(U){return m!==U?(t.useProgram(U),m=U,!0):!1}const P={[Yi]:t.FUNC_ADD,[jS]:t.FUNC_SUBTRACT,[$S]:t.FUNC_REVERSE_SUBTRACT};if(i)P[Ff]=t.MIN,P[Bf]=t.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(P[Ff]=U.MIN_EXT,P[Bf]=U.MAX_EXT)}const D={[YS]:t.ZERO,[KS]:t.ONE,[ZS]:t.SRC_COLOR,[pc]:t.SRC_ALPHA,[iE]:t.SRC_ALPHA_SATURATE,[tE]:t.DST_COLOR,[QS]:t.DST_ALPHA,[JS]:t.ONE_MINUS_SRC_COLOR,[mc]:t.ONE_MINUS_SRC_ALPHA,[nE]:t.ONE_MINUS_DST_COLOR,[eE]:t.ONE_MINUS_DST_ALPHA,[rE]:t.CONSTANT_COLOR,[sE]:t.ONE_MINUS_CONSTANT_COLOR,[oE]:t.CONSTANT_ALPHA,[aE]:t.ONE_MINUS_CONSTANT_ALPHA};function q(U,Me,J,_e,Te,Xe,tt,bt,nn,nt){if(U===bi){p===!0&&(me(t.BLEND),p=!1);return}if(p===!1&&(se(t.BLEND),p=!0),U!==qS){if(U!==E||nt!==C){if((g!==Yi||R!==Yi)&&(t.blendEquation(t.FUNC_ADD),g=Yi,R=Yi),nt)switch(U){case Wr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Uf:t.blendFunc(t.ONE,t.ONE);break;case Nf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Of:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Wr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Uf:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Nf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Of:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}S=null,T=null,A=null,O=null,G.set(0,0,0),y=0,E=U,C=nt}return}Te=Te||Me,Xe=Xe||J,tt=tt||_e,(Me!==g||Te!==R)&&(t.blendEquationSeparate(P[Me],P[Te]),g=Me,R=Te),(J!==S||_e!==T||Xe!==A||tt!==O)&&(t.blendFuncSeparate(D[J],D[_e],D[Xe],D[tt]),S=J,T=_e,A=Xe,O=tt),(bt.equals(G)===!1||nn!==y)&&(t.blendColor(bt.r,bt.g,bt.b,nn),G.copy(bt),y=nn),E=U,C=!1}function X(U,Me){U.side===Kn?me(t.CULL_FACE):se(t.CULL_FACE);let J=U.side===jt;Me&&(J=!J),ee(J),U.blending===Wr&&U.transparent===!1?q(bi):q(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),o.setMask(U.colorWrite);const _e=U.stencilWrite;u.setTest(_e),_e&&(u.setMask(U.stencilWriteMask),u.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),u.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),M(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?se(t.SAMPLE_ALPHA_TO_COVERAGE):me(t.SAMPLE_ALPHA_TO_COVERAGE)}function ee(U){B!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),B=U)}function ae(U){U!==VS?(se(t.CULL_FACE),U!==j&&(U===If?t.cullFace(t.BACK):U===WS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):me(t.CULL_FACE),j=U}function ce(U){U!==L&&(H&&t.lineWidth(U),L=U)}function M(U,Me,J){U?(se(t.POLYGON_OFFSET_FILL),(te!==Me||N!==J)&&(t.polygonOffset(Me,J),te=Me,N=J)):me(t.POLYGON_OFFSET_FILL)}function x(U){U?se(t.SCISSOR_TEST):me(t.SCISSOR_TEST)}function k(U){U===void 0&&(U=t.TEXTURE0+W-1),de!==U&&(t.activeTexture(U),de=U)}function F(U,Me,J){J===void 0&&(de===null?J=t.TEXTURE0+W-1:J=de);let _e=ye[J];_e===void 0&&(_e={type:void 0,texture:void 0},ye[J]=_e),(_e.type!==U||_e.texture!==Me)&&(de!==J&&(t.activeTexture(J),de=J),t.bindTexture(U,Me||oe[U]),_e.type=U,_e.texture=Me)}function $(){const U=ye[de];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function K(){try{t.compressedTexImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Se(){try{t.compressedTexImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ee(){try{t.texSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function le(){try{t.texSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Re(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(){try{t.texStorage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function qe(){try{t.texStorage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Fe(){try{t.texImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pe(){try{t.texImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function be(U){ue.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),ue.copy(U))}function we(U){xe.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),xe.copy(U))}function We(U,Me){let J=f.get(Me);J===void 0&&(J=new WeakMap,f.set(Me,J));let _e=J.get(U);_e===void 0&&(_e=t.getUniformBlockIndex(Me,U.name),J.set(U,_e))}function Oe(U,Me){const _e=f.get(Me).get(U);c.get(Me)!==_e&&(t.uniformBlockBinding(Me,_e,U.__bindingPointIndex),c.set(Me,_e))}function st(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},de=null,ye={},d={},_=new WeakMap,v=[],m=null,p=!1,E=null,g=null,S=null,T=null,R=null,A=null,O=null,G=new Ze(0,0,0),y=0,C=!1,B=null,j=null,L=null,te=null,N=null,ue.set(0,0,t.canvas.width,t.canvas.height),xe.set(0,0,t.canvas.width,t.canvas.height),o.reset(),l.reset(),u.reset()}return{buffers:{color:o,depth:l,stencil:u},enable:se,disable:me,bindFramebuffer:ge,drawBuffers:I,useProgram:w,setBlending:q,setMaterial:X,setFlipSided:ee,setCullFace:ae,setLineWidth:ce,setPolygonOffset:M,setScissorTest:x,activeTexture:k,bindTexture:F,unbindTexture:$,compressedTexImage2D:K,compressedTexImage3D:Se,texImage2D:Fe,texImage3D:Pe,updateUBOMapping:We,uniformBlockBinding:Oe,texStorage2D:fe,texStorage3D:qe,texSubImage2D:Ee,texSubImage3D:le,compressedTexSubImage2D:pe,compressedTexSubImage3D:Re,scissor:be,viewport:we,reset:st}}function qw(t,e,n,i,r,s,a){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $e,f=new WeakMap;let h;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(M,x){return _?new OffscreenCanvas(M,x):aa("canvas")}function m(M,x,k,F){let $=1;const K=ce(M);if((K.width>F||K.height>F)&&($=F/Math.max(K.width,K.height)),$<1||x===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const Se=x?Ec:Math.floor,Ee=Se($*K.width),le=Se($*K.height);h===void 0&&(h=v(Ee,le));const pe=k?v(Ee,le):h;return pe.width=Ee,pe.height=le,pe.getContext("2d").drawImage(M,0,0,Ee,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+Ee+"x"+le+")."),pe}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),M;return M}function p(M){const x=ce(M);return ph(x.width)&&ph(x.height)}function E(M){return o?!1:M.wrapS!==xn||M.wrapT!==xn||M.minFilter!==Bt&&M.minFilter!==Vt}function g(M,x){return M.generateMipmaps&&x&&M.minFilter!==Bt&&M.minFilter!==Vt}function S(M){t.generateMipmap(M)}function T(M,x,k,F,$=!1){if(o===!1)return x;if(M!==null){if(t[M]!==void 0)return t[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let K=x;if(x===t.RED&&(k===t.FLOAT&&(K=t.R32F),k===t.HALF_FLOAT&&(K=t.R16F),k===t.UNSIGNED_BYTE&&(K=t.R8)),x===t.RED_INTEGER&&(k===t.UNSIGNED_BYTE&&(K=t.R8UI),k===t.UNSIGNED_SHORT&&(K=t.R16UI),k===t.UNSIGNED_INT&&(K=t.R32UI),k===t.BYTE&&(K=t.R8I),k===t.SHORT&&(K=t.R16I),k===t.INT&&(K=t.R32I)),x===t.RG&&(k===t.FLOAT&&(K=t.RG32F),k===t.HALF_FLOAT&&(K=t.RG16F),k===t.UNSIGNED_BYTE&&(K=t.RG8)),x===t.RG_INTEGER&&(k===t.UNSIGNED_BYTE&&(K=t.RG8UI),k===t.UNSIGNED_SHORT&&(K=t.RG16UI),k===t.UNSIGNED_INT&&(K=t.RG32UI),k===t.BYTE&&(K=t.RG8I),k===t.SHORT&&(K=t.RG16I),k===t.INT&&(K=t.RG32I)),x===t.RGBA){const Se=$?ia:Qe.getTransfer(F);k===t.FLOAT&&(K=t.RGBA32F),k===t.HALF_FLOAT&&(K=t.RGBA16F),k===t.UNSIGNED_BYTE&&(K=Se===rt?t.SRGB8_ALPHA8:t.RGBA8),k===t.UNSIGNED_SHORT_4_4_4_4&&(K=t.RGBA4),k===t.UNSIGNED_SHORT_5_5_5_1&&(K=t.RGB5_A1)}return(K===t.R16F||K===t.R32F||K===t.RG16F||K===t.RG32F||K===t.RGBA16F||K===t.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function R(M,x,k){return g(M,k)===!0||M.isFramebufferTexture&&M.minFilter!==Bt&&M.minFilter!==Vt?Math.log2(Math.max(x.width,x.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?x.mipmaps.length:1}function A(M){return M===Bt||M===Hf||M===hs?t.NEAREST:t.LINEAR}function O(M){const x=M.target;x.removeEventListener("dispose",O),y(x),x.isVideoTexture&&f.delete(x)}function G(M){const x=M.target;x.removeEventListener("dispose",G),B(x)}function y(M){const x=i.get(M);if(x.__webglInit===void 0)return;const k=M.source,F=d.get(k);if(F){const $=F[x.__cacheKey];$.usedTimes--,$.usedTimes===0&&C(M),Object.keys(F).length===0&&d.delete(k)}i.remove(M)}function C(M){const x=i.get(M);t.deleteTexture(x.__webglTexture);const k=M.source,F=d.get(k);delete F[x.__cacheKey],a.memory.textures--}function B(M){const x=i.get(M);if(M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(x.__webglFramebuffer[F]))for(let $=0;$<x.__webglFramebuffer[F].length;$++)t.deleteFramebuffer(x.__webglFramebuffer[F][$]);else t.deleteFramebuffer(x.__webglFramebuffer[F]);x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer[F])}else{if(Array.isArray(x.__webglFramebuffer))for(let F=0;F<x.__webglFramebuffer.length;F++)t.deleteFramebuffer(x.__webglFramebuffer[F]);else t.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&t.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let F=0;F<x.__webglColorRenderbuffer.length;F++)x.__webglColorRenderbuffer[F]&&t.deleteRenderbuffer(x.__webglColorRenderbuffer[F]);x.__webglDepthRenderbuffer&&t.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const k=M.textures;for(let F=0,$=k.length;F<$;F++){const K=i.get(k[F]);K.__webglTexture&&(t.deleteTexture(K.__webglTexture),a.memory.textures--),i.remove(k[F])}i.remove(M)}let j=0;function L(){j=0}function te(){const M=j;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),j+=1,M}function N(M){const x=[];return x.push(M.wrapS),x.push(M.wrapT),x.push(M.wrapR||0),x.push(M.magFilter),x.push(M.minFilter),x.push(M.anisotropy),x.push(M.internalFormat),x.push(M.format),x.push(M.type),x.push(M.generateMipmaps),x.push(M.premultiplyAlpha),x.push(M.flipY),x.push(M.unpackAlignment),x.push(M.colorSpace),x.join()}function W(M,x){const k=i.get(M);if(M.isVideoTexture&&ee(M),M.isRenderTargetTexture===!1&&M.version>0&&k.__version!==M.version){const F=M.image;if(F===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(F.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(k,M,x);return}}n.bindTexture(t.TEXTURE_2D,k.__webglTexture,t.TEXTURE0+x)}function H(M,x){const k=i.get(M);if(M.version>0&&k.__version!==M.version){xe(k,M,x);return}n.bindTexture(t.TEXTURE_2D_ARRAY,k.__webglTexture,t.TEXTURE0+x)}function re(M,x){const k=i.get(M);if(M.version>0&&k.__version!==M.version){xe(k,M,x);return}n.bindTexture(t.TEXTURE_3D,k.__webglTexture,t.TEXTURE0+x)}function he(M,x){const k=i.get(M);if(M.version>0&&k.__version!==M.version){V(k,M,x);return}n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture,t.TEXTURE0+x)}const de={[vc]:t.REPEAT,[xn]:t.CLAMP_TO_EDGE,[xc]:t.MIRRORED_REPEAT},ye={[Bt]:t.NEAREST,[Hf]:t.NEAREST_MIPMAP_NEAREST,[hs]:t.NEAREST_MIPMAP_LINEAR,[Vt]:t.LINEAR,[sl]:t.LINEAR_MIPMAP_NEAREST,[Ji]:t.LINEAR_MIPMAP_LINEAR},Ue={[OE]:t.NEVER,[zE]:t.ALWAYS,[FE]:t.LESS,[Lm]:t.LEQUAL,[BE]:t.EQUAL,[GE]:t.GEQUAL,[HE]:t.GREATER,[kE]:t.NOTEQUAL};function ne(M,x,k){if(x.type===Zn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Vt||x.magFilter===sl||x.magFilter===hs||x.magFilter===Ji||x.minFilter===Vt||x.minFilter===sl||x.minFilter===hs||x.minFilter===Ji)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),k?(t.texParameteri(M,t.TEXTURE_WRAP_S,de[x.wrapS]),t.texParameteri(M,t.TEXTURE_WRAP_T,de[x.wrapT]),(M===t.TEXTURE_3D||M===t.TEXTURE_2D_ARRAY)&&t.texParameteri(M,t.TEXTURE_WRAP_R,de[x.wrapR]),t.texParameteri(M,t.TEXTURE_MAG_FILTER,ye[x.magFilter]),t.texParameteri(M,t.TEXTURE_MIN_FILTER,ye[x.minFilter])):(t.texParameteri(M,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(M,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(M===t.TEXTURE_3D||M===t.TEXTURE_2D_ARRAY)&&t.texParameteri(M,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(x.wrapS!==xn||x.wrapT!==xn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(M,t.TEXTURE_MAG_FILTER,A(x.magFilter)),t.texParameteri(M,t.TEXTURE_MIN_FILTER,A(x.minFilter)),x.minFilter!==Bt&&x.minFilter!==Vt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(t.texParameteri(M,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(M,t.TEXTURE_COMPARE_FUNC,Ue[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Bt||x.minFilter!==hs&&x.minFilter!==Ji||x.type===Zn&&e.has("OES_texture_float_linear")===!1||o===!1&&x.type===Os&&e.has("OES_texture_half_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");t.texParameterf(M,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function ue(M,x){let k=!1;M.__webglInit===void 0&&(M.__webglInit=!0,x.addEventListener("dispose",O));const F=x.source;let $=d.get(F);$===void 0&&($={},d.set(F,$));const K=N(x);if(K!==M.__cacheKey){$[K]===void 0&&($[K]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,k=!0),$[K].usedTimes++;const Se=$[M.__cacheKey];Se!==void 0&&($[M.__cacheKey].usedTimes--,Se.usedTimes===0&&C(x)),M.__cacheKey=K,M.__webglTexture=$[K].texture}return k}function xe(M,x,k){let F=t.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(F=t.TEXTURE_2D_ARRAY),x.isData3DTexture&&(F=t.TEXTURE_3D);const $=ue(M,x),K=x.source;n.bindTexture(F,M.__webglTexture,t.TEXTURE0+k);const Se=i.get(K);if(K.version!==Se.__version||$===!0){n.activeTexture(t.TEXTURE0+k);const Ee=Qe.getPrimaries(Qe.workingColorSpace),le=x.colorSpace===Si?null:Qe.getPrimaries(x.colorSpace),pe=x.colorSpace===Si||Ee===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Re=E(x)&&p(x.image)===!1;let fe=m(x.image,Re,!1,r.maxTextureSize);fe=ae(x,fe);const qe=p(fe)||o,Fe=s.convert(x.format,x.colorSpace);let Pe=s.convert(x.type),be=T(x.internalFormat,Fe,Pe,x.colorSpace,x.isVideoTexture);ne(F,x,qe);let we;const We=x.mipmaps,Oe=o&&x.isVideoTexture!==!0&&be!==Pm,st=Se.__version===void 0||$===!0,U=K.dataReady,Me=R(x,fe,qe);if(x.isDepthTexture)be=t.DEPTH_COMPONENT,o?x.type===Zn?be=t.DEPTH_COMPONENT32F:x.type===Ei?be=t.DEPTH_COMPONENT24:x.type===ir?be=t.DEPTH24_STENCIL8:be=t.DEPTH_COMPONENT16:x.type===Zn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===rr&&be===t.DEPTH_COMPONENT&&x.type!==tu&&x.type!==Ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Ei,Pe=s.convert(x.type)),x.format===es&&be===t.DEPTH_COMPONENT&&(be=t.DEPTH_STENCIL,x.type!==ir&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=ir,Pe=s.convert(x.type))),st&&(Oe?n.texStorage2D(t.TEXTURE_2D,1,be,fe.width,fe.height):n.texImage2D(t.TEXTURE_2D,0,be,fe.width,fe.height,0,Fe,Pe,null));else if(x.isDataTexture)if(We.length>0&&qe){Oe&&st&&n.texStorage2D(t.TEXTURE_2D,Me,be,We[0].width,We[0].height);for(let J=0,_e=We.length;J<_e;J++)we=We[J],Oe?U&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,we.width,we.height,Fe,Pe,we.data):n.texImage2D(t.TEXTURE_2D,J,be,we.width,we.height,0,Fe,Pe,we.data);x.generateMipmaps=!1}else Oe?(st&&n.texStorage2D(t.TEXTURE_2D,Me,be,fe.width,fe.height),U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,fe.width,fe.height,Fe,Pe,fe.data)):n.texImage2D(t.TEXTURE_2D,0,be,fe.width,fe.height,0,Fe,Pe,fe.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Oe&&st&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Me,be,We[0].width,We[0].height,fe.depth);for(let J=0,_e=We.length;J<_e;J++)we=We[J],x.format!==yn?Fe!==null?Oe?U&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,we.width,we.height,fe.depth,Fe,we.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,J,be,we.width,we.height,fe.depth,0,we.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,we.width,we.height,fe.depth,Fe,Pe,we.data):n.texImage3D(t.TEXTURE_2D_ARRAY,J,be,we.width,we.height,fe.depth,0,Fe,Pe,we.data)}else{Oe&&st&&n.texStorage2D(t.TEXTURE_2D,Me,be,We[0].width,We[0].height);for(let J=0,_e=We.length;J<_e;J++)we=We[J],x.format!==yn?Fe!==null?Oe?U&&n.compressedTexSubImage2D(t.TEXTURE_2D,J,0,0,we.width,we.height,Fe,we.data):n.compressedTexImage2D(t.TEXTURE_2D,J,be,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?U&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,we.width,we.height,Fe,Pe,we.data):n.texImage2D(t.TEXTURE_2D,J,be,we.width,we.height,0,Fe,Pe,we.data)}else if(x.isDataArrayTexture)Oe?(st&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Me,be,fe.width,fe.height,fe.depth),U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Fe,Pe,fe.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,be,fe.width,fe.height,fe.depth,0,Fe,Pe,fe.data);else if(x.isData3DTexture)Oe?(st&&n.texStorage3D(t.TEXTURE_3D,Me,be,fe.width,fe.height,fe.depth),U&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Fe,Pe,fe.data)):n.texImage3D(t.TEXTURE_3D,0,be,fe.width,fe.height,fe.depth,0,Fe,Pe,fe.data);else if(x.isFramebufferTexture){if(st)if(Oe)n.texStorage2D(t.TEXTURE_2D,Me,be,fe.width,fe.height);else{let J=fe.width,_e=fe.height;for(let Te=0;Te<Me;Te++)n.texImage2D(t.TEXTURE_2D,Te,be,J,_e,0,Fe,Pe,null),J>>=1,_e>>=1}}else if(We.length>0&&qe){if(Oe&&st){const J=ce(We[0]);n.texStorage2D(t.TEXTURE_2D,Me,be,J.width,J.height)}for(let J=0,_e=We.length;J<_e;J++)we=We[J],Oe?U&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,Fe,Pe,we):n.texImage2D(t.TEXTURE_2D,J,be,Fe,Pe,we);x.generateMipmaps=!1}else if(Oe){if(st){const J=ce(fe);n.texStorage2D(t.TEXTURE_2D,Me,be,J.width,J.height)}U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Fe,Pe,fe)}else n.texImage2D(t.TEXTURE_2D,0,be,Fe,Pe,fe);g(x,qe)&&S(F),Se.__version=K.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function V(M,x,k){if(x.image.length!==6)return;const F=ue(M,x),$=x.source;n.bindTexture(t.TEXTURE_CUBE_MAP,M.__webglTexture,t.TEXTURE0+k);const K=i.get($);if($.version!==K.__version||F===!0){n.activeTexture(t.TEXTURE0+k);const Se=Qe.getPrimaries(Qe.workingColorSpace),Ee=x.colorSpace===Si?null:Qe.getPrimaries(x.colorSpace),le=x.colorSpace===Si||Se===Ee?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const pe=x.isCompressedTexture||x.image[0].isCompressedTexture,Re=x.image[0]&&x.image[0].isDataTexture,fe=[];for(let J=0;J<6;J++)!pe&&!Re?fe[J]=m(x.image[J],!1,!0,r.maxCubemapSize):fe[J]=Re?x.image[J].image:x.image[J],fe[J]=ae(x,fe[J]);const qe=fe[0],Fe=p(qe)||o,Pe=s.convert(x.format,x.colorSpace),be=s.convert(x.type),we=T(x.internalFormat,Pe,be,x.colorSpace),We=o&&x.isVideoTexture!==!0,Oe=K.__version===void 0||F===!0,st=$.dataReady;let U=R(x,qe,Fe);ne(t.TEXTURE_CUBE_MAP,x,Fe);let Me;if(pe){We&&Oe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,U,we,qe.width,qe.height);for(let J=0;J<6;J++){Me=fe[J].mipmaps;for(let _e=0;_e<Me.length;_e++){const Te=Me[_e];x.format!==yn?Pe!==null?We?st&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e,0,0,Te.width,Te.height,Pe,Te.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e,we,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?st&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e,0,0,Te.width,Te.height,Pe,be,Te.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e,we,Te.width,Te.height,0,Pe,be,Te.data)}}}else{if(Me=x.mipmaps,We&&Oe){Me.length>0&&U++;const J=ce(fe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,U,we,J.width,J.height)}for(let J=0;J<6;J++)if(Re){We?st&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,fe[J].width,fe[J].height,Pe,be,fe[J].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,we,fe[J].width,fe[J].height,0,Pe,be,fe[J].data);for(let _e=0;_e<Me.length;_e++){const Xe=Me[_e].image[J].image;We?st&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e+1,0,0,Xe.width,Xe.height,Pe,be,Xe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e+1,we,Xe.width,Xe.height,0,Pe,be,Xe.data)}}else{We?st&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Pe,be,fe[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,we,Pe,be,fe[J]);for(let _e=0;_e<Me.length;_e++){const Te=Me[_e];We?st&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e+1,0,0,Pe,be,Te.image[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,_e+1,we,Pe,be,Te.image[J])}}}g(x,Fe)&&S(t.TEXTURE_CUBE_MAP),K.__version=$.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function oe(M,x,k,F,$,K){const Se=s.convert(k.format,k.colorSpace),Ee=s.convert(k.type),le=T(k.internalFormat,Se,Ee,k.colorSpace);if(!i.get(x).__hasExternalTextures){const Re=Math.max(1,x.width>>K),fe=Math.max(1,x.height>>K);$===t.TEXTURE_3D||$===t.TEXTURE_2D_ARRAY?n.texImage3D($,K,le,Re,fe,x.depth,0,Se,Ee,null):n.texImage2D($,K,le,Re,fe,0,Se,Ee,null)}n.bindFramebuffer(t.FRAMEBUFFER,M),X(x)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,F,$,i.get(k).__webglTexture,0,q(x)):($===t.TEXTURE_2D||$>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,F,$,i.get(k).__webglTexture,K),n.bindFramebuffer(t.FRAMEBUFFER,null)}function se(M,x,k){if(t.bindRenderbuffer(t.RENDERBUFFER,M),x.depthBuffer&&!x.stencilBuffer){let F=o===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(k||X(x)){const $=x.depthTexture;$&&$.isDepthTexture&&($.type===Zn?F=t.DEPTH_COMPONENT32F:$.type===Ei&&(F=t.DEPTH_COMPONENT24));const K=q(x);X(x)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,K,F,x.width,x.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,K,F,x.width,x.height)}else t.renderbufferStorage(t.RENDERBUFFER,F,x.width,x.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,M)}else if(x.depthBuffer&&x.stencilBuffer){const F=q(x);k&&X(x)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,F,t.DEPTH24_STENCIL8,x.width,x.height):X(x)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,F,t.DEPTH24_STENCIL8,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,x.width,x.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,M)}else{const F=x.textures;for(let $=0;$<F.length;$++){const K=F[$],Se=s.convert(K.format,K.colorSpace),Ee=s.convert(K.type),le=T(K.internalFormat,Se,Ee,K.colorSpace),pe=q(x);k&&X(x)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,pe,le,x.width,x.height):X(x)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,pe,le,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,le,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function me(M,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,M),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),W(x.depthTexture,0);const F=i.get(x.depthTexture).__webglTexture,$=q(x);if(x.depthTexture.format===rr)X(x)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,F,0,$):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,F,0);else if(x.depthTexture.format===es)X(x)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,F,0,$):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,F,0);else throw new Error("Unknown depthTexture format")}function ge(M){const x=i.get(M),k=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!x.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");me(x.__webglFramebuffer,M)}else if(k){x.__webglDepthbuffer=[];for(let F=0;F<6;F++)n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[F]),x.__webglDepthbuffer[F]=t.createRenderbuffer(),se(x.__webglDepthbuffer[F],M,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=t.createRenderbuffer(),se(x.__webglDepthbuffer,M,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function I(M,x,k){const F=i.get(M);x!==void 0&&oe(F.__webglFramebuffer,M,M.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),k!==void 0&&ge(M)}function w(M){const x=M.texture,k=i.get(M),F=i.get(x);M.addEventListener("dispose",G);const $=M.textures,K=M.isWebGLCubeRenderTarget===!0,Se=$.length>1,Ee=p(M)||o;if(Se||(F.__webglTexture===void 0&&(F.__webglTexture=t.createTexture()),F.__version=x.version,a.memory.textures++),K){k.__webglFramebuffer=[];for(let le=0;le<6;le++)if(o&&x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer[le]=[];for(let pe=0;pe<x.mipmaps.length;pe++)k.__webglFramebuffer[le][pe]=t.createFramebuffer()}else k.__webglFramebuffer[le]=t.createFramebuffer()}else{if(o&&x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer=[];for(let le=0;le<x.mipmaps.length;le++)k.__webglFramebuffer[le]=t.createFramebuffer()}else k.__webglFramebuffer=t.createFramebuffer();if(Se)if(r.drawBuffers)for(let le=0,pe=$.length;le<pe;le++){const Re=i.get($[le]);Re.__webglTexture===void 0&&(Re.__webglTexture=t.createTexture(),a.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&M.samples>0&&X(M)===!1){k.__webglMultisampledFramebuffer=t.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let le=0;le<$.length;le++){const pe=$[le];k.__webglColorRenderbuffer[le]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,k.__webglColorRenderbuffer[le]);const Re=s.convert(pe.format,pe.colorSpace),fe=s.convert(pe.type),qe=T(pe.internalFormat,Re,fe,pe.colorSpace,M.isXRRenderTarget===!0),Fe=q(M);t.renderbufferStorageMultisample(t.RENDERBUFFER,Fe,qe,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,k.__webglColorRenderbuffer[le])}t.bindRenderbuffer(t.RENDERBUFFER,null),M.depthBuffer&&(k.__webglDepthRenderbuffer=t.createRenderbuffer(),se(k.__webglDepthRenderbuffer,M,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(K){n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture),ne(t.TEXTURE_CUBE_MAP,x,Ee);for(let le=0;le<6;le++)if(o&&x.mipmaps&&x.mipmaps.length>0)for(let pe=0;pe<x.mipmaps.length;pe++)oe(k.__webglFramebuffer[le][pe],M,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,pe);else oe(k.__webglFramebuffer[le],M,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);g(x,Ee)&&S(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Se){for(let le=0,pe=$.length;le<pe;le++){const Re=$[le],fe=i.get(Re);n.bindTexture(t.TEXTURE_2D,fe.__webglTexture),ne(t.TEXTURE_2D,Re,Ee),oe(k.__webglFramebuffer,M,Re,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,0),g(Re,Ee)&&S(t.TEXTURE_2D)}n.unbindTexture()}else{let le=t.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(o?le=M.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(le,F.__webglTexture),ne(le,x,Ee),o&&x.mipmaps&&x.mipmaps.length>0)for(let pe=0;pe<x.mipmaps.length;pe++)oe(k.__webglFramebuffer[pe],M,x,t.COLOR_ATTACHMENT0,le,pe);else oe(k.__webglFramebuffer,M,x,t.COLOR_ATTACHMENT0,le,0);g(x,Ee)&&S(le),n.unbindTexture()}M.depthBuffer&&ge(M)}function P(M){const x=p(M)||o,k=M.textures;for(let F=0,$=k.length;F<$;F++){const K=k[F];if(g(K,x)){const Se=M.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Ee=i.get(K).__webglTexture;n.bindTexture(Se,Ee),S(Se),n.unbindTexture()}}}function D(M){if(o&&M.samples>0&&X(M)===!1){const x=M.textures,k=M.width,F=M.height;let $=t.COLOR_BUFFER_BIT;const K=[],Se=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ee=i.get(M),le=x.length>1;if(le)for(let pe=0;pe<x.length;pe++)n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let pe=0;pe<x.length;pe++){K.push(t.COLOR_ATTACHMENT0+pe),M.depthBuffer&&K.push(Se);const Re=Ee.__ignoreDepthValues!==void 0?Ee.__ignoreDepthValues:!1;if(Re===!1&&(M.depthBuffer&&($|=t.DEPTH_BUFFER_BIT),M.stencilBuffer&&($|=t.STENCIL_BUFFER_BIT)),le&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[pe]),Re===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Se]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Se])),le){const fe=i.get(x[pe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,fe,0)}t.blitFramebuffer(0,0,k,F,0,0,k,F,$,t.NEAREST),u&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,K)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),le)for(let pe=0;pe<x.length;pe++){n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[pe]);const Re=i.get(x[pe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,Re,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}}function q(M){return Math.min(r.maxSamples,M.samples)}function X(M){const x=i.get(M);return o&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ee(M){const x=a.render.frame;f.get(M)!==x&&(f.set(M,x),M.update())}function ae(M,x){const k=M.colorSpace,F=M.format,$=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===yc||k!==Li&&k!==Si&&(Qe.getTransfer(k)===rt?o===!1?e.has("EXT_sRGB")===!0&&F===yn?(M.format=yc,M.minFilter=Vt,M.generateMipmaps=!1):x=Im.sRGBToLinear(x):(F!==yn||$!==wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),x}function ce(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=te,this.resetTextureUnits=L,this.setTexture2D=W,this.setTexture2DArray=H,this.setTexture3D=re,this.setTextureCube=he,this.rebindTextures=I,this.setupRenderTarget=w,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=D,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=X}function jw(t,e,n){const i=n.isWebGL2;function r(s,a=Si){let o;const l=Qe.getTransfer(a);if(s===wi)return t.UNSIGNED_BYTE;if(s===bm)return t.UNSIGNED_SHORT_4_4_4_4;if(s===Am)return t.UNSIGNED_SHORT_5_5_5_1;if(s===TE)return t.BYTE;if(s===bE)return t.SHORT;if(s===tu)return t.UNSIGNED_SHORT;if(s===Tm)return t.INT;if(s===Ei)return t.UNSIGNED_INT;if(s===Zn)return t.FLOAT;if(s===Os)return i?t.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===AE)return t.ALPHA;if(s===yn)return t.RGBA;if(s===wE)return t.LUMINANCE;if(s===RE)return t.LUMINANCE_ALPHA;if(s===rr)return t.DEPTH_COMPONENT;if(s===es)return t.DEPTH_STENCIL;if(s===yc)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===CE)return t.RED;if(s===wm)return t.RED_INTEGER;if(s===PE)return t.RG;if(s===Rm)return t.RG_INTEGER;if(s===Cm)return t.RGBA_INTEGER;if(s===ol||s===al||s===ll||s===cl)if(l===rt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===ol)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===al)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ll)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===cl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===ol)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===al)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ll)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===cl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===kf||s===Gf||s===zf||s===Vf)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===kf)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Gf)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===zf)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Vf)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Pm)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Wf||s===Xf)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Wf)return l===rt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Xf)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===qf||s===jf||s===$f||s===Yf||s===Kf||s===Zf||s===Jf||s===Qf||s===eh||s===th||s===nh||s===ih||s===rh||s===sh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===qf)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===jf)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===$f)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Yf)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Kf)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Zf)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Jf)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Qf)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===eh)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===th)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===nh)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ih)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===rh)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===sh)return l===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ul||s===oh||s===ah)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===ul)return l===rt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===oh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ah)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===LE||s===lh||s===ch||s===uh)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===ul)return o.COMPRESSED_RED_RGTC1_EXT;if(s===lh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ch)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===uh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ir?i?t.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class $w extends cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ys extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yw={type:"move"};class Fl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ys,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ys,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ys,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),p=this._getHandJoint(u,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),d=.02,_=.005;u.inputState.pinching&&h>d+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=d-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Yw)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ys;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Kw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zw=`
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

}`;class Jw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new $t,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new Ci({extensions:{fragDepth:!0},vertexShader:Kw,fragmentShader:Zw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ei(new La(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class Qw extends ss{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,c=null,f=null,h=null,d=null,_=null;const v=new Jw,m=n.getContextAttributes();let p=null,E=null;const g=[],S=[],T=new $e;let R=null;const A=new cn;A.layers.enable(1),A.viewport=new Ct;const O=new cn;O.layers.enable(2),O.viewport=new Ct;const G=[A,O],y=new $w;y.layers.enable(1),y.layers.enable(2);let C=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let ue=g[ne];return ue===void 0&&(ue=new Fl,g[ne]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(ne){let ue=g[ne];return ue===void 0&&(ue=new Fl,g[ne]=ue),ue.getGripSpace()},this.getHand=function(ne){let ue=g[ne];return ue===void 0&&(ue=new Fl,g[ne]=ue),ue.getHandSpace()};function j(ne){const ue=S.indexOf(ne.inputSource);if(ue===-1)return;const xe=g[ue];xe!==void 0&&(xe.update(ne.inputSource,ne.frame,u||a),xe.dispatchEvent({type:ne.type,data:ne.inputSource}))}function L(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",L),r.removeEventListener("inputsourceschange",te);for(let ne=0;ne<g.length;ne++){const ue=S[ne];ue!==null&&(S[ne]=null,g[ne].disconnect(ue))}C=null,B=null,v.reset(),e.setRenderTarget(p),d=null,h=null,f=null,r=null,E=null,Ue.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){s=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){o=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(ne){u=ne},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(ne){if(r=ne,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",L),r.addEventListener("inputsourceschange",te),m.xrCompatible!==!0&&await n.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(T),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ue={antialias:r.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,n,ue),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),E=new ar(d.framebufferWidth,d.framebufferHeight,{format:yn,type:wi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ue=null,xe=null,V=null;m.depth&&(V=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ue=m.stencil?es:rr,xe=m.stencil?ir:Ei);const oe={colorFormat:n.RGBA8,depthFormat:V,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(oe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),E=new ar(h.textureWidth,h.textureHeight,{format:yn,type:wi,depthTexture:new jm(h.textureWidth,h.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const se=e.properties.get(E);se.__ignoreDepthValues=h.ignoreDepthValues}E.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),Ue.setContext(r),Ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function te(ne){for(let ue=0;ue<ne.removed.length;ue++){const xe=ne.removed[ue],V=S.indexOf(xe);V>=0&&(S[V]=null,g[V].disconnect(xe))}for(let ue=0;ue<ne.added.length;ue++){const xe=ne.added[ue];let V=S.indexOf(xe);if(V===-1){for(let se=0;se<g.length;se++)if(se>=S.length){S.push(xe),V=se;break}else if(S[se]===null){S[se]=xe,V=se;break}if(V===-1)break}const oe=g[V];oe&&oe.connect(xe)}}const N=new Z,W=new Z;function H(ne,ue,xe){N.setFromMatrixPosition(ue.matrixWorld),W.setFromMatrixPosition(xe.matrixWorld);const V=N.distanceTo(W),oe=ue.projectionMatrix.elements,se=xe.projectionMatrix.elements,me=oe[14]/(oe[10]-1),ge=oe[14]/(oe[10]+1),I=(oe[9]+1)/oe[5],w=(oe[9]-1)/oe[5],P=(oe[8]-1)/oe[0],D=(se[8]+1)/se[0],q=me*P,X=me*D,ee=V/(-P+D),ae=ee*-P;ue.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(ae),ne.translateZ(ee),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert();const ce=me+ee,M=ge+ee,x=q-ae,k=X+(V-ae),F=I*ge/M*ce,$=w*ge/M*ce;ne.projectionMatrix.makePerspective(x,k,F,$,ce,M),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}function re(ne,ue){ue===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(ue.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(r===null)return;v.texture!==null&&(ne.near=v.depthNear,ne.far=v.depthFar),y.near=O.near=A.near=ne.near,y.far=O.far=A.far=ne.far,(C!==y.near||B!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),C=y.near,B=y.far,A.near=C,A.far=B,O.near=C,O.far=B,A.updateProjectionMatrix(),O.updateProjectionMatrix(),ne.updateProjectionMatrix());const ue=ne.parent,xe=y.cameras;re(y,ue);for(let V=0;V<xe.length;V++)re(xe[V],ue);xe.length===2?H(y,A,O):y.projectionMatrix.copy(A.projectionMatrix),he(ne,y,ue)};function he(ne,ue,xe){xe===null?ne.matrix.copy(ue.matrixWorld):(ne.matrix.copy(xe.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(ue.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(ue.projectionMatrix),ne.projectionMatrixInverse.copy(ue.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Sc*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(ne){l=ne,h!==null&&(h.fixedFoveation=ne),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ne)},this.hasDepthSensing=function(){return v.texture!==null};let de=null;function ye(ne,ue){if(c=ue.getViewerPose(u||a),_=ue,c!==null){const xe=c.views;d!==null&&(e.setRenderTargetFramebuffer(E,d.framebuffer),e.setRenderTarget(E));let V=!1;xe.length!==y.cameras.length&&(y.cameras.length=0,V=!0);for(let se=0;se<xe.length;se++){const me=xe[se];let ge=null;if(d!==null)ge=d.getViewport(me);else{const w=f.getViewSubImage(h,me);ge=w.viewport,se===0&&(e.setRenderTargetTextures(E,w.colorTexture,h.ignoreDepthValues?void 0:w.depthStencilTexture),e.setRenderTarget(E))}let I=G[se];I===void 0&&(I=new cn,I.layers.enable(se),I.viewport=new Ct,G[se]=I),I.matrix.fromArray(me.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(me.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(ge.x,ge.y,ge.width,ge.height),se===0&&(y.matrix.copy(I.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),V===!0&&y.cameras.push(I)}const oe=r.enabledFeatures;if(oe&&oe.includes("depth-sensing")){const se=f.getDepthInformation(xe[0]);se&&se.isValid&&se.texture&&v.init(e,se,r.renderState)}}for(let xe=0;xe<g.length;xe++){const V=S[xe],oe=g[xe];V!==null&&oe!==void 0&&oe.update(V,ue,u||a)}v.render(e,y),de&&de(ne,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),_=null}const Ue=new qm;Ue.setAnimationLoop(ye),this.setAnimationLoop=function(ne){de=ne},this.dispose=function(){}}}const Vi=new si,eR=new gt;function tR(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,zm(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,E,g,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),c(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,E,g):p.isSpriteMaterial?u(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===jt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===jt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=e.get(p),g=E.envMap,S=E.envMapRotation;if(g&&(m.envMap.value=g,Vi.copy(S),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),m.envMapRotation.value.setFromMatrix4(eR.makeRotationFromEuler(Vi)),m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const T=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*T,n(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,g){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=g*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===jt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const E=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function nR(t,e,n,i){let r={},s={},a=[];const o=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,g){const S=g.program;i.uniformBlockBinding(E,S)}function u(E,g){let S=r[E.id];S===void 0&&(_(E),S=c(E),r[E.id]=S,E.addEventListener("dispose",m));const T=g.program;i.updateUBOMapping(E,T);const R=e.render.frame;s[E.id]!==R&&(h(E),s[E.id]=R)}function c(E){const g=f();E.__bindingPointIndex=g;const S=t.createBuffer(),T=E.__size,R=E.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,T,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,S),S}function f(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(E){const g=r[E.id],S=E.uniforms,T=E.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let R=0,A=S.length;R<A;R++){const O=Array.isArray(S[R])?S[R]:[S[R]];for(let G=0,y=O.length;G<y;G++){const C=O[G];if(d(C,R,G,T)===!0){const B=C.__offset,j=Array.isArray(C.value)?C.value:[C.value];let L=0;for(let te=0;te<j.length;te++){const N=j[te],W=v(N);typeof N=="number"||typeof N=="boolean"?(C.__data[0]=N,t.bufferSubData(t.UNIFORM_BUFFER,B+L,C.__data)):N.isMatrix3?(C.__data[0]=N.elements[0],C.__data[1]=N.elements[1],C.__data[2]=N.elements[2],C.__data[3]=0,C.__data[4]=N.elements[3],C.__data[5]=N.elements[4],C.__data[6]=N.elements[5],C.__data[7]=0,C.__data[8]=N.elements[6],C.__data[9]=N.elements[7],C.__data[10]=N.elements[8],C.__data[11]=0):(N.toArray(C.__data,L),L+=W.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,B,C.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function d(E,g,S,T){const R=E.value,A=g+"_"+S;if(T[A]===void 0)return typeof R=="number"||typeof R=="boolean"?T[A]=R:T[A]=R.clone(),!0;{const O=T[A];if(typeof R=="number"||typeof R=="boolean"){if(O!==R)return T[A]=R,!0}else if(O.equals(R)===!1)return O.copy(R),!0}return!1}function _(E){const g=E.uniforms;let S=0;const T=16;for(let A=0,O=g.length;A<O;A++){const G=Array.isArray(g[A])?g[A]:[g[A]];for(let y=0,C=G.length;y<C;y++){const B=G[y],j=Array.isArray(B.value)?B.value:[B.value];for(let L=0,te=j.length;L<te;L++){const N=j[L],W=v(N),H=S%T;H!==0&&T-H<W.boundary&&(S+=T-H),B.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=S,S+=W.storage}}}const R=S%T;return R>0&&(S+=T-R),E.__size=S,E.__cache={},this}function v(E){const g={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(g.boundary=4,g.storage=4):E.isVector2?(g.boundary=8,g.storage=8):E.isVector3||E.isColor?(g.boundary=16,g.storage=12):E.isVector4?(g.boundary=16,g.storage=16):E.isMatrix3?(g.boundary=48,g.storage=48):E.isMatrix4?(g.boundary=64,g.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),g}function m(E){const g=E.target;g.removeEventListener("dispose",m);const S=a.indexOf(g.__bindingPointIndex);a.splice(S,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function p(){for(const E in r)t.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:l,update:u,dispose:p}}class Qm{constructor(e={}){const{canvas:n=WE(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=a;const d=new Uint32Array(4),_=new Int32Array(4);let v=null,m=null;const p=[],E=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Cn,this._useLegacyLights=!1,this.toneMapping=Ai,this.toneMappingExposure=1;const g=this;let S=!1,T=0,R=0,A=null,O=-1,G=null;const y=new Ct,C=new Ct;let B=null;const j=new Ze(0);let L=0,te=n.width,N=n.height,W=1,H=null,re=null;const he=new Ct(0,0,te,N),de=new Ct(0,0,te,N);let ye=!1;const Ue=new Xm;let ne=!1,ue=!1,xe=null;const V=new gt,oe=new $e,se=new Z,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ge(){return A===null?W:1}let I=i;function w(b,z){for(let Q=0;Q<b.length;Q++){const ie=b[Q],Y=n.getContext(ie,z);if(Y!==null)return Y}return null}try{const b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${eu}`),n.addEventListener("webglcontextlost",st,!1),n.addEventListener("webglcontextrestored",U,!1),n.addEventListener("webglcontextcreationerror",Me,!1),I===null){const z=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&z.shift(),I=w(z,b),I===null)throw w(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let P,D,q,X,ee,ae,ce,M,x,k,F,$,K,Se,Ee,le,pe,Re,fe,qe,Fe,Pe,be,we;function We(){P=new lA(I),D=new tA(I,P,e),P.init(D),Pe=new jw(I,P,D),q=new Xw(I,P,D),X=new fA(I),ee=new Lw,ae=new qw(I,P,q,ee,D,Pe,X),ce=new iA(g),M=new aA(g),x=new gM(I,D),be=new Qb(I,P,x,D),k=new cA(I,x,X,be),F=new mA(I,k,x,X),fe=new pA(I,D,ae),le=new nA(ee),$=new Pw(g,ce,M,P,D,be,le),K=new tR(g,ee),Se=new Iw,Ee=new Hw(P,D),Re=new Jb(g,ce,M,q,F,h,l),pe=new Ww(g,F,D),we=new nR(I,X,D,q),qe=new eA(I,P,X,D),Fe=new uA(I,P,X,D),X.programs=$.programs,g.capabilities=D,g.extensions=P,g.properties=ee,g.renderLists=Se,g.shadowMap=pe,g.state=q,g.info=X}We();const Oe=new Qw(g,I);this.xr=Oe,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const b=P.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=P.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(b){b!==void 0&&(W=b,this.setSize(te,N,!1))},this.getSize=function(b){return b.set(te,N)},this.setSize=function(b,z,Q=!0){if(Oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}te=b,N=z,n.width=Math.floor(b*W),n.height=Math.floor(z*W),Q===!0&&(n.style.width=b+"px",n.style.height=z+"px"),this.setViewport(0,0,b,z)},this.getDrawingBufferSize=function(b){return b.set(te*W,N*W).floor()},this.setDrawingBufferSize=function(b,z,Q){te=b,N=z,W=Q,n.width=Math.floor(b*Q),n.height=Math.floor(z*Q),this.setViewport(0,0,b,z)},this.getCurrentViewport=function(b){return b.copy(y)},this.getViewport=function(b){return b.copy(he)},this.setViewport=function(b,z,Q,ie){b.isVector4?he.set(b.x,b.y,b.z,b.w):he.set(b,z,Q,ie),q.viewport(y.copy(he).multiplyScalar(W).round())},this.getScissor=function(b){return b.copy(de)},this.setScissor=function(b,z,Q,ie){b.isVector4?de.set(b.x,b.y,b.z,b.w):de.set(b,z,Q,ie),q.scissor(C.copy(de).multiplyScalar(W).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(b){q.setScissorTest(ye=b)},this.setOpaqueSort=function(b){H=b},this.setTransparentSort=function(b){re=b},this.getClearColor=function(b){return b.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor.apply(Re,arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha.apply(Re,arguments)},this.clear=function(b=!0,z=!0,Q=!0){let ie=0;if(b){let Y=!1;if(A!==null){const Ae=A.texture.format;Y=Ae===Cm||Ae===Rm||Ae===wm}if(Y){const Ae=A.texture.type,Ce=Ae===wi||Ae===Ei||Ae===tu||Ae===ir||Ae===bm||Ae===Am,Ie=Re.getClearColor(),Ne=Re.getClearAlpha(),Ve=Ie.r,Be=Ie.g,He=Ie.b;Ce?(d[0]=Ve,d[1]=Be,d[2]=He,d[3]=Ne,I.clearBufferuiv(I.COLOR,0,d)):(_[0]=Ve,_[1]=Be,_[2]=He,_[3]=Ne,I.clearBufferiv(I.COLOR,0,_))}else ie|=I.COLOR_BUFFER_BIT}z&&(ie|=I.DEPTH_BUFFER_BIT),Q&&(ie|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",st,!1),n.removeEventListener("webglcontextrestored",U,!1),n.removeEventListener("webglcontextcreationerror",Me,!1),Se.dispose(),Ee.dispose(),ee.dispose(),ce.dispose(),M.dispose(),F.dispose(),be.dispose(),we.dispose(),$.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",nn),Oe.removeEventListener("sessionend",nt),xe&&(xe.dispose(),xe=null),Ut.stop()};function st(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const b=X.autoReset,z=pe.enabled,Q=pe.autoUpdate,ie=pe.needsUpdate,Y=pe.type;We(),X.autoReset=b,pe.enabled=z,pe.autoUpdate=Q,pe.needsUpdate=ie,pe.type=Y}function Me(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function J(b){const z=b.target;z.removeEventListener("dispose",J),_e(z)}function _e(b){Te(b),ee.remove(b)}function Te(b){const z=ee.get(b).programs;z!==void 0&&(z.forEach(function(Q){$.releaseProgram(Q)}),b.isShaderMaterial&&$.releaseShaderCache(b))}this.renderBufferDirect=function(b,z,Q,ie,Y,Ae){z===null&&(z=me);const Ce=Y.isMesh&&Y.matrixWorld.determinant()<0,Ie=rg(b,z,Q,ie,Y);q.setMaterial(ie,Ce);let Ne=Q.index,Ve=1;if(ie.wireframe===!0){if(Ne=k.getWireframeAttribute(Q),Ne===void 0)return;Ve=2}const Be=Q.drawRange,He=Q.attributes.position;let ht=Be.start*Ve,Kt=(Be.start+Be.count)*Ve;Ae!==null&&(ht=Math.max(ht,Ae.start*Ve),Kt=Math.min(Kt,(Ae.start+Ae.count)*Ve)),Ne!==null?(ht=Math.max(ht,0),Kt=Math.min(Kt,Ne.count)):He!=null&&(ht=Math.max(ht,0),Kt=Math.min(Kt,He.count));const yt=Kt-ht;if(yt<0||yt===1/0)return;be.setup(Y,ie,Ie,Q,Ne);let Nn,ct=qe;if(Ne!==null&&(Nn=x.get(Ne),ct=Fe,ct.setIndex(Nn)),Y.isMesh)ie.wireframe===!0?(q.setLineWidth(ie.wireframeLinewidth*ge()),ct.setMode(I.LINES)):ct.setMode(I.TRIANGLES);else if(Y.isLine){let ke=ie.linewidth;ke===void 0&&(ke=1),q.setLineWidth(ke*ge()),Y.isLineSegments?ct.setMode(I.LINES):Y.isLineLoop?ct.setMode(I.LINE_LOOP):ct.setMode(I.LINE_STRIP)}else Y.isPoints?ct.setMode(I.POINTS):Y.isSprite&&ct.setMode(I.TRIANGLES);if(Y.isBatchedMesh)ct.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)ct.renderInstances(ht,yt,Y.count);else if(Q.isInstancedBufferGeometry){const ke=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Ia=Math.min(Q.instanceCount,ke);ct.renderInstances(ht,yt,Ia)}else ct.render(ht,yt)};function Xe(b,z,Q){b.transparent===!0&&b.side===Kn&&b.forceSinglePass===!1?(b.side=jt,b.needsUpdate=!0,Ys(b,z,Q),b.side=Ri,b.needsUpdate=!0,Ys(b,z,Q),b.side=Kn):Ys(b,z,Q)}this.compile=function(b,z,Q=null){Q===null&&(Q=b),m=Ee.get(Q),m.init(),E.push(m),Q.traverseVisible(function(Y){Y.isLight&&Y.layers.test(z.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),b!==Q&&b.traverseVisible(function(Y){Y.isLight&&Y.layers.test(z.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),m.setupLights(g._useLegacyLights);const ie=new Set;return b.traverse(function(Y){const Ae=Y.material;if(Ae)if(Array.isArray(Ae))for(let Ce=0;Ce<Ae.length;Ce++){const Ie=Ae[Ce];Xe(Ie,Q,Y),ie.add(Ie)}else Xe(Ae,Q,Y),ie.add(Ae)}),E.pop(),m=null,ie},this.compileAsync=function(b,z,Q=null){const ie=this.compile(b,z,Q);return new Promise(Y=>{function Ae(){if(ie.forEach(function(Ce){ee.get(Ce).currentProgram.isReady()&&ie.delete(Ce)}),ie.size===0){Y(b);return}setTimeout(Ae,10)}P.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let tt=null;function bt(b){tt&&tt(b)}function nn(){Ut.stop()}function nt(){Ut.start()}const Ut=new qm;Ut.setAnimationLoop(bt),typeof self<"u"&&Ut.setContext(self),this.setAnimationLoop=function(b){tt=b,Oe.setAnimationLoop(b),b===null?Ut.stop():Ut.start()},Oe.addEventListener("sessionstart",nn),Oe.addEventListener("sessionend",nt),this.render=function(b,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(z),z=Oe.getCamera()),b.isScene===!0&&b.onBeforeRender(g,b,z,A),m=Ee.get(b,E.length),m.init(),E.push(m),V.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Ue.setFromProjectionMatrix(V),ue=this.localClippingEnabled,ne=le.init(this.clippingPlanes,ue),v=Se.get(b,p.length),v.init(),p.push(v),An(b,z,0,g.sortObjects),v.finish(),g.sortObjects===!0&&v.sort(H,re),this.info.render.frame++,ne===!0&&le.beginShadows();const Q=m.state.shadowsArray;if(pe.render(Q,b,z),ne===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Oe.enabled===!1||Oe.isPresenting===!1||Oe.hasDepthSensing()===!1)&&Re.render(v,b),m.setupLights(g._useLegacyLights),z.isArrayCamera){const ie=z.cameras;for(let Y=0,Ae=ie.length;Y<Ae;Y++){const Ce=ie[Y];ru(v,b,Ce,Ce.viewport)}}else ru(v,b,z);A!==null&&(ae.updateMultisampleRenderTarget(A),ae.updateRenderTargetMipmap(A)),b.isScene===!0&&b.onAfterRender(g,b,z),be.resetDefaultState(),O=-1,G=null,E.pop(),E.length>0?m=E[E.length-1]:m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function An(b,z,Q,ie){if(b.visible===!1)return;if(b.layers.test(z.layers)){if(b.isGroup)Q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(z);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ue.intersectsSprite(b)){ie&&se.setFromMatrixPosition(b.matrixWorld).applyMatrix4(V);const Ce=F.update(b),Ie=b.material;Ie.visible&&v.push(b,Ce,Ie,Q,se.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ue.intersectsObject(b))){const Ce=F.update(b),Ie=b.material;if(ie&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),se.copy(b.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),se.copy(Ce.boundingSphere.center)),se.applyMatrix4(b.matrixWorld).applyMatrix4(V)),Array.isArray(Ie)){const Ne=Ce.groups;for(let Ve=0,Be=Ne.length;Ve<Be;Ve++){const He=Ne[Ve],ht=Ie[He.materialIndex];ht&&ht.visible&&v.push(b,Ce,ht,Q,se.z,He)}}else Ie.visible&&v.push(b,Ce,Ie,Q,se.z,null)}}const Ae=b.children;for(let Ce=0,Ie=Ae.length;Ce<Ie;Ce++)An(Ae[Ce],z,Q,ie)}function ru(b,z,Q,ie){const Y=b.opaque,Ae=b.transmissive,Ce=b.transparent;m.setupLightsView(Q),ne===!0&&le.setGlobalState(g.clippingPlanes,Q),Ae.length>0&&ig(Y,Ae,z,Q),ie&&q.viewport(y.copy(ie)),Y.length>0&&$s(Y,z,Q),Ae.length>0&&$s(Ae,z,Q),Ce.length>0&&$s(Ce,z,Q),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function ig(b,z,Q,ie){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;const Ae=D.isWebGL2;xe===null&&(xe=new ar(1,1,{generateMipmaps:!0,type:P.has("EXT_color_buffer_half_float")?Os:wi,minFilter:Ji,samples:Ae?4:0})),g.getDrawingBufferSize(oe),Ae?xe.setSize(oe.x,oe.y):xe.setSize(Ec(oe.x),Ec(oe.y));const Ce=g.getRenderTarget();g.setRenderTarget(xe),g.getClearColor(j),L=g.getClearAlpha(),L<1&&g.setClearColor(16777215,.5),g.clear();const Ie=g.toneMapping;g.toneMapping=Ai,$s(b,Q,ie),ae.updateMultisampleRenderTarget(xe),ae.updateRenderTargetMipmap(xe);let Ne=!1;for(let Ve=0,Be=z.length;Ve<Be;Ve++){const He=z[Ve],ht=He.object,Kt=He.geometry,yt=He.material,Nn=He.group;if(yt.side===Kn&&ht.layers.test(ie.layers)){const ct=yt.side;yt.side=jt,yt.needsUpdate=!0,su(ht,Q,ie,Kt,yt,Nn),yt.side=ct,yt.needsUpdate=!0,Ne=!0}}Ne===!0&&(ae.updateMultisampleRenderTarget(xe),ae.updateRenderTargetMipmap(xe)),g.setRenderTarget(Ce),g.setClearColor(j,L),g.toneMapping=Ie}function $s(b,z,Q){const ie=z.isScene===!0?z.overrideMaterial:null;for(let Y=0,Ae=b.length;Y<Ae;Y++){const Ce=b[Y],Ie=Ce.object,Ne=Ce.geometry,Ve=ie===null?Ce.material:ie,Be=Ce.group;Ie.layers.test(Q.layers)&&su(Ie,z,Q,Ne,Ve,Be)}}function su(b,z,Q,ie,Y,Ae){b.onBeforeRender(g,z,Q,ie,Y,Ae),b.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Y.onBeforeRender(g,z,Q,ie,b,Ae),Y.transparent===!0&&Y.side===Kn&&Y.forceSinglePass===!1?(Y.side=jt,Y.needsUpdate=!0,g.renderBufferDirect(Q,z,ie,Y,b,Ae),Y.side=Ri,Y.needsUpdate=!0,g.renderBufferDirect(Q,z,ie,Y,b,Ae),Y.side=Kn):g.renderBufferDirect(Q,z,ie,Y,b,Ae),b.onAfterRender(g,z,Q,ie,Y,Ae)}function Ys(b,z,Q){z.isScene!==!0&&(z=me);const ie=ee.get(b),Y=m.state.lights,Ae=m.state.shadowsArray,Ce=Y.state.version,Ie=$.getParameters(b,Y.state,Ae,z,Q),Ne=$.getProgramCacheKey(Ie);let Ve=ie.programs;ie.environment=b.isMeshStandardMaterial?z.environment:null,ie.fog=z.fog,ie.envMap=(b.isMeshStandardMaterial?M:ce).get(b.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&b.envMap===null?z.environmentRotation:b.envMapRotation,Ve===void 0&&(b.addEventListener("dispose",J),Ve=new Map,ie.programs=Ve);let Be=Ve.get(Ne);if(Be!==void 0){if(ie.currentProgram===Be&&ie.lightsStateVersion===Ce)return au(b,Ie),Be}else Ie.uniforms=$.getUniforms(b),b.onBuild(Q,Ie,g),b.onBeforeCompile(Ie,g),Be=$.acquireProgram(Ie,Ne),Ve.set(Ne,Be),ie.uniforms=Ie.uniforms;const He=ie.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(He.clippingPlanes=le.uniform),au(b,Ie),ie.needsLights=og(b),ie.lightsStateVersion=Ce,ie.needsLights&&(He.ambientLightColor.value=Y.state.ambient,He.lightProbe.value=Y.state.probe,He.directionalLights.value=Y.state.directional,He.directionalLightShadows.value=Y.state.directionalShadow,He.spotLights.value=Y.state.spot,He.spotLightShadows.value=Y.state.spotShadow,He.rectAreaLights.value=Y.state.rectArea,He.ltc_1.value=Y.state.rectAreaLTC1,He.ltc_2.value=Y.state.rectAreaLTC2,He.pointLights.value=Y.state.point,He.pointLightShadows.value=Y.state.pointShadow,He.hemisphereLights.value=Y.state.hemi,He.directionalShadowMap.value=Y.state.directionalShadowMap,He.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,He.spotShadowMap.value=Y.state.spotShadowMap,He.spotLightMatrix.value=Y.state.spotLightMatrix,He.spotLightMap.value=Y.state.spotLightMap,He.pointShadowMap.value=Y.state.pointShadowMap,He.pointShadowMatrix.value=Y.state.pointShadowMatrix),ie.currentProgram=Be,ie.uniformsList=null,Be}function ou(b){if(b.uniformsList===null){const z=b.currentProgram.getUniforms();b.uniformsList=Oo.seqWithValue(z.seq,b.uniforms)}return b.uniformsList}function au(b,z){const Q=ee.get(b);Q.outputColorSpace=z.outputColorSpace,Q.batching=z.batching,Q.instancing=z.instancing,Q.instancingColor=z.instancingColor,Q.instancingMorph=z.instancingMorph,Q.skinning=z.skinning,Q.morphTargets=z.morphTargets,Q.morphNormals=z.morphNormals,Q.morphColors=z.morphColors,Q.morphTargetsCount=z.morphTargetsCount,Q.numClippingPlanes=z.numClippingPlanes,Q.numIntersection=z.numClipIntersection,Q.vertexAlphas=z.vertexAlphas,Q.vertexTangents=z.vertexTangents,Q.toneMapping=z.toneMapping}function rg(b,z,Q,ie,Y){z.isScene!==!0&&(z=me),ae.resetTextureUnits();const Ae=z.fog,Ce=ie.isMeshStandardMaterial?z.environment:null,Ie=A===null?g.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Li,Ne=(ie.isMeshStandardMaterial?M:ce).get(ie.envMap||Ce),Ve=ie.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Be=!!Q.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),He=!!Q.morphAttributes.position,ht=!!Q.morphAttributes.normal,Kt=!!Q.morphAttributes.color;let yt=Ai;ie.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(yt=g.toneMapping);const Nn=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,ct=Nn!==void 0?Nn.length:0,ke=ee.get(ie),Ia=m.state.lights;if(ne===!0&&(ue===!0||b!==G)){const rn=b===G&&ie.id===O;le.setState(ie,b,rn)}let ot=!1;ie.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Ia.state.version||ke.outputColorSpace!==Ie||Y.isBatchedMesh&&ke.batching===!1||!Y.isBatchedMesh&&ke.batching===!0||Y.isInstancedMesh&&ke.instancing===!1||!Y.isInstancedMesh&&ke.instancing===!0||Y.isSkinnedMesh&&ke.skinning===!1||!Y.isSkinnedMesh&&ke.skinning===!0||Y.isInstancedMesh&&ke.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&ke.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&ke.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&ke.instancingMorph===!1&&Y.morphTexture!==null||ke.envMap!==Ne||ie.fog===!0&&ke.fog!==Ae||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==le.numPlanes||ke.numIntersection!==le.numIntersection)||ke.vertexAlphas!==Ve||ke.vertexTangents!==Be||ke.morphTargets!==He||ke.morphNormals!==ht||ke.morphColors!==Kt||ke.toneMapping!==yt||D.isWebGL2===!0&&ke.morphTargetsCount!==ct)&&(ot=!0):(ot=!0,ke.__version=ie.version);let Di=ke.currentProgram;ot===!0&&(Di=Ys(ie,z,Y));let lu=!1,as=!1,Ua=!1;const Pt=Di.getUniforms(),Ii=ke.uniforms;if(q.useProgram(Di.program)&&(lu=!0,as=!0,Ua=!0),ie.id!==O&&(O=ie.id,as=!0),lu||G!==b){Pt.setValue(I,"projectionMatrix",b.projectionMatrix),Pt.setValue(I,"viewMatrix",b.matrixWorldInverse);const rn=Pt.map.cameraPosition;rn!==void 0&&rn.setValue(I,se.setFromMatrixPosition(b.matrixWorld)),D.logarithmicDepthBuffer&&Pt.setValue(I,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Pt.setValue(I,"isOrthographic",b.isOrthographicCamera===!0),G!==b&&(G=b,as=!0,Ua=!0)}if(Y.isSkinnedMesh){Pt.setOptional(I,Y,"bindMatrix"),Pt.setOptional(I,Y,"bindMatrixInverse");const rn=Y.skeleton;rn&&(D.floatVertexTextures?(rn.boneTexture===null&&rn.computeBoneTexture(),Pt.setValue(I,"boneTexture",rn.boneTexture,ae)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Y.isBatchedMesh&&(Pt.setOptional(I,Y,"batchingTexture"),Pt.setValue(I,"batchingTexture",Y._matricesTexture,ae));const Na=Q.morphAttributes;if((Na.position!==void 0||Na.normal!==void 0||Na.color!==void 0&&D.isWebGL2===!0)&&fe.update(Y,Q,Di),(as||ke.receiveShadow!==Y.receiveShadow)&&(ke.receiveShadow=Y.receiveShadow,Pt.setValue(I,"receiveShadow",Y.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(Ii.envMap.value=Ne,Ii.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),as&&(Pt.setValue(I,"toneMappingExposure",g.toneMappingExposure),ke.needsLights&&sg(Ii,Ua),Ae&&ie.fog===!0&&K.refreshFogUniforms(Ii,Ae),K.refreshMaterialUniforms(Ii,ie,W,N,xe),Oo.upload(I,ou(ke),Ii,ae)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Oo.upload(I,ou(ke),Ii,ae),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Pt.setValue(I,"center",Y.center),Pt.setValue(I,"modelViewMatrix",Y.modelViewMatrix),Pt.setValue(I,"normalMatrix",Y.normalMatrix),Pt.setValue(I,"modelMatrix",Y.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const rn=ie.uniformsGroups;for(let Oa=0,ag=rn.length;Oa<ag;Oa++)if(D.isWebGL2){const cu=rn[Oa];we.update(cu,Di),we.bind(cu,Di)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Di}function sg(b,z){b.ambientLightColor.needsUpdate=z,b.lightProbe.needsUpdate=z,b.directionalLights.needsUpdate=z,b.directionalLightShadows.needsUpdate=z,b.pointLights.needsUpdate=z,b.pointLightShadows.needsUpdate=z,b.spotLights.needsUpdate=z,b.spotLightShadows.needsUpdate=z,b.rectAreaLights.needsUpdate=z,b.hemisphereLights.needsUpdate=z}function og(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(b,z,Q){ee.get(b.texture).__webglTexture=z,ee.get(b.depthTexture).__webglTexture=Q;const ie=ee.get(b);ie.__hasExternalTextures=!0,ie.__autoAllocateDepthBuffer=Q===void 0,ie.__autoAllocateDepthBuffer||P.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,z){const Q=ee.get(b);Q.__webglFramebuffer=z,Q.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(b,z=0,Q=0){A=b,T=z,R=Q;let ie=!0,Y=null,Ae=!1,Ce=!1;if(b){const Ne=ee.get(b);Ne.__useDefaultFramebuffer!==void 0?(q.bindFramebuffer(I.FRAMEBUFFER,null),ie=!1):Ne.__webglFramebuffer===void 0?ae.setupRenderTarget(b):Ne.__hasExternalTextures&&ae.rebindTextures(b,ee.get(b.texture).__webglTexture,ee.get(b.depthTexture).__webglTexture);const Ve=b.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Ce=!0);const Be=ee.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Be[z])?Y=Be[z][Q]:Y=Be[z],Ae=!0):D.isWebGL2&&b.samples>0&&ae.useMultisampledRTT(b)===!1?Y=ee.get(b).__webglMultisampledFramebuffer:Array.isArray(Be)?Y=Be[Q]:Y=Be,y.copy(b.viewport),C.copy(b.scissor),B=b.scissorTest}else y.copy(he).multiplyScalar(W).floor(),C.copy(de).multiplyScalar(W).floor(),B=ye;if(q.bindFramebuffer(I.FRAMEBUFFER,Y)&&D.drawBuffers&&ie&&q.drawBuffers(b,Y),q.viewport(y),q.scissor(C),q.setScissorTest(B),Ae){const Ne=ee.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ne.__webglTexture,Q)}else if(Ce){const Ne=ee.get(b.texture),Ve=z||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ne.__webglTexture,Q||0,Ve)}O=-1},this.readRenderTargetPixels=function(b,z,Q,ie,Y,Ae,Ce){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=ee.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ie=Ie[Ce]),Ie){q.bindFramebuffer(I.FRAMEBUFFER,Ie);try{const Ne=b.texture,Ve=Ne.format,Be=Ne.type;if(Ve!==yn&&Pe.convert(Ve)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=Be===Os&&(P.has("EXT_color_buffer_half_float")||D.isWebGL2&&P.has("EXT_color_buffer_float"));if(Be!==wi&&Pe.convert(Be)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Be===Zn&&(D.isWebGL2||P.has("OES_texture_float")||P.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=b.width-ie&&Q>=0&&Q<=b.height-Y&&I.readPixels(z,Q,ie,Y,Pe.convert(Ve),Pe.convert(Be),Ae)}finally{const Ne=A!==null?ee.get(A).__webglFramebuffer:null;q.bindFramebuffer(I.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(b,z,Q=0){const ie=Math.pow(2,-Q),Y=Math.floor(z.image.width*ie),Ae=Math.floor(z.image.height*ie);ae.setTexture2D(z,0),I.copyTexSubImage2D(I.TEXTURE_2D,Q,0,0,b.x,b.y,Y,Ae),q.unbindTexture()},this.copyTextureToTexture=function(b,z,Q,ie=0){const Y=z.image.width,Ae=z.image.height,Ce=Pe.convert(Q.format),Ie=Pe.convert(Q.type);ae.setTexture2D(Q,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,Q.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,Q.unpackAlignment),z.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ie,b.x,b.y,Y,Ae,Ce,Ie,z.image.data):z.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ie,b.x,b.y,z.mipmaps[0].width,z.mipmaps[0].height,Ce,z.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,ie,b.x,b.y,Ce,Ie,z.image),ie===0&&Q.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),q.unbindTexture()},this.copyTextureToTexture3D=function(b,z,Q,ie,Y=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ae=Math.round(b.max.x-b.min.x),Ce=Math.round(b.max.y-b.min.y),Ie=b.max.z-b.min.z+1,Ne=Pe.convert(ie.format),Ve=Pe.convert(ie.type);let Be;if(ie.isData3DTexture)ae.setTexture3D(ie,0),Be=I.TEXTURE_3D;else if(ie.isDataArrayTexture||ie.isCompressedArrayTexture)ae.setTexture2DArray(ie,0),Be=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,ie.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ie.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,ie.unpackAlignment);const He=I.getParameter(I.UNPACK_ROW_LENGTH),ht=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Kt=I.getParameter(I.UNPACK_SKIP_PIXELS),yt=I.getParameter(I.UNPACK_SKIP_ROWS),Nn=I.getParameter(I.UNPACK_SKIP_IMAGES),ct=Q.isCompressedTexture?Q.mipmaps[Y]:Q.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,ct.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ct.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,b.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,b.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,b.min.z),Q.isDataTexture||Q.isData3DTexture?I.texSubImage3D(Be,Y,z.x,z.y,z.z,Ae,Ce,Ie,Ne,Ve,ct.data):ie.isCompressedArrayTexture?I.compressedTexSubImage3D(Be,Y,z.x,z.y,z.z,Ae,Ce,Ie,Ne,ct.data):I.texSubImage3D(Be,Y,z.x,z.y,z.z,Ae,Ce,Ie,Ne,Ve,ct),I.pixelStorei(I.UNPACK_ROW_LENGTH,He),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ht),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Kt),I.pixelStorei(I.UNPACK_SKIP_ROWS,yt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Nn),Y===0&&ie.generateMipmaps&&I.generateMipmap(Be),q.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?ae.setTextureCube(b,0):b.isData3DTexture?ae.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?ae.setTexture2DArray(b,0):ae.setTexture2D(b,0),q.unbindTexture()},this.resetState=function(){T=0,R=0,A=null,q.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===nu?"display-p3":"srgb",n.unpackColorSpace=Qe.workingColorSpace===Ca?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class iR extends Qm{}iR.prototype.isWebGL1Renderer=!0;class rR extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new si,this.environmentRotation=new si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class eg extends qs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const td=new gt,Tc=new Om,Po=new Pa,Lo=new Z;class sR extends Yt{constructor(e=new li,n=new eg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Po.copy(i.boundingSphere),Po.applyMatrix4(r),Po.radius+=s,e.ray.intersectsSphere(Po)===!1)return;td.copy(r).invert(),Tc.copy(e.ray).applyMatrix4(td);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=i.index,f=i.attributes.position;if(u!==null){const h=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let _=h,v=d;_<v;_++){const m=u.getX(_);Lo.fromBufferAttribute(f,m),nd(Lo,m,l,r,e,n,this)}}else{const h=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let _=h,v=d;_<v;_++)Lo.fromBufferAttribute(f,_),nd(Lo,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function nd(t,e,n,i,r,s,a){const o=Tc.distanceSqToPoint(t);if(o<n){const l=new Z;Tc.closestPointToPoint(t,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:eu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=eu);function oR(t){const e=new rR,n=new cn(75,window.innerWidth/window.innerHeight,.1,1e3);n.position.z=10;const i=new Qm({canvas:t});i.setSize(window.innerWidth,window.innerHeight),i.setPixelRatio(window.devicePixelRatio);const r=500,s=new Float32Array(r*3),a=new Float32Array(r);for(let v=0;v<r;v++){const m=new Z((Math.random()-.5)*2,(Math.random()-.5)*2,(Math.random()-.5)*2);m.normalize();const p=100+Math.random()*200;m.multiplyScalar(p),s[v*3]=m.x,s[v*3+1]=m.y,s[v*3+2]=m.z,a[v]=Math.random()*200+100}const o=new li;o.setAttribute("position",new fn(s,3)),o.setAttribute("size",new fn(a,1));const l=new eg({color:12303291,size:1,sizeAttenuation:!0}),u=new sR(o,l);e.add(u);const c=new ys;e.add(c),c.add(n),n.position.set(0,0,10);const f={x:1e-4,y:2e-4},h=()=>{requestAnimationFrame(h),c.rotation.x+=f.x,c.rotation.y+=f.y,i.render(e,n)};h();let d=!1;const _=()=>{d||(i.setSize(window.innerWidth,window.innerHeight),n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix())};return typeof window<"u"&&window.gtag&&document.addEventListener("click",v=>{v.target.closest("a[href], router-link")&&(d=!0,setTimeout(()=>{d=!1},500))}),window.addEventListener("resize",_),()=>{window.removeEventListener("resize",_),o.dispose(),l.dispose()}}const tg=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},aR={__name:"Starfield",setup(t){const e=In(null);return xa(()=>{e.value&&oR(e.value)}),(n,i)=>(Qt(),Gc("canvas",{ref_key:"canvas",ref:e,class:"starfield"},null,512))}},lR=tg(aR,[["__scopeId","data-v-2c3e7b5b"]]),ng=(t="RouteProvider")=>Hs({name:t,props:{route:{type:Object,required:!0},vnode:Object,vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(e){const n=e.renderKey,i=e.route,r={};for(const s in e.route)Object.defineProperty(r,s,{get:()=>n===e.renderKey?e.route[s]:i[s],enumerable:!0});return Br(Ta,Jn(r)),()=>e.vnode?un(e.vnode,{ref:e.vnodeRef}):e.vnode}}),cR=ng(),id=new WeakMap,uR=Hs({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e,slots:n,expose:i}){const r=Tt(),s=In(),a=qt(Ta,null);let o;i({pageRef:s});const l=qt(cx,null);let u;const c=r.deferHydration();if(r.isHydrating){const h=r.hooks.hookOnce("app:error",c);dn().beforeEach(h)}t.pageKey&&Hr(()=>t.pageKey,(h,d)=>{h!==d&&r.callHook("page:loading:start")});let f=!1;{const h=dn().beforeResolve(()=>{f=!1});Gs(()=>{h()})}return()=>un(xm,{name:t.name,route:t.route,...e},{default:h=>{const d=hR(a,h.route,h.Component),_=a&&a.matched.length===h.route.matched.length;if(!h.Component){if(u&&!_)return u;c();return}if(u&&l&&!l.isCurrent(h.route))return u;if(d&&a&&(!l||l?.isCurrent(a)))return _?u:null;const v=hc(h,t.pageKey),m=dR(a,h.route,h.Component);!r.isHydrating&&o===v&&!m&&Ls(()=>{f=!0,r.callHook("page:loading:end")}),o=v;const p=!!(t.transition??h.route.meta.pageTransition??ef),E=p&&fR([t.transition,h.route.meta.pageTransition,ef,{onAfterLeave(){delete r._runningTransition,r.callHook("page:transition:finish",h.Component)}}]),g=t.keepalive??h.route.meta.keepalive??q0;return u=SS(p&&E,vS(g,un(xp,{suspensible:!0,onPending:()=>{p&&(r._runningTransition=!0),r.callHook("page:start",h.Component)},onResolve:async()=>{await Ls();try{r._route.sync?.(),await r.callHook("page:finish",h.Component),delete r._runningTransition,!f&&!m&&(f=!0,await r.callHook("page:loading:end"))}finally{c()}}},{default:()=>{const S={key:v||void 0,vnode:n.default?pR(n.default,h):h.Component,route:h.route,renderKey:v||void 0,trackRootNodes:p,vnodeRef:s};if(!g)return un(cR,S);const T=h.Component.type,R=T;let A=id.get(R);return A||(A=ng(T.name||T.__name),id.set(R,A)),un(A,S)}}))).default(),u}})}});function fR(t){const e=[];for(const n of t)n&&e.push({...n,onAfterLeave:n.onAfterLeave?Jc(n.onAfterLeave):void 0});return Kp(...e)}function hR(t,e,n){if(!t)return!1;const i=e.matched.findIndex(r=>r.components?.default===n?.type);return!i||i===-1?!1:e.matched.slice(0,i).some((r,s)=>r.components?.default!==t.matched[s]?.components?.default)||n&&hc({route:e,Component:n})!==hc({route:t,Component:n})}function dR(t,e,n){return t?e.matched.findIndex(r=>r.components?.default===n?.type)<e.matched.length-1:!1}function pR(t,e){const n=t(e);return n.length===1?un(n[0]):un(At,void 0,n)}const mR={};function gR(t,e){const n=lR,i=uR;return Qt(),Gc("div",null,[ut(n),ut(i)])}const _R=tg(mR,[["render",gR]]),vR={__name:"nuxt-error-page",props:{error:Object},setup(t){const n=t.error,i=Number(n.statusCode||500),r=i===404,s=n.statusMessage??(r?"Page Not Found":"Internal Server Error"),a=n.message||n.toString(),o=void 0,c=r?Vo(()=>ln(()=>import("./IMOKl-JX.js"),__vite__mapDeps([24,1,6,25]),import.meta.url)):Vo(()=>ln(()=>import("./DKEcqBIV.js"),__vite__mapDeps([26,6,27]),import.meta.url));return(f,h)=>(Qt(),Yn(at(c),_g(Ap({statusCode:at(i),statusMessage:at(s),description:at(a),stack:at(o)})),null,16))}},xR={key:0},rd={__name:"nuxt-root",setup(t){const e=()=>null,n=Tt(),i=n.deferHydration();if(n.isHydrating){const u=n.hooks.hookOnce("app:error",i);dn().beforeEach(u)}const r=!1;Br(Ta,Jp()),n.hooks.callHookWith(u=>u.map(c=>c()),"vue:setup");const s=ba(),a=!1,o=/bot\b|chrome-lighthouse|facebookexternalhit|google\b/i;Zd((u,c,f)=>{if(n.hooks.callHook("vue:error",u,c,f).catch(h=>console.error("[nuxt] Error in `vue:error` hook",h)),o.test(navigator.userAgent))return n.hooks.callHook("app:error",u),console.error(`[nuxt] Not rendering error page for bot with user agent \`${navigator.userAgent}\`:`,u),!1;if(em(u)&&(u.fatal||u.unhandled))return n.runWithContext(()=>Xi(u)),!1});const l=!1;return(u,c)=>(Qt(),Yn(xp,{onResolve:at(i)},{default:Bd(()=>[at(a)?(Qt(),Gc("div",xR)):at(s)?(Qt(),Yn(at(vR),{key:1,error:at(s)},null,8,["error"])):at(l)?(Qt(),Yn(at(e),{key:2,context:at(l)},null,8,["context"])):at(r)?(Qt(),Yn(M_(at(r)),{key:3})):(Qt(),Yn(at(_R),{key:4}))]),_:1},8,["onResolve"]))}};let sd;{let t;sd=async function(){if(t)return t;const i=!!(window.__NUXT__?.serverRendered??document.getElementById("__NUXT_DATA__")?.dataset.ssr==="true")?Gv(rd):kv(rd),r=Z0({vueApp:i});async function s(a){await r.callHook("app:error",a),r.payload.error||=nr(a)}i.config.errorHandler=s,r.hook("app:suspense:resolve",()=>{i.config.errorHandler===s&&(i.config.errorHandler=void 0)});try{await ex(r,zS)}catch(a){s(a)}try{await r.hooks.callHook("app:created",i),await r.hooks.callHook("app:beforeMount",i),i.mount($0),await r.hooks.callHook("app:mounted",i),await Ls()}catch(a){s(a)}return i},t=sd().catch(e=>{throw console.error("Error while mounting app:",e),e})}export{Wc as $,Ps as A,ao as B,RR as C,SS as D,at as E,At as F,un as G,tv as H,Ls as I,Br as J,Jn as K,cx as L,LR as M,tx as N,Oc as O,Ta as P,im as Q,Qc as R,xp as S,Df as T,IR as U,SR as V,Op as W,fx as X,kS as Y,cr as Z,tg as _,bp as a,Ma as a0,PR as a1,d0 as a2,Jo as a3,CR as a4,ut as b,Gc as c,wp as d,Yn as e,xa as f,Gs as g,TR as h,bR as i,vn as j,yR as k,ER as l,wR as m,MR as n,Qt as o,Vp as p,Hs as q,In as r,Tt as s,Sg as t,dn as u,AR as v,Bd as w,qt as x,Jp as y,DR as z};
