import{u as v,_ as y}from"./ProviderIcon.9a25a410.js";import{E as h}from"./ExclamationCircle.df2493b4.js";import{O as r,r as b,o as a,c as i,e as n,E as l,b as t,k as w,c8 as x,j as C,a as c,f as k}from"./app.a05b4c5c.js";const j={class:"flex items-center justify-center"},z=["src"],B={key:0,class:"flex items-center justify-center rounded-full absolute top-0 -ml-12 bg-orange-500 text-white"},N={__name:"Account",props:{imgUrl:{type:[String,null],required:!0},provider:{type:String,required:!0},name:{type:String,required:!0},active:{type:Boolean,default:!1},size:{type:String,default:"md"},warningMessage:{type:String,default:""}},setup(e){const s=e,{borderClasses:o,activeBgClasses:u}=v(s.provider),m=r(()=>s.active?o.value:"border-stone-600"),d=r(()=>({md:"w-10 h-10",lg:"w-16 h-16"})[s.size]),f=r(()=>({md:"w-5 h-5 -mb-11 -mr-5",lg:"w-8 h-8 -mb-16 -mr-9"})[s.size]),g=r(()=>({md:"!w-4 !h-4"})[s.size]);return(_,S)=>{const p=b("tooltip");return a(),i("span",j,[n("span",{class:l([t(m),"flex items-center justify-center relative border-2 p-1 rounded-full bg-white"])},[n("span",{class:l([[t(u),t(d),{grayscale:!e.active}],"inline-flex justify-center items-center flex-shrink-0 rounded-full"])},[e.imgUrl?(a(),i("img",{key:0,src:e.imgUrl,class:"object-cover w-full h-full rounded-full",alt:""},null,8,z)):(a(),w(x,{key:1,name:e.name},null,8,["name"]))],2),e.warningMessage?C((a(),i("span",B,[c(h,{class:l(t(g))},null,8,["class"])])),[[p,e.warningMessage]]):k("",!0),n("span",{class:l([[t(f),{grayscale:!e.active}],"flex items-center justify-center absolute bg-white p-md rounded-full"])},[n("span",null,[c(y,{provider:s.provider},null,8,["provider"])])],2)],2)])}}};export{N as _};