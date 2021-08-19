(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{110:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),i=(n(0),n(120)),a={title:"Ingesting Google Sheet Data",description:"",tags:null,layout:"layout"},c={unversionedId:"spikes/0001-ingest-google-sheet-data",id:"spikes/0001-ingest-google-sheet-data",isDocsHomePage:!1,title:"Ingesting Google Sheet Data",description:"Spike: {{ title }}",source:"@site/docs/spikes/0001-ingest-google-sheet-data.md",slug:"/spikes/0001-ingest-google-sheet-data",permalink:"/Data-Platform-Playbook/spikes/0001-ingest-google-sheet-data",editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/spikes/0001-ingest-google-sheet-data.md",version:"current",sidebar:"docs",previous:{title:"Introduction",permalink:"/Data-Platform-Playbook/architecture-decisions/index"},next:{title:"Use of Lake Formation to enforce Role-Based Access Control (RBAC) to tools such as Athena",permalink:"/Data-Platform-Playbook/spikes/0002-use-of-lake-formation-to-enforce-rbac"}},l=[{value:"using AWS Glue",id:"using-aws-glue",children:[]},{value:"Objective",id:"objective",children:[]},{value:"Considerations",id:"considerations",children:[]},{value:"Findings",id:"findings",children:[{value:"SUBJECT:",id:"subject",children:[]}]},{value:"Helpful Resources/Documentation",id:"helpful-resourcesdocumentation",children:[]}],s={toc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"spike--title-"},"Spike: {{ title }}"),Object(i.b)("h3",{id:"using-aws-glue"},"using AWS Glue"),Object(i.b)("h2",{id:"objective"},"Objective"),Object(i.b)("p",null,"Determine a method of ingesting Google Sheet data into the data platform preferable using a tool which is either already\nintegrated into the data platform or can easily be integrated. This spike will focus on using AWS Glue as it will be the\ntool used to perform ETL processes on our data."),Object(i.b)("h2",{id:"considerations"},"Considerations"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Easily replicated for the large number of Google Sheet documents"),Object(i.b)("li",{parentName:"ul"},"Scheduled to allow regular repeat imports"),Object(i.b)("li",{parentName:"ul"})),Object(i.b)("h2",{id:"findings"},"Findings"),Object(i.b)("h3",{id:"subject"},"SUBJECT:"),Object(i.b)("h4",{id:"limitation"},"Limitation"),Object(i.b)("h4",{id:"suggestion"},"Suggestion"),Object(i.b)("h2",{id:"helpful-resourcesdocumentation"},"Helpful Resources/Documentation"))}u.isMDXComponent=!0},120:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,f=d["".concat(a,".").concat(b)]||d[b]||p[b]||i;return n?o.a.createElement(f,c(c({ref:t},s),{},{components:n})):o.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);