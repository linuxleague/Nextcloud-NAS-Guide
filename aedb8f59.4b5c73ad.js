(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{122:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),o=(r(0),r(146)),l={id:"clamav",title:"How to install ClamAV?",sidebar_label:"ClamAV"},i={unversionedId:"clamav",id:"clamav",isDocsHomePage:!1,title:"How to install ClamAV?",description:"In order to protect your files from malware, you should set up ClamAV which will detect malware and scan your files weekly for malware. You will get notified if something was found.",source:"@site/docs/clamav.md",slug:"/clamav",permalink:"/Nextcloud-NAS-Guide/docs/clamav",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/clamav.md",version:"current",sidebar_label:"ClamAV",sidebar:"someSidebar",previous:{title:"How to set up Fail2Ban?",permalink:"/Nextcloud-NAS-Guide/docs/fail2ban"},next:{title:"How to enable automatic updates?",permalink:"/Nextcloud-NAS-Guide/docs/automatic-updates"}},c=[],u={toc:c};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In order to protect your files from malware, you should set up ClamAV which will detect malware and scan your files weekly for malware. You will get notified if something was found."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Run ",Object(o.b)("inlineCode",{parentName:"li"},"sudo bash /var/scripts/menu.sh")," over CLI"),Object(o.b)("li",{parentName:"ol"},"Choose ",Object(o.b)("inlineCode",{parentName:"li"},"ClamAV")),Object(o.b)("li",{parentName:"ol"},"Choose to install/reinstall ClamAV"),Object(o.b)("li",{parentName:"ol"},"Wait until it is installed and the service was started"),Object(o.b)("li",{parentName:"ol"},"Choose to set up a ",Object(o.b)("strong",{parentName:"li"},"weekly full scan")," of all your files (the scan will run on sundays starting at 10:00 and for 12h max)"),Object(o.b)("li",{parentName:"ol"},"Choose what shall get done with found files. ",Object(o.b)("strong",{parentName:"li"},"Only log")," is recommended.")),Object(o.b)("p",null,"You've successfully made your server a bit more secure!"))}s.isMDXComponent=!0},146:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(r),d=n,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return r?a.a.createElement(f,i(i({ref:t},u),{},{components:r})):a.a.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);