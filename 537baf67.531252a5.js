(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{146:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),f=n,b=s["".concat(i,".").concat(f)]||s[f]||d[f]||a;return r?o.a.createElement(b,c(c({ref:t},u),{},{components:r})):o.a.createElement(b,c({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},95:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),a=(r(0),r(146)),i={id:"activate-lets-encrypt",title:"Activate Let's Encrypt",sidebar_label:"Overview"},c={unversionedId:"activate-lets-encrypt",id:"activate-lets-encrypt",isDocsHomePage:!1,title:"Activate Let's Encrypt",description:"In order to access Nextcloud over https with a valid certificate, you will need to do the following things.",source:"@site/docs/activate-lets-encrypt.md",slug:"/activate-lets-encrypt",permalink:"/Nextcloud-NAS-Guide/docs/activate-lets-encrypt",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/activate-lets-encrypt.md",version:"current",sidebar_label:"Overview",sidebar:"someSidebar",previous:{title:"How to disable User Flows?",permalink:"/Nextcloud-NAS-Guide/docs/user-flows"},next:{title:"What is DDNS?",permalink:"/Nextcloud-NAS-Guide/docs/ddns"}},l=[],u={toc:l};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In order to access Nextcloud over https with a valid certificate, you will need to do the following things."),Object(a.b)("p",null,"This section should take around ",Object(a.b)("strong",{parentName:"p"},"15min"),", excluding the time it could take getting a new domain. It covers:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Get a Domain from a supported DDNS-provider and activate DDNS for your Domain"),Object(a.b)("li",{parentName:"ol"},"Configure DDclient"),Object(a.b)("li",{parentName:"ol"},"Enable Port Forwarding"),Object(a.b)("li",{parentName:"ol"},"Activate TLS")))}p.isMDXComponent=!0}}]);