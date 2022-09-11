"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2034],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,h=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7558:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={id:"shared-configuration-options",title:"Shared Configuration Options",slug:"shared-config-options",tags:["config","shared-options"]},i="Shared cconfiguration options",s={unversionedId:"config/shared-configuration-options",id:"config/shared-configuration-options",title:"Shared Configuration Options",description:"This pages lists all the configuration options that are shared among all data sources.",source:"@site/docs/config/shared_config_options.md",sourceDirName:"config",slug:"/config/shared-config-options",permalink:"/docs/config/shared-config-options",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/config/shared_config_options.md",tags:[{label:"config",permalink:"/docs/tags/config"},{label:"shared-options",permalink:"/docs/tags/shared-options"}],version:"current",frontMatter:{id:"shared-configuration-options",title:"Shared Configuration Options",slug:"shared-config-options",tags:["config","shared-options"]},sidebar:"tutorialSidebar",previous:{title:"PostgreSQL Read Only User",permalink:"/docs/config/postgre/postgresql-readonly-user"}},l={},c=[{value:"Name",id:"name",level:2},{value:"Description",id:"description",level:2},{value:"Crawl Interval",id:"crawl-interval",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"shared-cconfiguration-options"},"Shared cconfiguration options"),(0,a.kt)("p",null,"This pages lists all the configuration options that are shared among all data sources."),(0,a.kt)("h2",{id:"name"},"Name"),(0,a.kt)("p",null,"A human readable name for the specific data source connection. This name will be shown in the app wherever it makes sense. It will be shown also in the ",(0,a.kt)("strong",{parentName:"p"},"Data Sources")," page. Please put a meaningful name here. The name should be unique and distinguishable in your organization."),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"A description of the data source. This will be only shown in the Data Sources page in the app."),(0,a.kt)("h2",{id:"crawl-interval"},"Crawl Interval"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"crawl_interval")," configuration option is shared among all of the available data sources. It specifies the frequency that the specific data source will be crawled by the agent. The suported intervals can be specified as minutes or seconds."),(0,a.kt)("p",null,"A few examples are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"45 seconds interval should be specified as ",(0,a.kt)("inlineCode",{parentName:"li"},"45s")),(0,a.kt)("li",{parentName:"ul"},"3 minutes interval should be specified as ",(0,a.kt)("inlineCode",{parentName:"li"},"3m"))),(0,a.kt)("admonition",{title:"Default Value",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The default value is ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"30s")),".")),(0,a.kt)("admonition",{title:"Recommended value",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"For data sources where you think that they will change not that frequently we recommend ",(0,a.kt)("inlineCode",{parentName:"p"},"crawl_interval")," of several minutes.")))}u.isMDXComponent=!0}}]);