(function(e){function t(t){for(var r,i,s=t[0],o=t[1],u=t[2],p=0,d=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&d.push(c[i][0]),c[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);l&&l(t);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var o=n[s];0!==c[o]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},c={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/devChallenges/weather-app/dist/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=o;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0756":function(e,t,n){"use strict";n("9d89")},1311:function(e,t,n){e.exports=n.p+"img/celsius.e271b4ad.svg"},"23da":function(e,t,n){"use strict";n("82a9")},"29ea":function(e,t,n){},3050:function(e,t,n){"use strict";n("3221")},3221:function(e,t,n){},"3a9b":function(e,t,n){e.exports=n.p+"img/fahrenheit.28897d0c.svg"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c=n("9319"),a={class:"p-grid p-reset"},i=Object(r["h"])("div",{class:"p-xl-3 p-lg-4 p-sm-5 p-col-12"},null,-1);function s(e,t,n,c,s,o){var u=Object(r["q"])("left-main"),l=Object(r["q"])("right-main"),p=Object(r["q"])("degrees-buttons");return Object(r["k"])(),Object(r["e"])(r["a"],null,[Object(r["h"])("div",a,[Object(r["h"])(u),i,Object(r["h"])(l)]),Object(r["h"])(p)],64)}var o=n("5530"),u=n("5502"),l={class:"p-col p-px-sm-4"},p=Object(r["h"])("h2",{class:"p-mt-5",style:{"font-size":"2rem"}},"Today`s Highlights",-1);function d(e,t,n,c,a,i){var s=Object(r["q"])("right-next-day-cards"),o=Object(r["q"])("skeleton-next-day-cards"),u=Object(r["q"])("right-highlight-cards"),d=Object(r["q"])("skeleton-highlight-cards");return Object(r["k"])(),Object(r["e"])("div",l,[e.isLoading?(Object(r["k"])(),Object(r["e"])(o,{key:1})):(Object(r["k"])(),Object(r["e"])(s,{key:0})),p,e.isLoading?(Object(r["k"])(),Object(r["e"])(d,{key:3})):(Object(r["k"])(),Object(r["e"])(u,{key:2,firstDay:e.getFirstDay},null,8,["firstDay"]))])}var b=Object(r["x"])("data-v-3f29e73e");Object(r["m"])("data-v-3f29e73e");var h={class:"p-grid p-jc-center"},m={class:"p-text-light p-text-center",style:{"font-size":"1.6rem"}},j={class:"p-d-flex p-justify-between p-align-center"},f={style:{"font-size":"1.5rem"}},O={class:"p-text-secondary"},g={style:{"font-size":"1.2rem"}};Object(r["l"])();var v=b((function(e,t,n,c,a,i){var s=Object(r["q"])("Card");return Object(r["k"])(),Object(r["e"])("div",h,[(Object(r["k"])(!0),Object(r["e"])(r["a"],null,Object(r["o"])(e.getNextDays,(function(t,n){return Object(r["k"])(),Object(r["e"])(s,{key:t.id||n,class:"p-xl-2 p-mx-3 p-px-2 p-mt-4",style:{"min-width":"180px"}},{title:b((function(){return[Object(r["h"])("h2",m,Object(r["s"])(i.formatDate(t.weather.date)),1)]})),content:b((function(){return[Object(r["h"])("div",{innerHTML:t.image},null,8,["innerHTML"])]})),footer:b((function(){return[Object(r["h"])("div",j,[Object(r["h"])("p",null,[Object(r["h"])("span",f,Object(r["s"])(i.roundNumber(t.weather.maxTemp)),1),Object(r["g"])(" °"+Object(r["s"])(e.getCurrentDegrees),1)]),Object(r["h"])("p",O,[Object(r["h"])("span",g,Object(r["s"])(i.roundNumber(t.weather.minTemp)),1),Object(r["g"])(" °"+Object(r["s"])(e.getCurrentDegrees),1)])])]})),_:2},1024)})),128))])})),y=n("9899");n("b680");function w(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return e.toFixed(t)}var x=n("5a0c"),k=n.n(x);function D(e){return k()(e).format("ddd, D MMM")}var _={name:"RightNextDayCards",components:{Card:y["a"]},computed:Object(o["a"])({},Object(u["c"])(["getNextDays","getCurrentDegrees"])),methods:{roundNumber:w,formatDate:D}};n("bffb");_.render=v,_.__scopeId="data-v-3f29e73e";var C=_,q=Object(r["x"])("data-v-0fb53bf4");Object(r["m"])("data-v-0fb53bf4");var L={class:"p-grid p-mt-3"},S={class:"p-md-6 p-col-12"},P=Object(r["g"])(" Wind status "),N={style:{"font-size":"5rem"}},R=Object(r["g"])(" mph "),z={class:"p-text-light p-d-flex p-align-center p-justify-center",style:{"font-size":"1.5rem"}},I={class:"p-md-6 p-col-12"},H=Object(r["g"])(" Humidity "),M={style:{"font-size":"5rem"}},W=Object(r["g"])(" % "),F={class:"p-md-6 p-col-12"},T=Object(r["g"])(" Visibility "),B={style:{"font-size":"5rem"}},V=Object(r["g"])(" miles "),$={class:"p-md-6 p-col-12"},A=Object(r["g"])(" Air pressure "),Q={style:{"font-size":"5rem"}},K=Object(r["g"])(" mb ");Object(r["l"])();var E=q((function(e,t,n,c,a,i){var s=Object(r["q"])("right-highlight-card"),o=Object(r["q"])("progress-bar");return Object(r["k"])(),Object(r["e"])("div",L,[Object(r["h"])("div",S,[Object(r["h"])(s,null,{title:q((function(){return[P]})),main:q((function(){return[Object(r["h"])("span",N,Object(r["s"])(i.roundNumber(n.firstDay.wind.speed)),1),R]})),footer:q((function(){return[Object(r["h"])("div",z,[Object(r["h"])("span",{style:["transform: rotate(".concat(i.windDirection,"deg)"),{"font-size":"1.8rem",color:"var(--primary-color)"}],class:"pi pi-chevron-circle-down p-mr-2"},null,4),Object(r["g"])(" "+Object(r["s"])(n.firstDay.wind.directionCompass),1)])]})),_:1})]),Object(r["h"])("div",I,[Object(r["h"])(s,null,{title:q((function(){return[H]})),main:q((function(){return[Object(r["h"])("span",M,Object(r["s"])(n.firstDay.humidity),1),W]})),footer:q((function(){return[Object(r["h"])(o,{value:n.firstDay.humidity},null,8,["value"])]})),_:1})]),Object(r["h"])("div",F,[Object(r["h"])(s,null,{title:q((function(){return[T]})),main:q((function(){return[Object(r["h"])("span",B,Object(r["s"])(i.roundNumber(n.firstDay.visibility)),1),V]})),_:1})]),Object(r["h"])("div",$,[Object(r["h"])(s,null,{title:q((function(){return[A]})),main:q((function(){return[Object(r["h"])("span",Q,Object(r["s"])(i.roundNumber(n.firstDay.airPressure,0)),1),K]})),_:1})])])})),J=n("c045"),U=Object(r["x"])("data-v-00c285f8");Object(r["m"])("data-v-00c285f8");var G={class:"p-text-light p-text-italic p-text-center p-text-capitalize"},Y={class:"p-text-center p-text-italic"};Object(r["l"])();var X=U((function(e,t,n,c,a,i){var s=Object(r["q"])("Card");return Object(r["k"])(),Object(r["e"])(s,null,{title:U((function(){return[Object(r["h"])("h3",G,[Object(r["p"])(e.$slots,"title",{},void 0,!0)])]})),content:U((function(){return[Object(r["h"])("p",Y,[Object(r["p"])(e.$slots,"main",{},void 0,!0)])]})),footer:U((function(){return[Object(r["p"])(e.$slots,"footer",{},void 0,!0)]})),_:1})})),Z={name:"RightHighlightCard",props:{},components:{Card:y["a"]},methods:{roundNumber:w}};Z.render=X,Z.__scopeId="data-v-00c285f8";var ee=Z,te={name:"RightHighlightCards",props:{firstDay:{type:Object,required:!0}},components:{ProgressBar:J["a"],RightHighlightCard:ee},computed:{windDirection:function(){return 360-this.firstDay.wind.direction}},methods:{roundNumber:w}};te.render=E,te.__scopeId="data-v-0fb53bf4";var ne=te,re={class:"p-pt-5 p-grid p-jc-center"},ce={class:"p-d-flex p-justify-between p-align-center"};function ae(e,t,n,c,a,i){var s=Object(r["q"])("Skeleton"),o=Object(r["q"])("Card");return Object(r["k"])(),Object(r["e"])("div",re,[(Object(r["k"])(),Object(r["e"])(r["a"],null,Object(r["o"])(5,(function(e){return Object(r["h"])(o,{key:e,class:"p-xl-2 p-mx-3 p-px-2 p-mt-4",style:{"min-width":"180px"}},{title:Object(r["u"])((function(){return[Object(r["h"])(s,{height:"2rem"})]})),content:Object(r["u"])((function(){return[Object(r["h"])(s,{shape:"circle",class:"p-mx-auto",size:"8rem"})]})),footer:Object(r["u"])((function(){return[Object(r["h"])("div",ce,[Object(r["h"])(s,{class:"p-mr-1"}),Object(r["h"])(s)])]})),_:2},1024)})),64))])}var ie=n("4f4a"),se={name:"SkeletonNextDayCards",components:{Skeleton:ie["a"],Card:y["a"]},computed:Object(o["a"])({},Object(u["c"])(["getNextDays"]))};se.render=ae;var oe=se,ue=Object(r["x"])("data-v-f84e630c");Object(r["m"])("data-v-f84e630c");var le={class:"p-grid p-mt-3"},pe={class:"p-sm-6 p-col-12"},de=Object(r["g"])(" Wind status "),be={class:"p-text-light p-d-flex p-align-center p-justify-center",style:{"font-size":"1.5rem"}},he=Object(r["h"])("span",{class:"pi pi-chevron-circle-down p-mr-2",style:{"font-size":"1.8rem",color:"var(--primary-color)"}},null,-1),me={class:"p-sm-6 p-col-12"},je=Object(r["g"])(" Humidity "),fe={class:"p-sm-6 p-col-12"},Oe=Object(r["g"])(" Visibility "),ge={class:"p-sm-6 p-col-12"},ve=Object(r["g"])(" Air pressure ");Object(r["l"])();var ye=ue((function(e,t,n,c,a,i){var s=Object(r["q"])("Skeleton"),o=Object(r["q"])("right-highlight-card"),u=Object(r["q"])("progress-bar");return Object(r["k"])(),Object(r["e"])("div",le,[Object(r["h"])("div",pe,[Object(r["h"])(o,null,{title:ue((function(){return[de]})),main:ue((function(){return[Object(r["h"])(s,{height:"5rem",class:"p-mt-3"})]})),footer:ue((function(){return[Object(r["h"])("div",be,[he,Object(r["h"])(s,{width:"4rem",class:"p-mt-3"})])]})),_:1})]),Object(r["h"])("div",me,[Object(r["h"])(o,null,{title:ue((function(){return[je]})),main:ue((function(){return[Object(r["h"])(s,{height:"5rem",class:"p-mt-3"})]})),footer:ue((function(){return[Object(r["h"])(u,{mode:"indeterminate"})]})),_:1})]),Object(r["h"])("div",fe,[Object(r["h"])(o,null,{title:ue((function(){return[Oe]})),main:ue((function(){return[Object(r["h"])(s,{height:"5rem"})]})),_:1})]),Object(r["h"])("div",ge,[Object(r["h"])(o,null,{title:ue((function(){return[ve]})),main:ue((function(){return[Object(r["h"])(s,{height:"5rem"})]})),_:1})])])})),we={name:"SkeletonHighlightCards",components:{RightHighlightCard:ee,Skeleton:ie["a"],ProgressBar:J["a"]}};we.render=ye,we.__scopeId="data-v-f84e630c";var xe=we,ke={name:"RightMain",components:{RightHighlightCards:ne,RightNextDayCards:C,SkeletonNextDayCards:oe,SkeletonHighlightCards:xe},computed:Object(o["a"])({},Object(u["c"])(["isLoading","getFirstDay"])),methods:{}};ke.render=d;var De=ke,_e=n("c2a5"),Ce=n.n(_e),qe=Object(r["x"])("data-v-0dc98bd8");Object(r["m"])("data-v-0dc98bd8");var Le={class:"p-xl-3 p-lg-4 p-sm-5 p-col-12 p-card p-d-flex p-flex-column p-justify-between fixed"},Se={class:"p-d-flex p-align-end p-justify-center p-my-4 p-text-uppercase p-text-italic"},Pe={style:{"font-size":"6rem"}},Ne={style:{color:"var(--text-color-secondary)","font-size":"2rem"}},Re={class:"p-text-center p-text-italic p-text-light",style:{"font-size":"3rem"}},ze={class:"p-mt-5",style:{color:"var(--text-color-secondary)","font-size":"14px"}},Ie={class:"p-d-flex p-align-center p-justify-center p-pl-4"},He=Object(r["g"])("Today"),Me=Object(r["h"])("span",{class:"p-px-2"},"|",-1),We={class:"p-d-flex p-align-center p-justify-center p-py-4"},Fe=Object(r["h"])("span",{class:"pi pi-home p-pr-2"},null,-1),Te={key:1,src:Ce.a,class:"p-mt-auto p-mr-auto",alt:"loading"},Be=Object(r["h"])("footer",{class:"p-text-center",style:{"font-size":"12px",color:"var(--text-color-secondary)"}},[Object(r["g"])(" Written by "),Object(r["h"])("a",{href:"https://github.com/ic3top",style:{"letter-spacing":"1.2px"},target:"_blank"}," @ic3top ")],-1);Object(r["l"])();var Ve=qe((function(e,t,n,c,a,i){var s=Object(r["q"])("left-header"),o=Object(r["q"])("sidebar-content"),u=Object(r["q"])("Sidebar");return Object(r["k"])(),Object(r["e"])("div",Le,[e.isLoading?(Object(r["k"])(),Object(r["e"])("img",Te)):(Object(r["k"])(),Object(r["e"])(r["a"],{key:0},[Object(r["h"])(s,{onDetectLocation:e.detectLocation,onSearch:t[1]||(t[1]=function(e){return a.searchVisible=!0})},null,8,["onDetectLocation"]),Object(r["h"])("div",{class:"main-image p-d-flex p-jc-center",innerHTML:e.getFirstDay.image},null,8,["innerHTML"]),Object(r["h"])("div",Se,[Object(r["h"])("h2",Pe,Object(r["s"])(i.roundNumber(e.getFirstDay.temp)),1),Object(r["h"])("span",Ne," °"+Object(r["s"])(e.getCurrentDegrees),1)]),Object(r["h"])("h1",Re,Object(r["s"])(e.getFirstDay.weatherName),1),Object(r["h"])("div",ze,[Object(r["h"])("div",Ie,[Object(r["h"])("p",null,[He,Me,Object(r["g"])(Object(r["s"])(i.formatDate(e.getFirstDay.time)),1)])]),Object(r["h"])("div",We,[Object(r["h"])("p",null,[Fe,Object(r["g"])(Object(r["s"])(e.getFirstDay.location),1)])])])],64)),Be,Object(r["h"])(u,{visible:a.searchVisible,"onUpdate:visible":t[3]||(t[3]=function(e){return a.searchVisible=e}),position:"left",class:"p-sidebar-sm"},{default:qe((function(){return[Object(r["h"])(o,{onCloseSidebar:t[2]||(t[2]=function(e){return a.searchVisible=!1})})]})),_:1},8,["visible"])])})),$e=n("427b"),Ae=Object(r["x"])("data-v-6427d84a");Object(r["m"])("data-v-6427d84a");var Qe={class:"p-d-flex p-justify-between p-px-4 p-pt-2"};Object(r["l"])();var Ke=Ae((function(e,t,n,c,a,i){var s=Object(r["q"])("Button"),o=Object(r["r"])("tooltip");return Object(r["k"])(),Object(r["e"])("div",Qe,[Object(r["h"])(s,{label:"Search for places",icon:"pi pi-search",class:"p-button-outlined",onClick:t[1]||(t[1]=function(t){return e.$emit("search")})}),Object(r["v"])(Object(r["h"])(s,{class:["p-button-rounded p-button-outlined",{"p-disabled":"denied"===e.getLocationPermission}],icon:"pi pi-map-marker",onClick:t[2]||(t[2]=function(t){return e.$emit("detectLocation")})},null,8,["class"]),[[o,"Go to default location"]])])})),Ee=n("bb57"),Je=n("6b8c"),Ue={name:"LeftHeader",components:{Button:Ee["a"]},computed:Object(o["a"])({},Object(u["c"])(["getLocationPermission"])),directives:{tooltip:Je["a"]}};Ue.render=Ke,Ue.__scopeId="data-v-6427d84a";var Ge=Ue,Ye=Object(r["h"])("h3",{class:"p-text-light"},"Search for the location here",-1),Xe={class:"p-d-flex p-jc-between p-align-center"},Ze={class:"p-p-2"},et=Object(r["h"])("span",{class:"pi pi-angle-double-right"},null,-1);function tt(e,t,n,c,a,i){var s=Object(r["q"])("AutoComplete"),o=Object(r["q"])("Button");return Object(r["k"])(),Object(r["e"])(r["a"],null,[Ye,Object(r["h"])("div",{class:"p-mt-5 p-d-flex p-jc-between",onKeyup:t[4]||(t[4]=Object(r["w"])((function(t){return e.$emit("closeSidebar")}),["esc"]))},[Object(r["h"])(s,{modelValue:a.query,"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.query=e}),suggestions:a.citySuggestions,field:"title",placeholder:"Your city...",onComplete:t[2]||(t[2]=function(e){return i.filterCities(e)}),onItemSelect:t[3]||(t[3]=function(e){return i.itemSelected(e)}),onKeyup:Object(r["w"])(i.validateCities,["enter"])},{item:Object(r["u"])((function(e){var t;return[Object(r["h"])("div",Xe,[Object(r["h"])("div",Ze,Object(r["s"])(null===(t=e.item)||void 0===t?void 0:t.title),1),et])]})),_:1},8,["modelValue","suggestions","onKeyup"]),Object(r["h"])(o,{loading:e.isLoading,class:"p-button-outlined p-d-none p-d-lg-block",label:"Search",type:"button",onClick:i.validateCities},null,8,["loading","onClick"]),Object(r["h"])(o,{icon:"pi pi-search",class:"p-button-rounded p-d-lg-none",onClick:i.validateCities},null,8,["onClick"])],32)],64)}var nt=n("1da1"),rt=(n("96cf"),n("d3b7"),n("4084")),ct={name:"SidebarContent",emits:["closeSidebar"],components:{AutoComplete:rt["a"],Button:Ee["a"]},data:function(){return{query:"",citySuggestions:[]}},computed:Object(o["a"])({},Object(u["c"])(["isLoading"])),methods:Object(o["a"])(Object(o["a"])({},Object(u["b"])(["setDataPerQuery"])),{},{filterCities:function(e){var t=this;return Object(nt["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://aqueous-escarpment-53635.herokuapp.com/https://www.metaweather.com/api/location/search/?query=".concat(e.query));case 2:return r=n.sent,n.next=5,r.json();case 5:t.citySuggestions=n.sent;case 6:case"end":return n.stop()}}),n)})))()},validateCities:function(){var e=this;return Object(nt["a"])(regeneratorRuntime.mark((function t(){var n,r,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://aqueous-escarpment-53635.herokuapp.com/https://www.metaweather.com/api/location/search/?query=".concat(e.query));case 2:return r=t.sent,t.next=5,r.json();case 5:if(c=t.sent,!(c.length>1||(null===(n=c[0])||void 0===n?void 0:n.title)!==e.query)){t.next=8;break}return t.abrupt("return");case 8:e.setDataPerQuery(c[0]),e.$emit("closeSidebar");case 10:case"end":return t.stop()}}),t)})))()},itemSelected:function(e){this.setDataPerQuery(e.value),this.$emit("closeSidebar")}})};n("0756");ct.render=tt;var at=ct,it={name:"LeftMain",data:function(){return{searchVisible:!1}},components:{LeftHeader:Ge,Sidebar:$e["a"],SidebarContent:at},computed:Object(o["a"])({},Object(u["c"])(["isLoading","getFirstDay","getCurrentDegrees"])),methods:Object(o["a"])(Object(o["a"])({},Object(u["b"])(["detectLocation"])),{},{formatDate:D,roundNumber:w})};n("3050");it.render=Ve,it.__scopeId="data-v-0dc98bd8";var st=it,ot=n("1311"),ut=n.n(ot),lt=n("3a9b"),pt=n.n(lt),dt=Object(r["x"])("data-v-1906358d");Object(r["m"])("data-v-1906358d");var bt={class:"degrees-buttons"},ht={key:0,src:ut.a,alt:"celsius",class:"w-20"},mt={key:1,class:"pi pi-spin pi-spinner"},jt={key:0,src:pt.a,alt:"fahrenheit",class:"w-20"},ft={key:1,class:"pi pi-spin pi-spinner"};Object(r["l"])();var Ot=dt((function(e,t,n,c,a,i){var s=Object(r["q"])("Button");return Object(r["k"])(),Object(r["e"])("div",bt,["F"===e.getCurrentDegrees?(Object(r["k"])(),Object(r["e"])(s,{key:0,loading:e.isLoading,class:"p-button-rounded",onClick:e.setNewDegrees},{default:dt((function(){return[e.isLoading?(Object(r["k"])(),Object(r["e"])("i",mt)):(Object(r["k"])(),Object(r["e"])("img",ht))]})),_:1},8,["loading","onClick"])):(Object(r["k"])(),Object(r["e"])(s,{key:1,class:"p-button-rounded",onClick:e.setNewDegrees},{default:dt((function(){return[e.isLoading?(Object(r["k"])(),Object(r["e"])("i",ft)):(Object(r["k"])(),Object(r["e"])("img",jt))]})),_:1},8,["onClick"]))])})),gt={name:"DegreesButtons",components:{Button:Ee["a"]},computed:Object(o["a"])({},Object(u["c"])(["getCurrentDegrees","isLoading"])),methods:Object(o["a"])({},Object(u["d"])(["setNewDegrees"]))};n("23da");gt.render=Ot,gt.__scopeId="data-v-1906358d";var vt=gt,yt={name:"App",components:{LeftMain:st,RightMain:De,DegreesButtons:vt},created:function(){this.handlePermission(),this.detectLocation()},methods:Object(o["a"])({},Object(u["b"])(["detectLocation","handlePermission"]))};n("8bea");yt.render=s;var wt=yt,xt=n("3835");n("159b"),n("d81d"),n("99af");function kt(e){return 9*e/5+32}function Dt(e){return 5*(e-32)/9}var _t=Object(u["a"])({state:{weatherData:{},weatherImages:{},loading:!1,locationPermission:!1,currentDegrees:"C"},getters:{getWeatherData:function(e){var t=e.weatherData;return t},getWeatherImages:function(e){var t=e.weatherImages;return t},getFirstDay:function(e){var t=e.weatherData,n=e.weatherImages;if(!t.consolidated_weather)return{};var r=Object(xt["a"])(t.consolidated_weather,1),c=r[0],a={image:n[c.weather_state_abbr],location:t.title,time:t.time,weatherName:c.weather_state_name,temp:c.the_temp,humidity:c.humidity,wind:{direction:c.wind_direction,directionCompass:c.wind_direction_compass,speed:c.wind_speed},visibility:c.visibility,airPressure:c.air_pressure};return a},getNextDays:function(e){var t=e.weatherData,n=e.weatherImages;if(!t.consolidated_weather)return{};var r=[];return t.consolidated_weather.forEach((function(e){var t=n[e.weather_state_abbr];r.push({weather:{maxTemp:e.max_temp,minTemp:e.min_temp,date:e.applicable_date,id:e.id},image:t})})),r.shift(),r},isLoading:function(e){var t=e.loading;return t},getLocationPermission:function(e){var t=e.locationPermission;return t},getCurrentDegrees:function(e){var t=e.currentDegrees;return t}},mutations:{setWeatherData:function(e,t){e.weatherData=t},addWeatherImage:function(e,t){var n=t.abbr,r=t.image;e.weatherImages[n]=r},setLoadingState:function(e,t){e.loading=t},setLocationPermission:function(e,t){e.locationPermission=t},setCurrentDegrees:function(e,t){e.currentDegrees=t},setNewDegrees:function(e){e.weatherData.consolidated_weather.map((function(t){return"C"===e.currentDegrees?(t.the_temp=kt(t.the_temp),t.max_temp=kt(t.max_temp),t.min_temp=kt(t.min_temp)):(t.the_temp=Dt(t.the_temp),t.max_temp=Dt(t.max_temp),t.min_temp=Dt(t.min_temp)),t})),e.currentDegrees="F"===e.currentDegrees?"C":"F"}},actions:{fetchPerWoeid:function(e){var t=arguments;return Object(nt["a"])(regeneratorRuntime.mark((function n(){var r,c,a,i,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,c=e.dispatch,a=t.length>1&&void 0!==t[1]?t[1]:924938,n.next=4,fetch("https://aqueous-escarpment-53635.herokuapp.com/https://www.metaweather.com/api/location/".concat(a,"/"));case 4:return i=n.sent,n.next=7,i.json();case 7:return s=n.sent,r("setWeatherData",s),s.consolidated_weather.forEach((function(e){c("fetchImage",e.weather_state_abbr)})),r("setLoadingState",!1),n.abrupt("return",s);case 12:case"end":return n.stop()}}),n)})))()},fetchPerCoords:function(e,t){return Object(nt["a"])(regeneratorRuntime.mark((function n(){var r,c,a,i,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,c=e.dispatch,n.next=3,fetch("https://aqueous-escarpment-53635.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=".concat(t.latitude,",").concat(t.longitude));case 3:return a=n.sent,n.next=6,a.json();case 6:return i=n.sent,n.next=9,c("fetchPerWoeid",i[0].woeid);case 9:s=n.sent,r("setWeatherData",s);case 11:case"end":return n.stop()}}),n)})))()},fetchImage:function(e,t){return Object(nt["a"])(regeneratorRuntime.mark((function n(){var r,c,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,fetch("https://aqueous-escarpment-53635.herokuapp.com/https://www.metaweather.com/static/img/weather/".concat(t,".svg"));case 3:return c=n.sent,n.next=6,c.text();case 6:a=n.sent,r("addWeatherImage",{abbr:t,image:a});case 8:case"end":return n.stop()}}),n)})))()},detectLocation:function(e){var t=e.dispatch,n=e.commit;n("setLoadingState",!0),navigator.geolocation.getCurrentPosition((function(e){var n=e.coords;return t("fetchPerCoords",n)}),(function(){return t("fetchPerWoeid")})),n("setCurrentDegrees","C")},handlePermission:function(e){var t=e.commit;navigator.permissions.query({name:"geolocation"}).then((function(e){t("setLocationPermission",e.state)}))},setDataPerQuery:function(e,t){return Object(nt["a"])(regeneratorRuntime.mark((function n(){var r,c,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=e.commit,c=e.dispatch,a=t.woeid,r("setLoadingState",!0),c("fetchPerWoeid",a),r("setCurrentDegrees","C");case 5:case"end":return n.stop()}}),n)})))()}}});n("bddf"),n("fa3d"),n("e1ae"),n("4121");Object(r["d"])(wt).use(_t).use(c["a"],{ripple:!0}).mount("#app")},"64f3":function(e,t,n){},"82a9":function(e,t,n){},"8bea":function(e,t,n){"use strict";n("64f3")},"9d89":function(e,t,n){},bffb:function(e,t,n){"use strict";n("29ea")},c2a5:function(e,t,n){e.exports=n.p+"img/Radio-1s-237px.9143310e.svg"}});
//# sourceMappingURL=app.f96dbfa3.js.map