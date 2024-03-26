import{S as g,H as k,o as b,k as h,w as e,e as s,a as o,t as f,b as _,h as u,_ as V,ac as $,J as x}from"./app.a05b4c5c.js";import{_ as w}from"./Panel.05e9bba5.js";import{_ as y}from"./Input.44809a08.js";import{F}from"./ProviderIcon.9a25a410.js";import{_ as c}from"./HorizontalGroup.97d4c34e.js";import{_ as m}from"./Error.4aa59f2e.js";import{_ as O}from"./ReadDocHelp.faafaa35.js";import{_ as S}from"./Select.f675cc46.js";import{_ as I}from"./InputHidden.3ebb63fe.js";import"./Admin.7fa4ba78.js";import"./PureButton.7cf07808.js";import"./Eye.bdca2e42.js";const N={class:"flex items-center"},P={class:"mr-xs"},A=s("span",null,"Facebook",-1),B={href:"https://developers.facebook.com/apps",class:"link",target:"_blank"},U=s("label",{for:"id"},"App ID",-1),C=s("label",{for:"secret"},"App secret",-1),D=s("label",{for:"version"},"API Version",-1),j=s("option",{value:"v19.0"},"v19.0",-1),q=s("option",{value:"v18.0"},"v18.0",-1),E=s("option",{value:"v17.0"},"v17.0",-1),H=s("option",{value:"v16.0"},"v16.0",-1),Z={__name:"FacebookServiceForm",props:{form:{required:!0,type:Object}},setup(a){const p=a,{t:i}=g(),{notify:d}=x(),t=k({}),v=()=>{t.value={},$.put(route("mixpost.services.update",{service:"facebook"}),p.form,{preserveScroll:!0,onSuccess(){d("success",i("service.service_saved",{service:"Facebook"}))},onError:n=>{t.value=n}})};return(n,r)=>(b(),h(w,{class:"mt-lg"},{title:e(()=>[s("div",N,[s("span",P,[o(F,{class:"text-facebook"})]),A])]),description:e(()=>[s("p",null,[s("a",B,f(_(i)("service.create_app",{name:"Facebook"})),1),u(". ")]),o(O,{href:`${n.$page.props.mixpost.docs_link}/books/integration-of-social-platforms/page/facebook`,class:"mt-xs"},null,8,["href"])]),default:e(()=>[o(c,{class:"mt-lg"},{title:e(()=>[U]),footer:e(()=>[o(m,{message:t.value.client_id},null,8,["message"])]),default:e(()=>[o(y,{modelValue:a.form.client_id,"onUpdate:modelValue":r[0]||(r[0]=l=>a.form.client_id=l),error:t.value.hasOwnProperty("client_id"),type:"text",id:"id",autocomplete:"off"},null,8,["modelValue","error"])]),_:1}),o(c,{class:"mt-lg"},{title:e(()=>[C]),footer:e(()=>[o(m,{message:t.value.client_secret},null,8,["message"])]),default:e(()=>[o(I,{modelValue:a.form.client_secret,"onUpdate:modelValue":r[1]||(r[1]=l=>a.form.client_secret=l),error:t.value.hasOwnProperty("client_secret"),id:"secret",autocomplete:"new-password"},null,8,["modelValue","error"])]),_:1}),o(c,{class:"mt-lg"},{title:e(()=>[D]),footer:e(()=>[o(m,{message:t.value.api_version},null,8,["message"])]),default:e(()=>[o(S,{modelValue:a.form.api_version,"onUpdate:modelValue":r[2]||(r[2]=l=>a.form.api_version=l),error:t.value.hasOwnProperty("api_version"),id:"version"},{default:e(()=>[j,q,E,H]),_:1},8,["modelValue","error"])]),_:1}),o(V,{onClick:v,class:"mt-lg"},{default:e(()=>[u(f(_(i)("general.save")),1)]),_:1})]),_:1}))}};export{Z as default};