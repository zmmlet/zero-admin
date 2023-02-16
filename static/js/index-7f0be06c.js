import{_ as n}from"./index-9179353e.js";/* empty css                *//* empty css              *//* empty css              */import{l as e,ab as r,r as t,U as a,V as o,a1 as l,v as i,Z as s,u as d,b as m,_ as c,L as p,N as u}from"./vue-d59f5a4d.js";import{v as f,w as x,_ as v,x as I,M as b,D as _,T as w}from"./antd-7726fdd8.js";import"./axios-707b95a3.js";const y='> 基础 Table 组件\r\n\r\n### 使用步骤\r\n\r\n#### 一、异步引入 Table 组件\r\n\r\n```js\r\nimport { defineAsyncComponent } from "vue";\r\nconst Table = defineAsyncComponent(() =>\r\n  import("@/components/Table/index.vue")\r\n);\r\n```\r\n\r\n#### 二、页面挂载\r\n\r\n```html\r\n<table :isBordered="true" :columns="columns" url="" :isRowSelection="false">\r\n  <template #operation="{ row }"> ...自定义具名插槽事件，文本信息等 </template>\r\n</table>\r\n```\r\n\r\n#### 三、表头数据\r\n\r\n```js\r\nconst columns = [\r\n  {\r\n    title: "角色名称",\r\n    dataIndex: "roleName",\r\n    width: "25%",\r\n  },\r\n  {\r\n    title: "角色编码",\r\n    dataIndex: "roleCode",\r\n    width: "25%",\r\n  },\r\n  {\r\n    title: "创建时间",\r\n    dataIndex: "createTime",\r\n  },\r\n  {\r\n    title: "操作",\r\n    width: "25%",\r\n    dataIndex: "operation",\r\n  },\r\n];\r\n```\r\n\r\n#### 四、完整示例\r\n\r\n```html\r\n<template>\r\n  <table\r\n    :isBordered="true"\r\n    :columns="columns"\r\n    url="/sys/role/pageList"\r\n    :isRowSelection="false"\r\n  >\r\n    <template #operation="{ row }">\r\n      ...自定义具名插槽事件，文本信息等\r\n    </template>\r\n  </table>\r\n</template>\r\n\r\n<script lang="ts" setup>\r\n  import { defineAsyncComponent, ref } from "vue";\r\n  const Table = defineAsyncComponent(\r\n    () => import("@/components/Table/index.vue")\r\n  );\r\n\r\n  const columns = [\r\n    {\r\n      title: "角色名称",\r\n      dataIndex: "roleName",\r\n      width: "25%",\r\n    },\r\n    {\r\n      title: "角色编码",\r\n      dataIndex: "roleCode",\r\n      width: "25%",\r\n    },\r\n    {\r\n      title: "创建时间",\r\n      dataIndex: "createTime",\r\n    },\r\n    {\r\n      title: "操作",\r\n      width: "25%",\r\n      dataIndex: "operation",\r\n    },\r\n  ];\r\n<\/script>\r\n```\r\n\r\n### API\r\n\r\n#### Props\r\n\r\n| 参数           | 说明                                             | 类型     | 默认值 | 版本 |\r\n| -------------- | ------------------------------------------------ | -------- | ------ | ---- |\r\n| url            | 请求列表接口地址                                 | string   | -      | 1.0  |\r\n| columns        | 列表表头                                         | Array    | []     | 1.0  |\r\n| params         | 列表请求参数                                     | object   | {}     | 1.0  |\r\n| isRowSelection | 列表是否多选                                     | boolean  | false  | 1.0  |\r\n| isBordered     | 边框                                             | boolean  | false  | 1.0  |\r\n| operation      | 具名插槽，用户定义定义当前行事件（编辑、删除等） | template | -      | 1.0  |\r\n\r\n#### 事件\r\n',h={class:"layout-content"},j=c("a",null,"编辑",-1),C=c("a",{href:"javascript:;"},"添加下级",-1),T=c("a",{href:"javascript:;"},"删除",-1),A=e({__name:"index",setup(e){const A=r((()=>n((()=>import("./index-91cebb80.js")),["static/js/index-91cebb80.js","static/js/index-9179353e.js","static/css/index-d003ba79.css","static/js/index-97478084.js","static/js/vue-d59f5a4d.js","static/js/pinia-e592ca27.js","static/js/storage-b093f12e.js","static/js/icons-87266709.js","static/js/antd-7726fdd8.js","static/js/axios-707b95a3.js","static/js/_plugin-vue_export-helper-1b428a4d.js","static/css/index-eb041875.css","static/css/default-5389cec4.css","static/css/index-109c71da.css","static/css/index-38a5f8d1.css","static/css/index-1ae4780a.css","static/css/index-83265118.css"]))),N=t("1"),R=[{title:"菜单名称",dataIndex:"userName"},{title:"菜单类型",dataIndex:"customerName"},{title:"图标",dataIndex:"orderCode"},{title:"组件",dataIndex:"mntContractNo"},{title:"路径",dataIndex:"onsiteEleName"},{title:"排序",dataIndex:"inspectionId"},{title:"操作",dataIndex:"operation"}],g=n=>{};return(n,e)=>{const r=a("v-md-editor"),t=f,k=x,V=a("Icon"),B=v,E=I,L=b,P=_,S=w;return o(),l("div",h,[i(S,{activeKey:N.value,"onUpdate:activeKey":e[2]||(e[2]=n=>N.value=n)},{default:s((()=>[i(t,{key:"1",tab:"表格组件API"},{default:s((()=>[i(r,{modelValue:d(y),"onUpdate:modelValue":e[0]||(e[0]=n=>m(y)?y.value=n:null),height:"calc(100vh - 293px)",mode:"preview"},null,8,["modelValue"])])),_:1}),i(t,{key:"2",tab:"表格组件使用示例","force-render":""},{default:s((()=>[i(d(A),{ref:"tableRef",isBordered:!0,columns:R,url:"/order/pageList",isRowSelection:!0},{operation:s((({row:n})=>[j,i(k,{type:"vertical"}),i(P,null,{overlay:s((()=>[i(L,null,{default:s((()=>[i(B,null,{default:s((()=>[C])),_:1}),i(B,null,{default:s((()=>[i(E,{title:"是否删除该数据?","ok-text":"是","cancel-text":"否",onConfirm:n=>{},onCancel:g},{default:s((()=>[T])),_:2},1032,["onConfirm"])])),_:2},1024)])),_:2},1024)])),default:s((()=>[c("a",{class:"ant-dropdown-link",onClick:e[1]||(e[1]=p((()=>{}),["prevent"]))},[u(" 更多 "),i(V,{icon:"DownOutlined"})])])),_:2},1024)])),_:1},512)])),_:1})])),_:1},8,["activeKey"])])}}});export{A as default};