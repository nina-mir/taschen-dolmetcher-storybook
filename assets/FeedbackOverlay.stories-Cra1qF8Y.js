import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as N}from"./iframe-BKLHIWF5.js";import{F as ve}from"./FeedbackOverlay-CKEgpz1z.js";import"./preload-helper-C1FmrZbK.js";const Oe={title:"UI Components/FeedbackOverlay",component:ve,parameters:{layout:"centered",docs:{description:{component:"Overlay component for showing feedback messages when answers are incorrect. Features accessibility support, customizable styling, and optional background imagery."}}},argTypes:{isVisible:{description:"Controls whether the overlay is shown or hidden",control:"boolean"},backgroundImgUrl:{description:"URL of background image to display behind the feedback",control:"text"},messageText:{description:"Main feedback message text (e.g., wrong❌⚠️falsch❌⚠️неправильный)",control:"text"},captionText:{description:"Additional caption text shown at bottom",control:"text"},ariaLabel:{description:"Aria label for the entire feedback overlay",control:"text"},containerClassName:{description:"CSS classes for the overlay container",control:"text"},messageClassName:{description:"CSS classes for the main message",control:"text"},captionClassName:{description:"CSS classes for the caption text",control:"text"},backgroundStyle:{description:"Additional CSS styles for the background",control:"object"}},args:{isVisible:!0,messageText:"wrong❌⚠️falsch❌",captionText:"Wrong Answer!",ariaLabel:"Answer feedback"},decorators:[s=>e.jsxs("div",{className:"relative w-96 h-64 border-2 border-dashed border-gray-300 bg-gray-50 rounded-lg",children:[e.jsx("div",{className:"absolute inset-2 bg-white rounded border shadow-sm flex items-center justify-center text-gray-400 text-sm",children:"Question content would be here"}),e.jsx(s,{})]})]},r={},t={args:{isVisible:!1},parameters:{docs:{description:{story:"When isVisible is false, the overlay renders nothing (null)."}}}},a={args:{messageText:"WRONG ❌",captionText:"Try again!"}},o={args:{messageText:"INCORRECTO ❌",captionText:"¡Inténtalo de nuevo!"}},n={args:{messageText:"FALSCH ❌",captionText:"Versuchen Sie es erneut!"}},i={args:{messageText:"НЕПРАВИЛЬНО ❌",captionText:"Попробуйте еще раз!"}},l={args:{messageText:"wrong❌⚠️falsch❌⚠️неправильный",captionText:"Wrong Answer! | ¡Respuesta incorrecta! | Falsche Antwort!"}},d={args:{messageText:"INCORRECT ❌",captionText:void 0},parameters:{docs:{description:{story:"Feedback overlay with only the main message, no caption text."}}}},c={args:{messageText:"WRONG ❌",captionText:"Study the image more carefully",backgroundImgUrl:"https://picsum.photos/400/300?random=10"},parameters:{docs:{description:{story:"Overlay with a background image, useful for visual learning questions."}}}},m={args:{messageText:"INCORRECT ⚠️",captionText:"Review the question",messageClassName:"text-2xl text-yellow-900 bg-yellow-400/90 p-4 rounded-lg font-bold border-2 border-yellow-600 shadow-lg",captionClassName:"bg-yellow-900/70 text-yellow-100 px-6 py-3 rounded-lg font-semibold text-lg backdrop-blur-sm border border-yellow-600"},parameters:{docs:{description:{story:"Custom warning-style theme with yellow colors and bold styling."}}}},g={args:{messageText:"Try again",captionText:"Not quite right",messageClassName:"text-lg text-gray-800 bg-white/95 p-3 rounded-md shadow-sm border",captionClassName:"bg-gray-100/90 text-gray-700 px-4 py-2 rounded-md text-sm backdrop-blur-sm",containerClassName:"absolute inset-0 flex flex-col items-center justify-center gap-4 z-10"},parameters:{docs:{description:{story:"Minimal, clean styling with subtle colors and centered layout."}}}},p={args:{messageText:"WRONG! ❌",captionText:"Better luck next time!",messageClassName:"text-3xl text-white bg-red-600/95 p-6 rounded-xl font-black shadow-2xl border-4 border-red-800 transform -rotate-2",captionClassName:"bg-black/80 text-red-400 px-6 py-4 rounded-lg font-bold text-xl backdrop-blur-md shadow-lg border border-red-600",containerClassName:"absolute inset-0 flex flex-col items-center justify-between p-8 z-10",backgroundStyle:{backgroundColor:"rgba(220, 38, 38, 0.1)",backgroundBlendMode:"multiply"}},parameters:{docs:{description:{story:"High-impact dramatic styling with rotation, shadows, and intense colors."}}}},u={args:{messageText:"INCORRECT ❌",captionText:"This overlay announces to screen readers",ariaLabel:"Answer feedback: Your answer was incorrect, please try again"},decorators:[s=>e.jsxs("div",{className:"w-full max-w-2xl",children:[e.jsxs("div",{className:"relative w-96 h-64 border-2 border-dashed border-gray-300 bg-gray-50 rounded-lg",children:[e.jsx("div",{className:"absolute inset-2 bg-white rounded border shadow-sm flex items-center justify-center text-gray-400 text-sm",children:"Question content area"}),e.jsx(s,{})]}),e.jsxs("div",{className:"mb-4 p-4 bg-blue-50 rounded-lg border border-blue-200",children:[e.jsx("h3",{className:"text-sm font-semibold text-blue-800 mb-2",children:"Accessibility Features:"}),e.jsxs("ul",{className:"text-xs text-blue-700 space-y-1",children:[e.jsxs("li",{children:["• ",e.jsx("code",{children:'role="alert"'})," - Immediately announces to screen readers"]}),e.jsxs("li",{children:["• ",e.jsx("code",{children:'aria-live="assertive"'})," - Interrupts other announcements"]}),e.jsxs("li",{children:["• ",e.jsx("code",{children:"aria-label"})," - Provides context for the overlay"]}),e.jsx("li",{children:"• Semantic HTML structure with header/footer roles"}),e.jsx("li",{children:"• High contrast colors for visibility"})]})]})]})],parameters:{layout:"centered",docs:{description:{story:"Demonstrates all accessibility features including ARIA roles, live regions, and semantic structure."}}}},x={args:{messageText:"WRONG ❌",captionText:"Try again!",messageClassName:"text-lg text-soviet-gold bg-red-500/80 p-2 rounded",captionClassName:"bg-black/50 text-white px-3 py-2 rounded font-semibold text-base backdrop-blur-sm"},decorators:[s=>e.jsxs("div",{className:"relative w-80 h-48 border-2 border-dashed border-gray-300 bg-gray-50 rounded-lg",children:[e.jsx("div",{className:"absolute inset-2 bg-white rounded border shadow-sm flex items-center justify-center text-gray-400 text-xs",children:"Mobile question view"}),e.jsx(s,{})]})],parameters:{docs:{description:{story:"Optimized for mobile screens with smaller text and padding."}}}},b={args:{messageText:"INCORRECT ❌",captionText:"Review the question and try again",messageClassName:"text-3xl text-soviet-gold bg-red-500/80 p-6 md:self-start rounded-lg shadow-lg",captionClassName:"bg-black/50 text-white px-6 py-4 rounded-lg font-semibold text-xl backdrop-blur-sm"},decorators:[s=>e.jsxs("div",{className:"relative w-[600px] h-80 border-2 border-dashed border-gray-300 bg-gray-50 rounded-lg",children:[e.jsx("div",{className:"absolute inset-4 bg-white rounded border shadow-sm flex items-center justify-center text-gray-400",children:"Desktop question view - larger content area"}),e.jsx(s,{})]})],parameters:{docs:{description:{story:"Desktop-optimized layout with larger text and spacing."}}}},h={render:s=>{const[w,fe]=N.useState(!0),[f,Ne]=N.useState(0),v=[{text:"WRONG ❌",caption:"Try again!"},{text:"INCORRECT ⚠️",caption:"Not quite right"},{text:"FALSCH ❌",caption:"Versuchen Sie es erneut!"},{text:"НЕПРАВИЛЬНО ❌",caption:"Попробуйте еще раз!"}],Te=()=>fe(!w),Ce=()=>Ne(Se=>(Se+1)%v.length);return e.jsxs("div",{className:"w-full max-w-2xl space-y-4",children:[e.jsxs("div",{className:"relative flex gap-2 justify-center",children:[e.jsxs("button",{onClick:Te,className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors",children:[w?"Hide":"Show"," Overlay"]}),e.jsx("button",{onClick:Ce,className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors",children:"Next Message"})]}),e.jsxs("div",{className:"relative w-full h-64 border-2 border-dashed border-gray-300 bg-red-500 rounded-lg",children:[e.jsx("div",{className:"absolute inset-4 bg-white rounded border shadow-sm flex items-center justify-center text-gray-400",children:"Interactive demo - use buttons above"}),e.jsx(ve,{...s,isVisible:w,messageText:v[f].text,captionText:v[f].caption})]})]})},parameters:{docs:{description:{story:"Interactive demo allowing you to toggle visibility and cycle through different feedback messages."}}}},y={decorators:[s=>e.jsxs("div",{className:"max-w-2xl mx-auto bg-white border rounded-lg shadow-lg overflow-hidden",children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Question 5: What is the capital of Spain?"}),e.jsxs("div",{className:"space-y-2 mb-4",children:[e.jsxs("label",{className:"flex items-center space-x-2 p-2 border rounded hover:bg-gray-50",children:[e.jsx("input",{type:"radio",name:"answer",value:"a",className:"text-red-500"}),e.jsx("span",{children:"Barcelona"}),e.jsx("span",{className:"ml-auto text-red-500 font-bold",children:"✗ Selected"})]}),e.jsxs("label",{className:"flex items-center space-x-2 p-2 border rounded",children:[e.jsx("input",{type:"radio",name:"answer",value:"b"}),e.jsx("span",{children:"Madrid"}),e.jsx("span",{className:"ml-auto text-green-500",children:"✓ Correct"})]}),e.jsxs("label",{className:"flex items-center space-x-2 p-2 border rounded",children:[e.jsx("input",{type:"radio",name:"answer",value:"c"}),e.jsx("span",{children:"Seville"})]})]}),e.jsx("button",{className:"w-full py-2 bg-gray-300 text-gray-500 rounded cursor-not-allowed",children:"SUBMIT (Answered incorrectly)"})]}),e.jsx("div",{className:"relative h-48 bg-gradient-to-br from-red-100 to-orange-100",children:e.jsx(s,{})})]})],args:{messageText:"INCORRECTO ❌",captionText:"Madrid is the capital of Spain!"},parameters:{docs:{description:{story:"FeedbackOverlay shown in the context of a complete multiple choice question after an incorrect answer."}}}};var T,C,S;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:"{}",...(S=(C=r.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var j,k,R;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    isVisible: false
  },
  parameters: {
    docs: {
      description: {
        story: 'When isVisible is false, the overlay renders nothing (null).'
      }
    }
  }
}`,...(R=(k=t.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var I,O,M;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    messageText: 'WRONG ❌',
    captionText: 'Try again!'
  }
}`,...(M=(O=a.parameters)==null?void 0:O.docs)==null?void 0:M.source}}};var V,A,W;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    messageText: 'INCORRECTO ❌',
    captionText: '¡Inténtalo de nuevo!'
  }
}`,...(W=(A=o.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};var E,F,q;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    messageText: 'FALSCH ❌',
    captionText: 'Versuchen Sie es erneut!'
  }
}`,...(q=(F=n.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};var D,H,G;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    messageText: 'НЕПРАВИЛЬНО ❌',
    captionText: 'Попробуйте еще раз!'
  }
}`,...(G=(H=i.parameters)==null?void 0:H.docs)==null?void 0:G.source}}};var L,B,z;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    messageText: 'wrong❌⚠️falsch❌⚠️неправильный',
    captionText: 'Wrong Answer! | ¡Respuesta incorrecta! | Falsche Antwort!'
  }
}`,...(z=(B=l.parameters)==null?void 0:B.docs)==null?void 0:z.source}}};var Q,U,P;d.parameters={...d.parameters,docs:{...(Q=d.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    messageText: 'INCORRECT ❌',
    captionText: undefined
  },
  parameters: {
    docs: {
      description: {
        story: 'Feedback overlay with only the main message, no caption text.'
      }
    }
  }
}`,...(P=(U=d.parameters)==null?void 0:U.docs)==null?void 0:P.source}}};var Y,_,J;c.parameters={...c.parameters,docs:{...(Y=c.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    messageText: 'WRONG ❌',
    captionText: 'Study the image more carefully',
    backgroundImgUrl: 'https://picsum.photos/400/300?random=10'
  },
  parameters: {
    docs: {
      description: {
        story: 'Overlay with a background image, useful for visual learning questions.'
      }
    }
  }
}`,...(J=(_=c.parameters)==null?void 0:_.docs)==null?void 0:J.source}}};var K,X,Z;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    messageText: 'INCORRECT ⚠️',
    captionText: 'Review the question',
    messageClassName: 'text-2xl text-yellow-900 bg-yellow-400/90 p-4 rounded-lg font-bold border-2 border-yellow-600 shadow-lg',
    captionClassName: 'bg-yellow-900/70 text-yellow-100 px-6 py-3 rounded-lg font-semibold text-lg backdrop-blur-sm border border-yellow-600'
  },
  parameters: {
    docs: {
      description: {
        story: 'Custom warning-style theme with yellow colors and bold styling.'
      }
    }
  }
}`,...(Z=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var $,ee,se;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    messageText: 'Try again',
    captionText: 'Not quite right',
    messageClassName: 'text-lg text-gray-800 bg-white/95 p-3 rounded-md shadow-sm border',
    captionClassName: 'bg-gray-100/90 text-gray-700 px-4 py-2 rounded-md text-sm backdrop-blur-sm',
    containerClassName: 'absolute inset-0 flex flex-col items-center justify-center gap-4 z-10'
  },
  parameters: {
    docs: {
      description: {
        story: 'Minimal, clean styling with subtle colors and centered layout.'
      }
    }
  }
}`,...(se=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:se.source}}};var re,te,ae;p.parameters={...p.parameters,docs:{...(re=p.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    messageText: 'WRONG! ❌',
    captionText: 'Better luck next time!',
    messageClassName: 'text-3xl text-white bg-red-600/95 p-6 rounded-xl font-black shadow-2xl border-4 border-red-800 transform -rotate-2',
    captionClassName: 'bg-black/80 text-red-400 px-6 py-4 rounded-lg font-bold text-xl backdrop-blur-md shadow-lg border border-red-600',
    containerClassName: 'absolute inset-0 flex flex-col items-center justify-between p-8 z-10',
    backgroundStyle: {
      backgroundColor: 'rgba(220, 38, 38, 0.1)',
      backgroundBlendMode: 'multiply' as const
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'High-impact dramatic styling with rotation, shadows, and intense colors.'
      }
    }
  }
}`,...(ae=(te=p.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var oe,ne,ie;u.parameters={...u.parameters,docs:{...(oe=u.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    messageText: 'INCORRECT ❌',
    captionText: 'This overlay announces to screen readers',
    ariaLabel: 'Answer feedback: Your answer was incorrect, please try again'
  },
  decorators: [Story => <div className="w-full max-w-2xl">\r
        <div className="relative w-96 h-64 border-2 border-dashed border-gray-300 bg-gray-50 rounded-lg">\r
          <div className="absolute inset-2 bg-white rounded border shadow-sm flex items-center justify-center text-gray-400 text-sm">\r
            Question content area\r
          </div>\r
          <Story />\r
        </div>\r
        <div className="mb-4 p-4 bg-blue-50 rounded-lg border border-blue-200">\r
          <h3 className="text-sm font-semibold text-blue-800 mb-2">Accessibility Features:</h3>\r
          <ul className="text-xs text-blue-700 space-y-1">\r
            <li>• <code>role="alert"</code> - Immediately announces to screen readers</li>\r
            <li>• <code>aria-live="assertive"</code> - Interrupts other announcements</li>\r
            <li>• <code>aria-label</code> - Provides context for the overlay</li>\r
            <li>• Semantic HTML structure with header/footer roles</li>\r
            <li>• High contrast colors for visibility</li>\r
          </ul>\r
        </div>\r
        \r
      </div>],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'Demonstrates all accessibility features including ARIA roles, live regions, and semantic structure.'
      }
    }
  }
}`,...(ie=(ne=u.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var le,de,ce;x.parameters={...x.parameters,docs:{...(le=x.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    messageText: 'WRONG ❌',
    captionText: 'Try again!',
    messageClassName: 'text-lg text-soviet-gold bg-red-500/80 p-2 rounded',
    captionClassName: 'bg-black/50 text-white px-3 py-2 rounded font-semibold text-base backdrop-blur-sm'
  },
  decorators: [Story => <div className="relative w-80 h-48 border-2 border-dashed border-gray-300 bg-gray-50 rounded-lg">\r
        <div className="absolute inset-2 bg-white rounded border shadow-sm flex items-center justify-center text-gray-400 text-xs">\r
          Mobile question view\r
        </div>\r
        <Story />\r
      </div>],
  parameters: {
    docs: {
      description: {
        story: 'Optimized for mobile screens with smaller text and padding.'
      }
    }
  }
}`,...(ce=(de=x.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var me,ge,pe;b.parameters={...b.parameters,docs:{...(me=b.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    messageText: 'INCORRECT ❌',
    captionText: 'Review the question and try again',
    messageClassName: 'text-3xl text-soviet-gold bg-red-500/80 p-6 md:self-start rounded-lg shadow-lg',
    captionClassName: 'bg-black/50 text-white px-6 py-4 rounded-lg font-semibold text-xl backdrop-blur-sm'
  },
  decorators: [Story => <div className="relative w-[600px] h-80 border-2 border-dashed border-gray-300 bg-gray-50 rounded-lg">\r
        <div className="absolute inset-4 bg-white rounded border shadow-sm flex items-center justify-center text-gray-400">\r
          Desktop question view - larger content area\r
        </div>\r
        <Story />\r
      </div>],
  parameters: {
    docs: {
      description: {
        story: 'Desktop-optimized layout with larger text and spacing.'
      }
    }
  }
}`,...(pe=(ge=b.parameters)==null?void 0:ge.docs)==null?void 0:pe.source}}};var ue,xe,be;h.parameters={...h.parameters,docs:{...(ue=h.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: args => {
    const [isVisible, setIsVisible] = React.useState(true);
    const [currentMessage, setCurrentMessage] = React.useState(0);
    const messages = [{
      text: 'WRONG ❌',
      caption: 'Try again!'
    }, {
      text: 'INCORRECT ⚠️',
      caption: 'Not quite right'
    }, {
      text: 'FALSCH ❌',
      caption: 'Versuchen Sie es erneut!'
    }, {
      text: 'НЕПРАВИЛЬНО ❌',
      caption: 'Попробуйте еще раз!'
    }];
    const toggleVisibility = () => setIsVisible(!isVisible);
    const nextMessage = () => setCurrentMessage(prev => (prev + 1) % messages.length);
    return <div className="w-full max-w-2xl space-y-4">\r
        <div className="relative flex gap-2 justify-center">\r
          <button onClick={toggleVisibility} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">\r
            {isVisible ? 'Hide' : 'Show'} Overlay\r
          </button>\r
          <button onClick={nextMessage} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors">\r
            Next Message\r
          </button>\r
        </div>\r
        \r
        <div className="relative w-full h-64 border-2 border-dashed border-gray-300 bg-red-500 rounded-lg">\r
          <div className="absolute inset-4 bg-white rounded border shadow-sm flex items-center justify-center text-gray-400">\r
            Interactive demo - use buttons above\r
          </div>\r
          <FeedbackOverlay {...args} isVisible={isVisible} messageText={messages[currentMessage].text} captionText={messages[currentMessage].caption} />\r
        </div>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive demo allowing you to toggle visibility and cycle through different feedback messages.'
      }
    }
  }
}`,...(be=(xe=h.parameters)==null?void 0:xe.docs)==null?void 0:be.source}}};var he,ye,we;y.parameters={...y.parameters,docs:{...(he=y.parameters)==null?void 0:he.docs,source:{originalSource:`{
  decorators: [Story => <div className="max-w-2xl mx-auto bg-white border rounded-lg shadow-lg overflow-hidden">\r
        <div className="p-6">\r
          <h2 className="text-xl font-semibold mb-4">Question 5: What is the capital of Spain?</h2>\r
          <div className="space-y-2 mb-4">\r
            <label className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">\r
              <input type="radio" name="answer" value="a" className="text-red-500" />\r
              <span>Barcelona</span>\r
              <span className="ml-auto text-red-500 font-bold">✗ Selected</span>\r
            </label>\r
            <label className="flex items-center space-x-2 p-2 border rounded">\r
              <input type="radio" name="answer" value="b" />\r
              <span>Madrid</span>\r
              <span className="ml-auto text-green-500">✓ Correct</span>\r
            </label>\r
            <label className="flex items-center space-x-2 p-2 border rounded">\r
              <input type="radio" name="answer" value="c" />\r
              <span>Seville</span>\r
            </label>\r
          </div>\r
          <button className="w-full py-2 bg-gray-300 text-gray-500 rounded cursor-not-allowed">\r
            SUBMIT (Answered incorrectly)\r
          </button>\r
        </div>\r
        <div className="relative h-48 bg-gradient-to-br from-red-100 to-orange-100">\r
          <Story />\r
        </div>\r
      </div>],
  args: {
    messageText: 'INCORRECTO ❌',
    captionText: 'Madrid is the capital of Spain!'
  },
  parameters: {
    docs: {
      description: {
        story: 'FeedbackOverlay shown in the context of a complete multiple choice question after an incorrect answer.'
      }
    }
  }
}`,...(we=(ye=y.parameters)==null?void 0:ye.docs)==null?void 0:we.source}}};const Me=["Default","Hidden","English","Spanish","German","Russian","Mixed","NoCaption","WithBackgroundImage","WarningStyle","MinimalStyle","DramaticStyle","AccessibilityShowcase","MobileView","DesktopView","InteractiveDemo","InQuestionContext"];export{u as AccessibilityShowcase,r as Default,b as DesktopView,p as DramaticStyle,a as English,n as German,t as Hidden,y as InQuestionContext,h as InteractiveDemo,g as MinimalStyle,l as Mixed,x as MobileView,d as NoCaption,i as Russian,o as Spanish,m as WarningStyle,c as WithBackgroundImage,Me as __namedExportsOrder,Oe as default};
