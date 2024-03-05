import{s as fr,w as ln,r as W,T as cn,u as un,i as fn,a as dn,g as pn,G as Ie,b as R,p as J,j as v,c as ve,d as mn,e as hn,B as vn,f as yn,I as gn,h as bn,E as Sn,k as wn,l as xn,m as On,L as _n,H as Tn,n as kn}from"./index-C9OerkPf.js";import{h as Cn}from"./heroBg-xqvqUgNj.js";var dr={exports:{}},I={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F=typeof Symbol=="function"&&Symbol.for,zt=F?Symbol.for("react.element"):60103,Lt=F?Symbol.for("react.portal"):60106,De=F?Symbol.for("react.fragment"):60107,He=F?Symbol.for("react.strict_mode"):60108,Ne=F?Symbol.for("react.profiler"):60114,Ae=F?Symbol.for("react.provider"):60109,We=F?Symbol.for("react.context"):60110,$t=F?Symbol.for("react.async_mode"):60111,qe=F?Symbol.for("react.concurrent_mode"):60111,Fe=F?Symbol.for("react.forward_ref"):60112,Ye=F?Symbol.for("react.suspense"):60113,Pn=F?Symbol.for("react.suspense_list"):60120,Xe=F?Symbol.for("react.memo"):60115,Be=F?Symbol.for("react.lazy"):60116,jn=F?Symbol.for("react.block"):60121,En=F?Symbol.for("react.fundamental"):60117,Mn=F?Symbol.for("react.responder"):60118,zn=F?Symbol.for("react.scope"):60119;function U(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case zt:switch(t=t.type,t){case $t:case qe:case De:case Ne:case He:case Ye:return t;default:switch(t=t&&t.$$typeof,t){case We:case Fe:case Be:case Xe:case Ae:return t;default:return e}}case Lt:return e}}}function pr(t){return U(t)===qe}I.AsyncMode=$t;I.ConcurrentMode=qe;I.ContextConsumer=We;I.ContextProvider=Ae;I.Element=zt;I.ForwardRef=Fe;I.Fragment=De;I.Lazy=Be;I.Memo=Xe;I.Portal=Lt;I.Profiler=Ne;I.StrictMode=He;I.Suspense=Ye;I.isAsyncMode=function(t){return pr(t)||U(t)===$t};I.isConcurrentMode=pr;I.isContextConsumer=function(t){return U(t)===We};I.isContextProvider=function(t){return U(t)===Ae};I.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===zt};I.isForwardRef=function(t){return U(t)===Fe};I.isFragment=function(t){return U(t)===De};I.isLazy=function(t){return U(t)===Be};I.isMemo=function(t){return U(t)===Xe};I.isPortal=function(t){return U(t)===Lt};I.isProfiler=function(t){return U(t)===Ne};I.isStrictMode=function(t){return U(t)===He};I.isSuspense=function(t){return U(t)===Ye};I.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===De||t===qe||t===Ne||t===He||t===Ye||t===Pn||typeof t=="object"&&t!==null&&(t.$$typeof===Be||t.$$typeof===Xe||t.$$typeof===Ae||t.$$typeof===We||t.$$typeof===Fe||t.$$typeof===En||t.$$typeof===Mn||t.$$typeof===zn||t.$$typeof===jn)};I.typeOf=U;dr.exports=I;var Ln=dr.exports,mr=Ln,$n={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Rn={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},hr={};hr[mr.ForwardRef]=$n;hr[mr.Memo]=Rn;function vr(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return fr(e)}var f=function(){var e=vr.apply(void 0,arguments),n="animation-"+e.name;return{name:n,styles:"@keyframes "+n+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},In=function t(e){for(var n=e.length,i=0,r="";i<n;i++){var a=e[i];if(a!=null){var o=void 0;switch(typeof a){case"boolean":break;case"object":{if(Array.isArray(a))o=t(a);else{o="";for(var s in a)a[s]&&s&&(o&&(o+=" "),o+=s)}break}default:o=a}o&&(r&&(r+=" "),r+=o)}}return r};function Dn(t,e,n){var i=[],r=pn(t,i,n);return i.length<2?n:r+e(i)}var Hn=function(e){var n=e.cache,i=e.serializedArr;return un(function(){for(var r=0;r<i.length;r++)fn(n,i[r],!1)}),null},ct=ln(function(t,e){var n=!1,i=[],r=function(){for(var c=arguments.length,d=new Array(c),u=0;u<c;u++)d[u]=arguments[u];var b=fr(d,e.registered);return i.push(b),dn(e,b,!1),e.key+"-"+b.name},a=function(){for(var c=arguments.length,d=new Array(c),u=0;u<c;u++)d[u]=arguments[u];return Dn(e.registered,r,In(d))},o={css:r,cx:a,theme:W.useContext(cn)},s=t.children(o);return n=!0,W.createElement(W.Fragment,null,W.createElement(Hn,{cache:e,serializedArr:i}),s)});function Nn(t){return Ie({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.0049 13.0029C13.6617 13.0029 15.0049 14.3461 15.0049 16.0029C15.0049 16.8521 14.6521 17.6188 14.0851 18.1646L12.175 20.0025L15.0049 20.0029V22.0029H9.00488L9.00398 20.2785L12.6983 16.7235C12.8874 16.5413 13.0049 16.2858 13.0049 16.0029C13.0049 15.4506 12.5572 15.0029 12.0049 15.0029C11.4526 15.0029 11.0049 15.4506 11.0049 16.0029H9.00488C9.00488 14.3461 10.348 13.0029 12.0049 13.0029ZM18.0049 13.0029V17.0029H20.0049V13.0029H22.0049V22.0029H20.0049V19.0029H16.0049V13.0029H18.0049ZM4.00488 12.0029C4.00488 14.5295 5.17612 16.7825 7.00527 18.2486L7.0049 20.6651C4.01588 18.9361 2.00488 15.7043 2.00488 12.0029H4.00488ZM12.0049 2.00293C17.1902 2.00293 21.4537 5.94955 21.9555 11.0028L19.943 11.003C19.4509 7.05664 16.0845 4.00293 12.0049 4.00293C9.2551 4.00293 6.82935 5.39027 5.3894 7.50317L8.00488 7.50293V9.50293H2.00488V3.50293H4.00488L4.00477 6.00211C5.82922 3.57368 8.73362 2.00293 12.0049 2.00293Z"},child:[]}]})(t)}function An(t){return Ie({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"},child:[]}]})(t)}function Wn(t){return Ie({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17.227 16.67l2.19 6.742-7.413-5.388 5.223-1.354zM24 9.31h-9.165L12.005.589l-2.84 8.723L0 9.3l7.422 5.397-2.84 8.714 7.422-5.388 4.583-3.326L24 9.311z"},child:[]}]})(t)}function qn(t){return Ie({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M15.658 4.91l-1.58-1.58c-0.387-0.387-1.021-1.021-1.409-1.409l-1.58-1.58c-0.387-0.387-1.077-0.456-1.533-0.152l-4.319 2.88c-0.456 0.304-0.628 0.954-0.383 1.444l1.101 2.203c0.034 0.067 0.073 0.139 0.115 0.213l-5.571 5.571-0.5 3.5h3v-1h2v-2h2v-2h2v-1.112c0.1 0.060 0.196 0.113 0.284 0.157l2.203 1.101c0.49 0.245 1.14 0.072 1.444-0.383l2.88-4.319c0.304-0.456 0.236-1.146-0.152-1.533zM2.354 13.354l-0.707-0.707 4.868-4.868 0.707 0.707-4.868 4.868zM14.328 6.621l-0.707 0.707c-0.194 0.194-0.513 0.194-0.707 0l-4.243-4.243c-0.194-0.194-0.194-0.513 0-0.707l0.707-0.707c0.194-0.194 0.513-0.194 0.707 0l4.243 4.243c0.194 0.194 0.194 0.513 0 0.707z"},child:[]}]})(t)}const Fn=R.div`
  margin: 4.8rem auto;
  padding: 2.4rem;
  width: 100%;

  @media (min-width: 840px) {
    width: 80%;
  }

  @media (min-width: 1200px) {
    width: 100%;
  }
`,Yn=R.ul`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;

  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    gap: 2.4rem;
    grid-template-columns: repeat(4, 1fr);
  }
`,ye=R.li`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  padding: 4.8rem 2.4rem;
  border-radius: 1.4rem;
  position: relative;
  background-color: ${t=>t.theme.colors.headerBgColor};
  max-width: 36.5rem;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  border-bottom: 1px solid ${t=>t.theme.colors.mainBgColorReverse};

  @media (min-width: 1440px) {
    padding: 4.8rem 2.4rem 2.4rem;
  }
`,ge=R.h3`
  font-family: ${J};
  font-weight: 500;
  font-size: 22px;
  line-height: 1.33333;
  color: ${t=>t.theme.colors.mainTextColor};
`,be=R.p`
  font-family: ${J};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.33333;
  color: ${t=>t.theme.colors.mainTextColor};
`,Se=R.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem;
  border-radius: 20rem;
  background-color: ${t=>t.theme.colors.mainBgColor};

  position: absolute;
  top: -3.2rem;
  left: 50%;

  border-bottom: 1px solid ${t=>t.theme.colors.mainBgColorReverse};

  transform: translateX(-50%);
`,Xn=R(Nn)`
  font-size: 3.2rem;
  color: ${t=>t.theme.colors.accentColor};
`,Bn=R(An)`
  font-size: 3.2rem;
  color: ${t=>t.theme.colors.accentColor};
`,Vn=R(Wn)`
  font-size: 3.2rem;
  color: ${t=>t.theme.colors.accentColor};
`,Un=R(qn)`
  font-size: 3.2rem;
  color: ${t=>t.theme.colors.accentColor};
`;function Gn(){return v.jsx(Fn,{children:v.jsxs(Yn,{children:[v.jsxs(ye,{children:[v.jsx(Se,{children:v.jsx(Xn,{})}),v.jsx(ge,{children:"24/7 Customer Service"}),v.jsx(be,{children:"Our customer service team is available around the clock to assist you with your rental car needs."})]}),v.jsxs(ye,{children:[v.jsx(Se,{children:v.jsx(Bn,{})}),v.jsx(ge,{children:"Convenient Locations"}),v.jsx(be,{children:"We have rental car locations conveniently situated all around the US for easy access."})]}),v.jsxs(ye,{children:[v.jsx(Se,{children:v.jsx(Vn,{})}),v.jsx(ge,{children:"Trusted Since 1980"}),v.jsx(be,{children:"With a rich history dating back to 1980, we take pride in being a trusted name in the rental car industry."})]}),v.jsxs(ye,{children:[v.jsx(Se,{children:v.jsx(Un,{})}),v.jsx(ge,{children:"Flexible Rental Options"}),v.jsx(be,{children:"Choose from a variety of rental options to fit your needs, whether it's a short trip or a long-term rental."})]})]})})}var yr={},gr={},Ve={},br={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0};t.default=e})(br);var Kn="Expected a function",At=NaN,Qn="[object Symbol]",Zn=/^\s+|\s+$/g,Jn=/^[-+]0x[0-9a-f]+$/i,ei=/^0b[01]+$/i,ti=/^0o[0-7]+$/i,ri=parseInt,ni=typeof ve=="object"&&ve&&ve.Object===Object&&ve,ii=typeof self=="object"&&self&&self.Object===Object&&self,oi=ni||ii||Function("return this")(),ai=Object.prototype,si=ai.toString,li=Math.max,ci=Math.min,ut=function(){return oi.Date.now()};function ui(t,e,n){var i,r,a,o,s,l,c=0,d=!1,u=!1,b=!0;if(typeof t!="function")throw new TypeError(Kn);e=Wt(e)||0,St(n)&&(d=!!n.leading,u="maxWait"in n,a=u?li(Wt(n.maxWait)||0,e):a,b="trailing"in n?!!n.trailing:b);function _(M){var N=i,V=r;return i=r=void 0,c=M,o=t.apply(V,N),o}function w(M){return c=M,s=setTimeout(T,e),d?_(M):o}function m(M){var N=M-l,V=M-c,y=e-N;return u?ci(y,a-V):y}function S(M){var N=M-l,V=M-c;return l===void 0||N>=e||N<0||u&&V>=a}function T(){var M=ut();if(S(M))return p(M);s=setTimeout(T,m(M))}function p(M){return s=void 0,b&&i?_(M):(i=r=void 0,o)}function x(){s!==void 0&&clearTimeout(s),c=0,i=l=r=s=void 0}function C(){return s===void 0?o:p(ut())}function E(){var M=ut(),N=S(M);if(i=arguments,r=this,l=M,N){if(s===void 0)return w(l);if(u)return s=setTimeout(T,e),_(l)}return s===void 0&&(s=setTimeout(T,e)),o}return E.cancel=x,E.flush=C,E}function St(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function fi(t){return!!t&&typeof t=="object"}function di(t){return typeof t=="symbol"||fi(t)&&si.call(t)==Qn}function Wt(t){if(typeof t=="number")return t;if(di(t))return At;if(St(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=St(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(Zn,"");var n=ei.test(t);return n||ti.test(t)?ri(t.slice(2),n?2:8):Jn.test(t)?At:+t}var pi=ui,Sr={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var a="",o=0;o<arguments.length;o++){var s=arguments[o];s&&(a=r(a,i(s)))}return a}function i(a){if(typeof a=="string"||typeof a=="number")return a;if(typeof a!="object")return"";if(Array.isArray(a))return n.apply(null,a);if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]"))return a.toString();var o="";for(var s in a)e.call(a,s)&&a[s]&&(o=r(o,s));return o}function r(a,o){return o?a?a+" "+o:a+o:a}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(Sr);var Ue=Sr.exports,h={},Rt={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=n(W);function n(r){return r&&r.__esModule?r:{default:r}}var i={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(a){return e.default.createElement("ul",{style:{display:"block"}},a)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(a){return e.default.createElement("button",null,a+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0,asNavFor:null};t.default=i})(Rt);Object.defineProperty(h,"__esModule",{value:!0});h.checkSpecKeys=h.checkNavigable=h.changeSlide=h.canUseDOM=h.canGoNext=void 0;h.clamp=xr;h.extractObject=void 0;h.filterSettings=Pi;h.validSettings=h.swipeStart=h.swipeMove=h.swipeEnd=h.slidesOnRight=h.slidesOnLeft=h.slideHandler=h.siblingDirection=h.safePreventDefault=h.lazyStartIndex=h.lazySlidesOnRight=h.lazySlidesOnLeft=h.lazyEndIndex=h.keyHandler=h.initializedState=h.getWidth=h.getTrackLeft=h.getTrackCSS=h.getTrackAnimateCSS=h.getTotalSlides=h.getSwipeDirection=h.getSlideCount=h.getRequiredLazySlides=h.getPreClones=h.getPostClones=h.getOnDemandLazySlides=h.getNavigableIndexes=h.getHeight=void 0;var mi=wr(W),hi=wr(Rt);function wr(t){return t&&t.__esModule?t:{default:t}}function pe(t){"@babel/helpers - typeof";return pe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},pe(t)}function qt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function H(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?qt(Object(n),!0).forEach(function(i){vi(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):qt(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function vi(t,e,n){return e=yi(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function yi(t){var e=gi(t,"string");return pe(e)=="symbol"?e:String(e)}function gi(t,e){if(pe(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(pe(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function xr(t,e,n){return Math.max(e,Math.min(t,n))}var oe=h.safePreventDefault=function(e){var n=["onTouchStart","onTouchMove","onWheel"];n.includes(e._reactName)||e.preventDefault()},Or=h.getOnDemandLazySlides=function(e){for(var n=[],i=_r(e),r=Tr(e),a=i;a<r;a++)e.lazyLoadedList.indexOf(a)<0&&n.push(a);return n};h.getRequiredLazySlides=function(e){for(var n=[],i=_r(e),r=Tr(e),a=i;a<r;a++)n.push(a);return n};var _r=h.lazyStartIndex=function(e){return e.currentSlide-bi(e)},Tr=h.lazyEndIndex=function(e){return e.currentSlide+Si(e)},bi=h.lazySlidesOnLeft=function(e){return e.centerMode?Math.floor(e.slidesToShow/2)+(parseInt(e.centerPadding)>0?1:0):0},Si=h.lazySlidesOnRight=function(e){return e.centerMode?Math.floor((e.slidesToShow-1)/2)+1+(parseInt(e.centerPadding)>0?1:0):e.slidesToShow},wt=h.getWidth=function(e){return e&&e.offsetWidth||0},kr=h.getHeight=function(e){return e&&e.offsetHeight||0},Cr=h.getSwipeDirection=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,i,r,a,o;return i=e.startX-e.curX,r=e.startY-e.curY,a=Math.atan2(r,i),o=Math.round(a*180/Math.PI),o<0&&(o=360-Math.abs(o)),o<=45&&o>=0||o<=360&&o>=315?"left":o>=135&&o<=225?"right":n===!0?o>=35&&o<=135?"up":"down":"vertical"},Pr=h.canGoNext=function(e){var n=!0;return e.infinite||(e.centerMode&&e.currentSlide>=e.slideCount-1||e.slideCount<=e.slidesToShow||e.currentSlide>=e.slideCount-e.slidesToShow)&&(n=!1),n};h.extractObject=function(e,n){var i={};return n.forEach(function(r){return i[r]=e[r]}),i};h.initializedState=function(e){var n=mi.default.Children.count(e.children),i=e.listRef,r=Math.ceil(wt(i)),a=e.trackRef&&e.trackRef.node,o=Math.ceil(wt(a)),s;if(e.vertical)s=r;else{var l=e.centerMode&&parseInt(e.centerPadding)*2;typeof e.centerPadding=="string"&&e.centerPadding.slice(-1)==="%"&&(l*=r/100),s=Math.ceil((r-l)/e.slidesToShow)}var c=i&&kr(i.querySelector('[data-index="0"]')),d=c*e.slidesToShow,u=e.currentSlide===void 0?e.initialSlide:e.currentSlide;e.rtl&&e.currentSlide===void 0&&(u=n-1-e.initialSlide);var b=e.lazyLoadedList||[],_=Or(H(H({},e),{},{currentSlide:u,lazyLoadedList:b}));b=b.concat(_);var w={slideCount:n,slideWidth:s,listWidth:r,trackWidth:o,currentSlide:u,slideHeight:c,listHeight:d,lazyLoadedList:b};return e.autoplaying===null&&e.autoplay&&(w.autoplaying="playing"),w};h.slideHandler=function(e){var n=e.waitForAnimate,i=e.animating,r=e.fade,a=e.infinite,o=e.index,s=e.slideCount,l=e.lazyLoad,c=e.currentSlide,d=e.centerMode,u=e.slidesToScroll,b=e.slidesToShow,_=e.useCSS,w=e.lazyLoadedList;if(n&&i)return{};var m=o,S,T,p,x={},C={},E=a?o:xr(o,0,s-1);if(r){if(!a&&(o<0||o>=s))return{};o<0?m=o+s:o>=s&&(m=o-s),l&&w.indexOf(m)<0&&(w=w.concat(m)),x={animating:!0,currentSlide:m,lazyLoadedList:w,targetSlide:m},C={animating:!1,targetSlide:m}}else S=m,m<0?(S=m+s,a?s%u!==0&&(S=s-s%u):S=0):!Pr(e)&&m>c?m=S=c:d&&m>=s?(m=a?s:s-1,S=a?0:s-1):m>=s&&(S=m-s,a?s%u!==0&&(S=0):S=s-b),!a&&m+b>=s&&(S=s-b),T=ke(H(H({},e),{},{slideIndex:m})),p=ke(H(H({},e),{},{slideIndex:S})),a||(T===p&&(m=S),T=p),l&&(w=w.concat(Or(H(H({},e),{},{currentSlide:m})))),_?(x={animating:!0,currentSlide:S,trackStyle:jr(H(H({},e),{},{left:T})),lazyLoadedList:w,targetSlide:E},C={animating:!1,currentSlide:S,trackStyle:Te(H(H({},e),{},{left:p})),swipeLeft:null,targetSlide:E}):x={currentSlide:S,trackStyle:Te(H(H({},e),{},{left:p})),lazyLoadedList:w,targetSlide:E};return{state:x,nextState:C}};h.changeSlide=function(e,n){var i,r,a,o,s,l=e.slidesToScroll,c=e.slidesToShow,d=e.slideCount,u=e.currentSlide,b=e.targetSlide,_=e.lazyLoad,w=e.infinite;if(o=d%l!==0,i=o?0:(d-u)%l,n.message==="previous")a=i===0?l:c-i,s=u-a,_&&!w&&(r=u-a,s=r===-1?d-1:r),w||(s=b-l);else if(n.message==="next")a=i===0?l:i,s=u+a,_&&!w&&(s=(u+l)%d+i),w||(s=b+l);else if(n.message==="dots")s=n.index*n.slidesToScroll;else if(n.message==="children"){if(s=n.index,w){var m=_i(H(H({},e),{},{targetSlide:s}));s>n.currentSlide&&m==="left"?s=s-d:s<n.currentSlide&&m==="right"&&(s=s+d)}}else n.message==="index"&&(s=Number(n.index));return s};h.keyHandler=function(e,n,i){return e.target.tagName.match("TEXTAREA|INPUT|SELECT")||!n?"":e.keyCode===37?i?"next":"previous":e.keyCode===39?i?"previous":"next":""};h.swipeStart=function(e,n,i){return e.target.tagName==="IMG"&&oe(e),!n||!i&&e.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:e.touches?e.touches[0].pageX:e.clientX,startY:e.touches?e.touches[0].pageY:e.clientY,curX:e.touches?e.touches[0].pageX:e.clientX,curY:e.touches?e.touches[0].pageY:e.clientY}}};h.swipeMove=function(e,n){var i=n.scrolling,r=n.animating,a=n.vertical,o=n.swipeToSlide,s=n.verticalSwiping,l=n.rtl,c=n.currentSlide,d=n.edgeFriction,u=n.edgeDragged,b=n.onEdge,_=n.swiped,w=n.swiping,m=n.slideCount,S=n.slidesToScroll,T=n.infinite,p=n.touchObject,x=n.swipeEvent,C=n.listHeight,E=n.listWidth;if(!i){if(r)return oe(e);a&&o&&s&&oe(e);var M,N={},V=ke(n);p.curX=e.touches?e.touches[0].pageX:e.clientX,p.curY=e.touches?e.touches[0].pageY:e.clientY,p.swipeLength=Math.round(Math.sqrt(Math.pow(p.curX-p.startX,2)));var y=Math.round(Math.sqrt(Math.pow(p.curY-p.startY,2)));if(!s&&!w&&y>10)return{scrolling:!0};s&&(p.swipeLength=y);var g=(l?-1:1)*(p.curX>p.startX?1:-1);s&&(g=p.curY>p.startY?1:-1);var z=Math.ceil(m/S),k=Cr(n.touchObject,s),P=p.swipeLength;return T||(c===0&&(k==="right"||k==="down")||c+1>=z&&(k==="left"||k==="up")||!Pr(n)&&(k==="left"||k==="up"))&&(P=p.swipeLength*d,u===!1&&b&&(b(k),N.edgeDragged=!0)),!_&&x&&(x(k),N.swiped=!0),a?M=V+P*(C/E)*g:l?M=V-P*g:M=V+P*g,s&&(M=V+P*g),N=H(H({},N),{},{touchObject:p,swipeLeft:M,trackStyle:Te(H(H({},n),{},{left:M}))}),Math.abs(p.curX-p.startX)<Math.abs(p.curY-p.startY)*.8||p.swipeLength>10&&(N.swiping=!0,oe(e)),N}};h.swipeEnd=function(e,n){var i=n.dragging,r=n.swipe,a=n.touchObject,o=n.listWidth,s=n.touchThreshold,l=n.verticalSwiping,c=n.listHeight,d=n.swipeToSlide,u=n.scrolling,b=n.onSwipe,_=n.targetSlide,w=n.currentSlide,m=n.infinite;if(!i)return r&&oe(e),{};var S=l?c/s:o/s,T=Cr(a,l),p={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(u||!a.swipeLength)return p;if(a.swipeLength>S){oe(e),b&&b(T);var x,C,E=m?w:_;switch(T){case"left":case"up":C=E+Yt(n),x=d?Ft(n,C):C,p.currentDirection=0;break;case"right":case"down":C=E-Yt(n),x=d?Ft(n,C):C,p.currentDirection=1;break;default:x=E}p.triggerSlideHandler=x}else{var M=ke(n);p.trackStyle=jr(H(H({},n),{},{left:M}))}return p};var wi=h.getNavigableIndexes=function(e){for(var n=e.infinite?e.slideCount*2:e.slideCount,i=e.infinite?e.slidesToShow*-1:0,r=e.infinite?e.slidesToShow*-1:0,a=[];i<n;)a.push(i),i=r+e.slidesToScroll,r+=Math.min(e.slidesToScroll,e.slidesToShow);return a},Ft=h.checkNavigable=function(e,n){var i=wi(e),r=0;if(n>i[i.length-1])n=i[i.length-1];else for(var a in i){if(n<i[a]){n=r;break}r=i[a]}return n},Yt=h.getSlideCount=function(e){var n=e.centerMode?e.slideWidth*Math.floor(e.slidesToShow/2):0;if(e.swipeToSlide){var i,r=e.listRef,a=r.querySelectorAll&&r.querySelectorAll(".slick-slide")||[];if(Array.from(a).every(function(l){if(e.vertical){if(l.offsetTop+kr(l)/2>e.swipeLeft*-1)return i=l,!1}else if(l.offsetLeft-n+wt(l)/2>e.swipeLeft*-1)return i=l,!1;return!0}),!i)return 0;var o=e.rtl===!0?e.slideCount-e.currentSlide:e.currentSlide,s=Math.abs(i.dataset.index-o)||1;return s}else return e.slidesToScroll},It=h.checkSpecKeys=function(e,n){return n.reduce(function(i,r){return i&&e.hasOwnProperty(r)},!0)?null:console.error("Keys Missing:",e)},Te=h.getTrackCSS=function(e){It(e,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var n,i,r=e.slideCount+2*e.slidesToShow;e.vertical?i=r*e.slideHeight:n=Oi(e)*e.slideWidth;var a={opacity:1,transition:"",WebkitTransition:""};if(e.useTransform){var o=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",s=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",l=e.vertical?"translateY("+e.left+"px)":"translateX("+e.left+"px)";a=H(H({},a),{},{WebkitTransform:o,transform:s,msTransform:l})}else e.vertical?a.top=e.left:a.left=e.left;return e.fade&&(a={opacity:1}),n&&(a.width=n),i&&(a.height=i),window&&!window.addEventListener&&window.attachEvent&&(e.vertical?a.marginTop=e.left+"px":a.marginLeft=e.left+"px"),a},jr=h.getTrackAnimateCSS=function(e){It(e,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var n=Te(e);return e.useTransform?(n.WebkitTransition="-webkit-transform "+e.speed+"ms "+e.cssEase,n.transition="transform "+e.speed+"ms "+e.cssEase):e.vertical?n.transition="top "+e.speed+"ms "+e.cssEase:n.transition="left "+e.speed+"ms "+e.cssEase,n},ke=h.getTrackLeft=function(e){if(e.unslick)return 0;It(e,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var n=e.slideIndex,i=e.trackRef,r=e.infinite,a=e.centerMode,o=e.slideCount,s=e.slidesToShow,l=e.slidesToScroll,c=e.slideWidth,d=e.listWidth,u=e.variableWidth,b=e.slideHeight,_=e.fade,w=e.vertical,m=0,S,T,p=0;if(_||e.slideCount===1)return 0;var x=0;if(r?(x=-_e(e),o%l!==0&&n+l>o&&(x=-(n>o?s-(n-o):o%l)),a&&(x+=parseInt(s/2))):(o%l!==0&&n+l>o&&(x=s-o%l),a&&(x=parseInt(s/2))),m=x*c,p=x*b,w?S=n*b*-1+p:S=n*c*-1+m,u===!0){var C,E=i&&i.node;if(C=n+_e(e),T=E&&E.childNodes[C],S=T?T.offsetLeft*-1:0,a===!0){C=r?n+_e(e):n,T=E&&E.children[C],S=0;for(var M=0;M<C;M++)S-=E&&E.children[M]&&E.children[M].offsetWidth;S-=parseInt(e.centerPadding),S+=T&&(d-T.offsetWidth)/2}}return S},_e=h.getPreClones=function(e){return e.unslick||!e.infinite?0:e.variableWidth?e.slideCount:e.slidesToShow+(e.centerMode?1:0)},xi=h.getPostClones=function(e){return e.unslick||!e.infinite?0:e.slideCount},Oi=h.getTotalSlides=function(e){return e.slideCount===1?1:_e(e)+e.slideCount+xi(e)},_i=h.siblingDirection=function(e){return e.targetSlide>e.currentSlide?e.targetSlide>e.currentSlide+Ti(e)?"left":"right":e.targetSlide<e.currentSlide-ki(e)?"right":"left"},Ti=h.slidesOnRight=function(e){var n=e.slidesToShow,i=e.centerMode,r=e.rtl,a=e.centerPadding;if(i){var o=(n-1)/2+1;return parseInt(a)>0&&(o+=1),r&&n%2===0&&(o+=1),o}return r?0:n-1},ki=h.slidesOnLeft=function(e){var n=e.slidesToShow,i=e.centerMode,r=e.rtl,a=e.centerPadding;if(i){var o=(n-1)/2+1;return parseInt(a)>0&&(o+=1),!r&&n%2===0&&(o+=1),o}return r?n-1:0};h.canUseDOM=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)};var Ci=h.validSettings=Object.keys(hi.default);function Pi(t){return Ci.reduce(function(e,n){return t.hasOwnProperty(n)&&(e[n]=t[n]),e},{})}var Ge={};Object.defineProperty(Ge,"__esModule",{value:!0});Ge.Track=void 0;var Z=Er(W),ft=Er(Ue),dt=h;function Er(t){return t&&t.__esModule?t:{default:t}}function se(t){"@babel/helpers - typeof";return se=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},se(t)}function xt(){return xt=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},xt.apply(this,arguments)}function ji(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Xt(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,zr(i.key),i)}}function Ei(t,e,n){return e&&Xt(t.prototype,e),n&&Xt(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Mi(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Ot(t,e)}function Ot(t,e){return Ot=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},Ot(t,e)}function zi(t){var e=Mr();return function(){var i=Ce(t),r;if(e){var a=Ce(this).constructor;r=Reflect.construct(i,arguments,a)}else r=i.apply(this,arguments);return Li(this,r)}}function Li(t,e){if(e&&(se(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return _t(t)}function _t(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Mr(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Mr=function(){return!!t})()}function Ce(t){return Ce=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Ce(t)}function Bt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function B(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Bt(Object(n),!0).forEach(function(i){Tt(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Bt(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Tt(t,e,n){return e=zr(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function zr(t){var e=$i(t,"string");return se(e)=="symbol"?e:String(e)}function $i(t,e){if(se(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(se(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var pt=function(e){var n,i,r,a,o;e.rtl?o=e.slideCount-1-e.index:o=e.index,r=o<0||o>=e.slideCount,e.centerMode?(a=Math.floor(e.slidesToShow/2),i=(o-e.currentSlide)%e.slideCount===0,o>e.currentSlide-a-1&&o<=e.currentSlide+a&&(n=!0)):n=e.currentSlide<=o&&o<e.currentSlide+e.slidesToShow;var s;e.targetSlide<0?s=e.targetSlide+e.slideCount:e.targetSlide>=e.slideCount?s=e.targetSlide-e.slideCount:s=e.targetSlide;var l=o===s;return{"slick-slide":!0,"slick-active":n,"slick-center":i,"slick-cloned":r,"slick-current":l}},Ri=function(e){var n={};return(e.variableWidth===void 0||e.variableWidth===!1)&&(n.width=e.slideWidth),e.fade&&(n.position="relative",e.vertical?n.top=-e.index*parseInt(e.slideHeight):n.left=-e.index*parseInt(e.slideWidth),n.opacity=e.currentSlide===e.index?1:0,n.zIndex=e.currentSlide===e.index?999:998,e.useCSS&&(n.transition="opacity "+e.speed+"ms "+e.cssEase+", visibility "+e.speed+"ms "+e.cssEase)),n},mt=function(e,n){return e.key||n},Ii=function(e){var n,i=[],r=[],a=[],o=Z.default.Children.count(e.children),s=(0,dt.lazyStartIndex)(e),l=(0,dt.lazyEndIndex)(e);return Z.default.Children.forEach(e.children,function(c,d){var u,b={message:"children",index:d,slidesToScroll:e.slidesToScroll,currentSlide:e.currentSlide};!e.lazyLoad||e.lazyLoad&&e.lazyLoadedList.indexOf(d)>=0?u=c:u=Z.default.createElement("div",null);var _=Ri(B(B({},e),{},{index:d})),w=u.props.className||"",m=pt(B(B({},e),{},{index:d}));if(i.push(Z.default.cloneElement(u,{key:"original"+mt(u,d),"data-index":d,className:(0,ft.default)(m,w),tabIndex:"-1","aria-hidden":!m["slick-active"],style:B(B({outline:"none"},u.props.style||{}),_),onClick:function(p){u.props&&u.props.onClick&&u.props.onClick(p),e.focusOnSelect&&e.focusOnSelect(b)}})),e.infinite&&e.fade===!1){var S=o-d;S<=(0,dt.getPreClones)(e)&&(n=-S,n>=s&&(u=c),m=pt(B(B({},e),{},{index:n})),r.push(Z.default.cloneElement(u,{key:"precloned"+mt(u,n),"data-index":n,tabIndex:"-1",className:(0,ft.default)(m,w),"aria-hidden":!m["slick-active"],style:B(B({},u.props.style||{}),_),onClick:function(p){u.props&&u.props.onClick&&u.props.onClick(p),e.focusOnSelect&&e.focusOnSelect(b)}}))),n=o+d,n<l&&(u=c),m=pt(B(B({},e),{},{index:n})),a.push(Z.default.cloneElement(u,{key:"postcloned"+mt(u,n),"data-index":n,tabIndex:"-1",className:(0,ft.default)(m,w),"aria-hidden":!m["slick-active"],style:B(B({},u.props.style||{}),_),onClick:function(p){u.props&&u.props.onClick&&u.props.onClick(p),e.focusOnSelect&&e.focusOnSelect(b)}}))}}),e.rtl?r.concat(i,a).reverse():r.concat(i,a)};Ge.Track=function(t){Mi(n,t);var e=zi(n);function n(){var i;ji(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return i=e.call.apply(e,[this].concat(a)),Tt(_t(i),"node",null),Tt(_t(i),"handleRef",function(s){i.node=s}),i}return Ei(n,[{key:"render",value:function(){var r=Ii(this.props),a=this.props,o=a.onMouseEnter,s=a.onMouseOver,l=a.onMouseLeave,c={onMouseEnter:o,onMouseOver:s,onMouseLeave:l};return Z.default.createElement("div",xt({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},c),r)}}]),n}(Z.default.PureComponent);var Ke={};function le(t){"@babel/helpers - typeof";return le=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},le(t)}Object.defineProperty(Ke,"__esModule",{value:!0});Ke.Dots=void 0;var we=Lr(W),Di=Lr(Ue),Vt=h;function Lr(t){return t&&t.__esModule?t:{default:t}}function Ut(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function Hi(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ut(Object(n),!0).forEach(function(i){Ni(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ut(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Ni(t,e,n){return e=$r(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ai(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Gt(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,$r(i.key),i)}}function Wi(t,e,n){return e&&Gt(t.prototype,e),n&&Gt(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function $r(t){var e=qi(t,"string");return le(e)=="symbol"?e:String(e)}function qi(t,e){if(le(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(le(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Fi(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&kt(t,e)}function kt(t,e){return kt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},kt(t,e)}function Yi(t){var e=Rr();return function(){var i=Pe(t),r;if(e){var a=Pe(this).constructor;r=Reflect.construct(i,arguments,a)}else r=i.apply(this,arguments);return Xi(this,r)}}function Xi(t,e){if(e&&(le(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Bi(t)}function Bi(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Rr(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Rr=function(){return!!t})()}function Pe(t){return Pe=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Pe(t)}var Vi=function(e){var n;return e.infinite?n=Math.ceil(e.slideCount/e.slidesToScroll):n=Math.ceil((e.slideCount-e.slidesToShow)/e.slidesToScroll)+1,n};Ke.Dots=function(t){Fi(n,t);var e=Yi(n);function n(){return Ai(this,n),e.apply(this,arguments)}return Wi(n,[{key:"clickHandler",value:function(r,a){a.preventDefault(),this.props.clickHandler(r)}},{key:"render",value:function(){for(var r=this.props,a=r.onMouseEnter,o=r.onMouseOver,s=r.onMouseLeave,l=r.infinite,c=r.slidesToScroll,d=r.slidesToShow,u=r.slideCount,b=r.currentSlide,_=Vi({slideCount:u,slidesToScroll:c,slidesToShow:d,infinite:l}),w={onMouseEnter:a,onMouseOver:o,onMouseLeave:s},m=[],S=0;S<_;S++){var T=(S+1)*c-1,p=l?T:(0,Vt.clamp)(T,0,u-1),x=p-(c-1),C=l?x:(0,Vt.clamp)(x,0,u-1),E=(0,Di.default)({"slick-active":l?b>=C&&b<=p:b===C}),M={message:"dots",index:S,slidesToScroll:c,currentSlide:b},N=this.clickHandler.bind(this,M);m=m.concat(we.default.createElement("li",{key:S,className:E},we.default.cloneElement(this.props.customPaging(S),{onClick:N})))}return we.default.cloneElement(this.props.appendDots(m),Hi({className:this.props.dotsClass},w))}}]),n}(we.default.PureComponent);var ce={};function ue(t){"@babel/helpers - typeof";return ue=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ue(t)}Object.defineProperty(ce,"__esModule",{value:!0});ce.PrevArrow=ce.NextArrow=void 0;var ae=Dr(W),Ir=Dr(Ue),Ui=h;function Dr(t){return t&&t.__esModule?t:{default:t}}function je(){return je=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},je.apply(this,arguments)}function Kt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function Ee(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Kt(Object(n),!0).forEach(function(i){Gi(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Kt(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Gi(t,e,n){return e=Ar(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Hr(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Qt(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,Ar(i.key),i)}}function Nr(t,e,n){return e&&Qt(t.prototype,e),n&&Qt(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Ar(t){var e=Ki(t,"string");return ue(e)=="symbol"?e:String(e)}function Ki(t,e){if(ue(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(ue(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Wr(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Ct(t,e)}function Ct(t,e){return Ct=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},Ct(t,e)}function qr(t){var e=Fr();return function(){var i=Me(t),r;if(e){var a=Me(this).constructor;r=Reflect.construct(i,arguments,a)}else r=i.apply(this,arguments);return Qi(this,r)}}function Qi(t,e){if(e&&(ue(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Zi(t)}function Zi(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Fr(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Fr=function(){return!!t})()}function Me(t){return Me=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Me(t)}ce.PrevArrow=function(t){Wr(n,t);var e=qr(n);function n(){return Hr(this,n),e.apply(this,arguments)}return Nr(n,[{key:"clickHandler",value:function(r,a){a&&a.preventDefault(),this.props.clickHandler(r,a)}},{key:"render",value:function(){var r={"slick-arrow":!0,"slick-prev":!0},a=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(r["slick-disabled"]=!0,a=null);var o={key:"0","data-role":"none",className:(0,Ir.default)(r),style:{display:"block"},onClick:a},s={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},l;return this.props.prevArrow?l=ae.default.cloneElement(this.props.prevArrow,Ee(Ee({},o),s)):l=ae.default.createElement("button",je({key:"0",type:"button"},o)," ","Previous"),l}}]),n}(ae.default.PureComponent);ce.NextArrow=function(t){Wr(n,t);var e=qr(n);function n(){return Hr(this,n),e.apply(this,arguments)}return Nr(n,[{key:"clickHandler",value:function(r,a){a&&a.preventDefault(),this.props.clickHandler(r,a)}},{key:"render",value:function(){var r={"slick-arrow":!0,"slick-next":!0},a=this.clickHandler.bind(this,{message:"next"});(0,Ui.canGoNext)(this.props)||(r["slick-disabled"]=!0,a=null);var o={key:"1","data-role":"none",className:(0,Ir.default)(r),style:{display:"block"},onClick:a},s={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},l;return this.props.nextArrow?l=ae.default.cloneElement(this.props.nextArrow,Ee(Ee({},o),s)):l=ae.default.createElement("button",je({key:"1",type:"button"},o)," ","Next"),l}}]),n}(ae.default.PureComponent);var Yr=function(){if(typeof Map<"u")return Map;function t(e,n){var i=-1;return e.some(function(r,a){return r[0]===n?(i=a,!0):!1}),i}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(n){var i=t(this.__entries__,n),r=this.__entries__[i];return r&&r[1]},e.prototype.set=function(n,i){var r=t(this.__entries__,n);~r?this.__entries__[r][1]=i:this.__entries__.push([n,i])},e.prototype.delete=function(n){var i=this.__entries__,r=t(i,n);~r&&i.splice(r,1)},e.prototype.has=function(n){return!!~t(this.__entries__,n)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(n,i){i===void 0&&(i=null);for(var r=0,a=this.__entries__;r<a.length;r++){var o=a[r];n.call(i,o[1],o[0])}},e}()}(),Pt=typeof window<"u"&&typeof document<"u"&&window.document===document,ze=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),Ji=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(ze):function(t){return setTimeout(function(){return t(Date.now())},1e3/60)}}(),eo=2;function to(t,e){var n=!1,i=!1,r=0;function a(){n&&(n=!1,t()),i&&s()}function o(){Ji(a)}function s(){var l=Date.now();if(n){if(l-r<eo)return;i=!0}else n=!0,i=!1,setTimeout(o,e);r=l}return s}var ro=20,no=["top","right","bottom","left","width","height","size","weight"],io=typeof MutationObserver<"u",oo=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=to(this.refresh.bind(this),ro)}return t.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},t.prototype.removeObserver=function(e){var n=this.observers_,i=n.indexOf(e);~i&&n.splice(i,1),!n.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){var e=this.updateObservers_();e&&this.refresh()},t.prototype.updateObservers_=function(){var e=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return e.forEach(function(n){return n.broadcastActive()}),e.length>0},t.prototype.connect_=function(){!Pt||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),io?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){!Pt||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(e){var n=e.propertyName,i=n===void 0?"":n,r=no.some(function(a){return!!~i.indexOf(a)});r&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),Xr=function(t,e){for(var n=0,i=Object.keys(e);n<i.length;n++){var r=i[n];Object.defineProperty(t,r,{value:e[r],enumerable:!1,writable:!1,configurable:!0})}return t},fe=function(t){var e=t&&t.ownerDocument&&t.ownerDocument.defaultView;return e||ze},Br=Qe(0,0,0,0);function Le(t){return parseFloat(t)||0}function Zt(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce(function(i,r){var a=t["border-"+r+"-width"];return i+Le(a)},0)}function ao(t){for(var e=["top","right","bottom","left"],n={},i=0,r=e;i<r.length;i++){var a=r[i],o=t["padding-"+a];n[a]=Le(o)}return n}function so(t){var e=t.getBBox();return Qe(0,0,e.width,e.height)}function lo(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return Br;var i=fe(t).getComputedStyle(t),r=ao(i),a=r.left+r.right,o=r.top+r.bottom,s=Le(i.width),l=Le(i.height);if(i.boxSizing==="border-box"&&(Math.round(s+a)!==e&&(s-=Zt(i,"left","right")+a),Math.round(l+o)!==n&&(l-=Zt(i,"top","bottom")+o)),!uo(t)){var c=Math.round(s+a)-e,d=Math.round(l+o)-n;Math.abs(c)!==1&&(s-=c),Math.abs(d)!==1&&(l-=d)}return Qe(r.left,r.top,s,l)}var co=function(){return typeof SVGGraphicsElement<"u"?function(t){return t instanceof fe(t).SVGGraphicsElement}:function(t){return t instanceof fe(t).SVGElement&&typeof t.getBBox=="function"}}();function uo(t){return t===fe(t).document.documentElement}function fo(t){return Pt?co(t)?so(t):lo(t):Br}function po(t){var e=t.x,n=t.y,i=t.width,r=t.height,a=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,o=Object.create(a.prototype);return Xr(o,{x:e,y:n,width:i,height:r,top:n,right:e+i,bottom:r+n,left:e}),o}function Qe(t,e,n,i){return{x:t,y:e,width:n,height:i}}var mo=function(){function t(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Qe(0,0,0,0),this.target=e}return t.prototype.isActive=function(){var e=fo(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},t}(),ho=function(){function t(e,n){var i=po(n);Xr(this,{target:e,contentRect:i})}return t}(),vo=function(){function t(e,n,i){if(this.activeObservations_=[],this.observations_=new Yr,typeof e!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=n,this.callbackCtx_=i}return t.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof fe(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(e)||(n.set(e,new mo(e)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof fe(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(e)&&(n.delete(e),n.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&e.activeObservations_.push(n)})},t.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,n=this.activeObservations_.map(function(i){return new ho(i.target,i.broadcastRect())});this.callback_.call(e,n,e),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),Vr=typeof WeakMap<"u"?new WeakMap:new Yr,Ur=function(){function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=oo.getInstance(),i=new vo(e,n,this);Vr.set(this,i)}return t}();["observe","unobserve","disconnect"].forEach(function(t){Ur.prototype[t]=function(){var e;return(e=Vr.get(this))[t].apply(e,arguments)}});var yo=function(){return typeof ze.ResizeObserver<"u"?ze.ResizeObserver:Ur}();const go=Object.freeze(Object.defineProperty({__proto__:null,default:yo},Symbol.toStringTag,{value:"Module"})),bo=mn(go);Object.defineProperty(Ve,"__esModule",{value:!0});Ve.InnerSlider=void 0;var X=he(W),So=he(br),wo=he(pi),xo=he(Ue),A=h,Oo=Ge,_o=Ke,Jt=ce,To=he(bo);function he(t){return t&&t.__esModule?t:{default:t}}function re(t){"@babel/helpers - typeof";return re=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},re(t)}function $e(){return $e=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},$e.apply(this,arguments)}function ko(t,e){if(t==null)return{};var n=Co(t,e),i,r;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)i=a[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function Co(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,a;for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function er(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?er(Object(n),!0).forEach(function(i){$(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):er(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Po(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function tr(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,Kr(i.key),i)}}function jo(t,e,n){return e&&tr(t.prototype,e),n&&tr(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Eo(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&jt(t,e)}function jt(t,e){return jt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},jt(t,e)}function Mo(t){var e=Gr();return function(){var i=Re(t),r;if(e){var a=Re(this).constructor;r=Reflect.construct(i,arguments,a)}else r=i.apply(this,arguments);return zo(this,r)}}function zo(t,e){if(e&&(re(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return L(t)}function L(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Gr(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Gr=function(){return!!t})()}function Re(t){return Re=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Re(t)}function $(t,e,n){return e=Kr(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Kr(t){var e=Lo(t,"string");return re(e)=="symbol"?e:String(e)}function Lo(t,e){if(re(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(re(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}Ve.InnerSlider=function(t){Eo(n,t);var e=Mo(n);function n(i){var r;Po(this,n),r=e.call(this,i),$(L(r),"listRefHandler",function(o){return r.list=o}),$(L(r),"trackRefHandler",function(o){return r.track=o}),$(L(r),"adaptHeight",function(){if(r.props.adaptiveHeight&&r.list){var o=r.list.querySelector('[data-index="'.concat(r.state.currentSlide,'"]'));r.list.style.height=(0,A.getHeight)(o)+"px"}}),$(L(r),"componentDidMount",function(){if(r.props.onInit&&r.props.onInit(),r.props.lazyLoad){var o=(0,A.getOnDemandLazySlides)(O(O({},r.props),r.state));o.length>0&&(r.setState(function(l){return{lazyLoadedList:l.lazyLoadedList.concat(o)}}),r.props.onLazyLoad&&r.props.onLazyLoad(o))}var s=O({listRef:r.list,trackRef:r.track},r.props);r.updateState(s,!0,function(){r.adaptHeight(),r.props.autoplay&&r.autoPlay("update")}),r.props.lazyLoad==="progressive"&&(r.lazyLoadTimer=setInterval(r.progressiveLazyLoad,1e3)),r.ro=new To.default(function(){r.state.animating?(r.onWindowResized(!1),r.callbackTimers.push(setTimeout(function(){return r.onWindowResized()},r.props.speed))):r.onWindowResized()}),r.ro.observe(r.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(l){l.onfocus=r.props.pauseOnFocus?r.onSlideFocus:null,l.onblur=r.props.pauseOnFocus?r.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",r.onWindowResized):window.attachEvent("onresize",r.onWindowResized)}),$(L(r),"componentWillUnmount",function(){r.animationEndCallback&&clearTimeout(r.animationEndCallback),r.lazyLoadTimer&&clearInterval(r.lazyLoadTimer),r.callbackTimers.length&&(r.callbackTimers.forEach(function(o){return clearTimeout(o)}),r.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",r.onWindowResized):window.detachEvent("onresize",r.onWindowResized),r.autoplayTimer&&clearInterval(r.autoplayTimer),r.ro.disconnect()}),$(L(r),"componentDidUpdate",function(o){if(r.checkImagesLoad(),r.props.onReInit&&r.props.onReInit(),r.props.lazyLoad){var s=(0,A.getOnDemandLazySlides)(O(O({},r.props),r.state));s.length>0&&(r.setState(function(d){return{lazyLoadedList:d.lazyLoadedList.concat(s)}}),r.props.onLazyLoad&&r.props.onLazyLoad(s))}r.adaptHeight();var l=O(O({listRef:r.list,trackRef:r.track},r.props),r.state),c=r.didPropsChange(o);c&&r.updateState(l,c,function(){r.state.currentSlide>=X.default.Children.count(r.props.children)&&r.changeSlide({message:"index",index:X.default.Children.count(r.props.children)-r.props.slidesToShow,currentSlide:r.state.currentSlide}),r.props.autoplay?r.autoPlay("update"):r.pause("paused")})}),$(L(r),"onWindowResized",function(o){r.debouncedResize&&r.debouncedResize.cancel(),r.debouncedResize=(0,wo.default)(function(){return r.resizeWindow(o)},50),r.debouncedResize()}),$(L(r),"resizeWindow",function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,s=!!(r.track&&r.track.node);if(s){var l=O(O({listRef:r.list,trackRef:r.track},r.props),r.state);r.updateState(l,o,function(){r.props.autoplay?r.autoPlay("update"):r.pause("paused")}),r.setState({animating:!1}),clearTimeout(r.animationEndCallback),delete r.animationEndCallback}}),$(L(r),"updateState",function(o,s,l){var c=(0,A.initializedState)(o);o=O(O(O({},o),c),{},{slideIndex:c.currentSlide});var d=(0,A.getTrackLeft)(o);o=O(O({},o),{},{left:d});var u=(0,A.getTrackCSS)(o);(s||X.default.Children.count(r.props.children)!==X.default.Children.count(o.children))&&(c.trackStyle=u),r.setState(c,l)}),$(L(r),"ssrInit",function(){if(r.props.variableWidth){var o=0,s=0,l=[],c=(0,A.getPreClones)(O(O(O({},r.props),r.state),{},{slideCount:r.props.children.length})),d=(0,A.getPostClones)(O(O(O({},r.props),r.state),{},{slideCount:r.props.children.length}));r.props.children.forEach(function(N){l.push(N.props.style.width),o+=N.props.style.width});for(var u=0;u<c;u++)s+=l[l.length-1-u],o+=l[l.length-1-u];for(var b=0;b<d;b++)o+=l[b];for(var _=0;_<r.state.currentSlide;_++)s+=l[_];var w={width:o+"px",left:-s+"px"};if(r.props.centerMode){var m="".concat(l[r.state.currentSlide],"px");w.left="calc(".concat(w.left," + (100% - ").concat(m,") / 2 ) ")}return{trackStyle:w}}var S=X.default.Children.count(r.props.children),T=O(O(O({},r.props),r.state),{},{slideCount:S}),p=(0,A.getPreClones)(T)+(0,A.getPostClones)(T)+S,x=100/r.props.slidesToShow*p,C=100/p,E=-C*((0,A.getPreClones)(T)+r.state.currentSlide)*x/100;r.props.centerMode&&(E+=(100-C*x/100)/2);var M={width:x+"%",left:E+"%"};return{slideWidth:C+"%",trackStyle:M}}),$(L(r),"checkImagesLoad",function(){var o=r.list&&r.list.querySelectorAll&&r.list.querySelectorAll(".slick-slide img")||[],s=o.length,l=0;Array.prototype.forEach.call(o,function(c){var d=function(){return++l&&l>=s&&r.onWindowResized()};if(!c.onclick)c.onclick=function(){return c.parentNode.focus()};else{var u=c.onclick;c.onclick=function(b){u(b),c.parentNode.focus()}}c.onload||(r.props.lazyLoad?c.onload=function(){r.adaptHeight(),r.callbackTimers.push(setTimeout(r.onWindowResized,r.props.speed))}:(c.onload=d,c.onerror=function(){d(),r.props.onLazyLoadError&&r.props.onLazyLoadError()}))})}),$(L(r),"progressiveLazyLoad",function(){for(var o=[],s=O(O({},r.props),r.state),l=r.state.currentSlide;l<r.state.slideCount+(0,A.getPostClones)(s);l++)if(r.state.lazyLoadedList.indexOf(l)<0){o.push(l);break}for(var c=r.state.currentSlide-1;c>=-(0,A.getPreClones)(s);c--)if(r.state.lazyLoadedList.indexOf(c)<0){o.push(c);break}o.length>0?(r.setState(function(d){return{lazyLoadedList:d.lazyLoadedList.concat(o)}}),r.props.onLazyLoad&&r.props.onLazyLoad(o)):r.lazyLoadTimer&&(clearInterval(r.lazyLoadTimer),delete r.lazyLoadTimer)}),$(L(r),"slideHandler",function(o){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=r.props,c=l.asNavFor,d=l.beforeChange,u=l.onLazyLoad,b=l.speed,_=l.afterChange,w=r.state.currentSlide,m=(0,A.slideHandler)(O(O(O({index:o},r.props),r.state),{},{trackRef:r.track,useCSS:r.props.useCSS&&!s})),S=m.state,T=m.nextState;if(S){d&&d(w,S.currentSlide);var p=S.lazyLoadedList.filter(function(x){return r.state.lazyLoadedList.indexOf(x)<0});u&&p.length>0&&u(p),!r.props.waitForAnimate&&r.animationEndCallback&&(clearTimeout(r.animationEndCallback),_&&_(w),delete r.animationEndCallback),r.setState(S,function(){c&&r.asNavForIndex!==o&&(r.asNavForIndex=o,c.innerSlider.slideHandler(o)),T&&(r.animationEndCallback=setTimeout(function(){var x=T.animating,C=ko(T,["animating"]);r.setState(C,function(){r.callbackTimers.push(setTimeout(function(){return r.setState({animating:x})},10)),_&&_(S.currentSlide),delete r.animationEndCallback})},b))})}}),$(L(r),"changeSlide",function(o){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=O(O({},r.props),r.state),c=(0,A.changeSlide)(l,o);if(!(c!==0&&!c)&&(s===!0?r.slideHandler(c,s):r.slideHandler(c),r.props.autoplay&&r.autoPlay("update"),r.props.focusOnSelect)){var d=r.list.querySelectorAll(".slick-current");d[0]&&d[0].focus()}}),$(L(r),"clickHandler",function(o){r.clickable===!1&&(o.stopPropagation(),o.preventDefault()),r.clickable=!0}),$(L(r),"keyHandler",function(o){var s=(0,A.keyHandler)(o,r.props.accessibility,r.props.rtl);s!==""&&r.changeSlide({message:s})}),$(L(r),"selectHandler",function(o){r.changeSlide(o)}),$(L(r),"disableBodyScroll",function(){var o=function(l){l=l||window.event,l.preventDefault&&l.preventDefault(),l.returnValue=!1};window.ontouchmove=o}),$(L(r),"enableBodyScroll",function(){window.ontouchmove=null}),$(L(r),"swipeStart",function(o){r.props.verticalSwiping&&r.disableBodyScroll();var s=(0,A.swipeStart)(o,r.props.swipe,r.props.draggable);s!==""&&r.setState(s)}),$(L(r),"swipeMove",function(o){var s=(0,A.swipeMove)(o,O(O(O({},r.props),r.state),{},{trackRef:r.track,listRef:r.list,slideIndex:r.state.currentSlide}));s&&(s.swiping&&(r.clickable=!1),r.setState(s))}),$(L(r),"swipeEnd",function(o){var s=(0,A.swipeEnd)(o,O(O(O({},r.props),r.state),{},{trackRef:r.track,listRef:r.list,slideIndex:r.state.currentSlide}));if(s){var l=s.triggerSlideHandler;delete s.triggerSlideHandler,r.setState(s),l!==void 0&&(r.slideHandler(l),r.props.verticalSwiping&&r.enableBodyScroll())}}),$(L(r),"touchEnd",function(o){r.swipeEnd(o),r.clickable=!0}),$(L(r),"slickPrev",function(){r.callbackTimers.push(setTimeout(function(){return r.changeSlide({message:"previous"})},0))}),$(L(r),"slickNext",function(){r.callbackTimers.push(setTimeout(function(){return r.changeSlide({message:"next"})},0))}),$(L(r),"slickGoTo",function(o){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(o=Number(o),isNaN(o))return"";r.callbackTimers.push(setTimeout(function(){return r.changeSlide({message:"index",index:o,currentSlide:r.state.currentSlide},s)},0))}),$(L(r),"play",function(){var o;if(r.props.rtl)o=r.state.currentSlide-r.props.slidesToScroll;else if((0,A.canGoNext)(O(O({},r.props),r.state)))o=r.state.currentSlide+r.props.slidesToScroll;else return!1;r.slideHandler(o)}),$(L(r),"autoPlay",function(o){r.autoplayTimer&&clearInterval(r.autoplayTimer);var s=r.state.autoplaying;if(o==="update"){if(s==="hovered"||s==="focused"||s==="paused")return}else if(o==="leave"){if(s==="paused"||s==="focused")return}else if(o==="blur"&&(s==="paused"||s==="hovered"))return;r.autoplayTimer=setInterval(r.play,r.props.autoplaySpeed+50),r.setState({autoplaying:"playing"})}),$(L(r),"pause",function(o){r.autoplayTimer&&(clearInterval(r.autoplayTimer),r.autoplayTimer=null);var s=r.state.autoplaying;o==="paused"?r.setState({autoplaying:"paused"}):o==="focused"?(s==="hovered"||s==="playing")&&r.setState({autoplaying:"focused"}):s==="playing"&&r.setState({autoplaying:"hovered"})}),$(L(r),"onDotsOver",function(){return r.props.autoplay&&r.pause("hovered")}),$(L(r),"onDotsLeave",function(){return r.props.autoplay&&r.state.autoplaying==="hovered"&&r.autoPlay("leave")}),$(L(r),"onTrackOver",function(){return r.props.autoplay&&r.pause("hovered")}),$(L(r),"onTrackLeave",function(){return r.props.autoplay&&r.state.autoplaying==="hovered"&&r.autoPlay("leave")}),$(L(r),"onSlideFocus",function(){return r.props.autoplay&&r.pause("focused")}),$(L(r),"onSlideBlur",function(){return r.props.autoplay&&r.state.autoplaying==="focused"&&r.autoPlay("blur")}),$(L(r),"render",function(){var o=(0,xo.default)("slick-slider",r.props.className,{"slick-vertical":r.props.vertical,"slick-initialized":!0}),s=O(O({},r.props),r.state),l=(0,A.extractObject)(s,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),c=r.props.pauseOnHover;l=O(O({},l),{},{onMouseEnter:c?r.onTrackOver:null,onMouseLeave:c?r.onTrackLeave:null,onMouseOver:c?r.onTrackOver:null,focusOnSelect:r.props.focusOnSelect&&r.clickable?r.selectHandler:null});var d;if(r.props.dots===!0&&r.state.slideCount>=r.props.slidesToShow){var u=(0,A.extractObject)(s,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),b=r.props.pauseOnDotsHover;u=O(O({},u),{},{clickHandler:r.changeSlide,onMouseEnter:b?r.onDotsLeave:null,onMouseOver:b?r.onDotsOver:null,onMouseLeave:b?r.onDotsLeave:null}),d=X.default.createElement(_o.Dots,u)}var _,w,m=(0,A.extractObject)(s,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);m.clickHandler=r.changeSlide,r.props.arrows&&(_=X.default.createElement(Jt.PrevArrow,m),w=X.default.createElement(Jt.NextArrow,m));var S=null;r.props.vertical&&(S={height:r.state.listHeight});var T=null;r.props.vertical===!1?r.props.centerMode===!0&&(T={padding:"0px "+r.props.centerPadding}):r.props.centerMode===!0&&(T={padding:r.props.centerPadding+" 0px"});var p=O(O({},S),T),x=r.props.touchMove,C={className:"slick-list",style:p,onClick:r.clickHandler,onMouseDown:x?r.swipeStart:null,onMouseMove:r.state.dragging&&x?r.swipeMove:null,onMouseUp:x?r.swipeEnd:null,onMouseLeave:r.state.dragging&&x?r.swipeEnd:null,onTouchStart:x?r.swipeStart:null,onTouchMove:r.state.dragging&&x?r.swipeMove:null,onTouchEnd:x?r.touchEnd:null,onTouchCancel:r.state.dragging&&x?r.swipeEnd:null,onKeyDown:r.props.accessibility?r.keyHandler:null},E={className:o,dir:"ltr",style:r.props.style};return r.props.unslick&&(C={className:"slick-list"},E={className:o}),X.default.createElement("div",E,r.props.unslick?"":_,X.default.createElement("div",$e({ref:r.listRefHandler},C),X.default.createElement(Oo.Track,$e({ref:r.trackRefHandler},l),r.props.children)),r.props.unslick?"":w,r.props.unslick?"":d)}),r.list=null,r.track=null,r.state=O(O({},So.default),{},{currentSlide:r.props.initialSlide,targetSlide:r.props.initialSlide?r.props.initialSlide:0,slideCount:X.default.Children.count(r.props.children)}),r.callbackTimers=[],r.clickable=!0,r.debouncedResize=null;var a=r.ssrInit();return r.state=O(O({},r.state),a),r}return jo(n,[{key:"didPropsChange",value:function(r){for(var a=!1,o=0,s=Object.keys(this.props);o<s.length;o++){var l=s[o];if(!r.hasOwnProperty(l)){a=!0;break}if(!(re(r[l])==="object"||typeof r[l]=="function"||isNaN(r[l]))&&r[l]!==this.props[l]){a=!0;break}}return a||X.default.Children.count(this.props.children)!==X.default.Children.count(r.children)}}]),n}(X.default.Component);var $o=function(t){return t.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}).toLowerCase()},Ro=$o,Io=Ro,Do=function(t){var e=/[height|width]$/;return e.test(t)},rr=function(t){var e="",n=Object.keys(t);return n.forEach(function(i,r){var a=t[i];i=Io(i),Do(i)&&typeof a=="number"&&(a=a+"px"),a===!0?e+=i:a===!1?e+="not "+i:e+="("+i+": "+a+")",r<n.length-1&&(e+=" and ")}),e},Ho=function(t){var e="";return typeof t=="string"?t:t instanceof Array?(t.forEach(function(n,i){e+=rr(n),i<t.length-1&&(e+=", ")}),e):rr(t)},No=Ho,ht,nr;function Ao(){if(nr)return ht;nr=1;function t(e){this.options=e,!e.deferSetup&&this.setup()}return t.prototype={constructor:t,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(e){return this.options===e||this.options.match===e}},ht=t,ht}var vt,ir;function Qr(){if(ir)return vt;ir=1;function t(i,r){var a=0,o=i.length,s;for(a;a<o&&(s=r(i[a],a),s!==!1);a++);}function e(i){return Object.prototype.toString.apply(i)==="[object Array]"}function n(i){return typeof i=="function"}return vt={isFunction:n,isArray:e,each:t},vt}var yt,or;function Wo(){if(or)return yt;or=1;var t=Ao(),e=Qr().each;function n(i,r){this.query=i,this.isUnconditional=r,this.handlers=[],this.mql=window.matchMedia(i);var a=this;this.listener=function(o){a.mql=o.currentTarget||o,a.assess()},this.mql.addListener(this.listener)}return n.prototype={constuctor:n,addHandler:function(i){var r=new t(i);this.handlers.push(r),this.matches()&&r.on()},removeHandler:function(i){var r=this.handlers;e(r,function(a,o){if(a.equals(i))return a.destroy(),!r.splice(o,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){e(this.handlers,function(i){i.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var i=this.matches()?"on":"off";e(this.handlers,function(r){r[i]()})}},yt=n,yt}var gt,ar;function qo(){if(ar)return gt;ar=1;var t=Wo(),e=Qr(),n=e.each,i=e.isFunction,r=e.isArray;function a(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}return a.prototype={constructor:a,register:function(o,s,l){var c=this.queries,d=l&&this.browserIsIncapable;return c[o]||(c[o]=new t(o,d)),i(s)&&(s={match:s}),r(s)||(s=[s]),n(s,function(u){i(u)&&(u={match:u}),c[o].addHandler(u)}),this},unregister:function(o,s){var l=this.queries[o];return l&&(s?l.removeHandler(s):(l.clear(),delete this.queries[o])),this}},gt=a,gt}var bt,sr;function Fo(){if(sr)return bt;sr=1;var t=qo();return bt=new t,bt}(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=o(W),n=Ve,i=o(No),r=o(Rt),a=h;function o(y){return y&&y.__esModule?y:{default:y}}function s(y){"@babel/helpers - typeof";return s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(g){return typeof g}:function(g){return g&&typeof Symbol=="function"&&g.constructor===Symbol&&g!==Symbol.prototype?"symbol":typeof g},s(y)}function l(){return l=Object.assign?Object.assign.bind():function(y){for(var g=1;g<arguments.length;g++){var z=arguments[g];for(var k in z)Object.prototype.hasOwnProperty.call(z,k)&&(y[k]=z[k])}return y},l.apply(this,arguments)}function c(y,g){var z=Object.keys(y);if(Object.getOwnPropertySymbols){var k=Object.getOwnPropertySymbols(y);g&&(k=k.filter(function(P){return Object.getOwnPropertyDescriptor(y,P).enumerable})),z.push.apply(z,k)}return z}function d(y){for(var g=1;g<arguments.length;g++){var z=arguments[g]!=null?arguments[g]:{};g%2?c(Object(z),!0).forEach(function(k){E(y,k,z[k])}):Object.getOwnPropertyDescriptors?Object.defineProperties(y,Object.getOwnPropertyDescriptors(z)):c(Object(z)).forEach(function(k){Object.defineProperty(y,k,Object.getOwnPropertyDescriptor(z,k))})}return y}function u(y,g){if(!(y instanceof g))throw new TypeError("Cannot call a class as a function")}function b(y,g){for(var z=0;z<g.length;z++){var k=g[z];k.enumerable=k.enumerable||!1,k.configurable=!0,"value"in k&&(k.writable=!0),Object.defineProperty(y,M(k.key),k)}}function _(y,g,z){return g&&b(y.prototype,g),z&&b(y,z),Object.defineProperty(y,"prototype",{writable:!1}),y}function w(y,g){if(typeof g!="function"&&g!==null)throw new TypeError("Super expression must either be null or a function");y.prototype=Object.create(g&&g.prototype,{constructor:{value:y,writable:!0,configurable:!0}}),Object.defineProperty(y,"prototype",{writable:!1}),g&&m(y,g)}function m(y,g){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(k,P){return k.__proto__=P,k},m(y,g)}function S(y){var g=x();return function(){var k=C(y),P;if(g){var j=C(this).constructor;P=Reflect.construct(k,arguments,j)}else P=k.apply(this,arguments);return T(this,P)}}function T(y,g){if(g&&(s(g)==="object"||typeof g=="function"))return g;if(g!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return p(y)}function p(y){if(y===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return y}function x(){try{var y=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(x=function(){return!!y})()}function C(y){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(z){return z.__proto__||Object.getPrototypeOf(z)},C(y)}function E(y,g,z){return g=M(g),g in y?Object.defineProperty(y,g,{value:z,enumerable:!0,configurable:!0,writable:!0}):y[g]=z,y}function M(y){var g=N(y,"string");return s(g)=="symbol"?g:String(g)}function N(y,g){if(s(y)!="object"||!y)return y;var z=y[Symbol.toPrimitive];if(z!==void 0){var k=z.call(y,g||"default");if(s(k)!="object")return k;throw new TypeError("@@toPrimitive must return a primitive value.")}return(g==="string"?String:Number)(y)}var V=(0,a.canUseDOM)()&&Fo();t.default=function(y){w(z,y);var g=S(z);function z(k){var P;return u(this,z),P=g.call(this,k),E(p(P),"innerSliderRefHandler",function(j){return P.innerSlider=j}),E(p(P),"slickPrev",function(){return P.innerSlider.slickPrev()}),E(p(P),"slickNext",function(){return P.innerSlider.slickNext()}),E(p(P),"slickGoTo",function(j){var ee=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return P.innerSlider.slickGoTo(j,ee)}),E(p(P),"slickPause",function(){return P.innerSlider.pause("paused")}),E(p(P),"slickPlay",function(){return P.innerSlider.autoPlay("play")}),P.state={breakpoint:null},P._responsiveMediaHandlers=[],P}return _(z,[{key:"media",value:function(P,j){V.register(P,j),this._responsiveMediaHandlers.push({query:P,handler:j})}},{key:"componentDidMount",value:function(){var P=this;if(this.props.responsive){var j=this.props.responsive.map(function(Y){return Y.breakpoint});j.sort(function(Y,K){return Y-K}),j.forEach(function(Y,K){var ne;K===0?ne=(0,i.default)({minWidth:0,maxWidth:Y}):ne=(0,i.default)({minWidth:j[K-1]+1,maxWidth:Y}),(0,a.canUseDOM)()&&P.media(ne,function(){P.setState({breakpoint:Y})})});var ee=(0,i.default)({minWidth:j.slice(-1)[0]});(0,a.canUseDOM)()&&this.media(ee,function(){P.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(P){V.unregister(P.query,P.handler)})}},{key:"render",value:function(){var P=this,j,ee;this.state.breakpoint?(ee=this.props.responsive.filter(function(de){return de.breakpoint===P.state.breakpoint}),j=ee[0].settings==="unslick"?"unslick":d(d(d({},r.default),this.props),ee[0].settings)):j=d(d({},r.default),this.props),j.centerMode&&(j.slidesToScroll>1,j.slidesToScroll=1),j.fade&&(j.slidesToShow>1,j.slidesToScroll>1,j.slidesToShow=1,j.slidesToScroll=1);var Y=e.default.Children.toArray(this.props.children);Y=Y.filter(function(de){return typeof de=="string"?!!de.trim():!!de}),j.variableWidth&&(j.rows>1||j.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),j.variableWidth=!1);for(var K=[],ne=null,Q=0;Q<Y.length;Q+=j.rows*j.slidesPerRow){for(var lt=[],ie=Q;ie<Q+j.rows*j.slidesPerRow;ie+=j.slidesPerRow){for(var Nt=[],te=ie;te<ie+j.slidesPerRow&&(j.variableWidth&&Y[te].props.style&&(ne=Y[te].props.style.width),!(te>=Y.length));te+=1)Nt.push(e.default.cloneElement(Y[te],{key:100*Q+10*ie+te,tabIndex:-1,style:{width:"".concat(100/j.slidesPerRow,"%"),display:"inline-block"}}));lt.push(e.default.createElement("div",{key:10*Q+ie},Nt))}j.variableWidth?K.push(e.default.createElement("div",{key:Q,style:{width:ne}},lt)):K.push(e.default.createElement("div",{key:Q},lt))}if(j==="unslick"){var sn="regular slider "+(this.props.className||"");return e.default.createElement("div",{className:sn},Y)}else K.length<=j.slidesToShow&&!j.infinite&&(j.unslick=!0);return e.default.createElement(n.InnerSlider,l({style:this.props.style,ref:this.innerSliderRefHandler},(0,a.filterSettings)(j)),K)}}]),z}(e.default.Component)})(gr);(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=n(gr);function n(i){return i&&i.__esModule?i:{default:i}}t.default=e.default})(yr);const Yo=hn(yr),Xo=R(vn)`
  color: #ffd700;
  font-size: 1.6rem;
`,Bo=R(yn)`
  color: #ffd700;
  font-size: 1.6rem;
`;function Vo({full:t}){return v.jsx(v.Fragment,{children:t?v.jsx(Xo,{}):v.jsx(Bo,{})})}const Uo=R.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 0.1rem;
`,Go=R.div`
  display: flex;
  align-items: center;
  gap: 2px;
  width: 100%;
`;function Ko({stars:t}){return v.jsx(Go,{children:v.jsx(Uo,{children:Array.from({length:5},(e,n)=>v.jsx(Vo,{full:t>=n+1},crypto.randomUUID()))})})}const Qo=R.div`
  background-color: ${t=>t.theme.colors.headerBgColor};
  padding: 2.4rem;
  border-radius: 1.4rem;
  margin: 0 1rem;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`,Zo=R.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 1.2rem;
`,Jo=R.span`
  font-size: 3rem;
  color: #01be96;
  opacity: 0.7;
`,lr=R.p`
  font-family: ${J};
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  color: ${t=>t.theme.colors.mainTextColorLowOp};
`,ea=R.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: 4rem;
    height: 4rem;
    border-radius: 50px;
    object-fit: cover;
  }
`,ta=R.h3`
  font-family: ${J};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${t=>t.theme.colors.mainTextColor};
`,ra=t=>{const{name:e,position:n,img_url:i,stars:r,rentalExperience:a}=t.item;return v.jsxs(Qo,{children:[v.jsxs(Zo,{children:[v.jsx(lr,{children:a}),v.jsx(Jo,{children:v.jsx(gn,{})})]}),v.jsx(Ko,{stars:r}),v.jsxs(ea,{children:[v.jsx("img",{src:i,alt:e}),v.jsxs("div",{children:[v.jsx(ta,{children:e}),v.jsx(lr,{children:n})]})]})]})},na=[{name:"Richard Newton",position:"entrepreneur",img_url:"https://randomuser.me/api/portraits/men/1.jpg",stars:5,rentalExperience:"Had an amazing experience renting a luxurious car for a business trip. The process was smooth, and the car was in top-notch condition. Definitely using the service again!"},{name:"John Michel",position:"designer",img_url:"https://randomuser.me/api/portraits/men/22.jpg",stars:4,rentalExperience:"As a designer, I appreciate stylish rides. The car selection was fantastic, and the rental process was hassle-free. Had a great time exploring the city!"},{name:"Emma Thompson",position:"web developer",img_url:"https://randomuser.me/api/portraits/women/35.jpg",stars:5,rentalExperience:"Smooth and efficient! Renting a car for a road trip was a breeze. The website's user-friendly interface made the whole experience delightful."},{name:"Olivia Davis",position:"marketing specialist",img_url:"https://randomuser.me/api/portraits/women/44.jpg",stars:5,rentalExperience:"Top-notch service! The car was delivered on time, and the customer support was excellent. Highly recommended Cruise Wheels for all your travel needs."},{name:"Jack Johnson",position:"software engineer",img_url:"https://randomuser.me/api/portraits/men/44.jpg",stars:5,rentalExperience:"Renting a car couldn't have been easier. The selection is diverse, and the prices are competitive. Will definitely use the service again!"}];var ia=v.Fragment;function q(t,e,n){return bn.call(e,"css")?v.jsx(Sn,wn(t,e),n):v.jsx(t,e,n)}var oa=Object.defineProperty,aa=(t,e,n)=>e in t?oa(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,xe=(t,e,n)=>(aa(t,typeof e!="symbol"?e+"":e,n),n),Et=new Map,Oe=new WeakMap,cr=0,sa=void 0;function la(t){return t?(Oe.has(t)||(cr+=1,Oe.set(t,cr.toString())),Oe.get(t)):"0"}function ca(t){return Object.keys(t).sort().filter(e=>t[e]!==void 0).map(e=>`${e}_${e==="root"?la(t.root):t[e]}`).toString()}function ua(t){const e=ca(t);let n=Et.get(e);if(!n){const i=new Map;let r;const a=new IntersectionObserver(o=>{o.forEach(s=>{var l;const c=s.isIntersecting&&r.some(d=>s.intersectionRatio>=d);t.trackVisibility&&typeof s.isVisible>"u"&&(s.isVisible=c),(l=i.get(s.target))==null||l.forEach(d=>{d(c,s)})})},t);r=a.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),n={id:e,observer:a,elements:i},Et.set(e,n)}return n}function Zr(t,e,n={},i=sa){if(typeof window.IntersectionObserver>"u"&&i!==void 0){const l=t.getBoundingClientRect();return e(i,{isIntersecting:i,target:t,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),()=>{}}const{id:r,observer:a,elements:o}=ua(n),s=o.get(t)||[];return o.has(t)||o.set(t,s),s.push(e),a.observe(t),function(){s.splice(s.indexOf(e),1),s.length===0&&(o.delete(t),a.unobserve(t)),o.size===0&&(a.disconnect(),Et.delete(r))}}function fa(t){return typeof t.children!="function"}var ur=class extends W.Component{constructor(t){super(t),xe(this,"node",null),xe(this,"_unobserveCb",null),xe(this,"handleNode",e=>{this.node&&(this.unobserve(),!e&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=e||null,this.observeNode()}),xe(this,"handleChange",(e,n)=>{e&&this.props.triggerOnce&&this.unobserve(),fa(this.props)||this.setState({inView:e,entry:n}),this.props.onChange&&this.props.onChange(e,n)}),this.state={inView:!!t.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(t){(t.rootMargin!==this.props.rootMargin||t.root!==this.props.root||t.threshold!==this.props.threshold||t.skip!==this.props.skip||t.trackVisibility!==this.props.trackVisibility||t.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:t,root:e,rootMargin:n,trackVisibility:i,delay:r,fallbackInView:a}=this.props;this._unobserveCb=Zr(this.node,this.handleChange,{threshold:t,root:e,rootMargin:n,trackVisibility:i,delay:r},a)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:t}=this.props;if(typeof t=="function"){const{inView:_,entry:w}=this.state;return t({inView:_,entry:w,ref:this.handleNode})}const{as:e,triggerOnce:n,threshold:i,root:r,rootMargin:a,onChange:o,skip:s,trackVisibility:l,delay:c,initialInView:d,fallbackInView:u,...b}=this.props;return W.createElement(e||"div",{ref:this.handleNode,...b},t)}};function Jr({threshold:t,delay:e,trackVisibility:n,rootMargin:i,root:r,triggerOnce:a,skip:o,initialInView:s,fallbackInView:l,onChange:c}={}){var d;const[u,b]=W.useState(null),_=W.useRef(),[w,m]=W.useState({inView:!!s,entry:void 0});_.current=c,W.useEffect(()=>{if(o||!u)return;let x;return x=Zr(u,(C,E)=>{m({inView:C,entry:E}),_.current&&_.current(C,E),E.isIntersecting&&a&&x&&(x(),x=void 0)},{root:r,rootMargin:i,threshold:t,trackVisibility:n,delay:e},l),()=>{x&&x()}},[Array.isArray(t)?t.toString():t,u,r,i,a,o,n,l,e]);const S=(d=w.entry)==null?void 0:d.target,T=W.useRef();!u&&S&&!a&&!o&&T.current!==S&&(T.current=S,m({inView:!!s,entry:void 0}));const p=[b,w.inView,w.entry];return p.ref=p[0],p.inView=p[1],p.entry=p[2],p}var en={exports:{}},D={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dt=Symbol.for("react.element"),Ht=Symbol.for("react.portal"),Ze=Symbol.for("react.fragment"),Je=Symbol.for("react.strict_mode"),et=Symbol.for("react.profiler"),tt=Symbol.for("react.provider"),rt=Symbol.for("react.context"),da=Symbol.for("react.server_context"),nt=Symbol.for("react.forward_ref"),it=Symbol.for("react.suspense"),ot=Symbol.for("react.suspense_list"),at=Symbol.for("react.memo"),st=Symbol.for("react.lazy"),pa=Symbol.for("react.offscreen"),tn;tn=Symbol.for("react.module.reference");function G(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Dt:switch(t=t.type,t){case Ze:case et:case Je:case it:case ot:return t;default:switch(t=t&&t.$$typeof,t){case da:case rt:case nt:case st:case at:case tt:return t;default:return e}}case Ht:return e}}}D.ContextConsumer=rt;D.ContextProvider=tt;D.Element=Dt;D.ForwardRef=nt;D.Fragment=Ze;D.Lazy=st;D.Memo=at;D.Portal=Ht;D.Profiler=et;D.StrictMode=Je;D.Suspense=it;D.SuspenseList=ot;D.isAsyncMode=function(){return!1};D.isConcurrentMode=function(){return!1};D.isContextConsumer=function(t){return G(t)===rt};D.isContextProvider=function(t){return G(t)===tt};D.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Dt};D.isForwardRef=function(t){return G(t)===nt};D.isFragment=function(t){return G(t)===Ze};D.isLazy=function(t){return G(t)===st};D.isMemo=function(t){return G(t)===at};D.isPortal=function(t){return G(t)===Ht};D.isProfiler=function(t){return G(t)===et};D.isStrictMode=function(t){return G(t)===Je};D.isSuspense=function(t){return G(t)===it};D.isSuspenseList=function(t){return G(t)===ot};D.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Ze||t===et||t===Je||t===it||t===ot||t===pa||typeof t=="object"&&t!==null&&(t.$$typeof===st||t.$$typeof===at||t.$$typeof===tt||t.$$typeof===rt||t.$$typeof===nt||t.$$typeof===tn||t.getModuleId!==void 0)};D.typeOf=G;en.exports=D;var ma=en.exports;f`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;f`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;f`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;f`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;f`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;f`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;f`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;f`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;f`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;f`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;f`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;f`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;f`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;f`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;f`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;f`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;f`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;f`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;const rn=f`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;f`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;f`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;f`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;f`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;f`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;f`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;f`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function ha({duration:t=1e3,delay:e=0,timingFunction:n="ease",keyframes:i=rn,iterationCount:r=1}){return vr`
    animation-duration: ${t}ms;
    animation-timing-function: ${n};
    animation-delay: ${e}ms;
    animation-name: ${i};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${r};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function va(t){return t==null}function ya(t){return typeof t=="string"||typeof t=="number"||typeof t=="boolean"}function nn(t,e){return n=>n?t():e()}function me(t){return nn(t,()=>null)}function Mt(t){return me(()=>({opacity:0}))(t)}const on=t=>{const{cascade:e=!1,damping:n=.5,delay:i=0,duration:r=1e3,fraction:a=0,keyframes:o=rn,triggerOnce:s=!1,className:l,style:c,childClassName:d,childStyle:u,children:b,onVisibilityChange:_}=t,w=W.useMemo(()=>ha({keyframes:o,duration:r}),[r,o]);return va(b)?null:ya(b)?q(ba,{...t,animationStyles:w,children:String(b)}):ma.isFragment(b)?q(an,{...t,animationStyles:w}):q(ia,{children:W.Children.map(b,(m,S)=>{if(!W.isValidElement(m))return null;const T=i+(e?S*r*n:0);switch(m.type){case"ol":case"ul":return q(ct,{children:({cx:p})=>q(m.type,{...m.props,className:p(l,m.props.className),style:Object.assign({},c,m.props.style),children:q(on,{...t,children:m.props.children})})});case"li":return q(ur,{threshold:a,triggerOnce:s,onChange:_,children:({inView:p,ref:x})=>q(ct,{children:({cx:C})=>q(m.type,{...m.props,ref:x,className:C(d,m.props.className),css:me(()=>w)(p),style:Object.assign({},u,m.props.style,Mt(!p),{animationDelay:T+"ms"})})})});default:return q(ur,{threshold:a,triggerOnce:s,onChange:_,children:({inView:p,ref:x})=>q("div",{ref:x,className:l,css:me(()=>w)(p),style:Object.assign({},c,Mt(!p),{animationDelay:T+"ms"}),children:q(ct,{children:({cx:C})=>q(m.type,{...m.props,className:C(d,m.props.className),style:Object.assign({},u,m.props.style)})})})})}})})},ga={display:"inline-block",whiteSpace:"pre"},ba=t=>{const{animationStyles:e,cascade:n=!1,damping:i=.5,delay:r=0,duration:a=1e3,fraction:o=0,triggerOnce:s=!1,className:l,style:c,children:d,onVisibilityChange:u}=t,{ref:b,inView:_}=Jr({triggerOnce:s,threshold:o,onChange:u});return nn(()=>q("div",{ref:b,className:l,style:Object.assign({},c,ga),children:d.split("").map((w,m)=>q("span",{css:me(()=>e)(_),style:{animationDelay:r+m*a*i+"ms"},children:w},m))}),()=>q(an,{...t,children:d}))(n)},an=t=>{const{animationStyles:e,fraction:n=0,triggerOnce:i=!1,className:r,style:a,children:o,onVisibilityChange:s}=t,{ref:l,inView:c}=Jr({triggerOnce:i,threshold:n,onChange:s});return q("div",{ref:l,className:r,css:me(()=>e)(c),style:Object.assign({},a,Mt(!c)),children:o})};f`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;f`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;f`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;f`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;f`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;f`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;f`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;f`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;f`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;f`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;f`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;f`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`;f`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`;f`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`;f`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`;f`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`;f`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`;f`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`;f`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`;f`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`;f`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`;f`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`;f`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;f`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;f`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;f`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;f`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;f`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;f`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;f`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;f`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;f`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;f`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;f`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;f`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;f`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;f`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;f`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;f`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;f`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;f`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;f`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;const Sa=f`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,wa=f`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,xa=f`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Oa=f`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,_a=f`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,Ta=f`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,ka=f`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,Ca=f`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;function Pa(t,e){switch(e){case"down":return t?_a:Sa;case"right":return t?ka:xa;case"up":return t?Ca:Oa;case"left":default:return t?Ta:wa}}const ja=t=>{const{direction:e,reverse:n=!1,...i}=t,r=W.useMemo(()=>Pa(n,e),[e,n]);return q(on,{keyframes:r,...i})};f`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;f`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;f`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;f`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;f`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;f`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;f`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;f`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;f`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;f`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;const Ea=R.div`
  max-width: 128rem;
  margin: 4.8rem auto;
  padding: 2.4rem;
  width: 100%;

  @media (min-width: 840px) {
    width: 80%;
  }

  @media (min-width: 1200px) {
    width: 100%;
  }

  h1 {
    padding-top: 1rem;
    text-transform: capitalize;
  }

  .slick-list,
  .slick-slider,
  .slick-track {
    padding: 0;
  }

  .slick-dots {
    text-align: left;
    margin-left: 1rem;
  }

  .slick-dots li button:before {
    content: "";
  }

  .slick-dots li button {
    width: 9px;
    height: 4px;
    background: linear-gradient(
      159deg,
      rgb(45, 45, 58) 0%,
      rgb(43, 43, 53) 100%
    );
    padding: 0.1rem;
    margin-top: 1rem;
    transition: all 400ms ease-in-out;
    border-radius: 50px;
  }

  .slick-dots li.slick-active button {
    background: ${t=>t.theme.colors.accentColor};
    width: 15px;
  }

  .slick-dots li {
    margin: 0;
  }
`,Ma=R.span`
  font-family: ${J};
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.28571;
  color: ${t=>t.theme.colors.mainTextColor};
`,za=R.h2`
  font-family: ${J};
  font-weight: 500;
  font-size: 4.4rem;
  line-height: 1.09091;
  letter-spacing: -0.02em;
  color: ${t=>t.theme.colors.mainTextColor};
`,La=R.div`
  margin-top: 2rem;
  position: relative;
`,$a=R.div`
  position: absolute;
  right: 0.7rem;
  bottom: -2.4rem;

  button {
    background-color: transparent;
    margin-left: 0.5rem;
    border: none;
    color: ${t=>t.theme.colors.accentColor};
    cursor: pointer;
    font-size: 1.4rem;
  }

  @media (max-width: 530px) {
    display: none;
  }
`;var Ra={dots:!0,infinite:!0,speed:500,slidesToShow:3,slidesToScroll:1,initialSlide:0,arrows:!1,responsive:[{breakpoint:990,settings:{slidesToShow:2,slidesToScroll:1,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:1,initialSlide:2}},{breakpoint:530,settings:{slidesToShow:1,slidesToScroll:1}}]};const Ia=()=>{const t=W.useRef(null);return v.jsxs(Ea,{children:[v.jsxs(ja,{direction:"left",children:[v.jsx(Ma,{children:"TESTIMONIALS"}),v.jsx(za,{children:"WHAT CLIENTS SAY"})]}),v.jsxs(La,{children:[v.jsx(Yo,{ref:t,...Ra,children:na.map((e,n)=>v.jsx(ra,{item:e},n))}),v.jsxs($a,{children:[v.jsx("button",{onClick:()=>t.current.slickPrev(),children:v.jsx(xn,{})}),v.jsx("button",{onClick:()=>t.current.slickNext(),children:v.jsx(On,{})})]})]})]})},Da=R.div`
  min-height: calc(100vh - 6rem);
  height: 100%;
  margin: 0 auto;
`,Ha=R.div`
  position: relative;
  width: 100%;
  min-height: calc(100vh - 6rem);
  background: url(${Cn});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left;
  z-index: 1;
  padding: 1.2rem 0 1.2rem 1.2rem;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: end;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgb(0, 0, 0, 0.5), rgb(0, 0, 0, 0.5) 0);
    opacity: 0.7;
    z-index: -5;
  }

  @media (min-width: 375px) {
    padding: 1.2rem;
  }

  @media (min-width: 620px) {
    align-items: end;
  }

  @media (min-width: 768px) {
    padding: 3.2rem;
    overflow: visible;
    justify-content: end;
  }

  @media (min-width: 1440px) {
    padding: 3.2rem;

    align-items: end;
    justify-content: end;
  }
`,Na=R.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  padding: 2.4rem;
  margin-bottom: 4.8rem;
  width: 60rem;
  height: 100%;

  background-color: ${t=>t.theme.colors.heroBgLowOp};
  border-radius: 1.2rem;
  backdrop-filter: blur(5px);

  @media (min-width: 768px) {
    margin-bottom: 0;
    /* width: 82.6rem; */
  }

  @media (min-width: 1440px) {
    width: 82.6rem;
  }
`,Aa=R.h1`
  font-family: ${J};
  font-weight: 400;
  font-size: 18px;
  line-height: 1;
  color: ${t=>t.theme.colors.lightWhiteColor};

  @media (min-width: 768px) {
    font-size: 32px;
  }

  @media (min-width: 1440px) {
    font-size: 48px;
  }
`,Wa=R.span`
  font-size: 24px;
  font-weight: 500;
  color: ${t=>t.theme.colors.accentColor};

  position: relative;
  z-index: 200;

  @media (min-width: 768px) {
    font-size: 36px;
  }

  @media (min-width: 1440px) {
    font-size: 54px;
  }
`,qa=R.p`
  color: ${t=>t.theme.colors.lightWhiteColor};
  font-family: ${J};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.33333;
  letter-spacing: -0.02em;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`,Fa=R(_n)`
  background: none;
  outline: none;
  border: none;
  padding: 1.2rem 3.2rem;
  border-radius: 1.2rem;
  color: ${t=>t.theme.colors.white};
  background-color: ${t=>t.theme.colors.accentColor};
  transition: all var(--primary-transition);

  &:hover {
    background-color: ${t=>t.theme.colors.accentColorHover};
  }
`;function Ba(){return v.jsxs(v.Fragment,{children:[v.jsx(Tn,{children:v.jsxs(kn,{children:[v.jsx("title",{children:"Cruise Wheels - Home Page"}),v.jsx("meta",{name:"description",content:"Unlock boundless journeys with Cruise Wheels. Rent a car in style, comfort, and confidence. Explore extraordinary adventures with our premium car rental services."}),v.jsx("meta",{name:"keywords",content:"car rental, adventure travel, stylish cars, comfortable journeys, Cruise Wheels, premium rental services"})]})}),v.jsxs(Da,{children:[v.jsx(Ha,{children:v.jsxs(Na,{children:[v.jsxs(Aa,{children:["Drive Your Dreams: Explore the World with"," ",v.jsx(Wa,{children:"Cruise Wheels"})," Rental Cars"]}),v.jsx(qa,{children:"Welcome to Cruise Wheels, where every road leads to adventure. CruiseWheels is more than just a rental – it's a gateway to experiences beyond the ordinary. Cruise in style, comfort, and confidence, making every mile a story. Your unforgettable adventure begins with CruiseWheels – Your Drive, Your Experience."}),v.jsx("div",{style:{textAlign:"end"},children:v.jsx(Fa,{to:"catalog",children:"View our Catalog"})})]})}),v.jsx(Gn,{}),v.jsx(Ia,{})]})]})}export{Ba as default};
