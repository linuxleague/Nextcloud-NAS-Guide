(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{129:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var o=n(3),r=n(7),a=(n(0),n(150)),i={id:"nextcloud-startup",title:"How to run the Nextcloud startup script?",sidebar_label:"Nextcloud startup"},l={unversionedId:"nextcloud-startup",id:"nextcloud-startup",isDocsHomePage:!1,title:"How to run the Nextcloud startup script?",description:"This is the second part of the Nextcloud installation that is prepared by the recently executed Nextcloud-VM script.",source:"@site/docs/nextcloud-startup.md",slug:"/nextcloud-startup",permalink:"/Nextcloud-NAS-Guide/docs/nextcloud-startup",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/nextcloud-startup.md",version:"current",sidebar_label:"Nextcloud startup",sidebar:"docs",previous:{title:"How to install Nextcloud?",permalink:"/Nextcloud-NAS-Guide/docs/install-nextcloud"},next:{title:"How to disable USB-boot?",permalink:"/Nextcloud-NAS-Guide/docs/usb-boot"}},c=[],s={toc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This is the second part of the Nextcloud installation that is prepared by the recently executed Nextcloud-VM script. "),Object(a.b)("p",null,"You will need to run this to the end to be done with the Nextcloud setup."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Connect from a PC in the same network to your server over SSH"),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"We have prepared a slideshow for you that you can use. Please click ",Object(a.b)("a",Object(o.a)({parentName:"strong"},{href:"https://szaimen.github.io/Nextcloud-NAS-Guide/nextcloud-startup"}),"here")," to start the slideshow. Otherwise, just continue with the steps below")),Object(a.b)("li",{parentName:"ol"},"After login, you will be automatically redirected and asked a second time for your password. Enter your ",Object(a.b)("strong",{parentName:"li"},"password")," and the script will start"),Object(a.b)("li",{parentName:"ol"},"The first Menu you will see, will let you configure certain ",Object(a.b)("strong",{parentName:"li"},"Startup Configurations"),". It should automatically choose options for you that are not yet configured, so just press ",Object(a.b)("inlineCode",{parentName:"li"},"[ENTER]")," to automatically start those chosen configurations. Most likely only ",Object(a.b)("strong",{parentName:"li"},"Timezone (Change the timezone from Etc/UTC")," will be pre-selected"),Object(a.b)("li",{parentName:"ol"},"Change the Timezone to match your location (choose the ",Object(a.b)("strong",{parentName:"li"},"Geographic area")," and the ",Object(a.b)("strong",{parentName:"li"},"Time zone"),")"),Object(a.b)("li",{parentName:"ol"},"Now read carefully through all information that will be presented to you (those are just a few popups until you see the next Menu)"),Object(a.b)("li",{parentName:"ol"},"The next Menu will be the ",Object(a.b)("strong",{parentName:"li"},"Server Configuration Menu"),". Here just ",Object(a.b)("strong",{parentName:"li"},"deselect all options"),", since you will configure all recommended options later"),Object(a.b)("li",{parentName:"ol"},"The next Menu will be the ",Object(a.b)("strong",{parentName:"li"},"Nextcloud Configuration Menu"),". Since no option is necessary for now, here just press ",Object(a.b)("inlineCode",{parentName:"li"},"[Enter]")," to continue the setup and skip the Menu."),Object(a.b)("li",{parentName:"ol"},"The last Menu will be the ",Object(a.b)("strong",{parentName:"li"},"Additional Apps Menu"),". Here also ",Object(a.b)("strong",{parentName:"li"},"deselect all options"),", since you will configure all recommended options later"),Object(a.b)("li",{parentName:"ol"},"Now ",Object(a.b)("strong",{parentName:"li"},"change the password")," of your CLI Ubuntu user ncadmin. It should be a difficult password and store it at a safe place.",Object(a.b)("br",null),"\n(Difficult password means at least 16 characters long, containing small and tall letters, digits and special characters)"),Object(a.b)("li",{parentName:"ol"},"Next ",Object(a.b)("strong",{parentName:"li"},"change the username and password")," of the ",Object(a.b)("strong",{parentName:"li"},"Nextcloud admin user")," and store it at a safe place, too. This password should be difficult, too."),Object(a.b)("li",{parentName:"ol"},"Wait until everything is configured"),Object(a.b)("li",{parentName:"ol"},"Read through all information that will be presented to you and finally press ",Object(a.b)("inlineCode",{parentName:"li"},"[ENTER]")," to reboot your server")),Object(a.b)("p",null,"Now the Nextcloud configuration should be done. Next, you will configure recommended options."),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Please Note!")),Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},Object(a.b)("strong",{parentName:"p"},"Since the server fingerprint was changed during this script, you will need to reset the server fingerprint the next time you connect to your server via SSH."),"\nTo do that, just type in your Console/Terminal on your client PC: ",Object(a.b)("inlineCode",{parentName:"p"},"ssh-keygen -R ip-address")," so e.g. ",Object(a.b)("inlineCode",{parentName:"p"},"ssh-keygen -R 192.168.178.144")))))}u.isMDXComponent=!0},150:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),b=o,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||a;return n?r.a.createElement(m,l(l({ref:t},s),{},{components:n})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);