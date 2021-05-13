(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6646],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(a),m=o,h=c["".concat(l,".").concat(m)]||c[m]||p[m]||r;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4080:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var n=a(2122),o=a(9756),r=(a(7294),a(3905)),i={id:"major-update",title:"How to update your Nextcloud manually to a major version?",sidebar_label:"Major Nextcloud Update"},s={unversionedId:"major-update",id:"major-update",isDocsHomePage:!1,title:"How to update your Nextcloud manually to a major version?",description:"As already stated during the configuration of automatic updates, you need to update your server to major versions manually. You should automatically get notified by Mail and Nextcloud notification if a new major version was found.",source:"@site/docs/major-update.md",sourceDirName:".",slug:"/major-update",permalink:"/Nextcloud-NAS-Guide/docs/major-update",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/major-update.md",version:"current",sidebar_label:"Major Nextcloud Update",frontMatter:{id:"major-update",title:"How to update your Nextcloud manually to a major version?",sidebar_label:"Major Nextcloud Update"},sidebar:"docs",previous:{title:"How to create a backup manually?",permalink:"/Nextcloud-NAS-Guide/docs/manual-backup"},next:{title:"How to create new users after the initial setup?",permalink:"/Nextcloud-NAS-Guide/docs/create-new-users"}},l=[{value:"Things to check before updating",id:"things-to-check-before-updating",children:[]},{value:"Preparation",id:"preparation",children:[]},{value:"Execution",id:"execution",children:[]}],d={toc:l};function u(e){var t=e.components,a=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"As already stated during the configuration of automatic updates, you need to update your server to major versions manually. You should automatically get notified by Mail and Nextcloud notification if a new major version was found. "),(0,r.kt)("h3",{id:"things-to-check-before-updating"},"Things to check before updating"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Never update to the first Nextcloud release like e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"21.0.0"),"! Although the Nextcloud GmbH states that all releases are stable, you should always wait at least for the first point release, e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"21.0.1")," before upgrading to a major version!",(0,r.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can check the latest releases here: (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nextcloud/server/releases"},"click here"),")")))),(0,r.kt)("li",{parentName:"ol"},"Check that all apps that you need are compatible with the new major version.",(0,r.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Instructions")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},"Open ",(0,r.kt)("inlineCode",{parentName:"li"},"https://yourdomain.com/settings/admin/overview")," with the admin account."),(0,r.kt)("li",{parentName:"ol"},"Scroll down and change the ",(0,r.kt)("inlineCode",{parentName:"li"},"Update Channel")," from ",(0,r.kt)("strong",{parentName:"li"},"Stable")," to ",(0,r.kt)("strong",{parentName:"li"},"Beta")," (Don't worry, this won't change any important setting on your installation)"),(0,r.kt)("li",{parentName:"ol"},"Reload the page"),(0,r.kt)("li",{parentName:"ol"},"You should see now that a new Nextcloud major version was found e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"21.0.1")," (if you are on Nextcloud 20)"),(0,r.kt)("li",{parentName:"ol"},"It should also show to you if all installed apps have updates available for the new version or if some apps still miss updates for the new version."),(0,r.kt)("li",{parentName:"ol"},"If all apps have updates available for the new version, you are ready to upgrade!"),(0,r.kt)("li",{parentName:"ol"},"Now you are free to switch the ",(0,r.kt)("inlineCode",{parentName:"li"},"Update Channel")," from ",(0,r.kt)("strong",{parentName:"li"},"Beta")," back to ",(0,r.kt)("strong",{parentName:"li"},"Stable")," (But as I've stated before: this setting won't change anything important on your installation)")))))),(0,r.kt)("hr",null),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If at least the first point release is out and you've checked that all apps have updates available for the new major Nextcloud version, you are ready to continue."))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"preparation"},"Preparation"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a Backup before updating (",(0,r.kt)("a",{parentName:"li",href:"./manual-backup"},"instructions"),")",(0,r.kt)("br",null),"\n(Although the update is already tested, it could fail, you never know! So better to create a current backup!)")),(0,r.kt)("h3",{id:"execution"},"Execution"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Run over CLI:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo bash /var/scripts/menu.sh\n"))),(0,r.kt)("li",{parentName:"ol"},"Choose ",(0,r.kt)("inlineCode",{parentName:"li"},"Update Nextcloud major")),(0,r.kt)("li",{parentName:"ol"},"Choose ",(0,r.kt)("inlineCode",{parentName:"li"},"No")," if you are asked if you want to fetch the latest ",(0,r.kt)("inlineCode",{parentName:"li"},"update.sh")," script."),(0,r.kt)("li",{parentName:"ol"},"Wait until the update has run and it reports that the update was successful."),(0,r.kt)("li",{parentName:"ol"},"Wait until the server automatically reboots")),(0,r.kt)("p",null,"Now you should have successfully updated to a new major Nextcloud version!"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If the update has failed for you, you can easily restore your system from the backup that you've just created by following these steps: ",(0,r.kt)("a",{parentName:"p",href:"./restore-system"},"click here")))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"updates between multiple major versions are unsupported")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If the update to the major release won't get executed and you see a popup that states that ",(0,r.kt)("strong",{parentName:"p"},"updates between multiple major versions are unsupported"),", you can work around this by updating to the next major version by executing:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# Delete current update.sh script (because the latest one is needed)\nsudo rm /var/scripts/update.sh\n\n# Download latest update.sh script\nsudo wget https://raw.githubusercontent.com/nextcloud/vm/master/static/update.sh -P /var/scripts\n\n# Adjust access rights\nsudo chown root:root /var/scripts/update.sh\nsudo chmod 700 /var/scripts/update.sh\n\n# Readd automatic restart\nsudo sed -i "s|exit|/sbin/shutdown -r +1|g" /var/scripts/update.sh\necho "exit" | sudo tee -a /var/scripts/update.sh >/dev/null\n\n# Update to the next Major version\nsudo bash /var/scripts/update.sh nextmajor\n')))))}u.isMDXComponent=!0}}]);