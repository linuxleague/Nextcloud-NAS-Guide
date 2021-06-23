(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8362],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,p=d["".concat(c,".").concat(m)]||d[m]||f[m]||r;return n?o.createElement(p,a(a({ref:t},u),{},{components:n})):o.createElement(p,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<r;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3674:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return f}});var o=n(2122),i=n(9756),r=(n(7294),n(3905)),a={id:"onlyoffice",title:"How to install OnlyOffice Documentserver?",sidebar_label:"OnlyOffice"},l=void 0,c={unversionedId:"onlyoffice",id:"onlyoffice",isDocsHomePage:!1,title:"How to install OnlyOffice Documentserver?",description:"OnlyOffice Documentserver is a Nextcloud integration that features real-time CO-editing of Office files in your Nextcloud in the Browser. Although Collabora Online is also an option, OnlyOffice is recommended because it features a UI similar to Microsoft Office and has better compatibility with Microsoft Office files. It also doesn't need as much ressources as Collabora Online.",source:"@site/docs/onlyoffice.md",sourceDirName:".",slug:"/onlyoffice",permalink:"/Nextcloud-NAS-Guide/docs/onlyoffice",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/onlyoffice.md",version:"current",frontMatter:{id:"onlyoffice",title:"How to install OnlyOffice Documentserver?",sidebar_label:"OnlyOffice"},sidebar:"docs",previous:{title:"Monitor link shares",permalink:"/Nextcloud-NAS-Guide/docs/share-link-audit"},next:{title:"High-Performance backend for Nextcloud Talk",permalink:"/Nextcloud-NAS-Guide/docs/hpb"}},s=[{value:"Preparation",id:"preparation",children:[]},{value:"Installation",id:"installation",children:[]}],u={toc:s};function f(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"OnlyOffice Documentserver is a Nextcloud integration that features real-time CO-editing of Office files in your Nextcloud in the Browser. Although Collabora Online is also an option, OnlyOffice is recommended because it features a UI similar to Microsoft Office and has better compatibility with Microsoft Office files. It also doesn't need as much ressources as Collabora Online."),(0,r.kt)("h3",{id:"preparation"},"Preparation"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a subdomain like ",(0,r.kt)("inlineCode",{parentName:"li"},"office.yourdomain.com")," and edit the DNS settings for this subdomain to point to your Nextcloud Domain. (",(0,r.kt)("a",{parentName:"li",href:"./subdomain-cname"},"instructions"),")")),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Run over CLI:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo bash /var/scripts/menu.sh\n"))),(0,r.kt)("li",{parentName:"ol"},"Choose ",(0,r.kt)("inlineCode",{parentName:"li"},"Additional Apps")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"Documentserver")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"OnlyOffice (Docker)")),(0,r.kt)("li",{parentName:"ol"},"Choose to install ",(0,r.kt)("inlineCode",{parentName:"li"},"OnlyOffice (Docker)")),(0,r.kt)("li",{parentName:"ol"},"Type in the ",(0,r.kt)("strong",{parentName:"li"},"subdomain")," that you've created and that points to your Nextcloud domain like ",(0,r.kt)("inlineCode",{parentName:"li"},"office.yourdomain.com")," and confirm it"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Don't")," use ",(0,r.kt)("inlineCode",{parentName:"li"},"UPNP")," to open the required ports (since you've already done this for your Nextcloud)"),(0,r.kt)("li",{parentName:"ol"},"Wait until everything is installed and it reports a successful installation")),(0,r.kt)("p",null,"Now, you should be able to create, open and edit Office files in Nextcloud in the Browser using OnlyOffice!"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You should open ",(0,r.kt)("inlineCode",{parentName:"p"},"https://yourdomain.com/settings/admin/onlyoffice")," with your Nextcloud admin account to adjust some OnlyOffice settings. E.g. it is recommended to enable the option to ",(0,r.kt)("inlineCode",{parentName:"p"},"Keep intermediate versions when editing")," but also you can choose to make OnlyOffice the default for many file extensions and more."))))}f.isMDXComponent=!0}}]);