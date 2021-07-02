(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{116:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return h}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=o.a.createContext({}),s=function(e){var t=o.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b=function(e){var t=s(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),b=s(a),m=n,h=b["".concat(i,".").concat(m)]||b[m]||d[m]||r;return a?o.a.createElement(h,l(l({ref:t},c),{},{components:a})):o.a.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},92:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return s}));var n=a(3),o=a(7),r=(a(0),a(116)),i={title:"Exporting database snapshot to the Data Platform Landing Zone",description:"Exporting a snapshot of an rds instance in AWS to the DataPlatform landing zone",layout:"playbook_js",tags:"playbook"},l={unversionedId:"playbook/exporting-snapshot-to-landing-zone",id:"playbook/exporting-snapshot-to-landing-zone",isDocsHomePage:!1,title:"Exporting database snapshot to the Data Platform Landing Zone",description:"Exporting a snapshot of an rds instance in AWS to the DataPlatform landing zone",source:"@site/docs/playbook/exporting-snapshot-to-landing-zone.md",slug:"/playbook/exporting-snapshot-to-landing-zone",permalink:"/Data-Platform-Playbook/playbook/exporting-snapshot-to-landing-zone",editUrl:"https://github.com/LBHackney-IT/data-platform-playbook/edit/master/docs/playbook/exporting-snapshot-to-landing-zone.md",version:"current",sidebar:"docs",previous:{title:"Connecting to the redshift cluster from Google Data Studio",permalink:"/Data-Platform-Playbook/playbook/connecting-to-redshift-from-data-studio"},next:{title:"Google Sheets import",permalink:"/Data-Platform-Playbook/playbook/google-sheets-import"}},p=[{value:"Add rds instance id to the environment variables",id:"add-rds-instance-id-to-the-environment-variables",children:[]},{value:"Create a snapshot of the rds instance",id:"create-a-snapshot-of-the-rds-instance",children:[]}],c={toc:p};function s(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This guide explains the process of ingesting data from a RDS instance in the AWS API accounts to the Data Platform landing zone by creating db snapshots."),Object(r.b)("h2",{id:"add-rds-instance-id-to-the-environment-variables"},"Add rds instance id to the environment variables"),Object(r.b)("p",null,"In this section, you will be adding the rds instance id to the environment variables in Terraform, which will provision the necessary resources in AWS to create an event subscription on that database instance. Therefore, each time a database snapshot is created, it will begin the process of exporting that data to the Data Platform landing zone."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Ensure you have access to the ",Object(r.b)("a",{parentName:"li",href:"https://github.com/LBHackney-IT/data-platform/"},"Data Platform repository")),Object(r.b)("li",{parentName:"ul"},"Login to the AWS management console for the account where the rds instance is located (for UPRN this will be ",Object(r.b)("inlineCode",{parentName:"li"},"ProductionAPIs"),")",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Currently, the deployment is set up to only deploy to the Staging and Production API accounts. This will be refactored to allow us to release into multiple accounts"))),Object(r.b)("li",{parentName:"ul"},"Search for ",Object(r.b)("inlineCode",{parentName:"li"},"RDS")," and select"),Object(r.b)("li",{parentName:"ul"},"Select ",Object(r.b)("inlineCode",{parentName:"li"},"DB Instances")," in the ",Object(r.b)("inlineCode",{parentName:"li"},"Resources")," section"),Object(r.b)("li",{parentName:"ul"},"Copy the ",Object(r.b)("inlineCode",{parentName:"li"},"DB identifier")," of the database you want to export"),Object(r.b)("li",{parentName:"ul"},"Navigate to ",Object(r.b)("a",{parentName:"li",href:"https://github.com/LBHackney-IT/Data-Platform/blob/main/config/terraform/prod.tfvars#L12"},"prod.tfvars")," in the ",Object(r.b)("inlineCode",{parentName:"li"},"config/terraform")," directory and click the pencil icon to edit the file"),Object(r.b)("li",{parentName:"ul"},"Add the ",Object(r.b)("inlineCode",{parentName:"li"},"Db Identifier")," to the ",Object(r.b)("inlineCode",{parentName:"li"},"rds_instance_ids")," environment variable by pasting it to the end of the list as shown below. Ensure you do not remove existing instance ids and that each instance id is double-quoted and comma separated.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'rds_instance_ids = ["rds-instance-1", "rds-instance-2", "YOUR_DB_INSTANCE_ID"]\n')),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"The ",Object(r.b)("inlineCode",{parentName:"em"},"rds_instance_ids")," environment variable lists all the RDS instances that are configured to export to the Data Platform landing zone")," "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Once the rds instance id has been added, navigate to the bottom of the page to the ",Object(r.b)("inlineCode",{parentName:"p"},"Commit changes")," section and add a short descriptive commit message in the first input field (80 characters max) and an optional description in the second input field")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Select the radio button labelled ",Object(r.b)("inlineCode",{parentName:"p"},"Create a new branch for this commit and start a pull request")," and give the new branch an appropriate name (separate words by dashes)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Select ",Object(r.b)("inlineCode",{parentName:"p"},"Commit changes"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Populate the pull request template and select ",Object(r.b)("inlineCode",{parentName:"p"},"Create pull request"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Your pull request is now ready for review by the Data Platform team, and your changes will be applied once they have approved and merged your pull request, and a new production release has been made")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"After your pull request has been approved and merged, you will be able to view the progress of the staging deployment. Once completed, the Data Platform team will then create a production release which will deploy your changes to production. You can view the progress of these steps by navigating to the ",Object(r.b)("inlineCode",{parentName:"p"},"Data-Platform (Staging)")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Data-Platform (Production)")," workflows in the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/LBHackney-IT/Data-Platform/actions"},"actions tab")," of the repository."),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The workflow for the staging deployment will contain the following text under the workflow title:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"Data-Platform (Staging) #xxx: Commit xxxx pushed by xxxxx\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The production release workflow will contain the following text under the workflow title:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"Data-Platform (Production) #x: Release x.x.x published by xxxxx\n")))))),Object(r.b)("h2",{id:"create-a-snapshot-of-the-rds-instance"},"Create a snapshot of the rds instance"),Object(r.b)("p",null,"Once your pull request has been approved and released to production, you will need to log in to the AWS account where your RDS instance exists, to create a snapshot of it. The creation of this snapshot will trigger the export process of the data to the Data Platform landing zone."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Search for ",Object(r.b)("inlineCode",{parentName:"p"},"RDS")," and select")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"On the sidebar, select ",Object(r.b)("inlineCode",{parentName:"p"},"Snapshots"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Select ",Object(r.b)("inlineCode",{parentName:"p"},"Take snapshot")," on the Manual tab")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"On ",Object(r.b)("inlineCode",{parentName:"p"},"Take a Snapshot")," page, use the ",Object(r.b)("inlineCode",{parentName:"p"},"DB Instance")," drop down and select the rds instance id as your DB instance"),Object(r.b)("p",{parentName:"li"},"  In the ",Object(r.b)("inlineCode",{parentName:"p"},"Snapshot Name")," input field, enter a unique name for your snapshot according to the following convention: ",Object(r.b)("inlineCode",{parentName:"p"},"dataplatform-YYYY-MM-DD-rds_instance_id"),". See example below:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"dataplatform-2021-05-15-golive-db\n")),Object(r.b)("p",{parentName:"li"},"  If you're creating more than one snapshot to be exported on the same day, you would need to make the snapshot name unique by adding a ",Object(r.b)("inlineCode",{parentName:"p"},"snapshot_version")," after the date according to the following convention: ",Object(r.b)("inlineCode",{parentName:"p"},"dataplatform-YYYY-MM-DD-snapshot_version-rds_instance_id"),". For example if this is your second snapshot in the same day, you can name as follows:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"dataplatform-2021-05-15-v2-golive-db\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Select ",Object(r.b)("inlineCode",{parentName:"p"},"Take snapshot"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The snapshot should immediately appear in the ",Object(r.b)("inlineCode",{parentName:"p"},"Manual snapshots")," list under the ",Object(r.b)("inlineCode",{parentName:"p"},"Manual")," tab")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The snapshot is complete when it has a ",Object(r.b)("inlineCode",{parentName:"p"},"Snapshot creation time")," (this will take a few minutes to complete)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Once the snapshot has been created, it will automatically trigger the export process to the Data Platform landing zone bucket. The export process is made up of two steps which in total will take about an hour to complete: "),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"First it will export a copy of the database instance in parquet format to an S3 bucket (Amazon Simple Storage Service) in the same service account. You can view the progress of this first export by navigating to the ",Object(r.b)("inlineCode",{parentName:"li"},"Exports in Amazon S3")," tab (this takes just under an hour to complete). Once complete, you can view the initial snapshot export by clicking on the link in the ",Object(r.b)("inlineCode",{parentName:"li"},"S3 bucket")," column which will take you to the relevant directory in the ",Object(r.b)("inlineCode",{parentName:"li"},"dataplatform-prod-rds-export-storage")," S3 bucket where all the initial exports are stored. "),Object(r.b)("li",{parentName:"ul"},"The second step will copy the data from the ",Object(r.b)("inlineCode",{parentName:"li"},"dataplatform-prod-rds-export-storage")," S3 bucket to the landing zone S3 bucket in the Data Platform account (see ",Object(r.b)("a",{parentName:"li",href:"http://playbook.hackney.gov.uk/Data-Platform-Playbook/docs/exporting-snapshot-to-landing-zone/"},"exporting db snapshots to the landing zone")," for more detail on the ingestion process). Shortly after this, the data will become available in the Data Platform account."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Verify that your exported data is in the Data Platform landing zone:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Switch to the ",Object(r.b)("inlineCode",{parentName:"li"},"DataPlatform-Production")," account"),Object(r.b)("li",{parentName:"ul"},"Search for ",Object(r.b)("inlineCode",{parentName:"li"},"S3")," and select"),Object(r.b)("li",{parentName:"ul"},"Select ",Object(r.b)("inlineCode",{parentName:"li"},"dataplatform-prod-landing-zone")," and navigate to the relevant department folder")))))}s.isMDXComponent=!0}}]);