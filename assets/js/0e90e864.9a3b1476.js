"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[1469],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),p=r,f=d["".concat(o,".").concat(p)]||d[p]||m[p]||l;return a?n.createElement(f,i(i({ref:t},u),{},{components:a})):n.createElement(f,i({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(6010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7462),r=a(7294),l=a(6010),i=a(2466),s=a(6550),o=a(1980),c=a(7392),u=a(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=m(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[o,c]=f({queryString:a,groupId:n}),[d,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),b=(()=>{const e=o??d;return p({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),h(e)}),[c,h,l]),tabValues:l}}var b=a(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:a,selectedValue:s,selectValue:o,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==s&&(d(t),o(n))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:p,onClick:m},i,{className:(0,l.Z)("tabs__item",k.tabItem,i?.className,{"tabs__item--active":s===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=h(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",k.tabList)},r.createElement(g,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}},5891:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=a(7462),r=(a(7294),a(3905)),l=a(4866),i=a(5162);const s={title:"secrets-manager"},o=void 0,c={unversionedId:"middlewares/secrets-manager",id:"middlewares/secrets-manager",title:"secrets-manager",description:"This middleware fetches secrets from AWS Secrets Manager.",source:"@site/docs/middlewares/secrets-manager.md",sourceDirName:"middlewares",slug:"/middlewares/secrets-manager",permalink:"/docs/middlewares/secrets-manager",draft:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/middlewares/secrets-manager.md",tags:[],version:"current",lastUpdatedAt:1692985531,formattedLastUpdatedAt:"Aug 25, 2023",frontMatter:{title:"secrets-manager"},sidebar:"tutorialSidebar",previous:{title:"s3",permalink:"/docs/middlewares/s3"},next:{title:"service-discovery",permalink:"/docs/middlewares/service-discovery"}},u={},d=[{value:"Install",id:"install",level:2},{value:"Options",id:"options",level:2},{value:"Sample usage",id:"sample-usage",level:2},{value:"Bundling",id:"bundling",level:2}],m={toc:d},p="wrapper";function f(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This middleware fetches secrets from ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html"},"AWS Secrets Manager"),"."),(0,r.kt)("p",null,"Secrets to fetch can be defined by by name. See AWS docs ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/secretsmanager/latest/userguide/tutorials_basic.html"},"here"),"."),(0,r.kt)("p",null,"Secrets are assigned to the function handler's ",(0,r.kt)("inlineCode",{parentName:"p"},"context")," object."),(0,r.kt)("p",null,"The Middleware makes a single ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html"},"API request")," for each secret as Secrets Manager does not support batch get."),(0,r.kt)("p",null,"For each secret, you also provide the name under which its value should be added to ",(0,r.kt)("inlineCode",{parentName:"p"},"context"),"."),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)("p",null,"To install this middleware you can use NPM:"),(0,r.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @middy/secrets-manager\nnpm install --save-dev @aws-sdk/client-secrets-manager\n"))),(0,r.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @middy/secrets-manager\nyarn add --dev @aws-sdk/client-secrets-manager\n"))),(0,r.kt)(i.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add @middy/secrets-manager\npnpm add --save-dev @aws-sdk/client-secrets-manager\n")))),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AwsClient")," (object) (default ",(0,r.kt)("inlineCode",{parentName:"li"},"SecretsManagerClient"),"): SecretsManagerClient class constructor (i.e. that has been instrumented with AWS XRay). Must be from ",(0,r.kt)("inlineCode",{parentName:"li"},"@aws-sdk/client-secrets-manager"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"awsClientOptions")," (object) (optional): Options to pass to SecretsManagerClient class constructor."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"awsClientAssumeRole")," (string) (optional): Internal key where secrets are stored. See ",(0,r.kt)("a",{parentName:"li",href:"/docs/middlewares/sts"},"@middy/sts")," on to set this."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"awsClientCapture")," (function) (optional): Enable XRay by passing ",(0,r.kt)("inlineCode",{parentName:"li"},"captureAWSv3Client")," from ",(0,r.kt)("inlineCode",{parentName:"li"},"aws-xray-sdk")," in."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fetchData")," (object) (required): Mapping of internal key name to API request parameter ",(0,r.kt)("inlineCode",{parentName:"li"},"SecretId"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fetchRotationDate")," (boolean|object) (default ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"): Boolean to apply to all or mapping of internal key name to boolean. This indicates what secrets should fetch and cached based on ",(0,r.kt)("inlineCode",{parentName:"li"},"NextRotationDate"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"LastRotationDate"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"LastChangedDate"),". ",(0,r.kt)("inlineCode",{parentName:"li"},"cacheExpiry")," of ",(0,r.kt)("inlineCode",{parentName:"li"},"-1")," will use ",(0,r.kt)("inlineCode",{parentName:"li"},"NextRotationDate"),", while any other value will be added to the ",(0,r.kt)("inlineCode",{parentName:"li"},"LastRotationDate")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"LastChangedDate"),", whichever is more recent. If secrets have different rotation schedules, use multiple instances of this middleware."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"disablePrefetch")," (boolean) (default ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"): On cold start requests will trigger early if they can. Setting ",(0,r.kt)("inlineCode",{parentName:"li"},"awsClientAssumeRole")," disables prefetch."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cacheKey")," (string) (default ",(0,r.kt)("inlineCode",{parentName:"li"},"secrets-manager"),"): Cache key for the fetched data responses. Must be unique across all middleware."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cacheExpiry")," (number) (default ",(0,r.kt)("inlineCode",{parentName:"li"},"-1"),"): How long fetch data responses should be cached for. ",(0,r.kt)("inlineCode",{parentName:"li"},"-1"),": cache forever, ",(0,r.kt)("inlineCode",{parentName:"li"},"0"),": never cache, ",(0,r.kt)("inlineCode",{parentName:"li"},"n"),": cache for n ms."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setToContext")," (boolean) (default ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"): Store secrets to ",(0,r.kt)("inlineCode",{parentName:"li"},"request.context"),".")),(0,r.kt)("p",null,"NOTES:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Lambda is required to have IAM permission for ",(0,r.kt)("inlineCode",{parentName:"li"},"secretsmanager:GetSecretValue"),". If using ",(0,r.kt)("inlineCode",{parentName:"li"},"fetchRotationDate")," add ",(0,r.kt)("inlineCode",{parentName:"li"},"secretsmanager:DescribeSecret")," in as well.")),(0,r.kt)("h2",{id:"sample-usage"},"Sample usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import middy from '@middy/core'\nimport secretsManager from '@middy/secrets-manager'\n\nconst handler = middy((event, context) => {\n  return {}\n})\n\nhandler.use(\n  secretsManager({\n    fetchData: {\n      apiToken: 'dev/api_token'\n    },\n    awsClientOptions: {\n      region: 'us-east-1'\n    },\n    setToContext: true\n  })\n)\n\n// Before running the function handler, the middleware will fetch from Secrets Manager\nhandler(event, context, (_, response) => {\n  // assuming the dev/api_token has two keys, 'Username' and 'Password'\n  t.is(context.apiToken.Username, 'username')\n  t.is(context.apiToken.Password, 'password')\n})\n")),(0,r.kt)("h2",{id:"bundling"},"Bundling"),(0,r.kt)("p",null,"To exclude ",(0,r.kt)("inlineCode",{parentName:"p"},"@aws-sdk")," add ",(0,r.kt)("inlineCode",{parentName:"p"},"@aws-sdk/client-secrets-manager")," to the exclude list."))}f.isMDXComponent=!0}}]);