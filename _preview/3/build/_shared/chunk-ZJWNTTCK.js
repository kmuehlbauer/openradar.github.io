import{a as n}from"/openradar.github.io/_preview/3/build/_shared/chunk-7H4MNJGC.js";import{c as r}from"/openradar.github.io/_preview/3/build/_shared/chunk-2NH4LW52.js";var s=r((l,t)=>{var i=n();t.exports=a;a.displayName="scala";a.aliases=[];function a(e){e.register(i),e.languages.scala=e.languages.extend("java",{"triple-quoted-string":{pattern:/"""[\s\S]*?"""/,greedy:!0,alias:"string"},string:{pattern:/("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0},keyword:/<-|=>|\b(?:abstract|case|catch|class|def|do|else|extends|final|finally|for|forSome|if|implicit|import|lazy|match|new|null|object|override|package|private|protected|return|sealed|self|super|this|throw|trait|try|type|val|var|while|with|yield)\b/,number:/\b0x(?:[\da-f]*\.)?[\da-f]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e\d+)?[dfl]?/i,builtin:/\b(?:Any|AnyRef|AnyVal|Boolean|Byte|Char|Double|Float|Int|Long|Nothing|Short|String|Unit)\b/,symbol:/'[^\d\s\\]\w*/}),e.languages.insertBefore("scala","triple-quoted-string",{"string-interpolation":{pattern:/\b[a-z]\w*(?:"""(?:[^$]|\$(?:[^{]|\{(?:[^{}]|\{[^{}]*\})*\}))*?"""|"(?:[^$"\r\n]|\$(?:[^{]|\{(?:[^{}]|\{[^{}]*\})*\}))*")/i,greedy:!0,inside:{id:{pattern:/^\w+/,greedy:!0,alias:"function"},escape:{pattern:/\\\$"|\$[$"]/,greedy:!0,alias:"symbol"},interpolation:{pattern:/\$(?:\w+|\{(?:[^{}]|\{[^{}]*\})*\})/,greedy:!0,inside:{punctuation:/^\$\{?|\}$/,expression:{pattern:/[\s\S]+/,inside:e.languages.scala}}},string:/[\s\S]+/}}}),delete e.languages.scala["class-name"],delete e.languages.scala.function}});export{s as a};
