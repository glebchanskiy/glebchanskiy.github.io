(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const _ of r.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&i(_)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();var O,u,de,E,Z,ue,J,R={},fe=[],ke=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Q=Array.isArray;function S(e,t){for(var n in t)e[n]=t[n];return e}function he(e){var t=e.parentNode;t&&t.removeChild(e)}function we(e,t,n){var i,o,r,_={};for(r in t)r=="key"?i=t[r]:r=="ref"?o=t[r]:_[r]=t[r];if(arguments.length>2&&(_.children=arguments.length>3?O.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)_[r]===void 0&&(_[r]=e.defaultProps[r]);return N(e,_,i,o,null)}function N(e,t,n,i,o){var r={type:e,props:t,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o??++de,__i:-1,__u:0};return o==null&&u.vnode!=null&&u.vnode(r),r}function U(e){return e.children}function C(e,t){this.props=e,this.context=t}function T(e,t){if(t==null)return e.__?T(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?T(e):null}function me(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return me(e)}}function ee(e){(!e.__d&&(e.__d=!0)&&E.push(e)&&!F.__r++||Z!==u.debounceRendering)&&((Z=u.debounceRendering)||ue)(F)}function F(){var e,t,n,i,o,r,_,a,p;for(E.sort(J);e=E.shift();)e.__d&&(t=E.length,i=void 0,r=(o=(n=e).__v).__e,a=[],p=[],(_=n.__P)&&((i=S({},o)).__v=o.__v+1,u.vnode&&u.vnode(i),K(_,i,o,n.__n,_.ownerSVGElement!==void 0,32&o.__u?[r]:null,a,r??T(o),!!(32&o.__u),p),i.__.__k[i.__i]=i,ye(a,i,p),i.__e!=r&&me(i)),E.length>t&&E.sort(J));F.__r=0}function ve(e,t,n,i,o,r,_,a,p,l,f){var s,h,d,g,k,y=i&&i.__k||fe,m=t.length;for(n.__d=p,Se(n,t,y),p=n.__d,s=0;s<m;s++)(d=n.__k[s])!=null&&typeof d!="boolean"&&typeof d!="function"&&(h=d.__i===-1?R:y[d.__i]||R,d.__i=s,K(e,d,h,o,r,_,a,p,l,f),g=d.__e,d.ref&&h.ref!=d.ref&&(h.ref&&X(h.ref,null,d),f.push(d.ref,d.__c||g,d)),k==null&&g!=null&&(k=g),65536&d.__u||h.__k===d.__k?p=ge(d,p,e):typeof d.type=="function"&&d.__d!==void 0?p=d.__d:g&&(p=g.nextSibling),d.__d=void 0,d.__u&=-196609);n.__d=p,n.__e=k}function Se(e,t,n){var i,o,r,_,a,p=t.length,l=n.length,f=l,s=0;for(e.__k=[],i=0;i<p;i++)(o=e.__k[i]=(o=t[i])==null||typeof o=="boolean"||typeof o=="function"?null:typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?N(null,o,null,null,o):Q(o)?N(U,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?N(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)!=null?(o.__=e,o.__b=e.__b+1,a=Ee(o,n,_=i+s,f),o.__i=a,r=null,a!==-1&&(f--,(r=n[a])&&(r.__u|=131072)),r==null||r.__v===null?(a==-1&&s--,typeof o.type!="function"&&(o.__u|=65536)):a!==_&&(a===_+1?s++:a>_?f>p-_?s+=a-_:s--:s=a<_&&a==_-1?a-_:0,a!==i+s&&(o.__u|=65536))):(r=n[i])&&r.key==null&&r.__e&&(r.__e==e.__d&&(e.__d=T(r)),V(r,r,!1),n[i]=null,f--);if(f)for(i=0;i<l;i++)(r=n[i])!=null&&!(131072&r.__u)&&(r.__e==e.__d&&(e.__d=T(r)),V(r,r))}function ge(e,t,n){var i,o;if(typeof e.type=="function"){for(i=e.__k,o=0;i&&o<i.length;o++)i[o]&&(i[o].__=e,t=ge(i[o],t,n));return t}return e.__e!=t&&(n.insertBefore(e.__e,t||null),t=e.__e),t&&t.nextSibling}function Ee(e,t,n,i){var o=e.key,r=e.type,_=n-1,a=n+1,p=t[n];if(p===null||p&&o==p.key&&r===p.type)return n;if(i>(p!=null&&!(131072&p.__u)?1:0))for(;_>=0||a<t.length;){if(_>=0){if((p=t[_])&&!(131072&p.__u)&&o==p.key&&r===p.type)return _;_--}if(a<t.length){if((p=t[a])&&!(131072&p.__u)&&o==p.key&&r===p.type)return a;a++}}return-1}function te(e,t,n){t[0]==="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||ke.test(t)?n:n+"px"}function A(e,t,n,i,o){var r;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof i=="string"&&(e.style.cssText=i=""),i)for(t in i)n&&t in n||te(e.style,t,"");if(n)for(t in n)i&&n[t]===i[t]||te(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")r=t!==(t=t.replace(/(PointerCapture)$|Capture$/,"$1")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+r]=n,n?i?n.u=i.u:(n.u=Date.now(),e.addEventListener(t,r?ie:ne,r)):e.removeEventListener(t,r?ie:ne,r);else{if(o)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t!=="rowSpan"&&t!=="colSpan"&&t!=="role"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,n))}}function ne(e){var t=this.l[e.type+!1];if(e.t){if(e.t<=t.u)return}else e.t=Date.now();return t(u.event?u.event(e):e)}function ie(e){return this.l[e.type+!0](u.event?u.event(e):e)}function K(e,t,n,i,o,r,_,a,p,l){var f,s,h,d,g,k,y,m,b,w,H,L,Y,D,B,x=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(p=!!(32&n.__u),r=[a=t.__e=n.__e]),(f=u.__b)&&f(t);e:if(typeof x=="function")try{if(m=t.props,b=(f=x.contextType)&&i[f.__c],w=f?b?b.props.value:f.__:i,n.__c?y=(s=t.__c=n.__c).__=s.__E:("prototype"in x&&x.prototype.render?t.__c=s=new x(m,w):(t.__c=s=new C(m,w),s.constructor=x,s.render=Te),b&&b.sub(s),s.props=m,s.state||(s.state={}),s.context=w,s.__n=i,h=s.__d=!0,s.__h=[],s._sb=[]),s.__s==null&&(s.__s=s.state),x.getDerivedStateFromProps!=null&&(s.__s==s.state&&(s.__s=S({},s.__s)),S(s.__s,x.getDerivedStateFromProps(m,s.__s))),d=s.props,g=s.state,s.__v=t,h)x.getDerivedStateFromProps==null&&s.componentWillMount!=null&&s.componentWillMount(),s.componentDidMount!=null&&s.__h.push(s.componentDidMount);else{if(x.getDerivedStateFromProps==null&&m!==d&&s.componentWillReceiveProps!=null&&s.componentWillReceiveProps(m,w),!s.__e&&(s.shouldComponentUpdate!=null&&s.shouldComponentUpdate(m,s.__s,w)===!1||t.__v===n.__v)){for(t.__v!==n.__v&&(s.props=m,s.state=s.__s,s.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function($){$&&($.__=t)}),H=0;H<s._sb.length;H++)s.__h.push(s._sb[H]);s._sb=[],s.__h.length&&_.push(s);break e}s.componentWillUpdate!=null&&s.componentWillUpdate(m,s.__s,w),s.componentDidUpdate!=null&&s.__h.push(function(){s.componentDidUpdate(d,g,k)})}if(s.context=w,s.props=m,s.__P=e,s.__e=!1,L=u.__r,Y=0,"prototype"in x&&x.prototype.render){for(s.state=s.__s,s.__d=!1,L&&L(t),f=s.render(s.props,s.state,s.context),D=0;D<s._sb.length;D++)s.__h.push(s._sb[D]);s._sb=[]}else do s.__d=!1,L&&L(t),f=s.render(s.props,s.state,s.context),s.state=s.__s;while(s.__d&&++Y<25);s.state=s.__s,s.getChildContext!=null&&(i=S(S({},i),s.getChildContext())),h||s.getSnapshotBeforeUpdate==null||(k=s.getSnapshotBeforeUpdate(d,g)),ve(e,Q(B=f!=null&&f.type===U&&f.key==null?f.props.children:f)?B:[B],t,n,i,o,r,_,a,p,l),s.base=t.__e,t.__u&=-161,s.__h.length&&_.push(s),y&&(s.__E=s.__=null)}catch($){t.__v=null,p||r!=null?(t.__e=a,t.__u|=p?160:32,r[r.indexOf(a)]=null):(t.__e=n.__e,t.__k=n.__k),u.__e($,t,n)}else r==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Pe(n.__e,t,n,i,o,r,_,p,l);(f=u.diffed)&&f(t)}function ye(e,t,n){t.__d=void 0;for(var i=0;i<n.length;i++)X(n[i],n[++i],n[++i]);u.__c&&u.__c(t,e),e.some(function(o){try{e=o.__h,o.__h=[],e.some(function(r){r.call(o)})}catch(r){u.__e(r,o.__v)}})}function Pe(e,t,n,i,o,r,_,a,p){var l,f,s,h,d,g,k,y=n.props,m=t.props,b=t.type;if(b==="svg"&&(o=!0),r!=null){for(l=0;l<r.length;l++)if((d=r[l])&&"setAttribute"in d==!!b&&(b?d.localName===b:d.nodeType===3)){e=d,r[l]=null;break}}if(e==null){if(b===null)return document.createTextNode(m);e=o?document.createElementNS("http://www.w3.org/2000/svg",b):document.createElement(b,m.is&&m),r=null,a=!1}if(b===null)y===m||a&&e.data===m||(e.data=m);else{if(r=r&&O.call(e.childNodes),y=n.props||R,!a&&r!=null)for(y={},l=0;l<e.attributes.length;l++)y[(d=e.attributes[l]).name]=d.value;for(l in y)d=y[l],l=="children"||(l=="dangerouslySetInnerHTML"?s=d:l==="key"||l in m||A(e,l,null,d,o));for(l in m)d=m[l],l=="children"?h=d:l=="dangerouslySetInnerHTML"?f=d:l=="value"?g=d:l=="checked"?k=d:l==="key"||a&&typeof d!="function"||y[l]===d||A(e,l,d,y[l],o);if(f)a||s&&(f.__html===s.__html||f.__html===e.innerHTML)||(e.innerHTML=f.__html),t.__k=[];else if(s&&(e.innerHTML=""),ve(e,Q(h)?h:[h],t,n,i,o&&b!=="foreignObject",r,_,r?r[0]:n.__k&&T(n,0),a,p),r!=null)for(l=r.length;l--;)r[l]!=null&&he(r[l]);a||(l="value",g!==void 0&&(g!==e[l]||b==="progress"&&!g||b==="option"&&g!==y[l])&&A(e,l,g,y[l],!1),l="checked",k!==void 0&&k!==e[l]&&A(e,l,k,y[l],!1))}return e}function X(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(i){u.__e(i,n)}}function V(e,t,n){var i,o;if(u.unmount&&u.unmount(e),(i=e.ref)&&(i.current&&i.current!==e.__e||X(i,null,t)),(i=e.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(r){u.__e(r,t)}i.base=i.__P=null,e.__c=void 0}if(i=e.__k)for(o=0;o<i.length;o++)i[o]&&V(i[o],t,n||typeof e.type!="function");n||e.__e==null||he(e.__e),e.__=e.__e=e.__d=void 0}function Te(e,t,n){return this.constructor(e,n)}function Le(e,t,n){var i,o,r,_;u.__&&u.__(e,t),o=(i=typeof n=="function")?null:n&&n.__k||t.__k,r=[],_=[],K(t,e=(!i&&n||t).__k=we(U,null,[e]),o||R,R,t.ownerSVGElement!==void 0,!i&&n?[n]:o?null:t.firstChild?O.call(t.childNodes):null,r,!i&&n?n:o?o.__e:t.firstChild,i,_),ye(r,e,_)}O=fe.slice,u={__e:function(e,t,n,i){for(var o,r,_;t=t.__;)if((o=t.__c)&&!o.__)try{if((r=o.constructor)&&r.getDerivedStateFromError!=null&&(o.setState(r.getDerivedStateFromError(e)),_=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,i||{}),_=o.__d),_)return o.__E=o}catch(a){e=a}throw e}},de=0,C.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=S({},this.state),typeof e=="function"&&(e=e(S({},n),this.props)),e&&S(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),ee(this))},C.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),ee(this))},C.prototype.render=U,E=[],ue=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,J=function(e,t){return e.__v.__b-t.__v.__b},F.__r=0;var G,v,j,oe,q=0,be=[],I=[],re=u.__b,se=u.__r,ae=u.diffed,le=u.__c,_e=u.unmount;function Re(e,t){u.__h&&u.__h(v,e,q||t),q=0;var n=v.__H||(v.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:I}),n.__[e]}function ce(e){return q=1,He(xe,e)}function He(e,t,n){var i=Re(G++,2);if(i.t=e,!i.__c&&(i.__=[n?n(t):xe(void 0,t),function(a){var p=i.__N?i.__N[0]:i.__[0],l=i.t(p,a);p!==l&&(i.__N=[l,i.__[1]],i.__c.setState({}))}],i.__c=v,!v.u)){var o=function(a,p,l){if(!i.__c.__H)return!0;var f=i.__c.__H.__.filter(function(h){return h.__c});if(f.every(function(h){return!h.__N}))return!r||r.call(this,a,p,l);var s=!1;return f.forEach(function(h){if(h.__N){var d=h.__[0];h.__=h.__N,h.__N=void 0,d!==h.__[0]&&(s=!0)}}),!(!s&&i.__c.props===a)&&(!r||r.call(this,a,p,l))};v.u=!0;var r=v.shouldComponentUpdate,_=v.componentWillUpdate;v.componentWillUpdate=function(a,p,l){if(this.__e){var f=r;r=void 0,o(a,p,l),r=f}_&&_.call(this,a,p,l)},v.shouldComponentUpdate=o}return i.__N||i.__}function De(){for(var e;e=be.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(M),e.__H.__h.forEach(z),e.__H.__h=[]}catch(t){e.__H.__h=[],u.__e(t,e.__v)}}u.__b=function(e){v=null,re&&re(e)},u.__r=function(e){se&&se(e),G=0;var t=(v=e.__c).__H;t&&(j===v?(t.__h=[],v.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=I,n.__N=n.i=void 0})):(t.__h.forEach(M),t.__h.forEach(z),t.__h=[],G=0)),j=v},u.diffed=function(e){ae&&ae(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(be.push(t)!==1&&oe===u.requestAnimationFrame||((oe=u.requestAnimationFrame)||$e)(De)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==I&&(n.__=n.__V),n.i=void 0,n.__V=I})),j=v=null},u.__c=function(e,t){t.some(function(n){try{n.__h.forEach(M),n.__h=n.__h.filter(function(i){return!i.__||z(i)})}catch(i){t.some(function(o){o.__h&&(o.__h=[])}),t=[],u.__e(i,n.__v)}}),le&&le(e,t)},u.unmount=function(e){_e&&_e(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(i){try{M(i)}catch(o){t=o}}),n.__H=void 0,t&&u.__e(t,n.__v))};var pe=typeof requestAnimationFrame=="function";function $e(e){var t,n=function(){clearTimeout(i),pe&&cancelAnimationFrame(t),setTimeout(e)},i=setTimeout(n,100);pe&&(t=requestAnimationFrame(n))}function M(e){var t=v,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),v=t}function z(e){var t=v;e.__c=e.__(),v=t}function xe(e,t){return typeof t=="function"?t(e):t}const Ae=({initialState:e,initialLanguage:t})=>{const[n,i]=ce(e),[o,r]=ce(t),_=p=>{r(p)};return{localizedState:{...n[o],lang:o},changeLanguage:_}};async function Ne(e){try{console.log(e),await navigator.clipboard.writeText(e),console.log("Content copied to clipboard"),alert(`"${e}" - copied`)}catch(t){console.error("Failed to copy: ",t)}}function W(e){return e.replace(/`(.+?)`/g,'<span class="skill">$1</span>')}const P={ru:"ru",en:"en"};var Ce=0;function c(e,t,n,i,o,r){var _,a,p={};for(a in t)a=="ref"?_=t[a]:p[a]=t[a];var l={type:e,props:p,key:n,ref:_,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--Ce,__i:-1,__u:0,__source:o,__self:r};if(typeof e=="function"&&(_=e.defaultProps))for(a in _)p[a]===void 0&&(p[a]=_[a]);return u.vnode&&u.vnode(l),l}const Ie=({personName:e,lang:t,changeLanguage:n})=>c("div",{class:"flex flex-row justify-between",children:[c("div",{children:[c("h3",{class:"font-title",children:"WEB-DEVELOPER"}),c("h2",{class:"font-heading text-[30px] sm:text-[25px] font-bold  tracking-[-0.3px]",children:e})]}),c("div",{class:"flex flex-col ",children:[c("button",{onClick:()=>n(P.en),class:`px-[3px] py-[1px] ${t===P.en?"bg-gray-300 rounded-sm":""} transition-all duration-700 ease-out`,children:"EN"}),c("button",{onClick:()=>n(P.ru),class:`px-[3px] py-[1px] ${t===P.ru?"bg-gray-300 rounded-sm":""} transition-all duration-700 ease-out`,children:"RU"})]})]}),Me=({profileText:e,contacts:t,sections:n})=>c("div",{class:"flex flex-col sm:flex-row sm:gap-5",children:[c("div",{class:"sm:w-96 flex flex-col gap-2",children:[c("h2",{class:"font-heading font-bold text-[24px] sm:text-[18px]",children:n.profile}),c("p",{class:"text-balance",children:e})]}),c("hr",{class:"sm:hidden separator"}),c("div",{class:"flex flex-col gap-2",children:[c("h2",{class:"hidden sm:inline font-heading font-bold text-[24px] sm:text-[18px]",children:n.contacts}),c("ul",{class:"flex flex-col list-none sm:list-disc gap-2 text-center sm:text-left",children:t.map(i=>c("li",{onClick:()=>Ne(i.label),class:"cursor-pointer text-nowrap",children:c("span",{class:"px-1 rounded border border-gray-100 hover:border-gray-300 transition-colors duration-300 ease-out",children:i.label})},i.label))})]})]}),Fe=({name:e,description:t,period:n,lang:i})=>c("div",{children:[c("div",{class:"flex gap-5 justify-between",children:[c("h3",{class:`font-heading ${i===P.ru?"text-[16px] sm:text-[14px]":"text-[20px] sm:text-[16px]"} text-balance  font-bold`,children:e}),c("span",{class:"opacity-70 text-nowrap",children:n})]}),c("p",{class:"text-pretty",children:t})]}),Oe=({lang:e,sections:t,education:n})=>c("div",{class:"flex flex-col gap-2",children:[c("h2",{class:"font-heading font-bold text-[24px] sm:text-[18px]",children:t.education}),c("div",{children:n.map(i=>c(Fe,{name:i.name,description:i.description,period:i.period,lang:e},i.name))})]}),Ue=({name:e,description:t})=>c("div",{class:"flex flex-col",children:[c("h3",{class:"font-heading text-[20px] sm:text-[16px] font-bold",children:e}),c("p",{dangerouslySetInnerHTML:{__html:t}})]}),We=({experience:e,sections:t})=>c("div",{class:"flex flex-col gap-2",children:[c("div",{class:"flex justify-between items-center",children:[c("h2",{class:"font-heading font-bold text-[24px] sm:text-[18px] ",children:t.experience}),c("span",{class:"opacity-70 text-nowrap",children:"2022-2024"})]}),c("div",{class:"flex flex-col gap-3",children:e.map(n=>c(Ue,{name:n.name,description:n.description},n.name))})]}),Be=({skills:e,sections:t})=>c("div",{class:"flex flex-col gap-2",children:[c("h2",{class:"font-heading font-bold text-[24px] sm:text-[18px]",children:t.skills}),c("ul",{class:"list-disc",children:e.map((n,i)=>c("li",{dangerouslySetInnerHTML:{__html:n}},i))})]}),je=[{name:"Belarusian State University of Informatics and Radioelectronics",description:"Bachelor's degree in Engineering",period:"2021-2025"}],Je=[{name:"Белорусский Государственный Университет Информатики и Радиоэлектроники",description:"Степень бакалавра, специальность Искусственный Интеллект",period:"2021-2025"}],Ve=[{name:"variants.world",description:"A service that allows users to chess.com to propose and discuss new chess variants.<br><i>Stack:</i> `AstroJS`,  `Preact`,  `Prisma` + `Supabase`, `PostgreSQL`, `Tailwind`.<br><i>Responsibilities:</i> full development and implementation, database design, unit testing."},{name:"ostis-deploy",description:"A platform on which university students of our specialty could host their knowledge bases and have convenient access to them.<br><i>Stack:</i> `Deno`, `Fresh`, `Docker`, `GitHub App`, `Tailwind`.<br><i>Responsibilities:</i> development and implementation of the functionality, github auth implementation, ui/ux."},{name:"pie-tunes",description:"A course project in which a streaming service was developed with a recommendation system based on a graph knowledge base.<br><i>Stack:</i> `Spring Boot` (Security, Web), `MinIO`, `Preact`, `Redux`, `Gradle`, `Docker`.<br><i>Responsibilities:</i> architecture designe, implementation of REST services, knowledgebase design, ui/ux."},{name:"http-server",description:"A simple implementation of an http server using Java NIO, allowing you to create simple web applications.<br><i>Stack:</i> `Java`.<br><i>Responsibilities:</i> full development and implementation."},{name:"dnd-lists",description:"An application that allows you to create/edit character sheets for the game Dungeons & Dragons.<br><i>Stack:</i> `Spring Boot` (Security, Web, Data JPA), `PostgreSQL`, `TypeScript`, `Preact`, `Redux`, `Bootstrap`.<br><i>Responsibilities:</i> interface development and implementation, implementation of REST service."}],Ge=[{name:"variants.world",description:"В рамках данного проекта разрабатывался сервис, позволяющий пользователям chess.com предлагать и обсуждать новые варианты шахмат.<br><i>Стек:</i> `AstroJS`,  `Preact`,  `Prisma` + `Supabase`, `PostgreSQL`, `Tailwind`.<br><i>Обязанности:</i> full development and implementation, database design, unit testing."},{name:"ostis-deploy",description:"Платформа, на которой студенты универа нашей специальности могли бы хостить свои базы знаний и иметь к ним удобный доступ.<br><i>Стек:</i> `Deno`, `Fresh`, `Docker`, `GitHub App`, `Tailwind`.<br><i>Обязанности:</i> development and implementation of the functionality, github auth implementation, ui/ux."},{name:"pie-tunes",description:"Курсовой проект в рамках которого разрабатывался стриминговый сервис с системой рекомендаций на основе графовой базы знаний.<br><i>Стек:</i>  `Spring Boot` (Security, Web),  `MinIO`,  `Preact`, `Redux`, `Gradle`,  `Docker`.<br><i>Обязанности:</i> architecture designe, implementation of REST services, knowledgebase design, ui/ux."},{name:"http-server",description:"Простая реализация http сервера при помощи Java NIO, позволяющая создавать простейшие веб-приложения.<br><i>Стек:</i> `Java`.<br><i>Обязанности:</i> full development and implementation."},{name:"dnd-lists",description:"Приложение позволяющее создавать/редактировать листы персонажей для игры Dungeons & Dragons.<br><i>Стек:</i> `Spring Boot` (Security, Web, Data JPA), `PostgreSQL`, `TypeScript`, `Preact`, `Redux`, `Bootstrap`.<br><i>Обязанности:</i> interface development and implementation, implementation of REST service."}],qe=Ve.map(e=>({name:e.name,description:W(e.description)})),ze=Ge.map(e=>({name:e.name,description:W(e.description)})),Qe=["Основные языки: `Java`, `TypeScript`","Фреймворки: `Spring`, `Hibernate`, `React`, `Preact`, `AstroJS`, `Redux`","Базы данных: `PostgreSQL`, `Neo4j`","`Docker` и инструменты оркестрирвания такие как `docker compose`","Написание скриптов: `bash`, `python`","Работал с: `Kafka`, `MinIO`, `Supabase`, `Deno`, `Fresh`","Не основные языки: `python`, `c++`","Прочее: `CSS`, `HTML`, `Tailwind`","Умение читать и создавать `UML` диаграммы","Операционные системы: Linux / MacOS","Опыт командной разработки","Понимание устройства сетей","Опыт работы с linux серверами","Языки: Russion - Native, English - Intermediate"].map(W),Ke=["Primary languages: `Java`, `TypeScript`","Frameworks: `Spring`, `Hibernate`, `React`, `Preact`, `Astro`, `Redux`","Databases: `PostgreSQL`, `Neo4j`","`Docker` and orchestration tools such as `docker compose`","Scripting: `bash`, `python`","Worked with: `Kafka`, `MinIO`, `Supabase`, `Deno`, `Fresh`","Additional languages: `python`, `c++`","Other skills: `CSS`, `HTML`, `Tailwind`","The ability to read and create `UML` diagrams","Operating systems: `Linux` / `MacOS`","Experience in team development","Understanding of network architecture","Experience with Linux servers","Languages: Russion - Native, English - Intermediate"].map(W),Xe="Programming for me is not just a skill, but a passion. For the last 3 years, I have been actively studying information technology at the university. At the moment, I have no commercial development experience, but I have extensive experience on educational and pet-projects. The main focus was on studying backend technologies, but lately I have also been actively studying the frontend stack. I have experience working with various web frameworks and libraries. Experience working with relational and non-relational databases, as well as extensive knowledge in the field of graph databases. I am currently actively looking for an internship for my further development and becoming a web developer.",Ye="Программирование для меня - это не просто навык, а страсть. Последние 3 года я активно изучаю  информационные технологии в универе. На данный момент у меня отсутствует коммерческий опыт разработки, однако имеется большой опыт работы над учебными и пет-проектами. Основной акцент делал на изучении backend технологий, но последнее время также активно изучаю frontend стек. Есть опыт работы с различными web-фреймворками и библиотеками. Опыт работы с реляционными и не реляционными базами данных, а также обширные знания в области графовых баз данных. В настоящее время активно ищу стажировку для своего дальнейшего развития и становления в роли web-разработчика.",Ze=[{label:"Belarus, Minsk"},{label:"levkov.gleb.dev@gmail.com"},{label:"+375-44-59-25-888"},{label:"www.github.com/glebchanskiy"},{label:"www.linkedin.com/in/glebchanskiy"},{label:"www.t.me/glebchanskiy"}],et=[{label:"Беларусь, Минск"},{label:"levkov.gleb.dev@gmail.com"},{label:"+375-44-59-25-888"},{label:"www.github.com/glebchanskiy"},{label:"www.linkedin.com/in/glebchanskiy"},{label:"www.t.me/glebchanskiy"}],tt="Levkov Gleb",nt="Левков Глеб",it={ru:{sections:{profile:"Профиль",contacts:"Контакты",education:"Образование",experience:"Проекты",skills:"Навыки"},personal:{education:Je,experience:ze,profile:Ye,contacts:et,name:nt,skills:Qe}},en:{sections:{profile:"Summary",contacts:"Contacts",education:"Education",experience:"Projects",skills:"Skills"},personal:{education:je,experience:qe,profile:Xe,contacts:Ze,name:tt,skills:Ke}}};function ot(){const{localizedState:e,changeLanguage:t}=Ae({initialState:it,initialLanguage:P.en});return c("div",{class:"font-primary text-[18px] sm:text-[14px] font-normal tracking-[0.1px] text-text container bg-gray-100 mx-auto p-2 pb-20 sm:my-5  sm:p-8",children:[c(Ie,{personName:e.personal.name,changeLanguage:t,lang:e.lang}),c("hr",{class:"separator"}),c("div",{class:"flex gap-2 flex-wrap justify-center sm:justify-start",children:[c("span",{class:"skill !px-3",children:"Java"}),c("span",{class:"skill !px-3",children:"Spring Framework"}),c("span",{class:"skill !px-3",children:"TypeScript"}),c("span",{class:"skill !px-3",children:"React"})]}),c("hr",{class:"separator"}),c(Me,{profileText:e.personal.profile,contacts:e.personal.contacts,sections:e.sections}),c("hr",{class:"separator"}),c(Oe,{education:e.personal.education,sections:e.sections,lang:e.lang}),c("hr",{class:"separator"}),c(We,{experience:e.personal.experience,sections:e.sections}),c("hr",{class:"separator"}),c(Be,{skills:e.personal.skills,sections:e.sections})]})}Le(c(ot,{}),document.getElementById("app"));
