import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r as d}from"./iframe-v-kvBfBy.js";import{g as b}from"./get-CcP2FhCm.js";import{g}from"./grey-B1SlOap1.js";import{P as y}from"./P-Cotfyx-C.js";import{w as j}from"./white-DEREWbP3.js";import{b as h}from"./orange-DWED-Hr3.js";import{l as D,d as x}from"./styled-components.browser.esm-DOqSrTHP.js";import{C as S}from"./Check-BMhGDKD5.js";import{g as w}from"./helpers-CASQHxah.js";const V=x.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  width: max-content;

  ${({$disabled:e})=>e&&D`
      pointer-events: none;
      opacity: 0.7;
    `}
`,_=x(S)`
  width: 1.2rem;
  height: 1.2rem;
  border: 1px solid ${({$value:e,$outerShade:o})=>e?o:g.m800};
  border-radius: 0.2rem;
  background-color: ${({$value:e,$innerShade:o})=>e?o:"transparent"};
  transition: background-color 0.35s ease;

  path {
    stroke-width: 3;
  }
`,u=({label:e,value:o,color:r="blue",textColor:l=g.m700,disabled:t,onChange:i})=>{const C=()=>{t||i(!o)},m=w(r),f=b(m,"m500",h.m500),v=b(m,"m800",h.m800);return a.jsxs(V,{onClick:C,$disabled:t,children:[a.jsx("input",{type:"checkbox",checked:o,onChange:k=>i(k.target.checked),disabled:t,style:{position:"absolute",opacity:0,width:0,height:0}}),a.jsx(_,{$value:o,size:6,color:j,$innerShade:f,$outerShade:v}),a.jsx(y,{color:l,size:"1.2rem",children:e})]})};u.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{color:{defaultValue:{value:"'blue'",computed:!1},required:!1},textColor:{defaultValue:{value:"'#616161'",computed:!1},required:!1}}};const $={title:"Atomic Components/Checkbox",component:u,parameters:{docs:{description:{component:"Checkbox input."},source:{language:"jsx",code:`
          import Checkbox from 'meticulous-ui/components/Input/Checkbox';

          export const Default = (args) => {
            const [val, setVal] = useState(false);

            const onChange = (val) => {
              setVal(val);
            };

            return <Checkbox value={val} color='blue' textColor={grey.m700} label='Click Please' onChange={onChange} />;
          };
        `}}},argTypes:{color:{control:"select",options:["blue","green","red","yellow","orange","black","grey","violet","teal","purple","pink"]},label:{control:"text"},value:{control:{type:"boolean"}},textColor:{control:"text"}}},n=e=>{const[o,r]=d.useState(!1),l=t=>{r(t),console.log(t)};return a.jsx(u,{label:"Click Please",...e,value:o,onChange:l})},p=({clr:e,params:o={}})=>{const[r,l]=d.useState(!1),t=i=>{l(i)};return a.jsx(u,{color:e,value:r,label:`${e} color`,...o,onChange:t})},s={name:"Multiple Colors",parameters:{controls:{disable:!0},actions:{disable:!0}},render:()=>a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1.2rem"},children:["blue","green","red","yellow","orange","black","grey","violet","teal","purple","pink"].map(e=>a.jsx(p,{clr:e},e))})},c={name:"Disabled",parameters:{controls:{disable:!0},actions:{disable:!0}},render:()=>{const[e,o]=d.useState(!1),r=l=>{o(l)};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.2rem"},children:[a.jsx(p,{params:{value:!1,disabled:!0,label:"Disabled Checkbox without value",onChange:r}},"no"),a.jsx(p,{params:{value:!0,disabled:!0,label:"Disabled Checkbox with value",onChange:r}},"yes")]})}};n.storyName="Checkbox";n.args={value:!1,label:"Click me",color:"blue",textColor:"#616161"};n.__docgenInfo={description:"",methods:[],displayName:"Default"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => {
  const [val, setVal] = useState(false);
  const onChange = val => {
    setVal(val);
    console.log(val);
  };
  return <Checkbox label='Click Please' {...args} value={val} onChange={onChange} />;
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const M=["Default","MultipleColors","Disabled"],B=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Disabled:c,MultipleColors:s,__namedExportsOrder:M,default:$},Symbol.toStringTag,{value:"Module"}));export{B as C};
