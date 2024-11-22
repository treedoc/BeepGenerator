var qe=Object.defineProperty;var Oe=(e,t,n)=>t in e?qe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ie=(e,t,n)=>Oe(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))u(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&u(c)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function u(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function D(){}function $e(e){return e()}function ve(){return Object.create(null)}function H(e){e.forEach($e)}function Se(e){return typeof e=="function"}function ke(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Ae(e){return Object.keys(e).length===0}function o(e,t){e.appendChild(t)}function Be(e,t,n){e.insertBefore(t,n||null)}function Ce(e){e.parentNode&&e.parentNode.removeChild(e)}function a(e){return document.createElement(e)}function G(e){return document.createTextNode(e)}function m(){return G(" ")}function k(e,t,n,u){return e.addEventListener(t,n,u),()=>e.removeEventListener(t,n,u)}function r(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function L(e){return e===""?null:+e}function Ie(e){return Array.from(e.childNodes)}function re(e,t){t=""+t,e.data!==t&&(e.data=t)}function g(e,t){e.value=t??""}function ye(e,t,n){for(let u=0;u<e.options.length;u+=1){const i=e.options[u];if(i.__value===t){i.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function Le(e){const t=e.querySelector(":checked");return t&&t.__value}let se;function z(e){se=e}const P=[],be=[];let j=[];const we=[],Ne=Promise.resolve();let ue=!1;function Te(){ue||(ue=!0,Ne.then(Ee))}function ee(e){j.push(e)}const le=new Set;let x=0;function Ee(){if(x!==0)return;const e=se;do{try{for(;x<P.length;){const t=P[x];x++,z(t),Me(t.$$)}}catch(t){throw P.length=0,x=0,t}for(z(null),P.length=0,x=0;be.length;)be.pop()();for(let t=0;t<j.length;t+=1){const n=j[t];le.has(n)||(le.add(n),n())}j.length=0}while(P.length);for(;we.length;)we.pop()();ue=!1,le.clear(),z(e)}function Me(e){if(e.fragment!==null){e.update(),H(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ee)}}function xe(e){const t=[],n=[];j.forEach(u=>e.indexOf(u)===-1?t.push(u):n.push(u)),n.forEach(u=>u()),j=t}const Pe=new Set;function je(e,t){e&&e.i&&(Pe.delete(e),e.i(t))}function Fe(e,t,n){const{fragment:u,after_update:i}=e.$$;u&&u.m(t,n),ee(()=>{const l=e.$$.on_mount.map($e).filter(Se);e.$$.on_destroy?e.$$.on_destroy.push(...l):H(l),e.$$.on_mount=[]}),i.forEach(ee)}function Ve(e,t){const n=e.$$;n.fragment!==null&&(xe(n.after_update),H(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ge(e,t){e.$$.dirty[0]===-1&&(P.push(e),Te(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ze(e,t,n,u,i,l,c=null,C=[-1]){const f=se;z(e);const s=e.$$={fragment:null,ctx:[],props:l,update:D,not_equal:i,bound:ve(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(f?f.$$.context:[])),callbacks:ve(),dirty:C,skip_bound:!1,root:t.target||f.$$.root};c&&c(s.root);let d=!1;if(s.ctx=n?n(e,t.props||{},(p,_,...E)=>{const A=E.length?E[0]:_;return s.ctx&&i(s.ctx[p],s.ctx[p]=A)&&(!s.skip_bound&&s.bound[p]&&s.bound[p](A),d&&Ge(e,p)),_}):[],s.update(),d=!0,H(s.before_update),s.fragment=u?u(s.ctx):!1,t.target){if(t.hydrate){const p=Ie(t.target);s.fragment&&s.fragment.l(p),p.forEach(Ce)}else s.fragment&&s.fragment.c();t.intro&&je(e.$$.fragment),Fe(e,t.target,t.anchor),Ee()}z(f)}class De{constructor(){ie(this,"$$");ie(this,"$$set")}$destroy(){Ve(this,1),this.$destroy=D}$on(t,n){if(!Se(n))return D;const u=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return u.push(n),()=>{const i=u.indexOf(n);i!==-1&&u.splice(i,1)}}$set(t){this.$$set&&!Ae(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const He="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(He);function Ke(e){let t,n,u,i,l,c,C,f,s,d,p,_,E,A,v,K,F,V,R,B,N,U,y,q,b,O,T,ce,M,W,fe,w,de,I,J,pe,$,_e,Q,X=ae(e[6]*100,100)+"",te,he,me,Y,Z=e[1]?"Stop Beeping":"Start Beeping",ne,oe,ge;return{c(){t=a("main"),n=a("h1"),n.textContent="Beep Sound Generator",u=m(),i=a("div"),l=a("div"),c=a("label"),c.textContent="Frequency (Hz):",C=m(),f=a("input"),s=m(),d=a("input"),p=m(),_=a("div"),E=a("label"),E.textContent="Volume:",A=m(),v=a("input"),K=m(),F=a("span"),V=G(e[3]),R=m(),B=a("div"),N=a("label"),N.textContent="Wave Shape:",U=m(),y=a("select"),q=a("option"),q.textContent="Sine",b=a("option"),b.textContent="Square",O=a("option"),O.textContent="Triangle",T=a("option"),T.textContent="Sawtooth",ce=m(),M=a("div"),W=a("label"),W.textContent="Interval (ms):",fe=m(),w=a("input"),de=m(),I=a("div"),J=a("label"),J.textContent="Duration (%):",pe=m(),$=a("input"),_e=m(),Q=a("span"),te=G(X),he=G("%"),me=m(),Y=a("button"),ne=G(Z),r(c,"for","frequency"),r(f,"id","frequency"),r(f,"type","range"),r(f,"min",Math.log(10)),r(f,"max",e[7]),r(f,"step","0.1"),r(d,"id","frequency"),r(d,"type","number"),r(d,"min","20"),r(d,"max","20000"),r(l,"class","control-item"),r(E,"for","volume"),r(v,"id","volume"),r(v,"type","range"),r(v,"min","0"),r(v,"max","1"),r(v,"step","0.01"),r(_,"class","control-item"),r(N,"for","waveShape"),q.__value="sine",g(q,q.__value),b.__value="square",g(b,b.__value),O.__value="triangle",g(O,O.__value),T.__value="sawtooth",g(T,T.__value),r(y,"id","waveShape"),e[4]===void 0&&ee(()=>e[12].call(y)),r(B,"class","control-item"),r(W,"for","interval"),r(w,"id","interval"),r(w,"type","number"),r(w,"min","100"),r(w,"max","5000"),r(w,"step","100"),r(M,"class","control-item"),r(J,"for","duration"),r($,"id","duration"),r($,"type","range"),r($,"min","0.01"),r($,"max","1"),r($,"step","0.01"),r(I,"class","control-item"),r(i,"class","controls"),r(t,"class","container")},m(h,S){Be(h,t,S),o(t,n),o(t,u),o(t,i),o(i,l),o(l,c),o(l,C),o(l,f),g(f,e[0]),o(l,s),o(l,d),g(d,e[2]),o(i,p),o(i,_),o(_,E),o(_,A),o(_,v),g(v,e[3]),o(_,K),o(_,F),o(F,V),o(i,R),o(i,B),o(B,N),o(B,U),o(B,y),o(y,q),o(y,b),o(y,O),o(y,T),ye(y,e[4],!0),o(i,ce),o(i,M),o(M,W),o(M,fe),o(M,w),g(w,e[5]),o(i,de),o(i,I),o(I,J),o(I,pe),o(I,$),g($,e[6]),o(I,_e),o(I,Q),o(Q,te),o(Q,he),o(t,me),o(t,Y),o(Y,ne),oe||(ge=[k(f,"change",e[9]),k(f,"input",e[9]),k(d,"input",e[10]),k(v,"change",e[11]),k(v,"input",e[11]),k(y,"change",e[12]),k(w,"input",e[13]),k($,"change",e[14]),k($,"input",e[14]),k(Y,"click",e[8])],oe=!0)},p(h,[S]){S&1&&g(f,h[0]),S&4&&L(d.value)!==h[2]&&g(d,h[2]),S&8&&g(v,h[3]),S&8&&re(V,h[3]),S&16&&ye(y,h[4]),S&32&&L(w.value)!==h[5]&&g(w,h[5]),S&64&&g($,h[6]),S&64&&X!==(X=ae(h[6]*100,100)+"")&&re(te,X),S&2&&Z!==(Z=h[1]?"Stop Beeping":"Start Beeping")&&re(ne,Z)},i:D,o:D,d(h){h&&Ce(t),oe=!1,H(ge)}}}function ae(e,t){return Math.round(e*t)/t}function Re(e,t,n){let u=!1,i,l,c=440,C=Math.log(c),f=Math.log(2e4),s=.5,d="sine",p=1e3,_=.04,E=0,A=0;function v(){l||(l=new(window.AudioContext||window.webkitAudioContext))}function K(){const q=performance.now();console.log(`time passed: ${q-E}, interval: ${q-A}`),A=q;const b=l.createOscillator();b.type=d,b.frequency.setValueAtTime(c,l.currentTime);const O=l.createGain();O.gain.setValueAtTime(s,l.currentTime),b.connect(O),O.connect(l.destination),b.start(),b.stop(l.currentTime+_*p/1e3)}function F(){v(),u?(clearInterval(i),n(1,u=!1)):(A=E=performance.now(),i=setInterval(K,p),n(1,u=!0))}function V(){C=L(this.value),n(0,C)}function R(){c=L(this.value),n(2,c),n(0,C)}function B(){s=L(this.value),n(3,s)}function N(){d=Le(this),n(4,d)}function U(){p=L(this.value),n(5,p)}function y(){_=L(this.value),n(6,_)}return e.$$.update=()=>{e.$$.dirty&1&&n(2,c=ae(Math.pow(Math.E,C),100))},[C,u,c,s,d,p,_,f,F,V,R,B,N,U,y]}class Ue extends De{constructor(t){super(),ze(this,t,Re,Ke,ke,{})}}new Ue({target:document.getElementById("app")});