const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DbbIgQqB.js","assets/index-HjVyI_s4.js","assets/index-5as9Edko.css"])))=>i.map(i=>d[i]);
import{p as u,a as h,k as R,_ as V}from"./index-HjVyI_s4.js";const n=u({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),x={state:n,subscribe(e){return h(n,()=>e(n))},push(e,t){e!==n.view&&(n.view=e,t&&(n.data=t),n.history.push(e))},reset(e){n.view=e,n.history=[e]},replace(e){n.history.length>1&&(n.history[n.history.length-1]=e,n.view=e)},goBack(){if(n.history.length>1){n.history.pop();const[e]=n.history.slice(-1);n.view=e}},setData(e){n.data=e}},r={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){return r.isMobile()&&navigator.userAgent.toLowerCase().includes("android")},isIos(){const e=navigator.userAgent.toLowerCase();return r.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl(e){return e.startsWith("http://")||e.startsWith("https://")},isArray(e){return Array.isArray(e)&&e.length>0},formatNativeUrl(e,t,s){if(r.isHttpUrl(e))return this.formatUniversalUrl(e,t,s);let o=e;o.includes("://")||(o=e.replaceAll("/","").replaceAll(":",""),o=`${o}://`),o.endsWith("/")||(o=`${o}/`),this.setWalletConnectDeepLink(o,s);const i=encodeURIComponent(t);return`${o}wc?uri=${i}`},formatUniversalUrl(e,t,s){if(!r.isHttpUrl(e))return this.formatNativeUrl(e,t,s);let o=e;o.endsWith("/")||(o=`${o}/`),this.setWalletConnectDeepLink(o,s);const i=encodeURIComponent(t);return`${o}wc?uri=${i}`},async wait(e){return new Promise(t=>{setTimeout(t,e)})},openHref(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink(e,t){try{localStorage.setItem(r.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink(e){try{const[t]=e.split("?");localStorage.setItem(r.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))}catch{console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink(){try{localStorage.removeItem(r.WALLETCONNECT_DEEPLINK_CHOICE)}catch{console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage(){try{typeof localStorage<"u"&&localStorage.setItem(r.WCM_VERSION,"2.6.2")}catch{console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData(){var e;const t=(e=x.state.data)==null?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t}},H=typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),a=u({enabled:H,userSessionId:"",events:[],connectedWalletId:void 0}),B={state:a,subscribe(e){return h(a.events,()=>e(R(a.events[a.events.length-1])))},initialize(){a.enabled&&typeof(crypto==null?void 0:crypto.randomUUID)<"u"&&(a.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){a.connectedWalletId=e},click(e){if(a.enabled){const t={type:"CLICK",name:e.name,userSessionId:a.userSessionId,timestamp:Date.now(),data:e};a.events.push(t)}},track(e){if(a.enabled){const t={type:"TRACK",name:e.name,userSessionId:a.userSessionId,timestamp:Date.now(),data:e};a.events.push(t)}},view(e){if(a.enabled){const t={type:"VIEW",name:e.name,userSessionId:a.userSessionId,timestamp:Date.now(),data:e};a.events.push(t)}}},d=u({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),c={state:d,subscribe(e){return h(d,()=>e(d))},setChains(e){d.chains=e},setWalletConnectUri(e){d.walletConnectUri=e},setIsCustomDesktop(e){d.isCustomDesktop=e},setIsCustomMobile(e){d.isCustomMobile=e},setIsDataLoaded(e){d.isDataLoaded=e},setIsUiLoaded(e){d.isUiLoaded=e},setIsAuth(e){d.isAuth=e}},w=u({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),v={state:w,subscribe(e){return h(w,()=>e(w))},setConfig(e){var t,s;B.initialize(),c.setChains(e.chains),c.setIsAuth(!!e.enableAuthMode),c.setIsCustomMobile(!!((t=e.mobileWallets)!=null&&t.length)),c.setIsCustomDesktop(!!((s=e.desktopWallets)!=null&&s.length)),r.setModalVersionInStorage(),Object.assign(w,e)}};var K=Object.defineProperty,j=Object.getOwnPropertySymbols,z=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable,D=(e,t,s)=>t in e?K(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,q=(e,t)=>{for(var s in t||(t={}))z.call(t,s)&&D(e,s,t[s]);if(j)for(var s of j(t))J.call(t,s)&&D(e,s,t[s]);return e};const E="https://explorer-api.walletconnect.com",O="wcm",A="js-2.6.2";async function W(e,t){const s=q({sdkType:O,sdkVersion:A},t),o=new URL(e,E);return o.searchParams.append("projectId",v.state.projectId),Object.entries(s).forEach(([i,l])=>{l&&o.searchParams.append(i,String(l))}),(await fetch(o)).json()}const m={async getDesktopListings(e){return W("/w3m/v1/getDesktopListings",e)},async getMobileListings(e){return W("/w3m/v1/getMobileListings",e)},async getInjectedListings(e){return W("/w3m/v1/getInjectedListings",e)},async getAllListings(e){return W("/w3m/v1/getAllListings",e)},getWalletImageUrl(e){return`${E}/w3m/v1/getWalletImage/${e}?projectId=${v.state.projectId}&sdkType=${O}&sdkVersion=${A}`},getAssetImageUrl(e){return`${E}/w3m/v1/getAssetImage/${e}?projectId=${v.state.projectId}&sdkType=${O}&sdkVersion=${A}`}};var F=Object.defineProperty,k=Object.getOwnPropertySymbols,G=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable,_=(e,t,s)=>t in e?F(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,X=(e,t)=>{for(var s in t||(t={}))G.call(t,s)&&_(e,s,t[s]);if(k)for(var s of k(t))Q.call(t,s)&&_(e,s,t[s]);return e};const S=r.isMobile(),p=u({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),ae={state:p,async getRecomendedWallets(){const{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=v.state;if(e==="NONE"||t==="ALL"&&!e)return p.recomendedWallets;if(r.isArray(e)){const s={recommendedIds:e.join(",")},{listings:o}=await m.getAllListings(s),i=Object.values(o);i.sort((l,b)=>{const y=e.indexOf(l.id),C=e.indexOf(b.id);return y-C}),p.recomendedWallets=i}else{const{chains:s,isAuth:o}=c.state,i=s==null?void 0:s.join(","),l=r.isArray(t),b={page:1,sdks:o?"auth_v1":void 0,entries:r.RECOMMENDED_WALLET_AMOUNT,chains:i,version:2,excludedIds:l?t.join(","):void 0},{listings:y}=S?await m.getMobileListings(b):await m.getDesktopListings(b);p.recomendedWallets=Object.values(y)}return p.recomendedWallets},async getWallets(e){const t=X({},e),{explorerRecommendedWalletIds:s,explorerExcludedWalletIds:o}=v.state,{recomendedWallets:i}=p;if(o==="ALL")return p.wallets;i.length?t.excludedIds=i.map($=>$.id).join(","):r.isArray(s)&&(t.excludedIds=s.join(",")),r.isArray(o)&&(t.excludedIds=[t.excludedIds,o].filter(Boolean).join(",")),c.state.isAuth&&(t.sdks="auth_v1");const{page:l,search:b}=e,{listings:y,total:C}=S?await m.getMobileListings(t):await m.getDesktopListings(t),U=Object.values(y),M=b?"search":"wallets";return p[M]={listings:[...p[M].listings,...U],total:C,page:l??1},{listings:U,total:C}},getWalletImageUrl(e){return m.getWalletImageUrl(e)},getAssetImageUrl(e){return m.getAssetImageUrl(e)},resetSearch(){p.search={listings:[],total:0,page:1}}},I=u({open:!1}),L={state:I,subscribe(e){return h(I,()=>e(I))},async open(e){return new Promise(t=>{const{isUiLoaded:s,isDataLoaded:o}=c.state;if(r.removeWalletConnectDeepLink(),c.setWalletConnectUri(e==null?void 0:e.uri),c.setChains(e==null?void 0:e.chains),x.reset("ConnectWallet"),s&&o)I.open=!0,t();else{const i=setInterval(()=>{const l=c.state;l.isUiLoaded&&l.isDataLoaded&&(clearInterval(i),I.open=!0,t())},200)}})},close(){I.open=!1}};var Y=Object.defineProperty,N=Object.getOwnPropertySymbols,Z=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable,T=(e,t,s)=>t in e?Y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,te=(e,t)=>{for(var s in t||(t={}))Z.call(t,s)&&T(e,s,t[s]);if(N)for(var s of N(t))ee.call(t,s)&&T(e,s,t[s]);return e};function se(){return typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches}const f=u({themeMode:se()?"dark":"light"}),P={state:f,subscribe(e){return h(f,()=>e(f))},setThemeConfig(e){const{themeMode:t,themeVariables:s}=e;t&&(f.themeMode=t),s&&(f.themeVariables=te({},s))}},g=u({open:!1,message:"",variant:"success"}),re={state:g,subscribe(e){return h(g,()=>e(g))},openToast(e,t){g.open=!0,g.message=e,g.variant=t},closeToast(){g.open=!1}};class oe{constructor(t){this.openModal=L.open,this.closeModal=L.close,this.subscribeModal=L.subscribe,this.setTheme=P.setThemeConfig,P.setThemeConfig(t),v.setConfig(t),this.initUi()}async initUi(){if(typeof window<"u"){await V(()=>import("./index-DbbIgQqB.js"),__vite__mapDeps([0,1,2]));const t=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",t),c.setIsUiLoaded(!0)}}}const ie=Object.freeze(Object.defineProperty({__proto__:null,WalletConnectModal:oe},Symbol.toStringTag,{value:"Module"}));export{B as R,x as T,r as a,ie as i,P as n,re as o,c as p,L as s,ae as t,v as y};
