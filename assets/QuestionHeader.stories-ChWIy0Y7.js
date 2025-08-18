import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as b}from"./iframe-CTM6SvOc.js";import{Q as s}from"./QuestionHeader-CEU57KFH.js";import"./preload-helper-C1FmrZbK.js";import"./react-icons.esm-B3LRyK4S.js";import"./card-DQZysIcT.js";import"./utils-jAU0Cazi.js";const{fn:ie}=__STORYBOOK_MODULE_TEST__,ge={title:"UI Components/QuestionHeader",component:s,parameters:{layout:"centered",docs:{description:{component:"Header component for multiple choice questions. Displays question number, content, and reset functionality with accessibility features."}}},argTypes:{toggleFinalResult:{description:"Function called when reset button is clicked",action:"toggleFinalResult"},question:{description:"The question text to display",control:"text"},id:{description:"Question number/identifier",control:{type:"number",min:0}},textColor:{description:"Tailwind text color class for the dot and reset button",control:{type:"select"},options:["text-blue-500","text-green-500","text-red-500","text-purple-500","text-orange-500","text-gray-600","text-black","text-soviet-gold"]},idClassName:{description:"CSS classes for the question ID styling",control:"text"},questionId:{description:"HTML ID for the question heading",control:"text"}},args:{toggleFinalResult:ie(),question:"Gibt es russische Truppen im Dorf?",id:1,textColor:"text-blue-500",idClassName:"font-gyst font-sans",questionId:"question-1"},decorators:[t=>e.jsxs("div",{className:"w-full max-w-2xl border rounded-lg shadow-sm bg-white",children:[e.jsx(t,{}),e.jsx("div",{className:"p-4 text-sm text-gray-500 border-t",children:"Question content and answer choices would appear below..."})]})]},r={},o={args:{question:"Which of the following sentences correctly demonstrates the use of the subjunctive mood in Spanish when expressing doubt or uncertainty about a past event?",id:5},parameters:{docs:{description:{story:"Shows how the component handles longer question text with proper wrapping and layout."}}}},n={args:{question:"¿Cómo estás?",id:2},parameters:{docs:{description:{story:"Simple, short question demonstrating minimal content layout."}}}},a={args:{question:"Bei Fluchtversuch wird geschossen!",id:127},parameters:{docs:{description:{story:"Shows how larger question numbers are displayed."}}}},i={args:{question:"Which verb form is correct in this context?",id:3,textColor:"text-green-500"}},c={args:{question:"Identify the grammatical error in this sentence.",id:4,textColor:"text-red-500"}},d={args:{question:"What is the plural form of this noun?",id:6,textColor:"text-purple-500"}},l={args:{question:"Choose the correct pronunciation guide.",id:8,idClassName:"font-mono text-lg font-bold",textColor:"text-orange-500"},parameters:{docs:{description:{story:"Custom styling for the question ID number using different font classes."}}}},u={args:{question:'What does "biblioteca" mean in English?',id:7,questionId:"accessible-question-demo",textColor:"text-gray-600"},decorators:[t=>e.jsxs("div",{className:"w-full max-w-2xl border rounded-lg shadow-sm bg-white",children:[e.jsx(t,{}),e.jsxs("div",{className:"p-4 border-t bg-blue-50",children:[e.jsx("h3",{className:"text-sm font-semibold text-blue-800 mb-2",children:"Accessibility Features:"}),e.jsxs("ul",{className:"text-xs text-blue-700 space-y-1",children:[e.jsx("li",{children:"• Question number has aria-label"}),e.jsx("li",{children:"• Question text is focusable (tabIndex=0)"}),e.jsx("li",{children:"• Reset button has descriptive aria-label and title"}),e.jsx("li",{children:"• Icons are hidden from screen readers (aria-hidden)"}),e.jsx("li",{children:"• Keyboard navigation support (Enter/Space)"}),e.jsx("li",{children:"• Focus ring styling for keyboard users"})]})]})]})],parameters:{docs:{description:{story:"Demonstrates all accessibility features including keyboard navigation, ARIA labels, and focus management."}}}},m={render:t=>{const[re,oe]=b.useState(0),[x,ne]=b.useState("");return e.jsxs("div",{className:"w-full max-w-2xl border rounded-lg shadow-sm bg-white",children:[e.jsx(s,{...t,toggleFinalResult:()=>{t.toggleFinalResult(),oe(ae=>ae+1),ne(new Date().toLocaleTimeString())}}),e.jsxs("div",{className:"p-4 border-t bg-gray-50",children:[e.jsxs("p",{className:"text-sm text-gray-600",children:["Reset button clicked: ",e.jsxs("span",{className:"font-semibold",children:[re," times"]})]}),x&&e.jsxs("p",{className:"text-xs text-gray-500 mt-1",children:["Last reset: ",x]}),e.jsx("p",{className:"text-xs text-gray-500 mt-2",children:"Try clicking the reset button or using keyboard (Tab to focus, then Enter/Space)"})]})]})},parameters:{docs:{description:{story:"Interactive demo showing reset button functionality and keyboard navigation."}}}},h={render:t=>e.jsxs("div",{className:"space-y-4 w-full max-w-2xl",children:[e.jsx("div",{className:"border rounded-lg shadow-sm bg-white",children:e.jsx(s,{...t,question:"What is 'gracias' in English?",id:1,questionId:"question-1",textColor:"text-blue-500"})}),e.jsx("div",{className:"border rounded-lg shadow-sm bg-white",children:e.jsx(s,{...t,question:"Choose the correct article for 'casa'.",id:2,questionId:"question-2",textColor:"text-green-500"})}),e.jsx("div",{className:"border rounded-lg shadow-sm bg-white",children:e.jsx(s,{...t,question:"Which verb tense is used in this sentence?",id:3,questionId:"question-3",textColor:"text-purple-500"})})]}),parameters:{docs:{description:{story:"Multiple QuestionHeader components showing how they work in a series of questions with different themes."}}}},p={args:{question:"Hover over the reset button to see the interaction states.",id:9,textColor:"text-blue-600"},decorators:[t=>e.jsxs("div",{className:"w-full max-w-2xl border rounded-lg shadow-sm bg-white",children:[e.jsx(t,{}),e.jsx("div",{className:"p-4 border-t bg-yellow-50",children:e.jsx("p",{className:"text-sm text-yellow-800",children:"💡 Hover over the reset button to see the color transition and background change"})})]})],parameters:{docs:{description:{story:"Shows the hover and focus states of the reset button with smooth transitions."}}}},g={args:{question:"This question has an unusually high number.",id:99999,textColor:"text-gray-700"},parameters:{docs:{description:{story:"Edge case testing with a very large question ID number."}}}};var y,w,f;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(f=(w=r.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var v,q,S;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    question: 'Which of the following sentences correctly demonstrates the use of the subjunctive mood in Spanish when expressing doubt or uncertainty about a past event?',
    id: 5
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows how the component handles longer question text with proper wrapping and layout.'
      }
    }
  }
}`,...(S=(q=o.parameters)==null?void 0:q.docs)==null?void 0:S.source}}};var C,N,j;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    question: '¿Cómo estás?',
    id: 2
  },
  parameters: {
    docs: {
      description: {
        story: 'Simple, short question demonstrating minimal content layout.'
      }
    }
  }
}`,...(j=(N=n.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var I,R,Q;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    question: 'Bei Fluchtversuch wird geschossen!',
    id: 127
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows how larger question numbers are displayed.'
      }
    }
  }
}`,...(Q=(R=a.parameters)==null?void 0:R.docs)==null?void 0:Q.source}}};var T,D,k;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    question: 'Which verb form is correct in this context?',
    id: 3,
    textColor: 'text-green-500'
  }
}`,...(k=(D=i.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var H,E,F;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    question: 'Identify the grammatical error in this sentence.',
    id: 4,
    textColor: 'text-red-500'
  }
}`,...(F=(E=c.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var L,W,A;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    question: 'What is the plural form of this noun?',
    id: 6,
    textColor: 'text-purple-500'
  }
}`,...(A=(W=d.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var _,M,O;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    question: 'Choose the correct pronunciation guide.',
    id: 8,
    idClassName: 'font-mono text-lg font-bold',
    textColor: 'text-orange-500'
  },
  parameters: {
    docs: {
      description: {
        story: 'Custom styling for the question ID number using different font classes.'
      }
    }
  }
}`,...(O=(M=l.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var B,G,K;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    question: 'What does "biblioteca" mean in English?',
    id: 7,
    questionId: 'accessible-question-demo',
    textColor: 'text-gray-600'
  },
  decorators: [Story => <div className="w-full max-w-2xl border rounded-lg shadow-sm bg-white">\r
        <Story />\r
        <div className="p-4 border-t bg-blue-50">\r
          <h3 className="text-sm font-semibold text-blue-800 mb-2">Accessibility Features:</h3>\r
          <ul className="text-xs text-blue-700 space-y-1">\r
            <li>• Question number has aria-label</li>\r
            <li>• Question text is focusable (tabIndex=0)</li>\r
            <li>• Reset button has descriptive aria-label and title</li>\r
            <li>• Icons are hidden from screen readers (aria-hidden)</li>\r
            <li>• Keyboard navigation support (Enter/Space)</li>\r
            <li>• Focus ring styling for keyboard users</li>\r
          </ul>\r
        </div>\r
      </div>],
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates all accessibility features including keyboard navigation, ARIA labels, and focus management.'
      }
    }
  }
}`,...(K=(G=u.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var P,U,Y;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => {
    const [resetCount, setResetCount] = React.useState(0);
    const [lastReset, setLastReset] = React.useState<string>('');
    return <div className="w-full max-w-2xl border rounded-lg shadow-sm bg-white">\r
        <QuestionHeader {...args} toggleFinalResult={() => {
        args.toggleFinalResult();
        setResetCount(prev => prev + 1);
        setLastReset(new Date().toLocaleTimeString());
      }} />\r
        <div className="p-4 border-t bg-gray-50">\r
          <p className="text-sm text-gray-600">\r
            Reset button clicked: <span className="font-semibold">{resetCount} times</span>\r
          </p>\r
          {lastReset && <p className="text-xs text-gray-500 mt-1">\r
              Last reset: {lastReset}\r
            </p>}\r
          <p className="text-xs text-gray-500 mt-2">\r
            Try clicking the reset button or using keyboard (Tab to focus, then Enter/Space)\r
          </p>\r
        </div>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive demo showing reset button functionality and keyboard navigation.'
      }
    }
  }
}`,...(Y=(U=m.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var z,J,V;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => <div className="space-y-4 w-full max-w-2xl">\r
      <div className="border rounded-lg shadow-sm bg-white">\r
        <QuestionHeader {...args} question="What is 'gracias' in English?" id={1} questionId="question-1" textColor="text-blue-500" />\r
      </div>\r
      <div className="border rounded-lg shadow-sm bg-white">\r
        <QuestionHeader {...args} question="Choose the correct article for 'casa'." id={2} questionId="question-2" textColor="text-green-500" />\r
      </div>\r
      <div className="border rounded-lg shadow-sm bg-white">\r
        <QuestionHeader {...args} question="Which verb tense is used in this sentence?" id={3} questionId="question-3" textColor="text-purple-500" />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Multiple QuestionHeader components showing how they work in a series of questions with different themes.'
      }
    }
  }
}`,...(V=(J=h.parameters)==null?void 0:J.docs)==null?void 0:V.source}}};var X,Z,$;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    question: 'Hover over the reset button to see the interaction states.',
    id: 9,
    textColor: 'text-blue-600'
  },
  decorators: [Story => <div className="w-full max-w-2xl border rounded-lg shadow-sm bg-white">\r
        <Story />\r
        <div className="p-4 border-t bg-yellow-50">\r
          <p className="text-sm text-yellow-800">\r
            💡 Hover over the reset button to see the color transition and background change\r
          </p>\r
        </div>\r
      </div>],
  parameters: {
    docs: {
      description: {
        story: 'Shows the hover and focus states of the reset button with smooth transitions.'
      }
    }
  }
}`,...($=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,te,se;g.parameters={...g.parameters,docs:{...(ee=g.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    question: 'This question has an unusually high number.',
    id: 99999,
    textColor: 'text-gray-700'
  },
  parameters: {
    docs: {
      description: {
        story: 'Edge case testing with a very large question ID number.'
      }
    }
  }
}`,...(se=(te=g.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};const xe=["Default","LongQuestion","ShortQuestion","HighQuestionNumber","GreenTheme","RedTheme","PurpleTheme","CustomIdStyling","AccessibilityDemo","InteractiveReset","MultipleQuestions","HoverStateDemo","EdgeCaseLongId"];export{u as AccessibilityDemo,l as CustomIdStyling,r as Default,g as EdgeCaseLongId,i as GreenTheme,a as HighQuestionNumber,p as HoverStateDemo,m as InteractiveReset,o as LongQuestion,h as MultipleQuestions,d as PurpleTheme,c as RedTheme,n as ShortQuestion,xe as __namedExportsOrder,ge as default};
