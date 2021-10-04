(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{102:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return s}));var a=r(3),o=r(7),n=(r(0),r(124)),i={title:"Onboarding new users to the platform",description:"How to add users to a Google group or add a new group for a department.",layout:"playbook_js",tags:"playbook"},l={unversionedId:"playbook/onboarding-new-users-to-the-platform",id:"playbook/onboarding-new-users-to-the-platform",isDocsHomePage:!1,title:"Onboarding new users to the platform",description:"How to add users to a Google group or add a new group for a department.",source:"@site/docs/playbook/onboarding-new-users-to-the-platform.md",slug:"/playbook/onboarding-new-users-to-the-platform",permalink:"/Data-Platform-Playbook/playbook/onboarding-new-users-to-the-platform",editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/playbook/onboarding-new-users-to-the-platform.md",version:"current",sidebar:"docs",previous:{title:"Ingest manually uploaded csv files",permalink:"/Data-Platform-Playbook/playbook/ingest-data-from-csv-files"},next:{title:"Querying the Platform using SQL",permalink:"/Data-Platform-Playbook/playbook/querying-data-using-sql"}},u=[{value:"Prerequisites",id:"prerequisites",children:[{value:"Adding a user to a department",id:"adding-a-user-to-a-department",children:[]},{value:"Creating a department on the Data Platform",id:"creating-a-department-on-the-data-platform",children:[]}]}],p={toc:u};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"You need to be a manager of the relevant Google group"),Object(n.b)("li",{parentName:"ul"},"The user you would like to add to the Google group has a Hackney GSuite account")),Object(n.b)("h3",{id:"adding-a-user-to-a-department"},"Adding a user to a department"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"To add a user to a Google group, follow the instructions ",Object(n.b)("a",{parentName:"li",href:"https://support.google.com/groups/answer/2465464?hl=en"},"here")),Object(n.b)("li",{parentName:"ul"},'If you would like the user to receive AWS email notifications, then ensure you set their subscription preference to "Each email" (see ',Object(n.b)("a",{parentName:"li",href:"https://support.google.com/a/users/answer/9303224?hl=en"},"section 5.2")," of this guide)"),Object(n.b)("li",{parentName:"ul"},"This can take up to two hours to sync with AWS")),Object(n.b)("h3",{id:"creating-a-department-on-the-data-platform"},"Creating a department on the Data Platform"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Create a Google Group, with the name ",Object(n.b)("inlineCode",{parentName:"li"},"saml-aws-data-platform-collaborator-${department_name}")," as a template",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"You can do this by contacting the Hackney Service team via the ",Object(n.b)("a",{parentName:"li",href:"https://hackit-lbh.slack.com/archives/C01FX9ERRSL"},Object(n.b)("inlineCode",{parentName:"a"},"ask-devops")," Slack channel")),Object(n.b)("li",{parentName:"ul"},"Ensure you specify at least one manager for the group you are creating. This person is responsible for adding/removing\nusers to your department"),Object(n.b)("li",{parentName:"ul"},"Enable the collaborative inbox feature on your Google group by step 2 in this ",Object(n.b)("a",{parentName:"li",href:"https://support.google.com/a/users/answer/10375787?hl=en"},"guide"),".\nThis will allow your group and its members to receive emails from outside the Hackney organisation as you will need to be able to receive AWS email notifications."))),Object(n.b)("li",{parentName:"ul"},"Wait for 2 hours for the next AWS sync before moving onto the next step"),Object(n.b)("li",{parentName:"ul"},"Create a new department using the ",Object(n.b)("a",{parentName:"li",href:"https://github.com/LBHackney-IT/Data-Platform/blob/main/terraform/05-departments.tf"},"existing resources")," as a template",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Specify ",Object(n.b)("inlineCode",{parentName:"li"},"google_group_display_name")," with the email address of the Google Group you created earlier"),Object(n.b)("li",{parentName:"ul"},"Specify a unique name for the department, with a maximum of 16 characters")))))}s.isMDXComponent=!0},124:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return d}));var a=r(0),o=r.n(a);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=s(r),m=a,d=c["".concat(i,".").concat(m)]||c[m]||b[m]||n;return r?o.a.createElement(d,l(l({ref:t},p),{},{components:r})):o.a.createElement(d,l({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<n;p++)i[p]=r[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);