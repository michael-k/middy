"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[8644],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),u=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(a),m=n,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||l;return a?r.createElement(f,s(s({ref:t},c),{},{components:a})):r.createElement(f,s({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[d]="string"==typeof e?e:n,s[1]=o;for(var u=2;u<l;u++)s[u]=a[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(7294),n=a(6010);const l={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:a,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,s),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var r=a(7462),n=a(7294),l=a(6010),s=a(2466),o=a(6550),i=a(1980),u=a(7392),c=a(12);function d(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const r=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=p(e),[s,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[i,u]=f({queryString:a,groupId:r}),[d,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),h=(()=>{const e=i??d;return m({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{h&&o(h)}),[h]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),b(e)}),[u,b,l]),tabValues:l}}var h=a(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:a,selectedValue:o,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),r=u[a].value;r!==o&&(d(t),i(r))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:s}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},s,{className:(0,l.Z)("tabs__item",y.tabItem,s?.className,{"tabs__item--active":o===t})}),a??t)})))}function g(e){let{lazy:t,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function k(e){const t=b(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",y.tabList)},n.createElement(v,(0,r.Z)({},e,t)),n.createElement(g,(0,r.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return n.createElement(k,(0,r.Z)({key:String(t)},e))}},7886:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var r=a(7462),n=(a(7294),a(3905)),l=a(4866),s=a(5162);const o={title:"sqs-partial-batch-failure"},i=void 0,u={unversionedId:"middlewares/sqs-partial-batch-failure",id:"middlewares/sqs-partial-batch-failure",title:"sqs-partial-batch-failure",description:"Middleware for handling partially failed SQS batches.",source:"@site/docs/middlewares/sqs-partial-batch-failure.md",sourceDirName:"middlewares",slug:"/middlewares/sqs-partial-batch-failure",permalink:"/docs/middlewares/sqs-partial-batch-failure",draft:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/middlewares/sqs-partial-batch-failure.md",tags:[],version:"current",lastUpdatedAt:1692985531,formattedLastUpdatedAt:"Aug 25, 2023",frontMatter:{title:"sqs-partial-batch-failure"},sidebar:"tutorialSidebar",previous:{title:"service-discovery",permalink:"/docs/middlewares/service-discovery"},next:{title:"ssm",permalink:"/docs/middlewares/ssm"}},c={},d=[{value:"Install",id:"install",level:2},{value:"Options",id:"options",level:2},{value:"Sample usage",id:"sample-usage",level:2},{value:"Important",id:"important",level:2}],p={toc:d},m="wrapper";function f(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Middleware for handling partially failed SQS batches."),(0,n.kt)("h2",{id:"install"},"Install"),(0,n.kt)("p",null,"To install this middleware you can use NPM:"),(0,n.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @middy/sqs-partial-batch-failure\n# Required for types only\nnpm install --save-dev @aws-sdk/client-sqs\n"))),(0,n.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @middy/sqs-partial-batch-failure\n# Required for types only\nyarn add --dev @aws-sdk/client-sqs\n"))),(0,n.kt)(s.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add @middy/sqs-partial-batch-failure\n# Required for types only\npnpm add --save-dev @aws-sdk/client-sqs\n")))),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"logger")," (function) (optional): A function that will be called when a record fails to be processed. Default: ",(0,n.kt)("inlineCode",{parentName:"li"},"console.error"))),(0,n.kt)("h2",{id:"sample-usage"},"Sample usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"import middy from '@middy/core'\nimport sqsBatch from '@middy/sqs-partial-batch-failure'\n\nconst lambdaHandler = (event, context) => {\n  const recordPromises = event.Records.map(async (record, index) => {\n    /* Custom message processing logic */\n    return record\n  })\n  return Promise.allSettled(recordPromises)\n}\n\nexport const handler = middy(lambdaHandler).use(sqsBatch())\n")),(0,n.kt)("h2",{id:"important"},"Important"),(0,n.kt)("p",null,"The value ",(0,n.kt)("inlineCode",{parentName:"p"},"ReportBatchItemFailures")," must be added to your Lambda's ",(0,n.kt)("inlineCode",{parentName:"p"},"FunctionResponseTypes")," in the ",(0,n.kt)("inlineCode",{parentName:"p"},"EventSourceMapping"),". See ",(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#services-sqs-batchfailurereporting"},"Reporting batch item failures")," and ",(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html"},"Lambda EventSourceMapping")))}f.isMDXComponent=!0}}]);