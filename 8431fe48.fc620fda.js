(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{123:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),f=r,b=u["".concat(o,".").concat(f)]||u[f]||d[f]||i;return n?a.a.createElement(b,s(s({ref:t},p),{},{components:n})):a.a.createElement(b,s({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),i=(n(0),n(123)),o={title:"Using pytest for verifying PySpark transformations",description:"",tags:"adr",number:"10","date-issued":"2021-08-25",status:"Accepted"},s={unversionedId:"architecture-decisions/0010-using-pytest-for-verifying-pyspark-transformations",id:"architecture-decisions/0010-using-pytest-for-verifying-pyspark-transformations",isDocsHomePage:!1,title:"Using pytest for verifying PySpark transformations",description:"Context",source:"@site/docs/architecture-decisions/0010-using-pytest-for-verifying-pyspark-transformations.md",slug:"/architecture-decisions/0010-using-pytest-for-verifying-pyspark-transformations",permalink:"/Data-Platform-Playbook/architecture-decisions/0010-using-pytest-for-verifying-pyspark-transformations",editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/architecture-decisions/0010-using-pytest-for-verifying-pyspark-transformations.md",version:"current",sidebar:"docs",previous:{title:"Ingesting data from APIs",permalink:"/Data-Platform-Playbook/architecture-decisions/0009-ingesting-data-from-apis"},next:{title:"Introduction",permalink:"/Data-Platform-Playbook/architecture-decisions/index"}},c=[{value:"Context",id:"context",children:[]},{value:"Decision",id:"decision",children:[]},{value:"Consequences",id:"consequences",children:[]}],p={toc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"context"},"Context"),Object(i.b)("p",null,"The Data Platform team has been writing Apache Spark jobs using PySpark to transform data within the platform."),Object(i.b)("p",null,"Examples include:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Address matching"),Object(i.b)("li",{parentName:"ul"},"Address cleaning"),Object(i.b)("li",{parentName:"ul"},"Repairs sheets data cleaning")),Object(i.b)("p",null,"These jobs lack automated tests, which has meant that debugging these scripts has involved slow feedback loops, running against actual data within the platform."),Object(i.b)("p",null,"By introducing testing practices, frameworks and tools we hope to:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Improve the speed at which PySpark scripts can be developed"),Object(i.b)("li",{parentName:"ul"},"Provide documentation for each script with example data they expect, and what results they output"),Object(i.b)("li",{parentName:"ul"},"Increase the proportion of defects found before they reach staging environment")),Object(i.b)("h2",{id:"decision"},"Decision"),Object(i.b)("p",null,"We will:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Use a Python testing framework, ",Object(i.b)("a",{parentName:"li",href:"https://docs.pytest.org"},"pytest")),Object(i.b)("li",{parentName:"ul"},"Use the same ",Object(i.b)("a",{parentName:"li",href:"https://hub.docker.com/r/amazon/aws-glue-libs"},"Docker container")," we use for the Jypiter Notebook for running the tests, as it replicates the AWS Glue Spark environment locally."),Object(i.b)("li",{parentName:"ul"},"Integrate that framework into Apache Spark, and provide example test code"),Object(i.b)("li",{parentName:"ul"},"Create documentation and guidance around how to productively test PySpark scripts"),Object(i.b)("li",{parentName:"ul"},"Run the suite of Python tests as part of the deployment pipeline, and prevent failing tests from being deployed to staging")),Object(i.b)("h2",{id:"consequences"},"Consequences"),Object(i.b)("p",null,"Building and maintaining PySpark scripts should become easier and faster as a result."),Object(i.b)("p",null,"Writing PySpark scripts will require some additional learning, if you haven't used unit testing practices before."))}l.isMDXComponent=!0}}]);