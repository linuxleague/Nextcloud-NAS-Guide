(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3921],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9850:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return l},default:function(){return s}});var n=r(2122),o=r(9756),i=(r(7294),r(3905)),a={id:"activate-lets-encrypt",title:"Activate Let's Encrypt",sidebar_label:"Overview"},c={unversionedId:"activate-lets-encrypt",id:"activate-lets-encrypt",isDocsHomePage:!1,title:"Activate Let's Encrypt",description:"In order to access Nextcloud over https with a valid certificate, you will need to do the following things.",source:"@site/docs/activate-lets-encrypt.md",sourceDirName:".",slug:"/activate-lets-encrypt",permalink:"/Nextcloud-NAS-Guide/docs/activate-lets-encrypt",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/activate-lets-encrypt.md",version:"current",sidebar_label:"Overview",frontMatter:{id:"activate-lets-encrypt",title:"Activate Let's Encrypt",sidebar_label:"Overview"},sidebar:"docs",previous:{title:"How to disable User Flows?",permalink:"/Nextcloud-NAS-Guide/docs/user-flows"},next:{title:"What is DDNS?",permalink:"/Nextcloud-NAS-Guide/docs/ddns"}},l=[],u={toc:l};function s(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In order to access Nextcloud over https with a valid certificate, you will need to do the following things."),(0,i.kt)("p",null,"This section should take around ",(0,i.kt)("strong",{parentName:"p"},"15min"),", excluding the time it could take getting a new domain. It covers:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Get a Domain from a supported DDNS-provider and activate DDNS for your Domain"),(0,i.kt)("li",{parentName:"ol"},"Configure DDclient"),(0,i.kt)("li",{parentName:"ol"},"Enable Port Forwarding"),(0,i.kt)("li",{parentName:"ol"},"Activate TLS")))}s.isMDXComponent=!0}}]);