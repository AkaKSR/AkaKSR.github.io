(function(){var t={6219:function(t){let e="",n={};function i(t,e){const i=document.getElementById(t),a=i.getContext("2d");return n=e,{canvas:i,ctx:a,fn_loadImage:h,fn_fillText:o,options:n}}function a(t){const e=document.getElementById("viewCanvas"),n=e.getContext("2d"),i=document.querySelector(".image"),a=i.clientWidth/t.width*100;e.width=t.width*a/100,e.height=t.height*a/100,n.drawImage(t,0,0,e.width,e.height)}function o(t,e){h(t).then((()=>{if(e){var i=0,o=0;t.ctx.font=`${n["a"+e.length].fontSize}px mono`,i=n["a"+e.length].width,o=n["a"+e.length].height,t.ctx.fillText(e,i,o);const h=new Image;h.src=t.canvas.toDataURL(),h.onload=()=>{a(h)}}}))}function h(t,n){return n&&(e=n),new Promise((n=>{const i=t.canvas,o=t.ctx,h=new Image;h.src=e,h.onload=()=>{i.width=h.width,i.height=h.height,o.drawImage(h,0,0),a(h),n()}}))}t.exports={init:i,fn_setViewCanvas:a,fn_fillText:o,fn_loadImage:h}},4481:function(t,e,n){"use strict";var i=n(5130),a=n(6768),o=n.p+"img/logo.90d0522d.png";const h=t=>((0,a.Qi)("data-v-1ef73f24"),t=t(),(0,a.jt)(),t),r={class:"main"},l=h((()=>(0,a.Lk)("img",{id:"logo",src:o,width:"40%",height:"40%"},null,-1)));function s(t,e,n,i,o,h){const s=(0,a.g2)("CoverComponent"),f=(0,a.g2)("LayoutComponent");return(0,a.uX)(),(0,a.CE)("div",r,[(0,a.bF)(f,null,{header:(0,a.k6)((()=>[l])),main:(0,a.k6)((()=>[(0,a.bF)(s)])),footer:(0,a.k6)((()=>[])),_:1})])}const f={class:"layout"};function u(t,e,n,i,o,h){return(0,a.uX)(),(0,a.CE)("div",f,[(0,a.Lk)("header",null,[(0,a.RG)(t.$slots,"header",{},void 0,!0)]),(0,a.Lk)("main",null,[(0,a.RG)(t.$slots,"main",{},void 0,!0)]),(0,a.Lk)("footer",null,[(0,a.RG)(t.$slots,"footer",{},void 0,!0)])])}var d={name:"LayoutComponent",props:{}},g=n(1241);const c=(0,g.A)(d,[["render",u],["__scopeId","data-v-08cd632a"]]);var v=c;const m=t=>((0,a.Qi)("data-v-f5db7bae"),t=t(),(0,a.jt)(),t),p=m((()=>(0,a.Lk)("colgroup",null,[(0,a.Lk)("col",{style:{width:"100px"}}),(0,a.Lk)("col",{style:{width:"100px"}}),(0,a.Lk)("col",{style:{width:"120px"}}),(0,a.Lk)("col")],-1))),w=m((()=>(0,a.Lk)("tr",null,[(0,a.Lk)("td",{colspan:"4"},[(0,a.Lk)("div",{class:"image"},[(0,a.Lk)("canvas",{id:"viewCanvas"})])])],-1))),k=m((()=>(0,a.Lk)("th",null,"지역 : ",-1))),S=m((()=>(0,a.Lk)("option",{key:"default",value:"default"},"기본",-1))),z=m((()=>(0,a.Lk)("option",{key:"ng",value:"ng"},"경기 북부",-1))),C=m((()=>(0,a.Lk)("option",{key:"se",value:"se"},"서울",-1))),L=[S,z,C],_=m((()=>(0,a.Lk)("th",null,"넣을 내용 : ",-1))),x=m((()=>(0,a.Lk)("canvas",{id:"resultCanvas"},null,-1))),b={class:"btn-wrap"};function y(t,e,n,i,o,h){return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.Lk)("div",null,[(0,a.Lk)("table",null,[p,(0,a.Lk)("tbody",null,[w,(0,a.Lk)("tr",null,[k,(0,a.Lk)("td",null,[(0,a.Lk)("select",{onChange:e[0]||(e[0]=(...t)=>h.fn_setImage&&h.fn_setImage(...t))},L,32)]),_,(0,a.Lk)("td",null,[(0,a.Lk)("input",{type:"text",onInput:e[1]||(e[1]=(...t)=>h.fn_setText&&h.fn_setText(...t))},null,32)])])])])]),x,(0,a.Lk)("div",b,[(0,a.Lk)("button",{onClick:e[2]||(e[2]=t=>h.fn_download())},"다운로드")])],64)}var I=n(6219),O=n.n(I),T=JSON.parse('{"default":{"a1":{"fontSize":135,"width":500,"height":330},"a2":{"fontSize":135,"width":500,"height":330},"a3":{"fontSize":135,"width":500,"height":330},"a4":{"fontSize":135,"width":500,"height":330},"a5":{"fontSize":135,"width":500,"height":330},"a6":{"fontSize":115,"width":500,"height":320},"a7":{"fontSize":95,"width":520,"height":310},"a8":{"fontSize":83,"width":520,"height":310},"a9":{"fontSize":73,"width":520,"height":300},"a10":{"fontSize":66,"width":520,"height":300},"a11":{"fontSize":60,"width":520,"height":300},"a12":{"fontSize":55,"width":520,"height":300}},"ng":{"a1":{"fontSize":135,"width":500,"height":330},"a2":{"fontSize":135,"width":500,"height":330},"a3":{"fontSize":135,"width":500,"height":330},"a4":{"fontSize":135,"width":500,"height":330},"a5":{"fontSize":135,"width":500,"height":330},"a6":{"fontSize":115,"width":500,"height":320},"a7":{"fontSize":95,"width":520,"height":310},"a8":{"fontSize":83,"width":520,"height":310},"a9":{"fontSize":73,"width":520,"height":300},"a10":{"fontSize":66,"width":520,"height":300},"a11":{"fontSize":60,"width":520,"height":300},"a12":{"fontSize":55,"width":520,"height":300}},"se":{"a1":{"fontSize":135,"width":500,"height":330},"a2":{"fontSize":135,"width":500,"height":330},"a3":{"fontSize":135,"width":500,"height":330},"a4":{"fontSize":135,"width":500,"height":330},"a5":{"fontSize":135,"width":500,"height":330},"a6":{"fontSize":115,"width":500,"height":320},"a7":{"fontSize":95,"width":520,"height":310},"a8":{"fontSize":83,"width":520,"height":310},"a9":{"fontSize":73,"width":520,"height":300},"a10":{"fontSize":66,"width":520,"height":300},"a11":{"fontSize":60,"width":520,"height":300},"a12":{"fontSize":55,"width":520,"height":300}}}'),j={name:"CoverComponent",props:{},data(){return{imgCanvas:"",resultCanvas:"",text:"",images:{default:n(6078),ng:n(1975),se:n(3530)}}},created(){var t=Object.keys(T);for(let e=0;e<t.length;e++)T[t[e]].img=this.images[t[e]]},mounted(){this.imgCanvas=O().init("resultCanvas",T["default"]),this.imgCanvas.fn_loadImage(this.imgCanvas,T["default"].img)},methods:{fn_setText(t){if(t.target.value.length>=13)return alert("12자까지 입력 가능합니다."),void(t.target.value=t.target.value.substring(0,t.target.value.length-1));this.imgCanvas.fn_fillText(this.imgCanvas,t.target.value),this.text=t.target.value},fn_setImage(t){console.log(t.target.value),this.imgCanvas=O().init("resultCanvas",T[t.target.value]),this.imgCanvas.fn_loadImage(this.imgCanvas,T[t.target.value].img),this.imgCanvas.fn_fillText(this.imgCanvas,this.text)},fn_download(){const t=document.createElement("a");t.href=this.imgCanvas.canvas.toDataURL(),t.download="result.png",t.click(),t.remove()}}};const E=(0,g.A)(j,[["render",y],["__scopeId","data-v-f5db7bae"]]);var R=E,A={name:"App",components:{LayoutComponent:v,CoverComponent:R}};const F=(0,g.A)(A,[["render",s],["__scopeId","data-v-1ef73f24"]]);var $=F;(0,i.Ef)($).mount("#app")},6078:function(t,e,n){"use strict";t.exports=n.p+"img/template_2.5791efb7.png"},1975:function(t,e,n){"use strict";t.exports=n.p+"img/template_ng.30778361.png"},3530:function(t,e,n){"use strict";t.exports=n.p+"img/template_se.e0d27ac6.png"}},e={};function n(i){var a=e[i];if(void 0!==a)return a.exports;var o=e[i]={exports:{}};return t[i].call(o.exports,o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,i,a,o){if(!i){var h=1/0;for(f=0;f<t.length;f++){i=t[f][0],a=t[f][1],o=t[f][2];for(var r=!0,l=0;l<i.length;l++)(!1&o||h>=o)&&Object.keys(n.O).every((function(t){return n.O[t](i[l])}))?i.splice(l--,1):(r=!1,o<h&&(h=o));if(r){t.splice(f--,1);var s=a();void 0!==s&&(e=s)}}return e}o=o||0;for(var f=t.length;f>0&&t[f-1][2]>o;f--)t[f]=t[f-1];t[f]=[i,a,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.p="/"}(),function(){var t={524:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var a,o,h=i[0],r=i[1],l=i[2],s=0;if(h.some((function(e){return 0!==t[e]}))){for(a in r)n.o(r,a)&&(n.m[a]=r[a]);if(l)var f=l(n)}for(e&&e(i);s<h.length;s++)o=h[s],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(f)},i=self["webpackChunkseltos_car_cover"]=self["webpackChunkseltos_car_cover"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[504],(function(){return n(4481)}));i=n.O(i)})();
//# sourceMappingURL=app.82069148.js.map