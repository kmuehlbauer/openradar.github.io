import{a as b}from"/kmuehlbauer.github.io/openradar.github.io/build/_shared/chunk-IG7MYDTV.js";import{c as y}from"/kmuehlbauer.github.io/openradar.github.io/build/_shared/chunk-2NH4LW52.js";var x=y((S,g)=>{var k=b();g.exports=n;n.displayName="cshtml";n.aliases=["razor"];function n(l){l.register(k),function(s){var p=/\/(?![/*])|\/\/.*[\r\n]|\/\*[^*]*(?:\*(?!\/)[^*]*)*\*\//.source,d=/@(?!")|"(?:[^\r\n\\"]|\\.)*"|@"(?:[^\\"]|""|\\[\s\S])*"(?!")/.source+"|"+/'(?:(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'|(?=[^\\](?!')))/.source;function o(a,w){for(var i=0;i<w;i++)a=a.replace(/<self>/g,function(){return"(?:"+a+")"});return a.replace(/<self>/g,"[^\\s\\S]").replace(/<str>/g,"(?:"+d+")").replace(/<comment>/g,"(?:"+p+")")}var r=o(/\((?:[^()'"@/]|<str>|<comment>|<self>)*\)/.source,2),h=o(/\[(?:[^\[\]'"@/]|<str>|<comment>|<self>)*\]/.source,2),e=o(/\{(?:[^{}'"@/]|<str>|<comment>|<self>)*\}/.source,2),m=o(/<(?:[^<>'"@/]|<str>|<comment>|<self>)*>/.source,2),c=/(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?/.source,t=/(?!\d)[^\s>\/=$<%]+/.source+c+/\s*\/?>/.source,f=/\B@?/.source+"(?:"+/<([a-zA-Z][\w:]*)/.source+c+/\s*>/.source+"(?:"+(/[^<]/.source+"|"+/<\/?(?!\1\b)/.source+t+"|"+o(/<\1/.source+c+/\s*>/.source+"(?:"+(/[^<]/.source+"|"+/<\/?(?!\1\b)/.source+t+"|<self>")+")*"+/<\/\1\s*>/.source,2))+")*"+/<\/\1\s*>/.source+"|"+/</.source+t+")";s.languages.cshtml=s.languages.extend("markup",{});var v=s.languages.insertBefore("csharp","string",{html:{pattern:RegExp(f),greedy:!0,inside:s.languages.cshtml}},{csharp:s.languages.extend("csharp",{})}),u={pattern:/\S[\s\S]*/,alias:"language-csharp",inside:v};s.languages.insertBefore("cshtml","prolog",{"razor-comment":{pattern:/@\*[\s\S]*?\*@/,greedy:!0,alias:"comment"},block:{pattern:RegExp(/(^|[^@])@/.source+"(?:"+[e,/(?:code|functions)\s*/.source+e,/(?:for|foreach|lock|switch|using|while)\s*/.source+r+/\s*/.source+e,/do\s*/.source+e+/\s*while\s*/.source+r+/(?:\s*;)?/.source,/try\s*/.source+e+/\s*catch\s*/.source+r+/\s*/.source+e+/\s*finally\s*/.source+e,/if\s*/.source+r+/\s*/.source+e+"(?:"+/\s*else/.source+"(?:"+/\s+if\s*/.source+r+")?"+/\s*/.source+e+")*"].join("|")+")"),lookbehind:!0,greedy:!0,inside:{keyword:/^@\w*/,csharp:u}},directive:{pattern:/^([ \t]*)@(?:addTagHelper|attribute|implements|inherits|inject|layout|model|namespace|page|preservewhitespace|removeTagHelper|section|tagHelperPrefix|using)(?=\s).*/m,lookbehind:!0,greedy:!0,inside:{keyword:/^@\w+/,csharp:u}},value:{pattern:RegExp(/(^|[^@])@/.source+/(?:await\b\s*)?/.source+"(?:"+/\w+\b/.source+"|"+r+")(?:"+/[?!]?\.\w+\b/.source+"|"+r+"|"+h+"|"+m+r+")*"),lookbehind:!0,greedy:!0,alias:"variable",inside:{keyword:/^@/,csharp:u}},"delegate-operator":{pattern:/(^|[^@])@(?=<)/,lookbehind:!0,alias:"operator"}}),s.languages.razor=s.languages.cshtml}(l)}});export{x as a};
