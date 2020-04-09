/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});
/*!
 * fancyBox - jQuery Plugin
 * version: 2.1.7 (Tue, 28 Feb 2017)
 * requires jQuery v1.6 or later
 *
 * Examples at http://fancyapps.com/fancybox/
 * License: www.fancyapps.com/fancybox/#license
 *
 * Copyright 2017 fancyapps.com
 *
 */

;(function (window, document, $, undefined) {
	"use strict";

	var H = $("html"),
		W = $(window),
		D = $(document),
		F = $.fancybox = function () {
			F.open.apply( this, arguments );
		},
		IE =  navigator.userAgent.match(/msie/i),
		didUpdate	= null,
		isTouch		= document.createTouch !== undefined,

		isQuery	= function(obj) {
			return obj && obj.hasOwnProperty && obj instanceof $;
		},
		isString = function(str) {
			return str && $.type(str) === "string";
		},
		isPercentage = function(str) {
			return isString(str) && str.indexOf('%') > 0;
		},
		isScrollable = function(el) {
			return (el && !(el.style.overflow && el.style.overflow === 'hidden') && ((el.clientWidth && el.scrollWidth > el.clientWidth) || (el.clientHeight && el.scrollHeight > el.clientHeight)));
		},
		getScalar = function(orig, dim) {
			var value = parseInt(orig, 10) || 0;

			if (dim && isPercentage(orig)) {
				value = F.getViewport()[ dim ] / 100 * value;
			}

			return Math.ceil(value);
		},
		getValue = function(value, dim) {
			return getScalar(value, dim) + 'px';
		};

	$.extend(F, {
		// The current version of fancyBox
		version: '2.1.7',

		defaults: {
			padding : 15,
			margin  : 20,

			width     : 800,
			height    : 600,
			minWidth  : 100,
			minHeight : 100,
			maxWidth  : 9999,
			maxHeight : 9999,
			pixelRatio: 1, // Set to 2 for retina display support

			autoSize   : true,
			autoHeight : false,
			autoWidth  : false,

			autoResize  : true,
			autoCenter  : !isTouch,
			fitToView   : true,
			aspectRatio : false,
			topRatio    : 0.5,
			leftRatio   : 0.5,

			scrolling : 'auto', // 'auto', 'yes' or 'no'
			wrapCSS   : '',

			arrows     : true,
			closeBtn   : true,
			closeClick : false,
			nextClick  : false,
			mouseWheel : true,
			autoPlay   : false,
			playSpeed  : 3000,
			preload    : 3,
			modal      : false,
			loop       : true,

			ajax  : {
				dataType : 'html',
				headers  : { 'X-fancyBox': true }
			},
			iframe : {
				scrolling : 'auto',
				preload   : true
			},
			swf : {
				wmode: 'transparent',
				allowfullscreen   : 'true',
				allowscriptaccess : 'always'
			},

			keys  : {
				next : {
					13 : 'left', // enter
					34 : 'up',   // page down
					39 : 'left', // right arrow
					40 : 'up'    // down arrow
				},
				prev : {
					8  : 'right',  // backspace
					33 : 'down',   // page up
					37 : 'right',  // left arrow
					38 : 'down'    // up arrow
				},
				close  : [27], // escape key
				play   : [32], // space - start/stop slideshow
				toggle : [70]  // letter "f" - toggle fullscreen
			},

			direction : {
				next : 'left',
				prev : 'right'
			},

			scrollOutside  : true,

			// Override some properties
			index   : 0,
			type    : null,
			href    : null,
			content : null,
			title   : null,

			// HTML templates
			tpl: {
				wrap     : '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
				image    : '<img class="fancybox-image" src="{href}" alt="" />',
				iframe   : '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (IE ? ' allowtransparency="true"' : '') + '></iframe>',
				error    : '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
				closeBtn : '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
				next     : '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
				prev     : '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>',
				loading  : '<div id="fancybox-loading"><div></div></div>'
			},

			// Properties for each animation type
			// Opening fancyBox
			openEffect  : 'fade', // 'elastic', 'fade' or 'none'
			openSpeed   : 250,
			openEasing  : 'swing',
			openOpacity : true,
			openMethod  : 'zoomIn',

			// Closing fancyBox
			closeEffect  : 'fade', // 'elastic', 'fade' or 'none'
			closeSpeed   : 250,
			closeEasing  : 'swing',
			closeOpacity : true,
			closeMethod  : 'zoomOut',

			// Changing next gallery item
			nextEffect : 'elastic', // 'elastic', 'fade' or 'none'
			nextSpeed  : 250,
			nextEasing : 'swing',
			nextMethod : 'changeIn',

			// Changing previous gallery item
			prevEffect : 'elastic', // 'elastic', 'fade' or 'none'
			prevSpeed  : 250,
			prevEasing : 'swing',
			prevMethod : 'changeOut',

			// Enable default helpers
			helpers : {
				overlay : true,
				title   : true
			},

			// Callbacks
			onCancel     : $.noop, // If canceling
			beforeLoad   : $.noop, // Before loading
			afterLoad    : $.noop, // After loading
			beforeShow   : $.noop, // Before changing in current item
			afterShow    : $.noop, // After opening
			beforeChange : $.noop, // Before changing gallery item
			beforeClose  : $.noop, // Before closing
			afterClose   : $.noop  // After closing
		},

		//Current state
		group    : {}, // Selected group
		opts     : {}, // Group options
		previous : null,  // Previous element
		coming   : null,  // Element being loaded
		current  : null,  // Currently loaded element
		isActive : false, // Is activated
		isOpen   : false, // Is currently open
		isOpened : false, // Have been fully opened at least once

		wrap  : null,
		skin  : null,
		outer : null,
		inner : null,

		player : {
			timer    : null,
			isActive : false
		},

		// Loaders
		ajaxLoad   : null,
		imgPreload : null,

		// Some collections
		transitions : {},
		helpers     : {},

		/*
		 *	Static methods
		 */

		open: function (group, opts) {
			if (!group) {
				return;
			}

			if (!$.isPlainObject(opts)) {
				opts = {};
			}

			// Close if already active
			if (false === F.close(true)) {
				return;
			}

			// Normalize group
			if (!$.isArray(group)) {
				group = isQuery(group) ? $(group).get() : [group];
			}

			// Recheck if the type of each element is `object` and set content type (image, ajax, etc)
			$.each(group, function(i, element) {
				var obj = {},
					href,
					title,
					content,
					type,
					rez,
					hrefParts,
					selector;

				if ($.type(element) === "object") {
					// Check if is DOM element
					if (element.nodeType) {
						element = $(element);
					}

					if (isQuery(element)) {
						obj = {
							href    : element.data('fancybox-href') || element.attr('href'),
							title   : $('<div/>').text( element.data('fancybox-title') || element.attr('title') || '' ).html(),
							isDom   : true,
							element : element
						};

						if ($.metadata) {
							$.extend(true, obj, element.metadata());
						}

					} else {
						obj = element;
					}
				}

				href  = opts.href  || obj.href || (isString(element) ? element : null);
				title = opts.title !== undefined ? opts.title : obj.title || '';

				content = opts.content || obj.content;
				type    = content ? 'html' : (opts.type  || obj.type);

				if (!type && obj.isDom) {
					type = element.data('fancybox-type');

					if (!type) {
						rez  = element.prop('class').match(/fancybox\.(\w+)/);
						type = rez ? rez[1] : null;
					}
				}

				if (isString(href)) {
					// Try to guess the content type
					if (!type) {
						if (F.isImage(href)) {
							type = 'image';

						} else if (F.isSWF(href)) {
							type = 'swf';

						} else if (href.charAt(0) === '#') {
							type = 'inline';

						} else if (isString(element)) {
							type    = 'html';
							content = element;
						}
					}

					// Split url into two pieces with source url and content selector, e.g,
					// "/mypage.html #my_id" will load "/mypage.html" and display element having id "my_id"
					if (type === 'ajax') {
						hrefParts = href.split(/\s+/, 2);
						href      = hrefParts.shift();
						selector  = hrefParts.shift();
					}
				}

				if (!content) {
					if (type === 'inline') {
						if (href) {
							content = $( isString(href) ? href.replace(/.*(?=#[^\s]+$)/, '') : href ); //strip for ie7

						} else if (obj.isDom) {
							content = element;
						}

					} else if (type === 'html') {
						content = href;

					} else if (!type && !href && obj.isDom) {
						type    = 'inline';
						content = element;
					}
				}

				$.extend(obj, {
					href     : href,
					type     : type,
					content  : content,
					title    : title,
					selector : selector
				});

				group[ i ] = obj;
			});

			// Extend the defaults
			F.opts = $.extend(true, {}, F.defaults, opts);

			// All options are merged recursive except keys
			if (opts.keys !== undefined) {
				F.opts.keys = opts.keys ? $.extend({}, F.defaults.keys, opts.keys) : false;
			}

			F.group = group;

			return F._start(F.opts.index);
		},

		// Cancel image loading or abort ajax request
		cancel: function () {
			var coming = F.coming;

			if (coming && false === F.trigger('onCancel')) {
				return;
			}

			F.hideLoading();

			if (!coming) {
				return;
			}

			if (F.ajaxLoad) {
				F.ajaxLoad.abort();
			}

			F.ajaxLoad = null;

			if (F.imgPreload) {
				F.imgPreload.onload = F.imgPreload.onerror = null;
			}

			if (coming.wrap) {
				coming.wrap.stop(true, true).trigger('onReset').remove();
			}

			F.coming = null;

			// If the first item has been canceled, then clear everything
			if (!F.current) {
				F._afterZoomOut( coming );
			}
		},

		// Start closing animation if is open; remove immediately if opening/closing
		close: function (event) {
			F.cancel();

			if (false === F.trigger('beforeClose')) {
				return;
			}

			F.unbindEvents();

			if (!F.isActive) {
				return;
			}

			if (!F.isOpen || event === true) {
				$('.fancybox-wrap').stop(true).trigger('onReset').remove();

				F._afterZoomOut();

			} else {
				F.isOpen = F.isOpened = false;
				F.isClosing = true;

				$('.fancybox-item, .fancybox-nav').remove();

				F.wrap.stop(true, true).removeClass('fancybox-opened');

				F.transitions[ F.current.closeMethod ]();
			}
		},

		// Manage slideshow:
		//   $.fancybox.play(); - toggle slideshow
		//   $.fancybox.play( true ); - start
		//   $.fancybox.play( false ); - stop
		play: function ( action ) {
			var clear = function () {
					clearTimeout(F.player.timer);
				},
				set = function () {
					clear();

					if (F.current && F.player.isActive) {
						F.player.timer = setTimeout(F.next, F.current.playSpeed);
					}
				},
				stop = function () {
					clear();

					D.unbind('.player');

					F.player.isActive = false;

					F.trigger('onPlayEnd');
				},
				start = function () {
					if (F.current && (F.current.loop || F.current.index < F.group.length - 1)) {
						F.player.isActive = true;

						D.bind({
							'onCancel.player beforeClose.player' : stop,
							'onUpdate.player'   : set,
							'beforeLoad.player' : clear
						});

						set();

						F.trigger('onPlayStart');
					}
				};

			if (action === true || (!F.player.isActive && action !== false)) {
				start();
			} else {
				stop();
			}
		},

		// Navigate to next gallery item
		next: function ( direction ) {
			var current = F.current;

			if (current) {
				if (!isString(direction)) {
					direction = current.direction.next;
				}

				F.jumpto(current.index + 1, direction, 'next');
			}
		},

		// Navigate to previous gallery item
		prev: function ( direction ) {
			var current = F.current;

			if (current) {
				if (!isString(direction)) {
					direction = current.direction.prev;
				}

				F.jumpto(current.index - 1, direction, 'prev');
			}
		},

		// Navigate to gallery item by index
		jumpto: function ( index, direction, router ) {
			var current = F.current;

			if (!current) {
				return;
			}

			index = getScalar(index);

			F.direction = direction || current.direction[ (index >= current.index ? 'next' : 'prev') ];
			F.router    = router || 'jumpto';

			if (current.loop) {
				if (index < 0) {
					index = current.group.length + (index % current.group.length);
				}

				index = index % current.group.length;
			}

			if (current.group[ index ] !== undefined) {
				F.cancel();

				F._start(index);
			}
		},

		// Center inside viewport and toggle position type to fixed or absolute if needed
		reposition: function (e, onlyAbsolute) {
			var current = F.current,
				wrap    = current ? current.wrap : null,
				pos;

			if (wrap) {
				pos = F._getPosition(onlyAbsolute);

				if (e && e.type === 'scroll') {
					delete pos.position;

					wrap.stop(true, true).animate(pos, 200);

				} else {
					wrap.css(pos);

					current.pos = $.extend({}, current.dim, pos);
				}
			}
		},

		update: function (e) {
			var type = (e && e.originalEvent && e.originalEvent.type),
				anyway = !type || type === 'orientationchange';

			if (anyway) {
				clearTimeout(didUpdate);

				didUpdate = null;
			}

			if (!F.isOpen || didUpdate) {
				return;
			}

			didUpdate = setTimeout(function() {
				var current = F.current;

				if (!current || F.isClosing) {
					return;
				}

				F.wrap.removeClass('fancybox-tmp');

				if (anyway || type === 'load' || (type === 'resize' && current.autoResize)) {
					F._setDimension();
				}

				if (!(type === 'scroll' && current.canShrink)) {
					F.reposition(e);
				}

				F.trigger('onUpdate');

				didUpdate = null;

			}, (anyway && !isTouch ? 0 : 300));
		},

		// Shrink content to fit inside viewport or restore if resized
		toggle: function ( action ) {
			if (F.isOpen) {
				F.current.fitToView = $.type(action) === "boolean" ? action : !F.current.fitToView;

				// Help browser to restore document dimensions
				if (isTouch) {
					F.wrap.removeAttr('style').addClass('fancybox-tmp');

					F.trigger('onUpdate');
				}

				F.update();
			}
		},

		hideLoading: function () {
			D.unbind('.loading');

			$('#fancybox-loading').remove();
		},

		showLoading: function () {
			var el, viewport;

			F.hideLoading();

			el = $(F.opts.tpl.loading).click(F.cancel).appendTo('body');

			// If user will press the escape-button, the request will be canceled
			D.bind('keydown.loading', function(e) {
				if ((e.which || e.keyCode) === 27) {
					e.preventDefault();

					F.cancel();
				}
			});

			if (!F.defaults.fixed) {
				viewport = F.getViewport();

				el.css({
					position : 'absolute',
					top  : (viewport.h * 0.5) + viewport.y,
					left : (viewport.w * 0.5) + viewport.x
				});
			}

			F.trigger('onLoading');
		},

		getViewport: function () {
			var locked = (F.current && F.current.locked) || false,
				rez    = {
					x: W.scrollLeft(),
					y: W.scrollTop()
				};

			if (locked && locked.length) {
				rez.w = locked[0].clientWidth;
				rez.h = locked[0].clientHeight;

			} else {
				// See http://bugs.jquery.com/ticket/6724
				rez.w = isTouch && window.innerWidth  ? window.innerWidth  : W.width();
				rez.h = isTouch && window.innerHeight ? window.innerHeight : W.height();
			}

			return rez;
		},

		// Unbind the keyboard / clicking actions
		unbindEvents: function () {
			if (F.wrap && isQuery(F.wrap)) {
				F.wrap.unbind('.fb');
			}

			D.unbind('.fb');
			W.unbind('.fb');
		},

		bindEvents: function () {
			var current = F.current,
				keys;

			if (!current) {
				return;
			}

			// Changing document height on iOS devices triggers a 'resize' event,
			// that can change document height... repeating infinitely
			W.bind('orientationchange.fb' + (isTouch ? '' : ' resize.fb') + (current.autoCenter && !current.locked ? ' scroll.fb' : ''), F.update);

			keys = current.keys;

			if (keys) {
				D.bind('keydown.fb', function (e) {
					var code   = e.which || e.keyCode,
						target = e.target || e.srcElement;

					// Skip esc key if loading, because showLoading will cancel preloading
					if (code === 27 && F.coming) {
						return false;
					}

					// Ignore key combinations and key events within form elements
					if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && !(target && (target.type || $(target).is('[contenteditable]')))) {
						$.each(keys, function(i, val) {
							if (current.group.length > 1 && val[ code ] !== undefined) {
								F[ i ]( val[ code ] );

								e.preventDefault();
								return false;
							}

							if ($.inArray(code, val) > -1) {
								F[ i ] ();

								e.preventDefault();
								return false;
							}
						});
					}
				});
			}

			if ($.fn.mousewheel && current.mouseWheel) {
				F.wrap.bind('mousewheel.fb', function (e, delta, deltaX, deltaY) {
					var target = e.target || null,
						parent = $(target),
						canScroll = false;

					while (parent.length) {
						if (canScroll || parent.is('.fancybox-skin') || parent.is('.fancybox-wrap')) {
							break;
						}

						canScroll = isScrollable( parent[0] );
						parent    = $(parent).parent();
					}

					if (delta !== 0 && !canScroll) {
						if (F.group.length > 1 && !current.canShrink) {
							if (deltaY > 0 || deltaX > 0) {
								F.prev( deltaY > 0 ? 'down' : 'left' );

							} else if (deltaY < 0 || deltaX < 0) {
								F.next( deltaY < 0 ? 'up' : 'right' );
							}

							e.preventDefault();
						}
					}
				});
			}
		},

		trigger: function (event, o) {
			var ret, obj = o || F.coming || F.current;

			if (obj) {
				if ($.isFunction( obj[event] )) {
					ret = obj[event].apply(obj, Array.prototype.slice.call(arguments, 1));
				}

				if (ret === false) {
					return false;
				}

				if (obj.helpers) {
					$.each(obj.helpers, function (helper, opts) {
						if (opts && F.helpers[helper] && $.isFunction(F.helpers[helper][event])) {
							F.helpers[helper][event]($.extend(true, {}, F.helpers[helper].defaults, opts), obj);
						}
					});
				}
			}

			D.trigger(event);
		},

		isImage: function (str) {
			return isString(str) && str.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i);
		},

		isSWF: function (str) {
			return isString(str) && str.match(/\.(swf)((\?|#).*)?$/i);
		},

		_start: function (index) {
			var coming = {},
				obj,
				href,
				type,
				margin,
				padding;

			index = getScalar( index );
			obj   = F.group[ index ] || null;

			if (!obj) {
				return false;
			}

			coming = $.extend(true, {}, F.opts, obj);

			// Convert margin and padding properties to array - top, right, bottom, left
			margin  = coming.margin;
			padding = coming.padding;

			if ($.type(margin) === 'number') {
				coming.margin = [margin, margin, margin, margin];
			}

			if ($.type(padding) === 'number') {
				coming.padding = [padding, padding, padding, padding];
			}

			// 'modal' propery is just a shortcut
			if (coming.modal) {
				$.extend(true, coming, {
					closeBtn   : false,
					closeClick : false,
					nextClick  : false,
					arrows     : false,
					mouseWheel : false,
					keys       : null,
					helpers: {
						overlay : {
							closeClick : false
						}
					}
				});
			}

			// 'autoSize' property is a shortcut, too
			if (coming.autoSize) {
				coming.autoWidth = coming.autoHeight = true;
			}

			if (coming.width === 'auto') {
				coming.autoWidth = true;
			}

			if (coming.height === 'auto') {
				coming.autoHeight = true;
			}

			/*
			 * Add reference to the group, so it`s possible to access from callbacks, example:
			 * afterLoad : function() {
			 *     this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
			 * }
			 */

			coming.group  = F.group;
			coming.index  = index;

			// Give a chance for callback or helpers to update coming item (type, title, etc)
			F.coming = coming;

			if (false === F.trigger('beforeLoad')) {
				F.coming = null;

				return;
			}

			type = coming.type;
			href = coming.href;

			if (!type) {
				F.coming = null;

				//If we can not determine content type then drop silently or display next/prev item if looping through gallery
				if (F.current && F.router && F.router !== 'jumpto') {
					F.current.index = index;

					return F[ F.router ]( F.direction );
				}

				return false;
			}

			F.isActive = true;

			if (type === 'image' || type === 'swf') {
				coming.autoHeight = coming.autoWidth = false;
				coming.scrolling  = 'visible';
			}

			if (type === 'image') {
				coming.aspectRatio = true;
			}

			if (type === 'iframe' && isTouch) {
				coming.scrolling = 'scroll';
			}

			// Build the neccessary markup
			coming.wrap = $(coming.tpl.wrap).addClass('fancybox-' + (isTouch ? 'mobile' : 'desktop') + ' fancybox-type-' + type + ' fancybox-tmp ' + coming.wrapCSS).appendTo( coming.parent || 'body' );

			$.extend(coming, {
				skin  : $('.fancybox-skin',  coming.wrap),
				outer : $('.fancybox-outer', coming.wrap),
				inner : $('.fancybox-inner', coming.wrap)
			});

			$.each(["Top", "Right", "Bottom", "Left"], function(i, v) {
				coming.skin.css('padding' + v, getValue(coming.padding[ i ]));
			});

			F.trigger('onReady');

			// Check before try to load; 'inline' and 'html' types need content, others - href
			if (type === 'inline' || type === 'html') {
				if (!coming.content || !coming.content.length) {
					return F._error( 'content' );
				}

			} else if (!href) {
				return F._error( 'href' );
			}

			if (type === 'image') {
				F._loadImage();

			} else if (type === 'ajax') {
				F._loadAjax();

			} else if (type === 'iframe') {
				F._loadIframe();

			} else {
				F._afterLoad();
			}
		},

		_error: function ( type ) {
			$.extend(F.coming, {
				type       : 'html',
				autoWidth  : true,
				autoHeight : true,
				minWidth   : 0,
				minHeight  : 0,
				scrolling  : 'no',
				hasError   : type,
				content    : F.coming.tpl.error
			});

			F._afterLoad();
		},

		_loadImage: function () {
			// Reset preload image so it is later possible to check "complete" property
			var img = F.imgPreload = new Image();

			img.onload = function () {
				this.onload = this.onerror = null;

				F.coming.width  = this.width / F.opts.pixelRatio;
				F.coming.height = this.height / F.opts.pixelRatio;

				F._afterLoad();
			};

			img.onerror = function () {
				this.onload = this.onerror = null;

				F._error( 'image' );
			};

			img.src = F.coming.href;

			if (img.complete !== true) {
				F.showLoading();
			}
		},

		_loadAjax: function () {
			var coming = F.coming;

			F.showLoading();

			F.ajaxLoad = $.ajax($.extend({}, coming.ajax, {
				url: coming.href,
				error: function (jqXHR, textStatus) {
					if (F.coming && textStatus !== 'abort') {
						F._error( 'ajax', jqXHR );

					} else {
						F.hideLoading();
					}
				},
				success: function (data, textStatus) {
					if (textStatus === 'success') {
						coming.content = data;

						F._afterLoad();
					}
				}
			}));
		},

		_loadIframe: function() {
			var coming = F.coming,
				iframe = $(coming.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime()))
					.attr('scrolling', isTouch ? 'auto' : coming.iframe.scrolling)
					.attr('src', coming.href);

			// This helps IE
			$(coming.wrap).bind('onReset', function () {
				try {
					$(this).find('iframe').hide().attr('src', '//about:blank').end().empty();
				} catch (e) {}
			});

			if (coming.iframe.preload) {
				F.showLoading();

				iframe.one('load', function() {
					$(this).data('ready', 1);

					// iOS will lose scrolling if we resize
					if (!isTouch) {
						$(this).bind('load.fb', F.update);
					}

					// Without this trick:
					//   - iframe won't scroll on iOS devices
					//   - IE7 sometimes displays empty iframe
					$(this).parents('.fancybox-wrap').width('100%').removeClass('fancybox-tmp').show();

					F._afterLoad();
				});
			}

			coming.content = iframe.appendTo( coming.inner );

			if (!coming.iframe.preload) {
				F._afterLoad();
			}
		},

		_preloadImages: function() {
			var group   = F.group,
				current = F.current,
				len     = group.length,
				cnt     = current.preload ? Math.min(current.preload, len - 1) : 0,
				item,
				i;

			for (i = 1; i <= cnt; i += 1) {
				item = group[ (current.index + i ) % len ];

				if (item.type === 'image' && item.href) {
					new Image().src = item.href;
				}
			}
		},

		_afterLoad: function () {
			var coming   = F.coming,
				previous = F.current,
				placeholder = 'fancybox-placeholder',
				current,
				content,
				type,
				scrolling,
				href,
				embed;

			F.hideLoading();

			if (!coming || F.isActive === false) {
				return;
			}

			if (false === F.trigger('afterLoad', coming, previous)) {
				coming.wrap.stop(true).trigger('onReset').remove();

				F.coming = null;

				return;
			}

			if (previous) {
				F.trigger('beforeChange', previous);

				previous.wrap.stop(true).removeClass('fancybox-opened')
					.find('.fancybox-item, .fancybox-nav')
					.remove();
			}

			F.unbindEvents();

			current   = coming;
			content   = coming.content;
			type      = coming.type;
			scrolling = coming.scrolling;

			$.extend(F, {
				wrap  : current.wrap,
				skin  : current.skin,
				outer : current.outer,
				inner : current.inner,
				current  : current,
				previous : previous
			});

			href = current.href;

			switch (type) {
				case 'inline':
				case 'ajax':
				case 'html':
					if (current.selector) {
						content = $('<div>').html(content).find(current.selector);

					} else if (isQuery(content)) {
						if (!content.data(placeholder)) {
							content.data(placeholder, $('<div class="' + placeholder + '"></div>').insertAfter( content ).hide() );
						}

						content = content.show().detach();

						current.wrap.bind('onReset', function () {
							if ($(this).find(content).length) {
								content.hide().replaceAll( content.data(placeholder) ).data(placeholder, false);
							}
						});
					}
				break;

				case 'image':
					content = current.tpl.image.replace(/\{href\}/g, href);
				break;

				case 'swf':
					content = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + href + '"></param>';
					embed   = '';

					$.each(current.swf, function(name, val) {
						content += '<param name="' + name + '" value="' + val + '"></param>';
						embed   += ' ' + name + '="' + val + '"';
					});

					content += '<embed src="' + href + '" type="application/x-shockwave-flash" width="100%" height="100%"' + embed + '></embed></object>';
				break;
			}

			if (!(isQuery(content) && content.parent().is(current.inner))) {
				current.inner.append( content );
			}

			// Give a chance for helpers or callbacks to update elements
			F.trigger('beforeShow');

			// Set scrolling before calculating dimensions
			current.inner.css('overflow', scrolling === 'yes' ? 'scroll' : (scrolling === 'no' ? 'hidden' : scrolling));

			// Set initial dimensions and start position
			F._setDimension();

			F.reposition();

			F.isOpen = false;
			F.coming = null;

			F.bindEvents();

			if (!F.isOpened) {
				$('.fancybox-wrap').not( current.wrap ).stop(true).trigger('onReset').remove();

			} else if (previous.prevMethod) {
				F.transitions[ previous.prevMethod ]();
			}

			F.transitions[ F.isOpened ? current.nextMethod : current.openMethod ]();

			F._preloadImages();
		},

		_setDimension: function () {
			var viewport   = F.getViewport(),
				steps      = 0,
				canShrink  = false,
				canExpand  = false,
				wrap       = F.wrap,
				skin       = F.skin,
				inner      = F.inner,
				current    = F.current,
				width      = current.width,
				height     = current.height,
				minWidth   = current.minWidth,
				minHeight  = current.minHeight,
				maxWidth   = current.maxWidth,
				maxHeight  = current.maxHeight,
				scrolling  = current.scrolling,
				scrollOut  = current.scrollOutside ? current.scrollbarWidth : 0,
				margin     = current.margin,
				wMargin    = getScalar(margin[1] + margin[3]),
				hMargin    = getScalar(margin[0] + margin[2]),
				wPadding,
				hPadding,
				wSpace,
				hSpace,
				origWidth,
				origHeight,
				origMaxWidth,
				origMaxHeight,
				ratio,
				width_,
				height_,
				maxWidth_,
				maxHeight_,
				iframe,
				body;

			// Reset dimensions so we could re-check actual size
			wrap.add(skin).add(inner).width('auto').height('auto').removeClass('fancybox-tmp');

			wPadding = getScalar(skin.outerWidth(true)  - skin.width());
			hPadding = getScalar(skin.outerHeight(true) - skin.height());

			// Any space between content and viewport (margin, padding, border, title)
			wSpace = wMargin + wPadding;
			hSpace = hMargin + hPadding;

			origWidth  = isPercentage(width)  ? (viewport.w - wSpace) * getScalar(width)  / 100 : width;
			origHeight = isPercentage(height) ? (viewport.h - hSpace) * getScalar(height) / 100 : height;

			if (current.type === 'iframe') {
				iframe = current.content;

				if (current.autoHeight && iframe && iframe.data('ready') === 1) {
					try {
						if (iframe[0].contentWindow.document.location) {
							inner.width( origWidth ).height(9999);

							body = iframe.contents().find('body');

							if (scrollOut) {
								body.css('overflow-x', 'hidden');
							}

							origHeight = body.outerHeight(true);
						}

					} catch (e) {}
				}

			} else if (current.autoWidth || current.autoHeight) {
				inner.addClass( 'fancybox-tmp' );

				// Set width or height in case we need to calculate only one dimension
				if (!current.autoWidth) {
					inner.width( origWidth );
				}

				if (!current.autoHeight) {
					inner.height( origHeight );
				}

				if (current.autoWidth) {
					origWidth = inner.width();
				}

				if (current.autoHeight) {
					origHeight = inner.height();
				}

				inner.removeClass( 'fancybox-tmp' );
			}

			width  = getScalar( origWidth );
			height = getScalar( origHeight );

			ratio  = origWidth / origHeight;

			// Calculations for the content
			minWidth  = getScalar(isPercentage(minWidth) ? getScalar(minWidth, 'w') - wSpace : minWidth);
			maxWidth  = getScalar(isPercentage(maxWidth) ? getScalar(maxWidth, 'w') - wSpace : maxWidth);

			minHeight = getScalar(isPercentage(minHeight) ? getScalar(minHeight, 'h') - hSpace : minHeight);
			maxHeight = getScalar(isPercentage(maxHeight) ? getScalar(maxHeight, 'h') - hSpace : maxHeight);

			// These will be used to determine if wrap can fit in the viewport
			origMaxWidth  = maxWidth;
			origMaxHeight = maxHeight;

			if (current.fitToView) {
				maxWidth  = Math.min(viewport.w - wSpace, maxWidth);
				maxHeight = Math.min(viewport.h - hSpace, maxHeight);
			}

			maxWidth_  = viewport.w - wMargin;
			maxHeight_ = viewport.h - hMargin;

			if (current.aspectRatio) {
				if (width > maxWidth) {
					width  = maxWidth;
					height = getScalar(width / ratio);
				}

				if (height > maxHeight) {
					height = maxHeight;
					width  = getScalar(height * ratio);
				}

				if (width < minWidth) {
					width  = minWidth;
					height = getScalar(width / ratio);
				}

				if (height < minHeight) {
					height = minHeight;
					width  = getScalar(height * ratio);
				}

			} else {
				width = Math.max(minWidth, Math.min(width, maxWidth));

				if (current.autoHeight && current.type !== 'iframe') {
					inner.width( width );

					height = inner.height();
				}

				height = Math.max(minHeight, Math.min(height, maxHeight));
			}

			// Try to fit inside viewport (including the title)
			if (current.fitToView) {
				inner.width( width ).height( height );

				wrap.width( width + wPadding );

				// Real wrap dimensions
				width_  = wrap.width();
				height_ = wrap.height();

				if (current.aspectRatio) {
					while ((width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight) {
						if (steps++ > 19) {
							break;
						}

						height = Math.max(minHeight, Math.min(maxHeight, height - 10));
						width  = getScalar(height * ratio);

						if (width < minWidth) {
							width  = minWidth;
							height = getScalar(width / ratio);
						}

						if (width > maxWidth) {
							width  = maxWidth;
							height = getScalar(width / ratio);
						}

						inner.width( width ).height( height );

						wrap.width( width + wPadding );

						width_  = wrap.width();
						height_ = wrap.height();
					}

				} else {
					width  = Math.max(minWidth,  Math.min(width,  width  - (width_  - maxWidth_)));
					height = Math.max(minHeight, Math.min(height, height - (height_ - maxHeight_)));
				}
			}

			if (scrollOut && scrolling === 'auto' && height < origHeight && (width + wPadding + scrollOut) < maxWidth_) {
				width += scrollOut;
			}

			inner.width( width ).height( height );

			wrap.width( width + wPadding );

			width_  = wrap.width();
			height_ = wrap.height();

			canShrink = (width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight;
			canExpand = current.aspectRatio ? (width < origMaxWidth && height < origMaxHeight && width < origWidth && height < origHeight) : ((width < origMaxWidth || height < origMaxHeight) && (width < origWidth || height < origHeight));

			$.extend(current, {
				dim : {
					width	: getValue( width_ ),
					height	: getValue( height_ )
				},
				origWidth  : origWidth,
				origHeight : origHeight,
				canShrink  : canShrink,
				canExpand  : canExpand,
				wPadding   : wPadding,
				hPadding   : hPadding,
				wrapSpace  : height_ - skin.outerHeight(true),
				skinSpace  : skin.height() - height
			});

			if (!iframe && current.autoHeight && height > minHeight && height < maxHeight && !canExpand) {
				inner.height('auto');
			}
		},

		_getPosition: function (onlyAbsolute) {
			var current  = F.current,
				viewport = F.getViewport(),
				margin   = current.margin,
				width    = F.wrap.width()  + margin[1] + margin[3],
				height   = F.wrap.height() + margin[0] + margin[2],
				rez      = {
					position: 'absolute',
					top  : margin[0],
					left : margin[3]
				};

			if (current.autoCenter && current.fixed && !onlyAbsolute && height <= viewport.h && width <= viewport.w) {
				rez.position = 'fixed';

			} else if (!current.locked) {
				rez.top  += viewport.y;
				rez.left += viewport.x;
			}

			rez.top  = getValue(Math.max(rez.top,  rez.top  + ((viewport.h - height) * current.topRatio)));
			rez.left = getValue(Math.max(rez.left, rez.left + ((viewport.w - width)  * current.leftRatio)));

			return rez;
		},

		_afterZoomIn: function () {
			var current = F.current;

			if (!current) {
				return;
			}

			F.isOpen = F.isOpened = true;

			F.wrap.css('overflow', 'visible').addClass('fancybox-opened').hide().show(0);

			F.update();

			// Assign a click event
			if ( current.closeClick || (current.nextClick && F.group.length > 1) ) {
				F.inner.css('cursor', 'pointer').bind('click.fb', function(e) {
					if (!$(e.target).is('a') && !$(e.target).parent().is('a')) {
						e.preventDefault();

						F[ current.closeClick ? 'close' : 'next' ]();
					}
				});
			}

			// Create a close button
			if (current.closeBtn) {
				$(current.tpl.closeBtn).appendTo(F.skin).bind('click.fb', function(e) {
					e.preventDefault();

					F.close();
				});
			}

			// Create navigation arrows
			if (current.arrows && F.group.length > 1) {
				if (current.loop || current.index > 0) {
					$(current.tpl.prev).appendTo(F.outer).bind('click.fb', F.prev);
				}

				if (current.loop || current.index < F.group.length - 1) {
					$(current.tpl.next).appendTo(F.outer).bind('click.fb', F.next);
				}
			}

			F.trigger('afterShow');

			// Stop the slideshow if this is the last item
			if (!current.loop && current.index === current.group.length - 1) {

				F.play( false );

			} else if (F.opts.autoPlay && !F.player.isActive) {
				F.opts.autoPlay = false;

				F.play(true);
			}
		},

		_afterZoomOut: function ( obj ) {
			obj = obj || F.current;

			$('.fancybox-wrap').trigger('onReset').remove();

			$.extend(F, {
				group  : {},
				opts   : {},
				router : false,
				current   : null,
				isActive  : false,
				isOpened  : false,
				isOpen    : false,
				isClosing : false,
				wrap   : null,
				skin   : null,
				outer  : null,
				inner  : null
			});

			F.trigger('afterClose', obj);
		}
	});

	/*
	 *	Default transitions
	 */

	F.transitions = {
		getOrigPosition: function () {
			var current  = F.current,
				element  = current.element,
				orig     = current.orig,
				pos      = {},
				width    = 50,
				height   = 50,
				hPadding = current.hPadding,
				wPadding = current.wPadding,
				viewport = F.getViewport();

			if (!orig && current.isDom && element.is(':visible')) {
				orig = element.find('img:first');

				if (!orig.length) {
					orig = element;
				}
			}

			if (isQuery(orig)) {
				pos = orig.offset();

				if (orig.is('img')) {
					width  = orig.outerWidth();
					height = orig.outerHeight();
				}

			} else {
				pos.top  = viewport.y + (viewport.h - height) * current.topRatio;
				pos.left = viewport.x + (viewport.w - width)  * current.leftRatio;
			}

			if (F.wrap.css('position') === 'fixed' || current.locked) {
				pos.top  -= viewport.y;
				pos.left -= viewport.x;
			}

			pos = {
				top     : getValue(pos.top  - hPadding * current.topRatio),
				left    : getValue(pos.left - wPadding * current.leftRatio),
				width   : getValue(width  + wPadding),
				height  : getValue(height + hPadding)
			};

			return pos;
		},

		step: function (now, fx) {
			var ratio,
				padding,
				value,
				prop       = fx.prop,
				current    = F.current,
				wrapSpace  = current.wrapSpace,
				skinSpace  = current.skinSpace;

			if (prop === 'width' || prop === 'height') {
				ratio = fx.end === fx.start ? 1 : (now - fx.start) / (fx.end - fx.start);

				if (F.isClosing) {
					ratio = 1 - ratio;
				}

				padding = prop === 'width' ? current.wPadding : current.hPadding;
				value   = now - padding;

				F.skin[ prop ](  getScalar( prop === 'width' ?  value : value - (wrapSpace * ratio) ) );
				F.inner[ prop ]( getScalar( prop === 'width' ?  value : value - (wrapSpace * ratio) - (skinSpace * ratio) ) );
			}
		},

		zoomIn: function () {
			var current  = F.current,
				startPos = current.pos,
				effect   = current.openEffect,
				elastic  = effect === 'elastic',
				endPos   = $.extend({opacity : 1}, startPos);

			// Remove "position" property that breaks older IE
			delete endPos.position;

			if (elastic) {
				startPos = this.getOrigPosition();

				if (current.openOpacity) {
					startPos.opacity = 0.1;
				}

			} else if (effect === 'fade') {
				startPos.opacity = 0.1;
			}

			F.wrap.css(startPos).animate(endPos, {
				duration : effect === 'none' ? 0 : current.openSpeed,
				easing   : current.openEasing,
				step     : elastic ? this.step : null,
				complete : F._afterZoomIn
			});
		},

		zoomOut: function () {
			var current  = F.current,
				effect   = current.closeEffect,
				elastic  = effect === 'elastic',
				endPos   = {opacity : 0.1};

			if (elastic) {
				endPos = this.getOrigPosition();

				if (current.closeOpacity) {
					endPos.opacity = 0.1;
				}
			}

			F.wrap.animate(endPos, {
				duration : effect === 'none' ? 0 : current.closeSpeed,
				easing   : current.closeEasing,
				step     : elastic ? this.step : null,
				complete : F._afterZoomOut
			});
		},

		changeIn: function () {
			var current   = F.current,
				effect    = current.nextEffect,
				startPos  = current.pos,
				endPos    = { opacity : 1 },
				direction = F.direction,
				distance  = 200,
				field;

			startPos.opacity = 0.1;

			if (effect === 'elastic') {
				field = direction === 'down' || direction === 'up' ? 'top' : 'left';

				if (direction === 'down' || direction === 'right') {
					startPos[ field ] = getValue(getScalar(startPos[ field ]) - distance);
					endPos[ field ]   = '+=' + distance + 'px';

				} else {
					startPos[ field ] = getValue(getScalar(startPos[ field ]) + distance);
					endPos[ field ]   = '-=' + distance + 'px';
				}
			}

			// Workaround for http://bugs.jquery.com/ticket/12273
			if (effect === 'none') {
				F._afterZoomIn();

			} else {
				F.wrap.css(startPos).animate(endPos, {
					duration : current.nextSpeed,
					easing   : current.nextEasing,
					complete : F._afterZoomIn
				});
			}
		},

		changeOut: function () {
			var previous  = F.previous,
				effect    = previous.prevEffect,
				endPos    = { opacity : 0.1 },
				direction = F.direction,
				distance  = 200;

			if (effect === 'elastic') {
				endPos[ direction === 'down' || direction === 'up' ? 'top' : 'left' ] = ( direction === 'up' || direction === 'left' ? '-' : '+' ) + '=' + distance + 'px';
			}

			previous.wrap.animate(endPos, {
				duration : effect === 'none' ? 0 : previous.prevSpeed,
				easing   : previous.prevEasing,
				complete : function () {
					$(this).trigger('onReset').remove();
				}
			});
		}
	};

	/*
	 *	Overlay helper
	 */

	F.helpers.overlay = {
		defaults : {
			closeClick : true,      // if true, fancyBox will be closed when user clicks on the overlay
			speedOut   : 200,       // duration of fadeOut animation
			showEarly  : true,      // indicates if should be opened immediately or wait until the content is ready
			css        : {},        // custom CSS properties
			locked     : !isTouch,  // if true, the content will be locked into overlay
			fixed      : true       // if false, the overlay CSS position property will not be set to "fixed"
		},

		overlay : null,      // current handle
		fixed   : false,     // indicates if the overlay has position "fixed"
		el      : $('html'), // element that contains "the lock"

		// Public methods
		create : function(opts) {
			var parent;

			opts = $.extend({}, this.defaults, opts);

			if (this.overlay) {
				this.close();
			}

			parent = F.coming ? F.coming.parent : opts.parent;

			this.overlay = $('<div class="fancybox-overlay"></div>').appendTo( parent && parent.length ? parent : 'body' );
			this.fixed   = false;

			if (opts.fixed && F.defaults.fixed) {
				this.overlay.addClass('fancybox-overlay-fixed');

				this.fixed = true;
			}
		},

		open : function(opts) {
			var that = this;

			opts = $.extend({}, this.defaults, opts);

			if (this.overlay) {
				this.overlay.unbind('.overlay').width('auto').height('auto');

			} else {
				this.create(opts);
			}

			if (!this.fixed) {
				W.bind('resize.overlay', $.proxy( this.update, this) );

				this.update();
			}

			if (opts.closeClick) {
				this.overlay.bind('click.overlay', function(e) {
					if ($(e.target).hasClass('fancybox-overlay')) {
						if (F.isActive) {
							F.close();
						} else {
							that.close();
						}

						return false;
					}
				});
			}

			this.overlay.css( opts.css ).show();
		},

		close : function() {
			W.unbind('resize.overlay');

			if (this.el.hasClass('fancybox-lock')) {
				$('.fancybox-margin').removeClass('fancybox-margin');

				this.el.removeClass('fancybox-lock');

				W.scrollTop( this.scrollV ).scrollLeft( this.scrollH );
			}

			$('.fancybox-overlay').remove().hide();

			$.extend(this, {
				overlay : null,
				fixed   : false
			});
		},

		// Private, callbacks

		update : function () {
			var width = '100%', offsetWidth;

			// Reset width/height so it will not mess
			this.overlay.width(width).height('100%');

			// jQuery does not return reliable result for IE
			if (IE) {
				offsetWidth = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);

				if (D.width() > offsetWidth) {
					width = D.width();
				}

			} else if (D.width() > W.width()) {
				width = D.width();
			}

			this.overlay.width(width).height(D.height());
		},

		// This is where we can manipulate DOM, because later it would cause iframes to reload
		onReady : function (opts, obj) {
			var overlay = this.overlay;

			$('.fancybox-overlay').stop(true, true);

			if (!overlay) {
				this.create(opts);
			}

			if (opts.locked && this.fixed && obj.fixed) {
				obj.locked = this.overlay.append( obj.wrap );
				obj.fixed  = false;
			}

			if (opts.showEarly === true) {
				this.beforeShow.apply(this, arguments);
			}
		},

		beforeShow : function(opts, obj) {
			if (obj.locked && !this.el.hasClass('fancybox-lock')) {
				if (this.fixPosition !== false) {
					$('*:not(object)').filter(function(){
						return ($(this).css('position') === 'fixed' && !$(this).hasClass("fancybox-overlay") && !$(this).hasClass("fancybox-wrap") );
					}).addClass('fancybox-margin');
				}

				this.el.addClass('fancybox-margin');

				this.scrollV = W.scrollTop();
				this.scrollH = W.scrollLeft();

				this.el.addClass('fancybox-lock');

				W.scrollTop( this.scrollV ).scrollLeft( this.scrollH );
			}

			this.open(opts);
		},

		onUpdate : function() {
			if (!this.fixed) {
				this.update();
			}
		},

		afterClose: function (opts) {
			// Remove overlay if exists and fancyBox is not opening
			// (e.g., it is not being open using afterClose callback)
			if (this.overlay && !F.coming) {
				this.overlay.fadeOut(opts.speedOut, $.proxy( this.close, this ));
			}
		}
	};

	/*
	 *	Title helper
	 */

	F.helpers.title = {
		defaults : {
			type     : 'float', // 'float', 'inside', 'outside' or 'over',
			position : 'bottom' // 'top' or 'bottom'
		},

		beforeShow: function (opts) {
			var current = F.current,
				text    = current.title,
				type    = opts.type,
				title,
				target;

			if ($.isFunction(text)) {
				text = text.call(current.element, current);
			}

			if (!isString(text) || $.trim(text) === '') {
				return;
			}

			title = $('<div class="fancybox-title fancybox-title-' + type + '-wrap">' + text + '</div>');

			switch (type) {
				case 'inside':
					target = F.skin;
				break;

				case 'outside':
					target = F.wrap;
				break;

				case 'over':
					target = F.inner;
				break;

				default: // 'float'
					target = F.skin;

					title.appendTo('body');

					if (IE) {
						title.width( title.width() );
					}

					title.wrapInner('<span class="child"></span>');

					//Increase bottom margin so this title will also fit into viewport
					F.current.margin[2] += Math.abs( getScalar(title.css('margin-bottom')) );
				break;
			}

			title[ (opts.position === 'top' ? 'prependTo'  : 'appendTo') ](target);
		}
	};

	// jQuery plugin initialization
	$.fn.fancybox = function (options) {
		var index,
			that     = $(this),
			selector = this.selector || '',
			run      = function(e) {
				var what = $(this).blur(), idx = index, relType, relVal;

				if (!(e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) && !what.is('.fancybox-wrap')) {
					relType = options.groupAttr || 'data-fancybox-group';
					relVal  = what.attr(relType);

					if (!relVal) {
						relType = 'rel';
						relVal  = what.get(0)[ relType ];
					}

					if (relVal && relVal !== '' && relVal !== 'nofollow') {
						what = selector.length ? $(selector) : that;
						what = what.filter('[' + relType + '="' + relVal + '"]');
						idx  = what.index(this);
					}

					options.index = idx;

					// Stop an event from bubbling if everything is fine
					if (F.open(what, options) !== false) {
						e.preventDefault();
					}
				}
			};

		options = options || {};
		index   = options.index || 0;

		if (!selector || options.live === false) {
			that.unbind('click.fb-start').bind('click.fb-start', run);

		} else {
			D.undelegate(selector, 'click.fb-start').delegate(selector + ":not('.fancybox-item, .fancybox-nav')", 'click.fb-start', run);
		}

		this.filter('[data-fancybox-start=1]').trigger('click');

		return this;
	};

	// Tests that need a body at doc ready
	D.ready(function() {
		var w1, w2;

		if ( $.scrollbarWidth === undefined ) {
			// http://benalman.com/projects/jquery-misc-plugins/#scrollbarwidth
			$.scrollbarWidth = function() {
				var parent = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body'),
					child  = parent.children(),
					width  = child.innerWidth() - child.height( 99 ).innerWidth();

				parent.remove();

				return width;
			};
		}

		if ( $.support.fixedPosition === undefined ) {
			$.support.fixedPosition = (function() {
				var elem  = $('<div style="position:fixed;top:20px;"></div>').appendTo('body'),
					fixed = ( elem[0].offsetTop === 20 || elem[0].offsetTop === 15 );

				elem.remove();

				return fixed;
			}());
		}

		$.extend(F.defaults, {
			scrollbarWidth : $.scrollbarWidth(),
			fixed  : $.support.fixedPosition,
			parent : $('body')
		});

		//Get real width of page scroll-bar
		w1 = $(window).width();

		H.addClass('fancybox-lock-test');

		w2 = $(window).width();

		H.removeClass('fancybox-lock-test');

		$("<style type='text/css'>.fancybox-margin{margin-right:" + (w2 - w1) + "px;}</style>").appendTo("head");
	});

}(window, document, jQuery));

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.8.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
;(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function($) {
    'use strict';
    var Slick = window.Slick || {};

    Slick = (function() {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this, dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return $('<button type="button" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                focusOnChange: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: false,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                swiping: false,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, settings, dataSettings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


            _.registerBreakpoints();
            _.init(true);

        }

        return Slick;

    }());

    Slick.prototype.activateADA = function() {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });

    };

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function(targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function() {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Slick.prototype.getNavTarget = function() {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if ( asNavFor && asNavFor !== null ) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        return asNavFor;

    };

    Slick.prototype.asNavFor = function(index) {

        var _ = this,
            asNavFor = _.getNavTarget();

        if ( asNavFor !== null && typeof asNavFor === 'object' ) {
            asNavFor.each(function() {
                var target = $(this).slick('getSlick');
                if(!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }

    };

    Slick.prototype.applyTransition = function(slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function() {

        var _ = this;

        _.autoPlayClear();

        if ( _.slideCount > _.options.slidesToShow ) {
            _.autoPlayTimer = setInterval( _.autoPlayIterator, _.options.autoplaySpeed );
        }

    };

    Slick.prototype.autoPlayClear = function() {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function() {

        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;

        if ( !_.paused && !_.interrupted && !_.focussed ) {

            if ( _.options.infinite === false ) {

                if ( _.direction === 1 && ( _.currentSlide + 1 ) === ( _.slideCount - 1 )) {
                    _.direction = 0;
                }

                else if ( _.direction === 0 ) {

                    slideTo = _.currentSlide - _.options.slidesToScroll;

                    if ( _.currentSlide - 1 === 0 ) {
                        _.direction = 1;
                    }

                }

            }

            _.slideHandler( slideTo );

        }

    };

    Slick.prototype.buildArrows = function() {

        var _ = this;

        if (_.options.arrows === true ) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if( _.slideCount > _.options.slidesToShow ) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('slick-disabled')
                        .attr('aria-disabled', 'true');
                }

            } else {

                _.$prevArrow.add( _.$nextArrow )

                    .addClass('slick-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });

            }

        }

    };

    Slick.prototype.buildDots = function() {

        var _ = this,
            i, dot;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$slider.addClass('slick-dotted');

            dot = $('<ul />').addClass(_.options.dotsClass);

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }

            _.$dots = dot.appendTo(_.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active');

        }

    };

    Slick.prototype.buildOut = function() {

        var _ = this;

        _.$slides =
            _.$slider
                .children( _.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function(index, element) {
            $(element)
                .attr('data-slick-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();


        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.buildRows = function() {

        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if(_.options.rows > 0) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );

            for(a = 0; a < numOfSlides; a++){
                var slide = document.createElement('div');
                for(b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for(c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width':(100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });

        }

    };

    Slick.prototype.checkResponsive = function(initial, forceUpdate) {

        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if ( _.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if( !initial && triggerBreakpoint !== false ) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }

    };

    Slick.prototype.changeSlide = function(event, dontAnimate) {

        var _ = this,
            $target = $(event.currentTarget),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        if($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if(!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }

    };

    Slick.prototype.checkNavigable = function(index) {

        var _ = this,
            navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function() {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots)
                .off('click.slick', _.changeSlide)
                .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .off('mouseleave.slick', $.proxy(_.interrupt, _, false));

            if (_.options.accessibility === true) {
                _.$dots.off('keydown.slick', _.keyHandler);
            }
        }

        _.$slider.off('focus.slick blur.slick');

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
                _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
            }
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.cleanUpSlideEvents();

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.cleanUpSlideEvents = function() {

        var _ = this;

        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));

    };

    Slick.prototype.cleanUpRows = function() {

        var _ = this, originalSlides;

        if(_.options.rows > 0) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }

    };

    Slick.prototype.clickHandler = function(event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Slick.prototype.destroy = function(refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }

        if ( _.$prevArrow && _.$prevArrow.length ) {

            _.$prevArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.prevArrow )) {
                _.$prevArrow.remove();
            }
        }

        if ( _.$nextArrow && _.$nextArrow.length ) {

            _.$nextArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.nextArrow )) {
                _.$nextArrow.remove();
            }
        }


        if (_.$slides) {

            _.$slides
                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-slick-index')
                .each(function(){
                    $(this).attr('style', $(this).data('originalStyling'));
                });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');

        _.unslicked = true;

        if(!refresh) {
            _.$slider.trigger('destroy', [_]);
        }

    };

    Slick.prototype.disableTransition = function(slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function(slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function() {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.fadeSlideOut = function(slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });

        }

    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.focusHandler = function() {

        var _ = this;

        _.$slider
            .off('focus.slick blur.slick')
            .on('focus.slick blur.slick', '*', function(event) {

            event.stopImmediatePropagation();
            var $sf = $(this);

            setTimeout(function() {

                if( _.options.pauseOnFocus ) {
                    _.focussed = $sf.is(':focus');
                    _.autoPlay();
                }

            }, 0);

        });
    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

        var _ = this;
        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function() {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            if (_.slideCount <= _.options.slidesToShow) {
                 ++pagerQty;
            } else {
                while (breakPoint < _.slideCount) {
                    ++pagerQty;
                    breakPoint = counter + _.options.slidesToScroll;
                    counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                }
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if(!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        }else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;

    };

    Slick.prototype.getLeft = function(slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide,
            coef;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                coef = -1

                if (_.options.vertical === true && _.options.centerMode === true) {
                    if (_.options.slidesToShow === 2) {
                        coef = -1.5;
                    } else if (_.options.slidesToShow === 1) {
                        coef = -2
                    }
                }
                verticalOffset = (verticalHeight * _.options.slidesToShow) * coef;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
            _.slideOffset = ((_.slideWidth * Math.floor(_.options.slidesToShow)) / 2) - ((_.slideWidth * _.slideCount) / 2);
        } else if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft =  0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft =  0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

        var _ = this;

        return _.options[option];

    };

    Slick.prototype.getNavigableIndexes = function() {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;

    };

    Slick.prototype.getSlick = function() {

        return this;

    };

    Slick.prototype.getSlideCount = function() {

        var _ = this,
            slidesTraversed, swipedSlide, centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function(index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Slick.prototype.init = function(creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();

        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

        if ( _.options.autoplay ) {

            _.paused = false;
            _.autoPlay();

        }

    };

    Slick.prototype.initADA = function() {
        var _ = this,
                numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
                tabControlIndexes = _.getNavigableIndexes().filter(function(val) {
                    return (val >= 0) && (val < _.slideCount);
                });

        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        if (_.$dots !== null) {
            _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
                var slideControlIndex = tabControlIndexes.indexOf(i);

                $(this).attr({
                    'role': 'tabpanel',
                    'id': 'slick-slide' + _.instanceUid + i,
                    'tabindex': -1
                });

                if (slideControlIndex !== -1) {
                   var ariaButtonControl = 'slick-slide-control' + _.instanceUid + slideControlIndex
                   if ($('#' + ariaButtonControl).length) {
                     $(this).attr({
                         'aria-describedby': ariaButtonControl
                     });
                   }
                }
            });

            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                var mappedSlideIndex = tabControlIndexes[i];

                $(this).attr({
                    'role': 'presentation'
                });

                $(this).find('button').first().attr({
                    'role': 'tab',
                    'id': 'slick-slide-control' + _.instanceUid + i,
                    'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
                    'aria-label': (i + 1) + ' of ' + numDotGroups,
                    'aria-selected': null,
                    'tabindex': '-1'
                });

            }).eq(_.currentSlide).find('button').attr({
                'aria-selected': 'true',
                'tabindex': '0'
            }).end();
        }

        for (var i=_.currentSlide, max=i+_.options.slidesToShow; i < max; i++) {
          if (_.options.focusOnChange) {
            _.$slides.eq(i).attr({'tabindex': '0'});
          } else {
            _.$slides.eq(i).removeAttr('tabindex');
          }
        }

        _.activateADA();

    };

    Slick.prototype.initArrowEvents = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'previous'
               }, _.changeSlide);
            _.$nextArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'next'
               }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow.on('keydown.slick', _.keyHandler);
                _.$nextArrow.on('keydown.slick', _.keyHandler);
            }
        }

    };

    Slick.prototype.initDotEvents = function() {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$dots.on('keydown.slick', _.keyHandler);
            }
        }

        if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {

            $('li', _.$dots)
                .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initSlideEvents = function() {

        var _ = this;

        if ( _.options.pauseOnHover ) {

            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initializeEvents = function() {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();
        _.initSlideEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(_.setPosition);

    };

    Slick.prototype.initUI = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

    };

    Slick.prototype.keyHandler = function(event) {

        var _ = this;
         //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' :  'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }

    };

    Slick.prototype.lazyLoad = function() {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {

            $('img[data-lazy]', imagesScope).each(function() {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageSrcSet = $(this).attr('data-srcset'),
                    imageSizes  = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function() {

                    image
                        .animate({ opacity: 0 }, 100, function() {

                            if (imageSrcSet) {
                                image
                                    .attr('srcset', imageSrcSet );

                                if (imageSizes) {
                                    image
                                        .attr('sizes', imageSizes );
                                }
                            }

                            image
                                .attr('src', imageSource)
                                .animate({ opacity: 1 }, 200, function() {
                                    image
                                        .removeAttr('data-lazy data-srcset data-sizes')
                                        .removeClass('slick-loading');
                                });
                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                        });

                };

                imageToLoad.onerror = function() {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                };

                imageToLoad.src = imageSource;

            });

        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);

        if (_.options.lazyLoad === 'anticipated') {
            var prevSlide = rangeStart - 1,
                nextSlide = rangeEnd,
                $slides = _.$slider.find('.slick-slide');

            for (var i = 0; i < _.options.slidesToScroll; i++) {
                if (prevSlide < 0) prevSlide = _.slideCount - 1;
                loadRange = loadRange.add($slides.eq(prevSlide));
                loadRange = loadRange.add($slides.eq(nextSlide));
                prevSlide--;
                nextSlide++;
            }
        }

        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }

    };

    Slick.prototype.loadSlider = function() {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Slick.prototype.next = Slick.prototype.slickNext = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.orientationChange = function() {

        var _ = this;

        _.checkResponsive();
        _.setPosition();

    };

    Slick.prototype.pause = Slick.prototype.slickPause = function() {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Slick.prototype.play = Slick.prototype.slickPlay = function() {

        var _ = this;

        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;

    };

    Slick.prototype.postSlide = function(index) {

        var _ = this;

        if( !_.unslicked ) {

            _.$slider.trigger('afterChange', [_, index]);

            _.animating = false;

            if (_.slideCount > _.options.slidesToShow) {
                _.setPosition();
            }

            _.swipeLeft = null;

            if ( _.options.autoplay ) {
                _.autoPlay();
            }

            if (_.options.accessibility === true) {
                _.initADA();

                if (_.options.focusOnChange) {
                    var $currentSlide = $(_.$slides.get(_.currentSlide));
                    $currentSlide.attr('tabindex', 0).focus();
                }
            }

        }

    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });

    };

    Slick.prototype.preventDefault = function(event) {

        event.preventDefault();

    };

    Slick.prototype.progressiveLazyLoad = function( tryCount ) {

        tryCount = tryCount || 1;

        var _ = this,
            $imgsToLoad = $( 'img[data-lazy]', _.$slider ),
            image,
            imageSource,
            imageSrcSet,
            imageSizes,
            imageToLoad;

        if ( $imgsToLoad.length ) {

            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageSrcSet = image.attr('data-srcset');
            imageSizes  = image.attr('data-sizes') || _.$slider.attr('data-sizes');
            imageToLoad = document.createElement('img');

            imageToLoad.onload = function() {

                if (imageSrcSet) {
                    image
                        .attr('srcset', imageSrcSet );

                    if (imageSizes) {
                        image
                            .attr('sizes', imageSizes );
                    }
                }

                image
                    .attr( 'src', imageSource )
                    .removeAttr('data-lazy data-srcset data-sizes')
                    .removeClass('slick-loading');

                if ( _.options.adaptiveHeight === true ) {
                    _.setPosition();
                }

                _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);
                _.progressiveLazyLoad();

            };

            imageToLoad.onerror = function() {

                if ( tryCount < 3 ) {

                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout( function() {
                        _.progressiveLazyLoad( tryCount + 1 );
                    }, 500 );

                } else {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                    _.progressiveLazyLoad();

                }

            };

            imageToLoad.src = imageSource;

        } else {

            _.$slider.trigger('allImagesLoaded', [ _ ]);

        }

    };

    Slick.prototype.refresh = function( initializing ) {

        var _ = this, currentSlide, lastVisibleIndex;

        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if( !_.options.infinite && ( _.currentSlide > lastVisibleIndex )) {
            _.currentSlide = lastVisibleIndex;
        }

        // if less slides than to show, go to start.
        if ( _.slideCount <= _.options.slidesToShow ) {
            _.currentSlide = 0;

        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if( !initializing ) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);

        }

    };

    Slick.prototype.registerBreakpoints = function() {

        var _ = this, breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;

        if ( $.type(responsiveSettings) === 'array' && responsiveSettings.length ) {

            _.respondTo = _.options.respondTo || 'window';

            for ( breakpoint in responsiveSettings ) {

                l = _.breakpoints.length-1;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {
                    currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while( l >= 0 ) {
                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
                            _.breakpoints.splice(l,1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

                }

            }

            _.breakpoints.sort(function(a, b) {
                return ( _.options.mobileFirst ) ? a-b : b-a;
            });

        }

    };

    Slick.prototype.reinit = function() {

        var _ = this;

        _.$slides =
            _.$slideTrack
                .children(_.options.slide)
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        _.setPosition();
        _.focusHandler();

        _.paused = !_.options.autoplay;
        _.autoPlay();

        _.$slider.trigger('reInit', [_]);

    };

    Slick.prototype.resize = function() {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if( !_.unslicked ) { _.setPosition(); }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.setCSS = function(position) {

        var _ = this,
            positionProps = {},
            x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function() {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };

    Slick.prototype.setFade = function() {

        var _ = this,
            targetLeft;

        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });

    };

    Slick.prototype.setHeight = function() {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }

    };

    Slick.prototype.setOption =
    Slick.prototype.slickSetOption = function() {

        /**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .slick("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .slick("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .slick("setOption", { 'option': value, ... }, refresh )
         */

        var _ = this, l, item, option, value, refresh = false, type;

        if( $.type( arguments[0] ) === 'object' ) {

            option =  arguments[0];
            refresh = arguments[1];
            type = 'multiple';

        } else if ( $.type( arguments[0] ) === 'string' ) {

            option =  arguments[0];
            value = arguments[1];
            refresh = arguments[2];

            if ( arguments[0] === 'responsive' && $.type( arguments[1] ) === 'array' ) {

                type = 'responsive';

            } else if ( typeof arguments[1] !== 'undefined' ) {

                type = 'single';

            }

        }

        if ( type === 'single' ) {

            _.options[option] = value;


        } else if ( type === 'multiple' ) {

            $.each( option , function( opt, val ) {

                _.options[opt] = val;

            });


        } else if ( type === 'responsive' ) {

            for ( item in value ) {

                if( $.type( _.options.responsive ) !== 'array' ) {

                    _.options.responsive = [ value[item] ];

                } else {

                    l = _.options.responsive.length-1;

                    // loop through the responsive object and splice out duplicates.
                    while( l >= 0 ) {

                        if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {

                            _.options.responsive.splice(l,1);

                        }

                        l--;

                    }

                    _.options.responsive.push( value[item] );

                }

            }

        }

        if ( refresh ) {

            _.unload();
            _.reinit();

        }

    };

    Slick.prototype.setPosition = function() {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);

    };

    Slick.prototype.setProps = function() {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if ( _.options.fade ) {
            if ( typeof _.options.zIndex === 'number' ) {
                if( _.options.zIndex < 3 ) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };


    Slick.prototype.setSlideClasses = function(index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;

        allSlides = _.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true');

        _.$slides
            .eq(index)
            .addClass('slick-current');

        if (_.options.centerMode === true) {

            var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
                    _.$slides
                        .slice(index - centerOffset + evenCoef, index + centerOffset + 1)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

                if (index === 0) {

                    allSlides
                        .eq(allSlides.length - 1 - _.options.slidesToShow)
                        .addClass('slick-center');

                } else if (index === _.slideCount - 1) {

                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('slick-center');

                }

            }

            _.$slides
                .eq(index)
                .addClass('slick-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

            }

        }

        if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
            _.lazyLoad();
        }
    };

    Slick.prototype.setupInfinite = function() {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                        infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount  + _.slideCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });

            }

        }

    };

    Slick.prototype.interrupt = function( toggle ) {

        var _ = this;

        if( !toggle ) {
            _.autoPlay();
        }
        _.interrupted = toggle;

    };

    Slick.prototype.selectHandler = function(event) {

        var _ = this;

        var targetElement =
            $(event.target).is('.slick-slide') ?
                $(event.target) :
                $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.slideHandler(index, false, true);
            return;

        }

        _.slideHandler(index);

    };

    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this, navTarget;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if ( _.options.autoplay ) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        if ( _.options.asNavFor ) {

            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');

            if ( navTarget.slideCount <= navTarget.options.slidesToShow ) {
                navTarget.setSlideClasses(_.currentSlide);
            }

        }

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });

            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Slick.prototype.startLoad = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function() {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'down';
            } else {
                return 'up';
            }
        }

        return 'vertical';

    };

    Slick.prototype.swipeEnd = function(event) {

        var _ = this,
            slideCount,
            direction;

        _.dragging = false;
        _.swiping = false;

        if (_.scrolling) {
            _.scrolling = false;
            return false;
        }

        _.interrupted = false;
        _.shouldClick = ( _.touchObject.swipeLength > 10 ) ? false : true;

        if ( _.touchObject.curX === undefined ) {
            return false;
        }

        if ( _.touchObject.edgeHit === true ) {
            _.$slider.trigger('edge', [_, _.swipeDirection() ]);
        }

        if ( _.touchObject.swipeLength >= _.touchObject.minSwipe ) {

            direction = _.swipeDirection();

            switch ( direction ) {

                case 'left':
                case 'down':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide + _.getSlideCount() ) :
                            _.currentSlide + _.getSlideCount();

                    _.currentDirection = 0;

                    break;

                case 'right':
                case 'up':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide - _.getSlideCount() ) :
                            _.currentSlide - _.getSlideCount();

                    _.currentDirection = 1;

                    break;

                default:


            }

            if( direction != 'vertical' ) {

                _.slideHandler( slideCount );
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction ]);

            }

        } else {

            if ( _.touchObject.startX !== _.touchObject.curX ) {

                _.slideHandler( _.currentSlide );
                _.touchObject = {};

            }

        }

    };

    Slick.prototype.swipeHandler = function(event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
            .touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                .touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function(event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches, verticalSwipeLength;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        verticalSwipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));

        if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
            _.scrolling = true;
            return false;
        }

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = verticalSwipeLength;
        }

        swipeDirection = _.swipeDirection();

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            _.swiping = true;
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }


        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function(event) {

        var _ = this,
            touches;

        _.interrupted = true;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.unload = function() {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');

    };

    Slick.prototype.unslick = function(fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();

    };

    Slick.prototype.updateArrows = function() {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if ( _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite ) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            }

        }

    };

    Slick.prototype.updateDots = function() {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots
                .find('li')
                    .removeClass('slick-active')
                    .end();

            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('slick-active');

        }

    };

    Slick.prototype.visibility = function() {

        var _ = this;

        if ( _.options.autoplay ) {

            if ( document[_.hidden] ) {

                _.interrupted = true;

            } else {

                _.interrupted = false;

            }

        }

    };

    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

}));

$(document).ready(function() {
  $(".burger-menu").click(function() {
    $(this).toggleClass("active");
    $(this)
      .parent(".header")
      .find(".nav-mobile")
      .toggleClass("active");
  });
  if($('.scroll-to-form').hasClass('scroll-to-form')){
    $(".scroll-to-form").click(function() {
        $("html").animate(
        {
            scrollTop: $("#contact-form").offset().top // прокручиваем страницу к требуемому элементу
        },
        1500 // скорость прокрутки
        );
    });
  }
  $(".acordeon-item.active")
    .find(".acordeon-item-content")
    .slideDown(500);
  $(".acordeon-item").click(function() {
    if ($(this).hasClass("active") == 0) {
      function closeItem() {
        $(".acordeon-item ")
          .find(".acordeon-item-content")
          .slideUp();
      }
      function openItem(e) {
        $(e)
          .find(".acordeon-item-content")
          .slideDown(500);
      }
      closeItem();
      $(".acordeon-item ").removeClass("active");
      $(this).addClass("active");
      setTimeout(openItem($(this)), 500);
    }
  });

  $("#on-for-client").click(function() {
    $(".for-bisnes").removeClass("active");
    $("#on-for-bisnes").removeClass("active");
    $("#on-for-client").addClass("active");
    $(".for-client").addClass("active");
    $("#for-bissnes").fadeOut();
    setTimeout(function() {
      $("#for-client").fadeIn();
    }, 500);
  });
  $("#on-for-bisnes").click(function() {
    $("#on-for-bisnes").removeClass("active");
    $(".for-client").removeClass("active");
    $("#on-for-bisnes").addClass("active");
    $(".for-bisnes").addClass("active");
    $("#for-client").fadeOut();
    setTimeout(function() {
      $("#for-bissnes").fadeIn();
    }, 500);
  });
  
  $(".lazy").slick({
    lazyLoad: "ondemand", // ondemand progressive anticipated
    infinite: true,
    fade: true,
    asNavFor: '.variable'
  });
  $(".variable").slick({
    dots: true,
    asNavFor: '.lazy',
    customPaging: function(slider, i) {
      var thumb = $(slider.$slides[i]).data();
      i++;
      return "0" + i;
    },
    arrows: false,
    infinite: true,
    pauseOnDotsHover: true,
    variableWidth: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "slider-dots",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipe: true,
          variableWidth: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          swipe: true,
          variableWidth: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $(".slider-dots")
    .after("<div class='slide-load active'><span></span></div>");
  $(".variable").on("afterChange", function(
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    $(".slide-load").addClass("active");
  });
  $(".variable").on("beforeChange", function(
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    $(".slide-load").removeClass("active");
  });
});
$('.slider_item').mouseenter(function(){
  if($(this).find('.slider_item_content').css('opacity') == 1){
      $(".slider-black-fon").addClass('active')
  }
})
$( ".slider_item" ).mouseleave(function() {
if($(this).find('.slider_item_content').css('opacity') == 1){
  $(".slider-black-fon").removeClass('active')
  let indexSlide = $('.variable').slick('slickCurrentSlide');
  $('.variable').slick('slickGoTo',indexSlide + 1);
}
});
$(document).ready(function() {
  if ($(".map").hasClass("map")) {
    var VectorCanvas = function(t, e, i) {
      if (
        ((this.mode = window.SVGAngle ? "svg" : "vml"),
        (this.params = i),
        "svg" === this.mode)
      )
        this.createSvgNode = function(t) {
          return document.createElementNS(this.svgns, t);
        };
      else {
        try {
          document.namespaces.rvml ||
            document.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"),
            (this.createVmlNode = function(t) {
              return document.createElement("<rvml:" + t + ' class="rvml">');
            });
        } catch (o) {
          this.createVmlNode = function(t) {
            return document.createElement(
              "<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">'
            );
          };
        }
        document
          .createStyleSheet()
          .addRule(".rvml", "behavior:url(#default#VML)");
      }
      "svg" === this.mode
        ? (this.canvas = this.createSvgNode("svg"))
        : ((this.canvas = this.createVmlNode("group")),
          (this.canvas.style.position = "absolute")),
        this.setSize(t, e);
    };
    VectorCanvas.prototype = {
      svgns: "http://www.w3.org/2000/svg",
      mode: "svg",
      width: 0,
      height: 0,
      canvas: null
    };
    var ColorScale = function(t, e, i, o) {
      t && this.setColors(t),
        e && this.setNormalizeFunction(e),
        i && this.setMin(i),
        i && this.setMax(o);
    };
    ColorScale.prototype = { colors: [] };
    var JQVMap = function(t) {
      t = t || {};
      var e,
        i = this,
        o = JQVMap.maps[t.map];
      if (!o)
        throw new Error(
          'Invalid "' +
            t.map +
            '" map parameter. Please make sure you have loaded this map file in your HTML.'
        );
      (this.selectedRegions = []),
        (this.multiSelectRegion = t.multiSelectRegion),
        (this.container = t.container),
        (this.defaultWidth = o.width),
        (this.defaultHeight = o.height),
        (this.color = t.color),
        (this.selectedColor = t.selectedColor),
        (this.hoverColor = t.hoverColor),
        (this.hoverColors = t.hoverColors),
        (this.hoverOpacity = t.hoverOpacity),
        this.setBackgroundColor(t.backgroundColor),
        (this.width = t.container.width()),
        (this.height = t.container.height()),
        this.resize(),
        jQuery(window).resize(function() {
          var o = t.container.width(),
            s = t.container.height();
          if (o && s) {
            (i.width = o),
              (i.height = s),
              i.resize(),
              i.canvas.setSize(i.width, i.height),
              i.applyTransform();
            var r = jQuery.Event("resize.jqvmap");
            jQuery(t.container).trigger(r, [o, s]),
              e &&
                (jQuery(".jqvmap-pin").remove(),
                (i.pinHandlers = !1),
                i.placePins(e.pins, e.mode));
          }
        }),
        (this.canvas = new VectorCanvas(this.width, this.height, t)),
        t.container.append(this.canvas.canvas),
        this.makeDraggable(),
        (this.rootGroup = this.canvas.createGroup(!0)),
        (this.index = JQVMap.mapIndex),
        (this.label = jQuery("<div/>")
          .addClass("jqvmap-label")
          .appendTo(jQuery("body"))
          .hide()),
        t.enableZoom &&
          (jQuery("<div/>")
            .addClass("jqvmap-zoomin")
            .text("+")
            .appendTo(t.container),
          jQuery("<div/>")
            .addClass("jqvmap-zoomout")
            .html("&#x2212;")
            .appendTo(t.container)),
        (i.countries = []);
      for (var s in o.paths) {
        var r = this.canvas.createPath({ path: o.paths[s].path });
        r.setFill(this.color),
          (r.id = i.getCountryId(s)),
          (i.countries[s] = r),
          "svg" === this.canvas.mode
            ? r.setAttribute("class", "jqvmap-region")
            : jQuery(r).addClass("jqvmap-region"),
          jQuery(this.rootGroup).append(r);
      }
      if (
        (jQuery(t.container).delegate(
          "svg" === this.canvas.mode ? "path" : "shape",
          "mouseover mouseout",
          function(e) {
            var s = e.target,
              r = e.target.id.split("_").pop(),
              a = jQuery.Event("labelShow.jqvmap"),
              n = jQuery.Event("regionMouseOver.jqvmap");
            (r = r.toLowerCase()),
              "mouseover" === e.type
                ? (jQuery(t.container).trigger(n, [r, o.paths[r].name]),
                  n.isDefaultPrevented() || i.highlight(r, s),
                  t.showTooltip &&
                    (i.label.text(o.paths[r].name),
                    jQuery(t.container).trigger(a, [i.label, r]),
                    a.isDefaultPrevented() ||
                      (i.label.show(),
                      (i.labelWidth = i.label.width()),
                      (i.labelHeight = i.label.height()))))
                : (i.unhighlight(r, s),
                  i.label.hide(),
                  jQuery(t.container).trigger("regionMouseOut.jqvmap", [
                    r,
                    o.paths[r].name
                  ]));
          }
        ),
        jQuery(t.container).delegate(
          "svg" === this.canvas.mode ? "path" : "shape",
          "click",
          function(e) {
            var s = e.target,
              r = e.target.id.split("_").pop(),
              a = jQuery.Event("regionClick.jqvmap");
            if (
              ((r = r.toLowerCase()),
              jQuery(t.container).trigger(a, [r, o.paths[r].name, e]),
              !t.multiSelectRegion && !a.isDefaultPrevented())
            )
              for (var n in o.paths)
                (i.countries[n].currentFillColor = i.countries[
                  n
                ].getOriginalFill()),
                  i.countries[n].setFill(i.countries[n].getOriginalFill());
            a.isDefaultPrevented() ||
              (i.isSelected(r) ? i.deselect(r, s) : i.select(r, s));
          }
        ),
        t.showTooltip &&
          t.container.mousemove(function(t) {
            if (i.label.is(":visible")) {
              var e = t.pageX - 15 - i.labelWidth,
                o = t.pageY - 15 - i.labelHeight;
              0 > e && (e = t.pageX + 15),
                0 > o && (o = t.pageY + 15),
                i.label.css({ left: e, top: o });
            }
          }),
        this.setColors(t.colors),
        this.canvas.canvas.appendChild(this.rootGroup),
        this.applyTransform(),
        (this.colorScale = new ColorScale(
          t.scaleColors,
          t.normalizeFunction,
          t.valueMin,
          t.valueMax
        )),
        t.values && ((this.values = t.values), this.setValues(t.values)),
        t.selectedRegions)
      )
        if (t.selectedRegions instanceof Array)
          for (var a in t.selectedRegions)
            this.select(t.selectedRegions[a].toLowerCase());
        else this.select(t.selectedRegions.toLowerCase());
      if (
        (this.bindZoomButtons(),
        t.pins &&
          ((e = { pins: t.pins, mode: t.pinMode }),
          (this.pinHandlers = !1),
          this.placePins(t.pins, t.pinMode)),
        t.showLabels)
      ) {
        this.pinHandlers = !1;
        var n = {};
        for (s in i.countries)
          "function" != typeof i.countries[s] &&
            ((t.pins && t.pins[s]) || (n[s] = s.toUpperCase()));
        (e = { pins: n, mode: "content" }), this.placePins(n, "content");
      }
      JQVMap.mapIndex++;
    };
    (JQVMap.prototype = {
      transX: 0,
      transY: 0,
      scale: 1,
      baseTransX: 0,
      baseTransY: 0,
      baseScale: 1,
      width: 0,
      height: 0,
      countries: {},
      countriesColors: {},
      countriesData: {},
      zoomStep: 1.4,
      zoomMaxStep: 4,
      zoomCurStep: 1
    }),
      (JQVMap.xlink = "http://www.w3.org/1999/xlink"),
      (JQVMap.mapIndex = 1),
      (JQVMap.maps = {}),
      (function() {
        var t = {
            colors: 1,
            values: 1,
            backgroundColor: 1,
            scaleColors: 1,
            normalizeFunction: 1,
            enableZoom: 1,
            showTooltip: 1,
            borderColor: 1,
            borderWidth: 1,
            borderOpacity: 1,
            selectedRegions: 1,
            multiSelectRegion: 1
          },
          e = {
            onLabelShow: "labelShow",
            onLoad: "load",
            onRegionOver: "regionMouseOver",
            onRegionOut: "regionMouseOut",
            onRegionClick: "regionClick",
            onRegionSelect: "regionSelect",
            onRegionDeselect: "regionDeselect",
            onResize: "resize"
          };
        jQuery.fn.vectorMap = function(i) {
          var o = {
              map: "world_en",
              backgroundColor: "#a5bfdd",
              color: "#f4f3f0",
              hoverColor: "#c9dfaf",
              hoverColors: {},
              selectedColor: "#c9dfaf",
              scaleColors: ["#b6d6ff", "#005ace"],
              normalizeFunction: "linear",
              enableZoom: !0,
              showTooltip: !0,
              borderColor: "#818181",
              borderWidth: 1,
              borderOpacity: 0.25,
              selectedRegions: null,
              multiSelectRegion: !1
            },
            s = this.data("mapObject");
          if ("addMap" === i) JQVMap.maps[arguments[1]] = arguments[2];
          else {
            if ("set" !== i || !t[arguments[1]]) {
              if ("string" == typeof i && "function" == typeof s[i])
                return s[i].apply(s, Array.prototype.slice.call(arguments, 1));
              jQuery.extend(o, i),
                (o.container = this),
                this.css({ position: "relative", overflow: "hidden" }),
                (s = new JQVMap(o)),
                this.data("mapObject", s),
                this.unbind(".jqvmap");
              for (var r in e) o[r] && this.bind(e[r] + ".jqvmap", o[r]);
              var a = jQuery.Event("load.jqvmap");
              return jQuery(o.container).trigger(a, s), s;
            }
            s[
              "set" +
                arguments[1].charAt(0).toUpperCase() +
                arguments[1].substr(1)
            ].apply(s, Array.prototype.slice.call(arguments, 2));
          }
        };
      })(jQuery),
      (ColorScale.arrayToRgb = function(t) {
        for (var e, i = "#", o = 0; o < t.length; o++)
          (e = t[o].toString(16)), (i += 1 === e.length ? "0" + e : e);
        return i;
      }),
      (ColorScale.prototype.getColor = function(t) {
        "function" == typeof this.normalize && (t = this.normalize(t));
        for (var e, i = [], o = 0, s = 0; s < this.colors.length - 1; s++)
          (e = this.vectorLength(
            this.vectorSubtract(this.colors[s + 1], this.colors[s])
          )),
            i.push(e),
            (o += e);
        var r = (this.maxValue - this.minValue) / o;
        for (s = 0; s < i.length; s++) i[s] *= r;
        for (s = 0, t -= this.minValue; t - i[s] >= 0; ) (t -= i[s]), s++;
        var a;
        for (
          a =
            s === this.colors.length - 1
              ? this.vectorToNum(this.colors[s]).toString(16)
              : this.vectorToNum(
                  this.vectorAdd(
                    this.colors[s],
                    this.vectorMult(
                      this.vectorSubtract(this.colors[s + 1], this.colors[s]),
                      t / i[s]
                    )
                  )
                ).toString(16);
          a.length < 6;

        )
          a = "0" + a;
        return "#" + a;
      }),
      (ColorScale.rgbToArray = function(t) {
        return (
          (t = t.substr(1)),
          [
            parseInt(t.substr(0, 2), 16),
            parseInt(t.substr(2, 2), 16),
            parseInt(t.substr(4, 2), 16)
          ]
        );
      }),
      (ColorScale.prototype.setColors = function(t) {
        for (var e = 0; e < t.length; e++) t[e] = ColorScale.rgbToArray(t[e]);
        this.colors = t;
      }),
      (ColorScale.prototype.setMax = function(t) {
        (this.clearMaxValue = t),
          "function" == typeof this.normalize
            ? (this.maxValue = this.normalize(t))
            : (this.maxValue = t);
      }),
      (ColorScale.prototype.setMin = function(t) {
        (this.clearMinValue = t),
          "function" == typeof this.normalize
            ? (this.minValue = this.normalize(t))
            : (this.minValue = t);
      }),
      (ColorScale.prototype.setNormalizeFunction = function(t) {
        "polynomial" === t
          ? (this.normalize = function(t) {
              return Math.pow(t, 0.2);
            })
          : "linear" === t
          ? delete this.normalize
          : (this.normalize = t),
          this.setMin(this.clearMinValue),
          this.setMax(this.clearMaxValue);
      }),
      (ColorScale.prototype.vectorAdd = function(t, e) {
        for (var i = [], o = 0; o < t.length; o++) i[o] = t[o] + e[o];
        return i;
      }),
      (ColorScale.prototype.vectorLength = function(t) {
        for (var e = 0, i = 0; i < t.length; i++) e += t[i] * t[i];
        return Math.sqrt(e);
      }),
      (ColorScale.prototype.vectorMult = function(t, e) {
        for (var i = [], o = 0; o < t.length; o++) i[o] = t[o] * e;
        return i;
      }),
      (ColorScale.prototype.vectorSubtract = function(t, e) {
        for (var i = [], o = 0; o < t.length; o++) i[o] = t[o] - e[o];
        return i;
      }),
      (ColorScale.prototype.vectorToNum = function(t) {
        for (var e = 0, i = 0; i < t.length; i++)
          e += Math.round(t[i]) * Math.pow(256, t.length - i - 1);
        return e;
      }),
      (JQVMap.prototype.applyTransform = function() {
        var t, e, i, o;
        this.defaultWidth * this.scale <= this.width
          ? ((t =
              (this.width - this.defaultWidth * this.scale) / (2 * this.scale)),
            (i =
              (this.width - this.defaultWidth * this.scale) / (2 * this.scale)))
          : ((t = 0),
            (i = (this.width - this.defaultWidth * this.scale) / this.scale)),
          this.defaultHeight * this.scale <= this.height
            ? ((e =
                (this.height - this.defaultHeight * this.scale) /
                (2 * this.scale)),
              (o =
                (this.height - this.defaultHeight * this.scale) /
                (2 * this.scale)))
            : ((e = 0),
              (o =
                (this.height - this.defaultHeight * this.scale) / this.scale)),
          this.transY > e
            ? (this.transY = e)
            : this.transY < o && (this.transY = o),
          this.transX > t
            ? (this.transX = t)
            : this.transX < i && (this.transX = i),
          this.canvas.applyTransformParams(
            this.scale,
            this.transX,
            this.transY
          );
      }),
      (JQVMap.prototype.bindZoomButtons = function() {
        var t = this;
        this.container.find(".jqvmap-zoomin").click(function() {
          t.zoomIn();
        }),
          this.container.find(".jqvmap-zoomout").click(function() {
            t.zoomOut();
          });
      }),
      (JQVMap.prototype.deselect = function(t, e) {
        if (
          ((t = t.toLowerCase()),
          (e = e || jQuery("#" + this.getCountryId(t))[0]),
          this.isSelected(t))
        )
          this.selectedRegions.splice(this.selectIndex(t), 1),
            jQuery(this.container).trigger("regionDeselect.jqvmap", [t]),
            (e.currentFillColor = e.getOriginalFill()),
            e.setFill(e.getOriginalFill());
        else
          for (var i in this.countries)
            this.selectedRegions.splice(this.selectedRegions.indexOf(i), 1),
              (this.countries[i].currentFillColor = this.color),
              this.countries[i].setFill(this.color);
      }),
      (JQVMap.prototype.getCountryId = function(t) {
        return "jqvmap" + this.index + "_" + t;
      }),
      (JQVMap.prototype.getPin = function(t) {
        var e = jQuery("#" + this.getPinId(t));
        return e.html();
      }),
      (JQVMap.prototype.getPinId = function(t) {
        return this.getCountryId(t) + "_pin";
      }),
      (JQVMap.prototype.getPins = function() {
        var t = this.container.find(".jqvmap-pin"),
          e = {};
        return (
          jQuery.each(t, function(t, i) {
            i = jQuery(i);
            var o = i.attr("for").toLowerCase(),
              s = i.html();
            e[o] = s;
          }),
          JSON.stringify(e)
        );
      }),
      (JQVMap.prototype.highlight = function(t, e) {
        (e = e || jQuery("#" + this.getCountryId(t))[0]),
          this.hoverOpacity
            ? e.setOpacity(this.hoverOpacity)
            : this.hoverColors && t in this.hoverColors
            ? ((e.currentFillColor = e.getFill() + ""),
              e.setFill(this.hoverColors[t]))
            : this.hoverColor &&
              ((e.currentFillColor = e.getFill() + ""),
              e.setFill(this.hoverColor));
      }),
      (JQVMap.prototype.isSelected = function(t) {
        return this.selectIndex(t) >= 0;
      }),
      (JQVMap.prototype.makeDraggable = function() {
        var t,
          e,
          i = !1,
          o = this;
        (o.isMoving = !1), (o.isMovingTimeout = !1);
        var s, r, a, n, l, h, c;
        this.container
          .mousemove(function(s) {
            return (
              i &&
                ((o.transX -= (t - s.pageX) / o.scale),
                (o.transY -= (e - s.pageY) / o.scale),
                o.applyTransform(),
                (t = s.pageX),
                (e = s.pageY),
                (o.isMoving = !0),
                o.isMovingTimeout && clearTimeout(o.isMovingTimeout),
                o.container.trigger("drag")),
              !1
            );
          })
          .mousedown(function(o) {
            return (i = !0), (t = o.pageX), (e = o.pageY), !1;
          })
          .mouseup(function() {
            return (
              (i = !1),
              clearTimeout(o.isMovingTimeout),
              (o.isMovingTimeout = setTimeout(function() {
                o.isMoving = !1;
              }, 100)),
              !1
            );
          })
          .mouseout(function() {
            return i && o.isMoving
              ? (clearTimeout(o.isMovingTimeout),
                (o.isMovingTimeout = setTimeout(function() {
                  (i = !1), (o.isMoving = !1);
                }, 100)),
                !1)
              : void 0;
          }),
          jQuery(this.container).bind("touchmove", function(t) {
            var e,
              i,
              p,
              u,
              g = t.originalEvent.touches;
            if (1 === g.length) {
              if (1 === s) {
                if (h === g[0].pageX && c === g[0].pageY) return;
                (p = o.transX),
                  (u = o.transY),
                  (o.transX -= (h - g[0].pageX) / o.scale),
                  (o.transY -= (c - g[0].pageY) / o.scale),
                  o.applyTransform(),
                  (p !== o.transX || u !== o.transY) && t.preventDefault(),
                  (o.isMoving = !0),
                  o.isMovingTimeout && clearTimeout(o.isMovingTimeout);
              }
              (h = g[0].pageX), (c = g[0].pageY);
            } else 2 === g.length && (2 === s ? ((i = Math.sqrt(Math.pow(g[0].pageX - g[1].pageX, 2) + Math.pow(g[0].pageY - g[1].pageY, 2)) / n), o.setScale(l * i, r, a), t.preventDefault()) : ((e = jQuery(o.container).offset()), (r = g[0].pageX > g[1].pageX ? g[1].pageX + (g[0].pageX - g[1].pageX) / 2 : g[0].pageX + (g[1].pageX - g[0].pageX) / 2), (a = g[0].pageY > g[1].pageY ? g[1].pageY + (g[0].pageY - g[1].pageY) / 2 : g[0].pageY + (g[1].pageY - g[0].pageY) / 2), (r -= e.left), (a -= e.top), (l = o.scale), (n = Math.sqrt(Math.pow(g[0].pageX - g[1].pageX, 2) + Math.pow(g[0].pageY - g[1].pageY, 2)))));
            s = g.length;
          }),
          jQuery(this.container).bind("touchstart", function() {
            s = 0;
          }),
          jQuery(this.container).bind("touchend", function() {
            s = 0;
          });
      }),
      (JQVMap.prototype.placePins = function(t, e) {
        var i = this;
        if (
          ((!e || ("content" !== e && "id" !== e)) && (e = "content"),
          "content" === e
            ? jQuery.each(t, function(t, e) {
                if (0 !== jQuery("#" + i.getCountryId(t)).length) {
                  var o = i.getPinId(t),
                    s = jQuery("#" + o);
                  s.length > 0 && s.remove(),
                    i.container.append(
                      '<div id="' +
                        o +
                        '" for="' +
                        t +
                        '" class="jqvmap-pin" style="position:absolute">' +
                        e +
                        "</div>"
                    );
                }
              })
            : jQuery.each(t, function(t, e) {
                if (0 !== jQuery("#" + i.getCountryId(t)).length) {
                  var o = i.getPinId(t),
                    s = jQuery("#" + o);
                  s.length > 0 && s.remove(),
                    i.container.append(
                      '<div id="' +
                        o +
                        '" for="' +
                        t +
                        '" class="jqvmap-pin" style="position:absolute"></div>'
                    ),
                    s.append(jQuery("#" + e));
                }
              }),
          this.positionPins(),
          !this.pinHandlers)
        ) {
          this.pinHandlers = !0;
          var o = function() {
            i.positionPins();
          };
          this.container
            .bind("zoomIn", o)
            .bind("zoomOut", o)
            .bind("drag", o);
        }
      }),
      (JQVMap.prototype.positionPins = function() {
        var t = this,
          e = this.container.find(".jqvmap-pin");
        jQuery.each(e, function(e, i) {
          i = jQuery(i);
          var o = t.getCountryId(i.attr("for").toLowerCase()),
            s = jQuery("#" + o),
            r = document.getElementById(o).getBBox(),
            a = s.position(),
            n = t.scale,
            l = a.left + (r.width / 2) * n - i.width() / 2,
            h = a.top + (r.height / 2) * n - i.height() / 2;
          i.css("left", l).css("top", h);
        });
      }),
      (JQVMap.prototype.removePin = function(t) {
        (t = t.toLowerCase()), jQuery("#" + this.getPinId(t)).remove();
      }),
      (JQVMap.prototype.removePins = function() {
        this.container.find(".jqvmap-pin").remove();
      }),
      (JQVMap.prototype.reset = function() {
        for (var t in this.countries) this.countries[t].setFill(this.color);
        (this.scale = this.baseScale),
          (this.transX = this.baseTransX),
          (this.transY = this.baseTransY),
          this.applyTransform();
      }),
      (JQVMap.prototype.resize = function() {
        var t = this.baseScale;
        this.width / this.height > this.defaultWidth / this.defaultHeight
          ? ((this.baseScale = this.height / this.defaultHeight),
            (this.baseTransX =
              Math.abs(this.width - this.defaultWidth * this.baseScale) /
              (2 * this.baseScale)))
          : ((this.baseScale = this.width / this.defaultWidth),
            (this.baseTransY =
              Math.abs(this.height - this.defaultHeight * this.baseScale) /
              (2 * this.baseScale))),
          (this.scale *= this.baseScale / t),
          (this.transX *= this.baseScale / t),
          (this.transY *= this.baseScale / t);
      }),
      (JQVMap.prototype.select = function(t, e) {
        (t = t.toLowerCase()),
          (e = e || jQuery("#" + this.getCountryId(t))[0]),
          this.isSelected(t) ||
            (this.multiSelectRegion
              ? this.selectedRegions.push(t)
              : (this.selectedRegions = [t]),
            jQuery(this.container).trigger("regionSelect.jqvmap", [t]),
            this.selectedColor &&
              e &&
              ((e.currentFillColor = this.selectedColor),
              e.setFill(this.selectedColor)));
      }),
      (JQVMap.prototype.selectIndex = function(t) {
        t = t.toLowerCase();
        for (var e = 0; e < this.selectedRegions.length; e++)
          if (t === this.selectedRegions[e]) return e;
        return -1;
      }),
      (JQVMap.prototype.setBackgroundColor = function(t) {
        this.container.css("background-color", t);
      }),
      (JQVMap.prototype.setColors = function(t, e) {
        if ("string" == typeof t)
          this.countries[t].setFill(e),
            this.countries[t].setAttribute("original", e);
        else {
          var i = t;
          for (var o in i)
            this.countries[o] &&
              (this.countries[o].setFill(i[o]),
              this.countries[o].setAttribute("original", i[o]));
        }
      }),
      (JQVMap.prototype.setNormalizeFunction = function(t) {
        this.colorScale.setNormalizeFunction(t),
          this.values && this.setValues(this.values);
      }),
      (JQVMap.prototype.setScale = function(t) {
        (this.scale = t), this.applyTransform();
      }),
      (JQVMap.prototype.setScaleColors = function(t) {
        this.colorScale.setColors(t),
          this.values && this.setValues(this.values);
      }),
      (JQVMap.prototype.setValues = function(t) {
        var e,
          i = 0,
          o = Number.MAX_VALUE;
        for (var s in t)
          (s = s.toLowerCase()),
            (e = parseFloat(t[s])),
            isNaN(e) || (e > i && (i = t[s]), o > e && (o = e));
        o === i && i++, this.colorScale.setMin(o), this.colorScale.setMax(i);
        var r = {};
        for (s in t)
          (s = s.toLowerCase()),
            (e = parseFloat(t[s])),
            (r[s] = isNaN(e) ? this.color : this.colorScale.getColor(e));
        this.setColors(r), (this.values = t);
      }),
      (JQVMap.prototype.unhighlight = function(t, e) {
        (t = t.toLowerCase()),
          (e = e || jQuery("#" + this.getCountryId(t))[0]),
          e.setOpacity(1),
          e.currentFillColor && e.setFill(e.currentFillColor);
      }),
      (JQVMap.prototype.zoomIn = function() {
        var t = this,
          e =
            (jQuery("#zoom").innerHeight() - 12 - 30 - 6 - 7 - 6) /
            (this.zoomMaxStep - this.zoomCurStep);
        if (t.zoomCurStep < t.zoomMaxStep) {
          (t.transX -=
            (t.width / t.scale - t.width / (t.scale * t.zoomStep)) / 2),
            (t.transY -=
              (t.height / t.scale - t.height / (t.scale * t.zoomStep)) / 2),
            t.setScale(t.scale * t.zoomStep),
            t.zoomCurStep++;
          var i = jQuery("#zoomSlider");
          i.css("top", parseInt(i.css("top"), 10) - e),
            t.container.trigger("zoomIn");
        }
      }),
      (JQVMap.prototype.zoomOut = function() {
        var t = this,
          e =
            (jQuery("#zoom").innerHeight() - 12 - 30 - 6 - 7 - 6) /
            (this.zoomMaxStep - this.zoomCurStep);
        if (t.zoomCurStep > 1) {
          (t.transX +=
            (t.width / (t.scale / t.zoomStep) - t.width / t.scale) / 2),
            (t.transY +=
              (t.height / (t.scale / t.zoomStep) - t.height / t.scale) / 2),
            t.setScale(t.scale / t.zoomStep),
            t.zoomCurStep--;
          var i = jQuery("#zoomSlider");
          i.css("top", parseInt(i.css("top"), 10) + e),
            t.container.trigger("zoomOut");
        }
      }),
      (VectorCanvas.prototype.applyTransformParams = function(t, e, i) {
        "svg" === this.mode
          ? this.rootGroup.setAttribute(
              "transform",
              "scale(" + t + ") translate(" + e + ", " + i + ")"
            )
          : ((this.rootGroup.coordorigin =
              this.width - e + "," + (this.height - i)),
            (this.rootGroup.coordsize =
              this.width / t + "," + this.height / t));
      }),
      (VectorCanvas.prototype.createGroup = function(t) {
        var e;
        return (
          "svg" === this.mode
            ? (e = this.createSvgNode("g"))
            : ((e = this.createVmlNode("group")),
              (e.style.width = this.width + "px"),
              (e.style.height = this.height + "px"),
              (e.style.left = "0px"),
              (e.style.top = "0px"),
              (e.coordorigin = "0 0"),
              (e.coordsize = this.width + " " + this.height)),
          t && (this.rootGroup = e),
          e
        );
      }),
      (VectorCanvas.prototype.createPath = function(t) {
        var e;
        if ("svg" === this.mode)
          (e = this.createSvgNode("path")),
            e.setAttribute("d", t.path),
            null !== this.params.borderColor &&
              e.setAttribute("stroke", this.params.borderColor),
            this.params.borderWidth > 0 &&
              (e.setAttribute("stroke-width", this.params.borderWidth),
              e.setAttribute("stroke-linecap", "round"),
              e.setAttribute("stroke-linejoin", "round")),
            this.params.borderOpacity > 0 &&
              e.setAttribute("stroke-opacity", this.params.borderOpacity),
            (e.setFill = function(t) {
              this.setAttribute("fill", t),
                null === this.getAttribute("original") &&
                  this.setAttribute("original", t);
            }),
            (e.getFill = function() {
              return this.getAttribute("fill");
            }),
            (e.getOriginalFill = function() {
              return this.getAttribute("original");
            }),
            (e.setOpacity = function(t) {
              this.setAttribute("fill-opacity", t);
            });
        else {
          (e = this.createVmlNode("shape")),
            (e.coordorigin = "0 0"),
            (e.coordsize = this.width + " " + this.height),
            (e.style.width = this.width + "px"),
            (e.style.height = this.height + "px"),
            (e.fillcolor = JQVMap.defaultFillColor),
            (e.stroked = !1),
            (e.path = VectorCanvas.pathSvgToVml(t.path));
          var i = this.createVmlNode("skew");
          (i.on = !0),
            (i.matrix = "0.01,0,0,0.01,0,0"),
            (i.offset = "0,0"),
            e.appendChild(i);
          var o = this.createVmlNode("fill");
          e.appendChild(o),
            (e.setFill = function(t) {
              (this.getElementsByTagName("fill")[0].color = t),
                null === this.getAttribute("original") &&
                  this.setAttribute("original", t);
            }),
            (e.getFill = function() {
              return this.getElementsByTagName("fill")[0].color;
            }),
            (e.getOriginalFill = function() {
              return this.getAttribute("original");
            }),
            (e.setOpacity = function(t) {
              this.getElementsByTagName("fill")[0].opacity =
                parseInt(100 * t, 10) + "%";
            });
        }
        return e;
      }),
      (VectorCanvas.prototype.pathSvgToVml = function(t) {
        var e,
          i,
          o = "",
          s = 0,
          r = 0;
        return t
          .replace(
            /([MmLlHhVvCcSs])((?:-?(?:\d+)?(?:\.\d+)?,?\s?)+)/g,
            function(t, a, n) {
              (n = n
                .replace(/(\d)-/g, "$1,-")
                .replace(/\s+/g, ",")
                .split(",")),
                n[0] || n.shift();
              for (var l = 0, h = n.length; h > l; l++)
                n[l] = Math.round(100 * n[l]);
              switch (a) {
                case "m":
                  (s += n[0]), (r += n[1]), (o = "t" + n.join(","));
                  break;
                case "M":
                  (s = n[0]), (r = n[1]), (o = "m" + n.join(","));
                  break;
                case "l":
                  (s += n[0]), (r += n[1]), (o = "r" + n.join(","));
                  break;
                case "L":
                  (s = n[0]), (r = n[1]), (o = "l" + n.join(","));
                  break;
                case "h":
                  (s += n[0]), (o = "r" + n[0] + ",0");
                  break;
                case "H":
                  (s = n[0]), (o = "l" + s + "," + r);
                  break;
                case "v":
                  (r += n[0]), (o = "r0," + n[0]);
                  break;
                case "V":
                  (r = n[0]), (o = "l" + s + "," + r);
                  break;
                case "c":
                  (e = s + n[n.length - 4]),
                    (i = r + n[n.length - 3]),
                    (s += n[n.length - 2]),
                    (r += n[n.length - 1]),
                    (o = "v" + n.join(","));
                  break;
                case "C":
                  (e = n[n.length - 4]),
                    (i = n[n.length - 3]),
                    (s = n[n.length - 2]),
                    (r = n[n.length - 1]),
                    (o = "c" + n.join(","));
                  break;
                case "s":
                  n.unshift(r - i),
                    n.unshift(s - e),
                    (e = s + n[n.length - 4]),
                    (i = r + n[n.length - 3]),
                    (s += n[n.length - 2]),
                    (r += n[n.length - 1]),
                    (o = "v" + n.join(","));
                  break;
                case "S":
                  n.unshift(r + r - i),
                    n.unshift(s + s - e),
                    (e = n[n.length - 4]),
                    (i = n[n.length - 3]),
                    (s = n[n.length - 2]),
                    (r = n[n.length - 1]),
                    (o = "c" + n.join(","));
              }
              return o;
            }
          )
          .replace(/z/g, "");
      }),
      (VectorCanvas.prototype.setSize = function(t, e) {
        if ("svg" === this.mode)
          this.canvas.setAttribute("width", t),
            this.canvas.setAttribute("height", e);
        else if (
          ((this.canvas.style.width = t + "px"),
          (this.canvas.style.height = e + "px"),
          (this.canvas.coordsize = t + " " + e),
          (this.canvas.coordorigin = "0 0"),
          this.rootGroup)
        ) {
          for (
            var i = this.rootGroup.getElementsByTagName("shape"),
              o = 0,
              s = i.length;
            s > o;
            o++
          )
            (i[o].coordsize = t + " " + e),
              (i[o].style.width = t + "px"),
              (i[o].style.height = e + "px");
          (this.rootGroup.coordsize = t + " " + e),
            (this.rootGroup.style.width = t + "px"),
            (this.rootGroup.style.height = e + "px");
        }
        (this.width = t), (this.height = e);
      });

    jQuery.fn.vectorMap("addMap", "russia", {
      width: 990,
      height: 593,
      paths: {
        da: {
          path:
            "m64.939,403.74,2.6516,1.2627,3.6618,0.50507,1.7678-2.0203,2.1466,2.0203,2.3991-1.6415,0.25254-1.7678,1.6415-2.1466,3.0305,0.50508,3.7881-2.9042-0.50508-1.894-4.7982-0.50508,0.75762-3.1567-1.0102-0.63134,0.63135-2.2728-3.1567-2.7779,1.5152-0.50508,3.9143,0.88388,0-1.389-1.0102-1.2627,8.3338-0.25254,4.9245,5.4296,1.2627,1.894-0.37881,2.2728-5.3033-0.3788,0.50508,2.5254,1.5152,3.0304-1.0102,3.5355-2.3991,2.7779-1.2627,0.25254,4.5457,0.75761-5.5558,2.1466-0.50508,2.0203-0.75762,0.50508-3.0305,0.50507-0.25254,4.7982-1.2627,0.88388-1.1364,13.132-9.0914-0.12627-3.6618-2.2728-1.389-0.88388,0-11.617-3.283-5.9346,0.37881-2.9042,1.2627-0.37881z",
          name: "Республика Дагестан"
        },
        cr: {
          name: "Республика Крым",
          path:
            "m7.63 300.28 3.08 -4.47 -2.39 -5.96 -2.32 -1.30 -0.26 -1.56 5.37 0.27 5.62 1.13 3.78 3.17 -0.68 -4.60 2.99 3.45 0.38 1.58 3.51 3.18 1.69 4.34 -1.36 3.53 -0.62 6.67 2.20 0.60 1.62 -0.23 0.49 2.00 2.15 0.47 2.86 3.79 -3.47 0.05 -1.26 2.11 -4.89 -4.06 -1.13 -2.79 -2.69 -0.25 -5.54 -2.16 -3.75 -1.18 -4.89 0.14z"
        },
        sa: {
          path:
            "M701.25,126.75l-1.44,1.06-1.25,1.63s1.44,0.87,2.16,0.87c0.71,0,2.69-1.97,2.69-1.97l-2.16-1.59zm18.47,12.09c-0.18-0.01-0.4,0.02-0.63,0.07-1.78,0.35-4.81,1.93-4.81,1.93s-1.41,1.1-2.12,1.1c-0.72,0-2.35-0.38-2.35-0.38-0.71,0-2.5,1.25-2.5,1.25l-1.4,1.78s-1.1-0.51-1.1,0.38-0.35,1.96,0.72,2.5c1.07,0.53,1.61,1.06,2.5,1.06s3.22-0.72,3.22-0.72l1.97-0.87,1.97,1.06s0.51-0.9,1.4-1.44c0.9-0.53,3.4-2.31,3.75-3.03,0.36-0.71,0.72-3.22,0.72-3.22s-0.11-1.36-1.34-1.47zm-19.81,7.1c-0.15,0.01-0.29,0.05-0.44,0.09-1.25,0.36-2.85,0.19-3.56,0.19-0.72,0-0.91,0.19-0.91,0.19s-0.88,1.58-1.59,1.93c-0.72,0.36-1.99,0.74-3.07,0.57-1.07-0.18-3.75-1.25-3.75-1.25s-1.93-0.02-1.93,1.59,3.03,3.41,3.03,3.41l1.06,1.4s-2.51,0.73-3.41,0.38c-0.89-0.36-2.65-2.16-2.65-2.16l-3.22-0.72s-2.88,0.2-2.88,1.1c0,0.89-0.68,2.67-0.68,3.56s-0.9,3.04,0.53,3.94c1.43,0.89,1.79,3.03,1.97,3.75,0.17,0.71,0.7,1.77,2.84,2.31,2.14,0.53,4.29,0.53,5,1.06,0.71,0.54,1.77,1.07,2.84,0.53,1.08-0.53,1.82-2.65,1.82-2.65l2.12-1.97s1.61-1.44,2.5-2.16c0.89-0.71,2.7-0.54,4.13-1.44,1.42-0.89,2.31-3.75,2.31-3.75v-5l-0.38-4.43s-0.68-0.58-1.68-0.47zm106.25,5.62c-0.45,0.09-0.75,4.1-0.75,4.1l-7.32,1.65-3.28,0.63-4.53-6.06-7.84-0.13-0.38,0.87-5.68,1.66-1.76,2.13-6.06,6.31v2.78l-2.15,1.91-3.29,5.03-4.93-2.38-3.41-0.37-1.75,2h-4.56l-3.41,1.78-1.75-1.53,4.28-2.91-2.28-1.62-3.03-0.13-8.84,4.03,1.9,5.44-0.87,4.78-2.66,2.91-1.65-2.13,3.03-7.47-1.75-0.37-2.66,4.03-3.03,2.03-1-0.75,1-3.16,2.28-0.74,2.91-2.66-7.1,1.75-9.22,5.31-6.68,0.25,3.65,3.66-3.65,3.4-0.5,3.03,0.37,1.16,3.91-1.78-1,4.03,4.81,2.91-0.91,2.9-2-1.37-3.68,1,1.28,3.41,2.4-0.26-1.03,2.66-3.9-0.5-4.28-1.66-3.53,0.26-2.41,3.15-0.63,4.06h-6.46l-1.76-1.53-2.4-2-0.5,4.41,0.87,0.87-0.12,1.41,1.65,0.87-0.9,2.54,1.66,6.18-3.29-1.4-1,1.15-9.87-5.31v-4.94l-2.25,0.13-1.78,2.41-2-3.41,3.65-0.63-0.5-2.9-4.43-1.66,0.75-0.87,0.12-2.53-5.28-4.04-5.31-2.53-1,3.66-7.35,0.65-2.37-1.65-4.19,2.15v2.13l4.19,4.69-10.94,5.31-10.28-1.16,0.44-4.4-12.07,0.19-3.96,3.78h-2.85l-1.09,1.09,2.66,2.87h-2.13l-2.91-2.06,1.19-2.09-0.87-1.38-1.54-1.78,0.07,2.28-1.5,1.07-3.85-1.32s-2.9,3.53-2.84,3.78c0.06,0.26,2.66,3.29,2.66,3.29l-1.41,3.34,1.59,2.09,0.19,2.78,7.38,5.82-0.32,5.47,2.53,1.9,1.63,2.53-2.53,2.72-4.41,3.03-0.69,2.63-4.81,2.78,0.25,6.12-2.25,1.1-2.97-1.28-5.65,4.75-4.44,0.09,0.06,1.97,5.38,6.59,1.78,20.1-6.35,1.97,4.19,3.4-1.78,4.19v1.25l7.16,8.84-4.57,6.69,0.97,1.6-2.4,1.87,0.09,2.25,5.63,0.34,0.71,0.72,9.1,0.19,3.31,3.31-0.53,1.6-3.31,0.34,0.19,3.94,4.03-1.06,5.06,6.59-0.53,5.53,3.84,5.19-1.97,3.4,0.53,2.13,7.69,6.53v4.37l-3.75,6.44,0.28,10.78,3.85,4.13,3.37-3.94,3.75,0.09,1.88-1.34,2.68-0.62,2.41-2.07,3.56,3.85,0.38,2.31,4-5.06,0.09-4.13,5.38-2.75-0.29-6.25,2.32-4.12,3.84-1.5,4.91,1.06,6.15,4.91,0.57,3.84,1.31,0.87,4.03-1.4,2.5-2.06,2.69,1.06,0.87,4.47,3.13,4.56,2.15,1.78v3.03l2.32,1.35,0.71,4.71,3.94,0.19,0.97,1.35,1.53,4.09,8.38-0.25,3.31-1.97,5.53,1.16,3.56,1.97,11-0.72,5.54,3.75,2.21,0.53,5.19-2.6h2.6l3.03,2.26,2.78-0.19,3.22-3.94,5.68-0.06,2.5-1.97h7.88l0.19-3.75,10.68-5.09,0.82-3.04-4.28-4.12,2.31-1.69,0.62-4.03-1.34-1.69-2.41,0.38-2.03-1.44,2.75-4.03-2.84-1.6,0.25-1.87,1.53-1.97-1.44-1.44-3.47-1.15-0.53-1.6,3.38-1.43-1.88-0.91-0.19-5.25-0.87-0.62-0.19-1.88,2.78-1.25-1.62-1.25v-2.94l5.47-1.97,3.12,0.16,0.25-1.78,6.53,0.09v-2.75l-1.25-1.53,1.16-1.25,3.47-0.62,3.31-2.22,1.34-6,5-0.44,0.1-2.06s-5.29-4.9-5.47-5.25c-0.18-0.36-0.88-3.94-0.88-3.94l-3.56-2.59v-5.97l2.94-7.16-1.69-9.19,0.78-3.12,13.5,0.72,0.25-5.28,5.19-1.16,3.47,1.87,0.81-2.31-2.41-3.69,1.69-0.62,0.19-2.75-7.16-8.5,0.1-4.37-3.13-1.5-0.09-4.04-1.78-1.15,1.09-2.13,3.81-0.47,1.35-1.78,4.28,0.38,0.09-2.44-3.37-1.5,0.15-3.31,5.47-0.53v-3.57l5.63,0.44,5.62-8.03,0.44-2.5-6.06-6.06-0.19-1.88,2.31-3.4-0.97-1.79-3.31,0.19-1.5-2.34,4.72-1.41-0.09-1.53-2.07-0.97-0.25-1.34,2.13-3.75,5.72-1.97-0.78-3.56,5.15,0.68-0.62-5.43,1.34,0.28,0.19-3.59-2.69-0.63-2.94-4.53-7.59-0.28-4.19-1.88,0.72-3.47h-3.12l-0.19-1.62,8.12-10.44,1.07-7.84s-9.81-5.72-10.25-5.63zm-135.1,8.56c-0.12,0.03-0.23,0.08-0.34,0.19-0.89,0.9-1.07,1.79-0.53,2.5,0.53,0.72,1.06,1.63,1.78,2.35,0.71,0.71,2.31,1.25,2.31,1.25s0.71-1.1,0.53-1.82c-0.18-0.71-1.97-2.84-1.97-2.84s-0.94-1.78-1.78-1.63zm28.94,7.35l-2.31,0.34s-1.07,0.91-1.25,1.63c-0.18,0.71-0.9,1.24,0,1.78,0.89,0.53,3.75,1.25,3.75,1.25s1.6-0.02,1.78,0.87c0.18,0.9,0.18,1.8,0,2.69s-0.53,1.78-0.53,1.78l0.72,0.72,1.93-0.53s0.74-0.72,1.82-0.72h2.65s1.44-0.53,1.97-1.25c0.54-0.71,1.97-1.25,1.97-1.25h2.69s1.41-0.52,0.87-1.59c-0.53-1.07-1.76-1.62-2.65-2.16-0.9-0.53-3.22-2.31-3.22-2.31h-2.5l-3.6,0.34-2.84,0.38-1.25-1.97zm-17,10.15c-0.12,0-0.22,0.01-0.31,0.04-0.72,0.17-1.44,1.4-1.44,1.4s0.37,1.78,2.16,1.78c1.78,0,2.3,0.55,2.65-0.34,0.36-0.89-0.87-2.31-0.87-2.31s-1.37-0.55-2.19-0.57z",
          name: "Республика Саха (Якутия)"
        },
        so: {
          path:
            "m75.583,387.43-2.2728,2.6516-4.1669-2.6516-2.0203,1.1364-0.37881,5.8084-1.1364,1.389-2.2728-0.12627-5.9346-2.6516-3.0305-3.283,0.12627-4.9245,4.672,0.75761,0.37881-0.88388,2.5254-0.12627,3.283,1.5152,4.0406-1.894s-0.12627-3.5355,0.75761-2.7779c0.88388,0.75762,1.389,1.2627,1.389,1.2627l0.25254,3.5355z",
          name: "Республика Северная Осетия"
        },
        kb: {
          path:
            "m50.982,375.86c0.26786,0.35715,2.5893,4.7322,2.5893,4.7322l0.98214,3.9286,4.6429,1.1607,2.8571-1.0714,3.2143,1.5179,4.375-1.875,0.26786-3.125-5.9821-2.3214-1.875-5.0893-2.2321-1.1607-4.375,0.71429z",
          name: "Республика Кабардино-Балкария"
        },
        kc: {
          path:
            "m43.482,361.39,2.2321,8.4821,5.0893,6.25,4.375-2.6786,5.3571-0.89286,0.08929-3.3928,3.75-1.0714-6.6964-7.2321-2.2321,2.4107-2.8571,0.26786-1.6071-4.5536,0.44643-2.1429z",
          name: "Карачаево-Черкесия"
        },
        st: {
          path:
            "m63.929,367.73-3.4821,0.98215,0.17857,3.75,1.5179,1.25,1.7857,4.6428,6.5179,3.0357,1.3393,1.3393,0.08929,3.0357,3.8393,1.7857,1.6071,2.5893,3.2143,0.625,0.71429-1.4286-2.8571-3.125,1.5179-0.53572,3.5714,0.80357,0.17857-1.1607-0.98214-1.3393,7.7679-0.0893,1.6964-1.5179,0.26786-3.5714-5.2679-7.5-0.17857-9.4643-3.4821-6.0714-4.9107-0.98214-1.5179-2.7679-5.0893-5.7143-0.98214-0.625-1.5179,1.3393-2.7679-2.0536-1.4286,0.80357-0.80357,1.0714-0.08929,1.6071,0.35714,1.3393,0.35714,1.1607-0.71429,1.6071-0.98214,1.4286-1.9643,2.2322-1.875,1.0714-0.71428,0.98214-0.98214,2.3214z",
          name: "Ставропольский край"
        },
        ks: {
          path:
            "m51.607,356.48-0.08929,2.0536,0.98214,3.8393,0.35714,0.80357,2.2321,0.0893,3.75-4.5536,1.4286-1.9643,1.9643-1.0714,2.6786-4.0178-0.26786-3.3929,0.17857-1.6964,0.89286-1.5179,1.3393,0,1.7857,1.5179,1.3393,0,2.5893-3.0357,0.08929-1.9643-0.89286-0.98214-2.2321-1.3393,0.17857-2.9464,2.8571-3.125,0.08929-1.4286-2.7679-2.9464-3.75-0.71428-0.80357-0.89286,1.6071-1.25,0.17857-2.4107-2.1429-1.6072-2.5893-0.80357-1.6071-1.6964-1.25-0.98214-0.89286-0.0893-1.3393,2.2322-0.625,0.98214,1.0714,1.4286-0.35714,1.5179-0.80357,0.625-2.7679-0.26786-0.89286-0.89286-1.9643,0.0893-1.875,0.71429-3.0357,1.7857-1.6964,0-1.3393-1.4286-1.6071-0.625-1.1607-1.4286,0-2.6786-2.2321-0.26786-1.25,0.625-0.35714,2.9464-0.089286,13.214,0.71429,5.8929,0.98214,3.6607-0.089286,2.3214-0.625,2.7679-0.089286,2.4107,0.17857,2.0536,1.5179,0.89285,0.71429,0.625,1.6071,1.5179,0.89286,1.0714,0.89286,0.89286l7.947-4.27-0.804-1.25-0.357-1.43-5.089,2.68h-1.875l-1.25-1.875,0.35714-3.5714,6.25-1.4286,2.7679-2.3214,0.71429-2.5893-1.3393-0.80357-1.9643,0.44642-1.1607-1.5178-0.71429-2.6786-1.3393-1.7857-0.17857-1.25,0.08929-1.1607,1.3393-0.80357,1.3393,0.625,1.0714,1.3393,1.0714,1.9643,1.3393,1.7857,2.3214,1.3393,1.6964,0.89285s0.625,0.26786,0.71429,0.625c0.08929,0.35715,0.89286,2.6786,0.89286,2.6786v4.0178l-0.08929,1.3393-1.0714,1.0714-1.875,1.5178-1.6071,1.4286z",
          name: "Краснодарский край"
        },
        ro: {
          path:
            "m67.5,323.45,2.0536,0.98214,1.4286-0.17857,0.625-0.89286-0.44643-1.1607-1.25-0.89286-1.9643-1.3393-0.89286-1.1607-0.35714-0.71428,1.0714-1.4286l2.231-1.08,1.6071-0.26786,1.0714,0.35714,1.4286,1.3393,1.5179,0.35714,1.6964-0.89286,0.89286,0.44643,1.072,1.06,1.339,1.79,0.268,1.33,1.607-0.08,1.3393-0.80358,1.6964-0.0893,1.3393-0.0893,0.35714-1.5178,0.53571-1.4286,1.25-1.6071,1.3393-1.0714,1.6964,1.0714,0.71429,0.35714,0.89286-1.875,0.44643-0.71428,2.6786-0.26786,1.875-1.6964,2.3214-0.17857,2.0536,1.1607,2.1429,1.25,0.98214,0.53571,3.9286,0.0893h2.2321l1.5179-0.98215h1.3393l0.71429,0.625,0.26786,1.6964-0.08929,1.9643v1.875l-0.08929,1.0714-0.981,1.34-1.25,0.98214-1.25,0.71429-0.80357,0.35714-0.35714,1.25-0.44643,1.6072-0.08929,1.4286-0.44643,1.1607-0.625,1.4286-1.4286,1.5179-1.6964,0.53571h-3.125l-1.608-0.36-1.518,0.53-0.625,1.97-0.982,0.62-0.80357,0.53572,0.17857,0.89285,1.3393,1.4286,0.71429,1.4286-1.1607,1.4286-1.3393,0.89285-0.80357,1.7857-0.08929,0.80357,0.98214,0.53571,1.1607,1.1607,0.625,1.0714,0.80357,0.80357,0.71429,1.3393v1.0714l-0.71429,0.80357,0.53572,0.625,1.4286,0.35715,0.625-0.53572,0.71429-0.0893,0.35714,0.98214v1.4286l-1.3393,1.3393-2.1429,1.0714-2.0536,1.1607-3.3929,0.0893-0.80357,0.80357-1.3393,0.80357-1.696,0.46-1.429-0.71-1.696-0.71-0.893-0.9-0.178-2.23-0.179-1.52-1.696-2.14-1.1607-0.80357-0.17857-1.25-0.80357-0.89286-1.7857-0.0893h-2.7679l-2.8571-0.0893-1.3393-0.17857-1.6071-1.7857-0.98214-0.71429v-0.89286l1.3393-1.5178v-1.5179l-0.625-1.25-1.875-1.4286-0.71429-0.625,0.26786-2.2322,2.7679-3.2143,0.08928-1.6071-1.9643-2.2322-1.3393-0.89285-2.411-0.55-1.0714-0.35714-0.08929-0.71429,1.0714-1.0714,0.26786-1.1607z",
          name: "Ростовская область"
        },
        kk: {
          path:
            "m74.554,348.71,0.98214,1.6071,1.1607,1.0714,1.1607,1.6964,0.80357,1.1607,1.1607,0.71429,2.5893,0.44643,1.3393,0.625,0.98214,1.6071s0.98214,1.7857,1.25,2.2321c0.26786,0.44643,0.98214,2.4107,0.98214,2.4107l0.17857,4.9107v3.2143l0.89286,2.2321,3.3036,4.1964,1.25,2.0536-0.17857,2.5893-1.4286,1.875,0.89286,1.3393,4.375,4.7321,0.53571,1.25,0.35714,0.98215,0.89286,0.53571,1.4286,0.0893,1.6071-0.26786,1.7857-0.53572,2.2321-0.89285,2.3214-0.26786,0.713-0.71,0.625-2.15-0.268-1.16-2.232-1.34-0.982-0.71,0.08928-1.3393,1.0714-0.625,1.7857,0.0893,1.4286-1.25-0.53572-0.71428-0.71428-2.0536-0.268-1.7-0.179-1.16h1.0714l1.6964,1.25,1.7857,0.80357,2.6786-0.17857h0.89286l0.53571-1.1607-0.17857-2.4107-0.08929-3.8393v-6.3393-0.98214l-0.08929-2.2321,2.9464-2.8572,0.17857-1.3393-1.4286-0.625v-3.2143l-1.0714-1.1607-1.1607-0.35715-2.5-0.17857-0.625-1.4286-0.17857-0.80357-1.25,0.26786-0.625,1.0714h-1.3393l-1.25-0.0893-1.071-0.98-0.804-0.71-2.321-0.27-0.98214,0.35715-0.71429,0.80357-0.71429,0.35714-0.26786,1.1607-0.35714,0.80357,0.35714,0.625,1.0714,0.35714,1.0714-0.44643,0.89286,0.35714,0.08929,0.98215-0.44643,1.5178-5,3.125-3.3929,0.26786-2.3214,1.3393-1.5179,0.53571-3.8393-1.7857-0.53571-0.35715-0.08929-3.3928-0.71429-1.4286-2.3214-2.2322-0.625-1.25-1.9643-0.80357h-3.5714z",
          name: "Республика Калмыкия"
        },
        as: {
          path:
            "m116.873,350.94,1.6415-1.389,1.1364-0.63135,1.7678,1.2627,2.0203,0.63135,2.2728,0.50508,0.88388,1.0102,2.1466,0.88388,0.75761,1.1364,0.63134,1.1364,0,1.389,0,0.88389-1.5152,0.3788-1.1364,1.389-0.12627,1.0102,0.63134,1.389,1.0102,1.1364-0.37881,2.1466-0.75762,1.0102-1.7678,0.88389-0.25254,1.1364,0.50508,0.88388,1.7678,1.1364,2.2728,1.5152,1.389,1.6415,0.63134,1.0102,0,1.5152-1.0102,1.1364-0.25254,2.0203-1.0102,1.0102,0,2.2728,0,2.7779-0.75761,0.3788-1.7678-0.3788-1.894-0.75762-0.63134,0.37881-0.37881,2.1466,1.6415,2.1466,1.1364,1.2627,0.88388,1.0102,0.50508,0.63134,0.12627,1.2627-3.9143,0.25253-3.0305,0.63135-2.1466,0-1.894-1.2627-2.0203-1.5152-5.4296,0-1.0102-0.37881-1.1364-1.1364,0.37881-2.9042-0.88388-1.0102-2.2728-1.6415,0-1.6415,1.0102-0.3788,1.5152,0,1.389-1.0102-0.63134-1.389-0.75761-4.0406,0.63134-0.3788,1.2627,0.75761,2.9042,1.389,2.0203-0.25254,1.2627-0.12627,0.50508-1.6415-0.25254-5.4296,0.12627-5.0508-0.25254-4.2931,2.1466-2.2728,1.0102-1.1364,0.12627-1.389-1.2627-0.50508-0.25254-2.1466z",
          name: "Астраханская область"
        },
        ad: {
          path:
            "m51.786,356.21,2.4107-1.4286,2.5-2.6786,0.35714-2.1428-0.26786-3.9286-1.0714-2.7679-2.9464-0.98214l-2.412-1.78-2.232-3.75-1.5179-1.1607-1.3393,0.71428-0.17857,2.1429,1.6071,1.875,0.80357,2.5893,1.1607,1.6964,1.6071-0.35714,1.5179,0.44643-0.44643,2.9464-2.9464,2.3214-3.394,0.71-2.8571,0.35715-0.17857,3.8393,1.0714,1.7857h1.7857l5.3571-2.9464,0.35714,1.7857z",
          name: "Республика Адыгея"
        },
        vl: {
          path:
            "m115.893,313.18,1.5179-0.98214,1.875-0.0893,1.1607-1.0714,1.1607-1.6072,0-1.25,1.1607-0.98214,1.9643,1.25,2.5,1.9643,3.3036,2.1428,3.9286,1.5179,1.4286,1.5179,0.625,2.1428,0.44643,1.4286,2.8571,0.35714,0.44643,1.4286,2.5893,0.80357,1.7857,1.7857,1.6964,1.6964,0.17857,2.2322-1.5179,1.25-1.6071,2.2321-1.4286,1.3393-0.26786,1.25,0.89286,2.2321,2.9464,1.875,1.6964,1.875,1.7857,1.1607,1.25,3.3036,1.0714,1.875,0.0893,1.25-0.71428,0.53572-1.3393,0.44643-0.71429,0.53571-2.8571,0.26786-4.6429-0.0893-1.6964,0.26786-0.71429,1.6071,0,2.8572-0.17857,1.1607-1.6964,1.25-1.3393,0.98214-4.0178-0.0893-1.0714-0.0893-1.3393-3.0357-1.4286-1.0714-1.875-1.0714-1.0714-0.625l-2.256-0.46-2.054-1.25-1.071-0.18-1.1607,0.625-0.98214,0.71429-1.25,0.26785-2.1429-0.0893-0.89286-1.1607-0.35714-1.25-1.4286,0.26786-0.89286,1.1607h-1.25l-1.875-0.71428-1.25-0.80357-1.3393-0.35715-1.4286,0.17858-1.4286,1.25h-0.89286l-1.4286-2.5-1.25-1.4286-1.0714-0.71428,0.448-1.44,0.893-1.52,1.607-1.43,0.179-0.89-1.6964-2.1429-0.44643-1.0714,1.4286-0.80358,0.625-1.875,0.625-0.53571,1.25-0.35714,1.6071,0.0893h3.0357l1.7857-0.625,1.9643-2.5893,0.89286-4.0179,0.625-1.4286,2.8571-2.0536,1.1607-1.6964,0.35714-3.3036v-2.2322z",
          name: "Волгоградская область"
        },
        vn: {
          path:
            "m100.089,310.77,0-6.0714,0.08929-1.1607,3.75-3.2143,2.5-3.6607,1.3393-1.4286,0.35714-1.875,2.4107-0.71428,0.35714-2.5893,0.625-1.7857,1.0714-0.35714,0.625-2.0536,1.3393-1.7857,1.1607-1.0714,0.98214-0.53571,0.89286,1.1607,0.44643,0,0.71429-1.0714,0.53571-0.71428,1.1607-0.17857,0.89286,0.89285,1.25,1.1607,1.4286,1.4286,1.1607,1.5179,0.80357,0.89285-0.26786,2.1429,0,1.6071,1.875,1.0714,2.3214,1.3393,0.80357,1.3393-0.0893,1.7857-0.89285,1.5178-0.44643,0.98215,1.5179,1.25,1.875,1.7857,1.9643,2.2321,1.3393,1.6964,1.1607,1.9643-0.26786,2.3214,0,2.0536-2.1429,1.0714-0.71428,0.17857-4.2857-1.875-2.6786-1.7857-2.1429-1.4286-1.6964-1.1607-0.53571-0.17857-0.71429,0.80357-0.44643,1.25-1.4286,1.9643-1.6964,0.44643-2.8571,0.80357-3.5714,1.1607-3.2143,0.0893-2.5-0.17857-2.3214-1.25-2.3214-1.0714z",
          name: "Воронежская область"
        },
        bl: {
          path:
            "m93.304,272.29-5.4464,3.3036,0.08928,2.6786,1.6964,1.875,0.08929,3.125,0.44643,1.6964,2.8571,1.6071,2.8571,0.44643l1.608,2.23-2.5,3.3036-0.35714,2.1429,1.0714,1.6071,2.3214,1.5179,0.17857,2.9464,1.1607,1.5179,0.71428,0.89285,4.7321-4.375,3.75-5.4464,2.0536-0.89285,0.80357-4.1072,1.0714-0.89285,0.53571-1.3393-2.5-2.8571-3.5714-4.1071-2.7679-0.26786-2.9464-1.1607-2.6786-1.6964-2.5893-1.6072-1.9643-1.6071z",
          name: "Белгородская область"
        },
        ky: {
          path:
            "m93.482,271.84,0-4.6429l-0.357-1.61-1.786-1.97-0.714-1.07,1.3393-1.0714,3.75-1.3393,2.7679-1.3393,2.6786,0.0893,0.53571,1.0714,1.25-0.0893,1.7857-1.1607h0.80357l0.98214,0.44643,1.4286,1.6071,0.53571,0.80357,0.08929,1.6964,1.0714,0.89286,1.0714,0.71428h0.89286l1.0714,1.25,0.17857,3.2143v2.4107l-0.89286,0.98214v1.5179,1.1607l1.0714,1.25,1.1607,0.98214,0.89286,0.17857,1.5179,0.53571,1.0714,1.6072,1.6071,1.5178-0.71429,1.1607-0.80357,0.89286-0.89286-0.80358-1.9643,1.25-1.4286,1.1607-0.53571,0.80357-3.4821-4.1071-2.2321-2.3214-0.98214-0.53572-3.3036-0.625-2.8571-1.5178-3.6607-2.1429-2.4107-1.9643z",
          name: "Курская область"
        },
        or: {
          path:
            "m104.732,258.27,1.0714-1.875,2.2321-0.26786,0.89286-1.6071,0.89286-0.53572,1.9643,0.89286,1.6964-0.0893,1.6071-0.71429,1.0714-1.5179,0.89286-0.53571,0.98214,0.17857,1.3393,0.98214,1.9643,0.89286,1.1607,0.89286,0.35714,0.89285,0.71429,1.3393,0.17857,2.0536,0,3.6607,0.98214,1.7857,1.4286,1.875,0.80357,1.25,0.71429,1.7857-0.26786,1.5179-3.9286,1.875-1.9643,0.98214-1.0714,2.1429-1.875,1.0714-1.875,1.0714-2.4107-0.89286-1.9643-1.6071-0.44643-1.6964,0.44643-1.9643,0.44643-0.89285,0.08928-4.4643-0.89286-1.6964-1.7857-0.53571-1.7857-1.4286-0.08929-1.6072-1.3393-1.5178-1.6071-1.6964z",
          name: "Орловская область"
        },
        lp: {
          path:
            "m116.875,278.45,1.5179,1.875,1.0714,0.89286,1.1607,0.71428,1.1607,1.0714,2.5,2.2321,1.25,1.5179,0.625,1.4286-0.44643,2.5893,0.53572,0.625,2.5,1.3393,1.875,1.7857,1.0714-0.17857,1.0714-0.625,0.44643-0.80357,0.0893-5.8036,0.35714-0.71428,1.4286-0.80357,2.3214-0.17857,2.0536-1.1607,1.3393-0.44643,0.17857-1.6964,0.625-1.3393,1.25-1.5179-0.80357-1.1607-2.6786-0.98215-0.53571-0.53571-0.17858-0.71429,1.0714-1.3393,0-1.6071-2.1428-0.35715-1.0714,0.44643-1.6072,0.80357-0.98214,0.89286-1.1607,0.625-1.4286,0.0893-1.3393-1.5179-1.6964-1.6964-0.80357-0.98214-2.4107,0.89285-3.125,1.6964-1.1607,1.6072-1.6071,1.4286z",
          name: "Липецкая область"
        },
        tl: {
          path:
            "m123.482,256.3,3.2143-2.0536,0.98214-0.17857,1.6071,0.80357,0.98215-0.80357,0.71428-1.0714,3.125,0,1.6072,0.625,2.0536,0.35714,1.4286,0.80358,2.4107,0.35714,1.4286,0.71428,0.53572,1.0714,0.98214,1.0714,1.25,1.4286,0.71429,1.6072-0.35715,1.6964-0.98214,1.1607-0.71428,1.6964-1.3393,1.9643-1.6964,2.0536-1.0714,1.875-0.71428,0.98215-0.53572,0.35714-1.7857,0-2.5,0.89286-1.5179,1.0714-1.3393,0.26785-2.0536-1.3393-2.0536-2.5893-0.26786-2.0536-0.53571-1.4286-1.6071-2.5l-1.413-2.14-0.179-2.23z",
          name: "Тульская область"
        },
        bn: {
          path:
            "m97.679,258.62,0.26786-1.7857,2.3214-1.5179,0.44643-1.1607,0-1.4286-1.6071-1.9643-1.7857-2.1429-1.6964-1.9643-2.3214-1.875-1.5179-0.89286-1.6964-0.26786-0.89286-1.1607,0.17857-2.3214,1.3393-1.6071,3.125-2.1429,2.6786-1.875,0.89286-1.7857,0.98214-0.71428,1.6964,0.26786,0.625,1.25,0.625,1.5178,1.0714,2.2322,1.1607,0.80357,5.8929,0.26785,2.1429-0.35714,1.4286,0.53572,3.125,0.89285,2.3214,0,0.71429,1.9643,0,2.2321-0.17857,1.1607-0.98214,1.5178-0.71429,0.53572-0.26786,1.4286,0.26786,1.5179,0,1.25-0.80357,1.4286-1.4286,1.5178-1.7857,0.71429-1.6964,0.17857-1.7857-0.71428-1.4286,0.71428-0.26786,0.89286-2.4107,0.80357-1.0714,1.4286-1.3393,1.25-1.4286,0.17857-1.4286-0.71428z",
          name: "Брянская область"
        },
        kj: {
          path:
            "m119.196,239.61,1.6071-1.25,1.6071-1.3393l1.161-0.27,1.429,0.63,0.80357,1.4286,1.0714,1.25,1.7857,0.80357,1.7857,0.35715,3.125,0.0893,1.875-0.0893,1.6071-1.0714,2.4107-0.0893,1.4286,0.44643,0.98214,2.0536,0.26786,1.4286,1.25,0.625,1.6071,0.98215,0.98214,0.80357,0.53572,1.25-0.53572,2.0536-1.0714,1.7857-1.4286,1.9643-1.1607,1.25-0.89286,0.44643-3.75-1.25-2.6786-1.0714-2.6786,0.0893-1.875,0.44642-1.0714,1.25-1.5179-0.44642-1.0714,0.0893-1.0714,0.80357-2.0536,1.0714-0.89286-0.89286-1.0714-0.80357-1.9643-1.25-1.5179-0.89285-0.89286-0.44643v-1.0714-2.4107l-0.08929-0.625,1.1607-1.6964,1.0714-1.875v-1.7857l-0.26786-1.6071z",
          name: "Калужская область"
        },
        sm: {
          path:
            "M109.375,237.55,110,235.95,110.179,234.52,109.732,233l-0.08928-1.4286,1.5179-1.3393,0.71429-1.6071,0.08929-3.125,0.35714-1.875,2.4107-2.5,2.5-1.9643,1.875-1.7857s1.875-1.3393,2.2321-1.5179c0.35714-0.17857,2.5-1.5178,2.5-1.5178l2.5,0.0893,3.0357,3.4822,1.875,3.4821,2.5,3.6607,1.4286,0.89286,2.7679,0.53571h2.0536l0.80357,0.71429,1.1607,1.875,1.1607,1.3393,1.25,1.6071,1.0714,1.4286,0.17857,1.3393-0.98214,1.25-1.875,0.89285-1.875,0.53572-0.89286,1.25-0.44643,0.89285-1.875,0.44643-1.7857,0.625-1.6072,0.35715h-3.0357l-3.75-0.80358-1.7857-1.7857-1.4286-1.3393-1.1607-0.26785-1.1607,0.71428-2.2321,1.5179-1.1607,0.44643-1.7857-0.44643-4.1071-0.98214-2.4107-0.35715z",
          name: "Смоленская область"
        },
        mc: {
          path:
            "m146.07,234.16,3.5714,0.26785,2.3214-0.89285,1.4286-0.44643,0.53571,0.625,0.0893,1.7857,0,1.1607-0.17857,1.3393,1.5178,0.89286,2.9464,0.44643,1.7857,0.89285,2.0536,0.89286,2.7678,0.89286,1.7857,0.26786,1.25,0.53571,0.26786,1.6071-0.0893,1.5179-0.44643,1.6964-1.5179,0.625-2.1428,1.1607-1.6072,1.3393-0.0893,1.25-0.625,1.7857-1.1607,1.5179-0.35714,1.6071,0.17857,1.6072,0.0893,0.89285,1.1607,1.0714,1.0714,0.625,1.1607-1.0714,0.625,0.44643,0,1.5179-0.0893,3.2143-0.44643,1.1607-1.3393-0.44643-1.875-0.17857-1.6072,0.17857-0.80357,0.89286-2.0536,0.0893-1.6071-0.35714-1.25-0.71429-1.0714-1.1607-1.6071-0.625-1.6964,0-0.44643,0.80357-0.17857,1.1607-1.0714,0.53571-1.4286,0.0893-0.80357-0.80358-0.17858-0.625,1.1607-2.4107,0.26786-1.9643-0.53572-1.6964-1.1607-1.5179-1.1607-1.5179-1.0714-0.89286,0.625-1.25,2.5-2.9464,1.1607-2.6786-0.71429-1.7857-1.6071-1.6071-1.6071-0.98215-0.53572-0.35714-0.625-1.875-0.80357-1.25-0.80357-0.80357,0.625-1.5179,2.5893-1.3393z",
          name: "Москва и Московская область"
        },
        rz: {
          path:
            "m144.55,265.59-1.9643,2.6786-2.1429,3.125-0.625,2.7679-0.80357,1.7857,0.17857,0.80357,1.6964,0.71429,1.9643,1.3393,0.44643,1.5179-0.26786,0.89286,1.4286,1.1607,1.9643,0,1.1607,0.71429,0.0893,1.875,0.44643,1.1607,1.25,0.44643,1.5179-0.625,1.9643,0,1.5179,0.98214,0.625,1.7857,1.0714,1.1607,2.6786-0.17857,3.125,0,2.9464-2.0536,3.0357-2.9464,1.5179-2.2321,1.0714-1.7857-0.98214-2.2321-0.53572-3.125-2.0536-2.0536-1.25-1.6964-0.44643-2.8571-0.53571-1.6072-0.35715-0.98214-2.1428-0.35714-3.4822,0.26786-0.625,0.80357-2.1428-0.17857-1.875-0.71429-1.875-1.0714-1.9643-0.89286-1.0714,0.35715-0.80357,1.4286-1.4286,0.89286-1.6071-0.44643z",
          name: "Рязанская область"
        },
        tb: {
          path:
            "m142.77,279.43-1.6964,2.1429-0.35714,1.7857-0.80358,0.89286-2.6786,0.98214-1.875,0.44643-1.5178,0.71429-0.71429,1.4286,0,2.1429,0.26786,2.3214-0.71429,1.875-1.5179,0.53571-0.44642,1.4286-0.44643,1.6964-0.625,1.1607,0.08928,0.625,2.3214,2.1429,2.2321,2.1429,1.6072,2.2321,1.4286,2.0536,0.98214,0,2.1429,0,1.9643-1.25,2.5-1.25,1.6964-1.0714,4.0179-0.26785,1.0714-0.98215v-3.6607c0-0.35714,0.0893-2.3214,0.0893-2.3214l1.5179-1.1607s0.71429-0.71429,0.80357-1.0714c0.0893-0.35714-0.26785-4.6429-0.26785-4.6429l1.4286-1.0714-0.80357-2.1428-1.7857-1.4286-2.3214,0.26786-0.89285,0.625-1.1607-0.80357-0.89286-1.3393v-1.3393l-1.875-0.80357h-1.3393l-0.89286-1.0714-0.26786-1.3393z",
          name: "Тамбовская область"
        },
        kn: {
          path:
            "m74.107,152.55,0,2.2322,0.53571,2.5,2.0536,5.1786,1.4286,3.4821,1.9643,3.6607,2.5,1.0714,3.75-0.44642,1.9643-1.3393,0.625-1.7857-0.44643-4.2857-0.89286-2.8571-1.5179-1.6071-2.4107-0.53572-0.98214-0.71428,0-3.0357-0.80357-1.4286-1.6964-1.6071-1.6071-0.26786-0.35714,1.25-0.625,1.3393-0.625,0.89285-1.4286-0.35714z",
          name: "Калининградская область"
        },
        ps: {
          path:
            "m125.268,213.98,0.35714-2.1428-0.26786-2.1429-1.4286-1.875-1.3393-1.4286-0.08929-1.6964,0.98214-0.71429,0.17857-1.6964-0.89286-0.98215-1.25-1.875,0-4.1964,1.5179-0.89285,3.75-2.2322,0.80357-2.4107,0.53572-1.7857,1.875-1.25,2.4107-0.0893,1.3393-1.6071,0.98214-1.6964s1.25-0.625,1.6072-0.80357c0.35714-0.17857,2.8571-0.71429,2.8571-0.71429l1.5179-0.0893,1.0714,0.53571-0.625,1.5179-0.71428,0.89285-0.17857,0.98215,1.6071,0.26785,1.25-1.7857,0.98214-2.0536,1.1607-1.5179,1.6071-0.71428h1.6071l1.5179-1.5179,1.1607-0.625h1.4286l0.98214,0.98214,0.625,1.5179,0.98214,1.6071-0.26786,1.6964-0.89285,0.98214-0.35715,1.3393-0.80357,1.6071-0.17857,1.1607h-1.4286-0.80357l-0.71429-0.53572-0.80357,0.53572-0.625,0.80357-0.53571,1.5178-0.53572,2.1429-0.0893,2.5-0.35715,1.875-1.1607,1.25-1.3393,0.98214h-1.7857l-1.5179,1.3393-0.53571,1.7857-1.3393,0.53572-0.44643,1.0714-0.17857,1.4286-1.7857,0.89286-1.7857,0.80357-0.625,1.6964,0.625,1.5178,0.625,0.625-0.26785,1.4286s-0.0893,0.44643-0.44643,0.80358c-0.35714,0.35714-1.1607,1.3393-1.1607,1.3393l-1.4286,0.80357-2.3214,0.89286-1.0714,0.0893-1.1607-0.89286-0.89286-0.89286z",
          name: "Псковская область"
        },
        no: {
          path:
            "m153.12,188.27,1.5179,1.25,2.1428,0.35714,2.1429,0.17857,1.25,1.1607,2.5,0.53571,2.3214-0.0893,1.0714-0.89286,0.44643,0.625,0.0893,1.7857,2.1429-0.53571,2.3214,0.0893,0.80357,0.80358,0.17857,2.5,0.17857,2.5,0.53572,1.0714,1.3393,0.17858,1.3393,0.44642,0.26785,2.1429,0.71429,1.6964,0.98214,0.80357,0.44643,2.9464,0.0893,2.2321,0.89285,1.4286-0.53571,0.98215-0.71429,0.53571,0,1.6071,0.17858,1.5179,1.4286,1.3393,0.625,0.53571,0.0893,1.9643,0,1.9643-0.17857,1.3393-1.25,0.53571-0.71428-0.26785-0.625-0.80358-0.71429-0.80357-0.17857-1.1607-0.98214-0.80357-0.80358-0.625-2.0536,0-1.5178-0.53572-0.53572-0.35714-1.5178-0.53571-0.71429-0.26786,0-0.44643s-0.26786-1.25-0.26786-1.6964c0-0.44643-0.0893-2.0536-0.0893-2.0536l-0.625-0.98214h-1.7857l-0.89285-0.44643-0.44643-0.98214-0.98215-0.625-0.53571,0.625-0.89286,1.0714-1.6964,1.4286h-2.1428c-0.35715,0-1.5179,0.0893-1.5179,0.0893l-0.71429-1.0714-1.0714-0.71428-2.3214-0.17857-2.6786-0.0893-1.5179-0.44643-1.3393-0.98214-2.3214-0.44643h-2.1428l-0.89286-1.1607-1.25-1.0714-0.53571-0.71429-1.1607-0.71428,0.98214-2.7679,0.71429-0.44643,1.1607-1.5179,1.0714-1.0714,2.0536-0.625,2.5-1.9643,0.625-1.9643,0.0893-3.5714,0.98214-2.5893,1.0714-1.25,1.1607,0.26786z",
          name: "Новгородская область"
        },
        tr: {
          path:
            "m128.661,216.66,3.2143-0.625,2.2321-1.6072,1.3393-1.6071,0.17857-1.4286-0.80357-1.4286-0.26786-1.3393,0.35714-0.89286,1.4286-0.89285,1.6964-0.625,1.1607,0.44643,1.5179,1.5178,1.0714,0.98215,0.98215,0.53571,1.6964,0.17857,2.4107,0.35714,1.3393,0.98215,1.3393,0.26785,3.2143,0.44643,1.5178,0,1.25,0.71429,0.80358,0.71428,1.875,0.35715,1.7857-0.17857,1.875-1.6072,1.25-1.25,0.71429,0.44643,0.625,0.80357,1.4286,0.44643,1.4286,0.17857,0.53571,1.5179,0.17857,2.4107,0.35715,0.80358,1.1607,0.71428,1.4286,0.80357,1.0714,0.26786,1.875,0.35714,0.98214,0.26786,1.25,1.0714,0.44643,1.3393,0.98214,1.0714,0.80358,0.53572,1.7857-0.35715,1.3393,0.0893,1.25,0.71429,1.6071,0.89285,0,1.5179-0.625,1.6964-1.25,1.6071-1.6071,0.44643-1.25,0.98214-1.5179,1.3393-0.89286,1.0714-0.44643,0.71428-0.26785,1.5179-0.44643,1.0714-1.25,1.4286-0.53572,1.4286-0.35714,2.0536-2.0536,1.9643-2.0536,1.3393-1.0714,0.17858-0.53571-0.71429-0.26786-1.7857-1.6964-0.71429-3.8393-0.89286-3.8393-1.6071-3.0357-0.80357-1.5178-1.0714-0.0893-3.0357-0.35714-1.6964-3.3036,0.80357-3.4822,0.26786-1.3393-0.89286-3.4821-4.4643-1.5179-2.0536-3.3036-0.625-2.7679-0.53571-1.4286-1.7857z",
          name: "Тверская область"
        },
        vm: {
          path:
            "m167.41,247.73,1.6072,1.7857,2.0536,1.25,1.1607,1.0714,1.3393,0.35714,0.80357,0.89286,0.0893,1.5178-0.89285,1.7857-0.35715,1.0714,1.25,0.625,1.7857,0.26785,1.0714,1.1607,0.17857,1.9643,0.98214,1.875,1.0714,1.25,1.3393,1.25,1.3393,1.3393,1.3393,1.1607,1.7857,1.875,0.89286,1.3393-0.17857,0.98214-0.89286,0.71429l-0.18,0.98,0.53571,0.71429,0.44643,0.71428,0.0893,1.6072-1.7857,0.53571-2.2321-0.0893-1.1607-1.0714-4.4643-0.0893h-5.1786l-1.7857,0.53571-0.71429-1.6964-1.6964-1.9643-1.6071-2.6786-0.80357-4.1964-0.0893-4.1071-0.17857-2.0536-0.44643-0.44643-0.71428,0.44643-1.1607,0.26785-1.4286-1.25-0.26786-2.5893,0.71429-2.0536,1.1607-2.0536,0.44643-1.7857,1.3393-1.0714z",
          name: "Владимирская область"
        },
        pz: {
          path:
            "m157.05,289.96,1.6964,1.7857,2.0536,1.5179,1.25,0.98214,1.6964,0.625,1.25,1.875,0.71429,1.6071,0.26785,1.9643,0.98215,0.98214,1.0714,1.0714,2.6786,0.17857,1.6964,0.0893,0.625,2.1429,0.89286,1.7857,1.6964,0.71429,2.1429,0.26785,1.4286,1.0714,0.625,1.0714-1.5179,0.89286-0.89286,0.98214,0.0893,4.1071-0.26786,3.4822-2.7679,1.25-1.0714-0.0893-0.89286,1.6071-1.9643,0.98215-1.1607-1.7857-0.98214-0.98214-5.9822-0.0893-1.1607-1.875-0.89286-0.89285-3.125-0.71429-0.98214-1.6071-1.25-1.6964-2.1429-0.71429-2.4107-1.3393-1.6071-1.0714-2.5,0.0893-0.71429-1.875,0.26786-2.5,1.1607-0.89285,3.8393-0.80357,0.89285-2.4107,0-3.4821,1.3393-1.6964,1.3393-1.6071-0.26786-2.5893,0-1.9643,1.1607-0.89286z",
          name: "Пензенская область"
        },
        sr: {
          path:
            "m137.23,308.27-0.17857,3.0357-0.26786,1.25-2.2321,1.1607,1.4286,1.6964,1.0714,3.2143,2.2321,0.71429,0.98215,0.80357,0.89285,1.0714,1.7857,0.625,2.5893,2.5,0.89286,1.0714,0,1.875-1.5179,2.0536-2.4107,2.8571-0.44643,1.25,0.44643,1.6964,0.71429,0.89286,2.1428,1.1607,4.0179,3.9286,1.7857,4.5536,1.25,1.4286,1.25,1.3393,0.26786,1.9643-0.71428,2.5-0.53572,2.4107,0.26786,1.7857,0.89286,1.0714,1.6071,0.44643,1.6964,0,1.6964-1.1607,1.25-1.0714,0.44642-2.6786,0.0893-1.875,2.2321-0.625,3.3036,1.25,1.6964,0.35714,1.6072,0,1.3393-1.5179,0.44643-0.53571,1.6071,0.35714,1.3393,1.0714,1.5178,0.89286,4.6429,0,1.1607-1.1607,1.3393,0.17857,0.89286,0.80358,1.6071-0.53572,0-1.7857-0.89286-1.9643-0.35714-1.3393-0.17857-3.9286-0.0893-2.0536-0.71428-1.25,0.0893-2.8571-0.35714-1.6071,0-2.5-0.80357-1.3393-1.1607-1.6071-2.5-1.0714-1.6072-2.0536-2.5893-0.0893-1.0714-0.35714-1.7857-1.6964-0.625-1.25-0.44642-0.89286-1.7857-2.4107-5.625-0.26786-0.53571-0.17857-1.9643-2.5893-3.125-0.89286-2.2321-2.9464-6.1607-3.3036-2.3214,0-1.0714-1.6964,0.44643-2.5-0.80357-0.35714-3.8393,2.1428-1.5179,0.35715z",
          name: "Саратовская область"
        },
        mr: {
          path:
            "m157.59,290.05,1.875,2.1429,2.6786,1.7857,1.7857,1.1607,1.7857,2.7679,0.44642,2.4107,2.0536,2.1429,2.5893,0.0893,1.6071,0.26786,0.89286,2.2321,0.71429,1.4286,2.0536,0.89286,1.7857,0.35714,1.25,0.625,0.53572,0.80358,5.8928,0.17857,2.6786-3.5714,0.35715-0.53572,0.71428-1.3393,0.0893-2.1429-0.0893-1.9643-1.7857-0.98215-0.35714-2.5-0.0893-0.80357-1.6964,0,0,0.17857-0.80357,0.89286-1.3393,0.80357-5.2678,0-2.5893-2.3214,0.17857-3.5714-1.1607-1.0714-0.17857-0.80358,1.0714-1.0714,0-1.6072-2.5893-0.53571-1.7857-0.0893-0.80357-1.25-0.71429-1.6964-1.25,1.1607-2.1429,2.3214-2.4107,1.5178-1.5179,0.98215-2.9464,0.26785z",
          name: "Республика Мордовия"
        },
        cu: {
          path:
            "m189.11,299.07,1.3393-0.89286,2.9464,0.44643,1.3393,0.44643,1.0714-1.3393,0.26786-1.7857,2.2321-1.1607,2.2321-2.2322,3.125,0.0893,2.6786,0,1.25,1.5179,0.35715,2.9464-0.17857,1.5179,0.35714,1.25,0.71428,1.1607-0.0893,0.71428-1.3393,0.625-4.1071-0.0893-1.3393,0.53571-0.80357,0.80357,0,0.89286,1.1607,0.71428-0.17857,0.89286-1.3393,1.1607-1.7857,1.25-2.1429,0.98214-1.3393,0.44643-1.3393-1.3393-2.5-0.44643-0.98215-0.625-0.98214-1.3393-0.80357-0.80357,0.80357-3.5714z",
          name: "Чувашская Республика"
        },
        ul: {
          path:
            "m188.57,305.32-1.875,2.6786-0.98215,1.4286-4.8214-0.26785-0.80358,0.26785-1.7857,1.4286-0.80357,1.1607,0,2.3214,0,2.5893,0,1.6964-1.7857,1.4286-1.0714,0.26786-0.89286,0-1.25,1.25-1.25,1.0714-0.625,0.26786,0.89286,1.9643,1.6071,1.6071,2.3214,0.44643,1.5178,0.17857,1.25,1.6072,1.5179,0.80357,2.1429,0.17857,0.89286-0.625,0.0893-1.875,0.17857-1.6964,1.0714-1.6964,0.35714-1.3393,1.3393-0.26786,0.80357,0.53571,1.3393,0.625,1.875-0.17857,1.3393-0.98214,1.0714,0.17857,1.6964,1.4286,2.0536,1.875,1.5179,1.6072,0.80357,1.4286,2.3214,0.17857,1.1607-1.5179,2.8572-2.0536,2.0536-1.1607,0.26785-2.3214,0-3.5714-1.875-1.1607-3.6607-0.0893-2.0536-1.4286-0.98214-1.1607-2.5-0.26785-0.98215-1.5179-3.0357-1.5179-0.80357-1.5179-0.625-2.0536z",
          name: "Ульяновская область"
        },
        ss: {
          path:
            "m180.98,329.96,1.3393,2.1428,0.71428,2.8572,0.44643,2.8571,0,2.1429,0.625,2.3214-0.0893,2.8571,0.35714,2.4107,0.53571,2.1429,0.625,1.9643,0.71429,0.98214,5.8929,0.0893,3.0357-1.6071,1.25-1.9643,1.9643-0.35715,1.6964-0.0893,2.1429-1.4286,1.4286-0.89286,1.25-0.17857,1.6072,0.625,1.7857-0.17857,0.80357-1.875,1.0714-2.3214,4.375-2.5893,1.7857-1.4286,1.1607-2.0536-0.625-1.5179-0.80357-1.7857-0.35715-2.5-1.1607-1.25-0.71429-2.4107-3.6607-0.26785-2.3214-1.6964-1.4286-0.80357-3.5714,2.3214-1.9643,2.2322-2.4107,0.0893-0.98214-0.98214-2.2321-2.4107-2.4107-1.875-1.0714-1.0714-0.89285,0.26785-1.6072,0.71429-1.6964-0.0893-1.5178-0.80357-1.0714,0-0.625,0.98215-0.53572,1.0714-0.80357,1.5179-0.17857,1.3393,0,0.98214-0.0893,0.71429z",
          name: "Самарская область"
        },
        ob: {
          path:
            "m185.89,352.82,0.53571,1.4286,0.71429,1.6071-1.0714,1.6072,1.0714,1.4286,3.0357,0.17857,1.9643-0.35714,2.5,0,0.17857,2.3214-0.89286,2.6786,0.35714,1.0714,3.5714,1.6071,2.1429,1.4286,0.17857,3.5714,0,4.1071,0,1.4286-1.25,0.89286,0,1.9643,0,0.71428,0.71429,1.0714,1.0714,0.89286,1.7857-2.5,0-1.4286,0.89286-0.89286,1.4286,0,1.0714,2.3214-0.17858,1.4286-0.71428,1.25-0.35714,1.4286l0.36,1.43,1.25,0.89286,2.3214,1.25,1.7857,0.89286h1.9643,2.5l1.4286-1.0714,1.6071,0.17857,1.9643,1.0714,0.89285,1.6071,0.35715,1.7857,1.0714,1.25h1.7857l0.89286-0.89285h1.25l1.6071,0.53571,1.25,1.4286,0.53571,2.6786-0.17857,3.5714,1.7857,1.6072,1.4286,0.89285,1.0714,1.6072,1.0714,0.53571,1.6071-0.71429,1.4286-0.17857,1.6071,1.4286v1.25l1.9643,1.7857,1.25,0.71428,2.1429,0.35715h2.6786l1.4286-0.17857,1.25-0.89286,1.25-1.0714,0.89286-0.89286-0.17858-1.25-2.3214-3.2143-1.0714-1.25v-3.75l-0.71429-2.1429-0.17857-2.1429,1.0714-2.3214,1.9643-1.4286-1.4286-1.7857-3.0357-2.8571-1.9643,0.35714-1.4286-0.17857-0.89286-1.25h-2.3214l-1.4286,1.25-1.0714,1.25-0.53572,1.0714h-2.5l-1.0714-2.5-3.2143-0.17858-2.8572-0.35714-0.89285-2.5-1.08,0.33-1.79,0.89h-1.4286l-0.17857-1.0714,1.4286-1.7857,2.5-2.5-0.53-1.78-0.71-0.36v-0.89286l2.5-1.9643,0.35715-1.0714v-2.1429h-1.7857l-2.1429,0.71429-1.6071,0.17857-1.4286-1.9643-0.53571-2.3214,1.25-1.7857,1.0714-0.89286v-1.6071l-0.35714-2.3214,1.0714-0.89285,0.17857-3.0357-1.25-1.9643-1.7857-1.7857-0.17857-1.6071,1.0714-2.8571,1.6072-2.5,0.89285-1.7857-0.53571-1.25-2.1429-1.6071-1.4286-2.1429-1.25-1.4286-1.6071,1.7857-1.4286,1.4286-4.1072,2.5-1.4286,1.9643-0.35714,1.9643-0.53571,0.35714-1.9643,0.17857-2.1429-0.35714-1.9643,0.53571-1.9643,1.4286-2.8571,0.53572-1.0714,0.71428-1.4286,1.7857-2.1429,1.25h-2.5z",
          name: "Оренбургская область"
        },
        nn: {
          path:
            "m186.25,271.57,4.2857-0.53571,2.5-1.4286,3.5714-0.71428,2.6786-1.0714,1.25-0.17857,2.3214,1.25,1.7857,1.0714,2.6786-0.17857,1.4286,0,2.6786-1.0714,1.25,0.17857,1.4286,1.9643,1.0714,2.1429,2.5,0.17857,2.5,1.7857,1.0714,1.25,0.89286,2.5,1.25,1.4286-0.17858,1.6071-1.25,0.89286-1.7857,0.17857-0.71429,0.89286-1.6071,0-0.71428-0.89286-1.7857-1.0714-1.6071,0.71429,0,1.6071-1.25,1.4286-1.25,0.53572-2.1429-0.89286-2.1429-1.6071-3.0357-0.89286-1.7857,0-1.0714,0.89286-0.71429,1.7857,0,2.8571-0.17857,2.8572,0.53571,1.0714-1.0714,1.4286-2.3214,1.4286-1.4286,0.89285,0,1.4286-0.35715,0.89285-0.89285,0.71429-2.8572-0.35714-1.0714-0.17858-0.89285,0-0.71429,0.53572-0.38692,0.34215-0.69448-0.12626-0.44194-0.50508-0.50508-3.0936-1.5784-0.12627-1.5784,1.4521-2.2097,0.44194-3.9775-0.25253-2.0834-2.0203,0.1894-3.3461-1.2627-1.389-0.0631-0.75761,1.0102-1.4521-0.0631-1.0733-3.7249-0.63135-1.1996-0.75761-1.0733-2.7148,1.1364-2.336-1.1996-3.3461,2.0203-0.50507,3.283-0.12627,5.9978,0.12627,1.2627,0.88388,2.0203,0.1894,2.0203-0.75761,0.12627-1.5152-0.94702-1.4521,0.63135-1.0733z",
          name: "Нижегородская область"
        },
        ml: {
          path:
            "m211.51,286.29,2.2728,2.336,2.4622,2.0834,2.7779,1.1364,2.9673,0.0631,2.4622,2.0834,1.5784,1.6415,0.44194,1.3258,0.63134,0.94702-0.3788,1.6415-0.56821,1.1364-0.0631,1.8309-1.5152,1.389-0.88388,0.56821-1.4521-0.12627-1.1996-1.5152-1.1996-0.44194-1.389-0.82075-1.7046-0.12627-0.50508,0.88389-1.7046,0.88388-2.5885,0.12627-1.9572-0.82075-1.1364-0.69448-0.88388-3.0305-0.37881-4.7351-1.1996-1.4521-4.0406-0.0631-1.3258-0.1894-0.63134-1.0733,0-2.0834,0.0631-3.0936,0.37881-1.8309,1.0102-1.0733,0.82075-0.63134,2.5885,0.3788,2.2728,0.88389,2.9673,1.7678z",
          name: "Республика Марий Эл"
        },
        ta: {
          path:
            "m190.93,308.14,0.0631,1.1364,0.44194,1.0733,0.88389,1.0102,1.5152,0.63134,1.8309,1.4521,1.5152,0.75762,1.389,0.44194,1.4521,1.0733,1.389,1.0102,2.4622,0.44194,1.4521,0.0631,1.7046,0.88388,0.12627,2.2097-0.37881,2.9042,0.44195,1.4521,2.0834,1.1996,1.0733,0.75761,2.9042,0.18941,0.82075,0.69448,0.56821,1.7046,1.3258,2.1466,0.63134,2.5885,0.88389,1.7678,1.6415,1.894,1.389,2.2728,1.6415,1.1364,0.88388,0.88388,1.1996,0.0631,2.9042-1.8309,2.9042-2.7148,0.44194-0.63135,0-1.894-1.0102-1.0102-0.0631-0.88388,1.8309-0.25254,1.2627,0.31567,0.75762,0.56822,1.3258,0.3788,1.6415-0.31567,1.1996-0.69448,2.9042-0.12627,1.5152-0.37881,0-0.94701-0.37881-1.2627-1.1996-1.5784-0.63134-1.2627-1.5152-0.44194-0.88389-1.2627s1.2627-1.0102,1.5784-1.1364c0.31567-0.12627,2.2728-0.75762,2.2728-0.75762l0.0631-1.4521s-1.1364-0.18941-1.389-0.50508c-0.25254-0.31567-0.69448-0.94702-0.69448-0.94702l2.0203-1.3258,2.0203-1.389,0.12626-1.1364-0.69447-0.82075h-1.5152l-0.69448,0.0631-1.1364,1.3258-0.56821,0.69448h-1.894l-0.12627,0.88388-0.12627,1.3258-0.82075,1.1364-1.5152-0.12627-0.75761-1.4521-1.1364-0.94702-0.82075,1.0102-1.7678-0.31567-0.56821-2.2728-1.4521-0.88388-0.63135-1.2627,0.12627-1.3258-1.1364-1.3258,0.0631-2.6516,0.12627-3.0936,0.63135-0.94702-0.25254-1.0102-0.69448-1.0733-0.56821-0.56821-1.0102,0.44194-0.88388,0.37881-1.0102-0.12627-1.0733-0.88389-0.88388-0.82074-1.8309-0.69448-1.4521-0.44195-0.94702,0.94702-1.8309,0.75762-1.8309,0.1894-1.6415-0.31567-1.9572-1.0733-1.389,0.50508h-2.7148l-2.0834,0.0631-1.389,1.1364-0.0631,0.88389,0.69448,0.50507,0.12627,0.82075-0.82075,1.0733-1.5152,1.2627-2.6516,1.0733-1.5784,0.69448-1.1364-0.75762-2.0834-0.82075z",
          name: "Республика Татарстан"
        },
        iv: {
          path:
            "m174.26,252.7,2.0203-1.1364s0.94702-0.50507,1.1996-0.50507c0.25254,0,2.5885,0.31567,2.5885,0.31567l2.7148,1.1364,2.3991,1.1364,1.2627,1.1996s1.4521,1.0102,1.7046,1.1996c0.25254,0.18941,1.4521,1.2627,1.4521,1.2627l1.7046,0.63135,1.1364-0.88388h0.88388l0.50508,0.82074,0.1894,1.1996,1.0102,0.75762,1.5152,0.82074,1.0102,0.63135,0.44194,1.0102-0.69448,1.0733-0.12626,0.88388,0.75761,0.37881,0.88388-0.56821,1.389,0.63134,0.69448,0.94702,0.25254,1.2627-0.25254,0.50508-1.894,0.69448-2.9673,0.82075-3.0936,0.50507-2.3991,1.5152-3.4724,0.50508-0.94702-0.12627-1.7678-2.3991-3.5987-3.4724-2.7148-3.3461-0.82075-2.7779-0.88388-1.0102-2.1466-0.44195-0.69448-0.56821,0.50507-1.4521,0.56821-1.3258z",
          name: "Ивановская область"
        },
        yr: {
          path:
            "m184.11,228.33,1.7678,1.5784,1.9572,0.50507,1.7678,0.50508,1.3258,1.6415,1.9572,1.5784,1.5784,0.0631,1.0733-0.69448,0.82075,0.31568,0.3788,1.4521,0.12627,3.4093-0.0631,2.6516,0.25254,1.5152,0.88388,1.0102,0.56821,0.94702-0.37881,1.0733-1.7046,1.1364-2.7148,1.3258-3.283,2.2097-1.6415,1.0733-3.3461,0.88388-2.4622-0.1894-2.1466-0.63135-2.6516-0.69448-2.1466,0.63135-1.8309,1.0733-1.7046-0.88388-1.4521-1.0102-1.894-1.1364-1.1364-1.1996-0.25254-1.3258,0.56821-1.4521,2.0203-0.88388,2.2097-1.1996,1.6415-2.7779,1.0102-2.9673,1.1996-1.2627,0.75762-2.4622,1.6415-1.8309,1.9572-1.8309,2.7148-1.5152z",
          name: "Ярославская область"
        },
        kt: {
          path:
            "m198.7,245,1.389,0.12627,1.2627-0.75762,1.5152-1.389,1.894-0.75762,1.894,1.1364,1.894,1.5152,2.5254,0.12627,0.63135-0.75761,0.75761,0.50507,1.2627,2.1466,2.2728,2.2728,1.5152,1.5152,1.1364,1.894,0.3788,2.2728,1.2627,1.7678,1.5152,1.6415,2.5254,1.389,1.7678,1.5152,1.7678,1.894,2.0203,0.88388,1.894,0.12627,2.0203-2.0203,1.6415-0.3788,0.63135,1.894,1.1364,1.0102-0.12627,1.6415-1.6415,1.5152-0.12627,1.894-0.3788,2.5254s-1.7678,0.75761-2.3991,0.75761c-0.63134,0-6.3134-0.12626-6.3134-0.12626l-3.1567,0.12626-1.1364,1.1364-1.2627,0.50507-2.0203-0.75761-1.5152-0.75762-2.0203-0.3788-1.0102-1.5152-0.88388-1.6415-0.75762-0.63135-1.1364-0.12627-0.88388,0.50508-2.1466,0.75762-3.283-0.25254-1.7678-0.50508-2.0203-1.2627-0.50508-0.50508,0.25254-0.63134v-1.1364l-1.389-1.2627-0.88389-0.50508-0.63134,0.37881-0.38556,0.10695-0.53571-0.35714,0.0893-0.89286,0.71429-0.625,0.0893-0.98214-0.89285-0.71429-1.7857-1.0714-0.98214-0.98215-0.26786-0.98214-0.71428-0.89286h-0.98215l-0.89285,0.625-0.625,0.0893-1.25-0.71429-1.4286-0.80357-1.3393-1.25-1.7857-1.3393-0.69-0.57,1.07-0.71,2.05-0.54,2.3214-0.71428,2.8571-2.0536,3.3036-1.6964z",
          name: "Костромская область"
        },
        le: {
          path:
            "m153.49,177.57,1.7678-1.6415,1.5152,0,2.2728-1.894,2.5254-0.50507,2.2728,0.63134,2.9042,2.1466,2.7779,1.5152,0.75761,2.5254,0.12627,1.389,1.0102,1.1364,1.1364-0.37881,0.75761-2.0203-0.12627-2.3991-0.88388-1.6415-0.88388-1.894,0.12626-2.0203,1.1364-1.2627-0.25254-1.894-0.75762-1.0102,0-0.37881,1.2627-0.25254,3.283,0.25254,3.5355,1.2627,2.2728,0.12627,1.894,0.12627,1.2627,1.1364,0.63135,1.2627,0,1.7678-0.37881,1.6415-0.25254,2.1466-0.63134,1.7678-2.1466,1.2627-0.75761,1.0102-1.0102,1.894-1.0102,1.1364-1.7678,1.1364-0.63135,1.2627,0.25254,1.1364,1.389,0.75762,2.1466,0.25253,1.0102,0.88389,0.25254,1.6415,1.0102,0.75762,2.1466,0.12627,1.1364-0.50508,3.4093-0.25254,1.7678-0.63134,2.0203-0.25254,1.5152,0.75761,1.0102,1.6415,1.1364-1.2627,1.389-1.7678,0.75762,0.88388,0.50507,2.0203,0.63135,2.2728,2.1466,0.50507,1.2627,0.75762,1.1364,1.0102,0.12626,1.2627,0.12627,1.6415-0.12627,1.7678-1.2627,0.75761-2.2728-0.25254-1.389-0.88388-1.389-0.25254-0.75761,0.88388-1.5152,1.0102-3.0305,0-1.5152,0.3788-2.7779,3.0305-1.0102,1.389-0.37881,2.1466-1.6415,1.0102-1.1364,0.12627-0.3788,1.2627-1.2627,0.63134-0.63135-1.0102-1.1364-1.1364-2.2728-0.12627-0.75761,0-1.1364-3.0305,0-2.9042-1.0102-1.5152-0.88389-1.894-0.12627-1.6415-2.2728-0.88388-0.88388-0.63135s-0.37881-1.0102-0.37881-1.5152c0-0.50507-0.25254-3.4093-0.25254-3.4093l-0.75761-1.1364-2.3991-0.25254-1.389,0.75761-0.75762-0.50507-0.12627-1.2627-0.63134-0.88389-1.0102,0.63135-2.1466,0.3788-2.7779-0.88388-1.5152-0.88388-3.283-0.37881-1.2627-0.88388-1.0102-0.75762,0.63135-1.2627,0.88388-2.1466,0.88388-1.389,0.12627-1.2627z",
          name: "Санкт-Петербург и Ленинградская область"
        },
        ki: {
          path:
            "m237.59,265.33,1.2627-0.88388,0.12627-2.0203,0-2.0203-1.0102-1.389-0.12627-1.6415,1.5152-0.37881,3.9143,0.25254,2.5254-0.88388,2.6516-1.1364,0.63134-1.389,1.1364-0.63134,2.7779,0.25254,1.389,1.7678,0.12627,2.7779-0.63134,3.0305-1.0102,1.389-0.75761,2.7779-1.894,0.75762-2.0203,0.12626-1.6415,1.7678-0.63134,1.6415-1.0102,0.63134-0.75761,0.88389,0.75761,1.389,1.6415,0.88388,1.0102,1.389-1.6415,1.894,0.12626,1.894,1.1364,0.88389,1.2627,0.50507,0.88388-1.389,0.88388-1.894,2.7779,0,3.1567,0.3788,4.2932,1.2627,1.7678,2.2728,2.1466-0.12627,2.1466-1.6415,1.6415,0.37881,1.2627,1.0102,0.75762,1.894s1.0102,1.5152,1.389,1.7678c0.3788,0.25254,2.5254,1.894,2.5254,1.894l0.25254,1.5152-0.88389,2.0203-2.0203,1.1364-3.5355,0.25253-1.2627,0.63135-1.2627,1.5152-0.25254,1.389,1.0102,1.389,0.12627,1.1364-1.5152,1.1364-0.75762,1.389-0.12627,2.1466-1.2627,1.0102-2.7779,0.12627-1.1364-1.2627-1.0102-2.5254-2.0203-0.12627-1.389-0.3788v-1.894l-2.0203-1.1364-3.1567,0.75761-1.7678,1.389s-1.2627,1.0102-1.2627,1.5152c0,0.50508-0.3788,2.2728-0.50507,2.7779-0.12627,0.50508-1.6415,1.5152-1.6415,1.5152l-2.5254,1.1364-1.894-0.50507-1.2627-1.389-1.5152,0.25253s-0.75761,0.50508-1.0102,1.389c-0.25254,0.88389-0.12627,2.7779-0.12627,2.7779l0.12627,1.894-2.0203,0.63135-3.4093,0.3788-0.25254,1.1364v1.389l-0.3788,1.389-1.7678,0.88389h-0.63135l-0.63134-1.5152-0.50508-0.37881,0.12627-2.5254,0.25254-2.5254,0.50508-1.5152-0.88389-1.6415-0.25254-1.2627,0.75762-2.9042,0.63134-2.5254-1.0102-1.5152-1.6415-2.5254-2.1466-1.5152-0.88388-0.63134-3.9144-0.12627-1.7678-1.2627-1.6415-1.5152-1.6415-1.5152-0.50507-0.50508,0.50507-1.0102,1.2627-1.6415,0.25254-1.0102,1.1364-0.75761,1.5152,0.50507,1.894,1.389,1.389-0.75761,2.1466-0.63135,1.389-1.2627v-1.5152l-1.2627-1.894-0.63135-1.5152s-0.78918-1.1049-0.85231-1.2627c-0.0631-0.15784,0.56821-0.69448,0.56821-0.69448l0.97858-0.63135,0.75762-0.75761s2.2728-0.0316,2.8095-0.0316c0.53664,0,3.1567,0.0631,3.8828,0.0631,0.72605,0,3.7881-0.44194,3.7881-0.44194l1.4521-0.59978s0.12626-1.5784,0.15783-1.7993c0.0316-0.22097,0.47351-2.4938,0.47351-2.4938l2.0203-2.3991z",
          name: "Кировская область"
        },
        bs: {
          path:
            "m241.5,329.86,2.3991-1.6415,2.5254-1.6415,1.5152-0.25254,1.894,2.6516,2.2728,2.2728,2.9042,0,2.6516,2.5254,1.7678,2.5254,1.1364,1.7678,1.7678,0,1.2627,2.1466,2.6517,2.3991,2.2728,1.6415,2.0203,1.7678,1.2627,1.1364,0.88389,1.389-0.37881,1.1364-1.6415,0.63134-0.88388,1.2627,0.25254,1.389,1.389,0.63135-0.63135,1.2627-1.5152,0.50508-1.2627-0.75762-2.3991,0.37881,0,1.0102-1.5152-0.25254-0.50508-0.88388-1.5152-1.0102-4.5457,0-1.1364-0.37881,0-1.2627,1.7678-1.2627,0.12627-1.389-1.0102-0.88389-1.6415-1.1364-2.5254,0.25254-1.0102,2.1466-1.7678,2.6516-0.88388,2.0203,0.50508,3.0305,1.894,1.0102,2.0203-0.75761,1.6415,0.75761,1.0102,2.0203,2.5254,0.12627,2.0203,0.75761,2.7779,0,1.7678-0.50508,1.5152,1.1364-0.63135,1.389-1.894,1.5152-1.2627,1.1364-1.0102,1.389-1.2627,0-1.2627-0.63134-2.1466-0.75762-1.6415-0.3788-1.6415,1.2627-0.3788,1.5152-0.63135,1.389-2.3991,2.6516-1.6415,2.3991-3.9143,3.6618-1.894,1.5152-0.25254,2.0203-0.63134,1.5152-2.9042-0.25254-1.6415,1.7678-1.2627,1.389-0.50507,0.63135-2.0203,0-1.1364-2.0203-0.50508-0.63134-5.4296-0.63135-1.389-2.1466-2.7779,0.88388-1.2627-0.12627,0-0.50507,3.4093-4.4194,0-1.6415-0.88389-0.63134,0-1.1364,1.7678-1.1364,1.0102-1.389,0-2.0203-0.25253-0.50508-1.894-0.12627-2.2728,1.2627-1.7678-1.1364-1.1364-2.3991,1.2627-2.3991,1.0102-1.894-0.25254-2.5254,0-0.75761,0.88389-1.5152,0-3.1567-2.5254-2.9042-0.12627-2.0203,1.0102-2.6516,2.0203-4.1669,2.9042-2.1466,3.9143-3.1567,1.0102-2.1466-0.88389-1.389-0.12627-0.12627,0-0.75761,1.389-0.25254,2.3991,0.75762,1.389,0.12626,1.7678-0.63134,2.6516-0.25254,1.7678-0.12627,0.88388-0.63134,0-1.7678z",
          name: "Республика Башкортостан"
        },
        cl: {
          path:
            "m272.18,347.66,1.7678-0.88388,2.7779,0.50507,2.3991,2.1466,2.3991,1.7678,3.0305,1.894,2.9042,0,1.5152,1.6415,1.6415,2.3991,0.75761,1.894-0.63135,3.1567,0,2.7779-0.88388,1.389-1.7678,0.63135-1.6415,1.1364-0.75762,1.2627-2.0203,0.63135-1.894,1.5152,0,1.1364,1.5152,1.5152,2.0203,2.0203,1.1364,2.3991-0.37881,2.7779-0.75762,1.7678-2.3991-0.63135-2.6516-0.50507-3.283-0.37881-2.0203-0.50508-1.5152-1.7678-2.0203-1.7678-1.1364-1.1364-1.1364,0.50508-1.5152,1.1364-0.88388,1.0102,0,1.894,1.6415,1.2627-0.37881,0.75761-2.2728,0.63135v1.0102c0,0.50508,0.75761,2.0203,0.75761,2.0203l2.0203,1.7678,0.12627,1.894-1.5152,0.63134-1.5152-1.5152-1.389-1.2627-2.2728-0.63134-3.283,0.12627-1.5152,0.25253-0.63134,1.2627,1.0102,1.389-0.37881,1.894-1.0102,1.6415-4.5457,0.25254-1.6415-0.88389-1.6415-0.63134,0.50507-2.0203,1.6415-0.88388-0.75761-1.7678-2.0203-2.3991-1.6415-1.0102-1.894,0.12627-1.389-0.63135,0.63134-2.7779,1.7678-2.6516,4.4194-4.1669,3.7881-4.672,1.2627-2.9042,1.389-0.88389,2.5254,0.25254,2.0203,1.0102h2.0203l1.894-2.2728,2.2728-1.894,0.50508-1.389-1.5152-1.2627-2.1466,0.50507h-3.0304l-2.7779-0.88388h-1.5152l-0.88388-1.894-1.389-0.50507-1.7678,0.63134-1.0102-0.37881-0.88389-0.63134-0.63134-1.894-0.12627-1.6415,3.6618-5.6821,0.75762-0.63135,1.7678,0.37881,1.7678,0.88388,0.63134,1.1364-0.3788,0.75762-1.2627,1.1364v1.1364l-0.12627,0.12627,0.75761,0.63135,2.6516,0.12627h2.2728l1.5152,1.0102,1.2627,1.1364,1.1364-0.63135,0.50507-0.75761,2.0203,0.12627,1.7678,0.37881,1.1364-1.2627-0.37881-1.0102-0.75761-0.88388,0.25253-1.5152,1.5152-1.0102,0.63135-1.1364z",
          name: "Челябинская область"
        },
        ud: {
          path:
            "m261.7,302.33-0.12627,1.389-2.0203,2.7779-1.5152,1.389,0.12626,1.389-1.6415,1.0102-1.1364,1.5152-1.5152,2.3991-0.50508,1.894-0.50508,3.1567-2.0203,1.0102-2.2728,0.12627-0.63135,1.1364-0.37881,3.0304-0.12627,1.389-3.0304,2.0203-2.2728,1.389-1.0102,0-1.2627-1.5152-1.7678-0.75762-0.63134-1.2627,1.389-1.1364,2.0203-0.75761,0.50508-1.1364-0.37881-0.50508-1.5152-0.88388,0.25254-0.88389,2.7779-1.7678,1.0102-1.1364-0.50507-1.0102-0.75762-0.63134-2.0203,0.63134-1.1364,1.389-1.5152,0.63135-1.0102,0.25253-0.3788,1.5152-0.63135,0.75762-0.88388,0.25254-0.75762-1.0102-1.389-1.2627-0.75761,0.37881-1.2627,0.37881-0.88388-0.88389-0.63135-1.1364-1.0102-1.0102-0.63135-1.0102,0-1.1364,1.6415-0.88389,1.1364-1.1364,0.25254-2.0203,0.25254-1.0102,3.1567-0.50507,1.6415-0.50508,0.37881-4.4194s0-1.2627,0.63135-1.5152c0.63134-0.25253,1.2627-0.3788,1.2627-0.3788l1.2627,0.63134s1.6415,1.894,2.3991,1.389c0.75761-0.50507,1.894-0.88388,1.894-0.88388s2.3991-1.0102,2.2728-1.6415c-0.12627-0.63134,0.25254-1.6415,0.25254-1.6415l0.3788-1.389,2.1466-2.2728,1.2627-0.75761,2.2728-0.50508,1.6415,0.37881,0.88388,1.1364v0.75761l0.25254,0.63135,1.0102,0.12627,1.6415,0.3788,0.63135,0.50508,0.63134,1.6415,0.75762,0.75761z",
          name: "Удмуртская Республика"
        },
        pe: {
          path:
            "M272.06,274.03l-2.28,1.16,0.5,1.5-0.5,3.53,0.5,1.28,1.41,2.41,2.25,1.62,0.65,1.66-1.4,2.12-2.41,1.03-2.87,0.63-1.66,0.87-1.13,1.54,0.5,1.24,0.63,1.38-0.13,1.03-1.9,1.63-0.38,2.4-0.87,1.6-0.13-0.19-1,0.12-1.28,2.5-2,2.29-0.15,1.53-0.88,0.87-2,2.03-1.91,3.41-0.62,3.9-1.28,0.88-2.25,0.38-1.28,0.78-0.63,4.9,2.53,2.66,2.13,2.28,2.53,0.25,2.28,1.5,3.41,4.94,1,0.37,1.28-0.12,1.12-1.25,0.88-1.28,1.03-1.75,1.25-1.66,1.28,0.88,1.5,1.28h2.41l2.03-0.91,0.5-1.75,0.25-1.91,0.87-0.75,0.88-1,0.78-0.5,2.5,2.75h3.69l0.87-1,0.5-1.5,0.25-1.65,0.88-1.25,4.69-0.38,2.15-0.78,0.63-1.5-0.63-0.62-0.12-1.41,1.12-1.38,0.75-1.03v-1.37l-0.5-0.88-0.62-1.03,0.25-1.75,1-1.53,2.03-1.5,3.15-0.5,1.88-1.91,2.28-1.62,2.28-1.66,2.28-1.65,0.88-0.75,0.5-1.25,1-1.78s0.9-1.12,1.53-1.75c0.63-0.64,1.62-1.91,1.62-1.91l1.16-1.37,0.25-1.66-2.41-0.38-2.65-0.75-2.66-1.65-2.75-1.38-2.66-1.28-2.53,0.66-3.15,0.12-3.66-0.9-2.9-1.63-1.63,0.85-0.41-0.22-1.9-1.25-1.38-2.03-1.12-1.13-2.28-0.78-0.13-1.63-1.12-1.28-1.41-1.5-1.91-0.5-2.62-0.25-2.41-0.78z",
          name: "Пермская область"
        },
        sv: {
          path:
            "m316.13,291.72,1.7678-1.1364,1.1364,1.389,0.88388,2.3991,2.6516,1.5152,2.9042,2.1466,1.2627,2.3991,2.2728,2.7779,0.12627,1.7678,0.63135,2.0203,0.75761,1.5152-0.63134,1.7678-1.894,1.894-0.63135,1.7678-0.25253,4.7982,0.3788,2.7779,0.63135,1.0102-1.0102,2.9042-1.5152,1.7678-0.37881,2.3991,2.0203,1.2627,2.3991,2.0203,0.75761,2.0203,0.12627,2.6516-0.63134,1.6415,0,2.9042,0.75761,2.3991-0.25254,1.894s-0.88388,0.88388-0.88388,1.389c0,0.50508-0.50508,2.7779-0.50508,2.7779l-1.2627,1.2627-2.0203,0.12627-1.1364,0.88388h-3.0304l-1.5152-0.88388-2.1466,0.25254-1.389,1.1364-0.88388,1.389-0.25254,2.9042-0.75761,1.1364-1.1364,1.0102-1.7678,0.50508-3.0305,0.25254-2.0203,0.25254-1.0102,0.88388-1.894-0.37881-1.389-1.1364-1.894-1.894-2.5254-1.6415-1.5152-0.63135-2.2728,0.37881-1.894,0.3788-1.389-0.12626-1.6415-1.389-1.894-2.2728h-2.2728c-0.50508,0-1.6415-0.75761-1.6415-0.75761l-4.672-3.1567-1.6415-1.7678-2.9042-0.3788-1.389,0.12627-0.88389,0.12627-1.2627-1.2627-3.9143-3.283-3.1567-3.0305-0.50507-1.389,2.0203-2.9042,1.389-2.7779,0.75762-0.25253,1.6415,1.1364,1.1364,0.75761h2.7779l1.5152-1.389,0.50507-1.7678,0.12627-1.7678,2.5254-1.7678,1.7678,2.0203,1.2627,0.63134h2.3991l1.6415-1.1364,0.75761-2.0203,0.50508-1.894,3.7881-0.75762,2.5254-0.3788,1.389-1.2627v-1.0102l-0.88388-1.389,1.7678-2.1466,0.25254-1.1364v-1.389l-1.0102-1.6415,1.0102-2.5254,2.1466-1.6415,3.283-0.88388,1.1364-0.75762,8.0812-6.1872,0.88388-1.6415,1.6415-2.7779,2.1466-2.5254z",
          name: "Свердловская область"
        },
        ku: {
          path:
            "m285.69,383.01,2.3991,1.894,3.283,0.88388,4.2932,1.2627,3.1567,0.75762,4.1669-0.50508,2.5254,0.25254,2.9042,1.0102,3.5355,1.1364,3.5355,0.88388,3.283,1.0102,3.4093-0.12627,2.3991-1.2627,3.6618,0,1.0102-1.5152,0-1.894-1.5152-2.1466-1.389-2.7779s-1.5152-0.12627-2.1466-0.37881c-0.63135-0.25254-2.2728-1.6415-2.2728-1.6415l-0.75761-3.1567-1.389-1.7678-2.6516-1.2627-1.5152-1.6415-1.2627-2.2728-1.6415-1.5152-1.389-1.2627-1.0102-1.389,0.50508-2.3991,1.389-1.2627,1.1364-1.894-2.5254,0.37881-3.0305,0.12627-1.389,0.50507-0.75762,0.50508-1.2627-0.37881-2.0203-1.0102-1.7678-1.7678-2.0203-1.389-1.7678-0.75761h-1.2627l-3.0305,0.63134-1.7678-0.12627v1.1364l0.63135,0.88388-0.50508,2.2728v2.2728l-0.25253,2.1466-0.88389,1.1364-2.5254,1.1364-1.389,1.1364-1.5152,1.2627-1.7678,0.88388-0.50507,1.2627,0.63134,1.1364,1.894,1.894,1.389,1.389,0.63134,1.7678v1.894l-0.50507,1.7678z",
          name: "Курганская область"
        },
        ko: {
          path:
            "m254.63,259.27,2.1466-0.63134,0.63134-0.88388,1.894,0.12627,1.6415,1.894,2.1466,0.25254,2.1466-0.50508,1.5152-1.894,0.50508-1.5152-0.63135-0.88389,0.63135-1.5152,2.1466-1.2627,4.5457-1.894,2.6516-1.1364,0.25254-1.5152-0.50508-2.5254-2.1466-0.88389-3.283,0.12627-2.3991,1.6415-2.3991-0.75761s-0.50508-1.0102-1.2627-1.0102-1.5152-0.25253-1.5152-0.25253l0.50507-3.0305,1.7678-0.37881,1.389-1.5152,0.50508-1.894,2.1466-0.50508,2.2728,0.12627,0.63135-1.7678-0.63135-0.63134-0.63134-2.1466,0.63134-1.389,4.5457-2.0203v-1.2627l-1.0102-2.5254-0.63135-1.6415-1.6415-1.7678-0.63134-1.1364,0.25254-1.6415,1.2627-0.63134,1.7678,0.75761,1.5152,2.1466,1.6415,1.5152,2.2728,1.894,2.6516,1.2627,1.7678,1.1364,0.50508,1.7678,1.5152,1.5152,3.1567,0.3788,1.894,1.2627,2.9042,0.50507,0.88388,1.2627h2.0203l1.0102-0.63134-0.25254-1.5152-0.75761-1.5152,0.50507-1.0102,0.88389-1.5152s0.25253-1.1364-0.12627-1.6415c-0.37881-0.50508-1.1364-1.1364-1.1364-1.1364v-0.88388l2.7779-3.283,3.1567-2.1466,1.894-2.0203,1.0102-0.88388,2.3991,0.63134,3.4093,0.12627,2.5254,0.75762,4.2932,0.50507,2.1466,0.63135,3.283,0.12627,2.3991-0.50508,1.5152,0.12627,0.12627,1.894,1.2627,1.0102,2.1466,2.1466,5.3033,4.672,7.4499,4.672,6.4397,3.7881,5.177,3.0305,5.5558,3.283,2.7779,1.894,2.2728,0.25254h3.283l2.1466-1.0102,2.5254-2.3991,1.6415-1.2627,2.7779,0.25253,2.3991-0.12626,2.0203-0.63135,1.5152-0.88388,1.6415-0.37881,3.1567,0.12627,1.6415,0.25254-0.50508,1.5152-0.88388,1.1364-1.1364,0.63134-0.50508,1.894,1.2627,1.7678,1.2627,1.389,0.12627,1.894-1.1364,1.389-0.88388,0.25254-0.75762,1.389-2.0203,0.25254-2.3991-0.12627-2.1466,0.88388-2.5254,1.389-1.389,1.1364-3.0305-0.12627-2.1466-0.50507h-3.1567-2.0203l-1.0102,0.3788-1.389,1.5152-0.75762,0.88389-2.1466,1.6415-1.5152,0.50508h-2.3991l-2.3991-0.25254-1.5152,0.50508-2.9042,2.0203-2.2728,1.2627-1.5152,1.0102-1.5152,0.3788-1.2627-0.12626-1.2627-1.0102-0.12626-1.894-0.63135-1.389-1.6415,0.88388-1.5152,1.389-1.0102,1.2627-0.88388,0.50508-1.2627,0.50507-0.75762,0.37881-0.12627,1.7678-0.3788,1.7678-0.63135,1.389-0.88388,1.1364-1.0102,1.6415-1.894,1.6415-1.6415,1.389-1.2627,0.75762-2.7779,3.283-1.894,2.6516-1.1364,3.0305-0.50507,1.6415-1.5152,1.6415-2.0203,0.88388-1.5152,0.63134-1.7678,1.0102h-2.2728l-3.1567-1.0102-3.1567-1.6415-4.4194-2.1466-0.75761-0.3788-2.5254,0.50507h-3.283l-3.0305-0.88388-2.9042-1.389-1.0102,0.25254-1.6415-0.12627-1.5152-1.2627-2.2728-2.3991-1.894-0.88388-0.63135-1.5152-2.2728-3.0305-5.8084-1.1364-1.389-0.63134-1.7678,0.63134-0.75761,0.75762v0.75761l0.37881,0.88389v1.6415,1.0102l-0.50508,0.3788-1.389-0.63134-0.88388-0.37881-1.1364,0.25254-1.5152,0.88388-1.5152,0.50508-1.1364-0.25254-0.88389-1.389-0.88388-0.63135-2.2728-0.88388-6.0609-1.1364-1.2627,0.25254-1.1364,1.1364-0.63135,1.5152-1.1364,0.37881-1.6415-1.389v-1.1364l1.0102-1.389,0.50507-0.75761-0.50507-1.0102-1.1364-1.0102-1.1364-1.0102-0.3788-0.75761,1.5152-1.2627,1.1364-2.5254,1.6415-1.0102,1.6415-0.3788,1.894-1.2627,0.88388-2.3991,1.2627-1.2627z",
          name: "Республика Коми"
        },
        mu: {
          path:
            "m247.31,136.92,1.1364-1.5152,1.5152-0.75761,2.9042,0,4.2932,0.12626,2.1466-0.50507,2.5254-1.6415,0.88388-2.0203,0.12627-3.5355,1.5152-3.4093,1.0102-1.0102,4.7982,0,2.3991-0.63134,1.0102-1.2627,1.7678-0.12627,2.3991,1.0102,3.0305,1.894,2.2728,1.894,2.6516,0,2.2728-0.25253,0.25254,2.3991,1.894,0.3788,1.7678,1.0102,0,2.2728,0,1.7678-1.0102,0.63134-1.5152-0.3788-0.75761-1.1364-0.25254-0.63134-0.88388,1.0102-0.25254,0.63135,0.50508,1.1364,1.1364,0.88388,0.50507,0.75762-0.3788,1.0102-1.0102,0.63134,0,0.75762,1.1364,1.2627,0.88388,1.5152,0.88388,1.7678,2.0203,2.1466,0.75761,1.7678,0,1.7678,0,1.1364-0.50507,1.1364-0.25254,2.0203-0.12627,5.5558,0,5.5558-0.75762,1.389-0.25253,1.894,0.63134,0.88389,0.63135,1.0102-0.12627,4.0406,0,3.5355-0.63135,1.389-1.7678,1.1364-0.88389,0.88388,0,1.0102-0.25254,0.88389-1.1364,0.88388-2.7779,0.75761-3.6618,0.12627-3.1567,0.50508-1.6415,0.37881-2.5254-0.50508-2.0203-0.75761-1.894-1.389-1.894-2.2728-1.7678-2.2728-1.1364-1.894-0.63135-2.2728-0.3788-2.3991-1.2627-2.6516-1.1364-2.0203-0.3788-1.6415-0.37881-3.9143,0-1.7678,0-1.389-0.88388-0.88389-0.12627-2.9042,0-2.1466,0.75761-1.5152,0.12627-1.1364,0-1.5152-0.88388,0-0.63135,0.88388-0.88388,1.389-0.75762,1.894-0.25253,0.63135-3.5355,0-2.6516-0.25254-0.75761-1.5152,1.389-2.0203,1.1364-0.75761,0.25254-1.0102-1.7678-2.2728-1.5152-1.7678-1.2627-2.7779-1.2627-1.2627z",
          name: "Мурманская область"
        },
        kl: {
          path:
            "M246.94,136.91l-2.28,1.53,0.12,1.62-1,2.28-1.9,2.04-1.88,0.87-4.31-0.13-0.88,1-2.28,2.16h-2.91l-2.4,0.38-0.13,4.03-0.62,1.9-2.91,0.38-1.87,0.25,0.12,1.4,0.88,1.5-1.78,1.29-1.25,0.5-3.41-0.91-1.66,1.16-0.37,2.9-0.13,4.16-1.25,2.28-2.65,1.62-3.41,1.16-8.72-0.12-3.53-0.91-5.19-0.75-4.28-0.75,0.88,1.87-0.13,1.54,0.07,0.53-0.94,5.65-2.53,1.5-2.03,3.32-2.91,1.87-0.13,1.66,2.66,1.25,1.91,0.75,1,2.4,2.9,0.25,5.07-0.75,1.65-0.9,2.25,0.53,1.78,1.37,1.38-1.62,1.12-0.78,1.78,4.69,1.5,0.62,2.91,1.53,0.06,0.69-0.12,2.69,0.06,1.78-1.63,1.53,1,1.12,2.29,0.5,1.75-0.62,2.53-1,0.62-0.5,1.91,1.5,1,1.9,1.03,1.88,3.16,0.25,3.28-3.03,0.75-1.5,1.25-1.38,2.4-1.28,2.03-1.75,0.5-1.15-0.37-1.25-1.91-0.63-1-1.03,0.13-1.63,1.37-2.4,1.78-1.91,1.66-1.87,1.25-2.16,1.38,0.25,1.78,1.53h1.9l0.88-0.53,0.12-2,1.5-2.03,0.25-1.75-0.25-3.16-0.5-1.53,0.63-1.78,1.4-0.87,1.38-0.63,3.03-2.53,0.5-1.13,0.53-1.28h1.38l3.4-0.62,2.16-1,1.5-1.28v-1.88-3.4l0.25-2.54,1.03-0.87v-1.16l-0.12-2-0.78-1.15-2-0.38-1.41-0.37-0.63-0.88v-0.75l0.63-1.15,1.28-1,0.75-0.63-0.38-1.03-1.65-2.37-1.88-2.29-1.4-2.15-1.75-2.53z",
          name: "Республика Карелия"
        },
        vo: {
          path:
            "m215.36,208.76c0.12627,2.5254-1.389,5.0508-1.389,5.0508l-1.5152,1.894s-0.3788,1.0102-0.3788,1.7678c0,0.75762,0.12626,1.389,0.12626,1.389s0.63135,1.389,1.894,2.1466c1.2627,0.75761,2.0203,2.7779,2.0203,2.7779l1.0102,1.894,1.5152,1.2627,1.2627,1.0102,1.1364,1.894,1.2627,0.37881,3.1567,0.50508,1.5152,2.2728,1.0102,1.894,1.7678,0.63135,0.25254,0.63135,1.0102,2.2728,1.2627,0.75761,2.6516,0.25254,1.5152,0.12627,0.50507,2.7779,1.2627,2.0203,2.7779,1.389,1.389,0.12627,1.0102-0.63134,1.389,0.12627,1.0102,0.50507,0.75761,1.0102-0.63134,1.5152-0.75762,1.389,0.25254,0.75762,1.2627,1.1364,0.75761,0.50508,1.0102,0.50507,0.3788,0.63135v1.0102l-1.5152,1.5152-2.0203,0.63135-2.0203,0.75761-4.2931-0.25254-1.2627,0.88389,0.25253,1.1364,0.88389,1.2627v2.6516,1.1364l-1.0102,1.1364-0.75761-0.63134-1.1364-1.0102-0.37881-1.5152-1.0102-0.12626-1.6415,1.0102-1.0102,1.0102h-1.7678l-3.0305-1.5152-2.1466-2.1466-2.0203-1.1364-1.894-1.6415-2.0203-2.7779v-1.894l-1.894-2.7779-2.5254-2.2728-1.5152-2.0203-1.2627-1.7678-0.63135,0.75761-1.6415,0.12627-1.6415-0.25254-2.2728-1.894-0.88388-0.50508-1.2627,0.63135-2.7779,1.7678-0.63135,0.37881-1.2627,0.12627-0.88388-0.50508-0.50508-1.2627-0.63134-1.894,0.25254-4.0406-0.50508-2.5254-0.50508-1.2627-1.2627,0.12627-1.2627,0.37881-0.88388-0.25254-1.389-1.2627-1.6415-1.7678-4.0406-1.0102-1.2627-1.1364-0.50508-1.0102,0.63135-2.0203-0.50508-0.88388-1.0102-0.75761-1.1364-0.63135-1.894-0.37881-0.25254-0.12627,0.50508-2.7779-0.50508-1.6415-0.63134-1.2627-0.88388-0.88389-0.37881-0.50507-0.12627-1.0102-0.25254-1.5152,0.63135-0.88388,0.75761-0.88388,1.389-0.25254h1.6415l0.88388,1.2627,1.0102,0.88388,1.1364-0.50507,0.25253-1.1364,1.2627-0.25254,1.1364-0.63135,0.75761-1.1364,0.12627-1.5152,3.283-3.6618,1.2627-0.88388h1.7678l2.0203-0.37881,1.389-0.75762,0.88388-0.63134h1.1364l1.5152,0.88388h1.2627l0.88389,0.75762,0.50507,0.88388,1.389,0.63134h1.1364l1.389-0.3788,1.5152-0.50508,1.1364-0.37881,0.63135-0.25253,0.88388,0.12627,1.0102,0.88388,1.2627,1.6415,0.50507,1.2627z",
          name: "Вологодская область"
        },
        ar: {
          path:
            "M421.06,151.03l-3.56,1.06-2.16,0.91-3.56,0.19-1.59,0.87s-1.26-1.07-1.97-1.25c-0.72-0.18-0.91,1.1-0.91,1.1l-1.78,2.65-2.69,1.63-3.03,0.87-2.31,1.78s-2.15,0.37-3.22,0.72c-1.07,0.36-2.5,0.19-2.5,0.19l-1.59,0.72,1.06,1.78-2.16,1.25,0.38,0.72,1.25,1.44,1.78,1.59,1.78,1.78,0.91,1.63,1.4-0.72,0.91-1.97,2.16-0.72,1.25-0.53,1.93-0.19,0.91-1.59h1.97l1.25,0.87,1.59-1.25,1.1-1.25,2.65-0.15,0.72-0.57,3.41,0.72,1.78-1.06,0.34-1.44,2.69-0.34s1.07-0.01,2.5-1.44l0.72,1.06,2.84-0.68s1.98-0.19,2.69-0.19,3.03-0.38,3.03-0.38h2.31l2.35,1.25,1.78,0.91,1.25-0.72,0.72-0.87,4.28,1.06,1.97-1.44,3.22,0.19,4.09-0.72,1.25-1.59,1.97-2.88s-1.26-0.89-1.97-1.25-2.69-1.44-2.69-1.44l-3.22,0.57-4.43,1.59-4.32-0.91-2.5-0.15-3.18-0.72-1.63-0.91-1.59-1.78-1.44,0.72-1.97,1.06-2.5-0.15-3.22-0.91-2.5-0.72zm-35.53,14.47l-2.5,0.53-1.78,1.63-2.5-0.38s-1.44-1.06-1.44-0.34v1.78l0.72,1.59-2.12,1.25-2.88,1.1-1.06,1.25h-2.16l-0.72-1.1-1.59-0.87-2.69,2.12-0.15,3.03,1.93,2.69,1.44,2.16s1.26,2.14,0.91,3.03c-0.36,0.89-4.28,2.5-4.28,2.5l1.06,2.5,1.25,1.59v1.97l2.31,0.53,2.88,1.97,2.12,2.31,1.97,0.38s1.06-1.07,1.06-1.78c0-0.72-0.15-4.48-0.15-5.38,0-0.89,1.59-8.37,1.59-8.37l0.34-1.44,4.13-2.69s0.88-1.07,2.31-1.97c1.43-0.89,4.66-3.03,4.66-3.03l1.78-1.4s0.71-1.64,0-1.82c-0.72-0.17-1.62-0.53-2.16-1.25-0.53-0.71-3.03-2.65-3.03-2.65l-1.25-1.44zm-132.28,14.34l-0.63,0.63-2.28,0.25-0.87-0.13-1.78,0.91v1.38l-0.63,1.65-1.15,0.75-0.13,1.38,0.91,0.78,0.87,0.87-0.12,1.25-1.25,1.28-1.66,1.5-1.65,0.13-1.38-1-0.62-1.53-1.41-2-1.25-1.03-2.03,0.53h-1l-2.41-1.66-1,0.38-1.66,2.15-1.37,2-1.66,1.78-1.25,2.66,0.38,1,1,1.28,1.78,0.25,0.12,1-0.12,1-2.78,2.41-2.16,0.87-1.87,3.03-2.53,2.53-2.91,0.5-1.13,0.13-0.5,0.91-0.28,1.87-0.87,2.16-1.75,2.03-0.13,1.87,1.25,2.79,1.5,1.28,2.04,3.53,3.78,4.15,1.28,0.75,3.15,0.38,0.38,0.65,1.37,1.38,1.66,2.53,1.38,0.5,0.5,1.66,0.9,1.5,3.28,0.5,1.63,0.25,0.78,1.4,0.37,2.13,0.75,1.15,2.41,0.88,1.5,0.75,1.28-0.5,1.13-0.25,1.37,0.75,0.91,1.66-1.03,1.25-0.13,1.53,0.66,1,1.25,0.75,1,1.03,1.03,0.62,0.75-0.37,1.25-0.25,1.41,0.5,1,1.37,0.5,0.91,0.24,2,0.26,1.03h0.65l0.88-0.16,0.87-0.5,0.63-0.37h1.03l0.75,0.75,0.62,0.91,0.88,0.25,1.4,0.25,1.88-0.5,1.41-0.5,1.37-1.79v-0.87l-0.37-0.66-0.26-0.5,0.26-1,0.5-0.5,2.78-1.28,2.4-1,1.66-1.12,1.87-0.78,0.5-0.75,0.13-1.38-0.75-1.53-1.13-0.87-2.15-0.13h-1.5l-1.53,0.5-1,0.75h-1.28l-0.63-0.12-1-1.13-1.53-0.37-0.75-0.38,0.25-1.53v-1.13l1.66-0.5,0.74-0.78,0.76-0.87,0.62-1.63,0.53-0.37,1.5-0.53,1.78,0.25,1-0.5-0.12-1.38-0.5-0.87-0.5-1.66,0.25-0.88,0.87-0.62,1-0.53,1.41-0.63,1.37-0.75,0.38-0.75v-0.5l-0.88-1.9-0.75-1.41-0.9-1.62-1-0.75-0.63-1.28,0.38-1.88,0.62-0.5h1.28l0.88,0.38,1,0.87,1.41,2.16,2.65,2.37,1,0.91s1.65,0.49,2.28,0.75c0.63,0.25,1.38,1,1.38,1l0.5,0.62,0.37,1.03,0.53,1,1,0.63,1.38,0.37h1.41l1.12,0.53,0.88,0.88,2.03,0.5h1.37l0.28,0.88,1,0.53,1,0.25,0.88-0.54,0.78-0.74-0.13-1.26-1.03-1.03,0.38-0.87,0.78-1,0.37-1.53-0.25-1-1.15-0.75-0.13-1.28,0.91-0.88,3.15-3.28,1.88-1.12,1.91-1.79,0.25-1.25-0.63-0.5-1.65-0.9-1.63-1-2.16-0.25-1.25,0.62h-1.4l-1.5-1.12-1.03-1.78-0.75-1.75-1.5-3.16-1.41-2.28-0.75-1.41-0.88-2.25-0.12-1.15-2.41,0.25-0.75-0.63-1.53-1.12s0.25-0.5,0.88-0.5,1.02-0.41,1.53-0.66c0.5-0.25,0.25-0.87,0.25-0.87s-0.37-1-0.88-1.76c-0.5-0.75-0.77-0.77-1.28-1.15-0.5-0.38-0.75-1.75-0.75-1.75l-1.25-0.41-2.03-0.5-1.66,0.13-1.5,0.53-1.9,0.12-0.88-0.65-1.62-1-2.03-0.13h-2.78-2.53l-1.63,0.75-0.91,0.75-0.37,1.66-1.13,1.37-1.12,2.04-1.28,0.87h-2.41c-0.63,0-1.75-1-1.75-1l-1.03-1c-0.51-0.51,0-2.03,0-2.03s0.13-1.53,0-2.16-1.5-1-1.5-1l-2.03-0.87s1.65-0.78,2.16-1.16c0.5-0.38,0.37-1,0.37-1v-2.28c0-0.63-0.25-2-0.25-2l-0.75-1.91zm110.16,1l-0.19,1.1,0.53,1.78,1.44,0.72,0.53-0.72v-1.63l-0.38-1.25h-1.93zm-28.22,6.19l-2.35,0.78-1.4,2.07-2.88,1.43-0.25,1.07,1.78,1.43,2.13,0.97,3.22-0.44,3.5-0.9,0.25-1.6-0.78-1.96-1.1-1.88-2.12-0.97z",
          name: "Архангельская область"
        },
        tu: {
          path:
            "m329.02,389.7,2.0536,0.80357,2.1428,1.1607,1.6072,1.3393,1.6071,1.5179,1.7857,0.71428,2.3214,0.17858,0.89286-1.0714,1.6071-1.875,0.53572-2.3214,0.625-2.1429,2.2321-1.7857,1.875-0.44643,1.25-2.5,1.6964-1.0714,2.9464,0.26786,1.6071-1.6072s0.625-2.3214,0.53571-2.6786c-0.0893-0.35714-0.80357-2.5893-0.80357-2.5893l-0.89285-1.875-0.625-3.3036-0.71429-2.2322v-1.7857l1.5179-1.9643,2.2321-2.5,1.4286-1.4286,3.125-0.26786,0.35714,1.4286-0.89285,1.6071-1.6964,1.6964-0.17857,1.25,2.5,0.35714,4.0178,0.35714,1.9643,1.6072,3.0357,1.7857,1.5179-1.25,2.9464-0.17857,2.1429,1.4286,3.3928,1.0714s2.5-0.98214,2.9464-1.1607c0.44643-0.17857,3.5714-0.44642,3.5714-0.44642l0.89286-0.98215-0.53572-1.0714-1.6964-1.25-2.9464-2.2321-1.0714-1.4286s-1.6964-0.44643-2.3214-0.44643-2.6786-0.80357-2.6786-0.80357l-0.17857-2.6786-0.26786-2.4107-1.3393-1.3393-0.44642-2.2321-0.53572-3.5714-0.35714-0.89286-2.4107-2.7679-1.1607-0.71428s-2.6786-0.26786-2.9464-0.26786h-5.0893l-0.98215-0.26786s-0.625-1.5178-0.625-1.875c0-0.35714-0.98214-1.5178-0.98214-1.5178l-1.875-0.35715-1.25,1.25-2.4107,1.875-2.1429,0.89286h-3.0357l-4.6428,0.0893-2.9464,0.26785s-1.4286,0.53572-1.7857,0.625c-0.35714,0.0893-4.375,0.0893-4.375,0.0893l-3.0357-0.0893-1.4286,0.35715-0.89286,1.5178-0.53571,2.3214-0.89286,1.3393-2.3214,0.71428-1.6071,0.53572-1.5179,0.35714-1.7857-0.17857-1.3393-0.625-1.4286,0.17857c-0.35714,0.17857-1.6964,1.0714-1.6964,1.0714l-1.1607,2.1429-0.35715,2.4107-1.6071,2.3214-2.1429,2.5893-0.98214,1.5179,0.26786,1.25,0.71428,1.3393,1.5179,1.25,1.25,1.6071,1.6964,1.875,1.0714,1.6964s3.0357,0.98214,3.0357,1.5179c0,0.53571,1.6964,2.9464,1.6964,2.9464l0.625,1.875,1.6071,1.4286,1.875,0.71428,1.0714,0.80357,1.4286,2.3214,1.0714,1.4286v1.6072z",
          name: "Тюменская область"
        },
        ne: {
          path:
            "m290.27,198.54,1.6071-0.89286,1.4286-1.1607,2.0536-1.0714,1.1607-1.25,0.625-3.3929,1.1607-1.6071s1.4286-0.80358,2.4107-1.0714c0.98215-0.26786,2.3214-0.26786,2.6786-0.26786,0.35714,0,1.5178-0.98214,2.0536-1.5179,0.53571-0.53571,3.0357-2.5,3.0357-2.5l0.71429-1.0714v-2.2321l1.25-1.9643s0.89285,0.17857,0.98214,0.625c0.0893,0.44642,0.26786,1.5178,0.625,1.6964,0.35714,0.17858,1.875,1.4286,1.875,1.4286l1.6964,1.1607,0.98214,0.89286-0.0893,1.3393-0.625,1.4286-0.44643,1.7857v1.6964l-0.26786,1.0714-0.44643,0.80357-0.26786,1.25-1.25,0.71428-1.3393-0.625-1.25-0.98214-0.625-0.80357-2.3214-0.53572h-3.0357c-0.44643,0-2.1429,1.1607-2.1429,1.1607l-0.80357,1.4286,0.17857,1.0714s0.53571,0.89286,0.625,1.25c0.0893,0.35714-0.71429,1.1607-0.71429,1.1607l-0.89285,1.6072s-0.26786,1.1607-0.0893,1.4286c0.17857,0.26785,0.625,0.80357,1.1607,1.25,0.53572,0.44643,1.875,1.5178,2.1429,1.6964,0.26786,0.17857,1.875,0.89285,1.875,0.89285s2.3214,0.17857,2.8571,0.17857c0.53572,0,1.9643-0.26785,1.9643-0.26785s1.5179-0.98215,1.875-1.1607c0.35714-0.17857,1.9643-1.1607,1.9643-1.1607s1.0714-0.44643,1.4286-0.35714c0.35714,0.0893,1.3393,0.98214,1.3393,0.98214l2.3214,0.17857s0.35714-0.44643,0.71429-0.80357c0.35714-0.35714,0.53571-0.71429,0.98214-0.35714,0.44643,0.35714,1.875,1.3393,1.875,1.3393l1.7857,0.44643h5.0893l2.5893,0.0893s0.80357,0.80357,1.25,0.89285c0.44642,0.0893,3.3928,0.53572,3.3928,0.53572l1.5179,1.4286,0.71429,1.9643,1.1607,0.17858,0.71429-1.5179,0.89285-1.0714,1.875-0.17857,0.89286,0.53571,2.1429,0.17857,2.5893,0.44643-0.44643,0.80357-0.98214,0.80358-1.6964,0.625-0.80357,0.98214-0.71428,0.98214-1.6964,0.71429-0.26786,1.0714,1.3393,0.98214,1.25,0.53571,0.625,2.0536,0.71428,0.35715,1.6964-0.80357s1.3393-0.89286,1.6071-0.89286c0.26786,0,3.3036,0.53571,3.3036,0.53571l2.6786,1.3393,1.5178,1.3393,1.4286,0.89286,4.4643,0.17857,0.71429,0.71429,1.5178-0.26786,2.5893-0.35714,1.7857-1.3393,0.625-1.7857s0.53572,0.625,0.53572,1.1607c0,0.53572-1.6964,2.7679-1.6964,2.7679l-0.71429,1.7857v1.0714l-1.1607,1.1607-0.89286,0.625-0.44643,0.98214,0.44643,0.80357h1.4286l0.80357-1.6071,0.17858-0.53572,1.5178-0.0893,1.5179,1.25,2.3214,0.35714,1.1607-0.89286,1.3393-1.1607,0.53571-0.89286-0.71428-1.0714-0.35715-1.4286,1.5179-1.1607,0.71429-1.875-0.53572-1.6964-1.25-0.80357-0.71428-3.3929-0.26786-3.125s-0.26786-0.89286,0.0893-1.25c0.35714-0.35714,2.2321-1.6964,2.2321-1.6964l1.3393,0.17857,1.1607,1.4286,1.0714,1.9643,0.35714,2.1429-0.89286,3.3036,0.89286,1.0714,2.8571,2.4107,2.7679,2.8572,3.3929,2.5893,2.1428,3.3036,1.6964,3.3929,0.80357,1.875,0.17858,1.6071-1.0714,1.1607-0.98215,2.0536-0.98214,1.5179h-2.5c-0.44643,0-3.6607-0.17858-3.6607-0.17858l-2.1429,0.98215-2.7679,0.71428h-3.0357l-1.7857-0.17857-2.4107,1.875-3.0357,2.4107-1.6072,0.53571-2.7678-0.0893-2.0536-0.53571-4.2857-2.4107-23.036-13.929-7.6786-6.875-1.25-1.1607v-1.3393l-0.98214-0.625-2.4107,0.625-5.0893-0.44642-5.625-0.98215-5.1786-0.80357-3.125-0.26786-4.1071-2.3214-2.0536-0.44643-1.7857,0.625-1.7857-0.26786-1.5179-1.7857-4.2857-8.4822-0.98215-2.4107z",
          name: "Ненецкий автономный округ"
        },
        om: {
          path:
            "m388.39,368.89,0.71428,2.5-1.25,1.6071-1.25,1.9643,0.53572,1.6071,0.71428,1.9643-1.25,1.9643s-1.0714,1.25-1.0714,2.1429c0,0.89286,0.17857,3.0357,0.17857,3.0357l1.7857,1.6072,0.35714,2.3214-0.53571,3.3929-1.9643,0.89286-1.25,1.6071,0.71429,2.3214-0.35715,1.9643-3.9286,0.17857s-1.4286-0.89286-2.3214-1.0714c-0.89285-0.17857-3.3928,2.8571-3.3928,2.8571l-2.5,2.1429-0.89286,4.2857,0.53571,0.89286,1.9643,2.1429,0.35714,2.6786-1.6071,2.6786-1.0714,1.7857-0.17857,3.0357-2.5,2.1429s-2.3214,1.0714-3.0357,1.0714h-4.8214l-1.6072-0.71428c-2.1428,1.4286-3.75,0-3.75,0l-1.6071-0.71429-1.9643-0.35714h-1.0714l0.35714-1.7857,1.7857-1.0714,0.71429-1.4286-2.3214-1.25-2.1429-2.3214-1.9643,0.89285-0.89286-0.71428v-3.75l-1.4286-0.89286-2.8571,0.35714-2.8572-0.89285-0.89285-0.53572-0.17857-2.1428,2.1428-2.6786,0.71429-2.3214,0.35714-2.6786v-4.1071l0.71429-2.1429,1.4286-3.9286,1.6071-2.5,2.3214-0.53571,1.0714-1.25,1.0714-1.7857,1.6071-0.89285h2.6786l1.6071-1.4286,0.89286-3.9286-1.4286-3.2143-0.71429-3.0357-1.25-3.3928,0.35715-1.6072,4.4643-4.6428,1.0714-0.89286h2.6786l0.17857,1.6071-1.25,1.6072-1.7857,1.25-0.17857,1.4286,1.4286,0.35714,3.2143,0.35714,2.3214,0.17857,2.1429,1.4286,1.9643,1.4286,1.0714,0.35714,1.0714-0.71429,1.9643-0.35714,2.3214,0.35714,3.5714,1.6072h2.5l2.1428-1.0714h2.1429z",
          name: "Омская область"
        },
        ht: {
          path:
            "m359.64,260.32,0,3.75-0.53572,3.2143-1.6071,2.3214-2.3214,2.3214-0.89286,1.25,1.9643,1.9643,1.7857,2.3214,5,1.9643,4.8214,0.17857,3.5714,1.4286,2.3214,2.6786,0,1.4286-2.1429,1.7857,1.4286,1.4286,2.3214,2.8572,1.9643,1.0714,2.1428-1.0714,1.7857-0.89286s1.6071,0.71429,1.9643,0c0.35715-0.71429,0.89286-2.1429,0.89286-2.1429l1.6071,2.1429,1.4286,2.8571,1.9643,1.6072s0.35714,2.1428,0.35714,2.8571v4.6429l1.9643,3.3928s0.35714,0.17857,0.71429,0.89286c0.35714,0.71429,0,2.1429,0,2.1429l1.0714,1.25,2.5,0.53571,3.75,0.71429,1.4286,0.89285s2.8571,2.1429,3.5714,2.6786c0.71429,0.53571,1.25,1.6071,2.1429,1.9643,0.89286,0.35714,3.5714,0.53572,3.5714,0.53572l2.8571,0.35714,0.89286,1.0714s0.35714,1.6071,0.71428,2.6786c0.35715,1.0714,1.4286,1.7857,1.4286,1.7857l3.0357,0.17857,1.7857,0.53572,0.35715,1.9643,0.35714,1.4286,1.0714,2.5c1.9643,0.17857,2.5,0.17857,3.5714,0.17857s3.3928,1.0714,3.3928,1.0714l1.9643,0.71428,2.8571,0.35714,2.8572-1.0714,3.2143-1.9643,3.0357,0.53571,1.9643,2.6786s0.35714,1.7857,1.0714,2.1428c0.71429,0.35715,2.8571,0.53572,2.8571,0.53572l2.3214,1.6071,0.71429,2.3214,1.9643,0.71428,2.6786-0.89285,1.9643,1.6071,1.0714,3.0357v2.3214l-0.35714,1.6072-0.53572,1.9643,3.0357,1.9643,2.5,1.7857,0.35714,2.3214v1.0714l-3.75,1.7857-2.6786,0.53572-3.2143,0.17857-3,0.15-1.61-1.07-1.7857-0.71428-2.3214,0.35714-2.3214,1.6071-2.6786,1.0714-2.1429-1.9643s-2.8571-0.35714-3.5714-0.35714c-0.71429,0-2.3214-1.7857-2.3214-1.7857l-0.89286-1.25-3.9286,0.17857h-3.5714l-1.6071-2.5s-1.25-0.89286-2.1429-0.89286c-0.89286,0-4.4643-1.25-4.4643-1.25l-2.5-2.3214h-1.25c-0.71428,0-2.3214,1.25-2.3214,1.25l-2.5,2.1429-1.7857,2.6786-2.8571,2.5-1.6071,3.3929-4.4643,1.6071-3.5714,0.89286-0.35714,2.1429-0.71429,2.1428-2.6786,1.25h-2.8571l-5.8929-5.5357-3.9286-0.89286-1.0714-1.4286-0.53571-4.1071-1.0714-1.25-1.0714-5.3572-0.53571-1.7857-3.5714-3.2143h-5.5357l-3.0357-0.35714-1.9643-2.8571-1.6071-0.53572-4.4643,3.0357-3.3929,0.71428h-5.1786l-5,0.71429-4.2857,0.53571h-3.5714l-1.4286-0.17857-0.53571-2.8571-0.35714-3.2143,0.89285-3.2143-0.89285-3.2143-2.3214-2.1428-1.0714-0.89286-1.0714-1.0714,1.25-2.6786,1.4286-2.3214-0.17857-2.1429-0.71429-3.2143,0.71429-5.5357,1.4286-1.7857,1.4286-2.1429-0.71428-2.3214-1.0714-3.5714-1.9643-2.6786-2.3214-3.3928-3.3928-2.1429-1.7857-1.9643-1.0714-2.6786,3.3929-2.1429,1.6071-2.6786,2.3214-4.8214,2.1429-2.6786,2.5-1.9643,3.5714-3.3929,1.6071-1.7857,1.7857-3.3929-0.17858-1.7857,0.89286-1.0714,2.1429-1.0714,1.4286-1.9643,1.6071-1.0714,1.25,0.17857,0.89286,2.3214,0.35714,1.0714,1.4286,0.35714,2.5-0.71428,3.0357-1.6071,1.4286-1.25,1.25-1.0714,2.5-0.53572z",
          name: "Ханты-Мансийский автономный округ"
        },
        ya: {
          path:
            "m396.25,234.25,1.4286,2.6786,1.6071,1.7857,1.6072,2.6786,1.0714,3.0357,0.89286,2.8572,3.0357,0.17857,1.7857-1.6072,1.4286-1.25-0.53571-3.2143s-0.89286-1.4286-0.53572-2.3214c0.35715-0.89286,1.7857-2.5,1.7857-2.5v-2.3214l-2.1429-1.6071-1.25-2.5s0.71429-1.6071,1.4286-1.9643c0.71429-0.35714,3.75-2.3214,3.75-2.3214s1.6071-3.75,1.9643-4.4643c0.35714-0.71429,0.35714-4.8214,0.35714-4.8214l0.89286-1.4286,7.5-2.1429,4.8214-3.5714,5.7143-6.0714,3.2143-2.1429,2.1428-0.71429,1.7857,2.3214,3.3928,0.35714,1.7857,1.25,1.0714,2.6786,0.17857,1.7857-0.89286,3.75-2.1429,2.6786-2.3214,2.8571-3.0357,1.6072-1.25,1.0714-0.35714,1.9643,1.0714,2.1429,0.17857,2.8571-0.89286,2.8571-2.1429,2.6786-1.7857,3.2143-2.6786,4.4643-1.25,3.5714-0.89286,2.1429-0.17857,2.5,0.35714,2.6786,0.71429,2.3214-0.71429,1.4286-3.0357,2.1429-1.0714,3.2143-0.89286,3.2143h-3.2143l-2.3214,1.25-2.1429,3.3929-3.5714,0.53571-2.3214,1.25-1.4286,1.4286h-3.5714l-1.4286-1.0714-1.0714-2.6786-0.71429,0.53572v1.6071l-1.9643-1.4286-0.71428-1.9643-1.0714,0.71429-0.17857,1.9643,1.7857,2.1428,2.5,2.1429,2.5,1.25,3.2143,1.0714,2.1429,1.25,2.1428-0.89286,3.5714-1.7857,3.0357-0.71429,3.75-1.0714,2.3214-3.0357,3.2143-2.6786,3.3929-1.6072,2.1428-1.7857-0.17857-2.1429-0.89286-2.3214-0.17857-1.7857,2.1429-2.1429,4.2857-0.89285h3.3929l1.4286,1.4286,1.25,3.0357v2.8571,3.0357l-1.6071,1.4286-1.25,2.5,0.17857,3.5714,1.7857,1.25,3.2143,0.71428,2.1429,2.8572,1.9643,3.2143,0.53572-0.71428-0.53572-4.1072-2.5-3.2143-3.75-1.0714v-2.8571l2.3214-3.0357s1.7857-0.35714,1.9643-1.0714c0.17857-0.71428,0.17857-3.5714,0.17857-3.5714l-0.89286-3.9286-2.6786-2.6786-2.6786-3.2143-0.89286-1.4286h-2.1428s-0.53572,1.25-1.4286,1.25c-0.89285,0-2.6786-1.25-2.6786-1.25l-1.6071-1.0714-0.53571-2.5,1.4286-3.75,2.3214-3.2143,2.1428-2.6786,3.0357-1.25,0.17857-4.4643-0.17857-3.0357v-3.0357l0.17857-2.3214,1.7857-2.3214,1.4286-1.4286,2.1429-0.35715,3.2143-0.53571,2.3214-2.5,1.7857-1.0714,1.25,2.1429-1.9643,2.3214-0.89285,1.4286-1.0714,4.4643-1.25,2.5,1.25,1.7857,2.6786,2.1429h2.8571l1.4286,2.1428,2.3214,2.5,1.7857,0.35715-1.4286-2.1429v-2.5s-1.25-1.25-1.9643-1.6071c-0.71429-0.35715-3.5714-2.8572-3.5714-2.8572l-1.25-3.5714-0.17857-1.4286s1.9643-0.71428,2.6786-0.71428c0.71429,0,3.2143,0.89285,3.2143,0.89285l0.89285,1.7857,1.6072,0.17857,1.25-0.71429-0.35715-1.9643,0.17858-1.9643,1.4286-0.35714,1.6071,0.71429,1.7857,1.4286,1.25,1.0714,0.89286,1.7857-0.35714,1.7857-2.3214,2.5-3.0357,1.25,1.0714,1.4286,2.6786,2.1428,0.35714,2.8572,0.17857,3.3928-0.71429,2.6786-2.5,1.4286-2.6786,1.4286-3.5714,1.7857-2.1428,2.1429,0.35714,2.6786,1.4286,2.5,1.25,2.5,1.6071,1.0714h3.3929,2.5l1.7857,1.6071,0.53571,3.0357,0.17857,3.3928v2.8572l-1.9643,3.2143-1.7857,2.5h-2.6786l-0.71429,0.53572,0.53572,1.9643,0.71428,1.7857-0.53571,2.5-0.89286,1.25,2.3214,3.3928,0.53572,1.7857,0.35714,1.7857-1.25,1.7857-1.0714,1.25,0.89286,2.1428-0.17857,2.5-1.6072,1.6072,1.6072,1.7857,2.1428,1.9643,1.6072,1.4286-0.17858,3.3928-1.4286,2.3214-0.17857,2.6786,2.3214,2.1429,4.6429,0.89286,0.89285,1.4286-1.4286,2.1429-0.53571,3.3928-0.89286,2.3214-2.6786,1.4286s-0.89286,0.53572-1.6071,1.0714c-0.71429,0.53572-1.7857,2.8572-1.7857,2.8572l1.9643,1.7857,0.17857,2.3214-1.4286,2.1429-1.25,2.5-2.6786,2.3214-2.8572,2.8572-0.89285-1.7857-1.6072-2.1428-1.7857-1.0714-1.9643,0.71428-1.9643-0.71428-0.71429-1.6072-1.25-1.25-2.5-0.89285-2.1428-0.89286-0.71429-1.6071-0.89286-1.7857-1.4286-1.4286-2.8571-0.17857-2.5,1.4286-2.5,1.0714-2.6786,0.17857-4.1072-1.6071-3.5714-0.35714-2.1429-0.17858-0.89286-1.9643-1.0714-2.3214v-1.4286l-3.3928-0.71429-2.3214-0.53571-0.89286-2.5-0.71429-2.3214s1.4286-0.17857-1.0714-0.35714-5.5357-1.0714-5.5357-1.0714l-1.4286-0.53572-3.2143-2.5-2.5-1.6071-2.8572-1.0714-3.2143-1.25-1.25-0.89285-0.17857-2.1429-2.8572-3.9286,0.17857-6.7857-1.25-1.7857-2.3214-2.8571-1.0714-2.1429-0.53572-0.53572-1.0714,1.25-0.53571,0.71429h-1.4286l-2.6786,0.89286-1.25,0.35714-1.6072-0.35714-2.1428-2.3214-1.7857-1.6071,0.53572-0.89286,1.4286-1.6071-0.35714-1.7857-2.5-2.3214-3.0357-1.4286-4.2857,0.35714-3.0357-1.25-2.6786-0.89285-3.3929-4.2857,2.3214-2.5,2.5-3.75,0.17857-5.3571,0.35715-1.4286,3.75-1.0714,2.6786-2.5,1.4286-1.4286h3.75,3.3929l3.9286,0.53571,1.7857-1.25,3.5714-1.6071,3.3929-0.53571,2.5-1.25,2.3214-1.25,0.35714-2.8572-2.1429-2.3214-0.71428-1.25,0.53571-1.6071,2.3214-1.4286,0.35714-1.25,1.92-2.87z",
          name: "Ямало-Ненецкий автономный округ"
        },
        kr: {
          path:
            "M531.66,122.41c-0.45,0.04-1,0.37-1,0.37-0.9,0.72-1.25,0.77-0.94,1.13,0.31,0.35,0.19,0.55,0.9,0.78,0.72,0.22,0.91,0.49,1.44,0,0.54-0.49,0.77-1.24,0.41-1.69s-0.37-0.64-0.81-0.59zm11.56,0.65c-0.22,0.02-0.44,0.11-0.6,0.38-0.31,0.53-0.49,1.57-0.62,1.84s-0.2,0.74-0.78,0.88c-0.58,0.13-1.39,0.54-1.75,0.09s-1.03-1.51-1.25-1.69-1.04-0.74-1.13-0.03c-0.09,0.72,0.19,1.51,0.19,1.91s-0.18,0.99-0.4,1.12c-0.23,0.14-1.06,0.25-1.29,0.56-0.22,0.32-0.62,0.49-0.62,1.16s-0.27,1.67-0.31,1.94c-0.05,0.27-0.32,0.26-0.63,0.75s-1.09,1.87-1.09,1.87,0.89,0.62,1.15,0.85c0.27,0.22,0.42,0.77,0.38,1-0.05,0.22-0.13,1.05-0.53,1.19-0.4,0.13-1.43,0-1.78-0.13-0.36-0.13-1.01-0.48-1.5-0.44-0.49,0.05-1.01,0.23-1.19,0.63s-0.71,0.38-0.13,1.18c0.58,0.81,0.87,1.53,1,1.76,0.14,0.22,0.29,1.51,0.07,1.87-0.23,0.36-1,1.13-1.22,1.53-0.23,0.4-0.44,0.71-0.22,1.16,0.22,0.44,0.66,0.8,1.15,0.94,0.5,0.13,3.66,0.71,3.66,0.71s0.28-0.36,0.81-0.71c0.54-0.36,1.36-0.77,1.85-0.41s0.52,0.8,0.65,1.25c0.14,0.45,0.41,2.02,0.5,2.37,0.09,0.36,0.49,0.58,0.94,1.16s1.59,1.37,2.22,1.59c0.63,0.23,1.05,0.55,1.72,0.6,0.67,0.04,2.85,0.82,2.94,1.09s0.31,1,0.31,1,0.54,0.52,0.81,0.56c0.27,0.05,2.22,0.19,2.22,0.19,1.38-0.76,2.23-0.8,2.5-0.94,0.27-0.13,0.84-0.03,1.37-1.06,0.54-1.03,0.76-1.35,0.63-2.06-0.13-0.72-0.34-0.93-0.87-1.6-0.54-0.66-1.5-1.24-1.1-1.56,0.4-0.31,1.56-0.8,1.88-1.15,0.31-0.36,0.54-1.32,0.4-2.35-0.13-1.02-0.15-2.5-0.47-2.9-0.31-0.41-0.73-0.92-1.4-1.19s-1.23-0.67-1.81-0.53c-0.59,0.13-1.92,0.25-2.19,0.03s-0.62-0.83-0.85-1.5c-0.22-0.67-0.5-1.13-0.5-1.53s1.16-3.63,1.16-3.63,0.71-0.29,0.84-0.56c0.14-0.27,0.36-0.76,0.22-1.66-0.13-0.89-0.39-1.55-1.28-2.09s-2.09-1.72-2.09-1.72v-0.97c0-0.35-0.15-1.73-0.28-2-0.14-0.27-0.48-0.72-0.97-0.72-0.25,0-0.5-0.05-0.72-0.03zm17.72,22.91c-0.13,0.02-0.25,0.07-0.35,0.19-0.4,0.44-0.72,1.12-0.9,1.34s-0.51,0.09-0.91,0-0.89-0.43-1.16-0.03c-0.26,0.4-0.67,0.74-0.71,1.19-0.05,0.44,0.09,1.75,0.09,2.46,0,0.72,0.09,1.8,0,2.6s-0.2,1.3-0.78,1.66c-0.58,0.35-0.91,0.4-1.31,0.93-0.41,0.54-1.13,1.25-1.13,1.88,0,0.62,0.06,1.45-0.66,2.03-0.71,0.58-1.14,0.56-0.96,1.4,0.17,0.85,0.22,0.93,0.84,1.38s2.79,0.63,3.28,0.5,1.26-0.77,1.66-1.22,1.61-0.99,2.28-1.12c0.67-0.14,1.17-0.08,2.16-0.13,0.98-0.04,1.54-0.39,2.03-0.65,0.49-0.27,0.54-0.54,1.43-0.54,0.9,0,1.74,0,2.1-0.31,0.35-0.31,1.35-1.19,1.62-1.5s0.88-1.05,0.97-1.5,0.18-1.3,0-1.75,0.15-1.15-1.19-1.28-1.57,0.07-1.84-0.38c-0.27-0.44-1.03-0.88-1.03-1.37s0.08-1.02-0.19-1.37c-0.27-0.36-0.79-0.81-1.28-0.72s-1.31,0.58-1.53,0.62c-0.22,0.05-0.71-0.09-0.85-0.4-0.13-0.32-0.21-1.11-0.21-1.91s-0.25-1.63-0.25-1.63c-0.34-0.13-0.83-0.43-1.22-0.37zm5.22,20.03c-0.62,0.05-1.16,0.75-1.16,0.75s-1.62,1.95-2.16,2.84c-0.53,0.9-0.86,1.08-1.93,1.25-1.08,0.18-1.82,1.63-1.82,1.63s-0.51,1.23-0.68,2.12c-0.18,0.9-1.25,3.07-1.25,3.07v1.93l0.87,1.63s1.6,1.05,1.78,2.12c0.18,1.08-2.12-0.68-2.12-0.68s-2.14-0.73-3.03-0.91c-0.9-0.18-1.64,0.01-3.07,0.19-1.42,0.18-1.25,0.34-1.25,0.34l0.72,1.63s1.61,1.4,1.25,2.65c-0.35,1.25-1.4-0.53-1.4-0.53l-1.97-0.87s-1.98,0.16-2.88,0.87c-0.89,0.72-1.25,0.91-1.97,0.91-0.71,0-1.59-0.71-2.12-1.78-0.54-1.08-0.91-0.91-1.63-1.44-0.71-0.54-3.2,0-4.09,0s-2.32,1.79-3.75,1.97-1.78,0.53-1.78,0.53l0.34,2.12-1.97,1.1-2.12,0.53-2.16,0.53c-0.71,0.18-2.12-0.19-2.12-0.19l-1.97-0.34-1.44,0.87-0.53,0.57-2.84,0.15-2.16,0.91s-2.49,2.13-4.09,2.31c-1.61,0.18-0.19,0.53-0.19,0.53s1.06,0.91,1.06,1.63c0,0.71-0.7,0.87-0.87,1.4-0.18,0.54-1.45-0.33-2.35-0.68-0.89-0.36-1.25,0-1.25,0s0.2,1.04,0.38,1.93c0.18,0.9,1.06,1.28,1.06,2.35s-0.19,2.12-0.19,2.12,0.53,2.69,0.53,3.41v2.69c0,0.89-0.87,1.59-0.87,1.59s-1.25,0.72-3.03,0.72c-1.79,0-0.91-0.72-0.91-0.72l0.72-0.91-0.53-1.4-1.97-0.38-2.31,1.25-1.78-0.53h-3.22-3.94c-1.43,0-1.95-1.07-2.84-1.25-0.9-0.18-2.88-0.34-2.88-0.34s-2.14-0.02-3.03,0.34-1.97,1.06-1.97,1.06v3.07,3.03s-1.6,0.69-1.78,1.4c-0.18,0.72,0.01,2.68,0.19,3.75,0.18,1.08,1.05,0.72,2.12,1.25,1.07,0.54,2.16,1.25,2.16,1.25l0.53,0.57,0.34,1.78s0.57,1.94,0.57,2.65c0,0.72,1.25,1.97,1.25,1.97s0.68,1.63,0.68,2.35c0,0.71-0.51,1.22-0.87,1.93-0.36,0.72-0.73,1.61-0.91,2.5-0.18,0.9,0,2.16,0,2.16l0.38,2.84s-0.2,2.88-0.38,3.6c-0.18,0.71-0.89,1.42-1.78,1.78s-1.25,2.12-1.25,2.12,0.01,2.7,0.19,3.6c0.18,0.89,0.88,1.42,1.59,1.78,0.72,0.36,1.25,1.78,1.25,1.78l-0.87,1.78-1.78-0.34-1.44-1.78-0.91-1.82v-2.5s-0.54-1.76-1.97-2.65c-1.42-0.9,0.19-1.63,0.19-1.63s1.08-1.25,1.44-1.97c0.36-0.71,1.06-1.78,1.06-1.78s1.8-1.6,2.16-2.5c0.35-0.89-0.38-1.4-0.38-1.4l-1.06,0.68-1.78,1.82-1.78-0.91s0.69-1.25,0.87-1.78c0.18-0.54,0.54-1.79,0.72-2.5,0.18-0.72,0.35-1.6,1.06-2.31,0.72-0.72,2.35-0.19,2.35-0.19l1.25-1.25v-1.63l-1.1-1.59s-1.4-0.17-3.9-0.34c-2.5-0.18-0.72-1.25-0.72-1.25l-0.72-1.82s-0.72-1.76-1.44-2.12c-0.71-0.36-1.94-3.04-2.65-3.75-0.72-0.72-1.1-1.44-1.82-2.16-0.71-0.71-2.11-1.78-3.18-2.5-1.08-0.71-1.97-1.4-1.97-1.4l-1.63,0.34s-1.05,1.07-0.15,2.5c0.89,1.43,1.06,1.44,1.06,1.44l1.25-0.28,0.97,0.18,1.22,0.5,1.15,1.07,1.06,0.71,0.91,1.07,0.53,0.9,0.1,0.94-0.6,1.63-1.68,1.84-1.29,0.81-1.93,0.88,0.81,1.15s2.04,1.71,2.22,1.85c0.18,0.13,0.69,0.9,0.69,0.9l0.31,2.85,0.09,2.59s-0.33,2.1-0.37,2.28c-0.05,0.18-0.63,0.88-0.63,0.88l-7.09,3.97-1.44,0.9-1.25,0.94-0.66,0.81s0.3,2.37,0.35,2.6c0.04,0.22,0.64,1.18,0.69,1.4,0.04,0.23,1.28,2.69,1.28,2.69s1.15,1.2,1.46,1.69c0.32,0.49,2.16,0.31,2.16,0.31h3.44c0.4,0,1.34,0.5,1.34,0.5s1.3,0.98,1.35,1.16c0.04,0.17,0.37,1.31,0.37,1.31l0.38,3.34s0.09,3.42,0.09,3.69-0.5,1.56-0.5,1.56l-0.34,1.22c-0.04-0.01-0.07-0.03-0.1-0.06l-1.15,2.06-1.82,1.69-1.68,0.28-1.6,0.28,0.16,1.41s1,1.98,1,2.34-0.01,1.68-0.19,2.13c-0.18,0.44-0.81,1.68-0.81,1.68l0.47,1.19,1.15,1.69,0.88,2.41,0.47,1.68-1.16,1.97-1,1.63,0.72,1.93s0.08,1.53-0.09,1.97c-0.18,0.45-1.07,1.16-1.07,1.16l-0.43,1.19s4.1,3.63,5,4.53c0.89,0.89,0.15,1.52,0.15,2.06s-0.72,2.5-0.72,2.5l-1.25,2.22,0.1,1.87s1.54,1.46,1.72,1.82c0.17,0.35,1.68,0.78,2.22,0.87,0.53,0.09,2.78,0.38,2.78,0.38l1.25,1.31-0.19,0.81-1.16,1.63-0.72,3.28s-0.8,2.07-1.15,2.34c-0.36,0.27-1.44,1.16-1.44,1.16l-2.22,1.15-1.72,2.41,0.38,0.97,1.34,1,0.25,1.78-0.81,1.78-1.25,2.78-1.5,1.41-2.31,2.34-1.72,1.6-1.5,2.25s-0.9,2.92-0.81,4c0.08,1.07,0.96,0.72,0.96,0.72s1.62,1.07,2.16,1.34,1.51,0.99,1.78,1.34c0.27,0.36,1,1.24,1,1.69v1.53l-0.81,0.88-1.25,0.81-3.41,1.25-1.69,0.34-2.4-0.25s-1,0.43-0.91,0.78c0.09,0.36,0.72,1.63,0.72,1.63s0.45,1.24,0.63,1.69c0.17,0.44,0.27,0.88,0.72,1.06,0.44,0.18,0.09,2.97,0.09,2.97s-0.89,2.3-1.16,2.75c-0.27,0.44-0.46,1.25-0.37,1.87,0.09,0.63,0.72,1,0.72,1s1.7,0.69,2.06,0.78,2.94,1.1,2.94,1.1,3.13,0.72,3.84,0.72,2.58,0.06,3.56,0.15,2.5,1,2.5,1,1,0.87,1.53,1.41c0.54,0.53,0.25,4.64,0.25,5s2.88,0.19,3.5,0.28c0.63,0.09,2.32,0.81,2.32,0.81s0.43,1.33,0.43,1.69-0.43,1.88-0.43,1.88l-1.78,0.9-3.47,1.5-0.57,1.06s-1.13,4.74-1.4,5.19,0.53,1.88,0.53,1.88l1.5,0.62,2.25,1.06s3.47,2.25,4.09,2.79c0.63,0.53-0.09,0.96-0.09,0.96l-0.97,1.82-5.44,4.72-0.72,1.96-0.18,1.5s-0.44,3.58-0.44,3.94,0.34,1.53,0.34,1.53,1.81,1.15,2.25,1.5c0.45,0.36,1.88,1,1.88,1l0.72,1.41s0.79,1.54,1.06,2.34c0.27,0.81-0.72,0.97-0.72,0.97l-3.56,2.94-1.97,0.91s-1.35,1.33-1.44,1.87,0.81,0.97,0.81,0.97l0.97,1.44,1,1.34s1.95,0.73,2.75,0.91c0.81,0.17,1.63-0.57,1.63-0.57s1.42-1.95,2.4-2.22c0.99-0.26,0.53,0.46,1.07,0.72,0.53,0.27,1.96,0.61,2.59,0.88s2.22,1.34,2.22,1.34l0.81,2.06,1.78,7.41,0.82,2.5-1.26,4.13s0.1,2.05,0.19,2.4c0.09,0.36,0.8,1.24,1.07,1.6,0.26,0.35,0.43,2.15,0.43,2.15l-0.97,1.35-2.4,1.5-1.1,1.78s-2.3,3.32-2.65,3.59c-0.36,0.27-2.06,1.14-2.6,1.41-0.53,0.27-2.06,1.44-2.06,1.44s0.27,1.06,0.63,1.15c0.35,0.09,0.53,2.16,0.53,2.16l0.81,1.06,1.88-0.44,3.21,0.78,2.5,0.91s1.25,0.88,1.79,1.06c0.53,0.18,3.4-0.44,3.4-0.44s5.87-2.32,6.31-2.59c0.45-0.27,1.72-1.06,1.72-1.06s2.5-1.89,3.03-2.25c0.54-0.36,3.74-2.14,4.1-2.41,0.35-0.27,1.44-1.78,1.44-1.78l0.9-2.12s0.16-1.99,0.25-2.44,0.53-1.5,0.53-1.5l0.72-1.25,2.16-0.19,3.12,0.44,2.32,0.19s3.57,0.1,4.37-0.35c0.8-0.44,0.45-0.72,0.63-1.34,0.17-0.63-0.27-0.9-0.63-1.35-0.36-0.44-1-1.33-1.53-1.78-0.54-0.44-1.25-1.15-1.25-1.15s-2.31-4.22-2.31-4.75c0-0.54,0.81-1.15,2.15-1.69s3.91-0.97,3.91-0.97l2.06-1.19-0.09-2.65,0.47-1.78s1.16-2.8,1.25-3.07c0.09-0.26,1.51-2.93,1.68-3.56,0.18-0.62,0.62-1.79,1.07-2.59,0.44-0.81,1.62-1.68,2.15-2.03,0.54-0.36,1.68-1.91,2.13-2.44,0.44-0.54,1.09-2.22,1.09-2.22l-0.19-4.09s-2.13-2.42-2.4-3.22c-0.27-0.81,0.07-1.43,0.34-1.78,0.27-0.36,1.61-1.88,1.97-2.5,0.36-0.63,0.81-2.53,0.81-2.97,0-0.45,0.98-1.5,1.88-2.13,0.89-0.62,2.83-0.18,3.28,0s1.09,0.81,1.72,1.35c0.62,0.53,3.28,0.68,3.28,0.68s1.07-1.42,1.25-1.87,0.98-1.77,1.25-2.22,1.53-1.07,2.25-1.16c0.71-0.09,1.69,0.63,1.69,0.63s0.97,1.78,1.15,2.31c0.18,0.54,1.18,1.61,1.53,1.97,0.36,0.36,1.26,1.8,1.35,2.16,0.09,0.35,1.06,0.33,2.22,0.15s0.09-1.4,0.09-1.4v-2.16s-0.62-2.16-0.62-2.78c0-0.63,0.71-1.78,0.71-1.78s2.5-0.8,3.03-1.06c0.54-0.27-0.08-1.17,0.1-1.97,0.18-0.81,1.33-1.7,1.69-1.88,0.35-0.18,2.96-0.61,3.4-0.87,0.45-0.27,1.41-1.25,1.41-1.25l0.62-2.69,0.28-2.88s-0.02-0.11-0.03-0.12c0.09-0.06,0.32-0.22,0.32-0.22l1.31,0.19s0.6-0.58,1.31-0.94c0.72-0.36,0.79,0.03,0.97,0.03s0.68,1.11,0.81,1.47c0.14,0.36,0.36,1.26,0.41,1.53,0.04,0.27,1.38,0.68,1.56,0.72s1.55,0.47,1.81,0.56c0.27,0.09,1.66,1.08,1.97,1.44,0.32,0.36,1.04,0.45,2.38,0.94s1.53-0.28,1.53-0.28l0.65-0.63s0.23-1.4,0.32-1.94c0.09-0.53,0.72-0.87,0.72-0.87s1.51-1.22,1.87-1.63c0.36-0.4,0.5-0.87,0.5-0.87s0.34-2.99,0.16-3.13c-0.18-0.13-1.38-0.71-1.78-0.84-0.41-0.13-1.6-1.46-2-2.13-0.41-0.66,0.3-1.16,0.43-1.43,0.14-0.27,1.41-1.06,1.63-1.28,0.22-0.23,1.06-0.78,1.59-1,0.54-0.23,0.27-2.9,0.22-3.35-0.04-0.44-0.7-0.44-1.81-0.62-1.12-0.18-1.97-0.85-1.97-0.85s-1.52-1.52-2.19-2.28-0.22-2.76-0.22-3.03,0.17-4.1,0.13-4.9c-0.05-0.81,0.54-1.63,0.72-1.85s2.37-0.49,2.59-0.53,1.9-0.99,2.35-1.34c0.44-0.36,0.59-1.19,0.59-1.19s-0.37-1.3-0.5-1.75c-0.14-0.45,0.72-1.65,1.03-1.88,0.31-0.22,1.91-1.37,1.91-1.37s1.07-6.86,1.25-7.13c0.17-0.26-0.32-1.59-0.32-1.59s-1.19-3.62-1.28-3.84c-0.09-0.23-0.68-1.65-0.5-2.32s1.27-1.02,1.41-1.25c0.13-0.22,0.07-0.97-0.16-1.15-0.22-0.18-1.03-1.16-1.03-1.16s0.58-3.41,0.63-3.81c0.04-0.4,0.28-1.69,0.28-1.69l1.22-0.84s3.79-0.07,4.06-0.07,2.03-0.79,2.44-1.06c0.4-0.27,0.13-1.66,0-1.84-0.14-0.18-1.19-1.94-1.19-1.94h-2.28l-2.5,0.06-2.1-0.43-1.03-0.41s-2.49-0.25-2.72-0.25c-0.22,0-1.5-0.16-1.5-0.16l-0.65-0.25s-0.13-1.6-0.13-1.87,0.48-0.55,1.07-0.91c0.58-0.35,0.93-0.94,0.93-0.94s-0.17-0.98-0.43-1.34c-0.27-0.36-0.1-0.97-0.1-0.97s2.29-2.76,2.38-2.93c0.09-0.18,0.62-1.04,0.62-1.04s0.89-1.56,1.06-2.18c0.18-0.63-0.59-1.16-0.59-1.16s-3.42-4.04-3.78-4.44-1.14-1.64-1.31-1.9c-0.18-0.27-0.91-1.24-1-1.69s0.31-1.41,0.31-1.41l1.09-3.47-0.56-1.06s-1.07-0.96-1.16-1.09c-0.09-0.14-1-0.75-1-0.75s-0.63-0.55-0.5-0.91c0.14-0.36,1.36-0.56,1.63-0.56s2.31-0.69,2.31-0.69,1.39-0.56,1.56-0.78c0.18-0.22-0.03-1.16-0.03-1.16s-1.56-17.7-1.56-18.06-0.65-1.56-0.78-1.78c-0.14-0.22-2.19-2.34-2.19-2.34l-0.72-5.16h0.06s1.85,0.06,2.47,0.06c0.63,0,0.97-0.84,0.97-0.84l2.5-2.06,1.53-1.38s0.57-0.52,0.88-0.56c0.31-0.05,1.26,0.58,1.44,0.62,0.17,0.05,1.47,0.6,1.47,0.6s0.99-0.52,1.43-0.66c0.45-0.13,0.75-0.62,0.75-0.62l-0.31-5.94,4.16-2.16s0.93-1.1,0.93-1.28,0.57-1.87,0.57-1.87l4.47-3.1s1.78-2.23,2.18-2.5-0.03-0.62-0.03-0.62l-1.25-1.85s-1.07-1.29-1.78-1.47c-0.71-0.17-0.91-1.09-0.91-1.09l0.29-5-0.6-0.47-2.84-2.31-3.41-2.69-0.72-1.97-0.34-1.4-1.06-1.78,0.15-0.91,1.25-2.69-1.4-1.4-1.63-1.97-0.72,1.59s-1.43-0.53-2.5-0.53-1.06,1.44-1.06,1.44-1.95,0.71-2.84,1.25c-0.9,0.53-1.25,1.78-1.25,1.78s-1.45,1.25-2.16,1.25-2.14,0.01-3.03,0.19c-0.89,0.17-1.43,1.41-1.97,2.12-0.54,0.72-1.44,2.33-2.16,2.69-0.71,0.36-0.71,0.34-1.78,0.34s-0.16-0.7,0.38-2.31c0.53-1.61,1.95-1.79,2.31-2.5s0.72-1.78,0.72-1.78l2.5-0.91s0.54-3.02,1.44-3.37c0.89-0.36,3.75-0.53,3.75-0.53s1.22-1.63,1.4-2.35c0.18-0.71,1.44-1.58,1.97-2.65,0.54-1.08,0.72-1.79,0.72-2.5,0-0.72,0.91-1.82,0.91-1.82l2.5-2.12s1.58-1.6,1.93-2.31c0.36-0.72,2.16-1.97,2.16-1.97l2.16-1.97,2.31-2.5s0.19-1.44,0.19-2.16c0-0.71-0.72-1.78-0.72-1.78s-1.26-0.9-1.97-1.44c-0.72-0.53-1.78-0.7-1.78-1.59s0.16-0.72,0.34-1.44c0.18-0.71,0.72,0,0.72,0l1.44,1.1,0.15-1.25-0.15-2.35-0.53-1.97-2.69-0.68-1.78-1.1h-2.16c-0.71,0-0.52-0.69-0.87-1.4-0.36-0.72-0.37-1.62-0.91-2.69s-2.31-0.19-2.31-0.19l-1.78,0.91c-0.72,0.35-0.73,0.52-1.44,1.06-0.72,0.54-1.61-0.37-3.22-0.91-1.61-0.53-1.77,0.02-2.84,0.38-1.08,0.36,0.17,0.88,0.53,1.59,0.35,0.72,0,1.44,0,1.44l-2.35-0.19s-1.06-0.35-1.78-1.25c-0.71-0.89,0.19-1.06,0.19-1.06s1.25-1.43,1.25-2.5-0.72-1.25-0.72-1.25h-2.69c-1.25,0-1.96-0.17-3.03-0.34-1.07-0.18-1.25-0.37-1.97-1.44-0.71-1.07,0.57-0.53,0.57-0.53l1.4-1.25,1.25-0.72,2.69,0.34s0.9,0.56,1.97,0.38,0.19-0.72,0.19-0.72l-1.63-1.06s-1.77,0.34-2.84,0.34-2.16-0.72-2.16-0.72l-1.97-0.87s-1.41-1.45-2.12-1.63c-0.09-0.02-0.2-0.04-0.28-0.03zm-45.94,3.34c-0.85,0.32-1.23-0.03-1.5,0.82-0.27,0.84-0.34,0.96,0.16,1.18,0.49,0.23,0.87,0.53,1.4,0.44,0.54-0.09,1.24-0.47,1.06-1.09-0.17-0.63-1.12-1.35-1.12-1.35zm20.84,3.82c-0.33,0-0.47,0.12-0.94,0.56-0.62,0.58-1.62,1.37-1.71,1.9-0.09,0.54,0.12,0.96-0.19,1.54s-1.55,1.81-2,2.12-2.51,0.16-2.6,0.47c-0.08,0.31-0.37,0.52,0.04,0.87,0.4,0.36,2.91,0.63,3.72,0.54,0.8-0.09,3.3-0.3,3.74-0.35,0.45-0.04,0.71,0.28,0.66-0.43-0.04-0.72-0.72-1.36-0.4-1.85,0.31-0.49,0.6-0.65,0.78-0.97,0.17-0.31,0.49-1.06,0.31-1.47-0.18-0.4-0.72-0.95-0.72-1.53s-0.28-1.37-0.28-1.37c-0.18-0.01-0.3-0.04-0.41-0.03zm-45.53,6.62c-0.49,0-2.1,0.86-2.19,1.13-0.09,0.26-0.56,0.38,0.07,0.97,0.62,0.58,0.39,0.88,1.15,0.84,0.76-0.05,1.55-0.67,2.22-0.63,0.67,0.05,1,0.79,1.31,0.79,0.32,0,0.62-0.23,0.66-0.72s-0.42-0.89-0.59-1.07c-0.18-0.17-0.54-0.18-0.54-0.18-0.31-0.45-1.6-1.13-2.09-1.13zm-2.06,6.25c-0.54,0.18-1.01,0.45-1.5,0.63-0.49,0.17-0.81,0.17-1.13,0.43-0.31,0.27-0.72,0.46-0.72,0.82,0,0.35,0.15,0.5,0.6,0.81s0.52,0.62,1.19,0.62,1.89-0.5,2.03-0.81c0.13-0.31,0.48-0.94,0.53-1.25,0.04-0.31-1-1.25-1-1.25zm-51.31,9.13l-2.35,2.12-0.34,1.78,1.97,0.38,1.25,0.87h2.5l1.25-0.87v-1.78l-1.63-2.16-2.65-0.34zm59.09,4.4c-0.49,0.14-1.47,0.59-1.25,1.03,0.22,0.45,0.5,0.8,0.91,0.75,0.4-0.04,0.74-0.01,0.87-0.5,0.14-0.49-0.22-1.25-0.22-1.25l-0.31-0.03zm97.34,1.78c-0.09,0.01-0.18,0.07-0.28,0.22-0.38,0.6-0.53,1.69-0.4,2.1,0.12,0.41-0.42,0.87,0.12,1.31s0.62,1.22,1.53,1.25c0.92,0.03,1.9,0.47,2.63-0.06,0.72-0.54,1.43-1.69,1.65-2.19,0.22-0.51,0.32-1.22,0.07-1.53-0.26-0.32-0.62-0.81-1.13-0.88-0.5-0.06-1.19,0.16-1.19,0.16-1.07,0.31-0.99,0.66-1.78,0.31-0.59-0.26-0.92-0.72-1.22-0.69zm-135.37,0.22l-1.97,0.19-1.44,1.44,0.53,1.06,1.63-0.91,1.44,0.57,0.34,1.59,1.25,0.34,0.72-0.87-0.53-1.06-1.97-2.35zm27.09,1.13c-0.49,0.01-1.04,0.1-0.9,0.5,0.17,0.53,1.09,0.75,2.03,0.75s2.97,0.08,3.06,0.44c0.09,0.35,0.68,1.56,0.91,1.65,0.22,0.09,0.92,0.13,0.97-0.41,0.04-0.53-0.44-1.13-0.76-1.4-0.31-0.27-2.09-1.25-2.09-1.25-0.45-0.09-2.24-0.28-2.78-0.28-0.13,0-0.27-0.01-0.44,0zm10.31,1.12c-0.71,0.23-0.93,0.25-0.93,0.88,0,0.62-0.1,1.06,0.43,1.15,0.54,0.09,0.85,0.33,1.26,0.07,0.4-0.27,0.59-0.91,0.37-1.22s-1.13-0.88-1.13-0.88zm-44.71,1.16l-1.44,1.25,0.72,0.87,1.78-1.06-1.06-1.06zm6.4,2.31v1.78l2.35-0.53v-1.25h-2.35zm133.35,1.5c-1.05,0.29-1.25,0.28-2.07,0.6-0.82,0.31-1.49,0.24-1.87,0.74-0.38,0.51-0.44,0.28-0.66,1.29s-0.69,0.99,0.1,1.31c0.79,0.31,1.39,0.29,2.31-0.41,0.91-0.69,1.71-1.09,2.19-1.65,0.47-0.57,0.84-1.19,0.84-1.35s-0.84-0.53-0.84-0.53zm-122.41,0.5c-0.4,0.63-0.65,1.16-0.87,1.56-0.23,0.41-0.68,0.77-1.13,1.66s-0.81,1.32-0.81,2.03c0,0.72,0.24,1.18,0.68,1.41,0.45,0.22,0.34,0.5,0.57,0.5,0.22,0,0.82,0.09,1.31,0s1.03-0.19,1.03-0.5v-1.88c0-0.53-0.31-3.37-0.31-3.59s-0.47-1.19-0.47-1.19zm-16.47,0.69l-1.06,0.87v1.25l1.44,0.57,0.87-1.25-1.25-1.44z",
          name: "Красноярский край"
        },
        tm: {
          path:
            "m454.64,359.43,1.25,3.2143,1.25,2.3214s-0.53571,2.3214-0.71428,3.0357c-0.17857,0.71429-1.6071,3.0357-1.6071,3.0357s0.53571,1.25,1.6071,1.9643c1.0714,0.71429,5.8929,1.7857,5.8929,1.7857l5.3571,0.17857s3.75,0.89285,4.1071,1.6071c0.35714,0.71429,0.89286,1.0714,0.89286,2.1429,0,1.0714,0.35714,4.2857,0.35714,4.2857s1.25,0.35714,2.6786,0.35714,3.0357,0.35715,3.0357,0.35715,0.35714,2.1428,0.35714,2.6786c0,0.53571-0.89286,1.7857-1.9643,1.7857s-3.75,1.6072-3.75,1.6072-1.25,2.6786-1.25,3.75-0.89285,3.5714-0.53571,4.2857c0.35714,0.71429,4.4643,1.7857,5.1786,2.1429,0.71429,0.35714,3.2143,2.6786,3.2143,2.6786s-0.71429,1.6071-1.6072,2.6786c-0.89285,1.0714-4.1071,3.0357-5.3571,4.6429-1.25,1.6071-0.35714,2.8571-0.35714,2.8571l-0.71429,1.6071-3.2143,0.53572-3.2143,0.35714-1.4286-1.6071-1.9643-0.17857-4.66-0.57h-2.3214l-1.25,1.0714s-2.1429,1.0714-3.2143,1.25c-1.0714,0.17857-5.3571,1.25-6.0714,1.25-0.71428,0-6.4286,0.71429-6.4286,0.71429l-3.3928,1.4286h-2.3214l-0.35715-1.9643,0.71429-2.1429-0.35714-2.3214,1.7857-2.3214-0.53571-1.4286s-1.0714-0.17858-1.9643,0.53571c-0.89286,0.71429-4.4643,1.0714-4.4643,1.0714l-4.2857-0.17857-1.9643-2.3214-0.89286-3.0357s-1.25-1.0714-2.6786-0.71428c-1.4286,0.35714-1.6072,1.25-2.6786,1.25s-2.5,0-3.0357-0.89286c-0.53571-0.89286-0.89285-3.0357-0.89285-3.0357l-0.9-2.33s-1.6071-0.89286-2.5-1.6071c-0.89286-0.71429-3.2143-2.3214-3.2143-2.3214l-5.1786-2.3214-4.2857-1.9643-4.6429-1.7857-2.6786-1.0714-1.7857-2.5v-3.0357l1.6072-2.8572,0.35714-1.7857-0.53571-2.3214,1.25-3.0357,0.71428-3.3929,1.9643-1.0714,3.3928-2.8571s0-2.1429,0.71429-2.3214c0.71429-0.17857,5.7143-1.6071,5.7143-1.6071l1.9643-1.7857,1.25-2.6786,2.5-1.6071,1.6071-3.2143s1.0714-1.0714,1.7857-1.7857c0.71428-0.71429,2.1428-1.4286,2.1428-1.4286l1.9643-0.35715,2.1429,1.7857,2.1428,1.0714,2.5,0.35714,2.8572,1.4286,1.0714,1.6071,3.0357,0.89286h3.3929l2.1428,0.35714,1.25,1.6072,2.6786,0.71428,2.3214,0.71429,2.1429,1.7857,1.25-0.89286,1.7857-0.53571,2.1428-1.4286,2.1429-0.17857,1.6071,0.71428,1.7857,0.89286z",
          name: "Томская область"
        },
        nv: {
          path:
            "m371.43,421.57,4.1071,0.71429l4.4643-0.17858c1.25-0.17857,2.1429-0.71428,2.1429-0.71428l-2.14,3.4h-3.0357l-0.89285,2.1428s1.0714,1.9643,1.7857,2.5c0.71429,0.53572,2.6786,3.0357,2.6786,3.0357l0.53572,2.1428,2.3214,0.35715h1.4286s2.6786,0.35714,3.3928,0.35714c0.71429,0,0.89286,0,1.9643-0.35714,1.0714-0.35715,3.2143-0.71429,4.6429-0.71429h3.5714s2.6786,0.17857,3.5714-0.35714c0.89286-0.53572,0.89286-1.0714,2.3214-1.25,1.4286-0.17857,3.0357-0.17857,3.9286-0.17857,0.89286,0,1.9643-0.17857,1.9643-0.17857s0,1.6071,0.89286,2.1428c0.89285,0.53572,4.1071,2.6786,4.1071,2.6786l0.71428,0.71429c0.17858,0.71429-0.17857,2.5-0.17857,3.2143,0,0.71428-1.0714,0.71428-0.17857,1.6071,0.89286,0.89286,1.9643,1.4286,1.9643,1.4286l2.3214-1.9643,2.3214-2.3214s2.1429-0.53572,2.8572-0.53572c0.71428,0,3.0357,0,3.75-0.17857,0.71428-0.17857,1.4286-0.71429,2.6786-0.17857,1.25,0.53571,2.3214,0.71428,3.3929,0.71428,1.0714,0,3.5714-1.25,3.5714-1.25s1.7857-2.1428,1.9643-2.8571c0.21-0.7-0.33-4.45-0.33-4.45v-3.75c0-0.71429,0.71428-2.3214,1.25-2.6786,0.53571-0.35714,1.7857-0.89285,1.7857-1.7857,0-0.89286-0.89286-1.6071-0.89286-1.6071s-0.89285-0.53572-0.89285-1.4286c0-0.89286,0.35714-3.2143-0.53572-3.0357-0.89285,0.17857-4.1071,1.7857-4.1071,1.7857s0,0.17857-1.4286,0.17857-2.5,0-2.6786-0.71429c-0.17857-0.71428,0.35714-5,0.35714-5l0.53571-2.6786,0.17858-2.1429-2.8572,1.4286s-1.6071,0.53572-2.5,0.71429c-0.9,0.18-4.47-0.71-4.47-0.71l-2.1429-0.71428-1.4286-2.1429-1.4286-2.8571s-2.5,0.53571-3.2143,0.71428c-0.71428,0.17858-1.9643,0.53572-1.9643,0.53572l-2.3214-1.25-1.0714-3.3929v-1.25l-3.0357-1.7857s-1.9643-1.6072-2.6786-2.1429c-0.71428-0.53571-3.3928-1.7857-3.3928-1.7857s-3.3929-1.25-4.1072-1.6072c-0.71428-0.35714-1.9643-1.25-2.6786-1.6071-0.71428-0.35714-3.9286-1.4286-3.9286-1.4286l-1.9643,0.17857s-0.35715,1.0714-0.53572,1.9643c-0.17857,0.89285-1.0714,2.3214-1.0714,2.3214l-1.4286,1.0714-0.89286,1.6072,0.17858,2.1428-0.71429,1.4286h-3.2143l-2.5-0.35714-2.1428,0.89286-2.1429,2.3214-1.4286,1.9643-0.71429,2.6786,0.71429,1.9643,1.7857,2.6786v1.7857l-2.1428,3.5714z",
          name: "Новосибирская область"
        },
        al: {
          path:
            "m381.25,435.14,1.7857,5,1.7857,5.1786,1.6071,6.7857,0.89286,8.5714,0.35714,8.2143,0.35714,2.8571,2.3214-0.53571,1.7857-0.53572,0.89285-0.53571,0.17857-1.9643,1.25-1.6071,1.25-0.35714,1.7857,0.53571,0.89286,1.9643,0.89285,2.8571,2.3214,2.8571,1.9643,1.6071,4.6428,0,3.3929-0.35714,2.5-0.89286,2.3214,0,3.3929,1.4286,1.0714,1.9643,2.3214,0.53572,2.3214-0.53572-0.17857-1.4286-1.6071-1.0714-1.0714-0.89286,0.35714-1.6071,0.71429-0.35714,2.5-0.35714,4.4643-0.71429,3.75-0.17857,2.6786-0.71429,2.3214-1.9643,1.0714-1.9643s0.53572-0.71428,1.25-0.71428c0.71429,0,3.3929-0.17858,3.3929-0.17858l1.9643-0.17857,1.0714-1.7857s0.53572-2.1429,1.25-2.5c0.71429-0.35714,0.89286-2.3214,0.89286-2.3214l0.71429-2.1429-0.35715-1.0714-0.71428-1.0714,0.71428-0.89286,1.25-0.53571-0.17857-1.0714-1.4286-1.6072-1.0714-1.0714c-0.17857-0.71429-0.89286-2.8572-0.89286-2.8572l-1.7857-1.7857-0.17857-0.89286-0.53572-2.1429-1.6071-1.4286-2.5-1.9643-1.74-1.79s-1.6072,1.0714-2.3214,1.4286c-0.71429,0.35715-1.7857,0.71429-1.7857,0.71429l-2.5,0.17857-2.5-0.35714-3.0357-0.17857-4.8214,0.71428-2.5,1.6072-1.6071,1.7857-1.0714,0.71429-0.89286,0.35714-1.4286-1.25-0.35714-0.89286,0.35714-0.89286,0.17857-1.7857-0.17857-1.4286-2.3214-1.6071-1.9643-1.25-1.0714-1.25-0.17857-0.89286-1.9643-0.17857-4.2857,0.17857-1.25,1.25-2.1429,0.53571-3.75-0.53571-4.2857,0.17857-2.6786,1.25h-2.5l-3.3929-0.17857z",
          name: "Алтайский край"
        },
        km: {
          path:
            "m472.14,414.79-0.71428,2.3214,0.89286,1.6072,2.5,1.4286,1.7857,1.6071,1.25,2.5,0.17857,0.89286s-0.89286,1.4286-1.6071,2.1429c-0.71429,0.71428-4.2857,2.3214-4.2857,2.3214l-1.7857,1.7857-1.7857,1.7857v1.6072l1.0714,1.7857,0.17858,1.7857-1.9643,2.5s-1.25,1.0714-1.0714,1.7857c0.17857,0.71428,1.0714,1.4286,1.7857,1.6071,0.71428,0.17857,2.8571,0.89286,2.8571,0.89286l-0.71429,1.4286-1.25,1.7857-0.53571,1.6072-1.7857,0.71428-1.4286,1.6072,0.71429,1.25,1.25,1.25-0.89286,2.5-1.25,1.6071,0.53572,1.25,1.7857,1.7857-0.35714,1.6072-1.6072,1.9643-2.5,2.1429h-1.9643l-0.71429-1.7857-1.9643-1.25-2.6786-0.35714-1.4286,1.0714-2.1428-1.4286-0.71429-2.3214-1.0714-0.71429,0.17857-2.5-0.53571-2.5,0.89286-1.9643,0.71428-1.6071-2.1428-2.6786-1.6072-2.6786-1.25-1.4286-0.71428-2.3214-0.89286-1.7857-2.3214-2.1429-1.7857-1.6071-0.71429-1.25v-1.7857l-0.35714-4.6428,0.17857-2.5,0.71429-2.3214,1.25-1.4286,0.71428-1.25-1.4286-1.9643v-0.89286l-0.35714-2.5,1.6071-0.35714,4.4643-0.53571,2.5-0.89286,3.0357-0.89286,1.0714-0.35714,0.71428-0.89286h1.6072,1.9643,2.5l1.7857,0.35715,1.4286,0.35714,0.89286,0.89286,1.9643,0.53571,1.6071-0.17857,2.5-0.71429z",
          name: "Кемеровская область"
        },
        lt: {
          path:
            "m422.32,478.89-0.44643,2.1428s-0.17857,1.875,0,2.5893c0.17857,0.71429,1.1607,2.3214,1.1607,2.3214l3.3036,0.89286s0.98215,1.1607,1.0714,1.6071c0.0893,0.44643,0.0893,3.3036,0.0893,3.3036s0.17857,0.89286,0.53571,1.6071c0.35715,0.71429,1.25,1.875,1.7857,2.2322,0.53571,0.35714,1.6071,1.25,2.4107,1.3393,0.80357,0.0893,3.125,0.0893,3.5714,0.0893,0.44643,0,4.0179,0.0893,4.0179,0.0893s1.0714,0.53572,1.6071,0.89286c0.53571,0.35714,1.4286,1.25,1.7857,1.875,0.35715,0.625,1.5179,1.6964,2.0536,1.9643,0.53571,0.26785,1.1607,0.80357,1.7857,1.1607,0.625,0.35714,1.6964,0.71429,2.4107,0.80357,0.71429,0.0893,2.9464-0.44643,3.3929-0.71428,0.44643-0.26786,2.3214-0.89286,3.4821-0.89286s4.7322-0.35714,5-0.44643c0.26786-0.0893,3.5714-1.3393,4.1964-1.3393s1.4286-0.89285,1.6071-1.25c0.17858-0.35714,0.625-1.9643,0.17858-2.7678-0.44643-0.80357-0.80358-1.0714-1.4286-1.4286-0.625-0.35715-1.4286-1.25-1.25-1.7857,0.17858-0.53571,1.9643-1.1607,2.4107-1.1607,0.44643,0,2.5,1.0714,2.5,0.26785,0-0.80357-1.6964-2.2321-1.6964-2.2321s-0.98214-1.3393-1.25-1.7857c-0.26786-0.44643-1.875-1.9643-1.875-1.9643s-2.2321-2.7679-2.0536-4.1071c0.17857-1.3393-0.0893-3.3929-0.0893-3.3929s-0.625-1.3393-0.71428-1.6964c-0.0893-0.35714-1.3393-0.17857-1.3393-0.17857l-1.5179,1.5179s-1.4286-0.26786-1.5178-0.80357c-0.0893-0.53572-0.71429-2.5893-0.71429-2.5893s-0.35714-1.7857-0.44643-2.1429c-0.0893-0.35714-0.17857-1.9643-0.17857-1.9643l1.6964-1.3393,2.8571-1.3393,0.35715-1.1607-1.3393-1.6071-0.80357-0.625-2.1429-0.53571-1.9643,0.98214s-1.0714-0.625-1.4286-0.80357c-0.35714-0.17857-1.0714-0.89286-1.0714-0.89286l-0.89286-1.7857s0-1.0714-0.71429-0.89286c-0.71428,0.17857-0.89285,0.71428-0.89285,0.71428s-1.1607,1.1607-1.1607,1.5179c0,0.35714-0.625,1.4286-0.625,1.4286l-0.98214,1.0714s-1.6071,0.44643-1.9643,0.44643h-3.0357c-0.35714,0-1.1607,0.71429-1.5179,1.0714-0.35714,0.35714-1.1607,1.9643-1.1607,1.9643l-1.5179,1.0714-0.98214,0.625-2.3214,0.71429h-2.3214l-4.1071,0.71428-4.1071,0.625-1.0714,0.625-0.0893,0.98215s0.0893,0.89285,0.53572,0.98214c0.44642,0.0893,1.6071,0.80357,1.6071,0.80357l0.44643,0.89286-0.0893,0.89286-1.875,0.625z",
          name: "Республика Алтай"
        },
        tv: {
          path:
            "m461.96,477.02,0.26786-1.6964s0.89286-0.625,1.6071-0.625c0.71429,0,1.6964,0.71428,2.4107,0.89286,0.71428,0.17857,2.7678,0.71428,3.0357,0.71428,0.26786,0,1.0714-0.80357,1.3393-1.25,0.26785-0.44643,1.9643-2.6786,1.9643-2.6786s0-1.25,0.625-1.6071c0.625-0.35715,1.875-0.35715,2.3214-0.35715,0.44643,0,1.6071-0.17857,2.3214,0.26786,0.71429,0.44643,1.1607,3.0357,1.1607,3.0357s0.89286,0.89285,1.1607,0.89285c0.26786,0,2.1429-0.80357,2.1429-0.80357s1.4286,0.17857,1.7857,0.44643c0.35714,0.26786,3.0357,0.89286,3.0357,0.89286s1.6964,1.6071,2.2322,1.6071c0.53571,0,1.6964,0.26786,2.6786-0.0893,0.98214-0.35714,2.8571-0.80357,3.3929-1.25,0.53571-0.44642,5.5357-1.9643,5.9821-2.5,0.44643-0.53571,7.0536-5.9821,7.0536-5.9821l2.1429-2.8571s-0.17857-1.875-0.17857-2.9464,1.0714-2.3214,1.4286-2.5893c0.35714-0.26785,2.8571,0.0893,3.3036,0.17858,0.44643,0.0893,4.375,0.89285,4.7321,0.80357,0.35714-0.0893,4.2857-0.44643,4.2857-0.44643l2.4107-2.2321s1.5179-0.35715,2.4107,0.0893c0.89286,0.44643,3.6607,2.5,4.1964,2.7679,0.53572,0.26786,3.75,2.3214,3.75,2.3214l1.6072,1.5178s1.25,0.71429,1.7857,0.44643c0.53571-0.26785,2.3214-0.89285,2.3214-0.89285l1.6071,0.53571,0.35714,1.25s0.53572,0.89286,0.53572,1.25-0.89286,1.6071-0.89286,1.6071-0.71428,0.53572-0.80357,1.1607c-0.0893,0.625-0.26786,4.1071-0.26786,4.1071s-0.0893,2.3214-0.0893,2.7679c0,0.44643-0.71429,2.1428-0.71429,2.1428l-1.4286,2.4107s-1.5179,1.3393-1.875,1.875c-0.35714,0.53571-2.2321,1.3393-2.4107,1.6964-0.17858,0.35714-0.71429,1.875-0.71429,1.875s-0.71429,1.875-0.71429,2.4107c0,0.53572-0.0893,3.3929-0.0893,3.9286,0,0.53572,0.53571,2.5,1.0714,3.2143,0.53571,0.71428,1.25,1.6071,1.25,2.0536,0,0.44643-0.80357,2.3214-1.1607,2.7679-0.35714,0.44643-4.8214,4.1964-4.8214,4.1964l-2.0536,1.25-2.1428,0.17857s-1.7857-0.98215-2.1429-0.89286c-0.35714,0.0893-2.3214,0.17857-2.6786,0.17857-0.35715,0-1.7857-0.89286-1.7857-0.89286s-1.6964-0.35714-2.1428-0.625c-0.44643-0.26785-1.7857-1.1607-1.7857-1.1607s-2.7679-0.26786-3.2143-0.26786c-0.44643,0-2.8572-0.17857-3.2143-0.53571l-2.0536-2.0536s-0.71429-1.4286-0.80357-1.9643c-0.0893-0.53571-0.17857-2.5-0.17857-2.5s-0.80358-0.80357-1.3393-1.25c-0.53571-0.44643-2.1429-0.89286-2.9464-0.89286-0.80357,0-3.9286,0.17858-3.9286,0.17858s-1.9643,0.53571-2.2321,0.625c-0.26786,0.0893-1.25,0.71428-1.875,0.80357-0.625,0.0893-2.0536,0.0893-1.9643-0.80357,0.0893-0.89286,1.25-1.6964,1.3393-2.0536,0.0893-0.35714-0.0893-1.0714-0.71429-1.3393-0.625-0.26786-2.1429-0.17857-3.0357,0.0893-0.89286,0.26786-2.3214,0.80358-2.8572,0.89286-0.53571,0.0893-3.3928,0.71429-3.3928,0.71429s-2.1429,0.89285-2.6786,1.0714c-0.53572,0.17857-3.8393,1.1607-3.8393,1.1607l-3.0357,1.5179-2.4107,1.1607-2.5893-0.26786-2.1429-0.98214-1.5179-0.71428-1.25-1.25c0-0.44643,0.35714-0.98215,0.35714-0.98215l2.4107-0.44643,1.7857,0.53572s1.25-0.35714,0.17857-1.0714c-1.0714-0.71429-4.4643-5.0893-4.4643-5.0893l-1.48-2.44s-1.0714-1.4286-1.0714-1.7857v-2.5893z",
          name: "Республика Тыва"
        },
        hk: {
          path:
            "m470.27,432.11c0.53572,0.35715,1.9643,1.875,1.9643,1.875l1.3393,1.6072s0.26785,0.625,1.1607,0.80357c0.89286,0.17857,2.0536,0.17857,2.0536,0.17857s0.35714-0.35714,0.80357-0.80357,0.625-0.98214,0.98215-1.25c0.35714-0.26786,0.89285-0.89286,1.3393-0.80357,0.44643,0.0893,0.71429,0.26785,1.3393,0.71428,0.625,0.44643,1.3393,1.25,2.2321,1.25,0.89286,0,2.5,0.80357,2.5,0.80357s0.44643,1.875,0.625,2.3214c0.17857,0.44643,0.53571,2.9464,0.53571,2.9464s0.35715,1.5179,0.71429,2.4107c0.35714,0.89285,0.98214,2.0536,1.0714,2.4107,0.0893,0.35714-0.0893,3.125-0.17857,3.3929-0.0893,0.26785-0.80357,1.875-0.89286,2.2321-0.0893,0.35714,0,2.5893,0,2.5893l1.5179,1.5179,0.625,1.875s-1.25,1.4286-1.4286,1.6964c-0.17858,0.26786-2.2322,1.3393-2.5893,1.875-0.35714,0.53571-1.4286,3.0357-1.4286,3.0357s-1.6071,1.9643-2.1429,2.2322c-0.53571,0.26785-2.8571,1.0714-3.125,1.5178-0.26786,0.44643-1.6964,1.6964-1.6964,1.6964l-2.7678,0.0893s-1.3393,0.17857-1.6072,0.625c-0.26785,0.44643-0.53571,1.4286-1.0714,1.875-0.53571,0.44643-1.0714,1.25-1.1607,1.6071-0.0893,0.35714-0.89286,1.0714-0.89286,1.0714s0.0893,0.71429-1.0714,0.625c-1.1607-0.0893-2.9464-0.35714-2.9464-0.35714l-1.7857-1.1607-1.6071,0.44643-0.625,0.80357-0.26786,0.89286-2.5,1.0714s-0.625,0.89286-1.1607,0.35714c-0.53572-0.53571-1.25-2.3214-1.25-2.3214l-0.625-2.5893v-1.5179s0.17857-1.0714,0.53571-1.25c0.35714-0.17857,2.5-1.6071,2.5-1.6071s1.3393-0.98215,1.6964-1.0714c0.35714-0.0893,2.1429-0.44643,2.1429-0.44643l1.9643-1.0714,1.5179-2.0536,1.3393-1.0714-0.44643-1.6071s-1.25-1.25-1.4286-1.6071c-0.17858-0.35715-0.44643-1.25-0.44643-1.25l1.6071-2.2322,0.0893-1.875s-1.0714-1.1607-1.1607-1.5178c-0.0893-0.35715-0.0893-1.25-0.0893-1.25l2.5893-1.5179,1.0714-1.875,1.1607-1.9643,0.53572-1.6964-3.5714-1.1607s-0.89286-1.25-0.71429-1.7857c0.17858-0.53572,1.7857-2.4107,1.7857-2.4107s0.89286-1.875,0.89286-2.3214c0-0.44642-1.0714-2.8571-1.0714-2.8571s0-0.71428,0.26785-1.1607c0.26786-0.44643,1.25-0.98215,1.25-0.98215z",
          name: "Республика Хакасия"
        },
        ir: {
          path:
            "M599.41,325.78c-0.12,0.03-0.22,0.12-0.22,0.34,0,0.45,0.53,1.54,0.53,1.54l0.37,1.06s-0.26,0.88-0.62,1.06-1.78,0.63-1.78,0.63l-2.69,0.09s-1.61,0.26-1.88,0.44c-0.26,0.18-0.9,0.73-0.9,1.09s-0.44,1.96-0.53,2.31c-0.09,0.36-0.16,1.97-0.16,1.97s0.18,0.78,0.63,1.41c0.44,0.62,0.43,1.81,0.43,1.81l-1.25,1.16s0.26,1.67,0.35,2.03,1,3.4,1,3.4l0.43,2.5s-0.28,1.42-0.28,1.69-0.96,4.57-0.96,4.57-0.09,0.98-0.54,1.24c-0.44,0.27-2.06,1.88-2.06,1.88s-0.19,0.99-0.19,1.34c0,0.36,0.37,1.06,0.19,1.5-0.18,0.45-1.97,1.72-1.97,1.72l-2.59,0.72-1.31,0.88-0.29,3.84-0.09,2.22v1.81c0,0.36,0.27,1.34,0.72,1.78,0.45,0.45,2.16,1.97,2.16,1.97l2.21,0.53,1.16,0.78,0.1,2.25s-0.37,1.33-0.82,1.5c-0.44,0.18-2.75,1.82-2.75,1.82l-0.53,1.15,0.97,1.16,1.97,1.59s0.78,0.1,0.87,0.72c0.09,0.63-0.15,2.6-0.15,2.6l-0.47,1.43-1.25,1.07-1.41,1.43-0.19,1.6-1.24,0.81-2.79-0.28-1.59-1.35-1.78-0.68-2.25-0.63s-0.45-0.74-0.63-1.19c-0.17-0.44-0.34-1.68-0.34-1.68l-1.25-0.72-1.87,1-1.26,0.09-0.18,1.69-0.35,2.41-0.53,1.53-0.9,0.97-1.6,0.53s-1.89,0.28-2.25,0.37c-0.35,0.09-1.34,1.41-1.34,1.41s-0.53,0.8-0.44,1.15c0.09,0.36,0.19,1.25,0.19,1.25l-1.16,0.91-2.06,0.81s-0.44,0.9-0.44,1.25c0,0.36,0.16,1.97,0.16,1.97l0.37,1.5,0.1,1.63s0.7,0.7,0.43,1.06c-0.26,0.36-2.78,0.62-2.78,0.62l-1.93-2.78-1-1.5-1.07-2.34-1.06-0.69h-1.72l-1.59,1.69s-0.89,0.81-1.16,1.44c-0.27,0.62,0.01,1.78-1.15,1.78s-3.22-0.38-3.22-0.38l-1.25-1.15-1.97-0.44-1.34-0.19s-0.62,0.64-0.97,0.91c-0.36,0.27-1.35,1.25-1.35,1.25v0.62l-0.72,1.88-1.15,2.22-0.81,0.9-0.29,1.35,0.63,1.68s0.45,0.9,0.81,1.25c0.36,0.36,0.63,0.35,0.72,0.97,0.09,0.63,0.19,2.6,0.19,2.6l-0.38,2.4-0.97,1.88s-1.88,1.79-2.15,2.06-2.13,1.61-2.13,1.97-1.62,4.19-1.62,4.19l-1.25,2.25s-0.69,2.11-0.78,2.56-0.63,3.59-0.63,3.59-0.09,1.33-0.62,1.6c-0.54,0.26-3.69,0.81-3.69,0.81s-2.12,1.07-2.56,1.34c-0.45,0.27-0.72,0.63-0.72,0.63s-0.19,0.52-0.1,0.87c0.09,0.36,1.16,2.25,1.16,2.25l1.44,2.66,1.06,0.56,0.97,1.06,1.09,1.69v0.81l1.25-0.43s0.9-0.91,1.25-1c0.36-0.09,1.78,0.28,1.78,0.28l1.44,0.87s1.43,0.91,1.78,1c0.36,0.09,2.03,1.41,2.03,1.41l4.32,2.87s0.34,0.82,1.06,0.82c0.71,0,2.41-0.38,2.41-0.38l1.78-0.34,1.06,1.15,0.28,1.16,0.28,1.53,2.56-0.81,2.44-2.41s2.14-2.16,3.13-2.34c0.98-0.18,2.12,1.19,2.12,1.19s0.72,1.58,1.25,2.03c0.54,0.44,2.43,2.32,2.78,2.59,0.36,0.27,3.03,1.53,3.03,1.53l2.22,2.66c0.45,0.53,2.52,3.22,2.97,3.22s2.84,0.18,3.38,0.09c0.53-0.09,1.96,0.63,2.5,1.25,0.53,0.63,1.78,2.69,1.78,2.69s1.27,1.69,1.62,1.78c0.36,0.09,1.16,1.88,1.16,1.88s0.89,1.62,1.25,1.53,2.31-0.63,2.31-0.63,0.73,0.15,0.91,0.69c0.18,0.53,0.87,2.59,0.87,2.59s1.18,0.62,1.53,0.53c0.36-0.09,1.88-1.25,1.88-1.25s1.77-0.26,2.12-0.43c0.36-0.18,1.44-0.82,0.82-1.44-0.05-0.04-0.11-0.06-0.16-0.09,0.05-0.01,0.34-0.07,0.34-0.07l1.69-0.62,8.75-2.88s1-1.76,1-2.03,0.63-2.06,0.63-2.06l0.06-2.06,0.81-0.82,1.78-0.96,2.25-0.82,1.16-1.68,1.06-0.82,5.44-2.59,1.62-1.31,0.82-1.1,0.62-2.5,1.94-1.15s1.27-0.9,1.62-1.35c0.36-0.44,0.35-0.97,0.35-0.97l-0.63-0.81-1.25-1.25-0.34-0.81s0.18-0.96,0.62-1.41c0.45-0.44,0.71-0.63,1.07-0.72,0.35-0.09,1.25,0.35,1.25,0.35l1,1.09,0.87-0.47,0.63-1.78s0.81-2.14,0.9-2.5,0.25-1.69,0.25-1.69-0.25-3.05-0.25-3.5v-2.5s0.44-4.01,0.53-4.37,0.35-2.13,0.35-2.13l-0.1-1.87s-0.44-1.17-0.62-1.44-0.16-0.81-0.16-0.81,0.63-1.05,0.72-1.41c0.09-0.35-0.37-0.81-0.37-0.81s-0.54-0.71-0.72-1.06c-0.18-0.36-0.88,0.15-0.88,0.15l-1.44,0.91s-0.79,1.26-1.15,1.53-0.44,1.31-0.44,1.31l-0.28,4.38-0.81,1.34-1.53-0.09c-0.34-0.63-0.73-1.32-0.79-1.6-0.08-0.44-0.43-2.67-0.34-3.65s0.97-4.38,0.97-4.38l1.25-1.25s0.09-1.52-0.53-2.06c-0.63-0.53-1.87-1.07-2.41-1.34-0.53-0.27-1.72-1.35-1.72-1.97,0-0.63,0.92-1.77,1.19-2.13,0.27-0.35,3.93-1.51,4.28-1.78,0.36-0.27,3.57-2.15,3.57-2.15l3.65-1.07,2.78,0.25,2.13-0.34,1.34-2.5,2.88-0.81s1.87,1.25,2.4,1.25c0.54,0,2.22-0.72,2.22-0.72s1.07,0.64,1.25,1,1.63,1.34,1.63,1.34l1.93-0.37s1.35-0.44,2.07-0.35c0.71,0.09,1.7,0.98,2.06,1.07s2.75-0.72,2.75-0.72l1.09-1.5,2.5-1.16s1.35-1.08,1.35-1.53,0.15-3.22,0.15-3.22,1.25-0.61,1.88-0.97c0.62-0.35,2.15-0.18,2.15-0.18s0.17-1.34,0.35-1.79c0.18-0.44,1.33-1.34,1.78-1.43s2.44,0.37,2.44,0.37l1.15,0.97-1.34,1.44-0.72,1.15,0.72,0.72s2.31-0.45,2.94-0.72c0.62-0.26,2.24-0.44,2.78-0.53,0.53-0.09,2.84-1.15,2.84-1.15s0.91-1.08,0.91-1.44-0.2-1.71-0.38-2.16c-0.18-0.44-2.21-1.14-2.65-1.59-0.45-0.45-0.54-2.58-0.72-2.94s-0.9-1.9-0.63-2.44c0.27-0.53,1.06-1.78,1.06-1.78l-0.62-2.5s-0.01-2.48,0.34-2.84c0.36-0.36,2.07-1,2.07-1l2.93,0.81s0.9,1.15,1.35,1.06c0.44-0.09,2.15-0.53,2.15-0.53l0.25-3.56-0.87-1.16s-1.27-1.42-1.63-1.68c-0.35-0.27-1.25-1.25-1.25-1.25l-1.68-2.97-0.25-2.6-0.72-1.68-2.25-0.54-1.78,0.97-3.13,1.53-1.97,0.44-0.72-0.72-0.78-2.84-1-1.59-2.75-2.35-2.34-1.68-2.66-0.91-2.78-0.06s-2.49,0.8-2.84,1.15c-0.36,0.36-1.45,1.52-1.72,1.88-0.27,0.35-0.88,2.5-0.88,2.5l-0.28,2.12v2.5s-0.17,1.36-0.43,1.72c-0.27,0.36-3.94,2.03-3.94,2.03l-1.16,1.72-0.19,2.66-0.97,2.25-2.15,2.22s-0.6,0.63-0.69,0.09-0.62-2.22-0.62-2.22l-2.16-2.34s-0.44-1.23-1.06-0.78c-0.63,0.44-1.63,1.31-1.63,1.31l-3.28,1s-0.89,0.43-1.25,0.87c-0.36,0.45-2.97,0.72-2.97,0.72l-2.03,0.28-2.16,2.5s-0.62,1.26-1.24,0.82c-0.63-0.45-2.22-2.35-2.22-2.35l-0.82-1.59-0.53-2.94,0.16-5.56-0.06-2.56,1.5-2.6,1.87-3.03s0.44-1.61,0.44-2.06-0.53-3.03-0.53-3.03l-2.03-2.25-4.94-3.66s-0.63-0.71-0.63-1.25c0-0.53,0.1-2.31,0.1-2.31l1.15-1.97s0.63-0.35,0-1.06c-0.62-0.72-3.18-4.57-3.18-4.57l0.15-5.34s0.02-0.65-0.34-1.09c-0.36-0.45-2.59-3.28-2.59-3.28l-1.54-1.88s-0.24-0.62-0.68-0.62c-0.45,0-2.16,0.68-2.16,0.68s-1.17,0.82-1.44,0.29c-0.27-0.54-0.25-2.6-0.25-2.6s-0.29-1.16,0.16-1.25,1.62-0.44,1.62-0.44h1.5l0.29-1.43-1.79-1.97-1.53-1.35-1.4-0.06s-0.14-0.03-0.25,0z",
          name: "Иркутская область"
        },
        br: {
          path:
            "m543.39,476.39s1.6072,0.98214,2.3214,1.1607c0.71429,0.17857,2.8572,1.25,3.3929,1.3393,0.53571,0.0893,1.7857,0.71428,2.5,0.98214,0.71429,0.26786,1.875,0.98214,2.5893,1.3393,0.71428,0.35714,2.2321,0.53571,3.2143,0.625,0.98214,0.0893,2.8571,0.89285,3.4821,1.0714,0.625,0.17858,2.1429,1.0714,2.9464,1.1607,0.80357,0.0893,1.5179,0,2.7679,0.625s2.7679,1.3393,3.125,1.5179c0.35714,0.17857,0.71429,0.26785,0.80357,0.98214,0.0893,0.71428,0,2.6786,0.0893,3.0357,0.0893,0.35715,0.26785,1.6964,0.625,2.0536,0.35714,0.35715,1.6071,1.9643,2.5893,2.5893,0.98215,0.625,1.4286,1.6964,1.9643,2.1429,0.53571,0.44643,2.3214,1.875,2.8571,1.9643,0.53572,0.0893,2.3214,0.625,2.7679,0.625,0.44643,0,5.0893,0.44643,5.0893,0.44643s1.7857-0.80357,2.7679-1.25c0.98214-0.44643,4.0179-1.25,4.4643-1.5179,0.44643-0.26785,1.5178-0.98214,2.6786-1.0714,1.1607-0.0893,4.1964-0.0893,5.0893-0.0893,0.89286,0,4.1072,0.0893,4.1072,0.0893s2.3214-0.0893,3.125,0.44642c0.80357,0.53572,1.6071,1.6072,1.9643,2.1429,0.35715,0.53572,0.625,1.4286,1.0714,1.6071,0.44643,0.17858,1.4286,0.35715,1.875,0.35715,0.44643,0,2.1429-0.26786,2.5-0.35715,0.35714-0.0893,2.2321-0.44642,2.2321-0.44642l0.0893-2.6786s-0.0893-1.7857,0.53571-2.0536c0.625-0.26785,4.4643-1.5178,4.8214-1.6964,0.35715-0.17857,1.25-1.6071,1.25-1.6071s-2.5-0.625-3.3036-0.625c-0.80357,0-1.25-1.4286-1.25-1.4286l1.0714-1.5179,0.17857-1.9643,0.98214-1.0714,0.80358-1.3393s-0.625-0.98214-0.80358-1.3393c-0.17857-0.35715-0.0893-1.4286-0.0893-1.4286l2.2321-1.1607,3.125-0.35714,2.4107-1.1607,3.4821-2.4107,1.7857-0.625s1.4286,0.0893,1.875,0.26786c0.44643,0.17857,2.4107,0.53571,2.5893,0.17857,0.17857-0.35714,1.6071-1.9643,2.0536-2.3214,0.44643-0.35714,2.6786-2.1429,2.6786-2.1429l1.4286-1.1607s0.98215-1.25,1.4286-1.5179c0.44643-0.26786,1.875-1.0714,2.4107-1.0714,0.53571,0,0.98214,0,1.3393-0.26785,0.35715-0.26786,1.1607-1.25,1.3393-1.6072,0.17857-0.35714,1.0714-0.80357,1.6071-0.89285,0.53572-0.0893,5-1.3393,5-1.3393l2.6786-1.5179s1.875-1.5178,2.0536-1.875c0.17857-0.35714,1.6071-2.8571,1.6071-2.8571l0.98214-1.875s-0.26786-1.4286-0.71428-1.7857c-0.44643-0.35715-2.1429-1.6072-2.1429-1.6072l-2.5-1.25s-1.25-0.80357-1.1607-1.6071c0.0893-0.80357,7.5-5.625,7.5-5.625s0.98215-1.6964,1.0714-2.0536c0.0893-0.35714,0.89286-1.9643,1.25-2.3214,0.35715-0.35714,2.5-2.0536,2.5-2.0536s1.4286-0.625,1.875-0.71429c0.44643-0.0893,3.5714-1.5178,3.5714-1.5178l1.25-0.98215s0.44643-2.0536,0.44643-2.5893c0-0.53572-0.80357-3.8393-0.80357-3.8393s-1.0714-0.53571-1.4286-0.89285c-0.35715-0.35715-1.25-0.80358-2.1429-0.80358-0.89286,0-2.6786,0-3.125-0.625-0.44643-0.625-1.3393-1.25-1.6964-1.875-0.35714-0.625-1.1607-1.7857-1.25-2.2321-0.0893-0.44643-0.80357-2.4107-0.98214-2.7679-0.17857-0.35714-1.0714-2.3214-1.0714-2.3214l-2.0536-3.5714-1.0714-2.7679,0.26786-2.0536,1.0714-0.625,0.80357-1.25,1.4286-1.875,0.625-0.98214-2.3214-1.25s-1.875,0.44642-2.2321,0.71428c-0.35715,0.26786-0.98215,1.3393-0.98215,1.3393s0.35715,0.625,0,0.80357c-0.35714,0.17857-2.3214,0.44643-2.3214,0.44643l-1.25,0.89285-0.71429,1.9643v1.6071l-0.98214,0.98215-2.0536,1.0714-1.3393,0.98215-1.1607,1.3393s-1.6964,0.0893-2.0536,0.0893c-0.35714,0-2.0536-0.625-2.0536-0.625l-2.6786,0.17857-2.3214-0.0893-1.9643-1.4286-1.4286,0.26786-2.0536-0.35714s-0.80357-0.71429-1.1607-0.71429c-0.35714,0-2.1429,0.625-2.1429,0.625l-1.5178,1.3393-0.98215,1.0714-2.6786,0.26785-1.9643-0.0893-2.3214,0.44643-2.2322,1.1607-3.3928,1.7857-2.3214,0.98215-1.3393,0.89285-0.89285,1.1607s-0.0893,0.35714,0.0893,0.71428c0.17857,0.35715,0.98214,1.4286,0.98214,1.4286l1.6072,0.80357,0.98214,0.89285,0.83,0.91,0.0893,1.1607-1.6071,2.1428-0.35714,2.2322-0.35715,1.875v2.6786l0.80358,1.6071,1.1607,1.4286s0.26786-0.44643,0.71429-0.80357c0.44642-0.35714,1.1607-2.3214,1.1607-2.3214v-2.0536l0.0893-2.0536,0.98214-1.875,1.6964-1.25,1.1607-0.17857,0.89286,1.1607s-0.0893,1.25-0.26786,1.6964c-0.17857,0.44643-0.53571,0.98214-0.35714,1.3393,0.17857,0.35714,0.89286,1.4286,0.89286,1.4286l-0.17858,2.7678s-0.35714,2.3214-0.35714,2.6786c0,0.35714-0.26786,2.5893-0.26786,3.0357v2.5893c0,0.89285,0,1.5178,0.0893,2.1428s0.0893,1.6964-0.0893,2.1429c-0.17857,0.44643-0.44642,1.25-0.71428,1.9643-0.26786,0.71428-0.35714,1.25-0.44643,1.9643-0.0893,0.71429-1.0714,1.6964-1.0714,1.6964s-0.71428,0.26786-0.98214-0.625-1.6071-0.98214-1.6071-0.98214-0.71429,0.44642-1.0714,0.98214c-0.35715,0.53571-0.89286,1.25-0.35715,1.6964,0.53572,0.44643,1.5179,1.6071,1.5179,1.6071s0.625,0.35714,0.26786,1.1607c-0.35714,0.80358-1.1607,1.0714-1.6964,1.4286-0.53571,0.35714-1.5179,0.89285-1.6964,1.25-0.17857,0.35714-0.71428,1.4286-0.71428,1.7857,0,0.35714-0.44643,2.0536-0.44643,2.0536l-1.3393,0.98214-1.875,1.3393s-2.2321,0.71429-2.6786,0.98214c-0.44643,0.26786-2.5,1.4286-2.8571,1.7857-0.35715,0.35714-0.53572,1.25-1.4286,1.6071-0.89286,0.35714-3.125,1.3393-3.125,1.3393l-0.98215,0.26785s-0.35714,0.80357-0.35714,1.1607c0,0.35714-0.26786,2.2321-0.26786,2.7678,0,0.53572-0.26785,0.98215-0.625,1.6964-0.35714,0.71429-0.98214,1.6964-1.6071,1.7857-0.625,0.0893-2.7679,0.71428-3.2143,0.89285-0.44642,0.17858-2.5,0.89286-3.0357,0.98215-0.53571,0.0893-2.8571,1.0714-2.8571,1.0714l-0.71429,0.80357-1.5179,1.1607-2.0536,0.71429-1.4286,0.80357-1.6964-1.0714-0.35714-0.98214-0.44643-1.25s-0.35714-0.35715-1.25-0.26786c-0.89286,0.0893-2.0536,0.44643-2.0536,0.44643s-1.3393-1.4286-1.6071-1.875c-0.26786-0.44643-1.875-3.125-1.875-3.125l-1.54-1.99-1.34-1.61s-1.1607-0.71429-1.6964-0.71429c-0.53571,0-2.6786-0.17857-3.0357-0.17857-0.35715,0-1.6072-0.89285-1.7857-1.1607-0.17857-0.26786-3.4821-4.2857-3.4821-4.2857l-1.875-0.89285-2.8571-1.9643-1.9643-2.2321-1.0714-1.6964-0.89286-0.625s-0.89285-0.26786-1.25,0.0893c-0.35714,0.35714-0.80357,0.53571-1.3393,0.89285-0.53572,0.35715-1.875,1.4286-1.875,1.4286l-1.3393,1.25-1.9643,1.1607-1.4286,0.89286s-0.89286,1.0714-0.98215,1.6071c-0.0893,0.53571-0.26785,1.1607-0.26785,2.0536,0,0.89286-0.35715,3.3036-0.35715,3.3036z",
          name: "Республика Бурятия"
        },
        zb: {
          path:
            "m618.41,500.07s1.1364,1.1364,1.6415,1.5152c0.50508,0.3788,1.6415,1.6415,2.2728,1.894,0.63134,0.25254,2.6516,1.6415,2.6516,1.6415s2.9042,1.0102,3.4093,1.0102h5.5558c1.1364,0,3.283,0.75762,3.283,0.75762s0.88388,0.63134,2.0203-0.25254c1.1364-0.88389,2.3991-1.6415,2.3991-1.6415s0.75762,0.25254,1.6415,0.63135c0.88388,0.3788,1.5152,1.2627,2.1466,1.2627,0.63135,0,3.4093-1.7678,3.4093-1.7678s2.6516-2.2728,3.1567-2.7779c0.50507-0.50508,2.5254-0.88388,3.5355-1.2627,1.0102-0.37881,5.4296-0.50508,5.4296-0.50508s1.894-1.2627,2.2728-1.894c0.37881-0.63135,1.7678-3.4093,1.894-3.9143,0.12627-0.50508,2.7779-2.3991,3.4093-2.9042,0.63135-0.50508,4.9245-2.5254,5.177-3.0305,0.25253-0.50508,2.0203-1.5152,2.0203-1.5152l3.1567,1.2627,2.9042,1.2627s2.2728,0.25254,2.9042,0.25254c0.63135,0,2.2728-0.50508,2.7779-0.88388,0.50508-0.37881,3.1567-1.7678,3.1567-1.7678s3.283,0.25254,3.7881,0.50508c0.50508,0.25253,1.7678,0.88388,2.3991,1.1364,0.63135,0.25254,3.9144,1.389,3.9144,1.389s3.6618,0.3788,4.4194,0.25254c0.75762-0.12627,2.5254-1.7678,2.7779-2.3991,0.25254-0.63134,0.75762-2.3991,1.6415-2.9042,0.88388-0.50507,4.2932-1.5152,4.2932-1.5152s1.389-0.12627,1.5152-1.6415c0.12627-1.5152,0.37881-2.9042-0.25254-3.5355-0.63135-0.63134-1.389-0.88388-1.7678-1.7678-0.3788-0.88389,0.88389-8.9651,0.88389-8.9651l1.6415-3.7881,1.2627-4.2932s1.389-2.2728,1.2627-2.9042c-0.12627-0.63134-0.37881-3.9143-0.37881-3.9143l-1-2.41s-1.1364-0.88388-1.5152-1.389c-0.37881-0.50507-1.0102-0.37881-1.5152-1.0102-0.50508-0.63135-1.7678-1.1364-1.7678-1.7678,0-0.63134-0.25254-1.5152,0.37881-2.0203,0.63134-0.50508,3.0305-3.0305,3.7881-3.4093,0.75761-0.37881,4.5457-2.5254,4.9245-3.0305,0.37881-0.50507,1.389-1.6415,1.7678-2.1466,0.37881-0.50508,0.88388-0.50508,0.63135-1.6415-0.25254-1.1364-2.6516-3.5355-2.6516-3.5355s-0.63135-0.88389-1.5152-0.88389c-0.88389,0-3.1567-0.3788-3.1567-1.0102,0-0.63134-0.37881-1.2627-0.12627-2.0203,0.25254-0.75762,2.0203-2.2728,2.2728-2.9042,0.25254-0.63135,0.37881-1.894,0.37881-1.894l-2.3991-1.6415-2.6516,0.12627s-0.25254-0.25253-0.25254-0.88388c0-0.63134,0.63135-2.7779,0.88388-3.283,0.25254-0.50507,0.50508-1.5152,0.63135-2.1466,0.12627-0.63134-0.25254-1.7678-0.75761-2.3991-0.50508-0.63135-1.5152-1.389-1.5152-1.389s-1.1364-0.50508-1.6415,0.12627c-0.50508,0.63134-1.1364,1.5152-1.1364,1.5152s-1.1364,0.12627-1.6415-0.25254c-0.50508-0.37881-0.88388-4.1669-0.88388-4.1669s-0.88389-1.2627-1.6415-1.389c-0.75762-0.12627-1.6415-0.12627-2.1466,0.50508-0.50507,0.63134-1.0102,1.0102-1.7678,1.5152-0.75762,0.50508-1.2627,1.1364-1.894,0.75762-0.63134-0.37881-1.389-0.75762-1.2627-1.389,0.12627-0.63135,0.75761-1.6415,0.88388-2.1466,0.12627-0.50507-1.7678-2.1466-1.7678-2.1466l-3.283-0.12627-1.1364-1.1364c-0.12627-0.75761,0.25254-2.5254,0.25254-2.5254l-1.389-1.5152-2.7779-4.0406-1.2627-1.894-3.1567-0.3788-1.1364-2.0203-0.25254-2.9042-1.2627-0.3788h-1.2627l-1.6415,0.63134-1.6415-1.0102-3.0304-0.63135-1.894,0.75762-0.37881,1.0102-0.12627,1.894,0.37881,1.894-0.25254,1.5152-0.50507,2.0203,0.75761,2.0203,0.50508,1.389,1.7678,1.5152,0.88389,0.88388,0.25254,1.894s-0.25254,1.0102-0.75762,1.389c-0.50507,0.37881-3.0305,1.2627-3.0305,1.2627s-2.3991,0.63134-2.9042,0.75761c-0.50508,0.12627-3.4093,0.75762-3.4093,0.75762l-1.389,1.5152-0.25254,1.6415,0.75762,2.5254,1.7678,3.283,1.6415,3.7881,0.75762,2.9042,2.0203,2.2728,1.2627,1.1364,2.1466,0.25254,2.2728,0.50507,1.7678,1.389,0.50507,1.6415,0.12627,1.894v2.3991l-1.894,1.6415-3.0305,1.2627-2.5254,1.2627-2.1466,2.0203-1.0102,1.7678-0.75761,2.1466-2.6516,1.6415-1.894,1.389-2.0203,1.5152-0.88388,0.88388v0.75762l0.88388,0.88388c0.50508,0.12627,2.1466,1.2627,2.1466,1.2627l1.894,1.0102s0.75762,0.88389,0.88389,1.389c0.12627,0.50508,0,1.5152-0.12627,2.1466-0.12627,0.63134-2.0203,3.6618-2.0203,3.6618l-1.894,1.6415-3.6618,2.0203-3.1567,0.63135-2.1466,1.0102s-0.75761,0.37881-1.1364,1.0102c-0.3788,0.63135-1.6415,1.2627-1.6415,1.2627l-2.2728,0.50507-1.0102,0.88388s-1.2627,0.88389-1.6415,1.389c-0.37881,0.50508-3.5355,2.9042-3.5355,2.9042l-0.88389,1.389s-0.75761,1.1364-1.389,1.2627c-0.63134,0.12627-2.2728,0.12627-2.2728,0.12627l-2.3991-0.88388-1.6415,1.389s-1.6415,0.37881-2.1466,0.88388c-0.50508,0.50508-2.7779,1.7678-2.7779,1.7678l-2.3991,0.63134s-1.894-0.25253-2.5254,0.12627c-0.63134,0.37881-1.2627,1.5152-1.2627,1.5152l0.63135,1.5152,0.25254,0.88388-0.88389,1.894s-1.0102,0.75762-1.0102,1.2627-0.88388,2.0203-0.88388,2.0203-0.50508,0.88388,0.25253,1.389c0.75762,0.50507,2.5254,0.88388,2.5254,0.88388s1.389-0.12627,1.5152,0.50508c0.12627,0.63134-1.1364,1.6415-1.1364,1.6415l-2.6516,0.75762-2.0203,1.2627-0.88389,1.6415z",
          name: "Забайкальский край"
        },
        am: {
          path:
            "m692.32,397.46,4.6429-0.17857,2.3214-0.17858,3.5714-1.7857,2.6786,0.35714,3.5714,1.0714,2.1429,1.0714,2.6786,0.53571,4.4643-0.53571,3.0357,0,2.3214,0.53571,2.8571,2.1429,2.1429,0.89286,2.8571,0.35714,2.3214-1.7857,2.3214-0.71429,1.9643,0,2.1429,1.4286,2.1429,0.71429,2.5-0.71429,1.7857-1.9643,1.7857-1.25,4.1072,0,2.5-1.4286,2.1428-0.89286,3.75,0,1.4286,0,1.25-0.71429,0.53571-2.5,1.6071-1.0714,4.2857-2.3214,2.3214-0.89286,3.5714-1.9643,2.8572-1.4286,5-0.89286,3.0357,0,1.6071,1.4286l-0.37,3.2s-1.25,1.6071-1.9643,2.6786c-0.71429,1.0714-1.6072,2.6786-1.9643,3.3929-0.35714,0.71429-1.25,2.1429-1.25,2.1429s-0.53571,2.8571-0.71429,3.5714c-0.17857,0.71428-1.0714,2.8571-1.0714,2.8571s-1.25,1.7857-1.0714,2.5c0.17857,0.71428,1.25,1.25,1.25,1.25l0.89285,0.71428,3.2143-0.71428s1.7857-0.17857,2.6786-0.17857c0.89286,0,2.5,0.89285,2.5,0.89285l0.53572,1.9643,0.89285,2.6786s0.17857,0.53572,1.6072,0.53572,2.6786-1.4286,2.6786-1.4286l0.17857-2.3214s1.0714-0.89286,1.9643-0.89286c0.89286,0,2.5-0.53572,2.5-0.53572l1.25-2.1428,0.35715-2.5,1.9643-1.7857,2.3214,0.17857c0.71,0.19,3.03-1.6,3.03-1.6l1.4286-1.4286s0.89285-1.0714,1.9643-0.35714c1.0714,0.71428,2.3214,2.5,2.3214,2.5v2.8571l0.53572,1.6071,1.9643,1.7857s1.6071,0.71428,1.25,1.6071c-0.35714,0.89286-2.8571,1.9643-3.5714,1.9643-0.71428,0-3.5714,0.89285-3.5714,0.89285l-1.6071,0.17857-1.96,0.89s-0.71429,0.17857-0.17858,1.0714c0.53572,0.89286,1.9643,1.7857,1.9643,1.7857l1.25,0.89286,0.35714,1.9643-3.2143,2.3214-1.6072,3.0357-0.17857,2.1429-1.6071,2.3214-2.6786,0.89285-1.6071,1.4286,1.9643,1.9643,0.35714,1.7857-2.3214,2.3214-1.25,3.5714,1.6071,2.8571s3.5714,1.4286,4.2857,1.6072c0.71429,0.17857,4.8214,0.71428,4.8214,0.71428s1.4286,0.71429,1.9643,1.25c0.53571,0.53572,0.71428,3.2143,0.71428,3.2143l0.35715,2.5s0,0.53571,0.71428,1.0714c0.71429,0.53571,0,3.5714,0,3.5714l-0.71428,2.8571-0.53572,1.7857-1.25,1.7857-3.2143,0.35714-4.1072-0.17857-2.8571-1.4286-1.77-0.53-3.04,1.07h-3.3929-2.5l-3.2143,0.89286s-2.6786-0.35714-3.5714-0.53572c-0.89286-0.17857-3.5714-2.1428-3.5714-2.1428l-3.22-2.67-1.07-2.15-1.43-2.14-1.7857-1.0714-1.0714-1.9643s0-1.0714-0.71428-1.6072c-0.71429-0.53571-2.6786-0.71428-2.6786-0.71428l-0.89286-1.25-1.7857-2.8571-1.9643-2.5s-1.25-1.4286-1.9643-1.6072c-0.72-0.18-1.79-0.36-2.15-1.43-0.35715-1.0714-2.3214-2.6786-2.3214-2.6786l-2.8572-1.4286-2.6786-1.4286-3.0357-0.17857-2.6786-0.17858s-0.71429,0.89286-1.6072,1.0714c-0.89285,0.17857-4.4643-0.35714-4.4643-0.35714l-3.5714-1.25-2.3214,0.35714-1.9643,0.89286-1.6072,1.4286-3.75,0.71429s-3.2143,0.71428-3.3928,0c-0.17858-0.71429-2.8572-4.1072-2.8572-4.1072l-1.7857-1.4286h-1.6071l-1.0714-1.0714v-2.1428l2.1428-2.1429,0.17858-1.4286-0.89286-1.4286-1.25-0.89286-2.1429-0.17857s-0.71428,1.0714-0.71428,0,0.71428-3.3929,0.71428-3.3929l0.89286-2.3214-0.35714-1.9643-1.25-1.7857-1.7857-0.71428-1.25,0.71428-1.25,0.71429-1.25-0.17857s-0.35714-0.71429-0.35714-1.4286c0-0.71429-1.25-2.6786-1.25-2.6786l-0.71429-0.71428-1.7857-0.17857-0.89286,0.89285-1.4286,0.89286-2.5,0.53572s-0.35714-0.35715-0.17857-1.0714c0.17857-0.71429,0.71428-2.5,0.71428-2.5l-1.25-1.4286-0.51-0.52-1.79-0.18h-2.1429l-0.35714-1.0714v-2.1429z",
          name: "Амурская область"
        },
        ch: {
          path:
            "M906.72,53.094c-0.34,0-0.66,0.094-0.66,0.094l-1.78,2.124-4.47,1.969s-6.05,2.853-7.12,3.031c-1.07,0.179-1.44,1.969-1.44,1.969s0.37,2.514,0.19,3.407c-0.18,0.892-1.44,1.406-1.44,1.406s-2.32,1.428-2.5,2.5c-0.18,1.071,0.91,2.156,0.91,2.156s2.66,0.906,3.37,0.906c0.72,0,2.85-0.375,3.56-0.375,0.72,0-0.34,1.625-0.34,1.625l-0.91,1.782-2.31-0.907-3.03-0.719s-2.14,0.554-3.03,0.376c-0.89-0.179-2.31-1.438-2.31-1.438l-2.69,0.531-2.88,0.375h-1.06s-0.53,2.656-1.25,2.656c-0.71,0-2.12,1.782-2.12,1.782l-3.41,0.187-2.84,2.875s-2.86,2.496-3.75,3.032c-0.9,0.535-1.61,0.531-2.5,0.531-0.9,0-2.5,1.062-2.5,1.062l-4.85,3.219-5.15,1.062-3.07,0.907s-1.04,2.861-1.93,3.219c-0.9,0.357-2.88,1.968-2.88,1.968l-3.22,1.938-2.12,1.966-2.16,3.03-1.25,1.97-1.06,2.5v3.22s-0.91,0.72-1.63,0.72c-0.71,0-2.84,1.25-2.84,1.25s-0.9,2.51-1.44,3.41c-0.53,0.89-2.85,1.76-3.56,2.12s0.34,1.25,0.34,1.25l2.35,0.53,0.53,2.16,2.69,0.53h2.65,3.75s1.44,1.07,1.97,1.78c0.54,0.72,1.63,1.78,1.63,1.78l-1.82,2.5-2.5,1.1-2.31-0.72s-1.6,1.25-2.31,1.25c-0.72,0-2.16,1.59-2.16,1.59s-1.42-0.71-2.31-1.25c-0.89-0.53-1.96,0-3.03,0s-1.26,1.26-1.44,1.97-0.87,2.84-0.87,2.84-1.09,1.79-1.63,2.5c-0.53,0.72-2.66,2.69-3.37,3.22-0.72,0.54-1.81,0.54-4.13,0.72s-1.07,1.26-1.25,2.16c-0.18,0.89-1.06,3.03-1.06,3.03s-2.15,1.24-2.69,2.31c-0.53,1.07-0.53,2.67-0.53,3.56,0,0.9,0.53,1.82,0.53,1.82h1.06l0.19-0.72,0.19-1.97,0.72-1.06,0.72,0.53,3.9,1.59,5,3.41,0.38,0.87-0.38,5.19-1.06,2.84-4.09,4.47-2.88,3.94-0.34,2.5,1.25,0.19h1.59s-0.17,1.42-0.53,2.31,0.34,1.59,0.34,1.59l2.88,1.25,3.75,0.38,4.62-0.19,2.69,3.41,2.16,1.78h4.47c1.25,0,1.06,2.5,1.06,2.5l1.06,1.59,3.94-0.34s5.36-1.44,6.25-1.44,3.2-0.53,3.56-1.25c0.36-0.71,2.69-1.59,2.69-1.59l1.97-0.91h3.75s2.66-1.24,3.37-1.59c0.72-0.36,0.74-1.98,1.1-2.69,0.35-0.71,0.87-3.03,0.87-3.03l1.25-2.5h1.63l1.78-1.06,1.06-1.63,1.44-0.34,2.31-1.44,1.06-1.25s0.91-0.89,1.63-1.78c0.71-0.89,0.87-1.6,1.4-2.31,0.54-0.72,2.51-1.44,3.22-1.97,0.72-0.54,2.15-2.14,2.5-3.03,0.36-0.9,1.63,0,1.63,0l4.09,0.68s3.22-1.04,5.72-1.93c2.5-0.9,1.08,1.06,0.91,1.78-0.18,0.71,0,3.2,0,4.09s0.88,3.22,1.78,4.47c0.89,1.25,3.9-1.44,3.9-1.44s3.05-1.78,3.94-2.5c0.89-0.71,3.94,0,3.94,0h6.06v-2.84c0-0.72,1.43-3.23,1.97-4.13,0.54-0.89,1.25-3.56,1.25-3.56l0.72-2.5-0.19-4.81s1.79-1.97,3.22-1.97,2.69,1.59,2.69,1.59l4.28,0.91,1.44-0.53s-0.19-3.22-0.19-3.94c0-0.71-0.19-2.84-0.19-2.84l-0.53-3.22s-0.54-2.51-0.72-3.41c-0.18-0.89-0.87-2.12-0.87-2.12l-2.5-1.63,1.25-0.87,4.09-0.38s1.96-2.66,2.5-3.37c0.54-0.72,2.84-2.35,2.84-2.35v-2.5s-1.04-2.13-1.93-3.03c-0.9-0.89-2.35,0.18-3.07,0.53-0.71,0.36-3.03-0.34-3.03-0.34s-1.41-0.88-2.12-0.34c-0.72,0.53-1.63,1.06-1.63,1.06l-1.4-1.06-1.97,1.78-1.44-0.72s-2.84-1.79-4.09-1.25c-1.25,0.53-1.97-0.72-1.97-0.72h-2.5s-0.56,1.25-1.1,1.97c-0.53,0.71-3.03,0.87-3.03,0.87l-2.84,0.91-2.69,3.75-2.69,0.53,1.25-2.5,0.19-1.59-3.03-0.38s2.13-0.88,2.84-1.06c0.72-0.18,3.41-1.06,3.41-1.06l1.97-0.91,0.34-1.59s1.78-3.41,1.78-4.13c0-0.71-0.68-3.22-0.68-3.22l-0.91-2.31s-2.5-4.63-3.22-5.34c-0.71-0.72-1.05-1.78-2.12-1.78-1.08,0-3.07,0.68-3.07,0.68l-1.4,0.91-1.25-1.06s-2.17-1.98-3.6-2.159c-1.42-0.178,0.38-0.719,0.38-0.719l0.87-1.593s-0.16-1.973,0.38-2.688c0.53-0.714,1.97,1.25,1.97,1.25s2.67,1.438,3.56,1.438,1.78,0.531,1.78,0.531,3.41-0.371,4.13-0.906c0.71-0.536,0.68-2.313,0.68-2.313l0.19-2.687,0.72-1.25,1.25-1.782s0.36-1.964,1.25-2.5c0.89-0.535,1.79,0,2.69,0,0.89,0,2.31,1.626,2.31,1.626l1.59,0.718,2.5-1.437s1.28-2.139,1.82-3.031c0.53-0.893,2.84-1.782,2.84-1.782l2.84-2.156,1.44-3.219s2.14-1.973,2.5-2.687c0.36-0.715-0.34-1.782-1.59-1.782h-1.78l-1.82-1.062-1.93-0.188-3.07-1.781-3.18-0.187h-3.75c-0.9,0,0-0.875,0-0.875l2.5-1.625,0.68-2.5-1.06-1.25-2.5-0.532,1.78-1.25,0.53-1.25-2.31-0.531v-2.5s-0.35-1.785-0.53-2.5c-0.09-0.357-0.45-0.437-0.78-0.437zm-77.19,16.062c-0.22-0.01-0.48,0.081-0.78,0.282-1.61,1.071-3.94,2.312-3.94,2.312-1.07,0.357-1.79,1.42-1.97,2.312-0.17,0.893-0.53,2.88-0.53,3.594,0,0.715,0.2,2.496,1.1,3.032,0.89,0.535,3.03,1.598,3.03,2.312s-0.56,2.321,0.15,2.5c0.72,0.179,1.44-0.522,1.97-1.594,0.54-1.071,0.36-3.419,0.72-4.312s1.45-2.491,1.63-3.563c0.17-1.071-0.19-5.187-0.19-5.187s-0.24-1.644-1.19-1.688z",
          name: "Чукотский автономный округ"
        },
        ha: {
          path:
            "m809.82,276.93c0.53572-0.71428,1.4286-1.4286,1.9643-2.3214,0.53571-0.89285,1.7857-2.5,1.7857-2.5s1.7857-0.17857,4.1072,0.17858c2.3214,0.35714,4.4643,1.4286,5.7143,2.1428,1.25,0.71429,2.6786,1.25,3.0357,2.3214,0.35714,1.0714,1.6071,2.1429,1.6071,3.3929s-1.4286,3.5714-1.4286,4.2857c0,0.71429-0.17857,2.5,0.71428,3.3929,0.89286,0.89286,0.71429,1.6071,1.7857,1.4286,1.0714-0.17857,3.9286-1.0714,5-1.25,1.0714-0.17857,3.3929,0,5,0.53572,1.6071,0.53571,2.8571,0.89285,3.2143,1.6071,0.35715,0.71428,1.0714,1.4286,0.89286,2.5-0.17857,1.0714-2.5,2.8571-2.5,2.8571l0.17857,1.4286,0.89286,1.6072s1.6071,0.71428-0.35714,0.89285c-1.9643,0.17857-3.0357-0.71428-3.0357-0.71428s0.17857-0.17857,0-1.0714c-0.17857-0.89286-0.71428-1.7857-1.7857-1.4286-1.0714,0.35714-2.3214,1.9643-3.0357,2.5-0.71428,0.53571-2.8571,3.0357-2.8571,3.0357s-1.9643,0.71429-2.8571,1.7857c-0.89286,1.0714-4.1071,4.6428-4.1071,4.6428s-0.17858,1.25-1.0714,2.5c-0.89286,1.25-2.3214,2.3214-2.5,3.5714-0.17857,1.25,0,4.1071,0,4.1071s1.4286,1.0714,1.6071,2.3214c0.17857,1.25-0.89286,1.9643-1.25,2.8572-0.35714,0.89285-1.4286,0.53571-1.4286,1.7857s0.17857,5.7143,0.17857,5.7143l-0.35714,4.8214-0.35715,4.1072s-1.0714,1.9643-1.25,3.2143c-0.17857,1.25-0.35714,2.6786-0.35714,3.3929,0,0.71429-0.17857,3.0357-0.17857,3.75,0,0.71429-0.71429,1.9643-0.89286,2.6786-0.17857,0.71429-1.0714,1.25-0.17857,1.9643,0.89286,0.71428,1.9643,1.9643,1.9643,1.9643l-1.7857,3.3929-0.17857,1.9643-1.7857,3.3928-1.25,3.75-0.35715,4.1072-0.71428,1.6071-3.2143,4.1071,0.35715,2.6786s2.1428,1.0714,2.8571,1.0714c0.71428,0,3.3929,0.53572,4.4643-0.17857s2.5-1.4286,3.2143-1.7857c0.71429-0.35715,1.6071-0.89286,2.8571,0.35714s2.5,4.4643,2.5,4.4643,0.17857,1.4286,1.4286,1.0714c1.25-0.35714,1.9643-2.1428,1.9643-2.1428l-1.0714-2.1429,0.53572-2.6786-0.53572-1.7857-1.6071-2.5s-1.7857-1.4286-2.5-1.4286c-0.71429,0-3.75,1.4286-3.75,1.4286s-1.9643,2.3214-1.6071,1.4286c0.35714-0.89285,1.9643-3.3928,1.9643-3.3928l1.6071-0.35715,1.25-1.7857s0.89286-0.71429,1.9643-0.71429,3.2143-1.25,3.2143-1.25,1.25-2.6786,1.0714-0.89285c-0.12,1.78-1.72,4.28-1.72,4.28l1.0714,2.1429,1.9643,2.1429,0.53572,1.7857-0.17857,2.6786,2.3214,1.4286v1.6072,2.8571l1.7857-0.71429c0.71429-0.71428,2.1429-4.2857,2.1429-4.2857l0.89285-3.2143v-2.1428s-1.6071-1.7857-0.89285-1.9643c0.71428-0.17857,4.6428-2.1429,4.6428-2.1429s2.1429-0.53571,3.0357-0.53571c0.89286,0,4.1071,0.17857,4.8214,0.35714,0.71428,0.17857,4.4643,1.6071,4.4643,1.6071s4.4643,1.25,5.1786,1.25c0.71429,0,1.9643,1.7857,1.9643,1.7857s-0.89286,1.9643,0.53571,2.8571c1.4286,0.89286,4.8214,3.0357,4.8214,3.0357l3.75,2.1428s1.4286,3.3929,1.4286,4.2857c0,0.89285-0.17857,4.6428-0.17857,5.7143,0,1.0714,0,5,0.53572,5.7143,0.53571,0.71428,1.0714,2.3214,2.1428,3.2143,1.0714,0.89286,3.2143,4.2857,3.2143,4.2857l2.5,1.25,3.0357,6.9643s1.4286,1.4286,1.6072,2.3214c0.17857,0.89286,1.6071,3.0357,1.7857,3.75,0.17857,0.71429,1.6071,5,1.7857,5.7143,0.17857,0.71428-0.53572,8.5714-0.53572,8.5714l0.53572,3.3928s0,1.25-0.89286,1.9643c-0.89286,0.71429-3.5714,1.6071-3.5714,1.6071l-1.4286,0.17857-1.4286-1.7857-0.53572-2.6786-3.0357-3.0357s-1.9643-1.25-2.6786-0.71428c-0.71429,0.53571-2.3214,1.9643-2.3214,1.9643s-0.89286,1.7857-1.25,2.5c-0.35714,0.71429-1.4286,1.25-0.89286,2.3214,0.53572,1.0714,1.9643,2.6786,1.9643,2.6786s0.35714-0.71428,2.1428-0.53571c1.79,0.18,2.14,2.68,2.14,2.68l-0.89286,3.2143s-1.9643,1.25-2.6786,1.6071c-0.71428,0.35714-2.8571,1.25-1.7857,2.1429,1.0714,0.89285,2.3214,1.25,2.3214,1.25s0.71428,1.25,0,1.9643c-0.71429,0.71429-2.3214,2.1429-2.3214,2.1429s-1.7857,0.35714-3.0357,1.25-3.2143,1.4286-4.2857,1.6071c-1.0714,0.17857-2.8571,1.25-4.1071,0s-2.1429-0.89285-2.5,0.17857c-0.35715,1.0714-1.6072,0.89286-1.7857,1.9643-0.17857,1.0714,0,2.8571,0.35715,3.5714,0.35714,0.71428,0,3.0357,0,3.0357s-2.3214,1.9643-2.5,1.25c-0.17858-0.71428,0.17857-2.3214-0.35715-3.2143-0.53571-0.89286-2.3214-2.5-2.3214-2.5s-2.8571-1.4286-1.7857-2.3214c1.0714-0.89286,2.8571-2.6786,3.2143-3.2143,0.35714-0.53571,0.35714-3.0357,0.35714-3.0357s-2.1429-0.89286-2.6786-1.7857c-0.53572-0.89285-1.0714-3.3928-1.0714-4.1071,0-0.71428-0.71429-3.3929,0.17857-3.75,0.89286-0.35714,2.8571-1.9643,2.8571-1.9643l0.53572-1.9643s-0.53572-0.35714-2.1429-0.35714c-1.6071,0-2.5-0.17857-3.9286,0.89285s-1.4286,1.0714-2.5,2.5-2.1429,2.6786-3.2143,3.2143c-1.0714,0.53571-2.6786,0.71429-2.6786,0.71429s-4.1071-0.71429-4.2857-1.4286c-0.17857-0.71428-1.6072-1.9643-2.5-1.9643-0.89286,0-2.1429,0.35714-3.2143,0.89286-1.06,0.55-1.95,0.73-2.84,0.73-0.89286,0-4.2857,1.0714-4.2857,1.0714s-2.1428,1.7857-3.2143,1.7857c-1.0714,0-2.1014,0.40945-2.28-0.66198-0.17857-1.0714-1.0823-3.4216-1.0823-3.4216l-1.5332-4.3507s-2.6677-0.69261-3.7392-0.87119c-1.0714-0.17857-3.8221-0.85138-3.8221-0.85138l-2.4892-1.1525s-2.1249-2.2078-1.7678-2.9221c0.35714-0.71428,1.7028-4.0044,2.4171-4.5401,0.71428-0.53572,1.2608-1.4069,1.2608-1.4069l-1.25-2.3214s-1.7965-1.2085-0.90368-1.7442c0.89286-0.53571,3.7608-2.0058,3.7608-2.0058l2.0906-4.0892,1.5025-3.2341,3.5498-2.6767-0.89285-1.9643-2.4171-1.7118-0.11357-1.6288,2.5306-1.1237,4.1071-0.71428,2.6786-0.89286,1.0714-1.25-0.53571-1.6071-1.986-1.47-1.0083-2.5108-0.0631-2.4477-1.47-2.0058-1.7226-0.67282-2.2583,1.7442s-1.6703,1.0823-2.3846,1.4394c-0.73,0.34-2.87,0.19-2.87,0.19l-2.3214,1.25-0.44008,2.5-0.80992,2.3214-2.5,1.0714-2.1429,0.53571-0.53571,2.4585-1.4809,1.4286-2.3431-0.17857-0.99746-2.4585-1.0714-2.5s-1.2608-0.51404-1.9751-0.69262c-0.71428-0.17857-4.4534,0.51405-4.4534,0.51405l-1.7857-0.17857-1.7857-1.25,1.9643-5.5357,0.89286-4.1072s1.25-2.3214,1.9643-3.0357c0.71428-0.71429,3.0357-5,3.0357-5l0.35714-2.6786s-0.53571-1.25-1.6071-1.6072c-1.0714-0.35714-5.3571,0.17858-5.3571,0.17858l-2.6786,0.53571s-3.3424,2.5325-4.0567,1.8182c-0.71428-0.71429-1.1219-3.9611-1.1219-3.9611s-3.0376-1.6288-3.0376-2.5217c0-0.89286,1.9662-1.5855,1.9662-1.5855s0.53571-1.0714,0.71428-2.1429c0.17857-1.0714-0.20024-2.8138-0.20024-2.8138l-2.6281-0.77741s-1.4069-0.89472-2.1212-1.0733c-0.71428-0.17857,1.1996-2.2998,1.1996-2.2998l0.89286-1.6072-0.35714-1.0714s-2.2493-0.54655-2.2493-1.2608c0-0.71429,1.6505-3.3604,1.6505-3.3604l-1.5873-1.6703-2.5415-0.82971-0.80806-1.618s0.69262-0.73594,1.5855-1.0931c0.89286-0.35714,1.0498-0.61866,1.0498-0.61866l-1.3852-0.89286v-2.4062c0-0.71429-0.074-2.3304-0.074-2.3304s-1.2718-1.1078-1.4502-2.345c-0.1894-1.3131,2.6371-1.7532,2.6371-1.7532l-0.93619-0.82972-0.49238-1.4917,0.2417-2.1339,2.7525-0.86037,2.9094-0.89285,2.4477,0.1371,0.70345-1.8922,3.2034,0.21106,2.9203,0.0108s0.35715-1.7749,0.35715-2.4892c0-0.71428-1.8705-1.618-1.4286-2.2691,0.40112-0.59101,1.5657-0.89285,2.4585-1.0714,0.89286-0.17858,3.9286-0.71429,4.1072-1.4286,0.17857-0.71428,2.5829-6.1562,2.5829-6.1562s0.96683-1.0083,1.6811-1.1869c0.71429-0.17857,3.9286-0.93432,3.9286-0.93432l-1.764-2.794-3.0051-2.8246-1.6378-4.8539-2.3214-2.1428-1.4286-1.7857v-5.3571l3.0357-6.7857-1.0714-3.2143-0.72512-5.8585,0.81889-2.85s3.5498,0.11543,4.264,0.29401c0.71428,0.17857,7.7634,0.22004,7.7634,0.22004s0.95599-4.0152,1.3131-4.7295c0.35714-0.71428,1.3871-0.826,2.28-1.0046,0.89286-0.17857,3.3495-0.62051,3.3495-0.62051l2.5433,1.1562,1.6071-1.0714z",
          name: "Хабаровский край"
        },
        eu: {
          path:
            "m811.96,462.82c0.98214,1.875,1.1607,1.875,1.875,2.5893l2.6786,2.6786s0.80357,1.1607,1.0714,1.7857c0.26786,0.625-0.0893,1.6964,0.625,1.9643,0.71429,0.26785,2.3214,0.53571,2.7679,0.625,0.44643,0.0893,1.4286,1.0714,2.3214,1.1607,0.89285,0.0893,1.6071,0.0893,2.1428-0.35714,0.53572-0.44643,1.0714-1.25,1.6964-1.7857,0.625-0.53571,2.5893-1.4286,3.125-1.6964,0.53572-0.26785,1.875-0.625,2.3214-1.0714,0.44643-0.44643,1.1607-0.98215,1.1607-2.0536s0.26785-2.7678,0.71428-3.125c0.44643-0.35714,2.9464-1.9643,3.5714-2.5,0.625-0.53571,1.6964-2.2321,2.1429-2.8571,0.44643-0.625,1.875-2.6786,2.2321-3.2143,0.35714-0.53572,2.1429-2.0536,2.1429-2.0536l2.0536-2.3214,0.98214-1.0714,2.6786-1.875,0.71429-0.80357,0.17857-1.1607,0.0893-0.35714-1.5179-0.17857-1.875-0.0893-1.6964,0.44643-1.6964,1.1607-1.3393,1.25-0.80358,1.0714-1.25,1.6072-1.4286,0.98214-1.7857,0.625s-1.25,0.17857-1.7857,0c-0.53571-0.17857-2.1428-0.71429-2.1428-0.71429l-1.4286-0.625-0.80358-0.98214-0.89285-0.625s-0.80357-0.26786-1.1607-0.17857c-0.35714,0.0893-1.7857,0.625-1.7857,0.625l-2.0536,0.71429-2.4107,0.17857s-1.0714,0.44643-1.7857,0.625c-0.71429,0.17857-2.4107,0.80357-2.4107,0.80357l-1.4286,0.89285-1.875,0.26786-0.80357,0.17857-0.35714,0.98215-0.0893,1.4286s-0.44643,1.1607-0.44643,1.5178c0,0.35715-0.53571,1.875-0.53571,1.875l-0.53571,1.1607-0.71429,1.4286z",
          name: "Еврейская автономная область"
        },
        pr: {
          path:
            "m852.68,473.71c0,0.53571,0.53571,1.25,0.53571,1.25l1.4286,1.4286s0.35715,1.0714,0.44643,1.4286c0.0893,0.35714-0.625,2.0536-0.625,2.0536l-1.1607,2.7679s-0.0893,2.2321,0,2.5893c0.0893,0.35715,0.625,1.0714,0.89285,1.5179,0.26786,0.44643,0.80358,1.1607,0.80358,1.5179,0,0.35714-0.80358,1.9643-0.80358,1.9643v1.9643c0,0.44643-0.44642,1.9643-0.44642,1.9643s-0.17858,0.0893-0.17858,1.0714v2.7679c0,0.71429-0.26785,3.0357-0.35714,3.3929-0.0893,0.35714-1.9643,0.53571-2.3214,0.53571-0.35714,0-1.3393-0.98214-1.3393-0.98214s-0.98215-1.6071-1.1607-2.0536c-0.17857-0.44643-1.3393-1.5179-1.3393-1.875,0-0.35715-0.26786-1.6072-0.89286-1.7857-0.625-0.17857-1.5179,0.26786-1.5179,0.26786s-0.53571,0.89286-0.625,1.25c-0.0893,0.35714,0,0.98214-0.0893,1.4286-0.0893,0.44643-0.71429,2.5-0.71429,2.5s-0.625,0.625-1.1607,0.89286c-0.53572,0.26786-2.2322,1.0714-2.2322,1.6071,0,0.53572,1.0714,0.71429,2.1429,2.0536,1.0714,1.3393,3.125,4.6429,3.125,4.6429l2.5,4.2857,1.4286,4.9107s0.44643,1.6071,0.625,2.1429c0.17857,0.53571,0.89286,1.1607,0.98215,1.9643,0.0893,0.80357,0.53571,2.5-0.35715,2.8571-0.89285,0.35715-4.0178,1.0714-4.0178,1.0714l-0.71429,0.625,1.1607,0.71429s0.625,0.44643,1.0714,0.53571c0.44643,0.0893,0.53572,1.4286,0.98215,1.4286,0.44642,0,1.875-0.35714,2.4107-0.71428,0.53571-0.35714,1.3393-0.625,2.1429-0.625,0.80357,0,1.4286-0.44643,1.4286-1.0714,0-0.625-0.625-3.3929-0.625-3.8393,0-0.44642,1.5179-2.5893,1.5179-2.5893v-2.1429c0-0.35714-0.17858-1.4286,0.35714-1.5179,0.53571-0.0893,2.9464-0.71428,2.9464-0.71428s0-1.1607,1.0714-0.26786c1.0714,0.89286,1.5178,2.9464,1.5178,2.9464s1.875,0.35714,2.2322,0.17857c0.35714-0.17857,0.98214-0.625,1.5178-0.98214,0.53572-0.35714,2.5893-0.53572,3.3929-0.53572,0.80357,0,2.1429-0.44642,2.1429-0.44642l-0.26786-1.1607s2.0536-1.25,2.5-1.5179c0.44643-0.26785,2.2321-1.1607,2.8571-1.7857s1.5179-1.4286,1.9643-2.4107c0.44643-0.98215,1.3393-3.125,1.5179-3.4822,0.17857-0.35714,1.1607-2.5,1.4286-3.2143,0.26785-0.71429,0.89285-2.3214,1.3393-3.125,0.44643-0.80357,1.5179-2.8572,1.5179-2.8572s-0.0893-2.3214-0.0893-2.8571c0-0.53571-0.26785-1.875-0.625-2.8571-0.35714-0.98214-0.53571-1.1607-0.44642-2.1429,0.0893-0.98214,0.98214-1.6071,1.6071-2.0536,0.625-0.44643,1.0714-1.4286,1.0714-1.9643,0-0.53571-1.25-2.9464-1.25-2.9464s0.0893-1.1607,0.35714-1.6964c0.26786-0.53572,1.5179-1.7857,1.5179-1.7857l0.17857-2.9464s0.80357-2.2321,0.80357-2.6786c0-0.44643,0.26786-3.9286,0.26786-3.9286l0.89285-2.1429s0.26786-3.3928,0.26786-3.9286c0-0.53571-0.53571-5-0.53571-5.5357,0-0.53572-0.17857-4.1071-0.17857-4.7321s-0.71429-2.1429-0.71429-2.5893c0-0.44643,0.0893-2.1429,0.26786-2.5893,0.17857-0.44643,0.98214-1.9643,0.98214-1.9643s-0.0893-2.0536-0.0893-2.5893c0-0.53571,0.17858-1.6964-0.44642-1.7857s-2.3214,0.80357-2.3214,0.80357l-1.7857,0.71429-1.5178,0.17857-0.71429-0.44643-1.0714-1.4286s-0.26786-1.4286-0.26786-1.7857c0-0.35714-0.53571-1.1607-0.53571-1.1607l-1.25-1.3393-1.3393-1.3393-1.4286-0.71429-1.0714,0.17857s-0.98214,0.17858-1.0714,0.53572c-0.0893,0.35714-0.53572,0.44643-0.80358,0.80357-0.26785,0.35714-1.1607,1.3393-1.1607,1.3393l-0.53571,1.0714-0.44643,1.0714-0.80357,0.80357-0.17858,0.71429,0.35715,0.80357,0.89285,0.98214s0,0.71429,0.53572,0.80358c0.53571,0.0893,1.0714,0.0893,1.0714,0.0893h1.3393l1.25,0.625,0.71429,0.80357,0.0893,1.3393-0.26785,1.4286-0.44643,1.25-0.53572,0.71429-1.5178,0.89285-1.7857,0.89286-0.89285,0.89286,0.26785,0.80357,1.9643,0.80357,0.80357,0.98214-0.0893,0.71429-0.80357,1.0714-1.0714,1.0714-1.875,0.89286-1.7857,0.98214-3.64,1.44-1.6964,0.44643-1.9643,0.26786-0.89286-0.44643-1.25-0.71429s-0.53571-0.26786-0.89285,0c-0.35715,0.26786-0.625,0.98214-0.625,0.98214l-1.5179,1.0714-0.53571,1.6964,0.0893,1.3393s0.35714,0.71428,0.44643,1.1607c0.08,0.44,0.08,1.33,0.08,1.33l-0.0893,1.6071-0.98214,1.0714z",
          name: "Приморский край"
        },
        ma: {
          path:
            "m859.64,182.46s1.0714,0.71428,2.1429,1.25c1.0714,0.53571,3.0357,2.1429,3.2143,2.8571,0.17857,0.71429,0.17857,2.3214,1.0714,2.8571,0.89286,0.53572,3.5714,1.0714,3.5714,1.0714l1.9643,0.89286,1.0714,1.7857,3.0357,1.6072s0.71429,1.0714,0.17857,1.9643c-0.53571,0.89286,0,2.6786,0,2.6786l2.5-0.35714,2.8572,0.35714,1.6071,2.3214,1.9643,2.6786,2.1429,1.0714,1.9643,2.1429,1.0714,1.9643,0.17857,2.5s-0.35715,2.5,0,3.2143c0.35714,0.71429,1.0714,3.75,1.0714,3.75l1.0714,1.7857s0.53572,1.0714,0.53572,1.7857c0,0.71428-0.89286,2.1429-0.89286,2.1429l0.17857,1.7857-1.9643-0.53571-0.35715-1.9643s0.35715-0.71429-0.53571-0.35714c-0.89286,0.35714-1.7857,1.4286-1.7857,1.4286s-0.35715,0.89286-1.0714-0.53572c-0.71429-1.4286-1.7857-1.9643-1.7857-1.9643s-1.6071-0.71429-1.6071-1.9643-1.7857-2.3214-1.7857-2.3214l-1.6072-1.4286s-0.35714,1.7857-0.35714,2.5c0,0.71429,1.4286,1.4286-0.35714,1.4286s-4.1072,0.71429-4.1072,0.71429l-0.89285,1.0714-0.35715,2.6786-1.25,1.25-2.6786,2.8571-0.35714,2.3214-1.0714,1.9643,0.53572,2.3214,1.4286,1.4286s0.53571,0.71428,0.53571,1.4286v2.6786l0.17857,1.6071,1.6072,1.4286,0.17857,4.4643v4.4643l0.17857,3.0357,1.7857,2.6786,1.0714,3.0357,0.35714,0.89285,1.9643,0.35715,1.0714-1.25,1.9643-1.0714s1.6072-0.17857,2.3214-0.17857c0.71429,0,1.6072,0.89285,1.6072,0.89285l0.17857,0.89286-1.7857,1.4286-1.7857,0.71429v1.0714l-0.71429,0.89285-1.7857,0.89286-1.25,0.53571-0.53572,0.71429-0.17857,2.6786v2.3214l-0.89285,0.71429-1.7857-0.89286-0.71428,1.4286-0.53572,2.5-1.0714,1.25-3.2143,0.71429-1.25-0.17858-0.53572-1.6071,2.5-1.6071,1.25-1.9643s1.9643-1.7857,0.53572-1.7857-2.6786,1.0714-2.6786,1.0714l-0.89286,1.25-0.89286,0.53571s-0.89286,0.35714-1.7857-0.17857c-0.89286-0.53571-2.3214-0.71429-2.3214-0.71429s-1.25,0.89286-1.25,1.4286c0,0.53571,0.35714,1.4286-0.53572,1.4286-0.89285,0-3.2143,0.17857-3.2143,0.17857l-2.5,1.6071-2.5,0.89286-1.0714,2.1429,0.35714,1.7857,0.53572,1.9643,0.35714,0.89285,1.6071,1.0714s0.17857,0.89286-1.7857,0.89286h-4.4643l-1.0714,2.1429-1.0714,1.25-2.5,0.35714-2.1429-2.8571-2.6786-1.25s-1.9643-0.71429-2.6786-0.71429c-0.71429,0-3.3929,0.17857-3.3929,0.17857l-2.1429,0.89286-1.7857,0.17857-1.25-0.89286-1.0714-1.7857-0.17857-2.3214,1.25-1.9643,0.17857-2.5-2.5-3.9286-2.3214-1.4286-2.3214-1.25-2.6786-0.71428-2.6786-0.71429-2.1429,0.71429-1.0714,1.4286-1.0714,1.9643-0.89285,1.25h-1.25l-1.25-1.9643-0.17857-0.89286,1.25-0.71429,0.35714-1.4286v-1.25l-1.25-1.25-5.7143-6.7857s-0.35714-1.0714-0.35714-1.7857v-3.2143l-1.78-0.88-0.89286-0.35714-0.17857-3.0357-0.53572-1.4286-1.0714-0.35714-0.35714-1.25,1.6071-1.4286,2.1429-0.17857,1.0714-0.53572,1.0714-1.0714,2.1429-0.17857,1.9643,0.17857,0.53572-1.0714-1.25-1.9643-1.4286-1.25-0.35714-2.1429s1.25-0.53571,1.9643-0.53571c0.71428,0,3.5714-1.0714,3.5714-1.0714l-0.17858-2.6786s0.53572-0.35714,1.25-0.35714c0.71429,0,3.9286,0.35714,3.9286,0.35714l2.1428-1.7857,4.1072-6.4286-0.17858-3.0357-1.4286-1.4286-2.6786-2.8572s-1.25-0.89285-1.4286-1.6071c-0.17857-0.71428-0.35714-1.7857-0.35714-1.7857l2.1428-2.3214,0.17858-1.6071-1.25-1.25-2.5,0.17857-0.71429-0.53572-1.0714-1.0714v-0.71429l3.06-0.86,1.25-1.0714-0.53572-1.4286-1.25-0.89285-0.17857-1.6072,2.1429-3.0357,3.75-1.25,2.1428-1.25-1.25-2.5s0.17858-0.35714,0.89286-0.35714c0.71429,0,3.3929,0.71428,3.3929,0.71428l1.0714-0.17857-0.53572-3.5714v-1.6071l1.4286-0.53572,0.2-2.66-0.17858-0.53571h2.5l1.6072,0.53571,0.53571,1.9643,1.0714,1.0714s0.53571,0.53571,1.25,0.53571,3.75-0.71428,3.75-0.71428l3.5714-0.71429,2.3214-0.35714,2.6786-1.0714,2.3214-1.4286,2.3214-0.89286,1.9643-0.17857,2.8571-0.35714,2.5-1.6072z",
          name: "Магаданская область"
        },
        sh: {
          path:
            "M973.16,321.59c-0.45,0.19-0.81,0.37-1.19,0.94s-0.31,1.53-0.5,1.85c-0.19,0.31-1.53,1.12-1.53,1.12-0.51,0.51-0.87,1.06-2,1.25-1.14,0.19-2.59-0.23-2.85,0.66-0.25,0.88,0.06,2.12,0.69,2.25,0.63,0.12,1.53,0.44,2.1,0.25,0.56-0.19,1.56-1.25,1.56-1.25s0.62,0.3,1,0.93c0.38,0.64,0.97,1.78,0.97,2.03,0,0.26,0.19,1.06-0.07,1.57-0.25,0.5-0.81,2.78-0.56,3.03s1.24,0.9,1.94,0.9c0.69,0,1.09,0.17,1.78-0.78,0.69-0.94,0.93-1.74,1.25-2.56s0.78-1.9,1.09-2.16c0.32-0.25,0.48-1.02-0.22-1.65-0.69-0.63-0.93-1.75-1-2.06-0.06-0.32-0.56-1.09-0.24-1.53,0.31-0.45,1.12-1.31,1-1.69-0.13-0.38-1.38-1.09-1.82-1.47s-0.96-1.82-1.4-1.63zm2.15,20.44s-0.43,0.15-0.69,0.85c-0.25,0.69-0.5,1.74-0.31,2.31s0.56,1.4,0.81,1.78c0.26,0.38,0.75,1.31,0.88,1.62,0.13,0.32,0.53,0.72,1.03,0.91,0.51,0.19,1.12,0.07,1.25-0.44,0.13-0.5,0.19-1.4,0.19-2.03s-0.19-2.15-0.19-2.53,0.07-0.87-0.31-1.31-2.66-1.16-2.66-1.16zm2.53,9.22c-0.56,0.19-1.9,0.5-2.15,0.69-0.26,0.19-0.63,0.52-0.5,1.03,0.12,0.5-0.2,1.24,0.5,1.69,0.69,0.44,2.15,0.96,2.53,1.09s0.55,0.44,1.19,0.13c0.63-0.32,1.09-0.59,1.03-1.41-0.07-0.82-0.59-1.62-0.78-1.88-0.19-0.25-1.5-1.34-1.5-1.34h-0.32zm-117,4.5l-1.87,1.25s0.5,1.12,0,1.12h-1.78s-1.26,0.78-0.5,1.29c0.76,0.5,2.4,0.87,3.03,1,0.63,0.12,1.52,0.65,2.16,1.15,0.63,0.51,1.49,0.87,1.74,1.63,0.26,0.76,0.63,2.28,0.63,2.28l0.91,1.62-0.54,2.16-1.74,0.13s-0.91-1.14-1.41-0.13c-0.51,1.01-0.5,1.77-0.5,2.41,0,0.63,0.27,1.24,0.91,1.37,0.63,0.13,1.48,0.4,2.74,1.41,1.27,1.01,2.03,2.9,2.29,3.53,0.25,0.63,0.24,2.65,0.5,3.41,0.25,0.75,1.4,2.02,2.03,2.53,0.63,0.5,2.03,2.52,2.28,3.03,0.25,0.5,1.25,2.4,1.5,2.9,0.25,0.51,1.78,1.75,1.78,1.75s1.24,1.15,2,1.66,3.8,1.37,4.56,1.37,3.03,0.66,3.28,1.16c0.26,0.51,2.78,5.66,2.78,5.66l5.57,8.34s2.52,2.15,3.15,2.66c0.64,0.5,2.4,3.9,2.91,4.65,0.51,0.76,2.12,4.44,2.5,4.94,0.38,0.51,3.69,5.06,3.69,5.06s2.77,1.88,3.4,2c0.64,0.13,3.41,1.91,3.41,1.91s2.65,2.9,2.78,3.41c0.13,0.5,0.75,3.53,0.75,3.53l2.16,3.4,3.15,2.66,2.5,5.19,0.53,2.25s0,2.15,0.5,2.53c0.51,0.38,5.29,4.06,5.29,4.06l1.65,0.88,1.78,0.25v-2.54s-0.9-1.65-1.15-2.15c-0.26-0.51-0.88-3.03-0.88-3.03s-0.5-0.74-0.5-1.63c0-0.88,0.75-2.4,0.75-2.4s1.53-0.25,2.16-0.25,1.24-0.12,2.25-0.63c1.01-0.5,2.41-0.37,2.41-0.37l2.28,2,1.37,0.78s0.5-1.4,0.5-2.03c0-0.64,0.01-1.53-0.62-2.41-0.64-0.88-1.63-1.88-1.63-1.88l-2.03-1.65s-0.99-1.38-1.75-1.25-1.15,0.24-1.41,0.75c-0.25,0.5,1.52,2.66,0,2.28-1.51-0.38-2.4-0.9-2.78-1.41-0.38-0.5-1.62-1.87-1.62-1.87s-2.4-1.28-3.03-1.53c-0.64-0.26-2.4-0.88-3.04-0.88-0.63,0-4.06-1.15-4.06-1.15l-2.12-2.38-2.41-6.31s-1.12-1.65-1.25-2.41-1.03-3.15-1.16-3.65c-0.12-0.51-0.37-2.28-0.62-2.78-0.25-0.51-1-2.29-1-2.29l-0.53-3.28,1.78-1.62s2.77-1.03,3.41-1.03c0.63,0,5.06-0.13,5.06-0.13l2.4,0.63s2,0.25,2.5,0.25c0.51,0,1.03,0.51,1.16-0.5s-1.53-2-1.53-2l-3.53-0.53-3.66-1.26-2.4-1.78-18.57-15.25-1.5-1.28-1.78-0.12s-0.87,0.13-1.25-0.63-0.4-1.27-1.15-1.9c-0.76-0.64-2.5-1.88-2.5-1.88s-1.52-0.25-2.66-0.5-3.66-1.4-3.66-1.4l-0.4-2.79-1.38-1.25-0.62-1.28,1.25-1.62-0.25-1.91-2.53-2.12-3.54-0.79s-2.4-0.99-2.65-1.5c-0.25-0.5,0.12-2.15,0.12-2.15s-0.62-1.12-1.12-1.5c-0.51-0.38-4.28-1.91-4.28-1.91l-2.91-1.9-1.03-2.63s0.01-1.91-0.63-1.91c-0.63,0-2.78-0.87-2.78-0.87zm119.16,7.94c-0.88,0.25-1.53,0.4-1.72,0.97-0.19,0.56,0.06,1.24,0.31,1.43,0.26,0.19,0.84,0.69,1.47,0.57,0.63-0.13,1.56-0.19,1.82-0.57,0.25-0.38-1.13-1.46-1.32-1.78-0.19-0.31-0.56-0.62-0.56-0.62zm1.75,4.06c-0.51,0.25-1.19,0.56-1.37,1.06-0.19,0.51,0.36,1.37,1,1.75,0.63,0.38,1.05,0.63,1.56,0.06,0.5-0.56,1.09-1.62,1.03-1.93-0.06-0.32-2.22-0.94-2.22-0.94zm0.19,6.97c-0.18,0.01-0.34,0.06-0.5,0.16-0.63,0.37-0.82,1.18-0.82,1.56s0.88,3.09,0.88,3.47-0.87,2.4-1,2.9c-0.13,0.51-0.01,1.33,0.62,2.6,0,0,1.13-0.25,1.38-0.25s1.72-0.94,1.84-1.19c0.13-0.25,0.44-2.28,0.44-2.91s-0.06-2.02-0.12-2.47c-0.07-0.44-0.63-1.4-0.63-1.78s-0.31-1.43-0.69-1.69c-0.28-0.18-0.87-0.44-1.4-0.4zm-4.41,14.53s-1.28,0.03-1.53,0.16c-0.25,0.12-0.69,0.49-0.81,0.75-0.13,0.25-0.57-0.07,0.06,0.62,0.63,0.7,1.02,1.38,1.66,1.38,0.63,0,2.06,0.65,2.31,0.65s1.03-0.21,1.22-0.47c0.19-0.25,0.75-0.49,0.31-1.18-0.44-0.7-0.97-1.06-1.22-1.19s-2-0.72-2-0.72zm1.81,6.47c-0.19,0.31-1.37,1.18-1.43,1.44-0.07,0.25-0.32,0.74-0.38,1.25-0.06,0.5-0.31,1.77-0.31,2.09s-0.53,1.59-0.78,2.16c-0.26,0.56-0.5,1.49-0.44,2.12s-0.07,1.09,0.19,1.66c0.25,0.57,0.24,1.18,0.56,1.37s-0.04,1.29,1.09,0.6c1.14-0.7,1.63-1.34,1.82-1.79,0.19-0.44,0.53-2.09,0.72-2.34,0.18-0.25,0.56-1.43,0.68-1.81,0.13-0.38,0.63-1.9,0.63-2.22s0.06-1.59-0.25-2.22c-0.32-0.63-1.19-1.31-1.19-1.31l-0.91-1zm-4.9,15.4c-0.26,0.07-0.97,0.19-1.28,0.44-0.32,0.26-0.63,0.56-0.69,0.75s-0.5,0.94-0.5,1.19,0.06,1.15,0,1.41c-0.06,0.25,0,0.56-0.56,0.81-0.57,0.25-1.22,0.43-1.6,0.56s-0.81,0.44-1.06,0.69-0.94,0.72-0.94,0.72-0.53,0.18-0.53,0.5c0,0.31,0.41,0.99,0.53,1.25,0.13,0.25,0.75,1.22,0.75,1.22l-0.18,0.75s-1.04,0.74-1.1,1.06c-0.06,0.31-0.12,1.59-0.12,1.97s0.06,1.74,0.06,2c0,0.25,0.19,1.84,0.19,2.09s0.15,1.34,0.28,1.97c0.12,0.63,0.12,1.06,0.43,1.44,0.32,0.38,0.56,1.03,0.88,1.22s0.5,0.68,0.88,0.62c0.37-0.06,1.71-1.03,1.71-1.03s0.63-0.62,0.75-1.06c0.13-0.44,0.44-2.16,0.44-2.16s0.19-1.37,0.13-1.69c-0.07-0.31-0.69-0.65-0.75-1.22-0.07-0.56-0.07-0.8,0-1.68,0.06-0.89,0.87-2.09,1.06-2.35,0.19-0.25,0.84-1.18,0.97-1.93,0.12-0.76-0.07-1.84,0.19-2.16,0.25-0.32,0.8-0.75,1.06-1.06,0.25-0.32,1.06-1.65,1.18-2.03,0.13-0.38,0.13-1.4,0.13-1.91s-0.31-1.37-0.56-1.56c-0.26-0.19-1.75-0.82-1.75-0.82zm-8.35,23.69c-0.31-0.01-0.62,0-0.75,0.03-0.25,0.07-0.56,0-0.81,0.32-0.25,0.31-0.78,0.71-1.22,0.84s-0.87,0-0.93,0.31c-0.07,0.32-0.26,0.87-0.26,1.13,0,0.25,0.06,0.74,0.32,1,0.25,0.25,0.62,0.21,0.75,0.78,0.12,0.57,0.19,1.18,0.12,1.44-0.06,0.25-0.31,1.12-0.37,1.43-0.07,0.32-0.19,0.4-0.38,1.03-0.19,0.64-0.31,1.38-0.31,1.76v1.15c0,0.38-0.06,1.19,0.13,1.44,0.18,0.25,0.62,0.56,0.87,0.81s1.47,0.47,1.72,0.47,0.5-0.28,0.75-0.66,0.56-0.99,0.56-1.56-0.12-2.96-0.06-3.28,1.12-0.84,1.19-1.41c0.06-0.56,0.03-1.74,0.09-2,0.06-0.25,0.31-1.15,0.31-1.15s0.75-0.44,0.88-0.81c0.12-0.38,0.25-1.13,0.25-1.5,0-0.38-0.19-1.54-0.19-1.54h-1.84c-0.19,0-0.5-0.02-0.82-0.03zm7.85,1.88c-0.57,1.01-0.72,0.99-0.78,1.75-0.07,0.76-0.88,1.53-0.88,1.53s-0.31,0.31-0.44,0.62c-0.12,0.32-0.69,0.81-0.06,1s1.72,0.19,1.97,0.07c0.25-0.13,0.75-0.69,1-0.82,0.25-0.12,0.44-0.49,0.44-1.37,0-0.89-0.19-1.9-0.31-2.16-0.13-0.25-0.94-0.62-0.94-0.62z",
          name: "Сахалинская область"
        },
        ka: {
          path:
            "M918.56,146.75l-1.65,0.84c-0.26,0.13-1.25,0.88-1.25,0.88l-0.13,1,0.13,2.78,0.25,1.16-0.88,2.43-1.72,4.69-0.93,1.56-0.44,1.41-0.06,1.81s-0.22,1.03-0.47,1.22c-0.26,0.19-0.82,0.13-0.82,0.13h-1.81-2.59l-1.6-0.19-1.68-0.31s-0.53,0.25-0.85,0.25c-0.31,0-0.68,0.56-1,0.75-0.31,0.19-1.37,0.74-1.56,1-0.19,0.25-1.28,0.78-1.59,0.9-0.32,0.13-1.38,1-1.63,1.19s-0.78,0.56-1.22,0.63c-0.44,0.06-0.94-0.32-0.94-0.32s-0.62-0.99-0.74-1.25c-0.13-0.25-0.97-1.72-0.97-1.72s-0.07-1.31-0.13-1.62c-0.06-0.32-0.06-1.47-0.12-1.72-0.07-0.25-0.13-1.06-0.13-1.06s0.25-1.22,0.31-1.66c0.07-0.44,0.38-0.75,0.38-0.75s0-0.56-0.19-0.87c-0.19-0.32-0.81,0.06-0.81,0.06l-1.75,0.44-1.97,0.81-1.66,0.5-1.18,0.19-2.04-0.25s-1.62-0.38-1.87-0.57-1.03-0.12-1.03-0.12l-0.63,0.56-0.87,1.16-0.63,0.81-0.84,0.88s-1.31,0.74-1.56,0.87c-0.26,0.13-0.94,0.59-0.94,0.59l-1.22,1.32-1.44,2.28s-2.27,2.28-2.59,2.47-1.18,0.87-1.44,1.12c-0.25,0.25-1.34,0.38-1.72,0.44s-0.74,0.62-1,0.94c-0.25,0.31-1.15,1.28-1.15,1.28l-0.81,0.56s-0.75-0.31-1.13-0.31-0.44,0.31-0.44,0.31l-0.97,1.91-1,2.18s-0.5,1.59-0.5,1.91,0.63,0.44,0.88,0.63c0.25,0.18,1.65,0.8,2.03,1.06,0.38,0.25,1,0.84,1.31,1.15,0.32,0.32,1.41,1.32,1.41,1.32s-0.13,0.43-0.06,0.68c0.06,0.26,0.37,1.15,0.68,1.66,0.32,0.51,0.94,0.81,0.94,0.81s4.09,1.16,4.35,1.28c0.25,0.13,1.09,1.32,1.09,1.32l0.37,0.68s1.13,0.85,1.44,1.04c0.32,0.18,1.22,0.31,1.22,0.31l0.62,0.62,0.44,1.19s-0.31,1.59-0.37,1.97c-0.07,0.38-0.07,0.99,0,1.37,0.06,0.38,1.12-0.06,1.12-0.06s1.4-0.31,1.97-0.25,1.56,0.25,1.56,0.25,1.22,0.4,1.35,0.66c0.12,0.25,0.75,1.18,0.75,1.18l1.15,1.5,1.25,1.72,1.85,1.32,2,1.65,1,1.31s0.84-0.99,1.03-1.31c0.19-0.31,0-0.74,0-1.19,0-0.44-0.37-0.71-0.75-0.96-0.38-0.26-0.97-1.19-1.35-1.63-0.37-0.44-0.56-0.84-0.56-0.84s-0.81-1.06-1.06-1.31c-0.25-0.26-1.09-0.94-1.34-1.19-0.26-0.26-1.25-1.34-1.69-1.97s0-0.75,0-1.06c0-0.32,0.87-1.04,0.87-1.04s0.94-1.3,1.19-1.62,0.44-1.21,0.5-1.59,0.47-1.31,0.85-1.5c0.37-0.19,1.18-0.38,1.68-0.44,0.51-0.06,1.84,0.5,1.97,0.81,0.13,0.32-0.62,0.69-0.75,0.94-0.12,0.25,0,1.59-0.06,2.16-0.06,0.56,0.12,1.71,0.12,2.28,0,0.56,0.75,1.37,0.75,1.37s1.13,1.4,1.44,1.72c0.32,0.32,1.28,0.93,1.59,1.19,0.32,0.25,1.57,1.65,1.57,1.65l3.34,2.32,0.97,0.59s0.75,1.25,0.81,1.69c0.07,0.44,0.44,0.93,0.44,0.93s1.03,0.22,1.34,0.47c0.32,0.26,0.63,1.31,0.63,1.69s-0.12,1.03-0.44,1.47c-0.31,0.44-1.21,0.93-1.53,1.25s-0.69,0.75-0.69,0.75-0.06,5.68-0.06,6.25,0.75,1.78,1,2.16,1.21,2.14,1.72,2.9c0.5,0.76,0.69,1.12,0.69,1.44s0.25,1.66,0.25,1.66,0.56,10.46,0.62,11.09,0.59,1.03,0.78,1.41,0.75,0.93,1,1.18c0.26,0.26,0.75,0.84,0.88,1.16,0.12,0.32,0.97,1.62,0.97,1.62s0.74,2.78,0.87,3.54c0.13,0.75,0.13,1.72,0.13,1.72s1.31,3.96,1.31,4.4v1.47s-0.81,1.75-1.13,2.13c-0.31,0.37-0.06,1.77-0.06,2.09,0,0.31-1.34,2.46-1.84,2.84-0.51,0.38-1.31,1-1.44,1.38s0.25,1.03,0.25,1.03l1.81,0.87,2.28,0.94s1.09,2.15,1.47,2.66c0.38,0.5,0.56,1.59,0.56,1.9,0,0.32,0.32,3.47,0.44,4.16,0.13,0.69,0.38,1.65,0.56,2.09,0.19,0.45,1.79,1.5,1.79,1.5s2.21,3.94,2.34,4.25c0.13,0.32,0.81,1.69,1.06,2,0.08,0.1,0.29,0.25,0.53,0.41,0.62,0.78,3.07,1.94,3.07,1.94l0.93,0.62s4.63,4.25,4.69,4.5c0.06,0.26,2.78,2.32,2.78,2.32s2.34,0.84,2.6,1.03c0.25,0.19,1.68,0.75,1.68,0.75l14.91,10.22,2.03,1.21,3.03,0.94s1.19,1.59,1.44,1.72,3.15,1.19,3.59,1.19c0.45,0,1.47,1,1.47,1s2.59,2.78,2.97,3.03,2.56,1.91,2.56,1.91,2.09,1.18,2.47,1.18,2.85-0.5,2.85-0.5l0.68-0.62v-2.03s-0.06-1.69-0.06-1.88,0-1.21-0.25-1.53-0.81-0.88-0.81-0.88,0.18-1.52,0.44-1.96c0.25-0.45,0.43-0.69,0.43-1.07s-0.31-1.15-0.56-1.4c-0.25-0.26-0.5-1.19-0.5-1.19s-0.06-2.34-0.31-2.66c-0.25-0.31-1.09-0.99-1.28-1.62s-0.5-1.03-0.63-1.41c-0.12-0.38-1.37-1.62-1.62-2.06-0.26-0.44-1.53-1.59-1.72-1.84-0.19-0.26-0.31-1.28-0.5-2.1s-1.02-0.75-1.78-0.75-1.12-0.06-1.38-0.25c-0.25-0.19,0.5-0.43,0.75-0.56,0.26-0.13,1.09-0.9,1.28-1.22,0.19-0.31,0.5-1.37,0.5-1.37l0.69-4.22,1.91-1.6c0.38-0.31,0.25-0.93-0.19-1.31s-1.09-0.25-1.41-0.31c-0.31-0.06-0.8-0.84-1.31-1.16-0.5-0.31-0.84-0.81-1.28-1s-1.24-0.31-2.06-0.56-1.4-1.03-1.91-1.47c-0.5-0.44-0.44-1-0.5-1.25s-0.06-1.96-0.06-2.84v-1.22s-0.97-2.78-0.97-3.1c0-0.31,0.03-1.05,0.16-1.43,0.12-0.38,0.49-0.69,0.75-0.94,0.25-0.25,1.43-0.78,1.43-0.78l1.47-0.88s0.38-1.71,0.38-2.59-0.5-2.25-0.63-2.56c-0.12-0.32-1.34-0.72-1.34-0.72s-1.5-1.19-1.94-1.19-2.46-0.56-2.9-0.69c-0.45-0.12-1.6-0.78-1.85-0.9-0.25-0.13-1.71-1.25-2.09-1.56-0.38-0.32-1.25-1.1-1.5-1.41-0.26-0.32-0.75-1.44-0.88-1.75-0.12-0.32-0.84-1.66-0.84-1.66s0-0.55-0.13-1.12c-0.12-0.57-0.18-1.65-0.18-2.41s1.02-0.62,1.28-0.62c0.25,0,1.68-0.25,2-0.32,0.31-0.06,1.03-0.74,1.22-1,0.19-0.25,0.37-1.77,0.31-2.09s-0.65-0.81-1.22-1-0.94-0.78-1.12-0.84c-0.19-0.07-2.16-0.88-2.16-0.88s-2.06-0.69-2.5-0.75-0.59,0.44-0.84,0.63c-0.26,0.19-0.5,0.37-1.32,0.37s-1.22-0.44-1.22-0.44l-0.87-1.18s-1.18,0.06-1.81,0.06c-0.64,0-0.91-0.59-1.16-0.91-0.25-0.31-1.06-0.56-1.06-0.56s-0.47-0.19-0.69-0.28c0-0.06,0.19-3.44,0.13-3.69-0.07-0.25-0.66-1.21-0.91-1.47-0.25-0.25-1.37-0.44-1.94-0.44s-1.4,0.6-1.84,0.85-1.06,0.75-1.31,0.94c-0.26,0.19-0.13,1.12-0.13,1.68,0,0.57-0.34,1.03-0.72,1.35-0.38,0.31-0.68,0.25-1.31,0.25s-1.12-0.19-1.63-0.31c-0.5-0.13-0.77-0.56-1.03-0.82-0.25-0.25-1.06-0.96-1.37-1.47-0.32-0.5-0.19-1.05-0.25-1.62-0.07-0.57-0.84-1.65-1.1-2.16-0.25-0.5-1.24-2.34-1.37-2.59s-0.56-1.28-1-1.91-0.9-1.99-1.28-2.62-0.74-1.09-1.5-2.1-0.78-0.56-1.35-0.68c-0.56-0.13-0.99-0.78-1.5-1.35-0.5-0.57-0.84-0.93-1.15-1.75-0.32-0.82-0.37-0.83-0.94-2.15-0.57-1.33-0.07-1.09,0.19-1.66,0.25-0.57,1.06-0.62,1.06-0.62l0.47-0.88s-0.38-1.59-0.31-2.09c0.06-0.51,0.36-0.56,1.06-0.75,0.69-0.19,1.56,0.75,1.94,0.75s1.59-0.5,1.9-0.82c0.32-0.31,0.32-1.08,0.32-1.71,0-0.64-0.62-1-1.13-1.13s-0.94-0.56-0.94-1.06c0-0.51,0.25-1.21,0.25-1.91,0-0.69,0-0.74-0.06-1.25-0.06-0.5-0.12-0.53-0.25-0.91-0.13-0.37,0.06-1.18,0.19-1.68,0.12-0.51,0.56-0.44,0.94-0.38,0.37,0.07,1.24,0.69,1.62,0.94s0.65,0.62,0.84,1,1,1.09,1.63,1.16c0.63,0.06,1.15-0.38,1.15-0.38s-0.09-0.52-0.34-1.09-0.81-1.44-1-1.81c-0.19-0.38-0.5-1.22-0.75-1.6s-0.44-0.5-0.44-0.75,0.69-2.09,0.69-2.41v-3.78c0-0.82,0.19-1.4,0.38-1.72,0.19-0.31,0.87-1.24,1.25-2.06s0.84-1.15,1.09-1.9c0.25-0.76,0.87-1.4,1.44-2.16s0.77-1,1.15-1.12c0.38-0.13,2.91,0.06,3.29,0.06,0.37,0,1.96-0.44,2.65-0.56,0.7-0.13,2.71-0.31,3.41-0.57,0.69-0.25,0.25-0.59,0.18-0.84-0.06-0.25-1.27-0.94-1.65-1.06-0.38-0.13-1.12-0.69-1.38-0.94-0.25-0.25-0.5-1.16-0.5-1.16s-0.59-2.96-0.65-3.28c-0.07-0.31-0.75-1.56-0.75-1.56s-0.13-5.18-0.13-5.63c0-0.44-0.68-2.02-1.37-2.34-0.7-0.32-0.91-0.99-0.91-1.5s0-0.96-0.12-1.59c-0.13-0.64-0.75-1.37-1-1.88-0.26-0.5,0.12-0.78,0.12-1.22s-0.12-1.18-0.5-1.5c-0.38-0.31-0.68-0.49-0.94-0.75-0.25-0.25-0.46-0.9-0.46-1.53s0.28-1,0.34-1.31c0.06-0.32,0.06-1.09-0.06-1.53-0.13-0.44-0.35-1.06-0.41-1.31-0.06-0.26-0.37-1.22-0.37-1.22s-0.5-0.44-0.69-0.44-0.94-0.19-0.94-0.19l-1.78-0.31s-1.69-0.44-1.81-0.69c-0.13-0.25-1.04-0.69-1.04-0.69l-1.56-0.59zm7.25,70.22c-0.88,0.44-1.12,0.43-1.06,1s0.37,1.09,0.63,1.47c0.25,0.38,0.44,0.93,0,1.44-0.45,0.5-1.45,0.52-1.19,1.15,0.25,0.63,0.49,1.06,0.75,1.31,0.25,0.26,0.81,0.9,0.94,1.41,0.12,0.51-0.01,1.06,0.31,1.56,0.31,0.51,0.31,0.69,0.69,0.69,0.37,0,0.59,0.32,0.65-0.5s-0.06-0.95,0-2.84c0.06-1.9,0-2.84,0.06-3.41,0.07-0.57,0.26-1.37,0-1.75-0.25-0.38-1.28-0.9-1.4-1.22-0.13-0.31-0.38-0.31-0.38-0.31zm58.91,12.47c-1.07,0.71-1.16,0.62-1.16,1.15,0,0.54-0.18,0.9,0.53,0.72,0.72-0.18,0.91-0.18,1-0.62,0.09-0.45-0.37-1.25-0.37-1.25zm-10.97,4.53c-0.63,0.45-1.08,0.2-0.81,1.09,0.27,0.9,0.44,1.16,1.15,1.25,0.72,0.09,0.73,0.1,2.07,0.1s2.31,0.06,3.03,0.06c0.71,0,0.99,0.36,1.43,0,0.45-0.36,0.63-0.07,0.54-0.78-0.09-0.72-1.24-0.9-2.22-0.81-0.98,0.08-1.52,0.34-3.13-0.19-1.6-0.54-2.06-0.72-2.06-0.72z",
          name: "Камчатский Край"
        },
        in: {
          path:
            "m63.393,395.68,0.08929,5.2679,17.946-8.5714-1.3393-1.25-2.9464-1.25-1.5179-1.9643-2.4107,2.4107-4.1071-2.6786-1.875,1.0714,0.08929,5.8929-1.5179,1.0714z",
          name: "Республика Ингушетия"
        },
        cc: {
          path:
            "m63.482,401.04,1.0714,2.5,3.125,1.6964,3.4821,0.44642,2.1429-1.9643,2.1429,1.7857,2.5-1.5178-0.08929-1.6072,1.875-2.1428,2.8571,0.44642,3.8393-2.8571-0.625-1.9643-4.4643-0.53572,0.44643-2.7679z",
          name: "Чеченская Республика"
        }
      }
    });
    /* Start:"a:4:{s:4:"full";s:85:"/local/templates/.default/lib/spincrement.js/jquery.spincrement.min.js?14996860961329";s:6:"source";s:70:"/local/templates/.default/lib/spincrement.js/jquery.spincrement.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
    !(function(t) {
      t.extend(t.easing, {
        spincrementEasing: function(t, e, a, n, r) {
          return e === r ? a + n : n * (-Math.pow(2, (-10 * e) / r) + 1) + a;
        }
      }),
        (t.fn.spincrement = function(e) {
          function a(t, e) {
            if (
              ((t = t.toFixed(e)),
              e > 0 &&
                "." !== r.decimalPoint &&
                (t = t.replace(".", r.decimalPoint)),
              r.thousandSeparator)
            )
              for (; o.test(t); )
                t = t.replace(o, "$1" + r.thousandSeparator + "$2");
            return t;
          }
          var n = {
              from: 0,
              to: null,
              decimalPlaces: null,
              decimalPoint: ".",
              thousandSeparator: ",",
              duration: 1e3,
              leeway: 50,
              easing: "spincrementEasing",
              fade: !0,
              complete: null
            },
            r = t.extend(n, e),
            o = new RegExp(/^(-?[0-9]+)([0-9]{3})/);
          return this.each(function() {
            var e = t(this),
              n = r.from;
            e.attr("data-from") && (n = parseFloat(e.attr("data-from")));
            var o;
            if (e.attr("data-to")) o = parseFloat(e.attr("data-to"));
            else if (null !== r.to) o = r.to;
            else {
              var i = new RegExp(r.thousandSeparator, "g");
              o = parseFloat(e.text().replace(i, ""));
            }
            var l = r.duration;
            r.leeway &&
              (l += Math.round(
                (r.duration * (2 * Math.random() - 1) * r.leeway) / 100
              ));
            var c;
            if (e.attr("data-dp")) c = parseInt(e.attr("data-dp"), 10);
            else if (null !== r.decimalPlaces) c = r.decimalPlaces;
            else {
              var s = e.text().indexOf(r.decimalPoint);
              c = s > -1 ? e.text().length - (s + 1) : 0;
            }
            e.css("counter", n),
              r.fade && e.css("opacity", 0),
              e.animate(
                { counter: o, opacity: 1 },
                {
                  easing: r.easing,
                  duration: l,
                  step: function(t) {
                    e.html(a(t * o, c));
                  },
                  complete: function() {
                    e.css("counter", null),
                      e.html(a(o, c)),
                      r.complete && r.complete(e);
                  }
                }
              );
          });
        });
    })(jQuery);
    /* End */
    /* End */
    /* Start:"a:4:{s:4:"full";s:46:"/local/templates/home/js/all.js?14996860962655";s:6:"source";s:31:"/local/templates/home/js/all.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/

    // MAP INTERACTIVE //
    $("#vmap").vectorMap({
      map: "russia",
      backgroundColor: null,
      borderColor: "#000",
      borderWidth: 1,
      color: "#fff",
      hoverColor: "#ed3c40",
      enableZoom: false,
      showTooltip: true,
      selectedColor: "#ed3c40",
      onRegionClick: function(element, code, region, e) {
        $(".map-popover").css("display", "none");
        popover = $("#popover-" + code);
        if (popover.length > 0) {
          popover.css({
            top: e.pageY + "px",
            left: e.pageX + "px",
            display: "block"
          });
        }
      }
    });
  }
});

$(document).ready(function() {
  (function($) {
    $.fn.bgscroll = function(options) {
      var x = $.extend(
        {
          bgpositionx: 50,
          direction: "bottom",
          debug: !1,
          min: 0,
          max: 100
        },
        options
      );

      var a = $(document).height() - $(window).height(),
        b = a - (this.offset().top + this.height());

      this.offset().top < a && (b = 0);

      var c = this.offset().top + this.height();

      if ($(window).scrollTop() > b && $(window).scrollTop() < c) {
        var d = (($(window).scrollTop() - b) / (c - b)) * 100;

        "top" == x.direction && (d = 100 - d),
          d > x.max && (d = x.max),
          d < x.min && (d = x.min);

        if (x.debug) {
          console.log("Element background position: " + d + " %");
        }
      }

      return this.css({
        backgroundPosition: x.bgpositionx + "% " + d + "%"
      });
    };
  })(jQuery);

  if ($(".bg").hasClass("bg")) {
    $(window).scroll(function() {
      $(".bg-1").bgscroll({
        direction: "bottom", // направление bottom или top
        bgpositionx: 50, // x позиция фонового изображения, от 0 до 100, размерность в %, 50 - означает по центру
        debug: false, // Режим отладки
        min: 0, // минимальное положение (в %) на которое может смещаться фон
        max: 200 // максимальное положение (в %) на которое может смещаться фон
      });

      $(".bg-2").bgscroll({
        direction: "bottom",
        min: 0, // минимальное положение (в %) на которое может смещаться фон
        max: 100
      });

      $(".bg-3").bgscroll({
        direction: "bottom",
        min: 0, // минимальное положение (в %) на которое может смещаться фон
        max: 100
      });

      $(".bg-4").bgscroll({
        direction: "top",
        min: 0, // минимальное положение (в %) на которое может смещаться фон
        max: 100
      });
    });
  }
});

//ефект увеличения числа
$(document).ready(function() {
  if ($(".section-3").hasClass("section-3")) {
    let flag = false;
    $(document).scroll(function() {
      s_top = $(window).scrollTop();
      numOffsetTop = $(".section-3").offset().top;
      numHeight = $(".section-3").height();

      if (s_top > numOffsetTop - numHeight / 2 && flag == false) {
        flag = true;
        for (let i = 0; i < 3; i++) {
          var numb_end = $(".sec3-bot .num")
            .eq(i)
            .attr("data-num"); // Получаем конечное число
          console.log(numb_end);
          $({ numberValue: 0 }).animate(
            { numberValue: numb_end },
            {
              duration: 1500, // Продолжительность анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд
              easing: "linear",

              step: function(val) {
                $(".sec3-bot .num")
                  .eq(i)
                  .html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
              }
            }
          );
        }
      }
    });
  }
  if($(".numer-block").hasClass("numer-block")){
    for (let i = 0; i < 2; i++) {
      var numb_end = $(".numer-block .num")
        .eq(i)
        .attr("data-num"); // Получаем конечное число
      console.log(numb_end);
      $({ numberValue: 0 }).animate(
        { numberValue: numb_end },
        {
          duration: 1500, // Продолжительность анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд
          easing: "linear",

          step: function(val) {
            $(".numer-block .num")
              .eq(i)
              .html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
          }
        }
      );
    }
  }
});

//модалка
$(document).ready(function() {
  $(".myLinkModal").click(function(event) {
    console.log('123')
    event.preventDefault();
    $("#myOverlay").fadeIn(297, function() {
      $("#myModal")
        .css("display", "block")
        .animate({ opacity: 1 }, 198);
    });
  });

  $("#myModal__close, #myOverlay").click(function() {
    $("#myModal").animate({ opacity: 0 }, 198, function() {
      $(this).css("display", "none");
      $("#myOverlay").fadeOut(297);
    });
  });

  $(".myLinkModal-map").click(function(event) {
    event.preventDefault();
    $("#myOverlay").fadeIn(297, function() {
      $("#myModal-map")
        .css("display", "block")
        .animate({ opacity: 1 }, 198);
    });
  });

  $("#myModal__close, #myOverlay").click(function() {
    $("#myModal-map").animate({ opacity: 0 }, 198, function() {
      $(this).css("display", "none");
      $("#myOverlay").fadeOut(297);
    });
  });
});

jQuery(document).ready(function($) {
	$('.accordeon__triger').on('click', function(e){
    e.preventDefault();
    
    var $this = $(this),
        item = $this.closest('.accordeon__item'),
        list = $this.closest('.accordeon__list'),
        items = list.find('.accordeon__item'),
        content = item.find('.accordeon__inner'),
        otherContent = list.find('.accordeon__inner'),
        duration = 500;
    
    if (!item.hasClass('active')) {
       items.removeClass('active');
       item.addClass('active');

       otherContent.stop(true, true).slideUp(duration);
       content.stop(true, true).slideDown(duration);
     } else {
       content.stop(true, true).slideUp(duration);
       item.removeClass('active');
     }
  });
});


$(document).ready(function() {
	$(".fancybox").fancybox({
		openEffect: 'fade',
    prevEffect: 'fade',
    nextEffect: 'fade'
	});
});

$('#play').on('click', function(e) {
  e.preventDefault();
  var player = document.getElementById("player");
  var player = player.getElementsByTagName("iframe")[0].contentWindow;
	e.preventDefault();
	player.postMessage('{"event": "command", "func": "playVideo", "args": ""}', "*");
	$('#video-cover').hide();
	$('#play').hide();
})