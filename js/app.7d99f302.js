(function(t){function n(n){for(var o,i,c=n[0],s=n[1],u=n[2],l=0,d=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);p&&p(n);while(d.length)d.shift()();return r.push.apply(r,u||[]),e()}function e(){for(var t,n=0;n<r.length;n++){for(var e=r[n],o=!0,i=1;i<e.length;i++){var s=e[i];0!==a[s]&&(o=!1)}o&&(r.splice(n--,1),t=c(c.s=e[0]))}return t}var o={},a={app:0},r=[];function i(t){return c.p+"js/"+({Chart:"Chart",index:"index",songlist:"songlist"}[t]||t)+"."+{Chart:"c21172e2",index:"7b06ffe5",songlist:"693d7147"}[t]+".js"}function c(n){if(o[n])return o[n].exports;var e=o[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.e=function(t){var n=[],e=a[t];if(0!==e)if(e)n.push(e[2]);else{var o=new Promise((function(n,o){e=a[t]=[n,o]}));n.push(e[2]=o);var r,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(t);var u=new Error;r=function(n){s.onerror=s.onload=null,clearTimeout(l);var e=a[t];if(0!==e){if(e){var o=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;u.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",u.name="ChunkLoadError",u.type=o,u.request=r,e[1](u)}a[t]=void 0}};var l=setTimeout((function(){r({type:"timeout",target:s})}),12e4);s.onerror=s.onload=r,document.head.appendChild(s)}return Promise.all(n)},c.m=t,c.c=o,c.d=function(t,n,e){c.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,n){if(1&n&&(t=c(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)c.d(e,o,function(n){return t[n]}.bind(null,o));return e},c.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(n,"a",n),n},c.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},c.p="/kkbox_api/",c.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=n,s=s.slice();for(var l=0;l<s.length;l++)n(s[l]);var p=u;r.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var o=e("2b0e"),a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("Loading",{attrs:{active:t.isLoading,loader:"dots",color:"#5f2c82"},on:{"update:active":function(n){t.isLoading=n}}}),e("div",{staticClass:"bg-animation"}),e("router-view"),e("MusicPlayer")],1)},r=[],i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"musicplayer"},[e("i",{directives:[{name:"show",rawName:"v-show",value:""!==t.songID||""!==t.listID,expression:"songID !== '' || listID !== ''"}],staticClass:"musicplayer-cancel-btn far fa-window-close",on:{click:t.cancel}}),e("object",{directives:[{name:"show",rawName:"v-show",value:""!==t.songID,expression:"songID !== ''"}],staticClass:"kkbox-song",attrs:{data:t.setSongPlayer}}),e("object",{directives:[{name:"show",rawName:"v-show",value:""!==t.listID,expression:"listID !== ''"}],staticClass:"kkbox-list",attrs:{data:t.setListPlayer}})])},c=[],s=e("5530"),u=e("2f62"),l={name:"MusicPlayer",computed:Object(s["a"])({},Object(u["b"])({setSongPlayer:function(t){return"https://widget.kkbox.com/v1/?id=".concat(t.songID,"&type=song&terr=TW&lang=TC&autoplay=true")},setListPlayer:function(t){return"https://widget.kkbox.com/v1/?id=".concat(t.listID,"&type=playlist&terr=TW&lang=TC&autoplay=true")},songID:function(t){return t.songID},listID:function(t){return t.listID}})),methods:{cancel:function(){this.$store.dispatch("resetPlayer")}}},p=l,d=e("2877"),f=Object(d["a"])(p,i,c,!1,null,null,null),h=f.exports,g={name:"App",components:{MusicPlayer:h},computed:{isLoading:function(){return this.$store.state.isLoading}},created:function(){this.$store.dispatch("getToken")}},m=g,b=(e("5c0b"),Object(d["a"])(m,a,r,!1,null,null,null)),v=b.exports,y=(e("d3b7"),e("8c4f"));o["a"].use(y["a"]);var w=new y["a"]({routes:[{path:"/",component:function(){return e.e("index").then(e.bind(null,"88e9"))},children:[{path:"/",component:function(){return e.e("Chart").then(e.bind(null,"5178"))}},{path:"/songlist",component:function(){return e.e("songlist").then(e.bind(null,"4c86"))}}]}]}),_=w,k=e("b383"),T=e.n(k),S=e("bc3a"),C=e.n(S);o["a"].use(u["a"]);var I=new u["a"].Store({state:{access_token:"",charts:[],newSongsChart:[],songID:"",listID:"",isLoading:!1},actions:{getToken:function(t){var n="https://cors-anywhere.herokuapp.com/".concat("https://account.kkbox.com/oauth2/token"),e={headers:{"content-type":"application/x-www-form-urlencoded"}},o={grant_type:"client_credentials",client_id:"79686830ce4d9fa31071d8c74ccda3aa",client_secret:"589429fab30bebbc4653986000f60a36"};t.dispatch("loading",!0),C.a.post(n,T.a.stringify(o),e).then((function(n){t.dispatch("loading",!1),t.commit("SET_TOKEN",n.data.access_token),t.dispatch("getCharts"),t.dispatch("getNewSongsChart")}))},getCharts:function(t){t.dispatch("loading",!0),C.a.get("".concat("https://api.kkbox.com/v1.1/","charts?territory=TW"),t.getters.getApiConfig).then((function(n){t.dispatch("loading",!1),t.commit("GET_CHARTS",n.data.data)}))},getNewSongsChart:function(t){t.dispatch("loading",!0),C.a.get("".concat("https://api.kkbox.com/v1.1/","charts/LZPhK2EyYzN15dU-PT/tracks?territory=TW&limit=5"),t.getters.getApiConfig).then((function(n){t.dispatch("loading",!1),t.commit("GET_NEWSONGS_CHART",n.data.data)}))},playSong:function(t,n){t.commit("PLAY_SONG",n)},playList:function(t,n){t.commit("PLAY_LIST",n)},resetPlayer:function(t){t.commit("RESET_PLAYER")},loading:function(t,n){t.commit("LOADING",n)}},mutations:{SET_TOKEN:function(t,n){t.access_token=n},GET_CHARTS:function(t,n){t.charts=n},GET_NEWSONGS_CHART:function(t,n){t.newSongsChart=n},PLAY_SONG:function(t,n){t.listID="",t.songID=n},PLAY_LIST:function(t,n){t.songID="",t.listID=n},RESET_PLAYER:function(t){t.songID="",t.listID=""},LOADING:function(t,n){t.isLoading=n}},getters:{getApiConfig:function(t){return{headers:{Authorization:"Bearer ".concat(t.access_token)}}}}}),P=I,x=e("9062"),D=e.n(x);e("e40d");o["a"].component("Loading",D.a),o["a"].prototype.$http=C.a,o["a"].config.productionTip=!1,new o["a"]({router:_,store:P,render:function(t){return t(v)}}).$mount("#app")},"5c0b":function(t,n,e){"use strict";var o=e("9c0c"),a=e.n(o);a.a},"9c0c":function(t,n,e){}});
//# sourceMappingURL=app.7d99f302.js.map