(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6318],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return d}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),u=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=n,y=m["".concat(l,".").concat(d)]||m[d]||c[d]||a;return r?o.createElement(y,i(i({ref:t},p),{},{components:r})):o.createElement(y,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5227:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var o=r(2122),n=r(9756),a=(r(7294),r(3905)),i={id:"restore-system",title:"How to restore the system from backup?",sidebar_label:"Restore system"},s={unversionedId:"restore-system",id:"restore-system",isDocsHomePage:!1,title:"How to restore the system from backup?",description:"It could happen that something (e.g. Nextcloud) fails and you need to restore the system to an earlier state. It will automatically restore the whole root partition from the backup that you choose but will leave the external drives untouched. Hint: if you only want to restore some private files manually, you should follow How to restore files from backup?",source:"@site/docs/restore-system.md",sourceDirName:".",slug:"/restore-system",permalink:"/Nextcloud-NAS-Guide/docs/restore-system",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/restore-system.md",version:"current",sidebar_label:"Restore system",frontMatter:{id:"restore-system",title:"How to restore the system from backup?",sidebar_label:"Restore system"},sidebar:"docs",previous:{title:"How to restore files from backup?",permalink:"/Nextcloud-NAS-Guide/docs/restore-files"},next:{title:"How to create a subdomain and point with CNAME to your Nextcloud Domain?",permalink:"/Nextcloud-NAS-Guide/docs/subdomain-cname"}},l=[{value:"Preparation",id:"preparation",children:[]},{value:"Execution",id:"execution",children:[]}],u={toc:l};function p(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"It could happen that something (e.g. Nextcloud) fails and you need to restore the system to an earlier state. It will automatically restore the whole root partition from the backup that you choose but will leave the external drives untouched. Hint: if you only want to restore some private files manually, you should follow ",(0,a.kt)("a",{parentName:"p",href:"./restore-files"},"How to restore files from backup?")),(0,a.kt)("h3",{id:"preparation"},"Preparation"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a Backup (",(0,a.kt)("a",{parentName:"li",href:"./manual-backup"},"instructions"),") ",(0,a.kt)("br",null),"\n(You save your current system partition this way and will be able to restore your system to this point after restoring it to a different restore point.)")),(0,a.kt)("h3",{id:"execution"},"Execution"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Run over CLI:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo bash /var/scripts/not-supported.sh\n"))),(0,a.kt)("li",{parentName:"ol"},"Choose ",(0,a.kt)("inlineCode",{parentName:"li"},"System Restore")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Confirm")," that you want to restore your system to a previous state"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Confirm")," that you've created a backup by selecting ",(0,a.kt)("inlineCode",{parentName:"li"},"Yes")," and pressing ",(0,a.kt)("inlineCode",{parentName:"li"},"[ENTER]")),(0,a.kt)("li",{parentName:"ol"},"If both backup drives are connected, ",(0,a.kt)("strong",{parentName:"li"},"select the backup drive")," that you want to view backups from (most likely the daily backup drive)"),(0,a.kt)("li",{parentName:"ol"},"Select a ",(0,a.kt)("strong",{parentName:"li"},"backup archive")," that you want to restore to (you will see the date and time when it was made)"),(0,a.kt)("li",{parentName:"ol"},"Read through and ",(0,a.kt)("strong",{parentName:"li"},"confirm")," the next popup"),(0,a.kt)("li",{parentName:"ol"},"Confirm that you want to run the ",(0,a.kt)("inlineCode",{parentName:"li"},"extracting check"),(0,a.kt)("br",null),"\n(If this step takes too long, you can cancel it by pressing ",(0,a.kt)("inlineCode",{parentName:"li"},"[CTRL] + [C]"),". Then start from step 1 again and skip the ",(0,a.kt)("inlineCode",{parentName:"li"},"extracting check"),".)"),(0,a.kt)("li",{parentName:"ol"},"Read through and ",(0,a.kt)("strong",{parentName:"li"},"confirm")," the next popup"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Wait")," until you see the next Menu!"),(0,a.kt)("li",{parentName:"ol"},"Now you should see a Menu that states that the dry-run was successful. You can now show all files/folders that will get changed/deleted. After you are done, just select ",(0,a.kt)("inlineCode",{parentName:"li"},"Continue")," and press ",(0,a.kt)("inlineCode",{parentName:"li"},"[ENTER]")," to continue."),(0,a.kt)("li",{parentName:"ol"},"Now you will see a popup with stats from the dry-run. This is an overview about the operation."),(0,a.kt)("li",{parentName:"ol"},"You will be asked next if you really want to restore your system to this state. Now select ",(0,a.kt)("inlineCode",{parentName:"li"},"Yes")," and press ",(0,a.kt)("inlineCode",{parentName:"li"},"[ENTER]")," if you are sure. (This is the last chance to cancel the operation!)"),(0,a.kt)("li",{parentName:"ol"},"Wait until it has restored the system and you see a popup that the restore process was successful."),(0,a.kt)("li",{parentName:"ol"},"Finally, press ",(0,a.kt)("inlineCode",{parentName:"li"},"[ENTER]")," to ",(0,a.kt)("strong",{parentName:"li"},"reboot")," your server.")))}p.isMDXComponent=!0}}]);