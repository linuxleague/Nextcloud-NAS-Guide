"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6034],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},517:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={id:"format-backup-hdds",title:"How to format the external backup HDD's?",sidebar_label:"Format"},c=void 0,u={unversionedId:"format-backup-hdds",id:"format-backup-hdds",title:"How to format the external backup HDD's?",description:"You will now reformat them to BTRFS. You can skip this step, if they are already BTRFS formatted!",source:"@site/docs/format-backup-hdds.md",sourceDirName:".",slug:"/format-backup-hdds",permalink:"/Nextcloud-NAS-Guide/docs/format-backup-hdds",draft:!1,editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/format-backup-hdds.md",tags:[],version:"current",frontMatter:{id:"format-backup-hdds",title:"How to format the external backup HDD's?",sidebar_label:"Format"},sidebar:"docs",previous:{title:"Overview",permalink:"/Nextcloud-NAS-Guide/docs/backup-hdds"},next:{title:"Mount",permalink:"/Nextcloud-NAS-Guide/docs/mount-backup-hdds"}},p={},s=[],d={toc:s};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You will now reformat them to BTRFS. You can skip this step, if they are already BTRFS formatted!"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Warning: this will delete any data on this drive!")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Power on")," your server by pressing the ",(0,o.kt)("inlineCode",{parentName:"li"},"power button")," (if not already done)"),(0,o.kt)("li",{parentName:"ol"},"Please ",(0,o.kt)("strong",{parentName:"li"},"don't")," connect the backup HDDs to your server, yet!",(0,o.kt)("br",null),"\n(The already with Veracrypt encrypted and mounted external data SSD/HDD must stay connected; disconnecting and connecting one backup HDD that you want to format is just so that the system is able to understand which drive you want to format.)"),(0,o.kt)("li",{parentName:"ol"},"Run over CLI:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo bash /var/scripts/not-supported.sh\n"))),(0,o.kt)("li",{parentName:"ol"},"Choose ",(0,o.kt)("inlineCode",{parentName:"li"},"BTRFS Format")),(0,o.kt)("li",{parentName:"ol"},"Select to ",(0,o.kt)("inlineCode",{parentName:"li"},"Format a drive")),(0,o.kt)("li",{parentName:"ol"},"Press ",(0,o.kt)("inlineCode",{parentName:"li"},"OK")," to start searching for new drives"),(0,o.kt)("li",{parentName:"ol"},"Now ",(0,o.kt)("strong",{parentName:"li"},"connect")," one of your backup HDD's to your server (you have 1 minute)"),(0,o.kt)("li",{parentName:"ol"},"You should get the message that the drive was found"),(0,o.kt)("li",{parentName:"ol"},"Select the drive that you want to format to BTRFS"),(0,o.kt)("li",{parentName:"ol"},"Type in the ",(0,o.kt)("strong",{parentName:"li"},"label")," that this partition shall get. It should be a recognizable label like ",(0,o.kt)("inlineCode",{parentName:"li"},"Daily Backup")," for the daily backup drive and ",(0,o.kt)("inlineCode",{parentName:"li"},"Off-shore Backup")," for the off-shore backup drive "),(0,o.kt)("li",{parentName:"ol"},"Confirm that you are sure to format the drive to BTRFS by selecting ",(0,o.kt)("inlineCode",{parentName:"li"},"Yes")),(0,o.kt)("li",{parentName:"ol"},"Now the drive should be successfully formatted")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Now repeat the same procedure for the second backup drive. Start at point 5.")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The with Veracrypt encrypted data SSD/HDD must stay connected to the server!")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you are done, just choose ",(0,o.kt)("inlineCode",{parentName:"p"},"Exit")," to exit this script.")))}m.isMDXComponent=!0}}]);