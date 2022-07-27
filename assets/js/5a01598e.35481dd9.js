"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[4297],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return u}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),i=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=i(e.components);return a.createElement(d.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=i(r),u=n,m=c["".concat(d,".").concat(u)]||c[u]||h[u]||o;return r?a.createElement(m,l(l({ref:t},p),{},{components:r})):a.createElement(m,l({ref:t},p))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=c;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var i=2;i<o;i++)l[i]=r[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},3699:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return h}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),l=["components"],s={title:"4.x (Future)",sidebar_position:10},d=void 0,i={unversionedId:"upgrade/3-4",id:"upgrade/3-4",title:"4.x (Future)",description:"See v4 Plan Issue to see what we hope to implement and provide feedback.",source:"@site/docs/upgrade/3-4.md",sourceDirName:"upgrade",slug:"/upgrade/3-4",permalink:"/docs/upgrade/3-4",draft:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/upgrade/3-4.md",tags:[],version:"current",lastUpdatedAt:1658941367,formattedLastUpdatedAt:"7/27/2022",sidebarPosition:10,frontMatter:{title:"4.x (Future)",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Upgrade",permalink:"/docs/category/upgrade"},next:{title:"Upgrade 2.x -> 3.x",permalink:"/docs/upgrade/2-3"}},p={},h=[{value:"Notable changes",id:"notable-changes",level:2},{value:"Core",id:"core",level:2},{value:"Util",id:"util",level:2},{value:"Middleware",id:"middleware",level:2},{value:"cloudwatch-metrics",id:"cloudwatch-metrics",level:3},{value:"do-not-wait-for-empty-event-loop",id:"do-not-wait-for-empty-event-loop",level:3},{value:"error-logger",id:"error-logger",level:3},{value:"event-normalizer",id:"event-normalizer",level:3},{value:"http-content-encoding",id:"http-content-encoding",level:3},{value:"http-content-negotiation",id:"http-content-negotiation",level:3},{value:"http-cors",id:"http-cors",level:3},{value:"http-error-handler",id:"http-error-handler",level:3},{value:"http-event-normalizer",id:"http-event-normalizer",level:3},{value:"http-header-normalizer",id:"http-header-normalizer",level:3},{value:"http-json-body-parser",id:"http-json-body-parser",level:3},{value:"http-multipart-body-parser",id:"http-multipart-body-parser",level:3},{value:"http-partial-response",id:"http-partial-response",level:3},{value:"http-response-serializer",id:"http-response-serializer",level:3},{value:"http-router",id:"http-router",level:3},{value:"http-security-headers",id:"http-security-headers",level:3},{value:"http-urlencode-body-parser",id:"http-urlencode-body-parser",level:3},{value:"http-urlencode-path-parser",id:"http-urlencode-path-parser",level:3},{value:"input-output-logger",id:"input-output-logger",level:3},{value:"rds-signer",id:"rds-signer",level:3},{value:"s3-object-response",id:"s3-object-response",level:3},{value:"secrets-manager",id:"secrets-manager",level:3},{value:"service-discovery",id:"service-discovery",level:3},{value:"sqs-partial-batch-failure",id:"sqs-partial-batch-failure",level:3},{value:"ssm",id:"ssm",level:3},{value:"sts",id:"sts",level:3},{value:"validator",id:"validator",level:3},{value:"warmup",id:"warmup",level:3},{value:"ws-json-body-parser",id:"ws-json-body-parser",level:3},{value:"ws-response",id:"ws-response",level:3},{value:"ws-router",id:"ws-router",level:3},{value:"Notes",id:"notes",level:2}],c={toc:h};function u(e){var t=e.components,r=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/middyjs/middy/issues/769"},"v4 Plan Issue")," to see what we hope to implement and provide feedback."),(0,o.kt)("p",null,"Version 4.x of Middy no longer supports Node.js versions 14.x. You are highly encouraged to move to Node.js 18.x.\nMiddy now uses AWS SDK v3 by default."),(0,o.kt)("h2",{id:"notable-changes"},"Notable changes"),(0,o.kt)("h2",{id:"core"},"Core"),(0,o.kt)("h2",{id:"util"},"Util"),(0,o.kt)("h2",{id:"middleware"},"Middleware"),(0,o.kt)("h3",{id:"cloudwatch-metrics"},(0,o.kt)("a",{parentName:"h3",href:"/docs/middlewares/cloudwatch-metrics"},"cloudwatch-metrics")),(0,o.kt)("p",null,"No change"),(0,o.kt)("h3",{id:"do-not-wait-for-empty-event-loop"},(0,o.kt)("a",{parentName:"h3",href:"/docs/middlewares/do-not-wait-for-empty-event-loop"},"do-not-wait-for-empty-event-loop")),(0,o.kt)("p",null,"No change"),(0,o.kt)("h3",{id:"error-logger"},(0,o.kt)("a",{parentName:"h3",href:"/docs/middlewares/error-logger"},"error-logger")),(0,o.kt)("p",null,"No change"),(0,o.kt)("h3",{id:"event-normalizer"},(0,o.kt)("a",{parentName:"h3",href:"/docs/middlewares/event-normalizer"},"event-normalizer")),(0,o.kt)("p",null,"No change"),(0,o.kt)("h3",{id:"http-content-encoding"},(0,o.kt)("a",{parentName:"h3",href:"/docs/middlewares/http-content-encoding"},"http-content-encoding")),(0,o.kt)("p",null,"No change"),(0,o.kt)("h3",{id:"http-content-negotiation"},(0,o.kt)("a",{parentName:"h3",href:"/docs/middlewares/http-content-negotiation"},"http-content-negotiation")),(0,o.kt)("p",null,"No change"),(0,o.kt)("h3",{id:"http-cors"},(0,o.kt)("a",{parentName:"h3",href:"/docs/middlewares/http-cors"},"http-cors")),(0,o.kt)("p",null,"No change"),(0,o.kt)("h3",{id:"http-error-handler"},(0,o.kt)("a",{parentName:"h3",href:"/docs/middlewares/http-error-handler"},"http-error-handler")),(0,o.kt)("p",null,"No change"),(0,o.kt)("h3",{id:"http-event-normalizer"},(0,o.kt)("a",{parentName:"h3",href:"/docs/middlewares/http-event-normalizer"},"http-event-normalizer")),(0,o.kt)("p",null,"No change"),(0,o.kt)("h3",{id:"http-header-normalizer"},(0,o.kt)("a",{parentName:"h3",href:"/docs/middlewares/http-header-normalizer"},"http-header-normalizer")),(0,o.kt)("p",null,"No change"),(0,o.kt)("h3",{id:"http-json-body-parser"},(0,o.kt)("a",{parentName:"h3",href:"/docs/middlewares/http-json-body-parser"},"http-json-body-parser")),(0,o.kt)("p",null,"No change"),(0,o.kt)("h3",{id:"http-multipart-body-parser"},(0,o.kt)("a",{parentName:"h3",href:"/docs/middlewares/http-multipart-body-parser"},"http-multipart-body-parser")),(0,o.kt)("p",null,"No change"),(0,o.kt)("h3",{id:"http-partial-response"},(0,o.kt)("a",{parentName:"h3",href:"/docs/middlewares/http-partial-response"},"http-partial-response")),(0,o.kt)("p",null,"No change"),(0,o.kt)("h3",{id:"http-response-serializer"},(0,o.kt)("a",{parentName:"h3",href:"/docs/middlewares/http-response-serializer"},"http-response-serializer")),(0,o.kt)("p",null,"No change"),(0,o.kt)("h3",{id:"http-router"},(0,o.kt)("a",{parentName:"h3",href:"/docs/routers/http-router"},"http-router")),(0,o.kt)("p",null,"No change"),(0,o.kt)("h3",{id:"http-security-headers"},(0,o.kt)("a",{parentName:"h3",href:"/docs/middlewares/http-security-headers"},"http-security-headers")),(0,o.kt)("p",null,"No change"),(0,o.kt)("h3",{id:"http-urlencode-body-parser"},(0,o.kt)("a",{parentName:"h3",href:"/docs/middlewares/http-urlencode-body-parser"},"http-urlencode-body-parser")),(0,o.kt)("p",null,"No change"),(0,o.kt)("h3",{id:"http-urlencode-path-parser"},(0,o.kt)("a",{parentName:"h3",href:"/docs/middlewares/http-urlencode-path-parser"},"http-urlencode-path-parser")),(0,o.kt)("p",null,"No change"),(0,o.kt)("h3",{id:"input-output-logger"},(0,o.kt)("a",{parentName:"h3",href:"/docs/middlewares/input-output-logger"},"input-output-logger")),(0,o.kt)("p",null,"No change"),(0,o.kt)("h3",{id:"rds-signer"},(0,o.kt)("a",{parentName:"h3",href:"/docs/middlewares/rds-signer"},"rds-signer")),(0,o.kt)("p",null,"No change"),(0,o.kt)("h3",{id:"s3-object-response"},(0,o.kt)("a",{parentName:"h3",href:"/docs/middlewares/s3-object-response"},"s3-object-response")),(0,o.kt)("p",null,"No change"),(0,o.kt)("h3",{id:"secrets-manager"},(0,o.kt)("a",{parentName:"h3",href:"/docs/middlewares/secrets-manager"},"secrets-manager")),(0,o.kt)("p",null,"No change"),(0,o.kt)("h3",{id:"service-discovery"},(0,o.kt)("a",{parentName:"h3",href:"/docs/middlewares/service-discovery"},"service-discovery")),(0,o.kt)("p",null,"No change"),(0,o.kt)("h3",{id:"sqs-partial-batch-failure"},(0,o.kt)("a",{parentName:"h3",href:"/docs/middlewares/sqs-partial-batch-failure"},"sqs-partial-batch-failure")),(0,o.kt)("p",null,"No change"),(0,o.kt)("h3",{id:"ssm"},(0,o.kt)("a",{parentName:"h3",href:"/docs/middlewares/ssm"},"ssm")),(0,o.kt)("p",null,"No change"),(0,o.kt)("h3",{id:"sts"},(0,o.kt)("a",{parentName:"h3",href:"/docs/middlewares/sts"},"sts")),(0,o.kt)("p",null,"No change"),(0,o.kt)("h3",{id:"validator"},(0,o.kt)("a",{parentName:"h3",href:"/docs/middlewares/validator"},"validator")),(0,o.kt)("p",null,"No change"),(0,o.kt)("h3",{id:"warmup"},(0,o.kt)("a",{parentName:"h3",href:"/docs/middlewares/warmup"},"warmup")),(0,o.kt)("p",null,"No change"),(0,o.kt)("h3",{id:"ws-json-body-parser"},(0,o.kt)("a",{parentName:"h3",href:"/docs/middlewares/ws-json-body-parser"},"ws-json-body-parser")),(0,o.kt)("p",null,"No change"),(0,o.kt)("h3",{id:"ws-response"},(0,o.kt)("a",{parentName:"h3",href:"/docs/middlewares/ws-response"},"ws-response")),(0,o.kt)("p",null,"No change"),(0,o.kt)("h3",{id:"ws-router"},(0,o.kt)("a",{parentName:"h3",href:"/docs/routers/ws-router"},"ws-router")),(0,o.kt)("p",null,"No change"),(0,o.kt)("h2",{id:"notes"},"Notes"))}u.isMDXComponent=!0}}]);