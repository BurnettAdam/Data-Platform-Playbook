"use strict";(self.webpackChunkdata_platform_playbook=self.webpackChunkdata_platform_playbook||[]).push([[53],{1109:function(a){a.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"docs":[{"type":"link","label":"Release Notes","href":"/Data-Platform-Playbook/release-notes"},{"type":"category","label":"About","items":[{"type":"link","label":"About the Data Platform","href":"/Data-Platform-Playbook/"},{"type":"link","label":"Zones","href":"/Data-Platform-Playbook/zones"},{"type":"link","label":"Environments","href":"/Data-Platform-Playbook/environments"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Playbook","items":[{"type":"category","label":"Getting set up on the platform","items":[{"type":"link","label":"Introduction","href":"/Data-Platform-Playbook/playbook/getting-set-up/index"},{"type":"category","label":"Administrating Users & Departments","items":[{"type":"link","label":"Introduction","href":"/Data-Platform-Playbook/playbook/getting-set-up/index"}],"collapsible":true,"collapsed":true}],"collapsible":true,"collapsed":true},{"type":"category","label":"Finding data on the platform","items":[{"type":"link","label":"Introduction","href":"/Data-Platform-Playbook/playbook/finding-data/index"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Getting access to data","items":[{"type":"link","label":"Introduction","href":"/Data-Platform-Playbook/playbook/getting-access-to-data/index"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Ingesting data","items":[{"type":"link","label":"Exporting database snapshot to the Data Platform Landing Zone","href":"/Data-Platform-Playbook/playbook/ingesting-data/exporting-snapshot-to-landing-zone"},{"type":"link","label":"Importing data from Google Sheets","href":"/Data-Platform-Playbook/playbook/ingesting-data/google-sheets-import"},{"type":"link","label":"Import files from google to s3","href":"/Data-Platform-Playbook/playbook/ingesting-data/import-files-from-google-to-S3"},{"type":"link","label":"Import XLXS from G Drive","href":"/Data-Platform-Playbook/playbook/ingesting-data/import-xlsx-from-g-drive"},{"type":"link","label":"Ingest manually uploaded csv files","href":"/Data-Platform-Playbook/playbook/ingesting-data/ingest-data-from-csv-files"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Transforming data","items":[{"type":"link","label":"Creating Glue jobs","href":"/Data-Platform-Playbook/playbook/transforming-data/create-glue-jobs"},{"type":"link","label":"Guide to testing data quality in Glue Jobs","href":"/Data-Platform-Playbook/playbook/transforming-data/data-quality-testing-guide"},{"type":"link","label":"Scheduling Liberator Glue Jobs","href":"/Data-Platform-Playbook/playbook/transforming-data/scheduling-liberator-glue-jobs"},{"type":"link","label":"Guide to testing on the Data Platform","href":"/Data-Platform-Playbook/playbook/transforming-data/unit-testing-guide"},{"type":"link","label":"Using Glue Studio","href":"/Data-Platform-Playbook/playbook/transforming-data/using-glue-studio"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Querying data","items":[{"type":"link","label":"Querying the Data Platform using SQL within AWS Athena","href":"/Data-Platform-Playbook/playbook/querying-data/querying-data-using-sql"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Connecting to other tools","items":[{"type":"link","label":"Connecting to the redshift cluster from Google Data Studio","href":"/Data-Platform-Playbook/playbook/connecting-to-other-tools/connecting-to-redshift-from-data-studio"},{"type":"link","label":"Create a data extract in Google Data Studio","href":"/Data-Platform-Playbook/playbook/connecting-to-other-tools/create_a_data_extract_in_GDS"}],"collapsible":true,"collapsed":true}],"collapsible":true,"collapsed":true},{"type":"category","label":"Technical Documentation","items":[{"type":"link","label":"Docs","href":"/Data-Platform-Playbook/docs/docs"},{"type":"link","label":"Exporting database snapshots to the Data Platform Landing Zone","href":"/Data-Platform-Playbook/docs/exporting-snapshot-to-landing-zone"},{"type":"link","label":"Import XLXS from G Drive","href":"/Data-Platform-Playbook/docs/import-xlsx-from-g-drive"},{"type":"link","label":"Redshift - Creating users, databases and exposing data from Glue","href":"/Data-Platform-Playbook/docs/redshift"},{"type":"link","label":"VPC Peering Connection between Data Platform and Production APIs AWS accounts","href":"/Data-Platform-Playbook/docs/vpc-peering-connection-dataplatform-and-production-apis-account"}],"collapsible":true,"collapsed":true},{"type":"category","label":"Architecture Decision","items":[{"type":"link","label":"Introduction","href":"/Data-Platform-Playbook/architecture-decisions/index"},{"type":"category","label":"Records","items":[{"type":"link","label":"Introduction","href":"/Data-Platform-Playbook/architecture-decisions/index"},{"type":"link","label":"Ingest Google Sheets Data","href":"/Data-Platform-Playbook/architecture-decisions/ingest-google-sheets-data"},{"type":"link","label":"Ingest SQL flat files","href":"/Data-Platform-Playbook/architecture-decisions/ingest-sql-flat-files"},{"type":"link","label":"Ingesting data from APIs","href":"/Data-Platform-Playbook/architecture-decisions/ingesting-data-from-apis"},{"type":"link","label":"Partition Strategy","href":"/Data-Platform-Playbook/architecture-decisions/partition-strategy"},{"type":"link","label":"production-data-in-staging","href":"/Data-Platform-Playbook/architecture-decisions/production-data-in-staging"},{"type":"link","label":"Record architecture decisions","href":"/Data-Platform-Playbook/architecture-decisions/record-architecture-decisions"},{"type":"link","label":"Recovered Data","href":"/Data-Platform-Playbook/architecture-decisions/recovered-data"},{"type":"link","label":"Role-Based Access Control","href":"/Data-Platform-Playbook/architecture-decisions/role-based-access-control"},{"type":"link","label":"Copy Liberator data from sftp to s3","href":"/Data-Platform-Playbook/architecture-decisions/sftp-to-s3-lambda"},{"type":"link","label":"Using DataHub as a Data Catalogue","href":"/Data-Platform-Playbook/architecture-decisions/using-datahub-as-a-data-catalogue"},{"type":"link","label":"Using pytest for verifying PySpark transformations","href":"/Data-Platform-Playbook/architecture-decisions/using-pytest-for-verifying-pyspark-transformations"}],"collapsible":true,"collapsed":true}],"collapsible":true,"collapsed":true},{"type":"category","label":"Spikes","items":[{"type":"link","label":"Amundsen deployment","href":"/Data-Platform-Playbook/spikes/amundsen-deployment"},{"type":"link","label":"Data Quality Testing","href":"/Data-Platform-Playbook/spikes/data-quality-testing"},{"type":"link","label":"Datahub deployment","href":"/Data-Platform-Playbook/spikes/datahub-deployment"},{"type":"link","label":"Qlik Integration","href":"/Data-Platform-Playbook/spikes/qlik-integration"}],"collapsible":true,"collapsed":true}]}}')}}]);