import{c as s}from"/openradar.github.io/_preview/3/build/_shared/chunk-2NH4LW52.js";var o=s((g,i)=>{function l(e){return e?typeof e=="string"?e:e.source:null}function c(...e){return e.map(a=>l(a)).join("")}function r(...e){return"("+e.map(a=>l(a)).join("|")+")"}function t(e){let n=["GET","POST","HEAD","PUT","DELETE","CONNECT","OPTIONS","PATCH","TRACE"];return{name:"Apache Access Log",contains:[{className:"number",begin:/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(:\d{1,5})?\b/,relevance:5},{className:"number",begin:/\b\d+\b/,relevance:0},{className:"string",begin:c(/"/,r(...n)),end:/"/,keywords:n,illegal:/\n/,relevance:5,contains:[{begin:/HTTP\/[12]\.\d'/,relevance:5}]},{className:"string",begin:/\[\d[^\]\n]{8,}\]/,illegal:/\n/,relevance:1},{className:"string",begin:/\[/,end:/\]/,illegal:/\n/,relevance:0},{className:"string",begin:/"Mozilla\/\d\.\d \(/,end:/"/,illegal:/\n/,relevance:3},{className:"string",begin:/"/,end:/"/,illegal:/\n/,relevance:0}]}}i.exports=t});export default o();
