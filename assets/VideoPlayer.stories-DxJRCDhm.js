import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as c}from"./iframe-BpIy2Msd.js";import{d}from"./styled-components.browser.esm-B1loR-YP.js";import{b as w}from"./black-D_AkG8W8.js";const y=d.div`
  position: relative;
  display: inline-block;
  width: ${({$width:o})=>o}px;
  height: ${({$height:o})=>o}px;

  &:fullscreen video {
    width: 100vw;
    height: 100vh;
    object-fit: contain;
    background: ${w.m900};
  }
`,b=d.video`
  border-radius: ${({$borderRadius:o})=>o}px;
  outline: none;
  width: 100%;
  height: 100%;
  max-width: ${({width:o})=>o}px;
  aspect-ratio: 16 / 9;
  background-color: #000;
  object-fit: contain;

  &:fullscreen {
    width: 100vw;
    height: 100vh;
    object-fit: contain;
  }
`,x=(o,r,i)=>{c.useEffect(()=>{const a=t=>{if(!["Space","KeyF","Escape","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","KeyM"].includes(t.code))return;const n=t.target;if(n&&(n.tagName==="INPUT"||n.tagName==="TEXTAREA"||n.isContentEditable))return;t.preventDefault();const e=o.current;if(e)if(t.code==="Space")if(e.paused){const u=e.play();u&&u.catch&&u.catch(()=>{})}else e.pause();else t.code==="KeyF"?document.fullscreenElement?document.exitFullscreen():r.current?.requestFullscreen():t.code==="ArrowUp"?(e.volume=Math.min(1,e.volume+.05),i?.(e.volume)):t.code==="ArrowDown"?(e.volume=Math.max(0,e.volume-.05),i?.(e.volume)):t.code==="KeyM"?(e.volume=e.volume>0?0:1,i?.(e.volume)):t.code==="ArrowLeft"?e.currentTime>5?e.currentTime-=5:e.currentTime>0&&(e.currentTime=0):t.code==="ArrowRight"&&(e.currentTime<e.duration-5?e.currentTime+=5:e.currentTime<e.duration&&(e.currentTime=e.duration))};return window.addEventListener("keydown",a,!0),()=>window.removeEventListener("keydown",a,!0)},[o,r,i])},V=d.div`
  position: absolute;
  right: 0.8rem;
  top: 1.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  pointer-events: none;
  user-select: none;
`,_=d.div`
  width: 0.4rem;
  height: 8rem;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 0.2rem;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
`,k=d.div`
  width: 100%;
  height: ${({$pct:o})=>o}%;
  background: #fff;
  border-radius: 0.2rem;
  transition: height 0.1s ease;
`,T=d.span`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 500;
  width: 3.5rem;
  text-align: center;
`,f=({volume:o})=>{if(o===null)return null;const r=Math.round(o);return s.jsxs(V,{children:[s.jsx(_,{children:s.jsx(k,{$pct:r})}),s.jsx(T,{children:r})]})};f.__docgenInfo={description:"",methods:[],displayName:"VolumeBar"};const D=()=>{const[o,r]=c.useState(null),i=c.useRef(null),a=c.useCallback(t=>{r(Math.round(t*100)),clearTimeout(i.current),i.current=setTimeout(()=>r(null),1500)},[]);return{volume:o,showVolume:a}},m=({link:o,thumbnail:r,width:i="600",borderRadius:a=8,height:t="auto"})=>{const n=c.useRef(null),e=c.useRef(null),{volume:u,showVolume:h}=D(),g=()=>{n.current?.focus()},v=p=>{p.code==="Space"&&p.preventDefault()};return x(n,e,h),s.jsxs(y,{ref:e,$width:i,$height:t,children:[s.jsx(b,{$borderRadius:a,ref:n,src:o,poster:r,controls:!0,tabIndex:0,onClick:g,onKeyDown:v,children:"Your browser does not support the video tag."}),s.jsx(f,{volume:u})]})};m.__docgenInfo={description:"",methods:[],displayName:"VideoPlayer",props:{width:{defaultValue:{value:"'600'",computed:!1},required:!1},borderRadius:{defaultValue:{value:"8",computed:!1},required:!1},height:{defaultValue:{value:"'auto'",computed:!1},required:!1}}};const P={title:"Organisms/VideoPlayer",component:m,parameters:{docs:{description:{component:"VideoPlayer input."},source:{language:"jsx",code:`
          import VideoPlayer from 'meticulous-ui/components/VideoPlayer';

          const VideoPlayerWrapper = () => {
            return (
              <VideoPlayer link='https://filesamples.com/samples/video/mp4/sample_960x400_ocean_with_audio.mp4' width=800 />
            );
          };

          // HAS SHORTCUTS:-
          // Spacebar (Play / Pause)
          // F (Fullscreen)
          // Esc (Exit Fullscreen)
          // M (Mute / Unmute)
          // ArrowUp (Volume high)
          // ArrowDown (volume low)
          // ArrowLeft (seek back)
          // ArrowRight (seek ahead)
        `}}},argTypes:{link:{control:{type:"text"},description:"Defines the link of the video in video player"},thumbnail:{control:{type:"text"},description:"Defines the thumbnail of the video in video player"},width:{control:{type:"text"},description:"Defines the width of video player in non-full screen mode"},height:{control:{type:"text"},description:"Defines the height of video player in non-full screen mode"},borderRadius:{control:{type:"number"},description:"Defines the border radius of video player in non-full screen mode"}}},l=o=>s.jsx(m,{...o});l.storyName="VideoPlayer";l.args={link:"https://filesamples.com/samples/video/mp4/sample_960x400_ocean_with_audio.mp4",width:"600",height:"auto",thumbnail:"",borderRadius:8};l.__docgenInfo={description:"",methods:[],displayName:"Default"};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => {
  return <VideoPlayer {...args} />;
}`,...l.parameters?.docs?.source}}};const j=["Default"],$=Object.freeze(Object.defineProperty({__proto__:null,Default:l,__namedExportsOrder:j,default:P},Symbol.toStringTag,{value:"Module"}));export{l as D,$ as V};
