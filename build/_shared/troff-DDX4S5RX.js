import{b as u}from"/openradar.github.io/build/_shared/chunk-2NH4LW52.js";function f(n){if(n.eatSpace())return null;var t=n.sol(),c=n.next();if(c==="\\")return n.match("fB")||n.match("fR")||n.match("fI")||n.match("u")||n.match("d")||n.match("%")||n.match("&")?"string":n.match("m[")?(n.skipTo("]"),n.next(),"string"):n.match("s+")||n.match("s-")?(n.eatWhile(/[\d-]/),"string"):((n.match("(")||n.match("*("))&&n.eatWhile(/[\w-]/),"string");if(t&&(c==="."||c==="'")&&n.eat("\\")&&n.eat('"'))return n.skipToEnd(),"comment";if(t&&c==="."){if(n.match("B ")||n.match("I ")||n.match("R "))return"attribute";if(n.match("TH ")||n.match("SH ")||n.match("SS ")||n.match("HP "))return n.skipToEnd(),"quote";if(n.match(/[A-Z]/)&&n.match(/[A-Z]/)||n.match(/[a-z]/)&&n.match(/[a-z]/))return"attribute"}n.eatWhile(/[\w-]/);var i=n.current();return h.hasOwnProperty(i)?h[i]:null}function o(n,t){return(t.tokens[0]||f)(n,t)}var h,l,r=u(()=>{h={};l={name:"troff",startState:function(){return{tokens:[]}},token:function(n,t){return o(n,t)}}});r();export{l as troff};
