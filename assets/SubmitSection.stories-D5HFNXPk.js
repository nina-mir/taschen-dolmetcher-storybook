import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as q}from"./iframe-CTM6SvOc.js";import{a as H}from"./SubmitSection-NK4ubDJY.js";import"./preload-helper-C1FmrZbK.js";import"./utils-jAU0Cazi.js";import"./card-DQZysIcT.js";const{fn:K}=__STORYBOOK_MODULE_TEST__,V={title:"UI Components/SubmitSection",component:H,parameters:{layout:"centered",docs:{description:{component:"Footer component with submit button for multiple choice questions. Includes loading states, accessibility features, and conditional visibility."}}},argTypes:{hideBtn:{description:"Controls visibility of the submit section",control:{type:"select"},options:["visible","hidden"]},btnClassName:{description:"CSS classes for the submit button styling",control:"text"},checkAnswer:{description:"Function called when submit button is clicked",action:"checkAnswer"},disabled:{description:"Whether the submit button is disabled",control:"boolean"},ariaDescribedby:{description:"ID of element that describes the submit button",control:"text"},isLoading:{description:"Whether the submission is in progress",control:"boolean"}},args:{hideBtn:"visible",btnClassName:"font-gyst font-serif",checkAnswer:K(),disabled:!1,isLoading:!1},decorators:[s=>e.jsxs("div",{className:"w-96 border rounded-lg shadow-sm bg-white",children:[e.jsx("div",{className:"p-4 text-center text-gray-500 text-sm",children:"Question content would be above this"}),e.jsx(s,{})]})]},a={},r={args:{disabled:!0},parameters:{docs:{description:{story:"Submit button is disabled when no answer is selected. Shows accessibility message for screen readers."}}}},i={args:{isLoading:!0},parameters:{docs:{description:{story:'Loading state shown while answer is being processed. Button is disabled and shows "CHECKING..." text.'}}}},n={args:{hideBtn:"hidden"},parameters:{docs:{description:{story:"Submit section is completely hidden from view. Useful when submit functionality is not available."}}}},o={args:{ariaDescribedby:"submit-help-text"},decorators:[s=>e.jsxs("div",{className:"w-96 border rounded-lg shadow-sm bg-white",children:[e.jsxs("div",{className:"p-4",children:[e.jsx("p",{className:"text-center text-gray-500 text-sm mb-4",children:"Question content would be above this"}),e.jsx("div",{id:"submit-help-text",className:"text-xs text-gray-600 bg-blue-50 p-2 rounded",children:"Make sure to select your answer before submitting. You can change your selection until you click submit."})]}),e.jsx(s,{})]})],parameters:{docs:{description:{story:"Submit section with additional descriptive text referenced by aria-describedby for enhanced accessibility."}}}},d={args:{btnClassName:"font-mono text-sm tracking-wider"},parameters:{docs:{description:{story:"Shows how different font classes affect the submit button appearance. Falls back to font-serif if font-gyst is unavailable."}}}},c={args:{disabled:!0,isLoading:!0},parameters:{docs:{description:{story:"Edge case where button is both disabled and loading. Button remains disabled with loading text."}}}},l={render:s=>{const[b,u]=q.useState("disabled"),p={ready:{disabled:!1,isLoading:!1,hideBtn:"visible"},disabled:{disabled:!0,isLoading:!1,hideBtn:"visible"},loading:{disabled:!1,isLoading:!0,hideBtn:"visible"},hidden:{disabled:!1,isLoading:!1,hideBtn:"hidden"}};return e.jsxs("div",{className:"w-96 border rounded-lg shadow-sm bg-white",children:[e.jsxs("div",{className:"p-4",children:[e.jsx("p",{className:"text-center text-gray-500 text-sm mb-4",children:"Interactive demo - try different states:"}),e.jsx("div",{className:"flex gap-2 mb-4 flex-wrap justify-center",children:Object.keys(p).map(t=>e.jsx("button",{onClick:()=>u(t),className:`px-3 py-1 text-xs rounded transition-colors ${b===t?"bg-blue-500 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"}`,children:t.charAt(0).toUpperCase()+t.slice(1)},t))})]}),e.jsx(H,{...s,...p[b],checkAnswer:()=>{s.checkAnswer(),b==="ready"&&(u("loading"),setTimeout(()=>u("ready"),2e3))}})]})},parameters:{docs:{description:{story:"Interactive demo allowing you to test all different states of the SubmitSection component."}}}},m={decorators:[s=>e.jsxs("div",{className:"max-w-2xl mx-auto bg-white border rounded-lg shadow-lg",children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Sample Multiple Choice Question"}),e.jsx("p",{className:"text-gray-700 mb-4",children:"What is the capital of France?"}),e.jsxs("div",{className:"space-y-2 mb-4",children:[e.jsxs("label",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"radio",name:"answer",value:"a",className:"text-blue-500"}),e.jsx("span",{children:"London"})]}),e.jsxs("label",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"radio",name:"answer",value:"b",className:"text-blue-500"}),e.jsx("span",{children:"Berlin"})]}),e.jsxs("label",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"radio",name:"answer",value:"c",className:"text-blue-500"}),e.jsx("span",{children:"Paris"})]}),e.jsxs("label",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"radio",name:"answer",value:"d",className:"text-blue-500"}),e.jsx("span",{children:"Madrid"})]})]})]}),e.jsx(s,{})]})],parameters:{docs:{description:{story:"SubmitSection shown in the context of a complete multiple choice question card."}}}};var h,x,g;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(g=(x=a.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var f,y,w;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Submit button is disabled when no answer is selected. Shows accessibility message for screen readers.'
      }
    }
  }
}`,...(w=(y=r.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var v,S,N;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    isLoading: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Loading state shown while answer is being processed. Button is disabled and shows "CHECKING..." text.'
      }
    }
  }
}`,...(N=(S=i.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var j,C,L;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    hideBtn: 'hidden'
  },
  parameters: {
    docs: {
      description: {
        story: 'Submit section is completely hidden from view. Useful when submit functionality is not available.'
      }
    }
  }
}`,...(L=(C=n.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var k,B,A;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ariaDescribedby: 'submit-help-text'
  },
  decorators: [Story => <div className="w-96 border rounded-lg shadow-sm bg-white">\r
        <div className="p-4">\r
          <p className="text-center text-gray-500 text-sm mb-4">\r
            Question content would be above this\r
          </p>\r
          <div id="submit-help-text" className="text-xs text-gray-600 bg-blue-50 p-2 rounded">\r
            Make sure to select your answer before submitting. You can change your selection until you click submit.\r
          </div>\r
        </div>\r
        <Story />\r
      </div>],
  parameters: {
    docs: {
      description: {
        story: 'Submit section with additional descriptive text referenced by aria-describedby for enhanced accessibility.'
      }
    }
  }
}`,...(A=(B=o.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var D,I,E;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    btnClassName: 'font-mono text-sm tracking-wider'
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows how different font classes affect the submit button appearance. Falls back to font-serif if font-gyst is unavailable.'
      }
    }
  }
}`,...(E=(I=d.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var F,_,M;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    disabled: true,
    isLoading: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Edge case where button is both disabled and loading. Button remains disabled with loading text.'
      }
    }
  }
}`,...(M=(_=c.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var O,T,U;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => {
    const [currentState, setCurrentState] = React.useState<'ready' | 'disabled' | 'loading' | 'hidden'>('disabled');
    const stateConfig = {
      ready: {
        disabled: false,
        isLoading: false,
        hideBtn: 'visible'
      },
      disabled: {
        disabled: true,
        isLoading: false,
        hideBtn: 'visible'
      },
      loading: {
        disabled: false,
        isLoading: true,
        hideBtn: 'visible'
      },
      hidden: {
        disabled: false,
        isLoading: false,
        hideBtn: 'hidden'
      }
    };
    return <div className="w-96 border rounded-lg shadow-sm bg-white">\r
        <div className="p-4">\r
          <p className="text-center text-gray-500 text-sm mb-4">\r
            Interactive demo - try different states:\r
          </p>\r
          <div className="flex gap-2 mb-4 flex-wrap justify-center">\r
            {Object.keys(stateConfig).map(state => <button key={state} onClick={() => setCurrentState(state as any)} className={\`px-3 py-1 text-xs rounded transition-colors \${currentState === state ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}\`}>\r
                {state.charAt(0).toUpperCase() + state.slice(1)}\r
              </button>)}\r
          </div>\r
        </div>\r
        <SubmitSection {...args} {...stateConfig[currentState]} checkAnswer={() => {
        args.checkAnswer();
        // Simulate loading state
        if (currentState === 'ready') {
          setCurrentState('loading');
          setTimeout(() => setCurrentState('ready'), 2000);
        }
      }} />\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive demo allowing you to test all different states of the SubmitSection component.'
      }
    }
  }
}`,...(U=(T=l.parameters)==null?void 0:T.docs)==null?void 0:U.source}}};var W,Q,R;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  decorators: [Story => <div className="max-w-2xl mx-auto bg-white border rounded-lg shadow-lg">\r
        <div className="p-6">\r
          <h2 className="text-xl font-semibold mb-4">Sample Multiple Choice Question</h2>\r
          <p className="text-gray-700 mb-4">What is the capital of France?</p>\r
          <div className="space-y-2 mb-4">\r
            <label className="flex items-center space-x-2">\r
              <input type="radio" name="answer" value="a" className="text-blue-500" />\r
              <span>London</span>\r
            </label>\r
            <label className="flex items-center space-x-2">\r
              <input type="radio" name="answer" value="b" className="text-blue-500" />\r
              <span>Berlin</span>\r
            </label>\r
            <label className="flex items-center space-x-2">\r
              <input type="radio" name="answer" value="c" className="text-blue-500" />\r
              <span>Paris</span>\r
            </label>\r
            <label className="flex items-center space-x-2">\r
              <input type="radio" name="answer" value="d" className="text-blue-500" />\r
              <span>Madrid</span>\r
            </label>\r
          </div>\r
        </div>\r
        <Story />\r
      </div>],
  parameters: {
    docs: {
      description: {
        story: 'SubmitSection shown in the context of a complete multiple choice question card.'
      }
    }
  }
}`,...(R=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:R.source}}};const X=["Default","Disabled","Loading","Hidden","WithAriaDescription","AlternativeFont","DisabledAndLoading","InteractiveDemo","InCardContext"];export{d as AlternativeFont,a as Default,r as Disabled,c as DisabledAndLoading,n as Hidden,m as InCardContext,l as InteractiveDemo,i as Loading,o as WithAriaDescription,X as __namedExportsOrder,V as default};
