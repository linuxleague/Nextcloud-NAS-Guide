(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4090],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5646:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c},default:function(){return s}});var n=r(2122),o=r(9756),i=(r(7294),r(3905)),a={id:"previewgenerator",title:"How to install the Previewgenerator?",sidebar_label:"Previewgenerator"},l={unversionedId:"previewgenerator",id:"previewgenerator",isDocsHomePage:!1,title:"How to install the Previewgenerator?",description:"In order to speed up preview loading and the general feel of Nextcloud while opening folders with many pictures, you should set up the previewgenerator, which will pre-generate previews to make preview-loading faster.",source:"@site/docs/previewgenerator.md",sourceDirName:".",slug:"/previewgenerator",permalink:"/Nextcloud-NAS-Guide/docs/previewgenerator",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/previewgenerator.md",version:"current",sidebar_label:"Previewgenerator",frontMatter:{id:"previewgenerator",title:"How to install the Previewgenerator?",sidebar_label:"Previewgenerator"},sidebar:"docs",previous:{title:"Customize Nextcloud",permalink:"/Nextcloud-NAS-Guide/docs/customize-nextcloud"},next:{title:"How to configure the CookieLifetime?",permalink:"/Nextcloud-NAS-Guide/docs/cookielifetime"}},c=[],p={toc:c};function s(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In order to speed up preview loading and the general feel of Nextcloud while opening folders with many pictures, you should set up the previewgenerator, which will pre-generate previews to make preview-loading faster."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Run over CLI:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo bash /var/scripts/menu.sh\n"))),(0,i.kt)("li",{parentName:"ol"},"Choose ",(0,i.kt)("inlineCode",{parentName:"li"},"Additional Apps")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"PreviewGenerator")),(0,i.kt)("li",{parentName:"ol"},"Choose to install/reinstall the Preview Generator"),(0,i.kt)("li",{parentName:"ol"},"Choose to ",(0,i.kt)("strong",{parentName:"li"},"not")," install imagick"),(0,i.kt)("li",{parentName:"ol"},"Deselect any format you don't want to have previews for (Recommended is to ",(0,i.kt)("strong",{parentName:"li"},"deselect MarkDown & TXT"),")"),(0,i.kt)("li",{parentName:"ol"},"Wait until everything is set up"),(0,i.kt)("li",{parentName:"ol"},"Choose to ",(0,i.kt)("strong",{parentName:"li"},"not")," use a specific Nextcloud user for preview generation"),(0,i.kt)("li",{parentName:"ol"},"Wait until everything is scanned. This can take a long time, please be patient! (If it just takes too long and doesn't finish, you can cancel by pressing ",(0,i.kt)("inlineCode",{parentName:"li"},"ctrl + c"),". You could then run this script after the initial setup is done.)")))}s.isMDXComponent=!0}}]);