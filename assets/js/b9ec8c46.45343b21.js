"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[8790],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=o,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9340:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),c=["components"],s={id:"role-based-access-control",title:"Role-Based Access Control",description:"",tags:["adr"],number:"3","date-issued":"2021-03-23",status:"Accepted"},i=void 0,l={unversionedId:"architecture-decisions/role-based-access-control",id:"architecture-decisions/role-based-access-control",isDocsHomePage:!1,title:"Role-Based Access Control",description:"",source:"@site/docs/architecture-decisions/003-role-based-access-control.md",sourceDirName:"architecture-decisions",slug:"/architecture-decisions/role-based-access-control",permalink:"/Data-Platform-Playbook/architecture-decisions/role-based-access-control",editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/architecture-decisions/003-role-based-access-control.md",tags:[{label:"adr",permalink:"/Data-Platform-Playbook/tags/adr"}],version:"current",sidebarPosition:3,frontMatter:{id:"role-based-access-control",title:"Role-Based Access Control",description:"",tags:["adr"],number:"3","date-issued":"2021-03-23",status:"Accepted"},sidebar:"docs",previous:{title:"Ingest Google Sheets Data",permalink:"/Data-Platform-Playbook/architecture-decisions/ingest-google-sheets-data"},next:{title:"Partition Strategy",permalink:"/Data-Platform-Playbook/architecture-decisions/partition-strategy"}},u=[{value:"Context",id:"context",children:[]},{value:"Decision",id:"decision",children:[]},{value:"Consequences",id:"consequences",children:[]},{value:"Considerations",id:"considerations",children:[]}],d={toc:u};function p(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"context"},"Context"),(0,a.kt)("p",null,"We will be storing sensitive council data within S3 and therefore need to restrict access to this data based on the\ndepartment the user belongs to."),(0,a.kt)("h2",{id:"decision"},"Decision"),(0,a.kt)("p",null,"In order to limit access, we propose to store all S3 buckets in a single AWS account. Users accessing this account\ndirectly will have little or no access to the owned S3 buckets, instead through the infrastructure deployment process\n(terraform) we will share a partition of the S3 buckets to relevant department accounts."),(0,a.kt)("p",null,"E.g. s3://s3-bucket/social-care/* -> Social Care Account"),(0,a.kt)("h2",{id:"consequences"},"Consequences"),(0,a.kt)("p",null,"This will allow us to securely segregate department data while relying on existing access control permission sets that\nalready restrict access to departmental accounts."),(0,a.kt)("p",null,"We will need to mechanism to share ETL processes between departments, since each department will be operating it's own\nETL processes independently."),(0,a.kt)("p",null,"Due to the data being stored in a central bucket we can opt to extend a departments read-only scope to other department\npartitions to allow wider data analysis."),(0,a.kt)("p",null,"With the data stored in a single AWS account, if a malicious user were to gain access to the account with a users that\ndid have access to the entire bucket (such as the AWS Account Root) they would have access to all Hackney data"),(0,a.kt)("h2",{id:"considerations"},"Considerations"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Security around AWS terraform deployments"),(0,a.kt)("li",{parentName:"ul"},"Review process for Infrastructure as Code deployments")))}p.isMDXComponent=!0}}]);