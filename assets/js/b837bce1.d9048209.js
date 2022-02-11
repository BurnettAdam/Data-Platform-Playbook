"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[9492],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return c}});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=r.createContext({}),m=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=m(a),c=o,f=d["".concat(p,".").concat(c)]||d[c]||s[c]||n;return a?r.createElement(f,i(i({ref:t},u),{},{components:a})):r.createElement(f,i({ref:t},u))}));function c(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var m=2;m<n;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8502:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return u},default:function(){return d}});var r=a(7462),o=a(3366),n=(a(7294),a(3905)),i=["components"],l={title:"Onboarding new departments to the platform",description:"How to add a new Google group for a department.",layout:"playbook_js",tags:["playbook"]},p=void 0,m={unversionedId:"playbook/getting-set-up/onboarding-new-departments-to-the-platform",id:"playbook/getting-set-up/onboarding-new-departments-to-the-platform",isDocsHomePage:!1,title:"Onboarding new departments to the platform",description:"How to add a new Google group for a department.",source:"@site/docs/playbook/getting-set-up/onboarding-new-departments-to-the-platform.md",sourceDirName:"playbook/getting-set-up",slug:"/playbook/getting-set-up/onboarding-new-departments-to-the-platform",permalink:"/Data-Platform-Playbook/playbook/getting-set-up/onboarding-new-departments-to-the-platform",editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/playbook/getting-set-up/onboarding-new-departments-to-the-platform.md",tags:[{label:"playbook",permalink:"/Data-Platform-Playbook/tags/playbook"}],version:"current",frontMatter:{title:"Onboarding new departments to the platform",description:"How to add a new Google group for a department.",layout:"playbook_js",tags:["playbook"]},sidebar:"docs",previous:{title:"Introduction",permalink:"/Data-Platform-Playbook/playbook/getting-set-up/index"},next:{title:"Onboarding new users to the platform",permalink:"/Data-Platform-Playbook/playbook/getting-set-up/onboarding-new-users-to-the-platform"}},u=[{value:"Objective",id:"objective",children:[]},{value:"Intended audience",id:"intended-audience",children:[]},{value:"Adding a department onto the platform",id:"adding-a-department-onto-the-platform",children:[]}],s={toc:u};function d(e){var t=e.components,a=(0,o.Z)(e,i);return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"objective"},"Objective"),(0,n.kt)("p",null,"Before a department is able to use the data platform, its details must be configured and setup beforehand by a Data Platform Engineer."),(0,n.kt)("h2",{id:"intended-audience"},"Intended audience"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Data Platform Engineer")),(0,n.kt)("h2",{id:"adding-a-department-onto-the-platform"},"Adding a department onto the platform"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a Google group, with the name:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"saml-aws-data-platform-collaborator-<department-name>\n")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"Note: ensure that your ",(0,n.kt)("inlineCode",{parentName:"em"},"department-name")," is all lowercase with words separated by hyphens.")),(0,n.kt)("p",{parentName:"li"},"For example, the Housing Repairs Google group name would be:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"saml-aws-data-platform-collaborator-housing-repairs\n")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"You can do this by submitting a request to ",(0,n.kt)("a",{parentName:"li",href:"support.hackney.gov.uk"},"ICT support")," requesting a Google group."),(0,n.kt)("li",{parentName:"ul"},"Ensure you specify at least one manager for the group you are creating. This person is responsible for adding/removing\nusers to your department"),(0,n.kt)("li",{parentName:"ul"},"Enable the collaborative inbox feature on your Google group by following step 2 in this ",(0,n.kt)("a",{parentName:"li",href:"https://support.google.com/a/users/answer/10375787?hl=en#:~:text=Step%202%3A%20Turn%20on%20Collaborative%20Inbox%20features"},"guide"),".\nThis will allow your group and its members to receive emails from outside the Hackney organisation as you will need to be able to receive AWS email notifications"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Raise a ticket with dev ops by emailing ",(0,n.kt)("a",{parentName:"p",href:"mailto:cloudsupport@hackney.gov.uk"},"cloudsupport@hackney.gov.uk")," asking them to add the group to the SSO import lambda\u2019s google groups. This will allow members of the google group so sign into AWS via ",(0,n.kt)("a",{parentName:"p",href:"https://hackney.awsapps.com/start/#/"},"Hackney's SSO"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Wait for 2 hours for the next AWS sync before moving onto the next step")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a new department using the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/LBHackney-IT/Data-Platform/blob/main/terraform/05-departments.tf"},"existing resources")," as a template"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Specify ",(0,n.kt)("inlineCode",{parentName:"li"},"google_group_display_name")," with the email address of the Google group you created earlier"),(0,n.kt)("li",{parentName:"ul"},"Specify a unique name for the department, with a maximum of 16 characters"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Submit a pull request on GitHub, and await approval from two other Data Platform Engineer's.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Before merging, which will automatically apply the Terraform changes, it is intended that a Data Platform Engineer would first check that the pipeline and all required actions are clear.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Once Terraform has applied, an email address will be output, which can be retrieved from either the GitHub Actions output, or from within the GSuite admin. This email address can be shared with the department that you are onboarding, which they can then use to ingest data into the platform."))))}d.isMDXComponent=!0}}]);