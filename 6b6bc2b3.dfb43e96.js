(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{116:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return h}));var r=a(0),o=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=o.a.createContext({}),c=function(e){var t=o.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,h=u["".concat(l,".").concat(d)]||u[d]||p[d]||n;return a?o.a.createElement(h,i(i({ref:t},s),{},{components:a})):o.a.createElement(h,i({ref:t},s))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,l=new Array(n);l[0]=d;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<n;s++)l[s]=a[s];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},87:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return c}));var r=a(3),o=a(7),n=(a(0),a(116)),l={title:"Scheduling Liberator Glue Jobs",description:"Schedule a glue job to run when new liberator data is added into the platform",layout:"playbook_js",tags:"playbook"},i={unversionedId:"playbook/scheduling-liberator-glue-jobs",id:"playbook/scheduling-liberator-glue-jobs",isDocsHomePage:!1,title:"Scheduling Liberator Glue Jobs",description:"Schedule a glue job to run when new liberator data is added into the platform",source:"@site/docs/playbook/scheduling-liberator-glue-jobs.md",slug:"/playbook/scheduling-liberator-glue-jobs",permalink:"/Data-Platform-Playbook/playbook/scheduling-liberator-glue-jobs",editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/playbook/scheduling-liberator-glue-jobs.md",version:"current",sidebar:"docs",previous:{title:"Glue Studio workshop with Parking Analysts",permalink:"/Data-Platform-Playbook/workshop/aws_glue_studio_parking"},next:{title:"Connecting to the redshift cluster from Google Data Studio",permalink:"/Data-Platform-Playbook/playbook/connecting-to-redshift-from-data-studio"}},b=[{value:"Intro",id:"intro",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Steps",id:"steps",children:[]},{value:"Creating a trigger to start liberator glue jobs",id:"creating-a-trigger-to-start-liberator-glue-jobs",children:[]}],s={toc:b};function c(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"intro"},"Intro"),Object(n.b)("p",null,"This guide will step you through how to schedule a glue job, from the AWS console, that runs on the liberator data in the ",Object(n.b)("a",{parentName:"p",href:"/Data-Platform-Playbook/zones#landing-zone"},"landing zone"),"."),Object(n.b)("p",null,"Scheduling your glue job will mean that it will run whenever new liberator data is added in the data platform so that your\ntransformed data in, say, the ",Object(n.b)("a",{parentName:"p",href:"/Data-Platform-Playbook/zones#refined-zone"},"refined zone")," is based on the most up to date data, with no manual intervention. "),Object(n.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"You have created a glue job that transforms the liberator data in the ",Object(n.b)("a",{parentName:"li",href:"/Data-Platform-Playbook/zones#landing-zone"},"landing zone"),". There is guidance on ",Object(n.b)("a",{parentName:"li",href:"/Data-Platform-Playbook/playbook/using-glue-studio"},"creating a glue job")," and a ",Object(n.b)("a",{parentName:"li",href:"/Data-Platform-Playbook/workshop/aws_glue_studio_parking"},"workshop")," if you need help with this."),Object(n.b)("li",{parentName:"ul"},"You have access to the Hackney Data Platform")),Object(n.b)("h2",{id:"steps"},"Steps"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Sign in to the ",Object(n.b)("a",{parentName:"p",href:"https://hackney.awsapps.com/start#/"},"AWS Management Console"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"In ",Object(n.b)("a",{parentName:"p",href:"https://eu-west-2.console.aws.amazon.com/gluestudio/home?region=eu-west-2#/jobs"},"AWS Glue Studio"),", Check the properties for all of the ",Object(n.b)("strong",{parentName:"p"},"Data targets"),' in your glue job. Ensure you have the following properties set in the "Data target properties" tab.'),Object(n.b)("ol",{parentName:"li"},Object(n.b)("li",{parentName:"ol"},'The Format is set to "Glue Parquet"'),Object(n.b)("li",{parentName:"ol"},'Under "Data Catalog update options", the option "Create a table in the Data Catalog and on subsequent runs, update the schema and add new partitions" is selected.'),Object(n.b)("li",{parentName:"ol"},'A "Database" and "Table name" should also be filled in.')))),Object(n.b)("p",null,"This is so that the job will update the tables in ",Object(n.b)("a",{parentName:"p",href:"https://eu-west-2.console.aws.amazon.com/athena/home?region=eu-west-2#query"},"AWS Athena")," after it runs, without having to run a crawler."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Naviagte to ",Object(n.b)("a",{parentName:"p",href:"https://eu-west-2.console.aws.amazon.com/glue/home?region=eu-west-2#etl:tab=workflows;workflowView=workflow-list"},"AWS Glue Workflows"),".")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Select the workflow called ",Object(n.b)("inlineCode",{parentName:"p"},"dataplatform-{environment}-liberator-data-workflow"),", a diagram should appear at the bottom.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"There should be a trigger (diamond shaped) labeled ",Object(n.b)("inlineCode",{parentName:"p"},"trigger-liberator-jobs"),". If this trigger doesn't exist follow ",Object(n.b)("a",{parentName:"p",href:"##creating-a-trigger-to-start-liberator-glue-jobs"},"these steps")," to create it.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},'Click on the shape, then on the "Action" dropdown and select "Add jobs/crawlers to trigger".')),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},'Click on the "Jobs" tab. Find and select the job you just created.')),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},'Click "Add". Your job should appear in the diagram, connected to the trigger. '))),Object(n.b)("p",null,"Your job is now scheduled to run when new liberator data is added to the landing zone."),Object(n.b)("h2",{id:"creating-a-trigger-to-start-liberator-glue-jobs"},"Creating a trigger to start liberator glue jobs"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},'Click on "Action" to display the dropdown and select "Add trigger".'),Object(n.b)("li",{parentName:"ul"},'Click on the "Add new" tab, put ',Object(n.b)("inlineCode",{parentName:"li"},"trigger-liberator-jobs")," in the Name field then click \"Add'.\nA new diamond shape will appear in the diagram with a broken link symbol, this is the trigger you have just added and it now needs to be linked to the rest of the workflow."),Object(n.b)("li",{parentName:"ul"},'Click on the shape, then on the "Action" dropdown and select "Add jobs/crawlers to watch".\nClick on the "Crawlers" tab. Select the crawler ',Object(n.b)("inlineCode",{parentName:"li"},"dataplatform-{environment}-landing-zone-liberator"),' from, then list then click "Add".'),Object(n.b)("li",{parentName:"ul"},"Continue following the instructions above.")))}c.isMDXComponent=!0}}]);