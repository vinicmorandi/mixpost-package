import{d as $,T as w,H as b,c as d,a as o,b as t,e as r,g as h,w as s,F as c,o as i,Z as V,h as n,t as l,a2 as k,k as f,f as v,_ as y,n as B}from"./app.a05b4c5c.js";import{_ as N}from"./Minimal.e0a95d9a.js";import{_ as S}from"./Panel.05e9bba5.js";import{_ as x}from"./HorizontalGroup.97d4c34e.js";import{_ as C}from"./Error.4aa59f2e.js";import{_ as F}from"./Input.44809a08.js";import{_ as L}from"./Alert.49de0ead.js";const P={class:"w-full sm:max-w-lg mx-auto"},j=["onSubmit"],T={for:"email"},q={class:"w-full"},D=$({layout:N}),G=Object.assign(D,{__name:"ForgotPassword",setup(E){const p=B("routePrefix"),e=w({email:""}),u=b(!1),g=()=>{e.post(route(`${p}.password.email`),{onSuccess:()=>{u.value=!0,e.reset()}})};return(a,_)=>(i(),d(c,null,[o(t(V),{title:a.$t("auth.forgot_password")},null,8,["title"]),r("div",P,[r("form",{onSubmit:h(g,["prevent"])},[o(S,null,{title:s(()=>[n(l(a.$t("auth.confirm_forgot_password")),1)]),description:s(()=>[n(l(a.$t("auth.let_email_address")),1)]),default:s(()=>[(i(!0),d(c,null,k(t(e).errors,m=>(i(),f(C,{message:m,class:"mb-xs"},null,8,["message"]))),256)),o(x,null,{title:s(()=>[r("label",T,l(a.$t("general.email")),1)]),default:s(()=>[r("div",q,[o(F,{modelValue:t(e).email,"onUpdate:modelValue":_[0]||(_[0]=m=>t(e).email=m),type:"email",id:"email",class:"w-full",required:""},null,8,["modelValue"])])]),_:1}),u.value?(i(),f(L,{key:0,closeable:!1,variant:"success",class:"mt-lg"},{default:s(()=>[n(l(a.$t("auth.password_reset_link")),1)]),_:1})):v("",!0),o(y,{disabled:t(e).processing,isLoading:t(e).processing,type:"submit",class:"mt-lg"},{default:s(()=>[n(l(a.$t("auth.send_password_reset")),1)]),_:1},8,["disabled","isLoading"])]),_:1})],40,j)])],64))}});export{G as default};