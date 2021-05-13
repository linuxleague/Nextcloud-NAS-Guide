(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1194],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return p}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=d(n),p=o,h=u["".concat(l,".").concat(p)]||u[p]||c[p]||i;return n?a.createElement(h,r(r({ref:t},m),{},{components:n})):a.createElement(h,r({ref:t},m))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7452:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},metadata:function(){return s},toc:function(){return l},default:function(){return m}});var a=n(2122),o=n(9756),i=(n(7294),n(3905)),r={id:"mount-hdd",title:"How to mount an additional HDD for Movies/TV-Shows?",sidebar_label:"Mount HDD for Movies/TV-Shows"},s={unversionedId:"mount-hdd",id:"mount-hdd",isDocsHomePage:!1,title:"How to mount an additional HDD for Movies/TV-Shows?",description:"Preparations",source:"@site/docs/mount-hdd.md",sourceDirName:".",slug:"/mount-hdd",permalink:"/Nextcloud-NAS-Guide/docs/mount-hdd",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/mount-hdd.md",version:"current",sidebar_label:"Mount HDD for Movies/TV-Shows",frontMatter:{id:"mount-hdd",title:"How to mount an additional HDD for Movies/TV-Shows?",sidebar_label:"Mount HDD for Movies/TV-Shows"},sidebar:"docs",previous:{title:"How to create a subdomain and point with CNAME to your Nextcloud Domain?",permalink:"/Nextcloud-NAS-Guide/docs/subdomain-cname"},next:{title:"How to connect to your SMB-server?",permalink:"/Nextcloud-NAS-Guide/docs/smb-connect"}},l=[{value:"Preparations",id:"preparations",children:[]},{value:"Execution",id:"execution",children:[]}],d={toc:l};function m(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"preparations"},"Preparations"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Format the HDD to NTFS (",(0,i.kt)("a",{parentName:"li",href:"./format-backup-hdds"},"instructions"),") (you can skip the formatting if the drive is already NTFS formatted.)",(0,i.kt)("div",{parentName:"li",className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"During formatting, use as ",(0,i.kt)("inlineCode",{parentName:"p"},"drive label")," something like ",(0,i.kt)("inlineCode",{parentName:"p"},"Movies_TV-shows")," or something else that fits. Also just do the procedure ",(0,i.kt)("inlineCode",{parentName:"p"},"one time")," and not twice since you only want to format one drive!"))))),(0,i.kt)("h3",{id:"execution"},"Execution"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Please ",(0,i.kt)("strong",{parentName:"li"},"don't")," connect the new HDD that you want mount to your server, yet or ",(0,i.kt)("strong",{parentName:"li"},"disconnect")," it from your server!\n(Already mounted drives must stay connected; disconnecting and connecting the HDD that you want to mount is just so that the system is able to understand which drive you want to mount.)"),(0,i.kt)("li",{parentName:"ol"},"Run over CLI:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo bash /var/scripts/not-supported.sh\n"))),(0,i.kt)("li",{parentName:"ol"},"Choose ",(0,i.kt)("inlineCode",{parentName:"li"},"NTFS Mount")),(0,i.kt)("li",{parentName:"ol"},"Select to ",(0,i.kt)("inlineCode",{parentName:"li"},"Mount a drive")),(0,i.kt)("li",{parentName:"ol"},"Press ",(0,i.kt)("inlineCode",{parentName:"li"},"OK")," to start searching for new NTFS drives"),(0,i.kt)("li",{parentName:"ol"},"Now ",(0,i.kt)("strong",{parentName:"li"},"connect")," the HDD to your server (you have 1 minute)"),(0,i.kt)("li",{parentName:"ol"},"You should get the message that the drive was found"),(0,i.kt)("li",{parentName:"ol"},"Wait until the drive has spin up"),(0,i.kt)("li",{parentName:"ol"},"Choose the ",(0,i.kt)("strong",{parentName:"li"},"NTFS partition")," that shall get mounted"),(0,i.kt)("li",{parentName:"ol"},"Type in the mountpath that you would like to use. Recommended is something like ",(0,i.kt)("inlineCode",{parentName:"li"},"/mnt/Movies_TV-shows"),"."),(0,i.kt)("li",{parentName:"ol"},"You should get the message that the mount was successful."),(0,i.kt)("li",{parentName:"ol"},"When asked if this is a backup drive, confirm ",(0,i.kt)("inlineCode",{parentName:"li"},"No")," by pressing ",(0,i.kt)("inlineCode",{parentName:"li"},"[ENTER]"),"!"),(0,i.kt)("li",{parentName:"ol"},"You should see the message now, that PLEX Media Server was found. Press ",(0,i.kt)("inlineCode",{parentName:"li"},"[ENTER]")," to continue"),(0,i.kt)("li",{parentName:"ol"},"Wait until everything is done and you see the popup that ",(0,i.kt)("strong",{parentName:"li"},"PLEX was adjusted!")),(0,i.kt)("li",{parentName:"ol"},"Now back to the Menu, just choose ",(0,i.kt)("inlineCode",{parentName:"li"},"Exit")," to exit this script.")),(0,i.kt)("p",null,"Now, the drive should be accessible by PLEX!"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This drive is only accessible by PLEX and not in Nextcloud/SMB. It is not encrypted and doesn't get backed up. So please make sure to ",(0,i.kt)("inlineCode",{parentName:"p"},"not")," store any private/personal data on this HDD! It is really only meant to store Movies/TV-Shows!"))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"After you've exited the script, you should reinstall Disk Monitoring to make sure that all drives support Smart Monitoring and are healthy. (",(0,i.kt)("a",{parentName:"p",href:"./smart"},"instructions"),")"))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"At least you should get informed if some S.M.A.R.T issues get reported by disk-monitoring that you've set up earlier (",(0,i.kt)("a",{parentName:"p",href:"./smart"},"here"),"), so that if you are lucky, you can copy the files in time to a new drive before it fails. But this is no Backup and no real data protection! In my opinion this is okay, though since the data that you should store on this HDD like Movies/TV-Shows is not precious because you can always digitize those again from the DVDs/Blu-rays so ",(0,i.kt)("strong",{parentName:"p"},"don't sell and don't give away")," those! If you are unlucky and the drive fails before you've successfully copied all the data to a new drive, not encrypting the drive makes it much easier to recover some data if you should decide to pay for data-recovery. Better would most likely be in this case just redigitizing the Movies/TV-Shows from their DVD/Blu-ray."))))}m.isMDXComponent=!0}}]);