import{a as u}from"/openradar.github.io/build/_shared/chunk-N5W7TVN3.js";import{a as s}from"/openradar.github.io/build/_shared/chunk-3MZURCDM.js";import{c as p}from"/openradar.github.io/build/_shared/chunk-2NH4LW52.js";var d=p((c,l)=>{var g=s(),o=u();l.exports=n;n.displayName="latte";n.aliases=[];function n(e){e.register(g),e.register(o),function(a){a.languages.latte={comment:/^\{\*[\s\S]*/,"latte-tag":{pattern:/(^\{(?:\/(?=[a-z]))?)(?:[=_]|[a-z]\w*\b(?!\())/i,lookbehind:!0,alias:"important"},delimiter:{pattern:/^\{\/?|\}$/,alias:"punctuation"},php:{pattern:/\S(?:[\s\S]*\S)?/,alias:"language-php",inside:a.languages.php}};var r=a.languages.extend("markup",{});a.languages.insertBefore("inside","attr-value",{"n-attr":{pattern:/n:[\w-]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+))?/,inside:{"attr-name":{pattern:/^[^\s=]+/,alias:"important"},"attr-value":{pattern:/=[\s\S]+/,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}],php:{pattern:/\S(?:[\s\S]*\S)?/,inside:a.languages.php}}}}}},r.tag),a.hooks.add("before-tokenize",function(t){if(t.language==="latte"){var i=/\{\*[\s\S]*?\*\}|\{[^'"\s{}*](?:[^"'/{}]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|\/\*(?:[^*]|\*(?!\/))*\*\/)*\}/g;a.languages["markup-templating"].buildPlaceholders(t,"latte",i),t.grammar=r}}),a.hooks.add("after-tokenize",function(t){a.languages["markup-templating"].tokenizePlaceholders(t,"latte")})}(e)}});export{d as a};
