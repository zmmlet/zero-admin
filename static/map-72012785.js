import{i as e,r as a}from"./echarts-d50100d5.js";import{l as t,r,p as o,V as s,a1 as i,aa as n}from"./vue-108bee2e.js";const l=t({__name:"map",props:{width:{type:String,default:"100%"},height:{type:String,default:"calc(100vh - 145px)"}},setup(t){const l=r(null);let p=r([]);o((async()=>{var t=e(l.value);const r=await fetch("/china.json"),o=await r.json();p.value=o,a("china",o),t.setOption(f(o.features))}));const f=(e=[],a=[])=>{let t=[];a.forEach((e=>{t.push(e.properties.name)}));let r=["北京","重庆","上海","天津"];return{title:{text:"中国地图",left:"center",triggerEvent:!0},tooltip:{trigger:"item",showDelay:0,transitionDuration:.2},visualMap:{left:"left",min:1e5,max:8e5,inRange:{color:["#313695","#4575b4","#74add1","#abd9e9","#a7ce89","#9fe080","#40b27d","#fdae61","#f46d43","#d73027","#a50026"]},text:["高","低"],calculable:!0},series:[{name:"中国地图",type:"map",roam:!0,map:"china",label:{show:!0,fontSize:8,color:"#fff"},rippleEffect:{brushType:"stroke"},hoverAnimation:!0,emphasis:{label:{show:!0}},itemStyle:{normal:{color:"#ffffff",shadowBlur:10,shadowColor:20,fontSize:"12px"}},data:e.map((e=>(r.find((a=>a===e.properties.name))||e.properties.name,e.properties.name,{name:e.properties.name,value:Number(e.properties.adcode)})))}]}};return(e,a)=>(s(),i("div",{class:"map-box",ref_key:"mapChina",ref:l,style:n({height:t.height,width:t.width})},null,4))}});export{l as default};