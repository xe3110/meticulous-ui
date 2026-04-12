import{j as t}from"./jsx-runtime-u17CrQMm.js";import{g as y}from"./get-CcP2FhCm.js";import{S as k}from"./Spinner-BzzFPHc8.js";import{c as v}from"./index-DgVUttyp.js";import{b as f}from"./orange-DWED-Hr3.js";import{l as m,d as c}from"./styled-components.browser.esm-DOqSrTHP.js";import{g as x}from"./grey-B1SlOap1.js";import{R as z}from"./Ripple-Bcm9kNc8.js";import{w as L}from"./white-DEREWbP3.js";import{H as D}from"./H6-fs-TtBlZ.js";const _=c.button`
  height: ${({$height:e})=>e}rem;
  width: ${({$width:e})=>e}rem;
  border-radius: 0.6rem;
  border: none;
  padding: 0.6rem 0.4rem;
  background-color: ${({$selectedColor:e,disabled:r})=>r?x.m500:e};
  cursor: ${({disabled:e,$isLoading:r})=>e?"not-allowed":r?"auto":"pointer"};

  ${({$isLoading:e})=>e&&m`
      pointer-events: none;
    `};

  ${({disabled:e,$isLoading:r})=>!(e||r)&&m`
      &:hover {
        background-color: ${({$hoverColor:o})=>o};
      }

      &:active {
        background-color: ${({$activeColor:o})=>o};
      }
    `};
`,E=c.div`
  font-size: ${({$font:e})=>e}rem;
  font-weight: 500;
  max-width: 100%;
  overflow: hidden;
  color: ${({$textColor:e})=>e};
`,I=c.div`
  height: ${({$height:e})=>e}rem;
  width: ${({$width:e})=>e}rem;
  display: inline-block;
  position: relative;
  border-radius: 0.6rem;

  ${({disabled:e,$isLoading:r})=>!(e||r)&&m`
      box-shadow: 0 0.4rem 1.5rem rgba(0, 0, 0, 0.2);
      transition:
        transform 0.2s,
        box-shadow 0.2s;

      &:hover {
        box-shadow: 0 0.6rem 2rem rgba(0, 0, 0, 0.3);
        transform: translateY(-2px);
      }
    `};
`,R=c.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,A="small",w="medium",M="large",G="ex-large",H={[A]:{height:2.8,width:5.25,font:1},[w]:{height:3.2,width:6,font:1.2},[M]:{height:3.6,width:6.75,font:1.4},[G]:{height:4,width:7.5,font:1.6}},O=({theme:e,children:r})=>t.jsx(z,{rippleColor:e.m100,children:r}),s=e=>{const{children:r,theme:o=f,size:S=w,width:u,leftIcon:P,rightIcon:T,isLoading:d}=e||{},{m400:C,m500:$,m600:B}=y(v,o,f),{height:p,width:h,font:j}=H[S]||{},g=o!=="white"?L:x.m600,b=t.jsx(_,{$hoverColor:$,$activeColor:B,$selectedColor:C,$height:p,$width:u||h,disabled:e.disabled,$isLoading:d,children:d?t.jsx(R,{children:t.jsx(k,{size:"small",color:g})}):t.jsx(E,{$textColor:g,$font:j,children:r})});return t.jsx(I,{$height:p,$width:u||h,disabled:e.disabled,$isLoading:d,children:d?b:t.jsx(O,{theme:o,children:b})})};s.__docgenInfo={description:"",methods:[],displayName:"Button"};const W=[{size:"small",label:"Small"},{size:"medium",label:"Medium"},{size:"large",label:"Large"},{size:"ex-large",label:"Extra Large"}],Z={title:"Atomic Components/Button",component:s,parameters:{docs:{description:{component:"A Button component to render & display a button."},source:{language:"jsx",code:`
          import Button from 'meticulous-ui/components/Button';

          const ButtonWrapper = () => {
            const onClick = (e) => {
              console.log(e)
            };

            return (
              <Button onClick={onClick}>Click me</Button>
            );
          };
        `}}},argTypes:{theme:{control:"select",options:["amber","blue","brown","cyan","deepPurple","grey","indigo","lightGreen","orange","purple","teal","white","black","blueGray","cider","deepOrange","green","lightBlue","lime","pink","red","violet","yellow"]},size:{control:"select",options:["small","medium","large","ex-large"]},width:{control:"number"}}},n=e=>t.jsx(s,{...e,children:"Click me"}),i={name:"Different Sizes",parameters:{controls:{disable:!0},actions:{disable:!0}},render:()=>t.jsx(t.Fragment,{children:W.map(({size:e,label:r})=>t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"15rem"},children:[t.jsx(D,{children:`${r}:`}),t.jsx(s,{size:e,children:"Click me"})]},e))})},a={name:"Loading State",parameters:{controls:{disable:!0},actions:{disable:!0}},render:()=>t.jsx(s,{isLoading:!0,children:"Click me"})},l={name:"Disabled State",parameters:{controls:{disable:!0},actions:{disable:!0}},render:()=>t.jsx(s,{disabled:!0,children:"Click me"})};n.args={theme:"blue",size:"medium",width:6};n.__docgenInfo={description:"",methods:[],displayName:"Default"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => {
  return <Button {...args}>Click me</Button>;
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Different Sizes',
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    }
  },
  render: () => <>
      {SIZES.map(({
      size,
      label
    }) => <div key={size} style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '15rem'
    }}>
          <H6>{\`\${label}:\`}</H6>
          <Button size={size}>Click me</Button>
        </div>)}
    </>
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Loading State',
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    }
  },
  render: () => <Button isLoading>Click me</Button>
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Disabled State',
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    }
  },
  render: () => <Button disabled>Click me</Button>
}`,...l.parameters?.docs?.source}}};const N=["Default","DifferentSizes","LoadingState","DisabledState"],te=Object.freeze(Object.defineProperty({__proto__:null,Default:n,DifferentSizes:i,DisabledState:l,LoadingState:a,__namedExportsOrder:N,default:Z},Symbol.toStringTag,{value:"Module"}));export{te as B,n as D};
