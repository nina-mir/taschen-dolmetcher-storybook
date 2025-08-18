import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{I as u}from"./InfoText-4Ok1aWkX.js";import"./CollapsibleInfo-OJqDRafG.js";import"./react-icons.esm-B3LRyK4S.js";import"./iframe-CTM6SvOc.js";import"./preload-helper-C1FmrZbK.js";import"./index-DQZ8eBYA.js";import"./index-D41ZvdSO.js";const g={text:"The Battle of Stalingrad (1942-1943) was a major turning point in World War II, marking the beginning of Germany's retreat on the Eastern Front.",sourceChicago:"Beevor, Antony. Stalingrad: The Fateful Siege: 1942-1943. New York: Viking, 1998."},b={text:"The Battle of Stalingrad was one of the bloodiest battles in human history, with combined casualties estimated at nearly 2 million. The battle began in August 1942 when German forces attempted to capture the industrial city of Stalingrad. The urban warfare that ensued was brutal, with fighting taking place house by house, room by room. The Soviet counteroffensive, Operation Uranus, launched in November 1942, encircled the German Sixth Army and ultimately led to their surrender in February 1943.",sourceChicago:"Glantz, David M., and Jonathan M. House. When Titans Clashed: How the Red Army Stopped Hitler. Lawrence: University Press of Kansas, 1995, pp. 142-178."},Y={text:"DNA is the hereditary material in humans.",sourceChicago:"Watson, J. D., & Crick, F. H. (1953). Nature, 171(4356), 737-738."},oe={title:"UI Components/InfoText",component:u,parameters:{layout:"padded",docs:{description:{component:"A component that displays informational text with optional collapsible source citations. Uses CollapsibleInfo for expandable source information."}}},argTypes:{info:{description:"Information item containing text and source citation",control:"object"},isSourceCollapsible:{description:"Whether the source citation should be collapsible",control:"boolean"},wrapperClassName:{description:"CSS classes for the main wrapper",control:"text"},infoTextClassName:{description:"CSS classes for the info text paragraph",control:"text"},citeSourceClassName:{description:"CSS classes for the citation",control:"text"},collapsibleDefault:{description:"Default open state for collapsible source",control:"boolean",if:{arg:"isSourceCollapsible",eq:!0}},id:{description:"HTML id attribute",control:"text"},ariaLabel:{description:"Accessible label for the component",control:"text"},role:{description:"ARIA role for the component",control:"text"}},args:{info:g,isSourceCollapsible:!1,wrapperClassName:"bg-gray-50 p-4 rounded-lg border",infoTextClassName:"text-gray-800 mb-2",citeSourceClassName:"text-sm text-gray-600 italic",collapsibleDefault:!0,role:"complementary"}},a={},t={args:{isSourceCollapsible:!0,wrapperClassName:"bg-blue-50 p-4 rounded-lg border border-blue-200 relative",collapsibleDefault:!1},parameters:{docs:{description:{story:"Version with collapsible source citation using CollapsibleInfo component."}}}},o={args:{isSourceCollapsible:!0,collapsibleDefault:!0,wrapperClassName:"bg-green-50 p-4 rounded-lg border border-green-200 relative"}},s={args:{info:b,isSourceCollapsible:!0,wrapperClassName:"bg-gray-50 p-6 rounded-lg border max-w-2xl relative",infoTextClassName:"text-gray-800 mb-4 leading-relaxed",citeSourceClassName:"text-sm text-gray-600 italic leading-snug"},parameters:{docs:{description:{story:"Longer informational text with detailed source citation in collapsible format."}}}},i={args:{info:Y,wrapperClassName:"bg-yellow-50 p-3 rounded border border-yellow-200",infoTextClassName:"text-gray-800 font-medium",citeSourceClassName:"text-xs text-gray-500 mt-1 block"}},l={args:{info:g,isSourceCollapsible:!0,wrapperClassName:"bg-white p-6 border-l-4 border-blue-600 shadow-sm relative",infoTextClassName:"text-gray-900 font-serif text-lg leading-relaxed mb-3",citeSourceClassName:"text-sm text-blue-700 font-mono bg-blue-50 p-2 rounded border-l-2 border-blue-200",collapsibleDefault:!1},parameters:{docs:{description:{story:"Academic styling with serif fonts and formal citation formatting."}}}},n={args:{isSourceCollapsible:!0,wrapperClassName:"bg-white p-6 rounded-xl shadow-lg border border-gray-100 relative max-w-md",infoTextClassName:"text-gray-700 leading-relaxed mb-4",citeSourceClassName:"text-xs block text-gray-500 bg-gray-50 p-3 rounded-md ",collapsibleDefault:!0}},c={args:{info:g,isSourceCollapsible:!0,collapsibleDefault:!0,id:"info-section-1",ariaLabel:"Historical information about the Battle of Stalingrad",wrapperClassName:"bg-indigo-50 p-4 rounded-lg border border-indigo-200 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 relative",infoTextClassName:"text-indigo-900 mb-3",citeSourceClassName:"text-white text-sm bg-gray-500/90"},decorators:[r=>e.jsxs("div",{children:[e.jsx(r,{}),e.jsxs("div",{className:"mt-14 p-3 bg-indigo-100 rounded border text-sm",children:[e.jsx("h4",{className:"font-semibold text-indigo-800 mb-2",children:"Accessibility Features:"}),e.jsxs("ul",{className:"text-indigo-700 space-y-1 text-xs",children:[e.jsxs("li",{children:["• ",e.jsx("code",{children:'id="info-section-1"'})," - Unique identifier"]}),e.jsxs("li",{children:["• ",e.jsx("code",{children:'role="complementary"'})," - Semantic landmark"]}),e.jsxs("li",{children:["• ",e.jsx("code",{children:"aria-label"})," - Descriptive label for screen readers"]}),e.jsxs("li",{children:["• ",e.jsx("code",{children:'role="text"'})," - Explicitly marks text content"]}),e.jsxs("li",{children:["• ",e.jsx("code",{children:'role="doc-credit"'})," - Semantic citation markup"]}),e.jsx("li",{children:"• Focus ring visible on keyboard navigation"}),e.jsx("li",{children:"• Collapsible source includes ARIA controls"})]})]})]})],parameters:{docs:{description:{story:"Component with full accessibility attributes including id, aria-label, and focus management."}}}},d={args:{info:{text:"This information is based on preliminary research and should be verified before use.",sourceChicago:"Internal Research Team. Preliminary Findings Report. Company Archives, 2024."},isSourceCollapsible:!0,wrapperClassName:"bg-orange-50 p-4 rounded-lg border border-orange-300 relative",infoTextClassName:"text-orange-900 font-medium flex items-start gap-2",citeSourceClassName:"text-orange-700 text-sm",collapsibleDefault:!1},decorators:[r=>e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("svg",{className:"w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})}),e.jsx("div",{className:"flex-1",children:e.jsx(r,{})})]})],parameters:{docs:{description:{story:"Warning-style information with icon and alert styling."}}}},p={render:r=>e.jsxs("div",{className:"space-y-14 max-w-3xl",children:[e.jsx(u,{...r,info:g,id:"info-1",ariaLabel:"Battle of Stalingrad information",wrapperClassName:"bg-blue-50 p-4 rounded-lg border border-blue-200 relative",citeSourceClassName:"bg-black text-white",isSourceCollapsible:!0,collapsibleDefault:!1}),e.jsx(u,{...r,info:Y,id:"info-2",ariaLabel:"DNA information",wrapperClassName:"bg-green-50 p-4 rounded-lg border border-green-200 relative",citeSourceClassName:"bg-black text-white",isSourceCollapsible:!0,collapsibleDefault:!0}),e.jsx(u,{...r,info:b,id:"info-3",ariaLabel:"Extended battle information",wrapperClassName:"bg-purple-50 p-4 rounded-lg border border-purple-200",isSourceCollapsible:!1,infoTextClassName:"text-purple-900 mb-2",citeSourceClassName:"text-purple-700 text-sm italic"})]}),parameters:{docs:{description:{story:"Multiple InfoText components showing different configurations and states working together."}}}},m={args:{info:b,isSourceCollapsible:!0,wrapperClassName:"bg-gray-50 p-4 sm:p-6 lg:p-8 rounded-lg border w-full relative",infoTextClassName:"text-gray-800 text-sm sm:text-base lg:text-lg leading-relaxed mb-2 sm:mb-4",citeSourceClassName:"text-xs sm:text-sm text-gray-600 italic"},parameters:{viewport:{viewports:{mobile:{name:"Mobile",styles:{width:"375px",height:"667px"}},tablet:{name:"Tablet",styles:{width:"768px",height:"1024px"}},desktop:{name:"Desktop",styles:{width:"1024px",height:"768px"}}}},docs:{description:{story:"Responsive InfoText that adjusts typography and spacing across different screen sizes."}}}};var f,x,h;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(h=(x=a.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var C,y,S;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    isSourceCollapsible: true,
    wrapperClassName: 'bg-blue-50 p-4 rounded-lg border border-blue-200 relative',
    collapsibleDefault: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Version with collapsible source citation using CollapsibleInfo component.'
      }
    }
  }
}`,...(S=(y=t.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var w,N,v;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    isSourceCollapsible: true,
    collapsibleDefault: true,
    wrapperClassName: 'bg-green-50 p-4 rounded-lg border border-green-200 relative'
  }
}`,...(v=(N=o.parameters)==null?void 0:N.docs)==null?void 0:v.source}}};var I,T,k;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    info: mockLongInfoItem,
    isSourceCollapsible: true,
    wrapperClassName: 'bg-gray-50 p-6 rounded-lg border max-w-2xl relative',
    infoTextClassName: 'text-gray-800 mb-4 leading-relaxed',
    citeSourceClassName: 'text-sm text-gray-600 italic leading-snug'
  },
  parameters: {
    docs: {
      description: {
        story: 'Longer informational text with detailed source citation in collapsible format.'
      }
    }
  }
}`,...(k=(T=s.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var j,D,A;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    info: mockShortInfoItem,
    wrapperClassName: 'bg-yellow-50 p-3 rounded border border-yellow-200',
    infoTextClassName: 'text-gray-800 font-medium',
    citeSourceClassName: 'text-xs text-gray-500 mt-1 block'
  }
}`,...(A=(D=i.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var L,R,M;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    info: mockInfoItem,
    isSourceCollapsible: true,
    wrapperClassName: 'bg-white p-6 border-l-4 border-blue-600 shadow-sm relative',
    infoTextClassName: 'text-gray-900 font-serif text-lg leading-relaxed mb-3',
    citeSourceClassName: 'text-sm text-blue-700 font-mono bg-blue-50 p-2 rounded border-l-2 border-blue-200',
    collapsibleDefault: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Academic styling with serif fonts and formal citation formatting.'
      }
    }
  }
}`,...(M=(R=l.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};var W,F,z;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    isSourceCollapsible: true,
    wrapperClassName: 'bg-white p-6 rounded-xl shadow-lg border border-gray-100 relative max-w-md',
    infoTextClassName: 'text-gray-700 leading-relaxed mb-4',
    citeSourceClassName: 'text-xs block text-gray-500 bg-gray-50 p-3 rounded-md ',
    collapsibleDefault: true
  }
}`,...(z=(F=n.parameters)==null?void 0:F.docs)==null?void 0:z.source}}};var B,H,E;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    info: mockInfoItem,
    isSourceCollapsible: true,
    collapsibleDefault: true,
    id: 'info-section-1',
    ariaLabel: 'Historical information about the Battle of Stalingrad',
    wrapperClassName: 'bg-indigo-50 p-4 rounded-lg border border-indigo-200 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 relative',
    infoTextClassName: 'text-indigo-900 mb-3',
    citeSourceClassName: 'text-white text-sm bg-gray-500/90'
  },
  decorators: [Story => <div>\r
          <Story />\r
          <div className="mt-14 p-3 bg-indigo-100 rounded border text-sm">\r
            <h4 className="font-semibold text-indigo-800 mb-2">Accessibility Features:</h4>\r
            <ul className="text-indigo-700 space-y-1 text-xs">\r
              <li>• <code>id="info-section-1"</code> - Unique identifier</li>\r
              <li>• <code>role="complementary"</code> - Semantic landmark</li>\r
              <li>• <code>aria-label</code> - Descriptive label for screen readers</li>\r
              <li>• <code>role="text"</code> - Explicitly marks text content</li>\r
              <li>• <code>role="doc-credit"</code> - Semantic citation markup</li>\r
              <li>• Focus ring visible on keyboard navigation</li>\r
              <li>• Collapsible source includes ARIA controls</li>\r
            </ul>\r
          </div>\r
        </div>],
  parameters: {
    docs: {
      description: {
        story: 'Component with full accessibility attributes including id, aria-label, and focus management.'
      }
    }
  }
}`,...(E=(H=c.parameters)==null?void 0:H.docs)==null?void 0:E.source}}};var U,V,G;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    info: {
      text: "This information is based on preliminary research and should be verified before use.",
      sourceChicago: "Internal Research Team. Preliminary Findings Report. Company Archives, 2024."
    },
    isSourceCollapsible: true,
    wrapperClassName: 'bg-orange-50 p-4 rounded-lg border border-orange-300 relative',
    infoTextClassName: 'text-orange-900 font-medium flex items-start gap-2',
    citeSourceClassName: 'text-orange-700 text-sm',
    collapsibleDefault: false
  },
  decorators: [Story => <div className="flex items-start gap-2">\r
        <svg className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">\r
          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />\r
        </svg>\r
        <div className="flex-1">\r
          <Story />\r
        </div>\r
      </div>],
  parameters: {
    docs: {
      description: {
        story: 'Warning-style information with icon and alert styling.'
      }
    }
  }
}`,...(G=(V=d.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};var O,q,P;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => <div className="space-y-14 max-w-3xl">\r
      <InfoText {...args} info={mockInfoItem} id="info-1" ariaLabel="Battle of Stalingrad information" wrapperClassName="bg-blue-50 p-4 rounded-lg border border-blue-200 relative" citeSourceClassName='bg-black text-white' isSourceCollapsible={true} collapsibleDefault={false} />\r
      <InfoText {...args} info={mockShortInfoItem} id="info-2" ariaLabel="DNA information" wrapperClassName="bg-green-50 p-4 rounded-lg border border-green-200 relative" citeSourceClassName='bg-black text-white' isSourceCollapsible={true} collapsibleDefault={true} />\r
      <InfoText {...args} info={mockLongInfoItem} id="info-3" ariaLabel="Extended battle information" wrapperClassName="bg-purple-50 p-4 rounded-lg border border-purple-200" isSourceCollapsible={false} infoTextClassName="text-purple-900 mb-2" citeSourceClassName="text-purple-700 text-sm italic" />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Multiple InfoText components showing different configurations and states working together.'
      }
    }
  }
}`,...(P=(q=p.parameters)==null?void 0:q.docs)==null?void 0:P.source}}};var J,_,K;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    info: mockLongInfoItem,
    isSourceCollapsible: true,
    wrapperClassName: 'bg-gray-50 p-4 sm:p-6 lg:p-8 rounded-lg border w-full relative',
    infoTextClassName: 'text-gray-800 text-sm sm:text-base lg:text-lg leading-relaxed mb-2 sm:mb-4',
    citeSourceClassName: 'text-xs sm:text-sm text-gray-600 italic'
  },
  parameters: {
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '375px',
            height: '667px'
          }
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px'
          }
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1024px',
            height: '768px'
          }
        }
      }
    },
    docs: {
      description: {
        story: 'Responsive InfoText that adjusts typography and spacing across different screen sizes.'
      }
    }
  }
}`,...(K=(_=m.parameters)==null?void 0:_.docs)==null?void 0:K.source}}};const se=["Default","CollapsibleSource","CollapsibleSourceOpen","LongContent","ShortContent","AcademicStyle","CardStyle","WithAccessibility","WarningInfo","MultipleInfoSections","Responsive"];export{l as AcademicStyle,n as CardStyle,t as CollapsibleSource,o as CollapsibleSourceOpen,a as Default,s as LongContent,p as MultipleInfoSections,m as Responsive,i as ShortContent,d as WarningInfo,c as WithAccessibility,se as __namedExportsOrder,oe as default};
