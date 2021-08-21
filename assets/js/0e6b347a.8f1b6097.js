(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[504],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(f,r(r({ref:t},u),{},{components:n})):a.createElement(f,r({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6110:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var a=n(2122),o=n(9756),i=(n(7294),n(3905)),r={id:"activate-tls",title:"How to activate TLS?",sidebar_label:"Activate TLS"},l=void 0,c={unversionedId:"activate-tls",id:"activate-tls",isDocsHomePage:!1,title:"How to activate TLS?",description:"You will now activate TLS finally, if all points above are successfully set up. TLS is the protocol that encrypts all traffic to and from your Nextcloud.",source:"@site/docs/activate-tls.md",sourceDirName:".",slug:"/activate-tls",permalink:"/Nextcloud-NAS-Guide/docs/activate-tls",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/activate-tls.md",version:"current",frontMatter:{id:"activate-tls",title:"How to activate TLS?",sidebar_label:"Activate TLS"},sidebar:"docs",previous:{title:"Port Forwarding",permalink:"/Nextcloud-NAS-Guide/docs/port-forwarding"},next:{title:"Congratulations",permalink:"/Nextcloud-NAS-Guide/docs/congratulations"}},s=[],u={toc:s};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You will now activate TLS finally, if all points above are successfully set up. TLS is the protocol that encrypts all traffic to and from your Nextcloud."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Run over CLI:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo bash /var/scripts/menu.sh\n"))),(0,i.kt)("li",{parentName:"ol"},"Choose ",(0,i.kt)("inlineCode",{parentName:"li"},"Server Configuration")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"Activate TLS")),(0,i.kt)("li",{parentName:"ol"},"Choose to install TLS"),(0,i.kt)("li",{parentName:"ol"},"Confirm that you have set up all necessary requirements"),(0,i.kt)("li",{parentName:"ol"},"Enter your ",(0,i.kt)("strong",{parentName:"li"},"Domain")," (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"yourdomain.com"),")"),(0,i.kt)("li",{parentName:"ol"},"Since you've opened Port 80 and 443 manually, you should skip ",(0,i.kt)("inlineCode",{parentName:"li"},"UPnP")," (automatic port forwarding)"),(0,i.kt)("li",{parentName:"ol"},"Wait until everything is set up and enter your mail-address during this step (Your mail-address is needed for contacting you, if a certificate expires)")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Now you should be able to access your Nextcloud on any device by opening ",(0,i.kt)("inlineCode",{parentName:"strong"},"yourdomain.com"),"!")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Advices what to do now")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"It is recommended to activate Two-Factor Authentication for all Nextcloud accounts to further secure them."),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"Install a 2FA provider app from the app store by opening to ",(0,i.kt)("inlineCode",{parentName:"li"},"https://yourdomain.com/settings/apps/security")," with the admin account and searching for ",(0,i.kt)("inlineCode",{parentName:"li"},"two-factor")," by pressing ",(0,i.kt)("inlineCode",{parentName:"li"},"[CTRL] + [F]")," on that site and installing a provider that fits your needs. Recommended is the ",(0,i.kt)("inlineCode",{parentName:"li"},"Two-Factor Authentication via Nextcloud notification")," app."),(0,i.kt)("li",{parentName:"ol"},"Log in with all Nextcloud accounts in a browser (this will run some initial scripts for the account setup)"),(0,i.kt)("li",{parentName:"ol"},"Log in with a mobile phone using the Android or iOS app so that all accounts are logged in at least once. (You can also log in using the Desktop client.)"),(0,i.kt)("li",{parentName:"ol"},"Open ",(0,i.kt)("inlineCode",{parentName:"li"},"https://yourdomain.com/settings/user/security")," with all Nextcloud accounts and activate ",(0,i.kt)("inlineCode",{parentName:"li"},"Two-Factor Authentication")," with your installed 2FA provider. E.g. by activating ",(0,i.kt)("inlineCode",{parentName:"li"},"Use two-factor authentication via Nextcloud notifications"),". And don't forget to generate backup codes for all accounts!"),(0,i.kt)("li",{parentName:"ol"},"If you've chosen to use two-factor authentication via Nextcloud notifications, your accounts will now need to confirm a new login using a device where they are already logged in with the same account (or using the backup codes).")))))}p.isMDXComponent=!0}}]);