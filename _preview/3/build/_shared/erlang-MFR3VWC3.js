import{c as T}from"/openradar.github.io/_preview/3/build/_shared/chunk-2NH4LW52.js";var f=T((O,g)=>{function A(e){let n="[a-z'][a-zA-Z0-9_']*",b="("+n+":"+n+"|"+n+")",a={keyword:"after and andalso|10 band begin bnot bor bsl bzr bxor case catch cond div end fun if let not of orelse|10 query receive rem try when xor",literal:"false true"},c=e.COMMENT("%","$"),o={className:"number",begin:"\\b(\\d+(_\\d+)*#[a-fA-F0-9]+(_[a-fA-F0-9]+)*|\\d+(_\\d+)*(\\.\\d+(_\\d+)*)?([eE][-+]?\\d+)?)",relevance:0},l={begin:"fun\\s+"+n+"/\\d+"},s={begin:b+"\\(",end:"\\)",returnBegin:!0,relevance:0,contains:[{begin:b,relevance:0},{begin:"\\(",end:"\\)",endsWithParent:!0,returnEnd:!0,relevance:0}]},i={begin:/\{/,end:/\}/,relevance:0},d={begin:"\\b_([A-Z][A-Za-z0-9_]*)?",relevance:0},E={begin:"[A-Z][a-zA-Z0-9_]*",relevance:0},t={begin:"#"+e.UNDERSCORE_IDENT_RE,relevance:0,returnBegin:!0,contains:[{begin:"#"+e.UNDERSCORE_IDENT_RE,relevance:0},{begin:/\{/,end:/\}/,relevance:0}]},_={beginKeywords:"fun receive if try case",end:"end",keywords:a};_.contains=[c,l,e.inherit(e.APOS_STRING_MODE,{className:""}),_,s,e.QUOTE_STRING_MODE,o,i,d,E,t];let r=[c,l,_,s,e.QUOTE_STRING_MODE,o,i,d,E,t];s.contains[1].contains=r,i.contains=r,t.contains[1].contains=r;let N=["-module","-record","-undef","-export","-ifdef","-ifndef","-author","-copyright","-doc","-vsn","-import","-include","-include_lib","-compile","-define","-else","-endif","-file","-behaviour","-behavior","-spec"],u={className:"params",begin:"\\(",end:"\\)",contains:r};return{name:"Erlang",aliases:["erl"],keywords:a,illegal:"(</|\\*=|\\+=|-=|/\\*|\\*/|\\(\\*|\\*\\))",contains:[{className:"function",begin:"^"+n+"\\s*\\(",end:"->",returnBegin:!0,illegal:"\\(|#|//|/\\*|\\\\|:|;",contains:[u,e.inherit(e.TITLE_MODE,{begin:n})],starts:{end:";|\\.",keywords:a,contains:r}},c,{begin:"^-",end:"\\.",relevance:0,excludeEnd:!0,returnBegin:!0,keywords:{$pattern:"-"+e.IDENT_RE,keyword:N.map(R=>`${R}|1.5`).join(" ")},contains:[u]},o,e.QUOTE_STRING_MODE,t,d,E,i,{begin:/\.$/}]}}g.exports=A});export default f();
