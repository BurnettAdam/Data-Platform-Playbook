(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{106:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=a.a.createContext({}),u=function(e){var t=a.a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=u(r),f=n,b=l["".concat(c,".").concat(f)]||l[f]||p[f]||o;return r?a.a.createElement(b,i(i({ref:t},d),{},{components:r})):a.a.createElement(b,i({ref:t},d))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var d=2;d<o;d++)c[d]=r[d];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},91:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(106)),c={title:"Recovered Data",description:"",tags:"adr",number:"5","date-issued":"2021-05-20",status:"Accepted"},i={unversionedId:"architecture-decisions/0005-recovered-data",id:"architecture-decisions/0005-recovered-data",isDocsHomePage:!1,title:"Recovered Data",description:"Context",source:"@site/docs/architecture-decisions/0005-recovered-data.md",slug:"/architecture-decisions/0005-recovered-data",permalink:"/Data-Platform-Playbook/architecture-decisions/0005-recovered-data",editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/architecture-decisions/0005-recovered-data.md",version:"current"},s=[{value:"Context",id:"context",children:[]},{value:"Decision",id:"decision",children:[]},{value:"Consequences",id:"consequences",children:[]}],d={toc:s};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"context"},"Context"),Object(o.b)("p",null,"Hackney have recovered a number of datasets from prior to the Cybersecurity incident, these datasets will need to be\nmerged with datasets created after the incident."),Object(o.b)("h2",{id:"decision"},"Decision"),Object(o.b)("p",null,"Recovered datasets that are in a consumable format (json, csv, .sql) will be deposited into the landing zone directly,\nusing the same partition storage strategy as other data sets ",Object(o.b)("a",{parentName:"p",href:"/Data-Platform-Playbook/architecture-decisions/0004-partition-strategy"},"see ADR 0004")),Object(o.b)("h2",{id:"consequences"},"Consequences"),Object(o.b)("p",null,"Anyone needing to deposit recovered data onto the Data Platform would need access to the Data Platform."))}u.isMDXComponent=!0}}]);