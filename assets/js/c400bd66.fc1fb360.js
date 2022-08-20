"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1160],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=c(o),m=a,g=f["".concat(s,".").concat(m)]||f[m]||u[m]||l;return o?n.createElement(g,r(r({ref:t},p),{},{components:o})):n.createElement(g,r({ref:t},p))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=o.length,r=new Array(l);r[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var c=2;c<l;c++)r[c]=o[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}f.displayName="MDXCreateElement"},2878:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=o(7462),a=(o(7294),o(3905));const l={id:"aws-flowlogs-to-s3",title:"Set-Up AWS FlowLogs to S3",slug:"aws-flowlogs-to-s3",tags:["config","aws","aws flowlogs","s3"]},r="Set-Up AWS Flow Logs to be sent to an S3 Bucket",i={unversionedId:"config/aws-flowlogs/aws-flowlogs-to-s3",id:"config/aws-flowlogs/aws-flowlogs-to-s3",title:"Set-Up AWS FlowLogs to S3",description:"This section will describe how to configure VPC flow logs that are to be sent to a S3 bucket.",source:"@site/docs/config/aws-flowlogs/flow_logs_to_s3.md",sourceDirName:"config/aws-flowlogs",slug:"/config/aws-flowlogs/aws-flowlogs-to-s3",permalink:"/docs/config/aws-flowlogs/aws-flowlogs-to-s3",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/config/aws-flowlogs/flow_logs_to_s3.md",tags:[{label:"config",permalink:"/docs/tags/config"},{label:"aws",permalink:"/docs/tags/aws"},{label:"aws flowlogs",permalink:"/docs/tags/aws-flowlogs"},{label:"s3",permalink:"/docs/tags/s-3"}],version:"current",frontMatter:{id:"aws-flowlogs-to-s3",title:"Set-Up AWS FlowLogs to S3",slug:"aws-flowlogs-to-s3",tags:["config","aws","aws flowlogs","s3"]},sidebar:"tutorialSidebar",previous:{title:"AWS FlowLogs Configuration",permalink:"/docs/config/aws-flowlogs/aws-flowlogs-config"},next:{title:"Configuration Introduction",permalink:"/docs/config/config-intro"}},s={},c=[{value:"AWS Flow Logs",id:"aws-flow-logs",level:2},{value:"IAM Policy to publish logs to an S3 bucket",id:"iam-policy-to-publish-logs-to-an-s3-bucket",level:2},{value:"Bucket permissions",id:"bucket-permissions",level:2},{value:"Add a VPC Flow Log",id:"add-a-vpc-flow-log",level:2},{value:"To configure flow log settings using the console",id:"to-configure-flow-log-settings-using-the-console",level:3}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"set-up-aws-flow-logs-to-be-sent-to-an-s3-bucket"},"Set-Up AWS Flow Logs to be sent to an S3 Bucket"),(0,a.kt)("p",null,"This section will describe how to configure VPC flow logs that are to be sent to a S3 bucket."),(0,a.kt)("h2",{id:"aws-flow-logs"},"AWS Flow Logs"),(0,a.kt)("p",null,"VPC Flow Logs collects flow log records, consolidates them into log files, and then publishes the log files to the Amazon S3 bucket at 5-minute intervals. Each log file contains flow log records for the IP traffic recorded in the previous five minutes."),(0,a.kt)("p",null,"The maximum file size for a log file is 75 MB. If the log file reaches the file size limit within the 5-minute period, the flow log stops adding flow log records to it. Then it publishes the flow log to the Amazon S3 bucket, and creates a new log file."),(0,a.kt)("p",null,"In Amazon S3, the Last modified field for the flow log file indicates the date and time at which the file was uploaded to the Amazon S3 bucket. This is later than the timestamp in the file name, and differs by the amount of time taken to upload the file to the Amazon S3 bucket."),(0,a.kt)("h2",{id:"iam-policy-to-publish-logs-to-an-s3-bucket"},"IAM Policy to publish logs to an S3 bucket"),(0,a.kt)("p",null,"In order to publish the flow logs, the IAM pricipal such as a User, needs to have the following policy:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": ["logs:CreateLogDelivery", "logs:DeleteLogDelivery"],\n      "Resource": "*"\n    }\n  ]\n}\n')),(0,a.kt)("h2",{id:"bucket-permissions"},"Bucket permissions"),(0,a.kt)("p",null,"When creating a bucket in S3, the content of the bucket is private and only accessible to the user that created it. Since the bucket content needs to be read by the agent, a policy needs to be added to that user in order to make the content available."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Sid": "AWSLogDeliveryWrite",\n            "Effect": "Allow",\n            "Principal": {"Service": "delivery.logs.amazonaws.com"},\n            "Action": "s3:PutObject",\n            "Resource": "my-s3-arn",\n            "Condition": {\n                "StringEquals": {\n                    "s3:x-amz-acl": "bucket-owner-full-control",\n                    "aws:SourceAccount": account_id\n                },\n                "ArnLike": {\n                    "aws:SourceArn": "arn:aws:logs:region:account_id:*"\n                }\n            }\n        },\n        {\n            "Sid": "AWSLogDeliveryCheck",\n            "Effect": "Allow",\n            "Principal": {"Service": "delivery.logs.amazonaws.com"},\n            "Action": ["s3:GetBucketAcl", "s3:ListBucket"],\n            "Resource": "arn:aws:s3:::bucket_name",\n            "Condition": {\n                "StringEquals": {\n                    "aws:SourceAccount": account_id\n                },\n                "ArnLike": {\n                    "aws:SourceArn": "arn:aws:logs:region:account_id:*"\n                }\n            }\n        }\n    ]\n}\n')),(0,a.kt)("p",null,"The following must be filled by you:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"my-s3-arn"),", the ARN of the S3 bucket where the logs are stored"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"account_id"),", the account id"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"region"),", a specific region or ",(0,a.kt)("inlineCode",{parentName:"li"},"*")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bucket_name"),", the name of the bucket where the logs are stored.")),(0,a.kt)("h2",{id:"add-a-vpc-flow-log"},"Add a VPC Flow Log"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open the Amazon VPC console at ",(0,a.kt)("a",{parentName:"li",href:"https://console.aws.amazon.com/vpc/"},"https://console.aws.amazon.com/vpc/")),(0,a.kt)("li",{parentName:"ol"},"In the navigation pane, choose Your VPCs."),(0,a.kt)("li",{parentName:"ol"},"Select the checkboxes for one or more VPCs."),(0,a.kt)("li",{parentName:"ol"},"Choose Actions, Create flow log."),(0,a.kt)("li",{parentName:"ol"},"Configure the flow log settings. For more information, see below.")),(0,a.kt)("h3",{id:"to-configure-flow-log-settings-using-the-console"},"To configure flow log settings using the console"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"For Filter, specify the type of IP traffic data to log. Here please select ",(0,a.kt)("inlineCode",{parentName:"p"},"All")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"  Accepted \u2013 Log only accepted traffic.\n  Rejected \u2013 Log only rejected traffic.\n  All \u2013 Log accepted and rejected traffic.\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"For Maximum aggregation interval, choose the maximum period of time during which a flow is captured and aggregated into one flow log record.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"For Destination, choose Send to an S3 bucket.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"For S3 bucket ARN, specify the Amazon Resource Name (ARN) of an existing Amazon S3 bucket. You can optionally include a subfolder. For example, to specify a subfolder named my-logs in a bucket named my-bucket, use the following ARN:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"  arn:aws::s3:::my-bucket\n")),(0,a.kt)("p",{parentName:"li"},"The bucket cannot use AWSLogs as a subfolder name, as this is a reserved term."),(0,a.kt)("p",{parentName:"li"},"If you own the bucket, we automatically create a resource policy and attach it to the bucket. For more information, see Amazon S3 bucket permissions for flow logs."),(0,a.kt)("p",{parentName:"li"},"For Log record format, specify the format for the flow log record. Here please select ",(0,a.kt)("inlineCode",{parentName:"p"},"Custom")," and proceed to select all fields."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"  - To use the default flow log record format, choose AWS default format.\n  - To create a custom format, choose Custom format. For Log format, choose the fields to include in the flow log record.\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"For Log file format, specify the format for the log file."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"  - Text \u2013 Plain text. This is the default format.\n  - Parquet \u2013 Apache Parquet is a columnar data format. Queries on data in Parquet format are 10 to 100 times faster compared to queries on data in plain text. Data in Parquet format with Gzip compression takes 20 percent less storage space than plain text with Gzip compression.\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"(Optional) To use Hive-compatible S3 prefixes, choose Hive-compatible S3 prefix, Enable.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"To partition your flow logs per hour, choose Every 1 hour (60 mins).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"(Optional) To add a tag to the flow log, choose Add new tag and specify the tag key and value.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Choose Create flow log."))))}u.isMDXComponent=!0}}]);