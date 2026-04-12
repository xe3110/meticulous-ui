import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r}from"./iframe-BpIy2Msd.js";import{o as U}from"./omit-BfaNADvB.js";import{d as D,l as j}from"./styled-components.browser.esm-B1loR-YP.js";import{b as Y}from"./black-D_AkG8W8.js";import{g as w}from"./grey-B1SlOap1.js";import{r as P}from"./red-V1BWnntO.js";import{g as Z}from"./get-CcP2FhCm.js";import{o as ee,g as G,b as ae}from"./orange-DWED-Hr3.js";import{t as te,v as ne,y as oe}from"./yellow-6mWc-Jci.js";import{p as re,a as le}from"./purple-BLr8Wsdy.js";import{w as se}from"./white-DEREWbP3.js";const ce={blue:ae.m500,green:G.m500,red:P.m500,green:G.m500,yellow:oe.m500,orange:ee.m500,black:Y.m500,grey:w.m500,violet:ne.m500,teal:te.m500,purple:le.m500,pink:re.m500},ie=e=>Z(ce,e,w.m500),q=({$hasError:e,$shade:t,$isFocused:n,value:s,$onlyPh:c,textColor:d})=>e?typeof s=="string"&&!s&&!n?w.m500:P.m400:n&&!c?t:w.m500,ue=D.textarea`
  border-radius: 0.4rem;
  font-size: 1.4rem;
  border: 2px solid ${({$hasError:e})=>e?P.m400:Y.m200};
  padding: 0.6rem;
  font-weight: 400;
  transition: border-color 0.3s ease;
  background-color: ${({$background:e})=>e} !important;
  min-height: 1.4rem;
  min-width: 3rem;

  ${({$isResizeNone:e})=>e&&j`
      resize: none;
    `}

  ${({$isDynamic:e})=>e&&j`
      resize: none;
      display: block;
      overflow: hidden;
    `}

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 1000px var(--input-bg) inset;
    -webkit-text-fill-color: var(--input-text);
    transition: background-color 9999s ease-in-out 0s;
  }

  &::placeholder {
    color: ${w.m500};
    font-weight: 300;
    font-size: 1.4rem;
    background-color: ${({$background:e})=>e};
    pointer-events: none;
  }

  &:focus {
    border: 2px solid
      ${({$shade:e,$hasError:t})=>q({$shade:e,$hasError:t,$isFocused:!0})};
    outline: none;
  }
`,de=D.p`
  margin-top: 0.4rem;
  margin-left: 0.4rem;
  font-size: 0.8rem;
  color: ${q};
`,ge=D.div`
  position: relative;
  width: fit-content;
`,ve=D.div`
  position: absolute;
  top: -0.4rem;
  left: 0.5rem;
  font-size: 0.8rem;
  background-color: ${({$outerBackground:e})=>e};
  border-radius: 0.4rem;
  margin: 0 0.4rem;
  transition: 0.25s;
  font-weight: 400;
  pointer-events: none;
  color: ${q};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: -moz-available; /* Firefox */
  max-width: -webkit-fill-available; /* Chrome, Safari, Edge */
  max-width: stretch; /* Modern Standard */

  ${({$isFocused:e,value:t,$onlyPh:n})=>!n&&(e||t)?j`
          top: -0.4rem;
          left: 0.5rem;
          padding: 0 0.4rem;
          margin: 0;
        `:j`
          top: 0.8rem;
          left: 0.5rem;
          font-size: 1.4rem;
        `}
`,he=D.div`
  overflow: hidden;
`,l=({label:e,onChange:t,value:n,type:s,hasError:c,name:d="textarea",color:u="blue",helperText:_="",background:k="transparent",outerBackground:H=se,isDynamic:h,isResizeNone:R,rows:$="2",cols:F="20",...A})=>{const[g,M]=r.useState(!1),p=ie(u),I=r.useRef(null),L=()=>M(!0),B=()=>M(!1),E=N=>{if(h){const v=I.current;if(v){v.style.height="0px";const O=v.scrollHeight;v.style.height=`${O}px`}}t(N)},{placeholder:m}=A,b=c,z=h,X=k,W=h?{}:{rows:$};return a.jsxs(ge,{children:[a.jsx(ue,{type:s,name:d,$hasError:b,value:n,$isFocused:g,$shade:p,$isDynamic:z,$background:X,cols:F,$isResizeNone:R,...W,ref:I,onFocus:L,onBlur:B,onChange:E,...U(A,"placeholder")}),a.jsxs(he,{children:[(e||m&&!n)&&a.jsx(ve,{$hasError:b,$isFocused:g,$shade:p,value:n,$outerBackground:g||n?H:k,$onlyPh:m&&!e,children:e||m}),_&&a.jsx(de,{$hasError:b,$isFocused:g,$shade:p,children:_})]})]})};l.__docgenInfo={description:"",methods:[],displayName:"Textarea",props:{name:{defaultValue:{value:"'textarea'",computed:!1},required:!1},color:{defaultValue:{value:"'blue'",computed:!1},required:!1},helperText:{defaultValue:{value:"''",computed:!1},required:!1},background:{defaultValue:{value:"'transparent'",computed:!1},required:!1},outerBackground:{defaultValue:{value:"'#FFFFFF'",computed:!1},required:!1},rows:{defaultValue:{value:"'2'",computed:!1},required:!1},cols:{defaultValue:{value:"'20'",computed:!1},required:!1}}};const pe={title:"Atomic Components/Textarea",component:l,parameters:{docs:{description:{component:"A simple Textarea component that shows a box with content given by the user."},source:{language:"jsx",code:`
          import Textarea from 'meticulous-ui/components/Input/Textarea';

          function ExampleTextarea() {
            const [val, setVal] = useState('');
            const onChange = (v) => setVal(v.target.value);

            return (
              <Textarea name='description' label='Value' value={val} onChange={onChange} color='blue' />
            )
          }
        `}}},argTypes:{color:{control:"select",options:["blue","green","red","green","yellow","orange","black","grey","violet","teal","purple","pink"]},name:{control:{type:"text"},description:"Defines the type of value of Textarea"},rows:{control:{type:"text"},description:"Defines the height of the Textarea"},cols:{control:{type:"text"},description:"Defines the width of the Textarea"},helperText:{control:{type:"text"},description:"Shows beneath the Textarea box, can be an error statement as well."},background:{control:{type:"text"},description:"Defines background color of Textarea box"},outerBackground:{control:{type:"text"},description:"Defines background color of Label, when over Textbox box line"},disabled:{control:{type:"boolean"},description:"Boolean prop, if true then disabled"},hasError:{control:{type:"boolean"},description:"Boolean prop, if true then error on Textarea is visible"},autoFocus:{control:{type:"boolean"},description:"Boolean prop, if true then auto focuses on Textarea"},isDynamic:{control:{type:"boolean"},description:"Boolean prop, if true then Textarea has no scroll or resize but dynamic height"},isResizeNone:{control:{type:"boolean"},description:"Boolean prop, if true then cannot resize Textarea"}}},i=e=>{const[t,n]=r.useState(""),s=c=>{n(c.target.value)};return a.jsx(l,{label:"Value",value:t,color:e?.color,disabled:!!e?.disabled,hasError:!!e?.hasError,autoFocus:!!e?.autoFocus,isDynamic:!!e?.isDynamic,isResizeNone:!!e?.isResizeNone,helperText:e?.helperText,background:e?.background,outerBackground:e?.outerBackground,rows:e?.rows,cols:e?.cols,onChange:s})},x={name:"Different Color",parameters:{controls:{disable:!0},actions:{disable:!0}},render:()=>{const[e,t]=r.useState(""),[n,s]=r.useState(""),[c,d]=r.useState(""),[u,_]=r.useState(""),[k,H]=r.useState(""),[h,R]=r.useState(""),[$,F]=r.useState(""),[A,g]=r.useState(""),[M,p]=r.useState(""),[I,L]=r.useState(""),[B,E]=r.useState(""),m=o=>t(o.target.value),b=o=>s(o.target.value),z=o=>d(o.target.value),X=o=>_(o.target.value),W=o=>H(o.target.value),N=o=>R(o.target.value),v=o=>F(o.target.value),O=o=>g(o.target.value),J=o=>p(o.target.value),K=o=>L(o.target.value),Q=o=>E(o.target.value);return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[a.jsx(l,{label:"Blue",value:e,color:"blue",onChange:m}),a.jsx(l,{label:"Yellow",value:n,color:"yellow",onChange:b}),a.jsx(l,{label:"Red",value:c,color:"red",onChange:z}),a.jsx(l,{label:"Green",value:u,color:"green",onChange:X}),a.jsx(l,{label:"Orange",value:k,color:"orange",onChange:W}),a.jsx(l,{label:"Black",value:h,color:"black",onChange:N}),a.jsx(l,{label:"Grey",value:$,color:"grey",onChange:v}),a.jsx(l,{label:"Violet",value:A,color:"violet",onChange:O}),a.jsx(l,{label:"Teal",value:M,color:"teal",onChange:J}),a.jsx(l,{label:"Purple",value:I,color:"purple",onChange:K}),a.jsx(l,{label:"Pink",value:B,color:"pink",onChange:Q})]})}},f={name:"Disabled",parameters:{controls:{disable:!0},actions:{disable:!0}},render:()=>{const[e,t]=r.useState(""),[n,s]=r.useState("Default value"),c=u=>t(u.target.value),d=u=>s(u.target.value);return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[a.jsx(l,{label:"Disabled without value",value:e,color:"blue",onChange:c,disabled:!0}),a.jsx(l,{label:"Disabled with value",value:n,color:"blue",onChange:d,disabled:!0})]})}},C={name:"With Dynamic Height",parameters:{controls:{disable:!0},actions:{disable:!0}},render:()=>{const[e,t]=r.useState(""),n=s=>{t(s.target.value)};return a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:a.jsx(l,{label:"Dynamic Height",value:e,color:"blue",onChange:n,isDynamic:!0})})}},T={name:"With Helper Text",parameters:{controls:{disable:!0},actions:{disable:!0}},render:()=>{const[t,n]=r.useState(""),s=c=>{c.target.value.length<=30&&n(c.target.value)};return a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:a.jsx(l,{label:"With helper text",value:t,color:"blue",onChange:s,helperText:`${30-t.length}/30 characters allowed`})})}},y={name:"Error State",parameters:{controls:{disable:!0},actions:{disable:!0}},render:()=>{const[t,n]=r.useState("This value exceeds limit."),s=c=>{n(c.target.value.slice(0,20))};return a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:a.jsx(l,{label:"Error State",value:t,color:"blue",outerBackground:"white",onChange:s,helperText:"Max. 20 characters allowed",hasError:t.length>20})})}},S={name:"Auto Focus",parameters:{controls:{disable:!0},actions:{disable:!0}},render:()=>{const[e,t]=r.useState(""),n=s=>{t(s.target.value)};return a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:a.jsx(l,{label:"Auto Focus",value:e,color:"blue",onChange:n,autoFocus:!0})})}},V={name:"Without Label",parameters:{controls:{disable:!0},actions:{disable:!0}},render:()=>{const[e,t]=r.useState(""),n=s=>{t(s.target.value)};return a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:a.jsx(l,{placeholder:"With helper text",value:e,color:"blue",onChange:n})})}};i.storyName="Textarea";i.args={name:"Textarea",color:"blue",helperText:"",background:"transparent",outerBackground:"white",disabled:!1,hasError:!1,autoFocus:!1,isDynamic:!1,isResizeNone:!1,rows:"2",cols:"20"};i.__docgenInfo={description:"",methods:[],displayName:"Default"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => {
  const [val, setVal] = useState('');
  const onChange = v => {
    setVal(v.target.value);
  };
  return <Textarea label='Value' value={val} color={args?.color} disabled={!!args?.disabled} hasError={!!args?.hasError} autoFocus={!!args?.autoFocus} isDynamic={!!args?.isDynamic} isResizeNone={!!args?.isResizeNone} helperText={args?.helperText} background={args?.background} outerBackground={args?.outerBackground} rows={args?.rows} cols={args?.cols} onChange={onChange} />;
}`,...i.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Different Color',
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    }
  },
  render: () => {
    const [val1, setVal1] = useState('');
    const [val2, setVal2] = useState('');
    const [val3, setVal3] = useState('');
    const [val4, setVal4] = useState('');
    const [val5, setVal5] = useState('');
    const [val6, setVal6] = useState('');
    const [val7, setVal7] = useState('');
    const [val8, setVal8] = useState('');
    const [val9, setVal9] = useState('');
    const [val10, setVal10] = useState('');
    const [val11, setVal11] = useState('');
    const onChange1 = v => setVal1(v.target.value);
    const onChange2 = v => setVal2(v.target.value);
    const onChange3 = v => setVal3(v.target.value);
    const onChange4 = v => setVal4(v.target.value);
    const onChange5 = v => setVal5(v.target.value);
    const onChange6 = v => setVal6(v.target.value);
    const onChange7 = v => setVal7(v.target.value);
    const onChange8 = v => setVal8(v.target.value);
    const onChange9 = v => setVal9(v.target.value);
    const onChange10 = v => setVal10(v.target.value);
    const onChange11 = v => setVal11(v.target.value);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>
        <Textarea label='Blue' value={val1} color='blue' onChange={onChange1} />
        <Textarea label='Yellow' value={val2} color='yellow' onChange={onChange2} />
        <Textarea label='Red' value={val3} color='red' onChange={onChange3} />
        <Textarea label='Green' value={val4} color='green' onChange={onChange4} />
        <Textarea label='Orange' value={val5} color='orange' onChange={onChange5} />
        <Textarea label='Black' value={val6} color='black' onChange={onChange6} />
        <Textarea label='Grey' value={val7} color='grey' onChange={onChange7} />
        <Textarea label='Violet' value={val8} color='violet' onChange={onChange8} />
        <Textarea label='Teal' value={val9} color='teal' onChange={onChange9} />
        <Textarea label='Purple' value={val10} color='purple' onChange={onChange10} />
        <Textarea label='Pink' value={val11} color='pink' onChange={onChange11} />
      </div>;
  }
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
    const [val1, setVal1] = useState('');
    const [val2, setVal2] = useState('Default value');
    const onChange1 = v => setVal1(v.target.value);
    const onChange2 = v => setVal2(v.target.value);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>
        <Textarea label='Disabled without value' value={val1} color='blue' onChange={onChange1} disabled />
        <Textarea label='Disabled with value' value={val2} color='blue' onChange={onChange2} disabled />
      </div>;
  }
}`,...f.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'With Dynamic Height',
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    }
  },
  render: () => {
    const [val1, setVal1] = useState('');
    const onChange1 = v => {
      setVal1(v.target.value);
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>
        <Textarea label='Dynamic Height' value={val1} color='blue' onChange={onChange1} isDynamic />
      </div>;
  }
}`,...C.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'With Helper Text',
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    }
  },
  render: () => {
    const MAX_CHARS_LIMIT = 30;
    const [val1, setVal1] = useState('');
    const onChange1 = v => {
      if (v.target.value.length <= MAX_CHARS_LIMIT) setVal1(v.target.value);
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>
        <Textarea label='With helper text' value={val1} color='blue' onChange={onChange1} helperText={\`\${MAX_CHARS_LIMIT - val1.length}/\${MAX_CHARS_LIMIT} characters allowed\`} />
      </div>;
  }
}`,...T.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Error State',
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    }
  },
  render: () => {
    const MAX_CHARS_LIMIT = 20;
    const [val1, setVal1] = useState('This value exceeds limit.');
    const onChange1 = v => {
      setVal1(v.target.value.slice(0, MAX_CHARS_LIMIT));
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>
        <Textarea label='Error State' value={val1} color='blue' outerBackground='white' onChange={onChange1} helperText={\`Max. \${MAX_CHARS_LIMIT} characters allowed\`} hasError={val1.length > MAX_CHARS_LIMIT} />
      </div>;
  }
}`,...y.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Auto Focus',
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    }
  },
  render: () => {
    const MAX_CHARS_LIMIT = 10;
    const [val1, setVal1] = useState('');
    const onChange1 = v => {
      setVal1(v.target.value);
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>
        <Textarea label='Auto Focus' value={val1} color='blue' onChange={onChange1} autoFocus />
      </div>;
  }
}`,...S.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'Without Label',
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    }
  },
  render: () => {
    const [val1, setVal1] = useState('');
    const onChange1 = v => {
      setVal1(v.target.value);
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>
        <Textarea placeholder='With helper text' value={val1} color='blue' onChange={onChange1} />
      </div>;
  }
}`,...V.parameters?.docs?.source}}};const me=["Default","DifferentColor","Disabled","DynamicHeight","HelperText","ErrorState","AutoFocus","WithoutLabel"],Ae=Object.freeze(Object.defineProperty({__proto__:null,AutoFocus:S,Default:i,DifferentColor:x,Disabled:f,DynamicHeight:C,ErrorState:y,HelperText:T,WithoutLabel:V,__namedExportsOrder:me,default:pe},Symbol.toStringTag,{value:"Module"}));export{Ae as T};
