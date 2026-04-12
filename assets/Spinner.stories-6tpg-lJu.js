import{j as e}from"./jsx-runtime-u17CrQMm.js";import{S as r}from"./Spinner-_WEcMrW5.js";import{P as a}from"./P-l0kMmFEW.js";import{H as l}from"./H4-MyECYbNB.js";const o=()=>e.jsx(r,{}),m={title:"Atomic Components/Spinner",component:o,parameters:{docs:{description:{component:"A circular Spinner to show loading state."},source:{language:"jsx",code:`
      import Spinner from 'meticulous-ui/components/Spinner';

      const SpinnerWrapper = () => {
        return (
          <Spinner />
        );
      };
    `}}},argTypes:{color:{control:"select",options:["amber","blue","brown","cyan","deepPurple","grey","indigo","lightGreen","orange","purple","teal","white","black","blueGray","cider","deepOrange","green","lightBlue","lime","pink","red","violet","yellow"]},size:{control:"select",options:["small","medium","large"]}}},n=i=>e.jsx(r,{...i}),t={name:"Different Sizes",parameters:{controls:{disable:!0},actions:{disable:!0}},render:()=>e.jsxs("div",{children:[e.jsxs("div",{style:{marginLeft:"4rem",display:"flex",alignItems:"center",justifyContent:"space-between",width:"20rem"},children:[e.jsx(l,{children:"Small:"}),e.jsx(r,{size:"small"})]}),e.jsxs("div",{style:{marginLeft:"4rem",display:"flex",alignItems:"center",justifyContent:"space-between",width:"20rem"},children:[e.jsx(l,{children:"Medium:"}),e.jsx(r,{size:"medium"})]}),e.jsxs("div",{style:{marginLeft:"4rem",display:"flex",alignItems:"center",justifyContent:"space-between",width:"20rem"},children:[e.jsx(l,{children:"Large:"}),e.jsx(r,{size:"large"})]})]})},s={name:"Different Colors",parameters:{controls:{disable:!0},actions:{disable:!0}},render:()=>e.jsx("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"5rem",width:"70rem",margin:"2rem 5rem"},children:["amber","blue","brown","cyan","deepPurple","grey","indigo","lightGreen","orange","purple","teal","white","black","blueGray","cider","deepOrange","green","lightBlue","lime","pink","red","violet","yellow"].map(i=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx(r,{color:i}),e.jsx("div",{style:{marginTop:"1rem",textAlign:"center"},children:e.jsx(a,{children:i})})]},i))})};n.args={color:"green",size:"medium"};n.__docgenInfo={description:"",methods:[],displayName:"Default"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => {
  return <Spinner {...args} />;
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Different Sizes',
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    }
  },
  render: () => <div>
      <div style={{
      marginLeft: '4rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '20rem'
    }}>
        <H4>Small:</H4>
        <Spinner size='small' />
      </div>
      <div style={{
      marginLeft: '4rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '20rem'
    }}>
        <H4>Medium:</H4>
        <Spinner size='medium' />
      </div>
      <div style={{
      marginLeft: '4rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '20rem'
    }}>
        <H4>Large:</H4>
        <Spinner size='large' />
      </div>
    </div>
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Different Colors',
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '5rem',
    width: '70rem',
    margin: '2rem 5rem'
  }}>
      {['amber', 'blue', 'brown', 'cyan', 'deepPurple', 'grey', 'indigo', 'lightGreen', 'orange', 'purple', 'teal', 'white', 'black', 'blueGray', 'cider', 'deepOrange', 'green', 'lightBlue', 'lime', 'pink', 'red', 'violet', 'yellow'].map(clr => <div key={clr} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
          <Spinner color={clr} />
          <div style={{
        marginTop: '1rem',
        textAlign: 'center'
      }}>
            <P>{clr}</P>
          </div>
        </div>)}
    </div>
}`,...s.parameters?.docs?.source}}};const d=["Default","Sizes","Colors"],f=Object.freeze(Object.defineProperty({__proto__:null,Colors:s,Default:n,Sizes:t,__namedExportsOrder:d,default:m},Symbol.toStringTag,{value:"Module"}));export{f as S};
