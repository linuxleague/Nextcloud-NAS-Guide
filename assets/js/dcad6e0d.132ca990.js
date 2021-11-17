"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8230],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),s=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),h=n,b=p["".concat(c,".").concat(h)]||p[h]||d[h]||i;return r?o.createElement(b,a(a({ref:t},u),{},{components:r})):o.createElement(b,a({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9199:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var o=r(7462),n=r(3366),i=(r(7294),r(3905)),a=["components"],l={id:"whiteboard",title:"How to install Whiteboard for Nextcloud?",sidebar_label:"Whiteboard"},c=void 0,s={unversionedId:"whiteboard",id:"whiteboard",isDocsHomePage:!1,title:"How to install Whiteboard for Nextcloud?",description:"The Whiteboard app for Nextcloud makes it possible to collaboratively work on a whiteboard. It integrates Spacedeck whiteboard server and lets Nextcloud users create .whiteboard files which can then be opened in the Files app and in Talk. Those files can be shared to other users or via public links. Everyone having access with write permissions to such a file can edit it collaboratively.",source:"@site/docs/whiteboard.md",sourceDirName:".",slug:"/whiteboard",permalink:"/Nextcloud-NAS-Guide/docs/whiteboard",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/whiteboard.md",tags:[],version:"current",frontMatter:{id:"whiteboard",title:"How to install Whiteboard for Nextcloud?",sidebar_label:"Whiteboard"},sidebar:"docs",previous:{title:"Push Notifications for Nextcloud",permalink:"/Nextcloud-NAS-Guide/docs/notify_push"},next:{title:"Pico CMS",permalink:"/Nextcloud-NAS-Guide/docs/pico"}},u=[{value:"Preparations",id:"preparations",children:[],level:3},{value:"Installation",id:"installation",children:[],level:3}],d={toc:u};function p(e){var t=e.components,r=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Whiteboard app for Nextcloud makes it possible to collaboratively work on a whiteboard. It integrates Spacedeck whiteboard server and lets Nextcloud users create .whiteboard files which can then be opened in the Files app and in Talk. Those files can be shared to other users or via public links. Everyone having access with write permissions to such a file can edit it collaboratively."),(0,i.kt)("h3",{id:"preparations"},"Preparations"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"If you are on Nextcloud 20, update to Nextcloud 21 if not already done by following these instructions: ",(0,i.kt)("a",{parentName:"li",href:"./major-update"},"click here"))),(0,i.kt)("h3",{id:"installation"},"Installation"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Run over CLI:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo bash /var/scripts/menu.sh\n"))),(0,i.kt)("li",{parentName:"ol"},"Choose ",(0,i.kt)("inlineCode",{parentName:"li"},"Additional Apps")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"Whiteboard")),(0,i.kt)("li",{parentName:"ol"},"Choose to install/reinstall Whiteboard for Nextcloud"),(0,i.kt)("li",{parentName:"ol"},"Wait until it reports that it was successfully installed")),(0,i.kt)("p",null,"Now you should be able to edit whiteboards collaboratively inside your Nextcloud."))}p.isMDXComponent=!0}}]);