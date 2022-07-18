"use strict";(self.webpackChunkblog_never_del=self.webpackChunkblog_never_del||[]).push([[671],{3905:(n,e,t)=>{t.d(e,{Zo:()=>s,kt:()=>d});var r=t(7294);function l(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){l(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function u(n,e){if(null==n)return{};var t,r,l=function(n,e){if(null==n)return{};var t,r,l={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(l[t]=n[t]);return l}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(l[t]=n[t])}return l}var p=r.createContext({}),i=function(n){var e=r.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},s=function(n){var e=i(n.components);return r.createElement(p.Provider,{value:e},n.children)},c={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(n,e){var t=n.components,l=n.mdxType,a=n.originalType,p=n.parentName,s=u(n,["components","mdxType","originalType","parentName"]),k=i(t),d=l,m=k["".concat(p,".").concat(d)]||k[d]||c[d]||a;return t?r.createElement(m,o(o({ref:e},s),{},{components:t})):r.createElement(m,o({ref:e},s))}));function d(n,e){var t=arguments,l=e&&e.mdxType;if("string"==typeof n||l){var a=t.length,o=new Array(a);o[0]=k;var u={};for(var p in e)hasOwnProperty.call(e,p)&&(u[p]=e[p]);u.originalType=n,u.mdxType="string"==typeof n?n:l,o[1]=u;for(var i=2;i<a;i++)o[i]=t[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},9881:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>u,toc:()=>i});var r=t(7462),l=(t(7294),t(3905));const a={sidebar_position:1,slug:"/"},o="\ud83c\udfaa-0\ufe0f\u20e3 Structure",u={unversionedId:"intro",id:"intro",title:"\ud83c\udfaa-0\ufe0f\u20e3 Structure",description:"\ud83d\udd35 Hardware",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"defaultSidebar",next:{title:"\ud83c\udfaa-1\ufe0f\u20e3 Bas 00 \u279c git",permalink:"/\ud83c\udfaa-1\ufe0f\u20e3 Bas 00 \u279c git"}},p={},i=[],s={toc:i};function c(n){let{components:e,...t}=n;return(0,l.kt)("wrapper",(0,r.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"-0\ufe0f\u20e3-structure"},"\ud83c\udfaa-0\ufe0f\u20e3 Structure"),(0,l.kt)("p",null,"\ud83d\udd35 Hardware "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"xxxx.x    Starlink\n0219.1    FortiGate    60F\n\n0219.11   Mikrotik     RB4011 \n0219.22   Mikrotik     CRS328\n\n0219.33   Mikrotik     AP-Master\n1928.40   Ruckus       AP-Guest-Mesh_01\n1928.41   Ruckus       AP-Guest-Mesh_02\n\n0219.13   HP-Zbook_G3  Esxi-G3 \n0219.15   HP-Zbook_G5  Esxi-G5\n\n1001.88   Synology     NAS\n0099.xx   Camera*6\n")),(0,l.kt)("p",null,"\ud83c\udf10\ud83c\udf10\ud83c\udf10\ud83c\udf10\ud83c\udf10\ud83c\udf10\ud83c\udf10\ud83c\udf10\ud83c\udf10\ud83c\udf10\ud83c\udf10\ud83c\udf10\ud83c\udf10\ud83c\udf10\ud83c\udf10\ud83c\udf10\ud83c\udf10\ud83c\udf10\ud83c\udf10\ud83c\udf10\ud83c\udf10\ud83c\udf10\ud83c\udf10\ud83c\udf10 \ud83e\udd9a NET"),(0,l.kt)("p",null,"\ud83d\udd35 Structure"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u2705 VPN:            Wireguard + Netmaker\n\u2705 DNS:            AdGuard \n\u2705 Proxy:          Traefik\n\ud83d\udeab VXLAN:          NSXT      (use too much cpu ram)\n")),(0,l.kt)("p",null,"\ud83d\udd35 VPN"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"vps.s 1214.214\n\nros.c 1214.011\nros.c 1214.022\n\nk3s.c 1214.033\ndkt.c 1214.144\nmac.c 1214.099\n")),(0,l.kt)("p",null,"\ud83d\udd35 VLAN "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"MGR_1219   10.219.219.0/24     Manager\nOWN_1111   10.111.111.0/24     Owner\n\nGst_0168   192.168.168.0/24    Guest Wifi\n\nSrv_1721   172.16.1.0/24       Server \nSrv_1728   172.16.8.0/24       Server \n\nSTO_1001   10.1.1.0/24         NAS_01G\nSTO_1010   10.10.10.0/24       NAS_10G\nSTO_1012   10.12.12.0/24       CEPH\n\nSEC_0099   192.168.99.0/24     Camera\n")),(0,l.kt)("p",null,"\ud83d\udd35 IP Tables"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"xxxx.001 \u2605 Firewall  \n\nxxxx.011 \u2605 RB4011\nxxxx.012 \u2729 CHR   \nxxxx.022 \u2605 CRS328\n1111.013 \u2605 AP\n\nxxxx.088 \u2605 NAS.HW\nxxxx.089 \u2729 NAS.VM\n\n1720.070 \u2729 CEPH.S\n1720.077 \u2729 CEPH.C\n\n1720.080 \u2729 K8s.S\n1720.083 \u2729 K8s.C\n\n1721.033 \u2729 K3s.S.MGR\n1721.144 \u2729 K3s.C.DKT\n1214.214 \u2605 K3s.C.VPS\n\n\n1111.099 \u2605 iMAC\n0099.111 \u2729 Win7-Canmera \n1721.123 \u2729 HomeAssist\n")),(0,l.kt)("p",null,"\ud83d\udcc0\ud83d\udcc0\ud83d\udcc0\ud83d\udcc0\ud83d\udcc0\ud83d\udcc0\ud83d\udcc0\ud83d\udcc0\ud83d\udcc0\ud83d\udcc0\ud83d\udcc0\ud83d\udcc0\ud83d\udcc0\ud83d\udcc0\ud83d\udcc0\ud83d\udcc0\ud83d\udcc0\ud83d\udcc0\ud83d\udcc0\ud83d\udcc0\ud83d\udcc0\ud83d\udcc0\ud83d\udcc0\ud83d\udcc0 \ud83e\udd9a STO"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u2705NAS:   Synology\n\u2705S3:    MinIO \n\u2705RBD:   Ceph\n")),(0,l.kt)("p",null,"\ud83d\udd35 CEPH-RBD "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Pool_BD-K8s-DB\nPool_BD-K8s-APP\n\n\n\n\nPool_BD-K3s-AIO\n    PVC:  pvc-cephrbd-k3s-db-mysql\n    PVC:  pvc-cephrbd-k3s-db-\n    PVC:  pvc-cephrbd-k3s-db\n    PVC:  pvc-cephrbd-k3s-app\n    PVC:  pvc-cephrbd-k3s-app\n")),(0,l.kt)("p",null,"DVM-Docker-DB: mariabd "),(0,l.kt)("p",null,"\ud83d\udd35 NAS\n\ud83d\udd36 webdav \u279c for  omnifocus"),(0,l.kt)("p",null,"\ud83d\udd10\ud83d\udd10\ud83d\udd10\ud83d\udd10\ud83d\udd10\ud83d\udd10\ud83d\udd10\ud83d\udd10\ud83d\udd10\ud83d\udd10\ud83d\udd10\ud83d\udd10\ud83d\udd10\ud83d\udd10\ud83d\udd10\ud83d\udd10\ud83d\udd10\ud83d\udd10\ud83d\udd10\ud83d\udd10\ud83d\udd10\ud83d\udd10\ud83d\udd10\ud83d\udd10 Auth  LDAP & SSO "),(0,l.kt)("p",null,"LDAP: openLDAP  \u2705   ad.rv.ark\nLDAP:  Synology \u2705   adnas.rv.ark"),(0,l.kt)("p",null,"Radius          \u2705   RB4011\nSSO:  Authelia  \u274c"),(0,l.kt)("p",null,"\ud83d\udd35 LDAP Account "),(0,l.kt)("p",null,"\ud83d\udd36 nas\nadu.nas \u279c   user\nada.nas \u279c   admin "),(0,l.kt)("p",null,"\ud83d\udd35 LDAP client\nMikrotik. AP  \u274c "),(0,l.kt)("p",null,"vpn. "),(0,l.kt)("p",null,"jekenis\njumpserver\njira / confluence\nnightingale\ngitlab\ngrafana\nwifi.."),(0,l.kt)("p",null,"\ud83d\udd35 Radius "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"1. AP-Guest \u2705\n")),(0,l.kt)("p",null,"\ud83d\udd35 SSO "),(0,l.kt)("p",null,"\ud83d\udd35 ACCT   "),(0,l.kt)("p",null,"nas - dhw     ada.nas / adu.nas  "),(0,l.kt)("p",null,"\ud83d\udee2\ud83d\udee2\ud83d\udee2\ud83d\udee2\ud83d\udee2\ud83d\udee2\ud83d\udee2\ud83d\udee2\ud83d\udee2\ud83d\udee2\ud83d\udee2\ud83d\udee2\ud83d\udee2\ud83d\udee2\ud83d\udee2\ud83d\udee2\ud83d\udee2\ud83d\udee2\ud83d\udee2\ud83d\udee2\ud83d\udee2\ud83d\udee2\ud83d\udee2\ud83d\udee2 \ud83e\udd9a DB "),(0,l.kt)("p",null,"\ud83d\udca0\ud83d\udca0\ud83d\udca0\ud83d\udca0\ud83d\udca0\ud83d\udca0\ud83d\udca0\ud83d\udca0\ud83d\udca0\ud83d\udca0\ud83d\udca0\ud83d\udca0\ud83d\udca0\ud83d\udca0\ud83d\udca0\ud83d\udca0\ud83d\udca0\ud83d\udca0\ud83d\udca0\ud83d\udca0\ud83d\udca0\ud83d\udca0\ud83d\udca0\ud83d\udca0 \ud83e\udd9a APP "),(0,l.kt)("p",null,"\u2705 dashy "),(0,l.kt)("p",null,"\u2705 Blog.W  - wikijs\n\u2705 Blog.LO - Docusaurus"),(0,l.kt)("p",null,"HomeAssisit "),(0,l.kt)("p",null,"\ud83e\uddf0\ud83e\uddf0\ud83e\uddf0\ud83e\uddf0\ud83e\uddf0\ud83e\uddf0\ud83e\uddf0\ud83e\uddf0\ud83e\uddf0\ud83e\uddf0\ud83e\uddf0\ud83e\uddf0\ud83e\uddf0\ud83e\uddf0\ud83e\uddf0\ud83e\uddf0\ud83e\uddf0\ud83e\uddf0\ud83e\uddf0\ud83e\uddf0\ud83e\uddf0\ud83e\uddf0\ud83e\uddf0\ud83e\uddf0 \ud83e\udd9a Tool  "),(0,l.kt)("p",null," K8s:  GUI:  lens   "),(0,l.kt)("p",null,"\u2705 code-server:    remote config server in web vscode"),(0,l.kt)("p",null,"\u2705 Docker: xx  lazydocker.   cmd manager "),(0,l.kt)("p",null,"\u2705 DB Redis-CLI GUI     redis-insight"),(0,l.kt)("p",null,"\ud83c\udf89\ud83c\udf89\ud83c\udf89\ud83c\udf89\ud83c\udf89\ud83c\udf89\ud83c\udf89\ud83c\udf89\ud83c\udf89\ud83c\udf89\ud83c\udf89\ud83c\udf89\ud83c\udf89\ud83c\udf89\ud83c\udf89\ud83c\udf89\ud83c\udf89\ud83c\udf89\ud83c\udf89\ud83c\udf89\ud83c\udf89\ud83c\udf89\ud83c\udf89\ud83c\udf89 \ud83e\udd9a Misc / ToDo"),(0,l.kt)("p",null,"\ud83d\udca0\ud83d\udca0\ud83d\udca0\ud83d\udca0\ud83d\udca0\ud83d\udca0\ud83d\udca0\ud83d\udca0\ud83d\udca0\ud83d\udca0\ud83d\udca0\ud83d\udca0\ud83d\udca0\ud83d\udca0\ud83d\udca0\ud83d\udca0\ud83d\udca0\ud83d\udca0\ud83d\udca0\ud83d\udca0\ud83d\udca0\ud83d\udca0\ud83d\udca0\ud83d\udca0 \ud83e\udd9a Moniter "),(0,l.kt)("p",null,"metric + influxdb + grafana\n\u901a\u8fc7 Prometheus \u91c7\u96c6\u6570\u636e"),(0,l.kt)("p",null,"\ud83d\udca0\ud83d\udca0\ud83d\udca0\ud83d\udca0\ud83d\udca0\ud83d\udca0\ud83d\udca0\ud83d\udca0\ud83d\udca0\ud83d\udca0\ud83d\udca0\ud83d\udca0\ud83d\udca0\ud83d\udca0\ud83d\udca0\ud83d\udca0\ud83d\udca0\ud83d\udca0\ud83d\udca0\ud83d\udca0\ud83d\udca0\ud83d\udca0\ud83d\udca0\ud83d\udca0 \ud83e\udd9a ABBR "),(0,l.kt)("p",null,"tl;dr (TL;DR)      too long don`t remeber.."),(0,l.kt)("p",null,"\ud83e\udd9a  ;h0\n\ud83d\udd35  ;h1",(0,l.kt)("br",{parentName:"p"}),"\n","\ud83d\udd36  ;h2\n\ud83d\udd3b  ;h3"),(0,l.kt)("p",null,"vsc disable auto indentation\nOn Mac Shift + Option + F"))}c.isMDXComponent=!0}}]);