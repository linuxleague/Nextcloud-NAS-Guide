"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5054],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2763:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],s={id:"smb-server",title:"SMB-server and user accounts",sidebar_label:"Overview"},c=void 0,u={unversionedId:"smb-server",id:"smb-server",isDocsHomePage:!1,title:"SMB-server and user accounts",description:"Although a SMB-server might not be needed in any installation, it is recommended to configure it nonetheless, since you will be able to create Nextcloud users and configure the Nextcloud external storage app easily using the SMB-server script.",source:"@site/docs/smb-server.md",sourceDirName:".",slug:"/smb-server",permalink:"/Nextcloud-NAS-Guide/docs/smb-server",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/smb-server.md",tags:[],version:"current",frontMatter:{id:"smb-server",title:"SMB-server and user accounts",sidebar_label:"Overview"},sidebar:"docs",previous:{title:"Off-Shore Backup",permalink:"/Nextcloud-NAS-Guide/docs/offshore-backup"},next:{title:"Run the SMB-server script",permalink:"/Nextcloud-NAS-Guide/docs/run-smb-server"}},l=[],p={toc:l};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Although a SMB-server might not be needed in any installation, it is recommended to configure it nonetheless, since you will be able to ",(0,i.kt)("inlineCode",{parentName:"p"},"create Nextcloud users")," and configure the ",(0,i.kt)("inlineCode",{parentName:"p"},"Nextcloud external storage")," app easily using the SMB-server script."),(0,i.kt)("p",null,"This section should take around ",(0,i.kt)("strong",{parentName:"p"},"20min")," if you just create a few users and shares. It covers:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Run the smb-server script"),(0,i.kt)("li",{parentName:"ol"},"Create SMB-users and Nextcloud users"),(0,i.kt)("li",{parentName:"ol"},"Create SMB-shares and mount the locations to Nextcloud"),(0,i.kt)("li",{parentName:"ol"},"Enable automatic cleanup of the recycle bin folders")))}d.isMDXComponent=!0}}]);