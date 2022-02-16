"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3060],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(r),f=o,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||a;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},380:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={id:"backup-hdds",title:"How to configure the external backup HDD's?",sidebar_label:"Overview"},u=void 0,l={unversionedId:"backup-hdds",id:"backup-hdds",title:"How to configure the external backup HDD's?",description:"As you might already know, are those two additional external HDD's meant to be backup drives. One will be used as daily Backup drive which will be connected all the time and one as Off-shore backup drive, which should get stored somewhere else in a safe place outside your home.",source:"@site/docs/backup-hdds.md",sourceDirName:".",slug:"/backup-hdds",permalink:"/Nextcloud-NAS-Guide/docs/backup-hdds",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/backup-hdds.md",tags:[],version:"current",frontMatter:{id:"backup-hdds",title:"How to configure the external backup HDD's?",sidebar_label:"Overview"},sidebar:"docs",previous:{title:"Sensible folder structure",permalink:"/Nextcloud-NAS-Guide/docs/sensible-folder-structure"},next:{title:"Format",permalink:"/Nextcloud-NAS-Guide/docs/format-backup-hdds"}},s=[],d={toc:s};function p(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"As you might already know, are those two additional external HDD's meant to be backup drives. One will be used as daily Backup drive which will be connected all the time and one as Off-shore backup drive, which should get stored somewhere else in a safe place outside your home."),(0,a.kt)("p",null,"You will need to do the following steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Format")," them to BTRFS"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Mount")," them to your server")))}p.isMDXComponent=!0}}]);