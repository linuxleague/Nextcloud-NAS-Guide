(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9386],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(r),d=o,m=f["".concat(i,".").concat(d)]||f[d]||p[d]||s;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<s;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4106:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return i},default:function(){return u}});var n=r(2122),o=r(9756),s=(r(7294),r(3905)),a={id:"user-flows",title:"How to disable User Flows?",sidebar_label:"User Flows"},l={unversionedId:"user-flows",id:"user-flows",isDocsHomePage:!1,title:"How to disable User Flows?",description:"User flows are a feature which was introduces with Nextcloud 18. They can lead to performance issues if one user chooses to create many of them so they should get disabled, especially if you have no usecase for them.",source:"@site/docs/user-flows.md",sourceDirName:".",slug:"/user-flows",permalink:"/Nextcloud-NAS-Guide/docs/user-flows",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/user-flows.md",version:"current",sidebar_label:"User Flows",frontMatter:{id:"user-flows",title:"How to disable User Flows?",sidebar_label:"User Flows"},sidebar:"docs",previous:{title:"How to disable workspaces?",permalink:"/Nextcloud-NAS-Guide/docs/workspaces"},next:{title:"Activate Let's Encrypt",permalink:"/Nextcloud-NAS-Guide/docs/activate-lets-encrypt"}},i=[],c={toc:i};function u(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"User flows are a feature which was introduces with Nextcloud 18. They can lead to performance issues if one user chooses to create many of them so they should get disabled, especially if you have no usecase for them."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Run over CLI:",(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"sudo bash /var/scripts/menu.sh\n"))),(0,s.kt)("li",{parentName:"ol"},"Choose ",(0,s.kt)("inlineCode",{parentName:"li"},"Nextcloud Configuration")," -> ",(0,s.kt)("inlineCode",{parentName:"li"},"Disable user flows")),(0,s.kt)("li",{parentName:"ol"},"Choose to disable ",(0,s.kt)("inlineCode",{parentName:"li"},"user flows"))),(0,s.kt)("p",null,"User flows are now disabled, admin flows still usable."))}u.isMDXComponent=!0}}]);