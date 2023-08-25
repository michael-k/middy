"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[2201],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,f=c["".concat(o,".").concat(m)]||c[m]||p[m]||l;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(7462),r=n(7294),l=n(6010),i=n(2466),s=n(6550),o=n(1980),u=n(7392),d=n(12);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=p(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[o,u]=f({queryString:n,groupId:a}),[c,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,d.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),k=(()=>{const e=o??c;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{k&&s(k)}),[k]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),b(e)}),[u,b,l]),tabValues:l}}var k=n(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:s,selectValue:o,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),p=e=>{const t=e.currentTarget,n=d.indexOf(t),a=u[n].value;a!==s&&(c(t),o(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:p},i,{className:(0,l.Z)("tabs__item",h.tabItem,i?.className,{"tabs__item--active":s===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function g(e){const t=b(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",h.tabList)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return r.createElement(g,(0,a.Z)({key:String(t)},e))}},6951:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),l=n(4866),i=n(5162);const s={title:"s3"},o=void 0,u={unversionedId:"middlewares/s3",id:"middlewares/s3",title:"s3",description:"Fetches S3 stored configuration and parses out JSON.",source:"@site/docs/middlewares/s3.md",sourceDirName:"middlewares",slug:"/middlewares/s3",permalink:"/docs/middlewares/s3",draft:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/middlewares/s3.md",tags:[],version:"current",lastUpdatedAt:1692985531,formattedLastUpdatedAt:"Aug 25, 2023",frontMatter:{title:"s3"},sidebar:"tutorialSidebar",previous:{title:"s3-object-response",permalink:"/docs/middlewares/s3-object-response"},next:{title:"secrets-manager",permalink:"/docs/middlewares/secrets-manager"}},d={},c=[{value:"Install",id:"install",level:2},{value:"Options",id:"options",level:2},{value:"Sample usage",id:"sample-usage",level:2},{value:"Bundling",id:"bundling",level:2}],p={toc:c},m="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Fetches S3 stored configuration and parses out JSON."),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)("p",null,"To install this middleware you can use NPM:"),(0,r.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @middy/s3\nnpm install --save-dev @aws-sdk/client-s3\n"))),(0,r.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @middy/s3\nyarn add --dev @aws-sdk/client-s3\n"))),(0,r.kt)(i.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add @middy/s3\npnpm add --save-dev @aws-sdk/client-s3\n")))),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AwsClient")," (object) (default ",(0,r.kt)("inlineCode",{parentName:"li"},"S3Client"),"): S3Client class constructor (i.e. that has been instrumented with AWS XRay). Must be from ",(0,r.kt)("inlineCode",{parentName:"li"},"@aws-sdk/client-appconfig"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"awsClientOptions")," (object) (default ",(0,r.kt)("inlineCode",{parentName:"li"},"undefined"),"): Options to pass to S3Client class constructor."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"awsClientAssumeRole")," (string) (default ",(0,r.kt)("inlineCode",{parentName:"li"},"undefined"),"): Internal key where secrets are stored. See ",(0,r.kt)("a",{parentName:"li",href:"/docs/middlewares/sts"},"@middy/sts")," on to set this."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"awsClientCapture")," (function) (default ",(0,r.kt)("inlineCode",{parentName:"li"},"undefined"),"): Enable XRay by passing ",(0,r.kt)("inlineCode",{parentName:"li"},"captureAWSv3Client")," from ",(0,r.kt)("inlineCode",{parentName:"li"},"aws-xray-sdk")," in."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fetchData")," (object) (required): Mapping of internal key name to API request parameters."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"disablePrefetch")," (boolean) (default ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"): On cold start requests will trigger early if they can. Setting ",(0,r.kt)("inlineCode",{parentName:"li"},"awsClientAssumeRole")," disables prefetch."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cacheKey")," (string) (default ",(0,r.kt)("inlineCode",{parentName:"li"},"s3"),"): Cache key for the fetched data responses. Must be unique across all middleware."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cacheExpiry")," (number) (default ",(0,r.kt)("inlineCode",{parentName:"li"},"-1"),"): How long fetch data responses should be cached for. ",(0,r.kt)("inlineCode",{parentName:"li"},"-1"),": cache forever, ",(0,r.kt)("inlineCode",{parentName:"li"},"0"),": never cache, ",(0,r.kt)("inlineCode",{parentName:"li"},"n"),": cache for n ms."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setToContext")," (boolean) (default ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"): Store credentials to ",(0,r.kt)("inlineCode",{parentName:"li"},"request.context"),".")),(0,r.kt)("p",null,"NOTES:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Lambda is required to have IAM permission for ",(0,r.kt)("inlineCode",{parentName:"li"},"s3:GetObject")),(0,r.kt)("li",{parentName:"ul"},"If the file is stored without ",(0,r.kt)("inlineCode",{parentName:"li"},"ContentType"),", you can set it on the response using ",(0,r.kt)("inlineCode",{parentName:"li"},"ResponseContentType")," as part of the input")),(0,r.kt)("h2",{id:"sample-usage"},"Sample usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import middy from '@middy/core'\nimport appConfig from '@middy/s3'\n\nconst handler = middy((event, context) => {\n  const response = {\n    statusCode: 200,\n    headers: {},\n    body: JSON.stringify({ message: 'hello world' })\n  }\n\n  return response\n})\n\nhandler.use(\n  s3({\n    fetchData: {\n      config: {\n        Bucket: '...',\n        Key: '...'\n      }\n    }\n  })\n)\n")),(0,r.kt)("h2",{id:"bundling"},"Bundling"),(0,r.kt)("p",null,"To exclude ",(0,r.kt)("inlineCode",{parentName:"p"},"@aws-sdk")," add ",(0,r.kt)("inlineCode",{parentName:"p"},"@aws-sdk/client-s3")," to the exclude list."))}f.isMDXComponent=!0}}]);