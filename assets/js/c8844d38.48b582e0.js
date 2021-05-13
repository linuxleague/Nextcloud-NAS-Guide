(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3623],{3905:function(M,N,j){"use strict";j.d(N,{Zo:function(){return t},kt:function(){return y}});var z=j(7294);function T(M,N,j){return N in M?Object.defineProperty(M,N,{value:j,enumerable:!0,configurable:!0,writable:!0}):M[N]=j,M}function I(M,N){var j=Object.keys(M);if(Object.getOwnPropertySymbols){var z=Object.getOwnPropertySymbols(M);N&&(z=z.filter((function(N){return Object.getOwnPropertyDescriptor(M,N).enumerable}))),j.push.apply(j,z)}return j}function i(M){for(var N=1;N<arguments.length;N++){var j=null!=arguments[N]?arguments[N]:{};N%2?I(Object(j),!0).forEach((function(N){T(M,N,j[N])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(j)):I(Object(j)).forEach((function(N){Object.defineProperty(M,N,Object.getOwnPropertyDescriptor(j,N))}))}return M}function D(M,N){if(null==M)return{};var j,z,T=function(M,N){if(null==M)return{};var j,z,T={},I=Object.keys(M);for(z=0;z<I.length;z++)j=I[z],N.indexOf(j)>=0||(T[j]=M[j]);return T}(M,N);if(Object.getOwnPropertySymbols){var I=Object.getOwnPropertySymbols(M);for(z=0;z<I.length;z++)j=I[z],N.indexOf(j)>=0||Object.prototype.propertyIsEnumerable.call(M,j)&&(T[j]=M[j])}return T}var c=z.createContext({}),L=function(M){var N=z.useContext(c),j=N;return M&&(j="function"==typeof M?M(N):i(i({},N),M)),j},t=function(M){var N=L(M.components);return z.createElement(c.Provider,{value:N},M.children)},u={inlineCode:"code",wrapper:function(M){var N=M.children;return z.createElement(z.Fragment,{},N)}},e=z.forwardRef((function(M,N){var j=M.components,T=M.mdxType,I=M.originalType,c=M.parentName,t=D(M,["components","mdxType","originalType","parentName"]),e=L(j),y=T,O=e["".concat(c,".").concat(y)]||e[y]||u[y]||I;return j?z.createElement(O,i(i({ref:N},t),{},{components:j})):z.createElement(O,i({ref:N},t))}));function y(M,N){var j=arguments,T=N&&N.mdxType;if("string"==typeof M||T){var I=j.length,i=new Array(I);i[0]=e;var D={};for(var c in N)hasOwnProperty.call(N,c)&&(D[c]=N[c]);D.originalType=M,D.mdxType="string"==typeof M?M:T,i[1]=D;for(var L=2;L<I;L++)i[L]=j[L];return z.createElement.apply(null,i)}return z.createElement.apply(null,j)}e.displayName="MDXCreateElement"},5316:function(M,N,j){"use strict";j.r(N),j.d(N,{frontMatter:function(){return i},metadata:function(){return D},toc:function(){return c},default:function(){return t}});var z=j(2122),T=j(9756),I=(j(7294),j(3905)),i={title:"Push Notifications for Nextcloud",author:"szaimen",author_title:"Creator of Nextcloud-NAS-Guide",author_url:"https://github.com/szaimen",author_image_url:"https://avatars.githubusercontent.com/u/42591237?s=460&v=4",tags:["news","performance"],description:"High Performance Backend for Nextcloud files",image:"/news/undraw_server_push_vtms.svg",hide_table_of_contents:!1},D={permalink:"/Nextcloud-NAS-Guide/news/2021/02/22/push-notifications",source:"@site/news/2021-02-22-push-notifications.md",title:"Push Notifications for Nextcloud",description:"High Performance Backend for Nextcloud files",date:"2021-02-22T00:00:00.000Z",formattedDate:"February 22, 2021",tags:[{label:"news",permalink:"/Nextcloud-NAS-Guide/news/tags/news"},{label:"performance",permalink:"/Nextcloud-NAS-Guide/news/tags/performance"}],readingTime:.635,truncated:!0,prevItem:{title:"Whiteboard and Extract for Nextcloud",permalink:"/Nextcloud-NAS-Guide/news/2021/02/24/whiteboard-and-extract"},nextItem:{title:"Welcome to the News blog!",permalink:"/Nextcloud-NAS-Guide/news/2021/02/20/news-section"}},c=[],L={toc:c};function t(M){var N=M.components,i=(0,T.Z)(M,["components"]);return(0,I.kt)("wrapper",(0,z.Z)({},L,i,{components:N,mdxType:"MDXLayout"}),(0,I.kt)("p",null,"In the new Nextcloud 21 release was today a new ",(0,I.kt)("inlineCode",{parentName:"p"},"High Performance Backend for Nextcloud files")," introduced. It attempts to solve the issue where Nextcloud clients have to periodically check the server if any files have been changed, new activities were created, or a notification was created/processed/dismissed, which increases the load on the server. By providing a way for the server to send update notifications to the clients, the need for the clients to make these checks can be greatly reduced, which reduces the load on the server and delivers notifications to the clients in some cases faster."),(0,I.kt)("p",null,"You can find the instructions how to install it on your Nextcloud-NAS here: (",(0,I.kt)("a",{parentName:"p",href:"/docs/notify_push"},"click here"),")"),(0,I.kt)("p",null,(0,I.kt)("img",{alt:"Push Notifications",src:j(6142).Z})))}t.isMDXComponent=!0},6142:function(M,N){"use strict";N.Z="data:image/svg+xml;base64,PHN2ZyBpZD0iYmFkNGFmNTQtODJhYy00NTYyLThiNDQtMmEyOTBlNWFjNWNkIiBkYXRhLW5hbWU9IkxheWVyIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjkzMiIgaGVpZ2h0PSI3NDEuNDc2NzQiIHZpZXdCb3g9IjAgMCA5MzIgNzQxLjQ3Njc0Ij48dGl0bGU+c2VydmVyX3B1c2g8L3RpdGxlPjxjaXJjbGUgY3g9IjU0MC43MjU5MiIgY3k9IjY2OS43MjY4MyIgcj0iNzEuMjAzOTciIGZpbGw9IiNmMmYyZjIiLz48cGF0aCBkPSJNNjkwLjU3NjcxLDgwMi41MDUxOGE4OC41NzA3OSw4OC41NzA3OSwwLDEsMSw4OC41NzA3OS04OC41NzA3OUE4OC42NzEyNyw4OC42NzEyNywwLDAsMSw2OTAuNTc2NzEsODAyLjUwNTE4Wm0wLTE3NS45ODM3OWE4Ny40MTMsODcuNDEzLDAsMSwwLDg3LjQxMyw4Ny40MTNBODcuNTEyLDg3LjUxMiwwLDAsMCw2OTAuNTc2NzEsNjI2LjUyMTM5WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEzNCAtNzkuMjYxNjMpIiBmaWxsPSIjZjJmMmYyIi8+PHJlY3QgeD0iNDEzLjY3NDciIHk9Ijk2LjQzNjk0IiB3aWR0aD0iNDQ1LjEyMjE4IiBoZWlnaHQ9IjI1My4wNDg5MSIgZmlsbD0iIzNmM2Q1NiIvPjxwYXRoIGQ9Ik0xMDY2LDQyOS45MjgxOEg1NDYuNDk0VjEzMy41NzM2MkgxMDY2Wm0tNTE3LjE0NDYxLTIuMzYxMzloNTE0Ljc4MzIyVjEzNS45MzVINTQ4Ljg1NTM5WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEzNCAtNzkuMjYxNjMpIiBmaWxsPSIjM2YzZDU2Ii8+PGNpcmNsZSBjeD0iNjM2LjIzNTc5IiBjeT0iMjU4LjM4MjI2IiByPSI1NS40OTI2OSIgZmlsbD0iIzAwODJjOSIvPjxwYXRoIGQ9Ik03ODAuODc1ODksMzQxLjQ4Nzg2Yy00LjQ5Njc5LTUuMTU3NDctOC43NDIyMi0xMy40Nzc3NS0xMS4yMzA0NS0yMC4xODM2Ni0yLjQ4NTkyLDYuNzA1OTEtNi43MzEzNSwxNS4wMjYxOS0xMS4yMjgxMywyMC4xODM2NmwxMC4wNDc0NC0zLjYzNXYyMi40MTQyNmgyLjM2MTM5VjMzNy44NTI4MVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMzQgLTc5LjI2MTYzKSIgZmlsbD0iI2ZmZiIvPjxwb2x5Z29uIHBvaW50cz0iNjk1Ljg2NiA2NC45MzggNjAwLjIyNSA2NC45MzggNjAwLjIyNSA0Ni4wNDcgNjk1Ljg2NiA0Ni4wNDcgNzA1LjMwNiA1NS40OTMgNjk1Ljg2NiA2NC45MzgiIGZpbGw9IiNkMGNkZTEiLz48cG9seWdvbiBwb2ludHM9IjYwMS40MSA2NC45MzggNTA1Ljc2OSA2NC45MzggNTA1Ljc2OSA0Ni4wNDcgNjAxLjQxIDQ2LjA0NyA2MTAuODUxIDU1LjQ5MyA2MDEuNDEgNjQuOTM4IiBmaWxsPSIjM2YzZDU2Ii8+PHBvbHlnb24gcG9pbnRzPSI1MDguMTM1IDY0LjkzOCA0MTIuNDk0IDY0LjkzOCA0MTIuNDk0IDQ2LjA0NyA1MDguMTM1IDQ2LjA0NyA1MTcuNTc2IDU1LjQ5MyA1MDguMTM1IDY0LjkzOCIgZmlsbD0iIzAwODJjOSIvPjxwYXRoIGQ9Ik0yMTguNDkzNTMsODE5LjU0NTM2bC0xLjI2NzE3LS40NzVjLS4yNzg0Ni0uMTA0OTMtMjcuOTkyNTEtMTAuNzIzMTEtNDAuOTc1LTM0Ljc5OTM5LTEyLjk4My0yNC4wNzc0Mi02LjYyNTg0LTUzLjA2NjcyLTYuNTYwMTItNTMuMzU2MTNsLjI5OTIxLTEuMzIwMjEsMS4yNjY1OS40NzVjLjI3ODQ2LjEwNDkzLDI3Ljk5MTk0LDEwLjcyMzEyLDQwLjk3NSwzNC43OTkzOSwxMi45ODMsMjQuMDc3NDIsNi42MjU4NSw1My4wNjY3Miw2LjU2MDEyLDUzLjM1NjEzWk0xNzguMzMwMjgsNzgzLjE1MDJjMTAuOTc2MjEsMjAuMzU2NjIsMzIuODc2NzIsMzAuNzkxNDcsMzguNDI1NjUsMzMuMTczNjIsMS4wNTUtNS45NDcyOSw0LjM2MzYxLTI5Ljk5Ny02LjYwMjc5LTUwLjMzNDA2LTEwLjk2NTI1LTIwLjMzNDcyLTMyLjg3NDQxLTMwLjc4NTcxLTM4LjQyNTY0LTMzLjE3MzYzQzE3MC42NzE5MSw3MzguNzY2ODksMTY3LjM2NDQ2LDc2Mi44MTQzMywxNzguMzMwMjgsNzgzLjE1MDJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTM0IC03OS4yNjE2MykiIGZpbGw9IiMzZjNkNTYiLz48cGF0aCBkPSJNMTg2LjE3Myw3NzUuODI1MzZjMjMuMzMxMjEsMTQuMDM2ODMsMzIuMzE2OCw0MS45MTc4NCwzMi4zMTY4LDQxLjkxNzg0cy0yOC44NDE3OCw1LjEyMjgyLTUyLjE3My04LjkxNFMxMzQsNzY2LjkxMTM1LDEzNCw3NjYuOTExMzUsMTYyLjg0MTc4LDc2MS43ODg1NCwxODYuMTczLDc3NS44MjUzNloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMzQgLTc5LjI2MTYzKSIgZmlsbD0iIzAwODJjOSIvPjxwYXRoIGQ9Ik00NzQuMDM1LDQxNC43NTE2czQwLjYwNjQsMjEuMDU1MTcsMjUuNTY3LDQwLjYwNjQtNDAuNjA2MzktMjIuNTU5MTEtNDAuNjA2MzktMjUuNTY3UzQ3NC4wMzUsNDE0Ljc1MTYsNDc0LjAzNSw0MTQuNzUxNloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMzQgLTc5LjI2MTYzKSIgZmlsbD0iI2EwNjE2YSIvPjxwYXRoIGQ9Ik00MjguOTE2NzUsMzYwLjYwOTc1czI3LjA3MDkzLDMzLjA4NjY5LDM0LjU5MDYzLDM3LjU5ODUxLDEzLjUzNTQ2LDkuMDIzNjQsMTMuNTM1NDYsMTAuNTI3NTgsNi4wMTU3Nyw5LjAyMzY0LDYuMDE1NzcsOS4wMjM2NGwtMjQuMDYzLDIxLjA1NTE3cy0yNy4wNzA5My0zNi4wOTQ1Ny0zMC4wNzg4MS0zNi4wOTQ1N1M0MjguOTE2NzUsMzYwLjYwOTc1LDQyOC45MTY3NSwzNjAuNjA5NzVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTM0IC03OS4yNjE2MykiIGZpbGw9IiM1NzVhODkiLz48cG9seWdvbiBwb2ludHM9IjE1OS41NjIgNjY3Ljg2MSAxNDEuNTE1IDY5Ny45NCAxNjguNTg2IDcwOS45NzEgMTk0LjE1MyA3MDIuNDUxIDE3OS4xMTMgNjY0Ljg1MyAxNTkuNTYyIDY2Ny44NjEiIGZpbGw9IiNhMDYxNmEiLz48cGF0aCBkPSJNMzQ0LjY5NjA4LDQxOS4yNjM0MmwtMTUuMDM5NCwxNDIuODc0MzVTMjk2LjU3LDYyOS44MTUwOSwyOTYuNTcsNjgzLjk1N3MtMTIuMDMxNTMsNjkuMTgxMjYtMTIuMDMxNTMsNjkuMTgxMjZMMzIyLjEzNyw3NTkuMTU0bDQwLjYwNjQtMTMyLjM0Njc2LDY3LjY3NzMyLTEyMy4zMjMxMkw0MTAuODY5NDYsMzgwLjE2MWwtMzMuMDg2NjktMTIuMDMxNTJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTM0IC03OS4yNjE2MykiIGZpbGw9IiMyZjJlNDEiLz48cGF0aCBkPSJNMjkwLjU1NDIyLDc3NS42OTczMnMtMTEuMjc5NTUtMTUuNzkxMzgtMTEuMjc5NTUtMTEuMjc5NTYtMjEuODA3MTQsNTQuODkzODMtMy43NTk4NSw1NC44OTM4Myw2Ni4xNzMzOC0zLjAwNzg4LDc1LjE5NywwLDM5LjEwMjQ2LTMuMDA3ODgsMzYuMDk0NTgtMjEuMDU1MTdTMzQ3LjcwNCw3ODEuNzEzMDgsMzQ3LjcwNCw3ODEuNzEzMDgsMzI1Ljk0OTcxLDc1MS4zOTA0OSwzMjAuMjgzNDksNzYyLjA0bC01LjY2NjIyLDEwLjY0OTQ4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEzNCAtNzkuMjYxNjMpIiBmaWxsPSIjMmYyZTQxIi8+PHBvbHlnb24gcG9pbnRzPSIzMTguOTggNjY3Ljg2MSAzMDAuOTMzIDY5Ny45NCAzMjguMDAzIDcwOS45NzEgMzUzLjU3IDcwMi40NTEgMzM4LjUzMSA2NjQuODUzIDMxOC45OCA2NjcuODYxIiBmaWxsPSIjYTA2MTZhIi8+PHBhdGggZD0iTTQ0OS45NzE5MSw3NzUuNjk3MzJzLTExLjI3OTU1LTE0LjI4NzQ0LTExLjI3OTU1LTkuNzc1NjItMjEuODA3MTQsNTMuMzg5ODktMy43NTk4NSw1My4zODk4OSw2Ni4xNzMzOC0zLjAwNzg4LDc1LjE5NywwLDM5LjEwMjQ2LTMuMDA3ODgsMzYuMDk0NTgtMjEuMDU1MTctMzkuMTAyNDYtMTYuNTQzMzQtMzkuMTAyNDYtMTYuNTQzMzRTNDg1LjM2NzQsNzUxLjM5MDQ5LDQ3OS43MDExOCw3NjIuMDRMNDc0LjAzNSw3NzIuNjg5NDRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTM0IC03OS4yNjE2MykiIGZpbGw9IiMyZjJlNDEiLz48cGF0aCBkPSJNMzIwLjYzMyw0MTcuNzU5NDhzNC41MTE4Myw0MC42MDY0LDI4LjU3NDg3LDc4LjIwNDkxLDU4LjY1MzY4LDEwMy43NzE4OSw1OC42NTM2OCwxMDMuNzcxODktMy4wMDc4OCw2Ni4xNzMzOCwxMy41MzU0NywxMDMuNzcxODksMTkuNTUxMjIsNTcuMTQ5NzQsMTkuNTUxMjIsNTcuMTQ5NzRsNDAuNjA2MzktMTAuNTI3NThzLTIyLjU1OTEtMTI2LjMzMS0xMy41MzU0Ni0xNTQuOTA1ODctMzQuNTkwNjMtMTc3LjQ2NS0zNC41OTA2My0xNzcuNDY1bC00MC42MDYzOS0zNC41OTA2My01Mi42Mzc5Mi02LjAxNTc2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEzNCAtNzkuMjYxNjMpIiBmaWxsPSIjMmYyZTQxIi8+PGNpcmNsZSBjeD0iMjczLjMxMDgxIiBjeT0iNTYuNTk2NjYiIHI9IjM0LjU5MDYzIiBmaWxsPSIjYTA2MTZhIi8+PHBhdGggZD0iTTM3OS4wNDc4NywxMzcuNTk4MzcsMzYwLjk0NSwxNzYuMzI2MjdsNTAuODI0NzEsMzUuMjA0NDRzLTUuOTgyNTMtNDEuOTI2NjcsNS4yODgtNTIuNTQ0MDlTMzc5LjA0Nzg3LDEzNy41OTgzNywzNzkuMDQ3ODcsMTM3LjU5ODM3WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEzNCAtNzkuMjYxNjMpIiBmaWxsPSIjYTA2MTZhIi8+PHBhdGggZD0iTTQxOC4zODkxNywyMTQuNzI3NTJzLTI0LjA2My00OS42My00My42MTQyOC00OS42My03MC42ODUyLDM0LjU5MDY0LTY5LjE4MTI2LDQyLjExMDM0LDEuNTAzOTQsOS4wMjM2NCwxLjUwMzk0LDEzLjUzNTQ2LTEwLjUyNzU4LDQuNTExODItMS41MDM5NCw3LjUxOTcsMTAuNTI3NTgsNi4wMTU3NywxMC41Mjc1OCw2LjAxNTc3bC03LjUxOTcsMTkyLjUwNDM4czMzLjA4NjY5LDEyLjAzMTUyLDQ1LjExODIxLDcuNTE5NywyNC4wNjMwNS0zNC41OTA2MywyNC4wNjMwNS0zNC41OTA2My0zLjAwNzg4LDQwLjYwNjM5LDkuMDIzNjUsMzkuMTAyNDUsNTcuMTQ5NzMtNC41MTE4Miw1OC42NTM2Ny0xMC41Mjc1OC05LjAyMzY0LTEzOC4zNjI1My05LjAyMzY0LTEzOC4zNjI1M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMzQgLTc5LjI2MTYzKSIgZmlsbD0iIzU3NWE4OSIvPjxwYXRoIGQ9Ik0zMDguNjAxNTEsNDM3LjMxMDcxcy0xOC4wNDcyOSw2Ni4xNzMzOCw3LjUxOTcsNjAuMTU3NjIsMTguMDQ3MjktNTguNjUzNjgsMTguMDQ3MjktNTguNjUzNjhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTM0IC03OS4yNjE2MykiIGZpbGw9IiNhMDYxNmEiLz48cGF0aCBkPSJNMzQwLjE4NDI2LDIwMi42OTYsMjk2LjU3LDMxMy45ODc1OXMtNi4wMTU3NywxMi4wMzE1MywwLDIxLjA1NTE3LTMuMDA3ODgsNjMuMTY1NSwzLjAwNzg4LDc1LjE5Nyw2LjAxNTc2LDMzLjA4NjY5LDYuMDE1NzYsMzMuMDg2NjlsMzQuNTkwNjMsMy4wMDc4OCw3LjUxOTctMTMyLjM0Njc2LDM5LjEwMjQ2LTg0LjIyMDY2UzM4My43OTg1MywxOTUuMTc2MjksMzQwLjE4NDI2LDIwMi42OTZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTM0IC03OS4yNjE2MykiIGZpbGw9IiM1NzVhODkiLz48cGF0aCBkPSJNMzUxLjQ2MzgxLDE5OC45MzYxNXMtMjcuMDcwOTIsNy41MTk3LTM2LjA5NDU3LDM0LjU5MDYzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEzNCAtNzkuMjYxNjMpIiBvcGFjaXR5PSIwLjEiLz48cGF0aCBkPSJNMzg0LjY0MjM1LDE1MS42Mzk0M2MzLjM2NTM5LS4yMDA4LDYuNjUxNDguOTM2NTQsOS45OTM1MywxLjM4MDI0LDExLjk1Njk0LDEuNTg3NDUsMjQuMzk1NzktNy4wODkwNywyNy4wMzU4OC0xOC44NTg0NWExNC40Njk2MSwxNC40Njk2MSwwLDAsMSwxLjM4MjgtNC41MDU0N2MxLjg0MDIyLTMuMDA0NTEsNi4wMzEyNC0zLjU3NzMyLDkuNDg2MTMtMi44ODY0NXM2LjcyOTc5LDIuMzA3ODQsMTAuMjQ4MjMsMi40OTI0NWM1LjQzMjUzLjI4NSwxMC42NDgtMy4wNTk0NSwxMy41NDMyMi03LjY2NTA1czMuNzE1LTEwLjI3Mjc4LDMuMzI0MS0xNS42OTg3M2wtMi42MDQzMiwyLjczMzM1YTEzLjIyODEzLDEzLjIyODEzLDAsMCwxLTEuMTc5MjItNy4xODkyOCw4LjM0MjU0LDguMzQyNTQsMCwwLDAtNy45MDIwOSwyLjAyMmMtMi4yOTY0LjI0NDM5LS41NjMyNC00LjI1OTQzLTIuMjY5MzEtNS44MTU4OC0uNzE0MzktLjY1MTc1LTEuODA5NjYtLjUyODc5LTIuNzc2NjQtLjUxOTQ2LTQuODg1MzEuMDQ3MS04LjgzNzI5LTMuNjg5NTMtMTIuNjg3LTYuNjk3NTRhNTMuOTExNzcsNTMuOTExNzcsMCwwLDAtMjIuNzY5ODctMTAuMzg2MjNjLTUuNTE2NS0xLjA3Ni0xMS4zODI1Mi0xLjI0ODg3LTE2LjYxNDE0LjgwNTMyLTQuMjk2NDQsMS42ODctNy44OTI2Miw0Ljc1OTU4LTExLjIxOTc4LDcuOTU4ODctOC4xOTA1OCw3Ljg3NTgtMTUuNDQzNDUsMTcuMTI5NTktMTguODUwOSwyNy45Njk0N2E0Ny4wODQyNyw0Ny4wODQyNywwLDAsMC0uMjI1NTEsMjcuMzAyMzZjMS4zNzMsNC42MzQxMSw1LjUxMSwyMC41MDQ2OSwxMS41Njg3NywyMC44NzQzQzM3OS43MzgsMTY1LjQxOTY2LDM3NS4xNjc5MSwxNTIuMjA0NzQsMzg0LjY0MjM1LDE1MS42Mzk0M1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMzQgLTc5LjI2MTYzKSIgZmlsbD0iIzJmMmU0MSIvPjxwb2x5Z29uIHBvaW50cz0iMjUzLjEgMTgzLjAwOCAyMTcuNjc5IDIzNC45NTggMjA2LjM1MSAzNTUuNjI5IDI1My4xIDE4My4wMDgiIG9wYWNpdHk9IjAuMSIvPjxyZWN0IHg9IjAuNDMxMjkiIHk9IjczOS4xMTUzNSIgd2lkdGg9IjU1Ni4xMDc1NiIgaGVpZ2h0PSIyLjM2MTM5IiBmaWxsPSIjM2YzZDU2Ii8+PHBhdGggZD0iTTU0Mi43Njc3OSw1MDQuNTU4bC04Mi40NjgxNC01Mi45MzkyMWMyOS43OTUzNi0yNi4yOTE0Myw1MC43ODc0MS01NS44MjQ2OSw1OC4wNDE3OS05MC40MTY4OGw4Mi40NjgxMyw1Mi45MzkyMUEyMTQuNTExLDIxNC41MTEsMCwwLDAsNTQyLjc2Nzc5LDUwNC41NThaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTM0IC03OS4yNjE2MykiIGZpbGw9IiMwMDgyYzkiLz48cmVjdCB4PSI1MjMuMDI4NjciIHk9IjQwMy44Nzg2NCIgd2lkdGg9IjUwLjc2OTkiIGhlaWdodD0iMi4zNjEzOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTcxLjcyMjk5IC0zMTEuMzMwMDgpIHJvdGF0ZSgzMi42OTc4NCkiIGZpbGw9IiMzZjNkNTYiLz48cmVjdCB4PSI1MTcuOTI2MSIgeT0iNDExLjgyNzM4IiB3aWR0aD0iNTAuNzY5OSIgaGVpZ2h0PSIyLjM2MTM5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNzUuMjA4MzcgLTMwNy4zMTQpIHJvdGF0ZSgzMi42OTc4NCkiIGZpbGw9IiMzZjNkNTYiLz48cmVjdCB4PSI1MTIuODIzNTIiIHk9IjQxOS43NzYxMiIgd2lkdGg9IjUwLjc2OTkiIGhlaWdodD0iMi4zNjEzOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTc4LjY5Mzc0IC0zMDMuMjk3OTIpIHJvdGF0ZSgzMi42OTc4NCkiIGZpbGw9IiMzZjNkNTYiLz48cmVjdCB4PSI1MDcuNzIwOTUiIHk9IjQyNy43MjQ4NSIgd2lkdGg9IjUwLjc2OTkiIGhlaWdodD0iMi4zNjEzOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTgyLjE3OTEyIC0yOTkuMjgxODQpIHJvdGF0ZSgzMi42OTc4NCkiIGZpbGw9IiMzZjNkNTYiLz48cmVjdCB4PSI1MDIuNjE4MzciIHk9IjQzNS42NzM1OSIgd2lkdGg9IjUwLjc2OTkiIGhlaWdodD0iMi4zNjEzOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTg1LjY2NDQ5IC0yOTUuMjY1NzYpIHJvdGF0ZSgzMi42OTc4NCkiIGZpbGw9IiMzZjNkNTYiLz48cmVjdCB4PSI0OTcuNTE1OCIgeT0iNDQzLjYyMjMyIiB3aWR0aD0iNTAuNzY5OSIgaGVpZ2h0PSIyLjM2MTM5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxODkuMTQ5ODcgLTI5MS4yNDk2OCkgcm90YXRlKDMyLjY5Nzg0KSIgZmlsbD0iIzNmM2Q1NiIvPjxyZWN0IHg9IjQ5Mi40MTMyMyIgeT0iNDUxLjU3MTA2IiB3aWR0aD0iNTAuNzY5OSIgaGVpZ2h0PSIyLjM2MTM5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOTIuNjM1MjUgLTI4Ny4yMzM2KSByb3RhdGUoMzIuNjk3ODQpIiBmaWxsPSIjM2YzZDU2Ii8+PHJlY3QgeD0iNDg3LjMxMDY1IiB5PSI0NTkuNTE5OCIgd2lkdGg9IjUwLjc2OTkiIGhlaWdodD0iMi4zNjEzOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTk2LjEyMDYyIC0yODMuMjE3NTIpIHJvdGF0ZSgzMi42OTc4NCkiIGZpbGw9IiMzZjNkNTYiLz48cGF0aCBkPSJNNTU5LDQ4OC4yOTc3OGwtOTYuNTQ5MS0xNi43ODc2NWMxNy4yNTc2NC0zNS43OTM1MiwyNS4xNDM4Mi03MS4xNTg1OSwxOC40MDU3My0xMDUuODU1bDk2LjU0OTEsMTYuNzg3NjRBMjE0LjUxMDk0LDIxNC41MTA5NCwwLDAsMCw1NTksNDg4LjI5Nzc4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEzNCAtNzkuMjYxNjMpIiBmaWxsPSIjZjJmMmYyIi8+PHJlY3QgeD0iNTAwLjIwNjciIHk9IjM5My4yMjQ5NiIgd2lkdGg9IjUwLjc2OTkiIGhlaWdodD0iMi4zNjEzOSIgdHJhbnNmb3JtPSJtYXRyaXgoMC45ODUyMiwgMC4xNzEzMSwgLTAuMTcxMzEsIDAuOTg1MjIsIC01OC42NjYzNCwgLTE2My40Njg3KSIgZmlsbD0iIzNmM2Q1NiIvPjxyZWN0IHg9IjQ5OC41ODg2MiIgeT0iNDAyLjUzMDkiIHdpZHRoPSI1MC43Njk5IiBoZWlnaHQ9IjIuMzYxMzkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01Ny4wOTYxIC0xNjMuMDUzOTUpIHJvdGF0ZSg5Ljg2Mzc5KSIgZmlsbD0iIzNmM2Q1NiIvPjxyZWN0IHg9IjQ5Ni45NzA1MyIgeT0iNDExLjgzNjg0IiB3aWR0aD0iNTAuNzY5OSIgaGVpZ2h0PSIyLjM2MTM5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTUuNTI1ODUgLTE2Mi42MzkyKSByb3RhdGUoOS44NjM3OSkiIGZpbGw9IiMzZjNkNTYiLz48cmVjdCB4PSI0OTUuMzUyNDUiIHk9IjQyMS4xNDI3NyIgd2lkdGg9IjUwLjc2OTkiIGhlaWdodD0iMi4zNjEzOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUzLjk1NTYgLTE2Mi4yMjQ0NSkgcm90YXRlKDkuODYzNzkpIiBmaWxsPSIjM2YzZDU2Ii8+PHJlY3QgeD0iNDkzLjczNDM2IiB5PSI0MzAuNDQ4NzEiIHdpZHRoPSI1MC43Njk5IiBoZWlnaHQ9IjIuMzYxMzkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01Mi4zODUzNSAtMTYxLjgwOTcpIHJvdGF0ZSg5Ljg2Mzc5KSIgZmlsbD0iIzNmM2Q1NiIvPjxyZWN0IHg9IjQ5Mi4xMTYyNyIgeT0iNDM5Ljc1NDY1IiB3aWR0aD0iNTAuNzY5OSIgaGVpZ2h0PSIyLjM2MTM5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTAuODE1MSAtMTYxLjM5NDk1KSByb3RhdGUoOS44NjM3OSkiIGZpbGw9IiMzZjNkNTYiLz48cmVjdCB4PSI0OTAuNDk4MTkiIHk9IjQ0OS4wNjA1OSIgd2lkdGg9IjUwLjc2OTkiIGhlaWdodD0iMi4zNjEzOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ5LjI0NDg1IC0xNjAuOTgwMTkpIHJvdGF0ZSg5Ljg2Mzc5KSIgZmlsbD0iIzNmM2Q1NiIvPjxyZWN0IHg9IjQ4OC44ODAxIiB5PSI0NTguMzY2NTIiIHdpZHRoPSI1MC43Njk5IiBoZWlnaHQ9IjIuMzYxMzkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00Ny42NzQ2IC0xNjAuNTY1NDQpIHJvdGF0ZSg5Ljg2Mzc5KSIgZmlsbD0iIzNmM2Q1NiIvPjwvc3ZnPg=="}}]);