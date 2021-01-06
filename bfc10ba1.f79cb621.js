(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{129:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),i=(n(0),n(149)),a={id:"geoblock",title:"How to enable geoblocking?",sidebar_label:"Geoblocking"},c={unversionedId:"geoblock",id:"geoblock",isDocsHomePage:!1,title:"How to enable geoblocking?",description:"In order to improve security, you can allow access to your webserver only from specific countries or continents.",source:"@site/docs/geoblock.md",slug:"/geoblock",permalink:"/Nextcloud-NAS-Guide/docs/geoblock",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/geoblock.md",version:"current",sidebar_label:"Geoblocking",sidebar:"docs",previous:{title:"Security and Automation",permalink:"/Nextcloud-NAS-Guide/docs/security-automation"},next:{title:"How to set up Disk Monitoring?",permalink:"/Nextcloud-NAS-Guide/docs/smart"}},l=[],s={toc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In order to improve security, you can allow access to your webserver only from specific countries or continents."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Power On")," your server (if not already done)"),Object(i.b)("li",{parentName:"ol"},"Connect from a PC in the same network to your server over SSH (if not already done; if you cannot connect because the SSH fingerprint changed, type in ",Object(i.b)("inlineCode",{parentName:"li"},"ssh-keygen -R ip-address")," so e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"ssh-keygen -R 192.168.178.144")," to remove the old fingerprint and try again to connect to your server over SSH.)"),Object(i.b)("li",{parentName:"ol"},"Run ",Object(i.b)("inlineCode",{parentName:"li"},"sudo rm /var/scripts/activate-tls.sh")," over CLI to delete the activate-tls script (you will run it at the end via a Menu, so the local script isn't needed)"),Object(i.b)("li",{parentName:"ol"},"Run ",Object(i.b)("inlineCode",{parentName:"li"},"sudo bash /var/scripts/menu.sh")," over CLI"),Object(i.b)("li",{parentName:"ol"},"Choose ",Object(i.b)("inlineCode",{parentName:"li"},"Server Configuration")," -> ",Object(i.b)("inlineCode",{parentName:"li"},"GeoBlock")),Object(i.b)("li",{parentName:"ol"},"Choose to install/reinstall Geoblock"),Object(i.b)("li",{parentName:"ol"},"Select whatever countries/continents you would like to allow the access to your server. All other will be blocked, based on the ip-address. (At least your own country should get selected to make this work.)")))}u.isMDXComponent=!0},149:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(a,".").concat(d)]||p[d]||b[d]||i;return n?o.a.createElement(m,c(c({ref:t},s),{},{components:n})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);