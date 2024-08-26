import{c as me}from"/openradar.github.io/_preview/4/build/_shared/chunk-2NH4LW52.js";var he=me((ye,Y)=>{function x(t){return t?typeof t=="string"?t:t.source:null}function l(t){return e("(?=",t,")")}function e(...t){return t.map(d=>x(d)).join("")}function a(...t){return"("+t.map(d=>x(d)).join("|")+")"}var R=t=>e(/\b/,t,/\w$/.test(t)?/\b/:/\B/),U=["Protocol","Type"].map(R),y=["init","self"].map(R),Fe=["Any","Self"],I=["associatedtype","async","await",/as\?/,/as!/,"as","break","case","catch","class","continue","convenience","default","defer","deinit","didSet","do","dynamic","else","enum","extension","fallthrough",/fileprivate\(set\)/,"fileprivate","final","for","func","get","guard","if","import","indirect","infix",/init\?/,/init!/,"inout",/internal\(set\)/,"internal","in","is","lazy","let","mutating","nonmutating",/open\(set\)/,"open","operator","optional","override","postfix","precedencegroup","prefix",/private\(set\)/,"private","protocol",/public\(set\)/,"public","repeat","required","rethrows","return","set","some","static","struct","subscript","super","switch","throws","throw",/try\?/,/try!/,"try","typealias",/unowned\(safe\)/,/unowned\(unsafe\)/,"unowned","var","weak","where","while","willSet"],k=["false","nil","true"],be=["assignment","associativity","higherThan","left","lowerThan","none","right"],Ne=["#colorLiteral","#column","#dsohandle","#else","#elseif","#endif","#error","#file","#fileID","#fileLiteral","#filePath","#function","#if","#imageLiteral","#keyPath","#line","#selector","#sourceLocation","#warn_unqualified_access","#warning"],K=["abs","all","any","assert","assertionFailure","debugPrint","dump","fatalError","getVaList","isKnownUniquelyReferenced","max","min","numericCast","pointwiseMax","pointwiseMin","precondition","preconditionFailure","print","readLine","repeatElement","sequence","stride","swap","swift_unboxFromSwiftValueWithType","transcode","type","unsafeBitCast","unsafeDowncast","withExtendedLifetime","withUnsafeMutablePointer","withUnsafePointer","withVaList","withoutActuallyEscaping","zip"],G=a(/[/=\-+!*%<>&|^~?]/,/[\u00A1-\u00A7]/,/[\u00A9\u00AB]/,/[\u00AC\u00AE]/,/[\u00B0\u00B1]/,/[\u00B6\u00BB\u00BF\u00D7\u00F7]/,/[\u2016-\u2017]/,/[\u2020-\u2027]/,/[\u2030-\u203E]/,/[\u2041-\u2053]/,/[\u2055-\u205E]/,/[\u2190-\u23FF]/,/[\u2500-\u2775]/,/[\u2794-\u2BFF]/,/[\u2E00-\u2E7F]/,/[\u3001-\u3003]/,/[\u3008-\u3020]/,/[\u3030]/),$=a(G,/[\u0300-\u036F]/,/[\u1DC0-\u1DFF]/,/[\u20D0-\u20FF]/,/[\uFE00-\uFE0F]/,/[\uFE20-\uFE2F]/),w=e(G,$,"*"),W=a(/[a-zA-Z_]/,/[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/,/[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/,/[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/,/[\u1E00-\u1FFF]/,/[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/,/[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/,/[\u2C00-\u2DFF\u2E80-\u2FFF]/,/[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/,/[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/,/[\uFE47-\uFEFE\uFF00-\uFFFD]/),f=a(W,/\d/,/[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/),s=e(W,f,"*"),_=e(/[A-Z]/,f,"*"),Ae=["autoclosure",e(/convention\(/,a("swift","block","c"),/\)/),"discardableResult","dynamicCallable","dynamicMemberLookup","escaping","frozen","GKInspectable","IBAction","IBDesignable","IBInspectable","IBOutlet","IBSegueAction","inlinable","main","nonobjc","NSApplicationMain","NSCopying","NSManaged",e(/objc\(/,s,/\)/),"objc","objcMembers","propertyWrapper","requires_stored_property_inits","testable","UIApplicationMain","unknown","usableFromInline"],fe=["iOS","iOSApplicationExtension","macOS","macOSApplicationExtension","macCatalyst","macCatalystApplicationExtension","watchOS","watchOSApplicationExtension","tvOS","tvOSApplicationExtension","swift"];function Te(t){let E={match:/\s+/,relevance:0},d=t.COMMENT("/\\*","\\*/",{contains:["self"]}),o=[t.C_LINE_COMMENT_MODE,d],H={className:"keyword",begin:e(/\./,l(a(...U,...y))),end:a(...U,...y),excludeBegin:!0},z={match:e(/\./,a(...I)),relevance:0},j=I.filter(n=>typeof n=="string").concat(["_|0"]),q=I.filter(n=>typeof n!="string").concat(Fe).map(R),V={variants:[{className:"keyword",match:a(...q,...y)}]},i={$pattern:a(/\b\w+/,/#\w+/),keyword:j.concat(Ne),literal:k},u=[H,z,V],Z={match:e(/\./,a(...K)),relevance:0},X={className:"built_in",match:e(/\b/,a(...K),/(?=\()/)},T=[Z,X],C={match:/->/,relevance:0},J={className:"operator",relevance:0,variants:[{match:w},{match:`\\.(\\.|${$})+`}]},p=[C,J],F="([0-9]_*)+",g="([0-9a-fA-F]_*)+",m={className:"number",relevance:0,variants:[{match:`\\b(${F})(\\.(${F}))?([eE][+-]?(${F}))?\\b`},{match:`\\b0x(${g})(\\.(${g}))?([pP][+-]?(${F}))?\\b`},{match:/\b0o([0-7]_*)+\b/},{match:/\b0b([01]_*)+\b/}]},O=(n="")=>({className:"subst",variants:[{match:e(/\\/,n,/[0\\tnr"']/)},{match:e(/\\/,n,/u\{[0-9a-fA-F]{1,8}\}/)}]}),Q=(n="")=>({className:"subst",match:e(/\\/,n,/[\t ]*(?:[\r\n]|\r\n)/)}),S=(n="")=>({className:"subst",label:"interpol",begin:e(/\\/,n,/\(/),end:/\)/}),b=(n="")=>({begin:e(n,/"""/),end:e(/"""/,n),contains:[O(n),Q(n),S(n)]}),N=(n="")=>({begin:e(n,/"/),end:e(/"/,n),contains:[O(n),S(n)]}),r={className:"string",variants:[b(),b("#"),b("##"),b("###"),N(),N("#"),N("##"),N("###")]},D={match:e(/`/,s,/`/)},ee={className:"variable",match:/\$\d+/},ne={className:"variable",match:`\\$${f}+`},h=[D,ee,ne],te={match:/(@|#)available/,className:"keyword",starts:{contains:[{begin:/\(/,end:/\)/,keywords:fe,contains:[...p,m,r]}]}},ae={className:"keyword",match:e(/@/,a(...Ae))},se={className:"meta",match:e(/@/,s)},A=[te,ae,se],c={match:l(/\b[A-Z]/),relevance:0,contains:[{className:"type",match:e(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/,f,"+")},{className:"type",match:_,relevance:0},{match:/[?!]+/,relevance:0},{match:/\.\.\./,relevance:0},{match:e(/\s+&\s+/,l(_)),relevance:0}]},ce={begin:/</,end:/>/,keywords:i,contains:[...o,...u,...A,C,c]};c.contains.push(ce);let oe={match:e(s,/\s*:/),keywords:"_|0",relevance:0},v={begin:/\(/,end:/\)/,relevance:0,keywords:i,contains:["self",oe,...o,...u,...T,...p,m,r,...h,...A,c]},ie={beginKeywords:"func",contains:[{className:"title",match:a(D.match,s,w),endsParent:!0,relevance:0},E]},P={begin:/</,end:/>/,contains:[...o,c]},ue={begin:a(l(e(s,/\s*:/)),l(e(s,/\s+/,s,/\s*:/))),end:/:/,relevance:0,contains:[{className:"keyword",match:/\b_\b/},{className:"params",match:s}]},M={begin:/\(/,end:/\)/,keywords:i,contains:[ue,...o,...u,...p,m,r,...A,c,v],endsParent:!0,illegal:/["']/},re={className:"function",match:l(/\bfunc\b/),contains:[ie,P,M,E],illegal:[/\[/,/%/]},le={className:"function",match:/\b(subscript|init[?!]?)\s*(?=[<(])/,keywords:{keyword:"subscript init init? init!",$pattern:/\w+[?!]?/},contains:[P,M,E],illegal:/\[|%/},Ee={beginKeywords:"operator",end:t.MATCH_NOTHING_RE,contains:[{className:"title",match:w,endsParent:!0,relevance:0}]},de={beginKeywords:"precedencegroup",end:t.MATCH_NOTHING_RE,contains:[{className:"title",match:_,relevance:0},{begin:/{/,end:/}/,relevance:0,endsParent:!0,keywords:[...be,...k],contains:[c]}]};for(let n of r.variants){let B=n.contains.find(pe=>pe.label==="interpol");B.keywords=i;let L=[...u,...T,...p,m,r,...h];B.contains=[...L,{begin:/\(/,end:/\)/,contains:["self",...L]}]}return{name:"Swift",keywords:i,contains:[...o,re,le,{className:"class",beginKeywords:"struct protocol class extension enum",end:"\\{",excludeEnd:!0,keywords:i,contains:[t.inherit(t.TITLE_MODE,{begin:/[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/}),...u]},Ee,de,{beginKeywords:"import",end:/$/,contains:[...o],relevance:0},...u,...T,...p,m,r,...h,...A,c,v]}}Y.exports=Te});export default he();
