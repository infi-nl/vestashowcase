import{S as A,Q as V,R as Q,T as y,U as W,V as m,W as N,X as c,g as P,z as C,Y as X,Z as J,x as k,h as F,a as ee,_ as re,$ as ne,a0 as ae,a1 as ie,F as te,E as B,a2 as U,P as p,a3 as K,G as se,a4 as fe,a5 as M,a6 as ue,a7 as le,w as G,m as _e,a8 as de,a9 as ve,aa as ce,ab as oe,i as Z,ac as be,ad as H,ae as he,d as $,af as Pe,ag as ge,ah as ye}from"./runtime.ZziI6xUG.js";function I(e,n=null,o){if(typeof e!="object"||e===null||A in e)return e;const d=J(e);if(d!==V&&d!==Q)return e;var s=new Map,_=k(e),b=y(0);_&&s.set("length",y(e.length));var g;return new Proxy(e,{defineProperty(f,r,a){(!("value"in a)||a.configurable===!1||a.enumerable===!1||a.writable===!1)&&W();var t=s.get(r);return t===void 0?(t=y(a.value),s.set(r,t)):m(t,I(a.value,g)),!0},deleteProperty(f,r){var a=s.get(r);if(a===void 0)r in f&&s.set(r,y(c));else{if(_&&typeof r=="string"){var t=s.get("length"),i=Number(r);Number.isInteger(i)&&i<t.v&&m(t,i)}m(a,c),j(b)}return!0},get(f,r,a){var v;if(r===A)return e;var t=s.get(r),i=r in f;if(t===void 0&&(!i||(v=N(f,r))!=null&&v.writable)&&(t=y(I(i?f[r]:c,g)),s.set(r,t)),t!==void 0){var u=P(t);return u===c?void 0:u}return Reflect.get(f,r,a)},getOwnPropertyDescriptor(f,r){var a=Reflect.getOwnPropertyDescriptor(f,r);if(a&&"value"in a){var t=s.get(r);t&&(a.value=P(t))}else if(a===void 0){var i=s.get(r),u=i==null?void 0:i.v;if(i!==void 0&&u!==c)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return a},has(f,r){var u;if(r===A)return!0;var a=s.get(r),t=a!==void 0&&a.v!==c||Reflect.has(f,r);if(a!==void 0||C!==null&&(!t||(u=N(f,r))!=null&&u.writable)){a===void 0&&(a=y(t?I(f[r],g):c),s.set(r,a));var i=P(a);if(i===c)return!1}return t},set(f,r,a,t){var R;var i=s.get(r),u=r in f;if(_&&r==="length")for(var v=a;v<i.v;v+=1){var w=s.get(v+"");w!==void 0?m(w,c):v in f&&(w=y(c),s.set(v+"",w))}i===void 0?(!u||(R=N(f,r))!=null&&R.writable)&&(i=y(void 0),m(i,I(a,g)),s.set(r,i)):(u=i.v!==c,m(i,I(a,g)));var h=Reflect.getOwnPropertyDescriptor(f,r);if(h!=null&&h.set&&h.set.call(t,a),!u){if(_&&typeof r=="string"){var S=s.get("length"),x=Number(r);Number.isInteger(x)&&x>=S.v&&m(S,x+1)}j(b)}return!0},ownKeys(f){P(b);var r=Reflect.ownKeys(f).filter(i=>{var u=s.get(i);return u===void 0||u.v!==c});for(var[a,t]of s)t.v!==c&&!(a in f)&&r.push(a);return r},setPrototypeOf(){X()}})}function j(e,n=1){m(e,e.v+n)}function Ie(e,n,o=!1){F&&ee();var d=e,s=null,_=null,b=c,g=o?ne:0,f=!1;const r=(t,i=!0)=>{f=!0,a(i,t)},a=(t,i)=>{if(b===(b=t))return;let u=!1;if(F){const v=d.data===ae;!!b===v&&(d=ie(),te(d),B(!1),u=!0)}b?(s?U(s):i&&(s=p(()=>i(d))),_&&K(_,()=>{_=null})):(_?U(_):i&&(_=p(()=>i(d))),s&&K(s,()=>{s=null})),u&&B(!0)};re(()=>{f=!1,n(r),f||a(null,null)},g),F&&(d=se)}let T=!1;function me(e){var n=T;try{return T=!1,[e(),T]}finally{T=n}}const we={get(e,n){if(!e.exclude.includes(n))return P(e.version),n in e.special?e.special[n]():e.props[n]},set(e,n,o){return n in e.special||(e.special[n]=Re({get[n](){return e.props[n]}},n,H)),e.special[n](o),M(e.version),!0},getOwnPropertyDescriptor(e,n){if(!e.exclude.includes(n)&&n in e.props)return{enumerable:!0,configurable:!0,value:e.props[n]}},deleteProperty(e,n){return e.exclude.includes(n)||(e.exclude.push(n),M(e.version)),!0},has(e,n){return e.exclude.includes(n)?!1:n in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(n=>!e.exclude.includes(n))}};function Se(e,n){return new Proxy({props:e,exclude:n,special:{},version:y(0)},we)}function z(e){for(var n=C,o=C;n!==null&&!(n.f&(ue|le));)n=n.parent;try{return G(n),e()}finally{G(o)}}function Re(e,n,o,d){var q;var s=(o&Pe)!==0,_=!_e||(o&de)!==0,b=(o&ve)!==0,g=(o&ye)!==0,f=!1,r;b?[r,f]=me(()=>e[n]):r=e[n];var a=A in e||ce in e,t=((q=N(e,n))==null?void 0:q.set)??(a&&b&&n in e?l=>e[n]=l:void 0),i=d,u=!0,v=!1,w=()=>(v=!0,u&&(u=!1,g?i=$(d):i=d),i);r===void 0&&d!==void 0&&(t&&_&&oe(),r=w(),t&&t(r));var h;if(_)h=()=>{var l=e[n];return l===void 0?w():(u=!0,v=!1,l)};else{var S=z(()=>(s?Z:be)(()=>e[n]));S.f|=fe,h=()=>{var l=P(S);return l!==void 0&&(i=void 0),l===void 0?i:l}}if(!(o&H))return h;if(t){var x=e.$$legacy;return function(l,E){return arguments.length>0?((!_||!E||x||f)&&t(E?h():l),l):h()}}var R=!1,Y=!1,D=ge(r),O=z(()=>Z(()=>{var l=h(),E=P(D);return R?(R=!1,Y=!0,E):(Y=!1,D.v=l)}));return s||(O.equals=he),function(l,E){if(arguments.length>0){const L=E?P(O):_&&b?I(l):l;return O.equals(L)||(R=!0,m(D,L),v&&i!==void 0&&(i=L),$(()=>P(O))),l}return P(O)}}export{I as a,Ie as i,Se as l,Re as p};