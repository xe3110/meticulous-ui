import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as u}from"./iframe-v-kvBfBy.js";import{g as W}from"./get-CcP2FhCm.js";import{a as G,e as X,c as J}from"./_baseGet-BEuax5qx.js";import{i as Q,a as ee}from"./isArrayLike-BU0ZawND.js";import{R as Z}from"./Ripple-Bcm9kNc8.js";import{l as k,d as p}from"./styled-components.browser.esm-DOqSrTHP.js";import{C as re,a as ne}from"./ChevronRight-ZUkN7jq_.js";import{g as V}from"./grey-B1SlOap1.js";import{w as T}from"./white-DEREWbP3.js";import{b as te}from"./black-D_AkG8W8.js";import{c as ae}from"./index-DgVUttyp.js";import{t as se}from"./yellow-6mWc-Jci.js";var oe=Math.ceil,ie=Math.max;function ce(e,r,n,s){for(var a=-1,l=ie(oe((r-e)/(n||1)),0),o=Array(l);l--;)o[++a]=e,e+=n;return o}function me(e,r,n){if(!G(n))return!1;var s=typeof r;return(s=="number"?Q(n)&&ee(r,n.length):s=="string"&&r in n)?X(n[r],e):!1}var ue=/\s/;function le(e){for(var r=e.length;r--&&ue.test(e.charAt(r)););return r}var ge=/^\s+/;function de(e){return e&&e.slice(0,le(e)+1).replace(ge,"")}var F=NaN,be=/^[-+]0x[0-9a-f]+$/i,pe=/^0b[01]+$/i,Pe=/^0o[0-7]+$/i,Ne=parseInt;function fe(e){if(typeof e=="number")return e;if(J(e))return F;if(G(e)){var r=typeof e.valueOf=="function"?e.valueOf():e;e=G(r)?r+"":r}if(typeof e!="string")return e===0?e:+e;e=de(e);var n=pe.test(e);return n||Pe.test(e)?Ne(e.slice(2),n?2:8):be.test(e)?F:+e}var U=1/0,he=17976931348623157e292;function L(e){if(!e)return e===0?e:0;if(e=fe(e),e===U||e===-U){var r=e<0?-1:1;return r*he}return e===e?e:0}function Se(e){return function(r,n,s){return s&&typeof s!="number"&&me(r,n,s)&&(n=s=void 0),r=L(r),n===void 0?(n=r,r=0):n=L(n),s=s===void 0?r<n?1:-1:L(s),ce(r,n,s)}}var A=Se();const xe=1.9,_e=2.6,ye=3.1,Ee=1,Ie=1.2,je=1.4,De=18,Me=19,ve=20,O="small",R="medium",B="large",K={[O]:xe,[R]:_e,[B]:ye},Re={[O]:Ee,[R]:Ie,[B]:je},Le={[O]:De,[R]:Me,[B]:ve},q="selected_bg",Y="not_selected_bg",H="active_not_selected_bg",C=e=>({$shades:r})=>{if(["#FFFFFF"].includes(r))return te.m900;if(e===q)return r.m500;if(e===Y)return r.m50;if(e===H)return r.m100},$=p.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  min-width: 100%;
  width: 100%;

  ${({$isDisabled:e})=>e&&k`
      pointer-events: none;
      opacity: 0.4;
    `};
`,Ae=p.div`
  height: ${({$individualRemSize:e})=>`${e}rem`};
  width: ${({$individualRemSize:e})=>`${e}rem`};
  border-radius: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: ${({$fontRemSize:e})=>e}rem;
  ${({$isSelected:e})=>e?k`
          cursor: auto;
          color: ${T};
          background-color: ${C(q)};
        `:k`
          cursor: pointer;
          color: ${V.m500};

          &:hover {
            background-color: ${C(Y)};
          }

          &:active {
            background-color: ${C(H)};
            color: ${T};
          }
        `}
`,z=p.p`
  color: ${V.m500};
`,Ce=p(re)`
  cursor: pointer;
`,$e=p(ne)`
  cursor: pointer;
`,w=p.div`
  min-width: ${({size:e})=>e};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,P=({size:e,selected:r,shades:n,changePage:s})=>a=>{const l=K[e],o=Re[e],g=n,d=()=>{s(a)};return t.jsx(Ae,{"data-testid":r===a?"current-page":`test-${a}`,$isSelected:r===a,onClick:d,$shades:g,$individualRemSize:l,$fontRemSize:o,children:a},`page_${a}`)},D=()=>t.jsxs(t.Fragment,{children:[t.jsx(z,{children:"."}),t.jsx(z,{children:"."}),t.jsx(z,{children:"."})]}),M=({iconSize:e,shades:r,setPrevPage:n})=>t.jsx(Z,{rippleColor:r.m50,children:t.jsx(Ce,{size:e,onClick:n})}),v=({iconSize:e,shades:r,setNextPage:n})=>t.jsx(Z,{rippleColor:r.m50,children:t.jsx($e,{size:e,onClick:n})});D.__docgenInfo={description:"",methods:[],displayName:"renderThreeDots"};M.__docgenInfo={description:"",methods:[],displayName:"PrevArrow"};v.__docgenInfo={description:"",methods:[],displayName:"NextArrow"};const c=({pageNumber:e,setPageNumber:r,totalPages:n,theme:s="lime",size:a=R,isDisabled:l=!1})=>{const o=S=>{S!==e&&r(S)},g=()=>{e>1&&o(e-1)},d=()=>{e<n&&o(e+1)},f=S=>{["ArrowLeft","ArrowUp"].includes(S.code)&&g(),["ArrowRight","ArrowDown"].includes(S.code)&&d()},i=W(ae,s,se),h=K[a],m=Le[a];return n<=7?t.jsxs($,{onKeyDown:f,tabIndex:"0",$isDisabled:l,children:[t.jsx(M,{iconSize:m,shades:i,setPrevPage:g}),t.jsx(w,{size:`${n*h}rem`,children:A(1,n+1).map(P({size:a,selected:e,shades:i,changePage:o}))}),t.jsx(v,{iconSize:m,shades:i,setNextPage:d})]}):n<10||e<4||e>n-3&&e<=n?t.jsxs($,{onKeyDown:f,tabIndex:"0",$isDisabled:l,children:[t.jsx(M,{iconSize:m,shades:i,setPrevPage:g}),t.jsxs(w,{size:`${9*h}rem`,children:[A(1,5).map(P({size:a,selected:e,shades:i,changePage:o})),D(),[n-3,n-2,n-1,n].map(P({size:a,selected:e,shades:i,changePage:o}))]}),t.jsx(v,{iconSize:m,shades:i,setNextPage:d})]}):t.jsxs($,{onKeyDown:f,tabIndex:"0",$isDisabled:l,children:[t.jsx(M,{iconSize:m,shades:i,setPrevPage:g}),t.jsxs(w,{size:`${9*h}rem`,children:[A(1,3).map(P({size:a,selected:e,shades:i,changePage:o})),D(),[e-1,e,e+1].map(P({size:a,selected:e,shades:i,changePage:o})),D(),[n-1,n].map(P({size:a,selected:e,shades:i,changePage:o}))]}),t.jsx(v,{iconSize:m,shades:i,setNextPage:d})]})};c.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{theme:{defaultValue:{value:"'lime'",computed:!1},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},required:!1},isDisabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const ze={title:"Organisms/Pagination",component:c,parameters:{docs:{description:{component:"A simple pagination component to navigate through pages."},source:{language:"jsx",code:`
          import Pagination from 'meticulous-ui/components/Pagination';

          function Example() {
            const [page, setPage] = useState(1);

            return (
              <Pagination
                totalPages={10}
                pageNumber={page}
                setPageNumber={setPage}
                theme="blue"
                size="medium"
              />
            );
          }
        `}}},argTypes:{theme:{control:"select",options:["amber","blue","brown","cyan","deepPurple","grey","indigo","lightGreen","orange","purple","teal","white","black","blueGray","cider","deepOrange","green","lightBlue","lime","pink","red","violet","yellow"]},size:{control:"select",options:["small","medium","large"]},totalPages:{control:{type:"number"},description:"Mandatory numeric prop representing total pages",defaultValue:0},pageNumber:{control:{type:"number"},description:"Mandatory numeric prop representing current page",defaultValue:0},isDisabled:{control:{type:"boolean"},description:"Boolean prop, if true then disabled",defaultValue:!1},setPageNumber:{action:"pageChanged"}}},b=e=>{const[r,n]=u.useState(e.pageNumber||1),s=a=>{n(a),e.setPageNumber(a)};return t.jsx(c,{...e,pageNumber:r,setPageNumber:s})},x={name:"Many Pages",parameters:{controls:{disable:!0},actions:{disable:!0}},render:()=>{const[e,r]=u.useState(1);return t.jsx(c,{pageNumber:e,totalPages:50,setPageNumber:r})}},_={name:"Different Colors",parameters:{controls:{disable:!0},actions:{disable:!0}},render:()=>{const[e,r]=u.useState(1),[n,s]=u.useState(1),[a,l]=u.useState(1),[o,g]=u.useState(1),[d,f]=u.useState(1),[i,h]=u.useState(1),m=50;return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[t.jsxs("div",{children:[t.jsx(N,{children:"RED"}),t.jsx(c,{totalPages:m,pageNumber:e,setPageNumber:r,theme:"red"})]}),t.jsxs("div",{children:[t.jsx(N,{children:"BLUE"}),t.jsx(c,{totalPages:m,pageNumber:n,setPageNumber:s,theme:"blue"})]}),t.jsxs("div",{children:[t.jsx(N,{children:"GREEN"}),t.jsx(c,{totalPages:m,pageNumber:a,setPageNumber:l,theme:"green"})]}),t.jsxs("div",{children:[t.jsx(N,{children:"PURPLE"}),t.jsx(c,{totalPages:m,pageNumber:o,setPageNumber:g,theme:"purple"})]}),t.jsxs("div",{children:[t.jsx(N,{children:"GREY"}),t.jsx(c,{totalPages:m,pageNumber:d,setPageNumber:f,theme:"grey"})]}),t.jsxs("div",{children:[t.jsx(N,{children:"BLACK"}),t.jsx(c,{totalPages:m,pageNumber:i,setPageNumber:h,theme:"black"})]})]})}},y={name:"Small Size",parameters:{controls:{disable:!0},actions:{disable:!0}},render:()=>{const[e,r]=u.useState(1);return t.jsx(c,{pageNumber:e,totalPages:10,setPageNumber:r,size:"small"})}},E={name:"Medium Size",parameters:{controls:{disable:!0},actions:{disable:!0}},render:()=>{const[e,r]=u.useState(1);return t.jsx(c,{pageNumber:e,totalPages:10,setPageNumber:r,size:"medium"})}},I={name:"Large Size",parameters:{controls:{disable:!0},actions:{disable:!0}},render:()=>{const[e,r]=u.useState(1);return t.jsx(c,{pageNumber:e,totalPages:10,setPageNumber:r,size:"large"})}},j={name:"Disabled",parameters:{controls:{disable:!0},actions:{disable:!0}},render:()=>{const[e,r]=u.useState(1);return t.jsx(c,{pageNumber:e,totalPages:10,setPageNumber:r,size:"large",isDisabled:!0})}},N=p.p`
  width: 100%;
  text-align: center;
  margin-top: 1.6rem;
  font-weight: 600;
`;b.args={theme:"blue",size:"medium",totalPages:10,pageNumber:1};b.__docgenInfo={description:"",methods:[],displayName:"Default"};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => {
  const [pageNumber, setPageNumber] = useState(args.pageNumber || 1);
  const handlePageChange = num => {
    setPageNumber(num);
    args.setPageNumber(num);
  };
  return <Pagination {...args} pageNumber={pageNumber} setPageNumber={handlePageChange} />;
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Many Pages',
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    }
  },
  render: () => {
    const [pageNumber, setPageNumber] = useState(1);
    const totalPages = 50;
    return <Pagination {...{
      pageNumber,
      totalPages,
      setPageNumber
    }} />;
  }
}`,...x.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
    const [rPageNumber, setRPageNumber] = useState(1);
    const [bPageNumber, setBPageNumber] = useState(1);
    const [greenPageNumber, setGreenPageNumber] = useState(1);
    const [pPageNumber, setPPageNumber] = useState(1);
    const [greyPageNumber, setGreyPageNumber] = useState(1);
    const [blackPageNumber, setBlackPageNumber] = useState(1);
    const totalPages = 50;
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>
        <div>
          <P>RED</P>
          <Pagination {...{
          totalPages
        }} pageNumber={rPageNumber} setPageNumber={setRPageNumber} theme='red' />
        </div>
        <div>
          <P>BLUE</P>
          <Pagination {...{
          totalPages
        }} pageNumber={bPageNumber} setPageNumber={setBPageNumber} theme='blue' />
        </div>
        <div>
          <P>GREEN</P>
          <Pagination {...{
          totalPages
        }} pageNumber={greenPageNumber} setPageNumber={setGreenPageNumber} theme='green' />
        </div>
        <div>
          <P>PURPLE</P>
          <Pagination {...{
          totalPages
        }} pageNumber={pPageNumber} setPageNumber={setPPageNumber} theme='purple' />
        </div>
        <div>
          <P>GREY</P>
          <Pagination {...{
          totalPages
        }} pageNumber={greyPageNumber} setPageNumber={setGreyPageNumber} theme='grey' />
        </div>
        <div>
          <P>BLACK</P>
          <Pagination {...{
          totalPages
        }} pageNumber={blackPageNumber} setPageNumber={setBlackPageNumber} theme='black' />
        </div>
      </div>;
  }
}`,..._.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Small Size',
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    }
  },
  render: () => {
    const [pageNumber, setPageNumber] = useState(1);
    const totalPages = 10;
    return <Pagination {...{
      pageNumber,
      totalPages,
      setPageNumber
    }} size='small' />;
  }
}`,...y.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Medium Size',
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    }
  },
  render: () => {
    const [pageNumber, setPageNumber] = useState(1);
    const totalPages = 10;
    return <Pagination {...{
      pageNumber,
      totalPages,
      setPageNumber
    }} size='medium' />;
  }
}`,...E.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'Large Size',
  parameters: {
    controls: {
      disable: true
    },
    actions: {
      disable: true
    }
  },
  render: () => {
    const [pageNumber, setPageNumber] = useState(1);
    const totalPages = 10;
    return <Pagination {...{
      pageNumber,
      totalPages,
      setPageNumber
    }} size='large' />;
  }
}`,...I.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
    const [pageNumber, setPageNumber] = useState(1);
    const totalPages = 10;
    return <Pagination {...{
      pageNumber,
      totalPages,
      setPageNumber
    }} size='large' isDisabled />;
  }
}`,...j.parameters?.docs?.source}}};const we=["Default","ManyPages","DifferentColors","SmallSize","MediumSize","LargeSize","Disabled"],We=Object.freeze(Object.defineProperty({__proto__:null,Default:b,DifferentColors:_,Disabled:j,LargeSize:I,ManyPages:x,MediumSize:E,SmallSize:y,__namedExportsOrder:we,default:ze},Symbol.toStringTag,{value:"Module"}));export{We as P};
