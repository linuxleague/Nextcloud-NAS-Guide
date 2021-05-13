(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9244],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},476:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return i},toc:function(){return l},default:function(){return c}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),s={id:"create-users",title:"How to create SMB-users and Nextcloud users in one go?",sidebar_label:"Create SMB-users and Nextcloud users"},i={unversionedId:"create-users",id:"create-users",isDocsHomePage:!1,title:"How to create SMB-users and Nextcloud users in one go?",description:"The big advantage using this method is, that the Nextcloud and SMB-user will have the same credentials for now. Unfortunately if it gets changed in Nextcloud, it will differ from the old SMB-user password, since they are not synchronized.",source:"@site/docs/create-users.md",sourceDirName:".",slug:"/create-users",permalink:"/Nextcloud-NAS-Guide/docs/create-users",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/create-users.md",version:"current",sidebar_label:"Create SMB-users and Nextcloud users",frontMatter:{id:"create-users",title:"How to create SMB-users and Nextcloud users in one go?",sidebar_label:"Create SMB-users and Nextcloud users"},sidebar:"docs",previous:{title:"How to run the SMB-server script?",permalink:"/Nextcloud-NAS-Guide/docs/run-smb-server"},next:{title:"How to create SMB-shares and mount it to Nextcloud in one go?",permalink:"/Nextcloud-NAS-Guide/docs/create-shares"}},l=[],u={toc:l};function c(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The big advantage using this method is, that the Nextcloud and SMB-user will have the same credentials for now. Unfortunately if it gets changed in Nextcloud, it will differ from the old SMB-user password, since they are not synchronized."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"First you should make a list which users you will need and create all of them using the following method:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"From the ",(0,o.kt)("inlineCode",{parentName:"li"},"SMB-server Main Menu")," select ",(0,o.kt)("inlineCode",{parentName:"li"},"Open the SMB-user Menu")),(0,o.kt)("li",{parentName:"ol"},"Choose ",(0,o.kt)("inlineCode",{parentName:"li"},"Add a SMB-user")),(0,o.kt)("li",{parentName:"ol"},"Enter the ",(0,o.kt)("strong",{parentName:"li"},"name")," of the user that you want to create. Recommended is to just use the forename of that person."),(0,o.kt)("li",{parentName:"ol"},"Type in a difficult ",(0,o.kt)("strong",{parentName:"li"},"password")," for that user and store it at a safe place",(0,o.kt)("br",null),"\n(Difficult password means at least 16 characters long, containing small and tall letters, digits and special characters)"),(0,o.kt)("li",{parentName:"ol"},"The user should be successful created now"),(0,o.kt)("li",{parentName:"ol"},"Choose to ",(0,o.kt)("strong",{parentName:"li"},"create")," a Nextcloud user with the ",(0,o.kt)("strong",{parentName:"li"},"same credentials")),(0,o.kt)("li",{parentName:"ol"},"A Nextcloud user should be successfully created now"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Confirm")," that you want to add a mail address to this user"),(0,o.kt)("li",{parentName:"ol"},"Type in a valid mail-address for this user (will be used for resetting the password, activity mails, etc.)"),(0,o.kt)("li",{parentName:"ol"},"It should report now that the mail-address for this user was set correctly!")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Now repeat that procedure until all users from your list are created")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you are done, please don't close the script! You will need it again in the next step!"))))}c.isMDXComponent=!0}}]);