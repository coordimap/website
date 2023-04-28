"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7122],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),g=o,m=c["".concat(i,".").concat(g)]||c[g]||d[g]||a;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=g;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:o,s[1]=l;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},7372:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={id:"postgresql-configuration-readonly-user",title:"PostgreSQL Read Only User",slug:"postgresql-readonly-user",tags:["config","postgre","postgresql","read-only user"]},s="PostgreSQL read-only user",l={unversionedId:"config/postgre/postgresql-configuration-readonly-user",id:"config/postgre/postgresql-configuration-readonly-user",title:"PostgreSQL Read Only User",description:"This page describes how to create a read-only PostgreSQL user. Through this user you will be sure that the agent will not be able to even unintentionally modify any data in your PostgreSQL database.",source:"@site/docs/config/postgre/read_only_user.md",sourceDirName:"config/postgre",slug:"/config/postgre/postgresql-readonly-user",permalink:"/docs/config/postgre/postgresql-readonly-user",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/config/postgre/read_only_user.md",tags:[{label:"config",permalink:"/docs/tags/config"},{label:"postgre",permalink:"/docs/tags/postgre"},{label:"postgresql",permalink:"/docs/tags/postgresql"},{label:"read-only user",permalink:"/docs/tags/read-only-user"}],version:"current",frontMatter:{id:"postgresql-configuration-readonly-user",title:"PostgreSQL Read Only User",slug:"postgresql-readonly-user",tags:["config","postgre","postgresql","read-only user"]},sidebar:"tutorialSidebar",previous:{title:"PostgreSQL Configuration",permalink:"/docs/config/postgre/postgresql"},next:{title:"Shared Configuration Options",permalink:"/docs/config/shared-config-options"}},i={},p=[{value:"Create a new user",id:"create-a-new-user",level:2},{value:"Add needed GRANTs",id:"add-needed-grants",level:2},{value:"PostgreSQL v14",id:"postgresql-v14",level:3},{value:"Postgres v9 - v13",id:"postgres-v9---v13",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"postgresql-read-only-user"},"PostgreSQL read-only user"),(0,o.kt)("p",null,"This page describes how to create a read-only PostgreSQL user. Through this user you will be sure that the agent will not be able to even unintentionally modify any data in your PostgreSQL database."),(0,o.kt)("h2",{id:"create-a-new-user"},"Create a new user"),(0,o.kt)("p",null,"In order to create a new read-only user you need to login"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE ROLE coordimap_readonly WITH LOGIN PASSWORD '<YOUR_PASSWORD>' NOSUPERUSER INHERIT NOCREATEDB NOCREATEROLE NOREPLICATION VALID UNTIL 'infinity';\n")),(0,o.kt)("admonition",{title:"Assumption",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The following SQL statements assume that the user name is ",(0,o.kt)("strong",{parentName:"p"},"coordimap_readonly"),".")),(0,o.kt)("h2",{id:"add-needed-grants"},"Add needed GRANTs"),(0,o.kt)("h3",{id:"postgresql-v14"},"PostgreSQL v14"),(0,o.kt)("p",null,"If you are using PostgreSQL v14 you can run the following SQL"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT pg_read_all_data TO coordimap_readonly;\n")),(0,o.kt)("p",null,"Please check ",(0,o.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/current/predefined-roles.html#PREDEFINED-ROLES-TABLE"},"pg_read_all_data")," for more information."),(0,o.kt)("h3",{id:"postgres-v9---v13"},"Postgres v9 - v13"),(0,o.kt)("admonition",{title:"Substitute the following variables in the coming SQL statements:",type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"DATABASE_NAME"),": use the real name of the database"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"SCHEMA_NAME"),": use the specific schema name"))),(0,o.kt)("p",null,"Allow the user to connect to the database."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT CONNECT ON DATABASE <DATABASE_NAME> TO coordimap_readonly;\n")),(0,o.kt)("p",null,"Allow the user to use the specified schema."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT USAGE ON SCHEMA <SCHEMA_NAME> TO coordimap_readonly;\n")),(0,o.kt)("p",null,"Give ",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT")," permissions on all the tables of the schema ",(0,o.kt)("strong",{parentName:"p"},"public"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT SELECT ON ALL TABLES IN SCHEMA <SCHEMA_NAME> TO coordimap_readonly;\n")),(0,o.kt)("p",null,"Grant ",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT")," permissions to new tables that are created."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER DEFAULT PRIVILEGES IN SCHEMA <SCHEMA_NAME> GRANT SELECT ON TABLES TO coordimap_readonly;\n")))}d.isMDXComponent=!0}}]);