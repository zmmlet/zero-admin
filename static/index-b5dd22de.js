import{_ as e}from"./index-5ca7d054.js";import{l as t,U as n,V as s,W as a,Z as r,_ as o,u as i,$ as l,a0 as c,a1 as u,a2 as m,F as d,v as _,r as h,b as p,j as g,G as f,K as v,a3 as b,a4 as w,N as E,a5 as L,a6 as y,a7 as I,a8 as k}from"./vue-108bee2e.js";/* empty css              */import{d as x,s as C}from"./pinia-eca2817f.js";import{I as O}from"./icons-7caccd24.js";import{_ as j,a as R,M as T,L as M,b as A,B as D,n as P,c as V,m as S,E as N,A as B,d as U,e as J,f as K,g as z,h as $,i as q,j as H}from"./antd-8bbd150b.js";import{_ as F}from"./_plugin-vue_export-helper-1b428a4d.js";import{b as G}from"./axios-707b95a3.js";const W={setCache(e,t){window.localStorage.setItem(e,JSON.stringify(t))},getCache(e){const t=window.localStorage.getItem(e);if(t)return JSON.parse(t)},deleteCache(e){window.localStorage.removeItem(e)},clearCache(){window.localStorage.clear()}},X={set(e,t){window.sessionStorage.setItem(e,JSON.stringify(t))},get(e){const t=window.sessionStorage.getItem(e);return t&&"undefined"!=t&&"null"!=t?JSON.parse(t):null},remove(e){window.sessionStorage.removeItem(e)},clear(){window.sessionStorage.clear()}},Z=e=>{const t=[];return e.forEach((e=>{const{name:n,children:s}=e;if(!e.meta||!e.meta.hidden){s&&s.length&&(e.children=Z(s));let a="";e.children&&1===e.children.length&&(a=e.children[0].name),t.push({name:a||n,title:e.meta&&e.meta.title?e.meta.title:"",icon:e.meta&&e.meta.icon?e.meta.icon:"",meta:e.meta,children:a?[]:e.children})}})),t},Q=x("menuStore",{persist:{enabled:!0},state:()=>({title:"zero-admin",menus:[],openMenu:[],selectedMenu:"",isCollapse:!1,breadcrumbList:[""]}),getters:{getMenus:e=>e.menus},actions:{setSelectedMenu(e=""){this.selectedMenu=e,W.setCache("selectedMenu",e)},generateMenus(e){const t=Z(e);this.setMenus(t)},setMenus(e){this.menus=e},setOpenMenu(e=[]){this.openMenu=e,W.setCache("openMenu",e)},updateCollapse(){this.isCollapse=!this.isCollapse},SET_BREADCRUMB(e){W.setCache("breadcrumbList",e),this.breadcrumbList=e},clearMenus(){this.menus=[]}}}),Y=t({__name:"SubMenu",props:{menuInfo:{type:Object,default:()=>({})}},setup:e=>(t,h)=>{const p=n("router-link"),g=j,f=n("SubMenu",!0),v=R;return s(),a(v,{key:e.menuInfo.name},{title:r((()=>[o("span",null,[e.menuInfo.meta&&e.menuInfo.meta.icon?(s(),a(i(O),{key:0,icon:e.menuInfo.meta.icon},null,8,["icon"])):l("",!0),o("span",null,c(e.menuInfo.meta&&e.menuInfo.meta.title),1)])])),default:r((()=>[e.menuInfo.children&&e.menuInfo.children.length?(s(!0),u(d,{key:0},m(e.menuInfo.children,(e=>(s(),u(d,null,[!e.children||e.children&&e.children.length&&1===e.children.length?(s(),a(g,{key:e.name},{default:r((()=>[_(p,{to:{name:e.children&&e.children.length&&1===e.children.length?e.children[0].name:e.name}},{default:r((()=>[o("span",null,c(e.meta&&e.meta.title),1)])),_:2},1032,["to"])])),_:2},1024)):(s(),a(f,{"menu-info":e,key:e.path},null,8,["menu-info"]))],64)))),256)):l("",!0)])),_:1})}}),ee=[{name:"dashboard",title:"首页"}],te=ee.map((e=>e.name)),ne=x("breadcrumb",{state:()=>({breadcrumbList:te}),getters:{getBreadcrumb:e=>e.breadcrumbList,filterBreadcrumb(){return(e=[],t=[])=>{const n=this.getBreadcrumb;if(e&&e.length&&n&&n.length){const s=n.shift(),a=e.find((e=>e.name===s));if(t.push({name:null==a?void 0:a.name,title:null==a?void 0:a.title}),null==a?void 0:a.children)return this.filterBreadcrumb(a.children,t)}return t&&t.length?t:ee}}},actions:{setBreadcrumb(e){this.breadcrumbList=e},generateBreadcrumb(){const{menus:e}=Q();return this.filterBreadcrumb(e,[])}}}),se=t({__name:"menu",setup(e){const{setBreadcrumb:t}=ne(),{menus:g}=C(Q()),{setSelectedMenu:f,setOpenMenu:v,SET_BREADCRUMB:b}=Q();let w=h(W.getCache("selectedMenu")?[W.getCache("selectedMenu")]:[]),E=h(W.getCache("openMenu")?W.getCache("openMenu"):[]);const L=({key:e,keyPath:n})=>{f(e),v(E.value),b(n),t(n)};return(e,t)=>{const h=n("router-link"),f=j,v=T;return s(),a(v,{mode:"inline",theme:"dark",onClick:L,openKeys:i(E),"onUpdate:openKeys":t[0]||(t[0]=e=>p(E)?E.value=e:E=e),selectedKeys:i(w),"onUpdate:selectedKeys":t[1]||(t[1]=e=>p(w)?w.value=e:w=e)},{default:r((()=>[(s(!0),u(d,null,m(i(g),(e=>(s(),u(d,null,[!e.children||e.children&&e.children.length&&1===e.children.length?(s(),a(f,{key:e.name},{default:r((()=>[_(h,{to:{name:e.children&&e.children.length&&1===e.children.length?e.children[0].name:e.name}},{default:r((()=>[e.meta&&e.meta.icon?(s(),a(i(O),{key:0,icon:e.meta.icon},null,8,["icon"])):l("",!0),o("span",null,c(e.meta&&e.meta.title),1)])),_:2},1032,["to"])])),_:2},1024)):(s(),a(Y,{"menu-info":e,key:e.title},null,8,["menu-info"]))],64)))),256))])),_:1},8,["openKeys","selectedKeys"])}}}),ae="/zero-admin/static/logo-ffc25827.svg",re={class:"m-logo"},oe=(e=>(b("data-v-cc3a55ce"),e=e(),w(),e))((()=>o("img",{src:ae,class:"icon"},null,-1))),ie=F(t({__name:"logo",setup(e){const t=Q(),n=g((()=>t.title)),a=g((()=>t.isCollapse));return(e,t)=>(s(),u("div",re,[oe,f(o("div",{class:"title"},c(i(n)),513),[[v,!i(a)]])]))}}),[["__scopeId","data-v-cc3a55ce"]]),le=t({__name:"index",setup(e){const t=Q(),n=g((()=>t.isCollapse));return(e,t)=>{const o=M;return s(),a(o,{collapsed:i(n),"onUpdate:collapsed":t[0]||(t[0]=e=>p(n)?n.value=e:null)},{default:r((()=>[_(ie),_(se)])),_:1},8,["collapsed"])}}}),ce=t({__name:"breadcrumb",setup(e){const{generateBreadcrumb:t}=ne(),o=g((()=>t()));return(e,t)=>{const l=n("RouterLink"),h=A,p=D;return s(),a(p,{style:{margin:"16px 0"}},{default:r((()=>[(s(!0),u(d,null,m(i(o),(e=>(s(),a(h,{key:e.name},{default:r((()=>[_(l,{to:{name:e.name}},{default:r((()=>[E(c(e.title),1)])),_:2},1032,["to"])])),_:2},1024)))),128))])),_:1})}}}),ue="/sys/login",me="/sys/permission",de=x("userStore",{persist:{enabled:!0},state:()=>({token:"",userName:"",userInfo:{},routerList:[]}),actions:{getRouter({userName:e,password:t}){return new Promise(((n,s)=>{ge(me,{userName:e,password:t}).then((e=>{if(e.success){const t=e.data;this.routerList=t.permissions,W.setCache("menus",t.permissions),n(e)}else s(e.message)})).catch((e=>{s(e)}))}))},login({userName:e,password:t}){return new Promise(((n,s)=>{var a,r;(a=ue,r={userName:e,password:t},_e({url:a,method:"post",data:r})).then((e=>{if(e.success){const t=e.data;this.token="testToken",this.userInfo=t.userInfo,this.userName=t.userInfo.userName,W.setCache("token",t.token),W.setCache("userName",t.userInfo.userName),W.setCache("userInfo",t.userInfo),n(e)}else s(e.message)})).catch((e=>{s(e)}))}))},logout(){return new Promise((e=>{JSON.parse(JSON.stringify(this.routerList)).forEach((e=>{Te.removeRoute(e.name)})),this.clearUser(),this.clearToken(),this.clearRouterList(),W.clearCache(),e("注销 success， 清空路由，用户信息")}))},clearRouterList(){this.routerList=[]},clearToken(){this.token=""},clearUser(){this.userName="",this.userInfo={}}}}),_e=G.create({baseURL:"/api",timeout:12e4,withCredentials:!0}),he=e=>{if(e.message.includes("timeout")&&P.error({message:"系统提示",description:"请求超时",duration:4}),e.response){const t=e.response.data,n=W.getCache("token");403==e.response.status&&P.error({message:"系统提示",description:"请求资源失败",duration:4}),401!==e.response.status||t.result&&t.result.isLogin||(P.error({message:"系统提示",description:"没有访问权限",duration:4}),n&&fe())}return Promise.reject(e)};function pe(e,t,n){return _e({url:e,method:n,data:t})}function ge(e,t){return _e({url:e,method:"get",params:t})}function fe(){V.confirm({title:"退出登录?",icon:_(N),okText:"确认",cancelText:"取消",onOk(){S.success("退出成功"),Te.push("/login"),W.clearCache(),X.clear(),setTimeout((()=>{window.location.reload()}),100)},onCancel(){S.info("取消退出登录")}})}_e.interceptors.request.use((e=>{const t=de().token||"";return"get"==e.method&&(e.params={_t:(new Date).getTime(),...e.params}),{...e,headers:{"X-Access-Token":t}}}),he),_e.interceptors.response.use((e=>{e.config;const t=Number(e.data.code);if(200==t||0==t)return e.data;[402,403,500].includes(e.data.code)&&(P.error({message:"系统提示",description:"没有权限",duration:4}),setTimeout((()=>{window.location.reload()}),500))}),he);const ve={class:"logout"},be=(e=>(b("data-v-bd6478fa"),e=e(),w(),e))((()=>o("div",{class:"setting"},"个人设置",-1))),we={class:"user-name"},Ee=F(t({__name:"logout",setup(e){let{userName:t}=C(de());const n=g((()=>t)),a=()=>{fe()};return(e,t)=>{const l=B,m=U;return s(),u("div",ve,[_(m,{placement:"bottom"},{content:r((()=>[be,o("div",{class:"setting",onClick:a},"退出登录")])),default:r((()=>[_(l,{style:{"background-color":"#87d068"}},{icon:r((()=>[_(i(O),{icon:"UserOutlined"})])),_:1}),o("span",we,c(i(n).value),1),_(i(O),{icon:"CaretDownOutlined"})])),_:1})])}}}),[["__scopeId","data-v-bd6478fa"]]),Le=F(t({__name:"index",setup(e){const t=Q(),n=g((()=>t.isCollapse)),o=()=>{t.updateCollapse()};return(e,t)=>{const l=z;return s(),a(l,{class:"c-header"},{default:r((()=>[i(n)?(s(),a(i(J),{key:0,class:"c-header-trigger",onClick:o})):(s(),a(i(K),{key:1,class:"c-header-trigger",onClick:o})),_(ce,{class:"c-header-breadcrumb"}),_(Ee,{class:"c-header-logout"})])),_:1})}}}),[["__scopeId","data-v-ac102605"]]),ye=t({data:()=>({})}),Ie={class:"c-main-content"};const ke=F(ye,[["render",function(e,t,i,l,c,u){const m=n("router-view"),d=$;return s(),a(d,{class:"c-main"},{default:r((()=>[o("div",Ie,[_(m,null,{default:r((({Component:e})=>[(s(),a(L,null,[(s(),a(y(e)))],1024))])),_:1})])])),_:1})}],["__scopeId","data-v-9766f7d1"]]);const xe=F(t({}),[["render",function(e,t,n,o,i,l){const c=q;return s(),a(c,{style:{"text-align":"center"}},{default:r((()=>[E(" zero-admin-system ")])),_:1})}]]),Ce=(t,n,s)=>{if(s.routerList&&s.routerList.length>0){const a=JSON.parse(JSON.stringify(s.routerList));Oe(a,Object.assign({"./views/AboutView.vue":()=>e((()=>import("./AboutView-5f0e3006.js")),["static/AboutView-5f0e3006.js","static/_plugin-vue_export-helper-1b428a4d.js","static/vue-108bee2e.js","static/AboutView-649e276b.css"]),"./views/HomeView.vue":()=>e((()=>import("./HomeView-c3ce5dca.js")),["static/HomeView-c3ce5dca.js","static/icons-7caccd24.js","static/antd-8bbd150b.js","static/vue-108bee2e.js","static/_plugin-vue_export-helper-1b428a4d.js","static/HomeView-1ab4af6e.css"]),"./views/Login/index.vue":()=>e((()=>import("./index-ac27b5b5.js")),["static/index-ac27b5b5.js","static/index-5ca7d054.js","static/index-895ea2d5.css","static/vue-108bee2e.js","static/antd-8bbd150b.js","static/_plugin-vue_export-helper-1b428a4d.js","static/pinia-eca2817f.js","static/icons-7caccd24.js","static/axios-707b95a3.js","static/index-5000f225.css","static/index-af22c276.css","static/index-11c99964.css","static/index-e2c16d75.css","static/index-003d532f.css"]),"./views/ability/fileDownload/index.vue":()=>e((()=>import("./index-7aaf55ce.js")),["static/index-7aaf55ce.js","static/index-86c7435b.js","static/antd-8bbd150b.js","static/vue-108bee2e.js","static/index-9dd58670.css","static/index-af22c276.css"]),"./views/ability/print/index.vue":()=>e((()=>import("./index-ef51b360.js")),["static/index-ef51b360.js","static/axios-707b95a3.js","static/vue-108bee2e.js","static/antd-8bbd150b.js","static/index-af22c276.css"]),"./views/analysis/index.vue":()=>e((()=>import("./index-6e59547c.js")),["static/index-6e59547c.js","static/echarts-d50100d5.js","static/vue-108bee2e.js","static/antd-8bbd150b.js","static/_plugin-vue_export-helper-1b428a4d.js","static/index-618c95eb.css","static/index-af22c276.css"]),"./views/charts/map.vue":()=>e((()=>import("./map-72012785.js")),["static/map-72012785.js","static/echarts-d50100d5.js","static/vue-108bee2e.js"]),"./views/charts/pie.vue":()=>e((()=>import("./pie-706f227e.js")),["static/pie-706f227e.js","static/echarts-d50100d5.js","static/vue-108bee2e.js","static/_plugin-vue_export-helper-1b428a4d.js","static/pie-1dba4846.css"]),"./views/components/table/index.vue":()=>e((()=>import("./index-2c957878.js")),["static/index-2c957878.js","static/index-5ca7d054.js","static/index-895ea2d5.css","static/vue-108bee2e.js","static/antd-8bbd150b.js","static/index-df4ba28c.css","static/index-af22c276.css","static/index-6c38a4e5.css"]),"./views/components/tree/index.vue":()=>e((()=>import("./index-647986a4.js")),["static/index-647986a4.js","static/_plugin-vue_export-helper-1b428a4d.js","static/vue-108bee2e.js"]),"./views/system/account/index.vue":()=>e((()=>import("./index-516e6a1b.js")),["static/index-516e6a1b.js","static/_plugin-vue_export-helper-1b428a4d.js","static/vue-108bee2e.js"]),"./views/system/changePassword/index.vue":()=>e((()=>import("./index-693031fd.js")),["static/index-693031fd.js","static/_plugin-vue_export-helper-1b428a4d.js","static/vue-108bee2e.js"]),"./views/system/dept/index.vue":()=>e((()=>import("./index-97190da6.js")),["static/index-97190da6.js","static/_plugin-vue_export-helper-1b428a4d.js","static/vue-108bee2e.js"]),"./views/system/menu/index.vue":()=>e((()=>import("./index-6129cb7b.js")),["static/index-6129cb7b.js","static/index-5ca7d054.js","static/index-895ea2d5.css","static/vue-108bee2e.js","static/antd-8bbd150b.js","static/_plugin-vue_export-helper-1b428a4d.js","static/index-321ff388.css","static/index-af22c276.css","static/index-6c38a4e5.css","static/index-e2c16d75.css","static/index-11c99964.css"]),"./views/system/role/index.vue":()=>e((()=>import("./index-b499fd2d.js")),["static/index-b499fd2d.js","static/index-5ca7d054.js","static/index-895ea2d5.css","static/vue-108bee2e.js","static/icons-7caccd24.js","static/antd-8bbd150b.js","static/addEdit-4df4e1fc.js","static/index-86c7435b.js","static/_plugin-vue_export-helper-1b428a4d.js","static/pinia-eca2817f.js","static/axios-707b95a3.js","static/addEdit-03f52704.css","static/index-af22c276.css","static/index-e2c16d75.css","static/index-11c99964.css","static/index-9658c852.css","static/index-6c38a4e5.css"]),"./views/system/role/modules/addEdit.vue":()=>e((()=>import("./addEdit-4df4e1fc.js")),["static/addEdit-4df4e1fc.js","static/index-5ca7d054.js","static/index-895ea2d5.css","static/index-86c7435b.js","static/vue-108bee2e.js","static/antd-8bbd150b.js","static/_plugin-vue_export-helper-1b428a4d.js","static/pinia-eca2817f.js","static/icons-7caccd24.js","static/axios-707b95a3.js","static/addEdit-03f52704.css","static/index-af22c276.css","static/index-e2c16d75.css","static/index-11c99964.css"]),"./views/vueSyntax/life.cycle.vue":()=>e((()=>import("./life.cycle-fc9bc2ad.js")),["static/life.cycle-fc9bc2ad.js","static/vue-108bee2e.js","static/_plugin-vue_export-helper-1b428a4d.js","static/life.cycle-d3f7b923.css"])})),a.forEach((e=>{n.addRoute("Layout",e)})),t.generateMenus(a)}n.addRoute({path:"/:pathMatch(.*)*",name:"404",component:()=>e((()=>import("./index-67a0fb78.js")),["static/index-67a0fb78.js","static/_plugin-vue_export-helper-1b428a4d.js","static/vue-108bee2e.js","static/index-177037e3.css"]),meta:{title:"404",layout:!1}})},Oe=(e,t)=>e.map((e=>{const n=e;return n.component&&(n.component=t[`./views/${n.component}.vue`]),n.children&&n.children.length>0&&Oe(n.children,t),n})),je=[{name:"Login",path:"/login",component:()=>e((()=>import("./index-ac27b5b5.js")),["static/index-ac27b5b5.js","static/index-5ca7d054.js","static/index-895ea2d5.css","static/vue-108bee2e.js","static/antd-8bbd150b.js","static/_plugin-vue_export-helper-1b428a4d.js","static/pinia-eca2817f.js","static/icons-7caccd24.js","static/axios-707b95a3.js","static/index-5000f225.css","static/index-af22c276.css","static/index-11c99964.css","static/index-e2c16d75.css","static/index-003d532f.css"]),meta:{title:"登录",inMenu:!1}},{path:"/",name:"Layout",component:t({__name:"index",setup:e=>(e,t)=>{const n=H;return s(),a(n,{style:{"min-height":"100vh"}},{default:r((()=>[_(le),_(n,null,{default:r((()=>[_(Le),_(ke),_(xe)])),_:1})])),_:1})}}),meta:{title:"Layout",inMenu:!1},children:[...[{path:"/dashboard",name:"dashboard",component:()=>e((()=>import("./index-6e59547c.js")),["static/index-6e59547c.js","static/echarts-d50100d5.js","static/vue-108bee2e.js","static/antd-8bbd150b.js","static/_plugin-vue_export-helper-1b428a4d.js","static/index-618c95eb.css","static/index-af22c276.css"]),meta:{title:"Dashboard",breadcrumb:["分析页面"],keep:!1,icon:"LineChartOutlined",role:["admin"],hidden:!1}}]]},{name:"404",path:"/:pathMatch(.*)",component:()=>e((()=>import("./index-67a0fb78.js")),["static/index-67a0fb78.js","static/_plugin-vue_export-helper-1b428a4d.js","static/vue-108bee2e.js","static/index-177037e3.css"]),meta:{title:"找不到页面"}}],Re=je.find((e=>"Layout"===e.name));null==Re||Re.children;const Te=I({history:k("/zero-admin"),routes:je});let Me=!0,Ae=!0;Te.beforeEach((async(e,t,n)=>{const s=Q(),a=de(),r=W.getCache("token");"Login"===e.name||r?("Login"===e.name&&(setTimeout((()=>{var e,t,n;t=Te,n=a,(e=s).menus&&e.menus.length>0&&(e.menus.forEach((e=>{t.removeRoute(e.name)})),e.clearMenus(),n.clearRouterList())}),2e3),a.clearToken(),a.clearUser()),"Login"===t.name&&Me&&(Ce(s,Te,a),n({...e,replace:!0}),Me=!1),!t.name&&Ae?(Ce(s,Te,a),n({path:`${e.path}`}),Ae=!1):n()):n({name:"Login"})})),Te.onError((e=>{e.message.match(/Loading chunk (\d)+ failed/g)&&location.reload()}));export{ae as _,ge as g,pe as h,W as l,Te as r,de as u};
