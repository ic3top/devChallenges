(function(e){function t(t){for(var a,u,c=t[0],i=t[1],s=t[2],b=0,l=[];b<c.length;b++)u=c[b],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&l.push(r[u][0]),r[u]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);d&&d(t);while(l.length)l.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,c=1;c<n.length;c++){var i=n[c];0!==r[i]&&(a=!1)}a&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},r={app:0},o=[];function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/devChallenges/quote-generator/dist/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var d=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"04d3":function(e,t,n){"use strict";n("9d13")},"0790":function(e,t,n){},"09af":function(e,t,n){"use strict";n("baad")},"13a1":function(e,t,n){},"13a18":function(e,t,n){"use strict";n("5c8a")},3839:function(e,t,n){"use strict";n("13a1")},"3d0c":function(e,t,n){},"44a9":function(e,t,n){},"4e09":function(e,t,n){"use strict";n("3d0c")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r=n("3fd4");n("7dd6");function o(e,t,n,r,o,u){var c=Object(a["M"])("v-header"),i=Object(a["M"])("router-view"),s=Object(a["M"])("v-footer"),d=Object(a["M"])("el-container");return Object(a["D"])(),Object(a["i"])(d,null,{default:Object(a["bb"])((function(){return[Object(a["m"])(c),Object(a["m"])(i),Object(a["m"])(s)]})),_:1})}var u=Object(a["fb"])("data-v-b25c9f4c");Object(a["G"])("data-v-b25c9f4c");var c=Object(a["l"])(" Roll ");Object(a["E"])();var i=u((function(e,t,n,r,o,i){var s=Object(a["M"])("search-button"),d=Object(a["M"])("el-button"),b=Object(a["M"])("el-header");return Object(a["D"])(),Object(a["i"])(b,null,{default:u((function(){return[Object(a["m"])(s),Object(a["m"])(d,{type:"info",loading:e.getLoadingState,icon:"el-icon-refresh",onClick:i.setRandomQuoteHandler},{default:u((function(){return[c]})),_:1},8,["loading","onClick"])]})),_:1})})),s=n("5530"),d=n("5502"),b=Object(a["fb"])("data-v-61e15bcb");Object(a["G"])("data-v-61e15bcb");var l={for:"search-input",class:"label-error"};Object(a["E"])();var f=b((function(e,t,n,r,o,u){return Object(a["D"])(),Object(a["i"])("form",{onSubmit:t[4]||(t[4]=Object(a["eb"])((function(){return u.searchRequest&&u.searchRequest.apply(u,arguments)}),["prevent"])),class:"form"},[Object(a["cb"])(Object(a["m"])("label",l,"At least 3 characters...",512),[[a["Y"],!o.valid]]),Object(a["cb"])(Object(a["m"])("input",{type:"search",class:"search-input",id:"search-input",name:"search-input",placeholder:"Key word","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.query=e}),onInput:t[2]||(t[2]=function(e){return o.valid=!0}),onFocusout:t[3]||(t[3]=function(e){return o.valid=!0}),autocomplete:"off"},null,544),[[a["X"],o.query]])],32)})),p={name:"SearchButton",data:function(){return{query:"",valid:!0}},methods:{searchRequest:function(){this.query.length<3?this.valid=!1:(this.$router.push({name:"Search",params:{query:this.query}}),this.query="")}}};n("8919");p.render=f,p.__scopeId="data-v-61e15bcb";var O=p,g={name:"VHeader",components:{SearchButton:O},computed:Object(s["a"])({},Object(d["c"])(["getLoadingState"])),methods:Object(s["a"])(Object(s["a"])({},Object(d["b"])(["setRandomQuote"])),{},{setRandomQuoteHandler:function(){"/"===this.$route.path?this.setRandomQuote():this.$router.push({path:"/"})}})};n("3839");g.render=i,g.__scopeId="data-v-b25c9f4c";var j=g,m=Object(a["fb"])("data-v-1c5f5f84");Object(a["G"])("data-v-1c5f5f84");var h=Object(a["l"])("Random quote app - devChallenges.io "),v=Object(a["l"])(" Written by @ic3top ");Object(a["E"])();var Q=m((function(e,t,n,r,o,u){var c=Object(a["M"])("el-link"),i=Object(a["M"])("el-footer");return Object(a["D"])(),Object(a["i"])(i,null,{default:m((function(){return[h,Object(a["m"])(c,{href:"https://github.com/ic3top",target:"_blank"},{default:m((function(){return[v]})),_:1})]})),_:1})})),y={name:"VFooter"};n("4e09");y.render=Q,y.__scopeId="data-v-1c5f5f84";var x=y,q={name:"App",components:{VHeader:j,VFooter:x}};n("c88a");q.render=o;var P=q,R=n("1da1"),_=n("3835"),S=(n("96cf"),n("d3b7"),n("bc3a")),w=n.n(S),C=w.a.create({baseURL:"https://quote-garden.herokuapp.com/api/v3/"});C.interceptors.response.use((function(e){return e.data}),(function(e){return Promise.reject(e)}));var M=C,E=Object(d["a"])({state:{RandomQuote:[{quoteText:"Searching..."}],loadingState:!1,isExpanded:!1,authorQuotes:[],totalAmountOfQuotes:0,pagination:{},searchResults:{},currentQuery:""},mutations:{setRandomQuote:function(e,t){var n=Object(_["a"])(t,1);e.RandomQuote=n[0]},setLoadingState:function(e,t){e.loadingState=t},setExpanded:function(e,t){e.isExpanded=t},setAuthorQuotes:function(e,t){e.authorQuotes=t},setPagination:function(e,t){e.pagination=t},setTotalAmountOfQuotes:function(e,t){e.totalAmountOfQuotes=t},setSearchResults:function(e,t){e.searchResults=t},setCurrentQuery:function(e,t){e.currentQuery=t}},actions:{setRandomQuote:function(e){return Object(R["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,n("setLoadingState",!0),n("setExpanded",!1),t.next=5,M.get("quotes/random");case 5:a=t.sent,n("setRandomQuote",a.data),n("setLoadingState",!1);case 8:case"end":return t.stop()}}),t)})))()},expandQuotes:function(e,t){return Object(R["a"])(regeneratorRuntime.mark((function n(){var a,r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(a=e.commit,r=e.state,!r.isExpanded){n.next=3;break}return n.abrupt("return");case 3:return a("setLoadingState",!0),a("setExpanded",t),n.next=7,M.get("quotes",{params:{author:r.RandomQuote.quoteAuthor,page:1}});case 7:o=n.sent,a("setPagination",o.pagination),a("setAuthorQuotes",o.data),a("setTotalAmountOfQuotes",o.totalQuotes),a("setLoadingState",!1);case 12:case"end":return n.stop()}}),n)})))()},changePageAuthorQuotes:function(e,t){return Object(R["a"])(regeneratorRuntime.mark((function n(){var a,r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,r=e.state,a("setLoadingState",!0),n.next=4,M.get("quotes",{params:{author:r.RandomQuote.quoteAuthor,page:t}});case 4:o=n.sent,a("setPagination",o.pagination),a("setAuthorQuotes",o.data),a("setLoadingState",!1);case 8:case"end":return n.stop()}}),n)})))()},getQuotesPerQuery:function(e,t){return Object(R["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,a("setLoadingState",!0),a("setExpanded",!1),a("setCurrentQuery",t),n.next=6,M.get("quotes",{params:{query:t}});case 6:r=n.sent,a("setPagination",r.pagination),a("setSearchResults",r),a("setLoadingState",!1);case 10:case"end":return n.stop()}}),n)})))()},changePageQueryQuotes:function(e,t){return Object(R["a"])(regeneratorRuntime.mark((function n(){var a,r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,r=e.state,a("setLoadingState",!0),n.next=4,M.get("quotes",{params:{query:r.currentQuery,page:t}});case 4:o=n.sent,a("setPagination",o.pagination),a("setSearchResults",o),a("setLoadingState",!1);case 8:case"end":return n.stop()}}),n)})))()}},getters:{getRandomQuote:function(e){return e.RandomQuote},getLoadingState:function(e){return e.loadingState},getIsExpanded:function(e){return e.isExpanded},getAuthorQuotes:function(e){return e.authorQuotes},getPagination:function(e){return e.pagination},getTotalAmountOfQuotes:function(e){return e.totalAmountOfQuotes},getSearchResults:function(e){return e.searchResults},getCurrentQuery:function(e){return e.currentQuery}}}),A=n("6c02"),k=Object(a["fb"])("data-v-6ae20dcb"),L=k((function(e,t,n,r,o,u){var c=Object(a["M"])("expand-main");return Object(a["D"])(),Object(a["i"])(c)})),D=Object(a["fb"])("data-v-42aa0f9f");Object(a["G"])("data-v-42aa0f9f");var I={class:"author"},H=Object(a["m"])("br",null,null,-1),T=Object(a["m"])("i",{class:"el-icon-loading"},null,-1);Object(a["E"])();var V=D((function(e,t,n,r,o,u){var c=Object(a["M"])("v-quote"),i=Object(a["M"])("expand-button"),s=Object(a["M"])("el-col"),d=Object(a["M"])("el-row"),b=Object(a["M"])("v-card"),l=Object(a["M"])("v-pagination"),f=Object(a["M"])("el-main");return Object(a["D"])(),Object(a["i"])(f,null,{default:D((function(){return[Object(a["m"])(d,null,{default:D((function(){return[Object(a["m"])(s,{xl:{span:12,offset:6},sm:{span:16,offset:4}},{default:D((function(){return[Object(a["m"])(c),Object(a["m"])(i,{quote:e.getRandomQuote},null,8,["quote"])]})),_:1})]})),_:1}),e.getIsExpanded?(Object(a["D"])(),Object(a["i"])(d,{key:0},{default:D((function(){return[Object(a["m"])(s,null,{default:D((function(){return[Object(a["m"])("h2",I,[Object(a["l"])(" More quotes by "+Object(a["Q"])(e.getRandomQuote.quoteAuthor),1),H,Object(a["l"])(" Total found: "+Object(a["Q"])(e.getTotalAmountOfQuotes),1)])]})),_:1}),e.getLoadingState?(Object(a["D"])(),Object(a["i"])(s,{key:0},{default:D((function(){return[T]})),_:1})):(Object(a["D"])(),Object(a["i"])(s,{key:1,xl:{span:12,offset:6},sm:{span:16,offset:4}},{default:D((function(){return[Object(a["m"])(b,{"quotes-array":e.getAuthorQuotes},null,8,["quotes-array"]),Object(a["m"])(l,{onChangeCurrentPage:u.changeCurrentPageHandler,class:"expand-pagination"},null,8,["onChangeCurrentPage"])]})),_:1}))]})),_:1})):Object(a["j"])("",!0)]})),_:1})})),G=Object(a["fb"])("data-v-61ba905d");Object(a["G"])("data-v-61ba905d");var F={class:"block"};Object(a["E"])();var $=G((function(e,t,n,r,o,u){var c=Object(a["M"])("el-pagination");return Object(a["D"])(),Object(a["i"])("div",F,[Object(a["m"])(c,{small:u.isSmall,"page-size":1,"hide-on-single-page":"","pager-count":5,layout:"prev, pager, next",total:u.total,"current-page":u.currentPage,onCurrentChange:u.emitCurrentChange},null,8,["small","total","current-page","onCurrentChange"])])})),B={name:"VPagination",computed:Object(s["a"])(Object(s["a"])({},Object(d["c"])(["getPagination"])),{},{total:function(){return this.getPagination.totalPages},currentPage:function(){return this.getPagination.currentPage},isSmall:function(){return window.innerWidth<576}}),methods:{emitCurrentChange:function(e){this.$emit("changeCurrentPage",e),window.scrollTo(0,0)}}};B.render=$,B.__scopeId="data-v-61ba905d";var K=B,J=Object(a["fb"])("data-v-2a5d4b01");Object(a["G"])("data-v-2a5d4b01");var U={class:"quote"};Object(a["E"])();var W=J((function(e,t,n,r,o,u){var c=Object(a["M"])("el-card");return Object(a["D"])(),Object(a["i"])(c,{shadow:"always"},{default:J((function(){return[Object(a["m"])("p",U,Object(a["Q"])(e.getRandomQuote.quoteText),1)]})),_:1})})),Y={name:"VQuote",components:{},computed:Object(s["a"])({},Object(d["c"])(["getRandomQuote"]))};n("af60");Y.render=W,Y.__scopeId="data-v-2a5d4b01";var z=Y,X=Object(a["fb"])("data-v-1f9c5024");Object(a["G"])("data-v-1f9c5024");var N={class:"author"},Z={class:"genre"};Object(a["E"])();var ee=X((function(e,t,n,r,o,u){return Object(a["D"])(),Object(a["i"])("button",{ref:"buttonExpand",class:["buttonExpand",{disabled:e.getIsExpanded}],onClick:t[1]||(t[1]=function(){return u.expandQuotesHandler&&u.expandQuotesHandler.apply(u,arguments)}),onKeyup:t[2]||(t[2]=Object(a["db"])((function(){return u.expandQuotesHandler&&u.expandQuotesHandler.apply(u,arguments)}),["enter"]))},[Object(a["m"])("span",N,Object(a["Q"])(n.quote.quoteAuthor),1),Object(a["m"])("span",Z,Object(a["Q"])(n.quote.quoteGenre),1)],34)})),te={name:"ExpandButton",props:{quote:{type:Object,required:!0}},methods:Object(s["a"])(Object(s["a"])({},Object(d["b"])(["expandQuotes"])),{},{expandQuotesHandler:function(){this.expandQuotes(!0),this.$refs.buttonExpand.blur()}}),computed:Object(s["a"])({},Object(d["c"])(["getIsExpanded","getPagination"]))};n("04d3");te.render=ee,te.__scopeId="data-v-1f9c5024";var ne=te,ae=Object(a["fb"])("data-v-449d50b8"),re=ae((function(e,t,n,r,o,u){var c=Object(a["M"])("el-card");return Object(a["D"])(!0),Object(a["i"])(a["b"],null,Object(a["K"])(n.quotesArray,(function(t,n){return Object(a["D"])(),Object(a["i"])(c,{key:t._id,shadow:"hover"},{default:ae((function(){return[Object(a["l"])(Object(a["Q"])(n+1+10*(e.getPagination.currentPage-1))+") ",1),Object(a["m"])("p",{class:"text",innerHTML:u.getText(t.quoteText)},null,8,["innerHTML"])]})),_:2},1024)})),128)})),oe=(n("ac1f"),n("5319"),n("4d63"),n("25f0"),{name:"VCard",props:{quotesArray:{type:Array,default:function(){return[]}}},computed:Object(s["a"])({},Object(d["c"])(["getPagination","getIsExpanded","getCurrentQuery"])),methods:{getText:function(e){if(!this.getIsExpanded){var t=this.getCurrentQuery;return e.replace(new RegExp("".concat(t),"igm"),'<span style="background-color: #F7DF94;">'.concat(t,"</span>"))}return e}}});n("d91a");oe.render=re,oe.__scopeId="data-v-449d50b8";var ue=oe,ce={name:"ExpandMain",components:{VQuote:z,VPagination:K,ExpandButton:ne,VCard:ue},computed:Object(s["a"])({},Object(d["c"])(["getLoadingState","getIsExpanded","getRandomQuote","getAuthorQuotes","getPagination","getTotalAmountOfQuotes"])),methods:Object(s["a"])(Object(s["a"])({},Object(d["b"])(["changePageAuthorQuotes"])),{},{changeCurrentPageHandler:function(e){this.changePageAuthorQuotes(e)}})};n("13a18");ce.render=V,ce.__scopeId="data-v-42aa0f9f";var ie=ce,se={name:"Home",components:{ExpandMain:ie},mounted:function(){this.setRandomQuote()},methods:Object(s["a"])({},Object(d["b"])(["setRandomQuote"]))};n("8c02");se.render=L,se.__scopeId="data-v-6ae20dcb";var de=se,be=n("eb16"),le=n.n(be),fe=Object(a["fb"])("data-v-3a27bc1a");Object(a["G"])("data-v-3a27bc1a");var pe={class:"query"},Oe=Object(a["m"])("br",null,null,-1),ge=Object(a["m"])("i",{class:"el-icon-loading"},null,-1),je=Object(a["m"])("img",{class:"find-error-img",src:le.a},null,-1),me=Object(a["l"])(" Sorry... we didn't find anything on your request. ");Object(a["E"])();var he=fe((function(e,t,n,r,o,u){var c=Object(a["M"])("el-col"),i=Object(a["M"])("v-card"),s=Object(a["M"])("v-pagination"),d=Object(a["M"])("el-row"),b=Object(a["M"])("el-main");return Object(a["D"])(),Object(a["i"])(b,null,{default:fe((function(){return[Object(a["m"])(d,null,{default:fe((function(){return[Object(a["m"])(c,null,{default:fe((function(){return[Object(a["m"])("h2",pe,[Object(a["l"])(" Your query: '"+Object(a["Q"])(n.query)+"'",1),Oe,Object(a["l"])(" Total found: "+Object(a["Q"])(e.getSearchResults.totalQuotes),1)])]})),_:1}),e.getLoadingState?(Object(a["D"])(),Object(a["i"])(c,{key:0},{default:fe((function(){return[ge]})),_:1})):0===e.getSearchResults.totalQuotes?(Object(a["D"])(),Object(a["i"])(c,{key:1,class:"find-error"},{default:fe((function(){return[je,me]})),_:1})):(Object(a["D"])(),Object(a["i"])(c,{key:2,xl:{span:12,offset:6},sm:{span:16,offset:4}},{default:fe((function(){return[Object(a["m"])(i,{"quotes-array":e.getSearchResults.data},null,8,["quotes-array"]),Object(a["m"])(s,{onChangeCurrentPage:u.changeCurrentPageHandler,class:"pagination"},null,8,["onChangeCurrentPage"])]})),_:1}))]})),_:1})]})),_:1})})),ve={name:"Query",components:{VCard:ue,VPagination:K},props:{query:{type:String,required:!0}},mounted:function(){this.getQuotesPerQuery(this.query)},methods:Object(s["a"])(Object(s["a"])({},Object(d["b"])(["getQuotesPerQuery","changePageQueryQuotes"])),{},{changeCurrentPageHandler:function(e){this.changePageQueryQuotes(e)}}),computed:Object(s["a"])({},Object(d["c"])(["getSearchResults","getLoadingState"])),watch:{query:function(){this.getQuotesPerQuery(this.query)}}};n("09af");ve.render=he,ve.__scopeId="data-v-3a27bc1a";var Qe=ve,ye=[{path:"/",name:"Home",component:de},{path:"/search/:query",name:"Search",component:Qe,props:!0}],xe=Object(A["a"])({history:Object(A["b"])("/devChallenges/quote-generator/dist/"),routes:ye}),qe=xe,Pe=Object(a["h"])(P).use(qe);Pe.use(r["a"]).use(E).mount("#app")},"5c8a":function(e,t,n){},"7a70":function(e,t,n){},8919:function(e,t,n){"use strict";n("7a70")},"8c02":function(e,t,n){"use strict";n("44a9")},"9d13":function(e,t,n){},af60:function(e,t,n){"use strict";n("f493")},baad:function(e,t,n){},c88a:function(e,t,n){"use strict";n("e256")},d91a:function(e,t,n){"use strict";n("0790")},e256:function(e,t,n){},eb16:function(e,t,n){e.exports=n.p+"img/found.b9d53e73.jpg"},f493:function(e,t,n){}});
//# sourceMappingURL=app.c4fc44fe.js.map