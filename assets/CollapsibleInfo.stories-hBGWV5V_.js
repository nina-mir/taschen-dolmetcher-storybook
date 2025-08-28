import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{C as H}from"./CollapsibleInfo-IMVLIxPR.js";import{I as _,a as $,B as Q}from"./react-icons.esm-BRCNz63G.js";import"./iframe-BKLHIWF5.js";import"./preload-helper-C1FmrZbK.js";import"./index-DIEq8J8r.js";import"./index-CkntVSNn.js";const se={title:"UI Components/CollapsibleInfo",component:H,parameters:{layout:"centered",docs:{description:{component:"A generic collapsible component for expandable sections. Can be reused for image captions, source citations, and other contextual information."}}},argTypes:{content:{description:"The content to show/hide when expanded",control:"text"},triggerText:{description:"Optional text to show alongside the icon",control:"text"},icon:{description:"Custom icon for the trigger button",control:!1},defaultOpen:{description:"Whether the collapsible starts in an open state",control:"boolean"},ariaLabel:{description:"Custom aria-label for the trigger button",control:"text"},contentDescription:{description:"Description of the content for accessibility",control:"text"},wrapperClassName:{description:"CSS classes for the wrapper element",control:"text"},triggerClassName:{description:"CSS classes for the trigger button",control:"text"},contentClassName:{description:"CSS classes for the content container",control:"text"},iconClassName:{description:"CSS classes for the icon",control:"text"}},args:{content:"This is some collapsible content that can be expanded and collapsed.",defaultOpen:!1,contentDescription:"additional information"}},t={},a={args:{defaultOpen:!0,content:"This collapsible starts in an open state by default."}},s={args:{triggerText:"More Info",content:"Here is additional information that was hidden behind a labeled trigger."}},r={args:{icon:e.jsx(_,{}),triggerText:"Details",content:"This uses a custom info icon instead of the default plus icon.",contentDescription:"detailed information"}},i={args:{triggerText:"Image Details",icon:e.jsx($,{}),content:e.jsxs("div",{className:"space-y-2",children:[e.jsxs("p",{className:"text-sm text-gray-700",children:[e.jsx("strong",{children:"Photo:"})," Mountain landscape at sunset"]}),e.jsxs("p",{className:"text-sm text-gray-600",children:[e.jsx("strong",{children:"Location:"})," Rocky Mountain National Park, Colorado"]}),e.jsxs("p",{className:"text-sm text-gray-600",children:[e.jsx("strong",{children:"Photographer:"})," Jane Smith"]}),e.jsx("p",{className:"text-sm text-gray-500",children:"Taken during the golden hour with a wide-angle lens to capture the expansive vista."})]}),contentDescription:"image caption and metadata",wrapperClassName:"max-w-md",contentClassName:"mt-2 p-3 bg-gray-50 rounded-md border"}},o={args:{triggerText:"Sources",icon:e.jsx(Q,{}),content:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"text-sm",children:[e.jsx("p",{className:"font-semibold",children:"Primary Sources:"}),e.jsxs("ul",{className:"mt-1 list-disc list-inside text-gray-700 space-y-1",children:[e.jsxs("li",{children:['Smith, J. (2024). "Climate Change Effects on Mountain Ecosystems." ',e.jsx("em",{children:"Nature Climate Change"}),", 14(3), 123-135."]}),e.jsxs("li",{children:['Johnson, M. et al. (2023). "Alpine Flora Adaptation Strategies." ',e.jsx("em",{children:"Ecological Studies"}),", 45(2), 67-89."]})]})]}),e.jsxs("div",{className:"text-sm",children:[e.jsx("p",{className:"font-semibold",children:"Additional Reading:"}),e.jsx("ul",{className:"mt-1 list-disc list-inside text-gray-700 space-y-1",children:e.jsxs("li",{children:['Brown, K. (2022). "Mountain Weather Patterns." ',e.jsx("em",{children:"Atmospheric Research"}),", 78(4), 201-218."]})})]})]}),contentDescription:"source citations and references",wrapperClassName:"max-w-2xl",contentClassName:"mt-2 p-4 bg-blue-50 rounded-lg border border-blue-200"}},n={args:{triggerText:"Technical Details",content:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-800",children:"Specifications"}),e.jsxs("ul",{className:"mt-2 text-sm text-gray-600 space-y-1",children:[e.jsx("li",{children:"Resolution: 1920x1080"}),e.jsx("li",{children:"Format: JPEG"}),e.jsx("li",{children:"Size: 2.3 MB"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-semibold text-gray-800",children:"Camera Settings"}),e.jsxs("ul",{className:"mt-2 text-sm text-gray-600 space-y-1",children:[e.jsx("li",{children:"Aperture: f/8.0"}),e.jsx("li",{children:"Shutter: 1/250s"}),e.jsx("li",{children:"ISO: 200"})]})]})]}),e.jsx("div",{className:"pt-2 border-t",children:e.jsx("p",{className:"text-xs text-gray-500",children:"Last updated: March 15, 2024"})})]}),contentDescription:"technical specifications and metadata",wrapperClassName:"max-w-lg",contentClassName:"mt-3 p-4 bg-white rounded-lg border shadow-sm"}},l={args:{triggerText:"Styled Collapsible",content:"This collapsible has custom styling applied to demonstrate the flexibility of the component.",wrapperClassName:"max-w-md",triggerClassName:"flex items-center gap-2 px-4 py-2 bg-purple-100 hover:bg-purple-200 rounded-lg transition-colors duration-200",contentClassName:"mt-2 p-4 bg-purple-50 rounded-lg border-l-4 border-purple-400",contentDescription:"styled content example"}},c={args:{triggerText:"Accessibility Information",ariaLabel:"Toggle accessibility guidelines and best practices",contentDescription:"accessibility guidelines and WCAG compliance information",content:e.jsxs("div",{className:"space-y-3",children:[e.jsx("h4",{className:"font-semibold",children:"WCAG 2.1 Compliance"}),e.jsxs("ul",{className:"text-sm space-y-2 list-disc list-inside",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Keyboard Navigation:"})," Fully accessible via keyboard with proper focus management"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Screen Readers:"})," Properly announced state changes and content descriptions"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Color Contrast:"})," Meets AA standards for text and interactive elements"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Focus Indicators:"})," Clear visual focus indicators for all interactive elements"]})]})]}),wrapperClassName:"max-w-2xl",contentClassName:"mt-2 p-4 bg-green-50 rounded-md border border-green-200"}},d={args:{triggerText:"Read Full Article",content:e.jsxs("div",{className:"space-y-4 max-h-64 overflow-y-auto",children:[e.jsx("p",{children:"This is an example of a collapsible with longer content that demonstrates scrolling behavior when the content exceeds the available space."}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e.jsx("p",{children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."}),e.jsx("p",{children:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."})]}),contentDescription:"full article content with scrollable area",wrapperClassName:"max-w-lg",contentClassName:"mt-2 p-4 bg-gray-50 rounded-md border"}},m={args:{triggerText:"Toggle with Callback",content:"This collapsible logs state changes to the console (check browser dev tools).",onOpenChange:z=>{console.log(`Collapsible is now ${z?"open":"closed"}`)},contentDescription:"callback demonstration content"}};var p,u,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,x,b;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    defaultOpen: true,
    content: 'This collapsible starts in an open state by default.'
  }
}`,...(b=(x=a.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var f,C,y;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    triggerText: 'More Info',
    content: 'Here is additional information that was hidden behind a labeled trigger.'
  }
}`,...(y=(C=s.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var N,v,j;r.parameters={...r.parameters,docs:{...(N=r.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    icon: <InfoCircledIcon />,
    triggerText: 'Details',
    content: 'This uses a custom info icon instead of the default plus icon.',
    contentDescription: 'detailed information'
  }
}`,...(j=(v=r.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var w,S,T;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    triggerText: 'Image Details',
    icon: <ImageIcon />,
    content: <div className="space-y-2">\r
        <p className="text-sm text-gray-700">\r
          <strong>Photo:</strong> Mountain landscape at sunset\r
        </p>\r
        <p className="text-sm text-gray-600">\r
          <strong>Location:</strong> Rocky Mountain National Park, Colorado\r
        </p>\r
        <p className="text-sm text-gray-600">\r
          <strong>Photographer:</strong> Jane Smith\r
        </p>\r
        <p className="text-sm text-gray-500">\r
          Taken during the golden hour with a wide-angle lens to capture the expansive vista.\r
        </p>\r
      </div>,
    contentDescription: 'image caption and metadata',
    wrapperClassName: 'max-w-md',
    contentClassName: 'mt-2 p-3 bg-gray-50 rounded-md border'
  }
}`,...(T=(S=i.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var D,q,I;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    triggerText: 'Sources',
    icon: <BookmarkIcon />,
    content: <div className="space-y-3">\r
        <div className="text-sm">\r
          <p className="font-semibold">Primary Sources:</p>\r
          <ul className="mt-1 list-disc list-inside text-gray-700 space-y-1">\r
            <li>Smith, J. (2024). "Climate Change Effects on Mountain Ecosystems." <em>Nature Climate Change</em>, 14(3), 123-135.</li>\r
            <li>Johnson, M. et al. (2023). "Alpine Flora Adaptation Strategies." <em>Ecological Studies</em>, 45(2), 67-89.</li>\r
          </ul>\r
        </div>\r
        <div className="text-sm">\r
          <p className="font-semibold">Additional Reading:</p>\r
          <ul className="mt-1 list-disc list-inside text-gray-700 space-y-1">\r
            <li>Brown, K. (2022). "Mountain Weather Patterns." <em>Atmospheric Research</em>, 78(4), 201-218.</li>\r
          </ul>\r
        </div>\r
      </div>,
    contentDescription: 'source citations and references',
    wrapperClassName: 'max-w-2xl',
    contentClassName: 'mt-2 p-4 bg-blue-50 rounded-lg border border-blue-200'
  }
}`,...(I=(q=o.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};var A,k,M;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    triggerText: 'Technical Details',
    content: <div className="space-y-4">\r
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">\r
          <div>\r
            <h4 className="font-semibold text-gray-800">Specifications</h4>\r
            <ul className="mt-2 text-sm text-gray-600 space-y-1">\r
              <li>Resolution: 1920x1080</li>\r
              <li>Format: JPEG</li>\r
              <li>Size: 2.3 MB</li>\r
            </ul>\r
          </div>\r
          <div>\r
            <h4 className="font-semibold text-gray-800">Camera Settings</h4>\r
            <ul className="mt-2 text-sm text-gray-600 space-y-1">\r
              <li>Aperture: f/8.0</li>\r
              <li>Shutter: 1/250s</li>\r
              <li>ISO: 200</li>\r
            </ul>\r
          </div>\r
        </div>\r
        <div className="pt-2 border-t">\r
          <p className="text-xs text-gray-500">\r
            Last updated: March 15, 2024\r
          </p>\r
        </div>\r
      </div>,
    contentDescription: 'technical specifications and metadata',
    wrapperClassName: 'max-w-lg',
    contentClassName: 'mt-3 p-4 bg-white rounded-lg border shadow-sm'
  }
}`,...(M=(k=n.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var R,P,E;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    triggerText: 'Styled Collapsible',
    content: 'This collapsible has custom styling applied to demonstrate the flexibility of the component.',
    wrapperClassName: 'max-w-md',
    triggerClassName: 'flex items-center gap-2 px-4 py-2 bg-purple-100 hover:bg-purple-200 rounded-lg transition-colors duration-200',
    contentClassName: 'mt-2 p-4 bg-purple-50 rounded-lg border-l-4 border-purple-400',
    contentDescription: 'styled content example'
  }
}`,...(E=(P=l.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var F,O,L;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    triggerText: 'Accessibility Information',
    ariaLabel: 'Toggle accessibility guidelines and best practices',
    contentDescription: 'accessibility guidelines and WCAG compliance information',
    content: <div className="space-y-3">\r
        <h4 className="font-semibold">WCAG 2.1 Compliance</h4>\r
        <ul className="text-sm space-y-2 list-disc list-inside">\r
          <li><strong>Keyboard Navigation:</strong> Fully accessible via keyboard with proper focus management</li>\r
          <li><strong>Screen Readers:</strong> Properly announced state changes and content descriptions</li>\r
          <li><strong>Color Contrast:</strong> Meets AA standards for text and interactive elements</li>\r
          <li><strong>Focus Indicators:</strong> Clear visual focus indicators for all interactive elements</li>\r
        </ul>\r
      </div>,
    wrapperClassName: 'max-w-2xl',
    contentClassName: 'mt-2 p-4 bg-green-50 rounded-md border border-green-200'
  }
}`,...(L=(O=c.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var W,J,B;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    triggerText: 'Read Full Article',
    content: <div className="space-y-4 max-h-64 overflow-y-auto">\r
        <p>This is an example of a collapsible with longer content that demonstrates scrolling behavior when the content exceeds the available space.</p>\r
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\r
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\r
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>\r
        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>\r
      </div>,
    contentDescription: 'full article content with scrollable area',
    wrapperClassName: 'max-w-lg',
    contentClassName: 'mt-2 p-4 bg-gray-50 rounded-md border'
  }
}`,...(B=(J=d.parameters)==null?void 0:J.docs)==null?void 0:B.source}}};var G,K,U;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    triggerText: 'Toggle with Callback',
    content: 'This collapsible logs state changes to the console (check browser dev tools).',
    onOpenChange: (open: boolean) => {
      console.log(\`Collapsible is now \${open ? 'open' : 'closed'}\`);
    },
    contentDescription: 'callback demonstration content'
  }
}`,...(U=(K=m.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};const re=["Default","DefaultOpen","WithTriggerText","CustomIcon","ImageCaption","SourceCitation","RichContent","CustomStyling","AccessibilityFocused","LongContent","WithCallback"];export{c as AccessibilityFocused,r as CustomIcon,l as CustomStyling,t as Default,a as DefaultOpen,i as ImageCaption,d as LongContent,n as RichContent,o as SourceCitation,m as WithCallback,s as WithTriggerText,re as __namedExportsOrder,se as default};
