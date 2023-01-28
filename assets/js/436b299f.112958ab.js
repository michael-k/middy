"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[5077],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),d=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(r),m=a,h=p["".concat(i,".").concat(m)]||p[m]||c[m]||l;return r?n.createElement(h,o(o({ref:t},u),{},{components:r})):n.createElement(h,o({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var d=2;d<l;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294),a=r(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(7462),a=r(7294),l=r(6010),o=r(2389),s=r(7392),i=r(7094),d=r(2466);const u="tabList__CuJ",p="tabItem_LNqP";function c(e){const{lazy:t,block:r,defaultValue:o,values:c,groupId:m,className:h}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=c??b.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),y=(0,s.l)(f,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===o?o:o??b.find((e=>e.props.default))?.props.value??b[0].props.value;if(null!==v&&!f.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:k}=(0,i.U)(),[w,N]=(0,a.useState)(v),T=[],{blockElementScrollPositionUntilNextRender:O}=(0,d.o5)();if(null!=m){const e=g[m];null!=e&&e!==w&&f.some((t=>t.value===e))&&N(e)}const E=e=>{const t=e.currentTarget,r=T.indexOf(t),n=f[r].value;n!==w&&(O(t),N(n),null!=m&&k(m,String(n)))},C=e=>{let t=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const r=T.indexOf(e.currentTarget)+1;t=T[r]??T[0];break}case"ArrowLeft":{const r=T.indexOf(e.currentTarget)-1;t=T[r]??T[T.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},h)},f.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>T.push(e),onKeyDown:C,onClick:E},o,{className:(0,l.Z)("tabs__item",p,o?.className,{"tabs__item--active":w===t})}),r??t)}))),t?(0,a.cloneElement)(b.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,o.Z)();return a.createElement(c,(0,n.Z)({key:String(t)},e))}},3687:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var n=r(7462),a=(r(7294),r(3905)),l=r(5488),o=r(5162);const s={title:"http-error-handler"},i=void 0,d={unversionedId:"middlewares/http-error-handler",id:"middlewares/http-error-handler",title:"http-error-handler",description:"Automatically handles uncaught errors that contain the properties statusCode (number) and message (string) and creates a proper HTTP response",source:"@site/docs/middlewares/http-error-handler.md",sourceDirName:"middlewares",slug:"/middlewares/http-error-handler",permalink:"/docs/middlewares/http-error-handler",draft:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/middlewares/http-error-handler.md",tags:[],version:"current",lastUpdatedAt:1674930635,formattedLastUpdatedAt:"Jan 28, 2023",frontMatter:{title:"http-error-handler"},sidebar:"tutorialSidebar",previous:{title:"http-cors",permalink:"/docs/middlewares/http-cors"},next:{title:"http-event-normalizer",permalink:"/docs/middlewares/http-event-normalizer"}},u={},p=[{value:"Install",id:"install",level:2},{value:"Options",id:"options",level:2},{value:"Sample usage",id:"sample-usage",level:2}],c={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Automatically handles uncaught errors that contain the properties ",(0,a.kt)("inlineCode",{parentName:"p"},"statusCode")," (number) and ",(0,a.kt)("inlineCode",{parentName:"p"},"message")," (string) and creates a proper HTTP response\nfor them (using the message and the status code provided by the error object). Additionally, support for the property ",(0,a.kt)("inlineCode",{parentName:"p"},"expose")," is included with a default value of ",(0,a.kt)("inlineCode",{parentName:"p"},"statusCode < 500"),".\nWe recommend generating these HTTP errors with the npm module ",(0,a.kt)("a",{parentName:"p",href:"https://npm.im/http-errors"},(0,a.kt)("inlineCode",{parentName:"a"},"http-errors")),". When manually catching and setting errors with ",(0,a.kt)("inlineCode",{parentName:"p"},"statusCode >= 500")," setting ",(0,a.kt)("inlineCode",{parentName:"p"},"{expose: true}"),"\nis needed for them to be handled."),(0,a.kt)("p",null,"This middleware should be set as the last error handler attached, first to execute."),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)("p",null,"To install this middleware you can use NPM:"),(0,a.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save @middy/http-error-handler\n"))),(0,a.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @middy/http-error-handler\n")))),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"logger")," (defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"console.error"),") - a logging function that is invoked with the current error as an argument. You can pass ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," if you don't want the logging to happen."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fallbackMessage")," (default to null) - When non-http errors occur you can catch them by setting a fallback message to be used. These will be returned with a 500 status code.")),(0,a.kt)("h2",{id:"sample-usage"},"Sample usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import middy from '@middy/core'\nimport httpErrorHandler from '@middy/http-error-handler'\n\nconst handler = middy((event, context) => {\n  throw new createError.UnprocessableEntity()\n})\n\nhandler\n  .use(httpErrorHandler())\n\n// when Lambda runs the handler...\nhandler({}, {}, (_, response) => {\n  t.deepEqual(response,{\n    statusCode: 422,\n    body: 'Unprocessable Entity'\n  })\n})\n")))}m.isMDXComponent=!0}}]);