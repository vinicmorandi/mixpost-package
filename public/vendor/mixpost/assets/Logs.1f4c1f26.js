import{d as w,S as $,H as x,a0 as b,O as C,c as u,a,b as e,e as l,w as s,F as f,o as t,Z as B,a2 as L,k as g,h as n,t as r,f as h,_ as N,m as T,ac as V}from"./app.a05b4c5c.js";import{_ as D,D as I}from"./Admin.7fa4ba78.js";import{_ as O}from"./PageHeader.044c6731.js";import{_ as F}from"./Panel.05e9bba5.js";import{T as S,_ as j}from"./Tab.af6a2b17.js";import{_ as q}from"./Alert.49de0ead.js";import{_ as A}from"./Textarea.8d64ff10.js";import{_ as E}from"./NoResult.b8d4ef7e.js";import"./Flex.513e8e8d.js";const H={class:"w-full mx-auto row-py"},M={class:"w-full row-px"},Z={class:"mt-lg row-px w-full"},z={class:"mt-md"},G=["href"],J=w({layout:D}),se=Object.assign(J,{__name:"Logs",props:{logs:{required:!0,type:Array}},setup(d){const p=d,{t:m}=$(),v=m("system.system_logs"),c=x(null);b(()=>{p.logs.length&&(c.value=p.logs[0].name)});const o=C(()=>{const i=p.logs.find(y=>y.name===c.value);return i||!1}),k=()=>{V.delete(route("mixpost.system.logs.clear"),{data:{filename:o.value.name}})};return(i,y)=>(t(),u(f,null,[a(e(B),{title:e(v)},null,8,["title"]),l("div",H,[a(O,{title:e(v)},null,8,["title"]),l("div",M,[a(S,null,{default:s(()=>[(t(!0),u(f,null,L(d.logs,_=>(t(),g(j,{key:_.name,onClick:K=>c.value=_.name,active:c.value===_.name},{default:s(()=>[a(I,{class:"mr-xs"}),n(" "+r(_.name),1)]),_:2},1032,["onClick","active"]))),128))]),_:1})]),l("div",Z,[a(F,{class:"mt-lg"},{default:s(()=>[d.logs.length?(t(),u(f,{key:0},[e(o)?(t(),u(f,{key:0},[e(o).error?(t(),g(q,{key:0,closeable:!1,variant:"warning",class:"mb-md"},{default:s(()=>[n(r(e(o).error),1)]),_:1})):h("",!0),a(A,{value:e(o).contents,class:"h-96",readonly:""},null,8,["value"])],64)):h("",!0),l("div",z,[l("a",{href:i.route("mixpost.system.logs.download",{filename:e(o).name}),target:"_blank"},[a(N,{class:"mr-xs"},{default:s(()=>[n(r(e(m)("general.download")),1)]),_:1})],8,G),a(T,{onClick:k},{default:s(()=>[n(r(e(m)("general.clean_up")),1)]),_:1})])],64)):(t(),g(E,{key:1},{default:s(()=>[n(r(e(m)("system.there_are_no_logs")),1)]),_:1}))]),_:1})])])],64))}});export{se as default};