(function(t){function e(e){for(var a,o,i=e[0],s=e[1],l=e[2],d=0,b=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&b.push(r[o][0]),r[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);u&&u(e);while(b.length)b.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],a=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(a=!1)}a&&(c.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},c=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=s;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"00f4":function(t,e,n){},"040f":function(t,e,n){"use strict";var a=n("892d"),r=n.n(a);r.a},"0979":function(t,e,n){t.exports=n.p+"img/project-baresharp.47b465a8.jpg"},"0e9f":function(t,e,n){},"11ee":function(t,e,n){},"129d":function(t,e,n){"use strict";var a=n("e57c"),r=n.n(a);r.a},"18e8":function(t,e,n){},"1bcf":function(t,e,n){},"1cf4":function(t,e,n){},2114:function(t,e,n){t.exports=n.p+"img/project-voiced.f411add7.jpg"},"26e6":function(t,e,n){"use strict";var a=n("00f4"),r=n.n(a);r.a},"29b7":function(t,e,n){"use strict";var a=n("5ebe"),r=n.n(a);r.a},"30c3":function(t,e,n){"use strict";var a=n("1bcf"),r=n.n(a);r.a},3687:function(t,e,n){"use strict";var a=n("d08f"),r=n.n(a);r.a},"3a65":function(t,e,n){"use strict";var a=n("f78f"),r=n.n(a);r.a},"3c6c":function(t,e,n){},"4b7e":function(t,e,n){t.exports=n.p+"img/project-dotfiles.13c56ab0.jpg"},"5ebe":function(t,e,n){},6003:function(t,e,n){"use strict";var a=n("11ee"),r=n.n(a);r.a},"622c":function(t,e,n){},"796c":function(t,e,n){t.exports=n.p+"img/digital-ocean.eeaefc71.png"},"892d":function(t,e,n){},"922b":function(t,e,n){"use strict";var a=n("f567"),r=n.n(a);r.a},"97d6":function(t,e,n){"use strict";var a=n("18e8"),r=n.n(a);r.a},a4d6:function(t,e,n){t.exports=n.p+"img/thumb-plank.107a63dd.jpg"},aba7:function(t,e,n){"use strict";var a=n("0e9f"),r=n.n(a);r.a},b14c:function(t,e,n){"use strict";var a=n("e520"),r=n.n(a);r.a},b369:function(t,e,n){},ba8c:function(t,e,n){},bcc3:function(t,e,n){"use strict";var a=n("3c6c"),r=n.n(a);r.a},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a,r=n("2b0e"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{inverted:t.darkmodeModule.isEnabled},attrs:{id:"app"}},[n("DarkmodeWatcher"),n("router-view")],1)},o=[],i=n("d4ec"),s=n("bee2"),l=n("262e"),u=n("2caf"),d=n("9ab4"),b=n("60a3"),f=n("6fc5"),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"darkmode-watcher"})},p=[],h="STATE_CHANGE",j=function(t){Object(l["a"])(n,t);var e=Object(u["a"])(n);function n(){var t;return Object(i["a"])(this,n),t=e.apply(this,arguments),t.enabled=!1,t}return Object(s["a"])(n,[{key:a=h,value:function(t){this.enabled=t}},{key:"enable",value:function(){return!0}},{key:"disable",value:function(){return!1}},{key:"isEnabled",get:function(){return this.enabled}}]),n}(f["d"]);Object(d["a"])([f["c"]],j.prototype,a,null),Object(d["a"])([Object(f["a"])({commit:h})],j.prototype,"enable",null),Object(d["a"])([Object(f["a"])({commit:h})],j.prototype,"disable",null),j=Object(d["a"])([Object(f["b"])({name:"Darkmode",namespaced:!0})],j);var m=j,O=function(t){Object(l["a"])(n,t);var e=Object(u["a"])(n);function n(){var t;return Object(i["a"])(this,n),t=e.apply(this,arguments),t.DARK="(prefers-color-scheme: dark)",t.LIGHT="(prefers-color-scheme: light)",t.onChangeListener=function(e){var n=e.matches,a=e.media;return t.onChange(n,a)},t}return Object(s["a"])(n,[{key:"created",value:function(){this.darkmodeModule=Object(f["e"])(m,this.$store)}},{key:"mounted",value:function(){if(window.matchMedia){var t=window.matchMedia(this.DARK),e=window.matchMedia(this.LIGHT);t.addListener(this.onChangeListener),e.addListener(this.onChangeListener),this.onChange(e.matches,e.media),this.onChange(t.matches,t.media)}}},{key:"beforeDestroy",value:function(){window.matchMedia&&(window.matchMedia(this.LIGHT).removeListener(this.onChangeListener),window.matchMedia(this.DARK).removeListener(this.onChangeListener))}},{key:"onChange",value:function(t,e){var n,a;if(t)switch(e){case this.DARK:null===(n=this.darkmodeModule)||void 0===n||n.enable();break;case this.LIGHT:null===(a=this.darkmodeModule)||void 0===a||a.disable();break}}}]),n}(b["c"]);O=Object(d["a"])([b["a"]],O);var g=O,y=g,_=n("2877"),k=Object(_["a"])(y,v,p,!1,null,null,null),w=k.exports,C=function(t){Object(l["a"])(n,t);var e=Object(u["a"])(n);function n(){return Object(i["a"])(this,n),e.apply(this,arguments)}return Object(s["a"])(n,[{key:"created",value:function(){this.darkmodeModule=Object(f["e"])(m,this.$store)}}]),n}(b["c"]);C=Object(d["a"])([Object(b["a"])({components:{DarkmodeWatcher:w}})],C);var E=C,x=E,D=(n("ed05"),Object(_["a"])(x,c,o,!1,null,"45655ec2",null)),T=D.exports,P=(n("7db0"),n("4160"),n("a630"),n("d81d"),n("fb6a"),n("b64b"),n("3ca3"),n("159b"),n("8c4f")),I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("Overscroll",{attrs:{message:"I love cats"}}),n("Hero",{attrs:{background:t.thumbOverview,scroll:t.scrollOffset,inverted:t.darkmodeModule.isEnabled},scopedSlots:t._u([{key:"navigation",fn:function(){return[n("Navigation",[n("NavigationItem",{attrs:{href:"#about"}},[t._v("ABOUT ME")]),n("NavigationItem",{attrs:{href:"#projects"}},[t._v("PROJECTS")]),n("NavigationItem",{attrs:{href:"https://resume.jkruskie.com"}},[t._v("RESUME")])],1)]},proxy:!0},{key:"elevator",fn:function(){return[n("Elevator")]},proxy:!0}])}),n("Page",{attrs:{anchor:"about",inverted:t.darkmodeModule.isEnabled}},[n("TwoColumn",{scopedSlots:t._u([{key:"left",fn:function(){return[n("About",{scopedSlots:t._u([{key:"about",fn:function(){return[n("strong",[t._v("I'm a computer science student")]),t._v(" at Saginaw Valley State University and I work for a crane rental company. During my spare time I like to create awesome apps and take photos, of which you can find a selection below, other stuff can be found on my GitHub. ")]},proxy:!0},{key:"technologies",fn:function(){return[n("Devicon",{attrs:{icon:"vuejs-plain"}}),n("Devicon",{attrs:{icon:"laravel-plain"}}),n("Devicon",{attrs:{icon:"sass-original"}}),n("Devicon",{attrs:{icon:"typescript-original"}}),n("Devicon",{attrs:{icon:"javascript-plain"}}),n("Devicon",{attrs:{icon:"csharp-line"}}),n("Devicon",{attrs:{icon:"php-plain"}})]},proxy:!0}])})]},proxy:!0},{key:"right",fn:function(){return[n("Contact",{attrs:{email:"justin@jkruskie.com",discord:"ImJK#8937",discordserver:"https://discord.gg/vNNu9km"}})]},proxy:!0}])})],1),n("Page",{attrs:{background:t.thumbPlank,inverted:t.darkmodeModule.isEnabled}}),n("Page",{attrs:{anchor:"projects",inverted:t.darkmodeModule.isEnabled}},[n("Projects",[n("Project",{attrs:{thumbnail:t.projectVoicED,title:"VoicED AAC",description:"Assisted speech application for nonverbal individuals.",href:"https://github.com/jkruskie/VoicED-AAC-Web"}},[n("ProjectTag",{attrs:{language:"PHP",icon:"php-plain"}})],1)],1)],1),n("Footer",{attrs:{inverted:t.darkmodeModule.isEnabled}})],1)},S=[],$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["overscroll",{invisible:t.scrollTop>0}]},[n("p",{staticClass:"overscroll-message",domProps:{innerHTML:t._s(t.message)}})])},M=[],L=function(t){Object(l["a"])(n,t);var e=Object(u["a"])(n);function n(){var t;return Object(i["a"])(this,n),t=e.apply(this,arguments),t.scrollTop=0,t}return Object(s["a"])(n,[{key:"mounted",value:function(){window.addEventListener("scroll",this.onScroll,{passive:!0})}},{key:"beforeDestroy",value:function(){window.removeEventListener("scroll",this.onScroll)}},{key:"onScroll",value:function(){var t=document.documentElement;this.scrollTop=(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}}]),n}(b["c"]);Object(d["a"])([Object(b["b"])({required:!0})],L.prototype,"message",void 0),L=Object(d["a"])([b["a"]],L);var A=L,H=A,N=(n("3687"),Object(_["a"])(H,$,M,!1,null,"7d1b1465",null)),B=N.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("About Me")]),n("p",{staticClass:"about-content"},[t._t("about")],2),n("h2",[t._v("Technology Stack")]),n("DeviconList",[t._t("technologies")],2)],1)},R=[],J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"devicon-list"},[t._t("default")],2)},q=[],z=function(t){Object(l["a"])(n,t);var e=Object(u["a"])(n);function n(){return Object(i["a"])(this,n),e.apply(this,arguments)}return n}(b["c"]);z=Object(d["a"])([b["a"]],z);var G=z,V=G,F=(n("26e6"),Object(_["a"])(V,J,q,!1,null,"1520247a",null)),U=F.exports,W=function(t){Object(l["a"])(n,t);var e=Object(u["a"])(n);function n(){return Object(i["a"])(this,n),e.apply(this,arguments)}return n}(b["c"]);W=Object(d["a"])([Object(b["a"])({components:{DeviconList:U}})],W);var Y=W,Q=Y,X=(n("b14c"),Object(_["a"])(Q,K,R,!1,null,"d875400e",null)),Z=X.exports,tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contact"},[n("h2",[t._v("Contact")]),n("p",[void 0!==t.email?n("span",[t._v(" Email: "),n("a",{attrs:{href:"mailto:"+t.email}},[t._v(t._s(t.email))])]):t._e(),void 0!==t.phone?n("span",[t._v(" Phone: "),n("a",{attrs:{href:"tel:"+t.phone.replace(/\s/g,"")}},[t._v("‪"+t._s(t.phone)+"‬")])]):t._e(),void 0!==t.discord?n("span",[t._v(" Discord: "),n("a",[t._v("‪"+t._s(t.discord)+"‬")])]):t._e()])])},et=[],nt=function(t){Object(l["a"])(n,t);var e=Object(u["a"])(n);function n(){return Object(i["a"])(this,n),e.apply(this,arguments)}return n}(b["c"]);Object(d["a"])([Object(b["b"])()],nt.prototype,"email",void 0),Object(d["a"])([Object(b["b"])()],nt.prototype,"phone",void 0),Object(d["a"])([Object(b["b"])()],nt.prototype,"discord",void 0),Object(d["a"])([Object(b["b"])()],nt.prototype,"discordserver",void 0),nt=Object(d["a"])([b["a"]],nt);var at=nt,rt=at,ct=(n("aba7"),Object(_["a"])(rt,tt,et,!1,null,"2ad781af",null)),ot=ct.exports,it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("i",{class:["devicon","devicon-"+t.icon]})},st=[],lt=function(t){Object(l["a"])(n,t);var e=Object(u["a"])(n);function n(){return Object(i["a"])(this,n),e.apply(this,arguments)}return n}(b["c"]);Object(d["a"])([Object(b["b"])()],lt.prototype,"icon",void 0),lt=Object(d["a"])([b["a"]],lt);var ut=lt,dt=ut,bt=(n("6003"),Object(_["a"])(dt,it,st,!1,null,"3a4c2eb4",null)),ft=bt.exports,vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"elevator"},[n("img",{staticClass:"elevator-image",attrs:{src:"https://en.gravatar.com/avatar/a3d329edf71cc06c5a0479965cca0bd5.jpeg?size=1024",alt:"Gravatar"}}),t._m(0),n("div",{staticClass:"elevator-links"},[n("a",{attrs:{href:"https://github.com/jkruskie",target:"_blank",rel:"noopener noreferrer"}},[n("font-awesome-icon",{attrs:{icon:t.githubIcon}})],1),n("a",{attrs:{href:"https://www.linkedin.com/in/justinkruskie/",target:"_blank",rel:"noopener noreferrer"}},[n("font-awesome-icon",{attrs:{icon:t.linkedinIcon}})],1),n("a",{attrs:{href:"https://discord.gg/vNNu9km",target:"_blank",rel:"noopener noreferrer"}},[n("font-awesome-icon",{attrs:{icon:t.discordIcon}})],1)])])},pt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"elevator-description"},[n("h1",[t._v("Justin Kruskie")]),n("h2",[t._v(" Freelance Developer ")])])}],ht=n("ad3d"),jt=n("f2d1"),mt=function(t){Object(l["a"])(n,t);var e=Object(u["a"])(n);function n(){var t;return Object(i["a"])(this,n),t=e.apply(this,arguments),t.githubIcon=jt["b"],t.linkedinIcon=jt["c"],t.discordIcon=jt["a"],t}return n}(b["c"]);mt=Object(d["a"])([Object(b["a"])({components:{FontAwesomeIcon:ht["a"]}})],mt);var Ot=mt,gt=Ot,yt=(n("3a65"),Object(_["a"])(gt,vt,pt,!1,null,"355a366e",null)),_t=yt.exports,kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{class:["hero",{inverted:t.inverted}]},[n("div",{staticClass:"hero-background",style:t.backgroundStyles}),n("div",{staticClass:"hero-foreground"},[n("div",{staticClass:"hero-navigation"},[t._t("navigation")],2),n("div",{staticClass:"hero-elevator"},[t._t("elevator")],2)])])},wt=[],Ct=(n("99af"),function(t){Object(l["a"])(n,t);var e=Object(u["a"])(n);function n(){return Object(i["a"])(this,n),e.apply(this,arguments)}return Object(s["a"])(n,[{key:"backgroundStyles",get:function(){return{backgroundImage:"url(".concat(this.background,")"),backgroundPositionY:"-".concat(this.scroll,"px"),backgroundSize:this.scale?"calc(100% * ".concat(this.scale,")"):null,filter:"blur(".concat(this.blur,"px) grayscale(").concat(this.grayscale,"%)"),opacity:this.opacity}}}]),n}(b["c"]));Object(d["a"])([Object(b["b"])({default:!1})],Ct.prototype,"inverted",void 0),Object(d["a"])([Object(b["b"])()],Ct.prototype,"background",void 0),Object(d["a"])([Object(b["b"])({default:0})],Ct.prototype,"scroll",void 0),Object(d["a"])([Object(b["b"])()],Ct.prototype,"scale",void 0),Object(d["a"])([Object(b["b"])({default:2})],Ct.prototype,"blur",void 0),Object(d["a"])([Object(b["b"])({default:100})],Ct.prototype,"grayscale",void 0),Object(d["a"])([Object(b["b"])({default:.1})],Ct.prototype,"opacity",void 0),Ct=Object(d["a"])([b["a"]],Ct);var Et=Ct,xt=Et,Dt=(n("040f"),Object(_["a"])(xt,kt,wt,!1,null,"0c3d9b94",null)),Tt=Dt.exports,Pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{class:["page",{inverted:t.inverted}],style:t.rootStyles,attrs:{id:t.anchor}},[n("div",{class:["page-container",{inverted:t.inverted}]},[t._t("default")],2)])},It=[],St=function(t){Object(l["a"])(n,t);var e=Object(u["a"])(n);function n(){var t;return Object(i["a"])(this,n),t=e.apply(this,arguments),t.blur="blur(2px)",t.grayscale="grayscale(100%)",t.windowHeight=0,t.footerHeight=0,t}return Object(s["a"])(n,[{key:"mounted",value:function(){screen&&(window.addEventListener("resize",this.onResize),this.onResize())}},{key:"onResize",value:function(){this.windowHeight=window.innerHeight,this.footerHeight=document.getElementsByTagName("footer")[0].offsetHeight}},{key:"rootStyles",get:function(){return{backgroundImage:this.background?"url(".concat(this.background,")"):null,filter:this.blur&&this.grayscale&&this.background&&this.inverted?"contrast(140%)":null,opacity:this.background&&this.inverted?"0.4":null,minHeight:this.screen?"calc(".concat(this.windowHeight,"px - ").concat(this.footerHeight,"px)"):null}}}]),n}(b["c"]);Object(d["a"])([Object(b["b"])()],St.prototype,"anchor",void 0),Object(d["a"])([Object(b["b"])({default:!1})],St.prototype,"inverted",void 0),Object(d["a"])([Object(b["b"])()],St.prototype,"background",void 0),Object(d["a"])([Object(b["b"])()],St.prototype,"blur",void 0),Object(d["a"])([Object(b["b"])()],St.prototype,"grayscale",void 0),Object(d["a"])([Object(b["b"])({default:!1})],St.prototype,"screen",void 0),St=Object(d["a"])([b["a"]],St);var $t=St,Mt=$t,Lt=(n("129d"),Object(_["a"])(Mt,Pt,It,!1,null,null,null)),At=Lt.exports,Ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"projects"},[n("h1",[t._v("Recent Projects")]),t._m(0),n("div",{staticClass:"projects-container"},[t._t("default")],2)])},Nt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",[t._v(" Some of my "),n("span",[t._v("apps")]),t._v(", "),n("span",[t._v("disasters")]),t._v(" and "),n("span",[t._v("other")]),t._v(" stuff that I've worked on. ")])}],Bt=function(t){Object(l["a"])(n,t);var e=Object(u["a"])(n);function n(){return Object(i["a"])(this,n),e.apply(this,arguments)}return n}(b["c"]);Bt=Object(d["a"])([b["a"]],Bt);var Kt=Bt,Rt=Kt,Jt=(n("bcc3"),Object(_["a"])(Rt,Ht,Nt,!1,null,"87073a92",null)),qt=Jt.exports,zt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"project"},[n("a",{attrs:{href:t.href?t.href:null,target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:t.thumbnail,alt:t.title+" thumbnail"}}),n("div",{staticClass:"project-content"},[n("h2",[t._v(t._s(t.title))]),n("h3",[t._v(t._s(t.description))]),n("div",{staticClass:"project-tags"},[t._t("default")],2)])])])},Gt=[],Vt=function(t){Object(l["a"])(n,t);var e=Object(u["a"])(n);function n(){return Object(i["a"])(this,n),e.apply(this,arguments)}return n}(b["c"]);Object(d["a"])([Object(b["b"])({required:!0})],Vt.prototype,"thumbnail",void 0),Object(d["a"])([Object(b["b"])({required:!0})],Vt.prototype,"title",void 0),Object(d["a"])([Object(b["b"])({required:!0})],Vt.prototype,"description",void 0),Object(d["a"])([Object(b["b"])()],Vt.prototype,"href",void 0),Vt=Object(d["a"])([b["a"]],Vt);var Ft=Vt,Ut=Ft,Wt=(n("dbdf"),Object(_["a"])(Ut,zt,Gt,!1,null,"4a30cf16",null)),Yt=Wt.exports,Qt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["project-tag",t.languageClass]},[n("Devicon",{attrs:{icon:t.icon}}),n("span",[t._v(t._s(t.language))])],1)},Xt=[],Zt=(n("ac1f"),n("5319"),function(t){Object(l["a"])(n,t);var e=Object(u["a"])(n);function n(){return Object(i["a"])(this,n),e.apply(this,arguments)}return Object(s["a"])(n,[{key:"languageClass",get:function(){return this.language.toLowerCase().replace("#","-sharp")}}]),n}(b["c"]));Object(d["a"])([Object(b["b"])({required:!0})],Zt.prototype,"language",void 0),Object(d["a"])([Object(b["b"])({required:!0})],Zt.prototype,"icon",void 0),Zt=Object(d["a"])([Object(b["a"])({components:{Devicon:ft}})],Zt);var te=Zt,ee=te,ne=(n("922b"),Object(_["a"])(ee,Qt,Xt,!1,null,"23eede5a",null)),ae=ne.exports,re=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"two-column"},[n("div",{staticClass:"two-column-left"},[t._t("left")],2),n("div",{staticClass:"two-column-right"},[t._t("right")],2)])},ce=[],oe=function(t){Object(l["a"])(n,t);var e=Object(u["a"])(n);function n(){return Object(i["a"])(this,n),e.apply(this,arguments)}return n}(b["c"]);oe=Object(d["a"])([b["a"]],oe);var ie=oe,se=ie,le=(n("97d6"),Object(_["a"])(se,re,ce,!1,null,null,null)),ue=le.exports,de=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{class:["footer",{inverted:t.inverted}]},[n("div",{staticClass:"footer-container"},[n("section",{staticClass:"footer-imprint"},[n("h1",[n("Brand")],1),t._m(0)]),t._m(1)])])},be=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("span",[t._v("Copyright © 2021 J. Kruskie, LLC")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"footer-provider"},[n("a",{attrs:{href:"https://www.abuseipdb.com/user/36024",title:"AbuseIPDB is an IP address blacklist for webmasters and sysadmins to report IP addresses engaging in abusive behavior on their networks",alt:"AbuseIPDB Contributor Badge"}},[n("img",{staticStyle:{width:"15rem"},attrs:{src:"https://www.abuseipdb.com/contributor/36024.svg"}})])])}],fe=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ve=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"brand"},[n("strong",[t._v("Justin")]),t._v(" Kruskie")])}],pe=function(t){Object(l["a"])(n,t);var e=Object(u["a"])(n);function n(){return Object(i["a"])(this,n),e.apply(this,arguments)}return n}(b["c"]);pe=Object(d["a"])([b["a"]],pe);var he=pe,je=he,me=(n("29b7"),Object(_["a"])(je,fe,ve,!1,null,"1aa32ef6",null)),Oe=me.exports,ge=n("796c"),ye=n.n(ge),_e=function(t){Object(l["a"])(n,t);var e=Object(u["a"])(n);function n(){var t;return Object(i["a"])(this,n),t=e.apply(this,arguments),t.digitalocean=ye.a,t}return n}(b["c"]);Object(d["a"])([Object(b["b"])({default:!1})],_e.prototype,"inverted",void 0),_e=Object(d["a"])([Object(b["a"])({components:{Brand:Oe}})],_e);var ke=_e,we=ke,Ce=(n("30c3"),Object(_["a"])(we,de,be,!1,null,"064b5f10",null)),Ee=Ce.exports,xe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navigation"},[n("div",{staticClass:"navigation-container"},[n("a",{attrs:{href:"/"}},[n("Brand")],1),n("ul",{staticClass:"navigation-items"},[t._t("default")],2)])])},De=[],Te=function(t){Object(l["a"])(n,t);var e=Object(u["a"])(n);function n(){return Object(i["a"])(this,n),e.apply(this,arguments)}return n}(b["c"]);Te=Object(d["a"])([Object(b["a"])({components:{Brand:Oe}})],Te);var Pe=Te,Ie=Pe,Se=(n("d1f7"),Object(_["a"])(Ie,xe,De,!1,null,"c27e8f34",null)),$e=Se.exports,Me=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"navigation-item"},[n("a",{attrs:{href:t.href},on:{click:function(e){return e.preventDefault(),t.onClick(e)}}},[t._t("default")],2)])},Le=[],Ae=(n("caad"),n("2532"),n("1276"),function(t){Object(l["a"])(n,t);var e=Object(u["a"])(n);function n(){return Object(i["a"])(this,n),e.apply(this,arguments)}return Object(s["a"])(n,[{key:"onClick",value:function(t){var e=t.currentTarget;if(e.href.includes("#")){var n=e.href.split("#")[1],a=document.getElementById(n);null!==a&&a.scrollIntoView({behavior:"smooth"})}else window.open(e.href)}}]),n}(b["c"]));Object(d["a"])([Object(b["b"])({required:!0})],Ae.prototype,"href",void 0),Ae=Object(d["a"])([b["a"]],Ae);var He=Ae,Ne=He,Be=(n("ce43"),Object(_["a"])(Ne,Me,Le,!1,null,"0f47cc9c",null)),Ke=Be.exports,Re=n("e53d"),Je=n.n(Re),qe=n("a4d6"),ze=n.n(qe),Ge=n("2114"),Ve=n.n(Ge),Fe=n("4b7e"),Ue=n.n(Fe),We=n("0979"),Ye=n.n(We),Qe=function(t){Object(l["a"])(n,t);var e=Object(u["a"])(n);function n(){var t;return Object(i["a"])(this,n),t=e.apply(this,arguments),t.thumbOverview=Je.a,t.thumbPlank=ze.a,t.projectVoicED=Ve.a,t.projectDotfiles=Ue.a,t.projectBaresharp=Ye.a,t.scrollTop=0,t}return Object(s["a"])(n,[{key:"created",value:function(){this.darkmodeModule=Object(f["e"])(m,this.$store)}},{key:"mounted",value:function(){window.addEventListener("scroll",this.onScroll,{passive:!0})}},{key:"beforeDestroy",value:function(){window.removeEventListener("scroll",this.onScroll)}},{key:"onScroll",value:function(){var t=document.documentElement;this.scrollTop=(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}},{key:"scrollOffset",get:function(){return.2*this.scrollTop}}]),n}(b["c"]);Qe=Object(d["a"])([Object(b["a"])({components:{Hero:Tt,Elevator:_t,About:Z,Contact:ot,Devicon:ft,Page:At,TwoColumn:ue,Projects:qt,Project:Yt,ProjectTag:ae,Footer:Ee,Overscroll:B,Navigation:$e,NavigationItem:Ke}})],Qe);var Xe=Qe,Ze=Xe,tn=Object(_["a"])(Ze,I,S,!1,null,null,null),en=tn.exports;r["a"].use(P["a"]);var nn=[{path:"/",name:"Home",component:en,meta:{title:"Justin Kruskie",metaTags:[{name:"description",content:"Justin Kruskie's Portfolio"}]}}],an=new P["a"]({mode:"history",base:"/",routes:nn});an.beforeEach((function(t,e,n){var a=t.matched.slice().reverse().find((function(t){return t.meta&&t.meta.title})),r=t.matched.slice().reverse().find((function(t){return t.meta&&t.meta.metaTags}));if(a&&(document.title=a.meta.title),Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map((function(t){var e;return null===(e=t.parentNode)||void 0===e?void 0:e.removeChild(t)})),!r)return n();r.meta.metaTags.map((function(t){var e=document.createElement("meta");return Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])})),e.setAttribute("data-vue-router-controlled",""),e})).forEach((function(t){return document.head.appendChild(t)})),n()}));var rn=an,cn=n("2f62");r["a"].use(cn["a"]);var on=new cn["a"].Store({state:{},mutations:{},actions:{},modules:{Darkmode:m}});n("ba8c");r["a"].config.productionTip=!1,new r["a"]({router:rn,store:on,render:function(t){return t(T)}}).$mount("#app")},ce43:function(t,e,n){"use strict";var a=n("d908"),r=n.n(a);r.a},d08f:function(t,e,n){},d1f7:function(t,e,n){"use strict";var a=n("1cf4"),r=n.n(a);r.a},d908:function(t,e,n){},dbdf:function(t,e,n){"use strict";var a=n("622c"),r=n.n(a);r.a},e520:function(t,e,n){},e53d:function(t,e,n){t.exports=n.p+"img/thumb-razer.cb9be384.jpg"},e57c:function(t,e,n){},ed05:function(t,e,n){"use strict";var a=n("b369"),r=n.n(a);r.a},f567:function(t,e,n){},f78f:function(t,e,n){}});
//# sourceMappingURL=app.09eebaf0.js.map