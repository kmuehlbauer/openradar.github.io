import{a as p}from"/openradar.github.io/_preview/3/build/_shared/chunk-QXPMMO3F.js";import{a as u}from"/openradar.github.io/_preview/3/build/_shared/chunk-ZOXRFJWB.js";import{c as i}from"/openradar.github.io/_preview/3/build/_shared/chunk-2NH4LW52.js";var l=i((g,o)=>{var c=u(),d=p();o.exports=n;n.displayName="jsdoc";n.aliases=[];function n(t){t.register(c),t.register(d),function(e){var a=e.languages.javascript,r=/\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})+\}/.source,s="(@(?:arg|argument|param|property)\\s+(?:"+r+"\\s+)?)";e.languages.jsdoc=e.languages.extend("javadoclike",{parameter:{pattern:RegExp(s+/(?:(?!\s)[$\w\xA0-\uFFFF.])+(?=\s|$)/.source),lookbehind:!0,inside:{punctuation:/\./}}}),e.languages.insertBefore("jsdoc","keyword",{"optional-parameter":{pattern:RegExp(s+/\[(?:(?!\s)[$\w\xA0-\uFFFF.])+(?:=[^[\]]+)?\](?=\s|$)/.source),lookbehind:!0,inside:{parameter:{pattern:/(^\[)[$\w\xA0-\uFFFF\.]+/,lookbehind:!0,inside:{punctuation:/\./}},code:{pattern:/(=)[\s\S]*(?=\]$)/,lookbehind:!0,inside:a,alias:"language-javascript"},punctuation:/[=[\]]/}},"class-name":[{pattern:RegExp(/(@(?:augments|class|extends|interface|memberof!?|template|this|typedef)\s+(?:<TYPE>\s+)?)[A-Z]\w*(?:\.[A-Z]\w*)*/.source.replace(/<TYPE>/g,function(){return r})),lookbehind:!0,inside:{punctuation:/\./}},{pattern:RegExp("(@[a-z]+\\s+)"+r),lookbehind:!0,inside:{string:a.string,number:a.number,boolean:a.boolean,keyword:e.languages.typescript.keyword,operator:/=>|\.\.\.|[&|?:*]/,punctuation:/[.,;=<>{}()[\]]/}}],example:{pattern:/(@example\s+(?!\s))(?:[^@\s]|\s+(?!\s))+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,lookbehind:!0,inside:{code:{pattern:/^([\t ]*(?:\*\s*)?)\S.*$/m,lookbehind:!0,inside:a,alias:"language-javascript"}}}}),e.languages.javadoclike.addSupport("javascript",e.languages.jsdoc)}(t)}});export{l as a};
