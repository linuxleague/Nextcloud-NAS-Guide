(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9222],{3905:function(M,I,N){"use strict";N.d(I,{Zo:function(){return L},kt:function(){return c}});var j=N(7294);function i(M,I,N){return I in M?Object.defineProperty(M,I,{value:N,enumerable:!0,configurable:!0,writable:!0}):M[I]=N,M}function e(M,I){var N=Object.keys(M);if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(M);I&&(j=j.filter((function(I){return Object.getOwnPropertyDescriptor(M,I).enumerable}))),N.push.apply(N,j)}return N}function T(M){for(var I=1;I<arguments.length;I++){var N=null!=arguments[I]?arguments[I]:{};I%2?e(Object(N),!0).forEach((function(I){i(M,I,N[I])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(N)):e(Object(N)).forEach((function(I){Object.defineProperty(M,I,Object.getOwnPropertyDescriptor(N,I))}))}return M}function z(M,I){if(null==M)return{};var N,j,i=function(M,I){if(null==M)return{};var N,j,i={},e=Object.keys(M);for(j=0;j<e.length;j++)N=e[j],I.indexOf(N)>=0||(i[N]=M[N]);return i}(M,I);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(M);for(j=0;j<e.length;j++)N=e[j],I.indexOf(N)>=0||Object.prototype.propertyIsEnumerable.call(M,N)&&(i[N]=M[N])}return i}var t=j.createContext({}),D=function(M){var I=j.useContext(t),N=I;return M&&(N="function"==typeof M?M(I):T(T({},I),M)),N},L=function(M){var I=D(M.components);return j.createElement(t.Provider,{value:I},M.children)},u={inlineCode:"code",wrapper:function(M){var I=M.children;return j.createElement(j.Fragment,{},I)}},g=j.forwardRef((function(M,I){var N=M.components,i=M.mdxType,e=M.originalType,t=M.parentName,L=z(M,["components","mdxType","originalType","parentName"]),g=D(N),c=i,y=g["".concat(t,".").concat(c)]||g[c]||u[c]||e;return N?j.createElement(y,T(T({ref:I},L),{},{components:N})):j.createElement(y,T({ref:I},L))}));function c(M,I){var N=arguments,i=I&&I.mdxType;if("string"==typeof M||i){var e=N.length,T=new Array(e);T[0]=g;var z={};for(var t in I)hasOwnProperty.call(I,t)&&(z[t]=I[t]);z.originalType=M,z.mdxType="string"==typeof M?M:i,T[1]=z;for(var D=2;D<e;D++)T[D]=N[D];return j.createElement.apply(null,T)}return j.createElement.apply(null,N)}g.displayName="MDXCreateElement"},7323:function(M,I,N){"use strict";N.r(I),N.d(I,{frontMatter:function(){return T},metadata:function(){return z},toc:function(){return t},default:function(){return L}});var j=N(2122),i=N(9756),e=(N(7294),N(3905)),T={title:"Change update time",author:"szaimen",author_title:"Creator of Nextcloud-NAS-Guide",author_url:"https://github.com/szaimen",author_image_url:"https://avatars.githubusercontent.com/u/42591237?s=460&v=4",tags:["news","optional"],description:"Change update time",image:"/news/undraw_season_change_f99v.svg",hide_table_of_contents:!1},z={permalink:"/Nextcloud-NAS-Guide/news/2021/03/25/change-update-time",source:"@site/news/2021-03-25-change-update-time.md",title:"Change update time",description:"Change update time",date:"2021-03-25T00:00:00.000Z",formattedDate:"March 25, 2021",tags:[{label:"news",permalink:"/Nextcloud-NAS-Guide/news/tags/news"},{label:"optional",permalink:"/Nextcloud-NAS-Guide/news/tags/optional"}],readingTime:.605,truncated:!0,prevItem:{title:"Home access only",permalink:"/Nextcloud-NAS-Guide/news/2021/04/03/home-access-only"},nextItem:{title:"Improve Nextcloud Performance",permalink:"/Nextcloud-NAS-Guide/news/2021/03/25/improve-performance"}},t=[],D={toc:t};function L(M){var I=M.components,T=(0,i.Z)(M,["components"]);return(0,e.kt)("wrapper",(0,j.Z)({},D,T,{components:I,mdxType:"MDXLayout"}),(0,e.kt)("p",null,"If you've followed this guide, you will have configured automatic updates. Those get executed every saturday at 18:00 and will cause a reboot of your server afterwards. This is especially problematic if you've configured Pi-hole as your local DNS server for your home network since any DNS request will not work for as long as the server reboots and the Pi-hole isn't reachable. Also, if you've installed Pi-hole it will try to update itself every saturday at 19:30 which causes the same effect if an update is available."),(0,e.kt)("p",null,"To fix this, you can change the time when the updates get executed. Here is how to do this (",(0,e.kt)("a",{parentName:"p",href:"/docs/change-update-time"},"instructions"),")"),(0,e.kt)("p",null,(0,e.kt)("img",{alt:"Time",src:N(4911).Z})))}L.isMDXComponent=!0},4911:function(M,I){"use strict";I.Z="data:image/svg+xml;base64,PHN2ZyBpZD0iYTExNWU2NDktZTZkZS00YTA4LWFiYjItYzJhNjliNmFjODk1IiBkYXRhLW5hbWU9IkxheWVyIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9Ijg5Mi42MTM5IiBoZWlnaHQ9IjU0MC44MDIwMyIgdmlld0JveD0iMCAwIDg5Mi42MTM5IDU0MC44MDIwMyI+PHRpdGxlPnNlYXNvbl9jaGFuZ2U8L3RpdGxlPjxjaXJjbGUgY3g9IjczLjg5NjE1IiBjeT0iNzEuMzI5NjEiIHI9IjQ2IiBmaWxsPSIjZmY2NTg0Ii8+PGVsbGlwc2UgY3g9IjQ0NC4wMDMxOCIgY3k9IjUyMi44MDIwMyIgcng9IjQ0NC4wMDMxOCIgcnk9IjE4IiBmaWxsPSIjZTZlNmU2Ii8+PGNpcmNsZSBjeD0iMTEzIiBjeT0iMTg0LjIxOTQiIHI9IjExMyIgZmlsbD0iIzAwODJjOSIvPjxwb2x5Z29uIHBvaW50cz0iMTIzLjg5MiA1MjQuNTgxIDEwMC43NDcgNTI0LjU4MSAxMTEuMjk4IDE2Ny4yMDEgMTIzLjg5MiA1MjQuNTgxIiBmaWxsPSIjM2YzZDU2Ii8+PHBvbHlnb24gcG9pbnRzPSIxMTMuMzQgMjM0LjkzMyAxMzguMTg3IDIwMC41NTcgMTEzIDI0My40NDIgMTEwLjI3NyAyMzguNjc3IDExMy4zNCAyMzQuOTMzIiBmaWxsPSIjM2YzZDU2Ii8+PHBvbHlnb24gcG9pbnRzPSIxMTAuNjE3IDI2OS42NSA4NS43NzEgMjM1LjI3NCAxMTAuOTU4IDI3OC4xNTkgMTEzLjY4MSAyNzMuMzk0IDExMC42MTcgMjY5LjY1IiBmaWxsPSIjM2YzZDU2Ii8+PHBvbHlnb24gcG9pbnRzPSI4MjcuNTA1IDUyNC45NTcgODA0LjM2MSA1MjQuOTU3IDgxNC45MTIgMTY3LjU3NyA4MjcuNTA1IDUyNC45NTciIGZpbGw9IiMzZjNkNTYiLz48cG9seWdvbiBwb2ludHM9IjgxNi45NTQgMjM1LjMwOSA4NDEuODAxIDIwMC45MzMgODE2LjYxNCAyNDMuODE4IDgxMy44OTEgMjM5LjA1MyA4MTYuOTU0IDIzNS4zMDkiIGZpbGw9IiMzZjNkNTYiLz48cG9seWdvbiBwb2ludHM9IjgxNC4yMzEgMjcwLjAyNiA3ODkuMzg1IDIzNS42NSA4MTQuNTcyIDI3OC41MzUgODE3LjI5NSAyNzMuNzcgODE0LjIzMSAyNzAuMDI2IiBmaWxsPSIjM2YzZDU2Ii8+PGNpcmNsZSBjeD0iNDU5LjA1NTYxIiBjeT0iMzE0LjM5MzI3IiByPSIyMTAuNTAzNTgiIGZpbGw9IiMzZjNkNTYiLz48Y2lyY2xlIGN4PSI0NTkuMDU1NjEiIGN5PSIzMTQuMzkzMjciIHI9IjE5My4wNzc3OSIgZmlsbD0iI2ZmZiIvPjxjaXJjbGUgY3g9IjQ1OC4zNTg1NyIgY3k9IjMxNS4wOTAzIiByPSIyNS43OTAxNyIgZmlsbD0iIzNmM2Q1NiIvPjxyZWN0IHg9IjQ1Mi43ODIzMiIgeT0iMTMxLjA3MzkyIiB3aWR0aD0iMTEuMTUyNTEiIGhlaWdodD0iMjAuOTEwOTUiIGZpbGw9IiMzZjNkNTYiLz48cmVjdCB4PSI0NTIuNzgyMzIiIHk9IjQ3OC4xOTU3MiIgd2lkdGg9IjExLjE1MjUxIiBoZWlnaHQ9IjIwLjkxMDk1IiBmaWxsPSIjM2YzZDU2Ii8+PHJlY3QgeD0iNDMyLjkxNDQ3IiB5PSI0ODQuMjMzODEiIHdpZHRoPSIxMS4xNTI1MSIgaGVpZ2h0PSIyMC45MTA5NSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzc5LjQ4Njk2IC0xMjMuNDAwNDIpIHJvdGF0ZSg5MCkiIGZpbGw9IiMzZjNkNTYiLz48cmVjdCB4PSI3ODAuMDM2MjciIHk9IjQ4NC4yMzM4MSIgd2lkdGg9IjExLjE1MjUxIiBoZWlnaHQ9IjIwLjkxMDk1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTI2LjYwODc2IC00NzAuNTIyMjMpIHJvdGF0ZSg5MCkiIGZpbGw9IiMzZjNkNTYiLz48cG9seWdvbiBwb2ludHM9IjQ1MC45MjQgMzI2LjI4NiA0NjAuNDU1IDMwNC40OTMgNTc5Ljg4IDM3MC42MzUgNDUwLjkyNCAzMjYuMjg2IiBmaWxsPSIjM2YzZDU2Ii8+PHJlY3QgeD0iNDMxLjg3MTM3IiB5PSI1My4wMDYzNiIgd2lkdGg9IjU0LjM2ODQ4IiBoZWlnaHQ9IjYyLjczMjg2IiBmaWxsPSIjM2YzZDU2Ii8+PGVsbGlwc2UgY3g9IjQ1OS4wNTU2MSIgY3k9IjUzLjAwNjM2IiByeD0iNjIuNzMyODYiIHJ5PSIxNy40MjU3OSIgZmlsbD0iIzNmM2Q1NiIvPjxwYXRoIGQ9Ik03MzAuMTk4NSw1MzEuMjgzNDVsLTMuNDg1MTYsNC44NzkyMnMtMTYuMDMxNzMsMTguODE5ODYtMTYuNzI4NzYsOS43NTg0NSwxMS44NDk1NC0xNS4zMzQ3LDExLjg0OTU0LTE1LjMzNDdsNi45NzAzMi00LjE4MjE5WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE1My42OTMwNSAtMTc5LjU5ODk5KSIgZmlsbD0iI2ZmYjhiOCIvPjxwYXRoIGQ9Ik04MjkuNDE3NzgsNTQ3Ljc0NTIybDIuOTE4MzMsNS4yMzhzMTAuMTQ4NDMsMjIuNTQzNTcsMS42NjA0NCwxOS4yOTU2NC04Ljc4ODM2LTE3LjI3MjIxLTguNzg4MzYtMTcuMjcyMjFsLS43OTY4NS04LjA4OTU3WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE1My42OTMwNSAtMTc5LjU5ODk5KSIgZmlsbD0iI2ZmYjhiOCIvPjxjaXJjbGUgY3g9IjY2MC4wMzM0OCIgY3k9IjI1NC4wNDI0NSIgcj0iMjEuMjI0MjUiIGZpbGw9IiMyZjJlNDEiLz48cGF0aCBkPSJNODExLjc1MTIyLDYwNy45NTY5NGwyLjc4ODEyLDE4LjEyMjgzVjYzMS42NTZoMTYuMDMxNzNWNjI0LjY4NTdzLjY5Ny0xMi41NDY1Ny0yLjA5MTA5LTE2LjAzMTczUzgxMS43NTEyMiw2MDcuOTU2OTQsODExLjc1MTIyLDYwNy45NTY5NFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNTMuNjkzMDUgLTE3OS41OTg5OSkiIGZpbGw9IiNmZmI4YjgiLz48cGF0aCBkPSJNNzgzLjE3MjkxLDYwNy45NTY5NGwyLjc4ODEzLDE4LjEyMjgzVjYzMS42NTZoMTYuMDMxNzNWNjI0LjY4NTdzLjY5Ny0xMi41NDY1Ny0yLjA5MTA5LTE2LjAzMTczUzc4My4xNzI5MSw2MDcuOTU2OTQsNzgzLjE3MjkxLDYwNy45NTY5NFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNTMuNjkzMDUgLTE3OS41OTg5OSkiIGZpbGw9IiNmZmI4YjgiLz48cGF0aCBkPSJNNzkzLjk2MTI5LDQ2Mi4zODM3MXMtNi4xNjYyNiwzLjI1LTEuOTU0NiwxMC42NDI4NSwyOC45MjI0OSw4My44NzY2LDI4LjkyMjQ5LDgzLjg3NjZsMTQuMjU1ODItNC4wNDY4NS0xMi41NzIzNS00OC4zNzA1My03LjE5ODgtMzAuNDAxNThaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTUzLjY5MzA1IC0xNzkuNTk4OTkpIiBmaWxsPSIjMDA4MmM5Ii8+PGNpcmNsZSBjeD0iNjU3LjcwOTY1IiBjeT0iMjYwLjAyNDc5IiByPSIxNi4wMzE3MyIgZmlsbD0iI2ZmYjhiOCIvPjxwYXRoIGQ9Ik04MTguNzIxNTMsNDQyLjA2MzM5bC0yLjA5MTA5LDMyLjc2MDQ5TDgwMS45OTI3Nyw0NjQuMzY4NHM0Ljg3OTIyLTE5LjUxNjg5LDMuNDg1MTYtMjAuOTExWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE1My42OTMwNSAtMTc5LjU5ODk5KSIgZmlsbD0iI2ZmYjhiOCIvPjxwYXRoIGQ9Ik04MTguNzIxNTMsNDcyLjAzNTc1bC0xNS43NjktMTEuNjc3MDZzLTcuMjMzMDUtMi45NjA2LTkuMzI0MTUuNTI0NTUtMTIuNTQ2NTcsNTUuMDY1NTEtNi45NzAzMiw2NC44MjRjMCwwLDI5Ljk3MjM3LDYuMjczMjgsMzYuMjQ1NjUsMi43ODgxMmwyLjc4ODEzLTE4LjEyMjgyczMuNDg1MTYtMTEuMTUyNTEtMi4wOTExLTE4LjEyMjgzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE1My42OTMwNSAtMTc5LjU5ODk5KSIgZmlsbD0iIzAwODJjOSIvPjxwYXRoIGQ9Ik03OTcuODEwNTgsNDYxLjU4MDI4cy01LjU3NjI1LTQuMTgyMTktMTAuNDU1NDgsMi43ODgxMi02My40Mjk4OCw2Mi4wMzU4My02My40Mjk4OCw2Mi4wMzU4M2w5Ljc1ODQ0LDExLjE1MjUxLDM4LjMzNjc1LTMyLjA2MzQ2LDI0LjM5NjExLTE5LjUxNjg5WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE1My42OTMwNSAtMTc5LjU5ODk5KSIgZmlsbD0iIzAwODJjOSIvPjxwYXRoIGQ9Ik04MjMuMjUyMjQsNTI4LjE0Njgxcy0zNC41MDMwNy02LjYyMTgtMzcuOTg4MjMtMS43NDI1OGwtLjY5Nyw3LjY2NzM1cy03LjY2NzM1LDE0LjYzNzY2LTMuNDg1MTYsMzguMzM2NzQsMS4zOTQwNiwzOC4zMzY3NSwxLjM5NDA2LDM4LjMzNjc1LDE4LjgxOTg2LTIuMDkxMSwzMi43NjA0OSwwLDE2LjAzMTczLDAsMTYuMDMxNzMsMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNTMuNjkzMDUgLTE3OS41OTg5OSkiIGZpbGw9IiMyZjJlNDEiLz48cGF0aCBkPSJNODMxLjk2NTE0LDYyOC44Njc4OWwtMjAuMjEzOTIuNjk3LDYuOTcwMzEsNTIuMjc3MzlzLTUuNTc2MjUsMjIuMzA1LjY5NywyMy42OTkwN2E3MC43MTI1LDcwLjcxMjUsMCwwLDAsMTMuMjQzNjEsMS4zOTQwN3M2LjI3MzI4LDYuMjczMjgsMTMuMjQzNiw1LjU3NjI1YTM5LjAzNCwzOS4wMzQsMCwwLDAsMTMuMjQzNi00LjE4MjE5czEuMzk0MDctNC4xODIxOS0zLjQ4NTE2LTUuNTc2MjUtMTguMTIyODItNS41NzYyNi0yMC45MTEtMjAuMjEzOTJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTUzLjY5MzA1IC0xNzkuNTk4OTkpIiBmaWxsPSIjMmYyZTQxIi8+PHBhdGggZD0iTTgwMy4zODY4Myw2MjguODY3ODlsLTIwLjIxMzkyLjY5Nyw2Ljk3MDMyLDUyLjI3NzM5cy01LjU3NjI1LDIyLjMwNS42OTcsMjMuNjk5MDdhNzAuNzEyNSw3MC43MTI1LDAsMCwwLDEzLjI0MzYxLDEuMzk0MDdzNi4yNzMyOCw2LjI3MzI4LDEzLjI0MzYsNS41NzYyNWEzOS4wMzQsMzkuMDM0LDAsMCwwLDEzLjI0MzYtNC4xODIxOXMxLjM5NDA3LTQuMTgyMTktMy40ODUxNi01LjU3NjI1UzgwOC45NjMwOSw2OTcuMTc3LDgwNi4xNzUsNjgyLjUzOTM0WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE1My42OTMwNSAtMTc5LjU5ODk5KSIgZmlsbD0iIzJmMmU0MSIvPjxjaXJjbGUgY3g9IjY2Ny40NTgwMyIgY3k9IjIzMS43MDQxIiByPSI4Ljc4MjQ1IiBmaWxsPSIjMmYyZTQxIi8+PHBhdGggZD0iTTgzMi44NjEsNDA2LjU0NTkzYTguNzgzMzYsOC43ODMzNiwwLDAsMC03Ljg2NzYxLTguNzM1LDguODgxLDguODgxLDAsMCwxLC45MTQ4NC0uMDQ3NDgsOC43ODI0NCw4Ljc4MjQ0LDAsMCwxLDAsMTcuNTY0ODksOC44ODEsOC44ODEsMCwwLDEtLjkxNDg0LS4wNDc0OEE4Ljc4MzM2LDguNzgzMzYsMCwwLDAsODMyLjg2MSw0MDYuNTQ1OTNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTUzLjY5MzA1IC0xNzkuNTk4OTkpIiBmaWxsPSIjMmYyZTQxIi8+PGVsbGlwc2UgY3g9IjY1Ny41NjQ1MSIgY3k9IjI0OS41NDIzNSIgcng9IjE0LjYzNzQxIiByeT0iOC43ODI0NSIgZmlsbD0iIzJmMmU0MSIvPjxwYXRoIGQ9Ik0xMDQxLjgxMjc3LDIyMS43NTAyMWE0NC42NzY3OCw0NC42NzY3OCwwLDAsMC04Ny42NTY2Mi05LjQxOTQyYy0uNTQxMjUtLjAxOTQyLTEuMDgyLS4wNDExNy0xLjYyOC0uMDQxMTdhNDQuNjg3NTQsNDQuNjg3NTQsMCwwLDAtNDIuODY2NjIsMzIuMDg4OTIsMzEuNTc0NCwzMS41NzQ0LDAsMCwwLTM3LjQ2NTQ2LDkuMzE5MjFoMTM5LjM2MjI1YTMwLjIxOTU0LDMwLjIxOTU0LDAsMCwwLDMwLjI4NjA3LTMxLjI4ODYzUTEwNDEuODMxLDIyMi4wODAxNywxMDQxLjgxMjc3LDIyMS43NTAyMVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNTMuNjkzMDUgLTE3OS41OTg5OSkiIGZpbGw9IiNlNmU2ZTYiLz48Y2lyY2xlIGN4PSI3NzEuNjEzOSIgY3k9IjEyNC4xNzgiIHI9IjEyIiBmaWxsPSIjZTZlNmU2Ii8+PGNpcmNsZSBjeD0iODA3Ljg0Njk1IiBjeT0iOTUuODg1NjYiIHI9IjkuOTkxOCIgZmlsbD0iI2U2ZTZlNiIvPjxjaXJjbGUgY3g9Ijg1Ni42MTM5IiBjeT0iMTUwLjE3OCIgcj0iMTIiIGZpbGw9IiNlNmU2ZTYiLz48Y2lyY2xlIGN4PSI3NjUuNjEzOSIgY3k9IjIwNS4xNzgiIHI9IjEyIiBmaWxsPSIjZTZlNmU2Ii8+PGNpcmNsZSBjeD0iODU2LjYxMzkiIGN5PSIyNzQuMTc4IiByPSIxMiIgZmlsbD0iI2U2ZTZlNiIvPjxwYXRoIGQ9Ik05OTEuMjg3MzYsNjg1LjE2NTI5Yy4wMDQxNS0uMTMwMDcuMDE5NTktLjI1NzIuMDE5NTktLjM4ODMxYTExLjk4MjIzLDExLjk4MjIzLDAsMCwwLTE2Ljk4NzA2LTEwLjkwNDcyLDExLjk2ODExLDExLjk2ODExLDAsMCwwLTIwLjgzMTYsOS45MTM4OGMtLjA2MS0uMDAwOTItLjEyMDEyLS4wMDkxNi0uMTgxMzQtLjAwOTE2YTEyLDEyLDAsMSwwLDcuMzM0MjksMjEuNDgzMjIsMTEuOTkzNTUsMTEuOTkzNTUsMCwwLDAsMjAuNjIxNzcsMS4yMTcxNiwxMS45OTAxNCwxMS45OTAxNCwwLDEsMCwxMC4wMjQzNS0yMS4zMTIwN1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNTMuNjkzMDUgLTE3OS41OTg5OSkiIGZpbGw9IiNlNmU2ZTYiLz48Y2lyY2xlIGN4PSI4NjcuNjEzOSIgY3k9IjIyNi4xNzgiIHI9IjUiIGZpbGw9IiNlNmU2ZTYiLz48Y2lyY2xlIGN4PSI4MzUuNjEzOSIgY3k9IjEwNi4xNzgiIHI9IjUiIGZpbGw9IiNlNmU2ZTYiLz48Y2lyY2xlIGN4PSI4MTguNjEzOSIgY3k9IjIzMC4xNzgiIHI9IjUiIGZpbGw9IiNlNmU2ZTYiLz48Y2lyY2xlIGN4PSI4MjIuNjEzOSIgY3k9IjIyNS4xNzgiIHI9IjUiIGZpbGw9IiNlNmU2ZTYiLz48Y2lyY2xlIGN4PSI4MjUuNjEzOSIgY3k9IjIyMC4xNzgiIHI9IjUiIGZpbGw9IiNlNmU2ZTYiLz48Y2lyY2xlIGN4PSI4MTMuNjEzOSIgY3k9IjI2Mi4xNzgiIHI9IjUiIGZpbGw9IiNlNmU2ZTYiLz48Y2lyY2xlIGN4PSI4ODcuNjEzOSIgY3k9IjMxOC4xNzgiIHI9IjUiIGZpbGw9IiNlNmU2ZTYiLz48Y2lyY2xlIGN4PSI3ODAuNjEzOSIgY3k9IjMyMS4xNzgiIHI9IjUiIGZpbGw9IiNlNmU2ZTYiLz48Y2lyY2xlIGN4PSI3ODYuNjEzOSIgY3k9IjE2Ny4xNzgiIHI9IjUiIGZpbGw9IiNlNmU2ZTYiLz48Y2lyY2xlIGN4PSI4MDkuNjEzOSIgY3k9IjI1Ny4xNzgiIHI9IjUiIGZpbGw9IiNlNmU2ZTYiLz48Y2lyY2xlIGN4PSI4MDQuNjEzOSIgY3k9IjI0OS4xNzgiIHI9IjUiIGZpbGw9IiNlNmU2ZTYiLz48L3N2Zz4="}}]);