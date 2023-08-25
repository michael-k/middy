"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[7450],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(7462),r=a(7294),o=a(6010),l=a(2466),i=a(6550),s=a(1980),c=a(7392),u=a(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=p(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=h({queryString:a,groupId:n}),[d,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=s??d;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var f=a(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==i&&(d(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:p},l,{className:(0,o.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},r.createElement(k,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function v(e){const t=(0,f.Z)();return r.createElement(w,(0,n.Z)({key:String(t)},e))}},9310:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=a(7462),r=(a(7294),a(3905)),o=a(4866),l=a(5162);const i={title:"Powertools for AWS Lambda"},s=void 0,c={unversionedId:"integrations/lambda-powertools",id:"integrations/lambda-powertools",title:"Powertools for AWS Lambda",description:"Powertools for AWS is a developer toolkit to implement Serverless best practices and increase developer velocity.",source:"@site/docs/integrations/lambda-powertools.md",sourceDirName:"integrations",slug:"/integrations/lambda-powertools",permalink:"/docs/integrations/lambda-powertools",draft:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/integrations/lambda-powertools.md",tags:[],version:"current",lastUpdatedAt:1692985531,formattedLastUpdatedAt:"Aug 25, 2023",frontMatter:{title:"Powertools for AWS Lambda"},sidebar:"tutorialSidebar",previous:{title:"Apollo Server",permalink:"/docs/integrations/apollo-server"},next:{title:"Pino",permalink:"/docs/integrations/pino"}},u={},d=[{value:"Intro",id:"intro",level:2},{value:"Logger",id:"logger",level:2},{value:"Install",id:"install",level:3},{value:"Options",id:"options",level:3},{value:"Sample usage",id:"sample-usage",level:3},{value:"Tracer",id:"tracer",level:2},{value:"Install",id:"install-1",level:3},{value:"Options",id:"options-1",level:3},{value:"Sample usage",id:"sample-usage-1",level:3},{value:"Metrics",id:"metrics",level:2},{value:"Install",id:"install-2",level:3},{value:"Options",id:"options-2",level:3},{value:"Sample usage",id:"sample-usage-2",level:3},{value:"Best practices",id:"best-practices",level:2},{value:"Using multiple utilities",id:"using-multiple-utilities",level:3},{value:"Cleaning up on early returns",id:"cleaning-up-on-early-returns",level:3}],p={toc:d},m="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Powertools for AWS is a developer toolkit to implement Serverless ",(0,r.kt)("a",{parentName:"p",href:"https://s12d.com/middy-intro"},"best practices and increase developer velocity"),"."),(0,r.kt)("p",null,"You can use Powertools for AWS in both TypeScript and JavaScript code bases."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Powertools officially supports ",(0,r.kt)("inlineCode",{parentName:"p"},"@middy/core")," v3.x only. In most cases when using Node.js 16 or higher you can use Powertools with ",(0,r.kt)("inlineCode",{parentName:"p"},"@middy/core")," v4.x, however support is provided on a best-effort basis and we recommend using ",(0,r.kt)("inlineCode",{parentName:"p"},"@middy/core")," v3.x.")),(0,r.kt)("h2",{id:"intro"},"Intro"),(0,r.kt)("p",null,"Powertools is a collection of utilities that can be used independently or together to help you build production-ready serverless applications. Currently, Powertools provides the following utilities that are compatible with Middy:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://s12d.com/middy-logger"},(0,r.kt)("strong",{parentName:"a"},"Logger"))," - Structured logging made easier with a middleware to capture key fields from the Lambda context, cold starts, and more. Compatible with Amazon CloudWatch, Datadog, and more."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://s12d.com/middy-tracer"},(0,r.kt)("strong",{parentName:"a"},"Tracer"))," - An opinionated wrapper around AWS X-Ray SDK for Node.js with a middleware to automatically capture traces for function invocations, HTTP requests, and AWS SDK calls, and more."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://s12d.com/middy-metrics"},(0,r.kt)("strong",{parentName:"a"},"Metrics"))," - Create Amazon CloudWatch custom metrics asynchronously with a middleware that takes care of capturing cold starts, and flushes metrics to CloudWatch in ",(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Embedded_Metric_Format.html"},"EMF-formatted")," batches.")),(0,r.kt)("h2",{id:"logger"},"Logger"),(0,r.kt)("p",null,"Key features:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Capturing key fields from the Lambda context, cold starts, and structure logging output as JSON."),(0,r.kt)("li",{parentName:"ul"},"Logging Lambda invocation events when instructed (disabled by default)."),(0,r.kt)("li",{parentName:"ul"},"Printing all the logs only for a percentage of invocations via log sampling (disabled by default)."),(0,r.kt)("li",{parentName:"ul"},"Appending additional keys to structured logs at any point in time."),(0,r.kt)("li",{parentName:"ul"},"Providing a custom log formatter (Bring Your Own Formatter) to output logs in a structure compatible with your organization\u2019s Logging RFC.")),(0,r.kt)("h3",{id:"install"},"Install"),(0,r.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @aws-lambda-powertools/logger\n"))),(0,r.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @aws-lambda-powertools/logger\n"))),(0,r.kt)(l.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add @aws-lambda-powertools/logger\n")))),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("p",null,"Class constructor accepts the following options, which are all optional:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"logLevel")," (string|LogLevel): Log level to use. Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"INFO"),", but you can use any of the following values: ",(0,r.kt)("inlineCode",{parentName:"li"},"SILENT"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"DEBUG"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"INFO"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"WARN"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"ERROR"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"CRITICAL"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"serviceName")," (string): Service name to use that will be used in all log statements. Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"service_undefined"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sampleRateValue")," (number): number between ",(0,r.kt)("inlineCode",{parentName:"li"},"0.0")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"1")," to determine the sample rate for debug logging. Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"0")," (no debub logging).")),(0,r.kt)("p",null,"Middleware accepts the following options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"logger")," (Logger) (required): An instance of the Logger class."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"option")," (object) (optional): An object with the following keys:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"logEvent")," (boolean) (optional): Whether to log the Lambda invocation event. Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"clearState")," (boolean) (optional): Whether to clear the logger state after each invocation. Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),".")))),(0,r.kt)("h3",{id:"sample-usage"},"Sample usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import middy from '@middy/core';\nimport { Logger, injectLambdaContext } from '@aws-lambda-powertools/logger';\n\nconst logger = new Logger({ service: 'serverlessAirline' });\n\nconst lambdaHandler = async (_event, _context) => {\n  logger.info('This is an INFO log with some context', {\n    foo: {\n      bar: 'baz'\n    }\n  });\n};\n\nexport const handler = middy(lambdaHandler)\n  .use(injectLambdaContext(logger));\n")),(0,r.kt)("p",null,"The above code will output the following log:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "cold_start": true,\n  "function_arn": "arn:aws:lambda:eu-west-1:123456789012:function:shopping-cart-api-lambda-prod-eu-west-1",\n  "function_memory_size": 128,\n  "function_request_id": "c6af9ac6-7b61-11e6-9a41-93e812345678",\n  "function_name": "shopping-cart-api-lambda-prod-eu-west-1",\n  "level": "INFO",\n  "message": "This is an INFO log with some context",\n  "foo": {\n    "bar": "baz"\n  },\n  "service": "serverlessAirline",\n  "timestamp": "2021-12-12T21:21:08.921Z",\n  "xray_trace_id": "abcdef123456abcdef123456abcdef123456"\n}\n')),(0,r.kt)("p",null,"As you can see, the log entry includes several fields that are automatically captured by the Logger utility, and that can help you better understand the context of the log entry. For example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"cold_start")," field indicates whether the Lambda function was cold started or not, and the ",(0,r.kt)("inlineCode",{parentName:"p"},"xray_trace_id")," field contains the AWS X-Ray trace ID for the Lambda invocation. This is useful when you're troubleshooting a problem and want to correlate the logs with the traces."),(0,r.kt)("p",null,"The Logger utility also allows you to append arbitary keys to the log entry at both ",(0,r.kt)("a",{parentName:"p",href:"https://docs.powertools.aws.dev/lambda-typescript/latest/core/logger/#appending-persistent-additional-log-keys-and-values"},"the global level"),", at the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.powertools.aws.dev/lambda-typescript/latest/core/logger/#clearing-all-state"},"invocation level"),", and at the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.powertools.aws.dev/lambda-typescript/latest/core/logger/#appending-additional-data-to-a-single-log-item"},"single log level"),". For example, there might be some keys that you want to include in all log entries, such as the ",(0,r.kt)("inlineCode",{parentName:"p"},"environment")," key to differentiate between the ",(0,r.kt)("inlineCode",{parentName:"p"},"prod")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"dev")," environments, or in other cases you might want to include some keys only for a specific log entry, such as the ",(0,r.kt)("inlineCode",{parentName:"p"},"customer_id")," key to identify the customer that triggered the Lambda invocation."),(0,r.kt)("p",null,"Additionally, you can also configure Logger to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.powertools.aws.dev/lambda-typescript/latest/core/logger/#log-incoming-event"},"log the Lambda invocation event"),", which can be useful when you're troubleshooting a problem and want to see the event that triggered the Lambda invocation. Finally, Logger allows you to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.powertools.aws.dev/lambda-typescript/latest/core/logger/#custom-log-formatter-bring-your-own-formatter"},"define a custom log formatter")," to output logs in a different JSON structure from the default one. This is useful when you want to output logs in a structure that is compatible with your organization's requirements."),(0,r.kt)("h2",{id:"tracer"},"Tracer"),(0,r.kt)("p",null,"Key features:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Auto-capturing cold start and service name as annotations, and responses or full exceptions as metadata."),(0,r.kt)("li",{parentName:"ul"},"Automatically tracing HTTP(S) clients and generating segments for each request."),(0,r.kt)("li",{parentName:"ul"},"Supporting tracing functions via decorators, middleware, and manual instrumentation."),(0,r.kt)("li",{parentName:"ul"},"Supporting tracing AWS SDK v2 and v3 via AWS X-Ray SDK for Node.js."),(0,r.kt)("li",{parentName:"ul"},"Auto-disable tracing when not running in the Lambda environment.")),(0,r.kt)("h3",{id:"install-1"},"Install"),(0,r.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @aws-lambda-powertools/tracer\n"))),(0,r.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @aws-lambda-powertools/tracer\n"))),(0,r.kt)(l.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add @aws-lambda-powertools/tracer\n")))),(0,r.kt)("h3",{id:"options-1"},"Options"),(0,r.kt)("p",null,"Class constructor accepts the following options, which are all optional:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"serviceName")," (string): Service name to use that will be used in all log statements. Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"service_undefined"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"enabled")," (boolean): Whether to enable tracing. Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"captureHTTPsRequests")," (boolean): Whether to capture outgoing HTTP(S) requests as segment metadata. Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),".")),(0,r.kt)("p",null,"Middleware accepts the following options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tracer")," (Tracer) (required): An instance of the Tracer class."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"option")," (object) (optional): An object with the following keys:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"captureResponse")," (boolean) (optional): Whether to capture the Lambda invocation result as segment metadata. Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),".")))),(0,r.kt)("h3",{id:"sample-usage-1"},"Sample usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import middy from '@middy/core';\nimport { Tracer, captureLambdaHandler } from '@aws-lambda-powertools/tracer';\nimport { SecretsManagerClient } from '@aws-sdk/client-secrets-manager';\n\nconst tracer = new Tracer({\n  serviceName: 'serverlessAirline'\n});\n\nconst client = tracer.captureAWSv3Client(\n  new SecretsManagerClient({})\n);\n\nconst lambdaHandler = async (_event, _context) => {\n  tracer.putAnnotation('successfulBooking', true);\n};\n\nexport const handler = middy(lambdaHandler)\n  .use(captureLambdaHandler(tracer));\n")),(0,r.kt)("p",null,"The above code instructs the Tracer utility to create a custom segment named ",(0,r.kt)("inlineCode",{parentName:"p"},"## index.handler")," and to add an annotation to it with the key ",(0,r.kt)("inlineCode",{parentName:"p"},"successfulBooking")," and the value ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),". The segment name is automatically generated based on the handler name, and the ",(0,r.kt)("inlineCode",{parentName:"p"},"##")," prefix is used to indicate that this is a custom segment. The Tracer utility also automatically captures the cold start and service name as annotations, and the Lambda invocation result or any error thrown ",(0,r.kt)("a",{parentName:"p",href:"https://docs.powertools.aws.dev/lambda-typescript/latest/core/tracer/#annotations-metadata"},"as metadata"),". The segment data will be automatically sent to AWS X-Ray when the Lambda function completes its execution."),(0,r.kt)("p",null,"Tracer also automatically ",(0,r.kt)("a",{parentName:"p",href:"https://docs.powertools.aws.dev/lambda-typescript/latest/core/tracer/#tracing-http-requests"},"captures and traces any outgoing HTTP(S) requests")," made by the Lambda function. For example, if your function makes a request to a custom API, the Tracer utility will automatically create a segment for that request which will appear in your trace data and service map. Additionally, it will also ",(0,r.kt)("a",{parentName:"p",href:"https://docs.powertools.aws.dev/lambda-typescript/latest/core/tracer/#patching-aws-sdk-clients"},"capture any AWS SDK calls")," made by the function, and do the same for them."),(0,r.kt)("h2",{id:"metrics"},"Metrics"),(0,r.kt)("p",null,"Key features:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Aggregating up to 100 metrics using a single ",(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Embedded_Metric_Format.html"},"CloudWatch EMF")," object."),(0,r.kt)("li",{parentName:"ul"},"Validating your metrics against common metric definitions mistakes (for example, metric unit, values, max dimensions, max metrics)."),(0,r.kt)("li",{parentName:"ul"},"Metrics are created asynchronously by the CloudWatch service. You do not need any custom stacks, and there is no impact to Lambda function latency."),(0,r.kt)("li",{parentName:"ul"},"Creating a one-off metric with different dimensions.")),(0,r.kt)("p",null,"If you're new to Amazon CloudWatch, there are a few terms like ",(0,r.kt)("inlineCode",{parentName:"p"},"Namespace"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Dimensions"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Unit"),", etc, that you must be aware of before you start using the Metrics utility. To learn more about these terms, see the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.powertools.aws.dev/lambda-typescript/latest/core/metrics/#terminologies"},"documentation on PowerTools Metrics"),"."),(0,r.kt)("h3",{id:"install-2"},"Install"),(0,r.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @aws-lambda-powertools/metrics\n"))),(0,r.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @aws-lambda-powertools/metrics\n"))),(0,r.kt)(l.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add @aws-lambda-powertools/metrics\n")))),(0,r.kt)("h3",{id:"options-2"},"Options"),(0,r.kt)("p",null,"Class constructor accepts the following options, which are all optional:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"serviceName")," (string): Service name to use that will be used in all log statements. Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"service_undefined"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"defaultNamespace")," (string): Default namespace to use for all metrics. Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"default_namespace"),".")),(0,r.kt)("p",null,"Middleware accepts the following options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"metrics")," (Metric) (required): An instance of the Metrics class."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"option")," (object) (optional): An object with the following keys:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"throwOnEmptyMetrics")," (boolean) (optional): Whether to throw an error if no metrics were added. Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"captureColdStartMetric")," (boolean) (optional): Whether to capture the cold start metric. Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),".")))),(0,r.kt)("h3",{id:"sample-usage-2"},"Sample usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import middy from '@middy/core';\nimport { Metrics, MetricUnits, logMetrics } from '@aws-lambda-powertools/metrics';\n\nconst metrics = new Metrics({\n  namespace: 'serverlessAirline',\n  serviceName: 'orders'\n});\n\nconst lambdaHandler = async (_event: unknown, _context: unknown): Promise<void> => {\n  metrics.addMetric('successfulBooking', MetricUnits.Count, 1);\n};\n\nexport const handler = middy(lambdaHandler)\n  .use(logMetrics(metrics));\n")),(0,r.kt)("p",null,"The above code will output a CloudWatch EMF object similar to the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "successfulBooking": 1.0,\n  "_aws": {\n    "Timestamp": 1592234975665,\n    "CloudWatchMetrics": [{\n      "Namespace": "successfulBooking",\n      "Dimensions": [\n        [ "service" ]\n      ],\n      "Metrics": [{\n        "Name": "successfulBooking",\n        "Unit": "Count"\n      }]\n    }],\n    "service": "orders"\n  }\n}\n')),(0,r.kt)("p",null,"This EMF object will be sent to CloudWatch asynchronously by the CloudWatch service. You do not need any custom stacks, and there is no impact to Lambda function latency."),(0,r.kt)("p",null,"The Metrics utility supports ",(0,r.kt)("a",{parentName:"p",href:"https://docs.powertools.aws.dev/lambda-typescript/latest/core/metrics/#adding-high-resolution-metrics"},"high-resolution metrics")," as well as ",(0,r.kt)("a",{parentName:"p",href:"https://docs.powertools.aws.dev/lambda-typescript/latest/core/metrics/#adding-multi-value-metrics"},"multi-value metrics"),". It also allows you to add ",(0,r.kt)("a",{parentName:"p",href:"https://docs.powertools.aws.dev/lambda-typescript/latest/core/metrics/#adding-default-dimensions"},"default dimensions")," that are used in all the metrics emitted by your application or ",(0,r.kt)("a",{parentName:"p",href:"https://docs.powertools.aws.dev/lambda-typescript/latest/core/metrics/#single-metric-with-different-dimensions"},"create a one-off metric")," with different dimensions."),(0,r.kt)("h2",{id:"best-practices"},"Best practices"),(0,r.kt)("h3",{id:"using-multiple-utilities"},"Using multiple utilities"),(0,r.kt)("p",null,"You can use multiple Powertools utilities in your Lambda function by chaining the respective middlewares together. When doing so the Powertools team recommends that you place the Tracer middleware at the top of the middleware chain, followed by the Logger and any other middlewares."),(0,r.kt)("p",null,"This is because the Tracer middleware will create a new segment for each Lambda invocation, and the Logger might want to log the event that triggered the Lambda invocation. With this placement you will be able to have a segment that closely matches the actual duration of your Lambda function, and you will be able to see the event that triggered the function invocation before it's potentially modified by other middlewares."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"export const handler = middy(() => { /* ... */ })\n  .use(captureLambdaHandler(tracer))\n  .use(injectLambdaContext(logger, { logEvent: true }))\n  .use(logMetrics(metrics, { captureColdStartMetric: true }));\n")),(0,r.kt)("h3",{id:"cleaning-up-on-early-returns"},"Cleaning up on early returns"),(0,r.kt)("p",null,"As discussed in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/intro/early-interrupt"},"early return section"),", some middlewares might need to stop the whole execution flow and return a response immediately. In this case, if you are writing your own middleware that will work with the Powertools utilities, you must make sure to clean up the utilities before returning."),(0,r.kt)("p",null,"For example, if you are using the Tracer utility, you must make sure to call the ",(0,r.kt)("inlineCode",{parentName:"p"},"close")," method so that the Tracer can properly close the current segment and send it to X-Ray. Likewise, if you are using the Metrics utility, it's a good practice to call the ",(0,r.kt)("inlineCode",{parentName:"p"},"clearMetrics")," method so that the Metrics utility can emit the metrics that were stored in the buffer and avoid you losing any data."),(0,r.kt)("p",null,"Following the example described in the linked section, you can clean up all the utilities by doing the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { cleanupMiddlewares } from '@aws-lambda-powertools/commons';\n\n// some function that calculates the cache id based on the current event\nconst calculateCacheId = (event) => {\n  /* ... */\n}\nconst storage = {}\n\n// middleware\nconst cacheMiddleware = (options) => {\n  let cacheKey\n\n  const cacheMiddlewareBefore = async (request) => {\n    cacheKey = options.calculateCacheId(request.event)\n    if (options.storage.hasOwnProperty(cacheKey)) {\n      // clean up the Powertools utilities before returning\n      cleanupMiddlewares()\n\n      // exits early and returns the value from the cache if it's already there\n      return options.storage[cacheKey]\n    }\n  }\n\n  const cacheMiddlewareAfter = async (request) => {\n    // stores the calculated response in the cache\n    options.storage[cacheKey] = request.response\n  }\n\n  return {\n    before: cacheMiddlewareBefore,\n    after: cacheMiddlewareAfter\n  }\n}\n\n// sample usage\nconst handler = middy((event, context) => {\n  /* ... */\n})\n.use(captureLambdaHandler(tracer))\n.use(injectLambdaContext(logger, { logEvent: true }))\n.use(logMetrics(metrics, { captureColdStartMetric: true }))\n.use(\n  cacheMiddleware({\n    calculateCacheId,\n    storage\n  })\n);\n")))}h.isMDXComponent=!0}}]);