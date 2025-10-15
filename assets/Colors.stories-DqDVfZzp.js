import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{c as s,w as a}from"./index-HepRbxE_.js";import{d as n}from"./styled-components.browser.esm-Gt7jvSHp.js";import"./iframe-DDu2k7aD.js";import"./preload-helper-PPVm8Dsz.js";const l=e=>typeof e!="string"||e.length===0?e:e.charAt(0).toUpperCase()+e.slice(1),m=n.p`
  width: 100%;
  margin-left: 1rem;
  margin-top: 1.6rem;
  font-weight: 600;
  margin-bottom: 0;
`,d=n.div`
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
`,f=e=>+e.substring(1)>500?a:s.black.m900,g=e=>t=>r.jsx(p,{clr:s[e][t],children:r.jsx(u,{clr:f(t),children:t})},`${e}_${t}`),x=(e,t)=>Object.keys(s[e]).length>11&&Object.keys(s[t]).length<11?1:-1,i=()=>{const e=Object.keys(s).filter(t=>t!=="white");return r.jsx(r.Fragment,{children:e.sort(x).map(t=>{const c=s[t];return r.jsxs(d,{children:[r.jsx(m,{children:l(t)}),r.jsx(h,{children:Object.keys(c).map(g(t))})]},t)})})},w={title:"Colors",component:i,parameters:{docs:{description:{component:"Collection of colors and shades commonly used accross websites & dashboards."}},controls:{disable:!0},actions:{disable:!0}}},o=()=>r.jsx(i,{});o.storyName="All Colors";o.__docgenInfo={description:"",methods:[],displayName:"Default"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <Colors />;
}`,...o.parameters?.docs?.source}}};const _=["Default"];export{o as Default,_ as __namedExportsOrder,w as default};
