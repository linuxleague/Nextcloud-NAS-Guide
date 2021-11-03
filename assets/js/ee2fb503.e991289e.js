"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7882],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||a;return r?n.createElement(h,i(i({ref:t},d),{},{components:r})):n.createElement(h,i({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2326:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={id:"readonly-root",title:"How to make the root directory in Nextcloud read only for all users?",sidebar_label:"Read only root directory in Nextcloud"},s=void 0,c={unversionedId:"readonly-root",id:"readonly-root",isDocsHomePage:!1,title:"How to make the root directory in Nextcloud read only for all users?",description:"Disclaimer! This isn't up to date anymore and also no longer visible in the sidebar!",source:"@site/docs/readonly-root.md",sourceDirName:".",slug:"/readonly-root",permalink:"/Nextcloud-NAS-Guide/docs/readonly-root",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/readonly-root.md",tags:[],version:"current",frontMatter:{id:"readonly-root",title:"How to make the root directory in Nextcloud read only for all users?",sidebar_label:"Read only root directory in Nextcloud"}},d=[{value:"You should now remove the SMB-share again since it is not needed any longer:",id:"you-should-now-remove-the-smb-share-again-since-it-is-not-needed-any-longer",children:[],level:4}],u={toc:d};function p(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Disclaimer! This isn't up to date anymore and also no longer visible in the sidebar!"),(0,a.kt)("p",null,"In order to prevent user from creating any files outside their user folders, which are located on the external data SSD/HDD and now mounted to Nextcloud, you can make the Nextcloud root directory read only for all users. (This is no longer recommended but still here for having it written down.)"),(0,a.kt)("p",null,"Here is how to do this:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"From the ",(0,a.kt)("strong",{parentName:"li"},"SMB-server Main Menu")," select ",(0,a.kt)("inlineCode",{parentName:"li"},"Open the SMB-share Menu")),(0,a.kt)("li",{parentName:"ol"},"Choose ",(0,a.kt)("inlineCode",{parentName:"li"},"Create a SMB-share")),(0,a.kt)("li",{parentName:"ol"},"Type in an empty or not existing directory that you will share, like ",(0,a.kt)("inlineCode",{parentName:"li"},"/mnt/data/your data folder/root")," (based on the example above) and choose to create that directory"),(0,a.kt)("li",{parentName:"ol"},"Type in ",(0,a.kt)("inlineCode",{parentName:"li"},"temporary")," as ",(0,a.kt)("strong",{parentName:"li"},"Share name")),(0,a.kt)("li",{parentName:"ol"},"Now ",(0,a.kt)("strong",{parentName:"li"},"select at least one SMB-user")," that will get ",(0,a.kt)("strong",{parentName:"li"},"access")," to the share for now"),(0,a.kt)("li",{parentName:"ol"},"Now select that the share shall be ",(0,a.kt)("strong",{parentName:"li"},"read only")),(0,a.kt)("li",{parentName:"ol"},"After restarting Samba, the SMB-share should be successfully created!"),(0,a.kt)("li",{parentName:"ol"},"Select that you ",(0,a.kt)("strong",{parentName:"li"},"want to mount")," the same directory to Nextcloud"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"You should now change the name of your directory for the usage in Nextcloud. You should change it to ",(0,a.kt)("inlineCode",{parentName:"strong"},"/"))," (one forward-slash)"),(0,a.kt)("li",{parentName:"ol"},"Now everything should get set up automatically"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Don't")," enable Inotify (and don't exit the script afterwards!)")),(0,a.kt)("h4",{id:"you-should-now-remove-the-smb-share-again-since-it-is-not-needed-any-longer"},"You should now remove the SMB-share again since it is not needed any longer:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Choose to ",(0,a.kt)("inlineCode",{parentName:"li"},"Delete SMB-shares")," from the same still open ",(0,a.kt)("inlineCode",{parentName:"li"},"SMB-share Menu")),(0,a.kt)("li",{parentName:"ol"},"Select the just created share with name ",(0,a.kt)("inlineCode",{parentName:"li"},"temporary")),(0,a.kt)("li",{parentName:"ol"},"Press ",(0,a.kt)("inlineCode",{parentName:"li"},"[Enter]")," to delete it"),(0,a.kt)("li",{parentName:"ol"},"exit the SMB-server script by selecting ",(0,a.kt)("inlineCode",{parentName:"li"},"Return")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"Exit"))),(0,a.kt)("p",null,"Now, the root directory should be read only for all users!"))}p.isMDXComponent=!0}}]);