import{n,ac as s,N as r}from"./app.a05b4c5c.js";import{u as m}from"./usePostVersions.2acb12a0.js";const x=()=>{const t=n("workspaceCtx"),{versionObject:a}=m();return{createPost:e=>{s.post(route("mixpost.posts.store",{workspace:t.id}),{versions:[{...a(0,!0),content:e}]})},formatTemplateContent:e=>e.map(o=>({body:o.body,media:o.media.map(p=>p.id)})),deleteTemplate:e=>{r.start(),axios.delete(route("mixpost.templates.api.delete",{workspace:t.id,template:e.id})).then(()=>{s.get(route("mixpost.templates.index",{workspace:t.id}),{},{preserveScroll:!0})}).finally(()=>{r.done()})}}};export{x as u};