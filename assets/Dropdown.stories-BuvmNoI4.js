import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as a}from"./iframe-BpIy2Msd.js";import{g as pe}from"./get-CcP2FhCm.js";import{g as d}from"./grey-B1SlOap1.js";import{b as N}from"./orange-DWED-Hr3.js";import{w as R}from"./white-DEREWbP3.js";import{d as p,l as F,m as Y}from"./styled-components.browser.esm-B1loR-YP.js";import{P as K}from"./P-l0kMmFEW.js";import{c as me}from"./index-DgVUttyp.js";import{S as G}from"./Spinner-_WEcMrW5.js";import{C as he,S as fe}from"./Search-D0UAtl3E.js";import{H as ge}from"./H6-DKDnNK8e.js";const ve=p.div`
  width: ${({$width:e})=>e};
  background-color: ${({$isSelected:e,$defaultColor:o,$isHighlighted:r,$hoverColor:l,$selectedColor:i})=>e?i:r?l:o};

  cursor: ${({$isSelected:e,$isDisabled:o})=>e?"auto":o?"not-allowed":"pointer"};
  padding: 0.6rem 0 0.8rem 1rem;
  margin-top: 0.1rem;
  pointer-events: ${({$isDisabled:e})=>e?"none":"auto"};

  &:active {
    background-color: ${({$isSelected:e,$activeColor:o,$selectedColor:r})=>e?r:o};
  }
`,be=p(K)`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: calc(${({$width:e})=>e} - 2rem);
`,Se=({isSelected:e,isDisabled:o})=>e?d.m700:o?d.m300:d.m500,Q=({value:e,label:o,width:r="20rem",isSelected:l,defaultColor:i=R,selectedColor:$=N.m200,hoverColor:D=N.m50,activeColor:O=N.m100,isHighlighted:L,size:f="1.2rem",onSelect:h,isDisabled:u,onMouseEnter:S})=>{const v=()=>{u||h(e)};return s.jsx(ve,{$isSelected:l,$width:r,$defaultColor:i,$selectedColor:$,$hoverColor:D,$activeColor:O,$isDisabled:u,$isHighlighted:L,onClick:v,onMouseEnter:S,title:o,children:s.jsx(be,{size:f,color:Se({isSelected:l,isDisabled:u}),$width:r,children:o})})};Q.__docgenInfo={description:"",methods:[],displayName:"MenuItem",props:{width:{defaultValue:{value:"'20rem'",computed:!1},required:!1},defaultColor:{defaultValue:{value:"'#FFFFFF'",computed:!1},required:!1},selectedColor:{defaultValue:{value:"'#90CAF9'",computed:!1},required:!1},hoverColor:{defaultValue:{value:"'#E3F2FD'",computed:!1},required:!1},activeColor:{defaultValue:{value:"'#BBDEFB'",computed:!1},required:!1},size:{defaultValue:{value:"'1.2rem'",computed:!1},required:!1}}};const we=d.m500,xe=Y`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
`,ye=Y`
  from {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(0deg);
  }
`,Ce=p.div`
  max-width: ${({$width:e})=>e};
  position: relative;
  outline: none;

  ${({$isLoading:e})=>e&&F`
      pointer-events: none;
      opacity: 0.8;
    `}

  ${({$isDisabled:e})=>e&&F`
      pointer-events: none;
    `}
`,$e=p.div`
  height: 2rem;
  width: ${({$width:e})=>e};
  border-radius: 0.6rem;
  border: ${({$isOpen:e,$border:o})=>e?`2px solid ${o}`:`1px solid ${we}`};
  padding: 0.4rem 0.6rem 0.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`,De=p(K)`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: calc(${({$width:e})=>e} - 2rem);
  pointer-events: none;
`,Oe=p(he)`
  animation: ${({$isOpen:e})=>e?xe:ye} 0.15s linear;
  transform: rotate(${({$isOpen:e})=>e?180:0}deg);
`,Le=p.div`
  border: 1px solid ${d.m700};
  width: calc(${({$width:e})=>e} + 1rem);
  /* Remove overflow: auto from here */
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1000;
  background-color: ${R};
  left: 0.15rem;
  max-height: 0;
  transition: max-height 0.15s ease-out;
  opacity: 0;
  overflow: hidden; /* Keep this hidden so the collapse works */

  ${({$isOpen:e})=>e&&F`
      max-height: ${({$height:o})=>o};
      opacity: 1;
    `};

  ${({$top:e})=>e?F`
          bottom: 100%;
          flex-direction: column-reverse; /* Search at bottom if menu opens upward */
          border-top-right-radius: 0.6rem;
          border-top-left-radius: 0.6rem;
          margin-bottom: 0.1rem;
        `:F`
          top: 100%;
          border-bottom-right-radius: 0.6rem;
          border-bottom-left-radius: 0.6rem;
          margin-top: 0.1rem;
        `}
`,ke=p.div`
  overflow-y: auto;
  flex: 1;
`,Ie=p.div`
  position: absolute;
  top: 0.7rem;
  right: 1rem;
`,Pe=p.div`
  position: relative;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${d.m300};
  background: ${R};

  &:focus-within {
    border-bottom-color: ${d.m500};
  }
`,Ve=p.input`
  width: 100%;
  box-sizing: border-box;
  border: none;
  /* Add left padding to make room for the icon */
  padding: 0.5rem 0.75rem 0.5rem 0;
  font-size: 1.2rem;
  color: ${d.m700};
  background: transparent;
  outline: none;

  &::placeholder {
    color: ${d.m400};
  }
`,je=p(fe)`
  margin: 0 0.8rem;
`,Me=p.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  min-height: 1rem;
  width: 100%;
`,Ee=e=>{if(typeof e!="string")return e;if(e.endsWith("px"))return parseFloat(e);if(e.endsWith("rem")){const o=parseFloat(e),r=parseFloat(getComputedStyle(document.documentElement).fontSize);return o*r}return parseFloat(e)},b=({options:e,onChange:o,value:r,width:l="20rem",menuHeight:i="20rem",placeholder:$,theme:D="blue",isLoading:O,isDisabled:L,loaderColor:f,searchable:h=!1,onLoadMore:u,hasMore:S=!1,isLoadingMore:v=!1,searchPh:U="Search..."})=>{const[c,A]=a.useState(!1),[J,X]=a.useState("bottom"),[I,q]=a.useState(""),[w,k]=a.useState(-1),P=a.useRef(null),V=a.useRef(null),B=a.useRef(null),_=a.useRef(null),Z=a.useRef(!0),ee=()=>A(t=>!t),H=t=>{t!==r&&(o(t),A(!1))},g=a.useMemo(()=>{if(!h||!I.trim())return e;const t=I.toLowerCase();return e.filter(({label:n})=>n.toLowerCase().includes(t))},[e,I,h]);a.useEffect(()=>{if(c){const t=g.findIndex(n=>n.value===r);if(t!==-1&&!g[t].disabled)k(t);else{const n=g.findIndex(m=>!m.disabled);k(n)}}else q(""),k(-1)},[c,I,g,r]),a.useEffect(()=>{if(c&&w!==-1&&V.current){const t=V.current.children[w];t&&t.scrollIntoView({block:"nearest",behavior:"auto"})}},[w,c]),a.useEffect(()=>{c&&h&&B.current&&B.current.focus()},[c,h]),a.useEffect(()=>{c||(Z.current=!0)},[c]),a.useEffect(()=>{const t=n=>{P.current&&!P.current.contains(n.target)&&A(!1)};return document.addEventListener("mousedown",t),()=>document.removeEventListener("mousedown",t)},[]),a.useLayoutEffect(()=>{if(c&&V.current&&P.current){const t=P.current.getBoundingClientRect(),n=window.innerHeight,m=Ee(i),x=n-t.bottom;X(x<m+8&&t.top>x?"top":"bottom")}},[c,i]);const te=t=>{let n=t+1;for(;n<g.length;){if(!g[n].disabled)return n;n++}return t},oe=t=>{let n=t-1;for(;n>=0;){if(!g[n].disabled)return n;n--}return t},ne=t=>{if(c)switch(t.key){case"ArrowDown":t.preventDefault();const n=te(w);n===w&&S&&!v&&u?.(),k(n);break;case"ArrowUp":t.preventDefault(),k(x=>oe(x));break;case"Enter":t.preventDefault();const m=g[w];m&&!m.disabled&&H(m.value);break;case"Escape":A(!1);break}},z=a.useCallback(()=>{S&&!v&&u&&u()},[S,v,u]);a.useEffect(()=>{const t=_.current;if(!t||!u||!S)return;const n=new IntersectionObserver(([m])=>{m.isIntersecting&&!v&&z()},{root:V.current,threshold:.1,rootMargin:"20px"});return n.observe(t),()=>n.disconnect()},[z,u,S,v]);const{m50:re,m100:ae,m200:se,m500:le}=pe(me,D,N),ie=(t,n)=>()=>!t&&k(n),ce=({value:t,label:n,disabled:m},x)=>a.createElement(Q,{value:t,label:n,isDisabled:m,onSelect:H,onMouseEnter:ie(m,x),isSelected:t===r,isHighlighted:x===w,key:t,width:l,selectedColor:se,hoverColor:re,activeColor:ae}),ue=t=>{q(t.target.value)},de=t=>{t.stopPropagation()};return s.jsxs(Ce,{ref:P,$width:l,tabIndex:L?-1:0,onKeyDown:ne,$isLoading:O,$isDisabled:L,children:[s.jsxs($e,{$width:l,onClick:ee,$isOpen:c,$border:le,children:[s.jsx(De,{$width:l,color:r?d.m700:d.m500,size:"1.2rem",children:r?e.find(({value:t})=>r===t)?.label:$}),s.jsx(Oe,{color:d.m500,size:22,$isOpen:c})]}),s.jsxs(Le,{$isOpen:c,$width:l,$height:i,$top:J==="top",children:[h&&s.jsxs(Pe,{onClick:de,children:[s.jsx(je,{size:20,color:d.m600}),s.jsx(Ve,{ref:B,value:I,onChange:ue,placeholder:U})]}),s.jsxs(ke,{ref:V,children:[g.map(ce),u&&s.jsx(Me,{ref:_,children:v&&s.jsx(G,{size:"small",color:f})})]})]}),O&&s.jsx(Ie,{children:s.jsx(G,{size:"small",color:f})})]})};b.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{width:{defaultValue:{value:"'20rem'",computed:!1},required:!1},menuHeight:{defaultValue:{value:"'20rem'",computed:!1},required:!1},theme:{defaultValue:{value:"'blue'",computed:!1},required:!1},searchable:{defaultValue:{value:"false",computed:!1},required:!1},hasMore:{defaultValue:{value:"false",computed:!1},required:!1},isLoadingMore:{defaultValue:{value:"false",computed:!1},required:!1},searchPh:{defaultValue:{value:"'Search...'",computed:!1},required:!1}}};const C=[{label:"New York",value:"New York"},{label:"Tokyo",value:"Tokyo"},{label:"Los Angeles",value:"Los Angeles"},{label:"San Francisco",value:"San Francisco"},{label:"Seoul",value:"Seoul"},{label:"Paris",value:"Paris"},{label:"Chicago",value:"Chicago"},{label:"Pyongyang",value:"Pyongyang",disabled:!0},{label:"Shanghai",value:"Shanghai"},{label:"London",value:"London"},{label:"Delhi",value:"Delhi"}],Te={title:"Atomic Components/Dropdown",component:b,parameters:{docs:{description:{component:"A Dropdown component to select one option out of many."},source:{language:"jsx",code:`
          import Dropdown from 'meticulous-ui/components/Dropdown';

          const OPTIONS = [
            { label: 'New York', value: 'New York' },
            { label: 'Tokyo', value: 'Tokyo' },
            { label: 'Los Angeles', value: 'Los Angeles' },
            { label: 'San Francisco', value: 'San Francisco' },
            { label: 'Seoul', value: 'Seoul' },
            { label: 'Paris', value: 'Paris' },
            { label: 'Chicago', value: 'Chicago' },
            { label: 'Pyongyang', value: 'Pyongyang', disabled: true },
            { label: 'Shanghai', value: 'Shanghai' },
            { label: 'London', value: 'London' },
            { label: 'Delhi', value: 'Delhi' },
          ];

          const DropdownWrapper = () => {
            const [value, setValue] = useState(null);

            const onChange = (v) => {
              setValue(v);
            };

            return (
              <Dropdown onChange={onChange} value={value} options={OPTIONS} placeholder='Select a value' />
            );
          };
        `}}},argTypes:{theme:{control:"select",options:["amber","blue","brown","cyan","deepPurple","grey","indigo","lightGreen","orange","purple","teal","white","black","blueGray","cider","deepOrange","green","lightBlue","lime","pink","red","violet","yellow"]},loaderColor:{control:"select",options:["amber","blue","brown","cyan","deepPurple","grey","indigo","lightGreen","orange","purple","teal","white","black","blueGray","cider","deepOrange","green","lightBlue","lime","pink","red","violet","yellow"]},isLoading:{control:"select",options:[!1,!0]},isDisabled:{control:"select",options:[!1,!0]},placeholder:{control:"text"},searchPh:{control:"text"},searchable:{control:"select",options:[!1,!0]},hasMore:{control:"select",options:[!1,!0]},isLoadingMore:{control:"select",options:[!1,!0]}}},We=({theme:e})=>{const[o,r]=a.useState(null),l=i=>{r(i)};return s.jsx(b,{onChange:l,value:o,options:C,placeholder:"Select a value",theme:e})},y=e=>{const[o,r]=a.useState(null),l=i=>{r(i)};return s.jsx(b,{...e,onChange:l,value:o,options:C})},j={name:"With Disabled Options",parameters:{controls:{disable:!0},actions:{disable:!0}},render:()=>{const[e,o]=a.useState(null),r=l=>{o(l)};return s.jsx(b,{onChange:r,value:e,options:C.map((l,i)=>({...l,disabled:i>3})),placeholder:"Select a value"})}},M={name:"With Search",parameters:{controls:{disable:!0},actions:{disable:!0}},render:()=>{const[e,o]=a.useState(null),r=l=>{o(l)};return s.jsx(b,{onChange:r,value:e,searchable:!0,options:C,placeholder:"Select a value"})}},E={name:"With Async Load More",render:()=>{const[e,o]=a.useState(C.slice(0,10)),[r,l]=a.useState(null),[i,$]=a.useState(!1),[D,O]=a.useState(!0),L=()=>{i||!D||($(!0),setTimeout(()=>{const f=e.length,h=C.slice(f,f+10);h.length>0?o(u=>[...u,...h]):O(!1),$(!1)},1500))};return s.jsx(b,{placeholder:"Search and scroll down...",searchable:!0,value:r,onChange:f=>l(f),options:e,onLoadMore:L,hasMore:D,isLoadingMore:i,loaderColor:"#007bff"})}},T={name:"Loading State",parameters:{controls:{disable:!0},actions:{disable:!0}},render:()=>{const[e,o]=a.useState(null),r=l=>{o(l)};return s.jsx(b,{onChange:r,value:e,options:C,placeholder:"Select a value",isLoading:!0})}},W={name:"Different Themes",parameters:{controls:{disable:!0},actions:{disable:!0}},render:()=>s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:["amber","blue","brown","cyan","deepPurple","grey","indigo","lightGreen","orange","purple","teal","black","blueGray","cider","deepOrange","green","lightBlue","lime","pink","red","violet","yellow"].map(e=>s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"2rem"},children:[s.jsx(ge,{children:e}),s.jsx(We,{theme:e})]},e))})};y.args={theme:"blue",width:"20rem",menuHeight:"20rem",loaderColor:"green",isLoading:!1,isDisabled:!1,placeholder:"Select a value",searchable:!1,hasMore:!1,isLoadingMore:!1,searchPh:"Search..."};y.__docgenInfo={description:"",methods:[],displayName:"Default"};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => {
  const [value, setValue] = useState(null);
  const onChange = v => {
    setValue(v);
  };
  return <Dropdown {...args} onChange={onChange} value={value} options={OPTIONS} />;
}`,...y.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'With Disabled Options',
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    }
  },
  render: () => {
    const [value, setValue] = useState(null);
    const onChange = v => {
      setValue(v);
    };
    return <Dropdown onChange={onChange} value={value} options={OPTIONS.map((v, i) => ({
      ...v,
      disabled: i > 3
    }))} placeholder='Select a value' />;
  }
}`,...j.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'With Search',
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    }
  },
  render: () => {
    const [value, setValue] = useState(null);
    const onChange = v => {
      setValue(v);
    };
    return <Dropdown onChange={onChange} value={value} searchable options={OPTIONS} placeholder='Select a value' />;
  }
}`,...M.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'With Async Load More',
  render: () => {
    // 1. Manage options and loading state locally for the demo
    const [options, setOptions] = useState(OPTIONS.slice(0, 10)); // Start with first 10
    const [value, setValue] = useState(null);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const handleLoadMore = () => {
      // Prevent multiple calls if already loading or no more data
      if (isLoadingMore || !hasMore) return;
      setIsLoadingMore(true);

      // Simulate an API call delay
      setTimeout(() => {
        const currentLength = options.length;
        const nextBatch = OPTIONS.slice(currentLength, currentLength + 10);
        if (nextBatch.length > 0) {
          setOptions(prev => [...prev, ...nextBatch]);
        } else {
          setHasMore(false);
        }
        setIsLoadingMore(false);
      }, 1500); // 1.5s delay to see the spinner
    };
    return <Dropdown placeholder='Search and scroll down...' searchable value={value} onChange={v => setValue(v)} options={options} onLoadMore={handleLoadMore} hasMore={hasMore} isLoadingMore={isLoadingMore} loaderColor='#007bff' // Match your theme
    />;
  }
}`,...E.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Loading State',
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    }
  },
  render: () => {
    const [value, setValue] = useState(null);
    const onChange = v => {
      setValue(v);
    };
    return <Dropdown onChange={onChange} value={value} options={OPTIONS} placeholder='Select a value' isLoading />;
  }
}`,...T.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: 'Different Themes',
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
    flexDirection: 'column',
    gap: '1rem'
  }}>
      {['amber', 'blue', 'brown', 'cyan', 'deepPurple', 'grey', 'indigo', 'lightGreen', 'orange', 'purple', 'teal', 'black', 'blueGray', 'cider', 'deepOrange', 'green', 'lightBlue', 'lime', 'pink', 'red', 'violet', 'yellow'].map(clr => <div key={clr} style={{
      display: 'flex',
      alignItems: 'center',
      gap: '2rem'
    }}>
          <H6>{clr}</H6>
          <DropdownThemeWrapper theme={clr} />
        </div>)}
    </div>
}`,...W.parameters?.docs?.source}}};const Fe=["Default","WithDisabledOptions","WithSearch","WithAsyncLoadMore","LoadingState","Themes"],Je=Object.freeze(Object.defineProperty({__proto__:null,Default:y,LoadingState:T,Themes:W,WithAsyncLoadMore:E,WithDisabledOptions:j,WithSearch:M,__namedExportsOrder:Fe,default:Te},Symbol.toStringTag,{value:"Module"}));export{Je as D,y as a};
