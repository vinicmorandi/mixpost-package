import{d as b,T as V,H as h,c as p,a as o,b as e,e as i,g as k,w as a,F as f,o as d,Z as y,h as _,t as n,a2 as q,k as B,_ as S,n as v}from"./app.a05b4c5c.js";import{_ as x}from"./Minimal.e0a95d9a.js";import{_ as L}from"./Panel.05e9bba5.js";import{_ as m}from"./HorizontalGroup.97d4c34e.js";import{_ as N}from"./Error.4aa59f2e.js";import{_ as u}from"./Input.44809a08.js";const P={class:"w-full sm:max-w-lg mx-auto"},U=["onSubmit"],j={for:"email"},C={for:"password"},F={for:"password_confirmation"},T={class:"w-full"},D=b({layout:x}),z=Object.assign(D,{__name:"ResetPassword",props:{token:{type:String,required:!0}},setup(c){const w=c,g=v("routePrefix"),s=V({token:w.token,email:"",password:"",password_confirmation:""});h(!1);const $=()=>{s.post(route(`${g}.password.store`))};return(t,l)=>(d(),p(f,null,[o(e(y),{title:t.$t("auth.reset_password")},null,8,["title"]),i("div",P,[i("form",{onSubmit:k($,["prevent"])},[o(L,null,{title:a(()=>[_(n(t.$t("auth.reset_password")),1)]),default:a(()=>[(d(!0),p(f,null,q(e(s).errors,r=>(d(),B(N,{message:r,class:"mb-xs"},null,8,["message"]))),256)),o(m,{class:"mt-md"},{title:a(()=>[i("label",j,n(t.$t("general.email")),1)]),default:a(()=>[o(u,{modelValue:e(s).email,"onUpdate:modelValue":l[0]||(l[0]=r=>e(s).email=r),error:e(s).errors.email,type:"email",id:"email",class:"w-full",required:"",autocomplete:"username"},null,8,["modelValue","error"])]),_:1}),o(m,{class:"mt-md"},{title:a(()=>[i("label",C,n(t.$t("auth.password")),1)]),default:a(()=>[o(u,{modelValue:e(s).password,"onUpdate:modelValue":l[1]||(l[1]=r=>e(s).password=r),error:e(s).errors.password,type:"password",id:"password",class:"w-full",required:"",autocomplete:"new-password"},null,8,["modelValue","error"])]),_:1}),o(m,{class:"mt-md"},{title:a(()=>[i("label",F,n(t.$t("auth.confirm_password")),1)]),default:a(()=>[i("div",T,[o(u,{modelValue:e(s).password_confirmation,"onUpdate:modelValue":l[2]||(l[2]=r=>e(s).password_confirmation=r),error:e(s).errors.password_confirmation,type:"password",id:"password_confirmation",class:"w-full",required:"",autocomplete:"new-password"},null,8,["modelValue","error"])])]),_:1}),o(S,{disabled:e(s).processing,isLoading:e(s).processing,type:"submit",class:"mt-lg"},{default:a(()=>[_(n(t.$t("auth.reset_password")),1)]),_:1},8,["disabled","isLoading"])]),_:1})],40,U)])],64))}});export{z as default};