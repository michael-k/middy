"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[1570],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=o,y=d["".concat(l,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8112:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={title:"Streamify Response",position:5},i=void 0,s={unversionedId:"intro/streamify-response",id:"intro/streamify-response",title:"Streamify Response",description:"Middy also supports streamed responses.",source:"@site/docs/intro/06-streamify-response.md",sourceDirName:"intro",slug:"/intro/streamify-response",permalink:"/docs/intro/streamify-response",draft:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/intro/06-streamify-response.md",tags:[],version:"current",lastUpdatedAt:1682630351,formattedLastUpdatedAt:"Apr 27, 2023",sidebarPosition:6,frontMatter:{title:"Streamify Response",position:5},sidebar:"tutorialSidebar",previous:{title:"Handling Errors",permalink:"/docs/intro/handling-errors"},next:{title:"Testing",permalink:"/docs/intro/testing"}},l={},p=[],c={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Middy also supports streamed responses."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You can progressively stream response payloads through Lambda function URLs, including as an Amazon CloudFront origin, along with using the AWS SDK or using Lambda\u2019s invoke API. You can not use Amazon API Gateway and Application Load Balancer to progressively stream response payloads, but you can use the functionality to return larger payloads. (",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/blogs/compute/introducing-aws-lambda-response-streaming/"},"https://aws.amazon.com/blogs/compute/introducing-aws-lambda-response-streaming/"),")")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Set ",(0,o.kt)("inlineCode",{parentName:"li"},"streamifyResponse: true")," into middy options"),(0,o.kt)("li",{parentName:"ol"},"Return using an HTTP event response with the body as a string or ReadableStream."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"API Gateway: If you're getting a ",(0,o.kt)("inlineCode",{parentName:"li"},"500")," status code. Be sure to set your integration to ",(0,o.kt)("inlineCode",{parentName:"li"},"HTTP_PROXY")," over ",(0,o.kt)("inlineCode",{parentName:"li"},"LAMBDA_PROXY")," and enable Function URL on the lambda."),(0,o.kt)("li",{parentName:"ul"},"Function URLs: If receiving no content and non-200 status code are being converted to ",(0,o.kt)("inlineCode",{parentName:"li"},"200"),". Be sure to set ",(0,o.kt)("inlineCode",{parentName:"li"},"Invoke Mode")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"RESPONSE_STREAM")," over ",(0,o.kt)("inlineCode",{parentName:"li"},"BUFFERED"),".")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import middy from '@middy/core'\nimport { createReadableStream } from '@datastream/core'\n\nexport const handler = middy({ streamifyResponse: true }).handler(\n  (event, context) => {\n    return {\n      statusCode: 200,\n      headers: {\n        'Content-Type': 'text/csv'\n      },\n      body: createReadableStream('...') // or string\n    }\n  }\n)\n")))}m.isMDXComponent=!0}}]);