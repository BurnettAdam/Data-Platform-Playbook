(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{118:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),b=a,h=d["".concat(s,".").concat(b)]||d[b]||m[b]||r;return n?o.a.createElement(h,i(i({ref:t},p),{},{components:n})):o.a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<r;p++)s[p]=n[p];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(3),o=n(7),r=(n(0),n(118)),s={title:"Exporting database snapshots to the Data Platform Landing Zone",description:"Overview of how db snapshots are exported to the Data Platform Landing Zone",layout:"playbook_js",tags:"playbook"},i={unversionedId:"docs/exporting-snapshot-to-landing-zone",id:"docs/exporting-snapshot-to-landing-zone",isDocsHomePage:!1,title:"Exporting database snapshots to the Data Platform Landing Zone",description:"Overview of how db snapshots are exported to the Data Platform Landing Zone",source:"@site/docs/docs/exporting-snapshot-to-landing-zone.md",slug:"/docs/exporting-snapshot-to-landing-zone",permalink:"/Data-Platform-Playbook/docs/exporting-snapshot-to-landing-zone",editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/docs/exporting-snapshot-to-landing-zone.md",version:"current",sidebar:"docs",previous:{title:"Docs",permalink:"/Data-Platform-Playbook/docs/docs"},next:{title:"Import XLXS from G Drive",permalink:"/Data-Platform-Playbook/docs/import-xlsx-from-g-drive"}},c=[],p={toc:c};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This section covers the technical overview of uploading data into the data platform from a db instance in AWS. For step by step instructions on how to do this, refer to ",Object(r.b)("a",{parentName:"p",href:"http://localhost:3000/Data-Platform-Playbook/playbook/exporting-snapshot-to-landing-zone"},"exporting db snapshot to the DataPlatform Landing zone")," guide."),Object(r.b)("p",null,"The terraform module ",Object(r.b)("a",{parentName:"p",href:"https://github.com/LBHackney-IT/Data-Platform/tree/main/modules/db-snapshot-to-s3"},Object(r.b)("inlineCode",{parentName:"a"},"db_snapshot_to_s3"))," will provision the following resources:\n",Object(r.b)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/8051117/118656536-83ffbf80-b7e2-11eb-8adf-7075e72c2d42.png",alt:"exporting-snapshot-to-landing-zone"})),Object(r.b)("p",null,"After the deployment these resources will export the data from any instance listed in this ",Object(r.b)("a",{parentName:"p",href:"https://github.com/LBHackney-IT/Data-Platform/blob/main/config/terraform/prod.tfvars#L12"},"environment variable")," by executing the following steps:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.html"},"An RDS event subscription")," is provisioned, which attaches to the defined instance and pushes events to an ",Object(r.b)("a",{parentName:"li",href:"https://docs.aws.amazon.com/sns/latest/dg/sns-create-topic.html"},"SNS topic")),Object(r.b)("li",{parentName:"ol"},"When a snapshot of the defined instance is created a message is sent to an SQS queue"),Object(r.b)("li",{parentName:"ol"},"The sent SQS message invokes the export lambda by passing it the RDS instance id"),Object(r.b)("li",{parentName:"ol"},"The export lambda retrieves the last snapshot created for the received instance id and starts an ",Object(r.b)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ExportSnapshot.html"},"RDS snapshot export task")),Object(r.b)("li",{parentName:"ol"},"Once the export task is started the lambda queues an SQS message with the export task identifier and the RDS export storage bucket name"),Object(r.b)("li",{parentName:"ol"},"The queued message invoked the copier lambda"),Object(r.b)("li",{parentName:"ol"},"The copier lambda checks the state of the export task and once the export is completed, it transfers the exported data into an S3 bucket in the data platform account")))}l.isMDXComponent=!0}}]);