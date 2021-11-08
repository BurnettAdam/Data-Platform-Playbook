"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[4128],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(a),h=o,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||r;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8495:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return c}});var n=a(7462),o=a(3366),r=(a(7294),a(3905)),i=["components"],s={id:"introduction",title:"About the Data Platform",slug:"/"},l=void 0,d={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"About the Data Platform",description:"What is a data platform?",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/",permalink:"/Data-Platform-Playbook/",editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/introduction.md",tags:[],version:"current",frontMatter:{id:"introduction",title:"About the Data Platform",slug:"/"},sidebar:"docs",previous:{title:"Release Notes",permalink:"/Data-Platform-Playbook/release-notes"},next:{title:"Zones",permalink:"/Data-Platform-Playbook/zones"}},p=[{value:"What is a data platform?",id:"what-is-a-data-platform",children:[]},{value:"Why a data platform?",id:"why-a-data-platform",children:[]},{value:"Processing data through the platform",id:"processing-data-through-the-platform",children:[{value:"1. <strong>Ingesting data</strong>",id:"1-ingesting-data",children:[]},{value:"2. <strong>Transforming data</strong>",id:"2-transforming-data",children:[]},{value:"3. <strong>Analysing data</strong>",id:"3-analysing-data",children:[]}]}],u={toc:p};function c(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-a-data-platform"},"What is a data platform?"),(0,r.kt)("p",null,"A data platform is an integrated technology solution that allows data located in different data sources to be governed, accessed, and delivered to users, applications, or other technologies. Our data platform is composed of a number of different elements:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"A Data Lake"),": this is a centralised repository to store data all in one place, and a set of loosely coupled processes to ingest data into the lake, transform it, and publish/connect that data out to other tools.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"A Data Catalogue"),": this is a place to store documentation and metadata about the datasets within the data lake. It helps users discover what data exists, understand what the data mean, and find out who owns the data."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"A Data Warehouse"),": this is a store of 'gold standard' data that is ready for analysis or publication. It is the result of processes to ingest, clean and transform data in the data lake."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"A Data Dictionary"),": this defines domain-driven design entities and their relationships to one another at a high level. (For example, how a 'person' relates to a 'household', 'property', etc.)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"This Playbook"),": this playbook provides step-by-step guidance about how to use the platform, along with technical documentation about how the platform has been set up and decisions we've made.")),(0,r.kt)("h2",{id:"why-a-data-platform"},"Why a data platform?"),(0,r.kt)("p",null,"Our vision for Hackney's data platform is to \u2018build back better\u2019 for the future and deliver a secure, scalable, reusable cloud-based data infrastructure that brings together the council\u2019s key data assets. This will enable us to democratise access to data (where appropriate), use technology to enable deeper insight, and derive greater value from our data to improve the lives of residents."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"We want to democratise data across the council:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"People can find the data they need"),(0,r.kt)("li",{parentName:"ul"},"People know how to get access to the data they need"),(0,r.kt)("li",{parentName:"ul"},"People understand the content and context of the data"),(0,r.kt)("li",{parentName:"ul"},"People can access and manipulate data through a range of tools that meet their needs"),(0,r.kt)("li",{parentName:"ul"},"People have access to the skills, tools and learning resources they need"),(0,r.kt)("li",{parentName:"ul"},"Data is available to both people and systems to gain operational value"),(0,r.kt)("li",{parentName:"ul"},"Ownership of the platform is shared across the council")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"We want our platform to be secure:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"People can only access what they should"),(0,r.kt)("li",{parentName:"ul"},"People can request access to data through a central, governed process"),(0,r.kt)("li",{parentName:"ul"},"Information Asset Owners can make informed decisions about who gets access through a simple process"),(0,r.kt)("li",{parentName:"ul"},"Data is minimised, anonymised and segmented so that access can be as wide as possible"),(0,r.kt)("li",{parentName:"ul"},"The platform meets statutory requirements and best practice for storing and moving data")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"We want reusable and scalable processes to promote stability and reduce duplication:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We use open technologies where possible to prevent vendor lock-in and widen the possibilities of reuse"),(0,r.kt)("li",{parentName:"ul"},"People can easily share and reuse each other's work"),(0,r.kt)("li",{parentName:"ul"},"Processes are automated wherever possible to enable people to focus on higher value tasks"),(0,r.kt)("li",{parentName:"ul"},"Processes are tested and dependable"),(0,r.kt)("li",{parentName:"ul"},"We apply consistent standards and conventions across datasets and processes")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"We want the platform to enable deeper insight:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"People have access to the tools they need to apply and productionse advanced analytics"),(0,r.kt)("li",{parentName:"ul"},"We can perform cross-cutting analysis to develop insight across services")),(0,r.kt)("h2",{id:"processing-data-through-the-platform"},"Processing data through the platform"),(0,r.kt)("p",null,"There are a series of processes data will go through as it moves through the platform. Depending on whether the data you need is already in the platform or not, and whether it's in the format you need."),(0,r.kt)("h3",{id:"1-ingesting-data"},"1. ",(0,r.kt)("strong",{parentName:"h3"},"Ingesting data")),(0,r.kt)("p",null,"This is the process of bringing data from its original source (e.g. Google Sheet, database, API, etc.) into the data lake. The exact process will depend on the type of data source which are documented in this playbook in the ","[ingesting data section]",". However for each process, the result will be that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The data is stored in ",(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html"},"Amazon S3 storage")),(0,r.kt)("li",{parentName:"ul"},"Data is stored in a service bucket (e.g. 'Parking' or 'Council Tax') which can only be accessed by approved members of that service group"),(0,r.kt)("li",{parentName:"ul"},"Data is converted from its original format into ",(0,r.kt)("a",{parentName:"li",href:"https://parquet.apache.org/"},"Apache Parquet format")," which an efficient way of storing and querying data"),(0,r.kt)("li",{parentName:"ul"},"Data will be partitioned (stored in sections to help speed up querying) by the day it was ingested"),(0,r.kt)("li",{parentName:"ul"},"Optionally, the ingestion will run on a schedule so that the data will be loaded into the lake each day, week, etc.")),(0,r.kt)("h3",{id:"2-transforming-data"},"2. ",(0,r.kt)("strong",{parentName:"h3"},"Transforming data")),(0,r.kt)("p",null,"Most often source data in its raw form is not ready for analysis and needs some kind of transformation to make it usable, for example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Cleaning data")," for example removing inconsistent formats, populating missing values, removing duplicates, etc."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Denormalising data")," by joining together tables from a database"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Joining or matching to other datasets")," by using unique identifiers or keys (e.g. Unique Property Reference Number) or 'fuzzy matching' (e.g. matching two sets of names which can account for some differences in spelling, special characters, etc.)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Adding features/attributes")," by applying logic or calculations to existing fields in the data. For example, you might want to create age bands using a date of birth field in your data."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Converting data")," from one format to another (e.g. from string to a date) or from system codes to more easily understood values"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Aggregating data")," by grouping it together by time or geography, and producing statistics like a count, average, sum, minimum and/or maximimum for each group. For example, you might want to aggregate household-level data to get the average value for each ward")),(0,r.kt)("p",null,"These transformations can be scripted in Spark SQL or PySpark (dialects of SQL and Python that run using ",(0,r.kt)("a",{parentName:"p",href:"https://spark.apache.org/"},"Apache Spark"),"), and scheduled/triggered using ",(0,r.kt)("a",{parentName:"p",href:"https://spark.apache.org/"},"AWS Glue"),". You can find more information about the tools and processes in the ","[transforming data]"," section of the playbook."),(0,r.kt)("h3",{id:"3-analysing-data"},"3. ",(0,r.kt)("strong",{parentName:"h3"},"Analysing data")),(0,r.kt)("p",null,"There are various ways to analyse data data from the platform:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Querying your data using SQL in ",(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/athena"},"AWS Athena")),(0,r.kt)("li",{parentName:"ul"},"Connecting your data to a Business Intelligence tool (e.g. Qlik, Google Data Studio, Tableau) using ",(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/redshift/"},"AWS Redshift")),(0,r.kt)("li",{parentName:"ul"},"Connecting your data to a notebooking tool (e.g. Jupyter) so that you can write scripts in a coding language (e.g. Python, R)"),(0,r.kt)("li",{parentName:"ul"},"Connecting your data to Earthlight for mapping and geographical analysis")))}c.isMDXComponent=!0}}]);