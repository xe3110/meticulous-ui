import{j as m}from"./jsx-runtime-u17CrQMm.js";import{g as s}from"./get-CcP2FhCm.js";import{d as i,m as n}from"./styled-components.browser.esm-DOqSrTHP.js";import{c as a}from"./index-DgVUttyp.js";import{g as d}from"./orange-DWED-Hr3.js";const l=n`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,p=i.div`
  border: ${({$border:e})=>e} solid #f3f3f3;
  border-top: ${({$border:e,$color:r})=>`${e} solid ${r}`};
  border-radius: 50%;
  width: ${({$length:e})=>e};
  height: ${({$length:e})=>e};
  animation: ${l} 1s linear infinite;
`,f={small:{$border:"0.25rem",$length:"1rem"},medium:{$border:"0.5rem",$length:"2rem"},large:{$border:"0.75rem",$length:"3rem"}},u=({color:e="green",size:r="medium"})=>{const{$border:o,$length:t}=f[r];return m.jsx(p,{$color:s(a,e,d)?.m500,$border:o,$length:t})};u.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{color:{defaultValue:{value:"'green'",computed:!1},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},required:!1}}};export{u as S};
