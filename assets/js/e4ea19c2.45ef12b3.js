"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7117],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>d});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},g=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),u=c(n),p=o,d=u["".concat(s,".").concat(p)]||u[p]||f[p]||r;return n?a.createElement(d,l(l({ref:t},g),{},{components:n})):a.createElement(d,l({ref:t},g))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4698:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={id:"aws-flowlogs-configuration",title:"AWS FlowLogs Configuration",slug:"aws-flowlogs-config",tags:["config","aws","aws flowlogs"]},l="AWS FlowLogs Configuration",i={unversionedId:"config/aws-flowlogs/aws-flowlogs-configuration",id:"config/aws-flowlogs/aws-flowlogs-configuration",title:"AWS FlowLogs Configuration",description:"This page explains the configuration steps needed for the successful crawling of an AWS account.",source:"@site/docs/config/aws-flowlogs/aws_flowlogs_config.md",sourceDirName:"config/aws-flowlogs",slug:"/config/aws-flowlogs/aws-flowlogs-config",permalink:"/docs/config/aws-flowlogs/aws-flowlogs-config",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/config/aws-flowlogs/aws_flowlogs_config.md",tags:[{label:"config",permalink:"/docs/tags/config"},{label:"aws",permalink:"/docs/tags/aws"},{label:"aws flowlogs",permalink:"/docs/tags/aws-flowlogs"}],version:"current",frontMatter:{id:"aws-flowlogs-configuration",title:"AWS FlowLogs Configuration",slug:"aws-flowlogs-config",tags:["config","aws","aws flowlogs"]},sidebar:"tutorialSidebar",previous:{title:"AWS Configuration ReadOnly User",permalink:"/docs/config/aws/aws-readonly-user"},next:{title:"Set-Up AWS FlowLogs to S3",permalink:"/docs/config/aws-flowlogs/aws-flowlogs-to-s3"}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration File",id:"configuration-file",level:2}],g={toc:c},u="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"aws-flowlogs-configuration"},"AWS FlowLogs Configuration"),(0,o.kt)("p",null,"This page explains the configuration steps needed for the successful crawling of an AWS account."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Please make sure to have already installed (follow the instruction ",(0,o.kt)("a",{parentName:"p",href:"/docs/install/binaries"},"here"),") or deployed the coordimap agent."),(0,o.kt)("admonition",{title:"Set-up the flow logs in at least one VPC",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"In order for this configuration to work you must set-up flow logs to at lease one VPC and send them to a S3 bucket. Please check ",(0,o.kt)("a",{parentName:"p",href:"/docs/config/aws-flowlogs/aws-flowlogs-to-s3"},"here"),".")),(0,o.kt)("h2",{id:"configuration-file"},"Configuration File"),(0,o.kt)("p",null,"The agent configuration file for the AWS section should look like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"coordimap:\n  api_key: ${COORDIMAP_API_KEY}\n  data_sources:\n    - type: aws_vpc_flowlog\n      name: flowlog1\n      desc: desc1\n      config:\n        - name: log_format\n          value: <LOG_FORMAT>\n        - name: log_type\n          value: <LOG_TYPE>\n        - name: bucket_name\n          value: <S3_BUCKET_NAME>\n        - name: region\n          value: eu-central-1\n        - name: access_key_id\n          value: ${ACCESS_KEY_ID}\n        - name: secret_access_key\n          value: ${SECRET_ACCSS_KEY}\n        - name: crawl_interval\n          value: 30s\n")),(0,o.kt)("p",null,"The description of each configuration attribute is explained in the following table:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Attribute Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"type"),(0,o.kt)("td",{parentName:"tr",align:null},"YES"),(0,o.kt)("td",{parentName:"tr",align:null},"The type of the data source to crawl. Must be ",(0,o.kt)("strong",{parentName:"td"},"aws_flow_logs"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"name"),(0,o.kt)("td",{parentName:"tr",align:null},"YES"),(0,o.kt)("td",{parentName:"tr",align:null},"Please refer to the shared config page ",(0,o.kt)("a",{parentName:"td",href:"/docs/config/shared-config-options#name"},"section")," for more information about this configuration option.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"desc"),(0,o.kt)("td",{parentName:"tr",align:null},"YES"),(0,o.kt)("td",{parentName:"tr",align:null},"Please refer to the shared config page ",(0,o.kt)("a",{parentName:"td",href:"/docs/config/shared-config-options#description"},"section")," for more information about this configuration option.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"config.name: log_type"),(0,o.kt)("td",{parentName:"tr",align:null},"YES"),(0,o.kt)("td",{parentName:"tr",align:null},"Where the flow logs are being stored. The only values accepted are: ",(0,o.kt)("inlineCode",{parentName:"td"},"S3"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"config.name: log_format"),(0,o.kt)("td",{parentName:"tr",align:null},"YES"),(0,o.kt)("td",{parentName:"tr",align:null},"Currently only all the fileds are supported. Use the following format and make sure that the mapping is the same as the one in the configuration. You can use only ",(0,o.kt)("inlineCode",{parentName:"td"},"default")," or ",(0,o.kt)("inlineCode",{parentName:"td"},"all")," as values here")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"config.name: bucket_name"),(0,o.kt)("td",{parentName:"tr",align:null},"YES"),(0,o.kt)("td",{parentName:"tr",align:null},"The AWS S3 bucket name where the logs are being stored at. name.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"config.name: region"),(0,o.kt)("td",{parentName:"tr",align:null},"YES"),(0,o.kt)("td",{parentName:"tr",align:null},"The AWS region where the log group is located.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"config.name: access_key_id"),(0,o.kt)("td",{parentName:"tr",align:null},"YES"),(0,o.kt)("td",{parentName:"tr",align:null},"The AWS ACCESS_KEY_ID.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"config.name: access_key_id"),(0,o.kt)("td",{parentName:"tr",align:null},"YES"),(0,o.kt)("td",{parentName:"tr",align:null},"The AWS ACCESS_KEY_ID.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"config.name: secret_access_key"),(0,o.kt)("td",{parentName:"tr",align:null},"YES"),(0,o.kt)("td",{parentName:"tr",align:null},"The AWS SECRET_ACCESS_KEY.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"config.name: crawl_interval"),(0,o.kt)("td",{parentName:"tr",align:null},"NO"),(0,o.kt)("td",{parentName:"tr",align:null},"Please refer to the shared config page ",(0,o.kt)("a",{parentName:"td",href:"/docs/config/shared-config-options#crawl_interval"},"section")," for more information about this configuration option. If not set it will default to the default value.")))))}f.isMDXComponent=!0}}]);