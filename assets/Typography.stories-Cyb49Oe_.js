import{j as r}from"./jsx-runtime-u17CrQMm.js";import{P as d}from"./P-Cotfyx-C.js";import{r as s}from"./red-V1BWnntO.js";import{d as n}from"./styled-components.browser.esm-DOqSrTHP.js";import{H}from"./H4-CmLaxh3x.js";import{H as l}from"./H6-fs-TtBlZ.js";const h=n.h1`
  color: ${({$color:o})=>o};
  font-size: 3.6rem;
`,t=({color:o,children:e})=>r.jsx(h,{$color:o,children:e});t.__docgenInfo={description:"",methods:[],displayName:"H1"};const g=n.h2`
  color: ${({$color:o})=>o};
  font-size: 3rem;
`,a=({color:o,children:e})=>r.jsx(g,{$color:o,children:e});a.__docgenInfo={description:"",methods:[],displayName:"H2"};const u=n.h3`
  color: ${({$color:o})=>o};
  font-size: 2.4rem;
`,c=({color:o,children:e})=>r.jsx(u,{$color:o,children:e});c.__docgenInfo={description:"",methods:[],displayName:"H3"};const y=n.h5`
  color: ${({$color:o})=>o};
  font-size: 1.4rem;
`,p=({color:o,children:e})=>r.jsx(y,{$color:o,children:e});p.__docgenInfo={description:"",methods:[],displayName:"H5"};const m=()=>r.jsxs(r.Fragment,{children:[r.jsx(t,{color:s.m600,children:"This is Heading H1"}),r.jsx(a,{color:s.m600,children:"This is Heading H2"}),r.jsx(c,{color:s.m600,children:"This is Heading H3"}),r.jsx(H,{color:s.m600,children:"This is Heading H4"}),r.jsx(p,{color:s.m600,children:"This is Heading H5"}),r.jsx(l,{color:s.m600,children:"This is Heading H6"}),r.jsx(d,{color:s.m600,size:"0.8rem",children:"This is Paragraph P"})]}),T={title:"Atomic Components/Typography",component:m,parameters:{docs:{description:{component:"Typography input."},source:{language:"jsx",code:`
          import { H1, H2, H3, H4, H5, H6 } from 'meticulous-ui/components/Typography/Headings';
          import P from 'meticulous-ui/components/Typography/P';
          import red from 'meticulous-ui/colors/red';

          const TypographyWrapper = () => {
            return (
              <>
                <H1 color={red.m600}>This is Heading H1</H1>
                <H2 color={red.m600}>This is Heading H2</H2>
                <H3 color={red.m600}>This is Heading H3</H3>
                <H4 color={red.m600}>This is Heading H4</H4>
                <H5 color={red.m600}>This is Heading H5</H5>
                <H6 color={red.m600}>This is Heading H6</H6>
                <P color={red.m600} size='0.8rem'>This is Paragraph P</P>
              </>
            );
          };
        `}},controls:{disable:!0},actions:{disable:!0}}},i=()=>r.jsx(m,{});i.storyName="Typography";i.__docgenInfo={description:"",methods:[],displayName:"Default"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <TypographyWrapper />;
}`,...i.parameters?.docs?.source}}};const f=["Default"],W=Object.freeze(Object.defineProperty({__proto__:null,Default:i,__namedExportsOrder:f,default:T},Symbol.toStringTag,{value:"Module"}));export{i as D,W as T};
