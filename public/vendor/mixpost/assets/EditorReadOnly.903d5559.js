import{M as n,m as o,v as i,x as u}from"./index.a09b91eb.js";import{u as m,H as c,a as d,V as l}from"./Variable.40ae6e15.js";import{a6 as p,o as _,k as f,b as s}from"./app.a05b4c5c.js";const g=n.create({name:"instagram_name",addOptions(){return{HTMLAttributes:{class:"font-medium"}}},parseHTML(){return[{tag:"instagram_username"}]},renderHTML({HTMLAttributes:e}){return["instagram_username",o(this.options.HTMLAttributes,e),0]}}),x={__name:"EditorReadOnly",props:{value:{required:!0}},setup(e){const t=e,{defaultExtensions:r}=m(),a=i({editable:!1,content:t.value,extensions:[...r,g,c,d,l]});return p(()=>t.value,()=>{a.value.commands.setContent(t.value)}),(H,b)=>(_(),f(s(u),{editor:s(a)},null,8,["editor"]))}};export{x as _};