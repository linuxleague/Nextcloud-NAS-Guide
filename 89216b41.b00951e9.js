(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(3),i=n(7),r=(n(0),n(146)),o={id:"bitwarden-rs",title:"How to install Bitwarden RS?",sidebar_label:"Bitwarden RS"},l={unversionedId:"bitwarden-rs",id:"bitwarden-rs",isDocsHomePage:!1,title:"How to install Bitwarden RS?",description:"Bitwarden RS is an open Source but unofficial Bitwarden Server Password Manager implementation in Rust. It is much more lightweight than the official Bitwarden Server and runs nearly on any Hardware. Mostly because of this, it is recommended over the official Bitwarden Server. Of course you will need to trust the maintainer Dani Garcia when using Bitwarden RS. Installing Bitwarden RS enables you to manage all your passwords in the Browser on a website and will let you use all Bitwarden applications which exist for almost any platform.",source:"@site/docs/bitwarden-rs.md",slug:"/bitwarden-rs",permalink:"/Nextcloud-NAS-Guide/docs/bitwarden-rs",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/bitwarden-rs.md",version:"current",sidebar_label:"Bitwarden RS",sidebar:"someSidebar",previous:{title:"How to install the High-Performance backend for Nextcloud Talk?",permalink:"/Nextcloud-NAS-Guide/docs/hpb"},next:{title:"How to install Pi-hole?",permalink:"/Nextcloud-NAS-Guide/docs/pi-hole"}},s=[],c={toc:s};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Bitwarden RS is an open Source but unofficial Bitwarden Server Password Manager implementation in Rust. It is much more lightweight than the official Bitwarden Server and runs nearly on any Hardware. Mostly because of this, it is recommended over the official Bitwarden Server. Of course you will need to trust the maintainer Dani Garcia when using Bitwarden RS. Installing Bitwarden RS enables you to manage all your passwords in the Browser on a website and will let you use all Bitwarden applications which exist for almost any platform."),Object(r.b)("h4",{id:"preparation"},"Preparation"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Create a subdomain like ",Object(r.b)("inlineCode",{parentName:"li"},"bw.yourdomain.com")," and edit the DNS settings for this subdomain to point to your Nextcloud Domain. (",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"./subdomain-cname"}),"instructions"),")")),Object(r.b)("h4",{id:"installation"},"Installation"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Run ",Object(r.b)("inlineCode",{parentName:"li"},"sudo bash /var/scripts/menu.sh")," over CLI"),Object(r.b)("li",{parentName:"ol"},"Choose ",Object(r.b)("inlineCode",{parentName:"li"},"Additional Apps")," -> ",Object(r.b)("inlineCode",{parentName:"li"},"Bitwarden")," -> ",Object(r.b)("inlineCode",{parentName:"li"},"Bitwarden-RS")),Object(r.b)("li",{parentName:"ol"},"Choose to install ",Object(r.b)("inlineCode",{parentName:"li"},"Bitwarden RS")),Object(r.b)("li",{parentName:"ol"},"Accept the risks and confirm that if you are sure to install ",Object(r.b)("inlineCode",{parentName:"li"},"Bitwarden RS")),Object(r.b)("li",{parentName:"ol"},"Type in the ",Object(r.b)("strong",{parentName:"li"},"subdomain")," that you've created and that points to your Nextcloud domain like ",Object(r.b)("inlineCode",{parentName:"li"},"bw.yourdomain.com")," and confirm it"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Don't")," use ",Object(r.b)("inlineCode",{parentName:"li"},"UPNP")," to open the required ports (since you've already done this for your Nextcloud)"),Object(r.b)("li",{parentName:"ol"},"Wait until everything is installed"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Note down")," the password for the admin panel that gets shown to you"),Object(r.b)("li",{parentName:"ol"},"Confirm that you have the admin password now.")),Object(r.b)("p",null,"Bitwarden RS should be successfully installed by now."),Object(r.b)("h4",{id:"what-to-do-now"},"What to do now?"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"You should now visit ",Object(r.b)("inlineCode",{parentName:"li"},"https://bw.yourdomain.com/admin")," to set up the ",Object(r.b)("strong",{parentName:"li"},"SMTP settings")," for Bitwarden RS (so that Bitwarden can send mails, too.)"),Object(r.b)("li",{parentName:"ul"},"When you've successfully configured the SMTP settings, you should visit ",Object(r.b)("inlineCode",{parentName:"li"},"https://bw.yourdomain.com/admin/users/overview")," to invite a new user via mail-address. And you will be able to create an account using the link that was send to you."),Object(r.b)("li",{parentName:"ul"},"After you are done creating all needed accounts, you should disable the admin panel (to make it impossible for an attacker to log into the admin panel):",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Run ",Object(r.b)("inlineCode",{parentName:"li"},"sudo bash /var/scripts/menu.sh")," over CLI"),Object(r.b)("li",{parentName:"ul"},"Choose ",Object(r.b)("inlineCode",{parentName:"li"},"Additional Apps")," -> ",Object(r.b)("inlineCode",{parentName:"li"},"Bitwarden")," -> ",Object(r.b)("inlineCode",{parentName:"li"},"Bitwarden-RS Admin-panel")),Object(r.b)("li",{parentName:"ul"},"Choose ",Object(r.b)("inlineCode",{parentName:"li"},"Yes (Disable the admin-panel)")),Object(r.b)("li",{parentName:"ul"},"Wait until it reports that the admin panel was disabled"))),Object(r.b)("li",{parentName:"ul"},"After creating the Bitwarden accounts, you should activate two-factor authentication by visiting ",Object(r.b)("inlineCode",{parentName:"li"},"https://bw.yourdomain.com/#/settings/two-factor")," with each account.")),Object(r.b)("p",null,"Now, Bitwarden RS is finally ready and secured as good as possible!"))}d.isMDXComponent=!0},146:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),d=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),p=a,m=u["".concat(o,".").concat(p)]||u[p]||b[p]||r;return n?i.a.createElement(m,l(l({ref:t},c),{},{components:n})):i.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);