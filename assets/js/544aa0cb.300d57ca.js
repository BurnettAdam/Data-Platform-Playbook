"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[7994],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=a.createContext({}),p=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,l=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),m=p(n),u=o,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(f,s(s({ref:e},c),{},{components:n})):a.createElement(f,s({ref:e},c))}));function u(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,s=new Array(r);s[0]=m;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:o,s[1]=i;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2981:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),s=["components"],i={title:"Exporting database snapshots to the Data Platform Landing Zone",description:"Overview of how db snapshots are exported to the Data Platform Landing Zone",layout:"playbook_js",tags:["playbook"]},l=void 0,p={unversionedId:"docs/exporting-snapshot-to-landing-zone",id:"docs/exporting-snapshot-to-landing-zone",isDocsHomePage:!1,title:"Exporting database snapshots to the Data Platform Landing Zone",description:"Overview of how db snapshots are exported to the Data Platform Landing Zone",source:"@site/docs/docs/exporting-snapshot-to-landing-zone.md",sourceDirName:"docs",slug:"/docs/exporting-snapshot-to-landing-zone",permalink:"/Data-Platform-Playbook/docs/exporting-snapshot-to-landing-zone",editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/docs/exporting-snapshot-to-landing-zone.md",tags:[{label:"playbook",permalink:"/Data-Platform-Playbook/tags/playbook"}],version:"current",frontMatter:{title:"Exporting database snapshots to the Data Platform Landing Zone",description:"Overview of how db snapshots are exported to the Data Platform Landing Zone",layout:"playbook_js",tags:["playbook"]},sidebar:"docs",previous:{title:"Auto-adjusting AWS Budget Alerts",permalink:"/Data-Platform-Playbook/docs/auto-adjusting-aws-budget"},next:{title:"Importing external files to the Data Platform Landing Zone",permalink:"/Data-Platform-Playbook/docs/import-external-files-to-landing-zone"}},c=[],d={toc:c};function m(t){var e=t.components,n=(0,o.Z)(t,s);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This section covers the technical overview of uploading data into the Data Platform from a db instance in AWS. For step by step instructions on how to do this, refer to ",(0,r.kt)("a",{parentName:"p",href:"/Data-Platform-Playbook/playbook/ingesting-data/ingesting-rds-snapshot-in-landing-zone"},"Ingesting RDS snapshot into the Data Platform Landing Zone")," guide."),(0,r.kt)("p",null,"The terraform module ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/LBHackney-IT/Data-Platform/tree/main/modules/db-snapshot-to-s3"},(0,r.kt)("inlineCode",{parentName:"a"},"db_snapshot_to_s3"))," will provision the following resources:\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/8051117/118656536-83ffbf80-b7e2-11eb-8adf-7075e72c2d42.png",alt:"exporting-snapshot-to-landing-zone"})),(0,r.kt)("p",null,"After the deployment these resources will export the data from any instance listed in this ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/LBHackney-IT/Data-Platform/blob/main/config/terraform/prod.tfvars#L13"},"environment variable")," by executing the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.html"},"An RDS event subscription")," is provisioned, which attaches to the defined instance and pushes events to an ",(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/sns/latest/dg/sns-create-topic.html"},"SNS topic")),(0,r.kt)("li",{parentName:"ol"},"When a snapshot of the defined instance is created a message is sent to an SQS queue"),(0,r.kt)("li",{parentName:"ol"},"The sent SQS message invokes the export lambda by passing it the RDS instance id"),(0,r.kt)("li",{parentName:"ol"},"The export lambda retrieves the last snapshot created for the received instance id and starts an ",(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ExportSnapshot.html"},"RDS snapshot export task")),(0,r.kt)("li",{parentName:"ol"},"Once the export task is started the lambda queues an SQS message with the export task identifier and the RDS export storage bucket name"),(0,r.kt)("li",{parentName:"ol"},"The queued message invoked the copier lambda"),(0,r.kt)("li",{parentName:"ol"},"The copier lambda checks the state of the export task and once the export is completed, it transfers the exported data into an S3 bucket in the data platform account")))}m.isMDXComponent=!0}}]);