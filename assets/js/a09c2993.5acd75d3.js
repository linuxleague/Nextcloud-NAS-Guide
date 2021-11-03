"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4128],{3905:function(e,t,o){o.d(t,{Zo:function(){return l},kt:function(){return f}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var u=n.createContext({}),c=function(e){var t=n.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(o),f=r,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||i;return o?n.createElement(m,a(a({ref:t},l),{},{components:o})):n.createElement(m,a({ref:t},l))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},8495:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var n=o(7462),r=o(3366),i=(o(7294),o(3905)),a=["components"],s={id:"introduction",title:"Introduction to the Nextcloud-Nas-Guide",sidebar_label:"Introduction",slug:"/"},u=void 0,c={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Introduction to the Nextcloud-Nas-Guide",description:"This is my own approach how I think, you should set up a home server. It is a result of many different solutions I've come through the last years and is to this point the most complete and advanced solution. I call it Nextcloud-NAS because it has features that go far beyond what any other Nextcloud solution offers, especially in terms of server and security features. Most NAS devices have features like a built-in backup solution, a built-in SMB-server and much more. And this is exactly what this solution provides. Please note that most of those features are provided by the Nextcloud-VM which you will use to set up your server.",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/",permalink:"/Nextcloud-NAS-Guide/docs/",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/introduction.md",tags:[],version:"current",frontMatter:{id:"introduction",title:"Introduction to the Nextcloud-Nas-Guide",sidebar_label:"Introduction",slug:"/"},sidebar:"docs",next:{title:"Instructions",permalink:"/Nextcloud-NAS-Guide/docs/instructions"}},l=[],d={toc:l};function p(e){var t=e.components,o=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This is my own approach how I think, you should set up a home server. It is a result of many different solutions I've come through the last years and is to this point the most complete and advanced solution. I call it ",(0,i.kt)("inlineCode",{parentName:"p"},"Nextcloud-NAS")," because it has features that go far beyond what any other Nextcloud solution offers, especially in terms of server and security features. Most NAS devices have features like a built-in backup solution, a built-in SMB-server and much more. And this is exactly what this solution provides. Please note that most of those features are provided by the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nextcloud/vm"},"Nextcloud-VM")," which you will use to set up your server."),(0,i.kt)("p",null,"Here is a not complete list of things that this guide covers: hardware recommendations, UEFI/Bios configuration, Ubuntu Installation, Nextcloud installation, full disk encryption, TPM2 unlocking, Let's encrypt for getting valid certificates, Automatic Updates, geoblocking to allow access to your server only from specific countries/continents, server mail notifications, disk monitoring and notifications, Fail2Ban to block too much failed login attempts, previewgenerator to speed up preview loading in Nextcloud, ClamAV for scanning and detecting your files for malware, a complete backup solution, a way to manage a full fletched SMB-server, Pi-hole as network wide ad-blocker, PiVPN as VPN-server, Vaultwarden as open-source password server, OnlyOffice Documentserver integration for Nextcloud, High-performance backend for Nextcloud Talk and PLEX as media server."),(0,i.kt)("p",null,"If you are interested in this solution, please click on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Next")," button below."))}p.isMDXComponent=!0}}]);