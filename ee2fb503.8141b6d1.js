(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{167:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return d}));var n=r(3),o=r(7),a=(r(0),r(177)),l={id:"readonly-root",title:"How to make the root directory in Nextcloud read only for all users?",sidebar_label:"Read only root directory in Nextcloud"},i={unversionedId:"readonly-root",id:"readonly-root",isDocsHomePage:!1,title:"How to make the root directory in Nextcloud read only for all users?",description:"In order to prevent user from creating any files outside their user folders, which are located on the external data SSD/HDD and now mounted to Nextcloud, you can make the Nextcloud root directory read only for all users. (This is no longer recommended but still here for having it written down.)",source:"@site/docs/readonly-root.md",slug:"/readonly-root",permalink:"/Nextcloud-NAS-Guide/docs/readonly-root",editUrl:"https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/docs/readonly-root.md",version:"current",sidebar_label:"Read only root directory in Nextcloud",sidebar:"docs",previous:{title:"How to restore a Backup on a different server or upgrade Ubuntu?",permalink:"/Nextcloud-NAS-Guide/docs/restore-backup"}},c=[],s={toc:c};function d(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In order to prevent user from creating any files outside their user folders, which are located on the external data SSD/HDD and now mounted to Nextcloud, you can make the Nextcloud root directory read only for all users. (This is no longer recommended but still here for having it written down.)"),Object(a.b)("p",null,"Here is how to do this:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"From the ",Object(a.b)("strong",{parentName:"li"},"SMB-server Main Menu")," select ",Object(a.b)("inlineCode",{parentName:"li"},"Open the SMB-share Menu")),Object(a.b)("li",{parentName:"ol"},"Choose ",Object(a.b)("inlineCode",{parentName:"li"},"Create a SMB-share")),Object(a.b)("li",{parentName:"ol"},"Type in an empty or not existing directory that you will share, like ",Object(a.b)("inlineCode",{parentName:"li"},"/mnt/data/your data folder/root")," (based on the example above) and choose to create that directory"),Object(a.b)("li",{parentName:"ol"},"Type in ",Object(a.b)("inlineCode",{parentName:"li"},"temporary")," as ",Object(a.b)("strong",{parentName:"li"},"Share name")),Object(a.b)("li",{parentName:"ol"},"Now ",Object(a.b)("strong",{parentName:"li"},"select at least one SMB-user")," that will get ",Object(a.b)("strong",{parentName:"li"},"access")," to the share for now"),Object(a.b)("li",{parentName:"ol"},"Now select that the share shall be ",Object(a.b)("strong",{parentName:"li"},"read only")),Object(a.b)("li",{parentName:"ol"},"After restarting Samba, the SMB-share should be successfully created!"),Object(a.b)("li",{parentName:"ol"},"Select that you ",Object(a.b)("strong",{parentName:"li"},"want to mount")," the same directory to Nextcloud"),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"You should now change the name of your directory for the usage in Nextcloud. You should change it to ",Object(a.b)("inlineCode",{parentName:"strong"},"/"))," (one forward-slash)"),Object(a.b)("li",{parentName:"ol"},"Now everything should get set up automatically"),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"Don't")," enable Inotify (and don't exit the script afterwards!)")),Object(a.b)("h4",{id:"you-should-now-remove-the-smb-share-again-since-it-is-not-needed-any-longer"},"You should now remove the SMB-share again since it is not needed any longer:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Choose to ",Object(a.b)("inlineCode",{parentName:"li"},"Delete SMB-shares")," from the same still open ",Object(a.b)("inlineCode",{parentName:"li"},"SMB-share Menu")),Object(a.b)("li",{parentName:"ol"},"Select the just created share with name ",Object(a.b)("inlineCode",{parentName:"li"},"temporary")),Object(a.b)("li",{parentName:"ol"},"Press ",Object(a.b)("inlineCode",{parentName:"li"},"[Enter]")," to delete it"),Object(a.b)("li",{parentName:"ol"},"exit the SMB-server script by selecting ",Object(a.b)("inlineCode",{parentName:"li"},"Return")," -> ",Object(a.b)("inlineCode",{parentName:"li"},"Exit"))),Object(a.b)("p",null,"Now, the root directory should be read only for all users!"))}d.isMDXComponent=!0},177:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),d=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=d(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(r),p=n,m=u["".concat(l,".").concat(p)]||u[p]||b[p]||a;return r?o.a.createElement(m,i(i({ref:t},s),{},{components:r})):o.a.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);