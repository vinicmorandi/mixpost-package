import{S as g,H as h,o as x,k as V,w as e,e as s,a as t,t as d,b as u,h as f,_ as $,ac as P,J as b}from"./app.a05b4c5c.js";import{_ as k}from"./Panel.05e9bba5.js";import{_ as y}from"./Input.44809a08.js";import{P as w}from"./ProviderIcon.9a25a410.js";import{_ as m}from"./HorizontalGroup.97d4c34e.js";import{_ as c}from"./Error.4aa59f2e.js";import{_ as S}from"./ReadDocHelp.faafaa35.js";import{_ as O}from"./Select.f675cc46.js";import{_ as N}from"./InputHidden.3ebb63fe.js";import"./Admin.7fa4ba78.js";import"./PureButton.7cf07808.js";import"./Eye.bdca2e42.js";const B={class:"flex items-center"},I={class:"mr-xs"},U=s("span",null,"Pinterest",-1),A={href:"https://developers.pinterest.com/apps/",class:"link",target:"_blank"},C=s("label",{for:"id"},"App ID",-1),D=s("label",{for:"secret"},"App secret key",-1),E=s("label",{for:"env"},"Environment",-1),j=s("option",{value:"sandbox"},"Sandbox",-1),q=s("option",{value:"production"},"Production",-1),X={__name:"PinterestServiceForm",props:{form:{required:!0,type:Object}},setup(r){const p=r,{t:l}=g(),{notify:_}=b(),o=h({}),v=()=>{o.value={},P.put(route("mixpost.services.update",{service:"pinterest"}),p.form,{preserveScroll:!0,onSuccess(){_("success",l("service.service_saved",{service:"Pinterest"}))},onError:i=>{o.value=i}})};return(i,a)=>(x(),V(k,{class:"mt-lg"},{title:e(()=>[s("div",B,[s("span",I,[t(w,{class:"text-pinterest"})]),U])]),description:e(()=>[s("p",null,[s("a",A,d(u(l)("service.create_app",{name:"Pinterest"})),1),f(". ")]),t(S,{href:`${i.$page.props.mixpost.docs_link}/books/integration-of-social-platforms/page/pinterest`,class:"mt-xs"},null,8,["href"])]),default:e(()=>[t(m,{class:"mt-lg"},{title:e(()=>[C]),footer:e(()=>[t(c,{message:o.value.client_id},null,8,["message"])]),default:e(()=>[t(y,{modelValue:r.form.client_id,"onUpdate:modelValue":a[0]||(a[0]=n=>r.form.client_id=n),error:o.value.hasOwnProperty("client_id"),type:"text",id:"id",autocomplete:"off"},null,8,["modelValue","error"])]),_:1}),t(m,{class:"mt-lg"},{title:e(()=>[D]),footer:e(()=>[t(c,{message:o.value.client_secret},null,8,["message"])]),default:e(()=>[t(N,{modelValue:r.form.client_secret,"onUpdate:modelValue":a[1]||(a[1]=n=>r.form.client_secret=n),error:o.value.hasOwnProperty("client_secret"),id:"secret",autocomplete:"new-password"},null,8,["modelValue","error"])]),_:1}),t(m,{class:"mt-lg"},{title:e(()=>[E]),footer:e(()=>[t(c,{message:o.value.environment},null,8,["message"])]),default:e(()=>[t(O,{modelValue:r.form.environment,"onUpdate:modelValue":a[2]||(a[2]=n=>r.form.environment=n),error:o.value.hasOwnProperty("environment"),id:"env"},{default:e(()=>[j,q]),_:1},8,["modelValue","error"])]),_:1}),t($,{onClick:v,class:"mt-lg"},{default:e(()=>[f(d(u(l)("general.save")),1)]),_:1})]),_:1}))}};export{X as default};