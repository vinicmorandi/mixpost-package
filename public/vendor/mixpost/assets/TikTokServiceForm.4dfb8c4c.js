import{S as k,H as h,o as g,k as y,w as e,e as o,a as t,t as _,b as f,h as d,_ as V,ac as $,J as x}from"./app.a05b4c5c.js";import{_ as T}from"./Panel.05e9bba5.js";import{_ as b}from"./Input.44809a08.js";import{_ as m}from"./HorizontalGroup.97d4c34e.js";import{_ as c}from"./Error.4aa59f2e.js";import{_ as w}from"./ReadDocHelp.faafaa35.js";import{_ as S}from"./ProviderIcon.9a25a410.js";import{_ as O}from"./Select.f675cc46.js";import{_ as C}from"./InputHidden.3ebb63fe.js";import"./Admin.7fa4ba78.js";import"./PureButton.7cf07808.js";import"./Eye.bdca2e42.js";const N={class:"flex items-center"},P={class:"mr-xs"},B=o("span",null,"TikTok",-1),U={href:"https://developers.tiktok.com/apps/",class:"link",target:"_blank"},D=o("label",{for:"id"},"Client Key",-1),I=o("label",{for:"secret"},"Client secret",-1),j=o("label",{for:"type"},"Share Type",-1),q=o("option",{value:"inbox"},"Inbox",-1),E=o("option",{value:"direct"},"Direct Post",-1),X={__name:"TikTokServiceForm",props:{form:{required:!0,type:Object}},setup(r){const u=r,{t:i}=k(),{notify:p}=x(),s=h({}),v=()=>{s.value={},$.put(route("mixpost.services.update",{service:"tiktok"}),u.form,{preserveScroll:!0,onSuccess(){p("success",i("service.service_saved",{service:"TikTok"}))},onError:n=>{s.value=n}})};return(n,a)=>(g(),y(T,null,{title:e(()=>[o("div",N,[o("span",P,[t(S,{provider:"tiktok"})]),B])]),description:e(()=>[o("a",U,_(f(i)("service.create_app",{name:"TikTok"})),1),d(". "),t(w,{href:`${n.$page.props.mixpost.docs_link}/books/integration-of-social-platforms/page/tiktok`,class:"mt-xs"},null,8,["href"])]),default:e(()=>[t(m,{class:"mt-lg"},{title:e(()=>[D]),footer:e(()=>[t(c,{message:s.value.client_id},null,8,["message"])]),default:e(()=>[t(b,{modelValue:r.form.client_id,"onUpdate:modelValue":a[0]||(a[0]=l=>r.form.client_id=l),error:s.value.hasOwnProperty("client_id"),type:"text",autocomplete:"off",id:"id"},null,8,["modelValue","error"])]),_:1}),t(m,{class:"mt-lg"},{title:e(()=>[I]),footer:e(()=>[t(c,{message:s.value.client_secret},null,8,["message"])]),default:e(()=>[t(C,{modelValue:r.form.client_secret,"onUpdate:modelValue":a[1]||(a[1]=l=>r.form.client_secret=l),error:s.value.hasOwnProperty("client_secret"),id:"secret",autocomplete:"new-password"},null,8,["modelValue","error"])]),_:1}),t(m,{class:"mt-lg"},{title:e(()=>[j]),footer:e(()=>[t(c,{message:s.value.environment},null,8,["message"])]),default:e(()=>[t(O,{modelValue:r.form.share_type,"onUpdate:modelValue":a[2]||(a[2]=l=>r.form.share_type=l),error:s.value.hasOwnProperty("share_type"),id:"type"},{default:e(()=>[q,E]),_:1},8,["modelValue","error"])]),_:1}),t(V,{onClick:v,class:"mt-lg"},{default:e(()=>[d(_(f(i)("general.save")),1)]),_:1})]),_:1}))}};export{X as default};