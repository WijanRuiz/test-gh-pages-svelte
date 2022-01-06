import{S,i as V,s as C,e as b,v as A,j as O,t as L,c as k,a as w,w as B,l as T,g as M,d,b as m,K as N,f as E,x as D,L as _,M as H,h as R,p as v,n as $,A as I,N as Y,m as q,o as K,O as U,P as Z}from"./vendor-47e42e2c.js";import{I as P}from"./icon-ea667a57.js";function z(o,e,l){const r=o.slice();return r[9]=e[l],r[10]=e,r[11]=l,r}function F(o){let e,l=o[9].text+"",r;return{c(){e=b("div"),r=L(l),this.h()},l(t){e=k(t,"DIV",{class:!0});var a=w(e);r=M(a,l),a.forEach(d),this.h()},h(){m(e,"class","text-sm absolute block text-white rounded-md bg-gray-700 p-2 shadow-xl left-16 ml-1"),N(e,"hidden",!o[9].displayTooltip)},m(t,a){E(t,e,a),_(e,r)},p(t,a){a&2&&l!==(l=t[9].text+"")&&R(r,l),a&2&&N(e,"hidden",!t[9].displayTooltip)},d(t){t&&d(e)}}}function G(o){let e,l,r,t,a=o[9].text+"",f,s,n,i,c,u,y,x;l=new P({props:{icon:o[9].icon}});let p=!o[0]&&F(o);function W(){return o[5](o[9],o[10],o[11])}function X(){return o[6](o[9],o[10],o[11])}return{c(){e=b("a"),A(l.$$.fragment),r=O(),t=b("span"),f=L(a),s=O(),p&&p.c(),n=O(),this.h()},l(g){e=k(g,"A",{class:!0,href:!0});var h=w(e);B(l.$$.fragment,h),r=T(h),t=k(h,"SPAN",{class:!0});var j=w(t);f=M(j,a),j.forEach(d),s=T(h),p&&p.l(h),n=T(h),h.forEach(d),this.h()},h(){m(t,"class","transition ease-in-out delay-500 duration-500 inline-block ml-4"),N(t,"hidden",!o[0]),m(e,"class",i="p-3 width-max flex hover:bg-slate-300 content-center "+o[2]),m(e,"href",c=o[9].link)},m(g,h){E(g,e,h),D(l,e,null),_(e,r),_(e,t),_(t,f),_(e,s),p&&p.m(e,null),_(e,n),u=!0,y||(x=[H(e,"mouseover",W),H(e,"mouseleave",X),H(e,"focus",te)],y=!0)},p(g,h){o=g;const j={};h&2&&(j.icon=o[9].icon),l.$set(j),(!u||h&2)&&a!==(a=o[9].text+"")&&R(f,a),h&1&&N(t,"hidden",!o[0]),o[0]?p&&(p.d(1),p=null):p?p.p(o,h):(p=F(o),p.c(),p.m(e,n)),(!u||h&4&&i!==(i="p-3 width-max flex hover:bg-slate-300 content-center "+o[2]))&&m(e,"class",i),(!u||h&2&&c!==(c=o[9].link))&&m(e,"href",c)},i(g){u||(v(l.$$.fragment,g),u=!0)},o(g){$(l.$$.fragment,g),u=!1},d(g){g&&d(e),I(l),p&&p.d(),y=!1,Y(x)}}}function ee(o){let e,l,r,t=o[1],a=[];for(let s=0;s<t.length;s+=1)a[s]=G(z(o,t,s));const f=s=>$(a[s],1,1,()=>{a[s]=null});return{c(){e=b("nav");for(let s=0;s<a.length;s+=1)a[s].c();this.h()},l(s){e=k(s,"NAV",{class:!0});var n=w(e);for(let i=0;i<a.length;i+=1)a[i].l(n);n.forEach(d),this.h()},h(){m(e,"class",l="transition-all duration-500 top-14 left-0 fixed border-slate-300 border-2 "+o[3]+" h-full")},m(s,n){E(s,e,n);for(let i=0;i<a.length;i+=1)a[i].m(e,null);r=!0},p(s,[n]){if(n&7){t=s[1];let i;for(i=0;i<t.length;i+=1){const c=z(s,t,i);a[i]?(a[i].p(c,n),v(a[i],1)):(a[i]=G(c),a[i].c(),v(a[i],1),a[i].m(e,null))}for(q(),i=t.length;i<a.length;i+=1)f(i);K()}(!r||n&8&&l!==(l="transition-all duration-500 top-14 left-0 fixed border-slate-300 border-2 "+s[3]+" h-full"))&&m(e,"class",l)},i(s){if(!r){for(let n=0;n<t.length;n+=1)v(a[n]);r=!0}},o(s){a=a.filter(Boolean);for(let n=0;n<a.length;n+=1)$(a[n]);r=!1},d(s){s&&d(e),U(a,s)}}}const te=()=>{};function le(o,e,l){let r,t,{navOpen:a}=e,{app:f=!1}=e,n=[{text:"Home",link:"/",icon:"home",displayTooltip:!1,app:!1},{text:"About",link:"/about",icon:"information-cicle",displayTooltip:!1,app:!1},{text:"Todos",link:"/app/todos",icon:"clipboard-check",displayTooltip:!1,app:!0}].filter(u=>u.app==f);const i=(u,y,x)=>l(1,y[x].displayTooltip=!0,n),c=(u,y,x)=>l(1,y[x].displayTooltip=!1,n);return o.$$set=u=>{"navOpen"in u&&l(0,a=u.navOpen),"app"in u&&l(4,f=u.app)},o.$$.update=()=>{o.$$.dirty&1&&l(3,r=a?"w-[12vw]":"w-[3vw]"),o.$$.dirty&1&&l(2,t=a?"justify-left":"justify-center")},[a,n,t,r,f,i,c]}class ce extends S{constructor(e){super();V(this,e,le,ee,C,{navOpen:0,app:4})}}function J(o,e,l){const r=o.slice();return r[3]=e[l],r}function ne(o){let e;return{c(){e=b("span"),this.h()},l(l){e=k(l,"SPAN",{class:!0}),w(e).forEach(d),this.h()},h(){m(e,"class","animate-ping h-2 w-2 absolute ml-6 top-2 inline-flex rounded-full bg-teal-300")},m(l,r){E(l,e,r)},d(l){l&&d(e)}}}function Q(o){let e,l,r,t,a,f;l=new P({props:{icon:o[3].icon}});let s=o[3].ping&&ne();return{c(){e=b("a"),A(l.$$.fragment),r=O(),s&&s.c(),t=O(),this.h()},l(n){e=k(n,"A",{class:!0,href:!0});var i=w(e);B(l.$$.fragment,i),r=T(i),s&&s.l(i),t=T(i),i.forEach(d),this.h()},h(){m(e,"class","mx-1 p-3 rounded-full text-white hover:bg-indigo-600"),m(e,"href",a=o[3].link)},m(n,i){E(n,e,i),D(l,e,null),_(e,r),s&&s.m(e,null),_(e,t),f=!0},p:Z,i(n){f||(v(l.$$.fragment,n),f=!0)},o(n){$(l.$$.fragment,n),f=!1},d(n){n&&d(e),I(l),s&&s.d()}}}function ae(o){let e,l,r=o[0],t=[];for(let f=0;f<r.length;f+=1)t[f]=Q(J(o,r,f));const a=f=>$(t[f],1,1,()=>{t[f]=null});return{c(){e=b("div");for(let f=0;f<t.length;f+=1)t[f].c();this.h()},l(f){e=k(f,"DIV",{class:!0});var s=w(e);for(let n=0;n<t.length;n+=1)t[n].l(s);s.forEach(d),this.h()},h(){m(e,"class","w-full h-full flex flex-row flex-wrap items-center justify-end mr-3")},m(f,s){E(f,e,s);for(let n=0;n<t.length;n+=1)t[n].m(e,null);l=!0},p(f,[s]){if(s&1){r=f[0];let n;for(n=0;n<r.length;n+=1){const i=J(f,r,n);t[n]?(t[n].p(i,s),v(t[n],1)):(t[n]=Q(i),t[n].c(),v(t[n],1),t[n].m(e,null))}for(q(),n=r.length;n<t.length;n+=1)a(n);K()}},i(f){if(!l){for(let s=0;s<r.length;s+=1)v(t[s]);l=!0}},o(f){t=t.filter(Boolean);for(let s=0;s<t.length;s+=1)$(t[s]);l=!1},d(f){f&&d(e),U(t,f)}}}function oe(o,e,l){let{app:r}=e,a=[{text:"Mensajes",icon:"inbox",link:"/app/messages",ping:!0,app:!0},{text:"Notificaciones",icon:"bell",link:"/app/notifications",ping:!1,app:!0},{text:"logout",icon:"logout",link:"/auth/logout",ping:!1,app:!0},{text:"Login",icon:"login",link:"/auth/login",ping:!1,app:!1},{text:"SignUp",icon:"user-add",link:"/auth/signup",ping:!1,app:!1}].filter(f=>f.app==r);return o.$$set=f=>{"app"in f&&l(1,r=f.app)},[a,r]}class se extends S{constructor(e){super();V(this,e,oe,ae,C,{app:1})}}function ie(o){let e,l,r,t,a,f,s,n;return r=new P({props:{icon:"menu"}}),a=new se({props:{app:o[0]}}),{c(){e=b("header"),l=b("div"),A(r.$$.fragment),t=O(),A(a.$$.fragment),this.h()},l(i){e=k(i,"HEADER",{class:!0});var c=w(e);l=k(c,"DIV",{class:!0});var u=w(l);B(r.$$.fragment,u),u.forEach(d),t=T(c),B(a.$$.fragment,c),c.forEach(d),this.h()},h(){m(l,"class","cursor-pointer mt-2 ml-3 h-10 w-10 hover:bg-indigo-600 text-white rounded-full p-2"),m(e,"class","h-14 bg-indigo-500 flex")},m(i,c){E(i,e,c),_(e,l),D(r,l,null),_(e,t),D(a,e,null),f=!0,s||(n=H(l,"click",o[1]),s=!0)},p(i,[c]){const u={};c&1&&(u.app=i[0]),a.$set(u)},i(i){f||(v(r.$$.fragment,i),v(a.$$.fragment,i),f=!0)},o(i){$(r.$$.fragment,i),$(a.$$.fragment,i),f=!1},d(i){i&&d(e),I(r),I(a),s=!1,n()}}}function re(o,e,l){let{app:r=!1}=e,{navOpen:t}=e;function a(){l(2,t=!t)}return o.$$set=f=>{"app"in f&&l(0,r=f.app),"navOpen"in f&&l(2,t=f.navOpen)},[r,a,t]}class pe extends S{constructor(e){super();V(this,e,re,ie,C,{app:0,navOpen:2})}}export{pe as H,ce as N};
