import{b as d}from"/openradar.github.io/build/_shared/chunk-2NH4LW52.js";function s(n,e){for(var i=0;i<e.length;i++)c[e[i]]=n}function g(n,e){if(n.eatSpace())return null;var i=n.sol(),t=n.next();if(t==="\\")return n.next(),null;if(t==="'"||t==='"'||t==="`")return e.tokens.unshift(l(t,t==="`"?"quote":"string")),u(n,e);if(t==="#")return i&&n.eat("!")?(n.skipToEnd(),"meta"):(n.skipToEnd(),"comment");if(t==="$")return e.tokens.unshift(a),u(n,e);if(t==="+"||t==="=")return"operator";if(t==="-")return n.eat("-"),n.eatWhile(/\w/),"attribute";if(t=="<"){if(n.match("<<"))return"operator";var o=n.match(/^<-?\s*(?:['"]([^'"]*)['"]|([^'"\s]*))/);if(o)return e.tokens.unshift(v(o[1]||o[2])),"string.special"}if(/\d/.test(t)&&(n.eatWhile(/\d/),n.eol()||!/\w/.test(n.peek())))return"number";n.eatWhile(/[\w-]/);var r=n.current();return n.peek()==="="&&/\w+/.test(r)?"def":c.hasOwnProperty(r)?c[r]:null}function l(n,e){var i=n=="("?")":n=="{"?"}":n;return function(t,o){for(var r,f=!1;(r=t.next())!=null;){if(r===i&&!f){o.tokens.shift();break}else if(r==="$"&&!f&&n!=="'"&&t.peek()!=i){f=!0,t.backUp(1),o.tokens.unshift(a);break}else{if(!f&&n!==i&&r===n)return o.tokens.unshift(l(n,e)),u(t,o);if(!f&&/['"]/.test(r)&&!/['"]/.test(n)){o.tokens.unshift(w(r,"string")),t.backUp(1);break}}f=!f&&r==="\\"}return e}}function w(n,e){return function(i,t){return t.tokens[0]=l(n,e),i.next(),u(i,t)}}function v(n){return function(e,i){return e.sol()&&e.string==n&&i.tokens.shift(),e.skipToEnd(),"string.special"}}function u(n,e){return(e.tokens[0]||g)(n,e)}var c,k,h,p,a,x,b=d(()=>{c={};k=["true","false"],h=["if","then","do","else","elif","while","until","for","in","esac","fi","fin","fil","done","exit","set","unset","export","function"],p=["ab","awk","bash","beep","cat","cc","cd","chown","chmod","chroot","clear","cp","curl","cut","diff","echo","find","gawk","gcc","get","git","grep","hg","kill","killall","ln","ls","make","mkdir","openssl","mv","nc","nl","node","npm","ping","ps","restart","rm","rmdir","sed","service","sh","shopt","shred","source","sort","sleep","ssh","start","stop","su","sudo","svn","tee","telnet","top","touch","vi","vim","wall","wc","wget","who","write","yes","zsh"];s("atom",k);s("keyword",h);s("builtin",p);a=function(n,e){e.tokens.length>1&&n.eat("$");var i=n.next();return/['"({]/.test(i)?(e.tokens[0]=l(i,i=="("?"quote":i=="{"?"def":"string"),u(n,e)):(/\d/.test(i)||n.eatWhile(/\w/),e.tokens.shift(),"def")};x={name:"shell",startState:function(){return{tokens:[]}},token:function(n,e){return u(n,e)},languageData:{autocomplete:k.concat(h,p),closeBrackets:{brackets:["(","[","{","'",'"',"`"]},commentTokens:{line:"#"}}}});b();export{x as shell};
