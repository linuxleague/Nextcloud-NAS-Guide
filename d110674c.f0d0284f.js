(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{161:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),o=(a(0),a(188)),i={id:"daily-backup",title:"How to set up a daily backup?",sidebar_label:"Daily Backup"},c={unversionedId:"daily-backup",id:"daily-backup",isDocsHomePage:!1,title:"How to set up a daily backup?",description:"Now that everything is prepared, you should set up a daily backup for your server.",source:"@site/docs/daily-backup.md",slug:"/daily-backup",permalink:"/Nextcloud-NAS-Guide/docs/daily-backup",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/daily-backup.md",version:"current",sidebar_label:"Daily Backup",sidebar:"docs",previous:{title:"How to update your Nextcloud manually to a minor version?",permalink:"/Nextcloud-NAS-Guide/docs/update-manually"},next:{title:"How to set up an offshore backup?",permalink:"/Nextcloud-NAS-Guide/docs/offshore-backup"}},l=[],p={toc:l};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Now that everything is prepared, you should set up a daily backup for your server."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Run over CLI:",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell"},"sudo bash /var/scripts/not-supported.sh\n"))),Object(o.b)("li",{parentName:"ol"},"Choose ",Object(o.b)("inlineCode",{parentName:"li"},"Daily Backup Wizard")),Object(o.b)("li",{parentName:"ol"},"Confirm that you want to ",Object(o.b)("strong",{parentName:"li"},"create")," a daily backup script"),Object(o.b)("li",{parentName:"ol"},"Confirm that you will leave the backup drive connected"),Object(o.b)("li",{parentName:"ol"},"Select your external data SSD/HDD to be ",Object(o.b)("strong",{parentName:"li"},"included")," in backups"),Object(o.b)("li",{parentName:"ol"},"Choose that you want to backup the ",Object(o.b)("strong",{parentName:"li"},"whole")," external data SSD/HDD"),Object(o.b)("li",{parentName:"ol"},"Select the ",Object(o.b)("strong",{parentName:"li"},"daily backup drive")," as backup target"),Object(o.b)("li",{parentName:"ol"},"Choose to use the recommended backup directory"),Object(o.b)("li",{parentName:"ol"},"Enter a difficult ",Object(o.b)("strong",{parentName:"li"},"encryption key")," for your backup and store it at a safe place",Object(o.b)("br",null),"\n(Difficult encryption key means at least 20 characters long, containing small and tall letters, digits and special characters)"),Object(o.b)("li",{parentName:"ol"},"Choose to run the backup at the recommended time at ",Object(o.b)("inlineCode",{parentName:"li"},"4.00 am")),Object(o.b)("li",{parentName:"ol"},"Now everything will get set up"),Object(o.b)("li",{parentName:"ol"},"You should now receive the daily backup config file via mail. Please ",Object(o.b)("strong",{parentName:"li"},"save/archive")," it"),Object(o.b)("li",{parentName:"ol"},"Finally, you will see the message that the backup script was successfully created")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"It is located here: ",Object(o.b)("inlineCode",{parentName:"p"},"/var/scripts/daily-borg-backup.sh")," and will get executed at your chosen backup time, most likely ",Object(o.b)("inlineCode",{parentName:"p"},"4.00 am"),". You will get ",Object(o.b)("strong",{parentName:"p"},"notified")," by mail if something fails and also if the backup was successful. The script which will create the daily backup is based on a program called ",Object(o.b)("inlineCode",{parentName:"p"},"borgbackup")," which is used to make daily incremental, compressed and deduplicated backup archives from your root partition and external data SSD/HDD."))))}u.isMDXComponent=!0},188:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),u=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=u(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(a),d=n,m=s["".concat(i,".").concat(d)]||s[d]||b[d]||o;return a?r.a.createElement(m,c(c({ref:t},p),{},{components:a})):r.a.createElement(m,c({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=a[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);