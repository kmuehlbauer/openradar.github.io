import{e as l}from"/openradar.github.io/build/_shared/chunk-EEG6LHX7.js";import"/openradar.github.io/build/_shared/chunk-GUCIBHGO.js";import"/openradar.github.io/build/_shared/chunk-2NH4LW52.js";var a={name:"proof",alias:["prf:proof","prf:theorem","prf:axiom","prf:lemma","prf:definition","prf:criterion","prf:remark","prf:conjecture","prf:corollary","prf:algorithm","prf:example","prf:property","prf:observation","prf:proposition","prf:assumption"],arg:{type:"myst"},options:{label:{type:String,alias:["name"]},class:{type:String},nonumber:{type:Boolean}},body:{type:"myst",required:!0},run(o){var r,e,n,p;let i=[];o.arg&&i.push({type:"admonitionTitle",children:o.arg}),o.body&&i.push(...o.body);let t=(e=(r=o.options)===null||r===void 0?void 0:r.nonumber)!==null&&e!==void 0?e:!1,f=(n=o.options)===null||n===void 0?void 0:n.label,{label:s,identifier:m}=l(f)||{};return[{type:"proof",kind:o.name!=="proof"?o.name.replace("prf:",""):void 0,label:s,identifier:m,class:(p=o.options)===null||p===void 0?void 0:p.class,enumerated:!t,children:i}]}};export{a as proofDirective};