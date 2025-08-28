import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{C as N}from"./CollapsibleInfo-IMVLIxPR.js";import{I as u}from"./InfoText-Bfn-bNkY.js";import{M as f}from"./MediaImage-gly9VR18.js";import{r as l}from"./iframe-BKLHIWF5.js";import"./index-DIEq8J8r.js";import{c as y}from"./utils-jAU0Cazi.js";import{E as C}from"./react-icons.esm-BRCNz63G.js";function x(e,o){if(typeof e=="function")return e(o);e!=null&&(e.current=o)}function w(...e){return o=>{let a=!1;const n=e.map(t=>{const r=x(t,o);return!a&&typeof r=="function"&&(a=!0),r});if(a)return()=>{for(let t=0;t<n.length;t++){const r=n[t];typeof r=="function"?r():x(e[t],null)}}}}function j(e){const o=I(e),a=l.forwardRef((n,t)=>{const{children:r,...d}=n,s=l.Children.toArray(r),c=s.find(E);if(c){const p=c.props.children,v=s.map(m=>m===c?l.Children.count(p)>1?l.Children.only(null):l.isValidElement(p)?p.props.children:null:m);return i.jsx(o,{...d,ref:t,children:l.isValidElement(p)?l.cloneElement(p,void 0,v):null})}return i.jsx(o,{...d,ref:t,children:r})});return a.displayName=`${e}.Slot`,a}function I(e){const o=l.forwardRef((a,n)=>{const{children:t,...r}=a;if(l.isValidElement(t)){const d=$(t),s=R(r,t.props);return t.type!==l.Fragment&&(s.ref=n?w(n,d):d),l.cloneElement(t,s)}return l.Children.count(t)>1?l.Children.only(null):null});return o.displayName=`${e}.SlotClone`,o}var S=Symbol("radix.slottable");function E(e){return l.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===S}function R(e,o){const a={...o};for(const n in o){const t=e[n],r=o[n];/^on[A-Z]/.test(n)?t&&r?a[n]=(...s)=>{const c=r(...s);return t(...s),c}:t&&(a[n]=t):n==="style"?a[n]={...t,...r}:n==="className"&&(a[n]=[t,r].filter(Boolean).join(" "))}return{...e,...a}}function $(e){var n,t;let o=(n=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:n.get,a=o&&"isReactWarning"in o&&o.isReactWarning;return a?e.ref:(o=(t=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:t.get,a=o&&"isReactWarning"in o&&o.isReactWarning,a?e.props.ref:e.props.ref||e.ref)}var O=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],P=O.reduce((e,o)=>{const a=j(`Primitive.${o}`),n=l.forwardRef((t,r)=>{const{asChild:d,...s}=t,c=d?a:o;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),i.jsx(c,{...s,ref:r})});return n.displayName=`Primitive.${o}`,{...e,[o]:n}},{}),T="Separator",g="horizontal",A=["horizontal","vertical"],b=l.forwardRef((e,o)=>{const{decorative:a,orientation:n=g,...t}=e,r=V(n)?n:g,s=a?{role:"none"}:{"aria-orientation":r==="vertical"?r:void 0,role:"separator"};return i.jsx(P.div,{"data-orientation":r,...s,...t,ref:o})});b.displayName=T;function V(e){return A.includes(e)}var _=b;function h({className:e,orientation:o="horizontal",decorative:a=!0,...n}){return i.jsx(_,{"data-slot":"separator",decorative:a,orientation:o,className:y("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",e),...n})}h.__docgenInfo={description:"",methods:[],displayName:"Separator",props:{orientation:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},decorative:{defaultValue:{value:"true",computed:!1},required:!1}}};const k=({media:e,info:o,showInfo:a,onToggleInfo:n})=>{const t=l.useId(),r=`content-section-${t}`,d=`image-${t}`,s=`caption-${t}`,c=`info-${t}`,p=a!=="hidden";return i.jsx("div",{id:r,className:`${a} 
                w-[100%] 
                max-h-[100vh]
                top-0 
                left-0
                rounded-xl
                md:bg-no-repeat
                md:bg-contain
                bg-cover
                md:bg-right
                bg-center
                md:bg-black/90
                bg-blend-normal
                backdrop-opacity-[0.9]          `,role:"complementary","aria-label":"Question context and media","aria-hidden":!p,children:i.jsxs("div",{children:[i.jsx("div",{className:"md:hidden",children:i.jsx(N,{content:i.jsxs("p",{id:s,className:"bg-stone-500 text-white",role:"img","aria-label":`Image caption: ${e.imgCaption}`,children:["📷:",e.imgCaption]}),wrapperClassName:"absolute data-[state=open]:bg-red-500/50 rounded-t-xl w-[70%]",triggerClassName:"transition-transform duration-500 ease-in-out data-[state=open]:rotate-45",iconClassName:"w-6 h-6 bg-red-500 text-soviet-gold border-1 border-soviet-gold",contentClassName:"w-[95%] p-2 text-wrap text-lg data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 duration-500",ariaLabel:"Toggle image caption visibility"})}),i.jsx(f,{media:e,className:"block md:hidden rounded-t-xl md:rounded-t-none mr-0 md:max-h-[70vh] md:w-[50%]",id:d,ariaDescribedby:s}),i.jsxs("div",{className:"hidden md:flex",role:"group","aria-label":"Image and information panel",children:[i.jsx(f,{media:e,className:"rounded-t-xl md:rounded-t-none md:max-h-[70vh] md:w-[50%] my-auto",id:d,ariaDescribedby:`${s} ${c}`}),i.jsxs("div",{className:"flex flex-col gap-3",role:"region","aria-label":"Image details and information",children:[i.jsxs("p",{id:s,className:"font-mono text-white text-[1rem] p-2",role:"img","aria-label":`Image caption: ${e.imgCaption}`,children:["📷: ",e.imgCaption]}),i.jsx(h,{className:"bg-soviet-gold",role:"separator","aria-hidden":"true"}),i.jsx(u,{info:o,isSourceCollapsible:!0,wrapperClassName:`leading-5 font-mono w-full 
                            text-stone-50 p-2 text-[1rem]`,citeSourceClassName:"bg-stone-500 text-white block",id:c,ariaLabel:"Additional context information"})]})]}),i.jsxs("div",{children:[i.jsx(u,{info:o,wrapperClassName:"block md:hidden",infoTextClassName:`leading-5 
                        w-full
                        font-mono 
                        text-stone-50   
                        bg-red-900
                        md:w-[60%] 
                        md:text-[1.2rem] 
                        p-2 `,citeSourceClassName:"ml-1 text-stone-100 text-wrap text-xs md:w-[50%]",id:c,ariaLabel:"Additional context information"}),i.jsxs("button",{className:`absolute
                            ${a}  
                            bottom-0
                            right-1
                            w-10
                            h-10
                            text-soviet-gold
                            hover:text-yellow-300
                            focus:outline-none
                            focus:ring-2
                            focus:ring-soviet-gold
                            focus:ring-offset-2
                            focus:ring-offset-black
                            rounded-sm
                            transition-colors
                            duration-200
                        `,onClick:()=>{n("hidden")},"aria-label":"Hide context information panel","aria-expanded":p,"aria-controls":r,type:"button",title:"close info panel",children:[i.jsx(C,{className:"w-full h-full"}),i.jsx("span",{className:"sr-only",children:"Close information panel"})]})]})]})})};k.__docgenInfo={description:"",methods:[],displayName:"ContentSection"};export{k as C};
