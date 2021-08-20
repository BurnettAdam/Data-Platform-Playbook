(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{103:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),i=(r(0),r(121)),c={title:"Introduction"},o={unversionedId:"architecture-decisions/index",id:"architecture-decisions/index",isDocsHomePage:!1,title:"Introduction",description:"Architecture Decision Records",source:"@site/docs/architecture-decisions/index.md",slug:"/architecture-decisions/index",permalink:"/Data-Platform-Playbook/architecture-decisions/index",editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/architecture-decisions/index.md",version:"current",sidebar:"docs",previous:{title:"VPC Peering Connection between Data Platform and Production APIs AWS accounts",permalink:"/Data-Platform-Playbook/docs/vpc-peering-connection-dataplatform-and-production-apis-account"},next:{title:"Record architecture decisions",permalink:"/Data-Platform-Playbook/architecture-decisions/0001-record-architecture-decisions"}},s=[{value:"Records:",id:"records",children:[]}],l={toc:s};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"architecture-decision-records"},"Architecture Decision Records"),Object(i.b)("p",null,"An Architectural Decision (AD) is a software design choice that addresses a functional or non-functional requirement\nthat is architecturally significant. An Architecturally Significant Requirement (ASR) is a requirement that has a\nmeasurable effect on a software system\u2019s architecture and quality. An Architectural Decision Record (ADR) captures a\nsingle AD, such as often done when writing personal notes or meeting minutes. The collection of ADRs created and\nmaintained in a project constitute its decision log."),Object(i.b)("h2",{id:"records"},"Records:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/Data-Platform-Playbook/architecture-decisions/0001-record-architecture-decisions"},"1: Record Architecture Decisions")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/Data-Platform-Playbook/architecture-decisions/0002-ingest-google-sheets-data"},"2: Ingest Google Sheets Data")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/Data-Platform-Playbook/architecture-decisions/0003-role-based-access-control"},"3: Role Based Access Control")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/Data-Platform-Playbook/architecture-decisions/0004-partition-strategy"},"4: Partition Strategy")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/Data-Platform-Playbook/architecture-decisions/0005-recovered-data"},"5: Recovered Data")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/Data-Platform-Playbook/architecture-decisions/0006-ingest-sql-flat-files"},"6: Ingest SQL flat files")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/Data-Platform-Playbook/architecture-decisions/0007-sftp-to-s3-lambda"},"7: Copy Liberator Data from SFTP to S3")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/Data-Platform-Playbook/architecture-decisions/0008-production-data-in-staging"},"8: Production Data in Staging"))))}u.isMDXComponent=!0},121:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(r),b=n,f=d["".concat(c,".").concat(b)]||d[b]||p[b]||i;return r?a.a.createElement(f,o(o({ref:t},l),{},{components:r})):a.a.createElement(f,o({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<i;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);