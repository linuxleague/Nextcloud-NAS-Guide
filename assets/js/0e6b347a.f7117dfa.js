"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[504],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7991:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"activate-tls",title:"How to activate TLS?",sidebar_label:"Activate TLS"},c=void 0,s={unversionedId:"activate-tls",id:"activate-tls",title:"How to activate TLS?",description:"You will now activate TLS finally, if all points above are successfully set up. TLS is the protocol that encrypts all traffic to and from your Nextcloud.",source:"@site/docs/activate-tls.md",sourceDirName:".",slug:"/activate-tls",permalink:"/Nextcloud-NAS-Guide/docs/activate-tls",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/activate-tls.md",tags:[],version:"current",frontMatter:{id:"activate-tls",title:"How to activate TLS?",sidebar_label:"Activate TLS"},sidebar:"docs",previous:{title:"Port Forwarding",permalink:"/Nextcloud-NAS-Guide/docs/port-forwarding"},next:{title:"Congratulations",permalink:"/Nextcloud-NAS-Guide/docs/congratulations"}},u=[],p={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You will now activate TLS finally, if all points above are successfully set up. TLS is the protocol that encrypts all traffic to and from your Nextcloud."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Run over CLI:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo bash /var/scripts/menu.sh\n"))),(0,o.kt)("li",{parentName:"ol"},"Choose ",(0,o.kt)("inlineCode",{parentName:"li"},"Server Configuration")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"Activate TLS")),(0,o.kt)("li",{parentName:"ol"},"Choose to install TLS"),(0,o.kt)("li",{parentName:"ol"},"Confirm that you have set up all necessary requirements"),(0,o.kt)("li",{parentName:"ol"},"Enter your ",(0,o.kt)("strong",{parentName:"li"},"Domain")," (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"yourdomain.com"),")"),(0,o.kt)("li",{parentName:"ol"},"Since you've opened Port 80 and 443 manually, you should skip ",(0,o.kt)("inlineCode",{parentName:"li"},"UPnP")," (automatic port forwarding)"),(0,o.kt)("li",{parentName:"ol"},"Wait until everything is set up and enter your mail-address during this step (Your mail-address is needed for contacting you, if a certificate expires)")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Now you should be able to access your Nextcloud on any device by opening ",(0,o.kt)("inlineCode",{parentName:"strong"},"yourdomain.com"),"!")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Advices what to do now")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"It is recommended to activate Two-Factor Authentication for all Nextcloud accounts to further secure them."),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol"},"Install a 2FA provider app from the app store by opening to ",(0,o.kt)("inlineCode",{parentName:"li"},"https://yourdomain.com/settings/apps/security")," with the admin account and searching for ",(0,o.kt)("inlineCode",{parentName:"li"},"two-factor")," by pressing ",(0,o.kt)("inlineCode",{parentName:"li"},"[CTRL] + [F]")," on that site and installing a provider that fits your needs. Recommended is the ",(0,o.kt)("inlineCode",{parentName:"li"},"Two-Factor TOTP Provider")," app."),(0,o.kt)("li",{parentName:"ol"},"Log in with all Nextcloud accounts in a browser (this will run some initial scripts for the account setup)"),(0,o.kt)("li",{parentName:"ol"},"Open ",(0,o.kt)("inlineCode",{parentName:"li"},"https://yourdomain.com/settings/user/security")," with all Nextcloud accounts and activate ",(0,o.kt)("inlineCode",{parentName:"li"},"Two-Factor Authentication")," with your installed 2FA provider. E.g. by activating ",(0,o.kt)("inlineCode",{parentName:"li"},"TOTP"),". And don't forget to generate backup codes for all accounts! (",(0,o.kt)("strong",{parentName:"li"},"Pro-tip"),": you can safe the backupcodes and the TOTP secret in your password manager if you don't want to install an additional app. Otherwise you should note them down manually at a safe place.)")))))}d.isMDXComponent=!0}}]);