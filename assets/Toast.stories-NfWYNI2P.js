import{j as o}from"./jsx-runtime-u17CrQMm.js";import{r as c}from"./iframe-v-kvBfBy.js";import{d as r,m as O,l as b}from"./styled-components.browser.esm-DOqSrTHP.js";import{g as F}from"./get-CcP2FhCm.js";import{n as v}from"./noop-DX6rZLP_.js";import{b as $,o as T,g as w}from"./orange-DWED-Hr3.js";import{r as C}from"./red-V1BWnntO.js";import{C as N,I as D}from"./Info-64JoXrqQ.js";import{C as L}from"./Check-BMhGDKD5.js";import{w as j}from"./white-DEREWbP3.js";import{g as S}from"./grey-B1SlOap1.js";const m="success",p="warning",x="info",u="error",P={main:$.m500,side:$.m100,bg:$.m50},H={[m]:{main:w.m500,side:w.m100,bg:w.m50},[p]:{main:T.m500,side:T.m100,bg:T.m50},[x]:P,[u]:{main:C.m500,side:C.m100,bg:C.m50}},Y=O`
  from {
    opacity: 0;
    transform: translateX(100%); /* Start off-screen to the right */
  }
  to {
    opacity: 1;
    transform: translateX(0); /* Move to its final position */
  }
`,G=O`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(100%); /* Move off-screen to the right */
  }
`,U=r.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 9999;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`,q=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({$bg:t})=>t};
  height: 4.8rem;
  width: 28rem;
  border-radius: 0.8rem;
  padding: 0.4rem 1.6rem;
  box-shadow: rgba(0, 0, 0, 0.14) 0px 3px 8px;
  transition: all 0.5s ease;

  &.fade-in {
    opacity: 1;
    animation: ${Y} 0.5s ease-out forwards; /* slide down + fade */
  }

  &.fade-out {
    opacity: 0;
    animation: ${G} 0.5s ease-in forwards; /* slide right */
  }

  @media screen and (max-width: 768px) {
    height: 3.6rem;
    width: 21rem;
    border-radius: 0.6rem;
    padding: 0.3rem 0.8rem;
  }
`,V=r.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${j};

  ${({type:t,$main:e})=>t===p?b`
          top: 48%;
          border-color: ${e} ${e} ${j} ${e};
          border-style: solid;
          border-width: 0 0.9rem 1.4rem 0.9rem;
          height: 0;
          width: 0;
        `:b`
          top: 50%;
          width: 1.8rem;
          height: 1.8rem;
          border-radius: 50%;
        `}

  @media screen and (max-width: 768px) {
    ${({type:t,$main:e})=>t===p?b`
            top: 48%;
            border-color: ${e} ${e} ${j} ${e};
            border-style: solid;
            border-width: 0 0.7rem 1.05rem 0.68rem;
            height: 0;
            width: 0;
          `:b`
            top: 50%;
            width: 1.35rem;
            height: 1.35rem;
            border-radius: 50%;
          `}
  }
`,X=r.div`
  position: relative;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: ${({$side:t})=>t};

  @media screen and (max-width: 768px) {
    width: 3rem;
    height: 3rem;
  }
`,B=r.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${({size:t})=>t}rem;
  height: ${({size:t})=>t}rem;

  @media screen and (max-width: 768px) {
    top: 42.8%;
    left: 42.8%;
    transform: translate(-42.8%, -42.8%);
    scale: 0.75;
  }
`,J=r.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: ${({$main:t})=>t};

  @media screen and (max-width: 768px) {
    width: 2.25rem;
    height: 2.25rem;
  }
`,K=r(N)`
  cursor: pointer;
`,Q=r.div`
  font-weight: 600;
  font-size: 1.2rem;
  color: ${S.m800};
`,Z=r.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  width: 21rem;

  @media screen and (max-width: 768px) {
    width: 15rem;
  }
`,tt=r.div`
  font-weight: 400;
  font-size: 1rem;
  color: ${S.m700};
`,et=(t,e)=>t===u?o.jsx(N,{size:16,color:e}):t===m?o.jsx(L,{size:18,color:e}):o.jsx(D,{size:22,color:e}),ot=t=>t===u?1:t===m?1.1:1.3,k=({type:t,$main:e,$side:n})=>{const i=et(t,e);return o.jsxs(X,{$side:n,children:[o.jsx(J,{$main:e}),o.jsx(V,{$main:e,type:t}),o.jsx(B,{size:ot(t),children:i})]})};k.__docgenInfo={description:"",methods:[],displayName:"Logo"};const E=({toasts:t})=>{const[e,n]=c.useState(t);c.useEffect(()=>{n(t)},[t]);const i=({type:h,id:d,title:g,subtitle:s,onExpire:a=v},y)=>c.createElement(M,{type:h,title:g,subtitle:s,key:d,onExpire:a});return o.jsx(U,{children:[...e].reverse().map(i)})},I=(t,e,n)=>()=>{t(!0),setTimeout(()=>{e(!1),n()},500)},M=({type:t=x,visible:e=!0,duration:n=5,onExpire:i=v,title:h,subtitle:d})=>{const[g,s]=c.useState(e),[a,y]=c.useState(!1);c.useEffect(()=>{s(e)},[e]),c.useEffect(()=>{const z=setTimeout(I(y,s,i),n*1e3-500);return()=>{clearTimeout(z)}},[n,I]);const{main:_,side:W,bg:A}=F(H,t,P);if(g)return o.jsxs(q,{$bg:A,className:`${a?"fade-out":"fade-in"}`,children:[o.jsx(k,{type:t,$main:_,$side:W}),o.jsxs(Z,{children:[o.jsx(Q,{children:h}),d&&o.jsx(tt,{children:d})]}),o.jsx(K,{size:20,color:S.m600,onClick:I(y,s,i)})]})};E.__docgenInfo={description:"",methods:[],displayName:"ToastContainer"};M.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{type:{defaultValue:{value:"'info'",computed:!1},required:!1},visible:{defaultValue:{value:"true",computed:!1},required:!1},duration:{defaultValue:{value:"5",computed:!1},required:!1},onExpire:{defaultValue:{value:`function noop() {
  // No operation performed.
}`,computed:!1},required:!1}}};const l=r.p`
  width: 100%;
  margin-top: 0.4rem;
  text-align: center;
  font-weight: 500;
  margin-bottom: 0;
  font-size: 1.2rem;
  color: ${S.m600};
`,R={[m]:{title:"Successfull",subtitle:"You have logged in successfully"},[x]:{title:"Info",subtitle:"You will be logged out in 10 minutes"},[p]:{title:"Attention",subtitle:"You will be logged out in 2 minutes"},[u]:{title:"Error",subtitle:"Please check the password"}},st=()=>{const[t,e]=c.useState([]),n=s=>{e(s)},i=()=>{e(s=>[...s,{id:`${m}-${Math.random().toString(16).slice(2)}`,type:m}])},h=()=>{e(s=>[...s,{id:`${u}-${Math.random().toString(16).slice(2)}`,type:u}])},d=()=>{e(s=>[...s,{id:`${p}-${Math.random().toString(16).slice(2)}`,type:p}])},g=()=>{e(s=>[...s,{id:`${x}-${Math.random().toString(16).slice(2)}`,type:x}])};return o.jsxs("div",{children:[o.jsx(E,{toasts:t.map(({id:s,type:a})=>({id:s,type:a,...R[a]})),setToasts:n}),o.jsx("button",{onClick:i,children:o.jsx(l,{children:"Success"})}),o.jsx("button",{onClick:h,children:o.jsx(l,{children:"Error"})}),o.jsx("button",{onClick:d,children:o.jsx(l,{children:"Warning"})}),o.jsx("button",{onClick:g,children:o.jsx(l,{children:"Info"})})]})},nt={title:"Organisms/Toast",component:st,parameters:{docs:{description:{component:"Toast types."},source:{language:"jsx",code:`
        import { ToastContainer } from 'meticulous-ui/components/Toast';

        export const AllToasts = () => {
          const [toasts, setToasts] = useState([]);

          const toastChangeHandler = (toasts) => {
            setToasts(toasts);
          };

          const popSuccess = () => {
            setToasts((toasts) => [
              ...toasts,
              { id: \`\${SUCCESS}-\${Math.random().toString(16).slice(2)}\`, type: SUCCESS },
            ]);
          };

          const popError = () => {
            setToasts((toasts) => [
              ...toasts,
              { id: \`\${ERROR}-\${Math.random().toString(16).slice(2)}\`, type: ERROR },
            ]);
          };

          const popWarning = () => {
            setToasts((toasts) => [
              ...toasts,
              { id: \`\${WARNING}-\${Math.random().toString(16).slice(2)}\`, type: WARNING },
            ]);
          };

          const popInfo = () => {
            setToasts((toasts) => [
              ...toasts,
              { id: \`\${INFO}-\${Math.random().toString(16).slice(2)}\`, type: INFO },
            ]);
          };

          return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <ToastContainer
                toasts={toasts.map(({ id, type }) => ({
                  id,
                  type,
                  ...TYPE_INFO_MAP[type], // title, subtitle
                }))}
                setToasts={toastChangeHandler}
              />
              <button style={{ width: '8rem', height: '2.4rem' }} onClick={popSuccess}>
                <P>Success</P>
              </button>
              <button style={{ width: '8rem', height: '2.4rem' }} onClick={popError}>
                <P>Error</P>
              </button>
              <button style={{ width: '8rem', height: '2.4rem' }} onClick={popWarning}>
                <P>Warning</P>
              </button>
              <button style={{ width: '8rem', height: '2.4rem' }} onClick={popInfo}>
                <P>Info</P>
              </button>
            </div>
          );
        };
        `}},controls:{disable:!0},actions:{disable:!0}}},f=()=>{const[t,e]=c.useState([]),n=s=>{e(s)},i=()=>{e(s=>[...s,{id:`${m}-${Math.random().toString(16).slice(2)}`,type:m}])},h=()=>{e(s=>[...s,{id:`${u}-${Math.random().toString(16).slice(2)}`,type:u}])},d=()=>{e(s=>[...s,{id:`${p}-${Math.random().toString(16).slice(2)}`,type:p}])},g=()=>{e(s=>[...s,{id:`${x}-${Math.random().toString(16).slice(2)}`,type:x}])};return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.8rem"},children:[o.jsx(E,{toasts:t.map(({id:s,type:a})=>({id:s,type:a,...R[a]})),setToasts:n}),o.jsx("button",{style:{width:"8rem",height:"2.4rem"},onClick:i,children:o.jsx(l,{children:"Success"})}),o.jsx("button",{style:{width:"8rem",height:"2.4rem"},onClick:h,children:o.jsx(l,{children:"Error"})}),o.jsx("button",{style:{width:"8rem",height:"2.4rem"},onClick:d,children:o.jsx(l,{children:"Warning"})}),o.jsx("button",{style:{width:"8rem",height:"2.4rem"},onClick:g,children:o.jsx(l,{children:"Info"})})]})};f.storyName="Toasts";f.__docgenInfo={description:"",methods:[],displayName:"Default"};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  // import { ToastContainer } from '../src/components/Toast/Toast';

  const [toasts, setToasts] = useState([]);
  const toastChangeHandler = toasts => {
    setToasts(toasts);
  };
  const popSuccess = () => {
    setToasts(toasts => [...toasts, {
      id: \`\${SUCCESS}-\${Math.random().toString(16).slice(2)}\`,
      type: SUCCESS
    }]);
  };
  const popError = () => {
    setToasts(toasts => [...toasts, {
      id: \`\${ERROR}-\${Math.random().toString(16).slice(2)}\`,
      type: ERROR
    }]);
  };
  const popWarning = () => {
    setToasts(toasts => [...toasts, {
      id: \`\${WARNING}-\${Math.random().toString(16).slice(2)}\`,
      type: WARNING
    }]);
  };
  const popInfo = () => {
    setToasts(toasts => [...toasts, {
      id: \`\${INFO}-\${Math.random().toString(16).slice(2)}\`,
      type: INFO
    }]);
  };
  return <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '0.8rem'
  }}>
      <ToastContainer toasts={toasts.map(({
      id,
      type
    }) => ({
      id,
      type,
      ...TYPE_INFO_MAP[type] // title, subtitle
    }))} setToasts={toastChangeHandler} />
      <button style={{
      width: '8rem',
      height: '2.4rem'
    }} onClick={popSuccess}>
        <P>Success</P>
      </button>
      <button style={{
      width: '8rem',
      height: '2.4rem'
    }} onClick={popError}>
        <P>Error</P>
      </button>
      <button style={{
      width: '8rem',
      height: '2.4rem'
    }} onClick={popWarning}>
        <P>Warning</P>
      </button>
      <button style={{
      width: '8rem',
      height: '2.4rem'
    }} onClick={popInfo}>
        <P>Info</P>
      </button>
    </div>;
}`,...f.parameters?.docs?.source}}};const rt=["Default"],xt=Object.freeze(Object.defineProperty({__proto__:null,Default:f,__namedExportsOrder:rt,default:nt},Symbol.toStringTag,{value:"Module"}));export{f as D,xt as T};
