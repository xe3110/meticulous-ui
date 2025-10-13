import{j as r}from"./jsx-runtime-CIaVrY6A.js";import{c as o,d as n,w as a}from"./styled-components.browser.esm-CUppNz-9.js";import"./iframe-Bjw8jqSh.js";import"./preload-helper-PPVm8Dsz.js";const l=e=>typeof e!="string"||e.length===0?e:e.charAt(0).toUpperCase()+e.slice(1),d=n.p`
  width: 100%;
  margin-left: 1rem;
  margin-top: 1.6rem;
  font-weight: 600;
  margin-bottom: 0;
`,m=n.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,p=n.div`
  position: relative;
  width: 6rem;
  height: 6rem;
  background-color: ${({clr:e})=>e};
`,u=n.div`
  position: absolute;
  bottom: 0.4rem;
  left: 0;
  text-align: center;
  width: 100%;
  color: ${({clr:e})=>e};
`,h=n.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`,g=e=>+e.substring(1)>500?a:o.black.m900,f=e=>t=>r.jsx(p,{clr:o[e][t],children:r.jsx(u,{clr:g(t),children:t})},`${e}_${t}`),x=(e,t)=>Object.keys(o[e]).length>11&&Object.keys(o[t]).length<11?1:-1,i=()=>{const e=Object.keys(o).filter(t=>t!=="white");return r.jsx(r.Fragment,{children:e.sort(x).map(t=>{const c=o[t];return r.jsxs(m,{children:[r.jsx(d,{children:l(t)}),r.jsx(h,{children:Object.keys(c).map(f(t))})]},t)})})},k={title:"Colors",component:i,parameters:{docs:{description:{component:"Collection of colors and shades commonly used accross websites & dashboards."}},controls:{disable:!0},actions:{disable:!0}}},s=()=>r.jsx(i,{});s.storyName="All Colors";s.__docgenInfo={description:"",methods:[],displayName:"Default"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <Colors />;
}`,...s.parameters?.docs?.source}}};const w=["Default"];export{s as Default,w as __namedExportsOrder,k as default};
