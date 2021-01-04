(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{133:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),a=(r(0),r(146)),i={id:"smtp-mail",title:"How to set up SMTP Mail to enable your server to send mails?",sidebar_label:"SMTP Mail"},l={unversionedId:"smtp-mail",id:"smtp-mail",isDocsHomePage:!1,title:"How to set up SMTP Mail to enable your server to send mails?",description:"In order to get notified by mail for backups, disk errors and such, you should configure your server to send mails.",source:"@site/docs/smtp-mail.md",slug:"/smtp-mail",permalink:"/Nextcloud-NAS-Guide/docs/smtp-mail",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/smtp-mail.md",version:"current",sidebar_label:"SMTP Mail",sidebar:"someSidebar",previous:{title:"Backup",permalink:"/Nextcloud-NAS-Guide/docs/backup"},next:{title:"How to download the Not-supported Menu?",permalink:"/Nextcloud-NAS-Guide/docs/not-supported"}},c=[],s={toc:c};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In order to get notified by mail for backups, disk errors and such, you should configure your server to send mails."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Before you can start, please get a mail account that your server will use to send mails.")),Object(a.b)("p",null,"For german users is recommended: ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://signup.mail.de/de/"}),"mail.de")," and ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://posteo.de/registrierung"}),"posteo.org")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Please inspect your mail providers documents how to connect over SMTP before continuing!")),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Run ",Object(a.b)("inlineCode",{parentName:"li"},"sudo bash /var/scripts/menu.sh")," over CLI"),Object(a.b)("li",{parentName:"ol"},"Choose ",Object(a.b)("inlineCode",{parentName:"li"},"Server Configuration")," -> ",Object(a.b)("inlineCode",{parentName:"li"},"SMTP Mail")),Object(a.b)("li",{parentName:"ol"},"Choose to install/reinstall SMTP Mail"),Object(a.b)("li",{parentName:"ol"},"Enter the ",Object(a.b)("strong",{parentName:"li"},"SMTP URL")," (e.g. ",Object(a.b)("inlineCode",{parentName:"li"},"smtp.mail.de"),")"),Object(a.b)("li",{parentName:"ol"},"Choose the ",Object(a.b)("strong",{parentName:"li"},"encryption protocol")," (e.g. ",Object(a.b)("inlineCode",{parentName:"li"},"SSL"),")"),Object(a.b)("li",{parentName:"ol"},"Choose that you want to use the ",Object(a.b)("strong",{parentName:"li"},"default port")," (the default port should be correct most of the time)"),Object(a.b)("li",{parentName:"ol"},"Most mail servers need credentials, so answer that your mail server ",Object(a.b)("strong",{parentName:"li"},"needs credentials")),Object(a.b)("li",{parentName:"ol"},"Enter your ",Object(a.b)("strong",{parentName:"li"},"SMTP username")," (the ",Object(a.b)("strong",{parentName:"li"},"mail account")," that will be used to send mails e.g. ",Object(a.b)("inlineCode",{parentName:"li"},"server@mail.de"),")"),Object(a.b)("li",{parentName:"ol"},"Enter the ",Object(a.b)("strong",{parentName:"li"},"password")," for your mail account"),Object(a.b)("li",{parentName:"ol"},"Enter the ",Object(a.b)("strong",{parentName:"li"},"recipient")," mail-address that will receive all mails that are sent by the server (e.g. your main mail-address)"),Object(a.b)("li",{parentName:"ol"},"Confirm your settings")),Object(a.b)("p",null,"If all settings were entered correctly, you should receive a testmail which proves that it was setup correctly."))}p.isMDXComponent=!0},146:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||a;return r?o.a.createElement(d,l(l({ref:t},s),{},{components:r})):o.a.createElement(d,l({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);