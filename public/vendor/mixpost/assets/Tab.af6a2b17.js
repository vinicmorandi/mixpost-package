import{p as n,o as s,c as a,A as r,E as o,f as l}from"./app.a05b4c5c.js";const c={},i={class:"flex flex-wrap items-end",role:"tablist"};function d(e,t){return s(),a("div",i,[r(e.$slots,"default")])}const p=n(c,[["render",d]]),m=["aria-selected"],b={__name:"Tab",props:{active:{type:Boolean,default:!1}},setup(e){return(t,f)=>(s(),a("button",{type:"button",role:"tab","aria-selected":e.active?"true":"false",class:o([{"border-primary-500 text-primary-500":e.active,"hover:text-primary-500":!e.active},"flex items-center border-b-2 border-gray-200 pb-2 mr-5 last:mr-0 font-medium transition-colors ease-in-out duration-200"])},[t.$slots.icon?(s(),a("span",{key:0,class:o(["inline-flex",{"mr-xs":t.$slots.default}])},[r(t.$slots,"icon")],2)):l("",!0),r(t.$slots,"default")],10,m))}};export{p as T,b as _};