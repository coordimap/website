"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5006],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3926:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={id:"install-binaries",title:"Binaries",slug:"binaries",tags:["install","binary","linux"]},o="Installation",l={unversionedId:"install/install-binaries",id:"install/install-binaries",title:"Binaries",description:"This section explains how to download the coordimap binaries.",source:"@site/docs/install/binaries.mdx",sourceDirName:"install",slug:"/install/binaries",permalink:"/docs/install/binaries",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/install/binaries.mdx",tags:[{label:"install",permalink:"/docs/tags/install"},{label:"binary",permalink:"/docs/tags/binary"},{label:"linux",permalink:"/docs/tags/linux"}],version:"current",frontMatter:{id:"install-binaries",title:"Binaries",slug:"binaries",tags:["install","binary","linux"]},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/introduction"},next:{title:"Docker",permalink:"/docs/install/docker"}},s={},c=[{value:"Download",id:"download",level:2},{value:"Untar",id:"untar",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation"},"Installation"),(0,a.kt)("p",null,"This section explains how to download the coordimap binaries."),(0,a.kt)("h2",{id:"download"},"Download"),(0,a.kt)("p",null,"Download the latest binary from the ",(0,a.kt)("a",{parentName:"p",href:"/get-coordimap"},"Get Coordimap")," page."),(0,a.kt)("p",null,"Or use the following ",(0,a.kt)("inlineCode",{parentName:"p"},"curl")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -L -o coordimap-agent.tar.gz https://github.com/coordimap/agent/releases/latest/download/coordimap-agent.tar.gz\n")),(0,a.kt)("h2",{id:"untar"},"Untar"),(0,a.kt)("p",null,"Untar the downloaded file and ",(0,a.kt)("a",{parentName:"p",href:"/docs/config/config-intro"},"configure")," it"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"tar -xvfz coordimap-agent.tar.gz\n")))}u.isMDXComponent=!0}}]);