(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{BR8T:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return n("YbiN")}])},YFqc:function(t,e,n){t.exports=n("cTJO")},YbiN:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),o=n.n(r),i=n("nogs"),a=o.a.createElement;e.default=function(){return a(i.a,{pageTitle:"Blog"},a("div",null,"Blogs"))}},cTJO:function(t,e,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),i=n("7W2i"),a=n("a1gu"),s=n("Nsbk");function c(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=s(t);if(e){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}var l=n("TqRt"),f=n("284h");e.__esModule=!0,e.default=void 0;var u,p=f(n("q1tI")),h=n("QmWs"),d=n("g/15"),v=l(n("nOHt")),g=n("elyg");function y(t){return t&&"object"===typeof t?(0,d.formatWithValidation)(t):t}var m=new Map,w=window.IntersectionObserver,b={};function x(){return u||(w?u=new w((function(t){t.forEach((function(t){if(m.has(t.target)){var e=m.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(u.unobserve(t.target),m.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0)}var k=function(t){i(n,t);var e=c(n);function n(t){var o;return r(this,n),(o=e.call(this,t)).p=void 0,o.cleanUpListeners=function(){},o.formatUrls=function(t){var e=null,n=null,r=null;return function(o,i){if(r&&o===e&&i===n)return r;var a=t(o,i);return e=o,n=i,r=a,a}}((function(t,e){return{href:(0,g.addBasePath)(y(t)),as:e?(0,g.addBasePath)(y(e)):e}})),o.linkClicked=function(t){var e=t.currentTarget,n=e.nodeName,r=e.target;if("A"!==n||!(r&&"_self"!==r||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=o.formatUrls(o.props.href,o.props.as),a=i.href,s=i.as;if(function(t){var e=(0,h.parse)(t,!1,!0),n=(0,h.parse)((0,d.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===n.protocol&&e.host===n.host}(a)){var c=window.location.pathname;a=(0,h.resolve)(c,a),s=s?(0,h.resolve)(c,s):a,t.preventDefault();var l=o.props.scroll;null==l&&(l=s.indexOf("#")<0),v.default[o.props.replace?"replace":"push"](a,s,{shallow:o.props.shallow}).then((function(t){t&&l&&(window.scrollTo(0,0),document.body.focus())}))}}},o.p=!1!==t.prefetch,o}return o(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as),n=e.href,r=e.as,o=(0,h.resolve)(t,n);return[o,r?(0,h.resolve)(t,r):o]}},{key:"handleRef",value:function(t){var e=this;this.p&&w&&t&&t.tagName&&(this.cleanUpListeners(),b[this.getPaths().join("%")]||(this.cleanUpListeners=function(t,e){var n=x();return n?(n.observe(t),m.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}m.delete(t)}):function(){}}(t,(function(){e.prefetch()}))))}},{key:"prefetch",value:function(t){if(this.p){var e=this.getPaths();v.default.prefetch(e[0],e[1],t).catch((function(t){0})),b[e.join("%")]=!0}}},{key:"render",value:function(){var t=this,e=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof e&&(e=p.default.createElement("a",null,e));var i=p.Children.only(e),a={ref:function(e){t.handleRef(e),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(e):"object"===typeof i.ref&&(i.ref.current=e))},onMouseEnter:function(e){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(e),t.prefetch({priority:!0})},onClick:function(e){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(a.href=o||r),p.default.cloneElement(i,a)}}]),n}(p.Component);e.default=k},nogs:function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r),i=n("YFqc"),a=n.n(i),s=o.a.createElement,c=function(t){var e=t.text,n=(t.selected,t.color),r=t.to,o=r||"/",i=s("span",{style:{color:n,fontSize:14,borderBottom:"1px solid ".concat(n),paddingBottom:3,cursor:"pointer"}},e),c=o.includes("http")?s("a",{href:o,style:{textDecoration:"none"}},i):s(a.a,{href:r},i);return s("div",{style:{marginBottom:8}},c)},l="#6236FF",f="#0091FF",u=o.a.createElement,p=function(t){return u("div",{style:{width:130,height:269,padding:"22px 31px",border:"5px solid black"}},u("div",{style:{fontSize:28}},u(a.a,{href:"/"},u("span",{style:{cursor:"pointer"}},"Mitalee Desai"))),u("div",{style:{marginTop:20}},u(c,{text:"Blog",color:f,to:"/blog"}),u(c,{text:"Projects",color:f,to:"/projects"}),u(c,{text:"How To",color:f,to:"/workflows"})),u("div",{style:{marginTop:30}},u(c,{text:"Github",color:l,to:"https://github.com/discoduckling"}),u(c,{text:"LinkedIn",color:l,to:"https://www.linkedin.com/in/msmitalee/"}),u(c,{text:"Twitter",color:l,to:"https://twitter.com/_mitalee"})))},h=o.a.createElement,d=function(t){var e=t.text;return h("span",{style:{fontSize:54,borderBottom:"3px solid black",width:"100%",paddingBottom:5}},e)},v=o.a.createElement;e.a=function(t){var e=t.pageTitle;return v("div",{style:{display:"flex",padding:30,fontFamily:"Helvetica, sans-serif"}},v(p,null),v("div",{style:{padding:"0px 45px"}},v(d,{text:e}),v("div",{style:{marginTop:60,paddingLeft:50}},t.children)))}}},[["BR8T",0,2,1]]]);