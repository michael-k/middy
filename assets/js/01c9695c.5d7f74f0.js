"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[3295],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,b=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return r?n.createElement(b,l(l({ref:t},d),{},{components:r})):n.createElement(b,l({ref:t},d))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(7294),a=r(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,l),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(7462),a=r(7294),o=r(6010),l=r(2466),i=r(6550),s=r(1980),u=r(7392),d=r(12);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function c(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:r}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=c(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,u]=b({queryString:r,groupId:n}),[p,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,d.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),f=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),h(e)}),[u,h,o]),tabValues:o}}var f=r(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:r,selectedValue:i,selectValue:s,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),c=e=>{const t=e.currentTarget,r=d.indexOf(t),n=u[r].value;n!==i&&(p(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;t=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;t=d[r]??d[d.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:c},l,{className:(0,o.Z)("tabs__item",y.tabItem,l?.className,{"tabs__item--active":i===t})}),r??t)})))}function g(e){let{lazy:t,children:r,selectedValue:n}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=h(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",y.tabList)},a.createElement(v,(0,n.Z)({},e,t)),a.createElement(g,(0,n.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return a.createElement(k,(0,n.Z)({key:String(t)},e))}},4284:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>b,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=r(7462),a=(r(7294),r(3905)),o=r(4866),l=r(5162);const i={title:"http-json-body-parser"},s=void 0,u={unversionedId:"middlewares/http-json-body-parser",id:"middlewares/http-json-body-parser",title:"http-json-body-parser",description:"This middleware automatically parses HTTP requests with a JSON body and converts the body into an",source:"@site/docs/middlewares/http-json-body-parser.md",sourceDirName:"middlewares",slug:"/middlewares/http-json-body-parser",permalink:"/docs/middlewares/http-json-body-parser",draft:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/middlewares/http-json-body-parser.md",tags:[],version:"current",lastUpdatedAt:1692985531,formattedLastUpdatedAt:"Aug 25, 2023",frontMatter:{title:"http-json-body-parser"},sidebar:"tutorialSidebar",previous:{title:"http-header-normalizer",permalink:"/docs/middlewares/http-header-normalizer"},next:{title:"http-multipart-body-parser",permalink:"/docs/middlewares/http-multipart-body-parser"}},d={},p=[{value:"Install",id:"install",level:2},{value:"Options",id:"options",level:2},{value:"Sample usage",id:"sample-usage",level:2}],c={toc:p},m="wrapper";function b(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This middleware automatically parses HTTP requests with a JSON body and converts the body into an\nobject. Also handles gracefully broken JSON as ",(0,a.kt)("em",{parentName:"p"},"Unsupported Media Type")," (415 errors)\nif used in combination with ",(0,a.kt)("inlineCode",{parentName:"p"},"httpErrorHandler"),"."),(0,a.kt)("p",null,"It can also be used in combination with validator as a prior step to normalize the\nevent body input as an object so that the content can be validated."),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)("p",null,"To install this middleware you can use NPM:"),(0,a.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @middy/http-json-body-parser\n"))),(0,a.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @middy/http-json-body-parser\n"))),(0,a.kt)(l.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add @middy/http-json-body-parser\n")))),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"reviver")," (",(0,a.kt)("inlineCode",{parentName:"li"},"function"),") (optional): A ",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#Parameters"},"reviver")," parameter may be passed which will be used ",(0,a.kt)("inlineCode",{parentName:"li"},"JSON.parse"),"ing the body."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"disableContentTypeError")," (",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),") (optional): Skip throwing 415 when ",(0,a.kt)("inlineCode",{parentName:"li"},"Content-Type")," is invalid. Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),", will default to ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," in next major version.")),(0,a.kt)("h2",{id:"sample-usage"},"Sample usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import middy from '@middy/core'\nimport httpHeaderNormalizer from '@middy/http-header-normalizer'\nimport httpJsonBodyParser from '@middy/http-json-body-parser'\n\nconst handler = middy((event, context) => {\n  return {}\n})\n\nhandler.use(httpHeaderNormalizer()).use(httpJsonBodyParser())\n\n// invokes the handler\nconst event = {\n  headers: {\n    'Content-Type': 'application/json'\n    // It is important that the request has the proper content type.\n  },\n  body: JSON.stringify({ foo: 'bar' })\n}\nhandler(event, {}, (_, body) => {\n  t.is(body, { foo: 'bar' })\n})\n")))}b.isMDXComponent=!0}}]);