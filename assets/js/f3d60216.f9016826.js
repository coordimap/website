"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4542],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,g=p["".concat(s,".").concat(d)]||p[d]||f[d]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9121:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={id:"kubernetes-configuration",title:"Kubernetes Configuration",slug:"kubernetes",tags:["config","kubernetes","kube","k8s"]},i="Kubernetes Configuration",l={unversionedId:"config/kubernetes/kubernetes-configuration",id:"config/kubernetes/kubernetes-configuration",title:"Kubernetes Configuration",description:"This page explains the needed steps to correctly configure a Kubernetes connection.",source:"@site/docs/config/kubernetes/kubernetes.md",sourceDirName:"config/kubernetes",slug:"/config/kubernetes/kubernetes",permalink:"/docs/config/kubernetes/kubernetes",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/config/kubernetes/kubernetes.md",tags:[{label:"config",permalink:"/docs/tags/config"},{label:"kubernetes",permalink:"/docs/tags/kubernetes"},{label:"kube",permalink:"/docs/tags/kube"},{label:"k8s",permalink:"/docs/tags/k-8-s"}],version:"current",frontMatter:{id:"kubernetes-configuration",title:"Kubernetes Configuration",slug:"kubernetes",tags:["config","kubernetes","kube","k8s"]},sidebar:"tutorialSidebar",previous:{title:"Configuration Introduction",permalink:"/docs/config/config-intro"},next:{title:"MongoDB Configuration",permalink:"/docs/config/mongodb/mongodb"}},s={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration File",id:"configuration-file",level:2}],c={toc:u},p="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kubernetes-configuration"},"Kubernetes Configuration"),(0,a.kt)("p",null,"This page explains the needed steps to correctly configure a Kubernetes connection."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Please make sure to have already installed (follow the instruction ",(0,a.kt)("a",{parentName:"p",href:"/docs/install/binaries"},"here"),") or deployed the coordimap agent."),(0,a.kt)("h2",{id:"configuration-file"},"Configuration File"),(0,a.kt)("p",null,"The agent configuration file for the Kubernetes section should look like the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"coordimap:\n  api_key: ${COORDIMAP_API_KEY}\n  data_sources:\n    - type: kubernetes\n      name: kube1\n      desc: desc1\n      config:\n        - name: in_cluster\n          value: <VALUE>\n        - name: config_file\n          value: <PATH_TO_KUBE_CONFIG>\n        - name: crawl_interval\n          value: <CRAWL_INTERVAL>\n")),(0,a.kt)("p",null,"The description of each configuration attribute is explained in the following table:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Attribute Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"type"),(0,a.kt)("td",{parentName:"tr",align:null},"YES"),(0,a.kt)("td",{parentName:"tr",align:null},"The type of the data source to crawl. Must be ",(0,a.kt)("strong",{parentName:"td"},"kubernetes"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"name"),(0,a.kt)("td",{parentName:"tr",align:null},"YES"),(0,a.kt)("td",{parentName:"tr",align:null},"Please refer to the shared config page ",(0,a.kt)("a",{parentName:"td",href:"/docs/config/shared-config-options#name"},"section")," for more information about this configuration option.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"desc"),(0,a.kt)("td",{parentName:"tr",align:null},"YES"),(0,a.kt)("td",{parentName:"tr",align:null},"Please refer to the shared config page ",(0,a.kt)("a",{parentName:"td",href:"/docs/config/shared-config-options#description"},"section")," for more information about this configuration option.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"config.name: in_cluster"),(0,a.kt)("td",{parentName:"tr",align:null},"YES"),(0,a.kt)("td",{parentName:"tr",align:null},"Tells the coordimap agent if it is being deployed in a Kubernetes cluster. In this mode it will be able to autodiscover the API endpoints by itself. to.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"config.name: config_file"),(0,a.kt)("td",{parentName:"tr",align:null},"YES"),(0,a.kt)("td",{parentName:"tr",align:null},"Tells the coordimap agent the path to a valid kubernetes config file. Please make sure that the file exists in the file system and that it is a correct config file.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"config.name: crawl_interval"),(0,a.kt)("td",{parentName:"tr",align:null},"NO"),(0,a.kt)("td",{parentName:"tr",align:null},"Please refer to the shared config page ",(0,a.kt)("a",{parentName:"td",href:"/docs/config/shared-config-options#crawl_interval"},"section")," for more information about this configuration option. If not set it will default to the default value.")))))}f.isMDXComponent=!0}}]);