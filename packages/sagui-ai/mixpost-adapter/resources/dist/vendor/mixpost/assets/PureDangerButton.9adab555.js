import{o as n,c as s,E as l,A as a,f as r}from"./app.a05b4c5c.js";const o=["type"],m={__name:"PureDangerButton",props:{type:{type:String,default:"button"},hiddenTextOnSmallScreen:{type:Boolean,default:!1}},setup(t){return(e,i)=>(n(),s("button",{type:t.type,class:"relative inline-flex items-center text-red-400 hover:text-red-500 transition-colors ease-in-out duration-200"},[e.$slots.icon?(n(),s("span",{key:0,class:l(["inline-flex",{"sm:mr-xs":e.$slots.default,"mr-0 sm:mr-xs":t.hiddenTextOnSmallScreen,"mr-xs":!t.hiddenTextOnSmallScreen&&e.$slots.default}])},[a(e.$slots,"icon")],2)):r("",!0),e.$slots.default?(n(),s("span",{key:1,class:l(["inline-flex items-center",{"hidden sm:inline":t.hiddenTextOnSmallScreen}])},[a(e.$slots,"default")],2)):r("",!0)],8,o))}};export{m as _};
