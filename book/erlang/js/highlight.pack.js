/*!
  Highlight.js v11.5.1 (git: b8f233c8e2)
  (c) 2006-2022 Ivan Sagalaev and other contributors
  License: BSD-3-Clause
 */
var hljs=function(){"use strict";var e={exports:{}};function t(e){
return e instanceof Map?e.clear=e.delete=e.set=()=>{
throw Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=()=>{
throw Error("set is read-only")
}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach((n=>{var i=e[n]
;"object"!=typeof i||Object.isFrozen(i)||t(i)})),e}
e.exports=t,e.exports.default=t;var n=e.exports;class i{constructor(e){
void 0===e.data&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}
ignoreMatch(){this.isMatchIgnored=!0}}function r(e){
return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")
}function s(e,...t){const n=Object.create(null);for(const t in e)n[t]=e[t]
;return t.forEach((e=>{for(const t in e)n[t]=e[t]})),n}const o=e=>!!e.kind
;class a{constructor(e,t){
this.buffer="",this.classPrefix=t.classPrefix,e.walk(this)}addText(e){
this.buffer+=r(e)}openNode(e){if(!o(e))return;let t=e.kind
;t=e.sublanguage?"language-"+t:((e,{prefix:t})=>{if(e.includes(".")){
const n=e.split(".")
;return[`${t}${n.shift()}`,...n.map(((e,t)=>`${e}${"_".repeat(t+1)}`))].join(" ")
}return`${t}${e}`})(t,{prefix:this.classPrefix}),this.span(t)}closeNode(e){
o(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){
this.buffer+=`<span class="${e}">`}}class c{constructor(){this.rootNode={
children:[]},this.stack=[this.rootNode]}get top(){
return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){
this.top.children.push(e)}openNode(e){const t={kind:e,children:[]}
;this.add(t),this.stack.push(t)}closeNode(){
if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){
for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}
walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,t){
return"string"==typeof t?e.addText(t):t.children&&(e.openNode(t),
t.children.forEach((t=>this._walk(e,t))),e.closeNode(t)),e}static _collapse(e){
"string"!=typeof e&&e.children&&(e.children.every((e=>"string"==typeof e))?e.children=[e.children.join("")]:e.children.forEach((e=>{
c._collapse(e)})))}}class l extends c{constructor(e){super(),this.options=e}
addKeyword(e,t){""!==e&&(this.openNode(t),this.addText(e),this.closeNode())}
addText(e){""!==e&&this.add(e)}addSublanguage(e,t){const n=e.root
;n.kind=t,n.sublanguage=!0,this.add(n)}toHTML(){
return new a(this,this.options).value()}finalize(){return!0}}function g(e){
return e?"string"==typeof e?e:e.source:null}function d(e){return f("(?=",e,")")}
function u(e){return f("(?:",e,")*")}function h(e){return f("(?:",e,")?")}
function f(...e){return e.map((e=>g(e))).join("")}function p(...e){const t=(e=>{
const t=e[e.length-1]
;return"object"==typeof t&&t.constructor===Object?(e.splice(e.length-1,1),t):{}
})(e);return"("+(t.capture?"":"?:")+e.map((e=>g(e))).join("|")+")"}
function b(e){return RegExp(e.toString()+"|").exec("").length-1}
const m=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./
;function E(e,{joinWith:t}){let n=0;return e.map((e=>{n+=1;const t=n
;let i=g(e),r="";for(;i.length>0;){const e=m.exec(i);if(!e){r+=i;break}
r+=i.substring(0,e.index),
i=i.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?r+="\\"+(Number(e[1])+t):(r+=e[0],
"("===e[0]&&n++)}return r})).map((e=>`(${e})`)).join(t)}
const x="[a-zA-Z]\\w*",w="[a-zA-Z_]\\w*",y="\\b\\d+(\\.\\d+)?",_="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",k="\\b(0b[01]+)",v={
begin:"\\\\[\\s\\S]",relevance:0},O={scope:"string",begin:"'",end:"'",
illegal:"\\n",contains:[v]},N={scope:"string",begin:'"',end:'"',illegal:"\\n",
contains:[v]},M=(e,t,n={})=>{const i=s({scope:"comment",begin:e,end:t,
contains:[]},n);i.contains.push({scope:"doctag",
begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0})
;const r=p("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/)
;return i.contains.push({begin:f(/[ ]+/,"(",r,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),i
},S=M("//","$"),R=M("/\\*","\\*/"),j=M("#","$");var A=Object.freeze({
__proto__:null,MATCH_NOTHING_RE:/\b\B/,IDENT_RE:x,UNDERSCORE_IDENT_RE:w,
NUMBER_RE:y,C_NUMBER_RE:_,BINARY_NUMBER_RE:k,
RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
SHEBANG:(e={})=>{const t=/^#![ ]*\//
;return e.binary&&(e.begin=f(t,/.*\b/,e.binary,/\b.*/)),s({scope:"meta",begin:t,
end:/$/,relevance:0,"on:begin":(e,t)=>{0!==e.index&&t.ignoreMatch()}},e)},
BACKSLASH_ESCAPE:v,APOS_STRING_MODE:O,QUOTE_STRING_MODE:N,PHRASAL_WORDS_MODE:{
begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
},COMMENT:M,C_LINE_COMMENT_MODE:S,C_BLOCK_COMMENT_MODE:R,HASH_COMMENT_MODE:j,
NUMBER_MODE:{scope:"number",begin:y,relevance:0},C_NUMBER_MODE:{scope:"number",
begin:_,relevance:0},BINARY_NUMBER_MODE:{scope:"number",begin:k,relevance:0},
REGEXP_MODE:{begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,
end:/\/[gimuy]*/,illegal:/\n/,contains:[v,{begin:/\[/,end:/\]/,relevance:0,
contains:[v]}]}]},TITLE_MODE:{scope:"title",begin:x,relevance:0},
UNDERSCORE_TITLE_MODE:{scope:"title",begin:w,relevance:0},METHOD_GUARD:{
begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0},END_SAME_AS_BEGIN:e=>Object.assign(e,{
"on:begin":(e,t)=>{t.data._beginMatch=e[1]},"on:end":(e,t)=>{
t.data._beginMatch!==e[1]&&t.ignoreMatch()}})});function I(e,t){
"."===e.input[e.index-1]&&t.ignoreMatch()}function T(e,t){
void 0!==e.className&&(e.scope=e.className,delete e.className)}function L(e,t){
t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",
e.__beforeBegin=I,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,
void 0===e.relevance&&(e.relevance=0))}function B(e,t){
Array.isArray(e.illegal)&&(e.illegal=p(...e.illegal))}function D(e,t){
if(e.match){
if(e.begin||e.end)throw Error("begin & end are not supported with match")
;e.begin=e.match,delete e.match}}function H(e,t){
void 0===e.relevance&&(e.relevance=1)}const P=(e,t)=>{if(!e.beforeMatch)return
;if(e.starts)throw Error("beforeMatch cannot be used with starts")
;const n=Object.assign({},e);Object.keys(e).forEach((t=>{delete e[t]
})),e.keywords=n.keywords,e.begin=f(n.beforeMatch,d(n.begin)),e.starts={
relevance:0,contains:[Object.assign(n,{endsParent:!0})]
},e.relevance=0,delete n.beforeMatch
},C=["of","and","for","in","not","or","if","then","parent","list","value"]
;function $(e,t,n="keyword"){const i=Object.create(null)
;return"string"==typeof e?r(n,e.split(" ")):Array.isArray(e)?r(n,e):Object.keys(e).forEach((n=>{
Object.assign(i,$(e[n],t,n))})),i;function r(e,n){
t&&(n=n.map((e=>e.toLowerCase()))),n.forEach((t=>{const n=t.split("|")
;i[n[0]]=[e,U(n[0],n[1])]}))}}function U(e,t){
return t?Number(t):(e=>C.includes(e.toLowerCase()))(e)?0:1}const z={},K=e=>{
console.error(e)},W=(e,...t)=>{console.log("WARN: "+e,...t)},X=(e,t)=>{
z[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),z[`${e}/${t}`]=!0)
},G=Error();function Z(e,t,{key:n}){let i=0;const r=e[n],s={},o={}
;for(let e=1;e<=t.length;e++)o[e+i]=r[e],s[e+i]=!0,i+=b(t[e-1])
;e[n]=o,e[n]._emit=s,e[n]._multi=!0}function F(e){(e=>{
e.scope&&"object"==typeof e.scope&&null!==e.scope&&(e.beginScope=e.scope,
delete e.scope)})(e),"string"==typeof e.beginScope&&(e.beginScope={
_wrap:e.beginScope}),"string"==typeof e.endScope&&(e.endScope={_wrap:e.endScope
}),(e=>{if(Array.isArray(e.begin)){
if(e.skip||e.excludeBegin||e.returnBegin)throw K("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),
G
;if("object"!=typeof e.beginScope||null===e.beginScope)throw K("beginScope must be object"),
G;Z(e,e.begin,{key:"beginScope"}),e.begin=E(e.begin,{joinWith:""})}})(e),(e=>{
if(Array.isArray(e.end)){
if(e.skip||e.excludeEnd||e.returnEnd)throw K("skip, excludeEnd, returnEnd not compatible with endScope: {}"),
G
;if("object"!=typeof e.endScope||null===e.endScope)throw K("endScope must be object"),
G;Z(e,e.end,{key:"endScope"}),e.end=E(e.end,{joinWith:""})}})(e)}function V(e){
function t(t,n){
return RegExp(g(t),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(n?"g":""))
}class n{constructor(){
this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}
addRule(e,t){
t.position=this.position++,this.matchIndexes[this.matchAt]=t,this.regexes.push([t,e]),
this.matchAt+=b(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null)
;const e=this.regexes.map((e=>e[1]));this.matcherRe=t(E(e,{joinWith:"|"
}),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex
;const t=this.matcherRe.exec(e);if(!t)return null
;const n=t.findIndex(((e,t)=>t>0&&void 0!==e)),i=this.matchIndexes[n]
;return t.splice(0,n),Object.assign(t,i)}}class i{constructor(){
this.rules=[],this.multiRegexes=[],
this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){
if(this.multiRegexes[e])return this.multiRegexes[e];const t=new n
;return this.rules.slice(e).forEach((([e,n])=>t.addRule(e,n))),
t.compile(),this.multiRegexes[e]=t,t}resumingScanAtSamePosition(){
return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,t){
this.rules.push([e,t]),"begin"===t.type&&this.count++}exec(e){
const t=this.getMatcher(this.regexIndex);t.lastIndex=this.lastIndex
;let n=t.exec(e)
;if(this.resumingScanAtSamePosition())if(n&&n.index===this.lastIndex);else{
const t=this.getMatcher(0);t.lastIndex=this.lastIndex+1,n=t.exec(e)}
return n&&(this.regexIndex+=n.position+1,
this.regexIndex===this.count&&this.considerAll()),n}}
if(e.compilerExtensions||(e.compilerExtensions=[]),
e.contains&&e.contains.includes("self"))throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.")
;return e.classNameAliases=s(e.classNameAliases||{}),function n(r,o){const a=r
;if(r.isCompiled)return a
;[T,D,F,P].forEach((e=>e(r,o))),e.compilerExtensions.forEach((e=>e(r,o))),
r.__beforeBegin=null,[L,B,H].forEach((e=>e(r,o))),r.isCompiled=!0;let c=null
;return"object"==typeof r.keywords&&r.keywords.$pattern&&(r.keywords=Object.assign({},r.keywords),
c=r.keywords.$pattern,
delete r.keywords.$pattern),c=c||/\w+/,r.keywords&&(r.keywords=$(r.keywords,e.case_insensitive)),
a.keywordPatternRe=t(c,!0),
o&&(r.begin||(r.begin=/\B|\b/),a.beginRe=t(a.begin),r.end||r.endsWithParent||(r.end=/\B|\b/),
r.end&&(a.endRe=t(a.end)),
a.terminatorEnd=g(a.end)||"",r.endsWithParent&&o.terminatorEnd&&(a.terminatorEnd+=(r.end?"|":"")+o.terminatorEnd)),
r.illegal&&(a.illegalRe=t(r.illegal)),
r.contains||(r.contains=[]),r.contains=[].concat(...r.contains.map((e=>(e=>(e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map((t=>s(e,{
variants:null},t)))),e.cachedVariants?e.cachedVariants:q(e)?s(e,{
starts:e.starts?s(e.starts):null
}):Object.isFrozen(e)?s(e):e))("self"===e?r:e)))),r.contains.forEach((e=>{n(e,a)
})),r.starts&&n(r.starts,o),a.matcher=(e=>{const t=new i
;return e.contains.forEach((e=>t.addRule(e.begin,{rule:e,type:"begin"
}))),e.terminatorEnd&&t.addRule(e.terminatorEnd,{type:"end"
}),e.illegal&&t.addRule(e.illegal,{type:"illegal"}),t})(a),a}(e)}function q(e){
return!!e&&(e.endsWithParent||q(e.starts))}class J extends Error{
constructor(e,t){super(e),this.name="HTMLInjectionError",this.html=t}}
const Y=r,Q=s,ee=Symbol("nomatch");var te=(e=>{
const t=Object.create(null),r=Object.create(null),s=[];let o=!0
;const a="Could not find the language '{}', did you forget to load/include a language module?",c={
disableAutodetect:!0,name:"Plain text",contains:[]};let g={
ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,
languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",
cssSelector:"pre code",languages:null,__emitter:l};function b(e){
return g.noHighlightRe.test(e)}function m(e,t,n){let i="",r=""
;"object"==typeof t?(i=e,
n=t.ignoreIllegals,r=t.language):(X("10.7.0","highlight(lang, code, ...args) has been deprecated."),
X("10.7.0","Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),
r=e,i=t),void 0===n&&(n=!0);const s={code:i,language:r};N("before:highlight",s)
;const o=s.result?s.result:E(s.language,s.code,n)
;return o.code=s.code,N("after:highlight",o),o}function E(e,n,r,s){
const c=Object.create(null);function l(){if(!O.keywords)return void M.addText(S)
;let e=0;O.keywordPatternRe.lastIndex=0;let t=O.keywordPatternRe.exec(S),n=""
;for(;t;){n+=S.substring(e,t.index)
;const r=y.case_insensitive?t[0].toLowerCase():t[0],s=(i=r,O.keywords[i]);if(s){
const[e,i]=s
;if(M.addText(n),n="",c[r]=(c[r]||0)+1,c[r]<=7&&(R+=i),e.startsWith("_"))n+=t[0];else{
const n=y.classNameAliases[e]||e;M.addKeyword(t[0],n)}}else n+=t[0]
;e=O.keywordPatternRe.lastIndex,t=O.keywordPatternRe.exec(S)}var i
;n+=S.substr(e),M.addText(n)}function d(){null!=O.subLanguage?(()=>{
if(""===S)return;let e=null;if("string"==typeof O.subLanguage){
if(!t[O.subLanguage])return void M.addText(S)
;e=E(O.subLanguage,S,!0,N[O.subLanguage]),N[O.subLanguage]=e._top
}else e=x(S,O.subLanguage.length?O.subLanguage:null)
;O.relevance>0&&(R+=e.relevance),M.addSublanguage(e._emitter,e.language)
})():l(),S=""}function u(e,t){let n=1;const i=t.length-1;for(;n<=i;){
if(!e._emit[n]){n++;continue}const i=y.classNameAliases[e[n]]||e[n],r=t[n]
;i?M.addKeyword(r,i):(S=r,l(),S=""),n++}}function h(e,t){
return e.scope&&"string"==typeof e.scope&&M.openNode(y.classNameAliases[e.scope]||e.scope),
e.beginScope&&(e.beginScope._wrap?(M.addKeyword(S,y.classNameAliases[e.beginScope._wrap]||e.beginScope._wrap),
S=""):e.beginScope._multi&&(u(e.beginScope,t),S="")),O=Object.create(e,{parent:{
value:O}}),O}function f(e,t,n){let r=((e,t)=>{const n=e&&e.exec(t)
;return n&&0===n.index})(e.endRe,n);if(r){if(e["on:end"]){const n=new i(e)
;e["on:end"](t,n),n.isMatchIgnored&&(r=!1)}if(r){
for(;e.endsParent&&e.parent;)e=e.parent;return e}}
if(e.endsWithParent)return f(e.parent,t,n)}function p(e){
return 0===O.matcher.regexIndex?(S+=e[0],1):(I=!0,0)}function b(e){
const t=e[0],i=n.substr(e.index),r=f(O,e,i);if(!r)return ee;const s=O
;O.endScope&&O.endScope._wrap?(d(),
M.addKeyword(t,O.endScope._wrap)):O.endScope&&O.endScope._multi?(d(),
u(O.endScope,e)):s.skip?S+=t:(s.returnEnd||s.excludeEnd||(S+=t),
d(),s.excludeEnd&&(S=t));do{
O.scope&&M.closeNode(),O.skip||O.subLanguage||(R+=O.relevance),O=O.parent
}while(O!==r.parent);return r.starts&&h(r.starts,e),s.returnEnd?0:t.length}
let m={};function w(t,s){const a=s&&s[0];if(S+=t,null==a)return d(),0
;if("begin"===m.type&&"end"===s.type&&m.index===s.index&&""===a){
if(S+=n.slice(s.index,s.index+1),!o){const t=Error(`0 width match regex (${e})`)
;throw t.languageName=e,t.badRule=m.rule,t}return 1}
if(m=s,"begin"===s.type)return(e=>{
const t=e[0],n=e.rule,r=new i(n),s=[n.__beforeBegin,n["on:begin"]]
;for(const n of s)if(n&&(n(e,r),r.isMatchIgnored))return p(t)
;return n.skip?S+=t:(n.excludeBegin&&(S+=t),
d(),n.returnBegin||n.excludeBegin||(S=t)),h(n,e),n.returnBegin?0:t.length})(s)
;if("illegal"===s.type&&!r){
const e=Error('Illegal lexeme "'+a+'" for mode "'+(O.scope||"<unnamed>")+'"')
;throw e.mode=O,e}if("end"===s.type){const e=b(s);if(e!==ee)return e}
if("illegal"===s.type&&""===a)return 1
;if(A>1e5&&A>3*s.index)throw Error("potential infinite loop, way more iterations than matches")
;return S+=a,a.length}const y=k(e)
;if(!y)throw K(a.replace("{}",e)),Error('Unknown language: "'+e+'"')
;const _=V(y);let v="",O=s||_;const N={},M=new g.__emitter(g);(()=>{const e=[]
;for(let t=O;t!==y;t=t.parent)t.scope&&e.unshift(t.scope)
;e.forEach((e=>M.openNode(e)))})();let S="",R=0,j=0,A=0,I=!1;try{
for(O.matcher.considerAll();;){
A++,I?I=!1:O.matcher.considerAll(),O.matcher.lastIndex=j
;const e=O.matcher.exec(n);if(!e)break;const t=w(n.substring(j,e.index),e)
;j=e.index+t}return w(n.substr(j)),M.closeAllNodes(),M.finalize(),v=M.toHTML(),{
language:e,value:v,relevance:R,illegal:!1,_emitter:M,_top:O}}catch(t){
if(t.message&&t.message.includes("Illegal"))return{language:e,value:Y(n),
illegal:!0,relevance:0,_illegalBy:{message:t.message,index:j,
context:n.slice(j-100,j+100),mode:t.mode,resultSoFar:v},_emitter:M};if(o)return{
language:e,value:Y(n),illegal:!1,relevance:0,errorRaised:t,_emitter:M,_top:O}
;throw t}}function x(e,n){n=n||g.languages||Object.keys(t);const i=(e=>{
const t={value:Y(e),illegal:!1,relevance:0,_top:c,_emitter:new g.__emitter(g)}
;return t._emitter.addText(e),t})(e),r=n.filter(k).filter(O).map((t=>E(t,e,!1)))
;r.unshift(i);const s=r.sort(((e,t)=>{
if(e.relevance!==t.relevance)return t.relevance-e.relevance
;if(e.language&&t.language){if(k(e.language).supersetOf===t.language)return 1
;if(k(t.language).supersetOf===e.language)return-1}return 0})),[o,a]=s,l=o
;return l.secondBest=a,l}function w(e){let t=null;const n=(e=>{
let t=e.className+" ";t+=e.parentNode?e.parentNode.className:""
;const n=g.languageDetectRe.exec(t);if(n){const t=k(n[1])
;return t||(W(a.replace("{}",n[1])),
W("Falling back to no-highlight mode for this block.",e)),t?n[1]:"no-highlight"}
return t.split(/\s+/).find((e=>b(e)||k(e)))})(e);if(b(n))return
;if(N("before:highlightElement",{el:e,language:n
}),e.children.length>0&&(g.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),
console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),
console.warn("The element with unescaped HTML:"),
console.warn(e)),g.throwUnescapedHTML))throw new J("One of your code blocks includes unescaped HTML.",e.innerHTML)
;t=e;const i=t.textContent,s=n?m(i,{language:n,ignoreIllegals:!0}):x(i)
;e.innerHTML=s.value,((e,t,n)=>{const i=t&&r[t]||n
;e.classList.add("hljs"),e.classList.add("language-"+i)
})(e,n,s.language),e.result={language:s.language,re:s.relevance,
relevance:s.relevance},s.secondBest&&(e.secondBest={
language:s.secondBest.language,relevance:s.secondBest.relevance
}),N("after:highlightElement",{el:e,result:s,text:i})}let y=!1;function _(){
"loading"!==document.readyState?document.querySelectorAll(g.cssSelector).forEach(w):y=!0
}function k(e){return e=(e||"").toLowerCase(),t[e]||t[r[e]]}
function v(e,{languageName:t}){"string"==typeof e&&(e=[e]),e.forEach((e=>{
r[e.toLowerCase()]=t}))}function O(e){const t=k(e)
;return t&&!t.disableAutodetect}function N(e,t){const n=e;s.forEach((e=>{
e[n]&&e[n](t)}))}
"undefined"!=typeof window&&window.addEventListener&&window.addEventListener("DOMContentLoaded",(()=>{
y&&_()}),!1),Object.assign(e,{highlight:m,highlightAuto:x,highlightAll:_,
highlightElement:w,
highlightBlock:e=>(X("10.7.0","highlightBlock will be removed entirely in v12.0"),
X("10.7.0","Please use highlightElement now."),w(e)),configure:e=>{g=Q(g,e)},
initHighlighting:()=>{
_(),X("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")},
initHighlightingOnLoad:()=>{
_(),X("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
},registerLanguage:(n,i)=>{let r=null;try{r=i(e)}catch(e){
if(K("Language definition for '{}' could not be registered.".replace("{}",n)),
!o)throw e;K(e),r=c}
r.name||(r.name=n),t[n]=r,r.rawDefinition=i.bind(null,e),r.aliases&&v(r.aliases,{
languageName:n})},unregisterLanguage:e=>{delete t[e]
;for(const t of Object.keys(r))r[t]===e&&delete r[t]},
listLanguages:()=>Object.keys(t),getLanguage:k,registerAliases:v,
autoDetection:O,inherit:Q,addPlugin:e=>{(e=>{
e["before:highlightBlock"]&&!e["before:highlightElement"]&&(e["before:highlightElement"]=t=>{
e["before:highlightBlock"](Object.assign({block:t.el},t))
}),e["after:highlightBlock"]&&!e["after:highlightElement"]&&(e["after:highlightElement"]=t=>{
e["after:highlightBlock"](Object.assign({block:t.el},t))})})(e),s.push(e)}
}),e.debugMode=()=>{o=!1},e.safeMode=()=>{o=!0
},e.versionString="11.5.1",e.regex={concat:f,lookahead:d,either:p,optional:h,
anyNumberOfTimes:u};for(const e in A)"object"==typeof A[e]&&n(A[e])
;return Object.assign(e,A),e})({});return te}()
;"object"==typeof exports&&"undefined"!=typeof module&&(module.exports=hljs);/*! `ini` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict";return e=>{const n=e.regex,a={className:"number",
relevance:0,variants:[{begin:/([+-]+)?[\d]+_[\d_]+/},{begin:e.NUMBER_RE}]
},s=e.COMMENT();s.variants=[{begin:/;/,end:/$/},{begin:/#/,end:/$/}];const i={
className:"variable",variants:[{begin:/\$[\w\d"][\w\d_]*/},{begin:/\$\{(.*?)\}/
}]},t={className:"literal",begin:/\bon|off|true|false|yes|no\b/},r={
className:"string",contains:[e.BACKSLASH_ESCAPE],variants:[{begin:"'''",
end:"'''",relevance:10},{begin:'"""',end:'"""',relevance:10},{begin:'"',end:'"'
},{begin:"'",end:"'"}]},l={begin:/\[/,end:/\]/,contains:[s,t,i,r,a,"self"],
relevance:0},c=n.either(/[A-Za-z0-9_-]+/,/"(\\"|[^"])*"/,/'[^']*'/);return{
name:"TOML, also INI",aliases:["toml"],case_insensitive:!0,illegal:/\S/,
contains:[s,{className:"section",begin:/\[+/,end:/\]+/},{
begin:n.concat(c,"(\\s*\\.\\s*",c,")*",n.lookahead(/\s*=\s*[^#\s]/)),
className:"attr",starts:{end:/$/,contains:[s,l,t,i,r,a]}}]}}})()
;hljs.registerLanguage("ini",e)})();/*! `coq` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict";return e=>({name:"Coq",keywords:{
keyword:["_|0","as","at","cofix","else","end","exists","exists2","fix","for","forall","fun","if","IF","in","let","match","mod","Prop","return","Set","then","Type","using","where","with","Abort","About","Add","Admit","Admitted","All","Arguments","Assumptions","Axiom","Back","BackTo","Backtrack","Bind","Blacklist","Canonical","Cd","Check","Class","Classes","Close","Coercion","Coercions","CoFixpoint","CoInductive","Collection","Combined","Compute","Conjecture","Conjectures","Constant","constr","Constraint","Constructors","Context","Corollary","CreateHintDb","Cut","Declare","Defined","Definition","Delimit","Dependencies","Dependent","Derive","Drop","eauto","End","Equality","Eval","Example","Existential","Existentials","Existing","Export","exporting","Extern","Extract","Extraction","Fact","Field","Fields","File","Fixpoint","Focus","for","From","Function","Functional","Generalizable","Global","Goal","Grab","Grammar","Graph","Guarded","Heap","Hint","HintDb","Hints","Hypotheses","Hypothesis","ident","Identity","If","Immediate","Implicit","Import","Include","Inductive","Infix","Info","Initial","Inline","Inspect","Instance","Instances","Intro","Intros","Inversion","Inversion_clear","Language","Left","Lemma","Let","Libraries","Library","Load","LoadPath","Local","Locate","Ltac","ML","Mode","Module","Modules","Monomorphic","Morphism","Next","NoInline","Notation","Obligation","Obligations","Opaque","Open","Optimize","Options","Parameter","Parameters","Parametric","Path","Paths","pattern","Polymorphic","Preterm","Print","Printing","Program","Projections","Proof","Proposition","Pwd","Qed","Quit","Rec","Record","Recursive","Redirect","Relation","Remark","Remove","Require","Reserved","Reset","Resolve","Restart","Rewrite","Right","Ring","Rings","Save","Scheme","Scope","Scopes","Script","Search","SearchAbout","SearchHead","SearchPattern","SearchRewrite","Section","Separate","Set","Setoid","Show","Solve","Sorted","Step","Strategies","Strategy","Structure","SubClass","Table","Tables","Tactic","Term","Test","Theorem","Time","Timeout","Transparent","Type","Typeclasses","Types","Undelimit","Undo","Unfocus","Unfocused","Unfold","Universe","Universes","Unset","Unshelve","using","Variable","Variables","Variant","Verbose","Visibility","where","with"],
built_in:["abstract","absurd","admit","after","apply","as","assert","assumption","at","auto","autorewrite","autounfold","before","bottom","btauto","by","case","case_eq","cbn","cbv","change","classical_left","classical_right","clear","clearbody","cofix","compare","compute","congruence","constr_eq","constructor","contradict","contradiction","cut","cutrewrite","cycle","decide","decompose","dependent","destruct","destruction","dintuition","discriminate","discrR","do","double","dtauto","eapply","eassumption","eauto","ecase","econstructor","edestruct","ediscriminate","eelim","eexact","eexists","einduction","einjection","eleft","elim","elimtype","enough","equality","erewrite","eright","esimplify_eq","esplit","evar","exact","exactly_once","exfalso","exists","f_equal","fail","field","field_simplify","field_simplify_eq","first","firstorder","fix","fold","fourier","functional","generalize","generalizing","gfail","give_up","has_evar","hnf","idtac","in","induction","injection","instantiate","intro","intro_pattern","intros","intuition","inversion","inversion_clear","is_evar","is_var","lapply","lazy","left","lia","lra","move","native_compute","nia","nsatz","omega","once","pattern","pose","progress","proof","psatz","quote","record","red","refine","reflexivity","remember","rename","repeat","replace","revert","revgoals","rewrite","rewrite_strat","right","ring","ring_simplify","rtauto","set","setoid_reflexivity","setoid_replace","setoid_rewrite","setoid_symmetry","setoid_transitivity","shelve","shelve_unifiable","simpl","simple","simplify_eq","solve","specialize","split","split_Rabs","split_Rmult","stepl","stepr","subst","sum","swap","symmetry","tactic","tauto","time","timeout","top","transitivity","trivial","try","tryif","unfold","unify","until","using","vm_compute","with"]
},contains:[e.QUOTE_STRING_MODE,e.COMMENT("\\(\\*","\\*\\)"),e.C_NUMBER_MODE,{
className:"type",excludeBegin:!0,begin:"\\|\\s*",end:"\\w+"},{begin:/[-=]>/}]})
})();hljs.registerLanguage("coq",e)})();/*! `csp` grammar compiled for Highlight.js 11.5.1 */
(()=>{var s=(()=>{"use strict";return s=>({name:"CSP",case_insensitive:!1,
keywords:{$pattern:"[a-zA-Z][a-zA-Z0-9_-]*",
keyword:["base-uri","child-src","connect-src","default-src","font-src","form-action","frame-ancestors","frame-src","img-src","manifest-src","media-src","object-src","plugin-types","report-uri","sandbox","script-src","style-src","trusted-types","unsafe-hashes","worker-src"]
},contains:[{className:"string",begin:"'",end:"'"},{className:"attribute",
begin:"^Content",end:":",excludeEnd:!0}]})})();hljs.registerLanguage("csp",s)
})();/*! `d` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict";return e=>{const a={
$pattern:e.UNDERSCORE_IDENT_RE,
keyword:"abstract alias align asm assert auto body break byte case cast catch class const continue debug default delete deprecated do else enum export extern final finally for foreach foreach_reverse|10 goto if immutable import in inout int interface invariant is lazy macro mixin module new nothrow out override package pragma private protected public pure ref return scope shared static struct super switch synchronized template this throw try typedef typeid typeof union unittest version void volatile while with __FILE__ __LINE__ __gshared|10 __thread __traits __DATE__ __EOF__ __TIME__ __TIMESTAMP__ __VENDOR__ __VERSION__",
built_in:"bool cdouble cent cfloat char creal dchar delegate double dstring float function idouble ifloat ireal long real short string ubyte ucent uint ulong ushort wchar wstring",
literal:"false null true"
},d="((0|[1-9][\\d_]*)|0[bB][01_]+|0[xX]([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*))",n="\\\\(['\"\\?\\\\abfnrtv]|u[\\dA-Fa-f]{4}|[0-7]{1,3}|x[\\dA-Fa-f]{2}|U[\\dA-Fa-f]{8})|&[a-zA-Z\\d]{2,};",t={
className:"number",begin:"\\b"+d+"(L|u|U|Lu|LU|uL|UL)?",relevance:0},_={
className:"number",
begin:"\\b(((0[xX](([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*)\\.([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*)|\\.?([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*))[pP][+-]?(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d))|((0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d)(\\.\\d*|([eE][+-]?(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d)))|\\d+\\.(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d)|\\.(0|[1-9][\\d_]*)([eE][+-]?(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d))?))([fF]|L|i|[fF]i|Li)?|"+d+"(i|[fF]i|Li))",
relevance:0},r={className:"string",begin:"'("+n+"|.)",end:"'",illegal:"."},i={
className:"string",begin:'"',contains:[{begin:n,relevance:0}],end:'"[cwd]?'
},s=e.COMMENT("\\/\\+","\\+\\/",{contains:["self"],relevance:10});return{
name:"D",keywords:a,contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,s,{
className:"string",begin:'x"[\\da-fA-F\\s\\n\\r]*"[cwd]?',relevance:10},i,{
className:"string",begin:'[rq]"',end:'"[cwd]?',relevance:5},{className:"string",
begin:"`",end:"`[cwd]?"},{className:"string",begin:'q"\\{',end:'\\}"'},_,t,r,{
className:"meta",begin:"^#!",end:"$",relevance:5},{className:"meta",
begin:"#(line)",end:"$",relevance:5},{className:"keyword",
begin:"@[a-zA-Z_][a-zA-Z_\\d]*"}]}}})();hljs.registerLanguage("d",e)})();/*! `kotlin` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict"
;var e="\\.([0-9](_*[0-9])*)",n="[0-9a-fA-F](_*[0-9a-fA-F])*",a={
className:"number",variants:[{
begin:`(\\b([0-9](_*[0-9])*)((${e})|\\.)?|(${e}))[eE][+-]?([0-9](_*[0-9])*)[fFdD]?\\b`
},{begin:`\\b([0-9](_*[0-9])*)((${e})[fFdD]?\\b|\\.([fFdD]\\b)?)`},{
begin:`(${e})[fFdD]?\\b`},{begin:"\\b([0-9](_*[0-9])*)[fFdD]\\b"},{
begin:`\\b0[xX]((${n})\\.?|(${n})?\\.(${n}))[pP][+-]?([0-9](_*[0-9])*)[fFdD]?\\b`
},{begin:"\\b(0|[1-9](_*[0-9])*)[lL]?\\b"},{begin:`\\b0[xX](${n})[lL]?\\b`},{
begin:"\\b0(_*[0-7])*[lL]?\\b"},{begin:"\\b0[bB][01](_*[01])*[lL]?\\b"}],
relevance:0};return e=>{const n={
keyword:"abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual",
built_in:"Byte Short Char Int Long Boolean Float Double Void Unit Nothing",
literal:"true false null"},i={className:"symbol",begin:e.UNDERSCORE_IDENT_RE+"@"
},s={className:"subst",begin:/\$\{/,end:/\}/,contains:[e.C_NUMBER_MODE]},t={
className:"variable",begin:"\\$"+e.UNDERSCORE_IDENT_RE},r={className:"string",
variants:[{begin:'"""',end:'"""(?=[^"])',contains:[t,s]},{begin:"'",end:"'",
illegal:/\n/,contains:[e.BACKSLASH_ESCAPE]},{begin:'"',end:'"',illegal:/\n/,
contains:[e.BACKSLASH_ESCAPE,t,s]}]};s.contains.push(r);const l={
className:"meta",
begin:"@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*"+e.UNDERSCORE_IDENT_RE+")?"
},c={className:"meta",begin:"@"+e.UNDERSCORE_IDENT_RE,contains:[{begin:/\(/,
end:/\)/,contains:[e.inherit(r,{className:"string"})]}]
},o=a,b=e.COMMENT("/\\*","\\*/",{contains:[e.C_BLOCK_COMMENT_MODE]}),E={
variants:[{className:"type",begin:e.UNDERSCORE_IDENT_RE},{begin:/\(/,end:/\)/,
contains:[]}]},d=E;return d.variants[1].contains=[E],E.variants[1].contains=[d],
{name:"Kotlin",aliases:["kt","kts"],keywords:n,
contains:[e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{className:"doctag",
begin:"@[A-Za-z]+"}]}),e.C_LINE_COMMENT_MODE,b,{className:"keyword",
begin:/\b(break|continue|return|this)\b/,starts:{contains:[{className:"symbol",
begin:/@\w+/}]}},i,l,c,{className:"function",beginKeywords:"fun",end:"[(]|$",
returnBegin:!0,excludeEnd:!0,keywords:n,relevance:5,contains:[{
begin:e.UNDERSCORE_IDENT_RE+"\\s*\\(",returnBegin:!0,relevance:0,
contains:[e.UNDERSCORE_TITLE_MODE]},{className:"type",begin:/</,end:/>/,
keywords:"reified",relevance:0},{className:"params",begin:/\(/,end:/\)/,
endsParent:!0,keywords:n,relevance:0,contains:[{begin:/:/,end:/[=,\/]/,
endsWithParent:!0,contains:[E,e.C_LINE_COMMENT_MODE,b],relevance:0
},e.C_LINE_COMMENT_MODE,b,l,c,r,e.C_NUMBER_MODE]},b]},{className:"class",
beginKeywords:"class interface trait",end:/[:\{(]|$/,excludeEnd:!0,
illegal:"extends implements",contains:[{
beginKeywords:"public protected internal private constructor"
},e.UNDERSCORE_TITLE_MODE,{className:"type",begin:/</,end:/>/,excludeBegin:!0,
excludeEnd:!0,relevance:0},{className:"type",begin:/[,:]\s*/,end:/[<\(,]|$/,
excludeBegin:!0,returnEnd:!0},l,c]},r,{className:"meta",begin:"^#!/usr/bin/env",
end:"$",illegal:"\n"},o]}}})();hljs.registerLanguage("kotlin",e)})();/*! `bnf` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict";return e=>({name:"Backus\u2013Naur Form",
contains:[{className:"attribute",begin:/</,end:/>/},{begin:/::=/,end:/$/,
contains:[{begin:/</,end:/>/
},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]
}]})})();hljs.registerLanguage("bnf",e)})();/*! `go` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict";return e=>{const n={
keyword:["break","case","chan","const","continue","default","defer","else","fallthrough","for","func","go","goto","if","import","interface","map","package","range","return","select","struct","switch","type","var"],
type:["bool","byte","complex64","complex128","error","float32","float64","int8","int16","int32","int64","string","uint8","uint16","uint32","uint64","int","uint","uintptr","rune"],
literal:["true","false","iota","nil"],
built_in:["append","cap","close","complex","copy","imag","len","make","new","panic","print","println","real","recover","delete"]
};return{name:"Go",aliases:["golang"],keywords:n,illegal:"</",
contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"string",
variants:[e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,{begin:"`",end:"`"}]},{
className:"number",variants:[{begin:e.C_NUMBER_RE+"[i]",relevance:1
},e.C_NUMBER_MODE]},{begin:/:=/},{className:"function",beginKeywords:"func",
end:"\\s*(\\{|$)",excludeEnd:!0,contains:[e.TITLE_MODE,{className:"params",
begin:/\(/,end:/\)/,endsParent:!0,keywords:n,illegal:/["']/}]}]}}})()
;hljs.registerLanguage("go",e)})();/*! `xml` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict";return e=>{
const a=e.regex,n=a.concat(/[A-Z_]/,a.optional(/[A-Z0-9_.-]*:/),/[A-Z0-9_.-]*/),s={
className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},t={begin:/\s/,
contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]
},i=e.inherit(t,{begin:/\(/,end:/\)/}),c=e.inherit(e.APOS_STRING_MODE,{
className:"string"}),l=e.inherit(e.QUOTE_STRING_MODE,{className:"string"}),r={
endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",
begin:/[A-Za-z0-9._:-]+/,relevance:0},{begin:/=\s*/,relevance:0,contains:[{
className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[s]},{
begin:/'/,end:/'/,contains:[s]},{begin:/[^\s"'=<>`]+/}]}]}]};return{
name:"HTML, XML",
aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],
case_insensitive:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,
relevance:10,contains:[t,l,c,i,{begin:/\[/,end:/\]/,contains:[{className:"meta",
begin:/<![a-z]/,end:/>/,contains:[t,i,l,c]}]}]},e.COMMENT(/<!--/,/-->/,{
relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},s,{
className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[l]
},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,
keywords:{name:"style"},contains:[r],starts:{end:/<\/style>/,returnEnd:!0,
subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,
keywords:{name:"script"},contains:[r],starts:{end:/<\/script>/,returnEnd:!0,
subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/
},{className:"tag",
begin:a.concat(/</,a.lookahead(a.concat(n,a.either(/\/>/,/>/,/\s/)))),
end:/\/?>/,contains:[{className:"name",begin:n,relevance:0,starts:r}]},{
className:"tag",begin:a.concat(/<\//,a.lookahead(a.concat(n,/>/))),contains:[{
className:"name",begin:n,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}
})();hljs.registerLanguage("xml",e)})();/*! `markdown` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict";return e=>{const n={begin:/<\/?[A-Za-z_]/,
end:">",subLanguage:"xml",relevance:0},a={variants:[{begin:/\[.+?\]\[.*?\]/,
relevance:0},{
begin:/\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
relevance:2},{
begin:e.regex.concat(/\[.+?\]\(/,/[A-Za-z][A-Za-z0-9+.-]*/,/:\/\/.*?\)/),
relevance:2},{begin:/\[.+?\]\([./?&#].*?\)/,relevance:1},{
begin:/\[.*?\]\(.*?\)/,relevance:0}],returnBegin:!0,contains:[{match:/\[(?=\])/
},{className:"string",relevance:0,begin:"\\[",end:"\\]",excludeBegin:!0,
returnEnd:!0},{className:"link",relevance:0,begin:"\\]\\(",end:"\\)",
excludeBegin:!0,excludeEnd:!0},{className:"symbol",relevance:0,begin:"\\]\\[",
end:"\\]",excludeBegin:!0,excludeEnd:!0}]},i={className:"strong",contains:[],
variants:[{begin:/_{2}/,end:/_{2}/},{begin:/\*{2}/,end:/\*{2}/}]},s={
className:"emphasis",contains:[],variants:[{begin:/\*(?!\*)/,end:/\*/},{
begin:/_(?!_)/,end:/_/,relevance:0}]},c=e.inherit(i,{contains:[]
}),t=e.inherit(s,{contains:[]});i.contains.push(t),s.contains.push(c)
;let g=[n,a];return[i,s,c,t].forEach((e=>{e.contains=e.contains.concat(g)
})),g=g.concat(i,s),{name:"Markdown",aliases:["md","mkdown","mkd"],contains:[{
className:"section",variants:[{begin:"^#{1,6}",end:"$",contains:g},{
begin:"(?=^.+?\\n[=-]{2,}$)",contains:[{begin:"^[=-]*$"},{begin:"^",end:"\\n",
contains:g}]}]},n,{className:"bullet",begin:"^[ \t]*([*+-]|(\\d+\\.))(?=\\s+)",
end:"\\s+",excludeEnd:!0},i,s,{className:"quote",begin:"^>\\s+",contains:g,
end:"$"},{className:"code",variants:[{begin:"(`{3,})[^`](.|\\n)*?\\1`*[ ]*"},{
begin:"(~{3,})[^~](.|\\n)*?\\1~*[ ]*"},{begin:"```",end:"```+[ ]*$"},{
begin:"~~~",end:"~~~+[ ]*$"},{begin:"`.+?`"},{begin:"(?=^( {4}|\\t))",
contains:[{begin:"^( {4}|\\t)",end:"(\\n)$"}],relevance:0}]},{
begin:"^[-\\*]{3,}",end:"$"},a,{begin:/^\[[^\n]+\]:/,returnBegin:!0,contains:[{
className:"symbol",begin:/\[/,end:/\]/,excludeBegin:!0,excludeEnd:!0},{
className:"link",begin:/:\s*/,end:/$/,excludeBegin:!0}]}]}}})()
;hljs.registerLanguage("markdown",e)})();/*! `dart` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict";return e=>{const n={className:"subst",variants:[{
begin:"\\$[A-Za-z0-9_]+"}]},a={className:"subst",variants:[{begin:/\$\{/,
end:/\}/}],keywords:"true false null this is new super"},t={className:"string",
variants:[{begin:"r'''",end:"'''"},{begin:'r"""',end:'"""'},{begin:"r'",end:"'",
illegal:"\\n"},{begin:'r"',end:'"',illegal:"\\n"},{begin:"'''",end:"'''",
contains:[e.BACKSLASH_ESCAPE,n,a]},{begin:'"""',end:'"""',
contains:[e.BACKSLASH_ESCAPE,n,a]},{begin:"'",end:"'",illegal:"\\n",
contains:[e.BACKSLASH_ESCAPE,n,a]},{begin:'"',end:'"',illegal:"\\n",
contains:[e.BACKSLASH_ESCAPE,n,a]}]};a.contains=[e.C_NUMBER_MODE,t]
;const i=["Comparable","DateTime","Duration","Function","Iterable","Iterator","List","Map","Match","Object","Pattern","RegExp","Set","Stopwatch","String","StringBuffer","StringSink","Symbol","Type","Uri","bool","double","int","num","Element","ElementList"],r=i.map((e=>e+"?"))
;return{name:"Dart",keywords:{
keyword:["abstract","as","assert","async","await","break","case","catch","class","const","continue","covariant","default","deferred","do","dynamic","else","enum","export","extends","extension","external","factory","false","final","finally","for","Function","get","hide","if","implements","import","in","inferface","is","late","library","mixin","new","null","on","operator","part","required","rethrow","return","set","show","static","super","switch","sync","this","throw","true","try","typedef","var","void","while","with","yield"],
built_in:i.concat(r).concat(["Never","Null","dynamic","print","document","querySelector","querySelectorAll","window"]),
$pattern:/[A-Za-z][A-Za-z0-9_]*\??/},
contains:[t,e.COMMENT(/\/\*\*(?!\/)/,/\*\//,{subLanguage:"markdown",relevance:0
}),e.COMMENT(/\/{3,} ?/,/$/,{contains:[{subLanguage:"markdown",begin:".",
end:"$",relevance:0}]}),e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{
className:"class",beginKeywords:"class interface",end:/\{/,excludeEnd:!0,
contains:[{beginKeywords:"extends implements"},e.UNDERSCORE_TITLE_MODE]
},e.C_NUMBER_MODE,{className:"meta",begin:"@[A-Za-z]+"},{begin:"=>"}]}}})()
;hljs.registerLanguage("dart",e)})();/*! `diff` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict";return e=>{const a=e.regex;return{name:"Diff",
aliases:["patch"],contains:[{className:"meta",relevance:10,
match:a.either(/^@@ +-\d+,\d+ +\+\d+,\d+ +@@/,/^\*\*\* +\d+,\d+ +\*\*\*\*$/,/^--- +\d+,\d+ +----$/)
},{className:"comment",variants:[{
begin:a.either(/Index: /,/^index/,/={3,}/,/^-{3}/,/^\*{3} /,/^\+{3}/,/^diff --git/),
end:/$/},{match:/^\*{15}$/}]},{className:"addition",begin:/^\+/,end:/$/},{
className:"deletion",begin:/^-/,end:/$/},{className:"addition",begin:/^!/,
end:/$/}]}}})();hljs.registerLanguage("diff",e)})();/*! `objectivec` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict";return e=>{const n=/[a-zA-Z@][a-zA-Z0-9_]*/,_={
$pattern:n,keyword:["@interface","@class","@protocol","@implementation"]}
;return{name:"Objective-C",
aliases:["mm","objc","obj-c","obj-c++","objective-c++"],keywords:{
"variable.language":["this","super"],$pattern:n,
keyword:["while","export","sizeof","typedef","const","struct","for","union","volatile","static","mutable","if","do","return","goto","enum","else","break","extern","asm","case","default","register","explicit","typename","switch","continue","inline","readonly","assign","readwrite","self","@synchronized","id","typeof","nonatomic","IBOutlet","IBAction","strong","weak","copy","in","out","inout","bycopy","byref","oneway","__strong","__weak","__block","__autoreleasing","@private","@protected","@public","@try","@property","@end","@throw","@catch","@finally","@autoreleasepool","@synthesize","@dynamic","@selector","@optional","@required","@encode","@package","@import","@defs","@compatibility_alias","__bridge","__bridge_transfer","__bridge_retained","__bridge_retain","__covariant","__contravariant","__kindof","_Nonnull","_Nullable","_Null_unspecified","__FUNCTION__","__PRETTY_FUNCTION__","__attribute__","getter","setter","retain","unsafe_unretained","nonnull","nullable","null_unspecified","null_resettable","class","instancetype","NS_DESIGNATED_INITIALIZER","NS_UNAVAILABLE","NS_REQUIRES_SUPER","NS_RETURNS_INNER_POINTER","NS_INLINE","NS_AVAILABLE","NS_DEPRECATED","NS_ENUM","NS_OPTIONS","NS_SWIFT_UNAVAILABLE","NS_ASSUME_NONNULL_BEGIN","NS_ASSUME_NONNULL_END","NS_REFINED_FOR_SWIFT","NS_SWIFT_NAME","NS_SWIFT_NOTHROW","NS_DURING","NS_HANDLER","NS_ENDHANDLER","NS_VALUERETURN","NS_VOIDRETURN"],
literal:["false","true","FALSE","TRUE","nil","YES","NO","NULL"],
built_in:["dispatch_once_t","dispatch_queue_t","dispatch_sync","dispatch_async","dispatch_once"],
type:["int","float","char","unsigned","signed","short","long","double","wchar_t","unichar","void","bool","BOOL","id|0","_Bool"]
},illegal:"</",contains:[{className:"built_in",
begin:"\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+"
},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.C_NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,{
className:"string",variants:[{begin:'@"',end:'"',illegal:"\\n",
contains:[e.BACKSLASH_ESCAPE]}]},{className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,
keywords:{
keyword:"if else elif endif define undef warning error line pragma ifdef ifndef include"
},contains:[{begin:/\\\n/,relevance:0},e.inherit(e.QUOTE_STRING_MODE,{
className:"string"}),{className:"string",begin:/<.*?>/,end:/$/,illegal:"\\n"
},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{className:"class",
begin:"("+_.keyword.join("|")+")\\b",end:/(\{|$)/,excludeEnd:!0,keywords:_,
contains:[e.UNDERSCORE_TITLE_MODE]},{begin:"\\."+e.UNDERSCORE_IDENT_RE,
relevance:0}]}}})();hljs.registerLanguage("objectivec",e)})();/*! `ceylon` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict";return e=>{
const a=["assembly","module","package","import","alias","class","interface","object","given","value","assign","void","function","new","of","extends","satisfies","abstracts","in","out","return","break","continue","throw","assert","dynamic","if","else","switch","case","for","while","try","catch","finally","then","let","this","outer","super","is","exists","nonempty"],s={
className:"subst",excludeBegin:!0,excludeEnd:!0,begin:/``/,end:/``/,keywords:a,
relevance:10},n=[{className:"string",begin:'"""',end:'"""',relevance:10},{
className:"string",begin:'"',end:'"',contains:[s]},{className:"string",
begin:"'",end:"'"},{className:"number",
begin:"#[0-9a-fA-F_]+|\\$[01_]+|[0-9_]+(?:\\.[0-9_](?:[eE][+-]?\\d+)?)?[kMGTPmunpf]?",
relevance:0}];return s.contains=n,{name:"Ceylon",keywords:{
keyword:a.concat(["shared","abstract","formal","default","actual","variable","late","native","deprecated","final","sealed","annotation","suppressWarnings","small"]),
meta:["doc","by","license","see","throws","tagged"]},
illegal:"\\$[^01]|#[^0-9a-fA-F]",
contains:[e.C_LINE_COMMENT_MODE,e.COMMENT("/\\*","\\*/",{contains:["self"]}),{
className:"meta",begin:'@[a-z]\\w*(?::"[^"]*")?'}].concat(n)}}})()
;hljs.registerLanguage("ceylon",e)})();/*! `brainfuck` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict";return e=>{const n={className:"literal",
begin:/[+-]+/,relevance:0};return{name:"Brainfuck",aliases:["bf"],
contains:[e.COMMENT(/[^\[\]\.,\+\-<> \r\n]/,/[\[\]\.,\+\-<> \r\n]/,{contains:[{
match:/[ ]+[^\[\]\.,\+\-<> \r\n]/,relevance:0}],returnEnd:!0,relevance:0}),{
className:"title",begin:"[\\[\\]]",relevance:0},{className:"string",
begin:"[\\.,]",relevance:0},{begin:/(?=\+\+|--)/,contains:[n]},n]}}})()
;hljs.registerLanguage("brainfuck",e)})();/*! `crystal` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict";return e=>{
const n="(_?[ui](8|16|32|64|128))?",i="[a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|[=!]~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~|]|//|//=|&[-+*]=?|&\\*\\*|\\[\\][=?]?",s="[A-Za-z_]\\w*(::\\w+)*(\\?|!)?",a={
$pattern:"[a-zA-Z_]\\w*[!?=]?",
keyword:"abstract alias annotation as as? asm begin break case class def do else elsif end ensure enum extend for fun if include instance_sizeof is_a? lib macro module next nil? of out pointerof private protected rescue responds_to? return require select self sizeof struct super then type typeof union uninitialized unless until verbatim when while with yield __DIR__ __END_LINE__ __FILE__ __LINE__",
literal:"false nil true"},t={className:"subst",begin:/#\{/,end:/\}/,keywords:a
},c={className:"template-variable",variants:[{begin:"\\{\\{",end:"\\}\\}"},{
begin:"\\{%",end:"%\\}"}],keywords:a};function r(e,n){const i=[{begin:e,end:n}]
;return i[0].contains=i,i}const l={className:"string",
contains:[e.BACKSLASH_ESCAPE,t],variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/
},{begin:/`/,end:/`/},{begin:"%[Qwi]?\\(",end:"\\)",contains:r("\\(","\\)")},{
begin:"%[Qwi]?\\[",end:"\\]",contains:r("\\[","\\]")},{begin:"%[Qwi]?\\{",
end:/\}/,contains:r(/\{/,/\}/)},{begin:"%[Qwi]?<",end:">",contains:r("<",">")},{
begin:"%[Qwi]?\\|",end:"\\|"},{begin:/<<-\w+$/,end:/^\s*\w+$/}],relevance:0},b={
className:"string",variants:[{begin:"%q\\(",end:"\\)",contains:r("\\(","\\)")},{
begin:"%q\\[",end:"\\]",contains:r("\\[","\\]")},{begin:"%q\\{",end:/\}/,
contains:r(/\{/,/\}/)},{begin:"%q<",end:">",contains:r("<",">")},{begin:"%q\\|",
end:"\\|"},{begin:/<<-'\w+'$/,end:/^\s*\w+$/}],relevance:0},o={
begin:"(?!%\\})("+e.RE_STARTERS_RE+"|\\n|\\b(case|if|select|unless|until|when|while)\\b)\\s*",
keywords:"case if select unless until when while",contains:[{className:"regexp",
contains:[e.BACKSLASH_ESCAPE,t],variants:[{begin:"//[a-z]*",relevance:0},{
begin:"/(?!\\/)",end:"/[a-z]*"}]}],relevance:0},g=[c,l,b,{className:"regexp",
contains:[e.BACKSLASH_ESCAPE,t],variants:[{begin:"%r\\(",end:"\\)",
contains:r("\\(","\\)")},{begin:"%r\\[",end:"\\]",contains:r("\\[","\\]")},{
begin:"%r\\{",end:/\}/,contains:r(/\{/,/\}/)},{begin:"%r<",end:">",
contains:r("<",">")},{begin:"%r\\|",end:"\\|"}],relevance:0},o,{
className:"meta",begin:"@\\[",end:"\\]",
contains:[e.inherit(e.QUOTE_STRING_MODE,{className:"string"})]},{
className:"variable",
begin:"(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])"
},e.HASH_COMMENT_MODE,{className:"class",beginKeywords:"class module struct",
end:"$|;",illegal:/=/,contains:[e.HASH_COMMENT_MODE,e.inherit(e.TITLE_MODE,{
begin:s}),{begin:"<"}]},{className:"class",beginKeywords:"lib enum union",
end:"$|;",illegal:/=/,contains:[e.HASH_COMMENT_MODE,e.inherit(e.TITLE_MODE,{
begin:s})]},{beginKeywords:"annotation",end:"$|;",illegal:/=/,
contains:[e.HASH_COMMENT_MODE,e.inherit(e.TITLE_MODE,{begin:s})],relevance:2},{
className:"function",beginKeywords:"def",end:/\B\b/,
contains:[e.inherit(e.TITLE_MODE,{begin:i,endsParent:!0})]},{
className:"function",beginKeywords:"fun macro",end:/\B\b/,
contains:[e.inherit(e.TITLE_MODE,{begin:i,endsParent:!0})],relevance:2},{
className:"symbol",begin:e.UNDERSCORE_IDENT_RE+"(!|\\?)?:",relevance:0},{
className:"symbol",begin:":",contains:[l,{begin:i}],relevance:0},{
className:"number",variants:[{begin:"\\b0b([01_]+)"+n},{begin:"\\b0o([0-7_]+)"+n
},{begin:"\\b0x([A-Fa-f0-9_]+)"+n},{
begin:"\\b([1-9][0-9_]*[0-9]|[0-9])(\\.[0-9][0-9_]*)?([eE]_?[-+]?[0-9_]*)?(_?f(32|64))?(?!_)"
},{begin:"\\b([1-9][0-9_]*|0)"+n}],relevance:0}]
;return t.contains=g,c.contains=g.slice(1),{name:"Crystal",aliases:["cr"],
keywords:a,contains:g}}})();hljs.registerLanguage("crystal",e)})();/*! `autohotkey` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict";return e=>{const a={begin:"`[\\s\\S]"};return{
name:"AutoHotkey",case_insensitive:!0,aliases:["ahk"],keywords:{
keyword:"Break Continue Critical Exit ExitApp Gosub Goto New OnExit Pause return SetBatchLines SetTimer Suspend Thread Throw Until ahk_id ahk_class ahk_pid ahk_exe ahk_group",
literal:"true false NOT AND OR",
built_in:"ComSpec Clipboard ClipboardAll ErrorLevel"},
contains:[a,e.inherit(e.QUOTE_STRING_MODE,{contains:[a]}),e.COMMENT(";","$",{
relevance:0}),e.C_BLOCK_COMMENT_MODE,{className:"number",begin:e.NUMBER_RE,
relevance:0},{className:"variable",begin:"%[a-zA-Z0-9#_$@]+%"},{
className:"built_in",begin:"^\\s*\\w+\\s*(,|%)"},{className:"title",variants:[{
begin:'^[^\\n";]+::(?!=)'},{begin:'^[^\\n";]+:(?!=)',relevance:0}]},{
className:"meta",begin:"^\\s*#\\w+",end:"$",relevance:0},{className:"built_in",
begin:"A_[a-zA-Z0-9]+"},{begin:",\\s*,"}]}}})()
;hljs.registerLanguage("autohotkey",e)})();/*! `delphi` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict";return e=>{
const r=["exports","register","file","shl","array","record","property","for","mod","while","set","ally","label","uses","raise","not","stored","class","safecall","var","interface","or","private","static","exit","index","inherited","to","else","stdcall","override","shr","asm","far","resourcestring","finalization","packed","virtual","out","and","protected","library","do","xorwrite","goto","near","function","end","div","overload","object","unit","begin","string","on","inline","repeat","until","destructor","write","message","program","with","read","initialization","except","default","nil","if","case","cdecl","in","downto","threadvar","of","try","pascal","const","external","constructor","type","public","then","implementation","finally","published","procedure","absolute","reintroduce","operator","as","is","abstract","alias","assembler","bitpacked","break","continue","cppdecl","cvar","enumerator","experimental","platform","deprecated","unimplemented","dynamic","export","far16","forward","generic","helper","implements","interrupt","iochecks","local","name","nodefault","noreturn","nostackframe","oldfpccall","otherwise","saveregisters","softfloat","specialize","strict","unaligned","varargs"],a=[e.C_LINE_COMMENT_MODE,e.COMMENT(/\{/,/\}/,{
relevance:0}),e.COMMENT(/\(\*/,/\*\)/,{relevance:10})],t={className:"meta",
variants:[{begin:/\{\$/,end:/\}/},{begin:/\(\*\$/,end:/\*\)/}]},n={
className:"string",begin:/'/,end:/'/,contains:[{begin:/''/}]},i={
className:"string",begin:/(#\d+)+/},s={begin:e.IDENT_RE+"\\s*=\\s*class\\s*\\(",
returnBegin:!0,contains:[e.TITLE_MODE]},c={className:"function",
beginKeywords:"function constructor destructor procedure",end:/[:;]/,
keywords:"function constructor|10 destructor|10 procedure|10",
contains:[e.TITLE_MODE,{className:"params",begin:/\(/,end:/\)/,keywords:r,
contains:[n,i,t].concat(a)},t].concat(a)};return{name:"Delphi",
aliases:["dpr","dfm","pas","pascal"],case_insensitive:!0,keywords:r,
illegal:/"|\$[G-Zg-z]|\/\*|<\/|\|/,contains:[n,i,e.NUMBER_MODE,{
className:"number",relevance:0,variants:[{begin:"\\$[0-9A-Fa-f]+"},{
begin:"&[0-7]+"},{begin:"%[01]+"}]},s,c,t].concat(a)}}})()
;hljs.registerLanguage("delphi",e)})();/*! `elm` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict";return e=>{const n={
variants:[e.COMMENT("--","$"),e.COMMENT(/\{-/,/-\}/,{contains:["self"]})]},i={
className:"type",begin:"\\b[A-Z][\\w']*",relevance:0},s={begin:"\\(",end:"\\)",
illegal:'"',contains:[{className:"type",
begin:"\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?"},n]};return{name:"Elm",
keywords:["let","in","if","then","else","case","of","where","module","import","exposing","type","alias","as","infix","infixl","infixr","port","effect","command","subscription"],
contains:[{beginKeywords:"port effect module",end:"exposing",
keywords:"port effect module where command subscription exposing",
contains:[s,n],illegal:"\\W\\.|;"},{begin:"import",end:"$",
keywords:"import as exposing",contains:[s,n],illegal:"\\W\\.|;"},{begin:"type",
end:"$",keywords:"type alias",contains:[i,s,{begin:/\{/,end:/\}/,
contains:s.contains},n]},{beginKeywords:"infix infixl infixr",end:"$",
contains:[e.C_NUMBER_MODE,n]},{begin:"port",end:"$",keywords:"port",contains:[n]
},{className:"string",begin:"'\\\\?.",end:"'",illegal:"."
},e.QUOTE_STRING_MODE,e.C_NUMBER_MODE,i,e.inherit(e.TITLE_MODE,{
begin:"^[_a-z][\\w']*"}),n,{begin:"->|<-"}],illegal:/;/}}})()
;hljs.registerLanguage("elm",e)})();/*! `java` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict"
;var e="\\.([0-9](_*[0-9])*)",a="[0-9a-fA-F](_*[0-9a-fA-F])*",n={
className:"number",variants:[{
begin:`(\\b([0-9](_*[0-9])*)((${e})|\\.)?|(${e}))[eE][+-]?([0-9](_*[0-9])*)[fFdD]?\\b`
},{begin:`\\b([0-9](_*[0-9])*)((${e})[fFdD]?\\b|\\.([fFdD]\\b)?)`},{
begin:`(${e})[fFdD]?\\b`},{begin:"\\b([0-9](_*[0-9])*)[fFdD]\\b"},{
begin:`\\b0[xX]((${a})\\.?|(${a})?\\.(${a}))[pP][+-]?([0-9](_*[0-9])*)[fFdD]?\\b`
},{begin:"\\b(0|[1-9](_*[0-9])*)[lL]?\\b"},{begin:`\\b0[xX](${a})[lL]?\\b`},{
begin:"\\b0(_*[0-7])*[lL]?\\b"},{begin:"\\b0[bB][01](_*[01])*[lL]?\\b"}],
relevance:0};function s(e,a,n){return-1===n?"":e.replace(a,(t=>s(e,a,n-1)))}
return e=>{
const a=e.regex,t="[\xc0-\u02b8a-zA-Z_$][\xc0-\u02b8a-zA-Z_$0-9]*",i=t+s("(?:<"+t+"~~~(?:\\s*,\\s*"+t+"~~~)*>)?",/~~~/g,2),r={
keyword:["synchronized","abstract","private","var","static","if","const ","for","while","strictfp","finally","protected","import","native","final","void","enum","else","break","transient","catch","instanceof","volatile","case","assert","package","default","public","try","switch","continue","throws","protected","public","private","module","requires","exports","do","sealed"],
literal:["false","true","null"],
type:["char","boolean","long","float","int","byte","short","double"],
built_in:["super","this"]},l={className:"meta",begin:"@"+t,contains:[{
begin:/\(/,end:/\)/,contains:["self"]}]},c={className:"params",begin:/\(/,
end:/\)/,keywords:r,relevance:0,contains:[e.C_BLOCK_COMMENT_MODE],endsParent:!0}
;return{name:"Java",aliases:["jsp"],keywords:r,illegal:/<\/|#/,
contains:[e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{begin:/\w+@/,
relevance:0},{className:"doctag",begin:"@[A-Za-z]+"}]}),{
begin:/import java\.[a-z]+\./,keywords:"import",relevance:2
},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{begin:/"""/,end:/"""/,
className:"string",contains:[e.BACKSLASH_ESCAPE]
},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{
match:[/\b(?:class|interface|enum|extends|implements|new)/,/\s+/,t],className:{
1:"keyword",3:"title.class"}},{match:/non-sealed/,scope:"keyword"},{
begin:[a.concat(/(?!else)/,t),/\s+/,t,/\s+/,/=/],className:{1:"type",
3:"variable",5:"operator"}},{begin:[/record/,/\s+/,t],className:{1:"keyword",
3:"title.class"},contains:[c,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{
beginKeywords:"new throw return else",relevance:0},{
begin:["(?:"+i+"\\s+)",e.UNDERSCORE_IDENT_RE,/\s*(?=\()/],className:{
2:"title.function"},keywords:r,contains:[{className:"params",begin:/\(/,
end:/\)/,keywords:r,relevance:0,
contains:[l,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,n,e.C_BLOCK_COMMENT_MODE]
},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},n,l]}}})()
;hljs.registerLanguage("java",e)})();/*! `coffeescript` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict"
;const e=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],n=["true","false","null","undefined","NaN","Infinity"],r=[].concat(["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"])
;return t=>{const a={
keyword:e.concat(["then","unless","until","loop","by","when","and","or","is","isnt","not"]).filter((i=["var","const","let","function","static"],
e=>!i.includes(e))),literal:n.concat(["yes","no","on","off"]),
built_in:r.concat(["npm","print"])};var i;const s="[A-Za-z$_][0-9A-Za-z$_]*",o={
className:"subst",begin:/#\{/,end:/\}/,keywords:a
},c=[t.BINARY_NUMBER_MODE,t.inherit(t.C_NUMBER_MODE,{starts:{end:"(\\s*/)?",
relevance:0}}),{className:"string",variants:[{begin:/'''/,end:/'''/,
contains:[t.BACKSLASH_ESCAPE]},{begin:/'/,end:/'/,contains:[t.BACKSLASH_ESCAPE]
},{begin:/"""/,end:/"""/,contains:[t.BACKSLASH_ESCAPE,o]},{begin:/"/,end:/"/,
contains:[t.BACKSLASH_ESCAPE,o]}]},{className:"regexp",variants:[{begin:"///",
end:"///",contains:[o,t.HASH_COMMENT_MODE]},{begin:"//[gim]{0,3}(?=\\W)",
relevance:0},{begin:/\/(?![ *]).*?(?![\\]).\/[gim]{0,3}(?=\W)/}]},{begin:"@"+s
},{subLanguage:"javascript",excludeBegin:!0,excludeEnd:!0,variants:[{
begin:"```",end:"```"},{begin:"`",end:"`"}]}];o.contains=c
;const l=t.inherit(t.TITLE_MODE,{begin:s}),d="(\\(.*\\)\\s*)?\\B[-=]>",g={
className:"params",begin:"\\([^\\(]",returnBegin:!0,contains:[{begin:/\(/,
end:/\)/,keywords:a,contains:["self"].concat(c)}]},u={variants:[{
match:[/class\s+/,s,/\s+extends\s+/,s]},{match:[/class\s+/,s]}],scope:{
2:"title.class",4:"title.class.inherited"},keywords:a};return{
name:"CoffeeScript",aliases:["coffee","cson","iced"],keywords:a,illegal:/\/\*/,
contains:[...c,t.COMMENT("###","###"),t.HASH_COMMENT_MODE,{className:"function",
begin:"^\\s*"+s+"\\s*=\\s*"+d,end:"[-=]>",returnBegin:!0,contains:[l,g]},{
begin:/[:\(,=]\s*/,relevance:0,contains:[{className:"function",begin:d,
end:"[-=]>",returnBegin:!0,contains:[g]}]},u,{begin:s+":",end:":",
returnBegin:!0,returnEnd:!0,relevance:0}]}}})()
;hljs.registerLanguage("coffeescript",e)})();/*! `properties` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict";return e=>{
const t="[ \\t\\f]*",n="([^\\\\:= \\t\\f\\n]|\\\\.)+";return{name:".properties",
disableAutodetect:!0,case_insensitive:!0,illegal:/\S/,
contains:[e.COMMENT("^\\s*[!#]","$"),{returnBegin:!0,variants:[{
begin:n+"[ \\t\\f]*[:=][ \\t\\f]*"},{begin:n+"[ \\t\\f]+"}],contains:[{
className:"attr",begin:n,endsParent:!0}],starts:{
end:"([ \\t\\f]*[:=][ \\t\\f]*|[ \\t\\f]+)",relevance:0,starts:{
className:"string",end:/$/,relevance:0,contains:[{begin:"\\\\\\\\"},{
begin:"\\\\\\n"}]}}},{className:"attr",begin:n+t+"$"}]}}})()
;hljs.registerLanguage("properties",e)})();/*! `1c` grammar compiled for Highlight.js 11.5.1 */
(()=>{var s=(()=>{"use strict";return s=>{
const x="[A-Za-z\u0410-\u042f\u0430-\u044f\u0451\u0401_][A-Za-z\u0410-\u042f\u0430-\u044f\u0451\u0401_0-9]+",n="\u0434\u0430\u043b\u0435\u0435 \u0432\u043e\u0437\u0432\u0440\u0430\u0442 \u0432\u044b\u0437\u0432\u0430\u0442\u044c\u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0434\u043b\u044f \u0435\u0441\u043b\u0438 \u0438 \u0438\u0437 \u0438\u043b\u0438 \u0438\u043d\u0430\u0447\u0435 \u0438\u043d\u0430\u0447\u0435\u0435\u0441\u043b\u0438 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043a\u043e\u043d\u0435\u0446\u0435\u0441\u043b\u0438 \u043a\u043e\u043d\u0435\u0446\u043f\u043e\u043f\u044b\u0442\u043a\u0438 \u043a\u043e\u043d\u0435\u0446\u0446\u0438\u043a\u043b\u0430 \u043d\u0435 \u043d\u043e\u0432\u044b\u0439 \u043f\u0435\u0440\u0435\u0439\u0442\u0438 \u043f\u0435\u0440\u0435\u043c \u043f\u043e \u043f\u043e\u043a\u0430 \u043f\u043e\u043f\u044b\u0442\u043a\u0430 \u043f\u0440\u0435\u0440\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c \u0442\u043e\u0433\u0434\u0430 \u0446\u0438\u043a\u043b \u044d\u043a\u0441\u043f\u043e\u0440\u0442 ",e="null \u0438\u0441\u0442\u0438\u043d\u0430 \u043b\u043e\u0436\u044c \u043d\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043e",o=s.inherit(s.NUMBER_MODE),t={
className:"string",begin:'"|\\|',end:'"|$',contains:[{begin:'""'}]},a={
begin:"'",end:"'",excludeBegin:!0,excludeEnd:!0,contains:[{className:"number",
begin:"\\d{4}([\\.\\\\/:-]?\\d{2}){0,5}"}]},m=s.inherit(s.C_LINE_COMMENT_MODE)
;return{name:"1C:Enterprise",case_insensitive:!0,keywords:{$pattern:x,keyword:n,
built_in:"\u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0440\u0430\u043d\u0438\u0446 \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0440\u043e\u043a \u0441\u0438\u043c\u0432\u043e\u043b\u0442\u0430\u0431\u0443\u043b\u044f\u0446\u0438\u0438 ansitooem oemtoansi \u0432\u0432\u0435\u0441\u0442\u0438\u0432\u0438\u0434\u0441\u0443\u0431\u043a\u043e\u043d\u0442\u043e \u0432\u0432\u0435\u0441\u0442\u0438\u043f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u0435 \u0432\u0432\u0435\u0441\u0442\u0438\u043f\u0435\u0440\u0438\u043e\u0434 \u0432\u0432\u0435\u0441\u0442\u0438\u043f\u043b\u0430\u043d\u0441\u0447\u0435\u0442\u043e\u0432 \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0439\u043f\u043b\u0430\u043d\u0441\u0447\u0435\u0442\u043e\u0432 \u0434\u0430\u0442\u0430\u0433\u043e\u0434 \u0434\u0430\u0442\u0430\u043c\u0435\u0441\u044f\u0446 \u0434\u0430\u0442\u0430\u0447\u0438\u0441\u043b\u043e \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a\u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u0432\u0441\u0442\u0440\u043e\u043a\u0443 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u0438\u0437\u0441\u0442\u0440\u043e\u043a\u0438 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0438\u0431 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043a\u043e\u0434\u0441\u0438\u043c\u0432 \u043a\u043e\u043d\u0433\u043e\u0434\u0430 \u043a\u043e\u043d\u0435\u0446\u043f\u0435\u0440\u0438\u043e\u0434\u0430\u0431\u0438 \u043a\u043e\u043d\u0435\u0446\u0440\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u043d\u043d\u043e\u0433\u043e\u043f\u0435\u0440\u0438\u043e\u0434\u0430\u0431\u0438 \u043a\u043e\u043d\u0435\u0446\u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0433\u043e\u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u0430 \u043a\u043e\u043d\u043a\u0432\u0430\u0440\u0442\u0430\u043b\u0430 \u043a\u043e\u043d\u043c\u0435\u0441\u044f\u0446\u0430 \u043a\u043e\u043d\u043d\u0435\u0434\u0435\u043b\u0438 \u043b\u043e\u0433 \u043b\u043e\u043310 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435\u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e\u0441\u0443\u0431\u043a\u043e\u043d\u0442\u043e \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u043d\u0430\u0431\u043e\u0440\u0430\u043f\u0440\u0430\u0432 \u043d\u0430\u0437\u043d\u0430\u0447\u0438\u0442\u044c\u0432\u0438\u0434 \u043d\u0430\u0437\u043d\u0430\u0447\u0438\u0442\u044c\u0441\u0447\u0435\u0442 \u043d\u0430\u0439\u0442\u0438\u0441\u0441\u044b\u043b\u043a\u0438 \u043d\u0430\u0447\u0430\u043b\u043e\u043f\u0435\u0440\u0438\u043e\u0434\u0430\u0431\u0438 \u043d\u0430\u0447\u0430\u043b\u043e\u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0433\u043e\u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u0430 \u043d\u0430\u0447\u0433\u043e\u0434\u0430 \u043d\u0430\u0447\u043a\u0432\u0430\u0440\u0442\u0430\u043b\u0430 \u043d\u0430\u0447\u043c\u0435\u0441\u044f\u0446\u0430 \u043d\u0430\u0447\u043d\u0435\u0434\u0435\u043b\u0438 \u043d\u043e\u043c\u0435\u0440\u0434\u043d\u044f\u0433\u043e\u0434\u0430 \u043d\u043e\u043c\u0435\u0440\u0434\u043d\u044f\u043d\u0435\u0434\u0435\u043b\u0438 \u043d\u043e\u043c\u0435\u0440\u043d\u0435\u0434\u0435\u043b\u0438\u0433\u043e\u0434\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430\u043e\u0436\u0438\u0434\u0430\u043d\u0438\u044f \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0439\u0436\u0443\u0440\u043d\u0430\u043b\u0440\u0430\u0441\u0447\u0435\u0442\u043e\u0432 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0439\u043f\u043b\u0430\u043d\u0441\u0447\u0435\u0442\u043e\u0432 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0439\u044f\u0437\u044b\u043a \u043e\u0447\u0438\u0441\u0442\u0438\u0442\u044c\u043e\u043a\u043d\u043e\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439 \u043f\u0435\u0440\u0438\u043e\u0434\u0441\u0442\u0440 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u0432\u0440\u0435\u043c\u044f\u0442\u0430 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u0434\u0430\u0442\u0443\u0442\u0430 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0442\u0430 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043e\u0442\u0431\u043e\u0440\u0430 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u043f\u043e\u0437\u0438\u0446\u0438\u044e\u0442\u0430 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u043f\u0443\u0441\u0442\u043e\u0435\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u0442\u0430 \u043f\u0440\u0435\u0444\u0438\u043a\u0441\u0430\u0432\u0442\u043e\u043d\u0443\u043c\u0435\u0440\u0430\u0446\u0438\u0438 \u043f\u0440\u043e\u043f\u0438\u0441\u044c \u043f\u0443\u0441\u0442\u043e\u0435\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0440\u0430\u0437\u043c \u0440\u0430\u0437\u043e\u0431\u0440\u0430\u0442\u044c\u043f\u043e\u0437\u0438\u0446\u0438\u044e\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430 \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044c\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u044b\u043d\u0430 \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044c\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u044b\u043f\u043e \u0441\u0438\u043c\u0432 \u0441\u043e\u0437\u0434\u0430\u0442\u044c\u043e\u0431\u044a\u0435\u043a\u0442 \u0441\u0442\u0430\u0442\u0443\u0441\u0432\u043e\u0437\u0432\u0440\u0430\u0442\u0430 \u0441\u0442\u0440\u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e\u0441\u0442\u0440\u043e\u043a \u0441\u0444\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u043f\u043e\u0437\u0438\u0446\u0438\u044e\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430 \u0441\u0447\u0435\u0442\u043f\u043e\u043a\u043e\u0434\u0443 \u0442\u0435\u043a\u0443\u0449\u0435\u0435\u0432\u0440\u0435\u043c\u044f \u0442\u0438\u043f\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0442\u0438\u043f\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u0441\u0442\u0440 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c\u0442\u0430\u043d\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c\u0442\u0430\u043f\u043e \u0444\u0438\u043a\u0441\u0448\u0430\u0431\u043b\u043e\u043d \u0448\u0430\u0431\u043b\u043e\u043d acos asin atan base64\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 base64\u0441\u0442\u0440\u043e\u043a\u0430 cos exp log log10 pow sin sqrt tan xml\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 xml\u0441\u0442\u0440\u043e\u043a\u0430 xml\u0442\u0438\u043f xml\u0442\u0438\u043f\u0437\u043d\u0447 \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0435\u043e\u043a\u043d\u043e \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u044b\u0439\u0440\u0435\u0436\u0438\u043c \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u044b\u0439\u0440\u0435\u0436\u0438\u043c\u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u044f\u0434\u0430\u043d\u043d\u044b\u0445 \u0431\u0443\u043b\u0435\u0432\u043e \u0432\u0432\u0435\u0441\u0442\u0438\u0434\u0430\u0442\u0443 \u0432\u0432\u0435\u0441\u0442\u0438\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0432\u0432\u0435\u0441\u0442\u0438\u0441\u0442\u0440\u043e\u043a\u0443 \u0432\u0432\u0435\u0441\u0442\u0438\u0447\u0438\u0441\u043b\u043e \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c\u0447\u0442\u0435\u043d\u0438\u044fxml \u0432\u043e\u043f\u0440\u043e\u0441 \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0432\u0440\u0435\u0433 \u0432\u044b\u0433\u0440\u0443\u0437\u0438\u0442\u044c\u0436\u0443\u0440\u043d\u0430\u043b\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443\u043e\u043f\u043e\u0432\u0435\u0449\u0435\u043d\u0438\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0443\u043f\u0440\u0430\u0432\u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u0432\u044b\u0447\u0438\u0441\u043b\u0438\u0442\u044c \u0433\u043e\u0434 \u0434\u0430\u043d\u043d\u044b\u0435\u0444\u043e\u0440\u043c\u044b\u0432\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0434\u0430\u0442\u0430 \u0434\u0435\u043d\u044c \u0434\u0435\u043d\u044c\u0433\u043e\u0434\u0430 \u0434\u0435\u043d\u044c\u043d\u0435\u0434\u0435\u043b\u0438 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c\u043c\u0435\u0441\u044f\u0446 \u0437\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0434\u0430\u043d\u043d\u044b\u0435\u0434\u043b\u044f\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0437\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0440\u0430\u0431\u043e\u0442\u0443\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c\u0440\u0430\u0431\u043e\u0442\u0443\u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c\u0432\u043d\u0435\u0448\u043d\u044e\u044e\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0443 \u0437\u0430\u043a\u0440\u044b\u0442\u044c\u0441\u043f\u0440\u0430\u0432\u043a\u0443 \u0437\u0430\u043f\u0438\u0441\u0430\u0442\u044cjson \u0437\u0430\u043f\u0438\u0441\u0430\u0442\u044cxml \u0437\u0430\u043f\u0438\u0441\u0430\u0442\u044c\u0434\u0430\u0442\u0443json \u0437\u0430\u043f\u0438\u0441\u044c\u0436\u0443\u0440\u043d\u0430\u043b\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u044c\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u0441\u0432\u043e\u0439\u0441\u0442\u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0438\u0442\u044c\u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c\u0441\u0438\u0441\u0442\u0435\u043c\u0443 \u0437\u0430\u0444\u0438\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u044e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u0432\u0434\u0430\u043d\u043d\u044b\u0435\u0444\u043e\u0440\u043c\u044b \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u0432\u0441\u0442\u0440\u043e\u043a\u0443\u0432\u043d\u0443\u0442\u0440 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u0432\u0444\u0430\u0439\u043b \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u0438\u0437\u0441\u0442\u0440\u043e\u043a\u0438\u0432\u043d\u0443\u0442\u0440 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u0438\u0437\u0444\u0430\u0439\u043b\u0430 \u0438\u0437xml\u0442\u0438\u043f\u0430 \u0438\u043c\u043f\u043e\u0440\u0442\u043c\u043e\u0434\u0435\u043b\u0438xdto \u0438\u043c\u044f\u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0430 \u0438\u043c\u044f\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u043f\u0440\u0435\u0434\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0435\u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f\u043e\u0431\u043e\u0448\u0438\u0431\u043a\u0435 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438\u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u0433\u043e\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445\u0444\u0430\u0439\u043b\u043e\u0432 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b \u043a\u043e\u0434\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u0442\u0440\u043e\u043a\u0443 \u043a\u043e\u0434\u043b\u043e\u043a\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0439\u0431\u0430\u0437\u044b \u043a\u043e\u0434\u0441\u0438\u043c\u0432\u043e\u043b\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u0430\u0441\u0438\u0441\u0442\u0435\u043c\u044b \u043a\u043e\u043d\u0435\u0446\u0433\u043e\u0434\u0430 \u043a\u043e\u043d\u0435\u0446\u0434\u043d\u044f \u043a\u043e\u043d\u0435\u0446\u043a\u0432\u0430\u0440\u0442\u0430\u043b\u0430 \u043a\u043e\u043d\u0435\u0446\u043c\u0435\u0441\u044f\u0446\u0430 \u043a\u043e\u043d\u0435\u0446\u043c\u0438\u043d\u0443\u0442\u044b \u043a\u043e\u043d\u0435\u0446\u043d\u0435\u0434\u0435\u043b\u0438 \u043a\u043e\u043d\u0435\u0446\u0447\u0430\u0441\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f\u0431\u0430\u0437\u044b\u0434\u0430\u043d\u043d\u044b\u0445\u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0430\u0434\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u0438 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f\u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0430 \u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0434\u0430\u043d\u043d\u044b\u0435\u0444\u043e\u0440\u043c\u044b \u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0444\u0430\u0439\u043b \u043a\u0440\u0430\u0442\u043a\u043e\u0435\u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u043e\u0448\u0438\u0431\u043a\u0438 \u043b\u0435\u0432 \u043c\u0430\u043a\u0441 \u043c\u0435\u0441\u0442\u043d\u043e\u0435\u0432\u0440\u0435\u043c\u044f \u043c\u0435\u0441\u044f\u0446 \u043c\u0438\u043d \u043c\u0438\u043d\u0443\u0442\u0430 \u043c\u043e\u043d\u043e\u043f\u043e\u043b\u044c\u043d\u044b\u0439\u0440\u0435\u0436\u0438\u043c \u043d\u0430\u0439\u0442\u0438 \u043d\u0430\u0439\u0442\u0438\u043d\u0435\u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0435\u0441\u0438\u043c\u0432\u043e\u043b\u044bxml \u043d\u0430\u0439\u0442\u0438\u043e\u043a\u043d\u043e\u043f\u043e\u043d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0439\u0441\u0441\u044b\u043b\u043a\u0435 \u043d\u0430\u0439\u0442\u0438\u043f\u043e\u043c\u0435\u0447\u0435\u043d\u043d\u044b\u0435\u043d\u0430\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u043d\u0430\u0439\u0442\u0438\u043f\u043e\u0441\u0441\u044b\u043b\u043a\u0430\u043c \u043d\u0430\u0439\u0442\u0438\u0444\u0430\u0439\u043b\u044b \u043d\u0430\u0447\u0430\u043b\u043e\u0433\u043e\u0434\u0430 \u043d\u0430\u0447\u0430\u043b\u043e\u0434\u043d\u044f \u043d\u0430\u0447\u0430\u043b\u043e\u043a\u0432\u0430\u0440\u0442\u0430\u043b\u0430 \u043d\u0430\u0447\u0430\u043b\u043e\u043c\u0435\u0441\u044f\u0446\u0430 \u043d\u0430\u0447\u0430\u043b\u043e\u043c\u0438\u043d\u0443\u0442\u044b \u043d\u0430\u0447\u0430\u043b\u043e\u043d\u0435\u0434\u0435\u043b\u0438 \u043d\u0430\u0447\u0430\u043b\u043e\u0447\u0430\u0441\u0430 \u043d\u0430\u0447\u0430\u0442\u044c\u0437\u0430\u043f\u0440\u043e\u0441\u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043d\u0430\u0447\u0430\u0442\u044c\u0437\u0430\u043f\u0443\u0441\u043a\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u043d\u0430\u0447\u0430\u0442\u044c\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435\u0444\u0430\u0439\u043b\u0430 \u043d\u0430\u0447\u0430\u0442\u044c\u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u0435\u0444\u0430\u0439\u043b\u0430 \u043d\u0430\u0447\u0430\u0442\u044c\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435\u0432\u043d\u0435\u0448\u043d\u0435\u0439\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u043d\u0430\u0447\u0430\u0442\u044c\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435\u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f\u0440\u0430\u0431\u043e\u0442\u044b\u0441\u043a\u0440\u0438\u043f\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0435\u0439 \u043d\u0430\u0447\u0430\u0442\u044c\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435\u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f\u0440\u0430\u0431\u043e\u0442\u044b\u0441\u0444\u0430\u0439\u043b\u0430\u043c\u0438 \u043d\u0430\u0447\u0430\u0442\u044c\u043f\u043e\u0438\u0441\u043a\u0444\u0430\u0439\u043b\u043e\u0432 \u043d\u0430\u0447\u0430\u0442\u044c\u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435\u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0430\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445\u0444\u0430\u0439\u043b\u043e\u0432 \u043d\u0430\u0447\u0430\u0442\u044c\u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435\u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0430\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u043d\u0430\u0447\u0430\u0442\u044c\u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435\u0440\u0430\u0431\u043e\u0447\u0435\u0433\u043e\u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0430\u0434\u0430\u043d\u043d\u044b\u0445\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043d\u0430\u0447\u0430\u0442\u044c\u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435\u0444\u0430\u0439\u043b\u043e\u0432 \u043d\u0430\u0447\u0430\u0442\u044c\u043f\u043e\u043c\u0435\u0449\u0435\u043d\u0438\u0435\u0444\u0430\u0439\u043b\u0430 \u043d\u0430\u0447\u0430\u0442\u044c\u043f\u043e\u043c\u0435\u0449\u0435\u043d\u0438\u0435\u0444\u0430\u0439\u043b\u043e\u0432 \u043d\u0430\u0447\u0430\u0442\u044c\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435\u0434\u0432\u043e\u0438\u0447\u043d\u044b\u0445\u0434\u0430\u043d\u043d\u044b\u0445\u0438\u0437\u0444\u0430\u0439\u043b\u0430 \u043d\u0430\u0447\u0430\u0442\u044c\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435\u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0430 \u043d\u0430\u0447\u0430\u0442\u044c\u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u044e \u043d\u0430\u0447\u0430\u0442\u044c\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435\u0444\u0430\u0439\u043b\u043e\u0432 \u043d\u0430\u0447\u0430\u0442\u044c\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0443\u0432\u043d\u0435\u0448\u043d\u0435\u0439\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u043d\u0430\u0447\u0430\u0442\u044c\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0443\u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f\u0440\u0430\u0431\u043e\u0442\u044b\u0441\u043a\u0440\u0438\u043f\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0435\u0439 \u043d\u0430\u0447\u0430\u0442\u044c\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0443\u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f\u0440\u0430\u0431\u043e\u0442\u044b\u0441\u0444\u0430\u0439\u043b\u0430\u043c\u0438 \u043d\u0435\u0434\u0435\u043b\u044f\u0433\u043e\u0434\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u044c\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f\u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u043d\u043e\u043c\u0435\u0440\u0441\u0435\u0430\u043d\u0441\u0430\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0439\u0431\u0430\u0437\u044b \u043d\u043e\u043c\u0435\u0440\u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0439\u0431\u0430\u0437\u044b \u043d\u0440\u0435\u0433 \u043d\u0441\u0442\u0440 \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c\u043d\u0443\u043c\u0435\u0440\u0430\u0446\u0438\u044e\u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c\u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430\u043f\u0440\u0435\u0440\u044b\u0432\u0430\u043d\u0438\u044f\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0438\u0442\u044c\u0444\u0430\u0439\u043b\u044b \u043e\u043a\u0440 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435\u043e\u0448\u0438\u0431\u043a\u0438 \u043e\u043f\u043e\u0432\u0435\u0441\u0442\u0438\u0442\u044c \u043e\u043f\u043e\u0432\u0435\u0441\u0442\u0438\u0442\u044c\u043e\u0431\u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0438 \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0437\u0430\u043f\u0440\u043e\u0441\u0430\u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a\u043a\u043b\u0438\u0435\u043d\u0442\u0430\u043b\u0438\u0446\u0435\u043d\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u0436\u0438\u0434\u0430\u043d\u0438\u044f \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u043f\u043e\u0432\u0435\u0449\u0435\u043d\u0438\u044f \u043e\u0442\u043a\u0440\u044b\u0442\u044c\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043e\u0442\u043a\u0440\u044b\u0442\u044c\u0438\u043d\u0434\u0435\u043a\u0441\u0441\u043f\u0440\u0430\u0432\u043a\u0438 \u043e\u0442\u043a\u0440\u044b\u0442\u044c\u0441\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435\u0441\u043f\u0440\u0430\u0432\u043a\u0438 \u043e\u0442\u043a\u0440\u044b\u0442\u044c\u0441\u043f\u0440\u0430\u0432\u043a\u0443 \u043e\u0442\u043a\u0440\u044b\u0442\u044c\u0444\u043e\u0440\u043c\u0443 \u043e\u0442\u043a\u0440\u044b\u0442\u044c\u0444\u043e\u0440\u043c\u0443\u043c\u043e\u0434\u0430\u043b\u044c\u043d\u043e \u043e\u0442\u043c\u0435\u043d\u0438\u0442\u044c\u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u044e \u043e\u0447\u0438\u0441\u0442\u0438\u0442\u044c\u0436\u0443\u0440\u043d\u0430\u043b\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u043e\u0447\u0438\u0441\u0442\u0438\u0442\u044c\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043e\u0447\u0438\u0441\u0442\u0438\u0442\u044c\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b\u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043f\u0435\u0440\u0435\u0439\u0442\u0438\u043f\u043e\u043d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0439\u0441\u0441\u044b\u043b\u043a\u0435 \u043f\u0435\u0440\u0435\u043c\u0435\u0441\u0442\u0438\u0442\u044c\u0444\u0430\u0439\u043b \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0432\u043d\u0435\u0448\u043d\u044e\u044e\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0443 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0437\u0430\u043f\u0440\u043e\u0441\u0430\u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a\u043a\u043b\u0438\u0435\u043d\u0442\u0430\u043b\u0438\u0446\u0435\u043d\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u0436\u0438\u0434\u0430\u043d\u0438\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u043f\u043e\u0432\u0435\u0449\u0435\u043d\u0438\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435\u0440\u0430\u0431\u043e\u0442\u044b\u0441\u043a\u0440\u0438\u043f\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0435\u0439 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435\u0440\u0430\u0431\u043e\u0442\u044b\u0441\u0444\u0430\u0439\u043b\u0430\u043c\u0438 \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0435\u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u043e\u0448\u0438\u0431\u043a\u0438 \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c\u0432\u0432\u043e\u0434\u0434\u0430\u0442\u044b \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c\u0432\u0432\u043e\u0434\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c\u0432\u0432\u043e\u0434\u0441\u0442\u0440\u043e\u043a\u0438 \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c\u0432\u0432\u043e\u0434\u0447\u0438\u0441\u043b\u0430 \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c\u0432\u043e\u043f\u0440\u043e\u0441 \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e\u043e\u0431\u043e\u0448\u0438\u0431\u043a\u0435 \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c\u043d\u0430\u043a\u0430\u0440\u0442\u0435 \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c\u043e\u043f\u043e\u0432\u0435\u0449\u0435\u043d\u0438\u0435\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c\u043f\u0440\u0435\u0434\u0443\u043f\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u043d\u043e\u0435\u0438\u043c\u044f\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044ccom\u043e\u0431\u044a\u0435\u043a\u0442 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044cxml\u0442\u0438\u043f \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u0430\u0434\u0440\u0435\u0441\u043f\u043e\u043c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u044e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0443\u0441\u0435\u0430\u043d\u0441\u043e\u0432 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u0432\u0440\u0435\u043c\u044f\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f\u0441\u043f\u044f\u0449\u0435\u0433\u043e\u0441\u0435\u0430\u043d\u0441\u0430 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u0432\u0440\u0435\u043c\u044f\u0437\u0430\u0441\u044b\u043f\u0430\u043d\u0438\u044f\u043f\u0430\u0441\u0441\u0438\u0432\u043d\u043e\u0433\u043e\u0441\u0435\u0430\u043d\u0441\u0430 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u0432\u0440\u0435\u043c\u044f\u043e\u0436\u0438\u0434\u0430\u043d\u0438\u044f\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0438\u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u0434\u0430\u043d\u043d\u044b\u0435\u0432\u044b\u0431\u043e\u0440\u0430 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043a\u043b\u0438\u0435\u043d\u0442\u0430\u043b\u0438\u0446\u0435\u043d\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0435\u043a\u043e\u0434\u044b\u043b\u043e\u043a\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0435\u0447\u0430\u0441\u043e\u0432\u044b\u0435\u043f\u043e\u044f\u0441\u0430 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a\u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u043e\u0433\u043e\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a\u0441\u0438\u0441\u0442\u0435\u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043e\u0442\u0431\u043e\u0440\u0430\u0436\u0443\u0440\u043d\u0430\u043b\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u0438\u0437\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0433\u043e\u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u0438\u043c\u044f\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0433\u043e\u0444\u0430\u0439\u043b\u0430 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u0438\u043c\u044f\u043a\u043b\u0438\u0435\u043d\u0442\u0430\u043b\u0438\u0446\u0435\u043d\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e\u044d\u043a\u0440\u0430\u043d\u043e\u0432\u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u0436\u0443\u0440\u043d\u0430\u043b\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u0441\u043e\u0431\u044b\u0442\u0438\u044f\u0436\u0443\u0440\u043d\u0430\u043b\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u043a\u0440\u0430\u0442\u043a\u0438\u0439\u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u043c\u0430\u043a\u0435\u0442\u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u044f \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u043c\u0430\u0441\u043a\u0443\u0432\u0441\u0435\u0444\u0430\u0439\u043b\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u043c\u0430\u0441\u043a\u0443\u0432\u0441\u0435\u0444\u0430\u0439\u043b\u044b\u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u043c\u0430\u0441\u043a\u0443\u0432\u0441\u0435\u0444\u0430\u0439\u043b\u044b\u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u043c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u043f\u043e\u0430\u0434\u0440\u0435\u0441\u0443 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0443\u044e\u0434\u043b\u0438\u043d\u0443\u043f\u0430\u0440\u043e\u043b\u0435\u0439\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u043d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u043e\u043d\u043d\u0443\u044e\u0441\u0441\u044b\u043b\u043a\u0443 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u043d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u043e\u043d\u043d\u0443\u044e\u0441\u0441\u044b\u043b\u043a\u0443\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0439\u0431\u0430\u0437\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438\u0431\u0430\u0437\u044b\u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435\u043f\u0440\u0435\u0434\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0445\u0434\u0430\u043d\u043d\u044b\u0445\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0439\u0431\u0430\u0437\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u043e\u0431\u0449\u0438\u0439\u043c\u0430\u043a\u0435\u0442 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u043e\u0431\u0449\u0443\u044e\u0444\u043e\u0440\u043c\u0443 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u043e\u043a\u043d\u0430 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u043e\u043f\u0435\u0440\u0430\u0442\u0438\u0432\u043d\u0443\u044e\u043e\u0442\u043c\u0435\u0442\u043a\u0443\u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435\u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0433\u043e\u0440\u0435\u0436\u0438\u043c\u0430 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b\u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445\u043e\u043f\u0446\u0438\u0439\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u043f\u043e\u043b\u043d\u043e\u0435\u0438\u043c\u044f\u043f\u0440\u0435\u0434\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0433\u043e\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f\u043d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0445\u0441\u0441\u044b\u043b\u043e\u043a \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0443\u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u0438\u043f\u0430\u0440\u043e\u043b\u0435\u0439\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u044c\u043f\u0443\u0442\u0438 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u044c\u043f\u0443\u0442\u0438\u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u044c\u043f\u0443\u0442\u0438\u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u0441\u0435\u0430\u043d\u0441\u044b\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0439\u0431\u0430\u0437\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c\u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u043e\u0433\u043e\u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0439\u0431\u0430\u0437\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435\u043e\u0431\u044a\u0435\u043a\u0442\u0430\u0438\u0444\u043e\u0440\u043c\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u0441\u043e\u0441\u0442\u0430\u0432\u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0433\u043e\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430odata \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0443\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f\u0431\u0430\u0437\u044b\u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u0442\u0435\u043a\u0443\u0449\u0438\u0439\u0441\u0435\u0430\u043d\u0441\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0439\u0431\u0430\u0437\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u0444\u0430\u0439\u043b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u0444\u0430\u0439\u043b\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u0444\u043e\u0440\u043c\u0443 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u0443\u044e\u043e\u043f\u0446\u0438\u044e \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u0443\u044e\u043e\u043f\u0446\u0438\u044e\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u0447\u0430\u0441\u043e\u0432\u043e\u0439\u043f\u043e\u044f\u0441\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0439\u0431\u0430\u0437\u044b \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438\u043e\u0441 \u043f\u043e\u043c\u0435\u0441\u0442\u0438\u0442\u044c\u0432\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0435\u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435 \u043f\u043e\u043c\u0435\u0441\u0442\u0438\u0442\u044c\u0444\u0430\u0439\u043b \u043f\u043e\u043c\u0435\u0441\u0442\u0438\u0442\u044c\u0444\u0430\u0439\u043b\u044b \u043f\u0440\u0430\u0432 \u043f\u0440\u0430\u0432\u043e\u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043f\u0440\u0435\u0434\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0435\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u043a\u043e\u0434\u0430\u043b\u043e\u043a\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u043f\u0435\u0440\u0438\u043e\u0434\u0430 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u043f\u0440\u0430\u0432\u0430 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u0441\u043e\u0431\u044b\u0442\u0438\u044f\u0436\u0443\u0440\u043d\u0430\u043b\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u0447\u0430\u0441\u043e\u0432\u043e\u0433\u043e\u043f\u043e\u044f\u0441\u0430 \u043f\u0440\u0435\u0434\u0443\u043f\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u0435 \u043f\u0440\u0435\u043a\u0440\u0430\u0442\u0438\u0442\u044c\u0440\u0430\u0431\u043e\u0442\u0443\u0441\u0438\u0441\u0442\u0435\u043c\u044b \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439\u0440\u0435\u0436\u0438\u043c \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c\u0432\u044b\u0437\u043e\u0432 \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u0442\u044cjson \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u0442\u044cxml \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u0442\u044c\u0434\u0430\u0442\u0443json \u043f\u0443\u0441\u0442\u0430\u044f\u0441\u0442\u0440\u043e\u043a\u0430 \u0440\u0430\u0431\u043e\u0447\u0438\u0439\u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0434\u0430\u043d\u043d\u044b\u0445\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0440\u0430\u0437\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0434\u0430\u043d\u043d\u044b\u0435\u0434\u043b\u044f\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u044c\u0444\u0430\u0439\u043b \u0440\u0430\u0437\u043e\u0440\u0432\u0430\u0442\u044c\u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435\u0441\u0432\u043d\u0435\u0448\u043d\u0438\u043c\u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u043e\u043c\u0434\u0430\u043d\u043d\u044b\u0445 \u0440\u0430\u0441\u043a\u043e\u0434\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u0442\u0440\u043e\u043a\u0443 \u0440\u043e\u043b\u044c\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0441\u0435\u043a\u0443\u043d\u0434\u0430 \u0441\u0438\u0433\u043d\u0430\u043b \u0441\u0438\u043c\u0432\u043e\u043b \u0441\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0436\u0443\u0440\u043d\u0430\u043b\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0441\u043c\u0435\u0449\u0435\u043d\u0438\u0435\u043b\u0435\u0442\u043d\u0435\u0433\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0441\u043c\u0435\u0449\u0435\u043d\u0438\u0435\u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0433\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0441\u043e\u0435\u0434\u0438\u043d\u0438\u0442\u044c\u0431\u0443\u0444\u0435\u0440\u044b\u0434\u0432\u043e\u0438\u0447\u043d\u044b\u0445\u0434\u0430\u043d\u043d\u044b\u0445 \u0441\u043e\u0437\u0434\u0430\u0442\u044c\u043a\u0430\u0442\u0430\u043b\u043e\u0433 \u0441\u043e\u0437\u0434\u0430\u0442\u044c\u0444\u0430\u0431\u0440\u0438\u043a\u0443xdto \u0441\u043e\u043a\u0440\u043b \u0441\u043e\u043a\u0440\u043b\u043f \u0441\u043e\u043a\u0440\u043f \u0441\u043e\u043e\u0431\u0449\u0438\u0442\u044c \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0441\u0440\u0435\u0434 \u0441\u0442\u0440\u0434\u043b\u0438\u043d\u0430 \u0441\u0442\u0440\u0437\u0430\u043a\u0430\u043d\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044f\u043d\u0430 \u0441\u0442\u0440\u0437\u0430\u043c\u0435\u043d\u0438\u0442\u044c \u0441\u0442\u0440\u043d\u0430\u0439\u0442\u0438 \u0441\u0442\u0440\u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f\u0441 \u0441\u0442\u0440\u043e\u043a\u0430 \u0441\u0442\u0440\u043e\u043a\u0430\u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0439\u0431\u0430\u0437\u044b \u0441\u0442\u0440\u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c\u0441\u0442\u0440\u043e\u043a\u0443 \u0441\u0442\u0440\u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u044c \u0441\u0442\u0440\u0441\u043e\u0435\u0434\u0438\u043d\u0438\u0442\u044c \u0441\u0442\u0440\u0441\u0440\u0430\u0432\u043d\u0438\u0442\u044c \u0441\u0442\u0440\u0447\u0438\u0441\u043b\u043e\u0432\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0439 \u0441\u0442\u0440\u0447\u0438\u0441\u043b\u043e\u0441\u0442\u0440\u043e\u043a \u0441\u0442\u0440\u0448\u0430\u0431\u043b\u043e\u043d \u0442\u0435\u043a\u0443\u0449\u0430\u044f\u0434\u0430\u0442\u0430 \u0442\u0435\u043a\u0443\u0449\u0430\u044f\u0434\u0430\u0442\u0430\u0441\u0435\u0430\u043d\u0441\u0430 \u0442\u0435\u043a\u0443\u0449\u0430\u044f\u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0430\u043b\u044c\u043d\u0430\u044f\u0434\u0430\u0442\u0430 \u0442\u0435\u043a\u0443\u0449\u0430\u044f\u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0430\u043b\u044c\u043d\u0430\u044f\u0434\u0430\u0442\u0430\u0432\u043c\u0438\u043b\u043b\u0438\u0441\u0435\u043a\u0443\u043d\u0434\u0430\u0445 \u0442\u0435\u043a\u0443\u0449\u0438\u0439\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430\u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u043e\u0433\u043e\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0442\u0435\u043a\u0443\u0449\u0438\u0439\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0433\u043e\u0448\u0440\u0438\u0444\u0442\u0430\u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u043e\u0433\u043e\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0442\u0435\u043a\u0443\u0449\u0438\u0439\u043a\u043e\u0434\u043b\u043e\u043a\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0442\u0435\u043a\u0443\u0449\u0438\u0439\u0440\u0435\u0436\u0438\u043c\u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u0442\u0435\u043a\u0443\u0449\u0438\u0439\u044f\u0437\u044b\u043a \u0442\u0435\u043a\u0443\u0449\u0438\u0439\u044f\u0437\u044b\u043a\u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0442\u0438\u043f \u0442\u0438\u043f\u0437\u043d\u0447 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u044f\u0430\u043a\u0442\u0438\u0432\u043d\u0430 \u0442\u0440\u0435\u0433 \u0443\u0434\u0430\u043b\u0438\u0442\u044c\u0434\u0430\u043d\u043d\u044b\u0435\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0439\u0431\u0430\u0437\u044b \u0443\u0434\u0430\u043b\u0438\u0442\u044c\u0438\u0437\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0433\u043e\u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430 \u0443\u0434\u0430\u043b\u0438\u0442\u044c\u043e\u0431\u044a\u0435\u043a\u0442\u044b \u0443\u0434\u0430\u043b\u0438\u0442\u044c\u0444\u0430\u0439\u043b\u044b \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0430\u043b\u044c\u043d\u043e\u0435\u0432\u0440\u0435\u043c\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c\u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u044b\u0439\u0440\u0435\u0436\u0438\u043c \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c\u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u044b\u0439\u0440\u0435\u0436\u0438\u043c\u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u044f\u0434\u0430\u043d\u043d\u044b\u0445 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0443\u0441\u0435\u0430\u043d\u0441\u043e\u0432 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c\u0432\u043d\u0435\u0448\u043d\u044e\u044e\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0443 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c\u0432\u0440\u0435\u043c\u044f\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f\u0441\u043f\u044f\u0449\u0435\u0433\u043e\u0441\u0435\u0430\u043d\u0441\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c\u0432\u0440\u0435\u043c\u044f\u0437\u0430\u0441\u044b\u043f\u0430\u043d\u0438\u044f\u043f\u0430\u0441\u0441\u0438\u0432\u043d\u043e\u0433\u043e\u0441\u0435\u0430\u043d\u0441\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c\u0432\u0440\u0435\u043c\u044f\u043e\u0436\u0438\u0434\u0430\u043d\u0438\u044f\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0438\u0434\u0430\u043d\u043d\u044b\u0445 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c\u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a\u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u043e\u0433\u043e\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c\u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a\u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u0436\u0443\u0440\u043d\u0430\u043b\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u0441\u043e\u0431\u044b\u0442\u0438\u044f\u0436\u0443\u0440\u043d\u0430\u043b\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c\u043a\u0440\u0430\u0442\u043a\u0438\u0439\u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c\u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0443\u044e\u0434\u043b\u0438\u043d\u0443\u043f\u0430\u0440\u043e\u043b\u0435\u0439\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c\u043c\u043e\u043d\u043e\u043f\u043e\u043b\u044c\u043d\u044b\u0439\u0440\u0435\u0436\u0438\u043c \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438\u043a\u043b\u0438\u0435\u043d\u0442\u0430\u043b\u0438\u0446\u0435\u043d\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c\u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435\u043f\u0440\u0435\u0434\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0445\u0434\u0430\u043d\u043d\u044b\u0445\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0439\u0431\u0430\u0437\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c\u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435\u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0433\u043e\u0440\u0435\u0436\u0438\u043c\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b\u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445\u043e\u043f\u0446\u0438\u0439\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c\u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439\u0440\u0435\u0436\u0438\u043c \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0443\u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u0438\u043f\u0430\u0440\u043e\u043b\u0435\u0439\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c\u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435\u0440\u0430\u0431\u043e\u0442\u044b\u0441\u043a\u0440\u0438\u043f\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0435\u0439 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c\u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435\u0440\u0430\u0431\u043e\u0442\u044b\u0441\u0444\u0430\u0439\u043b\u0430\u043c\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c\u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435\u0441\u0432\u043d\u0435\u0448\u043d\u0438\u043c\u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u043e\u043c\u0434\u0430\u043d\u043d\u044b\u0445 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c\u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435\u043e\u0431\u044a\u0435\u043a\u0442\u0430\u0438\u0444\u043e\u0440\u043c\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c\u0441\u043e\u0441\u0442\u0430\u0432\u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0433\u043e\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430odata \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c\u0447\u0430\u0441\u043e\u0432\u043e\u0439\u043f\u043e\u044f\u0441\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0439\u0431\u0430\u0437\u044b \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c\u0447\u0430\u0441\u043e\u0432\u043e\u0439\u043f\u043e\u044f\u0441\u0441\u0435\u0430\u043d\u0441\u0430 \u0444\u043e\u0440\u043c\u0430\u0442 \u0446\u0435\u043b \u0447\u0430\u0441 \u0447\u0430\u0441\u043e\u0432\u043e\u0439\u043f\u043e\u044f\u0441 \u0447\u0430\u0441\u043e\u0432\u043e\u0439\u043f\u043e\u044f\u0441\u0441\u0435\u0430\u043d\u0441\u0430 \u0447\u0438\u0441\u043b\u043e \u0447\u0438\u0441\u043b\u043e\u043f\u0440\u043e\u043f\u0438\u0441\u044c\u044e \u044d\u0442\u043e\u0430\u0434\u0440\u0435\u0441\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0433\u043e\u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430 ws\u0441\u0441\u044b\u043b\u043a\u0438 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430\u043a\u0430\u0440\u0442\u0438\u043d\u043e\u043a \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430\u043c\u0430\u043a\u0435\u0442\u043e\u0432\u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u044f\u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u043a\u0438\u0434\u0430\u043d\u043d\u044b\u0445 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430\u0441\u0442\u0438\u043b\u0435\u0439 \u0431\u0438\u0437\u043d\u0435\u0441\u043f\u0440\u043e\u0446\u0435\u0441\u0441\u044b \u0432\u043d\u0435\u0448\u043d\u0438\u0435\u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0438\u0434\u0430\u043d\u043d\u044b\u0445 \u0432\u043d\u0435\u0448\u043d\u0438\u0435\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0432\u043d\u0435\u0448\u043d\u0438\u0435\u043e\u0442\u0447\u0435\u0442\u044b \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0435\u043f\u043e\u043a\u0443\u043f\u043a\u0438 \u0433\u043b\u0430\u0432\u043d\u044b\u0439\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0433\u043b\u0430\u0432\u043d\u044b\u0439\u0441\u0442\u0438\u043b\u044c \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b \u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u0435\u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f \u0436\u0443\u0440\u043d\u0430\u043b\u044b\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0437\u0430\u0434\u0430\u0447\u0438 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f\u043e\u0431\u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u0440\u0430\u0431\u043e\u0447\u0435\u0439\u0434\u0430\u0442\u044b \u0438\u0441\u0442\u043e\u0440\u0438\u044f\u0440\u0430\u0431\u043e\u0442\u044b\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u044b \u043a\u0440\u0438\u0442\u0435\u0440\u0438\u0438\u043e\u0442\u0431\u043e\u0440\u0430 \u043c\u0435\u0442\u0430\u0434\u0430\u043d\u043d\u044b\u0435 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u0440\u0435\u043a\u043b\u0430\u043c\u044b \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0430\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u0445\u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0439 \u043e\u0442\u0447\u0435\u0442\u044b \u043f\u0430\u043d\u0435\u043b\u044c\u0437\u0430\u0434\u0430\u0447\u043e\u0441 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b\u0441\u0435\u0430\u043d\u0441\u0430 \u043f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f \u043f\u043b\u0430\u043d\u044b\u0432\u0438\u0434\u043e\u0432\u0440\u0430\u0441\u0447\u0435\u0442\u0430 \u043f\u043b\u0430\u043d\u044b\u0432\u0438\u0434\u043e\u0432\u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a \u043f\u043b\u0430\u043d\u044b\u043e\u0431\u043c\u0435\u043d\u0430 \u043f\u043b\u0430\u043d\u044b\u0441\u0447\u0435\u0442\u043e\u0432 \u043f\u043e\u043b\u043d\u043e\u0442\u0435\u043a\u0441\u0442\u043e\u0432\u044b\u0439\u043f\u043e\u0438\u0441\u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0439\u0431\u0430\u0437\u044b \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430\u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0445\u043f\u043e\u043a\u0443\u043f\u043e\u043a \u0440\u0430\u0431\u043e\u0447\u0430\u044f\u0434\u0430\u0442\u0430 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u044b\u0431\u0443\u0445\u0433\u0430\u043b\u0442\u0435\u0440\u0438\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u044b\u043d\u0430\u043a\u043e\u043f\u043b\u0435\u043d\u0438\u044f \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u044b\u0440\u0430\u0441\u0447\u0435\u0442\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u044b\u0441\u0432\u0435\u0434\u0435\u043d\u0438\u0439 \u0440\u0435\u0433\u043b\u0430\u043c\u0435\u043d\u0442\u043d\u044b\u0435\u0437\u0430\u0434\u0430\u043d\u0438\u044f \u0441\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u0430\u0442\u043e\u0440xdto \u0441\u043f\u0440\u0430\u0432\u043e\u0447\u043d\u0438\u043a\u0438 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430\u0433\u0435\u043e\u043f\u043e\u0437\u0438\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430\u043a\u0440\u0438\u043f\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0438 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430\u043c\u0443\u043b\u044c\u0442\u0438\u043c\u0435\u0434\u0438\u0430 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430\u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f\u0440\u0435\u043a\u043b\u0430\u043c\u044b \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430\u043f\u043e\u0447\u0442\u044b \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430\u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0438\u0438 \u0444\u0430\u0431\u0440\u0438\u043a\u0430xdto \u0444\u0430\u0439\u043b\u043e\u0432\u044b\u0435\u043f\u043e\u0442\u043e\u043a\u0438 \u0444\u043e\u043d\u043e\u0432\u044b\u0435\u0437\u0430\u0434\u0430\u043d\u0438\u044f \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430\u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u043e\u0432\u043e\u0442\u0447\u0435\u0442\u043e\u0432 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435\u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a\u0434\u0430\u043d\u043d\u044b\u0445\u0444\u043e\u0440\u043c \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435\u043e\u0431\u0449\u0438\u0445\u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0445\u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a\u0434\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u0438\u0445\u0441\u043f\u0438\u0441\u043a\u043e\u0432 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0445\u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a\u043e\u0442\u0447\u0435\u0442\u043e\u0432 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435\u0441\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0445\u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a ",
class:"web\u0446\u0432\u0435\u0442\u0430 windows\u0446\u0432\u0435\u0442\u0430 windows\u0448\u0440\u0438\u0444\u0442\u044b \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430\u043a\u0430\u0440\u0442\u0438\u043d\u043e\u043a \u0440\u0430\u043c\u043a\u0438\u0441\u0442\u0438\u043b\u044f \u0441\u0438\u043c\u0432\u043e\u043b\u044b \u0446\u0432\u0435\u0442\u0430\u0441\u0442\u0438\u043b\u044f \u0448\u0440\u0438\u0444\u0442\u044b\u0441\u0442\u0438\u043b\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435\u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435\u0434\u0430\u043d\u043d\u044b\u0445\u0444\u043e\u0440\u043c\u044b\u0432\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u0445 \u0430\u0432\u0442\u043e\u043d\u0443\u043c\u0435\u0440\u0430\u0446\u0438\u044f\u0432\u0444\u043e\u0440\u043c\u0435 \u0430\u0432\u0442\u043e\u0440\u0430\u0437\u0434\u0432\u0438\u0436\u0435\u043d\u0438\u0435\u0441\u0435\u0440\u0438\u0439 \u0430\u043d\u0438\u043c\u0430\u0446\u0438\u044f\u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u044b \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u0432\u044b\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u043d\u0438\u044f\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432\u0438\u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u043e\u0432 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f\u0432\u044b\u0441\u043e\u0442\u043e\u0439\u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u0430\u044f\u043f\u0440\u043e\u043a\u0440\u0443\u0442\u043a\u0430\u0444\u043e\u0440\u043c\u044b \u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u043e\u0435\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u043e\u0435\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0432\u0438\u0434\u0433\u0440\u0443\u043f\u043f\u044b\u0444\u043e\u0440\u043c\u044b \u0432\u0438\u0434\u0434\u0435\u043a\u043e\u0440\u0430\u0446\u0438\u0438\u0444\u043e\u0440\u043c\u044b \u0432\u0438\u0434\u0434\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u0444\u043e\u0440\u043c\u044b \u0432\u0438\u0434\u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f\u0434\u0430\u043d\u043d\u044b\u0445 \u0432\u0438\u0434\u043a\u043d\u043e\u043f\u043a\u0438\u0444\u043e\u0440\u043c\u044b \u0432\u0438\u0434\u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0430\u0442\u0435\u043b\u044f \u0432\u0438\u0434\u043f\u043e\u0434\u043f\u0438\u0441\u0435\u0439\u043a\u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u0435 \u0432\u0438\u0434\u043f\u043e\u043b\u044f\u0444\u043e\u0440\u043c\u044b \u0432\u0438\u0434\u0444\u043b\u0430\u0436\u043a\u0430 \u0432\u043b\u0438\u044f\u043d\u0438\u0435\u0440\u0430\u0437\u043c\u0435\u0440\u0430\u043d\u0430\u043f\u0443\u0437\u044b\u0440\u0435\u043a\u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u044b \u0433\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u043e\u0435\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0433\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u043e\u0435\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u043a\u0430\u043a\u043e\u043b\u043e\u043d\u043e\u043a \u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u043a\u0430\u043f\u043e\u0434\u0447\u0438\u043d\u0435\u043d\u043d\u044b\u0445\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432\u0444\u043e\u0440\u043c\u044b \u0433\u0440\u0443\u043f\u043f\u044b\u0438\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435\u043f\u0435\u0440\u0435\u0442\u0430\u0441\u043a\u0438\u0432\u0430\u043d\u0438\u044f \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439\u0440\u0435\u0436\u0438\u043c\u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0435\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f\u043f\u0435\u0440\u0435\u0442\u0430\u0441\u043a\u0438\u0432\u0430\u043d\u0438\u044f \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u043c\u0435\u0436\u0434\u0443\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u043c\u0438\u0444\u043e\u0440\u043c\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u0432\u044b\u0432\u043e\u0434\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043f\u043e\u043b\u043e\u0441\u044b\u043f\u0440\u043e\u043a\u0440\u0443\u0442\u043a\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u043e\u0435\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u0442\u043e\u0447\u043a\u0438\u0431\u0438\u0440\u0436\u0435\u0432\u043e\u0439\u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u044b \u0438\u0441\u0442\u043e\u0440\u0438\u044f\u0432\u044b\u0431\u043e\u0440\u0430\u043f\u0440\u0438\u0432\u0432\u043e\u0434\u0435 \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439\u043e\u0441\u0438\u0442\u043e\u0447\u0435\u043a\u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u044b \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u0440\u0430\u0437\u043c\u0435\u0440\u0430\u043f\u0443\u0437\u044b\u0440\u044c\u043a\u0430\u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u044b \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f\u0433\u0440\u0443\u043f\u043f\u044b\u043a\u043e\u043c\u0430\u043d\u0434 \u043c\u0430\u043a\u0441\u0438\u043c\u0443\u043c\u0441\u0435\u0440\u0438\u0439 \u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e\u0435\u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u0434\u0435\u0440\u0435\u0432\u0430 \u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e\u0435\u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u0441\u043f\u0438\u0441\u043a\u0430 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435\u0442\u0435\u043a\u0441\u0442\u0430\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043e\u0440\u0438\u0435\u043d\u0442\u0430\u0446\u0438\u044f\u0434\u0435\u043d\u0434\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b \u043e\u0440\u0438\u0435\u043d\u0442\u0430\u0446\u0438\u044f\u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u044b \u043e\u0440\u0438\u0435\u043d\u0442\u0430\u0446\u0438\u044f\u043c\u0435\u0442\u043e\u043a\u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u044b \u043e\u0440\u0438\u0435\u043d\u0442\u0430\u0446\u0438\u044f\u043c\u0435\u0442\u043e\u043a\u0441\u0432\u043e\u0434\u043d\u043e\u0439\u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u044b \u043e\u0440\u0438\u0435\u043d\u0442\u0430\u0446\u0438\u044f\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u0444\u043e\u0440\u043c\u044b \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u0432\u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u0435 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u0432\u043b\u0435\u0433\u0435\u043d\u0434\u0435\u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u044b \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u0433\u0440\u0443\u043f\u043f\u044b\u043a\u043d\u043e\u043f\u043e\u043a \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0430\u0448\u043a\u0430\u043b\u044b\u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u044b \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439\u0441\u0432\u043e\u0434\u043d\u043e\u0439\u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u044b \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u0438\u0437\u043c\u0435\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439\u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u044b \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u0430\u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u044b\u0433\u0430\u043d\u0442\u0430 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u043a\u043d\u043e\u043f\u043a\u0438 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u043a\u043d\u043e\u043f\u043a\u0438\u0432\u044b\u0431\u043e\u0440\u0430 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u043e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u0439\u0444\u043e\u0440\u043c\u044b \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u043e\u0431\u044b\u0447\u043d\u043e\u0439\u0433\u0440\u0443\u043f\u043f\u044b \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u043e\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0445\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439\u043f\u0443\u0437\u044b\u0440\u044c\u043a\u043e\u0432\u043e\u0439\u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u044b \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u043f\u0430\u043d\u0435\u043b\u0438\u043f\u043e\u0438\u0441\u043a\u0430 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u043f\u043e\u0434\u0441\u043a\u0430\u0437\u043a\u0438 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u043f\u0440\u0435\u0434\u0443\u043f\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u044f\u043f\u0440\u0438\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0438 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u0440\u0430\u0437\u043c\u0435\u0442\u043a\u0438\u043f\u043e\u043b\u043e\u0441\u044b\u0440\u0435\u0433\u0443\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0444\u043e\u0440\u043c\u044b \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u0442\u0430\u0431\u043b\u0438\u0446\u044b \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u0442\u0435\u043a\u0441\u0442\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u044b\u0433\u0430\u043d\u0442\u0430 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f\u043e\u0431\u044b\u0447\u043d\u043e\u0439\u0433\u0440\u0443\u043f\u043f\u044b \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u0444\u0438\u0433\u0443\u0440\u044b\u043a\u043d\u043e\u043f\u043a\u0438 \u043f\u0430\u043b\u0438\u0442\u0440\u0430\u0446\u0432\u0435\u0442\u043e\u0432\u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u044b \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435\u043e\u0431\u044b\u0447\u043d\u043e\u0439\u0433\u0440\u0443\u043f\u043f\u044b \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430\u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0430\u0434\u0435\u043d\u0434\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430\u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0430\u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u044b\u0433\u0430\u043d\u0442\u0430 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430\u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0430\u0441\u0432\u043e\u0434\u043d\u043e\u0439\u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u044b \u043f\u043e\u0438\u0441\u043a\u0432\u0442\u0430\u0431\u043b\u0438\u0446\u0435\u043f\u0440\u0438\u0432\u0432\u043e\u0434\u0435 \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0430\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u0444\u043e\u0440\u043c\u044b \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438\u043a\u043d\u043e\u043f\u043a\u0438\u0444\u043e\u0440\u043c\u044b \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u043e\u0439\u0441\u0445\u0435\u043c\u044b \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439\u043f\u0430\u043d\u0435\u043b\u0438\u0444\u043e\u0440\u043c\u044b \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439\u043f\u0430\u043d\u0435\u043b\u0438\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u0444\u043e\u0440\u043c\u044b \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u043e\u043f\u043e\u0440\u043d\u043e\u0439\u0442\u043e\u0447\u043a\u0438\u043e\u0442\u0440\u0438\u0441\u043e\u0432\u043a\u0438 \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u043f\u043e\u0434\u043f\u0438\u0441\u0435\u0439\u043a\u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u0435 \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u043f\u043e\u0434\u043f\u0438\u0441\u0435\u0439\u0448\u043a\u0430\u043b\u044b\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439\u0438\u0437\u043c\u0435\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439\u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u044b \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f\u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430 \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u0441\u0442\u0440\u043e\u043a\u0438\u043f\u043e\u0438\u0441\u043a\u0430 \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u0442\u0435\u043a\u0441\u0442\u0430\u0441\u043e\u0435\u0434\u0438\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439\u043b\u0438\u043d\u0438\u0438 \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f\u043f\u043e\u0438\u0441\u043a\u043e\u043c \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u0448\u043a\u0430\u043b\u044b\u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u043f\u043e\u0440\u044f\u0434\u043e\u043a\u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f\u0442\u043e\u0447\u0435\u043a\u0433\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u043e\u0439\u0433\u0438\u0441\u0442\u043e\u0433\u0440\u0430\u043c\u043c\u044b \u043f\u043e\u0440\u044f\u0434\u043e\u043a\u0441\u0435\u0440\u0438\u0439\u0432\u043b\u0435\u0433\u0435\u043d\u0434\u0435\u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u044b \u0440\u0430\u0437\u043c\u0435\u0440\u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438 \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0430\u0448\u043a\u0430\u043b\u044b\u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u044b \u0440\u0430\u0441\u0442\u044f\u0433\u0438\u0432\u0430\u043d\u0438\u0435\u043f\u043e\u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u0438\u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u044b\u0433\u0430\u043d\u0442\u0430 \u0440\u0435\u0436\u0438\u043c\u0430\u0432\u0442\u043e\u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f\u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u0440\u0435\u0436\u0438\u043c\u0432\u0432\u043e\u0434\u0430\u0441\u0442\u0440\u043e\u043a\u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0440\u0435\u0436\u0438\u043c\u0432\u044b\u0431\u043e\u0440\u0430\u043d\u0435\u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u043e\u0433\u043e \u0440\u0435\u0436\u0438\u043c\u0432\u044b\u0434\u0435\u043b\u0435\u043d\u0438\u044f\u0434\u0430\u0442\u044b \u0440\u0435\u0436\u0438\u043c\u0432\u044b\u0434\u0435\u043b\u0435\u043d\u0438\u044f\u0441\u0442\u0440\u043e\u043a\u0438\u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0440\u0435\u0436\u0438\u043c\u0432\u044b\u0434\u0435\u043b\u0435\u043d\u0438\u044f\u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0440\u0435\u0436\u0438\u043c\u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f\u0440\u0430\u0437\u043c\u0435\u0440\u0430 \u0440\u0435\u0436\u0438\u043c\u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f\u0441\u0432\u044f\u0437\u0430\u043d\u043d\u043e\u0433\u043e\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0440\u0435\u0436\u0438\u043c\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f\u0434\u0438\u0430\u043b\u043e\u0433\u0430\u043f\u0435\u0447\u0430\u0442\u0438 \u0440\u0435\u0436\u0438\u043c\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0440\u0435\u0436\u0438\u043c\u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f\u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430 \u0440\u0435\u0436\u0438\u043c\u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0433\u043e\u043e\u043a\u043d\u0430\u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u043e\u0433\u043e\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0440\u0435\u0436\u0438\u043c\u043e\u0442\u043a\u0440\u044b\u0442\u0438\u044f\u043e\u043a\u043d\u0430\u0444\u043e\u0440\u043c\u044b \u0440\u0435\u0436\u0438\u043c\u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f\u0432\u044b\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0440\u0435\u0436\u0438\u043c\u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f\u0433\u0435\u043e\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u043e\u0439\u0441\u0445\u0435\u043c\u044b \u0440\u0435\u0436\u0438\u043c\u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439\u0441\u0435\u0440\u0438\u0438 \u0440\u0435\u0436\u0438\u043c\u043e\u0442\u0440\u0438\u0441\u043e\u0432\u043a\u0438\u0441\u0435\u0442\u043a\u0438\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u043e\u0439\u0441\u0445\u0435\u043c\u044b \u0440\u0435\u0436\u0438\u043c\u043f\u043e\u043b\u0443\u043f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u043e\u0441\u0442\u0438\u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u044b \u0440\u0435\u0436\u0438\u043c\u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432\u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u044b \u0440\u0435\u0436\u0438\u043c\u0440\u0430\u0437\u043c\u0435\u0449\u0435\u043d\u0438\u044f\u043d\u0430\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0440\u0435\u0436\u0438\u043c\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f\u043a\u043e\u043b\u043e\u043d\u043a\u0438 \u0440\u0435\u0436\u0438\u043c\u0441\u0433\u043b\u0430\u0436\u0438\u0432\u0430\u043d\u0438\u044f\u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u044b \u0440\u0435\u0436\u0438\u043c\u0441\u0433\u043b\u0430\u0436\u0438\u0432\u0430\u043d\u0438\u044f\u0438\u043d\u0434\u0438\u043a\u0430\u0442\u043e\u0440\u0430 \u0440\u0435\u0436\u0438\u043c\u0441\u043f\u0438\u0441\u043a\u0430\u0437\u0430\u0434\u0430\u0447 \u0441\u043a\u0432\u043e\u0437\u043d\u043e\u0435\u0432\u044b\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u043d\u0438\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435\u0434\u0430\u043d\u043d\u044b\u0445\u0444\u043e\u0440\u043c\u044b\u0432\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u0445 \u0441\u043f\u043e\u0441\u043e\u0431\u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f\u0442\u0435\u043a\u0441\u0442\u0430\u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0430\u0448\u043a\u0430\u043b\u044b\u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u044b \u0441\u043f\u043e\u0441\u043e\u0431\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f\u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0432\u0430\u044e\u0449\u0435\u0433\u043e\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u044b \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u0430\u044f\u0433\u0440\u0443\u043f\u043f\u0430\u043a\u043e\u043c\u0430\u043d\u0434 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0435\u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u0435 \u0441\u0442\u0430\u0442\u0443\u0441\u043e\u043f\u043e\u0432\u0435\u0449\u0435\u043d\u0438\u044f\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0441\u0442\u0438\u043b\u044c\u0441\u0442\u0440\u0435\u043b\u043a\u0438 \u0442\u0438\u043f\u0430\u043f\u043f\u0440\u043e\u043a\u0441\u0438\u043c\u0430\u0446\u0438\u0438\u043b\u0438\u043d\u0438\u0438\u0442\u0440\u0435\u043d\u0434\u0430\u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u044b \u0442\u0438\u043f\u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u044b \u0442\u0438\u043f\u0435\u0434\u0438\u043d\u0438\u0446\u044b\u0448\u043a\u0430\u043b\u044b\u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0442\u0438\u043f\u0438\u043c\u043f\u043e\u0440\u0442\u0430\u0441\u0435\u0440\u0438\u0439\u0441\u043b\u043e\u044f\u0433\u0435\u043e\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u043e\u0439\u0441\u0445\u0435\u043c\u044b \u0442\u0438\u043f\u043b\u0438\u043d\u0438\u0438\u0433\u0435\u043e\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u043e\u0439\u0441\u0445\u0435\u043c\u044b \u0442\u0438\u043f\u043b\u0438\u043d\u0438\u0438\u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u044b \u0442\u0438\u043f\u043c\u0430\u0440\u043a\u0435\u0440\u0430\u0433\u0435\u043e\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u043e\u0439\u0441\u0445\u0435\u043c\u044b \u0442\u0438\u043f\u043c\u0430\u0440\u043a\u0435\u0440\u0430\u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u044b \u0442\u0438\u043f\u043e\u0431\u043b\u0430\u0441\u0442\u0438\u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u044f \u0442\u0438\u043f\u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438\u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0430\u0434\u0430\u043d\u043d\u044b\u0445\u0433\u0435\u043e\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u043e\u0439\u0441\u0445\u0435\u043c\u044b \u0442\u0438\u043f\u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f\u0441\u0435\u0440\u0438\u0438\u0441\u043b\u043e\u044f\u0433\u0435\u043e\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u043e\u0439\u0441\u0445\u0435\u043c\u044b \u0442\u0438\u043f\u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f\u0442\u043e\u0447\u0435\u0447\u043d\u043e\u0433\u043e\u043e\u0431\u044a\u0435\u043a\u0442\u0430\u0433\u0435\u043e\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u043e\u0439\u0441\u0445\u0435\u043c\u044b \u0442\u0438\u043f\u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f\u0448\u043a\u0430\u043b\u044b\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u043b\u0435\u0433\u0435\u043d\u0434\u044b\u0433\u0435\u043e\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u043e\u0439\u0441\u0445\u0435\u043c\u044b \u0442\u0438\u043f\u043f\u043e\u0438\u0441\u043a\u0430\u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432\u0433\u0435\u043e\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u043e\u0439\u0441\u0445\u0435\u043c\u044b \u0442\u0438\u043f\u043f\u0440\u043e\u0435\u043a\u0446\u0438\u0438\u0433\u0435\u043e\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u043e\u0439\u0441\u0445\u0435\u043c\u044b \u0442\u0438\u043f\u0440\u0430\u0437\u043c\u0435\u0449\u0435\u043d\u0438\u044f\u0438\u0437\u043c\u0435\u0440\u0435\u043d\u0438\u0439 \u0442\u0438\u043f\u0440\u0430\u0437\u043c\u0435\u0449\u0435\u043d\u0438\u044f\u0440\u0435\u043a\u0432\u0438\u0437\u0438\u0442\u043e\u0432\u0438\u0437\u043c\u0435\u0440\u0435\u043d\u0438\u0439 \u0442\u0438\u043f\u0440\u0430\u043c\u043a\u0438\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0442\u0438\u043f\u0441\u0432\u043e\u0434\u043d\u043e\u0439\u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u044b \u0442\u0438\u043f\u0441\u0432\u044f\u0437\u0438\u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u044b\u0433\u0430\u043d\u0442\u0430 \u0442\u0438\u043f\u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439\u043f\u043e\u0441\u0435\u0440\u0438\u044f\u043c\u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u044b \u0442\u0438\u043f\u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f\u0442\u043e\u0447\u0435\u043a\u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u044b \u0442\u0438\u043f\u0441\u043e\u0435\u0434\u0438\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439\u043b\u0438\u043d\u0438\u0438 \u0442\u0438\u043f\u0441\u0442\u043e\u0440\u043e\u043d\u044b\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u043e\u0439\u0441\u0445\u0435\u043c\u044b \u0442\u0438\u043f\u0444\u043e\u0440\u043c\u044b\u043e\u0442\u0447\u0435\u0442\u0430 \u0442\u0438\u043f\u0448\u043a\u0430\u043b\u044b\u0440\u0430\u0434\u0430\u0440\u043d\u043e\u0439\u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u044b \u0444\u0430\u043a\u0442\u043e\u0440\u043b\u0438\u043d\u0438\u0438\u0442\u0440\u0435\u043d\u0434\u0430\u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u044b \u0444\u0438\u0433\u0443\u0440\u0430\u043a\u043d\u043e\u043f\u043a\u0438 \u0444\u0438\u0433\u0443\u0440\u044b\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u043e\u0439\u0441\u0445\u0435\u043c\u044b \u0444\u0438\u043a\u0441\u0430\u0446\u0438\u044f\u0432\u0442\u0430\u0431\u043b\u0438\u0446\u0435 \u0444\u043e\u0440\u043c\u0430\u0442\u0434\u043d\u044f\u0448\u043a\u0430\u043b\u044b\u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0444\u043e\u0440\u043c\u0430\u0442\u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438 \u0448\u0438\u0440\u0438\u043d\u0430\u043f\u043e\u0434\u0447\u0438\u043d\u0435\u043d\u043d\u044b\u0445\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432\u0444\u043e\u0440\u043c\u044b \u0432\u0438\u0434\u0434\u0432\u0438\u0436\u0435\u043d\u0438\u044f\u0431\u0443\u0445\u0433\u0430\u043b\u0442\u0435\u0440\u0438\u0438 \u0432\u0438\u0434\u0434\u0432\u0438\u0436\u0435\u043d\u0438\u044f\u043d\u0430\u043a\u043e\u043f\u043b\u0435\u043d\u0438\u044f \u0432\u0438\u0434\u043f\u0435\u0440\u0438\u043e\u0434\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0440\u0430\u0441\u0447\u0435\u0442\u0430 \u0432\u0438\u0434\u0441\u0447\u0435\u0442\u0430 \u0432\u0438\u0434\u0442\u043e\u0447\u043a\u0438\u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0430\u0431\u0438\u0437\u043d\u0435\u0441\u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u0430\u0433\u0440\u0435\u0433\u0430\u0442\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u043d\u0430\u043a\u043e\u043f\u043b\u0435\u043d\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u0433\u0440\u0443\u043f\u043f\u0438\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u0440\u0435\u0436\u0438\u043c\u0430\u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u0441\u0440\u0435\u0437\u0430 \u043f\u0435\u0440\u0438\u043e\u0434\u0438\u0447\u043d\u043e\u0441\u0442\u044c\u0430\u0433\u0440\u0435\u0433\u0430\u0442\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u043d\u0430\u043a\u043e\u043f\u043b\u0435\u043d\u0438\u044f \u0440\u0435\u0436\u0438\u043c\u0430\u0432\u0442\u043e\u0432\u0440\u0435\u043c\u044f \u0440\u0435\u0436\u0438\u043c\u0437\u0430\u043f\u0438\u0441\u0438\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430 \u0440\u0435\u0436\u0438\u043c\u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430 \u0430\u0432\u0442\u043e\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f\u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439 \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0439\u043d\u043e\u043c\u0435\u0440\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0430\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u0440\u0430\u0441\u0448\u0438\u0444\u0440\u043e\u0432\u043a\u0438\u0442\u0430\u0431\u043b\u0438\u0447\u043d\u043e\u0433\u043e\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430 \u043e\u0440\u0438\u0435\u043d\u0442\u0430\u0446\u0438\u044f\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u0438\u0442\u043e\u0433\u043e\u0432\u043a\u043e\u043b\u043e\u043d\u043e\u043a\u0441\u0432\u043e\u0434\u043d\u043e\u0439\u0442\u0430\u0431\u043b\u0438\u0446\u044b \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u0438\u0442\u043e\u0433\u043e\u0432\u0441\u0442\u0440\u043e\u043a\u0441\u0432\u043e\u0434\u043d\u043e\u0439\u0442\u0430\u0431\u043b\u0438\u0446\u044b \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u0442\u0435\u043a\u0441\u0442\u0430\u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438 \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0430\u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u043a\u0438\u0442\u0430\u0431\u043b\u0438\u0447\u043d\u043e\u0433\u043e\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430 \u0441\u043f\u043e\u0441\u043e\u0431\u0447\u0442\u0435\u043d\u0438\u044f\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439\u0442\u0430\u0431\u043b\u0438\u0447\u043d\u043e\u0433\u043e\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430 \u0442\u0438\u043f\u0434\u0432\u0443\u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0435\u0439\u043f\u0435\u0447\u0430\u0442\u0438 \u0442\u0438\u043f\u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f\u043e\u0431\u043b\u0430\u0441\u0442\u0438\u0442\u0430\u0431\u043b\u0438\u0447\u043d\u043e\u0433\u043e\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430 \u0442\u0438\u043f\u043a\u0443\u0440\u0441\u043e\u0440\u043e\u0432\u0442\u0430\u0431\u043b\u0438\u0447\u043d\u043e\u0433\u043e\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430 \u0442\u0438\u043f\u043b\u0438\u043d\u0438\u0438\u0440\u0438\u0441\u0443\u043d\u043a\u0430\u0442\u0430\u0431\u043b\u0438\u0447\u043d\u043e\u0433\u043e\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430 \u0442\u0438\u043f\u043b\u0438\u043d\u0438\u0438\u044f\u0447\u0435\u0439\u043a\u0438\u0442\u0430\u0431\u043b\u0438\u0447\u043d\u043e\u0433\u043e\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430 \u0442\u0438\u043f\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f\u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0430\u0442\u0430\u0431\u043b\u0438\u0447\u043d\u043e\u0433\u043e\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430 \u0442\u0438\u043f\u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f\u0432\u044b\u0434\u0435\u043b\u0435\u043d\u0438\u044f\u0442\u0430\u0431\u043b\u0438\u0447\u043d\u043e\u0433\u043e\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430 \u0442\u0438\u043f\u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f\u043b\u0438\u043d\u0438\u0439\u0441\u0432\u043e\u0434\u043d\u043e\u0439\u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0442\u0438\u043f\u0440\u0430\u0437\u043c\u0435\u0449\u0435\u043d\u0438\u044f\u0442\u0435\u043a\u0441\u0442\u0430\u0442\u0430\u0431\u043b\u0438\u0447\u043d\u043e\u0433\u043e\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430 \u0442\u0438\u043f\u0440\u0438\u0441\u0443\u043d\u043a\u0430\u0442\u0430\u0431\u043b\u0438\u0447\u043d\u043e\u0433\u043e\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430 \u0442\u0438\u043f\u0441\u043c\u0435\u0449\u0435\u043d\u0438\u044f\u0442\u0430\u0431\u043b\u0438\u0447\u043d\u043e\u0433\u043e\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430 \u0442\u0438\u043f\u0443\u0437\u043e\u0440\u0430\u0442\u0430\u0431\u043b\u0438\u0447\u043d\u043e\u0433\u043e\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430 \u0442\u0438\u043f\u0444\u0430\u0439\u043b\u0430\u0442\u0430\u0431\u043b\u0438\u0447\u043d\u043e\u0433\u043e\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430 \u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044c\u043f\u0435\u0447\u0430\u0442\u0438 \u0447\u0435\u0440\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u0435\u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u044f\u0441\u0442\u0440\u0430\u043d\u0438\u0446 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u0432\u0440\u0435\u043c\u0435\u043d\u0438\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432\u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0449\u0438\u043a\u0430 \u0442\u0438\u043f\u0444\u0430\u0439\u043b\u0430\u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430 \u043e\u0431\u0445\u043e\u0434\u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430\u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0442\u0438\u043f\u0437\u0430\u043f\u0438\u0441\u0438\u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0432\u0438\u0434\u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f\u0440\u0430\u0441\u0448\u0438\u0444\u0440\u043e\u0432\u043a\u0438\u043f\u043e\u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044f\u043e\u0442\u0447\u0435\u0442\u0430 \u0442\u0438\u043f\u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f\u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0439 \u0442\u0438\u043f\u0438\u0437\u043c\u0435\u0440\u0435\u043d\u0438\u044f\u043f\u043e\u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044f\u043e\u0442\u0447\u0435\u0442\u0430 \u0442\u0438\u043f\u0440\u0430\u0437\u043c\u0435\u0449\u0435\u043d\u0438\u044f\u0438\u0442\u043e\u0433\u043e\u0432 \u0434\u043e\u0441\u0442\u0443\u043f\u043a\u0444\u0430\u0439\u043b\u0443 \u0440\u0435\u0436\u0438\u043c\u0434\u0438\u0430\u043b\u043e\u0433\u0430\u0432\u044b\u0431\u043e\u0440\u0430\u0444\u0430\u0439\u043b\u0430 \u0440\u0435\u0436\u0438\u043c\u043e\u0442\u043a\u0440\u044b\u0442\u0438\u044f\u0444\u0430\u0439\u043b\u0430 \u0442\u0438\u043f\u0438\u0437\u043c\u0435\u0440\u0435\u043d\u0438\u044f\u043f\u043e\u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044f\u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0432\u0438\u0434\u0434\u0430\u043d\u043d\u044b\u0445\u0430\u043d\u0430\u043b\u0438\u0437\u0430 \u043c\u0435\u0442\u043e\u0434\u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u0442\u0438\u043f\u0435\u0434\u0438\u043d\u0438\u0446\u044b\u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u0430\u0432\u0440\u0435\u043c\u0435\u043d\u0438\u0430\u043d\u0430\u043b\u0438\u0437\u0430\u0434\u0430\u043d\u043d\u044b\u0445 \u0442\u0438\u043f\u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f\u0442\u0430\u0431\u043b\u0438\u0446\u044b\u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430\u0430\u043d\u0430\u043b\u0438\u0437\u0430\u0434\u0430\u043d\u043d\u044b\u0445 \u0442\u0438\u043f\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f\u0447\u0438\u0441\u043b\u043e\u0432\u044b\u0445\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439\u0430\u043d\u0430\u043b\u0438\u0437\u0430\u0434\u0430\u043d\u043d\u044b\u0445 \u0442\u0438\u043f\u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0430\u0434\u0430\u043d\u043d\u044b\u0445\u043f\u043e\u0438\u0441\u043a\u0430\u0430\u0441\u0441\u043e\u0446\u0438\u0430\u0446\u0438\u0439 \u0442\u0438\u043f\u043a\u043e\u043b\u043e\u043d\u043a\u0438\u0430\u043d\u0430\u043b\u0438\u0437\u0430\u0434\u0430\u043d\u043d\u044b\u0445\u0434\u0435\u0440\u0435\u0432\u043e\u0440\u0435\u0448\u0435\u043d\u0438\u0439 \u0442\u0438\u043f\u043a\u043e\u043b\u043e\u043d\u043a\u0438\u0430\u043d\u0430\u043b\u0438\u0437\u0430\u0434\u0430\u043d\u043d\u044b\u0445\u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0438\u0437\u0430\u0446\u0438\u044f \u0442\u0438\u043f\u043a\u043e\u043b\u043e\u043d\u043a\u0438\u0430\u043d\u0430\u043b\u0438\u0437\u0430\u0434\u0430\u043d\u043d\u044b\u0445\u043e\u0431\u0449\u0430\u044f\u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 \u0442\u0438\u043f\u043a\u043e\u043b\u043e\u043d\u043a\u0438\u0430\u043d\u0430\u043b\u0438\u0437\u0430\u0434\u0430\u043d\u043d\u044b\u0445\u043f\u043e\u0438\u0441\u043a\u0430\u0441\u0441\u043e\u0446\u0438\u0430\u0446\u0438\u0439 \u0442\u0438\u043f\u043a\u043e\u043b\u043e\u043d\u043a\u0438\u0430\u043d\u0430\u043b\u0438\u0437\u0430\u0434\u0430\u043d\u043d\u044b\u0445\u043f\u043e\u0438\u0441\u043a\u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0435\u0439 \u0442\u0438\u043f\u043a\u043e\u043b\u043e\u043d\u043a\u0438\u043c\u043e\u0434\u0435\u043b\u0438\u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0430 \u0442\u0438\u043f\u043c\u0435\u0440\u044b\u0440\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u044f\u0430\u043d\u0430\u043b\u0438\u0437\u0430\u0434\u0430\u043d\u043d\u044b\u0445 \u0442\u0438\u043f\u043e\u0442\u0441\u0435\u0447\u0435\u043d\u0438\u044f\u043f\u0440\u0430\u0432\u0438\u043b\u0430\u0441\u0441\u043e\u0446\u0438\u0430\u0446\u0438\u0438 \u0442\u0438\u043f\u043f\u043e\u043b\u044f\u0430\u043d\u0430\u043b\u0438\u0437\u0430\u0434\u0430\u043d\u043d\u044b\u0445 \u0442\u0438\u043f\u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u0438\u0437\u0430\u0446\u0438\u0438\u0430\u043d\u0430\u043b\u0438\u0437\u0430\u0434\u0430\u043d\u043d\u044b\u0445 \u0442\u0438\u043f\u0443\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0438\u0432\u0430\u043d\u0438\u044f\u043f\u0440\u0430\u0432\u0438\u043b\u0430\u0441\u0441\u043e\u0446\u0438\u0430\u0446\u0438\u0438\u0430\u043d\u0430\u043b\u0438\u0437\u0430\u0434\u0430\u043d\u043d\u044b\u0445 \u0442\u0438\u043f\u0443\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0438\u0432\u0430\u043d\u0438\u044f\u0448\u0430\u0431\u043b\u043e\u043d\u043e\u0432\u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0435\u0439\u0430\u043d\u0430\u043b\u0438\u0437\u0430\u0434\u0430\u043d\u043d\u044b\u0445 \u0442\u0438\u043f\u0443\u043f\u0440\u043e\u0449\u0435\u043d\u0438\u044f\u0434\u0435\u0440\u0435\u0432\u0430\u0440\u0435\u0448\u0435\u043d\u0438\u0439 ws\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430 \u0432\u0430\u0440\u0438\u0430\u043d\u0442xpathxs \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u0437\u0430\u043f\u0438\u0441\u0438\u0434\u0430\u0442\u044bjson \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u043f\u0440\u043e\u0441\u0442\u043e\u0433\u043e\u0442\u0438\u043f\u0430xs \u0432\u0438\u0434\u0433\u0440\u0443\u043f\u043f\u044b\u043c\u043e\u0434\u0435\u043b\u0438xs \u0432\u0438\u0434\u0444\u0430\u0441\u0435\u0442\u0430xdto \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435\u043f\u043e\u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044fdom \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u043e\u0441\u0442\u044c\u043f\u0440\u043e\u0441\u0442\u043e\u0433\u043e\u0442\u0438\u043f\u0430xs \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u043e\u0441\u0442\u044c\u0441\u043e\u0441\u0442\u0430\u0432\u043d\u043e\u0433\u043e\u0442\u0438\u043f\u0430xs \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u043e\u0441\u0442\u044c\u0441\u0445\u0435\u043c\u044bxs \u0437\u0430\u043f\u0440\u0435\u0449\u0435\u043d\u043d\u044b\u0435\u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438xs \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f\u0433\u0440\u0443\u043f\u043f\u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438xs \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f\u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430xs \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f\u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f\u0438\u0434\u0435\u043d\u0442\u0438\u0447\u043d\u043e\u0441\u0442\u0438xs \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f\u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0438\u043c\u0435\u043dxs \u043c\u0435\u0442\u043e\u0434\u043d\u0430\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u044fxs \u043c\u043e\u0434\u0435\u043b\u044c\u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0433\u043exs \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u0442\u0438\u043f\u0430xml \u043d\u0435\u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0435\u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438xs \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430\u043f\u0440\u043e\u0431\u0435\u043b\u044c\u043d\u044b\u0445\u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432xs \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430\u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0433\u043exs \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0435\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044fxs \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b\u043e\u0442\u0431\u043e\u0440\u0430\u0443\u0437\u043b\u043e\u0432dom \u043f\u0435\u0440\u0435\u043d\u043e\u0441\u0441\u0442\u0440\u043e\u043ajson \u043f\u043e\u0437\u0438\u0446\u0438\u044f\u0432\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0435dom \u043f\u0440\u043e\u0431\u0435\u043b\u044c\u043d\u044b\u0435\u0441\u0438\u043c\u0432\u043e\u043b\u044bxml \u0442\u0438\u043f\u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430xml \u0442\u0438\u043f\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044fjson \u0442\u0438\u043f\u043a\u0430\u043d\u043e\u043d\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043exml \u0442\u0438\u043f\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044bxs \u0442\u0438\u043f\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438xml \u0442\u0438\u043f\u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430domxpath \u0442\u0438\u043f\u0443\u0437\u043b\u0430dom \u0442\u0438\u043f\u0443\u0437\u043b\u0430xml \u0444\u043e\u0440\u043c\u0430xml \u0444\u043e\u0440\u043c\u0430\u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044fxs \u0444\u043e\u0440\u043c\u0430\u0442\u0434\u0430\u0442\u044bjson \u044d\u043a\u0440\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435\u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432json \u0432\u0438\u0434\u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044f\u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u043a\u0438\u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438\u0440\u0430\u0441\u0448\u0438\u0444\u0440\u043e\u0432\u043a\u0438\u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u043a\u0438\u0434\u0430\u043d\u043d\u044b\u0445 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438\u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u043a\u0438\u0434\u0430\u043d\u043d\u044b\u0445 \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u0432\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0445\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432\u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430\u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u043a\u0438\u0434\u0430\u043d\u043d\u044b\u0445 \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u0438\u0442\u043e\u0433\u043e\u0432\u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u043a\u0438\u0434\u0430\u043d\u043d\u044b\u0445 \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u043a\u0438\u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u043a\u0438\u0434\u0430\u043d\u043d\u044b\u0445 \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u043f\u043e\u043b\u0435\u0439\u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u043a\u0438\u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u043a\u0438\u0434\u0430\u043d\u043d\u044b\u0445 \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u043f\u043e\u043b\u044f\u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u043a\u0438\u0434\u0430\u043d\u043d\u044b\u0445 \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u0440\u0435\u043a\u0432\u0438\u0437\u0438\u0442\u043e\u0432\u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u043a\u0438\u0434\u0430\u043d\u043d\u044b\u0445 \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432\u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u043a\u0438\u0434\u0430\u043d\u043d\u044b\u0445 \u0442\u0438\u043f\u0431\u0443\u0445\u0433\u0430\u043b\u0442\u0435\u0440\u0441\u043a\u043e\u0433\u043e\u043e\u0441\u0442\u0430\u0442\u043a\u0430\u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u043a\u0438\u0434\u0430\u043d\u043d\u044b\u0445 \u0442\u0438\u043f\u0432\u044b\u0432\u043e\u0434\u0430\u0442\u0435\u043a\u0441\u0442\u0430\u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u043a\u0438\u0434\u0430\u043d\u043d\u044b\u0445 \u0442\u0438\u043f\u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u043a\u0438\u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u043a\u0438\u0434\u0430\u043d\u043d\u044b\u0445 \u0442\u0438\u043f\u0433\u0440\u0443\u043f\u043f\u044b\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432\u043e\u0442\u0431\u043e\u0440\u0430\u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u043a\u0438\u0434\u0430\u043d\u043d\u044b\u0445 \u0442\u0438\u043f\u0434\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f\u043f\u0435\u0440\u0438\u043e\u0434\u0430\u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u043a\u0438\u0434\u0430\u043d\u043d\u044b\u0445 \u0442\u0438\u043f\u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0430\u043f\u043e\u043b\u0435\u0439\u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u043a\u0438\u0434\u0430\u043d\u043d\u044b\u0445 \u0442\u0438\u043f\u043c\u0430\u043a\u0435\u0442\u0430\u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u043a\u0438\u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u043a\u0438\u0434\u0430\u043d\u043d\u044b\u0445 \u0442\u0438\u043f\u043c\u0430\u043a\u0435\u0442\u0430\u043e\u0431\u043b\u0430\u0441\u0442\u0438\u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u043a\u0438\u0434\u0430\u043d\u043d\u044b\u0445 \u0442\u0438\u043f\u043e\u0441\u0442\u0430\u0442\u043a\u0430\u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u043a\u0438\u0434\u0430\u043d\u043d\u044b\u0445 \u0442\u0438\u043f\u043f\u0435\u0440\u0438\u043e\u0434\u0430\u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u043a\u0438\u0434\u0430\u043d\u043d\u044b\u0445 \u0442\u0438\u043f\u0440\u0430\u0437\u043c\u0435\u0449\u0435\u043d\u0438\u044f\u0442\u0435\u043a\u0441\u0442\u0430\u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u043a\u0438\u0434\u0430\u043d\u043d\u044b\u0445 \u0442\u0438\u043f\u0441\u0432\u044f\u0437\u0438\u043d\u0430\u0431\u043e\u0440\u043e\u0432\u0434\u0430\u043d\u043d\u044b\u0445\u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u043a\u0438\u0434\u0430\u043d\u043d\u044b\u0445 \u0442\u0438\u043f\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430\u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u043a\u0438\u0434\u0430\u043d\u043d\u044b\u0445 \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u043b\u0435\u0433\u0435\u043d\u0434\u044b\u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u044b\u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u043a\u0438\u0434\u0430\u043d\u043d\u044b\u0445 \u0442\u0438\u043f\u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044f\u043e\u0442\u0431\u043e\u0440\u0430\u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u043a\u0438\u0434\u0430\u043d\u043d\u044b\u0445 \u0440\u0435\u0436\u0438\u043c\u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438\u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u043a\u0438\u0434\u0430\u043d\u043d\u044b\u0445 \u0440\u0435\u0436\u0438\u043c\u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f\u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a\u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u043a\u0438\u0434\u0430\u043d\u043d\u044b\u0445 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438\u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u043a\u0438\u0434\u0430\u043d\u043d\u044b\u0445 \u0441\u043f\u043e\u0441\u043e\u0431\u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f\u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a\u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u043a\u0438\u0434\u0430\u043d\u043d\u044b\u0445 \u0440\u0435\u0436\u0438\u043c\u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u043a\u0438\u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u043a\u0438\u0434\u0430\u043d\u043d\u044b\u0445 \u0430\u0432\u0442\u043e\u043f\u043e\u0437\u0438\u0446\u0438\u044f\u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432\u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u043a\u0438\u0434\u0430\u043d\u043d\u044b\u0445 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f\u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u043a\u0438\u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u043a\u0438\u0434\u0430\u043d\u043d\u044b\u0445 \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432\u0432\u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u0435\u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u043a\u0438\u0434\u0430\u043d\u043d\u044b\u0445 \u0444\u0438\u043a\u0441\u0430\u0446\u0438\u044f\u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u043a\u0438\u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u0443\u0441\u043b\u043e\u0432\u043d\u043e\u0433\u043e\u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u044f\u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u043a\u0438\u0434\u0430\u043d\u043d\u044b\u0445 \u0432\u0430\u0436\u043d\u043e\u0441\u0442\u044c\u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u043f\u043e\u0447\u0442\u043e\u0432\u043e\u0433\u043e\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430\u0442\u0435\u043a\u0441\u0442\u0430\u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u043f\u043e\u0447\u0442\u043e\u0432\u043e\u0433\u043e\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u0441\u043f\u043e\u0441\u043e\u0431\u043a\u043e\u0434\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f\u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u043f\u043e\u0447\u0442\u043e\u0432\u043e\u0433\u043e\u0432\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0441\u043f\u043e\u0441\u043e\u0431\u043a\u043e\u0434\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f\u043d\u0435ascii\u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432\u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u043f\u043e\u0447\u0442\u043e\u0432\u043e\u0433\u043e\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u0442\u0438\u043f\u0442\u0435\u043a\u0441\u0442\u0430\u043f\u043e\u0447\u0442\u043e\u0432\u043e\u0433\u043e\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u043f\u043e\u0447\u0442\u044b \u0441\u0442\u0430\u0442\u0443\u0441\u0440\u0430\u0437\u0431\u043e\u0440\u0430\u043f\u043e\u0447\u0442\u043e\u0432\u043e\u0433\u043e\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u0440\u0435\u0436\u0438\u043c\u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438\u0437\u0430\u043f\u0438\u0441\u0438\u0436\u0443\u0440\u043d\u0430\u043b\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0441\u0442\u0430\u0442\u0443\u0441\u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438\u0437\u0430\u043f\u0438\u0441\u0438\u0436\u0443\u0440\u043d\u0430\u043b\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0443\u0440\u043e\u0432\u0435\u043d\u044c\u0436\u0443\u0440\u043d\u0430\u043b\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430\u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432\u043a\u0440\u0438\u043f\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0438 \u0440\u0435\u0436\u0438\u043c\u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f\u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432\u043a\u0440\u0438\u043f\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0438 \u0440\u0435\u0436\u0438\u043c\u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438\u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430\u043a\u0440\u0438\u043f\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0438 \u0442\u0438\u043f\u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430\u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0432\u043a\u0440\u0438\u043f\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0438 \u043a\u043e\u0434\u0438\u0440\u043e\u0432\u043a\u0430\u0438\u043c\u0435\u043d\u0444\u0430\u0439\u043b\u043e\u0432\u0432zip\u0444\u0430\u0439\u043b\u0435 \u043c\u0435\u0442\u043e\u0434\u0441\u0436\u0430\u0442\u0438\u044fzip \u043c\u0435\u0442\u043e\u0434\u0448\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u0438\u044fzip \u0440\u0435\u0436\u0438\u043c\u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f\u043f\u0443\u0442\u0435\u0439\u0444\u0430\u0439\u043b\u043e\u0432zip \u0440\u0435\u0436\u0438\u043c\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438\u043f\u043e\u0434\u043a\u0430\u0442\u0430\u043b\u043e\u0433\u043e\u0432zip \u0440\u0435\u0436\u0438\u043c\u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f\u043f\u0443\u0442\u0435\u0439zip \u0443\u0440\u043e\u0432\u0435\u043d\u044c\u0441\u0436\u0430\u0442\u0438\u044fzip \u0437\u0432\u0443\u043a\u043e\u0432\u043e\u0435\u043e\u043f\u043e\u0432\u0435\u0449\u0435\u043d\u0438\u0435 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0430\u043a\u0441\u0442\u0440\u043e\u043a\u0435 \u043f\u043e\u0437\u0438\u0446\u0438\u044f\u0432\u043f\u043e\u0442\u043e\u043a\u0435 \u043f\u043e\u0440\u044f\u0434\u043e\u043a\u0431\u0430\u0439\u0442\u043e\u0432 \u0440\u0435\u0436\u0438\u043c\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0438\u0434\u0430\u043d\u043d\u044b\u0445 \u0440\u0435\u0436\u0438\u043c\u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u043e\u0439\u0434\u0430\u043d\u043d\u044b\u0445 \u0441\u0435\u0440\u0432\u0438\u0441\u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0445\u043f\u043e\u043a\u0443\u043f\u043e\u043a \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435\u0444\u043e\u043d\u043e\u0432\u043e\u0433\u043e\u0437\u0430\u0434\u0430\u043d\u0438\u044f \u0442\u0438\u043f\u043f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u0430\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u0445\u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0439 \u0443\u0440\u043e\u0432\u0435\u043d\u044c\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f\u0437\u0430\u0449\u0438\u0449\u0435\u043d\u043d\u043e\u0433\u043e\u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044fftp \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u043f\u043e\u0440\u044f\u0434\u043a\u0430\u0441\u0445\u0435\u043c\u044b\u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0442\u0438\u043f\u0434\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f\u043f\u0435\u0440\u0438\u043e\u0434\u0430\u043c\u0438\u0441\u0445\u0435\u043c\u044b\u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0442\u0438\u043f\u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c\u043d\u043e\u0439\u0442\u043e\u0447\u043a\u0438\u0441\u0445\u0435\u043c\u044b\u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0442\u0438\u043f\u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f\u0441\u0445\u0435\u043c\u044b\u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0442\u0438\u043f\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0439\u0442\u0430\u0431\u043b\u0438\u0446\u044b\u0441\u0445\u0435\u043c\u044b\u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0442\u0438\u043f\u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f\u0441\u0445\u0435\u043c\u044b\u0437\u0430\u043f\u0440\u043e\u0441\u0430 http\u043c\u0435\u0442\u043e\u0434 \u0430\u0432\u0442\u043e\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043e\u0431\u0449\u0435\u0433\u043e\u0440\u0435\u043a\u0432\u0438\u0437\u0438\u0442\u0430 \u0430\u0432\u0442\u043e\u043f\u0440\u0435\u0444\u0438\u043a\u0441\u043d\u043e\u043c\u0435\u0440\u0430\u0437\u0430\u0434\u0430\u0447\u0438 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u043e\u0433\u043e\u044f\u0437\u044b\u043a\u0430 \u0432\u0438\u0434\u0438\u0435\u0440\u0430\u0440\u0445\u0438\u0438 \u0432\u0438\u0434\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u043d\u0430\u043a\u043e\u043f\u043b\u0435\u043d\u0438\u044f \u0432\u0438\u0434\u0442\u0430\u0431\u043b\u0438\u0446\u044b\u0432\u043d\u0435\u0448\u043d\u0435\u0433\u043e\u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0430\u0434\u0430\u043d\u043d\u044b\u0445 \u0437\u0430\u043f\u0438\u0441\u044c\u0434\u0432\u0438\u0436\u0435\u043d\u0438\u0439\u043f\u0440\u0438\u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0438 \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435\u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0435\u0439 \u0438\u043d\u0434\u0435\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u0431\u0430\u0437\u044b\u043f\u043b\u0430\u043d\u0430\u0432\u0438\u0434\u043e\u0432\u0440\u0430\u0441\u0447\u0435\u0442\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u0431\u044b\u0441\u0442\u0440\u043e\u0433\u043e\u0432\u044b\u0431\u043e\u0440\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043e\u0431\u0449\u0435\u0433\u043e\u0440\u0435\u043a\u0432\u0438\u0437\u0438\u0442\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043f\u043e\u0434\u0447\u0438\u043d\u0435\u043d\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043f\u043e\u043b\u043d\u043e\u0442\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u0433\u043e\u043f\u043e\u0438\u0441\u043a\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u0440\u0430\u0437\u0434\u0435\u043b\u044f\u0435\u043c\u044b\u0445\u0434\u0430\u043d\u043d\u044b\u0445\u043e\u0431\u0449\u0435\u0433\u043e\u0440\u0435\u043a\u0432\u0438\u0437\u0438\u0442\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u0440\u0435\u043a\u0432\u0438\u0437\u0438\u0442\u0430 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435\u043f\u0440\u0435\u0434\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0445\u0434\u0430\u043d\u043d\u044b\u0445 \u043e\u043f\u0435\u0440\u0430\u0442\u0438\u0432\u043d\u043e\u0435\u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0435\u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u0432\u0438\u0434\u0430\u0440\u0430\u0441\u0447\u0435\u0442\u0430 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0435\u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u0432\u0438\u0434\u0430\u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0435\u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u0437\u0430\u0434\u0430\u0447\u0438 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0435\u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u043f\u043b\u0430\u043d\u0430\u043e\u0431\u043c\u0435\u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0435\u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u0441\u043f\u0440\u0430\u0432\u043e\u0447\u043d\u0438\u043a\u0430 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0435\u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u0441\u0447\u0435\u0442\u0430 \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u0435\u0433\u0440\u0430\u043d\u0438\u0446\u044b\u043f\u0440\u0438\u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0438 \u043f\u0435\u0440\u0438\u043e\u0434\u0438\u0447\u043d\u043e\u0441\u0442\u044c\u043d\u043e\u043c\u0435\u0440\u0430\u0431\u0438\u0437\u043d\u0435\u0441\u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430 \u043f\u0435\u0440\u0438\u043e\u0434\u0438\u0447\u043d\u043e\u0441\u0442\u044c\u043d\u043e\u043c\u0435\u0440\u0430\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430 \u043f\u0435\u0440\u0438\u043e\u0434\u0438\u0447\u043d\u043e\u0441\u0442\u044c\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0440\u0430\u0441\u0447\u0435\u0442\u0430 \u043f\u0435\u0440\u0438\u043e\u0434\u0438\u0447\u043d\u043e\u0441\u0442\u044c\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0441\u0432\u0435\u0434\u0435\u043d\u0438\u0439 \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u044b\u0445\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u043f\u043e\u043b\u043d\u043e\u0442\u0435\u043a\u0441\u0442\u043e\u0432\u044b\u0439\u043f\u043e\u0438\u0441\u043a\u043f\u0440\u0438\u0432\u0432\u043e\u0434\u0435\u043f\u043e\u0441\u0442\u0440\u043e\u043a\u0435 \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u043d\u043e\u0441\u0442\u044c\u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u0435\u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438\u043e\u0431\u0449\u0435\u0433\u043e\u0440\u0435\u043a\u0432\u0438\u0437\u0438\u0442\u0430 \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u0435\u0434\u0430\u043d\u043d\u044b\u0445\u043e\u0431\u0449\u0435\u0433\u043e\u0440\u0435\u043a\u0432\u0438\u0437\u0438\u0442\u0430 \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u0435\u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0439\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438\u043e\u0431\u0449\u0435\u0433\u043e\u0440\u0435\u043a\u0432\u0438\u0437\u0438\u0442\u0430 \u0440\u0435\u0436\u0438\u043c\u0430\u0432\u0442\u043e\u043d\u0443\u043c\u0435\u0440\u0430\u0446\u0438\u0438\u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0440\u0435\u0436\u0438\u043c\u0437\u0430\u043f\u0438\u0441\u0438\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430 \u0440\u0435\u0436\u0438\u043c\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f\u043c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0440\u0435\u0436\u0438\u043c\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0445\u0432\u044b\u0437\u043e\u0432\u043e\u0432\u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0439\u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u044b\u0438\u0432\u043d\u0435\u0448\u043d\u0438\u0445\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0440\u0435\u0436\u0438\u043c\u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e\u0433\u043e\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f\u0441\u0435\u0430\u043d\u0441\u043e\u0432 \u0440\u0435\u0436\u0438\u043c\u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f\u0434\u0430\u043d\u043d\u044b\u0445\u0432\u044b\u0431\u043e\u0440\u0430\u043f\u0440\u0438\u0432\u0432\u043e\u0434\u0435\u043f\u043e\u0441\u0442\u0440\u043e\u043a\u0435 \u0440\u0435\u0436\u0438\u043c\u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u0438 \u0440\u0435\u0436\u0438\u043c\u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u0438\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 \u0440\u0435\u0436\u0438\u043c\u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u043e\u0439\u0434\u0430\u043d\u043d\u044b\u0445\u043f\u043e\u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0441\u0435\u0440\u0438\u0438\u043a\u043e\u0434\u043e\u0432\u043f\u043b\u0430\u043d\u0430\u0432\u0438\u0434\u043e\u0432\u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a \u0441\u0435\u0440\u0438\u0438\u043a\u043e\u0434\u043e\u0432\u043f\u043b\u0430\u043d\u0430\u0441\u0447\u0435\u0442\u043e\u0432 \u0441\u0435\u0440\u0438\u0438\u043a\u043e\u0434\u043e\u0432\u0441\u043f\u0440\u0430\u0432\u043e\u0447\u043d\u0438\u043a\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435\u043f\u0440\u0438\u0432\u0432\u043e\u0434\u0435 \u0441\u043f\u043e\u0441\u043e\u0431\u0432\u044b\u0431\u043e\u0440\u0430 \u0441\u043f\u043e\u0441\u043e\u0431\u043f\u043e\u0438\u0441\u043a\u0430\u0441\u0442\u0440\u043e\u043a\u0438\u043f\u0440\u0438\u0432\u0432\u043e\u0434\u0435\u043f\u043e\u0441\u0442\u0440\u043e\u043a\u0435 \u0441\u043f\u043e\u0441\u043e\u0431\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0442\u0438\u043f\u0434\u0430\u043d\u043d\u044b\u0445\u0442\u0430\u0431\u043b\u0438\u0446\u044b\u0432\u043d\u0435\u0448\u043d\u0435\u0433\u043e\u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0430\u0434\u0430\u043d\u043d\u044b\u0445 \u0442\u0438\u043f\u043a\u043e\u0434\u0430\u043f\u043b\u0430\u043d\u0430\u0432\u0438\u0434\u043e\u0432\u0440\u0430\u0441\u0447\u0435\u0442\u0430 \u0442\u0438\u043f\u043a\u043e\u0434\u0430\u0441\u043f\u0440\u0430\u0432\u043e\u0447\u043d\u0438\u043a\u0430 \u0442\u0438\u043f\u043c\u0430\u043a\u0435\u0442\u0430 \u0442\u0438\u043f\u043d\u043e\u043c\u0435\u0440\u0430\u0431\u0438\u0437\u043d\u0435\u0441\u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430 \u0442\u0438\u043f\u043d\u043e\u043c\u0435\u0440\u0430\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430 \u0442\u0438\u043f\u043d\u043e\u043c\u0435\u0440\u0430\u0437\u0430\u0434\u0430\u0447\u0438 \u0442\u0438\u043f\u0444\u043e\u0440\u043c\u044b \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435\u0434\u0432\u0438\u0436\u0435\u043d\u0438\u0439 \u0432\u0430\u0436\u043d\u043e\u0441\u0442\u044c\u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b\u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044f\u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430\u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u043e\u0433\u043e\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0430\u0444\u043e\u0440\u043c\u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u043e\u0433\u043e\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0433\u043e\u0448\u0440\u0438\u0444\u0442\u0430\u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u043e\u0433\u043e\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0433\u043e\u043f\u0435\u0440\u0438\u043e\u0434\u0430 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0439\u0434\u0430\u0442\u044b\u043d\u0430\u0447\u0430\u043b\u0430 \u0432\u0438\u0434\u0433\u0440\u0430\u043d\u0438\u0446\u044b \u0432\u0438\u0434\u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438 \u0432\u0438\u0434\u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f\u043f\u043e\u043b\u043d\u043e\u0442\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u0433\u043e\u043f\u043e\u0438\u0441\u043a\u0430 \u0432\u0438\u0434\u0440\u0430\u043c\u043a\u0438 \u0432\u0438\u0434\u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044f \u0432\u0438\u0434\u0446\u0432\u0435\u0442\u0430 \u0432\u0438\u0434\u0447\u0438\u0441\u043b\u043e\u0432\u043e\u0433\u043e\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432\u0438\u0434\u0448\u0440\u0438\u0444\u0442\u0430 \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u0430\u044f\u0434\u043b\u0438\u043d\u0430 \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0439\u0437\u043d\u0430\u043a \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435byteordermark \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c\u0435\u0442\u0430\u0434\u0430\u043d\u043d\u044b\u0445\u043f\u043e\u043b\u043d\u043e\u0442\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u0433\u043e\u043f\u043e\u0438\u0441\u043a\u0430 \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0439\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u043a\u043b\u0430\u0432\u0438\u0448\u0430 \u043a\u043e\u0434\u0432\u043e\u0437\u0432\u0440\u0430\u0442\u0430\u0434\u0438\u0430\u043b\u043e\u0433\u0430 \u043a\u043e\u0434\u0438\u0440\u043e\u0432\u043a\u0430xbase \u043a\u043e\u0434\u0438\u0440\u043e\u0432\u043a\u0430\u0442\u0435\u043a\u0441\u0442\u0430 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u043f\u043e\u0438\u0441\u043a\u0430 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435\u043f\u0440\u0435\u0434\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0445\u0434\u0430\u043d\u043d\u044b\u0445 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435\u043f\u0440\u0438\u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0438\u0434\u0430\u043d\u043d\u044b\u0445 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u043f\u0430\u043d\u0435\u043b\u0438\u0440\u0430\u0437\u0434\u0435\u043b\u043e\u0432 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430\u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0440\u0435\u0436\u0438\u043c\u0434\u0438\u0430\u043b\u043e\u0433\u0430\u0432\u043e\u043f\u0440\u043e\u0441 \u0440\u0435\u0436\u0438\u043c\u0437\u0430\u043f\u0443\u0441\u043a\u0430\u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u043e\u0433\u043e\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0440\u0435\u0436\u0438\u043c\u043e\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u044f \u0440\u0435\u0436\u0438\u043c\u043e\u0442\u043a\u0440\u044b\u0442\u0438\u044f\u0444\u043e\u0440\u043c\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0440\u0435\u0436\u0438\u043c\u043f\u043e\u043b\u043d\u043e\u0442\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u0433\u043e\u043f\u043e\u0438\u0441\u043a\u0430 \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c\u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u043e\u0433\u043e\u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435\u0432\u043d\u0435\u0448\u043d\u0435\u0433\u043e\u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0430\u0434\u0430\u043d\u043d\u044b\u0445 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435\u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438\u0431\u0430\u0437\u044b\u0434\u0430\u043d\u043d\u044b\u0445 \u0441\u043f\u043e\u0441\u043e\u0431\u0432\u044b\u0431\u043e\u0440\u0430\u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u0430windows \u0441\u043f\u043e\u0441\u043e\u0431\u043a\u043e\u0434\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f\u0441\u0442\u0440\u043e\u043a\u0438 \u0441\u0442\u0430\u0442\u0443\u0441\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u0442\u0438\u043f\u0432\u043d\u0435\u0448\u043d\u0435\u0439\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u0442\u0438\u043f\u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u044b \u0442\u0438\u043f\u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f\u043a\u043b\u0430\u0432\u0438\u0448\u0438enter \u0442\u0438\u043f\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438\u043e\u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438\u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438\u0431\u0430\u0437\u044b\u0434\u0430\u043d\u043d\u044b\u0445 \u0443\u0440\u043e\u0432\u0435\u043d\u044c\u0438\u0437\u043e\u043b\u044f\u0446\u0438\u0438\u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0439 \u0445\u0435\u0448\u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0447\u0430\u0441\u0442\u0438\u0434\u0430\u0442\u044b",
type:"com\u043e\u0431\u044a\u0435\u043a\u0442 ftp\u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 http\u0437\u0430\u043f\u0440\u043e\u0441 http\u0441\u0435\u0440\u0432\u0438\u0441\u043e\u0442\u0432\u0435\u0442 http\u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 ws\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f ws\u043f\u0440\u043e\u043a\u0441\u0438 xbase \u0430\u043d\u0430\u043b\u0438\u0437\u0434\u0430\u043d\u043d\u044b\u0445 \u0430\u043d\u043d\u043e\u0442\u0430\u0446\u0438\u044fxs \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0430\u0434\u0430\u043d\u043d\u044b\u0445 \u0431\u0443\u0444\u0435\u0440\u0434\u0432\u043e\u0438\u0447\u043d\u044b\u0445\u0434\u0430\u043d\u043d\u044b\u0445 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435xs \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u043a\u0438\u0434\u0430\u043d\u043d\u044b\u0445 \u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u0445\u0447\u0438\u0441\u0435\u043b \u0433\u0435\u043e\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0430\u044f\u0441\u0445\u0435\u043c\u0430 \u0433\u0435\u043e\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u0435\u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u044b \u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0430\u044f\u0441\u0445\u0435\u043c\u0430 \u0433\u0440\u0443\u043f\u043f\u0430\u043c\u043e\u0434\u0435\u043b\u0438xs \u0434\u0430\u043d\u043d\u044b\u0435\u0440\u0430\u0441\u0448\u0438\u0444\u0440\u043e\u0432\u043a\u0438\u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u043a\u0438\u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u0432\u043e\u0438\u0447\u043d\u044b\u0435\u0434\u0430\u043d\u043d\u044b\u0435 \u0434\u0435\u043d\u0434\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430 \u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u0430 \u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u0430\u0433\u0430\u043d\u0442\u0430 \u0434\u0438\u0430\u043b\u043e\u0433\u0432\u044b\u0431\u043e\u0440\u0430\u0444\u0430\u0439\u043b\u0430 \u0434\u0438\u0430\u043b\u043e\u0433\u0432\u044b\u0431\u043e\u0440\u0430\u0446\u0432\u0435\u0442\u0430 \u0434\u0438\u0430\u043b\u043e\u0433\u0432\u044b\u0431\u043e\u0440\u0430\u0448\u0440\u0438\u0444\u0442\u0430 \u0434\u0438\u0430\u043b\u043e\u0433\u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u044f\u0440\u0435\u0433\u043b\u0430\u043c\u0435\u043d\u0442\u043d\u043e\u0433\u043e\u0437\u0430\u0434\u0430\u043d\u0438\u044f \u0434\u0438\u0430\u043b\u043e\u0433\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f\u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0433\u043e\u043f\u0435\u0440\u0438\u043e\u0434\u0430 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442dom \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442html \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044fxs \u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u043c\u043e\u0435\u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0435 \u0437\u0430\u043f\u0438\u0441\u044cdom \u0437\u0430\u043f\u0438\u0441\u044cfastinfoset \u0437\u0430\u043f\u0438\u0441\u044chtml \u0437\u0430\u043f\u0438\u0441\u044cjson \u0437\u0430\u043f\u0438\u0441\u044cxml \u0437\u0430\u043f\u0438\u0441\u044czip\u0444\u0430\u0439\u043b\u0430 \u0437\u0430\u043f\u0438\u0441\u044c\u0434\u0430\u043d\u043d\u044b\u0445 \u0437\u0430\u043f\u0438\u0441\u044c\u0442\u0435\u043a\u0441\u0442\u0430 \u0437\u0430\u043f\u0438\u0441\u044c\u0443\u0437\u043b\u043e\u0432dom \u0437\u0430\u043f\u0440\u043e\u0441 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u043d\u043e\u0435\u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435openssl \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043f\u043e\u043b\u0435\u0439\u0440\u0430\u0441\u0448\u0438\u0444\u0440\u043e\u0432\u043a\u0438\u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u043a\u0438\u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u0435\u0442\u0435\u043a\u0441\u0442\u0430 \u0438\u043c\u043f\u043e\u0440\u0442xs \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u043f\u043e\u0447\u0442\u0430 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u043f\u043e\u0447\u0442\u043e\u0432\u043e\u0435\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u043f\u043e\u0447\u0442\u043e\u0432\u044b\u0439\u043f\u0440\u043e\u0444\u0438\u043b\u044c \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u043f\u0440\u043e\u043a\u0441\u0438 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f\u0434\u043b\u044f\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044fxs \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430xs \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u0441\u043e\u0431\u044b\u0442\u0438\u044f\u0436\u0443\u0440\u043d\u0430\u043b\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445\u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a\u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u043a\u0438\u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u0442\u0435\u0440\u0430\u0442\u043e\u0440\u0443\u0437\u043b\u043e\u0432dom \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 \u043a\u0432\u0430\u043b\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u044b\u0434\u0430\u0442\u044b \u043a\u0432\u0430\u043b\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u044b\u0434\u0432\u043e\u0438\u0447\u043d\u044b\u0445\u0434\u0430\u043d\u043d\u044b\u0445 \u043a\u0432\u0430\u043b\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u044b\u0441\u0442\u0440\u043e\u043a\u0438 \u043a\u0432\u0430\u043b\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u044b\u0447\u0438\u0441\u043b\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u0449\u0438\u043a\u043c\u0430\u043a\u0435\u0442\u0430\u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u043a\u0438\u0434\u0430\u043d\u043d\u044b\u0445 \u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u0449\u0438\u043a\u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a\u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u043a\u0438\u0434\u0430\u043d\u043d\u044b\u0445 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440\u043c\u0430\u043a\u0435\u0442\u0430\u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u044f\u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u043a\u0438\u0434\u0430\u043d\u043d\u044b\u0445 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440\u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a\u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u043a\u0438\u0434\u0430\u043d\u043d\u044b\u0445 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440\u0444\u043e\u0440\u043c\u0430\u0442\u043d\u043e\u0439\u0441\u0442\u0440\u043e\u043a\u0438 \u043b\u0438\u043d\u0438\u044f \u043c\u0430\u043a\u0435\u0442\u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u043a\u0438\u0434\u0430\u043d\u043d\u044b\u0445 \u043c\u0430\u043a\u0435\u0442\u043e\u0431\u043b\u0430\u0441\u0442\u0438\u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u043a\u0438\u0434\u0430\u043d\u043d\u044b\u0445 \u043c\u0430\u043a\u0435\u0442\u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u044f\u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u043a\u0438\u0434\u0430\u043d\u043d\u044b\u0445 \u043c\u0430\u0441\u043a\u0430xs \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u043a\u0440\u0438\u043f\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0438 \u043d\u0430\u0431\u043e\u0440\u0441\u0445\u0435\u043cxml \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438\u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u043a\u0438\u0434\u0430\u043d\u043d\u044b\u0445 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438\u0441\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438json \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430\u043a\u0430\u0440\u0442\u0438\u043d\u043e\u043a \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430\u0440\u0430\u0441\u0448\u0438\u0444\u0440\u043e\u0432\u043a\u0438\u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u043a\u0438\u0434\u0430\u043d\u043d\u044b\u0445 \u043e\u0431\u0445\u043e\u0434\u0434\u0435\u0440\u0435\u0432\u0430dom \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435\u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430xs \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435\u043d\u043e\u0442\u0430\u0446\u0438\u0438xs \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430xs \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f\u0441\u043e\u0431\u044b\u0442\u0438\u044f\u0434\u043e\u0441\u0442\u0443\u043f\u0436\u0443\u0440\u043d\u0430\u043b\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f\u0441\u043e\u0431\u044b\u0442\u0438\u044f\u043e\u0442\u043a\u0430\u0437\u0432\u0434\u043e\u0441\u0442\u0443\u043f\u0435\u0436\u0443\u0440\u043d\u0430\u043b\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438\u0440\u0430\u0441\u0448\u0438\u0444\u0440\u043e\u0432\u043a\u0438\u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u043a\u0438\u0434\u0430\u043d\u043d\u044b\u0445 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435\u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0435\u043c\u043e\u0433\u043e\u0444\u0430\u0439\u043b\u0430 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435\u0442\u0438\u043f\u043e\u0432 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435\u0433\u0440\u0443\u043f\u043f\u044b\u0430\u0442\u0440\u0438\u0431\u0443\u0442\u043e\u0432xs \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435\u0433\u0440\u0443\u043f\u043f\u044b\u043c\u043e\u0434\u0435\u043b\u0438xs \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435\u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f\u0438\u0434\u0435\u043d\u0442\u0438\u0447\u043d\u043e\u0441\u0442\u0438xs \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435\u043f\u0440\u043e\u0441\u0442\u043e\u0433\u043e\u0442\u0438\u043f\u0430xs \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435\u0441\u043e\u0441\u0442\u0430\u0432\u043d\u043e\u0433\u043e\u0442\u0438\u043f\u0430xs \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435\u0442\u0438\u043f\u0430\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430dom \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044fxpathxs \u043e\u0442\u0431\u043e\u0440\u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u043a\u0438\u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u0430\u043a\u0435\u0442\u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u043c\u044b\u0445\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0432\u044b\u0431\u043e\u0440\u0430 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u043a\u0438\u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b\u0437\u0430\u043f\u0438\u0441\u0438json \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b\u0437\u0430\u043f\u0438\u0441\u0438xml \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b\u0447\u0442\u0435\u043d\u0438\u044fxml \u043f\u0435\u0440\u0435\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435xs \u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0449\u0438\u043a \u043f\u043e\u043b\u0435\u0430\u043d\u0430\u043b\u0438\u0437\u0430\u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u0435\u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u043a\u0438\u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044cdom \u043f\u043e\u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043f\u043e\u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u043e\u0442\u0447\u0435\u0442\u0430 \u043f\u043e\u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u043e\u0442\u0447\u0435\u0442\u0430\u0430\u043d\u0430\u043b\u0438\u0437\u0430\u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u0441\u0445\u0435\u043cxml \u043f\u043e\u0442\u043e\u043a \u043f\u043e\u0442\u043e\u043a\u0432\u043f\u0430\u043c\u044f\u0442\u0438 \u043f\u043e\u0447\u0442\u0430 \u043f\u043e\u0447\u0442\u043e\u0432\u043e\u0435\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435xsl \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043a\u043a\u0430\u043d\u043e\u043d\u0438\u0447\u0435\u0441\u043a\u043e\u043c\u0443xml \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0440\u0432\u044b\u0432\u043e\u0434\u0430\u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430\u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u043a\u0438\u0434\u0430\u043d\u043d\u044b\u0445\u0432\u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044e\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0440\u0432\u044b\u0432\u043e\u0434\u0430\u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430\u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u043a\u0438\u0434\u0430\u043d\u043d\u044b\u0445\u0432\u0442\u0430\u0431\u043b\u0438\u0447\u043d\u044b\u0439\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0440\u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u043a\u0438\u0434\u0430\u043d\u043d\u044b\u0445 \u0440\u0430\u0437\u044b\u043c\u0435\u043d\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0438\u043c\u0435\u043ddom \u0440\u0430\u043c\u043a\u0430 \u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435\u0440\u0435\u0433\u043b\u0430\u043c\u0435\u043d\u0442\u043d\u043e\u0433\u043e\u0437\u0430\u0434\u0430\u043d\u0438\u044f \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u043e\u0435\u0438\u043c\u044fxml \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0447\u0442\u0435\u043d\u0438\u044f\u0434\u0430\u043d\u043d\u044b\u0445 \u0441\u0432\u043e\u0434\u043d\u0430\u044f\u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u0430 \u0441\u0432\u044f\u0437\u044c\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u0432\u044b\u0431\u043e\u0440\u0430 \u0441\u0432\u044f\u0437\u044c\u043f\u043e\u0442\u0438\u043f\u0443 \u0441\u0432\u044f\u0437\u044c\u043f\u043e\u0442\u0438\u043f\u0443\u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u043a\u0438\u0434\u0430\u043d\u043d\u044b\u0445 \u0441\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u0430\u0442\u043e\u0440xdto \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043a\u043b\u0438\u0435\u043d\u0442\u0430windows \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043a\u043b\u0438\u0435\u043d\u0442\u0430\u0444\u0430\u0439\u043b \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043a\u0440\u0438\u043f\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0438 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b\u0443\u0434\u043e\u0441\u0442\u043e\u0432\u0435\u0440\u044f\u044e\u0449\u0438\u0445\u0446\u0435\u043d\u0442\u0440\u043e\u0432windows \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u044b\u0443\u0434\u043e\u0441\u0442\u043e\u0432\u0435\u0440\u044f\u044e\u0449\u0438\u0445\u0446\u0435\u043d\u0442\u0440\u043e\u0432\u0444\u0430\u0439\u043b \u0441\u0436\u0430\u0442\u0438\u0435\u0434\u0430\u043d\u043d\u044b\u0445 \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u0430\u044f\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e \u0441\u043e\u0447\u0435\u0442\u0430\u043d\u0438\u0435\u043a\u043b\u0430\u0432\u0438\u0448 \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0435\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u0430\u044f\u0434\u0430\u0442\u0430\u043d\u0430\u0447\u0430\u043b\u0430 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0439\u043f\u0435\u0440\u0438\u043e\u0434 \u0441\u0445\u0435\u043c\u0430xml \u0441\u0445\u0435\u043c\u0430\u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u043a\u0438\u0434\u0430\u043d\u043d\u044b\u0445 \u0442\u0430\u0431\u043b\u0438\u0447\u043d\u044b\u0439\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u044b\u0439\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442 \u0442\u0435\u0441\u0442\u0438\u0440\u0443\u0435\u043c\u043e\u0435\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0442\u0438\u043f\u0434\u0430\u043d\u043d\u044b\u0445xml \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439\u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0444\u0430\u0431\u0440\u0438\u043a\u0430xdto \u0444\u0430\u0439\u043b \u0444\u0430\u0439\u043b\u043e\u0432\u044b\u0439\u043f\u043e\u0442\u043e\u043a \u0444\u0430\u0441\u0435\u0442\u0434\u043b\u0438\u043d\u044bxs \u0444\u0430\u0441\u0435\u0442\u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430\u0440\u0430\u0437\u0440\u044f\u0434\u043e\u0432\u0434\u0440\u043e\u0431\u043d\u043e\u0439\u0447\u0430\u0441\u0442\u0438xs \u0444\u0430\u0441\u0435\u0442\u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0433\u043e\u0432\u043a\u043b\u044e\u0447\u0430\u044e\u0449\u0435\u0433\u043e\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044fxs \u0444\u0430\u0441\u0435\u0442\u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0433\u043e\u0438\u0441\u043a\u043b\u044e\u0447\u0430\u044e\u0449\u0435\u0433\u043e\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044fxs \u0444\u0430\u0441\u0435\u0442\u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0439\u0434\u043b\u0438\u043d\u044bxs \u0444\u0430\u0441\u0435\u0442\u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0433\u043e\u0432\u043a\u043b\u044e\u0447\u0430\u044e\u0449\u0435\u0433\u043e\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044fxs \u0444\u0430\u0441\u0435\u0442\u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0433\u043e\u0438\u0441\u043a\u043b\u044e\u0447\u0430\u044e\u0449\u0435\u0433\u043e\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044fxs \u0444\u0430\u0441\u0435\u0442\u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0439\u0434\u043b\u0438\u043d\u044bxs \u0444\u0430\u0441\u0435\u0442\u043e\u0431\u0440\u0430\u0437\u0446\u0430xs \u0444\u0430\u0441\u0435\u0442\u043e\u0431\u0449\u0435\u0433\u043e\u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430\u0440\u0430\u0437\u0440\u044f\u0434\u043e\u0432xs \u0444\u0430\u0441\u0435\u0442\u043f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044fxs \u0444\u0430\u0441\u0435\u0442\u043f\u0440\u043e\u0431\u0435\u043b\u044c\u043d\u044b\u0445\u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432xs \u0444\u0438\u043b\u044c\u0442\u0440\u0443\u0437\u043b\u043e\u0432dom \u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f\u0441\u0442\u0440\u043e\u043a\u0430 \u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442 \u0444\u0440\u0430\u0433\u043c\u0435\u043d\u0442xs \u0445\u0435\u0448\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435\u0434\u0430\u043d\u043d\u044b\u0445 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0446\u0432\u0435\u0442 \u0447\u0442\u0435\u043d\u0438\u0435fastinfoset \u0447\u0442\u0435\u043d\u0438\u0435html \u0447\u0442\u0435\u043d\u0438\u0435json \u0447\u0442\u0435\u043d\u0438\u0435xml \u0447\u0442\u0435\u043d\u0438\u0435zip\u0444\u0430\u0439\u043b\u0430 \u0447\u0442\u0435\u043d\u0438\u0435\u0434\u0430\u043d\u043d\u044b\u0445 \u0447\u0442\u0435\u043d\u0438\u0435\u0442\u0435\u043a\u0441\u0442\u0430 \u0447\u0442\u0435\u043d\u0438\u0435\u0443\u0437\u043b\u043e\u0432dom \u0448\u0440\u0438\u0444\u0442 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430\u043a\u043e\u043c\u043f\u043e\u043d\u043e\u0432\u043a\u0438\u0434\u0430\u043d\u043d\u044b\u0445 comsafearray \u0434\u0435\u0440\u0435\u0432\u043e\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u043c\u0430\u0441\u0441\u0438\u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435 \u0441\u043f\u0438\u0441\u043e\u043a\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0442\u0430\u0431\u043b\u0438\u0446\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0444\u0438\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0444\u0438\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0435\u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435 \u0444\u0438\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439\u043c\u0430\u0441\u0441\u0438\u0432 ",
literal:e},contains:[{className:"meta",begin:"#|&",end:"$",keywords:{$pattern:x,
keyword:n+"\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c\u0438\u0437\u0444\u0430\u0439\u043b\u0430 \u0432\u0435\u0431\u043a\u043b\u0438\u0435\u043d\u0442 \u0432\u043c\u0435\u0441\u0442\u043e \u0432\u043d\u0435\u0448\u043d\u0435\u0435\u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u043a\u043b\u0438\u0435\u043d\u0442 \u043a\u043e\u043d\u0435\u0446\u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u0435\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u043a\u043b\u0438\u0435\u043d\u0442 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u0435\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u0441\u0435\u0440\u0432\u0435\u0440 \u043d\u0430\u043a\u043b\u0438\u0435\u043d\u0442\u0435 \u043d\u0430\u043a\u043b\u0438\u0435\u043d\u0442\u0435\u043d\u0430\u0441\u0435\u0440\u0432\u0435\u0440\u0435 \u043d\u0430\u043a\u043b\u0438\u0435\u043d\u0442\u0435\u043d\u0430\u0441\u0435\u0440\u0432\u0435\u0440\u0435\u0431\u0435\u0437\u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430 \u043d\u0430\u0441\u0435\u0440\u0432\u0435\u0440\u0435 \u043d\u0430\u0441\u0435\u0440\u0432\u0435\u0440\u0435\u0431\u0435\u0437\u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430 \u043e\u0431\u043b\u0430\u0441\u0442\u044c \u043f\u0435\u0440\u0435\u0434 \u043f\u043e\u0441\u043b\u0435 \u0441\u0435\u0440\u0432\u0435\u0440 \u0442\u043e\u043b\u0441\u0442\u044b\u0439\u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0431\u044b\u0447\u043d\u043e\u0435\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0442\u043e\u043b\u0441\u0442\u044b\u0439\u043a\u043b\u0438\u0435\u043d\u0442\u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c\u043e\u0435\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0442\u043e\u043d\u043a\u0438\u0439\u043a\u043b\u0438\u0435\u043d\u0442 "
},contains:[m]},{className:"function",variants:[{
begin:"\u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0430|\u0444\u0443\u043d\u043a\u0446\u0438\u044f",
end:"\\)",
keywords:"\u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u044f"
},{
begin:"\u043a\u043e\u043d\u0435\u0446\u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u044b|\u043a\u043e\u043d\u0435\u0446\u0444\u0443\u043d\u043a\u0446\u0438\u0438",
keywords:"\u043a\u043e\u043d\u0435\u0446\u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u044b \u043a\u043e\u043d\u0435\u0446\u0444\u0443\u043d\u043a\u0446\u0438\u0438"
}],contains:[{begin:"\\(",end:"\\)",endsParent:!0,contains:[{className:"params",
begin:x,end:",",excludeEnd:!0,endsWithParent:!0,keywords:{$pattern:x,
keyword:"\u0437\u043d\u0430\u0447",literal:e},contains:[o,t,a]},m]
},s.inherit(s.TITLE_MODE,{begin:x})]},m,{className:"symbol",begin:"~",end:";|:",
excludeEnd:!0},o,t,a]}}})();hljs.registerLanguage("1c",s)})();/*! `bash` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict";return e=>{const s=e.regex,t={},n={begin:/\$\{/,
end:/\}/,contains:["self",{begin:/:-/,contains:[t]}]};Object.assign(t,{
className:"variable",variants:[{
begin:s.concat(/\$[\w\d#@][\w\d_]*/,"(?![\\w\\d])(?![$])")},n]});const a={
className:"subst",begin:/\$\(/,end:/\)/,contains:[e.BACKSLASH_ESCAPE]},i={
begin:/<<-?\s*(?=\w+)/,starts:{contains:[e.END_SAME_AS_BEGIN({begin:/(\w+)/,
end:/(\w+)/,className:"string"})]}},c={className:"string",begin:/"/,end:/"/,
contains:[e.BACKSLASH_ESCAPE,t,a]};a.contains.push(c);const o={begin:/\$\(\(/,
end:/\)\)/,contains:[{begin:/\d+#[0-9a-f]+/,className:"number"},e.NUMBER_MODE,t]
},r=e.SHEBANG({binary:"(fish|bash|zsh|sh|csh|ksh|tcsh|dash|scsh)",relevance:10
}),l={className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,
contains:[e.inherit(e.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0};return{
name:"Bash",aliases:["sh"],keywords:{$pattern:/\b[a-z][a-z0-9._-]+\b/,
keyword:["if","then","else","elif","fi","for","while","in","do","done","case","esac","function"],
literal:["true","false"],
built_in:["break","cd","continue","eval","exec","exit","export","getopts","hash","pwd","readonly","return","shift","test","times","trap","umask","unset","alias","bind","builtin","caller","command","declare","echo","enable","help","let","local","logout","mapfile","printf","read","readarray","source","type","typeset","ulimit","unalias","set","shopt","autoload","bg","bindkey","bye","cap","chdir","clone","comparguments","compcall","compctl","compdescribe","compfiles","compgroups","compquote","comptags","comptry","compvalues","dirs","disable","disown","echotc","echoti","emulate","fc","fg","float","functions","getcap","getln","history","integer","jobs","kill","limit","log","noglob","popd","print","pushd","pushln","rehash","sched","setcap","setopt","stat","suspend","ttyctl","unfunction","unhash","unlimit","unsetopt","vared","wait","whence","where","which","zcompile","zformat","zftp","zle","zmodload","zparseopts","zprof","zpty","zregexparse","zsocket","zstyle","ztcp","chcon","chgrp","chown","chmod","cp","dd","df","dir","dircolors","ln","ls","mkdir","mkfifo","mknod","mktemp","mv","realpath","rm","rmdir","shred","sync","touch","truncate","vdir","b2sum","base32","base64","cat","cksum","comm","csplit","cut","expand","fmt","fold","head","join","md5sum","nl","numfmt","od","paste","ptx","pr","sha1sum","sha224sum","sha256sum","sha384sum","sha512sum","shuf","sort","split","sum","tac","tail","tr","tsort","unexpand","uniq","wc","arch","basename","chroot","date","dirname","du","echo","env","expr","factor","groups","hostid","id","link","logname","nice","nohup","nproc","pathchk","pinky","printenv","printf","pwd","readlink","runcon","seq","sleep","stat","stdbuf","stty","tee","test","timeout","tty","uname","unlink","uptime","users","who","whoami","yes"]
},contains:[r,e.SHEBANG(),l,o,e.HASH_COMMENT_MODE,i,{match:/(\/[a-z._-]+)+/},c,{
className:"",begin:/\\"/},{className:"string",begin:/'/,end:/'/},t]}}})()
;hljs.registerLanguage("bash",e)})();/*! `shell` grammar compiled for Highlight.js 11.5.1 */
(()=>{var s=(()=>{"use strict";return s=>({name:"Shell Session",
aliases:["console","shellsession"],contains:[{className:"meta.prompt",
begin:/^\s{0,3}[/~\w\d[\]()@-]*[>%$#][ ]?/,starts:{end:/[^\\](?=\s*$)/,
subLanguage:"bash"}}]})})();hljs.registerLanguage("shell",s)})();/*! `less` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict"
;const e=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","p","q","quote","samp","section","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],t=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"],r=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"],i=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"],o=["align-content","align-items","align-self","all","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","block-size","border","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","content-visibility","counter-increment","counter-reset","cue","cue-after","cue-before","cursor","direction","display","empty-cells","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flow","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-size","font-size-adjust","font-smoothing","font-stretch","font-style","font-synthesis","font-variant","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","inline-size","isolation","justify-content","left","letter-spacing","line-break","line-height","list-style","list-style-image","list-style-position","list-style-type","margin","margin-block","margin-block-end","margin-block-start","margin-bottom","margin-inline","margin-inline-end","margin-inline-start","margin-left","margin-right","margin-top","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-wrap","overflow-x","overflow-y","padding","padding-block","padding-block-end","padding-block-start","padding-bottom","padding-inline","padding-inline-end","padding-inline-start","padding-left","padding-right","padding-top","page-break-after","page-break-before","page-break-inside","pause","pause-after","pause-before","perspective","perspective-origin","pointer-events","position","quotes","resize","rest","rest-after","rest-before","right","row-gap","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","scrollbar-color","scrollbar-gutter","scrollbar-width","shape-image-threshold","shape-margin","shape-outside","speak","speak-as","src","tab-size","table-layout","text-align","text-align-all","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-transform","text-underline-position","top","transform","transform-box","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","z-index"].reverse(),n=r.concat(i)
;return a=>{const l=(e=>({IMPORTANT:{scope:"meta",begin:"!important"},
BLOCK_COMMENT:e.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:"number",
begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{
className:"built_in",begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{
scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",
contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{
scope:"number",
begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z][A-Za-z0-9_-]*/}
}))(a),s=n,d="([\\w-]+|@\\{[\\w-]+\\})",c=[],g=[],b=e=>({className:"string",
begin:"~?"+e+".*?"+e}),m=(e,t,r)=>({className:e,begin:t,relevance:r}),p={
$pattern:/[a-z-]+/,keyword:"and or not only",attribute:t.join(" ")},u={
begin:"\\(",end:"\\)",contains:g,keywords:p,relevance:0}
;g.push(a.C_LINE_COMMENT_MODE,a.C_BLOCK_COMMENT_MODE,b("'"),b('"'),l.CSS_NUMBER_MODE,{
begin:"(url|data-uri)\\(",starts:{className:"string",end:"[\\)\\n]",
excludeEnd:!0}
},l.HEXCOLOR,u,m("variable","@@?[\\w-]+",10),m("variable","@\\{[\\w-]+\\}"),m("built_in","~?`[^`]*?`"),{
className:"attribute",begin:"[\\w-]+\\s*:",end:":",returnBegin:!0,excludeEnd:!0
},l.IMPORTANT);const h=g.concat({begin:/\{/,end:/\}/,contains:c}),f={
beginKeywords:"when",endsWithParent:!0,contains:[{beginKeywords:"and not"
}].concat(g)},k={begin:d+"\\s*:",returnBegin:!0,end:/[;}]/,relevance:0,
contains:[{begin:/-(webkit|moz|ms|o)-/},l.CSS_VARIABLE,{className:"attribute",
begin:"\\b("+o.join("|")+")\\b",end:/(?=:)/,starts:{endsWithParent:!0,
illegal:"[<=$]",relevance:0,contains:g}}]},w={className:"keyword",
begin:"@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",
starts:{end:"[;{}]",keywords:p,returnEnd:!0,contains:g,relevance:0}},v={
className:"variable",variants:[{begin:"@[\\w-]+\\s*:",relevance:15},{
begin:"@[\\w-]+"}],starts:{end:"[;}]",returnEnd:!0,contains:h}},y={variants:[{
begin:"[\\.#:&\\[>]",end:"[;{}]"},{begin:d,end:/\{/}],returnBegin:!0,
returnEnd:!0,illegal:"[<='$\"]",relevance:0,
contains:[a.C_LINE_COMMENT_MODE,a.C_BLOCK_COMMENT_MODE,f,m("keyword","all\\b"),m("variable","@\\{[\\w-]+\\}"),{
begin:"\\b("+e.join("|")+")\\b",className:"selector-tag"
},l.CSS_NUMBER_MODE,m("selector-tag",d,0),m("selector-id","#"+d),m("selector-class","\\."+d,0),m("selector-tag","&",0),l.ATTRIBUTE_SELECTOR_MODE,{
className:"selector-pseudo",begin:":("+r.join("|")+")"},{
className:"selector-pseudo",begin:":(:)?("+i.join("|")+")"},{begin:/\(/,
end:/\)/,relevance:0,contains:h},{begin:"!important"},l.FUNCTION_DISPATCH]},x={
begin:`[\\w-]+:(:)?(${s.join("|")})`,returnBegin:!0,contains:[y]}
;return c.push(a.C_LINE_COMMENT_MODE,a.C_BLOCK_COMMENT_MODE,w,v,x,k,y),{
name:"Less",case_insensitive:!0,illegal:"[=>'/<($\"]",contains:c}}})()
;hljs.registerLanguage("less",e)})();/*! `dns` grammar compiled for Highlight.js 11.5.1 */
(()=>{var d=(()=>{"use strict";return d=>({name:"DNS Zone",
aliases:["bind","zone"],
keywords:["IN","A","AAAA","AFSDB","APL","CAA","CDNSKEY","CDS","CERT","CNAME","DHCID","DLV","DNAME","DNSKEY","DS","HIP","IPSECKEY","KEY","KX","LOC","MX","NAPTR","NS","NSEC","NSEC3","NSEC3PARAM","PTR","RRSIG","RP","SIG","SOA","SRV","SSHFP","TA","TKEY","TLSA","TSIG","TXT"],
contains:[d.COMMENT(";","$",{relevance:0}),{className:"meta",
begin:/^\$(TTL|GENERATE|INCLUDE|ORIGIN)\b/},{className:"number",
begin:"((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:)))\\b"
},{className:"number",
begin:"((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]).){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\b"
},d.inherit(d.NUMBER_MODE,{begin:/\b\d+[dhwm]?/})]})})()
;hljs.registerLanguage("dns",d)})();/*! `capnproto` grammar compiled for Highlight.js 11.5.1 */
(()=>{var t=(()=>{"use strict";return t=>{const n={variants:[{
match:[/(struct|enum|interface)/,/\s+/,t.IDENT_RE]},{
match:[/extends/,/\s*\(/,t.IDENT_RE,/\s*\)/]}],scope:{1:"keyword",
3:"title.class"}};return{name:"Cap\u2019n Proto",aliases:["capnp"],keywords:{
keyword:["struct","enum","interface","union","group","import","using","const","annotation","extends","in","of","on","as","with","from","fixed"],
type:["Void","Bool","Int8","Int16","Int32","Int64","UInt8","UInt16","UInt32","UInt64","Float32","Float64","Text","Data","AnyPointer","AnyStruct","Capability","List"],
literal:["true","false"]},
contains:[t.QUOTE_STRING_MODE,t.NUMBER_MODE,t.HASH_COMMENT_MODE,{
className:"meta",begin:/@0x[\w\d]{16};/,illegal:/\n/},{className:"symbol",
begin:/@\d+\b/},n]}}})();hljs.registerLanguage("capnproto",t)})();/*! `clean` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict";return e=>({name:"Clean",aliases:["icl","dcl"],
keywords:{
keyword:["if","let","in","with","where","case","of","class","instance","otherwise","implementation","definition","system","module","from","import","qualified","as","special","code","inline","foreign","export","ccall","stdcall","generic","derive","infix","infixl","infixr"],
built_in:"Int Real Char Bool",literal:"True False"},
contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.C_NUMBER_MODE,{
begin:"->|<-[|:]?|#!?|>>=|\\{\\||\\|\\}|:==|=:|<>"}]})})()
;hljs.registerLanguage("clean",e)})();/*! `ebnf` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict";return e=>{const a=e.COMMENT(/\(\*/,/\*\)/)
;return{name:"Extended Backus-Naur Form",illegal:/\S/,contains:[a,{
className:"attribute",begin:/^[ ]*[a-zA-Z]+([\s_-]+[a-zA-Z]+)*/},{begin:/=/,
end:/[.;]/,contains:[a,{className:"meta",begin:/\?.*\?/},{className:"string",
variants:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{begin:"`",end:"`"}]}]}]}}})()
;hljs.registerLanguage("ebnf",e)})();/*! `lua` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict";return e=>{const t="\\[=*\\[",a="\\]=*\\]",n={
begin:t,end:a,contains:["self"]
},o=[e.COMMENT("--(?!\\[=*\\[)","$"),e.COMMENT("--\\[=*\\[",a,{contains:[n],
relevance:10})];return{name:"Lua",keywords:{$pattern:e.UNDERSCORE_IDENT_RE,
literal:"true false nil",
keyword:"and break do else elseif end for goto if in local not or repeat return then until while",
built_in:"_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len __gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall arg self coroutine resume yield status wrap create running debug getupvalue debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv io lines write close flush open output type read stderr stdin input stdout popen tmpfile math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower table setn insert getn foreachi maxn foreach concat sort remove"
},contains:o.concat([{className:"function",beginKeywords:"function",end:"\\)",
contains:[e.inherit(e.TITLE_MODE,{
begin:"([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*"}),{className:"params",
begin:"\\(",endsWithParent:!0,contains:o}].concat(o)
},e.C_NUMBER_MODE,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{className:"string",
begin:t,end:a,contains:[n],relevance:5}])}}})();hljs.registerLanguage("lua",e)
})();/*! `typescript` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict"
;const e="[A-Za-z$_][0-9A-Za-z$_]*",n=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],a=["true","false","null","undefined","NaN","Infinity"],t=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],s=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],r=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],c=["arguments","this","super","console","window","document","localStorage","module","global"],i=[].concat(r,t,s)
;function o(o){const l=o.regex,d=e,b={begin:/<[A-Za-z0-9\\._:-]+/,
end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(e,n)=>{
const a=e[0].length+e.index,t=e.input[a]
;if("<"===t||","===t)return void n.ignoreMatch();let s
;">"===t&&(((e,{after:n})=>{const a="</"+e[0].slice(1)
;return-1!==e.input.indexOf(a,n)})(e,{after:a
})||n.ignoreMatch()),(s=e.input.substr(a).match(/^\s+extends\s+/))&&0===s.index&&n.ignoreMatch()
}},g={$pattern:e,keyword:n,literal:a,built_in:i,"variable.language":c
},u="\\.([0-9](_?[0-9])*)",m="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",E={
className:"number",variants:[{
begin:`(\\b(${m})((${u})|\\.)?|(${u}))[eE][+-]?([0-9](_?[0-9])*)\\b`},{
begin:`\\b(${m})\\b((${u})\\b|\\.)?|(${u})\\b`},{
begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{
begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{
begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{
begin:"\\b0[0-7]+n?\\b"}],relevance:0},y={className:"subst",begin:"\\$\\{",
end:"\\}",keywords:g,contains:[]},A={begin:"html`",end:"",starts:{end:"`",
returnEnd:!1,contains:[o.BACKSLASH_ESCAPE,y],subLanguage:"xml"}},_={
begin:"css`",end:"",starts:{end:"`",returnEnd:!1,
contains:[o.BACKSLASH_ESCAPE,y],subLanguage:"css"}},p={className:"string",
begin:"`",end:"`",contains:[o.BACKSLASH_ESCAPE,y]},N={className:"comment",
variants:[o.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{
begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",
begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,
excludeBegin:!0,relevance:0},{className:"variable",begin:d+"(?=\\s*(-)|$)",
endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]
}),o.C_BLOCK_COMMENT_MODE,o.C_LINE_COMMENT_MODE]
},f=[o.APOS_STRING_MODE,o.QUOTE_STRING_MODE,A,_,p,E];y.contains=f.concat({
begin:/\{/,end:/\}/,keywords:g,contains:["self"].concat(f)})
;const h=[].concat(N,y.contains),v=h.concat([{begin:/\(/,end:/\)/,keywords:g,
contains:["self"].concat(h)}]),S={className:"params",begin:/\(/,end:/\)/,
excludeBegin:!0,excludeEnd:!0,keywords:g,contains:v},w={variants:[{
match:[/class/,/\s+/,d,/\s+/,/extends/,/\s+/,l.concat(d,"(",l.concat(/\./,d),")*")],
scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{
match:[/class/,/\s+/,d],scope:{1:"keyword",3:"title.class"}}]},R={relevance:0,
match:l.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
className:"title.class",keywords:{_:[...t,...s]}},x={variants:[{
match:[/function/,/\s+/,d,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],
className:{1:"keyword",3:"title.function"},label:"func.def",contains:[S],
illegal:/%/},k={
match:l.concat(/\b/,(O=[...r,"super"],l.concat("(?!",O.join("|"),")")),d,l.lookahead(/\(/)),
className:"title.function",relevance:0};var O;const I={
begin:l.concat(/\./,l.lookahead(l.concat(d,/(?![0-9A-Za-z$_(])/))),end:d,
excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},C={
match:[/get|set/,/\s+/,d,/(?=\()/],className:{1:"keyword",3:"title.function"},
contains:[{begin:/\(\)/},S]
},T="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+o.UNDERSCORE_IDENT_RE+")\\s*=>",M={
match:[/const|var|let/,/\s+/,d,/\s*/,/=\s*/,/(async\s*)?/,l.lookahead(T)],
keywords:"async",className:{1:"keyword",3:"title.function"},contains:[S]}
;return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:g,exports:{
PARAMS_CONTAINS:v,CLASS_REFERENCE:R},illegal:/#(?![$_A-z])/,
contains:[o.SHEBANG({label:"shebang",binary:"node",relevance:5}),{
label:"use_strict",className:"meta",relevance:10,
begin:/^\s*['"]use (strict|asm)['"]/
},o.APOS_STRING_MODE,o.QUOTE_STRING_MODE,A,_,p,N,E,R,{className:"attr",
begin:d+l.lookahead(":"),relevance:0},M,{
begin:"("+o.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",
keywords:"return throw case",relevance:0,contains:[N,o.REGEXP_MODE,{
className:"function",begin:T,returnBegin:!0,end:"\\s*=>",contains:[{
className:"params",variants:[{begin:o.UNDERSCORE_IDENT_RE,relevance:0},{
className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,
excludeEnd:!0,keywords:g,contains:v}]}]},{begin:/,/,relevance:0},{match:/\s+/,
relevance:0},{variants:[{begin:"<>",end:"</>"},{
match:/<[A-Za-z0-9\\._:-]+\s*\/>/},{begin:b.begin,
"on:begin":b.isTrulyOpeningTag,end:b.end}],subLanguage:"xml",contains:[{
begin:b.begin,end:b.end,skip:!0,contains:["self"]}]}]},x,{
beginKeywords:"while if switch catch for"},{
begin:"\\b(?!function)"+o.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
returnBegin:!0,label:"func.def",contains:[S,o.inherit(o.TITLE_MODE,{begin:d,
className:"title.function"})]},{match:/\.\.\./,relevance:0},I,{match:"\\$"+d,
relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},
contains:[S]},k,{relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,
className:"variable.constant"},w,C,{match:/\$[(.]/}]}}return t=>{
const s=o(t),r=["any","void","number","boolean","string","object","never","symbol","bigint","unknown"],l={
beginKeywords:"namespace",end:/\{/,excludeEnd:!0,
contains:[s.exports.CLASS_REFERENCE]},d={beginKeywords:"interface",end:/\{/,
excludeEnd:!0,keywords:{keyword:"interface extends",built_in:r},
contains:[s.exports.CLASS_REFERENCE]},b={$pattern:e,
keyword:n.concat(["type","namespace","interface","public","private","protected","implements","declare","abstract","readonly","enum","override"]),
literal:a,built_in:i.concat(r),"variable.language":c},g={className:"meta",
begin:"@[A-Za-z$_][0-9A-Za-z$_]*"},u=(e,n,a)=>{
const t=e.contains.findIndex((e=>e.label===n))
;if(-1===t)throw Error("can not find mode to replace");e.contains.splice(t,1,a)}
;return Object.assign(s.keywords,b),
s.exports.PARAMS_CONTAINS.push(g),s.contains=s.contains.concat([g,l,d]),
u(s,"shebang",t.SHEBANG()),u(s,"use_strict",{className:"meta",relevance:10,
begin:/^\s*['"]use strict['"]/
}),s.contains.find((e=>"func.def"===e.label)).relevance=0,Object.assign(s,{
name:"TypeScript",aliases:["ts","tsx"]}),s}})()
;hljs.registerLanguage("typescript",e)})();/*! `awk` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict";return e=>({name:"Awk",keywords:{
keyword:"BEGIN END if else while do for in break continue delete next nextfile function func exit|10"
},contains:[{className:"variable",variants:[{begin:/\$[\w\d#@][\w\d_]*/},{
begin:/\$\{(.*?)\}/}]},{className:"string",contains:[e.BACKSLASH_ESCAPE],
variants:[{begin:/(u|b)?r?'''/,end:/'''/,relevance:10},{begin:/(u|b)?r?"""/,
end:/"""/,relevance:10},{begin:/(u|r|ur)'/,end:/'/,relevance:10},{
begin:/(u|r|ur)"/,end:/"/,relevance:10},{begin:/(b|br)'/,end:/'/},{
begin:/(b|br)"/,end:/"/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]
},e.REGEXP_MODE,e.HASH_COMMENT_MODE,e.NUMBER_MODE]})})()
;hljs.registerLanguage("awk",e)})();/*! `php` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict";return e=>{
const t=e.regex,a=/(?![A-Za-z0-9])(?![$])/,r=t.concat(/[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/,a),n=t.concat(/(\\?[A-Z][a-z0-9_\x7f-\xff]+|\\?[A-Z]+(?=[A-Z][a-z0-9_\x7f-\xff])){1,}/,a),o={
scope:"variable",match:"\\$+"+r},c={scope:"subst",variants:[{begin:/\$\w+/},{
begin:/\{\$/,end:/\}/}]},i=e.inherit(e.APOS_STRING_MODE,{illegal:null
}),s="[ \t\n]",l={scope:"string",variants:[e.inherit(e.QUOTE_STRING_MODE,{
illegal:null,contains:e.QUOTE_STRING_MODE.contains.concat(c)
}),i,e.END_SAME_AS_BEGIN({begin:/<<<[ \t]*(\w+)\n/,end:/[ \t]*(\w+)\b/,
contains:e.QUOTE_STRING_MODE.contains.concat(c)})]},_={scope:"number",
variants:[{begin:"\\b0[bB][01]+(?:_[01]+)*\\b"},{
begin:"\\b0[oO][0-7]+(?:_[0-7]+)*\\b"},{
begin:"\\b0[xX][\\da-fA-F]+(?:_[\\da-fA-F]+)*\\b"},{
begin:"(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:[eE][+-]?\\d+)?"
}],relevance:0
},d=["false","null","true"],p=["__CLASS__","__DIR__","__FILE__","__FUNCTION__","__COMPILER_HALT_OFFSET__","__LINE__","__METHOD__","__NAMESPACE__","__TRAIT__","die","echo","exit","include","include_once","print","require","require_once","array","abstract","and","as","binary","bool","boolean","break","callable","case","catch","class","clone","const","continue","declare","default","do","double","else","elseif","empty","enddeclare","endfor","endforeach","endif","endswitch","endwhile","enum","eval","extends","final","finally","float","for","foreach","from","global","goto","if","implements","instanceof","insteadof","int","integer","interface","isset","iterable","list","match|0","mixed","new","never","object","or","private","protected","public","readonly","real","return","string","switch","throw","trait","try","unset","use","var","void","while","xor","yield"],b=["Error|0","AppendIterator","ArgumentCountError","ArithmeticError","ArrayIterator","ArrayObject","AssertionError","BadFunctionCallException","BadMethodCallException","CachingIterator","CallbackFilterIterator","CompileError","Countable","DirectoryIterator","DivisionByZeroError","DomainException","EmptyIterator","ErrorException","Exception","FilesystemIterator","FilterIterator","GlobIterator","InfiniteIterator","InvalidArgumentException","IteratorIterator","LengthException","LimitIterator","LogicException","MultipleIterator","NoRewindIterator","OutOfBoundsException","OutOfRangeException","OuterIterator","OverflowException","ParentIterator","ParseError","RangeException","RecursiveArrayIterator","RecursiveCachingIterator","RecursiveCallbackFilterIterator","RecursiveDirectoryIterator","RecursiveFilterIterator","RecursiveIterator","RecursiveIteratorIterator","RecursiveRegexIterator","RecursiveTreeIterator","RegexIterator","RuntimeException","SeekableIterator","SplDoublyLinkedList","SplFileInfo","SplFileObject","SplFixedArray","SplHeap","SplMaxHeap","SplMinHeap","SplObjectStorage","SplObserver","SplPriorityQueue","SplQueue","SplStack","SplSubject","SplTempFileObject","TypeError","UnderflowException","UnexpectedValueException","UnhandledMatchError","ArrayAccess","BackedEnum","Closure","Fiber","Generator","Iterator","IteratorAggregate","Serializable","Stringable","Throwable","Traversable","UnitEnum","WeakReference","WeakMap","Directory","__PHP_Incomplete_Class","parent","php_user_filter","self","static","stdClass"],E={
keyword:p,literal:(e=>{const t=[];return e.forEach((e=>{
t.push(e),e.toLowerCase()===e?t.push(e.toUpperCase()):t.push(e.toLowerCase())
})),t})(d),built_in:b},u=e=>e.map((e=>e.replace(/\|\d+$/,""))),g={variants:[{
match:[/new/,t.concat(s,"+"),t.concat("(?!",u(b).join("\\b|"),"\\b)"),n],scope:{
1:"keyword",4:"title.class"}}]},h=t.concat(r,"\\b(?!\\()"),m={variants:[{
match:[t.concat(/::/,t.lookahead(/(?!class\b)/)),h],scope:{2:"variable.constant"
}},{match:[/::/,/class/],scope:{2:"variable.language"}},{
match:[n,t.concat(/::/,t.lookahead(/(?!class\b)/)),h],scope:{1:"title.class",
3:"variable.constant"}},{match:[n,t.concat("::",t.lookahead(/(?!class\b)/))],
scope:{1:"title.class"}},{match:[n,/::/,/class/],scope:{1:"title.class",
3:"variable.language"}}]},I={scope:"attr",
match:t.concat(r,t.lookahead(":"),t.lookahead(/(?!::)/))},f={relevance:0,
begin:/\(/,end:/\)/,keywords:E,contains:[I,o,m,e.C_BLOCK_COMMENT_MODE,l,_,g]
},O={relevance:0,
match:[/\b/,t.concat("(?!fn\\b|function\\b|",u(p).join("\\b|"),"|",u(b).join("\\b|"),"\\b)"),r,t.concat(s,"*"),t.lookahead(/(?=\()/)],
scope:{3:"title.function.invoke"},contains:[f]};f.contains.push(O)
;const v=[I,m,e.C_BLOCK_COMMENT_MODE,l,_,g];return{case_insensitive:!1,
keywords:E,contains:[{begin:t.concat(/#\[\s*/,n),beginScope:"meta",end:/]/,
endScope:"meta",keywords:{literal:d,keyword:["new","array"]},contains:[{
begin:/\[/,end:/]/,keywords:{literal:d,keyword:["new","array"]},
contains:["self",...v]},...v,{scope:"meta",match:n}]
},e.HASH_COMMENT_MODE,e.COMMENT("//","$"),e.COMMENT("/\\*","\\*/",{contains:[{
scope:"doctag",match:"@[A-Za-z]+"}]}),{match:/__halt_compiler\(\);/,
keywords:"__halt_compiler",starts:{scope:"comment",end:e.MATCH_NOTHING_RE,
contains:[{match:/\?>/,scope:"meta",endsParent:!0}]}},{scope:"meta",variants:[{
begin:/<\?php/,relevance:10},{begin:/<\?=/},{begin:/<\?/,relevance:.1},{
begin:/\?>/}]},{scope:"variable.language",match:/\$this\b/},o,O,m,{
match:[/const/,/\s/,r],scope:{1:"keyword",3:"variable.constant"}},g,{
scope:"function",relevance:0,beginKeywords:"fn function",end:/[;{]/,
excludeEnd:!0,illegal:"[$%\\[]",contains:[{beginKeywords:"use"
},e.UNDERSCORE_TITLE_MODE,{begin:"=>",endsParent:!0},{scope:"params",
begin:"\\(",end:"\\)",excludeBegin:!0,excludeEnd:!0,keywords:E,
contains:["self",o,m,e.C_BLOCK_COMMENT_MODE,l,_]}]},{scope:"class",variants:[{
beginKeywords:"enum",illegal:/[($"]/},{beginKeywords:"class interface trait",
illegal:/[:($"]/}],relevance:0,end:/\{/,excludeEnd:!0,contains:[{
beginKeywords:"extends implements"},e.UNDERSCORE_TITLE_MODE]},{
beginKeywords:"namespace",relevance:0,end:";",illegal:/[.']/,
contains:[e.inherit(e.UNDERSCORE_TITLE_MODE,{scope:"title.class"})]},{
beginKeywords:"use",relevance:0,end:";",contains:[{
match:/\b(as|const|function)\b/,scope:"keyword"},e.UNDERSCORE_TITLE_MODE]},l,_]}
}})();hljs.registerLanguage("php",e)})();/*! `dos` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict";return e=>{const r=e.COMMENT(/^\s*@?rem\b/,/$/,{
relevance:10});return{name:"Batch file (DOS)",aliases:["bat","cmd"],
case_insensitive:!0,illegal:/\/\*/,keywords:{
keyword:["if","else","goto","for","in","do","call","exit","not","exist","errorlevel","defined","equ","neq","lss","leq","gtr","geq"],
built_in:["prn","nul","lpt3","lpt2","lpt1","con","com4","com3","com2","com1","aux","shift","cd","dir","echo","setlocal","endlocal","set","pause","copy","append","assoc","at","attrib","break","cacls","cd","chcp","chdir","chkdsk","chkntfs","cls","cmd","color","comp","compact","convert","date","dir","diskcomp","diskcopy","doskey","erase","fs","find","findstr","format","ftype","graftabl","help","keyb","label","md","mkdir","mode","more","move","path","pause","print","popd","pushd","promt","rd","recover","rem","rename","replace","restore","rmdir","shift","sort","start","subst","time","title","tree","type","ver","verify","vol","ping","net","ipconfig","taskkill","xcopy","ren","del"]
},contains:[{className:"variable",begin:/%%[^ ]|%[^ ]+?%|![^ ]+?!/},{
className:"function",begin:"^\\s*[A-Za-z._?][A-Za-z0-9_$#@~.?]*(:|\\s+label)",
end:"goto:eof",contains:[e.inherit(e.TITLE_MODE,{
begin:"([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*"}),r]},{
className:"number",begin:"\\b\\d+",relevance:0},r]}}})()
;hljs.registerLanguage("dos",e)})();/*! `erlang-repl` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict";return e=>{const n=e.regex;return{
name:"Erlang REPL",keywords:{built_in:"spawn spawn_link self",
keyword:"after and andalso|10 band begin bnot bor bsl bsr bxor case catch cond div end fun if let not of or orelse|10 query receive rem try when xor"
},contains:[{className:"meta.prompt",begin:"^[0-9]+> ",relevance:10
},e.COMMENT("%","$"),{className:"number",
begin:"\\b(\\d+(_\\d+)*#[a-fA-F0-9]+(_[a-fA-F0-9]+)*|\\d+(_\\d+)*(\\.\\d+(_\\d+)*)?([eE][-+]?\\d+)?)",
relevance:0},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{
begin:n.concat(/\?(::)?/,/([A-Z]\w*)/,/((::)[A-Z]\w*)*/)},{begin:"->"},{
begin:"ok"},{begin:"!"},{
begin:"(\\b[a-z'][a-zA-Z0-9_']*:[a-z'][a-zA-Z0-9_']*)|(\\b[a-z'][a-zA-Z0-9_']*)",
relevance:0},{begin:"[A-Z][a-zA-Z0-9_']*",relevance:0}]}}})()
;hljs.registerLanguage("erlang-repl",e)})();/*! `swift` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict";function e(e){
return e?"string"==typeof e?e:e.source:null}function a(e){return t("(?=",e,")")}
function t(...a){return a.map((a=>e(a))).join("")}function n(...a){const t=(e=>{
const a=e[e.length-1]
;return"object"==typeof a&&a.constructor===Object?(e.splice(e.length-1,1),a):{}
})(a);return"("+(t.capture?"":"?:")+a.map((a=>e(a))).join("|")+")"}
const i=e=>t(/\b/,e,/\w$/.test(e)?/\b/:/\B/),s=["Protocol","Type"].map(i),u=["init","self"].map(i),c=["Any","Self"],r=["actor","associatedtype","async","await",/as\?/,/as!/,"as","break","case","catch","class","continue","convenience","default","defer","deinit","didSet","do","dynamic","else","enum","extension","fallthrough",/fileprivate\(set\)/,"fileprivate","final","for","func","get","guard","if","import","indirect","infix",/init\?/,/init!/,"inout",/internal\(set\)/,"internal","in","is","isolated","nonisolated","lazy","let","mutating","nonmutating",/open\(set\)/,"open","operator","optional","override","postfix","precedencegroup","prefix",/private\(set\)/,"private","protocol",/public\(set\)/,"public","repeat","required","rethrows","return","set","some","static","struct","subscript","super","switch","throws","throw",/try\?/,/try!/,"try","typealias",/unowned\(safe\)/,/unowned\(unsafe\)/,"unowned","var","weak","where","while","willSet"],o=["false","nil","true"],l=["assignment","associativity","higherThan","left","lowerThan","none","right"],m=["#colorLiteral","#column","#dsohandle","#else","#elseif","#endif","#error","#file","#fileID","#fileLiteral","#filePath","#function","#if","#imageLiteral","#keyPath","#line","#selector","#sourceLocation","#warn_unqualified_access","#warning"],p=["abs","all","any","assert","assertionFailure","debugPrint","dump","fatalError","getVaList","isKnownUniquelyReferenced","max","min","numericCast","pointwiseMax","pointwiseMin","precondition","preconditionFailure","print","readLine","repeatElement","sequence","stride","swap","swift_unboxFromSwiftValueWithType","transcode","type","unsafeBitCast","unsafeDowncast","withExtendedLifetime","withUnsafeMutablePointer","withUnsafePointer","withVaList","withoutActuallyEscaping","zip"],d=n(/[/=\-+!*%<>&|^~?]/,/[\u00A1-\u00A7]/,/[\u00A9\u00AB]/,/[\u00AC\u00AE]/,/[\u00B0\u00B1]/,/[\u00B6\u00BB\u00BF\u00D7\u00F7]/,/[\u2016-\u2017]/,/[\u2020-\u2027]/,/[\u2030-\u203E]/,/[\u2041-\u2053]/,/[\u2055-\u205E]/,/[\u2190-\u23FF]/,/[\u2500-\u2775]/,/[\u2794-\u2BFF]/,/[\u2E00-\u2E7F]/,/[\u3001-\u3003]/,/[\u3008-\u3020]/,/[\u3030]/),F=n(d,/[\u0300-\u036F]/,/[\u1DC0-\u1DFF]/,/[\u20D0-\u20FF]/,/[\uFE00-\uFE0F]/,/[\uFE20-\uFE2F]/),b=t(d,F,"*"),h=n(/[a-zA-Z_]/,/[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/,/[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/,/[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/,/[\u1E00-\u1FFF]/,/[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/,/[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/,/[\u2C00-\u2DFF\u2E80-\u2FFF]/,/[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/,/[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/,/[\uFE47-\uFEFE\uFF00-\uFFFD]/),f=n(h,/\d/,/[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/),w=t(h,f,"*"),y=t(/[A-Z]/,f,"*"),g=["autoclosure",t(/convention\(/,n("swift","block","c"),/\)/),"discardableResult","dynamicCallable","dynamicMemberLookup","escaping","frozen","GKInspectable","IBAction","IBDesignable","IBInspectable","IBOutlet","IBSegueAction","inlinable","main","nonobjc","NSApplicationMain","NSCopying","NSManaged",t(/objc\(/,w,/\)/),"objc","objcMembers","propertyWrapper","requires_stored_property_inits","resultBuilder","testable","UIApplicationMain","unknown","usableFromInline"],E=["iOS","iOSApplicationExtension","macOS","macOSApplicationExtension","macCatalyst","macCatalystApplicationExtension","watchOS","watchOSApplicationExtension","tvOS","tvOSApplicationExtension","swift"]
;return e=>{const d={match:/\s+/,relevance:0},h=e.COMMENT("/\\*","\\*/",{
contains:["self"]}),v=[e.C_LINE_COMMENT_MODE,h],A={match:[/\./,n(...s,...u)],
className:{2:"keyword"}},N={match:t(/\./,n(...r)),relevance:0
},C=r.filter((e=>"string"==typeof e)).concat(["_|0"]),D={variants:[{
className:"keyword",
match:n(...r.filter((e=>"string"!=typeof e)).concat(c).map(i),...u)}]},k={
$pattern:n(/\b\w+/,/#\w+/),keyword:C.concat(m),literal:o},B=[A,N,D],_=[{
match:t(/\./,n(...p)),relevance:0},{className:"built_in",
match:t(/\b/,n(...p),/(?=\()/)}],S={match:/->/,relevance:0},M=[S,{
className:"operator",relevance:0,variants:[{match:b},{match:`\\.(\\.|${F})+`}]
}],x="([0-9a-fA-F]_*)+",I={className:"number",relevance:0,variants:[{
match:"\\b(([0-9]_*)+)(\\.(([0-9]_*)+))?([eE][+-]?(([0-9]_*)+))?\\b"},{
match:`\\b0x(${x})(\\.(${x}))?([pP][+-]?(([0-9]_*)+))?\\b`},{
match:/\b0o([0-7]_*)+\b/},{match:/\b0b([01]_*)+\b/}]},L=(e="")=>({
className:"subst",variants:[{match:t(/\\/,e,/[0\\tnr"']/)},{
match:t(/\\/,e,/u\{[0-9a-fA-F]{1,8}\}/)}]}),O=(e="")=>({className:"subst",
match:t(/\\/,e,/[\t ]*(?:[\r\n]|\r\n)/)}),T=(e="")=>({className:"subst",
label:"interpol",begin:t(/\\/,e,/\(/),end:/\)/}),$=(e="")=>({begin:t(e,/"""/),
end:t(/"""/,e),contains:[L(e),O(e),T(e)]}),j=(e="")=>({begin:t(e,/"/),
end:t(/"/,e),contains:[L(e),T(e)]}),P={className:"string",
variants:[$(),$("#"),$("##"),$("###"),j(),j("#"),j("##"),j("###")]},K={
match:t(/`/,w,/`/)},z=[K,{className:"variable",match:/\$\d+/},{
className:"variable",match:`\\$${f}+`}],q=[{match:/(@|#(un)?)available/,
className:"keyword",starts:{contains:[{begin:/\(/,end:/\)/,keywords:E,
contains:[...M,I,P]}]}},{className:"keyword",match:t(/@/,n(...g))},{
className:"meta",match:t(/@/,w)}],U={match:a(/\b[A-Z]/),relevance:0,contains:[{
className:"type",
match:t(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/,f,"+")
},{className:"type",match:y,relevance:0},{match:/[?!]+/,relevance:0},{
match:/\.\.\./,relevance:0},{match:t(/\s+&\s+/,a(y)),relevance:0}]},Z={
begin:/</,end:/>/,keywords:k,contains:[...v,...B,...q,S,U]};U.contains.push(Z)
;const V={begin:/\(/,end:/\)/,relevance:0,keywords:k,contains:["self",{
match:t(w,/\s*:/),keywords:"_|0",relevance:0
},...v,...B,..._,...M,I,P,...z,...q,U]},W={begin:/</,end:/>/,contains:[...v,U]
},G={begin:/\(/,end:/\)/,keywords:k,contains:[{
begin:n(a(t(w,/\s*:/)),a(t(w,/\s+/,w,/\s*:/))),end:/:/,relevance:0,contains:[{
className:"keyword",match:/\b_\b/},{className:"params",match:w}]
},...v,...B,...M,I,P,...q,U,V],endsParent:!0,illegal:/["']/},R={
match:[/func/,/\s+/,n(K.match,w,b)],className:{1:"keyword",3:"title.function"},
contains:[W,G,d],illegal:[/\[/,/%/]},X={
match:[/\b(?:subscript|init[?!]?)/,/\s*(?=[<(])/],className:{1:"keyword"},
contains:[W,G,d],illegal:/\[|%/},H={match:[/operator/,/\s+/,b],className:{
1:"keyword",3:"title"}},J={begin:[/precedencegroup/,/\s+/,y],className:{
1:"keyword",3:"title"},contains:[U],keywords:[...l,...o],end:/}/}
;for(const e of P.variants){const a=e.contains.find((e=>"interpol"===e.label))
;a.keywords=k;const t=[...B,..._,...M,I,P,...z];a.contains=[...t,{begin:/\(/,
end:/\)/,contains:["self",...t]}]}return{name:"Swift",keywords:k,
contains:[...v,R,X,{beginKeywords:"struct protocol class extension enum actor",
end:"\\{",excludeEnd:!0,keywords:k,contains:[e.inherit(e.TITLE_MODE,{
className:"title.class",begin:/[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/}),...B]
},H,J,{beginKeywords:"import",end:/$/,contains:[...v],relevance:0
},...B,..._,...M,I,P,...z,...q,U,V]}}})();hljs.registerLanguage("swift",e)})();/*! `elixir` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict";return e=>{
const n=e.regex,a="[a-zA-Z_][a-zA-Z0-9_.]*(!|\\?)?",i={$pattern:a,
keyword:["after","alias","and","case","catch","cond","defstruct","defguard","do","else","end","fn","for","if","import","in","not","or","quote","raise","receive","require","reraise","rescue","try","unless","unquote","unquote_splicing","use","when","with|0"],
literal:["false","nil","true"]},s={className:"subst",begin:/#\{/,end:/\}/,
keywords:i},c={match:/\\[\s\S]/,scope:"char.escape",relevance:0},r=[{begin:/"/,
end:/"/},{begin:/'/,end:/'/},{begin:/\//,end:/\//},{begin:/\|/,end:/\|/},{
begin:/\(/,end:/\)/},{begin:/\[/,end:/\]/},{begin:/\{/,end:/\}/},{begin:/</,
end:/>/}],t=e=>({scope:"char.escape",begin:n.concat(/\\/,e),relevance:0}),d={
className:"string",begin:"~[a-z](?=[/|([{<\"'])",
contains:r.map((n=>e.inherit(n,{contains:[t(n.end),c,s]})))},o={
className:"string",begin:"~[A-Z](?=[/|([{<\"'])",
contains:r.map((n=>e.inherit(n,{contains:[t(n.end)]})))},b={className:"regex",
variants:[{begin:"~r(?=[/|([{<\"'])",contains:r.map((a=>e.inherit(a,{
end:n.concat(a.end,/[uismxfU]{0,7}/),contains:[t(a.end),c,s]})))},{
begin:"~R(?=[/|([{<\"'])",contains:r.map((a=>e.inherit(a,{
end:n.concat(a.end,/[uismxfU]{0,7}/),contains:[t(a.end)]})))}]},g={
className:"string",contains:[e.BACKSLASH_ESCAPE,s],variants:[{begin:/"""/,
end:/"""/},{begin:/'''/,end:/'''/},{begin:/~S"""/,end:/"""/,contains:[]},{
begin:/~S"/,end:/"/,contains:[]},{begin:/~S'''/,end:/'''/,contains:[]},{
begin:/~S'/,end:/'/,contains:[]},{begin:/'/,end:/'/},{begin:/"/,end:/"/}]},l={
className:"function",beginKeywords:"def defp defmacro defmacrop",end:/\B\b/,
contains:[e.inherit(e.TITLE_MODE,{begin:a,endsParent:!0})]},m=e.inherit(l,{
className:"class",beginKeywords:"defimpl defmodule defprotocol defrecord",
end:/\bdo\b|$|;/}),u=[g,b,o,d,e.HASH_COMMENT_MODE,m,l,{begin:"::"},{
className:"symbol",begin:":(?![\\s:])",contains:[g,{
begin:"[a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?"
}],relevance:0},{className:"symbol",begin:a+":(?!:)",relevance:0},{
className:"title.class",begin:/(\b[A-Z][a-zA-Z0-9_]+)/,relevance:0},{
className:"number",
begin:"(\\b0o[0-7_]+)|(\\b0b[01_]+)|(\\b0x[0-9a-fA-F_]+)|(-?\\b[0-9][0-9_]*(\\.[0-9_]+([eE][-+]?[0-9]+)?)?)",
relevance:0},{className:"variable",begin:"(\\$\\W)|((\\$|@@?)(\\w+))"}]
;return s.contains=u,{name:"Elixir",aliases:["ex","exs"],keywords:i,contains:u}}
})();hljs.registerLanguage("elixir",e)})();/*! `cal` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict";return e=>{
const n=e.regex,a=["div","mod","in","and","or","not","xor","asserterror","begin","case","do","downto","else","end","exit","for","local","if","of","repeat","then","to","until","while","with","var"],r=[e.C_LINE_COMMENT_MODE,e.COMMENT(/\{/,/\}/,{
relevance:0}),e.COMMENT(/\(\*/,/\*\)/,{relevance:10})],t={className:"string",
begin:/'/,end:/'/,contains:[{begin:/''/}]},s={className:"string",begin:/(#\d+)+/
},i={match:[/procedure/,/\s+/,/[a-zA-Z_][\w@]*/,/\s*/],scope:{1:"keyword",
3:"title.function"},contains:[{className:"params",begin:/\(/,end:/\)/,
keywords:a,contains:[t,s,e.NUMBER_MODE]},...r]},o={
match:[/OBJECT/,/\s+/,n.either("Table","Form","Report","Dataport","Codeunit","XMLport","MenuSuite","Page","Query"),/\s+/,/\d+/,/\s+(?=[^\s])/,/.*/,/$/],
relevance:3,scope:{1:"keyword",3:"type",5:"number",7:"title"}};return{
name:"C/AL",case_insensitive:!0,keywords:{keyword:a,literal:"false true"},
illegal:/\/\*/,contains:[{match:/[\w]+(?=\=)/,scope:"attribute",relevance:0
},t,s,{className:"number",begin:"\\b\\d+(\\.\\d+)?(DT|D|T)",relevance:0},{
className:"string",begin:'"',end:'"'},e.NUMBER_MODE,o,i]}}})()
;hljs.registerLanguage("cal",e)})();/*! `ruby` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict";return e=>{
const n=e.regex,a="([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)",s=n.either(/\b([A-Z]+[a-z0-9]+)+/,/\b([A-Z]+[a-z0-9]+)+[A-Z]+/),i=n.concat(s,/(::\w+)*/),r={
"variable.constant":["__FILE__","__LINE__"],
"variable.language":["self","super"],
keyword:["alias","and","attr_accessor","attr_reader","attr_writer","begin","BEGIN","break","case","class","defined","do","else","elsif","end","END","ensure","for","if","in","include","module","next","not","or","redo","require","rescue","retry","return","then","undef","unless","until","when","while","yield"],
built_in:["proc","lambda"],literal:["true","false","nil"]},c={
className:"doctag",begin:"@[A-Za-z]+"},t={begin:"#<",end:">"
},b=[e.COMMENT("#","$",{contains:[c]}),e.COMMENT("^=begin","^=end",{
contains:[c],relevance:10}),e.COMMENT("^__END__",e.MATCH_NOTHING_RE)],l={
className:"subst",begin:/#\{/,end:/\}/,keywords:r},d={className:"string",
contains:[e.BACKSLASH_ESCAPE,l],variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/
},{begin:/`/,end:/`/},{begin:/%[qQwWx]?\(/,end:/\)/},{begin:/%[qQwWx]?\[/,
end:/\]/},{begin:/%[qQwWx]?\{/,end:/\}/},{begin:/%[qQwWx]?</,end:/>/},{
begin:/%[qQwWx]?\//,end:/\//},{begin:/%[qQwWx]?%/,end:/%/},{begin:/%[qQwWx]?-/,
end:/-/},{begin:/%[qQwWx]?\|/,end:/\|/},{begin:/\B\?(\\\d{1,3})/},{
begin:/\B\?(\\x[A-Fa-f0-9]{1,2})/},{begin:/\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/},{
begin:/\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/},{
begin:/\B\?\\(c|C-)[\x20-\x7e]/},{begin:/\B\?\\?\S/},{
begin:n.concat(/<<[-~]?'?/,n.lookahead(/(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b/)),
contains:[e.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,
contains:[e.BACKSLASH_ESCAPE,l]})]}]},g="[0-9](_?[0-9])*",o={className:"number",
relevance:0,variants:[{
begin:`\\b([1-9](_?[0-9])*|0)(\\.(${g}))?([eE][+-]?(${g})|r)?i?\\b`},{
begin:"\\b0[dD][0-9](_?[0-9])*r?i?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*r?i?\\b"
},{begin:"\\b0[oO][0-7](_?[0-7])*r?i?\\b"},{
begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b"},{
begin:"\\b0(_?[0-7])+r?i?\\b"}]},_={variants:[{match:/\(\)/},{
className:"params",begin:/\(/,end:/(?=\))/,excludeBegin:!0,endsParent:!0,
keywords:r}]},u=[d,{variants:[{match:[/class\s+/,i,/\s+<\s+/,i]},{
match:[/class\s+/,i]}],scope:{2:"title.class",4:"title.class.inherited"},
keywords:r},{relevance:0,match:[i,/\.new[ (]/],scope:{1:"title.class"}},{
relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"},{
match:[/def/,/\s+/,a],scope:{1:"keyword",3:"title.function"},contains:[_]},{
begin:e.IDENT_RE+"::"},{className:"symbol",
begin:e.UNDERSCORE_IDENT_RE+"(!|\\?)?:",relevance:0},{className:"symbol",
begin:":(?!\\s)",contains:[d,{begin:a}],relevance:0},o,{className:"variable",
begin:"(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])"},{
className:"params",begin:/\|/,end:/\|/,excludeBegin:!0,excludeEnd:!0,
relevance:0,keywords:r},{begin:"("+e.RE_STARTERS_RE+"|unless)\\s*",
keywords:"unless",contains:[{className:"regexp",contains:[e.BACKSLASH_ESCAPE,l],
illegal:/\n/,variants:[{begin:"/",end:"/[a-z]*"},{begin:/%r\{/,end:/\}[a-z]*/},{
begin:"%r\\(",end:"\\)[a-z]*"},{begin:"%r!",end:"![a-z]*"},{begin:"%r\\[",
end:"\\][a-z]*"}]}].concat(t,b),relevance:0}].concat(t,b)
;l.contains=u,_.contains=u;const w=[{begin:/^\s*=>/,starts:{end:"$",contains:u}
},{className:"meta.prompt",
begin:"^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+[>*]|(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>)(?=[ ])",
starts:{end:"$",keywords:r,contains:u}}];return b.unshift(t),{name:"Ruby",
aliases:["rb","gemspec","podspec","thor","irb"],keywords:r,illegal:/\/\*/,
contains:[e.SHEBANG({binary:"ruby"})].concat(w).concat(b).concat(u)}}})()
;hljs.registerLanguage("ruby",e)})();/*! `erb` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict";return e=>({name:"ERB",subLanguage:"xml",
contains:[e.COMMENT("<%#","%>"),{begin:"<%[%=-]?",end:"[%-]?%>",
subLanguage:"ruby",excludeBegin:!0,excludeEnd:!0}]})})()
;hljs.registerLanguage("erb",e)})();/*! `cmake` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict";return e=>({name:"CMake",aliases:["cmake.in"],
case_insensitive:!0,keywords:{
keyword:"break cmake_host_system_information cmake_minimum_required cmake_parse_arguments cmake_policy configure_file continue elseif else endforeach endfunction endif endmacro endwhile execute_process file find_file find_library find_package find_path find_program foreach function get_cmake_property get_directory_property get_filename_component get_property if include include_guard list macro mark_as_advanced math message option return separate_arguments set_directory_properties set_property set site_name string unset variable_watch while add_compile_definitions add_compile_options add_custom_command add_custom_target add_definitions add_dependencies add_executable add_library add_link_options add_subdirectory add_test aux_source_directory build_command create_test_sourcelist define_property enable_language enable_testing export fltk_wrap_ui get_source_file_property get_target_property get_test_property include_directories include_external_msproject include_regular_expression install link_directories link_libraries load_cache project qt_wrap_cpp qt_wrap_ui remove_definitions set_source_files_properties set_target_properties set_tests_properties source_group target_compile_definitions target_compile_features target_compile_options target_include_directories target_link_directories target_link_libraries target_link_options target_sources try_compile try_run ctest_build ctest_configure ctest_coverage ctest_empty_binary_directory ctest_memcheck ctest_read_custom_files ctest_run_script ctest_sleep ctest_start ctest_submit ctest_test ctest_update ctest_upload build_name exec_program export_library_dependencies install_files install_programs install_targets load_command make_directory output_required_files remove subdir_depends subdirs use_mangled_mesa utility_source variable_requires write_file qt5_use_modules qt5_use_package qt5_wrap_cpp on off true false and or not command policy target test exists is_newer_than is_directory is_symlink is_absolute matches less greater equal less_equal greater_equal strless strgreater strequal strless_equal strgreater_equal version_less version_greater version_equal version_less_equal version_greater_equal in_list defined"
},contains:[{className:"variable",begin:/\$\{/,end:/\}/
},e.HASH_COMMENT_MODE,e.QUOTE_STRING_MODE,e.NUMBER_MODE]})})()
;hljs.registerLanguage("cmake",e)})();/*! `armasm` grammar compiled for Highlight.js 11.5.1 */
(()=>{var s=(()=>{"use strict";return s=>{const e={
variants:[s.COMMENT("^[ \\t]*(?=#)","$",{relevance:0,excludeBegin:!0
}),s.COMMENT("[;@]","$",{relevance:0
}),s.C_LINE_COMMENT_MODE,s.C_BLOCK_COMMENT_MODE]};return{name:"ARM Assembly",
case_insensitive:!0,aliases:["arm"],keywords:{$pattern:"\\.?"+s.IDENT_RE,
meta:".2byte .4byte .align .ascii .asciz .balign .byte .code .data .else .end .endif .endm .endr .equ .err .exitm .extern .global .hword .if .ifdef .ifndef .include .irp .long .macro .rept .req .section .set .skip .space .text .word .arm .thumb .code16 .code32 .force_thumb .thumb_func .ltorg ALIAS ALIGN ARM AREA ASSERT ATTR CN CODE CODE16 CODE32 COMMON CP DATA DCB DCD DCDU DCDO DCFD DCFDU DCI DCQ DCQU DCW DCWU DN ELIF ELSE END ENDFUNC ENDIF ENDP ENTRY EQU EXPORT EXPORTAS EXTERN FIELD FILL FUNCTION GBLA GBLL GBLS GET GLOBAL IF IMPORT INCBIN INCLUDE INFO KEEP LCLA LCLL LCLS LTORG MACRO MAP MEND MEXIT NOFP OPT PRESERVE8 PROC QN READONLY RELOC REQUIRE REQUIRE8 RLIST FN ROUT SETA SETL SETS SN SPACE SUBT THUMB THUMBX TTL WHILE WEND ",
built_in:"r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 pc lr sp ip sl sb fp a1 a2 a3 a4 v1 v2 v3 v4 v5 v6 v7 v8 f0 f1 f2 f3 f4 f5 f6 f7 p0 p1 p2 p3 p4 p5 p6 p7 p8 p9 p10 p11 p12 p13 p14 p15 c0 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15 q0 q1 q2 q3 q4 q5 q6 q7 q8 q9 q10 q11 q12 q13 q14 q15 cpsr_c cpsr_x cpsr_s cpsr_f cpsr_cx cpsr_cxs cpsr_xs cpsr_xsf cpsr_sf cpsr_cxsf spsr_c spsr_x spsr_s spsr_f spsr_cx spsr_cxs spsr_xs spsr_xsf spsr_sf spsr_cxsf s0 s1 s2 s3 s4 s5 s6 s7 s8 s9 s10 s11 s12 s13 s14 s15 s16 s17 s18 s19 s20 s21 s22 s23 s24 s25 s26 s27 s28 s29 s30 s31 d0 d1 d2 d3 d4 d5 d6 d7 d8 d9 d10 d11 d12 d13 d14 d15 d16 d17 d18 d19 d20 d21 d22 d23 d24 d25 d26 d27 d28 d29 d30 d31 {PC} {VAR} {TRUE} {FALSE} {OPT} {CONFIG} {ENDIAN} {CODESIZE} {CPU} {FPU} {ARCHITECTURE} {PCSTOREOFFSET} {ARMASM_VERSION} {INTER} {ROPI} {RWPI} {SWST} {NOSWST} . @"
},contains:[{className:"keyword",
begin:"\\b(adc|(qd?|sh?|u[qh]?)?add(8|16)?|usada?8|(q|sh?|u[qh]?)?(as|sa)x|and|adrl?|sbc|rs[bc]|asr|b[lx]?|blx|bxj|cbn?z|tb[bh]|bic|bfc|bfi|[su]bfx|bkpt|cdp2?|clz|clrex|cmp|cmn|cpsi[ed]|cps|setend|dbg|dmb|dsb|eor|isb|it[te]{0,3}|lsl|lsr|ror|rrx|ldm(([id][ab])|f[ds])?|ldr((s|ex)?[bhd])?|movt?|mvn|mra|mar|mul|[us]mull|smul[bwt][bt]|smu[as]d|smmul|smmla|mla|umlaal|smlal?([wbt][bt]|d)|mls|smlsl?[ds]|smc|svc|sev|mia([bt]{2}|ph)?|mrr?c2?|mcrr2?|mrs|msr|orr|orn|pkh(tb|bt)|rbit|rev(16|sh)?|sel|[su]sat(16)?|nop|pop|push|rfe([id][ab])?|stm([id][ab])?|str(ex)?[bhd]?|(qd?)?sub|(sh?|q|u[qh]?)?sub(8|16)|[su]xt(a?h|a?b(16)?)|srs([id][ab])?|swpb?|swi|smi|tst|teq|wfe|wfi|yield)(eq|ne|cs|cc|mi|pl|vs|vc|hi|ls|ge|lt|gt|le|al|hs|lo)?[sptrx]?(?=\\s)"
},e,s.QUOTE_STRING_MODE,{className:"string",begin:"'",end:"[^\\\\]'",relevance:0
},{className:"title",begin:"\\|",end:"\\|",illegal:"\\n",relevance:0},{
className:"number",variants:[{begin:"[#$=]?0x[0-9a-f]+"},{begin:"[#$=]?0b[01]+"
},{begin:"[#$=]\\d+"},{begin:"\\b\\d+"}],relevance:0},{className:"symbol",
variants:[{begin:"^[ \\t]*[a-z_\\.\\$][a-z0-9_\\.\\$]+:"},{
begin:"^[a-z_\\.\\$][a-z0-9_\\.\\$]+"},{begin:"[=#]\\w+"}],relevance:0}]}}})()
;hljs.registerLanguage("armasm",s)})();/*! `excel` grammar compiled for Highlight.js 11.5.1 */
(()=>{var E=(()=>{"use strict";return E=>({name:"Excel formulae",
aliases:["xlsx","xls"],case_insensitive:!0,keywords:{$pattern:/[a-zA-Z][\w\.]*/,
built_in:["ABS","ACCRINT","ACCRINTM","ACOS","ACOSH","ACOT","ACOTH","AGGREGATE","ADDRESS","AMORDEGRC","AMORLINC","AND","ARABIC","AREAS","ASC","ASIN","ASINH","ATAN","ATAN2","ATANH","AVEDEV","AVERAGE","AVERAGEA","AVERAGEIF","AVERAGEIFS","BAHTTEXT","BASE","BESSELI","BESSELJ","BESSELK","BESSELY","BETADIST","BETA.DIST","BETAINV","BETA.INV","BIN2DEC","BIN2HEX","BIN2OCT","BINOMDIST","BINOM.DIST","BINOM.DIST.RANGE","BINOM.INV","BITAND","BITLSHIFT","BITOR","BITRSHIFT","BITXOR","CALL","CEILING","CEILING.MATH","CEILING.PRECISE","CELL","CHAR","CHIDIST","CHIINV","CHITEST","CHISQ.DIST","CHISQ.DIST.RT","CHISQ.INV","CHISQ.INV.RT","CHISQ.TEST","CHOOSE","CLEAN","CODE","COLUMN","COLUMNS","COMBIN","COMBINA","COMPLEX","CONCAT","CONCATENATE","CONFIDENCE","CONFIDENCE.NORM","CONFIDENCE.T","CONVERT","CORREL","COS","COSH","COT","COTH","COUNT","COUNTA","COUNTBLANK","COUNTIF","COUNTIFS","COUPDAYBS","COUPDAYS","COUPDAYSNC","COUPNCD","COUPNUM","COUPPCD","COVAR","COVARIANCE.P","COVARIANCE.S","CRITBINOM","CSC","CSCH","CUBEKPIMEMBER","CUBEMEMBER","CUBEMEMBERPROPERTY","CUBERANKEDMEMBER","CUBESET","CUBESETCOUNT","CUBEVALUE","CUMIPMT","CUMPRINC","DATE","DATEDIF","DATEVALUE","DAVERAGE","DAY","DAYS","DAYS360","DB","DBCS","DCOUNT","DCOUNTA","DDB","DEC2BIN","DEC2HEX","DEC2OCT","DECIMAL","DEGREES","DELTA","DEVSQ","DGET","DISC","DMAX","DMIN","DOLLAR","DOLLARDE","DOLLARFR","DPRODUCT","DSTDEV","DSTDEVP","DSUM","DURATION","DVAR","DVARP","EDATE","EFFECT","ENCODEURL","EOMONTH","ERF","ERF.PRECISE","ERFC","ERFC.PRECISE","ERROR.TYPE","EUROCONVERT","EVEN","EXACT","EXP","EXPON.DIST","EXPONDIST","FACT","FACTDOUBLE","FALSE|0","F.DIST","FDIST","F.DIST.RT","FILTERXML","FIND","FINDB","F.INV","F.INV.RT","FINV","FISHER","FISHERINV","FIXED","FLOOR","FLOOR.MATH","FLOOR.PRECISE","FORECAST","FORECAST.ETS","FORECAST.ETS.CONFINT","FORECAST.ETS.SEASONALITY","FORECAST.ETS.STAT","FORECAST.LINEAR","FORMULATEXT","FREQUENCY","F.TEST","FTEST","FV","FVSCHEDULE","GAMMA","GAMMA.DIST","GAMMADIST","GAMMA.INV","GAMMAINV","GAMMALN","GAMMALN.PRECISE","GAUSS","GCD","GEOMEAN","GESTEP","GETPIVOTDATA","GROWTH","HARMEAN","HEX2BIN","HEX2DEC","HEX2OCT","HLOOKUP","HOUR","HYPERLINK","HYPGEOM.DIST","HYPGEOMDIST","IF","IFERROR","IFNA","IFS","IMABS","IMAGINARY","IMARGUMENT","IMCONJUGATE","IMCOS","IMCOSH","IMCOT","IMCSC","IMCSCH","IMDIV","IMEXP","IMLN","IMLOG10","IMLOG2","IMPOWER","IMPRODUCT","IMREAL","IMSEC","IMSECH","IMSIN","IMSINH","IMSQRT","IMSUB","IMSUM","IMTAN","INDEX","INDIRECT","INFO","INT","INTERCEPT","INTRATE","IPMT","IRR","ISBLANK","ISERR","ISERROR","ISEVEN","ISFORMULA","ISLOGICAL","ISNA","ISNONTEXT","ISNUMBER","ISODD","ISREF","ISTEXT","ISO.CEILING","ISOWEEKNUM","ISPMT","JIS","KURT","LARGE","LCM","LEFT","LEFTB","LEN","LENB","LINEST","LN","LOG","LOG10","LOGEST","LOGINV","LOGNORM.DIST","LOGNORMDIST","LOGNORM.INV","LOOKUP","LOWER","MATCH","MAX","MAXA","MAXIFS","MDETERM","MDURATION","MEDIAN","MID","MIDBs","MIN","MINIFS","MINA","MINUTE","MINVERSE","MIRR","MMULT","MOD","MODE","MODE.MULT","MODE.SNGL","MONTH","MROUND","MULTINOMIAL","MUNIT","N","NA","NEGBINOM.DIST","NEGBINOMDIST","NETWORKDAYS","NETWORKDAYS.INTL","NOMINAL","NORM.DIST","NORMDIST","NORMINV","NORM.INV","NORM.S.DIST","NORMSDIST","NORM.S.INV","NORMSINV","NOT","NOW","NPER","NPV","NUMBERVALUE","OCT2BIN","OCT2DEC","OCT2HEX","ODD","ODDFPRICE","ODDFYIELD","ODDLPRICE","ODDLYIELD","OFFSET","OR","PDURATION","PEARSON","PERCENTILE.EXC","PERCENTILE.INC","PERCENTILE","PERCENTRANK.EXC","PERCENTRANK.INC","PERCENTRANK","PERMUT","PERMUTATIONA","PHI","PHONETIC","PI","PMT","POISSON.DIST","POISSON","POWER","PPMT","PRICE","PRICEDISC","PRICEMAT","PROB","PRODUCT","PROPER","PV","QUARTILE","QUARTILE.EXC","QUARTILE.INC","QUOTIENT","RADIANS","RAND","RANDBETWEEN","RANK.AVG","RANK.EQ","RANK","RATE","RECEIVED","REGISTER.ID","REPLACE","REPLACEB","REPT","RIGHT","RIGHTB","ROMAN","ROUND","ROUNDDOWN","ROUNDUP","ROW","ROWS","RRI","RSQ","RTD","SEARCH","SEARCHB","SEC","SECH","SECOND","SERIESSUM","SHEET","SHEETS","SIGN","SIN","SINH","SKEW","SKEW.P","SLN","SLOPE","SMALL","SQL.REQUEST","SQRT","SQRTPI","STANDARDIZE","STDEV","STDEV.P","STDEV.S","STDEVA","STDEVP","STDEVPA","STEYX","SUBSTITUTE","SUBTOTAL","SUM","SUMIF","SUMIFS","SUMPRODUCT","SUMSQ","SUMX2MY2","SUMX2PY2","SUMXMY2","SWITCH","SYD","T","TAN","TANH","TBILLEQ","TBILLPRICE","TBILLYIELD","T.DIST","T.DIST.2T","T.DIST.RT","TDIST","TEXT","TEXTJOIN","TIME","TIMEVALUE","T.INV","T.INV.2T","TINV","TODAY","TRANSPOSE","TREND","TRIM","TRIMMEAN","TRUE|0","TRUNC","T.TEST","TTEST","TYPE","UNICHAR","UNICODE","UPPER","VALUE","VAR","VAR.P","VAR.S","VARA","VARP","VARPA","VDB","VLOOKUP","WEBSERVICE","WEEKDAY","WEEKNUM","WEIBULL","WEIBULL.DIST","WORKDAY","WORKDAY.INTL","XIRR","XNPV","XOR","YEAR","YEARFRAC","YIELD","YIELDDISC","YIELDMAT","Z.TEST","ZTEST"]
},contains:[{begin:/^=/,end:/[^=]/,returnEnd:!0,illegal:/=/,relevance:10},{
className:"symbol",begin:/\b[A-Z]{1,2}\d+\b/,end:/[^\d]/,excludeEnd:!0,
relevance:0},{className:"symbol",begin:/[A-Z]{0,2}\d*:[A-Z]{0,2}\d*/,relevance:0
},E.BACKSLASH_ESCAPE,E.QUOTE_STRING_MODE,{className:"number",
begin:E.NUMBER_RE+"(%)?",relevance:0},E.COMMENT(/\bN\(/,/\)/,{excludeBegin:!0,
excludeEnd:!0,illegal:/\n/})]})})();hljs.registerLanguage("excel",E)})();/*! `python` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict";return e=>{
const n=e.regex,a=/[\p{XID_Start}_]\p{XID_Continue}*/u,i=["and","as","assert","async","await","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],s={
$pattern:/[A-Za-z]\w+|__\w+__/,keyword:i,
built_in:["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip"],
literal:["__debug__","Ellipsis","False","None","NotImplemented","True"],
type:["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union"]
},t={className:"meta",begin:/^(>>>|\.\.\.) /},r={className:"subst",begin:/\{/,
end:/\}/,keywords:s,illegal:/#/},l={begin:/\{\{/,relevance:0},b={
className:"string",contains:[e.BACKSLASH_ESCAPE],variants:[{
begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,
contains:[e.BACKSLASH_ESCAPE,t],relevance:10},{
begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,end:/"""/,
contains:[e.BACKSLASH_ESCAPE,t],relevance:10},{
begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,
contains:[e.BACKSLASH_ESCAPE,t,l,r]},{begin:/([fF][rR]|[rR][fF]|[fF])"""/,
end:/"""/,contains:[e.BACKSLASH_ESCAPE,t,l,r]},{begin:/([uU]|[rR])'/,end:/'/,
relevance:10},{begin:/([uU]|[rR])"/,end:/"/,relevance:10},{
begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])"/,
end:/"/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,
contains:[e.BACKSLASH_ESCAPE,l,r]},{begin:/([fF][rR]|[rR][fF]|[fF])"/,end:/"/,
contains:[e.BACKSLASH_ESCAPE,l,r]},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]
},o="[0-9](_?[0-9])*",c=`(\\b(${o}))?\\.(${o})|\\b(${o})\\.`,d="\\b|"+i.join("|"),g={
className:"number",relevance:0,variants:[{
begin:`(\\b(${o})|(${c}))[eE][+-]?(${o})[jJ]?(?=${d})`},{begin:`(${c})[jJ]?`},{
begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${d})`},{
begin:`\\b0[bB](_?[01])+[lL]?(?=${d})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${d})`
},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${d})`},{begin:`\\b(${o})[jJ](?=${d})`
}]},p={className:"comment",begin:n.lookahead(/# type:/),end:/$/,keywords:s,
contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},m={
className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,
end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:s,
contains:["self",t,g,b,e.HASH_COMMENT_MODE]}]};return r.contains=[b,g,t],{
name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:s,
illegal:/(<\/|->|\?)|=>/,contains:[t,g,{begin:/\bself\b/},{beginKeywords:"if",
relevance:0},b,p,e.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,a],scope:{
1:"keyword",3:"title.function"},contains:[m]},{variants:[{
match:[/\bclass/,/\s+/,a,/\s*/,/\(\s*/,a,/\s*\)/]},{match:[/\bclass/,/\s+/,a]}],
scope:{1:"keyword",3:"title.class",6:"title.class.inherited"}},{
className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[g,m,b]}]}}})()
;hljs.registerLanguage("python",e)})();/*! `autoit` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict";return e=>{const t={variants:[e.COMMENT(";","$",{
relevance:0
}),e.COMMENT("#cs","#ce"),e.COMMENT("#comments-start","#comments-end")]},r={
begin:"\\$[A-z0-9_]+"},i={className:"string",variants:[{begin:/"/,end:/"/,
contains:[{begin:/""/,relevance:0}]},{begin:/'/,end:/'/,contains:[{begin:/''/,
relevance:0}]}]},n={variants:[e.BINARY_NUMBER_MODE,e.C_NUMBER_MODE]};return{
name:"AutoIt",case_insensitive:!0,illegal:/\/\*/,keywords:{
keyword:"ByRef Case Const ContinueCase ContinueLoop Dim Do Else ElseIf EndFunc EndIf EndSelect EndSwitch EndWith Enum Exit ExitLoop For Func Global If In Local Next ReDim Return Select Static Step Switch Then To Until Volatile WEnd While With",
built_in:"Abs ACos AdlibRegister AdlibUnRegister Asc AscW ASin Assign ATan AutoItSetOption AutoItWinGetTitle AutoItWinSetTitle Beep Binary BinaryLen BinaryMid BinaryToString BitAND BitNOT BitOR BitRotate BitShift BitXOR BlockInput Break Call CDTray Ceiling Chr ChrW ClipGet ClipPut ConsoleRead ConsoleWrite ConsoleWriteError ControlClick ControlCommand ControlDisable ControlEnable ControlFocus ControlGetFocus ControlGetHandle ControlGetPos ControlGetText ControlHide ControlListView ControlMove ControlSend ControlSetText ControlShow ControlTreeView Cos Dec DirCopy DirCreate DirGetSize DirMove DirRemove DllCall DllCallAddress DllCallbackFree DllCallbackGetPtr DllCallbackRegister DllClose DllOpen DllStructCreate DllStructGetData DllStructGetPtr DllStructGetSize DllStructSetData DriveGetDrive DriveGetFileSystem DriveGetLabel DriveGetSerial DriveGetType DriveMapAdd DriveMapDel DriveMapGet DriveSetLabel DriveSpaceFree DriveSpaceTotal DriveStatus EnvGet EnvSet EnvUpdate Eval Execute Exp FileChangeDir FileClose FileCopy FileCreateNTFSLink FileCreateShortcut FileDelete FileExists FileFindFirstFile FileFindNextFile FileFlush FileGetAttrib FileGetEncoding FileGetLongName FileGetPos FileGetShortcut FileGetShortName FileGetSize FileGetTime FileGetVersion FileInstall FileMove FileOpen FileOpenDialog FileRead FileReadLine FileReadToArray FileRecycle FileRecycleEmpty FileSaveDialog FileSelectFolder FileSetAttrib FileSetEnd FileSetPos FileSetTime FileWrite FileWriteLine Floor FtpSetProxy FuncName GUICreate GUICtrlCreateAvi GUICtrlCreateButton GUICtrlCreateCheckbox GUICtrlCreateCombo GUICtrlCreateContextMenu GUICtrlCreateDate GUICtrlCreateDummy GUICtrlCreateEdit GUICtrlCreateGraphic GUICtrlCreateGroup GUICtrlCreateIcon GUICtrlCreateInput GUICtrlCreateLabel GUICtrlCreateList GUICtrlCreateListView GUICtrlCreateListViewItem GUICtrlCreateMenu GUICtrlCreateMenuItem GUICtrlCreateMonthCal GUICtrlCreateObj GUICtrlCreatePic GUICtrlCreateProgress GUICtrlCreateRadio GUICtrlCreateSlider GUICtrlCreateTab GUICtrlCreateTabItem GUICtrlCreateTreeView GUICtrlCreateTreeViewItem GUICtrlCreateUpdown GUICtrlDelete GUICtrlGetHandle GUICtrlGetState GUICtrlRead GUICtrlRecvMsg GUICtrlRegisterListViewSort GUICtrlSendMsg GUICtrlSendToDummy GUICtrlSetBkColor GUICtrlSetColor GUICtrlSetCursor GUICtrlSetData GUICtrlSetDefBkColor GUICtrlSetDefColor GUICtrlSetFont GUICtrlSetGraphic GUICtrlSetImage GUICtrlSetLimit GUICtrlSetOnEvent GUICtrlSetPos GUICtrlSetResizing GUICtrlSetState GUICtrlSetStyle GUICtrlSetTip GUIDelete GUIGetCursorInfo GUIGetMsg GUIGetStyle GUIRegisterMsg GUISetAccelerators GUISetBkColor GUISetCoord GUISetCursor GUISetFont GUISetHelp GUISetIcon GUISetOnEvent GUISetState GUISetStyle GUIStartGroup GUISwitch Hex HotKeySet HttpSetProxy HttpSetUserAgent HWnd InetClose InetGet InetGetInfo InetGetSize InetRead IniDelete IniRead IniReadSection IniReadSectionNames IniRenameSection IniWrite IniWriteSection InputBox Int IsAdmin IsArray IsBinary IsBool IsDeclared IsDllStruct IsFloat IsFunc IsHWnd IsInt IsKeyword IsNumber IsObj IsPtr IsString Log MemGetStats Mod MouseClick MouseClickDrag MouseDown MouseGetCursor MouseGetPos MouseMove MouseUp MouseWheel MsgBox Number ObjCreate ObjCreateInterface ObjEvent ObjGet ObjName OnAutoItExitRegister OnAutoItExitUnRegister Ping PixelChecksum PixelGetColor PixelSearch ProcessClose ProcessExists ProcessGetStats ProcessList ProcessSetPriority ProcessWait ProcessWaitClose ProgressOff ProgressOn ProgressSet Ptr Random RegDelete RegEnumKey RegEnumVal RegRead RegWrite Round Run RunAs RunAsWait RunWait Send SendKeepActive SetError SetExtended ShellExecute ShellExecuteWait Shutdown Sin Sleep SoundPlay SoundSetWaveVolume SplashImageOn SplashOff SplashTextOn Sqrt SRandom StatusbarGetText StderrRead StdinWrite StdioClose StdoutRead String StringAddCR StringCompare StringFormat StringFromASCIIArray StringInStr StringIsAlNum StringIsAlpha StringIsASCII StringIsDigit StringIsFloat StringIsInt StringIsLower StringIsSpace StringIsUpper StringIsXDigit StringLeft StringLen StringLower StringMid StringRegExp StringRegExpReplace StringReplace StringReverse StringRight StringSplit StringStripCR StringStripWS StringToASCIIArray StringToBinary StringTrimLeft StringTrimRight StringUpper Tan TCPAccept TCPCloseSocket TCPConnect TCPListen TCPNameToIP TCPRecv TCPSend TCPShutdown, UDPShutdown TCPStartup, UDPStartup TimerDiff TimerInit ToolTip TrayCreateItem TrayCreateMenu TrayGetMsg TrayItemDelete TrayItemGetHandle TrayItemGetState TrayItemGetText TrayItemSetOnEvent TrayItemSetState TrayItemSetText TraySetClick TraySetIcon TraySetOnEvent TraySetPauseIcon TraySetState TraySetToolTip TrayTip UBound UDPBind UDPCloseSocket UDPOpen UDPRecv UDPSend VarGetType WinActivate WinActive WinClose WinExists WinFlash WinGetCaretPos WinGetClassList WinGetClientSize WinGetHandle WinGetPos WinGetProcess WinGetState WinGetText WinGetTitle WinKill WinList WinMenuSelectItem WinMinimizeAll WinMinimizeAllUndo WinMove WinSetOnTop WinSetState WinSetTitle WinSetTrans WinWait WinWaitActive WinWaitClose WinWaitNotActive",
literal:"True False And Null Not Or Default"},contains:[t,r,i,n,{
className:"meta",begin:"#",end:"$",keywords:{
keyword:["EndRegion","forcedef","forceref","ignorefunc","include","include-once","NoTrayIcon","OnAutoItStartRegister","pragma","Region","RequireAdmin","Tidy_Off","Tidy_On","Tidy_Parameters"]
},contains:[{begin:/\\\n/,relevance:0},{beginKeywords:"include",keywords:{
keyword:"include"},end:"$",contains:[i,{className:"string",variants:[{begin:"<",
end:">"},{begin:/"/,end:/"/,contains:[{begin:/""/,relevance:0}]},{begin:/'/,
end:/'/,contains:[{begin:/''/,relevance:0}]}]}]},i,t]},{className:"symbol",
begin:"@[A-z0-9_]+"},{beginKeywords:"Func",end:"$",illegal:"\\$|\\[|%",
contains:[e.inherit(e.UNDERSCORE_TITLE_MODE,{className:"title.function"}),{
className:"params",begin:"\\(",end:"\\)",contains:[r,i,n]}]}]}}})()
;hljs.registerLanguage("autoit",e)})();/*! `accesslog` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict";return e=>{
const n=e.regex,a=["GET","POST","HEAD","PUT","DELETE","CONNECT","OPTIONS","PATCH","TRACE"]
;return{name:"Apache Access Log",contains:[{className:"number",
begin:/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(:\d{1,5})?\b/,relevance:5},{
className:"number",begin:/\b\d+\b/,relevance:0},{className:"string",
begin:n.concat(/"/,n.either(...a)),end:/"/,keywords:a,illegal:/\n/,relevance:5,
contains:[{begin:/HTTP\/[12]\.\d'/,relevance:5}]},{className:"string",
begin:/\[\d[^\]\n]{8,}\]/,illegal:/\n/,relevance:1},{className:"string",
begin:/\[/,end:/\]/,illegal:/\n/,relevance:0},{className:"string",
begin:/"Mozilla\/\d\.\d \(/,end:/"/,illegal:/\n/,relevance:3},{
className:"string",begin:/"/,end:/"/,illegal:/\n/,relevance:0}]}}})()
;hljs.registerLanguage("accesslog",e)})();/*! `avrasm` grammar compiled for Highlight.js 11.5.1 */
(()=>{var r=(()=>{"use strict";return r=>({name:"AVR Assembly",
case_insensitive:!0,keywords:{$pattern:"\\.?"+r.IDENT_RE,
keyword:"adc add adiw and andi asr bclr bld brbc brbs brcc brcs break breq brge brhc brhs brid brie brlo brlt brmi brne brpl brsh brtc brts brvc brvs bset bst call cbi cbr clc clh cli cln clr cls clt clv clz com cp cpc cpi cpse dec eicall eijmp elpm eor fmul fmuls fmulsu icall ijmp in inc jmp ld ldd ldi lds lpm lsl lsr mov movw mul muls mulsu neg nop or ori out pop push rcall ret reti rjmp rol ror sbc sbr sbrc sbrs sec seh sbi sbci sbic sbis sbiw sei sen ser ses set sev sez sleep spm st std sts sub subi swap tst wdr",
built_in:"r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 r16 r17 r18 r19 r20 r21 r22 r23 r24 r25 r26 r27 r28 r29 r30 r31 x|0 xh xl y|0 yh yl z|0 zh zl ucsr1c udr1 ucsr1a ucsr1b ubrr1l ubrr1h ucsr0c ubrr0h tccr3c tccr3a tccr3b tcnt3h tcnt3l ocr3ah ocr3al ocr3bh ocr3bl ocr3ch ocr3cl icr3h icr3l etimsk etifr tccr1c ocr1ch ocr1cl twcr twdr twar twsr twbr osccal xmcra xmcrb eicra spmcsr spmcr portg ddrg ping portf ddrf sreg sph spl xdiv rampz eicrb eimsk gimsk gicr eifr gifr timsk tifr mcucr mcucsr tccr0 tcnt0 ocr0 assr tccr1a tccr1b tcnt1h tcnt1l ocr1ah ocr1al ocr1bh ocr1bl icr1h icr1l tccr2 tcnt2 ocr2 ocdr wdtcr sfior eearh eearl eedr eecr porta ddra pina portb ddrb pinb portc ddrc pinc portd ddrd pind spdr spsr spcr udr0 ucsr0a ucsr0b ubrr0l acsr admux adcsr adch adcl porte ddre pine pinf",
meta:".byte .cseg .db .def .device .dseg .dw .endmacro .equ .eseg .exit .include .list .listmac .macro .nolist .org .set"
},contains:[r.C_BLOCK_COMMENT_MODE,r.COMMENT(";","$",{relevance:0
}),r.C_NUMBER_MODE,r.BINARY_NUMBER_MODE,{className:"number",
begin:"\\b(\\$[a-zA-Z0-9]+|0o[0-7]+)"},r.QUOTE_STRING_MODE,{className:"string",
begin:"'",end:"[^\\\\]'",illegal:"[^\\\\][^']"},{className:"symbol",
begin:"^[A-Za-z0-9_.$]+:"},{className:"meta",begin:"#",end:"$"},{
className:"subst",begin:"@[0-9]+"}]})})();hljs.registerLanguage("avrasm",r)})();/*! `dust` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict";return e=>({name:"Dust",aliases:["dst"],
case_insensitive:!0,subLanguage:"xml",contains:[{className:"template-tag",
begin:/\{[#\/]/,end:/\}/,illegal:/;/,contains:[{className:"name",
begin:/[a-zA-Z\.-]+/,starts:{endsWithParent:!0,relevance:0,
contains:[e.QUOTE_STRING_MODE]}}]},{className:"template-variable",begin:/\{/,
end:/\}/,illegal:/;/,keywords:"if eq ne lt lte gt gte select default math sep"}]
})})();hljs.registerLanguage("dust",e)})();/*! `asciidoc` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict";return e=>{const n=e.regex,a=[{
className:"strong",begin:/\*{2}([^\n]+?)\*{2}/},{className:"strong",
begin:n.concat(/\*\*/,/((\*(?!\*)|\\[^\n]|[^*\n\\])+\n)+/,/(\*(?!\*)|\\[^\n]|[^*\n\\])*/,/\*\*/),
relevance:0},{className:"strong",begin:/\B\*(\S|\S[^\n]*?\S)\*(?!\w)/},{
className:"strong",begin:/\*[^\s]([^\n]+\n)+([^\n]+)\*/}],s=[{
className:"emphasis",begin:/_{2}([^\n]+?)_{2}/},{className:"emphasis",
begin:n.concat(/__/,/((_(?!_)|\\[^\n]|[^_\n\\])+\n)+/,/(_(?!_)|\\[^\n]|[^_\n\\])*/,/__/),
relevance:0},{className:"emphasis",begin:/\b_(\S|\S[^\n]*?\S)_(?!\w)/},{
className:"emphasis",begin:/_[^\s]([^\n]+\n)+([^\n]+)_/},{className:"emphasis",
begin:"\\B'(?!['\\s])",end:"(\\n{2}|')",contains:[{begin:"\\\\'\\w",relevance:0
}],relevance:0}];return{name:"AsciiDoc",aliases:["adoc"],
contains:[e.COMMENT("^/{4,}\\n","\\n/{4,}$",{relevance:10
}),e.COMMENT("^//","$",{relevance:0}),{className:"title",begin:"^\\.\\w.*$"},{
begin:"^[=\\*]{4,}\\n",end:"\\n^[=\\*]{4,}$",relevance:10},{className:"section",
relevance:10,variants:[{begin:"^(={1,6})[ \t].+?([ \t]\\1)?$"},{
begin:"^[^\\[\\]\\n]+?\\n[=\\-~\\^\\+]{2,}$"}]},{className:"meta",
begin:"^:.+?:",end:"\\s",excludeEnd:!0,relevance:10},{className:"meta",
begin:"^\\[.+?\\]$",relevance:0},{className:"quote",begin:"^_{4,}\\n",
end:"\\n_{4,}$",relevance:10},{className:"code",begin:"^[\\-\\.]{4,}\\n",
end:"\\n[\\-\\.]{4,}$",relevance:10},{begin:"^\\+{4,}\\n",end:"\\n\\+{4,}$",
contains:[{begin:"<",end:">",subLanguage:"xml",relevance:0}],relevance:10},{
className:"bullet",begin:"^(\\*+|-+|\\.+|[^\\n]+?::)\\s+"},{className:"symbol",
begin:"^(NOTE|TIP|IMPORTANT|WARNING|CAUTION):\\s+",relevance:10},{
begin:/\\[*_`]/},{begin:/\\\\\*{2}[^\n]*?\*{2}/},{begin:/\\\\_{2}[^\n]*_{2}/},{
begin:/\\\\`{2}[^\n]*`{2}/},{begin:/[:;}][*_`](?![*_`])/},...a,...s,{
className:"string",variants:[{begin:"``.+?''"},{begin:"`.+?'"}]},{
className:"code",begin:/`{2}/,end:/(\n{2}|`{2})/},{className:"code",
begin:"(`.+?`|\\+.+?\\+)",relevance:0},{className:"code",begin:"^[ \\t]",
end:"$",relevance:0},{begin:"^'{3,}[ \\t]*$",relevance:10},{
begin:"(link:)?(http|https|ftp|file|irc|image:?):\\S+?\\[[^[]*?\\]",
returnBegin:!0,contains:[{begin:"(link|image:?):",relevance:0},{
className:"link",begin:"\\w",end:"[^\\[]+",relevance:0},{className:"string",
begin:"\\[",end:"\\]",excludeBegin:!0,excludeEnd:!0,relevance:0}],relevance:10}]
}}})();hljs.registerLanguage("asciidoc",e)})();/*! `csharp` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict";return e=>{const n={
keyword:["abstract","as","base","break","case","catch","class","const","continue","do","else","event","explicit","extern","finally","fixed","for","foreach","goto","if","implicit","in","interface","internal","is","lock","namespace","new","operator","out","override","params","private","protected","public","readonly","record","ref","return","sealed","sizeof","stackalloc","static","struct","switch","this","throw","try","typeof","unchecked","unsafe","using","virtual","void","volatile","while"].concat(["add","alias","and","ascending","async","await","by","descending","equals","from","get","global","group","init","into","join","let","nameof","not","notnull","on","or","orderby","partial","remove","select","set","unmanaged","value|0","var","when","where","with","yield"]),
built_in:["bool","byte","char","decimal","delegate","double","dynamic","enum","float","int","long","nint","nuint","object","sbyte","short","string","ulong","uint","ushort"],
literal:["default","false","null","true"]},a=e.inherit(e.TITLE_MODE,{
begin:"[a-zA-Z](\\.?\\w)*"}),i={className:"number",variants:[{
begin:"\\b(0b[01']+)"},{
begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"},{
begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
}],relevance:0},s={className:"string",begin:'@"',end:'"',contains:[{begin:'""'}]
},t=e.inherit(s,{illegal:/\n/}),r={className:"subst",begin:/\{/,end:/\}/,
keywords:n},l=e.inherit(r,{illegal:/\n/}),c={className:"string",begin:/\$"/,
end:'"',illegal:/\n/,contains:[{begin:/\{\{/},{begin:/\}\}/
},e.BACKSLASH_ESCAPE,l]},o={className:"string",begin:/\$@"/,end:'"',contains:[{
begin:/\{\{/},{begin:/\}\}/},{begin:'""'},r]},d=e.inherit(o,{illegal:/\n/,
contains:[{begin:/\{\{/},{begin:/\}\}/},{begin:'""'},l]})
;r.contains=[o,c,s,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,i,e.C_BLOCK_COMMENT_MODE],
l.contains=[d,c,t,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,i,e.inherit(e.C_BLOCK_COMMENT_MODE,{
illegal:/\n/})];const g={variants:[o,c,s,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]
},E={begin:"<",end:">",contains:[{beginKeywords:"in out"},a]
},_=e.IDENT_RE+"(<"+e.IDENT_RE+"(\\s*,\\s*"+e.IDENT_RE+")*>)?(\\[\\])?",b={
begin:"@"+e.IDENT_RE,relevance:0};return{name:"C#",aliases:["cs","c#"],
keywords:n,illegal:/::/,contains:[e.COMMENT("///","$",{returnBegin:!0,
contains:[{className:"doctag",variants:[{begin:"///",relevance:0},{
begin:"\x3c!--|--\x3e"},{begin:"</?",end:">"}]}]
}),e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"meta",begin:"#",
end:"$",keywords:{
keyword:"if else elif endif define undef warning error line region endregion pragma checksum"
}},g,i,{beginKeywords:"class interface",relevance:0,end:/[{;=]/,
illegal:/[^\s:,]/,contains:[{beginKeywords:"where class"
},a,E,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{beginKeywords:"namespace",
relevance:0,end:/[{;=]/,illegal:/[^\s:]/,
contains:[a,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{
beginKeywords:"record",relevance:0,end:/[{;=]/,illegal:/[^\s:]/,
contains:[a,E,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{className:"meta",
begin:"^\\s*\\[(?=[\\w])",excludeBegin:!0,end:"\\]",excludeEnd:!0,contains:[{
className:"string",begin:/"/,end:/"/}]},{
beginKeywords:"new return throw await else",relevance:0},{className:"function",
begin:"("+_+"\\s+)+"+e.IDENT_RE+"\\s*(<[^=]+>\\s*)?\\(",returnBegin:!0,
end:/\s*[{;=]/,excludeEnd:!0,keywords:n,contains:[{
beginKeywords:"public private protected static internal protected abstract async extern override unsafe virtual new sealed partial",
relevance:0},{begin:e.IDENT_RE+"\\s*(<[^=]+>\\s*)?\\(",returnBegin:!0,
contains:[e.TITLE_MODE,E],relevance:0},{match:/\(\)/},{className:"params",
begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:n,relevance:0,
contains:[g,i,e.C_BLOCK_COMMENT_MODE]
},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},b]}}})()
;hljs.registerLanguage("csharp",e)})();/*! `applescript` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict";return e=>{
const t=e.regex,r=e.inherit(e.QUOTE_STRING_MODE,{illegal:null}),i={
className:"params",begin:/\(/,end:/\)/,contains:["self",e.C_NUMBER_MODE,r]
},n=e.COMMENT(/--/,/$/),a=[n,e.COMMENT(/\(\*/,/\*\)/,{contains:["self",n]
}),e.HASH_COMMENT_MODE];return{name:"AppleScript",aliases:["osascript"],
keywords:{
keyword:"about above after against and around as at back before beginning behind below beneath beside between but by considering contain contains continue copy div does eighth else end equal equals error every exit fifth first for fourth from front get given global if ignoring in into is it its last local me middle mod my ninth not of on onto or over prop property put ref reference repeat returning script second set seventh since sixth some tell tenth that the|0 then third through thru timeout times to transaction try until where while whose with without",
literal:"AppleScript false linefeed return pi quote result space tab true",
built_in:"alias application boolean class constant date file integer list number real record string text activate beep count delay launch log offset read round run say summarize write character characters contents day frontmost id item length month name|0 paragraph paragraphs rest reverse running time version weekday word words year"
},contains:[r,e.C_NUMBER_MODE,{className:"built_in",
begin:t.concat(/\b/,t.either(/clipboard info/,/the clipboard/,/info for/,/list (disks|folder)/,/mount volume/,/path to/,/(close|open for) access/,/(get|set) eof/,/current date/,/do shell script/,/get volume settings/,/random number/,/set volume/,/system attribute/,/system info/,/time to GMT/,/(load|run|store) script/,/scripting components/,/ASCII (character|number)/,/localized string/,/choose (application|color|file|file name|folder|from list|remote application|URL)/,/display (alert|dialog)/),/\b/)
},{className:"built_in",begin:/^\s*return\b/},{className:"literal",
begin:/\b(text item delimiters|current application|missing value)\b/},{
className:"keyword",
begin:t.concat(/\b/,t.either(/apart from/,/aside from/,/instead of/,/out of/,/greater than/,/isn't|(doesn't|does not) (equal|come before|come after|contain)/,/(greater|less) than( or equal)?/,/(starts?|ends|begins?) with/,/contained by/,/comes (before|after)/,/a (ref|reference)/,/POSIX (file|path)/,/(date|time) string/,/quoted form/),/\b/)
},{beginKeywords:"on",illegal:/[${=;\n]/,contains:[e.UNDERSCORE_TITLE_MODE,i]
},...a],illegal:/\/\/|->|=>|\[\[/}}})();hljs.registerLanguage("applescript",e)
})();/*! `plaintext` grammar compiled for Highlight.js 11.5.1 */
(()=>{var t=(()=>{"use strict";return t=>({name:"Plain text",
aliases:["text","txt"],disableAutodetect:!0})})()
;hljs.registerLanguage("plaintext",t)})();/*! `scss` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict"
;const e=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","p","q","quote","samp","section","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],r=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"],i=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"],t=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"],o=["align-content","align-items","align-self","all","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","block-size","border","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","content-visibility","counter-increment","counter-reset","cue","cue-after","cue-before","cursor","direction","display","empty-cells","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flow","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-size","font-size-adjust","font-smoothing","font-stretch","font-style","font-synthesis","font-variant","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","inline-size","isolation","justify-content","left","letter-spacing","line-break","line-height","list-style","list-style-image","list-style-position","list-style-type","margin","margin-block","margin-block-end","margin-block-start","margin-bottom","margin-inline","margin-inline-end","margin-inline-start","margin-left","margin-right","margin-top","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-wrap","overflow-x","overflow-y","padding","padding-block","padding-block-end","padding-block-start","padding-bottom","padding-inline","padding-inline-end","padding-inline-start","padding-left","padding-right","padding-top","page-break-after","page-break-before","page-break-inside","pause","pause-after","pause-before","perspective","perspective-origin","pointer-events","position","quotes","resize","rest","rest-after","rest-before","right","row-gap","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","scrollbar-color","scrollbar-gutter","scrollbar-width","shape-image-threshold","shape-margin","shape-outside","speak","speak-as","src","tab-size","table-layout","text-align","text-align-all","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-transform","text-underline-position","top","transform","transform-box","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","z-index"].reverse()
;return n=>{const a=(e=>({IMPORTANT:{scope:"meta",begin:"!important"},
BLOCK_COMMENT:e.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:"number",
begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{
className:"built_in",begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{
scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",
contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{
scope:"number",
begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z][A-Za-z0-9_-]*/}
}))(n),l=t,s=i,d="@[a-z-]+",c={className:"variable",
begin:"(\\$[a-zA-Z-][a-zA-Z0-9_-]*)\\b",relevance:0};return{name:"SCSS",
case_insensitive:!0,illegal:"[=/|']",
contains:[n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE,a.CSS_NUMBER_MODE,{
className:"selector-id",begin:"#[A-Za-z0-9_-]+",relevance:0},{
className:"selector-class",begin:"\\.[A-Za-z0-9_-]+",relevance:0
},a.ATTRIBUTE_SELECTOR_MODE,{className:"selector-tag",
begin:"\\b("+e.join("|")+")\\b",relevance:0},{className:"selector-pseudo",
begin:":("+s.join("|")+")"},{className:"selector-pseudo",
begin:":(:)?("+l.join("|")+")"},c,{begin:/\(/,end:/\)/,
contains:[a.CSS_NUMBER_MODE]},a.CSS_VARIABLE,{className:"attribute",
begin:"\\b("+o.join("|")+")\\b"},{
begin:"\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b"
},{begin:/:/,end:/[;}{]/,
contains:[a.BLOCK_COMMENT,c,a.HEXCOLOR,a.CSS_NUMBER_MODE,n.QUOTE_STRING_MODE,n.APOS_STRING_MODE,a.IMPORTANT]
},{begin:"@(page|font-face)",keywords:{$pattern:d,keyword:"@page @font-face"}},{
begin:"@",end:"[{;]",returnBegin:!0,keywords:{$pattern:/[a-z-]+/,
keyword:"and or not only",attribute:r.join(" ")},contains:[{begin:d,
className:"keyword"},{begin:/[a-z-]+(?=:)/,className:"attribute"
},c,n.QUOTE_STRING_MODE,n.APOS_STRING_MODE,a.HEXCOLOR,a.CSS_NUMBER_MODE]
},a.FUNCTION_DISPATCH]}}})();hljs.registerLanguage("scss",e)})();/*! `yaml` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict";return e=>{
const n="true false yes no null",a="[\\w#;/?:@&=+$,.~*'()[\\]]+",s={
className:"string",relevance:0,variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/
},{begin:/\S+/}],contains:[e.BACKSLASH_ESCAPE,{className:"template-variable",
variants:[{begin:/\{\{/,end:/\}\}/},{begin:/%\{/,end:/\}/}]}]},i=e.inherit(s,{
variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/[^\s,{}[\]]+/}]}),l={
end:",",endsWithParent:!0,excludeEnd:!0,keywords:n,relevance:0},t={begin:/\{/,
end:/\}/,contains:[l],illegal:"\\n",relevance:0},g={begin:"\\[",end:"\\]",
contains:[l],illegal:"\\n",relevance:0},b=[{className:"attr",variants:[{
begin:"\\w[\\w :\\/.-]*:(?=[ \t]|$)"},{begin:'"\\w[\\w :\\/.-]*":(?=[ \t]|$)'},{
begin:"'\\w[\\w :\\/.-]*':(?=[ \t]|$)"}]},{className:"meta",begin:"^---\\s*$",
relevance:10},{className:"string",
begin:"[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"},{
begin:"<%[%=-]?",end:"[%-]?%>",subLanguage:"ruby",excludeBegin:!0,excludeEnd:!0,
relevance:0},{className:"type",begin:"!\\w+!"+a},{className:"type",
begin:"!<"+a+">"},{className:"type",begin:"!"+a},{className:"type",begin:"!!"+a
},{className:"meta",begin:"&"+e.UNDERSCORE_IDENT_RE+"$"},{className:"meta",
begin:"\\*"+e.UNDERSCORE_IDENT_RE+"$"},{className:"bullet",begin:"-(?=[ ]|$)",
relevance:0},e.HASH_COMMENT_MODE,{beginKeywords:n,keywords:{literal:n}},{
className:"number",
begin:"\\b[0-9]{4}(-[0-9][0-9]){0,2}([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?(\\.[0-9]*)?([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?\\b"
},{className:"number",begin:e.C_NUMBER_RE+"\\b",relevance:0},t,g,s],r=[...b]
;return r.pop(),r.push(i),l.contains=r,{name:"YAML",case_insensitive:!0,
aliases:["yml"],contains:b}}})();hljs.registerLanguage("yaml",e)})();/*! `css` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict"
;const e=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","p","q","quote","samp","section","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],i=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"],r=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"],t=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"],o=["align-content","align-items","align-self","all","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","block-size","border","border-block","border-block-color","border-block-end","border-block-end-color","border-block-end-style","border-block-end-width","border-block-start","border-block-start-color","border-block-start-style","border-block-start-width","border-block-style","border-block-width","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-inline","border-inline-color","border-inline-end","border-inline-end-color","border-inline-end-style","border-inline-end-width","border-inline-start","border-inline-start-color","border-inline-start-style","border-inline-start-width","border-inline-style","border-inline-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","clip-path","clip-rule","color","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","contain","content","content-visibility","counter-increment","counter-reset","cue","cue-after","cue-before","cursor","direction","display","empty-cells","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","flow","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-size","font-size-adjust","font-smoothing","font-stretch","font-style","font-synthesis","font-variant","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-variation-settings","font-weight","gap","glyph-orientation-vertical","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","inline-size","isolation","justify-content","left","letter-spacing","line-break","line-height","list-style","list-style-image","list-style-position","list-style-type","margin","margin-block","margin-block-end","margin-block-start","margin-bottom","margin-inline","margin-inline-end","margin-inline-start","margin-left","margin-right","margin-top","marks","mask","mask-border","mask-border-mode","mask-border-outset","mask-border-repeat","mask-border-slice","mask-border-source","mask-border-width","mask-clip","mask-composite","mask-image","mask-mode","mask-origin","mask-position","mask-repeat","mask-size","mask-type","max-block-size","max-height","max-inline-size","max-width","min-block-size","min-height","min-inline-size","min-width","mix-blend-mode","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-wrap","overflow-x","overflow-y","padding","padding-block","padding-block-end","padding-block-start","padding-bottom","padding-inline","padding-inline-end","padding-inline-start","padding-left","padding-right","padding-top","page-break-after","page-break-before","page-break-inside","pause","pause-after","pause-before","perspective","perspective-origin","pointer-events","position","quotes","resize","rest","rest-after","rest-before","right","row-gap","scroll-margin","scroll-margin-block","scroll-margin-block-end","scroll-margin-block-start","scroll-margin-bottom","scroll-margin-inline","scroll-margin-inline-end","scroll-margin-inline-start","scroll-margin-left","scroll-margin-right","scroll-margin-top","scroll-padding","scroll-padding-block","scroll-padding-block-end","scroll-padding-block-start","scroll-padding-bottom","scroll-padding-inline","scroll-padding-inline-end","scroll-padding-inline-start","scroll-padding-left","scroll-padding-right","scroll-padding-top","scroll-snap-align","scroll-snap-stop","scroll-snap-type","scrollbar-color","scrollbar-gutter","scrollbar-width","shape-image-threshold","shape-margin","shape-outside","speak","speak-as","src","tab-size","table-layout","text-align","text-align-all","text-align-last","text-combine-upright","text-decoration","text-decoration-color","text-decoration-line","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-indent","text-justify","text-orientation","text-overflow","text-rendering","text-shadow","text-transform","text-underline-position","top","transform","transform-box","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","writing-mode","z-index"].reverse()
;return n=>{const a=n.regex,l=(e=>({IMPORTANT:{scope:"meta",begin:"!important"},
BLOCK_COMMENT:e.C_BLOCK_COMMENT_MODE,HEXCOLOR:{scope:"number",
begin:/#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},FUNCTION_DISPATCH:{
className:"built_in",begin:/[\w-]+(?=\()/},ATTRIBUTE_SELECTOR_MODE:{
scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",
contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{
scope:"number",
begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
relevance:0},CSS_VARIABLE:{className:"attr",begin:/--[A-Za-z][A-Za-z0-9_-]*/}
}))(n),s=[n.APOS_STRING_MODE,n.QUOTE_STRING_MODE];return{name:"CSS",
case_insensitive:!0,illegal:/[=|'\$]/,keywords:{keyframePosition:"from to"},
classNameAliases:{keyframePosition:"selector-tag"},contains:[l.BLOCK_COMMENT,{
begin:/-(webkit|moz|ms|o)-(?=[a-z])/},l.CSS_NUMBER_MODE,{
className:"selector-id",begin:/#[A-Za-z0-9_-]+/,relevance:0},{
className:"selector-class",begin:"\\.[a-zA-Z-][a-zA-Z0-9_-]*",relevance:0
},l.ATTRIBUTE_SELECTOR_MODE,{className:"selector-pseudo",variants:[{
begin:":("+r.join("|")+")"},{begin:":(:)?("+t.join("|")+")"}]},l.CSS_VARIABLE,{
className:"attribute",begin:"\\b("+o.join("|")+")\\b"},{begin:/:/,end:/[;}{]/,
contains:[l.BLOCK_COMMENT,l.HEXCOLOR,l.IMPORTANT,l.CSS_NUMBER_MODE,...s,{
begin:/(url|data-uri)\(/,end:/\)/,relevance:0,keywords:{built_in:"url data-uri"
},contains:[{className:"string",begin:/[^)]/,endsWithParent:!0,excludeEnd:!0}]
},l.FUNCTION_DISPATCH]},{begin:a.lookahead(/@/),end:"[{;]",relevance:0,
illegal:/:/,contains:[{className:"keyword",begin:/@-?\w[\w]*(-\w+)*/},{
begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,keywords:{
$pattern:/[a-z-]+/,keyword:"and or not only",attribute:i.join(" ")},contains:[{
begin:/[a-z-]+(?=:)/,className:"attribute"},...s,l.CSS_NUMBER_MODE]}]},{
className:"selector-tag",begin:"\\b("+e.join("|")+")\\b"}]}}})()
;hljs.registerLanguage("css",e)})();/*! `actionscript` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict";return e=>{
const a=e.regex,t=/[a-zA-Z_$][a-zA-Z0-9_$]*/,n=a.concat(t,a.concat("(\\.",t,")*")),s={
className:"rest_arg",begin:/[.]{3}/,end:t,relevance:10};return{
name:"ActionScript",aliases:["as"],keywords:{
keyword:["as","break","case","catch","class","const","continue","default","delete","do","dynamic","each","else","extends","final","finally","for","function","get","if","implements","import","in","include","instanceof","interface","internal","is","namespace","native","new","override","package","private","protected","public","return","set","static","super","switch","this","throw","try","typeof","use","var","void","while","with"],
literal:["true","false","null","undefined"]},
contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.C_NUMBER_MODE,{
match:[/\bpackage/,/\s+/,n],className:{1:"keyword",3:"title.class"}},{
match:[/\b(?:class|interface|extends|implements)/,/\s+/,t],className:{
1:"keyword",3:"title.class"}},{className:"meta",beginKeywords:"import include",
end:/;/,keywords:{keyword:"import include"}},{beginKeywords:"function",
end:/[{;]/,excludeEnd:!0,illegal:/\S/,contains:[e.inherit(e.TITLE_MODE,{
className:"title.function"}),{className:"params",begin:/\(/,end:/\)/,
contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,s]
},{begin:a.concat(/:\s*/,/([*]|[a-zA-Z_$][a-zA-Z0-9_$]*)/)}]},e.METHOD_GUARD],
illegal:/#/}}})();hljs.registerLanguage("actionscript",e)})();/*! `dts` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict";return e=>{const a={className:"string",
variants:[e.inherit(e.QUOTE_STRING_MODE,{begin:'((u8?|U)|L)?"'}),{
begin:'(u8?|U)?R"',end:'"',contains:[e.BACKSLASH_ESCAPE]},{begin:"'\\\\?.",
end:"'",illegal:"."}]},n={className:"number",variants:[{
begin:"\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"},{begin:e.C_NUMBER_RE}],
relevance:0},s={className:"meta",begin:"#",end:"$",keywords:{
keyword:"if else elif endif define undef ifdef ifndef"},contains:[{begin:/\\\n/,
relevance:0},{beginKeywords:"include",end:"$",keywords:{keyword:"include"},
contains:[e.inherit(a,{className:"string"}),{className:"string",begin:"<",
end:">",illegal:"\\n"}]},a,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},i={
className:"variable",begin:/&[a-z\d_]*\b/};return{name:"Device Tree",contains:[{
className:"title.class",begin:/^\/(?=\s*\{)/,relevance:10},i,{
className:"keyword",begin:"/[a-z][a-z\\d-]*/"},{className:"symbol",
begin:"^\\s*[a-zA-Z_][a-zA-Z\\d_]*:"},{className:"title.class",
begin:/[a-zA-Z_][a-zA-Z\d_@-]*(?=\s\{)/,relevance:.2},{relevance:0,
match:[/[a-z][a-z-,]+/,/\s*/,/=/],scope:{1:"attr",3:"operator"}},{
match:/[a-z][a-z-,]+(?=;)/,relevance:0,scope:"attr"},{className:"params",
relevance:0,begin:"<",end:">",contains:[n,i]
},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,n,a,s,{scope:"punctuation",
relevance:0,match:/\};|[;{}]/},{begin:e.IDENT_RE+"::",keywords:""}]}}})()
;hljs.registerLanguage("dts",e)})();/*! `r` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict";return e=>{
const a=e.regex,n=/(?:(?:[a-zA-Z]|\.[._a-zA-Z])[._a-zA-Z0-9]*)|\.(?!\d)/,i=a.either(/0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/,/0[xX][0-9a-fA-F]+(?:[pP][+-]?\d+)?[Li]?/,/(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?[Li]?/),s=/[=!<>:]=|\|\||&&|:::?|<-|<<-|->>|->|\|>|[-+*\/?!$&|:<=>@^~]|\*\*/,t=a.either(/[()]/,/[{}]/,/\[\[/,/[[\]]/,/\\/,/,/)
;return{name:"R",keywords:{$pattern:n,
keyword:"function if in break next repeat else for while",
literal:"NULL NA TRUE FALSE Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10",
built_in:"LETTERS letters month.abb month.name pi T F abs acos acosh all any anyNA Arg as.call as.character as.complex as.double as.environment as.integer as.logical as.null.default as.numeric as.raw asin asinh atan atanh attr attributes baseenv browser c call ceiling class Conj cos cosh cospi cummax cummin cumprod cumsum digamma dim dimnames emptyenv exp expression floor forceAndCall gamma gc.time globalenv Im interactive invisible is.array is.atomic is.call is.character is.complex is.double is.environment is.expression is.finite is.function is.infinite is.integer is.language is.list is.logical is.matrix is.na is.name is.nan is.null is.numeric is.object is.pairlist is.raw is.recursive is.single is.symbol lazyLoadDBfetch length lgamma list log max min missing Mod names nargs nzchar oldClass on.exit pos.to.env proc.time prod quote range Re rep retracemem return round seq_along seq_len seq.int sign signif sin sinh sinpi sqrt standardGeneric substitute sum switch tan tanh tanpi tracemem trigamma trunc unclass untracemem UseMethod xtfrm"
},contains:[e.COMMENT(/#'/,/$/,{contains:[{scope:"doctag",match:/@examples/,
starts:{end:a.lookahead(a.either(/\n^#'\s*(?=@[a-zA-Z]+)/,/\n^(?!#')/)),
endsParent:!0}},{scope:"doctag",begin:"@param",end:/$/,contains:[{
scope:"variable",variants:[{match:n},{match:/`(?:\\.|[^`\\])+`/}],endsParent:!0
}]},{scope:"doctag",match:/@[a-zA-Z]+/},{scope:"keyword",match:/\\[a-zA-Z]+/}]
}),e.HASH_COMMENT_MODE,{scope:"string",contains:[e.BACKSLASH_ESCAPE],
variants:[e.END_SAME_AS_BEGIN({begin:/[rR]"(-*)\(/,end:/\)(-*)"/
}),e.END_SAME_AS_BEGIN({begin:/[rR]"(-*)\{/,end:/\}(-*)"/
}),e.END_SAME_AS_BEGIN({begin:/[rR]"(-*)\[/,end:/\](-*)"/
}),e.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\(/,end:/\)(-*)'/
}),e.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\{/,end:/\}(-*)'/
}),e.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\[/,end:/\](-*)'/}),{begin:'"',end:'"',
relevance:0},{begin:"'",end:"'",relevance:0}]},{relevance:0,variants:[{scope:{
1:"operator",2:"number"},match:[s,i]},{scope:{1:"operator",2:"number"},
match:[/%[^%]*%/,i]},{scope:{1:"punctuation",2:"number"},match:[t,i]},{scope:{
2:"number"},match:[/[^a-zA-Z0-9._]|^/,i]}]},{scope:{3:"operator"},
match:[n,/\s+/,/<-/,/\s+/]},{scope:"operator",relevance:0,variants:[{match:s},{
match:/%[^%]*%/}]},{scope:"punctuation",relevance:0,match:t},{begin:"`",end:"`",
contains:[{begin:/\\./}]}]}}})();hljs.registerLanguage("r",e)})();/*! `basic` grammar compiled for Highlight.js 11.5.1 */
(()=>{var E=(()=>{"use strict";return E=>({name:"BASIC",case_insensitive:!0,
illegal:"^.",keywords:{$pattern:"[a-zA-Z][a-zA-Z0-9_$%!#]*",
keyword:["ABS","ASC","AND","ATN","AUTO|0","BEEP","BLOAD|10","BSAVE|10","CALL","CALLS","CDBL","CHAIN","CHDIR","CHR$|10","CINT","CIRCLE","CLEAR","CLOSE","CLS","COLOR","COM","COMMON","CONT","COS","CSNG","CSRLIN","CVD","CVI","CVS","DATA","DATE$","DEFDBL","DEFINT","DEFSNG","DEFSTR","DEF|0","SEG","USR","DELETE","DIM","DRAW","EDIT","END","ENVIRON","ENVIRON$","EOF","EQV","ERASE","ERDEV","ERDEV$","ERL","ERR","ERROR","EXP","FIELD","FILES","FIX","FOR|0","FRE","GET","GOSUB|10","GOTO","HEX$","IF","THEN","ELSE|0","INKEY$","INP","INPUT","INPUT#","INPUT$","INSTR","IMP","INT","IOCTL","IOCTL$","KEY","ON","OFF","LIST","KILL","LEFT$","LEN","LET","LINE","LLIST","LOAD","LOC","LOCATE","LOF","LOG","LPRINT","USING","LSET","MERGE","MID$","MKDIR","MKD$","MKI$","MKS$","MOD","NAME","NEW","NEXT","NOISE","NOT","OCT$","ON","OR","PEN","PLAY","STRIG","OPEN","OPTION","BASE","OUT","PAINT","PALETTE","PCOPY","PEEK","PMAP","POINT","POKE","POS","PRINT","PRINT]","PSET","PRESET","PUT","RANDOMIZE","READ","REM","RENUM","RESET|0","RESTORE","RESUME","RETURN|0","RIGHT$","RMDIR","RND","RSET","RUN","SAVE","SCREEN","SGN","SHELL","SIN","SOUND","SPACE$","SPC","SQR","STEP","STICK","STOP","STR$","STRING$","SWAP","SYSTEM","TAB","TAN","TIME$","TIMER","TROFF","TRON","TO","USR","VAL","VARPTR","VARPTR$","VIEW","WAIT","WHILE","WEND","WIDTH","WINDOW","WRITE","XOR"]
},contains:[E.QUOTE_STRING_MODE,E.COMMENT("REM","$",{relevance:10
}),E.COMMENT("'","$",{relevance:0}),{className:"symbol",begin:"^[0-9]+ ",
relevance:10},{className:"number",begin:"\\b\\d+(\\.\\d+)?([edED]\\d+)?[#!]?",
relevance:0},{className:"number",begin:"(&[hH][0-9a-fA-F]{1,4})"},{
className:"number",begin:"(&[oO][0-7]{1,6})"}]})})()
;hljs.registerLanguage("basic",E)})();/*! `makefile` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict";return e=>{const i={className:"variable",
variants:[{begin:"\\$\\("+e.UNDERSCORE_IDENT_RE+"\\)",
contains:[e.BACKSLASH_ESCAPE]},{begin:/\$[@%<?\^\+\*]/}]},a={className:"string",
begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,i]},n={className:"variable",
begin:/\$\([\w-]+\s/,end:/\)/,keywords:{
built_in:"subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value"
},contains:[i]},s={begin:"^"+e.UNDERSCORE_IDENT_RE+"\\s*(?=[:+?]?=)"},r={
className:"section",begin:/^[^\s]+:/,end:/$/,contains:[i]};return{
name:"Makefile",aliases:["mk","mak","make"],keywords:{$pattern:/[\w-]+/,
keyword:"define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath"
},contains:[e.HASH_COMMENT_MODE,i,a,n,s,{className:"meta",begin:/^\.PHONY:/,
end:/$/,keywords:{$pattern:/[\.\w]+/,keyword:".PHONY"}},r]}}})()
;hljs.registerLanguage("makefile",e)})();/*! `json` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict";return e=>({name:"JSON",contains:[{
className:"attr",begin:/"(\\.|[^\\"\r\n])*"(?=\s*:)/,relevance:1.01},{
match:/[{}[\],:]/,className:"punctuation",relevance:0},e.QUOTE_STRING_MODE,{
beginKeywords:"true false null"
},e.C_NUMBER_MODE,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE],illegal:"\\S"})
})();hljs.registerLanguage("json",e)})();/*! `clojure` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict";return e=>{
const t="a-zA-Z_\\-!.?+*=<>&'",n="[#]?["+t+"]["+t+"0-9/;:$#]*",a="def defonce defprotocol defstruct defmulti defmethod defn- defn defmacro deftype defrecord",r={
$pattern:n,
built_in:a+" cond apply if-not if-let if not not= =|0 <|0 >|0 <=|0 >=|0 ==|0 +|0 /|0 *|0 -|0 rem quot neg? pos? delay? symbol? keyword? true? false? integer? empty? coll? list? set? ifn? fn? associative? sequential? sorted? counted? reversible? number? decimal? class? distinct? isa? float? rational? reduced? ratio? odd? even? char? seq? vector? string? map? nil? contains? zero? instance? not-every? not-any? libspec? -> ->> .. . inc compare do dotimes mapcat take remove take-while drop letfn drop-last take-last drop-while while intern condp case reduced cycle split-at split-with repeat replicate iterate range merge zipmap declare line-seq sort comparator sort-by dorun doall nthnext nthrest partition eval doseq await await-for let agent atom send send-off release-pending-sends add-watch mapv filterv remove-watch agent-error restart-agent set-error-handler error-handler set-error-mode! error-mode shutdown-agents quote var fn loop recur throw try monitor-enter monitor-exit macroexpand macroexpand-1 for dosync and or when when-not when-let comp juxt partial sequence memoize constantly complement identity assert peek pop doto proxy first rest cons cast coll last butlast sigs reify second ffirst fnext nfirst nnext meta with-meta ns in-ns create-ns import refer keys select-keys vals key val rseq name namespace promise into transient persistent! conj! assoc! dissoc! pop! disj! use class type num float double short byte boolean bigint biginteger bigdec print-method print-dup throw-if printf format load compile get-in update-in pr pr-on newline flush read slurp read-line subvec with-open memfn time re-find re-groups rand-int rand mod locking assert-valid-fdecl alias resolve ref deref refset swap! reset! set-validator! compare-and-set! alter-meta! reset-meta! commute get-validator alter ref-set ref-history-count ref-min-history ref-max-history ensure sync io! new next conj set! to-array future future-call into-array aset gen-class reduce map filter find empty hash-map hash-set sorted-map sorted-map-by sorted-set sorted-set-by vec vector seq flatten reverse assoc dissoc list disj get union difference intersection extend extend-type extend-protocol int nth delay count concat chunk chunk-buffer chunk-append chunk-first chunk-rest max min dec unchecked-inc-int unchecked-inc unchecked-dec-inc unchecked-dec unchecked-negate unchecked-add-int unchecked-add unchecked-subtract-int unchecked-subtract chunk-next chunk-cons chunked-seq? prn vary-meta lazy-seq spread list* str find-keyword keyword symbol gensym force rationalize"
},s={begin:n,relevance:0},o={scope:"number",relevance:0,variants:[{
match:/[-+]?0[xX][0-9a-fA-F]+N?/},{match:/[-+]?0[0-7]+N?/},{
match:/[-+]?[1-9][0-9]?[rR][0-9a-zA-Z]+N?/},{match:/[-+]?[0-9]+\/[0-9]+N?/},{
match:/[-+]?[0-9]+((\.[0-9]*([eE][+-]?[0-9]+)?M?)|([eE][+-]?[0-9]+M?|M))/},{
match:/[-+]?([1-9][0-9]*|0)N?/}]},c={scope:"character",variants:[{
match:/\\o[0-3]?[0-7]{1,2}/},{match:/\\u[0-9a-fA-F]{4}/},{
match:/\\(newline|space|tab|formfeed|backspace|return)/},{match:/\\\S/,
relevance:0}]},i={scope:"regex",begin:/#"/,end:/"/,contains:[e.BACKSLASH_ESCAPE]
},d=e.inherit(e.QUOTE_STRING_MODE,{illegal:null}),l={scope:"punctuation",
match:/,/,relevance:0},m=e.COMMENT(";","$",{relevance:0}),p={
className:"literal",begin:/\b(true|false|nil)\b/},u={
begin:"\\[|(#::?"+n+")?\\{",end:"[\\]\\}]",relevance:0},f={className:"symbol",
begin:"[:]{1,2}"+n},h={begin:"\\(",end:"\\)"},y={endsWithParent:!0,relevance:0
},g={keywords:r,className:"name",begin:n,relevance:0,starts:y
},b=[l,h,c,i,d,m,f,u,o,p,s],v={beginKeywords:a,keywords:{$pattern:n,keyword:a},
end:'(\\[|#|\\d|"|:|\\{|\\)|\\(|$)',contains:[{className:"title",begin:n,
relevance:0,excludeEnd:!0,endsParent:!0}].concat(b)}
;return h.contains=[v,g,y],y.contains=b,u.contains=b,{name:"Clojure",
aliases:["clj","edn"],illegal:/\S/,contains:[l,h,c,i,d,m,f,u,o,p]}}})()
;hljs.registerLanguage("clojure",e)})();/*! `erlang` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict";return e=>{
const n="[a-z'][a-zA-Z0-9_']*",r="("+n+":"+n+"|"+n+")",a={
keyword:"after and andalso|10 band begin bnot bor bsl bzr bxor case catch cond div end fun if let not of orelse|10 query receive rem try when xor",
literal:"false true"},i=e.COMMENT("%","$"),s={className:"number",
begin:"\\b(\\d+(_\\d+)*#[a-fA-F0-9]+(_[a-fA-F0-9]+)*|\\d+(_\\d+)*(\\.\\d+(_\\d+)*)?([eE][-+]?\\d+)?)",
relevance:0},c={begin:"fun\\s+"+n+"/\\d+"},t={begin:r+"\\(",end:"\\)",
returnBegin:!0,relevance:0,contains:[{begin:r,relevance:0},{begin:"\\(",
end:"\\)",endsWithParent:!0,returnEnd:!0,relevance:0}]},d={begin:/\{/,end:/\}/,
relevance:0},o={begin:"\\b_([A-Z][A-Za-z0-9_]*)?",relevance:0},l={
begin:"[A-Z][a-zA-Z0-9_]*",relevance:0},b={begin:"#"+e.UNDERSCORE_IDENT_RE,
relevance:0,returnBegin:!0,contains:[{begin:"#"+e.UNDERSCORE_IDENT_RE,
relevance:0},{begin:/\{/,end:/\}/,relevance:0}]},g={
beginKeywords:"fun receive if try case",end:"end",keywords:a}
;g.contains=[i,c,e.inherit(e.APOS_STRING_MODE,{className:""
}),g,t,e.QUOTE_STRING_MODE,s,d,o,l,b]
;const E=[i,c,g,t,e.QUOTE_STRING_MODE,s,d,o,l,b]
;t.contains[1].contains=E,d.contains=E,b.contains[1].contains=E;const u={
className:"params",begin:"\\(",end:"\\)",contains:E};return{name:"Erlang",
aliases:["erl"],keywords:a,illegal:"(</|\\*=|\\+=|-=|/\\*|\\*/|\\(\\*|\\*\\))",
contains:[{className:"function",begin:"^"+n+"\\s*\\(",end:"->",returnBegin:!0,
illegal:"\\(|#|//|/\\*|\\\\|:|;",contains:[u,e.inherit(e.TITLE_MODE,{begin:n})],
starts:{end:";|\\.",keywords:a,contains:E}},i,{begin:"^-",end:"\\.",relevance:0,
excludeEnd:!0,returnBegin:!0,keywords:{$pattern:"-"+e.IDENT_RE,
keyword:["-module","-record","-undef","-export","-ifdef","-ifndef","-author","-copyright","-doc","-vsn","-import","-include","-include_lib","-compile","-define","-else","-endif","-file","-behaviour","-behavior","-spec"].map((e=>e+"|1.5")).join(" ")
},contains:[u]},s,e.QUOTE_STRING_MODE,b,o,l,d,{begin:/\.$/}]}}})()
;hljs.registerLanguage("erlang",e)})();/*! `sql` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict";return e=>{
const r=e.regex,t=e.COMMENT("--","$"),n=["true","false","unknown"],a=["bigint","binary","blob","boolean","char","character","clob","date","dec","decfloat","decimal","float","int","integer","interval","nchar","nclob","national","numeric","real","row","smallint","time","timestamp","varchar","varying","varbinary"],i=["abs","acos","array_agg","asin","atan","avg","cast","ceil","ceiling","coalesce","corr","cos","cosh","count","covar_pop","covar_samp","cume_dist","dense_rank","deref","element","exp","extract","first_value","floor","json_array","json_arrayagg","json_exists","json_object","json_objectagg","json_query","json_table","json_table_primitive","json_value","lag","last_value","lead","listagg","ln","log","log10","lower","max","min","mod","nth_value","ntile","nullif","percent_rank","percentile_cont","percentile_disc","position","position_regex","power","rank","regr_avgx","regr_avgy","regr_count","regr_intercept","regr_r2","regr_slope","regr_sxx","regr_sxy","regr_syy","row_number","sin","sinh","sqrt","stddev_pop","stddev_samp","substring","substring_regex","sum","tan","tanh","translate","translate_regex","treat","trim","trim_array","unnest","upper","value_of","var_pop","var_samp","width_bucket"],s=["create table","insert into","primary key","foreign key","not null","alter table","add constraint","grouping sets","on overflow","character set","respect nulls","ignore nulls","nulls first","nulls last","depth first","breadth first"],o=i,c=["abs","acos","all","allocate","alter","and","any","are","array","array_agg","array_max_cardinality","as","asensitive","asin","asymmetric","at","atan","atomic","authorization","avg","begin","begin_frame","begin_partition","between","bigint","binary","blob","boolean","both","by","call","called","cardinality","cascaded","case","cast","ceil","ceiling","char","char_length","character","character_length","check","classifier","clob","close","coalesce","collate","collect","column","commit","condition","connect","constraint","contains","convert","copy","corr","corresponding","cos","cosh","count","covar_pop","covar_samp","create","cross","cube","cume_dist","current","current_catalog","current_date","current_default_transform_group","current_path","current_role","current_row","current_schema","current_time","current_timestamp","current_path","current_role","current_transform_group_for_type","current_user","cursor","cycle","date","day","deallocate","dec","decimal","decfloat","declare","default","define","delete","dense_rank","deref","describe","deterministic","disconnect","distinct","double","drop","dynamic","each","element","else","empty","end","end_frame","end_partition","end-exec","equals","escape","every","except","exec","execute","exists","exp","external","extract","false","fetch","filter","first_value","float","floor","for","foreign","frame_row","free","from","full","function","fusion","get","global","grant","group","grouping","groups","having","hold","hour","identity","in","indicator","initial","inner","inout","insensitive","insert","int","integer","intersect","intersection","interval","into","is","join","json_array","json_arrayagg","json_exists","json_object","json_objectagg","json_query","json_table","json_table_primitive","json_value","lag","language","large","last_value","lateral","lead","leading","left","like","like_regex","listagg","ln","local","localtime","localtimestamp","log","log10","lower","match","match_number","match_recognize","matches","max","member","merge","method","min","minute","mod","modifies","module","month","multiset","national","natural","nchar","nclob","new","no","none","normalize","not","nth_value","ntile","null","nullif","numeric","octet_length","occurrences_regex","of","offset","old","omit","on","one","only","open","or","order","out","outer","over","overlaps","overlay","parameter","partition","pattern","per","percent","percent_rank","percentile_cont","percentile_disc","period","portion","position","position_regex","power","precedes","precision","prepare","primary","procedure","ptf","range","rank","reads","real","recursive","ref","references","referencing","regr_avgx","regr_avgy","regr_count","regr_intercept","regr_r2","regr_slope","regr_sxx","regr_sxy","regr_syy","release","result","return","returns","revoke","right","rollback","rollup","row","row_number","rows","running","savepoint","scope","scroll","search","second","seek","select","sensitive","session_user","set","show","similar","sin","sinh","skip","smallint","some","specific","specifictype","sql","sqlexception","sqlstate","sqlwarning","sqrt","start","static","stddev_pop","stddev_samp","submultiset","subset","substring","substring_regex","succeeds","sum","symmetric","system","system_time","system_user","table","tablesample","tan","tanh","then","time","timestamp","timezone_hour","timezone_minute","to","trailing","translate","translate_regex","translation","treat","trigger","trim","trim_array","true","truncate","uescape","union","unique","unknown","unnest","update","upper","user","using","value","values","value_of","var_pop","var_samp","varbinary","varchar","varying","versioning","when","whenever","where","width_bucket","window","with","within","without","year","add","asc","collation","desc","final","first","last","view"].filter((e=>!i.includes(e))),l={
begin:r.concat(/\b/,r.either(...o),/\s*\(/),relevance:0,keywords:{built_in:o}}
;return{name:"SQL",case_insensitive:!0,illegal:/[{}]|<\//,keywords:{
$pattern:/\b[\w\.]+/,keyword:((e,{exceptions:r,when:t}={})=>{const n=t
;return r=r||[],e.map((e=>e.match(/\|\d+$/)||r.includes(e)?e:n(e)?e+"|0":e))
})(c,{when:e=>e.length<3}),literal:n,type:a,
built_in:["current_catalog","current_date","current_default_transform_group","current_path","current_role","current_schema","current_transform_group_for_type","current_user","session_user","system_time","system_user","current_time","localtime","current_timestamp","localtimestamp"]
},contains:[{begin:r.either(...s),relevance:0,keywords:{$pattern:/[\w\.]+/,
keyword:c.concat(s),literal:n,type:a}},{className:"type",
begin:r.either("double precision","large object","with timezone","without timezone")
},l,{className:"variable",begin:/@[a-z0-9]+/},{className:"string",variants:[{
begin:/'/,end:/'/,contains:[{begin:/''/}]}]},{begin:/"/,end:/"/,contains:[{
begin:/""/}]},e.C_NUMBER_MODE,e.C_BLOCK_COMMENT_MODE,t,{className:"operator",
begin:/[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,relevance:0}]}}})()
;hljs.registerLanguage("sql",e)})();/*! `php-template` grammar compiled for Highlight.js 11.5.1 */
(()=>{var n=(()=>{"use strict";return n=>({name:"PHP template",
subLanguage:"xml",contains:[{begin:/<\?(php|=)?/,end:/\?>/,subLanguage:"php",
contains:[{begin:"/\\*",end:"\\*/",skip:!0},{begin:'b"',end:'"',skip:!0},{
begin:"b'",end:"'",skip:!0},n.inherit(n.APOS_STRING_MODE,{illegal:null,
className:null,contains:null,skip:!0}),n.inherit(n.QUOTE_STRING_MODE,{
illegal:null,className:null,contains:null,skip:!0})]}]})})()
;hljs.registerLanguage("php-template",n)})();/*! `dockerfile` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict";return e=>({name:"Dockerfile",aliases:["docker"],
case_insensitive:!0,
keywords:["from","maintainer","expose","env","arg","user","onbuild","stopsignal"],
contains:[e.HASH_COMMENT_MODE,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.NUMBER_MODE,{
beginKeywords:"run cmd entrypoint volume add copy workdir label healthcheck shell",
starts:{end:/[^\\]$/,subLanguage:"bash"}}],illegal:"</"})})()
;hljs.registerLanguage("dockerfile",e)})();/*! `apache` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict";return e=>{const n={className:"number",
begin:/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(:\d{1,5})?/};return{
name:"Apache config",aliases:["apacheconf"],case_insensitive:!0,
contains:[e.HASH_COMMENT_MODE,{className:"section",begin:/<\/?/,end:/>/,
contains:[n,{className:"number",begin:/:\d{1,5}/
},e.inherit(e.QUOTE_STRING_MODE,{relevance:0})]},{className:"attribute",
begin:/\w+/,relevance:0,keywords:{
_:["order","deny","allow","setenv","rewriterule","rewriteengine","rewritecond","documentroot","sethandler","errordocument","loadmodule","options","header","listen","serverroot","servername"]
},starts:{end:/$/,relevance:0,keywords:{literal:"on off all deny allow"},
contains:[{className:"meta",begin:/\s\[/,end:/\]$/},{className:"variable",
begin:/[\$%]\{/,end:/\}/,contains:["self",{className:"number",begin:/[$%]\d+/}]
},n,{className:"number",begin:/\b\d+/},e.QUOTE_STRING_MODE]}}],illegal:/\S/}}
})();hljs.registerLanguage("apache",e)})();/*! `django` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict";return e=>{const t={begin:/\|[A-Za-z]+:?/,
keywords:{
name:"truncatewords removetags linebreaksbr yesno get_digit timesince random striptags filesizeformat escape linebreaks length_is ljust rjust cut urlize fix_ampersands title floatformat capfirst pprint divisibleby add make_list unordered_list urlencode timeuntil urlizetrunc wordcount stringformat linenumbers slice date dictsort dictsortreversed default_if_none pluralize lower join center default truncatewords_html upper length phone2numeric wordwrap time addslashes slugify first escapejs force_escape iriencode last safe safeseq truncatechars localize unlocalize localtime utc timezone"
},contains:[e.QUOTE_STRING_MODE,e.APOS_STRING_MODE]};return{name:"Django",
aliases:["jinja"],case_insensitive:!0,subLanguage:"xml",
contains:[e.COMMENT(/\{%\s*comment\s*%\}/,/\{%\s*endcomment\s*%\}/),e.COMMENT(/\{#/,/#\}/),{
className:"template-tag",begin:/\{%/,end:/%\}/,contains:[{className:"name",
begin:/\w+/,keywords:{
name:"comment endcomment load templatetag ifchanged endifchanged if endif firstof for endfor ifnotequal endifnotequal widthratio extends include spaceless endspaceless regroup ifequal endifequal ssi now with cycle url filter endfilter debug block endblock else autoescape endautoescape csrf_token empty elif endwith static trans blocktrans endblocktrans get_static_prefix get_media_prefix plural get_current_language language get_available_languages get_current_language_bidi get_language_info get_language_info_list localize endlocalize localtime endlocaltime timezone endtimezone get_current_timezone verbatim"
},starts:{endsWithParent:!0,keywords:"in by as",contains:[t],relevance:0}}]},{
className:"template-variable",begin:/\{\{/,end:/\}\}/,contains:[t]}]}}})()
;hljs.registerLanguage("django",e)})();/*! `ada` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict";return e=>{
const n="[A-Za-z](_?[A-Za-z0-9.])*",s="[]\\{\\}%#'\"",a=e.COMMENT("--","$"),r={
begin:"\\s+:\\s+",end:"\\s*(:=|;|\\)|=>|$)",illegal:s,contains:[{
beginKeywords:"loop for declare others",endsParent:!0},{className:"keyword",
beginKeywords:"not null constant access function procedure in out aliased exception"
},{className:"type",begin:n,endsParent:!0,relevance:0}]};return{name:"Ada",
case_insensitive:!0,keywords:{
keyword:["abort","else","new","return","abs","elsif","not","reverse","abstract","end","accept","entry","select","access","exception","of","separate","aliased","exit","or","some","all","others","subtype","and","for","out","synchronized","array","function","overriding","at","tagged","generic","package","task","begin","goto","pragma","terminate","body","private","then","if","procedure","type","case","in","protected","constant","interface","is","raise","use","declare","range","delay","limited","record","when","delta","loop","rem","while","digits","renames","with","do","mod","requeue","xor"],
literal:["True","False"]},contains:[a,{className:"string",begin:/"/,end:/"/,
contains:[{begin:/""/,relevance:0}]},{className:"string",begin:/'.'/},{
className:"number",
begin:"\\b(\\d(_|\\d)*#\\w+(\\.\\w+)?#([eE][-+]?\\d(_|\\d)*)?|\\d(_|\\d)*(\\.\\d(_|\\d)*)?([eE][-+]?\\d(_|\\d)*)?)",
relevance:0},{className:"symbol",begin:"'"+n},{className:"title",
begin:"(\\bwith\\s+)?(\\bprivate\\s+)?\\bpackage\\s+(\\bbody\\s+)?",
end:"(is|$)",keywords:"package body",excludeBegin:!0,excludeEnd:!0,illegal:s},{
begin:"(\\b(with|overriding)\\s+)?\\b(function|procedure)\\s+",
end:"(\\bis|\\bwith|\\brenames|\\)\\s*;)",
keywords:"overriding function procedure with is renames return",returnBegin:!0,
contains:[a,{className:"title",
begin:"(\\bwith\\s+)?\\b(function|procedure)\\s+",end:"(\\(|\\s+|$)",
excludeBegin:!0,excludeEnd:!0,illegal:s},r,{className:"type",
begin:"\\breturn\\s+",end:"(\\s+|;|$)",keywords:"return",excludeBegin:!0,
excludeEnd:!0,endsParent:!0,illegal:s}]},{className:"type",
begin:"\\b(sub)?type\\s+",end:"\\s+",keywords:"type",excludeBegin:!0,illegal:s
},r]}}})();hljs.registerLanguage("ada",e)})();/*! `c` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict";return e=>{const n=e.regex,t=e.COMMENT("//","$",{
contains:[{begin:/\\\n/}]
}),s="[a-zA-Z_]\\w*::",a="(decltype\\(auto\\)|"+n.optional(s)+"[a-zA-Z_]\\w*"+n.optional("<[^<>]+>")+")",r={
className:"type",variants:[{begin:"\\b[a-z\\d_]*_t\\b"},{
match:/\batomic_[a-z]{3,6}\b/}]},i={className:"string",variants:[{
begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},{
begin:"(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
end:"'",illegal:"."},e.END_SAME_AS_BEGIN({
begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},l={
className:"number",variants:[{begin:"\\b(0b[01']+)"},{
begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"
},{
begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
}],relevance:0},o={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{
keyword:"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"
},contains:[{begin:/\\\n/,relevance:0},e.inherit(i,{className:"string"}),{
className:"string",begin:/<.*?>/},t,e.C_BLOCK_COMMENT_MODE]},c={
className:"title",begin:n.optional(s)+e.IDENT_RE,relevance:0
},d=n.optional(s)+e.IDENT_RE+"\\s*\\(",u={
keyword:["asm","auto","break","case","continue","default","do","else","enum","extern","for","fortran","goto","if","inline","register","restrict","return","sizeof","struct","switch","typedef","union","volatile","while","_Alignas","_Alignof","_Atomic","_Generic","_Noreturn","_Static_assert","_Thread_local","alignas","alignof","noreturn","static_assert","thread_local","_Pragma"],
type:["float","double","signed","unsigned","int","short","long","char","void","_Bool","_Complex","_Imaginary","_Decimal32","_Decimal64","_Decimal128","const","static","complex","bool","imaginary"],
literal:"true false NULL",
built_in:"std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr"
},g=[o,r,t,e.C_BLOCK_COMMENT_MODE,l,i],m={variants:[{begin:/=/,end:/;/},{
begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],
keywords:u,contains:g.concat([{begin:/\(/,end:/\)/,keywords:u,
contains:g.concat(["self"]),relevance:0}]),relevance:0},p={
begin:"("+a+"[\\*&\\s]+)+"+d,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,
keywords:u,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:"decltype\\(auto\\)",
keywords:u,relevance:0},{begin:d,returnBegin:!0,contains:[e.inherit(c,{
className:"title.function"})],relevance:0},{relevance:0,match:/,/},{
className:"params",begin:/\(/,end:/\)/,keywords:u,relevance:0,
contains:[t,e.C_BLOCK_COMMENT_MODE,i,l,r,{begin:/\(/,end:/\)/,keywords:u,
relevance:0,contains:["self",t,e.C_BLOCK_COMMENT_MODE,i,l,r]}]
},r,t,e.C_BLOCK_COMMENT_MODE,o]};return{name:"C",aliases:["h"],keywords:u,
disableAutodetect:!0,illegal:"</",contains:[].concat(m,p,g,[o,{
begin:e.IDENT_RE+"::",keywords:u},{className:"class",
beginKeywords:"enum class struct union",end:/[{;:<>=]/,contains:[{
beginKeywords:"final class struct"},e.TITLE_MODE]}]),exports:{preprocessor:o,
strings:i,keywords:u}}}})();hljs.registerLanguage("c",e)})();/*! `rust` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict";return e=>{const t=e.regex,n={
className:"title.function.invoke",relevance:0,
begin:t.concat(/\b/,/(?!let\b)/,e.IDENT_RE,t.lookahead(/\s*\(/))
},a="([ui](8|16|32|64|128|size)|f(32|64))?",i=["drop ","Copy","Send","Sized","Sync","Drop","Fn","FnMut","FnOnce","ToOwned","Clone","Debug","PartialEq","PartialOrd","Eq","Ord","AsRef","AsMut","Into","From","Default","Iterator","Extend","IntoIterator","DoubleEndedIterator","ExactSizeIterator","SliceConcatExt","ToString","assert!","assert_eq!","bitflags!","bytes!","cfg!","col!","concat!","concat_idents!","debug_assert!","debug_assert_eq!","env!","panic!","file!","format!","format_args!","include_bin!","include_str!","line!","local_data_key!","module_path!","option_env!","print!","println!","select!","stringify!","try!","unimplemented!","unreachable!","vec!","write!","writeln!","macro_rules!","assert_ne!","debug_assert_ne!"]
;return{name:"Rust",aliases:["rs"],keywords:{$pattern:e.IDENT_RE+"!?",
type:["i8","i16","i32","i64","i128","isize","u8","u16","u32","u64","u128","usize","f32","f64","str","char","bool","Box","Option","Result","String","Vec"],
keyword:["abstract","as","async","await","become","box","break","const","continue","crate","do","dyn","else","enum","extern","false","final","fn","for","if","impl","in","let","loop","macro","match","mod","move","mut","override","priv","pub","ref","return","self","Self","static","struct","super","trait","true","try","type","typeof","unsafe","unsized","use","virtual","where","while","yield"],
literal:["true","false","Some","None","Ok","Err"],built_in:i},illegal:"</",
contains:[e.C_LINE_COMMENT_MODE,e.COMMENT("/\\*","\\*/",{contains:["self"]
}),e.inherit(e.QUOTE_STRING_MODE,{begin:/b?"/,illegal:null}),{
className:"string",variants:[{begin:/b?r(#*)"(.|\n)*?"\1(?!#)/},{
begin:/b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/}]},{className:"symbol",
begin:/'[a-zA-Z_][a-zA-Z0-9_]*/},{className:"number",variants:[{
begin:"\\b0b([01_]+)"+a},{begin:"\\b0o([0-7_]+)"+a},{
begin:"\\b0x([A-Fa-f0-9_]+)"+a},{
begin:"\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)"+a}],relevance:0},{
begin:[/fn/,/\s+/,e.UNDERSCORE_IDENT_RE],className:{1:"keyword",
3:"title.function"}},{className:"meta",begin:"#!?\\[",end:"\\]",contains:[{
className:"string",begin:/"/,end:/"/}]},{
begin:[/let/,/\s+/,/(?:mut\s+)?/,e.UNDERSCORE_IDENT_RE],className:{1:"keyword",
3:"keyword",4:"variable"}},{
begin:[/for/,/\s+/,e.UNDERSCORE_IDENT_RE,/\s+/,/in/],className:{1:"keyword",
3:"variable",5:"keyword"}},{begin:[/type/,/\s+/,e.UNDERSCORE_IDENT_RE],
className:{1:"keyword",3:"title.class"}},{
begin:[/(?:trait|enum|struct|union|impl|for)/,/\s+/,e.UNDERSCORE_IDENT_RE],
className:{1:"keyword",3:"title.class"}},{begin:e.IDENT_RE+"::",keywords:{
keyword:"Self",built_in:i}},{className:"punctuation",begin:"->"},n]}}})()
;hljs.registerLanguage("rust",e)})();/*! `perl` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict";return e=>{
const n=e.regex,t=/[dualxmsipngr]{0,12}/,r={$pattern:/[\w.]+/,
keyword:"abs accept alarm and atan2 bind binmode bless break caller chdir chmod chomp chop chown chr chroot close closedir connect continue cos crypt dbmclose dbmopen defined delete die do dump each else elsif endgrent endhostent endnetent endprotoent endpwent endservent eof eval exec exists exit exp fcntl fileno flock for foreach fork format formline getc getgrent getgrgid getgrnam gethostbyaddr gethostbyname gethostent getlogin getnetbyaddr getnetbyname getnetent getpeername getpgrp getpriority getprotobyname getprotobynumber getprotoent getpwent getpwnam getpwuid getservbyname getservbyport getservent getsockname getsockopt given glob gmtime goto grep gt hex if index int ioctl join keys kill last lc lcfirst length link listen local localtime log lstat lt ma map mkdir msgctl msgget msgrcv msgsnd my ne next no not oct open opendir or ord our pack package pipe pop pos print printf prototype push q|0 qq quotemeta qw qx rand read readdir readline readlink readpipe recv redo ref rename require reset return reverse rewinddir rindex rmdir say scalar seek seekdir select semctl semget semop send setgrent sethostent setnetent setpgrp setpriority setprotoent setpwent setservent setsockopt shift shmctl shmget shmread shmwrite shutdown sin sleep socket socketpair sort splice split sprintf sqrt srand stat state study sub substr symlink syscall sysopen sysread sysseek system syswrite tell telldir tie tied time times tr truncate uc ucfirst umask undef unless unlink unpack unshift untie until use utime values vec wait waitpid wantarray warn when while write x|0 xor y|0"
},s={className:"subst",begin:"[$@]\\{",end:"\\}",keywords:r},i={begin:/->\{/,
end:/\}/},a={variants:[{begin:/\$\d/},{
begin:n.concat(/[$%@](\^\w\b|#\w+(::\w+)*|\{\w+\}|\w+(::\w*)*)/,"(?![A-Za-z])(?![@$%])")
},{begin:/[$%@][^\s\w{]/,relevance:0}]
},c=[e.BACKSLASH_ESCAPE,s,a],o=[/!/,/\//,/\|/,/\?/,/'/,/"/,/#/],g=(e,r,s="\\1")=>{
const i="\\1"===s?s:n.concat(s,r)
;return n.concat(n.concat("(?:",e,")"),r,/(?:\\.|[^\\\/])*?/,i,/(?:\\.|[^\\\/])*?/,s,t)
},l=(e,r,s)=>n.concat(n.concat("(?:",e,")"),r,/(?:\\.|[^\\\/])*?/,s,t),d=[a,e.HASH_COMMENT_MODE,e.COMMENT(/^=\w/,/=cut/,{
endsWithParent:!0}),i,{className:"string",contains:c,variants:[{
begin:"q[qwxr]?\\s*\\(",end:"\\)",relevance:5},{begin:"q[qwxr]?\\s*\\[",
end:"\\]",relevance:5},{begin:"q[qwxr]?\\s*\\{",end:"\\}",relevance:5},{
begin:"q[qwxr]?\\s*\\|",end:"\\|",relevance:5},{begin:"q[qwxr]?\\s*<",end:">",
relevance:5},{begin:"qw\\s+q",end:"q",relevance:5},{begin:"'",end:"'",
contains:[e.BACKSLASH_ESCAPE]},{begin:'"',end:'"'},{begin:"`",end:"`",
contains:[e.BACKSLASH_ESCAPE]},{begin:/\{\w+\}/,relevance:0},{
begin:"-?\\w+\\s*=>",relevance:0}]},{className:"number",
begin:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
relevance:0},{
begin:"(\\/\\/|"+e.RE_STARTERS_RE+"|\\b(split|return|print|reverse|grep)\\b)\\s*",
keywords:"split return print reverse grep",relevance:0,
contains:[e.HASH_COMMENT_MODE,{className:"regexp",variants:[{
begin:g("s|tr|y",n.either(...o,{capture:!0}))},{begin:g("s|tr|y","\\(","\\)")},{
begin:g("s|tr|y","\\[","\\]")},{begin:g("s|tr|y","\\{","\\}")}],relevance:2},{
className:"regexp",variants:[{begin:/(m|qr)\/\//,relevance:0},{
begin:l("(?:m|qr)?",/\//,/\//)},{begin:l("m|qr",n.either(...o,{capture:!0
}),/\1/)},{begin:l("m|qr",/\(/,/\)/)},{begin:l("m|qr",/\[/,/\]/)},{
begin:l("m|qr",/\{/,/\}/)}]}]},{className:"function",beginKeywords:"sub",
end:"(\\s*\\(.*?\\))?[;{]",excludeEnd:!0,relevance:5,contains:[e.TITLE_MODE]},{
begin:"-\\w\\b",relevance:0},{begin:"^__DATA__$",end:"^__END__$",
subLanguage:"mojolicious",contains:[{begin:"^@@.*",end:"$",className:"comment"}]
}];return s.contains=d,i.contains=d,{name:"Perl",aliases:["pl","pm"],keywords:r,
contains:d}}})();hljs.registerLanguage("perl",e)})();/*! `python-repl` grammar compiled for Highlight.js 11.5.1 */
(()=>{var a=(()=>{"use strict";return a=>({aliases:["pycon"],contains:[{
className:"meta.prompt",starts:{end:/ |$/,starts:{end:"$",subLanguage:"python"}
},variants:[{begin:/^>>>(?=[ ]|$)/},{begin:/^\.\.\.(?=[ ]|$)/}]}]})})()
;hljs.registerLanguage("python-repl",a)})();/*! `angelscript` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict";return e=>{const n={className:"built_in",
begin:"\\b(void|bool|int8|int16|int32|int64|int|uint8|uint16|uint32|uint64|uint|string|ref|array|double|float|auto|dictionary)"
},a={className:"symbol",begin:"[a-zA-Z0-9_]+@"},i={className:"keyword",
begin:"<",end:">",contains:[n,a]};return n.contains=[i],a.contains=[i],{
name:"AngelScript",aliases:["asc"],
keywords:["for","in|0","break","continue","while","do|0","return","if","else","case","switch","namespace","is","cast","or","and","xor","not","get|0","in","inout|10","out","override","set|0","private","public","const","default|0","final","shared","external","mixin|10","enum","typedef","funcdef","this","super","import","from","interface","abstract|0","try","catch","protected","explicit","property"],
illegal:"(^using\\s+[A-Za-z0-9_\\.]+;$|\\bfunction\\s*[^\\(])",contains:[{
className:"string",begin:"'",end:"'",illegal:"\\n",
contains:[e.BACKSLASH_ESCAPE],relevance:0},{className:"string",begin:'"""',
end:'"""'},{className:"string",begin:'"',end:'"',illegal:"\\n",
contains:[e.BACKSLASH_ESCAPE],relevance:0
},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"string",
begin:"^\\s*\\[",end:"\\]"},{beginKeywords:"interface namespace",end:/\{/,
illegal:"[;.\\-]",contains:[{className:"symbol",begin:"[a-zA-Z0-9_]+"}]},{
beginKeywords:"class",end:/\{/,illegal:"[;.\\-]",contains:[{className:"symbol",
begin:"[a-zA-Z0-9_]+",contains:[{begin:"[:,]\\s*",contains:[{className:"symbol",
begin:"[a-zA-Z0-9_]+"}]}]}]},n,a,{className:"literal",
begin:"\\b(null|true|false)"},{className:"number",relevance:0,
begin:"(-?)(\\b0[xXbBoOdD][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?f?|\\.\\d+f?)([eE][-+]?\\d+f?)?)"
}]}}})();hljs.registerLanguage("angelscript",e)})();/*! `aspectj` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict";return e=>{
const n=e.regex,t=["false","synchronized","int","abstract","float","private","char","boolean","static","null","if","const","for","true","while","long","throw","strictfp","finally","protected","import","native","final","return","void","enum","else","extends","implements","break","transient","new","catch","instanceof","byte","super","volatile","case","assert","short","package","default","double","public","try","this","switch","continue","throws","privileged","aspectOf","adviceexecution","proceed","cflowbelow","cflow","initialization","preinitialization","staticinitialization","withincode","target","within","execution","getWithinTypeName","handler","thisJoinPoint","thisJoinPointStaticPart","thisEnclosingJoinPointStaticPart","declare","parents","warning","error","soft","precedence","thisAspectInstance"],i=["get","set","args","call"]
;return{name:"AspectJ",keywords:t,illegal:/<\/|#/,
contains:[e.COMMENT(/\/\*\*/,/\*\//,{relevance:0,contains:[{begin:/\w+@/,
relevance:0},{className:"doctag",begin:/@[A-Za-z]+/}]
}),e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{
className:"class",beginKeywords:"aspect",end:/[{;=]/,excludeEnd:!0,
illegal:/[:;"\[\]]/,contains:[{
beginKeywords:"extends implements pertypewithin perthis pertarget percflowbelow percflow issingleton"
},e.UNDERSCORE_TITLE_MODE,{begin:/\([^\)]*/,end:/[)]+/,keywords:t.concat(i),
excludeEnd:!1}]},{className:"class",beginKeywords:"class interface",end:/[{;=]/,
excludeEnd:!0,relevance:0,keywords:"class interface",illegal:/[:"\[\]]/,
contains:[{beginKeywords:"extends implements"},e.UNDERSCORE_TITLE_MODE]},{
beginKeywords:"pointcut after before around throwing returning",end:/[)]/,
excludeEnd:!1,illegal:/["\[\]]/,contains:[{
begin:n.concat(e.UNDERSCORE_IDENT_RE,/\s*\(/),returnBegin:!0,
contains:[e.UNDERSCORE_TITLE_MODE]}]},{begin:/[:]/,returnBegin:!0,end:/[{;]/,
relevance:0,excludeEnd:!1,keywords:t,illegal:/["\[\]]/,contains:[{
begin:n.concat(e.UNDERSCORE_IDENT_RE,/\s*\(/),keywords:t.concat(i),relevance:0
},e.QUOTE_STRING_MODE]},{beginKeywords:"new throw",relevance:0},{
className:"function",
begin:/\w+ +\w+(\.\w+)?\s*\([^\)]*\)\s*((throws)[\w\s,]+)?[\{;]/,returnBegin:!0,
end:/[{;=]/,keywords:t,excludeEnd:!0,contains:[{
begin:n.concat(e.UNDERSCORE_IDENT_RE,/\s*\(/),returnBegin:!0,relevance:0,
contains:[e.UNDERSCORE_TITLE_MODE]},{className:"params",begin:/\(/,end:/\)/,
relevance:0,keywords:t,
contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.C_NUMBER_MODE,e.C_BLOCK_COMMENT_MODE]
},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},e.C_NUMBER_MODE,{
className:"meta",begin:/@[A-Za-z]+/}]}}})();hljs.registerLanguage("aspectj",e)
})();/*! `arcade` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict";return e=>{const n="[A-Za-z_][0-9A-Za-z_]*",a={
keyword:["if","for","while","var","new","function","do","return","void","else","break"],
literal:["BackSlash","DoubleQuote","false","ForwardSlash","Infinity","NaN","NewLine","null","PI","SingleQuote","Tab","TextFormatting","true","undefined"],
built_in:["Abs","Acos","All","Angle","Any","Area","AreaGeodetic","Array","Asin","Atan","Atan2","Attachments","Average","Back","Bearing","Boolean","Buffer","BufferGeodetic","Ceil","Centroid","Clip","Concatenate","Console","Constrain","Contains","ConvertDirection","Cos","Count","Crosses","Cut","Date","DateAdd","DateDiff","Day","Decode","DefaultValue","Densify","DensifyGeodetic","Dictionary","Difference","Disjoint","Distance","DistanceGeodetic","Distinct","Domain","DomainCode","DomainName","EnvelopeIntersects","Equals","Erase","Exp","Expects","Extent","Feature","FeatureSet","FeatureSetByAssociation","FeatureSetById","FeatureSetByName","FeatureSetByPortalItem","FeatureSetByRelationshipName","Filter","Find","First","Floor","FromCharCode","FromCodePoint","FromJSON","GdbVersion","Generalize","Geometry","GetFeatureSet","GetUser","GroupBy","Guid","Hash","HasKey","Hour","IIf","Includes","IndexOf","Insert","Intersection","Intersects","IsEmpty","IsNan","ISOMonth","ISOWeek","ISOWeekday","ISOYear","IsSelfIntersecting","IsSimple","Left|0","Length","Length3D","LengthGeodetic","Log","Lower","Map","Max","Mean","Mid","Millisecond","Min","Minute","Month","MultiPartToSinglePart","Multipoint","NextSequenceValue","None","Now","Number","Offset|0","OrderBy","Overlaps","Point","Polygon","Polyline","Pop","Portal","Pow","Proper","Push","Random","Reduce","Relate","Replace","Resize","Reverse","Right|0","RingIsClockwise","Rotate","Round","Schema","Second","SetGeometry","Simplify","Sin","Slice","Sort","Splice","Split","Sqrt","Stdev","SubtypeCode","SubtypeName","Subtypes","Sum","SymmetricDifference","Tan","Text","Timestamp","ToCharCode","ToCodePoint","Today","ToHex","ToLocal","Top|0","Touches","ToUTC","TrackAccelerationAt","TrackAccelerationWindow","TrackCurrentAcceleration","TrackCurrentDistance","TrackCurrentSpeed","TrackCurrentTime","TrackDistanceAt","TrackDistanceWindow","TrackDuration","TrackFieldWindow","TrackGeometryWindow","TrackIndex","TrackSpeedAt","TrackSpeedWindow","TrackStartTime","TrackWindow","Trim","TypeOf","Union","Upper","UrlEncode","Variance","Week","Weekday","When","Within","Year"]
},t={className:"number",variants:[{begin:"\\b(0[bB][01]+)"},{
begin:"\\b(0[oO][0-7]+)"},{begin:e.C_NUMBER_RE}],relevance:0},r={
className:"subst",begin:"\\$\\{",end:"\\}",keywords:a,contains:[]},i={
className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,r]}
;r.contains=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,i,t,e.REGEXP_MODE]
;const o=r.contains.concat([e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE])
;return{name:"ArcGIS Arcade",case_insensitive:!0,keywords:a,
contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,i,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{
className:"symbol",
begin:"\\$[datastore|feature|layer|map|measure|sourcefeature|sourcelayer|targetfeature|targetlayer|value|view]+"
},t,{begin:/[{,]\s*/,relevance:0,contains:[{begin:n+"\\s*:",returnBegin:!0,
relevance:0,contains:[{className:"attr",begin:n,relevance:0}]}]},{
begin:"("+e.RE_STARTERS_RE+"|\\b(return)\\b)\\s*",keywords:"return",
contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.REGEXP_MODE,{
className:"function",begin:"(\\(.*?\\)|"+n+")\\s*=>",returnBegin:!0,
end:"\\s*=>",contains:[{className:"params",variants:[{begin:n},{begin:/\(\s*\)/
},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:a,contains:o}]}]
}],relevance:0},{beginKeywords:"function",end:/\{/,excludeEnd:!0,
contains:[e.inherit(e.TITLE_MODE,{className:"title.function",begin:n}),{
className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,contains:o
}],illegal:/\[|%/},{begin:/\$[(.]/}],illegal:/#(?!!)/}}})()
;hljs.registerLanguage("arcade",e)})();/*! `cpp` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict";return e=>{const t=e.regex,a=e.COMMENT("//","$",{
contains:[{begin:/\\\n/}]
}),n="[a-zA-Z_]\\w*::",r="(?!struct)(decltype\\(auto\\)|"+t.optional(n)+"[a-zA-Z_]\\w*"+t.optional("<[^<>]+>")+")",i={
className:"type",begin:"\\b[a-z\\d_]*_t\\b"},s={className:"string",variants:[{
begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},{
begin:"(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
end:"'",illegal:"."},e.END_SAME_AS_BEGIN({
begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},c={
className:"number",variants:[{begin:"\\b(0b[01']+)"},{
begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"
},{
begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
}],relevance:0},o={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{
keyword:"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"
},contains:[{begin:/\\\n/,relevance:0},e.inherit(s,{className:"string"}),{
className:"string",begin:/<.*?>/},a,e.C_BLOCK_COMMENT_MODE]},l={
className:"title",begin:t.optional(n)+e.IDENT_RE,relevance:0
},d=t.optional(n)+e.IDENT_RE+"\\s*\\(",u={
type:["bool","char","char16_t","char32_t","char8_t","double","float","int","long","short","void","wchar_t","unsigned","signed","const","static"],
keyword:["alignas","alignof","and","and_eq","asm","atomic_cancel","atomic_commit","atomic_noexcept","auto","bitand","bitor","break","case","catch","class","co_await","co_return","co_yield","compl","concept","const_cast|10","consteval","constexpr","constinit","continue","decltype","default","delete","do","dynamic_cast|10","else","enum","explicit","export","extern","false","final","for","friend","goto","if","import","inline","module","mutable","namespace","new","noexcept","not","not_eq","nullptr","operator","or","or_eq","override","private","protected","public","reflexpr","register","reinterpret_cast|10","requires","return","sizeof","static_assert","static_cast|10","struct","switch","synchronized","template","this","thread_local","throw","transaction_safe","transaction_safe_dynamic","true","try","typedef","typeid","typename","union","using","virtual","volatile","while","xor","xor_eq"],
literal:["NULL","false","nullopt","nullptr","true"],built_in:["_Pragma"],
_type_hints:["any","auto_ptr","barrier","binary_semaphore","bitset","complex","condition_variable","condition_variable_any","counting_semaphore","deque","false_type","future","imaginary","initializer_list","istringstream","jthread","latch","lock_guard","multimap","multiset","mutex","optional","ostringstream","packaged_task","pair","promise","priority_queue","queue","recursive_mutex","recursive_timed_mutex","scoped_lock","set","shared_future","shared_lock","shared_mutex","shared_timed_mutex","shared_ptr","stack","string_view","stringstream","timed_mutex","thread","true_type","tuple","unique_lock","unique_ptr","unordered_map","unordered_multimap","unordered_multiset","unordered_set","variant","vector","weak_ptr","wstring","wstring_view"]
},p={className:"function.dispatch",relevance:0,keywords:{
_hint:["abort","abs","acos","apply","as_const","asin","atan","atan2","calloc","ceil","cerr","cin","clog","cos","cosh","cout","declval","endl","exchange","exit","exp","fabs","floor","fmod","forward","fprintf","fputs","free","frexp","fscanf","future","invoke","isalnum","isalpha","iscntrl","isdigit","isgraph","islower","isprint","ispunct","isspace","isupper","isxdigit","labs","launder","ldexp","log","log10","make_pair","make_shared","make_shared_for_overwrite","make_tuple","make_unique","malloc","memchr","memcmp","memcpy","memset","modf","move","pow","printf","putchar","puts","realloc","scanf","sin","sinh","snprintf","sprintf","sqrt","sscanf","std","stderr","stdin","stdout","strcat","strchr","strcmp","strcpy","strcspn","strlen","strncat","strncmp","strncpy","strpbrk","strrchr","strspn","strstr","swap","tan","tanh","terminate","to_underlying","tolower","toupper","vfprintf","visit","vprintf","vsprintf"]
},
begin:t.concat(/\b/,/(?!decltype)/,/(?!if)/,/(?!for)/,/(?!switch)/,/(?!while)/,e.IDENT_RE,t.lookahead(/(<[^<>]+>|)\s*\(/))
},_=[p,o,i,a,e.C_BLOCK_COMMENT_MODE,c,s],m={variants:[{begin:/=/,end:/;/},{
begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],
keywords:u,contains:_.concat([{begin:/\(/,end:/\)/,keywords:u,
contains:_.concat(["self"]),relevance:0}]),relevance:0},g={className:"function",
begin:"("+r+"[\\*&\\s]+)+"+d,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,
keywords:u,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:"decltype\\(auto\\)",
keywords:u,relevance:0},{begin:d,returnBegin:!0,contains:[l],relevance:0},{
begin:/::/,relevance:0},{begin:/:/,endsWithParent:!0,contains:[s,c]},{
relevance:0,match:/,/},{className:"params",begin:/\(/,end:/\)/,keywords:u,
relevance:0,contains:[a,e.C_BLOCK_COMMENT_MODE,s,c,i,{begin:/\(/,end:/\)/,
keywords:u,relevance:0,contains:["self",a,e.C_BLOCK_COMMENT_MODE,s,c,i]}]
},i,a,e.C_BLOCK_COMMENT_MODE,o]};return{name:"C++",
aliases:["cc","c++","h++","hpp","hh","hxx","cxx"],keywords:u,illegal:"</",
classNameAliases:{"function.dispatch":"built_in"},
contains:[].concat(m,g,p,_,[o,{
begin:"\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function)\\s*<(?!<)",
end:">",keywords:u,contains:["self",i]},{begin:e.IDENT_RE+"::",keywords:u},{
match:[/\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,/\s+/,/\w+/],
className:{1:"keyword",3:"title.class"}}])}}})();hljs.registerLanguage("cpp",e)
})();/*! `javascript` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict"
;const e="[A-Za-z$_][0-9A-Za-z$_]*",n=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],a=["true","false","null","undefined","NaN","Infinity"],t=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],s=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],r=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],c=["arguments","this","super","console","window","document","localStorage","module","global"],i=[].concat(r,t,s)
;return o=>{const l=o.regex,b=e,d={begin:/<[A-Za-z0-9\\._:-]+/,
end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(e,n)=>{
const a=e[0].length+e.index,t=e.input[a]
;if("<"===t||","===t)return void n.ignoreMatch();let s
;">"===t&&(((e,{after:n})=>{const a="</"+e[0].slice(1)
;return-1!==e.input.indexOf(a,n)})(e,{after:a
})||n.ignoreMatch()),(s=e.input.substr(a).match(/^\s+extends\s+/))&&0===s.index&&n.ignoreMatch()
}},g={$pattern:e,keyword:n,literal:a,built_in:i,"variable.language":c
},u="\\.([0-9](_?[0-9])*)",m="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",E={
className:"number",variants:[{
begin:`(\\b(${m})((${u})|\\.)?|(${u}))[eE][+-]?([0-9](_?[0-9])*)\\b`},{
begin:`\\b(${m})\\b((${u})\\b|\\.)?|(${u})\\b`},{
begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{
begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{
begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{
begin:"\\b0[0-7]+n?\\b"}],relevance:0},A={className:"subst",begin:"\\$\\{",
end:"\\}",keywords:g,contains:[]},y={begin:"html`",end:"",starts:{end:"`",
returnEnd:!1,contains:[o.BACKSLASH_ESCAPE,A],subLanguage:"xml"}},N={
begin:"css`",end:"",starts:{end:"`",returnEnd:!1,
contains:[o.BACKSLASH_ESCAPE,A],subLanguage:"css"}},_={className:"string",
begin:"`",end:"`",contains:[o.BACKSLASH_ESCAPE,A]},f={className:"comment",
variants:[o.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{
begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",
begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,
excludeBegin:!0,relevance:0},{className:"variable",begin:b+"(?=\\s*(-)|$)",
endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]
}),o.C_BLOCK_COMMENT_MODE,o.C_LINE_COMMENT_MODE]
},h=[o.APOS_STRING_MODE,o.QUOTE_STRING_MODE,y,N,_,E];A.contains=h.concat({
begin:/\{/,end:/\}/,keywords:g,contains:["self"].concat(h)})
;const v=[].concat(f,A.contains),p=v.concat([{begin:/\(/,end:/\)/,keywords:g,
contains:["self"].concat(v)}]),S={className:"params",begin:/\(/,end:/\)/,
excludeBegin:!0,excludeEnd:!0,keywords:g,contains:p},w={variants:[{
match:[/class/,/\s+/,b,/\s+/,/extends/,/\s+/,l.concat(b,"(",l.concat(/\./,b),")*")],
scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{
match:[/class/,/\s+/,b],scope:{1:"keyword",3:"title.class"}}]},R={relevance:0,
match:l.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
className:"title.class",keywords:{_:[...t,...s]}},O={variants:[{
match:[/function/,/\s+/,b,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],
className:{1:"keyword",3:"title.function"},label:"func.def",contains:[S],
illegal:/%/},k={
match:l.concat(/\b/,(I=[...r,"super"],l.concat("(?!",I.join("|"),")")),b,l.lookahead(/\(/)),
className:"title.function",relevance:0};var I;const x={
begin:l.concat(/\./,l.lookahead(l.concat(b,/(?![0-9A-Za-z$_(])/))),end:b,
excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},T={
match:[/get|set/,/\s+/,b,/(?=\()/],className:{1:"keyword",3:"title.function"},
contains:[{begin:/\(\)/},S]
},C="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+o.UNDERSCORE_IDENT_RE+")\\s*=>",M={
match:[/const|var|let/,/\s+/,b,/\s*/,/=\s*/,/(async\s*)?/,l.lookahead(C)],
keywords:"async",className:{1:"keyword",3:"title.function"},contains:[S]}
;return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:g,exports:{
PARAMS_CONTAINS:p,CLASS_REFERENCE:R},illegal:/#(?![$_A-z])/,
contains:[o.SHEBANG({label:"shebang",binary:"node",relevance:5}),{
label:"use_strict",className:"meta",relevance:10,
begin:/^\s*['"]use (strict|asm)['"]/
},o.APOS_STRING_MODE,o.QUOTE_STRING_MODE,y,N,_,f,E,R,{className:"attr",
begin:b+l.lookahead(":"),relevance:0},M,{
begin:"("+o.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",
keywords:"return throw case",relevance:0,contains:[f,o.REGEXP_MODE,{
className:"function",begin:C,returnBegin:!0,end:"\\s*=>",contains:[{
className:"params",variants:[{begin:o.UNDERSCORE_IDENT_RE,relevance:0},{
className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,
excludeEnd:!0,keywords:g,contains:p}]}]},{begin:/,/,relevance:0},{match:/\s+/,
relevance:0},{variants:[{begin:"<>",end:"</>"},{
match:/<[A-Za-z0-9\\._:-]+\s*\/>/},{begin:d.begin,
"on:begin":d.isTrulyOpeningTag,end:d.end}],subLanguage:"xml",contains:[{
begin:d.begin,end:d.end,skip:!0,contains:["self"]}]}]},O,{
beginKeywords:"while if switch catch for"},{
begin:"\\b(?!function)"+o.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
returnBegin:!0,label:"func.def",contains:[S,o.inherit(o.TITLE_MODE,{begin:b,
className:"title.function"})]},{match:/\.\.\./,relevance:0},x,{match:"\\$"+b,
relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},
contains:[S]},k,{relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,
className:"variable.constant"},w,T,{match:/\$[(.]/}]}}})()
;hljs.registerLanguage("javascript",e)})();/*! `clojure-repl` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict";return e=>({name:"Clojure REPL",contains:[{
className:"meta.prompt",begin:/^([\w.-]+|\s*#_)?=>/,starts:{end:/$/,
subLanguage:"clojure"}}]})})();hljs.registerLanguage("clojure-repl",e)})();/*! `arduino` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict";return e=>{const t={
type:["boolean","byte","word","String"],
built_in:["KeyboardController","MouseController","SoftwareSerial","EthernetServer","EthernetClient","LiquidCrystal","RobotControl","GSMVoiceCall","EthernetUDP","EsploraTFT","HttpClient","RobotMotor","WiFiClient","GSMScanner","FileSystem","Scheduler","GSMServer","YunClient","YunServer","IPAddress","GSMClient","GSMModem","Keyboard","Ethernet","Console","GSMBand","Esplora","Stepper","Process","WiFiUDP","GSM_SMS","Mailbox","USBHost","Firmata","PImage","Client","Server","GSMPIN","FileIO","Bridge","Serial","EEPROM","Stream","Mouse","Audio","Servo","File","Task","GPRS","WiFi","Wire","TFT","GSM","SPI","SD"],
_hints:["setup","loop","runShellCommandAsynchronously","analogWriteResolution","retrieveCallingNumber","printFirmwareVersion","analogReadResolution","sendDigitalPortPair","noListenOnLocalhost","readJoystickButton","setFirmwareVersion","readJoystickSwitch","scrollDisplayRight","getVoiceCallStatus","scrollDisplayLeft","writeMicroseconds","delayMicroseconds","beginTransmission","getSignalStrength","runAsynchronously","getAsynchronously","listenOnLocalhost","getCurrentCarrier","readAccelerometer","messageAvailable","sendDigitalPorts","lineFollowConfig","countryNameWrite","runShellCommand","readStringUntil","rewindDirectory","readTemperature","setClockDivider","readLightSensor","endTransmission","analogReference","detachInterrupt","countryNameRead","attachInterrupt","encryptionType","readBytesUntil","robotNameWrite","readMicrophone","robotNameRead","cityNameWrite","userNameWrite","readJoystickY","readJoystickX","mouseReleased","openNextFile","scanNetworks","noInterrupts","digitalWrite","beginSpeaker","mousePressed","isActionDone","mouseDragged","displayLogos","noAutoscroll","addParameter","remoteNumber","getModifiers","keyboardRead","userNameRead","waitContinue","processInput","parseCommand","printVersion","readNetworks","writeMessage","blinkVersion","cityNameRead","readMessage","setDataMode","parsePacket","isListening","setBitOrder","beginPacket","isDirectory","motorsWrite","drawCompass","digitalRead","clearScreen","serialEvent","rightToLeft","setTextSize","leftToRight","requestFrom","keyReleased","compassRead","analogWrite","interrupts","WiFiServer","disconnect","playMelody","parseFloat","autoscroll","getPINUsed","setPINUsed","setTimeout","sendAnalog","readSlider","analogRead","beginWrite","createChar","motorsStop","keyPressed","tempoWrite","readButton","subnetMask","debugPrint","macAddress","writeGreen","randomSeed","attachGPRS","readString","sendString","remotePort","releaseAll","mouseMoved","background","getXChange","getYChange","answerCall","getResult","voiceCall","endPacket","constrain","getSocket","writeJSON","getButton","available","connected","findUntil","readBytes","exitValue","readGreen","writeBlue","startLoop","IPAddress","isPressed","sendSysex","pauseMode","gatewayIP","setCursor","getOemKey","tuneWrite","noDisplay","loadImage","switchPIN","onRequest","onReceive","changePIN","playFile","noBuffer","parseInt","overflow","checkPIN","knobRead","beginTFT","bitClear","updateIR","bitWrite","position","writeRGB","highByte","writeRed","setSpeed","readBlue","noStroke","remoteIP","transfer","shutdown","hangCall","beginSMS","endWrite","attached","maintain","noCursor","checkReg","checkPUK","shiftOut","isValid","shiftIn","pulseIn","connect","println","localIP","pinMode","getIMEI","display","noBlink","process","getBand","running","beginSD","drawBMP","lowByte","setBand","release","bitRead","prepare","pointTo","readRed","setMode","noFill","remove","listen","stroke","detach","attach","noTone","exists","buffer","height","bitSet","circle","config","cursor","random","IRread","setDNS","endSMS","getKey","micros","millis","begin","print","write","ready","flush","width","isPIN","blink","clear","press","mkdir","rmdir","close","point","yield","image","BSSID","click","delay","read","text","move","peek","beep","rect","line","open","seek","fill","size","turn","stop","home","find","step","tone","sqrt","RSSI","SSID","end","bit","tan","cos","sin","pow","map","abs","max","min","get","run","put"],
literal:["DIGITAL_MESSAGE","FIRMATA_STRING","ANALOG_MESSAGE","REPORT_DIGITAL","REPORT_ANALOG","INPUT_PULLUP","SET_PIN_MODE","INTERNAL2V56","SYSTEM_RESET","LED_BUILTIN","INTERNAL1V1","SYSEX_START","INTERNAL","EXTERNAL","DEFAULT","OUTPUT","INPUT","HIGH","LOW"]
},r=(e=>{const t=e.regex,r=e.COMMENT("//","$",{contains:[{begin:/\\\n/}]
}),n="[a-zA-Z_]\\w*::",a="(?!struct)(decltype\\(auto\\)|"+t.optional(n)+"[a-zA-Z_]\\w*"+t.optional("<[^<>]+>")+")",i={
className:"type",begin:"\\b[a-z\\d_]*_t\\b"},s={className:"string",variants:[{
begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},{
begin:"(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
end:"'",illegal:"."},e.END_SAME_AS_BEGIN({
begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},o={
className:"number",variants:[{begin:"\\b(0b[01']+)"},{
begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"
},{
begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
}],relevance:0},l={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{
keyword:"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"
},contains:[{begin:/\\\n/,relevance:0},e.inherit(s,{className:"string"}),{
className:"string",begin:/<.*?>/},r,e.C_BLOCK_COMMENT_MODE]},c={
className:"title",begin:t.optional(n)+e.IDENT_RE,relevance:0
},d=t.optional(n)+e.IDENT_RE+"\\s*\\(",u={
type:["bool","char","char16_t","char32_t","char8_t","double","float","int","long","short","void","wchar_t","unsigned","signed","const","static"],
keyword:["alignas","alignof","and","and_eq","asm","atomic_cancel","atomic_commit","atomic_noexcept","auto","bitand","bitor","break","case","catch","class","co_await","co_return","co_yield","compl","concept","const_cast|10","consteval","constexpr","constinit","continue","decltype","default","delete","do","dynamic_cast|10","else","enum","explicit","export","extern","false","final","for","friend","goto","if","import","inline","module","mutable","namespace","new","noexcept","not","not_eq","nullptr","operator","or","or_eq","override","private","protected","public","reflexpr","register","reinterpret_cast|10","requires","return","sizeof","static_assert","static_cast|10","struct","switch","synchronized","template","this","thread_local","throw","transaction_safe","transaction_safe_dynamic","true","try","typedef","typeid","typename","union","using","virtual","volatile","while","xor","xor_eq"],
literal:["NULL","false","nullopt","nullptr","true"],built_in:["_Pragma"],
_type_hints:["any","auto_ptr","barrier","binary_semaphore","bitset","complex","condition_variable","condition_variable_any","counting_semaphore","deque","false_type","future","imaginary","initializer_list","istringstream","jthread","latch","lock_guard","multimap","multiset","mutex","optional","ostringstream","packaged_task","pair","promise","priority_queue","queue","recursive_mutex","recursive_timed_mutex","scoped_lock","set","shared_future","shared_lock","shared_mutex","shared_timed_mutex","shared_ptr","stack","string_view","stringstream","timed_mutex","thread","true_type","tuple","unique_lock","unique_ptr","unordered_map","unordered_multimap","unordered_multiset","unordered_set","variant","vector","weak_ptr","wstring","wstring_view"]
},p={className:"function.dispatch",relevance:0,keywords:{
_hint:["abort","abs","acos","apply","as_const","asin","atan","atan2","calloc","ceil","cerr","cin","clog","cos","cosh","cout","declval","endl","exchange","exit","exp","fabs","floor","fmod","forward","fprintf","fputs","free","frexp","fscanf","future","invoke","isalnum","isalpha","iscntrl","isdigit","isgraph","islower","isprint","ispunct","isspace","isupper","isxdigit","labs","launder","ldexp","log","log10","make_pair","make_shared","make_shared_for_overwrite","make_tuple","make_unique","malloc","memchr","memcmp","memcpy","memset","modf","move","pow","printf","putchar","puts","realloc","scanf","sin","sinh","snprintf","sprintf","sqrt","sscanf","std","stderr","stdin","stdout","strcat","strchr","strcmp","strcpy","strcspn","strlen","strncat","strncmp","strncpy","strpbrk","strrchr","strspn","strstr","swap","tan","tanh","terminate","to_underlying","tolower","toupper","vfprintf","visit","vprintf","vsprintf"]
},
begin:t.concat(/\b/,/(?!decltype)/,/(?!if)/,/(?!for)/,/(?!switch)/,/(?!while)/,e.IDENT_RE,t.lookahead(/(<[^<>]+>|)\s*\(/))
},m=[p,l,i,r,e.C_BLOCK_COMMENT_MODE,o,s],g={variants:[{begin:/=/,end:/;/},{
begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],
keywords:u,contains:m.concat([{begin:/\(/,end:/\)/,keywords:u,
contains:m.concat(["self"]),relevance:0}]),relevance:0},_={className:"function",
begin:"("+a+"[\\*&\\s]+)+"+d,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,
keywords:u,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:"decltype\\(auto\\)",
keywords:u,relevance:0},{begin:d,returnBegin:!0,contains:[c],relevance:0},{
begin:/::/,relevance:0},{begin:/:/,endsWithParent:!0,contains:[s,o]},{
relevance:0,match:/,/},{className:"params",begin:/\(/,end:/\)/,keywords:u,
relevance:0,contains:[r,e.C_BLOCK_COMMENT_MODE,s,o,i,{begin:/\(/,end:/\)/,
keywords:u,relevance:0,contains:["self",r,e.C_BLOCK_COMMENT_MODE,s,o,i]}]
},i,r,e.C_BLOCK_COMMENT_MODE,l]};return{name:"C++",
aliases:["cc","c++","h++","hpp","hh","hxx","cxx"],keywords:u,illegal:"</",
classNameAliases:{"function.dispatch":"built_in"},
contains:[].concat(g,_,p,m,[l,{
begin:"\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function)\\s*<(?!<)",
end:">",keywords:u,contains:["self",i]},{begin:e.IDENT_RE+"::",keywords:u},{
match:[/\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,/\s+/,/\w+/],
className:{1:"keyword",3:"title.class"}}])}})(e),n=r.keywords
;return n.type=[...n.type,...t.type],
n.literal=[...n.literal,...t.literal],n.built_in=[...n.built_in,...t.built_in],
n._hints=t._hints,r.name="Arduino",r.aliases=["ino"],r.supersetOf="cpp",r}})()
;hljs.registerLanguage("arduino",e)})();/*! `cos` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict";return e=>({name:"Cach\xe9 Object Script",
case_insensitive:!0,aliases:["cls"],
keywords:"property parameter class classmethod clientmethod extends as break catch close continue do d|0 else elseif for goto halt hang h|0 if job j|0 kill k|0 lock l|0 merge new open quit q|0 read r|0 return set s|0 tcommit throw trollback try tstart use view while write w|0 xecute x|0 zkill znspace zn ztrap zwrite zw zzdump zzwrite print zbreak zinsert zload zprint zremove zsave zzprint mv mvcall mvcrt mvdim mvprint zquit zsync ascii",
contains:[{className:"number",begin:"\\b(\\d+(\\.\\d*)?|\\.\\d+)",relevance:0},{
className:"string",variants:[{begin:'"',end:'"',contains:[{begin:'""',
relevance:0}]}]},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{
className:"comment",begin:/;/,end:"$",relevance:0},{className:"built_in",
begin:/(?:\$\$?|\.\.)\^?[a-zA-Z]+/},{className:"built_in",
begin:/\$\$\$[a-zA-Z]+/},{className:"built_in",begin:/%[a-z]+(?:\.[a-z]+)*/},{
className:"symbol",begin:/\^%?[a-zA-Z][\w]*/},{className:"keyword",
begin:/##class|##super|#define|#dim/},{begin:/&sql\(/,end:/\)/,excludeBegin:!0,
excludeEnd:!0,subLanguage:"sql"},{begin:/&(js|jscript|javascript)</,end:/>/,
excludeBegin:!0,excludeEnd:!0,subLanguage:"javascript"},{begin:/&html<\s*</,
end:/>\s*>/,subLanguage:"xml"}]})})();hljs.registerLanguage("cos",e)})();/*! `vbnet` grammar compiled for Highlight.js 11.5.1 */
(()=>{var e=(()=>{"use strict";return e=>{
const n=e.regex,t=/\d{1,2}\/\d{1,2}\/\d{4}/,a=/\d{4}-\d{1,2}-\d{1,2}/,i=/(\d|1[012])(:\d+){0,2} *(AM|PM)/,s=/\d{1,2}(:\d{1,2}){1,2}/,r={
className:"literal",variants:[{begin:n.concat(/# */,n.either(a,t),/ *#/)},{
begin:n.concat(/# */,s,/ *#/)},{begin:n.concat(/# */,i,/ *#/)},{
begin:n.concat(/# */,n.either(a,t),/ +/,n.either(i,s),/ *#/)}]
},l=e.COMMENT(/'''/,/$/,{contains:[{className:"doctag",begin:/<\/?/,end:/>/}]
}),o=e.COMMENT(null,/$/,{variants:[{begin:/'/},{begin:/([\t ]|^)REM(?=\s)/}]})
;return{name:"Visual Basic .NET",aliases:["vb"],case_insensitive:!0,
classNameAliases:{label:"symbol"},keywords:{
keyword:"addhandler alias aggregate ansi as async assembly auto binary by byref byval call case catch class compare const continue custom declare default delegate dim distinct do each equals else elseif end enum erase error event exit explicit finally for friend from function get global goto group handles if implements imports in inherits interface into iterator join key let lib loop me mid module mustinherit mustoverride mybase myclass namespace narrowing new next notinheritable notoverridable of off on operator option optional order overloads overridable overrides paramarray partial preserve private property protected public raiseevent readonly redim removehandler resume return select set shadows shared skip static step stop structure strict sub synclock take text then throw to try unicode until using when where while widening with withevents writeonly yield",
built_in:"addressof and andalso await directcast gettype getxmlnamespace is isfalse isnot istrue like mod nameof new not or orelse trycast typeof xor cbool cbyte cchar cdate cdbl cdec cint clng cobj csbyte cshort csng cstr cuint culng cushort",
type:"boolean byte char date decimal double integer long object sbyte short single string uinteger ulong ushort",
literal:"true false nothing"},
illegal:"//|\\{|\\}|endif|gosub|variant|wend|^\\$ ",contains:[{
className:"string",begin:/"(""|[^/n])"C\b/},{className:"string",begin:/"/,
end:/"/,illegal:/\n/,contains:[{begin:/""/}]},r,{className:"number",relevance:0,
variants:[{begin:/\b\d[\d_]*((\.[\d_]+(E[+-]?[\d_]+)?)|(E[+-]?[\d_]+))[RFD@!#]?/
},{begin:/\b\d[\d_]*((U?[SIL])|[%&])?/},{begin:/&H[\dA-F_]+((U?[SIL])|[%&])?/},{
begin:/&O[0-7_]+((U?[SIL])|[%&])?/},{begin:/&B[01_]+((U?[SIL])|[%&])?/}]},{
className:"label",begin:/^\w+:/},l,o,{className:"meta",
begin:/[\t ]*#(const|disable|else|elseif|enable|end|externalsource|if|region)\b/,
end:/$/,keywords:{
keyword:"const disable else elseif enable end externalsource if region then"},
contains:[o]}]}}})();hljs.registerLanguage("vbnet",e)})();