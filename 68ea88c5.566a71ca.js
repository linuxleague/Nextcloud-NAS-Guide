(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),i=(n(0),n(146)),a={id:"smart",title:"How to set up Disk Monitoring?",sidebar_label:"Disk Monitoring"},s={unversionedId:"smart",id:"smart",isDocsHomePage:!1,title:"How to set up Disk Monitoring?",description:"Since disks can fail, you should get notified as soon as possible if a disk error is found, so you should set up disk monitoring.",source:"@site/docs/smart.md",slug:"/smart",permalink:"/Nextcloud-NAS-Guide/docs/smart",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/smart.md",version:"current",sidebar_label:"Disk Monitoring",sidebar:"someSidebar",previous:{title:"How to enable geoblocking?",permalink:"/Nextcloud-NAS-Guide/docs/geoblock"},next:{title:"How to set up Fail2Ban?",permalink:"/Nextcloud-NAS-Guide/docs/fail2ban"}},c=[],l={toc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Since disks can fail, you should get notified as soon as possible if a disk error is found, so you should set up disk monitoring. "),Object(i.b)("p",null,"Please note: this is no alternative to a backup solution!"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Run ",Object(i.b)("inlineCode",{parentName:"li"},"sudo bash /var/scripts/menu.sh")," over CLI"),Object(i.b)("li",{parentName:"ol"},"Choose ",Object(i.b)("inlineCode",{parentName:"li"},"Server Configuration")," -> ",Object(i.b)("inlineCode",{parentName:"li"},"Disk Monitoring")),Object(i.b)("li",{parentName:"ol"},"Choose to install/reinstall ",Object(i.b)("strong",{parentName:"li"},"S.M.A.R.T Monitoring")),Object(i.b)("li",{parentName:"ol"},"Choose ",Object(i.b)("strong",{parentName:"li"},"Directly")," to get informed instantly if a disk error was found")))}u.isMDXComponent=!0},146:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,f=p["".concat(a,".").concat(b)]||p[b]||d[b]||i;return n?o.a.createElement(f,s(s({ref:t},l),{},{components:n})):o.a.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);