!function(){"use strict";var e,f,d,c,a,b={},t={};function n(e){var f=t[e];if(void 0!==f)return f.exports;var d=t[e]={id:e,loaded:!1,exports:{}};return b[e].call(d.exports,d,d.exports,n),d.loaded=!0,d.exports}n.m=b,n.c=t,e=[],n.O=function(f,d,c,a){if(!d){var b=1/0;for(o=0;o<e.length;o++){d=e[o][0],c=e[o][1],a=e[o][2];for(var t=!0,r=0;r<d.length;r++)(!1&a||b>=a)&&Object.keys(n.O).every((function(e){return n.O[e](d[r])}))?d.splice(r--,1):(t=!1,a<b&&(b=a));t&&(e.splice(o--,1),f=c())}return f}a=a||0;for(var o=e.length;o>0&&e[o-1][2]>a;o--)e[o]=e[o-1];e[o]=[d,c,a]},n.n=function(e){var f=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(f,{a:f}),f},d=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},n.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var a=Object.create(null);n.r(a);var b={};f=f||[null,d({}),d([]),d(d)];for(var t=2&c&&e;"object"==typeof t&&!~f.indexOf(t);t=d(t))Object.getOwnPropertyNames(t).forEach((function(f){b[f]=function(){return e[f]}}));return b.default=function(){return e},n.d(a,b),a},n.d=function(e,f){for(var d in f)n.o(f,d)&&!n.o(e,d)&&Object.defineProperty(e,d,{enumerable:!0,get:f[d]})},n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(f,d){return n.f[d](e,f),f}),[]))},n.u=function(e){return"assets/js/"+({53:"935f2afb",100:"4b40e83d",118:"a4c8f56f",154:"861795ab",169:"d110674c",413:"aa4fe7d4",416:"c9e980f0",504:"0e6b347a",513:"9efff2b6",545:"46549067",658:"849f0cd5",810:"e3efa60a",836:"0480b142",881:"2366d3fd",919:"d5e35ec4",998:"21132264",1055:"9b4cd6e8",1164:"21591cbc",1194:"5b854a2b",1225:"903747c3",1251:"47006323",1255:"fd77ae59",1368:"ffa53429",1455:"bc4f0202",1507:"964c1092",1613:"fc050850",1666:"3adc8aa2",2225:"65c66f14",2241:"967afa2e",2364:"3074b28c",2532:"672bda0e",2635:"dd5ca0eb",2748:"63b0e72d",2751:"2a4c0ebb",2775:"9b4185c1",2778:"964683f4",2782:"94e02f6d",2819:"57f77891",2884:"3f066538",2954:"d655482d",3006:"2fc8bfc8",3060:"a44e8ee7",3089:"a6aa9e1f",3151:"f0f3bf02",3439:"228fdd3c",3623:"c8844d38",3673:"7f1f61b1",3921:"537baf67",4013:"01a85c17",4037:"8ba346fa",4090:"d355dd8e",4128:"a09c2993",4195:"c4f5d8e4",4339:"093e44df",4394:"c0b31330",4421:"1d536dce",4466:"59bdebc0",4604:"6a66368b",4643:"0971836b",5001:"e3232e9f",5033:"77c3b1d7",5054:"85a7f266",5060:"e8f39fe0",5112:"e7bf6549",5165:"89216b41",5265:"447ab1b8",5302:"bfe358c2",5332:"892c135e",5394:"fdf66815",5489:"1b0f8c91",5622:"d3dc3bc7",5638:"494471fd",5725:"82aa5bea",5776:"bf513f82",5826:"f3b29ecb",6034:"b2bfa02f",6069:"11105036",6087:"aedb8f59",6103:"ccc49370",6318:"3bdfeef4",6565:"74dd678b",6646:"06eba48a",6889:"b6286d3c",6921:"00ee993d",6924:"68ea88c5",6994:"f02b13e3",7061:"1b9d908f",7122:"b5620492",7339:"4404c9e4",7401:"e0a348b4",7501:"d804fd12",7525:"3e3c0f6d",7583:"a55861ee",7758:"8dd690de",7790:"47e0b646",7882:"ee2fb503",7918:"17896441",7920:"1a4e3797",8166:"a1e22dba",8209:"732c73ae",8230:"dcad6e0d",8240:"bfc10ba1",8362:"63700d3b",8388:"548347c6",8526:"e2bb8fd8",8538:"d3f9ae04",8541:"e9469640",8600:"fbf9dc35",8610:"6875c492",8649:"b4b64ce9",8680:"e18ebd39",8710:"13ea0851",9032:"919d0efe",9087:"64f84687",9222:"2654c894",9244:"132b200b",9286:"647efe8b",9386:"88643c86",9466:"62148f06",9514:"1be78505",9533:"6f60f206",9577:"cc0b82b7",9658:"825ae13c",9681:"83d9e8dd",9793:"2a29d67e",9941:"135182e2",9976:"5b11756c"}[e]||e)+"."+{53:"1ea6fd21",100:"d5bc5f90",118:"54bd4195",154:"3668e9f2",169:"368540da",413:"eb772a7d",416:"be64af89",504:"8f1b6097",513:"ee1ef46c",545:"ab8b2933",658:"f207a203",810:"1a521ed1",836:"bd76d6fb",881:"234d260c",919:"295f4c25",998:"81d8173d",1055:"d6da1225",1164:"9af1ff33",1194:"cfdd0f08",1225:"30021d2f",1251:"6e6c38fc",1255:"a152e9a9",1368:"147ae6bc",1455:"7576c954",1507:"8afac570",1613:"aa406178",1666:"acdf87f5",2225:"7863a32b",2241:"762b4766",2364:"485cfd08",2532:"26d3b857",2635:"ab13d4a5",2748:"5f733881",2751:"44139c0d",2775:"e7f41ba4",2778:"d86f3239",2782:"d7310c5b",2819:"987d1d8c",2884:"a99501c9",2954:"02257172",3006:"e1ded823",3060:"86f22258",3089:"9ba5a8e4",3151:"ccd21460",3439:"376f688c",3623:"ed73a355",3673:"48fd8e0c",3921:"d3b5da19",4013:"51e814f0",4037:"42f9daf7",4090:"30b875d5",4128:"b666a372",4195:"8e112c07",4339:"79d7a805",4394:"bee54e90",4421:"8b5a0d9b",4466:"39b32b51",4604:"a0b6f831",4643:"745227ef",5001:"ea89e59b",5033:"3b51a025",5054:"a5a0e5fc",5060:"9e97a850",5112:"567a3f1d",5165:"bc29983d",5265:"5d66c146",5302:"251abe5d",5332:"49938a0e",5394:"e48c0057",5486:"147d1c22",5489:"953dcf6c",5525:"a86d6700",5622:"a30dc52c",5638:"29033040",5725:"d8380a2c",5776:"d04f872b",5826:"007f484c",6034:"12fd63b8",6069:"8ceedb3d",6087:"ebece775",6103:"0ab1c461",6167:"7d06c362",6318:"89aff1cd",6565:"d08ca93c",6646:"e92d47cb",6889:"6856d3a2",6921:"3e9d16ed",6924:"d4b32b8e",6994:"8aafe152",7061:"5d71cee0",7122:"1adb7007",7319:"afb38836",7339:"a412a81c",7401:"3a5c943b",7501:"127cb695",7525:"ac4b0f29",7583:"2e1dd5f5",7758:"11dc6362",7790:"88eb1a2d",7882:"d74b7aed",7918:"b086bcf8",7920:"19a021ce",8111:"8bfb3558",8166:"f7d33144",8209:"c9ef2980",8230:"2b2a7a60",8240:"ea697ab8",8362:"d578fd48",8388:"fb02f0b3",8443:"e5132527",8526:"7f7c2b6c",8538:"e75c99b0",8541:"4996f520",8600:"8b9bddcb",8610:"e3188ee5",8649:"146a6464",8680:"8ad0b66c",8710:"d824a864",9032:"791972e0",9087:"b4702b05",9222:"418c02fe",9244:"b6bf136a",9286:"53b1f743",9386:"76b73f2b",9466:"43473625",9514:"8524cbc1",9533:"6f355a7d",9577:"1a4d28a0",9658:"d984f11f",9681:"d70c9e39",9793:"b79abf10",9941:"621aabfe",9976:"22bf6468"}[e]+".js"},n.miniCssF=function(e){return"assets/css/styles.2f04a8db.css"},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,f){return Object.prototype.hasOwnProperty.call(e,f)},c={},a="my-website:",n.l=function(e,f,d,b){if(c[e])c[e].push(f);else{var t,r;if(void 0!==d)for(var o=document.getElementsByTagName("script"),u=0;u<o.length;u++){var i=o[u];if(i.getAttribute("src")==e||i.getAttribute("data-webpack")==a+d){t=i;break}}t||(r=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,n.nc&&t.setAttribute("nonce",n.nc),t.setAttribute("data-webpack",a+d),t.src=e),c[e]=[f];var s=function(f,d){t.onerror=t.onload=null,clearTimeout(l);var a=c[e];if(delete c[e],t.parentNode&&t.parentNode.removeChild(t),a&&a.forEach((function(e){return e(d)})),f)return f(d)},l=setTimeout(s.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=s.bind(null,t.onerror),t.onload=s.bind(null,t.onload),r&&document.head.appendChild(t)}},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/Nextcloud-NAS-Guide/",n.gca=function(e){return e={11105036:"6069",17896441:"7918",21132264:"998",46549067:"545",47006323:"1251","935f2afb":"53","4b40e83d":"100",a4c8f56f:"118","861795ab":"154",d110674c:"169",aa4fe7d4:"413",c9e980f0:"416","0e6b347a":"504","9efff2b6":"513","849f0cd5":"658",e3efa60a:"810","0480b142":"836","2366d3fd":"881",d5e35ec4:"919","9b4cd6e8":"1055","21591cbc":"1164","5b854a2b":"1194","903747c3":"1225",fd77ae59:"1255",ffa53429:"1368",bc4f0202:"1455","964c1092":"1507",fc050850:"1613","3adc8aa2":"1666","65c66f14":"2225","967afa2e":"2241","3074b28c":"2364","672bda0e":"2532",dd5ca0eb:"2635","63b0e72d":"2748","2a4c0ebb":"2751","9b4185c1":"2775","964683f4":"2778","94e02f6d":"2782","57f77891":"2819","3f066538":"2884",d655482d:"2954","2fc8bfc8":"3006",a44e8ee7:"3060",a6aa9e1f:"3089",f0f3bf02:"3151","228fdd3c":"3439",c8844d38:"3623","7f1f61b1":"3673","537baf67":"3921","01a85c17":"4013","8ba346fa":"4037",d355dd8e:"4090",a09c2993:"4128",c4f5d8e4:"4195","093e44df":"4339",c0b31330:"4394","1d536dce":"4421","59bdebc0":"4466","6a66368b":"4604","0971836b":"4643",e3232e9f:"5001","77c3b1d7":"5033","85a7f266":"5054",e8f39fe0:"5060",e7bf6549:"5112","89216b41":"5165","447ab1b8":"5265",bfe358c2:"5302","892c135e":"5332",fdf66815:"5394","1b0f8c91":"5489",d3dc3bc7:"5622","494471fd":"5638","82aa5bea":"5725",bf513f82:"5776",f3b29ecb:"5826",b2bfa02f:"6034",aedb8f59:"6087",ccc49370:"6103","3bdfeef4":"6318","74dd678b":"6565","06eba48a":"6646",b6286d3c:"6889","00ee993d":"6921","68ea88c5":"6924",f02b13e3:"6994","1b9d908f":"7061",b5620492:"7122","4404c9e4":"7339",e0a348b4:"7401",d804fd12:"7501","3e3c0f6d":"7525",a55861ee:"7583","8dd690de":"7758","47e0b646":"7790",ee2fb503:"7882","1a4e3797":"7920",a1e22dba:"8166","732c73ae":"8209",dcad6e0d:"8230",bfc10ba1:"8240","63700d3b":"8362","548347c6":"8388",e2bb8fd8:"8526",d3f9ae04:"8538",e9469640:"8541",fbf9dc35:"8600","6875c492":"8610",b4b64ce9:"8649",e18ebd39:"8680","13ea0851":"8710","919d0efe":"9032","64f84687":"9087","2654c894":"9222","132b200b":"9244","647efe8b":"9286","88643c86":"9386","62148f06":"9466","1be78505":"9514","6f60f206":"9533",cc0b82b7:"9577","825ae13c":"9658","83d9e8dd":"9681","2a29d67e":"9793","135182e2":"9941","5b11756c":"9976"}[e]||e,n.p+n.u(e)},function(){var e={1303:0,532:0};n.f.j=function(f,d){var c=n.o(e,f)?e[f]:void 0;if(0!==c)if(c)d.push(c[2]);else if(/^(1303|532)$/.test(f))e[f]=0;else{var a=new Promise((function(d,a){c=e[f]=[d,a]}));d.push(c[2]=a);var b=n.p+n.u(f),t=new Error;n.l(b,(function(d){if(n.o(e,f)&&(0!==(c=e[f])&&(e[f]=void 0),c)){var a=d&&("load"===d.type?"missing":d.type),b=d&&d.target&&d.target.src;t.message="Loading chunk "+f+" failed.\n("+a+": "+b+")",t.name="ChunkLoadError",t.type=a,t.request=b,c[1](t)}}),"chunk-"+f,f)}},n.O.j=function(f){return 0===e[f]};var f=function(f,d){var c,a,b=d[0],t=d[1],r=d[2],o=0;for(c in t)n.o(t,c)&&(n.m[c]=t[c]);if(r)var u=r(n);for(f&&f(d);o<b.length;o++)a=b[o],n.o(e,a)&&e[a]&&e[a][0](),e[b[o]]=0;return n.O(u)},d=self.webpackChunkmy_website=self.webpackChunkmy_website||[];d.forEach(f.bind(null,0)),d.push=f.bind(null,d.push.bind(d))}()}();