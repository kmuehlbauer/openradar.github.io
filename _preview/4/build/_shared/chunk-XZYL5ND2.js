import{a as v,b as _}from"/openradar.github.io/_preview/4/build/_shared/chunk-J6FHCSRC.js";import{c as k,e as V}from"/openradar.github.io/_preview/4/build/_shared/chunk-2NH4LW52.js";var G=k((fe,q)=>{"use strict";var S=Object.prototype.hasOwnProperty,Y=Object.prototype.toString,F=Object.defineProperty,N=Object.getOwnPropertyDescriptor,D=function(e){return typeof Array.isArray=="function"?Array.isArray(e):Y.call(e)==="[object Array]"},L=function(e){if(!e||Y.call(e)!=="[object Object]")return!1;var o=S.call(e,"constructor"),l=e.constructor&&e.constructor.prototype&&S.call(e.constructor.prototype,"isPrototypeOf");if(e.constructor&&!o&&!l)return!1;var i;for(i in e);return typeof i>"u"||S.call(e,i)},B=function(e,o){F&&o.name==="__proto__"?F(e,o.name,{enumerable:!0,configurable:!0,value:o.newValue,writable:!0}):e[o.name]=o.newValue},U=function(e,o){if(o==="__proto__")if(S.call(e,o)){if(N)return N(e,o).value}else return;return e[o]};q.exports=function n(){var e,o,l,i,t,a,u=arguments[0],d=1,h=arguments.length,w=!1;for(typeof u=="boolean"&&(w=u,u=arguments[1]||{},d=2),(u==null||typeof u!="object"&&typeof u!="function")&&(u={});d<h;++d)if(e=arguments[d],e!=null)for(o in e)l=U(u,o),i=U(e,o),u!==i&&(w&&i&&(L(i)||(t=D(i)))?(t?(t=!1,a=l&&D(l)?l:[]):a=l&&L(l)?l:{},B(u,{name:o,newValue:n(w,a,i)})):typeof i<"u"&&B(u,{name:o,newValue:i}));return u}});function C(n){if(n)throw n}var Q=V(v(),1),I=V(G(),1);function E(n){if(typeof n!="object"||n===null)return!1;let e=Object.getPrototypeOf(n);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)}function H(){let n=[],e={run:o,use:l};return e;function o(...i){let t=-1,a=i.pop();if(typeof a!="function")throw new TypeError("Expected function as last argument, not "+a);u(null,...i);function u(d,...h){let w=n[++t],b=-1;if(d){a(d);return}for(;++b<i.length;)(h[b]===null||h[b]===void 0)&&(h[b]=i[b]);i=h,w?ee(w,u)(...h):a(null,...h)}}function l(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return n.push(i),e}}function ee(n,e){let o;return l;function l(...a){let u=n.length>a.length,d;u&&a.push(i);try{d=n.apply(this,a)}catch(h){let w=h;if(u&&o)throw w;return i(w)}u||(d instanceof Promise?d.then(t,i):d instanceof Error?i(d):t(d))}function i(a,...u){o||(o=!0,e(a,...u))}function t(a){i(null,a)}}var ne=W().freeze(),R={}.hasOwnProperty;function W(){let n=H(),e=[],o={},l,i=-1;return t.data=a,t.Parser=void 0,t.Compiler=void 0,t.freeze=u,t.attachers=e,t.use=d,t.parse=h,t.stringify=w,t.run=b,t.runSync=X,t.process=Z,t.processSync=$,t;function t(){let r=W(),f=-1;for(;++f<e.length;)r.use(...e[f]);return r.data((0,I.default)(!0,{},o)),r}function a(r,f){return typeof r=="string"?arguments.length===2?(T("data",l),o[r]=f,t):R.call(o,r)&&o[r]||null:r?(T("data",l),o=r,t):o}function u(){if(l)return t;for(;++i<e.length;){let[r,...f]=e[i];if(f[0]===!1)continue;f[0]===!0&&(f[0]=void 0);let s=r.call(t,...f);typeof s=="function"&&n.use(s)}return l=!0,i=Number.POSITIVE_INFINITY,t}function d(r,...f){let s;if(T("use",l),r!=null)if(typeof r=="function")x(r,...f);else if(typeof r=="object")Array.isArray(r)?O(r):m(r);else throw new TypeError("Expected usable value, not `"+r+"`");return s&&(o.settings=Object.assign(o.settings||{},s)),t;function y(c){if(typeof c=="function")x(c);else if(typeof c=="object")if(Array.isArray(c)){let[p,...g]=c;x(p,...g)}else m(c);else throw new TypeError("Expected usable value, not `"+c+"`")}function m(c){O(c.plugins),c.settings&&(s=Object.assign(s||{},c.settings))}function O(c){let p=-1;if(c!=null)if(Array.isArray(c))for(;++p<c.length;){let g=c[p];y(g)}else throw new TypeError("Expected a list of plugins, not `"+c+"`")}function x(c,p){let g=-1,P;for(;++g<e.length;)if(e[g][0]===c){P=e[g];break}P?(E(P[1])&&E(p)&&(p=(0,I.default)(!0,P[1],p)),P[1]=p):e.push([...arguments])}}function h(r){t.freeze();let f=A(r),s=t.Parser;return z("parse",s),J(s,"parse")?new s(String(f),f).parse():s(String(f),f)}function w(r,f){t.freeze();let s=A(f),y=t.Compiler;return j("stringify",y),K(r),J(y,"compile")?new y(r,s).compile():y(r,s)}function b(r,f,s){if(K(r),t.freeze(),!s&&typeof f=="function"&&(s=f,f=void 0),!s)return new Promise(y);y(null,s);function y(m,O){n.run(r,A(f),x);function x(c,p,g){p=p||r,c?O(c):m?m(p):s(null,p,g)}}}function X(r,f){let s,y;return t.run(r,f,m),M("runSync","run",y),s;function m(O,x){C(O),s=x,y=!0}}function Z(r,f){if(t.freeze(),z("process",t.Parser),j("process",t.Compiler),!f)return new Promise(s);s(null,f);function s(y,m){let O=A(r);t.run(t.parse(O),O,(c,p,g)=>{if(c||!p||!g)x(c);else{let P=t.stringify(p,g);P==null||(oe(P)?g.value=P:g.result=P),x(c,g)}});function x(c,p){c||!p?m(c):y?y(p):f(null,p)}}}function $(r){let f;t.freeze(),z("processSync",t.Parser),j("processSync",t.Compiler);let s=A(r);return t.process(s,y),M("processSync","process",f),s;function y(m){f=!0,C(m)}}}function J(n,e){return typeof n=="function"&&n.prototype&&(te(n.prototype)||e in n.prototype)}function te(n){let e;for(e in n)if(R.call(n,e))return!0;return!1}function z(n,e){if(typeof e!="function")throw new TypeError("Cannot `"+n+"` without `Parser`")}function j(n,e){if(typeof e!="function")throw new TypeError("Cannot `"+n+"` without `Compiler`")}function T(n,e){if(e)throw new Error("Cannot call `"+n+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function K(n){if(!E(n)||typeof n.type!="string")throw new TypeError("Expected node, got `"+n+"`")}function M(n,e,o){if(!o)throw new Error("`"+n+"` finished async. Use `"+e+"` instead")}function A(n){return re(n)?n:new _(n)}function re(n){return Boolean(n&&typeof n=="object"&&"message"in n&&"messages"in n)}function oe(n){return typeof n=="string"||(0,Q.default)(n)}export{G as a,ne as b};
