(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{149:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return p}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=d(n),m=a,p=b["".concat(r,".").concat(m)]||b[m]||u[m]||i;return n?o.a.createElement(p,c(c({ref:t},l),{},{components:n})):o.a.createElement(p,c({ref:t},l))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var l=2;l<i;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(3),o=n(7),i=(n(0),n(149)),r={id:"mount-hdd",title:"How to mount an additional HDD for Movies/TV-Shows?",sidebar_label:"Mount HDD for Movies/TV-Shows"},c={unversionedId:"mount-hdd",id:"mount-hdd",isDocsHomePage:!1,title:"How to mount an additional HDD for Movies/TV-Shows?",description:"Preparations",source:"@site/docs/mount-hdd.md",slug:"/mount-hdd",permalink:"/Nextcloud-NAS-Guide/docs/mount-hdd",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/mount-hdd.md",version:"current",sidebar_label:"Mount HDD for Movies/TV-Shows",sidebar:"docs",previous:{title:"How to create a subdomain and point with CNAME to your Nextcloud Domain?",permalink:"/Nextcloud-NAS-Guide/docs/subdomain-cname"}},s=[{value:"Preparations",id:"preparations",children:[]},{value:"Execution",id:"execution",children:[]}],l={toc:s};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"preparations"},"Preparations"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Format the HDD to NTFS (",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"./format-backup-hdds"}),"instructions"),") (you can skip the formatting if the drive is already NTFS formatted.)",Object(i.b)("div",Object(a.a)({parentName:"li"},{className:"admonition admonition-caution alert alert--warning"}),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"During formatting, use as ",Object(i.b)("inlineCode",{parentName:"p"},"drive label")," something like ",Object(i.b)("inlineCode",{parentName:"p"},"Movies_TV-shows")," or something else that fits. Also just do the procedure ",Object(i.b)("inlineCode",{parentName:"p"},"one time")," and not twice since you only want to format one drive!"))))),Object(i.b)("h3",{id:"execution"},"Execution"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Please ",Object(i.b)("strong",{parentName:"li"},"don't")," connect the new HDD that you want mount to your server, yet or ",Object(i.b)("strong",{parentName:"li"},"disconnect")," it from your server!\n(Already mounted drives must stay connected; disconnecting and connecting the HDD that you want to mount is just so that the system is able to understand which drive you want to mount.)"),Object(i.b)("li",{parentName:"ol"},"Run over CLI:",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"sudo bash /var/scripts/not-supported.sh\n"))),Object(i.b)("li",{parentName:"ol"},"Choose ",Object(i.b)("inlineCode",{parentName:"li"},"NTFS Mount")),Object(i.b)("li",{parentName:"ol"},"Select to ",Object(i.b)("inlineCode",{parentName:"li"},"Mount a drive")),Object(i.b)("li",{parentName:"ol"},"Press ",Object(i.b)("inlineCode",{parentName:"li"},"OK")," to start searching for new NTFS drives"),Object(i.b)("li",{parentName:"ol"},"Now ",Object(i.b)("strong",{parentName:"li"},"connect")," the HDD to your server (you have 1 minute)"),Object(i.b)("li",{parentName:"ol"},"You should get the message that the drive was found"),Object(i.b)("li",{parentName:"ol"},"Wait until the drive has spin up"),Object(i.b)("li",{parentName:"ol"},"Choose the ",Object(i.b)("strong",{parentName:"li"},"NTFS partition")," that shall get mounted"),Object(i.b)("li",{parentName:"ol"},"Type in the mountpath that you would like to use. Recommended is something like ",Object(i.b)("inlineCode",{parentName:"li"},"/mnt/Movies_TV-shows"),"."),Object(i.b)("li",{parentName:"ol"},"You should get the message that the mount was successful."),Object(i.b)("li",{parentName:"ol"},"When asked if this is a backup drive, confirm ",Object(i.b)("inlineCode",{parentName:"li"},"No")," by pressing ",Object(i.b)("inlineCode",{parentName:"li"},"[ENTER]"),"!"),Object(i.b)("li",{parentName:"ol"},"You should see the message now, that PLEX Media Server was found. Press ",Object(i.b)("inlineCode",{parentName:"li"},"[ENTER]")," to continue"),Object(i.b)("li",{parentName:"ol"},"Wait until everything is done and you see the popup that ",Object(i.b)("strong",{parentName:"li"},"PLEX was adjusted!")),Object(i.b)("li",{parentName:"ol"},"Now back to the Menu, just choose ",Object(i.b)("inlineCode",{parentName:"li"},"Exit")," to exit this script.")),Object(i.b)("p",null,"Now, the drive should be accessible by PLEX!"),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"This drive is only accessible by PLEX and not in Nextcloud/SMB. It is not encrypted and doesn't get backed up. So please make sure to ",Object(i.b)("inlineCode",{parentName:"p"},"not")," store any private/personal data on this HDD! It is really only meant to store Movies/TV-Shows!"))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"At least you should get informed if some S.M.A.R.T issues get reported by disk-monitoring that you've set up earlier (",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./smart"}),"here"),"), so that if you are lucky, you can copy the files in time to a new drive before it fails. But this is no Backup and no real data protection! In my opinion this is okay, though since the data that you should store on this HDD like Movies/TV-Shows is not precious because you can always digitize those again from the DVDs/Blu-rays so ",Object(i.b)("strong",{parentName:"p"},"don't sell and don't give away")," those! If you are unlucky and the drive fails before you've successfully copied all the data to a new drive, not encrypting the drive makes it much easier to recover some data if you should decide to pay for data-recovery. Better would most likely be in this case just redigitalizing the Movies/TV-Shows from their DVD/Blu-ray."))))}d.isMDXComponent=!0}}]);