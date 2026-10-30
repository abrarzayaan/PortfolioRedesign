const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./wireframe-scene-Ces7VZxW.js","./three-UDwe5Km2.js","./gsap-0ONJedR3.js"])))=>i.map(i=>d[i]);
import{g as ee,L as oo}from"./gsap-0ONJedR3.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function s(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(i){if(i.ep)return;i.ep=!0;const n=s(i);fetch(i.href,n)}})();function ao(r,e){for(var s=0;s<e.length;s++){var t=e[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(r,t.key,t)}}function lo(r,e,s){return e&&ao(r.prototype,e),r}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var $e,_i,ot,qt,Xt,_s,Sr,es,Cs,kr,Mt,bt,Tr,_r=function(){return $e||typeof window<"u"&&($e=window.gsap)&&$e.registerPlugin&&$e},Cr=1,Ss=[],U=[],At=[],zs=Date.now,un=function(e,s){return s},co=function(){var e=Cs.core,s=e.bridge||{},t=e._scrollers,i=e._proxies;t.push.apply(t,U),i.push.apply(i,At),U=t,At=i,un=function(o,a){return s[o](a)}},Gt=function(e,s){return~At.indexOf(e)&&At[At.indexOf(e)+1][s]},Qs=function(e){return!!~kr.indexOf(e)},Qe=function(e,s,t,i,n){return e.addEventListener(s,t,{passive:i!==!1,capture:!!n})},ze=function(e,s,t,i){return e.removeEventListener(s,t,!!i)},pi="scrollLeft",hi="scrollTop",pn=function(){return Mt&&Mt.isPressed||U.cache++},Mi=function(e,s){var t=function i(n){if(n||n===0){Cr&&(ot.history.scrollRestoration="manual");var o=Mt&&Mt.isPressed;n=i.v=Math.round(n)||(Mt&&Mt.iOS?1:0),e(n),i.cacheID=U.cache,o&&un("ss",n)}else(s||U.cache!==i.cacheID||un("ref"))&&(i.cacheID=U.cache,i.v=e());return i.v+i.offset};return t.offset=0,e&&t},et={s:pi,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Mi(function(r){return arguments.length?ot.scrollTo(r,Ae.sc()):ot.pageXOffset||qt[pi]||Xt[pi]||_s[pi]||0})},Ae={s:hi,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:et,sc:Mi(function(r){return arguments.length?ot.scrollTo(et.sc(),r):ot.pageYOffset||qt[hi]||Xt[hi]||_s[hi]||0})},tt=function(e,s){return(s&&s._ctx&&s._ctx.selector||$e.utils.toArray)(e)[0]||(typeof e=="string"&&$e.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},uo=function(e,s){for(var t=s.length;t--;)if(s[t]===e||s[t].contains(e))return!0;return!1},zt=function(e,s){var t=s.s,i=s.sc;Qs(e)&&(e=qt.scrollingElement||Xt);var n=U.indexOf(e),o=i===Ae.sc?1:2;!~n&&(n=U.push(e)-1),U[n+o]||Qe(e,"scroll",pn);var a=U[n+o],c=a||(U[n+o]=Mi(Gt(e,t),!0)||(Qs(e)?i:Mi(function(l){return arguments.length?e[t]=l:e[t]})));return c.target=e,a||(c.smooth=$e.getProperty(e,"scrollBehavior")==="smooth"),c},hn=function(e,s,t){var i=e,n=e,o=zs(),a=o,c=s||50,l=Math.max(500,c*3),u=function(m,k){var x=zs();k||x-o>c?(n=i,i=m,a=o,o=x):t?i+=m:i=n+(m-n)/(x-a)*(o-a)},f=function(){n=i=t?0:i,a=o=0},g=function(m){var k=a,x=n,A=zs();return(m||m===0)&&m!==i&&u(m),o===a||A-a>l?0:(i+(t?x:-x))/((t?A:o)-k)*1e3};return{update:u,reset:f,getVelocity:g}},Fs=function(e,s){return s&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Wn=function(e){var s=Math.max.apply(Math,e),t=Math.min.apply(Math,e);return Math.abs(s)>=Math.abs(t)?s:t},Ar=function(){Cs=$e.core.globals().ScrollTrigger,Cs&&Cs.core&&co()},Ir=function(e){return $e=e||_r(),!_i&&$e&&typeof document<"u"&&document.body&&(ot=window,qt=document,Xt=qt.documentElement,_s=qt.body,kr=[ot,qt,Xt,_s],$e.utils.clamp,Tr=$e.core.context||function(){},es="onpointerenter"in _s?"pointer":"mouse",Sr=be.isTouch=ot.matchMedia&&ot.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ot||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,bt=be.eventTypes=("ontouchstart"in Xt?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Xt?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Cr=0},500),_i=1),Cs||Ar(),_i};et.op=Ae;U.cache=0;var be=(function(){function r(s){this.init(s)}var e=r.prototype;return e.init=function(t){_i||Ir($e)||console.warn("Please gsap.registerPlugin(Observer)"),Cs||Ar();var i=t.tolerance,n=t.dragMinimum,o=t.type,a=t.target,c=t.lineHeight,l=t.debounce,u=t.preventDefault,f=t.onStop,g=t.onStopDelay,p=t.ignore,m=t.wheelSpeed,k=t.event,x=t.onDragStart,A=t.onDragEnd,w=t.onDrag,v=t.onPress,E=t.onRelease,V=t.onRight,B=t.onLeft,T=t.onUp,ie=t.onDown,z=t.onChangeX,y=t.onChangeY,F=t.onChange,_=t.onToggleX,fe=t.onToggleY,X=t.onHover,D=t.onHoverEnd,we=t.onMove,Z=t.ignoreCheck,pe=t.isNormalizer,ce=t.onGestureStart,d=t.onGestureEnd,ne=t.onWheel,ge=t.onEnable,pt=t.onDisable,me=t.onClick,Q=t.scrollSpeed,$=t.capture,te=t.allowClicks,re=t.lockAxis,Ee=t.onLockAxis;this.target=a=tt(a)||Xt,this.vars=t,p&&(p=$e.utils.toArray(p)),i=i||1e-9,n=n||0,m=m||1,Q=Q||1,o=o||"wheel,touch,pointer",l=l!==!1,c||(c=parseFloat(ot.getComputedStyle(_s).lineHeight)||22);var Ie,ae,Te,C,W,Oe,Me,h=this,xe=0,Ge=0,xt=t.passive||!u&&t.passive!==!1,oe=zt(a,et),R=zt(a,Ae),ht=oe(),Qt=R(),De=~o.indexOf("touch")&&!~o.indexOf("pointer")&&bt[0]==="pointerdown",$t=Qs(a),ye=a.ownerDocument||qt,ft=[0,0,0],at=[0,0,0],Rt=0,Os=function(){return Rt=zs()},Se=function(L,j){return(h.event=L)&&p&&uo(L.target,p)||j&&De&&L.pointerType!=="touch"||Z&&Z(L,j)},ci=function(){h._vx.reset(),h._vy.reset(),ae.pause(),f&&f(h)},Lt=function(){var L=h.deltaX=Wn(ft),j=h.deltaY=Wn(at),b=Math.abs(L)>=i,P=Math.abs(j)>=i;F&&(b||P)&&F(h,L,j,ft,at),b&&(V&&h.deltaX>0&&V(h),B&&h.deltaX<0&&B(h),z&&z(h),_&&h.deltaX<0!=xe<0&&_(h),xe=h.deltaX,ft[0]=ft[1]=ft[2]=0),P&&(ie&&h.deltaY>0&&ie(h),T&&h.deltaY<0&&T(h),y&&y(h),fe&&h.deltaY<0!=Ge<0&&fe(h),Ge=h.deltaY,at[0]=at[1]=at[2]=0),(C||Te)&&(we&&we(h),Te&&(x&&Te===1&&x(h),w&&w(h),Te=0),C=!1),Oe&&!(Oe=!1)&&Ee&&Ee(h),W&&(ne(h),W=!1),Ie=0},hs=function(L,j,b){ft[b]+=L,at[b]+=j,h._vx.update(L),h._vy.update(j),l?Ie||(Ie=requestAnimationFrame(Lt)):Lt()},fs=function(L,j){re&&!Me&&(h.axis=Me=Math.abs(L)>Math.abs(j)?"x":"y",Oe=!0),Me!=="y"&&(ft[2]+=L,h._vx.update(L,!0)),Me!=="x"&&(at[2]+=j,h._vy.update(j,!0)),l?Ie||(Ie=requestAnimationFrame(Lt)):Lt()},Ht=function(L){if(!Se(L,1)){L=Fs(L,u);var j=L.clientX,b=L.clientY,P=j-h.x,I=b-h.y,O=h.isDragging;h.x=j,h.y=b,(O||(P||I)&&(Math.abs(h.startX-j)>=n||Math.abs(h.startY-b)>=n))&&(Te||(Te=O?2:1),O||(h.isDragging=!0),fs(P,I))}},jt=h.onPress=function(N){Se(N,1)||N&&N.button||(h.axis=Me=null,ae.pause(),h.isPressed=!0,N=Fs(N),xe=Ge=0,h.startX=h.x=N.clientX,h.startY=h.y=N.clientY,h._vx.reset(),h._vy.reset(),Qe(pe?a:ye,bt[1],Ht,xt,!0),h.deltaX=h.deltaY=0,v&&v(h))},q=h.onRelease=function(N){if(!Se(N,1)){ze(pe?a:ye,bt[1],Ht,!0);var L=!isNaN(h.y-h.startY),j=h.isDragging,b=j&&(Math.abs(h.x-h.startX)>3||Math.abs(h.y-h.startY)>3),P=Fs(N);!b&&L&&(h._vx.reset(),h._vy.reset(),u&&te&&$e.delayedCall(.08,function(){if(zs()-Rt>300&&!N.defaultPrevented){if(N.target.click)N.target.click();else if(ye.createEvent){var I=ye.createEvent("MouseEvents");I.initMouseEvent("click",!0,!0,ot,1,P.screenX,P.screenY,P.clientX,P.clientY,!1,!1,!1,!1,0,null),N.target.dispatchEvent(I)}}})),h.isDragging=h.isGesturing=h.isPressed=!1,f&&j&&!pe&&ae.restart(!0),Te&&Lt(),A&&j&&A(h),E&&E(h,b)}},Kt=function(L){return L.touches&&L.touches.length>1&&(h.isGesturing=!0)&&ce(L,h.isDragging)},gt=function(){return(h.isGesturing=!1)||d(h)},mt=function(L){if(!Se(L)){var j=oe(),b=R();hs((j-ht)*Q,(b-Qt)*Q,1),ht=j,Qt=b,f&&ae.restart(!0)}},yt=function(L){if(!Se(L)){L=Fs(L,u),ne&&(W=!0);var j=(L.deltaMode===1?c:L.deltaMode===2?ot.innerHeight:1)*m;hs(L.deltaX*j,L.deltaY*j,0),f&&!pe&&ae.restart(!0)}},Zt=function(L){if(!Se(L)){var j=L.clientX,b=L.clientY,P=j-h.x,I=b-h.y;h.x=j,h.y=b,C=!0,f&&ae.restart(!0),(P||I)&&fs(P,I)}},gs=function(L){h.event=L,X(h)},Pt=function(L){h.event=L,D(h)},Ms=function(L){return Se(L)||Fs(L,u)&&me(h)};ae=h._dc=$e.delayedCall(g||.25,ci).pause(),h.deltaX=h.deltaY=0,h._vx=hn(0,50,!0),h._vy=hn(0,50,!0),h.scrollX=oe,h.scrollY=R,h.isDragging=h.isGesturing=h.isPressed=!1,Tr(this),h.enable=function(N){return h.isEnabled||(Qe($t?ye:a,"scroll",pn),o.indexOf("scroll")>=0&&Qe($t?ye:a,"scroll",mt,xt,$),o.indexOf("wheel")>=0&&Qe(a,"wheel",yt,xt,$),(o.indexOf("touch")>=0&&Sr||o.indexOf("pointer")>=0)&&(Qe(a,bt[0],jt,xt,$),Qe(ye,bt[2],q),Qe(ye,bt[3],q),te&&Qe(a,"click",Os,!0,!0),me&&Qe(a,"click",Ms),ce&&Qe(ye,"gesturestart",Kt),d&&Qe(ye,"gestureend",gt),X&&Qe(a,es+"enter",gs),D&&Qe(a,es+"leave",Pt),we&&Qe(a,es+"move",Zt)),h.isEnabled=!0,h.isDragging=h.isGesturing=h.isPressed=C=Te=!1,h._vx.reset(),h._vy.reset(),ht=oe(),Qt=R(),N&&N.type&&jt(N),ge&&ge(h)),h},h.disable=function(){h.isEnabled&&(Ss.filter(function(N){return N!==h&&Qs(N.target)}).length||ze($t?ye:a,"scroll",pn),h.isPressed&&(h._vx.reset(),h._vy.reset(),ze(pe?a:ye,bt[1],Ht,!0)),ze($t?ye:a,"scroll",mt,$),ze(a,"wheel",yt,$),ze(a,bt[0],jt,$),ze(ye,bt[2],q),ze(ye,bt[3],q),ze(a,"click",Os,!0),ze(a,"click",Ms),ze(ye,"gesturestart",Kt),ze(ye,"gestureend",gt),ze(a,es+"enter",gs),ze(a,es+"leave",Pt),ze(a,es+"move",Zt),h.isEnabled=h.isPressed=h.isDragging=!1,pt&&pt(h))},h.kill=h.revert=function(){h.disable();var N=Ss.indexOf(h);N>=0&&Ss.splice(N,1),Mt===h&&(Mt=0)},Ss.push(h),pe&&Qs(a)&&(Mt=h),h.enable(k)},lo(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();be.version="3.15.0";be.create=function(r){return new be(r)};be.register=Ir;be.getAll=function(){return Ss.slice()};be.getById=function(r){return Ss.filter(function(e){return e.vars.id===r})[0]};_r()&&$e.registerPlugin(be);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var S,Es,Y,J,rt,K,_n,Bi,oi,js,Hs,fi,We,Vi,fn,Ke,qn,Xn,xs,Dr,zi,Rr,je,gn,Lr,Pr,Vt,mn,Cn,As,An,Ks,yn,Qi,gi=1,qe=Date.now,ji=qe(),dt=0,Ys=0,Gn=function(e,s,t){var i=nt(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return t["_"+s+"Clamp"]=i,i?e.substr(6,e.length-7):e},zn=function(e,s){return s&&(!nt(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},po=function r(){return Ys&&requestAnimationFrame(r)},Qn=function(){return Vi=1},jn=function(){return Vi=0},_t=function(e){return e},Us=function(e){return Math.round(e*1e5)/1e5||0},Or=function(){return typeof window<"u"},Mr=function(){return S||Or()&&(S=window.gsap)&&S.registerPlugin&&S},as=function(e){return!!~_n.indexOf(e)},Br=function(e){return(e==="Height"?An:Y["inner"+e])||rt["client"+e]||K["client"+e]},Nr=function(e){return Gt(e,"getBoundingClientRect")||(as(e)?function(){return Ri.width=Y.innerWidth,Ri.height=An,Ri}:function(){return Ot(e)})},ho=function(e,s,t){var i=t.d,n=t.d2,o=t.a;return(o=Gt(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(s?Br(n):e["client"+n])||0}},fo=function(e,s){return!s||~At.indexOf(e)?Nr(e):function(){return Ri}},Ct=function(e,s){var t=s.s,i=s.d2,n=s.d,o=s.a;return Math.max(0,(t="scroll"+i)&&(o=Gt(e,t))?o()-Nr(e)()[n]:as(e)?(rt[t]||K[t])-Br(i):e[t]-e["offset"+i])},mi=function(e,s){for(var t=0;t<xs.length;t+=3)(!s||~s.indexOf(xs[t+1]))&&e(xs[t],xs[t+1],xs[t+2])},nt=function(e){return typeof e=="string"},Xe=function(e){return typeof e=="function"},Vs=function(e){return typeof e=="number"},ts=function(e){return typeof e=="object"},$s=function(e,s,t){return e&&e.progress(s?0:1)&&t&&e.pause()},ms=function(e,s,t){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return s(e,t)}):s(e,t);i&&i.totalTime&&(e.callbackAnimation=i)}},ys=Math.abs,Fr="left",$r="top",In="right",Dn="bottom",is="width",ns="height",Zs="Right",Js="Left",ei="Top",ti="Bottom",ke="padding",lt="margin",Rs="Width",Rn="Height",Ce="px",ct=function(e){return Y.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},go=function(e){var s=ct(e).position;e.style.position=s==="absolute"||s==="fixed"?s:"relative"},Kn=function(e,s){for(var t in s)t in e||(e[t]=s[t]);return e},Ot=function(e,s){var t=s&&ct(e)[fn]!=="matrix(1, 0, 0, 1, 0, 0)"&&S.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return t&&t.progress(0).kill(),i},Ni=function(e,s){var t=s.d2;return e["offset"+t]||e["client"+t]||0},Hr=function(e){var s=[],t=e.labels,i=e.duration(),n;for(n in t)s.push(t[n]/i);return s},mo=function(e){return function(s){return S.utils.snap(Hr(e),s)}},Ln=function(e){var s=S.utils.snap(e),t=Array.isArray(e)&&e.slice(0).sort(function(i,n){return i-n});return t?function(i,n,o){o===void 0&&(o=.001);var a;if(!n)return s(i);if(n>0){for(i-=o,a=0;a<t.length;a++)if(t[a]>=i)return t[a];return t[a-1]}else for(a=t.length,i+=o;a--;)if(t[a]<=i)return t[a];return t[0]}:function(i,n,o){o===void 0&&(o=.001);var a=s(i);return!n||Math.abs(a-i)<o||a-i<0==n<0?a:s(n<0?i-e:i+e)}},yo=function(e){return function(s,t){return Ln(Hr(e))(s,t.direction)}},yi=function(e,s,t,i){return t.split(",").forEach(function(n){return e(s,n,i)})},Pe=function(e,s,t,i,n){return e.addEventListener(s,t,{passive:!i,capture:!!n})},Le=function(e,s,t,i){return e.removeEventListener(s,t,!!i)},vi=function(e,s,t){t=t&&t.wheelHandler,t&&(e(s,"wheel",t),e(s,"touchmove",t))},Zn={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},bi={toggleActions:"play",anticipatePin:0},Fi={top:0,left:0,center:.5,bottom:1,right:1},Ci=function(e,s){if(nt(e)){var t=e.indexOf("="),i=~t?+(e.charAt(t-1)+1)*parseFloat(e.substr(t+1)):0;~t&&(e.indexOf("%")>t&&(i*=s/100),e=e.substr(0,t-1)),e=i+(e in Fi?Fi[e]*s:~e.indexOf("%")?parseFloat(e)*s/100:parseFloat(e)||0)}return e},wi=function(e,s,t,i,n,o,a,c){var l=n.startColor,u=n.endColor,f=n.fontSize,g=n.indent,p=n.fontWeight,m=J.createElement("div"),k=as(t)||Gt(t,"pinType")==="fixed",x=e.indexOf("scroller")!==-1,A=k?K:t.tagName==="IFRAME"?t.contentDocument.body:t,w=e.indexOf("start")!==-1,v=w?l:u,E="border-color:"+v+";font-size:"+f+";color:"+v+";font-weight:"+p+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return E+="position:"+((x||c)&&k?"fixed;":"absolute;"),(x||c||!k)&&(E+=(i===Ae?In:Dn)+":"+(o+parseFloat(g))+"px;"),a&&(E+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),m._isStart=w,m.setAttribute("class","gsap-marker-"+e+(s?" marker-"+s:"")),m.style.cssText=E,m.innerText=s||s===0?e+"-"+s:e,A.children[0]?A.insertBefore(m,A.children[0]):A.appendChild(m),m._offset=m["offset"+i.op.d2],Ai(m,0,i,w),m},Ai=function(e,s,t,i){var n={display:"block"},o=t[i?"os2":"p2"],a=t[i?"p2":"os2"];e._isFlipped=i,n[t.a+"Percent"]=i?-100:0,n[t.a]=i?"1px":0,n["border"+o+Rs]=1,n["border"+a+Rs]=0,n[t.p]=s+"px",S.set(e,n)},H=[],vn={},ai,Jn=function(){return qe()-dt>34&&(ai||(ai=requestAnimationFrame(Ft)))},vs=function(){(!je||!je.isPressed||je.startX>K.clientWidth)&&(U.cache++,je?ai||(ai=requestAnimationFrame(Ft)):Ft(),dt||cs("scrollStart"),dt=qe())},Ki=function(){Pr=Y.innerWidth,Lr=Y.innerHeight},Ws=function(e){U.cache++,(e===!0||!We&&!Rr&&!J.fullscreenElement&&!J.webkitFullscreenElement&&(!gn||Pr!==Y.innerWidth||Math.abs(Y.innerHeight-Lr)>Y.innerHeight*.25))&&Bi.restart(!0)},ls={},vo=[],Yr=function r(){return Le(M,"scrollEnd",r)||ss(!0)},cs=function(e){return ls[e]&&ls[e].map(function(s){return s()})||vo},it=[],Ur=function(e){for(var s=0;s<it.length;s+=5)(!e||it[s+4]&&it[s+4].query===e)&&(it[s].style.cssText=it[s+1],it[s].getBBox&&it[s].setAttribute("transform",it[s+2]||""),it[s+3].uncache=1)},Vr=function(){return U.forEach(function(e){return Xe(e)&&++e.cacheID&&(e.rec=e())})},Pn=function(e,s){var t;for(Ke=0;Ke<H.length;Ke++)t=H[Ke],t&&(!s||t._ctx===s)&&(e?t.kill(1):t.revert(!0,!0));Ks=!0,s&&Ur(s),s||cs("revert")},Wr=function(e,s){U.cache++,(s||!Ze)&&U.forEach(function(t){return Xe(t)&&t.cacheID++&&(t.rec=0)}),nt(e)&&(Y.history.scrollRestoration=Cn=e)},Ze,rs=0,er,bo=function(){if(er!==rs){var e=er=rs;requestAnimationFrame(function(){return e===rs&&ss(!0)})}},qr=function(){K.appendChild(As),An=!je&&As.offsetHeight||Y.innerHeight,K.removeChild(As)},tr=function(e){return oi(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(s){return s.style.display=e?"none":"block"})},ss=function(e,s){if(rt=J.documentElement,K=J.body,_n=[Y,J,rt,K],dt&&!e&&!Ks){Pe(M,"scrollEnd",Yr);return}qr(),Ze=M.isRefreshing=!0,Ks||Vr();var t=cs("refreshInit");Dr&&M.sort(),s||Pn(),U.forEach(function(i){Xe(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),H.slice(0).forEach(function(i){return i.refresh()}),Ks=!1,H.forEach(function(i){if(i._subPinOffset&&i.pin){var n=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[n];i.revert(!0,1),i.adjustPinSpacing(i.pin[n]-o),i.refresh()}}),yn=1,tr(!0),H.forEach(function(i){var n=Ct(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>n,a=i._startClamp&&i.start>=n;(o||a)&&i.setPositions(a?n-1:i.start,o?Math.max(a?n:i.start+1,n):i.end,!0)}),tr(!1),yn=0,t.forEach(function(i){return i&&i.render&&i.render(-1)}),U.forEach(function(i){Xe(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Wr(Cn,1),Bi.pause(),rs++,Ze=2,Ft(2),H.forEach(function(i){return Xe(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Ze=M.isRefreshing=!1,cs("refresh")},bn=0,Ii=1,si,Ft=function(e){if(e===2||!Ze&&!Ks){M.isUpdating=!0,si&&si.update(0);var s=H.length,t=qe(),i=t-ji>=50,n=s&&H[0].scroll();if(Ii=bn>n?-1:1,Ze||(bn=n),i&&(dt&&!Vi&&t-dt>200&&(dt=0,cs("scrollEnd")),Hs=ji,ji=t),Ii<0){for(Ke=s;Ke-- >0;)H[Ke]&&H[Ke].update(0,i);Ii=1}else for(Ke=0;Ke<s;Ke++)H[Ke]&&H[Ke].update(0,i);M.isUpdating=!1}ai=0},wn=[Fr,$r,Dn,In,lt+ti,lt+Zs,lt+ei,lt+Js,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Di=wn.concat([is,ns,"boxSizing","max"+Rs,"max"+Rn,"position",lt,ke,ke+ei,ke+Zs,ke+ti,ke+Js]),wo=function(e,s,t){Is(t);var i=e._gsap;if(i.spacerIsNative)Is(i.spacerState);else if(e._gsap.swappedIn){var n=s.parentNode;n&&(n.insertBefore(e,s),n.removeChild(s))}e._gsap.swappedIn=!1},Zi=function(e,s,t,i){if(!e._gsap.swappedIn){for(var n=wn.length,o=s.style,a=e.style,c;n--;)c=wn[n],o[c]=t[c];o.position=t.position==="absolute"?"absolute":"relative",t.display==="inline"&&(o.display="inline-block"),a[Dn]=a[In]="auto",o.flexBasis=t.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[is]=Ni(e,et)+Ce,o[ns]=Ni(e,Ae)+Ce,o[ke]=a[lt]=a[$r]=a[Fr]="0",Is(i),a[is]=a["max"+Rs]=t[is],a[ns]=a["max"+Rn]=t[ns],a[ke]=t[ke],e.parentNode!==s&&(e.parentNode.insertBefore(s,e),s.appendChild(e)),e._gsap.swappedIn=!0}},Eo=/([A-Z])/g,Is=function(e){if(e){var s=e.t.style,t=e.length,i=0,n,o;for((e.t._gsap||S.core.getCache(e.t)).uncache=1;i<t;i+=2)o=e[i+1],n=e[i],o?s[n]=o:s[n]&&s.removeProperty(n.replace(Eo,"-$1").toLowerCase())}},Ei=function(e){for(var s=Di.length,t=e.style,i=[],n=0;n<s;n++)i.push(Di[n],t[Di[n]]);return i.t=e,i},xo=function(e,s,t){for(var i=[],n=e.length,o=t?8:0,a;o<n;o+=2)a=e[o],i.push(a,a in s?s[a]:e[o+1]);return i.t=e.t,i},Ri={left:0,top:0},sr=function(e,s,t,i,n,o,a,c,l,u,f,g,p,m){Xe(e)&&(e=e(c)),nt(e)&&e.substr(0,3)==="max"&&(e=g+(e.charAt(4)==="="?Ci("0"+e.substr(3),t):0));var k=p?p.time():0,x,A,w;if(p&&p.seek(0),isNaN(e)||(e=+e),Vs(e))p&&(e=S.utils.mapRange(p.scrollTrigger.start,p.scrollTrigger.end,0,g,e)),a&&Ai(a,t,i,!0);else{Xe(s)&&(s=s(c));var v=(e||"0").split(" "),E,V,B,T;w=tt(s,c)||K,E=Ot(w)||{},(!E||!E.left&&!E.top)&&ct(w).display==="none"&&(T=w.style.display,w.style.display="block",E=Ot(w),T?w.style.display=T:w.style.removeProperty("display")),V=Ci(v[0],E[i.d]),B=Ci(v[1]||"0",t),e=E[i.p]-l[i.p]-u+V+n-B,a&&Ai(a,B,i,t-B<20||a._isStart&&B>20),t-=t-B}if(m&&(c[m]=e||-.001,e<0&&(e=0)),o){var ie=e+t,z=o._isStart;x="scroll"+i.d2,Ai(o,ie,i,z&&ie>20||!z&&(f?Math.max(K[x],rt[x]):o.parentNode[x])<=ie+1),f&&(l=Ot(a),f&&(o.style[i.op.p]=l[i.op.p]-i.op.m-o._offset+Ce))}return p&&w&&(x=Ot(w),p.seek(g),A=Ot(w),p._caScrollDist=x[i.p]-A[i.p],e=e/p._caScrollDist*g),p&&p.seek(k),p?e:Math.round(e)},So=/(webkit|moz|length|cssText|inset)/i,ir=function(e,s,t,i){if(e.parentNode!==s){var n=e.style,o,a;if(s===K){e._stOrig=n.cssText,a=ct(e);for(o in a)!+o&&!So.test(o)&&a[o]&&typeof n[o]=="string"&&o!=="0"&&(n[o]=a[o]);n.top=t,n.left=i}else n.cssText=e._stOrig;S.core.getCache(e).uncache=1,s.appendChild(e)}},Xr=function(e,s,t){var i=s,n=i;return function(o){var a=Math.round(e());return a!==i&&a!==n&&Math.abs(a-i)>3&&Math.abs(a-n)>3&&(o=a,t&&t()),n=i,i=Math.round(o),i}},xi=function(e,s,t){var i={};i[s.p]="+="+t,S.set(e,i)},nr=function(e,s){var t=zt(e,s),i="_scroll"+s.p2,n=function o(a,c,l,u,f){var g=o.tween,p=c.onComplete,m={};l=l||t();var k=Xr(t,l,function(){g.kill(),o.tween=0});return f=u&&f||0,u=u||a-l,g&&g.kill(),c[i]=a,c.inherit=!1,c.modifiers=m,m[i]=function(){return k(l+u*g.ratio+f*g.ratio*g.ratio)},c.onUpdate=function(){U.cache++,o.tween&&Ft()},c.onComplete=function(){o.tween=0,p&&p.call(g)},g=o.tween=S.to(e,c),g};return e[i]=t,t.wheelHandler=function(){return n.tween&&n.tween.kill()&&(n.tween=0)},Pe(e,"wheel",t.wheelHandler),M.isTouch&&Pe(e,"touchmove",t.wheelHandler),n},M=(function(){function r(s,t){Es||r.register(S)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),mn(this),this.init(s,t)}var e=r.prototype;return e.init=function(t,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ys){this.update=this.refresh=this.kill=_t;return}t=Kn(nt(t)||Vs(t)||t.nodeType?{trigger:t}:t,bi);var n=t,o=n.onUpdate,a=n.toggleClass,c=n.id,l=n.onToggle,u=n.onRefresh,f=n.scrub,g=n.trigger,p=n.pin,m=n.pinSpacing,k=n.invalidateOnRefresh,x=n.anticipatePin,A=n.onScrubComplete,w=n.onSnapComplete,v=n.once,E=n.snap,V=n.pinReparent,B=n.pinSpacer,T=n.containerAnimation,ie=n.fastScrollEnd,z=n.preventOverlaps,y=t.horizontal||t.containerAnimation&&t.horizontal!==!1?et:Ae,F=!f&&f!==0,_=tt(t.scroller||Y),fe=S.core.getCache(_),X=as(_),D=("pinType"in t?t.pinType:Gt(_,"pinType")||X&&"fixed")==="fixed",we=[t.onEnter,t.onLeave,t.onEnterBack,t.onLeaveBack],Z=F&&t.toggleActions.split(" "),pe="markers"in t?t.markers:bi.markers,ce=X?0:parseFloat(ct(_)["border"+y.p2+Rs])||0,d=this,ne=t.onRefreshInit&&function(){return t.onRefreshInit(d)},ge=ho(_,X,y),pt=fo(_,X),me=0,Q=0,$=0,te=zt(_,y),re,Ee,Ie,ae,Te,C,W,Oe,Me,h,xe,Ge,xt,oe,R,ht,Qt,De,$t,ye,ft,at,Rt,Os,Se,ci,Lt,hs,fs,Ht,jt,q,Kt,gt,mt,yt,Zt,gs,Pt;if(d._startClamp=d._endClamp=!1,d._dir=y,x*=45,d.scroller=_,d.scroll=T?T.time.bind(T):te,ae=te(),d.vars=t,i=i||t.animation,"refreshPriority"in t&&(Dr=1,t.refreshPriority===-9999&&(si=d)),fe.tweenScroll=fe.tweenScroll||{top:nr(_,Ae),left:nr(_,et)},d.tweenTo=re=fe.tweenScroll[y.p],d.scrubDuration=function(b){Kt=Vs(b)&&b,Kt?q?q.duration(b):q=S.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Kt,paused:!0,onComplete:function(){return A&&A(d)}}):(q&&q.progress(1).kill(),q=0)},i&&(i.vars.lazy=!1,i._initted&&!d.isReverted||i.vars.immediateRender!==!1&&t.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),d.animation=i.pause(),i.scrollTrigger=d,d.scrubDuration(f),Ht=0,c||(c=i.vars.id)),E&&((!ts(E)||E.push)&&(E={snapTo:E}),"scrollBehavior"in K.style&&S.set(X?[K,rt]:_,{scrollBehavior:"auto"}),U.forEach(function(b){return Xe(b)&&b.target===(X?J.scrollingElement||rt:_)&&(b.smooth=!1)}),Ie=Xe(E.snapTo)?E.snapTo:E.snapTo==="labels"?mo(i):E.snapTo==="labelsDirectional"?yo(i):E.directional!==!1?function(b,P){return Ln(E.snapTo)(b,qe()-Q<500?0:P.direction)}:S.utils.snap(E.snapTo),gt=E.duration||{min:.1,max:2},gt=ts(gt)?js(gt.min,gt.max):js(gt,gt),mt=S.delayedCall(E.delay||Kt/2||.1,function(){var b=te(),P=qe()-Q<500,I=re.tween;if((P||Math.abs(d.getVelocity())<10)&&!I&&!Vi&&me!==b){var O=(b-C)/oe,Re=i&&!F?i.totalProgress():O,G=P?0:(Re-jt)/(qe()-Hs)*1e3||0,ve=S.utils.clamp(-O,1-O,ys(G/2)*G/.185),Ye=O+(E.inertia===!1?0:ve),he,de,se=E,vt=se.onStart,ue=se.onInterrupt,st=se.onComplete;if(he=Ie(Ye,d),Vs(he)||(he=Ye),de=Math.max(0,Math.round(C+he*oe)),b<=W&&b>=C&&de!==b){if(I&&!I._initted&&I.data<=ys(de-b))return;E.inertia===!1&&(ve=he-O),re(de,{duration:gt(ys(Math.max(ys(Ye-Re),ys(he-Re))*.185/G/.05||0)),ease:E.ease||"power3",data:ys(de-b),onInterrupt:function(){return mt.restart(!0)&&ue&&ms(d,ue)},onComplete:function(){d.update(),me=te(),i&&!F&&(q?q.resetTo("totalProgress",he,i._tTime/i._tDur):i.progress(he)),Ht=jt=i&&!F?i.totalProgress():d.progress,w&&w(d),st&&ms(d,st)}},b,ve*oe,de-b-ve*oe),vt&&ms(d,vt,re.tween)}}else d.isActive&&me!==b&&mt.restart(!0)}).pause()),c&&(vn[c]=d),g=d.trigger=tt(g||p!==!0&&p),Pt=g&&g._gsap&&g._gsap.stRevert,Pt&&(Pt=Pt(d)),p=p===!0?g:tt(p),nt(a)&&(a={targets:g,className:a}),p&&(m===!1||m===lt||(m=!m&&p.parentNode&&p.parentNode.style&&ct(p.parentNode).display==="flex"?!1:ke),d.pin=p,Ee=S.core.getCache(p),Ee.spacer?R=Ee.pinState:(B&&(B=tt(B),B&&!B.nodeType&&(B=B.current||B.nativeElement),Ee.spacerIsNative=!!B,B&&(Ee.spacerState=Ei(B))),Ee.spacer=De=B||J.createElement("div"),De.classList.add("pin-spacer"),c&&De.classList.add("pin-spacer-"+c),Ee.pinState=R=Ei(p)),t.force3D!==!1&&S.set(p,{force3D:!0}),d.spacer=De=Ee.spacer,fs=ct(p),Os=fs[m+y.os2],ye=S.getProperty(p),ft=S.quickSetter(p,y.a,Ce),Zi(p,De,fs),Qt=Ei(p)),pe){Ge=ts(pe)?Kn(pe,Zn):Zn,h=wi("scroller-start",c,_,y,Ge,0),xe=wi("scroller-end",c,_,y,Ge,0,h),$t=h["offset"+y.op.d2];var Ms=tt(Gt(_,"content")||_);Oe=this.markerStart=wi("start",c,Ms,y,Ge,$t,0,T),Me=this.markerEnd=wi("end",c,Ms,y,Ge,$t,0,T),T&&(gs=S.quickSetter([Oe,Me],y.a,Ce)),!D&&!(At.length&&Gt(_,"fixedMarkers")===!0)&&(go(X?K:_),S.set([h,xe],{force3D:!0}),ci=S.quickSetter(h,y.a,Ce),hs=S.quickSetter(xe,y.a,Ce))}if(T){var N=T.vars.onUpdate,L=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){d.update(0,0,1),N&&N.apply(T,L||[])})}if(d.previous=function(){return H[H.indexOf(d)-1]},d.next=function(){return H[H.indexOf(d)+1]},d.revert=function(b,P){if(!P)return d.kill(!0);var I=b!==!1||!d.enabled,O=We;I!==d.isReverted&&(I&&(yt=Math.max(te(),d.scroll.rec||0),$=d.progress,Zt=i&&i.progress()),Oe&&[Oe,Me,h,xe].forEach(function(Re){return Re.style.display=I?"none":"block"}),I&&(We=d,d.update(I)),p&&(!V||!d.isActive)&&(I?wo(p,De,R):Zi(p,De,ct(p),Se)),I||d.update(I),We=O,d.isReverted=I)},d.refresh=function(b,P,I,O){if(!((We||!d.enabled)&&!P)){if(p&&b&&dt){Pe(r,"scrollEnd",Yr);return}!Ze&&ne&&ne(d),We=d,re.tween&&!I&&(re.tween.kill(),re.tween=0),q&&q.pause(),k&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Yt){return Yt.vars.immediateRender&&Yt.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),d.isReverted||d.revert(!0,!0),d._subPinOffset=!1;var Re=ge(),G=pt(),ve=T?T.duration():Ct(_,y),Ye=oe<=.01||!oe,he=0,de=O||0,se=ts(I)?I.end:t.end,vt=t.endTrigger||g,ue=ts(I)?I.start:t.start||(t.start===0||!g?0:p?"0 0":"0 100%"),st=d.pinnedContainer=t.pinnedContainer&&tt(t.pinnedContainer,d),St=g&&Math.max(0,H.indexOf(d))||0,Be=St,Ne,Ue,Jt,di,Ve,_e,kt,Gi,Vn,Bs,Tt,Ns,ui;for(pe&&ts(I)&&(Ns=S.getProperty(h,y.p),ui=S.getProperty(xe,y.p));Be-- >0;)_e=H[Be],_e.end||_e.refresh(0,1)||(We=d),kt=_e.pin,kt&&(kt===g||kt===p||kt===st)&&!_e.isReverted&&(Bs||(Bs=[]),Bs.unshift(_e),_e.revert(!0,!0)),_e!==H[Be]&&(St--,Be--);for(Xe(ue)&&(ue=ue(d)),ue=Gn(ue,"start",d),C=sr(ue,g,Re,y,te(),Oe,h,d,G,ce,D,ve,T,d._startClamp&&"_startClamp")||(p?-.001:0),Xe(se)&&(se=se(d)),nt(se)&&!se.indexOf("+=")&&(~se.indexOf(" ")?se=(nt(ue)?ue.split(" ")[0]:"")+se:(he=Ci(se.substr(2),Re),se=nt(ue)?ue:(T?S.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,C):C)+he,vt=g)),se=Gn(se,"end",d),W=Math.max(C,sr(se||(vt?"100% 0":ve),vt,Re,y,te()+he,Me,xe,d,G,ce,D,ve,T,d._endClamp&&"_endClamp"))||-.001,he=0,Be=St;Be--;)_e=H[Be]||{},kt=_e.pin,kt&&_e.start-_e._pinPush<=C&&!T&&_e.end>0&&(Ne=_e.end-(d._startClamp?Math.max(0,_e.start):_e.start),(kt===g&&_e.start-_e._pinPush<C||kt===st)&&isNaN(ue)&&(he+=Ne*(1-_e.progress)),kt===p&&(de+=Ne));if(C+=he,W+=he,d._startClamp&&(d._startClamp+=he),d._endClamp&&!Ze&&(d._endClamp=W||-.001,W=Math.min(W,Ct(_,y))),oe=W-C||(C-=.01)&&.001,Ye&&($=S.utils.clamp(0,1,S.utils.normalize(C,W,yt))),d._pinPush=de,Oe&&he&&(Ne={},Ne[y.a]="+="+he,st&&(Ne[y.p]="-="+te()),S.set([Oe,Me],Ne)),p&&!(yn&&d.end>=Ct(_,y)))Ne=ct(p),di=y===Ae,Jt=te(),at=parseFloat(ye(y.a))+de,!ve&&W>1&&(Tt=(X?J.scrollingElement||rt:_).style,Tt={style:Tt,value:Tt["overflow"+y.a.toUpperCase()]},X&&ct(K)["overflow"+y.a.toUpperCase()]!=="scroll"&&(Tt.style["overflow"+y.a.toUpperCase()]="scroll")),Zi(p,De,Ne),Qt=Ei(p),Ue=Ot(p,!0),Gi=D&&zt(_,di?et:Ae)(),m?(Se=[m+y.os2,oe+de+Ce],Se.t=De,Be=m===ke?Ni(p,y)+oe+de:0,Be&&(Se.push(y.d,Be+Ce),De.style.flexBasis!=="auto"&&(De.style.flexBasis=Be+Ce)),Is(Se),st&&H.forEach(function(Yt){Yt.pin===st&&Yt.vars.pinSpacing!==!1&&(Yt._subPinOffset=!0)}),D&&te(yt)):(Be=Ni(p,y),Be&&De.style.flexBasis!=="auto"&&(De.style.flexBasis=Be+Ce)),D&&(Ve={top:Ue.top+(di?Jt-C:Gi)+Ce,left:Ue.left+(di?Gi:Jt-C)+Ce,boxSizing:"border-box",position:"fixed"},Ve[is]=Ve["max"+Rs]=Math.ceil(Ue.width)+Ce,Ve[ns]=Ve["max"+Rn]=Math.ceil(Ue.height)+Ce,Ve[lt]=Ve[lt+ei]=Ve[lt+Zs]=Ve[lt+ti]=Ve[lt+Js]="0",Ve[ke]=Ne[ke],Ve[ke+ei]=Ne[ke+ei],Ve[ke+Zs]=Ne[ke+Zs],Ve[ke+ti]=Ne[ke+ti],Ve[ke+Js]=Ne[ke+Js],ht=xo(R,Ve,V),Ze&&te(0)),i?(Vn=i._initted,zi(1),i.render(i.duration(),!0,!0),Rt=ye(y.a)-at+oe+de,Lt=Math.abs(oe-Rt)>1,D&&Lt&&ht.splice(ht.length-2,2),i.render(0,!0,!0),Vn||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),zi(0)):Rt=oe,Tt&&(Tt.value?Tt.style["overflow"+y.a.toUpperCase()]=Tt.value:Tt.style.removeProperty("overflow-"+y.a));else if(g&&te()&&!T)for(Ue=g.parentNode;Ue&&Ue!==K;)Ue._pinOffset&&(C-=Ue._pinOffset,W-=Ue._pinOffset),Ue=Ue.parentNode;Bs&&Bs.forEach(function(Yt){return Yt.revert(!1,!0)}),d.start=C,d.end=W,ae=Te=Ze?yt:te(),!T&&!Ze&&(ae<yt&&te(yt),d.scroll.rec=0),d.revert(!1,!0),Q=qe(),mt&&(me=-1,mt.restart(!0)),We=0,i&&F&&(i._initted||Zt)&&i.progress()!==Zt&&i.progress(Zt||0,!0).render(i.time(),!0,!0),(Ye||$!==d.progress||T||k||i&&!i._initted)&&(i&&!F&&(i._initted||$||i.vars.immediateRender!==!1)&&i.totalProgress(T&&C<-.001&&!$?S.utils.normalize(C,W,0):$,!0),d.progress=Ye||(ae-C)/oe===$?0:$),p&&m&&(De._pinOffset=Math.round(d.progress*Rt)),q&&q.invalidate(),isNaN(Ns)||(Ns-=S.getProperty(h,y.p),ui-=S.getProperty(xe,y.p),xi(h,y,Ns),xi(Oe,y,Ns-(O||0)),xi(xe,y,ui),xi(Me,y,ui-(O||0))),Ye&&!Ze&&d.update(),u&&!Ze&&!xt&&(xt=!0,u(d),xt=!1)}},d.getVelocity=function(){return(te()-Te)/(qe()-Hs)*1e3||0},d.endAnimation=function(){$s(d.callbackAnimation),i&&(q?q.progress(1):i.paused()?F||$s(i,d.direction<0,1):$s(i,i.reversed()))},d.labelToScroll=function(b){return i&&i.labels&&(C||d.refresh()||C)+i.labels[b]/i.duration()*oe||0},d.getTrailing=function(b){var P=H.indexOf(d),I=d.direction>0?H.slice(0,P).reverse():H.slice(P+1);return(nt(b)?I.filter(function(O){return O.vars.preventOverlaps===b}):I).filter(function(O){return d.direction>0?O.end<=C:O.start>=W})},d.update=function(b,P,I){if(!(T&&!I&&!b)){var O=Ze===!0?yt:d.scroll(),Re=b?0:(O-C)/oe,G=Re<0?0:Re>1?1:Re||0,ve=d.progress,Ye,he,de,se,vt,ue,st,St;if(P&&(Te=ae,ae=T?te():O,E&&(jt=Ht,Ht=i&&!F?i.totalProgress():G)),x&&p&&!We&&!gi&&dt&&(!G&&C<O+(O-Te)/(qe()-Hs)*x?G=1e-4:G===1&&W>O+(O-Te)/(qe()-Hs)*x&&(G=.9999)),G!==ve&&d.enabled){if(Ye=d.isActive=!!G&&G<1,he=!!ve&&ve<1,ue=Ye!==he,vt=ue||!!G!=!!ve,d.direction=G>ve?1:-1,d.progress=G,vt&&!We&&(de=G&&!ve?0:G===1?1:ve===1?2:3,F&&(se=!ue&&Z[de+1]!=="none"&&Z[de+1]||Z[de],St=i&&(se==="complete"||se==="reset"||se in i))),z&&(ue||St)&&(St||f||!i)&&(Xe(z)?z(d):d.getTrailing(z).forEach(function(Jt){return Jt.endAnimation()})),F||(q&&!We&&!gi?(q._dp._time-q._start!==q._time&&q.render(q._dp._time-q._start),q.resetTo?q.resetTo("totalProgress",G,i._tTime/i._tDur):(q.vars.totalProgress=G,q.invalidate().restart())):i&&i.totalProgress(G,!!(We&&(Q||b)))),p){if(b&&m&&(De.style[m+y.os2]=Os),!D)ft(Us(at+Rt*G));else if(vt){if(st=!b&&G>ve&&W+1>O&&O+1>=Ct(_,y),V)if(!b&&(Ye||st)){var Be=Ot(p,!0),Ne=O-C;ir(p,K,Be.top+(y===Ae?Ne:0)+Ce,Be.left+(y===Ae?0:Ne)+Ce)}else ir(p,De);Is(Ye||st?ht:Qt),Lt&&G<1&&Ye||ft(at+(G===1&&!st?Rt:0))}}E&&!re.tween&&!We&&!gi&&mt.restart(!0),a&&(ue||v&&G&&(G<1||!Qi))&&oi(a.targets).forEach(function(Jt){return Jt.classList[Ye||v?"add":"remove"](a.className)}),o&&!F&&!b&&o(d),vt&&!We?(F&&(St&&(se==="complete"?i.pause().totalProgress(1):se==="reset"?i.restart(!0).pause():se==="restart"?i.restart(!0):i[se]()),o&&o(d)),(ue||!Qi)&&(l&&ue&&ms(d,l),we[de]&&ms(d,we[de]),v&&(G===1?d.kill(!1,1):we[de]=0),ue||(de=G===1?1:3,we[de]&&ms(d,we[de]))),ie&&!Ye&&Math.abs(d.getVelocity())>(Vs(ie)?ie:2500)&&($s(d.callbackAnimation),q?q.progress(1):$s(i,se==="reverse"?1:!G,1))):F&&o&&!We&&o(d)}if(hs){var Ue=T?O/T.duration()*(T._caScrollDist||0):O;ci(Ue+(h._isFlipped?1:0)),hs(Ue)}gs&&gs(-O/T.duration()*(T._caScrollDist||0))}},d.enable=function(b,P){d.enabled||(d.enabled=!0,Pe(_,"resize",Ws),X||Pe(_,"scroll",vs),ne&&Pe(r,"refreshInit",ne),b!==!1&&(d.progress=$=0,ae=Te=me=te()),P!==!1&&d.refresh())},d.getTween=function(b){return b&&re?re.tween:q},d.setPositions=function(b,P,I,O){if(T){var Re=T.scrollTrigger,G=T.duration(),ve=Re.end-Re.start;b=Re.start+ve*b/G,P=Re.start+ve*P/G}d.refresh(!1,!1,{start:zn(b,I&&!!d._startClamp),end:zn(P,I&&!!d._endClamp)},O),d.update()},d.adjustPinSpacing=function(b){if(Se&&b){var P=Se.indexOf(y.d)+1;Se[P]=parseFloat(Se[P])+b+Ce,Se[1]=parseFloat(Se[1])+b+Ce,Is(Se)}},d.disable=function(b,P){if(b!==!1&&d.revert(!0,!0),d.enabled&&(d.enabled=d.isActive=!1,P||q&&q.pause(),yt=0,Ee&&(Ee.uncache=1),ne&&Le(r,"refreshInit",ne),mt&&(mt.pause(),re.tween&&re.tween.kill()&&(re.tween=0)),!X)){for(var I=H.length;I--;)if(H[I].scroller===_&&H[I]!==d)return;Le(_,"resize",Ws),X||Le(_,"scroll",vs)}},d.kill=function(b,P){d.disable(b,P),q&&!P&&q.kill(),c&&delete vn[c];var I=H.indexOf(d);I>=0&&H.splice(I,1),I===Ke&&Ii>0&&Ke--,I=0,H.forEach(function(O){return O.scroller===d.scroller&&(I=1)}),I||Ze||(d.scroll.rec=0),i&&(i.scrollTrigger=null,b&&i.revert({kill:!1}),P||i.kill()),Oe&&[Oe,Me,h,xe].forEach(function(O){return O.parentNode&&O.parentNode.removeChild(O)}),si===d&&(si=0),p&&(Ee&&(Ee.uncache=1),I=0,H.forEach(function(O){return O.pin===p&&I++}),I||(Ee.spacer=0)),t.onKill&&t.onKill(d)},H.push(d),d.enable(!1,!1),Pt&&Pt(d),i&&i.add&&!oe){var j=d.update;d.update=function(){d.update=j,U.cache++,C||W||d.refresh()},S.delayedCall(.01,d.update),oe=.01,C=W=0}else d.refresh();p&&bo()},r.register=function(t){return Es||(S=t||Mr(),Or()&&window.document&&r.enable(),Es=Ys),Es},r.defaults=function(t){if(t)for(var i in t)bi[i]=t[i];return bi},r.disable=function(t,i){Ys=0,H.forEach(function(o){return o[i?"kill":"disable"](t)}),Le(Y,"wheel",vs),Le(J,"scroll",vs),clearInterval(fi),Le(J,"touchcancel",_t),Le(K,"touchstart",_t),yi(Le,J,"pointerdown,touchstart,mousedown",Qn),yi(Le,J,"pointerup,touchend,mouseup",jn),Bi.kill(),mi(Le);for(var n=0;n<U.length;n+=3)vi(Le,U[n],U[n+1]),vi(Le,U[n],U[n+2])},r.enable=function(){if(Y=window,J=document,rt=J.documentElement,K=J.body,S){if(oi=S.utils.toArray,js=S.utils.clamp,mn=S.core.context||_t,zi=S.core.suppressOverwrites||_t,Cn=Y.history.scrollRestoration||"auto",bn=Y.pageYOffset||0,S.core.globals("ScrollTrigger",r),K){Ys=1,As=document.createElement("div"),As.style.height="100vh",As.style.position="absolute",qr(),po(),be.register(S),r.isTouch=be.isTouch,Vt=be.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),gn=be.isTouch===1,Pe(Y,"wheel",vs),_n=[Y,J,rt,K],S.matchMedia?(r.matchMedia=function(u){var f=S.matchMedia(),g;for(g in u)f.add(g,u[g]);return f},S.addEventListener("matchMediaInit",function(){Vr(),Pn()}),S.addEventListener("matchMediaRevert",function(){return Ur()}),S.addEventListener("matchMedia",function(){ss(0,1),cs("matchMedia")}),S.matchMedia().add("(orientation: portrait)",function(){return Ki(),Ki})):console.warn("Requires GSAP 3.11.0 or later"),Ki(),Pe(J,"scroll",vs);var t=K.hasAttribute("style"),i=K.style,n=i.borderTopStyle,o=S.core.Animation.prototype,a,c;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Ot(K),Ae.m=Math.round(a.top+Ae.sc())||0,et.m=Math.round(a.left+et.sc())||0,n?i.borderTopStyle=n:i.removeProperty("border-top-style"),t||(K.setAttribute("style",""),K.removeAttribute("style")),fi=setInterval(Jn,250),S.delayedCall(.5,function(){return gi=0}),Pe(J,"touchcancel",_t),Pe(K,"touchstart",_t),yi(Pe,J,"pointerdown,touchstart,mousedown",Qn),yi(Pe,J,"pointerup,touchend,mouseup",jn),fn=S.utils.checkPrefix("transform"),Di.push(fn),Es=qe(),Bi=S.delayedCall(.2,ss).pause(),xs=[J,"visibilitychange",function(){var u=Y.innerWidth,f=Y.innerHeight;J.hidden?(qn=u,Xn=f):(qn!==u||Xn!==f)&&Ws()},J,"DOMContentLoaded",ss,Y,"load",ss,Y,"resize",Ws],mi(Pe),H.forEach(function(u){return u.enable(0,1)}),c=0;c<U.length;c+=3)vi(Le,U[c],U[c+1]),vi(Le,U[c],U[c+2])}else if(J){var l=function u(){r.enable(),J.removeEventListener("DOMContentLoaded",u)};J.addEventListener("DOMContentLoaded",l)}}},r.config=function(t){"limitCallbacks"in t&&(Qi=!!t.limitCallbacks);var i=t.syncInterval;i&&clearInterval(fi)||(fi=i)&&setInterval(Jn,i),"ignoreMobileResize"in t&&(gn=r.isTouch===1&&t.ignoreMobileResize),"autoRefreshEvents"in t&&(mi(Le)||mi(Pe,t.autoRefreshEvents||"none"),Rr=(t.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(t,i){var n=tt(t),o=U.indexOf(n),a=as(n);~o&&U.splice(o,a?6:2),i&&(a?At.unshift(Y,i,K,i,rt,i):At.unshift(n,i))},r.clearMatchMedia=function(t){H.forEach(function(i){return i._ctx&&i._ctx.query===t&&i._ctx.kill(!0,!0)})},r.isInViewport=function(t,i,n){var o=(nt(t)?tt(t):t).getBoundingClientRect(),a=o[n?is:ns]*i||0;return n?o.right-a>0&&o.left+a<Y.innerWidth:o.bottom-a>0&&o.top+a<Y.innerHeight},r.positionInViewport=function(t,i,n){nt(t)&&(t=tt(t));var o=t.getBoundingClientRect(),a=o[n?is:ns],c=i==null?a/2:i in Fi?Fi[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return n?(o.left+c)/Y.innerWidth:(o.top+c)/Y.innerHeight},r.killAll=function(t){if(H.slice(0).forEach(function(n){return n.vars.id!=="ScrollSmoother"&&n.kill()}),t!==!0){var i=ls.killAll||[];ls={},i.forEach(function(n){return n()})}},r})();M.version="3.15.0";M.saveStyles=function(r){return r?oi(r).forEach(function(e){if(e&&e.style){var s=it.indexOf(e);s>=0&&it.splice(s,5),it.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),S.core.getCache(e),mn())}}):it};M.revert=function(r,e){return Pn(!r,e)};M.create=function(r,e){return new M(r,e)};M.refresh=function(r){return r?Ws(!0):(Es||M.register())&&ss(!0)};M.update=function(r){return++U.cache&&Ft(r===!0?2:0)};M.clearScrollMemory=Wr;M.maxScroll=function(r,e){return Ct(r,e?et:Ae)};M.getScrollFunc=function(r,e){return zt(tt(r),e?et:Ae)};M.getById=function(r){return vn[r]};M.getAll=function(){return H.filter(function(r){return r.vars.id!=="ScrollSmoother"})};M.isScrolling=function(){return!!dt};M.snapDirectional=Ln;M.addEventListener=function(r,e){var s=ls[r]||(ls[r]=[]);~s.indexOf(e)||s.push(e)};M.removeEventListener=function(r,e){var s=ls[r],t=s&&s.indexOf(e);t>=0&&s.splice(t,1)};M.batch=function(r,e){var s=[],t={},i=e.interval||.016,n=e.batchMax||1e9,o=function(l,u){var f=[],g=[],p=S.delayedCall(i,function(){u(f,g),f=[],g=[]}).pause();return function(m){f.length||p.restart(!0),f.push(m.trigger),g.push(m),n<=f.length&&p.progress(1)}},a;for(a in e)t[a]=a.substr(0,2)==="on"&&Xe(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Xe(n)&&(n=n(),Pe(M,"refresh",function(){return n=e.batchMax()})),oi(r).forEach(function(c){var l={};for(a in t)l[a]=t[a];l.trigger=c,s.push(M.create(l))}),s};var rr=function(e,s,t,i){return s>i?e(i):s<0&&e(0),t>i?(i-s)/(t-s):t<0?s/(s-t):1},Ji=function r(e,s){s===!0?e.style.removeProperty("touch-action"):e.style.touchAction=s===!0?"auto":s?"pan-"+s+(be.isTouch?" pinch-zoom":""):"none",e===rt&&r(K,s)},Si={auto:1,scroll:1},ko=function(e){var s=e.event,t=e.target,i=e.axis,n=(s.changedTouches?s.changedTouches[0]:s).target,o=n._gsap||S.core.getCache(n),a=qe(),c;if(!o._isScrollT||a-o._isScrollT>2e3){for(;n&&n!==K&&(n.scrollHeight<=n.clientHeight&&n.scrollWidth<=n.clientWidth||!(Si[(c=ct(n)).overflowY]||Si[c.overflowX]));)n=n.parentNode;o._isScroll=n&&n!==t&&!as(n)&&(Si[(c=ct(n)).overflowY]||Si[c.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(s.stopPropagation(),s._gsapAllow=!0)},Gr=function(e,s,t,i){return be.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:s,onWheel:i=i&&ko,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return t&&Pe(J,be.eventTypes[0],ar,!1,!0)},onDisable:function(){return Le(J,be.eventTypes[0],ar,!0)}})},To=/(input|label|select|textarea)/i,or,ar=function(e){var s=To.test(e.target.tagName);(s||or)&&(e._gsapAllow=!0,or=s)},_o=function(e){ts(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var s=e,t=s.normalizeScrollX,i=s.momentum,n=s.allowNestedScroll,o=s.onRelease,a,c,l=tt(e.target)||rt,u=S.core.globals().ScrollSmoother,f=u&&u.get(),g=Vt&&(e.content&&tt(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),p=zt(l,Ae),m=zt(l,et),k=1,x=(be.isTouch&&Y.visualViewport?Y.visualViewport.scale*Y.visualViewport.width:Y.outerWidth)/Y.innerWidth,A=0,w=Xe(i)?function(){return i(a)}:function(){return i||2.8},v,E,V=Gr(l,e.type,!0,n),B=function(){return E=!1},T=_t,ie=_t,z=function(){c=Ct(l,Ae),ie=js(Vt?1:0,c),t&&(T=js(0,Ct(l,et))),v=rs},y=function(){g._gsap.y=Us(parseFloat(g._gsap.y)+p.offset)+"px",g.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(g._gsap.y)+", 0, 1)",p.offset=p.cacheID=0},F=function(){if(E){requestAnimationFrame(B);var pe=Us(a.deltaY/2),ce=ie(p.v-pe);if(g&&ce!==p.v+p.offset){p.offset=ce-p.v;var d=Us((parseFloat(g&&g._gsap.y)||0)-p.offset);g.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+d+", 0, 1)",g._gsap.y=d+"px",p.cacheID=U.cache,Ft()}return!0}p.offset&&y(),E=!0},_,fe,X,D,we=function(){z(),_.isActive()&&_.vars.scrollY>c&&(p()>c?_.progress(1)&&p(c):_.resetTo("scrollY",c))};return g&&S.set(g,{y:"+=0"}),e.ignoreCheck=function(Z){return Vt&&Z.type==="touchmove"&&F()||k>1.05&&Z.type!=="touchstart"||a.isGesturing||Z.touches&&Z.touches.length>1},e.onPress=function(){E=!1;var Z=k;k=Us((Y.visualViewport&&Y.visualViewport.scale||1)/x),_.pause(),Z!==k&&Ji(l,k>1.01?!0:t?!1:"x"),fe=m(),X=p(),z(),v=rs},e.onRelease=e.onGestureStart=function(Z,pe){if(p.offset&&y(),!pe)D.restart(!0);else{U.cache++;var ce=w(),d,ne;t&&(d=m(),ne=d+ce*.05*-Z.velocityX/.227,ce*=rr(m,d,ne,Ct(l,et)),_.vars.scrollX=T(ne)),d=p(),ne=d+ce*.05*-Z.velocityY/.227,ce*=rr(p,d,ne,Ct(l,Ae)),_.vars.scrollY=ie(ne),_.invalidate().duration(ce).play(.01),(Vt&&_.vars.scrollY>=c||d>=c-1)&&S.to({},{onUpdate:we,duration:ce})}o&&o(Z)},e.onWheel=function(){_._ts&&_.pause(),qe()-A>1e3&&(v=0,A=qe())},e.onChange=function(Z,pe,ce,d,ne){if(rs!==v&&z(),pe&&t&&m(T(d[2]===pe?fe+(Z.startX-Z.x):m()+pe-d[1])),ce){p.offset&&y();var ge=ne[2]===ce,pt=ge?X+Z.startY-Z.y:p()+ce-ne[1],me=ie(pt);ge&&pt!==me&&(X+=me-pt),p(me)}(ce||pe)&&Ft()},e.onEnable=function(){Ji(l,t?!1:"x"),M.addEventListener("refresh",we),Pe(Y,"resize",we),p.smooth&&(p.target.style.scrollBehavior="auto",p.smooth=m.smooth=!1),V.enable()},e.onDisable=function(){Ji(l,!0),Le(Y,"resize",we),M.removeEventListener("refresh",we),V.kill()},e.lockAxis=e.lockAxis!==!1,a=new be(e),a.iOS=Vt,Vt&&!p()&&p(1),Vt&&S.ticker.add(_t),D=a._dc,_=S.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:t?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Xr(p,p(),function(){return _.pause()})},onUpdate:Ft,onComplete:D.vars.onComplete}),a};M.sort=function(r){if(Xe(r))return H.sort(r);var e=Y.pageYOffset||0;return M.getAll().forEach(function(s){return s._sortY=s.trigger?e+s.trigger.getBoundingClientRect().top:s.start+Y.innerHeight}),H.sort(r||function(s,t){return(s.vars.refreshPriority||0)*-1e6+(s.vars.containerAnimation?1e6:s._sortY)-((t.vars.containerAnimation?1e6:t._sortY)+(t.vars.refreshPriority||0)*-1e6)})};M.observe=function(r){return new be(r)};M.normalizeScroll=function(r){if(typeof r>"u")return je;if(r===!0&&je)return je.enable();if(r===!1){je&&je.kill(),je=r;return}var e=r instanceof be?r:_o(r);return je&&je.target===e.target&&je.kill(),as(e.target)&&(je=e),e};M.core={_getVelocityProp:hn,_inputObserver:Gr,_scrollers:U,_proxies:At,bridge:{ss:function(){dt||cs("scrollStart"),dt=qe()},ref:function(){return We}}};Mr()&&S.registerPlugin(M);/*!
 * matrix 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Bt,os,On,Wi,qs,Li,$i,ii,wt="transform",En=wt+"Origin",zr,Mn=function(e){var s=e.ownerDocument||e;for(!(wt in e.style)&&("msTransform"in e.style)&&(wt="msTransform",En=wt+"Origin");s.parentNode&&(s=s.parentNode););if(os=window,$i=new ds,s){Bt=s,On=s.documentElement,Wi=s.body,ii=Bt.createElementNS("http://www.w3.org/2000/svg","g"),ii.style.transform="none";var t=s.createElement("div"),i=s.createElement("div"),n=s&&(s.body||s.firstElementChild);n&&n.appendChild&&(n.appendChild(t),t.appendChild(i),t.style.position="static",t.style.transform="translate3d(0,0,1px)",zr=i.offsetParent!==t,n.removeChild(t))}return s},Co=function(e){for(var s,t;e&&e!==Wi;)t=e._gsap,t&&t.uncache&&t.get(e,"x"),t&&!t.scaleX&&!t.scaleY&&t.renderTransform&&(t.scaleX=t.scaleY=1e-4,t.renderTransform(1,t),s?s.push(t):s=[t]),e=e.parentNode;return s},Qr=[],jr=[],Bn=function(){return os.pageYOffset||Bt.scrollTop||On.scrollTop||Wi.scrollTop||0},Nn=function(){return os.pageXOffset||Bt.scrollLeft||On.scrollLeft||Wi.scrollLeft||0},Fn=function(e){return e.ownerSVGElement||((e.tagName+"").toLowerCase()==="svg"?e:null)},Ao=function r(e){if(os.getComputedStyle(e).position==="fixed")return!0;if(e=e.parentNode,e&&e.nodeType===1)return r(e)},en=function r(e,s){if(e.parentNode&&(Bt||Mn(e))){var t=Fn(e),i=t?t.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",n=t?s?"rect":"g":"div",o=s!==2?0:100,a=s===3?100:0,c={position:"absolute",display:"block",pointerEvents:"none",margin:"0",padding:"0"},l=Bt.createElementNS?Bt.createElementNS(i.replace(/^https/,"http"),n):Bt.createElement(n);return s&&(t?(Li||(Li=r(e)),l.setAttribute("width",.01),l.setAttribute("height",.01),l.setAttribute("transform","translate("+o+","+a+")"),l.setAttribute("fill","transparent"),Li.appendChild(l)):(qs||(qs=r(e),Object.assign(qs.style,c)),Object.assign(l.style,c,{width:"0.1px",height:"0.1px",top:a+"px",left:o+"px"}),qs.appendChild(l))),l}throw"Need document and parent."},Io=function(e){for(var s=new ds,t=0;t<e.numberOfItems;t++)s.multiply(e.getItem(t).matrix);return s},Kr=function(e){var s=e.getCTM(),t;return s||(t=e.style[wt],e.style[wt]="none",e.appendChild(ii),s=ii.getCTM(),e.removeChild(ii),t?e.style[wt]=t:e.style.removeProperty(wt.replace(/([A-Z])/g,"-$1").toLowerCase())),s||$i.clone()},Do=function(e,s){var t=Fn(e),i=e===t,n=t?Qr:jr,o=e.parentNode,a=o&&!t&&o.shadowRoot&&o.shadowRoot.appendChild?o.shadowRoot:o,c,l,u,f,g,p;if(e===os)return e;if(n.length||n.push(en(e,1),en(e,2),en(e,3)),c=t?Li:qs,t)i?(u=Kr(e),f=-u.e/u.a,g=-u.f/u.d,l=$i):e.getBBox?(u=e.getBBox(),l=e.transform?e.transform.baseVal:{},l=l.numberOfItems?l.numberOfItems>1?Io(l):l.getItem(0).matrix:$i,f=l.a*u.x+l.c*u.y,g=l.b*u.x+l.d*u.y):(l=new ds,f=g=0),s&&e.tagName.toLowerCase()==="g"&&(f=g=0),(i||!e.getBoundingClientRect().width?t:o).appendChild(c),c.setAttribute("transform","matrix("+l.a+","+l.b+","+l.c+","+l.d+","+(l.e+f)+","+(l.f+g)+")");else{if(f=g=0,zr)for(l=e.offsetParent,u=e;u&&(u=u.parentNode)&&u!==l&&u.parentNode;)(os.getComputedStyle(u)[wt]+"").length>4&&(f=u.offsetLeft,g=u.offsetTop,u=0);if(p=os.getComputedStyle(e),p.position!=="absolute"&&p.position!=="fixed")for(l=e.offsetParent;o&&o!==l;)f+=o.scrollLeft||0,g+=o.scrollTop||0,o=o.parentNode;u=c.style,u.top=e.offsetTop-g+"px",u.left=e.offsetLeft-f+"px",u[wt]=p[wt],u[En]=p[En],u.position=p.position==="fixed"?"fixed":"absolute",a.appendChild(c)}return c},tn=function(e,s,t,i,n,o,a){return e.a=s,e.b=t,e.c=i,e.d=n,e.e=o,e.f=a,e},ds=(function(){function r(s,t,i,n,o,a){s===void 0&&(s=1),t===void 0&&(t=0),i===void 0&&(i=0),n===void 0&&(n=1),o===void 0&&(o=0),a===void 0&&(a=0),tn(this,s,t,i,n,o,a)}var e=r.prototype;return e.inverse=function(){var t=this.a,i=this.b,n=this.c,o=this.d,a=this.e,c=this.f,l=t*o-i*n||1e-10;return tn(this,o/l,-i/l,-n/l,t/l,(n*c-o*a)/l,-(t*c-i*a)/l)},e.multiply=function(t){var i=this.a,n=this.b,o=this.c,a=this.d,c=this.e,l=this.f,u=t.a,f=t.c,g=t.b,p=t.d,m=t.e,k=t.f;return tn(this,u*i+g*o,u*n+g*a,f*i+p*o,f*n+p*a,c+m*i+k*o,l+m*n+k*a)},e.clone=function(){return new r(this.a,this.b,this.c,this.d,this.e,this.f)},e.equals=function(t){var i=this.a,n=this.b,o=this.c,a=this.d,c=this.e,l=this.f;return i===t.a&&n===t.b&&o===t.c&&a===t.d&&c===t.e&&l===t.f},e.apply=function(t,i){i===void 0&&(i={});var n=t.x,o=t.y,a=this.a,c=this.b,l=this.c,u=this.d,f=this.e,g=this.f;return i.x=n*a+o*l+f||0,i.y=n*c+o*u+g||0,i},r})();function It(r,e,s,t){if(!r||!r.parentNode||(Bt||Mn(r)).documentElement===r)return new ds;var i=Co(r),n=Fn(r),o=n?Qr:jr,a=Do(r,s),c=o[0].getBoundingClientRect(),l=o[1].getBoundingClientRect(),u=o[2].getBoundingClientRect(),f=a.parentNode,g=!t&&Ao(r),p=new ds((l.left-c.left)/100,(l.top-c.top)/100,(u.left-c.left)/100,(u.top-c.top)/100,c.left+(g?0:Nn()),c.top+(g?0:Bn()));if(f.removeChild(a),i)for(c=i.length;c--;)l=i[c],l.scaleX=l.scaleY=0,l.renderTransform(1,l);return e?p.inverse():p}/*!
 * Flip 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ro=1,Ls,Fe,le,ni,Wt,Nt,xn,lr=function(e,s){return e.actions.forEach(function(t){return t.vars[s]&&t.vars[s](t)})},Sn={},cr=180/Math.PI,Lo=Math.PI/180,Hi={},dr={},qi={},$n=function(e){return typeof e=="string"?e.split(" ").join("").split(","):e},Po=$n("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"),Xi=$n("transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"),ri=function(e){return Ls(e)[0]||console.warn("Element not found:",e)},ks=function(e){return Math.round(e*1e4)/1e4||0},sn=function(e,s,t){return e.forEach(function(i){return i.classList[t](s)})},ur={zIndex:1,kill:1,simple:1,spin:1,clearProps:1,targets:1,toggleClass:1,onComplete:1,onUpdate:1,onInterrupt:1,onStart:1,delay:1,repeat:1,repeatDelay:1,yoyo:1,scale:1,fade:1,absolute:1,props:1,onEnter:1,onLeave:1,custom:1,paused:1,nested:1,prune:1,absoluteOnLeave:1},Zr={zIndex:1,simple:1,clearProps:1,scale:1,absolute:1,fitChild:1,getVars:1,props:1},Jr=function(e){return e.replace(/([A-Z])/g,"-$1").toLowerCase()},Ts=function(e,s){var t={},i;for(i in e)s[i]||(t[i]=e[i]);return t},Hn={},eo=function(e){var s=Hn[e]=$n(e);return qi[e]=s.concat(Xi),s},Oo=function(e){var s=e._gsap||Fe.core.getCache(e);return s.gmCache===Fe.ticker.frame?s.gMatrix:(s.gmCache=Fe.ticker.frame,s.gMatrix=It(e,!0,!1,!0))},Mo=function r(e,s,t){t===void 0&&(t=0);for(var i=e.parentNode,n=1e3*Math.pow(10,t)*(s?-1:1),o=s?-n*900:0;e;)o+=n,e=e.previousSibling;return i?o+r(i,s,t+1):o},Yi=function(e,s,t){return e.forEach(function(i){return i.d=Mo(t?i.element:i.t,s)}),e.sort(function(i,n){return i.d-n.d}),e},li=function(e,s){for(var t=e.element.style,i=e.css=e.css||[],n=s.length,o,a;n--;)o=s[n],a=t[o]||t.getPropertyValue(o),i.push(a?o:dr[o]||(dr[o]=Jr(o)),a);return t},Ui=function(e){var s=e.css,t=e.element.style,i=0;for(e.cache.uncache=1;i<s.length;i+=2)s[i+1]?t[s[i]]=s[i+1]:t.removeProperty(s[i]);!s[s.indexOf("transform")+1]&&t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},pr=function(e,s){e.forEach(function(t){return t.a.cache.uncache=1}),s||e.finalStates.forEach(Ui)},nn="paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(","),Yn=function(e,s,t){var i=e.element,n=e.width,o=e.height,a=e.uncache,c=e.getProp,l=i.style,u=4,f,g,p;if(typeof s!="object"&&(s=e),le&&t!==1)return le._abs.push({t:i,b:e,a:e,sd:0}),le._final.push(function(){return(e.cache.uncache=1)&&Ui(e)}),i;for(g=c("display")==="none",(!e.isVisible||g)&&(g&&(li(e,["display"]).display=s.display),e.matrix=s.matrix,e.width=n=e.width||s.width,e.height=o=e.height||s.height),li(e,nn),p=window.getComputedStyle(i);u--;)l[nn[u]]=p[nn[u]];if(l.gridArea="1 / 1 / 1 / 1",l.transition="none",l.position="absolute",l.width=n+"px",l.height=o+"px",l.top||(l.top="0px"),l.left||(l.left="0px"),a)f=new us(i);else if(f=Ts(e,Hi),f.position="absolute",e.simple){var m=i.getBoundingClientRect();f.matrix=new ds(1,0,0,1,m.left+Nn(),m.top+Bn())}else f.matrix=It(i,!1,!1,!0);return f=Ds(f,e,!0),e.x=Nt(f.x,.01),e.y=Nt(f.y,.01),i},hr=function(e,s){return s!==!0&&(s=Ls(s),e=e.filter(function(t){if(s.indexOf((t.sd<0?t.b:t.a).element)!==-1)return!0;t.t._gsap.renderTransform(1),t.b.isVisible&&(t.t.style.width=t.b.width+"px",t.t.style.height=t.b.height+"px")})),e},to=function(e){return Yi(e,!0).forEach(function(s){return(s.a.isVisible||s.b.isVisible)&&Yn(s.sd<0?s.b:s.a,s.b,1)})},Bo=function(e,s){return s&&e.idLookup[kn(s).id]||e.elementStates[0]},kn=function(e,s,t,i){return e instanceof us?e:e instanceof Et?Bo(e,i):new us(typeof e=="string"?ri(e)||console.warn(e+" not found"):e,s,t)},No=function(e,s){for(var t=Fe.getProperty(e.element,null,"native"),i=e.props={},n=s.length;n--;)i[s[n]]=(t(s[n])+"").trim();return i.zIndex&&(i.zIndex=parseFloat(i.zIndex)||0),e},so=function(e,s){var t=e.style||e,i;for(i in s)t[i]=s[i]},Fo=function(e){var s=e.getAttribute("data-flip-id");return s||e.setAttribute("data-flip-id",s="auto-"+Ro++),s},io=function(e){return e.map(function(s){return s.element})},fr=function(e,s,t){return e&&s.length&&t.add(e(io(s),t,new Et(s,0,!0)),0)},Ds=function(e,s,t,i,n,o){var a=e.element,c=e.cache,l=e.parent,u=e.x,f=e.y,g=s.width,p=s.height,m=s.scaleX,k=s.scaleY,x=s.rotation,A=s.bounds,w=o&&xn&&xn(a,"transform,width,height"),v=e,E=s.matrix,V=E.e,B=E.f,T=e.bounds.width!==A.width||e.bounds.height!==A.height||e.scaleX!==m||e.scaleY!==k||e.rotation!==x,ie=!T&&e.simple&&s.simple&&!n,z,y,F,_,fe,X,D;return ie||!l?(m=k=1,x=z=0):(fe=Oo(l),X=fe.clone().multiply(s.ctm?s.matrix.clone().multiply(s.ctm):s.matrix),x=ks(Math.atan2(X.b,X.a)*cr),z=ks(Math.atan2(X.c,X.d)*cr+x)%360,m=Math.sqrt(Math.pow(X.a,2)+Math.pow(X.b,2)),k=Math.sqrt(Math.pow(X.c,2)+Math.pow(X.d,2))*Math.cos(z*Lo),n&&(n=Ls(n)[0],_=Fe.getProperty(n),D=n.getBBox&&typeof n.getBBox=="function"&&n.getBBox(),v={scaleX:_("scaleX"),scaleY:_("scaleY"),width:D?D.width:Math.ceil(parseFloat(_("width","px"))),height:D?D.height:parseFloat(_("height","px"))}),c.rotation=x+"deg",c.skewX=z+"deg"),t?(m*=g===v.width||!v.width?1:g/v.width,k*=p===v.height||!v.height?1:p/v.height,c.scaleX=m,c.scaleY=k):(g=Nt(g*m/v.scaleX,0),p=Nt(p*k/v.scaleY,0),a.style.width=g+"px",a.style.height=p+"px"),i&&so(a,s.props),ie||!l?(u+=V-e.matrix.e,f+=B-e.matrix.f):T||l!==s.parent?(c.x=u+"px",c.y=f+"px",c.renderTransform(1,c),X=It(n||a,!1,!1,!0),y=fe.apply({x:X.e,y:X.f}),F=fe.apply({x:V,y:B}),u+=F.x-y.x,f+=F.y-y.y):(fe.e=fe.f=0,F=fe.apply({x:V-e.matrix.e,y:B-e.matrix.f}),u+=F.x,f+=F.y),u=Nt(u,.02),f=Nt(f,.02),o&&!(o instanceof us)?w&&w.revert():(c.x=u+"px",c.y=f+"px",c.renderTransform(1,c)),o&&(o.x=u,o.y=f,o.rotation=x,o.skewX=z,t?(o.scaleX=m,o.scaleY=k):(o.width=g,o.height=p)),o||c},rn=function(e,s){return e instanceof Et?e:new Et(e,s)},no=function(e,s,t){var i=e.idLookup[t],n=e.alt[t];return n.isVisible&&(!(s.getElementState(n.element)||n).isVisible||!i.isVisible)?n:i},on=[],an="width,height,overflowX,overflowY".split(","),ki,gr=function(e){if(e!==ki){var s=Wt.style,t=Wt.clientWidth===window.outerWidth,i=Wt.clientHeight===window.outerHeight,n=4;if(e&&(t||i)){for(;n--;)on[n]=s[an[n]];t&&(s.width=Wt.clientWidth+"px",s.overflowY="hidden"),i&&(s.height=Wt.clientHeight+"px",s.overflowX="hidden"),ki=e}else if(ki){for(;n--;)on[n]?s[an[n]]=on[n]:s.removeProperty(Jr(an[n]));ki=e}}},mr=function(e,s){for(var t=0;t<e.length;t+=3)Fe.set(e[t],{clearProps:!0}),e[t].setAttribute("style",e[t+s]),e[t]._gsap.gmCache=-1},ln=function(e,s,t,i){e instanceof Et&&s instanceof Et||console.warn("Not a valid state object."),t=t||{};var n=t,o=n.clearProps,a=n.onEnter,c=n.onLeave,l=n.absolute,u=n.absoluteOnLeave,f=n.custom,g=n.delay,p=n.paused,m=n.repeat,k=n.repeatDelay,x=n.yoyo,A=n.toggleClass,w=n.nested,v=n.zIndex,E=n.scale,V=n.fade,B=n.stagger,T=n.spin,ie=n.prune,z=("props"in t?t:e).props,y=Ts(t,ur),F=Fe.timeline({delay:g,paused:p,repeat:m,repeatDelay:k,yoyo:x,data:"isFlip"}),_=y,fe=[],X=[],D=[],we=[],Z=T===!0?1:T||0,pe=typeof T=="function"?T:function(){return Z},ce=e.interrupted||s.interrupted,d=F[i!==1?"to":"from"],ne,ge,pt,me,Q,$,te,re,Ee,Ie,ae,Te,C,W;for(ge in s.idLookup)ae=s.alt[ge]?no(s,e,ge):s.idLookup[ge],Q=ae.element,Ie=e.idLookup[ge],e.alt[ge]&&Q===Ie.element&&(e.alt[ge].isVisible||!ae.isVisible)&&(Ie=e.alt[ge]),Ie?($={t:Q,b:Ie,a:ae,sd:Ie.element===Q?0:ae.isVisible?1:-1},D.push($),$.sd&&($.sd<0&&($.b=ae,$.a=Ie),ce&&li($.b,z?qi[z]:Xi),V&&D.push($.swap={t:Ie.element,b:$.b,a:$.a,sd:-$.sd,swap:$})),Q._flip=Ie.element._flip=le?le.timeline:F):ae.isVisible&&(D.push({t:Q,b:Ts(ae,{isVisible:1}),a:ae,sd:0,entering:1}),Q._flip=le?le.timeline:F);if(z&&(Hn[z]||eo(z)).forEach(function(h){return y[h]=function(xe){return D[xe].a.props[h]}}),D.finalStates=Ee=[],Te=function(){Yi(D),gr(!0);var xe=[];for(me=0;me<D.length;me++)$=D[me],C=$.a,W=$.b,ie&&!C.isDifferent(W)&&!$.entering?D.splice(me--,1):(Q=$.t,w&&!($.sd<0)&&me&&(C=$.a=C.clone({matrix:It(Q,!1,!1,!0)})),W.isVisible&&C.isVisible?($.sd<0?(w&&mr(xe,1),te=new us(Q,z,e.simple),Ds(te,C,E,0,0,te),te.matrix=It(Q,!1,!1,!0),te.bounds=Q.getBoundingClientRect(),te.css=$.b.css,$.a=C=te,V&&(Q.style.opacity=ce?W.opacity:C.opacity),B&&we.push(Q),w&&(mr(xe,2),xe.push(Q,Q.getAttribute("style")))):$.sd>0&&V&&(Q.style.opacity=ce?C.opacity-W.opacity:"0"),Ds(C,W,E,z),w&&$.sd<0&&xe.push(Q.getAttribute("style"))):W.isVisible!==C.isVisible&&(W.isVisible?C.isVisible||(W.css=C.css,X.push(W),D.splice(me--,1),l&&w&&Ds(C,W,E,z)):(C.isVisible&&fe.push(C),D.splice(me--,1))),E||(Q.style.maxWidth=Math.max(C.width,W.width)+"px",Q.style.maxHeight=Math.max(C.height,W.height)+"px",Q.style.minWidth=Math.min(C.width,W.width)+"px",Q.style.minHeight=Math.min(C.height,W.height)+"px"),w&&A&&Q.classList.add(A)),Ee.push(C);var Ge;if(A&&(Ge=Ee.map(function(R){return R.element}),w&&Ge.forEach(function(R){return R.classList.remove(A)})),gr(!1),E?(y.scaleX=function(R){return D[R].a.scaleX},y.scaleY=function(R){return D[R].a.scaleY}):(y.width=function(R){return D[R].a.width+"px"},y.height=function(R){return D[R].a.height+"px"},y.autoRound=t.autoRound||!1),y.x=function(R){return D[R].a.x+"px"},y.y=function(R){return D[R].a.y+"px"},y.rotation=function(R){return D[R].a.rotation+(T?pe(R,re[R],re)*360:0)},y.skewX=function(R){return D[R].a.skewX},re=D.map(function(R){return R.t}),(v||v===0)&&(y.modifiers={zIndex:function(){return v}},y.zIndex=v,y.immediateRender=t.immediateRender!==!1),V&&(y.opacity=function(R){return D[R].sd<0?0:D[R].sd>0?D[R].a.opacity:"+=0"}),we.length){B=Fe.utils.distribute(B);var xt=re.slice(we.length);y.stagger=function(R,ht){return B(~we.indexOf(ht)?re.indexOf(D[R].swap.t):R,ht,xt)}}if(Po.forEach(function(R){return t[R]&&F.eventCallback(R,t[R],t[R+"Params"])}),f&&re.length){_=Ts(y,ur),"scale"in f&&(f.scaleX=f.scaleY=f.scale,delete f.scale);for(ge in f)ne=Ts(f[ge],Zr),ne[ge]=y[ge],!("duration"in ne)&&"duration"in y&&(ne.duration=y.duration),ne.stagger=y.stagger,d.call(F,re,ne,0),delete _[ge]}(re.length||X.length||fe.length)&&(A&&F.add(function(){return sn(Ge,A,F._zTime<0?"remove":"add")},0)&&!p&&sn(Ge,A,"add"),re.length&&d.call(F,re,_,0)),fr(a,fe,F),fr(c,X,F);var oe=le&&le.timeline;oe&&(oe.add(F,0),le._final.push(function(){return pr(D,!o)})),pt=F.duration(),F.call(function(){var R=F.time()>=pt;R&&!oe&&pr(D,!o),A&&sn(Ge,A,R?"remove":"add")})},u&&(l=D.filter(function(h){return!h.sd&&!h.a.isVisible&&h.b.isVisible}).map(function(h){return h.a.element})),le){var Oe;l&&(Oe=le._abs).push.apply(Oe,hr(D,l)),le._run.push(Te)}else l&&to(hr(D,l)),Te();var Me=le?le.timeline:F;return Me.revert=function(){return Un(Me,1,1)},Me},$o=function r(e){e.vars.onInterrupt&&e.vars.onInterrupt.apply(e,e.vars.onInterruptParams||[]),e.getChildren(!0,!1,!0).forEach(r)},Un=function(e,s,t){if(e&&e.progress()<1&&(!e.paused()||t))return s&&($o(e),s<2&&e.progress(1),e.kill()),!0},Ti=function(e){for(var s=e.idLookup={},t=e.alt={},i=e.elementStates,n=i.length,o;n--;)o=i[n],s[o.id]?t[o.id]=o:s[o.id]=o},Et=(function(){function r(s,t,i){if(this.props=t&&t.props,this.simple=!!(t&&t.simple),i)this.targets=io(s),this.elementStates=s,Ti(this);else{this.targets=Ls(s);var n=t&&(t.kill===!1||t.batch&&!t.kill);le&&!n&&le._kill.push(this),this.update(n||!!le)}}var e=r.prototype;return e.update=function(t){var i=this;return this.elementStates=this.targets.map(function(n){return new us(n,i.props,i.simple)}),Ti(this),this.interrupt(t),this.recordInlineStyles(),this},e.clear=function(){return this.targets.length=this.elementStates.length=0,Ti(this),this},e.fit=function(t,i,n){for(var o=Yi(this.elementStates.slice(0),!1,!0),a=(t||this).idLookup,c=0,l,u;c<o.length;c++)l=o[c],n&&(l.matrix=It(l.element,!1,!1,!0)),u=a[l.id],u&&Ds(l,u,i,!0,0,l),l.matrix=It(l.element,!1,!1,!0);return this},e.getProperty=function(t,i){var n=this.getElementState(t)||Hi;return(i in n?n:n.props||Hi)[i]},e.add=function(t){for(var i=t.targets.length,n=this.idLookup,o=this.alt,a,c,l;i--;)c=t.elementStates[i],l=n[c.id],l&&(c.element===l.element||o[c.id]&&o[c.id].element===c.element)?(a=this.elementStates.indexOf(c.element===l.element?l:o[c.id]),this.targets.splice(a,1,t.targets[i]),this.elementStates.splice(a,1,c)):(this.targets.push(t.targets[i]),this.elementStates.push(c));return t.interrupted&&(this.interrupted=!0),t.simple||(this.simple=!1),Ti(this),this},e.compare=function(t){var i=t.idLookup,n=this.idLookup,o=[],a=[],c=[],l=[],u=[],f=t.alt,g=this.alt,p=function(ie,z,y){return(ie.isVisible!==z.isVisible?ie.isVisible?c:l:ie.isVisible?a:o).push(y)&&u.push(y)},m=function(ie,z,y){return u.indexOf(y)<0&&p(ie,z,y)},k,x,A,w,v,E,V,B;for(A in i)v=f[A],E=g[A],k=v?no(t,this,A):i[A],w=k.element,x=n[A],E?(B=x.isVisible||!E.isVisible&&w===x.element?x:E,V=v&&!k.isVisible&&!v.isVisible&&B.element===v.element?v:k,V.isVisible&&B.isVisible&&V.element!==B.element?((V.isDifferent(B)?a:o).push(V.element,B.element),u.push(V.element,B.element)):p(V,B,V.element),v&&V.element===v.element&&(v=i[A]),m(V.element!==x.element&&v?v:V,x,x.element),m(v&&v.element===E.element?v:V,E,E.element),v&&m(v,E.element===v.element?E:x,v.element)):(x?x.isDifferent(k)?p(k,x,w):o.push(w):c.push(w),v&&m(v,x,v.element));for(A in n)i[A]||(l.push(n[A].element),g[A]&&l.push(g[A].element));return{changed:a,unchanged:o,enter:c,leave:l}},e.recordInlineStyles=function(){for(var t=qi[this.props]||Xi,i=this.elementStates.length;i--;)li(this.elementStates[i],t)},e.interrupt=function(t){var i=this,n=[];this.targets.forEach(function(o){var a=o._flip,c=Un(a,t?0:1);t&&c&&n.indexOf(a)<0&&a.add(function(){return i.updateVisibility()}),c&&n.push(a)}),!t&&n.length&&this.updateVisibility(),this.interrupted||(this.interrupted=!!n.length)},e.updateVisibility=function(){this.elementStates.forEach(function(t){var i=t.element.getBoundingClientRect();t.isVisible=!!(i.width||i.height||i.top||i.left),t.uncache=1})},e.getElementState=function(t){return this.elementStates[this.targets.indexOf(ri(t))]},e.makeAbsolute=function(){return Yi(this.elementStates.slice(0),!0,!0).map(Yn)},r})(),us=(function(){function r(s,t,i){s instanceof r?Object.assign(this,s,t||{}):(this.element=s,this.update(t,i))}var e=r.prototype;return e.isDifferent=function(t){var i=this.bounds,n=t.bounds;return i.top!==n.top||i.left!==n.left||i.width!==n.width||i.height!==n.height||!this.matrix.equals(t.matrix)||this.opacity!==t.opacity||this.props&&t.props&&JSON.stringify(this.props)!==JSON.stringify(t.props)},e.clone=function(t){return new r(this,t)},e.update=function(t,i){var n=this,o=n.element,a=Fe.getProperty(o),c=Fe.core.getCache(o),l=o.getBoundingClientRect(),u=o.getBBox&&typeof o.getBBox=="function"&&o.nodeName.toLowerCase()!=="svg"&&o.getBBox(),f=i?new ds(1,0,0,1,l.left+Nn(),l.top+Bn()):It(o,!1,!1,!0);c.uncache=1,n.getProp=a,n.element=o,n.id=Fo(o),n.matrix=f,n.cache=c,n.bounds=l,n.isVisible=!!(l.width||l.height||l.left||l.top),n.display=a("display"),n.position=a("position"),n.parent=o.parentNode,n.x=a("x","px"),n.y=a("y","px"),n.scaleX=c.scaleX,n.scaleY=c.scaleY,n.rotation=a("rotation"),n.skewX=a("skewX"),n.opacity=a("opacity"),n.width=u?u.width:Nt(a("width","px"),.04),n.height=u?u.height:Nt(a("height","px"),.04),t&&No(n,Hn[t]||eo(t)),n.ctm=o.getCTM&&o.nodeName.toLowerCase()==="svg"&&Kr(o).inverse(),n.simple=i||ks(f.a)===1&&!ks(f.b)&&!ks(f.c)&&ks(f.d)===1,n.uncache=0},r})(),Ho=(function(){function r(s,t){this.vars=s,this.batch=t,this.states=[],this.timeline=t.timeline}var e=r.prototype;return e.getStateById=function(t){for(var i=this.states.length;i--;)if(this.states[i].idLookup[t])return this.states[i]},e.kill=function(){this.batch.remove(this)},r})(),Yo=(function(){function r(s){this.id=s,this.actions=[],this._kill=[],this._final=[],this._abs=[],this._run=[],this.data={},this.state=new Et,this.timeline=Fe.timeline()}var e=r.prototype;return e.add=function(t){var i=this.actions.filter(function(n){return n.vars===t});return i.length?i[0]:(i=new Ho(typeof t=="function"?{animate:t}:t,this),this.actions.push(i),i)},e.remove=function(t){var i=this.actions.indexOf(t);return i>=0&&this.actions.splice(i,1),this},e.getState=function(t){var i=this,n=le,o=ni;return le=this,this.state.clear(),this._kill.length=0,this.actions.forEach(function(a){a.vars.getState&&(a.states.length=0,ni=a,a.state=a.vars.getState(a)),t&&a.states.forEach(function(c){return i.state.add(c)})}),ni=o,le=n,this.killConflicts(),this},e.animate=function(){var t=this,i=le,n=this.timeline,o=this.actions.length,a,c;for(le=this,n.clear(),this._abs.length=this._final.length=this._run.length=0,this.actions.forEach(function(l){l.vars.animate&&l.vars.animate(l);var u=l.vars.onEnter,f=l.vars.onLeave,g=l.targets,p,m;g&&g.length&&(u||f)&&(p=new Et,l.states.forEach(function(k){return p.add(k)}),m=p.compare(Ps.getState(g)),m.enter.length&&u&&u(m.enter),m.leave.length&&f&&f(m.leave))}),to(this._abs),this._run.forEach(function(l){return l()}),c=n.duration(),a=this._final.slice(0),n.add(function(){c<=n.time()&&(a.forEach(function(l){return l()}),lr(t,"onComplete"))}),le=i;o--;)this.actions[o].vars.once&&this.actions[o].kill();return lr(this,"onStart"),n.restart(),this},e.loadState=function(t){t||(t=function(){return 0});var i=[];return this.actions.forEach(function(n){if(n.vars.loadState){var o,a=function c(l){l&&(n.targets=l),o=i.indexOf(c),~o&&(i.splice(o,1),i.length||t())};i.push(a),n.vars.loadState(a)}}),i.length||t(),this},e.setState=function(){return this.actions.forEach(function(t){return t.targets=t.vars.setState&&t.vars.setState(t)}),this},e.killConflicts=function(t){return this.state.interrupt(t),this._kill.forEach(function(i){return i.interrupt(t)}),this},e.run=function(t,i){var n=this;return this!==le&&(t||this.getState(i),this.loadState(function(){n._killed||(n.setState(),n.animate())})),this},e.clear=function(t){this.state.clear(),t||(this.actions.length=0)},e.getStateById=function(t){for(var i=this.actions.length,n;i--;)if(n=this.actions[i].getStateById(t),n)return n;return this.state.idLookup[t]&&this.state},e.kill=function(){this._killed=1,this.clear(),delete Sn[this.id]},r})(),Ps=(function(){function r(){}return r.getState=function(s,t){var i=rn(s,t);return ni&&ni.states.push(i),t&&t.batch&&r.batch(t.batch).state.add(i),i},r.from=function(s,t){return t=t||{},"clearProps"in t||(t.clearProps=!0),ln(s,rn(t.targets||s.targets,{props:t.props||s.props,simple:t.simple,kill:!!t.kill}),t,-1)},r.to=function(s,t){return ln(s,rn(t.targets||s.targets,{props:t.props||s.props,simple:t.simple,kill:!!t.kill}),t,1)},r.fromTo=function(s,t,i){return ln(s,t,i)},r.fit=function(s,t,i){var n=i?Ts(i,Zr):{},o=i||n,a=o.absolute,c=o.scale,l=o.getVars,u=o.props,f=o.runBackwards,g=o.onComplete,p=o.simple,m=i&&i.fitChild&&ri(i.fitChild),k=kn(t,u,p,s),x=kn(s,0,p,k),A=u?qi[u]:Xi,w=Fe.context();return u&&so(n,k.props),li(x,A),f&&("immediateRender"in n||(n.immediateRender=!0),n.onComplete=function(){Ui(x),g&&g.apply(this,arguments)}),a&&Yn(x,k),n=Ds(x,k,c||m,!n.duration&&u,m,n.duration||l?n:0),typeof i=="object"&&"zIndex"in i&&(n.zIndex=i.zIndex),w&&!l&&w.add(function(){return function(){return Ui(x)}}),l?n:n.duration?Fe.to(x.element,n):null},r.makeAbsolute=function(s,t){return(s instanceof Et?s:new Et(s,t)).makeAbsolute()},r.batch=function(s){return s||(s="default"),Sn[s]||(Sn[s]=new Yo(s))},r.killFlipsOf=function(s,t){(s instanceof Et?s.targets:Ls(s)).forEach(function(i){return i&&Un(i._flip,t!==!1?1:2)})},r.isFlipping=function(s){var t=r.getByTarget(s);return!!t&&t.isActive()},r.getByTarget=function(s){return(ri(s)||Hi)._flip},r.getElementState=function(s,t){return new us(ri(s),t)},r.convertCoordinates=function(s,t,i){var n=It(t,!0,!0).multiply(It(s));return i?n.apply(i):n},r.register=function(s){if(Wt=typeof document<"u"&&document.body,Wt){Fe=s,Mn(Wt),Ls=Fe.utils.toArray,xn=Fe.core.getStyleSaver;var t=Fe.utils.snap(.1);Nt=function(n,o){return t(parseFloat(n)+o)}}},r})();Ps.version="3.15.0";typeof window<"u"&&window.gsap&&window.gsap.registerPlugin(Ps);ee.registerPlugin(M,Ps);const yr="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/-+:#";function Pi(r,e,s=.7,t=0){if(!r)return null;const i={p:0},n=e.length;return ee.to(i,{p:1,duration:s,delay:t,ease:"power2.out",onUpdate:()=>{const o=Math.floor(i.p*n);let a="";for(let c=0;c<n;c++){const l=e[c];l===" "||c<o?a+=l:a+=yr[(c*11+Math.floor(i.p*37))%yr.length]}r.textContent=a},onComplete:()=>{r.textContent=e}})}function ps(r){const e=r.getTotalLength?r.getTotalLength():400;return r.style.strokeDasharray=`${e}`,r.style.strokeDashoffset=`${e}`,e}class Uo{tier="high";reducedMotion=!1;isMobile=!1;listeners=new Set;constructor(){if(typeof window<"u"){const e=window.matchMedia("(prefers-reduced-motion: reduce)");this.reducedMotion=e.matches,e.addEventListener("change",s=>{this.reducedMotion=s.matches,this.emit()}),this.isMobile=window.innerWidth<=860||window.matchMedia("(pointer: coarse)").matches,(this.isMobile||(navigator.hardwareConcurrency||4)<=4||this.reducedMotion)&&(this.tier="low"),window.addEventListener("resize",()=>{const s=window.innerWidth<=860||window.matchMedia("(pointer: coarse)").matches;s!==this.isMobile&&(this.isMobile=s,this.emit())})}this.syncAttr()}getState(){const e=typeof window<"u"&&window.devicePixelRatio||1;return{tier:this.tier,pixelRatio:this.tier==="high"?Math.min(e,2):Math.min(e,1.5),reducedMotion:this.reducedMotion,isMobile:this.isMobile}}toggleTier(){return this.tier=this.tier==="high"?"low":"high",this.syncAttr(),this.emit(),this.getState()}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}syncAttr(){typeof document<"u"&&document.documentElement.setAttribute("data-quality",this.tier)}emit(){const e=this.getState();this.listeners.forEach(s=>s(e))}}const He=new Uo;let Tn=null;function Vo(){if(He.getState().reducedMotion)return null;const r=new oo({duration:1.15,smoothWheel:!0,wheelMultiplier:.96});return r.on("scroll",M.update),ee.ticker.add(e=>r.raf(e*1e3)),ee.ticker.lagSmoothing(0),Tn=r,r}function ro(r){if(Tn){Tn.scrollTo(r,{offset:-74,duration:1.2});return}(typeof r=="string"?document.querySelector(r):r)?.scrollIntoView({behavior:He.getState().reducedMotion?"auto":"smooth"})}function Wo(){const r=document.getElementById("drafting-cursor"),e=document.getElementById("cursor-coords"),s=window.matchMedia("(pointer: coarse)").matches;if(!r||s){r&&(r.style.display="none");return}const t=ee.quickTo(r,"x",{duration:.1,ease:"power3.out"}),i=ee.quickTo(r,"y",{duration:.1,ease:"power3.out"});window.addEventListener("pointermove",n=>{if(r.classList.add("is-active"),t(n.clientX),i(n.clientY),e){const o=String(Math.round(n.clientX)).padStart(4,"0"),a=String(Math.round(n.clientY)).padStart(4,"0");e.textContent=`x: ${o}  y: ${a}`}},{passive:!0}),document.addEventListener("mouseover",n=>{const o=n.target,a=!!o.closest("a, button, input, textarea, select, [data-interactive]"),c=!!o.closest(".lens-stage");r.classList.toggle("is-hover",a),r.classList.toggle("in-lens-stage",c)})}class qo{ctx=null;enabled=!1;toggle(){return this.enabled=!this.enabled,this.enabled&&(this.ensure(),this.tick(820,.035)),this.enabled}hover(){this.enabled&&this.tick(1180,.018,.015)}click(){this.enabled&&this.tick(640,.04,.03)}stamp(){if(!this.enabled||(this.ensure(),!this.ctx))return;const e=this.ctx.currentTime,s=this.ctx.createOscillator(),t=this.ctx.createGain();s.type="triangle",s.frequency.setValueAtTime(165,e),s.frequency.exponentialRampToValueAtTime(52,e+.14),t.gain.setValueAtTime(.08,e),t.gain.exponentialRampToValueAtTime(.001,e+.16),s.connect(t),t.connect(this.ctx.destination),s.start(e),s.stop(e+.16)}ensure(){if(!this.ctx&&typeof window<"u"){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{})}tick(e,s,t=.025){if(this.ensure(),!this.ctx)return;const i=this.ctx.currentTime,n=this.ctx.createOscillator(),o=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(e,i),o.gain.setValueAtTime(t,i),o.gain.exponentialRampToValueAtTime(8e-4,i+s),n.connect(o),o.connect(this.ctx.destination),n.start(i),n.stop(i+s)}}const ut=new qo;let cn=null;function Oi(r,e="vermilion"){const s=document.getElementById("atelier-toast"),t=document.getElementById("toast-text"),i=document.getElementById("toast-pip");!s||!t||!i||(t.textContent=r,s.setAttribute("data-variant",e),i.setAttribute("data-variant",e),s.hidden=!1,requestAnimationFrame(()=>s.classList.add("is-visible")),cn!==null&&window.clearTimeout(cn),cn=window.setTimeout(()=>{s.classList.remove("is-visible"),window.setTimeout(()=>{s.classList.contains("is-visible")||(s.hidden=!0)},260)},3200))}const vr=[];let Ut=!1;function Xo(){const r=Array.from(document.querySelectorAll(".lens-stage")),e=He.getState().isMobile;r.forEach(i=>{const n=i.querySelector(".tech-layer"),o=i.querySelector(".lens-reticle"),a=Array.from(i.parentElement?.querySelectorAll("[data-lens-mode]")||[]);if(!n)return;const c=Number(i.getAttribute("data-lens-radius")||"138");let l=e?"business":"lens",u=240,f=140;const g=ee.quickTo(n,"--lx",{duration:.22,ease:"power3.out"}),p=ee.quickTo(n,"--ly",{duration:.22,ease:"power3.out"}),m=o?ee.quickTo(o,"x",{duration:.22,ease:"power3.out"}):null,k=o?ee.quickTo(o,"y",{duration:.22,ease:"power3.out"}):null,x=w=>{l=w,i.setAttribute("data-active-mode",l),a.forEach(v=>{const V=v.getAttribute("data-lens-mode")===l;v.classList.toggle("is-active",V),v.setAttribute("aria-pressed",String(V))}),l==="tech"?(n.style.clipPath="none",n.style.opacity="1",o&&(o.style.opacity="0")):l==="business"?(n.style.clipPath="circle(0px at 50% 50%)",n.style.opacity="0",o&&(o.style.opacity="0")):(n.style.clipPath="",n.style.opacity="1",n.style.setProperty("--lr","0px"))};x(l);const A=(w,v)=>{l==="lens"&&(g(w),p(v),m?.(w),k?.(v),n.style.setProperty("--lr",`${c}px`),o&&(o.style.width=`${c*2}px`,o.style.height=`${c*2}px`,o.style.opacity="1"))};i.addEventListener("pointerenter",w=>{if(He.getState().isMobile||l!=="lens")return;const v=i.getBoundingClientRect();A(w.clientX-v.left,w.clientY-v.top)}),i.addEventListener("pointermove",w=>{if(He.getState().isMobile||l!=="lens")return;const v=i.getBoundingClientRect();A(w.clientX-v.left,w.clientY-v.top)}),i.addEventListener("pointerleave",()=>{l==="lens"&&(n.style.setProperty("--lr","0px"),o&&(o.style.opacity="0"))}),i.addEventListener("focus",()=>{if(l!=="lens")return;const w=i.getBoundingClientRect();u=w.width*.5,f=w.height*.5,A(u,f)}),i.addEventListener("blur",()=>{l==="lens"&&(n.style.setProperty("--lr","0px"),o&&(o.style.opacity="0"))}),i.addEventListener("keydown",w=>{if(!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(w.key))return;w.preventDefault(),l!=="lens"&&x("lens");const v=i.getBoundingClientRect(),E=32;w.key==="ArrowLeft"&&(u=Math.max(24,u-E)),w.key==="ArrowRight"&&(u=Math.min(v.width-24,u+E)),w.key==="ArrowUp"&&(f=Math.max(24,f-E)),w.key==="ArrowDown"&&(f=Math.min(v.height-24,f+E)),A(u,f)}),a.forEach(w=>{w.addEventListener("click",()=>{const v=w.getAttribute("data-lens-mode");v&&(ut.click(),x(v))})}),vr.push({setMode:x})});const s=document.getElementById("global-lens-toggle"),t=document.getElementById("global-lens-label");s?.addEventListener("click",()=>{ut.click(),Ut=!Ut,s.setAttribute("aria-pressed",String(Ut)),s.classList.toggle("is-blueprint",Ut);const i=Ut?"tech":He.getState().isMobile?"business":"lens";t&&(t.textContent=Ut?"LENS: FULL TECH":"LENS: CURSOR"),vr.forEach(n=>n.setMode(i)),Oi(Ut?"Blueprint Tech Layer unlocked across all drawings":"Cursor X-Ray Lens restored (hover drawings to inspect)",Ut?"blueprint":"vermilion")})}function Go(){return new Promise(r=>{const e=document.getElementById("preloader"),s=document.getElementById("preloader-rect"),t=document.getElementById("preloader-pct"),i=document.getElementById("preloader-rule-fill"),n=document.getElementById("pre-sheet"),o=document.getElementById("pre-proj"),a=document.getElementById("pre-by");if(!e){r();return}const c=He.getState().reducedMotion;s&&!c&&(ps(s),ee.to(s,{strokeDashoffset:0,duration:.95,ease:"power2.inOut"})),Pi(n,"SHEET 00: INITIALISING",.85,.05),Pi(o,"BUSINESS SYSTEMS",.85,.15),Pi(a,"AZ // DHAKA, BD",.85,.25);const l={v:0};ee.to(l,{v:100,duration:c?.4:1.35,ease:"power2.inOut",onUpdate:()=>{const u=Math.round(l.v);t&&(t.textContent=`${String(u).padStart(3,"0")}%`),i&&(i.style.transform=`scaleX(${l.v/100})`)},onComplete:()=>{n&&(n.textContent="SHEET 01: READY"),ee.to(e,{clipPath:"inset(0% 0% 100% 0%)",duration:c?.2:.72,ease:"expo.inOut",delay:.12,onComplete:()=>{e.style.display="none",r()}})}})})}function zo(){const r=document.getElementById("sound-toggle"),e=document.getElementById("sound-label"),s=document.getElementById("quality-toggle"),t=document.getElementById("quality-label"),i=()=>{const o=He.getState();t&&(t.textContent=`3D: ${o.tier.toUpperCase()}`)};i(),He.subscribe(i),r?.addEventListener("click",()=>{const o=ut.toggle();r.setAttribute("aria-pressed",String(o)),r.classList.toggle("is-active",o),e&&(e.textContent=o?"SFX ON":"SFX OFF")}),s?.addEventListener("click",()=>{ut.click(),He.toggleTier()}),document.addEventListener("click",o=>{const a=o.target.closest("[data-nav-link]");if(!a)return;const c=a.getAttribute("href");c&&c.startsWith("#")&&(o.preventDefault(),ut.click(),ro(c))}),Array.from(document.querySelectorAll("#sheet-nav-list a")).forEach(o=>{const a=o.getAttribute("href");if(!a)return;const c=document.querySelector(a);c&&M.create({trigger:c,start:"top 52%",end:"bottom 52%",onToggle:l=>o.classList.toggle("is-current",l.isActive)})})}const Qo="modulepreload",jo=function(r,e){return new URL(r,e).href},br={},Ko=function(e,s,t){let i=Promise.resolve();if(s&&s.length>0){let o=function(u){return Promise.all(u.map(f=>Promise.resolve(f).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};const a=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),l=c?.nonce||c?.getAttribute("nonce");i=o(s.map(u=>{if(u=jo(u,t),u in br)return;br[u]=!0;const f=u.endsWith(".css"),g=f?'[rel="stylesheet"]':"";if(!!t)for(let k=a.length-1;k>=0;k--){const x=a[k];if(x.href===u&&(!f||x.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${g}`))return;const m=document.createElement("link");if(m.rel=f?"stylesheet":Qo,f||(m.as="script"),m.crossOrigin="",m.href=u,l&&m.setAttribute("nonce",l),document.head.appendChild(m),f)return new Promise((k,x)=>{m.addEventListener("load",k),m.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${u}`)))})}))}function n(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&n(a.reason);return e().catch(n)})},Je={name:"Md. Shah Abrar Zahin",monogram:"AZ",roleLine:"Backend Architect · Data-Driven Systems · Distributed Systems (in depth)",location:"Dhaka, Bangladesh",experience:"3+ years in production",coreTech:"Oracle · PostgreSQL · Python/Django · Redis · Celery",email:"abrar.bauet@gmail.com",phone:"01334317864",github:"https://github.com/abrarzayaan",linkedin:"https://www.linkedin.com/in/mdshahabrarzayaan/",chain:["Business problem","Data model","System architecture","API & logic","Performance","Reliability","Reporting","Growth"]},bs={sub:"End-to-end backend architecture, data and distributed systems that turn business problems into measurable growth.",primaryCta:{label:"Let's fix your bottleneck",href:"#contact"},secondaryCta:{label:"See the proof drawings",href:"#work"},layers:[{code:"01",name:"CLIENT & ACTOR LAYER",spec:"Customers · Vendors · Riders · Exec Dashboards"},{code:"02",name:"API & RBAC GATEWAY",spec:"Django REST Framework · JWT · Dynamic Role Policies"},{code:"03",name:"CACHE & ASYNC QUEUES",spec:"Redis Hot Catalog · Celery Workers · ETL Schedulers"},{code:"04",name:"DATA & INTEGRITY CORE",spec:"Oracle · PostgreSQL · Row-Level Locks · <500ms Plans"}]},ws={leadTypical:"Most developers start with: “Which framework should we use?”",leadArchitect:"I start with: “Where is this business losing time, money, or trust, and which part of the system causes it?”",manifestoBody:"Slow reports, a database that dies on busy days, stock that goes negative, numbers that do not match between two dashboards, a system that works for 10 vendors but breaks at 100. These are not bugs. They are architecture problems wearing a bug costume — and they are what I fix.",enterpriseAdvantage:"I spent three years living inside the data of real enterprise clients, where a wrong number has a cost. A system is only as valuable as the correctness, speed, and trustworthiness of the data it produces.",comparisons:[{dev:"“What endpoints do you need?”",arch:"“What decision should this system help you make faster?”"},{dev:"“Which database?”",arch:"“What happens to your data model when you have 10× the vendors, orders, or clients?”"},{dev:"“It works on my machine.”",arch:"“What happens at 2 a.m. on your busiest day when one component fails?”"},{dev:"“The report is ready.”",arch:"“Is the number in the report correct, and will it still be correct next year?”"},{dev:"“Ticket closed.”",arch:"“Did the business metric actually move?”"}],principles:[{no:"P-01",title:"Business first, technology second.",body:"Every technical decision must be traceable to a business outcome."},{no:"P-02",title:"Correctness before speed, speed before cleverness.",body:"A fast wrong answer is worse than a slow right one; an unmaintainable clever system is worse than both."},{no:"P-03",title:"Design for failure.",body:"Assume a component will break. Decide now what happens next."},{no:"P-04",title:"Measure everything.",body:"If I can't show a before/after number, I haven't finished the job."},{no:"P-05",title:"Simple until proven otherwise.",body:"Add distribution and complexity only when the problem demands it, never to look impressive."}]},Zo=[{no:"01",businessProblem:"“Our reports and dashboards are painfully slow.”",businessAction:"Rework slow database queries and data access so teams stop waiting.",businessOutcome:"45% faster queries (under 500 ms) across 300+ queries / 5+ client systems.",techProblem:"Full-table scans, unselective joins, high-cost Oracle/PG execution plans.",techAction:"EXPLAIN ANALYZE audit, composite B-tree indexing, SARGable predicates & join refactoring.",techOutcome:"p95 query runtime < 500 ms (-45% latency) across 300+ production SQL queries.",diagramType:"index"},{no:"02",businessProblem:"“Our numbers don’t match between teams.”",businessAction:"Unify definitions and validate every report automatically before release.",businessOutcome:"100% schema consistency & 99.8% report accuracy.",techProblem:"Divergent ad-hoc SQL extracts, unnormalized tables, silent ETL truncation.",techAction:"Canonical relational schemas + automated SQL assertion & reconciliation scripts.",techOutcome:"100% multi-system schema parity; deliverable accuracy verified at 99.8%.",diagramType:"schema"},{no:"03",businessProblem:"“We’re growing and the system is starting to crack.”",businessAction:"Re-architect bottlenecks before busy-day traffic turns into downtime.",businessOutcome:"A system that scales smoothly ahead of demand.",techProblem:"Synchronous request blocking, N+1 ORM storms, lock contention on hot tables.",techAction:"Redis read-through caching, select_related/prefetch_related, async worker offload.",techOutcome:"Bounded DB connection pool load & predictable throughput under peak spikes.",diagramType:"cache"},{no:"04",businessProblem:"“We run a marketplace / multi-vendor / delivery business.”",businessAction:"Keep vendor stock, central warehouse, rider delivery, and payouts in lockstep.",businessOutcome:"Zero overselling, zero race conditions, clean financial ledgers.",techProblem:"Concurrent checkout race conditions & desynchronised vendor/warehouse stock.",techAction:"ACID transactions + PostgreSQL SELECT ... FOR UPDATE row-level locking & state machines.",techOutcome:"Strict serializability on SKU stock mutations + auditable rider payout ledgers.",diagramType:"lock"},{no:"05",businessProblem:"“Everything runs on manual Excel and copy-paste.”",businessAction:"Replace fragile manual spreadsheets with automated data pipelines.",businessOutcome:"20+ workflows automated · 35% faster report delivery.",techProblem:"Manual CSV exports, human re-keying errors, unscheduled batch transformations.",techAction:"Automated SQL/Python ETL extraction, type normalisation, and scheduled delivery.",techOutcome:"20+ deterministic ETL pipelines cutting end-to-end SLA time by 35%.",diagramType:"pipeline"},{no:"06",businessProblem:"“We can’t tell what’s really happening in the business.”",businessAction:"Build executive dashboards on top of clean, defensible operational data.",businessOutcome:"98%+ analytics accuracy supporting a 20% YoY sales volume increase.",techProblem:"1M+ fragmented raw logs with no dimensional model or time-intelligence layer.",techAction:"Star-schema modelling + semantic DAX measures in Power BI, Excel Power Query & Tableau.",techOutcome:"98%+ -> 99.8% validated BI layer powering YoY & seasonality decisions.",diagramType:"bi"},{no:"07",businessProblem:"“Different people see data they shouldn’t.”",businessAction:"Lock down who can view, edit, or approve data across every role.",businessOutcome:"100% compliance with enterprise security standards.",techProblem:"Over-privileged shared DB credentials & coarse API endpoint permissions.",techAction:"Multi-environment DB privilege grants + stateless JWT & dynamic role-based RBAC.",techOutcome:"100% security audit compliance across Dev, Staging, and Production.",diagramType:"rbac"},{no:"08",businessProblem:"“We need to be ready for scale and failure.”",businessAction:"Design resilient workflows so one component hiccup never stops sales.",businessOutcome:"A business that keeps operating when individual parts fail.",techProblem:"Tightly coupled monolith side-effects where email/invoice stalls kill checkout.",techAction:"Event-driven decoupling with Celery + Redis queues, retries & reconciliation jobs.",techOutcome:"Isolated fault domains & idempotent background recovery.",diagramType:"queue"}],Jo=[{id:"dwg-pharmasys",dwgNo:"DWG-01 // MARKETPLACE CORE",scale:"1 : 100",title:"PharmaSys: Multi-Vendor E-Commerce & Rider Logistics",roleOrStack:"Python · Django REST Framework · PostgreSQL · Redis · Celery · JWT · RBAC",period:"Production Architecture Case",businessSummary:"Business View: Vendors, central warehouse, customers, and delivery riders operate on one truthful inventory and order brain — zero overselling on busy days.",techSummary:"Blueprint Tech View: DRF API with select_related/prefetch_related, Redis hot-catalog cache, PostgreSQL row-level locking (SELECT FOR UPDATE), and Celery + Redis workers.",outcomeHeadline:"ZERO OVERSELLING · FULL MARKETPLACE BRAIN",metrics:[{val:"0",label:"Stock Race Conditions"},{val:"4 Actors",label:"Vendor · Customer · Rider · Admin"},{val:"Async",label:"Celery Recon & Invoices"}],bullets:["Relational schema unifying multi-vendor stock, central warehouse inventory, orders, and real-time rider tracking.","Database transactions + row-level locking prevent concurrent checkouts from driving stock negative.","Redis caches hot product catalogs while ORM query tuning eliminates N+1 bottlenecks.","Celery + Redis handles non-blocking email alerts, invoice PDF generation, and daily stock reconciliation."],clientTakeaway:"I can design the whole operational brain of a marketplace, not just its API.",boxes:[{id:"b1",x:34,y:88,w:138,h:84,businessLabel:"4 Business Portals",businessSub:"Customers, Vendors, Riders, Admins",techLabel:"JWT + Dynamic RBAC",techSub:"Scoped role permissions & guards"},{id:"b2",x:218,y:88,w:148,h:84,businessLabel:"Order & Catalog Engine",businessSub:"Fast browsing & checkout rules",techLabel:"DRF + ORM Optimised",techSub:"select_related / prefetch_related"},{id:"b3",x:414,y:26,w:162,h:72,businessLabel:"Instant Product Shelf",businessSub:"Zero lag on popular items",techLabel:"Redis Cache + Broker",techSub:"Hot catalog TTL + queue transport"},{id:"b4",x:414,y:118,w:162,h:78,businessLabel:"Synced Warehouse Ledger",businessSub:"Never sells out-of-stock items",techLabel:"PostgreSQL ACID Core",techSub:"SELECT ... FOR UPDATE row locks"},{id:"b5",x:414,y:214,w:162,h:64,businessLabel:"Rider & Back-Office Ops",businessSub:"Live delivery payouts & invoices",techLabel:"Celery Async Workers",techSub:"Daily stock recon, emails & PDFs"}],connectors:[{x1:172,y1:130,x2:218,y2:130},{x1:366,y1:112,x2:414,y2:62},{x1:366,y1:132,x2:414,y2:156},{x1:366,y1:152,x2:414,y2:244},{x1:495,y1:98,x2:495,y2:118}],callouts:[{code:"A",x:495,y:156,businessTitle:"No Overselling",businessNote:"Vendor & warehouse counts stay exact.",techTitle:"Row-Level Locking",techNote:"Transactional SKU lock prevents race conditions."},{code:"B",x:495,y:62,businessTitle:"Fast Catalog",businessNote:"Instant search on busy days.",techTitle:"Redis Hot Layer",techNote:"Cached read path + N+1 elimination."},{code:"C",x:103,y:130,businessTitle:"Role Separation",businessNote:"Each actor sees only their workflow.",techTitle:"Dynamic RBAC",techNote:"Token claims + object-level permissions."}]},{id:"dwg-akt",dwgNo:"DWG-02 // ENTERPRISE DATA",scale:"1 : 500",title:"Enterprise Reporting & Data Systems (AKT Tobacco & AKT Leaf)",roleOrStack:"System Engineer (Data Engineer), Suffix IT LTD.",period:"Jun 2023 – Aug 2026",businessSummary:"Business View: Kept daily operational reporting running at 99.9% uptime across 5+ enterprise client systems, delivering trusted numbers 35% faster to support +20% YoY sales growth.",techSummary:"Blueprint Tech View: Oracle & PostgreSQL across 1M+ daily rows; 300+ refactored SQL plans (<500ms), 20+ automated normalisation ETL workflows, 99.8% SQL validation scripts.",outcomeHeadline:"45% FASTER (<500ms) · 99.9% UPTIME",metrics:[{val:"99.9%",label:"Uptime (1M+ daily rows)"},{val:"45% ↓",label:"Query Latency (<500 ms)"},{val:"99.8%",label:"Validated Accuracy"}],bullets:["Maintained 99.9% production availability across 1M+ daily records on Oracle and PostgreSQL.","Refactored 300+ SQL queries across 5+ client systems, cutting execution time by 45% (under 500 ms).","Automated 20+ extraction and normalisation workflows for 100% schema consistency and 35% faster delivery.","Added automated SQL validation scripts (99.8% accuracy) and multi-environment RBAC (100% security compliance)."],clientTakeaway:"I've already operated in the environment where mistakes are expensive. I bring that discipline to your system from day one.",boxes:[{id:"a1",x:32,y:98,w:136,h:82,businessLabel:"5+ Client Operations",businessSub:"1M+ daily business records",techLabel:"Multi-Env Sources",techSub:"1M+ daily rows · RBAC enforced"},{id:"a2",x:212,y:44,w:158,h:76,businessLabel:"Automated Clean-Up",businessSub:"No manual copy-paste delays",techLabel:"20+ ETL Workflows",techSub:"100% canonical schema parity"},{id:"a3",x:212,y:154,w:158,h:80,businessLabel:"High-Speed Warehouse",businessSub:"Always-on 99.9% availability",techLabel:"Oracle & PostgreSQL",techSub:"300+ tuned plans · <500ms runtime"},{id:"a4",x:416,y:98,w:162,h:86,businessLabel:"Executive Growth Reports",businessSub:"35% faster · +20% YoY sales",techLabel:"SQL Validation Gate",techSub:"Automated checks -> 99.8% accuracy"}],connectors:[{x1:168,y1:124,x2:212,y2:82},{x1:168,y1:152,x2:212,y2:194},{x1:370,y1:82,x2:416,y2:126},{x1:370,y1:194,x2:416,y2:156},{x1:291,y1:120,x2:291,y2:154}],callouts:[{code:"A",x:291,y:194,businessTitle:"45% Faster",businessNote:"Dashboards load in under half a second.",techTitle:"<500ms SQL Plans",techNote:"300+ queries refactored with composite indexes."},{code:"B",x:497,y:141,businessTitle:"Defensible Numbers",businessNote:"Teams stop arguing over mismatched totals.",techTitle:"99.8% Validation",techNote:"Automated SQL assertions pre-release."}]},{id:"dwg-analytics",dwgNo:"DWG-03 // DECISION BI",scale:"1 : 200",title:"Analytics Systems: Multi-Source Ingestion & Forecasting BI",roleOrStack:"Power BI · DAX · Python · Pandas · Excel / Power Query",period:"Open-Source Case Portfolio",businessSummary:"Business View: Consolidated over a million messy e-commerce and multi-year retail records into revenue forecasts, seasonality insights, and customer demographic segments.",techSummary:"Blueprint Tech View: Python/Pandas scraping & multi-source ETL ingestion -> 100% integrity dimensional models -> custom DAX YoY/seasonality measures & Power Query pipelines.",outcomeHeadline:"1M+ ROWS UNIFIED · 100% INTEGRITY",metrics:[{val:"1M+",label:"Unstructured Records Ingested"},{val:"100%",label:"Historical Data Integrity"},{val:"DAX",label:"YoY & Seasonality Forecasting"}],bullets:["E-Commerce OneShop Sales Analysis: consolidated 1M+ unstructured scraped records into clean ETL & revenue forecasting dashboards.","Yearly Enterprise Sales Analysis: unified multi-year fragmented sales sheets with 100% data integrity and custom DAX.","Customer Bike Purchase Demographics: segmented target customers by income, commute distance, and age."],clientTakeaway:"Decisions based on data you can defend.",links:[{label:"OneShop Sales (GitHub)",url:"https://github.com/abrarzayaan/E-Commerce_OneShop_Sales_Analysis"},{label:"Yearly Sales DAX (GitHub)",url:"https://github.com/abrarzayaan/ShopYearly_sales_alalysis"},{label:"Bike Demographics (GitHub)",url:"https://github.com/abrarzayaan/customers_bike_purchase_analysis_dashboard"}],boxes:[{id:"c1",x:34,y:98,w:142,h:82,businessLabel:"Messy Raw Channels",businessSub:"Scraped logs & multi-year sheets",techLabel:"1M+ Unstructured Rows",techSub:"Scrapers + multi-file ingestion"},{id:"c2",x:222,y:98,w:152,h:82,businessLabel:"Single Source of Truth",businessSub:"100% clean historical records",techLabel:"Python / Pandas ETL",techSub:"Deduplication & star-schema model"},{id:"c3",x:420,y:52,w:158,h:74,businessLabel:"Revenue Forecasting",businessSub:"YoY trends & peak seasons",techLabel:"Power BI + Custom DAX",techSub:"Time-intelligence & YoY measures"},{id:"c4",x:420,y:152,w:158,h:74,businessLabel:"Buyer Segmentation",businessSub:"Income, commute & age slices",techLabel:"Power Query Models",techSub:"Interactive demographic cohorts"}],connectors:[{x1:176,y1:139,x2:222,y2:139},{x1:374,y1:122,x2:420,y2:89},{x1:374,y1:156,x2:420,y2:189}],callouts:[{code:"A",x:298,y:139,businessTitle:"Clean History",businessNote:"Years of fragmented sales unified.",techTitle:"100% Integrity ETL",techNote:"Strict key normalisation & null handling."}]}],ea=[{value:45,decimals:0,suffix:"%",caption:"QUERY LATENCY REDUCTION",subcaption:"Runtime cut to <500 ms",method:"Execution-plan audits & indexing across 300+ production SQL queries."},{value:99.9,decimals:1,suffix:"%",caption:"ENTERPRISE REPORTING UPTIME",subcaption:"Oracle & PostgreSQL production",method:"Sustained across AKT Tobacco & AKT Leaf operational reporting."},{value:1,decimals:0,suffix:"M+",caption:"DAILY RECORDS PROCESSED",subcaption:"High-volume relational & ETL flows",method:"1M+ daily enterprise DB records and 1M+ consolidated e-commerce rows."},{value:300,decimals:0,suffix:"+",caption:"SQL QUERIES REFACTORED",subcaption:"Across 5+ client systems",method:"Eliminated full scans, tuned joins, and standardised data access."},{value:20,decimals:0,suffix:"+",caption:"WORKFLOWS AUTOMATED",subcaption:"Extraction & normalisation",method:"Replaced manual SQL/Excel copy-paste with deterministic pipelines."},{value:35,decimals:0,suffix:"%",caption:"FASTER REPORT DELIVERY",subcaption:"Supported +20% YoY sales volume",method:"Automated recurring pipelines for commercial decision-makers."},{value:99.8,decimals:1,suffix:"%",caption:"VALIDATED DELIVERABLE ACCURACY",subcaption:"Raised from 98%+ baseline",method:"Automated SQL validation scripts verifying every release."},{value:100,decimals:0,suffix:"%",caption:"SCHEMA & SECURITY COMPLIANCE",subcaption:"Multi-environment RBAC",method:"Role-based DB privileges and 100% canonical schema consistency."}],ta=[{code:"MAT-01",name:"Oracle Database",category:"DATA",categoryLabel:"Data & DB",status:"PRODUCTION",specNote:"1M+ daily rows, execution plans, partitioning"},{code:"MAT-02",name:"PostgreSQL",category:"DATA",categoryLabel:"Data & DB",status:"PRODUCTION",specNote:"ACID schemas, row-level locks, indexing"},{code:"MAT-03",name:"Advanced SQL & ETL",category:"DATA",categoryLabel:"Data & DB",status:"PRODUCTION",specNote:"300+ queries tuned (<500ms), validation scripts"},{code:"MAT-04",name:"MySQL / SQL Server / Supabase",category:"DATA",categoryLabel:"Data & DB",status:"WORKING",specNote:"Cross-engine relational compatibility"},{code:"MAT-05",name:"Python",category:"BACKEND",categoryLabel:"Backend",status:"PRODUCTION",specNote:"Core backend services, ETL & automation"},{code:"MAT-06",name:"Django & DRF",category:"BACKEND",categoryLabel:"Backend",status:"PRODUCTION",specNote:"REST APIs, domain logic, ORM optimisation"},{code:"MAT-07",name:"JWT & Dynamic RBAC",category:"BACKEND",categoryLabel:"Backend",status:"PRODUCTION",specNote:"Multi-actor security & 100% DB compliance"},{code:"MAT-08",name:"FastAPI / Flask / C / C++",category:"BACKEND",categoryLabel:"Backend",status:"WORKING",specNote:"Lightweight microservices & systems foundation"},{code:"MAT-09",name:"Redis Caching",category:"PERF_ASYNC",categoryLabel:"Perf & Async",status:"PRODUCTION",specNote:"Hot catalog caching & low-latency lookups"},{code:"MAT-10",name:"Celery + Redis",category:"PERF_ASYNC",categoryLabel:"Perf & Async",status:"PRODUCTION",specNote:"Async workers, reconciliations, invoicing"},{code:"MAT-11",name:"Apache Airflow",category:"PERF_ASYNC",categoryLabel:"Perf & Async",status:"WORKING",specNote:"DAG-based workflow orchestration"},{code:"MAT-12",name:"DB Transactions & Row Locks",category:"CONCURRENCY",categoryLabel:"Concurrency",status:"PRODUCTION",specNote:"Zero-overselling stock sync under load"},{code:"MAT-13",name:"Power BI & DAX",category:"BI",categoryLabel:"Analytics & BI",status:"PRODUCTION",specNote:"Executive dashboards, YoY & seasonality"},{code:"MAT-14",name:"Excel / Power Query / Pandas",category:"BI",categoryLabel:"Analytics & BI",status:"PRODUCTION",specNote:"Data wrangling & cohort segmentation"},{code:"MAT-15",name:"Tableau",category:"BI",categoryLabel:"Analytics & BI",status:"WORKING",specNote:"Visual analytics & executive storytelling"},{code:"MAT-16",name:"Git / Linux / Postman",category:"DEVOPS",categoryLabel:"DevOps",status:"PRODUCTION",specNote:"Production operations & API verification"},{code:"MAT-17",name:"Docker / Kubernetes / CI-CD",category:"DEVOPS",categoryLabel:"DevOps",status:"WORKING",specNote:"Containerised deployments & pipelines"}],Xs=[{step:"01",stageTag:"SURVEY & BRIEF",name:"Discover",happens:"I learn your business flow, pain points and the metrics you care about.",deliverable:"A clear problem statement in business language."},{step:"02",stageTag:"STRUCTURAL AUDIT",name:"Diagnose",happens:"Audit of schema, queries, data flow and failure points.",deliverable:"Prioritised findings: what hurts most, what's cheapest to fix."},{step:"03",stageTag:"MASTER BLUEPRINT",name:"Architect",happens:"Data model and system design aligned to your growth plan.",deliverable:"Architecture diagram + explicit trade-off notes."},{step:"04",stageTag:"CORE ERECTION",name:"Build",happens:"APIs, business logic, pipelines, automation.",deliverable:"Working, tested, documented system."},{step:"05",stageTag:"LOAD REINFORCEMENT",name:"Harden",happens:"Concurrency safety, caching, async processing, access control, validation.",deliverable:"A system that survives real-world load."},{step:"06",stageTag:"SIGN-OFF & METRICS",name:"Prove",happens:"Before/after metrics, dashboards and reports.",deliverable:"Evidence the business actually improved."}],sa=[{rev:"REV 0",date:"2018 – 2022",title:"B.Sc. in Computer Science & Engineering",org:"Bangladesh Army University of Engineering and Technology (BAUET)",description:"Academic foundation in algorithms, systems, and computer vision. Thesis: Object Detection: Comparative Study of YOLOv3 vs YOLOv7.",by:"AZ"},{rev:"REV A",date:"Feb 2023",title:"SQL Development Intern",org:"Suffix IT LTD.",description:"Established production relational query discipline, schema normalisation, and enterprise SQL reporting practices.",by:"AZ"},{rev:"REV B",date:"Jun 2023 – Aug 2026",title:"System Engineer (Data Engineer)",org:"Suffix IT LTD. (AKT Tobacco & AKT Leaf)",description:"99.9% uptime across 1M+ daily records on Oracle & PostgreSQL; refactored 300+ queries (-45% latency, <500ms); automated 20+ workflows (35% faster); 99.8% SQL validation accuracy.",by:"AZ"},{rev:"REV C",date:"Aug 2026 – Now",title:"End-to-End Business Backend Architect (Active)",org:"Independent · Data-Driven & Distributed Systems",description:"Designing scalable marketplace cores (PharmaSys), high-integrity data pipelines, and resilient event-driven backends aligned to business growth.",by:"AZ",isLatest:!0}],Gs={honestNote:"I'll tell you honestly when your business does not need distribution yet. The best architecture is the simplest one that survives your next stage of growth.",alreadyApplied:"Queues and workers (Celery + Redis), caching layers, transactional safety under concurrency, and multi-environment data governance.",deepeningNow:"Message brokers and event streaming, service decomposition, replication and partitioning, consistency models, observability.",stages:[{threshold:0,label:"WELL-STRUCTURED MODULAR MONOLITH (SOLID LINES)",when:"Early to mid-stage growth · Clear domain boundaries · Single primary DB + Redis + Celery.",tradeoff:"Lowest operational overhead, strict ACID simplicity, fastest iteration speed. Do not distribute prematurely."},{threshold:50,label:"HYBRID ASYNC + READ REPLICA TOPOLOGY",when:"High read-to-write ratio · Heavy reporting + background reconciliation · Multi-vendor stock spikes.",tradeoff:"Isolates slow analytics & side-effects via queues and replicas while preserving transactional core locks."},{threshold:85,label:"DISTRIBUTED EVENT-DRIVEN SERVICES (PROPOSED DASHED)",when:"Festival-day 10× spikes · Independent domain teams · Strict fault isolation so one failure never stops sales.",tradeoff:"Requires idempotent consumers, outbox/consistency strategies, and observability — justified when uptime & scale demand it."}],pillars:[{title:"Resilience",desc:"One failure should not stop sales."},{title:"Scale on demand",desc:"Handle festival-day spikes without over-paying the other 360 days."},{title:"Independent growth",desc:"Teams and services evolve without breaking each other."},{title:"Trustworthy data across services",desc:"Consistency strategies that keep money and stock numbers exact."}]},dn={firstCallQuestions:["What does your business do when it is running perfectly, and what is the first thing that breaks when it grows 5×?","Which report or number do you trust least?","Where do people still copy-paste, re-key or reconcile by hand?","What happens today if your database or main service goes down for an hour?","What single metric would make you say “this was worth it”?"],greatFit:["Startups and scale-ups whose database or reporting is becoming the bottleneck","Marketplaces, logistics, retail, pharma, manufacturing and distribution businesses","Teams that want one person who understands both the business and the data layer","Companies that need accuracy, auditability and security, not just “it works”"],notFit:["Pure front-end or design-only projects","“Build it as cheap and fast as possible, quality doesn’t matter” projects"]};function Dt(r){const e=r.scale||"1 : 1";return`
    <section id="${r.id}" class="drafting-sheet ${r.extraClass||""}" aria-label="${r.sectionTag}">
      <div class="sheet-frame">
        <span class="reg-mark tl" aria-hidden="true">+</span>
        <span class="reg-mark tr" aria-hidden="true">+</span>
        <span class="reg-mark bl" aria-hidden="true">+</span>
        <span class="reg-mark br" aria-hidden="true">+</span>

        <div class="sheet-top-bar">
          <span class="sheet-sec-tag">${r.sectionTag}</span>
          <span class="sheet-num-tag">${r.sheetNo}</span>
        </div>

        <div class="sheet-content">
          ${r.bodyHtml}
        </div>

        <footer class="sheet-title-block" aria-label="Sheet Title Block">
          <div class="tb-cell">
            <span class="tb-k">PROJECT</span>
            <strong class="tb-v">${r.projectTitle}</strong>
          </div>
          <div class="tb-cell">
            <span class="tb-k">SCALE</span>
            <strong class="tb-v">${e}</strong>
          </div>
          <div class="tb-cell">
            <span class="tb-k">DRAWN BY</span>
            <strong class="tb-v">AZ</strong>
          </div>
          <div class="tb-cell accent">
            <span class="tb-k">SHEET</span>
            <strong class="tb-v">${r.sheetNo}</strong>
          </div>
        </footer>
      </div>
    </section>
  `}function ia(){const r=bs.layers.map((t,i)=>`
      <div class="iso-callout" data-iso-callout="${i}" tabindex="0">
        <div class="callout-leader" aria-hidden="true">
          <svg viewBox="0 0 48 12" class="leader-svg">
            <line x1="0" y1="6" x2="42" y2="6" stroke="currentColor" stroke-width="1.4" />
            <circle cx="44" cy="6" r="2.6" fill="currentColor" />
          </svg>
        </div>
        <div class="callout-text">
          <span class="callout-code">${t.code} // ${t.name}</span>
          <small>${t.spec}</small>
        </div>
      </div>
    `).join(""),e=Je.chain.map((t,i)=>`<span class="chain-step">${t}</span>${i<Je.chain.length-1?'<span class="chain-sep">➝</span>':""}`).join(""),s=`
    <div class="hero-blueprint-grid">
      <div class="hero-copy-col">
        <div class="spec-meta-strip">
          <span class="spec-badge vermilion">END-TO-END BUSINESS BACKEND ARCHITECT</span>
          <span class="spec-badge">${Je.location} · ${Je.experience}</span>
        </div>

        <h1 class="hero-fraunces-h1">
          <span class="h1-mask"><span class="h1-line">I <em class="arch-word">architect<svg class="arch-underline" viewBox="0 0 260 12" preserveAspectRatio="none" aria-hidden="true"><path id="hero-arch-underline" d="M2 8 Q 130 2, 258 8" fill="none" stroke="#FF4D1C" stroke-width="3" stroke-linecap="round"/></svg></em></span></span>
          <span class="h1-mask"><span class="h1-line">the systems your</span></span>
          <span class="h1-mask"><span class="h1-line">business grows on.</span></span>
        </h1>

        <!-- Architectural Dimension Line beneath H1 -->
        <div class="hero-dimension-bar" aria-label="Scope Dimension: Business to System">
          <svg viewBox="0 0 520 26" class="dim-svg" preserveAspectRatio="none" aria-hidden="true">
            <line x1="2" y1="4" x2="2" y2="22" stroke="#101010" stroke-width="1.4" />
            <line x1="518" y1="4" x2="518" y2="22" stroke="#101010" stroke-width="1.4" />
            <line id="hero-dim-line" x1="8" y1="13" x2="512" y2="13" stroke="#101010" stroke-width="1.3" />
            <polygon points="4,13 13,9 13,17" fill="#101010" />
            <polygon points="516,13 507,9 507,17" fill="#101010" />
          </svg>
          <span class="dim-label">BUSINESS PROBLEM ➝ PRODUCTION ARCHITECTURE (45% ↓ SQL LATENCY · 99.9% UPTIME)</span>
        </div>

        <p class="hero-lead">${bs.sub}</p>

        <div class="hero-cta-row">
          <a href="${bs.primaryCta.href}" class="btn-vermilion" data-nav-link>
            <span>${bs.primaryCta.label}</span>
            <span aria-hidden="true">→</span>
          </a>
          <a href="${bs.secondaryCta.href}" class="btn-outline-ink" data-nav-link>
            <span>${bs.secondaryCta.label}</span>
          </a>
        </div>

        <div class="hero-chain-box">
          <span class="mono-tiny">OWNERSHIP CHAIN // SCALE 1:1</span>
          <div class="chain-flow">${e}</div>
        </div>
      </div>

      <div class="hero-wireframe-col">
        <div class="wireframe-viewport-box">
          <div class="wf-header">
            <span>FIG 1.0 // EXPLODED SYSTEM ISOMETRIC</span>
            <span class="wf-hint">DRAG TO ORBIT · SCROLL TO EXPLODE</span>
          </div>

          <div class="wf-stage-grid">
            <div class="wf-canvas-holder">
              <canvas id="hero-wireframe-canvas" aria-label="3D Exploded Isometric System Architecture Wireframe"></canvas>
            </div>
            <div class="wf-callouts-col">
              ${r}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;return Dt({id:"hero",sheetNo:"SHEET 01 / 10",sectionTag:"§01 ARCHITECTURAL ELEVATION & OVERVIEW",projectTitle:"MD. SHAH ABRAR ZAHIN — PORTFOLIO",scale:"1 : 1",bodyHtml:s,extraClass:"hero-sheet"})}async function na(){const r=He.getState(),e=document.querySelectorAll("#hero .h1-line"),s=document.getElementById("hero-arch-underline"),t=document.getElementById("hero-dim-line"),i=Array.from(document.querySelectorAll("[data-iso-callout]"));r.reducedMotion||(ee.fromTo(e,{yPercent:112},{yPercent:0,duration:1.05,stagger:.09,ease:"expo.out"}),s&&(ps(s),ee.to(s,{strokeDashoffset:0,duration:.9,delay:.35,ease:"power3.out"})),t&&(ps(t),ee.to(t,{strokeDashoffset:0,duration:1,delay:.45,ease:"power3.out"})));const n=document.getElementById("hero-wireframe-canvas");if(!n)return;const{IsometricWireframeScene:o}=await Ko(async()=>{const{IsometricWireframeScene:c}=await import("./wireframe-scene-Ces7VZxW.js");return{IsometricWireframeScene:c}},__vite__mapDeps([0,1,2]),import.meta.url),a=new o(n,c=>{i.forEach((l,u)=>{l.classList.toggle("is-active",u===c)})});i.forEach((c,l)=>{c.addEventListener("pointerenter",()=>{ut.hover(),a.setHighlightedLayer(l)}),c.addEventListener("pointerleave",()=>{a.setHighlightedLayer(-1)}),c.addEventListener("focus",()=>a.setHighlightedLayer(l)),c.addEventListener("blur",()=>a.setHighlightedLayer(-1))}),r.reducedMotion||M.create({trigger:"#hero",start:"top top",end:"bottom top",scrub:.8,onUpdate:c=>{a.setExplodeProgress(.28+c.progress*.72)}})}function ra(){const r=ws.comparisons.map((t,i)=>`
      <div class="pos-compare-row">
        <span class="row-idx">0${i+1}</span>
        <div class="pos-dev-col">
          <span class="mono-tiny">A BACKEND DEVELOPER USUALLY ASKS</span>
          <p>${t.dev}</p>
        </div>
        <div class="pos-arch-col">
          <span class="mono-tiny vermilion">I ASK</span>
          <p>${t.arch}</p>
        </div>
      </div>
    `).join(""),e=ws.principles.map(t=>`
      <article class="principle-spec-box">
        <span class="spec-code">${t.no}</span>
        <h3>${t.title}</h3>
        <p>${t.body}</p>
      </article>
    `).join(""),s=`
    <div class="pos-editorial-layout">
      <aside class="pos-sticky-col">
        <span class="sticky-sec-no">§02</span>
        <h2 class="sticky-sec-title">Positioning &amp; Five Principles</h2>
        <p class="sticky-sec-note">
          Why “backend developer” is the wrong specification label for the work I deliver.
        </p>
      </aside>

      <div class="pos-main-col">
        <div class="strikethrough-headline">
          <span class="struck-wrap">
            not just a backend developer
            <svg class="strike-svg" viewBox="0 0 420 22" preserveAspectRatio="none" aria-hidden="true">
              <path id="pos-strike-path" d="M4 15 Q 210 6, 416 13" fill="none" stroke="#FF4D1C" stroke-width="3.5" stroke-linecap="round" />
            </svg>
          </span>
          <span class="handwritten-correction" id="pos-correction">
            → an end-to-end business backend architect.
          </span>
        </div>

        <div class="lead-contrast-pair">
          <p class="lead-typical">${ws.leadTypical}</p>
          <p class="lead-architect">${ws.leadArchitect}</p>
        </div>

        <p class="pos-editorial-para" id="pos-scrub-para">
          ${ws.manifestoBody}
        </p>

        <blockquote class="pos-enterprise-callout">
          <span class="mono-tiny vermilion">THREE YEARS IN ENTERPRISE PRODUCTION DATA</span>
          <p>${ws.enterpriseAdvantage}</p>
        </blockquote>

        <div class="pos-compare-table" role="region" aria-label="Mindset Comparison">
          ${r}
        </div>

        <div class="principles-section">
          <div class="principles-head">
            <span class="mono-tiny">ARCHITECTURAL AXIOMS // 01–05</span>
            <strong>Five non-negotiable engineering principles</strong>
          </div>
          <div class="principles-spec-grid">
            ${e}
          </div>
        </div>
      </div>
    </div>
  `;return Dt({id:"positioning",sheetNo:"SHEET 02 / 10",sectionTag:"§02 IDENTITY & ARCHITECTURAL PRINCIPLES",projectTitle:"SYSTEMS THINKING SPECIFICATION",scale:"NTS",bodyHtml:s})}function oa(){const r=He.getState(),e=document.getElementById("pos-strike-path"),s=document.getElementById("pos-correction");r.reducedMotion||(e&&(ps(e),ee.to(e,{strokeDashoffset:0,duration:.9,ease:"power3.out",scrollTrigger:{trigger:".strikethrough-headline",start:"top 78%"}})),s&&ee.from(s,{y:12,autoAlpha:0,duration:.7,delay:.25,ease:"power2.out",scrollTrigger:{trigger:".strikethrough-headline",start:"top 78%"}}),ee.from(".pos-compare-row",{y:20,autoAlpha:0,duration:.55,stagger:.07,ease:"power2.out",scrollTrigger:{trigger:".pos-compare-table",start:"top 82%"}}))}function aa(r,e){const s=e?"#92B4FF":"#101010",t=e?"#FFFFFF":"#FF4D1C";switch(r){case"index":return`<svg viewBox="0 0 88 38" class="mini-fix-svg" aria-hidden="true"><circle cx="44" cy="7" r="4" stroke="${t}" fill="none" stroke-width="1.5"/><line x1="44" y1="11" x2="22" y2="28" stroke="${s}" stroke-width="1.2"/><line x1="44" y1="11" x2="66" y2="28" stroke="${s}" stroke-width="1.2"/><rect x="12" y="28" width="20" height="7" stroke="${t}" fill="none"/><rect x="56" y="28" width="20" height="7" stroke="${s}" fill="none"/></svg>`;case"schema":return`<svg viewBox="0 0 88 38" class="mini-fix-svg" aria-hidden="true"><rect x="8" y="8" width="24" height="22" stroke="${s}" fill="none"/><rect x="56" y="8" width="24" height="22" stroke="${t}" fill="none"/><path d="M32 19H56" stroke="${t}" stroke-width="1.5" stroke-dasharray="3 2"/></svg>`;case"cache":return`<svg viewBox="0 0 88 38" class="mini-fix-svg" aria-hidden="true"><polygon points="44,4 64,19 44,34 24,19" stroke="${t}" fill="none" stroke-width="1.4"/><line x1="6" y1="19" x2="24" y2="19" stroke="${s}"/><line x1="64" y1="19" x2="82" y2="19" stroke="${s}"/></svg>`;case"lock":return`<svg viewBox="0 0 88 38" class="mini-fix-svg" aria-hidden="true"><rect x="28" y="16" width="32" height="18" stroke="${t}" fill="none" stroke-width="1.5"/><path d="M35 16V11a9 9 0 0 1 18 0v5" stroke="${s}" fill="none" stroke-width="1.4"/></svg>`;case"pipeline":return`<svg viewBox="0 0 88 38" class="mini-fix-svg" aria-hidden="true"><circle cx="16" cy="19" r="6" stroke="${s}" fill="none"/><circle cx="44" cy="19" r="6" stroke="${t}" fill="none"/><circle cx="72" cy="19" r="6" stroke="${s}" fill="none"/><line x1="22" y1="19" x2="38" y2="19" stroke="${t}"/><line x1="50" y1="19" x2="66" y2="19" stroke="${t}"/></svg>`;case"bi":return`<svg viewBox="0 0 88 38" class="mini-fix-svg" aria-hidden="true"><line x1="12" y1="33" x2="76" y2="33" stroke="${s}"/><rect x="18" y="21" width="10" height="12" stroke="${s}" fill="none"/><rect x="38" y="14" width="10" height="19" stroke="${s}" fill="none"/><rect x="58" y="6" width="10" height="27" stroke="${t}" fill="none"/></svg>`;case"rbac":return`<svg viewBox="0 0 88 38" class="mini-fix-svg" aria-hidden="true"><path d="M44 4L64 11V21C64 29 54 34 44 36C34 34 24 29 24 21V11L44 4Z" stroke="${t}" fill="none" stroke-width="1.5"/></svg>`;case"queue":return`<svg viewBox="0 0 88 38" class="mini-fix-svg" aria-hidden="true"><rect x="14" y="11" width="14" height="16" stroke="${s}" fill="none"/><rect x="34" y="11" width="14" height="16" stroke="${t}" fill="none"/><rect x="54" y="11" width="14" height="16" stroke="${s}" fill="none"/></svg>`}}function wr(r){return Zo.map(e=>`
      <div class="sched-row">
        <div class="sched-col col-no">${e.no}</div>
        <div class="sched-col col-prob">${r?e.techProblem:e.businessProblem}</div>
        <div class="sched-col col-act">${r?e.techAction:e.businessAction}</div>
        <div class="sched-col col-out"><strong>${r?e.techOutcome:e.businessOutcome}</strong></div>
        <div class="sched-col col-diag">${aa(e.diagramType,r)}</div>
      </div>
    `).join("")}function la(){const r=`
    <div class="sheet-heading-bar">
      <div>
        <h2 class="sheet-h2">Schedule of Business Bottlenecks &amp; Fixes</h2>
        <p class="sheet-subtitle">
          Move your cursor across the schedule (or use arrow keys / switches) to X-ray plain business outcomes into technical database &amp; architecture specs.
        </p>
      </div>

      <div class="lens-mode-bar" role="group" aria-label="Schedule Lens Layer Mode">
        <button type="button" class="lens-switch-btn" data-lens-mode="business">Business</button>
        <button type="button" class="lens-switch-btn is-active hide-mobile-lens" data-lens-mode="lens">Cursor Lens</button>
        <button type="button" class="lens-switch-btn" data-lens-mode="tech">Blueprint Tech</button>
      </div>
    </div>

    <div
      class="lens-stage schedule-lens-stage"
      data-lens-radius="145"
      tabindex="0"
      aria-label="Architectural Problem Schedule with Business to Tech Lens"
    >
      <!-- Layer 1: Business View (Paper) -->
      <div class="business-layer">
        <div class="sched-table">
          <div class="sched-head">
            <span>NO.</span>
            <span>IF THIS SOUNDS LIKE YOUR BUSINESS</span>
            <span>WHAT I DO</span>
            <span>OUTCOME YOU SHOULD EXPECT</span>
            <span>SCHEMATIC</span>
          </div>
          ${wr(!1)}
        </div>
      </div>

      <!-- Layer 2: Technical Blueprint View (Inside Circular Lens) -->
      <div class="tech-layer" aria-hidden="true">
        <div class="sched-table is-blueprint">
          <div class="sched-head">
            <span>NO.</span>
            <span>TECHNICAL ROOT CAUSE</span>
            <span>ARCHITECTURAL INTERVENTION</span>
            <span>PRODUCTION SLA / PROOF</span>
            <span>TOPOLOGY</span>
          </div>
          ${wr(!0)}
        </div>
      </div>

      <div class="lens-reticle" aria-hidden="true">
        <span class="reticle-tag">TECH LENS // X-RAY</span>
      </div>
    </div>
  `;return Dt({id:"services",sheetNo:"SHEET 03 / 10",sectionTag:"§03 SCHEDULE OF INTERVENTIONS (LENS TEASER)",projectTitle:"BOTTLENECK REMEDIATION SCHEDULE",scale:"1 : 50",bodyHtml:r})}function Er(r,e){const s=e?"#FFFFFF":"#101010",t=e?"#80B3FF":"#FF4D1C",i=e?"#1635B3":"#F6F3EB",n=e?"#C5DCFF":"#4A4945",o=r.connectors.map(l=>`
      <g>
        <line x1="${l.x1}" y1="${l.y1}" x2="${l.x2}" y2="${l.y2}" stroke="${s}" stroke-width="1.6" />
        <line x1="${l.x1}" y1="${l.y1}" x2="${l.x2}" y2="${l.y2}" stroke="${t}" stroke-width="2.2" stroke-dasharray="6 26" class="dwg-packet-line" />
        <circle cx="${l.x2}" cy="${l.y2}" r="3" fill="${t}" />
      </g>
    `).join(""),a=r.boxes.map(l=>{const u=e?l.techLabel:l.businessLabel,f=e?l.techSub:l.businessSub;return`
        <g transform="translate(${l.x}, ${l.y})">
          <!-- Isometric 3D offset shadow -->
          <rect x="5" y="5" width="${l.w}" height="${l.h}" fill="none" stroke="${s}" stroke-opacity="0.28" stroke-width="1" />
          <rect x="0" y="0" width="${l.w}" height="${l.h}" fill="${i}" stroke="${s}" stroke-width="1.6" />
          <line x1="0" y1="22" x2="${l.w}" y2="22" stroke="${s}" stroke-opacity="0.25" stroke-width="1" />
          <text x="10" y="15" font-family="IBM Plex Mono, monospace" font-size="9" fill="${t}" font-weight="600">${l.id.toUpperCase()} // ${e?"TECH SPEC":"BUSINESS FLOW"}</text>
          <text x="10" y="43" font-family="Geist, sans-serif" font-size="12" font-weight="600" fill="${s}">${u}</text>
          <text x="10" y="61" font-family="IBM Plex Mono, monospace" font-size="9.2" fill="${n}">${f}</text>
        </g>
      `}).join(""),c=r.callouts.map(l=>`
      <g transform="translate(${l.x}, ${l.y})">
        <circle cx="0" cy="-42" r="9.5" fill="${t}" />
        <text x="0" y="-38.5" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="700" fill="${e?"#10257E":"#FFFFFF"}">${l.code}</text>
      </g>
    `).join("");return`
    <svg viewBox="0 0 610 296" class="dwg-svg" role="img" aria-label="${r.title} ${e?"Technical Blueprint":"Business"} Diagram">
      ${o}
      ${a}
      ${c}
    </svg>
  `}function xr(r,e){return r.callouts.map(s=>`
      <div class="dwg-callout-note">
        <span class="callout-badge">${s.code}</span>
        <div>
          <strong>${e?s.techTitle:s.businessTitle}</strong>
          <p>${e?s.techNote:s.businessNote}</p>
        </div>
      </div>
    `).join("")}function ca(){const e=`
    <div class="sheet-heading-bar">
      <div>
        <h2 class="sheet-h2">Selected Architectural Drawings (Proof, Not Promises)</h2>
        <p class="sheet-subtitle">
          Same diagram, two truths. Sweep the circular lens over any drawing to inspect the database locks, execution plans, and queues behind the business outcome.
        </p>
      </div>
    </div>

    <div class="drawings-stack">
      ${Jo.map(s=>{const t=s.metrics.map(o=>`
        <div class="dwg-metric">
          <strong>${o.val}</strong>
          <span>${o.label}</span>
        </div>
      `).join(""),i=s.bullets.map(o=>`<li>${o}</li>`).join(""),n=s.links?`<div class="dwg-ext-links">
          ${s.links.map(o=>`<a href="${o.url}" target="_blank" rel="noopener noreferrer" class="dwg-link">${o.label} ↗</a>`).join("")}
        </div>`:"";return`
      <article id="${s.id}" class="drawing-plate">
        <div class="plate-header">
          <div>
            <span class="plate-dwg-no">${s.dwgNo} · SCALE ${s.scale} · ${s.period}</span>
            <h3 class="plate-title">${s.title}</h3>
            <p class="plate-stack">${s.roleOrStack}</p>
          </div>

          <div class="lens-mode-bar" role="group" aria-label="${s.title} Lens Toggle">
            <button type="button" class="lens-switch-btn" data-lens-mode="business">Business</button>
            <button type="button" class="lens-switch-btn is-active hide-mobile-lens" data-lens-mode="lens">Cursor Lens</button>
            <button type="button" class="lens-switch-btn" data-lens-mode="tech">Blueprint Tech</button>
          </div>
        </div>

        <!-- Dual-Layer Signature Lens Drawing -->
        <div
          class="lens-stage drawing-lens-stage"
          data-lens-radius="150"
          tabindex="0"
          aria-label="${s.title} Dual-Layer Drawing. Hover cursor or use arrow keys to inspect technical layer."
        >
          <!-- Outside Lens: Business Story on Warm Paper -->
          <div class="business-layer">
            <div class="dwg-layer-banner">
              <span>LAYER 01 // BUSINESS OUTCOME VIEW</span>
              <strong>${s.outcomeHeadline}</strong>
            </div>
            <p class="dwg-layer-desc">${s.businessSummary}</p>
            ${Er(s,!1)}
            <div class="dwg-callouts-row">
              ${xr(s,!1)}
            </div>
          </div>

          <!-- Inside Lens: Technical Blueprint View (#1B3FD1) -->
          <div class="tech-layer" aria-hidden="true">
            <div class="dwg-layer-banner blueprint-banner">
              <span>LAYER 02 // BLUEPRINT TECHNICAL INTERNALS</span>
              <strong>ISOLATION · INDEXES · QUEUES · RBAC</strong>
            </div>
            <p class="dwg-layer-desc">${s.techSummary}</p>
            ${Er(s,!0)}
            <div class="dwg-callouts-row">
              ${xr(s,!0)}
            </div>
          </div>

          <div class="lens-reticle" aria-hidden="true">
            <span class="reticle-tag">BUSINESS ⇄ TECH LENS</span>
          </div>
        </div>

        <!-- Proof Notes & Takeaway -->
        <div class="plate-footer-grid">
          <div class="plate-bullets-col">
            <div class="dwg-metrics-strip">${t}</div>
            <ul class="plate-bullets">${i}</ul>
            ${n}
          </div>

          <aside class="plate-caption-strip">
            <span class="mono-tiny vermilion">ARCHITECT’S NOTE FOR THE CLIENT</span>
            <p>“${s.clientTakeaway}”</p>
          </aside>
        </div>
      </article>
    `}).join("")}
    </div>
  `;return Dt({id:"work",sheetNo:"SHEET 04 / 10",sectionTag:"§04 ARCHITECTURAL DRAWINGS — SIGNATURE BUSINESS ⇄ TECH LENS",projectTitle:"PRODUCTION CASE DRAWINGS",scale:"AS NOTED",bodyHtml:e})}function da(){He.getState().reducedMotion||ee.from(".drawing-plate",{y:34,autoAlpha:0,duration:.75,stagger:.14,ease:"power2.out",scrollTrigger:{trigger:".drawings-stack",start:"top 82%"}})}function ua(){const e=`
    <div class="sheet-heading-bar">
      <div>
        <h2 class="sheet-h2">Measured System Dimensions</h2>
        <p class="sheet-subtitle">
          Every dimension below is a verified production measurement from README.md — zero synthetic benchmarks.
        </p>
      </div>
    </div>

    <div class="dimensions-plan-grid">
      ${ea.map((s,t)=>`
      <article class="dimension-card" data-dim-idx="${t}">
        <div class="dim-line-row" aria-hidden="true">
          <svg viewBox="0 0 140 24" class="dim-wing left-wing" preserveAspectRatio="none">
            <line x1="2" y1="3" x2="2" y2="21" stroke="#101010" stroke-width="1.5" />
            <line class="dim-extend" x1="138" y1="12" x2="8" y2="12" stroke="#101010" stroke-width="1.3" />
            <polygon class="dim-arrow" points="4,12 13,8 13,16" fill="#FF4D1C" />
          </svg>

          <div class="dim-number-wrap">
            <span
              class="dim-counter"
              data-target="${s.value}"
              data-decimals="${s.decimals}"
            >${s.value}</span><span class="dim-suffix">${s.suffix}</span>
          </div>

          <svg viewBox="0 0 140 24" class="dim-wing right-wing" preserveAspectRatio="none">
            <line x1="138" y1="3" x2="138" y2="21" stroke="#101010" stroke-width="1.5" />
            <line class="dim-extend" x1="2" y1="12" x2="132" y2="12" stroke="#101010" stroke-width="1.3" />
            <polygon class="dim-arrow" points="136,12 127,8 127,16" fill="#FF4D1C" />
          </svg>
        </div>

        <h3 class="dim-caption">${s.caption}</h3>
        <span class="dim-sub">${s.subcaption}</span>
        <p class="dim-method">${s.method}</p>
      </article>
    `).join("")}
    </div>
  `;return Dt({id:"numbers",sheetNo:"SHEET 05 / 10",sectionTag:"§05 MEASURED DIMENSIONS & TOLERANCES",projectTitle:"PRODUCTION SLA DIMENSIONS",scale:"1 : 1",bodyHtml:e})}function pa(){const r=He.getState();document.querySelectorAll(".dimension-card").forEach(s=>{const t=s.querySelector(".dim-counter"),i=s.querySelectorAll(".dim-extend"),n=s.querySelectorAll(".dim-arrow");if(!t)return;const o=Number(t.getAttribute("data-target")||"0"),a=Number(t.getAttribute("data-decimals")||"0");if(r.reducedMotion){t.textContent=o.toFixed(a);return}i.forEach(l=>ps(l)),t.textContent=0 .toFixed(a);const c={v:0};ee.timeline({scrollTrigger:{trigger:s,start:"top 86%",once:!0}}).to(i,{strokeDashoffset:0,duration:.75,ease:"power3.out"}).to(c,{v:o,duration:1.25,ease:"power3.out",onUpdate:()=>{t.textContent=c.v.toFixed(a)}},.05).fromTo(n,{scale:1.5,transformOrigin:"center center"},{scale:1,duration:.45,ease:"back.out(2)"},.55)})}function ha(r){switch(r){case"DATA":return'<svg viewBox="0 0 32 32" class="mat-svg" aria-hidden="true"><ellipse cx="16" cy="8" rx="10" ry="4" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M6 8v16c0 2.2 4.5 4 10 4s10-1.8 10-4V8" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M6 16c0 2.2 4.5 4 10 4s10-1.8 10-4" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>';case"BACKEND":return'<svg viewBox="0 0 32 32" class="mat-svg" aria-hidden="true"><polygon points="16,3 28,10 28,22 16,29 4,22 4,10" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="16" cy="16" r="4" fill="none" stroke="#FF4D1C" stroke-width="1.5"/></svg>';case"PERF_ASYNC":return'<svg viewBox="0 0 32 32" class="mat-svg" aria-hidden="true"><path d="M18 3L7 18h8l-1 11 11-15h-8l1-11z" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>';case"CONCURRENCY":return'<svg viewBox="0 0 32 32" class="mat-svg" aria-hidden="true"><rect x="7" y="14" width="18" height="13" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M11 14v-4a5 5 0 0 1 10 0v4" fill="none" stroke="#FF4D1C" stroke-width="1.5"/></svg>';case"BI":return'<svg viewBox="0 0 32 32" class="mat-svg" aria-hidden="true"><line x1="4" y1="27" x2="28" y2="27" stroke="currentColor" stroke-width="1.5"/><rect x="7" y="17" width="4" height="10" fill="none" stroke="currentColor" stroke-width="1.4"/><rect x="14" y="12" width="4" height="15" fill="none" stroke="currentColor" stroke-width="1.4"/><rect x="21" y="6" width="4" height="21" fill="none" stroke="#FF4D1C" stroke-width="1.4"/></svg>';case"DEVOPS":return'<svg viewBox="0 0 32 32" class="mat-svg" aria-hidden="true"><rect x="4" y="6" width="24" height="20" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M9 13l4 3-4 3M16 19h6" fill="none" stroke="#FF4D1C" stroke-width="1.5"/></svg>'}}function fa(){const e=[{key:"ALL",label:"All Layers (17)"},{key:"DATA",label:"Data & DB"},{key:"BACKEND",label:"Backend & Security"},{key:"PERF_ASYNC",label:"Perf & Async"},{key:"CONCURRENCY",label:"Concurrency"},{key:"BI",label:"Analytics & BI"},{key:"DEVOPS",label:"DevOps"}].map((i,n)=>`
      <button
        type="button"
        class="mat-filter-btn ${n===0?"is-active":""}"
        data-mat-filter="${i.key}"
      >${i.label}</button>
    `).join(""),s=ta.map(i=>`
      <article class="mat-cell" data-mat-cat="${i.category}">
        <div class="mat-cell-top">
          <span class="mat-code">${i.code} // ${i.categoryLabel}</span>
          <span class="mat-badge ${i.status==="PRODUCTION"?"is-prod":"is-work"}">${i.status}</span>
        </div>

        <div class="mat-icon-title">
          ${ha(i.category)}
          <h3>${i.name}</h3>
        </div>

        <p class="mat-note">${i.specNote}</p>
      </article>
    `).join(""),t=`
    <div class="sheet-heading-bar">
      <div>
        <h2 class="sheet-h2">Schedule of Architectural Materials</h2>
        <p class="sheet-subtitle">
          Production-proven technologies marked in vermilion; working-knowledge capabilities marked in ink outline. Filter layers with GSAP Flip layout transitions.
        </p>
      </div>
    </div>

    <div class="mat-filter-bar" role="tablist" aria-label="Filter toolkit by architectural layer">
      ${e}
    </div>

    <div class="materials-grid" id="materials-grid">
      ${s}
    </div>
  `;return Dt({id:"toolkit",sheetNo:"SHEET 06 / 10",sectionTag:"§06 LEGEND & SCHEDULE OF MATERIALS",projectTitle:"TECHNOLOGY SPECIFICATION",scale:"1 : 1",bodyHtml:t})}function ga(){const r=Array.from(document.querySelectorAll("[data-mat-filter]")),e=Array.from(document.querySelectorAll(".mat-cell")),s=He.getState();s.reducedMotion||ee.from(e,{scale:.96,autoAlpha:0,duration:.5,stagger:{amount:.45,from:"center"},ease:"power2.out",scrollTrigger:{trigger:"#materials-grid",start:"top 84%"}}),r.forEach(t=>{t.addEventListener("click",()=>{const i=t.getAttribute("data-mat-filter")||"ALL";ut.click(),r.forEach(o=>o.classList.toggle("is-active",o===t));const n=s.reducedMotion?null:Ps.getState(e);e.forEach(o=>{const a=i==="ALL"||o.getAttribute("data-mat-cat")===i;o.style.display=a?"":"none"}),n&&Ps.from(n,{duration:.48,ease:"power3.out",scale:!0,onEnter:o=>ee.fromTo(o,{autoAlpha:0,scale:.92},{autoAlpha:1,scale:1,duration:.32}),onLeave:o=>ee.to(o,{autoAlpha:0,scale:.92,duration:.22})})})})}function ma(){const e=`
    <div class="sheet-heading-bar">
      <div>
        <h2 class="sheet-h2">Six Construction Phases (Discover → Prove)</h2>
        <p class="sheet-subtitle">
          Scroll or select any phase to watch the architectural elevation progress from foundation survey (1/6) to verified sign-off (6/6).
        </p>
      </div>
      <div class="const-stage-indicator">
        <span>ELEVATION COMPLETION</span>
        <strong id="const-progress-label">STAGE 01 / 06 — DISCOVER</strong>
      </div>
    </div>

    <div class="construction-layout" id="construction-layout">
      <!-- Progressive Isometric Building Elevation -->
      <div class="const-elevation-box">
        <svg viewBox="0 0 420 340" class="const-iso-svg" role="img" aria-label="Progressive 6-stage isometric architecture construction">
          <!-- Stage 1: Foundation Grid & Base Pad -->
          <g class="iso-stage" data-stage="0">
            <polygon class="iso-draw" points="210,295 70,225 210,155 350,225" fill="#F5F1E8" stroke="#101010" stroke-width="2" />
            <line class="iso-draw" x1="140" y1="190" x2="280" y2="260" stroke="#101010" stroke-width="1" stroke-dasharray="4 3" />
            <line class="iso-draw" x1="280" y1="190" x2="140" y2="260" stroke="#101010" stroke-width="1" stroke-dasharray="4 3" />
          </g>

          <!-- Stage 2: Diagnostic Columns -->
          <g class="iso-stage" data-stage="1">
            <line class="iso-draw" x1="110" y1="225" x2="110" y2="120" stroke="#101010" stroke-width="2" />
            <line class="iso-draw" x1="210" y1="275" x2="210" y2="170" stroke="#101010" stroke-width="2" />
            <line class="iso-draw" x1="310" y1="225" x2="310" y2="120" stroke="#101010" stroke-width="2" />
            <line class="iso-draw" x1="210" y1="175" x2="210" y2="70" stroke="#101010" stroke-width="2" />
          </g>

          <!-- Stage 3: Master Data & API Deck -->
          <g class="iso-stage" data-stage="2">
            <polygon class="iso-draw" points="210,235 95,178 210,120 325,178" fill="rgba(237,233,223,0.88)" stroke="#101010" stroke-width="1.8" />
          </g>

          <!-- Stage 4: Core Service & Worker Superstructure -->
          <g class="iso-stage" data-stage="3">
            <polygon class="iso-draw" points="210,185 120,140 210,95 300,140" fill="rgba(246,243,235,0.94)" stroke="#101010" stroke-width="1.8" />
            <rect class="iso-draw" x="184" y="114" width="52" height="32" fill="none" stroke="#FF4D1C" stroke-width="1.6" />
          </g>

          <!-- Stage 5: Hardening Perimeter & Concurrency Truss -->
          <g class="iso-stage" data-stage="4">
            <polygon class="iso-draw" points="210,132 145,100 210,68 275,100" fill="#EDE9DF" stroke="#101010" stroke-width="2" />
            <line class="iso-draw" x1="110" y1="120" x2="210" y2="170" stroke="#FF4D1C" stroke-width="1.4" />
            <line class="iso-draw" x1="310" y1="120" x2="210" y2="170" stroke="#FF4D1C" stroke-width="1.4" />
          </g>

          <!-- Stage 6: Proven Metric Spire & Verification Banner -->
          <g class="iso-stage" data-stage="5">
            <line class="iso-draw" x1="210" y1="68" x2="210" y2="26" stroke="#FF4D1C" stroke-width="2.5" />
            <polygon class="iso-draw" points="210,26 266,38 210,50" fill="#FF4D1C" stroke="#FF4D1C" stroke-width="1" />
            <circle cx="210" cy="312" r="4" fill="#FF4D1C" />
          </g>
        </svg>

        <div class="const-elevation-caption">
          <span>ISOMETRIC PROGRESSIVE BUILD</span>
          <strong id="const-deliv-banner">Deliverable: Clear problem statement in business language.</strong>
        </div>
      </div>

      <!-- 6 Phase Cards -->
      <div class="const-phases-grid">
        ${Xs.map((s,t)=>`
      <article
        class="const-phase-card ${t===0?"is-active":""}"
        data-const-idx="${t}"
        tabindex="0"
        role="button"
      >
        <div class="const-card-top">
          <span class="const-num">PHASE ${s.step}</span>
          <span class="const-tag">${s.stageTag}</span>
        </div>
        <h3>${s.name}</h3>
        <p class="const-happens">${s.happens}</p>
        <div class="const-deliv">
          <span>DELIVERABLE</span>
          <strong>${s.deliverable}</strong>
        </div>
      </article>
    `).join("")}
      </div>
    </div>
  `;return Dt({id:"process",sheetNo:"SHEET 07 / 10",sectionTag:"§07 ENGAGEMENT & CONSTRUCTION PHASES",projectTitle:"SIX-PHASE DELIVERY PROTOCOL",scale:"1 : 100",bodyHtml:e})}function ya(){const r=Array.from(document.querySelectorAll(".const-phase-card")),e=Array.from(document.querySelectorAll(".iso-stage")),s=document.getElementById("const-progress-label"),t=document.getElementById("const-deliv-banner"),i=He.getState(),n=o=>{const a=Math.max(0,Math.min(Xs.length-1,o)),c=Xs[a];r.forEach((l,u)=>{l.classList.toggle("is-active",u===a),l.classList.toggle("is-complete",u<a)}),e.forEach((l,u)=>{const f=u<=a;l.style.opacity=f?"1":"0.12",l.style.transform=f?"translateY(0px)":"translateY(-8px)"}),s&&(s.textContent=`STAGE 0${a+1} / 06 — ${c.name.toUpperCase()}`),t&&(t.textContent=`Deliverable: ${c.deliverable}`)};n(0),r.forEach((o,a)=>{const c=()=>{ut.click(),n(a)};o.addEventListener("click",c),o.addEventListener("keydown",l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),c())})}),i.reducedMotion||(document.querySelectorAll('.iso-stage[data-stage="0"] .iso-draw').forEach(o=>{ps(o),ee.to(o,{strokeDashoffset:0,duration:.9,ease:"power2.out",scrollTrigger:{trigger:"#construction-layout",start:"top 80%"}})}),M.create({trigger:"#construction-layout",start:"top 68%",end:"bottom 45%",scrub:.5,onUpdate:o=>{const a=Math.min(Xs.length-1,Math.floor(o.progress*Xs.length));n(a)}}))}function va(){const e=`
    <div class="sheet-heading-bar">
      <div>
        <h2 class="sheet-h2">Revision History (Experience &amp; Education)</h2>
        <p class="sheet-subtitle">
          Career progression recorded as formal architectural drawing revisions — latest revision clouded in vermilion.
        </p>
      </div>
    </div>

    <div class="revision-schedule-table" id="revision-table">
      <div class="rev-head">
        <span>REV</span>
        <span>DATE</span>
        <span>DESCRIPTION &amp; PRODUCTION DELIVERABLES</span>
        <span>BY</span>
      </div>
      ${sa.map(s=>`
      <div class="rev-row ${s.isLatest?"is-latest-rev":""}">
        ${s.isLatest?`<svg class="rev-cloud-svg" viewBox="0 0 900 110" preserveAspectRatio="none" aria-hidden="true">
                <path
                  id="rev-cloud-path"
                  d="M12,24 Q35,4 65,18 Q98,2 132,18 Q168,2 204,18 Q242,2 280,18 Q318,2 356,18 Q394,2 432,18 Q470,2 508,18 Q546,2 584,18 Q622,2 660,18 Q698,2 736,18 Q774,2 812,18 Q852,2 886,22 Q898,55 884,88 Q850,106 812,92 Q774,106 736,92 Q698,106 660,92 Q622,106 584,92 Q546,106 508,92 Q470,106 432,92 Q394,106 356,92 Q318,106 280,92 Q242,106 204,92 Q168,106 132,92 Q98,106 65,92 Q30,106 12,86 Q2,55 12,24 Z"
                  fill="none"
                  stroke="#FF4D1C"
                  stroke-width="2"
                />
              </svg>`:""}
        <div class="rev-col rev-code" data-rev-scramble="${s.rev}">${s.rev}</div>
        <div class="rev-col rev-date">${s.date}</div>
        <div class="rev-col rev-desc">
          <strong>${s.title} · <em>${s.org}</em></strong>
          <p>${s.description}</p>
        </div>
        <div class="rev-col rev-by">${s.by}</div>
      </div>
    `).join("")}
    </div>
  `;return Dt({id:"journey",sheetNo:"SHEET 08 / 10",sectionTag:"§08 REVISION LOG — EXPERIENCE & ACADEMIC THESIS",projectTitle:"CAREER REVISION RECORD",scale:"NTS",bodyHtml:e})}function ba(){const r=He.getState(),e=document.getElementById("rev-cloud-path"),s=document.querySelectorAll("[data-rev-scramble]");r.reducedMotion||(e&&(ps(e),ee.to(e,{strokeDashoffset:0,duration:1.35,ease:"power2.out",scrollTrigger:{trigger:"#revision-table",start:"top 76%",once:!0}})),s.forEach((t,i)=>{const n=t.getAttribute("data-rev-scramble")||"";ee.timeline({scrollTrigger:{trigger:"#revision-table",start:"top 80%",once:!0}}).add(()=>{Pi(t,n,.7,i*.12)})}))}function wa(){const e=`
    <div class="sheet-heading-bar">
      <div>
        <h2 class="sheet-h2">Proposed Extension: Distributed &amp; Event-Driven Systems</h2>
        <p class="sheet-subtitle">
          Drag the architecture slider below between Solid Lines (Modular Monolith) and Proposed Dashed Lines (Distributed Event Mesh) to inspect the honest trade-offs.
        </p>
      </div>
    </div>

    <div class="morph-workbench">
      <div class="morph-controls-bar">
        <button type="button" class="morph-preset is-active" data-morph-val="0">0% Modular Monolith</button>
        <input
          type="range"
          id="arch-morph-slider"
          class="arch-morph-slider"
          min="0"
          max="100"
          value="35"
          aria-label="Morph architecture from Monolith to Distributed"
        />
        <button type="button" class="morph-preset" data-morph-val="100">100% Distributed Mesh</button>
      </div>

      <div class="morph-diagram-canvas">
        <svg viewBox="0 0 760 270" class="morph-svg" role="img" aria-label="Monolith versus Distributed Architecture Blueprint">
          <!-- Left Existing Solid Core -->
          <g id="morph-monolith-group">
            <rect x="44" y="48" width="230" height="174" fill="#F6F3EB" stroke="#101010" stroke-width="2" />
            <line x1="44" y1="78" x2="274" y2="78" stroke="#101010" stroke-width="1.2" />
            <text x="58" y="68" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="600" fill="#101010">EXISTING SOLID // MODULAR CORE</text>
            <rect x="64" y="96" width="190" height="44" fill="#EDE9DF" stroke="#101010" stroke-width="1.4" />
            <text x="159" y="122" text-anchor="middle" font-family="Geist, sans-serif" font-size="12" font-weight="600" fill="#101010">Django / DRF Domain Logic</text>
            <rect x="64" y="156" width="190" height="46" fill="#EDE9DF" stroke="#101010" stroke-width="1.4" />
            <text x="159" y="183" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="11" fill="#101010">Oracle / PostgreSQL ACID</text>
          </g>

          <!-- Animated Bridge -->
          <g id="morph-bridge-group">
            <line x1="274" y1="135" x2="366" y2="135" stroke="#FF4D1C" stroke-width="2.2" stroke-dasharray="7 5" class="proposed-dash" />
            <polygon points="366,135 356,130 356,140" fill="#FF4D1C" />
            <text x="320" y="123" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" fill="#FF4D1C">OUTBOX / EVENTS</text>
          </g>

          <!-- Right Proposed Distributed Services (Dashed) -->
          <g id="morph-distributed-group">
            <rect x="368" y="30" width="352" height="210" fill="rgba(27,63,209,0.04)" stroke="#1B3FD1" stroke-width="1.8" stroke-dasharray="8 5" class="proposed-dash" />
            <text x="384" y="52" font-family="IBM Plex Mono, monospace" font-size="10" font-weight="600" fill="#1B3FD1">PROPOSED EXTENSION // EVENT-DRIVEN SERVICES</text>

            <!-- Central Broker -->
            <rect x="392" y="104" width="118" height="68" fill="#EDE9DF" stroke="#FF4D1C" stroke-width="1.8" />
            <text x="451" y="134" text-anchor="middle" font-family="Geist, sans-serif" font-size="11.5" font-weight="600" fill="#101010">Event Broker</text>
            <text x="451" y="152" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" fill="#FF4D1C">Streams &amp; Queues</text>

            <!-- Decomposed Consumers -->
            <line x1="510" y1="120" x2="556" y2="82" stroke="#1B3FD1" stroke-width="1.5" stroke-dasharray="5 4" class="proposed-dash" />
            <line x1="510" y1="138" x2="556" y2="138" stroke="#1B3FD1" stroke-width="1.5" stroke-dasharray="5 4" class="proposed-dash" />
            <line x1="510" y1="156" x2="556" y2="194" stroke="#1B3FD1" stroke-width="1.5" stroke-dasharray="5 4" class="proposed-dash" />

            <rect x="556" y="60" width="144" height="42" fill="#F6F3EB" stroke="#1B3FD1" stroke-width="1.4" stroke-dasharray="5 3" />
            <text x="628" y="85" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" fill="#101010">Inventory &amp; Locks</text>

            <rect x="556" y="117" width="144" height="42" fill="#F6F3EB" stroke="#1B3FD1" stroke-width="1.4" stroke-dasharray="5 3" />
            <text x="628" y="142" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" fill="#101010">Rider &amp; Payout Svc</text>

            <rect x="556" y="174" width="144" height="42" fill="#F6F3EB" stroke="#1B3FD1" stroke-width="1.4" stroke-dasharray="5 3" />
            <text x="628" y="199" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" fill="#101010">Analytics &amp; Replicas</text>
          </g>
        </svg>
      </div>

      <div class="morph-tradeoff-panel">
        <div class="tradeoff-head">
          <span id="morph-stage-label" class="spec-badge vermilion">HYBRID ASYNC + READ REPLICA TOPOLOGY</span>
          <span id="morph-pct-readout" class="mono-tiny">DISTRIBUTION RATIO: 35% (ILLUSTRATIVE)</span>
        </div>
        <p id="morph-when" class="tradeoff-when"></p>
        <p id="morph-notes" class="tradeoff-notes"></p>
      </div>
    </div>

    <div class="prop-pillars-grid">
      ${Gs.pillars.map((s,t)=>`
      <article class="prop-pillar">
        <span class="spec-code">EXT-0${t+1}</span>
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
      </article>
    `).join("")}
    </div>

    <div class="prop-status-pair">
      <div class="prop-status-card">
        <span class="mono-tiny vermilion">ALREADY APPLIED IN PRODUCTION</span>
        <p>${Gs.alreadyApplied}</p>
      </div>
      <div class="prop-status-card">
        <span class="mono-tiny blueprint-txt">ACTIVELY DEEPENING</span>
        <p>${Gs.deepeningNow}</p>
      </div>
    </div>

    <blockquote class="honest-spec-callout">
      <p>“${Gs.honestNote}”</p>
    </blockquote>
  `;return Dt({id:"direction",sheetNo:"SHEET 09 / 10",sectionTag:"§09 FUTURE WORKS (PROPOSED DISTRIBUTED EXTENSION)",projectTitle:"DISTRIBUTED SYSTEMS DIRECTION",scale:"1 : 200",bodyHtml:e})}function Ea(){const r=document.getElementById("arch-morph-slider"),e=Array.from(document.querySelectorAll("[data-morph-val]")),s=document.getElementById("morph-monolith-group"),t=document.getElementById("morph-bridge-group"),i=document.getElementById("morph-distributed-group"),n=document.getElementById("morph-stage-label"),o=document.getElementById("morph-pct-readout"),a=document.getElementById("morph-when"),c=document.getElementById("morph-notes");if(!r)return;const l=u=>{const f=u/100;s&&(s.style.opacity=`${1-f*.48}`,s.style.transform=`translateX(${(-f*10).toFixed(1)}px)`),t&&(t.style.opacity=`${.25+f*.75}`),i&&(i.style.opacity=`${.22+f*.78}`,i.style.transform=`translateX(${((1-f)*14).toFixed(1)}px)`);const g=Gs.stages,p=u>=75?g[2]:u>=30?g[1]:g[0];n&&(n.textContent=p.label),o&&(o.textContent=`DISTRIBUTION RATIO: ${u}% (ILLUSTRATIVE)`),a&&(a.textContent=`When appropriate: ${p.when}`),c&&(c.textContent=`Architect's trade-off note: ${p.tradeoff}`),e.forEach(m=>{const k=Number(m.getAttribute("data-morph-val"));m.classList.toggle("is-active",Math.abs(k-u)<20)})};l(Number(r.value)),r.addEventListener("input",()=>{l(Number(r.value))}),e.forEach(u=>{u.addEventListener("click",()=>{const f=Number(u.getAttribute("data-morph-val")||"0");ut.click(),r.value=String(f),l(f)})})}function xa(){const r=dn.firstCallQuestions.map((o,a)=>`
      <li>
        <span class="rfi-q-no">Q-0${a+1}</span>
        <p>${o}</p>
      </li>
    `).join(""),e=dn.greatFit.map(o=>`<li>${o}</li>`).join(""),s=dn.notFit.map(o=>`<li>${o}</li>`).join(""),t=`
    <div class="sheet-heading-bar">
      <div>
        <h2 class="sheet-h2">Request for Information (RFI) — Let’s Talk</h2>
        <p class="sheet-subtitle">
          If your system is slowing your business down, or you can see the next stage of growth and don’t trust your current system to carry it, file an RFI below or reach out directly.
        </p>
      </div>
    </div>

    <div class="rfi-master-grid">
      <!-- Architectural RFI Form -->
      <form id="rfi-form" class="rfi-drawing-form" novalidate>
        <div class="rfi-form-header">
          <span>DOCUMENT // RFI-2026-AZ</span>
          <span>ATTENTION: MD. SHAH ABRAR ZAHIN</span>
        </div>

        <div class="rfi-field">
          <label for="rfi-project">01 // PROJECT OR BUSINESS NAME</label>
          <input
            type="text"
            id="rfi-project"
            name="project"
            required
            placeholder="e.g., Multi-vendor pharma marketplace / Enterprise ERP reporting"
          />
        </div>

        <div class="rfi-field">
          <label for="rfi-bottleneck">02 // YOUR PRIMARY BOTTLENECK</label>
          <textarea
            id="rfi-bottleneck"
            name="bottleneck"
            rows="4"
            required
            placeholder="e.g., Dashboards take 25s to load, stock goes negative during flash sales, or teams reconcile Excel by hand..."
          ></textarea>
        </div>

        <div class="rfi-field">
          <label for="rfi-contact">03 // YOUR EMAIL OR PHONE</label>
          <input
            type="text"
            id="rfi-contact"
            name="contact"
            required
            placeholder="you@company.com"
          />
        </div>

        <div class="rfi-submit-row">
          <button type="submit" class="btn-vermilion">
            <span>Stamp &amp; Transmit RFI</span>
            <span aria-hidden="true">→</span>
          </button>
          <span class="mono-tiny">Opens pre-addressed email draft + stamps sheet</span>
        </div>

        <!-- Vermilion Rubber Stamp ("RECEIVED") -->
        <div id="rfi-rubber-stamp" class="rfi-rubber-stamp" hidden aria-hidden="true">
          <strong>RECEIVED</strong>
          <span>ATELIER AZ // DHAKA</span>
        </div>
      </form>

      <!-- Direct Channels + 5 First-Call Questions -->
      <div class="rfi-side-specs">
        <div class="direct-channels-card">
          <span class="mono-tiny vermilion">DIRECT SPECIFICATION CHANNELS</span>
          <button
            type="button"
            id="copy-email-rfi"
            class="rfi-email-btn"
            title="Click to copy email address"
          >
            ${Je.email}
          </button>
          <div class="direct-links-row">
            <a href="mailto:${Je.email}" class="dwg-link">Email App ↗</a>
            <a href="tel:+88${Je.phone}" class="dwg-link">📞 ${Je.phone}</a>
            <a href="${Je.linkedin}" target="_blank" rel="noopener noreferrer" class="dwg-link">LinkedIn ↗</a>
            <a href="${Je.github}" target="_blank" rel="noopener noreferrer" class="dwg-link">GitHub ↗</a>
          </div>
        </div>

        <div class="rfi-questions-card">
          <span class="mono-tiny">QUESTIONS I’LL ASK IN OUR FIRST CALL</span>
          <ol class="rfi-q-list">${r}</ol>
        </div>
      </div>
    </div>

    <div class="fit-spec-row">
      <div class="fit-spec-cell good">
        <span class="mono-tiny vermilion">GREAT FIT SPECIFICATION</span>
        <ul>${e}</ul>
      </div>
      <div class="fit-spec-cell bad">
        <span class="mono-tiny">PROBABLY NOT A FIT</span>
        <ul>${s}</ul>
      </div>
    </div>
  `,i=Dt({id:"contact",sheetNo:"SHEET 10 / 10",sectionTag:"§10 REQUEST FOR INFORMATION (RFI) & FIT",projectTitle:"ENGAGEMENT INITIATION",scale:"1 : 1",bodyHtml:t}),n=`
    <footer class="final-titleblock-footer" aria-label="Master Drawing Title Block">
      <div class="master-tb-grid">
        <div class="mtb-cell">
          <span>ARCHITECT</span>
          <strong>${Je.name}</strong>
        </div>
        <div class="mtb-cell">
          <span>DRAWN BY / CHECKED BY</span>
          <strong>AZ · Checked by: Coffee</strong>
        </div>
        <div class="mtb-cell">
          <span>SCALE &amp; EDITION</span>
          <strong>1 : 1 · Design B (Blueprint Atelier)</strong>
        </div>
        <div class="mtb-cell">
          <span>DHAKA TIME (GMT+6)</span>
          <strong id="atelier-clock">--:--:-- BST</strong>
        </div>
        <div class="mtb-cell action">
          <button type="button" id="atelier-top-btn" class="top-sheet-btn">
            SHEET 01 ↑
          </button>
        </div>
      </div>
    </footer>
  `;return`${i}${n}`}function Sa(){const r=document.getElementById("rfi-form"),e=document.getElementById("rfi-rubber-stamp"),s=document.getElementById("copy-email-rfi"),t=document.getElementById("atelier-clock"),i=document.getElementById("atelier-top-btn");r?.addEventListener("submit",o=>{o.preventDefault();const a=new FormData(r),c=String(a.get("project")||"Architecture Inquiry").trim(),l=String(a.get("bottleneck")||"").trim(),u=String(a.get("contact")||"").trim();if(!l){Oi("Please describe your bottleneck in field 02 first","vermilion");return}ut.stamp(),e&&(e.hidden=!1,ee.fromTo(e,{scale:2.9,rotation:-18,autoAlpha:0},{scale:1,rotation:-9,autoAlpha:1,duration:.36,ease:"back.out(1.6)"}),ee.fromTo(r,{x:-4},{x:0,duration:.25,ease:"elastic.out(1.2, 0.3)"})),Oi("RFI Stamped RECEIVED — Opening email client…","vermilion");const f=encodeURIComponent(`[RFI] ${c} — Backend Architecture`),g=encodeURIComponent(`Project / Company: ${c}
Reply Contact: ${u}

Primary Bottleneck:
${l}`);window.setTimeout(()=>{window.location.href=`mailto:${Je.email}?subject=${f}&body=${g}`},520)}),s?.addEventListener("click",async()=>{ut.click();try{await navigator.clipboard.writeText(Je.email),Oi(`Copied ${Je.email} to clipboard`,"vermilion")}catch{window.location.href=`mailto:${Je.email}`}});const n=()=>{if(t)try{const o=new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Dhaka",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).format(new Date);t.textContent=`${o} BST`}catch{t.textContent="GMT+6"}};n(),window.setInterval(n,1e3),i?.addEventListener("click",()=>{ut.click(),ro("#hero")})}function ka(){const r=document.getElementById("app");r&&(r.innerHTML=[ia(),ra(),la(),ca(),ua(),fa(),ma(),va(),wa(),xa()].join(""))}async function Ta(){ka(),Vo(),Wo(),zo(),Xo();const r=na().catch(e=>{console.warn("3D Wireframe fallback:",e)});await Go(),await r,oa(),da(),pa(),ga(),ya(),ba(),Ea(),Sa(),M.sort(),M.refresh()}Ta();export{He as q};
