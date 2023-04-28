"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[678],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,g=p["".concat(c,".").concat(d)]||p[d]||f[d]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8462:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={id:"aws-configuration",title:"AWS Configuration",slug:"aws-config",tags:["config","aws"]},i="AWS Configuration",l={unversionedId:"config/aws/aws-configuration",id:"config/aws/aws-configuration",title:"AWS Configuration",description:"This page explains the configuration steps needed for the successful crawling of an AWS account.",source:"@site/docs/config/aws/aws_config.md",sourceDirName:"config/aws",slug:"/config/aws/aws-config",permalink:"/docs/config/aws/aws-config",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/config/aws/aws_config.md",tags:[{label:"config",permalink:"/docs/tags/config"},{label:"aws",permalink:"/docs/tags/aws"}],version:"current",frontMatter:{id:"aws-configuration",title:"AWS Configuration",slug:"aws-config",tags:["config","aws"]},sidebar:"tutorialSidebar",previous:{title:"Docker",permalink:"/docs/install/docker"},next:{title:"AWS Configuration ReadOnly User",permalink:"/docs/config/aws/aws-readonly-user"}},c={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration File",id:"configuration-file",level:2}],u={toc:s},p="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"aws-configuration"},"AWS Configuration"),(0,r.kt)("p",null,"This page explains the configuration steps needed for the successful crawling of an AWS account."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Please make sure to have already installed (follow the instruction ",(0,r.kt)("a",{parentName:"p",href:"/docs/install/binaries"},"here"),") or deployed the coordimap agent."),(0,r.kt)("admonition",{title:"Use a read-only user or policy",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"We stronlgy recommend that you create a read-only AWS user or a policy as described ",(0,r.kt)("a",{parentName:"p",href:"/docs/config/aws/aws-readonly-user"},"here"),". This way you can prevent any data modification in case of a bug in the coordimap agent.")),(0,r.kt)("h2",{id:"configuration-file"},"Configuration File"),(0,r.kt)("p",null,"The agent configuration file for the AWS section should look like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'coordimap:\n  api_key: ${COORDIMAP_API_KEY}\n  data_sources:\n    - type: aws\n      name: <NAME>\n      desc: <DESCRIPTION>\n      config:\n        - name: policy_config\n          value: "true"\n        - name: access_key_id\n          value: ${ACCESS_KEY_ID}\n        - name: secret_access_key\n          value: ${SECRET_ACCSS_KEY}\n        - name: crawl_interval\n          value: 30s\n')),(0,r.kt)("p",null,"The description of each configuration attribute is explained in the following table:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attribute Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"YES"),(0,r.kt)("td",{parentName:"tr",align:null},"The type of the data source to crawl. Must be ",(0,r.kt)("strong",{parentName:"td"},"aws"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"YES"),(0,r.kt)("td",{parentName:"tr",align:null},"Please refer to the shared config page ",(0,r.kt)("a",{parentName:"td",href:"/docs/config/shared-config-options#name"},"section")," for more information about this configuration option.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"desc"),(0,r.kt)("td",{parentName:"tr",align:null},"YES"),(0,r.kt)("td",{parentName:"tr",align:null},"Please refer to the shared config page ",(0,r.kt)("a",{parentName:"td",href:"/docs/config/shared-config-options#description"},"section")," for more information about this configuration option.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"config.name: policy_config"),(0,r.kt)("td",{parentName:"tr",align:null},"YES"),(0,r.kt)("td",{parentName:"tr",align:null},'Set to "true"(note that this is a string) if the agent is deployed to an EC2 machine that has a policy attached to it or if there is a machine that already has AWS config file.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"config.name: access_key_id"),(0,r.kt)("td",{parentName:"tr",align:null},"YES"),(0,r.kt)("td",{parentName:"tr",align:null},"The AWS ACCESS_KEY_ID.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"config.name: secret_access_key"),(0,r.kt)("td",{parentName:"tr",align:null},"YES"),(0,r.kt)("td",{parentName:"tr",align:null},"The AWS SECRET_ACCESS_KEY.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"config.name: crawl_interval"),(0,r.kt)("td",{parentName:"tr",align:null},"NO"),(0,r.kt)("td",{parentName:"tr",align:null},"Please refer to the shared config page ",(0,r.kt)("a",{parentName:"td",href:"/docs/config/shared-config-options#crawl_interval"},"section")," for more information about this configuration option. If not set it will default to the default value.")))))}f.isMDXComponent=!0}}]);