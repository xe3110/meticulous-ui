import{j as m}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-v-kvBfBy.js";import{d as h}from"./styled-components.browser.esm-DOqSrTHP.js";import{g}from"./grey-B1SlOap1.js";const D=h.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  @media screen and (max-width: 768px) {\
    gap: 0.2rem;
  }
`,I=h.input`
  height: 2rem;
  width: 2rem;
  font-size: 1.2rem;
  text-align: center;
  color: ${g.m600};
  border: 1px solid ${g.m800};
  border-radius: 0.2rem;
`,_=(e,o)=>s=>{e(s.target.value,o)},S=(e,o)=>s=>e(s,o),w=({inputsRef:e,handleChange:o,handleKeyDown:s,digit:r,index:a})=>{const i=l=>e.current[a]=l;return m.jsx(I,{ref:i,maxLength:1,inputMode:"numeric",autoComplete:"one-time-code",value:r,onChange:_(o,a),onKeyDown:S(s,a)},`key-${a}`)},E=({inputsRef:e,handleChange:o,handleKeyDown:s})=>(r,a)=>m.jsx(w,{inputsRef:e,handleChange:o,handleKeyDown:s,digit:r,index:a},`otp-num-${a}`),f=({length:e=6,value:o="",onChange:s,onComplete:r})=>{const[a,i]=p.useState(Array(e).fill("")),l=p.useRef([]);p.useEffect(()=>{if(!o)return;const n=String(o).replace(/\D/g,"").slice(0,e),t=n.split("");for(;t.length<e;)t.push("");i(t),n.length===e&&r?.(n)},[o,e,r]);const d=n=>{i(n);const t=n.join("");s?.(t),t.length===e&&r?.(t)},v=(n,t)=>{n=n.replace(/\D/g,"");const u=[...a];u[t]=n,d(u),n&&t<e-1&&l.current[t+1].focus()},O=(n,t)=>{n.key==="Backspace"&&!a[t]&&t>0&&l.current[t-1].focus()},y=n=>{const t=n.clipboardData.getData("text").replace(/\D/g,"");if(!t)return;const u=Array(e).fill("");t.slice(0,e).split("").forEach((C,j)=>u[j]=C),d(u);const x=Math.min(t.length-1,e-1);l.current[x]?.focus()};return m.jsx(D,{style:{display:"flex",gap:"10px",justifyContent:"center"},onPaste:y,children:a.map(E({inputsRef:l,handleChange:v,handleKeyDown:O}))})};f.__docgenInfo={description:"",methods:[],displayName:"OtpInput",props:{length:{defaultValue:{value:"6",computed:!1},required:!1},value:{defaultValue:{value:"''",computed:!1},required:!1}}};const V={title:"Molecules/OTP",component:f,parameters:{docs:{description:{component:"OTP input."},source:{language:"jsx",code:`
          import OtpInput from 'meticulous-ui/components/OtpInput';

          export const Default = (args) => {
            const [val, setVal] = useState('');

            const onChange = (val) => {
              setVal(val);
            };

            return <OtpInput value={val} onComplete={onChange} onChange={onChange} />;
          };
        `}},argTypes:{length:{control:"number"},value:{control:"text"}}}},c=e=>{const[o,s]=p.useState("");p.useEffect(()=>{s(e?.value)},[e?.value]);const r=a=>{s(a)};return m.jsx(f,{length:e?.length,value:o,onComplete:r,onChange:r})};c.storyName="OTP Entry";c.args={length:6,value:""};c.__docgenInfo={description:"",methods:[],displayName:"Default"};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => {
  const [val, setVal] = useState('');
  useEffect(() => {
    setVal(args?.value);
  }, [args?.value]);
  const onChange = val => {
    setVal(val);
  };
  return <OtpInput length={args?.length} value={val} onComplete={onChange} onChange={onChange} />;
}`,...c.parameters?.docs?.source}}};const b=["Default"],M=Object.freeze(Object.defineProperty({__proto__:null,Default:c,__namedExportsOrder:b,default:V},Symbol.toStringTag,{value:"Module"}));export{M as O};
