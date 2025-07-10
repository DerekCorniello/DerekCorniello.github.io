(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function fc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ut={},vr=[],Un=()=>{},kp=()=>!1,Fo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),dc=t=>t.startsWith("onUpdate:"),zt=Object.assign,hc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},zp=Object.prototype.hasOwnProperty,ot=(t,e)=>zp.call(t,e),ke=Array.isArray,xr=t=>ys(t)==="[object Map]",Oo=t=>ys(t)==="[object Set]",Yc=t=>ys(t)==="[object Date]",qe=t=>typeof t=="function",Et=t=>typeof t=="string",Tn=t=>typeof t=="symbol",pt=t=>t!==null&&typeof t=="object",id=t=>(pt(t)||qe(t))&&qe(t.then)&&qe(t.catch),rd=Object.prototype.toString,ys=t=>rd.call(t),Hp=t=>ys(t).slice(8,-1),sd=t=>ys(t)==="[object Object]",pc=t=>Et(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,rs=fc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Bo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Vp=/-(\w)/g,mn=Bo(t=>t.replace(Vp,(e,n)=>n?n.toUpperCase():"")),Gp=/\B([A-Z])/g,Ki=Bo(t=>t.replace(Gp,"-$1").toLowerCase()),ko=Bo(t=>t.charAt(0).toUpperCase()+t.slice(1)),ua=Bo(t=>t?`on${ko(t)}`:""),mi=(t,e)=>!Object.is(t,e),ao=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},od=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},nl=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Kc;const zo=()=>Kc||(Kc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function mc(t){if(ke(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=Et(i)?$p(i):mc(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Et(t)||pt(t))return t}const Wp=/;(?![^(]*\))/g,Xp=/:([^]+)/,qp=/\/\*[^]*?\*\//g;function $p(t){const e={};return t.replace(qp,"").split(Wp).forEach(n=>{if(n){const i=n.split(Xp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ho(t){let e="";if(Et(t))e=t;else if(ke(t))for(let n=0;n<t.length;n++){const i=Ho(t[n]);i&&(e+=i+" ")}else if(pt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const jp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Yp=fc(jp);function ad(t){return!!t||t===""}function Kp(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=Vo(t[i],e[i]);return n}function Vo(t,e){if(t===e)return!0;let n=Yc(t),i=Yc(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=Tn(t),i=Tn(e),n||i)return t===e;if(n=ke(t),i=ke(e),n||i)return n&&i?Kp(t,e):!1;if(n=pt(t),i=pt(e),n||i){if(!n||!i)return!1;const r=Object.keys(t).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Vo(t[o],e[o]))return!1}}return String(t)===String(e)}function ld(t,e){return t.findIndex(n=>Vo(n,e))}const cd=t=>!!(t&&t.__v_isRef===!0),Fi=t=>Et(t)?t:t==null?"":ke(t)||pt(t)&&(t.toString===rd||!qe(t.toString))?cd(t)?Fi(t.value):JSON.stringify(t,ud,2):String(t),ud=(t,e)=>cd(e)?ud(t,e.value):xr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[fa(i,s)+" =>"]=r,n),{})}:Oo(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>fa(n))}:Tn(e)?fa(e):pt(e)&&!ke(e)&&!sd(e)?String(e):e,fa=(t,e="")=>{var n;return Tn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let nn;class Zp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=nn,!e&&nn&&(this.index=(nn.scopes||(nn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=nn;try{return nn=this,e()}finally{nn=n}}}on(){nn=this}off(){nn=this.parent}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Jp(){return nn}let ht;const da=new WeakSet;class fd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,nn&&nn.active&&nn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,da.has(this)&&(da.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||hd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Zc(this),pd(this);const e=ht,n=En;ht=this,En=!0;try{return this.fn()}finally{md(this),ht=e,En=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)vc(e);this.deps=this.depsTail=void 0,Zc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?da.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){il(this)&&this.run()}get dirty(){return il(this)}}let dd=0,ss,os;function hd(t,e=!1){if(t.flags|=8,e){t.next=os,os=t;return}t.next=ss,ss=t}function gc(){dd++}function _c(){if(--dd>0)return;if(os){let e=os;for(os=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;ss;){let e=ss;for(ss=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function pd(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function md(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),vc(i),Qp(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function il(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(gd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function gd(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===fs))return;t.globalVersion=fs;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!il(t)){t.flags&=-3;return}const n=ht,i=En;ht=t,En=!0;try{pd(t);const r=t.fn(t._value);(e.version===0||mi(r,t._value))&&(t._value=r,e.version++)}catch(r){throw e.version++,r}finally{ht=n,En=i,md(t),t.flags&=-3}}function vc(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)vc(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Qp(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let En=!0;const _d=[];function yi(){_d.push(En),En=!1}function Mi(){const t=_d.pop();En=t===void 0?!0:t}function Zc(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ht;ht=void 0;try{e()}finally{ht=n}}}let fs=0;class em{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class xc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ht||!En||ht===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ht)n=this.activeLink=new em(ht,this),ht.deps?(n.prevDep=ht.depsTail,ht.depsTail.nextDep=n,ht.depsTail=n):ht.deps=ht.depsTail=n,vd(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=ht.depsTail,n.nextDep=void 0,ht.depsTail.nextDep=n,ht.depsTail=n,ht.deps===n&&(ht.deps=i)}return n}trigger(e){this.version++,fs++,this.notify(e)}notify(e){gc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{_c()}}}function vd(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)vd(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const rl=new WeakMap,Gi=Symbol(""),sl=Symbol(""),ds=Symbol("");function Nt(t,e,n){if(En&&ht){let i=rl.get(t);i||rl.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new xc),r.map=i,r.key=n),r.track()}}function qn(t,e,n,i,r,s){const o=rl.get(t);if(!o){fs++;return}const a=l=>{l&&l.trigger()};if(gc(),e==="clear")o.forEach(a);else{const l=ke(t),c=l&&pc(n);if(l&&n==="length"){const u=Number(i);o.forEach((f,d)=>{(d==="length"||d===ds||!Tn(d)&&d>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(ds)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Gi)),xr(t)&&a(o.get(sl)));break;case"delete":l||(a(o.get(Gi)),xr(t)&&a(o.get(sl)));break;case"set":xr(t)&&a(o.get(Gi));break}}_c()}function Ji(t){const e=st(t);return e===t?e:(Nt(e,"iterate",ds),hn(t)?e:e.map(Ft))}function Go(t){return Nt(t=st(t),"iterate",ds),t}const tm={__proto__:null,[Symbol.iterator](){return ha(this,Symbol.iterator,Ft)},concat(...t){return Ji(this).concat(...t.map(e=>ke(e)?Ji(e):e))},entries(){return ha(this,"entries",t=>(t[1]=Ft(t[1]),t))},every(t,e){return On(this,"every",t,e,void 0,arguments)},filter(t,e){return On(this,"filter",t,e,n=>n.map(Ft),arguments)},find(t,e){return On(this,"find",t,e,Ft,arguments)},findIndex(t,e){return On(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return On(this,"findLast",t,e,Ft,arguments)},findLastIndex(t,e){return On(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return On(this,"forEach",t,e,void 0,arguments)},includes(...t){return pa(this,"includes",t)},indexOf(...t){return pa(this,"indexOf",t)},join(t){return Ji(this).join(t)},lastIndexOf(...t){return pa(this,"lastIndexOf",t)},map(t,e){return On(this,"map",t,e,void 0,arguments)},pop(){return qr(this,"pop")},push(...t){return qr(this,"push",t)},reduce(t,...e){return Jc(this,"reduce",t,e)},reduceRight(t,...e){return Jc(this,"reduceRight",t,e)},shift(){return qr(this,"shift")},some(t,e){return On(this,"some",t,e,void 0,arguments)},splice(...t){return qr(this,"splice",t)},toReversed(){return Ji(this).toReversed()},toSorted(t){return Ji(this).toSorted(t)},toSpliced(...t){return Ji(this).toSpliced(...t)},unshift(...t){return qr(this,"unshift",t)},values(){return ha(this,"values",Ft)}};function ha(t,e,n){const i=Go(t),r=i[e]();return i!==t&&!hn(t)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=n(s.value)),s}),r}const nm=Array.prototype;function On(t,e,n,i,r,s){const o=Go(t),a=o!==t&&!hn(t),l=o[e];if(l!==nm[e]){const f=l.apply(t,s);return a?Ft(f):f}let c=n;o!==t&&(a?c=function(f,d){return n.call(this,Ft(f),d,t)}:n.length>2&&(c=function(f,d){return n.call(this,f,d,t)}));const u=l.call(o,c,i);return a&&r?r(u):u}function Jc(t,e,n,i){const r=Go(t);let s=n;return r!==t&&(hn(t)?n.length>3&&(s=function(o,a,l){return n.call(this,o,a,l,t)}):s=function(o,a,l){return n.call(this,o,Ft(a),l,t)}),r[e](s,...i)}function pa(t,e,n){const i=st(t);Nt(i,"iterate",ds);const r=i[e](...n);return(r===-1||r===!1)&&Mc(n[0])?(n[0]=st(n[0]),i[e](...n)):r}function qr(t,e,n=[]){yi(),gc();const i=st(t)[e].apply(t,n);return _c(),Mi(),i}const im=fc("__proto__,__v_isRef,__isVue"),xd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Tn));function rm(t){Tn(t)||(t=String(t));const e=st(this);return Nt(e,"has",t),e.hasOwnProperty(t)}class Sd{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?pm:bd:s?Ed:Md).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=ke(e);if(!r){let l;if(o&&(l=tm[n]))return l;if(n==="hasOwnProperty")return rm}const a=Reflect.get(e,n,kt(e)?e:i);return(Tn(n)?xd.has(n):im(n))||(r||Nt(e,"get",n),s)?a:kt(a)?o&&pc(n)?a:a.value:pt(a)?r?wd(a):Wo(a):a}}class yd extends Sd{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];if(!this._isShallow){const l=qi(s);if(!hn(i)&&!qi(i)&&(s=st(s),i=st(i)),!ke(e)&&kt(s)&&!kt(i))return l?!1:(s.value=i,!0)}const o=ke(e)&&pc(n)?Number(n)<e.length:ot(e,n),a=Reflect.set(e,n,i,kt(e)?e:r);return e===st(r)&&(o?mi(i,s)&&qn(e,"set",n,i):qn(e,"add",n,i)),a}deleteProperty(e,n){const i=ot(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&qn(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!Tn(n)||!xd.has(n))&&Nt(e,"has",n),i}ownKeys(e){return Nt(e,"iterate",ke(e)?"length":Gi),Reflect.ownKeys(e)}}class sm extends Sd{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const om=new yd,am=new sm,lm=new yd(!0);const ol=t=>t,Us=t=>Reflect.getPrototypeOf(t);function cm(t,e,n){return function(...i){const r=this.__v_raw,s=st(r),o=xr(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?ol:e?al:Ft;return!e&&Nt(s,"iterate",l?sl:Gi),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Ns(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function um(t,e){const n={get(r){const s=this.__v_raw,o=st(s),a=st(r);t||(mi(r,a)&&Nt(o,"get",r),Nt(o,"get",a));const{has:l}=Us(o),c=e?ol:t?al:Ft;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!t&&Nt(st(r),"iterate",Gi),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,o=st(s),a=st(r);return t||(mi(r,a)&&Nt(o,"has",r),Nt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=st(a),c=e?ol:t?al:Ft;return!t&&Nt(l,"iterate",Gi),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return zt(n,t?{add:Ns("add"),set:Ns("set"),delete:Ns("delete"),clear:Ns("clear")}:{add(r){!e&&!hn(r)&&!qi(r)&&(r=st(r));const s=st(this);return Us(s).has.call(s,r)||(s.add(r),qn(s,"add",r,r)),this},set(r,s){!e&&!hn(s)&&!qi(s)&&(s=st(s));const o=st(this),{has:a,get:l}=Us(o);let c=a.call(o,r);c||(r=st(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?mi(s,u)&&qn(o,"set",r,s):qn(o,"add",r,s),this},delete(r){const s=st(this),{has:o,get:a}=Us(s);let l=o.call(s,r);l||(r=st(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&qn(s,"delete",r,void 0),c},clear(){const r=st(this),s=r.size!==0,o=r.clear();return s&&qn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=cm(r,t,e)}),n}function Sc(t,e){const n=um(t,e);return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(ot(n,r)&&r in i?n:i,r,s)}const fm={get:Sc(!1,!1)},dm={get:Sc(!1,!0)},hm={get:Sc(!0,!1)};const Md=new WeakMap,Ed=new WeakMap,bd=new WeakMap,pm=new WeakMap;function mm(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function gm(t){return t.__v_skip||!Object.isExtensible(t)?0:mm(Hp(t))}function Wo(t){return qi(t)?t:yc(t,!1,om,fm,Md)}function Td(t){return yc(t,!1,lm,dm,Ed)}function wd(t){return yc(t,!0,am,hm,bd)}function yc(t,e,n,i,r){if(!pt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const o=gm(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function Sr(t){return qi(t)?Sr(t.__v_raw):!!(t&&t.__v_isReactive)}function qi(t){return!!(t&&t.__v_isReadonly)}function hn(t){return!!(t&&t.__v_isShallow)}function Mc(t){return t?!!t.__v_raw:!1}function st(t){const e=t&&t.__v_raw;return e?st(e):t}function _m(t){return!ot(t,"__v_skip")&&Object.isExtensible(t)&&od(t,"__v_skip",!0),t}const Ft=t=>pt(t)?Wo(t):t,al=t=>pt(t)?wd(t):t;function kt(t){return t?t.__v_isRef===!0:!1}function hr(t){return Ad(t,!1)}function vm(t){return Ad(t,!0)}function Ad(t,e){return kt(t)?t:new xm(t,e)}class xm{constructor(e,n){this.dep=new xc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:st(e),this._value=n?e:Ft(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||hn(e)||qi(e);e=i?e:st(e),mi(e,n)&&(this._rawValue=e,this._value=i?e:Ft(e),this.dep.trigger())}}function yr(t){return kt(t)?t.value:t}const Sm={get:(t,e,n)=>e==="__v_raw"?t:yr(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return kt(r)&&!kt(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function Rd(t){return Sr(t)?t:new Proxy(t,Sm)}class ym{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new xc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=fs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ht!==this)return hd(this,!0),!0}get value(){const e=this.dep.track();return gd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Mm(t,e,n=!1){let i,r;return qe(t)?i=t:(i=t.get,r=t.set),new ym(i,r,n)}const Fs={},Eo=new WeakMap;let Ii;function Em(t,e=!1,n=Ii){if(n){let i=Eo.get(n);i||Eo.set(n,i=[]),i.push(t)}}function bm(t,e,n=ut){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=n,c=E=>r?E:hn(E)||r===!1||r===0?$n(E,1):$n(E);let u,f,d,p,g=!1,v=!1;if(kt(t)?(f=()=>t.value,g=hn(t)):Sr(t)?(f=()=>c(t),g=!0):ke(t)?(v=!0,g=t.some(E=>Sr(E)||hn(E)),f=()=>t.map(E=>{if(kt(E))return E.value;if(Sr(E))return c(E);if(qe(E))return l?l(E,2):E()})):qe(t)?e?f=l?()=>l(t,2):t:f=()=>{if(d){yi();try{d()}finally{Mi()}}const E=Ii;Ii=u;try{return l?l(t,3,[p]):t(p)}finally{Ii=E}}:f=Un,e&&r){const E=f,I=r===!0?1/0:r;f=()=>$n(E(),I)}const m=Jp(),h=()=>{u.stop(),m&&m.active&&hc(m.effects,u)};if(s&&e){const E=e;e=(...I)=>{E(...I),h()}}let R=v?new Array(t.length).fill(Fs):Fs;const T=E=>{if(!(!(u.flags&1)||!u.dirty&&!E))if(e){const I=u.run();if(r||g||(v?I.some((L,P)=>mi(L,R[P])):mi(I,R))){d&&d();const L=Ii;Ii=u;try{const P=[I,R===Fs?void 0:v&&R[0]===Fs?[]:R,p];l?l(e,3,P):e(...P),R=I}finally{Ii=L}}}else u.run()};return a&&a(T),u=new fd(f),u.scheduler=o?()=>o(T,!1):T,p=E=>Em(E,!1,u),d=u.onStop=()=>{const E=Eo.get(u);if(E){if(l)l(E,4);else for(const I of E)I();Eo.delete(u)}},e?i?T(!0):R=u.run():o?o(T.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function $n(t,e=1/0,n){if(e<=0||!pt(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,kt(t))$n(t.value,e,n);else if(ke(t))for(let i=0;i<t.length;i++)$n(t[i],e,n);else if(Oo(t)||xr(t))t.forEach(i=>{$n(i,e,n)});else if(sd(t)){for(const i in t)$n(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&$n(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ms(t,e,n,i){try{return i?t(...i):t()}catch(r){Xo(r,e,n)}}function Nn(t,e,n,i){if(qe(t)){const r=Ms(t,e,n,i);return r&&id(r)&&r.catch(s=>{Xo(s,e,n)}),r}if(ke(t)){const r=[];for(let s=0;s<t.length;s++)r.push(Nn(t[s],e,n,i));return r}}function Xo(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ut;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}a=a.parent}if(s){yi(),Ms(s,null,10,[t,l,c]),Mi();return}}Tm(t,n,r,i,o)}function Tm(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const Xt=[];let Pn=-1;const Mr=[];let fi=null,pr=0;const Cd=Promise.resolve();let bo=null;function Ec(t){const e=bo||Cd;return t?e.then(this?t.bind(this):t):e}function wm(t){let e=Pn+1,n=Xt.length;for(;e<n;){const i=e+n>>>1,r=Xt[i],s=hs(r);s<t||s===t&&r.flags&2?e=i+1:n=i}return e}function bc(t){if(!(t.flags&1)){const e=hs(t),n=Xt[Xt.length-1];!n||!(t.flags&2)&&e>=hs(n)?Xt.push(t):Xt.splice(wm(e),0,t),t.flags|=1,Pd()}}function Pd(){bo||(bo=Cd.then(Ld))}function Am(t){ke(t)?Mr.push(...t):fi&&t.id===-1?fi.splice(pr+1,0,t):t.flags&1||(Mr.push(t),t.flags|=1),Pd()}function Qc(t,e,n=Pn+1){for(;n<Xt.length;n++){const i=Xt[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;Xt.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Dd(t){if(Mr.length){const e=[...new Set(Mr)].sort((n,i)=>hs(n)-hs(i));if(Mr.length=0,fi){fi.push(...e);return}for(fi=e,pr=0;pr<fi.length;pr++){const n=fi[pr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}fi=null,pr=0}}const hs=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Ld(t){try{for(Pn=0;Pn<Xt.length;Pn++){const e=Xt[Pn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ms(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Pn<Xt.length;Pn++){const e=Xt[Pn];e&&(e.flags&=-2)}Pn=-1,Xt.length=0,Dd(),bo=null,(Xt.length||Mr.length)&&Ld()}}let Dt=null,Id=null;function To(t){const e=Dt;return Dt=t,Id=t&&t.type.__scopeId||null,e}function Le(t,e=Dt,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&uu(-1);const s=To(e);let o;try{o=t(...r)}finally{To(s),i._d&&uu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function eu(t,e){if(Dt===null)return t;const n=Yo(Dt),i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=ut]=e[r];s&&(qe(s)&&(s={mounted:s,updated:s}),s.deep&&$n(o),i.push({dir:s,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Ti(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(yi(),Nn(l,n,8,[t.el,a,t,e]),Mi())}}const Rm=Symbol("_vte"),Cm=t=>t.__isTeleport;function Tc(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Tc(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Ud(t,e){return qe(t)?zt({name:t.name},e,{setup:t}):t}function Nd(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function wo(t,e,n,i,r=!1){if(ke(t)){t.forEach((g,v)=>wo(g,e&&(ke(e)?e[v]:e),n,i,r));return}if(Er(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&wo(t,e,n,i.component.subTree);return}const s=i.shapeFlag&4?Yo(i.component):i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ut?a.refs={}:a.refs,f=a.setupState,d=st(f),p=f===ut?()=>!1:g=>ot(d,g);if(c!=null&&c!==l&&(Et(c)?(u[c]=null,p(c)&&(f[c]=null)):kt(c)&&(c.value=null)),qe(l))Ms(l,a,12,[o,u]);else{const g=Et(l),v=kt(l);if(g||v){const m=()=>{if(t.f){const h=g?p(l)?f[l]:u[l]:l.value;r?ke(h)&&hc(h,s):ke(h)?h.includes(s)||h.push(s):g?(u[l]=[s],p(l)&&(f[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else g?(u[l]=o,p(l)&&(f[l]=o)):v&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,tn(m,n)):m()}}}zo().requestIdleCallback;zo().cancelIdleCallback;const Er=t=>!!t.type.__asyncLoader,Fd=t=>t.type.__isKeepAlive;function Pm(t,e){Od(t,"a",e)}function Dm(t,e){Od(t,"da",e)}function Od(t,e,n=Ot){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(qo(e,i,n),n){let r=n.parent;for(;r&&r.parent;)Fd(r.parent.vnode)&&Lm(i,e,n,r),r=r.parent}}function Lm(t,e,n,i){const r=qo(e,t,i,!0);kd(()=>{hc(i[e],r)},n)}function qo(t,e,n=Ot,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{yi();const a=Es(n),l=Nn(e,n,t,o);return a(),Mi(),l});return i?r.unshift(s):r.push(s),s}}const ni=t=>(e,n=Ot)=>{(!gs||t==="sp")&&qo(t,(...i)=>e(...i),n)},Im=ni("bm"),Bd=ni("m"),Um=ni("bu"),Nm=ni("u"),Fm=ni("bum"),kd=ni("um"),Om=ni("sp"),Bm=ni("rtg"),km=ni("rtc");function zm(t,e=Ot){qo("ec",t,e)}const Hm="components";function Tt(t,e){return Gm(Hm,t,!0,e)||t}const Vm=Symbol.for("v-ndc");function Gm(t,e,n=!0,i=!1){const r=Dt||Ot;if(r){const s=r.type;{const a=Cg(s,!1);if(a&&(a===e||a===mn(e)||a===ko(mn(e))))return s}const o=tu(r[t]||s[t],e)||tu(r.appContext[t],e);return!o&&i?s:o}}function tu(t,e){return t&&(t[e]||t[mn(e)]||t[ko(mn(e))])}function Os(t,e,n,i){let r;const s=n,o=ke(t);if(o||Et(t)){const a=o&&Sr(t);let l=!1;a&&(l=!hn(t),t=Go(t)),r=new Array(t.length);for(let c=0,u=t.length;c<u;c++)r[c]=e(l?Ft(t[c]):t[c],c,void 0,s)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,s)}else if(pt(t))if(t[Symbol.iterator])r=Array.from(t,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(t);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(t[u],u,l,s)}}else r=[];return r}function Ao(t,e,n={},i,r){if(Dt.ce||Dt.parent&&Er(Dt.parent)&&Dt.parent.ce)return e!=="default"&&(n.name=e),gt(),vi(Ct,null,[Be("slot",n,i)],64);let s=t[e];s&&s._c&&(s._d=!1),gt();const o=s&&zd(s(n)),a=n.key||o&&o.key,l=vi(Ct,{key:(a&&!Tn(a)?a:`_${e}`)+""},o||[],o&&t._===1?64:-2);return s&&s._c&&(s._d=!0),l}function zd(t){return t.some(e=>ms(e)?!(e.type===Cr||e.type===Ct&&!zd(e.children)):!0)?t:null}const ll=t=>t?lh(t)?Yo(t):ll(t.parent):null,as=zt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ll(t.parent),$root:t=>ll(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Vd(t),$forceUpdate:t=>t.f||(t.f=()=>{bc(t.update)}),$nextTick:t=>t.n||(t.n=Ec.bind(t.proxy)),$watch:t=>ug.bind(t)}),ma=(t,e)=>t!==ut&&!t.__isScriptSetup&&ot(t,e),Wm={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(ma(i,e))return o[e]=1,i[e];if(r!==ut&&ot(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&ot(c,e))return o[e]=3,s[e];if(n!==ut&&ot(n,e))return o[e]=4,n[e];cl&&(o[e]=0)}}const u=as[e];let f,d;if(u)return e==="$attrs"&&Nt(t.attrs,"get",""),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==ut&&ot(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,ot(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return ma(r,e)?(r[e]=n,!0):i!==ut&&ot(i,e)?(i[e]=n,!0):ot(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||t!==ut&&ot(t,o)||ma(e,o)||(a=s[0])&&ot(a,o)||ot(i,o)||ot(as,o)||ot(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ot(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function nu(t){return ke(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let cl=!0;function Xm(t){const e=Vd(t),n=t.proxy,i=t.ctx;cl=!1,e.beforeCreate&&iu(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:p,updated:g,activated:v,deactivated:m,beforeDestroy:h,beforeUnmount:R,destroyed:T,unmounted:E,render:I,renderTracked:L,renderTriggered:P,errorCaptured:k,serverPrefetch:w,expose:b,inheritAttrs:U,components:ie,directives:$,filters:ae}=e;if(c&&qm(c,i,null),o)for(const te in o){const H=o[te];qe(H)&&(i[te]=H.bind(n))}if(r){const te=r.call(n,n);pt(te)&&(t.data=Wo(te))}if(cl=!0,s)for(const te in s){const H=s[te],ve=qe(H)?H.bind(n,n):qe(H.get)?H.get.bind(n,n):Un,Ee=!qe(H)&&qe(H.set)?H.set.bind(n):Un,Pe=dn({get:ve,set:Ee});Object.defineProperty(i,te,{enumerable:!0,configurable:!0,get:()=>Pe.value,set:Ue=>Pe.value=Ue})}if(a)for(const te in a)Hd(a[te],i,n,te);if(l){const te=qe(l)?l.call(n):l;Reflect.ownKeys(te).forEach(H=>{lo(H,te[H])})}u&&iu(u,t,"c");function J(te,H){ke(H)?H.forEach(ve=>te(ve.bind(n))):H&&te(H.bind(n))}if(J(Im,f),J(Bd,d),J(Um,p),J(Nm,g),J(Pm,v),J(Dm,m),J(zm,k),J(km,L),J(Bm,P),J(Fm,R),J(kd,E),J(Om,w),ke(b))if(b.length){const te=t.exposed||(t.exposed={});b.forEach(H=>{Object.defineProperty(te,H,{get:()=>n[H],set:ve=>n[H]=ve})})}else t.exposed||(t.exposed={});I&&t.render===Un&&(t.render=I),U!=null&&(t.inheritAttrs=U),ie&&(t.components=ie),$&&(t.directives=$),w&&Nd(t)}function qm(t,e,n=Un){ke(t)&&(t=ul(t));for(const i in t){const r=t[i];let s;pt(r)?"default"in r?s=Jn(r.from||i,r.default,!0):s=Jn(r.from||i):s=Jn(r),kt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function iu(t,e,n){Nn(ke(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Hd(t,e,n,i){let r=i.includes(".")?nh(n,i):()=>n[i];if(Et(t)){const s=e[t];qe(s)&&co(r,s)}else if(qe(t))co(r,t.bind(n));else if(pt(t))if(ke(t))t.forEach(s=>Hd(s,e,n,i));else{const s=qe(t.handler)?t.handler.bind(n):e[t.handler];qe(s)&&co(r,s,t)}}function Vd(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>Ro(l,c,o,!0)),Ro(l,e,o)),pt(e)&&s.set(e,l),l}function Ro(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&Ro(t,s,n,!0),r&&r.forEach(o=>Ro(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=$m[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const $m={data:ru,props:su,emits:su,methods:ts,computed:ts,beforeCreate:Vt,created:Vt,beforeMount:Vt,mounted:Vt,beforeUpdate:Vt,updated:Vt,beforeDestroy:Vt,beforeUnmount:Vt,destroyed:Vt,unmounted:Vt,activated:Vt,deactivated:Vt,errorCaptured:Vt,serverPrefetch:Vt,components:ts,directives:ts,watch:Ym,provide:ru,inject:jm};function ru(t,e){return e?t?function(){return zt(qe(t)?t.call(this,this):t,qe(e)?e.call(this,this):e)}:e:t}function jm(t,e){return ts(ul(t),ul(e))}function ul(t){if(ke(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Vt(t,e){return t?[...new Set([].concat(t,e))]:e}function ts(t,e){return t?zt(Object.create(null),t,e):e}function su(t,e){return t?ke(t)&&ke(e)?[...new Set([...t,...e])]:zt(Object.create(null),nu(t),nu(e??{})):e}function Ym(t,e){if(!t)return e;if(!e)return t;const n=zt(Object.create(null),t);for(const i in e)n[i]=Vt(t[i],e[i]);return n}function Gd(){return{app:null,config:{isNativeTag:kp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Km=0;function Zm(t,e){return function(i,r=null){qe(i)||(i=zt({},i)),r!=null&&!pt(r)&&(r=null);const s=Gd(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:Km++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Dg,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&qe(u.install)?(o.add(u),u.install(c,...f)):qe(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,d){if(!l){const p=c._ceVNode||Be(i,r);return p.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),t(p,u,d),l=!0,c._container=u,u.__vue_app__=c,Yo(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Nn(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=br;br=c;try{return u()}finally{br=f}}};return c}}let br=null;function lo(t,e){if(Ot){let n=Ot.provides;const i=Ot.parent&&Ot.parent.provides;i===n&&(n=Ot.provides=Object.create(i)),n[t]=e}}function Jn(t,e,n=!1){const i=Ot||Dt;if(i||br){const r=br?br._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&qe(e)?e.call(i&&i.proxy):e}}const Wd={},Xd=()=>Object.create(Wd),qd=t=>Object.getPrototypeOf(t)===Wd;function Jm(t,e,n,i=!1){const r={},s=Xd();t.propsDefaults=Object.create(null),$d(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:Td(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function Qm(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=st(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if($o(t.emitsOptions,d))continue;const p=e[d];if(l)if(ot(s,d))p!==s[d]&&(s[d]=p,c=!0);else{const g=mn(d);r[g]=fl(l,a,g,p,t,!1)}else p!==s[d]&&(s[d]=p,c=!0)}}}else{$d(t,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!ot(e,f)&&((u=Ki(f))===f||!ot(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=fl(l,a,f,void 0,t,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!ot(e,f))&&(delete s[f],c=!0)}c&&qn(t.attrs,"set","")}function $d(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(rs(l))continue;const c=e[l];let u;r&&ot(r,u=mn(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:$o(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=st(n),c=a||ut;for(let u=0;u<s.length;u++){const f=s[u];n[f]=fl(r,l,f,c[f],t,!ot(c,f))}}return o}function fl(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=ot(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&qe(l)){const{propsDefaults:c}=r;if(n in c)i=c[n];else{const u=Es(r);i=c[n]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(n,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Ki(n))&&(i=!0))}return i}const eg=new WeakMap;function jd(t,e,n=!1){const i=n?eg:e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!qe(t)){const u=f=>{l=!0;const[d,p]=jd(f,e,!0);zt(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return pt(t)&&i.set(t,vr),vr;if(ke(s))for(let u=0;u<s.length;u++){const f=mn(s[u]);ou(f)&&(o[f]=ut)}else if(s)for(const u in s){const f=mn(u);if(ou(f)){const d=s[u],p=o[f]=ke(d)||qe(d)?{type:d}:zt({},d),g=p.type;let v=!1,m=!0;if(ke(g))for(let h=0;h<g.length;++h){const R=g[h],T=qe(R)&&R.name;if(T==="Boolean"){v=!0;break}else T==="String"&&(m=!1)}else v=qe(g)&&g.name==="Boolean";p[0]=v,p[1]=m,(v||ot(p,"default"))&&a.push(f)}}const c=[o,a];return pt(t)&&i.set(t,c),c}function ou(t){return t[0]!=="$"&&!rs(t)}const Yd=t=>t[0]==="_"||t==="$stable",wc=t=>ke(t)?t.map(Dn):[Dn(t)],tg=(t,e,n)=>{if(e._n)return e;const i=Le((...r)=>wc(e(...r)),n);return i._c=!1,i},Kd=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Yd(r))continue;const s=t[r];if(qe(s))e[r]=tg(r,s,i);else if(s!=null){const o=wc(s);e[r]=()=>o}}},Zd=(t,e)=>{const n=wc(e);t.slots.default=()=>n},Jd=(t,e,n)=>{for(const i in e)(n||i!=="_")&&(t[i]=e[i])},ng=(t,e,n)=>{const i=t.slots=Xd();if(t.vnode.shapeFlag&32){const r=e._;r?(Jd(i,e,n),n&&od(i,"_",r,!0)):Kd(e,i)}else e&&Zd(t,e)},ig=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=ut;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:Jd(r,e,n):(s=!e.$stable,Kd(e,r)),o=e}else e&&(Zd(t,e),o={default:1});if(s)for(const a in r)!Yd(a)&&o[a]==null&&delete r[a]},tn=_g;function rg(t){return sg(t)}function sg(t,e){const n=zo();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:p=Un,insertStaticContent:g}=t,v=(A,C,x,ne=null,j=null,W=null,Q=void 0,ue=null,K=!!C.dynamicChildren)=>{if(A===C)return;A&&!$r(A,C)&&(ne=N(A),Ue(A,j,W,!0),A=null),C.patchFlag===-2&&(K=!1,C.dynamicChildren=null);const{type:S,ref:_,shapeFlag:D}=C;switch(S){case jo:m(A,C,x,ne);break;case Cr:h(A,C,x,ne);break;case uo:A==null&&R(C,x,ne,Q);break;case Ct:ie(A,C,x,ne,j,W,Q,ue,K);break;default:D&1?I(A,C,x,ne,j,W,Q,ue,K):D&6?$(A,C,x,ne,j,W,Q,ue,K):(D&64||D&128)&&S.process(A,C,x,ne,j,W,Q,ue,K,pe)}_!=null&&j&&wo(_,A&&A.ref,W,C||A,!C)},m=(A,C,x,ne)=>{if(A==null)i(C.el=a(C.children),x,ne);else{const j=C.el=A.el;C.children!==A.children&&c(j,C.children)}},h=(A,C,x,ne)=>{A==null?i(C.el=l(C.children||""),x,ne):C.el=A.el},R=(A,C,x,ne)=>{[A.el,A.anchor]=g(A.children,C,x,ne,A.el,A.anchor)},T=({el:A,anchor:C},x,ne)=>{let j;for(;A&&A!==C;)j=d(A),i(A,x,ne),A=j;i(C,x,ne)},E=({el:A,anchor:C})=>{let x;for(;A&&A!==C;)x=d(A),r(A),A=x;r(C)},I=(A,C,x,ne,j,W,Q,ue,K)=>{C.type==="svg"?Q="svg":C.type==="math"&&(Q="mathml"),A==null?L(C,x,ne,j,W,Q,ue,K):w(A,C,j,W,Q,ue,K)},L=(A,C,x,ne,j,W,Q,ue)=>{let K,S;const{props:_,shapeFlag:D,transition:z,dirs:X}=A;if(K=A.el=o(A.type,W,_&&_.is,_),D&8?u(K,A.children):D&16&&k(A.children,K,null,ne,j,ga(A,W),Q,ue),X&&Ti(A,null,ne,"created"),P(K,A,A.scopeId,Q,ne),_){for(const _e in _)_e!=="value"&&!rs(_e)&&s(K,_e,null,_[_e],W,ne);"value"in _&&s(K,"value",null,_.value,W),(S=_.onVnodeBeforeMount)&&Rn(S,ne,A)}X&&Ti(A,null,ne,"beforeMount");const V=og(j,z);V&&z.beforeEnter(K),i(K,C,x),((S=_&&_.onVnodeMounted)||V||X)&&tn(()=>{S&&Rn(S,ne,A),V&&z.enter(K),X&&Ti(A,null,ne,"mounted")},j)},P=(A,C,x,ne,j)=>{if(x&&p(A,x),ne)for(let W=0;W<ne.length;W++)p(A,ne[W]);if(j){let W=j.subTree;if(C===W||rh(W.type)&&(W.ssContent===C||W.ssFallback===C)){const Q=j.vnode;P(A,Q,Q.scopeId,Q.slotScopeIds,j.parent)}}},k=(A,C,x,ne,j,W,Q,ue,K=0)=>{for(let S=K;S<A.length;S++){const _=A[S]=ue?di(A[S]):Dn(A[S]);v(null,_,C,x,ne,j,W,Q,ue)}},w=(A,C,x,ne,j,W,Q)=>{const ue=C.el=A.el;let{patchFlag:K,dynamicChildren:S,dirs:_}=C;K|=A.patchFlag&16;const D=A.props||ut,z=C.props||ut;let X;if(x&&wi(x,!1),(X=z.onVnodeBeforeUpdate)&&Rn(X,x,C,A),_&&Ti(C,A,x,"beforeUpdate"),x&&wi(x,!0),(D.innerHTML&&z.innerHTML==null||D.textContent&&z.textContent==null)&&u(ue,""),S?b(A.dynamicChildren,S,ue,x,ne,ga(C,j),W):Q||H(A,C,ue,null,x,ne,ga(C,j),W,!1),K>0){if(K&16)U(ue,D,z,x,j);else if(K&2&&D.class!==z.class&&s(ue,"class",null,z.class,j),K&4&&s(ue,"style",D.style,z.style,j),K&8){const V=C.dynamicProps;for(let _e=0;_e<V.length;_e++){const fe=V[_e],xe=D[fe],ze=z[fe];(ze!==xe||fe==="value")&&s(ue,fe,xe,ze,j,x)}}K&1&&A.children!==C.children&&u(ue,C.children)}else!Q&&S==null&&U(ue,D,z,x,j);((X=z.onVnodeUpdated)||_)&&tn(()=>{X&&Rn(X,x,C,A),_&&Ti(C,A,x,"updated")},ne)},b=(A,C,x,ne,j,W,Q)=>{for(let ue=0;ue<C.length;ue++){const K=A[ue],S=C[ue],_=K.el&&(K.type===Ct||!$r(K,S)||K.shapeFlag&70)?f(K.el):x;v(K,S,_,null,ne,j,W,Q,!0)}},U=(A,C,x,ne,j)=>{if(C!==x){if(C!==ut)for(const W in C)!rs(W)&&!(W in x)&&s(A,W,C[W],null,j,ne);for(const W in x){if(rs(W))continue;const Q=x[W],ue=C[W];Q!==ue&&W!=="value"&&s(A,W,ue,Q,j,ne)}"value"in x&&s(A,"value",C.value,x.value,j)}},ie=(A,C,x,ne,j,W,Q,ue,K)=>{const S=C.el=A?A.el:a(""),_=C.anchor=A?A.anchor:a("");let{patchFlag:D,dynamicChildren:z,slotScopeIds:X}=C;X&&(ue=ue?ue.concat(X):X),A==null?(i(S,x,ne),i(_,x,ne),k(C.children||[],x,_,j,W,Q,ue,K)):D>0&&D&64&&z&&A.dynamicChildren?(b(A.dynamicChildren,z,x,j,W,Q,ue),(C.key!=null||j&&C===j.subTree)&&Qd(A,C,!0)):H(A,C,x,_,j,W,Q,ue,K)},$=(A,C,x,ne,j,W,Q,ue,K)=>{C.slotScopeIds=ue,A==null?C.shapeFlag&512?j.ctx.activate(C,x,ne,Q,K):ae(C,x,ne,j,W,Q,K):le(A,C,K)},ae=(A,C,x,ne,j,W,Q)=>{const ue=A.component=bg(A,ne,j);if(Fd(A)&&(ue.ctx.renderer=pe),Tg(ue,!1,Q),ue.asyncDep){if(j&&j.registerDep(ue,J,Q),!A.el){const K=ue.subTree=Be(Cr);h(null,K,C,x)}}else J(ue,A,C,x,j,W,Q)},le=(A,C,x)=>{const ne=C.component=A.component;if(mg(A,C,x))if(ne.asyncDep&&!ne.asyncResolved){te(ne,C,x);return}else ne.next=C,ne.update();else C.el=A.el,ne.vnode=C},J=(A,C,x,ne,j,W,Q)=>{const ue=()=>{if(A.isMounted){let{next:D,bu:z,u:X,parent:V,vnode:_e}=A;{const Me=eh(A);if(Me){D&&(D.el=_e.el,te(A,D,Q)),Me.asyncDep.then(()=>{A.isUnmounted||ue()});return}}let fe=D,xe;wi(A,!1),D?(D.el=_e.el,te(A,D,Q)):D=_e,z&&ao(z),(xe=D.props&&D.props.onVnodeBeforeUpdate)&&Rn(xe,V,D,_e),wi(A,!0);const ze=lu(A),he=A.subTree;A.subTree=ze,v(he,ze,f(he.el),N(he),A,j,W),D.el=ze.el,fe===null&&gg(A,ze.el),X&&tn(X,j),(xe=D.props&&D.props.onVnodeUpdated)&&tn(()=>Rn(xe,V,D,_e),j)}else{let D;const{el:z,props:X}=C,{bm:V,m:_e,parent:fe,root:xe,type:ze}=A,he=Er(C);wi(A,!1),V&&ao(V),!he&&(D=X&&X.onVnodeBeforeMount)&&Rn(D,fe,C),wi(A,!0);{xe.ce&&xe.ce._injectChildStyle(ze);const Me=A.subTree=lu(A);v(null,Me,x,ne,A,j,W),C.el=Me.el}if(_e&&tn(_e,j),!he&&(D=X&&X.onVnodeMounted)){const Me=C;tn(()=>Rn(D,fe,Me),j)}(C.shapeFlag&256||fe&&Er(fe.vnode)&&fe.vnode.shapeFlag&256)&&A.a&&tn(A.a,j),A.isMounted=!0,C=x=ne=null}};A.scope.on();const K=A.effect=new fd(ue);A.scope.off();const S=A.update=K.run.bind(K),_=A.job=K.runIfDirty.bind(K);_.i=A,_.id=A.uid,K.scheduler=()=>bc(_),wi(A,!0),S()},te=(A,C,x)=>{C.component=A;const ne=A.vnode.props;A.vnode=C,A.next=null,Qm(A,C.props,ne,x),ig(A,C.children,x),yi(),Qc(A),Mi()},H=(A,C,x,ne,j,W,Q,ue,K=!1)=>{const S=A&&A.children,_=A?A.shapeFlag:0,D=C.children,{patchFlag:z,shapeFlag:X}=C;if(z>0){if(z&128){Ee(S,D,x,ne,j,W,Q,ue,K);return}else if(z&256){ve(S,D,x,ne,j,W,Q,ue,K);return}}X&8?(_&16&&be(S,j,W),D!==S&&u(x,D)):_&16?X&16?Ee(S,D,x,ne,j,W,Q,ue,K):be(S,j,W,!0):(_&8&&u(x,""),X&16&&k(D,x,ne,j,W,Q,ue,K))},ve=(A,C,x,ne,j,W,Q,ue,K)=>{A=A||vr,C=C||vr;const S=A.length,_=C.length,D=Math.min(S,_);let z;for(z=0;z<D;z++){const X=C[z]=K?di(C[z]):Dn(C[z]);v(A[z],X,x,null,j,W,Q,ue,K)}S>_?be(A,j,W,!0,!1,D):k(C,x,ne,j,W,Q,ue,K,D)},Ee=(A,C,x,ne,j,W,Q,ue,K)=>{let S=0;const _=C.length;let D=A.length-1,z=_-1;for(;S<=D&&S<=z;){const X=A[S],V=C[S]=K?di(C[S]):Dn(C[S]);if($r(X,V))v(X,V,x,null,j,W,Q,ue,K);else break;S++}for(;S<=D&&S<=z;){const X=A[D],V=C[z]=K?di(C[z]):Dn(C[z]);if($r(X,V))v(X,V,x,null,j,W,Q,ue,K);else break;D--,z--}if(S>D){if(S<=z){const X=z+1,V=X<_?C[X].el:ne;for(;S<=z;)v(null,C[S]=K?di(C[S]):Dn(C[S]),x,V,j,W,Q,ue,K),S++}}else if(S>z)for(;S<=D;)Ue(A[S],j,W,!0),S++;else{const X=S,V=S,_e=new Map;for(S=V;S<=z;S++){const Se=C[S]=K?di(C[S]):Dn(C[S]);Se.key!=null&&_e.set(Se.key,S)}let fe,xe=0;const ze=z-V+1;let he=!1,Me=0;const Ie=new Array(ze);for(S=0;S<ze;S++)Ie[S]=0;for(S=X;S<=D;S++){const Se=A[S];if(xe>=ze){Ue(Se,j,W,!0);continue}let Ve;if(Se.key!=null)Ve=_e.get(Se.key);else for(fe=V;fe<=z;fe++)if(Ie[fe-V]===0&&$r(Se,C[fe])){Ve=fe;break}Ve===void 0?Ue(Se,j,W,!0):(Ie[Ve-V]=S+1,Ve>=Me?Me=Ve:he=!0,v(Se,C[Ve],x,null,j,W,Q,ue,K),xe++)}const He=he?ag(Ie):vr;for(fe=He.length-1,S=ze-1;S>=0;S--){const Se=V+S,Ve=C[Se],Xe=Se+1<_?C[Se+1].el:ne;Ie[S]===0?v(null,Ve,x,Xe,j,W,Q,ue,K):he&&(fe<0||S!==He[fe]?Pe(Ve,x,Xe,2):fe--)}}},Pe=(A,C,x,ne,j=null)=>{const{el:W,type:Q,transition:ue,children:K,shapeFlag:S}=A;if(S&6){Pe(A.component.subTree,C,x,ne);return}if(S&128){A.suspense.move(C,x,ne);return}if(S&64){Q.move(A,C,x,pe);return}if(Q===Ct){i(W,C,x);for(let D=0;D<K.length;D++)Pe(K[D],C,x,ne);i(A.anchor,C,x);return}if(Q===uo){T(A,C,x);return}if(ne!==2&&S&1&&ue)if(ne===0)ue.beforeEnter(W),i(W,C,x),tn(()=>ue.enter(W),j);else{const{leave:D,delayLeave:z,afterLeave:X}=ue,V=()=>i(W,C,x),_e=()=>{D(W,()=>{V(),X&&X()})};z?z(W,V,_e):_e()}else i(W,C,x)},Ue=(A,C,x,ne=!1,j=!1)=>{const{type:W,props:Q,ref:ue,children:K,dynamicChildren:S,shapeFlag:_,patchFlag:D,dirs:z,cacheIndex:X}=A;if(D===-2&&(j=!1),ue!=null&&wo(ue,null,x,A,!0),X!=null&&(C.renderCache[X]=void 0),_&256){C.ctx.deactivate(A);return}const V=_&1&&z,_e=!Er(A);let fe;if(_e&&(fe=Q&&Q.onVnodeBeforeUnmount)&&Rn(fe,C,A),_&6)ge(A.component,x,ne);else{if(_&128){A.suspense.unmount(x,ne);return}V&&Ti(A,null,C,"beforeUnmount"),_&64?A.type.remove(A,C,x,pe,ne):S&&!S.hasOnce&&(W!==Ct||D>0&&D&64)?be(S,C,x,!1,!0):(W===Ct&&D&384||!j&&_&16)&&be(K,C,x),ne&&Je(A)}(_e&&(fe=Q&&Q.onVnodeUnmounted)||V)&&tn(()=>{fe&&Rn(fe,C,A),V&&Ti(A,null,C,"unmounted")},x)},Je=A=>{const{type:C,el:x,anchor:ne,transition:j}=A;if(C===Ct){re(x,ne);return}if(C===uo){E(A);return}const W=()=>{r(x),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(A.shapeFlag&1&&j&&!j.persisted){const{leave:Q,delayLeave:ue}=j,K=()=>Q(x,W);ue?ue(A.el,W,K):K()}else W()},re=(A,C)=>{let x;for(;A!==C;)x=d(A),r(A),A=x;r(C)},ge=(A,C,x)=>{const{bum:ne,scope:j,job:W,subTree:Q,um:ue,m:K,a:S}=A;au(K),au(S),ne&&ao(ne),j.stop(),W&&(W.flags|=8,Ue(Q,A,C,x)),ue&&tn(ue,C),tn(()=>{A.isUnmounted=!0},C),C&&C.pendingBranch&&!C.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===C.pendingId&&(C.deps--,C.deps===0&&C.resolve())},be=(A,C,x,ne=!1,j=!1,W=0)=>{for(let Q=W;Q<A.length;Q++)Ue(A[Q],C,x,ne,j)},N=A=>{if(A.shapeFlag&6)return N(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const C=d(A.anchor||A.el),x=C&&C[Rm];return x?d(x):C};let oe=!1;const se=(A,C,x)=>{A==null?C._vnode&&Ue(C._vnode,null,null,!0):v(C._vnode||null,A,C,null,null,null,x),C._vnode=A,oe||(oe=!0,Qc(),Dd(),oe=!1)},pe={p:v,um:Ue,m:Pe,r:Je,mt:ae,mc:k,pc:H,pbc:b,n:N,o:t};return{render:se,hydrate:void 0,createApp:Zm(se)}}function ga({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function wi({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function og(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Qd(t,e,n=!1){const i=t.children,r=e.children;if(ke(i)&&ke(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=di(r[s]),a.el=o.el),!n&&a.patchFlag!==-2&&Qd(o,a)),a.type===jo&&(a.el=o.el)}}function ag(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function eh(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:eh(e)}function au(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const lg=Symbol.for("v-scx"),cg=()=>Jn(lg);function co(t,e,n){return th(t,e,n)}function th(t,e,n=ut){const{immediate:i,deep:r,flush:s,once:o}=n,a=zt({},n),l=e&&i||!e&&s!=="post";let c;if(gs){if(s==="sync"){const p=cg();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Un,p.resume=Un,p.pause=Un,p}}const u=Ot;a.call=(p,g,v)=>Nn(p,u,g,v);let f=!1;s==="post"?a.scheduler=p=>{tn(p,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(p,g)=>{g?p():bc(p)}),a.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const d=bm(t,e,a);return gs&&(c?c.push(d):l&&d()),d}function ug(t,e,n){const i=this.proxy,r=Et(t)?t.includes(".")?nh(i,t):()=>i[t]:t.bind(i,i);let s;qe(e)?s=e:(s=e.handler,n=e);const o=Es(this),a=th(r,s.bind(i),n);return o(),a}function nh(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const fg=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${mn(e)}Modifiers`]||t[`${Ki(e)}Modifiers`];function dg(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||ut;let r=n;const s=e.startsWith("update:"),o=s&&fg(i,e.slice(7));o&&(o.trim&&(r=n.map(u=>Et(u)?u.trim():u)),o.number&&(r=n.map(nl)));let a,l=i[a=ua(e)]||i[a=ua(mn(e))];!l&&s&&(l=i[a=ua(Ki(e))]),l&&Nn(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Nn(c,t,6,r)}}function ih(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!qe(t)){const l=c=>{const u=ih(c,e,!0);u&&(a=!0,zt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(pt(t)&&i.set(t,null),null):(ke(s)?s.forEach(l=>o[l]=null):zt(o,s),pt(t)&&i.set(t,o),o)}function $o(t,e){return!t||!Fo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ot(t,e[0].toLowerCase()+e.slice(1))||ot(t,Ki(e))||ot(t,e))}function lu(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:p,ctx:g,inheritAttrs:v}=t,m=To(t);let h,R;try{if(n.shapeFlag&4){const E=r||i,I=E;h=Dn(c.call(I,E,u,f,p,d,g)),R=a}else{const E=e;h=Dn(E.length>1?E(f,{attrs:a,slots:o,emit:l}):E(f,null)),R=e.props?a:hg(a)}}catch(E){ls.length=0,Xo(E,t,1),h=Be(Cr)}let T=h;if(R&&v!==!1){const E=Object.keys(R),{shapeFlag:I}=T;E.length&&I&7&&(s&&E.some(dc)&&(R=pg(R,s)),T=Pr(T,R,!1,!0))}return n.dirs&&(T=Pr(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(n.dirs):n.dirs),n.transition&&Tc(T,n.transition),h=T,To(m),h}const hg=t=>{let e;for(const n in t)(n==="class"||n==="style"||Fo(n))&&((e||(e={}))[n]=t[n]);return e},pg=(t,e)=>{const n={};for(const i in t)(!dc(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function mg(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?cu(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==i[d]&&!$o(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?cu(i,o,c):!0:!!o;return!1}function cu(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!$o(n,s))return!0}return!1}function gg({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const rh=t=>t.__isSuspense;function _g(t,e){e&&e.pendingBranch?ke(t)?e.effects.push(...t):e.effects.push(t):Am(t)}const Ct=Symbol.for("v-fgt"),jo=Symbol.for("v-txt"),Cr=Symbol.for("v-cmt"),uo=Symbol.for("v-stc"),ls=[];let rn=null;function gt(t=!1){ls.push(rn=t?null:[])}function vg(){ls.pop(),rn=ls[ls.length-1]||null}let ps=1;function uu(t,e=!1){ps+=t,t<0&&rn&&e&&(rn.hasOnce=!0)}function sh(t){return t.dynamicChildren=ps>0?rn||vr:null,vg(),ps>0&&rn&&rn.push(t),t}function Wt(t,e,n,i,r,s){return sh(y(t,e,n,i,r,s,!0))}function vi(t,e,n,i,r){return sh(Be(t,e,n,i,r,!0))}function ms(t){return t?t.__v_isVNode===!0:!1}function $r(t,e){return t.type===e.type&&t.key===e.key}const oh=({key:t})=>t??null,fo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Et(t)||kt(t)||qe(t)?{i:Dt,r:t,k:e,f:!!n}:t:null);function y(t,e=null,n=null,i=0,r=null,s=t===Ct?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&oh(e),ref:e&&fo(e),scopeId:Id,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Dt};return a?(Ac(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=Et(n)?8:16),ps>0&&!o&&rn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&rn.push(l),l}const Be=xg;function xg(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===Vm)&&(t=Cr),ms(t)){const a=Pr(t,e,!0);return n&&Ac(a,n),ps>0&&!s&&rn&&(a.shapeFlag&6?rn[rn.indexOf(t)]=a:rn.push(a)),a.patchFlag=-2,a}if(Pg(t)&&(t=t.__vccOpts),e){e=Sg(e);let{class:a,style:l}=e;a&&!Et(a)&&(e.class=Ho(a)),pt(l)&&(Mc(l)&&!ke(l)&&(l=zt({},l)),e.style=mc(l))}const o=Et(t)?1:rh(t)?128:Cm(t)?64:pt(t)?4:qe(t)?2:0;return y(t,e,n,i,r,o,s,!0)}function Sg(t){return t?Mc(t)||qd(t)?zt({},t):t:null}function Pr(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=t,c=e?yg(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&oh(c),ref:e&&e.ref?n&&s?ke(s)?s.concat(fo(e)):[s,fo(e)]:fo(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ct?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Pr(t.ssContent),ssFallback:t.ssFallback&&Pr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&Tc(u,l.clone(u)),u}function de(t=" ",e=0){return Be(jo,null,t,e)}function ah(t,e){const n=Be(uo,null,t);return n.staticCount=e,n}function Dn(t){return t==null||typeof t=="boolean"?Be(Cr):ke(t)?Be(Ct,null,t.slice()):ms(t)?di(t):Be(jo,null,String(t))}function di(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Pr(t)}function Ac(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(ke(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Ac(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!qd(e)?e._ctx=Dt:r===3&&Dt&&(Dt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else qe(e)?(e={default:e,_ctx:Dt},n=32):(e=String(e),i&64?(n=16,e=[de(e)]):n=8);t.children=e,t.shapeFlag|=n}function yg(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Ho([e.class,i.class]));else if(r==="style")e.style=mc([e.style,i.style]);else if(Fo(r)){const s=e[r],o=i[r];o&&s!==o&&!(ke(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function Rn(t,e,n,i=null){Nn(t,e,7,[n,i])}const Mg=Gd();let Eg=0;function bg(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||Mg,s={uid:Eg++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Zp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:jd(i,r),emitsOptions:ih(i,r),emit:null,emitted:null,propsDefaults:ut,inheritAttrs:i.inheritAttrs,ctx:ut,data:ut,props:ut,attrs:ut,slots:ut,refs:ut,setupState:ut,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=dg.bind(null,s),t.ce&&t.ce(s),s}let Ot=null,Co,dl;{const t=zo(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Co=e("__VUE_INSTANCE_SETTERS__",n=>Ot=n),dl=e("__VUE_SSR_SETTERS__",n=>gs=n)}const Es=t=>{const e=Ot;return Co(t),t.scope.on(),()=>{t.scope.off(),Co(e)}},fu=()=>{Ot&&Ot.scope.off(),Co(null)};function lh(t){return t.vnode.shapeFlag&4}let gs=!1;function Tg(t,e=!1,n=!1){e&&dl(e);const{props:i,children:r}=t.vnode,s=lh(t);Jm(t,i,s,e),ng(t,r,n);const o=s?wg(t,e):void 0;return e&&dl(!1),o}function wg(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Wm);const{setup:i}=n;if(i){yi();const r=t.setupContext=i.length>1?Rg(t):null,s=Es(t),o=Ms(i,t,0,[t.props,r]),a=id(o);if(Mi(),s(),(a||t.sp)&&!Er(t)&&Nd(t),a){if(o.then(fu,fu),e)return o.then(l=>{du(t,l)}).catch(l=>{Xo(l,t,0)});t.asyncDep=o}else du(t,o)}else ch(t)}function du(t,e,n){qe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:pt(e)&&(t.setupState=Rd(e)),ch(t)}function ch(t,e,n){const i=t.type;t.render||(t.render=i.render||Un);{const r=Es(t);yi();try{Xm(t)}finally{Mi(),r()}}}const Ag={get(t,e){return Nt(t,"get",""),t[e]}};function Rg(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Ag),slots:t.slots,emit:t.emit,expose:e}}function Yo(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Rd(_m(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in as)return as[n](t)},has(e,n){return n in e||n in as}})):t.proxy}function Cg(t,e=!0){return qe(t)?t.displayName||t.name:t.name||e&&t.__name}function Pg(t){return qe(t)&&"__vccOpts"in t}const dn=(t,e)=>Mm(t,e,gs);function uh(t,e,n){const i=arguments.length;return i===2?pt(e)&&!ke(e)?ms(e)?Be(t,null,[e]):Be(t,e):Be(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&ms(n)&&(n=[n]),Be(t,e,n))}const Dg="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let hl;const hu=typeof window<"u"&&window.trustedTypes;if(hu)try{hl=hu.createPolicy("vue",{createHTML:t=>t})}catch{}const fh=hl?t=>hl.createHTML(t):t=>t,Lg="http://www.w3.org/2000/svg",Ig="http://www.w3.org/1998/Math/MathML",Xn=typeof document<"u"?document:null,pu=Xn&&Xn.createElement("template"),Ug={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?Xn.createElementNS(Lg,t):e==="mathml"?Xn.createElementNS(Ig,t):n?Xn.createElement(t,{is:n}):Xn.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>Xn.createTextNode(t),createComment:t=>Xn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Xn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{pu.innerHTML=fh(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=pu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Ng=Symbol("_vtc");function Fg(t,e,n){const i=t[Ng];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const mu=Symbol("_vod"),Og=Symbol("_vsh"),Bg=Symbol(""),kg=/(^|;)\s*display\s*:/;function zg(t,e,n){const i=t.style,r=Et(n);let s=!1;if(n&&!r){if(e)if(Et(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&ho(i,a,"")}else for(const o in e)n[o]==null&&ho(i,o,"");for(const o in n)o==="display"&&(s=!0),ho(i,o,n[o])}else if(r){if(e!==n){const o=i[Bg];o&&(n+=";"+o),i.cssText=n,s=kg.test(n)}}else e&&t.removeAttribute("style");mu in t&&(t[mu]=s?i.display:"",t[Og]&&(i.display="none"))}const gu=/\s*!important$/;function ho(t,e,n){if(ke(n))n.forEach(i=>ho(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=Hg(t,e);gu.test(n)?t.setProperty(Ki(i),n.replace(gu,""),"important"):t[i]=n}}const _u=["Webkit","Moz","ms"],_a={};function Hg(t,e){const n=_a[e];if(n)return n;let i=mn(e);if(i!=="filter"&&i in t)return _a[e]=i;i=ko(i);for(let r=0;r<_u.length;r++){const s=_u[r]+i;if(s in t)return _a[e]=s}return e}const vu="http://www.w3.org/1999/xlink";function xu(t,e,n,i,r,s=Yp(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(vu,e.slice(6,e.length)):t.setAttributeNS(vu,e,n):n==null||s&&!ad(n)?t.removeAttribute(e):t.setAttribute(e,s?"":Tn(n)?String(n):n)}function Su(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?fh(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=ad(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function Oi(t,e,n,i){t.addEventListener(e,n,i)}function Vg(t,e,n,i){t.removeEventListener(e,n,i)}const yu=Symbol("_vei");function Gg(t,e,n,i,r=null){const s=t[yu]||(t[yu]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=Wg(e);if(i){const c=s[e]=$g(i,r);Oi(t,a,c,l)}else o&&(Vg(t,a,o,l),s[e]=void 0)}}const Mu=/(?:Once|Passive|Capture)$/;function Wg(t){let e;if(Mu.test(t)){e={};let i;for(;i=t.match(Mu);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ki(t.slice(2)),e]}let va=0;const Xg=Promise.resolve(),qg=()=>va||(Xg.then(()=>va=0),va=Date.now());function $g(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Nn(jg(i,n.value),e,5,[i])};return n.value=t,n.attached=qg(),n}function jg(t,e){if(ke(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Eu=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Yg=(t,e,n,i,r,s)=>{const o=r==="svg";e==="class"?Fg(t,i,o):e==="style"?zg(t,n,i):Fo(e)?dc(e)||Gg(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Kg(t,e,i,o))?(Su(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&xu(t,e,i,o,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Et(i))?Su(t,mn(e),i,s,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),xu(t,e,i,o))};function Kg(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Eu(e)&&qe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Eu(e)&&Et(n)?!1:e in t}const Po=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ke(e)?n=>ao(e,n):e};function Zg(t){t.target.composing=!0}function bu(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Tr=Symbol("_assign"),Jg={created(t,{modifiers:{lazy:e,trim:n,number:i}},r){t[Tr]=Po(r);const s=i||r.props&&r.props.type==="number";Oi(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),s&&(a=nl(a)),t[Tr](a)}),n&&Oi(t,"change",()=>{t.value=t.value.trim()}),e||(Oi(t,"compositionstart",Zg),Oi(t,"compositionend",bu),Oi(t,"change",bu))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:r,number:s}},o){if(t[Tr]=Po(o),t.composing)return;const a=(s||t.type==="number")&&!/^0\d/.test(t.value)?nl(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(i&&e===n||r&&t.value.trim()===l)||(t.value=l))}},Qg={deep:!0,created(t,e,n){t[Tr]=Po(n),Oi(t,"change",()=>{const i=t._modelValue,r=e_(t),s=t.checked,o=t[Tr];if(ke(i)){const a=ld(i,r),l=a!==-1;if(s&&!l)o(i.concat(r));else if(!s&&l){const c=[...i];c.splice(a,1),o(c)}}else if(Oo(i)){const a=new Set(i);s?a.add(r):a.delete(r),o(a)}else o(dh(t,s))})},mounted:Tu,beforeUpdate(t,e,n){t[Tr]=Po(n),Tu(t,e,n)}};function Tu(t,{value:e,oldValue:n},i){t._modelValue=e;let r;if(ke(e))r=ld(e,i.props.value)>-1;else if(Oo(e))r=e.has(i.props.value);else{if(e===n)return;r=Vo(e,dh(t,!0))}t.checked!==r&&(t.checked=r)}function e_(t){return"_value"in t?t._value:t.value}function dh(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const t_=zt({patchProp:Yg},Ug);let wu;function n_(){return wu||(wu=rg(t_))}const i_=(...t)=>{const e=n_().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=s_(i);if(!r)return;const s=e._component;!qe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,r_(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function r_(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function s_(t){return Et(t)?document.querySelector(t):t}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rc="172",o_=0,Au=1,a_=2,hh=1,l_=2,Wn=3,xi=0,jt=1,jn=2,gi=0,wr=1,Ru=2,Cu=3,Pu=4,c_=5,Bi=100,u_=101,f_=102,d_=103,h_=104,p_=200,m_=201,g_=202,__=203,pl=204,ml=205,v_=206,x_=207,S_=208,y_=209,M_=210,E_=211,b_=212,T_=213,w_=214,gl=0,_l=1,vl=2,Dr=3,xl=4,Sl=5,yl=6,Ml=7,ph=0,A_=1,R_=2,_i=0,C_=1,P_=2,D_=3,L_=4,I_=5,U_=6,N_=7,mh=300,Lr=301,Ir=302,El=303,bl=304,Ko=306,Tl=1e3,zi=1001,wl=1002,bn=1003,F_=1004,Bs=1005,In=1006,xa=1007,Hi=1008,ei=1009,gh=1010,_h=1011,_s=1012,Cc=1013,$i=1014,Yn=1015,bs=1016,Pc=1017,Dc=1018,Ur=1020,vh=35902,xh=1021,Sh=1022,Mn=1023,yh=1024,Mh=1025,Ar=1026,Nr=1027,Eh=1028,Lc=1029,bh=1030,Ic=1031,Uc=1033,po=33776,mo=33777,go=33778,_o=33779,Al=35840,Rl=35841,Cl=35842,Pl=35843,Dl=36196,Ll=37492,Il=37496,Ul=37808,Nl=37809,Fl=37810,Ol=37811,Bl=37812,kl=37813,zl=37814,Hl=37815,Vl=37816,Gl=37817,Wl=37818,Xl=37819,ql=37820,$l=37821,vo=36492,jl=36494,Yl=36495,Th=36283,Kl=36284,Zl=36285,Jl=36286,O_=3200,B_=3201,k_=0,z_=1,pi="",un="srgb",Fr="srgb-linear",Do="linear",ct="srgb",Qi=7680,Du=519,H_=512,V_=513,G_=514,wh=515,W_=516,X_=517,q_=518,$_=519,Lu=35044,Iu="300 es",Kn=2e3,Lo=2001;class zr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sa=Math.PI/180,Ql=180/Math.PI;function Ts(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(It[t&255]+It[t>>8&255]+It[t>>16&255]+It[t>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[n&63|128]+It[n>>8&255]+"-"+It[n>>16&255]+It[n>>24&255]+It[i&255]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]).toLowerCase()}function Ze(t,e,n){return Math.max(e,Math.min(n,t))}function j_(t,e){return(t%e+e)%e}function ya(t,e,n){return(1-n)*t+n*e}function jr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function $t(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class ft{constructor(e=0,n=0){ft.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ze(this.x,e.x,n.x),this.y=Ze(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ze(this.x,e,n),this.y=Ze(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,n,i,r,s,o,a,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],g=i[8],v=r[0],m=r[3],h=r[6],R=r[1],T=r[4],E=r[7],I=r[2],L=r[5],P=r[8];return s[0]=o*v+a*R+l*I,s[3]=o*m+a*T+l*L,s[6]=o*h+a*E+l*P,s[1]=c*v+u*R+f*I,s[4]=c*m+u*T+f*L,s[7]=c*h+u*E+f*P,s[2]=d*v+p*R+g*I,s[5]=d*m+p*T+g*L,s[8]=d*h+p*E+g*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,p=c*s-o*l,g=n*f+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(r*c-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=d*v,e[4]=(u*n-r*l)*v,e[5]=(r*s-a*n)*v,e[6]=p*v,e[7]=(i*l-c*n)*v,e[8]=(o*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Ma.makeScale(e,n)),this}rotate(e){return this.premultiply(Ma.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ma.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ma=new Ye;function Ah(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Io(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Y_(){const t=Io("canvas");return t.style.display="block",t}const Uu={};function mr(t){t in Uu||(Uu[t]=!0,console.warn(t))}function K_(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function Z_(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function J_(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Nu=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fu=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Q_(){const t={enabled:!0,workingColorSpace:Fr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ct&&(r.r=Qn(r.r),r.g=Qn(r.g),r.b=Qn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ct&&(r.r=Rr(r.r),r.g=Rr(r.g),r.b=Rr(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===pi?Do:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Fr]:{primaries:e,whitePoint:i,transfer:Do,toXYZ:Nu,fromXYZ:Fu,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:un},outputColorSpaceConfig:{drawingBufferColorSpace:un}},[un]:{primaries:e,whitePoint:i,transfer:ct,toXYZ:Nu,fromXYZ:Fu,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:un}}}),t}const tt=Q_();function Qn(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Rr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let er;class ev{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{er===void 0&&(er=Io("canvas")),er.width=e.width,er.height=e.height;const i=er.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=er}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Io("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Qn(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Qn(n[i]/255)*255):n[i]=Qn(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let tv=0;class Rh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tv++}),this.uuid=Ts(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ea(r[o].image)):s.push(Ea(r[o]))}else s=Ea(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Ea(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?ev.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nv=0;class Yt extends zr{constructor(e=Yt.DEFAULT_IMAGE,n=Yt.DEFAULT_MAPPING,i=zi,r=zi,s=In,o=Hi,a=Mn,l=ei,c=Yt.DEFAULT_ANISOTROPY,u=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nv++}),this.uuid=Ts(),this.name="",this.source=new Rh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Tl:e.x=e.x-Math.floor(e.x);break;case zi:e.x=e.x<0?0:1;break;case wl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Tl:e.y=e.y-Math.floor(e.y);break;case zi:e.y=e.y<0?0:1;break;case wl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=mh;Yt.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,n=0,i=0,r=1){xt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],g=l[9],v=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const T=(c+1)/2,E=(p+1)/2,I=(h+1)/2,L=(u+d)/4,P=(f+v)/4,k=(g+m)/4;return T>E&&T>I?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=L/i,s=P/i):E>I?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=L/r,s=k/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=P/s,r=k/s),this.set(i,r,s,n),this}let R=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(R)<.001&&(R=1),this.x=(m-g)/R,this.y=(f-v)/R,this.z=(d-u)/R,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ze(this.x,e.x,n.x),this.y=Ze(this.y,e.y,n.y),this.z=Ze(this.z,e.z,n.z),this.w=Ze(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ze(this.x,e,n),this.y=Ze(this.y,e,n),this.z=Ze(this.z,e,n),this.w=Ze(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class iv extends zr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new xt(0,0,e,n),this.scissorTest=!1,this.viewport=new xt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Yt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const n=Object.assign({},e.texture.image);return this.texture.source=new Rh(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ji extends iv{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Ch extends Yt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class rv extends Yt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ws{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],p=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=g,e[n+3]=v;return}if(f!==v||l!==d||c!==p||u!==g){let m=1-a;const h=l*d+c*p+u*g+f*v,R=h>=0?1:-1,T=1-h*h;if(T>Number.EPSILON){const I=Math.sqrt(T),L=Math.atan2(I,h*R);m=Math.sin(m*L)/I,a=Math.sin(a*L)/I}const E=a*R;if(l=l*m+d*E,c=c*m+p*E,u=u*m+g*E,f=f*m+v*E,m===1-a){const I=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=I,c*=I,u*=I,f*=I}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+u*f+l*p-c*d,e[n+1]=l*g+u*d+c*f-a*p,e[n+2]=c*g+u*p+a*d-l*f,e[n+3]=u*g-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"YXZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"ZXY":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"ZYX":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"YZX":this._x=d*u*f+c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f-d*p*g;break;case"XZY":this._x=d*u*f-c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,n=0,i=0){Y.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Ou.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ou.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ze(this.x,e.x,n.x),this.y=Ze(this.y,e.y,n.y),this.z=Ze(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ze(this.x,e,n),this.y=Ze(this.y,e,n),this.z=Ze(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ba.copy(this).projectOnVector(e),this.sub(ba)}reflect(e){return this.sub(ba.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ba=new Y,Ou=new ws;class As{constructor(e=new Y(1/0,1/0,1/0),n=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(vn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(vn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=vn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,vn):vn.fromBufferAttribute(s,o),vn.applyMatrix4(e.matrixWorld),this.expandByPoint(vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ks.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ks.copy(i.boundingBox)),ks.applyMatrix4(e.matrixWorld),this.union(ks)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vn),vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yr),zs.subVectors(this.max,Yr),tr.subVectors(e.a,Yr),nr.subVectors(e.b,Yr),ir.subVectors(e.c,Yr),ri.subVectors(nr,tr),si.subVectors(ir,nr),Ai.subVectors(tr,ir);let n=[0,-ri.z,ri.y,0,-si.z,si.y,0,-Ai.z,Ai.y,ri.z,0,-ri.x,si.z,0,-si.x,Ai.z,0,-Ai.x,-ri.y,ri.x,0,-si.y,si.x,0,-Ai.y,Ai.x,0];return!Ta(n,tr,nr,ir,zs)||(n=[1,0,0,0,1,0,0,0,1],!Ta(n,tr,nr,ir,zs))?!1:(Hs.crossVectors(ri,si),n=[Hs.x,Hs.y,Hs.z],Ta(n,tr,nr,ir,zs))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Bn=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],vn=new Y,ks=new As,tr=new Y,nr=new Y,ir=new Y,ri=new Y,si=new Y,Ai=new Y,Yr=new Y,zs=new Y,Hs=new Y,Ri=new Y;function Ta(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Ri.fromArray(t,s);const a=r.x*Math.abs(Ri.x)+r.y*Math.abs(Ri.y)+r.z*Math.abs(Ri.z),l=e.dot(Ri),c=n.dot(Ri),u=i.dot(Ri);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const sv=new As,Kr=new Y,wa=new Y;class Zo{constructor(e=new Y,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):sv.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Kr.subVectors(e,this.center);const n=Kr.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Kr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Kr.copy(e.center).add(wa)),this.expandByPoint(Kr.copy(e.center).sub(wa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const kn=new Y,Aa=new Y,Vs=new Y,oi=new Y,Ra=new Y,Gs=new Y,Ca=new Y;class Ph{constructor(e=new Y,n=new Y(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=kn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(kn.copy(this.origin).addScaledVector(this.direction,n),kn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Aa.copy(e).add(n).multiplyScalar(.5),Vs.copy(n).sub(e).normalize(),oi.copy(this.origin).sub(Aa);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Vs),a=oi.dot(this.direction),l=-oi.dot(Vs),c=oi.lengthSq(),u=Math.abs(1-o*o);let f,d,p,g;if(u>0)if(f=o*l-a,d=o*a-l,g=s*u,f>=0)if(d>=-g)if(d<=g){const v=1/u;f*=v,d*=v,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Aa).addScaledVector(Vs,d),p}intersectSphere(e,n){kn.subVectors(e.center,this.origin);const i=kn.dot(this.direction),r=kn.dot(kn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,kn)!==null}intersectTriangle(e,n,i,r,s){Ra.subVectors(n,e),Gs.subVectors(i,e),Ca.crossVectors(Ra,Gs);let o=this.direction.dot(Ca),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;oi.subVectors(this.origin,e);const l=a*this.direction.dot(Gs.crossVectors(oi,Gs));if(l<0)return null;const c=a*this.direction.dot(Ra.cross(oi));if(c<0||l+c>o)return null;const u=-a*oi.dot(Ca);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class St{constructor(e,n,i,r,s,o,a,l,c,u,f,d,p,g,v,m){St.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,d,p,g,v,m)}set(e,n,i,r,s,o,a,l,c,u,f,d,p,g,v,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=g,h[11]=v,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new St().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/rr.setFromMatrixColumn(e,0).length(),s=1/rr.setFromMatrixColumn(e,1).length(),o=1/rr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*f,g=a*u,v=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+g*c,n[5]=d-v*c,n[9]=-a*l,n[2]=v-d*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,g=c*u,v=c*f;n[0]=d+v*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=p*a-g,n[6]=v+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,g=c*u,v=c*f;n[0]=d-v*a,n[4]=-o*f,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*u,n[9]=v-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*f,g=a*u,v=a*f;n[0]=l*u,n[4]=g*c-p,n[8]=d*c+v,n[1]=l*f,n[5]=v*c+d,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,v=a*c;n[0]=l*u,n[4]=v-d*f,n[8]=g*f+p,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*f+g,n[10]=d-v*f}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,v=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+v,n[5]=o*u,n[9]=p*f-g,n[2]=g*f-p,n[6]=a*u,n[10]=v*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ov,e,av)}lookAt(e,n,i){const r=this.elements;return Qt.subVectors(e,n),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),ai.crossVectors(i,Qt),ai.lengthSq()===0&&(Math.abs(i.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),ai.crossVectors(i,Qt)),ai.normalize(),Ws.crossVectors(Qt,ai),r[0]=ai.x,r[4]=Ws.x,r[8]=Qt.x,r[1]=ai.y,r[5]=Ws.y,r[9]=Qt.y,r[2]=ai.z,r[6]=Ws.z,r[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],g=i[2],v=i[6],m=i[10],h=i[14],R=i[3],T=i[7],E=i[11],I=i[15],L=r[0],P=r[4],k=r[8],w=r[12],b=r[1],U=r[5],ie=r[9],$=r[13],ae=r[2],le=r[6],J=r[10],te=r[14],H=r[3],ve=r[7],Ee=r[11],Pe=r[15];return s[0]=o*L+a*b+l*ae+c*H,s[4]=o*P+a*U+l*le+c*ve,s[8]=o*k+a*ie+l*J+c*Ee,s[12]=o*w+a*$+l*te+c*Pe,s[1]=u*L+f*b+d*ae+p*H,s[5]=u*P+f*U+d*le+p*ve,s[9]=u*k+f*ie+d*J+p*Ee,s[13]=u*w+f*$+d*te+p*Pe,s[2]=g*L+v*b+m*ae+h*H,s[6]=g*P+v*U+m*le+h*ve,s[10]=g*k+v*ie+m*J+h*Ee,s[14]=g*w+v*$+m*te+h*Pe,s[3]=R*L+T*b+E*ae+I*H,s[7]=R*P+T*U+E*le+I*ve,s[11]=R*k+T*ie+E*J+I*Ee,s[15]=R*w+T*$+E*te+I*Pe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],g=e[3],v=e[7],m=e[11],h=e[15];return g*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*p-i*l*p)+v*(+n*l*p-n*c*d+s*o*d-r*o*p+r*c*u-s*l*u)+m*(+n*c*f-n*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+h*(-r*a*u-n*l*f+n*a*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],g=e[12],v=e[13],m=e[14],h=e[15],R=f*m*c-v*d*c+v*l*p-a*m*p-f*l*h+a*d*h,T=g*d*c-u*m*c-g*l*p+o*m*p+u*l*h-o*d*h,E=u*v*c-g*f*c+g*a*p-o*v*p-u*a*h+o*f*h,I=g*f*l-u*v*l-g*a*d+o*v*d+u*a*m-o*f*m,L=n*R+i*T+r*E+s*I;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/L;return e[0]=R*P,e[1]=(v*d*s-f*m*s-v*r*p+i*m*p+f*r*h-i*d*h)*P,e[2]=(a*m*s-v*l*s+v*r*c-i*m*c-a*r*h+i*l*h)*P,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*p-i*l*p)*P,e[4]=T*P,e[5]=(u*m*s-g*d*s+g*r*p-n*m*p-u*r*h+n*d*h)*P,e[6]=(g*l*s-o*m*s-g*r*c+n*m*c+o*r*h-n*l*h)*P,e[7]=(o*d*s-u*l*s+u*r*c-n*d*c-o*r*p+n*l*p)*P,e[8]=E*P,e[9]=(g*f*s-u*v*s-g*i*p+n*v*p+u*i*h-n*f*h)*P,e[10]=(o*v*s-g*a*s+g*i*c-n*v*c-o*i*h+n*a*h)*P,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*p-n*a*p)*P,e[12]=I*P,e[13]=(u*v*r-g*f*r+g*i*d-n*v*d-u*i*m+n*f*m)*P,e[14]=(g*a*r-o*v*r-g*i*l+n*v*l+o*i*m-n*a*m)*P,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*d+n*a*d)*P,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,d=s*c,p=s*u,g=s*f,v=o*u,m=o*f,h=a*f,R=l*c,T=l*u,E=l*f,I=i.x,L=i.y,P=i.z;return r[0]=(1-(v+h))*I,r[1]=(p+E)*I,r[2]=(g-T)*I,r[3]=0,r[4]=(p-E)*L,r[5]=(1-(d+h))*L,r[6]=(m+R)*L,r[7]=0,r[8]=(g+T)*P,r[9]=(m-R)*P,r[10]=(1-(d+v))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=rr.set(r[0],r[1],r[2]).length();const o=rr.set(r[4],r[5],r[6]).length(),a=rr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],xn.copy(this);const c=1/s,u=1/o,f=1/a;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=u,xn.elements[5]*=u,xn.elements[6]*=u,xn.elements[8]*=f,xn.elements[9]*=f,xn.elements[10]*=f,n.setFromRotationMatrix(xn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Kn){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let p,g;if(a===Kn)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Lo)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Kn){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(o-s),d=(n+e)*c,p=(i+r)*u;let g,v;if(a===Kn)g=(o+s)*f,v=-2*f;else if(a===Lo)g=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const rr=new Y,xn=new St,ov=new Y(0,0,0),av=new Y(1,1,1),ai=new Y,Ws=new Y,Qt=new Y,Bu=new St,ku=new ws;class ti{constructor(e=0,n=0,i=0,r=ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ze(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Bu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bu,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return ku.setFromEuler(this),this.setFromQuaternion(ku,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ti.DEFAULT_ORDER="XYZ";class Dh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lv=0;const zu=new Y,sr=new ws,zn=new St,Xs=new Y,Zr=new Y,cv=new Y,uv=new ws,Hu=new Y(1,0,0),Vu=new Y(0,1,0),Gu=new Y(0,0,1),Wu={type:"added"},fv={type:"removed"},or={type:"childadded",child:null},Pa={type:"childremoved",child:null};class Kt extends zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lv++}),this.uuid=Ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kt.DEFAULT_UP.clone();const e=new Y,n=new ti,i=new ws,r=new Y(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new St},normalMatrix:{value:new Ye}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=Kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return sr.setFromAxisAngle(e,n),this.quaternion.multiply(sr),this}rotateOnWorldAxis(e,n){return sr.setFromAxisAngle(e,n),this.quaternion.premultiply(sr),this}rotateX(e){return this.rotateOnAxis(Hu,e)}rotateY(e){return this.rotateOnAxis(Vu,e)}rotateZ(e){return this.rotateOnAxis(Gu,e)}translateOnAxis(e,n){return zu.copy(e).applyQuaternion(this.quaternion),this.position.add(zu.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Hu,e)}translateY(e){return this.translateOnAxis(Vu,e)}translateZ(e){return this.translateOnAxis(Gu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Xs.copy(e):Xs.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(Zr,Xs,this.up):zn.lookAt(Xs,Zr,this.up),this.quaternion.setFromRotationMatrix(zn),r&&(zn.extractRotation(r.matrixWorld),sr.setFromRotationMatrix(zn),this.quaternion.premultiply(sr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wu),or.child=e,this.dispatchEvent(or),or.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(fv),Pa.child=e,this.dispatchEvent(Pa),Pa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wu),or.child=e,this.dispatchEvent(or),or.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,e,cv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,uv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Kt.DEFAULT_UP=new Y(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Sn=new Y,Hn=new Y,Da=new Y,Vn=new Y,ar=new Y,lr=new Y,Xu=new Y,La=new Y,Ia=new Y,Ua=new Y,Na=new xt,Fa=new xt,Oa=new xt;class yn{constructor(e=new Y,n=new Y,i=new Y){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Sn.subVectors(e,n),r.cross(Sn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Sn.subVectors(r,n),Hn.subVectors(i,n),Da.subVectors(e,n);const o=Sn.dot(Sn),a=Sn.dot(Hn),l=Sn.dot(Da),c=Hn.dot(Hn),u=Hn.dot(Da),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Vn.x),l.addScaledVector(o,Vn.y),l.addScaledVector(a,Vn.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Na.setScalar(0),Fa.setScalar(0),Oa.setScalar(0),Na.fromBufferAttribute(e,n),Fa.fromBufferAttribute(e,i),Oa.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Na,s.x),o.addScaledVector(Fa,s.y),o.addScaledVector(Oa,s.z),o}static isFrontFacing(e,n,i,r){return Sn.subVectors(i,n),Hn.subVectors(e,n),Sn.cross(Hn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Sn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),Sn.cross(Hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return yn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return yn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;ar.subVectors(r,i),lr.subVectors(s,i),La.subVectors(e,i);const l=ar.dot(La),c=lr.dot(La);if(l<=0&&c<=0)return n.copy(i);Ia.subVectors(e,r);const u=ar.dot(Ia),f=lr.dot(Ia);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(ar,o);Ua.subVectors(e,s);const p=ar.dot(Ua),g=lr.dot(Ua);if(g>=0&&p<=g)return n.copy(s);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(lr,a);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return Xu.subVectors(s,r),a=(f-u)/(f-u+(p-g)),n.copy(r).addScaledVector(Xu,a);const h=1/(m+v+d);return o=v*h,a=d*h,n.copy(i).addScaledVector(ar,o).addScaledVector(lr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Lh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},qs={h:0,s:0,l:0};function Ba(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class lt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=tt.workingColorSpace){return this.r=e,this.g=n,this.b=i,tt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=tt.workingColorSpace){if(e=j_(e,1),n=Ze(n,0,1),i=Ze(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Ba(o,s,e+1/3),this.g=Ba(o,s,e),this.b=Ba(o,s,e-1/3)}return tt.toWorkingColorSpace(this,r),this}setStyle(e,n=un){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=un){const i=Lh[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qn(e.r),this.g=Qn(e.g),this.b=Qn(e.b),this}copyLinearToSRGB(e){return this.r=Rr(e.r),this.g=Rr(e.g),this.b=Rr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=un){return tt.fromWorkingColorSpace(Ut.copy(this),e),Math.round(Ze(Ut.r*255,0,255))*65536+Math.round(Ze(Ut.g*255,0,255))*256+Math.round(Ze(Ut.b*255,0,255))}getHexString(e=un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=tt.workingColorSpace){tt.fromWorkingColorSpace(Ut.copy(this),n);const i=Ut.r,r=Ut.g,s=Ut.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=tt.workingColorSpace){return tt.fromWorkingColorSpace(Ut.copy(this),n),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=un){tt.fromWorkingColorSpace(Ut.copy(this),e);const n=Ut.r,i=Ut.g,r=Ut.b;return e!==un?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(li),this.setHSL(li.h+e,li.s+n,li.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(li),e.getHSL(qs);const i=ya(li.h,qs.h,n),r=ya(li.s,qs.s,n),s=ya(li.l,qs.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ut=new lt;lt.NAMES=Lh;let dv=0;class Rs extends zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dv++}),this.uuid=Ts(),this.name="",this.type="Material",this.blending=wr,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pl,this.blendDst=ml,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Du,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qi,this.stencilZFail=Qi,this.stencilZPass=Qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==wr&&(i.blending=this.blending),this.side!==xi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==pl&&(i.blendSrc=this.blendSrc),this.blendDst!==ml&&(i.blendDst=this.blendDst),this.blendEquation!==Bi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Dr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Du&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Qi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Qi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ih extends Rs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=ph,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new Y,$s=new ft;class pn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Lu,this.updateRanges=[],this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)$s.fromBufferAttribute(this,n),$s.applyMatrix3(e),this.setXY(n,$s.x,$s.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix3(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix4(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyNormalMatrix(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.transformDirection(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=jr(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=$t(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=jr(n,this.array)),n}setX(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=jr(n,this.array)),n}setY(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=jr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=jr(n,this.array)),n}setW(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),i=$t(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),i=$t(i,this.array),r=$t(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),i=$t(i,this.array),r=$t(r,this.array),s=$t(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Lu&&(e.usage=this.usage),e}}class Uh extends pn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Nh extends pn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Wi extends pn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let hv=0;const cn=new St,ka=new Kt,cr=new Y,en=new As,Jr=new As,Rt=new Y;class ii extends zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hv++}),this.uuid=Ts(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ah(e)?Nh:Uh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ye().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,n,i){return cn.makeTranslation(e,n,i),this.applyMatrix4(cn),this}scale(e,n,i){return cn.makeScale(e,n,i),this.applyMatrix4(cn),this}lookAt(e){return ka.lookAt(e),ka.updateMatrix(),this.applyMatrix4(ka.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cr).negate(),this.translate(cr.x,cr.y,cr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Wi(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new As);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];en.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(en.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Jr.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(en.min,Jr.min),en.expandByPoint(Rt),Rt.addVectors(en.max,Jr.max),en.expandByPoint(Rt)):(en.expandByPoint(Jr.min),en.expandByPoint(Jr.max))}en.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Rt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Rt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Rt.fromBufferAttribute(a,c),l&&(cr.fromBufferAttribute(e,c),Rt.add(cr)),r=Math.max(r,i.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let k=0;k<i.count;k++)a[k]=new Y,l[k]=new Y;const c=new Y,u=new Y,f=new Y,d=new ft,p=new ft,g=new ft,v=new Y,m=new Y;function h(k,w,b){c.fromBufferAttribute(i,k),u.fromBufferAttribute(i,w),f.fromBufferAttribute(i,b),d.fromBufferAttribute(s,k),p.fromBufferAttribute(s,w),g.fromBufferAttribute(s,b),u.sub(c),f.sub(c),p.sub(d),g.sub(d);const U=1/(p.x*g.y-g.x*p.y);isFinite(U)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(U),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(U),a[k].add(v),a[w].add(v),a[b].add(v),l[k].add(m),l[w].add(m),l[b].add(m))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let k=0,w=R.length;k<w;++k){const b=R[k],U=b.start,ie=b.count;for(let $=U,ae=U+ie;$<ae;$+=3)h(e.getX($+0),e.getX($+1),e.getX($+2))}const T=new Y,E=new Y,I=new Y,L=new Y;function P(k){I.fromBufferAttribute(r,k),L.copy(I);const w=a[k];T.copy(w),T.sub(I.multiplyScalar(I.dot(w))).normalize(),E.crossVectors(L,w);const U=E.dot(l[k])<0?-1:1;o.setXYZW(k,T.x,T.y,T.z,U)}for(let k=0,w=R.length;k<w;++k){const b=R[k],U=b.start,ie=b.count;for(let $=U,ae=U+ie;$<ae;$+=3)P(e.getX($+0)),P(e.getX($+1)),P(e.getX($+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new pn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new Y,s=new Y,o=new Y,a=new Y,l=new Y,c=new Y,u=new Y,f=new Y;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,v),o.fromBufferAttribute(n,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Rt.fromBufferAttribute(e,n),Rt.normalize(),e.setXYZ(n,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let h=0;h<u;h++)d[g++]=c[p++]}return new pn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ii,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qu=new St,Ci=new Ph,js=new Zo,$u=new Y,Ys=new Y,Ks=new Y,Zs=new Y,za=new Y,Js=new Y,ju=new Y,Qs=new Y;class Zn extends Kt{constructor(e=new ii,n=new Ih){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Js.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(za.fromBufferAttribute(f,e),o?Js.addScaledVector(za,u):Js.addScaledVector(za.sub(n),u))}n.add(Js)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),js.copy(i.boundingSphere),js.applyMatrix4(s),Ci.copy(e.ray).recast(e.near),!(js.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere(js,$u)===null||Ci.origin.distanceToSquared($u)>(e.far-e.near)**2))&&(qu.copy(s).invert(),Ci.copy(e.ray).applyMatrix4(qu),!(i.boundingBox!==null&&Ci.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ci)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],h=o[m.materialIndex],R=Math.max(m.start,p.start),T=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let E=R,I=T;E<I;E+=3){const L=a.getX(E),P=a.getX(E+1),k=a.getX(E+2);r=eo(this,h,e,i,c,u,f,L,P,k),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,h=v;m<h;m+=3){const R=a.getX(m),T=a.getX(m+1),E=a.getX(m+2);r=eo(this,o,e,i,c,u,f,R,T,E),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],h=o[m.materialIndex],R=Math.max(m.start,p.start),T=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let E=R,I=T;E<I;E+=3){const L=E,P=E+1,k=E+2;r=eo(this,h,e,i,c,u,f,L,P,k),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,h=v;m<h;m+=3){const R=m,T=m+1,E=m+2;r=eo(this,o,e,i,c,u,f,R,T,E),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function pv(t,e,n,i,r,s,o,a){let l;if(e.side===jt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===xi,a),l===null)return null;Qs.copy(a),Qs.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Qs);return c<n.near||c>n.far?null:{distance:c,point:Qs.clone(),object:t}}function eo(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Ys),t.getVertexPosition(l,Ks),t.getVertexPosition(c,Zs);const u=pv(t,e,n,i,Ys,Ks,Zs,ju);if(u){const f=new Y;yn.getBarycoord(ju,Ys,Ks,Zs,f),r&&(u.uv=yn.getInterpolatedAttribute(r,a,l,c,f,new ft)),s&&(u.uv1=yn.getInterpolatedAttribute(s,a,l,c,f,new ft)),o&&(u.normal=yn.getInterpolatedAttribute(o,a,l,c,f,new Y),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new Y,materialIndex:0};yn.getNormal(Ys,Ks,Zs,d.normal),u.face=d,u.barycoord=f}return u}class Cs extends ii{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Wi(c,3)),this.setAttribute("normal",new Wi(u,3)),this.setAttribute("uv",new Wi(f,2));function g(v,m,h,R,T,E,I,L,P,k,w){const b=E/P,U=I/k,ie=E/2,$=I/2,ae=L/2,le=P+1,J=k+1;let te=0,H=0;const ve=new Y;for(let Ee=0;Ee<J;Ee++){const Pe=Ee*U-$;for(let Ue=0;Ue<le;Ue++){const Je=Ue*b-ie;ve[v]=Je*R,ve[m]=Pe*T,ve[h]=ae,c.push(ve.x,ve.y,ve.z),ve[v]=0,ve[m]=0,ve[h]=L>0?1:-1,u.push(ve.x,ve.y,ve.z),f.push(Ue/P),f.push(1-Ee/k),te+=1}}for(let Ee=0;Ee<k;Ee++)for(let Pe=0;Pe<P;Pe++){const Ue=d+Pe+le*Ee,Je=d+Pe+le*(Ee+1),re=d+(Pe+1)+le*(Ee+1),ge=d+(Pe+1)+le*Ee;l.push(Ue,Je,ge),l.push(Je,re,ge),H+=6}a.addGroup(p,H,w),p+=H,d+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Or(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Gt(t){const e={};for(let n=0;n<t.length;n++){const i=Or(t[n]);for(const r in i)e[r]=i[r]}return e}function mv(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Fh(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const gv={clone:Or,merge:Gt};var _v=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Si extends Rs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_v,this.fragmentShader=vv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Or(e.uniforms),this.uniformsGroups=mv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Oh extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=Kn}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ci=new Y,Yu=new ft,Ku=new ft;class fn extends Oh{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ql*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ql*2*Math.atan(Math.tan(Sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ci.x,ci.y).multiplyScalar(-e/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ci.x,ci.y).multiplyScalar(-e/ci.z)}getViewSize(e,n){return this.getViewBounds(e,Yu,Ku),n.subVectors(Ku,Yu)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Sa*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ur=-90,fr=1;class xv extends Kt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new fn(ur,fr,e,n);r.layers=this.layers,this.add(r);const s=new fn(ur,fr,e,n);s.layers=this.layers,this.add(s);const o=new fn(ur,fr,e,n);o.layers=this.layers,this.add(o);const a=new fn(ur,fr,e,n);a.layers=this.layers,this.add(a);const l=new fn(ur,fr,e,n);l.layers=this.layers,this.add(l);const c=new fn(ur,fr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Kn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Lo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Bh extends Yt{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Lr,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Sv extends ji{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Bh(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:In}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Cs(5,5,5),s=new Si({name:"CubemapFromEquirect",uniforms:Or(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:jt,blending:gi});s.uniforms.tEquirect.value=n;const o=new Zn(r,s),a=n.minFilter;return n.minFilter===Hi&&(n.minFilter=In),new xv(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class yv extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ti,this.environmentIntensity=1,this.environmentRotation=new ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Ha=new Y,Mv=new Y,Ev=new Ye;class Ui{constructor(e=new Y(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Ha.subVectors(i,n).cross(Mv.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Ha),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Ev.getNormalMatrix(e),r=this.coplanarPoint(Ha).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pi=new Zo,to=new Y;class kh{constructor(e=new Ui,n=new Ui,i=new Ui,r=new Ui,s=new Ui,o=new Ui){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Kn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],p=r[8],g=r[9],v=r[10],m=r[11],h=r[12],R=r[13],T=r[14],E=r[15];if(i[0].setComponents(l-s,d-c,m-p,E-h).normalize(),i[1].setComponents(l+s,d+c,m+p,E+h).normalize(),i[2].setComponents(l+o,d+u,m+g,E+R).normalize(),i[3].setComponents(l-o,d-u,m-g,E-R).normalize(),i[4].setComponents(l-a,d-f,m-v,E-T).normalize(),n===Kn)i[5].setComponents(l+a,d+f,m+v,E+T).normalize();else if(n===Lo)i[5].setComponents(a,f,v,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Pi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(e){return Pi.center.set(0,0,0),Pi.radius=.7071067811865476,Pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(to.x=r.normal.x>0?e.max.x:e.min.x,to.y=r.normal.y>0?e.max.y:e.min.y,to.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(to)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class zh extends Rs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Zu=new St,ec=new Ph,no=new Zo,io=new Y;class bv extends Kt{constructor(e=new ii,n=new zh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),no.copy(i.boundingSphere),no.applyMatrix4(r),no.radius+=s,e.ray.intersectsSphere(no)===!1)return;Zu.copy(r).invert(),ec.copy(e.ray).applyMatrix4(Zu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,v=p;g<v;g++){const m=c.getX(g);io.fromBufferAttribute(f,m),Ju(io,m,l,r,e,n,this)}}else{const d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=d,v=p;g<v;g++)io.fromBufferAttribute(f,g),Ju(io,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ju(t,e,n,i,r,s,o){const a=ec.distanceSqToPoint(t);if(a<n){const l=new Y;ec.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class ns extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Hh extends Yt{constructor(e,n,i,r,s,o,a,l,c,u=Ar){if(u!==Ar&&u!==Nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ar&&(i=$i),i===void 0&&u===Nr&&(i=Ur),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:bn,this.minFilter=l!==void 0?l:bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Jo extends ii{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=n/l,p=[],g=[],v=[],m=[];for(let h=0;h<u;h++){const R=h*d-o;for(let T=0;T<c;T++){const E=T*f-s;g.push(E,-R,0),v.push(0,0,1),m.push(T/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let R=0;R<a;R++){const T=R+c*h,E=R+c*(h+1),I=R+1+c*(h+1),L=R+1+c*h;p.push(T,E,L),p.push(E,I,L)}this.setIndex(p),this.setAttribute("position",new Wi(g,3)),this.setAttribute("normal",new Wi(v,3)),this.setAttribute("uv",new Wi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Tv extends Rs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=O_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class wv extends Rs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Av extends Oh{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Rv extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}function Qu(t,e,n,i){const r=Cv(i);switch(n){case xh:return t*e;case yh:return t*e;case Mh:return t*e*2;case Eh:return t*e/r.components*r.byteLength;case Lc:return t*e/r.components*r.byteLength;case bh:return t*e*2/r.components*r.byteLength;case Ic:return t*e*2/r.components*r.byteLength;case Sh:return t*e*3/r.components*r.byteLength;case Mn:return t*e*4/r.components*r.byteLength;case Uc:return t*e*4/r.components*r.byteLength;case po:case mo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case go:case _o:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Rl:case Pl:return Math.max(t,16)*Math.max(e,8)/4;case Al:case Cl:return Math.max(t,8)*Math.max(e,8)/2;case Dl:case Ll:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Il:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ul:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Nl:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Fl:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Ol:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Bl:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case kl:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case zl:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Hl:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Vl:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Gl:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Wl:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Xl:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case ql:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case $l:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case vo:case jl:case Yl:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Th:case Kl:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Zl:case Jl:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Cv(t){switch(t){case ei:case gh:return{byteLength:1,components:1};case _s:case _h:case bs:return{byteLength:2,components:1};case Pc:case Dc:return{byteLength:2,components:4};case $i:case Cc:case Yn:return{byteLength:4,components:1};case vh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rc);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Vh(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Pv(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<f.length;p++){const g=f[d],v=f[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,f[d]=v)}f.length=d+1;for(let p=0,g=f.length;p<g;p++){const v=f[p];t.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Dv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lv=`#ifdef USE_ALPHAHASH
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
#endif`,Iv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Uv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ov=`#ifdef USE_AOMAP
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
#endif`,Bv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,zv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wv=`#ifdef USE_IRIDESCENCE
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
#endif`,Xv=`#ifdef USE_BUMPMAP
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
#endif`,qv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$v=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Qv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,e0=`#define PI 3.141592653589793
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
} // validated`,t0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,n0=`vec3 transformedNormal = objectNormal;
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
#endif`,i0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,r0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,s0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,o0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,a0="gl_FragColor = linearToOutputTexel( gl_FragColor );",l0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,c0=`#ifdef USE_ENVMAP
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
#endif`,u0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,f0=`#ifdef USE_ENVMAP
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
#endif`,d0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,h0=`#ifdef USE_ENVMAP
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
#endif`,p0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,m0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,g0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,v0=`#ifdef USE_GRADIENTMAP
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
}`,x0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,S0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,y0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,M0=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,E0=`#ifdef USE_ENVMAP
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
#endif`,b0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,T0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,w0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,A0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,R0=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,C0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,P0=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,D0=`#if defined( RE_IndirectDiffuse )
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
#endif`,L0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,I0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,U0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,N0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,F0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,O0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,B0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,k0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,z0=`#if defined( USE_POINTS_UV )
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
#endif`,H0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,V0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,G0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,W0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,X0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,q0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
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
#endif`,$0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,j0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Y0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,K0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,J0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Q0=`#ifdef USE_NORMALMAP
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
#endif`,ex=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ix=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,ox=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ax=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ux=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,hx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,px=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_x=`#ifdef USE_SKINNING
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
#endif`,vx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xx=`#ifdef USE_SKINNING
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
#endif`,Sx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ex=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,bx=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Tx=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,wx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Px=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dx=`uniform sampler2D t2D;
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
}`,Lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ix=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fx=`#include <common>
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
}`,Ox=`#if DEPTH_PACKING == 3200
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Bx=`#define DISTANCE
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
}`,kx=`#define DISTANCE
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
}`,zx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vx=`uniform float scale;
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
}`,Gx=`uniform vec3 diffuse;
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
}`,Wx=`#include <common>
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
}`,Xx=`uniform vec3 diffuse;
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
}`,qx=`#define LAMBERT
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
}`,$x=`#define LAMBERT
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
}`,jx=`#define MATCAP
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
}`,Yx=`#define MATCAP
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
}`,Kx=`#define NORMAL
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
}`,Zx=`#define NORMAL
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
}`,Jx=`#define PHONG
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
}`,Qx=`#define PHONG
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
}`,eS=`#define STANDARD
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
}`,tS=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
}`,nS=`#define TOON
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
}`,iS=`#define TOON
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
}`,rS=`uniform float size;
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
}`,sS=`uniform vec3 diffuse;
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
}`,oS=`#include <common>
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
}`,aS=`uniform vec3 color;
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
}`,lS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,cS=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:Dv,alphahash_pars_fragment:Lv,alphamap_fragment:Iv,alphamap_pars_fragment:Uv,alphatest_fragment:Nv,alphatest_pars_fragment:Fv,aomap_fragment:Ov,aomap_pars_fragment:Bv,batching_pars_vertex:kv,batching_vertex:zv,begin_vertex:Hv,beginnormal_vertex:Vv,bsdfs:Gv,iridescence_fragment:Wv,bumpmap_pars_fragment:Xv,clipping_planes_fragment:qv,clipping_planes_pars_fragment:$v,clipping_planes_pars_vertex:jv,clipping_planes_vertex:Yv,color_fragment:Kv,color_pars_fragment:Zv,color_pars_vertex:Jv,color_vertex:Qv,common:e0,cube_uv_reflection_fragment:t0,defaultnormal_vertex:n0,displacementmap_pars_vertex:i0,displacementmap_vertex:r0,emissivemap_fragment:s0,emissivemap_pars_fragment:o0,colorspace_fragment:a0,colorspace_pars_fragment:l0,envmap_fragment:c0,envmap_common_pars_fragment:u0,envmap_pars_fragment:f0,envmap_pars_vertex:d0,envmap_physical_pars_fragment:E0,envmap_vertex:h0,fog_vertex:p0,fog_pars_vertex:m0,fog_fragment:g0,fog_pars_fragment:_0,gradientmap_pars_fragment:v0,lightmap_pars_fragment:x0,lights_lambert_fragment:S0,lights_lambert_pars_fragment:y0,lights_pars_begin:M0,lights_toon_fragment:b0,lights_toon_pars_fragment:T0,lights_phong_fragment:w0,lights_phong_pars_fragment:A0,lights_physical_fragment:R0,lights_physical_pars_fragment:C0,lights_fragment_begin:P0,lights_fragment_maps:D0,lights_fragment_end:L0,logdepthbuf_fragment:I0,logdepthbuf_pars_fragment:U0,logdepthbuf_pars_vertex:N0,logdepthbuf_vertex:F0,map_fragment:O0,map_pars_fragment:B0,map_particle_fragment:k0,map_particle_pars_fragment:z0,metalnessmap_fragment:H0,metalnessmap_pars_fragment:V0,morphinstance_vertex:G0,morphcolor_vertex:W0,morphnormal_vertex:X0,morphtarget_pars_vertex:q0,morphtarget_vertex:$0,normal_fragment_begin:j0,normal_fragment_maps:Y0,normal_pars_fragment:K0,normal_pars_vertex:Z0,normal_vertex:J0,normalmap_pars_fragment:Q0,clearcoat_normal_fragment_begin:ex,clearcoat_normal_fragment_maps:tx,clearcoat_pars_fragment:nx,iridescence_pars_fragment:ix,opaque_fragment:rx,packing:sx,premultiplied_alpha_fragment:ox,project_vertex:ax,dithering_fragment:lx,dithering_pars_fragment:cx,roughnessmap_fragment:ux,roughnessmap_pars_fragment:fx,shadowmap_pars_fragment:dx,shadowmap_pars_vertex:hx,shadowmap_vertex:px,shadowmask_pars_fragment:mx,skinbase_vertex:gx,skinning_pars_vertex:_x,skinning_vertex:vx,skinnormal_vertex:xx,specularmap_fragment:Sx,specularmap_pars_fragment:yx,tonemapping_fragment:Mx,tonemapping_pars_fragment:Ex,transmission_fragment:bx,transmission_pars_fragment:Tx,uv_pars_fragment:wx,uv_pars_vertex:Ax,uv_vertex:Rx,worldpos_vertex:Cx,background_vert:Px,background_frag:Dx,backgroundCube_vert:Lx,backgroundCube_frag:Ix,cube_vert:Ux,cube_frag:Nx,depth_vert:Fx,depth_frag:Ox,distanceRGBA_vert:Bx,distanceRGBA_frag:kx,equirect_vert:zx,equirect_frag:Hx,linedashed_vert:Vx,linedashed_frag:Gx,meshbasic_vert:Wx,meshbasic_frag:Xx,meshlambert_vert:qx,meshlambert_frag:$x,meshmatcap_vert:jx,meshmatcap_frag:Yx,meshnormal_vert:Kx,meshnormal_frag:Zx,meshphong_vert:Jx,meshphong_frag:Qx,meshphysical_vert:eS,meshphysical_frag:tS,meshtoon_vert:nS,meshtoon_frag:iS,points_vert:rS,points_frag:sS,shadow_vert:oS,shadow_frag:aS,sprite_vert:lS,sprite_frag:cS},ye={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Ln={basic:{uniforms:Gt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Gt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new lt(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Gt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Gt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Gt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new lt(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Gt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Gt([ye.points,ye.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Gt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Gt([ye.common,ye.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Gt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Gt([ye.sprite,ye.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:Gt([ye.common,ye.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:Gt([ye.lights,ye.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Ln.physical={uniforms:Gt([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const ro={r:0,b:0,g:0},Di=new ti,uS=new St;function fS(t,e,n,i,r,s,o){const a=new lt(0);let l=s===!0?0:1,c,u,f=null,d=0,p=null;function g(T){let E=T.isScene===!0?T.background:null;return E&&E.isTexture&&(E=(T.backgroundBlurriness>0?n:e).get(E)),E}function v(T){let E=!1;const I=g(T);I===null?h(a,l):I&&I.isColor&&(h(I,1),E=!0);const L=t.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(T,E){const I=g(E);I&&(I.isCubeTexture||I.mapping===Ko)?(u===void 0&&(u=new Zn(new Cs(1,1,1),new Si({name:"BackgroundCubeMaterial",uniforms:Or(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,P,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Di.copy(E.backgroundRotation),Di.x*=-1,Di.y*=-1,Di.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),u.material.uniforms.envMap.value=I,u.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(uS.makeRotationFromEuler(Di)),u.material.toneMapped=tt.getTransfer(I.colorSpace)!==ct,(f!==I||d!==I.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=I,d=I.version,p=t.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):I&&I.isTexture&&(c===void 0&&(c=new Zn(new Jo(2,2),new Si({name:"BackgroundMaterial",uniforms:Or(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=I,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=tt.getTransfer(I.colorSpace)!==ct,I.matrixAutoUpdate===!0&&I.updateMatrix(),c.material.uniforms.uvTransform.value.copy(I.matrix),(f!==I||d!==I.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=I,d=I.version,p=t.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function h(T,E){T.getRGB(ro,Fh(t)),i.buffers.color.setClear(ro.r,ro.g,ro.b,E,o)}function R(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(T,E=1){a.set(T),l=E,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,h(a,l)},render:v,addToRenderList:m,dispose:R}}function dS(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(b,U,ie,$,ae){let le=!1;const J=f($,ie,U);s!==J&&(s=J,c(s.object)),le=p(b,$,ie,ae),le&&g(b,$,ie,ae),ae!==null&&e.update(ae,t.ELEMENT_ARRAY_BUFFER),(le||o)&&(o=!1,E(b,U,ie,$),ae!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(ae).buffer))}function l(){return t.createVertexArray()}function c(b){return t.bindVertexArray(b)}function u(b){return t.deleteVertexArray(b)}function f(b,U,ie){const $=ie.wireframe===!0;let ae=i[b.id];ae===void 0&&(ae={},i[b.id]=ae);let le=ae[U.id];le===void 0&&(le={},ae[U.id]=le);let J=le[$];return J===void 0&&(J=d(l()),le[$]=J),J}function d(b){const U=[],ie=[],$=[];for(let ae=0;ae<n;ae++)U[ae]=0,ie[ae]=0,$[ae]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:ie,attributeDivisors:$,object:b,attributes:{},index:null}}function p(b,U,ie,$){const ae=s.attributes,le=U.attributes;let J=0;const te=ie.getAttributes();for(const H in te)if(te[H].location>=0){const Ee=ae[H];let Pe=le[H];if(Pe===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(Pe=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(Pe=b.instanceColor)),Ee===void 0||Ee.attribute!==Pe||Pe&&Ee.data!==Pe.data)return!0;J++}return s.attributesNum!==J||s.index!==$}function g(b,U,ie,$){const ae={},le=U.attributes;let J=0;const te=ie.getAttributes();for(const H in te)if(te[H].location>=0){let Ee=le[H];Ee===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(Ee=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(Ee=b.instanceColor));const Pe={};Pe.attribute=Ee,Ee&&Ee.data&&(Pe.data=Ee.data),ae[H]=Pe,J++}s.attributes=ae,s.attributesNum=J,s.index=$}function v(){const b=s.newAttributes;for(let U=0,ie=b.length;U<ie;U++)b[U]=0}function m(b){h(b,0)}function h(b,U){const ie=s.newAttributes,$=s.enabledAttributes,ae=s.attributeDivisors;ie[b]=1,$[b]===0&&(t.enableVertexAttribArray(b),$[b]=1),ae[b]!==U&&(t.vertexAttribDivisor(b,U),ae[b]=U)}function R(){const b=s.newAttributes,U=s.enabledAttributes;for(let ie=0,$=U.length;ie<$;ie++)U[ie]!==b[ie]&&(t.disableVertexAttribArray(ie),U[ie]=0)}function T(b,U,ie,$,ae,le,J){J===!0?t.vertexAttribIPointer(b,U,ie,ae,le):t.vertexAttribPointer(b,U,ie,$,ae,le)}function E(b,U,ie,$){v();const ae=$.attributes,le=ie.getAttributes(),J=U.defaultAttributeValues;for(const te in le){const H=le[te];if(H.location>=0){let ve=ae[te];if(ve===void 0&&(te==="instanceMatrix"&&b.instanceMatrix&&(ve=b.instanceMatrix),te==="instanceColor"&&b.instanceColor&&(ve=b.instanceColor)),ve!==void 0){const Ee=ve.normalized,Pe=ve.itemSize,Ue=e.get(ve);if(Ue===void 0)continue;const Je=Ue.buffer,re=Ue.type,ge=Ue.bytesPerElement,be=re===t.INT||re===t.UNSIGNED_INT||ve.gpuType===Cc;if(ve.isInterleavedBufferAttribute){const N=ve.data,oe=N.stride,se=ve.offset;if(N.isInstancedInterleavedBuffer){for(let pe=0;pe<H.locationSize;pe++)h(H.location+pe,N.meshPerAttribute);b.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let pe=0;pe<H.locationSize;pe++)m(H.location+pe);t.bindBuffer(t.ARRAY_BUFFER,Je);for(let pe=0;pe<H.locationSize;pe++)T(H.location+pe,Pe/H.locationSize,re,Ee,oe*ge,(se+Pe/H.locationSize*pe)*ge,be)}else{if(ve.isInstancedBufferAttribute){for(let N=0;N<H.locationSize;N++)h(H.location+N,ve.meshPerAttribute);b.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let N=0;N<H.locationSize;N++)m(H.location+N);t.bindBuffer(t.ARRAY_BUFFER,Je);for(let N=0;N<H.locationSize;N++)T(H.location+N,Pe/H.locationSize,re,Ee,Pe*ge,Pe/H.locationSize*N*ge,be)}}else if(J!==void 0){const Ee=J[te];if(Ee!==void 0)switch(Ee.length){case 2:t.vertexAttrib2fv(H.location,Ee);break;case 3:t.vertexAttrib3fv(H.location,Ee);break;case 4:t.vertexAttrib4fv(H.location,Ee);break;default:t.vertexAttrib1fv(H.location,Ee)}}}}R()}function I(){k();for(const b in i){const U=i[b];for(const ie in U){const $=U[ie];for(const ae in $)u($[ae].object),delete $[ae];delete U[ie]}delete i[b]}}function L(b){if(i[b.id]===void 0)return;const U=i[b.id];for(const ie in U){const $=U[ie];for(const ae in $)u($[ae].object),delete $[ae];delete U[ie]}delete i[b.id]}function P(b){for(const U in i){const ie=i[U];if(ie[b.id]===void 0)continue;const $=ie[b.id];for(const ae in $)u($[ae].object),delete $[ae];delete ie[b.id]}}function k(){w(),o=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:k,resetDefaultState:w,dispose:I,releaseStatesOfGeometry:L,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:m,disableUnusedAttributes:R}}function hS(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let g=0;g<f;g++)p+=u[g];n.update(p,i,1)}function l(c,u,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let g=0;for(let v=0;v<f;v++)g+=u[v]*d[v];n.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function pS(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==Mn&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const k=P===bs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==ei&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Yn&&!k)}function l(P){if(P==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),R=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),T=t.getParameter(t.MAX_VARYING_VECTORS),E=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,L=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:R,maxVaryings:T,maxFragmentUniforms:E,vertexTextures:I,maxSamples:L}}function mS(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ui,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,p){const g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,h=t.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const R=s?0:i,T=R*4;let E=h.clippingState||null;l.value=E,E=u(g,d,T,p);for(let I=0;I!==T;++I)E[I]=n[I];h.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,g){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const h=p+v*4,R=d.matrixWorldInverse;a.getNormalMatrix(R),(m===null||m.length<h)&&(m=new Float32Array(h));for(let T=0,E=p;T!==v;++T,E+=4)o.copy(f[T]).applyMatrix4(R,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function gS(t){let e=new WeakMap;function n(o,a){return a===El?o.mapping=Lr:a===bl&&(o.mapping=Ir),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===El||a===bl)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Sv(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const _r=4,ef=[.125,.215,.35,.446,.526,.582],ki=20,Va=new Av,tf=new lt;let Ga=null,Wa=0,Xa=0,qa=!1;const Ni=(1+Math.sqrt(5))/2,dr=1/Ni,nf=[new Y(-Ni,dr,0),new Y(Ni,dr,0),new Y(-dr,0,Ni),new Y(dr,0,Ni),new Y(0,Ni,-dr),new Y(0,Ni,dr),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)];class rf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Ga=this._renderer.getRenderTarget(),Wa=this._renderer.getActiveCubeFace(),Xa=this._renderer.getActiveMipmapLevel(),qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=af(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=of(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ga,Wa,Xa),this._renderer.xr.enabled=qa,e.scissorTest=!1,so(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Lr||e.mapping===Ir?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ga=this._renderer.getRenderTarget(),Wa=this._renderer.getActiveCubeFace(),Xa=this._renderer.getActiveMipmapLevel(),qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:In,minFilter:In,generateMipmaps:!1,type:bs,format:Mn,colorSpace:Fr,depthBuffer:!1},r=sf(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sf(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_S(s)),this._blurMaterial=vS(s,e,n)}return r}_compileMaterial(e){const n=new Zn(this._lodPlanes[0],e);this._renderer.compile(n,Va)}_sceneToCubeUV(e,n,i,r){const a=new fn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(tf),u.toneMapping=_i,u.autoClear=!1;const p=new Ih({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1}),g=new Zn(new Cs,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(tf),v=!0);for(let h=0;h<6;h++){const R=h%3;R===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):R===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const T=this._cubeSize;so(r,R*T,h>2?T:0,T,T),u.setRenderTarget(r),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Lr||e.mapping===Ir;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=af()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=of());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Zn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;so(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Va)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=nf[(r-s-1)%nf.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Zn(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ki-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):ki;m>ki&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ki}`);const h=[];let R=0;for(let P=0;P<ki;++P){const k=P/v,w=Math.exp(-k*k/2);h.push(w),P===0?R+=w:P<m&&(R+=2*w)}for(let P=0;P<h.length;P++)h[P]=h[P]/R;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:T}=this;d.dTheta.value=g,d.mipInt.value=T-i;const E=this._sizeLods[r],I=3*E*(r>T-_r?r-T+_r:0),L=4*(this._cubeSize-E);so(n,I,L,3*E,2*E),l.setRenderTarget(n),l.render(f,Va)}}function _S(t){const e=[],n=[],i=[];let r=t;const s=t-_r+1+ef.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-_r?l=ef[o-t+_r-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,v=3,m=2,h=1,R=new Float32Array(v*g*p),T=new Float32Array(m*g*p),E=new Float32Array(h*g*p);for(let L=0;L<p;L++){const P=L%3*2/3-1,k=L>2?0:-1,w=[P,k,0,P+2/3,k,0,P+2/3,k+1,0,P,k,0,P+2/3,k+1,0,P,k+1,0];R.set(w,v*g*L),T.set(d,m*g*L);const b=[L,L,L,L,L,L];E.set(b,h*g*L)}const I=new ii;I.setAttribute("position",new pn(R,v)),I.setAttribute("uv",new pn(T,m)),I.setAttribute("faceIndex",new pn(E,h)),e.push(I),r>_r&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function sf(t,e,n){const i=new ji(t,e,n);return i.texture.mapping=Ko,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function so(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function vS(t,e,n){const i=new Float32Array(ki),r=new Y(0,1,0);return new Si({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Nc(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function of(){return new Si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nc(),fragmentShader:`

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
		`,blending:gi,depthTest:!1,depthWrite:!1})}function af(){return new Si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Nc(){return`

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
	`}function xS(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===El||l===bl,u=l===Lr||l===Ir;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new rf(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new rf(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function SS(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&mr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function yS(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const p in d)e.update(d[p],t.ARRAY_BUFFER)}function c(f){const d=[],p=f.index,g=f.attributes.position;let v=0;if(p!==null){const R=p.array;v=p.version;for(let T=0,E=R.length;T<E;T+=3){const I=R[T+0],L=R[T+1],P=R[T+2];d.push(I,L,L,P,P,I)}}else if(g!==void 0){const R=g.array;v=g.version;for(let T=0,E=R.length/3-1;T<E;T+=3){const I=T+0,L=T+1,P=T+2;d.push(I,L,L,P,P,I)}}else return;const m=new(Ah(d)?Nh:Uh)(d,1);m.version=v;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function MS(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){t.drawElements(i,p,s,d*o),n.update(p,i,1)}function c(d,p,g){g!==0&&(t.drawElementsInstanced(i,p,s,d*o,g),n.update(p,i,g))}function u(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];n.update(m,i,1)}function f(d,p,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)c(d[h]/o,p[h],v[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,v,0,g);let h=0;for(let R=0;R<g;R++)h+=p[R]*v[R];n.update(h,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function ES(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function bS(t,e,n){const i=new WeakMap,r=new xt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let b=function(){k.dispose(),i.delete(a),a.removeEventListener("dispose",b)};var p=b;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],R=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let E=0;g===!0&&(E=1),v===!0&&(E=2),m===!0&&(E=3);let I=a.attributes.position.count*E,L=1;I>e.maxTextureSize&&(L=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const P=new Float32Array(I*L*4*f),k=new Ch(P,I,L,f);k.type=Yn,k.needsUpdate=!0;const w=E*4;for(let U=0;U<f;U++){const ie=h[U],$=R[U],ae=T[U],le=I*L*4*U;for(let J=0;J<ie.count;J++){const te=J*w;g===!0&&(r.fromBufferAttribute(ie,J),P[le+te+0]=r.x,P[le+te+1]=r.y,P[le+te+2]=r.z,P[le+te+3]=0),v===!0&&(r.fromBufferAttribute($,J),P[le+te+4]=r.x,P[le+te+5]=r.y,P[le+te+6]=r.z,P[le+te+7]=0),m===!0&&(r.fromBufferAttribute(ae,J),P[le+te+8]=r.x,P[le+te+9]=r.y,P[le+te+10]=r.z,P[le+te+11]=ae.itemSize===4?r.w:1)}}d={count:f,texture:k,size:new ft(I,L)},i.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function TS(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const Gh=new Yt,lf=new Hh(1,1),Wh=new Ch,Xh=new rv,qh=new Bh,cf=[],uf=[],ff=new Float32Array(16),df=new Float32Array(9),hf=new Float32Array(4);function Hr(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=cf[r];if(s===void 0&&(s=new Float32Array(r),cf[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function wt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function At(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Qo(t,e){let n=uf[e];n===void 0&&(n=new Int32Array(e),uf[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function wS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function AS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2fv(this.addr,e),At(n,e)}}function RS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(wt(n,e))return;t.uniform3fv(this.addr,e),At(n,e)}}function CS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4fv(this.addr,e),At(n,e)}}function PS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),At(n,e)}else{if(wt(n,i))return;hf.set(i),t.uniformMatrix2fv(this.addr,!1,hf),At(n,i)}}function DS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),At(n,e)}else{if(wt(n,i))return;df.set(i),t.uniformMatrix3fv(this.addr,!1,df),At(n,i)}}function LS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(wt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),At(n,e)}else{if(wt(n,i))return;ff.set(i),t.uniformMatrix4fv(this.addr,!1,ff),At(n,i)}}function IS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function US(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2iv(this.addr,e),At(n,e)}}function NS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wt(n,e))return;t.uniform3iv(this.addr,e),At(n,e)}}function FS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4iv(this.addr,e),At(n,e)}}function OS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function BS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(wt(n,e))return;t.uniform2uiv(this.addr,e),At(n,e)}}function kS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(wt(n,e))return;t.uniform3uiv(this.addr,e),At(n,e)}}function zS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(wt(n,e))return;t.uniform4uiv(this.addr,e),At(n,e)}}function HS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(lf.compareFunction=wh,s=lf):s=Gh,n.setTexture2D(e||s,r)}function VS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Xh,r)}function GS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||qh,r)}function WS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Wh,r)}function XS(t){switch(t){case 5126:return wS;case 35664:return AS;case 35665:return RS;case 35666:return CS;case 35674:return PS;case 35675:return DS;case 35676:return LS;case 5124:case 35670:return IS;case 35667:case 35671:return US;case 35668:case 35672:return NS;case 35669:case 35673:return FS;case 5125:return OS;case 36294:return BS;case 36295:return kS;case 36296:return zS;case 35678:case 36198:case 36298:case 36306:case 35682:return HS;case 35679:case 36299:case 36307:return VS;case 35680:case 36300:case 36308:case 36293:return GS;case 36289:case 36303:case 36311:case 36292:return WS}}function qS(t,e){t.uniform1fv(this.addr,e)}function $S(t,e){const n=Hr(e,this.size,2);t.uniform2fv(this.addr,n)}function jS(t,e){const n=Hr(e,this.size,3);t.uniform3fv(this.addr,n)}function YS(t,e){const n=Hr(e,this.size,4);t.uniform4fv(this.addr,n)}function KS(t,e){const n=Hr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function ZS(t,e){const n=Hr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function JS(t,e){const n=Hr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function QS(t,e){t.uniform1iv(this.addr,e)}function ey(t,e){t.uniform2iv(this.addr,e)}function ty(t,e){t.uniform3iv(this.addr,e)}function ny(t,e){t.uniform4iv(this.addr,e)}function iy(t,e){t.uniform1uiv(this.addr,e)}function ry(t,e){t.uniform2uiv(this.addr,e)}function sy(t,e){t.uniform3uiv(this.addr,e)}function oy(t,e){t.uniform4uiv(this.addr,e)}function ay(t,e,n){const i=this.cache,r=e.length,s=Qo(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Gh,s[o])}function ly(t,e,n){const i=this.cache,r=e.length,s=Qo(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Xh,s[o])}function cy(t,e,n){const i=this.cache,r=e.length,s=Qo(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||qh,s[o])}function uy(t,e,n){const i=this.cache,r=e.length,s=Qo(n,r);wt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Wh,s[o])}function fy(t){switch(t){case 5126:return qS;case 35664:return $S;case 35665:return jS;case 35666:return YS;case 35674:return KS;case 35675:return ZS;case 35676:return JS;case 5124:case 35670:return QS;case 35667:case 35671:return ey;case 35668:case 35672:return ty;case 35669:case 35673:return ny;case 5125:return iy;case 36294:return ry;case 36295:return sy;case 36296:return oy;case 35678:case 36198:case 36298:case 36306:case 35682:return ay;case 35679:case 36299:case 36307:return ly;case 35680:case 36300:case 36308:case 36293:return cy;case 36289:case 36303:case 36311:case 36292:return uy}}class dy{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=XS(n.type)}}class hy{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=fy(n.type)}}class py{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const $a=/(\w+)(\])?(\[|\.)?/g;function pf(t,e){t.seq.push(e),t.map[e.id]=e}function my(t,e,n){const i=t.name,r=i.length;for($a.lastIndex=0;;){const s=$a.exec(i),o=$a.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){pf(n,c===void 0?new dy(a,t,e):new hy(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new py(a),pf(n,f)),n=f}}}class xo{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);my(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function mf(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const gy=37297;let _y=0;function vy(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const gf=new Ye;function xy(t){tt._getMatrix(gf,tt.workingColorSpace,t);const e=`mat3( ${gf.elements.map(n=>n.toFixed(4))} )`;switch(tt.getTransfer(t)){case Do:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function _f(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+vy(t.getShaderSource(e),o)}else return r}function Sy(t,e){const n=xy(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function yy(t,e){let n;switch(e){case C_:n="Linear";break;case P_:n="Reinhard";break;case D_:n="Cineon";break;case L_:n="ACESFilmic";break;case U_:n="AgX";break;case N_:n="Neutral";break;case I_:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const oo=new Y;function My(){tt.getLuminanceCoefficients(oo);const t=oo.x.toFixed(4),e=oo.y.toFixed(4),n=oo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ey(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(is).join(`
`)}function by(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Ty(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function is(t){return t!==""}function vf(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xf(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wy=/^[ \t]*#include +<([\w\d./]+)>/gm;function tc(t){return t.replace(wy,Ry)}const Ay=new Map;function Ry(t,e){let n=Ke[e];if(n===void 0){const i=Ay.get(e);if(i!==void 0)n=Ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return tc(n)}const Cy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sf(t){return t.replace(Cy,Py)}function Py(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function yf(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
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
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Dy(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===hh?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===l_?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Wn&&(e="SHADOWMAP_TYPE_VSM"),e}function Ly(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Lr:case Ir:e="ENVMAP_TYPE_CUBE";break;case Ko:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Iy(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ir:e="ENVMAP_MODE_REFRACTION";break}return e}function Uy(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case ph:e="ENVMAP_BLENDING_MULTIPLY";break;case A_:e="ENVMAP_BLENDING_MIX";break;case R_:e="ENVMAP_BLENDING_ADD";break}return e}function Ny(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Fy(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=Dy(n),c=Ly(n),u=Iy(n),f=Uy(n),d=Ny(n),p=Ey(n),g=by(s),v=r.createProgram();let m,h,R=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(is).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(is).join(`
`),h.length>0&&(h+=`
`)):(m=[yf(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(is).join(`
`),h=[yf(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==_i?"#define TONE_MAPPING":"",n.toneMapping!==_i?Ke.tonemapping_pars_fragment:"",n.toneMapping!==_i?yy("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,Sy("linearToOutputTexel",n.outputColorSpace),My(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(is).join(`
`)),o=tc(o),o=vf(o,n),o=xf(o,n),a=tc(a),a=vf(a,n),a=xf(a,n),o=Sf(o),a=Sf(a),n.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===Iu?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Iu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const T=R+m+o,E=R+h+a,I=mf(r,r.VERTEX_SHADER,T),L=mf(r,r.FRAGMENT_SHADER,E);r.attachShader(v,I),r.attachShader(v,L),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function P(U){if(t.debug.checkShaderErrors){const ie=r.getProgramInfoLog(v).trim(),$=r.getShaderInfoLog(I).trim(),ae=r.getShaderInfoLog(L).trim();let le=!0,J=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(le=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,I,L);else{const te=_f(r,I,"vertex"),H=_f(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+ie+`
`+te+`
`+H)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):($===""||ae==="")&&(J=!1);J&&(U.diagnostics={runnable:le,programLog:ie,vertexShader:{log:$,prefix:m},fragmentShader:{log:ae,prefix:h}})}r.deleteShader(I),r.deleteShader(L),k=new xo(r,v),w=Ty(r,v)}let k;this.getUniforms=function(){return k===void 0&&P(this),k};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let b=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(v,gy)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=_y++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=I,this.fragmentShader=L,this}let Oy=0;class By{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new ky(e),n.set(e,i)),i}}class ky{constructor(e){this.id=Oy++,this.code=e,this.usedTimes=0}}function zy(t,e,n,i,r,s,o){const a=new Dh,l=new By,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,b,U,ie,$){const ae=ie.fog,le=$.geometry,J=w.isMeshStandardMaterial?ie.environment:null,te=(w.isMeshStandardMaterial?n:e).get(w.envMap||J),H=te&&te.mapping===Ko?te.image.height:null,ve=g[w.type];w.precision!==null&&(p=r.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const Ee=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Pe=Ee!==void 0?Ee.length:0;let Ue=0;le.morphAttributes.position!==void 0&&(Ue=1),le.morphAttributes.normal!==void 0&&(Ue=2),le.morphAttributes.color!==void 0&&(Ue=3);let Je,re,ge,be;if(ve){const at=Ln[ve];Je=at.vertexShader,re=at.fragmentShader}else Je=w.vertexShader,re=w.fragmentShader,l.update(w),ge=l.getVertexShaderID(w),be=l.getFragmentShaderID(w);const N=t.getRenderTarget(),oe=t.state.buffers.depth.getReversed(),se=$.isInstancedMesh===!0,pe=$.isBatchedMesh===!0,Fe=!!w.map,A=!!w.matcap,C=!!te,x=!!w.aoMap,ne=!!w.lightMap,j=!!w.bumpMap,W=!!w.normalMap,Q=!!w.displacementMap,ue=!!w.emissiveMap,K=!!w.metalnessMap,S=!!w.roughnessMap,_=w.anisotropy>0,D=w.clearcoat>0,z=w.dispersion>0,X=w.iridescence>0,V=w.sheen>0,_e=w.transmission>0,fe=_&&!!w.anisotropyMap,xe=D&&!!w.clearcoatMap,ze=D&&!!w.clearcoatNormalMap,he=D&&!!w.clearcoatRoughnessMap,Me=X&&!!w.iridescenceMap,Ie=X&&!!w.iridescenceThicknessMap,He=V&&!!w.sheenColorMap,Se=V&&!!w.sheenRoughnessMap,Ve=!!w.specularMap,Xe=!!w.specularColorMap,dt=!!w.specularIntensityMap,F=_e&&!!w.transmissionMap,Te=_e&&!!w.thicknessMap,ee=!!w.gradientMap,ce=!!w.alphaMap,Re=w.alphaTest>0,Ae=!!w.alphaHash,je=!!w.extensions;let _t=_i;w.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(_t=t.toneMapping);const Lt={shaderID:ve,shaderType:w.type,shaderName:w.name,vertexShader:Je,fragmentShader:re,defines:w.defines,customVertexShaderID:ge,customFragmentShaderID:be,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:pe,batchingColor:pe&&$._colorsTexture!==null,instancing:se,instancingColor:se&&$.instanceColor!==null,instancingMorph:se&&$.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:N===null?t.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Fr,alphaToCoverage:!!w.alphaToCoverage,map:Fe,matcap:A,envMap:C,envMapMode:C&&te.mapping,envMapCubeUVHeight:H,aoMap:x,lightMap:ne,bumpMap:j,normalMap:W,displacementMap:d&&Q,emissiveMap:ue,normalMapObjectSpace:W&&w.normalMapType===z_,normalMapTangentSpace:W&&w.normalMapType===k_,metalnessMap:K,roughnessMap:S,anisotropy:_,anisotropyMap:fe,clearcoat:D,clearcoatMap:xe,clearcoatNormalMap:ze,clearcoatRoughnessMap:he,dispersion:z,iridescence:X,iridescenceMap:Me,iridescenceThicknessMap:Ie,sheen:V,sheenColorMap:He,sheenRoughnessMap:Se,specularMap:Ve,specularColorMap:Xe,specularIntensityMap:dt,transmission:_e,transmissionMap:F,thicknessMap:Te,gradientMap:ee,opaque:w.transparent===!1&&w.blending===wr&&w.alphaToCoverage===!1,alphaMap:ce,alphaTest:Re,alphaHash:Ae,combine:w.combine,mapUv:Fe&&v(w.map.channel),aoMapUv:x&&v(w.aoMap.channel),lightMapUv:ne&&v(w.lightMap.channel),bumpMapUv:j&&v(w.bumpMap.channel),normalMapUv:W&&v(w.normalMap.channel),displacementMapUv:Q&&v(w.displacementMap.channel),emissiveMapUv:ue&&v(w.emissiveMap.channel),metalnessMapUv:K&&v(w.metalnessMap.channel),roughnessMapUv:S&&v(w.roughnessMap.channel),anisotropyMapUv:fe&&v(w.anisotropyMap.channel),clearcoatMapUv:xe&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:ze&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:He&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:Se&&v(w.sheenRoughnessMap.channel),specularMapUv:Ve&&v(w.specularMap.channel),specularColorMapUv:Xe&&v(w.specularColorMap.channel),specularIntensityMapUv:dt&&v(w.specularIntensityMap.channel),transmissionMapUv:F&&v(w.transmissionMap.channel),thicknessMapUv:Te&&v(w.thicknessMap.channel),alphaMapUv:ce&&v(w.alphaMap.channel),vertexTangents:!!le.attributes.tangent&&(W||_),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!le.attributes.uv&&(Fe||ce),fog:!!ae,useFog:w.fog===!0,fogExp2:!!ae&&ae.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:oe,skinning:$.isSkinnedMesh===!0,morphTargets:le.morphAttributes.position!==void 0,morphNormals:le.morphAttributes.normal!==void 0,morphColors:le.morphAttributes.color!==void 0,morphTargetsCount:Pe,morphTextureStride:Ue,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&U.length>0,shadowMapType:t.shadowMap.type,toneMapping:_t,decodeVideoTexture:Fe&&w.map.isVideoTexture===!0&&tt.getTransfer(w.map.colorSpace)===ct,decodeVideoTextureEmissive:ue&&w.emissiveMap.isVideoTexture===!0&&tt.getTransfer(w.emissiveMap.colorSpace)===ct,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===jn,flipSided:w.side===jt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:je&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&w.extensions.multiDraw===!0||pe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Lt.vertexUv1s=c.has(1),Lt.vertexUv2s=c.has(2),Lt.vertexUv3s=c.has(3),c.clear(),Lt}function h(w){const b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(const U in w.defines)b.push(U),b.push(w.defines[U]);return w.isRawShaderMaterial===!1&&(R(b,w),T(b,w),b.push(t.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function R(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function T(w,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),w.push(a.mask)}function E(w){const b=g[w.type];let U;if(b){const ie=Ln[b];U=gv.clone(ie.uniforms)}else U=w.uniforms;return U}function I(w,b){let U;for(let ie=0,$=u.length;ie<$;ie++){const ae=u[ie];if(ae.cacheKey===b){U=ae,++U.usedTimes;break}}return U===void 0&&(U=new Fy(t,b,w,s),u.push(U)),U}function L(w){if(--w.usedTimes===0){const b=u.indexOf(w);u[b]=u[u.length-1],u.pop(),w.destroy()}}function P(w){l.remove(w)}function k(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:E,acquireProgram:I,releaseProgram:L,releaseShaderCache:P,programs:u,dispose:k}}function Hy(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function Vy(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Mf(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Ef(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,p,g,v,m){let h=t[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:v,group:m},t[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=v,h.group=m),e++,h}function a(f,d,p,g,v,m){const h=o(f,d,p,g,v,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(f,d,p,g,v,m){const h=o(f,d,p,g,v,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function c(f,d){n.length>1&&n.sort(f||Vy),i.length>1&&i.sort(d||Mf),r.length>1&&r.sort(d||Mf)}function u(){for(let f=e,d=t.length;f<d;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Gy(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Ef,t.set(i,[o])):r>=s.length?(o=new Ef,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function Wy(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Y,color:new lt};break;case"SpotLight":n={position:new Y,direction:new Y,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Y,color:new lt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Y,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":n={color:new lt,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return t[e.id]=n,n}}}function Xy(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let qy=0;function $y(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function jy(t){const e=new Wy,n=Xy(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Y);const r=new Y,s=new St,o=new St;function a(c){let u=0,f=0,d=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,g=0,v=0,m=0,h=0,R=0,T=0,E=0,I=0,L=0,P=0;c.sort($y);for(let w=0,b=c.length;w<b;w++){const U=c[w],ie=U.color,$=U.intensity,ae=U.distance,le=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)u+=ie.r*$,f+=ie.g*$,d+=ie.b*$;else if(U.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(U.sh.coefficients[J],$);P++}else if(U.isDirectionalLight){const J=e.get(U);if(J.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const te=U.shadow,H=n.get(U);H.shadowIntensity=te.intensity,H.shadowBias=te.bias,H.shadowNormalBias=te.normalBias,H.shadowRadius=te.radius,H.shadowMapSize=te.mapSize,i.directionalShadow[p]=H,i.directionalShadowMap[p]=le,i.directionalShadowMatrix[p]=U.shadow.matrix,R++}i.directional[p]=J,p++}else if(U.isSpotLight){const J=e.get(U);J.position.setFromMatrixPosition(U.matrixWorld),J.color.copy(ie).multiplyScalar($),J.distance=ae,J.coneCos=Math.cos(U.angle),J.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),J.decay=U.decay,i.spot[v]=J;const te=U.shadow;if(U.map&&(i.spotLightMap[I]=U.map,I++,te.updateMatrices(U),U.castShadow&&L++),i.spotLightMatrix[v]=te.matrix,U.castShadow){const H=n.get(U);H.shadowIntensity=te.intensity,H.shadowBias=te.bias,H.shadowNormalBias=te.normalBias,H.shadowRadius=te.radius,H.shadowMapSize=te.mapSize,i.spotShadow[v]=H,i.spotShadowMap[v]=le,E++}v++}else if(U.isRectAreaLight){const J=e.get(U);J.color.copy(ie).multiplyScalar($),J.halfWidth.set(U.width*.5,0,0),J.halfHeight.set(0,U.height*.5,0),i.rectArea[m]=J,m++}else if(U.isPointLight){const J=e.get(U);if(J.color.copy(U.color).multiplyScalar(U.intensity),J.distance=U.distance,J.decay=U.decay,U.castShadow){const te=U.shadow,H=n.get(U);H.shadowIntensity=te.intensity,H.shadowBias=te.bias,H.shadowNormalBias=te.normalBias,H.shadowRadius=te.radius,H.shadowMapSize=te.mapSize,H.shadowCameraNear=te.camera.near,H.shadowCameraFar=te.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=le,i.pointShadowMatrix[g]=U.shadow.matrix,T++}i.point[g]=J,g++}else if(U.isHemisphereLight){const J=e.get(U);J.skyColor.copy(U.color).multiplyScalar($),J.groundColor.copy(U.groundColor).multiplyScalar($),i.hemi[h]=J,h++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const k=i.hash;(k.directionalLength!==p||k.pointLength!==g||k.spotLength!==v||k.rectAreaLength!==m||k.hemiLength!==h||k.numDirectionalShadows!==R||k.numPointShadows!==T||k.numSpotShadows!==E||k.numSpotMaps!==I||k.numLightProbes!==P)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=R,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=E+I-L,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=P,k.directionalLength=p,k.pointLength=g,k.spotLength=v,k.rectAreaLength=m,k.hemiLength=h,k.numDirectionalShadows=R,k.numPointShadows=T,k.numSpotShadows=E,k.numSpotMaps=I,k.numLightProbes=P,i.version=qy++)}function l(c,u){let f=0,d=0,p=0,g=0,v=0;const m=u.matrixWorldInverse;for(let h=0,R=c.length;h<R;h++){const T=c[h];if(T.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),f++}else if(T.isSpotLight){const E=i.spot[p];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),p++}else if(T.isRectAreaLight){const E=i.rectArea[g];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(m),o.identity(),s.copy(T.matrixWorld),s.premultiply(m),o.extractRotation(s),E.halfWidth.set(T.width*.5,0,0),E.halfHeight.set(0,T.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(T.isPointLight){const E=i.point[d];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(m),d++}else if(T.isHemisphereLight){const E=i.hemi[v];E.direction.setFromMatrixPosition(T.matrixWorld),E.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function bf(t){const e=new jy(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Yy(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new bf(t),e.set(r,[a])):s>=o.length?(a=new bf(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const Ky=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zy=`uniform sampler2D shadow_pass;
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
}`;function Jy(t,e,n){let i=new kh;const r=new ft,s=new ft,o=new xt,a=new Tv({depthPacking:B_}),l=new wv,c={},u=n.maxTextureSize,f={[xi]:jt,[jt]:xi,[jn]:jn},d=new Si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:Ky,fragmentShader:Zy}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new ii;g.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Zn(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hh;let h=this.type;this.render=function(L,P,k){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;const w=t.getRenderTarget(),b=t.getActiveCubeFace(),U=t.getActiveMipmapLevel(),ie=t.state;ie.setBlending(gi),ie.buffers.color.setClear(1,1,1,1),ie.buffers.depth.setTest(!0),ie.setScissorTest(!1);const $=h!==Wn&&this.type===Wn,ae=h===Wn&&this.type!==Wn;for(let le=0,J=L.length;le<J;le++){const te=L[le],H=te.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const ve=H.getFrameExtents();if(r.multiply(ve),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ve.x),r.x=s.x*ve.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ve.y),r.y=s.y*ve.y,H.mapSize.y=s.y)),H.map===null||$===!0||ae===!0){const Pe=this.type!==Wn?{minFilter:bn,magFilter:bn}:{};H.map!==null&&H.map.dispose(),H.map=new ji(r.x,r.y,Pe),H.map.texture.name=te.name+".shadowMap",H.camera.updateProjectionMatrix()}t.setRenderTarget(H.map),t.clear();const Ee=H.getViewportCount();for(let Pe=0;Pe<Ee;Pe++){const Ue=H.getViewport(Pe);o.set(s.x*Ue.x,s.y*Ue.y,s.x*Ue.z,s.y*Ue.w),ie.viewport(o),H.updateMatrices(te,Pe),i=H.getFrustum(),E(P,k,H.camera,te,this.type)}H.isPointLightShadow!==!0&&this.type===Wn&&R(H,k),H.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(w,b,U)};function R(L,P){const k=e.update(v);d.defines.VSM_SAMPLES!==L.blurSamples&&(d.defines.VSM_SAMPLES=L.blurSamples,p.defines.VSM_SAMPLES=L.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new ji(r.x,r.y)),d.uniforms.shadow_pass.value=L.map.texture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,t.setRenderTarget(L.mapPass),t.clear(),t.renderBufferDirect(P,null,k,d,v,null),p.uniforms.shadow_pass.value=L.mapPass.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,t.setRenderTarget(L.map),t.clear(),t.renderBufferDirect(P,null,k,p,v,null)}function T(L,P,k,w){let b=null;const U=k.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(U!==void 0)b=U;else if(b=k.isPointLight===!0?l:a,t.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const ie=b.uuid,$=P.uuid;let ae=c[ie];ae===void 0&&(ae={},c[ie]=ae);let le=ae[$];le===void 0&&(le=b.clone(),ae[$]=le,P.addEventListener("dispose",I)),b=le}if(b.visible=P.visible,b.wireframe=P.wireframe,w===Wn?b.side=P.shadowSide!==null?P.shadowSide:P.side:b.side=P.shadowSide!==null?P.shadowSide:f[P.side],b.alphaMap=P.alphaMap,b.alphaTest=P.alphaTest,b.map=P.map,b.clipShadows=P.clipShadows,b.clippingPlanes=P.clippingPlanes,b.clipIntersection=P.clipIntersection,b.displacementMap=P.displacementMap,b.displacementScale=P.displacementScale,b.displacementBias=P.displacementBias,b.wireframeLinewidth=P.wireframeLinewidth,b.linewidth=P.linewidth,k.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const ie=t.properties.get(b);ie.light=k}return b}function E(L,P,k,w,b){if(L.visible===!1)return;if(L.layers.test(P.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&b===Wn)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,L.matrixWorld);const $=e.update(L),ae=L.material;if(Array.isArray(ae)){const le=$.groups;for(let J=0,te=le.length;J<te;J++){const H=le[J],ve=ae[H.materialIndex];if(ve&&ve.visible){const Ee=T(L,ve,w,b);L.onBeforeShadow(t,L,P,k,$,Ee,H),t.renderBufferDirect(k,null,$,Ee,L,H),L.onAfterShadow(t,L,P,k,$,Ee,H)}}}else if(ae.visible){const le=T(L,ae,w,b);L.onBeforeShadow(t,L,P,k,$,le,null),t.renderBufferDirect(k,null,$,le,L,null),L.onAfterShadow(t,L,P,k,$,le,null)}}const ie=L.children;for(let $=0,ae=ie.length;$<ae;$++)E(ie[$],P,k,w,b)}function I(L){L.target.removeEventListener("dispose",I);for(const k in c){const w=c[k],b=L.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}const Qy={[gl]:_l,[vl]:yl,[xl]:Ml,[Dr]:Sl,[_l]:gl,[yl]:vl,[Ml]:xl,[Sl]:Dr};function eM(t,e){function n(){let F=!1;const Te=new xt;let ee=null;const ce=new xt(0,0,0,0);return{setMask:function(Re){ee!==Re&&!F&&(t.colorMask(Re,Re,Re,Re),ee=Re)},setLocked:function(Re){F=Re},setClear:function(Re,Ae,je,_t,Lt){Lt===!0&&(Re*=_t,Ae*=_t,je*=_t),Te.set(Re,Ae,je,_t),ce.equals(Te)===!1&&(t.clearColor(Re,Ae,je,_t),ce.copy(Te))},reset:function(){F=!1,ee=null,ce.set(-1,0,0,0)}}}function i(){let F=!1,Te=!1,ee=null,ce=null,Re=null;return{setReversed:function(Ae){if(Te!==Ae){const je=e.get("EXT_clip_control");Te?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT);const _t=Re;Re=null,this.setClear(_t)}Te=Ae},getReversed:function(){return Te},setTest:function(Ae){Ae?N(t.DEPTH_TEST):oe(t.DEPTH_TEST)},setMask:function(Ae){ee!==Ae&&!F&&(t.depthMask(Ae),ee=Ae)},setFunc:function(Ae){if(Te&&(Ae=Qy[Ae]),ce!==Ae){switch(Ae){case gl:t.depthFunc(t.NEVER);break;case _l:t.depthFunc(t.ALWAYS);break;case vl:t.depthFunc(t.LESS);break;case Dr:t.depthFunc(t.LEQUAL);break;case xl:t.depthFunc(t.EQUAL);break;case Sl:t.depthFunc(t.GEQUAL);break;case yl:t.depthFunc(t.GREATER);break;case Ml:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ce=Ae}},setLocked:function(Ae){F=Ae},setClear:function(Ae){Re!==Ae&&(Te&&(Ae=1-Ae),t.clearDepth(Ae),Re=Ae)},reset:function(){F=!1,ee=null,ce=null,Re=null,Te=!1}}}function r(){let F=!1,Te=null,ee=null,ce=null,Re=null,Ae=null,je=null,_t=null,Lt=null;return{setTest:function(at){F||(at?N(t.STENCIL_TEST):oe(t.STENCIL_TEST))},setMask:function(at){Te!==at&&!F&&(t.stencilMask(at),Te=at)},setFunc:function(at,gn,Fn){(ee!==at||ce!==gn||Re!==Fn)&&(t.stencilFunc(at,gn,Fn),ee=at,ce=gn,Re=Fn)},setOp:function(at,gn,Fn){(Ae!==at||je!==gn||_t!==Fn)&&(t.stencilOp(at,gn,Fn),Ae=at,je=gn,_t=Fn)},setLocked:function(at){F=at},setClear:function(at){Lt!==at&&(t.clearStencil(at),Lt=at)},reset:function(){F=!1,Te=null,ee=null,ce=null,Re=null,Ae=null,je=null,_t=null,Lt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,p=[],g=null,v=!1,m=null,h=null,R=null,T=null,E=null,I=null,L=null,P=new lt(0,0,0),k=0,w=!1,b=null,U=null,ie=null,$=null,ae=null;const le=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,te=0;const H=t.getParameter(t.VERSION);H.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(H)[1]),J=te>=1):H.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),J=te>=2);let ve=null,Ee={};const Pe=t.getParameter(t.SCISSOR_BOX),Ue=t.getParameter(t.VIEWPORT),Je=new xt().fromArray(Pe),re=new xt().fromArray(Ue);function ge(F,Te,ee,ce){const Re=new Uint8Array(4),Ae=t.createTexture();t.bindTexture(F,Ae),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let je=0;je<ee;je++)F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY?t.texImage3D(Te,0,t.RGBA,1,1,ce,0,t.RGBA,t.UNSIGNED_BYTE,Re):t.texImage2D(Te+je,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Re);return Ae}const be={};be[t.TEXTURE_2D]=ge(t.TEXTURE_2D,t.TEXTURE_2D,1),be[t.TEXTURE_CUBE_MAP]=ge(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[t.TEXTURE_2D_ARRAY]=ge(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),be[t.TEXTURE_3D]=ge(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),N(t.DEPTH_TEST),o.setFunc(Dr),j(!1),W(Au),N(t.CULL_FACE),x(gi);function N(F){u[F]!==!0&&(t.enable(F),u[F]=!0)}function oe(F){u[F]!==!1&&(t.disable(F),u[F]=!1)}function se(F,Te){return f[F]!==Te?(t.bindFramebuffer(F,Te),f[F]=Te,F===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=Te),F===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=Te),!0):!1}function pe(F,Te){let ee=p,ce=!1;if(F){ee=d.get(Te),ee===void 0&&(ee=[],d.set(Te,ee));const Re=F.textures;if(ee.length!==Re.length||ee[0]!==t.COLOR_ATTACHMENT0){for(let Ae=0,je=Re.length;Ae<je;Ae++)ee[Ae]=t.COLOR_ATTACHMENT0+Ae;ee.length=Re.length,ce=!0}}else ee[0]!==t.BACK&&(ee[0]=t.BACK,ce=!0);ce&&t.drawBuffers(ee)}function Fe(F){return g!==F?(t.useProgram(F),g=F,!0):!1}const A={[Bi]:t.FUNC_ADD,[u_]:t.FUNC_SUBTRACT,[f_]:t.FUNC_REVERSE_SUBTRACT};A[d_]=t.MIN,A[h_]=t.MAX;const C={[p_]:t.ZERO,[m_]:t.ONE,[g_]:t.SRC_COLOR,[pl]:t.SRC_ALPHA,[M_]:t.SRC_ALPHA_SATURATE,[S_]:t.DST_COLOR,[v_]:t.DST_ALPHA,[__]:t.ONE_MINUS_SRC_COLOR,[ml]:t.ONE_MINUS_SRC_ALPHA,[y_]:t.ONE_MINUS_DST_COLOR,[x_]:t.ONE_MINUS_DST_ALPHA,[E_]:t.CONSTANT_COLOR,[b_]:t.ONE_MINUS_CONSTANT_COLOR,[T_]:t.CONSTANT_ALPHA,[w_]:t.ONE_MINUS_CONSTANT_ALPHA};function x(F,Te,ee,ce,Re,Ae,je,_t,Lt,at){if(F===gi){v===!0&&(oe(t.BLEND),v=!1);return}if(v===!1&&(N(t.BLEND),v=!0),F!==c_){if(F!==m||at!==w){if((h!==Bi||E!==Bi)&&(t.blendEquation(t.FUNC_ADD),h=Bi,E=Bi),at)switch(F){case wr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ru:t.blendFunc(t.ONE,t.ONE);break;case Cu:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Pu:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case wr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ru:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Cu:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Pu:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}R=null,T=null,I=null,L=null,P.set(0,0,0),k=0,m=F,w=at}return}Re=Re||Te,Ae=Ae||ee,je=je||ce,(Te!==h||Re!==E)&&(t.blendEquationSeparate(A[Te],A[Re]),h=Te,E=Re),(ee!==R||ce!==T||Ae!==I||je!==L)&&(t.blendFuncSeparate(C[ee],C[ce],C[Ae],C[je]),R=ee,T=ce,I=Ae,L=je),(_t.equals(P)===!1||Lt!==k)&&(t.blendColor(_t.r,_t.g,_t.b,Lt),P.copy(_t),k=Lt),m=F,w=!1}function ne(F,Te){F.side===jn?oe(t.CULL_FACE):N(t.CULL_FACE);let ee=F.side===jt;Te&&(ee=!ee),j(ee),F.blending===wr&&F.transparent===!1?x(gi):x(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);const ce=F.stencilWrite;a.setTest(ce),ce&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ue(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?N(t.SAMPLE_ALPHA_TO_COVERAGE):oe(t.SAMPLE_ALPHA_TO_COVERAGE)}function j(F){b!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),b=F)}function W(F){F!==o_?(N(t.CULL_FACE),F!==U&&(F===Au?t.cullFace(t.BACK):F===a_?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):oe(t.CULL_FACE),U=F}function Q(F){F!==ie&&(J&&t.lineWidth(F),ie=F)}function ue(F,Te,ee){F?(N(t.POLYGON_OFFSET_FILL),($!==Te||ae!==ee)&&(t.polygonOffset(Te,ee),$=Te,ae=ee)):oe(t.POLYGON_OFFSET_FILL)}function K(F){F?N(t.SCISSOR_TEST):oe(t.SCISSOR_TEST)}function S(F){F===void 0&&(F=t.TEXTURE0+le-1),ve!==F&&(t.activeTexture(F),ve=F)}function _(F,Te,ee){ee===void 0&&(ve===null?ee=t.TEXTURE0+le-1:ee=ve);let ce=Ee[ee];ce===void 0&&(ce={type:void 0,texture:void 0},Ee[ee]=ce),(ce.type!==F||ce.texture!==Te)&&(ve!==ee&&(t.activeTexture(ee),ve=ee),t.bindTexture(F,Te||be[F]),ce.type=F,ce.texture=Te)}function D(){const F=Ee[ve];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function z(){try{t.compressedTexImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function X(){try{t.compressedTexImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function V(){try{t.texSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _e(){try{t.texSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function fe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ze(){try{t.texStorage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function he(){try{t.texStorage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Me(){try{t.texImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ie(){try{t.texImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function He(F){Je.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),Je.copy(F))}function Se(F){re.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),re.copy(F))}function Ve(F,Te){let ee=c.get(Te);ee===void 0&&(ee=new WeakMap,c.set(Te,ee));let ce=ee.get(F);ce===void 0&&(ce=t.getUniformBlockIndex(Te,F.name),ee.set(F,ce))}function Xe(F,Te){const ce=c.get(Te).get(F);l.get(Te)!==ce&&(t.uniformBlockBinding(Te,ce,F.__bindingPointIndex),l.set(Te,ce))}function dt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},ve=null,Ee={},f={},d=new WeakMap,p=[],g=null,v=!1,m=null,h=null,R=null,T=null,E=null,I=null,L=null,P=new lt(0,0,0),k=0,w=!1,b=null,U=null,ie=null,$=null,ae=null,Je.set(0,0,t.canvas.width,t.canvas.height),re.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:N,disable:oe,bindFramebuffer:se,drawBuffers:pe,useProgram:Fe,setBlending:x,setMaterial:ne,setFlipSided:j,setCullFace:W,setLineWidth:Q,setPolygonOffset:ue,setScissorTest:K,activeTexture:S,bindTexture:_,unbindTexture:D,compressedTexImage2D:z,compressedTexImage3D:X,texImage2D:Me,texImage3D:Ie,updateUBOMapping:Ve,uniformBlockBinding:Xe,texStorage2D:ze,texStorage3D:he,texSubImage2D:V,texSubImage3D:_e,compressedTexSubImage2D:fe,compressedTexSubImage3D:xe,scissor:He,viewport:Se,reset:dt}}function tM(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ft,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,_){return p?new OffscreenCanvas(S,_):Io("canvas")}function v(S,_,D){let z=1;const X=K(S);if((X.width>D||X.height>D)&&(z=D/Math.max(X.width,X.height)),z<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const V=Math.floor(z*X.width),_e=Math.floor(z*X.height);f===void 0&&(f=g(V,_e));const fe=_?g(V,_e):f;return fe.width=V,fe.height=_e,fe.getContext("2d").drawImage(S,0,0,V,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+V+"x"+_e+")."),fe}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),S;return S}function m(S){return S.generateMipmaps}function h(S){t.generateMipmap(S)}function R(S){return S.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?t.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function T(S,_,D,z,X=!1){if(S!==null){if(t[S]!==void 0)return t[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let V=_;if(_===t.RED&&(D===t.FLOAT&&(V=t.R32F),D===t.HALF_FLOAT&&(V=t.R16F),D===t.UNSIGNED_BYTE&&(V=t.R8)),_===t.RED_INTEGER&&(D===t.UNSIGNED_BYTE&&(V=t.R8UI),D===t.UNSIGNED_SHORT&&(V=t.R16UI),D===t.UNSIGNED_INT&&(V=t.R32UI),D===t.BYTE&&(V=t.R8I),D===t.SHORT&&(V=t.R16I),D===t.INT&&(V=t.R32I)),_===t.RG&&(D===t.FLOAT&&(V=t.RG32F),D===t.HALF_FLOAT&&(V=t.RG16F),D===t.UNSIGNED_BYTE&&(V=t.RG8)),_===t.RG_INTEGER&&(D===t.UNSIGNED_BYTE&&(V=t.RG8UI),D===t.UNSIGNED_SHORT&&(V=t.RG16UI),D===t.UNSIGNED_INT&&(V=t.RG32UI),D===t.BYTE&&(V=t.RG8I),D===t.SHORT&&(V=t.RG16I),D===t.INT&&(V=t.RG32I)),_===t.RGB_INTEGER&&(D===t.UNSIGNED_BYTE&&(V=t.RGB8UI),D===t.UNSIGNED_SHORT&&(V=t.RGB16UI),D===t.UNSIGNED_INT&&(V=t.RGB32UI),D===t.BYTE&&(V=t.RGB8I),D===t.SHORT&&(V=t.RGB16I),D===t.INT&&(V=t.RGB32I)),_===t.RGBA_INTEGER&&(D===t.UNSIGNED_BYTE&&(V=t.RGBA8UI),D===t.UNSIGNED_SHORT&&(V=t.RGBA16UI),D===t.UNSIGNED_INT&&(V=t.RGBA32UI),D===t.BYTE&&(V=t.RGBA8I),D===t.SHORT&&(V=t.RGBA16I),D===t.INT&&(V=t.RGBA32I)),_===t.RGB&&D===t.UNSIGNED_INT_5_9_9_9_REV&&(V=t.RGB9_E5),_===t.RGBA){const _e=X?Do:tt.getTransfer(z);D===t.FLOAT&&(V=t.RGBA32F),D===t.HALF_FLOAT&&(V=t.RGBA16F),D===t.UNSIGNED_BYTE&&(V=_e===ct?t.SRGB8_ALPHA8:t.RGBA8),D===t.UNSIGNED_SHORT_4_4_4_4&&(V=t.RGBA4),D===t.UNSIGNED_SHORT_5_5_5_1&&(V=t.RGB5_A1)}return(V===t.R16F||V===t.R32F||V===t.RG16F||V===t.RG32F||V===t.RGBA16F||V===t.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function E(S,_){let D;return S?_===null||_===$i||_===Ur?D=t.DEPTH24_STENCIL8:_===Yn?D=t.DEPTH32F_STENCIL8:_===_s&&(D=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===$i||_===Ur?D=t.DEPTH_COMPONENT24:_===Yn?D=t.DEPTH_COMPONENT32F:_===_s&&(D=t.DEPTH_COMPONENT16),D}function I(S,_){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==bn&&S.minFilter!==In?Math.log2(Math.max(_.width,_.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?_.mipmaps.length:1}function L(S){const _=S.target;_.removeEventListener("dispose",L),k(_),_.isVideoTexture&&u.delete(_)}function P(S){const _=S.target;_.removeEventListener("dispose",P),b(_)}function k(S){const _=i.get(S);if(_.__webglInit===void 0)return;const D=S.source,z=d.get(D);if(z){const X=z[_.__cacheKey];X.usedTimes--,X.usedTimes===0&&w(S),Object.keys(z).length===0&&d.delete(D)}i.remove(S)}function w(S){const _=i.get(S);t.deleteTexture(_.__webglTexture);const D=S.source,z=d.get(D);delete z[_.__cacheKey],o.memory.textures--}function b(S){const _=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(_.__webglFramebuffer[z]))for(let X=0;X<_.__webglFramebuffer[z].length;X++)t.deleteFramebuffer(_.__webglFramebuffer[z][X]);else t.deleteFramebuffer(_.__webglFramebuffer[z]);_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer[z])}else{if(Array.isArray(_.__webglFramebuffer))for(let z=0;z<_.__webglFramebuffer.length;z++)t.deleteFramebuffer(_.__webglFramebuffer[z]);else t.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&t.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let z=0;z<_.__webglColorRenderbuffer.length;z++)_.__webglColorRenderbuffer[z]&&t.deleteRenderbuffer(_.__webglColorRenderbuffer[z]);_.__webglDepthRenderbuffer&&t.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const D=S.textures;for(let z=0,X=D.length;z<X;z++){const V=i.get(D[z]);V.__webglTexture&&(t.deleteTexture(V.__webglTexture),o.memory.textures--),i.remove(D[z])}i.remove(S)}let U=0;function ie(){U=0}function $(){const S=U;return S>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),U+=1,S}function ae(S){const _=[];return _.push(S.wrapS),_.push(S.wrapT),_.push(S.wrapR||0),_.push(S.magFilter),_.push(S.minFilter),_.push(S.anisotropy),_.push(S.internalFormat),_.push(S.format),_.push(S.type),_.push(S.generateMipmaps),_.push(S.premultiplyAlpha),_.push(S.flipY),_.push(S.unpackAlignment),_.push(S.colorSpace),_.join()}function le(S,_){const D=i.get(S);if(S.isVideoTexture&&Q(S),S.isRenderTargetTexture===!1&&S.version>0&&D.__version!==S.version){const z=S.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(D,S,_);return}}n.bindTexture(t.TEXTURE_2D,D.__webglTexture,t.TEXTURE0+_)}function J(S,_){const D=i.get(S);if(S.version>0&&D.__version!==S.version){re(D,S,_);return}n.bindTexture(t.TEXTURE_2D_ARRAY,D.__webglTexture,t.TEXTURE0+_)}function te(S,_){const D=i.get(S);if(S.version>0&&D.__version!==S.version){re(D,S,_);return}n.bindTexture(t.TEXTURE_3D,D.__webglTexture,t.TEXTURE0+_)}function H(S,_){const D=i.get(S);if(S.version>0&&D.__version!==S.version){ge(D,S,_);return}n.bindTexture(t.TEXTURE_CUBE_MAP,D.__webglTexture,t.TEXTURE0+_)}const ve={[Tl]:t.REPEAT,[zi]:t.CLAMP_TO_EDGE,[wl]:t.MIRRORED_REPEAT},Ee={[bn]:t.NEAREST,[F_]:t.NEAREST_MIPMAP_NEAREST,[Bs]:t.NEAREST_MIPMAP_LINEAR,[In]:t.LINEAR,[xa]:t.LINEAR_MIPMAP_NEAREST,[Hi]:t.LINEAR_MIPMAP_LINEAR},Pe={[H_]:t.NEVER,[$_]:t.ALWAYS,[V_]:t.LESS,[wh]:t.LEQUAL,[G_]:t.EQUAL,[q_]:t.GEQUAL,[W_]:t.GREATER,[X_]:t.NOTEQUAL};function Ue(S,_){if(_.type===Yn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===In||_.magFilter===xa||_.magFilter===Bs||_.magFilter===Hi||_.minFilter===In||_.minFilter===xa||_.minFilter===Bs||_.minFilter===Hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(S,t.TEXTURE_WRAP_S,ve[_.wrapS]),t.texParameteri(S,t.TEXTURE_WRAP_T,ve[_.wrapT]),(S===t.TEXTURE_3D||S===t.TEXTURE_2D_ARRAY)&&t.texParameteri(S,t.TEXTURE_WRAP_R,ve[_.wrapR]),t.texParameteri(S,t.TEXTURE_MAG_FILTER,Ee[_.magFilter]),t.texParameteri(S,t.TEXTURE_MIN_FILTER,Ee[_.minFilter]),_.compareFunction&&(t.texParameteri(S,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(S,t.TEXTURE_COMPARE_FUNC,Pe[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===bn||_.minFilter!==Bs&&_.minFilter!==Hi||_.type===Yn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");t.texParameterf(S,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Je(S,_){let D=!1;S.__webglInit===void 0&&(S.__webglInit=!0,_.addEventListener("dispose",L));const z=_.source;let X=d.get(z);X===void 0&&(X={},d.set(z,X));const V=ae(_);if(V!==S.__cacheKey){X[V]===void 0&&(X[V]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,D=!0),X[V].usedTimes++;const _e=X[S.__cacheKey];_e!==void 0&&(X[S.__cacheKey].usedTimes--,_e.usedTimes===0&&w(_)),S.__cacheKey=V,S.__webglTexture=X[V].texture}return D}function re(S,_,D){let z=t.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(z=t.TEXTURE_2D_ARRAY),_.isData3DTexture&&(z=t.TEXTURE_3D);const X=Je(S,_),V=_.source;n.bindTexture(z,S.__webglTexture,t.TEXTURE0+D);const _e=i.get(V);if(V.version!==_e.__version||X===!0){n.activeTexture(t.TEXTURE0+D);const fe=tt.getPrimaries(tt.workingColorSpace),xe=_.colorSpace===pi?null:tt.getPrimaries(_.colorSpace),ze=_.colorSpace===pi||fe===xe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let he=v(_.image,!1,r.maxTextureSize);he=ue(_,he);const Me=s.convert(_.format,_.colorSpace),Ie=s.convert(_.type);let He=T(_.internalFormat,Me,Ie,_.colorSpace,_.isVideoTexture);Ue(z,_);let Se;const Ve=_.mipmaps,Xe=_.isVideoTexture!==!0,dt=_e.__version===void 0||X===!0,F=V.dataReady,Te=I(_,he);if(_.isDepthTexture)He=E(_.format===Nr,_.type),dt&&(Xe?n.texStorage2D(t.TEXTURE_2D,1,He,he.width,he.height):n.texImage2D(t.TEXTURE_2D,0,He,he.width,he.height,0,Me,Ie,null));else if(_.isDataTexture)if(Ve.length>0){Xe&&dt&&n.texStorage2D(t.TEXTURE_2D,Te,He,Ve[0].width,Ve[0].height);for(let ee=0,ce=Ve.length;ee<ce;ee++)Se=Ve[ee],Xe?F&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,Se.width,Se.height,Me,Ie,Se.data):n.texImage2D(t.TEXTURE_2D,ee,He,Se.width,Se.height,0,Me,Ie,Se.data);_.generateMipmaps=!1}else Xe?(dt&&n.texStorage2D(t.TEXTURE_2D,Te,He,he.width,he.height),F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,he.width,he.height,Me,Ie,he.data)):n.texImage2D(t.TEXTURE_2D,0,He,he.width,he.height,0,Me,Ie,he.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Xe&&dt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Te,He,Ve[0].width,Ve[0].height,he.depth);for(let ee=0,ce=Ve.length;ee<ce;ee++)if(Se=Ve[ee],_.format!==Mn)if(Me!==null)if(Xe){if(F)if(_.layerUpdates.size>0){const Re=Qu(Se.width,Se.height,_.format,_.type);for(const Ae of _.layerUpdates){const je=Se.data.subarray(Ae*Re/Se.data.BYTES_PER_ELEMENT,(Ae+1)*Re/Se.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,Ae,Se.width,Se.height,1,Me,je)}_.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,Se.width,Se.height,he.depth,Me,Se.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ee,He,Se.width,Se.height,he.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xe?F&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,Se.width,Se.height,he.depth,Me,Ie,Se.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ee,He,Se.width,Se.height,he.depth,0,Me,Ie,Se.data)}else{Xe&&dt&&n.texStorage2D(t.TEXTURE_2D,Te,He,Ve[0].width,Ve[0].height);for(let ee=0,ce=Ve.length;ee<ce;ee++)Se=Ve[ee],_.format!==Mn?Me!==null?Xe?F&&n.compressedTexSubImage2D(t.TEXTURE_2D,ee,0,0,Se.width,Se.height,Me,Se.data):n.compressedTexImage2D(t.TEXTURE_2D,ee,He,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?F&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,Se.width,Se.height,Me,Ie,Se.data):n.texImage2D(t.TEXTURE_2D,ee,He,Se.width,Se.height,0,Me,Ie,Se.data)}else if(_.isDataArrayTexture)if(Xe){if(dt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Te,He,he.width,he.height,he.depth),F)if(_.layerUpdates.size>0){const ee=Qu(he.width,he.height,_.format,_.type);for(const ce of _.layerUpdates){const Re=he.data.subarray(ce*ee/he.data.BYTES_PER_ELEMENT,(ce+1)*ee/he.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ce,he.width,he.height,1,Me,Ie,Re)}_.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Me,Ie,he.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,He,he.width,he.height,he.depth,0,Me,Ie,he.data);else if(_.isData3DTexture)Xe?(dt&&n.texStorage3D(t.TEXTURE_3D,Te,He,he.width,he.height,he.depth),F&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Me,Ie,he.data)):n.texImage3D(t.TEXTURE_3D,0,He,he.width,he.height,he.depth,0,Me,Ie,he.data);else if(_.isFramebufferTexture){if(dt)if(Xe)n.texStorage2D(t.TEXTURE_2D,Te,He,he.width,he.height);else{let ee=he.width,ce=he.height;for(let Re=0;Re<Te;Re++)n.texImage2D(t.TEXTURE_2D,Re,He,ee,ce,0,Me,Ie,null),ee>>=1,ce>>=1}}else if(Ve.length>0){if(Xe&&dt){const ee=K(Ve[0]);n.texStorage2D(t.TEXTURE_2D,Te,He,ee.width,ee.height)}for(let ee=0,ce=Ve.length;ee<ce;ee++)Se=Ve[ee],Xe?F&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,Me,Ie,Se):n.texImage2D(t.TEXTURE_2D,ee,He,Me,Ie,Se);_.generateMipmaps=!1}else if(Xe){if(dt){const ee=K(he);n.texStorage2D(t.TEXTURE_2D,Te,He,ee.width,ee.height)}F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Me,Ie,he)}else n.texImage2D(t.TEXTURE_2D,0,He,Me,Ie,he);m(_)&&h(z),_e.__version=V.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function ge(S,_,D){if(_.image.length!==6)return;const z=Je(S,_),X=_.source;n.bindTexture(t.TEXTURE_CUBE_MAP,S.__webglTexture,t.TEXTURE0+D);const V=i.get(X);if(X.version!==V.__version||z===!0){n.activeTexture(t.TEXTURE0+D);const _e=tt.getPrimaries(tt.workingColorSpace),fe=_.colorSpace===pi?null:tt.getPrimaries(_.colorSpace),xe=_.colorSpace===pi||_e===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const ze=_.isCompressedTexture||_.image[0].isCompressedTexture,he=_.image[0]&&_.image[0].isDataTexture,Me=[];for(let ce=0;ce<6;ce++)!ze&&!he?Me[ce]=v(_.image[ce],!0,r.maxCubemapSize):Me[ce]=he?_.image[ce].image:_.image[ce],Me[ce]=ue(_,Me[ce]);const Ie=Me[0],He=s.convert(_.format,_.colorSpace),Se=s.convert(_.type),Ve=T(_.internalFormat,He,Se,_.colorSpace),Xe=_.isVideoTexture!==!0,dt=V.__version===void 0||z===!0,F=X.dataReady;let Te=I(_,Ie);Ue(t.TEXTURE_CUBE_MAP,_);let ee;if(ze){Xe&&dt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Te,Ve,Ie.width,Ie.height);for(let ce=0;ce<6;ce++){ee=Me[ce].mipmaps;for(let Re=0;Re<ee.length;Re++){const Ae=ee[Re];_.format!==Mn?He!==null?Xe?F&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Re,0,0,Ae.width,Ae.height,He,Ae.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Re,Ve,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Re,0,0,Ae.width,Ae.height,He,Se,Ae.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Re,Ve,Ae.width,Ae.height,0,He,Se,Ae.data)}}}else{if(ee=_.mipmaps,Xe&&dt){ee.length>0&&Te++;const ce=K(Me[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Te,Ve,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(he){Xe?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Me[ce].width,Me[ce].height,He,Se,Me[ce].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ve,Me[ce].width,Me[ce].height,0,He,Se,Me[ce].data);for(let Re=0;Re<ee.length;Re++){const je=ee[Re].image[ce].image;Xe?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Re+1,0,0,je.width,je.height,He,Se,je.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Re+1,Ve,je.width,je.height,0,He,Se,je.data)}}else{Xe?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,He,Se,Me[ce]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ve,He,Se,Me[ce]);for(let Re=0;Re<ee.length;Re++){const Ae=ee[Re];Xe?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Re+1,0,0,He,Se,Ae.image[ce]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Re+1,Ve,He,Se,Ae.image[ce])}}}m(_)&&h(t.TEXTURE_CUBE_MAP),V.__version=X.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function be(S,_,D,z,X,V){const _e=s.convert(D.format,D.colorSpace),fe=s.convert(D.type),xe=T(D.internalFormat,_e,fe,D.colorSpace),ze=i.get(_),he=i.get(D);if(he.__renderTarget=_,!ze.__hasExternalTextures){const Me=Math.max(1,_.width>>V),Ie=Math.max(1,_.height>>V);X===t.TEXTURE_3D||X===t.TEXTURE_2D_ARRAY?n.texImage3D(X,V,xe,Me,Ie,_.depth,0,_e,fe,null):n.texImage2D(X,V,xe,Me,Ie,0,_e,fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,S),W(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,z,X,he.__webglTexture,0,j(_)):(X===t.TEXTURE_2D||X>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,z,X,he.__webglTexture,V),n.bindFramebuffer(t.FRAMEBUFFER,null)}function N(S,_,D){if(t.bindRenderbuffer(t.RENDERBUFFER,S),_.depthBuffer){const z=_.depthTexture,X=z&&z.isDepthTexture?z.type:null,V=E(_.stencilBuffer,X),_e=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=j(_);W(_)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe,V,_.width,_.height):D?t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,V,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,V,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,_e,t.RENDERBUFFER,S)}else{const z=_.textures;for(let X=0;X<z.length;X++){const V=z[X],_e=s.convert(V.format,V.colorSpace),fe=s.convert(V.type),xe=T(V.internalFormat,_e,fe,V.colorSpace),ze=j(_);D&&W(_)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ze,xe,_.width,_.height):W(_)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ze,xe,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,xe,_.width,_.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function oe(S,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,S),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const z=i.get(_.depthTexture);z.__renderTarget=_,(!z.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),le(_.depthTexture,0);const X=z.__webglTexture,V=j(_);if(_.depthTexture.format===Ar)W(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,X,0,V):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,X,0);else if(_.depthTexture.format===Nr)W(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,X,0,V):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,X,0);else throw new Error("Unknown depthTexture format")}function se(S){const _=i.get(S),D=S.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==S.depthTexture){const z=S.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),z){const X=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,z.removeEventListener("dispose",X)};z.addEventListener("dispose",X),_.__depthDisposeCallback=X}_.__boundDepthTexture=z}if(S.depthTexture&&!_.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");oe(_.__webglFramebuffer,S)}else if(D){_.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[z]),_.__webglDepthbuffer[z]===void 0)_.__webglDepthbuffer[z]=t.createRenderbuffer(),N(_.__webglDepthbuffer[z],S,!1);else{const X=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,V=_.__webglDepthbuffer[z];t.bindRenderbuffer(t.RENDERBUFFER,V),t.framebufferRenderbuffer(t.FRAMEBUFFER,X,t.RENDERBUFFER,V)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=t.createRenderbuffer(),N(_.__webglDepthbuffer,S,!1);else{const z=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,X=_.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,X),t.framebufferRenderbuffer(t.FRAMEBUFFER,z,t.RENDERBUFFER,X)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function pe(S,_,D){const z=i.get(S);_!==void 0&&be(z.__webglFramebuffer,S,S.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),D!==void 0&&se(S)}function Fe(S){const _=S.texture,D=i.get(S),z=i.get(_);S.addEventListener("dispose",P);const X=S.textures,V=S.isWebGLCubeRenderTarget===!0,_e=X.length>1;if(_e||(z.__webglTexture===void 0&&(z.__webglTexture=t.createTexture()),z.__version=_.version,o.memory.textures++),V){D.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(_.mipmaps&&_.mipmaps.length>0){D.__webglFramebuffer[fe]=[];for(let xe=0;xe<_.mipmaps.length;xe++)D.__webglFramebuffer[fe][xe]=t.createFramebuffer()}else D.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){D.__webglFramebuffer=[];for(let fe=0;fe<_.mipmaps.length;fe++)D.__webglFramebuffer[fe]=t.createFramebuffer()}else D.__webglFramebuffer=t.createFramebuffer();if(_e)for(let fe=0,xe=X.length;fe<xe;fe++){const ze=i.get(X[fe]);ze.__webglTexture===void 0&&(ze.__webglTexture=t.createTexture(),o.memory.textures++)}if(S.samples>0&&W(S)===!1){D.__webglMultisampledFramebuffer=t.createFramebuffer(),D.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let fe=0;fe<X.length;fe++){const xe=X[fe];D.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,D.__webglColorRenderbuffer[fe]);const ze=s.convert(xe.format,xe.colorSpace),he=s.convert(xe.type),Me=T(xe.internalFormat,ze,he,xe.colorSpace,S.isXRRenderTarget===!0),Ie=j(S);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ie,Me,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,D.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),S.depthBuffer&&(D.__webglDepthRenderbuffer=t.createRenderbuffer(),N(D.__webglDepthRenderbuffer,S,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(V){n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture),Ue(t.TEXTURE_CUBE_MAP,_);for(let fe=0;fe<6;fe++)if(_.mipmaps&&_.mipmaps.length>0)for(let xe=0;xe<_.mipmaps.length;xe++)be(D.__webglFramebuffer[fe][xe],S,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,xe);else be(D.__webglFramebuffer[fe],S,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(_)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(_e){for(let fe=0,xe=X.length;fe<xe;fe++){const ze=X[fe],he=i.get(ze);n.bindTexture(t.TEXTURE_2D,he.__webglTexture),Ue(t.TEXTURE_2D,ze),be(D.__webglFramebuffer,S,ze,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,0),m(ze)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(fe=S.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,z.__webglTexture),Ue(fe,_),_.mipmaps&&_.mipmaps.length>0)for(let xe=0;xe<_.mipmaps.length;xe++)be(D.__webglFramebuffer[xe],S,_,t.COLOR_ATTACHMENT0,fe,xe);else be(D.__webglFramebuffer,S,_,t.COLOR_ATTACHMENT0,fe,0);m(_)&&h(fe),n.unbindTexture()}S.depthBuffer&&se(S)}function A(S){const _=S.textures;for(let D=0,z=_.length;D<z;D++){const X=_[D];if(m(X)){const V=R(S),_e=i.get(X).__webglTexture;n.bindTexture(V,_e),h(V),n.unbindTexture()}}}const C=[],x=[];function ne(S){if(S.samples>0){if(W(S)===!1){const _=S.textures,D=S.width,z=S.height;let X=t.COLOR_BUFFER_BIT;const V=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,_e=i.get(S),fe=_.length>1;if(fe)for(let xe=0;xe<_.length;xe++)n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let xe=0;xe<_.length;xe++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(X|=t.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(X|=t.STENCIL_BUFFER_BIT)),fe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,_e.__webglColorRenderbuffer[xe]);const ze=i.get(_[xe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ze,0)}t.blitFramebuffer(0,0,D,z,0,0,D,z,X,t.NEAREST),l===!0&&(C.length=0,x.length=0,C.push(t.COLOR_ATTACHMENT0+xe),S.depthBuffer&&S.resolveDepthBuffer===!1&&(C.push(V),x.push(V),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,x)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,C))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let xe=0;xe<_.length;xe++){n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,_e.__webglColorRenderbuffer[xe]);const ze=i.get(_[xe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,ze,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const _=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_])}}}function j(S){return Math.min(r.maxSamples,S.samples)}function W(S){const _=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Q(S){const _=o.render.frame;u.get(S)!==_&&(u.set(S,_),S.update())}function ue(S,_){const D=S.colorSpace,z=S.format,X=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||D!==Fr&&D!==pi&&(tt.getTransfer(D)===ct?(z!==Mn||X!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),_}function K(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=ie,this.setTexture2D=le,this.setTexture2DArray=J,this.setTexture3D=te,this.setTextureCube=H,this.rebindTextures=pe,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=A,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=be,this.useMultisampledRTT=W}function nM(t,e){function n(i,r=pi){let s;const o=tt.getTransfer(r);if(i===ei)return t.UNSIGNED_BYTE;if(i===Pc)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Dc)return t.UNSIGNED_SHORT_5_5_5_1;if(i===vh)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===gh)return t.BYTE;if(i===_h)return t.SHORT;if(i===_s)return t.UNSIGNED_SHORT;if(i===Cc)return t.INT;if(i===$i)return t.UNSIGNED_INT;if(i===Yn)return t.FLOAT;if(i===bs)return t.HALF_FLOAT;if(i===xh)return t.ALPHA;if(i===Sh)return t.RGB;if(i===Mn)return t.RGBA;if(i===yh)return t.LUMINANCE;if(i===Mh)return t.LUMINANCE_ALPHA;if(i===Ar)return t.DEPTH_COMPONENT;if(i===Nr)return t.DEPTH_STENCIL;if(i===Eh)return t.RED;if(i===Lc)return t.RED_INTEGER;if(i===bh)return t.RG;if(i===Ic)return t.RG_INTEGER;if(i===Uc)return t.RGBA_INTEGER;if(i===po||i===mo||i===go||i===_o)if(o===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===po)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===mo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===go)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===_o)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===po)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===mo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===go)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===_o)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Al||i===Rl||i===Cl||i===Pl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Al)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Rl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Cl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Pl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Dl||i===Ll||i===Il)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Dl||i===Ll)return o===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Il)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ul||i===Nl||i===Fl||i===Ol||i===Bl||i===kl||i===zl||i===Hl||i===Vl||i===Gl||i===Wl||i===Xl||i===ql||i===$l)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ul)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Nl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Fl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ol)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Bl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===kl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===zl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Hl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Vl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Gl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Wl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Xl)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ql)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===$l)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===vo||i===jl||i===Yl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===vo)return o===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===jl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Yl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Th||i===Kl||i===Zl||i===Jl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===vo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Kl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Zl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Jl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ur?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const iM={type:"move"};class ja{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ns,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ns,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ns,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),h=this._getHandJoint(c,v);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(iM)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ns;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const rM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class oM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Yt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!==i.depthNear||n.depthFar!==i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Si({vertexShader:rM,fragmentShader:sM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Zn(new Jo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class aM extends zr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,g=null;const v=new oM,m=n.getContextAttributes();let h=null,R=null;const T=[],E=[],I=new ft;let L=null;const P=new fn;P.viewport=new xt;const k=new fn;k.viewport=new xt;const w=[P,k],b=new Rv;let U=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let ge=T[re];return ge===void 0&&(ge=new ja,T[re]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(re){let ge=T[re];return ge===void 0&&(ge=new ja,T[re]=ge),ge.getGripSpace()},this.getHand=function(re){let ge=T[re];return ge===void 0&&(ge=new ja,T[re]=ge),ge.getHandSpace()};function $(re){const ge=E.indexOf(re.inputSource);if(ge===-1)return;const be=T[ge];be!==void 0&&(be.update(re.inputSource,re.frame,c||o),be.dispatchEvent({type:re.type,data:re.inputSource}))}function ae(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",ae),r.removeEventListener("inputsourceschange",le);for(let re=0;re<T.length;re++){const ge=E[re];ge!==null&&(E[re]=null,T[re].disconnect(ge))}U=null,ie=null,v.reset(),e.setRenderTarget(h),p=null,d=null,f=null,r=null,R=null,Je.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){s=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){a=re,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(re){c=re},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(re){if(r=re,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",ae),r.addEventListener("inputsourceschange",le),m.xrCompatible!==!0&&await n.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(I),r.enabledFeatures!==void 0&&r.enabledFeatures.includes("layers")){let be=null,N=null,oe=null;m.depth&&(oe=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,be=m.stencil?Nr:Ar,N=m.stencil?Ur:$i);const se={colorFormat:n.RGBA8,depthFormat:oe,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(se),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),R=new ji(d.textureWidth,d.textureHeight,{format:Mn,type:ei,depthTexture:new Hh(d.textureWidth,d.textureHeight,N,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}else{const be={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,be),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),R=new ji(p.framebufferWidth,p.framebufferHeight,{format:Mn,type:ei,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}R.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Je.setContext(r),Je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function le(re){for(let ge=0;ge<re.removed.length;ge++){const be=re.removed[ge],N=E.indexOf(be);N>=0&&(E[N]=null,T[N].disconnect(be))}for(let ge=0;ge<re.added.length;ge++){const be=re.added[ge];let N=E.indexOf(be);if(N===-1){for(let se=0;se<T.length;se++)if(se>=E.length){E.push(be),N=se;break}else if(E[se]===null){E[se]=be,N=se;break}if(N===-1)break}const oe=T[N];oe&&oe.connect(be)}}const J=new Y,te=new Y;function H(re,ge,be){J.setFromMatrixPosition(ge.matrixWorld),te.setFromMatrixPosition(be.matrixWorld);const N=J.distanceTo(te),oe=ge.projectionMatrix.elements,se=be.projectionMatrix.elements,pe=oe[14]/(oe[10]-1),Fe=oe[14]/(oe[10]+1),A=(oe[9]+1)/oe[5],C=(oe[9]-1)/oe[5],x=(oe[8]-1)/oe[0],ne=(se[8]+1)/se[0],j=pe*x,W=pe*ne,Q=N/(-x+ne),ue=Q*-x;if(ge.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(ue),re.translateZ(Q),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),oe[10]===-1)re.projectionMatrix.copy(ge.projectionMatrix),re.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const K=pe+Q,S=Fe+Q,_=j-ue,D=W+(N-ue),z=A*Fe/S*K,X=C*Fe/S*K;re.projectionMatrix.makePerspective(_,D,z,X,K,S),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function ve(re,ge){ge===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(ge.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(r===null)return;let ge=re.near,be=re.far;v.texture!==null&&(v.depthNear>0&&(ge=v.depthNear),v.depthFar>0&&(be=v.depthFar)),b.near=k.near=P.near=ge,b.far=k.far=P.far=be,(U!==b.near||ie!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),U=b.near,ie=b.far),P.layers.mask=re.layers.mask|2,k.layers.mask=re.layers.mask|4,b.layers.mask=P.layers.mask|k.layers.mask;const N=re.parent,oe=b.cameras;ve(b,N);for(let se=0;se<oe.length;se++)ve(oe[se],N);oe.length===2?H(b,P,k):b.projectionMatrix.copy(P.projectionMatrix),Ee(re,b,N)};function Ee(re,ge,be){be===null?re.matrix.copy(ge.matrixWorld):(re.matrix.copy(be.matrixWorld),re.matrix.invert(),re.matrix.multiply(ge.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(ge.projectionMatrix),re.projectionMatrixInverse.copy(ge.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=Ql*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(re){l=re,d!==null&&(d.fixedFoveation=re),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=re)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(b)};let Pe=null;function Ue(re,ge){if(u=ge.getViewerPose(c||o),g=ge,u!==null){const be=u.views;p!==null&&(e.setRenderTargetFramebuffer(R,p.framebuffer),e.setRenderTarget(R));let N=!1;be.length!==b.cameras.length&&(b.cameras.length=0,N=!0);for(let se=0;se<be.length;se++){const pe=be[se];let Fe=null;if(p!==null)Fe=p.getViewport(pe);else{const C=f.getViewSubImage(d,pe);Fe=C.viewport,se===0&&(e.setRenderTargetTextures(R,C.colorTexture,d.ignoreDepthValues?void 0:C.depthStencilTexture),e.setRenderTarget(R))}let A=w[se];A===void 0&&(A=new fn,A.layers.enable(se),A.viewport=new xt,w[se]=A),A.matrix.fromArray(pe.transform.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale),A.projectionMatrix.fromArray(pe.projectionMatrix),A.projectionMatrixInverse.copy(A.projectionMatrix).invert(),A.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),se===0&&(b.matrix.copy(A.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),N===!0&&b.cameras.push(A)}const oe=r.enabledFeatures;if(oe&&oe.includes("depth-sensing")){const se=f.getDepthInformation(be[0]);se&&se.isValid&&se.texture&&v.init(e,se,r.renderState)}}for(let be=0;be<T.length;be++){const N=E[be],oe=T[be];N!==null&&oe!==void 0&&oe.update(N,ge,c||o)}Pe&&Pe(re,ge),ge.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ge}),g=null}const Je=new Vh;Je.setAnimationLoop(Ue),this.setAnimationLoop=function(re){Pe=re},this.dispose=function(){}}}const Li=new ti,lM=new St;function cM(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,Fh(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,R,T,E){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,E)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),v(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,R,T):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===jt&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===jt&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const R=e.get(h),T=R.envMap,E=R.envMapRotation;T&&(m.envMap.value=T,Li.copy(E),Li.x*=-1,Li.y*=-1,Li.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),m.envMapRotation.value.setFromMatrix4(lM.makeRotationFromEuler(Li)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,R,T){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*R,m.scale.value=T*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,R){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===jt&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=R.texture,m.transmissionSamplerSize.value.set(R.width,R.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function v(m,h){const R=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(R.matrixWorld),m.nearDistance.value=R.shadow.camera.near,m.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function uM(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,T){const E=T.program;i.uniformBlockBinding(R,E)}function c(R,T){let E=r[R.id];E===void 0&&(g(R),E=u(R),r[R.id]=E,R.addEventListener("dispose",m));const I=T.program;i.updateUBOMapping(R,I);const L=e.render.frame;s[R.id]!==L&&(d(R),s[R.id]=L)}function u(R){const T=f();R.__bindingPointIndex=T;const E=t.createBuffer(),I=R.__size,L=R.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,I,L),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,T,E),E}function f(){for(let R=0;R<a;R++)if(o.indexOf(R)===-1)return o.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(R){const T=r[R.id],E=R.uniforms,I=R.__cache;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let L=0,P=E.length;L<P;L++){const k=Array.isArray(E[L])?E[L]:[E[L]];for(let w=0,b=k.length;w<b;w++){const U=k[w];if(p(U,L,w,I)===!0){const ie=U.__offset,$=Array.isArray(U.value)?U.value:[U.value];let ae=0;for(let le=0;le<$.length;le++){const J=$[le],te=v(J);typeof J=="number"||typeof J=="boolean"?(U.__data[0]=J,t.bufferSubData(t.UNIFORM_BUFFER,ie+ae,U.__data)):J.isMatrix3?(U.__data[0]=J.elements[0],U.__data[1]=J.elements[1],U.__data[2]=J.elements[2],U.__data[3]=0,U.__data[4]=J.elements[3],U.__data[5]=J.elements[4],U.__data[6]=J.elements[5],U.__data[7]=0,U.__data[8]=J.elements[6],U.__data[9]=J.elements[7],U.__data[10]=J.elements[8],U.__data[11]=0):(J.toArray(U.__data,ae),ae+=te.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,ie,U.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(R,T,E,I){const L=R.value,P=T+"_"+E;if(I[P]===void 0)return typeof L=="number"||typeof L=="boolean"?I[P]=L:I[P]=L.clone(),!0;{const k=I[P];if(typeof L=="number"||typeof L=="boolean"){if(k!==L)return I[P]=L,!0}else if(k.equals(L)===!1)return k.copy(L),!0}return!1}function g(R){const T=R.uniforms;let E=0;const I=16;for(let P=0,k=T.length;P<k;P++){const w=Array.isArray(T[P])?T[P]:[T[P]];for(let b=0,U=w.length;b<U;b++){const ie=w[b],$=Array.isArray(ie.value)?ie.value:[ie.value];for(let ae=0,le=$.length;ae<le;ae++){const J=$[ae],te=v(J),H=E%I,ve=H%te.boundary,Ee=H+ve;E+=ve,Ee!==0&&I-Ee<te.storage&&(E+=I-Ee),ie.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),ie.__offset=E,E+=te.storage}}}const L=E%I;return L>0&&(E+=I-L),R.__size=E,R.__cache={},this}function v(R){const T={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(T.boundary=4,T.storage=4):R.isVector2?(T.boundary=8,T.storage=8):R.isVector3||R.isColor?(T.boundary=16,T.storage=12):R.isVector4?(T.boundary=16,T.storage=16):R.isMatrix3?(T.boundary=48,T.storage=48):R.isMatrix4?(T.boundary=64,T.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),T}function m(R){const T=R.target;T.removeEventListener("dispose",m);const E=o.indexOf(T.__bindingPointIndex);o.splice(E,1),t.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function h(){for(const R in r)t.deleteBuffer(r[R]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class fM{constructor(e={}){const{canvas:n=Y_(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,h=null;const R=[],T=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=un,this.toneMapping=_i,this.toneMappingExposure=1;const E=this;let I=!1,L=0,P=0,k=null,w=-1,b=null;const U=new xt,ie=new xt;let $=null;const ae=new lt(0);let le=0,J=n.width,te=n.height,H=1,ve=null,Ee=null;const Pe=new xt(0,0,J,te),Ue=new xt(0,0,J,te);let Je=!1;const re=new kh;let ge=!1,be=!1;this.transmissionResolutionScale=1;const N=new St,oe=new St,se=new Y,pe=new xt,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let A=!1;function C(){return k===null?H:1}let x=i;function ne(M,O){return n.getContext(M,O)}try{const M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Rc}`),n.addEventListener("webglcontextlost",ce,!1),n.addEventListener("webglcontextrestored",Re,!1),n.addEventListener("webglcontextcreationerror",Ae,!1),x===null){const O="webgl2";if(x=ne(O,M),x===null)throw ne(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let j,W,Q,ue,K,S,_,D,z,X,V,_e,fe,xe,ze,he,Me,Ie,He,Se,Ve,Xe,dt,F;function Te(){j=new SS(x),j.init(),Xe=new nM(x,j),W=new pS(x,j,e,Xe),Q=new eM(x,j),W.reverseDepthBuffer&&d&&Q.buffers.depth.setReversed(!0),ue=new ES(x),K=new Hy,S=new tM(x,j,Q,K,W,Xe,ue),_=new gS(E),D=new xS(E),z=new Pv(x),dt=new dS(x,z),X=new yS(x,z,ue,dt),V=new TS(x,X,z,ue),He=new bS(x,W,S),he=new mS(K),_e=new zy(E,_,D,j,W,dt,he),fe=new cM(E,K),xe=new Gy,ze=new Yy(j),Ie=new fS(E,_,D,Q,V,p,l),Me=new Jy(E,V,W),F=new uM(x,ue,W,Q),Se=new hS(x,j,ue),Ve=new MS(x,j,ue),ue.programs=_e.programs,E.capabilities=W,E.extensions=j,E.properties=K,E.renderLists=xe,E.shadowMap=Me,E.state=Q,E.info=ue}Te();const ee=new aM(E,x);this.xr=ee,this.getContext=function(){return x},this.getContextAttributes=function(){return x.getContextAttributes()},this.forceContextLoss=function(){const M=j.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=j.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(M){M!==void 0&&(H=M,this.setSize(J,te,!1))},this.getSize=function(M){return M.set(J,te)},this.setSize=function(M,O,G=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=M,te=O,n.width=Math.floor(M*H),n.height=Math.floor(O*H),G===!0&&(n.style.width=M+"px",n.style.height=O+"px"),this.setViewport(0,0,M,O)},this.getDrawingBufferSize=function(M){return M.set(J*H,te*H).floor()},this.setDrawingBufferSize=function(M,O,G){J=M,te=O,H=G,n.width=Math.floor(M*G),n.height=Math.floor(O*G),this.setViewport(0,0,M,O)},this.getCurrentViewport=function(M){return M.copy(U)},this.getViewport=function(M){return M.copy(Pe)},this.setViewport=function(M,O,G,q){M.isVector4?Pe.set(M.x,M.y,M.z,M.w):Pe.set(M,O,G,q),Q.viewport(U.copy(Pe).multiplyScalar(H).round())},this.getScissor=function(M){return M.copy(Ue)},this.setScissor=function(M,O,G,q){M.isVector4?Ue.set(M.x,M.y,M.z,M.w):Ue.set(M,O,G,q),Q.scissor(ie.copy(Ue).multiplyScalar(H).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(M){Q.setScissorTest(Je=M)},this.setOpaqueSort=function(M){ve=M},this.setTransparentSort=function(M){Ee=M},this.getClearColor=function(M){return M.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor.apply(Ie,arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha.apply(Ie,arguments)},this.clear=function(M=!0,O=!0,G=!0){let q=0;if(M){let B=!1;if(k!==null){const me=k.texture.format;B=me===Uc||me===Ic||me===Lc}if(B){const me=k.texture.type,we=me===ei||me===$i||me===_s||me===Ur||me===Pc||me===Dc,Ce=Ie.getClearColor(),De=Ie.getClearAlpha(),Ge=Ce.r,We=Ce.g,Ne=Ce.b;we?(g[0]=Ge,g[1]=We,g[2]=Ne,g[3]=De,x.clearBufferuiv(x.COLOR,0,g)):(v[0]=Ge,v[1]=We,v[2]=Ne,v[3]=De,x.clearBufferiv(x.COLOR,0,v))}else q|=x.COLOR_BUFFER_BIT}O&&(q|=x.DEPTH_BUFFER_BIT),G&&(q|=x.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),x.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ce,!1),n.removeEventListener("webglcontextrestored",Re,!1),n.removeEventListener("webglcontextcreationerror",Ae,!1),Ie.dispose(),xe.dispose(),ze.dispose(),K.dispose(),_.dispose(),D.dispose(),V.dispose(),dt.dispose(),F.dispose(),_e.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",Vc),ee.removeEventListener("sessionend",Gc),Ei.stop()};function ce(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Re(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const M=ue.autoReset,O=Me.enabled,G=Me.autoUpdate,q=Me.needsUpdate,B=Me.type;Te(),ue.autoReset=M,Me.enabled=O,Me.autoUpdate=G,Me.needsUpdate=q,Me.type=B}function Ae(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function je(M){const O=M.target;O.removeEventListener("dispose",je),_t(O)}function _t(M){Lt(M),K.remove(M)}function Lt(M){const O=K.get(M).programs;O!==void 0&&(O.forEach(function(G){_e.releaseProgram(G)}),M.isShaderMaterial&&_e.releaseShaderCache(M))}this.renderBufferDirect=function(M,O,G,q,B,me){O===null&&(O=Fe);const we=B.isMesh&&B.matrixWorld.determinant()<0,Ce=Ip(M,O,G,q,B);Q.setMaterial(q,we);let De=G.index,Ge=1;if(q.wireframe===!0){if(De=X.getWireframeAttribute(G),De===void 0)return;Ge=2}const We=G.drawRange,Ne=G.attributes.position;let Qe=We.start*Ge,nt=(We.start+We.count)*Ge;me!==null&&(Qe=Math.max(Qe,me.start*Ge),nt=Math.min(nt,(me.start+me.count)*Ge)),De!==null?(Qe=Math.max(Qe,0),nt=Math.min(nt,De.count)):Ne!=null&&(Qe=Math.max(Qe,0),nt=Math.min(nt,Ne.count));const yt=nt-Qe;if(yt<0||yt===1/0)return;dt.setup(B,q,Ce,G,De);let vt,et=Se;if(De!==null&&(vt=z.get(De),et=Ve,et.setIndex(vt)),B.isMesh)q.wireframe===!0?(Q.setLineWidth(q.wireframeLinewidth*C()),et.setMode(x.LINES)):et.setMode(x.TRIANGLES);else if(B.isLine){let Oe=q.linewidth;Oe===void 0&&(Oe=1),Q.setLineWidth(Oe*C()),B.isLineSegments?et.setMode(x.LINES):B.isLineLoop?et.setMode(x.LINE_LOOP):et.setMode(x.LINE_STRIP)}else B.isPoints?et.setMode(x.POINTS):B.isSprite&&et.setMode(x.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)et.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(j.get("WEBGL_multi_draw"))et.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Oe=B._multiDrawStarts,Pt=B._multiDrawCounts,it=B._multiDrawCount,_n=De?z.get(De).bytesPerElement:1,Zi=K.get(q).currentProgram.getUniforms();for(let Jt=0;Jt<it;Jt++)Zi.setValue(x,"_gl_DrawID",Jt),et.render(Oe[Jt]/_n,Pt[Jt])}else if(B.isInstancedMesh)et.renderInstances(Qe,yt,B.count);else if(G.isInstancedBufferGeometry){const Oe=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Pt=Math.min(G.instanceCount,Oe);et.renderInstances(Qe,yt,Pt)}else et.render(Qe,yt)};function at(M,O,G){M.transparent===!0&&M.side===jn&&M.forceSinglePass===!1?(M.side=jt,M.needsUpdate=!0,Is(M,O,G),M.side=xi,M.needsUpdate=!0,Is(M,O,G),M.side=jn):Is(M,O,G)}this.compile=function(M,O,G=null){G===null&&(G=M),h=ze.get(G),h.init(O),T.push(h),G.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(h.pushLight(B),B.castShadow&&h.pushShadow(B))}),M!==G&&M.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(h.pushLight(B),B.castShadow&&h.pushShadow(B))}),h.setupLights();const q=new Set;return M.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const me=B.material;if(me)if(Array.isArray(me))for(let we=0;we<me.length;we++){const Ce=me[we];at(Ce,G,B),q.add(Ce)}else at(me,G,B),q.add(me)}),T.pop(),h=null,q},this.compileAsync=function(M,O,G=null){const q=this.compile(M,O,G);return new Promise(B=>{function me(){if(q.forEach(function(we){K.get(we).currentProgram.isReady()&&q.delete(we)}),q.size===0){B(M);return}setTimeout(me,10)}j.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let gn=null;function Fn(M){gn&&gn(M)}function Vc(){Ei.stop()}function Gc(){Ei.start()}const Ei=new Vh;Ei.setAnimationLoop(Fn),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(M){gn=M,ee.setAnimationLoop(M),M===null?Ei.stop():Ei.start()},ee.addEventListener("sessionstart",Vc),ee.addEventListener("sessionend",Gc),this.render=function(M,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(O),O=ee.getCamera()),M.isScene===!0&&M.onBeforeRender(E,M,O,k),h=ze.get(M,T.length),h.init(O),T.push(h),oe.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),re.setFromProjectionMatrix(oe),be=this.localClippingEnabled,ge=he.init(this.clippingPlanes,be),m=xe.get(M,R.length),m.init(),R.push(m),ee.enabled===!0&&ee.isPresenting===!0){const me=E.xr.getDepthSensingMesh();me!==null&&la(me,O,-1/0,E.sortObjects)}la(M,O,0,E.sortObjects),m.finish(),E.sortObjects===!0&&m.sort(ve,Ee),A=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,A&&Ie.addToRenderList(m,M),this.info.render.frame++,ge===!0&&he.beginShadows();const G=h.state.shadowsArray;Me.render(G,M,O),ge===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,B=m.transmissive;if(h.setupLights(),O.isArrayCamera){const me=O.cameras;if(B.length>0)for(let we=0,Ce=me.length;we<Ce;we++){const De=me[we];Xc(q,B,M,De)}A&&Ie.render(M);for(let we=0,Ce=me.length;we<Ce;we++){const De=me[we];Wc(m,M,De,De.viewport)}}else B.length>0&&Xc(q,B,M,O),A&&Ie.render(M),Wc(m,M,O);k!==null&&P===0&&(S.updateMultisampleRenderTarget(k),S.updateRenderTargetMipmap(k)),M.isScene===!0&&M.onAfterRender(E,M,O),dt.resetDefaultState(),w=-1,b=null,T.pop(),T.length>0?(h=T[T.length-1],ge===!0&&he.setGlobalState(E.clippingPlanes,h.state.camera)):h=null,R.pop(),R.length>0?m=R[R.length-1]:m=null};function la(M,O,G,q){if(M.visible===!1)return;if(M.layers.test(O.layers)){if(M.isGroup)G=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(O);else if(M.isLight)h.pushLight(M),M.castShadow&&h.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||re.intersectsSprite(M)){q&&pe.setFromMatrixPosition(M.matrixWorld).applyMatrix4(oe);const we=V.update(M),Ce=M.material;Ce.visible&&m.push(M,we,Ce,G,pe.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||re.intersectsObject(M))){const we=V.update(M),Ce=M.material;if(q&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),pe.copy(M.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),pe.copy(we.boundingSphere.center)),pe.applyMatrix4(M.matrixWorld).applyMatrix4(oe)),Array.isArray(Ce)){const De=we.groups;for(let Ge=0,We=De.length;Ge<We;Ge++){const Ne=De[Ge],Qe=Ce[Ne.materialIndex];Qe&&Qe.visible&&m.push(M,we,Qe,G,pe.z,Ne)}}else Ce.visible&&m.push(M,we,Ce,G,pe.z,null)}}const me=M.children;for(let we=0,Ce=me.length;we<Ce;we++)la(me[we],O,G,q)}function Wc(M,O,G,q){const B=M.opaque,me=M.transmissive,we=M.transparent;h.setupLightsView(G),ge===!0&&he.setGlobalState(E.clippingPlanes,G),q&&Q.viewport(U.copy(q)),B.length>0&&Ls(B,O,G),me.length>0&&Ls(me,O,G),we.length>0&&Ls(we,O,G),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function Xc(M,O,G,q){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[q.id]===void 0&&(h.state.transmissionRenderTarget[q.id]=new ji(1,1,{generateMipmaps:!0,type:j.has("EXT_color_buffer_half_float")||j.has("EXT_color_buffer_float")?bs:ei,minFilter:Hi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const me=h.state.transmissionRenderTarget[q.id],we=q.viewport||U;me.setSize(we.z*E.transmissionResolutionScale,we.w*E.transmissionResolutionScale);const Ce=E.getRenderTarget();E.setRenderTarget(me),E.getClearColor(ae),le=E.getClearAlpha(),le<1&&E.setClearColor(16777215,.5),E.clear(),A&&Ie.render(G);const De=E.toneMapping;E.toneMapping=_i;const Ge=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),h.setupLightsView(q),ge===!0&&he.setGlobalState(E.clippingPlanes,q),Ls(M,G,q),S.updateMultisampleRenderTarget(me),S.updateRenderTargetMipmap(me),j.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let Ne=0,Qe=O.length;Ne<Qe;Ne++){const nt=O[Ne],yt=nt.object,vt=nt.geometry,et=nt.material,Oe=nt.group;if(et.side===jn&&yt.layers.test(q.layers)){const Pt=et.side;et.side=jt,et.needsUpdate=!0,qc(yt,G,q,vt,et,Oe),et.side=Pt,et.needsUpdate=!0,We=!0}}We===!0&&(S.updateMultisampleRenderTarget(me),S.updateRenderTargetMipmap(me))}E.setRenderTarget(Ce),E.setClearColor(ae,le),Ge!==void 0&&(q.viewport=Ge),E.toneMapping=De}function Ls(M,O,G){const q=O.isScene===!0?O.overrideMaterial:null;for(let B=0,me=M.length;B<me;B++){const we=M[B],Ce=we.object,De=we.geometry,Ge=q===null?we.material:q,We=we.group;Ce.layers.test(G.layers)&&qc(Ce,O,G,De,Ge,We)}}function qc(M,O,G,q,B,me){M.onBeforeRender(E,O,G,q,B,me),M.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),B.onBeforeRender(E,O,G,q,M,me),B.transparent===!0&&B.side===jn&&B.forceSinglePass===!1?(B.side=jt,B.needsUpdate=!0,E.renderBufferDirect(G,O,q,B,M,me),B.side=xi,B.needsUpdate=!0,E.renderBufferDirect(G,O,q,B,M,me),B.side=jn):E.renderBufferDirect(G,O,q,B,M,me),M.onAfterRender(E,O,G,q,B,me)}function Is(M,O,G){O.isScene!==!0&&(O=Fe);const q=K.get(M),B=h.state.lights,me=h.state.shadowsArray,we=B.state.version,Ce=_e.getParameters(M,B.state,me,O,G),De=_e.getProgramCacheKey(Ce);let Ge=q.programs;q.environment=M.isMeshStandardMaterial?O.environment:null,q.fog=O.fog,q.envMap=(M.isMeshStandardMaterial?D:_).get(M.envMap||q.environment),q.envMapRotation=q.environment!==null&&M.envMap===null?O.environmentRotation:M.envMapRotation,Ge===void 0&&(M.addEventListener("dispose",je),Ge=new Map,q.programs=Ge);let We=Ge.get(De);if(We!==void 0){if(q.currentProgram===We&&q.lightsStateVersion===we)return jc(M,Ce),We}else Ce.uniforms=_e.getUniforms(M),M.onBeforeCompile(Ce,E),We=_e.acquireProgram(Ce,De),Ge.set(De,We),q.uniforms=Ce.uniforms;const Ne=q.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ne.clippingPlanes=he.uniform),jc(M,Ce),q.needsLights=Np(M),q.lightsStateVersion=we,q.needsLights&&(Ne.ambientLightColor.value=B.state.ambient,Ne.lightProbe.value=B.state.probe,Ne.directionalLights.value=B.state.directional,Ne.directionalLightShadows.value=B.state.directionalShadow,Ne.spotLights.value=B.state.spot,Ne.spotLightShadows.value=B.state.spotShadow,Ne.rectAreaLights.value=B.state.rectArea,Ne.ltc_1.value=B.state.rectAreaLTC1,Ne.ltc_2.value=B.state.rectAreaLTC2,Ne.pointLights.value=B.state.point,Ne.pointLightShadows.value=B.state.pointShadow,Ne.hemisphereLights.value=B.state.hemi,Ne.directionalShadowMap.value=B.state.directionalShadowMap,Ne.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ne.spotShadowMap.value=B.state.spotShadowMap,Ne.spotLightMatrix.value=B.state.spotLightMatrix,Ne.spotLightMap.value=B.state.spotLightMap,Ne.pointShadowMap.value=B.state.pointShadowMap,Ne.pointShadowMatrix.value=B.state.pointShadowMatrix),q.currentProgram=We,q.uniformsList=null,We}function $c(M){if(M.uniformsList===null){const O=M.currentProgram.getUniforms();M.uniformsList=xo.seqWithValue(O.seq,M.uniforms)}return M.uniformsList}function jc(M,O){const G=K.get(M);G.outputColorSpace=O.outputColorSpace,G.batching=O.batching,G.batchingColor=O.batchingColor,G.instancing=O.instancing,G.instancingColor=O.instancingColor,G.instancingMorph=O.instancingMorph,G.skinning=O.skinning,G.morphTargets=O.morphTargets,G.morphNormals=O.morphNormals,G.morphColors=O.morphColors,G.morphTargetsCount=O.morphTargetsCount,G.numClippingPlanes=O.numClippingPlanes,G.numIntersection=O.numClipIntersection,G.vertexAlphas=O.vertexAlphas,G.vertexTangents=O.vertexTangents,G.toneMapping=O.toneMapping}function Ip(M,O,G,q,B){O.isScene!==!0&&(O=Fe),S.resetTextureUnits();const me=O.fog,we=q.isMeshStandardMaterial?O.environment:null,Ce=k===null?E.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Fr,De=(q.isMeshStandardMaterial?D:_).get(q.envMap||we),Ge=q.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,We=!!G.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ne=!!G.morphAttributes.position,Qe=!!G.morphAttributes.normal,nt=!!G.morphAttributes.color;let yt=_i;q.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(yt=E.toneMapping);const vt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,et=vt!==void 0?vt.length:0,Oe=K.get(q),Pt=h.state.lights;if(ge===!0&&(be===!0||M!==b)){const Ht=M===b&&q.id===w;he.setState(q,M,Ht)}let it=!1;q.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==Pt.state.version||Oe.outputColorSpace!==Ce||B.isBatchedMesh&&Oe.batching===!1||!B.isBatchedMesh&&Oe.batching===!0||B.isBatchedMesh&&Oe.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Oe.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Oe.instancing===!1||!B.isInstancedMesh&&Oe.instancing===!0||B.isSkinnedMesh&&Oe.skinning===!1||!B.isSkinnedMesh&&Oe.skinning===!0||B.isInstancedMesh&&Oe.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Oe.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Oe.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Oe.instancingMorph===!1&&B.morphTexture!==null||Oe.envMap!==De||q.fog===!0&&Oe.fog!==me||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==he.numPlanes||Oe.numIntersection!==he.numIntersection)||Oe.vertexAlphas!==Ge||Oe.vertexTangents!==We||Oe.morphTargets!==Ne||Oe.morphNormals!==Qe||Oe.morphColors!==nt||Oe.toneMapping!==yt||Oe.morphTargetsCount!==et)&&(it=!0):(it=!0,Oe.__version=q.version);let _n=Oe.currentProgram;it===!0&&(_n=Is(q,O,B));let Zi=!1,Jt=!1,Xr=!1;const mt=_n.getUniforms(),an=Oe.uniforms;if(Q.useProgram(_n.program)&&(Zi=!0,Jt=!0,Xr=!0),q.id!==w&&(w=q.id,Jt=!0),Zi||b!==M){Q.buffers.depth.getReversed()?(N.copy(M.projectionMatrix),Z_(N),J_(N),mt.setValue(x,"projectionMatrix",N)):mt.setValue(x,"projectionMatrix",M.projectionMatrix),mt.setValue(x,"viewMatrix",M.matrixWorldInverse);const qt=mt.map.cameraPosition;qt!==void 0&&qt.setValue(x,se.setFromMatrixPosition(M.matrixWorld)),W.logarithmicDepthBuffer&&mt.setValue(x,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&mt.setValue(x,"isOrthographic",M.isOrthographicCamera===!0),b!==M&&(b=M,Jt=!0,Xr=!0)}if(B.isSkinnedMesh){mt.setOptional(x,B,"bindMatrix"),mt.setOptional(x,B,"bindMatrixInverse");const Ht=B.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),mt.setValue(x,"boneTexture",Ht.boneTexture,S))}B.isBatchedMesh&&(mt.setOptional(x,B,"batchingTexture"),mt.setValue(x,"batchingTexture",B._matricesTexture,S),mt.setOptional(x,B,"batchingIdTexture"),mt.setValue(x,"batchingIdTexture",B._indirectTexture,S),mt.setOptional(x,B,"batchingColorTexture"),B._colorsTexture!==null&&mt.setValue(x,"batchingColorTexture",B._colorsTexture,S));const ln=G.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&He.update(B,G,_n),(Jt||Oe.receiveShadow!==B.receiveShadow)&&(Oe.receiveShadow=B.receiveShadow,mt.setValue(x,"receiveShadow",B.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(an.envMap.value=De,an.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&O.environment!==null&&(an.envMapIntensity.value=O.environmentIntensity),Jt&&(mt.setValue(x,"toneMappingExposure",E.toneMappingExposure),Oe.needsLights&&Up(an,Xr),me&&q.fog===!0&&fe.refreshFogUniforms(an,me),fe.refreshMaterialUniforms(an,q,H,te,h.state.transmissionRenderTarget[M.id]),xo.upload(x,$c(Oe),an,S)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(xo.upload(x,$c(Oe),an,S),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&mt.setValue(x,"center",B.center),mt.setValue(x,"modelViewMatrix",B.modelViewMatrix),mt.setValue(x,"normalMatrix",B.normalMatrix),mt.setValue(x,"modelMatrix",B.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Ht=q.uniformsGroups;for(let qt=0,ca=Ht.length;qt<ca;qt++){const bi=Ht[qt];F.update(bi,_n),F.bind(bi,_n)}}return _n}function Up(M,O){M.ambientLightColor.needsUpdate=O,M.lightProbe.needsUpdate=O,M.directionalLights.needsUpdate=O,M.directionalLightShadows.needsUpdate=O,M.pointLights.needsUpdate=O,M.pointLightShadows.needsUpdate=O,M.spotLights.needsUpdate=O,M.spotLightShadows.needsUpdate=O,M.rectAreaLights.needsUpdate=O,M.hemisphereLights.needsUpdate=O}function Np(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(M,O,G){K.get(M.texture).__webglTexture=O,K.get(M.depthTexture).__webglTexture=G;const q=K.get(M);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=G===void 0,q.__autoAllocateDepthBuffer||j.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,O){const G=K.get(M);G.__webglFramebuffer=O,G.__useDefaultFramebuffer=O===void 0};const Fp=x.createFramebuffer();this.setRenderTarget=function(M,O=0,G=0){k=M,L=O,P=G;let q=!0,B=null,me=!1,we=!1;if(M){const De=K.get(M);if(De.__useDefaultFramebuffer!==void 0)Q.bindFramebuffer(x.FRAMEBUFFER,null),q=!1;else if(De.__webglFramebuffer===void 0)S.setupRenderTarget(M);else if(De.__hasExternalTextures)S.rebindTextures(M,K.get(M.texture).__webglTexture,K.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ne=M.depthTexture;if(De.__boundDepthTexture!==Ne){if(Ne!==null&&K.has(Ne)&&(M.width!==Ne.image.width||M.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(M)}}const Ge=M.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(we=!0);const We=K.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(We[O])?B=We[O][G]:B=We[O],me=!0):M.samples>0&&S.useMultisampledRTT(M)===!1?B=K.get(M).__webglMultisampledFramebuffer:Array.isArray(We)?B=We[G]:B=We,U.copy(M.viewport),ie.copy(M.scissor),$=M.scissorTest}else U.copy(Pe).multiplyScalar(H).floor(),ie.copy(Ue).multiplyScalar(H).floor(),$=Je;if(G!==0&&(B=Fp),Q.bindFramebuffer(x.FRAMEBUFFER,B)&&q&&Q.drawBuffers(M,B),Q.viewport(U),Q.scissor(ie),Q.setScissorTest($),me){const De=K.get(M.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_CUBE_MAP_POSITIVE_X+O,De.__webglTexture,G)}else if(we){const De=K.get(M.texture),Ge=O;x.framebufferTextureLayer(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,De.__webglTexture,G,Ge)}else if(M!==null&&G!==0){const De=K.get(M.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,De.__webglTexture,G)}w=-1},this.readRenderTargetPixels=function(M,O,G,q,B,me,we){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=K.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&we!==void 0&&(Ce=Ce[we]),Ce){Q.bindFramebuffer(x.FRAMEBUFFER,Ce);try{const De=M.texture,Ge=De.format,We=De.type;if(!W.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!W.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=M.width-q&&G>=0&&G<=M.height-B&&x.readPixels(O,G,q,B,Xe.convert(Ge),Xe.convert(We),me)}finally{const De=k!==null?K.get(k).__webglFramebuffer:null;Q.bindFramebuffer(x.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(M,O,G,q,B,me,we){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=K.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&we!==void 0&&(Ce=Ce[we]),Ce){const De=M.texture,Ge=De.format,We=De.type;if(!W.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!W.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=M.width-q&&G>=0&&G<=M.height-B){Q.bindFramebuffer(x.FRAMEBUFFER,Ce);const Ne=x.createBuffer();x.bindBuffer(x.PIXEL_PACK_BUFFER,Ne),x.bufferData(x.PIXEL_PACK_BUFFER,me.byteLength,x.STREAM_READ),x.readPixels(O,G,q,B,Xe.convert(Ge),Xe.convert(We),0);const Qe=k!==null?K.get(k).__webglFramebuffer:null;Q.bindFramebuffer(x.FRAMEBUFFER,Qe);const nt=x.fenceSync(x.SYNC_GPU_COMMANDS_COMPLETE,0);return x.flush(),await K_(x,nt,4),x.bindBuffer(x.PIXEL_PACK_BUFFER,Ne),x.getBufferSubData(x.PIXEL_PACK_BUFFER,0,me),x.deleteBuffer(Ne),x.deleteSync(nt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,O=null,G=0){M.isTexture!==!0&&(mr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,M=arguments[1]);const q=Math.pow(2,-G),B=Math.floor(M.image.width*q),me=Math.floor(M.image.height*q),we=O!==null?O.x:0,Ce=O!==null?O.y:0;S.setTexture2D(M,0),x.copyTexSubImage2D(x.TEXTURE_2D,G,0,0,we,Ce,B,me),Q.unbindTexture()};const Op=x.createFramebuffer(),Bp=x.createFramebuffer();this.copyTextureToTexture=function(M,O,G=null,q=null,B=0,me=null){M.isTexture!==!0&&(mr("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,M=arguments[1],O=arguments[2],me=arguments[3]||0,G=null),me===null&&(B!==0?(mr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),me=B,B=0):me=0);let we,Ce,De,Ge,We,Ne,Qe,nt,yt;const vt=M.isCompressedTexture?M.mipmaps[me]:M.image;if(G!==null)we=G.max.x-G.min.x,Ce=G.max.y-G.min.y,De=G.isBox3?G.max.z-G.min.z:1,Ge=G.min.x,We=G.min.y,Ne=G.isBox3?G.min.z:0;else{const ln=Math.pow(2,-B);we=Math.floor(vt.width*ln),Ce=Math.floor(vt.height*ln),M.isDataArrayTexture?De=vt.depth:M.isData3DTexture?De=Math.floor(vt.depth*ln):De=1,Ge=0,We=0,Ne=0}q!==null?(Qe=q.x,nt=q.y,yt=q.z):(Qe=0,nt=0,yt=0);const et=Xe.convert(O.format),Oe=Xe.convert(O.type);let Pt;O.isData3DTexture?(S.setTexture3D(O,0),Pt=x.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(S.setTexture2DArray(O,0),Pt=x.TEXTURE_2D_ARRAY):(S.setTexture2D(O,0),Pt=x.TEXTURE_2D),x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,O.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,O.unpackAlignment);const it=x.getParameter(x.UNPACK_ROW_LENGTH),_n=x.getParameter(x.UNPACK_IMAGE_HEIGHT),Zi=x.getParameter(x.UNPACK_SKIP_PIXELS),Jt=x.getParameter(x.UNPACK_SKIP_ROWS),Xr=x.getParameter(x.UNPACK_SKIP_IMAGES);x.pixelStorei(x.UNPACK_ROW_LENGTH,vt.width),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,vt.height),x.pixelStorei(x.UNPACK_SKIP_PIXELS,Ge),x.pixelStorei(x.UNPACK_SKIP_ROWS,We),x.pixelStorei(x.UNPACK_SKIP_IMAGES,Ne);const mt=M.isDataArrayTexture||M.isData3DTexture,an=O.isDataArrayTexture||O.isData3DTexture;if(M.isDepthTexture){const ln=K.get(M),Ht=K.get(O),qt=K.get(ln.__renderTarget),ca=K.get(Ht.__renderTarget);Q.bindFramebuffer(x.READ_FRAMEBUFFER,qt.__webglFramebuffer),Q.bindFramebuffer(x.DRAW_FRAMEBUFFER,ca.__webglFramebuffer);for(let bi=0;bi<De;bi++)mt&&(x.framebufferTextureLayer(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,K.get(M).__webglTexture,B,Ne+bi),x.framebufferTextureLayer(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,K.get(O).__webglTexture,me,yt+bi)),x.blitFramebuffer(Ge,We,we,Ce,Qe,nt,we,Ce,x.DEPTH_BUFFER_BIT,x.NEAREST);Q.bindFramebuffer(x.READ_FRAMEBUFFER,null),Q.bindFramebuffer(x.DRAW_FRAMEBUFFER,null)}else if(B!==0||M.isRenderTargetTexture||K.has(M)){const ln=K.get(M),Ht=K.get(O);Q.bindFramebuffer(x.READ_FRAMEBUFFER,Op),Q.bindFramebuffer(x.DRAW_FRAMEBUFFER,Bp);for(let qt=0;qt<De;qt++)mt?x.framebufferTextureLayer(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,ln.__webglTexture,B,Ne+qt):x.framebufferTexture2D(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,ln.__webglTexture,B),an?x.framebufferTextureLayer(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,Ht.__webglTexture,me,yt+qt):x.framebufferTexture2D(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,Ht.__webglTexture,me),B!==0?x.blitFramebuffer(Ge,We,we,Ce,Qe,nt,we,Ce,x.COLOR_BUFFER_BIT,x.NEAREST):an?x.copyTexSubImage3D(Pt,me,Qe,nt,yt+qt,Ge,We,we,Ce):x.copyTexSubImage2D(Pt,me,Qe,nt,Ge,We,we,Ce);Q.bindFramebuffer(x.READ_FRAMEBUFFER,null),Q.bindFramebuffer(x.DRAW_FRAMEBUFFER,null)}else an?M.isDataTexture||M.isData3DTexture?x.texSubImage3D(Pt,me,Qe,nt,yt,we,Ce,De,et,Oe,vt.data):O.isCompressedArrayTexture?x.compressedTexSubImage3D(Pt,me,Qe,nt,yt,we,Ce,De,et,vt.data):x.texSubImage3D(Pt,me,Qe,nt,yt,we,Ce,De,et,Oe,vt):M.isDataTexture?x.texSubImage2D(x.TEXTURE_2D,me,Qe,nt,we,Ce,et,Oe,vt.data):M.isCompressedTexture?x.compressedTexSubImage2D(x.TEXTURE_2D,me,Qe,nt,vt.width,vt.height,et,vt.data):x.texSubImage2D(x.TEXTURE_2D,me,Qe,nt,we,Ce,et,Oe,vt);x.pixelStorei(x.UNPACK_ROW_LENGTH,it),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,_n),x.pixelStorei(x.UNPACK_SKIP_PIXELS,Zi),x.pixelStorei(x.UNPACK_SKIP_ROWS,Jt),x.pixelStorei(x.UNPACK_SKIP_IMAGES,Xr),me===0&&O.generateMipmaps&&x.generateMipmap(Pt),Q.unbindTexture()},this.copyTextureToTexture3D=function(M,O,G=null,q=null,B=0){return M.isTexture!==!0&&(mr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,q=arguments[1]||null,M=arguments[2],O=arguments[3],B=arguments[4]||0),mr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,O,G,q,B)},this.initRenderTarget=function(M){K.get(M).__webglFramebuffer===void 0&&S.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?S.setTextureCube(M,0):M.isData3DTexture?S.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?S.setTexture2DArray(M,0):S.setTexture2D(M,0),Q.unbindTexture()},this.resetState=function(){L=0,P=0,k=null,Q.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=tt._getDrawingBufferColorSpace(e),n.unpackColorSpace=tt._getUnpackColorSpace()}}function dM(t){const e=new yv,n=new fn(75,window.innerWidth/window.innerHeight,.1,1e3);n.position.z=10;const i=new fM({canvas:t});i.setSize(window.innerWidth,window.innerHeight),i.setPixelRatio(window.devicePixelRatio);const r=500,s=new Float32Array(r*3),o=new Float32Array(r);for(let g=0;g<r;g++){const v=new Y((Math.random()-.5)*2,(Math.random()-.5)*2,(Math.random()-.5)*2);v.normalize();const m=100+Math.random()*200;v.multiplyScalar(m),s[g*3]=v.x,s[g*3+1]=v.y,s[g*3+2]=v.z,o[g]=Math.random()*200+100}const a=new ii;a.setAttribute("position",new pn(s,3)),a.setAttribute("size",new pn(o,1));const l=new zh({color:12303291,size:1,sizeAttenuation:!0}),c=new bv(a,l);e.add(c);const u=new ns;e.add(u),u.add(n),n.position.set(0,0,10);const f={x:2e-4,y:4e-4},d=()=>{requestAnimationFrame(d),u.rotation.x+=f.x,u.rotation.y+=f.y,i.render(e,n)};d();const p=()=>{i.setSize(window.innerWidth,window.innerHeight),n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix()};return window.addEventListener("resize",p),()=>{window.removeEventListener("resize",p),a.dispose(),l.dispose()}}const on=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},hM={name:"Starfield",mounted(){Ec(()=>{const t=this.$refs.canvas;t&&dM(t)})}},pM={ref:"canvas",class:"starfield"};function mM(t,e,n,i,r,s){return gt(),Wt("canvas",pM,null,512)}const gM=on(hM,[["render",mM],["__scopeId","data-v-953ab26e"]]),_M={name:"BasePage",components:{Starfield:gM}},vM={class:"base-page"},xM={class:"page-header"},SM={class:"header-content"},yM={class:"header-links"},MM={class:"page-content"};function EM(t,e,n,i,r,s){const o=Tt("Starfield"),a=Tt("router-link");return gt(),Wt(Ct,null,[Be(o),y("div",vM,[y("header",xM,[y("div",SM,[Be(a,{to:"/"},{default:Le(()=>e[0]||(e[0]=[y("h1",null,"Derek Corniello",-1)])),_:1}),y("nav",yM,[Be(a,{class:"r-link",to:"/about"},{default:Le(()=>e[1]||(e[1]=[de("About Me")])),_:1}),Be(a,{class:"r-link",to:"/projects"},{default:Le(()=>e[2]||(e[2]=[de("Projects")])),_:1}),Be(a,{class:"r-link",to:"/blog"},{default:Le(()=>e[3]||(e[3]=[de("Blog")])),_:1}),Be(a,{class:"r-link",to:"/contact"},{default:Le(()=>e[4]||(e[4]=[de("Contact")])),_:1}),Be(a,{class:"r-link",to:"/resume"},{default:Le(()=>e[5]||(e[5]=[de("Resume")])),_:1})])])]),y("main",MM,[Ao(t.$slots,"default",{},void 0)]),e[6]||(e[6]=ah('<footer class="page-footer" data-v-c5b5c957><div class="footer-content" data-v-c5b5c957><p data-v-c5b5c957>Created by: Derek Corniello</p><div class="links" data-v-c5b5c957><a href="https://www.linkedin.com/in/derek-corniello" target="_blank" style="text-decoration:none;" data-v-c5b5c957><i class="bi bi-linkedin" data-v-c5b5c957></i> LinkedIn </a><a href="https://github.com/DerekCorniello" target="_blank" style="text-decoration:none;" data-v-c5b5c957><i class="bi bi-github" data-v-c5b5c957></i> GitHub </a><a href="https://twitter.com/DerekCorniello" target="_blank" style="text-decoration:none;" data-v-c5b5c957><i class="bi bi-twitter-x" data-v-c5b5c957></i> X </a><a href="/resume" target="_blank" style="text-decoration:none;" data-v-c5b5c957><i class="bi bi-file-earmark-text" data-v-c5b5c957></i> Resume </a></div></div></footer>',1))])],64)}const Vr=on(_M,[["render",EM],["__scopeId","data-v-c5b5c957"]]),bM={name:"TerminalGreeting",mounted(){this.animateTypewriter()},methods:{animateTypewriter(){const t="Welcome, traveler, to Derek Corniello's Space!",e=this.$refs.typewriter;e.innerHTML+="> ";let n=0;const r=3e3/t.length,s=()=>{n<t.length&&(e.innerHTML+=t.charAt(n),n++,setTimeout(s,r))};s()}}},TM={class:"terminal-container"},wM={class:"terminal-content"},AM={class:"greeting-text"},RM={class:"terminal-line"},CM={ref:"typewriter",class:"terminal-text"};function PM(t,e,n,i,r,s){return gt(),Wt("div",TM,[e[2]||(e[2]=ah('<div class="terminal-header" data-v-bb3e416e><div class="terminal-buttons" data-v-bb3e416e><span class="terminal-button red" data-v-bb3e416e></span><span class="terminal-button yellow" data-v-bb3e416e></span><span class="terminal-button green" data-v-bb3e416e></span></div><div class="terminal-title" data-v-bb3e416e>terminal@dereks-space:~</div></div>',1)),y("div",wM,[e[1]||(e[1]=y("div",{class:"ascii-art"},[y("pre",null,` _____                _       _____                 _      _ _       
|  __ \\              | |     / ____|               (_)    | | |      
| |  | | ___ _ __ ___| | __ | |     ___  _ __ _ __  _  ___| | | ___  
| |  | |/ _ \\ '__/ _ \\ |/ / | |    / _ \\| '__| '_ \\| |/ _ \\ | |/ _ \\ 
| |__| |  __/ | |  __/   <  | |___| (_) | |  | | | | |  __/ | | (_) |
|_____/ \\___|_|  \\___|_|\\_\\  \\_____\\___/|_|  |_| |_|_|\\___|_|_|\\___/ 
        `)],-1)),y("div",AM,[y("div",RM,[y("span",CM,null,512),e[0]||(e[0]=y("span",{class:"cursor"},"_",-1))])])])])}const DM=on(bM,[["render",PM],["__scopeId","data-v-bb3e416e"]]),LM={name:"WordSphere",props:{words:{type:Array,default:()=>["Vue.js","JavaScript","HTML","CSS","Neovim","Arch Linux","C/C++","Unity","TypeScript","Vite","Git","REST","Docker","AWS","Python","Java","C#","Go","Rust","SQLite","PostgreSQL","Apache","Flask","Django","PHP","MySQL"]},fontSize:{type:Number,default:1.2},rotationSpeed:{type:Number,default:.003},fontFamily:{type:String,default:"Fira Code, monospace"},fontWeight:{type:String,default:"normal"},textColor:{type:String,default:"#ff4081"}},data(){return{points:[],angleX:0,angleY:0,rafId:null,ctx:null,width:0,height:0,radius:100}},methods:{loadFont(){return new Promise(t=>{const e=document.createElement("link");e.href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&display=swap",e.rel="stylesheet",e.onload=()=>{setTimeout(t,100)},document.head.appendChild(e)})},getRootFontSize(){return parseFloat(getComputedStyle(document.documentElement).fontSize)},remToPixels(t){return t*this.getRootFontSize()},initCanvas(){const t=this.$refs.canvas,e=this.$refs.container;this.ctx=t.getContext("2d"),this.width=e.clientWidth,this.height=e.clientHeight,t.style.width=`${this.width}px`,t.style.height=`${this.height}px`;const n=window.devicePixelRatio||1;t.width=this.width*n,t.height=this.height*n,this.ctx.scale(n,n),this.radius=Math.min(Math.min(this.width,this.height)*.4,200),this.ctx.textAlign="center",this.ctx.textBaseline="middle",this.generatePoints(),this.ctx.fillStyle="rgba(0, 255, 204, 0.05)",this.ctx.fillRect(0,0,this.width,this.height)},handleResize(){this.initCanvas()},generatePoints(){this.points=[];const t=Math.PI*(3-Math.sqrt(5));for(let e=0;e<this.words.length;e++){const n=1-e/(this.words.length-1)*2,i=Math.sqrt(1-n*n),r=t*e,s=Math.cos(r)*i,o=Math.sin(r)*i;this.points.push({x:s*this.radius,y:n*this.radius,z:o*this.radius,word:this.words[e]})}},animate(){this.angleX+=this.rotationSpeed,this.angleY+=this.rotationSpeed,this.ctx.clearRect(0,0,this.width,this.height),[...this.points].sort((e,n)=>{const i=this.rotateZ(e);return this.rotateZ(n)-i}).forEach(e=>{const n=this.rotatePoint(e),i=(n.z+this.radius)/(2*this.radius),r=this.remToPixels(this.fontSize)*i;this.ctx.font=`${this.fontWeight} ${r}px ${this.fontFamily}`;const s=this.textColor.startsWith("#")?this.hexToRGBA(this.textColor,i):this.textColor.replace(")",`, ${i})`);this.ctx.fillStyle=s;const o=this.width/2+n.x,a=this.height/2+n.y;this.ctx.fillText(e.word,o,a)}),this.rafId=requestAnimationFrame(this.animate)},hexToRGBA(t,e){const n=parseInt(t.slice(1,3),16),i=parseInt(t.slice(3,5),16),r=parseInt(t.slice(5,7),16);return`rgba(${n}, ${i}, ${r}, ${e})`},rotatePoint(t){const e=Math.cos(this.angleX),n=Math.sin(this.angleX),i=Math.cos(this.angleY),r=Math.sin(this.angleY),s=t.y*e-t.z*n,o=t.y*n+t.z*e,a=t.x*i-o*r,l=t.x*r+o*i;return{x:a,y:s,z:l}},rotateZ(t){return this.rotatePoint(t).z}},async mounted(){try{if(await this.loadFont(),await this.$nextTick(),!this.$refs.canvas){console.error("Canvas element not found");return}this.initCanvas(),this.animate(),window.addEventListener("resize",this.handleResize)}catch(t){console.error("Error initializing WordSphere:",t)}},beforeDestroy(){window.removeEventListener("resize",this.handleResize),this.rafId&&cancelAnimationFrame(this.rafId)}},IM={class:"word-sphere-container",ref:"container"},UM={ref:"canvas",style:{position:"absolute",top:0,left:0}};function NM(t,e,n,i,r,s){return gt(),Wt("div",IM,[y("canvas",UM,null,512)],512)}const FM=on(LM,[["render",NM],["__scopeId","data-v-9dc9fb11"]]),$h="/favicon.ico",OM={name:"Home",components:{BasePage:Vr,TerminalGreeting:DM,WordSphere:FM},data(){return{}},methods:{handleTouchMove(t){if(t.touches.length>0){const e=t.touches[0],n=new MouseEvent("mousemove",{clientX:e.clientX,clientY:e.clientY});this.handleHeadshotTilt(n)}},navigateTo(t){this.$router.push({name:t})},handleHeadshotTilt(t){const e=this.$refs.headshot,n=e.getBoundingClientRect(),i=t.clientX-n.left,r=t.clientY-n.top,s=n.width/2,o=n.height/2,a=16,l=(i-s)/s*a,c=-((r-o)/o)*a;e.style.transform=`perspective(400px) rotateX(${c}deg) rotateY(${l}deg)`,e.style.transition="transform 0.15s cubic-bezier(.25,.8,.25,1)",e.style.animation="none"},resetHeadshotTilt(){const t=this.$refs.headshot;t.style.transform="perspective(400px) rotateX(0deg) rotateY(0deg)",t.style.transition="transform 0.45s cubic-bezier(.25,.8,.25,1)",setTimeout(()=>{t.style.transition="",t.style.animation="float 5.5s ease-in-out infinite"},450)}},mounted(){document.title="Derek Corniello's Space!",this.$refs.headshot&&(this.$refs.headshot.style.transform="perspective(400px) rotateX(0deg) rotateY(0deg)")}},BM={class:"content-container"},kM={class:"terminal-and-card"},zM={class:"floating-headshot-container"},HM={class:"terminal-greeting-container"},VM={class:"landing-card-container"},GM={class:"landing-card"},WM={class:"cta-buttons"};function XM(t,e,n,i,r,s){const o=Tt("TerminalGreeting"),a=Tt("WordSphere"),l=Tt("BasePage");return gt(),vi(l,null,{default:Le(()=>[y("div",BM,[y("div",kM,[y("div",zM,[y("img",{src:$h,alt:"Derek Corniello Headshot",class:"floating-headshot",ref:"headshot",onMousemove:e[0]||(e[0]=(...c)=>s.handleHeadshotTilt&&s.handleHeadshotTilt(...c)),onMouseleave:e[1]||(e[1]=(...c)=>s.resetHeadshotTilt&&s.resetHeadshotTilt(...c)),onTouchmovePassive:e[2]||(e[2]=(...c)=>s.handleTouchMove&&s.handleTouchMove(...c)),onTouchendPassive:e[3]||(e[3]=(...c)=>s.resetHeadshotTilt&&s.resetHeadshotTilt(...c))},null,544)]),y("div",HM,[Be(o)]),y("div",VM,[y("div",GM,[e[8]||(e[8]=y("div",{class:"intro"},[y("p",{class:"tagline"},"Innovative developer crafting cutting-edge solutions and intuitive designs to solve real-world problems, driven to deliver impactful and innovative solutions")],-1)),y("div",WM,[y("button",{onClick:e[4]||(e[4]=c=>s.navigateTo("about")),class:"cta-button"}," About me "),y("button",{onClick:e[5]||(e[5]=c=>s.navigateTo("contact")),class:"cta-button"}," Contact "),y("button",{onClick:e[6]||(e[6]=c=>s.navigateTo("projects")),class:"cta-button"}," Projects "),y("button",{onClick:e[7]||(e[7]=c=>s.navigateTo("blog")),class:"cta-button"}," Blog ")])])])]),Be(a,{class:"word-sphere","font-size":1.2,"rotation-speed":.0015,"text-color":"#00ffcc"})])]),_:1})}const jh=on(OM,[["render",XM],["__scopeId","data-v-4be30910"]]),qM={name:"App",components:{Home:jh}};function $M(t,e,n,i,r,s){const o=Tt("router-view");return gt(),Wt("div",null,[Be(o)])}const jM=on(qM,[["render",$M]]);/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const gr=typeof document<"u";function Yh(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function YM(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Yh(t.default)}const rt=Object.assign;function Ya(t,e){const n={};for(const i in e){const r=e[i];n[i]=wn(r)?r.map(t):t(r)}return n}const cs=()=>{},wn=Array.isArray,Kh=/#/g,KM=/&/g,ZM=/\//g,JM=/=/g,QM=/\?/g,Zh=/\+/g,eE=/%5B/g,tE=/%5D/g,Jh=/%5E/g,nE=/%60/g,Qh=/%7B/g,iE=/%7C/g,ep=/%7D/g,rE=/%20/g;function Fc(t){return encodeURI(""+t).replace(iE,"|").replace(eE,"[").replace(tE,"]")}function sE(t){return Fc(t).replace(Qh,"{").replace(ep,"}").replace(Jh,"^")}function nc(t){return Fc(t).replace(Zh,"%2B").replace(rE,"+").replace(Kh,"%23").replace(KM,"%26").replace(nE,"`").replace(Qh,"{").replace(ep,"}").replace(Jh,"^")}function oE(t){return nc(t).replace(JM,"%3D")}function aE(t){return Fc(t).replace(Kh,"%23").replace(QM,"%3F")}function lE(t){return t==null?"":aE(t).replace(ZM,"%2F")}function vs(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const cE=/\/$/,uE=t=>t.replace(cE,"");function Ka(t,e,n="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=t(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=pE(i??e,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:vs(o)}}function fE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Tf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function dE(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&Br(e.matched[i],n.matched[r])&&tp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Br(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function tp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!hE(t[n],e[n]))return!1;return!0}function hE(t,e){return wn(t)?wf(t,e):wn(e)?wf(e,t):t===e}function wf(t,e){return wn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function pE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const ui={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var xs;(function(t){t.pop="pop",t.push="push"})(xs||(xs={}));var us;(function(t){t.back="back",t.forward="forward",t.unknown=""})(us||(us={}));function mE(t){if(!t)if(gr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),uE(t)}const gE=/^[^#]+#/;function _E(t,e){return t.replace(gE,"#")+e}function vE(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const ea=()=>({left:window.scrollX,top:window.scrollY});function xE(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=vE(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Af(t,e){return(history.state?history.state.position-e:-1)+t}const ic=new Map;function SE(t,e){ic.set(t,e)}function yE(t){const e=ic.get(t);return ic.delete(t),e}let ME=()=>location.protocol+"//"+location.host;function np(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let a=r.includes(t.slice(s))?t.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),Tf(l,"")}return Tf(n,t)+i+r}function EE(t,e,n,i){let r=[],s=[],o=null;const a=({state:d})=>{const p=np(t,location),g=n.value,v=e.value;let m=0;if(d){if(n.value=p,e.value=d,o&&o===g){o=null;return}m=v?d.position-v.position:0}else i(p);r.forEach(h=>{h(n.value,g,{delta:m,type:xs.pop,direction:m?m>0?us.forward:us.back:us.unknown})})};function l(){o=n.value}function c(d){r.push(d);const p=()=>{const g=r.indexOf(d);g>-1&&r.splice(g,1)};return s.push(p),p}function u(){const{history:d}=window;d.state&&d.replaceState(rt({},d.state,{scroll:ea()}),"")}function f(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function Rf(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?ea():null}}function bE(t){const{history:e,location:n}=window,i={value:np(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=t.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:ME()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),r.value=c}catch(p){console.error(p),n[u?"replace":"assign"](d)}}function o(l,c){const u=rt({},e.state,Rf(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=rt({},r.value,e.state,{forward:l,scroll:ea()});s(u.current,u,!0);const f=rt({},Rf(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function TE(t){t=mE(t);const e=bE(t),n=EE(t,e.state,e.location,e.replace);function i(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=rt({location:"",base:t,go:i,createHref:_E.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function wE(t){return typeof t=="string"||t&&typeof t=="object"}function ip(t){return typeof t=="string"||typeof t=="symbol"}const rp=Symbol("");var Cf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Cf||(Cf={}));function kr(t,e){return rt(new Error,{type:t,[rp]:!0},e)}function Gn(t,e){return t instanceof Error&&rp in t&&(e==null||!!(t.type&e))}const Pf="[^/]+?",AE={sensitive:!1,strict:!1,start:!0,end:!0},RE=/[.+*?^${}()[\]/\\]/g;function CE(t,e){const n=rt({},AE,e),i=[];let r=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const d=c[f];let p=40+(n.sensitive?.25:0);if(d.type===0)f||(r+="/"),r+=d.value.replace(RE,"\\$&"),p+=40;else if(d.type===1){const{value:g,repeatable:v,optional:m,regexp:h}=d;s.push({name:g,repeatable:v,optional:m});const R=h||Pf;if(R!==Pf){p+=10;try{new RegExp(`(${R})`)}catch(E){throw new Error(`Invalid custom RegExp for param "${g}" (${R}): `+E.message)}}let T=v?`((?:${R})(?:/(?:${R}))*)`:`(${R})`;f||(T=m&&c.length<2?`(?:/${T})`:"/"+T),m&&(T+="?"),r+=T,p+=20,m&&(p+=-8),v&&(p+=-20),R===".*"&&(p+=-50)}u.push(p)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",g=s[d-1];f[g.name]=p&&g.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const d of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:g,repeatable:v,optional:m}=p,h=g in c?c[g]:"";if(wn(h)&&!v)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const R=wn(h)?h.join("/"):h;if(!R)if(m)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=R}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function PE(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function sp(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=PE(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(Df(i))return 1;if(Df(r))return-1}return r.length-i.length}function Df(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const DE={type:0,value:""},LE=/[a-zA-Z0-9_]/;function IE(t){if(!t)return[[]];if(t==="/")return[[DE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):d();break;case 4:d(),n=i;break;case 1:l==="("?n=2:LE.test(l)?d():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function UE(t,e,n){const i=CE(IE(t.path),n),r=rt(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function NE(t,e){const n=[],i=new Map;e=Nf({strict:!1,end:!0,sensitive:!1},e);function r(f){return i.get(f)}function s(f,d,p){const g=!p,v=If(f);v.aliasOf=p&&p.record;const m=Nf(e,f),h=[v];if("alias"in f){const E=typeof f.alias=="string"?[f.alias]:f.alias;for(const I of E)h.push(If(rt({},v,{components:p?p.record.components:v.components,path:I,aliasOf:p?p.record:v})))}let R,T;for(const E of h){const{path:I}=E;if(d&&I[0]!=="/"){const L=d.record.path,P=L[L.length-1]==="/"?"":"/";E.path=d.record.path+(I&&P+I)}if(R=UE(E,d,m),p?p.alias.push(R):(T=T||R,T!==R&&T.alias.push(R),g&&f.name&&!Uf(R)&&o(f.name)),op(R)&&l(R),v.children){const L=v.children;for(let P=0;P<L.length;P++)s(L[P],R,p&&p.children[P])}p=p||R}return T?()=>{o(T)}:cs}function o(f){if(ip(f)){const d=i.get(f);d&&(i.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function l(f){const d=BE(f,n);n.splice(d,0,f),f.record.name&&!Uf(f)&&i.set(f.record.name,f)}function c(f,d){let p,g={},v,m;if("name"in f&&f.name){if(p=i.get(f.name),!p)throw kr(1,{location:f});m=p.record.name,g=rt(Lf(d.params,p.keys.filter(T=>!T.optional).concat(p.parent?p.parent.keys.filter(T=>T.optional):[]).map(T=>T.name)),f.params&&Lf(f.params,p.keys.map(T=>T.name))),v=p.stringify(g)}else if(f.path!=null)v=f.path,p=n.find(T=>T.re.test(v)),p&&(g=p.parse(v),m=p.record.name);else{if(p=d.name?i.get(d.name):n.find(T=>T.re.test(d.path)),!p)throw kr(1,{location:f,currentLocation:d});m=p.record.name,g=rt({},d.params,f.params),v=p.stringify(g)}const h=[];let R=p;for(;R;)h.unshift(R.record),R=R.parent;return{name:m,path:v,params:g,matched:h,meta:OE(h)}}t.forEach(f=>s(f));function u(){n.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function Lf(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function If(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:FE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function FE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function Uf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function OE(t){return t.reduce((e,n)=>rt(e,n.meta),{})}function Nf(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function BE(t,e){let n=0,i=e.length;for(;n!==i;){const s=n+i>>1;sp(t,e[s])<0?i=s:n=s+1}const r=kE(t);return r&&(i=e.lastIndexOf(r,i-1)),i}function kE(t){let e=t;for(;e=e.parent;)if(op(e)&&sp(t,e)===0)return e}function op({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function zE(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(Zh," "),o=s.indexOf("="),a=vs(o<0?s:s.slice(0,o)),l=o<0?null:vs(s.slice(o+1));if(a in e){let c=e[a];wn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Ff(t){let e="";for(let n in t){const i=t[n];if(n=oE(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(wn(i)?i.map(s=>s&&nc(s)):[i&&nc(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function HE(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=wn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const VE=Symbol(""),Of=Symbol(""),Oc=Symbol(""),ap=Symbol(""),rc=Symbol("");function Qr(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function hi(t,e,n,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(kr(4,{from:n,to:e})):d instanceof Error?l(d):wE(d)?l(kr(2,{from:e,to:d})):(o&&i.enterCallbacks[r]===o&&typeof d=="function"&&o.push(d),a())},u=s(()=>t.call(i&&i.instances[r],e,n,c));let f=Promise.resolve(u);t.length<3&&(f=f.then(c)),f.catch(d=>l(d))})}function Za(t,e,n,i,r=s=>s()){const s=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Yh(l)){const u=(l.__vccOpts||l)[e];u&&s.push(hi(u,n,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=YM(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const p=(f.__vccOpts||f)[e];return p&&hi(p,n,i,o,a,r)()}))}}return s}function Bf(t){const e=Jn(Oc),n=Jn(ap),i=dn(()=>{const l=yr(t.to);return e.resolve(l)}),r=dn(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(Br.bind(null,u));if(d>-1)return d;const p=kf(l[c-2]);return c>1&&kf(u)===p&&f[f.length-1].path!==p?f.findIndex(Br.bind(null,l[c-2])):d}),s=dn(()=>r.value>-1&&$E(n.params,i.value.params)),o=dn(()=>r.value>-1&&r.value===n.matched.length-1&&tp(n.params,i.value.params));function a(l={}){if(qE(l)){const c=e[yr(t.replace)?"replace":"push"](yr(t.to)).catch(cs);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:dn(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}function GE(t){return t.length===1?t[0]:t}const WE=Ud({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Bf,setup(t,{slots:e}){const n=Wo(Bf(t)),{options:i}=Jn(Oc),r=dn(()=>({[zf(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[zf(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&GE(e.default(n));return t.custom?s:uh("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),XE=WE;function qE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function $E(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!wn(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function kf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const zf=(t,e,n)=>t??e??n,jE=Ud({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=Jn(rc),r=dn(()=>t.route||i.value),s=Jn(Of,0),o=dn(()=>{let c=yr(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=dn(()=>r.value.matched[o.value]);lo(Of,dn(()=>o.value+1)),lo(VE,a),lo(rc,r);const l=hr();return co(()=>[l.value,a.value,t.name],([c,u,f],[d,p,g])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!Br(u,p)||!d)&&(u.enterCallbacks[f]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,f=a.value,d=f&&f.components[u];if(!d)return Hf(n.default,{Component:d,route:c});const p=f.props[u],g=p?p===!0?c.params:typeof p=="function"?p(c):p:null,m=uh(d,rt({},g,e,{onVnodeUnmounted:h=>{h.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Hf(n.default,{Component:m,route:c})||m}}});function Hf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const YE=jE;function KE(t){const e=NE(t.routes,t),n=t.parseQuery||zE,i=t.stringifyQuery||Ff,r=t.history,s=Qr(),o=Qr(),a=Qr(),l=vm(ui);let c=ui;gr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ya.bind(null,N=>""+N),f=Ya.bind(null,lE),d=Ya.bind(null,vs);function p(N,oe){let se,pe;return ip(N)?(se=e.getRecordMatcher(N),pe=oe):pe=N,e.addRoute(pe,se)}function g(N){const oe=e.getRecordMatcher(N);oe&&e.removeRoute(oe)}function v(){return e.getRoutes().map(N=>N.record)}function m(N){return!!e.getRecordMatcher(N)}function h(N,oe){if(oe=rt({},oe||l.value),typeof N=="string"){const x=Ka(n,N,oe.path),ne=e.resolve({path:x.path},oe),j=r.createHref(x.fullPath);return rt(x,ne,{params:d(ne.params),hash:vs(x.hash),redirectedFrom:void 0,href:j})}let se;if(N.path!=null)se=rt({},N,{path:Ka(n,N.path,oe.path).path});else{const x=rt({},N.params);for(const ne in x)x[ne]==null&&delete x[ne];se=rt({},N,{params:f(x)}),oe.params=f(oe.params)}const pe=e.resolve(se,oe),Fe=N.hash||"";pe.params=u(d(pe.params));const A=fE(i,rt({},N,{hash:sE(Fe),path:pe.path})),C=r.createHref(A);return rt({fullPath:A,hash:Fe,query:i===Ff?HE(N.query):N.query||{}},pe,{redirectedFrom:void 0,href:C})}function R(N){return typeof N=="string"?Ka(n,N,l.value.path):rt({},N)}function T(N,oe){if(c!==N)return kr(8,{from:oe,to:N})}function E(N){return P(N)}function I(N){return E(rt(R(N),{replace:!0}))}function L(N){const oe=N.matched[N.matched.length-1];if(oe&&oe.redirect){const{redirect:se}=oe;let pe=typeof se=="function"?se(N):se;return typeof pe=="string"&&(pe=pe.includes("?")||pe.includes("#")?pe=R(pe):{path:pe},pe.params={}),rt({query:N.query,hash:N.hash,params:pe.path!=null?{}:N.params},pe)}}function P(N,oe){const se=c=h(N),pe=l.value,Fe=N.state,A=N.force,C=N.replace===!0,x=L(se);if(x)return P(rt(R(x),{state:typeof x=="object"?rt({},Fe,x.state):Fe,force:A,replace:C}),oe||se);const ne=se;ne.redirectedFrom=oe;let j;return!A&&dE(i,pe,se)&&(j=kr(16,{to:ne,from:pe}),Pe(pe,pe,!0,!1)),(j?Promise.resolve(j):b(ne,pe)).catch(W=>Gn(W)?Gn(W,2)?W:Ee(W):H(W,ne,pe)).then(W=>{if(W){if(Gn(W,2))return P(rt({replace:C},R(W.to),{state:typeof W.to=="object"?rt({},Fe,W.to.state):Fe,force:A}),oe||ne)}else W=ie(ne,pe,!0,C,Fe);return U(ne,pe,W),W})}function k(N,oe){const se=T(N,oe);return se?Promise.reject(se):Promise.resolve()}function w(N){const oe=re.values().next().value;return oe&&typeof oe.runWithContext=="function"?oe.runWithContext(N):N()}function b(N,oe){let se;const[pe,Fe,A]=ZE(N,oe);se=Za(pe.reverse(),"beforeRouteLeave",N,oe);for(const x of pe)x.leaveGuards.forEach(ne=>{se.push(hi(ne,N,oe))});const C=k.bind(null,N,oe);return se.push(C),be(se).then(()=>{se=[];for(const x of s.list())se.push(hi(x,N,oe));return se.push(C),be(se)}).then(()=>{se=Za(Fe,"beforeRouteUpdate",N,oe);for(const x of Fe)x.updateGuards.forEach(ne=>{se.push(hi(ne,N,oe))});return se.push(C),be(se)}).then(()=>{se=[];for(const x of A)if(x.beforeEnter)if(wn(x.beforeEnter))for(const ne of x.beforeEnter)se.push(hi(ne,N,oe));else se.push(hi(x.beforeEnter,N,oe));return se.push(C),be(se)}).then(()=>(N.matched.forEach(x=>x.enterCallbacks={}),se=Za(A,"beforeRouteEnter",N,oe,w),se.push(C),be(se))).then(()=>{se=[];for(const x of o.list())se.push(hi(x,N,oe));return se.push(C),be(se)}).catch(x=>Gn(x,8)?x:Promise.reject(x))}function U(N,oe,se){a.list().forEach(pe=>w(()=>pe(N,oe,se)))}function ie(N,oe,se,pe,Fe){const A=T(N,oe);if(A)return A;const C=oe===ui,x=gr?history.state:{};se&&(pe||C?r.replace(N.fullPath,rt({scroll:C&&x&&x.scroll},Fe)):r.push(N.fullPath,Fe)),l.value=N,Pe(N,oe,se,C),Ee()}let $;function ae(){$||($=r.listen((N,oe,se)=>{if(!ge.listening)return;const pe=h(N),Fe=L(pe);if(Fe){P(rt(Fe,{replace:!0,force:!0}),pe).catch(cs);return}c=pe;const A=l.value;gr&&SE(Af(A.fullPath,se.delta),ea()),b(pe,A).catch(C=>Gn(C,12)?C:Gn(C,2)?(P(rt(R(C.to),{force:!0}),pe).then(x=>{Gn(x,20)&&!se.delta&&se.type===xs.pop&&r.go(-1,!1)}).catch(cs),Promise.reject()):(se.delta&&r.go(-se.delta,!1),H(C,pe,A))).then(C=>{C=C||ie(pe,A,!1),C&&(se.delta&&!Gn(C,8)?r.go(-se.delta,!1):se.type===xs.pop&&Gn(C,20)&&r.go(-1,!1)),U(pe,A,C)}).catch(cs)}))}let le=Qr(),J=Qr(),te;function H(N,oe,se){Ee(N);const pe=J.list();return pe.length?pe.forEach(Fe=>Fe(N,oe,se)):console.error(N),Promise.reject(N)}function ve(){return te&&l.value!==ui?Promise.resolve():new Promise((N,oe)=>{le.add([N,oe])})}function Ee(N){return te||(te=!N,ae(),le.list().forEach(([oe,se])=>N?se(N):oe()),le.reset()),N}function Pe(N,oe,se,pe){const{scrollBehavior:Fe}=t;if(!gr||!Fe)return Promise.resolve();const A=!se&&yE(Af(N.fullPath,0))||(pe||!se)&&history.state&&history.state.scroll||null;return Ec().then(()=>Fe(N,oe,A)).then(C=>C&&xE(C)).catch(C=>H(C,N,oe))}const Ue=N=>r.go(N);let Je;const re=new Set,ge={currentRoute:l,listening:!0,addRoute:p,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:v,resolve:h,options:t,push:E,replace:I,go:Ue,back:()=>Ue(-1),forward:()=>Ue(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:J.add,isReady:ve,install(N){const oe=this;N.component("RouterLink",XE),N.component("RouterView",YE),N.config.globalProperties.$router=oe,Object.defineProperty(N.config.globalProperties,"$route",{enumerable:!0,get:()=>yr(l)}),gr&&!Je&&l.value===ui&&(Je=!0,E(r.location).catch(Fe=>{}));const se={};for(const Fe in ui)Object.defineProperty(se,Fe,{get:()=>l.value[Fe],enumerable:!0});N.provide(Oc,oe),N.provide(ap,Td(se)),N.provide(rc,l);const pe=N.unmount;re.add(N),N.unmount=function(){re.delete(N),re.size<1&&(c=ui,$&&$(),$=null,l.value=ui,Je=!1,te=!1),pe()}}};function be(N){return N.reduce((oe,se)=>oe.then(()=>w(se)),Promise.resolve())}return ge}function ZE(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(c=>Br(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Br(c,l))||r.push(l))}return[n,i,r]}const JE={name:"Container"},QE={class:"container"},eb={class:"container-inner"},tb={class:"title"},nb={class:"body"};function ib(t,e,n,i,r,s){return gt(),Wt("div",QE,[y("div",eb,[y("h2",tb,[Ao(t.$slots,"title",{},void 0)]),e[0]||(e[0]=y("div",{class:"divider-container"},[y("div",{class:"divider-line"}),y("div",{class:"divider-glow"})],-1)),y("div",nb,[Ao(t.$slots,"default",{},void 0)])])])}const ta=on(JE,[["render",ib],["__scopeId","data-v-4a4cf580"]]),rb={name:"about",components:{BasePage:Vr,Container:ta},mounted(){document.title="About Derek Corniello"}},sb={class:"containers-holder"},ob={style:{color:"#00ffcc","text-align":"center","font-size":"1.5rem"}};function ab(t,e,n,i,r,s){const o=Tt("router-link"),a=Tt("Container"),l=Tt("BasePage");return gt(),Wt(Ct,null,[e[26]||(e[26]=y("link",{href:"https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css",rel:"stylesheet"},null,-1)),Be(l,null,{default:Le(()=>[e[25]||(e[25]=y("h1",{class:"title"},"About Me",-1)),y("div",sb,[Be(a,null,{title:Le(()=>e[0]||(e[0]=[y("img",{src:$h,alt:"Derek's Headshot",style:{width:"15%",height:"auto","border-radius":"50%",display:"block","margin-left":"auto","margin-right":"auto","margin-bottom":"2%"}},null,-1),de(" 👋 Hello, I'm Derek Corniello! ")])),default:Le(()=>[e[3]||(e[3]=de(" I'm a CS/SWE student at the University of Cincinnati. I’m passionate about diving into software product design, project management, and back-end development. My curiosity and eagerness to learn drive me to keep exploring, one project and concept at a time! Please ")),e[4]||(e[4]=y("strong",null,"explore my page",-1)),e[5]||(e[5]=de(" and feel free to ")),y("strong",null,[y("u",null,[Be(o,{to:"contact"},{default:Le(()=>e[1]||(e[1]=[de("contact me")])),_:1})])]),e[6]||(e[6]=de(" or ")),y("strong",null,[y("u",null,[Be(o,{to:"contact"},{default:Le(()=>e[2]||(e[2]=[de("view my resume")])),_:1})])]),e[7]||(e[7]=de("! ")),e[8]||(e[8]=y("br",null,null,-1)),e[9]||(e[9]=y("br",null,null,-1)),e[10]||(e[10]=y("div",{class:"links"},[y("a",{href:"https://www.linkedin.com/in/derek-corniello",target:"_blank",style:{"text-decoration":"none"}},[y("i",{class:"bi bi-linkedin"}),de(" LinkedIn ")]),y("a",{href:"https://github.com/DerekCorniello",target:"_blank",style:{"text-decoration":"none"}},[y("i",{class:"bi bi-github"}),de(" GitHub ")]),y("a",{href:"https://twitter.com/DerekCorniello",target:"_blank",style:{"text-decoration":"none"}},[y("i",{class:"bi bi-twitter-x"}),de(" X ")]),y("a",{href:"/resume",target:"_blank",style:{"text-decoration":"none"}},[y("i",{class:"bi bi-file-earmark-text"}),de(" Resume ")])],-1))]),_:1}),Be(a,null,{title:Le(()=>e[11]||(e[11]=[de(" 📈 GitHub Stats: ")])),default:Le(()=>[e[12]||(e[12]=y("div",{style:{display:"flex","flex-direction":"column","align-items":"center",gap:"1.5rem"}},[y("img",{src:"https://github-readme-stats.vercel.app/api/top-langs/?username=DerekCorniello&langs_count=8&layout=compact&exclude_repo=dotfiles,NeoVim-Setup&size_weight=0.5&count_weight=0.5&hide=MATLAB,HTML,CSS,JavaScript&theme=highcontrast&hide_border=true",alt:"Top Languages",style:{width:"100%","max-width":"500px"}}),y("img",{src:"https://github-readme-stats.vercel.app/api?username=derekcorniello&show_icons=true&hide=stars&count_private=true&hide_rank=true&theme=highcontrast&hide_border=true",alt:"Derek's GitHub Stats",style:{width:"100%","max-width":"500px"}})],-1))]),_:1}),Be(a,null,{title:Le(()=>e[13]||(e[13]=[de(" 🥇 My Language and Technology Skillset ")])),default:Le(()=>[e[14]||(e[14]=y("table",null,[y("tbody",null,[y("tr",null,[y("td",null,[y("strong",null,"My Development Tools")]),y("td",null,[y("a",{href:"https://skillicons.dev"},[y("img",{src:"https://skillicons.dev/icons?i=neovim,arch,git,aws,docker,postman,md,unity",alt:"Development Tools"})])])]),y("tr",null,[y("td",null,[y("strong",null,"General Purpose")]),y("td",null,[y("a",{href:"https://skillicons.dev"},[y("img",{src:"https://skillicons.dev/icons?i=py,go,rust,cs,cpp,c,java",alt:"General Purpose"})])])]),y("tr",null,[y("td",null,[y("strong",null,"Front-End")]),y("td",null,[y("a",{href:"https://skillicons.dev"},[y("img",{src:"https://skillicons.dev/icons?i=vue,vite,ts,js,html,css,bootstrap",alt:"Front-End"})])])]),y("tr",null,[y("td",null,[y("strong",null,"Back-End")]),y("td",null,[y("a",{href:"https://skillicons.dev"},[y("img",{src:"https://skillicons.dev/icons?i=jquery,php,flask,django",alt:"Back-End"})])])]),y("tr",null,[y("td",null,[y("strong",null,"Database")]),y("td",null,[y("a",{href:"https://skillicons.dev"},[y("img",{src:"https://skillicons.dev/icons?i=sqlite,postgresql,mysql",alt:"Database"})])])])])],-1))]),_:1}),Be(a,null,{title:Le(()=>e[15]||(e[15]=[de(" 🏆 My Top Projects ")])),default:Le(()=>[e[19]||(e[19]=y("ul",null,[y("li",null,[y("strong",null,"8 Bit Beats:"),de(" Rust - A TUI app that generates randomized music in the terminal!")]),y("li",null,[y("strong",null,"gitcmd:"),de(" Rust - A customizable git terminal.")]),y("li",null,[y("strong",null,"ReqInspect:"),de(" Go, Vue, AWS - Full-stack app for validating `requirements.txt` files, deployed on AWS.")]),y("li",null,[y("strong",null,"Professional Site:"),de(" Vue, Vite, JavaScript, HTML, CSS - Portfolio site showcasing background, projects, and blogs.")]),y("li",null,[y("strong",null,"AmandaLynnDashboard:"),de(" Python, Django, Vue - Custom inventory and financial management app.")])],-1)),e[20]||(e[20]=y("br",null,null,-1)),y("div",ob,[e[17]||(e[17]=de(" Check out more details ")),y("u",null,[y("strong",null,[Be(o,{class:"r-link",to:"projects"},{default:Le(()=>e[16]||(e[16]=[de("here")])),_:1})])]),e[18]||(e[18]=de("! "))])]),_:1}),Be(a,null,{title:Le(()=>e[21]||(e[21]=[de(" 🛠️ Currently Learning About and Developing ")])),default:Le(()=>[e[22]||(e[22]=y("ul",null,[y("li",null,[de("Enhancing "),y("a",{href:"https://github.com/DerekCorniello/dotfiles",target:"_blank"},"dotfiles"),de(" for a streamlined Neovim + Arch Linux setup.")]),y("li",null,"Exploring new programming paradigms."),y("li",null,"Grinding LeetCode!")],-1)),e[23]||(e[23]=y("br",null,null,-1)),e[24]||(e[24]=y("div",{style:{color:"#00ffcc","text-align":"center","font-size":"1.5rem"}},[de(" Check out the latest code "),y("u",null,[y("strong",null,[y("a",{class:"r-link",href:"https://www.github.com/DerekCorniello"},"here")])]),de("! ")],-1))]),_:1})])]),_:1})],64)}const lb=on(rb,[["render",ab],["__scopeId","data-v-5003693f"]]);function lp(t,e){return function(){return t.apply(e,arguments)}}const{toString:cb}=Object.prototype,{getPrototypeOf:Bc}=Object,na=(t=>e=>{const n=cb.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),An=t=>(t=t.toLowerCase(),e=>na(e)===t),ia=t=>e=>typeof e===t,{isArray:Gr}=Array,Ss=ia("undefined");function ub(t){return t!==null&&!Ss(t)&&t.constructor!==null&&!Ss(t.constructor)&&sn(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const cp=An("ArrayBuffer");function fb(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&cp(t.buffer),e}const db=ia("string"),sn=ia("function"),up=ia("number"),ra=t=>t!==null&&typeof t=="object",hb=t=>t===!0||t===!1,So=t=>{if(na(t)!=="object")return!1;const e=Bc(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},pb=An("Date"),mb=An("File"),gb=An("Blob"),_b=An("FileList"),vb=t=>ra(t)&&sn(t.pipe),xb=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||sn(t.append)&&((e=na(t))==="formdata"||e==="object"&&sn(t.toString)&&t.toString()==="[object FormData]"))},Sb=An("URLSearchParams"),[yb,Mb,Eb,bb]=["ReadableStream","Request","Response","Headers"].map(An),Tb=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ps(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,r;if(typeof t!="object"&&(t=[t]),Gr(t))for(i=0,r=t.length;i<r;i++)e.call(null,t[i],i,t);else{const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let a;for(i=0;i<o;i++)a=s[i],e.call(null,t[a],a,t)}}function fp(t,e){e=e.toLowerCase();const n=Object.keys(t);let i=n.length,r;for(;i-- >0;)if(r=n[i],e===r.toLowerCase())return r;return null}const Vi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,dp=t=>!Ss(t)&&t!==Vi;function sc(){const{caseless:t}=dp(this)&&this||{},e={},n=(i,r)=>{const s=t&&fp(e,r)||r;So(e[s])&&So(i)?e[s]=sc(e[s],i):So(i)?e[s]=sc({},i):Gr(i)?e[s]=i.slice():e[s]=i};for(let i=0,r=arguments.length;i<r;i++)arguments[i]&&Ps(arguments[i],n);return e}const wb=(t,e,n,{allOwnKeys:i}={})=>(Ps(e,(r,s)=>{n&&sn(r)?t[s]=lp(r,n):t[s]=r},{allOwnKeys:i}),t),Ab=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),Rb=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},Cb=(t,e,n,i)=>{let r,s,o;const a={};if(e=e||{},t==null)return e;do{for(r=Object.getOwnPropertyNames(t),s=r.length;s-- >0;)o=r[s],(!i||i(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Bc(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},Pb=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},Db=t=>{if(!t)return null;if(Gr(t))return t;let e=t.length;if(!up(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},Lb=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Bc(Uint8Array)),Ib=(t,e)=>{const i=(t&&t[Symbol.iterator]).call(t);let r;for(;(r=i.next())&&!r.done;){const s=r.value;e.call(t,s[0],s[1])}},Ub=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},Nb=An("HTMLFormElement"),Fb=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,r){return i.toUpperCase()+r}),Vf=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),Ob=An("RegExp"),hp=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};Ps(n,(r,s)=>{let o;(o=e(r,s,t))!==!1&&(i[s]=o||r)}),Object.defineProperties(t,i)},Bb=t=>{hp(t,(e,n)=>{if(sn(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const i=t[n];if(sn(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},kb=(t,e)=>{const n={},i=r=>{r.forEach(s=>{n[s]=!0})};return Gr(t)?i(t):i(String(t).split(e)),n},zb=()=>{},Hb=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e,Ja="abcdefghijklmnopqrstuvwxyz",Gf="0123456789",pp={DIGIT:Gf,ALPHA:Ja,ALPHA_DIGIT:Ja+Ja.toUpperCase()+Gf},Vb=(t=16,e=pp.ALPHA_DIGIT)=>{let n="";const{length:i}=e;for(;t--;)n+=e[Math.random()*i|0];return n};function Gb(t){return!!(t&&sn(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const Wb=t=>{const e=new Array(10),n=(i,r)=>{if(ra(i)){if(e.indexOf(i)>=0)return;if(!("toJSON"in i)){e[r]=i;const s=Gr(i)?[]:{};return Ps(i,(o,a)=>{const l=n(o,r+1);!Ss(l)&&(s[a]=l)}),e[r]=void 0,s}}return i};return n(t,0)},Xb=An("AsyncFunction"),qb=t=>t&&(ra(t)||sn(t))&&sn(t.then)&&sn(t.catch),mp=((t,e)=>t?setImmediate:e?((n,i)=>(Vi.addEventListener("message",({source:r,data:s})=>{r===Vi&&s===n&&i.length&&i.shift()()},!1),r=>{i.push(r),Vi.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",sn(Vi.postMessage)),$b=typeof queueMicrotask<"u"?queueMicrotask.bind(Vi):typeof process<"u"&&process.nextTick||mp,Z={isArray:Gr,isArrayBuffer:cp,isBuffer:ub,isFormData:xb,isArrayBufferView:fb,isString:db,isNumber:up,isBoolean:hb,isObject:ra,isPlainObject:So,isReadableStream:yb,isRequest:Mb,isResponse:Eb,isHeaders:bb,isUndefined:Ss,isDate:pb,isFile:mb,isBlob:gb,isRegExp:Ob,isFunction:sn,isStream:vb,isURLSearchParams:Sb,isTypedArray:Lb,isFileList:_b,forEach:Ps,merge:sc,extend:wb,trim:Tb,stripBOM:Ab,inherits:Rb,toFlatObject:Cb,kindOf:na,kindOfTest:An,endsWith:Pb,toArray:Db,forEachEntry:Ib,matchAll:Ub,isHTMLForm:Nb,hasOwnProperty:Vf,hasOwnProp:Vf,reduceDescriptors:hp,freezeMethods:Bb,toObjectSet:kb,toCamelCase:Fb,noop:zb,toFiniteNumber:Hb,findKey:fp,global:Vi,isContextDefined:dp,ALPHABET:pp,generateString:Vb,isSpecCompliantForm:Gb,toJSONObject:Wb,isAsyncFn:Xb,isThenable:qb,setImmediate:mp,asap:$b};function $e(t,e,n,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r,this.status=r.status?r.status:null)}Z.inherits($e,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:Z.toJSONObject(this.config),code:this.code,status:this.status}}});const gp=$e.prototype,_p={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{_p[t]={value:t}});Object.defineProperties($e,_p);Object.defineProperty(gp,"isAxiosError",{value:!0});$e.from=(t,e,n,i,r,s)=>{const o=Object.create(gp);return Z.toFlatObject(t,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),$e.call(o,t.message,e,n,i,r),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};const jb=null;function oc(t){return Z.isPlainObject(t)||Z.isArray(t)}function vp(t){return Z.endsWith(t,"[]")?t.slice(0,-2):t}function Wf(t,e,n){return t?t.concat(e).map(function(r,s){return r=vp(r),!n&&s?"["+r+"]":r}).join(n?".":""):e}function Yb(t){return Z.isArray(t)&&!t.some(oc)}const Kb=Z.toFlatObject(Z,{},null,function(e){return/^is[A-Z]/.test(e)});function sa(t,e,n){if(!Z.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=Z.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,m){return!Z.isUndefined(m[v])});const i=n.metaTokens,r=n.visitor||u,s=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&Z.isSpecCompliantForm(e);if(!Z.isFunction(r))throw new TypeError("visitor must be a function");function c(g){if(g===null)return"";if(Z.isDate(g))return g.toISOString();if(!l&&Z.isBlob(g))throw new $e("Blob is not supported. Use a Buffer instead.");return Z.isArrayBuffer(g)||Z.isTypedArray(g)?l&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function u(g,v,m){let h=g;if(g&&!m&&typeof g=="object"){if(Z.endsWith(v,"{}"))v=i?v:v.slice(0,-2),g=JSON.stringify(g);else if(Z.isArray(g)&&Yb(g)||(Z.isFileList(g)||Z.endsWith(v,"[]"))&&(h=Z.toArray(g)))return v=vp(v),h.forEach(function(T,E){!(Z.isUndefined(T)||T===null)&&e.append(o===!0?Wf([v],E,s):o===null?v:v+"[]",c(T))}),!1}return oc(g)?!0:(e.append(Wf(m,v,s),c(g)),!1)}const f=[],d=Object.assign(Kb,{defaultVisitor:u,convertValue:c,isVisitable:oc});function p(g,v){if(!Z.isUndefined(g)){if(f.indexOf(g)!==-1)throw Error("Circular reference detected in "+v.join("."));f.push(g),Z.forEach(g,function(h,R){(!(Z.isUndefined(h)||h===null)&&r.call(e,h,Z.isString(R)?R.trim():R,v,d))===!0&&p(h,v?v.concat(R):[R])}),f.pop()}}if(!Z.isObject(t))throw new TypeError("data must be an object");return p(t),e}function Xf(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function kc(t,e){this._pairs=[],t&&sa(t,this,e)}const xp=kc.prototype;xp.append=function(e,n){this._pairs.push([e,n])};xp.toString=function(e){const n=e?function(i){return e.call(this,i,Xf)}:Xf;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function Zb(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Sp(t,e,n){if(!e)return t;const i=n&&n.encode||Zb;Z.isFunction(n)&&(n={serialize:n});const r=n&&n.serialize;let s;if(r?s=r(e,n):s=Z.isURLSearchParams(e)?e.toString():new kc(e,n).toString(i),s){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class qf{constructor(){this.handlers=[]}use(e,n,i){return this.handlers.push({fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){Z.forEach(this.handlers,function(i){i!==null&&e(i)})}}const yp={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Jb=typeof URLSearchParams<"u"?URLSearchParams:kc,Qb=typeof FormData<"u"?FormData:null,eT=typeof Blob<"u"?Blob:null,tT={isBrowser:!0,classes:{URLSearchParams:Jb,FormData:Qb,Blob:eT},protocols:["http","https","file","blob","url","data"]},zc=typeof window<"u"&&typeof document<"u",ac=typeof navigator=="object"&&navigator||void 0,nT=zc&&(!ac||["ReactNative","NativeScript","NS"].indexOf(ac.product)<0),iT=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",rT=zc&&window.location.href||"http://localhost",sT=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:zc,hasStandardBrowserEnv:nT,hasStandardBrowserWebWorkerEnv:iT,navigator:ac,origin:rT},Symbol.toStringTag,{value:"Module"})),Bt={...sT,...tT};function oT(t,e){return sa(t,new Bt.classes.URLSearchParams,Object.assign({visitor:function(n,i,r,s){return Bt.isNode&&Z.isBuffer(n)?(this.append(i,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function aT(t){return Z.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function lT(t){const e={},n=Object.keys(t);let i;const r=n.length;let s;for(i=0;i<r;i++)s=n[i],e[s]=t[s];return e}function Mp(t){function e(n,i,r,s){let o=n[s++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=s>=n.length;return o=!o&&Z.isArray(r)?r.length:o,l?(Z.hasOwnProp(r,o)?r[o]=[r[o],i]:r[o]=i,!a):((!r[o]||!Z.isObject(r[o]))&&(r[o]=[]),e(n,i,r[o],s)&&Z.isArray(r[o])&&(r[o]=lT(r[o])),!a)}if(Z.isFormData(t)&&Z.isFunction(t.entries)){const n={};return Z.forEachEntry(t,(i,r)=>{e(aT(i),r,n,0)}),n}return null}function cT(t,e,n){if(Z.isString(t))try{return(e||JSON.parse)(t),Z.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(0,JSON.stringify)(t)}const Ds={transitional:yp,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const i=n.getContentType()||"",r=i.indexOf("application/json")>-1,s=Z.isObject(e);if(s&&Z.isHTMLForm(e)&&(e=new FormData(e)),Z.isFormData(e))return r?JSON.stringify(Mp(e)):e;if(Z.isArrayBuffer(e)||Z.isBuffer(e)||Z.isStream(e)||Z.isFile(e)||Z.isBlob(e)||Z.isReadableStream(e))return e;if(Z.isArrayBufferView(e))return e.buffer;if(Z.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(i.indexOf("application/x-www-form-urlencoded")>-1)return oT(e,this.formSerializer).toString();if((a=Z.isFileList(e))||i.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return sa(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return s||r?(n.setContentType("application/json",!1),cT(e)):e}],transformResponse:[function(e){const n=this.transitional||Ds.transitional,i=n&&n.forcedJSONParsing,r=this.responseType==="json";if(Z.isResponse(e)||Z.isReadableStream(e))return e;if(e&&Z.isString(e)&&(i&&!this.responseType||r)){const o=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?$e.from(a,$e.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Bt.classes.FormData,Blob:Bt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};Z.forEach(["delete","get","head","post","put","patch"],t=>{Ds.headers[t]={}});const uT=Z.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),fT=t=>{const e={};let n,i,r;return t&&t.split(`
`).forEach(function(o){r=o.indexOf(":"),n=o.substring(0,r).trim().toLowerCase(),i=o.substring(r+1).trim(),!(!n||e[n]&&uT[n])&&(n==="set-cookie"?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)}),e},$f=Symbol("internals");function es(t){return t&&String(t).trim().toLowerCase()}function yo(t){return t===!1||t==null?t:Z.isArray(t)?t.map(yo):String(t)}function dT(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const hT=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Qa(t,e,n,i,r){if(Z.isFunction(i))return i.call(this,e,n);if(r&&(e=n),!!Z.isString(e)){if(Z.isString(i))return e.indexOf(i)!==-1;if(Z.isRegExp(i))return i.test(e)}}function pT(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function mT(t,e){const n=Z.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{value:function(r,s,o){return this[i].call(this,e,r,s,o)},configurable:!0})})}class Zt{constructor(e){e&&this.set(e)}set(e,n,i){const r=this;function s(a,l,c){const u=es(l);if(!u)throw new Error("header name must be a non-empty string");const f=Z.findKey(r,u);(!f||r[f]===void 0||c===!0||c===void 0&&r[f]!==!1)&&(r[f||l]=yo(a))}const o=(a,l)=>Z.forEach(a,(c,u)=>s(c,u,l));if(Z.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(Z.isString(e)&&(e=e.trim())&&!hT(e))o(fT(e),n);else if(Z.isHeaders(e))for(const[a,l]of e.entries())s(l,a,i);else e!=null&&s(n,e,i);return this}get(e,n){if(e=es(e),e){const i=Z.findKey(this,e);if(i){const r=this[i];if(!n)return r;if(n===!0)return dT(r);if(Z.isFunction(n))return n.call(this,r,i);if(Z.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=es(e),e){const i=Z.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||Qa(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let r=!1;function s(o){if(o=es(o),o){const a=Z.findKey(i,o);a&&(!n||Qa(i,i[a],a,n))&&(delete i[a],r=!0)}}return Z.isArray(e)?e.forEach(s):s(e),r}clear(e){const n=Object.keys(this);let i=n.length,r=!1;for(;i--;){const s=n[i];(!e||Qa(this,this[s],s,e,!0))&&(delete this[s],r=!0)}return r}normalize(e){const n=this,i={};return Z.forEach(this,(r,s)=>{const o=Z.findKey(i,s);if(o){n[o]=yo(r),delete n[s];return}const a=e?pT(s):String(s).trim();a!==s&&delete n[s],n[a]=yo(r),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return Z.forEach(this,(i,r)=>{i!=null&&i!==!1&&(n[r]=e&&Z.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const i=new this(e);return n.forEach(r=>i.set(r)),i}static accessor(e){const i=(this[$f]=this[$f]={accessors:{}}).accessors,r=this.prototype;function s(o){const a=es(o);i[a]||(mT(r,o),i[a]=!0)}return Z.isArray(e)?e.forEach(s):s(e),this}}Zt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);Z.reduceDescriptors(Zt.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});Z.freezeMethods(Zt);function el(t,e){const n=this||Ds,i=e||n,r=Zt.from(i.headers);let s=i.data;return Z.forEach(t,function(a){s=a.call(n,s,r.normalize(),e?e.status:void 0)}),r.normalize(),s}function Ep(t){return!!(t&&t.__CANCEL__)}function Wr(t,e,n){$e.call(this,t??"canceled",$e.ERR_CANCELED,e,n),this.name="CanceledError"}Z.inherits(Wr,$e,{__CANCEL__:!0});function bp(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new $e("Request failed with status code "+n.status,[$e.ERR_BAD_REQUEST,$e.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function gT(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function _T(t,e){t=t||10;const n=new Array(t),i=new Array(t);let r=0,s=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=i[s];o||(o=c),n[r]=l,i[r]=c;let f=s,d=0;for(;f!==r;)d+=n[f++],f=f%t;if(r=(r+1)%t,r===s&&(s=(s+1)%t),c-o<e)return;const p=u&&c-u;return p?Math.round(d*1e3/p):void 0}}function vT(t,e){let n=0,i=1e3/e,r,s;const o=(c,u=Date.now())=>{n=u,r=null,s&&(clearTimeout(s),s=null),t.apply(null,c)};return[(...c)=>{const u=Date.now(),f=u-n;f>=i?o(c,u):(r=c,s||(s=setTimeout(()=>{s=null,o(r)},i-f)))},()=>r&&o(r)]}const Uo=(t,e,n=3)=>{let i=0;const r=_T(50,250);return vT(s=>{const o=s.loaded,a=s.lengthComputable?s.total:void 0,l=o-i,c=r(l),u=o<=a;i=o;const f={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:c||void 0,estimated:c&&a&&u?(a-o)/c:void 0,event:s,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(f)},n)},jf=(t,e)=>{const n=t!=null;return[i=>e[0]({lengthComputable:n,total:t,loaded:i}),e[1]]},Yf=t=>(...e)=>Z.asap(()=>t(...e)),xT=Bt.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,Bt.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(Bt.origin),Bt.navigator&&/(msie|trident)/i.test(Bt.navigator.userAgent)):()=>!0,ST=Bt.hasStandardBrowserEnv?{write(t,e,n,i,r,s){const o=[t+"="+encodeURIComponent(e)];Z.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),Z.isString(i)&&o.push("path="+i),Z.isString(r)&&o.push("domain="+r),s===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function yT(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function MT(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function Tp(t,e){return t&&!yT(e)?MT(t,e):e}const Kf=t=>t instanceof Zt?{...t}:t;function Yi(t,e){e=e||{};const n={};function i(c,u,f,d){return Z.isPlainObject(c)&&Z.isPlainObject(u)?Z.merge.call({caseless:d},c,u):Z.isPlainObject(u)?Z.merge({},u):Z.isArray(u)?u.slice():u}function r(c,u,f,d){if(Z.isUndefined(u)){if(!Z.isUndefined(c))return i(void 0,c,f,d)}else return i(c,u,f,d)}function s(c,u){if(!Z.isUndefined(u))return i(void 0,u)}function o(c,u){if(Z.isUndefined(u)){if(!Z.isUndefined(c))return i(void 0,c)}else return i(void 0,u)}function a(c,u,f){if(f in e)return i(c,u);if(f in t)return i(void 0,c)}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,u,f)=>r(Kf(c),Kf(u),f,!0)};return Z.forEach(Object.keys(Object.assign({},t,e)),function(u){const f=l[u]||r,d=f(t[u],e[u],u);Z.isUndefined(d)&&f!==a||(n[u]=d)}),n}const wp=t=>{const e=Yi({},t);let{data:n,withXSRFToken:i,xsrfHeaderName:r,xsrfCookieName:s,headers:o,auth:a}=e;e.headers=o=Zt.from(o),e.url=Sp(Tp(e.baseURL,e.url),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let l;if(Z.isFormData(n)){if(Bt.hasStandardBrowserEnv||Bt.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((l=o.getContentType())!==!1){const[c,...u]=l?l.split(";").map(f=>f.trim()).filter(Boolean):[];o.setContentType([c||"multipart/form-data",...u].join("; "))}}if(Bt.hasStandardBrowserEnv&&(i&&Z.isFunction(i)&&(i=i(e)),i||i!==!1&&xT(e.url))){const c=r&&s&&ST.read(s);c&&o.set(r,c)}return e},ET=typeof XMLHttpRequest<"u",bT=ET&&function(t){return new Promise(function(n,i){const r=wp(t);let s=r.data;const o=Zt.from(r.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:c}=r,u,f,d,p,g;function v(){p&&p(),g&&g(),r.cancelToken&&r.cancelToken.unsubscribe(u),r.signal&&r.signal.removeEventListener("abort",u)}let m=new XMLHttpRequest;m.open(r.method.toUpperCase(),r.url,!0),m.timeout=r.timeout;function h(){if(!m)return;const T=Zt.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders()),I={data:!a||a==="text"||a==="json"?m.responseText:m.response,status:m.status,statusText:m.statusText,headers:T,config:t,request:m};bp(function(P){n(P),v()},function(P){i(P),v()},I),m=null}"onloadend"in m?m.onloadend=h:m.onreadystatechange=function(){!m||m.readyState!==4||m.status===0&&!(m.responseURL&&m.responseURL.indexOf("file:")===0)||setTimeout(h)},m.onabort=function(){m&&(i(new $e("Request aborted",$e.ECONNABORTED,t,m)),m=null)},m.onerror=function(){i(new $e("Network Error",$e.ERR_NETWORK,t,m)),m=null},m.ontimeout=function(){let E=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const I=r.transitional||yp;r.timeoutErrorMessage&&(E=r.timeoutErrorMessage),i(new $e(E,I.clarifyTimeoutError?$e.ETIMEDOUT:$e.ECONNABORTED,t,m)),m=null},s===void 0&&o.setContentType(null),"setRequestHeader"in m&&Z.forEach(o.toJSON(),function(E,I){m.setRequestHeader(I,E)}),Z.isUndefined(r.withCredentials)||(m.withCredentials=!!r.withCredentials),a&&a!=="json"&&(m.responseType=r.responseType),c&&([d,g]=Uo(c,!0),m.addEventListener("progress",d)),l&&m.upload&&([f,p]=Uo(l),m.upload.addEventListener("progress",f),m.upload.addEventListener("loadend",p)),(r.cancelToken||r.signal)&&(u=T=>{m&&(i(!T||T.type?new Wr(null,t,m):T),m.abort(),m=null)},r.cancelToken&&r.cancelToken.subscribe(u),r.signal&&(r.signal.aborted?u():r.signal.addEventListener("abort",u)));const R=gT(r.url);if(R&&Bt.protocols.indexOf(R)===-1){i(new $e("Unsupported protocol "+R+":",$e.ERR_BAD_REQUEST,t));return}m.send(s||null)})},TT=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let i=new AbortController,r;const s=function(c){if(!r){r=!0,a();const u=c instanceof Error?c:this.reason;i.abort(u instanceof $e?u:new Wr(u instanceof Error?u.message:u))}};let o=e&&setTimeout(()=>{o=null,s(new $e(`timeout ${e} of ms exceeded`,$e.ETIMEDOUT))},e);const a=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(c=>{c.unsubscribe?c.unsubscribe(s):c.removeEventListener("abort",s)}),t=null)};t.forEach(c=>c.addEventListener("abort",s));const{signal:l}=i;return l.unsubscribe=()=>Z.asap(a),l}},wT=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let i=0,r;for(;i<n;)r=i+e,yield t.slice(i,r),i=r},AT=async function*(t,e){for await(const n of RT(t))yield*wT(n,e)},RT=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:i}=await e.read();if(n)break;yield i}}finally{await e.cancel()}},Zf=(t,e,n,i)=>{const r=AT(t,e);let s=0,o,a=l=>{o||(o=!0,i&&i(l))};return new ReadableStream({async pull(l){try{const{done:c,value:u}=await r.next();if(c){a(),l.close();return}let f=u.byteLength;if(n){let d=s+=f;n(d)}l.enqueue(new Uint8Array(u))}catch(c){throw a(c),c}},cancel(l){return a(l),r.return()}},{highWaterMark:2})},oa=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Ap=oa&&typeof ReadableStream=="function",CT=oa&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),Rp=(t,...e)=>{try{return!!t(...e)}catch{return!1}},PT=Ap&&Rp(()=>{let t=!1;const e=new Request(Bt.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e}),Jf=64*1024,lc=Ap&&Rp(()=>Z.isReadableStream(new Response("").body)),No={stream:lc&&(t=>t.body)};oa&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!No[e]&&(No[e]=Z.isFunction(t[e])?n=>n[e]():(n,i)=>{throw new $e(`Response type '${e}' is not supported`,$e.ERR_NOT_SUPPORT,i)})})})(new Response);const DT=async t=>{if(t==null)return 0;if(Z.isBlob(t))return t.size;if(Z.isSpecCompliantForm(t))return(await new Request(Bt.origin,{method:"POST",body:t}).arrayBuffer()).byteLength;if(Z.isArrayBufferView(t)||Z.isArrayBuffer(t))return t.byteLength;if(Z.isURLSearchParams(t)&&(t=t+""),Z.isString(t))return(await CT(t)).byteLength},LT=async(t,e)=>{const n=Z.toFiniteNumber(t.getContentLength());return n??DT(e)},IT=oa&&(async t=>{let{url:e,method:n,data:i,signal:r,cancelToken:s,timeout:o,onDownloadProgress:a,onUploadProgress:l,responseType:c,headers:u,withCredentials:f="same-origin",fetchOptions:d}=wp(t);c=c?(c+"").toLowerCase():"text";let p=TT([r,s&&s.toAbortSignal()],o),g;const v=p&&p.unsubscribe&&(()=>{p.unsubscribe()});let m;try{if(l&&PT&&n!=="get"&&n!=="head"&&(m=await LT(u,i))!==0){let I=new Request(e,{method:"POST",body:i,duplex:"half"}),L;if(Z.isFormData(i)&&(L=I.headers.get("content-type"))&&u.setContentType(L),I.body){const[P,k]=jf(m,Uo(Yf(l)));i=Zf(I.body,Jf,P,k)}}Z.isString(f)||(f=f?"include":"omit");const h="credentials"in Request.prototype;g=new Request(e,{...d,signal:p,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:i,duplex:"half",credentials:h?f:void 0});let R=await fetch(g);const T=lc&&(c==="stream"||c==="response");if(lc&&(a||T&&v)){const I={};["status","statusText","headers"].forEach(w=>{I[w]=R[w]});const L=Z.toFiniteNumber(R.headers.get("content-length")),[P,k]=a&&jf(L,Uo(Yf(a),!0))||[];R=new Response(Zf(R.body,Jf,P,()=>{k&&k(),v&&v()}),I)}c=c||"text";let E=await No[Z.findKey(No,c)||"text"](R,t);return!T&&v&&v(),await new Promise((I,L)=>{bp(I,L,{data:E,headers:Zt.from(R.headers),status:R.status,statusText:R.statusText,config:t,request:g})})}catch(h){throw v&&v(),h&&h.name==="TypeError"&&/fetch/i.test(h.message)?Object.assign(new $e("Network Error",$e.ERR_NETWORK,t,g),{cause:h.cause||h}):$e.from(h,h&&h.code,t,g)}}),cc={http:jb,xhr:bT,fetch:IT};Z.forEach(cc,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Qf=t=>`- ${t}`,UT=t=>Z.isFunction(t)||t===null||t===!1,Cp={getAdapter:t=>{t=Z.isArray(t)?t:[t];const{length:e}=t;let n,i;const r={};for(let s=0;s<e;s++){n=t[s];let o;if(i=n,!UT(n)&&(i=cc[(o=String(n)).toLowerCase()],i===void 0))throw new $e(`Unknown adapter '${o}'`);if(i)break;r[o||"#"+s]=i}if(!i){const s=Object.entries(r).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=e?s.length>1?`since :
`+s.map(Qf).join(`
`):" "+Qf(s[0]):"as no adapter specified";throw new $e("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return i},adapters:cc};function tl(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Wr(null,t)}function ed(t){return tl(t),t.headers=Zt.from(t.headers),t.data=el.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Cp.getAdapter(t.adapter||Ds.adapter)(t).then(function(i){return tl(t),i.data=el.call(t,t.transformResponse,i),i.headers=Zt.from(i.headers),i},function(i){return Ep(i)||(tl(t),i&&i.response&&(i.response.data=el.call(t,t.transformResponse,i.response),i.response.headers=Zt.from(i.response.headers))),Promise.reject(i)})}const Pp="1.7.9",aa={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{aa[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const td={};aa.transitional=function(e,n,i){function r(s,o){return"[Axios v"+Pp+"] Transitional option '"+s+"'"+o+(i?". "+i:"")}return(s,o,a)=>{if(e===!1)throw new $e(r(o," has been removed"+(n?" in "+n:"")),$e.ERR_DEPRECATED);return n&&!td[o]&&(td[o]=!0,console.warn(r(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,a):!0}};aa.spelling=function(e){return(n,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function NT(t,e,n){if(typeof t!="object")throw new $e("options must be an object",$e.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let r=i.length;for(;r-- >0;){const s=i[r],o=e[s];if(o){const a=t[s],l=a===void 0||o(a,s,t);if(l!==!0)throw new $e("option "+s+" must be "+l,$e.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new $e("Unknown option "+s,$e.ERR_BAD_OPTION)}}const Mo={assertOptions:NT,validators:aa},Cn=Mo.validators;class Xi{constructor(e){this.defaults=e,this.interceptors={request:new qf,response:new qf}}async request(e,n){try{return await this._request(e,n)}catch(i){if(i instanceof Error){let r={};Error.captureStackTrace?Error.captureStackTrace(r):r=new Error;const s=r.stack?r.stack.replace(/^.+\n/,""):"";try{i.stack?s&&!String(i.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+s):i.stack=s}catch{}}throw i}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Yi(this.defaults,n);const{transitional:i,paramsSerializer:r,headers:s}=n;i!==void 0&&Mo.assertOptions(i,{silentJSONParsing:Cn.transitional(Cn.boolean),forcedJSONParsing:Cn.transitional(Cn.boolean),clarifyTimeoutError:Cn.transitional(Cn.boolean)},!1),r!=null&&(Z.isFunction(r)?n.paramsSerializer={serialize:r}:Mo.assertOptions(r,{encode:Cn.function,serialize:Cn.function},!0)),Mo.assertOptions(n,{baseUrl:Cn.spelling("baseURL"),withXsrfToken:Cn.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&Z.merge(s.common,s[n.method]);s&&Z.forEach(["delete","get","head","post","put","patch","common"],g=>{delete s[g]}),n.headers=Zt.concat(o,s);const a=[];let l=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(l=l&&v.synchronous,a.unshift(v.fulfilled,v.rejected))});const c=[];this.interceptors.response.forEach(function(v){c.push(v.fulfilled,v.rejected)});let u,f=0,d;if(!l){const g=[ed.bind(this),void 0];for(g.unshift.apply(g,a),g.push.apply(g,c),d=g.length,u=Promise.resolve(n);f<d;)u=u.then(g[f++],g[f++]);return u}d=a.length;let p=n;for(f=0;f<d;){const g=a[f++],v=a[f++];try{p=g(p)}catch(m){v.call(this,m);break}}try{u=ed.call(this,p)}catch(g){return Promise.reject(g)}for(f=0,d=c.length;f<d;)u=u.then(c[f++],c[f++]);return u}getUri(e){e=Yi(this.defaults,e);const n=Tp(e.baseURL,e.url);return Sp(n,e.params,e.paramsSerializer)}}Z.forEach(["delete","get","head","options"],function(e){Xi.prototype[e]=function(n,i){return this.request(Yi(i||{},{method:e,url:n,data:(i||{}).data}))}});Z.forEach(["post","put","patch"],function(e){function n(i){return function(s,o,a){return this.request(Yi(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}Xi.prototype[e]=n(),Xi.prototype[e+"Form"]=n(!0)});class Hc{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const i=this;this.promise.then(r=>{if(!i._listeners)return;let s=i._listeners.length;for(;s-- >0;)i._listeners[s](r);i._listeners=null}),this.promise.then=r=>{let s;const o=new Promise(a=>{i.subscribe(a),s=a}).then(r);return o.cancel=function(){i.unsubscribe(s)},o},e(function(s,o,a){i.reason||(i.reason=new Wr(s,o,a),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=i=>{e.abort(i)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new Hc(function(r){e=r}),cancel:e}}}function FT(t){return function(n){return t.apply(null,n)}}function OT(t){return Z.isObject(t)&&t.isAxiosError===!0}const uc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(uc).forEach(([t,e])=>{uc[e]=t});function Dp(t){const e=new Xi(t),n=lp(Xi.prototype.request,e);return Z.extend(n,Xi.prototype,e,{allOwnKeys:!0}),Z.extend(n,e,null,{allOwnKeys:!0}),n.create=function(r){return Dp(Yi(t,r))},n}const bt=Dp(Ds);bt.Axios=Xi;bt.CanceledError=Wr;bt.CancelToken=Hc;bt.isCancel=Ep;bt.VERSION=Pp;bt.toFormData=sa;bt.AxiosError=$e;bt.Cancel=bt.CanceledError;bt.all=function(e){return Promise.all(e)};bt.spread=FT;bt.isAxiosError=OT;bt.mergeConfig=Yi;bt.AxiosHeaders=Zt;bt.formToJSON=t=>Mp(Z.isHTMLForm(t)?new FormData(t):t);bt.getAdapter=Cp.getAdapter;bt.HttpStatusCode=uc;bt.default=bt;const BT={name:"Blog",components:{BasePage:Vr,Container:ta},setup(){const t=hr([]),e=hr([]),n=hr([]),i=hr([]),r=hr(""),s={};Bd(()=>{bt.get("/blog-data.json").then(a=>{a.data.forEach(c=>{t.value.push(c),e.value.length<3&&e.value.push({title:c.title,link:c.link}),c.tags.forEach(u=>{s[u]?s[u]++:s[u]=1})}),n.value=Object.entries(s).map(([c,u])=>({tag:c,count:u}))}).catch(a=>{console.error("Error loading blog data:",a)})});const o=dn(()=>{let a=t.value;return i.value.length>0&&(a=a.filter(l=>l.tags.some(c=>i.value.includes(c)))),r.value&&(a=a.filter(l=>{const c=l.title.toLowerCase(),u=l.description.toLowerCase(),f=l.tags.map(d=>d.toLowerCase());return c.includes(r.value.toLowerCase())||u.includes(r.value.toLowerCase())||f.some(d=>d.includes(r.value.toLowerCase()))})),a});return{blogItems:t,recentPosts:e,tags:n,selectedTags:i,searchQuery:r,filteredBlogItems:o}},mounted(){document.title="Derek Corniello's Blogs"}},kT={class:"blog-content"},zT={class:"top-row"},HT={id:"recent",class:"list-unstyled"},VT={class:"dropdown"},GT={class:"dropdown-content"},WT=["value"],XT={class:"main-content"},qT={class:"blog-items",id:"blog-items"},$T={class:"read-more"},jT={class:"tags-container"};function YT(t,e,n,i,r,s){const o=Tt("Container"),a=Tt("router-link"),l=Tt("BasePage");return gt(),vi(l,null,{default:Le(()=>[y("div",kT,[e[9]||(e[9]=y("h1",{class:"title"},"Blog",-1)),y("div",zT,[Be(o,null,{title:Le(()=>e[2]||(e[2]=[de("Search")])),default:Le(()=>[eu(y("input",{type:"text",id:"search-input",class:"searchbar",placeholder:"Search...","onUpdate:modelValue":e[0]||(e[0]=c=>i.searchQuery=c)},null,512),[[Jg,i.searchQuery]])]),_:1}),Be(o,null,{title:Le(()=>e[3]||(e[3]=[de("Recent Posts")])),default:Le(()=>[y("ul",HT,[(gt(!0),Wt(Ct,null,Os(i.recentPosts,(c,u)=>(gt(),Wt("li",{key:u},[Be(a,{to:c.link,class:Ho(t.r-t.link)},{default:Le(()=>[de(Fi(c.title),1)]),_:2},1032,["to","class"])]))),128))])]),_:1}),Be(o,null,{title:Le(()=>e[4]||(e[4]=[de("Tags")])),default:Le(()=>[y("div",VT,[e[5]||(e[5]=y("button",{class:"dropdown-btn"},"Select Tags",-1)),y("div",GT,[(gt(!0),Wt(Ct,null,Os(i.tags,(c,u)=>(gt(),Wt("label",{key:u},[eu(y("input",{type:"checkbox",value:c.tag,"onUpdate:modelValue":e[1]||(e[1]=f=>i.selectedTags=f)},null,8,WT),[[Qg,i.selectedTags]]),de(" "+Fi(c.tag),1)]))),128))])])]),_:1})]),y("div",XT,[y("div",qT,[(gt(!0),Wt(Ct,null,Os(i.filteredBlogItems,(c,u)=>(gt(),Wt("div",{key:u,class:"blog-item"},[Be(o,null,{title:Le(()=>[de(Fi(c.title),1)]),default:Le(()=>[y("p",null,Fi(c.description),1),e[7]||(e[7]=y("br",null,null,-1)),y("div",$T,[Be(a,{to:c.link,class:"r-link",style:{color:"#00ffcc"}},{default:Le(()=>e[6]||(e[6]=[y("strong",null,"Read More",-1)])),_:2},1032,["to"])]),e[8]||(e[8]=y("br",null,null,-1)),y("div",jT,[(gt(!0),Wt(Ct,null,Os(c.tags,(f,d)=>(gt(),Wt("span",{key:d,class:"tag",style:{backgroundColor:"#ff66b2",color:"#FFFFFF"}},Fi(f),1))),128))])]),_:2},1024)]))),128))])])])]),_:1})}const KT=on(BT,[["render",YT],["__scopeId","data-v-2901891e"]]),ZT="/qrcode.png",JT={name:"contact",components:{BasePage:Vr,Container:ta},mounted(){document.title="Contact Derek Corniello"}},QT={class:"contact-page"},ew={class:"containers-holder",style:{width:"70%"}};function tw(t,e,n,i,r,s){const o=Tt("Container"),a=Tt("BasePage");return gt(),vi(a,null,{default:Le(()=>[y("div",QT,[e[2]||(e[2]=y("h1",{class:"title"},"Contact Me",-1)),e[3]||(e[3]=y("p",{class:"subtitle"}," I'd love to hear from you! Feel free to reach out using the form below or via my socials. ",-1)),y("div",ew,[Be(o,null,{title:Le(()=>e[0]||(e[0]=[de(" Get In Touch ")])),default:Le(()=>[e[1]||(e[1]=y("div",{class:"contact-details"},[y("p",null,[de("Email: "),y("a",{href:"mailto:corniedj@mail.uc.edu"},"corniedj@mail.uc.edu")]),y("p",null,[de("Phone: "),y("a",{href:"tel:+14408215281"},"440-821-5281")]),y("p",null,[de(" LinkedIn: "),y("a",{href:"https://linkedin.com/in/derek-corniello",target:"_blank"},"linkedin.com/in/derek-corniello")])],-1))]),_:1})]),e[4]||(e[4]=y("a",{href:"https://dot.cards/DerekCorniello",target:"_blank",style:{"justify-content":"center","align-items":"center",display:"flex",margin:"1%"}},[y("img",{src:ZT,alt:"My QR code to contact me!",style:{width:"60%",height:"auto","border-radius":"10%"}})],-1))])]),_:1})}const nw=on(JT,[["render",tw],["__scopeId","data-v-446bd847"]]),iw="/eightbitbeats.png",rw="/reqinspect.png",sw="/resume2web.png",ow="/billiardsbonanza.png",aw={name:"Projects",components:{BasePage:Vr,Container:ta},mounted(){document.title="Derek Corniello's Projects"}},lw={class:"containers-holder"};function cw(t,e,n,i,r,s){const o=Tt("Container"),a=Tt("BasePage");return gt(),vi(a,null,{default:Le(()=>[e[36]||(e[36]=y("h1",{class:"title"},"Projects",-1)),e[37]||(e[37]=y("p",{class:"subtitle"},"Click any project name to view it's source and/or demo!",-1)),y("div",lw,[Be(o,null,{title:Le(()=>e[0]||(e[0]=[y("div",{class:"project-title"},[y("span",{class:"project-emoji"},"🎵"),y("a",{href:"https://github.com/DerekCorniello/8BitBeats",target:"_blank",style:{"text-decoration":"underline white"}},"8BitBeats"),de(" / "),y("a",{href:"https://crates.io/crates/eightbitbeats",target:"_blank",style:{"text-decoration":"underline white"}},"crates.io")],-1),y("div",{class:"tech-stack"},[y("img",{src:"https://img.shields.io/badge/Rust-000000?style=flat&logo=rust&logoColor=white",alt:"Rust",class:"tech-badge"}),y("img",{src:"https://img.shields.io/badge/TUI-4EAA25?style=flat&logo=terminal&logoColor=white",alt:"TUI",class:"tech-badge"}),y("img",{src:"https://img.shields.io/badge/Audio-FF8C00?style=flat&logo=audio-technica&logoColor=white",alt:"Audio",class:"tech-badge"})],-1)])),default:Le(()=>[e[1]||(e[1]=de(" A terminal-based chiptune generator written in Rust. It lets users create, preview, and replay 8-bit songs using seed-based track IDs. With real-time TUI controls and efficient audio synthesis, it generates deterministic tracks in milliseconds, offering a nostalgic and programmable music creation experience right from the command line. ")),e[2]||(e[2]=y("img",{src:iw,alt:"[8BitBeats Screenshot]"},null,-1))]),_:1}),Be(o,null,{title:Le(()=>e[3]||(e[3]=[y("div",{class:"project-title"},[y("span",{class:"project-emoji"},"🐍"),y("a",{href:"https://reqinspect.com",target:"_blank",style:{"text-decoration":"underline white"}},"reqinspect.com"),de(" / "),y("a",{href:"https://github.com/DerekCorniello/pip-req-valid",target:"_blank",style:{"text-decoration":"underline white"}},"pip-req-valid")],-1),y("div",{class:"tech-stack"},[y("img",{src:"https://img.shields.io/badge/Go-00ADD8?style=flat&logo=go&logoColor=white",alt:"Go",class:"tech-badge"}),y("img",{src:"https://img.shields.io/badge/Vue.js-4FC08D?style=flat&logo=vuedotjs&logoColor=white",alt:"Vue.js",class:"tech-badge"}),y("img",{src:"https://img.shields.io/badge/AWS-FF9900?style=flat&logo=amazonaws&logoColor=white",alt:"AWS",class:"tech-badge"})],-1)])),default:Le(()=>[e[4]||(e[4]=de(" A web app hosted on AWS that validates `requirements.txt` files for pip. It uses Go for backend processing and Vue.js for the frontend, both hosted on AWS architecture. It checks for missing or outdated dependencies and helps ensure that your Python project’s dependencies are up-to-date and properly formatted. ")),e[5]||(e[5]=y("br",null,null,-1)),e[6]||(e[6]=y("br",null,null,-1)),e[7]||(e[7]=y("img",{src:rw,alt:"[reqinspect.com Screenshot]"},null,-1))]),_:1}),Be(o,null,{title:Le(()=>e[8]||(e[8]=[y("div",{class:"project-title"},[y("span",{class:"project-emoji"},"⌨️"),y("a",{href:"https://github.com/DerekCorniello/gitcmd",target:"_blank",style:{"text-decoration":"underline white"}},"gitcmd"),de(" / "),y("a",{href:"https://crates.io/crates/gitcmd",target:"_blank",style:{"text-decoration":"underline white"}},"crates.io")],-1),y("div",{class:"tech-stack"},[y("img",{src:"https://img.shields.io/badge/Rust-000000?style=flat&logo=rust&logoColor=white",alt:"Rust",class:"tech-badge"}),y("img",{src:"https://img.shields.io/badge/CLI-4EAA25?style=flat&logo=gnubash&logoColor=white",alt:"CLI",class:"tech-badge"})],-1)])),default:Le(()=>[e[9]||(e[9]=de(" A terminal-based application acting as a custom shell for Git commands. gitcmd simplifies workflow by offering a tailored prompt and intuitive command input. Built with Rust, it showcases my foray into low-level, high-performance programming and terminal application development. "))]),_:1}),Be(o,null,{title:Le(()=>e[10]||(e[10]=[y("div",{class:"project-title"},[y("span",{class:"project-emoji"},"📝"),y("a",{href:"https://github.com/grillinr/Resume2Web",target:"_blank",style:{"text-decoration":"underline white"}},"Resume2Web")],-1),y("div",{class:"tech-stack"},[y("img",{src:"https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black",alt:"React",class:"tech-badge"}),y("img",{src:"https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white",alt:"TypeScript",class:"tech-badge"}),y("img",{src:"https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white",alt:"Python",class:"tech-badge"}),y("img",{src:"https://img.shields.io/badge/Flask-000000?style=flat&logo=flask&logoColor=white",alt:"Flask",class:"tech-badge"})],-1)])),default:Le(()=>[e[11]||(e[11]=de(" A Hackathon app that uses Vite, React/TypeScript, and Python/Flask. It takes a resume and converts it to a website with custom styling. This hackathon was my first and helped me learn more about full-stack development and new skills in a quick manner! ")),e[12]||(e[12]=y("br",null,null,-1)),e[13]||(e[13]=y("br",null,null,-1)),e[14]||(e[14]=y("img",{src:sw,alt:"[Resume2Web Screenshot]"},null,-1))]),_:1}),Be(o,null,{title:Le(()=>e[15]||(e[15]=[y("div",{class:"project-title"},[y("span",{class:"project-emoji"},"🚀"),y("a",{href:"https://github.com/DerekCorniello/derekcorniello.github.io",target:"_blank",style:{"text-decoration":"underline white"}},"This Portfolio Site")],-1),y("div",{class:"tech-stack"},[y("img",{src:"https://img.shields.io/badge/Vue.js-4FC08D?style=flat&logo=vuedotjs&logoColor=white",alt:"Vue.js",class:"tech-badge"}),y("img",{src:"https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white",alt:"Vite",class:"tech-badge"}),y("img",{src:"https://img.shields.io/badge/Three.js-000000?style=flat&logo=threedotjs&logoColor=white",alt:"Three.js",class:"tech-badge"}),y("img",{src:"https://img.shields.io/badge/Tailwind-06B6D4?style=flat&logo=tailwindcss&logoColor=white",alt:"Tailwind CSS",class:"tech-badge"})],-1)])),default:Le(()=>[e[16]||(e[16]=de(" This webpage was made by me! I used Vite, Vue.js, JavaScript, and HTML/CSS to make a very cool and easily navigated portfolio site for viewers like you Three.js was also used to create the very cool backgrounds and word sphere on the landing page. I love space, so introducting you to ")),e[17]||(e[17]=y("strong",null,"my space",-1)),e[18]||(e[18]=de(" has been a pleasure! "))]),_:1}),Be(o,null,{title:Le(()=>e[19]||(e[19]=[y("div",{class:"project-title"},[y("span",{class:"project-emoji"},"💻"),y("a",{href:"https://github.com/DerekCorniello/NeoVim-Setup",target:"_blank",style:{"text-decoration":"underline white"}},"NeoVim"),de(" / "),y("a",{href:"https://github.com/DerekCorniello/dotfiles",target:"_blank",style:{"text-decoration":"underline white"}},"Linux Setup")],-1),y("div",{class:"tech-stack"},[y("img",{src:"https://img.shields.io/badge/NeoVim-57A143?style=flat&logo=neovim&logoColor=white",alt:"NeoVim",class:"tech-badge"}),y("img",{src:"https://img.shields.io/badge/Lua-2C2D72?style=flat&logo=lua&logoColor=white",alt:"Lua",class:"tech-badge"}),y("img",{src:"https://img.shields.io/badge/Hyprland-111111?style=flat&logo=linux&logoColor=white",alt:"Hyprland",class:"tech-badge"}),y("img",{src:"https://img.shields.io/badge/Zsh-1E2C3E?style=flat&logo=gnubash&logoColor=white",alt:"Zsh",class:"tech-badge"})],-1)])),default:Le(()=>[e[20]||(e[20]=de(" Here is my development setup that I do my programming and software development on. NeoVim enables me to edit, maintain, search through, and navigate a lot of files at one time, in an efficient manner. ")),e[21]||(e[21]=y("br",null,null,-1)),e[22]||(e[22]=de(" My dotfiles contain my ArchLinux dotfiles setup, which include, but are not limited to, tmux, hyprland, oh my zsh, and kitty. "))]),_:1}),Be(o,null,{title:Le(()=>e[23]||(e[23]=[y("div",{class:"project-title"},[y("span",{class:"project-emoji"},"📊"),y("a",{href:"https://github.com/DerekCorniello/AmandaLynnDashboard",target:"_blank",style:{"text-decoration":"underline white"}},"Amanda Lynn Dashboard")],-1),y("div",{class:"tech-stack"},[y("img",{src:"https://img.shields.io/badge/Vue.js-4FC08D?style=flat&logo=vuedotjs&logoColor=white",alt:"Vue.js",class:"tech-badge"}),y("img",{src:"https://img.shields.io/badge/Django-092E20?style=flat&logo=django&logoColor=white",alt:"Django",class:"tech-badge"}),y("img",{src:"https://img.shields.io/badge/SQLite-003B57?style=flat&logo=sqlite&logoColor=white",alt:"SQLite",class:"tech-badge"}),y("img",{src:"https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white",alt:"Docker",class:"tech-badge"})],-1)])),default:Le(()=>[e[24]||(e[24]=de(" I made a locally-running app for my (non-technical) Mom, who needed an app that showed her product for her small business. It tracks her revenue vs. expenses, stock, sales, and more! I update it regularly per her requests. It runs on a Vue frontend, Django for backend, SQLite for storage, and Docker to build and run the app. ")),e[25]||(e[25]=y("br",null,null,-1)),e[26]||(e[26]=de(" Since she is not a tech expert, Docker was able to help her start and run the new app updates and changes without using the command line! "))]),_:1}),Be(o,null,{title:Le(()=>e[27]||(e[27]=[y("div",{class:"project-title"},[y("span",{class:"project-emoji"},"🎮"),y("a",{href:"https://github.com/DerekCorniello/Game_BilliardsBonanza",target:"_blank",style:{"text-decoration":"underline white"}},"Billiards Bonanza"),de(" / "),y("a",{href:"https://dcoolman.itch.io/Billiards-Bonanza",target:"_blank",style:{"text-decoration":"underline white"}},"Game Homepage")],-1),y("div",{class:"tech-stack"},[y("img",{src:"https://img.shields.io/badge/Unity-000000?style=flat&logo=unity&logoColor=white",alt:"Unity",class:"tech-badge"}),y("img",{src:"https://img.shields.io/badge/C%23-239120?style=flat&logo=c-sharp&logoColor=white",alt:"C#",class:"tech-badge"})],-1)])),default:Le(()=>[e[28]||(e[28]=de(" An 8-Ball game with a bunch of twists and funny add-ons. I made it in Unity using C#, and did all of the assets myself. This was a great experience in learning the syntax of C#, and learning more about programming languages and Unity! ")),e[29]||(e[29]=y("br",null,null,-1)),e[30]||(e[30]=y("br",null,null,-1)),e[31]||(e[31]=y("img",{src:ow,alt:"[Billiards Bonanza Screenshot]"},null,-1))]),_:1}),Be(o,null,{title:Le(()=>e[32]||(e[32]=[y("div",{class:"project-title"},[y("span",{class:"project-emoji"},"💬"),y("a",{href:"https://github.com/DerekCorniello/CS4065-Discussion-Board",target:"_blank",style:{"text-decoration":"underline white"}},"Discussion Board")],-1),y("div",{class:"tech-stack"},[y("img",{src:"https://img.shields.io/badge/Java-007396?style=flat&logo=openjdk&logoColor=white",alt:"Java",class:"tech-badge"}),y("img",{src:"https://img.shields.io/badge/WebSockets-010101?style=flat&logo=websocket&logoColor=white",alt:"WebSockets",class:"tech-badge"})],-1)])),default:Le(()=>[e[33]||(e[33]=de(" A live discussion board and chat app made directly in Java, using live, hand-rolled WebSockets, to enable real-time chatting with other people. It includes custom options for privileges and chatting lobbies! "))]),_:1}),Be(o,null,{title:Le(()=>e[34]||(e[34]=[de(" That's not all! ")])),default:Le(()=>[e[35]||(e[35]=y("div",{style:{"text-align":"center"}},[de(" Please check out the rest of my projects "),y("a",{href:"https://github.com/DerekCorniello",target:"_blank"},[y("u",null,"here")]),de("! ")],-1))]),_:1})])]),_:1})}const uw=on(aw,[["render",cw],["__scopeId","data-v-a790bb25"]]),fw={name:"BaseBlog",components:{BasePage:Vr},props:{title:{type:String,required:!0}}},dw={class:"blog-container"},hw={class:"blog-title"},pw={class:"blog-content"};function mw(t,e,n,i,r,s){const o=Tt("BasePage");return gt(),vi(o,null,{default:Le(()=>[y("div",dw,[y("h1",hw,Fi(n.title),1),y("div",pw,[Ao(t.$slots,"default",{},void 0,!0)])])]),_:3})}const gw=on(fw,[["render",mw],["__scopeId","data-v-db00ebc5"]]),_w={name:"blog1",components:{BaseBlog:gw}};function vw(t,e,n,i,r,s){const o=Tt("router-link"),a=Tt("BaseBlog");return gt(),vi(a,{title:"My Transition from VSC*de to NeoVim"},{default:Le(()=>[e[1]||(e[1]=y("div",{class:"divider-container"},[y("div",{class:"divider-line"}),y("div",{class:"divider-glow"})],-1)),e[2]||(e[2]=y("p",null,[y("i",null,[de("My experience with transitioning from VSC*de to NeoVim. This includes setting up NeoVim, lazy.nvim, Mason, and other plugins that help my development cycle. Thank you to "),y("a",{href:"https://www.youtube.com/c/theprimeagen"},"ThePrimeagen"),de(" for providing guides to help me through this!")])],-1)),e[3]||(e[3]=y("div",{class:"divider-container"},[y("div",{class:"divider-line"}),y("div",{class:"divider-glow"})],-1)),e[4]||(e[4]=y("div",{style:{"text-align":"left"}},[de(" It was a normal day at my office job, code upon code, bugfix upon bugfix. I finally had some time to sit and relax, as I was going to watch a demo from one of my coworkers. He was demonstrating some tooling that he had created for our internal systems. As I hopped into our virtual teams meeting and talked with sonme coworkers, awaiting the arrival of the demo, I was met with the Vim editor. "),y("br"),y("br"),y("i",null,[de("Yuck, why would anyone want to use "),y("b",null,"that"),de("?")]),de(" I thought to myself. "),y("i",null,"It is so bare, so minimalistic. I'll just keep using what I have, no way that is better than my VSC*de Editor."),y("br"),y("br"),de(" Little did I know, I would be sitting here, using NeoVim myself, writing this article, a few months later. Now, here's the short journey of how I migrated from VSC*de to NeoVim. "),y("br"),y("br"),y("br"),y("div",{style:{"text-align":"center","font-size":"1.5rem"}},[y("strong",null,[y("u",null,"My introduction to Vim")])]),y("div",{class:"divider-container"},[y("div",{class:"divider-line"}),y("div",{class:"divider-glow"})]),de(" In a course a few years ago in college, I was sitting in lecture and watching a live code demonstration, I was intrigued on how quickly the professor was able to move around the editor. He was using VSC*de though, so I was confused to say the least. "),y("i",null,"Maybe he's just a fast typer"),de(" I thought. "),y("br"),y("br"),de(" I was astonished watching him program, and one day I realized that he was not an incredibly fast, 200 WPS typer. Through the little I actually watched him type, and watching the screen change inside the editor, I was astonished as to how he was getting it done so quickly. I knew he wasn't using anything different in terms of hardware, so it "),y("b",null,"must"),de(" be some sort of plugin. I went to his office one evening, and asked about it. "),y("br"),y("br"),y("i",null,"It's Vim motions"),de(", he said. Vim? Motions? What is he talking about? Then he told me about Vi, the editor, and Vim, its successor. Once more, I was thoroughly confused. Why learn a whole new way to type when I have been using the same one for years? "),y("i",null,"It's different, you have to get a feel for it, but then it moves mountains in terms of productivity. You've seen me use it in class"),de(". Hmmm... It is intriguing... "),y("br"),y("br"),y("br"),y("div",{style:{"text-align":"center","font-size":"1.5rem"}},[y("strong",null,[y("u",null,"Going Through the (Vim) Motions")])]),y("div",{class:"divider-container"},[y("div",{class:"divider-line"}),y("div",{class:"divider-glow"})]),de(' By now I have heard about "learning the motions is 90% of the battle". So I did what had to be done then, I installed the '),y("a",{href:"https://marketplace.visualstudio.com/items?itemName=vscodevim.vim"},"Vim plugin for VSC*de"),de('. Striving for that quickness and efficiency I saw with my professor before, I set out to learn Vim motions. I think for most, the hardest part is starting. Seeing that "HJKL" move you around comes to a shock for most. It is '),y("i",null,"terribly"),de(" different than a standard text editor. The notion of not using your a mouse scared me. Nonetheless, I buckled down. "),y("br"),y("br"),de(" The key concept that really helped me in learning the motions is the structure. If you have ever watched a video instructing you how to use Vim, you should be familiar with the [command]-[count]-[object] structure. You can do many different things given this notation and Vim's supported commands. For example, if I wanted to edit the last 3 words (split by spaces), I can execute the command 'c3b' when I am on the end of the line! Now it is just learning "),y("i",null,"most"),de(" of them. Here are some typical keystrokes used: "),y("br"),y("br"),y("ul",null,[y("li",null,"w - Jumps forward to the start of the word"),y("li",null,"e - Jumps forward to the end of the word"),y("li",null,"f - Jumps forward to the next occurence of the following character"),y("li",null,"d - Command to delete the selection"),y("li",null,"c - Command to change the selection")]),y("br"),de(` One last key concept are the modes used in Vim. You need to be in "normal mode" to do the keystrokes above. Outside of that, there is insert, visual, and command mode. There are a few more, but those are the basic ones. Insert mode is where you can type as usual, like in any other editor. Visual mode is a way to visually select text for further manupulation. Command mode you are able to run different commands, such as the subsitute command, by typing the ':' character first, then the command. An example of that would be ':%s/Deerk/Derek/g' which will correct any typos of my name from 'Deerk' to 'Derek', on all lines, for as many occurences as there are per line. `),y("br"),y("br"),de(" But the motions also hit a breaking point. Not all of the motions are, say, easy to remember or recognize. And VSC*de is not super easy to make these customizations in. Yes, there is JSON, but it just becomes increasingly harder and harder to manage customizations on a platform as I wanted to. Moreover, VSC*de was becoming overcrowded, slow to load, and overall a pain. "),y("br"),y("br"),de(" Enter NeoVim. "),y("br"),y("br"),y("div",{style:{"text-align":"center","font-size":"1.5rem"}},[y("strong",null,[y("u",null,"NeoVim, the Editor to End All Editors")])]),y("div",{class:"divider-container"},[y("div",{class:"divider-line"}),y("div",{class:"divider-glow"})]),de(" After researching a few ways to make my wants and needs met in terms of editors. I found two content creators in "),y("a",{href:"https://www.youtube.com/@teej_dv"},"teej_dv"),de(" and "),y("a",{href:"https://www.youtube.com/c/theprimeagen"},"ThePrimeagen"),de(". These two guys fueled my want and desire to not only use NeoVim, but become a better, more efficient programmer. Using some online guides mostly by those two, I was able to customize my own editor for what I need, and what I use. No overhead. No funny business. "),y("i",null,"No Microsoft"),de(". Was it easy? Not at all. But definitely worth it. Once you understand the structure of the NeoVim setup, it becomes much easier to edit it to your liking. Add and take away language support, add plugins you need. Disable stuff you don't. It is cool to be able to have that much control. "),y("br"),y("br"),de(" The best and most important things about learning NeoVim are understanding the structure of "),y("i",null,"your"),de(" setup, what plugins you use, what "),y("a",{href:"https://neovim.io/doc/user/lsp.html"},"lsp"),de(" (language server protocol) you use and what language you do it in. Plugins like "),y("a",{href:"https://github.com/nvim-treesitter/nvim-treesitter"},"treesitter"),de(" and "),y("a",{href:"https://github.com/williamboman/mason-lspconfig.nvim"},"Mason"),de(" are common ones you will see in many setups. As in mine, sometimes you see "),y("a",{href:"https://github.com/folke/lazy.nvim"},"lazy"),de(", but more often than not, you see "),y("a",{href:"https://github.com/wbthomason/packer.nvim"},"Packer"),de(". Ultimately the choice is up to you. Personally, I went a little bit crazy with all of the packages and ended up breaking my configuration, and starting over... more times than I remember. Writing Lua was not something I had ever done before either. I had never heard of an lsp before, so that was new as well!So I was thrown to the wolves, persay, but it ultimately landed me in a way better spot. "),y("br"),y("br"),de(' Fast forward to today. I use NeoVim daily. For work, school, and personal use. I tell my friends that "I use NeoVim by the way", and have no regrets. I make macros that make me faster. More efficient. And best overall, it is '),y("i",null,"fun"),de(". It has added an additional layer of enjoyment to programming for me. I strongly suggest you try it! Here is "),y("a",{href:"https://github.com/DerekCorniello/NeoVim-Setup"},"my setup"),de(" as of right now. There is also a good project being put on that helps beginners make their own setup faster, called "),y("a",{href:"https://github.com/nvim-lua/kickstart.nvim"},"Kickstart"),de(". Please try it out! "),y("br"),y("br"),y("div",{style:{"text-align":"center","font-size":"1.5rem"}},[y("strong",null,[y("u",null,"Concluding Remarks")])]),y("div",{class:"divider-container"},[y("div",{class:"divider-line"}),y("div",{class:"divider-glow"})]),de(" In the end, I see myself standing with NeoVim for a very long time. I don't see myself moving back to VSC*de any time soon. The flexibility and understanding that I have for my editor is unremarkable, the speed is blazingly fast, and my enjoyment for writing scripts is through the roof. Please, push yourself to new heights and never stay comfortable in your environment. Strive for a better development environment. For efficiency. For *enjoying* coding. Thank you for reading, please reach out to me with any feedback! ")],-1)),e[5]||(e[5]=y("br",null,null,-1)),e[6]||(e[6]=y("br",null,null,-1)),Be(o,{style:{"text-align":"center","background-color":"#ff66b2",color:"white",padding:"10px 20px","border-radius":"5px","text-decoration":"none"},class:"r-link",to:"/blog"},{default:Le(()=>e[0]||(e[0]=[de(" <- Back to Blogs ")])),_:1})]),_:1})}const nd=on(_w,[["render",vw],["__scopeId","data-v-ca44c612"]]),xw=KE({history:TE("/"),routes:[{path:"/",name:"home",component:jh},{path:"/about",name:"about",component:lb},{path:"/blog",name:"blog",component:KT,children:[{path:"nvim-transition",name:"nvim-transition",component:nd}]},{path:"/contact",name:"contact",component:nw},{path:"/projects",name:"projects",component:uw},{path:"/resume",name:"Resume",beforeEnter:(t,e,n)=>{window.open("/resume.pdf","_blank"),n(!1)}},{path:"/blogs/nvim-transition",name:"nvim-transition",component:nd},{path:"/:pathMatch(.*)*",redirect:"/"}]}),Lp=i_(jM);Lp.use(xw);Lp.mount("#app");
