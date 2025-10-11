import{j as r}from"./jsx-runtime-C5NswdkA.js";import{c as s,d as n,w as a}from"./styled-components.browser.esm-D7KSYXyz.js";import"./iframe-CGrzFI6U.js";import"./preload-helper-PPVm8Dsz.js";const l=e=>typeof e!="string"||e.length===0?e:e.charAt(0).toUpperCase()+e.slice(1),m=n.p`
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
`,h=n.div`
  position: absolute;
  bottom: 0.4rem;
  left: 0;
  text-align: center;
  width: 100%;
  color: ${({clr:e})=>e};
`,u=n.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`,g=e=>+e.substring(1)>500?a:s.black.m900,f=e=>t=>r.jsx(p,{clr:s[e][t],children:r.jsx(h,{clr:g(t),children:t})},`${e}_${t}`),x=(e,t)=>Object.keys(s[e]).length>11&&Object.keys(s[t]).length<11?1:-1,c=()=>{const e=Object.keys(s).filter(t=>t!=="white");return r.jsx(r.Fragment,{children:e.sort(x).map(t=>{const i=s[t];return r.jsxs(d,{children:[r.jsx(m,{children:l(t)}),r.jsx(u,{children:Object.keys(i).map(f(t))})]},t)})})},C={title:"Tokens/Colors",component:c,parameters:{docs:{description:{component:"Collection of colors and shades commonly used accross websites & dashboards."}}}},o=()=>r.jsx(c,{});o.storyName="All Colors";o.__docgenInfo={description:"",methods:[],displayName:"Default"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <Colors />;
}`,...o.parameters?.docs?.source}}};const w=["Default"];export{o as Default,w as __namedExportsOrder,C as default};
