import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as a}from"./iframe-v-kvBfBy.js";import{n as m}from"./noop-DX6rZLP_.js";import{d as r,l as A}from"./styled-components.browser.esm-DOqSrTHP.js";import{w as o}from"./white-DEREWbP3.js";import{A as H,M as L,a as Z,b as B}from"./MediaStopFilled-BElatkYd.js";import{b as K}from"./black-D_AkG8W8.js";import{r as $}from"./red-V1BWnntO.js";import{o as U,b as J,g as Q}from"./orange-DWED-Hr3.js";import{i as X,b as Y}from"./indigo-DpSQeb6k.js";import{g as ee}from"./grey-B1SlOap1.js";import{y as re,v as te,t as oe}from"./yellow-6mWc-Jci.js";const ie=r.div`
  width: 100%;
  height: 100%;
  border-radius: ${({$borderRadius:t})=>t};
  position: relative;
  overflow: hidden;
  box-sizing: border-box;

  background:
    radial-gradient(
      60rem 22rem at 50% 45%,
      rgba(20, 40, 20, 0.06),
      rgba(10, 25, 10, 0.02) 50%,
      transparent 70%
    ),
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.18) 0%,
      rgba(255, 255, 255, 0.06) 40%,
      rgba(255, 255, 255, 0.03) 100%
    );

  box-shadow:
    0 3rem 6rem rgba(7, 22, 10, 0.3),
    0 2px 0 rgba(255, 255, 255, 0.03) inset;

  border: 1px solid rgba(255, 255, 255, 0.25);
  color: rgba(8, 34, 16, 0.95);

  ::before {
    content: '';
    position: absolute;
    left: -12%;
    top: -24%;
    width: 62%;
    height: 62%;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.24),
      rgba(255, 255, 255, 0.06) 40%,
      transparent 60%
    );
    filter: blur(4.6rem);
    opacity: 0.85;
    pointer-events: none;
    transform: translateZ(0);
  }

  ::after {
    content: '';
    position: absolute;
    right: -6%;
    bottom: -18%;
    width: 68%;
    height: 68%;
    border-radius: 50%;
    background: radial-gradient(
      circle at 30% 40%,
      rgba(255, 255, 255, 0.08),
      rgba(255, 255, 255, 0.01) 40%,
      transparent 70%
    );
    filter: blur(5.4rem);
    opacity: 0.45;
    pointer-events: none;
    transform: translateZ(0);
  }
`,D=({border:t="none",borderRadius:s=0})=>e.jsx(ie,{$border:t,$borderRadius:s});D.__docgenInfo={description:"",methods:[],displayName:"Glass",props:{border:{defaultValue:{value:"'none'",computed:!1},required:!1},borderRadius:{defaultValue:{value:"0",computed:!1},required:!1}}};const se=r.svg`
  rotate: -90deg;
`,P=({progress:t})=>{const s=a.useRef(null),n=105,l=2*Math.PI*n;return a.useEffect(()=>{const g=l*(1-t);s.current.style.strokeDashoffset=g},[t]),e.jsxs(se,{width:"220",height:"220",children:[e.jsx("circle",{cx:"110",cy:"110",r:n,stroke:"rgba(255,255,255,.2)",strokeWidth:"4",fill:"none"}),e.jsx("circle",{ref:s,cx:"110",cy:"110",r:n,stroke:o,strokeWidth:"4",fill:"none",strokeLinecap:"round",strokeDasharray:l,strokeDashoffset:l,style:{transition:"stroke-dashoffset 0.2s linear"}})]})};P.__docgenInfo={description:"",methods:[],displayName:"TimerRing"};const ae={green:Q.m500,red:$.m500,blue:J.m500,brown:Y.m500,grey:ee.m500,indigo:X.m500,orange:U.m500,teal:oe.m500,violet:te.m500,yellow:re.m500},ne=({$color:t})=>ae[t],j=A`
  position: absolute;
  bottom: 50%;
  transform-origin: bottom;
  border-radius: 4px;
`,le=r.div`
  position: relative;
  height: 20rem;
  width: 20rem;
  border-radius: 1.2rem;
  background-color: ${ne};
`,de=r.div`
  position: absolute;
  left: 50%;
  top: 48%;
  width: 12rem;
  height: 12rem;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.16);
  pointer-events: none;
`,k=r.div`
  position: absolute;
  left: 50%;
  top: 48%;
  transform: translate(-50%, -50%);
`,S=r.div`
  color: ${o};
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  opacity: 0.8;
`,ce=r.span`
  position: absolute;
  width: 2.4px;
  height: 2.4px;
  background: rgba(255, 255, 255, 0.4);
  transform-origin: 94px;
  border-radius: 2px;

  &:nth-child(5n) {
    width: 3px;
    height: 3px;
    background: rgba(255, 255, 255, 0.7);
  }

  &:nth-child(15n) {
    width: 6px;
    height: 2px;
    background: rgba(255, 255, 255);
  }
`,me=r.div`
  position: absolute;
  left: 21%;
  top: 44.3%;
  transform: translate(-50%, -50%) rotate(6.7deg);
`,ue=r.div`
  ${j};
  width: 6px;
  height: 60px;
  background: ${o};
`,pe=r.div`
  ${j};
  width: 4px;
  height: 80px;
  background: ${K.m200};
`,fe=r.div`
  ${j};
  width: 2px;
  height: 90px;
  background: ${$.m800};
`,ge=r.div`
  position: absolute;
  left: 16%;
  top: 14%;
`,he=r.div`
  position: absolute;
  bottom: 6%;
  left: 8%;
  display: flex;
  align-items: center;
  gap: 4px;

  ${({$noActions:t})=>t&&A`
      pointer-events: none;
      opacity: 0.5;
    `}
`,be=r.div`
  position: absolute;
  bottom: 6%;
  right: 8%;
  border-radius: 0.4rem;
`,p=r.div`
  position: relative;
  width: 100%;
  height: 100%;
  height: 2.4rem;
  width: 2.4rem;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.4);
`,xe=r(H)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`,ve=r(L)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`,Te=r(Z)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`,je=r(B)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`,ye=r.div`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background-color: ${o};
`,we=r.div`
  position: absolute;
  left: 26%;
  top: 24%;
  rotate: ${({$angle:t})=>45+t}deg;
  height: 157.5px;
  width: 157.5px;
  transform-origin: center;
`,f=({color:t="green",showTime:s=!0,showTimeWithSec:n=!0,timeZone:l="Asia/Kolkata",isDigital:g=!0,timerSeconds:_=0,onTimerAdd:R=m,onTimerComplete:N=m,onTimerRemove:V=m,onTimerPause:W=m,onTimerPlay:q=m})=>{const[M,C]=a.useState(new Date),[d,h]=a.useState(0),[b,x]=a.useState(!1),I=()=>{h(_),x(!1),R()},F=()=>{h(0),V()},z=()=>{x(!0),W()},O=()=>{x(!1),q()};a.useEffect(()=>{const w=setInterval(()=>{C(new Date),!b&&h(c=>(c-1===0&&N(),c-1))},1e3);return()=>clearInterval(w)},[b]);const v=M.toLocaleString("en-Us",{hour12:!0,timeZone:l}).split(", ")[1],y=v.split(" ")[0],E=v.split(" ")[1],G=v.split(":").slice(0,2).join(":"),u=y.split(":"),T=!(Number.isInteger(d)&&d>0);return e.jsxs(le,{$color:t,children:[e.jsx(D,{borderRadius:"1.2rem"}),s&&e.jsxs(e.Fragment,{children:[e.jsx(de,{}),g?e.jsxs(k,{children:[e.jsx(S,{children:n?y:G}),e.jsx(S,{children:E})]}):e.jsxs(k,{children:[e.jsx(ue,{style:{rotate:`${u[0]*30+u[1]*.5}deg`}}),e.jsx(pe,{style:{rotate:`${u[1]*6}deg`}}),e.jsx(fe,{style:{rotate:`${u[2]*6}deg`}})]})]}),e.jsx(me,{children:[...Array(60)].map((w,c)=>e.jsx(ce,{style:{rotate:`${c*6}deg`}},c))}),!T&&e.jsxs(e.Fragment,{children:[e.jsx(ge,{children:e.jsx(P,{progress:d>=60?1:d%60/60})}),e.jsx(we,{$angle:d%60*6,children:e.jsx(ye,{})})]}),e.jsxs(he,{$noActions:T,children:[e.jsx(p,{onClick:F,children:e.jsx(ve,{color:o,size:14})}),T||!b?e.jsx(p,{onClick:z,children:e.jsx(Te,{color:o,size:14})}):e.jsx(p,{onClick:O,children:e.jsx(je,{color:o,size:14})})]}),e.jsx(be,{children:e.jsx(p,{title:"Add timer in seconds",onClick:I,children:e.jsx(xe,{color:o,size:20})})})]})};f.__docgenInfo={description:"",methods:[],displayName:"Timer",props:{color:{defaultValue:{value:"'green'",computed:!1},required:!1},showTime:{defaultValue:{value:"true",computed:!1},required:!1},showTimeWithSec:{defaultValue:{value:"true",computed:!1},required:!1},timeZone:{defaultValue:{value:"'Asia/Kolkata'",computed:!1},required:!1},isDigital:{defaultValue:{value:"true",computed:!1},required:!1},timerSeconds:{defaultValue:{value:"0",computed:!1},required:!1},onTimerAdd:{defaultValue:{value:`function noop() {
  // No operation performed.
}`,computed:!1},required:!1},onTimerComplete:{defaultValue:{value:`function noop() {
  // No operation performed.
}`,computed:!1},required:!1},onTimerRemove:{defaultValue:{value:`function noop() {
  // No operation performed.
}`,computed:!1},required:!1},onTimerPause:{defaultValue:{value:`function noop() {
  // No operation performed.
}`,computed:!1},required:!1},onTimerPlay:{defaultValue:{value:`function noop() {
  // No operation performed.
}`,computed:!1},required:!1}}};const ke=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(f,{timerSeconds:61,onTimerComplete:()=>alert("complete"),onTimerRemove:()=>alert("remove"),onTimerPause:()=>alert("pause"),onTimerPlay:()=>alert("play"),onTimerAdd:()=>alert("timer added")}),e.jsx(f,{isDigital:!1,color:"blue",timerSeconds:32})]}),Se={title:"Organisms/Timer",component:f,parameters:{docs:{description:{component:"Analog Timer"},source:{language:"jsx",code:`
          import Timer from 'meticulous-ui/components/Timer/Timer';

          const TimerWrapper = () => {
            return (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <Timer
                  color='green'
                  showTime
                  showTimeWithSec
                  timeZone='Asia/Kolkata'
                  isDigital
                  timerSeconds={61}
                  onTimerComplete={() => alert('complete')}
                  onTimerRemove={() => alert('remove')}
                  onTimerPause={() => alert('pause')}
                  onTimerPlay={() => alert('play')}
                  onTimerAdd={() => alert('timer added')}
                />
                <Timer isDigital={false} color='blue' timerSec={32} />
              </div>
            );
          };
        `}},controls:{disable:!0},actions:{disable:!0}}},i=()=>e.jsx(ke,{});i.storyName="Timer";i.__docgenInfo={description:"",methods:[],displayName:"Default"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <TimerWrapper />;
}`,...i.parameters?.docs?.source}}};const Ae=["Default"],ze=Object.freeze(Object.defineProperty({__proto__:null,Default:i,__namedExportsOrder:Ae,default:Se},Symbol.toStringTag,{value:"Module"}));export{ze as T};
