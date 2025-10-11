import{j as a}from"./jsx-runtime-C5NswdkA.js";import{r as d}from"./iframe-CGrzFI6U.js";import{d as p,g as T,w as Q,l as ee,b as _e,t as ye,c as Ne}from"./styled-components.browser.esm-D7KSYXyz.js";import"./preload-helper-PPVm8Dsz.js";var V=Array.isArray,Se=typeof global=="object"&&global&&global.Object===Object&&global,xe=typeof self=="object"&&self&&self.Object===Object&&self,X=Se||xe||Function("return this")(),j=X.Symbol,ie=Object.prototype,ve=ie.hasOwnProperty,Ie=ie.toString,w=j?j.toStringTag:void 0;function je(e){var t=ve.call(e,w),r=e[w];try{e[w]=void 0;var n=!0}catch{}var o=Ie.call(e);return n&&(t?e[w]=r:delete e[w]),o}var Ee=Object.prototype,Ce=Ee.toString;function we(e){return Ce.call(e)}var $e="[object Null]",Re="[object Undefined]",te=j?j.toStringTag:void 0;function ce(e){return e==null?e===void 0?Re:$e:te&&te in Object(e)?je(e):we(e)}function Ae(e){return e!=null&&typeof e=="object"}var Me="[object Symbol]";function D(e){return typeof e=="symbol"||Ae(e)&&ce(e)==Me}var Oe=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Te=/^\w*$/;function De(e,t){if(V(e))return!1;var r=typeof e;return r=="number"||r=="symbol"||r=="boolean"||e==null||D(e)?!0:Te.test(e)||!Oe.test(e)||t!=null&&e in Object(t)}function $(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var ze="[object AsyncFunction]",Le="[object Function]",Ge="[object GeneratorFunction]",Fe="[object Proxy]";function ue(e){if(!$(e))return!1;var t=ce(e);return t==Le||t==Ge||t==ze||t==Fe}var F=X["__core-js_shared__"],re=(function(){var e=/[^.]+$/.exec(F&&F.keys&&F.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""})();function ke(e){return!!re&&re in e}var Be=Function.prototype,Ue=Be.toString;function Ze(e){if(e!=null){try{return Ue.call(e)}catch{}try{return e+""}catch{}}return""}var He=/[\\^$.*+?()[\]{}|]/g,Ke=/^\[object .+?Constructor\]$/,Ve=Function.prototype,Xe=Object.prototype,qe=Ve.toString,Ye=Xe.hasOwnProperty,Je=RegExp("^"+qe.call(Ye).replace(He,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function We(e){if(!$(e)||ke(e))return!1;var t=ue(e)?Je:Ke;return t.test(Ze(e))}function Qe(e,t){return e?.[t]}function le(e,t){var r=Qe(e,t);return We(r)?r:void 0}var R=le(Object,"create");function et(){this.__data__=R?R(null):{},this.size=0}function tt(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var rt="__lodash_hash_undefined__",nt=Object.prototype,at=nt.hasOwnProperty;function ot(e){var t=this.__data__;if(R){var r=t[e];return r===rt?void 0:r}return at.call(t,e)?t[e]:void 0}var st=Object.prototype,it=st.hasOwnProperty;function ct(e){var t=this.__data__;return R?t[e]!==void 0:it.call(t,e)}var ut="__lodash_hash_undefined__";function lt(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=R&&t===void 0?ut:t,this}function f(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}f.prototype.clear=et;f.prototype.delete=tt;f.prototype.get=ot;f.prototype.has=ct;f.prototype.set=lt;function dt(){this.__data__=[],this.size=0}function de(e,t){return e===t||e!==e&&t!==t}function z(e,t){for(var r=e.length;r--;)if(de(e[r][0],t))return r;return-1}var mt=Array.prototype,gt=mt.splice;function pt(e){var t=this.__data__,r=z(t,e);if(r<0)return!1;var n=t.length-1;return r==n?t.pop():gt.call(t,r,1),--this.size,!0}function ft(e){var t=this.__data__,r=z(t,e);return r<0?void 0:t[r][1]}function ht(e){return z(this.__data__,e)>-1}function bt(e,t){var r=this.__data__,n=z(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this}function E(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}E.prototype.clear=dt;E.prototype.delete=pt;E.prototype.get=ft;E.prototype.has=ht;E.prototype.set=bt;var Pt=le(X,"Map");function _t(){this.size=0,this.__data__={hash:new f,map:new(Pt||E),string:new f}}function yt(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function L(e,t){var r=e.__data__;return yt(t)?r[typeof t=="string"?"string":"hash"]:r.map}function Nt(e){var t=L(this,e).delete(e);return this.size-=t?1:0,t}function St(e){return L(this,e).get(e)}function xt(e){return L(this,e).has(e)}function vt(e,t){var r=L(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this}function h(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}h.prototype.clear=_t;h.prototype.delete=Nt;h.prototype.get=St;h.prototype.has=xt;h.prototype.set=vt;var It="Expected a function";function q(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(It);var r=function(){var n=arguments,o=t?t.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var c=e.apply(this,n);return r.cache=i.set(o,c)||i,c};return r.cache=new(q.Cache||h),r}q.Cache=h;var jt=500;function Et(e){var t=q(e,function(n){return r.size===jt&&r.clear(),n}),r=t.cache;return t}var Ct=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,wt=/\\(\\)?/g,$t=Et(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(Ct,function(r,n,o,i){t.push(o?i.replace(wt,"$1"):n||r)}),t});function Rt(e,t){for(var r=-1,n=e==null?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}var ne=j?j.prototype:void 0,ae=ne?ne.toString:void 0;function me(e){if(typeof e=="string")return e;if(V(e))return Rt(e,me)+"";if(D(e))return ae?ae.call(e):"";var t=e+"";return t=="0"&&1/e==-1/0?"-0":t}function At(e){return e==null?"":me(e)}function Mt(e,t){return V(e)?e:De(e,t)?[e]:$t(At(e))}function Ot(e){if(typeof e=="string"||D(e))return e;var t=e+"";return t=="0"&&1/e==-1/0?"-0":t}function Tt(e,t){t=Mt(t,e);for(var r=0,n=t.length;e!=null&&r<n;)e=e[Ot(t[r++])];return r&&r==n?e:void 0}function Dt(e,t,r){var n=e==null?void 0:Tt(e,t);return n===void 0?r:n}var zt=Math.ceil,Lt=Math.max;function Gt(e,t,r,n){for(var o=-1,i=Lt(zt((t-e)/(r||1)),0),c=Array(i);i--;)c[++o]=e,e+=r;return c}var Ft=9007199254740991;function kt(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Ft}function Bt(e){return e!=null&&kt(e.length)&&!ue(e)}var Ut=9007199254740991,Zt=/^(?:0|[1-9]\d*)$/;function Ht(e,t){var r=typeof e;return t=t??Ut,!!t&&(r=="number"||r!="symbol"&&Zt.test(e))&&e>-1&&e%1==0&&e<t}function Kt(e,t,r){if(!$(r))return!1;var n=typeof t;return(n=="number"?Bt(r)&&Ht(t,r.length):n=="string"&&t in r)?de(r[t],e):!1}var Vt=/\s/;function Xt(e){for(var t=e.length;t--&&Vt.test(e.charAt(t)););return t}var qt=/^\s+/;function Yt(e){return e&&e.slice(0,Xt(e)+1).replace(qt,"")}var oe=NaN,Jt=/^[-+]0x[0-9a-f]+$/i,Wt=/^0b[01]+$/i,Qt=/^0o[0-7]+$/i,er=parseInt;function tr(e){if(typeof e=="number")return e;if(D(e))return oe;if($(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=$(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=Yt(e);var r=Wt.test(e);return r||Qt.test(e)?er(e.slice(2),r?2:8):Jt.test(e)?oe:+e}var se=1/0,rr=17976931348623157e292;function k(e){if(!e)return e===0?e:0;if(e=tr(e),e===se||e===-se){var t=e<0?-1:1;return t*rr}return e===e?e:0}function nr(e){return function(t,r,n){return n&&typeof n!="number"&&Kt(t,r,n)&&(r=n=void 0),t=k(t),r===void 0?(r=t,t=0):r=k(r),n=n===void 0?t<r?1:-1:k(n),Gt(t,r,n)}}var B=nr();const Y=({children:e,rippleColor:t="rgba(0,0,0,0.3)",className:r="",...n})=>{const o=d.useRef(null),i=c=>{const m=o.current;if(!m)return;const s=document.createElement("span");s.className="ripple",s.style.backgroundColor=t;const g=m.getBoundingClientRect(),l=Math.max(g.width,g.height);s.style.width=s.style.height=`${l}px`,s.style.left=`${c.clientX-g.left-l/2}px`,s.style.top=`${c.clientY-g.top-l/2}px`,m.appendChild(s),s.addEventListener("animationend",()=>s.remove())};return a.jsx("div",{ref:o,onClick:i,className:`ripple-container ${r}`,...n,children:e})};Y.__docgenInfo={description:"",methods:[],displayName:"Ripple",props:{rippleColor:{defaultValue:{value:"'rgba(0,0,0,0.3)'",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1}}};const ar=1.9,or=2.6,sr=3.1,ir=1,cr=1.2,ur=1.4,lr=18,dr=19,mr=20,J="small",W="medium",G="large",ge={[J]:ar,[W]:or,[G]:sr},gr={[J]:ir,[W]:cr,[G]:ur},pr={[J]:lr,[W]:dr,[G]:mr},pe="selected_bg",fe="not_selected_bg",he="active_not_selected_bg",fr=p.img`
  display: inline-block;
  vertical-align: middle;
  fill: ${({color:e})=>e};
`,be=e=>{const{color:t,size:r}=e;return a.jsx(fr,{...e,color:t||T.m500,src:"https://www.svgrepo.com/show/533659/chevron-left.svg",alt:"Chevron Left",width:r,height:r})};be.__docgenInfo={description:"",methods:[],displayName:"ChevronLeft"};const hr=p.img`
  display: inline-block;
  vertical-align: middle;
  fill: ${({color:e})=>e};
`,Pe=e=>{const{color:t,size:r}=e;return a.jsx(hr,{...e,color:t||T.m500,src:"https://www.svgrepo.com/show/533661/chevron-right.svg",alt:"Chevron Right",width:r,height:r})};Pe.__docgenInfo={description:"",methods:[],displayName:"ChevronRight"};const U=e=>({shades:t})=>{if(["#FFFFFF"].includes(t))return _e.m900;if(e===pe)return t.m500;if(e===fe)return t.m50;if(e===he)return t.m100},Z=p.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  min-width: 100%;
  width: 100%;
`,br=p.div`
  height: ${({individualRemSize:e})=>`${e}rem`};
  width: ${({individualRemSize:e})=>`${e}rem`};
  border-radius: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: ${({fontRemSize:e})=>e}rem;
  ${({isSelected:e})=>e?ee`
          cursor: auto;
          color: ${Q};
          background-color: ${U(pe)};
        `:ee`
          cursor: pointer;
          color: ${T.m500};

          &:hover {
            background-color: ${U(fe)};
          }

          &:active {
            background-color: ${U(he)};
            color: ${Q};
          }
        `}
`,H=p.p`
  color: ${T.m500};
`,Pr=p(be)`
  cursor: pointer;
`,_r=p(Pe)`
  cursor: pointer;
`,K=p.div`
  min-width: ${({size:e})=>e};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,P=(e,t,r,n)=>o=>{const i=ge[e],c=gr[e],m=()=>{n(o)};return a.jsx(br,{"data-testid":t===o?"current-page":`test-${o}`,isSelected:t===o,onClick:m,shades:r,individualRemSize:i,fontRemSize:c,children:o},`page_${o}`)},A=()=>a.jsxs(a.Fragment,{children:[a.jsx(H,{children:"."}),a.jsx(H,{children:"."}),a.jsx(H,{children:"."})]}),M=({iconSize:e,shades:t,setPrevPage:r})=>a.jsx(Y,{rippleColor:t.m50,children:a.jsx(Pr,{size:e,onClick:r})}),O=({iconSize:e,shades:t,setNextPage:r})=>a.jsx(Y,{rippleColor:t.m50,children:a.jsx(_r,{size:e,onClick:r})});A.__docgenInfo={description:"",methods:[],displayName:"renderThreeDots"};M.__docgenInfo={description:"",methods:[],displayName:"PrevArrow"};O.__docgenInfo={description:"",methods:[],displayName:"NextArrow"};const u=({pageNumber:e,setPageNumber:t,totalPages:r,theme:n="lime",size:o=G})=>{const i=()=>{e>1&&t(e-1)},c=()=>{e<r&&t(e+1)},m=C=>{console.log({e:C}),["ArrowLeft","ArrowUp"].includes(C.code)&&i(),["ArrowRight","ArrowDown"].includes(C.code)&&c()},s=Dt(Ne,n,ye),g=ge[o],l=pr[o];return r<=7?a.jsxs(Z,{onKeyDown:m,tabIndex:"0",children:[a.jsx(M,{iconSize:l,shades:s,setPrevPage:i}),a.jsx(K,{size:`${r*g}rem`,children:B(1,r+1).map(P(o,e,s,t))}),a.jsx(O,{iconSize:l,shades:s,setNextPage:c})]}):r<10||e<4||e>r-3&&e<=r?a.jsxs(Z,{onKeyDown:m,tabIndex:"0",children:[a.jsx(M,{iconSize:l,shades:s,setPrevPage:i}),a.jsxs(K,{size:`${9*g}rem`,children:[B(1,5).map(P(o,e,s,t)),A(),[r-3,r-2,r-1,r].map(P(o,e,s,t))]}),a.jsx(O,{iconSize:l,shades:s,setNextPage:c})]}):a.jsxs(Z,{onKeyDown:m,tabIndex:"0",children:[a.jsx(M,{iconSize:l,shades:s,setPrevPage:i}),a.jsxs(K,{size:`${9*g}rem`,children:[B(1,3).map(P(o,e,s,t)),A(),[e-1,e,e+1].map(P(o,e,s,t)),A(),[r-1,r].map(P(o,e,s,t))]}),a.jsx(O,{iconSize:l,shades:s,setNextPage:c})]})};u.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{theme:{defaultValue:{value:"'lime'",computed:!1},required:!1},size:{defaultValue:{value:"'large'",computed:!1},required:!1}}};const vr={title:"Components/Pagination",component:u,parameters:{docs:{description:{component:"A simple pagination component to navigate through pages."}}}},y=()=>{const[e,t]=d.useState(1);return a.jsx(u,{pageNumber:e,totalPages:5,setPageNumber:t})},N=()=>{const[e,t]=d.useState(1);return a.jsx(u,{pageNumber:e,totalPages:50,setPageNumber:t})},_=p.p`
  width: 100%;
  text-align: center;
  margin-top: 1.6rem;
  font-weight: 600;
`,S=()=>{const[e,t]=d.useState(1),[r,n]=d.useState(1),[o,i]=d.useState(1),[c,m]=d.useState(1),[s,g]=d.useState(1),[l,C]=d.useState(1),b=50;return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[a.jsxs("div",{children:[a.jsx(_,{children:"RED"}),a.jsx(u,{totalPages:b,pageNumber:e,setPageNumber:t,theme:"red"})]}),a.jsxs("div",{children:[a.jsx(_,{children:"BLUE"}),a.jsx(u,{totalPages:b,pageNumber:r,setPageNumber:n,theme:"blue"})]}),a.jsxs("div",{children:[a.jsx(_,{children:"GREEN"}),a.jsx(u,{totalPages:b,pageNumber:o,setPageNumber:i,theme:"green"})]}),a.jsxs("div",{children:[a.jsx(_,{children:"PURPLE"}),a.jsx(u,{totalPages:b,pageNumber:c,setPageNumber:m,theme:"purple"})]}),a.jsxs("div",{children:[a.jsx(_,{children:"GREY"}),a.jsx(u,{totalPages:b,pageNumber:s,setPageNumber:g,theme:"grey"})]}),a.jsxs("div",{children:[a.jsx(_,{children:"BLACK"}),a.jsx(u,{totalPages:b,pageNumber:l,setPageNumber:C,theme:"black"})]})]})},x=()=>{const[e,t]=d.useState(1);return a.jsx(u,{pageNumber:e,totalPages:10,setPageNumber:t,size:"small"})},v=()=>{const[e,t]=d.useState(1);return a.jsx(u,{pageNumber:e,totalPages:10,setPageNumber:t,size:"medium"})},I=()=>{const[e,t]=d.useState(1);return a.jsx(u,{pageNumber:e,totalPages:10,setPageNumber:t,size:"large"})};x.storyName="Small Size";v.storyName="Medium Size";I.storyName="Large Size";N.storyName="Many Pages";S.storyName="Different Colors";y.storyName="Default Pagination";y.__docgenInfo={description:"",methods:[],displayName:"Default"};N.__docgenInfo={description:"",methods:[],displayName:"ManyPages"};S.__docgenInfo={description:"",methods:[],displayName:"DifferentColors"};x.__docgenInfo={description:"",methods:[],displayName:"SmallSize"};v.__docgenInfo={description:"",methods:[],displayName:"MediumSize"};I.__docgenInfo={description:"",methods:[],displayName:"LargeSize"};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  const [pageNumber, setPageNumber] = useState(1);
  const totalPages = 5;
  return <Pagination {...{
    pageNumber,
    totalPages,
    setPageNumber
  }} />;
}`,...y.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  const [pageNumber, setPageNumber] = useState(1);
  const totalPages = 50;
  return <Pagination {...{
    pageNumber,
    totalPages,
    setPageNumber
  }} />;
}`,...N.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
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
}`,...S.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const [pageNumber, setPageNumber] = useState(1);
  const totalPages = 10;
  return <Pagination {...{
    pageNumber,
    totalPages,
    setPageNumber
  }} size='small' />;
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  const [pageNumber, setPageNumber] = useState(1);
  const totalPages = 10;
  return <Pagination {...{
    pageNumber,
    totalPages,
    setPageNumber
  }} size='medium' />;
}`,...v.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  const [pageNumber, setPageNumber] = useState(1);
  const totalPages = 10;
  return <Pagination {...{
    pageNumber,
    totalPages,
    setPageNumber
  }} size='large' />;
}`,...I.parameters?.docs?.source}}};const Ir=["Default","ManyPages","DifferentColors","SmallSize","MediumSize","LargeSize"];export{y as Default,S as DifferentColors,I as LargeSize,N as ManyPages,v as MediumSize,x as SmallSize,Ir as __namedExportsOrder,vr as default};
