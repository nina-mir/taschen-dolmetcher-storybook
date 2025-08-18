import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as w}from"./iframe-CTM6SvOc.js";import{C as n}from"./CollapsibleInfo-OJqDRafG.js";import{P as S,I as le,Q as de,G as pe,a as C}from"./react-icons.esm-B3LRyK4S.js";import"./preload-helper-C1FmrZbK.js";import"./index-DQZ8eBYA.js";import"./index-D41ZvdSO.js";const{fn:me}=__STORYBOOK_MODULE_TEST__,Ne={title:"UI Components/CollapsibleInfo",component:n,parameters:{layout:"centered",docs:{description:{component:"Generic collapsible component for expandable sections. Features full accessibility support, customizable styling, and can be used for image captions, source citations, or any expandable content."}}},argTypes:{wrapperClassName:{description:"CSS classes for the wrapper element",control:"text"},triggerClassName:{description:"CSS classes for the trigger button",control:"text"},iconClassName:{description:"CSS classes for the trigger icon",control:"text"},contentClassName:{description:"CSS classes for the collapsible content",control:"text"},content:{description:"Content to show/hide in the collapsible section",control:"text"},icon:{description:"Custom icon to use instead of default PlusIcon",control:!1},defaultOpen:{description:"Whether the collapsible starts open",control:"boolean"},onOpenChange:{description:"Callback when open state changes",action:"onOpenChange"},ariaLabel:{description:"Custom aria-label for the trigger button",control:"text"},contentId:{description:"Custom ID for the content element",control:"text"},triggerText:{description:"Optional text to display next to the icon",control:"text"},contentDescription:{description:"Description of the content for screen readers",control:"text"}},args:{content:"This is some collapsible content that can be expanded or collapsed.",defaultOpen:!1,onOpenChange:me(),wrapperClassName:"border rounded-lg p-2",triggerClassName:"flex items-center p-2 hover:bg-gray-100 rounded transition-colors",iconClassName:"w-4 h-4 text-gray-600 transition-transform duration-200",contentClassName:"pt-2 text-sm text-gray-700"},decorators:[t=>e.jsx("div",{className:"w-full max-w-md",children:e.jsx(t,{})})]},l={},d={args:{triggerText:"Click to see animation",content:"The plus icon should rotate 45 degrees when opened, creating an X shape.",contentDescription:"animated content"},render:t=>{const[o,a]=w.useState(t.defaultOpen||!1);return e.jsx(n,{...t,onOpenChange:r=>{var s;a(r),(s=t.onOpenChange)==null||s.call(t,r)},icon:e.jsx(S,{className:`w-4 h-4 text-blue-600 transition-transform duration-200 ${o?"rotate-45":"rotate-0"}`}),wrapperClassName:"border border-blue-200 rounded-lg p-3",triggerClassName:"flex items-center p-2 hover:bg-blue-50 rounded transition-colors"})},parameters:{docs:{description:{story:"Shows animated icon rotation. The plus icon rotates 45 degrees to form an X when opened."}}}},p={args:{triggerText:"More Information",contentDescription:"additional details"},parameters:{docs:{description:{story:"Collapsible with visible text label next to the icon."}}}},m={args:{defaultOpen:!0,triggerText:"Details",content:"This content is visible by default when the component loads."},parameters:{docs:{description:{story:"Collapsible that starts in the open state."}}}},g={args:{triggerText:"Image Details",contentDescription:"image metadata and description",content:e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-semibold text-gray-800",children:"Mountain Landscape"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Photo taken in the Swiss Alps during golden hour. The mountain peaks are reflected in the pristine alpine lake below."}),e.jsxs("div",{className:"text-xs text-gray-500 space-y-1",children:[e.jsx("div",{children:"Camera: Canon EOS R5"}),e.jsx("div",{children:"Lens: 24-70mm f/2.8"}),e.jsx("div",{children:"Settings: f/8, 1/125s, ISO 100"})]})]}),icon:e.jsx(le,{className:"w-4 h-4 text-blue-600"})},parameters:{docs:{description:{story:"Example of collapsible image metadata with rich content including headings, paragraphs, and technical details."}}}},u={args:{triggerText:"Source Citation",contentDescription:"source and references",content:e.jsxs("div",{className:"text-sm space-y-2",children:[e.jsxs("div",{className:"bg-gray-50 p-3 rounded border-l-4 border-blue-400",children:[e.jsx("p",{className:"font-medium text-gray-800",children:"Academic Source:"}),e.jsxs("p",{className:"text-gray-700 mt-1",children:['Smith, J. & Johnson, A. (2024). "Modern Language Learning Methodologies."',e.jsx("em",{children:" Journal of Educational Research"}),", 45(3), 123-145."]})]}),e.jsxs("div",{className:"text-xs text-gray-500",children:[e.jsx("p",{children:"DOI: 10.1000/xyz123"}),e.jsx("p",{children:"Retrieved: March 15, 2024"})]})]}),icon:e.jsx(de,{className:"w-4 h-4 text-purple-600"}),wrapperClassName:"border border-purple-200 rounded-lg p-2 bg-purple-50"},parameters:{docs:{description:{story:"Example usage for academic source citations with formatted references."}}}},h={render:t=>{const[o,a]=w.useState({rotate:!1,scale:!1,chevron:!1});return e.jsxs("div",{className:"space-y-4 w-full max-w-lg",children:[e.jsx("div",{className:"text-sm font-medium text-gray-700 mb-3",children:"Different Animation Styles:"}),e.jsx(n,{...t,triggerText:"Rotating Plus Icon",content:"Plus icon rotates 45° to form an X when opened.",onOpenChange:r=>a(s=>({...s,rotate:r})),icon:e.jsx(S,{className:`w-4 h-4 text-blue-600 transition-transform duration-300 ease-in-out ${o.rotate?"rotate-45":"rotate-0"}`}),wrapperClassName:"border border-blue-200 rounded-lg p-3",triggerClassName:"flex items-center p-2 hover:bg-blue-50 rounded transition-colors"}),e.jsx(n,{...t,triggerText:"Scaling Plus Icon",content:"Plus icon scales and rotates for a more dramatic effect.",onOpenChange:r=>a(s=>({...s,scale:r})),icon:e.jsx(S,{className:`w-4 h-4 text-green-600 transition-all duration-300 ease-in-out ${o.scale?"rotate-45 scale-110":"rotate-0 scale-100"}`}),wrapperClassName:"border border-green-200 rounded-lg p-3",triggerClassName:"flex items-center p-2 hover:bg-green-50 rounded transition-colors"}),e.jsx(n,{...t,triggerText:"Chevron Alternative",content:"Using a chevron that rotates instead of a plus icon.",onOpenChange:r=>a(s=>({...s,chevron:r})),icon:e.jsx("svg",{className:`w-4 h-4 text-purple-600 transition-transform duration-200 ${o.chevron?"rotate-180":"rotate-0"}`,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})}),wrapperClassName:"border border-purple-200 rounded-lg p-3",triggerClassName:"flex items-center p-2 hover:bg-purple-50 rounded transition-colors"})]})},parameters:{docs:{description:{story:"Different animation approaches: rotating plus, scaling plus, and chevron rotation."}}}},x={args:{triggerText:"Advanced Settings",contentDescription:"configuration options",content:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("label",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"checkbox",className:"rounded"}),e.jsx("span",{className:"text-sm",children:"Enable notifications"})]}),e.jsxs("label",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"checkbox",className:"rounded"}),e.jsx("span",{className:"text-sm",children:"Auto-save progress"})]}),e.jsx("div",{className:"pt-2 border-t",children:e.jsx("button",{className:"text-xs text-blue-600 hover:text-blue-800",children:"Reset to defaults"})})]}),icon:e.jsx(pe,{className:"w-5 h-5 text-orange-600"}),wrapperClassName:"border-2 border-orange-200 rounded-xl p-3 bg-gradient-to-r from-orange-50 to-yellow-50",triggerClassName:"flex items-center p-3 hover:bg-orange-100 rounded-lg transition-all duration-200 font-medium text-orange-800",contentClassName:"pt-4 px-2",iconClassName:"w-5 h-5"},parameters:{docs:{description:{story:"Heavily customized styling with gradients, custom colors, and interactive content."}}}},b={args:{content:"Simple collapsible content with minimal styling.",wrapperClassName:"",triggerClassName:"flex items-center text-blue-600 hover:text-blue-800 text-sm",iconClassName:"w-3 h-3 mr-1",contentClassName:"pl-4 pt-1 text-sm text-gray-600 border-l-2 border-blue-200 ml-2 mt-2"},parameters:{docs:{description:{story:"Minimal styling approach with subtle visual hierarchy."}}}},f={render:t=>e.jsxs("div",{className:"space-y-4 w-full max-w-2xl",children:[e.jsx(n,{...t,triggerText:"Question 1",content:"What is the capital of France? The answer is Paris, which has been the capital since the medieval period.",contentDescription:"question 1 explanation",icon:e.jsx(C,{className:"w-4 h-4 text-blue-500"}),wrapperClassName:"border border-blue-200 rounded-lg p-3",triggerClassName:"flex items-center p-2 hover:bg-blue-50 rounded transition-colors text-blue-800"}),e.jsx(n,{...t,triggerText:"Question 2",content:"How do you say 'hello' in Spanish? The most common greeting is 'Hola', which is used in both formal and informal contexts.",contentDescription:"question 2 explanation",icon:e.jsx(C,{className:"w-4 h-4 text-green-500"}),wrapperClassName:"border border-green-200 rounded-lg p-3",triggerClassName:"flex items-center p-2 hover:bg-green-50 rounded transition-colors text-green-800"}),e.jsx(n,{...t,triggerText:"Question 3",content:"What is the past tense of 'go'? The simple past tense is 'went', which is an irregular verb form.",contentDescription:"question 3 explanation",icon:e.jsx(C,{className:"w-4 h-4 text-purple-500"}),wrapperClassName:"border border-purple-200 rounded-lg p-3",triggerClassName:"flex items-center p-2 hover:bg-purple-50 rounded transition-colors text-purple-800"})]}),parameters:{docs:{description:{story:"Multiple CollapsibleInfo components showing how they work independently with different themes."}}}},v={args:{triggerText:"Accessibility Features",contentDescription:"accessibility information",ariaLabel:"Show accessibility features for this component",contentId:"accessibility-demo-content",content:e.jsxs("div",{className:"space-y-3 text-sm",children:[e.jsxs("div",{className:"bg-green-50 p-3 rounded border border-green-200",children:[e.jsx("h4",{className:"font-semibold text-green-800 mb-2",children:"✓ Accessibility Features"}),e.jsxs("ul",{className:"text-green-700 space-y-1 text-xs",children:[e.jsx("li",{children:"• Proper ARIA labels and descriptions"}),e.jsx("li",{children:"• Keyboard navigation support"}),e.jsx("li",{children:"• Screen reader announcements"}),e.jsx("li",{children:"• Focus management"}),e.jsx("li",{children:"• Semantic HTML structure"}),e.jsx("li",{children:"• Live regions for dynamic content"})]})]}),e.jsx("p",{className:"text-gray-600 text-xs",children:"Try navigating with Tab key and activating with Enter or Space."})]})},decorators:[t=>e.jsxs("div",{className:"w-full max-w-lg",children:[e.jsxs("div",{className:"mb-4 p-3 bg-blue-50 rounded border border-blue-200",children:[e.jsx("h3",{className:"text-sm font-semibold text-blue-800 mb-1",children:"Accessibility Test"}),e.jsx("p",{className:"text-xs text-blue-700",children:"Use Tab to focus the trigger, then Enter/Space to toggle. Screen readers will announce state changes."})]}),e.jsx(t,{})]})],parameters:{docs:{description:{story:"Demonstrates all accessibility features including ARIA labels, keyboard navigation, and screen reader support."}}}},N={render:t=>{const[o,a]=w.useState({}),[r,s]=w.useState([]),j=c=>i=>{var T;(T=t.onOpenChange)==null||T.call(t,i),a(y=>({...y,[c]:i})),s(y=>[...y.slice(-4),`${c}: ${i?"opened":"closed"} at ${new Date().toLocaleTimeString()}`])};return e.jsxs("div",{className:"w-full max-w-2xl space-y-4",children:[e.jsxs("div",{className:"bg-gray-50 p-3 rounded border",children:[e.jsx("h3",{className:"text-sm font-semibold mb-2",children:"Event Log:"}),e.jsx("div",{className:"text-xs text-gray-600 space-y-1 font-mono max-h-20 overflow-y-auto",children:r.length===0?e.jsx("div",{className:"text-gray-400",children:"No events yet..."}):r.map((c,i)=>e.jsx("div",{children:c},i))})]}),e.jsx(n,{...t,triggerText:"Demo Section 1",content:"This is the first collapsible section. Try opening and closing it!",contentDescription:"demo section 1",onOpenChange:j("section-1"),wrapperClassName:"border rounded-lg p-3"}),e.jsx(n,{...t,triggerText:"Demo Section 2",content:"This is the second collapsible section. The event log above will track all interactions!",contentDescription:"demo section 2",onOpenChange:j("section-2"),wrapperClassName:"border rounded-lg p-3"})]})},parameters:{docs:{description:{story:"Interactive demo with event logging to show how the onOpenChange callback works."}}}};var I,O,D;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:"{}",...(D=(O=l.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var A,k,L;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    triggerText: 'Click to see animation',
    content: 'The plus icon should rotate 45 degrees when opened, creating an X shape.',
    contentDescription: 'animated content'
  },
  render: args => {
    const [isOpen, setIsOpen] = React.useState(args.defaultOpen || false);
    return <CollapsibleInfo {...args} onOpenChange={open => {
      setIsOpen(open);
      args.onOpenChange?.(open);
    }} icon={<PlusIcon className={\`w-4 h-4 text-blue-600 transition-transform duration-200 \${isOpen ? 'rotate-45' : 'rotate-0'}\`} />} wrapperClassName="border border-blue-200 rounded-lg p-3" triggerClassName="flex items-center p-2 hover:bg-blue-50 rounded transition-colors" />;
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows animated icon rotation. The plus icon rotates 45 degrees to form an X when opened.'
      }
    }
  }
}`,...(L=(k=d.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var R,E,M;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    triggerText: 'More Information',
    contentDescription: 'additional details'
  },
  parameters: {
    docs: {
      description: {
        story: 'Collapsible with visible text label next to the icon.'
      }
    }
  }
}`,...(M=(E=p.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var P,$,F;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    defaultOpen: true,
    triggerText: 'Details',
    content: 'This content is visible by default when the component loads.'
  },
  parameters: {
    docs: {
      description: {
        story: 'Collapsible that starts in the open state.'
      }
    }
  }
}`,...(F=($=m.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};var Q,W,H;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    triggerText: 'Image Details',
    contentDescription: 'image metadata and description',
    content: <div className="space-y-2">\r
        <h4 className="font-semibold text-gray-800">Mountain Landscape</h4>\r
        <p className="text-sm text-gray-600">\r
          Photo taken in the Swiss Alps during golden hour. The mountain peaks are \r
          reflected in the pristine alpine lake below.\r
        </p>\r
        <div className="text-xs text-gray-500 space-y-1">\r
          <div>Camera: Canon EOS R5</div>\r
          <div>Lens: 24-70mm f/2.8</div>\r
          <div>Settings: f/8, 1/125s, ISO 100</div>\r
        </div>\r
      </div>,
    icon: <ImageIcon className="w-4 h-4 text-blue-600" />
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of collapsible image metadata with rich content including headings, paragraphs, and technical details.'
      }
    }
  }
}`,...(H=(W=g.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var _,q,J;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    triggerText: 'Source Citation',
    contentDescription: 'source and references',
    content: <div className="text-sm space-y-2">\r
        <div className="bg-gray-50 p-3 rounded border-l-4 border-blue-400">\r
          <p className="font-medium text-gray-800">Academic Source:</p>\r
          <p className="text-gray-700 mt-1">\r
            Smith, J. & Johnson, A. (2024). "Modern Language Learning Methodologies." \r
            <em> Journal of Educational Research</em>, 45(3), 123-145.\r
          </p>\r
        </div>\r
        <div className="text-xs text-gray-500">\r
          <p>DOI: 10.1000/xyz123</p>\r
          <p>Retrieved: March 15, 2024</p>\r
        </div>\r
      </div>,
    icon: <QuoteIcon className="w-4 h-4 text-purple-600" />,
    wrapperClassName: 'border border-purple-200 rounded-lg p-2 bg-purple-50'
  },
  parameters: {
    docs: {
      description: {
        story: 'Example usage for academic source citations with formatted references.'
      }
    }
  }
}`,...(J=(q=u.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var U,X,z;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: args => {
    const [states, setStates] = React.useState<Record<string, boolean>>({
      rotate: false,
      scale: false,
      chevron: false
    });
    return <div className="space-y-4 w-full max-w-lg">\r
        <div className="text-sm font-medium text-gray-700 mb-3">Different Animation Styles:</div>\r
        \r
        {/* Rotating Plus */}\r
        <CollapsibleInfo {...args} triggerText="Rotating Plus Icon" content="Plus icon rotates 45° to form an X when opened." onOpenChange={open => setStates(prev => ({
        ...prev,
        rotate: open
      }))} icon={<PlusIcon className={\`w-4 h-4 text-blue-600 transition-transform duration-300 ease-in-out \${states.rotate ? 'rotate-45' : 'rotate-0'}\`} />} wrapperClassName="border border-blue-200 rounded-lg p-3" triggerClassName="flex items-center p-2 hover:bg-blue-50 rounded transition-colors" />\r
\r
        {/* Scaling Plus */}\r
        <CollapsibleInfo {...args} triggerText="Scaling Plus Icon" content="Plus icon scales and rotates for a more dramatic effect." onOpenChange={open => setStates(prev => ({
        ...prev,
        scale: open
      }))} icon={<PlusIcon className={\`w-4 h-4 text-green-600 transition-all duration-300 ease-in-out \${states.scale ? 'rotate-45 scale-110' : 'rotate-0 scale-100'}\`} />} wrapperClassName="border border-green-200 rounded-lg p-3" triggerClassName="flex items-center p-2 hover:bg-green-50 rounded transition-colors" />\r
\r
        {/* Chevron Alternative */}\r
        <CollapsibleInfo {...args} triggerText="Chevron Alternative" content="Using a chevron that rotates instead of a plus icon." onOpenChange={open => setStates(prev => ({
        ...prev,
        chevron: open
      }))} icon={<svg className={\`w-4 h-4 text-purple-600 transition-transform duration-200 \${states.chevron ? 'rotate-180' : 'rotate-0'}\`} fill="none" viewBox="0 0 24 24" stroke="currentColor">\r
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />\r
            </svg>} wrapperClassName="border border-purple-200 rounded-lg p-3" triggerClassName="flex items-center p-2 hover:bg-purple-50 rounded transition-colors" />\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Different animation approaches: rotating plus, scaling plus, and chevron rotation.'
      }
    }
  }
}`,...(z=(X=h.parameters)==null?void 0:X.docs)==null?void 0:z.source}}};var G,K,B;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    triggerText: 'Advanced Settings',
    contentDescription: 'configuration options',
    content: <div className="space-y-3">\r
        <label className="flex items-center space-x-2">\r
          <input type="checkbox" className="rounded" />\r
          <span className="text-sm">Enable notifications</span>\r
        </label>\r
        <label className="flex items-center space-x-2">\r
          <input type="checkbox" className="rounded" />\r
          <span className="text-sm">Auto-save progress</span>\r
        </label>\r
        <div className="pt-2 border-t">\r
          <button className="text-xs text-blue-600 hover:text-blue-800">\r
            Reset to defaults\r
          </button>\r
        </div>\r
      </div>,
    icon: <GearIcon className="w-5 h-5 text-orange-600" />,
    wrapperClassName: 'border-2 border-orange-200 rounded-xl p-3 bg-gradient-to-r from-orange-50 to-yellow-50',
    triggerClassName: 'flex items-center p-3 hover:bg-orange-100 rounded-lg transition-all duration-200 font-medium text-orange-800',
    contentClassName: 'pt-4 px-2',
    iconClassName: 'w-5 h-5'
  },
  parameters: {
    docs: {
      description: {
        story: 'Heavily customized styling with gradients, custom colors, and interactive content.'
      }
    }
  }
}`,...(B=(K=x.parameters)==null?void 0:K.docs)==null?void 0:B.source}}};var Y,V,Z;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    content: 'Simple collapsible content with minimal styling.',
    wrapperClassName: '',
    triggerClassName: 'flex items-center text-blue-600 hover:text-blue-800 text-sm',
    iconClassName: 'w-3 h-3 mr-1',
    contentClassName: 'pl-4 pt-1 text-sm text-gray-600 border-l-2 border-blue-200 ml-2 mt-2'
  },
  parameters: {
    docs: {
      description: {
        story: 'Minimal styling approach with subtle visual hierarchy.'
      }
    }
  }
}`,...(Z=(V=b.parameters)==null?void 0:V.docs)==null?void 0:Z.source}}};var ee,te,re;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: args => <div className="space-y-4 w-full max-w-2xl">\r
      <CollapsibleInfo {...args} triggerText="Question 1" content="What is the capital of France? The answer is Paris, which has been the capital since the medieval period." contentDescription="question 1 explanation" icon={<InfoCircledIcon className="w-4 h-4 text-blue-500" />} wrapperClassName="border border-blue-200 rounded-lg p-3" triggerClassName="flex items-center p-2 hover:bg-blue-50 rounded transition-colors text-blue-800" />\r
      <CollapsibleInfo {...args} triggerText="Question 2" content="How do you say 'hello' in Spanish? The most common greeting is 'Hola', which is used in both formal and informal contexts." contentDescription="question 2 explanation" icon={<InfoCircledIcon className="w-4 h-4 text-green-500" />} wrapperClassName="border border-green-200 rounded-lg p-3" triggerClassName="flex items-center p-2 hover:bg-green-50 rounded transition-colors text-green-800" />\r
      <CollapsibleInfo {...args} triggerText="Question 3" content="What is the past tense of 'go'? The simple past tense is 'went', which is an irregular verb form." contentDescription="question 3 explanation" icon={<InfoCircledIcon className="w-4 h-4 text-purple-500" />} wrapperClassName="border border-purple-200 rounded-lg p-3" triggerClassName="flex items-center p-2 hover:bg-purple-50 rounded transition-colors text-purple-800" />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Multiple CollapsibleInfo components showing how they work independently with different themes.'
      }
    }
  }
}`,...(re=(te=f.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var se,ne,ae;v.parameters={...v.parameters,docs:{...(se=v.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    triggerText: 'Accessibility Features',
    contentDescription: 'accessibility information',
    ariaLabel: 'Show accessibility features for this component',
    contentId: 'accessibility-demo-content',
    content: <div className="space-y-3 text-sm">\r
        <div className="bg-green-50 p-3 rounded border border-green-200">\r
          <h4 className="font-semibold text-green-800 mb-2">✓ Accessibility Features</h4>\r
          <ul className="text-green-700 space-y-1 text-xs">\r
            <li>• Proper ARIA labels and descriptions</li>\r
            <li>• Keyboard navigation support</li>\r
            <li>• Screen reader announcements</li>\r
            <li>• Focus management</li>\r
            <li>• Semantic HTML structure</li>\r
            <li>• Live regions for dynamic content</li>\r
          </ul>\r
        </div>\r
        <p className="text-gray-600 text-xs">\r
          Try navigating with Tab key and activating with Enter or Space.\r
        </p>\r
      </div>
  },
  decorators: [Story => <div className="w-full max-w-lg">\r
        <div className="mb-4 p-3 bg-blue-50 rounded border border-blue-200">\r
          <h3 className="text-sm font-semibold text-blue-800 mb-1">Accessibility Test</h3>\r
          <p className="text-xs text-blue-700">\r
            Use Tab to focus the trigger, then Enter/Space to toggle. Screen readers will announce state changes.\r
          </p>\r
        </div>\r
        <Story />\r
      </div>],
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates all accessibility features including ARIA labels, keyboard navigation, and screen reader support.'
      }
    }
  }
}`,...(ae=(ne=v.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var oe,ie,ce;N.parameters={...N.parameters,docs:{...(oe=N.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: args => {
    const [openStates, setOpenStates] = React.useState<Record<string, boolean>>({});
    const [eventLog, setEventLog] = React.useState<string[]>([]);
    const handleOpenChange = (id: string) => (open: boolean) => {
      args.onOpenChange?.(open);
      setOpenStates(prev => ({
        ...prev,
        [id]: open
      }));
      setEventLog(prev => [...prev.slice(-4),
      // Keep only last 5 events
      \`\${id}: \${open ? 'opened' : 'closed'} at \${new Date().toLocaleTimeString()}\`]);
    };
    return <div className="w-full max-w-2xl space-y-4">\r
        <div className="bg-gray-50 p-3 rounded border">\r
          <h3 className="text-sm font-semibold mb-2">Event Log:</h3>\r
          <div className="text-xs text-gray-600 space-y-1 font-mono max-h-20 overflow-y-auto">\r
            {eventLog.length === 0 ? <div className="text-gray-400">No events yet...</div> : eventLog.map((event, i) => <div key={i}>{event}</div>)}\r
          </div>\r
        </div>\r
        \r
        <CollapsibleInfo {...args} triggerText="Demo Section 1" content="This is the first collapsible section. Try opening and closing it!" contentDescription="demo section 1" onOpenChange={handleOpenChange('section-1')} wrapperClassName="border rounded-lg p-3" />\r
        \r
        <CollapsibleInfo {...args} triggerText="Demo Section 2" content="This is the second collapsible section. The event log above will track all interactions!" contentDescription="demo section 2" onOpenChange={handleOpenChange('section-2')} wrapperClassName="border rounded-lg p-3" />\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive demo with event logging to show how the onOpenChange callback works.'
      }
    }
  }
}`,...(ce=(ie=N.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};const we=["Default","AnimatedIcon","WithTriggerText","DefaultOpen","RichContent","SourceCitation","AdvancedAnimations","CustomStyling","Minimal","MultipleCollapsibles","AccessibilityShowcase","InteractiveDemo"];export{v as AccessibilityShowcase,h as AdvancedAnimations,d as AnimatedIcon,x as CustomStyling,l as Default,m as DefaultOpen,N as InteractiveDemo,b as Minimal,f as MultipleCollapsibles,g as RichContent,u as SourceCitation,p as WithTriggerText,we as __namedExportsOrder,Ne as default};
