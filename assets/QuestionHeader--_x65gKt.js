import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{D as c,R as d}from"./react-icons.esm-BRCNz63G.js";import{b as u,c as f,d as h}from"./card-DQZysIcT.js";const p=({toggleFinalResult:t,question:r,id:s,textColor:a,idClassName:o="font-sans",questionId:i})=>{const l=n=>{(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),t())};return e.jsxs(u,{children:[e.jsxs(f,{className:"text-xl flex flex-row justify-between items-start gap-4",children:[e.jsxs("div",{children:[e.jsx("span",{"aria-label":`Question ${s}`,className:o,children:s}),e.jsx(c,{className:`inline w-4 h-4 ${a}`,"aria-hidden":"true"}),e.jsx("h2",{className:"inline",id:i,tabIndex:0,children:r})]}),e.jsx("button",{onClick:t,onKeyDown:l,className:`
                        ${a} 
                        p-2 rounded-full 
                        hover:bg-stone-400
                        hover:text-black 
                        focus:outline-none 
                        focus:ring-2 
                        focus:ring-soviet-gold 
                        focus:ring-offset-1
                        transition-colors duration-200
                        flex-shrink-0
                    `,"aria-label":"Reset question and clear your answer",title:"Reset question",type:"button",children:e.jsx(d,{className:"w-5 h-5","aria-hidden":"true"})})]}),e.jsxs(h,{className:"sr-only",children:["Language learning question ",s,". Select the correct translation from the options below."]})]})};export{p as Q};
