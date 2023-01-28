"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[5270],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||l;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294),a=n(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(7462),a=n(7294),l=n(6010),o=n(2389),i=n(7392),s=n(7094),d=n(2466);const p="tabList__CuJ",u="tabItem_LNqP";function c(e){const{lazy:t,block:n,defaultValue:o,values:c,groupId:m,className:h}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=c??f.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),k=(0,i.l)(g,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===o?o:o??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==b&&!g.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:v}=(0,s.U)(),[N,C]=(0,a.useState)(b),w=[],{blockElementScrollPositionUntilNextRender:O}=(0,d.o5)();if(null!=m){const e=y[m];null!=e&&e!==N&&g.some((t=>t.value===e))&&C(e)}const A=e=>{const t=e.currentTarget,n=w.indexOf(t),r=g[n].value;r!==N&&(O(t),C(r),null!=m&&v(m,String(r)))},T=e=>{let t=null;switch(e.key){case"Enter":A(e);break;case"ArrowRight":{const n=w.indexOf(e.currentTarget)+1;t=w[n]??w[0];break}case"ArrowLeft":{const n=w.indexOf(e.currentTarget)-1;t=w[n]??w[w.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},h)},g.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>w.push(e),onKeyDown:T,onClick:A},o,{className:(0,l.Z)("tabs__item",u,o?.className,{"tabs__item--active":N===t})}),n??t)}))),t?(0,a.cloneElement)(f.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,o.Z)();return a.createElement(c,(0,r.Z)({key:String(t)},e))}},8760:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var r=n(7462),a=(n(7294),n(3905)),l=n(5488),o=n(5162);const i={title:"http-cors"},s=void 0,d={unversionedId:"middlewares/http-cors",id:"middlewares/http-cors",title:"http-cors",description:"This middleware sets HTTP CORS headers (Access-Control-Allow-Origin, Access-Control-Allow-Headers, Access-Control-Allow-Credentials), necessary for making cross-origin requests, to the response object.",source:"@site/docs/middlewares/http-cors.md",sourceDirName:"middlewares",slug:"/middlewares/http-cors",permalink:"/docs/middlewares/http-cors",draft:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/middlewares/http-cors.md",tags:[],version:"current",lastUpdatedAt:1674930635,formattedLastUpdatedAt:"Jan 28, 2023",frontMatter:{title:"http-cors"},sidebar:"tutorialSidebar",previous:{title:"http-content-negotiation",permalink:"/docs/middlewares/http-content-negotiation"},next:{title:"http-error-handler",permalink:"/docs/middlewares/http-error-handler"}},p={},u=[{value:"Install",id:"install",level:2},{value:"Options",id:"options",level:2},{value:"Sample usage",id:"sample-usage",level:2}],c={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This middleware sets HTTP CORS headers (",(0,a.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Headers"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Credentials"),"), necessary for making cross-origin requests, to the response object."),(0,a.kt)("p",null,"Sets headers in ",(0,a.kt)("inlineCode",{parentName:"p"},"after")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"onError")," phases."),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)("p",null,"To install this middleware you can use NPM:"),(0,a.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @middy/http-cors\n"))),(0,a.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @middy/http-cors\n")))),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"credentials")," (bool) (optional): if true, sets ",(0,a.kt)("inlineCode",{parentName:"li"},"Access-Control-Allow-Credentials")," (default ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"disableBeforePreflightResponse")," (bool) (optional): if false, replies automatically to cors preflight requests. Set to true if handling the response in a custom way (default ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"headers")," (string) (optional): value to put in ",(0,a.kt)("inlineCode",{parentName:"li"},"Access-Control-Allow-Headers")," (default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"methods")," (string) (optional): value to put in ",(0,a.kt)("inlineCode",{parentName:"li"},"Access-Control-Allow-Methods")," (default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"getOrigin")," (function(incomingOrigin:string, options)) (optional): take full control of the generating the returned origin. Defaults to using the origin or origins option."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"origin"),' (string) (optional): origin to put in the header (default: "',(0,a.kt)("inlineCode",{parentName:"li"},"*"),'")'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"origins")," (array) (optional): An array of allowed origins. The incoming origin is matched against the list and is returned if present."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"exposeHeaders")," (string) (optional): value to put in ",(0,a.kt)("inlineCode",{parentName:"li"},"Access-Control-Expose-Headers")," (default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"maxAge")," (string) (optional): value to put in Access-Control-Max-Age header (default: ",(0,a.kt)("inlineCode",{parentName:"li"},"null"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"requestHeaders")," (string) (optional): value to put in ",(0,a.kt)("inlineCode",{parentName:"li"},"Access-Control-Request-Headers")," (default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"requestMethods")," (string) (optional): value to put in ",(0,a.kt)("inlineCode",{parentName:"li"},"Access-Control-Request-Methods")," (default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cacheControl")," (string) (optional): value to put in Cache-Control header on pre-flight (OPTIONS) requests (default: ",(0,a.kt)("inlineCode",{parentName:"li"},"null"),")")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import middy from '@middy/core'\nimport httpErrorHandler from '@middy/http-error-handler'\nimport cors from '@middy/http-cors'\n\nconst handler = middy((event, context) => {\n  throw new createError.UnprocessableEntity()\n})\nhandler.use(httpErrorHandler()).use(cors())\n\n// when Lambda runs the handler...\nhandler({}, {}, (_, response) => {\n  t.is(response.headers['Access-Control-Allow-Origin'], '*')\n  t.deepEqual(response, {\n    statusCode: 422,\n    body: 'Unprocessable Entity'\n  })\n})\n")),(0,a.kt)("h2",{id:"sample-usage"},"Sample usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import middy from '@middy/core'\nimport cors from '@middy/http-cors'\n\nconst handler = middy((event, context) => {\n  return {}\n})\n\nhandler.use(cors())\n\n// when Lambda runs the handler...\nhandler({}, {}, (_, response) => {\n  t.is(response.headers['Access-Control-Allow-Origin'], '*')\n})\n")))}m.isMDXComponent=!0}}]);