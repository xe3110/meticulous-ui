import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r as d}from"./iframe-BpIy2Msd.js";import{g as C}from"./get-CcP2FhCm.js";import{g as m}from"./grey-B1SlOap1.js";import{P as f}from"./P-l0kMmFEW.js";import{w as v}from"./white-DEREWbP3.js";import{b as k}from"./orange-DWED-Hr3.js";import{l as y,d as b}from"./styled-components.browser.esm-B1loR-YP.js";import{C as j}from"./Check-BMhGDKD5.js";import{g as D}from"./helpers-CASQHxah.js";const w=b.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  width: max-content;

  ${({$disabled:e})=>e&&y`
      pointer-events: none;
      opacity: 0.7;
    `}
`,S=b(j)`
  width: 1.2rem;
  height: 1.2rem;
  border: 1px solid ${m.m700};
  border-radius: 0.2rem;
  background-color: ${({$value:e,$shade:o})=>e?o:"transparent"};
  transition: background-color 0.35s ease;
`,u=({label:e,value:o,color:r="blue",textColor:n=m.m700,disabled:l,onChange:i})=>{const g=()=>{l||i(!o)},h=D(r);return a.jsxs(w,{onClick:g,$disabled:l,children:[a.jsx("input",{type:"checkbox",checked:o,onChange:x=>i(x.target.checked),disabled:l,style:{position:"absolute",opacity:0,width:0,height:0}}),a.jsx(S,{$value:o,size:8,color:v,$shade:C(h,"m500",k.m500)}),a.jsx(f,{color:n,size:"1.2rem",children:e})]})};u.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{color:{defaultValue:{value:"'blue'",computed:!1},required:!1},textColor:{defaultValue:{value:"'#616161'",computed:!1},required:!1}}};const V={title:"Atomic Components/Checkbox",component:u,parameters:{docs:{description:{component:"Checkbox input."},source:{language:"jsx",code:`
          import Checkbox from 'meticulous-ui/components/Input/Checkbox';

          export const Default = (args) => {
            const [val, setVal] = useState(false);

            const onChange = (val) => {
              setVal(val);
            };

            return <Checkbox value={val} color='blue' textColor={grey.m700} label='Click Please' onChange={onChange} />;
          };
        `}}},argTypes:{color:{control:"select",options:["blue","green","red","yellow","orange","black","grey","violet","teal","purple","pink"]},label:{control:"text"},value:{control:{type:"boolean"}},textColor:{control:"text"}}},t=e=>{const[o,r]=d.useState(!1),n=l=>{r(l),console.log(l)};return a.jsx(u,{label:"Click Please",...e,value:o,onChange:n})},p=({clr:e,params:o={}})=>{const[r,n]=d.useState(!1),l=i=>{n(i)};return a.jsx(u,{color:e,value:r,label:`${e} color`,...o,onChange:l})},s={name:"Multiple Colors",parameters:{controls:{disable:!0},actions:{disable:!0}},render:()=>a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1.2rem"},children:["blue","green","red","yellow","orange","black","grey","violet","teal","purple","pink"].map(e=>a.jsx(p,{clr:e},e))})},c={name:"Disabled",parameters:{controls:{disable:!0},actions:{disable:!0}},render:()=>{const[e,o]=d.useState(!1),r=n=>{o(n)};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.2rem"},children:[a.jsx(p,{params:{value:!1,disabled:!0,label:"Disabled Checkbox without value",onChange:r}},"no"),a.jsx(p,{params:{value:!0,disabled:!0,label:"Disabled Checkbox with value",onChange:r}},"yes")]})}};t.storyName="Checkbox";t.args={value:!1,label:"Click me",color:"blue",textColor:"#616161"};t.__docgenInfo={description:"",methods:[],displayName:"Default"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => {
  const [val, setVal] = useState(false);
  const onChange = val => {
    setVal(val);
    console.log(val);
  };
  return <Checkbox label='Click Please' {...args} value={val} onChange={onChange} />;
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Multiple Colors',
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    }
  },
  render: () => {
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1.2rem'
    }}>
        {['blue', 'green', 'red', 'yellow', 'orange', 'black', 'grey', 'violet', 'teal', 'purple', 'pink'].map(clr => <CbWrapper key={clr} {...{
        clr
      }} />)}
      </div>;
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Disabled',
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    }
  },
  render: () => {
    const [val, setVal] = useState(false);
    const onChange = val => {
      setVal(val);
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1.2rem'
    }}>
        <CbWrapper key='no' params={{
        value: false,
        disabled: true,
        label: 'Disabled Checkbox without value',
        onChange: onChange
      }} />
        <CbWrapper key='yes' params={{
        value: true,
        disabled: true,
        label: 'Disabled Checkbox with value',
        onChange: onChange
      }} />
      </div>;
  }
}`,...c.parameters?.docs?.source}}};const _=["Default","MultipleColors","Disabled"],T=Object.freeze(Object.defineProperty({__proto__:null,Default:t,Disabled:c,MultipleColors:s,__namedExportsOrder:_,default:V},Symbol.toStringTag,{value:"Module"}));export{T as C};
