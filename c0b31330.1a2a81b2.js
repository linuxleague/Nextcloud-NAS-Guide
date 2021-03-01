(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{152:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),a=(r(0),r(180)),c={id:"extract",title:"How to install Extract for Nextcloud?",sidebar_label:"Extract"},i={unversionedId:"extract",id:"extract",isDocsHomePage:!1,title:"How to install Extract for Nextcloud?",description:"The Extract app for Nextcloud enables you to extract archives (like .zip and .tar files) inside your Nextcloud.",source:"@site/docs/extract.md",slug:"/extract",permalink:"/Nextcloud-NAS-Guide/docs/extract",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/extract.md",version:"current",sidebar_label:"Extract",sidebar:"docs",previous:{title:"How to install Pico CMS for Nextcloud?",permalink:"/Nextcloud-NAS-Guide/docs/pico"},next:{title:"How to install Bitwarden RS?",permalink:"/Nextcloud-NAS-Guide/docs/bitwarden-rs"}},l=[],u={toc:l};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The Extract app for Nextcloud enables you to extract archives (like ",Object(a.b)("inlineCode",{parentName:"p"},".zip")," and ",Object(a.b)("inlineCode",{parentName:"p"},".tar")," files) inside your Nextcloud."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Run over CLI:",Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre",className:"language-shell"},"sudo bash /var/scripts/menu.sh\n"))),Object(a.b)("li",{parentName:"ol"},"Choose ",Object(a.b)("inlineCode",{parentName:"li"},"Additional Apps")," -> ",Object(a.b)("inlineCode",{parentName:"li"},"Extract")),Object(a.b)("li",{parentName:"ol"},"Choose to install/reinstall Extract for Nextcloud"),Object(a.b)("li",{parentName:"ol"},"Wait until it reports that it was successfully installed")),Object(a.b)("p",null,"Now you should be able to extract archives inside your Nextcloud."))}p.isMDXComponent=!0},180:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),b=n,f=s["".concat(c,".").concat(b)]||s[b]||d[b]||a;return r?o.a.createElement(f,i(i({ref:t},u),{},{components:r})):o.a.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);