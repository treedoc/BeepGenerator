var Ve=Object.defineProperty;var Ge=(e,t,n)=>t in e?Ve(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var W=(e,t,n)=>Ge(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();function Y(){}function Pe(e){return e()}function qe(){return Object.create(null)}function Z(e){e.forEach(Pe)}function je(e){return typeof e=="function"}function He(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function ze(e){return Object.keys(e).length===0}function l(e,t){e.appendChild(t)}function xe(e,t,n){e.insertBefore(t,n||null)}function me(e){e.parentNode&&e.parentNode.removeChild(e)}function De(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function s(e){return document.createElement(e)}function x(e){return document.createTextNode(e)}function g(){return x(" ")}function L(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function u(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function j(e){return e===""?null:+e}function Ke(e){return Array.from(e.childNodes)}function X(e,t){t=""+t,e.data!==t&&(e.data=t)}function y(e,t){e.value=t??""}function Le(e,t,n){for(let i=0;i<e.options.length;i+=1){const o=e.options[i];if(o.__value===t){o.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function Re(e){const t=e.querySelector(":checked");return t&&t.__value}let ge;function J(e){ge=e}const z=[],Be=[];let D=[];const Te=[],Ue=Promise.resolve();let _e=!1;function We(){_e||(_e=!0,Ue.then(Fe))}function ae(e){D.push(e)}const he=new Set;let H=0;function Fe(){if(H!==0)return;const e=ge;do{try{for(;H<z.length;){const t=z[H];H++,J(t),Xe(t.$$)}}catch(t){throw z.length=0,H=0,t}for(J(null),z.length=0,H=0;Be.length;)Be.pop()();for(let t=0;t<D.length;t+=1){const n=D[t];he.has(n)||(he.add(n),n())}D.length=0}while(z.length);for(;Te.length;)Te.pop()();_e=!1,he.clear(),J(e)}function Xe(e){if(e.fragment!==null){e.update(),Z(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ae)}}function Je(e){const t=[],n=[];D.forEach(i=>e.indexOf(i)===-1?t.push(i):n.push(i)),n.forEach(i=>i()),D=t}const Qe=new Set;function Ye(e,t){e&&e.i&&(Qe.delete(e),e.i(t))}function Me(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function Ze(e,t,n){const{fragment:i,after_update:o}=e.$$;i&&i.m(t,n),ae(()=>{const r=e.$$.on_mount.map(Pe).filter(je);e.$$.on_destroy?e.$$.on_destroy.push(...r):Z(r),e.$$.on_mount=[]}),o.forEach(ae)}function et(e,t){const n=e.$$;n.fragment!==null&&(Je(n.after_update),Z(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function tt(e,t){e.$$.dirty[0]===-1&&(z.push(e),We(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function nt(e,t,n,i,o,r,d=null,b=[-1]){const f=ge;J(e);const a=e.$$={fragment:null,ctx:[],props:r,update:Y,not_equal:o,bound:qe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(f?f.$$.context:[])),callbacks:qe(),dirty:b,skip_bound:!1,root:t.target||f.$$.root};d&&d(a.root);let p=!1;if(a.ctx=n?n(e,t.props||{},(h,m,...q)=>{const B=q.length?q[0]:m;return a.ctx&&o(a.ctx[h],a.ctx[h]=B)&&(!a.skip_bound&&a.bound[h]&&a.bound[h](B),p&&tt(e,h)),m}):[],a.update(),p=!0,Z(a.before_update),a.fragment=i?i(a.ctx):!1,t.target){if(t.hydrate){const h=Ke(t.target);a.fragment&&a.fragment.l(h),h.forEach(me)}else a.fragment&&a.fragment.c();t.intro&&Ye(e.$$.fragment),Ze(e,t.target,t.anchor),Fe()}J(f)}class lt{constructor(){W(this,"$$");W(this,"$$set")}$destroy(){et(this,1),this.$destroy=Y}$on(t,n){if(!je(n))return Y;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const o=i.indexOf(n);o!==-1&&i.splice(o,1)}}$set(t){this.$$set&&!ze(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ot="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ot);function Ie(e,t,n){const i=e.slice();return i[23]=t[n],i}function Ne(e){let t,n,i=e[23].time+"",o,r,d=e[23].interval+"",b;return{c(){t=s("tr"),n=s("td"),o=x(i),r=s("td"),b=x(d)},m(f,a){xe(f,t,a),l(t,n),l(n,o),l(t,r),l(r,b)},p(f,a){a&128&&i!==(i=f[23].time+"")&&X(o,i),a&128&&d!==(d=f[23].interval+"")&&X(b,d)},d(f){f&&me(t)}}}function it(e){let t,n,i,o,r,d,b,f,a,p,h,m,q,B,w,T,K,R,ee,M,F,te,$,I,N,S,A,k,V,ne,ve,E,be,P,le,ye,O,we,oe,ie=Q(e[6]*100,100)+"",ce,$e,Se,re,ue=e[1]?"Stop Beeping":"Start Beeping",fe,Ce,U,de,Ae,se,pe,Ee,G=Me(e[7]),v=[];for(let c=0;c<G.length;c+=1)v[c]=Ne(Ie(e,G,c));return{c(){t=s("main"),n=s("h1"),n.textContent="Beep Sound Generator",i=g(),o=s("div"),r=s("div"),d=s("label"),d.textContent="Frequency (Hz):",b=g(),f=s("input"),a=g(),p=s("input"),h=g(),m=s("div"),q=s("label"),q.textContent="Volume:",B=g(),w=s("input"),T=g(),K=s("span"),R=x(e[3]),ee=g(),M=s("div"),F=s("label"),F.textContent="Wave Shape:",te=g(),$=s("select"),I=s("option"),I.textContent="Sine",N=s("option"),N.textContent="Square",S=s("option"),S.textContent="Triangle",A=s("option"),A.textContent="Sawtooth",k=g(),V=s("div"),ne=s("label"),ne.textContent="Interval (ms):",ve=g(),E=s("input"),be=g(),P=s("div"),le=s("label"),le.textContent="Duration (%):",ye=g(),O=s("input"),we=g(),oe=s("span"),ce=x(ie),$e=x("%"),Se=g(),re=s("button"),fe=x(ue),Ce=g(),U=s("table"),de=s("thead"),de.innerHTML="<tr><th>Time</th><th>interval</th></tr>",Ae=g(),se=s("tbody");for(let c=0;c<v.length;c+=1)v[c].c();u(d,"for","frequency"),u(f,"id","frequency"),u(f,"type","range"),u(f,"min",Math.log(10)),u(f,"max",e[8]),u(f,"step","0.1"),u(p,"id","frequency"),u(p,"type","number"),u(p,"min","20"),u(p,"max","20000"),u(r,"class","control-item"),u(q,"for","volume"),u(w,"id","volume"),u(w,"type","range"),u(w,"min","0"),u(w,"max","1"),u(w,"step","0.01"),u(m,"class","control-item"),u(F,"for","waveShape"),I.__value="sine",y(I,I.__value),N.__value="square",y(N,N.__value),S.__value="triangle",y(S,S.__value),A.__value="sawtooth",y(A,A.__value),u($,"id","waveShape"),e[4]===void 0&&ae(()=>e[13].call($)),u(M,"class","control-item"),u(ne,"for","interval"),u(E,"id","interval"),u(E,"type","number"),u(E,"min","100"),u(E,"max","5000"),u(E,"step","100"),u(V,"class","control-item"),u(le,"for","duration"),u(O,"id","duration"),u(O,"type","range"),u(O,"min","0.01"),u(O,"max","1"),u(O,"step","0.01"),u(P,"class","control-item"),u(o,"class","controls"),u(t,"class","container")},m(c,C){xe(c,t,C),l(t,n),l(t,i),l(t,o),l(o,r),l(r,d),l(r,b),l(r,f),y(f,e[0]),l(r,a),l(r,p),y(p,e[2]),l(o,h),l(o,m),l(m,q),l(m,B),l(m,w),y(w,e[3]),l(m,T),l(m,K),l(K,R),l(o,ee),l(o,M),l(M,F),l(M,te),l(M,$),l($,I),l($,N),l($,S),l($,A),Le($,e[4],!0),l(o,k),l(o,V),l(V,ne),l(V,ve),l(V,E),y(E,e[5]),l(o,be),l(o,P),l(P,le),l(P,ye),l(P,O),y(O,e[6]),l(P,we),l(P,oe),l(oe,ce),l(oe,$e),l(t,Se),l(t,re),l(re,fe),l(t,Ce),l(t,U),l(U,de),l(U,Ae),l(U,se);for(let _=0;_<v.length;_+=1)v[_]&&v[_].m(se,null);pe||(Ee=[L(f,"change",e[10]),L(f,"input",e[10]),L(p,"input",e[11]),L(w,"change",e[12]),L(w,"input",e[12]),L($,"change",e[13]),L(E,"input",e[14]),L(O,"change",e[15]),L(O,"input",e[15]),L(re,"click",e[9])],pe=!0)},p(c,[C]){if(C&1&&y(f,c[0]),C&4&&j(p.value)!==c[2]&&y(p,c[2]),C&8&&y(w,c[3]),C&8&&X(R,c[3]),C&16&&Le($,c[4]),C&32&&j(E.value)!==c[5]&&y(E,c[5]),C&64&&y(O,c[6]),C&64&&ie!==(ie=Q(c[6]*100,100)+"")&&X(ce,ie),C&2&&ue!==(ue=c[1]?"Stop Beeping":"Start Beeping")&&X(fe,ue),C&128){G=Me(c[7]);let _;for(_=0;_<G.length;_+=1){const Oe=Ie(c,G,_);v[_]?v[_].p(Oe,C):(v[_]=Ne(Oe),v[_].c(),v[_].m(se,null))}for(;_<v.length;_+=1)v[_].d(1);v.length=G.length}},i:Y,o:Y,d(c){c&&me(t),De(v,c),pe=!1,Z(Ee)}}}const ke=10;function Q(e,t){return Math.round(e*t)/t}function rt(e,t,n){let i=!1,o,r,d=440,b=Math.log(d),f=Math.log(2e4),a=.5,p="sine",h=1e3,m=.04,q=0,B=0;class w{constructor(A,k){W(this,"time");W(this,"interval");this.time=Q(A,100),this.interval=Q(k,100)}}let T=[];function K(){r||(r=new(window.AudioContext||window.webkitAudioContext))}function R(){const S=r.createOscillator();S.type=p,S.frequency.setValueAtTime(d,r.currentTime);const A=r.createGain();A.gain.setValueAtTime(a,r.currentTime),S.connect(A),A.connect(r.destination);const k=performance.now();S.start(),S.stop(r.currentTime+m*h/1e3),T.push(new w(k-q,k-B)),T.length>ke&&T.splice(0,T.length-ke),n(7,T),B=k}function ee(){K(),i?(clearInterval(o),n(1,i=!1)):(B=q=performance.now(),o=setInterval(R,h),n(1,i=!0))}function M(){b=j(this.value),n(0,b)}function F(){d=j(this.value),n(2,d),n(0,b)}function te(){a=j(this.value),n(3,a)}function $(){p=Re(this),n(4,p)}function I(){h=j(this.value),n(5,h)}function N(){m=j(this.value),n(6,m)}return e.$$.update=()=>{e.$$.dirty&1&&n(2,d=Q(Math.pow(Math.E,b),100))},[b,i,d,a,p,h,m,T,f,ee,M,F,te,$,I,N]}class ut extends lt{constructor(t){super(),nt(this,t,rt,it,He,{})}}new ut({target:document.getElementById("app")});