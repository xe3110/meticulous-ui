import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{c as s,w as c}from"./index-BeaGPHUe.js";import{d as n}from"./styled-components.browser.esm-DgW84kJJ.js";const a=e=>typeof e!="string"||e.length===0?e:e.charAt(0).toUpperCase()+e.slice(1),m=n.p`
  width: 100%;
  margin-left: 1rem;
  margin-top: 1.6rem;
  font-weight: 600;
  margin-bottom: 0;
`,d=n.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,u=n.div`
  position: relative;
  width: 6rem;
  height: 6rem;
  background-color: ${({clr:e})=>e};
`,p=n.div`
  position: absolute;
  bottom: 0.4rem;
  left: 0;
  text-align: center;
  width: 100%;
  color: ${({clr:e})=>e};
`,f=n.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`,g=e=>+e.substring(1)>500?c:s.black.m900,h=e=>r=>o.jsx(u,{clr:s[e][r],children:o.jsx(p,{clr:g(r),children:r})},`${e}_${r}`),b=(e,r)=>Object.keys(s[e]).length>11&&Object.keys(s[r]).length<11?1:-1,i=()=>{const e=Object.keys(s).filter(r=>r!=="white");return o.jsx(o.Fragment,{children:e.sort(b).map(r=>{const l=s[r];return o.jsxs(d,{children:[o.jsx(m,{children:a(r)}),o.jsx(f,{children:Object.keys(l).map(h(r))})]},r)})})},j={title:"Colors",component:i,parameters:{docs:{description:{component:"Collection of colors and shades commonly used accross websites & dashboards."}},controls:{disable:!0},actions:{disable:!0}}},t=()=>o.jsx(i,{});t.storyName="All Colors";t.__docgenInfo={description:"",methods:[],displayName:"Default"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  // import Add from 'meticulous-ui/components/Icons/Add';

  // import red from 'meticulous-ui/colors/red';
  // return <Add color={red.m500} size={20} />

  // import blue from 'meticulous-ui/colors/blue';
  // return <Add color={blue.m500} size={20} />

  // import green from 'meticulous-ui/colors/green';
  // return <Add color={green.m500} size={20} />

  return <AllColors />;
}`,...t.parameters?.docs?.source}}};const x=["Default"],_=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:x,default:j},Symbol.toStringTag,{value:"Module"}));export{_ as C};
