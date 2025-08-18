import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{C as I}from"./ContentSection-CYQ18HUB.js";import{r as v}from"./iframe-CTM6SvOc.js";import"./CollapsibleInfo-OJqDRafG.js";import"./react-icons.esm-B3LRyK4S.js";import"./index-DQZ8eBYA.js";import"./index-D41ZvdSO.js";import"./InfoText-4Ok1aWkX.js";import"./MediaImage-gly9VR18.js";import"./utils-jAU0Cazi.js";import"./preload-helper-C1FmrZbK.js";const i={imgUrl:"https://picsum.photos/600/400?random=1",altText:"Historical photograph showing soldiers during the Battle of Stalingrad",imgCaption:"Soviet soldiers defending a building during the Battle of Stalingrad, winter 1942"},n={text:"The Battle of Stalingrad (1942-1943) was a major turning point in World War II, marking the beginning of Germany's retreat on the Eastern Front. The urban warfare was particularly brutal, with fighting occurring house by house.",sourceChicago:"Beevor, Antony. Stalingrad: The Fateful Siege: 1942-1943. New York: Viking, 1998."},re={imgUrl:"https://picsum.photos/800/600?random=2",altText:"Detailed historical map showing troop movements and strategic positions",imgCaption:"Strategic map depicting the encirclement of German forces during Operation Uranus, showing Soviet troop movements from November 19-23, 1942, with detailed annotations of key military positions and supply lines"},ie={text:"Operation Uranus was the code name for the Soviet strategic operation that led to the encirclement of German forces at Stalingrad. Launched on November 19, 1942, it involved coordinated attacks by multiple Soviet army groups. The operation successfully cut off the German Sixth Army and parts of the Fourth Panzer Army, trapping over 250,000 Axis soldiers in the Stalingrad pocket. This encirclement marked the beginning of the end for German forces on the Eastern Front.",sourceChicago:"Glantz, David M., and Jonathan M. House. When Titans Clashed: How the Red Army Stopped Hitler. Lawrence: University Press of Kansas, 1995, pp. 142-178."},le={imgUrl:"https://picsum.photos/400/600?random=3",altText:"Portrait photograph of a World War II military leader",imgCaption:"General Vasily Chuikov, commander of the 62nd Army during the Battle of Stalingrad"},me={imgUrl:"https://picsum.photos/500/300?random=4",altText:"Scientific diagram showing DNA structure",imgCaption:"Double helix structure of DNA showing base pairs and sugar-phosphate backbone"},pe={text:"DNA (deoxyribonucleic acid) is the hereditary material in humans and almost all other organisms. It contains the genetic instructions needed to develop and maintain life.",sourceChicago:"Watson, J. D., & Crick, F. H. (1953). Molecular structure of nucleic acids. Nature, 171(4356), 737-738."},t=r=>{const[o,a]=v.useState(r.showInfo||"block");return e.jsxs("div",{className:"h-screen bg-gray-900 relative",children:[e.jsx(I,{...r,showInfo:o,onToggleInfo:a}),o==="hidden"&&e.jsx("div",{className:"absolute top-4 left-4 text-white bg-black/50 p-2 rounded",children:"Content is hidden - this simulates the parent component's toggle functionality"})]})},ke={title:"UI Components/ContentSection",component:I,parameters:{layout:"fullscreen",backgrounds:{default:"dark",values:[{name:"dark",value:"#1f2937"},{name:"light",value:"#f9fafb"}]},docs:{description:{component:"A complex orchestrator component that manages media display, information panels, and responsive layouts. Combines MediaImage, InfoText, and CollapsibleInfo components with responsive behavior and toggle functionality."}}},argTypes:{media:{description:"Media item containing image URL, alt text, and caption",control:"object"},info:{description:"Information item with text content and source citation",control:"object"},showInfo:{description:"Visibility state for the content section",control:{type:"select"},options:["block","hidden"]},onToggleInfo:{description:"Callback function to handle visibility toggle",action:"toggled"}},args:{media:i,info:n,showInfo:"block"}},s={render:t,parameters:{docs:{description:{story:"Default ContentSection with standard historical content. Features responsive layout that changes between mobile and desktop views."}}}},c={render:t,args:{media:re,info:ie},parameters:{docs:{description:{story:"ContentSection with longer captions and information text to test text wrapping and layout behavior."}}}},d={render:t,args:{media:le,info:n},parameters:{docs:{description:{story:"ContentSection with a portrait-oriented image to test responsive image handling."}}}},l={render:t,args:{media:me,info:pe},parameters:{docs:{description:{story:"ContentSection with scientific content to show versatility across different subject matters."}}}},m={render:t,args:{media:i,info:n},parameters:{viewport:{defaultViewport:"mobile1"},docs:{description:{story:"ContentSection optimized for mobile viewing. Shows collapsible caption behavior and mobile-specific layout."}}}},p={render:t,args:{media:i,info:n},parameters:{viewport:{defaultViewport:"desktop"},docs:{description:{story:"ContentSection in desktop layout showing side-by-side image and information panel."}}}},g={render:t,args:{media:i,info:n,showInfo:"hidden"},parameters:{docs:{description:{story:"ContentSection starting in hidden state to test the toggle functionality."}}}},h={render:t,args:{media:re,info:ie},parameters:{viewport:{viewports:{mobile:{name:"Mobile",styles:{width:"375px",height:"667px"}},tablet:{name:"Tablet",styles:{width:"768px",height:"1024px"}},desktop:{name:"Desktop",styles:{width:"1200px",height:"800px"}},ultrawide:{name:"Ultrawide",styles:{width:"1920px",height:"1080px"}}}},docs:{description:{story:"ContentSection tested across multiple viewport sizes to verify responsive behavior."}}}},u={render:r=>{const[o,a]=v.useState("block");return e.jsxs("div",{className:"h-screen bg-gray-900 relative",children:[e.jsxs("div",{className:"absolute top-4 left-4 z-10 bg-blue-900/80 text-white p-3 rounded text-sm max-w-md",children:[e.jsx("h4",{className:"font-semibold mb-2",children:"Accessibility Features:"}),e.jsxs("ul",{className:"text-xs space-y-1",children:[e.jsx("li",{children:"• Screen reader labels and descriptions"}),e.jsx("li",{children:"• Proper ARIA roles and states"}),e.jsx("li",{children:"• Keyboard navigation support"}),e.jsx("li",{children:"• Focus management"}),e.jsx("li",{children:"• Semantic HTML structure"})]})]}),e.jsx(I,{...r,showInfo:o,onToggleInfo:a})]})},args:{media:i,info:n},parameters:{docs:{description:{story:"ContentSection with focus on accessibility features including ARIA labels, roles, and keyboard navigation."}}}},f={render:r=>{const[o,a]=v.useState("block"),[ae,se]=v.useState(0),y=ce=>{a(ce),se(de=>de+1)};return e.jsxs("div",{className:"h-screen bg-gray-900 relative",children:[e.jsxs("div",{className:"absolute top-4 right-4 z-10 bg-green-900/80 text-white p-3 rounded text-sm",children:[e.jsxs("div",{children:["Toggle count: ",ae]}),e.jsx("button",{onClick:()=>y(o==="hidden"?"block":"hidden"),className:"mt-2 px-3 py-1 bg-green-600 rounded text-xs hover:bg-green-500",children:"Manual Toggle"})]}),e.jsx(I,{...r,showInfo:o,onToggleInfo:y})]})},args:{media:i,info:n},parameters:{docs:{description:{story:"Interactive test for ContentSection toggle functionality with manual controls and usage tracking."}}}},b={render:t,args:{media:{imgUrl:"https://broken-image-url-that-will-fail.jpg",altText:"Image that will fail to load",imgCaption:"This image demonstrates error handling when the image URL is invalid"},info:n},parameters:{docs:{description:{story:"ContentSection with a broken image URL to test error handling and fallback behavior."}}}},w={render:t,args:{media:{imgUrl:"https://picsum.photos/300/200?random=5",altText:"Simple image",imgCaption:"Brief caption"},info:{text:"Short information text.",sourceChicago:"Brief Source (2024)."}},parameters:{docs:{description:{story:"ContentSection with minimal content to test layout with short text and captions."}}}};var S,x,k;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: InteractiveWrapper,
  parameters: {
    docs: {
      description: {
        story: 'Default ContentSection with standard historical content. Features responsive layout that changes between mobile and desktop views.'
      }
    }
  }
}`,...(k=(x=s.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var C,T,M;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: InteractiveWrapper,
  args: {
    media: mockLongMediaItem,
    info: mockLongInfoItem
  },
  parameters: {
    docs: {
      description: {
        story: 'ContentSection with longer captions and information text to test text wrapping and layout behavior.'
      }
    }
  }
}`,...(M=(T=c.parameters)==null?void 0:T.docs)==null?void 0:M.source}}};var j,N,A;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: InteractiveWrapper,
  args: {
    media: mockPortraitMediaItem,
    info: mockInfoItem
  },
  parameters: {
    docs: {
      description: {
        story: 'ContentSection with a portrait-oriented image to test responsive image handling.'
      }
    }
  }
}`,...(A=(N=d.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var U,L,W;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: InteractiveWrapper,
  args: {
    media: mockScienceMediaItem,
    info: mockScienceInfoItem
  },
  parameters: {
    docs: {
      description: {
        story: 'ContentSection with scientific content to show versatility across different subject matters.'
      }
    }
  }
}`,...(W=(L=l.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var D,R,F;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: InteractiveWrapper,
  args: {
    media: mockMediaItem,
    info: mockInfoItem
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    },
    docs: {
      description: {
        story: 'ContentSection optimized for mobile viewing. Shows collapsible caption behavior and mobile-specific layout.'
      }
    }
  }
}`,...(F=(R=m.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var V,z,B;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: InteractiveWrapper,
  args: {
    media: mockMediaItem,
    info: mockInfoItem
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop'
    },
    docs: {
      description: {
        story: 'ContentSection in desktop layout showing side-by-side image and information panel.'
      }
    }
  }
}`,...(B=(z=p.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var H,P,E;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: InteractiveWrapper,
  args: {
    media: mockMediaItem,
    info: mockInfoItem,
    showInfo: 'hidden'
  },
  parameters: {
    docs: {
      description: {
        story: 'ContentSection starting in hidden state to test the toggle functionality.'
      }
    }
  }
}`,...(E=(P=g.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var G,K,O;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: InteractiveWrapper,
  args: {
    media: mockLongMediaItem,
    info: mockLongInfoItem
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
            width: '1200px',
            height: '800px'
          }
        },
        ultrawide: {
          name: 'Ultrawide',
          styles: {
            width: '1920px',
            height: '1080px'
          }
        }
      }
    },
    docs: {
      description: {
        story: 'ContentSection tested across multiple viewport sizes to verify responsive behavior.'
      }
    }
  }
}`,...(O=(K=h.parameters)==null?void 0:K.docs)==null?void 0:O.source}}};var J,_,Y;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: args => {
    const [showInfo, setShowInfo] = useState('block');
    return <div className="h-screen bg-gray-900 relative">\r
        <div className="absolute top-4 left-4 z-10 bg-blue-900/80 text-white p-3 rounded text-sm max-w-md">\r
          <h4 className="font-semibold mb-2">Accessibility Features:</h4>\r
          <ul className="text-xs space-y-1">\r
            <li>• Screen reader labels and descriptions</li>\r
            <li>• Proper ARIA roles and states</li>\r
            <li>• Keyboard navigation support</li>\r
            <li>• Focus management</li>\r
            <li>• Semantic HTML structure</li>\r
          </ul>\r
        </div>\r
        <ContentSection {...args} showInfo={showInfo} onToggleInfo={setShowInfo} />\r
      </div>;
  },
  args: {
    media: mockMediaItem,
    info: mockInfoItem
  },
  parameters: {
    docs: {
      description: {
        story: 'ContentSection with focus on accessibility features including ARIA labels, roles, and keyboard navigation.'
      }
    }
  }
}`,...(Y=(_=u.parameters)==null?void 0:_.docs)==null?void 0:Y.source}}};var q,Q,X;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => {
    const [showInfo, setShowInfo] = useState('block');
    const [toggleCount, setToggleCount] = useState(0);
    const handleToggle = (state: string) => {
      setShowInfo(state);
      setToggleCount(prev => prev + 1);
    };
    return <div className="h-screen bg-gray-900 relative">\r
        <div className="absolute top-4 right-4 z-10 bg-green-900/80 text-white p-3 rounded text-sm">\r
          <div>Toggle count: {toggleCount}</div>\r
          <button onClick={() => handleToggle(showInfo === 'hidden' ? 'block' : 'hidden')} className="mt-2 px-3 py-1 bg-green-600 rounded text-xs hover:bg-green-500">\r
            Manual Toggle\r
          </button>\r
        </div>\r
        <ContentSection {...args} showInfo={showInfo} onToggleInfo={handleToggle} />\r
      </div>;
  },
  args: {
    media: mockMediaItem,
    info: mockInfoItem
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive test for ContentSection toggle functionality with manual controls and usage tracking.'
      }
    }
  }
}`,...(X=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,$,ee;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: InteractiveWrapper,
  args: {
    media: {
      imgUrl: 'https://broken-image-url-that-will-fail.jpg',
      altText: 'Image that will fail to load',
      imgCaption: 'This image demonstrates error handling when the image URL is invalid'
    },
    info: mockInfoItem
  },
  parameters: {
    docs: {
      description: {
        story: 'ContentSection with a broken image URL to test error handling and fallback behavior.'
      }
    }
  }
}`,...(ee=($=b.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var te,ne,oe;w.parameters={...w.parameters,docs:{...(te=w.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: InteractiveWrapper,
  args: {
    media: {
      imgUrl: 'https://picsum.photos/300/200?random=5',
      altText: 'Simple image',
      imgCaption: 'Brief caption'
    },
    info: {
      text: 'Short information text.',
      sourceChicago: 'Brief Source (2024).'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'ContentSection with minimal content to test layout with short text and captions.'
      }
    }
  }
}`,...(oe=(ne=w.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};const Ce=["Default","LongContent","PortraitImage","ScienceContent","MobileView","DesktopView","InitiallyHidden","ResponsiveTest","AccessibilityTest","InteractionTest","ErrorState","MinimalContent"];export{u as AccessibilityTest,s as Default,p as DesktopView,b as ErrorState,g as InitiallyHidden,f as InteractionTest,c as LongContent,w as MinimalContent,m as MobileView,d as PortraitImage,h as ResponsiveTest,l as ScienceContent,Ce as __namedExportsOrder,ke as default};
