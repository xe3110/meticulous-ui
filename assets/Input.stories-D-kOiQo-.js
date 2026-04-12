import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r}from"./iframe-v-kvBfBy.js";import{o as ne}from"./omit-BfaNADvB.js";import{d as p,l as Y}from"./styled-components.browser.esm-DOqSrTHP.js";import{b as Q}from"./black-D_AkG8W8.js";import{g}from"./grey-B1SlOap1.js";import{r as N}from"./red-V1BWnntO.js";import{g as U}from"./get-CcP2FhCm.js";import{o as ae,g as J,b as oe}from"./orange-DWED-Hr3.js";import{t as le,v as re,y as se}from"./yellow-6mWc-Jci.js";import{p as ue,a as ie}from"./purple-BLr8Wsdy.js";import{a as ce}from"./index-CkPdTj3L.js";import{w as pe}from"./white-DEREWbP3.js";const de={blue:oe.m500,green:J.m500,red:N.m500,green:J.m500,yellow:se.m500,orange:ae.m500,black:Q.m500,grey:g.m500,violet:re.m500,teal:le.m500,purple:ie.m500,pink:ue.m500},ge=e=>U(de,e,g.m500),G=({$hasError:e,$shade:n,$isFocused:a,value:o,$onlyPh:u})=>e?typeof o=="string"&&!o&&!a?g.m500:N.m400:a&&!u?n:g.m500,K=e=>U(ce,e,null),ve=({$hasLeftIcon:e,$hasRightIcon:n})=>e&&n?"0 2.4rem":e?"0 0.6rem 0 2.4rem":n?"0 2.4rem 0 0.6rem":"0 0.6rem",he=p.input`
  height: 3rem;
  border-radius: 0.4rem;
  font-size: 1.4rem;
  border: 2px solid ${({$hasError:e})=>e?N.m400:Q.m200};
  padding: ${ve};
  font-weight: 400;
  transition: border-color 0.3s ease;
  background-color: ${({$background:e})=>e} !important;
  overflow: hidden;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 1000px var(--input-bg) inset;
    -webkit-text-fill-color: var(--input-text);
    transition: background-color 9999s ease-in-out 0s;
  }

  &::placeholder {
    color: ${g.m500};
    font-weight: 300;
    font-size: 1.4rem;
    background-color: ${({$background:e})=>e};
    pointer-events: none;
  }

  &:focus {
    border: 2px solid
      ${({$shade:e,$hasError:n})=>G({$shade:e,$hasError:n,$isFocused:!0})};
    outline: none;
  }
`,me=p.p`
  margin-top: 0.4rem;
  margin-left: 0.4rem;
  font-size: 0.8rem;
  color: ${G};
`,be=p.div`
  position: relative;
  width: fit-content;
`,Ce=p.div`
  position: absolute;
  top: 0.8rem;
  left: 0.6rem;
`,fe=p.div`
  position: absolute;
  top: 0.8rem;
  right: 0.6rem;
`;p.div`
  position: relative;
  width: 100%;
`;const xe=p.div`
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
  color: ${G};

  ${({$isFocused:e,value:n,$onlyPh:a})=>!a&&(e||n)?Y`
          top: -0.4rem;
          left: ${({$hasLeftIcon:o})=>o?2.2:.5}rem;
          padding: 0 0.4rem;
          margin: 0;
        `:Y`
          top: 0.8rem;
          left: ${({$hasLeftIcon:o})=>o?2.2:.5}rem;
          font-size: 1.4rem;
        `}
`,l=({label:e,onChange:n,value:a,type:o,hasError:u,name:v="input",color:c="blue",size:H="20",disableAutoComplete:F,helperText:M="",background:D="transparent",outerBackground:E=pe,leftIcon:T,rightIcon:w,...L})=>{const[d,W]=r.useState(!1),h=ge(c),B=()=>W(!0),X=()=>W(!1),O=q=>{n(q)},{placeholder:m}=L,R={color:g.m500,size:22},b=K(T),C=K(w),f=!!(T&&b),$=!!(w&&C),x=u,P=D;return t.jsxs(be,{children:[t.jsx(he,{type:o,name:v,$hasError:x,size:H,value:a,$isFocused:d,$shade:h,$background:P,$hasLeftIcon:f,$hasRightIcon:$,onFocus:B,onBlur:X,onChange:O,autoComplete:F?"off":"on",...ne(L,"placeholder")}),b&&t.jsx(Ce,{children:b(R)}),C&&t.jsx(fe,{children:C(R)}),(e||m&&!a)&&t.jsx(xe,{$hasError:x,$isFocused:d,$shade:h,value:a,$outerBackground:d||a?E:D,$hasLeftIcon:f,$hasRightIcon:$,$onlyPh:m&&!e,children:e||m}),M&&t.jsx(me,{$hasError:x,$isFocused:d,$shade:h,$hasLeftIcon:f,children:M})]})};l.__docgenInfo={description:"",methods:[],displayName:"Input",props:{name:{defaultValue:{value:"'input'",computed:!1},required:!1},color:{defaultValue:{value:"'blue'",computed:!1},required:!1},size:{defaultValue:{value:"'20'",computed:!1},required:!1},helperText:{defaultValue:{value:"''",computed:!1},required:!1},background:{defaultValue:{value:"'transparent'",computed:!1},required:!1},outerBackground:{defaultValue:{value:"'#FFFFFF'",computed:!1},required:!1}}};const Ie={title:"Atomic Components/Input",component:l,parameters:{docs:{description:{component:"A simple input component that shows a box with content given by the user."},source:{language:"jsx",code:`
          import Input from 'meticulous-ui/components/Input/Input';

          function ExampleInput() {
            const [val, setVal] = useState('');
            const onChange = (v) => setVal(v.target.value);

            return (
              <Input label='Value' value={val} onChange={onChange} color='blue' size='20' />
            )
          }
        `}}},argTypes:{color:{control:"select",options:["blue","green","red","green","yellow","orange","black","grey","violet","teal","purple","pink"]},size:{control:{type:"number"},description:"Mandatory numeric prop representing current page"},helperText:{control:{type:"text"},description:"Shows beneath the input box, can be an error statement as well."},background:{control:{type:"text"},description:"Defines background color of Input box"},outerBackground:{control:{type:"text"},description:"Defines background color of Label, when over Input box line"},leftIcon:{control:{type:"text"},description:"Defines the left icon placed in the input box."},rightIcon:{control:{type:"text"},description:"Defines the right icon placed in the input box."},disabled:{control:{type:"boolean"},description:"Boolean prop, if true then disabled"},disableAutoComplete:{control:{type:"boolean"},description:"Boolean prop, if true then auto complete disabled"},hasError:{control:{type:"boolean"},description:"Boolean prop, if true then error on input is visible"},autoFocus:{control:{type:"boolean"},description:"Boolean prop, if true then auto focuses on input"}}},i=e=>{const[n,a]=r.useState(""),o=u=>{a(u.target.value)};return t.jsx(l,{label:"Value",value:n,color:e?.color,size:e?.size,disabled:!!e?.disabled,hasError:!!e?.hasError,helperText:e?.helperText,background:e?.background,outerBackground:e?.outerBackground,disableAutoComplete:!!e?.disableAutoComplete,onChange:o})},I={name:"Different Color",parameters:{controls:{disable:!0},actions:{disable:!0}},render:()=>{const[e,n]=r.useState(""),[a,o]=r.useState(""),[u,v]=r.useState(""),[c,H]=r.useState(""),[F,M]=r.useState(""),[D,E]=r.useState(""),[T,w]=r.useState(""),[L,d]=r.useState(""),[W,h]=r.useState(""),[B,X]=r.useState(""),[O,m]=r.useState(""),R=s=>n(s.target.value),b=s=>o(s.target.value),C=s=>v(s.target.value),f=s=>H(s.target.value),$=s=>M(s.target.value),x=s=>E(s.target.value),P=s=>w(s.target.value),q=s=>d(s.target.value),Z=s=>h(s.target.value),ee=s=>X(s.target.value),te=s=>m(s.target.value);return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[t.jsx(l,{label:"Blue",value:e,color:"blue",size:"30",onChange:R}),t.jsx(l,{label:"Yellow",value:a,color:"yellow",size:"30",onChange:b}),t.jsx(l,{label:"Red",value:u,color:"red",size:"30",onChange:C}),t.jsx(l,{label:"Green",value:c,color:"green",size:"30",onChange:f}),t.jsx(l,{label:"Orange",value:F,color:"orange",size:"30",onChange:$}),t.jsx(l,{label:"Black",value:D,color:"black",size:"30",onChange:x}),t.jsx(l,{label:"Grey",value:T,color:"grey",size:"30",onChange:P}),t.jsx(l,{label:"Violet",value:L,color:"violet",size:"30",onChange:q}),t.jsx(l,{label:"Teal",value:W,color:"teal",size:"30",onChange:Z}),t.jsx(l,{label:"Purple",value:B,color:"purple",size:"30",onChange:ee}),t.jsx(l,{label:"Pink",value:O,color:"pink",size:"30",onChange:te})]})}},S={name:"Without Auto Complete",parameters:{controls:{disable:!0},actions:{disable:!0}},render:()=>{const[e,n]=r.useState(""),a=o=>n(o.target.value);return t.jsx(l,{label:"Without AutoComplete",value:e,color:"blue",size:"30",onChange:a,disableAutoComplete:!0})}},V={name:"Disabled",parameters:{controls:{disable:!0},actions:{disable:!0}},render:()=>{const[e,n]=r.useState(""),[a,o]=r.useState("Default value"),u=c=>n(c.target.value),v=c=>o(c.target.value);return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[t.jsx(l,{label:"Disabled without value",value:e,color:"blue",size:"30",onChange:u,disabled:!0}),t.jsx(l,{label:"Disabled with value",value:a,color:"blue",size:"30",onChange:v,disabled:!0})]})}},y={name:"With Helper Text",parameters:{controls:{disable:!0},actions:{disable:!0}},render:()=>{const[n,a]=r.useState(""),o=u=>{u.target.value.length<=30&&a(u.target.value)};return t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:t.jsx(l,{label:"With helper text",value:n,color:"blue",size:"30",onChange:o,helperText:`${30-n.length}/30 characters allowed`})})}},A={name:"Error State",parameters:{controls:{disable:!0},actions:{disable:!0}},render:()=>{const[n,a]=r.useState("This value exceeds limit."),o=u=>{a(u.target.value.slice(0,10))};return t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:t.jsx(l,{label:"Error State",value:n,color:"blue",size:"30",onChange:o,helperText:"Max. 10 characters allowed",hasError:n.length>10})})}},z={name:"Auto Focus",parameters:{controls:{disable:!0},actions:{disable:!0}},render:()=>{const[e,n]=r.useState(""),a=o=>{n(o.target.value)};return t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:t.jsx(l,{label:"Auto Focus",value:e,color:"blue",size:"30",onChange:a,autoFocus:!0})})}},_={name:"Without Label",parameters:{controls:{disable:!0},actions:{disable:!0}},render:()=>{const[e,n]=r.useState(""),a=o=>{n(o.target.value)};return t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:t.jsx(l,{placeholder:"With helper text",value:e,color:"blue",size:"30",onChange:a})})}},k={name:"With Left Icon",parameters:{controls:{disable:!0},actions:{disable:!0}},render:()=>{const[e,n]=r.useState(""),a=o=>{n(o.target.value)};return t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:t.jsx(l,{label:"With Left Icon",value:e,color:"blue",size:"30",onChange:a,leftIcon:"Search"})})}},j={name:"With Right Icon",parameters:{controls:{disable:!0},actions:{disable:!0}},render:()=>{const[e,n]=r.useState(""),a=o=>{n(o.target.value)};return t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:t.jsx(l,{label:"With Right Icon",value:e,color:"blue",size:"30",onChange:a,rightIcon:"StarOutline"})})}};i.storyName="Input";i.args={name:"input",color:"blue",size:20,helperText:"",background:"transparent",outerBackground:"white",leftIcon:"",rightIcon:"",disableAutoComplete:!1,disabled:!1,hasError:!1,autoFocus:!1};i.__docgenInfo={description:"",methods:[],displayName:"Default"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => {
  const [val, setVal] = useState('');
  const onChange = v => {
    setVal(v.target.value);
  };
  return <Input label='Value' value={val} color={args?.color} size={args?.size} disabled={!!args?.disabled} hasError={!!args?.hasError} helperText={args?.helperText} background={args?.background} outerBackground={args?.outerBackground} disableAutoComplete={!!args?.disableAutoComplete} onChange={onChange} />;
}`,...i.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
        <Input label='Blue' value={val1} color='blue' size='30' onChange={onChange1} />
        <Input label='Yellow' value={val2} color='yellow' size='30' onChange={onChange2} />
        <Input label='Red' value={val3} color='red' size='30' onChange={onChange3} />
        <Input label='Green' value={val4} color='green' size='30' onChange={onChange4} />
        <Input label='Orange' value={val5} color='orange' size='30' onChange={onChange5} />
        <Input label='Black' value={val6} color='black' size='30' onChange={onChange6} />
        <Input label='Grey' value={val7} color='grey' size='30' onChange={onChange7} />
        <Input label='Violet' value={val8} color='violet' size='30' onChange={onChange8} />
        <Input label='Teal' value={val9} color='teal' size='30' onChange={onChange9} />
        <Input label='Purple' value={val10} color='purple' size='30' onChange={onChange10} />
        <Input label='Pink' value={val11} color='pink' size='30' onChange={onChange11} />
      </div>;
  }
}`,...I.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Without Auto Complete',
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
    const onChange = v => setVal(v.target.value);
    return <Input label='Without AutoComplete' value={val} color='blue' size='30' onChange={onChange} disableAutoComplete />;
  }
}`,...S.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
        <Input label='Disabled without value' value={val1} color='blue' size='30' onChange={onChange1} disabled />
        <Input label='Disabled with value' value={val2} color='blue' size='30' onChange={onChange2} disabled />
      </div>;
  }
}`,...V.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
        <Input label='With helper text' value={val1} color='blue' size='30' onChange={onChange1} helperText={\`\${MAX_CHARS_LIMIT - val1.length}/\${MAX_CHARS_LIMIT} characters allowed\`} />
      </div>;
  }
}`,...y.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
    const MAX_CHARS_LIMIT = 10;
    const [val1, setVal1] = useState('This value exceeds limit.');
    const onChange1 = v => {
      setVal1(v.target.value.slice(0, MAX_CHARS_LIMIT));
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>
        <Input label='Error State' value={val1} color='blue' size='30' onChange={onChange1} helperText={\`Max. \${MAX_CHARS_LIMIT} characters allowed\`} hasError={val1.length > MAX_CHARS_LIMIT} />
      </div>;
  }
}`,...A.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
        <Input label='Auto Focus' value={val1} color='blue' size='30' onChange={onChange1} autoFocus />
      </div>;
  }
}`,...z.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
        <Input placeholder='With helper text' value={val1} color='blue' size='30' onChange={onChange1} />
      </div>;
  }
}`,..._.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'With Left Icon',
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
        <Input label='With Left Icon' value={val1} color='blue' size='30' onChange={onChange1} leftIcon='Search' />
      </div>;
  }
}`,...k.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'With Right Icon',
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
        <Input label='With Right Icon' value={val1} color='blue' size='30' onChange={onChange1} rightIcon='StarOutline' />
      </div>;
  }
}`,...j.parameters?.docs?.source}}};const Se=["Default","DifferentColor","NoAutoComplete","Disabled","HelperText","ErrorState","AutoFocus","WithoutLabel","WithLeftIcon","WithRightIcon"],Re=Object.freeze(Object.defineProperty({__proto__:null,AutoFocus:z,Default:i,DifferentColor:I,Disabled:V,ErrorState:A,HelperText:y,NoAutoComplete:S,WithLeftIcon:k,WithRightIcon:j,WithoutLabel:_,__namedExportsOrder:Se,default:Ie},Symbol.toStringTag,{value:"Module"}));export{Re as I};
