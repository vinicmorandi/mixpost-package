import{n as v,o as r,k as i,w as a,e,a as o,t as c,b as s,q as b,ag as E,W as H,h as d,ae as O,f as _,c as C,p as U,H as I,_ as B,E as W,J as N,ac as V,V as J,A as K,S as X,T as Z,O as Q,a6 as ee,F as j,a2 as se,a3 as te,cd as oe,ce as ae,Z as ne,j as re,a7 as T,ab as ce,a8 as ie,i as D,m as le,l as ue,aE as de,r as pe}from"./app.a05b4c5c.js";import{_ as _e}from"./PageHeader.044c6731.js";import{_ as fe}from"./Panel.05e9bba5.js";import{_ as me}from"./Account.894edbec.js";import{T as he,F as R,M as ve,I as xe,Y as ge,P as ke,_ as L}from"./ProviderIcon.9a25a410.js";import{_ as q}from"./Input.44809a08.js";import{_ as be}from"./HorizontalGroup.97d4c34e.js";import{E as $e}from"./EllipsisVertical.0bda3946.js";import{R as we}from"./Refresh.62a08e2e.js";import{T as ye}from"./Trash.83ab4124.js";import{_ as Ce}from"./PureButton.7cf07808.js";import{_ as Ae}from"./AlertUnconfiguredService.c8d9e77a.js";import"./Flex.513e8e8d.js";import"./ExclamationCircle.df2493b4.js";import"./Alert.49de0ead.js";const Ie={class:"flex mr-4"},Se={class:"flex flex-col items-start"},Pe=e("span",{class:"font-semibold"},"X",-1),Fe={__name:"AddTwitterAccount",setup(f){const t=v("workspaceCtx");return(n,l)=>(r(),i(s(b),{href:n.route("mixpost.accounts.add",{workspace:s(t).id,provider:"twitter"}),method:"post",as:"button",type:"button",class:"w-full flex items-center px-lg py-4 hover:bg-twitter hover:bg-opacity-20 ease-in-out duration-200"},{default:a(()=>[e("span",Ie,[o(he,{class:"text-twitter"})]),e("span",Se,[Pe,e("span",null,c(n.$t("service.twitter.connect_profile")),1)])]),_:1},8,["href"]))}},Te={class:"flex mr-4"},Ve={class:"flex flex-col items-start"},Le=e("span",{class:"font-semibold"},"Facebook Page",-1),Me={__name:"AddFacebookPage",setup(f){const t=v("workspaceCtx");return(n,l)=>(r(),i(s(b),{href:n.route("mixpost.accounts.add",{workspace:s(t).id,provider:"facebook_page"}),method:"post",as:"button",type:"button",class:"w-full flex items-center px-lg py-4 hover:bg-facebook hover:bg-opacity-20 ease-in-out duration-200"},{default:a(()=>[e("span",Te,[o(R,{class:"text-facebook"})]),e("span",Ve,[Le,e("span",null,c(n.$t("service.facebook.connect_page")),1)])]),_:1},8,["href"]))}},je={class:"flex mr-4"},De={class:"flex flex-col items-start"},Ee={class:"font-semibold"},Be={key:0,class:"text-xs text-red-500 text-left"},Ne={__name:"AddFacebookGroup",setup(f){const t=v("workspaceCtx"),n=E().props.additionally.meta_app_version,{user:l}=H();return(m,x)=>s(l).is_admin===!1&&s(n)==="v19.0"?_("",!0):(r(),i(s(b),{key:0,href:m.route("mixpost.accounts.add",{workspace:s(t).id,provider:"facebook_group"}),method:"post",as:"button",type:"button",class:"w-full flex items-center px-lg py-4 hover:bg-facebook hover:bg-opacity-20 ease-in-out duration-200"},{default:a(()=>[e("span",je,[o(R,{class:"text-facebook"})]),e("span",De,[e("span",Ee,[d("Facebook Group "),s(n)==="v19.0"?(r(),i(O,{key:0,variant:"error"},{default:a(()=>[d("Deprecated in v19")]),_:1})):_("",!0)]),e("span",null,c(m.$t("service.facebook.connect_group")),1),s(n)==="v19.0"?(r(),C("span",Be,"The Facebook Groups API is deprecated in v19. In the facebook documentation it is missing for the new API changes. We are looking for a quick solution and will come with an update.")):_("",!0)])]),_:1},8,["href"]))}},Re={},qe={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},ze=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"},null,-1),Ge=[ze];function Ye(f,t){return r(),C("svg",qe,Ge)}const He=U(Re,[["render",Ye]]),Oe={class:"flex mr-md"},Ue={class:"flex flex-col items-start"},We=e("span",{class:"font-semibold"},"Mastodon",-1),Je={key:0,class:"px-lg py-md"},Ke={class:"mr-xs"},Xe={__name:"AddMastodonAccount",setup(f){const t=v("workspaceCtx"),{notify:n}=N(),l=I(!1),m=I(""),x=I(!1),A=()=>new Promise((h,g)=>{axios.post(route("mixpost.services.createMastodonApp"),{server:m.value}).then(()=>{h()}).catch(function(w){g(w)})}),$=()=>{l.value=!0,V.post(route("mixpost.accounts.add",{workspace:t.id,provider:"mastodon"}),{server:m.value},{onSuccess(){l.value=!1}})},S=async()=>{l.value=!0,await A().then(()=>{$()}).catch(h=>{if(h.response.status!==422){n("error",h.response.data.message);return}n("error",h.response.data.errors)}).finally(()=>{l.value=!1})};return(h,g)=>(r(),C("div",{class:W({"bg-mastodon bg-opacity-20":x.value})},[e("div",{role:"button",onClick:g[0]||(g[0]=w=>x.value=!x.value),type:"button",class:"w-full flex items-center px-lg py-md hover:bg-mastodon hover:bg-opacity-20 ease-in-out duration-200"},[e("span",Oe,[o(ve,{class:"text-mastodon"})]),e("span",Ue,[We,e("span",null,c(h.$t("service.mastodon.connect_profile")),1)])]),x.value?(r(),C("div",Je,[o(be,null,{title:a(()=>[d(c(h.$t("service.mastodon.enter_server")),1)]),default:a(()=>[o(q,{type:"text",modelValue:m.value,"onUpdate:modelValue":g[1]||(g[1]=w=>m.value=w),placeholder:"example.server"},null,8,["modelValue"])]),_:1}),o(B,{onClick:S,disabled:!m.value||l.value,isLoading:l.value,class:"mt-xs md:mt-0"},{default:a(()=>[e("span",Ke,c(h.$t("general.next")),1),e("span",null,[o(He,{class:"!w-5 !h-5"})])]),_:1},8,["disabled","isLoading"])])):_("",!0)],2))}},Ze={class:"flex mr-4"},Qe={class:"flex flex-col items-start"},es=e("span",{class:"font-semibold"},"Instagram",-1),ss={__name:"AddInstagramAccount",setup(f){const t=v("workspaceCtx");return(n,l)=>(r(),i(s(b),{href:n.route("mixpost.accounts.add",{workspace:s(t).id,provider:"instagram"}),method:"post",as:"button",type:"button",class:"w-full flex items-center px-lg py-4 hover:bg-twitter hover:bg-opacity-20 ease-in-out duration-200"},{default:a(()=>[e("span",Ze,[o(xe,{class:"text-instagram"})]),e("span",Qe,[es,e("span",null,c(n.$t("service.instagram.connect_account")),1)])]),_:1},8,["href"]))}},ts={class:"flex mr-sm"},os={class:"flex flex-col items-start"},as=e("span",{class:"font-semibold"},"YouTube",-1),ns={__name:"AddYoutubeAccount",setup(f){const t=v("workspaceCtx");return(n,l)=>(r(),i(s(b),{href:n.route("mixpost.accounts.add",{workspace:s(t).id,provider:"youtube"}),method:"post",as:"button",type:"button",class:"w-full flex items-center px-lg py-4 hover:bg-twitter hover:bg-opacity-20 ease-in-out duration-200"},{default:a(()=>[e("span",ts,[o(ge,{class:"text-youtube"})]),e("span",os,[as,e("span",null,c(n.$t("service.youtube.connect_profile")),1)])]),_:1},8,["href"]))}},rs={class:"flex mr-4"},cs={class:"flex flex-col items-start"},is=e("span",{class:"font-semibold"},"Pinterest",-1),ls={__name:"AddPinterestAccount",setup(f){const t=v("workspaceCtx");return(n,l)=>(r(),i(s(b),{href:n.route("mixpost.accounts.add",{workspace:s(t).id,provider:"pinterest"}),method:"post",as:"button",type:"button",class:"w-full flex items-center px-lg py-4 hover:bg-twitter hover:bg-opacity-20 ease-in-out duration-200"},{default:a(()=>[e("span",rs,[o(ke,{class:"text-pinterest"})]),e("span",cs,[is,e("span",null,c(n.$t("service.pinterest.connect_profile")),1)])]),_:1},8,["href"]))}},us={class:"flex mr-4"},ds={class:"flex flex-col items-start"},ps=e("span",{class:"font-semibold"},"LinkedIn Profile",-1),_s={__name:"AddLinkedinProfile",setup(f){const t=v("workspaceCtx");return(n,l)=>(r(),i(s(b),{href:n.route("mixpost.accounts.add",{workspace:s(t).id,provider:"linkedin"}),method:"post",as:"button",type:"button",class:"w-full flex items-center px-lg py-4 hover:bg-twitter hover:bg-opacity-20 ease-in-out duration-200"},{default:a(()=>[e("span",us,[o(L,{provider:"linkedin"})]),e("span",ds,[ps,e("span",null,c(n.$t("service.linkedin.connect_profile")),1)])]),_:1},8,["href"]))}},fs={class:"flex mr-4"},ms={class:"flex flex-col items-start"},hs=e("span",{class:"font-semibold"},"LinkedIn Page",-1),vs={__name:"AddLinkedinPage",setup(f){const t=v("workspaceCtx");return(n,l)=>(r(),i(s(b),{href:n.route("mixpost.accounts.add",{workspace:s(t).id,provider:"linkedin_page"}),method:"post",as:"button",type:"button",class:"w-full flex items-center px-lg py-4 hover:bg-twitter hover:bg-opacity-20 ease-in-out duration-200"},{default:a(()=>[e("span",fs,[o(L,{provider:"linkedin"})]),e("span",ms,[hs,e("span",null,c(n.$t("service.linkedin.connect_page")),1)])]),_:1},8,["href"]))}},xs={class:"flex mr-4"},gs={class:"flex flex-col items-start"},ks=e("span",{class:"font-semibold"},"TikTok",-1),bs={__name:"AddTikTokAccount",setup(f){const t=v("workspaceCtx");return(n,l)=>(r(),i(s(b),{href:n.route("mixpost.accounts.add",{workspace:s(t).id,provider:"tiktok"}),method:"post",as:"button",type:"button",class:"w-full flex items-center px-lg py-4 hover:bg-twitter hover:bg-opacity-20 ease-in-out duration-200"},{default:a(()=>[e("span",xs,[o(L,{provider:"tiktok"})]),e("span",gs,[ks,e("span",null,c(n.$t("service.tiktok.connect_profile")),1)])]),_:1},8,["href"]))}},$s={class:"flex items-center justify-center h-full border border-primary-800 rounded-lg hover:border-primary-500 hover:text-primary-500 transition-colors ease-in-out duration-200"},ws={class:"p-lg"},ys={class:"flex flex-col justify-center items-center"},Cs={class:"mt-xs text-lg"},As={__name:"GridAddElement",setup(f){return(t,n)=>(r(),C("span",$s,[e("span",ws,[e("span",ys,[o(J,{class:"w-7 h-7"}),e("span",Cs,[K(t.$slots,"default")])])])]))}},Is={class:"w-full max-w-6xl mx-auto row-py"},Ss={class:"mt-lg row-px w-full"},Ps={class:"w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"},Fs={class:"flex flex-col justify-center relative"},Ts={key:0,class:"absolute top-0 left-0"},Vs={class:"w-md h-md bg-red-500 rounded-full"},Ls={class:"mt-sm font-semibold text-center break-words"},Ms={class:"mt-1 text-center text-stone-800"},js={class:"absolute top-0 right-0 mt-sm mr-sm"},Ds={class:"mt-xs"},Es={class:"flex flex-col"},Qs={__name:"Accounts",setup(f){const{t}=X(),n=v("workspaceCtx"),l=t("account.accounts"),{notify:m}=N(),x=I(!1),A=I(null),$=I(!1),S=u=>{V.put(route("mixpost.accounts.update",{workspace:n.id,account:u}),{},{preserveScroll:!0,onSuccess(y){y.props.flash.error||m("success",t("account.account_updated"))}})},h=()=>{V.delete(route("mixpost.accounts.delete",{workspace:n.id,account:A.value}),{preserveScroll:!0,onStart(){$.value=!0},onSuccess(){A.value=null,m("success",t("account.account_deleted"))},onFinish(){$.value=!1}})},g=()=>{$.value||(A.value=null)},w=I(!1),k=Z({uuid:null,name:""}),z=u=>{w.value=!0,k.uuid=u.uuid,k.name=u.suffix},P=()=>{w.value=null,k.reset()},G=()=>{k.put(route("mixpost.accounts.updateSuffix",{workspace:n.id,account:k.uuid}),{onSuccess(){P()}})},F=Q(()=>E().props.errors);return ee(()=>F.value,()=>{ue.exports.isEmpty(F.value)||m("error",de(F.value))}),(u,y)=>{const Y=pe("tooltip");return r(),C(j,null,[o(s(ne),{title:s(l)},null,8,["title"]),e("div",Is,[o(_e,{title:s(l)},{description:a(()=>[d(" Bananinnha ")]),_:1},8,["title"]),e("div",Ss,[o(Ae,{isConfigured:u.$page.props.is_configured_service},null,8,["isConfigured"]),e("div",Ps,[e("button",{onClick:y[0]||(y[0]=p=>x.value=!0)},[o(As,null,{default:a(()=>[d(c(s(t)("account.add_account")),1)]),_:1})]),(r(!0),C(j,null,se(u.$page.props.accounts,p=>(r(),i(fe,{key:p.id,class:"relative"},{default:a(()=>[e("div",Fs,[o(me,{size:"lg","img-url":p.image,provider:p.provider,name:p.name,active:!0},null,8,["img-url","provider","name"]),p.authorized?_("",!0):(r(),C("div",Ts,[re(e("div",Vs,null,512),[[Y,s(t)("account.unauthorized")]])])),e("div",Ls,c(p.name),1),e("div",Ms,c(s(t)("account.added"))+" "+c(p.created_at),1)]),e("div",js,[o(ie,{"width-classes":"w-42"},{trigger:a(()=>[o(Ce,null,{default:a(()=>[o($e)]),_:1})]),content:a(()=>[o(T,{onClick:M=>S(p.uuid),as:"button"},{icon:a(()=>[o(we)]),default:a(()=>[d(" "+c(s(t)("general.update")),1)]),_:2},1032,["onClick"]),o(T,{onClick:M=>z(p),as:"button"},{icon:a(()=>[o(ce)]),default:a(()=>[d(" "+c(s(t)("account.edit_suffix")),1)]),_:2},1032,["onClick"]),o(T,{onClick:M=>A.value=p.uuid,as:"button"},{icon:a(()=>[o(ye,{class:"text-red-500"})]),default:a(()=>[d(" "+c(s(t)("general.delete")),1)]),_:2},1032,["onClick"])]),_:2},1024)])]),_:2},1024))),128))])])]),o(te,{show:w.value,"max-width":"sm",closeable:!0,"scrollable-body":!0,onClose:P},{header:a(()=>[d(c(s(t)("account.edit_account_suffix")),1)]),body:a(()=>[e("div",Ds,[o(q,{type:"text",modelValue:s(k).name,"onUpdate:modelValue":y[1]||(y[1]=p=>s(k).name=p),placeholder:s(t)("account.enter_suffix")},null,8,["modelValue","placeholder"])])]),footer:a(()=>[o(D,{onClick:P,class:"mr-xs"},{default:a(()=>[d(c(s(t)("general.close")),1)]),_:1}),o(B,{onClick:G,isLoading:s(k).processing,disabled:s(k).processing},{default:a(()=>[d(c(s(t)("general.save")),1)]),_:1},8,["isLoading","disabled"])]),_:1},8,["show"]),o(oe,{show:A.value!==null,onClose:g,variant:"danger"},{header:a(()=>[d(c(s(t)("account.delete_account")),1)]),body:a(()=>[d(c(s(t)("account.confirm_delete_account")),1)]),footer:a(()=>[o(D,{onClick:g,disabled:$.value,class:"mr-xs"},{default:a(()=>[d(c(s(t)("general.cancel")),1)]),_:1},8,["disabled"]),o(le,{onClick:h,"is-loading":$.value,disabled:$.value},{default:a(()=>[d(c(s(t)("general.delete")),1)]),_:1},8,["is-loading","disabled"])]),_:1},8,["show"]),o(ae,{show:x.value,closeable:!0,onClose:y[2]||(y[2]=p=>x.value=!1)},{default:a(()=>[e("div",Es,[u.$page.props.is_configured_service.facebook?(r(),i(Me,{key:0})):_("",!0),u.$page.props.is_configured_service.facebook?(r(),i(Ne,{key:1})):_("",!0),u.$page.props.is_configured_service.facebook?(r(),i(ss,{key:2})):_("",!0),o(Xe),u.$page.props.is_configured_service.google?(r(),i(ns,{key:3})):_("",!0),u.$page.props.is_configured_service.pinterest?(r(),i(ls,{key:4})):_("",!0),u.$page.props.is_configured_service.linkedin?(r(),i(_s,{key:5})):_("",!0),u.$page.props.is_configured_service.linkedin&&u.$page.props.additionally.linkedin_supports_pages?(r(),i(vs,{key:6})):_("",!0),u.$page.props.is_configured_service.tiktok?(r(),i(bs,{key:7})):_("",!0),u.$page.props.is_configured_service.twitter?(r(),i(Fe,{key:8})):_("",!0)])]),_:1},8,["show"])],64)}}};export{Qs as default};