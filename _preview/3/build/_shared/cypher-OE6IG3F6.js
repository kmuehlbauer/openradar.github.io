import{b as p}from"/kmuehlbauer.github.io/openradar.github.io/build/_shared/chunk-2NH4LW52.js";var l,d,o,c,i,f,h,x,g,u,y,v=p(()=>{l=function(n){return new RegExp("^(?:"+n.join("|")+")$","i")},d=function(n){i=null;var e=n.next();if(e==='"')return n.match(/^.*?"/),"string";if(e==="'")return n.match(/^.*?'/),"string";if(/[{}\(\),\.;\[\]]/.test(e))return i=e,"punctuation";if(e==="/"&&n.eat("/"))return n.skipToEnd(),"comment";if(u.test(e))return n.eatWhile(u),null;if(n.eatWhile(/[_\w\d]/),n.eat(":"))return n.eatWhile(/[\w\d_\-]/),"atom";var t=n.current();return f.test(t)?"builtin":h.test(t)?"def":x.test(t)||g.test(t)?"keyword":"variable"},o=function(n,e,t){return n.context={prev:n.context,indent:n.indent,col:t,type:e}},c=function(n){return n.indent=n.context.indent,n.context=n.context.prev},f=l(["abs","acos","allShortestPaths","asin","atan","atan2","avg","ceil","coalesce","collect","cos","cot","count","degrees","e","endnode","exp","extract","filter","floor","haversin","head","id","keys","labels","last","left","length","log","log10","lower","ltrim","max","min","node","nodes","percentileCont","percentileDisc","pi","radians","rand","range","reduce","rel","relationship","relationships","replace","reverse","right","round","rtrim","shortestPath","sign","sin","size","split","sqrt","startnode","stdev","stdevp","str","substring","sum","tail","tan","timestamp","toFloat","toInt","toString","trim","type","upper"]),h=l(["all","and","any","contains","exists","has","in","none","not","or","single","xor"]),x=l(["as","asc","ascending","assert","by","case","commit","constraint","create","csv","cypher","delete","desc","descending","detach","distinct","drop","else","end","ends","explain","false","fieldterminator","foreach","from","headers","in","index","is","join","limit","load","match","merge","null","on","optional","order","periodic","profile","remove","return","scan","set","skip","start","starts","then","true","union","unique","unwind","using","when","where","with","call","yield"]),g=l(["access","active","assign","all","alter","as","catalog","change","copy","create","constraint","constraints","current","database","databases","dbms","default","deny","drop","element","elements","exists","from","grant","graph","graphs","if","index","indexes","label","labels","management","match","name","names","new","node","nodes","not","of","on","or","password","populated","privileges","property","read","relationship","relationships","remove","replace","required","revoke","role","roles","set","show","start","status","stop","suspended","to","traverse","type","types","user","users","with","write"]),u=/[*+\-<>=&|~%^]/,y={name:"cypher",startState:function(){return{tokenize:d,context:null,indent:0,col:0}},token:function(n,e){if(n.sol()&&(e.context&&e.context.align==null&&(e.context.align=!1),e.indent=n.indentation()),n.eatSpace())return null;var t=e.tokenize(n,e);if(t!=="comment"&&e.context&&e.context.align==null&&e.context.type!=="pattern"&&(e.context.align=!0),i==="(")o(e,")",n.column());else if(i==="[")o(e,"]",n.column());else if(i==="{")o(e,"}",n.column());else if(/[\]\}\)]/.test(i)){for(;e.context&&e.context.type==="pattern";)c(e);e.context&&i===e.context.type&&c(e)}else i==="."&&e.context&&e.context.type==="pattern"?c(e):/atom|string|variable/.test(t)&&e.context&&(/[\}\]]/.test(e.context.type)?o(e,"pattern",n.column()):e.context.type==="pattern"&&!e.context.align&&(e.context.align=!0,e.context.col=n.column()));return t},indent:function(n,e,t){var a=e&&e.charAt(0),r=n.context;if(/[\]\}]/.test(a))for(;r&&r.type==="pattern";)r=r.prev;var s=r&&a===r.type;return r?r.type==="keywords"?null:r.align?r.col+(s?0:1):r.indent+(s?0:t.unit):0}}});v();export{y as cypher};
