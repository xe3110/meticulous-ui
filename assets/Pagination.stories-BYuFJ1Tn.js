import{j as a}from"./jsx-runtime-ZoQya3Uf.js";import{r as m}from"./iframe-D_CfHMY5.js";import{d as f,g as z,l as X,w as re,b as ye,t as Se,c as xe}from"./styled-components.browser.esm-CQYhyXWa.js";import"./preload-helper-PPVm8Dsz.js";var Y=Array.isArray,ve=typeof global=="object"&&global&&global.Object===Object&&global,je=typeof self=="object"&&self&&self.Object===Object&&self,J=ve||je||Function("return this")(),S=J.Symbol,ue=Object.prototype,Ee=ue.hasOwnProperty,Ie=ue.toString,j=S?S.toStringTag:void 0;function Ce(e){var t=Ee.call(e,j),r=e[j];try{e[j]=void 0;var n=!0}catch{}var s=Ie.call(e);return n&&(t?e[j]=r:delete e[j]),s}var we=Object.prototype,$e=we.toString;function Re(e){return $e.call(e)}var Me="[object Null]",De="[object Undefined]",ne=S?S.toStringTag:void 0;function le(e){return e==null?e===void 0?De:Me:ne&&ne in Object(e)?Ce(e):Re(e)}function Ae(e){return e!=null&&typeof e=="object"}var Oe="[object Symbol]";function L(e){return typeof e=="symbol"||Ae(e)&&le(e)==Oe}var Te=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ze=/^\w*$/;function Le(e,t){if(Y(e))return!1;var r=typeof e;return r=="number"||r=="symbol"||r=="boolean"||e==null||L(e)?!0:ze.test(e)||!Te.test(e)||t!=null&&e in Object(t)}function E(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Ge="[object AsyncFunction]",Fe="[object Function]",ke="[object GeneratorFunction]",Be="[object Proxy]";function de(e){if(!E(e))return!1;var t=le(e);return t==Fe||t==ke||t==Ge||t==Be}var B=J["__core-js_shared__"],ae=(function(){var e=/[^.]+$/.exec(B&&B.keys&&B.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""})();function Ue(e){return!!ae&&ae in e}var Ze=Function.prototype,Ve=Ze.toString;function He(e){if(e!=null){try{return Ve.call(e)}catch{}try{return e+""}catch{}}return""}var Ke=/[\\^$.*+?()[\]{}|]/g,qe=/^\[object .+?Constructor\]$/,Xe=Function.prototype,Ye=Object.prototype,Je=Xe.toString,We=Ye.hasOwnProperty,Qe=RegExp("^"+Je.call(We).replace(Ke,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function et(e){if(!E(e)||Ue(e))return!1;var t=de(e)?Qe:qe;return t.test(He(e))}function tt(e,t){return e?.[t]}function me(e,t){var r=tt(e,t);return et(r)?r:void 0}var I=me(Object,"create");function rt(){this.__data__=I?I(null):{},this.size=0}function nt(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var at="__lodash_hash_undefined__",st=Object.prototype,ot=st.hasOwnProperty;function it(e){var t=this.__data__;if(I){var r=t[e];return r===at?void 0:r}return ot.call(t,e)?t[e]:void 0}var ct=Object.prototype,ut=ct.hasOwnProperty;function lt(e){var t=this.__data__;return I?t[e]!==void 0:ut.call(t,e)}var dt="__lodash_hash_undefined__";function mt(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=I&&t===void 0?dt:t,this}function h(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}h.prototype.clear=rt;h.prototype.delete=nt;h.prototype.get=it;h.prototype.has=lt;h.prototype.set=mt;function gt(){this.__data__=[],this.size=0}function ge(e,t){return e===t||e!==e&&t!==t}function G(e,t){for(var r=e.length;r--;)if(ge(e[r][0],t))return r;return-1}var pt=Array.prototype,ft=pt.splice;function ht(e){var t=this.__data__,r=G(t,e);if(r<0)return!1;var n=t.length-1;return r==n?t.pop():ft.call(t,r,1),--this.size,!0}function bt(e){var t=this.__data__,r=G(t,e);return r<0?void 0:t[r][1]}function Pt(e){return G(this.__data__,e)>-1}function Nt(e,t){var r=this.__data__,n=G(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this}function x(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}x.prototype.clear=gt;x.prototype.delete=ht;x.prototype.get=bt;x.prototype.has=Pt;x.prototype.set=Nt;var _t=me(J,"Map");function yt(){this.size=0,this.__data__={hash:new h,map:new(_t||x),string:new h}}function St(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function F(e,t){var r=e.__data__;return St(t)?r[typeof t=="string"?"string":"hash"]:r.map}function xt(e){var t=F(this,e).delete(e);return this.size-=t?1:0,t}function vt(e){return F(this,e).get(e)}function jt(e){return F(this,e).has(e)}function Et(e,t){var r=F(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this}function b(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}b.prototype.clear=yt;b.prototype.delete=xt;b.prototype.get=vt;b.prototype.has=jt;b.prototype.set=Et;var It="Expected a function";function W(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(It);var r=function(){var n=arguments,s=t?t.apply(this,n):n[0],i=r.cache;if(i.has(s))return i.get(s);var o=e.apply(this,n);return r.cache=i.set(s,o)||i,o};return r.cache=new(W.Cache||b),r}W.Cache=b;var Ct=500;function wt(e){var t=W(e,function(n){return r.size===Ct&&r.clear(),n}),r=t.cache;return t}var $t=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Rt=/\\(\\)?/g,Mt=wt(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace($t,function(r,n,s,i){t.push(s?i.replace(Rt,"$1"):n||r)}),t});function Dt(e,t){for(var r=-1,n=e==null?0:e.length,s=Array(n);++r<n;)s[r]=t(e[r],r,e);return s}var se=S?S.prototype:void 0,oe=se?se.toString:void 0;function pe(e){if(typeof e=="string")return e;if(Y(e))return Dt(e,pe)+"";if(L(e))return oe?oe.call(e):"";var t=e+"";return t=="0"&&1/e==-1/0?"-0":t}function At(e){return e==null?"":pe(e)}function Ot(e,t){return Y(e)?e:Le(e,t)?[e]:Mt(At(e))}function Tt(e){if(typeof e=="string"||L(e))return e;var t=e+"";return t=="0"&&1/e==-1/0?"-0":t}function zt(e,t){t=Ot(t,e);for(var r=0,n=t.length;e!=null&&r<n;)e=e[Tt(t[r++])];return r&&r==n?e:void 0}function Lt(e,t,r){var n=e==null?void 0:zt(e,t);return n===void 0?r:n}var Gt=Math.ceil,Ft=Math.max;function kt(e,t,r,n){for(var s=-1,i=Ft(Gt((t-e)/(r||1)),0),o=Array(i);i--;)o[++s]=e,e+=r;return o}var Bt=9007199254740991;function Ut(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Bt}function Zt(e){return e!=null&&Ut(e.length)&&!de(e)}var Vt=9007199254740991,Ht=/^(?:0|[1-9]\d*)$/;function Kt(e,t){var r=typeof e;return t=t??Vt,!!t&&(r=="number"||r!="symbol"&&Ht.test(e))&&e>-1&&e%1==0&&e<t}function qt(e,t,r){if(!E(r))return!1;var n=typeof t;return(n=="number"?Zt(r)&&Kt(t,r.length):n=="string"&&t in r)?ge(r[t],e):!1}var Xt=/\s/;function Yt(e){for(var t=e.length;t--&&Xt.test(e.charAt(t)););return t}var Jt=/^\s+/;function Wt(e){return e&&e.slice(0,Yt(e)+1).replace(Jt,"")}var ie=NaN,Qt=/^[-+]0x[0-9a-f]+$/i,er=/^0b[01]+$/i,tr=/^0o[0-7]+$/i,rr=parseInt;function nr(e){if(typeof e=="number")return e;if(L(e))return ie;if(E(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=E(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=Wt(e);var r=er.test(e);return r||tr.test(e)?rr(e.slice(2),r?2:8):Qt.test(e)?ie:+e}var ce=1/0,ar=17976931348623157e292;function U(e){if(!e)return e===0?e:0;if(e=nr(e),e===ce||e===-ce){var t=e<0?-1:1;return t*ar}return e===e?e:0}function sr(e){return function(t,r,n){return n&&typeof n!="number"&&qt(t,r,n)&&(r=n=void 0),t=U(t),r===void 0?(r=t,t=0):r=U(r),n=n===void 0?t<r?1:-1:U(n),kt(t,r,n)}}var Z=sr();const Q=({children:e,rippleColor:t="rgba(0,0,0,0.3)",className:r="",...n})=>{const s=m.useRef(null),i=o=>{const g=s.current;if(!g)return;const u=document.createElement("span");u.className="ripple",u.style.backgroundColor=t;const p=g.getBoundingClientRect(),c=Math.max(p.width,p.height);u.style.width=u.style.height=`${c}px`,u.style.left=`${o.clientX-p.left-c/2}px`,u.style.top=`${o.clientY-p.top-c/2}px`,g.appendChild(u),u.addEventListener("animationend",()=>u.remove())};return a.jsx("div",{ref:s,onClick:i,className:`ripple-container ${r}`,...n,children:e})};Q.__docgenInfo={description:"",methods:[],displayName:"Ripple",props:{rippleColor:{defaultValue:{value:"'rgba(0,0,0,0.3)'",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const or=1.9,ir=2.6,cr=3.1,ur=1,lr=1.2,dr=1.4,mr=18,gr=19,pr=20,ee="small",te="medium",k="large",fe={[ee]:or,[te]:ir,[k]:cr},fr={[ee]:ur,[te]:lr,[k]:dr},hr={[ee]:mr,[te]:gr,[k]:pr},he="selected_bg",be="not_selected_bg",Pe="active_not_selected_bg",br=f.img`
  display: inline-block;
  vertical-align: middle;
  fill: ${({color:e})=>e};
`,Ne=e=>{const{color:t,size:r}=e;return a.jsx(br,{...e,color:t||z.m500,src:"https://www.svgrepo.com/show/533659/chevron-left.svg",alt:"Chevron Left",width:r,height:r})};Ne.__docgenInfo={description:"",methods:[],displayName:"ChevronLeft"};const Pr=f.img`
  display: inline-block;
  vertical-align: middle;
  fill: ${({color:e})=>e};
`,_e=e=>{const{color:t,size:r}=e;return a.jsx(Pr,{...e,color:t||z.m500,src:"https://www.svgrepo.com/show/533661/chevron-right.svg",alt:"Chevron Right",width:r,height:r})};_e.__docgenInfo={description:"",methods:[],displayName:"ChevronRight"};const V=e=>({shades:t})=>{if(["#FFFFFF"].includes(t))return ye.m900;if(e===he)return t.m500;if(e===be)return t.m50;if(e===Pe)return t.m100},H=f.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  min-width: 100%;
  width: 100%;

  ${({isDisabled:e})=>e&&X`
      pointer-events: none;
      opacity: 0.4;
    `};
`,Nr=f.div`
  height: ${({individualRemSize:e})=>`${e}rem`};
  width: ${({individualRemSize:e})=>`${e}rem`};
  border-radius: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: ${({fontRemSize:e})=>e}rem;
  ${({isSelected:e})=>e?X`
          cursor: auto;
          color: ${re};
          background-color: ${V(he)};
        `:X`
          cursor: pointer;
          color: ${z.m500};

          &:hover {
            background-color: ${V(be)};
          }

          &:active {
            background-color: ${V(Pe)};
            color: ${re};
          }
        `}
`,K=f.p`
  color: ${z.m500};
`,_r=f(Ne)`
  cursor: pointer;
`,yr=f(_e)`
  cursor: pointer;
`,q=f.div`
  min-width: ${({size:e})=>e};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,N=({size:e,selected:t,shades:r,changePage:n})=>s=>{const i=fe[e],o=fr[e],g=()=>{n(s)};return a.jsx(Nr,{"data-testid":t===s?"current-page":`test-${s}`,isSelected:t===s,onClick:g,shades:r,individualRemSize:i,fontRemSize:o,children:s},`page_${s}`)},A=()=>a.jsxs(a.Fragment,{children:[a.jsx(K,{children:"."}),a.jsx(K,{children:"."}),a.jsx(K,{children:"."})]}),O=({iconSize:e,shades:t,setPrevPage:r})=>a.jsx(Q,{rippleColor:t.m50,children:a.jsx(_r,{size:e,onClick:r})}),T=({iconSize:e,shades:t,setNextPage:r})=>a.jsx(Q,{rippleColor:t.m50,children:a.jsx(yr,{size:e,onClick:r})});A.__docgenInfo={description:"",methods:[],displayName:"renderThreeDots"};O.__docgenInfo={description:"",methods:[],displayName:"PrevArrow"};T.__docgenInfo={description:"",methods:[],displayName:"NextArrow"};const l=({pageNumber:e,setPageNumber:t,totalPages:r,theme:n="lime",size:s=k,isDisabled:i=!1})=>{const o=P=>{P!==e&&t(P)},g=()=>{e>1&&o(e-1)},u=()=>{e<r&&o(e+1)},p=P=>{console.log({e:P}),["ArrowLeft","ArrowUp"].includes(P.code)&&g(),["ArrowRight","ArrowDown"].includes(P.code)&&u()},c=Lt(xe,n,Se),v=fe[s],d=hr[s];return r<=7?a.jsxs(H,{onKeyDown:p,tabIndex:"0",isDisabled:i,children:[a.jsx(O,{iconSize:d,shades:c,setPrevPage:g}),a.jsx(q,{size:`${r*v}rem`,children:Z(1,r+1).map(N({size:s,selected:e,shades:c,changePage:o}))}),a.jsx(T,{iconSize:d,shades:c,setNextPage:u})]}):r<10||e<4||e>r-3&&e<=r?a.jsxs(H,{onKeyDown:p,tabIndex:"0",isDisabled:i,children:[a.jsx(O,{iconSize:d,shades:c,setPrevPage:g}),a.jsxs(q,{size:`${9*v}rem`,children:[Z(1,5).map(N({size:s,selected:e,shades:c,changePage:o})),A(),[r-3,r-2,r-1,r].map(N({size:s,selected:e,shades:c,changePage:o}))]}),a.jsx(T,{iconSize:d,shades:c,setNextPage:u})]}):a.jsxs(H,{onKeyDown:p,tabIndex:"0",isDisabled:i,children:[a.jsx(O,{iconSize:d,shades:c,setPrevPage:g}),a.jsxs(q,{size:`${9*v}rem`,children:[Z(1,3).map(N({size:s,selected:e,shades:c,changePage:o})),A(),[e-1,e,e+1].map(N({size:s,selected:e,shades:c,changePage:o})),A(),[r-1,r].map(N({size:s,selected:e,shades:c,changePage:o}))]}),a.jsx(T,{iconSize:d,shades:c,setNextPage:u})]})};l.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{theme:{defaultValue:{value:"'lime'",computed:!1},required:!1},size:{defaultValue:{value:"'large'",computed:!1},required:!1},isDisabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const Er={title:"Components/Pagination",component:l,parameters:{docs:{description:{component:"A simple pagination component to navigate through pages."},source:{language:"jsx",code:`
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
        `}}},argTypes:{theme:{control:"select",options:["amber","blue","brown","cyan","deepPurple","grey","indigo","lightGreen","orange","purple","teal","white","black","blueGray","cider","deepOrange","green","index","lightBlue","lime","pink","red","violet","yellow"]},size:{control:"select",options:["small","medium","large"]},totalPages:{control:{type:"number"},description:"Mandatory numeric prop representing total pages",defaultValue:0},pageNumber:{control:{type:"number"},description:"Mandatory numeric prop representing current page",defaultValue:0},isDisabled:{control:{type:"boolean"},description:"Boolean prop, if true then disabled",defaultValue:!1},setPageNumber:{action:"pageChanged"}}},y=e=>{const[t,r]=m.useState(e.pageNumber||1),n=s=>{r(s),e.setPageNumber(s)};return a.jsx(l,{...e,pageNumber:t,setPageNumber:n})},C={name:"Many Pages",parameters:{controls:{disable:!0},actions:{disable:!0}},render:()=>{const[e,t]=m.useState(1);return a.jsx(l,{pageNumber:e,totalPages:50,setPageNumber:t})}},w={name:"Different Colors",parameters:{controls:{disable:!0},actions:{disable:!0}},render:()=>{const[e,t]=m.useState(1),[r,n]=m.useState(1),[s,i]=m.useState(1),[o,g]=m.useState(1),[u,p]=m.useState(1),[c,v]=m.useState(1),d=50;return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[a.jsxs("div",{children:[a.jsx(_,{children:"RED"}),a.jsx(l,{totalPages:d,pageNumber:e,setPageNumber:t,theme:"red"})]}),a.jsxs("div",{children:[a.jsx(_,{children:"BLUE"}),a.jsx(l,{totalPages:d,pageNumber:r,setPageNumber:n,theme:"blue"})]}),a.jsxs("div",{children:[a.jsx(_,{children:"GREEN"}),a.jsx(l,{totalPages:d,pageNumber:s,setPageNumber:i,theme:"green"})]}),a.jsxs("div",{children:[a.jsx(_,{children:"PURPLE"}),a.jsx(l,{totalPages:d,pageNumber:o,setPageNumber:g,theme:"purple"})]}),a.jsxs("div",{children:[a.jsx(_,{children:"GREY"}),a.jsx(l,{totalPages:d,pageNumber:u,setPageNumber:p,theme:"grey"})]}),a.jsxs("div",{children:[a.jsx(_,{children:"BLACK"}),a.jsx(l,{totalPages:d,pageNumber:c,setPageNumber:v,theme:"black"})]})]})}},$={name:"Small Size",parameters:{controls:{disable:!0},actions:{disable:!0}},render:()=>{const[e,t]=m.useState(1);return a.jsx(l,{pageNumber:e,totalPages:10,setPageNumber:t,size:"small"})}},R={name:"Medium Size",parameters:{controls:{disable:!0},actions:{disable:!0}},render:()=>{const[e,t]=m.useState(1);return a.jsx(l,{pageNumber:e,totalPages:10,setPageNumber:t,size:"medium"})}},M={name:"Large Size",parameters:{controls:{disable:!0},actions:{disable:!0}},render:()=>{const[e,t]=m.useState(1);return a.jsx(l,{pageNumber:e,totalPages:10,setPageNumber:t,size:"large"})}},D={name:"Disabled",parameters:{controls:{disable:!0},actions:{disable:!0}},render:()=>{const[e,t]=m.useState(1);return a.jsx(l,{pageNumber:e,totalPages:10,setPageNumber:t,size:"large",isDisabled:!0})}},_=f.p`
  width: 100%;
  text-align: center;
  margin-top: 1.6rem;
  font-weight: 600;
`;y.args={theme:"blue",size:"medium",totalPages:10,pageNumber:1};y.__docgenInfo={description:"",methods:[],displayName:"Default"};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => {
  const [pageNumber, setPageNumber] = useState(args.pageNumber || 1);
  const handlePageChange = num => {
    setPageNumber(num);
    args.setPageNumber(num);
  };
  return <Pagination {...args} pageNumber={pageNumber} setPageNumber={handlePageChange} />;
}`,...y.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};const Ir=["Default","ManyPages","DifferentColors","SmallSize","MediumSize","LargeSize","Disabled"];export{y as Default,w as DifferentColors,D as Disabled,M as LargeSize,C as ManyPages,R as MediumSize,$ as SmallSize,Ir as __namedExportsOrder,Er as default};
