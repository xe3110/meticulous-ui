import{j as o}from"./jsx-runtime-u17CrQMm.js";import{r as u}from"./iframe-v-kvBfBy.js";import{g as w}from"./helpers-CASQHxah.js";import{g as y}from"./get-CcP2FhCm.js";import{P as C}from"./P-Cotfyx-C.js";import{b as S}from"./orange-DWED-Hr3.js";import{l as g,d as p}from"./styled-components.browser.esm-DOqSrTHP.js";import{g as k}from"./grey-B1SlOap1.js";const R=p.div`
  position: absolute;
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({$isSelected:e,$shade:n})=>e?n:"transparent"};
  transition: background-color 0.35s ease;
`,D=p.div`
  width: 1.1rem;
  height: 1.1rem;
  border: 1px solid ${({$isSelected:e,$shade:n})=>e?n:k.m900};
  border-radius: 50%;
  position: relative;
`,H=p.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  margin: 0;
  pointer-events: none;
`,O=p.label`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  width: max-content;

  ${({$disabled:e})=>e?g`
          pointer-events: none;
          opacity: 0.4;
          cursor: not-allowed;
        `:g`
          cursor: pointer;
        `}
`,j=({label:e,value:n,name:r,color:a,textColor:t,isSelected:i,disabled:h,onChange:v})=>{const f=y(a,"m500",S.m500),b=y(a,"m800",S.m800),s=()=>v(n);return o.jsxs(O,{$disabled:h,children:[o.jsx(H,{type:"radio",name:r,value:n,checked:i,disabled:h,onChange:s}),o.jsx(D,{$isSelected:i,$shade:b,children:o.jsx(R,{$isSelected:i,$shade:f})}),o.jsx(C,{color:t,size:"1.2rem",children:e})]})};j.__docgenInfo={description:"",methods:[],displayName:"Radio"};const z=p.fieldset`
  border: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: ${({$isHorizonatal:e})=>e?"row":"column"};

  ${({$isHorizonatal:e})=>e?g`
          flex-wrap: wrap;
          justify-content: space-between;
        `:g`
          gap: 1.2rem;
        `};
`,m=({options:e,color:n="blue",value:r,onChange:a,isHorizonatal:t,label:i,name:h})=>{const v=w(n),f=s=>{s!==r&&a(s)},b=s=>u.createElement(j,{...s,key:s?.value,name:h,color:v,isSelected:r===s?.value,onChange:f});return o.jsxs(z,{$isHorizonatal:t,children:[i&&o.jsx("legend",{children:i}),e.map(b)]})};m.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{color:{defaultValue:{value:"'blue'",computed:!1},required:!1}}};const x=[{label:"New York",value:"New York"},{label:"Shanghai",value:"Shanghai",disabled:!0},{label:"London",value:"London"},{label:"Delhi",value:"Delhi"}],G={title:"Molecules/RadioGroup",component:m,parameters:{docs:{description:{component:"RadioGroup"},source:{language:"jsx",code:`
          import RadioGroup from 'meticulous-ui/components/Input/RadioGroup';

          const OPTIONS = [
            { label: 'New York', value: 'New York' },
            { label: 'Shanghai', value: 'Shanghai', disabled: true },
            { label: 'London', value: 'London' },
            { label: 'Delhi', value: 'Delhi' },
          ];

          export const Default = (args) => {
            const [val, setVal] = useState('');

            const onChange = (val) => {
              setVal(val);
            };

            return <RadioGroup options={OPTIONS} value={val} onChange={onChange} />;
          };
        `}}},argTypes:{value:{control:"text"},isHorizonatal:{control:"boolean"},color:{control:"select",options:["blue","green","red","yellow","orange","black","grey","violet","teal","purple","pink"]}}},l=e=>{const[n,r]=u.useState("");u.useEffect(()=>{r(e?.value)},[e?.value]);const a=t=>{r(t)};return o.jsx("div",{style:{width:"40rem"},children:o.jsx(m,{...e,value:n,options:x,onChange:a})})},d={name:"Horizontal",parameters:{controls:{disable:!0},actions:{disable:!0}},render:()=>{const[e,n]=u.useState(""),r=a=>{n(a)};return o.jsx("div",{style:{width:"40rem"},children:o.jsx(m,{value:e,options:x,onChange:r,isHorizonatal:!0})})}},N=({clr:e})=>{const[n,r]=u.useState(""),a=t=>{r(t)};return o.jsx("div",{style:{width:"40rem"},children:o.jsx(m,{value:n,options:x.filter(t=>!t.disabled),color:e,onChange:a})})},c={name:"Different Colors",parameters:{controls:{disable:!0},actions:{disable:!0}},render:()=>o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1.2rem"},children:["blue","green","red","yellow","orange","black","grey","violet","teal","purple","pink"].map(e=>o.jsxs("div",{children:[o.jsx("h2",{children:e}),o.jsx(N,{clr:e},e)]},e))})};l.storyName="Default";l.args={value:"",isHorizonatal:!1,color:"blue"};l.__docgenInfo={description:"",methods:[],displayName:"Default"};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => {
  const [val, setVal] = useState('');
  useEffect(() => {
    setVal(args?.value);
  }, [args?.value]);
  const onChange = val => {
    setVal(val);
  };
  return <div style={{
    width: '40rem'
  }}>
      <RadioGroup {...args} value={val} options={OPTIONS} onChange={onChange} />
    </div>;
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Horizontal',
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    }
  },
  render: () => {
    const [val, setVal] = useState('');
    const onChange = val => {
      setVal(val);
    };
    return <div style={{
      width: '40rem'
    }}>
        <RadioGroup value={val} options={OPTIONS} onChange={onChange} isHorizonatal />
      </div>;
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Different Colors',
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
        {['blue', 'green', 'red', 'yellow', 'orange', 'black', 'grey', 'violet', 'teal', 'purple', 'pink'].map(clr => <div key={clr}>
            <h2>{clr}</h2>
            <HorizontalRadioGrp key={clr} {...{
          clr
        }} />
          </div>)}
      </div>;
  }
}`,...c.parameters?.docs?.source}}};const _=["Default","Horizontal","DifferentColors"],M=Object.freeze(Object.defineProperty({__proto__:null,Default:l,DifferentColors:c,Horizontal:d,__namedExportsOrder:_,default:G},Symbol.toStringTag,{value:"Module"}));export{M as R};
