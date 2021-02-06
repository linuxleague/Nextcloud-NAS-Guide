(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{140:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var o=r(3),n=r(7),a=(r(0),r(152)),i={id:"restore-files",title:"How to restore files from backup?",sidebar_label:"Restore files"},l={unversionedId:"restore-files",id:"restore-files",isDocsHomePage:!1,title:"How to restore files from backup?",description:"It can happen that you need to restore some files from a backup. This is especially useful if you want to restore some private files. Hint: if your system is broken and something doesn't work correctly, you should follow How to restore the system from a backup",source:"@site/docs/restore-files.md",slug:"/restore-files",permalink:"/Nextcloud-NAS-Guide/docs/restore-files",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/restore-files.md",version:"current",sidebar_label:"Restore files",sidebar:"docs",previous:{title:"How to create a backup manually?",permalink:"/Nextcloud-NAS-Guide/docs/manual-backup"},next:{title:"How to restore the system from backup?",permalink:"/Nextcloud-NAS-Guide/docs/restore-system"}},c=[{value:"Preparations",id:"preparations",children:[]},{value:"Execution",id:"execution",children:[]}],s={toc:c};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"It can happen that you need to restore some files from a backup. This is especially useful if you want to restore some private files. Hint: if your system is broken and something doesn't work correctly, you should follow ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"./restore-system"}),"How to restore the system from a backup")),Object(a.b)("h3",{id:"preparations"},"Preparations"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Install Midnight Commander (",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"./mc"}),"instructions"),")"),Object(a.b)("li",{parentName:"ol"},"Install Remotedesktop (",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"./remotedesktop"}),"instructions"),")")),Object(a.b)("h3",{id:"execution"},"Execution"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Run over CLI:",Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-shell"}),"sudo bash /var/scripts/not-supported.sh\n"))),Object(a.b)("li",{parentName:"ol"},"Choose ",Object(a.b)("inlineCode",{parentName:"li"},"Backup Viewer")),Object(a.b)("li",{parentName:"ol"},"Confirm that you want to view the content of your backups"),Object(a.b)("li",{parentName:"ol"},"If both backup drives are connected, ",Object(a.b)("strong",{parentName:"li"},"select the backup drive")," that you want to view backups from (most likely the daily backup drive)"),Object(a.b)("li",{parentName:"ol"},"Read through the rules that are necessary to know about and ",Object(a.b)("strong",{parentName:"li"},"confirm")," them"),Object(a.b)("li",{parentName:"ol"},"Now, you should see Midnight Commander and all available backup archives. ",Object(a.b)("strong",{parentName:"li"},"Just leave Midnight Commander as it is!")),Object(a.b)("li",{parentName:"ol"},"Connect to your server via RDP (",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"./rdp-connect"}),"instructions"),")"),Object(a.b)("li",{parentName:"ol"},"When you are connected, open a ",Object(a.b)("inlineCode",{parentName:"li"},"terminal")," in the Remotedesktop session "),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"Copy and paste")," or type into the terminal: ",Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-shell"}),"xhost +si:localuser:root \\\n&& sudo nautilus /tmp/borg\n"))),Object(a.b)("li",{parentName:"ol"},"Now, you should see the file explorer with all available backup archives"),Object(a.b)("li",{parentName:"ol"},"You are now free to navigate through them, ",Object(a.b)("strong",{parentName:"li"},"open files and restore")," them from the backup to the original directory"),Object(a.b)("li",{parentName:"ol"},"After you are done, ",Object(a.b)("strong",{parentName:"li"},"close")," the file explorer"),Object(a.b)("li",{parentName:"ol"},"The last step is to ",Object(a.b)("strong",{parentName:"li"},"close Midnight Commander")," by pressing ",Object(a.b)("inlineCode",{parentName:"li"},"[F10]")),Object(a.b)("li",{parentName:"ol"},"It should now report, that the backup and drive was successfully unmounted.")))}p.isMDXComponent=!0},152:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var o=r(0),n=r.n(o);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),p=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||a;return r?n.a.createElement(d,l(l({ref:t},s),{},{components:r})):n.a.createElement(d,l({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);