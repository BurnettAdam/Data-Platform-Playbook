"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[9667],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(a),h=o,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||n;return a?r.createElement(m,i(i({ref:t},p),{},{components:a})):r.createElement(m,i({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<n;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5653:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var r=a(7462),o=a(3366),n=(a(7294),a(3905)),i=["components"],l={id:"scheduling-liberator-glue-jobs",title:"Scheduling Liberator Glue Jobs",description:"Schedule a glue job to run when new liberator data is added into the platform",layout:"playbook_js",tags:["playbook"]},s=void 0,u={unversionedId:"playbook/transforming-data/scheduling-liberator-glue-jobs",id:"playbook/transforming-data/scheduling-liberator-glue-jobs",isDocsHomePage:!1,title:"Scheduling Liberator Glue Jobs",description:"Schedule a glue job to run when new liberator data is added into the platform",source:"@site/docs/playbook/transforming-data/005-scheduling-liberator-glue-jobs.md",sourceDirName:"playbook/transforming-data",slug:"/playbook/transforming-data/scheduling-liberator-glue-jobs",permalink:"/Data-Platform-Playbook/playbook/transforming-data/scheduling-liberator-glue-jobs",editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/playbook/transforming-data/005-scheduling-liberator-glue-jobs.md",tags:[{label:"playbook",permalink:"/Data-Platform-Playbook/tags/playbook"}],version:"current",sidebarPosition:5,frontMatter:{id:"scheduling-liberator-glue-jobs",title:"Scheduling Liberator Glue Jobs",description:"Schedule a glue job to run when new liberator data is added into the platform",layout:"playbook_js",tags:["playbook"]},sidebar:"docs",previous:{title:"Guide to unit testing on the Data Platform",permalink:"/Data-Platform-Playbook/playbook/transforming-data/unit-testing-guide"},next:{title:"Connecting to the redshift cluster from Google Data Studio",permalink:"/Data-Platform-Playbook/playbook/querying-and-analysing-data/connecting-to-redshift-from-data-studio"}},p=[{value:"Intro",id:"intro",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Steps",id:"steps",children:[]},{value:"Creating a trigger to start liberator glue jobs",id:"creating-a-trigger-to-start-liberator-glue-jobs",children:[]}],d={toc:p};function c(e){var t=e.components,a=(0,o.Z)(e,i);return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"intro"},"Intro"),(0,n.kt)("p",null,"This guide will step you through how to schedule a glue job, from the AWS console, that runs on the liberator data in the ",(0,n.kt)("a",{parentName:"p",href:"/Data-Platform-Playbook/zones#raw-zone"},"raw zone"),"."),(0,n.kt)("p",null,"Scheduling your glue job will mean that it will run whenever new liberator data is added in the data platform so that your\ntransformed data in, say, the ",(0,n.kt)("a",{parentName:"p",href:"/Data-Platform-Playbook/zones#refined-zone"},"refined zone")," is based on the most up to date data, with no manual intervention."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You have created a glue job that transforms the liberator data in the ",(0,n.kt)("a",{parentName:"li",href:"/Data-Platform-Playbook/zones#raw-zone"},"raw zone"),". There is guidance on ",(0,n.kt)("a",{parentName:"li",href:"./using-glue-studio"},"creating a glue job")," and a ",(0,n.kt)("a",{parentName:"li",href:"/Data-Platform-Playbook/workshop/aws_glue_studio_parking"},"workshop")," if you need help with this."),(0,n.kt)("li",{parentName:"ul"},"You have access to the Hackney Data Platform")),(0,n.kt)("h2",{id:"steps"},"Steps"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Sign in to the ",(0,n.kt)("a",{parentName:"p",href:"https://hackney.awsapps.com/start#/"},"AWS Management Console"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"In ",(0,n.kt)("a",{parentName:"p",href:"https://eu-west-2.console.aws.amazon.com/gluestudio/home?region=eu-west-2#/jobs"},"AWS Glue Studio"),", Check the properties for all of the ",(0,n.kt)("strong",{parentName:"p"},"Data targets"),' in your glue job. Ensure you have the following properties set in the "Data target properties" tab.'),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},'The Format is set to "Glue Parquet"'),(0,n.kt)("li",{parentName:"ol"},'Under "Data Catalog update options", the option "Create a table in the Data Catalog and on subsequent runs, update the schema and add new partitions" is selected.'),(0,n.kt)("li",{parentName:"ol"},'A "Database" and "Table name" should also be filled in.')))),(0,n.kt)("p",null,"This is so that the job will update the tables in ",(0,n.kt)("a",{parentName:"p",href:"https://eu-west-2.console.aws.amazon.com/athena/home?region=eu-west-2#query"},"AWS Athena")," after it runs, without having to run a crawler."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Naviagte to ",(0,n.kt)("a",{parentName:"p",href:"https://eu-west-2.console.aws.amazon.com/glue/home?region=eu-west-2#etl:tab=workflows;workflowView=workflow-list"},"AWS Glue Workflows"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Select the workflow called ",(0,n.kt)("inlineCode",{parentName:"p"},"parking-liberator-data-workflow"),", a diagram should appear at the bottom.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"There should be a trigger (diamond shaped) labeled ",(0,n.kt)("inlineCode",{parentName:"p"},"trigger-liberator-jobs"),".\nIf this trigger doesn't exist follow ",(0,n.kt)("a",{parentName:"p",href:"#creating-a-trigger-to-start-liberator-glue-jobs"},"these steps")," to create it.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'Click on the trigger shape, then on the "Action" dropdown and select "Add jobs/crawlers to trigger".')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'Click on the "Jobs" tab. Find and select the job you just created.')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'Click "Add". Your job should appear in the diagram, connected to the trigger.'))),(0,n.kt)("p",null,"Your job is now scheduled to run when new liberator data is added to the platform."),(0,n.kt)("h2",{id:"creating-a-trigger-to-start-liberator-glue-jobs"},"Creating a trigger to start liberator glue jobs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Click on "Action" to display the dropdown and select "Add trigger".'),(0,n.kt)("li",{parentName:"ul"},'Click on the "Add new" tab, put ',(0,n.kt)("inlineCode",{parentName:"li"},"trigger-liberator-jobs")," in the Name field then click \"Add'.\nA new diamond shape will appear in the diagram with a broken link symbol, this is the trigger you have just added and it now needs to be linked to the rest of the workflow."),(0,n.kt)("li",{parentName:"ul"},'Click on the shape, then on the "Action" dropdown and select "Add jobs/crawlers to watch".\nEnsure the "Jobs" tab is selected. Select the job ',(0,n.kt)("inlineCode",{parentName:"li"},"Copy parking Liberator landing zone to raw"),' from, then list then click "Add".'),(0,n.kt)("li",{parentName:"ul"},"Continue following the instructions above.")))}c.isMDXComponent=!0}}]);