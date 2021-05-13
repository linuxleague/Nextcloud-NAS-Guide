(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[919],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4762:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i={id:"ubuntu",title:"How to set up Ubuntu?",sidebar_label:"Ubuntu"},s={unversionedId:"ubuntu",id:"ubuntu",isDocsHomePage:!1,title:"How to set up Ubuntu?",description:"You need an OS for you server and we've chosen the latest Ubuntu LTS release for you. Here is how it should get installed and configured.",source:"@site/docs/ubuntu.md",sourceDirName:".",slug:"/ubuntu",permalink:"/Nextcloud-NAS-Guide/docs/ubuntu",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/ubuntu.md",version:"current",sidebar_label:"Ubuntu",frontMatter:{id:"ubuntu",title:"How to set up Ubuntu?",sidebar_label:"Ubuntu"},sidebar:"docs",previous:{title:"How to configure the BIOS/UEFI?",permalink:"/Nextcloud-NAS-Guide/docs/bios-uefi"},next:{title:"How to connect to your server over SSH?",permalink:"/Nextcloud-NAS-Guide/docs/ssh"}},l=[],u={toc:l};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You need an OS for you server and we've chosen the latest Ubuntu LTS release for you. Here is how it should get installed and configured."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Download")," the latest Ubuntu Server 20.04.1 LTS image by clicking ",(0,o.kt)("a",{parentName:"li",href:"http://www.releases.ubuntu.com/20.04/ubuntu-20.04.2-live-server-amd64.iso"},"here")," (this might take 30min because of slow download servers)"),(0,o.kt)("li",{parentName:"ol"},"Use the already downloaded image to create a bootable USB-stick by following ",(0,o.kt)("a",{parentName:"li",href:"https://ubuntu.com/tutorials/create-a-usb-stick-on-windows"},"this guide")," (the guide is for Windows, but guides for macOS and Ubuntu are referenced there)"),(0,o.kt)("li",{parentName:"ol"},"Connect a ",(0,o.kt)("strong",{parentName:"li"},"LAN-cable")," to your server"),(0,o.kt)("li",{parentName:"ol"},"Connect the ",(0,o.kt)("strong",{parentName:"li"},"USB-stick")," to your server and ",(0,o.kt)("strong",{parentName:"li"},"power the server on"),". The server should then automatically boot from the USB-stick"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Since it is necessary that you configure certain things correctly, we have prepared a slideshow which makes it easier for you to configure Ubuntu correctly. Please click ",(0,o.kt)("a",{parentName:"strong",href:"https://szaimen.github.io/Nextcloud-NAS-Guide/ubuntu"},"here")," to start the slideshow. Otherwise, just continue with the steps below")),(0,o.kt)("li",{parentName:"ol"},"Select the correct ",(0,o.kt)("strong",{parentName:"li"},"language")," for the installer"),(0,o.kt)("li",{parentName:"ol"},"Select the correct ",(0,o.kt)("strong",{parentName:"li"},"Keyboard layout"),". This is has great importance!"),(0,o.kt)("li",{parentName:"ol"},"Just use the defaults in ",(0,o.kt)("strong",{parentName:"li"},"network connections")),(0,o.kt)("li",{parentName:"ol"},"Don't configure any ",(0,o.kt)("strong",{parentName:"li"},"Proxy address")),(0,o.kt)("li",{parentName:"ol"},"Use the default ",(0,o.kt)("strong",{parentName:"li"},"Mirror address")),(0,o.kt)("li",{parentName:"ol"},"During ",(0,o.kt)("strong",{parentName:"li"},"Storage configuration"),", activate the option to ",(0,o.kt)("strong",{parentName:"li"},"Encrypt the LVM group with LUKS"),", enter a difficult ",(0,o.kt)("strong",{parentName:"li"},"Passphrase"),", confirm it and store it at a safe place.",(0,o.kt)("br",null),"\n(Difficult passphrase means at least 16 characters long, containing small and tall letters, digits and special characters)",(0,o.kt)("br",null),"\n(",(0,o.kt)("strong",{parentName:"li"},"Please note"),": The installer doesn't check if the passwords are equal so please make sure yourself. Alsoy you should only use a password with characters that are the same on a ",(0,o.kt)("inlineCode",{parentName:"li"},"QWERTY")," keyboard layout because of a bug in Ubuntu. Here is a link to one: ",(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/QWERTY#/media/File:KB_United_States.svg"},"click here"),")"),(0,o.kt)("li",{parentName:"ol"},"Confirm your ",(0,o.kt)("strong",{parentName:"li"},"Storage configuration")),(0,o.kt)("li",{parentName:"ol"},"Set up your ",(0,o.kt)("strong",{parentName:"li"},"Profile"),": recommended as ",(0,o.kt)("strong",{parentName:"li"},"name")," and ",(0,o.kt)("strong",{parentName:"li"},"username")," is ",(0,o.kt)("inlineCode",{parentName:"li"},"ncadmin"),". Recommended as ",(0,o.kt)("strong",{parentName:"li"},"Your server's name")," is ",(0,o.kt)("inlineCode",{parentName:"li"},"nextcloud"),". Also type in a ",(0,o.kt)("strong",{parentName:"li"},"password"),". This can be simple because you will change it later on, again, but remember it! Please note: The installer doesn't check if the passwords are equal so please make sure yourself!"),(0,o.kt)("li",{parentName:"ol"},"Choose to ",(0,o.kt)("strong",{parentName:"li"},"Install OpenSSH server")),(0,o.kt)("li",{parentName:"ol"},"Do ",(0,o.kt)("strong",{parentName:"li"},"not")," install any of ",(0,o.kt)("strong",{parentName:"li"},"Featured Server Snaps")),(0,o.kt)("li",{parentName:"ol"},"Now wait until Ubuntu is installed and you see the button to ",(0,o.kt)("strong",{parentName:"li"},"Reboot"),". Press it to reboot."),(0,o.kt)("li",{parentName:"ol"},"You should now remove the Ubuntu USB-stick if not already done and press ",(0,o.kt)("inlineCode",{parentName:"li"},"[ENTER]")," to continue."),(0,o.kt)("li",{parentName:"ol"},"During the boot process, type in your ",(0,o.kt)("strong",{parentName:"li"},"LUKS passphrase")," and press ",(0,o.kt)("inlineCode",{parentName:"li"},"[Enter]")," to confirm.",(0,o.kt)("br",null),"\n(If it doesn't accept your ",(0,o.kt)("strong",{parentName:"li"},"LUKS passphrase")," and you are sure that you enterd it correctly, most likely you experienced an Ubuntu bug. In this case, try to enter your password as if you had an ",(0,o.kt)("inlineCode",{parentName:"li"},"QWERTY")," keyboard. Here is one example ",(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/QWERTY#/media/File:KB_United_States.svg"},"click here"),(0,o.kt)("br",null),"\nAdditionally, please make sure, that ",(0,o.kt)("inlineCode",{parentName:"li"},"Capslock")," isn't activated.)"),(0,o.kt)("li",{parentName:"ol"},"Now type in your ",(0,o.kt)("strong",{parentName:"li"},"username")," (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"ncadmin"),") and ",(0,o.kt)("strong",{parentName:"li"},"pasword")),(0,o.kt)("li",{parentName:"ol"},"If everything is correct, you will now see an overview of Ubuntu also containing the IPv4-address of your server.")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"You will need the ip-address in the next step!")))))}c.isMDXComponent=!0}}]);