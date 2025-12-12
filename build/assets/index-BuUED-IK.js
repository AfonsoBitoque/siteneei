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
 */var ef;function pv(){if(ef)return W;ef=1;var r=Symbol.for("react.transitional.element"),m=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),g=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),E=Symbol.for("react.activity"),U=Symbol.iterator;function R(b){return b===null||typeof b!="object"?null:(b=U&&b[U]||b["@@iterator"],typeof b=="function"?b:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Z=Object.assign,I={};function Q(b,D,H){this.props=b,this.context=D,this.refs=I,this.updater=H||k}Q.prototype.isReactComponent={},Q.prototype.setState=function(b,D){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,D,"setState")},Q.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function ne(){}ne.prototype=Q.prototype;function q(b,D,H){this.props=b,this.context=D,this.refs=I,this.updater=H||k}var J=q.prototype=new ne;J.constructor=q,Z(J,Q.prototype),J.isPureReactComponent=!0;var je=Array.isArray;function Te(){}var $={H:null,A:null,T:null,S:null},He=Object.prototype.hasOwnProperty;function ke(b,D,H){var Y=H.ref;return{$$typeof:r,type:b,key:D,ref:Y!==void 0?Y:null,props:H}}function Je(b,D){return ke(b.type,D,b.props)}function $e(b){return typeof b=="object"&&b!==null&&b.$$typeof===r}function Ye(b){var D={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(H){return D[H]})}var Dt=/\/+/g;function Bn(b,D){return typeof b=="object"&&b!==null&&b.key!=null?Ye(""+b.key):D.toString(36)}function _n(b){switch(b.status){case"fulfilled":return b.value;case"rejected":throw b.reason;default:switch(typeof b.status=="string"?b.then(Te,Te):(b.status="pending",b.then(function(D){b.status==="pending"&&(b.status="fulfilled",b.value=D)},function(D){b.status==="pending"&&(b.status="rejected",b.reason=D)})),b.status){case"fulfilled":return b.value;case"rejected":throw b.reason}}throw b}function w(b,D,H,Y,P){var ie=typeof b;(ie==="undefined"||ie==="boolean")&&(b=null);var fe=!1;if(b===null)fe=!0;else switch(ie){case"bigint":case"string":case"number":fe=!0;break;case"object":switch(b.$$typeof){case r:case m:fe=!0;break;case _:return fe=b._init,w(fe(b._payload),D,H,Y,P)}}if(fe)return P=P(b),fe=Y===""?"."+Bn(b,0):Y,je(P)?(H="",fe!=null&&(H=fe.replace(Dt,"$&/")+"/"),w(P,D,H,"",function(Ga){return Ga})):P!=null&&($e(P)&&(P=Je(P,H+(P.key==null||b&&b.key===P.key?"":(""+P.key).replace(Dt,"$&/")+"/")+fe)),D.push(P)),1;fe=0;var We=Y===""?".":Y+":";if(je(b))for(var we=0;we<b.length;we++)Y=b[we],ie=We+Bn(Y,we),fe+=w(Y,D,H,ie,P);else if(we=R(b),typeof we=="function")for(b=we.call(b),we=0;!(Y=b.next()).done;)Y=Y.value,ie=We+Bn(Y,we++),fe+=w(Y,D,H,ie,P);else if(ie==="object"){if(typeof b.then=="function")return w(_n(b),D,H,Y,P);throw D=String(b),Error("Objects are not valid as a React child (found: "+(D==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":D)+"). If you meant to render a collection of children, use an array instead.")}return fe}function B(b,D,H){if(b==null)return b;var Y=[],P=0;return w(b,Y,"","",function(ie){return D.call(H,ie,P++)}),Y}function F(b){if(b._status===-1){var D=b._result;D=D(),D.then(function(H){(b._status===0||b._status===-1)&&(b._status=1,b._result=H)},function(H){(b._status===0||b._status===-1)&&(b._status=2,b._result=H)}),b._status===-1&&(b._status=0,b._result=D)}if(b._status===1)return b._result.default;throw b._result}var he=typeof reportError=="function"?reportError:function(b){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var D=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof b=="object"&&b!==null&&typeof b.message=="string"?String(b.message):String(b),error:b});if(!window.dispatchEvent(D))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",b);return}console.error(b)},Se={map:B,forEach:function(b,D,H){B(b,function(){D.apply(this,arguments)},H)},count:function(b){var D=0;return B(b,function(){D++}),D},toArray:function(b){return B(b,function(D){return D})||[]},only:function(b){if(!$e(b))throw Error("React.Children.only expected to receive a single React element child.");return b}};return W.Activity=E,W.Children=Se,W.Component=Q,W.Fragment=d,W.Profiler=h,W.PureComponent=q,W.StrictMode=u,W.Suspense=y,W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=$,W.__COMPILER_RUNTIME={__proto__:null,c:function(b){return $.H.useMemoCache(b)}},W.cache=function(b){return function(){return b.apply(null,arguments)}},W.cacheSignal=function(){return null},W.cloneElement=function(b,D,H){if(b==null)throw Error("The argument must be a React element, but you passed "+b+".");var Y=Z({},b.props),P=b.key;if(D!=null)for(ie in D.key!==void 0&&(P=""+D.key),D)!He.call(D,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&D.ref===void 0||(Y[ie]=D[ie]);var ie=arguments.length-2;if(ie===1)Y.children=H;else if(1<ie){for(var fe=Array(ie),We=0;We<ie;We++)fe[We]=arguments[We+2];Y.children=fe}return ke(b.type,P,Y)},W.createContext=function(b){return b={$$typeof:g,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null},b.Provider=b,b.Consumer={$$typeof:f,_context:b},b},W.createElement=function(b,D,H){var Y,P={},ie=null;if(D!=null)for(Y in D.key!==void 0&&(ie=""+D.key),D)He.call(D,Y)&&Y!=="key"&&Y!=="__self"&&Y!=="__source"&&(P[Y]=D[Y]);var fe=arguments.length-2;if(fe===1)P.children=H;else if(1<fe){for(var We=Array(fe),we=0;we<fe;we++)We[we]=arguments[we+2];P.children=We}if(b&&b.defaultProps)for(Y in fe=b.defaultProps,fe)P[Y]===void 0&&(P[Y]=fe[Y]);return ke(b,ie,P)},W.createRef=function(){return{current:null}},W.forwardRef=function(b){return{$$typeof:M,render:b}},W.isValidElement=$e,W.lazy=function(b){return{$$typeof:_,_payload:{_status:-1,_result:b},_init:F}},W.memo=function(b,D){return{$$typeof:v,type:b,compare:D===void 0?null:D}},W.startTransition=function(b){var D=$.T,H={};$.T=H;try{var Y=b(),P=$.S;P!==null&&P(H,Y),typeof Y=="object"&&Y!==null&&typeof Y.then=="function"&&Y.then(Te,he)}catch(ie){he(ie)}finally{D!==null&&H.types!==null&&(D.types=H.types),$.T=D}},W.unstable_useCacheRefresh=function(){return $.H.useCacheRefresh()},W.use=function(b){return $.H.use(b)},W.useActionState=function(b,D,H){return $.H.useActionState(b,D,H)},W.useCallback=function(b,D){return $.H.useCallback(b,D)},W.useContext=function(b){return $.H.useContext(b)},W.useDebugValue=function(){},W.useDeferredValue=function(b,D){return $.H.useDeferredValue(b,D)},W.useEffect=function(b,D){return $.H.useEffect(b,D)},W.useEffectEvent=function(b){return $.H.useEffectEvent(b)},W.useId=function(){return $.H.useId()},W.useImperativeHandle=function(b,D,H){return $.H.useImperativeHandle(b,D,H)},W.useInsertionEffect=function(b,D){return $.H.useInsertionEffect(b,D)},W.useLayoutEffect=function(b,D){return $.H.useLayoutEffect(b,D)},W.useMemo=function(b,D){return $.H.useMemo(b,D)},W.useOptimistic=function(b,D){return $.H.useOptimistic(b,D)},W.useReducer=function(b,D,H){return $.H.useReducer(b,D,H)},W.useRef=function(b){return $.H.useRef(b)},W.useState=function(b){return $.H.useState(b)},W.useSyncExternalStore=function(b,D,H){return $.H.useSyncExternalStore(b,D,H)},W.useTransition=function(){return $.H.useTransition()},W.version="19.2.1",W}var nf;function Yo(){return nf||(nf=1,Lo.exports=pv()),Lo.exports}var A=Yo();const vv=yf(A);var Do={exports:{}},Ri={},Ro={exports:{}},Uo={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tf;function hv(){return tf||(tf=1,(function(r){function m(w,B){var F=w.length;w.push(B);e:for(;0<F;){var he=F-1>>>1,Se=w[he];if(0<h(Se,B))w[he]=B,w[F]=Se,F=he;else break e}}function d(w){return w.length===0?null:w[0]}function u(w){if(w.length===0)return null;var B=w[0],F=w.pop();if(F!==B){w[0]=F;e:for(var he=0,Se=w.length,b=Se>>>1;he<b;){var D=2*(he+1)-1,H=w[D],Y=D+1,P=w[Y];if(0>h(H,F))Y<Se&&0>h(P,H)?(w[he]=P,w[Y]=F,he=Y):(w[he]=H,w[D]=F,he=D);else if(Y<Se&&0>h(P,F))w[he]=P,w[Y]=F,he=Y;else break e}}return B}function h(w,B){var F=w.sortIndex-B.sortIndex;return F!==0?F:w.id-B.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;r.unstable_now=function(){return f.now()}}else{var g=Date,M=g.now();r.unstable_now=function(){return g.now()-M}}var y=[],v=[],_=1,E=null,U=3,R=!1,k=!1,Z=!1,I=!1,Q=typeof setTimeout=="function"?setTimeout:null,ne=typeof clearTimeout=="function"?clearTimeout:null,q=typeof setImmediate<"u"?setImmediate:null;function J(w){for(var B=d(v);B!==null;){if(B.callback===null)u(v);else if(B.startTime<=w)u(v),B.sortIndex=B.expirationTime,m(y,B);else break;B=d(v)}}function je(w){if(Z=!1,J(w),!k)if(d(y)!==null)k=!0,Te||(Te=!0,Ye());else{var B=d(v);B!==null&&_n(je,B.startTime-w)}}var Te=!1,$=-1,He=5,ke=-1;function Je(){return I?!0:!(r.unstable_now()-ke<He)}function $e(){if(I=!1,Te){var w=r.unstable_now();ke=w;var B=!0;try{e:{k=!1,Z&&(Z=!1,ne($),$=-1),R=!0;var F=U;try{n:{for(J(w),E=d(y);E!==null&&!(E.expirationTime>w&&Je());){var he=E.callback;if(typeof he=="function"){E.callback=null,U=E.priorityLevel;var Se=he(E.expirationTime<=w);if(w=r.unstable_now(),typeof Se=="function"){E.callback=Se,J(w),B=!0;break n}E===d(y)&&u(y),J(w)}else u(y);E=d(y)}if(E!==null)B=!0;else{var b=d(v);b!==null&&_n(je,b.startTime-w),B=!1}}break e}finally{E=null,U=F,R=!1}B=void 0}}finally{B?Ye():Te=!1}}}var Ye;if(typeof q=="function")Ye=function(){q($e)};else if(typeof MessageChannel<"u"){var Dt=new MessageChannel,Bn=Dt.port2;Dt.port1.onmessage=$e,Ye=function(){Bn.postMessage(null)}}else Ye=function(){Q($e,0)};function _n(w,B){$=Q(function(){w(r.unstable_now())},B)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(w){w.callback=null},r.unstable_forceFrameRate=function(w){0>w||125<w?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):He=0<w?Math.floor(1e3/w):5},r.unstable_getCurrentPriorityLevel=function(){return U},r.unstable_next=function(w){switch(U){case 1:case 2:case 3:var B=3;break;default:B=U}var F=U;U=B;try{return w()}finally{U=F}},r.unstable_requestPaint=function(){I=!0},r.unstable_runWithPriority=function(w,B){switch(w){case 1:case 2:case 3:case 4:case 5:break;default:w=3}var F=U;U=w;try{return B()}finally{U=F}},r.unstable_scheduleCallback=function(w,B,F){var he=r.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?he+F:he):F=he,w){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=F+Se,w={id:_++,callback:B,priorityLevel:w,startTime:F,expirationTime:Se,sortIndex:-1},F>he?(w.sortIndex=F,m(v,w),d(y)===null&&w===d(v)&&(Z?(ne($),$=-1):Z=!0,_n(je,F-he))):(w.sortIndex=Se,m(y,w),k||R||(k=!0,Te||(Te=!0,Ye()))),w},r.unstable_shouldYield=Je,r.unstable_wrapCallback=function(w){var B=U;return function(){var F=U;U=B;try{return w.apply(this,arguments)}finally{U=F}}}})(Uo)),Uo}var af;function gv(){return af||(af=1,Ro.exports=hv()),Ro.exports}var qo={exports:{}},Fe={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lf;function xv(){if(lf)return Fe;lf=1;var r=Yo();function m(y){var v="https://react.dev/errors/"+y;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)v+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+y+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var u={d:{f:d,r:function(){throw Error(m(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},h=Symbol.for("react.portal");function f(y,v,_){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:h,key:E==null?null:""+E,children:y,containerInfo:v,implementation:_}}var g=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function M(y,v){if(y==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return Fe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,Fe.createPortal=function(y,v){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(m(299));return f(y,v,null,_)},Fe.flushSync=function(y){var v=g.T,_=u.p;try{if(g.T=null,u.p=2,y)return y()}finally{g.T=v,u.p=_,u.d.f()}},Fe.preconnect=function(y,v){typeof y=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,u.d.C(y,v))},Fe.prefetchDNS=function(y){typeof y=="string"&&u.d.D(y)},Fe.preinit=function(y,v){if(typeof y=="string"&&v&&typeof v.as=="string"){var _=v.as,E=M(_,v.crossOrigin),U=typeof v.integrity=="string"?v.integrity:void 0,R=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;_==="style"?u.d.S(y,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:E,integrity:U,fetchPriority:R}):_==="script"&&u.d.X(y,{crossOrigin:E,integrity:U,fetchPriority:R,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},Fe.preinitModule=function(y,v){if(typeof y=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var _=M(v.as,v.crossOrigin);u.d.M(y,{crossOrigin:_,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&u.d.M(y)},Fe.preload=function(y,v){if(typeof y=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var _=v.as,E=M(_,v.crossOrigin);u.d.L(y,_,{crossOrigin:E,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},Fe.preloadModule=function(y,v){if(typeof y=="string")if(v){var _=M(v.as,v.crossOrigin);u.d.m(y,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:_,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else u.d.m(y)},Fe.requestFormReset=function(y){u.d.r(y)},Fe.unstable_batchedUpdates=function(y,v){return y(v)},Fe.useFormState=function(y,v,_){return g.H.useFormState(y,v,_)},Fe.useFormStatus=function(){return g.H.useHostTransitionStatus()},Fe.version="19.2.1",Fe}var sf;function bv(){if(sf)return qo.exports;sf=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(m){console.error(m)}}return r(),qo.exports=xv(),qo.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rf;function yv(){if(rf)return Ri;rf=1;var r=gv(),m=Yo(),d=bv();function u(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function g(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function M(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function y(e){if(f(e)!==e)throw Error(u(188))}function v(e){var n=e.alternate;if(!n){if(n=f(e),n===null)throw Error(u(188));return n!==e?null:e}for(var t=e,a=n;;){var i=t.return;if(i===null)break;var l=i.alternate;if(l===null){if(a=i.return,a!==null){t=a;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===t)return y(i),e;if(l===a)return y(i),n;l=l.sibling}throw Error(u(188))}if(t.return!==a.return)t=i,a=l;else{for(var s=!1,c=i.child;c;){if(c===t){s=!0,t=i,a=l;break}if(c===a){s=!0,a=i,t=l;break}c=c.sibling}if(!s){for(c=l.child;c;){if(c===t){s=!0,t=l,a=i;break}if(c===a){s=!0,a=l,t=i;break}c=c.sibling}if(!s)throw Error(u(189))}}if(t.alternate!==a)throw Error(u(190))}if(t.tag!==3)throw Error(u(188));return t.stateNode.current===t?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var E=Object.assign,U=Symbol.for("react.element"),R=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),Z=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),Q=Symbol.for("react.profiler"),ne=Symbol.for("react.consumer"),q=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),je=Symbol.for("react.suspense"),Te=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),He=Symbol.for("react.lazy"),ke=Symbol.for("react.activity"),Je=Symbol.for("react.memo_cache_sentinel"),$e=Symbol.iterator;function Ye(e){return e===null||typeof e!="object"?null:(e=$e&&e[$e]||e["@@iterator"],typeof e=="function"?e:null)}var Dt=Symbol.for("react.client.reference");function Bn(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Dt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Z:return"Fragment";case Q:return"Profiler";case I:return"StrictMode";case je:return"Suspense";case Te:return"SuspenseList";case ke:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case k:return"Portal";case q:return e.displayName||"Context";case ne:return(e._context.displayName||"Context")+".Consumer";case J:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $:return n=e.displayName||null,n!==null?n:Bn(e.type)||"Memo";case He:n=e._payload,e=e._init;try{return Bn(e(n))}catch{}}return null}var _n=Array.isArray,w=m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},he=[],Se=-1;function b(e){return{current:e}}function D(e){0>Se||(e.current=he[Se],he[Se]=null,Se--)}function H(e,n){Se++,he[Se]=e.current,e.current=n}var Y=b(null),P=b(null),ie=b(null),fe=b(null);function We(e,n){switch(H(ie,n),H(P,e),H(Y,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Sm(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Sm(n),e=Cm(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}D(Y),H(Y,e)}function we(){D(Y),D(P),D(ie)}function Ga(e){e.memoizedState!==null&&H(fe,e);var n=Y.current,t=Cm(n,e.type);n!==t&&(H(P,e),H(Y,t))}function ki(e){P.current===e&&(D(Y),D(P)),fe.current===e&&(D(fe),Ti._currentValue=F)}var fs,$o;function Rt(e){if(fs===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);fs=n&&n[1]||"",$o=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+fs+e+$o}var ps=!1;function vs(e,n){if(!e||ps)return"";ps=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(n){var L=function(){throw Error()};if(Object.defineProperty(L.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(L,[])}catch(O){var N=O}Reflect.construct(e,[],L)}else{try{L.call()}catch(O){N=O}e.call(L.prototype)}}else{try{throw Error()}catch(O){N=O}(L=e())&&typeof L.catch=="function"&&L.catch(function(){})}}catch(O){if(O&&N&&typeof O.stack=="string")return[O.stack,N.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=a.DetermineComponentFrameRoot(),s=l[0],c=l[1];if(s&&c){var p=s.split(`
`),j=c.split(`
`);for(i=a=0;a<p.length&&!p[a].includes("DetermineComponentFrameRoot");)a++;for(;i<j.length&&!j[i].includes("DetermineComponentFrameRoot");)i++;if(a===p.length||i===j.length)for(a=p.length-1,i=j.length-1;1<=a&&0<=i&&p[a]!==j[i];)i--;for(;1<=a&&0<=i;a--,i--)if(p[a]!==j[i]){if(a!==1||i!==1)do if(a--,i--,0>i||p[a]!==j[i]){var T=`
`+p[a].replace(" at new "," at ");return e.displayName&&T.includes("<anonymous>")&&(T=T.replace("<anonymous>",e.displayName)),T}while(1<=a&&0<=i);break}}}finally{ps=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?Rt(t):""}function Yf(e,n){switch(e.tag){case 26:case 27:case 5:return Rt(e.type);case 16:return Rt("Lazy");case 13:return e.child!==n&&n!==null?Rt("Suspense Fallback"):Rt("Suspense");case 19:return Rt("SuspenseList");case 0:case 15:return vs(e.type,!1);case 11:return vs(e.type.render,!1);case 1:return vs(e.type,!0);case 31:return Rt("Activity");default:return""}}function Wo(e){try{var n="",t=null;do n+=Yf(e,t),t=e,e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var hs=Object.prototype.hasOwnProperty,gs=r.unstable_scheduleCallback,xs=r.unstable_cancelCallback,Qf=r.unstable_shouldYield,Vf=r.unstable_requestPaint,on=r.unstable_now,Xf=r.unstable_getCurrentPriorityLevel,Po=r.unstable_ImmediatePriority,eu=r.unstable_UserBlockingPriority,Yi=r.unstable_NormalPriority,Zf=r.unstable_LowPriority,nu=r.unstable_IdlePriority,Kf=r.log,Jf=r.unstable_setDisableYieldValue,ka=null,un=null;function rt(e){if(typeof Kf=="function"&&Jf(e),un&&typeof un.setStrictMode=="function")try{un.setStrictMode(ka,e)}catch{}}var cn=Math.clz32?Math.clz32:Wf,Ff=Math.log,$f=Math.LN2;function Wf(e){return e>>>=0,e===0?32:31-(Ff(e)/$f|0)|0}var Qi=256,Vi=262144,Xi=4194304;function Ut(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Zi(e,n,t){var a=e.pendingLanes;if(a===0)return 0;var i=0,l=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var c=a&134217727;return c!==0?(a=c&~l,a!==0?i=Ut(a):(s&=c,s!==0?i=Ut(s):t||(t=c&~e,t!==0&&(i=Ut(t))))):(c=a&~l,c!==0?i=Ut(c):s!==0?i=Ut(s):t||(t=a&~e,t!==0&&(i=Ut(t)))),i===0?0:n!==0&&n!==i&&(n&l)===0&&(l=i&-i,t=n&-n,l>=t||l===32&&(t&4194048)!==0)?n:i}function Ya(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Pf(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tu(){var e=Xi;return Xi<<=1,(Xi&62914560)===0&&(Xi=4194304),e}function bs(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Qa(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ep(e,n,t,a,i,l){var s=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var c=e.entanglements,p=e.expirationTimes,j=e.hiddenUpdates;for(t=s&~t;0<t;){var T=31-cn(t),L=1<<T;c[T]=0,p[T]=-1;var N=j[T];if(N!==null)for(j[T]=null,T=0;T<N.length;T++){var O=N[T];O!==null&&(O.lane&=-536870913)}t&=~L}a!==0&&au(e,a,0),l!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=l&~(s&~n))}function au(e,n,t){e.pendingLanes|=n,e.suspendedLanes&=~n;var a=31-cn(n);e.entangledLanes|=n,e.entanglements[a]=e.entanglements[a]|1073741824|t&261930}function iu(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var a=31-cn(t),i=1<<a;i&n|e[a]&n&&(e[a]|=n),t&=~i}}function lu(e,n){var t=n&-n;return t=(t&42)!==0?1:ys(t),(t&(e.suspendedLanes|n))!==0?0:t}function ys(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ss(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function su(){var e=B.p;return e!==0?e:(e=window.event,e===void 0?32:Vm(e.type))}function ru(e,n){var t=B.p;try{return B.p=e,n()}finally{B.p=t}}var ot=Math.random().toString(36).slice(2),Qe="__reactFiber$"+ot,en="__reactProps$"+ot,na="__reactContainer$"+ot,Cs="__reactEvents$"+ot,np="__reactListeners$"+ot,tp="__reactHandles$"+ot,ou="__reactResources$"+ot,Va="__reactMarker$"+ot;function js(e){delete e[Qe],delete e[en],delete e[Cs],delete e[np],delete e[tp]}function ta(e){var n=e[Qe];if(n)return n;for(var t=e.parentNode;t;){if(n=t[na]||t[Qe]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=_m(e);e!==null;){if(t=e[Qe])return t;e=_m(e)}return n}e=t,t=e.parentNode}return null}function aa(e){if(e=e[Qe]||e[na]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Xa(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(u(33))}function ia(e){var n=e[ou];return n||(n=e[ou]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ie(e){e[Va]=!0}var uu=new Set,cu={};function qt(e,n){la(e,n),la(e+"Capture",n)}function la(e,n){for(cu[e]=n,e=0;e<n.length;e++)uu.add(n[e])}var ap=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),du={},mu={};function ip(e){return hs.call(mu,e)?!0:hs.call(du,e)?!1:ap.test(e)?mu[e]=!0:(du[e]=!0,!1)}function Ki(e,n,t){if(ip(n))if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var a=n.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+t)}}function Ji(e,n,t){if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+t)}}function Hn(e,n,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(n,t,""+a)}}function xn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fu(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function lp(e,n,t){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,l=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(s){t=""+s,l.call(this,s)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return t},setValue:function(s){t=""+s},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ns(e){if(!e._valueTracker){var n=fu(e)?"checked":"value";e._valueTracker=lp(e,n,""+e[n])}}function pu(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),a="";return e&&(a=fu(e)?e.checked?"true":"false":e.value),e=a,e!==t?(n.setValue(e),!0):!1}function Fi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var sp=/[\n"\\]/g;function bn(e){return e.replace(sp,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Es(e,n,t,a,i,l,s,c){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),n!=null?s==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+xn(n)):e.value!==""+xn(n)&&(e.value=""+xn(n)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),n!=null?Ms(e,s,xn(n)):t!=null?Ms(e,s,xn(t)):a!=null&&e.removeAttribute("value"),i==null&&l!=null&&(e.defaultChecked=!!l),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+xn(c):e.removeAttribute("name")}function vu(e,n,t,a,i,l,s,c){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.type=l),n!=null||t!=null){if(!(l!=="submit"&&l!=="reset"||n!=null)){Ns(e);return}t=t!=null?""+xn(t):"",n=n!=null?""+xn(n):t,c||n===e.value||(e.value=n),e.defaultValue=n}a=a??i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=c?e.checked:!!a,e.defaultChecked=!!a,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s),Ns(e)}function Ms(e,n,t){n==="number"&&Fi(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function sa(e,n,t,a){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&a&&(e[t].defaultSelected=!0)}else{for(t=""+xn(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function hu(e,n,t){if(n!=null&&(n=""+xn(n),n!==e.value&&(e.value=n),t==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=t!=null?""+xn(t):""}function gu(e,n,t,a){if(n==null){if(a!=null){if(t!=null)throw Error(u(92));if(_n(a)){if(1<a.length)throw Error(u(93));a=a[0]}t=a}t==null&&(t=""),n=t}t=xn(n),e.defaultValue=t,a=e.textContent,a===t&&a!==""&&a!==null&&(e.value=a),Ns(e)}function ra(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var rp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function xu(e,n,t){var a=n.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?a?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":a?e.setProperty(n,t):typeof t!="number"||t===0||rp.has(n)?n==="float"?e.cssFloat=t:e[n]=(""+t).trim():e[n]=t+"px"}function bu(e,n,t){if(n!=null&&typeof n!="object")throw Error(u(62));if(e=e.style,t!=null){for(var a in t)!t.hasOwnProperty(a)||n!=null&&n.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var i in n)a=n[i],n.hasOwnProperty(i)&&t[i]!==a&&xu(e,i,a)}else for(var l in n)n.hasOwnProperty(l)&&xu(e,l,n[l])}function Os(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var op=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),up=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $i(e){return up.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function In(){}var As=null;function _s(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var oa=null,ua=null;function yu(e){var n=aa(e);if(n&&(e=n.stateNode)){var t=e[en]||null;e:switch(e=n.stateNode,n.type){case"input":if(Es(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+bn(""+n)+'"][type="radio"]'),n=0;n<t.length;n++){var a=t[n];if(a!==e&&a.form===e.form){var i=a[en]||null;if(!i)throw Error(u(90));Es(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(n=0;n<t.length;n++)a=t[n],a.form===e.form&&pu(a)}break e;case"textarea":hu(e,t.value,t.defaultValue);break e;case"select":n=t.value,n!=null&&sa(e,!!t.multiple,n,!1)}}}var Ts=!1;function Su(e,n,t){if(Ts)return e(n,t);Ts=!0;try{var a=e(n);return a}finally{if(Ts=!1,(oa!==null||ua!==null)&&(Bl(),oa&&(n=oa,e=ua,ua=oa=null,yu(n),e)))for(n=0;n<e.length;n++)yu(e[n])}}function Za(e,n){var t=e.stateNode;if(t===null)return null;var a=t[en]||null;if(a===null)return null;t=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(u(231,n,typeof t));return t}var Gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ws=!1;if(Gn)try{var Ka={};Object.defineProperty(Ka,"passive",{get:function(){ws=!0}}),window.addEventListener("test",Ka,Ka),window.removeEventListener("test",Ka,Ka)}catch{ws=!1}var ut=null,zs=null,Wi=null;function Cu(){if(Wi)return Wi;var e,n=zs,t=n.length,a,i="value"in ut?ut.value:ut.textContent,l=i.length;for(e=0;e<t&&n[e]===i[e];e++);var s=t-e;for(a=1;a<=s&&n[t-a]===i[l-a];a++);return Wi=i.slice(e,1<a?1-a:void 0)}function Pi(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function el(){return!0}function ju(){return!1}function nn(e){function n(t,a,i,l,s){this._reactName=t,this._targetInst=i,this.type=a,this.nativeEvent=l,this.target=s,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(t=e[c],this[c]=t?t(l):l[c]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?el:ju,this.isPropagationStopped=ju,this}return E(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=el)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=el)},persist:function(){},isPersistent:el}),n}var Bt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nl=nn(Bt),Ja=E({},Bt,{view:0,detail:0}),cp=nn(Ja),Ls,Ds,Fa,tl=E({},Ja,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Us,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fa&&(Fa&&e.type==="mousemove"?(Ls=e.screenX-Fa.screenX,Ds=e.screenY-Fa.screenY):Ds=Ls=0,Fa=e),Ls)},movementY:function(e){return"movementY"in e?e.movementY:Ds}}),Nu=nn(tl),dp=E({},tl,{dataTransfer:0}),mp=nn(dp),fp=E({},Ja,{relatedTarget:0}),Rs=nn(fp),pp=E({},Bt,{animationName:0,elapsedTime:0,pseudoElement:0}),vp=nn(pp),hp=E({},Bt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gp=nn(hp),xp=E({},Bt,{data:0}),Eu=nn(xp),bp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cp(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Sp[e])?!!n[e]:!1}function Us(){return Cp}var jp=E({},Ja,{key:function(e){if(e.key){var n=bp[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Pi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Us,charCode:function(e){return e.type==="keypress"?Pi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Np=nn(jp),Ep=E({},tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mu=nn(Ep),Mp=E({},Ja,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Us}),Op=nn(Mp),Ap=E({},Bt,{propertyName:0,elapsedTime:0,pseudoElement:0}),_p=nn(Ap),Tp=E({},tl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wp=nn(Tp),zp=E({},Bt,{newState:0,oldState:0}),Lp=nn(zp),Dp=[9,13,27,32],qs=Gn&&"CompositionEvent"in window,$a=null;Gn&&"documentMode"in document&&($a=document.documentMode);var Rp=Gn&&"TextEvent"in window&&!$a,Ou=Gn&&(!qs||$a&&8<$a&&11>=$a),Au=" ",_u=!1;function Tu(e,n){switch(e){case"keyup":return Dp.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ca=!1;function Up(e,n){switch(e){case"compositionend":return wu(n);case"keypress":return n.which!==32?null:(_u=!0,Au);case"textInput":return e=n.data,e===Au&&_u?null:e;default:return null}}function qp(e,n){if(ca)return e==="compositionend"||!qs&&Tu(e,n)?(e=Cu(),Wi=zs=ut=null,ca=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ou&&n.locale!=="ko"?null:n.data;default:return null}}var Bp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Bp[e.type]:n==="textarea"}function Lu(e,n,t,a){oa?ua?ua.push(a):ua=[a]:oa=a,n=Vl(n,"onChange"),0<n.length&&(t=new nl("onChange","change",null,t,a),e.push({event:t,listeners:n}))}var Wa=null,Pa=null;function Hp(e){vm(e,0)}function al(e){var n=Xa(e);if(pu(n))return e}function Du(e,n){if(e==="change")return n}var Ru=!1;if(Gn){var Bs;if(Gn){var Hs="oninput"in document;if(!Hs){var Uu=document.createElement("div");Uu.setAttribute("oninput","return;"),Hs=typeof Uu.oninput=="function"}Bs=Hs}else Bs=!1;Ru=Bs&&(!document.documentMode||9<document.documentMode)}function qu(){Wa&&(Wa.detachEvent("onpropertychange",Bu),Pa=Wa=null)}function Bu(e){if(e.propertyName==="value"&&al(Pa)){var n=[];Lu(n,Pa,e,_s(e)),Su(Hp,n)}}function Ip(e,n,t){e==="focusin"?(qu(),Wa=n,Pa=t,Wa.attachEvent("onpropertychange",Bu)):e==="focusout"&&qu()}function Gp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return al(Pa)}function kp(e,n){if(e==="click")return al(n)}function Yp(e,n){if(e==="input"||e==="change")return al(n)}function Qp(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var dn=typeof Object.is=="function"?Object.is:Qp;function ei(e,n){if(dn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),a=Object.keys(n);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var i=t[a];if(!hs.call(n,i)||!dn(e[i],n[i]))return!1}return!0}function Hu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Iu(e,n){var t=Hu(e);e=0;for(var a;t;){if(t.nodeType===3){if(a=e+t.textContent.length,e<=n&&a>=n)return{node:t,offset:n-e};e=a}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Hu(t)}}function Gu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Gu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function ku(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Fi(e.document);n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Fi(e.document)}return n}function Is(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Vp=Gn&&"documentMode"in document&&11>=document.documentMode,da=null,Gs=null,ni=null,ks=!1;function Yu(e,n,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ks||da==null||da!==Fi(a)||(a=da,"selectionStart"in a&&Is(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),ni&&ei(ni,a)||(ni=a,a=Vl(Gs,"onSelect"),0<a.length&&(n=new nl("onSelect","select",null,n,t),e.push({event:n,listeners:a}),n.target=da)))}function Ht(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var ma={animationend:Ht("Animation","AnimationEnd"),animationiteration:Ht("Animation","AnimationIteration"),animationstart:Ht("Animation","AnimationStart"),transitionrun:Ht("Transition","TransitionRun"),transitionstart:Ht("Transition","TransitionStart"),transitioncancel:Ht("Transition","TransitionCancel"),transitionend:Ht("Transition","TransitionEnd")},Ys={},Qu={};Gn&&(Qu=document.createElement("div").style,"AnimationEvent"in window||(delete ma.animationend.animation,delete ma.animationiteration.animation,delete ma.animationstart.animation),"TransitionEvent"in window||delete ma.transitionend.transition);function It(e){if(Ys[e])return Ys[e];if(!ma[e])return e;var n=ma[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Qu)return Ys[e]=n[t];return e}var Vu=It("animationend"),Xu=It("animationiteration"),Zu=It("animationstart"),Xp=It("transitionrun"),Zp=It("transitionstart"),Kp=It("transitioncancel"),Ku=It("transitionend"),Ju=new Map,Qs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Qs.push("scrollEnd");function Tn(e,n){Ju.set(e,n),qt(n,[e])}var il=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},yn=[],fa=0,Vs=0;function ll(){for(var e=fa,n=Vs=fa=0;n<e;){var t=yn[n];yn[n++]=null;var a=yn[n];yn[n++]=null;var i=yn[n];yn[n++]=null;var l=yn[n];if(yn[n++]=null,a!==null&&i!==null){var s=a.pending;s===null?i.next=i:(i.next=s.next,s.next=i),a.pending=i}l!==0&&Fu(t,i,l)}}function sl(e,n,t,a){yn[fa++]=e,yn[fa++]=n,yn[fa++]=t,yn[fa++]=a,Vs|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Xs(e,n,t,a){return sl(e,n,t,a),rl(e)}function Gt(e,n){return sl(e,null,null,n),rl(e)}function Fu(e,n,t){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t);for(var i=!1,l=e.return;l!==null;)l.childLanes|=t,a=l.alternate,a!==null&&(a.childLanes|=t),l.tag===22&&(e=l.stateNode,e===null||e._visibility&1||(i=!0)),e=l,l=l.return;return e.tag===3?(l=e.stateNode,i&&n!==null&&(i=31-cn(t),e=l.hiddenUpdates,a=e[i],a===null?e[i]=[n]:a.push(n),n.lane=t|536870912),l):null}function rl(e){if(50<ji)throw ji=0,no=null,Error(u(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var pa={};function Jp(e,n,t,a){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mn(e,n,t,a){return new Jp(e,n,t,a)}function Zs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function kn(e,n){var t=e.alternate;return t===null?(t=mn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function $u(e,n){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ol(e,n,t,a,i,l){var s=0;if(a=e,typeof e=="function")Zs(e)&&(s=1);else if(typeof e=="string")s=ev(e,t,Y.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ke:return e=mn(31,t,n,i),e.elementType=ke,e.lanes=l,e;case Z:return kt(t.children,i,l,n);case I:s=8,i|=24;break;case Q:return e=mn(12,t,n,i|2),e.elementType=Q,e.lanes=l,e;case je:return e=mn(13,t,n,i),e.elementType=je,e.lanes=l,e;case Te:return e=mn(19,t,n,i),e.elementType=Te,e.lanes=l,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case q:s=10;break e;case ne:s=9;break e;case J:s=11;break e;case $:s=14;break e;case He:s=16,a=null;break e}s=29,t=Error(u(130,e===null?"null":typeof e,"")),a=null}return n=mn(s,t,n,i),n.elementType=e,n.type=a,n.lanes=l,n}function kt(e,n,t,a){return e=mn(7,e,a,n),e.lanes=t,e}function Ks(e,n,t){return e=mn(6,e,null,n),e.lanes=t,e}function Wu(e){var n=mn(18,null,null,0);return n.stateNode=e,n}function Js(e,n,t){return n=mn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Pu=new WeakMap;function Sn(e,n){if(typeof e=="object"&&e!==null){var t=Pu.get(e);return t!==void 0?t:(n={value:e,source:n,stack:Wo(n)},Pu.set(e,n),n)}return{value:e,source:n,stack:Wo(n)}}var va=[],ha=0,ul=null,ti=0,Cn=[],jn=0,ct=null,Dn=1,Rn="";function Yn(e,n){va[ha++]=ti,va[ha++]=ul,ul=e,ti=n}function ec(e,n,t){Cn[jn++]=Dn,Cn[jn++]=Rn,Cn[jn++]=ct,ct=e;var a=Dn;e=Rn;var i=32-cn(a)-1;a&=~(1<<i),t+=1;var l=32-cn(n)+i;if(30<l){var s=i-i%5;l=(a&(1<<s)-1).toString(32),a>>=s,i-=s,Dn=1<<32-cn(n)+i|t<<i|a,Rn=l+e}else Dn=1<<l|t<<i|a,Rn=e}function Fs(e){e.return!==null&&(Yn(e,1),ec(e,1,0))}function $s(e){for(;e===ul;)ul=va[--ha],va[ha]=null,ti=va[--ha],va[ha]=null;for(;e===ct;)ct=Cn[--jn],Cn[jn]=null,Rn=Cn[--jn],Cn[jn]=null,Dn=Cn[--jn],Cn[jn]=null}function nc(e,n){Cn[jn++]=Dn,Cn[jn++]=Rn,Cn[jn++]=ct,Dn=n.id,Rn=n.overflow,ct=e}var Ve=null,Ne=null,ue=!1,dt=null,Nn=!1,Ws=Error(u(519));function mt(e){var n=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ai(Sn(n,e)),Ws}function tc(e){var n=e.stateNode,t=e.type,a=e.memoizedProps;switch(n[Qe]=e,n[en]=a,t){case"dialog":se("cancel",n),se("close",n);break;case"iframe":case"object":case"embed":se("load",n);break;case"video":case"audio":for(t=0;t<Ei.length;t++)se(Ei[t],n);break;case"source":se("error",n);break;case"img":case"image":case"link":se("error",n),se("load",n);break;case"details":se("toggle",n);break;case"input":se("invalid",n),vu(n,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":se("invalid",n);break;case"textarea":se("invalid",n),gu(n,a.value,a.defaultValue,a.children)}t=a.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||n.textContent===""+t||a.suppressHydrationWarning===!0||bm(n.textContent,t)?(a.popover!=null&&(se("beforetoggle",n),se("toggle",n)),a.onScroll!=null&&se("scroll",n),a.onScrollEnd!=null&&se("scrollend",n),a.onClick!=null&&(n.onclick=In),n=!0):n=!1,n||mt(e,!0)}function ac(e){for(Ve=e.return;Ve;)switch(Ve.tag){case 5:case 31:case 13:Nn=!1;return;case 27:case 3:Nn=!0;return;default:Ve=Ve.return}}function ga(e){if(e!==Ve)return!1;if(!ue)return ac(e),ue=!0,!1;var n=e.tag,t;if((t=n!==3&&n!==27)&&((t=n===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||go(e.type,e.memoizedProps)),t=!t),t&&Ne&&mt(e),ac(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Ne=Am(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Ne=Am(e)}else n===27?(n=Ne,Mt(e.type)?(e=Co,Co=null,Ne=e):Ne=n):Ne=Ve?Mn(e.stateNode.nextSibling):null;return!0}function Yt(){Ne=Ve=null,ue=!1}function Ps(){var e=dt;return e!==null&&(sn===null?sn=e:sn.push.apply(sn,e),dt=null),e}function ai(e){dt===null?dt=[e]:dt.push(e)}var er=b(null),Qt=null,Qn=null;function ft(e,n,t){H(er,n._currentValue),n._currentValue=t}function Vn(e){e._currentValue=er.current,D(er)}function nr(e,n,t){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===t)break;e=e.return}}function tr(e,n,t,a){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){var s=i.child;l=l.firstContext;e:for(;l!==null;){var c=l;l=i;for(var p=0;p<n.length;p++)if(c.context===n[p]){l.lanes|=t,c=l.alternate,c!==null&&(c.lanes|=t),nr(l.return,t,e),a||(s=null);break e}l=c.next}}else if(i.tag===18){if(s=i.return,s===null)throw Error(u(341));s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),nr(s,t,e),s=null}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===e){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}}function xa(e,n,t,a){e=null;for(var i=n,l=!1;i!==null;){if(!l){if((i.flags&524288)!==0)l=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var s=i.alternate;if(s===null)throw Error(u(387));if(s=s.memoizedProps,s!==null){var c=i.type;dn(i.pendingProps.value,s.value)||(e!==null?e.push(c):e=[c])}}else if(i===fe.current){if(s=i.alternate,s===null)throw Error(u(387));s.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(Ti):e=[Ti])}i=i.return}e!==null&&tr(n,e,t,a),n.flags|=262144}function cl(e){for(e=e.firstContext;e!==null;){if(!dn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Vt(e){Qt=e,Qn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Xe(e){return ic(Qt,e)}function dl(e,n){return Qt===null&&Vt(e),ic(e,n)}function ic(e,n){var t=n._currentValue;if(n={context:n,memoizedValue:t,next:null},Qn===null){if(e===null)throw Error(u(308));Qn=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Qn=Qn.next=n;return t}var Fp=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(t,a){e.push(a)}};this.abort=function(){n.aborted=!0,e.forEach(function(t){return t()})}},$p=r.unstable_scheduleCallback,Wp=r.unstable_NormalPriority,De={$$typeof:q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ar(){return{controller:new Fp,data:new Map,refCount:0}}function ii(e){e.refCount--,e.refCount===0&&$p(Wp,function(){e.controller.abort()})}var li=null,ir=0,ba=0,ya=null;function Pp(e,n){if(li===null){var t=li=[];ir=0,ba=ro(),ya={status:"pending",value:void 0,then:function(a){t.push(a)}}}return ir++,n.then(lc,lc),n}function lc(){if(--ir===0&&li!==null){ya!==null&&(ya.status="fulfilled");var e=li;li=null,ba=0,ya=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function e0(e,n){var t=[],a={status:"pending",value:null,reason:null,then:function(i){t.push(i)}};return e.then(function(){a.status="fulfilled",a.value=n;for(var i=0;i<t.length;i++)(0,t[i])(n)},function(i){for(a.status="rejected",a.reason=i,i=0;i<t.length;i++)(0,t[i])(void 0)}),a}var sc=w.S;w.S=function(e,n){Yd=on(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Pp(e,n),sc!==null&&sc(e,n)};var Xt=b(null);function lr(){var e=Xt.current;return e!==null?e:Ce.pooledCache}function ml(e,n){n===null?H(Xt,Xt.current):H(Xt,n.pool)}function rc(){var e=lr();return e===null?null:{parent:De._currentValue,pool:e}}var Sa=Error(u(460)),sr=Error(u(474)),fl=Error(u(542)),pl={then:function(){}};function oc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function uc(e,n,t){switch(t=e[t],t===void 0?e.push(n):t!==n&&(n.then(In,In),n=t),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,dc(e),e;default:if(typeof n.status=="string")n.then(In,In);else{if(e=Ce,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=n,e.status="pending",e.then(function(a){if(n.status==="pending"){var i=n;i.status="fulfilled",i.value=a}},function(a){if(n.status==="pending"){var i=n;i.status="rejected",i.reason=a}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,dc(e),e}throw Kt=n,Sa}}function Zt(e){try{var n=e._init;return n(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(Kt=t,Sa):t}}var Kt=null;function cc(){if(Kt===null)throw Error(u(459));var e=Kt;return Kt=null,e}function dc(e){if(e===Sa||e===fl)throw Error(u(483))}var Ca=null,si=0;function vl(e){var n=si;return si+=1,Ca===null&&(Ca=[]),uc(Ca,e,n)}function ri(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function hl(e,n){throw n.$$typeof===U?Error(u(525)):(e=Object.prototype.toString.call(n),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function mc(e){function n(S,x){if(e){var C=S.deletions;C===null?(S.deletions=[x],S.flags|=16):C.push(x)}}function t(S,x){if(!e)return null;for(;x!==null;)n(S,x),x=x.sibling;return null}function a(S){for(var x=new Map;S!==null;)S.key!==null?x.set(S.key,S):x.set(S.index,S),S=S.sibling;return x}function i(S,x){return S=kn(S,x),S.index=0,S.sibling=null,S}function l(S,x,C){return S.index=C,e?(C=S.alternate,C!==null?(C=C.index,C<x?(S.flags|=67108866,x):C):(S.flags|=67108866,x)):(S.flags|=1048576,x)}function s(S){return e&&S.alternate===null&&(S.flags|=67108866),S}function c(S,x,C,z){return x===null||x.tag!==6?(x=Ks(C,S.mode,z),x.return=S,x):(x=i(x,C),x.return=S,x)}function p(S,x,C,z){var X=C.type;return X===Z?T(S,x,C.props.children,z,C.key):x!==null&&(x.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===He&&Zt(X)===x.type)?(x=i(x,C.props),ri(x,C),x.return=S,x):(x=ol(C.type,C.key,C.props,null,S.mode,z),ri(x,C),x.return=S,x)}function j(S,x,C,z){return x===null||x.tag!==4||x.stateNode.containerInfo!==C.containerInfo||x.stateNode.implementation!==C.implementation?(x=Js(C,S.mode,z),x.return=S,x):(x=i(x,C.children||[]),x.return=S,x)}function T(S,x,C,z,X){return x===null||x.tag!==7?(x=kt(C,S.mode,z,X),x.return=S,x):(x=i(x,C),x.return=S,x)}function L(S,x,C){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=Ks(""+x,S.mode,C),x.return=S,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case R:return C=ol(x.type,x.key,x.props,null,S.mode,C),ri(C,x),C.return=S,C;case k:return x=Js(x,S.mode,C),x.return=S,x;case He:return x=Zt(x),L(S,x,C)}if(_n(x)||Ye(x))return x=kt(x,S.mode,C,null),x.return=S,x;if(typeof x.then=="function")return L(S,vl(x),C);if(x.$$typeof===q)return L(S,dl(S,x),C);hl(S,x)}return null}function N(S,x,C,z){var X=x!==null?x.key:null;if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return X!==null?null:c(S,x,""+C,z);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case R:return C.key===X?p(S,x,C,z):null;case k:return C.key===X?j(S,x,C,z):null;case He:return C=Zt(C),N(S,x,C,z)}if(_n(C)||Ye(C))return X!==null?null:T(S,x,C,z,null);if(typeof C.then=="function")return N(S,x,vl(C),z);if(C.$$typeof===q)return N(S,x,dl(S,C),z);hl(S,C)}return null}function O(S,x,C,z,X){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return S=S.get(C)||null,c(x,S,""+z,X);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case R:return S=S.get(z.key===null?C:z.key)||null,p(x,S,z,X);case k:return S=S.get(z.key===null?C:z.key)||null,j(x,S,z,X);case He:return z=Zt(z),O(S,x,C,z,X)}if(_n(z)||Ye(z))return S=S.get(C)||null,T(x,S,z,X,null);if(typeof z.then=="function")return O(S,x,C,vl(z),X);if(z.$$typeof===q)return O(S,x,C,dl(x,z),X);hl(x,z)}return null}function G(S,x,C,z){for(var X=null,ce=null,V=x,te=x=0,oe=null;V!==null&&te<C.length;te++){V.index>te?(oe=V,V=null):oe=V.sibling;var de=N(S,V,C[te],z);if(de===null){V===null&&(V=oe);break}e&&V&&de.alternate===null&&n(S,V),x=l(de,x,te),ce===null?X=de:ce.sibling=de,ce=de,V=oe}if(te===C.length)return t(S,V),ue&&Yn(S,te),X;if(V===null){for(;te<C.length;te++)V=L(S,C[te],z),V!==null&&(x=l(V,x,te),ce===null?X=V:ce.sibling=V,ce=V);return ue&&Yn(S,te),X}for(V=a(V);te<C.length;te++)oe=O(V,S,te,C[te],z),oe!==null&&(e&&oe.alternate!==null&&V.delete(oe.key===null?te:oe.key),x=l(oe,x,te),ce===null?X=oe:ce.sibling=oe,ce=oe);return e&&V.forEach(function(wt){return n(S,wt)}),ue&&Yn(S,te),X}function K(S,x,C,z){if(C==null)throw Error(u(151));for(var X=null,ce=null,V=x,te=x=0,oe=null,de=C.next();V!==null&&!de.done;te++,de=C.next()){V.index>te?(oe=V,V=null):oe=V.sibling;var wt=N(S,V,de.value,z);if(wt===null){V===null&&(V=oe);break}e&&V&&wt.alternate===null&&n(S,V),x=l(wt,x,te),ce===null?X=wt:ce.sibling=wt,ce=wt,V=oe}if(de.done)return t(S,V),ue&&Yn(S,te),X;if(V===null){for(;!de.done;te++,de=C.next())de=L(S,de.value,z),de!==null&&(x=l(de,x,te),ce===null?X=de:ce.sibling=de,ce=de);return ue&&Yn(S,te),X}for(V=a(V);!de.done;te++,de=C.next())de=O(V,S,te,de.value,z),de!==null&&(e&&de.alternate!==null&&V.delete(de.key===null?te:de.key),x=l(de,x,te),ce===null?X=de:ce.sibling=de,ce=de);return e&&V.forEach(function(dv){return n(S,dv)}),ue&&Yn(S,te),X}function be(S,x,C,z){if(typeof C=="object"&&C!==null&&C.type===Z&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case R:e:{for(var X=C.key;x!==null;){if(x.key===X){if(X=C.type,X===Z){if(x.tag===7){t(S,x.sibling),z=i(x,C.props.children),z.return=S,S=z;break e}}else if(x.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===He&&Zt(X)===x.type){t(S,x.sibling),z=i(x,C.props),ri(z,C),z.return=S,S=z;break e}t(S,x);break}else n(S,x);x=x.sibling}C.type===Z?(z=kt(C.props.children,S.mode,z,C.key),z.return=S,S=z):(z=ol(C.type,C.key,C.props,null,S.mode,z),ri(z,C),z.return=S,S=z)}return s(S);case k:e:{for(X=C.key;x!==null;){if(x.key===X)if(x.tag===4&&x.stateNode.containerInfo===C.containerInfo&&x.stateNode.implementation===C.implementation){t(S,x.sibling),z=i(x,C.children||[]),z.return=S,S=z;break e}else{t(S,x);break}else n(S,x);x=x.sibling}z=Js(C,S.mode,z),z.return=S,S=z}return s(S);case He:return C=Zt(C),be(S,x,C,z)}if(_n(C))return G(S,x,C,z);if(Ye(C)){if(X=Ye(C),typeof X!="function")throw Error(u(150));return C=X.call(C),K(S,x,C,z)}if(typeof C.then=="function")return be(S,x,vl(C),z);if(C.$$typeof===q)return be(S,x,dl(S,C),z);hl(S,C)}return typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint"?(C=""+C,x!==null&&x.tag===6?(t(S,x.sibling),z=i(x,C),z.return=S,S=z):(t(S,x),z=Ks(C,S.mode,z),z.return=S,S=z),s(S)):t(S,x)}return function(S,x,C,z){try{si=0;var X=be(S,x,C,z);return Ca=null,X}catch(V){if(V===Sa||V===fl)throw V;var ce=mn(29,V,null,S.mode);return ce.lanes=z,ce.return=S,ce}finally{}}}var Jt=mc(!0),fc=mc(!1),pt=!1;function rr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function or(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function vt(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ht(e,n,t){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(me&2)!==0){var i=a.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),a.pending=n,n=rl(e),Fu(e,null,t),n}return sl(e,a,n,t),rl(e)}function oi(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194048)!==0)){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,iu(e,t)}}function ur(e,n){var t=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var i=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var s={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};l===null?i=l=s:l=l.next=s,t=t.next}while(t!==null);l===null?i=l=n:l=l.next=n}else i=l=n;t={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:a.shared,callbacks:a.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}var cr=!1;function ui(){if(cr){var e=ya;if(e!==null)throw e}}function ci(e,n,t,a){cr=!1;var i=e.updateQueue;pt=!1;var l=i.firstBaseUpdate,s=i.lastBaseUpdate,c=i.shared.pending;if(c!==null){i.shared.pending=null;var p=c,j=p.next;p.next=null,s===null?l=j:s.next=j,s=p;var T=e.alternate;T!==null&&(T=T.updateQueue,c=T.lastBaseUpdate,c!==s&&(c===null?T.firstBaseUpdate=j:c.next=j,T.lastBaseUpdate=p))}if(l!==null){var L=i.baseState;s=0,T=j=p=null,c=l;do{var N=c.lane&-536870913,O=N!==c.lane;if(O?(re&N)===N:(a&N)===N){N!==0&&N===ba&&(cr=!0),T!==null&&(T=T.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var G=e,K=c;N=n;var be=t;switch(K.tag){case 1:if(G=K.payload,typeof G=="function"){L=G.call(be,L,N);break e}L=G;break e;case 3:G.flags=G.flags&-65537|128;case 0:if(G=K.payload,N=typeof G=="function"?G.call(be,L,N):G,N==null)break e;L=E({},L,N);break e;case 2:pt=!0}}N=c.callback,N!==null&&(e.flags|=64,O&&(e.flags|=8192),O=i.callbacks,O===null?i.callbacks=[N]:O.push(N))}else O={lane:N,tag:c.tag,payload:c.payload,callback:c.callback,next:null},T===null?(j=T=O,p=L):T=T.next=O,s|=N;if(c=c.next,c===null){if(c=i.shared.pending,c===null)break;O=c,c=O.next,O.next=null,i.lastBaseUpdate=O,i.shared.pending=null}}while(!0);T===null&&(p=L),i.baseState=p,i.firstBaseUpdate=j,i.lastBaseUpdate=T,l===null&&(i.shared.lanes=0),St|=s,e.lanes=s,e.memoizedState=L}}function pc(e,n){if(typeof e!="function")throw Error(u(191,e));e.call(n)}function vc(e,n){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)pc(t[e],n)}var ja=b(null),gl=b(0);function hc(e,n){e=et,H(gl,e),H(ja,n),et=e|n.baseLanes}function dr(){H(gl,et),H(ja,ja.current)}function mr(){et=gl.current,D(ja),D(gl)}var fn=b(null),En=null;function gt(e){var n=e.alternate;H(ze,ze.current&1),H(fn,e),En===null&&(n===null||ja.current!==null||n.memoizedState!==null)&&(En=e)}function fr(e){H(ze,ze.current),H(fn,e),En===null&&(En=e)}function gc(e){e.tag===22?(H(ze,ze.current),H(fn,e),En===null&&(En=e)):xt()}function xt(){H(ze,ze.current),H(fn,fn.current)}function pn(e){D(fn),En===e&&(En=null),D(ze)}var ze=b(0);function xl(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||yo(t)||So(t)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Xn=0,ee=null,ge=null,Re=null,bl=!1,Na=!1,Ft=!1,yl=0,di=0,Ea=null,n0=0;function Ae(){throw Error(u(321))}function pr(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!dn(e[t],n[t]))return!1;return!0}function vr(e,n,t,a,i,l){return Xn=l,ee=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,w.H=e===null||e.memoizedState===null?ed:Tr,Ft=!1,l=t(a,i),Ft=!1,Na&&(l=bc(n,t,a,i)),xc(e),l}function xc(e){w.H=pi;var n=ge!==null&&ge.next!==null;if(Xn=0,Re=ge=ee=null,bl=!1,di=0,Ea=null,n)throw Error(u(300));e===null||Ue||(e=e.dependencies,e!==null&&cl(e)&&(Ue=!0))}function bc(e,n,t,a){ee=e;var i=0;do{if(Na&&(Ea=null),di=0,Na=!1,25<=i)throw Error(u(301));if(i+=1,Re=ge=null,e.updateQueue!=null){var l=e.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}w.H=nd,l=n(t,a)}while(Na);return l}function t0(){var e=w.H,n=e.useState()[0];return n=typeof n.then=="function"?mi(n):n,e=e.useState()[0],(ge!==null?ge.memoizedState:null)!==e&&(ee.flags|=1024),n}function hr(){var e=yl!==0;return yl=0,e}function gr(e,n,t){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t}function xr(e){if(bl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}bl=!1}Xn=0,Re=ge=ee=null,Na=!1,di=yl=0,Ea=null}function Pe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?ee.memoizedState=Re=e:Re=Re.next=e,Re}function Le(){if(ge===null){var e=ee.alternate;e=e!==null?e.memoizedState:null}else e=ge.next;var n=Re===null?ee.memoizedState:Re.next;if(n!==null)Re=n,ge=e;else{if(e===null)throw ee.alternate===null?Error(u(467)):Error(u(310));ge=e,e={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},Re===null?ee.memoizedState=Re=e:Re=Re.next=e}return Re}function Sl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function mi(e){var n=di;return di+=1,Ea===null&&(Ea=[]),e=uc(Ea,e,n),n=ee,(Re===null?n.memoizedState:Re.next)===null&&(n=n.alternate,w.H=n===null||n.memoizedState===null?ed:Tr),e}function Cl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return mi(e);if(e.$$typeof===q)return Xe(e)}throw Error(u(438,String(e)))}function br(e){var n=null,t=ee.updateQueue;if(t!==null&&(n=t.memoCache),n==null){var a=ee.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(n={data:a.data.map(function(i){return i.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),t===null&&(t=Sl(),ee.updateQueue=t),t.memoCache=n,t=n.data[n.index],t===void 0)for(t=n.data[n.index]=Array(e),a=0;a<e;a++)t[a]=Je;return n.index++,t}function Zn(e,n){return typeof n=="function"?n(e):n}function jl(e){var n=Le();return yr(n,ge,e)}function yr(e,n,t){var a=e.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=t;var i=e.baseQueue,l=a.pending;if(l!==null){if(i!==null){var s=i.next;i.next=l.next,l.next=s}n.baseQueue=i=l,a.pending=null}if(l=e.baseState,i===null)e.memoizedState=l;else{n=i.next;var c=s=null,p=null,j=n,T=!1;do{var L=j.lane&-536870913;if(L!==j.lane?(re&L)===L:(Xn&L)===L){var N=j.revertLane;if(N===0)p!==null&&(p=p.next={lane:0,revertLane:0,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),L===ba&&(T=!0);else if((Xn&N)===N){j=j.next,N===ba&&(T=!0);continue}else L={lane:0,revertLane:j.revertLane,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},p===null?(c=p=L,s=l):p=p.next=L,ee.lanes|=N,St|=N;L=j.action,Ft&&t(l,L),l=j.hasEagerState?j.eagerState:t(l,L)}else N={lane:L,revertLane:j.revertLane,gesture:j.gesture,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},p===null?(c=p=N,s=l):p=p.next=N,ee.lanes|=L,St|=L;j=j.next}while(j!==null&&j!==n);if(p===null?s=l:p.next=c,!dn(l,e.memoizedState)&&(Ue=!0,T&&(t=ya,t!==null)))throw t;e.memoizedState=l,e.baseState=s,e.baseQueue=p,a.lastRenderedState=l}return i===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Sr(e){var n=Le(),t=n.queue;if(t===null)throw Error(u(311));t.lastRenderedReducer=e;var a=t.dispatch,i=t.pending,l=n.memoizedState;if(i!==null){t.pending=null;var s=i=i.next;do l=e(l,s.action),s=s.next;while(s!==i);dn(l,n.memoizedState)||(Ue=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,a]}function yc(e,n,t){var a=ee,i=Le(),l=ue;if(l){if(t===void 0)throw Error(u(407));t=t()}else t=n();var s=!dn((ge||i).memoizedState,t);if(s&&(i.memoizedState=t,Ue=!0),i=i.queue,Nr(jc.bind(null,a,i,e),[e]),i.getSnapshot!==n||s||Re!==null&&Re.memoizedState.tag&1){if(a.flags|=2048,Ma(9,{destroy:void 0},Cc.bind(null,a,i,t,n),null),Ce===null)throw Error(u(349));l||(Xn&127)!==0||Sc(a,n,t)}return t}function Sc(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=ee.updateQueue,n===null?(n=Sl(),ee.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Cc(e,n,t,a){n.value=t,n.getSnapshot=a,Nc(n)&&Ec(e)}function jc(e,n,t){return t(function(){Nc(n)&&Ec(e)})}function Nc(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!dn(e,t)}catch{return!0}}function Ec(e){var n=Gt(e,2);n!==null&&rn(n,e,2)}function Cr(e){var n=Pe();if(typeof e=="function"){var t=e;if(e=t(),Ft){rt(!0);try{t()}finally{rt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zn,lastRenderedState:e},n}function Mc(e,n,t,a){return e.baseState=t,yr(e,ge,typeof a=="function"?a:Zn)}function a0(e,n,t,a,i){if(Ml(e))throw Error(u(485));if(e=n.action,e!==null){var l={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){l.listeners.push(s)}};w.T!==null?t(!0):l.isTransition=!1,a(l),t=n.pending,t===null?(l.next=n.pending=l,Oc(n,l)):(l.next=t.next,n.pending=t.next=l)}}function Oc(e,n){var t=n.action,a=n.payload,i=e.state;if(n.isTransition){var l=w.T,s={};w.T=s;try{var c=t(i,a),p=w.S;p!==null&&p(s,c),Ac(e,n,c)}catch(j){jr(e,n,j)}finally{l!==null&&s.types!==null&&(l.types=s.types),w.T=l}}else try{l=t(i,a),Ac(e,n,l)}catch(j){jr(e,n,j)}}function Ac(e,n,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(a){_c(e,n,a)},function(a){return jr(e,n,a)}):_c(e,n,t)}function _c(e,n,t){n.status="fulfilled",n.value=t,Tc(n),e.state=t,n=e.pending,n!==null&&(t=n.next,t===n?e.pending=null:(t=t.next,n.next=t,Oc(e,t)))}function jr(e,n,t){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do n.status="rejected",n.reason=t,Tc(n),n=n.next;while(n!==a)}e.action=null}function Tc(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function wc(e,n){return n}function zc(e,n){if(ue){var t=Ce.formState;if(t!==null){e:{var a=ee;if(ue){if(Ne){n:{for(var i=Ne,l=Nn;i.nodeType!==8;){if(!l){i=null;break n}if(i=Mn(i.nextSibling),i===null){i=null;break n}}l=i.data,i=l==="F!"||l==="F"?i:null}if(i){Ne=Mn(i.nextSibling),a=i.data==="F!";break e}}mt(a)}a=!1}a&&(n=t[0])}}return t=Pe(),t.memoizedState=t.baseState=n,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wc,lastRenderedState:n},t.queue=a,t=$c.bind(null,ee,a),a.dispatch=t,a=Cr(!1),l=_r.bind(null,ee,!1,a.queue),a=Pe(),i={state:n,dispatch:null,action:e,pending:null},a.queue=i,t=a0.bind(null,ee,i,l,t),i.dispatch=t,a.memoizedState=e,[n,t,!1]}function Lc(e){var n=Le();return Dc(n,ge,e)}function Dc(e,n,t){if(n=yr(e,n,wc)[0],e=jl(Zn)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var a=mi(n)}catch(s){throw s===Sa?fl:s}else a=n;n=Le();var i=n.queue,l=i.dispatch;return t!==n.memoizedState&&(ee.flags|=2048,Ma(9,{destroy:void 0},i0.bind(null,i,t),null)),[a,l,e]}function i0(e,n){e.action=n}function Rc(e){var n=Le(),t=ge;if(t!==null)return Dc(n,t,e);Le(),n=n.memoizedState,t=Le();var a=t.queue.dispatch;return t.memoizedState=e,[n,a,!1]}function Ma(e,n,t,a){return e={tag:e,create:t,deps:a,inst:n,next:null},n=ee.updateQueue,n===null&&(n=Sl(),ee.updateQueue=n),t=n.lastEffect,t===null?n.lastEffect=e.next=e:(a=t.next,t.next=e,e.next=a,n.lastEffect=e),e}function Uc(){return Le().memoizedState}function Nl(e,n,t,a){var i=Pe();ee.flags|=e,i.memoizedState=Ma(1|n,{destroy:void 0},t,a===void 0?null:a)}function El(e,n,t,a){var i=Le();a=a===void 0?null:a;var l=i.memoizedState.inst;ge!==null&&a!==null&&pr(a,ge.memoizedState.deps)?i.memoizedState=Ma(n,l,t,a):(ee.flags|=e,i.memoizedState=Ma(1|n,l,t,a))}function qc(e,n){Nl(8390656,8,e,n)}function Nr(e,n){El(2048,8,e,n)}function l0(e){ee.flags|=4;var n=ee.updateQueue;if(n===null)n=Sl(),ee.updateQueue=n,n.events=[e];else{var t=n.events;t===null?n.events=[e]:t.push(e)}}function Bc(e){var n=Le().memoizedState;return l0({ref:n,nextImpl:e}),function(){if((me&2)!==0)throw Error(u(440));return n.impl.apply(void 0,arguments)}}function Hc(e,n){return El(4,2,e,n)}function Ic(e,n){return El(4,4,e,n)}function Gc(e,n){if(typeof n=="function"){e=e();var t=n(e);return function(){typeof t=="function"?t():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function kc(e,n,t){t=t!=null?t.concat([e]):null,El(4,4,Gc.bind(null,n,e),t)}function Er(){}function Yc(e,n){var t=Le();n=n===void 0?null:n;var a=t.memoizedState;return n!==null&&pr(n,a[1])?a[0]:(t.memoizedState=[e,n],e)}function Qc(e,n){var t=Le();n=n===void 0?null:n;var a=t.memoizedState;if(n!==null&&pr(n,a[1]))return a[0];if(a=e(),Ft){rt(!0);try{e()}finally{rt(!1)}}return t.memoizedState=[a,n],a}function Mr(e,n,t){return t===void 0||(Xn&1073741824)!==0&&(re&261930)===0?e.memoizedState=n:(e.memoizedState=t,e=Vd(),ee.lanes|=e,St|=e,t)}function Vc(e,n,t,a){return dn(t,n)?t:ja.current!==null?(e=Mr(e,t,a),dn(e,n)||(Ue=!0),e):(Xn&42)===0||(Xn&1073741824)!==0&&(re&261930)===0?(Ue=!0,e.memoizedState=t):(e=Vd(),ee.lanes|=e,St|=e,n)}function Xc(e,n,t,a,i){var l=B.p;B.p=l!==0&&8>l?l:8;var s=w.T,c={};w.T=c,_r(e,!1,n,t);try{var p=i(),j=w.S;if(j!==null&&j(c,p),p!==null&&typeof p=="object"&&typeof p.then=="function"){var T=e0(p,a);fi(e,n,T,gn(e))}else fi(e,n,a,gn(e))}catch(L){fi(e,n,{then:function(){},status:"rejected",reason:L},gn())}finally{B.p=l,s!==null&&c.types!==null&&(s.types=c.types),w.T=s}}function s0(){}function Or(e,n,t,a){if(e.tag!==5)throw Error(u(476));var i=Zc(e).queue;Xc(e,i,n,F,t===null?s0:function(){return Kc(e),t(a)})}function Zc(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zn,lastRenderedState:F},next:null};var t={};return n.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zn,lastRenderedState:t},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Kc(e){var n=Zc(e);n.next===null&&(n=e.alternate.memoizedState),fi(e,n.next.queue,{},gn())}function Ar(){return Xe(Ti)}function Jc(){return Le().memoizedState}function Fc(){return Le().memoizedState}function r0(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var t=gn();e=vt(t);var a=ht(n,e,t);a!==null&&(rn(a,n,t),oi(a,n,t)),n={cache:ar()},e.payload=n;return}n=n.return}}function o0(e,n,t){var a=gn();t={lane:a,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},Ml(e)?Wc(n,t):(t=Xs(e,n,t,a),t!==null&&(rn(t,e,a),Pc(t,n,a)))}function $c(e,n,t){var a=gn();fi(e,n,t,a)}function fi(e,n,t,a){var i={lane:a,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(Ml(e))Wc(n,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var s=n.lastRenderedState,c=l(s,t);if(i.hasEagerState=!0,i.eagerState=c,dn(c,s))return sl(e,n,i,0),Ce===null&&ll(),!1}catch{}finally{}if(t=Xs(e,n,i,a),t!==null)return rn(t,e,a),Pc(t,n,a),!0}return!1}function _r(e,n,t,a){if(a={lane:2,revertLane:ro(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ml(e)){if(n)throw Error(u(479))}else n=Xs(e,t,a,2),n!==null&&rn(n,e,2)}function Ml(e){var n=e.alternate;return e===ee||n!==null&&n===ee}function Wc(e,n){Na=bl=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Pc(e,n,t){if((t&4194048)!==0){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,iu(e,t)}}var pi={readContext:Xe,use:Cl,useCallback:Ae,useContext:Ae,useEffect:Ae,useImperativeHandle:Ae,useLayoutEffect:Ae,useInsertionEffect:Ae,useMemo:Ae,useReducer:Ae,useRef:Ae,useState:Ae,useDebugValue:Ae,useDeferredValue:Ae,useTransition:Ae,useSyncExternalStore:Ae,useId:Ae,useHostTransitionStatus:Ae,useFormState:Ae,useActionState:Ae,useOptimistic:Ae,useMemoCache:Ae,useCacheRefresh:Ae};pi.useEffectEvent=Ae;var ed={readContext:Xe,use:Cl,useCallback:function(e,n){return Pe().memoizedState=[e,n===void 0?null:n],e},useContext:Xe,useEffect:qc,useImperativeHandle:function(e,n,t){t=t!=null?t.concat([e]):null,Nl(4194308,4,Gc.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Nl(4194308,4,e,n)},useInsertionEffect:function(e,n){Nl(4,2,e,n)},useMemo:function(e,n){var t=Pe();n=n===void 0?null:n;var a=e();if(Ft){rt(!0);try{e()}finally{rt(!1)}}return t.memoizedState=[a,n],a},useReducer:function(e,n,t){var a=Pe();if(t!==void 0){var i=t(n);if(Ft){rt(!0);try{t(n)}finally{rt(!1)}}}else i=n;return a.memoizedState=a.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},a.queue=e,e=e.dispatch=o0.bind(null,ee,e),[a.memoizedState,e]},useRef:function(e){var n=Pe();return e={current:e},n.memoizedState=e},useState:function(e){e=Cr(e);var n=e.queue,t=$c.bind(null,ee,n);return n.dispatch=t,[e.memoizedState,t]},useDebugValue:Er,useDeferredValue:function(e,n){var t=Pe();return Mr(t,e,n)},useTransition:function(){var e=Cr(!1);return e=Xc.bind(null,ee,e.queue,!0,!1),Pe().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,t){var a=ee,i=Pe();if(ue){if(t===void 0)throw Error(u(407));t=t()}else{if(t=n(),Ce===null)throw Error(u(349));(re&127)!==0||Sc(a,n,t)}i.memoizedState=t;var l={value:t,getSnapshot:n};return i.queue=l,qc(jc.bind(null,a,l,e),[e]),a.flags|=2048,Ma(9,{destroy:void 0},Cc.bind(null,a,l,t,n),null),t},useId:function(){var e=Pe(),n=Ce.identifierPrefix;if(ue){var t=Rn,a=Dn;t=(a&~(1<<32-cn(a)-1)).toString(32)+t,n="_"+n+"R_"+t,t=yl++,0<t&&(n+="H"+t.toString(32)),n+="_"}else t=n0++,n="_"+n+"r_"+t.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Ar,useFormState:zc,useActionState:zc,useOptimistic:function(e){var n=Pe();n.memoizedState=n.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=t,n=_r.bind(null,ee,!0,t),t.dispatch=n,[e,n]},useMemoCache:br,useCacheRefresh:function(){return Pe().memoizedState=r0.bind(null,ee)},useEffectEvent:function(e){var n=Pe(),t={impl:e};return n.memoizedState=t,function(){if((me&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}},Tr={readContext:Xe,use:Cl,useCallback:Yc,useContext:Xe,useEffect:Nr,useImperativeHandle:kc,useInsertionEffect:Hc,useLayoutEffect:Ic,useMemo:Qc,useReducer:jl,useRef:Uc,useState:function(){return jl(Zn)},useDebugValue:Er,useDeferredValue:function(e,n){var t=Le();return Vc(t,ge.memoizedState,e,n)},useTransition:function(){var e=jl(Zn)[0],n=Le().memoizedState;return[typeof e=="boolean"?e:mi(e),n]},useSyncExternalStore:yc,useId:Jc,useHostTransitionStatus:Ar,useFormState:Lc,useActionState:Lc,useOptimistic:function(e,n){var t=Le();return Mc(t,ge,e,n)},useMemoCache:br,useCacheRefresh:Fc};Tr.useEffectEvent=Bc;var nd={readContext:Xe,use:Cl,useCallback:Yc,useContext:Xe,useEffect:Nr,useImperativeHandle:kc,useInsertionEffect:Hc,useLayoutEffect:Ic,useMemo:Qc,useReducer:Sr,useRef:Uc,useState:function(){return Sr(Zn)},useDebugValue:Er,useDeferredValue:function(e,n){var t=Le();return ge===null?Mr(t,e,n):Vc(t,ge.memoizedState,e,n)},useTransition:function(){var e=Sr(Zn)[0],n=Le().memoizedState;return[typeof e=="boolean"?e:mi(e),n]},useSyncExternalStore:yc,useId:Jc,useHostTransitionStatus:Ar,useFormState:Rc,useActionState:Rc,useOptimistic:function(e,n){var t=Le();return ge!==null?Mc(t,ge,e,n):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:br,useCacheRefresh:Fc};nd.useEffectEvent=Bc;function wr(e,n,t,a){n=e.memoizedState,t=t(a,n),t=t==null?n:E({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var zr={enqueueSetState:function(e,n,t){e=e._reactInternals;var a=gn(),i=vt(a);i.payload=n,t!=null&&(i.callback=t),n=ht(e,i,a),n!==null&&(rn(n,e,a),oi(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var a=gn(),i=vt(a);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=ht(e,i,a),n!==null&&(rn(n,e,a),oi(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=gn(),a=vt(t);a.tag=2,n!=null&&(a.callback=n),n=ht(e,a,t),n!==null&&(rn(n,e,t),oi(n,e,t))}};function td(e,n,t,a,i,l,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,l,s):n.prototype&&n.prototype.isPureReactComponent?!ei(t,a)||!ei(i,l):!0}function ad(e,n,t,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,a),n.state!==e&&zr.enqueueReplaceState(n,n.state,null)}function $t(e,n){var t=n;if("ref"in n){t={};for(var a in n)a!=="ref"&&(t[a]=n[a])}if(e=e.defaultProps){t===n&&(t=E({},t));for(var i in e)t[i]===void 0&&(t[i]=e[i])}return t}function id(e){il(e)}function ld(e){console.error(e)}function sd(e){il(e)}function Ol(e,n){try{var t=e.onUncaughtError;t(n.value,{componentStack:n.stack})}catch(a){setTimeout(function(){throw a})}}function rd(e,n,t){try{var a=e.onCaughtError;a(t.value,{componentStack:t.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Lr(e,n,t){return t=vt(t),t.tag=3,t.payload={element:null},t.callback=function(){Ol(e,n)},t}function od(e){return e=vt(e),e.tag=3,e}function ud(e,n,t,a){var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var l=a.value;e.payload=function(){return i(l)},e.callback=function(){rd(n,t,a)}}var s=t.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){rd(n,t,a),typeof i!="function"&&(Ct===null?Ct=new Set([this]):Ct.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function u0(e,n,t,a,i){if(t.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(n=t.alternate,n!==null&&xa(n,t,i,!0),t=fn.current,t!==null){switch(t.tag){case 31:case 13:return En===null?Hl():t.alternate===null&&_e===0&&(_e=3),t.flags&=-257,t.flags|=65536,t.lanes=i,a===pl?t.flags|=16384:(n=t.updateQueue,n===null?t.updateQueue=new Set([a]):n.add(a),io(e,a,i)),!1;case 22:return t.flags|=65536,a===pl?t.flags|=16384:(n=t.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([a])},t.updateQueue=n):(t=n.retryQueue,t===null?n.retryQueue=new Set([a]):t.add(a)),io(e,a,i)),!1}throw Error(u(435,t.tag))}return io(e,a,i),Hl(),!1}if(ue)return n=fn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=i,a!==Ws&&(e=Error(u(422),{cause:a}),ai(Sn(e,t)))):(a!==Ws&&(n=Error(u(423),{cause:a}),ai(Sn(n,t))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,a=Sn(a,t),i=Lr(e.stateNode,a,i),ur(e,i),_e!==4&&(_e=2)),!1;var l=Error(u(520),{cause:a});if(l=Sn(l,t),Ci===null?Ci=[l]:Ci.push(l),_e!==4&&(_e=2),n===null)return!0;a=Sn(a,t),t=n;do{switch(t.tag){case 3:return t.flags|=65536,e=i&-i,t.lanes|=e,e=Lr(t.stateNode,a,e),ur(t,e),!1;case 1:if(n=t.type,l=t.stateNode,(t.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(Ct===null||!Ct.has(l))))return t.flags|=65536,i&=-i,t.lanes|=i,i=od(i),ud(i,e,t,a),ur(t,i),!1}t=t.return}while(t!==null);return!1}var Dr=Error(u(461)),Ue=!1;function Ze(e,n,t,a){n.child=e===null?fc(n,null,t,a):Jt(n,e.child,t,a)}function cd(e,n,t,a,i){t=t.render;var l=n.ref;if("ref"in a){var s={};for(var c in a)c!=="ref"&&(s[c]=a[c])}else s=a;return Vt(n),a=vr(e,n,t,s,l,i),c=hr(),e!==null&&!Ue?(gr(e,n,i),Kn(e,n,i)):(ue&&c&&Fs(n),n.flags|=1,Ze(e,n,a,i),n.child)}function dd(e,n,t,a,i){if(e===null){var l=t.type;return typeof l=="function"&&!Zs(l)&&l.defaultProps===void 0&&t.compare===null?(n.tag=15,n.type=l,md(e,n,l,a,i)):(e=ol(t.type,null,a,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!kr(e,i)){var s=l.memoizedProps;if(t=t.compare,t=t!==null?t:ei,t(s,a)&&e.ref===n.ref)return Kn(e,n,i)}return n.flags|=1,e=kn(l,a),e.ref=n.ref,e.return=n,n.child=e}function md(e,n,t,a,i){if(e!==null){var l=e.memoizedProps;if(ei(l,a)&&e.ref===n.ref)if(Ue=!1,n.pendingProps=a=l,kr(e,i))(e.flags&131072)!==0&&(Ue=!0);else return n.lanes=e.lanes,Kn(e,n,i)}return Rr(e,n,t,a,i)}function fd(e,n,t,a){var i=a.children,l=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((n.flags&128)!==0){if(l=l!==null?l.baseLanes|t:t,e!==null){for(a=n.child=e.child,i=0;a!==null;)i=i|a.lanes|a.childLanes,a=a.sibling;a=i&~l}else a=0,n.child=null;return pd(e,n,l,t,a)}if((t&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&ml(n,l!==null?l.cachePool:null),l!==null?hc(n,l):dr(),gc(n);else return a=n.lanes=536870912,pd(e,n,l!==null?l.baseLanes|t:t,t,a)}else l!==null?(ml(n,l.cachePool),hc(n,l),xt(),n.memoizedState=null):(e!==null&&ml(n,null),dr(),xt());return Ze(e,n,i,t),n.child}function vi(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function pd(e,n,t,a,i){var l=lr();return l=l===null?null:{parent:De._currentValue,pool:l},n.memoizedState={baseLanes:t,cachePool:l},e!==null&&ml(n,null),dr(),gc(n),e!==null&&xa(e,n,a,!0),n.childLanes=i,null}function Al(e,n){return n=Tl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function vd(e,n,t){return Jt(n,e.child,null,t),e=Al(n,n.pendingProps),e.flags|=2,pn(n),n.memoizedState=null,e}function c0(e,n,t){var a=n.pendingProps,i=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(ue){if(a.mode==="hidden")return e=Al(n,a),n.lanes=536870912,vi(null,e);if(fr(n),(e=Ne)?(e=Om(e,Nn),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ct!==null?{id:Dn,overflow:Rn}:null,retryLane:536870912,hydrationErrors:null},t=Wu(e),t.return=n,n.child=t,Ve=n,Ne=null)):e=null,e===null)throw mt(n);return n.lanes=536870912,null}return Al(n,a)}var l=e.memoizedState;if(l!==null){var s=l.dehydrated;if(fr(n),i)if(n.flags&256)n.flags&=-257,n=vd(e,n,t);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(u(558));else if(Ue||xa(e,n,t,!1),i=(t&e.childLanes)!==0,Ue||i){if(a=Ce,a!==null&&(s=lu(a,t),s!==0&&s!==l.retryLane))throw l.retryLane=s,Gt(e,s),rn(a,e,s),Dr;Hl(),n=vd(e,n,t)}else e=l.treeContext,Ne=Mn(s.nextSibling),Ve=n,ue=!0,dt=null,Nn=!1,e!==null&&nc(n,e),n=Al(n,a),n.flags|=4096;return n}return e=kn(e.child,{mode:a.mode,children:a.children}),e.ref=n.ref,n.child=e,e.return=n,e}function _l(e,n){var t=n.ref;if(t===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(u(284));(e===null||e.ref!==t)&&(n.flags|=4194816)}}function Rr(e,n,t,a,i){return Vt(n),t=vr(e,n,t,a,void 0,i),a=hr(),e!==null&&!Ue?(gr(e,n,i),Kn(e,n,i)):(ue&&a&&Fs(n),n.flags|=1,Ze(e,n,t,i),n.child)}function hd(e,n,t,a,i,l){return Vt(n),n.updateQueue=null,t=bc(n,a,t,i),xc(e),a=hr(),e!==null&&!Ue?(gr(e,n,l),Kn(e,n,l)):(ue&&a&&Fs(n),n.flags|=1,Ze(e,n,t,l),n.child)}function gd(e,n,t,a,i){if(Vt(n),n.stateNode===null){var l=pa,s=t.contextType;typeof s=="object"&&s!==null&&(l=Xe(s)),l=new t(a,l),n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=zr,n.stateNode=l,l._reactInternals=n,l=n.stateNode,l.props=a,l.state=n.memoizedState,l.refs={},rr(n),s=t.contextType,l.context=typeof s=="object"&&s!==null?Xe(s):pa,l.state=n.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(wr(n,t,s,a),l.state=n.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(s=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),s!==l.state&&zr.enqueueReplaceState(l,l.state,null),ci(n,a,l,i),ui(),l.state=n.memoizedState),typeof l.componentDidMount=="function"&&(n.flags|=4194308),a=!0}else if(e===null){l=n.stateNode;var c=n.memoizedProps,p=$t(t,c);l.props=p;var j=l.context,T=t.contextType;s=pa,typeof T=="object"&&T!==null&&(s=Xe(T));var L=t.getDerivedStateFromProps;T=typeof L=="function"||typeof l.getSnapshotBeforeUpdate=="function",c=n.pendingProps!==c,T||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c||j!==s)&&ad(n,l,a,s),pt=!1;var N=n.memoizedState;l.state=N,ci(n,a,l,i),ui(),j=n.memoizedState,c||N!==j||pt?(typeof L=="function"&&(wr(n,t,L,a),j=n.memoizedState),(p=pt||td(n,t,p,a,N,j,s))?(T||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=j),l.props=a,l.state=j,l.context=s,a=p):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{l=n.stateNode,or(e,n),s=n.memoizedProps,T=$t(t,s),l.props=T,L=n.pendingProps,N=l.context,j=t.contextType,p=pa,typeof j=="object"&&j!==null&&(p=Xe(j)),c=t.getDerivedStateFromProps,(j=typeof c=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==L||N!==p)&&ad(n,l,a,p),pt=!1,N=n.memoizedState,l.state=N,ci(n,a,l,i),ui();var O=n.memoizedState;s!==L||N!==O||pt||e!==null&&e.dependencies!==null&&cl(e.dependencies)?(typeof c=="function"&&(wr(n,t,c,a),O=n.memoizedState),(T=pt||td(n,t,T,a,N,O,p)||e!==null&&e.dependencies!==null&&cl(e.dependencies))?(j||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(a,O,p),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(a,O,p)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&N===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&N===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=O),l.props=a,l.state=O,l.context=p,a=T):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&N===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&N===e.memoizedState||(n.flags|=1024),a=!1)}return l=a,_l(e,n),a=(n.flags&128)!==0,l||a?(l=n.stateNode,t=a&&typeof t.getDerivedStateFromError!="function"?null:l.render(),n.flags|=1,e!==null&&a?(n.child=Jt(n,e.child,null,i),n.child=Jt(n,null,t,i)):Ze(e,n,t,i),n.memoizedState=l.state,e=n.child):e=Kn(e,n,i),e}function xd(e,n,t,a){return Yt(),n.flags|=256,Ze(e,n,t,a),n.child}var Ur={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function qr(e){return{baseLanes:e,cachePool:rc()}}function Br(e,n,t){return e=e!==null?e.childLanes&~t:0,n&&(e|=hn),e}function bd(e,n,t){var a=n.pendingProps,i=!1,l=(n.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(ze.current&2)!==0),s&&(i=!0,n.flags&=-129),s=(n.flags&32)!==0,n.flags&=-33,e===null){if(ue){if(i?gt(n):xt(),(e=Ne)?(e=Om(e,Nn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ct!==null?{id:Dn,overflow:Rn}:null,retryLane:536870912,hydrationErrors:null},t=Wu(e),t.return=n,n.child=t,Ve=n,Ne=null)):e=null,e===null)throw mt(n);return So(e)?n.lanes=32:n.lanes=536870912,null}var c=a.children;return a=a.fallback,i?(xt(),i=n.mode,c=Tl({mode:"hidden",children:c},i),a=kt(a,i,t,null),c.return=n,a.return=n,c.sibling=a,n.child=c,a=n.child,a.memoizedState=qr(t),a.childLanes=Br(e,s,t),n.memoizedState=Ur,vi(null,a)):(gt(n),Hr(n,c))}var p=e.memoizedState;if(p!==null&&(c=p.dehydrated,c!==null)){if(l)n.flags&256?(gt(n),n.flags&=-257,n=Ir(e,n,t)):n.memoizedState!==null?(xt(),n.child=e.child,n.flags|=128,n=null):(xt(),c=a.fallback,i=n.mode,a=Tl({mode:"visible",children:a.children},i),c=kt(c,i,t,null),c.flags|=2,a.return=n,c.return=n,a.sibling=c,n.child=a,Jt(n,e.child,null,t),a=n.child,a.memoizedState=qr(t),a.childLanes=Br(e,s,t),n.memoizedState=Ur,n=vi(null,a));else if(gt(n),So(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var j=s.dgst;s=j,a=Error(u(419)),a.stack="",a.digest=s,ai({value:a,source:null,stack:null}),n=Ir(e,n,t)}else if(Ue||xa(e,n,t,!1),s=(t&e.childLanes)!==0,Ue||s){if(s=Ce,s!==null&&(a=lu(s,t),a!==0&&a!==p.retryLane))throw p.retryLane=a,Gt(e,a),rn(s,e,a),Dr;yo(c)||Hl(),n=Ir(e,n,t)}else yo(c)?(n.flags|=192,n.child=e.child,n=null):(e=p.treeContext,Ne=Mn(c.nextSibling),Ve=n,ue=!0,dt=null,Nn=!1,e!==null&&nc(n,e),n=Hr(n,a.children),n.flags|=4096);return n}return i?(xt(),c=a.fallback,i=n.mode,p=e.child,j=p.sibling,a=kn(p,{mode:"hidden",children:a.children}),a.subtreeFlags=p.subtreeFlags&65011712,j!==null?c=kn(j,c):(c=kt(c,i,t,null),c.flags|=2),c.return=n,a.return=n,a.sibling=c,n.child=a,vi(null,a),a=n.child,c=e.child.memoizedState,c===null?c=qr(t):(i=c.cachePool,i!==null?(p=De._currentValue,i=i.parent!==p?{parent:p,pool:p}:i):i=rc(),c={baseLanes:c.baseLanes|t,cachePool:i}),a.memoizedState=c,a.childLanes=Br(e,s,t),n.memoizedState=Ur,vi(e.child,a)):(gt(n),t=e.child,e=t.sibling,t=kn(t,{mode:"visible",children:a.children}),t.return=n,t.sibling=null,e!==null&&(s=n.deletions,s===null?(n.deletions=[e],n.flags|=16):s.push(e)),n.child=t,n.memoizedState=null,t)}function Hr(e,n){return n=Tl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Tl(e,n){return e=mn(22,e,null,n),e.lanes=0,e}function Ir(e,n,t){return Jt(n,e.child,null,t),e=Hr(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function yd(e,n,t){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),nr(e.return,n,t)}function Gr(e,n,t,a,i,l){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:i,treeForkCount:l}:(s.isBackwards=n,s.rendering=null,s.renderingStartTime=0,s.last=a,s.tail=t,s.tailMode=i,s.treeForkCount=l)}function Sd(e,n,t){var a=n.pendingProps,i=a.revealOrder,l=a.tail;a=a.children;var s=ze.current,c=(s&2)!==0;if(c?(s=s&1|2,n.flags|=128):s&=1,H(ze,s),Ze(e,n,a,t),a=ue?ti:0,!c&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&yd(e,t,n);else if(e.tag===19)yd(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&xl(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),Gr(n,!1,i,t,l,a);break;case"backwards":case"unstable_legacy-backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&xl(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}Gr(n,!0,t,null,l,a);break;case"together":Gr(n,!1,null,null,void 0,a);break;default:n.memoizedState=null}return n.child}function Kn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),St|=n.lanes,(t&n.childLanes)===0)if(e!==null){if(xa(e,n,t,!1),(t&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(u(153));if(n.child!==null){for(e=n.child,t=kn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=kn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function kr(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&cl(e)))}function d0(e,n,t){switch(n.tag){case 3:We(n,n.stateNode.containerInfo),ft(n,De,e.memoizedState.cache),Yt();break;case 27:case 5:Ga(n);break;case 4:We(n,n.stateNode.containerInfo);break;case 10:ft(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,fr(n),null;break;case 13:var a=n.memoizedState;if(a!==null)return a.dehydrated!==null?(gt(n),n.flags|=128,null):(t&n.child.childLanes)!==0?bd(e,n,t):(gt(n),e=Kn(e,n,t),e!==null?e.sibling:null);gt(n);break;case 19:var i=(e.flags&128)!==0;if(a=(t&n.childLanes)!==0,a||(xa(e,n,t,!1),a=(t&n.childLanes)!==0),i){if(a)return Sd(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),H(ze,ze.current),a)break;return null;case 22:return n.lanes=0,fd(e,n,t,n.pendingProps);case 24:ft(n,De,e.memoizedState.cache)}return Kn(e,n,t)}function Cd(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps)Ue=!0;else{if(!kr(e,t)&&(n.flags&128)===0)return Ue=!1,d0(e,n,t);Ue=(e.flags&131072)!==0}else Ue=!1,ue&&(n.flags&1048576)!==0&&ec(n,ti,n.index);switch(n.lanes=0,n.tag){case 16:e:{var a=n.pendingProps;if(e=Zt(n.elementType),n.type=e,typeof e=="function")Zs(e)?(a=$t(e,a),n.tag=1,n=gd(null,n,e,a,t)):(n.tag=0,n=Rr(null,n,e,a,t));else{if(e!=null){var i=e.$$typeof;if(i===J){n.tag=11,n=cd(null,n,e,a,t);break e}else if(i===$){n.tag=14,n=dd(null,n,e,a,t);break e}}throw n=Bn(e)||e,Error(u(306,n,""))}}return n;case 0:return Rr(e,n,n.type,n.pendingProps,t);case 1:return a=n.type,i=$t(a,n.pendingProps),gd(e,n,a,i,t);case 3:e:{if(We(n,n.stateNode.containerInfo),e===null)throw Error(u(387));a=n.pendingProps;var l=n.memoizedState;i=l.element,or(e,n),ci(n,a,null,t);var s=n.memoizedState;if(a=s.cache,ft(n,De,a),a!==l.cache&&tr(n,[De],t,!0),ui(),a=s.element,l.isDehydrated)if(l={element:a,isDehydrated:!1,cache:s.cache},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){n=xd(e,n,a,t);break e}else if(a!==i){i=Sn(Error(u(424)),n),ai(i),n=xd(e,n,a,t);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ne=Mn(e.firstChild),Ve=n,ue=!0,dt=null,Nn=!0,t=fc(n,null,a,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling}else{if(Yt(),a===i){n=Kn(e,n,t);break e}Ze(e,n,a,t)}n=n.child}return n;case 26:return _l(e,n),e===null?(t=Lm(n.type,null,n.pendingProps,null))?n.memoizedState=t:ue||(t=n.type,e=n.pendingProps,a=Xl(ie.current).createElement(t),a[Qe]=n,a[en]=e,Ke(a,t,e),Ie(a),n.stateNode=a):n.memoizedState=Lm(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Ga(n),e===null&&ue&&(a=n.stateNode=Tm(n.type,n.pendingProps,ie.current),Ve=n,Nn=!0,i=Ne,Mt(n.type)?(Co=i,Ne=Mn(a.firstChild)):Ne=i),Ze(e,n,n.pendingProps.children,t),_l(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&ue&&((i=a=Ne)&&(a=G0(a,n.type,n.pendingProps,Nn),a!==null?(n.stateNode=a,Ve=n,Ne=Mn(a.firstChild),Nn=!1,i=!0):i=!1),i||mt(n)),Ga(n),i=n.type,l=n.pendingProps,s=e!==null?e.memoizedProps:null,a=l.children,go(i,l)?a=null:s!==null&&go(i,s)&&(n.flags|=32),n.memoizedState!==null&&(i=vr(e,n,t0,null,null,t),Ti._currentValue=i),_l(e,n),Ze(e,n,a,t),n.child;case 6:return e===null&&ue&&((e=t=Ne)&&(t=k0(t,n.pendingProps,Nn),t!==null?(n.stateNode=t,Ve=n,Ne=null,e=!0):e=!1),e||mt(n)),null;case 13:return bd(e,n,t);case 4:return We(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=Jt(n,null,a,t):Ze(e,n,a,t),n.child;case 11:return cd(e,n,n.type,n.pendingProps,t);case 7:return Ze(e,n,n.pendingProps,t),n.child;case 8:return Ze(e,n,n.pendingProps.children,t),n.child;case 12:return Ze(e,n,n.pendingProps.children,t),n.child;case 10:return a=n.pendingProps,ft(n,n.type,a.value),Ze(e,n,a.children,t),n.child;case 9:return i=n.type._context,a=n.pendingProps.children,Vt(n),i=Xe(i),a=a(i),n.flags|=1,Ze(e,n,a,t),n.child;case 14:return dd(e,n,n.type,n.pendingProps,t);case 15:return md(e,n,n.type,n.pendingProps,t);case 19:return Sd(e,n,t);case 31:return c0(e,n,t);case 22:return fd(e,n,t,n.pendingProps);case 24:return Vt(n),a=Xe(De),e===null?(i=lr(),i===null&&(i=Ce,l=ar(),i.pooledCache=l,l.refCount++,l!==null&&(i.pooledCacheLanes|=t),i=l),n.memoizedState={parent:a,cache:i},rr(n),ft(n,De,i)):((e.lanes&t)!==0&&(or(e,n),ci(n,null,null,t),ui()),i=e.memoizedState,l=n.memoizedState,i.parent!==a?(i={parent:a,cache:a},n.memoizedState=i,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=i),ft(n,De,a)):(a=l.cache,ft(n,De,a),a!==i.cache&&tr(n,[De],t,!0))),Ze(e,n,n.pendingProps.children,t),n.child;case 29:throw n.pendingProps}throw Error(u(156,n.tag))}function Jn(e){e.flags|=4}function Yr(e,n,t,a,i){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Jd())e.flags|=8192;else throw Kt=pl,sr}else e.flags&=-16777217}function jd(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Bm(n))if(Jd())e.flags|=8192;else throw Kt=pl,sr}function wl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?tu():536870912,e.lanes|=n,Ta|=n)}function hi(e,n){if(!ue)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Ee(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,a=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,a|=i.subtreeFlags&65011712,a|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=t,n}function m0(e,n,t){var a=n.pendingProps;switch($s(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(n),null;case 1:return Ee(n),null;case 3:return t=n.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Vn(De),we(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(ga(n)?Jn(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ps())),Ee(n),null;case 26:var i=n.type,l=n.memoizedState;return e===null?(Jn(n),l!==null?(Ee(n),jd(n,l)):(Ee(n),Yr(n,i,null,a,t))):l?l!==e.memoizedState?(Jn(n),Ee(n),jd(n,l)):(Ee(n),n.flags&=-16777217):(e=e.memoizedProps,e!==a&&Jn(n),Ee(n),Yr(n,i,e,a,t)),null;case 27:if(ki(n),t=ie.current,i=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==a&&Jn(n);else{if(!a){if(n.stateNode===null)throw Error(u(166));return Ee(n),null}e=Y.current,ga(n)?tc(n):(e=Tm(i,a,t),n.stateNode=e,Jn(n))}return Ee(n),null;case 5:if(ki(n),i=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==a&&Jn(n);else{if(!a){if(n.stateNode===null)throw Error(u(166));return Ee(n),null}if(l=Y.current,ga(n))tc(n);else{var s=Xl(ie.current);switch(l){case 1:l=s.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:l=s.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":l=s.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":l=s.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":l=s.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof a.is=="string"?s.createElement("select",{is:a.is}):s.createElement("select"),a.multiple?l.multiple=!0:a.size&&(l.size=a.size);break;default:l=typeof a.is=="string"?s.createElement(i,{is:a.is}):s.createElement(i)}}l[Qe]=n,l[en]=a;e:for(s=n.child;s!==null;){if(s.tag===5||s.tag===6)l.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break e;for(;s.sibling===null;){if(s.return===null||s.return===n)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}n.stateNode=l;e:switch(Ke(l,i,a),i){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Jn(n)}}return Ee(n),Yr(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,t),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==a&&Jn(n);else{if(typeof a!="string"&&n.stateNode===null)throw Error(u(166));if(e=ie.current,ga(n)){if(e=n.stateNode,t=n.memoizedProps,a=null,i=Ve,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}e[Qe]=n,e=!!(e.nodeValue===t||a!==null&&a.suppressHydrationWarning===!0||bm(e.nodeValue,t)),e||mt(n,!0)}else e=Xl(e).createTextNode(a),e[Qe]=n,n.stateNode=e}return Ee(n),null;case 31:if(t=n.memoizedState,e===null||e.memoizedState!==null){if(a=ga(n),t!==null){if(e===null){if(!a)throw Error(u(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[Qe]=n}else Yt(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ee(n),e=!1}else t=Ps(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return n.flags&256?(pn(n),n):(pn(n),null);if((n.flags&128)!==0)throw Error(u(558))}return Ee(n),null;case 13:if(a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=ga(n),a!==null&&a.dehydrated!==null){if(e===null){if(!i)throw Error(u(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(u(317));i[Qe]=n}else Yt(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ee(n),i=!1}else i=Ps(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return n.flags&256?(pn(n),n):(pn(n),null)}return pn(n),(n.flags&128)!==0?(n.lanes=t,n):(t=a!==null,e=e!==null&&e.memoizedState!==null,t&&(a=n.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==i&&(a.flags|=2048)),t!==e&&t&&(n.child.flags|=8192),wl(n,n.updateQueue),Ee(n),null);case 4:return we(),e===null&&mo(n.stateNode.containerInfo),Ee(n),null;case 10:return Vn(n.type),Ee(n),null;case 19:if(D(ze),a=n.memoizedState,a===null)return Ee(n),null;if(i=(n.flags&128)!==0,l=a.rendering,l===null)if(i)hi(a,!1);else{if(_e!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(l=xl(e),l!==null){for(n.flags|=128,hi(a,!1),e=l.updateQueue,n.updateQueue=e,wl(n,e),n.subtreeFlags=0,e=t,t=n.child;t!==null;)$u(t,e),t=t.sibling;return H(ze,ze.current&1|2),ue&&Yn(n,a.treeForkCount),n.child}e=e.sibling}a.tail!==null&&on()>Ul&&(n.flags|=128,i=!0,hi(a,!1),n.lanes=4194304)}else{if(!i)if(e=xl(l),e!==null){if(n.flags|=128,i=!0,e=e.updateQueue,n.updateQueue=e,wl(n,e),hi(a,!0),a.tail===null&&a.tailMode==="hidden"&&!l.alternate&&!ue)return Ee(n),null}else 2*on()-a.renderingStartTime>Ul&&t!==536870912&&(n.flags|=128,i=!0,hi(a,!1),n.lanes=4194304);a.isBackwards?(l.sibling=n.child,n.child=l):(e=a.last,e!==null?e.sibling=l:n.child=l,a.last=l)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=on(),e.sibling=null,t=ze.current,H(ze,i?t&1|2:t&1),ue&&Yn(n,a.treeForkCount),e):(Ee(n),null);case 22:case 23:return pn(n),mr(),a=n.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(n.flags|=8192):a&&(n.flags|=8192),a?(t&536870912)!==0&&(n.flags&128)===0&&(Ee(n),n.subtreeFlags&6&&(n.flags|=8192)):Ee(n),t=n.updateQueue,t!==null&&wl(n,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),a=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),a!==t&&(n.flags|=2048),e!==null&&D(Xt),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),n.memoizedState.cache!==t&&(n.flags|=2048),Vn(De),Ee(n),null;case 25:return null;case 30:return null}throw Error(u(156,n.tag))}function f0(e,n){switch($s(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Vn(De),we(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ki(n),null;case 31:if(n.memoizedState!==null){if(pn(n),n.alternate===null)throw Error(u(340));Yt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(pn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(u(340));Yt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return D(ze),null;case 4:return we(),null;case 10:return Vn(n.type),null;case 22:case 23:return pn(n),mr(),e!==null&&D(Xt),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Vn(De),null;case 25:return null;default:return null}}function Nd(e,n){switch($s(n),n.tag){case 3:Vn(De),we();break;case 26:case 27:case 5:ki(n);break;case 4:we();break;case 31:n.memoizedState!==null&&pn(n);break;case 13:pn(n);break;case 19:D(ze);break;case 10:Vn(n.type);break;case 22:case 23:pn(n),mr(),e!==null&&D(Xt);break;case 24:Vn(De)}}function gi(e,n){try{var t=n.updateQueue,a=t!==null?t.lastEffect:null;if(a!==null){var i=a.next;t=i;do{if((t.tag&e)===e){a=void 0;var l=t.create,s=t.inst;a=l(),s.destroy=a}t=t.next}while(t!==i)}}catch(c){ve(n,n.return,c)}}function bt(e,n,t){try{var a=n.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var l=i.next;a=l;do{if((a.tag&e)===e){var s=a.inst,c=s.destroy;if(c!==void 0){s.destroy=void 0,i=n;var p=t,j=c;try{j()}catch(T){ve(i,p,T)}}}a=a.next}while(a!==l)}}catch(T){ve(n,n.return,T)}}function Ed(e){var n=e.updateQueue;if(n!==null){var t=e.stateNode;try{vc(n,t)}catch(a){ve(e,e.return,a)}}}function Md(e,n,t){t.props=$t(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(a){ve(e,n,a)}}function xi(e,n){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof t=="function"?e.refCleanup=t(a):t.current=a}}catch(i){ve(e,n,i)}}function Un(e,n){var t=e.ref,a=e.refCleanup;if(t!==null)if(typeof a=="function")try{a()}catch(i){ve(e,n,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(i){ve(e,n,i)}else t.current=null}function Od(e){var n=e.type,t=e.memoizedProps,a=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":t.autoFocus&&a.focus();break e;case"img":t.src?a.src=t.src:t.srcSet&&(a.srcset=t.srcSet)}}catch(i){ve(e,e.return,i)}}function Qr(e,n,t){try{var a=e.stateNode;R0(a,e.type,t,n),a[en]=n}catch(i){ve(e,e.return,i)}}function Ad(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Mt(e.type)||e.tag===4}function Vr(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ad(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Mt(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xr(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,n):(n=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.appendChild(e),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=In));else if(a!==4&&(a===27&&Mt(e.type)&&(t=e.stateNode,n=null),e=e.child,e!==null))for(Xr(e,n,t),e=e.sibling;e!==null;)Xr(e,n,t),e=e.sibling}function zl(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(a!==4&&(a===27&&Mt(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(zl(e,n,t),e=e.sibling;e!==null;)zl(e,n,t),e=e.sibling}function _d(e){var n=e.stateNode,t=e.memoizedProps;try{for(var a=e.type,i=n.attributes;i.length;)n.removeAttributeNode(i[0]);Ke(n,a,t),n[Qe]=e,n[en]=t}catch(l){ve(e,e.return,l)}}var Fn=!1,qe=!1,Zr=!1,Td=typeof WeakSet=="function"?WeakSet:Set,Ge=null;function p0(e,n){if(e=e.containerInfo,vo=Pl,e=ku(e),Is(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var i=a.anchorOffset,l=a.focusNode;a=a.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var s=0,c=-1,p=-1,j=0,T=0,L=e,N=null;n:for(;;){for(var O;L!==t||i!==0&&L.nodeType!==3||(c=s+i),L!==l||a!==0&&L.nodeType!==3||(p=s+a),L.nodeType===3&&(s+=L.nodeValue.length),(O=L.firstChild)!==null;)N=L,L=O;for(;;){if(L===e)break n;if(N===t&&++j===i&&(c=s),N===l&&++T===a&&(p=s),(O=L.nextSibling)!==null)break;L=N,N=L.parentNode}L=O}t=c===-1||p===-1?null:{start:c,end:p}}else t=null}t=t||{start:0,end:0}}else t=null;for(ho={focusedElem:e,selectionRange:t},Pl=!1,Ge=n;Ge!==null;)if(n=Ge,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Ge=e;else for(;Ge!==null;){switch(n=Ge,l=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(t=0;t<e.length;t++)i=e[t],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&l!==null){e=void 0,t=n,i=l.memoizedProps,l=l.memoizedState,a=t.stateNode;try{var G=$t(t.type,i);e=a.getSnapshotBeforeUpdate(G,l),a.__reactInternalSnapshotBeforeUpdate=e}catch(K){ve(t,t.return,K)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,t=e.nodeType,t===9)bo(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":bo(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=n.sibling,e!==null){e.return=n.return,Ge=e;break}Ge=n.return}}function wd(e,n,t){var a=t.flags;switch(t.tag){case 0:case 11:case 15:Wn(e,t),a&4&&gi(5,t);break;case 1:if(Wn(e,t),a&4)if(e=t.stateNode,n===null)try{e.componentDidMount()}catch(s){ve(t,t.return,s)}else{var i=$t(t.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(i,n,e.__reactInternalSnapshotBeforeUpdate)}catch(s){ve(t,t.return,s)}}a&64&&Ed(t),a&512&&xi(t,t.return);break;case 3:if(Wn(e,t),a&64&&(e=t.updateQueue,e!==null)){if(n=null,t.child!==null)switch(t.child.tag){case 27:case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}try{vc(e,n)}catch(s){ve(t,t.return,s)}}break;case 27:n===null&&a&4&&_d(t);case 26:case 5:Wn(e,t),n===null&&a&4&&Od(t),a&512&&xi(t,t.return);break;case 12:Wn(e,t);break;case 31:Wn(e,t),a&4&&Dd(e,t);break;case 13:Wn(e,t),a&4&&Rd(e,t),a&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=j0.bind(null,t),Y0(e,t))));break;case 22:if(a=t.memoizedState!==null||Fn,!a){n=n!==null&&n.memoizedState!==null||qe,i=Fn;var l=qe;Fn=a,(qe=n)&&!l?Pn(e,t,(t.subtreeFlags&8772)!==0):Wn(e,t),Fn=i,qe=l}break;case 30:break;default:Wn(e,t)}}function zd(e){var n=e.alternate;n!==null&&(e.alternate=null,zd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&js(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Me=null,tn=!1;function $n(e,n,t){for(t=t.child;t!==null;)Ld(e,n,t),t=t.sibling}function Ld(e,n,t){if(un&&typeof un.onCommitFiberUnmount=="function")try{un.onCommitFiberUnmount(ka,t)}catch{}switch(t.tag){case 26:qe||Un(t,n),$n(e,n,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:qe||Un(t,n);var a=Me,i=tn;Mt(t.type)&&(Me=t.stateNode,tn=!1),$n(e,n,t),Oi(t.stateNode),Me=a,tn=i;break;case 5:qe||Un(t,n);case 6:if(a=Me,i=tn,Me=null,$n(e,n,t),Me=a,tn=i,Me!==null)if(tn)try{(Me.nodeType===9?Me.body:Me.nodeName==="HTML"?Me.ownerDocument.body:Me).removeChild(t.stateNode)}catch(l){ve(t,n,l)}else try{Me.removeChild(t.stateNode)}catch(l){ve(t,n,l)}break;case 18:Me!==null&&(tn?(e=Me,Em(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),Ba(e)):Em(Me,t.stateNode));break;case 4:a=Me,i=tn,Me=t.stateNode.containerInfo,tn=!0,$n(e,n,t),Me=a,tn=i;break;case 0:case 11:case 14:case 15:bt(2,t,n),qe||bt(4,t,n),$n(e,n,t);break;case 1:qe||(Un(t,n),a=t.stateNode,typeof a.componentWillUnmount=="function"&&Md(t,n,a)),$n(e,n,t);break;case 21:$n(e,n,t);break;case 22:qe=(a=qe)||t.memoizedState!==null,$n(e,n,t),qe=a;break;default:$n(e,n,t)}}function Dd(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ba(e)}catch(t){ve(n,n.return,t)}}}function Rd(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ba(e)}catch(t){ve(n,n.return,t)}}function v0(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Td),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Td),n;default:throw Error(u(435,e.tag))}}function Ll(e,n){var t=v0(e);n.forEach(function(a){if(!t.has(a)){t.add(a);var i=N0.bind(null,e,a);a.then(i,i)}})}function an(e,n){var t=n.deletions;if(t!==null)for(var a=0;a<t.length;a++){var i=t[a],l=e,s=n,c=s;e:for(;c!==null;){switch(c.tag){case 27:if(Mt(c.type)){Me=c.stateNode,tn=!1;break e}break;case 5:Me=c.stateNode,tn=!1;break e;case 3:case 4:Me=c.stateNode.containerInfo,tn=!0;break e}c=c.return}if(Me===null)throw Error(u(160));Ld(l,s,i),Me=null,tn=!1,l=i.alternate,l!==null&&(l.return=null),i.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Ud(n,e),n=n.sibling}var wn=null;function Ud(e,n){var t=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:an(n,e),ln(e),a&4&&(bt(3,e,e.return),gi(3,e),bt(5,e,e.return));break;case 1:an(n,e),ln(e),a&512&&(qe||t===null||Un(t,t.return)),a&64&&Fn&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?a:t.concat(a))));break;case 26:var i=wn;if(an(n,e),ln(e),a&512&&(qe||t===null||Un(t,t.return)),a&4){var l=t!==null?t.memoizedState:null;if(a=e.memoizedState,t===null)if(a===null)if(e.stateNode===null){e:{a=e.type,t=e.memoizedProps,i=i.ownerDocument||i;n:switch(a){case"title":l=i.getElementsByTagName("title")[0],(!l||l[Va]||l[Qe]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=i.createElement(a),i.head.insertBefore(l,i.querySelector("head > title"))),Ke(l,a,t),l[Qe]=e,Ie(l),a=l;break e;case"link":var s=Um("link","href",i).get(a+(t.href||""));if(s){for(var c=0;c<s.length;c++)if(l=s[c],l.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&l.getAttribute("rel")===(t.rel==null?null:t.rel)&&l.getAttribute("title")===(t.title==null?null:t.title)&&l.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){s.splice(c,1);break n}}l=i.createElement(a),Ke(l,a,t),i.head.appendChild(l);break;case"meta":if(s=Um("meta","content",i).get(a+(t.content||""))){for(c=0;c<s.length;c++)if(l=s[c],l.getAttribute("content")===(t.content==null?null:""+t.content)&&l.getAttribute("name")===(t.name==null?null:t.name)&&l.getAttribute("property")===(t.property==null?null:t.property)&&l.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&l.getAttribute("charset")===(t.charSet==null?null:t.charSet)){s.splice(c,1);break n}}l=i.createElement(a),Ke(l,a,t),i.head.appendChild(l);break;default:throw Error(u(468,a))}l[Qe]=e,Ie(l),a=l}e.stateNode=a}else qm(i,e.type,e.stateNode);else e.stateNode=Rm(i,a,e.memoizedProps);else l!==a?(l===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):l.count--,a===null?qm(i,e.type,e.stateNode):Rm(i,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Qr(e,e.memoizedProps,t.memoizedProps)}break;case 27:an(n,e),ln(e),a&512&&(qe||t===null||Un(t,t.return)),t!==null&&a&4&&Qr(e,e.memoizedProps,t.memoizedProps);break;case 5:if(an(n,e),ln(e),a&512&&(qe||t===null||Un(t,t.return)),e.flags&32){i=e.stateNode;try{ra(i,"")}catch(G){ve(e,e.return,G)}}a&4&&e.stateNode!=null&&(i=e.memoizedProps,Qr(e,i,t!==null?t.memoizedProps:i)),a&1024&&(Zr=!0);break;case 6:if(an(n,e),ln(e),a&4){if(e.stateNode===null)throw Error(u(162));a=e.memoizedProps,t=e.stateNode;try{t.nodeValue=a}catch(G){ve(e,e.return,G)}}break;case 3:if(Jl=null,i=wn,wn=Zl(n.containerInfo),an(n,e),wn=i,ln(e),a&4&&t!==null&&t.memoizedState.isDehydrated)try{Ba(n.containerInfo)}catch(G){ve(e,e.return,G)}Zr&&(Zr=!1,qd(e));break;case 4:a=wn,wn=Zl(e.stateNode.containerInfo),an(n,e),ln(e),wn=a;break;case 12:an(n,e),ln(e);break;case 31:an(n,e),ln(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ll(e,a)));break;case 13:an(n,e),ln(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(Rl=on()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ll(e,a)));break;case 22:i=e.memoizedState!==null;var p=t!==null&&t.memoizedState!==null,j=Fn,T=qe;if(Fn=j||i,qe=T||p,an(n,e),qe=T,Fn=j,ln(e),a&8192)e:for(n=e.stateNode,n._visibility=i?n._visibility&-2:n._visibility|1,i&&(t===null||p||Fn||qe||Wt(e)),t=null,n=e;;){if(n.tag===5||n.tag===26){if(t===null){p=t=n;try{if(l=p.stateNode,i)s=l.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{c=p.stateNode;var L=p.memoizedProps.style,N=L!=null&&L.hasOwnProperty("display")?L.display:null;c.style.display=N==null||typeof N=="boolean"?"":(""+N).trim()}}catch(G){ve(p,p.return,G)}}}else if(n.tag===6){if(t===null){p=n;try{p.stateNode.nodeValue=i?"":p.memoizedProps}catch(G){ve(p,p.return,G)}}}else if(n.tag===18){if(t===null){p=n;try{var O=p.stateNode;i?Mm(O,!0):Mm(p.stateNode,!1)}catch(G){ve(p,p.return,G)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;t===n&&(t=null),n=n.return}t===n&&(t=null),n.sibling.return=n.return,n=n.sibling}a&4&&(a=e.updateQueue,a!==null&&(t=a.retryQueue,t!==null&&(a.retryQueue=null,Ll(e,t))));break;case 19:an(n,e),ln(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ll(e,a)));break;case 30:break;case 21:break;default:an(n,e),ln(e)}}function ln(e){var n=e.flags;if(n&2){try{for(var t,a=e.return;a!==null;){if(Ad(a)){t=a;break}a=a.return}if(t==null)throw Error(u(160));switch(t.tag){case 27:var i=t.stateNode,l=Vr(e);zl(e,l,i);break;case 5:var s=t.stateNode;t.flags&32&&(ra(s,""),t.flags&=-33);var c=Vr(e);zl(e,c,s);break;case 3:case 4:var p=t.stateNode.containerInfo,j=Vr(e);Xr(e,j,p);break;default:throw Error(u(161))}}catch(T){ve(e,e.return,T)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function qd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;qd(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Wn(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)wd(e,n.alternate,n),n=n.sibling}function Wt(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:bt(4,n,n.return),Wt(n);break;case 1:Un(n,n.return);var t=n.stateNode;typeof t.componentWillUnmount=="function"&&Md(n,n.return,t),Wt(n);break;case 27:Oi(n.stateNode);case 26:case 5:Un(n,n.return),Wt(n);break;case 22:n.memoizedState===null&&Wt(n);break;case 30:Wt(n);break;default:Wt(n)}e=e.sibling}}function Pn(e,n,t){for(t=t&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var a=n.alternate,i=e,l=n,s=l.flags;switch(l.tag){case 0:case 11:case 15:Pn(i,l,t),gi(4,l);break;case 1:if(Pn(i,l,t),a=l,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(j){ve(a,a.return,j)}if(a=l,i=a.updateQueue,i!==null){var c=a.stateNode;try{var p=i.shared.hiddenCallbacks;if(p!==null)for(i.shared.hiddenCallbacks=null,i=0;i<p.length;i++)pc(p[i],c)}catch(j){ve(a,a.return,j)}}t&&s&64&&Ed(l),xi(l,l.return);break;case 27:_d(l);case 26:case 5:Pn(i,l,t),t&&a===null&&s&4&&Od(l),xi(l,l.return);break;case 12:Pn(i,l,t);break;case 31:Pn(i,l,t),t&&s&4&&Dd(i,l);break;case 13:Pn(i,l,t),t&&s&4&&Rd(i,l);break;case 22:l.memoizedState===null&&Pn(i,l,t),xi(l,l.return);break;case 30:break;default:Pn(i,l,t)}n=n.sibling}}function Kr(e,n){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&ii(t))}function Jr(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ii(e))}function zn(e,n,t,a){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Bd(e,n,t,a),n=n.sibling}function Bd(e,n,t,a){var i=n.flags;switch(n.tag){case 0:case 11:case 15:zn(e,n,t,a),i&2048&&gi(9,n);break;case 1:zn(e,n,t,a);break;case 3:zn(e,n,t,a),i&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ii(e)));break;case 12:if(i&2048){zn(e,n,t,a),e=n.stateNode;try{var l=n.memoizedProps,s=l.id,c=l.onPostCommit;typeof c=="function"&&c(s,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(p){ve(n,n.return,p)}}else zn(e,n,t,a);break;case 31:zn(e,n,t,a);break;case 13:zn(e,n,t,a);break;case 23:break;case 22:l=n.stateNode,s=n.alternate,n.memoizedState!==null?l._visibility&2?zn(e,n,t,a):bi(e,n):l._visibility&2?zn(e,n,t,a):(l._visibility|=2,Oa(e,n,t,a,(n.subtreeFlags&10256)!==0||!1)),i&2048&&Kr(s,n);break;case 24:zn(e,n,t,a),i&2048&&Jr(n.alternate,n);break;default:zn(e,n,t,a)}}function Oa(e,n,t,a,i){for(i=i&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var l=e,s=n,c=t,p=a,j=s.flags;switch(s.tag){case 0:case 11:case 15:Oa(l,s,c,p,i),gi(8,s);break;case 23:break;case 22:var T=s.stateNode;s.memoizedState!==null?T._visibility&2?Oa(l,s,c,p,i):bi(l,s):(T._visibility|=2,Oa(l,s,c,p,i)),i&&j&2048&&Kr(s.alternate,s);break;case 24:Oa(l,s,c,p,i),i&&j&2048&&Jr(s.alternate,s);break;default:Oa(l,s,c,p,i)}n=n.sibling}}function bi(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var t=e,a=n,i=a.flags;switch(a.tag){case 22:bi(t,a),i&2048&&Kr(a.alternate,a);break;case 24:bi(t,a),i&2048&&Jr(a.alternate,a);break;default:bi(t,a)}n=n.sibling}}var yi=8192;function Aa(e,n,t){if(e.subtreeFlags&yi)for(e=e.child;e!==null;)Hd(e,n,t),e=e.sibling}function Hd(e,n,t){switch(e.tag){case 26:Aa(e,n,t),e.flags&yi&&e.memoizedState!==null&&nv(t,wn,e.memoizedState,e.memoizedProps);break;case 5:Aa(e,n,t);break;case 3:case 4:var a=wn;wn=Zl(e.stateNode.containerInfo),Aa(e,n,t),wn=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=yi,yi=16777216,Aa(e,n,t),yi=a):Aa(e,n,t));break;default:Aa(e,n,t)}}function Id(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Si(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var a=n[t];Ge=a,kd(a,e)}Id(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Gd(e),e=e.sibling}function Gd(e){switch(e.tag){case 0:case 11:case 15:Si(e),e.flags&2048&&bt(9,e,e.return);break;case 3:Si(e);break;case 12:Si(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Dl(e)):Si(e);break;default:Si(e)}}function Dl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var a=n[t];Ge=a,kd(a,e)}Id(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:bt(8,n,n.return),Dl(n);break;case 22:t=n.stateNode,t._visibility&2&&(t._visibility&=-3,Dl(n));break;default:Dl(n)}e=e.sibling}}function kd(e,n){for(;Ge!==null;){var t=Ge;switch(t.tag){case 0:case 11:case 15:bt(8,t,n);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var a=t.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:ii(t.memoizedState.cache)}if(a=t.child,a!==null)a.return=t,Ge=a;else e:for(t=e;Ge!==null;){a=Ge;var i=a.sibling,l=a.return;if(zd(a),a===t){Ge=null;break e}if(i!==null){i.return=l,Ge=i;break e}Ge=l}}}var h0={getCacheForType:function(e){var n=Xe(De),t=n.data.get(e);return t===void 0&&(t=e(),n.data.set(e,t)),t},cacheSignal:function(){return Xe(De).controller.signal}},g0=typeof WeakMap=="function"?WeakMap:Map,me=0,Ce=null,le=null,re=0,pe=0,vn=null,yt=!1,_a=!1,Fr=!1,et=0,_e=0,St=0,Pt=0,$r=0,hn=0,Ta=0,Ci=null,sn=null,Wr=!1,Rl=0,Yd=0,Ul=1/0,ql=null,Ct=null,Be=0,jt=null,wa=null,nt=0,Pr=0,eo=null,Qd=null,ji=0,no=null;function gn(){return(me&2)!==0&&re!==0?re&-re:w.T!==null?ro():su()}function Vd(){if(hn===0)if((re&536870912)===0||ue){var e=Vi;Vi<<=1,(Vi&3932160)===0&&(Vi=262144),hn=e}else hn=536870912;return e=fn.current,e!==null&&(e.flags|=32),hn}function rn(e,n,t){(e===Ce&&(pe===2||pe===9)||e.cancelPendingCommit!==null)&&(za(e,0),Nt(e,re,hn,!1)),Qa(e,t),((me&2)===0||e!==Ce)&&(e===Ce&&((me&2)===0&&(Pt|=t),_e===4&&Nt(e,re,hn,!1)),qn(e))}function Xd(e,n,t){if((me&6)!==0)throw Error(u(327));var a=!t&&(n&127)===0&&(n&e.expiredLanes)===0||Ya(e,n),i=a?y0(e,n):ao(e,n,!0),l=a;do{if(i===0){_a&&!a&&Nt(e,n,0,!1);break}else{if(t=e.current.alternate,l&&!x0(t)){i=ao(e,n,!1),l=!1;continue}if(i===2){if(l=n,e.errorRecoveryDisabledLanes&l)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){n=s;e:{var c=e;i=Ci;var p=c.current.memoizedState.isDehydrated;if(p&&(za(c,s).flags|=256),s=ao(c,s,!1),s!==2){if(Fr&&!p){c.errorRecoveryDisabledLanes|=l,Pt|=l,i=4;break e}l=sn,sn=i,l!==null&&(sn===null?sn=l:sn.push.apply(sn,l))}i=s}if(l=!1,i!==2)continue}}if(i===1){za(e,0),Nt(e,n,0,!0);break}e:{switch(a=e,l=i,l){case 0:case 1:throw Error(u(345));case 4:if((n&4194048)!==n)break;case 6:Nt(a,n,hn,!yt);break e;case 2:sn=null;break;case 3:case 5:break;default:throw Error(u(329))}if((n&62914560)===n&&(i=Rl+300-on(),10<i)){if(Nt(a,n,hn,!yt),Zi(a,0,!0)!==0)break e;nt=n,a.timeoutHandle=jm(Zd.bind(null,a,t,sn,ql,Wr,n,hn,Pt,Ta,yt,l,"Throttled",-0,0),i);break e}Zd(a,t,sn,ql,Wr,n,hn,Pt,Ta,yt,l,null,-0,0)}}break}while(!0);qn(e)}function Zd(e,n,t,a,i,l,s,c,p,j,T,L,N,O){if(e.timeoutHandle=-1,L=n.subtreeFlags,L&8192||(L&16785408)===16785408){L={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:In},Hd(n,l,L);var G=(l&62914560)===l?Rl-on():(l&4194048)===l?Yd-on():0;if(G=tv(L,G),G!==null){nt=l,e.cancelPendingCommit=G(nm.bind(null,e,n,l,t,a,i,s,c,p,T,L,null,N,O)),Nt(e,l,s,!j);return}}nm(e,n,l,t,a,i,s,c,p)}function x0(e){for(var n=e;;){var t=n.tag;if((t===0||t===11||t===15)&&n.flags&16384&&(t=n.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var a=0;a<t.length;a++){var i=t[a],l=i.getSnapshot;i=i.value;try{if(!dn(l(),i))return!1}catch{return!1}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Nt(e,n,t,a){n&=~$r,n&=~Pt,e.suspendedLanes|=n,e.pingedLanes&=~n,a&&(e.warmLanes|=n),a=e.expirationTimes;for(var i=n;0<i;){var l=31-cn(i),s=1<<l;a[l]=-1,i&=~s}t!==0&&au(e,t,n)}function Bl(){return(me&6)===0?(Ni(0),!1):!0}function to(){if(le!==null){if(pe===0)var e=le.return;else e=le,Qn=Qt=null,xr(e),Ca=null,si=0,e=le;for(;e!==null;)Nd(e.alternate,e),e=e.return;le=null}}function za(e,n){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,B0(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),nt=0,to(),Ce=e,le=t=kn(e.current,null),re=n,pe=0,vn=null,yt=!1,_a=Ya(e,n),Fr=!1,Ta=hn=$r=Pt=St=_e=0,sn=Ci=null,Wr=!1,(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var i=31-cn(a),l=1<<i;n|=e[i],a&=~l}return et=n,ll(),t}function Kd(e,n){ee=null,w.H=pi,n===Sa||n===fl?(n=cc(),pe=3):n===sr?(n=cc(),pe=4):pe=n===Dr?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,vn=n,le===null&&(_e=1,Ol(e,Sn(n,e.current)))}function Jd(){var e=fn.current;return e===null?!0:(re&4194048)===re?En===null:(re&62914560)===re||(re&536870912)!==0?e===En:!1}function Fd(){var e=w.H;return w.H=pi,e===null?pi:e}function $d(){var e=w.A;return w.A=h0,e}function Hl(){_e=4,yt||(re&4194048)!==re&&fn.current!==null||(_a=!0),(St&134217727)===0&&(Pt&134217727)===0||Ce===null||Nt(Ce,re,hn,!1)}function ao(e,n,t){var a=me;me|=2;var i=Fd(),l=$d();(Ce!==e||re!==n)&&(ql=null,za(e,n)),n=!1;var s=_e;e:do try{if(pe!==0&&le!==null){var c=le,p=vn;switch(pe){case 8:to(),s=6;break e;case 3:case 2:case 9:case 6:fn.current===null&&(n=!0);var j=pe;if(pe=0,vn=null,La(e,c,p,j),t&&_a){s=0;break e}break;default:j=pe,pe=0,vn=null,La(e,c,p,j)}}b0(),s=_e;break}catch(T){Kd(e,T)}while(!0);return n&&e.shellSuspendCounter++,Qn=Qt=null,me=a,w.H=i,w.A=l,le===null&&(Ce=null,re=0,ll()),s}function b0(){for(;le!==null;)Wd(le)}function y0(e,n){var t=me;me|=2;var a=Fd(),i=$d();Ce!==e||re!==n?(ql=null,Ul=on()+500,za(e,n)):_a=Ya(e,n);e:do try{if(pe!==0&&le!==null){n=le;var l=vn;n:switch(pe){case 1:pe=0,vn=null,La(e,n,l,1);break;case 2:case 9:if(oc(l)){pe=0,vn=null,Pd(n);break}n=function(){pe!==2&&pe!==9||Ce!==e||(pe=7),qn(e)},l.then(n,n);break e;case 3:pe=7;break e;case 4:pe=5;break e;case 7:oc(l)?(pe=0,vn=null,Pd(n)):(pe=0,vn=null,La(e,n,l,7));break;case 5:var s=null;switch(le.tag){case 26:s=le.memoizedState;case 5:case 27:var c=le;if(s?Bm(s):c.stateNode.complete){pe=0,vn=null;var p=c.sibling;if(p!==null)le=p;else{var j=c.return;j!==null?(le=j,Il(j)):le=null}break n}}pe=0,vn=null,La(e,n,l,5);break;case 6:pe=0,vn=null,La(e,n,l,6);break;case 8:to(),_e=6;break e;default:throw Error(u(462))}}S0();break}catch(T){Kd(e,T)}while(!0);return Qn=Qt=null,w.H=a,w.A=i,me=t,le!==null?0:(Ce=null,re=0,ll(),_e)}function S0(){for(;le!==null&&!Qf();)Wd(le)}function Wd(e){var n=Cd(e.alternate,e,et);e.memoizedProps=e.pendingProps,n===null?Il(e):le=n}function Pd(e){var n=e,t=n.alternate;switch(n.tag){case 15:case 0:n=hd(t,n,n.pendingProps,n.type,void 0,re);break;case 11:n=hd(t,n,n.pendingProps,n.type.render,n.ref,re);break;case 5:xr(n);default:Nd(t,n),n=le=$u(n,et),n=Cd(t,n,et)}e.memoizedProps=e.pendingProps,n===null?Il(e):le=n}function La(e,n,t,a){Qn=Qt=null,xr(n),Ca=null,si=0;var i=n.return;try{if(u0(e,i,n,t,re)){_e=1,Ol(e,Sn(t,e.current)),le=null;return}}catch(l){if(i!==null)throw le=i,l;_e=1,Ol(e,Sn(t,e.current)),le=null;return}n.flags&32768?(ue||a===1?e=!0:_a||(re&536870912)!==0?e=!1:(yt=e=!0,(a===2||a===9||a===3||a===6)&&(a=fn.current,a!==null&&a.tag===13&&(a.flags|=16384))),em(n,e)):Il(n)}function Il(e){var n=e;do{if((n.flags&32768)!==0){em(n,yt);return}e=n.return;var t=m0(n.alternate,n,et);if(t!==null){le=t;return}if(n=n.sibling,n!==null){le=n;return}le=n=e}while(n!==null);_e===0&&(_e=5)}function em(e,n){do{var t=f0(e.alternate,e);if(t!==null){t.flags&=32767,le=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!n&&(e=e.sibling,e!==null)){le=e;return}le=e=t}while(e!==null);_e=6,le=null}function nm(e,n,t,a,i,l,s,c,p){e.cancelPendingCommit=null;do Gl();while(Be!==0);if((me&6)!==0)throw Error(u(327));if(n!==null){if(n===e.current)throw Error(u(177));if(l=n.lanes|n.childLanes,l|=Vs,ep(e,t,l,s,c,p),e===Ce&&(le=Ce=null,re=0),wa=n,jt=e,nt=t,Pr=l,eo=i,Qd=a,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,E0(Yi,function(){return sm(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||a){a=w.T,w.T=null,i=B.p,B.p=2,s=me,me|=4;try{p0(e,n,t)}finally{me=s,B.p=i,w.T=a}}Be=1,tm(),am(),im()}}function tm(){if(Be===1){Be=0;var e=jt,n=wa,t=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||t){t=w.T,w.T=null;var a=B.p;B.p=2;var i=me;me|=4;try{Ud(n,e);var l=ho,s=ku(e.containerInfo),c=l.focusedElem,p=l.selectionRange;if(s!==c&&c&&c.ownerDocument&&Gu(c.ownerDocument.documentElement,c)){if(p!==null&&Is(c)){var j=p.start,T=p.end;if(T===void 0&&(T=j),"selectionStart"in c)c.selectionStart=j,c.selectionEnd=Math.min(T,c.value.length);else{var L=c.ownerDocument||document,N=L&&L.defaultView||window;if(N.getSelection){var O=N.getSelection(),G=c.textContent.length,K=Math.min(p.start,G),be=p.end===void 0?K:Math.min(p.end,G);!O.extend&&K>be&&(s=be,be=K,K=s);var S=Iu(c,K),x=Iu(c,be);if(S&&x&&(O.rangeCount!==1||O.anchorNode!==S.node||O.anchorOffset!==S.offset||O.focusNode!==x.node||O.focusOffset!==x.offset)){var C=L.createRange();C.setStart(S.node,S.offset),O.removeAllRanges(),K>be?(O.addRange(C),O.extend(x.node,x.offset)):(C.setEnd(x.node,x.offset),O.addRange(C))}}}}for(L=[],O=c;O=O.parentNode;)O.nodeType===1&&L.push({element:O,left:O.scrollLeft,top:O.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<L.length;c++){var z=L[c];z.element.scrollLeft=z.left,z.element.scrollTop=z.top}}Pl=!!vo,ho=vo=null}finally{me=i,B.p=a,w.T=t}}e.current=n,Be=2}}function am(){if(Be===2){Be=0;var e=jt,n=wa,t=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||t){t=w.T,w.T=null;var a=B.p;B.p=2;var i=me;me|=4;try{wd(e,n.alternate,n)}finally{me=i,B.p=a,w.T=t}}Be=3}}function im(){if(Be===4||Be===3){Be=0,Vf();var e=jt,n=wa,t=nt,a=Qd;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Be=5:(Be=0,wa=jt=null,lm(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(Ct=null),Ss(t),n=n.stateNode,un&&typeof un.onCommitFiberRoot=="function")try{un.onCommitFiberRoot(ka,n,void 0,(n.current.flags&128)===128)}catch{}if(a!==null){n=w.T,i=B.p,B.p=2,w.T=null;try{for(var l=e.onRecoverableError,s=0;s<a.length;s++){var c=a[s];l(c.value,{componentStack:c.stack})}}finally{w.T=n,B.p=i}}(nt&3)!==0&&Gl(),qn(e),i=e.pendingLanes,(t&261930)!==0&&(i&42)!==0?e===no?ji++:(ji=0,no=e):ji=0,Ni(0)}}function lm(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ii(n)))}function Gl(){return tm(),am(),im(),sm()}function sm(){if(Be!==5)return!1;var e=jt,n=Pr;Pr=0;var t=Ss(nt),a=w.T,i=B.p;try{B.p=32>t?32:t,w.T=null,t=eo,eo=null;var l=jt,s=nt;if(Be=0,wa=jt=null,nt=0,(me&6)!==0)throw Error(u(331));var c=me;if(me|=4,Gd(l.current),Bd(l,l.current,s,t),me=c,Ni(0,!1),un&&typeof un.onPostCommitFiberRoot=="function")try{un.onPostCommitFiberRoot(ka,l)}catch{}return!0}finally{B.p=i,w.T=a,lm(e,n)}}function rm(e,n,t){n=Sn(t,n),n=Lr(e.stateNode,n,2),e=ht(e,n,2),e!==null&&(Qa(e,2),qn(e))}function ve(e,n,t){if(e.tag===3)rm(e,e,t);else for(;n!==null;){if(n.tag===3){rm(n,e,t);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Ct===null||!Ct.has(a))){e=Sn(t,e),t=od(2),a=ht(n,t,2),a!==null&&(ud(t,a,n,e),Qa(a,2),qn(a));break}}n=n.return}}function io(e,n,t){var a=e.pingCache;if(a===null){a=e.pingCache=new g0;var i=new Set;a.set(n,i)}else i=a.get(n),i===void 0&&(i=new Set,a.set(n,i));i.has(t)||(Fr=!0,i.add(t),e=C0.bind(null,e,n,t),n.then(e,e))}function C0(e,n,t){var a=e.pingCache;a!==null&&a.delete(n),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,Ce===e&&(re&t)===t&&(_e===4||_e===3&&(re&62914560)===re&&300>on()-Rl?(me&2)===0&&za(e,0):$r|=t,Ta===re&&(Ta=0)),qn(e)}function om(e,n){n===0&&(n=tu()),e=Gt(e,n),e!==null&&(Qa(e,n),qn(e))}function j0(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),om(e,t)}function N0(e,n){var t=0;switch(e.tag){case 31:case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(u(314))}a!==null&&a.delete(n),om(e,t)}function E0(e,n){return gs(e,n)}var kl=null,Da=null,lo=!1,Yl=!1,so=!1,Et=0;function qn(e){e!==Da&&e.next===null&&(Da===null?kl=Da=e:Da=Da.next=e),Yl=!0,lo||(lo=!0,O0())}function Ni(e,n){if(!so&&Yl){so=!0;do for(var t=!1,a=kl;a!==null;){if(e!==0){var i=a.pendingLanes;if(i===0)var l=0;else{var s=a.suspendedLanes,c=a.pingedLanes;l=(1<<31-cn(42|e)+1)-1,l&=i&~(s&~c),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(t=!0,mm(a,l))}else l=re,l=Zi(a,a===Ce?l:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(l&3)===0||Ya(a,l)||(t=!0,mm(a,l));a=a.next}while(t);so=!1}}function M0(){um()}function um(){Yl=lo=!1;var e=0;Et!==0&&q0()&&(e=Et);for(var n=on(),t=null,a=kl;a!==null;){var i=a.next,l=cm(a,n);l===0?(a.next=null,t===null?kl=i:t.next=i,i===null&&(Da=t)):(t=a,(e!==0||(l&3)!==0)&&(Yl=!0)),a=i}Be!==0&&Be!==5||Ni(e),Et!==0&&(Et=0)}function cm(e,n){for(var t=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes&-62914561;0<l;){var s=31-cn(l),c=1<<s,p=i[s];p===-1?((c&t)===0||(c&a)!==0)&&(i[s]=Pf(c,n)):p<=n&&(e.expiredLanes|=c),l&=~c}if(n=Ce,t=re,t=Zi(e,e===n?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,t===0||e===n&&(pe===2||pe===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&xs(a),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||Ya(e,t)){if(n=t&-t,n===e.callbackPriority)return n;switch(a!==null&&xs(a),Ss(t)){case 2:case 8:t=eu;break;case 32:t=Yi;break;case 268435456:t=nu;break;default:t=Yi}return a=dm.bind(null,e),t=gs(t,a),e.callbackPriority=n,e.callbackNode=t,n}return a!==null&&a!==null&&xs(a),e.callbackPriority=2,e.callbackNode=null,2}function dm(e,n){if(Be!==0&&Be!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(Gl()&&e.callbackNode!==t)return null;var a=re;return a=Zi(e,e===Ce?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Xd(e,a,n),cm(e,on()),e.callbackNode!=null&&e.callbackNode===t?dm.bind(null,e):null)}function mm(e,n){if(Gl())return null;Xd(e,n,!0)}function O0(){H0(function(){(me&6)!==0?gs(Po,M0):um()})}function ro(){if(Et===0){var e=ba;e===0&&(e=Qi,Qi<<=1,(Qi&261888)===0&&(Qi=256)),Et=e}return Et}function fm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:$i(""+e)}function pm(e,n){var t=n.ownerDocument.createElement("input");return t.name=n.name,t.value=n.value,e.id&&t.setAttribute("form",e.id),n.parentNode.insertBefore(t,n),e=new FormData(e),t.parentNode.removeChild(t),e}function A0(e,n,t,a,i){if(n==="submit"&&t&&t.stateNode===i){var l=fm((i[en]||null).action),s=a.submitter;s&&(n=(n=s[en]||null)?fm(n.formAction):s.getAttribute("formAction"),n!==null&&(l=n,s=null));var c=new nl("action","action",null,a,i);e.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Et!==0){var p=s?pm(i,s):new FormData(i);Or(t,{pending:!0,data:p,method:i.method,action:l},null,p)}}else typeof l=="function"&&(c.preventDefault(),p=s?pm(i,s):new FormData(i),Or(t,{pending:!0,data:p,method:i.method,action:l},l,p))},currentTarget:i}]})}}for(var oo=0;oo<Qs.length;oo++){var uo=Qs[oo],_0=uo.toLowerCase(),T0=uo[0].toUpperCase()+uo.slice(1);Tn(_0,"on"+T0)}Tn(Vu,"onAnimationEnd"),Tn(Xu,"onAnimationIteration"),Tn(Zu,"onAnimationStart"),Tn("dblclick","onDoubleClick"),Tn("focusin","onFocus"),Tn("focusout","onBlur"),Tn(Xp,"onTransitionRun"),Tn(Zp,"onTransitionStart"),Tn(Kp,"onTransitionCancel"),Tn(Ku,"onTransitionEnd"),la("onMouseEnter",["mouseout","mouseover"]),la("onMouseLeave",["mouseout","mouseover"]),la("onPointerEnter",["pointerout","pointerover"]),la("onPointerLeave",["pointerout","pointerover"]),qt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),qt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),qt("onBeforeInput",["compositionend","keypress","textInput","paste"]),qt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),qt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),qt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ei="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),w0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ei));function vm(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var a=e[t],i=a.event;a=a.listeners;e:{var l=void 0;if(n)for(var s=a.length-1;0<=s;s--){var c=a[s],p=c.instance,j=c.currentTarget;if(c=c.listener,p!==l&&i.isPropagationStopped())break e;l=c,i.currentTarget=j;try{l(i)}catch(T){il(T)}i.currentTarget=null,l=p}else for(s=0;s<a.length;s++){if(c=a[s],p=c.instance,j=c.currentTarget,c=c.listener,p!==l&&i.isPropagationStopped())break e;l=c,i.currentTarget=j;try{l(i)}catch(T){il(T)}i.currentTarget=null,l=p}}}}function se(e,n){var t=n[Cs];t===void 0&&(t=n[Cs]=new Set);var a=e+"__bubble";t.has(a)||(hm(n,e,2,!1),t.add(a))}function co(e,n,t){var a=0;n&&(a|=4),hm(t,e,a,n)}var Ql="_reactListening"+Math.random().toString(36).slice(2);function mo(e){if(!e[Ql]){e[Ql]=!0,uu.forEach(function(t){t!=="selectionchange"&&(w0.has(t)||co(t,!1,e),co(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ql]||(n[Ql]=!0,co("selectionchange",!1,n))}}function hm(e,n,t,a){switch(Vm(n)){case 2:var i=lv;break;case 8:i=sv;break;default:i=Oo}t=i.bind(null,n,t,e),i=void 0,!ws||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function fo(e,n,t,a,i){var l=a;if((n&1)===0&&(n&2)===0&&a!==null)e:for(;;){if(a===null)return;var s=a.tag;if(s===3||s===4){var c=a.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=a.return;s!==null;){var p=s.tag;if((p===3||p===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=ta(c),s===null)return;if(p=s.tag,p===5||p===6||p===26||p===27){a=l=s;continue e}c=c.parentNode}}a=a.return}Su(function(){var j=l,T=_s(t),L=[];e:{var N=Ju.get(e);if(N!==void 0){var O=nl,G=e;switch(e){case"keypress":if(Pi(t)===0)break e;case"keydown":case"keyup":O=Np;break;case"focusin":G="focus",O=Rs;break;case"focusout":G="blur",O=Rs;break;case"beforeblur":case"afterblur":O=Rs;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=Nu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=mp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=Op;break;case Vu:case Xu:case Zu:O=vp;break;case Ku:O=_p;break;case"scroll":case"scrollend":O=cp;break;case"wheel":O=wp;break;case"copy":case"cut":case"paste":O=gp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=Mu;break;case"toggle":case"beforetoggle":O=Lp}var K=(n&4)!==0,be=!K&&(e==="scroll"||e==="scrollend"),S=K?N!==null?N+"Capture":null:N;K=[];for(var x=j,C;x!==null;){var z=x;if(C=z.stateNode,z=z.tag,z!==5&&z!==26&&z!==27||C===null||S===null||(z=Za(x,S),z!=null&&K.push(Mi(x,z,C))),be)break;x=x.return}0<K.length&&(N=new O(N,G,null,t,T),L.push({event:N,listeners:K}))}}if((n&7)===0){e:{if(N=e==="mouseover"||e==="pointerover",O=e==="mouseout"||e==="pointerout",N&&t!==As&&(G=t.relatedTarget||t.fromElement)&&(ta(G)||G[na]))break e;if((O||N)&&(N=T.window===T?T:(N=T.ownerDocument)?N.defaultView||N.parentWindow:window,O?(G=t.relatedTarget||t.toElement,O=j,G=G?ta(G):null,G!==null&&(be=f(G),K=G.tag,G!==be||K!==5&&K!==27&&K!==6)&&(G=null)):(O=null,G=j),O!==G)){if(K=Nu,z="onMouseLeave",S="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(K=Mu,z="onPointerLeave",S="onPointerEnter",x="pointer"),be=O==null?N:Xa(O),C=G==null?N:Xa(G),N=new K(z,x+"leave",O,t,T),N.target=be,N.relatedTarget=C,z=null,ta(T)===j&&(K=new K(S,x+"enter",G,t,T),K.target=C,K.relatedTarget=be,z=K),be=z,O&&G)n:{for(K=z0,S=O,x=G,C=0,z=S;z;z=K(z))C++;z=0;for(var X=x;X;X=K(X))z++;for(;0<C-z;)S=K(S),C--;for(;0<z-C;)x=K(x),z--;for(;C--;){if(S===x||x!==null&&S===x.alternate){K=S;break n}S=K(S),x=K(x)}K=null}else K=null;O!==null&&gm(L,N,O,K,!1),G!==null&&be!==null&&gm(L,be,G,K,!0)}}e:{if(N=j?Xa(j):window,O=N.nodeName&&N.nodeName.toLowerCase(),O==="select"||O==="input"&&N.type==="file")var ce=Du;else if(zu(N))if(Ru)ce=Yp;else{ce=Gp;var V=Ip}else O=N.nodeName,!O||O.toLowerCase()!=="input"||N.type!=="checkbox"&&N.type!=="radio"?j&&Os(j.elementType)&&(ce=Du):ce=kp;if(ce&&(ce=ce(e,j))){Lu(L,ce,t,T);break e}V&&V(e,N,j),e==="focusout"&&j&&N.type==="number"&&j.memoizedProps.value!=null&&Ms(N,"number",N.value)}switch(V=j?Xa(j):window,e){case"focusin":(zu(V)||V.contentEditable==="true")&&(da=V,Gs=j,ni=null);break;case"focusout":ni=Gs=da=null;break;case"mousedown":ks=!0;break;case"contextmenu":case"mouseup":case"dragend":ks=!1,Yu(L,t,T);break;case"selectionchange":if(Vp)break;case"keydown":case"keyup":Yu(L,t,T)}var te;if(qs)e:{switch(e){case"compositionstart":var oe="onCompositionStart";break e;case"compositionend":oe="onCompositionEnd";break e;case"compositionupdate":oe="onCompositionUpdate";break e}oe=void 0}else ca?Tu(e,t)&&(oe="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(oe="onCompositionStart");oe&&(Ou&&t.locale!=="ko"&&(ca||oe!=="onCompositionStart"?oe==="onCompositionEnd"&&ca&&(te=Cu()):(ut=T,zs="value"in ut?ut.value:ut.textContent,ca=!0)),V=Vl(j,oe),0<V.length&&(oe=new Eu(oe,e,null,t,T),L.push({event:oe,listeners:V}),te?oe.data=te:(te=wu(t),te!==null&&(oe.data=te)))),(te=Rp?Up(e,t):qp(e,t))&&(oe=Vl(j,"onBeforeInput"),0<oe.length&&(V=new Eu("onBeforeInput","beforeinput",null,t,T),L.push({event:V,listeners:oe}),V.data=te)),A0(L,e,j,t,T)}vm(L,n)})}function Mi(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Vl(e,n){for(var t=n+"Capture",a=[];e!==null;){var i=e,l=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||l===null||(i=Za(e,t),i!=null&&a.unshift(Mi(e,i,l)),i=Za(e,n),i!=null&&a.push(Mi(e,i,l))),e.tag===3)return a;e=e.return}return[]}function z0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function gm(e,n,t,a,i){for(var l=n._reactName,s=[];t!==null&&t!==a;){var c=t,p=c.alternate,j=c.stateNode;if(c=c.tag,p!==null&&p===a)break;c!==5&&c!==26&&c!==27||j===null||(p=j,i?(j=Za(t,l),j!=null&&s.unshift(Mi(t,j,p))):i||(j=Za(t,l),j!=null&&s.push(Mi(t,j,p)))),t=t.return}s.length!==0&&e.push({event:n,listeners:s})}var L0=/\r\n?/g,D0=/\u0000|\uFFFD/g;function xm(e){return(typeof e=="string"?e:""+e).replace(L0,`
`).replace(D0,"")}function bm(e,n){return n=xm(n),xm(e)===n}function xe(e,n,t,a,i,l){switch(t){case"children":typeof a=="string"?n==="body"||n==="textarea"&&a===""||ra(e,a):(typeof a=="number"||typeof a=="bigint")&&n!=="body"&&ra(e,""+a);break;case"className":Ji(e,"class",a);break;case"tabIndex":Ji(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Ji(e,t,a);break;case"style":bu(e,a,l);break;case"data":if(n!=="object"){Ji(e,"data",a);break}case"src":case"href":if(a===""&&(n!=="a"||t!=="href")){e.removeAttribute(t);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=$i(""+a),e.setAttribute(t,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(t==="formAction"?(n!=="input"&&xe(e,n,"name",i.name,i,null),xe(e,n,"formEncType",i.formEncType,i,null),xe(e,n,"formMethod",i.formMethod,i,null),xe(e,n,"formTarget",i.formTarget,i,null)):(xe(e,n,"encType",i.encType,i,null),xe(e,n,"method",i.method,i,null),xe(e,n,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=$i(""+a),e.setAttribute(t,a);break;case"onClick":a!=null&&(e.onclick=In);break;case"onScroll":a!=null&&se("scroll",e);break;case"onScrollEnd":a!=null&&se("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(t=a.__html,t!=null){if(i.children!=null)throw Error(u(60));e.innerHTML=t}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}t=$i(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,""+a):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":a===!0?e.setAttribute(t,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,a):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(t,a):e.removeAttribute(t);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(t):e.setAttribute(t,a);break;case"popover":se("beforetoggle",e),se("toggle",e),Ki(e,"popover",a);break;case"xlinkActuate":Hn(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Hn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Hn(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Hn(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Hn(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Hn(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Hn(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Hn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Hn(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Ki(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=op.get(t)||t,Ki(e,t,a))}}function po(e,n,t,a,i,l){switch(t){case"style":bu(e,a,l);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(t=a.__html,t!=null){if(i.children!=null)throw Error(u(60));e.innerHTML=t}}break;case"children":typeof a=="string"?ra(e,a):(typeof a=="number"||typeof a=="bigint")&&ra(e,""+a);break;case"onScroll":a!=null&&se("scroll",e);break;case"onScrollEnd":a!=null&&se("scrollend",e);break;case"onClick":a!=null&&(e.onclick=In);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!cu.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(i=t.endsWith("Capture"),n=t.slice(2,i?t.length-7:void 0),l=e[en]||null,l=l!=null?l[t]:null,typeof l=="function"&&e.removeEventListener(n,l,i),typeof a=="function")){typeof l!="function"&&l!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(n,a,i);break e}t in e?e[t]=a:a===!0?e.setAttribute(t,""):Ki(e,t,a)}}}function Ke(e,n,t){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":se("error",e),se("load",e);var a=!1,i=!1,l;for(l in t)if(t.hasOwnProperty(l)){var s=t[l];if(s!=null)switch(l){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,n));default:xe(e,n,l,s,t,null)}}i&&xe(e,n,"srcSet",t.srcSet,t,null),a&&xe(e,n,"src",t.src,t,null);return;case"input":se("invalid",e);var c=l=s=i=null,p=null,j=null;for(a in t)if(t.hasOwnProperty(a)){var T=t[a];if(T!=null)switch(a){case"name":i=T;break;case"type":s=T;break;case"checked":p=T;break;case"defaultChecked":j=T;break;case"value":l=T;break;case"defaultValue":c=T;break;case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(u(137,n));break;default:xe(e,n,a,T,t,null)}}vu(e,l,c,p,j,s,i,!1);return;case"select":se("invalid",e),a=s=l=null;for(i in t)if(t.hasOwnProperty(i)&&(c=t[i],c!=null))switch(i){case"value":l=c;break;case"defaultValue":s=c;break;case"multiple":a=c;default:xe(e,n,i,c,t,null)}n=l,t=s,e.multiple=!!a,n!=null?sa(e,!!a,n,!1):t!=null&&sa(e,!!a,t,!0);return;case"textarea":se("invalid",e),l=i=a=null;for(s in t)if(t.hasOwnProperty(s)&&(c=t[s],c!=null))switch(s){case"value":a=c;break;case"defaultValue":i=c;break;case"children":l=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(u(91));break;default:xe(e,n,s,c,t,null)}gu(e,a,i,l);return;case"option":for(p in t)if(t.hasOwnProperty(p)&&(a=t[p],a!=null))switch(p){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:xe(e,n,p,a,t,null)}return;case"dialog":se("beforetoggle",e),se("toggle",e),se("cancel",e),se("close",e);break;case"iframe":case"object":se("load",e);break;case"video":case"audio":for(a=0;a<Ei.length;a++)se(Ei[a],e);break;case"image":se("error",e),se("load",e);break;case"details":se("toggle",e);break;case"embed":case"source":case"link":se("error",e),se("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in t)if(t.hasOwnProperty(j)&&(a=t[j],a!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,n));default:xe(e,n,j,a,t,null)}return;default:if(Os(n)){for(T in t)t.hasOwnProperty(T)&&(a=t[T],a!==void 0&&po(e,n,T,a,t,void 0));return}}for(c in t)t.hasOwnProperty(c)&&(a=t[c],a!=null&&xe(e,n,c,a,t,null))}function R0(e,n,t,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,l=null,s=null,c=null,p=null,j=null,T=null;for(O in t){var L=t[O];if(t.hasOwnProperty(O)&&L!=null)switch(O){case"checked":break;case"value":break;case"defaultValue":p=L;default:a.hasOwnProperty(O)||xe(e,n,O,null,a,L)}}for(var N in a){var O=a[N];if(L=t[N],a.hasOwnProperty(N)&&(O!=null||L!=null))switch(N){case"type":l=O;break;case"name":i=O;break;case"checked":j=O;break;case"defaultChecked":T=O;break;case"value":s=O;break;case"defaultValue":c=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(u(137,n));break;default:O!==L&&xe(e,n,N,O,a,L)}}Es(e,s,c,p,j,T,l,i);return;case"select":O=s=c=N=null;for(l in t)if(p=t[l],t.hasOwnProperty(l)&&p!=null)switch(l){case"value":break;case"multiple":O=p;default:a.hasOwnProperty(l)||xe(e,n,l,null,a,p)}for(i in a)if(l=a[i],p=t[i],a.hasOwnProperty(i)&&(l!=null||p!=null))switch(i){case"value":N=l;break;case"defaultValue":c=l;break;case"multiple":s=l;default:l!==p&&xe(e,n,i,l,a,p)}n=c,t=s,a=O,N!=null?sa(e,!!t,N,!1):!!a!=!!t&&(n!=null?sa(e,!!t,n,!0):sa(e,!!t,t?[]:"",!1));return;case"textarea":O=N=null;for(c in t)if(i=t[c],t.hasOwnProperty(c)&&i!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:xe(e,n,c,null,a,i)}for(s in a)if(i=a[s],l=t[s],a.hasOwnProperty(s)&&(i!=null||l!=null))switch(s){case"value":N=i;break;case"defaultValue":O=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(u(91));break;default:i!==l&&xe(e,n,s,i,a,l)}hu(e,N,O);return;case"option":for(var G in t)if(N=t[G],t.hasOwnProperty(G)&&N!=null&&!a.hasOwnProperty(G))switch(G){case"selected":e.selected=!1;break;default:xe(e,n,G,null,a,N)}for(p in a)if(N=a[p],O=t[p],a.hasOwnProperty(p)&&N!==O&&(N!=null||O!=null))switch(p){case"selected":e.selected=N&&typeof N!="function"&&typeof N!="symbol";break;default:xe(e,n,p,N,a,O)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var K in t)N=t[K],t.hasOwnProperty(K)&&N!=null&&!a.hasOwnProperty(K)&&xe(e,n,K,null,a,N);for(j in a)if(N=a[j],O=t[j],a.hasOwnProperty(j)&&N!==O&&(N!=null||O!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(u(137,n));break;default:xe(e,n,j,N,a,O)}return;default:if(Os(n)){for(var be in t)N=t[be],t.hasOwnProperty(be)&&N!==void 0&&!a.hasOwnProperty(be)&&po(e,n,be,void 0,a,N);for(T in a)N=a[T],O=t[T],!a.hasOwnProperty(T)||N===O||N===void 0&&O===void 0||po(e,n,T,N,a,O);return}}for(var S in t)N=t[S],t.hasOwnProperty(S)&&N!=null&&!a.hasOwnProperty(S)&&xe(e,n,S,null,a,N);for(L in a)N=a[L],O=t[L],!a.hasOwnProperty(L)||N===O||N==null&&O==null||xe(e,n,L,N,a,O)}function ym(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function U0(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,t=performance.getEntriesByType("resource"),a=0;a<t.length;a++){var i=t[a],l=i.transferSize,s=i.initiatorType,c=i.duration;if(l&&c&&ym(s)){for(s=0,c=i.responseEnd,a+=1;a<t.length;a++){var p=t[a],j=p.startTime;if(j>c)break;var T=p.transferSize,L=p.initiatorType;T&&ym(L)&&(p=p.responseEnd,s+=T*(p<c?1:(c-j)/(p-j)))}if(--a,n+=8*(l+s)/(i.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var vo=null,ho=null;function Xl(e){return e.nodeType===9?e:e.ownerDocument}function Sm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Cm(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function go(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var xo=null;function q0(){var e=window.event;return e&&e.type==="popstate"?e===xo?!1:(xo=e,!0):(xo=null,!1)}var jm=typeof setTimeout=="function"?setTimeout:void 0,B0=typeof clearTimeout=="function"?clearTimeout:void 0,Nm=typeof Promise=="function"?Promise:void 0,H0=typeof queueMicrotask=="function"?queueMicrotask:typeof Nm<"u"?function(e){return Nm.resolve(null).then(e).catch(I0)}:jm;function I0(e){setTimeout(function(){throw e})}function Mt(e){return e==="head"}function Em(e,n){var t=n,a=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"||t==="/&"){if(a===0){e.removeChild(i),Ba(n);return}a--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")a++;else if(t==="html")Oi(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,Oi(t);for(var l=t.firstChild;l;){var s=l.nextSibling,c=l.nodeName;l[Va]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&l.rel.toLowerCase()==="stylesheet"||t.removeChild(l),l=s}}else t==="body"&&Oi(e.ownerDocument.body);t=i}while(t);Ba(n)}function Mm(e,n){var t=e;e=0;do{var a=t.nextSibling;if(t.nodeType===1?n?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(n?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=a}while(t)}function bo(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var t=n;switch(n=n.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":bo(t),js(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function G0(e,n,t,a){for(;e.nodeType===1;){var i=t;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Va])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(l=e.getAttribute("rel"),l==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(l!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(l=e.getAttribute("src"),(l!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&l&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var l=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===l)return e}else return e;if(e=Mn(e.nextSibling),e===null)break}return null}function k0(e,n,t){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Mn(e.nextSibling),e===null))return null;return e}function Om(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Mn(e.nextSibling),e===null))return null;return e}function yo(e){return e.data==="$?"||e.data==="$~"}function So(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Y0(e,n){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||t.readyState!=="loading")n();else{var a=function(){n(),t.removeEventListener("DOMContentLoaded",a)};t.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Mn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Co=null;function Am(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(n===0)return Mn(e.nextSibling);n--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||n++}e=e.nextSibling}return null}function _m(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(n===0)return e;n--}else t!=="/$"&&t!=="/&"||n++}e=e.previousSibling}return null}function Tm(e,n,t){switch(n=Xl(t),e){case"html":if(e=n.documentElement,!e)throw Error(u(452));return e;case"head":if(e=n.head,!e)throw Error(u(453));return e;case"body":if(e=n.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function Oi(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);js(e)}var On=new Map,wm=new Set;function Zl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var tt=B.d;B.d={f:Q0,r:V0,D:X0,C:Z0,L:K0,m:J0,X:$0,S:F0,M:W0};function Q0(){var e=tt.f(),n=Bl();return e||n}function V0(e){var n=aa(e);n!==null&&n.tag===5&&n.type==="form"?Kc(n):tt.r(e)}var Ra=typeof document>"u"?null:document;function zm(e,n,t){var a=Ra;if(a&&typeof n=="string"&&n){var i=bn(n);i='link[rel="'+e+'"][href="'+i+'"]',typeof t=="string"&&(i+='[crossorigin="'+t+'"]'),wm.has(i)||(wm.add(i),e={rel:e,crossOrigin:t,href:n},a.querySelector(i)===null&&(n=a.createElement("link"),Ke(n,"link",e),Ie(n),a.head.appendChild(n)))}}function X0(e){tt.D(e),zm("dns-prefetch",e,null)}function Z0(e,n){tt.C(e,n),zm("preconnect",e,n)}function K0(e,n,t){tt.L(e,n,t);var a=Ra;if(a&&e&&n){var i='link[rel="preload"][as="'+bn(n)+'"]';n==="image"&&t&&t.imageSrcSet?(i+='[imagesrcset="'+bn(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(i+='[imagesizes="'+bn(t.imageSizes)+'"]')):i+='[href="'+bn(e)+'"]';var l=i;switch(n){case"style":l=Ua(e);break;case"script":l=qa(e)}On.has(l)||(e=E({rel:"preload",href:n==="image"&&t&&t.imageSrcSet?void 0:e,as:n},t),On.set(l,e),a.querySelector(i)!==null||n==="style"&&a.querySelector(Ai(l))||n==="script"&&a.querySelector(_i(l))||(n=a.createElement("link"),Ke(n,"link",e),Ie(n),a.head.appendChild(n)))}}function J0(e,n){tt.m(e,n);var t=Ra;if(t&&e){var a=n&&typeof n.as=="string"?n.as:"script",i='link[rel="modulepreload"][as="'+bn(a)+'"][href="'+bn(e)+'"]',l=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=qa(e)}if(!On.has(l)&&(e=E({rel:"modulepreload",href:e},n),On.set(l,e),t.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(_i(l)))return}a=t.createElement("link"),Ke(a,"link",e),Ie(a),t.head.appendChild(a)}}}function F0(e,n,t){tt.S(e,n,t);var a=Ra;if(a&&e){var i=ia(a).hoistableStyles,l=Ua(e);n=n||"default";var s=i.get(l);if(!s){var c={loading:0,preload:null};if(s=a.querySelector(Ai(l)))c.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":n},t),(t=On.get(l))&&jo(e,t);var p=s=a.createElement("link");Ie(p),Ke(p,"link",e),p._p=new Promise(function(j,T){p.onload=j,p.onerror=T}),p.addEventListener("load",function(){c.loading|=1}),p.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Kl(s,n,a)}s={type:"stylesheet",instance:s,count:1,state:c},i.set(l,s)}}}function $0(e,n){tt.X(e,n);var t=Ra;if(t&&e){var a=ia(t).hoistableScripts,i=qa(e),l=a.get(i);l||(l=t.querySelector(_i(i)),l||(e=E({src:e,async:!0},n),(n=On.get(i))&&No(e,n),l=t.createElement("script"),Ie(l),Ke(l,"link",e),t.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},a.set(i,l))}}function W0(e,n){tt.M(e,n);var t=Ra;if(t&&e){var a=ia(t).hoistableScripts,i=qa(e),l=a.get(i);l||(l=t.querySelector(_i(i)),l||(e=E({src:e,async:!0,type:"module"},n),(n=On.get(i))&&No(e,n),l=t.createElement("script"),Ie(l),Ke(l,"link",e),t.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},a.set(i,l))}}function Lm(e,n,t,a){var i=(i=ie.current)?Zl(i):null;if(!i)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(n=Ua(t.href),t=ia(i).hoistableStyles,a=t.get(n),a||(a={type:"style",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=Ua(t.href);var l=ia(i).hoistableStyles,s=l.get(e);if(s||(i=i.ownerDocument||i,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(e,s),(l=i.querySelector(Ai(e)))&&!l._p&&(s.instance=l,s.state.loading=5),On.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},On.set(e,t),l||P0(i,e,t,s.state))),n&&a===null)throw Error(u(528,""));return s}if(n&&a!==null)throw Error(u(529,""));return null;case"script":return n=t.async,t=t.src,typeof t=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=qa(t),t=ia(i).hoistableScripts,a=t.get(n),a||(a={type:"script",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function Ua(e){return'href="'+bn(e)+'"'}function Ai(e){return'link[rel="stylesheet"]['+e+"]"}function Dm(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function P0(e,n,t,a){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?a.loading=1:(n=e.createElement("link"),a.preload=n,n.addEventListener("load",function(){return a.loading|=1}),n.addEventListener("error",function(){return a.loading|=2}),Ke(n,"link",t),Ie(n),e.head.appendChild(n))}function qa(e){return'[src="'+bn(e)+'"]'}function _i(e){return"script[async]"+e}function Rm(e,n,t){if(n.count++,n.instance===null)switch(n.type){case"style":var a=e.querySelector('style[data-href~="'+bn(t.href)+'"]');if(a)return n.instance=a,Ie(a),a;var i=E({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Ie(a),Ke(a,"style",i),Kl(a,t.precedence,e),n.instance=a;case"stylesheet":i=Ua(t.href);var l=e.querySelector(Ai(i));if(l)return n.state.loading|=4,n.instance=l,Ie(l),l;a=Dm(t),(i=On.get(i))&&jo(a,i),l=(e.ownerDocument||e).createElement("link"),Ie(l);var s=l;return s._p=new Promise(function(c,p){s.onload=c,s.onerror=p}),Ke(l,"link",a),n.state.loading|=4,Kl(l,t.precedence,e),n.instance=l;case"script":return l=qa(t.src),(i=e.querySelector(_i(l)))?(n.instance=i,Ie(i),i):(a=t,(i=On.get(l))&&(a=E({},t),No(a,i)),e=e.ownerDocument||e,i=e.createElement("script"),Ie(i),Ke(i,"link",a),e.head.appendChild(i),n.instance=i);case"void":return null;default:throw Error(u(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(a=n.instance,n.state.loading|=4,Kl(a,t.precedence,e));return n.instance}function Kl(e,n,t){for(var a=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,l=i,s=0;s<a.length;s++){var c=a[s];if(c.dataset.precedence===n)l=c;else if(l!==i)break}l?l.parentNode.insertBefore(e,l.nextSibling):(n=t.nodeType===9?t.head:t,n.insertBefore(e,n.firstChild))}function jo(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function No(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Jl=null;function Um(e,n,t){if(Jl===null){var a=new Map,i=Jl=new Map;i.set(t,a)}else i=Jl,a=i.get(t),a||(a=new Map,i.set(t,a));if(a.has(e))return a;for(a.set(e,null),t=t.getElementsByTagName(e),i=0;i<t.length;i++){var l=t[i];if(!(l[Va]||l[Qe]||e==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var s=l.getAttribute(n)||"";s=e+s;var c=a.get(s);c?c.push(l):a.set(s,[l])}}return a}function qm(e,n,t){e=e.ownerDocument||e,e.head.insertBefore(t,n==="title"?e.querySelector("head > title"):null)}function ev(e,n,t){if(t===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Bm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function nv(e,n,t,a){if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=Ua(a.href),l=n.querySelector(Ai(i));if(l){n=l._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Fl.bind(e),n.then(e,e)),t.state.loading|=4,t.instance=l,Ie(l);return}l=n.ownerDocument||n,a=Dm(a),(i=On.get(i))&&jo(a,i),l=l.createElement("link"),Ie(l);var s=l;s._p=new Promise(function(c,p){s.onload=c,s.onerror=p}),Ke(l,"link",a),t.instance=l}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,n),(n=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=Fl.bind(e),n.addEventListener("load",t),n.addEventListener("error",t))}}var Eo=0;function tv(e,n){return e.stylesheets&&e.count===0&&Wl(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var a=setTimeout(function(){if(e.stylesheets&&Wl(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4+n);0<e.imgBytes&&Eo===0&&(Eo=62500*U0());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Wl(e,e.stylesheets),e.unsuspend)){var l=e.unsuspend;e.unsuspend=null,l()}},(e.imgBytes>Eo?50:800)+n);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(i)}}:null}function Fl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Wl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var $l=null;function Wl(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,$l=new Map,n.forEach(av,e),$l=null,Fl.call(e))}function av(e,n){if(!(n.state.loading&4)){var t=$l.get(e);if(t)var a=t.get(null);else{t=new Map,$l.set(e,t);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<i.length;l++){var s=i[l];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(t.set(s.dataset.precedence,s),a=s)}a&&t.set(null,a)}i=n.instance,s=i.getAttribute("data-precedence"),l=t.get(s)||a,l===a&&t.set(null,i),t.set(s,i),this.count++,a=Fl.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),l?l.parentNode.insertBefore(i,l.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),n.state.loading|=4}}var Ti={$$typeof:q,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function iv(e,n,t,a,i,l,s,c,p){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=bs(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bs(0),this.hiddenUpdates=bs(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=l,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=p,this.incompleteTransitions=new Map}function Hm(e,n,t,a,i,l,s,c,p,j,T,L){return e=new iv(e,n,t,s,p,j,T,L,c),n=1,l===!0&&(n|=24),l=mn(3,null,null,n),e.current=l,l.stateNode=e,n=ar(),n.refCount++,e.pooledCache=n,n.refCount++,l.memoizedState={element:a,isDehydrated:t,cache:n},rr(l),e}function Im(e){return e?(e=pa,e):pa}function Gm(e,n,t,a,i,l){i=Im(i),a.context===null?a.context=i:a.pendingContext=i,a=vt(n),a.payload={element:t},l=l===void 0?null:l,l!==null&&(a.callback=l),t=ht(e,a,n),t!==null&&(rn(t,e,n),oi(t,e,n))}function km(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Mo(e,n){km(e,n),(e=e.alternate)&&km(e,n)}function Ym(e){if(e.tag===13||e.tag===31){var n=Gt(e,67108864);n!==null&&rn(n,e,67108864),Mo(e,67108864)}}function Qm(e){if(e.tag===13||e.tag===31){var n=gn();n=ys(n);var t=Gt(e,n);t!==null&&rn(t,e,n),Mo(e,n)}}var Pl=!0;function lv(e,n,t,a){var i=w.T;w.T=null;var l=B.p;try{B.p=2,Oo(e,n,t,a)}finally{B.p=l,w.T=i}}function sv(e,n,t,a){var i=w.T;w.T=null;var l=B.p;try{B.p=8,Oo(e,n,t,a)}finally{B.p=l,w.T=i}}function Oo(e,n,t,a){if(Pl){var i=Ao(a);if(i===null)fo(e,n,a,es,t),Xm(e,a);else if(ov(i,e,n,t,a))a.stopPropagation();else if(Xm(e,a),n&4&&-1<rv.indexOf(e)){for(;i!==null;){var l=aa(i);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var s=Ut(l.pendingLanes);if(s!==0){var c=l;for(c.pendingLanes|=2,c.entangledLanes|=2;s;){var p=1<<31-cn(s);c.entanglements[1]|=p,s&=~p}qn(l),(me&6)===0&&(Ul=on()+500,Ni(0))}}break;case 31:case 13:c=Gt(l,2),c!==null&&rn(c,l,2),Bl(),Mo(l,2)}if(l=Ao(a),l===null&&fo(e,n,a,es,t),l===i)break;i=l}i!==null&&a.stopPropagation()}else fo(e,n,a,null,t)}}function Ao(e){return e=_s(e),_o(e)}var es=null;function _o(e){if(es=null,e=ta(e),e!==null){var n=f(e);if(n===null)e=null;else{var t=n.tag;if(t===13){if(e=g(n),e!==null)return e;e=null}else if(t===31){if(e=M(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return es=e,null}function Vm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Xf()){case Po:return 2;case eu:return 8;case Yi:case Zf:return 32;case nu:return 268435456;default:return 32}default:return 32}}var To=!1,Ot=null,At=null,_t=null,wi=new Map,zi=new Map,Tt=[],rv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Xm(e,n){switch(e){case"focusin":case"focusout":Ot=null;break;case"dragenter":case"dragleave":At=null;break;case"mouseover":case"mouseout":_t=null;break;case"pointerover":case"pointerout":wi.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":zi.delete(n.pointerId)}}function Li(e,n,t,a,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:a,nativeEvent:l,targetContainers:[i]},n!==null&&(n=aa(n),n!==null&&Ym(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function ov(e,n,t,a,i){switch(n){case"focusin":return Ot=Li(Ot,e,n,t,a,i),!0;case"dragenter":return At=Li(At,e,n,t,a,i),!0;case"mouseover":return _t=Li(_t,e,n,t,a,i),!0;case"pointerover":var l=i.pointerId;return wi.set(l,Li(wi.get(l)||null,e,n,t,a,i)),!0;case"gotpointercapture":return l=i.pointerId,zi.set(l,Li(zi.get(l)||null,e,n,t,a,i)),!0}return!1}function Zm(e){var n=ta(e.target);if(n!==null){var t=f(n);if(t!==null){if(n=t.tag,n===13){if(n=g(t),n!==null){e.blockedOn=n,ru(e.priority,function(){Qm(t)});return}}else if(n===31){if(n=M(t),n!==null){e.blockedOn=n,ru(e.priority,function(){Qm(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ns(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Ao(e.nativeEvent);if(t===null){t=e.nativeEvent;var a=new t.constructor(t.type,t);As=a,t.target.dispatchEvent(a),As=null}else return n=aa(t),n!==null&&Ym(n),e.blockedOn=t,!1;n.shift()}return!0}function Km(e,n,t){ns(e)&&t.delete(n)}function uv(){To=!1,Ot!==null&&ns(Ot)&&(Ot=null),At!==null&&ns(At)&&(At=null),_t!==null&&ns(_t)&&(_t=null),wi.forEach(Km),zi.forEach(Km)}function ts(e,n){e.blockedOn===n&&(e.blockedOn=null,To||(To=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,uv)))}var as=null;function Jm(e){as!==e&&(as=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){as===e&&(as=null);for(var n=0;n<e.length;n+=3){var t=e[n],a=e[n+1],i=e[n+2];if(typeof a!="function"){if(_o(a||t)===null)continue;break}var l=aa(t);l!==null&&(e.splice(n,3),n-=3,Or(l,{pending:!0,data:i,method:t.method,action:a},a,i))}}))}function Ba(e){function n(p){return ts(p,e)}Ot!==null&&ts(Ot,e),At!==null&&ts(At,e),_t!==null&&ts(_t,e),wi.forEach(n),zi.forEach(n);for(var t=0;t<Tt.length;t++){var a=Tt[t];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Tt.length&&(t=Tt[0],t.blockedOn===null);)Zm(t),t.blockedOn===null&&Tt.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(a=0;a<t.length;a+=3){var i=t[a],l=t[a+1],s=i[en]||null;if(typeof l=="function")s||Jm(t);else if(s){var c=null;if(l&&l.hasAttribute("formAction")){if(i=l,s=l[en]||null)c=s.formAction;else if(_o(i)!==null)continue}else c=s.action;typeof c=="function"?t[a+1]=c:(t.splice(a,3),a-=3),Jm(t)}}}function Fm(){function e(l){l.canIntercept&&l.info==="react-transition"&&l.intercept({handler:function(){return new Promise(function(s){return i=s})},focusReset:"manual",scroll:"manual"})}function n(){i!==null&&(i(),i=null),a||setTimeout(t,20)}function t(){if(!a&&!navigation.transition){var l=navigation.currentEntry;l&&l.url!=null&&navigation.navigate(l.url,{state:l.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(t,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),i!==null&&(i(),i=null)}}}function wo(e){this._internalRoot=e}is.prototype.render=wo.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(u(409));var t=n.current,a=gn();Gm(t,a,e,n,null,null)},is.prototype.unmount=wo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Gm(e.current,2,null,e,null,null),Bl(),n[na]=null}};function is(e){this._internalRoot=e}is.prototype.unstable_scheduleHydration=function(e){if(e){var n=su();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Tt.length&&n!==0&&n<Tt[t].priority;t++);Tt.splice(t,0,e),t===0&&Zm(e)}};var $m=m.version;if($m!=="19.2.1")throw Error(u(527,$m,"19.2.1"));B.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=v(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var cv={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:w,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ls=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ls.isDisabled&&ls.supportsFiber)try{ka=ls.inject(cv),un=ls}catch{}}return Ri.createRoot=function(e,n){if(!h(e))throw Error(u(299));var t=!1,a="",i=id,l=ld,s=sd;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(l=n.onCaughtError),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),n=Hm(e,1,!1,null,null,t,a,null,i,l,s,Fm),e[na]=n.current,mo(e),new wo(n)},Ri.hydrateRoot=function(e,n,t){if(!h(e))throw Error(u(299));var a=!1,i="",l=id,s=ld,c=sd,p=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError),t.formState!==void 0&&(p=t.formState)),n=Hm(e,1,!0,n,t??null,a,i,p,l,s,c,Fm),n.context=Im(null),t=n.current,a=gn(),a=ys(a),i=vt(a),i.callback=null,ht(t,i,a),t=a,n.current.lanes=t,Qa(n,t),qn(n),e[na]=n.current,mo(e),new is(n)},Ri.version="19.2.1",Ri}var of;function Sv(){if(of)return Do.exports;of=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(m){console.error(m)}}return r(),Do.exports=yv(),Do.exports}var Cv=Sv();const jv=yf(Cv);/**
 * react-router v7.10.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var uf="popstate";function Nv(r={}){function m(h,f){let{pathname:g="/",search:M="",hash:y=""}=ea(h.location.hash.substring(1));return!g.startsWith("/")&&!g.startsWith(".")&&(g="/"+g),Go("",{pathname:g,search:M,hash:y},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function d(h,f){let g=h.document.querySelector("base"),M="";if(g&&g.getAttribute("href")){let y=h.location.href,v=y.indexOf("#");M=v===-1?y:y.slice(0,v)}return M+"#"+(typeof f=="string"?f:qi(f))}function u(h,f){An(h.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(f)})`)}return Mv(m,d,u,r)}function Oe(r,m){if(r===!1||r===null||typeof r>"u")throw new Error(m)}function An(r,m){if(!r){typeof console<"u"&&console.warn(m);try{throw new Error(m)}catch{}}}function Ev(){return Math.random().toString(36).substring(2,10)}function cf(r,m){return{usr:r.state,key:r.key,idx:m}}function Go(r,m,d=null,u){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof m=="string"?ea(m):m,state:d,key:m&&m.key||u||Ev()}}function qi({pathname:r="/",search:m="",hash:d=""}){return m&&m!=="?"&&(r+=m.charAt(0)==="?"?m:"?"+m),d&&d!=="#"&&(r+=d.charAt(0)==="#"?d:"#"+d),r}function ea(r){let m={};if(r){let d=r.indexOf("#");d>=0&&(m.hash=r.substring(d),r=r.substring(0,d));let u=r.indexOf("?");u>=0&&(m.search=r.substring(u),r=r.substring(0,u)),r&&(m.pathname=r)}return m}function Mv(r,m,d,u={}){let{window:h=document.defaultView,v5Compat:f=!1}=u,g=h.history,M="POP",y=null,v=_();v==null&&(v=0,g.replaceState({...g.state,idx:v},""));function _(){return(g.state||{idx:null}).idx}function E(){M="POP";let I=_(),Q=I==null?null:I-v;v=I,y&&y({action:M,location:Z.location,delta:Q})}function U(I,Q){M="PUSH";let ne=Go(Z.location,I,Q);d&&d(ne,I),v=_()+1;let q=cf(ne,v),J=Z.createHref(ne);try{g.pushState(q,"",J)}catch(je){if(je instanceof DOMException&&je.name==="DataCloneError")throw je;h.location.assign(J)}f&&y&&y({action:M,location:Z.location,delta:1})}function R(I,Q){M="REPLACE";let ne=Go(Z.location,I,Q);d&&d(ne,I),v=_();let q=cf(ne,v),J=Z.createHref(ne);g.replaceState(q,"",J),f&&y&&y({action:M,location:Z.location,delta:0})}function k(I){return Ov(I)}let Z={get action(){return M},get location(){return r(h,g)},listen(I){if(y)throw new Error("A history only accepts one active listener");return h.addEventListener(uf,E),y=I,()=>{h.removeEventListener(uf,E),y=null}},createHref(I){return m(h,I)},createURL:k,encodeLocation(I){let Q=k(I);return{pathname:Q.pathname,search:Q.search,hash:Q.hash}},push:U,replace:R,go(I){return g.go(I)}};return Z}function Ov(r,m=!1){let d="http://localhost";typeof window<"u"&&(d=window.location.origin!=="null"?window.location.origin:window.location.href),Oe(d,"No window.location.(origin|href) available to create URL");let u=typeof r=="string"?r:qi(r);return u=u.replace(/ $/,"%20"),!m&&u.startsWith("//")&&(u=d+u),new URL(u,d)}function Sf(r,m,d="/"){return Av(r,m,d,!1)}function Av(r,m,d,u){let h=typeof m=="string"?ea(m):m,f=lt(h.pathname||"/",d);if(f==null)return null;let g=Cf(r);_v(g);let M=null;for(let y=0;M==null&&y<g.length;++y){let v=Iv(f);M=Bv(g[y],v,u)}return M}function Cf(r,m=[],d=[],u="",h=!1){let f=(g,M,y=h,v)=>{let _={relativePath:v===void 0?g.path||"":v,caseSensitive:g.caseSensitive===!0,childrenIndex:M,route:g};if(_.relativePath.startsWith("/")){if(!_.relativePath.startsWith(u)&&y)return;Oe(_.relativePath.startsWith(u),`Absolute route path "${_.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),_.relativePath=_.relativePath.slice(u.length)}let E=it([u,_.relativePath]),U=d.concat(_);g.children&&g.children.length>0&&(Oe(g.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${E}".`),Cf(g.children,m,U,E,y)),!(g.path==null&&!g.index)&&m.push({path:E,score:Uv(E,g.index),routesMeta:U})};return r.forEach((g,M)=>{var y;if(g.path===""||!((y=g.path)!=null&&y.includes("?")))f(g,M);else for(let v of jf(g.path))f(g,M,!0,v)}),m}function jf(r){let m=r.split("/");if(m.length===0)return[];let[d,...u]=m,h=d.endsWith("?"),f=d.replace(/\?$/,"");if(u.length===0)return h?[f,""]:[f];let g=jf(u.join("/")),M=[];return M.push(...g.map(y=>y===""?f:[f,y].join("/"))),h&&M.push(...g),M.map(y=>r.startsWith("/")&&y===""?"/":y)}function _v(r){r.sort((m,d)=>m.score!==d.score?d.score-m.score:qv(m.routesMeta.map(u=>u.childrenIndex),d.routesMeta.map(u=>u.childrenIndex)))}var Tv=/^:[\w-]+$/,wv=3,zv=2,Lv=1,Dv=10,Rv=-2,df=r=>r==="*";function Uv(r,m){let d=r.split("/"),u=d.length;return d.some(df)&&(u+=Rv),m&&(u+=zv),d.filter(h=>!df(h)).reduce((h,f)=>h+(Tv.test(f)?wv:f===""?Lv:Dv),u)}function qv(r,m){return r.length===m.length&&r.slice(0,-1).every((u,h)=>u===m[h])?r[r.length-1]-m[m.length-1]:0}function Bv(r,m,d=!1){let{routesMeta:u}=r,h={},f="/",g=[];for(let M=0;M<u.length;++M){let y=u[M],v=M===u.length-1,_=f==="/"?m:m.slice(f.length)||"/",E=us({path:y.relativePath,caseSensitive:y.caseSensitive,end:v},_),U=y.route;if(!E&&v&&d&&!u[u.length-1].route.index&&(E=us({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},_)),!E)return null;Object.assign(h,E.params),g.push({params:h,pathname:it([f,E.pathname]),pathnameBase:Vv(it([f,E.pathnameBase])),route:U}),E.pathnameBase!=="/"&&(f=it([f,E.pathnameBase]))}return g}function us(r,m){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[d,u]=Hv(r.path,r.caseSensitive,r.end),h=m.match(d);if(!h)return null;let f=h[0],g=f.replace(/(.)\/+$/,"$1"),M=h.slice(1);return{params:u.reduce((v,{paramName:_,isOptional:E},U)=>{if(_==="*"){let k=M[U]||"";g=f.slice(0,f.length-k.length).replace(/(.)\/+$/,"$1")}const R=M[U];return E&&!R?v[_]=void 0:v[_]=(R||"").replace(/%2F/g,"/"),v},{}),pathname:f,pathnameBase:g,pattern:r}}function Hv(r,m=!1,d=!0){An(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let u=[],h="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(g,M,y)=>(u.push({paramName:M,isOptional:y!=null}),y?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(u.push({paramName:"*"}),h+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):d?h+="\\/*$":r!==""&&r!=="/"&&(h+="(?:(?=\\/|$))"),[new RegExp(h,m?void 0:"i"),u]}function Iv(r){try{return r.split("/").map(m=>decodeURIComponent(m).replace(/\//g,"%2F")).join("/")}catch(m){return An(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${m}).`),r}}function lt(r,m){if(m==="/")return r;if(!r.toLowerCase().startsWith(m.toLowerCase()))return null;let d=m.endsWith("/")?m.length-1:m.length,u=r.charAt(d);return u&&u!=="/"?null:r.slice(d)||"/"}var Gv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,kv=r=>Gv.test(r);function Yv(r,m="/"){let{pathname:d,search:u="",hash:h=""}=typeof r=="string"?ea(r):r,f;if(d)if(kv(d))f=d;else{if(d.includes("//")){let g=d;d=d.replace(/\/\/+/g,"/"),An(!1,`Pathnames cannot have embedded double slashes - normalizing ${g} -> ${d}`)}d.startsWith("/")?f=mf(d.substring(1),"/"):f=mf(d,m)}else f=m;return{pathname:f,search:Xv(u),hash:Zv(h)}}function mf(r,m){let d=m.replace(/\/+$/,"").split("/");return r.split("/").forEach(h=>{h===".."?d.length>1&&d.pop():h!=="."&&d.push(h)}),d.length>1?d.join("/"):"/"}function Bo(r,m,d,u){return`Cannot include a '${r}' character in a manually specified \`to.${m}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${d}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Qv(r){return r.filter((m,d)=>d===0||m.route.path&&m.route.path.length>0)}function Nf(r){let m=Qv(r);return m.map((d,u)=>u===m.length-1?d.pathname:d.pathnameBase)}function Ef(r,m,d,u=!1){let h;typeof r=="string"?h=ea(r):(h={...r},Oe(!h.pathname||!h.pathname.includes("?"),Bo("?","pathname","search",h)),Oe(!h.pathname||!h.pathname.includes("#"),Bo("#","pathname","hash",h)),Oe(!h.search||!h.search.includes("#"),Bo("#","search","hash",h)));let f=r===""||h.pathname==="",g=f?"/":h.pathname,M;if(g==null)M=d;else{let E=m.length-1;if(!u&&g.startsWith("..")){let U=g.split("/");for(;U[0]==="..";)U.shift(),E-=1;h.pathname=U.join("/")}M=E>=0?m[E]:"/"}let y=Yv(h,M),v=g&&g!=="/"&&g.endsWith("/"),_=(f||g===".")&&d.endsWith("/");return!y.pathname.endsWith("/")&&(v||_)&&(y.pathname+="/"),y}var it=r=>r.join("/").replace(/\/\/+/g,"/"),Vv=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),Xv=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Zv=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function Kv(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function Jv(r){return r.map(m=>m.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Mf=["POST","PUT","PATCH","DELETE"];new Set(Mf);var Fv=["GET",...Mf];new Set(Fv);var Ia=A.createContext(null);Ia.displayName="DataRouter";var cs=A.createContext(null);cs.displayName="DataRouterState";A.createContext(!1);var Of=A.createContext({isTransitioning:!1});Of.displayName="ViewTransition";var $v=A.createContext(new Map);$v.displayName="Fetchers";var Wv=A.createContext(null);Wv.displayName="Await";var Ln=A.createContext(null);Ln.displayName="Navigation";var Hi=A.createContext(null);Hi.displayName="Location";var st=A.createContext({outlet:null,matches:[],isDataRoute:!1});st.displayName="Route";var Qo=A.createContext(null);Qo.displayName="RouteError";function Pv(r,{relative:m}={}){Oe(Ii(),"useHref() may be used only in the context of a <Router> component.");let{basename:d,navigator:u}=A.useContext(Ln),{hash:h,pathname:f,search:g}=Gi(r,{relative:m}),M=f;return d!=="/"&&(M=f==="/"?d:it([d,f])),u.createHref({pathname:M,search:g,hash:h})}function Ii(){return A.useContext(Hi)!=null}function Lt(){return Oe(Ii(),"useLocation() may be used only in the context of a <Router> component."),A.useContext(Hi).location}var Af="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function _f(r){A.useContext(Ln).static||A.useLayoutEffect(r)}function eh(){let{isDataRoute:r}=A.useContext(st);return r?fh():nh()}function nh(){Oe(Ii(),"useNavigate() may be used only in the context of a <Router> component.");let r=A.useContext(Ia),{basename:m,navigator:d}=A.useContext(Ln),{matches:u}=A.useContext(st),{pathname:h}=Lt(),f=JSON.stringify(Nf(u)),g=A.useRef(!1);return _f(()=>{g.current=!0}),A.useCallback((y,v={})=>{if(An(g.current,Af),!g.current)return;if(typeof y=="number"){d.go(y);return}let _=Ef(y,JSON.parse(f),h,v.relative==="path");r==null&&m!=="/"&&(_.pathname=_.pathname==="/"?m:it([m,_.pathname])),(v.replace?d.replace:d.push)(_,v.state,v)},[m,d,f,h,r])}A.createContext(null);function Gi(r,{relative:m}={}){let{matches:d}=A.useContext(st),{pathname:u}=Lt(),h=JSON.stringify(Nf(d));return A.useMemo(()=>Ef(r,JSON.parse(h),u,m==="path"),[r,h,u,m])}function th(r,m){return Tf(r,m)}function Tf(r,m,d,u,h){var ne;Oe(Ii(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:f}=A.useContext(Ln),{matches:g}=A.useContext(st),M=g[g.length-1],y=M?M.params:{},v=M?M.pathname:"/",_=M?M.pathnameBase:"/",E=M&&M.route;{let q=E&&E.path||"";wf(v,!E||q.endsWith("*")||q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${q}"> to <Route path="${q==="/"?"*":`${q}/*`}">.`)}let U=Lt(),R;if(m){let q=typeof m=="string"?ea(m):m;Oe(_==="/"||((ne=q.pathname)==null?void 0:ne.startsWith(_)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${_}" but pathname "${q.pathname}" was given in the \`location\` prop.`),R=q}else R=U;let k=R.pathname||"/",Z=k;if(_!=="/"){let q=_.replace(/^\//,"").split("/");Z="/"+k.replace(/^\//,"").split("/").slice(q.length).join("/")}let I=Sf(r,{pathname:Z});An(E||I!=null,`No routes matched location "${R.pathname}${R.search}${R.hash}" `),An(I==null||I[I.length-1].route.element!==void 0||I[I.length-1].route.Component!==void 0||I[I.length-1].route.lazy!==void 0,`Matched leaf route at location "${R.pathname}${R.search}${R.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let Q=rh(I&&I.map(q=>Object.assign({},q,{params:Object.assign({},y,q.params),pathname:it([_,f.encodeLocation?f.encodeLocation(q.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:q.pathname]),pathnameBase:q.pathnameBase==="/"?_:it([_,f.encodeLocation?f.encodeLocation(q.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:q.pathnameBase])})),g,d,u,h);return m&&Q?A.createElement(Hi.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...R},navigationType:"POP"}},Q):Q}function ah(){let r=mh(),m=Kv(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),d=r instanceof Error?r.stack:null,u="rgba(200,200,200, 0.5)",h={padding:"0.5rem",backgroundColor:u},f={padding:"2px 4px",backgroundColor:u},g=null;return console.error("Error handled by React Router default ErrorBoundary:",r),g=A.createElement(A.Fragment,null,A.createElement("p",null,"💿 Hey developer 👋"),A.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",A.createElement("code",{style:f},"ErrorBoundary")," or"," ",A.createElement("code",{style:f},"errorElement")," prop on your route.")),A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},m),d?A.createElement("pre",{style:h},d):null,g)}var ih=A.createElement(ah,null),lh=class extends A.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,m){return m.location!==r.location||m.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:m.error,location:m.location,revalidation:r.revalidation||m.revalidation}}componentDidCatch(r,m){this.props.onError?this.props.onError(r,m):console.error("React Router caught the following error during render",r)}render(){return this.state.error!==void 0?A.createElement(st.Provider,{value:this.props.routeContext},A.createElement(Qo.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function sh({routeContext:r,match:m,children:d}){let u=A.useContext(Ia);return u&&u.static&&u.staticContext&&(m.route.errorElement||m.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=m.route.id),A.createElement(st.Provider,{value:r},d)}function rh(r,m=[],d=null,u=null,h=null){if(r==null){if(!d)return null;if(d.errors)r=d.matches;else if(m.length===0&&!d.initialized&&d.matches.length>0)r=d.matches;else return null}let f=r,g=d==null?void 0:d.errors;if(g!=null){let _=f.findIndex(E=>E.route.id&&(g==null?void 0:g[E.route.id])!==void 0);Oe(_>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(g).join(",")}`),f=f.slice(0,Math.min(f.length,_+1))}let M=!1,y=-1;if(d)for(let _=0;_<f.length;_++){let E=f[_];if((E.route.HydrateFallback||E.route.hydrateFallbackElement)&&(y=_),E.route.id){let{loaderData:U,errors:R}=d,k=E.route.loader&&!U.hasOwnProperty(E.route.id)&&(!R||R[E.route.id]===void 0);if(E.route.lazy||k){M=!0,y>=0?f=f.slice(0,y+1):f=[f[0]];break}}}let v=d&&u?(_,E)=>{var U,R;u(_,{location:d.location,params:((R=(U=d.matches)==null?void 0:U[0])==null?void 0:R.params)??{},unstable_pattern:Jv(d.matches),errorInfo:E})}:void 0;return f.reduceRight((_,E,U)=>{let R,k=!1,Z=null,I=null;d&&(R=g&&E.route.id?g[E.route.id]:void 0,Z=E.route.errorElement||ih,M&&(y<0&&U===0?(wf("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),k=!0,I=null):y===U&&(k=!0,I=E.route.hydrateFallbackElement||null)));let Q=m.concat(f.slice(0,U+1)),ne=()=>{let q;return R?q=Z:k?q=I:E.route.Component?q=A.createElement(E.route.Component,null):E.route.element?q=E.route.element:q=_,A.createElement(sh,{match:E,routeContext:{outlet:_,matches:Q,isDataRoute:d!=null},children:q})};return d&&(E.route.ErrorBoundary||E.route.errorElement||U===0)?A.createElement(lh,{location:d.location,revalidation:d.revalidation,component:Z,error:R,children:ne(),routeContext:{outlet:null,matches:Q,isDataRoute:!0},onError:v}):ne()},null)}function Vo(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function oh(r){let m=A.useContext(Ia);return Oe(m,Vo(r)),m}function uh(r){let m=A.useContext(cs);return Oe(m,Vo(r)),m}function ch(r){let m=A.useContext(st);return Oe(m,Vo(r)),m}function Xo(r){let m=ch(r),d=m.matches[m.matches.length-1];return Oe(d.route.id,`${r} can only be used on routes that contain a unique "id"`),d.route.id}function dh(){return Xo("useRouteId")}function mh(){var u;let r=A.useContext(Qo),m=uh("useRouteError"),d=Xo("useRouteError");return r!==void 0?r:(u=m.errors)==null?void 0:u[d]}function fh(){let{router:r}=oh("useNavigate"),m=Xo("useNavigate"),d=A.useRef(!1);return _f(()=>{d.current=!0}),A.useCallback(async(h,f={})=>{An(d.current,Af),d.current&&(typeof h=="number"?await r.navigate(h):await r.navigate(h,{fromRouteId:m,...f}))},[r,m])}var ff={};function wf(r,m,d){!m&&!ff[r]&&(ff[r]=!0,An(!1,d))}A.memo(ph);function ph({routes:r,future:m,state:d,unstable_onError:u}){return Tf(r,void 0,d,u,m)}function zt(r){Oe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function vh({basename:r="/",children:m=null,location:d,navigationType:u="POP",navigator:h,static:f=!1,unstable_useTransitions:g}){Oe(!Ii(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let M=r.replace(/^\/*/,"/"),y=A.useMemo(()=>({basename:M,navigator:h,static:f,unstable_useTransitions:g,future:{}}),[M,h,f,g]);typeof d=="string"&&(d=ea(d));let{pathname:v="/",search:_="",hash:E="",state:U=null,key:R="default"}=d,k=A.useMemo(()=>{let Z=lt(v,M);return Z==null?null:{location:{pathname:Z,search:_,hash:E,state:U,key:R},navigationType:u}},[M,v,_,E,U,R,u]);return An(k!=null,`<Router basename="${M}"> is not able to match the URL "${v}${_}${E}" because it does not start with the basename, so the <Router> won't render anything.`),k==null?null:A.createElement(Ln.Provider,{value:y},A.createElement(Hi.Provider,{children:m,value:k}))}function hh({children:r,location:m}){return th(ko(r),m)}function ko(r,m=[]){let d=[];return A.Children.forEach(r,(u,h)=>{if(!A.isValidElement(u))return;let f=[...m,h];if(u.type===A.Fragment){d.push.apply(d,ko(u.props.children,f));return}Oe(u.type===zt,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Oe(!u.props.index||!u.props.children,"An index route cannot have child routes.");let g={id:u.props.id||f.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,middleware:u.props.middleware,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(g.children=ko(u.props.children,f)),d.push(g)}),d}var rs="get",os="application/x-www-form-urlencoded";function ds(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function gh(r){return ds(r)&&r.tagName.toLowerCase()==="button"}function xh(r){return ds(r)&&r.tagName.toLowerCase()==="form"}function bh(r){return ds(r)&&r.tagName.toLowerCase()==="input"}function yh(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function Sh(r,m){return r.button===0&&(!m||m==="_self")&&!yh(r)}var ss=null;function Ch(){if(ss===null)try{new FormData(document.createElement("form"),0),ss=!1}catch{ss=!0}return ss}var jh=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ho(r){return r!=null&&!jh.has(r)?(An(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${os}"`),null):r}function Nh(r,m){let d,u,h,f,g;if(xh(r)){let M=r.getAttribute("action");u=M?lt(M,m):null,d=r.getAttribute("method")||rs,h=Ho(r.getAttribute("enctype"))||os,f=new FormData(r)}else if(gh(r)||bh(r)&&(r.type==="submit"||r.type==="image")){let M=r.form;if(M==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=r.getAttribute("formaction")||M.getAttribute("action");if(u=y?lt(y,m):null,d=r.getAttribute("formmethod")||M.getAttribute("method")||rs,h=Ho(r.getAttribute("formenctype"))||Ho(M.getAttribute("enctype"))||os,f=new FormData(M,r),!Ch()){let{name:v,type:_,value:E}=r;if(_==="image"){let U=v?`${v}.`:"";f.append(`${U}x`,"0"),f.append(`${U}y`,"0")}else v&&f.append(v,E)}}else{if(ds(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');d=rs,u=null,h=os,g=r}return f&&h==="text/plain"&&(g=f,f=void 0),{action:u,method:d.toLowerCase(),encType:h,formData:f,body:g}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Zo(r,m){if(r===!1||r===null||typeof r>"u")throw new Error(m)}function Eh(r,m,d){let u=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return u.pathname==="/"?u.pathname=`_root.${d}`:m&&lt(u.pathname,m)==="/"?u.pathname=`${m.replace(/\/$/,"")}/_root.${d}`:u.pathname=`${u.pathname.replace(/\/$/,"")}.${d}`,u}async function Mh(r,m){if(r.id in m)return m[r.id];try{let d=await import(r.module);return m[r.id]=d,d}catch(d){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(d),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Oh(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function Ah(r,m,d){let u=await Promise.all(r.map(async h=>{let f=m.routes[h.route.id];if(f){let g=await Mh(f,d);return g.links?g.links():[]}return[]}));return zh(u.flat(1).filter(Oh).filter(h=>h.rel==="stylesheet"||h.rel==="preload").map(h=>h.rel==="stylesheet"?{...h,rel:"prefetch",as:"style"}:{...h,rel:"prefetch"}))}function pf(r,m,d,u,h,f){let g=(y,v)=>d[v]?y.route.id!==d[v].route.id:!0,M=(y,v)=>{var _;return d[v].pathname!==y.pathname||((_=d[v].route.path)==null?void 0:_.endsWith("*"))&&d[v].params["*"]!==y.params["*"]};return f==="assets"?m.filter((y,v)=>g(y,v)||M(y,v)):f==="data"?m.filter((y,v)=>{var E;let _=u.routes[y.route.id];if(!_||!_.hasLoader)return!1;if(g(y,v)||M(y,v))return!0;if(y.route.shouldRevalidate){let U=y.route.shouldRevalidate({currentUrl:new URL(h.pathname+h.search+h.hash,window.origin),currentParams:((E=d[0])==null?void 0:E.params)||{},nextUrl:new URL(r,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof U=="boolean")return U}return!0}):[]}function _h(r,m,{includeHydrateFallback:d}={}){return Th(r.map(u=>{let h=m.routes[u.route.id];if(!h)return[];let f=[h.module];return h.clientActionModule&&(f=f.concat(h.clientActionModule)),h.clientLoaderModule&&(f=f.concat(h.clientLoaderModule)),d&&h.hydrateFallbackModule&&(f=f.concat(h.hydrateFallbackModule)),h.imports&&(f=f.concat(h.imports)),f}).flat(1))}function Th(r){return[...new Set(r)]}function wh(r){let m={},d=Object.keys(r).sort();for(let u of d)m[u]=r[u];return m}function zh(r,m){let d=new Set;return new Set(m),r.reduce((u,h)=>{let f=JSON.stringify(wh(h));return d.has(f)||(d.add(f),u.push({key:f,link:h})),u},[])}function zf(){let r=A.useContext(Ia);return Zo(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function Lh(){let r=A.useContext(cs);return Zo(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Ko=A.createContext(void 0);Ko.displayName="FrameworkContext";function Lf(){let r=A.useContext(Ko);return Zo(r,"You must render this element inside a <HydratedRouter> element"),r}function Dh(r,m){let d=A.useContext(Ko),[u,h]=A.useState(!1),[f,g]=A.useState(!1),{onFocus:M,onBlur:y,onMouseEnter:v,onMouseLeave:_,onTouchStart:E}=m,U=A.useRef(null);A.useEffect(()=>{if(r==="render"&&g(!0),r==="viewport"){let Z=Q=>{Q.forEach(ne=>{g(ne.isIntersecting)})},I=new IntersectionObserver(Z,{threshold:.5});return U.current&&I.observe(U.current),()=>{I.disconnect()}}},[r]),A.useEffect(()=>{if(u){let Z=setTimeout(()=>{g(!0)},100);return()=>{clearTimeout(Z)}}},[u]);let R=()=>{h(!0)},k=()=>{h(!1),g(!1)};return d?r!=="intent"?[f,U,{}]:[f,U,{onFocus:Ui(M,R),onBlur:Ui(y,k),onMouseEnter:Ui(v,R),onMouseLeave:Ui(_,k),onTouchStart:Ui(E,R)}]:[!1,U,{}]}function Ui(r,m){return d=>{r&&r(d),d.defaultPrevented||m(d)}}function Rh({page:r,...m}){let{router:d}=zf(),u=A.useMemo(()=>Sf(d.routes,r,d.basename),[d.routes,r,d.basename]);return u?A.createElement(qh,{page:r,matches:u,...m}):null}function Uh(r){let{manifest:m,routeModules:d}=Lf(),[u,h]=A.useState([]);return A.useEffect(()=>{let f=!1;return Ah(r,m,d).then(g=>{f||h(g)}),()=>{f=!0}},[r,m,d]),u}function qh({page:r,matches:m,...d}){let u=Lt(),{manifest:h,routeModules:f}=Lf(),{basename:g}=zf(),{loaderData:M,matches:y}=Lh(),v=A.useMemo(()=>pf(r,m,y,h,u,"data"),[r,m,y,h,u]),_=A.useMemo(()=>pf(r,m,y,h,u,"assets"),[r,m,y,h,u]),E=A.useMemo(()=>{if(r===u.pathname+u.search+u.hash)return[];let k=new Set,Z=!1;if(m.forEach(Q=>{var q;let ne=h.routes[Q.route.id];!ne||!ne.hasLoader||(!v.some(J=>J.route.id===Q.route.id)&&Q.route.id in M&&((q=f[Q.route.id])!=null&&q.shouldRevalidate)||ne.hasClientLoader?Z=!0:k.add(Q.route.id))}),k.size===0)return[];let I=Eh(r,g,"data");return Z&&k.size>0&&I.searchParams.set("_routes",m.filter(Q=>k.has(Q.route.id)).map(Q=>Q.route.id).join(",")),[I.pathname+I.search]},[g,M,u,h,v,m,r,f]),U=A.useMemo(()=>_h(_,h),[_,h]),R=Uh(_);return A.createElement(A.Fragment,null,E.map(k=>A.createElement("link",{key:k,rel:"prefetch",as:"fetch",href:k,...d})),U.map(k=>A.createElement("link",{key:k,rel:"modulepreload",href:k,...d})),R.map(({key:k,link:Z})=>A.createElement("link",{key:k,nonce:d.nonce,...Z})))}function Bh(...r){return m=>{r.forEach(d=>{typeof d=="function"?d(m):d!=null&&(d.current=m)})}}var Df=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Df&&(window.__reactRouterVersion="7.10.1")}catch{}function Hh({basename:r,children:m,unstable_useTransitions:d,window:u}){let h=A.useRef();h.current==null&&(h.current=Nv({window:u,v5Compat:!0}));let f=h.current,[g,M]=A.useState({action:f.action,location:f.location}),y=A.useCallback(v=>{d===!1?M(v):A.startTransition(()=>M(v))},[d]);return A.useLayoutEffect(()=>f.listen(y),[f,y]),A.createElement(vh,{basename:r,children:m,location:g.location,navigationType:g.action,navigator:f,unstable_useTransitions:d===!0})}var Rf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,at=A.forwardRef(function({onClick:m,discover:d="render",prefetch:u="none",relative:h,reloadDocument:f,replace:g,state:M,target:y,to:v,preventScrollReset:_,viewTransition:E,...U},R){let{basename:k,unstable_useTransitions:Z}=A.useContext(Ln),I=typeof v=="string"&&Rf.test(v),Q,ne=!1;if(typeof v=="string"&&I&&(Q=v,Df))try{let Je=new URL(window.location.href),$e=v.startsWith("//")?new URL(Je.protocol+v):new URL(v),Ye=lt($e.pathname,k);$e.origin===Je.origin&&Ye!=null?v=Ye+$e.search+$e.hash:ne=!0}catch{An(!1,`<Link to="${v}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let q=Pv(v,{relative:h}),[J,je,Te]=Dh(u,U),$=Yh(v,{replace:g,state:M,target:y,preventScrollReset:_,relative:h,viewTransition:E,unstable_useTransitions:Z});function He(Je){m&&m(Je),Je.defaultPrevented||$(Je)}let ke=A.createElement("a",{...U,...Te,href:Q||q,onClick:ne||f?m:He,ref:Bh(R,je),target:y,"data-discover":!I&&d==="render"?"true":void 0});return J&&!I?A.createElement(A.Fragment,null,ke,A.createElement(Rh,{page:q})):ke});at.displayName="Link";var Ih=A.forwardRef(function({"aria-current":m="page",caseSensitive:d=!1,className:u="",end:h=!1,style:f,to:g,viewTransition:M,children:y,...v},_){let E=Gi(g,{relative:v.relative}),U=Lt(),R=A.useContext(cs),{navigator:k,basename:Z}=A.useContext(Ln),I=R!=null&&Kh(E)&&M===!0,Q=k.encodeLocation?k.encodeLocation(E).pathname:E.pathname,ne=U.pathname,q=R&&R.navigation&&R.navigation.location?R.navigation.location.pathname:null;d||(ne=ne.toLowerCase(),q=q?q.toLowerCase():null,Q=Q.toLowerCase()),q&&Z&&(q=lt(q,Z)||q);const J=Q!=="/"&&Q.endsWith("/")?Q.length-1:Q.length;let je=ne===Q||!h&&ne.startsWith(Q)&&ne.charAt(J)==="/",Te=q!=null&&(q===Q||!h&&q.startsWith(Q)&&q.charAt(Q.length)==="/"),$={isActive:je,isPending:Te,isTransitioning:I},He=je?m:void 0,ke;typeof u=="function"?ke=u($):ke=[u,je?"active":null,Te?"pending":null,I?"transitioning":null].filter(Boolean).join(" ");let Je=typeof f=="function"?f($):f;return A.createElement(at,{...v,"aria-current":He,className:ke,ref:_,style:Je,to:g,viewTransition:M},typeof y=="function"?y($):y)});Ih.displayName="NavLink";var Gh=A.forwardRef(({discover:r="render",fetcherKey:m,navigate:d,reloadDocument:u,replace:h,state:f,method:g=rs,action:M,onSubmit:y,relative:v,preventScrollReset:_,viewTransition:E,...U},R)=>{let{unstable_useTransitions:k}=A.useContext(Ln),Z=Xh(),I=Zh(M,{relative:v}),Q=g.toLowerCase()==="get"?"get":"post",ne=typeof M=="string"&&Rf.test(M),q=J=>{if(y&&y(J),J.defaultPrevented)return;J.preventDefault();let je=J.nativeEvent.submitter,Te=(je==null?void 0:je.getAttribute("formmethod"))||g,$=()=>Z(je||J.currentTarget,{fetcherKey:m,method:Te,navigate:d,replace:h,state:f,relative:v,preventScrollReset:_,viewTransition:E});k&&d!==!1?A.startTransition(()=>$()):$()};return A.createElement("form",{ref:R,method:Q,action:I,onSubmit:u?y:q,...U,"data-discover":!ne&&r==="render"?"true":void 0})});Gh.displayName="Form";function kh(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Uf(r){let m=A.useContext(Ia);return Oe(m,kh(r)),m}function Yh(r,{target:m,replace:d,state:u,preventScrollReset:h,relative:f,viewTransition:g,unstable_useTransitions:M}={}){let y=eh(),v=Lt(),_=Gi(r,{relative:f});return A.useCallback(E=>{if(Sh(E,m)){E.preventDefault();let U=d!==void 0?d:qi(v)===qi(_),R=()=>y(r,{replace:U,state:u,preventScrollReset:h,relative:f,viewTransition:g});M?A.startTransition(()=>R()):R()}},[v,y,_,d,u,m,r,h,f,g,M])}var Qh=0,Vh=()=>`__${String(++Qh)}__`;function Xh(){let{router:r}=Uf("useSubmit"),{basename:m}=A.useContext(Ln),d=dh(),u=r.fetch,h=r.navigate;return A.useCallback(async(f,g={})=>{let{action:M,method:y,encType:v,formData:_,body:E}=Nh(f,m);if(g.navigate===!1){let U=g.fetcherKey||Vh();await u(U,d,g.action||M,{preventScrollReset:g.preventScrollReset,formData:_,body:E,formMethod:g.method||y,formEncType:g.encType||v,flushSync:g.flushSync})}else await h(g.action||M,{preventScrollReset:g.preventScrollReset,formData:_,body:E,formMethod:g.method||y,formEncType:g.encType||v,replace:g.replace,state:g.state,fromRouteId:d,flushSync:g.flushSync,viewTransition:g.viewTransition})},[u,h,m,d])}function Zh(r,{relative:m}={}){let{basename:d}=A.useContext(Ln),u=A.useContext(st);Oe(u,"useFormAction must be used inside a RouteContext");let[h]=u.matches.slice(-1),f={...Gi(r||".",{relative:m})},g=Lt();if(r==null){f.search=g.search;let M=new URLSearchParams(f.search),y=M.getAll("index");if(y.some(_=>_==="")){M.delete("index"),y.filter(E=>E).forEach(E=>M.append("index",E));let _=M.toString();f.search=_?`?${_}`:""}}return(!r||r===".")&&h.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),d!=="/"&&(f.pathname=f.pathname==="/"?d:it([d,f.pathname])),qi(f)}function Kh(r,{relative:m}={}){let d=A.useContext(Of);Oe(d!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=Uf("useViewTransitionState"),h=Gi(r,{relative:m});if(!d.isTransitioning)return!1;let f=lt(d.currentLocation.pathname,u)||d.currentLocation.pathname,g=lt(d.nextLocation.pathname,u)||d.nextLocation.pathname;return us(h.pathname,g)!=null||us(h.pathname,f)!=null}/**
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
 */const ye=(r,m)=>{const d=A.forwardRef(({className:u,...h},f)=>A.createElement(Ph,{ref:f,iconNode:m,className:qf(`lucide-${Jh(vf(r))}`,`lucide-${r}`,u),...h}));return d.displayName=vf(r),d};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Bf=ye("book-open",eg);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],hf=ye("briefcase",ng);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=[["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3",key:"cabbwy"}],["rect",{x:"4",y:"2",width:"16",height:"20",rx:"2",key:"1uxh74"}]],ag=ye("building",tg);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],lg=ye("calendar",ig);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],rg=ye("chevron-down",sg);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],ug=ye("chevron-up",og);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],dg=ye("circle-alert",cg);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Io=ye("circle-check-big",mg);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],pg=ye("clock",fg);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],Hf=ye("code-xml",vg);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],gf=ye("code",hg);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]],xg=ye("facebook",gg);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],xf=ye("folder-open",bg);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],Sg=ye("instagram",yg);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],jg=ye("mail",Cg);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],ms=ye("map-pin",Ng);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Mg=ye("menu",Eg);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],bf=ye("play",Og);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],If=ye("plus",Ag);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Tg=ye("refresh-cw",_g);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Jo=ye("send",wg);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Lg=ye("star",zg);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Rg=ye("target",Dg);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],Bi=ye("terminal",Ug);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Bg=ye("triangle-alert",qg);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],Ig=ye("user-plus",Hg);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],kg=ye("users",Gg);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Fo=ye("x",Yg),Gf="/assets/logoneeipequeno-removebg-preview-GzvURSz3.png",Qg=()=>{const[r,m]=A.useState(!1),d=Lt(),u=[{name:"Início",path:"/"},{name:"Sobre",path:"/sobre"},{name:"Eventos",path:"/eventos"},{name:"Projetos",path:"/projetos"},{name:"Vagas",path:"/vagas"},{name:"Colaborar",path:"/pertencer"}],h=f=>d.pathname===f;return o.jsxs("header",{className:"sticky top-0 z-50 bg-bg-100/90 backdrop-blur-md border-b border-primary-200 shadow-sm",children:[o.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:o.jsxs("div",{className:"flex justify-between items-center h-16",children:[o.jsx("div",{className:"flex-shrink-0 flex items-center",children:o.jsx(at,{to:"/",className:"flex items-center gap-2 group",children:o.jsx("div",{className:"w-14 h-14 flex items-center justify-center",children:o.jsx("img",{src:Gf,alt:"NEEI Logo",className:"w-full h-full object-contain"})})})}),o.jsx("nav",{className:"hidden md:flex space-x-6",children:u.map(f=>o.jsx(at,{to:f.path,className:`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${h(f.path)?"text-accent-200 bg-primary-100":"text-text-200 hover:text-accent-200 hover:bg-bg-200"}`,children:f.name},f.path))}),o.jsx("div",{className:"hidden md:flex items-center",children:o.jsxs(at,{to:"/quack",className:`flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm transition-all shadow-sm ${h("/quack")?"bg-accent-200 text-white ring-2 ring-offset-2 ring-accent-100":"bg-primary-300 text-white hover:bg-accent-200 hover:shadow-md"}`,children:[o.jsx(Bi,{size:16}),o.jsx("span",{children:"Quack"})]})}),o.jsx("div",{className:"md:hidden flex items-center",children:o.jsx("button",{onClick:()=>m(!r),className:"text-text-200 hover:text-accent-200 focus:outline-none",children:r?o.jsx(Fo,{size:28}):o.jsx(Mg,{size:28})})})]})}),r&&o.jsx("div",{className:"md:hidden bg-bg-100 border-t border-primary-200",children:o.jsxs("div",{className:"px-2 pt-2 pb-3 space-y-1 sm:px-3",children:[u.map(f=>o.jsx(at,{to:f.path,onClick:()=>m(!1),className:`block px-3 py-2 rounded-md text-base font-medium ${h(f.path)?"text-accent-200 bg-primary-100":"text-text-200 hover:text-accent-200 hover:bg-bg-200"}`,children:f.name},f.path)),o.jsxs(at,{to:"/quack",onClick:()=>m(!1),className:"flex items-center gap-2 w-full text-left px-3 py-2 mt-4 rounded-md text-base font-bold bg-primary-300 text-white",children:[o.jsx(Bi,{size:18}),"Quack Executor"]})]})})]})},Vg=()=>o.jsx("footer",{className:"bg-primary-300 text-bg-100 mt-auto",children:o.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[o.jsxs("div",{children:[o.jsx("div",{className:"mb-4",children:o.jsx("img",{src:Gf,alt:"NEEI Logo",className:"h-16 w-auto"})}),o.jsx("p",{className:"text-gray-300 text-sm leading-relaxed",children:"Núcleo de Estudantes de Engenharia Informática da Universidade do Algarve. Atuamos para promover, apoiar e representar ativamente os estudantes de LEI, fortalecendo a integração e a cooperação para uma experiência académica completa."})]}),o.jsxs("div",{children:[o.jsx("h3",{className:"text-lg font-semibold mb-4 text-primary-100",children:"Links Rápidos"}),o.jsxs("ul",{className:"space-y-2 text-sm text-gray-300",children:[o.jsx("li",{children:o.jsx("a",{href:"#/sobre",className:"hover:text-accent-100 transition-colors",children:"Sobre Nós"})}),o.jsx("li",{children:o.jsx("a",{href:"#/eventos",className:"hover:text-accent-100 transition-colors",children:"Eventos"})}),o.jsx("li",{children:o.jsx("a",{href:"#/vagas",className:"hover:text-accent-100 transition-colors",children:"Vagas"})}),o.jsx("li",{children:o.jsx("a",{href:"#/quack",className:"hover:text-accent-100 transition-colors",children:"Quack Executor"})})]})]}),o.jsxs("div",{children:[o.jsx("h3",{className:"text-lg font-semibold mb-4 text-primary-100",children:"Contactos"}),o.jsxs("ul",{className:"space-y-3 text-sm text-gray-300",children:[o.jsxs("li",{className:"flex items-start gap-2",children:[o.jsx(ms,{size:18,className:"text-accent-100 mt-0.5 shrink-0"}),o.jsxs("span",{children:["Sala 0.18, Edifício 1,",o.jsx("br",{}),"Campus de Gambelas, Faro"]})]}),o.jsxs("li",{className:"flex items-center gap-2",children:[o.jsx(jg,{size:18,className:"text-accent-100 shrink-0"}),o.jsx("a",{href:"mailto:neei@aaualg.pt",className:"hover:text-white transition-colors",children:"neei@aaualg.pt"})]}),o.jsxs("li",{className:"flex items-center gap-4 mt-6",children:[o.jsx("a",{href:"https://www.facebook.com/NEEIUALG",target:"_blank",rel:"noopener noreferrer",className:"hover:text-accent-100 transition-colors","aria-label":"Facebook",children:o.jsx(xg,{size:24})}),o.jsx("a",{href:"https://www.instagram.com/neeiualg/",target:"_blank",rel:"noopener noreferrer",className:"hover:text-accent-100 transition-colors","aria-label":"Instagram",children:o.jsx(Sg,{size:24})})]})]})]})]}),o.jsxs("div",{className:"border-t border-gray-600 mt-8 pt-8 text-center text-xs text-gray-400",children:[new Date().getFullYear()," NEEI - Núcleo de Estudantes de Engenharia Informática da UAlg."]})]})}),Xg=({children:r})=>o.jsxs("div",{className:"flex flex-col min-h-screen bg-bg-100",children:[o.jsx(Qg,{}),o.jsx("main",{className:"flex-grow",children:r}),o.jsx(Vg,{})]}),Zg=()=>{const[r,m]=A.useState([{type:"output",content:"NEEI_OS v1.0.5 [Secure Connection Established]"},{type:"output",content:'Welcome to NEEI System. Type "help" to see available commands.'}]),[d,u]=A.useState(""),h=A.useRef(null),f=A.useRef(null);A.useEffect(()=>{f.current&&(f.current.scrollTop=f.current.scrollHeight)},[r]);const g=()=>{var v;(v=h.current)==null||v.focus()},M=v=>{const _=v.trim().toLowerCase(),E=_.split(" ").slice(1),U=_.split(" ")[0];let R="";switch(U){case"help":R=o.jsxs("div",{className:"grid grid-cols-2 gap-2 max-w-xs",children:[o.jsx("span",{className:"text-accent-200",children:"help"})," ",o.jsx("span",{children:"Lista comandos"}),o.jsx("span",{className:"text-accent-200",children:"ls"})," ",o.jsx("span",{children:"Lista ficheiros"}),o.jsx("span",{className:"text-accent-200",children:"whoami"})," ",o.jsx("span",{children:"Utilizador atual"}),o.jsx("span",{className:"text-accent-200",children:"date"})," ",o.jsx("span",{children:"Data sistema"}),o.jsx("span",{className:"text-accent-200",children:"clear"})," ",o.jsx("span",{children:"Limpa ecrã"}),o.jsx("span",{className:"text-accent-200",children:"cat [file]"})," ",o.jsx("span",{children:"Lê ficheiro"})]});break;case"ls":R=o.jsxs("div",{className:"flex gap-4 text-green-400 flex-wrap",children:[o.jsx("span",{children:"segredos_neei.log"}),o.jsx("span",{children:"receita_sandes_atum.txt"}),o.jsx("span",{children:"razões_para_ser_informatico.txt"}),o.jsx("span",{className:"text-blue-400",children:"/projetos"})]});break;case"whoami":R="guest_user@neei-ualg (Access Level: Student)";break;case"date":R=new Date().toString();break;case"sudo":R="Permission denied: Nice try, but you are not root.";break;case"hack":R="Accessing mainframe... 0%... 10%... FAILED. Firewall is too strong.";break;case"clear":m([]);return;case"cat":E.length===0?R="Usage: cat [filename]":E[0]==="segredos_neei.log"?R="Error: File encrypted. Key required. (Dica: Pergunta ao presidente)":E[0]==="receita_sandes_atum.txt"?R=o.jsx("div",{className:"whitespace-pre-wrap text-yellow-200",children:`=== RECEITA GOURMET DE ESTUDANTE ===
1. Pão de ontem (se estiver duro, molha na água).
2. Uma lata de atum (em óleo para escorregar melhor).
3. Maionese (quanto mais, melhor).
4. Misturar com as lágrimas de quem chumbou a Análise Matemática.
5. Comer em 2 minutos antes da aula prática de AED.`}):E[0]==="razões_para_ser_informatico.txt"?R=o.jsx("div",{className:"whitespace-pre-wrap text-purple-300",children:`=== PORQUE É QUE VIM PARA LEI? ===
1. Era quem arranjava a televisão lá em casa (mudava o HDMI).
2. Era quem concertava o computador da avó (desligava e voltava a ligar).
3. Gosto de jogar jogos e achava que o curso era só gaming.
4. O meu primo disse que dava dinheiro (ele vende NFTs).
5. Tenho medo do sol.`}):R=`cat: ${E[0]}: No such file or directory`;break;case"":R=null;break;default:R=`Command not found: ${_}. Type "help".`}R?m(k=>[...k,{type:"input",content:v},{type:"output",content:R}]):_!==""&&m(k=>[...k,{type:"input",content:v}])},y=v=>{v.key==="Enter"&&(M(d),u(""))};return o.jsxs("div",{className:"w-full h-full bg-[#0f172a] p-4 font-mono text-xs md:text-sm overflow-hidden flex flex-col relative",onClick:g,children:[o.jsx("div",{className:"absolute inset-0 pointer-events-none z-10 opacity-10",style:{background:"linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))",backgroundSize:"100% 2px, 3px 100%"}}),o.jsxs("div",{className:"flex-1 overflow-y-auto z-0 space-y-1 scrollbar-hide pb-2",ref:f,children:[r.map((v,_)=>o.jsxs("div",{className:`${v.type==="input"?"text-gray-400 mt-2":"text-blue-300"}`,children:[v.type==="input"&&o.jsx("span",{className:"text-accent-200 mr-2",children:"$"}),v.content]},_)),o.jsxs("div",{className:"flex items-center text-gray-200",children:[o.jsx("span",{className:"text-accent-200 mr-2",children:"$"}),o.jsx("input",{ref:h,type:"text",value:d,onChange:v=>u(v.target.value),onKeyDown:y,className:"bg-transparent border-none outline-none flex-1 text-blue-100 placeholder-gray-700",autoFocus:!0,autoComplete:"off",spellCheck:"false"}),o.jsx("span",{className:"w-2 h-4 bg-accent-200 animate-pulse ml-1"})]})]})]})},Kg=()=>o.jsxs("div",{className:"flex flex-col gap-16",children:[o.jsx("section",{className:"relative bg-gradient-to-b from-primary-100 to-bg-100 py-20 md:py-32",children:o.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center",children:[o.jsxs("div",{className:"md:w-1/2 space-y-6 text-center md:text-left mb-12 md:mb-0",children:[o.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-primary-200 text-accent-200 text-xs font-bold uppercase tracking-wider mb-2",children:[o.jsx(ms,{size:12}),"Sala 0.18, Edifício 1, Campus de Gambelas, Faro"]}),o.jsxs("h1",{className:"text-4xl md:text-6xl font-bold text-text-100 leading-tight",children:[o.jsx("span",{className:"text-accent-200",children:"N"}),"úcleo de ",o.jsx("span",{className:"text-accent-200",children:"E"}),"studantes de ",o.jsx("span",{className:"text-accent-200",children:"E"}),"ngenharia ",o.jsx("span",{className:"text-accent-200",children:"I"}),"nformática da ",o.jsx("span",{className:"text-accent-200",children:"UAlg"})]}),o.jsx("p",{className:"text-lg text-text-200 max-w-lg mx-auto md:mx-0",children:"Somos o órgão responsável por proporcionar atividades, workshops e eventos dedicados aos estudantes de Engenharia Informática da UAlg. Fomentamos a integração e a cooperação para uma experiência académica completa."}),o.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center md:justify-start",children:[o.jsx(at,{to:"/pertencer",className:"bg-accent-200 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-accent-100 hover:-translate-y-1 transition-all duration-300",children:"Ser Colaborador"}),o.jsxs(at,{to:"/quack",className:"bg-white text-accent-200 border border-accent-200 px-8 py-3 rounded-lg font-semibold hover:bg-primary-100 transition-all duration-300 flex items-center justify-center gap-2",children:[o.jsx(gf,{size:20}),"Quack (Online Judge)"]})]})]}),o.jsx("div",{className:"md:w-1/2 flex justify-center items-center w-full",children:o.jsxs("div",{className:"relative group w-full max-w-lg",children:[o.jsx("div",{className:"absolute -inset-1 bg-gradient-to-r from-accent-200 via-blue-400 to-accent-200 rounded-xl blur opacity-20 group-hover:opacity-75 transition duration-500 group-hover:duration-200"}),o.jsxs("div",{className:"relative rounded-xl bg-gray-900 ring-1 ring-white/10 overflow-hidden p-[2px] aspect-video shadow-2xl",children:[o.jsx("div",{className:"absolute inset-[-50%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_180deg,#00668c_240deg,#71c4ef_360deg)] animate-[spin_4s_linear_infinite]"}),o.jsx("div",{className:"absolute inset-[2px] bg-[#0f172a] rounded-lg z-10 overflow-hidden",children:o.jsx(Zg,{})})]}),o.jsxs("div",{className:"text-center mt-4 opacity-60 text-xs font-mono text-gray-500",children:[o.jsx(Bi,{size:12,className:"inline mr-1"}),'Sistema Interativo: Tenta escrever "help" ou "ls"']})]})})]})}),o.jsxs("section",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20",children:[o.jsx("h2",{className:"text-3xl font-bold text-text-100 mb-12 text-center",children:"Destaques do Mandato"}),o.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:[{icon:o.jsx(gf,{className:"text-accent-200",size:32}),title:"Site do NEEI é apresentado como primeira proposta a ser cumprida pela nova direção do NEEI",desc:"Hello world!",date:"Nov 2025"}].map((r,m)=>o.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-primary-200 hover:shadow-lg transition-shadow duration-300",children:[o.jsxs("div",{className:"flex justify-between items-start mb-4",children:[o.jsx("div",{className:"p-3 bg-primary-100 rounded-lg",children:r.icon}),o.jsx("span",{className:"text-xs font-semibold text-text-200 bg-bg-200 px-2 py-1 rounded",children:r.date})]}),o.jsx("h3",{className:"text-xl font-bold text-text-100 mb-2",children:r.title}),o.jsx("p",{className:"text-text-200 mb-4",children:r.desc})]},m))})]})]}),Jg="/assets/afonsobitoque-CbLk7P5H.png",Fg="/assets/josetico-BXIzTLrd.png",$g="/assets/davidgoncalves-B7l-li6B.png",Wg="/assets/davidcruz-CqnI9HvS.png",Pg="/assets/franciscomolo-Dmyt50nl.png",ex="/assets/leonardocantachini-BNYPe3jh.png",nx="/assets/afonsofrancisco-B-6w0691.png",tx="/assets/simaoreis-Bk-mXVk4.png",ax="/assets/barbarapereira-DvcNMqnC.png",ix="/assets/beatrizmateia-IA3LItW7.png",lx="/assets/davidrodrigues-DGWagHyR.png",sx="/assets/davidsilvestre-DewLdGe7.png",rx="/assets/francisconeves-AkyuryhU.png",ox="/assets/joaomariabatista-2Au6AC-T.png",ux="/assets/joaomiguelbatista-BoUuBuzr.png",cx="/assets/leonardoalbudane-CHuA3erf.png",dx="/assets/martimneves-CaKzb_wY.png",mx="/assets/miguelalvito-C1-k7Zd2.png",fx="/assets/raquelnunes-CRygNQAU.png",px="/assets/ricardovicente-D3bDaPiL.png",vx=()=>{const r=[{name:"Afonso Bitoque",role:"Presidente",image:Jg},{name:"José Tico",role:"Vice-Presidente",image:Fg},{name:"David Gonçalves",role:"Tesoureiro",image:$g},{name:"David Cruz",role:"Secretário",image:Wg}],m=[{name:"Francisco Molo",role:"Presidente",image:Pg},{name:"Leonardo Cantachini",role:"Vice-Presidente",image:ex},{name:"Afonso Francisco",role:"Secretário",image:nx},{name:"Simão Reis",role:"Primeiro Suplente",image:tx}],d=[{name:"Barbara Pereira",image:ax},{name:"Beatriz Mateia",image:ix},{name:"David Rodrigues",image:lx},{name:"David Silvestre",image:sx},{name:"Francisco Neves",image:rx},{name:"João Maria Batista",image:ox},{name:"João Miguel Batista",image:ux},{name:"Leonardo Albudane",image:cx},{name:"Martim Neves",image:dx},{name:"Miguel Alvito",image:mx},{name:"Raquel Nunes",image:fx},{name:"Ricardo Vicente",image:px}];return o.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16",children:[o.jsxs("div",{className:"text-center max-w-4xl mx-auto",children:[o.jsx("h1",{className:"text-4xl font-bold text-text-100 mb-6",children:"Sobre o NEEI"}),o.jsxs("div",{className:"flex items-center justify-center gap-2 text-accent-200 mb-6 font-medium",children:[o.jsx(ms,{size:20}),o.jsx("span",{children:"Sala 0.18, Edifício 1, Campus de Gambelas, Faro"})]}),o.jsxs("p",{className:"text-lg text-text-200 leading-relaxed text-justify md:text-center",children:["O ",o.jsx("strong",{children:"Núcleo de Estudantes de Engenharia Informática (NEEI)"})," é parte integrante da ",o.jsx("strong",{children:"Associação Académica da Universidade do Algarve (AAUAlg)"}),", representando todos os estudantes do curso de Engenharia Informática da UALG."]})]}),o.jsxs("div",{className:"grid md:grid-cols-3 gap-8",children:[o.jsxs("div",{className:"bg-bg-200 p-8 rounded-2xl text-center hover:bg-primary-100 transition-colors border border-transparent hover:border-primary-200",children:[o.jsx("div",{className:"w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-accent-200",children:o.jsx(kg,{size:32})}),o.jsx("h3",{className:"text-xl font-bold text-text-100 mb-4",children:"Representação"}),o.jsx("p",{className:"text-text-200 text-sm leading-relaxed",children:"Defender os interesses e direitos dos estudantes junto dos órgãos da Universidade e da Direção-Geral da AAUAlg, garantindo uma voz ativa na definição do percurso académico."})]}),o.jsxs("div",{className:"bg-bg-200 p-8 rounded-2xl text-center hover:bg-primary-100 transition-colors border border-transparent hover:border-primary-200",children:[o.jsx("div",{className:"w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-accent-200",children:o.jsx(Bf,{size:32})}),o.jsx("h3",{className:"text-xl font-bold text-text-100 mb-4",children:"Desenvolvimento"}),o.jsx("p",{className:"text-text-200 text-sm leading-relaxed",children:"Organizar atividades extracurriculares, workshops técnicos e eventos de contacto empresarial que complementem a formação letiva e potenciem a empregabilidade dos sócios."})]}),o.jsxs("div",{className:"bg-bg-200 p-8 rounded-2xl text-center hover:bg-primary-100 transition-colors border border-transparent hover:border-primary-200",children:[o.jsx("div",{className:"w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-accent-200",children:o.jsx(Rg,{size:32})}),o.jsx("h3",{className:"text-xl font-bold text-text-100 mb-4",children:"Vivência Académica"}),o.jsx("p",{className:"text-text-200 text-sm leading-relaxed",children:"Gerir os assuntos correntes do Núcleo e promover um espírito de união, integração e entreajuda, desde o acolhimento aos novos estudantes até à celebração dos finalistas."})]})]}),o.jsxs("div",{className:"bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-primary-200",children:[o.jsxs("div",{className:"text-center mb-12",children:[o.jsx("h2",{className:"text-3xl font-bold text-text-100 mb-2",children:"Estrutura do Núcleo"}),o.jsx("p",{className:"text-accent-200 font-bold uppercase tracking-widest text-sm",children:"Mandato 2025 / 2026"})]}),o.jsxs("div",{className:"mb-12",children:[o.jsx("h3",{className:"text-xl font-bold text-center text-text-100 mb-8 border-b border-bg-300 pb-2 mx-auto max-w-xs",children:"Direção"}),o.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-8",children:r.map(u=>o.jsxs("div",{className:"flex flex-col items-center text-center group",children:[o.jsx("div",{className:"relative w-28 h-28 mb-4 overflow-hidden rounded-full border-4 border-primary-100 group-hover:border-accent-100 transition-colors shadow-md bg-bg-200",children:o.jsx("img",{src:u.image,alt:u.name,className:"w-full h-full object-cover",style:{transform:"scale(1.83)"}})}),o.jsx("h3",{className:"font-bold text-lg text-text-100",children:u.name}),o.jsx("p",{className:"text-accent-200 text-sm font-medium",children:u.role})]},u.name))})]}),o.jsxs("div",{className:"mb-12",children:[o.jsx("h3",{className:"text-xl font-bold text-center text-text-100 mb-8 border-b border-bg-300 pb-2 mx-auto max-w-xs",children:"Mesa do Plenário"}),o.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-8",children:m.map(u=>o.jsxs("div",{className:"flex flex-col items-center text-center group",children:[o.jsx("div",{className:"relative w-28 h-28 mb-4 overflow-hidden rounded-full border-4 border-bg-200 group-hover:border-accent-100 transition-colors shadow-sm bg-bg-200",children:o.jsx("img",{src:u.image,alt:u.name,className:"w-full h-full object-cover",style:{transform:"scale(1.83)"}})}),o.jsx("h3",{className:"font-bold text-base text-text-100",children:u.name}),o.jsx("p",{className:"text-text-200 text-xs font-medium",children:u.role})]},u.name))})]}),o.jsxs("div",{className:"mb-12",children:[o.jsx("h3",{className:"text-xl font-bold text-center text-text-100 mb-8 border-b border-bg-300 pb-2 mx-auto max-w-xs",children:"Vogais da Direção"}),o.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-8 justify-center",children:d.map(u=>o.jsxs("div",{className:"flex flex-col items-center text-center group",children:[o.jsx("div",{className:"relative w-28 h-28 mb-4 overflow-hidden rounded-full border-4 border-bg-200 group-hover:border-accent-100 transition-colors shadow-sm bg-bg-200",children:o.jsx("img",{src:u.image,alt:u.name,className:"w-full h-full object-cover",style:{transform:"scale(1.83)"}})}),o.jsx("h3",{className:"font-bold text-sm text-text-100",children:u.name}),o.jsx("p",{className:"text-text-200 text-xs font-medium",children:"Vogal"})]},u.name))})]})]})]})},hx=()=>{const[r,m]=A.useState(!1),d=[];return o.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[o.jsxs("div",{className:"flex items-center gap-4 mb-8",children:[o.jsx("div",{className:"bg-primary-100 p-3 rounded-lg",children:o.jsx(xf,{className:"text-accent-200",size:32})}),o.jsxs("div",{children:[o.jsx("h1",{className:"text-3xl font-bold text-text-100",children:"Projetos"}),o.jsx("p",{className:"text-text-200",children:"O que andamos a fazer."})]})]}),d.length===0?o.jsxs("div",{className:"flex flex-col items-center justify-center py-20 bg-bg-200 rounded-2xl border-2 border-dashed border-primary-300",children:[o.jsx(xf,{className:"text-primary-300 mb-4 opacity-50",size:64}),o.jsx("p",{className:"text-2xl font-semibold text-text-200",children:"Ainda não foram partilhados projetos"}),o.jsx("p",{className:"text-text-200 mt-2",children:"Sê o primeiro a mostrar o teu trabalho!"})]}):o.jsx("div",{className:"grid md:grid-cols-2 gap-8 mb-16",children:d.map(u=>o.jsxs("div",{className:"bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-bg-300 group",children:[o.jsxs("div",{className:"relative h-48 overflow-hidden",children:[o.jsx("img",{src:u.imageUrl,alt:u.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"}),o.jsx("div",{className:"absolute top-4 right-4 bg-bg-100/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-accent-200",children:u.category})]}),o.jsxs("div",{className:"p-6",children:[o.jsxs("h3",{className:"text-xl font-bold text-text-100 mb-2 flex items-center gap-2",children:[u.title,u.id===1&&o.jsx(Lg,{size:16,className:"text-yellow-400 fill-current"})]}),o.jsx("p",{className:"text-text-200",children:u.description})]})]},u.id))}),o.jsxs("div",{className:"bg-primary-100 rounded-2xl p-8 md:p-12 text-center mt-12 border border-primary-200",children:[o.jsx("h2",{className:"text-2xl font-bold text-text-100 mb-4",children:"Queres partilhar um projeto teu?"}),o.jsx("p",{className:"text-text-200 mb-8 max-w-2xl mx-auto",children:"O NEEI apoia os projetos dos alunos, partilha os teus trabalhos mais recentes com a comunidade acadêmica!"}),o.jsxs("button",{onClick:()=>m(!r),className:`px-8 py-3 rounded-lg font-semibold transition-all inline-flex items-center gap-2 shadow-md ${r?"bg-text-200 text-white hover:bg-text-100":"bg-accent-200 text-white hover:bg-accent-100 hover:-translate-y-1"}`,children:[r?o.jsx(Fo,{size:20}):o.jsx(If,{size:20}),r?"Fechar Formulário":"Queres partilhar o teu projeto?"]}),r&&o.jsx("div",{className:"mt-8 max-w-2xl mx-auto text-left animate-in fade-in slide-in-from-bottom-4 duration-500",children:o.jsx("div",{className:"bg-white p-8 rounded-xl shadow-lg border border-primary-200",children:o.jsxs("form",{action:"https://formspree.io/f/xvgyjpgo",method:"POST",className:"space-y-6",children:[o.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[o.jsxs("div",{className:"space-y-2",children:[o.jsx("label",{htmlFor:"nome",className:"block text-sm font-medium text-text-100",children:"Nome Completo"}),o.jsx("input",{type:"text",id:"nome",name:"nome",required:!0,className:"w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-200 outline-none bg-white",placeholder:"Teu nome"})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsx("label",{htmlFor:"numero_aluno",className:"block text-sm font-medium text-text-100",children:"Número de Aluno"}),o.jsx("input",{type:"text",id:"numero_aluno",name:"numero_aluno",required:!0,className:"w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-200 outline-none bg-white",placeholder:"ex: a12345"})]})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsx("label",{htmlFor:"contacto",className:"block text-sm font-medium text-text-100",children:"Contacto (Email ou Telemóvel)"}),o.jsx("input",{type:"text",id:"contacto",name:"contacto",required:!0,className:"w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-200 outline-none bg-white",placeholder:"Email ou Nº Telemóvel"})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsx("label",{htmlFor:"nome_projeto",className:"block text-sm font-medium text-text-100",children:"Nome do Projeto"}),o.jsx("input",{type:"text",id:"nome_projeto",name:"nome_projeto",required:!0,className:"w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-200 outline-none bg-white",placeholder:"Título do projeto"})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsx("label",{htmlFor:"resumo_projeto",className:"block text-sm font-medium text-text-100",children:"Resumo do Projeto"}),o.jsx("textarea",{id:"resumo_projeto",name:"resumo_projeto",rows:4,required:!0,className:"w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-200 outline-none bg-white",placeholder:"Descreve brevemente a tua ideia..."})]}),o.jsxs("button",{type:"submit",className:"w-full bg-accent-200 text-white font-bold py-3 rounded-lg hover:bg-accent-100 transition-colors flex items-center justify-center gap-2",children:[o.jsx(Jo,{size:18}),"Submeter Projeto"]})]})})})]})]})},gx=()=>o.jsx("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:o.jsxs("div",{className:"bg-white rounded-3xl shadow-xl overflow-hidden border border-primary-200",children:[o.jsxs("div",{className:"bg-primary-300 p-8 text-white text-center",children:[o.jsx(Ig,{className:"mx-auto mb-4 h-16 w-16 text-accent-100"}),o.jsx("h1",{className:"text-3xl font-bold mb-2",children:"Queres ser colaborador?"}),o.jsx("p",{className:"text-primary-200",children:"Junta-te à equipa do NEEI e ajuda-nos a criar impacto."})]}),o.jsx("div",{className:"p-8 md:p-12",children:o.jsxs("form",{action:"https://formspree.io/f/xpwyovyd",method:"POST",className:"space-y-6",children:[o.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[o.jsxs("div",{className:"space-y-2",children:[o.jsx("label",{htmlFor:"nome",className:"block text-sm font-medium text-text-100",children:"Nome Completo"}),o.jsx("input",{type:"text",id:"nome",name:"nome",required:!0,className:"w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-200 focus:border-transparent outline-none transition-all bg-white",placeholder:"Teu nome"})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsx("label",{htmlFor:"numero_aluno",className:"block text-sm font-medium text-text-100",children:"Número de Aluno"}),o.jsx("input",{type:"text",id:"numero_aluno",name:"numero_aluno",required:!0,className:"w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-200 focus:border-transparent outline-none transition-all bg-white",placeholder:"ex: a12345"})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsx("label",{htmlFor:"telemovel",className:"block text-sm font-medium text-text-100",children:"Nº Telemóvel"}),o.jsx("input",{type:"tel",id:"telemovel",name:"telemovel",required:!0,className:"w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-200 focus:border-transparent outline-none transition-all bg-white",placeholder:"912 345 678"})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsx("label",{htmlFor:"ano_escolaridade",className:"block text-sm font-medium text-text-100",children:"Ano de Escolaridade"}),o.jsxs("select",{id:"ano_escolaridade",name:"ano_escolaridade",className:"w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-200 focus:border-transparent outline-none transition-all bg-white",children:[o.jsx("option",{value:"1",children:"1º Ano"}),o.jsx("option",{value:"2",children:"2º Ano"}),o.jsx("option",{value:"3",children:"3º Ano"}),o.jsx("option",{value:"Mestrado",children:"Mestrado"}),o.jsx("option",{value:"Outro",children:"Outro"})]})]})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsx("label",{htmlFor:"motivacao",className:"block text-sm font-medium text-text-100",children:"Texto de Motivação"}),o.jsx("textarea",{id:"motivacao",name:"motivacao",rows:5,required:!0,className:"w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-200 focus:border-transparent outline-none transition-all bg-white",placeholder:"Porque queres juntar-te ao NEEI? O que gostarias de fazer?"})]}),o.jsxs("button",{type:"submit",className:"w-full bg-accent-200 text-white font-bold py-4 rounded-lg shadow-md hover:bg-accent-100 hover:shadow-lg transition-all flex items-center justify-center gap-2",children:[o.jsx(Jo,{size:20}),"Enviar Candidatura"]})]})})]})}),xx=()=>{const[r,m]=A.useState(null),[d,u]=A.useState(!1),h=[],f=g=>{m(r===g?null:g)};return o.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[o.jsxs("div",{className:"flex items-center gap-4 mb-12",children:[o.jsx("div",{className:"bg-primary-100 p-3 rounded-lg",children:o.jsx(hf,{className:"text-accent-200",size:32})}),o.jsxs("div",{children:[o.jsx("h1",{className:"text-3xl font-bold text-text-100",children:"Vaga de emprego/estagio"}),o.jsx("p",{className:"text-text-200",children:"Oportunidades selecionadas para alunos e alumni."})]})]}),o.jsx("div",{className:"space-y-4 mb-16",children:h.length===0?o.jsxs("div",{className:"flex flex-col items-center justify-center py-16 bg-bg-200 rounded-2xl border-2 border-dashed border-primary-300 text-center",children:[o.jsx(hf,{className:"text-primary-300 mb-4 opacity-50",size:48}),o.jsx("p",{className:"text-xl font-semibold text-text-200",children:"Não há oportunidades abertas de momento"}),o.jsx("p",{className:"text-text-200 mt-2 text-sm",children:"Fica atento a futuras atualizações."})]}):h.map(g=>o.jsxs("div",{className:`bg-white rounded-xl border transition-all duration-300 overflow-hidden ${r===g.id?"border-accent-200 shadow-md":"border-primary-200 hover:border-accent-100"}`,children:[o.jsxs("div",{onClick:()=>f(g.id),className:"p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4",children:[o.jsxs("div",{className:"flex-1",children:[o.jsxs("div",{className:"flex items-center gap-3 mb-1",children:[o.jsx("h3",{className:"text-lg font-bold text-text-100",children:g.title}),o.jsx("span",{className:`text-xs px-2 py-0.5 rounded-full font-medium ${g.type==="Estágio"?"bg-green-100 text-green-700":"bg-blue-100 text-blue-700"}`,children:g.type})]}),o.jsxs("div",{className:"flex items-center gap-4 text-sm text-text-200",children:[o.jsx("span",{className:"font-semibold",children:g.company}),o.jsxs("span",{className:"flex items-center gap-1",children:[o.jsx(ms,{size:14})," ",g.location]}),o.jsxs("span",{className:"flex items-center gap-1",children:[o.jsx(pg,{size:14})," ",g.postedDate]})]})]}),o.jsx("div",{className:"text-primary-300",children:r===g.id?o.jsx(ug,{}):o.jsx(rg,{})})]}),o.jsxs("div",{className:`bg-bg-200 px-6 overflow-hidden transition-all duration-300 ${r===g.id?"max-h-96 py-6 opacity-100":"max-h-0 py-0 opacity-0"}`,children:[o.jsx("p",{className:"text-text-100 mb-4 whitespace-pre-line",children:g.description}),g.requirements&&g.requirements.length>0&&o.jsxs(o.Fragment,{children:[o.jsx("h4",{className:"font-semibold text-sm text-text-100 mb-2",children:"Requisitos:"}),o.jsx("ul",{className:"list-disc list-inside text-sm text-text-200 space-y-1 mb-6",children:g.requirements.map((M,y)=>o.jsx("li",{children:M},y))})]}),o.jsx("button",{className:"bg-accent-200 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-accent-100 transition-colors",children:"Candidatar-se"})]})]},g.id))}),o.jsxs("div",{className:"bg-primary-100 rounded-2xl p-8 text-center border border-primary-200",children:[o.jsx("div",{className:"flex justify-center mb-4",children:o.jsx(ag,{className:"text-accent-200",size:40})}),o.jsx("h2",{className:"text-2xl font-bold text-text-100 mb-2",children:"És uma empresa à procura de talento?"}),o.jsx("p",{className:"text-text-200 mb-6",children:"Publica a tua oferta de emprego ou estágio diretamente na nossa plataforma."}),o.jsxs("button",{onClick:()=>u(!d),className:`px-6 py-3 rounded-lg font-semibold transition-all inline-flex items-center gap-2 shadow-sm ${d?"bg-text-200 text-white hover:bg-text-100":"bg-accent-200 text-white hover:bg-accent-100 hover:-translate-y-1"}`,children:[d?o.jsx(Fo,{size:20}):o.jsx(If,{size:20}),d?"Fechar Formulário":"Submeter Vaga"]}),d&&o.jsx("div",{className:"mt-8 max-w-xl mx-auto text-left animate-in fade-in slide-in-from-bottom-4 duration-500",children:o.jsx("div",{className:"bg-white p-8 rounded-xl shadow-lg border border-primary-200",children:o.jsxs("form",{action:"https://formspree.io/f/mgvqjydr",method:"POST",className:"space-y-5",children:[o.jsxs("div",{className:"space-y-1",children:[o.jsx("label",{htmlFor:"nome_empresa",className:"block text-sm font-medium text-text-100",children:"Nome da Empresa / Recrutador"}),o.jsx("input",{type:"text",id:"nome_empresa",name:"nome_empresa",required:!0,className:"w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-200 outline-none bg-white",placeholder:"Nome da empresa"})]}),o.jsxs("div",{className:"space-y-1",children:[o.jsx("label",{htmlFor:"contacto",className:"block text-sm font-medium text-text-100",children:"Contacto (Email)"}),o.jsx("input",{type:"email",id:"contacto",name:"contacto",required:!0,className:"w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-200 outline-none bg-white",placeholder:"recrutamento@empresa.com"})]}),o.jsxs("div",{className:"space-y-1",children:[o.jsx("label",{className:"block text-sm font-medium text-text-100 mb-2",children:"Tipo de Oferta"}),o.jsxs("div",{className:"flex gap-4",children:[o.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[o.jsx("input",{type:"radio",name:"tipo_oferta",value:"Estágio",className:"accent-accent-200",defaultChecked:!0}),o.jsx("span",{className:"text-text-200",children:"Estágio"})]}),o.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[o.jsx("input",{type:"radio",name:"tipo_oferta",value:"Emprego",className:"accent-accent-200"}),o.jsx("span",{className:"text-text-200",children:"Emprego"})]})]})]}),o.jsxs("div",{className:"space-y-1",children:[o.jsx("label",{htmlFor:"descricao",className:"block text-sm font-medium text-text-100",children:"Descrição da Oferta"}),o.jsx("textarea",{id:"descricao",name:"descricao",rows:5,required:!0,className:"w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-200 outline-none bg-white",placeholder:"Detalhes sobre a função, requisitos e benefícios..."})]}),o.jsxs("button",{type:"submit",className:"w-full bg-accent-200 text-white font-bold py-3 rounded-lg hover:bg-accent-100 transition-colors flex items-center justify-center gap-2",children:[o.jsx(Jo,{size:18}),"Enviar Oferta"]})]})})})]})]})};var ae=(r=>(r.IDLE="IDLE",r.RUNNING="RUNNING",r.SUCCESS="SUCCESS",r.ERROR="ERROR",r.TIMEOUT="TIMEOUT",r.SECURITY_VIOLATION="SECURITY_VIOLATION",r))(ae||{});const bx="https://emkc.org/api/v2/piston/execute";async function yx(r,m,d){try{const u=m==="c"?{language:"c",version:"10.2.0",filename:"Main.c"}:{language:"java",version:"15.0.2",filename:"Main.java"},h=await fetch(bx,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({language:u.language,version:u.version,files:[{name:u.filename,content:r}],stdin:d,run_timeout:3e3,compile_timeout:1e4})});return h.ok?await h.json():null}catch(u){return console.error("Piston API Error:",u),null}}const Sx=async r=>{const{code:m,language:d,testCases:u}=r,h=u[0],f=await yx(m,d,h.input);let g="",M="",y=ae.ERROR,v="";if(f)if(f.compile&&f.compile.stderr)M=f.compile.stderr,v="Erro de Compilação",y=ae.ERROR;else{g=f.run.stdout,f.run.code!==0?(M=f.run.stderr||`Erro de execução (Exit Code: ${f.run.code})`,v="Erro de Execução (Runtime Error)",y=ae.ERROR):f.run.stderr?g?y=ae.SUCCESS:(M=f.run.stderr,y=ae.ERROR,v="Erro na Execução"):y=ae.SUCCESS;const _=g?g.trim():"",E=h.expectedOutput.trim();y===ae.SUCCESS&&(_===E?v="Sucesso! O output corresponde ao esperado.":(y=ae.ERROR,v=`Output Incorreto.
Esperado: "${E}"
Obtido: "${_}"`))}else v="Servidor de execução temporariamente indisponível.",y=ae.ERROR;return{status:y,output:M?g+`

--- ERRO ---
`+M:g,details:v,passedTests:y===ae.SUCCESS?1:0,totalTests:1}},Cx={id:"pi",name:"Programação Imperativa",shortName:"PI",language:"c",exercises:[{id:"pi_01",title:"1. Soma Simples",description:`O clássico início. O objetivo é criar um programa que leia dois números inteiros e imprima a sua soma.

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
}`,testCases:[{input:"All in all it is just another brick",expectedOutput:"Aiaijab"}]}]},jx={id:"pi2",name:"Programação Imperativa 2",shortName:"PI2",language:"c",exercises:[{id:"pi2_01",title:"1. Manipulação de Bits: Verificar Estado",description:`A manipulação de bits é essencial em sistemas embebidos e otimização. Neste exercício, deves verificar se um bit específico está ativo.

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
`}]}]},Nx={id:"lp",name:"Laboratório de Programação",shortName:"LP",language:"c",exercises:[{id:"lp_01",title:"1. Passagem por Referência",description:`Implemente a função \`soma_2\` que recebe 2 inteiros, soma-os, e grava o valor resultante na zona de memória referenciada pelo ponteiro \`out\` recebido.

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
}`,testCases:[{input:"",expectedOutput:"5"}]}]},Mx={id:"aed",name:"Algoritmos e Estruturas de Dados 1",shortName:"AED 1",language:"java",exercises:[{id:"aed1_01",title:"1. Olá Java",description:`Bem-vindo ao mundo do Java! O Java é uma linguagem fortemente tipada e Orientada a Objetos.

**Objetivo:**
Implementa um programa simples que escreva a mensagem "Ola Mundo" no ecrã.

**Nota:**
Certifica-te que respeitas as maiúsculas e minúsculas.`,initialCode:`public class Main {
    public static void main(String[] args) {
        // O teu código aqui
    }
}`,solutionCode:`public class Main {
    public static void main(String[] args) {
        System.out.println("Ola Mundo");
    }
}`,testCases:[{input:"",expectedOutput:"Ola Mundo"}]},{id:"aed1_02",title:"2. Entrada de Dados (Scanner)",description:`A leitura de dados em Java é frequentemente feita através da classe \`java.util.Scanner\`.

**Objetivo:**
Escreve um programa que leia dois números inteiros a partir do standard input e imprima a sua soma.

**Exemplo:**
Se a entrada for "10 20", a saída deverá ser "30".`,initialCode:`import java.util.Scanner;
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
}`,testCases:[{input:"10 20",expectedOutput:"30"}]},{id:"aed1_03",title:"3. Formatação de Output",description:`Muitas vezes precisamos de formatar a saída de números reais (double) com um número fixo de casas decimais.

**Objetivo:**
Lê um número real $r$ (raio de um círculo), calcula a sua área ($Area = \\pi \\times r^2$) e imprime o resultado formatado com **exatamente 2 casas decimais**.

**Dica:**
Usa \`System.out.printf("%.2f", valor)\` e a constante \`Math.PI\`.`,initialCode:`import java.util.Scanner;
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
}`,testCases:[{input:"5",expectedOutput:"78.54"}]},{id:"aed1_04",title:"4. Arrays em Java",description:`Os Arrays permitem armazenar múltiplos valores do mesmo tipo numa única estrutura.

**Objetivo:**
Lê um número inteiro $N$, seguido de $N$ números inteiros que devem ser armazenados num array. De seguida, imprime os elementos do array pela ordem **inversa** à da leitura, separados por um espaço.`,initialCode:`import java.util.Scanner;
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
}`,testCases:[{input:"3 10 20 30",expectedOutput:"30 20 10 "}]},{id:"aed1_05",title:"5. O For-Each Loop",description:`O loop "for-each" simplifica a iteração sobre coleções e arrays.

**Objetivo:**
Lê um número $N$ e uma sequência de $N$ inteiros. Armazena-os num array e calcula a soma de todos os elementos utilizando a sintaxe \`for (int valor : array)\`. Imprime o resultado final.`,initialCode:`import java.util.Scanner;
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
}`,testCases:[{input:"3 1 2 3",expectedOutput:"6"}]},{id:"aed1_06",title:"6. A Classe Ponto",description:'Java é Orientado a Objetos. Vamos criar a nossa primeira classe.\n\n**Objetivo:**\n1. Cria uma classe estática `Ponto` com dois atributos inteiros: `x` e `y`.\n2. Implementa um construtor `Ponto(int x, int y)`.\n3. Implementa o método `toString()` que devolve uma string no formato "(x,y)".\n4. No método main, lê dois inteiros, cria um objeto `Ponto` e imprime-o.',initialCode:`import java.util.Scanner;
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
}`,testCases:[{input:"10 20",expectedOutput:"(10,20)"}]},{id:"aed1_07",title:"7. Encapsulamento",description:"O Encapsulamento é um dos pilares da OOP, protegendo o acesso direto aos atributos.\n\n**Objetivo:**\nImplementa a classe `Retangulo` com:\n- Atributos privados `w` e `h` (inteiros).\n- Método público `set(int w, int h)` para definir as dimensões.\n- Método público `getArea()` que devolve a área.\n\nNo `main`, lê dois inteiros, configura o retângulo e imprime a sua área.",initialCode:`import java.util.Scanner;
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
}`,testCases:[{input:"5 10",expectedOutput:"50"}]},{id:"aed1_08",title:"8. Interfaces e Polimorfismo",description:"O Polimorfismo permite tratar objetos de diferentes tipos de forma uniforme através de Interfaces.\n\n**Objetivo:**\n1. Define a interface `Figura` com o método `double area()`.\n2. Cria a classe `Circulo` que implementa `Figura`, com um construtor que recebe o raio.\n3. No `main`, lê um valor real (raio), instancia um `Circulo` (guardando numa variável do tipo `Figura`) e imprime a sua área com 2 casas decimais.",initialCode:`import java.util.Scanner;
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
}`,testCases:[{input:"2",expectedOutput:"12.57"}]},{id:"aed1_09",title:"9. StringBuilder vs String",description:"Em Java, Strings são imutáveis. Para concatenações frequentes, deve-se usar `StringBuilder` para maior eficiência.\n\n**Objetivo:**\nLê um inteiro $N$, seguido de $N$ palavras (strings). Concatena todas as palavras numa única String usando `StringBuilder` e imprime o resultado final.",initialCode:`import java.util.Scanner;
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
}`,testCases:[{input:"3 Ola Mun do",expectedOutput:"OlaMundo"}]},{id:"aed1_10",title:"10. Manipulação de Strings",description:`A classe \`String\` possui vários métodos úteis para manipulação de texto.

**Objetivo:**
Lê uma linha completa de texto. Imprime a mesma linha convertida para letras **maiúsculas** e com todas as ocorrências do caráter "A" substituídas pelo caráter "X".`,initialCode:`import java.util.Scanner;
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
}`,testCases:[{input:"banana",expectedOutput:"BXNXNX"}]},{id:"aed1_11",title:"11. API Java: Stack",description:`A estrutura de dados Pilha (Stack) segue o princípio LIFO (Last-In, First-Out).

**Objetivo:**
Utiliza a classe \`java.util.Stack\` para ler $N$ inteiros e armazená-los. De seguida, remove e imprime todos os elementos da pilha. Como é uma pilha, a ordem de saída será inversa à da entrada.`,initialCode:`import java.util.Scanner;
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
}`,testCases:[{input:"3 1 2 3",expectedOutput:"3 2 1 "}]},{id:"aed1_12",title:"12. Balanceamento de Parênteses",description:`Uma aplicação clássica de pilhas é a verificação de parênteses balanceados.

**Objetivo:**
Lê uma string contendo apenas parênteses \`( )\` e colchetes \`[ ]\`. Verifica se a expressão está bem formada (balanceada).

**Saída:**
Imprime "OK" se estiver balanceada, ou "ERRO" caso contrário.`,initialCode:`import java.util.Scanner;
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
}`,testCases:[{input:"([()])",expectedOutput:"OK"}]},{id:"aed1_13",title:"13. API Java: Queue",description:"A estrutura de dados Fila (Queue) segue o princípio FIFO (First-In, First-Out).\n\n**Objetivo:**\nUtiliza a interface `java.util.Queue` e a implementação `LinkedList` para simular uma fila.\nLê $N$ inteiros, adiciona-os à fila e, em seguida, remove-os e imprime-os um a um.",initialCode:`import java.util.Scanner;
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
}`,testCases:[{input:"3 1 2 3",expectedOutput:"1 2 3 "}]},{id:"aed1_14",title:"14. Lista Ligada Manual",description:`Vamos implementar uma Lista Ligada simples manualmente, sem usar as coleções do Java.

**Objetivo:**
1. Cria uma classe \`Node\` com um valor inteiro e uma referência \`next\`.
2. Lê um inteiro $N$.
3. Cria uma lista ligada contendo os números de 1 até $N$.
4. Percorre a lista e imprime os valores.`,initialCode:`import java.util.Scanner;
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
}`,testCases:[{input:"3",expectedOutput:"1 2 3 "}]},{id:"aed1_15",title:"15. Pilha com Array",description:`Vamos compreender como funciona uma Pilha internamente.

**Objetivo:**
Implementa a classe \`Pilha\` usando um array simples para armazenamento.

O programa deve:
1. Ler dois inteiros.
2. Fazer \`push\` de ambos para a pilha.
3. Fazer \`pop\` duas vezes e imprimir os valores obtidos.`,initialCode:`import java.util.Scanner;
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
}`,testCases:[{input:"10 20",expectedOutput:"20 10"}]},{id:"aed1_16",title:"16. Fila com Array Circular",description:`Uma Fila Circular aproveita o espaço de um array fixo de forma eficiente.

**Objetivo:**
Implementa a classe \`Fila\` usando um array com índices \`start\` e \`end\` que "dão a volta" (usando o operador módulo, se necessário, ou lógica simples).

1. Lê um inteiro $N$.
2. Enfileira os números de 1 a $N$.
3. De seguida, desenfileira e imprime todos os elementos.`,initialCode:`import java.util.Scanner;
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
}`,testCases:[{input:"2",expectedOutput:"1 2 "}]},{id:"aed1_17",title:"17. Problema 3SUM",description:`O problema 3SUM é um clássico de algoritmia.

**Objetivo:**
Dado um array de $N$ inteiros, conta quantos trios de índices distintos $(i, j, k)$ existem tais que $A[i] + A[j] + A[k] == 0$.

**Entrada:**
Lê $N$, seguido de $N$ inteiros.

**Saída:**
Imprime o número total de trios válidos.`,initialCode:`import java.util.Scanner;
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
}`,testCases:[{input:"4 1 -1 0 2",expectedOutput:"1"}]},{id:"aed1_18",title:"18. Union-Find: Quick Find",description:'O algoritmo Union-Find resolve o problema da conectividade dinâmica. Nesta versão "Quick Find", a operação `find` é rápida ($O(1)$) mas a `union` é lenta.\n\n**Objetivo:**\nImplementa a estrutura Union-Find (versão Quick Find).\n\n1. Lê $N$ (número de elementos) e inicializa a estrutura.\n2. Lê um par $U, V$ e executa a operação `union(U, V)`.\n3. Imprime "true" ou "false" para a conectividade `connected(U, V)` e depois para `connected(0, N-1)`.',initialCode:`import java.util.Scanner;
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
}`,testCases:[{input:"5 0 1",expectedOutput:"true false"}]},{id:"aed1_19",title:"19. Union-Find: Quick Union",description:`A versão "Quick Union" do Union-Find usa uma estrutura de árvore (floresta).

**Objetivo:**
Implementa a estrutura Union-Find (versão Quick Union).

1. Lê $N$ e inicializa.
2. Realiza as uniões internas fixas: \`union(0, 1)\` e \`union(1, 2)\`.
3. Verifica e imprime se o elemento 0 está conectado ao elemento 2 (transitividade).`,initialCode:`import java.util.Scanner;
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
}`,testCases:[{input:"5",expectedOutput:"true"}]},{id:"aed1_20",title:"20. Selection Sort",description:`Algoritmos de ordenação são fundamentais. O Selection Sort seleciona repetidamente o menor elemento restante.

**Objetivo:**
Implementa o algoritmo Selection Sort para ordenar um array de inteiros.

**Entrada:**
Lê $N$ e depois $N$ inteiros.

**Saída:**
Imprime o array ordenado por ordem crescente, com os elementos separados por espaço.`,initialCode:`import java.util.Scanner;
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
}`,testCases:[{input:"5 5 1 4 2 8",expectedOutput:"1 2 4 5 8 "}]},{id:"aed1_21",title:"21. Insertion Sort",description:`O Insertion Sort constrói o array ordenado um elemento de cada vez, inserindo o próximo elemento na posição correta.

**Objetivo:**
Implementa o algoritmo Insertion Sort.

**Entrada:**
Lê $N$ e depois $N$ inteiros.

**Saída:**
Imprime o array ordenado.`,initialCode:`import java.util.Scanner;
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
}`,testCases:[{input:"4 4 3 2 1",expectedOutput:"1 2 3 4 "}]},{id:"aed1_22",title:"22. Interface Comparable",description:"Para ordenar objetos personalizados em Java, a classe deve implementar a interface `Comparable`.\n\n**Objetivo:**\n1. Cria a classe `Pessoa` com `nome` (String) e `idade` (int).\n2. Faz a classe implementar `Comparable<Pessoa>`, definindo a ordem natural pela idade (crescente).\n3. Lê os dados de 2 pessoas, coloca-as num array, ordena o array usando `Arrays.sort()` e imprime o nome da pessoa mais nova (primeira do array ordenado).",initialCode:`import java.util.Scanner;
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
}`,testCases:[{input:"Bob 20 Ana 10",expectedOutput:"Ana"}]},{id:"aed1_23",title:"23. Recursividade: Fatorial",description:`A recursividade é uma técnica onde uma função se chama a si mesma. O fatorial é o exemplo clássico.

**Objetivo:**
Implementa uma função recursiva \`fat(n)\` que retorne o fatorial de $N$ ($N! = N \\times (N-1)!$).

**Entrada:**
Lê um inteiro $N$.

**Saída:**
Imprime o valor de $N!$.`,initialCode:`import java.util.Scanner;
public class Main { ... }`,solutionCode:`import java.util.Scanner;
public class Main {
    static long fat(int n) { return n<=1 ? 1 : n*fat(n-1); }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println(fat(sc.nextInt()));
    }
}`,testCases:[{input:"5",expectedOutput:"120"}]},{id:"aed1_24",title:"24. Recursividade: MDC",description:`O Algoritmo de Euclides é uma forma eficiente de calcular o Máximo Divisor Comum (MDC) de forma recursiva.

**Objetivo:**
Implementa uma função recursiva \`gcd(a, b)\` que retorne o MDC de dois números.

**Lógica:**
- Se $b == 0$, retorna $a$.
- Caso contrário, retorna \`gcd(b, a % b)\`.

Lê dois inteiros e imprime o seu MDC.`,initialCode:`import java.util.Scanner;
public class Main { ... }`,solutionCode:`import java.util.Scanner;
public class Main {
    static int gcd(int a, int b) { return b==0 ? a : gcd(b, a%b); }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println(gcd(sc.nextInt(), sc.nextInt()));
    }
}`,testCases:[{input:"10 5",expectedOutput:"5"}]},{id:"aed1_25",title:"25. Classes Genéricas",description:"Generics permitem criar classes que trabalham com qualquer tipo de dados de forma segura.\n\n**Objetivo:**\n1. Cria uma classe genérica `Caixa<T>` que armazena um valor do tipo `T`.\n2. Implementa métodos `set(T v)` e `T get()`.\n3. No `main`, instancia uma `Caixa<String>`, lê uma palavra, guarda-a na caixa e depois recupera-a para imprimir.",initialCode:`import java.util.Scanner;
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
}`,testCases:[{input:"Generico",expectedOutput:"Generico"}]},{id:"aed1_26",title:"26. Iteradores",description:"Ao remover elementos de uma coleção durante uma iteração, deve-se usar um `Iterator` para evitar `ConcurrentModificationException`.\n\n**Objetivo:**\n1. Lê 3 números inteiros e adiciona-os a um `ArrayList`.\n2. Usa um iterador para percorrer a lista e remover todos os números ímpares.\n3. Imprime a lista resultante no final.",initialCode:`import java.util.*;
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
}`,testCases:[{input:"1 2 3",expectedOutput:"[2]"}]},{id:"aed1_27",title:"27. Inversão de Frase",description:`Manipulação de arrays de Strings.

**Objetivo:**
Lê uma frase completa (linha). Divide a frase em palavras (usando espaço como separador) e imprime as palavras pela ordem inversa da frase original.

**Exemplo:**
Entrada: "a b c"
Saída: "c b a"`,initialCode:`import java.util.Scanner;
public class Main { ... }`,solutionCode:`import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(sc.hasNextLine()) {
            String[] p = sc.nextLine().split(" ");
            for(int i=p.length-1; i>=0; i--) System.out.print(p[i] + " ");
        }
    }
}`,testCases:[{input:"a b c",expectedOutput:"c b a "}]},{id:"aed1_28",title:"28. Palíndromo com Stack",description:`Um palíndromo lê-se da mesma forma da esquerda para a direita e vice-versa.

**Objetivo:**
Usa uma \`Stack\` para verificar se uma string é um palíndromo.

1. Empilha todos os caracteres da string.
2. Percorre a string novamente e compara cada caracter com o topo da pilha (desempilhando).
3. Imprime "true" se todos corresponderem, "false" caso contrário.`,initialCode:`import java.util.*;
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
}`,testCases:[{input:"radar",expectedOutput:"true"}]},{id:"aed1_29",title:"29. Estatística com Saco",description:`Um "Saco" (Bag) é uma coleção simples onde a ordem não importa e repetições são permitidas.

**Objetivo:**
Lê uma sequência de números reais (doubles) até não haver mais dados na entrada. Armazena-os num \`ArrayList\` (ou similar). Calcula e imprime a média de todos os valores, formatada com 2 casas decimais.`,initialCode:`import java.util.*;
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
}`,testCases:[{input:"10 20 30",expectedOutput:"20.00"}]},{id:"aed1_30",title:"30. Problema de Josephus",description:`O Problema de Josephus é um problema clássico de eliminação circular.

**Objetivo:**
Simula o processo usando uma Fila (\`Queue\`).

1. Começas com $N$ pessoas (numeradas 1 a $N$) numa fila.
2. Em cada passo, saltas $M-1$ pessoas (movendo-as do início para o fim da fila) e eliminas a $M$-ésima pessoa (removendo-a permanentemente).
3. Repete até a fila estar vazia, imprimindo o número de cada pessoa à medida que é eliminada.`,initialCode:`import java.util.*;
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
}`,testCases:[{input:"7 2",expectedOutput:"2 4 6 1 5 3 7 "}]}]},Ox={id:"aed2",name:"Algoritmos e Estruturas de Dados 2",shortName:"AED 2",language:"java",exercises:[{id:"aed2_01",title:"1. Merge Sort (Recursivo)",description:`Merge Sort Recursivo.

**Tarefa:**
Lê N e array. Ordena e imprime.`,initialCode:`import java.util.Scanner;
public class Main { ... }`,solutionCode:`import java.util.Scanner;
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
        int n=sc.nextInt(); int[] a=new int[n];
        for(int i=0;i<n;i++) a[i]=sc.nextInt();
        sort(a,0,n-1);
        for(int x:a) System.out.print(x+" ");
    }
}`,testCases:[{input:"5 5 2 4 1 3",expectedOutput:"1 2 3 4 5 "}]},{id:"aed2_02",title:"2. Merge Sort (Bottom-Up)",description:`Merge Sort Iterativo.

**Tarefa:**
Lê N e array. Ordena e imprime.`,initialCode:`import java.util.Scanner;
public class Main { ... }`,solutionCode:`import java.util.Arrays;
import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt(); int[] a=new int[n];
        for(int i=0;i<n;i++) a[i]=sc.nextInt();
        Arrays.sort(a); 
        for(int x:a) System.out.print(x+" ");
    }
}`,testCases:[{input:"3 3 1 2",expectedOutput:"1 2 3 "}]},{id:"aed2_03",title:"3. Quick Sort",description:`Quick Sort.

**Tarefa:**
Lê N e array. Ordena e imprime.`,initialCode:`import java.util.Scanner;
public class Main { ... }`,solutionCode:`import java.util.Scanner;
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
        int n=sc.nextInt(); int[] a=new int[n];
        for(int i=0;i<n;i++) a[i]=sc.nextInt();
        sort(a,0,n-1);
        for(int x:a) System.out.print(x+" ");
    }
}`,testCases:[{input:"4 10 7 8 9",expectedOutput:"7 8 9 10 "}]},{id:"aed2_04",title:"4. Comparadores Customizados",description:`Comparador por tamanho.

**Tarefa:**
Lê 3 strings. Ordena por tamanho e imprime array.`,initialCode:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String[] s = {sc.next(), sc.next(), sc.next()};
        // Arrays.sort...
    }
}`,solutionCode:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String[] s = {sc.next(), sc.next(), sc.next()};
        Arrays.sort(s, (a,b) -> {
            if(a.length()!=b.length()) return a.length()-b.length();
            return a.compareTo(b);
        });
        System.out.println(Arrays.toString(s));
    }
}`,testCases:[{input:"a ccc bb",expectedOutput:"[a, bb, ccc]"}]},{id:"aed2_05",title:"5. PriorityQueue (Max Heap)",description:`Max Heap.

**Tarefa:**
Lê 2 inteiros. Adiciona a PQ reversa. Remove e imprime.`,initialCode:`import java.util.*;
public class Main { ... }`,solutionCode:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        PriorityQueue<Integer> pq = new PriorityQueue<>(Collections.reverseOrder());
        pq.add(sc.nextInt()); pq.add(sc.nextInt());
        System.out.println(pq.poll());
    }
}`,testCases:[{input:"10 20",expectedOutput:"20"}]},{id:"aed2_06",title:"6. Heap Sort com PriorityQueue",description:`Heap Sort.

**Tarefa:**
Lê N e N inteiros. Usa PQ para ordenar.`,initialCode:`import java.util.*;
public class Main { ... }`,solutionCode:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        for(int i=0;i<n;i++) pq.add(sc.nextInt());
        while(!pq.isEmpty()) System.out.print(pq.poll()+" ");
    }
}`,testCases:[{input:"3 3 1 2",expectedOutput:"1 2 3 "}]},{id:"aed2_07",title:"7. O K-ésimo Maior Elemento",description:`K-ésimo maior.

**Tarefa:**
Lê N, K e N inteiros. Imprime K-ésimo maior.`,initialCode:`import java.util.*;
public class Main { ... }`,solutionCode:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt(), k=sc.nextInt();
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        for(int i=0;i<n;i++) {
            pq.add(sc.nextInt());
            if(pq.size()>k) pq.poll();
        }
        System.out.println(pq.peek());
    }
}`,testCases:[{input:"5 2 10 20 5 30 15",expectedOutput:"20"}]},{id:"aed2_08",title:"8. Operação Swim (Subir na Heap)",description:`Swim em Heap.

**Tarefa:**
Lê 4 inteiros para array (indices 1..4). Lê k (índice). Chama swim e imprime raiz.`,initialCode:`import java.util.Scanner;
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
        int[] pq = new int[5];
        for(int i=1;i<=4;i++) pq[i]=sc.nextInt();
        int k = sc.nextInt();
        swim(pq, k);
        System.out.println(pq[1]);
    }
}`,testCases:[{input:"0 10 5 20 3",expectedOutput:"20"}]},{id:"aed2_09",title:"9. Java HashMap",description:`Contar palavras.

**Tarefa:**
Lê palavras até fim. Imprime contagem de "ola".`,initialCode:`import java.util.*;
public class Main { ... }`,solutionCode:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Map<String, Integer> map = new HashMap<>();
        while(sc.hasNext()) {
            String s = sc.next();
            map.put(s, map.getOrDefault(s, 0) + 1);
        }
        System.out.println(map.get("ola"));
    }
}`,testCases:[{input:"ola mundo ola",expectedOutput:"2"}]},{id:"aed2_10",title:"10. Problema 2SUM",description:`2SUM O(N).

**Tarefa:**
Lê N, array, e Target. Imprime indices.`,initialCode:`import java.util.*;
public class Main { ... }`,solutionCode:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
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
}`,testCases:[{input:"4 2 7 11 15 9",expectedOutput:"0 1"}]},{id:"aed2_11",title:"11. Conjuntos Únicos (HashSet)",description:`HashSet.

**Tarefa:**
Lê N e inteiros. Imprime quantos únicos.`,initialCode:`import java.util.*;
public class Main { ... }`,solutionCode:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Set<Integer> set = new HashSet<>();
        int n=sc.nextInt();
        for(int i=0;i<n;i++) set.add(sc.nextInt());
        System.out.println(set.size());
    }
}`,testCases:[{input:"5 1 2 1 3 2",expectedOutput:"3"}]},{id:"aed2_12",title:"12. Hash Table Manual",description:`Linear Probing.

**Tarefa:**
Lê K, V para put. Lê chave para get. Imprime valor.`,initialCode:`import java.util.Scanner;
class Hash { ... }
public class Main { ... }`,solutionCode:`import java.util.Scanner;
class Hash {
    int[] keys=new int[10], vals=new int[10];
    void put(int k, int v) {
        int i = k % 10;
        while(keys[i]!=0 && keys[i]!=k) i=(i+1)%10;
        keys[i]=k; vals[i]=v;
    }
    int get(int k) {
        int i=k%10;
        while(keys[i]!=0) { if(keys[i]==k) return vals[i]; i=(i+1)%10; }
        return -1;
    }
}
public class Main {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        Hash h=new Hash();
        h.put(sc.nextInt(), sc.nextInt());
        System.out.println(h.get(sc.nextInt()));
    }
}`,testCases:[{input:"1 10 1",expectedOutput:"10"}]},{id:"aed2_13",title:"13. BST: Inserção",description:`BST Inserção.

**Tarefa:**
Lê N valores. Insere e imprime InOrder.`,initialCode:`import java.util.Scanner;
class Node { ... }
public class Main { ... }`,solutionCode:`import java.util.Scanner;
class Node { int val; Node left, right; Node(int v){val=v;} }
public class Main {
    static Node insert(Node root, int v) {
        if(root==null) return new Node(v);
        if(v < root.val) root.left = insert(root.left, v);
        else root.right = insert(root.right, v);
        return root;
    }
    static void inorder(Node r) { if(r!=null){ inorder(r.left); System.out.print(r.val+" "); inorder(r.right); } }
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt(); Node root=null;
        for(int i=0;i<n;i++) root=insert(root, sc.nextInt());
        inorder(root);
    }
}`,testCases:[{input:"3 2 1 3",expectedOutput:"1 2 3 "}]},{id:"aed2_14",title:"14. BST: Mínimo e Máximo",description:`Mínimo da BST.

**Tarefa:**
Lê N valores. Constroi BST. Imprime mínimo.`,initialCode:`import java.util.Scanner;
public class Main { ... }`,solutionCode:`import java.util.Scanner;
class Node { int val; Node left, right; Node(int v){val=v;} }
public class Main {
    static Node insert(Node root, int v) {
        if(root==null) return new Node(v);
        if(v < root.val) root.left = insert(root.left, v);
        else root.right = insert(root.right, v);
        return root;
    }
    static int min(Node r) { while(r.left!=null) r=r.left; return r.val; }
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt(); Node root=null;
        for(int i=0;i<n;i++) root=insert(root, sc.nextInt());
        System.out.println(min(root));
    }
}`,testCases:[{input:"3 10 5 20",expectedOutput:"5"}]},{id:"aed2_15",title:"15. BST: Floor",description:`Floor na BST.

**Tarefa:**
Lê N valores para BST. Lê K. Imprime Floor(K).`,initialCode:`import java.util.Scanner;
public class Main { ... }`,solutionCode:`import java.util.Scanner;
class Node { int val; Node left, right; Node(int v){val=v;} }
public class Main {
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
        int n=sc.nextInt(); Node r=null;
        for(int i=0;i<n;i++) r=insert(r, sc.nextInt());
        System.out.println(floor(r, sc.nextInt()));
    }
}`,testCases:[{input:"2 10 5 7",expectedOutput:"5"}]},{id:"aed2_16",title:"16. Travessias de Árvores",description:`PreOrder.

**Tarefa:**
Lê N valores. Constroi BST. Imprime PreOrder.`,initialCode:`import java.util.Scanner;
public class Main { ... }`,solutionCode:`import java.util.Scanner;
class Node { int val; Node l, r; Node(int v){val=v;} }
public class Main {
    static Node insert(Node r, int v) { if(r==null)return new Node(v); if(v<r.val)r.l=insert(r.l,v); else r.r=insert(r.r,v); return r; }
    static void pre(Node r) { if(r!=null) { System.out.print(r.val); pre(r.l); pre(r.r); } }
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt(); Node r=null;
        for(int i=0;i<n;i++) r=insert(r, sc.nextInt());
        pre(r);
    }
}`,testCases:[{input:"3 2 1 3",expectedOutput:"213"}]},{id:"aed2_17",title:"17. Validar BST",description:`Validar BST.

**Tarefa:**
Lê N valores. Constroi BST. Verifica (dará true se construída corretamente). Imprime true.`,initialCode:`import java.util.Scanner;
public class Main { ... }`,solutionCode:`import java.util.Scanner;
class Node { int val; Node l, r; Node(int v){val=v;} }
public class Main {
    static Node insert(Node r, int v) { if(r==null)return new Node(v); if(v<r.val)r.l=insert(r.l,v); else r.r=insert(r.r,v); return r; }
    static boolean isBST(Node r, long min, long max) {
        if(r==null) return true;
        if(r.val<=min || r.val>=max) return false;
        return isBST(r.l, min, r.val) && isBST(r.r, r.val, max);
    }
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt(); Node r=null;
        for(int i=0;i<n;i++) r=insert(r, sc.nextInt());
        System.out.println(isBST(r, Long.MIN_VALUE, Long.MAX_VALUE));
    }
}`,testCases:[{input:"1 10",expectedOutput:"true"}]},{id:"aed2_18",title:"18. Árvores Equilibradas (TreeMap)",description:`TreeMap.

**Tarefa:**
Lê N. Lê N pares (Chave Inteiro, Valor String). Imprime chaves ordenadas.`,initialCode:`import java.util.*;
public class Main { ... }`,solutionCode:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        TreeMap<Integer, String> tm = new TreeMap<>();
        int n=sc.nextInt();
        for(int i=0;i<n;i++) tm.put(sc.nextInt(), sc.next());
        for(Integer k : tm.keySet()) System.out.print(k + " ");
    }
}`,testCases:[{input:"3 10 A 5 B 20 C",expectedOutput:"5 10 20 "}]},{id:"aed2_19",title:"19. Pesquisa de Intervalo (Range Search)",description:`SubMap.

**Tarefa:**
Lê N pares (K, V). Lê Min e Max. Conta chaves no intervalo.`,initialCode:`import java.util.*;
public class Main { ... }`,solutionCode:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        TreeMap<Integer, String> tm = new TreeMap<>();
        int n=sc.nextInt();
        for(int i=0;i<n;i++) tm.put(sc.nextInt(), sc.next());
        int min=sc.nextInt(), max=sc.nextInt();
        System.out.println(tm.subMap(min, max).size());
    }
}`,testCases:[{input:"3 1 A 5 B 10 C 2 11",expectedOutput:"2"}]},{id:"aed2_20",title:"20. Interseção de Intervalos 1D",description:`Intervalos.

**Tarefa:**
Lê 2 intervalos. Imprime Yes se intersetam.`,initialCode:`import java.util.*;
public class Main { ... }`,solutionCode:`import java.util.*;
class Interval implements Comparable<Interval> { int s, e; Interval(int a, int b){s=a;e=b;} public int compareTo(Interval o){return s-o.s;} }
public class Main {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        Interval[] i = {new Interval(sc.nextInt(), sc.nextInt()), new Interval(sc.nextInt(), sc.nextInt())};
        Arrays.sort(i);
        if(i[0].e >= i[1].s) System.out.println("Yes");
    }
}`,testCases:[{input:"1 3 2 4",expectedOutput:"Yes"}]},{id:"aed2_21",title:"21. Mediana Dinâmica (Two Heaps)",description:`Mediana.

**Tarefa:**
Lê 2 numeros. Imprime o menor (como simulação de mediana stream).`,initialCode:`import java.util.*;
public class Main { ... }`,solutionCode:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        PriorityQueue<Integer> lo = new PriorityQueue<>(Collections.reverseOrder());
        lo.add(sc.nextInt()); int x=sc.nextInt();
        System.out.println(lo.peek());
    }
}`,testCases:[{input:"5 10",expectedOutput:"5"}]},{id:"aed2_22",title:"22. Representação de Grafos",description:`Lista de adjacência.

**Tarefa:**
Lê 3 inteiros (u, v, node). Cria aresta u-v. Imprime primeiro vizinho de node.`,initialCode:`import java.util.*;
public class Main { ... }`,solutionCode:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int V=3;
        List<Integer>[] adj = new ArrayList[V];
        for(int i=0;i<V;i++) adj[i]=new ArrayList<>();
        int u=sc.nextInt(), v=sc.nextInt();
        adj[u].add(v); adj[v].add(u);
        System.out.println(adj[sc.nextInt()].get(0));
    }
}`,testCases:[{input:"0 1 0",expectedOutput:"1"}]},{id:"aed2_23",title:"23. Grau de um Vértice",description:`Grau.

**Tarefa:**
Lê V, E. Lê E arestas. Imprime grau do vértice 0.`,initialCode:`import java.util.*;
public class Main { ... }`,solutionCode:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int V=sc.nextInt(), E=sc.nextInt();
        int[] deg = new int[V];
        for(int i=0; i<E; i++) { int u=sc.nextInt(), v=sc.nextInt(); deg[u]++; deg[v]++; }
        System.out.println(deg[0]);
    }
}`,testCases:[{input:"3 2 0 1 1 2",expectedOutput:"1"}]},{id:"aed2_24",title:"24. Deteção de Anagramas",description:`Anagramas.

**Tarefa:**
Lê 2 strings. Imprime true se anagramas.`,initialCode:`import java.util.*;
public class Main { ... }`,solutionCode:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        char[] a = sc.next().toCharArray(), b = sc.next().toCharArray();
        Arrays.sort(a); Arrays.sort(b);
        System.out.println(Arrays.equals(a, b));
    }
}`,testCases:[{input:"abc cba",expectedOutput:"true"}]},{id:"aed2_25",title:"25. Remover Duplicados (LinkedHashSet)",description:`LinkedHashSet.

**Tarefa:**
Lê N e inteiros. Imprime tamanho set.`,initialCode:`import java.util.*;
public class Main { ... }`,solutionCode:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        LinkedHashSet<Integer> s = new LinkedHashSet<>();
        int n=sc.nextInt(); for(int i=0;i<n;i++) s.add(sc.nextInt());
        System.out.println(s.size());
    }
}`,testCases:[{input:"3 1 2 1",expectedOutput:"2"}]},{id:"aed2_26",title:"26. Counting Sort",description:`Counting Sort.

**Tarefa:**
Lê N e array. Ordena e imprime.`,initialCode:`import java.util.Scanner;
public class Main { ... }`,solutionCode:`import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        int[] cnt = new int[10];
        for(int i=0;i<n;i++) cnt[sc.nextInt()]++;
        for(int i=0; i<10; i++) while(cnt[i]-->0) System.out.print(i+" ");
    }
}`,testCases:[{input:"7 1 4 1 2 7 5 2",expectedOutput:"1 1 2 2 4 5 7 "}]},{id:"aed2_27",title:"27. Busca Binária Recursiva",description:`BS Recursivo.

**Tarefa:**
Lê N, array ordenado e alvo. Imprime indice.`,initialCode:`import java.util.Scanner;
public class Main { ... }`,solutionCode:`import java.util.Scanner;
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
}`,testCases:[{input:"",expectedOutput:"Invalido"}]}]},Tx={id:"poo2",name:"Programação Orientada a Objetos 2",shortName:"POO 2",language:"java",exercises:[{id:"poo2_01",title:"1. Exceções Personalizadas",description:'Podemos criar os nossos próprios tipos de erro estendendo `Exception`.\n\n**Tarefa:**\n1. Cria a classe `IdadeInvalidaException` que estende `Exception`.\n2. No main, cria um método `check(int age)` que lança esta exceção se `age < 0`.\n3. Lê um número inteiro do input.\n4. Chama o método com esse número e captura a exceção, imprimindo a mensagem "Negativo" se ocorrer.',initialCode:`import java.util.Scanner;
public class Main { ... }
class IdadeInvalidaException extends Exception {
    //...
}`,solutionCode:`import java.util.Scanner;
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
}
class IdadeInvalidaException extends Exception { public IdadeInvalidaException(String s){super(s);} }`,testCases:[{input:"-5",expectedOutput:"Negativo"}]},{id:"poo2_02",title:"2. Try-with-resources (AutoCloseable)",description:'Para garantir que recursos (ficheiros, conexões) são fechados, implementamos `AutoCloseable`.\n\n**Tarefa:**\n1. Cria classe `Recurso` que implementa `AutoCloseable`. No método `close()`, imprime "Fechado".\n2. Usa a sintaxe `try(Recurso r = new Recurso())`.\n3. Dentro do bloco try, imprime "Aberto ".',initialCode:`public class Main { ... }
class Recurso implements AutoCloseable {
    public void close() { System.out.print("Fechado"); }
}`,solutionCode:`public class Main {
    public static void main(String[] args) {
        try(Recurso r = new Recurso()) { System.out.print("Aberto "); }
    }
}
class Recurso implements AutoCloseable {
    public void close() { System.out.print("Fechado"); }
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
public class Main { ... }
class Outer {
    private String msg;
    Outer(String m) { msg = m; }
    class Inner { ... }
}`,solutionCode:`import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Outer o = new Outer(sc.next());
        Outer.Inner i = o.new Inner();
        i.show();
    }
}
class Outer {
    private String msg;
    Outer(String m) { msg = m; }
    class Inner { void show() { System.out.println(msg); } }
}`,testCases:[{input:"OlaMundo",expectedOutput:"OlaMundo"}]},{id:"poo2_07",title:"7. Classes Aninhadas Estáticas",description:"Uma classe estática dentro de outra comporta-se como uma classe normal, mas agrupada logicamente.\n\n**Tarefa:**\nDefine `static class Nested` dentro de `Outer` com método `show(String s)` que imprime a string. No main, lê uma string e passa-a para a nested class.",initialCode:`import java.util.Scanner;
public class Main { ... }
class Outer {
    static class Nested { ... }
}`,solutionCode:`import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Outer.Nested n = new Outer.Nested();
        n.show(sc.next());
    }
}
class Outer {
    static class Nested { void show(String s) { System.out.println(s); } }
}`,testCases:[{input:"StaticTest",expectedOutput:"StaticTest"}]},{id:"poo2_08",title:"8. Classes Locais",description:"Podemos definir uma classe dentro de um método. Ela só é visível lá.\n\n**Tarefa:**\nNo método `metodo(String texto)`, define `class Local`, instancia-a e chama um método dela que imprima `texto`.",initialCode:`import java.util.Scanner;
public class Main { ... }
class Outer {
    void metodo(String texto) {
        class Local { ... }
    }
}`,solutionCode:`import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        new Outer().metodo(sc.next());
    }
}
class Outer {
    void metodo(String texto) {
        class Local { void msg() { System.out.println(texto); } }
        new Local().msg();
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
public class Main { ... }
abstract class Animal { abstract void som(); }`,solutionCode:`import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        final String s = sc.next();
        Animal a = new Animal() {
            void som() { System.out.println(s); }
        };
        a.som();
    }
}
abstract class Animal { abstract void som(); }`,testCases:[{input:"Muuu",expectedOutput:"Muuu"}]},{id:"poo2_11",title:"11. Classes Genéricas (Box<T>)",description:"Generics permitem criar código reutilizável e type-safe.\n\n**Tarefa:**\n1. Cria a classe `Box<T>` que armazena um valor do tipo T.\n2. Métodos: `put(T v)` e `T get()`.\n3. Instancia `Box<String>`, guarda a palavra lida do input e imprime.",initialCode:`import java.util.Scanner;
public class Main { ... }
class Box<T> {
    T val;
    //...
}`,solutionCode:`import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Box<String> b = new Box<>(); b.put(sc.next());
        System.out.println(b.get());
    }
}
class Box<T> {
    T val; void put(T v){val=v;} T get(){return val;}
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
public class Main { ... }
class Numero<T extends Number> {
    T n;
    //...
}`,solutionCode:`import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println(new Numero<>(sc.nextInt()).valor());
    }
}
class Numero<T extends Number> {
    T n; Numero(T n){this.n=n;}
    double valor() { return n.doubleValue(); }
}`,testCases:[{input:"10",expectedOutput:"10.0"}]},{id:"poo2_14",title:"14. Múltiplos Tipos Genéricos (Pair)",description:'Classes podem ter vários parâmetros de tipo, como `Map<K, V>`.\n\n**Tarefa:**\nImplementa `class Pair<K, V>` com `toString` retornando "K=V". Lê um inteiro e uma string do input e cria o par.',initialCode:`import java.util.Scanner;
public class Main { ... }
class Pair<K,V> { ... }`,solutionCode:`import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println(new Pair<>(sc.nextInt(), sc.next()));
    }
}
class Pair<K,V> {
    K k; V v; Pair(K k, V v){this.k=k; this.v=v;}
    public String toString(){return k+"="+v;}
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
public class Main { ... }
interface Pagamento { void pagar(int v); }
class Cartao implements Pagamento { ... }
class Compra { ... }`,solutionCode:`import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        new Compra(new Cartao()).processar(sc.nextInt());
    }
}
interface Pagamento { void pagar(int v); }
class Cartao implements Pagamento { public void pagar(int v){System.out.println("Cartao "+v);} }
class Compra { 
    Pagamento p; Compra(Pagamento p){this.p=p;}
    void processar(int v){p.pagar(v);}
}`,testCases:[{input:"150",expectedOutput:"Cartao 150"}]},{id:"poo2_17",title:"17. Pattern Strategy: Ordenação",description:"Podemos usar Strategy para definir como ordenar dados.\n\n**Tarefa:**\n1. Interface `SortStrategy`.\n2. Implementação `Quick`. Imprime a string lida do input (nome do algoritmo).\n3. Classe `Sorter` onde injetamos a estratégia.",initialCode:`import java.util.Scanner;
public class Main { ... }
interface SortStrategy { void sort(); }
//...`,solutionCode:`import java.util.Scanner;
public class Main {
    public static void main(String[] a){
        Scanner sc = new Scanner(System.in);
        Sorter s=new Sorter(); s.set(new Quick(sc.next())); s.exec();
    }
}
interface SortStrategy { void sort(); }
class Quick implements SortStrategy {
    String name; Quick(String n){name=n;}
    public void sort(){System.out.print(name);}
}
class Sorter { SortStrategy s; void set(SortStrategy s){this.s=s;} void exec(){s.sort();} }`,testCases:[{input:"QuickSort",expectedOutput:"QuickSort"}]},{id:"poo2_18",title:"18. Strategy: Calculadora",description:"Calculadora onde cada operação é uma estratégia.\n\n**Tarefa:**\nDefine `interface Op`. Implementa `Soma`. Lê dois inteiros do input e imprime a soma.",initialCode:`import java.util.Scanner;
public class Main { ... }
interface Op { int calc(int a, int b); }
//...`,solutionCode:`import java.util.Scanner;
public class Main {
    public static void main(String[] a){
        Scanner sc = new Scanner(System.in);
        System.out.println(new Soma().calc(sc.nextInt(), sc.nextInt()));
    }
}
interface Op { int calc(int a, int b); }
class Soma implements Op { public int calc(int a, int b){return a+b;} }`,testCases:[{input:"5 7",expectedOutput:"12"}]},{id:"poo2_19",title:"19. Template Method: Bebidas",description:"O **Template Method** define o esqueleto de um algoritmo.\n\n**Tarefa:**\n1. `Bebida`: `preparar()` chama `misturar()`.\n2. `Cafe`: `misturar()` imprime a string lida do input.\n3. Instancia e chama preparar.",initialCode:`import java.util.Scanner;
public class Main { ... }
abstract class Bebida {
    final void preparar() { misturar(); }
    abstract void misturar();
}
//...`,solutionCode:`import java.util.Scanner;
public class Main {
    public static void main(String[] a){
        Scanner sc = new Scanner(System.in);
        new Cafe(sc.next()).preparar();
    }
}
abstract class Bebida {
    final void preparar() { misturar(); }
    abstract void misturar();
}
class Cafe extends Bebida {
    String s; Cafe(String s){this.s=s;}
    void misturar(){System.out.print(s);}
}`,testCases:[{input:"Expresso",expectedOutput:"Expresso"}]},{id:"poo2_20",title:"20. Template Method: Processamento",description:"Pipeline de dados: Ler -> Processar -> Salvar.\n\n**Tarefa:**\nImplementa `PDF` que estende `Processador`. No passo `processar`, imprime a palavra lida do input.",initialCode:`import java.util.Scanner;
public class Main { ... }
abstract class Processador { ... }`,solutionCode:`import java.util.Scanner;
public class Main {
    public static void main(String[] a){
        Scanner sc = new Scanner(System.in);
        new PDF(sc.next()).run();
    }
}
abstract class Processador {
    void run() { processar(); }
    abstract void processar();
}
class PDF extends Processador {
    String s; PDF(String s){this.s=s;}
    void processar(){System.out.print("PDF " + s);}
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
public class Main { ... }
class Colecao implements Iterable<Integer> { ... }`,solutionCode:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        for(int i : new Colecao(sc.nextInt(), sc.nextInt())) System.out.print(i);
    }
}
class Colecao implements Iterable<Integer> {
    Integer[] arr; 
    Colecao(int a, int b) { arr = new Integer[]{a, b}; }
    public Iterator<Integer> iterator() { return Arrays.asList(arr).iterator(); }
}`,testCases:[{input:"1 2",expectedOutput:"12"}]},{id:"poo2_23",title:"23. Implementar Iterator Manualmente",description:`Cria uma classe que implementa a interface \`Iterator<T>\` para percorrer um valor único.

**Tarefa:**
Lê um inteiro do input. Cria um iterador que retorna esse inteiro uma única vez.`,initialCode:`import java.util.*;
public class Main { ... }
class SingleIt implements Iterator<Integer> { ... }`,solutionCode:`import java.util.*;
public class Main {
    public static void main(String[] x){
        Scanner sc = new Scanner(System.in);
        SingleIt i=new SingleIt(sc.nextInt());
        System.out.println(i.next());
    }
}
class SingleIt implements Iterator<Integer> {
    int val; boolean done=false;
    SingleIt(int v){val=v;}
    public boolean hasNext(){return !done;}
    public Integer next(){done=true; return val;}
}`,testCases:[{input:"5",expectedOutput:"5"}]},{id:"poo2_24",title:"24. Pattern Composite: Sistema de Ficheiros",description:`O **Composite** trata objetos individuais e composições de forma uniforme.

**Tarefa:**
Lê duas strings (nomes de ficheiros). Adiciona a uma Pasta e imprime.`,initialCode:`import java.util.*;
public class Main { ... }
interface Comp { void show(); }
class File implements Comp { ... }
class Folder implements Comp { ... }`,solutionCode:`import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Folder root = new Folder();
        root.add(new File(sc.next()));
        root.add(new File(sc.next()));
        root.show();
    }
}
interface Comp { void show(); }
class File implements Comp { String n; File(String n){this.n=n;} public void show(){System.out.print(n+" ");} }
class Folder implements Comp {
    List<Comp> c = new ArrayList<>();
    void add(Comp i){c.add(i);}
    public void show(){ for(Comp i:c) i.show(); }
}`,testCases:[{input:"A B",expectedOutput:"A B "}]},{id:"poo2_25",title:"25. Composite: Expressões Aritméticas",description:"Representar `(A + B)` como árvore.\n\n**Tarefa:**\nLê dois inteiros A e B. Cria a árvore de soma `Soma(Num(A), Num(B))` e avalia.",initialCode:`import java.util.Scanner;
public class Main { ... }
interface Expr { int eval(); }
class Num implements Expr { ... }
class Soma implements Expr { ... }`,solutionCode:`import java.util.Scanner;
public class Main {
    public static void main(String[] a){
        Scanner sc = new Scanner(System.in);
        System.out.println(new Soma(new Num(sc.nextInt()), new Num(sc.nextInt())).eval());
    }
}
interface Expr { int eval(); }
class Num implements Expr { int v; Num(int v){this.v=v;} public int eval(){return v;} }
class Soma implements Expr { Expr l,r; Soma(Expr l, Expr r){this.l=l;this.r=r;} public int eval(){return l.eval()+r.eval();} }`,testCases:[{input:"1 2",expectedOutput:"3"}]},{id:"poo2_26",title:"26. Composite: HTML Generator",description:`Gerar HTML aninhado.

**Tarefa:**
Lê uma palavra. Envolve-a numa Tag \`div\` e imprime.`,initialCode:`import java.util.Scanner;
public class Main { ... }
abstract class Elem { abstract void print(); }
class Texto extends Elem { ... }
class Tag extends Elem { ... }`,solutionCode:`import java.util.*;
public class Main {
    public static void main(String[] a){
        Scanner sc = new Scanner(System.in);
        Tag t=new Tag(); t.add(new Texto(sc.next())); t.print();
    }
}
abstract class Elem { abstract void print(); }
class Texto extends Elem { String t; Texto(String t){this.t=t;} void print(){System.out.print(t);} }
class Tag extends Elem { 
    List<Elem> l=new ArrayList<>(); void add(Elem e){l.add(e);} 
    void print(){System.out.print("<div>"); for(Elem e:l)e.print(); System.out.print("</div>");}
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
public class Main { ... }
record Ponto(int x, int y) {}`,solutionCode:`import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Ponto p = new Ponto(sc.nextInt(), sc.nextInt());
        System.out.println(p.x());
    }
}
record Ponto(int x, int y) {}`,testCases:[{input:"10 20",expectedOutput:"10"}]}]},Ha=[Cx,jx,Nx,Ex,Mx,Ox,Ax,_x,Tx],wx=({code:r,setCode:m,language:d})=>{const u=A.useRef(null),h=A.useRef(null),f=()=>{u.current&&h.current&&(h.current.scrollTop=u.current.scrollTop)},g=r.split(`
`).length,M=Array.from({length:Math.max(g,15)},(y,v)=>v+1);return o.jsxs("div",{className:"flex flex-col h-full bg-[#1e1e1e] rounded-xl overflow-hidden border border-gray-700 shadow-2xl",children:[o.jsxs("div",{className:"bg-[#2d2d2d] px-4 py-2 text-xs text-gray-400 flex items-center justify-between border-b border-gray-700 select-none",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(Hf,{size:14,className:"text-accent-200"}),o.jsxs("span",{className:"font-bold",children:["Main.",d]})]}),o.jsx("span",{className:"text-gray-500",children:"UTF-8"})]}),o.jsxs("div",{className:"relative flex-1 flex min-h-0",children:[o.jsx("div",{ref:h,className:"w-12 bg-[#1e1e1e] text-gray-600 text-right pr-3 pt-4 font-mono text-sm leading-6 select-none border-r border-gray-800 overflow-hidden",children:M.map(y=>o.jsx("div",{children:y},y))}),o.jsx("textarea",{ref:u,onScroll:f,value:r,onChange:y=>m(y.target.value),className:"flex-1 w-full h-full bg-[#1e1e1e] text-[#d4d4d4] font-mono p-4 pl-3 pt-4 resize-none focus:outline-none text-sm leading-6 whitespace-pre",spellCheck:"false",autoCapitalize:"off",autoComplete:"off",autoCorrect:"off"})]})]})},zx=()=>{const[r,m]=A.useState(Ha[0]),[d,u]=A.useState(Ha[0].exercises[0]),[h,f]=A.useState(Ha[0].exercises[0].initialCode),[g,M]=A.useState(ae.IDLE),[y,v]=A.useState(""),[_,E]=A.useState(""),[U,R]=A.useState("terminal");A.useEffect(()=>{f(d.initialCode),M(ae.IDLE),v(""),E(""),R("terminal")},[d]);const k=5e3,Z=5e3,I=A.useRef(0),Q=async()=>{const q=Date.now();if(q-I.current<k){const J=Math.ceil((k-(q-I.current))/1e3);M(ae.IDLE),E(`⚠️ Aguarde ${J} segundos antes de executar novamente.`),R("details");return}if(h.length>Z){M(ae.ERROR),E(`⚠️ O código é demasiado longo (máximo ${Z} caracteres).`),R("details");return}I.current=q,M(ae.RUNNING),v(""),E(""),R("terminal");try{const J=await Sx({code:h,language:r.language,testCases:d.testCases});M(J.status),v(J.output||""),E(J.details||""),J.status===ae.SUCCESS?R("details"):J.output&&J.output.includes("--- ERRO ---")?R("terminal"):R("details")}catch{M(ae.ERROR),E("Erro interno na execução da simulação.")}},ne=()=>{d.solutionCode?(f(d.solutionCode),M(ae.IDLE),v(""),E("")):alert("Solução não disponível.")};return!Ha||Ha.length===0?o.jsx("div",{className:"p-10 text-center",children:"A carregar conteúdos..."}):o.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 h-[calc(100vh-64px)] flex flex-col md:flex-row gap-6",children:[o.jsx("div",{className:"hidden md:flex w-64 flex-col gap-4 overflow-y-auto pr-1",children:o.jsxs("div",{className:"bg-white p-4 rounded-xl shadow-sm border border-primary-200",children:[o.jsxs("h2",{className:"font-bold text-text-100 mb-4 flex items-center gap-2 text-sm uppercase tracking-wider",children:[o.jsx(Bf,{size:16,className:"text-accent-200"}),"Cadeiras"]}),o.jsx("div",{className:"space-y-3",children:Ha.map(q=>o.jsxs("div",{children:[o.jsxs("button",{onClick:()=>{m(q),u(q.exercises[0])},className:`w-full text-left px-3 py-2 rounded-lg text-sm font-bold transition-colors flex justify-between items-center ${r.id===q.id?"bg-primary-300 text-white shadow-md":"text-text-200 hover:bg-primary-100"}`,children:[q.shortName,o.jsx("span",{className:"text-[10px] font-mono opacity-80 bg-white/20 px-1 rounded",children:q.language})]}),r.id===q.id&&o.jsx("div",{className:"ml-3 mt-2 pl-3 border-l-2 border-primary-200 space-y-1",children:q.exercises.map(J=>o.jsxs("button",{onClick:()=>u(J),className:`w-full text-left px-2 py-1.5 rounded text-xs transition-all flex items-center gap-2 ${d.id===J.id?"text-accent-200 font-bold bg-accent-100/10":"text-text-200 hover:text-accent-200 hover:translate-x-1"}`,children:[o.jsx("div",{className:`w-1.5 h-1.5 rounded-full ${d.id===J.id?"bg-accent-200":"bg-gray-300"}`}),o.jsx("span",{className:"truncate",children:J.title})]},J.id))})]},q.id))})]})}),o.jsxs("div",{className:"flex-1 flex flex-col min-h-0 gap-4",children:[o.jsx("div",{className:"bg-white p-5 rounded-xl shadow-sm border border-primary-200 flex flex-col gap-3",children:o.jsxs("div",{className:"flex justify-between items-start",children:[o.jsxs("div",{children:[o.jsxs("h1",{className:"text-xl font-bold text-text-100 flex items-center gap-2",children:[d.title,g===ae.SUCCESS&&o.jsx(Io,{size:18,className:"text-green-500"})]}),o.jsx("p",{className:"text-text-200 text-sm mt-1",children:d.description})]}),o.jsxs("div",{className:"flex gap-2",children:[o.jsx("button",{onClick:ne,className:"px-3 py-2 text-accent-200 bg-accent-100/10 hover:bg-accent-100/20 rounded-lg transition-colors text-sm font-semibold",children:"Ver Solução"}),o.jsxs("button",{onClick:Q,disabled:g===ae.RUNNING,className:`flex items-center gap-2 px-6 py-2 rounded-lg font-bold text-white shadow-md transition-all text-sm ${g===ae.RUNNING?"bg-gray-400 cursor-not-allowed":"bg-green-600 hover:bg-green-500 hover:shadow-lg active:translate-y-0.5"}`,children:[g===ae.RUNNING?o.jsx(Tg,{className:"animate-spin",size:18}):o.jsx(bf,{size:18,fill:"currentColor"}),g===ae.RUNNING?"A Executar...":"Executar Código"]})]})]})}),o.jsxs("div",{className:"flex-1 grid lg:grid-cols-2 gap-4 min-h-0",children:[o.jsx(wx,{code:h,setCode:f,language:r.language}),o.jsxs("div",{className:"flex flex-col bg-white rounded-xl shadow-xl border border-primary-200 overflow-hidden",children:[o.jsxs("div",{className:"flex border-b border-gray-200 bg-gray-50",children:[o.jsxs("button",{onClick:()=>R("terminal"),className:`px-4 py-3 text-sm font-medium flex items-center gap-2 border-b-2 transition-colors ${U==="terminal"?"border-accent-200 text-accent-200 bg-white":"border-transparent text-gray-500 hover:text-gray-700"}`,children:[o.jsx(Bi,{size:16})," Terminal"]}),o.jsxs("button",{onClick:()=>R("details"),className:`px-4 py-3 text-sm font-medium flex items-center gap-2 border-b-2 transition-colors ${U==="details"?"border-accent-200 text-accent-200 bg-white":"border-transparent text-gray-500 hover:text-gray-700"}`,children:[g===ae.SUCCESS?o.jsx(Io,{size:16}):o.jsx(dg,{size:16}),"Resultado",g!==ae.IDLE&&g!==ae.RUNNING&&o.jsx("span",{className:`text-[10px] px-1.5 py-0.5 rounded-full ${g===ae.SUCCESS?"bg-green-100 text-green-700":"bg-red-100 text-red-700"}`,children:g===ae.SUCCESS?"PASSOU":"ERRO"})]})]}),o.jsxs("div",{className:"flex-1 p-0 overflow-y-auto bg-[#1e1e1e] relative",children:[U==="terminal"&&o.jsx("div",{className:"p-4 font-mono text-sm text-gray-300 min-h-full",children:g===ae.IDLE?o.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-gray-600 gap-2 opacity-50 mt-10",children:[o.jsx(Bi,{size:48}),o.jsx("p",{children:"O output do programa aparecerá aqui."})]}):o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"text-gray-500 text-xs mb-2 select-none",children:["$ ",r.language==="c"?"./main":"java Main"]}),o.jsx("div",{className:"whitespace-pre-wrap",children:y||o.jsx("span",{className:"text-gray-600 italic",children:"(Sem output no stdout...)"})}),g===ae.SUCCESS&&o.jsx("div",{className:"text-green-500 text-xs mt-4 select-none",children:"Process finished with exit code 0"}),g!==ae.SUCCESS&&g!==ae.RUNNING&&o.jsx("div",{className:"text-red-500 text-xs mt-4 select-none",children:"Process finished with errors"})]})}),U==="details"&&o.jsx("div",{className:"p-6 bg-white h-full overflow-y-auto",children:g===ae.IDLE?o.jsxs("div",{className:"text-center text-gray-400 mt-10",children:[o.jsx(bf,{size:48,className:"mx-auto mb-2 opacity-20"}),o.jsx("p",{children:"Executa o código para ver a análise."})]}):o.jsxs("div",{className:"space-y-6",children:[o.jsxs("div",{className:`p-4 rounded-lg flex items-start gap-3 ${g===ae.SUCCESS?"bg-green-50 text-green-800":g===ae.TIMEOUT?"bg-orange-50 text-orange-800":"bg-red-50 text-red-800"}`,children:[g===ae.SUCCESS?o.jsx(Io,{className:"mt-0.5 shrink-0"}):o.jsx(Bg,{className:"mt-0.5 shrink-0"}),o.jsxs("div",{children:[o.jsx("h3",{className:"font-bold",children:g===ae.SUCCESS?"Sucesso!":g===ae.TIMEOUT?"Time Limit Exceeded":"Falhou"}),o.jsx("p",{className:"text-sm mt-1 whitespace-pre-wrap",children:_})]})]}),o.jsxs("div",{children:[o.jsxs("h4",{className:"font-bold text-gray-700 mb-3 flex items-center gap-2",children:[o.jsx(Hf,{size:16})," Caso de Teste Validado"]}),o.jsx("div",{className:"space-y-3",children:d.testCases.map((q,J)=>o.jsx("div",{className:"border border-gray-200 rounded-lg p-3 text-sm",children:o.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-2",children:[o.jsxs("div",{children:[o.jsx("span",{className:"text-xs font-bold text-gray-400 uppercase tracking-wider",children:"Input"}),o.jsx("div",{className:"font-mono bg-gray-100 p-1.5 rounded text-gray-800 mt-1",children:q.input||"(vazio)"})]}),o.jsxs("div",{children:[o.jsx("span",{className:"text-xs font-bold text-gray-400 uppercase tracking-wider",children:"Esperado"}),o.jsx("div",{className:"font-mono bg-gray-100 p-1.5 rounded text-gray-800 mt-1",children:q.expectedOutput})]})]})},J))})]})]})})]})]})]})]})]})},Lx=()=>o.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[o.jsxs("div",{className:"flex items-center gap-4 mb-12",children:[o.jsx("div",{className:"bg-primary-100 p-3 rounded-lg",children:o.jsx(lg,{className:"text-accent-200",size:32})}),o.jsxs("div",{children:[o.jsx("h1",{className:"text-3xl font-bold text-text-100",children:"Eventos"}),o.jsx("p",{className:"text-text-200",children:"Fica a par de tudo o que acontece no NEEI."})]})]}),o.jsxs("div",{className:"w-full",children:[o.jsx("h2",{className:"text-2xl font-bold text-text-100 mb-6",children:"Calendário"}),o.jsx("div",{className:"bg-white p-4 rounded-2xl shadow-sm border border-primary-200 overflow-hidden",children:o.jsxs("div",{className:"relative w-full",style:{paddingTop:"75%"},children:[" ",o.jsx("iframe",{src:"https://calendar.google.com/calendar/embed?src=da58e0b778e56df2ac4813b8ad6e4dbb4bed212424c26797b5d9832efb5006ba%40group.calendar.google.com&ctz=Europe%2FLisbon",style:{border:0},className:"absolute top-0 left-0 w-full h-full rounded-lg",frameBorder:"0",scrolling:"no",title:"Calendário NEEI"})]})})]})]}),Dx=()=>o.jsx(Hh,{children:o.jsx(Xg,{children:o.jsxs(hh,{children:[o.jsx(zt,{path:"/",element:o.jsx(Kg,{})}),o.jsx(zt,{path:"/sobre",element:o.jsx(vx,{})}),o.jsx(zt,{path:"/eventos",element:o.jsx(Lx,{})}),o.jsx(zt,{path:"/projetos",element:o.jsx(hx,{})}),o.jsx(zt,{path:"/pertencer",element:o.jsx(gx,{})}),o.jsx(zt,{path:"/vagas",element:o.jsx(xx,{})}),o.jsx(zt,{path:"/quack",element:o.jsx(zx,{})})]})})}),kf=document.getElementById("root");if(!kf)throw new Error("Could not find root element to mount to");const Rx=jv.createRoot(kf);Rx.render(o.jsx(vv.StrictMode,{children:o.jsx(Dx,{})}));
