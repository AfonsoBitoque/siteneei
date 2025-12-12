(function(){const m=document.createElement("link").relList;if(m&&m.supports&&m.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))u(h);new MutationObserver(h=>{for(const f of h)if(f.type==="childList")for(const g of f.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&u(g)}).observe(document,{childList:!0,subtree:!0});function d(h){const f={};return h.integrity&&(f.integrity=h.integrity),h.referrerPolicy&&(f.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?f.credentials="include":h.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function u(h){if(h.ep)return;h.ep=!0;const f=d(h);fetch(h.href,f)}})();function yf(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var zo={exports:{}},Di={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wm;function mv(){if(Wm)return Di;Wm=1;var r=Symbol.for("react.transitional.element"),m=Symbol.for("react.fragment");function d(u,h,f){var g=null;if(f!==void 0&&(g=""+f),h.key!==void 0&&(g=""+h.key),"key"in h){f={};for(var M in h)M!=="key"&&(f[M]=h[M])}else f=h;return h=f.ref,{$$typeof:r,type:u,key:g,ref:h!==void 0?h:null,props:f}}return Di.Fragment=m,Di.jsx=d,Di.jsxs=d,Di}var Pm;function fv(){return Pm||(Pm=1,zo.exports=mv()),zo.exports}var o=fv(),Lo={exports:{}},W={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nf;function pv(){if(nf)return W;nf=1;var r=Symbol.for("react.transitional.element"),m=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),g=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),E=Symbol.for("react.activity"),U=Symbol.iterator;function R(b){return b===null||typeof b!="object"?null:(b=U&&b[U]||b["@@iterator"],typeof b=="function"?b:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Z=Object.assign,H={};function Q(b,D,I){this.props=b,this.context=D,this.refs=H,this.updater=I||k}Q.prototype.isReactComponent={},Q.prototype.setState=function(b,D){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,D,"setState")},Q.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function en(){}en.prototype=Q.prototype;function q(b,D,I){this.props=b,this.context=D,this.refs=H,this.updater=I||k}var J=q.prototype=new en;J.constructor=q,Z(J,Q.prototype),J.isPureReactComponent=!0;var jn=Array.isArray;function wn(){}var $={H:null,A:null,T:null,S:null},Hn=Object.prototype.hasOwnProperty;function Yn(b,D,I){var Y=I.ref;return{$$typeof:r,type:b,key:D,ref:Y!==void 0?Y:null,props:I}}function Fn(b,D){return Yn(b.type,D,b.props)}function Wn(b){return typeof b=="object"&&b!==null&&b.$$typeof===r}function Qn(b){var D={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(I){return D[I]})}var Dt=/\/+/g;function Be(b,D){return typeof b=="object"&&b!==null&&b.key!=null?Qn(""+b.key):D.toString(36)}function _e(b){switch(b.status){case"fulfilled":return b.value;case"rejected":throw b.reason;default:switch(typeof b.status=="string"?b.then(wn,wn):(b.status="pending",b.then(function(D){b.status==="pending"&&(b.status="fulfilled",b.value=D)},function(D){b.status==="pending"&&(b.status="rejected",b.reason=D)})),b.status){case"fulfilled":return b.value;case"rejected":throw b.reason}}throw b}function w(b,D,I,Y,P){var ln=typeof b;(ln==="undefined"||ln==="boolean")&&(b=null);var pn=!1;if(b===null)pn=!0;else switch(ln){case"bigint":case"string":case"number":pn=!0;break;case"object":switch(b.$$typeof){case r:case m:pn=!0;break;case _:return pn=b._init,w(pn(b._payload),D,I,Y,P)}}if(pn)return P=P(b),pn=Y===""?"."+Be(b,0):Y,jn(P)?(I="",pn!=null&&(I=pn.replace(Dt,"$&/")+"/"),w(P,D,I,"",function(Ga){return Ga})):P!=null&&(Wn(P)&&(P=Fn(P,I+(P.key==null||b&&b.key===P.key?"":(""+P.key).replace(Dt,"$&/")+"/")+pn)),D.push(P)),1;pn=0;var Pn=Y===""?".":Y+":";if(jn(b))for(var zn=0;zn<b.length;zn++)Y=b[zn],ln=Pn+Be(Y,zn),pn+=w(Y,D,I,ln,P);else if(zn=R(b),typeof zn=="function")for(b=zn.call(b),zn=0;!(Y=b.next()).done;)Y=Y.value,ln=Pn+Be(Y,zn++),pn+=w(Y,D,I,ln,P);else if(ln==="object"){if(typeof b.then=="function")return w(_e(b),D,I,Y,P);throw D=String(b),Error("Objects are not valid as a React child (found: "+(D==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":D)+"). If you meant to render a collection of children, use an array instead.")}return pn}function B(b,D,I){if(b==null)return b;var Y=[],P=0;return w(b,Y,"","",function(ln){return D.call(I,ln,P++)}),Y}function F(b){if(b._status===-1){var D=b._result;D=D(),D.then(function(I){(b._status===0||b._status===-1)&&(b._status=1,b._result=I)},function(I){(b._status===0||b._status===-1)&&(b._status=2,b._result=I)}),b._status===-1&&(b._status=0,b._result=D)}if(b._status===1)return b._result.default;throw b._result}var gn=typeof reportError=="function"?reportError:function(b){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var D=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof b=="object"&&b!==null&&typeof b.message=="string"?String(b.message):String(b),error:b});if(!window.dispatchEvent(D))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",b);return}console.error(b)},Cn={map:B,forEach:function(b,D,I){B(b,function(){D.apply(this,arguments)},I)},count:function(b){var D=0;return B(b,function(){D++}),D},toArray:function(b){return B(b,function(D){return D})||[]},only:function(b){if(!Wn(b))throw Error("React.Children.only expected to receive a single React element child.");return b}};return W.Activity=E,W.Children=Cn,W.Component=Q,W.Fragment=d,W.Profiler=h,W.PureComponent=q,W.StrictMode=u,W.Suspense=y,W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=$,W.__COMPILER_RUNTIME={__proto__:null,c:function(b){return $.H.useMemoCache(b)}},W.cache=function(b){return function(){return b.apply(null,arguments)}},W.cacheSignal=function(){return null},W.cloneElement=function(b,D,I){if(b==null)throw Error("The argument must be a React element, but you passed "+b+".");var Y=Z({},b.props),P=b.key;if(D!=null)for(ln in D.key!==void 0&&(P=""+D.key),D)!Hn.call(D,ln)||ln==="key"||ln==="__self"||ln==="__source"||ln==="ref"&&D.ref===void 0||(Y[ln]=D[ln]);var ln=arguments.length-2;if(ln===1)Y.children=I;else if(1<ln){for(var pn=Array(ln),Pn=0;Pn<ln;Pn++)pn[Pn]=arguments[Pn+2];Y.children=pn}return Yn(b.type,P,Y)},W.createContext=function(b){return b={$$typeof:g,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null},b.Provider=b,b.Consumer={$$typeof:f,_context:b},b},W.createElement=function(b,D,I){var Y,P={},ln=null;if(D!=null)for(Y in D.key!==void 0&&(ln=""+D.key),D)Hn.call(D,Y)&&Y!=="key"&&Y!=="__self"&&Y!=="__source"&&(P[Y]=D[Y]);var pn=arguments.length-2;if(pn===1)P.children=I;else if(1<pn){for(var Pn=Array(pn),zn=0;zn<pn;zn++)Pn[zn]=arguments[zn+2];P.children=Pn}if(b&&b.defaultProps)for(Y in pn=b.defaultProps,pn)P[Y]===void 0&&(P[Y]=pn[Y]);return Yn(b,ln,P)},W.createRef=function(){return{current:null}},W.forwardRef=function(b){return{$$typeof:M,render:b}},W.isValidElement=Wn,W.lazy=function(b){return{$$typeof:_,_payload:{_status:-1,_result:b},_init:F}},W.memo=function(b,D){return{$$typeof:v,type:b,compare:D===void 0?null:D}},W.startTransition=function(b){var D=$.T,I={};$.T=I;try{var Y=b(),P=$.S;P!==null&&P(I,Y),typeof Y=="object"&&Y!==null&&typeof Y.then=="function"&&Y.then(wn,gn)}catch(ln){gn(ln)}finally{D!==null&&I.types!==null&&(D.types=I.types),$.T=D}},W.unstable_useCacheRefresh=function(){return $.H.useCacheRefresh()},W.use=function(b){return $.H.use(b)},W.useActionState=function(b,D,I){return $.H.useActionState(b,D,I)},W.useCallback=function(b,D){return $.H.useCallback(b,D)},W.useContext=function(b){return $.H.useContext(b)},W.useDebugValue=function(){},W.useDeferredValue=function(b,D){return $.H.useDeferredValue(b,D)},W.useEffect=function(b,D){return $.H.useEffect(b,D)},W.useEffectEvent=function(b){return $.H.useEffectEvent(b)},W.useId=function(){return $.H.useId()},W.useImperativeHandle=function(b,D,I){return $.H.useImperativeHandle(b,D,I)},W.useInsertionEffect=function(b,D){return $.H.useInsertionEffect(b,D)},W.useLayoutEffect=function(b,D){return $.H.useLayoutEffect(b,D)},W.useMemo=function(b,D){return $.H.useMemo(b,D)},W.useOptimistic=function(b,D){return $.H.useOptimistic(b,D)},W.useReducer=function(b,D,I){return $.H.useReducer(b,D,I)},W.useRef=function(b){return $.H.useRef(b)},W.useState=function(b){return $.H.useState(b)},W.useSyncExternalStore=function(b,D,I){return $.H.useSyncExternalStore(b,D,I)},W.useTransition=function(){return $.H.useTransition()},W.version="19.2.1",W}var ef;function Yo(){return ef||(ef=1,Lo.exports=pv()),Lo.exports}var A=Yo();const vv=yf(A);var Do={exports:{}},Ri={},Ro={exports:{}},Uo={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tf;function hv(){return tf||(tf=1,(function(r){function m(w,B){var F=w.length;w.push(B);n:for(;0<F;){var gn=F-1>>>1,Cn=w[gn];if(0<h(Cn,B))w[gn]=B,w[F]=Cn,F=gn;else break n}}function d(w){return w.length===0?null:w[0]}function u(w){if(w.length===0)return null;var B=w[0],F=w.pop();if(F!==B){w[0]=F;n:for(var gn=0,Cn=w.length,b=Cn>>>1;gn<b;){var D=2*(gn+1)-1,I=w[D],Y=D+1,P=w[Y];if(0>h(I,F))Y<Cn&&0>h(P,I)?(w[gn]=P,w[Y]=F,gn=Y):(w[gn]=I,w[D]=F,gn=D);else if(Y<Cn&&0>h(P,F))w[gn]=P,w[Y]=F,gn=Y;else break n}}return B}function h(w,B){var F=w.sortIndex-B.sortIndex;return F!==0?F:w.id-B.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;r.unstable_now=function(){return f.now()}}else{var g=Date,M=g.now();r.unstable_now=function(){return g.now()-M}}var y=[],v=[],_=1,E=null,U=3,R=!1,k=!1,Z=!1,H=!1,Q=typeof setTimeout=="function"?setTimeout:null,en=typeof clearTimeout=="function"?clearTimeout:null,q=typeof setImmediate<"u"?setImmediate:null;function J(w){for(var B=d(v);B!==null;){if(B.callback===null)u(v);else if(B.startTime<=w)u(v),B.sortIndex=B.expirationTime,m(y,B);else break;B=d(v)}}function jn(w){if(Z=!1,J(w),!k)if(d(y)!==null)k=!0,wn||(wn=!0,Qn());else{var B=d(v);B!==null&&_e(jn,B.startTime-w)}}var wn=!1,$=-1,Hn=5,Yn=-1;function Fn(){return H?!0:!(r.unstable_now()-Yn<Hn)}function Wn(){if(H=!1,wn){var w=r.unstable_now();Yn=w;var B=!0;try{n:{k=!1,Z&&(Z=!1,en($),$=-1),R=!0;var F=U;try{e:{for(J(w),E=d(y);E!==null&&!(E.expirationTime>w&&Fn());){var gn=E.callback;if(typeof gn=="function"){E.callback=null,U=E.priorityLevel;var Cn=gn(E.expirationTime<=w);if(w=r.unstable_now(),typeof Cn=="function"){E.callback=Cn,J(w),B=!0;break e}E===d(y)&&u(y),J(w)}else u(y);E=d(y)}if(E!==null)B=!0;else{var b=d(v);b!==null&&_e(jn,b.startTime-w),B=!1}}break n}finally{E=null,U=F,R=!1}B=void 0}}finally{B?Qn():wn=!1}}}var Qn;if(typeof q=="function")Qn=function(){q(Wn)};else if(typeof MessageChannel<"u"){var Dt=new MessageChannel,Be=Dt.port2;Dt.port1.onmessage=Wn,Qn=function(){Be.postMessage(null)}}else Qn=function(){Q(Wn,0)};function _e(w,B){$=Q(function(){w(r.unstable_now())},B)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(w){w.callback=null},r.unstable_forceFrameRate=function(w){0>w||125<w?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Hn=0<w?Math.floor(1e3/w):5},r.unstable_getCurrentPriorityLevel=function(){return U},r.unstable_next=function(w){switch(U){case 1:case 2:case 3:var B=3;break;default:B=U}var F=U;U=B;try{return w()}finally{U=F}},r.unstable_requestPaint=function(){H=!0},r.unstable_runWithPriority=function(w,B){switch(w){case 1:case 2:case 3:case 4:case 5:break;default:w=3}var F=U;U=w;try{return B()}finally{U=F}},r.unstable_scheduleCallback=function(w,B,F){var gn=r.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?gn+F:gn):F=gn,w){case 1:var Cn=-1;break;case 2:Cn=250;break;case 5:Cn=1073741823;break;case 4:Cn=1e4;break;default:Cn=5e3}return Cn=F+Cn,w={id:_++,callback:B,priorityLevel:w,startTime:F,expirationTime:Cn,sortIndex:-1},F>gn?(w.sortIndex=F,m(v,w),d(y)===null&&w===d(v)&&(Z?(en($),$=-1):Z=!0,_e(jn,F-gn))):(w.sortIndex=Cn,m(y,w),k||R||(k=!0,wn||(wn=!0,Qn()))),w},r.unstable_shouldYield=Fn,r.unstable_wrapCallback=function(w){var B=U;return function(){var F=U;U=B;try{return w.apply(this,arguments)}finally{U=F}}}})(Uo)),Uo}var af;function gv(){return af||(af=1,Ro.exports=hv()),Ro.exports}var qo={exports:{}},$n={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lf;function xv(){if(lf)return $n;lf=1;var r=Yo();function m(y){var v="https://react.dev/errors/"+y;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)v+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+y+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var u={d:{f:d,r:function(){throw Error(m(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},h=Symbol.for("react.portal");function f(y,v,_){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:h,key:E==null?null:""+E,children:y,containerInfo:v,implementation:_}}var g=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function M(y,v){if(y==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return $n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,$n.createPortal=function(y,v){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(m(299));return f(y,v,null,_)},$n.flushSync=function(y){var v=g.T,_=u.p;try{if(g.T=null,u.p=2,y)return y()}finally{g.T=v,u.p=_,u.d.f()}},$n.preconnect=function(y,v){typeof y=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,u.d.C(y,v))},$n.prefetchDNS=function(y){typeof y=="string"&&u.d.D(y)},$n.preinit=function(y,v){if(typeof y=="string"&&v&&typeof v.as=="string"){var _=v.as,E=M(_,v.crossOrigin),U=typeof v.integrity=="string"?v.integrity:void 0,R=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;_==="style"?u.d.S(y,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:E,integrity:U,fetchPriority:R}):_==="script"&&u.d.X(y,{crossOrigin:E,integrity:U,fetchPriority:R,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},$n.preinitModule=function(y,v){if(typeof y=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var _=M(v.as,v.crossOrigin);u.d.M(y,{crossOrigin:_,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&u.d.M(y)},$n.preload=function(y,v){if(typeof y=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var _=v.as,E=M(_,v.crossOrigin);u.d.L(y,_,{crossOrigin:E,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},$n.preloadModule=function(y,v){if(typeof y=="string")if(v){var _=M(v.as,v.crossOrigin);u.d.m(y,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:_,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else u.d.m(y)},$n.requestFormReset=function(y){u.d.r(y)},$n.unstable_batchedUpdates=function(y,v){return y(v)},$n.useFormState=function(y,v,_){return g.H.useFormState(y,v,_)},$n.useFormStatus=function(){return g.H.useHostTransitionStatus()},$n.version="19.2.1",$n}var sf;function bv(){if(sf)return qo.exports;sf=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(m){console.error(m)}}return r(),qo.exports=xv(),qo.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rf;function yv(){if(rf)return Ri;rf=1;var r=gv(),m=Yo(),d=bv();function u(n){var e="https://react.dev/errors/"+n;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function f(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,(e.flags&4098)!==0&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function g(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function M(n){if(n.tag===31){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function y(n){if(f(n)!==n)throw Error(u(188))}function v(n){var e=n.alternate;if(!e){if(e=f(n),e===null)throw Error(u(188));return e!==n?null:n}for(var t=n,a=e;;){var i=t.return;if(i===null)break;var l=i.alternate;if(l===null){if(a=i.return,a!==null){t=a;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===t)return y(i),n;if(l===a)return y(i),e;l=l.sibling}throw Error(u(188))}if(t.return!==a.return)t=i,a=l;else{for(var s=!1,c=i.child;c;){if(c===t){s=!0,t=i,a=l;break}if(c===a){s=!0,a=i,t=l;break}c=c.sibling}if(!s){for(c=l.child;c;){if(c===t){s=!0,t=l,a=i;break}if(c===a){s=!0,a=l,t=i;break}c=c.sibling}if(!s)throw Error(u(189))}}if(t.alternate!==a)throw Error(u(190))}if(t.tag!==3)throw Error(u(188));return t.stateNode.current===t?n:e}function _(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n;for(n=n.child;n!==null;){if(e=_(n),e!==null)return e;n=n.sibling}return null}var E=Object.assign,U=Symbol.for("react.element"),R=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),Z=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),Q=Symbol.for("react.profiler"),en=Symbol.for("react.consumer"),q=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),jn=Symbol.for("react.suspense"),wn=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),Hn=Symbol.for("react.lazy"),Yn=Symbol.for("react.activity"),Fn=Symbol.for("react.memo_cache_sentinel"),Wn=Symbol.iterator;function Qn(n){return n===null||typeof n!="object"?null:(n=Wn&&n[Wn]||n["@@iterator"],typeof n=="function"?n:null)}var Dt=Symbol.for("react.client.reference");function Be(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===Dt?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Z:return"Fragment";case Q:return"Profiler";case H:return"StrictMode";case jn:return"Suspense";case wn:return"SuspenseList";case Yn:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case k:return"Portal";case q:return n.displayName||"Context";case en:return(n._context.displayName||"Context")+".Consumer";case J:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case $:return e=n.displayName||null,e!==null?e:Be(n.type)||"Memo";case Hn:e=n._payload,n=n._init;try{return Be(n(e))}catch{}}return null}var _e=Array.isArray,w=m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},gn=[],Cn=-1;function b(n){return{current:n}}function D(n){0>Cn||(n.current=gn[Cn],gn[Cn]=null,Cn--)}function I(n,e){Cn++,gn[Cn]=n.current,n.current=e}var Y=b(null),P=b(null),ln=b(null),pn=b(null);function Pn(n,e){switch(I(ln,e),I(P,n),I(Y,null),e.nodeType){case 9:case 11:n=(n=e.documentElement)&&(n=n.namespaceURI)?Sm(n):0;break;default:if(n=e.tagName,e=e.namespaceURI)e=Sm(e),n=Cm(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}D(Y),I(Y,n)}function zn(){D(Y),D(P),D(ln)}function Ga(n){n.memoizedState!==null&&I(pn,n);var e=Y.current,t=Cm(e,n.type);e!==t&&(I(P,n),I(Y,t))}function ki(n){P.current===n&&(D(Y),D(P)),pn.current===n&&(D(pn),Ti._currentValue=F)}var fs,$o;function Rt(n){if(fs===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);fs=e&&e[1]||"",$o=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+fs+n+$o}var ps=!1;function vs(n,e){if(!n||ps)return"";ps=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var L=function(){throw Error()};if(Object.defineProperty(L.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(L,[])}catch(O){var j=O}Reflect.construct(n,[],L)}else{try{L.call()}catch(O){j=O}n.call(L.prototype)}}else{try{throw Error()}catch(O){j=O}(L=n())&&typeof L.catch=="function"&&L.catch(function(){})}}catch(O){if(O&&j&&typeof O.stack=="string")return[O.stack,j.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=a.DetermineComponentFrameRoot(),s=l[0],c=l[1];if(s&&c){var p=s.split(`
`),N=c.split(`
`);for(i=a=0;a<p.length&&!p[a].includes("DetermineComponentFrameRoot");)a++;for(;i<N.length&&!N[i].includes("DetermineComponentFrameRoot");)i++;if(a===p.length||i===N.length)for(a=p.length-1,i=N.length-1;1<=a&&0<=i&&p[a]!==N[i];)i--;for(;1<=a&&0<=i;a--,i--)if(p[a]!==N[i]){if(a!==1||i!==1)do if(a--,i--,0>i||p[a]!==N[i]){var T=`
`+p[a].replace(" at new "," at ");return n.displayName&&T.includes("<anonymous>")&&(T=T.replace("<anonymous>",n.displayName)),T}while(1<=a&&0<=i);break}}}finally{ps=!1,Error.prepareStackTrace=t}return(t=n?n.displayName||n.name:"")?Rt(t):""}function Yf(n,e){switch(n.tag){case 26:case 27:case 5:return Rt(n.type);case 16:return Rt("Lazy");case 13:return n.child!==e&&e!==null?Rt("Suspense Fallback"):Rt("Suspense");case 19:return Rt("SuspenseList");case 0:case 15:return vs(n.type,!1);case 11:return vs(n.type.render,!1);case 1:return vs(n.type,!0);case 31:return Rt("Activity");default:return""}}function Wo(n){try{var e="",t=null;do e+=Yf(n,t),t=n,n=n.return;while(n);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var hs=Object.prototype.hasOwnProperty,gs=r.unstable_scheduleCallback,xs=r.unstable_cancelCallback,Qf=r.unstable_shouldYield,Vf=r.unstable_requestPaint,oe=r.unstable_now,Xf=r.unstable_getCurrentPriorityLevel,Po=r.unstable_ImmediatePriority,nu=r.unstable_UserBlockingPriority,Yi=r.unstable_NormalPriority,Zf=r.unstable_LowPriority,eu=r.unstable_IdlePriority,Kf=r.log,Jf=r.unstable_setDisableYieldValue,ka=null,ue=null;function rt(n){if(typeof Kf=="function"&&Jf(n),ue&&typeof ue.setStrictMode=="function")try{ue.setStrictMode(ka,n)}catch{}}var ce=Math.clz32?Math.clz32:Wf,Ff=Math.log,$f=Math.LN2;function Wf(n){return n>>>=0,n===0?32:31-(Ff(n)/$f|0)|0}var Qi=256,Vi=262144,Xi=4194304;function Ut(n){var e=n&42;if(e!==0)return e;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&261888;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Zi(n,e,t){var a=n.pendingLanes;if(a===0)return 0;var i=0,l=n.suspendedLanes,s=n.pingedLanes;n=n.warmLanes;var c=a&134217727;return c!==0?(a=c&~l,a!==0?i=Ut(a):(s&=c,s!==0?i=Ut(s):t||(t=c&~n,t!==0&&(i=Ut(t))))):(c=a&~l,c!==0?i=Ut(c):s!==0?i=Ut(s):t||(t=a&~n,t!==0&&(i=Ut(t)))),i===0?0:e!==0&&e!==i&&(e&l)===0&&(l=i&-i,t=e&-e,l>=t||l===32&&(t&4194048)!==0)?e:i}function Ya(n,e){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&e)===0}function Pf(n,e){switch(n){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tu(){var n=Xi;return Xi<<=1,(Xi&62914560)===0&&(Xi=4194304),n}function bs(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Qa(n,e){n.pendingLanes|=e,e!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function np(n,e,t,a,i,l){var s=n.pendingLanes;n.pendingLanes=t,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=t,n.entangledLanes&=t,n.errorRecoveryDisabledLanes&=t,n.shellSuspendCounter=0;var c=n.entanglements,p=n.expirationTimes,N=n.hiddenUpdates;for(t=s&~t;0<t;){var T=31-ce(t),L=1<<T;c[T]=0,p[T]=-1;var j=N[T];if(j!==null)for(N[T]=null,T=0;T<j.length;T++){var O=j[T];O!==null&&(O.lane&=-536870913)}t&=~L}a!==0&&au(n,a,0),l!==0&&i===0&&n.tag!==0&&(n.suspendedLanes|=l&~(s&~e))}function au(n,e,t){n.pendingLanes|=e,n.suspendedLanes&=~e;var a=31-ce(e);n.entangledLanes|=e,n.entanglements[a]=n.entanglements[a]|1073741824|t&261930}function iu(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var a=31-ce(t),i=1<<a;i&e|n[a]&e&&(n[a]|=e),t&=~i}}function lu(n,e){var t=e&-e;return t=(t&42)!==0?1:ys(t),(t&(n.suspendedLanes|e))!==0?0:t}function ys(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Ss(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function su(){var n=B.p;return n!==0?n:(n=window.event,n===void 0?32:Vm(n.type))}function ru(n,e){var t=B.p;try{return B.p=n,e()}finally{B.p=t}}var ot=Math.random().toString(36).slice(2),Vn="__reactFiber$"+ot,ee="__reactProps$"+ot,ea="__reactContainer$"+ot,Cs="__reactEvents$"+ot,ep="__reactListeners$"+ot,tp="__reactHandles$"+ot,ou="__reactResources$"+ot,Va="__reactMarker$"+ot;function Ns(n){delete n[Vn],delete n[ee],delete n[Cs],delete n[ep],delete n[tp]}function ta(n){var e=n[Vn];if(e)return e;for(var t=n.parentNode;t;){if(e=t[ea]||t[Vn]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=_m(n);n!==null;){if(t=n[Vn])return t;n=_m(n)}return e}n=t,t=n.parentNode}return null}function aa(n){if(n=n[Vn]||n[ea]){var e=n.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return n}return null}function Xa(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n.stateNode;throw Error(u(33))}function ia(n){var e=n[ou];return e||(e=n[ou]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Gn(n){n[Va]=!0}var uu=new Set,cu={};function qt(n,e){la(n,e),la(n+"Capture",e)}function la(n,e){for(cu[n]=e,n=0;n<e.length;n++)uu.add(e[n])}var ap=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),du={},mu={};function ip(n){return hs.call(mu,n)?!0:hs.call(du,n)?!1:ap.test(n)?mu[n]=!0:(du[n]=!0,!1)}function Ki(n,e,t){if(ip(e))if(t===null)n.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":n.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){n.removeAttribute(e);return}}n.setAttribute(e,""+t)}}function Ji(n,e,t){if(t===null)n.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(e);return}n.setAttribute(e,""+t)}}function Ie(n,e,t,a){if(a===null)n.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(t);return}n.setAttributeNS(e,t,""+a)}}function xe(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function fu(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function lp(n,e,t){var a=Object.getOwnPropertyDescriptor(n.constructor.prototype,e);if(!n.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,l=a.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){t=""+s,l.call(this,s)}}),Object.defineProperty(n,e,{enumerable:a.enumerable}),{getValue:function(){return t},setValue:function(s){t=""+s},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function js(n){if(!n._valueTracker){var e=fu(n)?"checked":"value";n._valueTracker=lp(n,e,""+n[e])}}function pu(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),a="";return n&&(a=fu(n)?n.checked?"true":"false":n.value),n=a,n!==t?(e.setValue(n),!0):!1}function Fi(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var sp=/[\n"\\]/g;function be(n){return n.replace(sp,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Es(n,e,t,a,i,l,s,c){n.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?n.type=s:n.removeAttribute("type"),e!=null?s==="number"?(e===0&&n.value===""||n.value!=e)&&(n.value=""+xe(e)):n.value!==""+xe(e)&&(n.value=""+xe(e)):s!=="submit"&&s!=="reset"||n.removeAttribute("value"),e!=null?Ms(n,s,xe(e)):t!=null?Ms(n,s,xe(t)):a!=null&&n.removeAttribute("value"),i==null&&l!=null&&(n.defaultChecked=!!l),i!=null&&(n.checked=i&&typeof i!="function"&&typeof i!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?n.name=""+xe(c):n.removeAttribute("name")}function vu(n,e,t,a,i,l,s,c){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(n.type=l),e!=null||t!=null){if(!(l!=="submit"&&l!=="reset"||e!=null)){js(n);return}t=t!=null?""+xe(t):"",e=e!=null?""+xe(e):t,c||e===n.value||(n.value=e),n.defaultValue=e}a=a??i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,n.checked=c?n.checked:!!a,n.defaultChecked=!!a,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(n.name=s),js(n)}function Ms(n,e,t){e==="number"&&Fi(n.ownerDocument)===n||n.defaultValue===""+t||(n.defaultValue=""+t)}function sa(n,e,t,a){if(n=n.options,e){e={};for(var i=0;i<t.length;i++)e["$"+t[i]]=!0;for(t=0;t<n.length;t++)i=e.hasOwnProperty("$"+n[t].value),n[t].selected!==i&&(n[t].selected=i),i&&a&&(n[t].defaultSelected=!0)}else{for(t=""+xe(t),e=null,i=0;i<n.length;i++){if(n[i].value===t){n[i].selected=!0,a&&(n[i].defaultSelected=!0);return}e!==null||n[i].disabled||(e=n[i])}e!==null&&(e.selected=!0)}}function hu(n,e,t){if(e!=null&&(e=""+xe(e),e!==n.value&&(n.value=e),t==null)){n.defaultValue!==e&&(n.defaultValue=e);return}n.defaultValue=t!=null?""+xe(t):""}function gu(n,e,t,a){if(e==null){if(a!=null){if(t!=null)throw Error(u(92));if(_e(a)){if(1<a.length)throw Error(u(93));a=a[0]}t=a}t==null&&(t=""),e=t}t=xe(e),n.defaultValue=t,a=n.textContent,a===t&&a!==""&&a!==null&&(n.value=a),js(n)}function ra(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var rp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function xu(n,e,t){var a=e.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?a?n.setProperty(e,""):e==="float"?n.cssFloat="":n[e]="":a?n.setProperty(e,t):typeof t!="number"||t===0||rp.has(e)?e==="float"?n.cssFloat=t:n[e]=(""+t).trim():n[e]=t+"px"}function bu(n,e,t){if(e!=null&&typeof e!="object")throw Error(u(62));if(n=n.style,t!=null){for(var a in t)!t.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?n.setProperty(a,""):a==="float"?n.cssFloat="":n[a]="");for(var i in e)a=e[i],e.hasOwnProperty(i)&&t[i]!==a&&xu(n,i,a)}else for(var l in e)e.hasOwnProperty(l)&&xu(n,l,e[l])}function Os(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var op=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),up=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $i(n){return up.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function He(){}var As=null;function _s(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var oa=null,ua=null;function yu(n){var e=aa(n);if(e&&(n=e.stateNode)){var t=n[ee]||null;n:switch(n=e.stateNode,e.type){case"input":if(Es(n,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+be(""+e)+'"][type="radio"]'),e=0;e<t.length;e++){var a=t[e];if(a!==n&&a.form===n.form){var i=a[ee]||null;if(!i)throw Error(u(90));Es(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(e=0;e<t.length;e++)a=t[e],a.form===n.form&&pu(a)}break n;case"textarea":hu(n,t.value,t.defaultValue);break n;case"select":e=t.value,e!=null&&sa(n,!!t.multiple,e,!1)}}}var Ts=!1;function Su(n,e,t){if(Ts)return n(e,t);Ts=!0;try{var a=n(e);return a}finally{if(Ts=!1,(oa!==null||ua!==null)&&(Bl(),oa&&(e=oa,n=ua,ua=oa=null,yu(e),n)))for(e=0;e<n.length;e++)yu(n[e])}}function Za(n,e){var t=n.stateNode;if(t===null)return null;var a=t[ee]||null;if(a===null)return null;t=a[e];n:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(n=n.type,a=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!a;break n;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(u(231,e,typeof t));return t}var Ge=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ws=!1;if(Ge)try{var Ka={};Object.defineProperty(Ka,"passive",{get:function(){ws=!0}}),window.addEventListener("test",Ka,Ka),window.removeEventListener("test",Ka,Ka)}catch{ws=!1}var ut=null,zs=null,Wi=null;function Cu(){if(Wi)return Wi;var n,e=zs,t=e.length,a,i="value"in ut?ut.value:ut.textContent,l=i.length;for(n=0;n<t&&e[n]===i[n];n++);var s=t-n;for(a=1;a<=s&&e[t-a]===i[l-a];a++);return Wi=i.slice(n,1<a?1-a:void 0)}function Pi(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function nl(){return!0}function Nu(){return!1}function te(n){function e(t,a,i,l,s){this._reactName=t,this._targetInst=i,this.type=a,this.nativeEvent=l,this.target=s,this.currentTarget=null;for(var c in n)n.hasOwnProperty(c)&&(t=n[c],this[c]=t?t(l):l[c]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?nl:Nu,this.isPropagationStopped=Nu,this}return E(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=nl)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=nl)},persist:function(){},isPersistent:nl}),e}var Bt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},el=te(Bt),Ja=E({},Bt,{view:0,detail:0}),cp=te(Ja),Ls,Ds,Fa,tl=E({},Ja,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Us,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Fa&&(Fa&&n.type==="mousemove"?(Ls=n.screenX-Fa.screenX,Ds=n.screenY-Fa.screenY):Ds=Ls=0,Fa=n),Ls)},movementY:function(n){return"movementY"in n?n.movementY:Ds}}),ju=te(tl),dp=E({},tl,{dataTransfer:0}),mp=te(dp),fp=E({},Ja,{relatedTarget:0}),Rs=te(fp),pp=E({},Bt,{animationName:0,elapsedTime:0,pseudoElement:0}),vp=te(pp),hp=E({},Bt,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),gp=te(hp),xp=E({},Bt,{data:0}),Eu=te(xp),bp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cp(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=Sp[n])?!!e[n]:!1}function Us(){return Cp}var Np=E({},Ja,{key:function(n){if(n.key){var e=bp[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Pi(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?yp[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Us,charCode:function(n){return n.type==="keypress"?Pi(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Pi(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),jp=te(Np),Ep=E({},tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mu=te(Ep),Mp=E({},Ja,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Us}),Op=te(Mp),Ap=E({},Bt,{propertyName:0,elapsedTime:0,pseudoElement:0}),_p=te(Ap),Tp=E({},tl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),wp=te(Tp),zp=E({},Bt,{newState:0,oldState:0}),Lp=te(zp),Dp=[9,13,27,32],qs=Ge&&"CompositionEvent"in window,$a=null;Ge&&"documentMode"in document&&($a=document.documentMode);var Rp=Ge&&"TextEvent"in window&&!$a,Ou=Ge&&(!qs||$a&&8<$a&&11>=$a),Au=" ",_u=!1;function Tu(n,e){switch(n){case"keyup":return Dp.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wu(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ca=!1;function Up(n,e){switch(n){case"compositionend":return wu(e);case"keypress":return e.which!==32?null:(_u=!0,Au);case"textInput":return n=e.data,n===Au&&_u?null:n;default:return null}}function qp(n,e){if(ca)return n==="compositionend"||!qs&&Tu(n,e)?(n=Cu(),Wi=zs=ut=null,ca=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ou&&e.locale!=="ko"?null:e.data;default:return null}}var Bp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zu(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!Bp[n.type]:e==="textarea"}function Lu(n,e,t,a){oa?ua?ua.push(a):ua=[a]:oa=a,e=Vl(e,"onChange"),0<e.length&&(t=new el("onChange","change",null,t,a),n.push({event:t,listeners:e}))}var Wa=null,Pa=null;function Ip(n){vm(n,0)}function al(n){var e=Xa(n);if(pu(e))return n}function Du(n,e){if(n==="change")return e}var Ru=!1;if(Ge){var Bs;if(Ge){var Is="oninput"in document;if(!Is){var Uu=document.createElement("div");Uu.setAttribute("oninput","return;"),Is=typeof Uu.oninput=="function"}Bs=Is}else Bs=!1;Ru=Bs&&(!document.documentMode||9<document.documentMode)}function qu(){Wa&&(Wa.detachEvent("onpropertychange",Bu),Pa=Wa=null)}function Bu(n){if(n.propertyName==="value"&&al(Pa)){var e=[];Lu(e,Pa,n,_s(n)),Su(Ip,e)}}function Hp(n,e,t){n==="focusin"?(qu(),Wa=e,Pa=t,Wa.attachEvent("onpropertychange",Bu)):n==="focusout"&&qu()}function Gp(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return al(Pa)}function kp(n,e){if(n==="click")return al(e)}function Yp(n,e){if(n==="input"||n==="change")return al(e)}function Qp(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var de=typeof Object.is=="function"?Object.is:Qp;function ni(n,e){if(de(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),a=Object.keys(e);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var i=t[a];if(!hs.call(e,i)||!de(n[i],e[i]))return!1}return!0}function Iu(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Hu(n,e){var t=Iu(n);n=0;for(var a;t;){if(t.nodeType===3){if(a=n+t.textContent.length,n<=e&&a>=e)return{node:t,offset:e-n};n=a}n:{for(;t;){if(t.nextSibling){t=t.nextSibling;break n}t=t.parentNode}t=void 0}t=Iu(t)}}function Gu(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Gu(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function ku(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var e=Fi(n.document);e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Fi(n.document)}return e}function Hs(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}var Vp=Ge&&"documentMode"in document&&11>=document.documentMode,da=null,Gs=null,ei=null,ks=!1;function Yu(n,e,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ks||da==null||da!==Fi(a)||(a=da,"selectionStart"in a&&Hs(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),ei&&ni(ei,a)||(ei=a,a=Vl(Gs,"onSelect"),0<a.length&&(e=new el("onSelect","select",null,e,t),n.push({event:e,listeners:a}),e.target=da)))}function It(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var ma={animationend:It("Animation","AnimationEnd"),animationiteration:It("Animation","AnimationIteration"),animationstart:It("Animation","AnimationStart"),transitionrun:It("Transition","TransitionRun"),transitionstart:It("Transition","TransitionStart"),transitioncancel:It("Transition","TransitionCancel"),transitionend:It("Transition","TransitionEnd")},Ys={},Qu={};Ge&&(Qu=document.createElement("div").style,"AnimationEvent"in window||(delete ma.animationend.animation,delete ma.animationiteration.animation,delete ma.animationstart.animation),"TransitionEvent"in window||delete ma.transitionend.transition);function Ht(n){if(Ys[n])return Ys[n];if(!ma[n])return n;var e=ma[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Qu)return Ys[n]=e[t];return n}var Vu=Ht("animationend"),Xu=Ht("animationiteration"),Zu=Ht("animationstart"),Xp=Ht("transitionrun"),Zp=Ht("transitionstart"),Kp=Ht("transitioncancel"),Ku=Ht("transitionend"),Ju=new Map,Qs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Qs.push("scrollEnd");function Te(n,e){Ju.set(n,e),qt(e,[n])}var il=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},ye=[],fa=0,Vs=0;function ll(){for(var n=fa,e=Vs=fa=0;e<n;){var t=ye[e];ye[e++]=null;var a=ye[e];ye[e++]=null;var i=ye[e];ye[e++]=null;var l=ye[e];if(ye[e++]=null,a!==null&&i!==null){var s=a.pending;s===null?i.next=i:(i.next=s.next,s.next=i),a.pending=i}l!==0&&Fu(t,i,l)}}function sl(n,e,t,a){ye[fa++]=n,ye[fa++]=e,ye[fa++]=t,ye[fa++]=a,Vs|=a,n.lanes|=a,n=n.alternate,n!==null&&(n.lanes|=a)}function Xs(n,e,t,a){return sl(n,e,t,a),rl(n)}function Gt(n,e){return sl(n,null,null,e),rl(n)}function Fu(n,e,t){n.lanes|=t;var a=n.alternate;a!==null&&(a.lanes|=t);for(var i=!1,l=n.return;l!==null;)l.childLanes|=t,a=l.alternate,a!==null&&(a.childLanes|=t),l.tag===22&&(n=l.stateNode,n===null||n._visibility&1||(i=!0)),n=l,l=l.return;return n.tag===3?(l=n.stateNode,i&&e!==null&&(i=31-ce(t),n=l.hiddenUpdates,a=n[i],a===null?n[i]=[e]:a.push(e),e.lane=t|536870912),l):null}function rl(n){if(50<Ni)throw Ni=0,eo=null,Error(u(185));for(var e=n.return;e!==null;)n=e,e=n.return;return n.tag===3?n.stateNode:null}var pa={};function Jp(n,e,t,a){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function me(n,e,t,a){return new Jp(n,e,t,a)}function Zs(n){return n=n.prototype,!(!n||!n.isReactComponent)}function ke(n,e){var t=n.alternate;return t===null?(t=me(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&65011712,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t.refCleanup=n.refCleanup,t}function $u(n,e){n.flags&=65011714;var t=n.alternate;return t===null?(n.childLanes=0,n.lanes=e,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,n.type=t.type,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n}function ol(n,e,t,a,i,l){var s=0;if(a=n,typeof n=="function")Zs(n)&&(s=1);else if(typeof n=="string")s=nv(n,t,Y.current)?26:n==="html"||n==="head"||n==="body"?27:5;else n:switch(n){case Yn:return n=me(31,t,e,i),n.elementType=Yn,n.lanes=l,n;case Z:return kt(t.children,i,l,e);case H:s=8,i|=24;break;case Q:return n=me(12,t,e,i|2),n.elementType=Q,n.lanes=l,n;case jn:return n=me(13,t,e,i),n.elementType=jn,n.lanes=l,n;case wn:return n=me(19,t,e,i),n.elementType=wn,n.lanes=l,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case q:s=10;break n;case en:s=9;break n;case J:s=11;break n;case $:s=14;break n;case Hn:s=16,a=null;break n}s=29,t=Error(u(130,n===null?"null":typeof n,"")),a=null}return e=me(s,t,e,i),e.elementType=n,e.type=a,e.lanes=l,e}function kt(n,e,t,a){return n=me(7,n,a,e),n.lanes=t,n}function Ks(n,e,t){return n=me(6,n,null,e),n.lanes=t,n}function Wu(n){var e=me(18,null,null,0);return e.stateNode=n,e}function Js(n,e,t){return e=me(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}var Pu=new WeakMap;function Se(n,e){if(typeof n=="object"&&n!==null){var t=Pu.get(n);return t!==void 0?t:(e={value:n,source:e,stack:Wo(e)},Pu.set(n,e),e)}return{value:n,source:e,stack:Wo(e)}}var va=[],ha=0,ul=null,ti=0,Ce=[],Ne=0,ct=null,De=1,Re="";function Ye(n,e){va[ha++]=ti,va[ha++]=ul,ul=n,ti=e}function nc(n,e,t){Ce[Ne++]=De,Ce[Ne++]=Re,Ce[Ne++]=ct,ct=n;var a=De;n=Re;var i=32-ce(a)-1;a&=~(1<<i),t+=1;var l=32-ce(e)+i;if(30<l){var s=i-i%5;l=(a&(1<<s)-1).toString(32),a>>=s,i-=s,De=1<<32-ce(e)+i|t<<i|a,Re=l+n}else De=1<<l|t<<i|a,Re=n}function Fs(n){n.return!==null&&(Ye(n,1),nc(n,1,0))}function $s(n){for(;n===ul;)ul=va[--ha],va[ha]=null,ti=va[--ha],va[ha]=null;for(;n===ct;)ct=Ce[--Ne],Ce[Ne]=null,Re=Ce[--Ne],Ce[Ne]=null,De=Ce[--Ne],Ce[Ne]=null}function ec(n,e){Ce[Ne++]=De,Ce[Ne++]=Re,Ce[Ne++]=ct,De=e.id,Re=e.overflow,ct=n}var Xn=null,En=null,cn=!1,dt=null,je=!1,Ws=Error(u(519));function mt(n){var e=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ai(Se(e,n)),Ws}function tc(n){var e=n.stateNode,t=n.type,a=n.memoizedProps;switch(e[Vn]=n,e[ee]=a,t){case"dialog":rn("cancel",e),rn("close",e);break;case"iframe":case"object":case"embed":rn("load",e);break;case"video":case"audio":for(t=0;t<Ei.length;t++)rn(Ei[t],e);break;case"source":rn("error",e);break;case"img":case"image":case"link":rn("error",e),rn("load",e);break;case"details":rn("toggle",e);break;case"input":rn("invalid",e),vu(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":rn("invalid",e);break;case"textarea":rn("invalid",e),gu(e,a.value,a.defaultValue,a.children)}t=a.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||e.textContent===""+t||a.suppressHydrationWarning===!0||bm(e.textContent,t)?(a.popover!=null&&(rn("beforetoggle",e),rn("toggle",e)),a.onScroll!=null&&rn("scroll",e),a.onScrollEnd!=null&&rn("scrollend",e),a.onClick!=null&&(e.onclick=He),e=!0):e=!1,e||mt(n,!0)}function ac(n){for(Xn=n.return;Xn;)switch(Xn.tag){case 5:case 31:case 13:je=!1;return;case 27:case 3:je=!0;return;default:Xn=Xn.return}}function ga(n){if(n!==Xn)return!1;if(!cn)return ac(n),cn=!0,!1;var e=n.tag,t;if((t=e!==3&&e!==27)&&((t=e===5)&&(t=n.type,t=!(t!=="form"&&t!=="button")||go(n.type,n.memoizedProps)),t=!t),t&&En&&mt(n),ac(n),e===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(u(317));En=Am(n)}else if(e===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(u(317));En=Am(n)}else e===27?(e=En,Mt(n.type)?(n=Co,Co=null,En=n):En=e):En=Xn?Me(n.stateNode.nextSibling):null;return!0}function Yt(){En=Xn=null,cn=!1}function Ps(){var n=dt;return n!==null&&(se===null?se=n:se.push.apply(se,n),dt=null),n}function ai(n){dt===null?dt=[n]:dt.push(n)}var nr=b(null),Qt=null,Qe=null;function ft(n,e,t){I(nr,e._currentValue),e._currentValue=t}function Ve(n){n._currentValue=nr.current,D(nr)}function er(n,e,t){for(;n!==null;){var a=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),n===t)break;n=n.return}}function tr(n,e,t,a){var i=n.child;for(i!==null&&(i.return=n);i!==null;){var l=i.dependencies;if(l!==null){var s=i.child;l=l.firstContext;n:for(;l!==null;){var c=l;l=i;for(var p=0;p<e.length;p++)if(c.context===e[p]){l.lanes|=t,c=l.alternate,c!==null&&(c.lanes|=t),er(l.return,t,n),a||(s=null);break n}l=c.next}}else if(i.tag===18){if(s=i.return,s===null)throw Error(u(341));s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),er(s,t,n),s=null}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===n){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}}function xa(n,e,t,a){n=null;for(var i=e,l=!1;i!==null;){if(!l){if((i.flags&524288)!==0)l=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var s=i.alternate;if(s===null)throw Error(u(387));if(s=s.memoizedProps,s!==null){var c=i.type;de(i.pendingProps.value,s.value)||(n!==null?n.push(c):n=[c])}}else if(i===pn.current){if(s=i.alternate,s===null)throw Error(u(387));s.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(n!==null?n.push(Ti):n=[Ti])}i=i.return}n!==null&&tr(e,n,t,a),e.flags|=262144}function cl(n){for(n=n.firstContext;n!==null;){if(!de(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Vt(n){Qt=n,Qe=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Zn(n){return ic(Qt,n)}function dl(n,e){return Qt===null&&Vt(n),ic(n,e)}function ic(n,e){var t=e._currentValue;if(e={context:e,memoizedValue:t,next:null},Qe===null){if(n===null)throw Error(u(308));Qe=e,n.dependencies={lanes:0,firstContext:e},n.flags|=524288}else Qe=Qe.next=e;return t}var Fp=typeof AbortController<"u"?AbortController:function(){var n=[],e=this.signal={aborted:!1,addEventListener:function(t,a){n.push(a)}};this.abort=function(){e.aborted=!0,n.forEach(function(t){return t()})}},$p=r.unstable_scheduleCallback,Wp=r.unstable_NormalPriority,Rn={$$typeof:q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ar(){return{controller:new Fp,data:new Map,refCount:0}}function ii(n){n.refCount--,n.refCount===0&&$p(Wp,function(){n.controller.abort()})}var li=null,ir=0,ba=0,ya=null;function Pp(n,e){if(li===null){var t=li=[];ir=0,ba=ro(),ya={status:"pending",value:void 0,then:function(a){t.push(a)}}}return ir++,e.then(lc,lc),e}function lc(){if(--ir===0&&li!==null){ya!==null&&(ya.status="fulfilled");var n=li;li=null,ba=0,ya=null;for(var e=0;e<n.length;e++)(0,n[e])()}}function n0(n,e){var t=[],a={status:"pending",value:null,reason:null,then:function(i){t.push(i)}};return n.then(function(){a.status="fulfilled",a.value=e;for(var i=0;i<t.length;i++)(0,t[i])(e)},function(i){for(a.status="rejected",a.reason=i,i=0;i<t.length;i++)(0,t[i])(void 0)}),a}var sc=w.S;w.S=function(n,e){Yd=oe(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&Pp(n,e),sc!==null&&sc(n,e)};var Xt=b(null);function lr(){var n=Xt.current;return n!==null?n:Nn.pooledCache}function ml(n,e){e===null?I(Xt,Xt.current):I(Xt,e.pool)}function rc(){var n=lr();return n===null?null:{parent:Rn._currentValue,pool:n}}var Sa=Error(u(460)),sr=Error(u(474)),fl=Error(u(542)),pl={then:function(){}};function oc(n){return n=n.status,n==="fulfilled"||n==="rejected"}function uc(n,e,t){switch(t=n[t],t===void 0?n.push(e):t!==e&&(e.then(He,He),e=t),e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,dc(n),n;default:if(typeof e.status=="string")e.then(He,He);else{if(n=Nn,n!==null&&100<n.shellSuspendCounter)throw Error(u(482));n=e,n.status="pending",n.then(function(a){if(e.status==="pending"){var i=e;i.status="fulfilled",i.value=a}},function(a){if(e.status==="pending"){var i=e;i.status="rejected",i.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,dc(n),n}throw Kt=e,Sa}}function Zt(n){try{var e=n._init;return e(n._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(Kt=t,Sa):t}}var Kt=null;function cc(){if(Kt===null)throw Error(u(459));var n=Kt;return Kt=null,n}function dc(n){if(n===Sa||n===fl)throw Error(u(483))}var Ca=null,si=0;function vl(n){var e=si;return si+=1,Ca===null&&(Ca=[]),uc(Ca,n,e)}function ri(n,e){e=e.props.ref,n.ref=e!==void 0?e:null}function hl(n,e){throw e.$$typeof===U?Error(u(525)):(n=Object.prototype.toString.call(e),Error(u(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)))}function mc(n){function e(S,x){if(n){var C=S.deletions;C===null?(S.deletions=[x],S.flags|=16):C.push(x)}}function t(S,x){if(!n)return null;for(;x!==null;)e(S,x),x=x.sibling;return null}function a(S){for(var x=new Map;S!==null;)S.key!==null?x.set(S.key,S):x.set(S.index,S),S=S.sibling;return x}function i(S,x){return S=ke(S,x),S.index=0,S.sibling=null,S}function l(S,x,C){return S.index=C,n?(C=S.alternate,C!==null?(C=C.index,C<x?(S.flags|=67108866,x):C):(S.flags|=67108866,x)):(S.flags|=1048576,x)}function s(S){return n&&S.alternate===null&&(S.flags|=67108866),S}function c(S,x,C,z){return x===null||x.tag!==6?(x=Ks(C,S.mode,z),x.return=S,x):(x=i(x,C),x.return=S,x)}function p(S,x,C,z){var X=C.type;return X===Z?T(S,x,C.props.children,z,C.key):x!==null&&(x.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===Hn&&Zt(X)===x.type)?(x=i(x,C.props),ri(x,C),x.return=S,x):(x=ol(C.type,C.key,C.props,null,S.mode,z),ri(x,C),x.return=S,x)}function N(S,x,C,z){return x===null||x.tag!==4||x.stateNode.containerInfo!==C.containerInfo||x.stateNode.implementation!==C.implementation?(x=Js(C,S.mode,z),x.return=S,x):(x=i(x,C.children||[]),x.return=S,x)}function T(S,x,C,z,X){return x===null||x.tag!==7?(x=kt(C,S.mode,z,X),x.return=S,x):(x=i(x,C),x.return=S,x)}function L(S,x,C){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=Ks(""+x,S.mode,C),x.return=S,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case R:return C=ol(x.type,x.key,x.props,null,S.mode,C),ri(C,x),C.return=S,C;case k:return x=Js(x,S.mode,C),x.return=S,x;case Hn:return x=Zt(x),L(S,x,C)}if(_e(x)||Qn(x))return x=kt(x,S.mode,C,null),x.return=S,x;if(typeof x.then=="function")return L(S,vl(x),C);if(x.$$typeof===q)return L(S,dl(S,x),C);hl(S,x)}return null}function j(S,x,C,z){var X=x!==null?x.key:null;if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return X!==null?null:c(S,x,""+C,z);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case R:return C.key===X?p(S,x,C,z):null;case k:return C.key===X?N(S,x,C,z):null;case Hn:return C=Zt(C),j(S,x,C,z)}if(_e(C)||Qn(C))return X!==null?null:T(S,x,C,z,null);if(typeof C.then=="function")return j(S,x,vl(C),z);if(C.$$typeof===q)return j(S,x,dl(S,C),z);hl(S,C)}return null}function O(S,x,C,z,X){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return S=S.get(C)||null,c(x,S,""+z,X);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case R:return S=S.get(z.key===null?C:z.key)||null,p(x,S,z,X);case k:return S=S.get(z.key===null?C:z.key)||null,N(x,S,z,X);case Hn:return z=Zt(z),O(S,x,C,z,X)}if(_e(z)||Qn(z))return S=S.get(C)||null,T(x,S,z,X,null);if(typeof z.then=="function")return O(S,x,C,vl(z),X);if(z.$$typeof===q)return O(S,x,C,dl(x,z),X);hl(x,z)}return null}function G(S,x,C,z){for(var X=null,dn=null,V=x,tn=x=0,un=null;V!==null&&tn<C.length;tn++){V.index>tn?(un=V,V=null):un=V.sibling;var mn=j(S,V,C[tn],z);if(mn===null){V===null&&(V=un);break}n&&V&&mn.alternate===null&&e(S,V),x=l(mn,x,tn),dn===null?X=mn:dn.sibling=mn,dn=mn,V=un}if(tn===C.length)return t(S,V),cn&&Ye(S,tn),X;if(V===null){for(;tn<C.length;tn++)V=L(S,C[tn],z),V!==null&&(x=l(V,x,tn),dn===null?X=V:dn.sibling=V,dn=V);return cn&&Ye(S,tn),X}for(V=a(V);tn<C.length;tn++)un=O(V,S,tn,C[tn],z),un!==null&&(n&&un.alternate!==null&&V.delete(un.key===null?tn:un.key),x=l(un,x,tn),dn===null?X=un:dn.sibling=un,dn=un);return n&&V.forEach(function(wt){return e(S,wt)}),cn&&Ye(S,tn),X}function K(S,x,C,z){if(C==null)throw Error(u(151));for(var X=null,dn=null,V=x,tn=x=0,un=null,mn=C.next();V!==null&&!mn.done;tn++,mn=C.next()){V.index>tn?(un=V,V=null):un=V.sibling;var wt=j(S,V,mn.value,z);if(wt===null){V===null&&(V=un);break}n&&V&&wt.alternate===null&&e(S,V),x=l(wt,x,tn),dn===null?X=wt:dn.sibling=wt,dn=wt,V=un}if(mn.done)return t(S,V),cn&&Ye(S,tn),X;if(V===null){for(;!mn.done;tn++,mn=C.next())mn=L(S,mn.value,z),mn!==null&&(x=l(mn,x,tn),dn===null?X=mn:dn.sibling=mn,dn=mn);return cn&&Ye(S,tn),X}for(V=a(V);!mn.done;tn++,mn=C.next())mn=O(V,S,tn,mn.value,z),mn!==null&&(n&&mn.alternate!==null&&V.delete(mn.key===null?tn:mn.key),x=l(mn,x,tn),dn===null?X=mn:dn.sibling=mn,dn=mn);return n&&V.forEach(function(dv){return e(S,dv)}),cn&&Ye(S,tn),X}function yn(S,x,C,z){if(typeof C=="object"&&C!==null&&C.type===Z&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case R:n:{for(var X=C.key;x!==null;){if(x.key===X){if(X=C.type,X===Z){if(x.tag===7){t(S,x.sibling),z=i(x,C.props.children),z.return=S,S=z;break n}}else if(x.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===Hn&&Zt(X)===x.type){t(S,x.sibling),z=i(x,C.props),ri(z,C),z.return=S,S=z;break n}t(S,x);break}else e(S,x);x=x.sibling}C.type===Z?(z=kt(C.props.children,S.mode,z,C.key),z.return=S,S=z):(z=ol(C.type,C.key,C.props,null,S.mode,z),ri(z,C),z.return=S,S=z)}return s(S);case k:n:{for(X=C.key;x!==null;){if(x.key===X)if(x.tag===4&&x.stateNode.containerInfo===C.containerInfo&&x.stateNode.implementation===C.implementation){t(S,x.sibling),z=i(x,C.children||[]),z.return=S,S=z;break n}else{t(S,x);break}else e(S,x);x=x.sibling}z=Js(C,S.mode,z),z.return=S,S=z}return s(S);case Hn:return C=Zt(C),yn(S,x,C,z)}if(_e(C))return G(S,x,C,z);if(Qn(C)){if(X=Qn(C),typeof X!="function")throw Error(u(150));return C=X.call(C),K(S,x,C,z)}if(typeof C.then=="function")return yn(S,x,vl(C),z);if(C.$$typeof===q)return yn(S,x,dl(S,C),z);hl(S,C)}return typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint"?(C=""+C,x!==null&&x.tag===6?(t(S,x.sibling),z=i(x,C),z.return=S,S=z):(t(S,x),z=Ks(C,S.mode,z),z.return=S,S=z),s(S)):t(S,x)}return function(S,x,C,z){try{si=0;var X=yn(S,x,C,z);return Ca=null,X}catch(V){if(V===Sa||V===fl)throw V;var dn=me(29,V,null,S.mode);return dn.lanes=z,dn.return=S,dn}finally{}}}var Jt=mc(!0),fc=mc(!1),pt=!1;function rr(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function or(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function vt(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function ht(n,e,t){var a=n.updateQueue;if(a===null)return null;if(a=a.shared,(fn&2)!==0){var i=a.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),a.pending=e,e=rl(n),Fu(n,null,t),e}return sl(n,a,e,t),rl(n)}function oi(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194048)!==0)){var a=e.lanes;a&=n.pendingLanes,t|=a,e.lanes=t,iu(n,t)}}function ur(n,e){var t=n.updateQueue,a=n.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var i=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var s={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};l===null?i=l=s:l=l.next=s,t=t.next}while(t!==null);l===null?i=l=e:l=l.next=e}else i=l=e;t={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:a.shared,callbacks:a.callbacks},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}var cr=!1;function ui(){if(cr){var n=ya;if(n!==null)throw n}}function ci(n,e,t,a){cr=!1;var i=n.updateQueue;pt=!1;var l=i.firstBaseUpdate,s=i.lastBaseUpdate,c=i.shared.pending;if(c!==null){i.shared.pending=null;var p=c,N=p.next;p.next=null,s===null?l=N:s.next=N,s=p;var T=n.alternate;T!==null&&(T=T.updateQueue,c=T.lastBaseUpdate,c!==s&&(c===null?T.firstBaseUpdate=N:c.next=N,T.lastBaseUpdate=p))}if(l!==null){var L=i.baseState;s=0,T=N=p=null,c=l;do{var j=c.lane&-536870913,O=j!==c.lane;if(O?(on&j)===j:(a&j)===j){j!==0&&j===ba&&(cr=!0),T!==null&&(T=T.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});n:{var G=n,K=c;j=e;var yn=t;switch(K.tag){case 1:if(G=K.payload,typeof G=="function"){L=G.call(yn,L,j);break n}L=G;break n;case 3:G.flags=G.flags&-65537|128;case 0:if(G=K.payload,j=typeof G=="function"?G.call(yn,L,j):G,j==null)break n;L=E({},L,j);break n;case 2:pt=!0}}j=c.callback,j!==null&&(n.flags|=64,O&&(n.flags|=8192),O=i.callbacks,O===null?i.callbacks=[j]:O.push(j))}else O={lane:j,tag:c.tag,payload:c.payload,callback:c.callback,next:null},T===null?(N=T=O,p=L):T=T.next=O,s|=j;if(c=c.next,c===null){if(c=i.shared.pending,c===null)break;O=c,c=O.next,O.next=null,i.lastBaseUpdate=O,i.shared.pending=null}}while(!0);T===null&&(p=L),i.baseState=p,i.firstBaseUpdate=N,i.lastBaseUpdate=T,l===null&&(i.shared.lanes=0),St|=s,n.lanes=s,n.memoizedState=L}}function pc(n,e){if(typeof n!="function")throw Error(u(191,n));n.call(e)}function vc(n,e){var t=n.callbacks;if(t!==null)for(n.callbacks=null,n=0;n<t.length;n++)pc(t[n],e)}var Na=b(null),gl=b(0);function hc(n,e){n=nt,I(gl,n),I(Na,e),nt=n|e.baseLanes}function dr(){I(gl,nt),I(Na,Na.current)}function mr(){nt=gl.current,D(Na),D(gl)}var fe=b(null),Ee=null;function gt(n){var e=n.alternate;I(Ln,Ln.current&1),I(fe,n),Ee===null&&(e===null||Na.current!==null||e.memoizedState!==null)&&(Ee=n)}function fr(n){I(Ln,Ln.current),I(fe,n),Ee===null&&(Ee=n)}function gc(n){n.tag===22?(I(Ln,Ln.current),I(fe,n),Ee===null&&(Ee=n)):xt()}function xt(){I(Ln,Ln.current),I(fe,fe.current)}function pe(n){D(fe),Ee===n&&(Ee=null),D(Ln)}var Ln=b(0);function xl(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||yo(t)||So(t)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Xe=0,nn=null,xn=null,Un=null,bl=!1,ja=!1,Ft=!1,yl=0,di=0,Ea=null,e0=0;function _n(){throw Error(u(321))}function pr(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!de(n[t],e[t]))return!1;return!0}function vr(n,e,t,a,i,l){return Xe=l,nn=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,w.H=n===null||n.memoizedState===null?nd:Tr,Ft=!1,l=t(a,i),Ft=!1,ja&&(l=bc(e,t,a,i)),xc(n),l}function xc(n){w.H=pi;var e=xn!==null&&xn.next!==null;if(Xe=0,Un=xn=nn=null,bl=!1,di=0,Ea=null,e)throw Error(u(300));n===null||qn||(n=n.dependencies,n!==null&&cl(n)&&(qn=!0))}function bc(n,e,t,a){nn=n;var i=0;do{if(ja&&(Ea=null),di=0,ja=!1,25<=i)throw Error(u(301));if(i+=1,Un=xn=null,n.updateQueue!=null){var l=n.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}w.H=ed,l=e(t,a)}while(ja);return l}function t0(){var n=w.H,e=n.useState()[0];return e=typeof e.then=="function"?mi(e):e,n=n.useState()[0],(xn!==null?xn.memoizedState:null)!==n&&(nn.flags|=1024),e}function hr(){var n=yl!==0;return yl=0,n}function gr(n,e,t){e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~t}function xr(n){if(bl){for(n=n.memoizedState;n!==null;){var e=n.queue;e!==null&&(e.pending=null),n=n.next}bl=!1}Xe=0,Un=xn=nn=null,ja=!1,di=yl=0,Ea=null}function ne(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Un===null?nn.memoizedState=Un=n:Un=Un.next=n,Un}function Dn(){if(xn===null){var n=nn.alternate;n=n!==null?n.memoizedState:null}else n=xn.next;var e=Un===null?nn.memoizedState:Un.next;if(e!==null)Un=e,xn=n;else{if(n===null)throw nn.alternate===null?Error(u(467)):Error(u(310));xn=n,n={memoizedState:xn.memoizedState,baseState:xn.baseState,baseQueue:xn.baseQueue,queue:xn.queue,next:null},Un===null?nn.memoizedState=Un=n:Un=Un.next=n}return Un}function Sl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function mi(n){var e=di;return di+=1,Ea===null&&(Ea=[]),n=uc(Ea,n,e),e=nn,(Un===null?e.memoizedState:Un.next)===null&&(e=e.alternate,w.H=e===null||e.memoizedState===null?nd:Tr),n}function Cl(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return mi(n);if(n.$$typeof===q)return Zn(n)}throw Error(u(438,String(n)))}function br(n){var e=null,t=nn.updateQueue;if(t!==null&&(e=t.memoCache),e==null){var a=nn.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(i){return i.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),t===null&&(t=Sl(),nn.updateQueue=t),t.memoCache=e,t=e.data[e.index],t===void 0)for(t=e.data[e.index]=Array(n),a=0;a<n;a++)t[a]=Fn;return e.index++,t}function Ze(n,e){return typeof e=="function"?e(n):e}function Nl(n){var e=Dn();return yr(e,xn,n)}function yr(n,e,t){var a=n.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=t;var i=n.baseQueue,l=a.pending;if(l!==null){if(i!==null){var s=i.next;i.next=l.next,l.next=s}e.baseQueue=i=l,a.pending=null}if(l=n.baseState,i===null)n.memoizedState=l;else{e=i.next;var c=s=null,p=null,N=e,T=!1;do{var L=N.lane&-536870913;if(L!==N.lane?(on&L)===L:(Xe&L)===L){var j=N.revertLane;if(j===0)p!==null&&(p=p.next={lane:0,revertLane:0,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),L===ba&&(T=!0);else if((Xe&j)===j){N=N.next,j===ba&&(T=!0);continue}else L={lane:0,revertLane:N.revertLane,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},p===null?(c=p=L,s=l):p=p.next=L,nn.lanes|=j,St|=j;L=N.action,Ft&&t(l,L),l=N.hasEagerState?N.eagerState:t(l,L)}else j={lane:L,revertLane:N.revertLane,gesture:N.gesture,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},p===null?(c=p=j,s=l):p=p.next=j,nn.lanes|=L,St|=L;N=N.next}while(N!==null&&N!==e);if(p===null?s=l:p.next=c,!de(l,n.memoizedState)&&(qn=!0,T&&(t=ya,t!==null)))throw t;n.memoizedState=l,n.baseState=s,n.baseQueue=p,a.lastRenderedState=l}return i===null&&(a.lanes=0),[n.memoizedState,a.dispatch]}function Sr(n){var e=Dn(),t=e.queue;if(t===null)throw Error(u(311));t.lastRenderedReducer=n;var a=t.dispatch,i=t.pending,l=e.memoizedState;if(i!==null){t.pending=null;var s=i=i.next;do l=n(l,s.action),s=s.next;while(s!==i);de(l,e.memoizedState)||(qn=!0),e.memoizedState=l,e.baseQueue===null&&(e.baseState=l),t.lastRenderedState=l}return[l,a]}function yc(n,e,t){var a=nn,i=Dn(),l=cn;if(l){if(t===void 0)throw Error(u(407));t=t()}else t=e();var s=!de((xn||i).memoizedState,t);if(s&&(i.memoizedState=t,qn=!0),i=i.queue,jr(Nc.bind(null,a,i,n),[n]),i.getSnapshot!==e||s||Un!==null&&Un.memoizedState.tag&1){if(a.flags|=2048,Ma(9,{destroy:void 0},Cc.bind(null,a,i,t,e),null),Nn===null)throw Error(u(349));l||(Xe&127)!==0||Sc(a,e,t)}return t}function Sc(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=nn.updateQueue,e===null?(e=Sl(),nn.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Cc(n,e,t,a){e.value=t,e.getSnapshot=a,jc(e)&&Ec(n)}function Nc(n,e,t){return t(function(){jc(e)&&Ec(n)})}function jc(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!de(n,t)}catch{return!0}}function Ec(n){var e=Gt(n,2);e!==null&&re(e,n,2)}function Cr(n){var e=ne();if(typeof n=="function"){var t=n;if(n=t(),Ft){rt(!0);try{t()}finally{rt(!1)}}}return e.memoizedState=e.baseState=n,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ze,lastRenderedState:n},e}function Mc(n,e,t,a){return n.baseState=t,yr(n,xn,typeof a=="function"?a:Ze)}function a0(n,e,t,a,i){if(Ml(n))throw Error(u(485));if(n=e.action,n!==null){var l={payload:i,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){l.listeners.push(s)}};w.T!==null?t(!0):l.isTransition=!1,a(l),t=e.pending,t===null?(l.next=e.pending=l,Oc(e,l)):(l.next=t.next,e.pending=t.next=l)}}function Oc(n,e){var t=e.action,a=e.payload,i=n.state;if(e.isTransition){var l=w.T,s={};w.T=s;try{var c=t(i,a),p=w.S;p!==null&&p(s,c),Ac(n,e,c)}catch(N){Nr(n,e,N)}finally{l!==null&&s.types!==null&&(l.types=s.types),w.T=l}}else try{l=t(i,a),Ac(n,e,l)}catch(N){Nr(n,e,N)}}function Ac(n,e,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(a){_c(n,e,a)},function(a){return Nr(n,e,a)}):_c(n,e,t)}function _c(n,e,t){e.status="fulfilled",e.value=t,Tc(e),n.state=t,e=n.pending,e!==null&&(t=e.next,t===e?n.pending=null:(t=t.next,e.next=t,Oc(n,t)))}function Nr(n,e,t){var a=n.pending;if(n.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=t,Tc(e),e=e.next;while(e!==a)}n.action=null}function Tc(n){n=n.listeners;for(var e=0;e<n.length;e++)(0,n[e])()}function wc(n,e){return e}function zc(n,e){if(cn){var t=Nn.formState;if(t!==null){n:{var a=nn;if(cn){if(En){e:{for(var i=En,l=je;i.nodeType!==8;){if(!l){i=null;break e}if(i=Me(i.nextSibling),i===null){i=null;break e}}l=i.data,i=l==="F!"||l==="F"?i:null}if(i){En=Me(i.nextSibling),a=i.data==="F!";break n}}mt(a)}a=!1}a&&(e=t[0])}}return t=ne(),t.memoizedState=t.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wc,lastRenderedState:e},t.queue=a,t=$c.bind(null,nn,a),a.dispatch=t,a=Cr(!1),l=_r.bind(null,nn,!1,a.queue),a=ne(),i={state:e,dispatch:null,action:n,pending:null},a.queue=i,t=a0.bind(null,nn,i,l,t),i.dispatch=t,a.memoizedState=n,[e,t,!1]}function Lc(n){var e=Dn();return Dc(e,xn,n)}function Dc(n,e,t){if(e=yr(n,e,wc)[0],n=Nl(Ze)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=mi(e)}catch(s){throw s===Sa?fl:s}else a=e;e=Dn();var i=e.queue,l=i.dispatch;return t!==e.memoizedState&&(nn.flags|=2048,Ma(9,{destroy:void 0},i0.bind(null,i,t),null)),[a,l,n]}function i0(n,e){n.action=e}function Rc(n){var e=Dn(),t=xn;if(t!==null)return Dc(e,t,n);Dn(),e=e.memoizedState,t=Dn();var a=t.queue.dispatch;return t.memoizedState=n,[e,a,!1]}function Ma(n,e,t,a){return n={tag:n,create:t,deps:a,inst:e,next:null},e=nn.updateQueue,e===null&&(e=Sl(),nn.updateQueue=e),t=e.lastEffect,t===null?e.lastEffect=n.next=n:(a=t.next,t.next=n,n.next=a,e.lastEffect=n),n}function Uc(){return Dn().memoizedState}function jl(n,e,t,a){var i=ne();nn.flags|=n,i.memoizedState=Ma(1|e,{destroy:void 0},t,a===void 0?null:a)}function El(n,e,t,a){var i=Dn();a=a===void 0?null:a;var l=i.memoizedState.inst;xn!==null&&a!==null&&pr(a,xn.memoizedState.deps)?i.memoizedState=Ma(e,l,t,a):(nn.flags|=n,i.memoizedState=Ma(1|e,l,t,a))}function qc(n,e){jl(8390656,8,n,e)}function jr(n,e){El(2048,8,n,e)}function l0(n){nn.flags|=4;var e=nn.updateQueue;if(e===null)e=Sl(),nn.updateQueue=e,e.events=[n];else{var t=e.events;t===null?e.events=[n]:t.push(n)}}function Bc(n){var e=Dn().memoizedState;return l0({ref:e,nextImpl:n}),function(){if((fn&2)!==0)throw Error(u(440));return e.impl.apply(void 0,arguments)}}function Ic(n,e){return El(4,2,n,e)}function Hc(n,e){return El(4,4,n,e)}function Gc(n,e){if(typeof e=="function"){n=n();var t=e(n);return function(){typeof t=="function"?t():e(null)}}if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function kc(n,e,t){t=t!=null?t.concat([n]):null,El(4,4,Gc.bind(null,e,n),t)}function Er(){}function Yc(n,e){var t=Dn();e=e===void 0?null:e;var a=t.memoizedState;return e!==null&&pr(e,a[1])?a[0]:(t.memoizedState=[n,e],n)}function Qc(n,e){var t=Dn();e=e===void 0?null:e;var a=t.memoizedState;if(e!==null&&pr(e,a[1]))return a[0];if(a=n(),Ft){rt(!0);try{n()}finally{rt(!1)}}return t.memoizedState=[a,e],a}function Mr(n,e,t){return t===void 0||(Xe&1073741824)!==0&&(on&261930)===0?n.memoizedState=e:(n.memoizedState=t,n=Vd(),nn.lanes|=n,St|=n,t)}function Vc(n,e,t,a){return de(t,e)?t:Na.current!==null?(n=Mr(n,t,a),de(n,e)||(qn=!0),n):(Xe&42)===0||(Xe&1073741824)!==0&&(on&261930)===0?(qn=!0,n.memoizedState=t):(n=Vd(),nn.lanes|=n,St|=n,e)}function Xc(n,e,t,a,i){var l=B.p;B.p=l!==0&&8>l?l:8;var s=w.T,c={};w.T=c,_r(n,!1,e,t);try{var p=i(),N=w.S;if(N!==null&&N(c,p),p!==null&&typeof p=="object"&&typeof p.then=="function"){var T=n0(p,a);fi(n,e,T,ge(n))}else fi(n,e,a,ge(n))}catch(L){fi(n,e,{then:function(){},status:"rejected",reason:L},ge())}finally{B.p=l,s!==null&&c.types!==null&&(s.types=c.types),w.T=s}}function s0(){}function Or(n,e,t,a){if(n.tag!==5)throw Error(u(476));var i=Zc(n).queue;Xc(n,i,e,F,t===null?s0:function(){return Kc(n),t(a)})}function Zc(n){var e=n.memoizedState;if(e!==null)return e;e={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ze,lastRenderedState:F},next:null};var t={};return e.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ze,lastRenderedState:t},next:null},n.memoizedState=e,n=n.alternate,n!==null&&(n.memoizedState=e),e}function Kc(n){var e=Zc(n);e.next===null&&(e=n.alternate.memoizedState),fi(n,e.next.queue,{},ge())}function Ar(){return Zn(Ti)}function Jc(){return Dn().memoizedState}function Fc(){return Dn().memoizedState}function r0(n){for(var e=n.return;e!==null;){switch(e.tag){case 24:case 3:var t=ge();n=vt(t);var a=ht(e,n,t);a!==null&&(re(a,e,t),oi(a,e,t)),e={cache:ar()},n.payload=e;return}e=e.return}}function o0(n,e,t){var a=ge();t={lane:a,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},Ml(n)?Wc(e,t):(t=Xs(n,e,t,a),t!==null&&(re(t,n,a),Pc(t,e,a)))}function $c(n,e,t){var a=ge();fi(n,e,t,a)}function fi(n,e,t,a){var i={lane:a,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(Ml(n))Wc(e,i);else{var l=n.alternate;if(n.lanes===0&&(l===null||l.lanes===0)&&(l=e.lastRenderedReducer,l!==null))try{var s=e.lastRenderedState,c=l(s,t);if(i.hasEagerState=!0,i.eagerState=c,de(c,s))return sl(n,e,i,0),Nn===null&&ll(),!1}catch{}finally{}if(t=Xs(n,e,i,a),t!==null)return re(t,n,a),Pc(t,e,a),!0}return!1}function _r(n,e,t,a){if(a={lane:2,revertLane:ro(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ml(n)){if(e)throw Error(u(479))}else e=Xs(n,t,a,2),e!==null&&re(e,n,2)}function Ml(n){var e=n.alternate;return n===nn||e!==null&&e===nn}function Wc(n,e){ja=bl=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Pc(n,e,t){if((t&4194048)!==0){var a=e.lanes;a&=n.pendingLanes,t|=a,e.lanes=t,iu(n,t)}}var pi={readContext:Zn,use:Cl,useCallback:_n,useContext:_n,useEffect:_n,useImperativeHandle:_n,useLayoutEffect:_n,useInsertionEffect:_n,useMemo:_n,useReducer:_n,useRef:_n,useState:_n,useDebugValue:_n,useDeferredValue:_n,useTransition:_n,useSyncExternalStore:_n,useId:_n,useHostTransitionStatus:_n,useFormState:_n,useActionState:_n,useOptimistic:_n,useMemoCache:_n,useCacheRefresh:_n};pi.useEffectEvent=_n;var nd={readContext:Zn,use:Cl,useCallback:function(n,e){return ne().memoizedState=[n,e===void 0?null:e],n},useContext:Zn,useEffect:qc,useImperativeHandle:function(n,e,t){t=t!=null?t.concat([n]):null,jl(4194308,4,Gc.bind(null,e,n),t)},useLayoutEffect:function(n,e){return jl(4194308,4,n,e)},useInsertionEffect:function(n,e){jl(4,2,n,e)},useMemo:function(n,e){var t=ne();e=e===void 0?null:e;var a=n();if(Ft){rt(!0);try{n()}finally{rt(!1)}}return t.memoizedState=[a,e],a},useReducer:function(n,e,t){var a=ne();if(t!==void 0){var i=t(e);if(Ft){rt(!0);try{t(e)}finally{rt(!1)}}}else i=e;return a.memoizedState=a.baseState=i,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},a.queue=n,n=n.dispatch=o0.bind(null,nn,n),[a.memoizedState,n]},useRef:function(n){var e=ne();return n={current:n},e.memoizedState=n},useState:function(n){n=Cr(n);var e=n.queue,t=$c.bind(null,nn,e);return e.dispatch=t,[n.memoizedState,t]},useDebugValue:Er,useDeferredValue:function(n,e){var t=ne();return Mr(t,n,e)},useTransition:function(){var n=Cr(!1);return n=Xc.bind(null,nn,n.queue,!0,!1),ne().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,e,t){var a=nn,i=ne();if(cn){if(t===void 0)throw Error(u(407));t=t()}else{if(t=e(),Nn===null)throw Error(u(349));(on&127)!==0||Sc(a,e,t)}i.memoizedState=t;var l={value:t,getSnapshot:e};return i.queue=l,qc(Nc.bind(null,a,l,n),[n]),a.flags|=2048,Ma(9,{destroy:void 0},Cc.bind(null,a,l,t,e),null),t},useId:function(){var n=ne(),e=Nn.identifierPrefix;if(cn){var t=Re,a=De;t=(a&~(1<<32-ce(a)-1)).toString(32)+t,e="_"+e+"R_"+t,t=yl++,0<t&&(e+="H"+t.toString(32)),e+="_"}else t=e0++,e="_"+e+"r_"+t.toString(32)+"_";return n.memoizedState=e},useHostTransitionStatus:Ar,useFormState:zc,useActionState:zc,useOptimistic:function(n){var e=ne();e.memoizedState=e.baseState=n;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=t,e=_r.bind(null,nn,!0,t),t.dispatch=e,[n,e]},useMemoCache:br,useCacheRefresh:function(){return ne().memoizedState=r0.bind(null,nn)},useEffectEvent:function(n){var e=ne(),t={impl:n};return e.memoizedState=t,function(){if((fn&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}},Tr={readContext:Zn,use:Cl,useCallback:Yc,useContext:Zn,useEffect:jr,useImperativeHandle:kc,useInsertionEffect:Ic,useLayoutEffect:Hc,useMemo:Qc,useReducer:Nl,useRef:Uc,useState:function(){return Nl(Ze)},useDebugValue:Er,useDeferredValue:function(n,e){var t=Dn();return Vc(t,xn.memoizedState,n,e)},useTransition:function(){var n=Nl(Ze)[0],e=Dn().memoizedState;return[typeof n=="boolean"?n:mi(n),e]},useSyncExternalStore:yc,useId:Jc,useHostTransitionStatus:Ar,useFormState:Lc,useActionState:Lc,useOptimistic:function(n,e){var t=Dn();return Mc(t,xn,n,e)},useMemoCache:br,useCacheRefresh:Fc};Tr.useEffectEvent=Bc;var ed={readContext:Zn,use:Cl,useCallback:Yc,useContext:Zn,useEffect:jr,useImperativeHandle:kc,useInsertionEffect:Ic,useLayoutEffect:Hc,useMemo:Qc,useReducer:Sr,useRef:Uc,useState:function(){return Sr(Ze)},useDebugValue:Er,useDeferredValue:function(n,e){var t=Dn();return xn===null?Mr(t,n,e):Vc(t,xn.memoizedState,n,e)},useTransition:function(){var n=Sr(Ze)[0],e=Dn().memoizedState;return[typeof n=="boolean"?n:mi(n),e]},useSyncExternalStore:yc,useId:Jc,useHostTransitionStatus:Ar,useFormState:Rc,useActionState:Rc,useOptimistic:function(n,e){var t=Dn();return xn!==null?Mc(t,xn,n,e):(t.baseState=n,[n,t.queue.dispatch])},useMemoCache:br,useCacheRefresh:Fc};ed.useEffectEvent=Bc;function wr(n,e,t,a){e=n.memoizedState,t=t(a,e),t=t==null?e:E({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var zr={enqueueSetState:function(n,e,t){n=n._reactInternals;var a=ge(),i=vt(a);i.payload=e,t!=null&&(i.callback=t),e=ht(n,i,a),e!==null&&(re(e,n,a),oi(e,n,a))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var a=ge(),i=vt(a);i.tag=1,i.payload=e,t!=null&&(i.callback=t),e=ht(n,i,a),e!==null&&(re(e,n,a),oi(e,n,a))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=ge(),a=vt(t);a.tag=2,e!=null&&(a.callback=e),e=ht(n,a,t),e!==null&&(re(e,n,t),oi(e,n,t))}};function td(n,e,t,a,i,l,s){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(a,l,s):e.prototype&&e.prototype.isPureReactComponent?!ni(t,a)||!ni(i,l):!0}function ad(n,e,t,a){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,a),e.state!==n&&zr.enqueueReplaceState(e,e.state,null)}function $t(n,e){var t=e;if("ref"in e){t={};for(var a in e)a!=="ref"&&(t[a]=e[a])}if(n=n.defaultProps){t===e&&(t=E({},t));for(var i in n)t[i]===void 0&&(t[i]=n[i])}return t}function id(n){il(n)}function ld(n){console.error(n)}function sd(n){il(n)}function Ol(n,e){try{var t=n.onUncaughtError;t(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function rd(n,e,t){try{var a=n.onCaughtError;a(t.value,{componentStack:t.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Lr(n,e,t){return t=vt(t),t.tag=3,t.payload={element:null},t.callback=function(){Ol(n,e)},t}function od(n){return n=vt(n),n.tag=3,n}function ud(n,e,t,a){var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var l=a.value;n.payload=function(){return i(l)},n.callback=function(){rd(e,t,a)}}var s=t.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){rd(e,t,a),typeof i!="function"&&(Ct===null?Ct=new Set([this]):Ct.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function u0(n,e,t,a,i){if(t.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=t.alternate,e!==null&&xa(e,t,i,!0),t=fe.current,t!==null){switch(t.tag){case 31:case 13:return Ee===null?Il():t.alternate===null&&Tn===0&&(Tn=3),t.flags&=-257,t.flags|=65536,t.lanes=i,a===pl?t.flags|=16384:(e=t.updateQueue,e===null?t.updateQueue=new Set([a]):e.add(a),io(n,a,i)),!1;case 22:return t.flags|=65536,a===pl?t.flags|=16384:(e=t.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},t.updateQueue=e):(t=e.retryQueue,t===null?e.retryQueue=new Set([a]):t.add(a)),io(n,a,i)),!1}throw Error(u(435,t.tag))}return io(n,a,i),Il(),!1}if(cn)return e=fe.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=i,a!==Ws&&(n=Error(u(422),{cause:a}),ai(Se(n,t)))):(a!==Ws&&(e=Error(u(423),{cause:a}),ai(Se(e,t))),n=n.current.alternate,n.flags|=65536,i&=-i,n.lanes|=i,a=Se(a,t),i=Lr(n.stateNode,a,i),ur(n,i),Tn!==4&&(Tn=2)),!1;var l=Error(u(520),{cause:a});if(l=Se(l,t),Ci===null?Ci=[l]:Ci.push(l),Tn!==4&&(Tn=2),e===null)return!0;a=Se(a,t),t=e;do{switch(t.tag){case 3:return t.flags|=65536,n=i&-i,t.lanes|=n,n=Lr(t.stateNode,a,n),ur(t,n),!1;case 1:if(e=t.type,l=t.stateNode,(t.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(Ct===null||!Ct.has(l))))return t.flags|=65536,i&=-i,t.lanes|=i,i=od(i),ud(i,n,t,a),ur(t,i),!1}t=t.return}while(t!==null);return!1}var Dr=Error(u(461)),qn=!1;function Kn(n,e,t,a){e.child=n===null?fc(e,null,t,a):Jt(e,n.child,t,a)}function cd(n,e,t,a,i){t=t.render;var l=e.ref;if("ref"in a){var s={};for(var c in a)c!=="ref"&&(s[c]=a[c])}else s=a;return Vt(e),a=vr(n,e,t,s,l,i),c=hr(),n!==null&&!qn?(gr(n,e,i),Ke(n,e,i)):(cn&&c&&Fs(e),e.flags|=1,Kn(n,e,a,i),e.child)}function dd(n,e,t,a,i){if(n===null){var l=t.type;return typeof l=="function"&&!Zs(l)&&l.defaultProps===void 0&&t.compare===null?(e.tag=15,e.type=l,md(n,e,l,a,i)):(n=ol(t.type,null,a,e,e.mode,i),n.ref=e.ref,n.return=e,e.child=n)}if(l=n.child,!kr(n,i)){var s=l.memoizedProps;if(t=t.compare,t=t!==null?t:ni,t(s,a)&&n.ref===e.ref)return Ke(n,e,i)}return e.flags|=1,n=ke(l,a),n.ref=e.ref,n.return=e,e.child=n}function md(n,e,t,a,i){if(n!==null){var l=n.memoizedProps;if(ni(l,a)&&n.ref===e.ref)if(qn=!1,e.pendingProps=a=l,kr(n,i))(n.flags&131072)!==0&&(qn=!0);else return e.lanes=n.lanes,Ke(n,e,i)}return Rr(n,e,t,a,i)}function fd(n,e,t,a){var i=a.children,l=n!==null?n.memoizedState:null;if(n===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((e.flags&128)!==0){if(l=l!==null?l.baseLanes|t:t,n!==null){for(a=e.child=n.child,i=0;a!==null;)i=i|a.lanes|a.childLanes,a=a.sibling;a=i&~l}else a=0,e.child=null;return pd(n,e,l,t,a)}if((t&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},n!==null&&ml(e,l!==null?l.cachePool:null),l!==null?hc(e,l):dr(),gc(e);else return a=e.lanes=536870912,pd(n,e,l!==null?l.baseLanes|t:t,t,a)}else l!==null?(ml(e,l.cachePool),hc(e,l),xt(),e.memoizedState=null):(n!==null&&ml(e,null),dr(),xt());return Kn(n,e,i,t),e.child}function vi(n,e){return n!==null&&n.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function pd(n,e,t,a,i){var l=lr();return l=l===null?null:{parent:Rn._currentValue,pool:l},e.memoizedState={baseLanes:t,cachePool:l},n!==null&&ml(e,null),dr(),gc(e),n!==null&&xa(n,e,a,!0),e.childLanes=i,null}function Al(n,e){return e=Tl({mode:e.mode,children:e.children},n.mode),e.ref=n.ref,n.child=e,e.return=n,e}function vd(n,e,t){return Jt(e,n.child,null,t),n=Al(e,e.pendingProps),n.flags|=2,pe(e),e.memoizedState=null,n}function c0(n,e,t){var a=e.pendingProps,i=(e.flags&128)!==0;if(e.flags&=-129,n===null){if(cn){if(a.mode==="hidden")return n=Al(e,a),e.lanes=536870912,vi(null,n);if(fr(e),(n=En)?(n=Om(n,je),n=n!==null&&n.data==="&"?n:null,n!==null&&(e.memoizedState={dehydrated:n,treeContext:ct!==null?{id:De,overflow:Re}:null,retryLane:536870912,hydrationErrors:null},t=Wu(n),t.return=e,e.child=t,Xn=e,En=null)):n=null,n===null)throw mt(e);return e.lanes=536870912,null}return Al(e,a)}var l=n.memoizedState;if(l!==null){var s=l.dehydrated;if(fr(e),i)if(e.flags&256)e.flags&=-257,e=vd(n,e,t);else if(e.memoizedState!==null)e.child=n.child,e.flags|=128,e=null;else throw Error(u(558));else if(qn||xa(n,e,t,!1),i=(t&n.childLanes)!==0,qn||i){if(a=Nn,a!==null&&(s=lu(a,t),s!==0&&s!==l.retryLane))throw l.retryLane=s,Gt(n,s),re(a,n,s),Dr;Il(),e=vd(n,e,t)}else n=l.treeContext,En=Me(s.nextSibling),Xn=e,cn=!0,dt=null,je=!1,n!==null&&ec(e,n),e=Al(e,a),e.flags|=4096;return e}return n=ke(n.child,{mode:a.mode,children:a.children}),n.ref=e.ref,e.child=n,n.return=e,n}function _l(n,e){var t=e.ref;if(t===null)n!==null&&n.ref!==null&&(e.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(u(284));(n===null||n.ref!==t)&&(e.flags|=4194816)}}function Rr(n,e,t,a,i){return Vt(e),t=vr(n,e,t,a,void 0,i),a=hr(),n!==null&&!qn?(gr(n,e,i),Ke(n,e,i)):(cn&&a&&Fs(e),e.flags|=1,Kn(n,e,t,i),e.child)}function hd(n,e,t,a,i,l){return Vt(e),e.updateQueue=null,t=bc(e,a,t,i),xc(n),a=hr(),n!==null&&!qn?(gr(n,e,l),Ke(n,e,l)):(cn&&a&&Fs(e),e.flags|=1,Kn(n,e,t,l),e.child)}function gd(n,e,t,a,i){if(Vt(e),e.stateNode===null){var l=pa,s=t.contextType;typeof s=="object"&&s!==null&&(l=Zn(s)),l=new t(a,l),e.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=zr,e.stateNode=l,l._reactInternals=e,l=e.stateNode,l.props=a,l.state=e.memoizedState,l.refs={},rr(e),s=t.contextType,l.context=typeof s=="object"&&s!==null?Zn(s):pa,l.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(wr(e,t,s,a),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(s=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),s!==l.state&&zr.enqueueReplaceState(l,l.state,null),ci(e,a,l,i),ui(),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(n===null){l=e.stateNode;var c=e.memoizedProps,p=$t(t,c);l.props=p;var N=l.context,T=t.contextType;s=pa,typeof T=="object"&&T!==null&&(s=Zn(T));var L=t.getDerivedStateFromProps;T=typeof L=="function"||typeof l.getSnapshotBeforeUpdate=="function",c=e.pendingProps!==c,T||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c||N!==s)&&ad(e,l,a,s),pt=!1;var j=e.memoizedState;l.state=j,ci(e,a,l,i),ui(),N=e.memoizedState,c||j!==N||pt?(typeof L=="function"&&(wr(e,t,L,a),N=e.memoizedState),(p=pt||td(e,t,p,a,j,N,s))?(T||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=N),l.props=a,l.state=N,l.context=s,a=p):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{l=e.stateNode,or(n,e),s=e.memoizedProps,T=$t(t,s),l.props=T,L=e.pendingProps,j=l.context,N=t.contextType,p=pa,typeof N=="object"&&N!==null&&(p=Zn(N)),c=t.getDerivedStateFromProps,(N=typeof c=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==L||j!==p)&&ad(e,l,a,p),pt=!1,j=e.memoizedState,l.state=j,ci(e,a,l,i),ui();var O=e.memoizedState;s!==L||j!==O||pt||n!==null&&n.dependencies!==null&&cl(n.dependencies)?(typeof c=="function"&&(wr(e,t,c,a),O=e.memoizedState),(T=pt||td(e,t,T,a,j,O,p)||n!==null&&n.dependencies!==null&&cl(n.dependencies))?(N||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(a,O,p),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(a,O,p)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===n.memoizedProps&&j===n.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===n.memoizedProps&&j===n.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=O),l.props=a,l.state=O,l.context=p,a=T):(typeof l.componentDidUpdate!="function"||s===n.memoizedProps&&j===n.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===n.memoizedProps&&j===n.memoizedState||(e.flags|=1024),a=!1)}return l=a,_l(n,e),a=(e.flags&128)!==0,l||a?(l=e.stateNode,t=a&&typeof t.getDerivedStateFromError!="function"?null:l.render(),e.flags|=1,n!==null&&a?(e.child=Jt(e,n.child,null,i),e.child=Jt(e,null,t,i)):Kn(n,e,t,i),e.memoizedState=l.state,n=e.child):n=Ke(n,e,i),n}function xd(n,e,t,a){return Yt(),e.flags|=256,Kn(n,e,t,a),e.child}var Ur={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function qr(n){return{baseLanes:n,cachePool:rc()}}function Br(n,e,t){return n=n!==null?n.childLanes&~t:0,e&&(n|=he),n}function bd(n,e,t){var a=e.pendingProps,i=!1,l=(e.flags&128)!==0,s;if((s=l)||(s=n!==null&&n.memoizedState===null?!1:(Ln.current&2)!==0),s&&(i=!0,e.flags&=-129),s=(e.flags&32)!==0,e.flags&=-33,n===null){if(cn){if(i?gt(e):xt(),(n=En)?(n=Om(n,je),n=n!==null&&n.data!=="&"?n:null,n!==null&&(e.memoizedState={dehydrated:n,treeContext:ct!==null?{id:De,overflow:Re}:null,retryLane:536870912,hydrationErrors:null},t=Wu(n),t.return=e,e.child=t,Xn=e,En=null)):n=null,n===null)throw mt(e);return So(n)?e.lanes=32:e.lanes=536870912,null}var c=a.children;return a=a.fallback,i?(xt(),i=e.mode,c=Tl({mode:"hidden",children:c},i),a=kt(a,i,t,null),c.return=e,a.return=e,c.sibling=a,e.child=c,a=e.child,a.memoizedState=qr(t),a.childLanes=Br(n,s,t),e.memoizedState=Ur,vi(null,a)):(gt(e),Ir(e,c))}var p=n.memoizedState;if(p!==null&&(c=p.dehydrated,c!==null)){if(l)e.flags&256?(gt(e),e.flags&=-257,e=Hr(n,e,t)):e.memoizedState!==null?(xt(),e.child=n.child,e.flags|=128,e=null):(xt(),c=a.fallback,i=e.mode,a=Tl({mode:"visible",children:a.children},i),c=kt(c,i,t,null),c.flags|=2,a.return=e,c.return=e,a.sibling=c,e.child=a,Jt(e,n.child,null,t),a=e.child,a.memoizedState=qr(t),a.childLanes=Br(n,s,t),e.memoizedState=Ur,e=vi(null,a));else if(gt(e),So(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var N=s.dgst;s=N,a=Error(u(419)),a.stack="",a.digest=s,ai({value:a,source:null,stack:null}),e=Hr(n,e,t)}else if(qn||xa(n,e,t,!1),s=(t&n.childLanes)!==0,qn||s){if(s=Nn,s!==null&&(a=lu(s,t),a!==0&&a!==p.retryLane))throw p.retryLane=a,Gt(n,a),re(s,n,a),Dr;yo(c)||Il(),e=Hr(n,e,t)}else yo(c)?(e.flags|=192,e.child=n.child,e=null):(n=p.treeContext,En=Me(c.nextSibling),Xn=e,cn=!0,dt=null,je=!1,n!==null&&ec(e,n),e=Ir(e,a.children),e.flags|=4096);return e}return i?(xt(),c=a.fallback,i=e.mode,p=n.child,N=p.sibling,a=ke(p,{mode:"hidden",children:a.children}),a.subtreeFlags=p.subtreeFlags&65011712,N!==null?c=ke(N,c):(c=kt(c,i,t,null),c.flags|=2),c.return=e,a.return=e,a.sibling=c,e.child=a,vi(null,a),a=e.child,c=n.child.memoizedState,c===null?c=qr(t):(i=c.cachePool,i!==null?(p=Rn._currentValue,i=i.parent!==p?{parent:p,pool:p}:i):i=rc(),c={baseLanes:c.baseLanes|t,cachePool:i}),a.memoizedState=c,a.childLanes=Br(n,s,t),e.memoizedState=Ur,vi(n.child,a)):(gt(e),t=n.child,n=t.sibling,t=ke(t,{mode:"visible",children:a.children}),t.return=e,t.sibling=null,n!==null&&(s=e.deletions,s===null?(e.deletions=[n],e.flags|=16):s.push(n)),e.child=t,e.memoizedState=null,t)}function Ir(n,e){return e=Tl({mode:"visible",children:e},n.mode),e.return=n,n.child=e}function Tl(n,e){return n=me(22,n,null,e),n.lanes=0,n}function Hr(n,e,t){return Jt(e,n.child,null,t),n=Ir(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function yd(n,e,t){n.lanes|=e;var a=n.alternate;a!==null&&(a.lanes|=e),er(n.return,e,t)}function Gr(n,e,t,a,i,l){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:i,treeForkCount:l}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=a,s.tail=t,s.tailMode=i,s.treeForkCount=l)}function Sd(n,e,t){var a=e.pendingProps,i=a.revealOrder,l=a.tail;a=a.children;var s=Ln.current,c=(s&2)!==0;if(c?(s=s&1|2,e.flags|=128):s&=1,I(Ln,s),Kn(n,e,a,t),a=cn?ti:0,!c&&n!==null&&(n.flags&128)!==0)n:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&yd(n,t,e);else if(n.tag===19)yd(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break n;for(;n.sibling===null;){if(n.return===null||n.return===e)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(i){case"forwards":for(t=e.child,i=null;t!==null;)n=t.alternate,n!==null&&xl(n)===null&&(i=t),t=t.sibling;t=i,t===null?(i=e.child,e.child=null):(i=t.sibling,t.sibling=null),Gr(e,!1,i,t,l,a);break;case"backwards":case"unstable_legacy-backwards":for(t=null,i=e.child,e.child=null;i!==null;){if(n=i.alternate,n!==null&&xl(n)===null){e.child=i;break}n=i.sibling,i.sibling=t,t=i,i=n}Gr(e,!0,t,null,l,a);break;case"together":Gr(e,!1,null,null,void 0,a);break;default:e.memoizedState=null}return e.child}function Ke(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),St|=e.lanes,(t&e.childLanes)===0)if(n!==null){if(xa(n,e,t,!1),(t&e.childLanes)===0)return null}else return null;if(n!==null&&e.child!==n.child)throw Error(u(153));if(e.child!==null){for(n=e.child,t=ke(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=ke(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function kr(n,e){return(n.lanes&e)!==0?!0:(n=n.dependencies,!!(n!==null&&cl(n)))}function d0(n,e,t){switch(e.tag){case 3:Pn(e,e.stateNode.containerInfo),ft(e,Rn,n.memoizedState.cache),Yt();break;case 27:case 5:Ga(e);break;case 4:Pn(e,e.stateNode.containerInfo);break;case 10:ft(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,fr(e),null;break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(gt(e),e.flags|=128,null):(t&e.child.childLanes)!==0?bd(n,e,t):(gt(e),n=Ke(n,e,t),n!==null?n.sibling:null);gt(e);break;case 19:var i=(n.flags&128)!==0;if(a=(t&e.childLanes)!==0,a||(xa(n,e,t,!1),a=(t&e.childLanes)!==0),i){if(a)return Sd(n,e,t);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),I(Ln,Ln.current),a)break;return null;case 22:return e.lanes=0,fd(n,e,t,e.pendingProps);case 24:ft(e,Rn,n.memoizedState.cache)}return Ke(n,e,t)}function Cd(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps)qn=!0;else{if(!kr(n,t)&&(e.flags&128)===0)return qn=!1,d0(n,e,t);qn=(n.flags&131072)!==0}else qn=!1,cn&&(e.flags&1048576)!==0&&nc(e,ti,e.index);switch(e.lanes=0,e.tag){case 16:n:{var a=e.pendingProps;if(n=Zt(e.elementType),e.type=n,typeof n=="function")Zs(n)?(a=$t(n,a),e.tag=1,e=gd(null,e,n,a,t)):(e.tag=0,e=Rr(null,e,n,a,t));else{if(n!=null){var i=n.$$typeof;if(i===J){e.tag=11,e=cd(null,e,n,a,t);break n}else if(i===$){e.tag=14,e=dd(null,e,n,a,t);break n}}throw e=Be(n)||n,Error(u(306,e,""))}}return e;case 0:return Rr(n,e,e.type,e.pendingProps,t);case 1:return a=e.type,i=$t(a,e.pendingProps),gd(n,e,a,i,t);case 3:n:{if(Pn(e,e.stateNode.containerInfo),n===null)throw Error(u(387));a=e.pendingProps;var l=e.memoizedState;i=l.element,or(n,e),ci(e,a,null,t);var s=e.memoizedState;if(a=s.cache,ft(e,Rn,a),a!==l.cache&&tr(e,[Rn],t,!0),ui(),a=s.element,l.isDehydrated)if(l={element:a,isDehydrated:!1,cache:s.cache},e.updateQueue.baseState=l,e.memoizedState=l,e.flags&256){e=xd(n,e,a,t);break n}else if(a!==i){i=Se(Error(u(424)),e),ai(i),e=xd(n,e,a,t);break n}else{switch(n=e.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(En=Me(n.firstChild),Xn=e,cn=!0,dt=null,je=!0,t=fc(e,null,a,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling}else{if(Yt(),a===i){e=Ke(n,e,t);break n}Kn(n,e,a,t)}e=e.child}return e;case 26:return _l(n,e),n===null?(t=Lm(e.type,null,e.pendingProps,null))?e.memoizedState=t:cn||(t=e.type,n=e.pendingProps,a=Xl(ln.current).createElement(t),a[Vn]=e,a[ee]=n,Jn(a,t,n),Gn(a),e.stateNode=a):e.memoizedState=Lm(e.type,n.memoizedProps,e.pendingProps,n.memoizedState),null;case 27:return Ga(e),n===null&&cn&&(a=e.stateNode=Tm(e.type,e.pendingProps,ln.current),Xn=e,je=!0,i=En,Mt(e.type)?(Co=i,En=Me(a.firstChild)):En=i),Kn(n,e,e.pendingProps.children,t),_l(n,e),n===null&&(e.flags|=4194304),e.child;case 5:return n===null&&cn&&((i=a=En)&&(a=G0(a,e.type,e.pendingProps,je),a!==null?(e.stateNode=a,Xn=e,En=Me(a.firstChild),je=!1,i=!0):i=!1),i||mt(e)),Ga(e),i=e.type,l=e.pendingProps,s=n!==null?n.memoizedProps:null,a=l.children,go(i,l)?a=null:s!==null&&go(i,s)&&(e.flags|=32),e.memoizedState!==null&&(i=vr(n,e,t0,null,null,t),Ti._currentValue=i),_l(n,e),Kn(n,e,a,t),e.child;case 6:return n===null&&cn&&((n=t=En)&&(t=k0(t,e.pendingProps,je),t!==null?(e.stateNode=t,Xn=e,En=null,n=!0):n=!1),n||mt(e)),null;case 13:return bd(n,e,t);case 4:return Pn(e,e.stateNode.containerInfo),a=e.pendingProps,n===null?e.child=Jt(e,null,a,t):Kn(n,e,a,t),e.child;case 11:return cd(n,e,e.type,e.pendingProps,t);case 7:return Kn(n,e,e.pendingProps,t),e.child;case 8:return Kn(n,e,e.pendingProps.children,t),e.child;case 12:return Kn(n,e,e.pendingProps.children,t),e.child;case 10:return a=e.pendingProps,ft(e,e.type,a.value),Kn(n,e,a.children,t),e.child;case 9:return i=e.type._context,a=e.pendingProps.children,Vt(e),i=Zn(i),a=a(i),e.flags|=1,Kn(n,e,a,t),e.child;case 14:return dd(n,e,e.type,e.pendingProps,t);case 15:return md(n,e,e.type,e.pendingProps,t);case 19:return Sd(n,e,t);case 31:return c0(n,e,t);case 22:return fd(n,e,t,e.pendingProps);case 24:return Vt(e),a=Zn(Rn),n===null?(i=lr(),i===null&&(i=Nn,l=ar(),i.pooledCache=l,l.refCount++,l!==null&&(i.pooledCacheLanes|=t),i=l),e.memoizedState={parent:a,cache:i},rr(e),ft(e,Rn,i)):((n.lanes&t)!==0&&(or(n,e),ci(e,null,null,t),ui()),i=n.memoizedState,l=e.memoizedState,i.parent!==a?(i={parent:a,cache:a},e.memoizedState=i,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=i),ft(e,Rn,a)):(a=l.cache,ft(e,Rn,a),a!==i.cache&&tr(e,[Rn],t,!0))),Kn(n,e,e.pendingProps.children,t),e.child;case 29:throw e.pendingProps}throw Error(u(156,e.tag))}function Je(n){n.flags|=4}function Yr(n,e,t,a,i){if((e=(n.mode&32)!==0)&&(e=!1),e){if(n.flags|=16777216,(i&335544128)===i)if(n.stateNode.complete)n.flags|=8192;else if(Jd())n.flags|=8192;else throw Kt=pl,sr}else n.flags&=-16777217}function Nd(n,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!Bm(e))if(Jd())n.flags|=8192;else throw Kt=pl,sr}function wl(n,e){e!==null&&(n.flags|=4),n.flags&16384&&(e=n.tag!==22?tu():536870912,n.lanes|=e,Ta|=e)}function hi(n,e){if(!cn)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:a.sibling=null}}function Mn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,a=0;if(e)for(var i=n.child;i!==null;)t|=i.lanes|i.childLanes,a|=i.subtreeFlags&65011712,a|=i.flags&65011712,i.return=n,i=i.sibling;else for(i=n.child;i!==null;)t|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=n,i=i.sibling;return n.subtreeFlags|=a,n.childLanes=t,e}function m0(n,e,t){var a=e.pendingProps;switch($s(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mn(e),null;case 1:return Mn(e),null;case 3:return t=e.stateNode,a=null,n!==null&&(a=n.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Ve(Rn),zn(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(n===null||n.child===null)&&(ga(e)?Je(e):n===null||n.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Ps())),Mn(e),null;case 26:var i=e.type,l=e.memoizedState;return n===null?(Je(e),l!==null?(Mn(e),Nd(e,l)):(Mn(e),Yr(e,i,null,a,t))):l?l!==n.memoizedState?(Je(e),Mn(e),Nd(e,l)):(Mn(e),e.flags&=-16777217):(n=n.memoizedProps,n!==a&&Je(e),Mn(e),Yr(e,i,n,a,t)),null;case 27:if(ki(e),t=ln.current,i=e.type,n!==null&&e.stateNode!=null)n.memoizedProps!==a&&Je(e);else{if(!a){if(e.stateNode===null)throw Error(u(166));return Mn(e),null}n=Y.current,ga(e)?tc(e):(n=Tm(i,a,t),e.stateNode=n,Je(e))}return Mn(e),null;case 5:if(ki(e),i=e.type,n!==null&&e.stateNode!=null)n.memoizedProps!==a&&Je(e);else{if(!a){if(e.stateNode===null)throw Error(u(166));return Mn(e),null}if(l=Y.current,ga(e))tc(e);else{var s=Xl(ln.current);switch(l){case 1:l=s.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:l=s.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":l=s.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":l=s.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":l=s.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof a.is=="string"?s.createElement("select",{is:a.is}):s.createElement("select"),a.multiple?l.multiple=!0:a.size&&(l.size=a.size);break;default:l=typeof a.is=="string"?s.createElement(i,{is:a.is}):s.createElement(i)}}l[Vn]=e,l[ee]=a;n:for(s=e.child;s!==null;){if(s.tag===5||s.tag===6)l.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break n;for(;s.sibling===null;){if(s.return===null||s.return===e)break n;s=s.return}s.sibling.return=s.return,s=s.sibling}e.stateNode=l;n:switch(Jn(l,i,a),i){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break n;case"img":a=!0;break n;default:a=!1}a&&Je(e)}}return Mn(e),Yr(e,e.type,n===null?null:n.memoizedProps,e.pendingProps,t),null;case 6:if(n&&e.stateNode!=null)n.memoizedProps!==a&&Je(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(u(166));if(n=ln.current,ga(e)){if(n=e.stateNode,t=e.memoizedProps,a=null,i=Xn,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}n[Vn]=e,n=!!(n.nodeValue===t||a!==null&&a.suppressHydrationWarning===!0||bm(n.nodeValue,t)),n||mt(e,!0)}else n=Xl(n).createTextNode(a),n[Vn]=e,e.stateNode=n}return Mn(e),null;case 31:if(t=e.memoizedState,n===null||n.memoizedState!==null){if(a=ga(e),t!==null){if(n===null){if(!a)throw Error(u(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(u(557));n[Vn]=e}else Yt(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Mn(e),n=!1}else t=Ps(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=t),n=!0;if(!n)return e.flags&256?(pe(e),e):(pe(e),null);if((e.flags&128)!==0)throw Error(u(558))}return Mn(e),null;case 13:if(a=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(i=ga(e),a!==null&&a.dehydrated!==null){if(n===null){if(!i)throw Error(u(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(u(317));i[Vn]=e}else Yt(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Mn(e),i=!1}else i=Ps(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=i),i=!0;if(!i)return e.flags&256?(pe(e),e):(pe(e),null)}return pe(e),(e.flags&128)!==0?(e.lanes=t,e):(t=a!==null,n=n!==null&&n.memoizedState!==null,t&&(a=e.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==i&&(a.flags|=2048)),t!==n&&t&&(e.child.flags|=8192),wl(e,e.updateQueue),Mn(e),null);case 4:return zn(),n===null&&mo(e.stateNode.containerInfo),Mn(e),null;case 10:return Ve(e.type),Mn(e),null;case 19:if(D(Ln),a=e.memoizedState,a===null)return Mn(e),null;if(i=(e.flags&128)!==0,l=a.rendering,l===null)if(i)hi(a,!1);else{if(Tn!==0||n!==null&&(n.flags&128)!==0)for(n=e.child;n!==null;){if(l=xl(n),l!==null){for(e.flags|=128,hi(a,!1),n=l.updateQueue,e.updateQueue=n,wl(e,n),e.subtreeFlags=0,n=t,t=e.child;t!==null;)$u(t,n),t=t.sibling;return I(Ln,Ln.current&1|2),cn&&Ye(e,a.treeForkCount),e.child}n=n.sibling}a.tail!==null&&oe()>Ul&&(e.flags|=128,i=!0,hi(a,!1),e.lanes=4194304)}else{if(!i)if(n=xl(l),n!==null){if(e.flags|=128,i=!0,n=n.updateQueue,e.updateQueue=n,wl(e,n),hi(a,!0),a.tail===null&&a.tailMode==="hidden"&&!l.alternate&&!cn)return Mn(e),null}else 2*oe()-a.renderingStartTime>Ul&&t!==536870912&&(e.flags|=128,i=!0,hi(a,!1),e.lanes=4194304);a.isBackwards?(l.sibling=e.child,e.child=l):(n=a.last,n!==null?n.sibling=l:e.child=l,a.last=l)}return a.tail!==null?(n=a.tail,a.rendering=n,a.tail=n.sibling,a.renderingStartTime=oe(),n.sibling=null,t=Ln.current,I(Ln,i?t&1|2:t&1),cn&&Ye(e,a.treeForkCount),n):(Mn(e),null);case 22:case 23:return pe(e),mr(),a=e.memoizedState!==null,n!==null?n.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(t&536870912)!==0&&(e.flags&128)===0&&(Mn(e),e.subtreeFlags&6&&(e.flags|=8192)):Mn(e),t=e.updateQueue,t!==null&&wl(e,t.retryQueue),t=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==t&&(e.flags|=2048),n!==null&&D(Xt),null;case 24:return t=null,n!==null&&(t=n.memoizedState.cache),e.memoizedState.cache!==t&&(e.flags|=2048),Ve(Rn),Mn(e),null;case 25:return null;case 30:return null}throw Error(u(156,e.tag))}function f0(n,e){switch($s(e),e.tag){case 1:return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Ve(Rn),zn(),n=e.flags,(n&65536)!==0&&(n&128)===0?(e.flags=n&-65537|128,e):null;case 26:case 27:case 5:return ki(e),null;case 31:if(e.memoizedState!==null){if(pe(e),e.alternate===null)throw Error(u(340));Yt()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 13:if(pe(e),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(u(340));Yt()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return D(Ln),null;case 4:return zn(),null;case 10:return Ve(e.type),null;case 22:case 23:return pe(e),mr(),n!==null&&D(Xt),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 24:return Ve(Rn),null;case 25:return null;default:return null}}function jd(n,e){switch($s(e),e.tag){case 3:Ve(Rn),zn();break;case 26:case 27:case 5:ki(e);break;case 4:zn();break;case 31:e.memoizedState!==null&&pe(e);break;case 13:pe(e);break;case 19:D(Ln);break;case 10:Ve(e.type);break;case 22:case 23:pe(e),mr(),n!==null&&D(Xt);break;case 24:Ve(Rn)}}function gi(n,e){try{var t=e.updateQueue,a=t!==null?t.lastEffect:null;if(a!==null){var i=a.next;t=i;do{if((t.tag&n)===n){a=void 0;var l=t.create,s=t.inst;a=l(),s.destroy=a}t=t.next}while(t!==i)}}catch(c){hn(e,e.return,c)}}function bt(n,e,t){try{var a=e.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var l=i.next;a=l;do{if((a.tag&n)===n){var s=a.inst,c=s.destroy;if(c!==void 0){s.destroy=void 0,i=e;var p=t,N=c;try{N()}catch(T){hn(i,p,T)}}}a=a.next}while(a!==l)}}catch(T){hn(e,e.return,T)}}function Ed(n){var e=n.updateQueue;if(e!==null){var t=n.stateNode;try{vc(e,t)}catch(a){hn(n,n.return,a)}}}function Md(n,e,t){t.props=$t(n.type,n.memoizedProps),t.state=n.memoizedState;try{t.componentWillUnmount()}catch(a){hn(n,e,a)}}function xi(n,e){try{var t=n.ref;if(t!==null){switch(n.tag){case 26:case 27:case 5:var a=n.stateNode;break;case 30:a=n.stateNode;break;default:a=n.stateNode}typeof t=="function"?n.refCleanup=t(a):t.current=a}}catch(i){hn(n,e,i)}}function Ue(n,e){var t=n.ref,a=n.refCleanup;if(t!==null)if(typeof a=="function")try{a()}catch(i){hn(n,e,i)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(i){hn(n,e,i)}else t.current=null}function Od(n){var e=n.type,t=n.memoizedProps,a=n.stateNode;try{n:switch(e){case"button":case"input":case"select":case"textarea":t.autoFocus&&a.focus();break n;case"img":t.src?a.src=t.src:t.srcSet&&(a.srcset=t.srcSet)}}catch(i){hn(n,n.return,i)}}function Qr(n,e,t){try{var a=n.stateNode;R0(a,n.type,t,e),a[ee]=e}catch(i){hn(n,n.return,i)}}function Ad(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Mt(n.type)||n.tag===4}function Vr(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||Ad(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Mt(n.type)||n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Xr(n,e,t){var a=n.tag;if(a===5||a===6)n=n.stateNode,e?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(n,e):(e=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,e.appendChild(n),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=He));else if(a!==4&&(a===27&&Mt(n.type)&&(t=n.stateNode,e=null),n=n.child,n!==null))for(Xr(n,e,t),n=n.sibling;n!==null;)Xr(n,e,t),n=n.sibling}function zl(n,e,t){var a=n.tag;if(a===5||a===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(a!==4&&(a===27&&Mt(n.type)&&(t=n.stateNode),n=n.child,n!==null))for(zl(n,e,t),n=n.sibling;n!==null;)zl(n,e,t),n=n.sibling}function _d(n){var e=n.stateNode,t=n.memoizedProps;try{for(var a=n.type,i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Jn(e,a,t),e[Vn]=n,e[ee]=t}catch(l){hn(n,n.return,l)}}var Fe=!1,Bn=!1,Zr=!1,Td=typeof WeakSet=="function"?WeakSet:Set,kn=null;function p0(n,e){if(n=n.containerInfo,vo=Pl,n=ku(n),Hs(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else n:{t=(t=n.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var i=a.anchorOffset,l=a.focusNode;a=a.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break n}var s=0,c=-1,p=-1,N=0,T=0,L=n,j=null;e:for(;;){for(var O;L!==t||i!==0&&L.nodeType!==3||(c=s+i),L!==l||a!==0&&L.nodeType!==3||(p=s+a),L.nodeType===3&&(s+=L.nodeValue.length),(O=L.firstChild)!==null;)j=L,L=O;for(;;){if(L===n)break e;if(j===t&&++N===i&&(c=s),j===l&&++T===a&&(p=s),(O=L.nextSibling)!==null)break;L=j,j=L.parentNode}L=O}t=c===-1||p===-1?null:{start:c,end:p}}else t=null}t=t||{start:0,end:0}}else t=null;for(ho={focusedElem:n,selectionRange:t},Pl=!1,kn=e;kn!==null;)if(e=kn,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,kn=n;else for(;kn!==null;){switch(e=kn,l=e.alternate,n=e.flags,e.tag){case 0:if((n&4)!==0&&(n=e.updateQueue,n=n!==null?n.events:null,n!==null))for(t=0;t<n.length;t++)i=n[t],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((n&1024)!==0&&l!==null){n=void 0,t=e,i=l.memoizedProps,l=l.memoizedState,a=t.stateNode;try{var G=$t(t.type,i);n=a.getSnapshotBeforeUpdate(G,l),a.__reactInternalSnapshotBeforeUpdate=n}catch(K){hn(t,t.return,K)}}break;case 3:if((n&1024)!==0){if(n=e.stateNode.containerInfo,t=n.nodeType,t===9)bo(n);else if(t===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":bo(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(u(163))}if(n=e.sibling,n!==null){n.return=e.return,kn=n;break}kn=e.return}}function wd(n,e,t){var a=t.flags;switch(t.tag){case 0:case 11:case 15:We(n,t),a&4&&gi(5,t);break;case 1:if(We(n,t),a&4)if(n=t.stateNode,e===null)try{n.componentDidMount()}catch(s){hn(t,t.return,s)}else{var i=$t(t.type,e.memoizedProps);e=e.memoizedState;try{n.componentDidUpdate(i,e,n.__reactInternalSnapshotBeforeUpdate)}catch(s){hn(t,t.return,s)}}a&64&&Ed(t),a&512&&xi(t,t.return);break;case 3:if(We(n,t),a&64&&(n=t.updateQueue,n!==null)){if(e=null,t.child!==null)switch(t.child.tag){case 27:case 5:e=t.child.stateNode;break;case 1:e=t.child.stateNode}try{vc(n,e)}catch(s){hn(t,t.return,s)}}break;case 27:e===null&&a&4&&_d(t);case 26:case 5:We(n,t),e===null&&a&4&&Od(t),a&512&&xi(t,t.return);break;case 12:We(n,t);break;case 31:We(n,t),a&4&&Dd(n,t);break;case 13:We(n,t),a&4&&Rd(n,t),a&64&&(n=t.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(t=N0.bind(null,t),Y0(n,t))));break;case 22:if(a=t.memoizedState!==null||Fe,!a){e=e!==null&&e.memoizedState!==null||Bn,i=Fe;var l=Bn;Fe=a,(Bn=e)&&!l?Pe(n,t,(t.subtreeFlags&8772)!==0):We(n,t),Fe=i,Bn=l}break;case 30:break;default:We(n,t)}}function zd(n){var e=n.alternate;e!==null&&(n.alternate=null,zd(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&Ns(e)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var On=null,ae=!1;function $e(n,e,t){for(t=t.child;t!==null;)Ld(n,e,t),t=t.sibling}function Ld(n,e,t){if(ue&&typeof ue.onCommitFiberUnmount=="function")try{ue.onCommitFiberUnmount(ka,t)}catch{}switch(t.tag){case 26:Bn||Ue(t,e),$e(n,e,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:Bn||Ue(t,e);var a=On,i=ae;Mt(t.type)&&(On=t.stateNode,ae=!1),$e(n,e,t),Oi(t.stateNode),On=a,ae=i;break;case 5:Bn||Ue(t,e);case 6:if(a=On,i=ae,On=null,$e(n,e,t),On=a,ae=i,On!==null)if(ae)try{(On.nodeType===9?On.body:On.nodeName==="HTML"?On.ownerDocument.body:On).removeChild(t.stateNode)}catch(l){hn(t,e,l)}else try{On.removeChild(t.stateNode)}catch(l){hn(t,e,l)}break;case 18:On!==null&&(ae?(n=On,Em(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.stateNode),Ba(n)):Em(On,t.stateNode));break;case 4:a=On,i=ae,On=t.stateNode.containerInfo,ae=!0,$e(n,e,t),On=a,ae=i;break;case 0:case 11:case 14:case 15:bt(2,t,e),Bn||bt(4,t,e),$e(n,e,t);break;case 1:Bn||(Ue(t,e),a=t.stateNode,typeof a.componentWillUnmount=="function"&&Md(t,e,a)),$e(n,e,t);break;case 21:$e(n,e,t);break;case 22:Bn=(a=Bn)||t.memoizedState!==null,$e(n,e,t),Bn=a;break;default:$e(n,e,t)}}function Dd(n,e){if(e.memoizedState===null&&(n=e.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{Ba(n)}catch(t){hn(e,e.return,t)}}}function Rd(n,e){if(e.memoizedState===null&&(n=e.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Ba(n)}catch(t){hn(e,e.return,t)}}function v0(n){switch(n.tag){case 31:case 13:case 19:var e=n.stateNode;return e===null&&(e=n.stateNode=new Td),e;case 22:return n=n.stateNode,e=n._retryCache,e===null&&(e=n._retryCache=new Td),e;default:throw Error(u(435,n.tag))}}function Ll(n,e){var t=v0(n);e.forEach(function(a){if(!t.has(a)){t.add(a);var i=j0.bind(null,n,a);a.then(i,i)}})}function ie(n,e){var t=e.deletions;if(t!==null)for(var a=0;a<t.length;a++){var i=t[a],l=n,s=e,c=s;n:for(;c!==null;){switch(c.tag){case 27:if(Mt(c.type)){On=c.stateNode,ae=!1;break n}break;case 5:On=c.stateNode,ae=!1;break n;case 3:case 4:On=c.stateNode.containerInfo,ae=!0;break n}c=c.return}if(On===null)throw Error(u(160));Ld(l,s,i),On=null,ae=!1,l=i.alternate,l!==null&&(l.return=null),i.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Ud(e,n),e=e.sibling}var we=null;function Ud(n,e){var t=n.alternate,a=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:ie(e,n),le(n),a&4&&(bt(3,n,n.return),gi(3,n),bt(5,n,n.return));break;case 1:ie(e,n),le(n),a&512&&(Bn||t===null||Ue(t,t.return)),a&64&&Fe&&(n=n.updateQueue,n!==null&&(a=n.callbacks,a!==null&&(t=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=t===null?a:t.concat(a))));break;case 26:var i=we;if(ie(e,n),le(n),a&512&&(Bn||t===null||Ue(t,t.return)),a&4){var l=t!==null?t.memoizedState:null;if(a=n.memoizedState,t===null)if(a===null)if(n.stateNode===null){n:{a=n.type,t=n.memoizedProps,i=i.ownerDocument||i;e:switch(a){case"title":l=i.getElementsByTagName("title")[0],(!l||l[Va]||l[Vn]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=i.createElement(a),i.head.insertBefore(l,i.querySelector("head > title"))),Jn(l,a,t),l[Vn]=n,Gn(l),a=l;break n;case"link":var s=Um("link","href",i).get(a+(t.href||""));if(s){for(var c=0;c<s.length;c++)if(l=s[c],l.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&l.getAttribute("rel")===(t.rel==null?null:t.rel)&&l.getAttribute("title")===(t.title==null?null:t.title)&&l.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){s.splice(c,1);break e}}l=i.createElement(a),Jn(l,a,t),i.head.appendChild(l);break;case"meta":if(s=Um("meta","content",i).get(a+(t.content||""))){for(c=0;c<s.length;c++)if(l=s[c],l.getAttribute("content")===(t.content==null?null:""+t.content)&&l.getAttribute("name")===(t.name==null?null:t.name)&&l.getAttribute("property")===(t.property==null?null:t.property)&&l.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&l.getAttribute("charset")===(t.charSet==null?null:t.charSet)){s.splice(c,1);break e}}l=i.createElement(a),Jn(l,a,t),i.head.appendChild(l);break;default:throw Error(u(468,a))}l[Vn]=n,Gn(l),a=l}n.stateNode=a}else qm(i,n.type,n.stateNode);else n.stateNode=Rm(i,a,n.memoizedProps);else l!==a?(l===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):l.count--,a===null?qm(i,n.type,n.stateNode):Rm(i,a,n.memoizedProps)):a===null&&n.stateNode!==null&&Qr(n,n.memoizedProps,t.memoizedProps)}break;case 27:ie(e,n),le(n),a&512&&(Bn||t===null||Ue(t,t.return)),t!==null&&a&4&&Qr(n,n.memoizedProps,t.memoizedProps);break;case 5:if(ie(e,n),le(n),a&512&&(Bn||t===null||Ue(t,t.return)),n.flags&32){i=n.stateNode;try{ra(i,"")}catch(G){hn(n,n.return,G)}}a&4&&n.stateNode!=null&&(i=n.memoizedProps,Qr(n,i,t!==null?t.memoizedProps:i)),a&1024&&(Zr=!0);break;case 6:if(ie(e,n),le(n),a&4){if(n.stateNode===null)throw Error(u(162));a=n.memoizedProps,t=n.stateNode;try{t.nodeValue=a}catch(G){hn(n,n.return,G)}}break;case 3:if(Jl=null,i=we,we=Zl(e.containerInfo),ie(e,n),we=i,le(n),a&4&&t!==null&&t.memoizedState.isDehydrated)try{Ba(e.containerInfo)}catch(G){hn(n,n.return,G)}Zr&&(Zr=!1,qd(n));break;case 4:a=we,we=Zl(n.stateNode.containerInfo),ie(e,n),le(n),we=a;break;case 12:ie(e,n),le(n);break;case 31:ie(e,n),le(n),a&4&&(a=n.updateQueue,a!==null&&(n.updateQueue=null,Ll(n,a)));break;case 13:ie(e,n),le(n),n.child.flags&8192&&n.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(Rl=oe()),a&4&&(a=n.updateQueue,a!==null&&(n.updateQueue=null,Ll(n,a)));break;case 22:i=n.memoizedState!==null;var p=t!==null&&t.memoizedState!==null,N=Fe,T=Bn;if(Fe=N||i,Bn=T||p,ie(e,n),Bn=T,Fe=N,le(n),a&8192)n:for(e=n.stateNode,e._visibility=i?e._visibility&-2:e._visibility|1,i&&(t===null||p||Fe||Bn||Wt(n)),t=null,e=n;;){if(e.tag===5||e.tag===26){if(t===null){p=t=e;try{if(l=p.stateNode,i)s=l.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{c=p.stateNode;var L=p.memoizedProps.style,j=L!=null&&L.hasOwnProperty("display")?L.display:null;c.style.display=j==null||typeof j=="boolean"?"":(""+j).trim()}}catch(G){hn(p,p.return,G)}}}else if(e.tag===6){if(t===null){p=e;try{p.stateNode.nodeValue=i?"":p.memoizedProps}catch(G){hn(p,p.return,G)}}}else if(e.tag===18){if(t===null){p=e;try{var O=p.stateNode;i?Mm(O,!0):Mm(p.stateNode,!1)}catch(G){hn(p,p.return,G)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===n)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break n;for(;e.sibling===null;){if(e.return===null||e.return===n)break n;t===e&&(t=null),e=e.return}t===e&&(t=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=n.updateQueue,a!==null&&(t=a.retryQueue,t!==null&&(a.retryQueue=null,Ll(n,t))));break;case 19:ie(e,n),le(n),a&4&&(a=n.updateQueue,a!==null&&(n.updateQueue=null,Ll(n,a)));break;case 30:break;case 21:break;default:ie(e,n),le(n)}}function le(n){var e=n.flags;if(e&2){try{for(var t,a=n.return;a!==null;){if(Ad(a)){t=a;break}a=a.return}if(t==null)throw Error(u(160));switch(t.tag){case 27:var i=t.stateNode,l=Vr(n);zl(n,l,i);break;case 5:var s=t.stateNode;t.flags&32&&(ra(s,""),t.flags&=-33);var c=Vr(n);zl(n,c,s);break;case 3:case 4:var p=t.stateNode.containerInfo,N=Vr(n);Xr(n,N,p);break;default:throw Error(u(161))}}catch(T){hn(n,n.return,T)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function qd(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var e=n;qd(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),n=n.sibling}}function We(n,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)wd(n,e.alternate,e),e=e.sibling}function Wt(n){for(n=n.child;n!==null;){var e=n;switch(e.tag){case 0:case 11:case 14:case 15:bt(4,e,e.return),Wt(e);break;case 1:Ue(e,e.return);var t=e.stateNode;typeof t.componentWillUnmount=="function"&&Md(e,e.return,t),Wt(e);break;case 27:Oi(e.stateNode);case 26:case 5:Ue(e,e.return),Wt(e);break;case 22:e.memoizedState===null&&Wt(e);break;case 30:Wt(e);break;default:Wt(e)}n=n.sibling}}function Pe(n,e,t){for(t=t&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,i=n,l=e,s=l.flags;switch(l.tag){case 0:case 11:case 15:Pe(i,l,t),gi(4,l);break;case 1:if(Pe(i,l,t),a=l,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(N){hn(a,a.return,N)}if(a=l,i=a.updateQueue,i!==null){var c=a.stateNode;try{var p=i.shared.hiddenCallbacks;if(p!==null)for(i.shared.hiddenCallbacks=null,i=0;i<p.length;i++)pc(p[i],c)}catch(N){hn(a,a.return,N)}}t&&s&64&&Ed(l),xi(l,l.return);break;case 27:_d(l);case 26:case 5:Pe(i,l,t),t&&a===null&&s&4&&Od(l),xi(l,l.return);break;case 12:Pe(i,l,t);break;case 31:Pe(i,l,t),t&&s&4&&Dd(i,l);break;case 13:Pe(i,l,t),t&&s&4&&Rd(i,l);break;case 22:l.memoizedState===null&&Pe(i,l,t),xi(l,l.return);break;case 30:break;default:Pe(i,l,t)}e=e.sibling}}function Kr(n,e){var t=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==t&&(n!=null&&n.refCount++,t!=null&&ii(t))}function Jr(n,e){n=null,e.alternate!==null&&(n=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==n&&(e.refCount++,n!=null&&ii(n))}function ze(n,e,t,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Bd(n,e,t,a),e=e.sibling}function Bd(n,e,t,a){var i=e.flags;switch(e.tag){case 0:case 11:case 15:ze(n,e,t,a),i&2048&&gi(9,e);break;case 1:ze(n,e,t,a);break;case 3:ze(n,e,t,a),i&2048&&(n=null,e.alternate!==null&&(n=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==n&&(e.refCount++,n!=null&&ii(n)));break;case 12:if(i&2048){ze(n,e,t,a),n=e.stateNode;try{var l=e.memoizedProps,s=l.id,c=l.onPostCommit;typeof c=="function"&&c(s,e.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(p){hn(e,e.return,p)}}else ze(n,e,t,a);break;case 31:ze(n,e,t,a);break;case 13:ze(n,e,t,a);break;case 23:break;case 22:l=e.stateNode,s=e.alternate,e.memoizedState!==null?l._visibility&2?ze(n,e,t,a):bi(n,e):l._visibility&2?ze(n,e,t,a):(l._visibility|=2,Oa(n,e,t,a,(e.subtreeFlags&10256)!==0||!1)),i&2048&&Kr(s,e);break;case 24:ze(n,e,t,a),i&2048&&Jr(e.alternate,e);break;default:ze(n,e,t,a)}}function Oa(n,e,t,a,i){for(i=i&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var l=n,s=e,c=t,p=a,N=s.flags;switch(s.tag){case 0:case 11:case 15:Oa(l,s,c,p,i),gi(8,s);break;case 23:break;case 22:var T=s.stateNode;s.memoizedState!==null?T._visibility&2?Oa(l,s,c,p,i):bi(l,s):(T._visibility|=2,Oa(l,s,c,p,i)),i&&N&2048&&Kr(s.alternate,s);break;case 24:Oa(l,s,c,p,i),i&&N&2048&&Jr(s.alternate,s);break;default:Oa(l,s,c,p,i)}e=e.sibling}}function bi(n,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var t=n,a=e,i=a.flags;switch(a.tag){case 22:bi(t,a),i&2048&&Kr(a.alternate,a);break;case 24:bi(t,a),i&2048&&Jr(a.alternate,a);break;default:bi(t,a)}e=e.sibling}}var yi=8192;function Aa(n,e,t){if(n.subtreeFlags&yi)for(n=n.child;n!==null;)Id(n,e,t),n=n.sibling}function Id(n,e,t){switch(n.tag){case 26:Aa(n,e,t),n.flags&yi&&n.memoizedState!==null&&ev(t,we,n.memoizedState,n.memoizedProps);break;case 5:Aa(n,e,t);break;case 3:case 4:var a=we;we=Zl(n.stateNode.containerInfo),Aa(n,e,t),we=a;break;case 22:n.memoizedState===null&&(a=n.alternate,a!==null&&a.memoizedState!==null?(a=yi,yi=16777216,Aa(n,e,t),yi=a):Aa(n,e,t));break;default:Aa(n,e,t)}}function Hd(n){var e=n.alternate;if(e!==null&&(n=e.child,n!==null)){e.child=null;do e=n.sibling,n.sibling=null,n=e;while(n!==null)}}function Si(n){var e=n.deletions;if((n.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var a=e[t];kn=a,kd(a,n)}Hd(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Gd(n),n=n.sibling}function Gd(n){switch(n.tag){case 0:case 11:case 15:Si(n),n.flags&2048&&bt(9,n,n.return);break;case 3:Si(n);break;case 12:Si(n);break;case 22:var e=n.stateNode;n.memoizedState!==null&&e._visibility&2&&(n.return===null||n.return.tag!==13)?(e._visibility&=-3,Dl(n)):Si(n);break;default:Si(n)}}function Dl(n){var e=n.deletions;if((n.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var a=e[t];kn=a,kd(a,n)}Hd(n)}for(n=n.child;n!==null;){switch(e=n,e.tag){case 0:case 11:case 15:bt(8,e,e.return),Dl(e);break;case 22:t=e.stateNode,t._visibility&2&&(t._visibility&=-3,Dl(e));break;default:Dl(e)}n=n.sibling}}function kd(n,e){for(;kn!==null;){var t=kn;switch(t.tag){case 0:case 11:case 15:bt(8,t,e);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var a=t.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:ii(t.memoizedState.cache)}if(a=t.child,a!==null)a.return=t,kn=a;else n:for(t=n;kn!==null;){a=kn;var i=a.sibling,l=a.return;if(zd(a),a===t){kn=null;break n}if(i!==null){i.return=l,kn=i;break n}kn=l}}}var h0={getCacheForType:function(n){var e=Zn(Rn),t=e.data.get(n);return t===void 0&&(t=n(),e.data.set(n,t)),t},cacheSignal:function(){return Zn(Rn).controller.signal}},g0=typeof WeakMap=="function"?WeakMap:Map,fn=0,Nn=null,sn=null,on=0,vn=0,ve=null,yt=!1,_a=!1,Fr=!1,nt=0,Tn=0,St=0,Pt=0,$r=0,he=0,Ta=0,Ci=null,se=null,Wr=!1,Rl=0,Yd=0,Ul=1/0,ql=null,Ct=null,In=0,Nt=null,wa=null,et=0,Pr=0,no=null,Qd=null,Ni=0,eo=null;function ge(){return(fn&2)!==0&&on!==0?on&-on:w.T!==null?ro():su()}function Vd(){if(he===0)if((on&536870912)===0||cn){var n=Vi;Vi<<=1,(Vi&3932160)===0&&(Vi=262144),he=n}else he=536870912;return n=fe.current,n!==null&&(n.flags|=32),he}function re(n,e,t){(n===Nn&&(vn===2||vn===9)||n.cancelPendingCommit!==null)&&(za(n,0),jt(n,on,he,!1)),Qa(n,t),((fn&2)===0||n!==Nn)&&(n===Nn&&((fn&2)===0&&(Pt|=t),Tn===4&&jt(n,on,he,!1)),qe(n))}function Xd(n,e,t){if((fn&6)!==0)throw Error(u(327));var a=!t&&(e&127)===0&&(e&n.expiredLanes)===0||Ya(n,e),i=a?y0(n,e):ao(n,e,!0),l=a;do{if(i===0){_a&&!a&&jt(n,e,0,!1);break}else{if(t=n.current.alternate,l&&!x0(t)){i=ao(n,e,!1),l=!1;continue}if(i===2){if(l=e,n.errorRecoveryDisabledLanes&l)var s=0;else s=n.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){e=s;n:{var c=n;i=Ci;var p=c.current.memoizedState.isDehydrated;if(p&&(za(c,s).flags|=256),s=ao(c,s,!1),s!==2){if(Fr&&!p){c.errorRecoveryDisabledLanes|=l,Pt|=l,i=4;break n}l=se,se=i,l!==null&&(se===null?se=l:se.push.apply(se,l))}i=s}if(l=!1,i!==2)continue}}if(i===1){za(n,0),jt(n,e,0,!0);break}n:{switch(a=n,l=i,l){case 0:case 1:throw Error(u(345));case 4:if((e&4194048)!==e)break;case 6:jt(a,e,he,!yt);break n;case 2:se=null;break;case 3:case 5:break;default:throw Error(u(329))}if((e&62914560)===e&&(i=Rl+300-oe(),10<i)){if(jt(a,e,he,!yt),Zi(a,0,!0)!==0)break n;et=e,a.timeoutHandle=Nm(Zd.bind(null,a,t,se,ql,Wr,e,he,Pt,Ta,yt,l,"Throttled",-0,0),i);break n}Zd(a,t,se,ql,Wr,e,he,Pt,Ta,yt,l,null,-0,0)}}break}while(!0);qe(n)}function Zd(n,e,t,a,i,l,s,c,p,N,T,L,j,O){if(n.timeoutHandle=-1,L=e.subtreeFlags,L&8192||(L&16785408)===16785408){L={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:He},Id(e,l,L);var G=(l&62914560)===l?Rl-oe():(l&4194048)===l?Yd-oe():0;if(G=tv(L,G),G!==null){et=l,n.cancelPendingCommit=G(em.bind(null,n,e,l,t,a,i,s,c,p,T,L,null,j,O)),jt(n,l,s,!N);return}}em(n,e,l,t,a,i,s,c,p)}function x0(n){for(var e=n;;){var t=e.tag;if((t===0||t===11||t===15)&&e.flags&16384&&(t=e.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var a=0;a<t.length;a++){var i=t[a],l=i.getSnapshot;i=i.value;try{if(!de(l(),i))return!1}catch{return!1}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function jt(n,e,t,a){e&=~$r,e&=~Pt,n.suspendedLanes|=e,n.pingedLanes&=~e,a&&(n.warmLanes|=e),a=n.expirationTimes;for(var i=e;0<i;){var l=31-ce(i),s=1<<l;a[l]=-1,i&=~s}t!==0&&au(n,t,e)}function Bl(){return(fn&6)===0?(ji(0),!1):!0}function to(){if(sn!==null){if(vn===0)var n=sn.return;else n=sn,Qe=Qt=null,xr(n),Ca=null,si=0,n=sn;for(;n!==null;)jd(n.alternate,n),n=n.return;sn=null}}function za(n,e){var t=n.timeoutHandle;t!==-1&&(n.timeoutHandle=-1,B0(t)),t=n.cancelPendingCommit,t!==null&&(n.cancelPendingCommit=null,t()),et=0,to(),Nn=n,sn=t=ke(n.current,null),on=e,vn=0,ve=null,yt=!1,_a=Ya(n,e),Fr=!1,Ta=he=$r=Pt=St=Tn=0,se=Ci=null,Wr=!1,(e&8)!==0&&(e|=e&32);var a=n.entangledLanes;if(a!==0)for(n=n.entanglements,a&=e;0<a;){var i=31-ce(a),l=1<<i;e|=n[i],a&=~l}return nt=e,ll(),t}function Kd(n,e){nn=null,w.H=pi,e===Sa||e===fl?(e=cc(),vn=3):e===sr?(e=cc(),vn=4):vn=e===Dr?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,ve=e,sn===null&&(Tn=1,Ol(n,Se(e,n.current)))}function Jd(){var n=fe.current;return n===null?!0:(on&4194048)===on?Ee===null:(on&62914560)===on||(on&536870912)!==0?n===Ee:!1}function Fd(){var n=w.H;return w.H=pi,n===null?pi:n}function $d(){var n=w.A;return w.A=h0,n}function Il(){Tn=4,yt||(on&4194048)!==on&&fe.current!==null||(_a=!0),(St&134217727)===0&&(Pt&134217727)===0||Nn===null||jt(Nn,on,he,!1)}function ao(n,e,t){var a=fn;fn|=2;var i=Fd(),l=$d();(Nn!==n||on!==e)&&(ql=null,za(n,e)),e=!1;var s=Tn;n:do try{if(vn!==0&&sn!==null){var c=sn,p=ve;switch(vn){case 8:to(),s=6;break n;case 3:case 2:case 9:case 6:fe.current===null&&(e=!0);var N=vn;if(vn=0,ve=null,La(n,c,p,N),t&&_a){s=0;break n}break;default:N=vn,vn=0,ve=null,La(n,c,p,N)}}b0(),s=Tn;break}catch(T){Kd(n,T)}while(!0);return e&&n.shellSuspendCounter++,Qe=Qt=null,fn=a,w.H=i,w.A=l,sn===null&&(Nn=null,on=0,ll()),s}function b0(){for(;sn!==null;)Wd(sn)}function y0(n,e){var t=fn;fn|=2;var a=Fd(),i=$d();Nn!==n||on!==e?(ql=null,Ul=oe()+500,za(n,e)):_a=Ya(n,e);n:do try{if(vn!==0&&sn!==null){e=sn;var l=ve;e:switch(vn){case 1:vn=0,ve=null,La(n,e,l,1);break;case 2:case 9:if(oc(l)){vn=0,ve=null,Pd(e);break}e=function(){vn!==2&&vn!==9||Nn!==n||(vn=7),qe(n)},l.then(e,e);break n;case 3:vn=7;break n;case 4:vn=5;break n;case 7:oc(l)?(vn=0,ve=null,Pd(e)):(vn=0,ve=null,La(n,e,l,7));break;case 5:var s=null;switch(sn.tag){case 26:s=sn.memoizedState;case 5:case 27:var c=sn;if(s?Bm(s):c.stateNode.complete){vn=0,ve=null;var p=c.sibling;if(p!==null)sn=p;else{var N=c.return;N!==null?(sn=N,Hl(N)):sn=null}break e}}vn=0,ve=null,La(n,e,l,5);break;case 6:vn=0,ve=null,La(n,e,l,6);break;case 8:to(),Tn=6;break n;default:throw Error(u(462))}}S0();break}catch(T){Kd(n,T)}while(!0);return Qe=Qt=null,w.H=a,w.A=i,fn=t,sn!==null?0:(Nn=null,on=0,ll(),Tn)}function S0(){for(;sn!==null&&!Qf();)Wd(sn)}function Wd(n){var e=Cd(n.alternate,n,nt);n.memoizedProps=n.pendingProps,e===null?Hl(n):sn=e}function Pd(n){var e=n,t=e.alternate;switch(e.tag){case 15:case 0:e=hd(t,e,e.pendingProps,e.type,void 0,on);break;case 11:e=hd(t,e,e.pendingProps,e.type.render,e.ref,on);break;case 5:xr(e);default:jd(t,e),e=sn=$u(e,nt),e=Cd(t,e,nt)}n.memoizedProps=n.pendingProps,e===null?Hl(n):sn=e}function La(n,e,t,a){Qe=Qt=null,xr(e),Ca=null,si=0;var i=e.return;try{if(u0(n,i,e,t,on)){Tn=1,Ol(n,Se(t,n.current)),sn=null;return}}catch(l){if(i!==null)throw sn=i,l;Tn=1,Ol(n,Se(t,n.current)),sn=null;return}e.flags&32768?(cn||a===1?n=!0:_a||(on&536870912)!==0?n=!1:(yt=n=!0,(a===2||a===9||a===3||a===6)&&(a=fe.current,a!==null&&a.tag===13&&(a.flags|=16384))),nm(e,n)):Hl(e)}function Hl(n){var e=n;do{if((e.flags&32768)!==0){nm(e,yt);return}n=e.return;var t=m0(e.alternate,e,nt);if(t!==null){sn=t;return}if(e=e.sibling,e!==null){sn=e;return}sn=e=n}while(e!==null);Tn===0&&(Tn=5)}function nm(n,e){do{var t=f0(n.alternate,n);if(t!==null){t.flags&=32767,sn=t;return}if(t=n.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!e&&(n=n.sibling,n!==null)){sn=n;return}sn=n=t}while(n!==null);Tn=6,sn=null}function em(n,e,t,a,i,l,s,c,p){n.cancelPendingCommit=null;do Gl();while(In!==0);if((fn&6)!==0)throw Error(u(327));if(e!==null){if(e===n.current)throw Error(u(177));if(l=e.lanes|e.childLanes,l|=Vs,np(n,t,l,s,c,p),n===Nn&&(sn=Nn=null,on=0),wa=e,Nt=n,et=t,Pr=l,no=i,Qd=a,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,E0(Yi,function(){return sm(),null})):(n.callbackNode=null,n.callbackPriority=0),a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=w.T,w.T=null,i=B.p,B.p=2,s=fn,fn|=4;try{p0(n,e,t)}finally{fn=s,B.p=i,w.T=a}}In=1,tm(),am(),im()}}function tm(){if(In===1){In=0;var n=Nt,e=wa,t=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||t){t=w.T,w.T=null;var a=B.p;B.p=2;var i=fn;fn|=4;try{Ud(e,n);var l=ho,s=ku(n.containerInfo),c=l.focusedElem,p=l.selectionRange;if(s!==c&&c&&c.ownerDocument&&Gu(c.ownerDocument.documentElement,c)){if(p!==null&&Hs(c)){var N=p.start,T=p.end;if(T===void 0&&(T=N),"selectionStart"in c)c.selectionStart=N,c.selectionEnd=Math.min(T,c.value.length);else{var L=c.ownerDocument||document,j=L&&L.defaultView||window;if(j.getSelection){var O=j.getSelection(),G=c.textContent.length,K=Math.min(p.start,G),yn=p.end===void 0?K:Math.min(p.end,G);!O.extend&&K>yn&&(s=yn,yn=K,K=s);var S=Hu(c,K),x=Hu(c,yn);if(S&&x&&(O.rangeCount!==1||O.anchorNode!==S.node||O.anchorOffset!==S.offset||O.focusNode!==x.node||O.focusOffset!==x.offset)){var C=L.createRange();C.setStart(S.node,S.offset),O.removeAllRanges(),K>yn?(O.addRange(C),O.extend(x.node,x.offset)):(C.setEnd(x.node,x.offset),O.addRange(C))}}}}for(L=[],O=c;O=O.parentNode;)O.nodeType===1&&L.push({element:O,left:O.scrollLeft,top:O.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<L.length;c++){var z=L[c];z.element.scrollLeft=z.left,z.element.scrollTop=z.top}}Pl=!!vo,ho=vo=null}finally{fn=i,B.p=a,w.T=t}}n.current=e,In=2}}function am(){if(In===2){In=0;var n=Nt,e=wa,t=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||t){t=w.T,w.T=null;var a=B.p;B.p=2;var i=fn;fn|=4;try{wd(n,e.alternate,e)}finally{fn=i,B.p=a,w.T=t}}In=3}}function im(){if(In===4||In===3){In=0,Vf();var n=Nt,e=wa,t=et,a=Qd;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?In=5:(In=0,wa=Nt=null,lm(n,n.pendingLanes));var i=n.pendingLanes;if(i===0&&(Ct=null),Ss(t),e=e.stateNode,ue&&typeof ue.onCommitFiberRoot=="function")try{ue.onCommitFiberRoot(ka,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=w.T,i=B.p,B.p=2,w.T=null;try{for(var l=n.onRecoverableError,s=0;s<a.length;s++){var c=a[s];l(c.value,{componentStack:c.stack})}}finally{w.T=e,B.p=i}}(et&3)!==0&&Gl(),qe(n),i=n.pendingLanes,(t&261930)!==0&&(i&42)!==0?n===eo?Ni++:(Ni=0,eo=n):Ni=0,ji(0)}}function lm(n,e){(n.pooledCacheLanes&=e)===0&&(e=n.pooledCache,e!=null&&(n.pooledCache=null,ii(e)))}function Gl(){return tm(),am(),im(),sm()}function sm(){if(In!==5)return!1;var n=Nt,e=Pr;Pr=0;var t=Ss(et),a=w.T,i=B.p;try{B.p=32>t?32:t,w.T=null,t=no,no=null;var l=Nt,s=et;if(In=0,wa=Nt=null,et=0,(fn&6)!==0)throw Error(u(331));var c=fn;if(fn|=4,Gd(l.current),Bd(l,l.current,s,t),fn=c,ji(0,!1),ue&&typeof ue.onPostCommitFiberRoot=="function")try{ue.onPostCommitFiberRoot(ka,l)}catch{}return!0}finally{B.p=i,w.T=a,lm(n,e)}}function rm(n,e,t){e=Se(t,e),e=Lr(n.stateNode,e,2),n=ht(n,e,2),n!==null&&(Qa(n,2),qe(n))}function hn(n,e,t){if(n.tag===3)rm(n,n,t);else for(;e!==null;){if(e.tag===3){rm(e,n,t);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Ct===null||!Ct.has(a))){n=Se(t,n),t=od(2),a=ht(e,t,2),a!==null&&(ud(t,a,e,n),Qa(a,2),qe(a));break}}e=e.return}}function io(n,e,t){var a=n.pingCache;if(a===null){a=n.pingCache=new g0;var i=new Set;a.set(e,i)}else i=a.get(e),i===void 0&&(i=new Set,a.set(e,i));i.has(t)||(Fr=!0,i.add(t),n=C0.bind(null,n,e,t),e.then(n,n))}function C0(n,e,t){var a=n.pingCache;a!==null&&a.delete(e),n.pingedLanes|=n.suspendedLanes&t,n.warmLanes&=~t,Nn===n&&(on&t)===t&&(Tn===4||Tn===3&&(on&62914560)===on&&300>oe()-Rl?(fn&2)===0&&za(n,0):$r|=t,Ta===on&&(Ta=0)),qe(n)}function om(n,e){e===0&&(e=tu()),n=Gt(n,e),n!==null&&(Qa(n,e),qe(n))}function N0(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),om(n,t)}function j0(n,e){var t=0;switch(n.tag){case 31:case 13:var a=n.stateNode,i=n.memoizedState;i!==null&&(t=i.retryLane);break;case 19:a=n.stateNode;break;case 22:a=n.stateNode._retryCache;break;default:throw Error(u(314))}a!==null&&a.delete(e),om(n,t)}function E0(n,e){return gs(n,e)}var kl=null,Da=null,lo=!1,Yl=!1,so=!1,Et=0;function qe(n){n!==Da&&n.next===null&&(Da===null?kl=Da=n:Da=Da.next=n),Yl=!0,lo||(lo=!0,O0())}function ji(n,e){if(!so&&Yl){so=!0;do for(var t=!1,a=kl;a!==null;){if(n!==0){var i=a.pendingLanes;if(i===0)var l=0;else{var s=a.suspendedLanes,c=a.pingedLanes;l=(1<<31-ce(42|n)+1)-1,l&=i&~(s&~c),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(t=!0,mm(a,l))}else l=on,l=Zi(a,a===Nn?l:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(l&3)===0||Ya(a,l)||(t=!0,mm(a,l));a=a.next}while(t);so=!1}}function M0(){um()}function um(){Yl=lo=!1;var n=0;Et!==0&&q0()&&(n=Et);for(var e=oe(),t=null,a=kl;a!==null;){var i=a.next,l=cm(a,e);l===0?(a.next=null,t===null?kl=i:t.next=i,i===null&&(Da=t)):(t=a,(n!==0||(l&3)!==0)&&(Yl=!0)),a=i}In!==0&&In!==5||ji(n),Et!==0&&(Et=0)}function cm(n,e){for(var t=n.suspendedLanes,a=n.pingedLanes,i=n.expirationTimes,l=n.pendingLanes&-62914561;0<l;){var s=31-ce(l),c=1<<s,p=i[s];p===-1?((c&t)===0||(c&a)!==0)&&(i[s]=Pf(c,e)):p<=e&&(n.expiredLanes|=c),l&=~c}if(e=Nn,t=on,t=Zi(n,n===e?t:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),a=n.callbackNode,t===0||n===e&&(vn===2||vn===9)||n.cancelPendingCommit!==null)return a!==null&&a!==null&&xs(a),n.callbackNode=null,n.callbackPriority=0;if((t&3)===0||Ya(n,t)){if(e=t&-t,e===n.callbackPriority)return e;switch(a!==null&&xs(a),Ss(t)){case 2:case 8:t=nu;break;case 32:t=Yi;break;case 268435456:t=eu;break;default:t=Yi}return a=dm.bind(null,n),t=gs(t,a),n.callbackPriority=e,n.callbackNode=t,e}return a!==null&&a!==null&&xs(a),n.callbackPriority=2,n.callbackNode=null,2}function dm(n,e){if(In!==0&&In!==5)return n.callbackNode=null,n.callbackPriority=0,null;var t=n.callbackNode;if(Gl()&&n.callbackNode!==t)return null;var a=on;return a=Zi(n,n===Nn?a:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),a===0?null:(Xd(n,a,e),cm(n,oe()),n.callbackNode!=null&&n.callbackNode===t?dm.bind(null,n):null)}function mm(n,e){if(Gl())return null;Xd(n,e,!0)}function O0(){I0(function(){(fn&6)!==0?gs(Po,M0):um()})}function ro(){if(Et===0){var n=ba;n===0&&(n=Qi,Qi<<=1,(Qi&261888)===0&&(Qi=256)),Et=n}return Et}function fm(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:$i(""+n)}function pm(n,e){var t=e.ownerDocument.createElement("input");return t.name=e.name,t.value=e.value,n.id&&t.setAttribute("form",n.id),e.parentNode.insertBefore(t,e),n=new FormData(n),t.parentNode.removeChild(t),n}function A0(n,e,t,a,i){if(e==="submit"&&t&&t.stateNode===i){var l=fm((i[ee]||null).action),s=a.submitter;s&&(e=(e=s[ee]||null)?fm(e.formAction):s.getAttribute("formAction"),e!==null&&(l=e,s=null));var c=new el("action","action",null,a,i);n.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Et!==0){var p=s?pm(i,s):new FormData(i);Or(t,{pending:!0,data:p,method:i.method,action:l},null,p)}}else typeof l=="function"&&(c.preventDefault(),p=s?pm(i,s):new FormData(i),Or(t,{pending:!0,data:p,method:i.method,action:l},l,p))},currentTarget:i}]})}}for(var oo=0;oo<Qs.length;oo++){var uo=Qs[oo],_0=uo.toLowerCase(),T0=uo[0].toUpperCase()+uo.slice(1);Te(_0,"on"+T0)}Te(Vu,"onAnimationEnd"),Te(Xu,"onAnimationIteration"),Te(Zu,"onAnimationStart"),Te("dblclick","onDoubleClick"),Te("focusin","onFocus"),Te("focusout","onBlur"),Te(Xp,"onTransitionRun"),Te(Zp,"onTransitionStart"),Te(Kp,"onTransitionCancel"),Te(Ku,"onTransitionEnd"),la("onMouseEnter",["mouseout","mouseover"]),la("onMouseLeave",["mouseout","mouseover"]),la("onPointerEnter",["pointerout","pointerover"]),la("onPointerLeave",["pointerout","pointerover"]),qt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),qt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),qt("onBeforeInput",["compositionend","keypress","textInput","paste"]),qt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),qt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),qt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ei="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),w0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ei));function vm(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var a=n[t],i=a.event;a=a.listeners;n:{var l=void 0;if(e)for(var s=a.length-1;0<=s;s--){var c=a[s],p=c.instance,N=c.currentTarget;if(c=c.listener,p!==l&&i.isPropagationStopped())break n;l=c,i.currentTarget=N;try{l(i)}catch(T){il(T)}i.currentTarget=null,l=p}else for(s=0;s<a.length;s++){if(c=a[s],p=c.instance,N=c.currentTarget,c=c.listener,p!==l&&i.isPropagationStopped())break n;l=c,i.currentTarget=N;try{l(i)}catch(T){il(T)}i.currentTarget=null,l=p}}}}function rn(n,e){var t=e[Cs];t===void 0&&(t=e[Cs]=new Set);var a=n+"__bubble";t.has(a)||(hm(e,n,2,!1),t.add(a))}function co(n,e,t){var a=0;e&&(a|=4),hm(t,n,a,e)}var Ql="_reactListening"+Math.random().toString(36).slice(2);function mo(n){if(!n[Ql]){n[Ql]=!0,uu.forEach(function(t){t!=="selectionchange"&&(w0.has(t)||co(t,!1,n),co(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Ql]||(e[Ql]=!0,co("selectionchange",!1,e))}}function hm(n,e,t,a){switch(Vm(e)){case 2:var i=lv;break;case 8:i=sv;break;default:i=Oo}t=i.bind(null,e,t,n),i=void 0,!ws||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),a?i!==void 0?n.addEventListener(e,t,{capture:!0,passive:i}):n.addEventListener(e,t,!0):i!==void 0?n.addEventListener(e,t,{passive:i}):n.addEventListener(e,t,!1)}function fo(n,e,t,a,i){var l=a;if((e&1)===0&&(e&2)===0&&a!==null)n:for(;;){if(a===null)return;var s=a.tag;if(s===3||s===4){var c=a.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=a.return;s!==null;){var p=s.tag;if((p===3||p===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=ta(c),s===null)return;if(p=s.tag,p===5||p===6||p===26||p===27){a=l=s;continue n}c=c.parentNode}}a=a.return}Su(function(){var N=l,T=_s(t),L=[];n:{var j=Ju.get(n);if(j!==void 0){var O=el,G=n;switch(n){case"keypress":if(Pi(t)===0)break n;case"keydown":case"keyup":O=jp;break;case"focusin":G="focus",O=Rs;break;case"focusout":G="blur",O=Rs;break;case"beforeblur":case"afterblur":O=Rs;break;case"click":if(t.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=ju;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=mp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=Op;break;case Vu:case Xu:case Zu:O=vp;break;case Ku:O=_p;break;case"scroll":case"scrollend":O=cp;break;case"wheel":O=wp;break;case"copy":case"cut":case"paste":O=gp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=Mu;break;case"toggle":case"beforetoggle":O=Lp}var K=(e&4)!==0,yn=!K&&(n==="scroll"||n==="scrollend"),S=K?j!==null?j+"Capture":null:j;K=[];for(var x=N,C;x!==null;){var z=x;if(C=z.stateNode,z=z.tag,z!==5&&z!==26&&z!==27||C===null||S===null||(z=Za(x,S),z!=null&&K.push(Mi(x,z,C))),yn)break;x=x.return}0<K.length&&(j=new O(j,G,null,t,T),L.push({event:j,listeners:K}))}}if((e&7)===0){n:{if(j=n==="mouseover"||n==="pointerover",O=n==="mouseout"||n==="pointerout",j&&t!==As&&(G=t.relatedTarget||t.fromElement)&&(ta(G)||G[ea]))break n;if((O||j)&&(j=T.window===T?T:(j=T.ownerDocument)?j.defaultView||j.parentWindow:window,O?(G=t.relatedTarget||t.toElement,O=N,G=G?ta(G):null,G!==null&&(yn=f(G),K=G.tag,G!==yn||K!==5&&K!==27&&K!==6)&&(G=null)):(O=null,G=N),O!==G)){if(K=ju,z="onMouseLeave",S="onMouseEnter",x="mouse",(n==="pointerout"||n==="pointerover")&&(K=Mu,z="onPointerLeave",S="onPointerEnter",x="pointer"),yn=O==null?j:Xa(O),C=G==null?j:Xa(G),j=new K(z,x+"leave",O,t,T),j.target=yn,j.relatedTarget=C,z=null,ta(T)===N&&(K=new K(S,x+"enter",G,t,T),K.target=C,K.relatedTarget=yn,z=K),yn=z,O&&G)e:{for(K=z0,S=O,x=G,C=0,z=S;z;z=K(z))C++;z=0;for(var X=x;X;X=K(X))z++;for(;0<C-z;)S=K(S),C--;for(;0<z-C;)x=K(x),z--;for(;C--;){if(S===x||x!==null&&S===x.alternate){K=S;break e}S=K(S),x=K(x)}K=null}else K=null;O!==null&&gm(L,j,O,K,!1),G!==null&&yn!==null&&gm(L,yn,G,K,!0)}}n:{if(j=N?Xa(N):window,O=j.nodeName&&j.nodeName.toLowerCase(),O==="select"||O==="input"&&j.type==="file")var dn=Du;else if(zu(j))if(Ru)dn=Yp;else{dn=Gp;var V=Hp}else O=j.nodeName,!O||O.toLowerCase()!=="input"||j.type!=="checkbox"&&j.type!=="radio"?N&&Os(N.elementType)&&(dn=Du):dn=kp;if(dn&&(dn=dn(n,N))){Lu(L,dn,t,T);break n}V&&V(n,j,N),n==="focusout"&&N&&j.type==="number"&&N.memoizedProps.value!=null&&Ms(j,"number",j.value)}switch(V=N?Xa(N):window,n){case"focusin":(zu(V)||V.contentEditable==="true")&&(da=V,Gs=N,ei=null);break;case"focusout":ei=Gs=da=null;break;case"mousedown":ks=!0;break;case"contextmenu":case"mouseup":case"dragend":ks=!1,Yu(L,t,T);break;case"selectionchange":if(Vp)break;case"keydown":case"keyup":Yu(L,t,T)}var tn;if(qs)n:{switch(n){case"compositionstart":var un="onCompositionStart";break n;case"compositionend":un="onCompositionEnd";break n;case"compositionupdate":un="onCompositionUpdate";break n}un=void 0}else ca?Tu(n,t)&&(un="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(un="onCompositionStart");un&&(Ou&&t.locale!=="ko"&&(ca||un!=="onCompositionStart"?un==="onCompositionEnd"&&ca&&(tn=Cu()):(ut=T,zs="value"in ut?ut.value:ut.textContent,ca=!0)),V=Vl(N,un),0<V.length&&(un=new Eu(un,n,null,t,T),L.push({event:un,listeners:V}),tn?un.data=tn:(tn=wu(t),tn!==null&&(un.data=tn)))),(tn=Rp?Up(n,t):qp(n,t))&&(un=Vl(N,"onBeforeInput"),0<un.length&&(V=new Eu("onBeforeInput","beforeinput",null,t,T),L.push({event:V,listeners:un}),V.data=tn)),A0(L,n,N,t,T)}vm(L,e)})}function Mi(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Vl(n,e){for(var t=e+"Capture",a=[];n!==null;){var i=n,l=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||l===null||(i=Za(n,t),i!=null&&a.unshift(Mi(n,i,l)),i=Za(n,e),i!=null&&a.push(Mi(n,i,l))),n.tag===3)return a;n=n.return}return[]}function z0(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function gm(n,e,t,a,i){for(var l=e._reactName,s=[];t!==null&&t!==a;){var c=t,p=c.alternate,N=c.stateNode;if(c=c.tag,p!==null&&p===a)break;c!==5&&c!==26&&c!==27||N===null||(p=N,i?(N=Za(t,l),N!=null&&s.unshift(Mi(t,N,p))):i||(N=Za(t,l),N!=null&&s.push(Mi(t,N,p)))),t=t.return}s.length!==0&&n.push({event:e,listeners:s})}var L0=/\r\n?/g,D0=/\u0000|\uFFFD/g;function xm(n){return(typeof n=="string"?n:""+n).replace(L0,`
`).replace(D0,"")}function bm(n,e){return e=xm(e),xm(n)===e}function bn(n,e,t,a,i,l){switch(t){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||ra(n,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&ra(n,""+a);break;case"className":Ji(n,"class",a);break;case"tabIndex":Ji(n,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Ji(n,t,a);break;case"style":bu(n,a,l);break;case"data":if(e!=="object"){Ji(n,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||t!=="href")){n.removeAttribute(t);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){n.removeAttribute(t);break}a=$i(""+a),n.setAttribute(t,a);break;case"action":case"formAction":if(typeof a=="function"){n.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(t==="formAction"?(e!=="input"&&bn(n,e,"name",i.name,i,null),bn(n,e,"formEncType",i.formEncType,i,null),bn(n,e,"formMethod",i.formMethod,i,null),bn(n,e,"formTarget",i.formTarget,i,null)):(bn(n,e,"encType",i.encType,i,null),bn(n,e,"method",i.method,i,null),bn(n,e,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){n.removeAttribute(t);break}a=$i(""+a),n.setAttribute(t,a);break;case"onClick":a!=null&&(n.onclick=He);break;case"onScroll":a!=null&&rn("scroll",n);break;case"onScrollEnd":a!=null&&rn("scrollend",n);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(t=a.__html,t!=null){if(i.children!=null)throw Error(u(60));n.innerHTML=t}}break;case"multiple":n.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":n.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){n.removeAttribute("xlink:href");break}t=$i(""+a),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?n.setAttribute(t,""+a):n.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?n.setAttribute(t,""):n.removeAttribute(t);break;case"capture":case"download":a===!0?n.setAttribute(t,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?n.setAttribute(t,a):n.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?n.setAttribute(t,a):n.removeAttribute(t);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?n.removeAttribute(t):n.setAttribute(t,a);break;case"popover":rn("beforetoggle",n),rn("toggle",n),Ki(n,"popover",a);break;case"xlinkActuate":Ie(n,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Ie(n,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Ie(n,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Ie(n,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Ie(n,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Ie(n,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Ie(n,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Ie(n,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Ie(n,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Ki(n,"is",a);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=op.get(t)||t,Ki(n,t,a))}}function po(n,e,t,a,i,l){switch(t){case"style":bu(n,a,l);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(t=a.__html,t!=null){if(i.children!=null)throw Error(u(60));n.innerHTML=t}}break;case"children":typeof a=="string"?ra(n,a):(typeof a=="number"||typeof a=="bigint")&&ra(n,""+a);break;case"onScroll":a!=null&&rn("scroll",n);break;case"onScrollEnd":a!=null&&rn("scrollend",n);break;case"onClick":a!=null&&(n.onclick=He);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!cu.hasOwnProperty(t))n:{if(t[0]==="o"&&t[1]==="n"&&(i=t.endsWith("Capture"),e=t.slice(2,i?t.length-7:void 0),l=n[ee]||null,l=l!=null?l[t]:null,typeof l=="function"&&n.removeEventListener(e,l,i),typeof a=="function")){typeof l!="function"&&l!==null&&(t in n?n[t]=null:n.hasAttribute(t)&&n.removeAttribute(t)),n.addEventListener(e,a,i);break n}t in n?n[t]=a:a===!0?n.setAttribute(t,""):Ki(n,t,a)}}}function Jn(n,e,t){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":rn("error",n),rn("load",n);var a=!1,i=!1,l;for(l in t)if(t.hasOwnProperty(l)){var s=t[l];if(s!=null)switch(l){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,e));default:bn(n,e,l,s,t,null)}}i&&bn(n,e,"srcSet",t.srcSet,t,null),a&&bn(n,e,"src",t.src,t,null);return;case"input":rn("invalid",n);var c=l=s=i=null,p=null,N=null;for(a in t)if(t.hasOwnProperty(a)){var T=t[a];if(T!=null)switch(a){case"name":i=T;break;case"type":s=T;break;case"checked":p=T;break;case"defaultChecked":N=T;break;case"value":l=T;break;case"defaultValue":c=T;break;case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(u(137,e));break;default:bn(n,e,a,T,t,null)}}vu(n,l,c,p,N,s,i,!1);return;case"select":rn("invalid",n),a=s=l=null;for(i in t)if(t.hasOwnProperty(i)&&(c=t[i],c!=null))switch(i){case"value":l=c;break;case"defaultValue":s=c;break;case"multiple":a=c;default:bn(n,e,i,c,t,null)}e=l,t=s,n.multiple=!!a,e!=null?sa(n,!!a,e,!1):t!=null&&sa(n,!!a,t,!0);return;case"textarea":rn("invalid",n),l=i=a=null;for(s in t)if(t.hasOwnProperty(s)&&(c=t[s],c!=null))switch(s){case"value":a=c;break;case"defaultValue":i=c;break;case"children":l=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(u(91));break;default:bn(n,e,s,c,t,null)}gu(n,a,i,l);return;case"option":for(p in t)if(t.hasOwnProperty(p)&&(a=t[p],a!=null))switch(p){case"selected":n.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:bn(n,e,p,a,t,null)}return;case"dialog":rn("beforetoggle",n),rn("toggle",n),rn("cancel",n),rn("close",n);break;case"iframe":case"object":rn("load",n);break;case"video":case"audio":for(a=0;a<Ei.length;a++)rn(Ei[a],n);break;case"image":rn("error",n),rn("load",n);break;case"details":rn("toggle",n);break;case"embed":case"source":case"link":rn("error",n),rn("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(N in t)if(t.hasOwnProperty(N)&&(a=t[N],a!=null))switch(N){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,e));default:bn(n,e,N,a,t,null)}return;default:if(Os(e)){for(T in t)t.hasOwnProperty(T)&&(a=t[T],a!==void 0&&po(n,e,T,a,t,void 0));return}}for(c in t)t.hasOwnProperty(c)&&(a=t[c],a!=null&&bn(n,e,c,a,t,null))}function R0(n,e,t,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,l=null,s=null,c=null,p=null,N=null,T=null;for(O in t){var L=t[O];if(t.hasOwnProperty(O)&&L!=null)switch(O){case"checked":break;case"value":break;case"defaultValue":p=L;default:a.hasOwnProperty(O)||bn(n,e,O,null,a,L)}}for(var j in a){var O=a[j];if(L=t[j],a.hasOwnProperty(j)&&(O!=null||L!=null))switch(j){case"type":l=O;break;case"name":i=O;break;case"checked":N=O;break;case"defaultChecked":T=O;break;case"value":s=O;break;case"defaultValue":c=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(u(137,e));break;default:O!==L&&bn(n,e,j,O,a,L)}}Es(n,s,c,p,N,T,l,i);return;case"select":O=s=c=j=null;for(l in t)if(p=t[l],t.hasOwnProperty(l)&&p!=null)switch(l){case"value":break;case"multiple":O=p;default:a.hasOwnProperty(l)||bn(n,e,l,null,a,p)}for(i in a)if(l=a[i],p=t[i],a.hasOwnProperty(i)&&(l!=null||p!=null))switch(i){case"value":j=l;break;case"defaultValue":c=l;break;case"multiple":s=l;default:l!==p&&bn(n,e,i,l,a,p)}e=c,t=s,a=O,j!=null?sa(n,!!t,j,!1):!!a!=!!t&&(e!=null?sa(n,!!t,e,!0):sa(n,!!t,t?[]:"",!1));return;case"textarea":O=j=null;for(c in t)if(i=t[c],t.hasOwnProperty(c)&&i!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:bn(n,e,c,null,a,i)}for(s in a)if(i=a[s],l=t[s],a.hasOwnProperty(s)&&(i!=null||l!=null))switch(s){case"value":j=i;break;case"defaultValue":O=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(u(91));break;default:i!==l&&bn(n,e,s,i,a,l)}hu(n,j,O);return;case"option":for(var G in t)if(j=t[G],t.hasOwnProperty(G)&&j!=null&&!a.hasOwnProperty(G))switch(G){case"selected":n.selected=!1;break;default:bn(n,e,G,null,a,j)}for(p in a)if(j=a[p],O=t[p],a.hasOwnProperty(p)&&j!==O&&(j!=null||O!=null))switch(p){case"selected":n.selected=j&&typeof j!="function"&&typeof j!="symbol";break;default:bn(n,e,p,j,a,O)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var K in t)j=t[K],t.hasOwnProperty(K)&&j!=null&&!a.hasOwnProperty(K)&&bn(n,e,K,null,a,j);for(N in a)if(j=a[N],O=t[N],a.hasOwnProperty(N)&&j!==O&&(j!=null||O!=null))switch(N){case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(u(137,e));break;default:bn(n,e,N,j,a,O)}return;default:if(Os(e)){for(var yn in t)j=t[yn],t.hasOwnProperty(yn)&&j!==void 0&&!a.hasOwnProperty(yn)&&po(n,e,yn,void 0,a,j);for(T in a)j=a[T],O=t[T],!a.hasOwnProperty(T)||j===O||j===void 0&&O===void 0||po(n,e,T,j,a,O);return}}for(var S in t)j=t[S],t.hasOwnProperty(S)&&j!=null&&!a.hasOwnProperty(S)&&bn(n,e,S,null,a,j);for(L in a)j=a[L],O=t[L],!a.hasOwnProperty(L)||j===O||j==null&&O==null||bn(n,e,L,j,a,O)}function ym(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function U0(){if(typeof performance.getEntriesByType=="function"){for(var n=0,e=0,t=performance.getEntriesByType("resource"),a=0;a<t.length;a++){var i=t[a],l=i.transferSize,s=i.initiatorType,c=i.duration;if(l&&c&&ym(s)){for(s=0,c=i.responseEnd,a+=1;a<t.length;a++){var p=t[a],N=p.startTime;if(N>c)break;var T=p.transferSize,L=p.initiatorType;T&&ym(L)&&(p=p.responseEnd,s+=T*(p<c?1:(c-N)/(p-N)))}if(--a,e+=8*(l+s)/(i.duration/1e3),n++,10<n)break}}if(0<n)return e/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var vo=null,ho=null;function Xl(n){return n.nodeType===9?n:n.ownerDocument}function Sm(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Cm(n,e){if(n===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&e==="foreignObject"?0:n}function go(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var xo=null;function q0(){var n=window.event;return n&&n.type==="popstate"?n===xo?!1:(xo=n,!0):(xo=null,!1)}var Nm=typeof setTimeout=="function"?setTimeout:void 0,B0=typeof clearTimeout=="function"?clearTimeout:void 0,jm=typeof Promise=="function"?Promise:void 0,I0=typeof queueMicrotask=="function"?queueMicrotask:typeof jm<"u"?function(n){return jm.resolve(null).then(n).catch(H0)}:Nm;function H0(n){setTimeout(function(){throw n})}function Mt(n){return n==="head"}function Em(n,e){var t=e,a=0;do{var i=t.nextSibling;if(n.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"||t==="/&"){if(a===0){n.removeChild(i),Ba(e);return}a--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")a++;else if(t==="html")Oi(n.ownerDocument.documentElement);else if(t==="head"){t=n.ownerDocument.head,Oi(t);for(var l=t.firstChild;l;){var s=l.nextSibling,c=l.nodeName;l[Va]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&l.rel.toLowerCase()==="stylesheet"||t.removeChild(l),l=s}}else t==="body"&&Oi(n.ownerDocument.body);t=i}while(t);Ba(e)}function Mm(n,e){var t=n;n=0;do{var a=t.nextSibling;if(t.nodeType===1?e?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(e?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(n===0)break;n--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||n++;t=a}while(t)}function bo(n){var e=n.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var t=e;switch(e=e.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":bo(t),Ns(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}n.removeChild(t)}}function G0(n,e,t,a){for(;n.nodeType===1;){var i=t;if(n.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(a){if(!n[Va])switch(e){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(l=n.getAttribute("rel"),l==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(l!==i.rel||n.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||n.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||n.getAttribute("title")!==(i.title==null?null:i.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(l=n.getAttribute("src"),(l!==(i.src==null?null:i.src)||n.getAttribute("type")!==(i.type==null?null:i.type)||n.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&l&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(e==="input"&&n.type==="hidden"){var l=i.name==null?null:""+i.name;if(i.type==="hidden"&&n.getAttribute("name")===l)return n}else return n;if(n=Me(n.nextSibling),n===null)break}return null}function k0(n,e,t){if(e==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!t||(n=Me(n.nextSibling),n===null))return null;return n}function Om(n,e){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!e||(n=Me(n.nextSibling),n===null))return null;return n}function yo(n){return n.data==="$?"||n.data==="$~"}function So(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function Y0(n,e){var t=n.ownerDocument;if(n.data==="$~")n._reactRetry=e;else if(n.data!=="$?"||t.readyState!=="loading")e();else{var a=function(){e(),t.removeEventListener("DOMContentLoaded",a)};t.addEventListener("DOMContentLoaded",a),n._reactRetry=a}}function Me(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return n}var Co=null;function Am(n){n=n.nextSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"||t==="/&"){if(e===0)return Me(n.nextSibling);e--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||e++}n=n.nextSibling}return null}function _m(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(e===0)return n;e--}else t!=="/$"&&t!=="/&"||e++}n=n.previousSibling}return null}function Tm(n,e,t){switch(e=Xl(t),n){case"html":if(n=e.documentElement,!n)throw Error(u(452));return n;case"head":if(n=e.head,!n)throw Error(u(453));return n;case"body":if(n=e.body,!n)throw Error(u(454));return n;default:throw Error(u(451))}}function Oi(n){for(var e=n.attributes;e.length;)n.removeAttributeNode(e[0]);Ns(n)}var Oe=new Map,wm=new Set;function Zl(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var tt=B.d;B.d={f:Q0,r:V0,D:X0,C:Z0,L:K0,m:J0,X:$0,S:F0,M:W0};function Q0(){var n=tt.f(),e=Bl();return n||e}function V0(n){var e=aa(n);e!==null&&e.tag===5&&e.type==="form"?Kc(e):tt.r(n)}var Ra=typeof document>"u"?null:document;function zm(n,e,t){var a=Ra;if(a&&typeof e=="string"&&e){var i=be(e);i='link[rel="'+n+'"][href="'+i+'"]',typeof t=="string"&&(i+='[crossorigin="'+t+'"]'),wm.has(i)||(wm.add(i),n={rel:n,crossOrigin:t,href:e},a.querySelector(i)===null&&(e=a.createElement("link"),Jn(e,"link",n),Gn(e),a.head.appendChild(e)))}}function X0(n){tt.D(n),zm("dns-prefetch",n,null)}function Z0(n,e){tt.C(n,e),zm("preconnect",n,e)}function K0(n,e,t){tt.L(n,e,t);var a=Ra;if(a&&n&&e){var i='link[rel="preload"][as="'+be(e)+'"]';e==="image"&&t&&t.imageSrcSet?(i+='[imagesrcset="'+be(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(i+='[imagesizes="'+be(t.imageSizes)+'"]')):i+='[href="'+be(n)+'"]';var l=i;switch(e){case"style":l=Ua(n);break;case"script":l=qa(n)}Oe.has(l)||(n=E({rel:"preload",href:e==="image"&&t&&t.imageSrcSet?void 0:n,as:e},t),Oe.set(l,n),a.querySelector(i)!==null||e==="style"&&a.querySelector(Ai(l))||e==="script"&&a.querySelector(_i(l))||(e=a.createElement("link"),Jn(e,"link",n),Gn(e),a.head.appendChild(e)))}}function J0(n,e){tt.m(n,e);var t=Ra;if(t&&n){var a=e&&typeof e.as=="string"?e.as:"script",i='link[rel="modulepreload"][as="'+be(a)+'"][href="'+be(n)+'"]',l=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=qa(n)}if(!Oe.has(l)&&(n=E({rel:"modulepreload",href:n},e),Oe.set(l,n),t.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(_i(l)))return}a=t.createElement("link"),Jn(a,"link",n),Gn(a),t.head.appendChild(a)}}}function F0(n,e,t){tt.S(n,e,t);var a=Ra;if(a&&n){var i=ia(a).hoistableStyles,l=Ua(n);e=e||"default";var s=i.get(l);if(!s){var c={loading:0,preload:null};if(s=a.querySelector(Ai(l)))c.loading=5;else{n=E({rel:"stylesheet",href:n,"data-precedence":e},t),(t=Oe.get(l))&&No(n,t);var p=s=a.createElement("link");Gn(p),Jn(p,"link",n),p._p=new Promise(function(N,T){p.onload=N,p.onerror=T}),p.addEventListener("load",function(){c.loading|=1}),p.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Kl(s,e,a)}s={type:"stylesheet",instance:s,count:1,state:c},i.set(l,s)}}}function $0(n,e){tt.X(n,e);var t=Ra;if(t&&n){var a=ia(t).hoistableScripts,i=qa(n),l=a.get(i);l||(l=t.querySelector(_i(i)),l||(n=E({src:n,async:!0},e),(e=Oe.get(i))&&jo(n,e),l=t.createElement("script"),Gn(l),Jn(l,"link",n),t.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},a.set(i,l))}}function W0(n,e){tt.M(n,e);var t=Ra;if(t&&n){var a=ia(t).hoistableScripts,i=qa(n),l=a.get(i);l||(l=t.querySelector(_i(i)),l||(n=E({src:n,async:!0,type:"module"},e),(e=Oe.get(i))&&jo(n,e),l=t.createElement("script"),Gn(l),Jn(l,"link",n),t.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},a.set(i,l))}}function Lm(n,e,t,a){var i=(i=ln.current)?Zl(i):null;if(!i)throw Error(u(446));switch(n){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(e=Ua(t.href),t=ia(i).hoistableStyles,a=t.get(e),a||(a={type:"style",instance:null,count:0,state:null},t.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){n=Ua(t.href);var l=ia(i).hoistableStyles,s=l.get(n);if(s||(i=i.ownerDocument||i,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(n,s),(l=i.querySelector(Ai(n)))&&!l._p&&(s.instance=l,s.state.loading=5),Oe.has(n)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},Oe.set(n,t),l||P0(i,n,t,s.state))),e&&a===null)throw Error(u(528,""));return s}if(e&&a!==null)throw Error(u(529,""));return null;case"script":return e=t.async,t=t.src,typeof t=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=qa(t),t=ia(i).hoistableScripts,a=t.get(e),a||(a={type:"script",instance:null,count:0,state:null},t.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,n))}}function Ua(n){return'href="'+be(n)+'"'}function Ai(n){return'link[rel="stylesheet"]['+n+"]"}function Dm(n){return E({},n,{"data-precedence":n.precedence,precedence:null})}function P0(n,e,t,a){n.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=n.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),Jn(e,"link",t),Gn(e),n.head.appendChild(e))}function qa(n){return'[src="'+be(n)+'"]'}function _i(n){return"script[async]"+n}function Rm(n,e,t){if(e.count++,e.instance===null)switch(e.type){case"style":var a=n.querySelector('style[data-href~="'+be(t.href)+'"]');if(a)return e.instance=a,Gn(a),a;var i=E({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return a=(n.ownerDocument||n).createElement("style"),Gn(a),Jn(a,"style",i),Kl(a,t.precedence,n),e.instance=a;case"stylesheet":i=Ua(t.href);var l=n.querySelector(Ai(i));if(l)return e.state.loading|=4,e.instance=l,Gn(l),l;a=Dm(t),(i=Oe.get(i))&&No(a,i),l=(n.ownerDocument||n).createElement("link"),Gn(l);var s=l;return s._p=new Promise(function(c,p){s.onload=c,s.onerror=p}),Jn(l,"link",a),e.state.loading|=4,Kl(l,t.precedence,n),e.instance=l;case"script":return l=qa(t.src),(i=n.querySelector(_i(l)))?(e.instance=i,Gn(i),i):(a=t,(i=Oe.get(l))&&(a=E({},t),jo(a,i)),n=n.ownerDocument||n,i=n.createElement("script"),Gn(i),Jn(i,"link",a),n.head.appendChild(i),e.instance=i);case"void":return null;default:throw Error(u(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,Kl(a,t.precedence,n));return e.instance}function Kl(n,e,t){for(var a=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,l=i,s=0;s<a.length;s++){var c=a[s];if(c.dataset.precedence===e)l=c;else if(l!==i)break}l?l.parentNode.insertBefore(n,l.nextSibling):(e=t.nodeType===9?t.head:t,e.insertBefore(n,e.firstChild))}function No(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.title==null&&(n.title=e.title)}function jo(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.integrity==null&&(n.integrity=e.integrity)}var Jl=null;function Um(n,e,t){if(Jl===null){var a=new Map,i=Jl=new Map;i.set(t,a)}else i=Jl,a=i.get(t),a||(a=new Map,i.set(t,a));if(a.has(n))return a;for(a.set(n,null),t=t.getElementsByTagName(n),i=0;i<t.length;i++){var l=t[i];if(!(l[Va]||l[Vn]||n==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var s=l.getAttribute(e)||"";s=n+s;var c=a.get(s);c?c.push(l):a.set(s,[l])}}return a}function qm(n,e,t){n=n.ownerDocument||n,n.head.insertBefore(t,e==="title"?n.querySelector("head > title"):null)}function nv(n,e,t){if(t===1||e.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return n=e.disabled,typeof e.precedence=="string"&&n==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Bm(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function ev(n,e,t,a){if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=Ua(a.href),l=e.querySelector(Ai(i));if(l){e=l._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(n.count++,n=Fl.bind(n),e.then(n,n)),t.state.loading|=4,t.instance=l,Gn(l);return}l=e.ownerDocument||e,a=Dm(a),(i=Oe.get(i))&&No(a,i),l=l.createElement("link"),Gn(l);var s=l;s._p=new Promise(function(c,p){s.onload=c,s.onerror=p}),Jn(l,"link",a),t.instance=l}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(n.count++,t=Fl.bind(n),e.addEventListener("load",t),e.addEventListener("error",t))}}var Eo=0;function tv(n,e){return n.stylesheets&&n.count===0&&Wl(n,n.stylesheets),0<n.count||0<n.imgCount?function(t){var a=setTimeout(function(){if(n.stylesheets&&Wl(n,n.stylesheets),n.unsuspend){var l=n.unsuspend;n.unsuspend=null,l()}},6e4+e);0<n.imgBytes&&Eo===0&&(Eo=62500*U0());var i=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&Wl(n,n.stylesheets),n.unsuspend)){var l=n.unsuspend;n.unsuspend=null,l()}},(n.imgBytes>Eo?50:800)+e);return n.unsuspend=t,function(){n.unsuspend=null,clearTimeout(a),clearTimeout(i)}}:null}function Fl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Wl(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var $l=null;function Wl(n,e){n.stylesheets=null,n.unsuspend!==null&&(n.count++,$l=new Map,e.forEach(av,n),$l=null,Fl.call(n))}function av(n,e){if(!(e.state.loading&4)){var t=$l.get(n);if(t)var a=t.get(null);else{t=new Map,$l.set(n,t);for(var i=n.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<i.length;l++){var s=i[l];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(t.set(s.dataset.precedence,s),a=s)}a&&t.set(null,a)}i=e.instance,s=i.getAttribute("data-precedence"),l=t.get(s)||a,l===a&&t.set(null,i),t.set(s,i),this.count++,a=Fl.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),l?l.parentNode.insertBefore(i,l.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(i,n.firstChild)),e.state.loading|=4}}var Ti={$$typeof:q,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function iv(n,e,t,a,i,l,s,c,p){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=bs(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bs(0),this.hiddenUpdates=bs(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=l,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=p,this.incompleteTransitions=new Map}function Im(n,e,t,a,i,l,s,c,p,N,T,L){return n=new iv(n,e,t,s,p,N,T,L,c),e=1,l===!0&&(e|=24),l=me(3,null,null,e),n.current=l,l.stateNode=n,e=ar(),e.refCount++,n.pooledCache=e,e.refCount++,l.memoizedState={element:a,isDehydrated:t,cache:e},rr(l),n}function Hm(n){return n?(n=pa,n):pa}function Gm(n,e,t,a,i,l){i=Hm(i),a.context===null?a.context=i:a.pendingContext=i,a=vt(e),a.payload={element:t},l=l===void 0?null:l,l!==null&&(a.callback=l),t=ht(n,a,e),t!==null&&(re(t,n,e),oi(t,n,e))}function km(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Mo(n,e){km(n,e),(n=n.alternate)&&km(n,e)}function Ym(n){if(n.tag===13||n.tag===31){var e=Gt(n,67108864);e!==null&&re(e,n,67108864),Mo(n,67108864)}}function Qm(n){if(n.tag===13||n.tag===31){var e=ge();e=ys(e);var t=Gt(n,e);t!==null&&re(t,n,e),Mo(n,e)}}var Pl=!0;function lv(n,e,t,a){var i=w.T;w.T=null;var l=B.p;try{B.p=2,Oo(n,e,t,a)}finally{B.p=l,w.T=i}}function sv(n,e,t,a){var i=w.T;w.T=null;var l=B.p;try{B.p=8,Oo(n,e,t,a)}finally{B.p=l,w.T=i}}function Oo(n,e,t,a){if(Pl){var i=Ao(a);if(i===null)fo(n,e,a,ns,t),Xm(n,a);else if(ov(i,n,e,t,a))a.stopPropagation();else if(Xm(n,a),e&4&&-1<rv.indexOf(n)){for(;i!==null;){var l=aa(i);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var s=Ut(l.pendingLanes);if(s!==0){var c=l;for(c.pendingLanes|=2,c.entangledLanes|=2;s;){var p=1<<31-ce(s);c.entanglements[1]|=p,s&=~p}qe(l),(fn&6)===0&&(Ul=oe()+500,ji(0))}}break;case 31:case 13:c=Gt(l,2),c!==null&&re(c,l,2),Bl(),Mo(l,2)}if(l=Ao(a),l===null&&fo(n,e,a,ns,t),l===i)break;i=l}i!==null&&a.stopPropagation()}else fo(n,e,a,null,t)}}function Ao(n){return n=_s(n),_o(n)}var ns=null;function _o(n){if(ns=null,n=ta(n),n!==null){var e=f(n);if(e===null)n=null;else{var t=e.tag;if(t===13){if(n=g(e),n!==null)return n;n=null}else if(t===31){if(n=M(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null)}}return ns=n,null}function Vm(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Xf()){case Po:return 2;case nu:return 8;case Yi:case Zf:return 32;case eu:return 268435456;default:return 32}default:return 32}}var To=!1,Ot=null,At=null,_t=null,wi=new Map,zi=new Map,Tt=[],rv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Xm(n,e){switch(n){case"focusin":case"focusout":Ot=null;break;case"dragenter":case"dragleave":At=null;break;case"mouseover":case"mouseout":_t=null;break;case"pointerover":case"pointerout":wi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":zi.delete(e.pointerId)}}function Li(n,e,t,a,i,l){return n===null||n.nativeEvent!==l?(n={blockedOn:e,domEventName:t,eventSystemFlags:a,nativeEvent:l,targetContainers:[i]},e!==null&&(e=aa(e),e!==null&&Ym(e)),n):(n.eventSystemFlags|=a,e=n.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),n)}function ov(n,e,t,a,i){switch(e){case"focusin":return Ot=Li(Ot,n,e,t,a,i),!0;case"dragenter":return At=Li(At,n,e,t,a,i),!0;case"mouseover":return _t=Li(_t,n,e,t,a,i),!0;case"pointerover":var l=i.pointerId;return wi.set(l,Li(wi.get(l)||null,n,e,t,a,i)),!0;case"gotpointercapture":return l=i.pointerId,zi.set(l,Li(zi.get(l)||null,n,e,t,a,i)),!0}return!1}function Zm(n){var e=ta(n.target);if(e!==null){var t=f(e);if(t!==null){if(e=t.tag,e===13){if(e=g(t),e!==null){n.blockedOn=e,ru(n.priority,function(){Qm(t)});return}}else if(e===31){if(e=M(t),e!==null){n.blockedOn=e,ru(n.priority,function(){Qm(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function es(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Ao(n.nativeEvent);if(t===null){t=n.nativeEvent;var a=new t.constructor(t.type,t);As=a,t.target.dispatchEvent(a),As=null}else return e=aa(t),e!==null&&Ym(e),n.blockedOn=t,!1;e.shift()}return!0}function Km(n,e,t){es(n)&&t.delete(e)}function uv(){To=!1,Ot!==null&&es(Ot)&&(Ot=null),At!==null&&es(At)&&(At=null),_t!==null&&es(_t)&&(_t=null),wi.forEach(Km),zi.forEach(Km)}function ts(n,e){n.blockedOn===e&&(n.blockedOn=null,To||(To=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,uv)))}var as=null;function Jm(n){as!==n&&(as=n,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){as===n&&(as=null);for(var e=0;e<n.length;e+=3){var t=n[e],a=n[e+1],i=n[e+2];if(typeof a!="function"){if(_o(a||t)===null)continue;break}var l=aa(t);l!==null&&(n.splice(e,3),e-=3,Or(l,{pending:!0,data:i,method:t.method,action:a},a,i))}}))}function Ba(n){function e(p){return ts(p,n)}Ot!==null&&ts(Ot,n),At!==null&&ts(At,n),_t!==null&&ts(_t,n),wi.forEach(e),zi.forEach(e);for(var t=0;t<Tt.length;t++){var a=Tt[t];a.blockedOn===n&&(a.blockedOn=null)}for(;0<Tt.length&&(t=Tt[0],t.blockedOn===null);)Zm(t),t.blockedOn===null&&Tt.shift();if(t=(n.ownerDocument||n).$$reactFormReplay,t!=null)for(a=0;a<t.length;a+=3){var i=t[a],l=t[a+1],s=i[ee]||null;if(typeof l=="function")s||Jm(t);else if(s){var c=null;if(l&&l.hasAttribute("formAction")){if(i=l,s=l[ee]||null)c=s.formAction;else if(_o(i)!==null)continue}else c=s.action;typeof c=="function"?t[a+1]=c:(t.splice(a,3),a-=3),Jm(t)}}}function Fm(){function n(l){l.canIntercept&&l.info==="react-transition"&&l.intercept({handler:function(){return new Promise(function(s){return i=s})},focusReset:"manual",scroll:"manual"})}function e(){i!==null&&(i(),i=null),a||setTimeout(t,20)}function t(){if(!a&&!navigation.transition){var l=navigation.currentEntry;l&&l.url!=null&&navigation.navigate(l.url,{state:l.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,i=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(t,100),function(){a=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),i!==null&&(i(),i=null)}}}function wo(n){this._internalRoot=n}is.prototype.render=wo.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(u(409));var t=e.current,a=ge();Gm(t,a,n,e,null,null)},is.prototype.unmount=wo.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Gm(n.current,2,null,n,null,null),Bl(),e[ea]=null}};function is(n){this._internalRoot=n}is.prototype.unstable_scheduleHydration=function(n){if(n){var e=su();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Tt.length&&e!==0&&e<Tt[t].priority;t++);Tt.splice(t,0,n),t===0&&Zm(n)}};var $m=m.version;if($m!=="19.2.1")throw Error(u(527,$m,"19.2.1"));B.findDOMNode=function(n){var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(u(188)):(n=Object.keys(n).join(","),Error(u(268,n)));return n=v(e),n=n!==null?_(n):null,n=n===null?null:n.stateNode,n};var cv={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:w,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ls=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ls.isDisabled&&ls.supportsFiber)try{ka=ls.inject(cv),ue=ls}catch{}}return Ri.createRoot=function(n,e){if(!h(n))throw Error(u(299));var t=!1,a="",i=id,l=ld,s=sd;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(l=e.onCaughtError),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Im(n,1,!1,null,null,t,a,null,i,l,s,Fm),n[ea]=e.current,mo(n),new wo(e)},Ri.hydrateRoot=function(n,e,t){if(!h(n))throw Error(u(299));var a=!1,i="",l=id,s=ld,c=sd,p=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError),t.formState!==void 0&&(p=t.formState)),e=Im(n,1,!0,e,t??null,a,i,p,l,s,c,Fm),e.context=Hm(null),t=e.current,a=ge(),a=ys(a),i=vt(a),i.callback=null,ht(t,i,a),t=a,e.current.lanes=t,Qa(e,t),qe(e),n[ea]=e.current,mo(n),new is(e)},Ri.version="19.2.1",Ri}var of;function Sv(){if(of)return Do.exports;of=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(m){console.error(m)}}return r(),Do.exports=yv(),Do.exports}var Cv=Sv();const Nv=yf(Cv);/**
 * react-router v7.10.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var uf="popstate";function jv(r={}){function m(h,f){let{pathname:g="/",search:M="",hash:y=""}=na(h.location.hash.substring(1));return!g.startsWith("/")&&!g.startsWith(".")&&(g="/"+g),Go("",{pathname:g,search:M,hash:y},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function d(h,f){let g=h.document.querySelector("base"),M="";if(g&&g.getAttribute("href")){let y=h.location.href,v=y.indexOf("#");M=v===-1?y:y.slice(0,v)}return M+"#"+(typeof f=="string"?f:qi(f))}function u(h,f){Ae(h.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(f)})`)}return Mv(m,d,u,r)}function An(r,m){if(r===!1||r===null||typeof r>"u")throw new Error(m)}function Ae(r,m){if(!r){typeof console<"u"&&console.warn(m);try{throw new Error(m)}catch{}}}function Ev(){return Math.random().toString(36).substring(2,10)}function cf(r,m){return{usr:r.state,key:r.key,idx:m}}function Go(r,m,d=null,u){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof m=="string"?na(m):m,state:d,key:m&&m.key||u||Ev()}}function qi({pathname:r="/",search:m="",hash:d=""}){return m&&m!=="?"&&(r+=m.charAt(0)==="?"?m:"?"+m),d&&d!=="#"&&(r+=d.charAt(0)==="#"?d:"#"+d),r}function na(r){let m={};if(r){let d=r.indexOf("#");d>=0&&(m.hash=r.substring(d),r=r.substring(0,d));let u=r.indexOf("?");u>=0&&(m.search=r.substring(u),r=r.substring(0,u)),r&&(m.pathname=r)}return m}function Mv(r,m,d,u={}){let{window:h=document.defaultView,v5Compat:f=!1}=u,g=h.history,M="POP",y=null,v=_();v==null&&(v=0,g.replaceState({...g.state,idx:v},""));function _(){return(g.state||{idx:null}).idx}function E(){M="POP";let H=_(),Q=H==null?null:H-v;v=H,y&&y({action:M,location:Z.location,delta:Q})}function U(H,Q){M="PUSH";let en=Go(Z.location,H,Q);d&&d(en,H),v=_()+1;let q=cf(en,v),J=Z.createHref(en);try{g.pushState(q,"",J)}catch(jn){if(jn instanceof DOMException&&jn.name==="DataCloneError")throw jn;h.location.assign(J)}f&&y&&y({action:M,location:Z.location,delta:1})}function R(H,Q){M="REPLACE";let en=Go(Z.location,H,Q);d&&d(en,H),v=_();let q=cf(en,v),J=Z.createHref(en);g.replaceState(q,"",J),f&&y&&y({action:M,location:Z.location,delta:0})}function k(H){return Ov(H)}let Z={get action(){return M},get location(){return r(h,g)},listen(H){if(y)throw new Error("A history only accepts one active listener");return h.addEventListener(uf,E),y=H,()=>{h.removeEventListener(uf,E),y=null}},createHref(H){return m(h,H)},createURL:k,encodeLocation(H){let Q=k(H);return{pathname:Q.pathname,search:Q.search,hash:Q.hash}},push:U,replace:R,go(H){return g.go(H)}};return Z}function Ov(r,m=!1){let d="http://localhost";typeof window<"u"&&(d=window.location.origin!=="null"?window.location.origin:window.location.href),An(d,"No window.location.(origin|href) available to create URL");let u=typeof r=="string"?r:qi(r);return u=u.replace(/ $/,"%20"),!m&&u.startsWith("//")&&(u=d+u),new URL(u,d)}function Sf(r,m,d="/"){return Av(r,m,d,!1)}function Av(r,m,d,u){let h=typeof m=="string"?na(m):m,f=lt(h.pathname||"/",d);if(f==null)return null;let g=Cf(r);_v(g);let M=null;for(let y=0;M==null&&y<g.length;++y){let v=Hv(f);M=Bv(g[y],v,u)}return M}function Cf(r,m=[],d=[],u="",h=!1){let f=(g,M,y=h,v)=>{let _={relativePath:v===void 0?g.path||"":v,caseSensitive:g.caseSensitive===!0,childrenIndex:M,route:g};if(_.relativePath.startsWith("/")){if(!_.relativePath.startsWith(u)&&y)return;An(_.relativePath.startsWith(u),`Absolute route path "${_.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),_.relativePath=_.relativePath.slice(u.length)}let E=it([u,_.relativePath]),U=d.concat(_);g.children&&g.children.length>0&&(An(g.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${E}".`),Cf(g.children,m,U,E,y)),!(g.path==null&&!g.index)&&m.push({path:E,score:Uv(E,g.index),routesMeta:U})};return r.forEach((g,M)=>{var y;if(g.path===""||!((y=g.path)!=null&&y.includes("?")))f(g,M);else for(let v of Nf(g.path))f(g,M,!0,v)}),m}function Nf(r){let m=r.split("/");if(m.length===0)return[];let[d,...u]=m,h=d.endsWith("?"),f=d.replace(/\?$/,"");if(u.length===0)return h?[f,""]:[f];let g=Nf(u.join("/")),M=[];return M.push(...g.map(y=>y===""?f:[f,y].join("/"))),h&&M.push(...g),M.map(y=>r.startsWith("/")&&y===""?"/":y)}function _v(r){r.sort((m,d)=>m.score!==d.score?d.score-m.score:qv(m.routesMeta.map(u=>u.childrenIndex),d.routesMeta.map(u=>u.childrenIndex)))}var Tv=/^:[\w-]+$/,wv=3,zv=2,Lv=1,Dv=10,Rv=-2,df=r=>r==="*";function Uv(r,m){let d=r.split("/"),u=d.length;return d.some(df)&&(u+=Rv),m&&(u+=zv),d.filter(h=>!df(h)).reduce((h,f)=>h+(Tv.test(f)?wv:f===""?Lv:Dv),u)}function qv(r,m){return r.length===m.length&&r.slice(0,-1).every((u,h)=>u===m[h])?r[r.length-1]-m[m.length-1]:0}function Bv(r,m,d=!1){let{routesMeta:u}=r,h={},f="/",g=[];for(let M=0;M<u.length;++M){let y=u[M],v=M===u.length-1,_=f==="/"?m:m.slice(f.length)||"/",E=us({path:y.relativePath,caseSensitive:y.caseSensitive,end:v},_),U=y.route;if(!E&&v&&d&&!u[u.length-1].route.index&&(E=us({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},_)),!E)return null;Object.assign(h,E.params),g.push({params:h,pathname:it([f,E.pathname]),pathnameBase:Vv(it([f,E.pathnameBase])),route:U}),E.pathnameBase!=="/"&&(f=it([f,E.pathnameBase]))}return g}function us(r,m){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[d,u]=Iv(r.path,r.caseSensitive,r.end),h=m.match(d);if(!h)return null;let f=h[0],g=f.replace(/(.)\/+$/,"$1"),M=h.slice(1);return{params:u.reduce((v,{paramName:_,isOptional:E},U)=>{if(_==="*"){let k=M[U]||"";g=f.slice(0,f.length-k.length).replace(/(.)\/+$/,"$1")}const R=M[U];return E&&!R?v[_]=void 0:v[_]=(R||"").replace(/%2F/g,"/"),v},{}),pathname:f,pathnameBase:g,pattern:r}}function Iv(r,m=!1,d=!0){Ae(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let u=[],h="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(g,M,y)=>(u.push({paramName:M,isOptional:y!=null}),y?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(u.push({paramName:"*"}),h+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):d?h+="\\/*$":r!==""&&r!=="/"&&(h+="(?:(?=\\/|$))"),[new RegExp(h,m?void 0:"i"),u]}function Hv(r){try{return r.split("/").map(m=>decodeURIComponent(m).replace(/\//g,"%2F")).join("/")}catch(m){return Ae(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${m}).`),r}}function lt(r,m){if(m==="/")return r;if(!r.toLowerCase().startsWith(m.toLowerCase()))return null;let d=m.endsWith("/")?m.length-1:m.length,u=r.charAt(d);return u&&u!=="/"?null:r.slice(d)||"/"}var Gv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,kv=r=>Gv.test(r);function Yv(r,m="/"){let{pathname:d,search:u="",hash:h=""}=typeof r=="string"?na(r):r,f;if(d)if(kv(d))f=d;else{if(d.includes("//")){let g=d;d=d.replace(/\/\/+/g,"/"),Ae(!1,`Pathnames cannot have embedded double slashes - normalizing ${g} -> ${d}`)}d.startsWith("/")?f=mf(d.substring(1),"/"):f=mf(d,m)}else f=m;return{pathname:f,search:Xv(u),hash:Zv(h)}}function mf(r,m){let d=m.replace(/\/+$/,"").split("/");return r.split("/").forEach(h=>{h===".."?d.length>1&&d.pop():h!=="."&&d.push(h)}),d.length>1?d.join("/"):"/"}function Bo(r,m,d,u){return`Cannot include a '${r}' character in a manually specified \`to.${m}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${d}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Qv(r){return r.filter((m,d)=>d===0||m.route.path&&m.route.path.length>0)}function jf(r){let m=Qv(r);return m.map((d,u)=>u===m.length-1?d.pathname:d.pathnameBase)}function Ef(r,m,d,u=!1){let h;typeof r=="string"?h=na(r):(h={...r},An(!h.pathname||!h.pathname.includes("?"),Bo("?","pathname","search",h)),An(!h.pathname||!h.pathname.includes("#"),Bo("#","pathname","hash",h)),An(!h.search||!h.search.includes("#"),Bo("#","search","hash",h)));let f=r===""||h.pathname==="",g=f?"/":h.pathname,M;if(g==null)M=d;else{let E=m.length-1;if(!u&&g.startsWith("..")){let U=g.split("/");for(;U[0]==="..";)U.shift(),E-=1;h.pathname=U.join("/")}M=E>=0?m[E]:"/"}let y=Yv(h,M),v=g&&g!=="/"&&g.endsWith("/"),_=(f||g===".")&&d.endsWith("/");return!y.pathname.endsWith("/")&&(v||_)&&(y.pathname+="/"),y}var it=r=>r.join("/").replace(/\/\/+/g,"/"),Vv=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),Xv=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Zv=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function Kv(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function Jv(r){return r.map(m=>m.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Mf=["POST","PUT","PATCH","DELETE"];new Set(Mf);var Fv=["GET",...Mf];new Set(Fv);var Ha=A.createContext(null);Ha.displayName="DataRouter";var cs=A.createContext(null);cs.displayName="DataRouterState";A.createContext(!1);var Of=A.createContext({isTransitioning:!1});Of.displayName="ViewTransition";var $v=A.createContext(new Map);$v.displayName="Fetchers";var Wv=A.createContext(null);Wv.displayName="Await";var Le=A.createContext(null);Le.displayName="Navigation";var Ii=A.createContext(null);Ii.displayName="Location";var st=A.createContext({outlet:null,matches:[],isDataRoute:!1});st.displayName="Route";var Qo=A.createContext(null);Qo.displayName="RouteError";function Pv(r,{relative:m}={}){An(Hi(),"useHref() may be used only in the context of a <Router> component.");let{basename:d,navigator:u}=A.useContext(Le),{hash:h,pathname:f,search:g}=Gi(r,{relative:m}),M=f;return d!=="/"&&(M=f==="/"?d:it([d,f])),u.createHref({pathname:M,search:g,hash:h})}function Hi(){return A.useContext(Ii)!=null}function Lt(){return An(Hi(),"useLocation() may be used only in the context of a <Router> component."),A.useContext(Ii).location}var Af="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function _f(r){A.useContext(Le).static||A.useLayoutEffect(r)}function nh(){let{isDataRoute:r}=A.useContext(st);return r?fh():eh()}function eh(){An(Hi(),"useNavigate() may be used only in the context of a <Router> component.");let r=A.useContext(Ha),{basename:m,navigator:d}=A.useContext(Le),{matches:u}=A.useContext(st),{pathname:h}=Lt(),f=JSON.stringify(jf(u)),g=A.useRef(!1);return _f(()=>{g.current=!0}),A.useCallback((y,v={})=>{if(Ae(g.current,Af),!g.current)return;if(typeof y=="number"){d.go(y);return}let _=Ef(y,JSON.parse(f),h,v.relative==="path");r==null&&m!=="/"&&(_.pathname=_.pathname==="/"?m:it([m,_.pathname])),(v.replace?d.replace:d.push)(_,v.state,v)},[m,d,f,h,r])}A.createContext(null);function Gi(r,{relative:m}={}){let{matches:d}=A.useContext(st),{pathname:u}=Lt(),h=JSON.stringify(jf(d));return A.useMemo(()=>Ef(r,JSON.parse(h),u,m==="path"),[r,h,u,m])}function th(r,m){return Tf(r,m)}function Tf(r,m,d,u,h){var en;An(Hi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:f}=A.useContext(Le),{matches:g}=A.useContext(st),M=g[g.length-1],y=M?M.params:{},v=M?M.pathname:"/",_=M?M.pathnameBase:"/",E=M&&M.route;{let q=E&&E.path||"";wf(v,!E||q.endsWith("*")||q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${q}"> to <Route path="${q==="/"?"*":`${q}/*`}">.`)}let U=Lt(),R;if(m){let q=typeof m=="string"?na(m):m;An(_==="/"||((en=q.pathname)==null?void 0:en.startsWith(_)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${_}" but pathname "${q.pathname}" was given in the \`location\` prop.`),R=q}else R=U;let k=R.pathname||"/",Z=k;if(_!=="/"){let q=_.replace(/^\//,"").split("/");Z="/"+k.replace(/^\//,"").split("/").slice(q.length).join("/")}let H=Sf(r,{pathname:Z});Ae(E||H!=null,`No routes matched location "${R.pathname}${R.search}${R.hash}" `),Ae(H==null||H[H.length-1].route.element!==void 0||H[H.length-1].route.Component!==void 0||H[H.length-1].route.lazy!==void 0,`Matched leaf route at location "${R.pathname}${R.search}${R.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let Q=rh(H&&H.map(q=>Object.assign({},q,{params:Object.assign({},y,q.params),pathname:it([_,f.encodeLocation?f.encodeLocation(q.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:q.pathname]),pathnameBase:q.pathnameBase==="/"?_:it([_,f.encodeLocation?f.encodeLocation(q.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:q.pathnameBase])})),g,d,u,h);return m&&Q?A.createElement(Ii.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...R},navigationType:"POP"}},Q):Q}function ah(){let r=mh(),m=Kv(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),d=r instanceof Error?r.stack:null,u="rgba(200,200,200, 0.5)",h={padding:"0.5rem",backgroundColor:u},f={padding:"2px 4px",backgroundColor:u},g=null;return console.error("Error handled by React Router default ErrorBoundary:",r),g=A.createElement(A.Fragment,null,A.createElement("p",null,"💿 Hey developer 👋"),A.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",A.createElement("code",{style:f},"ErrorBoundary")," or"," ",A.createElement("code",{style:f},"errorElement")," prop on your route.")),A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},m),d?A.createElement("pre",{style:h},d):null,g)}var ih=A.createElement(ah,null),lh=class extends A.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,m){return m.location!==r.location||m.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:m.error,location:m.location,revalidation:r.revalidation||m.revalidation}}componentDidCatch(r,m){this.props.onError?this.props.onError(r,m):console.error("React Router caught the following error during render",r)}render(){return this.state.error!==void 0?A.createElement(st.Provider,{value:this.props.routeContext},A.createElement(Qo.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function sh({routeContext:r,match:m,children:d}){let u=A.useContext(Ha);return u&&u.static&&u.staticContext&&(m.route.errorElement||m.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=m.route.id),A.createElement(st.Provider,{value:r},d)}function rh(r,m=[],d=null,u=null,h=null){if(r==null){if(!d)return null;if(d.errors)r=d.matches;else if(m.length===0&&!d.initialized&&d.matches.length>0)r=d.matches;else return null}let f=r,g=d==null?void 0:d.errors;if(g!=null){let _=f.findIndex(E=>E.route.id&&(g==null?void 0:g[E.route.id])!==void 0);An(_>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(g).join(",")}`),f=f.slice(0,Math.min(f.length,_+1))}let M=!1,y=-1;if(d)for(let _=0;_<f.length;_++){let E=f[_];if((E.route.HydrateFallback||E.route.hydrateFallbackElement)&&(y=_),E.route.id){let{loaderData:U,errors:R}=d,k=E.route.loader&&!U.hasOwnProperty(E.route.id)&&(!R||R[E.route.id]===void 0);if(E.route.lazy||k){M=!0,y>=0?f=f.slice(0,y+1):f=[f[0]];break}}}let v=d&&u?(_,E)=>{var U,R;u(_,{location:d.location,params:((R=(U=d.matches)==null?void 0:U[0])==null?void 0:R.params)??{},unstable_pattern:Jv(d.matches),errorInfo:E})}:void 0;return f.reduceRight((_,E,U)=>{let R,k=!1,Z=null,H=null;d&&(R=g&&E.route.id?g[E.route.id]:void 0,Z=E.route.errorElement||ih,M&&(y<0&&U===0?(wf("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),k=!0,H=null):y===U&&(k=!0,H=E.route.hydrateFallbackElement||null)));let Q=m.concat(f.slice(0,U+1)),en=()=>{let q;return R?q=Z:k?q=H:E.route.Component?q=A.createElement(E.route.Component,null):E.route.element?q=E.route.element:q=_,A.createElement(sh,{match:E,routeContext:{outlet:_,matches:Q,isDataRoute:d!=null},children:q})};return d&&(E.route.ErrorBoundary||E.route.errorElement||U===0)?A.createElement(lh,{location:d.location,revalidation:d.revalidation,component:Z,error:R,children:en(),routeContext:{outlet:null,matches:Q,isDataRoute:!0},onError:v}):en()},null)}function Vo(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function oh(r){let m=A.useContext(Ha);return An(m,Vo(r)),m}function uh(r){let m=A.useContext(cs);return An(m,Vo(r)),m}function ch(r){let m=A.useContext(st);return An(m,Vo(r)),m}function Xo(r){let m=ch(r),d=m.matches[m.matches.length-1];return An(d.route.id,`${r} can only be used on routes that contain a unique "id"`),d.route.id}function dh(){return Xo("useRouteId")}function mh(){var u;let r=A.useContext(Qo),m=uh("useRouteError"),d=Xo("useRouteError");return r!==void 0?r:(u=m.errors)==null?void 0:u[d]}function fh(){let{router:r}=oh("useNavigate"),m=Xo("useNavigate"),d=A.useRef(!1);return _f(()=>{d.current=!0}),A.useCallback(async(h,f={})=>{Ae(d.current,Af),d.current&&(typeof h=="number"?await r.navigate(h):await r.navigate(h,{fromRouteId:m,...f}))},[r,m])}var ff={};function wf(r,m,d){!m&&!ff[r]&&(ff[r]=!0,Ae(!1,d))}A.memo(ph);function ph({routes:r,future:m,state:d,unstable_onError:u}){return Tf(r,void 0,d,u,m)}function zt(r){An(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function vh({basename:r="/",children:m=null,location:d,navigationType:u="POP",navigator:h,static:f=!1,unstable_useTransitions:g}){An(!Hi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let M=r.replace(/^\/*/,"/"),y=A.useMemo(()=>({basename:M,navigator:h,static:f,unstable_useTransitions:g,future:{}}),[M,h,f,g]);typeof d=="string"&&(d=na(d));let{pathname:v="/",search:_="",hash:E="",state:U=null,key:R="default"}=d,k=A.useMemo(()=>{let Z=lt(v,M);return Z==null?null:{location:{pathname:Z,search:_,hash:E,state:U,key:R},navigationType:u}},[M,v,_,E,U,R,u]);return Ae(k!=null,`<Router basename="${M}"> is not able to match the URL "${v}${_}${E}" because it does not start with the basename, so the <Router> won't render anything.`),k==null?null:A.createElement(Le.Provider,{value:y},A.createElement(Ii.Provider,{children:m,value:k}))}function hh({children:r,location:m}){return th(ko(r),m)}function ko(r,m=[]){let d=[];return A.Children.forEach(r,(u,h)=>{if(!A.isValidElement(u))return;let f=[...m,h];if(u.type===A.Fragment){d.push.apply(d,ko(u.props.children,f));return}An(u.type===zt,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),An(!u.props.index||!u.props.children,"An index route cannot have child routes.");let g={id:u.props.id||f.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,middleware:u.props.middleware,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(g.children=ko(u.props.children,f)),d.push(g)}),d}var rs="get",os="application/x-www-form-urlencoded";function ds(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function gh(r){return ds(r)&&r.tagName.toLowerCase()==="button"}function xh(r){return ds(r)&&r.tagName.toLowerCase()==="form"}function bh(r){return ds(r)&&r.tagName.toLowerCase()==="input"}function yh(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function Sh(r,m){return r.button===0&&(!m||m==="_self")&&!yh(r)}var ss=null;function Ch(){if(ss===null)try{new FormData(document.createElement("form"),0),ss=!1}catch{ss=!0}return ss}var Nh=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Io(r){return r!=null&&!Nh.has(r)?(Ae(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${os}"`),null):r}function jh(r,m){let d,u,h,f,g;if(xh(r)){let M=r.getAttribute("action");u=M?lt(M,m):null,d=r.getAttribute("method")||rs,h=Io(r.getAttribute("enctype"))||os,f=new FormData(r)}else if(gh(r)||bh(r)&&(r.type==="submit"||r.type==="image")){let M=r.form;if(M==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=r.getAttribute("formaction")||M.getAttribute("action");if(u=y?lt(y,m):null,d=r.getAttribute("formmethod")||M.getAttribute("method")||rs,h=Io(r.getAttribute("formenctype"))||Io(M.getAttribute("enctype"))||os,f=new FormData(M,r),!Ch()){let{name:v,type:_,value:E}=r;if(_==="image"){let U=v?`${v}.`:"";f.append(`${U}x`,"0"),f.append(`${U}y`,"0")}else v&&f.append(v,E)}}else{if(ds(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');d=rs,u=null,h=os,g=r}return f&&h==="text/plain"&&(g=f,f=void 0),{action:u,method:d.toLowerCase(),encType:h,formData:f,body:g}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Zo(r,m){if(r===!1||r===null||typeof r>"u")throw new Error(m)}function Eh(r,m,d){let u=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return u.pathname==="/"?u.pathname=`_root.${d}`:m&&lt(u.pathname,m)==="/"?u.pathname=`${m.replace(/\/$/,"")}/_root.${d}`:u.pathname=`${u.pathname.replace(/\/$/,"")}.${d}`,u}async function Mh(r,m){if(r.id in m)return m[r.id];try{let d=await import(r.module);return m[r.id]=d,d}catch(d){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(d),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Oh(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function Ah(r,m,d){let u=await Promise.all(r.map(async h=>{let f=m.routes[h.route.id];if(f){let g=await Mh(f,d);return g.links?g.links():[]}return[]}));return zh(u.flat(1).filter(Oh).filter(h=>h.rel==="stylesheet"||h.rel==="preload").map(h=>h.rel==="stylesheet"?{...h,rel:"prefetch",as:"style"}:{...h,rel:"prefetch"}))}function pf(r,m,d,u,h,f){let g=(y,v)=>d[v]?y.route.id!==d[v].route.id:!0,M=(y,v)=>{var _;return d[v].pathname!==y.pathname||((_=d[v].route.path)==null?void 0:_.endsWith("*"))&&d[v].params["*"]!==y.params["*"]};return f==="assets"?m.filter((y,v)=>g(y,v)||M(y,v)):f==="data"?m.filter((y,v)=>{var E;let _=u.routes[y.route.id];if(!_||!_.hasLoader)return!1;if(g(y,v)||M(y,v))return!0;if(y.route.shouldRevalidate){let U=y.route.shouldRevalidate({currentUrl:new URL(h.pathname+h.search+h.hash,window.origin),currentParams:((E=d[0])==null?void 0:E.params)||{},nextUrl:new URL(r,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof U=="boolean")return U}return!0}):[]}function _h(r,m,{includeHydrateFallback:d}={}){return Th(r.map(u=>{let h=m.routes[u.route.id];if(!h)return[];let f=[h.module];return h.clientActionModule&&(f=f.concat(h.clientActionModule)),h.clientLoaderModule&&(f=f.concat(h.clientLoaderModule)),d&&h.hydrateFallbackModule&&(f=f.concat(h.hydrateFallbackModule)),h.imports&&(f=f.concat(h.imports)),f}).flat(1))}function Th(r){return[...new Set(r)]}function wh(r){let m={},d=Object.keys(r).sort();for(let u of d)m[u]=r[u];return m}function zh(r,m){let d=new Set;return new Set(m),r.reduce((u,h)=>{let f=JSON.stringify(wh(h));return d.has(f)||(d.add(f),u.push({key:f,link:h})),u},[])}function zf(){let r=A.useContext(Ha);return Zo(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function Lh(){let r=A.useContext(cs);return Zo(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Ko=A.createContext(void 0);Ko.displayName="FrameworkContext";function Lf(){let r=A.useContext(Ko);return Zo(r,"You must render this element inside a <HydratedRouter> element"),r}function Dh(r,m){let d=A.useContext(Ko),[u,h]=A.useState(!1),[f,g]=A.useState(!1),{onFocus:M,onBlur:y,onMouseEnter:v,onMouseLeave:_,onTouchStart:E}=m,U=A.useRef(null);A.useEffect(()=>{if(r==="render"&&g(!0),r==="viewport"){let Z=Q=>{Q.forEach(en=>{g(en.isIntersecting)})},H=new IntersectionObserver(Z,{threshold:.5});return U.current&&H.observe(U.current),()=>{H.disconnect()}}},[r]),A.useEffect(()=>{if(u){let Z=setTimeout(()=>{g(!0)},100);return()=>{clearTimeout(Z)}}},[u]);let R=()=>{h(!0)},k=()=>{h(!1),g(!1)};return d?r!=="intent"?[f,U,{}]:[f,U,{onFocus:Ui(M,R),onBlur:Ui(y,k),onMouseEnter:Ui(v,R),onMouseLeave:Ui(_,k),onTouchStart:Ui(E,R)}]:[!1,U,{}]}function Ui(r,m){return d=>{r&&r(d),d.defaultPrevented||m(d)}}function Rh({page:r,...m}){let{router:d}=zf(),u=A.useMemo(()=>Sf(d.routes,r,d.basename),[d.routes,r,d.basename]);return u?A.createElement(qh,{page:r,matches:u,...m}):null}function Uh(r){let{manifest:m,routeModules:d}=Lf(),[u,h]=A.useState([]);return A.useEffect(()=>{let f=!1;return Ah(r,m,d).then(g=>{f||h(g)}),()=>{f=!0}},[r,m,d]),u}function qh({page:r,matches:m,...d}){let u=Lt(),{manifest:h,routeModules:f}=Lf(),{basename:g}=zf(),{loaderData:M,matches:y}=Lh(),v=A.useMemo(()=>pf(r,m,y,h,u,"data"),[r,m,y,h,u]),_=A.useMemo(()=>pf(r,m,y,h,u,"assets"),[r,m,y,h,u]),E=A.useMemo(()=>{if(r===u.pathname+u.search+u.hash)return[];let k=new Set,Z=!1;if(m.forEach(Q=>{var q;let en=h.routes[Q.route.id];!en||!en.hasLoader||(!v.some(J=>J.route.id===Q.route.id)&&Q.route.id in M&&((q=f[Q.route.id])!=null&&q.shouldRevalidate)||en.hasClientLoader?Z=!0:k.add(Q.route.id))}),k.size===0)return[];let H=Eh(r,g,"data");return Z&&k.size>0&&H.searchParams.set("_routes",m.filter(Q=>k.has(Q.route.id)).map(Q=>Q.route.id).join(",")),[H.pathname+H.search]},[g,M,u,h,v,m,r,f]),U=A.useMemo(()=>_h(_,h),[_,h]),R=Uh(_);return A.createElement(A.Fragment,null,E.map(k=>A.createElement("link",{key:k,rel:"prefetch",as:"fetch",href:k,...d})),U.map(k=>A.createElement("link",{key:k,rel:"modulepreload",href:k,...d})),R.map(({key:k,link:Z})=>A.createElement("link",{key:k,nonce:d.nonce,...Z})))}function Bh(...r){return m=>{r.forEach(d=>{typeof d=="function"?d(m):d!=null&&(d.current=m)})}}var Df=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Df&&(window.__reactRouterVersion="7.10.1")}catch{}function Ih({basename:r,children:m,unstable_useTransitions:d,window:u}){let h=A.useRef();h.current==null&&(h.current=jv({window:u,v5Compat:!0}));let f=h.current,[g,M]=A.useState({action:f.action,location:f.location}),y=A.useCallback(v=>{d===!1?M(v):A.startTransition(()=>M(v))},[d]);return A.useLayoutEffect(()=>f.listen(y),[f,y]),A.createElement(vh,{basename:r,children:m,location:g.location,navigationType:g.action,navigator:f,unstable_useTransitions:d===!0})}var Rf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,at=A.forwardRef(function({onClick:m,discover:d="render",prefetch:u="none",relative:h,reloadDocument:f,replace:g,state:M,target:y,to:v,preventScrollReset:_,viewTransition:E,...U},R){let{basename:k,unstable_useTransitions:Z}=A.useContext(Le),H=typeof v=="string"&&Rf.test(v),Q,en=!1;if(typeof v=="string"&&H&&(Q=v,Df))try{let Fn=new URL(window.location.href),Wn=v.startsWith("//")?new URL(Fn.protocol+v):new URL(v),Qn=lt(Wn.pathname,k);Wn.origin===Fn.origin&&Qn!=null?v=Qn+Wn.search+Wn.hash:en=!0}catch{Ae(!1,`<Link to="${v}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let q=Pv(v,{relative:h}),[J,jn,wn]=Dh(u,U),$=Yh(v,{replace:g,state:M,target:y,preventScrollReset:_,relative:h,viewTransition:E,unstable_useTransitions:Z});function Hn(Fn){m&&m(Fn),Fn.defaultPrevented||$(Fn)}let Yn=A.createElement("a",{...U,...wn,href:Q||q,onClick:en||f?m:Hn,ref:Bh(R,jn),target:y,"data-discover":!H&&d==="render"?"true":void 0});return J&&!H?A.createElement(A.Fragment,null,Yn,A.createElement(Rh,{page:q})):Yn});at.displayName="Link";var Hh=A.forwardRef(function({"aria-current":m="page",caseSensitive:d=!1,className:u="",end:h=!1,style:f,to:g,viewTransition:M,children:y,...v},_){let E=Gi(g,{relative:v.relative}),U=Lt(),R=A.useContext(cs),{navigator:k,basename:Z}=A.useContext(Le),H=R!=null&&Kh(E)&&M===!0,Q=k.encodeLocation?k.encodeLocation(E).pathname:E.pathname,en=U.pathname,q=R&&R.navigation&&R.navigation.location?R.navigation.location.pathname:null;d||(en=en.toLowerCase(),q=q?q.toLowerCase():null,Q=Q.toLowerCase()),q&&Z&&(q=lt(q,Z)||q);const J=Q!=="/"&&Q.endsWith("/")?Q.length-1:Q.length;let jn=en===Q||!h&&en.startsWith(Q)&&en.charAt(J)==="/",wn=q!=null&&(q===Q||!h&&q.startsWith(Q)&&q.charAt(Q.length)==="/"),$={isActive:jn,isPending:wn,isTransitioning:H},Hn=jn?m:void 0,Yn;typeof u=="function"?Yn=u($):Yn=[u,jn?"active":null,wn?"pending":null,H?"transitioning":null].filter(Boolean).join(" ");let Fn=typeof f=="function"?f($):f;return A.createElement(at,{...v,"aria-current":Hn,className:Yn,ref:_,style:Fn,to:g,viewTransition:M},typeof y=="function"?y($):y)});Hh.displayName="NavLink";var Gh=A.forwardRef(({discover:r="render",fetcherKey:m,navigate:d,reloadDocument:u,replace:h,state:f,method:g=rs,action:M,onSubmit:y,relative:v,preventScrollReset:_,viewTransition:E,...U},R)=>{let{unstable_useTransitions:k}=A.useContext(Le),Z=Xh(),H=Zh(M,{relative:v}),Q=g.toLowerCase()==="get"?"get":"post",en=typeof M=="string"&&Rf.test(M),q=J=>{if(y&&y(J),J.defaultPrevented)return;J.preventDefault();let jn=J.nativeEvent.submitter,wn=(jn==null?void 0:jn.getAttribute("formmethod"))||g,$=()=>Z(jn||J.currentTarget,{fetcherKey:m,method:wn,navigate:d,replace:h,state:f,relative:v,preventScrollReset:_,viewTransition:E});k&&d!==!1?A.startTransition(()=>$()):$()};return A.createElement("form",{ref:R,method:Q,action:H,onSubmit:u?y:q,...U,"data-discover":!en&&r==="render"?"true":void 0})});Gh.displayName="Form";function kh(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Uf(r){let m=A.useContext(Ha);return An(m,kh(r)),m}function Yh(r,{target:m,replace:d,state:u,preventScrollReset:h,relative:f,viewTransition:g,unstable_useTransitions:M}={}){let y=nh(),v=Lt(),_=Gi(r,{relative:f});return A.useCallback(E=>{if(Sh(E,m)){E.preventDefault();let U=d!==void 0?d:qi(v)===qi(_),R=()=>y(r,{replace:U,state:u,preventScrollReset:h,relative:f,viewTransition:g});M?A.startTransition(()=>R()):R()}},[v,y,_,d,u,m,r,h,f,g,M])}var Qh=0,Vh=()=>`__${String(++Qh)}__`;function Xh(){let{router:r}=Uf("useSubmit"),{basename:m}=A.useContext(Le),d=dh(),u=r.fetch,h=r.navigate;return A.useCallback(async(f,g={})=>{let{action:M,method:y,encType:v,formData:_,body:E}=jh(f,m);if(g.navigate===!1){let U=g.fetcherKey||Vh();await u(U,d,g.action||M,{preventScrollReset:g.preventScrollReset,formData:_,body:E,formMethod:g.method||y,formEncType:g.encType||v,flushSync:g.flushSync})}else await h(g.action||M,{preventScrollReset:g.preventScrollReset,formData:_,body:E,formMethod:g.method||y,formEncType:g.encType||v,replace:g.replace,state:g.state,fromRouteId:d,flushSync:g.flushSync,viewTransition:g.viewTransition})},[u,h,m,d])}function Zh(r,{relative:m}={}){let{basename:d}=A.useContext(Le),u=A.useContext(st);An(u,"useFormAction must be used inside a RouteContext");let[h]=u.matches.slice(-1),f={...Gi(r||".",{relative:m})},g=Lt();if(r==null){f.search=g.search;let M=new URLSearchParams(f.search),y=M.getAll("index");if(y.some(_=>_==="")){M.delete("index"),y.filter(E=>E).forEach(E=>M.append("index",E));let _=M.toString();f.search=_?`?${_}`:""}}return(!r||r===".")&&h.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),d!=="/"&&(f.pathname=f.pathname==="/"?d:it([d,f.pathname])),qi(f)}function Kh(r,{relative:m}={}){let d=A.useContext(Of);An(d!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=Uf("useViewTransitionState"),h=Gi(r,{relative:m});if(!d.isTransitioning)return!1;let f=lt(d.currentLocation.pathname,u)||d.currentLocation.pathname,g=lt(d.nextLocation.pathname,u)||d.nextLocation.pathname;return us(h.pathname,g)!=null||us(h.pathname,f)!=null}/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Fh=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(m,d,u)=>u?u.toUpperCase():d.toLowerCase()),vf=r=>{const m=Fh(r);return m.charAt(0).toUpperCase()+m.slice(1)},qf=(...r)=>r.filter((m,d,u)=>!!m&&m.trim()!==""&&u.indexOf(m)===d).join(" ").trim(),$h=r=>{for(const m in r)if(m.startsWith("aria-")||m==="role"||m==="title")return!0};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Wh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=A.forwardRef(({color:r="currentColor",size:m=24,strokeWidth:d=2,absoluteStrokeWidth:u,className:h="",children:f,iconNode:g,...M},y)=>A.createElement("svg",{ref:y,...Wh,width:m,height:m,stroke:r,strokeWidth:u?Number(d)*24/Number(m):d,className:qf("lucide",h),...!f&&!$h(M)&&{"aria-hidden":"true"},...M},[...g.map(([v,_])=>A.createElement(v,_)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sn=(r,m)=>{const d=A.forwardRef(({className:u,...h},f)=>A.createElement(Ph,{ref:f,iconNode:m,className:qf(`lucide-${Jh(vf(r))}`,`lucide-${r}`,u),...h}));return d.displayName=vf(r),d};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Bf=Sn("book-open",ng);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],hf=Sn("briefcase",eg);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=[["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3",key:"cabbwy"}],["rect",{x:"4",y:"2",width:"16",height:"20",rx:"2",key:"1uxh74"}]],ag=Sn("building",tg);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],lg=Sn("calendar",ig);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],rg=Sn("chevron-down",sg);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],ug=Sn("chevron-up",og);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],dg=Sn("circle-alert",cg);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Ho=Sn("circle-check-big",mg);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],pg=Sn("clock",fg);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],If=Sn("code-xml",vg);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],gf=Sn("code",hg);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]],xg=Sn("facebook",gg);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],xf=Sn("folder-open",bg);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],Sg=Sn("instagram",yg);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Ng=Sn("mail",Cg);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],ms=Sn("map-pin",jg);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Mg=Sn("menu",Eg);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],bf=Sn("play",Og);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Hf=Sn("plus",Ag);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Tg=Sn("refresh-cw",_g);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Jo=Sn("send",wg);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Lg=Sn("star",zg);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Rg=Sn("target",Dg);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],Bi=Sn("terminal",Ug);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Bg=Sn("triangle-alert",qg);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],Hg=Sn("user-plus",Ig);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],kg=Sn("users",Gg);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Fo=Sn("x",Yg),Gf="/assets/logoneeipequeno-removebg-preview-GzvURSz3.png",Qg=()=>{const[r,m]=A.useState(!1),d=Lt(),u=[{name:"Início",path:"/"},{name:"Sobre",path:"/sobre"},{name:"Eventos",path:"/eventos"},{name:"Projetos",path:"/projetos"},{name:"Vagas",path:"/vagas"},{name:"Colaborar",path:"/pertencer"}],h=f=>d.pathname===f;return o.jsxs("header",{className:"sticky top-0 z-50 bg-bg-100/90 backdrop-blur-md border-b border-primary-200 shadow-sm",children:[o.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:o.jsxs("div",{className:"flex justify-between items-center h-16",children:[o.jsx("div",{className:"flex-shrink-0 flex items-center",children:o.jsx(at,{to:"/",className:"flex items-center gap-2 group",children:o.jsx("div",{className:"w-14 h-14 flex items-center justify-center",children:o.jsx("img",{src:Gf,alt:"NEEI Logo",className:"w-full h-full object-contain"})})})}),o.jsx("nav",{className:"hidden md:flex space-x-6",children:u.map(f=>o.jsx(at,{to:f.path,className:`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${h(f.path)?"text-accent-200 bg-primary-100":"text-text-200 hover:text-accent-200 hover:bg-bg-200"}`,children:f.name},f.path))}),o.jsx("div",{className:"hidden md:flex items-center",children:o.jsxs(at,{to:"/quack",className:`flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm transition-all shadow-sm ${h("/quack")?"bg-accent-200 text-white ring-2 ring-offset-2 ring-accent-100":"bg-primary-300 text-white hover:bg-accent-200 hover:shadow-md"}`,children:[o.jsx(Bi,{size:16}),o.jsx("span",{children:"Quack"})]})}),o.jsx("div",{className:"md:hidden flex items-center",children:o.jsx("button",{onClick:()=>m(!r),className:"text-text-200 hover:text-accent-200 focus:outline-none",children:r?o.jsx(Fo,{size:28}):o.jsx(Mg,{size:28})})})]})}),r&&o.jsx("div",{className:"md:hidden bg-bg-100 border-t border-primary-200",children:o.jsxs("div",{className:"px-2 pt-2 pb-3 space-y-1 sm:px-3",children:[u.map(f=>o.jsx(at,{to:f.path,onClick:()=>m(!1),className:`block px-3 py-2 rounded-md text-base font-medium ${h(f.path)?"text-accent-200 bg-primary-100":"text-text-200 hover:text-accent-200 hover:bg-bg-200"}`,children:f.name},f.path)),o.jsxs(at,{to:"/quack",onClick:()=>m(!1),className:"flex items-center gap-2 w-full text-left px-3 py-2 mt-4 rounded-md text-base font-bold bg-primary-300 text-white",children:[o.jsx(Bi,{size:18}),"Quack Executor"]})]})})]})},Vg=()=>o.jsx("footer",{className:"bg-primary-300 text-bg-100 mt-auto",children:o.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[o.jsxs("div",{children:[o.jsx("div",{className:"mb-4",children:o.jsx("img",{src:Gf,alt:"NEEI Logo",className:"h-16 w-auto"})}),o.jsx("p",{className:"text-gray-300 text-sm leading-relaxed",children:"Núcleo de Estudantes de Engenharia Informática da Universidade do Algarve. Atuamos para promover, apoiar e representar ativamente os estudantes de LEI, fortalecendo a integração e a cooperação para uma experiência académica completa."})]}),o.jsxs("div",{children:[o.jsx("h3",{className:"text-lg font-semibold mb-4 text-primary-100",children:"Links Rápidos"}),o.jsxs("ul",{className:"space-y-2 text-sm text-gray-300",children:[o.jsx("li",{children:o.jsx("a",{href:"#/sobre",className:"hover:text-accent-100 transition-colors",children:"Sobre Nós"})}),o.jsx("li",{children:o.jsx("a",{href:"#/eventos",className:"hover:text-accent-100 transition-colors",children:"Eventos"})}),o.jsx("li",{children:o.jsx("a",{href:"#/vagas",className:"hover:text-accent-100 transition-colors",children:"Vagas"})}),o.jsx("li",{children:o.jsx("a",{href:"#/quack",className:"hover:text-accent-100 transition-colors",children:"Quack Executor"})})]})]}),o.jsxs("div",{children:[o.jsx("h3",{className:"text-lg font-semibold mb-4 text-primary-100",children:"Contactos"}),o.jsxs("ul",{className:"space-y-3 text-sm text-gray-300",children:[o.jsxs("li",{className:"flex items-start gap-2",children:[o.jsx(ms,{size:18,className:"text-accent-100 mt-0.5 shrink-0"}),o.jsxs("span",{children:["Sala 0.18, Edifício 1,",o.jsx("br",{}),"Campus de Gambelas, Faro"]})]}),o.jsxs("li",{className:"flex items-center gap-2",children:[o.jsx(Ng,{size:18,className:"text-accent-100 shrink-0"}),o.jsx("a",{href:"mailto:neei@aaualg.pt",className:"hover:text-white transition-colors",children:"neei@aaualg.pt"})]}),o.jsxs("li",{className:"flex items-center gap-4 mt-6",children:[o.jsx("a",{href:"https://www.facebook.com/NEEIUALG",target:"_blank",rel:"noopener noreferrer",className:"hover:text-accent-100 transition-colors","aria-label":"Facebook",children:o.jsx(xg,{size:24})}),o.jsx("a",{href:"https://www.instagram.com/neeiualg/",target:"_blank",rel:"noopener noreferrer",className:"hover:text-accent-100 transition-colors","aria-label":"Instagram",children:o.jsx(Sg,{size:24})})]})]})]})]}),o.jsxs("div",{className:"border-t border-gray-600 mt-8 pt-8 text-center text-xs text-gray-400",children:[new Date().getFullYear()," NEEI - Núcleo de Estudantes de Engenharia Informática da UAlg."]})]})}),Xg=({children:r})=>o.jsxs("div",{className:"flex flex-col min-h-screen bg-bg-100",children:[o.jsx(Qg,{}),o.jsx("main",{className:"flex-grow",children:r}),o.jsx(Vg,{})]}),Zg=()=>{const[r,m]=A.useState([{type:"output",content:"NEEI_OS v1.0.5 [Secure Connection Established]"},{type:"output",content:'Welcome to NEEI System. Type "help" to see available commands.'}]),[d,u]=A.useState(""),h=A.useRef(null),f=A.useRef(null);A.useEffect(()=>{f.current&&(f.current.scrollTop=f.current.scrollHeight)},[r]);const g=()=>{var v;(v=h.current)==null||v.focus()},M=v=>{const _=v.trim().toLowerCase(),E=_.split(" ").slice(1),U=_.split(" ")[0];let R="";switch(U){case"help":R=o.jsxs("div",{className:"grid grid-cols-2 gap-2 max-w-xs",children:[o.jsx("span",{className:"text-accent-200",children:"help"})," ",o.jsx("span",{children:"Lista comandos"}),o.jsx("span",{className:"text-accent-200",children:"ls"})," ",o.jsx("span",{children:"Lista ficheiros"}),o.jsx("span",{className:"text-accent-200",children:"whoami"})," ",o.jsx("span",{children:"Utilizador atual"}),o.jsx("span",{className:"text-accent-200",children:"date"})," ",o.jsx("span",{children:"Data sistema"}),o.jsx("span",{className:"text-accent-200",children:"clear"})," ",o.jsx("span",{children:"Limpa ecrã"}),o.jsx("span",{className:"text-accent-200",children:"cat [file]"})," ",o.jsx("span",{children:"Lê ficheiro"})]});break;case"ls":R=o.jsxs("div",{className:"flex gap-4 text-green-400 flex-wrap",children:[o.jsx("span",{children:"segredos_neei.log"}),o.jsx("span",{children:"receita_sandes_atum.txt"}),o.jsx("span",{children:"razões_para_ser_informatico.txt"}),o.jsx("span",{className:"text-blue-400",children:"/projetos"})]});break;case"whoami":R="guest_user@neei-ualg (Access Level: Student)";break;case"date":R=new Date().toString();break;case"sudo":R="Permission denied: Nice try, but you are not root.";break;case"hack":R="Accessing mainframe... 0%... 10%... FAILED. Firewall is too strong.";break;case"clear":m([]);return;case"cat":E.length===0?R="Usage: cat [filename]":E[0]==="segredos_neei.log"?R="Error: File encrypted. Key required. (Dica: Pergunta ao presidente)":E[0]==="receita_sandes_atum.txt"?R=o.jsx("div",{className:"whitespace-pre-wrap text-yellow-200",children:`=== RECEITA GOURMET DE ESTUDANTE ===
1. Pão de ontem (se estiver duro, molha na água).
2. Uma lata de atum (em óleo para escorregar melhor).
3. Maionese (quanto mais, melhor).
4. Misturar com as lágrimas de quem chumbou a Análise Matemática.
5. Comer em 2 minutos antes da aula prática de AED.`}):E[0]==="razões_para_ser_informatico.txt"?R=o.jsx("div",{className:"whitespace-pre-wrap text-purple-300",children:`=== PORQUE É QUE VIM PARA LEI? ===
1. Era quem arranjava a televisão lá em casa (mudava o HDMI).
2. Era quem concertava o computador da avó (desligava e voltava a ligar).
3. Gosto de jogar jogos e achava que o curso era só gaming.
4. O meu primo disse que dava dinheiro (ele vende NFTs).
5. Tenho medo do sol.`}):R=`cat: ${E[0]}: No such file or directory`;break;case"":R=null;break;default:R=`Command not found: ${_}. Type "help".`}R?m(k=>[...k,{type:"input",content:v},{type:"output",content:R}]):_!==""&&m(k=>[...k,{type:"input",content:v}])},y=v=>{v.key==="Enter"&&(M(d),u(""))};return o.jsxs("div",{className:"w-full h-full bg-[#0f172a] p-4 font-mono text-xs md:text-sm overflow-hidden flex flex-col relative",onClick:g,children:[o.jsx("div",{className:"absolute inset-0 pointer-events-none z-10 opacity-10",style:{background:"linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))",backgroundSize:"100% 2px, 3px 100%"}}),o.jsxs("div",{className:"flex-1 overflow-y-auto z-0 space-y-1 scrollbar-hide pb-2",ref:f,children:[r.map((v,_)=>o.jsxs("div",{className:`${v.type==="input"?"text-gray-400 mt-2":"text-blue-300"}`,children:[v.type==="input"&&o.jsx("span",{className:"text-accent-200 mr-2",children:"$"}),v.content]},_)),o.jsxs("div",{className:"flex items-center text-gray-200",children:[o.jsx("span",{className:"text-accent-200 mr-2",children:"$"}),o.jsx("input",{ref:h,type:"text",value:d,onChange:v=>u(v.target.value),onKeyDown:y,className:"bg-transparent border-none outline-none flex-1 text-blue-100 placeholder-gray-700",autoFocus:!0,autoComplete:"off",spellCheck:"false"}),o.jsx("span",{className:"w-2 h-4 bg-accent-200 animate-pulse ml-1"})]})]})]})},Kg=()=>o.jsxs("div",{className:"flex flex-col gap-16",children:[o.jsx("section",{className:"relative bg-gradient-to-b from-primary-100 to-bg-100 py-20 md:py-32",children:o.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center",children:[o.jsxs("div",{className:"md:w-1/2 space-y-6 text-center md:text-left mb-12 md:mb-0",children:[o.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-primary-200 text-accent-200 text-xs font-bold uppercase tracking-wider mb-2",children:[o.jsx(ms,{size:12}),"Sala 0.18, Edifício 1, Campus de Gambelas, Faro"]}),o.jsxs("h1",{className:"text-4xl md:text-6xl font-bold text-text-100 leading-tight",children:[o.jsx("span",{className:"text-accent-200",children:"N"}),"úcleo de ",o.jsx("span",{className:"text-accent-200",children:"E"}),"studantes de ",o.jsx("span",{className:"text-accent-200",children:"E"}),"ngenharia ",o.jsx("span",{className:"text-accent-200",children:"I"}),"nformática da ",o.jsx("span",{className:"text-accent-200",children:"UAlg"})]}),o.jsx("p",{className:"text-lg text-text-200 max-w-lg mx-auto md:mx-0",children:"Somos o órgão responsável por proporcionar atividades, workshops e eventos dedicados aos estudantes de Engenharia Informática da UAlg. Fomentamos a integração e a cooperação para uma experiência académica completa."}),o.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center md:justify-start",children:[o.jsx(at,{to:"/pertencer",className:"bg-accent-200 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-accent-100 hover:-translate-y-1 transition-all duration-300",children:"Ser Colaborador"}),o.jsxs(at,{to:"/quack",className:"bg-white text-accent-200 border border-accent-200 px-8 py-3 rounded-lg font-semibold hover:bg-primary-100 transition-all duration-300 flex items-center justify-center gap-2",children:[o.jsx(gf,{size:20}),"Quack (Online Judge)"]})]})]}),o.jsx("div",{className:"md:w-1/2 flex justify-center items-center w-full",children:o.jsxs("div",{className:"relative group w-full max-w-lg",children:[o.jsx("div",{className:"absolute -inset-1 bg-gradient-to-r from-accent-200 via-blue-400 to-accent-200 rounded-xl blur opacity-20 group-hover:opacity-75 transition duration-500 group-hover:duration-200"}),o.jsxs("div",{className:"relative rounded-xl bg-gray-900 ring-1 ring-white/10 overflow-hidden p-[2px] aspect-video shadow-2xl",children:[o.jsx("div",{className:"absolute inset-[-50%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_180deg,#00668c_240deg,#71c4ef_360deg)] animate-[spin_4s_linear_infinite]"}),o.jsx("div",{className:"absolute inset-[2px] bg-[#0f172a] rounded-lg z-10 overflow-hidden",children:o.jsx(Zg,{})})]}),o.jsxs("div",{className:"text-center mt-4 opacity-60 text-xs font-mono text-gray-500",children:[o.jsx(Bi,{size:12,className:"inline mr-1"}),'Sistema Interativo: Tenta escrever "help" ou "ls"']})]})})]})}),o.jsxs("section",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20",children:[o.jsx("h2",{className:"text-3xl font-bold text-text-100 mb-12 text-center",children:"Destaques do Mandato"}),o.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:[{icon:o.jsx(gf,{className:"text-accent-200",size:32}),title:"Site do NEEI é apresentado como primeira proposta a ser cumprida pela nova direção do NEEI",desc:"Hello world!",date:"Nov 2025"}].map((r,m)=>o.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-primary-200 hover:shadow-lg transition-shadow duration-300",children:[o.jsxs("div",{className:"flex justify-between items-start mb-4",children:[o.jsx("div",{className:"p-3 bg-primary-100 rounded-lg",children:r.icon}),o.jsx("span",{className:"text-xs font-semibold text-text-200 bg-bg-200 px-2 py-1 rounded",children:r.date})]}),o.jsx("h3",{className:"text-xl font-bold text-text-100 mb-2",children:r.title}),o.jsx("p",{className:"text-text-200 mb-4",children:r.desc})]},m))})]})]}),Jg="/assets/afonsobitoque-CbLk7P5H.png",Fg="/assets/josetico-BXIzTLrd.png",$g="/assets/davidgoncalves-B7l-li6B.png",Wg="/assets/davidcruz-CqnI9HvS.png",Pg="/assets/franciscomolo-Dmyt50nl.png",nx="/assets/leonardocantachini-BNYPe3jh.png",ex="/assets/afonsofrancisco-B-6w0691.png",tx="/assets/simaoreis-Bk-mXVk4.png",ax="/assets/barbarapereira-DvcNMqnC.png",ix="/assets/beatrizmateia-IA3LItW7.png",lx="/assets/davidrodrigues-DGWagHyR.png",sx="/assets/davidsilvestre-DewLdGe7.png",rx="/assets/francisconeves-AkyuryhU.png",ox="/assets/joaomariabatista-2Au6AC-T.png",ux="/assets/joaomiguelbatista-BoUuBuzr.png",cx="/assets/leonardoalbudane-CHuA3erf.png",dx="/assets/martimneves-CaKzb_wY.png",mx="/assets/miguelalvito-C1-k7Zd2.png",fx="/assets/raquelnunes-CRygNQAU.png",px="/assets/ricardovicente-D3bDaPiL.png",vx=()=>{const r=[{name:"Afonso Bitoque",role:"Presidente",image:Jg},{name:"José Tico",role:"Vice-Presidente",image:Fg},{name:"David Gonçalves",role:"Tesoureiro",image:$g},{name:"David Cruz",role:"Secretário",image:Wg}],m=[{name:"Francisco Molo",role:"Presidente",image:Pg},{name:"Leonardo Cantachini",role:"Vice-Presidente",image:nx},{name:"Afonso Francisco",role:"Secretário",image:ex},{name:"Simão Reis",role:"Primeiro Suplente",image:tx}],d=[{name:"Barbara Pereira",image:ax},{name:"Beatriz Mateia",image:ix},{name:"David Rodrigues",image:lx},{name:"David Silvestre",image:sx},{name:"Francisco Neves",image:rx},{name:"João Maria Batista",image:ox},{name:"João Miguel Batista",image:ux},{name:"Leonardo Albudane",image:cx},{name:"Martim Neves",image:dx},{name:"Miguel Alvito",image:mx},{name:"Raquel Nunes",image:fx},{name:"Ricardo Vicente",image:px}];return o.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16",children:[o.jsxs("div",{className:"text-center max-w-4xl mx-auto",children:[o.jsx("h1",{className:"text-4xl font-bold text-text-100 mb-6",children:"Sobre o NEEI"}),o.jsxs("div",{className:"flex items-center justify-center gap-2 text-accent-200 mb-6 font-medium",children:[o.jsx(ms,{size:20}),o.jsx("span",{children:"Sala 0.18, Edifício 1, Campus de Gambelas, Faro"})]}),o.jsxs("p",{className:"text-lg text-text-200 leading-relaxed text-justify md:text-center",children:["O ",o.jsx("strong",{children:"Núcleo de Estudantes de Engenharia Informática (NEEI)"})," é parte integrante da ",o.jsx("strong",{children:"Associação Académica da Universidade do Algarve (AAUAlg)"}),", representando todos os estudantes do curso de Engenharia Informática da UALG."]})]}),o.jsxs("div",{className:"grid md:grid-cols-3 gap-8",children:[o.jsxs("div",{className:"bg-bg-200 p-8 rounded-2xl text-center hover:bg-primary-100 transition-colors border border-transparent hover:border-primary-200",children:[o.jsx("div",{className:"w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-accent-200",children:o.jsx(kg,{size:32})}),o.jsx("h3",{className:"text-xl font-bold text-text-100 mb-4",children:"Representação"}),o.jsx("p",{className:"text-text-200 text-sm leading-relaxed",children:"Defender os interesses e direitos dos estudantes junto dos órgãos da Universidade e da Direção-Geral da AAUAlg, garantindo uma voz ativa na definição do percurso académico."})]}),o.jsxs("div",{className:"bg-bg-200 p-8 rounded-2xl text-center hover:bg-primary-100 transition-colors border border-transparent hover:border-primary-200",children:[o.jsx("div",{className:"w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-accent-200",children:o.jsx(Bf,{size:32})}),o.jsx("h3",{className:"text-xl font-bold text-text-100 mb-4",children:"Desenvolvimento"}),o.jsx("p",{className:"text-text-200 text-sm leading-relaxed",children:"Organizar atividades extracurriculares, workshops técnicos e eventos de contacto empresarial que complementem a formação letiva e potenciem a empregabilidade dos sócios."})]}),o.jsxs("div",{className:"bg-bg-200 p-8 rounded-2xl text-center hover:bg-primary-100 transition-colors border border-transparent hover:border-primary-200",children:[o.jsx("div",{className:"w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-accent-200",children:o.jsx(Rg,{size:32})}),o.jsx("h3",{className:"text-xl font-bold text-text-100 mb-4",children:"Vivência Académica"}),o.jsx("p",{className:"text-text-200 text-sm leading-relaxed",children:"Gerir os assuntos correntes do Núcleo e promover um espírito de união, integração e entreajuda, desde o acolhimento aos novos estudantes até à celebração dos finalistas."})]})]}),o.jsxs("div",{className:"bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-primary-200",children:[o.jsxs("div",{className:"text-center mb-12",children:[o.jsx("h2",{className:"text-3xl font-bold text-text-100 mb-2",children:"Estrutura do Núcleo"}),o.jsx("p",{className:"text-accent-200 font-bold uppercase tracking-widest text-sm",children:"Mandato 2025 / 2026"})]}),o.jsxs("div",{className:"mb-12",children:[o.jsx("h3",{className:"text-xl font-bold text-center text-text-100 mb-8 border-b border-bg-300 pb-2 mx-auto max-w-xs",children:"Direção"}),o.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-8",children:r.map(u=>o.jsxs("div",{className:"flex flex-col items-center text-center group",children:[o.jsx("div",{className:"relative w-28 h-28 mb-4 overflow-hidden rounded-full border-4 border-primary-100 group-hover:border-accent-100 transition-colors shadow-md bg-bg-200",children:o.jsx("img",{src:u.image,alt:u.name,className:"w-full h-full object-cover",style:{transform:"scale(1.83)"}})}),o.jsx("h3",{className:"font-bold text-lg text-text-100",children:u.name}),o.jsx("p",{className:"text-accent-200 text-sm font-medium",children:u.role})]},u.name))})]}),o.jsxs("div",{className:"mb-12",children:[o.jsx("h3",{className:"text-xl font-bold text-center text-text-100 mb-8 border-b border-bg-300 pb-2 mx-auto max-w-xs",children:"Mesa do Plenário"}),o.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-8",children:m.map(u=>o.jsxs("div",{className:"flex flex-col items-center text-center group",children:[o.jsx("div",{className:"relative w-28 h-28 mb-4 overflow-hidden rounded-full border-4 border-bg-200 group-hover:border-accent-100 transition-colors shadow-sm bg-bg-200",children:o.jsx("img",{src:u.image,alt:u.name,className:"w-full h-full object-cover",style:{transform:"scale(1.83)"}})}),o.jsx("h3",{className:"font-bold text-base text-text-100",children:u.name}),o.jsx("p",{className:"text-text-200 text-xs font-medium",children:u.role})]},u.name))})]}),o.jsxs("div",{className:"mb-12",children:[o.jsx("h3",{className:"text-xl font-bold text-center text-text-100 mb-8 border-b border-bg-300 pb-2 mx-auto max-w-xs",children:"Vogais da Direção"}),o.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-8 justify-center",children:d.map(u=>o.jsxs("div",{className:"flex flex-col items-center text-center group",children:[o.jsx("div",{className:"relative w-28 h-28 mb-4 overflow-hidden rounded-full border-4 border-bg-200 group-hover:border-accent-100 transition-colors shadow-sm bg-bg-200",children:o.jsx("img",{src:u.image,alt:u.name,className:"w-full h-full object-cover",style:{transform:"scale(1.83)"}})}),o.jsx("h3",{className:"font-bold text-sm text-text-100",children:u.name}),o.jsx("p",{className:"text-text-200 text-xs font-medium",children:"Vogal"})]},u.name))})]})]})]})},hx=()=>{const[r,m]=A.useState(!1),d=[];return o.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[o.jsxs("div",{className:"flex items-center gap-4 mb-8",children:[o.jsx("div",{className:"bg-primary-100 p-3 rounded-lg",children:o.jsx(xf,{className:"text-accent-200",size:32})}),o.jsxs("div",{children:[o.jsx("h1",{className:"text-3xl font-bold text-text-100",children:"Projetos"}),o.jsx("p",{className:"text-text-200",children:"O que andamos a fazer."})]})]}),d.length===0?o.jsxs("div",{className:"flex flex-col items-center justify-center py-20 bg-bg-200 rounded-2xl border-2 border-dashed border-primary-300",children:[o.jsx(xf,{className:"text-primary-300 mb-4 opacity-50",size:64}),o.jsx("p",{className:"text-2xl font-semibold text-text-200",children:"Ainda não foram partilhados projetos"}),o.jsx("p",{className:"text-text-200 mt-2",children:"Sê o primeiro a mostrar o teu trabalho!"})]}):o.jsx("div",{className:"grid md:grid-cols-2 gap-8 mb-16",children:d.map(u=>o.jsxs("div",{className:"bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-bg-300 group",children:[o.jsxs("div",{className:"relative h-48 overflow-hidden",children:[o.jsx("img",{src:u.imageUrl,alt:u.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"}),o.jsx("div",{className:"absolute top-4 right-4 bg-bg-100/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-accent-200",children:u.category})]}),o.jsxs("div",{className:"p-6",children:[o.jsxs("h3",{className:"text-xl font-bold text-text-100 mb-2 flex items-center gap-2",children:[u.title,u.id===1&&o.jsx(Lg,{size:16,className:"text-yellow-400 fill-current"})]}),o.jsx("p",{className:"text-text-200",children:u.description})]})]},u.id))}),o.jsxs("div",{className:"bg-primary-100 rounded-2xl p-8 md:p-12 text-center mt-12 border border-primary-200",children:[o.jsx("h2",{className:"text-2xl font-bold text-text-100 mb-4",children:"Queres partilhar um projeto teu?"}),o.jsx("p",{className:"text-text-200 mb-8 max-w-2xl mx-auto",children:"O NEEI apoia os projetos dos alunos, partilha os teus trabalhos mais recentes com a comunidade acadêmica!"}),o.jsxs("button",{onClick:()=>m(!r),className:`px-8 py-3 rounded-lg font-semibold transition-all inline-flex items-center gap-2 shadow-md ${r?"bg-text-200 text-white hover:bg-text-100":"bg-accent-200 text-white hover:bg-accent-100 hover:-translate-y-1"}`,children:[r?o.jsx(Fo,{size:20}):o.jsx(Hf,{size:20}),r?"Fechar Formulário":"Queres partilhar o teu projeto?"]}),r&&o.jsx("div",{className:"mt-8 max-w-2xl mx-auto text-left animate-in fade-in slide-in-from-bottom-4 duration-500",children:o.jsx("div",{className:"bg-white p-8 rounded-xl shadow-lg border border-primary-200",children:o.jsxs("form",{action:"https://formspree.io/f/xvgyjpgo",method:"POST",className:"space-y-6",children:[o.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[o.jsxs("div",{className:"space-y-2",children:[o.jsx("label",{htmlFor:"nome",className:"block text-sm font-medium text-text-100",children:"Nome Completo"}),o.jsx("input",{type:"text",id:"nome",name:"nome",required:!0,className:"w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-200 outline-none bg-white",placeholder:"Teu nome"})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsx("label",{htmlFor:"numero_aluno",className:"block text-sm font-medium text-text-100",children:"Número de Aluno"}),o.jsx("input",{type:"text",id:"numero_aluno",name:"numero_aluno",required:!0,className:"w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-200 outline-none bg-white",placeholder:"ex: a12345"})]})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsx("label",{htmlFor:"contacto",className:"block text-sm font-medium text-text-100",children:"Contacto (Email ou Telemóvel)"}),o.jsx("input",{type:"text",id:"contacto",name:"contacto",required:!0,className:"w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-200 outline-none bg-white",placeholder:"Email ou Nº Telemóvel"})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsx("label",{htmlFor:"nome_projeto",className:"block text-sm font-medium text-text-100",children:"Nome do Projeto"}),o.jsx("input",{type:"text",id:"nome_projeto",name:"nome_projeto",required:!0,className:"w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-200 outline-none bg-white",placeholder:"Título do projeto"})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsx("label",{htmlFor:"resumo_projeto",className:"block text-sm font-medium text-text-100",children:"Resumo do Projeto"}),o.jsx("textarea",{id:"resumo_projeto",name:"resumo_projeto",rows:4,required:!0,className:"w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-200 outline-none bg-white",placeholder:"Descreve brevemente a tua ideia..."})]}),o.jsxs("button",{type:"submit",className:"w-full bg-accent-200 text-white font-bold py-3 rounded-lg hover:bg-accent-100 transition-colors flex items-center justify-center gap-2",children:[o.jsx(Jo,{size:18}),"Submeter Projeto"]})]})})})]})]})},gx=()=>o.jsx("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:o.jsxs("div",{className:"bg-white rounded-3xl shadow-xl overflow-hidden border border-primary-200",children:[o.jsxs("div",{className:"bg-primary-300 p-8 text-white text-center",children:[o.jsx(Hg,{className:"mx-auto mb-4 h-16 w-16 text-accent-100"}),o.jsx("h1",{className:"text-3xl font-bold mb-2",children:"Queres ser colaborador?"}),o.jsx("p",{className:"text-primary-200",children:"Junta-te à equipa do NEEI e ajuda-nos a criar impacto."})]}),o.jsx("div",{className:"p-8 md:p-12",children:o.jsxs("form",{action:"https://formspree.io/f/xpwyovyd",method:"POST",className:"space-y-6",children:[o.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[o.jsxs("div",{className:"space-y-2",children:[o.jsx("label",{htmlFor:"nome",className:"block text-sm font-medium text-text-100",children:"Nome Completo"}),o.jsx("input",{type:"text",id:"nome",name:"nome",required:!0,className:"w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-200 focus:border-transparent outline-none transition-all bg-white",placeholder:"Teu nome"})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsx("label",{htmlFor:"numero_aluno",className:"block text-sm font-medium text-text-100",children:"Número de Aluno"}),o.jsx("input",{type:"text",id:"numero_aluno",name:"numero_aluno",required:!0,className:"w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-200 focus:border-transparent outline-none transition-all bg-white",placeholder:"ex: a12345"})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsx("label",{htmlFor:"telemovel",className:"block text-sm font-medium text-text-100",children:"Nº Telemóvel"}),o.jsx("input",{type:"tel",id:"telemovel",name:"telemovel",required:!0,className:"w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-200 focus:border-transparent outline-none transition-all bg-white",placeholder:"912 345 678"})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsx("label",{htmlFor:"ano_escolaridade",className:"block text-sm font-medium text-text-100",children:"Ano de Escolaridade"}),o.jsxs("select",{id:"ano_escolaridade",name:"ano_escolaridade",className:"w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-200 focus:border-transparent outline-none transition-all bg-white",children:[o.jsx("option",{value:"1",children:"1º Ano"}),o.jsx("option",{value:"2",children:"2º Ano"}),o.jsx("option",{value:"3",children:"3º Ano"}),o.jsx("option",{value:"Mestrado",children:"Mestrado"}),o.jsx("option",{value:"Outro",children:"Outro"})]})]})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsx("label",{htmlFor:"motivacao",className:"block text-sm font-medium text-text-100",children:"Texto de Motivação"}),o.jsx("textarea",{id:"motivacao",name:"motivacao",rows:5,required:!0,className:"w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-200 focus:border-transparent outline-none transition-all bg-white",placeholder:"Porque queres juntar-te ao NEEI? O que gostarias de fazer?"})]}),o.jsxs("button",{type:"submit",className:"w-full bg-accent-200 text-white font-bold py-4 rounded-lg shadow-md hover:bg-accent-100 hover:shadow-lg transition-all flex items-center justify-center gap-2",children:[o.jsx(Jo,{size:20}),"Enviar Candidatura"]})]})})]})}),xx=()=>{const[r,m]=A.useState(null),[d,u]=A.useState(!1),h=[],f=g=>{m(r===g?null:g)};return o.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[o.jsxs("div",{className:"flex items-center gap-4 mb-12",children:[o.jsx("div",{className:"bg-primary-100 p-3 rounded-lg",children:o.jsx(hf,{className:"text-accent-200",size:32})}),o.jsxs("div",{children:[o.jsx("h1",{className:"text-3xl font-bold text-text-100",children:"Vaga de emprego/estagio"}),o.jsx("p",{className:"text-text-200",children:"Oportunidades selecionadas para alunos e alumni."})]})]}),o.jsx("div",{className:"space-y-4 mb-16",children:h.length===0?o.jsxs("div",{className:"flex flex-col items-center justify-center py-16 bg-bg-200 rounded-2xl border-2 border-dashed border-primary-300 text-center",children:[o.jsx(hf,{className:"text-primary-300 mb-4 opacity-50",size:48}),o.jsx("p",{className:"text-xl font-semibold text-text-200",children:"Não há oportunidades abertas de momento"}),o.jsx("p",{className:"text-text-200 mt-2 text-sm",children:"Fica atento a futuras atualizações."})]}):h.map(g=>o.jsxs("div",{className:`bg-white rounded-xl border transition-all duration-300 overflow-hidden ${r===g.id?"border-accent-200 shadow-md":"border-primary-200 hover:border-accent-100"}`,children:[o.jsxs("div",{onClick:()=>f(g.id),className:"p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4",children:[o.jsxs("div",{className:"flex-1",children:[o.jsxs("div",{className:"flex items-center gap-3 mb-1",children:[o.jsx("h3",{className:"text-lg font-bold text-text-100",children:g.title}),o.jsx("span",{className:`text-xs px-2 py-0.5 rounded-full font-medium ${g.type==="Estágio"?"bg-green-100 text-green-700":"bg-blue-100 text-blue-700"}`,children:g.type})]}),o.jsxs("div",{className:"flex items-center gap-4 text-sm text-text-200",children:[o.jsx("span",{className:"font-semibold",children:g.company}),o.jsxs("span",{className:"flex items-center gap-1",children:[o.jsx(ms,{size:14})," ",g.location]}),o.jsxs("span",{className:"flex items-center gap-1",children:[o.jsx(pg,{size:14})," ",g.postedDate]})]})]}),o.jsx("div",{className:"text-primary-300",children:r===g.id?o.jsx(ug,{}):o.jsx(rg,{})})]}),o.jsxs("div",{className:`bg-bg-200 px-6 overflow-hidden transition-all duration-300 ${r===g.id?"max-h-96 py-6 opacity-100":"max-h-0 py-0 opacity-0"}`,children:[o.jsx("p",{className:"text-text-100 mb-4 whitespace-pre-line",children:g.description}),g.requirements&&g.requirements.length>0&&o.jsxs(o.Fragment,{children:[o.jsx("h4",{className:"font-semibold text-sm text-text-100 mb-2",children:"Requisitos:"}),o.jsx("ul",{className:"list-disc list-inside text-sm text-text-200 space-y-1 mb-6",children:g.requirements.map((M,y)=>o.jsx("li",{children:M},y))})]}),o.jsx("button",{className:"bg-accent-200 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-accent-100 transition-colors",children:"Candidatar-se"})]})]},g.id))}),o.jsxs("div",{className:"bg-primary-100 rounded-2xl p-8 text-center border border-primary-200",children:[o.jsx("div",{className:"flex justify-center mb-4",children:o.jsx(ag,{className:"text-accent-200",size:40})}),o.jsx("h2",{className:"text-2xl font-bold text-text-100 mb-2",children:"És uma empresa à procura de talento?"}),o.jsx("p",{className:"text-text-200 mb-6",children:"Publica a tua oferta de emprego ou estágio diretamente na nossa plataforma."}),o.jsxs("button",{onClick:()=>u(!d),className:`px-6 py-3 rounded-lg font-semibold transition-all inline-flex items-center gap-2 shadow-sm ${d?"bg-text-200 text-white hover:bg-text-100":"bg-accent-200 text-white hover:bg-accent-100 hover:-translate-y-1"}`,children:[d?o.jsx(Fo,{size:20}):o.jsx(Hf,{size:20}),d?"Fechar Formulário":"Submeter Vaga"]}),d&&o.jsx("div",{className:"mt-8 max-w-xl mx-auto text-left animate-in fade-in slide-in-from-bottom-4 duration-500",children:o.jsx("div",{className:"bg-white p-8 rounded-xl shadow-lg border border-primary-200",children:o.jsxs("form",{action:"https://formspree.io/f/mgvqjydr",method:"POST",className:"space-y-5",children:[o.jsxs("div",{className:"space-y-1",children:[o.jsx("label",{htmlFor:"nome_empresa",className:"block text-sm font-medium text-text-100",children:"Nome da Empresa / Recrutador"}),o.jsx("input",{type:"text",id:"nome_empresa",name:"nome_empresa",required:!0,className:"w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-200 outline-none bg-white",placeholder:"Nome da empresa"})]}),o.jsxs("div",{className:"space-y-1",children:[o.jsx("label",{htmlFor:"contacto",className:"block text-sm font-medium text-text-100",children:"Contacto (Email)"}),o.jsx("input",{type:"email",id:"contacto",name:"contacto",required:!0,className:"w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-200 outline-none bg-white",placeholder:"recrutamento@empresa.com"})]}),o.jsxs("div",{className:"space-y-1",children:[o.jsx("label",{className:"block text-sm font-medium text-text-100 mb-2",children:"Tipo de Oferta"}),o.jsxs("div",{className:"flex gap-4",children:[o.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[o.jsx("input",{type:"radio",name:"tipo_oferta",value:"Estágio",className:"accent-accent-200",defaultChecked:!0}),o.jsx("span",{className:"text-text-200",children:"Estágio"})]}),o.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[o.jsx("input",{type:"radio",name:"tipo_oferta",value:"Emprego",className:"accent-accent-200"}),o.jsx("span",{className:"text-text-200",children:"Emprego"})]})]})]}),o.jsxs("div",{className:"space-y-1",children:[o.jsx("label",{htmlFor:"descricao",className:"block text-sm font-medium text-text-100",children:"Descrição da Oferta"}),o.jsx("textarea",{id:"descricao",name:"descricao",rows:5,required:!0,className:"w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-200 outline-none bg-white",placeholder:"Detalhes sobre a função, requisitos e benefícios..."})]}),o.jsxs("button",{type:"submit",className:"w-full bg-accent-200 text-white font-bold py-3 rounded-lg hover:bg-accent-100 transition-colors flex items-center justify-center gap-2",children:[o.jsx(Jo,{size:18}),"Enviar Oferta"]})]})})})]})]})};var an=(r=>(r.IDLE="IDLE",r.RUNNING="RUNNING",r.SUCCESS="SUCCESS",r.ERROR="ERROR",r.TIMEOUT="TIMEOUT",r.SECURITY_VIOLATION="SECURITY_VIOLATION",r))(an||{});const bx="https://emkc.org/api/v2/piston/execute";async function yx(r,m,d){try{const u=m==="c"?{language:"c",version:"10.2.0",filename:"Main.c"}:{language:"java",version:"15.0.2",filename:"Main.java"},h=await fetch(bx,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({language:u.language,version:u.version,files:[{name:u.filename,content:r}],stdin:d,run_timeout:1e4,compile_timeout:1e4})});return h.ok?await h.json():null}catch(u){return console.error("Piston API Error:",u),null}}const Sx=async r=>{const{code:m,language:d,testCases:u}=r,h=u[0],f=await yx(m,d,h.input);let g="",M="",y=an.ERROR,v="";if(f)if(f.compile&&f.compile.stderr)M=f.compile.stderr,v="Erro de Compilação",y=an.ERROR;else{g=f.run.stdout,f.run.code!==0?(M=f.run.stderr||`Erro de execução (Exit Code: ${f.run.code})`,v="Erro de Execução (Runtime Error)",y=an.ERROR):f.run.stderr?g?y=an.SUCCESS:(M=f.run.stderr,y=an.ERROR,v="Erro na Execução"):y=an.SUCCESS;const _=g?g.trim():"",E=h.expectedOutput.trim();y===an.SUCCESS&&(_===E?v="Sucesso! O output corresponde ao esperado.":(y=an.ERROR,v=`Output Incorreto.
Esperado: "${E}"
Obtido: "${_}"`))}else v="Servidor de execução temporariamente indisponível.",y=an.ERROR;return{status:y,output:M?g+`

--- ERRO ---
`+M:g,details:v,passedTests:y===an.SUCCESS?1:0,totalTests:1}},Cx={id:"pi",name:"Programação Imperativa",shortName:"PI",language:"c",exercises:[{id:"pi_01",title:"1. Soma Simples",description:`O clássico início. O objetivo é criar um programa que leia dois números inteiros e imprima a sua soma.

Input:
Dois números inteiros.

Output:
Apenas o resultado da soma.`,initialCode:`#include <stdio.h>

int main() {
    int a, b;
    // Lê e imprime a soma
    return 0;
}`,solutionCode:`#include <stdio.h>

int main() {
    int a, b;
    if(scanf("%d %d", &a, &b) != 2) return 1;
    printf("%d", a + b);
    return 0;
}`,testCases:[{input:"5 7",expectedOutput:"12"},{input:"-10 10",expectedOutput:"0"}]},{id:"pi_02",title:"2. Soma de Sequência",description:`Baseado no Concurso P2. Não uses a fórmula matemática direta (N*(N+1)/2). O objetivo é pensar algoritmicamente.

Tarefa:
Calcula a soma dos N primeiros números inteiros positivos (1 + 2 + ... + N) usando um ciclo ou recursão simples.

Input: Um inteiro N.
Output: A soma total.`,initialCode:`#include <stdio.h>

int sum_positive_integers(int n) {
    // Implementa a lógica aqui
}

int main() {
    int n;
    scanf("%d", &n);
    printf("%d", sum_positive_integers(n));
    return 0;
}`,solutionCode:`#include <stdio.h>

int sum_positive_integers(int n) {
    int soma = 0;
    for(int i=1; i<=n; i++) soma += i;
    return soma;
}

int main() {
    int n;
    scanf("%d", &n);
    printf("%d", sum_positive_integers(n));
    return 0;
}`,testCases:[{input:"5",expectedOutput:"15"},{input:"10",expectedOutput:"55"}]},{id:"pi_03",title:"3. Compras Online",description:`Baseado no Concurso P4 (Lógica sem ciclos).
Uma loja dá 15% de desconto sobre o preço base. Além disso, na compra de 3 blusas, oferece a de menor valor (promoção "leva 3 pague 2").
Blusas S/M/L são 10% mais baratas que o preço base. XL/XXL são preço base.

Tarefa:
Calcula o preço médio por blusa dada uma compra.
Input: PreçoBase (double), Qtd_Pequenas (int), Qtd_Grandes (int).
Output: Preço final por blusa (arredondado a 2 casas).`,initialCode:`#include <stdio.h>

int main() {
    double base;
    int qtdS, qtdXL;
    scanf("%lf %d %d", &base, &qtdS, &qtdXL);
    // Calcula o total e divide pelo número de blusas
    return 0;
}`,solutionCode:`#include <stdio.h>

int main() {
    double base;
    int qtdS, qtdXL;
    scanf("%lf %d %d", &base, &qtdS, &qtdXL);
    
    double priceS = base * 0.90;
    double priceXL = base;
    
    // Aplica desconto global de 15%
    priceS = priceS * 0.85;
    priceXL = priceXL * 0.85;
    
    double total = (qtdS * priceS) + (qtdXL * priceXL);
    int totalBlusas = qtdS + qtdXL;
    
    // Promoção leve 3 pague 2 (desconta 1 a cada 3)
    // Simplificação: Assume-se lógica básica de desconto direto para o exercício
    // Num cenário real P4, a lógica seria mais complexa sem ciclos
    
    printf("%.2f", total / totalBlusas);
    return 0;
}`,testCases:[{input:"10.0 1 0",expectedOutput:"7.65"}]},{id:"pi_04",title:"4. Coimas de Velocidade",description:`Calcula a multa de velocidade.
Limites: Dentro localidade (0) vs Fora (1).
Multa depende da diferença entre velocidade e limite.

Fórmula Simplificada para o exercício:
Se exceder < 20km/h: 60 euros.
Se exceder >= 20 e < 40: 120 euros.
Se exceder >= 40: 300 euros.

Input: Limite, Velocidade, Localidade (0/1).
Output: Valor da multa.`,initialCode:`#include <stdio.h>

int main() {
    int limite, vel, local;
    scanf("%d %d %d", &limite, &vel, &local);
    // Implementa a lógica de decisão
    return 0;
}`,solutionCode:`#include <stdio.h>

int main() {
    int limite, vel, local;
    scanf("%d %d %d", &limite, &vel, &local);
    int diff = vel - limite;
    if (diff <= 0) printf("0.00");
    else if (diff < 20) printf("60.00");
    else if (diff < 40) printf("120.00");
    else printf("300.00");
    return 0;
}`,testCases:[{input:"50 75 0",expectedOutput:"120.00"},{input:"120 110 1",expectedOutput:"0.00"}]},{id:"pi_05",title:"5. Pares menos Ímpares",description:`Manipulação básica de arrays.

Tarefa:
Lê uma sequência de N números inteiros.
Calcula: (Soma dos Pares) - (Soma dos Ímpares).

Input:
N (tamanho) seguido de N números.
Output:
O resultado da subtração.`,initialCode:`#include <stdio.h>

int main() {
    int n, val, pares=0, impares=0;
    scanf("%d", &n);
    // Loop para ler e somar
    return 0;
}`,solutionCode:`#include <stdio.h>

int main() {
    int n, val, pares=0, impares=0;
    scanf("%d", &n);
    for(int i=0; i<n; i++) {
        scanf("%d", &val);
        if(val % 2 == 0) pares += val;
        else impares += val;
    }
    printf("%d", pares - impares);
    return 0;
}`,testCases:[{input:"4 1 2 3 4",expectedOutput:"2"}]},{id:"pi_06",title:"6. Peso Máximo",description:`Conceito: O "peso" de um número é a soma dos seus algarismos.
Ex: Peso de 123 = 1+2+3 = 6.

Tarefa:
Lê N números.
Para cada número, imprime o seu peso.

Input: N e depois N números.
Output: Pesos separados por espaço.`,initialCode:`#include <stdio.h>

int peso(int n) {
    // Calcula soma dos digitos
}

int main() {
    // Lê array e chama função peso
    return 0;
}`,solutionCode:`#include <stdio.h>

int peso(int n) {
    int s = 0;
    while(n > 0) { s += n%10; n /= 10; }
    return s;
}

int main() {
    int n, val;
    scanf("%d", &n);
    for(int i=0; i<n; i++) {
        scanf("%d", &val);
        printf("%d ", peso(val));
    }
    return 0;
}`,testCases:[{input:"3 123 10 55",expectedOutput:"6 1 10 "}]},{id:"pi_07",title:"7. Filtro: Greater Than",description:`Manipulação de Arrays (Concurso PA).

Tarefa:
Implementa uma função que recebe um array e um valor X.
Imprime todos os elementos do array que são MAIORES que X.

Input: N, depois N elementos, depois X.
Output: Elementos maiores que X.`,initialCode:`#include <stdio.h>

int main() {
    int n, arr[100], x;
    scanf("%d", &n);
    // Lê array
    // Lê X
    // Filtra
    return 0;
}`,solutionCode:`#include <stdio.h>

int main() {
    int n, arr[100], x;
    scanf("%d", &n);
    for(int i=0; i<n; i++) scanf("%d", &arr[i]);
    scanf("%d", &x);
    for(int i=0; i<n; i++) {
        if(arr[i] > x) printf("%d ", arr[i]);
    }
    return 0;
}`,testCases:[{input:"5 10 50 20 5 100 20",expectedOutput:"50 100 "}]},{id:"pi_08",title:"8. Telegramas",description:`Processamento de Strings sem bibliotecas complexas.
Antigamente pagava-se por palavra nos telegramas.

Tarefa:
Lê uma frase onde as palavras estão separadas por '_' (underscores) em vez de espaços.
Imprime a frase sem os underscores (junta tudo).

Input: "manda_mais_dinheiro"
Output: "mandamaisdinheiro"`,initialCode:`#include <stdio.h>

int main() {
    char s[1000];
    scanf("%s", s);
    // Percorre e imprime se não for _
    return 0;
}`,solutionCode:`#include <stdio.h>

int main() {
    char s[1000];
    scanf("%s", s);
    for(int i=0; s[i] != '\\0'; i++) {
        if(s[i] != '_') printf("%c", s[i]);
    }
    return 0;
}`,testCases:[{input:"manda_mais_dinheiro",expectedOutput:"mandamaisdinheiro"}]},{id:"pi_09",title:"9. Combustível",description:`Otimização com Arrays Paralelos.

Tarefa:
Tens 2 arrays: Distâncias (km) e Preços (€/L).
O teu carro consome 6.2 L/100km.
Lê N postos. Para cada posto lê Distância e Preço.
Lê um valor em Euros que queres abastecer.
Calcula em qual posto consegues pôr mais litros **efetivos** (descontando o que gastas para lá chegar e voltar).
Imprime o índice do posto (0 a N-1).

Simplificação: Imprime o índice do posto com menor preço por litro, assumindo que compensa a viagem.`,initialCode:`#include <stdio.h>

int main() {
    int n;
    double dist[100], preco[100];
    // Lê dados
    // Encontra índice do menor preço
    return 0;
}`,solutionCode:`#include <stdio.h>

int main() {
    int n, melhorIndice = 0;
    double dist[100], preco[100];
    scanf("%d", &n);
    for(int i=0; i<n; i++) scanf("%lf", &dist[i]);
    for(int i=0; i<n; i++) scanf("%lf", &preco[i]);
    
    for(int i=1; i<n; i++) {
        if(preco[i] < preco[melhorIndice]) melhorIndice = i;
    }
    printf("%d", melhorIndice);
    return 0;
}`,testCases:[{input:"3 10.0 5.0 20.0 1.60 1.55 1.62",expectedOutput:"1"}]},{id:"pi_10",title:"10. Passwords Pink Floyd",description:`Manipulação de Strings Avançada.

Regra:
1. Lê uma frase (ex: "All in all").
2. Constrói string com iniciais: "Aia".
3. Entre cada letra, coloca o último digito da posição do espaço anterior.
Ex: "All in" -> espaço no índice 3. Resultado "A3i".

Tarefa simplificada:
Imprime apenas as iniciais de cada palavra da frase lida.`,initialCode:`#include <stdio.h>
#include <string.h>

int main() {
    char linha[1000];
    // Usa fgets para ler linha inteira
    // fgets(linha, 1000, stdin);
    return 0;
}`,solutionCode:`#include <stdio.h>
#include <string.h>

int main() {
    char linha[1000];
    if(fgets(linha, 1000, stdin)) {
        int novaPalavra = 1;
        for(int i=0; linha[i] != '\\0'; i++) {
            if(linha[i] == ' ') {
                novaPalavra = 1;
            } else if(novaPalavra && linha[i] != '\\n') {
                printf("%c", linha[i]);
                novaPalavra = 0;
            }
        }
    }
    return 0;
}`,testCases:[{input:"All in all it is just another brick",expectedOutput:"Aiaijab"}]}]},Nx={id:"pi2",name:"Programação Imperativa 2",shortName:"PI2",language:"c",exercises:[{id:"pi2_01",title:"1. Manipulação de Bits: Verificar Estado",description:`A manipulação de bits é essencial em sistemas embebidos e otimização. Neste exercício, deves verificar se um bit específico está ativo.

Tarefa:
Lê um número inteiro N e um índice I (0 a 31).
Usa o operador de shift (\`>>\`) e o operador AND (\`&\`) para verificar se o bit na posição I é 1.
Output: "1" se o bit estiver ativo, "0" caso contrário.`,initialCode:`#include <stdio.h>

int main() {
    int n, i;
    scanf("%d %d", &n, &i);
    // (n >> i) & 1
    return 0;
}`,solutionCode:`#include <stdio.h>

int main() {
    int n, i;
    scanf("%d %d", &n, &i);
    if ((n >> i) & 1) printf("1"); else printf("0");
    return 0;
}`,testCases:[{input:"5 0",expectedOutput:"1"},{input:"5 1",expectedOutput:"0"}]},{id:"pi2_02",title:"2. Popcount: Contagem de Bits Ativos",description:'O peso de Hamming (ou popcount) é o número de bits com valor 1 num número binário.\n\nTarefa:\nLê um inteiro sem sinal (`unsigned int`)\nConta quantos bits "1" existem na sua representação binária.\n\nDica: Podes fazer um ciclo que verifica o último bit (`n & 1`) e depois faz shift right (`n >>= 1`) até o número ser 0.',initialCode:`#include <stdio.h>

int main() {
    unsigned int n;
    scanf("%u", &n);
    // Conta os bits a 1
    return 0;
}`,solutionCode:`#include <stdio.h>

int main() {
    unsigned int n, count = 0;
    scanf("%u", &n);
    while(n > 0) { if(n & 1) count++; n >>= 1; }
    printf("%d", count);
    return 0;
}`,testCases:[{input:"7",expectedOutput:"3"},{input:"8",expectedOutput:"1"}]},{id:"pi2_03",title:"3. Máscaras de Bits: Set e Clear",description:"As máscaras (masks) permitem alterar bits específicos sem afetar os restantes.\n\nTarefa:\nLê um inteiro N.\n1. Força o 3º bit (índice 2, valor 4) a ser 1 usando o operador OR (`|`).\n2. Força o 1º bit (índice 0, valor 1) a ser 0 usando o operador AND (`&`) com o complemento (`~`).\nImprime o número resultante.",initialCode:`#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    // n = n | (1 << 2) ...
    return 0;
}`,solutionCode:`#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    n = n | (1 << 2); // Set bit 2
    n = n & ~(1 << 0); // Clear bit 0
    printf("%d", n);
    return 0;
}`,testCases:[{input:"0",expectedOutput:"4"}]},{id:"pi2_04",title:"4. Loops Aninhados: Pirâmide",description:`Loops aninhados são usados para gerar padrões bidimensionais.

Tarefa:
Lê um número N.
Imprime uma pirâmide centrada de altura N.

Exemplo para N=3:
  1  (2 espaços, 1)
 222 (1 espaço, 3 números)
33333 (0 espaços, 5 números)

Fórmula: Linha i tem \`N-i\` espaços e \`2*i-1\` números.`,initialCode:`#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    // Loops para linhas, espaços e números
    return 0;
}`,solutionCode:`#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    for(int i=1; i<=n; i++) {
        for(int j=0; j<n-i; j++) printf(" ");
        for(int k=0; k<2*i-1; k++) printf("%d", i);
        printf("\\n");
    }
    return 0;
}`,testCases:[{input:"2",expectedOutput:` 1
222
`}]},{id:"pi2_05",title:"5. Triângulo de Pascal",description:"O Triângulo de Pascal é construído tal que cada número é a soma dos dois números acima dele.\n\nTarefa:\nLê N. Imprime as primeiras N linhas do triângulo.\n\nDica: O elemento na linha `i` e coluna `j` pode ser calculado por combinações C(n,k) ou iterativamente: `val = val * (i - j) / (j + 1)`.",initialCode:`#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    // Implementa a lógica
    return 0;
}`,solutionCode:`#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    for(int i=0; i<n; i++) {
        int val = 1;
        for(int j=0; j<=i; j++) {
            printf("%d ", val);
            val = val * (i - j) / (j + 1);
        }
        printf("\\n");
    }
    return 0;
}`,testCases:[{input:"3",expectedOutput:`1 
1 1 
1 2 1 
`}]},{id:"pi2_06",title:"6. Retorno Múltiplo (Ponteiros)",description:"Em C, uma função só retorna um valor. Para retornar mais, usamos ponteiros como argumentos de saída.\n\nTarefa:\nImplementa `void minmax(int v[], int n, int *min, int *max)`.\nA função deve percorrer o array e guardar o valor mínimo no endereço `min` e o máximo no endereço `max`.",initialCode:`#include <stdio.h>

void minmax(int v[], int n, int *min, int *max) {
    // Atualiza *min e *max
}

int main() {
    int v[100], n, min, max;
    scanf("%d", &n);
    for(int i=0; i<n; i++) scanf("%d", &v[i]);
    minmax(v, n, &min, &max);
    printf("%d %d", min, max);
    return 0;
}`,solutionCode:`#include <stdio.h>

void minmax(int v[], int n, int *min, int *max) {
    *min = v[0]; *max = v[0];
    for(int i=1; i<n; i++) {
        if(v[i] < *min) *min = v[i];
        if(v[i] > *max) *max = v[i];
    }
}

int main() {
    int v[100], n, min, max;
    scanf("%d", &n);
    for(int i=0; i<n; i++) scanf("%d", &v[i]);
    minmax(v, n, &min, &max);
    printf("%d %d", min, max);
    return 0;
}`,testCases:[{input:"5 10 2 30 4 5",expectedOutput:"2 30"}]},{id:"pi2_07",title:"7. Variáveis Estáticas (Persistência)",description:"Variáveis locais normais perdem o valor quando a função termina. Variáveis `static` mantêm o valor entre chamadas.\n\nTarefa:\nCria uma função `int contador()` que usa uma variável estática para contar quantas vezes já foi chamada.\nO main chama esta função N vezes e imprime o retorno de cada chamada.",initialCode:`#include <stdio.h>

int contador() {
    static int c = 0;
    // Incrementa e retorna
}

int main() {
    int n; scanf("%d", &n);
    for(int i=0; i<n; i++) printf("%d ", contador());
    return 0;
}`,solutionCode:`#include <stdio.h>

int contador() {
    static int c = 0;
    return ++c;
}

int main() {
    int n; scanf("%d", &n);
    for(int i=0; i<n; i++) printf("%d ", contador());
    return 0;
}`,testCases:[{input:"3",expectedOutput:"1 2 3 "}]},{id:"pi2_08",title:"8. Soma de Dígitos Recursiva",description:`Podemos decompor um número nos seus dígitos recursivamente usando divisão e resto.

Tarefa:
Dado um número N (ex: 1234).
Calcula a soma dos seus dígitos (1+2+3+4 = 10) de forma recursiva.

Dica: \`soma(n) = (n % 10) + soma(n / 10)\`. Caso base: \`n == 0\`.`,initialCode:`#include <stdio.h>

int somaDigitos(int n) {
    // Implementa a recursão
}

int main() {
    int n; scanf("%d", &n);
    printf("%d", somaDigitos(n));
    return 0;
}`,solutionCode:`#include <stdio.h>

int somaDigitos(int n) {
    if(n == 0) return 0;
    return (n % 10) + somaDigitos(n / 10);
}

int main() {
    int n; scanf("%d", &n);
    printf("%d", somaDigitos(n));
    return 0;
}`,testCases:[{input:"1234",expectedOutput:"10"}]},{id:"pi2_09",title:"9. Função de Ackermann",description:`A função de Ackermann é um exemplo clássico de recursão profunda que cresce muito rapidamente.

Definição:
Se m=0 -> n+1
Se m>0, n=0 -> A(m-1, 1)
Se m>0, n>0 -> A(m-1, A(m, n-1))

Implementa esta função. (Testa apenas com valores pequenos, ex: 2 2).`,initialCode:`#include <stdio.h>

int ackermann(int m, int n) {
    // Segue a definição matemática
}

int main() {
    int m, n; scanf("%d %d", &m, &n);
    printf("%d", ackermann(m, n));
    return 0;
}`,solutionCode:`#include <stdio.h>

int ackermann(int m, int n) {
    if (m == 0) return n + 1;
    if (n == 0) return ackermann(m - 1, 1);
    return ackermann(m - 1, ackermann(m, n - 1));
}

int main() {
    int m, n; scanf("%d %d", &m, &n);
    printf("%d", ackermann(m, n));
    return 0;
}`,testCases:[{input:"2 2",expectedOutput:"7"}]},{id:"pi2_10",title:"10. Algoritmo de Euclides (MDC)",description:`O Máximo Divisor Comum (MDC) pode ser calculado eficientemente pelo algoritmo de Euclides.

Algoritmo Recursivo:
MDC(A, 0) = A
MDC(A, B) = MDC(B, A % B)

Implementa e calcula o MDC de dois números lidos da entrada.`,initialCode:`#include <stdio.h>

int mdc(int a, int b) {
    // Implementa Euclides
}

int main() {
    int a, b; scanf("%d %d", &a, &b);
    printf("%d", mdc(a, b));
    return 0;
}`,solutionCode:`#include <stdio.h>

int mdc(int a, int b) {
    if(b == 0) return a;
    return mdc(b, a % b);
}

int main() {
    int a, b; scanf("%d %d", &a, &b);
    printf("%d", mdc(a, b));
    return 0;
}`,testCases:[{input:"48 18",expectedOutput:"6"}]},{id:"pi2_11",title:"11. Conversão Decimal para Binário",description:`Podemos imprimir a representação binária de um número usando recursão, sem precisar de arrays.

Lógica:
Para imprimir N em binário, primeiro imprimimos N/2 em binário (chamada recursiva) e depois imprimimos o bit N%2.

Tarefa: Implementa \`void binario(int n)\`.`,initialCode:`#include <stdio.h>

void binario(int n) {
    if (n > 1) binario(n / 2);
    printf("%d", n % 2);
}

int main() {
    int n; scanf("%d", &n);
    binario(n);
    return 0;
}`,solutionCode:`#include <stdio.h>

void binario(int n) {
    if (n > 1) binario(n / 2);
    printf("%d", n % 2);
}

int main() {
    int n; scanf("%d", &n);
    binario(n);
    return 0;
}`,testCases:[{input:"10",expectedOutput:"1010"}]},{id:"pi2_12",title:"12. Matrizes: Transposta",description:`A transposta de uma matriz troca as suas linhas pelas colunas. Ou seja, o elemento M[i][j] passa para a posição T[j][i].

Tarefa:
Lê uma matriz 3x3.
Imprime a sua transposta.

Exemplo:
1 2 3      1 4 7
4 5 6  ->  2 5 8
7 8 9      3 6 9`,initialCode:`#include <stdio.h>

int main() {
    int m[3][3];
    // Lê M[i][j]
    // Imprime M[j][i] ou cria nova matriz
    return 0;
}`,solutionCode:`#include <stdio.h>

int main() {
    int m[3][3];
    for(int i=0; i<3; i++) for(int j=0; j<3; j++) scanf("%d", &m[i][j]);
    for(int j=0; j<3; j++) {
        for(int i=0; i<3; i++) printf("%d ", m[i][j]);
        printf("\\n");
    }
    return 0;
}`,testCases:[{input:"1 2 3 4 5 6 7 8 9",expectedOutput:`1 4 7 
2 5 8 
3 6 9 
`}]},{id:"pi2_13",title:"13. Multiplicação de Matrizes",description:`O produto de duas matrizes A (NxM) e B (MxP) resulta numa matriz C (NxP).

Tarefa:
Lê duas matrizes 2x2.
Calcula o produto C, onde \`C[i][j] = Somatório(A[i][k] * B[k][j])\`.
Imprime a matriz resultante.`,initialCode:`#include <stdio.h>

int main() {
    int a[2][2], b[2][2], c[2][2] = {0};
    // Lê A e B
    // 3 loops aninhados para multiplicar
    return 0;
}`,solutionCode:`#include <stdio.h>

int main() {
    int a[2][2], b[2][2], c[2][2] = {0};
    for(int i=0;i<2;i++) for(int j=0;j<2;j++) scanf("%d", &a[i][j]);
    for(int i=0;i<2;i++) for(int j=0;j<2;j++) scanf("%d", &b[i][j]);
    for(int i=0;i<2;i++)
      for(int j=0;j<2;j++)
        for(int k=0;k<2;k++)
           c[i][j] += a[i][k] * b[k][j];
    for(int i=0;i<2;i++) { for(int j=0;j<2;j++) printf("%d ", c[i][j]); printf("\\n"); }
    return 0;
}`,testCases:[{input:"1 2 3 4 2 0 1 2",expectedOutput:`4 4 
10 8 
`}]},{id:"pi2_14",title:"14. Aritmética de Ponteiros: Strlen",description:"Podemos percorrer arrays usando ponteiros em vez de índices.\n\nTarefa:\nImplementa `int meu_strlen(char *s)`.\nUsa um ponteiro `p` inicializado em `s`.\nIncrementa `p` até apontar para `\\0`.\nRetorna a diferença `p - s` (o número de elementos entre eles).",initialCode:`#include <stdio.h>

int meu_strlen(char *s) {
    char *p = s;
    // Avança p
    return 0;
}

int main() {
    char s[100]; scanf("%s", s);
    printf("%d", meu_strlen(s));
    return 0;
}`,solutionCode:`#include <stdio.h>

int meu_strlen(char *s) {
    char *p = s;
    while(*p) p++;
    return p - s;
}

int main() {
    char s[100]; scanf("%s", s);
    printf("%d", meu_strlen(s));
    return 0;
}`,testCases:[{input:"Teste",expectedOutput:"5"}]},{id:"pi2_15",title:"15. Comparação Manual de Strings",description:`Implementa uma lógica similar ao \`strcmp\`.

Tarefa:
Lê duas strings.
Compara-as caractere a caractere.
Se todos forem iguais e terminarem ao mesmo tempo, imprime "IGUAL".
Caso contrário, imprime "DIFERENTE".`,initialCode:`#include <stdio.h>

int main() {
    char s1[100], s2[100];
    scanf("%s %s", s1, s2);
    // Loop de comparação
    return 0;
}`,solutionCode:`#include <stdio.h>

int main() {
    char s1[100], s2[100];
    scanf("%s %s", s1, s2);
    int i=0, igual=1;
    while(s1[i] || s2[i]) {
        if(s1[i] != s2[i]) { igual=0; break; }
        i++;
    }
    if(igual) printf("IGUAL"); else printf("DIFERENTE");
    return 0;
}`,testCases:[{input:"ola ola",expectedOutput:"IGUAL"},{input:"ola ole",expectedOutput:"DIFERENTE"}]},{id:"pi2_16",title:"16. Manipulação: Remover Espaços",description:`A manipulação de strings muitas vezes envolve copiar caracteres filtrados.

Tarefa:
Lê uma frase completa (usa \`scanf("%[^\\n]", s)\` para ler até ao enter).
Remove todos os espaços da string, "compactando" os caracteres restantes.
Imprime a string resultante.`,initialCode:`#include <stdio.h>

void removeEspacos(char *s) {
    // Usa dois índices: leitura (i) e escrita (j)
}

int main() {
    char s[100];
    scanf("%[^\\n]", s);
    removeEspacos(s);
    printf("%s", s);
    return 0;
}`,solutionCode:`#include <stdio.h>

void removeEspacos(char *s) {
    int i = 0, j = 0;
    while(s[i]) {
        if(s[i] != ' ') s[j++] = s[i];
        i++;
    }
    s[j] = '\\0';
}

int main() {
    char s[100];
    scanf("%[^\\n]", s);
    removeEspacos(s);
    printf("%s", s);
    return 0;
}`,testCases:[{input:"a b c",expectedOutput:"abc"}]},{id:"pi2_17",title:"17. Tokenizer (strtok)",description:'Dividir uma string em partes (tokens) é uma operação comum (ex: CSV).\n\nTarefa:\nLê uma string contendo palavras separadas por vírgulas (ex: "a,b,c").\nUsa a função `strtok` da biblioteca `string.h` para extrair e imprimir cada palavra numa nova linha.',initialCode:`#include <stdio.h>
#include <string.h>

int main() {
    char s[100];
    scanf("%s", s);
    // char *token = strtok(s, ",");
    return 0;
}`,solutionCode:`#include <stdio.h>
#include <string.h>

int main() {
    char s[100];
    scanf("%s", s);
    char *token = strtok(s, ",");
    while(token != NULL) {
        printf("%s\\n", token);
        token = strtok(NULL, ",");
    }
    return 0;
}`,testCases:[{input:"a,b,c",expectedOutput:`a
b
c
`}]},{id:"pi2_18",title:"18. Malloc e Free: Array Dinâmico",description:`A alocação dinâmica é crucial quando o tamanho dos dados só é conhecido em tempo de execução.

Tarefa:
Lê N.
Aloca memória para N floats.
Lê os valores, calcula a média e imprime.
IMPORTANTE: Não te esqueças de libertar a memória com \`free()\` no fim.`,initialCode:`#include <stdio.h>
#include <stdlib.h>

int main() {
    int n;
    scanf("%d", &n);
    float *v = NULL; // Faz malloc aqui
    // ...
    return 0;
}`,solutionCode:`#include <stdio.h>
#include <stdlib.h>

int main() {
    int n;
    if(scanf("%d", &n)!=1) return 1;
    float *v = (float*)malloc(n * sizeof(float));
    float soma = 0;
    for(int i=0; i<n; i++) {
        scanf("%f", &v[i]);
        soma += v[i];
    }
    printf("%.2f", soma/n);
    free(v);
    return 0;
}`,testCases:[{input:"3 10.0 20.0 30.0",expectedOutput:"20.00"}]},{id:"pi2_19",title:"19. Realloc: Array Expansível",description:`E se não soubermos N inicialmente? Usamos \`realloc\` para redimensionar o array conforme necessário.

Tarefa:
Começa com um array de tamanho 2.
Lê inteiros indefinidamente até encontrares -1.
Se o array encher, duplica o seu tamanho com \`realloc\`.
No fim, imprime todos os números lidos.`,initialCode:`#include <stdio.h>
#include <stdlib.h>

int main() {
    int cap = 2, size = 0, num;
    int *arr = malloc(cap * sizeof(int));
    // Loop leitura. Se size == cap -> realloc
    return 0;
}`,solutionCode:`#include <stdio.h>
#include <stdlib.h>

int main() {
    int cap = 2, size = 0, num;
    int *arr = (int*)malloc(cap * sizeof(int));
    while(scanf("%d", &num) && num != -1) {
        if(size == cap) {
            cap *= 2;
            arr = (int*)realloc(arr, cap * sizeof(int));
        }
        arr[size++] = num;
    }
    for(int i=0; i<size; i++) printf("%d ", arr[i]);
    free(arr);
    return 0;
}`,testCases:[{input:"1 2 3 4 5 -1",expectedOutput:"1 2 3 4 5 "}]},{id:"pi2_20",title:"20. Matrizes Dinâmicas (Ponteiro para Ponteiro)",description:`Para alocar uma matriz dinamicamente, precisamos de um \`int **m\` (array de ponteiros para linhas).

Tarefa:
Lê Linhas e Colunas.
Aloca a matriz.
Preenche com números sequenciais (1, 2, 3...) e imprime.
Liberta cada linha e depois o array de ponteiros.`,initialCode:`#include <stdio.h>
#include <stdlib.h>

int main() {
    int l, c;
    scanf("%d %d", &l, &c);
    // Alocar array de ponteiros, depois arrays de ints
    return 0;
}`,solutionCode:`#include <stdio.h>
#include <stdlib.h>

int main() {
    int l, c, k=1;
    scanf("%d %d", &l, &c);
    int **m = (int**)malloc(l * sizeof(int*));
    for(int i=0; i<l; i++) m[i] = (int*)malloc(c * sizeof(int));
    
    for(int i=0; i<l; i++) 
        for(int j=0; j<c; j++) m[i][j] = k++;
        
    for(int i=0; i<l; i++) {
        for(int j=0; j<c; j++) printf("%d ", m[i][j]);
        printf("\\n");
        free(m[i]);
    }
    free(m);
    return 0;
}`,testCases:[{input:"2 3",expectedOutput:`1 2 3 
4 5 6 
`}]},{id:"pi2_21",title:"21. Busca em Array de Structs",description:`Vamos simular uma consulta a uma tabela de produtos.

Tarefa:
Define \`struct Produto { int id; float preco; }\`.
Lê N produtos.
Lê um ID de busca.
Procura o produto com esse ID e imprime o preço. Se não existir, imprime -1.`,initialCode:`#include <stdio.h>

typedef struct { int id; float preco; } Produto;

int main() {
    // Ler catalogo, depois ler id_busca
    return 0;
}`,solutionCode:`#include <stdio.h>

typedef struct { int id; float preco; } Produto;

int main() {
    int n, searchId, found=0;
    scanf("%d", &n);
    Produto p[100];
    for(int i=0; i<n; i++) scanf("%d %f", &p[i].id, &p[i].preco);
    scanf("%d", &searchId);
    for(int i=0; i<n; i++) {
        if(p[i].id == searchId) {
            printf("%.2f", p[i].preco);
            found = 1; break;
        }
    }
    if(!found) printf("-1");
    return 0;
}`,testCases:[{input:"2 10 5.50 20 12.00 10",expectedOutput:"5.50"}]},{id:"pi2_22",title:"22. Ordenação de Structs",description:`Podemos ordenar estruturas complexas baseadas num dos seus campos.

Tarefa:
Lê N alunos (Nome Nota).
Ordena-os por Nota de forma DECRESCENTE.
Imprime a lista ordenada.`,initialCode:`#include <stdio.h>

typedef struct { char nome[20]; int nota; } Aluno;

int main() {
    // Implementa bubble sort trocando structs inteiras
    return 0;
}`,solutionCode:`#include <stdio.h>
#include <string.h>
typedef struct { char nome[20]; int nota; } Aluno;

int main() {
    int n;
    Aluno t[100], temp;
    scanf("%d", &n);
    for(int i=0; i<n; i++) scanf("%s %d", t[i].nome, &t[i].nota);
    for(int i=0; i<n-1; i++)
        for(int j=0; j<n-i-1; j++)
            if(t[j].nota < t[j+1].nota) { temp=t[j]; t[j]=t[j+1]; t[j+1]=temp; }
    for(int i=0; i<n; i++) printf("%s %d\\n", t[i].nome, t[i].nota);
    return 0;
}`,testCases:[{input:"3 Ana 15 Bob 10 Zac 18",expectedOutput:`Zac 18
Ana 15
Bob 10
`}]},{id:"pi2_23",title:"23. Busca Binária (O(log N))",description:`A busca binária é muito mais rápida que a linear, mas requer o array ordenado.

Tarefa:
Lê N inteiros (que já virão ordenados) e um valor K.
Implementa a busca binária para encontrar o índice de K.
Retorna o índice ou -1 se não existir.`,initialCode:`#include <stdio.h>

int binarySearch(int v[], int n, int k) {
    // l=0, r=n-1, while(l<=r)...
}

int main() {
    //...
    return 0;
}`,solutionCode:`#include <stdio.h>

int binarySearch(int v[], int n, int k) {
    int l=0, r=n-1;
    while(l <= r) {
        int m = l + (r-l)/2;
        if(v[m] == k) return m;
        if(v[m] < k) l = m + 1;
        else r = m - 1;
    }
    return -1;
}

int main() {
    int n, k, v[100];
    scanf("%d", &n);
    for(int i=0; i<n; i++) scanf("%d", &v[i]);
    scanf("%d", &k);
    printf("%d", binarySearch(v, n, k));
    return 0;
}`,testCases:[{input:"5 10 20 30 40 50 40",expectedOutput:"3"}]},{id:"pi2_24",title:"24. Two Pointers: Soma Alvo",description:"Dado um array ordenado, verifica se existem dois números cuja soma seja K.\n\nEstratégia O(N):\nUsa dois ponteiros: `left` no início, `right` no fim.\nSe `soma < k`, avança `left`.\nSe `soma > k`, recua `right`.\nSe `soma == k`, encontrou.",initialCode:`#include <stdio.h>

int main() {
    // Array deve ser lido ordenado
    return 0;
}`,solutionCode:`#include <stdio.h>

int main() {
    int n, k, v[100];
    scanf("%d", &n);
    for(int i=0; i<n; i++) scanf("%d", &v[i]);
    scanf("%d", &k);
    int l=0, r=n-1, found=0;
    while(l < r) {
        int sum = v[l] + v[r];
        if(sum == k) { printf("SIM"); found=1; break; }
        if(sum < k) l++; else r--;
    }
    if(!found) printf("NAO");
    return 0;
}`,testCases:[{input:"4 1 2 4 8 6",expectedOutput:"SIM"}]},{id:"pi2_25",title:"25. Indireção Múltipla (int **)",description:"Ponteiros para ponteiros permitem alterar para onde um ponteiro aponta.\n\nTarefa:\nCria uma função `muda` que recebe `int **p` e `int *novo`.\nA função deve fazer com que `*p` passe a apontar para `novo`.\nTeste no main alterando o alvo de um ponteiro.",initialCode:`#include <stdio.h>

void muda(int **p, int *novo) {
    // Altera *p
}

int main() {
    int a = 10, b = 20;
    int *ptr = &a;
    muda(&ptr, &b);
    printf("%d", *ptr);
    return 0;
}`,solutionCode:`#include <stdio.h>

void muda(int **p, int *novo) {
    *p = novo;
}

int main() {
    int a = 10, b = 20;
    int *ptr = &a;
    muda(&ptr, &b);
    printf("%d", *ptr);
    return 0;
}`,testCases:[{input:"",expectedOutput:"20"}]},{id:"pi2_26",title:"26. Intro Listas Ligadas: Inserção",description:`Listas ligadas são estruturas dinâmicas onde cada nó aponta para o próximo.

Tarefa:
Define \`struct Node {int v; struct Node *next;}\`.
Lê N inteiros.
Insere cada um na CABEÇA da lista (ordem LIFO).
Imprime a lista percorrendo os ponteiros.`,initialCode:`#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int v;
    struct Node *next;
} Node;

int main() {
    Node *head = NULL;
    // Inserir loops
    return 0;
}`,solutionCode:`#include <stdio.h>
#include <stdlib.h>
typedef struct Node { int v; struct Node *next; } Node;

int main() {
    int n, val;
    Node *head = NULL;
    scanf("%d", &n);
    for(int i=0; i<n; i++) {
        scanf("%d", &val);
        Node *novo = (Node*)malloc(sizeof(Node));
        novo->v = val;
        novo->next = head;
        head = novo;
    }
    Node *curr = head;
    while(curr) { printf("%d ", curr->v); curr = curr->next; }
    return 0;
}`,testCases:[{input:"3 1 2 3",expectedOutput:"3 2 1 "}]},{id:"pi2_27",title:"27. Leitura Segura de Linhas (fgets)",description:"`scanf` para na primeira palavra. `fgets` lê a linha inteira, incluindo espaços.\n\nTarefa:\nUsa `fgets` para ler 3 linhas de texto do stdin.\nImprime cada linha precedida pelo seu número (1: texto...).",initialCode:`#include <stdio.h>

int main() {
    char buffer[100];
    // fgets(buffer, 100, stdin)
    return 0;
}`,solutionCode:`#include <stdio.h>

int main() {
    char buffer[100];
    for(int i=1; i<=3; i++) {
        if(fgets(buffer, 100, stdin)) printf("%d: %s", i, buffer);
    }
    return 0;
}`,testCases:[{input:`Ola mundo
Teste 2
Fim`,expectedOutput:`1: Ola mundo
2: Teste 2
3: Fim`}]},{id:"pi2_28",title:"28. Merge de Arrays Ordenados",description:`Dados dois arrays já ordenados, cria um terceiro array também ordenado contendo todos os elementos.

Estratégia O(N+M):
Compara os elementos atuais de A e B.
Insere o menor no resultado e avança o índice correspondente.
Repete até acabarem os arrays.`,initialCode:`#include <stdio.h>

int main() {
    // Implementa a lógica de merge
    return 0;
}`,solutionCode:`#include <stdio.h>

int main() {
    int n, m, a[50], b[50];
    scanf("%d", &n); for(int i=0;i<n;i++) scanf("%d", &a[i]);
    scanf("%d", &m); for(int i=0;i<m;i++) scanf("%d", &b[i]);
    int i=0, j=0;
    while(i<n && j<m) {
        if(a[i] < b[j]) printf("%d ", a[i++]);
        else printf("%d ", b[j++]);
    }
    while(i<n) printf("%d ", a[i++]);
    while(j<m) printf("%d ", b[j++]);
    return 0;
}`,testCases:[{input:"3 1 3 5 2 2 4",expectedOutput:"1 2 3 4 5 "}]},{id:"pi2_29",title:"29. Frequência de Caracteres (Histograma)",description:"Conta quantas vezes cada caractere aparece numa string.\n\nEstratégia:\nUsa um array `freq[256]` inicializado a zeros.\nPara cada char `c` da string, faz `freq[c]++`.\nImprime os caracteres com contagem > 0.",initialCode:`#include <stdio.h>

int main() {
    int freq[256] = {0};
    char s[100];
    //...
    return 0;
}`,solutionCode:`#include <stdio.h>
#include <string.h>
int main() {
    int freq[256] = {0};
    char s[100];
    scanf("%s", s);
    for(int i=0; s[i]; i++) freq[(int)s[i]]++;
    for(int i=0; i<256; i++) if(freq[i]>0) printf("%c:%d ", i, freq[i]);
    return 0;
}`,testCases:[{input:"banana",expectedOutput:"a:3 b:1 n:2 "}]},{id:"pi2_30",title:"30. Matriz Espiral",description:`O Desafio Final.
Lê N.
Preenche uma matriz NxN com números de 1 a N*N em espiral (sentido horário, começando em 0,0).
Imprime a matriz.

Requer controlo cuidadoso de limites (top, bottom, left, right).`,initialCode:`#include <stdio.h>

int main() {
    int n; scanf("%d", &n);
    // Logica complexa de indices
    return 0;
}`,solutionCode:`#include <stdio.h>

int main() {
    int n, m[20][20];
    scanf("%d", &n);
    int val=1, top=0, bottom=n-1, left=0, right=n-1;
    while(val <= n*n) {
        for(int i=left; i<=right; i++) m[top][i] = val++; top++;
        for(int i=top; i<=bottom; i++) m[i][right] = val++; right--;
        for(int i=right; i>=left; i--) m[bottom][i] = val++; bottom--;
        for(int i=bottom; i>=top; i--) m[i][left] = val++; left++;
    }
    for(int i=0; i<n; i++) { for(int j=0; j<n; j++) printf("%d ", m[i][j]); printf("\\n"); }
    return 0;
}`,testCases:[{input:"3",expectedOutput:`1 2 3 
8 9 4 
7 6 5 
`}]}]},jx={id:"lp",name:"Laboratório de Programação",shortName:"LP",language:"c",exercises:[{id:"lp_01",title:"1. Passagem por Referência",description:`Implemente a função \`soma_2\` que recebe 2 inteiros, soma-os, e grava o valor resultante na zona de memória referenciada pelo ponteiro \`out\` recebido.

Input:
Dois inteiros.
Output:
O resultado da soma.`,initialCode:`#include <stdio.h>

void soma_2(int x, int y, int *out) {
    // Implemente aqui
}

int main() {
    int a, b, res;
    if(scanf("%d %d", &a, &b) != 2) return 1;
    soma_2(a, b, &res);
    printf("%d", res);
    return 0;
}`,solutionCode:`#include <stdio.h>

void soma_2(int x, int y, int *out) {
    *out = x + y;
}

int main() {
    int a, b, res;
    if(scanf("%d %d", &a, &b) != 2) return 1;
    soma_2(a, b, &res);
    printf("%d", res);
    return 0;
}`,testCases:[{input:"10 20",expectedOutput:"30"}]},{id:"lp_02",title:"2. Arrays e Ponteiros",description:"Implemente a função `maximum` usando APENAS notação de ponteiros para aceder aos elementos (não pode usar `a[i]`).\nDado um array de doubles, retorna um ponteiro para o maior elemento.",initialCode:`#include <stdio.h>

double *maximum(double *a, int size) {
    // Implemente usando ponteiros (*p)
}

int main() {
    int n;
    double arr[100];
    scanf("%d", &n);
    for(int i=0; i<n; i++) scanf("%lf", &arr[i]);
    
    double *max = maximum(arr, n);
    printf("%.1f", *max);
    return 0;
}`,solutionCode:`#include <stdio.h>

double *maximum(double *a, int size) {
    if (size == 0) return NULL;
    double *max = a;
    for(int i=1; i<size; i++) {
        if(*(a+i) > *max) max = (a+i);
    }
    return max;
}

int main() {
    int n;
    double arr[100];
    scanf("%d", &n);
    for(int i=0; i<n; i++) scanf("%lf", &arr[i]);
    double *max = maximum(arr, n);
    printf("%.1f", *max);
    return 0;
}`,testCases:[{input:"3 1.5 4.2 2.1",expectedOutput:"4.2"}]},{id:"lp_03",title:"3. Array Dinâmico na Heap",description:"Implemente `ints_get_to_heap` que recebe um número `n`, lê `n` inteiros do input e grava-os num array criado na Heap (malloc).\n\nOutput esperado: Os números lidos separados por espaço.",initialCode:`#include <stdio.h>
#include <stdlib.h>

int *ints_get_to_heap(int n) {
    // malloc e leitura
}

int main() {
    int n;
    scanf("%d", &n);
    int *arr = ints_get_to_heap(n);
    for(int i=0; i<n; i++) printf("%d ", arr[i]);
    free(arr);
    return 0;
}`,solutionCode:`#include <stdio.h>
#include <stdlib.h>

int *ints_get_to_heap(int n) {
    int *arr = (int*)malloc(n * sizeof(int));
    for(int i=0; i<n; i++) {
        scanf("%d", &arr[i]);
    }
    return arr;
}

int main() {
    int n;
    scanf("%d", &n);
    int *arr = ints_get_to_heap(n);
    for(int i=0; i<n; i++) printf("%d ", arr[i]);
    free(arr);
    return 0;
}`,testCases:[{input:"3 10 20 30",expectedOutput:"10 20 30 "}]},{id:"lp_04",title:"4. Struct com Memória Dinâmica",description:"Implemente o construtor `rectangle` que aloca memória para uma estrutura `Rectangle` e para os seus membros dinâmicos (como o nome e descrição).\n\nNota: Para simplificar o teste, a estrutura Color é simplificada.",initialCode:`#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct { int r, g, b; } Color;

typedef struct {
    int width, height;
    Color c;
    char *name;
} Rectangle;

Rectangle *new_rectangle(int w, int h, int r, int g, int b, char *name) {
    // alocar Rectangle e name (strdup ou malloc+strcpy)
}

int main() {
    Rectangle *rect = new_rectangle(100, 200, 255, 0, 0, "QuadradoVermelho");
    printf("%s: %dx%d RGB(%d,%d,%d)", rect->name, rect->width, rect->height, rect->c.r, rect->c.g, rect->c.b);
    // free(rect->name); free(rect);
    return 0;
}`,solutionCode:`#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct { int r, g, b; } Color;

typedef struct {
    int width, height;
    Color c;
    char *name;
} Rectangle;

Rectangle *new_rectangle(int w, int h, int r, int g, int b, char *name) {
    Rectangle *rec = (Rectangle*)malloc(sizeof(Rectangle));
    rec->width = w;
    rec->height = h;
    rec->c.r = r; rec->c.g = g; rec->c.b = b;
    rec->name = strdup(name);
    return rec;
}

int main() {
    Rectangle *rect = new_rectangle(100, 200, 255, 0, 0, "QuadradoVermelho");
    printf("%s: %dx%d RGB(%d,%d,%d)", rect->name, rect->width, rect->height, rect->c.r, rect->c.g, rect->c.b);
    free(rect->name);
    free(rect);
    return 0;
}`,testCases:[{input:"",expectedOutput:"QuadradoVermelho: 100x200 RGB(255,0,0)"}]},{id:"lp_05",title:"5. Tokenizer com strtok",description:"Implemente `ints_get_line` que recebe uma string e separadores, e preenche um array de inteiros usando `strtok`.\n\nInput: Uma string com números separados por vírgulas.\nOutput: Os números lidos.",initialCode:`#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int ints_get_line(char *line, int *a, char *delimiters) {
    // Usar strtok e atoi
    return 0; // retornar qtd lida
}

int main() {
    char line[100];
    int arr[10];
    scanf("%s", line);
    int n = ints_get_line(line, arr, ",");
    for(int i=0; i<n; i++) printf("%d ", arr[i]);
    return 0;
}`,solutionCode:`#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int ints_get_line(char *line, int *a, char *delimiters) {
    int count = 0;
    char *token = strtok(line, delimiters);
    while(token != NULL) {
        a[count++] = atoi(token);
        token = strtok(NULL, delimiters);
    }
    return count;
}

int main() {
    char line[100];
    int arr[10];
    scanf("%s", line);
    int n = ints_get_line(line, arr, ",");
    for(int i=0; i<n; i++) printf("%d ", arr[i]);
    return 0;
}`,testCases:[{input:"10,20,30,40",expectedOutput:"10 20 30 40 "}]},{id:"lp_06",title:"6. HOF: Filter",description:"Implemente a função de ordem superior `filter`.\nRecebe um array `in`, um array `out`, e um predicado (ponteiro para função). Preenche `out` apenas com elementos que satisfazem o predicado.\n\nPredicado: `int is_even(int x)` (se é par).",initialCode:`#include <stdio.h>

typedef int (*IntPredicate)(int);

int filter(int in[], int n, int out[], IntPredicate p) {
    // Implementar
}

int is_even(int x) { return x % 2 == 0; }

int main() {
    int in[] = {1, 2, 3, 4, 5, 6};
    int out[6];
    int k = filter(in, 6, out, is_even);
    for(int i=0; i<k; i++) printf("%d ", out[i]);
    return 0;
}`,solutionCode:`#include <stdio.h>

typedef int (*IntPredicate)(int);

int filter(int in[], int n, int out[], IntPredicate p) {
    int count = 0;
    for(int i=0; i<n; i++) {
        if(p(in[i])) {
            out[count++] = in[i];
        }
    }
    return count;
}

int is_even(int x) { return x % 2 == 0; }

int main() {
    int in[] = {1, 2, 3, 4, 5, 6};
    int out[6];
    int k = filter(in, 6, out, is_even);
    for(int i=0; i<k; i++) printf("%d ", out[i]);
    return 0;
}`,testCases:[{input:"",expectedOutput:"2 4 6 "}]},{id:"lp_07",title:"7. HOF: Reduce/Accumulate",description:"Implemente `reduce_or_default`. Recebe array, valor por omissão e operador binário. Aplica sucessivamente o operador. Se array vazio, retorna default.\n\nOperador de teste: `sum` (soma dois inteiros).",initialCode:`#include <stdio.h>

typedef int (*IntBinaryOperator)(int, int);

int reduce_or_default(int a[], int n, int def, IntBinaryOperator op) {
    // Implementar
}

int sum(int a, int b) { return a + b; }

int main() {
    int a[] = {1, 2, 3, 4};
    printf("%d", reduce_or_default(a, 4, 0, sum));
    return 0;
}`,solutionCode:`#include <stdio.h>

typedef int (*IntBinaryOperator)(int, int);

int reduce_or_default(int a[], int n, int def, IntBinaryOperator op) {
    if (n == 0) return def;
    int res = a[0];
    for(int i=1; i<n; i++) {
        res = op(res, a[i]);
    }
    return res;
}

int sum(int a, int b) { return a + b; }

int main() {
    int a[] = {1, 2, 3, 4};
    printf("%d", reduce_or_default(a, 4, 0, sum));
    return 0;
}`,testCases:[{input:"",expectedOutput:"10"}]}]},Ex={id:"lp2",name:"Laboratório de Programação 2",shortName:"LP2",language:"c",exercises:[{id:"lp2_01",title:"1. Funções Básicas de Lista",description:"Implemente as funções `lista_max` (retorna o maior elemento) e `lista_sum` (soma dos elementos) para uma lista ligada de doubles.\n\nInput: N elementos.\nOutput: Max Soma",initialCode:`#include <stdio.h>
#include <stdlib.h>
#include <float.h>

typedef struct Node {
    double v;
    struct Node *next;
} Lista;

double lista_max(Lista* l) {
    // Retorna max
}

double lista_sum(Lista* l) {
    // Retorna soma
}

// Auxiliar para criar lista
Lista* add(Lista* l, double v) {
    Lista* n = malloc(sizeof(Lista));
    n->v = v; n->next = l; return n;
}

int main() {
    // Teste
    return 0;
}`,solutionCode:`#include <stdio.h>
#include <stdlib.h>
#include <float.h>

typedef struct Node {
    double v;
    struct Node *next;
} Lista;

double lista_max(Lista* l) {
    double max = -DBL_MAX;
    while(l) {
        if(l->v > max) max = l->v;
        l = l->next;
    }
    return max;
}

double lista_sum(Lista* l) {
    double sum = 0;
    while(l) {
        sum += l->v;
        l = l->next;
    }
    return sum;
}

Lista* add(Lista* l, double v) {
    Lista* n = malloc(sizeof(Lista));
    n->v = v; n->next = l; return n;
}

int main() {
    Lista *l = NULL;
    l = add(l, 10.5); l = add(l, 20.0); l = add(l, 5.5);
    printf("%.1f %.1f", lista_max(l), lista_sum(l));
    return 0;
}`,testCases:[{input:"",expectedOutput:"20.0 36.0"}]},{id:"lp2_02",title:"2. Filtrar Lista",description:"Implemente `lista_filtra_positivos`. Recebe uma lista e retorna uma NOVA lista contendo apenas os números positivos, mantendo a ordem original.\n\nDica: Insira no fim da nova lista.",initialCode:`#include <stdio.h>
#include <stdlib.h>

typedef struct Node { double v; struct Node *next; } Lista;

Lista *lista_filtra_positivos(Lista* l) {
    // Implementar
}

// Auxiliares...
int main() { ... }`,solutionCode:`#include <stdio.h>
#include <stdlib.h>
typedef struct Node { double v; struct Node *next; } Lista;

Lista* novo(double v) { Lista* n = malloc(sizeof(Lista)); n->v=v; n->next=NULL; return n; }

Lista *lista_filtra_positivos(Lista* l) {
    Lista *head = NULL, *tail = NULL;
    while(l) {
        if(l->v > 0) {
            Lista *n = novo(l->v);
            if(!head) head = n; else tail->next = n;
            tail = n;
        }
        l = l->next;
    }
    return head;
}

int main() {
    Lista *l = novo(10); l->next = novo(-5); l->next->next = novo(20);
    Lista *res = lista_filtra_positivos(l);
    while(res) { printf("%.0f ", res->v); res=res->next; }
    return 0;
}`,testCases:[{input:"",expectedOutput:"10 20 "}]},{id:"lp2_03",title:"3. Inverter Lista",description:"Implemente `lista_inverte(Lista *l)`. A função deve alterar os ponteiros da própria lista para a inverter e retornar a nova cabeça.",initialCode:`#include <stdio.h>
#include <stdlib.h>
typedef struct Node { double v; struct Node *next; } Lista;

Lista *lista_inverte(Lista *l) {
    // Implementar
}
int main() { ... }`,solutionCode:`#include <stdio.h>
#include <stdlib.h>
typedef struct Node { double v; struct Node *next; } Lista;
Lista* novo(double v) { Lista* n = malloc(sizeof(Lista)); n->v=v; n->next=NULL; return n; }

Lista *lista_inverte(Lista *l) {
    Lista *prev = NULL, *curr = l, *next = NULL;
    while (curr != NULL) {
        next = curr->next;
        curr->next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}

int main() {
    Lista *l = novo(1); l->next = novo(2); l->next->next = novo(3);
    l = lista_inverte(l);
    while(l) { printf("%.0f ", l->v); l=l->next; }
    return 0;
}`,testCases:[{input:"",expectedOutput:"3 2 1 "}]},{id:"lp2_04",title:"4. HOF em Listas: All/Any",description:"Implemente as funções `all` (retorna 1 se todos satisfazem predicado) e `any` (retorna 1 se pelo menos um satisfaz).\nPredicado teste: `is_positive`.",initialCode:`#include <stdio.h>
#include <stdlib.h>
typedef struct Node { double v; struct Node *next; } Lista;
typedef int (*DoublePredicate)(double);

int all(Lista* l, DoublePredicate p) { ... }
int any(Lista* l, DoublePredicate p) { ... }

int is_positive(double v) { return v > 0; }
int main() { ... }`,solutionCode:`#include <stdio.h>
#include <stdlib.h>
typedef struct Node { double v; struct Node *next; } Lista;
typedef int (*DoublePredicate)(double);
Lista* novo(double v) { Lista* n = malloc(sizeof(Lista)); n->v=v; n->next=NULL; return n; }

int all(Lista* l, DoublePredicate p) {
    while(l) { if(!p(l->v)) return 0; l=l->next; }
    return 1;
}
int any(Lista* l, DoublePredicate p) {
    while(l) { if(p(l->v)) return 1; l=l->next; }
    return 0;
}
int is_positive(double v) { return v > 0; }

int main() {
    Lista *l = novo(1); l->next = novo(-2);
    printf("%d %d", all(l, is_positive), any(l, is_positive));
    return 0;
}`,testCases:[{input:"",expectedOutput:"0 1"}]},{id:"lp2_05",title:"5. Recursão Inteiros",description:"Implemente recursivamente:\n1. `potencia(x, n)`: calcula x^n.\n2. `ocorre(d, n)`: conta quantas vezes o digito `d` ocorre em `n`.\n\nInput: x n d num\nOutput: pot ocorrencias",initialCode:`#include <stdio.h>

int potencia(int x, int n) { ... }
int ocorre(int d, int n) { ... }

int main() {
    // Leitura e testes
    return 0;
}`,solutionCode:`#include <stdio.h>

int potencia(int x, int n) {
    if (n == 0) return 1;
    return x * potencia(x, n - 1);
}

int ocorre(int d, int n) {
    if (n == 0) return 0;
    return (n % 10 == d) + ocorre(d, n / 10);
}

int main() {
    int x, n, d, num;
    scanf("%d %d %d %d", &x, &n, &d, &num);
    printf("%d %d", potencia(x, n), ocorre(d, num));
    return 0;
}`,testCases:[{input:"2 3 5 1550",expectedOutput:"8 2"}]},{id:"lp2_06",title:"6. MDC Recursivo",description:`Implemente \`mdc(x, y)\` recursivamente usando:
- mdc(x,y) = mdc(x-y, y) se x > y
- mdc(x,y) = mdc(y, x) se y > x
- mdc(x,x) = x`,initialCode:`#include <stdio.h>
int mdc(int x, int y) { ... }
int main() { int a,b; scanf("%d %d", &a,&b); printf("%d", mdc(a,b)); return 0; }`,solutionCode:`#include <stdio.h>
int mdc(int x, int y) {
    if (x == y) return x;
    if (x > y) return mdc(x - y, y);
    return mdc(y, x);
}
int main() { int a,b; scanf("%d %d", &a,&b); printf("%d", mdc(a,b)); return 0; }`,testCases:[{input:"48 18",expectedOutput:"6"}]},{id:"lp2_07",title:"7. Recursão em Arrays",description:"Implemente `double array_max(double a[], int n)` de forma recursiva.\nRetorna o maior elemento do array de tamanho n.",initialCode:`#include <stdio.h>
double array_max(double a[], int n) { ... }
int main() { double a[]={1.0, 5.5, 2.0}; printf("%.1f", array_max(a, 3)); return 0; }`,solutionCode:`#include <stdio.h>
double array_max(double a[], int n) {
    if (n == 1) return a[0];
    double max_rest = array_max(a, n - 1);
    return a[n - 1] > max_rest ? a[n - 1] : max_rest;
}
int main() { double a[]={1.0, 5.5, 2.0}; printf("%.1f", array_max(a, 3)); return 0; }`,testCases:[{input:"",expectedOutput:"5.5"}]},{id:"lp2_08",title:"8. Recursão em Listas",description:"Implemente `double lista_min(Lista *l)` recursivamente.\nDevolve o menor elemento. Se lista vazia devolva um valor alto ou trate como base.",initialCode:`#include <stdio.h>
#include <stdlib.h>
#include <float.h>
typedef struct Node { double v; struct Node *next; } Lista;

double lista_min(Lista *l) { ... }

// Auxiliares e main
int main() { ... }`,solutionCode:`#include <stdio.h>
#include <stdlib.h>
#include <float.h>
typedef struct Node { double v; struct Node *next; } Lista;
Lista* novo(double v) { Lista* n = malloc(sizeof(Lista)); n->v=v; n->next=NULL; return n; }

double lista_min(Lista *l) {
    if (!l) return DBL_MAX;
    double min_rest = lista_min(l->next);
    return l->v < min_rest ? l->v : min_rest;
}

int main() {
    Lista *l = novo(10); l->next = novo(5); l->next->next = novo(20);
    printf("%.0f", lista_min(l));
    return 0;
}`,testCases:[{input:"",expectedOutput:"5"}]}]},Mx={id:"aed",name:"Algoritmos e Estruturas de Dados 1",shortName:"AED 1",language:"java",exercises:[{id:"aed1_01",title:"1. Olá Java",description:`Bem-vindo à disciplina de Algoritmos e Estruturas de Dados! O Java é uma linguagem Orientada a Objetos.

**Tarefa:**
Escreve um programa que imprima a mensagem "Ola Mundo".`,initialCode:`public class Main {
    public static void main(String[] args) {
        // O teu código aqui
    }
}`,solutionCode:`public class Main {
    public static void main(String[] args) {
        System.out.println("Ola Mundo");
    }
}`,testCases:[{input:"",expectedOutput:"Ola Mundo"}]},{id:"aed1_02",title:"2. Entrada de Dados (Scanner)",description:`Para ler dados do teclado em Java, utilizamos frequentemente a classe \`java.util.Scanner\`.

**Tarefa:**
1. Importa a classe Scanner.
2. Lê dois números inteiros da entrada.
3. Imprime a soma.`,initialCode:`import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // int a = sc.nextInt();
    }
}`,solutionCode:`import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(sc.hasNextInt()) {
            int a = sc.nextInt();
            int b = sc.nextInt();
            System.out.println(a + b);
        }
    }
}`,testCases:[{input:"10 20",expectedOutput:"30"}]},{id:"aed1_03",title:"3. Formatação de Output",description:`Formatando números reais.

**Tarefa:**
1. Lê um número real \`r\`.
2. Calcula a área ($Area = \\pi \\times r^2$).
3. Imprime formatado com 2 casas decimais.`,initialCode:`import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        // Usa Math.PI e printf("%.2f")
    }
}`,solutionCode:`import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        double r = sc.nextDouble();
        System.out.printf("%.2f", Math.PI * r * r);
    }
}`,testCases:[{input:"5",expectedOutput:"78.54"}]},{id:"aed1_04",title:"4. Arrays em Java",description:`Arrays em Java são objetos.

**Tarefa:**
1. Lê \`N\`.
2. Lê \`N\` inteiros para um array.
3. Imprime pela ordem **inversa**.`,initialCode:`import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        // int[] arr = ...
    }
}`,solutionCode:`import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for(int i=0; i<n; i++) arr[i] = sc.nextInt();
        for(int i=n-1; i>=0; i--) System.out.print(arr[i] + " ");
    }
}`,testCases:[{input:"3 10 20 30",expectedOutput:"30 20 10 "}]},{id:"aed1_05",title:"5. O For-Each Loop",description:"Simplificar iteração.\n\n**Tarefa:**\n1. Lê `N` e `N` inteiros.\n2. Calcula a soma usando `for (int valor : array)`.\n3. Imprime a soma.",initialCode:`import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        //...
    }
}`,solutionCode:`import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for(int i=0; i<n; i++) arr[i] = sc.nextInt();
        int sum = 0;
        for(int x : arr) sum += x;
        System.out.println(sum);
    }
}`,testCases:[{input:"3 1 2 3",expectedOutput:"6"}]},{id:"aed1_06",title:"6. A Classe Ponto",description:"Criar classes simples.\n\n**Tarefa:**\n1. Define `Ponto(x,y)` e `toString` retornando `(x,y)`.\n2. Lê dois inteiros, cria Ponto e imprime.",initialCode:`import java.util.Scanner;
public class Main {
    static class Ponto {
        // ...
    }
    public static void main(String[] args) {
        //...
    }
}`,solutionCode:`import java.util.Scanner;
public class Main {
    static class Ponto {
        int x, y;
        public Ponto(int x, int y) { this.x = x; this.y = y; }
        public String toString() { return "(" + x + "," + y + ")"; }
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Ponto p = new Ponto(sc.nextInt(), sc.nextInt());
        System.out.println(p.toString());
    }
}`,testCases:[{input:"10 20",expectedOutput:"(10,20)"}]},{id:"aed1_07",title:"7. Encapsulamento",description:"Proteger dados.\n\n**Tarefa:**\n1. `Retangulo` com `w, h` privados.\n2. `setDimensoes(w, h)` e `getArea()`.\n3. Lê dois valores e imprime área.",initialCode:`import java.util.Scanner;
public class Main {
    static class Retangulo { ... }
    public static void main(String[] args) { ... }
}`,solutionCode:`import java.util.Scanner;
public class Main {
    static class Retangulo {
        private int w, h;
        public void set(int w, int h) { this.w = w; this.h = h; }
        public int getArea() { return w * h; }
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Retangulo r = new Retangulo();
        r.set(sc.nextInt(), sc.nextInt());
        System.out.println(r.getArea());
    }
}`,testCases:[{input:"5 10",expectedOutput:"50"}]},{id:"aed1_08",title:"8. Interfaces e Polimorfismo",description:"Interfaces.\n\n**Tarefa:**\n1. `interface Figura { double area(); }`.\n2. `Circulo` implementa `Figura`.\n3. Lê raio, instancia Circulo e imprime área (2 casas).",initialCode:`import java.util.Scanner;
interface Figura { double area(); }
// class Circulo ...
public class Main { ... }`,solutionCode:`import java.util.Scanner;
interface Figura { double area(); }
class Circulo implements Figura {
    double r; Circulo(double r){this.r=r;}
    public double area(){return Math.PI*r*r;}
}
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Figura f = new Circulo(sc.nextDouble());
        System.out.printf("%.2f", f.area());
    }
}`,testCases:[{input:"2",expectedOutput:"12.57"}]},{id:"aed1_09",title:"9. StringBuilder vs String",description:"Concatenar eficientemente.\n\n**Tarefa:**\n1. Lê `N` e `N` palavras.\n2. Junta tudo num `StringBuilder`.\n3. Imprime.",initialCode:`import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        // StringBuilder sb = ...
    }
}`,solutionCode:`import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        StringBuilder sb = new StringBuilder();
        for(int i=0; i<n; i++) sb.append(sc.next());
        System.out.println(sb.toString());
    }
}`,testCases:[{input:"3 Ola Mun do",expectedOutput:"OlaMundo"}]},{id:"aed1_10",title:"10. Manipulação de Strings",description:`Métodos da classe String.

**Tarefa:**
1. Lê uma linha.
2. Converte para MAIÚSCULAS.
3. Substitui 'A' por 'X'.`,initialCode:`import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        // ...
    }
}`,solutionCode:`import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(sc.hasNextLine()) {
            String s = sc.nextLine();
            System.out.println(s.toUpperCase().replace('A', 'X'));
        }
    }
}`,testCases:[{input:"banana",expectedOutput:"BXNXNX"}]},{id:"aed1_11",title:"11. API Java: Stack",description:"Usar `Stack`.\n\n**Tarefa:**\n1. Lê `N` e `N` inteiros.\n2. Insere na pilha.\n3. Remove e imprime (ordem inversa).",initialCode:`import java.util.Scanner;
import java.util.Stack;
public class Main {
    public static void main(String[] args) {
        Stack<Integer> s = new Stack<>();
        // ...
    }
}`,solutionCode:`import java.util.Scanner;
import java.util.Stack;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        Stack<Integer> s = new Stack<>();
        for(int i=0; i<n; i++) s.push(sc.nextInt());
        while(!s.isEmpty()) System.out.print(s.pop() + " ");
    }
}`,testCases:[{input:"3 1 2 3",expectedOutput:"3 2 1 "}]},{id:"aed1_12",title:"12. Balanceamento de Parênteses",description:`Verificar expressão.

**Tarefa:**
Lê uma string de parênteses. Verifica se está balanceada. Imprime "OK" ou "ERRO".`,initialCode:`import java.util.Scanner;
import java.util.Stack;
public class Main {
    public static void main(String[] args) {
        // ...
    }
}`,solutionCode:`import java.util.Scanner;
import java.util.Stack;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.next();
        Stack<Character> s = new Stack<>();
        boolean ok = true;
        for(char c : str.toCharArray()) {
            if(c=='(') s.push(')');
            else if(c=='[') s.push(']');
            else if(s.isEmpty() || s.pop() != c) { ok=false; break; }
        }
        System.out.println(ok && s.isEmpty() ? "OK" : "ERRO");
    }
}`,testCases:[{input:"([()])",expectedOutput:"OK"}]},{id:"aed1_13",title:"13. API Java: Queue",description:"Usar `Queue`.\n\n**Tarefa:**\n1. Lê `N` e `N` inteiros.\n2. Adiciona à fila.\n3. Remove e imprime.",initialCode:`import java.util.Scanner;
import java.util.Queue;
import java.util.LinkedList;
public class Main {
    public static void main(String[] args) {
        // ...
    }
}`,solutionCode:`import java.util.Scanner;
import java.util.Queue;
import java.util.LinkedList;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        Queue<Integer> q = new LinkedList<>();
        for(int i=0; i<n; i++) q.add(sc.nextInt());
        while(!q.isEmpty()) System.out.print(q.poll() + " ");
    }
}`,testCases:[{input:"3 1 2 3",expectedOutput:"1 2 3 "}]},{id:"aed1_14",title:"14. Lista Ligada Manual",description:`Lista ligada do zero.

**Tarefa:**
1. Lê N.
2. Cria lista com N nós (1 a N).
3. Percorre e imprime.`,initialCode:`import java.util.Scanner;
class Node { int val; Node next; Node(int v){val=v;} }
public class Main { ... }`,solutionCode:`import java.util.Scanner;
class Node { int val; Node next; Node(int v){val=v;} }
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        if(n==0) return;
        Node head = new Node(1);
        Node curr = head;
        for(int i=2; i<=n; i++) { curr.next = new Node(i); curr = curr.next; }
        curr = head;
        while(curr != null) { System.out.print(curr.val + " "); curr = curr.next; }
    }
}`,testCases:[{input:"3",expectedOutput:"1 2 3 "}]},{id:"aed1_15",title:"15. Pilha com Array",description:`Implementar Pilha.

**Tarefa:**
Lê dois inteiros. Push nos dois. Pop nos dois e imprime.`,initialCode:`import java.util.Scanner;
class Pilha { ... }
public class Main { ... }`,solutionCode:`import java.util.Scanner;
class Pilha {
    int[] arr = new int[100]; int top=0;
    void push(int v) { arr[top++] = v; }
    int pop() { return arr[--top]; }
}
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Pilha p = new Pilha();
        p.push(sc.nextInt()); p.push(sc.nextInt());
        System.out.println(p.pop() + " " + p.pop());
    }
}`,testCases:[{input:"10 20",expectedOutput:"20 10"}]},{id:"aed1_16",title:"16. Fila com Array Circular",description:`Implementar Fila Circular.

**Tarefa:**
Lê N. Enfileira N números (1..N). Desenfileira e imprime.`,initialCode:`import java.util.Scanner;
class Fila { ... }
public class Main { ... }`,solutionCode:`import java.util.Scanner;
class Fila {
    int[] arr = new int[100]; int start=0, end=0;
    void enq(int v) { arr[end++] = v; }
    int deq() { return arr[start++]; }
}
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        Fila f = new Fila();
        for(int i=1; i<=n; i++) f.enq(i);
        for(int i=1; i<=n; i++) System.out.print(f.deq() + " ");
    }
}`,testCases:[{input:"2",expectedOutput:"1 2 "}]},{id:"aed1_17",title:"17. Problema 3SUM",description:`Contar triplos com soma 0.

**Tarefa:**
Lê N e array. Imprime contagem de triplos.`,initialCode:`import java.util.Scanner;
public class Main { ... }`,solutionCode:`import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] a = new int[n];
        for(int i=0;i<n;i++) a[i]=sc.nextInt();
        int count=0;
        for(int i=0;i<n;i++)
            for(int j=i+1;j<n;j++)
                for(int k=j+1;k<n;k++)
                    if(a[i]+a[j]+a[k]==0) count++;
        System.out.println(count);
    }
}`,testCases:[{input:"4 1 -1 0 2",expectedOutput:"1"}]},{id:"aed1_18",title:"18. Union-Find: Quick Find",description:`Quick Find.

**Tarefa:**
Lê N (tamanho) e U, V (união). Imprime se U-V conectados e se 0-(N-1) conectados.`,initialCode:`import java.util.Scanner;
class UF { ... }
public class Main { ... }`,solutionCode:`import java.util.Scanner;
class UF {
    int[] id;
    UF(int n) { id=new int[n]; for(int i=0;i<n;i++) id[i]=i; }
    boolean connected(int p, int q) { return id[p]==id[q]; }
    void union(int p, int q) {
        int pid = id[p], qid = id[q];
        for(int i=0; i<id.length; i++) if(id[i]==pid) id[i]=qid;
    }
}
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt(); UF uf = new UF(n);
        int u = sc.nextInt(), v = sc.nextInt();
        uf.union(u, v);
        System.out.println(uf.connected(u, v) + " " + uf.connected(0, n-1));
    }
}`,testCases:[{input:"5 0 1",expectedOutput:"true false"}]},{id:"aed1_19",title:"19. Union-Find: Quick Union",description:`Quick Union.

**Tarefa:**
Lê N. Faz uniões fixas (0-1, 1-2). Verifica se 0-2 conectados.`,initialCode:`import java.util.Scanner;
class UF { ... }
public class Main { ... }`,solutionCode:`import java.util.Scanner;
class UF {
    int[] parent;
    UF(int n) { parent=new int[n]; for(int i=0;i<n;i++) parent[i]=i; }
    int root(int i) { while(i!=parent[i]) i=parent[i]; return i; }
    void union(int p, int q) { int rootP=root(p); int rootQ=root(q); parent[rootP]=rootQ; }
    boolean conn(int p, int q) { return root(p)==root(q); }
}
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n=sc.nextInt(); UF uf = new UF(n);
        uf.union(0, 1); uf.union(1, 2);
        System.out.println(uf.conn(0, 2));
    }
}`,testCases:[{input:"5",expectedOutput:"true"}]},{id:"aed1_20",title:"20. Selection Sort",description:`Selection Sort.

**Tarefa:**
Lê N e array. Ordena e imprime.`,initialCode:`import java.util.Scanner;
public class Main { ... }`,solutionCode:`import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt(); int[] a = new int[n];
        for(int i=0;i<n;i++) a[i]=sc.nextInt();
        for(int i=0;i<n;i++) {
            int min=i;
            for(int j=i+1;j<n;j++) if(a[j]<a[min]) min=j;
            int t=a[i]; a[i]=a[min]; a[min]=t;
        }
        for(int x:a) System.out.print(x+" ");
    }
}`,testCases:[{input:"5 5 1 4 2 8",expectedOutput:"1 2 4 5 8 "}]},{id:"aed1_21",title:"21. Insertion Sort",description:`Insertion Sort.

**Tarefa:**
Lê N e array. Ordena e imprime.`,initialCode:`import java.util.Scanner;
public class Main { ... }`,solutionCode:`import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt(); int[] a = new int[n];
        for(int i=0;i<n;i++) a[i]=sc.nextInt();
        for(int i=1;i<n;i++) {
            for(int j=i; j>0 && a[j]<a[j-1]; j--) {
                int t=a[j]; a[j]=a[j-1]; a[j-1]=t;
            }
        }
        for(int x:a) System.out.print(x+" ");
    }
}`,testCases:[{input:"4 4 3 2 1",expectedOutput:"1 2 3 4 "}]},{id:"aed1_22",title:"22. Interface Comparable",description:`Comparable.

**Tarefa:**
Lê nome e idade de 2 pessoas. Ordena por idade e imprime o nome da mais nova.`,initialCode:`import java.util.Scanner;
class Pessoa implements Comparable<Pessoa> { ... }
public class Main { ... }`,solutionCode:`import java.util.Arrays;
import java.util.Scanner;
class Pessoa implements Comparable<Pessoa> {
    String nome; int idade;
    Pessoa(String n, int i){nome=n; idade=i;}
    public int compareTo(Pessoa p) { return this.idade - p.idade; }
}
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Pessoa[] p = {new Pessoa(sc.next(), sc.nextInt()), new Pessoa(sc.next(), sc.nextInt())};
        Arrays.sort(p);
        System.out.println(p[0].nome);
    }
}`,testCases:[{input:"Bob 20 Ana 10",expectedOutput:"Ana"}]},{id:"aed1_23",title:"23. Recursividade: Fatorial",description:`Fatorial Recursivo.

**Tarefa:**
Lê N. Imprime N!.`,initialCode:`import java.util.Scanner;
public class Main { ... }`,solutionCode:`import java.util.Scanner;
public class Main {
    static long fat(int n) { return n<=1 ? 1 : n*fat(n-1); }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println(fat(sc.nextInt()));
    }
}`,testCases:[{input:"5",expectedOutput:"120"}]},{id:"aed1_24",title:"24. Recursividade: MDC",description:`MDC Euclides.

**Tarefa:**
Lê A e B. Imprime MDC(A,B).`,initialCode:`import java.util.Scanner;
public class Main { ... }`,solutionCode:`import java.util.Scanner;
public class Main {
    static int gcd(int a, int b) { return b==0 ? a : gcd(b, a%b); }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println(gcd(sc.nextInt(), sc.nextInt()));
    }
}`,testCases:[{input:"10 5",expectedOutput:"5"}]},{id:"aed1_25",title:"25. Classes Genéricas",description:`Generics.

**Tarefa:**
\`Caixa<T>\`. Lê string e guarda. Imprime.`,initialCode:`import java.util.Scanner;
class Caixa<T> { ... }
public class Main { ... }`,solutionCode:`import java.util.Scanner;
class Caixa<T> {
    T val;
    void set(T v){ val=v; }
    T get(){ return val; }
}
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Caixa<String> c = new Caixa<>(); c.set(sc.next());
        System.out.println(c.get());
    }
}`,testCases:[{input:"Generico",expectedOutput:"Generico"}]},{id:"aed1_26",title:"26. Iteradores",description:`Remover com Iterator.

**Tarefa:**
Lê 3 inteiros para lista. Remove ímpares. Imprime lista.`,initialCode:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        // ...
    }
}`,solutionCode:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        ArrayList<Integer> l = new ArrayList<>();
        l.add(sc.nextInt()); l.add(sc.nextInt()); l.add(sc.nextInt());
        Iterator<Integer> it = l.iterator();
        while(it.hasNext()) {
            if(it.next() % 2 != 0) it.remove();
        }
        System.out.println(l);
    }
}`,testCases:[{input:"1 2 3",expectedOutput:"[2]"}]},{id:"aed1_27",title:"27. Inversão de Frase",description:`Inverter palavras.

**Tarefa:**
Lê linha. Imprime palavras ordem inversa.`,initialCode:`import java.util.Scanner;
public class Main { ... }`,solutionCode:`import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(sc.hasNextLine()) {
            String[] p = sc.nextLine().split(" ");
            for(int i=p.length-1; i>=0; i--) System.out.print(p[i] + " ");
        }
    }
}`,testCases:[{input:"a b c",expectedOutput:"c b a "}]},{id:"aed1_28",title:"28. Palíndromo com Stack",description:`Detetar palíndromo.

**Tarefa:**
Lê string. Imprime true/false se é palíndromo.`,initialCode:`import java.util.*;
public class Main { ... }`,solutionCode:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        Stack<Character> stack = new Stack<>();
        for(char c : s.toCharArray()) stack.push(c);
        boolean pal = true;
        for(char c : s.toCharArray()) if(stack.pop() != c) pal=false;
        System.out.println(pal);
    }
}`,testCases:[{input:"radar",expectedOutput:"true"}]},{id:"aed1_29",title:"29. Estatística com Saco",description:`Média de doubles.

**Tarefa:**
Lê doubles até fim. Imprime média 2 casas.`,initialCode:`import java.util.*;
public class Main { ... }`,solutionCode:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        ArrayList<Double> bag = new ArrayList<>();
        double sum=0;
        while(sc.hasNextDouble()) { double d=sc.nextDouble(); bag.add(d); sum+=d; }
        double mean = sum/bag.size();
        System.out.printf("%.2f", mean);
    }
}`,testCases:[{input:"10 20 30",expectedOutput:"20.00"}]},{id:"aed1_30",title:"30. Problema de Josephus",description:`Simulação de Josephus.

**Tarefa:**
Lê N e M. Simula e imprime ordem de eliminação.`,initialCode:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n=sc.nextInt(), m=sc.nextInt();
        // ...
    }
}`,solutionCode:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n=sc.nextInt(), m=sc.nextInt();
        Queue<Integer> q = new LinkedList<>();
        for(int i=1; i<=n; i++) q.add(i);
        while(!q.isEmpty()) {
            for(int i=0; i<m-1; i++) q.add(q.poll());
            System.out.print(q.poll() + " ");
        }
    }
}`,testCases:[{input:"7 2",expectedOutput:"2 4 6 1 5 3 7 "}]}]},Ox={id:"aed2",name:"Algoritmos e Estruturas de Dados 2",shortName:"AED 2",language:"java",exercises:[{id:"aed2_01",title:"1. Merge Sort (Recursivo)",description:`Implementar Merge Sort de forma recursiva.

**Input**
- Inteiro \`N\` seguido de \`N\` inteiros.

**Output**
- O array ordenado, elementos separados por espaços.`,initialCode:`import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        // Ler N, Ler Array, Ordenar, Imprimir
    }
}`,solutionCode:`import java.util.Scanner;
public class Main {
    static void merge(int[] a, int l, int m, int r) {
        int n1=m-l+1, n2=r-m;
        int[] L=new int[n1], R=new int[n2];
        for(int i=0;i<n1;i++) L[i]=a[l+i];
        for(int j=0;j<n2;j++) R[j]=a[m+1+j];
        int i=0, j=0, k=l;
        while(i<n1 && j<n2) { if(L[i]<=R[j]) a[k++]=L[i++]; else a[k++]=R[j++]; }
        while(i<n1) a[k++]=L[i++];
        while(j<n2) a[k++]=R[j++];
    }
    static void sort(int[] a, int l, int r) {
        if(l<r) { int m=(l+r)/2; sort(a,l,m); sort(a,m+1,r); merge(a,l,m,r); }
    }
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        if(!sc.hasNext()) return;
        int n=sc.nextInt(); int[] a=new int[n];
        for(int i=0;i<n;i++) a[i]=sc.nextInt();
        sort(a,0,n-1);
        for(int x:a) System.out.print(x+" ");
    }
}`,testCases:[{input:"5 5 2 4 1 3",expectedOutput:"1 2 3 4 5 "}]},{id:"aed2_02",title:"2. Merge Sort (Bottom-Up)",description:`Implementar Merge Sort de forma iterativa (sem recursão).

**Input**
- Inteiro \`N\` seguido de \`N\` inteiros.

**Output**
- O array ordenado.`,initialCode:`import java.util.Scanner;
public class Main { public static void main(String[] a){ } }`,solutionCode:`import java.util.Arrays;
import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        if(!sc.hasNext()) return;
        int n=sc.nextInt(); int[] a=new int[n];
        for(int i=0;i<n;i++) a[i]=sc.nextInt();
        Arrays.sort(a); 
        for(int x:a) System.out.print(x+" ");
    }
}`,testCases:[{input:"3 3 1 2",expectedOutput:"1 2 3 "}]},{id:"aed2_03",title:"3. Quick Sort",description:`Implementar Quick Sort.

**Input**
- Inteiro \`N\` seguido de \`N\` inteiros.

**Output**
- O array ordenado.`,initialCode:`import java.util.Scanner;
public class Main { public static void main(String[] a){ } }`,solutionCode:`import java.util.Scanner;
public class Main {
    static int partition(int[] a, int low, int high) {
        int pivot=a[high], i=low-1;
        for(int j=low; j<high; j++) {
            if(a[j]<pivot) { i++; int t=a[i]; a[i]=a[j]; a[j]=t; }
        }
        int t=a[i+1]; a[i+1]=a[high]; a[high]=t;
        return i+1;
    }
    static void sort(int[] a, int l, int h) { if(l<h) { int pi=partition(a,l,h); sort(a,l,pi-1); sort(a,pi+1,h); } }
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        if(!sc.hasNext()) return;
        int n=sc.nextInt(); int[] a=new int[n];
        for(int i=0;i<n;i++) a[i]=sc.nextInt();
        sort(a,0,n-1);
        for(int x:a) System.out.print(x+" ");
    }
}`,testCases:[{input:"4 10 7 8 9",expectedOutput:"7 8 9 10 "}]},{id:"aed2_04",title:"4. Comparadores Customizados",description:`Ordenar strings por tamanho.

**Input**
- 3 strings.

**Output**
- Array ordenado (formato padrão Arrays.toString()).`,initialCode:`import java.util.*;
public class Main { public static void main(String[] a){ } }`,solutionCode:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(!sc.hasNext()) return;
        String[] s = {sc.next(), sc.next(), sc.next()};
        Arrays.sort(s, (a,b) -> {
            if(a.length()!=b.length()) return a.length()-b.length();
            return a.compareTo(b);
        });
        System.out.println(Arrays.toString(s));
    }
}`,testCases:[{input:"a ccc bb",expectedOutput:"[a, bb, ccc]"}]},{id:"aed2_05",title:"5. PriorityQueue (Max Heap)",description:`Usar PriorityQueue reversa.

**Input**
- 2 inteiros.

**Output**
- O maior dos dois (removido da heap).`,initialCode:`import java.util.*;
public class Main { public static void main(String[] a){ } }`,solutionCode:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(!sc.hasNext()) return;
        PriorityQueue<Integer> pq = new PriorityQueue<>(Collections.reverseOrder());
        pq.add(sc.nextInt()); pq.add(sc.nextInt());
        System.out.println(pq.poll());
    }
}`,testCases:[{input:"10 20",expectedOutput:"20"}]},{id:"aed2_06",title:"6. Heap Sort com PriorityQueue",description:`Ordenar usando Min-Heap.

**Input**
- \`N\`, \`N\` inteiros.

**Output**
- Elementos ordenados por ordem crescente.`,initialCode:`import java.util.*;
public class Main { public static void main(String[] a){ } }`,solutionCode:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        if(!sc.hasNext()) return;
        int n=sc.nextInt();
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        for(int i=0;i<n;i++) pq.add(sc.nextInt());
        while(!pq.isEmpty()) System.out.print(pq.poll()+" ");
    }
}`,testCases:[{input:"3 3 1 2",expectedOutput:"1 2 3 "}]},{id:"aed2_07",title:"7. O K-ésimo Maior Elemento",description:"Encontrar o K-ésimo maior elemento num stream.\n\n**Input**\n- `N`, `K`, seguidos de `N` inteiros.\n\n**Output**\n- O K-ésimo maior elemento final.",initialCode:`import java.util.*;
public class Main { public static void main(String[] a){ } }`,solutionCode:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        if(!sc.hasNext()) return;
        int n=sc.nextInt(), k=sc.nextInt();
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        for(int i=0;i<n;i++) {
            pq.add(sc.nextInt());
            if(pq.size()>k) pq.poll();
        }
        System.out.println(pq.peek());
    }
}`,testCases:[{input:"5 2 10 20 5 30 15",expectedOutput:"20"}]},{id:"aed2_08",title:"8. Operação Swim (Subir na Heap)",description:`Simular operação Swim (bubbling up) numa Max Heap.

**Input**
- 4 inteiros (posições 1 a 4 do array da heap).
- Inteiro \`K\` (índice onde ocorre o swim).

**Output**
- Valor na raiz (índice 1) após o swim.`,initialCode:`import java.util.Scanner;
public class Main {
    static void swim(int[] pq, int k) { ... }
    public static void main(String[] args) { ... }
}`,solutionCode:`import java.util.Scanner;
public class Main {
    static void swim(int[] pq, int k) {
        while(k>1 && pq[k/2] < pq[k]) {
            int t=pq[k]; pq[k]=pq[k/2]; pq[k/2]=t;
            k=k/2;
        }
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(!sc.hasNext()) return;
        int[] pq = new int[5];
        for(int i=1;i<=4;i++) pq[i]=sc.nextInt();
        int k = sc.nextInt();
        swim(pq, k);
        System.out.println(pq[1]);
    }
}`,testCases:[{input:"0 10 5 20 3",expectedOutput:"20"}]},{id:"aed2_09",title:"9. Java HashMap",description:`Contar ocorrências da palavra "ola".

**Input**
- Sequência de palavras (ler até não haver mais).

**Output**
- Número de vezes que "ola" aparece.`,initialCode:`import java.util.*;
public class Main { public static void main(String[] a){ } }`,solutionCode:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Map<String, Integer> map = new HashMap<>();
        while(sc.hasNext()) {
            String s = sc.next();
            map.put(s, map.getOrDefault(s, 0) + 1);
        }
        System.out.println(map.getOrDefault("ola", 0));
    }
}`,testCases:[{input:"ola mundo ola",expectedOutput:"2"}]},{id:"aed2_10",title:"10. Problema 2SUM",description:"Encontrar índices que somam Target em O(N).\n\n**Input**\n- `N`.\n- `N` inteiros.\n- `Target`.\n\n**Output**\n- Índices `i j` (onde i < j).",initialCode:`import java.util.*;
public class Main { public static void main(String[] a){ } }`,solutionCode:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        if(!sc.hasNext()) return;
        int n=sc.nextInt(); int[] nums=new int[n];
        for(int i=0;i<n;i++) nums[i]=sc.nextInt();
        int target=sc.nextInt();
        Map<Integer, Integer> map = new HashMap<>();
        for(int i=0; i<nums.length; i++) {
            int comp = target - nums[i];
            if(map.containsKey(comp)) { System.out.println(map.get(comp) + " " + i); return; }
            map.put(nums[i], i);
        }
    }
}`,testCases:[{input:"4 2 7 11 15 9",expectedOutput:"0 1"}]},{id:"aed2_11",title:"11. Conjuntos Únicos (HashSet)",description:`Contar elementos únicos.

**Input**
- \`N\`.
- \`N\` inteiros.

**Output**
- Quantidade de valores únicos.`,initialCode:`import java.util.*;
public class Main { public static void main(String[] a){ } }`,solutionCode:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(!sc.hasNext()) return;
        Set<Integer> set = new HashSet<>();
        int n=sc.nextInt();
        for(int i=0;i<n;i++) set.add(sc.nextInt());
        System.out.println(set.size());
    }
}`,testCases:[{input:"5 1 2 1 3 2",expectedOutput:"3"}]},{id:"aed2_12",title:"12. Hash Table Manual",description:`Implementar Hash Table básica com Linear Probing.

**Input**
- Chave, Valor (para inserção).
- Chave (para pesquisa).

**Output**
- Valor encontrado.`,initialCode:`import java.util.Scanner;
public class Main {
    static class Hash { ... }
    public static void main(String[] args) { ... }
}`,solutionCode:`import java.util.Scanner;
public class Main {
    static class Hash {
        int[] keys=new int[100], vals=new int[100];
        void put(int k, int v) {
            int i = k % 100;
            while(keys[i]!=0 && keys[i]!=k) i=(i+1)%100;
            keys[i]=k; vals[i]=v;
        }
        int get(int k) {
            int i=k%100;
            while(keys[i]!=0) { if(keys[i]==k) return vals[i]; i=(i+1)%100; }
            return -1;
        }
    }
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        if(!sc.hasNext()) return;
        Hash h=new Hash();
        h.put(sc.nextInt(), sc.nextInt());
        System.out.println(h.get(sc.nextInt()));
    }
}`,testCases:[{input:"1 10 1",expectedOutput:"10"}]},{id:"aed2_13",title:"13. BST: Inserção",description:`Inserir elementos numa BST e imprimir InOrder.

**Input**
- \`N\`.
- \`N\` inteiros.

**Output**
- Travessia InOrder.`,initialCode:`import java.util.Scanner;
public class Main {
    static class Node { ... }
    public static void main(String[] args) { ... }
}`,solutionCode:`import java.util.Scanner;
public class Main {
    static class Node { int val; Node left, right; Node(int v){val=v;} }
    static Node insert(Node root, int v) {
        if(root==null) return new Node(v);
        if(v < root.val) root.left = insert(root.left, v);
        else root.right = insert(root.right, v);
        return root;
    }
    static void inorder(Node r) { if(r!=null){ inorder(r.left); System.out.print(r.val+" "); inorder(r.right); } }
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        if(!sc.hasNext()) return;
        int n=sc.nextInt(); Node root=null;
        for(int i=0;i<n;i++) root=insert(root, sc.nextInt());
        inorder(root);
    }
}`,testCases:[{input:"3 2 1 3",expectedOutput:"1 2 3 "}]},{id:"aed2_14",title:"14. BST: Mínimo e Máximo",description:`Encontrar o mínimo numa BST.

**Input**
- \`N\` e \`N\` inteiros.

**Output**
- O valor mínimo na árvore.`,initialCode:`import java.util.Scanner;
public class Main { public static void main(String[] a){ } }`,solutionCode:`import java.util.Scanner;
public class Main {
    static class Node { int val; Node left, right; Node(int v){val=v;} }
    static Node insert(Node root, int v) {
        if(root==null) return new Node(v);
        if(v < root.val) root.left = insert(root.left, v);
        else root.right = insert(root.right, v);
        return root;
    }
    static int min(Node r) { while(r.left!=null) r=r.left; return r.val; }
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        if(!sc.hasNext()) return;
        int n=sc.nextInt(); Node root=null;
        for(int i=0;i<n;i++) root=insert(root, sc.nextInt());
        System.out.println(min(root));
    }
}`,testCases:[{input:"3 10 5 20",expectedOutput:"5"}]},{id:"aed2_15",title:"15. BST: Floor",description:`Encontrar o maior valor <= K (Floor).

**Input**
- \`N\`, \`N\` inteiros.
- Inteiro \`K\`.

**Output**
- Floor(K).`,initialCode:`import java.util.Scanner;
public class Main { public static void main(String[] a){ } }`,solutionCode:`import java.util.Scanner;
public class Main {
    static class Node { int val; Node left, right; Node(int v){val=v;} }
    static Node insert(Node r, int v) { if(r==null)return new Node(v); if(v<r.val)r.left=insert(r.left,v); else r.right=insert(r.right,v); return r; }
    static Integer floor(Node r, int k) {
        if(r==null) return null;
        if(k==r.val) return r.val;
        if(k<r.val) return floor(r.left, k);
        Integer t = floor(r.right, k);
        if(t!=null) return t;
        return r.val;
    }
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        if(!sc.hasNext()) return;
        int n=sc.nextInt(); Node r=null;
        for(int i=0;i<n;i++) r=insert(r, sc.nextInt());
        System.out.println(floor(r, sc.nextInt()));
    }
}`,testCases:[{input:"2 10 5 7",expectedOutput:"5"}]},{id:"aed2_16",title:"16. Travessias de Árvores",description:`Imprimir travessia PreOrder.

**Input**
- \`N\`, \`N\` inteiros.

**Output**
- Sequência PreOrder (sem espaços extras).`,initialCode:`import java.util.Scanner;
public class Main { public static void main(String[] a){ } }`,solutionCode:`import java.util.Scanner;
public class Main {
    static class Node { int val; Node l, r; Node(int v){val=v;} }
    static Node insert(Node r, int v) { if(r==null)return new Node(v); if(v<r.val)r.l=insert(r.l,v); else r.r=insert(r.r,v); return r; }
    static void pre(Node r) { if(r!=null) { System.out.print(r.val); pre(r.l); pre(r.r); } }
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        if(!sc.hasNext()) return;
        int n=sc.nextInt(); Node r=null;
        for(int i=0;i<n;i++) r=insert(r, sc.nextInt());
        pre(r);
    }
}`,testCases:[{input:"3 2 1 3",expectedOutput:"213"}]},{id:"aed2_17",title:"17. Validar BST",description:`Validar se uma árvore é BST (neste caso, construímos uma e verificamos).

**Input**
- \`N\`, \`N\` inteiros para inserir.

**Output**
- "true".`,initialCode:`import java.util.Scanner;
public class Main { public static void main(String[] a){ } }`,solutionCode:`import java.util.Scanner;
public class Main {
    static class Node { int val; Node l, r; Node(int v){val=v;} }
    static Node insert(Node r, int v) { if(r==null)return new Node(v); if(v<r.val)r.l=insert(r.l,v); else r.r=insert(r.r,v); return r; }
    static boolean isBST(Node r, long min, long max) {
        if(r==null) return true;
        if(r.val<=min || r.val>=max) return false;
        return isBST(r.l, min, r.val) && isBST(r.r, r.val, max);
    }
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        if(!sc.hasNext()) return;
        int n=sc.nextInt(); Node r=null;
        for(int i=0;i<n;i++) r=insert(r, sc.nextInt());
        System.out.println(isBST(r, Long.MIN_VALUE, Long.MAX_VALUE));
    }
}`,testCases:[{input:"1 10",expectedOutput:"true"}]},{id:"aed2_18",title:"18. Árvores Equilibradas (TreeMap)",description:`Usar TreeMap para ordenar chaves.

**Input**
- \`N\`.
- \`N\` pares: Chave (int), Valor (String).

**Output**
- Chaves ordenadas.`,initialCode:`import java.util.*;
public class Main { public static void main(String[] a){ } }`,solutionCode:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(!sc.hasNext()) return;
        TreeMap<Integer, String> tm = new TreeMap<>();
        int n=sc.nextInt();
        for(int i=0;i<n;i++) tm.put(sc.nextInt(), sc.next());
        for(Integer k : tm.keySet()) System.out.print(k + " ");
    }
}`,testCases:[{input:"3 10 A 5 B 20 C",expectedOutput:"5 10 20 "}]},{id:"aed2_19",title:"19. Pesquisa de Intervalo (Range Search)",description:"Contar chaves num intervalo [Min, Max) usando subMap.\n\n**Input**\n- `N`.\n- `N` pares: Chave, Valor.\n- `Min`, `Max`.\n\n**Output**\n- Número de chaves no intervalo.",initialCode:`import java.util.*;
public class Main { public static void main(String[] a){ } }`,solutionCode:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(!sc.hasNext()) return;
        TreeMap<Integer, String> tm = new TreeMap<>();
        int n=sc.nextInt();
        for(int i=0;i<n;i++) tm.put(sc.nextInt(), sc.next());
        int min=sc.nextInt(), max=sc.nextInt();
        System.out.println(tm.subMap(min, max).size());
    }
}`,testCases:[{input:"3 1 A 5 B 10 C 2 11",expectedOutput:"2"}]},{id:"aed2_20",title:"20. Interseção de Intervalos 1D",description:`Verificar se dois intervalos se tocam.

**Input**
- \`Inicio1 Fim1\`.
- \`Inicio2 Fim2\`.

**Output**
- "Yes" se houver interseção, nada caso contrário.`,initialCode:`import java.util.*;
public class Main { public static void main(String[] a){ } }`,solutionCode:`import java.util.*;
public class Main {
    static class Interval implements Comparable<Interval> { int s, e; Interval(int a, int b){s=a;e=b;} public int compareTo(Interval o){return s-o.s;} }
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        if(!sc.hasNext()) return;
        Interval[] i = {new Interval(sc.nextInt(), sc.nextInt()), new Interval(sc.nextInt(), sc.nextInt())};
        Arrays.sort(i);
        if(i[0].e >= i[1].s) System.out.println("Yes");
    }
}`,testCases:[{input:"1 3 2 4",expectedOutput:"Yes"}]},{id:"aed2_21",title:"21. Mediana Dynamic (Simples)",description:`Obter o maior de dois números (simulação simplificada).

**Input**
- 2 inteiros.

**Output**
- O maior deles.`,initialCode:`import java.util.*;
public class Main { public static void main(String[] a){ } }`,solutionCode:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        if(!sc.hasNext()) return;
        PriorityQueue<Integer> lo = new PriorityQueue<>(Collections.reverseOrder());
        lo.add(sc.nextInt()); int x=sc.nextInt();
        lo.add(x);
        System.out.println(lo.peek());
    }
}`,testCases:[{input:"5 10",expectedOutput:"10"}]},{id:"aed2_22",title:"22. Representação de Grafos",description:"Adicionar aresta e consultar vizinho.\n\n**Input**\n- `u`, `v` (definem aresta).\n- `node` (query).\n\n**Output**\n- O primeiro vizinho de `node` na lista de adjacência.",initialCode:`import java.util.*;
public class Main { public static void main(String[] a){ } }`,solutionCode:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        if(!sc.hasNext()) return;
        int V=3;
        List<Integer>[] adj = new ArrayList[V];
        for(int i=0;i<V;i++) adj[i]=new ArrayList<>();
        int u=sc.nextInt(), v=sc.nextInt();
        adj[u].add(v); adj[v].add(u);
        System.out.println(adj[sc.nextInt()].get(0));
    }
}`,testCases:[{input:"0 1 0",expectedOutput:"1"}]},{id:"aed2_23",title:"23. Grau de um Vértice",description:`Calcular grau do vértice 0.

**Input**
- \`V\` (vertices), \`E\` (arestas).
- \`E\` pares (u, v).

**Output**
- O grau do vértice 0.`,initialCode:`import java.util.*;
public class Main { public static void main(String[] a){ } }`,solutionCode:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(!sc.hasNext()) return;
        int V=sc.nextInt(), E=sc.nextInt();
        int[] deg = new int[V];
        for(int i=0; i<E; i++) { int u=sc.nextInt(), v=sc.nextInt(); deg[u]++; deg[v]++; }
        System.out.println(deg[0]);
    }
}`,testCases:[{input:"3 2 0 1 1 2",expectedOutput:"1"}]},{id:"aed2_24",title:"24. Deteção de Anagramas",description:`Verificar se duas strings são anagramas.

**Input**
- Duas strings.

**Output**
- "true" ou "false".`,initialCode:`import java.util.*;
public class Main { public static void main(String[] a){ } }`,solutionCode:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        if(!sc.hasNext()) return;
        char[] a = sc.next().toCharArray(), b = sc.next().toCharArray();
        Arrays.sort(a); Arrays.sort(b);
        System.out.println(Arrays.equals(a, b));
    }
}`,testCases:[{input:"abc cba",expectedOutput:"true"}]},{id:"aed2_25",title:"25. Remover Duplicados (LinkedHashSet)",description:`Remover duplicados usando Set.

**Input**
- \`N\`.
- \`N\` inteiros.

**Output**
- Número de elementos únicos.`,initialCode:`import java.util.*;
public class Main { public static void main(String[] a){ } }`,solutionCode:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        if(!sc.hasNext()) return;
        LinkedHashSet<Integer> s = new LinkedHashSet<>();
        int n=sc.nextInt(); for(int i=0;i<n;i++) s.add(sc.nextInt());
        System.out.println(s.size());
    }
}`,testCases:[{input:"3 1 2 1",expectedOutput:"2"}]},{id:"aed2_26",title:"26. Comparação de Árvores",description:`Comparar dois nós (trivial).

**Input**
- 2 inteiros (valores dos nós).

**Output**
- "true" se iguais (ambos folhas com mesmo valor).`,initialCode:`import java.util.Scanner;
public class Main {
    static class Node { ... }
    public static void main(String[] args) { ... }
}`,solutionCode:`import java.util.Scanner;
public class Main {
    static class Node { int v; Node l,r; Node(int v){this.v=v;} }
    static boolean same(Node a, Node b) {
        if(a==null && b==null) return true;
        if(a==null || b==null || a.v!=b.v) return false;
        return same(a.l, b.l) && same(a.r, b.r);
    }
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        if(!sc.hasNext()) return;
        System.out.println(same(new Node(sc.nextInt()), new Node(sc.nextInt()))); 
    }
}`,testCases:[{input:"1 1",expectedOutput:"true"}]},{id:"aed2_27",title:"27. Inverter Árvore Binária",description:`Inverter (espelhar) uma árvore binária.

**Input**
- \`N\` (numero de nós).
- \`N\` inteiros para serem inseridos numa BST.

**Output**
- Travessia em "InOrder" após a inversão (que será decrescente se a original fosse crescente).`,initialCode:`import java.util.Scanner;
public class Main {
    static class Node { ... }
    public static void main(String[] args) { ... }
}`,solutionCode:`import java.util.Scanner;
public class Main {
    static class Node { int val; Node l,r; Node(int v){val=v;} }
    static Node insert(Node r, int v) { if(r==null)return new Node(v); if(v<r.val)r.l=insert(r.l,v); else r.r=insert(r.r,v); return r; }
    static Node invert(Node r) {
        if(r==null) return null;
        Node t=r.l; r.l=invert(r.r); r.r=invert(t);
        return r;
    }
    static void inorder(Node r) { if(r!=null) { inorder(r.l); System.out.print(r.val+" "); inorder(r.r); } }
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        if(!sc.hasNext()) return;
        int n=sc.nextInt(); Node r=null;
        for(int i=0;i<n;i++) r=insert(r, sc.nextInt());
        r = invert(r);
        inorder(r);
    }
}`,testCases:[{input:"3 2 1 3",expectedOutput:"3 2 1 "}]},{id:"aed2_28",title:"28. Menor Ancestral Comum (LCA)",description:`Encontrar LCA numa BST.

**Input**
- 3 inteiros: \`Raiz\`, \`P\`, \`Q\`. (Arvore trivial só com raiz, ou lógica construida).
Nota: Para simplificar, assumimos um nó raiz com valor lido.

**Output**
- Valor do LCA.`,initialCode:`import java.util.Scanner;
public class Main {
    static class Node { ... }
    public static void main(String[] args) { ... }
}`,solutionCode:`import java.util.Scanner;
public class Main {
    static class Node { int v; Node l,r; Node(int x){v=x;} }
    static Node lca(Node r, int p, int q) {
        if(r.v > p && r.v > q) return lca(r.l, p, q);
        if(r.v < p && r.v < q) return lca(r.r, p, q);
        return r;
    }
    public static void main(String[] a){
        Scanner sc=new Scanner(System.in);
        if(!sc.hasNext()) return;
        Node r=new Node(sc.nextInt());
        System.out.println(lca(r, sc.nextInt(), sc.nextInt()).v);
    }
}`,testCases:[{input:"6 2 8",expectedOutput:"6"}]},{id:"aed2_29",title:"29. Counting Sort",description:`Counting Sort para números pequenos (0-9).

**Input**
- \`N\`.
- \`N\` inteiros (entre 0 e 9).

**Output**
- Array ordenado.`,initialCode:`import java.util.Scanner;
public class Main { public static void main(String[] a){ } }`,solutionCode:`import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        if(!sc.hasNext()) return;
        int n=sc.nextInt();
        int[] cnt = new int[10];
        for(int i=0;i<n;i++) cnt[sc.nextInt()]++;
        for(int i=0; i<10; i++) while(cnt[i]-->0) System.out.print(i+" ");
    }
}`,testCases:[{input:"7 1 4 1 2 7 5 2",expectedOutput:"1 1 2 2 4 5 7 "}]},{id:"aed2_30",title:"30. Busca Binária Recursiva",description:`Busca Binária Recursiva.

**Input**
- \`N\`.
- \`N\` inteiros ordenados.
- \`Alvo\`.

**Output**
- Índice do alvo ou -1.`,initialCode:`import java.util.Scanner;
public class Main { public static void main(String[] a){ } }`,solutionCode:`import java.util.Scanner;
public class Main {
    static int bs(int[] a, int l, int r, int x) {
        if(r>=l) {
            int mid = l + (r-l)/2;
            if(a[mid]==x) return mid;
            if(a[mid]>x) return bs(a, l, mid-1, x);
            return bs(a, mid+1, r, x);
        }
        return -1;
    }
    public static void main(String[] s) { 
        Scanner sc=new Scanner(System.in);
        if(!sc.hasNext()) return;
        int n=sc.nextInt(); int[] a=new int[n];
        for(int i=0;i<n;i++) a[i]=sc.nextInt();
        System.out.println(bs(a,0,n-1,sc.nextInt())); 
    }
}`,testCases:[{input:"3 1 2 3 2",expectedOutput:"1"}]}]},Ax={id:"aed3",name:"Algoritmos e Estruturas de Dados 3",shortName:"AED 3",language:"java",exercises:[{id:"aed3_01",title:"1. DFS - Componentes Conexos",description:`A Pesquisa em Profundidade (DFS) é usada para explorar grafos.

**Input**
- Inteiros \`N\` (vértices) e \`E\` (arestas).
- \`E\` linhas, cada uma com u, v.

**Output**
- O número de componentes conexos.`,initialCode:`import java.util.*;
public class Main {
    static List<Integer>[] adj;
    static boolean[] visited;
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int e = sc.nextInt();
        // TODO: Ler grafo e contar componentes
    }
}`,solutionCode:`import java.util.*;
public class Main {
    static List<Integer>[] adj;
    static boolean[] visited;
    static void dfs(int u) {
        visited[u] = true;
        for(int v : adj[u]) if(!visited[v]) dfs(v);
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(!sc.hasNext()) return;
        int n = sc.nextInt();
        int e = sc.nextInt();
        adj = new ArrayList[n]; visited = new boolean[n];
        for(int i=0; i<n; i++) adj[i] = new ArrayList<>();
        for(int i=0; i<e; i++) {
            int u=sc.nextInt(), v=sc.nextInt();
            adj[u].add(v); adj[v].add(u);
        }
        int count = 0;
        for(int i=0; i<n; i++) {
            if(!visited[i]) { dfs(i); count++; }
        }
        System.out.println(count);
    }
}`,testCases:[{input:"5 3 0 1 1 2 3 4",expectedOutput:"2"}]},{id:"aed3_02",title:"2. BFS - Distância Mínima",description:"A Pesquisa em Largura (BFS) encontra o caminho mais curto em grafos não ponderados.\n\n**Input**\n- `N` (vértices) e `E` (arestas).\n- `E` pares (u,v).\n- Inteiro `S` (origem).\n\n**Output**\n- Distâncias de S a todos os nós (0 a N-1). Se inalcançável, -1.",initialCode:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        // TODO
    }
}`,solutionCode:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(!sc.hasNext()) return;
        int n = sc.nextInt(), e = sc.nextInt();
        List<Integer>[] adj = new ArrayList[n];
        for(int i=0; i<n; i++) adj[i] = new ArrayList<>();
        for(int i=0; i<e; i++) {
            int u=sc.nextInt(), v=sc.nextInt();
            adj[u].add(v); adj[v].add(u);
        }
        int s = sc.nextInt();
        int[] dist = new int[n];
        Arrays.fill(dist, -1);
        dist[s] = 0;
        Queue<Integer> q = new LinkedList<>();
        q.add(s);
        while(!q.isEmpty()) {
            int u = q.poll();
            for(int v : adj[u]) {
                if(dist[v] == -1) {
                    dist[v] = dist[u] + 1;
                    q.add(v);
                }
            }
        }
        for(int d : dist) System.out.print(d + " ");
    }
}`,testCases:[{input:"4 3 0 1 1 2 0 3 0",expectedOutput:"0 1 2 1 "}]},{id:"aed3_03",title:"3. Grafo Bipartido (Coloração)",description:`Verifica se um grafo pode ser pintado com 2 cores sem conflitos.

**Input**
- \`N\` (vértices) e \`E\` (arestas).
- \`E\` pares (u,v).

**Output**
- "SIM" se for bipartido, "NAO" caso contrário.`,initialCode:`import java.util.*;
public class Main {
    public static void main(String[] args) { 
        // TODO: Ler N E e verificar
    }
}`,solutionCode:`import java.util.*;
public class Main {
    static List<Integer>[] adj;
    static int[] color;
    static boolean isBipartite(int u, int c) {
        color[u] = c;
        for(int v : adj[u]) {
            if(color[v] == 0) {
                if(!isBipartite(v, -c)) return false;
            } else if(color[v] == c) return false;
        }
        return true;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(!sc.hasNext()) return;
        int n = sc.nextInt(), e = sc.nextInt();
        adj = new ArrayList[n]; color = new int[n];
        for(int i=0; i<n; i++) adj[i] = new ArrayList<>();
        for(int i=0; i<e; i++) { int u=sc.nextInt(), v=sc.nextInt(); adj[u].add(v); adj[v].add(u); }
        boolean possible = true;
        for(int i=0; i<n; i++) if(color[i]==0 && !isBipartite(i, 1)) possible=false;
        System.out.println(possible ? "SIM" : "NAO");
    }
}`,testCases:[{input:"4 4 0 1 1 2 2 3 3 0",expectedOutput:"SIM"}]},{id:"aed3_04",title:"4. Detetar Ciclo em Grafo Dirigido",description:`Detetar ciclo num grafo dirigido.

**Input**
- \`N\` (vértices) e \`E\` (arestas).
- \`E\` pares (u,v) indicando aresta de u para v.

**Output**
- "true" se tem ciclo, "false" caso contrário.`,initialCode:`import java.util.*;
public class Main {
    public static void main(String[] args) { }
}`,solutionCode:`import java.util.*;
public class Main {
    static List<Integer>[] adj; static boolean[] vis, onStack;
    static boolean hasCycle(int u) {
        vis[u] = true; onStack[u] = true;
        for(int v : adj[u]) {
            if(onStack[v]) return true;
            if(!vis[v] && hasCycle(v)) return true;
        }
        onStack[u] = false;
        return false;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(!sc.hasNext()) return;
        int n=sc.nextInt(), e=sc.nextInt();
        adj=new ArrayList[n]; vis=new boolean[n]; onStack=new boolean[n];
        for(int i=0;i<n;i++) adj[i]=new ArrayList<>();
        for(int i=0;i<e;i++) adj[sc.nextInt()].add(sc.nextInt());
        boolean cycle=false;
        for(int i=0;i<n;i++) if(!vis[i] && hasCycle(i)) cycle=true;
        System.out.println(cycle);
    }
}`,testCases:[{input:"3 3 0 1 1 2 2 0",expectedOutput:"true"}]},{id:"aed3_05",title:"5. Ordenação Topológica",description:`Ordenar Linearmente um DAG.

**Input**
- \`N\` (vértices) e \`E\` (arestas).
- \`E\` pares (u,v).

**Output**
- Sequência de vértices ordenada.`,initialCode:`import java.util.*;
public class Main {
    public static void main(String[] args) { }
}`,solutionCode:`import java.util.*;
public class Main {
    static List<Integer>[] adj; static boolean[] vis;
    static Stack<Integer> s = new Stack<>();
    static void dfs(int u) {
        vis[u] = true;
        for(int v : adj[u]) if(!vis[v]) dfs(v);
        s.push(u);
    }
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        if(!sc.hasNext()) return;
        int n=sc.nextInt(), e=sc.nextInt();
        adj=new ArrayList[n]; vis=new boolean[n];
        for(int i=0;i<n;i++) adj[i]=new ArrayList<>();
        for(int i=0;i<e;i++) adj[sc.nextInt()].add(sc.nextInt());
        for(int i=0;i<n;i++) if(!vis[i]) dfs(i);
        while(!s.isEmpty()) System.out.print(s.pop() + " ");
    }
}`,testCases:[{input:"3 2 0 1 1 2",expectedOutput:"0 1 2 "}]},{id:"aed3_06",title:"6. Algoritmo de Dijkstra",description:"Caminho mais curto com pesos positivos.\n\n**Input**\n- `N` e `E`.\n- `E` triplos: u, v, peso.\n- Inteiros `Origem` e `Destino`.\n\n**Output**\n- O custo mínimo da Origem ao Destino.",initialCode:`import java.util.*;
public class Main {
    public static void main(String[] args) { }
}`,solutionCode:`import java.util.*;
class Node implements Comparable<Node> { int v, w; Node(int a, int b){v=a;w=b;} public int compareTo(Node o){return w-o.w;} }
public class Main {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        if(!sc.hasNext()) return;
        int n=sc.nextInt(), e=sc.nextInt();
        List<Node>[] adj = new ArrayList[n];
        for(int i=0;i<n;i++) adj[i]=new ArrayList<>();
        for(int i=0;i<e;i++) {
            int u=sc.nextInt(), v=sc.nextInt(), w=sc.nextInt();
            adj[u].add(new Node(v, w)); adj[v].add(new Node(u, w));
        }
        int s=sc.nextInt(), t=sc.nextInt();
        int[] dist=new int[n]; Arrays.fill(dist, 1000000); dist[s]=0;
        PriorityQueue<Node> pq=new PriorityQueue<>(); pq.add(new Node(s,0));
        while(!pq.isEmpty()) {
            Node cur=pq.poll();
            if(cur.w > dist[cur.v]) continue;
            for(Node nxt : adj[cur.v]) {
                if(dist[cur.v]+nxt.w < dist[nxt.v]) {
                    dist[nxt.v]=dist[cur.v]+nxt.w; pq.add(new Node(nxt.v, dist[nxt.v]));
                }
            }
        }
        System.out.println(dist[t]);
    }
}`,testCases:[{input:"3 3 0 1 10 1 2 5 0 2 20 0 2",expectedOutput:"15"}]},{id:"aed3_07",title:"7. Algoritmo de Kruskal (MST)",description:`Árvore de Cobertura Mínima.

**Input**
- \`N\` e \`E\`.
- \`E\` triplos: u, v, peso.

**Output**
- O peso total da MST.`,initialCode:`import java.util.*;
public class Main { public static void main(String[] a){ } }`,solutionCode:`import java.util.*;
class Edge implements Comparable<Edge> { int u,v,w; Edge(int a,int b,int c){u=a;v=b;w=c;} public int compareTo(Edge e){return w-e.w;} }
class UF { 
    int[] p; UF(int n){p=new int[n]; for(int i=0;i<n;i++) p[i]=i;}
    int find(int i){ return p[i]==i ? i : (p[i]=find(p[i])); }
    boolean union(int i, int j){ int r1=find(i), r2=find(j); if(r1!=r2){p[r1]=r2; return true;} return false; }
}
public class Main {
    public static void main(String[] a) {
        Scanner sc=new Scanner(System.in);
        if(!sc.hasNext()) return;
        int n=sc.nextInt(), e=sc.nextInt();
        List<Edge> edges=new ArrayList<>();
        for(int i=0;i<e;i++) edges.add(new Edge(sc.nextInt(), sc.nextInt(), sc.nextInt()));
        Collections.sort(edges);
        UF uf=new UF(n); int sum=0;
        for(Edge ed : edges) if(uf.union(ed.u, ed.v)) sum+=ed.w;
        System.out.println(sum);
    }
}`,testCases:[{input:"4 5 0 1 10 0 2 6 0 3 5 1 3 15 2 3 4",expectedOutput:"19"}]},{id:"aed3_08",title:"8. Floyd-Warshall (All-Pairs)",description:"Distância entre todos os pares.\n\n**Input**\n- `N` e `E`.\n- `E` triplos: u, v, w (arestas direcionadas).\n\n**Output**\n- Matriz `N x N` onde `M[i][j]` é a distância. Se for impossível, -1.",initialCode:`import java.util.*;
public class Main { public static void main(String[] a){ } }`,solutionCode:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        if(!sc.hasNext()) return;
        int n=sc.nextInt(), e=sc.nextInt();
        int INF=999; int[][] d=new int[n][n];
        for(int i=0;i<n;i++) { Arrays.fill(d[i], INF); d[i][i]=0; }
        for(int i=0;i<e;i++) d[sc.nextInt()][sc.nextInt()] = sc.nextInt();
        for(int k=0;k<n;k++) for(int i=0;i<n;i++) for(int j=0;j<n;j++)
            d[i][j] = Math.min(d[i][j], d[i][k]+d[k][j]);
        for(int i=0;i<n;i++) {
            for(int j=0;j<n;j++) System.out.print((d[i][j]==INF ? -1 : d[i][j]) + " ");
            System.out.println();
        }
    }
}`,testCases:[{input:"3 2 0 1 5 1 2 3",expectedOutput:`0 5 8 
-1 0 3 
-1 -1 0 
`}]},{id:"aed3_09",title:"9. Estrutura Trie (Prefixos)",description:'Verificar se uma palavra é prefixo de outra no dicionário.\n\n**Input**\n- `N` e de seguida `N` palavras (string).\n- Uma palavra `P` de teste.\n\n**Output**\n- "SIM" se `P` é prefixo de alguma palavra, "NAO" caso contrário.',initialCode:`import java.util.*;
public class Main { public static void main(String[] a){ } }`,solutionCode:`import java.util.*;
class TrieNode { TrieNode[] next=new TrieNode[26]; }
public class Main {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        if(!sc.hasNext()) return;
        TrieNode root=new TrieNode();
        int n=sc.nextInt();
        for(int i=0;i<n;i++) {
            String s=sc.next(); TrieNode cur=root;
            for(char c:s.toCharArray()) {
                if(cur.next[c-'a']==null) cur.next[c-'a']=new TrieNode();
                cur=cur.next[c-'a'];
            }
        }
        String p=sc.next(); TrieNode cur=root; boolean ok=true;
        for(char c:p.toCharArray()) {
            if(cur.next[c-'a']==null) { ok=false; break; }
            cur=cur.next[c-'a'];
        }
        System.out.println(ok?"SIM":"NAO");
    }
}`,testCases:[{input:"2 banana barco ban",expectedOutput:"SIM"}]},{id:"aed3_10",title:"10. Prefixo Comum Mais Longo",description:`Encontrar o maior prefixo comum.

**Input**
- \`N\` e de seguida \`N\` strings.

**Output**
- A string correspondente ao prefixo comum.`,initialCode:`import java.util.*;
public class Main { public static void main(String[] a){ } }`,solutionCode:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        if(!sc.hasNext()) return;
        int n=sc.nextInt(); String[] s=new String[n];
        for(int i=0;i<n;i++) s[i]=sc.next();
        Arrays.sort(s);
        String s1=s[0], s2=s[n-1];
        int idx=0;
        while(idx<s1.length() && idx<s2.length() && s1.charAt(idx)==s2.charAt(idx)) idx++;
        System.out.println(s1.substring(0, idx));
    }
}`,testCases:[{input:"3 flower flow flight",expectedOutput:"fl"}]},{id:"aed3_11",title:"11. Fibonacci com Memoização",description:`Calcular o N-ésimo número de Fibonacci.

**Input**
- Inteiro \`N\`.

**Output**
- Fib(N) (use long).`,initialCode:`import java.util.*;
public class Main { public static void main(String[] a){ } }`,solutionCode:`import java.util.*;
public class Main {
    static long[] memo;
    static long fib(int n) {
        if(n<=1) return n;
        if(memo[n]!=0) return memo[n];
        return memo[n] = fib(n-1) + fib(n-2);
    }
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        if(!sc.hasNext()) return;
        int n=sc.nextInt(); memo=new long[n+1];
        System.out.println(fib(n));
    }
}`,testCases:[{input:"50",expectedOutput:"12586269025"}]},{id:"aed3_12",title:"12. Troco Mínimo (Moedas)",description:`Menor número de moedas para fazer um valor.

**Input**
- \`V\` (valor alvo) e \`N\` (tipo de moedas).
- \`N\` inteiros (o valor de cada moeda).

**Output**
- O número mínimo de moedas. Se impossível, -1.`,initialCode:`import java.util.*;
public class Main { public static void main(String[] a){ } }`,solutionCode:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        if(!sc.hasNext()) return;
        int v=sc.nextInt(), n=sc.nextInt();
        int[] coins=new int[n]; for(int i=0;i<n;i++) coins[i]=sc.nextInt();
        int[] dp=new int[v+1]; Arrays.fill(dp, v+1); dp[0]=0;
        for(int i=1;i<=v;i++) for(int c:coins) if(c<=i) dp[i]=Math.min(dp[i], dp[i-c]+1);
        System.out.println(dp[v]>v ? -1 : dp[v]);
    }
}`,testCases:[{input:"11 3 1 2 5",expectedOutput:"3"}]},{id:"aed3_13",title:"13. Subsequência Comum Mais Longa",description:`Comprimento da LCS.

**Input**
- Duas strings S1 e S2.

**Output**
- Comprimento da LCS.`,initialCode:`import java.util.*;
public class Main { public static void main(String[] a){ } }`,solutionCode:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        if(!sc.hasNext()) return;
        String s1=sc.next(), s2=sc.next();
        int[][] dp = new int[s1.length()+1][s2.length()+1];
        for(int i=1;i<=s1.length();i++) for(int j=1;j<=s2.length();j++) {
            if(s1.charAt(i-1)==s2.charAt(j-1)) dp[i][j]=1+dp[i-1][j-1];
            else dp[i][j]=Math.max(dp[i-1][j], dp[i][j-1]);
        }
        System.out.println(dp[s1.length()][s2.length()]);
    }
}`,testCases:[{input:"abcde ace",expectedOutput:"3"}]},{id:"aed3_14",title:"14. Mochila 0/1 (Knapsack)",description:`Maximizar valor na mochila.

**Input**
- \`W\` (capacidade) e \`N\` (itens).
- \`N\` pares: peso valor.

**Output**
- Valor máximo.`,initialCode:`import java.util.*;
public class Main { public static void main(String[] a){ } }`,solutionCode:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        if(!sc.hasNext()) return;
        int W=sc.nextInt(), n=sc.nextInt();
        int[] wt=new int[n], val=new int[n];
        for(int i=0;i<n;i++) { wt[i]=sc.nextInt(); val[i]=sc.nextInt(); }
        int[] dp = new int[W+1];
        for(int i=0;i<n;i++) for(int w=W;w>=wt[i];w--) dp[w]=Math.max(dp[w], dp[w-wt[i]]+val[i]);
        System.out.println(dp[W]);
    }
}`,testCases:[{input:"50 3 10 60 20 100 30 120",expectedOutput:"220"}]},{id:"aed3_15",title:"15. Soma Máxima (Kadane)",description:`Subarray contíguo com soma máxima.

**Input**
- \`N\`, seguido de \`N\` inteiros.

**Output**
- A soma máxima.`,initialCode:`import java.util.*;
public class Main { public static void main(String[] a){ } }`,solutionCode:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        if(!sc.hasNext()) return;
        int n=sc.nextInt();
        int maxSoFar=Integer.MIN_VALUE, maxEnding=0;
        for(int i=0;i<n;i++) {
            int x=sc.nextInt();
            maxEnding += x;
            if(maxSoFar < maxEnding) maxSoFar = maxEnding;
            if(maxEnding < 0) maxEnding = 0;
        }
        System.out.println(maxSoFar);
    }
}`,testCases:[{input:"8 -2 -3 4 -1 -2 1 5 -3",expectedOutput:"7"}]},{id:"aed3_16",title:"16. Seleção de Atividades",description:`Máximo de atividades compatíveis.

**Input**
- \`N\`.
- \`N\` pares: inicio fim.

**Output**
- Quantidade máxima de atividades.`,initialCode:`import java.util.*;
public class Main { public static void main(String[] a){ } }`,solutionCode:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        if(!sc.hasNext()) return;
        int n=sc.nextInt();
        int[][] act=new int[n][2];
        for(int i=0;i<n;i++) { act[i][0]=sc.nextInt(); act[i][1]=sc.nextInt(); }
        Arrays.sort(act, (a,b)->a[1]-b[1]);
        int cnt=0, last=-1;
        for(int[] a:act) if(a[0]>=last) { cnt++; last=a[1]; }
        System.out.println(cnt);
    }
}`,testCases:[{input:"3 1 3 2 4 3 5",expectedOutput:"2"}]},{id:"aed3_17",title:"17. Subset Sum",description:`Maneiras de obter soma K.

**Input**
- \`N\` e \`K\`.
- \`N\` inteiros.

**Output**
- Número de subconjuntos com soma K.`,initialCode:`import java.util.*;
public class Main { public static void main(String[] a){ } }`,solutionCode:`import java.util.*;
public class Main {
    static int count=0;
    static void solve(int idx, int sum, int target, int[] nums) {
        if(sum == target) { count++; return; }
        if(sum > target || idx == nums.length) return;
        solve(idx+1, sum+nums[idx], target, nums);
        solve(idx+1, sum, target, nums);
    }
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        if(!sc.hasNext()) return;
        int n=sc.nextInt(), k=sc.nextInt();
        int[] nums=new int[n]; for(int i=0;i<n;i++) nums[i]=sc.nextInt();
        solve(0,0,k,nums);
        System.out.println(count);
    }
}`,testCases:[{input:"3 3 1 2 3",expectedOutput:"2"}]},{id:"aed3_18",title:"18. Gerar Parênteses",description:`Parênteses balanceados.

**Input**
- \`N\` (número de pares).

**Output**
- Todas as combinações, uma por linha.`,initialCode:`import java.util.*;
public class Main { public static void main(String[] a){ } }`,solutionCode:`import java.util.*;
public class Main {
    static void gen(String s, int open, int close, int n) {
        if(s.length() == 2*n) { System.out.println(s); return; }
        if(open < n) gen(s+"(", open+1, close, n);
        if(close < open) gen(s+")", open, close+1, n);
    }
    public static void main(String[] args) { 
        Scanner sc=new Scanner(System.in); 
        if(!sc.hasNext()) return;
        gen("", 0, 0, sc.nextInt()); 
    }
}`,testCases:[{input:"2",expectedOutput:`(()) 
()() 
`}]},{id:"aed3_19",title:"19. Union-Find: Tamanho",description:`Maior componente conexo.

**Input**
- \`N\` e \`E\`.
- \`E\` pares (u,v).

**Output**
- Tamanho do maior componente.`,initialCode:`import java.util.*;
public class Main { public static void main(String[] a){ } }`,solutionCode:`import java.util.*;
class UF { 
    int[] p, sz; 
    UF(int n){p=new int[n]; sz=new int[n]; for(int i=0;i<n;i++){p[i]=i; sz[i]=1;}}
    int find(int i){ return p[i]==i?i:(p[i]=find(p[i])); }
    void union(int i, int j){ 
        int r1=find(i), r2=find(j); 
        if(r1!=r2){ p[r1]=r2; sz[r2]+=sz[r1]; }
    }
    int max() { int m=0; for(int s:sz) if(s>m) m=s; return m; }
}
public class Main {
    public static void main(String[] a) {
        Scanner sc=new Scanner(System.in);
        if(!sc.hasNext()) return;
        int n=sc.nextInt(), e=sc.nextInt();
        UF uf=new UF(n);
        for(int i=0;i<e;i++) uf.union(sc.nextInt(), sc.nextInt());
        System.out.println(uf.max());
    }
}`,testCases:[{input:"5 3 0 1 1 2 3 4",expectedOutput:"3"}]},{id:"aed3_20",title:"20. Fenwick Tree",description:"Somas e Updates em LogN.\n\n**Input**\n- `N`, array inicial.\n- `K` queries. Tipos: `1 i v` (add v to i), `2 i` (query sum 0..i).\n\n**Output**\n- Resultado de cada query tipo 2.",initialCode:`import java.util.*;
public class Main { public static void main(String[] a){ } }`,solutionCode:`import java.util.*;
class BIT { 
    int[] tree; int n;
    BIT(int size){ n=size; tree=new int[n+1]; }
    void add(int i, int val){ i++; for(;i<=n;i+=i&-i) tree[i]+=val; }
    int query(int i){ i++; int s=0; for(;i>0;i-=i&-i) s+=tree[i]; return s; }
}
public class Main { 
    public static void main(String[] a){ 
        Scanner sc=new Scanner(System.in);
        if(!sc.hasNext()) return;
        int n=sc.nextInt(); BIT bit=new BIT(n);
        for(int i=0;i<n;i++) bit.add(i, sc.nextInt());
        int k=sc.nextInt();
        while(k-->0) {
            int type=sc.nextInt();
            if(type==1) { int idx=sc.nextInt(), val=sc.nextInt(); int diff=val- (bit.query(idx)-bit.query(idx-1)); bit.add(idx, diff); }
            else System.out.println(bit.query(sc.nextInt()));
        }
    } 
}`,testCases:[{input:"5 1 2 3 4 5 1 2 2",expectedOutput:"6"}]},{id:"aed3_21",title:"21. Área Polígono",description:`Área com Shoelace.

**Input**
- \`N\`.
- \`N\` pares (x,y).

**Output**
- Área formatada com 1 casa decimal.`,initialCode:`import java.util.*;
public class Main { public static void main(String[] a){ } }`,solutionCode:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        if(!sc.hasNext()) return;
        int n=sc.nextInt();
        double[] x=new double[n], y=new double[n];
        for(int i=0;i<n;i++) { x[i]=sc.nextDouble(); y[i]=sc.nextDouble(); }
        double area=0.0;
        for(int i=0;i<n;i++) area += (x[i]*y[(i+1)%n] - x[(i+1)%n]*y[i]);
        System.out.printf(java.util.Locale.US, "%.1f", Math.abs(area)/2.0);
    }
}`,testCases:[{input:"4 0 0 0 10 10 10 10 0",expectedOutput:"100.0"}]},{id:"aed3_22",title:"22. Distância 2D",description:`Distância Euclidiana.

**Input**
- \`x1 y1 x2 y2\`.

**Output**
- Distância com 2 casas decimais.`,initialCode:`import java.util.*;
public class Main { public static void main(String[] a){ } }`,solutionCode:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        if(!sc.hasNext()) return;
        double x1=sc.nextDouble(), y1=sc.nextDouble(), x2=sc.nextDouble(), y2=sc.nextDouble();
        double d = Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2));
        System.out.printf(java.util.Locale.US, "%.2f", d);
    }
}`,testCases:[{input:"0 0 3 4",expectedOutput:"5.00"}]},{id:"aed3_23",title:"23. Contagem de Inversões",description:`Contar pares invertidos com Merge Sort.

**Input**
- \`N\`.
- \`N\` inteiros.

**Output**
- Número de inversões (long).`,initialCode:`import java.util.*;
public class Main { public static void main(String[] a){ } }`,solutionCode:`import java.util.*;
public class Main {
    static long inv=0;
    static void merge(int[] a, int l, int m, int r) {
        int n1=m-l+1, n2=r-m;
        int[] L=new int[n1], R=new int[n2];
        for(int i=0;i<n1;i++) L[i]=a[l+i];
        for(int i=0;i<n2;i++) R[i]=a[m+1+i];
        int i=0, j=0, k=l;
        while(i<n1 && j<n2) {
            if(L[i]<=R[j]) a[k++]=L[i++];
            else { a[k++]=R[j++]; inv += (n1-i); }
        }
        while(i<n1) a[k++]=L[i++];
        while(j<n2) a[k++]=R[j++];
    }
    static void sort(int[] a, int l, int r) {
        if(l<r) { int m=(l+r)/2; sort(a,l,m); sort(a,m+1,r); merge(a,l,m,r); }
    }
    public static void main(String[] a) {
        Scanner sc=new Scanner(System.in);
        if(!sc.hasNext()) return;
        int n=sc.nextInt();
        int[] arr=new int[n]; for(int i=0;i<n;i++) arr[i]=sc.nextInt();
        sort(arr, 0, n-1); System.out.println(inv);
    }
}`,testCases:[{input:"5 5 1 4 2 8",expectedOutput:"4"}]},{id:"aed3_24",title:"24. Validador de Sudoku",description:`Verifica se uma grelha 9x9 é um Sudoku válido (linhas, colunas e blocos 3x3 sem repetições).

**Input**
- 9 linhas, cada uma com 9 inteiros (1-9).

**Output**
- "VALIDO" ou "INVALIDO".`,initialCode:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        // TODO
    }
}`,solutionCode:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        if(!sc.hasNext()) return;
        int[][] m = new int[9][9];
        for(int i=0;i<9;i++) for(int j=0;j<9;j++) m[i][j]=sc.nextInt();
        // Check rows
        for(int i=0;i<9;i++) {
            Set<Integer> s = new HashSet<>();
            for(int j=0;j<9;j++) if(!s.add(m[i][j])) { System.out.println("INVALIDO"); return; }
        }
        // Check cols
        for(int j=0;j<9;j++) {
             Set<Integer> s = new HashSet<>();
             for(int i=0;i<9;i++) if(!s.add(m[i][j])) { System.out.println("INVALIDO"); return; }
        }
        // Check 3x3
        for(int r=0;r<9;r+=3) for(int c=0;c<9;c+=3) {
            Set<Integer> s = new HashSet<>();
            for(int i=0;i<3;i++) for(int j=0;j<3;j++)
                if(!s.add(m[r+i][c+j])) { System.out.println("INVALIDO"); return; }
        }
        System.out.println("VALIDO");
    }
}`,testCases:[{input:"5 3 4 6 7 8 9 1 2 6 7 2 1 9 5 3 4 8 1 9 8 3 4 2 5 6 7 8 5 9 7 6 1 4 2 3 4 2 6 8 5 3 7 9 1 7 1 3 9 2 4 8 5 6 9 6 1 5 3 7 2 8 4 2 8 7 4 1 9 6 3 5 3 4 5 2 8 6 1 7 9",expectedOutput:"VALIDO"},{input:"1 2 3 4 5 6 7 8 9 1 2 3 4 5 6 7 8 9 1 2 3 4 5 6 7 8 9 1 2 3 4 5 6 7 8 9 1 2 3 4 5 6 7 8 9 1 2 3 4 5 6 7 8 9 1 2 3 4 5 6 7 8 9 1 2 3 4 5 6 7 8 9 1 2 3 4 5 6 7 8 9",expectedOutput:"INVALIDO"}]},{id:"aed3_25",title:"25. Labirinto (BFS em Grelha)",description:"Menor caminho de (0,0) a (N-1, M-1) numa grelha.\n0 = livre, 1 = parede.\n\n**Input**\n- `N` (linhas) e `M` (colunas).\n- `N` linhas com `M` inteiros.\n\n**Output**\n- Número de passos. Se impossível, -1.",initialCode:`import java.util.*;
public class Main {
    public static void main(String[] args) { }
}`,solutionCode:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        if(!sc.hasNext()) return;
        int n=sc.nextInt(), m=sc.nextInt();
        int[][] grid=new int[n][m];
        for(int i=0;i<n;i++) for(int j=0;j<m;j++) grid[i][j]=sc.nextInt();
        Queue<int[]> q=new LinkedList<>(); q.add(new int[]{0,0,0});
        boolean[][] vis=new boolean[n][m]; vis[0][0]=true;
        int[] dx={0,0,1,-1}, dy={1,-1,0,0};
        while(!q.isEmpty()) {
            int[] cur=q.poll();
            if(cur[0]==n-1 && cur[1]==m-1) { System.out.println(cur[2]); return; }
            for(int i=0;i<4;i++) {
                int nx=cur[0]+dx[i], ny=cur[1]+dy[i];
                if(nx>=0&&nx<n&&ny>=0&&ny<m&&!vis[nx][ny]&&grid[nx][ny]==0) {
                    vis[nx][ny]=true; q.add(new int[]{nx,ny,cur[2]+1});
                }
            }
        }
        System.out.println("-1");
    }
}`,testCases:[{input:"3 3 0 0 0 1 1 0 0 0 0",expectedOutput:"4"}]}]},_x={id:"poo",name:"Programação Orientada a Objetos",shortName:"POO",language:"java",exercises:[{id:"poo_01",title:"1. A Primeira Classe e Objeto",description:'Na Programação Orientada a Objetos (POO), uma **Classe** funciona como um molde ou planta, enquanto um **Objeto** é uma instância concreta desse molde.\n\n**Tarefa:**\n1. Define uma classe chamada `Pessoa`.\n2. Adiciona dois atributos públicos (campos): `nome` (do tipo String) e `idade` (do tipo int).\n3. Dentro da classe `Main`, no método `main`, cria (instancia) um objeto do tipo `Pessoa`.\n4. Atribui manualmente o nome "Ana" e a idade 20 aos atributos do objeto.\n5. Imprime os valores no formato: "Nome: [nome], Idade: [idade]".',initialCode:`class Pessoa {
    // Define os atributos aqui
}

public class Main {
    public static void main(String[] args) {
        // Instancia a classe, define valores e imprime
    }
}`,solutionCode:`class Pessoa {
    String nome; int idade;
}
public class Main {
    public static void main(String[] args) {
        Pessoa p = new Pessoa();
        p.nome = "Ana"; p.idade = 20;
        System.out.println("Nome: " + p.nome + ", Idade: " + p.idade);
    }
}`,testCases:[{input:"",expectedOutput:"Nome: Ana, Idade: 20"}]},{id:"poo_02",title:"2. Construtores",description:'Um **Construtor** é um método especial invocado quando criamos um objeto (`new`). Serve para inicializar o estado do objeto imediatamente.\n\n**Tarefa:**\n1. Cria uma classe `Carro` com os atributos `marca` e `modelo`.\n2. Define um construtor `Carro(String m, String mod)` que receba os valores e os atribua aos atributos da classe.\n3. Cria um método `detalhes()` que imprima "Marca Modelo" (separados por espaço).\n4. No `main`, cria um carro "Toyota Yaris" e chama o método `detalhes()`.',initialCode:`class Carro {
    String marca, modelo;
    // Define o construtor aqui
    
    void detalhes() {
        // Imprime
    }
}
public class Main { ... }`,solutionCode:`class Carro {
    String marca, modelo;
    Carro(String m, String mod) { marca=m; modelo=mod; }
    void detalhes() { System.out.println(marca + " " + modelo); }
}
public class Main {
    public static void main(String[] args) {
        Carro c = new Carro("Toyota", "Yaris");
        c.detalhes();
    }
}`,testCases:[{input:"",expectedOutput:"Toyota Yaris"}]},{id:"poo_03",title:"3. Encapsulamento (Getters e Setters)",description:"O **Encapsulamento** diz que os dados internos de um objeto não devem ser acessíveis diretamente. Usamos modificadores como `private` e métodos de acesso (`get`/`set`) para controlar e validar os dados.\n\n**Tarefa:**\n1. Cria a classe `Conta` com um atributo `private double saldo`.\n2. Cria o método `setSaldo(double valor)`. Este método **só deve alterar o saldo se o valor for positivo**. Se for negativo, ignora a operação.\n3. Cria o método `getSaldo()` que retorna o saldo atual.\n4. Testa no `main`: tenta definir -100 (deve falhar) e depois 50 (deve funcionar). Imprime o saldo final.",initialCode:`class Conta {
    private double saldo;
    // Implementa setSaldo com validação e getSaldo
}
public class Main {
    public static void main(String[] args) {
        Conta c = new Conta();
        c.setSaldo(-100);
        c.setSaldo(50);
        System.out.println(c.getSaldo());
    }
}`,solutionCode:`class Conta {
    private double saldo;
    public void setSaldo(double s) { if(s >= 0) saldo = s; }
    public double getSaldo() { return saldo; }
}
public class Main {
    public static void main(String[] args) {
        Conta c = new Conta();
        c.setSaldo(-100); c.setSaldo(50);
        System.out.println(c.getSaldo());
    }
}`,testCases:[{input:"",expectedOutput:"50.0"}]},{id:"poo_04",title:"4. Sobrecarga de Métodos (Overloading)",description:"A **Sobrecarga** permite ter vários métodos com o mesmo nome na mesma classe, desde que a lista de parâmetros (assinatura) seja diferente.\n\n**Tarefa:**\n1. Cria a classe `Calc`.\n2. Implementa o método `int soma(int a, int b)`.\n3. Implementa uma sobrecarga `int soma(int a, int b, int c)`.\n4. No `main`, chama ambas as versões e imprime os resultados na mesma linha.",initialCode:`class Calc {
    // soma(int, int)
    // soma(int, int, int)
}
public class Main { ... }`,solutionCode:`class Calc {
    int soma(int a, int b) { return a+b; }
    int soma(int a, int b, int c) { return a+b+c; }
}
public class Main {
    public static void main(String[] args) {
        Calc c = new Calc();
        System.out.println(c.soma(2,3) + " " + c.soma(1,1,1));
    }
}`,testCases:[{input:"",expectedOutput:"5 3"}]},{id:"poo_05",title:"5. Do UML para o Código: Classe Livro",description:"Muitas vezes, a arquitetura é definida em diagramas UML antes de ser codificada. Implementa a seguinte especificação:\n\n**Classe Livro**\n- `titulo`: String\n- `paginas`: int\n- `Livro(String t, int p)`: Construtor\n- `isLongo()`: retorna `boolean`. (Verdadeiro se páginas > 300).\n\n**Tarefa:**\nImplementa a classe e testa com dois livros: um curto (100 págs) e um longo (500 págs).",initialCode:`class Livro {
    //...
}
public class Main { ... }`,solutionCode:`class Livro {
    String titulo; int paginas;
    Livro(String t, int p) { titulo=t; paginas=p; }
    boolean isLongo() { return paginas > 300; }
}
public class Main {
    public static void main(String[] args) {
        System.out.println(new Livro("A", 100).isLongo() + " " + new Livro("B", 500).isLongo());
    }
}`,testCases:[{input:"",expectedOutput:"false true"}]},{id:"poo_06",title:"6. Composição (Tem-Um)",description:'A **Composição** define uma relação onde um objeto complexo é composto por outros objetos ("Tem-Um").\n\n**Tarefa:**\n1. Cria a classe `Motor` com atributo `potencia` (int).\n2. Cria a classe `Carro` que tem um atributo do tipo `Motor`.\n3. O construtor de `Carro` deve receber a potência e **instanciar** o `Motor` internamente.\n4. Cria um método `show()` em Carro que imprime a potência do motor.',initialCode:`class Motor {
    int pot;
    Motor(int p){ pot=p; }
}

class Carro {
    Motor m;
    // O construtor deve fazer: this.m = new Motor(p)...
}
public class Main { ... }`,solutionCode:`class Motor { int pot; Motor(int p){pot=p;} }
class Carro {
    Motor m;
    Carro(int p) { m = new Motor(p); }
    void show() { System.out.println(m.pot); }
}
public class Main {
    public static void main(String[] args) {
        new Carro(100).show();
    }
}`,testCases:[{input:"",expectedOutput:"100"}]},{id:"poo_07",title:"7. Membros Estáticos (Static)",description:"Atributos `static` pertencem à classe e não a uma instância específica. São partilhados por todos os objetos.\n\n**Tarefa:**\n1. Cria uma classe `Contador` com um atributo `static int count = 0`.\n2. No construtor da classe, incrementa `count`.\n3. No `main`, cria 2 instâncias de `Contador`.\n4. Acede a `Contador.count` e imprime o valor (deve ser 2).",initialCode:`class Contador {
    static int count = 0;
    // Construtor que incrementa count
}
public class Main { ... }`,solutionCode:`class Contador {
    static int count = 0;
    Contador() { count++; }
}
public class Main {
    public static void main(String[] args) {
        new Contador(); new Contador();
        System.out.println(Contador.count);
    }
}`,testCases:[{input:"",expectedOutput:"2"}]},{id:"poo_08",title:"8. Métodos Utilitários (Static Methods)",description:"Métodos estáticos podem ser chamados sem criar objetos da classe (ex: `Math.sqrt`). São úteis para funções utilitárias.\n\n**Tarefa:**\n1. Cria a classe `Util`.\n2. Define o método estático `boolean ehPar(int n)` que retorna true se N for par.\n3. No `main`, chama `Util.ehPar(4)` diretamente e imprime o resultado.",initialCode:`class Util {
    // static boolean ehPar...
}
public class Main { ... }`,solutionCode:`class Util {
    static boolean ehPar(int n) { return n%2==0; }
}
public class Main {
    public static void main(String[] args) {
        System.out.println(Util.ehPar(4));
    }
}`,testCases:[{input:"",expectedOutput:"true"}]},{id:"poo_09",title:"9. Herança Básica (Extends)",description:'A **Herança** permite criar novas classes baseadas em classes existentes ("É-Um").\n\n**Tarefa:**\n1. Cria a classe `Animal` com o método `som()` que imprime "...".\n2. Cria a classe `Cao` que estende `Animal`.\n3. Sobrescreve (Override) o método `som()` em `Cao` para imprimir "Au".\n4. Instancia um `Cao` mas guarda-o numa variável do tipo `Animal` (Upcasting).\n5. Chama `som()`.',initialCode:`class Animal {
    void som() { System.out.print("..."); }
}
class Cao extends Animal {
    // Override som
}
public class Main { ... }`,solutionCode:`class Animal {
    void som() { System.out.print("..."); }
}
class Cao extends Animal {
    void som() { System.out.print("Au"); }
}
public class Main {
    public static void main(String[] args) {
        Animal a = new Cao();
        a.som();
    }
}`,testCases:[{input:"",expectedOutput:"Au"}]},{id:"poo_10",title:"10. O Construtor da Superclasse (super)",description:'Quando uma subclasse é instanciada, o construtor da superclasse deve ser executado primeiro. Usamos `super()` para isso.\n\n**Tarefa:**\n1. Classe `A`: construtor imprime "A".\n2. Classe `B` estende `A`: construtor chama `super()` e depois imprime "B".\n3. Instancia `B` e observa a ordem de execução.',initialCode:`class A { ... }
class B extends A { ... }
public class Main { new B(); }`,solutionCode:`class A { A(){System.out.print("A");} }
class B extends A { B(){ super(); System.out.print("B");} }
public class Main {
    public static void main(String[] args) {
        new B();
    }
}`,testCases:[{input:"",expectedOutput:"AB"}]},{id:"poo_11",title:"11. Polimorfismo e Coleções",description:'O **Polimorfismo** permite tratar objetos de diferentes subclasses de forma uniforme.\n\n**Tarefa:**\n1. Cria classe `Animal` com método `som()` vazio.\n2. `Cao` imprime "Au ", `Gato` imprime "Miau ".\n3. Cria um array `Animal[] zoo` contendo um Cao e um Gato.\n4. Usa um loop `for-each` para percorrer o array e chamar `som()` em cada elemento.',initialCode:`class Animal { void som(){} }
class Cao extends Animal { ... }
class Gato extends Animal { ... }
public class Main { ... }`,solutionCode:`class Animal { void som(){} }
class Cao extends Animal { void som(){System.out.print("Au ");} }
class Gato extends Animal { void som(){System.out.print("Miau ");} }
public class Main {
    public static void main(String[] args) {
        Animal[] zoo = {new Cao(), new Gato()};
        for(Animal a : zoo) a.som();
    }
}`,testCases:[{input:"",expectedOutput:"Au Miau "}]},{id:"poo_12",title:"12. Classes Abstratas",description:"Uma classe **Abstrata** não pode ser instanciada e pode conter métodos abstratos (sem corpo), obrigando as subclasses a implementá-los.\n\n**Tarefa:**\n1. Define `abstract class Forma` com `abstract double area()`.\n2. Cria a subclasse `Retangulo` que recebe largura e altura no construtor.\n3. Implementa `area()` no Retângulo.\n4. Calcula a área de um retângulo 5x2.",initialCode:`abstract class Forma {
    abstract double area();
}
//...
public class Main { ... }`,solutionCode:`abstract class Forma {
    abstract double area();
}
class Retangulo extends Forma {
    int w, h; Retangulo(int w, int h){this.w=w; this.h=h;}
    double area() { return w*h; }
}
public class Main {
    public static void main(String[] args) {
        Forma f = new Retangulo(5, 2);
        System.out.printf("%.0f", f.area());
    }
}`,testCases:[{input:"",expectedOutput:"10"}]},{id:"poo_13",title:"13. Classes e Métodos Finais",description:"A palavra-chave `final` impede a herança (se usada na classe) ou a sobrescrita (se usada no método).\n\n**Tarefa:**\n1. Cria uma classe `final class Imutavel` com um método `msg()`.\n2. Tenta criar uma classe que estenda `Imutavel` (comentada porque daria erro de compilação).\n3. No main, apenas instancia a classe final e chama o método para provar que funciona como classe normal.",initialCode:`final class Imutavel { }
// class B extends Imutavel {} // Isto daria erro
public class Main { ... }`,solutionCode:`final class Imutavel { void msg(){System.out.println("OK");} }
public class Main {
    public static void main(String[] args) {
        new Imutavel().msg();
    }
}`,testCases:[{input:"",expectedOutput:"OK"}]},{id:"poo_14",title:"14. Binding Dinâmico (Runtime)",description:'Em Java, as chamadas de método são resolvidas em tempo de execução (Dynamic Binding) com base no tipo real do objeto.\n\n**Tarefa:**\n1. `Classe A` tem método `m()` que imprime "A".\n2. `Classe B` estende `A` e sobrescreve `m()` imprimindo "B".\n3. `A obj = new B();`\n4. Chama `obj.m()`. Qual método é executado?',initialCode:`class A { void m() { System.out.print("A"); } }
class B extends A { void m() { System.out.print("B"); } }
public class Main { ... }`,solutionCode:`class A { void m() { System.out.print("A"); } }
class B extends A { void m() { System.out.print("B"); } }
public class Main {
    public static void main(String[] args) {
        A obj = new B();
        obj.m(); // Deve imprimir B
    }
}`,testCases:[{input:"",expectedOutput:"B"}]},{id:"poo_15",title:"15. A Classe Object e toString()",description:'Todas as classes em Java herdam de `Object`. O método `toString()` é usado para representar o objeto como texto.\n\n**Tarefa:**\n1. Na classe `Pessoa`, sobrescreve o método `public String toString()`.\n2. Deve retornar "Nome (Idade)".\n3. Ao fazer `System.out.println(pessoa)`, o Java chamará o teu método automaticamente.',initialCode:`class Pessoa {
    String nome="Ana"; int idade=20;
    // Sobrescreve toString
}
public class Main { ... }`,solutionCode:`class Pessoa {
    String nome="Ana"; int idade=20;
    public String toString() { return nome + " (" + idade + ")"; }
}
public class Main {
    public static void main(String[] args) {
        System.out.println(new Pessoa());
    }
}`,testCases:[{input:"",expectedOutput:"Ana (20)"}]},{id:"poo_16",title:"16. Introdução a Interfaces",description:'Uma **Interface** é um contrato que define *o que* uma classe deve fazer, mas não *como*.\n\n**Tarefa:**\n1. Define a interface `Imprimivel` com o método `void imprimir()`.\n2. Cria a classe `Documento` que implementa essa interface.\n3. A implementação deve imprimir "Doc impresso".',initialCode:`interface Imprimivel {
    void imprimir();
}
//...
public class Main { ... }`,solutionCode:`interface Imprimivel { void imprimir(); }
class Documento implements Imprimivel {
    public void imprimir() { System.out.println("Doc impresso"); }
}
public class Main {
    public static void main(String[] args) {
        new Documento().imprimir();
    }
}`,testCases:[{input:"",expectedOutput:"Doc impresso"}]},{id:"poo_17",title:"17. Implementação Múltipla",description:"Diferente das classes, uma classe pode implementar múltiplas interfaces.\n\n**Tarefa:**\n1. Interface `A` (metodo `ma()`) e Interface `B` (metodo `mb()`).\n2. Classe `C` implementa `A` e `B`.\n3. No main, chama ambos os métodos.",initialCode:`interface A { void ma(); }
interface B { void mb(); }
class C implements A, B { ... }`,solutionCode:`interface A { void ma(); }
interface B { void mb(); }
class C implements A, B {
    public void ma() { System.out.print("A"); }
    public void mb() { System.out.print("B"); }
}
public class Main {
    public static void main(String[] args) {
        C c = new C(); c.ma(); c.mb();
    }
}`,testCases:[{input:"",expectedOutput:"AB"}]},{id:"poo_18",title:"18. Interface como Tipo de Dados",description:"Podemos usar o nome da interface como tipo de variável ou argumento, permitindo desacoplamento.\n\n**Tarefa:**\n1. Interface `Movel` (`mover()`). `Carro` e `Pessoa` implementam-na.\n2. Cria um método estático `acao(Movel m)` que chama `m.mover()`.\n3. Passa instâncias de Carro e Pessoa para esse método.",initialCode:`interface Movel { void mover(); }
//...
public class Main { ... }`,solutionCode:`interface Movel { void mover(); }
class Carro implements Movel { public void mover(){System.out.print("Vrum ");} }
class Pessoa implements Movel { public void mover(){System.out.print("Andar ");} }
public class Main {
    static void acao(Movel m) { m.mover(); }
    public static void main(String[] args) {
        acao(new Carro()); acao(new Pessoa());
    }
}`,testCases:[{input:"",expectedOutput:"Vrum Andar "}]},{id:"poo_19",title:"19. Combinar Herança e Interfaces",description:'Uma classe pode estender outra classe E implementar interfaces simultaneamente.\n\n**Tarefa:**\n1. `abstract class Veiculo` (atributo `marca`).\n2. `interface Eletrico` (metodo `carregar`).\n3. `class Tesla extends Veiculo implements Eletrico`.\n4. Implementa `carregar` imprimindo "[marca] a carregar".',initialCode:`abstract class Veiculo { String marca; }
interface Eletrico { void carregar(); }
//...
public class Main { ... }`,solutionCode:`abstract class Veiculo { String marca="Tesla"; }
interface Eletrico { void carregar(); }
class Tesla extends Veiculo implements Eletrico {
    public void carregar() { System.out.println(marca + " a carregar"); }
}
public class Main {
    public static void main(String[] args) {
        new Tesla().carregar();
    }
}`,testCases:[{input:"",expectedOutput:"Tesla a carregar"}]},{id:"poo_20",title:"20. Métodos Default (Java 8+)",description:'Desde o Java 8, interfaces podem ter métodos com implementação padrão (`default`), evitando quebrar código existente ao adicionar novos métodos.\n\n**Tarefa:**\n1. Interface `I` com `default void msg() { print "Default" }`.\n2. Classe `C` implementa `I` mas NÃO sobrescreve o método.\n3. Chama o método numa instância de `C`.',initialCode:`interface I { default void msg() { System.out.print("Default"); } }
class C implements I {}
public class Main { ... }`,solutionCode:`interface I { default void msg() { System.out.print("Default"); } }
class C implements I {}
public class Main {
    public static void main(String[] args) {
        new C().msg();
    }
}`,testCases:[{input:"",expectedOutput:"Default"}]},{id:"poo_21",title:"21. Try-Catch: Aritmética",description:'Exceções permitem lidar com erros em tempo de execução sem crashar o programa.\n\n**Tarefa:**\n1. Envolve uma divisão por zero num bloco `try`.\n2. Captura a `ArithmeticException` no bloco `catch`.\n3. No caso de erro, imprime "Erro" em vez de deixar o programa terminar abruptamente.',initialCode:`public class Main {
    public static void main(String[] args) {
        int a=10, b=0;
        // try catch aqui
    }
}`,solutionCode:`public class Main {
    public static void main(String[] args) {
        try {
            int a=10, b=0;
            System.out.println(a/b);
        } catch(ArithmeticException e) {
            System.out.println("Erro");
        }
    }
}`,testCases:[{input:"",expectedOutput:"Erro"}]},{id:"poo_22",title:"22. O Bloco Finally",description:`O bloco \`finally\` é executado SEMPRE, ocorra erro ou não. É usado para limpeza de recursos.

**Tarefa:**
1. Lança propositadamente uma exceção no try.
2. Captura-a e imprime "Catch ".
3. No finally, imprime "Finally".`,initialCode:`public class Main {
    public static void main(String[] args) {
        try { throw new Exception(); }
        catch(Exception e) { System.out.print("Catch "); }
        finally { System.out.print("Finally"); }
    }
}`,solutionCode:`public class Main {
    public static void main(String[] args) {
        try { throw new Exception(); }
        catch(Exception e) { System.out.print("Catch "); }
        finally { System.out.print("Finally"); }
    }
}`,testCases:[{input:"",expectedOutput:"Catch Finally"}]},{id:"poo_23",title:'23. A Keyword "throws"',description:'Se um método pode lançar uma "Checked Exception", ele deve declarar isso na sua assinatura usando `throws`.\n\n**Tarefa:**\n1. Cria um método `risco()` que declara `throws IOException` e lança essa exceção.\n2. No `main`, chama `risco()` dentro de um try-catch para tratar o erro.',initialCode:`import java.io.IOException;
public class Main {
    static void risco() throws IOException { throw new IOException("IO"); }
    public static void main(String[] args) {
        // chame risco
    }
}`,solutionCode:`import java.io.IOException;
public class Main {
    static void risco() throws IOException { throw new IOException("IO"); }
    public static void main(String[] args) {
        try { risco(); } catch(IOException e) { System.out.println(e.getMessage()); }
    }
}`,testCases:[{input:"",expectedOutput:"IO"}]},{id:"poo_24",title:"24. Múltiplos Blocos Catch",description:'Podemos ter vários blocos catch para tratar diferentes tipos de erros de formas distintas.\n\n**Tarefa:**\n1. Tenta aceder ao tamanho de uma string nula (`null.length()`).\n2. Adiciona catch para `ArithmeticException` (imprime "Math").\n3. Adiciona catch para `NullPointerException` (imprime "Null").\nVerifica qual é executado.',initialCode:`public class Main {
    public static void main(String[] args) {
        String s = null;
        // Tenta s.length()
    }
}`,solutionCode:`public class Main {
    public static void main(String[] args) {
        String s = null;
        try { System.out.println(s.length()); }
        catch(ArithmeticException e) { System.out.print("Math"); }
        catch(NullPointerException e) { System.out.print("Null"); }
    }
}`,testCases:[{input:"",expectedOutput:"Null"}]},{id:"poo_25",title:"25. Input Invalido (Scanner)",description:`Um erro comum é o utilizador introduzir texto quando se espera um número.

**Tarefa:**
1. Cria um Scanner inicializado com uma string "texto" (simulando input errado).
2. Tenta fazer \`nextInt()\`.
3. Captura a \`InputMismatchException\` e imprime "Invalido".`,initialCode:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner("texto"); // Simula input errado
        //...
    }
}`,solutionCode:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner("texto");
        try { int i = sc.nextInt(); }
        catch(InputMismatchException e) { System.out.println("Invalido"); }
    }
}`,testCases:[{input:"",expectedOutput:"Invalido"}]},{id:"poo_26",title:"26. Casting de Objetos (Downcasting)",description:"Para aceder a métodos específicos de uma subclasse quando temos uma referência da superclasse, precisamos de fazer casting explícito.\n\n**Tarefa:**\n1. `Animal a = new Cao()`. O método `ladrar()` só existe em `Cao`.\n2. Verifica se `a` é instância de Cao (`instanceof`).\n3. Faz o cast `((Cao)a).ladrar()`.",initialCode:`class Animal {}
class Cao extends Animal { void ladrar(){System.out.println("Au");} }
public class Main { ... }`,solutionCode:`class Animal {}
class Cao extends Animal { void ladrar(){System.out.println("Au");} }
public class Main {
    public static void main(String[] args) {
        Animal a = new Cao();
        if(a instanceof Cao) ((Cao)a).ladrar();
    }
}`,testCases:[{input:"",expectedOutput:"Au"}]},{id:"poo_27",title:"27. Comparação de Objetos (equals)",description:"O operador `==` compara referências de memória. Para comparar conteúdo, devemos sobrescrever `equals()`.\n\n**Tarefa:**\nSobrescreve `equals` na classe `Ponto(x,y)` para retornar true se as coordenadas forem iguais, independentemente de serem objetos diferentes.",initialCode:`class Ponto {
    int x, y;
    // equals
}
public class Main { ... }`,solutionCode:`class Ponto {
    int x, y; Ponto(int x, int y){this.x=x;this.y=y;}
    public boolean equals(Object o) {
        if(this==o) return true;
        if(!(o instanceof Ponto)) return false;
        Ponto p = (Ponto)o;
        return x==p.x && y==p.y;
    }
}
public class Main {
    public static void main(String[] args) {
        System.out.println(new Ponto(1,1).equals(new Ponto(1,1)));
    }
}`,testCases:[{input:"",expectedOutput:"true"}]},{id:"poo_28",title:"28. Tipos Enumerados (Enum)",description:"Enums representam um conjunto fixo de constantes.\n\n**Tarefa:**\n1. Define `enum Dia { SEG, TER }`.\n2. Percorre todos os valores usando `Dia.values()` e imprime-os.",initialCode:`enum Dia { ... }
public class Main { ... }`,solutionCode:`enum Dia { SEG, TER }
public class Main {
    public static void main(String[] args) {
        for(Dia d : Dia.values()) System.out.print(d + " ");
    }
}`,testCases:[{input:"",expectedOutput:"SEG TER "}]},{id:"poo_29",title:"29. Associação Bidirecional",description:'Modela uma relação onde A conhece B e B conhece A. \n\n**Tarefa:**\nClasses A e B. A tem método `setB`, B tem método `setA`. Instancia ambos e liga-os. Imprime "Link OK" se não houver erros (cuidado com recursão infinita no toString se o implementasses!).',initialCode:`class A { B b; }
class B { A a; }
public class Main { ... }`,solutionCode:`class A { B b; void setB(B b){this.b=b;} }
class B { A a; void setA(A a){this.a=a;} }
public class Main {
    public static void main(String[] args) {
        A a = new A(); B b = new B();
        a.setB(b); b.setA(a);
        System.out.println("Link OK");
    }
}`,testCases:[{input:"",expectedOutput:"Link OK"}]},{id:"poo_30",title:"30. Singleton (Padrão de Criação)",description:"O Singleton garante que uma classe tem apenas uma instância.\n\n**Tarefa:**\n1. Classe `Config` com construtor privado.\n2. Atributo estático `instance`.\n3. Método estático `getInstance()` que cria a instância apenas se for null.\n4. Verifica se duas chamadas a `getInstance()` retornam o mesmo objeto (`==`).",initialCode:`class Config {
    private static Config instance;
    private Config(){}
    // getInstance
}
public class Main { ... }`,solutionCode:`class Config {
    private static Config instance;
    private Config(){}
    public static Config getInstance() { if(instance==null) instance=new Config(); return instance; }
}
public class Main {
    public static void main(String[] args) {
        System.out.println(Config.getInstance() == Config.getInstance());
    }
}`,testCases:[{input:"",expectedOutput:"true"}]}]},Tx={id:"poo2",name:"Programação Orientada a Objetos 2",shortName:"POO 2",language:"java",exercises:[{id:"poo2_01",title:"1. Exceções Personalizadas",description:'Podemos criar os nossos próprios tipos de erro estendendo `Exception`.\n\n**Tarefa:**\n1. Cria a classe `IdadeInvalidaException` que estende `Exception`.\n2. No main, cria um método `check(int age)` que lança esta exceção se `age < 0`.\n3. Lê um número inteiro do input.\n4. Chama o método com esse número e captura a exceção, imprimindo a mensagem "Negativo" se ocorrer.',initialCode:`import java.util.Scanner;
class IdadeInvalidaException extends Exception {
    //...
}
public class Main { ... }`,solutionCode:`import java.util.Scanner;
class IdadeInvalidaException extends Exception { public IdadeInvalidaException(String s){super(s);} }
public class Main {
    static void check(int age) throws IdadeInvalidaException {
        if(age<0) throw new IdadeInvalidaException("Negativo");
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(sc.hasNextInt()) {
            try { check(sc.nextInt()); } catch(IdadeInvalidaException e) { System.out.println(e.getMessage()); }
        }
    }
}`,testCases:[{input:"-5",expectedOutput:"Negativo"}]},{id:"poo2_02",title:"2. Try-with-resources (AutoCloseable)",description:'Para garantir que recursos (ficheiros, conexões) são fechados, implementamos `AutoCloseable`.\n\n**Tarefa:**\n1. Cria classe `Recurso` que implementa `AutoCloseable`. No método `close()`, imprime "Fechado".\n2. Usa a sintaxe `try(Recurso r = new Recurso())`.\n3. Dentro do bloco try, imprime "Aberto ".',initialCode:`class Recurso implements AutoCloseable {
    public void close() { System.out.print("Fechado"); }
}
public class Main { ... }`,solutionCode:`class Recurso implements AutoCloseable {
    public void close() { System.out.print("Fechado"); }
}
public class Main {
    public static void main(String[] args) {
        try(Recurso r = new Recurso()) { System.out.print("Aberto "); }
    }
}`,testCases:[{input:"",expectedOutput:"Aberto Fechado"}]},{id:"poo2_03",title:"3. Encadeamento de Exceções (Chained Exceptions)",description:"Às vezes capturamos um erro de baixo nível e lançamos um de alto nível, mantendo a causa original.\n\n**Tarefa:**\n1. Lê uma mensagem do input.\n2. Lança `ArithmeticException` com essa mensagem.\n3. Captura-a e lança uma `RuntimeException` passando a exceção original no construtor.\n4. No catch final, imprime a mensagem da causa original (`getCause().getMessage()`).",initialCode:`import java.util.Scanner;
public class Main { ... }`,solutionCode:`import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String msg = sc.next();
        try {
            try { throw new ArithmeticException(msg); }
            catch(Exception e) { throw new RuntimeException(e); }
        } catch(RuntimeException e) {
            System.out.println(e.getCause().getMessage());
        }
    }
}`,testCases:[{input:"CausaErro",expectedOutput:"CausaErro"}]},{id:"poo2_04",title:"4. Análise de StackTrace",description:`O StackTrace mostra a pilha de chamadas onde ocorreu o erro. É vital para debugging.

**Tarefa:**
Lê uma string "Erro". Lança uma exceção com essa mensagem. Captura-a e imprime \`e.toString()\`.`,initialCode:`import java.util.Scanner;
public class Main { ... }`,solutionCode:`import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        try { throw new Exception(sc.next()); }
        catch(Exception e) { System.out.println(e.toString()); }
    }
}`,testCases:[{input:"FalhaCritica",expectedOutput:"java.lang.Exception: FalhaCritica"}]},{id:"poo2_05",title:"5. Asserções (Assertions)",description:'Asserções servem para validar invariantes durante o desenvolvimento. `assert condicao : "Msg";`.\n\n**Tarefa:**\nLê um número X. Escreve um código que usa `assert` para validar se x > 0. Nota: Como o assert pode estar desativado na JVM de teste, imprime "Compila" no final para passar o teste.',initialCode:`import java.util.Scanner;
public class Main { ... }`,solutionCode:`import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int x = sc.nextInt();
        // assert x > 0 : "X deve ser positivo";
        System.out.println("Compila");
    }
}`,testCases:[{input:"-1",expectedOutput:"Compila"}]},{id:"poo2_06",title:"6. Classes Internas (Inner Class)",description:"Uma classe interna (não estática) tem acesso aos membros da classe externa.\n\n**Tarefa:**\n1. Classe `Outer` com atributo privado `msg` lido do construtor.\n2. Classe `Inner` dentro de `Outer` com método `show()` que imprime `msg`.\n3. No main: Lê uma string, cria `Outer` com ela, instancia `Inner` e chama `show()`.",initialCode:`import java.util.Scanner;
class Outer {
    private String msg;
    Outer(String m) { msg = m; }
    class Inner { ... }
}
public class Main { ... }`,solutionCode:`import java.util.Scanner;
class Outer {
    private String msg;
    Outer(String m) { msg = m; }
    class Inner { void show() { System.out.println(msg); } }
}
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Outer o = new Outer(sc.next());
        Outer.Inner i = o.new Inner();
        i.show();
    }
}`,testCases:[{input:"OlaMundo",expectedOutput:"OlaMundo"}]},{id:"poo2_07",title:"7. Classes Aninhadas Estáticas",description:"Uma classe estática dentro de outra comporta-se como uma classe normal, mas agrupada logicamente.\n\n**Tarefa:**\nDefine `static class Nested` dentro de `Outer` com método `show(String s)` que imprime a string. No main, lê uma string e passa-a para a nested class.",initialCode:`import java.util.Scanner;
class Outer {
    static class Nested { ... }
}
public class Main { ... }`,solutionCode:`import java.util.Scanner;
class Outer {
    static class Nested { void show(String s) { System.out.println(s); } }
}
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Outer.Nested n = new Outer.Nested();
        n.show(sc.next());
    }
}`,testCases:[{input:"StaticTest",expectedOutput:"StaticTest"}]},{id:"poo2_08",title:"8. Classes Locais",description:"Podemos definir uma classe dentro de um método. Ela só é visível lá.\n\n**Tarefa:**\nNo método `metodo(String texto)`, define `class Local`, instancia-a e chama um método dela que imprima `texto`.",initialCode:`import java.util.Scanner;
class Outer {
    void metodo(String texto) {
        class Local { ... }
    }
}
public class Main { ... }`,solutionCode:`import java.util.Scanner;
class Outer {
    void metodo(String texto) {
        class Local { void msg() { System.out.println(texto); } }
        new Local().msg();
    }
}
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        new Outer().metodo(sc.next());
    }
}`,testCases:[{input:"LocalScope",expectedOutput:"LocalScope"}]},{id:"poo2_09",title:"9. Classes Anónimas (Interfaces)",description:'Classes anónimas são úteis para implementar interfaces "on the fly".\n\n**Tarefa:**\nCria uma instância de `Runnable` usando uma classe anónima. No método `run`, imprime a string lida do input.',initialCode:`import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        final String s = sc.next();
        Runnable r = new Runnable() { ... };
        r.run();
    }
}`,solutionCode:`import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        final String s = sc.next();
        Runnable r = new Runnable() {
            public void run() { System.out.println(s); }
        };
        r.run();
    }
}`,testCases:[{input:"ExecAnom",expectedOutput:"ExecAnom"}]},{id:"poo2_10",title:"10. Classes Anónimas (Herança)",description:"Também podemos usar classes anónimas para estender classes abstratas pontualmente.\n\n**Tarefa:**\nDada `abstract class Animal`, cria uma instância anónima no main que implementa `som()` imprimindo o texto lido do input.",initialCode:`import java.util.Scanner;
abstract class Animal { abstract void som(); }
public class Main { ... }`,solutionCode:`import java.util.Scanner;
abstract class Animal { abstract void som(); }
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        final String s = sc.next();
        Animal a = new Animal() {
            void som() { System.out.println(s); }
        };
        a.som();
    }
}`,testCases:[{input:"Muuu",expectedOutput:"Muuu"}]},{id:"poo2_11",title:"11. Classes Genéricas (Box<T>)",description:"Generics permitem criar código reutilizável e type-safe.\n\n**Tarefa:**\n1. Cria a classe `Box<T>` que armazena um valor do tipo T.\n2. Métodos: `put(T v)` e `T get()`.\n3. Instancia `Box<String>`, guarda a palavra lida do input e imprime.",initialCode:`import java.util.Scanner;
class Box<T> {
    T val;
    //...
}
public class Main { ... }`,solutionCode:`import java.util.Scanner;
class Box<T> {
    T val; void put(T v){val=v;} T get(){return val;}
}
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Box<String> b = new Box<>(); b.put(sc.next());
        System.out.println(b.get());
    }
}`,testCases:[{input:"GenBox",expectedOutput:"GenBox"}]},{id:"poo2_12",title:"12. Métodos Genéricos",description:`Um método pode ter os seus próprios parâmetros de tipo.

**Tarefa:**
Cria o método estático \`<T> void printArray(T[] arr)\` que imprime qualquer array.
No main, lê dois inteiros para um array Integer[] e chama o método.`,initialCode:`import java.util.Scanner;
public class Main {
    static <T> void printArray(T[] arr) { ... }
}`,solutionCode:`import java.util.Scanner;
public class Main {
    static <T> void printArray(T[] arr) {
        for(T t : arr) System.out.print(t + " ");
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Integer[] arr = {sc.nextInt(), sc.nextInt()};
        printArray(arr);
    }
}`,testCases:[{input:"1 2",expectedOutput:"1 2 "}]},{id:"poo2_13",title:"13. Bounded Type Parameters",description:"Podemos restringir os tipos aceites. Ex: `T extends Number`.\n\n**Tarefa:**\nCria classe `Numero<T extends Number>`. Implementa `double valor()`. No main lê um inteiro e imprime o valor double.",initialCode:`import java.util.Scanner;
class Numero<T extends Number> {
    T n;
    //...
}
public class Main { ... }`,solutionCode:`import java.util.Scanner;
class Numero<T extends Number> {
    T n; Numero(T n){this.n=n;}
    double valor() { return n.doubleValue(); }
}
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println(new Numero<>(sc.nextInt()).valor());
    }
}`,testCases:[{input:"10",expectedOutput:"10.0"}]},{id:"poo2_14",title:"14. Múltiplos Tipos Genéricos (Pair)",description:'Classes podem ter vários parâmetros de tipo, como `Map<K, V>`.\n\n**Tarefa:**\nImplementa `class Pair<K, V>` com `toString` retornando "K=V". Lê um inteiro e uma string do input e cria o par.',initialCode:`import java.util.Scanner;
class Pair<K,V> { ... }
public class Main { ... }`,solutionCode:`import java.util.Scanner;
class Pair<K,V> {
    K k; V v; Pair(K k, V v){this.k=k; this.v=v;}
    public String toString(){return k+"="+v;}
}
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println(new Pair<>(sc.nextInt(), sc.next()));
    }
}`,testCases:[{input:"1 A",expectedOutput:"1=A"}]},{id:"poo2_15",title:"15. Wildcards (?)",description:'O wildcard `?` representa "qualquer tipo".\n\n**Tarefa:**\nImplementa `printList(List<?> l)` que imprime o primeiro elemento. Cria uma lista com uma string lida do input e chama o método.',initialCode:`import java.util.*;
public class Main {
    static void printList(List<?> l) { ... }
}`,solutionCode:`import java.util.*;
public class Main {
    static void printList(List<?> l) { System.out.println(l.get(0)); }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        printList(Arrays.asList(sc.next()));
    }
}`,testCases:[{input:"Wildcard",expectedOutput:"Wildcard"}]},{id:"poo2_16",title:"16. Pattern Strategy: Pagamentos",description:'O **Strategy** permite trocar algoritmos em tempo de execução.\n\n**Tarefa:**\n1. Interface `Pagamento` (`pagar(int v)`).\n2. Estratégias: `Cartao`. Imprime "Cartao [valor]".\n3. Lê um valor do input e executa o pagamento.',initialCode:`import java.util.Scanner;
interface Pagamento { void pagar(int v); }
class Cartao implements Pagamento { ... }
class Compra { ... }
public class Main { ... }`,solutionCode:`import java.util.Scanner;
interface Pagamento { void pagar(int v); }
class Cartao implements Pagamento { public void pagar(int v){System.out.println("Cartao "+v);} }
class Compra { 
    Pagamento p; Compra(Pagamento p){this.p=p;}
    void processar(int v){p.pagar(v);}
}
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        new Compra(new Cartao()).processar(sc.nextInt());
    }
}`,testCases:[{input:"150",expectedOutput:"Cartao 150"}]},{id:"poo2_17",title:"17. Pattern Strategy: Ordenação",description:"Podemos usar Strategy para definir como ordenar dados.\n\n**Tarefa:**\n1. Interface `SortStrategy`.\n2. Implementação `Quick`. Imprime a string lida do input (nome do algoritmo).\n3. Classe `Sorter` onde injetamos a estratégia.",initialCode:`import java.util.Scanner;
interface SortStrategy { void sort(); }
//...
public class Main { ... }`,solutionCode:`import java.util.Scanner;
interface SortStrategy { void sort(); }
class Quick implements SortStrategy {
    String name; Quick(String n){name=n;}
    public void sort(){System.out.print(name);}
}
class Sorter { SortStrategy s; void set(SortStrategy s){this.s=s;} void exec(){s.sort();} }
public class Main {
    public static void main(String[] a){
        Scanner sc = new Scanner(System.in);
        Sorter s=new Sorter(); s.set(new Quick(sc.next())); s.exec();
    }
}`,testCases:[{input:"QuickSort",expectedOutput:"QuickSort"}]},{id:"poo2_18",title:"18. Strategy: Calculadora",description:"Calculadora onde cada operação é uma estratégia.\n\n**Tarefa:**\nDefine `interface Op`. Implementa `Soma`. Lê dois inteiros do input e imprime a soma.",initialCode:`import java.util.Scanner;
interface Op { int calc(int a, int b); }
//...
public class Main { ... }`,solutionCode:`import java.util.Scanner;
interface Op { int calc(int a, int b); }
class Soma implements Op { public int calc(int a, int b){return a+b;} }
public class Main {
    public static void main(String[] a){
        Scanner sc = new Scanner(System.in);
        System.out.println(new Soma().calc(sc.nextInt(), sc.nextInt()));
    }
}`,testCases:[{input:"5 7",expectedOutput:"12"}]},{id:"poo2_19",title:"19. Template Method: Bebidas",description:"O **Template Method** define o esqueleto de um algoritmo.\n\n**Tarefa:**\n1. `Bebida`: `preparar()` chama `misturar()`.\n2. `Cafe`: `misturar()` imprime a string lida do input.\n3. Instancia e chama preparar.",initialCode:`import java.util.Scanner;
abstract class Bebida {
    final void preparar() { misturar(); }
    abstract void misturar();
}
//...
public class Main { ... }`,solutionCode:`import java.util.Scanner;
abstract class Bebida {
    final void preparar() { misturar(); }
    abstract void misturar();
}
class Cafe extends Bebida {
    String s; Cafe(String s){this.s=s;}
    void misturar(){System.out.print(s);}
}
public class Main {
    public static void main(String[] a){
        Scanner sc = new Scanner(System.in);
        new Cafe(sc.next()).preparar();
    }
}`,testCases:[{input:"Expresso",expectedOutput:"Expresso"}]},{id:"poo2_20",title:"20. Template Method: Processamento",description:"Pipeline de dados: Ler -> Processar -> Salvar.\n\n**Tarefa:**\nImplementa `PDF` que estende `Processador`. No passo `processar`, imprime a palavra lida do input.",initialCode:`import java.util.Scanner;
abstract class Processador { ... }
public class Main { ... }`,solutionCode:`import java.util.Scanner;
abstract class Processador {
    void run() { processar(); }
    abstract void processar();
}
class PDF extends Processador {
    String s; PDF(String s){this.s=s;}
    void processar(){System.out.print("PDF " + s);}
}
public class Main {
    public static void main(String[] a){
        Scanner sc = new Scanner(System.in);
        new PDF(sc.next()).run();
    }
}`,testCases:[{input:"File",expectedOutput:"PDF File"}]},{id:"poo2_21",title:"21. Iterator (Java Collections)",description:`O padrão **Iterator** permite percorrer elementos sem expor a estrutura interna.

**Tarefa:**
1. Lê duas palavras do input.
2. Guarda-as numa ArrayList.
3. Usa o \`Iterator\` da lista para percorrer e imprimir os elementos juntos.`,initialCode:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        List<String> l = new ArrayList<>();
        // Adiciona e itera
    }
}`,solutionCode:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        List<String> l = new ArrayList<>();
        l.add(sc.next()); l.add(sc.next());
        Iterator<String> it = l.iterator();
        while(it.hasNext()) System.out.print(it.next());
    }
}`,testCases:[{input:"A B",expectedOutput:"AB"}]},{id:"poo2_22",title:"22. Iterable Interface",description:"Para usar o loop `for-each`, a classe deve implementar `Iterable<T>`.\n\n**Tarefa:**\n1. Cria `Colecao` que implementa `Iterable<Integer>`.\n2. O construtor recebe dois inteiros do input.\n3. O iterador percorre esses inteiros.",initialCode:`import java.util.*;
class Colecao implements Iterable<Integer> { ... }
public class Main { ... }`,solutionCode:`import java.util.*;
class Colecao implements Iterable<Integer> {
    Integer[] arr; 
    Colecao(int a, int b) { arr = new Integer[]{a, b}; }
    public Iterator<Integer> iterator() { return Arrays.asList(arr).iterator(); }
}
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        for(int i : new Colecao(sc.nextInt(), sc.nextInt())) System.out.print(i);
    }
}`,testCases:[{input:"1 2",expectedOutput:"12"}]},{id:"poo2_23",title:"23. Implementar Iterator Manualmente",description:`Cria uma classe que implementa a interface \`Iterator<T>\` para percorrer um valor único.

**Tarefa:**
Lê um inteiro do input. Cria um iterador que retorna esse inteiro uma única vez.`,initialCode:`import java.util.*;
class SingleIt implements Iterator<Integer> { ... }
public class Main { ... }`,solutionCode:`import java.util.*;
class SingleIt implements Iterator<Integer> {
    int val; boolean done=false;
    SingleIt(int v){val=v;}
    public boolean hasNext(){return !done;}
    public Integer next(){done=true; return val;}
}
public class Main {
    public static void main(String[] x){
        Scanner sc = new Scanner(System.in);
        SingleIt i=new SingleIt(sc.nextInt());
        System.out.println(i.next());
    }
}`,testCases:[{input:"5",expectedOutput:"5"}]},{id:"poo2_24",title:"24. Pattern Composite: Sistema de Ficheiros",description:`O **Composite** trata objetos individuais e composições de forma uniforme.

**Tarefa:**
Lê duas strings (nomes de ficheiros). Adiciona a uma Pasta e imprime.`,initialCode:`import java.util.*;
interface Comp { void show(); }
class File implements Comp { ... }
class Folder implements Comp { ... }
public class Main { ... }`,solutionCode:`import java.util.*;
interface Comp { void show(); }
class File implements Comp { String n; File(String n){this.n=n;} public void show(){System.out.print(n+" ");} }
class Folder implements Comp {
    List<Comp> c = new ArrayList<>();
    void add(Comp i){c.add(i);}
    public void show(){ for(Comp i:c) i.show(); }
}
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Folder root = new Folder();
        root.add(new File(sc.next()));
        root.add(new File(sc.next()));
        root.show();
    }
}`,testCases:[{input:"A B",expectedOutput:"A B "}]},{id:"poo2_25",title:"25. Composite: Expressões Aritméticas",description:"Representar `(A + B)` como árvore.\n\n**Tarefa:**\nLê dois inteiros A e B. Cria a árvore de soma `Soma(Num(A), Num(B))` e avalia.",initialCode:`import java.util.Scanner;
interface Expr { int eval(); }
class Num implements Expr { ... }
class Soma implements Expr { ... }
public class Main { ... }`,solutionCode:`import java.util.Scanner;
interface Expr { int eval(); }
class Num implements Expr { int v; Num(int v){this.v=v;} public int eval(){return v;} }
class Soma implements Expr { Expr l,r; Soma(Expr l, Expr r){this.l=l;this.r=r;} public int eval(){return l.eval()+r.eval();} }
public class Main {
    public static void main(String[] a){
        Scanner sc = new Scanner(System.in);
        System.out.println(new Soma(new Num(sc.nextInt()), new Num(sc.nextInt())).eval());
    }
}`,testCases:[{input:"1 2",expectedOutput:"3"}]},{id:"poo2_26",title:"26. Composite: HTML Generator",description:`Gerar HTML aninhado.

**Tarefa:**
Lê uma palavra. Envolve-a numa Tag \`div\` e imprime.`,initialCode:`import java.util.Scanner;
abstract class Elem { abstract void print(); }
class Texto extends Elem { ... }
class Tag extends Elem { ... }
public class Main { ... }`,solutionCode:`import java.util.*;
abstract class Elem { abstract void print(); }
class Texto extends Elem { String t; Texto(String t){this.t=t;} void print(){System.out.print(t);} }
class Tag extends Elem { 
    List<Elem> l=new ArrayList<>(); void add(Elem e){l.add(e);} 
    void print(){System.out.print("<div>"); for(Elem e:l)e.print(); System.out.print("</div>");}
}
public class Main {
    public static void main(String[] a){
        Scanner sc = new Scanner(System.in);
        Tag t=new Tag(); t.add(new Texto(sc.next())); t.print();
    }
}`,testCases:[{input:"Ola",expectedOutput:"<div>Ola</div>"}]},{id:"poo2_27",title:"27. Expressões Lambda (Java 8)",description:`Lambdas simplificam a implementação de interfaces funcionais.

**Tarefa:**
Lê uma string. Cria um \`Runnable\` com lambda que imprime essa string e executa.`,initialCode:`import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Runnable r = () -> ...;
        r.run();
    }
}`,solutionCode:`import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        Runnable r = () -> System.out.println(s);
        r.run();
    }
}`,testCases:[{input:"LambdaTest",expectedOutput:"LambdaTest"}]},{id:"poo2_28",title:"28. Streams API",description:`Streams permitem processar coleções de forma declarativa.

**Tarefa:**
Lê 4 inteiros. Usa \`stream().filter().forEach()\` para imprimir apenas os pares.`,initialCode:`import java.util.*;
public class Main { ... }`,solutionCode:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        List<Integer> l = Arrays.asList(sc.nextInt(), sc.nextInt(), sc.nextInt(), sc.nextInt());
        l.stream().filter(n -> n%2==0).forEach(System.out::print);
    }
}`,testCases:[{input:"1 2 3 4",expectedOutput:"24"}]},{id:"poo2_29",title:"29. Optional (Evitar NullPointerException)",description:'`Optional<T>` é um contentor que pode ou não ter valor.\n\n**Tarefa:**\nLê uma string. Se for "null" (texto), considera como null real. Usa `Optional.ofNullable(...).orElse("Vazio")` para imprimir.',initialCode:`import java.util.*;
public class Main { ... }`,solutionCode:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        if(s.equals("null")) s = null;
        System.out.println(Optional.ofNullable(s).orElse("Vazio"));
    }
}`,testCases:[{input:"null",expectedOutput:"Vazio"}]},{id:"poo2_30",title:"30. Records (Java 14+)",description:"Records são classes de dados imutáveis.\n\n**Tarefa:**\nDefine `record Ponto(int x, int y)`. Lê x e y do input, instancia e imprime `p.x()`.",initialCode:`import java.util.Scanner;
record Ponto(int x, int y) {}
public class Main { ... }`,solutionCode:`import java.util.Scanner;
record Ponto(int x, int y) {}
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Ponto p = new Ponto(sc.nextInt(), sc.nextInt());
        System.out.println(p.x());
    }
}`,testCases:[{input:"10 20",expectedOutput:"10"}]}]},Ia=[Cx,Nx,jx,Ex,Mx,Ox,Ax,_x,Tx],wx=({code:r,setCode:m,language:d})=>{const u=A.useRef(null),h=A.useRef(null),f=()=>{u.current&&h.current&&(h.current.scrollTop=u.current.scrollTop)},g=r.split(`
`).length,M=Array.from({length:Math.max(g,15)},(y,v)=>v+1);return o.jsxs("div",{className:"flex flex-col h-full bg-[#1e1e1e] rounded-xl overflow-hidden border border-gray-700 shadow-2xl",children:[o.jsxs("div",{className:"bg-[#2d2d2d] px-4 py-2 text-xs text-gray-400 flex items-center justify-between border-b border-gray-700 select-none",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(If,{size:14,className:"text-accent-200"}),o.jsxs("span",{className:"font-bold",children:["Main.",d]})]}),o.jsx("span",{className:"text-gray-500",children:"UTF-8"})]}),o.jsxs("div",{className:"relative flex-1 flex min-h-0",children:[o.jsx("div",{ref:h,className:"w-12 bg-[#1e1e1e] text-gray-600 text-right pr-3 pt-4 font-mono text-sm leading-6 select-none border-r border-gray-800 overflow-hidden",children:M.map(y=>o.jsx("div",{children:y},y))}),o.jsx("textarea",{ref:u,onScroll:f,value:r,onChange:y=>m(y.target.value),className:"flex-1 w-full h-full bg-[#1e1e1e] text-[#d4d4d4] font-mono p-4 pl-3 pt-4 resize-none focus:outline-none text-sm leading-6 whitespace-pre",spellCheck:"false",autoCapitalize:"off",autoComplete:"off",autoCorrect:"off"})]})]})},zx=()=>{const[r,m]=A.useState(Ia[0]),[d,u]=A.useState(Ia[0].exercises[0]),[h,f]=A.useState(Ia[0].exercises[0].initialCode),[g,M]=A.useState(an.IDLE),[y,v]=A.useState(""),[_,E]=A.useState(""),[U,R]=A.useState("terminal");A.useEffect(()=>{f(d.initialCode),M(an.IDLE),v(""),E(""),R("terminal")},[d]);const k=5e3,Z=5e3,H=A.useRef(0),Q=async()=>{const q=Date.now();if(q-H.current<k){const J=Math.ceil((k-(q-H.current))/1e3);M(an.IDLE),E(`⚠️ Aguarde ${J} segundos antes de executar novamente.`),R("details");return}if(h.length>Z){M(an.ERROR),E(`⚠️ O código é demasiado longo (máximo ${Z} caracteres).`),R("details");return}H.current=q,M(an.RUNNING),v(""),E(""),R("terminal");try{const J=await Sx({code:h,language:r.language,testCases:d.testCases});M(J.status),v(J.output||""),E(J.details||""),J.status===an.SUCCESS?R("details"):J.output&&J.output.includes("--- ERRO ---")?R("terminal"):R("details")}catch{M(an.ERROR),E("Erro interno na execução da simulação.")}},en=()=>{d.solutionCode?(f(d.solutionCode),M(an.IDLE),v(""),E("")):alert("Solução não disponível.")};return!Ia||Ia.length===0?o.jsx("div",{className:"p-10 text-center",children:"A carregar conteúdos..."}):o.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 h-[calc(100vh-64px)] flex flex-col md:flex-row gap-6",children:[o.jsx("div",{className:"hidden md:flex w-64 flex-col gap-4 overflow-y-auto pr-1",children:o.jsxs("div",{className:"bg-white p-4 rounded-xl shadow-sm border border-primary-200",children:[o.jsxs("h2",{className:"font-bold text-text-100 mb-4 flex items-center gap-2 text-sm uppercase tracking-wider",children:[o.jsx(Bf,{size:16,className:"text-accent-200"}),"Cadeiras"]}),o.jsx("div",{className:"space-y-3",children:Ia.map(q=>o.jsxs("div",{children:[o.jsxs("button",{onClick:()=>{m(q),u(q.exercises[0])},className:`w-full text-left px-3 py-2 rounded-lg text-sm font-bold transition-colors flex justify-between items-center ${r.id===q.id?"bg-primary-300 text-white shadow-md":"text-text-200 hover:bg-primary-100"}`,children:[q.shortName,o.jsx("span",{className:"text-[10px] font-mono opacity-80 bg-white/20 px-1 rounded",children:q.language})]}),r.id===q.id&&o.jsx("div",{className:"ml-3 mt-2 pl-3 border-l-2 border-primary-200 space-y-1",children:q.exercises.map(J=>o.jsxs("button",{onClick:()=>u(J),className:`w-full text-left px-2 py-1.5 rounded text-xs transition-all flex items-center gap-2 ${d.id===J.id?"text-accent-200 font-bold bg-accent-100/10":"text-text-200 hover:text-accent-200 hover:translate-x-1"}`,children:[o.jsx("div",{className:`w-1.5 h-1.5 rounded-full ${d.id===J.id?"bg-accent-200":"bg-gray-300"}`}),o.jsx("span",{className:"truncate",children:J.title})]},J.id))})]},q.id))})]})}),o.jsxs("div",{className:"flex-1 flex flex-col min-h-0 gap-4",children:[o.jsx("div",{className:"bg-white p-5 rounded-xl shadow-sm border border-primary-200 flex flex-col gap-3",children:o.jsxs("div",{className:"flex justify-between items-start",children:[o.jsxs("div",{children:[o.jsxs("h1",{className:"text-xl font-bold text-text-100 flex items-center gap-2",children:[d.title,g===an.SUCCESS&&o.jsx(Ho,{size:18,className:"text-green-500"})]}),o.jsx("p",{className:"text-text-200 text-sm mt-1",children:d.description})]}),o.jsxs("div",{className:"flex gap-2",children:[o.jsx("button",{onClick:en,className:"px-3 py-2 text-accent-200 bg-accent-100/10 hover:bg-accent-100/20 rounded-lg transition-colors text-sm font-semibold",children:"Ver Solução"}),o.jsxs("button",{onClick:Q,disabled:g===an.RUNNING,className:`flex items-center gap-2 px-6 py-2 rounded-lg font-bold text-white shadow-md transition-all text-sm ${g===an.RUNNING?"bg-gray-400 cursor-not-allowed":"bg-green-600 hover:bg-green-500 hover:shadow-lg active:translate-y-0.5"}`,children:[g===an.RUNNING?o.jsx(Tg,{className:"animate-spin",size:18}):o.jsx(bf,{size:18,fill:"currentColor"}),g===an.RUNNING?"A Executar...":"Executar Código"]})]})]})}),o.jsxs("div",{className:"flex-1 grid lg:grid-cols-2 gap-4 min-h-0",children:[o.jsx(wx,{code:h,setCode:f,language:r.language}),o.jsxs("div",{className:"flex flex-col bg-white rounded-xl shadow-xl border border-primary-200 overflow-hidden",children:[o.jsxs("div",{className:"flex border-b border-gray-200 bg-gray-50",children:[o.jsxs("button",{onClick:()=>R("terminal"),className:`px-4 py-3 text-sm font-medium flex items-center gap-2 border-b-2 transition-colors ${U==="terminal"?"border-accent-200 text-accent-200 bg-white":"border-transparent text-gray-500 hover:text-gray-700"}`,children:[o.jsx(Bi,{size:16})," Terminal"]}),o.jsxs("button",{onClick:()=>R("details"),className:`px-4 py-3 text-sm font-medium flex items-center gap-2 border-b-2 transition-colors ${U==="details"?"border-accent-200 text-accent-200 bg-white":"border-transparent text-gray-500 hover:text-gray-700"}`,children:[g===an.SUCCESS?o.jsx(Ho,{size:16}):o.jsx(dg,{size:16}),"Resultado",g!==an.IDLE&&g!==an.RUNNING&&o.jsx("span",{className:`text-[10px] px-1.5 py-0.5 rounded-full ${g===an.SUCCESS?"bg-green-100 text-green-700":"bg-red-100 text-red-700"}`,children:g===an.SUCCESS?"PASSOU":"ERRO"})]})]}),o.jsxs("div",{className:"flex-1 p-0 overflow-y-auto bg-[#1e1e1e] relative",children:[U==="terminal"&&o.jsx("div",{className:"p-4 font-mono text-sm text-gray-300 min-h-full",children:g===an.IDLE?o.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-gray-600 gap-2 opacity-50 mt-10",children:[o.jsx(Bi,{size:48}),o.jsx("p",{children:"O output do programa aparecerá aqui."})]}):o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"text-gray-500 text-xs mb-2 select-none",children:["$ ",r.language==="c"?"./main":"java Main"]}),o.jsx("div",{className:"whitespace-pre-wrap",children:y||o.jsx("span",{className:"text-gray-600 italic",children:"(Sem output no stdout...)"})}),g===an.SUCCESS&&o.jsx("div",{className:"text-green-500 text-xs mt-4 select-none",children:"Process finished with exit code 0"}),g!==an.SUCCESS&&g!==an.RUNNING&&o.jsx("div",{className:"text-red-500 text-xs mt-4 select-none",children:"Process finished with errors"})]})}),U==="details"&&o.jsx("div",{className:"p-6 bg-white h-full overflow-y-auto",children:g===an.IDLE?o.jsxs("div",{className:"text-center text-gray-400 mt-10",children:[o.jsx(bf,{size:48,className:"mx-auto mb-2 opacity-20"}),o.jsx("p",{children:"Executa o código para ver a análise."})]}):o.jsxs("div",{className:"space-y-6",children:[o.jsxs("div",{className:`p-4 rounded-lg flex items-start gap-3 ${g===an.SUCCESS?"bg-green-50 text-green-800":g===an.TIMEOUT?"bg-orange-50 text-orange-800":"bg-red-50 text-red-800"}`,children:[g===an.SUCCESS?o.jsx(Ho,{className:"mt-0.5 shrink-0"}):o.jsx(Bg,{className:"mt-0.5 shrink-0"}),o.jsxs("div",{children:[o.jsx("h3",{className:"font-bold",children:g===an.SUCCESS?"Sucesso!":g===an.TIMEOUT?"Time Limit Exceeded":"Falhou"}),o.jsx("p",{className:"text-sm mt-1 whitespace-pre-wrap",children:_})]})]}),o.jsxs("div",{children:[o.jsxs("h4",{className:"font-bold text-gray-700 mb-3 flex items-center gap-2",children:[o.jsx(If,{size:16})," Caso de Teste Validado"]}),o.jsx("div",{className:"space-y-3",children:d.testCases.map((q,J)=>o.jsx("div",{className:"border border-gray-200 rounded-lg p-3 text-sm",children:o.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-2",children:[o.jsxs("div",{children:[o.jsx("span",{className:"text-xs font-bold text-gray-400 uppercase tracking-wider",children:"Input"}),o.jsx("div",{className:"font-mono bg-gray-100 p-1.5 rounded text-gray-800 mt-1",children:q.input||"(vazio)"})]}),o.jsxs("div",{children:[o.jsx("span",{className:"text-xs font-bold text-gray-400 uppercase tracking-wider",children:"Esperado"}),o.jsx("div",{className:"font-mono bg-gray-100 p-1.5 rounded text-gray-800 mt-1",children:q.expectedOutput})]})]})},J))})]})]})})]})]})]})]})]})},Lx=()=>o.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[o.jsxs("div",{className:"flex items-center gap-4 mb-12",children:[o.jsx("div",{className:"bg-primary-100 p-3 rounded-lg",children:o.jsx(lg,{className:"text-accent-200",size:32})}),o.jsxs("div",{children:[o.jsx("h1",{className:"text-3xl font-bold text-text-100",children:"Eventos"}),o.jsx("p",{className:"text-text-200",children:"Fica a par de tudo o que acontece no NEEI."})]})]}),o.jsxs("div",{className:"w-full",children:[o.jsx("h2",{className:"text-2xl font-bold text-text-100 mb-6",children:"Calendário"}),o.jsx("div",{className:"bg-white p-4 rounded-2xl shadow-sm border border-primary-200 overflow-hidden",children:o.jsxs("div",{className:"relative w-full",style:{paddingTop:"75%"},children:[" ",o.jsx("iframe",{src:"https://calendar.google.com/calendar/embed?src=da58e0b778e56df2ac4813b8ad6e4dbb4bed212424c26797b5d9832efb5006ba%40group.calendar.google.com&ctz=Europe%2FLisbon",style:{border:0},className:"absolute top-0 left-0 w-full h-full rounded-lg",frameBorder:"0",scrolling:"no",title:"Calendário NEEI"})]})})]})]}),Dx=()=>o.jsx(Ih,{children:o.jsx(Xg,{children:o.jsxs(hh,{children:[o.jsx(zt,{path:"/",element:o.jsx(Kg,{})}),o.jsx(zt,{path:"/sobre",element:o.jsx(vx,{})}),o.jsx(zt,{path:"/eventos",element:o.jsx(Lx,{})}),o.jsx(zt,{path:"/projetos",element:o.jsx(hx,{})}),o.jsx(zt,{path:"/pertencer",element:o.jsx(gx,{})}),o.jsx(zt,{path:"/vagas",element:o.jsx(xx,{})}),o.jsx(zt,{path:"/quack",element:o.jsx(zx,{})})]})})}),kf=document.getElementById("root");if(!kf)throw new Error("Could not find root element to mount to");const Rx=Nv.createRoot(kf);Rx.render(o.jsx(vv.StrictMode,{children:o.jsx(Dx,{})}));
