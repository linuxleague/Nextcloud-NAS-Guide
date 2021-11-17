"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8649],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(n),m=o,y=s["".concat(u,".").concat(m)]||s[m]||d[m]||a;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4362:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return s}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={id:"update-manually",title:"How to update your Nextcloud manually to a minor version?",sidebar_label:"Update manually Nextcloud minor"},u=void 0,c={unversionedId:"update-manually",id:"update-manually",isDocsHomePage:!1,title:"How to update your Nextcloud manually to a minor version?",description:"Before you are able to create the backup scripts, you will need to run the update script one time.",source:"@site/docs/update-manually.md",sourceDirName:".",slug:"/update-manually",permalink:"/Nextcloud-NAS-Guide/docs/update-manually",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/update-manually.md",tags:[],version:"current",frontMatter:{id:"update-manually",title:"How to update your Nextcloud manually to a minor version?",sidebar_label:"Update manually Nextcloud minor"},sidebar:"docs",previous:{title:"SMTP Mail",permalink:"/Nextcloud-NAS-Guide/docs/smtp-mail"},next:{title:"Daily Backup",permalink:"/Nextcloud-NAS-Guide/docs/daily-backup"}},p=[],d={toc:p};function s(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Before you are able to create the backup scripts, you will need to run the update script one time.\nHere we cover how to update your Nextcloud to a minor version manually.\nUpdating your server to a Major Nextcloud version will be covered by this guide: ",(0,a.kt)("a",{parentName:"p",href:"./major-update"},"click here")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Run over CLI:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo bash /var/scripts/menu.sh\n"))),(0,a.kt)("li",{parentName:"ol"},"Choose ",(0,a.kt)("inlineCode",{parentName:"li"},"Update Nextcloud minor")," Attention! ",(0,a.kt)("strong",{parentName:"li"},"Don't")," choose ",(0,a.kt)("inlineCode",{parentName:"li"},"Nextcloud Update major"),"!"),(0,a.kt)("li",{parentName:"ol"},"Choose ",(0,a.kt)("inlineCode",{parentName:"li"},"No")," if you are asked if you want to fetch the latest ",(0,a.kt)("inlineCode",{parentName:"li"},"update.sh")," script."),(0,a.kt)("li",{parentName:"ol"},"Wait until the update has run"),(0,a.kt)("li",{parentName:"ol"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"sudo shutdown -c")," over CLI to cancel the shutdown, since it is not necessary now")))}s.isMDXComponent=!0}}]);