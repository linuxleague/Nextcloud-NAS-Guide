"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5265],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||r;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2588:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],l={id:"pi-hole",title:"How to install Pi-hole?",sidebar_label:"Pi-hole"},s=void 0,c={unversionedId:"pi-hole",id:"pi-hole",isDocsHomePage:!1,title:"How to install Pi-hole?",description:"The Pi-hole is a DNS sinkhole that blocks ads, tracker and other unwanted content without having to install any client side software.",source:"@site/docs/pi-hole.md",sourceDirName:".",slug:"/pi-hole",permalink:"/Nextcloud-NAS-Guide/docs/pi-hole",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/pi-hole.md",tags:[],version:"current",frontMatter:{id:"pi-hole",title:"How to install Pi-hole?",sidebar_label:"Pi-hole"},sidebar:"docs",previous:{title:"Vaultwarden",permalink:"/Nextcloud-NAS-Guide/docs/vaultwarden"},next:{title:"PiVPN",permalink:"/Nextcloud-NAS-Guide/docs/pivpn"}},p=[{value:"Preparation",id:"preparation",children:[],level:3},{value:"Installation",id:"installation",children:[],level:3},{value:"What to do now?",id:"what-to-do-now",children:[],level:3}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Pi-hole is a DNS sinkhole that blocks ads, tracker and other unwanted content without having to install any client side software."),(0,r.kt)("h3",{id:"preparation"},"Preparation"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a Backup (",(0,r.kt)("a",{parentName:"li",href:"./manual-backup"},"instructions"),")\n(better to be prepared, since we use the scripts provided by the Pi-hole project and something could go wrong. You never now!)")),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Run over CLI:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo bash /var/scripts/not-supported.sh\n"))),(0,r.kt)("li",{parentName:"ol"},"Choose ",(0,r.kt)("inlineCode",{parentName:"li"},"Pi-hole")),(0,r.kt)("li",{parentName:"ol"},"Choose to install Pi-hole"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Select")," that you have created a Backup and wait a bit"),(0,r.kt)("li",{parentName:"ol"},"Click through the next popups until you have to choose the ",(0,r.kt)("inlineCode",{parentName:"li"},"Upstream DNS provider"),". ",(0,r.kt)("strong",{parentName:"li"},"Choose anyone")," that you prefer. (It is unimportant which one you choose because you will install a local dns server later which is better than any option here.)"),(0,r.kt)("li",{parentName:"ol"},"Confirm the ",(0,r.kt)("inlineCode",{parentName:"li"},"Blacklists")),(0,r.kt)("li",{parentName:"ol"},"Confirm the IP-",(0,r.kt)("inlineCode",{parentName:"li"},"Protocols")," (IPv4 and IPv6 are automatically selected if available; if only IPv4 is available, this popup might not be shown to you)"),(0,r.kt)("li",{parentName:"ol"},"Choose if you want to ",(0,r.kt)("inlineCode",{parentName:"li"},"log queries")),(0,r.kt)("li",{parentName:"ol"},"Select the ",(0,r.kt)("inlineCode",{parentName:"li"},"privacy Mode for FTL")),(0,r.kt)("li",{parentName:"ol"},"Now wait until everything is installed and it reports that Pi-hole was set up correctly and ",(0,r.kt)("strong",{parentName:"li"},"note down")," the admin password!"),(0,r.kt)("li",{parentName:"ol"},"Click and read through the following popups"),(0,r.kt)("li",{parentName:"ol"},"Confirm that you want Pi-hole to be a ",(0,r.kt)("inlineCode",{parentName:"li"},"recursive DNS server")," (improves privacy)"),(0,r.kt)("li",{parentName:"ol"},"Wait until ",(0,r.kt)("inlineCode",{parentName:"li"},"unbound")," is installed and it reports that it was successful")),(0,r.kt)("p",null,"Pi-hole should be successfully installed by now."),(0,r.kt)("h3",{id:"what-to-do-now"},"What to do now?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"First you should visit ",(0,r.kt)("inlineCode",{parentName:"li"},"https://internal-IPv4-address:8094/admin")," e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"https://192.168.178.144:8094/admin")," and login with your admin password."),(0,r.kt)("li",{parentName:"ul"},"You can now either configure your router to use the Pi-hole as DNS-server which will block DNS requests for all devices in your network (",(0,r.kt)("a",{parentName:"li",href:"https://github.com/RPiList/specials/tree/master/RouterKonfiguration"},"instructions"),") or you can configure your devices manually to use the Pi-hole as DNS server in your home network. (E.g. on Android by using Blokada)",(0,r.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you choose to make Pi-hole the DNS server of your home network, you should most likely change the update time when updates get executed (",(0,r.kt)("a",{parentName:"p",href:"change-update-time"},"instructions"),")"))))))}d.isMDXComponent=!0}}]);