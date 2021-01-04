(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{123:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(146)),i={id:"format-backup-hdds",title:"How to format the external backup HDD's?",sidebar_label:"Format"},c={unversionedId:"format-backup-hdds",id:"format-backup-hdds",isDocsHomePage:!1,title:"How to format the external backup HDD's?",description:"You will now reformat them to NTFS. You can skip this step, if they are already NTFS formatted!",source:"@site/docs/format-backup-hdds.md",slug:"/format-backup-hdds",permalink:"/Nextcloud-NAS-Guide/docs/format-backup-hdds",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/format-backup-hdds.md",version:"current",sidebar_label:"Format",sidebar:"someSidebar",previous:{title:"How to configure the external backup HDD's?",permalink:"/Nextcloud-NAS-Guide/docs/backup-hdds"},next:{title:"How to mount the external backup HDD's?",permalink:"/Nextcloud-NAS-Guide/docs/mount-backup-hdds"}},l=[],u={toc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You will now reformat them to NTFS. You can skip this step, if they are already NTFS formatted!"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Warning: this will delete any data on this drive!")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Power on")," your server by pressing the ",Object(o.b)("inlineCode",{parentName:"li"},"power button")," (if not already done)"),Object(o.b)("li",{parentName:"ol"},"Please ",Object(o.b)("strong",{parentName:"li"},"don't")," connect the backup HDDs to your server, yet!\n(The already with Veracrypt encrypted and mounted external data SSD/HDD must stay connected; disconnecting and connecting one backup HDD that you want to format is just so that the system is able to understand which drive you want to format.)"),Object(o.b)("li",{parentName:"ol"},"Run ",Object(o.b)("inlineCode",{parentName:"li"},"sudo bash /var/scripts/not-supported.sh")," over CLI"),Object(o.b)("li",{parentName:"ol"},"Choose ",Object(o.b)("inlineCode",{parentName:"li"},"NTFS Format")),Object(o.b)("li",{parentName:"ol"},"Select to ",Object(o.b)("inlineCode",{parentName:"li"},"Format a drive")),Object(o.b)("li",{parentName:"ol"},"Press ",Object(o.b)("inlineCode",{parentName:"li"},"OK")," to start searching for new drives"),Object(o.b)("li",{parentName:"ol"},"Now ",Object(o.b)("strong",{parentName:"li"},"connect")," one of your backup HDD's to your server (you have 1 minute)"),Object(o.b)("li",{parentName:"ol"},"You should get the message that the drive was found"),Object(o.b)("li",{parentName:"ol"},"Select the drive that you want to format to NTFS"),Object(o.b)("li",{parentName:"ol"},"Type in the ",Object(o.b)("strong",{parentName:"li"},"label")," that this partition shall get. It should be a recognizable label like ",Object(o.b)("inlineCode",{parentName:"li"},"Daily Backup")," for the daily backup drive and ",Object(o.b)("inlineCode",{parentName:"li"},"Off-shore Backup")," for the off-shore backup drive "),Object(o.b)("li",{parentName:"ol"},"Confirm that you are sure to format the drive to NTFS by selecting ",Object(o.b)("inlineCode",{parentName:"li"},"Yes")),Object(o.b)("li",{parentName:"ol"},"Now the drive should be successfully formatted")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Now repeat the same procedure for the second backup drive. Start at point 5."),"\n(The with Veracrypt encrypted data SSD/HDD must stay connected to the server!)"),Object(o.b)("p",null,"If you are done, just choose ",Object(o.b)("inlineCode",{parentName:"p"},"Exit")," to exit this script."))}p.isMDXComponent=!0},146:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),d=n,m=s["".concat(i,".").concat(d)]||s[d]||b[d]||o;return r?a.a.createElement(m,c(c({ref:t},u),{},{components:r})):a.a.createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);