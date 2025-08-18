import{j as u}from"./jsx-runtime-D_zvdyIk.js";import{Q as Nt}from"./QuestionHeader-CEU57KFH.js";import{S as kt,a as At}from"./SubmitSection-NK4ubDJY.js";import{r as a,R as E,V as Ke}from"./iframe-CTM6SvOc.js";import"./index-DQZ8eBYA.js";import{c as ie}from"./utils-jAU0Cazi.js";import{F as Et}from"./FeedbackOverlay-CKEgpz1z.js";import{C as Lt}from"./ContentSection-CYQ18HUB.js";import{C as Mt,a as Dt}from"./card-DQZysIcT.js";import"./react-icons.esm-B3LRyK4S.js";import"./preload-helper-C1FmrZbK.js";import"./index-D41ZvdSO.js";import"./CollapsibleInfo-OJqDRafG.js";import"./InfoText-4Ok1aWkX.js";import"./MediaImage-gly9VR18.js";var jt=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],_t=jt.reduce((e,t)=>{const n=a.forwardRef((r,o)=>{const{asChild:s,...i}=r,c=s?kt:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),u.jsx(c,{...i,ref:o})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),Pt="Label",He=a.forwardRef((e,t)=>u.jsx(_t.label,{...e,ref:t,onMouseDown:n=>{var o;n.target.closest("button, input, select, textarea")||((o=e.onMouseDown)==null||o.call(e,n),!n.defaultPrevented&&n.detail>1&&n.preventDefault())}}));He.displayName=Pt;var Ft=He;function Qe({className:e,...t}){return u.jsx(Ft,{"data-slot":"label",className:ie("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",e),...t})}Qe.__docgenInfo={description:"",methods:[],displayName:"Label"};function N(e,t,{checkForDefaultPrevented:n=!0}={}){return function(o){if(e==null||e(o),n===!1||!o.defaultPrevented)return t==null?void 0:t(o)}}function me(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function Ye(...e){return t=>{let n=!1;const r=e.map(o=>{const s=me(o,t);return!n&&typeof s=="function"&&(n=!0),s});if(n)return()=>{for(let o=0;o<r.length;o++){const s=r[o];typeof s=="function"?s():me(e[o],null)}}}}function L(...e){return a.useCallback(Ye(...e),e)}function J(e,t=[]){let n=[];function r(s,i){const c=a.createContext(i),d=n.length;n=[...n,i];const l=g=>{var v;const{scope:y,children:h,...p}=g,b=((v=y==null?void 0:y[e])==null?void 0:v[d])||c,f=a.useMemo(()=>p,Object.values(p));return u.jsx(b.Provider,{value:f,children:h})};l.displayName=s+"Provider";function m(g,y){var b;const h=((b=y==null?void 0:y[e])==null?void 0:b[d])||c,p=a.useContext(h);if(p)return p;if(i!==void 0)return i;throw new Error(`\`${g}\` must be used within \`${s}\``)}return[l,m]}const o=()=>{const s=n.map(i=>a.createContext(i));return function(c){const d=(c==null?void 0:c[e])||s;return a.useMemo(()=>({[`__scope${e}`]:{...c,[e]:d}}),[c,d])}};return o.scopeName=e,[r,Ot(o,...t)]}function Ot(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(s){const i=r.reduce((c,{useScope:d,scopeName:l})=>{const g=d(s)[`__scope${l}`];return{...c,...g}},{});return a.useMemo(()=>({[`__scope${t.scopeName}`]:i}),[i])}};return n.scopeName=t.scopeName,n}function ae(e){const t=Gt(e),n=a.forwardRef((r,o)=>{const{children:s,...i}=r,c=a.Children.toArray(s),d=c.find(Ut);if(d){const l=d.props.children,m=c.map(g=>g===d?a.Children.count(l)>1?a.Children.only(null):a.isValidElement(l)?l.props.children:null:g);return u.jsx(t,{...i,ref:o,children:a.isValidElement(l)?a.cloneElement(l,void 0,m):null})}return u.jsx(t,{...i,ref:o,children:s})});return n.displayName=`${e}.Slot`,n}function Gt(e){const t=a.forwardRef((n,r)=>{const{children:o,...s}=n;if(a.isValidElement(o)){const i=Wt(o),c=Bt(s,o.props);return o.type!==a.Fragment&&(c.ref=r?Ye(r,i):i),a.cloneElement(o,c)}return a.Children.count(o)>1?a.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var $t=Symbol("radix.slottable");function Ut(e){return a.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===$t}function Bt(e,t){const n={...t};for(const r in t){const o=e[r],s=t[r];/^on[A-Z]/.test(r)?o&&s?n[r]=(...c)=>{const d=s(...c);return o(...c),d}:o&&(n[r]=o):r==="style"?n[r]={...o,...s}:r==="className"&&(n[r]=[o,s].filter(Boolean).join(" "))}return{...e,...n}}function Wt(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var Vt=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],D=Vt.reduce((e,t)=>{const n=ae(`Primitive.${t}`),r=a.forwardRef((o,s)=>{const{asChild:i,...c}=o,d=i?n:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),u.jsx(d,{...c,ref:s})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function qt(e){const t=e+"CollectionProvider",[n,r]=J(t),[o,s]=n(t,{collectionRef:{current:null},itemMap:new Map}),i=b=>{const{scope:f,children:v}=b,T=E.useRef(null),w=E.useRef(new Map).current;return u.jsx(o,{scope:f,itemMap:w,collectionRef:T,children:v})};i.displayName=t;const c=e+"CollectionSlot",d=ae(c),l=E.forwardRef((b,f)=>{const{scope:v,children:T}=b,w=s(c,v),x=L(f,w.collectionRef);return u.jsx(d,{ref:x,children:T})});l.displayName=c;const m=e+"CollectionItemSlot",g="data-radix-collection-item",y=ae(m),h=E.forwardRef((b,f)=>{const{scope:v,children:T,...w}=b,x=E.useRef(null),I=L(f,x),R=s(m,v);return E.useEffect(()=>(R.itemMap.set(x,{ref:x,...w}),()=>void R.itemMap.delete(x))),u.jsx(y,{[g]:"",ref:I,children:T})});h.displayName=m;function p(b){const f=s(e+"CollectionConsumer",b);return E.useCallback(()=>{const T=f.collectionRef.current;if(!T)return[];const w=Array.from(T.querySelectorAll(`[${g}]`));return Array.from(f.itemMap.values()).sort((R,A)=>w.indexOf(R.ref.current)-w.indexOf(A.ref.current))},[f.collectionRef,f.itemMap])}return[{Provider:i,Slot:l,ItemSlot:h},p,r]}var P=globalThis!=null&&globalThis.document?a.useLayoutEffect:()=>{},zt=Ke[" useId ".trim().toString()]||(()=>{}),Kt=0;function Ht(e){const[t,n]=a.useState(zt());return P(()=>{n(r=>r??String(Kt++))},[e]),t?`radix-${t}`:""}function Qt(e){const t=a.useRef(e);return a.useEffect(()=>{t.current=e}),a.useMemo(()=>(...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)},[])}var Yt=Ke[" useInsertionEffect ".trim().toString()]||P;function Ze({prop:e,defaultProp:t,onChange:n=()=>{},caller:r}){const[o,s,i]=Zt({defaultProp:t,onChange:n}),c=e!==void 0,d=c?e:o;{const m=a.useRef(e!==void 0);a.useEffect(()=>{const g=m.current;g!==c&&console.warn(`${r} is changing from ${g?"controlled":"uncontrolled"} to ${c?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),m.current=c},[c,r])}const l=a.useCallback(m=>{var g;if(c){const y=Jt(m)?m(e):m;y!==e&&((g=i.current)==null||g.call(i,y))}else s(m)},[c,e,s,i]);return[d,l]}function Zt({defaultProp:e,onChange:t}){const[n,r]=a.useState(e),o=a.useRef(n),s=a.useRef(t);return Yt(()=>{s.current=t},[t]),a.useEffect(()=>{var i;o.current!==n&&((i=s.current)==null||i.call(s,n),o.current=n)},[n,o]),[n,r,s]}function Jt(e){return typeof e=="function"}var Xt=a.createContext(void 0);function Je(e){const t=a.useContext(Xt);return e||t||"ltr"}var re="rovingFocusGroup.onEntryFocus",en={bubbles:!1,cancelable:!0},F="RovingFocusGroup",[se,Xe,tn]=qt(F),[nn,et]=J(F,[tn]),[on,rn]=nn(F),tt=a.forwardRef((e,t)=>u.jsx(se.Provider,{scope:e.__scopeRovingFocusGroup,children:u.jsx(se.Slot,{scope:e.__scopeRovingFocusGroup,children:u.jsx(an,{...e,ref:t})})}));tt.displayName=F;var an=a.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,orientation:r,loop:o=!1,dir:s,currentTabStopId:i,defaultCurrentTabStopId:c,onCurrentTabStopIdChange:d,onEntryFocus:l,preventScrollOnEntryFocus:m=!1,...g}=e,y=a.useRef(null),h=L(t,y),p=Je(s),[b,f]=Ze({prop:i,defaultProp:c??null,onChange:d,caller:F}),[v,T]=a.useState(!1),w=Qt(l),x=Xe(n),I=a.useRef(!1),[R,A]=a.useState(0);return a.useEffect(()=>{const C=y.current;if(C)return C.addEventListener(re,w),()=>C.removeEventListener(re,w)},[w]),u.jsx(on,{scope:n,orientation:r,dir:p,loop:o,currentTabStopId:b,onItemFocus:a.useCallback(C=>f(C),[f]),onItemShiftTab:a.useCallback(()=>T(!0),[]),onFocusableItemAdd:a.useCallback(()=>A(C=>C+1),[]),onFocusableItemRemove:a.useCallback(()=>A(C=>C-1),[]),children:u.jsx(D.div,{tabIndex:v||R===0?-1:0,"data-orientation":r,...g,ref:h,style:{outline:"none",...e.style},onMouseDown:N(e.onMouseDown,()=>{I.current=!0}),onFocus:N(e.onFocus,C=>{const ee=!I.current;if(C.target===C.currentTarget&&ee&&!v){const j=new CustomEvent(re,en);if(C.currentTarget.dispatchEvent(j),!j.defaultPrevented){const _=x().filter(S=>S.focusable),te=_.find(S=>S.active),O=_.find(S=>S.id===b),le=[te,O,..._].filter(Boolean).map(S=>S.ref.current);rt(le,m)}}I.current=!1}),onBlur:N(e.onBlur,()=>T(!1))})})}),nt="RovingFocusGroupItem",ot=a.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,focusable:r=!0,active:o=!1,tabStopId:s,children:i,...c}=e,d=Ht(),l=s||d,m=rn(nt,n),g=m.currentTabStopId===l,y=Xe(n),{onFocusableItemAdd:h,onFocusableItemRemove:p,currentTabStopId:b}=m;return a.useEffect(()=>{if(r)return h(),()=>p()},[r,h,p]),u.jsx(se.ItemSlot,{scope:n,id:l,focusable:r,active:o,children:u.jsx(D.span,{tabIndex:g?0:-1,"data-orientation":m.orientation,...c,ref:t,onMouseDown:N(e.onMouseDown,f=>{r?m.onItemFocus(l):f.preventDefault()}),onFocus:N(e.onFocus,()=>m.onItemFocus(l)),onKeyDown:N(e.onKeyDown,f=>{if(f.key==="Tab"&&f.shiftKey){m.onItemShiftTab();return}if(f.target!==f.currentTarget)return;const v=un(f,m.orientation,m.dir);if(v!==void 0){if(f.metaKey||f.ctrlKey||f.altKey||f.shiftKey)return;f.preventDefault();let w=y().filter(x=>x.focusable).map(x=>x.ref.current);if(v==="last")w.reverse();else if(v==="prev"||v==="next"){v==="prev"&&w.reverse();const x=w.indexOf(f.currentTarget);w=m.loop?dn(w,x+1):w.slice(x+1)}setTimeout(()=>rt(w))}}),children:typeof i=="function"?i({isCurrentTabStop:g,hasTabStop:b!=null}):i})})});ot.displayName=nt;var sn={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function cn(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function un(e,t,n){const r=cn(e.key,n);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(r))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(r)))return sn[r]}function rt(e,t=!1){const n=document.activeElement;for(const r of e)if(r===n||(r.focus({preventScroll:t}),document.activeElement!==n))return}function dn(e,t){return e.map((n,r)=>e[(t+r)%e.length])}var ln=tt,mn=ot;function pn(e){const[t,n]=a.useState(void 0);return P(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const s=o[0];let i,c;if("borderBoxSize"in s){const d=s.borderBoxSize,l=Array.isArray(d)?d[0]:d;i=l.inlineSize,c=l.blockSize}else i=e.offsetWidth,c=e.offsetHeight;n({width:i,height:c})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}function fn(e){const t=a.useRef({value:e,previous:e});return a.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}function gn(e,t){return a.useReducer((n,r)=>t[n][r]??n,e)}var at=e=>{const{present:t,children:n}=e,r=hn(t),o=typeof n=="function"?n({present:r.isPresent}):a.Children.only(n),s=L(r.ref,bn(o));return typeof n=="function"||r.isPresent?a.cloneElement(o,{ref:s}):null};at.displayName="Presence";function hn(e){const[t,n]=a.useState(),r=a.useRef(null),o=a.useRef(e),s=a.useRef("none"),i=e?"mounted":"unmounted",[c,d]=gn(i,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return a.useEffect(()=>{const l=G(r.current);s.current=c==="mounted"?l:"none"},[c]),P(()=>{const l=r.current,m=o.current;if(m!==e){const y=s.current,h=G(l);e?d("MOUNT"):h==="none"||(l==null?void 0:l.display)==="none"?d("UNMOUNT"):d(m&&y!==h?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,d]),P(()=>{if(t){let l;const m=t.ownerDocument.defaultView??window,g=h=>{const b=G(r.current).includes(h.animationName);if(h.target===t&&b&&(d("ANIMATION_END"),!o.current)){const f=t.style.animationFillMode;t.style.animationFillMode="forwards",l=m.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=f)})}},y=h=>{h.target===t&&(s.current=G(r.current))};return t.addEventListener("animationstart",y),t.addEventListener("animationcancel",g),t.addEventListener("animationend",g),()=>{m.clearTimeout(l),t.removeEventListener("animationstart",y),t.removeEventListener("animationcancel",g),t.removeEventListener("animationend",g)}}else d("ANIMATION_END")},[t,d]),{isPresent:["mounted","unmountSuspended"].includes(c),ref:a.useCallback(l=>{r.current=l?getComputedStyle(l):null,n(l)},[])}}function G(e){return(e==null?void 0:e.animationName)||"none"}function bn(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var ce="Radio",[yn,st]=J(ce),[vn,wn]=yn(ce),it=a.forwardRef((e,t)=>{const{__scopeRadio:n,name:r,checked:o=!1,required:s,disabled:i,value:c="on",onCheck:d,form:l,...m}=e,[g,y]=a.useState(null),h=L(t,f=>y(f)),p=a.useRef(!1),b=g?l||!!g.closest("form"):!0;return u.jsxs(vn,{scope:n,checked:o,disabled:i,children:[u.jsx(D.button,{type:"button",role:"radio","aria-checked":o,"data-state":lt(o),"data-disabled":i?"":void 0,disabled:i,value:c,...m,ref:h,onClick:N(e.onClick,f=>{o||d==null||d(),b&&(p.current=f.isPropagationStopped(),p.current||f.stopPropagation())})}),b&&u.jsx(dt,{control:g,bubbles:!p.current,name:r,value:c,checked:o,required:s,disabled:i,form:l,style:{transform:"translateX(-100%)"}})]})});it.displayName=ce;var ct="RadioIndicator",ut=a.forwardRef((e,t)=>{const{__scopeRadio:n,forceMount:r,...o}=e,s=wn(ct,n);return u.jsx(at,{present:r||s.checked,children:u.jsx(D.span,{"data-state":lt(s.checked),"data-disabled":s.disabled?"":void 0,...o,ref:t})})});ut.displayName=ct;var xn="RadioBubbleInput",dt=a.forwardRef(({__scopeRadio:e,control:t,checked:n,bubbles:r=!0,...o},s)=>{const i=a.useRef(null),c=L(i,s),d=fn(n),l=pn(t);return a.useEffect(()=>{const m=i.current;if(!m)return;const g=window.HTMLInputElement.prototype,h=Object.getOwnPropertyDescriptor(g,"checked").set;if(d!==n&&h){const p=new Event("click",{bubbles:r});h.call(m,n),m.dispatchEvent(p)}},[d,n,r]),u.jsx(D.input,{type:"radio","aria-hidden":!0,defaultChecked:n,...o,tabIndex:-1,ref:c,style:{...o.style,...l,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})});dt.displayName=xn;function lt(e){return e?"checked":"unchecked"}var Tn=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],X="RadioGroup",[Cn,eo]=J(X,[et,st]),mt=et(),pt=st(),[In,Sn]=Cn(X),ft=a.forwardRef((e,t)=>{const{__scopeRadioGroup:n,name:r,defaultValue:o,value:s,required:i=!1,disabled:c=!1,orientation:d,dir:l,loop:m=!0,onValueChange:g,...y}=e,h=mt(n),p=Je(l),[b,f]=Ze({prop:s,defaultProp:o??null,onChange:g,caller:X});return u.jsx(In,{scope:n,name:r,required:i,disabled:c,value:b,onValueChange:f,children:u.jsx(ln,{asChild:!0,...h,orientation:d,dir:p,loop:m,children:u.jsx(D.div,{role:"radiogroup","aria-required":i,"aria-orientation":d,"data-disabled":c?"":void 0,dir:p,...y,ref:t})})})});ft.displayName=X;var gt="RadioGroupItem",ht=a.forwardRef((e,t)=>{const{__scopeRadioGroup:n,disabled:r,...o}=e,s=Sn(gt,n),i=s.disabled||r,c=mt(n),d=pt(n),l=a.useRef(null),m=L(t,l),g=s.value===o.value,y=a.useRef(!1);return a.useEffect(()=>{const h=b=>{Tn.includes(b.key)&&(y.current=!0)},p=()=>y.current=!1;return document.addEventListener("keydown",h),document.addEventListener("keyup",p),()=>{document.removeEventListener("keydown",h),document.removeEventListener("keyup",p)}},[]),u.jsx(mn,{asChild:!0,...c,focusable:!i,active:g,children:u.jsx(it,{disabled:i,required:s.required,checked:g,...d,...o,name:s.name,ref:m,onCheck:()=>s.onValueChange(o.value),onKeyDown:N(h=>{h.key==="Enter"&&h.preventDefault()}),onFocus:N(o.onFocus,()=>{var h;y.current&&((h=l.current)==null||h.click())})})})});ht.displayName=gt;var Rn="RadioGroupIndicator",bt=a.forwardRef((e,t)=>{const{__scopeRadioGroup:n,...r}=e,o=pt(n);return u.jsx(ut,{...o,...r,ref:t})});bt.displayName=Rn;var Nn=ft,kn=ht,An=bt;/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const En=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ln=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase()),pe=e=>{const t=Ln(e);return t.charAt(0).toUpperCase()+t.slice(1)},yt=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Mn={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dn=a.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:s,iconNode:i,...c},d)=>a.createElement("svg",{ref:d,...Mn,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:yt("lucide",o),...c},[...i.map(([l,m])=>a.createElement(l,m)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jn=(e,t)=>{const n=a.forwardRef(({className:r,...o},s)=>a.createElement(Dn,{ref:s,iconNode:t,className:yt(`lucide-${En(pe(e))}`,`lucide-${e}`,r),...o}));return n.displayName=pe(e),n};/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _n=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Pn=jn("circle",_n);function vt({className:e,...t}){return u.jsx(Nn,{"data-slot":"radio-group",className:ie("grid gap-3",e),...t})}function wt({className:e,...t}){return u.jsx(kn,{"data-slot":"radio-group-item",className:ie("border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",e),...t,children:u.jsx(An,{"data-slot":"radio-group-indicator",className:"relative flex items-center justify-center",children:u.jsx(Pn,{className:"fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2"})})})}vt.__docgenInfo={description:"",methods:[],displayName:"RadioGroup"};wt.__docgenInfo={description:"",methods:[],displayName:"RadioGroupItem"};const xt=({value:e,onValueChange:t,onKeyDown:n,showInfo:r,choices:o,radioItemClassName:s,labelClassName:i,uniqueId:c,groupId:d,questionId:l,bgClass:m="bg-stone-400"})=>{const g=p=>{p.key==="Enter"&&e&&n(p),(p.key==="ArrowDown"||p.key==="ArrowUp")&&setTimeout(()=>{o.find(b=>b===e)},0)},y=p=>{t(p);const b=document.getElementById(`${c}-r-${o.indexOf(p)}`);b&&b.focus()},h=o.map((p,b)=>{const f=`${c}-r-${b}`,v=e===p;let T=`${m} 
        flex items-center gap-3 rounded-l-full cursor-pointer 
        group transition-all duration-200 hover:scale-102 
        focus-within:ring-1 focus-within:ring-stone-900`;b==0&&(T+=" mt-3"),b==o.length-1&&(T+=" mb-3"),v&&(T+=" ring-2 ring-stone-800 bg-red-300");let x=(o.length*5+10-5*b)/100;const I={backgroundColor:v?"rgb(168, 162, 158, 0)":`rgb(168, 162, 158, ${x})`};return u.jsxs("div",{className:T,style:I,onClick:()=>y(p),role:"presentation",children:[u.jsx(wt,{value:p,className:`${s}  focus:ring-red-500/30`,id:f,"aria-describedby":`${f}-desc`}),u.jsx(Qe,{htmlFor:f,className:`
                    ${i} cursor-pointer flex-1 px-2 
                    ${v?"font-semibold text-black":""}`,children:p}),u.jsxs("span",{id:`${f}-desc`,className:"sr-only",children:["Choice ",b+1," of ",o.length,": ",p,v?" (selected)":""]})]},f)});return u.jsxs(vt,{value:e,onValueChange:t,onKeyDown:g,className:`
                relative
                ${r==="hidden"?"":"hidden"}
                font-garamond-pp
                pl-5
                pr-5
                bg-contain bg-repeat
                rounded-tl-xl
                rounded-br-lg
                border-l-1
                border-soviet-gold
                hover:bg-stone-400/50
                hover:border-r-6
                hover:border-r-red-500
                hover:font-bold
                **:text-black
                focus-within:outline-none
                focus-within:ring-1
                focus-within:ring-red-500
            `,"aria-labelledby":l,"aria-describedby":`${d}-instructions`,role:"radiogroup",children:[u.jsx("div",{id:`${d}-instructions`,className:"sr-only",children:"Use arrow keys to navigate between options. Press Enter to submit your answer."}),h,u.jsx("div",{className:"sr-only","aria-live":"polite","aria-atomic":"true",children:e&&`Selected: ${e}`})]})};xt.__docgenInfo={description:"",methods:[],displayName:"AnswerChoices",props:{}};const $=[{imgUrl:"https://735606.selcdn.ru/thumbnails/photos/1/2/8/128a94f6c13884d8_1024.jpg",sourceUrl:"https://russiainphoto.ru/search/photo/years-1940-1946/?tag_tree_ids=33419&index=10&page=13&paginate_page=13",imgCaption:"Anna Akhmatova and Boris Pasternak at an evening at the Polytechnic Museum, Moscow (1946)",photog:"V. Slavinsky",altText:"Anna Akhmatova smoking a fag and sitting next to Boris Pasternak looking in the camera.",wrongText:"wrong❌⚠️falsch❌⚠️неправильный"},{imgUrl:"https://735606.selcdn.ru/thumbnails/photos/3/s/s/3ss5404448676991_1024.jpg",sourceUrl:"https://russiainphoto.ru/search/photo/years-1940-1946/?page=3&paginate_page=3&index=8&tag_tree_ids=33419",imgCaption:"Ilya Ehrenburg (1941)",photog:"Victor Temin",altText:"Ilya Ehrenburg sitting behind a desk while smoking a pipe and looking in the camera with his hairy hands.",wrongText:"wrong❌⚠️falsch❌⚠️неправильный"}];function Fn(e,t,n,r,o){let s="",i="";return e=="de"?s=n:e=="en"?s=r[0]:s=o,t=="de"?i=n:t=="en"?i=r:i=o,[s,i]}const M=({id:e,de:t,en:n,phonetic:r,ru:o,choices:s,fromLanguage:i,toLanguage:c,media:d,info:l})=>{const[m,g]=a.useState(!1),[y,h]=a.useState("hidden"),[p,b]=a.useState(""),[f,v]=a.useState(""),[T,w]=a.useState({backgroundImage:"",bg:"bg-transparent",text:"text-red-600",marginB:"mb-[0rem]",showText:!1,displayText:""});a.useEffect(()=>{w({backgroundImage:"",bg:"bg-transparent",text:"text-red-600",marginB:"mb-[0rem]",showText:!1,displayText:""}),g(!1),h("hidden"),b(""),v("")},[i,c]);const x=a.useId(),I=`question-${x}`,R=`radio-group-${x}`,A=`feedback-${x}`,C=S=>{S.key==="Enter"&&p&&j(p,O)},ee=()=>{m&&(g(!1),w({backgroundImage:"",bg:"bg-transparent",text:"text-red-600",marginB:"mb-[0rem]",showText:!1,displayText:""}),b(""),h("hidden"),v(""))},j=(S,ne)=>{let oe=!1;if(Array.isArray(ne)){for(const Rt of ne)if(Rt.toLowerCase()===S.toLowerCase()){oe=!0;break}}else S.toLowerCase()===ne.toLowerCase()&&(oe=!0);return oe?(g(!0),v("Correct answer!"),w({backgroundImage:"",bg:"bg-red-600",text:"text-yellow-400",marginB:"mb-[1.5rem]",showText:!1,displayText:""}),h(""),!0):(_(),g(!1),!1)},_=()=>{v("Incorrect answer. Please try again."),w({backgroundImage:`url(${$[0].imgUrl})`,bg:"bg-black",text:"text-red-600",marginB:"mb-[0rem]",showText:!0,displayText:$[0].altText}),setTimeout(()=>{w({backgroundImage:"",bg:"bg-transparent",text:"text-red-600",marginB:"mb-[0rem]",showText:!1,displayText:""}),v("")},3500)};let[te,O]=Fn(i,c,t,n,o);return u.jsxs(Mt,{className:`relative w-[90%] ${T.bg} ${T.marginB}`,role:"region","aria-labelledby":I,"aria-describedby":f?A:void 0,children:[u.jsx("div",{id:A,className:"sr-only","aria-live":"polite","aria-atomic":"true",children:f}),u.jsx(Et,{isVisible:T.showText,backgroundImgUrl:$[0].imgUrl,messageText:"Incorrect❌⚠️",captionText:$[0].imgCaption,ariaLabel:"Answer feedback"}),u.jsx(Nt,{question:te,id:e,toggleFinalResult:()=>ee(),textColor:T.text,idClassName:"font-gyst",questionId:I}),u.jsxs(Dt,{children:[u.jsx(Lt,{media:d,info:l,showInfo:y,onToggleInfo:h}),u.jsxs("fieldset",{id:R,"aria-labelledby":I,"aria-required":"true","aria-invalid":m===!1&&p!==""?"true":"false",children:[u.jsx("legend",{className:"sr-only",children:"Choose the correct translation from the options below"}),u.jsx(xt,{value:p,onValueChange:b,onKeyDown:C,showInfo:y,choices:s,uniqueId:x,labelClassName:"text-2xl font-garamond-pp",radioItemClassName:"border-2 border-stone-600 ml-2 hover:ring-0 group-hover:bg-red-500 focus:ring-1 focus:ring-red-500 focus:ring-offset-1",groupId:R,questionId:I})]}),!1]}),u.jsx(At,{hideBtn:y==="hidden"?"":"hidden",btnClassName:"font-gyst",checkAnswer:()=>j(p,O),disabled:!p,ariaDescribedby:I})]})};M.__docgenInfo={description:"",methods:[],displayName:"MultiChoiceQuestion"};const Tt={imgUrl:"https://picsum.photos/600/400?random=1",altText:"Historical photograph from World War II showing soldiers in combat",imgCaption:"Soviet soldiers defending Stalingrad during the winter of 1942-1943"},On={text:"The Battle of Stalingrad was one of the bloodiest battles in human history and marked a turning point in World War II. The urban warfare lasted for months with devastating casualties on both sides.",sourceChicago:"Beevor, Antony. Stalingrad: The Fateful Siege: 1942-1943. New York: Viking, 1998."},ue={imgUrl:"https://picsum.photos/500/400?random=2",altText:"Scientific diagram showing molecular structure",imgCaption:"Molecular structure of water (H2O) showing hydrogen bonds"},de={text:"Water is a polar molecule consisting of two hydrogen atoms covalently bonded to one oxygen atom. The bent molecular geometry creates a dipole moment.",sourceChicago:"Pauling, L. (1960). The Nature of the Chemical Bond. Cornell University Press."},Ct={imgUrl:"https://picsum.photos/600/350?random=3",altText:"Traditional German architecture showing half-timbered buildings",imgCaption:"Traditional German Fachwerk (half-timbered) architecture in a medieval town"},It={text:"German architecture has evolved over centuries, with half-timbered construction being particularly characteristic of medieval and early modern periods.",sourceChicago:"Binding, Günther. German Gothic Church Architecture. Yale University Press, 2000."},k=e=>u.jsx("div",{className:"min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 p-4 flex items-center justify-center",children:u.jsx(M,{...e})}),to={title:"UI Components/MultiChoiceQuestion",component:M,parameters:{layout:"fullscreen",backgrounds:{default:"light",values:[{name:"light",value:"#f3f4f6"},{name:"dark",value:"#1f2937"},{name:"gradient",value:"linear-gradient(to bottom, #f3f4f6, #d1d5db)"}]},docs:{description:{component:"The main orchestrator component that combines all UI elements into a complete multiple choice question interface. Handles language switching, answer validation, feedback display, and responsive layouts. Integrates QuestionHeader, ContentSection, AnswerChoices, SubmitSection, and FeedbackOverlay components."}}},argTypes:{id:{description:"Unique identifier for the question",control:"number"},de:{description:"German text for the question/answer",control:"text"},en:{description:"English translations (array for multiple variations)",control:"object"},phonetic:{description:"Phonetic pronunciation guide",control:"text"},ru:{description:"Russian text for the question/answer",control:"text"},choices:{description:"Array of answer choices for the multiple choice question",control:"object"},fromLanguage:{description:"Source language for the question",control:{type:"select"},options:["de","en","ru"]},toLanguage:{description:"Target language for the answer",control:{type:"select"},options:["de","en","ru"]},media:{description:"Media item with image and caption information",control:"object"},info:{description:"Additional context information with source citation",control:"object"}},args:{id:1,de:"Das Haus",en:["The house","House"],phonetic:"das hows",ru:"дом",choices:["The house","The car","The tree","The building"],fromLanguage:"de",toLanguage:"en",media:Ct,info:It}},U={render:k,parameters:{docs:{description:{story:"Standard German to English translation question. Shows the complete workflow from question display through answer selection and feedback."}}}},B={render:k,args:{id:2,de:"Der Baum",en:["The tree","Tree"],phonetic:"der bowm",ru:"дерево",choices:["Der Baum","Das Auto","Die Katze","Der Hund"],fromLanguage:"en",toLanguage:"de"},parameters:{docs:{description:{story:"Reverse translation from English to German, testing the language switching functionality."}}}},W={render:k,args:{id:3,de:"Das Wasser",en:["Water","The water"],phonetic:"das vas-ser",ru:"вода",choices:["Water","Fire","Earth","Air"],fromLanguage:"ru",toLanguage:"en",media:ue,info:de},parameters:{docs:{description:{story:"Russian to English translation with scientific content and imagery."}}}},V={render:k,args:{id:4,de:"Der Krieg",en:["The war","War"],phonetic:"der kreek",ru:"война",choices:["The war","The peace","The battle","The victory"],fromLanguage:"de",toLanguage:"en",media:Tt,info:On},parameters:{docs:{description:{story:"Historical context question with war-related vocabulary and detailed background information."}}}},q={render:k,args:{id:5,de:"Die Familie",en:["The family","Family"],phonetic:"dee fah-mee-lee-eh",ru:"семья",choices:["The family","Family","The relatives","The household"],fromLanguage:"de",toLanguage:"en"},parameters:{docs:{description:{story:"Question with multiple acceptable answers to test the answer validation logic."}}}},z={render:k,args:{id:6,de:"Die Geschwindigkeit",en:["The speed","Speed","Velocity"],phonetic:"dee geh-shvin-dish-kite",ru:"скорость",choices:["The speed","The distance","The time","The acceleration"],fromLanguage:"de",toLanguage:"en",media:ue,info:de},parameters:{docs:{description:{story:"Question with longer vocabulary words to test text wrapping and layout behavior."}}}},K={render:k,args:{id:7,de:"Die Stadt",en:["The city","City"],phonetic:"dee shtat",ru:"город",choices:["The city","The village","The town","The country"]},parameters:{viewport:{defaultViewport:"mobile1"},docs:{description:{story:"Question optimized for mobile viewing with responsive layout adjustments."}}}},H={render:k,args:{id:8,de:"Ja",en:["Yes"],ru:"да",choices:["Yes","No","Maybe","Sometimes"],fromLanguage:"de",toLanguage:"en"},parameters:{docs:{description:{story:"Simple question without phonetic pronunciation guide to test optional prop handling."}}}},Q={render:e=>u.jsxs("div",{className:"min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 p-4 space-y-6",children:[u.jsxs("div",{className:"text-center mb-8",children:[u.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:"Language Combination Examples"}),u.jsx("p",{className:"text-gray-600 mt-2",children:"Different language pairs showing versatility"})]}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto",children:[u.jsx(M,{id:10,de:"Das Buch",en:["The book","Book"],phonetic:"das bookh",ru:"книга",choices:["The book","The paper","The pen","The table"],fromLanguage:"de",toLanguage:"en",media:Ct,info:It}),u.jsx(M,{id:11,de:"Die Sonne",en:["The sun","Sun"],phonetic:"dee zon-neh",ru:"солнце",choices:["солнце","луна","звезда","небо"],fromLanguage:"en",toLanguage:"ru",media:ue,info:de})]})]}),parameters:{layout:"fullscreen",docs:{description:{story:"Multiple questions showing different language pair combinations in a grid layout."}}}},Y={render:e=>u.jsx("div",{className:"min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-4 flex items-center justify-center",children:u.jsxs("div",{className:"max-w-4xl mx-auto",children:[u.jsxs("div",{className:"bg-blue-900/10 p-4 rounded-lg mb-6 text-center",children:[u.jsx("h3",{className:"font-semibold text-blue-900 mb-2",children:"Accessibility Features Test"}),u.jsx("p",{className:"text-blue-800 text-sm",children:"Use keyboard navigation (Tab, Enter, Arrow keys) and screen reader to test accessibility features"})]}),u.jsx(M,{...e})]})}),args:{id:9,de:"Die Musik",en:["The music","Music"],phonetic:"dee moo-zeek",ru:"музыка",choices:["The music","The sound","The song","The noise"],fromLanguage:"de",toLanguage:"en"},parameters:{docs:{description:{story:"Accessibility-focused test with keyboard navigation, ARIA labels, and screen reader support."}}}},Z={render:k,args:{id:999,de:"Donaudampfschifffahrtsgesellschaftskapitän",en:["Danube steamship company captain","Captain of the Danube steamship company"],phonetic:"doh-now-dampf-shif-fahrts-geh-zel-shafts-kah-pee-tahn",ru:"капитан дунайского пароходного общества",choices:["Danube steamship company captain","River boat operator","Maritime transportation manager","Naval officer"],fromLanguage:"de",toLanguage:"en",media:Tt,info:{text:"This extremely long German compound word demonstrates the language's ability to create complex terms by combining multiple concepts. Such words test the interface's ability to handle very long text strings in various components.",sourceChicago:"Linguistic Society of Germany. Complex Compound Words in German. Academic Press, 2020."}},parameters:{docs:{description:{story:"Stress test with extremely long German compound words to test layout robustness and text handling."}}}};var fe,ge,he;U.parameters={...U.parameters,docs:{...(fe=U.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: InteractiveWrapper,
  parameters: {
    docs: {
      description: {
        story: 'Standard German to English translation question. Shows the complete workflow from question display through answer selection and feedback.'
      }
    }
  }
}`,...(he=(ge=U.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var be,ye,ve;B.parameters={...B.parameters,docs:{...(be=B.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: InteractiveWrapper,
  args: {
    id: 2,
    de: 'Der Baum',
    en: ['The tree', 'Tree'],
    phonetic: 'der bowm',
    ru: 'дерево',
    choices: ['Der Baum', 'Das Auto', 'Die Katze', 'Der Hund'],
    fromLanguage: 'en' as LanguageType,
    toLanguage: 'de' as LanguageType
  },
  parameters: {
    docs: {
      description: {
        story: 'Reverse translation from English to German, testing the language switching functionality.'
      }
    }
  }
}`,...(ve=(ye=B.parameters)==null?void 0:ye.docs)==null?void 0:ve.source}}};var we,xe,Te;W.parameters={...W.parameters,docs:{...(we=W.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: InteractiveWrapper,
  args: {
    id: 3,
    de: 'Das Wasser',
    en: ['Water', 'The water'],
    phonetic: 'das vas-ser',
    ru: 'вода',
    choices: ['Water', 'Fire', 'Earth', 'Air'],
    fromLanguage: 'ru' as LanguageType,
    toLanguage: 'en' as LanguageType,
    media: mockScienceMediaItem,
    info: mockScienceInfoItem
  },
  parameters: {
    docs: {
      description: {
        story: 'Russian to English translation with scientific content and imagery.'
      }
    }
  }
}`,...(Te=(xe=W.parameters)==null?void 0:xe.docs)==null?void 0:Te.source}}};var Ce,Ie,Se;V.parameters={...V.parameters,docs:{...(Ce=V.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: InteractiveWrapper,
  args: {
    id: 4,
    de: 'Der Krieg',
    en: ['The war', 'War'],
    phonetic: 'der kreek',
    ru: 'война',
    choices: ['The war', 'The peace', 'The battle', 'The victory'],
    fromLanguage: 'de' as LanguageType,
    toLanguage: 'en' as LanguageType,
    media: mockHistoryMediaItem,
    info: mockHistoryInfoItem
  },
  parameters: {
    docs: {
      description: {
        story: 'Historical context question with war-related vocabulary and detailed background information.'
      }
    }
  }
}`,...(Se=(Ie=V.parameters)==null?void 0:Ie.docs)==null?void 0:Se.source}}};var Re,Ne,ke;q.parameters={...q.parameters,docs:{...(Re=q.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  render: InteractiveWrapper,
  args: {
    id: 5,
    de: 'Die Familie',
    en: ['The family', 'Family'],
    phonetic: 'dee fah-mee-lee-eh',
    ru: 'семья',
    choices: ['The family', 'Family', 'The relatives', 'The household'],
    fromLanguage: 'de' as LanguageType,
    toLanguage: 'en' as LanguageType
  },
  parameters: {
    docs: {
      description: {
        story: 'Question with multiple acceptable answers to test the answer validation logic.'
      }
    }
  }
}`,...(ke=(Ne=q.parameters)==null?void 0:Ne.docs)==null?void 0:ke.source}}};var Ae,Ee,Le;z.parameters={...z.parameters,docs:{...(Ae=z.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  render: InteractiveWrapper,
  args: {
    id: 6,
    de: 'Die Geschwindigkeit',
    en: ['The speed', 'Speed', 'Velocity'],
    phonetic: 'dee geh-shvin-dish-kite',
    ru: 'скорость',
    choices: ['The speed', 'The distance', 'The time', 'The acceleration'],
    fromLanguage: 'de' as LanguageType,
    toLanguage: 'en' as LanguageType,
    media: mockScienceMediaItem,
    info: mockScienceInfoItem
  },
  parameters: {
    docs: {
      description: {
        story: 'Question with longer vocabulary words to test text wrapping and layout behavior.'
      }
    }
  }
}`,...(Le=(Ee=z.parameters)==null?void 0:Ee.docs)==null?void 0:Le.source}}};var Me,De,je;K.parameters={...K.parameters,docs:{...(Me=K.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  render: InteractiveWrapper,
  args: {
    id: 7,
    de: 'Die Stadt',
    en: ['The city', 'City'],
    phonetic: 'dee shtat',
    ru: 'город',
    choices: ['The city', 'The village', 'The town', 'The country']
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    },
    docs: {
      description: {
        story: 'Question optimized for mobile viewing with responsive layout adjustments.'
      }
    }
  }
}`,...(je=(De=K.parameters)==null?void 0:De.docs)==null?void 0:je.source}}};var _e,Pe,Fe;H.parameters={...H.parameters,docs:{...(_e=H.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  render: InteractiveWrapper,
  args: {
    id: 8,
    de: 'Ja',
    en: ['Yes'],
    ru: 'да',
    choices: ['Yes', 'No', 'Maybe', 'Sometimes'],
    fromLanguage: 'de' as LanguageType,
    toLanguage: 'en' as LanguageType
  },
  parameters: {
    docs: {
      description: {
        story: 'Simple question without phonetic pronunciation guide to test optional prop handling.'
      }
    }
  }
}`,...(Fe=(Pe=H.parameters)==null?void 0:Pe.docs)==null?void 0:Fe.source}}};var Oe,Ge,$e;Q.parameters={...Q.parameters,docs:{...(Oe=Q.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  render: args => <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 p-4 space-y-6">\r
      <div className="text-center mb-8">\r
        <h2 className="text-2xl font-bold text-gray-800">Language Combination Examples</h2>\r
        <p className="text-gray-600 mt-2">Different language pairs showing versatility</p>\r
      </div>\r
      \r
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">\r
        {/* German to English */}\r
        <MultiChoiceQuestion id={10} de="Das Buch" en={['The book', 'Book']} phonetic="das bookh" ru="книга" choices={['The book', 'The paper', 'The pen', 'The table']} fromLanguage="de" toLanguage="en" media={mockLanguageMediaItem} info={mockLanguageInfoItem} />\r
        \r
        {/* English to Russian */}\r
        <MultiChoiceQuestion id={11} de="Die Sonne" en={['The sun', 'Sun']} phonetic="dee zon-neh" ru="солнце" choices={['солнце', 'луна', 'звезда', 'небо']} fromLanguage="en" toLanguage="ru" media={mockScienceMediaItem} info={mockScienceInfoItem} />\r
      </div>\r
    </div>,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Multiple questions showing different language pair combinations in a grid layout.'
      }
    }
  }
}`,...($e=(Ge=Q.parameters)==null?void 0:Ge.docs)==null?void 0:$e.source}}};var Ue,Be,We;Y.parameters={...Y.parameters,docs:{...(Ue=Y.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  render: args => <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-4 flex items-center justify-center">\r
      <div className="max-w-4xl mx-auto">\r
        <div className="bg-blue-900/10 p-4 rounded-lg mb-6 text-center">\r
          <h3 className="font-semibold text-blue-900 mb-2">Accessibility Features Test</h3>\r
          <p className="text-blue-800 text-sm">\r
            Use keyboard navigation (Tab, Enter, Arrow keys) and screen reader to test accessibility features\r
          </p>\r
        </div>\r
        <MultiChoiceQuestion {...args} />\r
      </div>\r
    </div>,
  args: {
    id: 9,
    de: 'Die Musik',
    en: ['The music', 'Music'],
    phonetic: 'dee moo-zeek',
    ru: 'музыка',
    choices: ['The music', 'The sound', 'The song', 'The noise'],
    fromLanguage: 'de' as LanguageType,
    toLanguage: 'en' as LanguageType
  },
  parameters: {
    docs: {
      description: {
        story: 'Accessibility-focused test with keyboard navigation, ARIA labels, and screen reader support.'
      }
    }
  }
}`,...(We=(Be=Y.parameters)==null?void 0:Be.docs)==null?void 0:We.source}}};var Ve,qe,ze;Z.parameters={...Z.parameters,docs:{...(Ve=Z.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  render: InteractiveWrapper,
  args: {
    id: 999,
    de: 'Donaudampfschifffahrtsgesellschaftskapitän',
    en: ['Danube steamship company captain', 'Captain of the Danube steamship company'],
    phonetic: 'doh-now-dampf-shif-fahrts-geh-zel-shafts-kah-pee-tahn',
    ru: 'капитан дунайского пароходного общества',
    choices: ['Danube steamship company captain', 'River boat operator', 'Maritime transportation manager', 'Naval officer'],
    fromLanguage: 'de' as LanguageType,
    toLanguage: 'en' as LanguageType,
    media: mockHistoryMediaItem,
    info: {
      text: 'This extremely long German compound word demonstrates the language\\'s ability to create complex terms by combining multiple concepts. Such words test the interface\\'s ability to handle very long text strings in various components.',
      sourceChicago: 'Linguistic Society of Germany. Complex Compound Words in German. Academic Press, 2020.'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Stress test with extremely long German compound words to test layout robustness and text handling.'
      }
    }
  }
}`,...(ze=(qe=Z.parameters)==null?void 0:qe.docs)==null?void 0:ze.source}}};const no=["Default","EnglishToGerman","RussianToEnglish","HistoricalQuestion","MultipleCorrectAnswers","LongVocabulary","MobileView","NoPhonetic","LanguageCombinations","AccessibilityTest","StressTest"];export{Y as AccessibilityTest,U as Default,B as EnglishToGerman,V as HistoricalQuestion,Q as LanguageCombinations,z as LongVocabulary,K as MobileView,q as MultipleCorrectAnswers,H as NoPhonetic,W as RussianToEnglish,Z as StressTest,no as __namedExportsOrder,to as default};
