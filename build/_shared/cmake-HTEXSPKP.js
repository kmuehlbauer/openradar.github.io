import{b as c}from"/openradar.github.io/build/_shared/chunk-2NH4LW52.js";function t(n,i){for(var e,r,u=!1;!n.eol()&&(e=n.next())!=i.pending;){if(e==="$"&&r!="\\"&&i.pending=='"'){u=!0;break}r=e}return u&&n.backUp(1),e==i.pending?i.continueString=!1:i.continueString=!0,"string"}function a(n,i){var e=n.next();return e==="$"?n.match(f)?"variableName.special":"variable":i.continueString?(n.backUp(1),t(n,i)):n.match(/(\s+)?\w+\(/)||n.match(/(\s+)?\w+\ \(/)?(n.backUp(1),"def"):e=="#"?(n.skipToEnd(),"comment"):e=="'"||e=='"'?(i.pending=e,t(n,i)):e=="("||e==")"?"bracket":e.match(/[0-9]/)?"number":(n.eatWhile(/[\w-]/),null)}var f,o,l=c(()=>{f=/({)?[a-zA-Z0-9_]+(})?/;o={name:"cmake",startState:function(){var n={};return n.inDefinition=!1,n.inInclude=!1,n.continueString=!1,n.pending=!1,n},token:function(n,i){return n.eatSpace()?null:a(n,i)}}});l();export{o as cmake};
