webpackJsonp([1],{"7zck":function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("7+uW"),n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("v-toolbar",{attrs:{app:"","clipped-left":t.clipped}},[i("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),i("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),t._v(" "),i("v-spacer")],1),t._v(" "),i("v-content",[i("router-view")],1),t._v(" "),i("v-navigation-drawer",{attrs:{persistent:"","mini-variant":t.miniVariant,clipped:t.clipped,"enable-resize-watcher":"",fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[i("v-img",{attrs:{"aspect-ratio":16/9,src:"https://cdn.vuetifyjs.com/images/parallax/material.jpg"}},[i("v-layout",{staticClass:"lightbox white--text",attrs:{"pa-2":"",column:"","fill-height":""}},[i("v-spacer"),t._v(" "),i("v-flex",{attrs:{shrink:""}},[i("div",{staticClass:"subheading"},[t._v("BeomChul.Shin")]),t._v(" "),i("div",{staticClass:"body-1"},[t._v("sbc0830g@gmail.com")])])],1)],1),t._v(" "),i("v-list",[i("v-expansion-panel",t._l(t.items,function(e,a){return i("v-expansion-panel-content",{key:a,attrs:{ripple:"",expand:"true"}},[i("div",{attrs:{slot:"header"},slot:"header"},[i("div",[t._v(t._s(e.title))])]),t._v(" "),i("v-list",[t._l(t.items,function(e,a){return[e.divider?i("v-divider",{key:a}):i("v-list-tile",{key:e.title,staticClass:"grey lighten-3"},[i("v-list-tile-action",[i("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),i("v-list-tile-title",[t._v(t._s(e.title))])],1)]})],2)],1)}))],1)],1)],1)},staticRenderFns:[]},r=i("VU/8")({data:function(){return{clipped:!1,drawer:!1,fixed:!1,items:[{icon:"bubble_chart",title:"Home"},{icon:"bubble_chart",title:"동영상"},{icon:"bubble_chart",title:"포럼"},{icon:"bubble_chart",title:"자유게시판"},{icon:"bubble_chart",title:"Q&A"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"God"}},name:"App"},n,!1,null,null,null).exports,s=i("3EgV"),l=i.n(s),o=i("/ocq"),c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hello"},[i("v-card",[i("v-container",{attrs:{fluid:"","grid-list-md":""}},[i("v-layout",{attrs:{row:"",wrap:""}},t._l(t.cards,function(e){return i("v-flex",t._b({key:e.title},"v-flex",((a={})["xs"+e.flex]=!0,a),!1),[i("v-card",{attrs:{ripple:""}},[i("v-img",{attrs:{src:e.src,height:"150px"}},[i("v-container",{attrs:{"fill-height":"",fluid:"","pa-2":""}},[i("v-layout",{attrs:{"fill-height":""}},[i("v-flex",{attrs:{xs12:"","align-end":"",flexbox:""}},[i("span",{staticClass:"headline white--text",domProps:{textContent:t._s(e.title)}})])],1)],1)],1),t._v(" "),i("v-card-actions",[i("v-spacer"),t._v(" "),i("v-btn",{attrs:{icon:""}},[i("v-icon",[t._v("favorite")])],1),t._v(" "),i("v-btn",{attrs:{icon:""}},[i("v-icon",[t._v("bookmark")])],1),t._v(" "),i("v-btn",{attrs:{icon:""}},[i("v-icon",[t._v("share")])],1)],1)],1)],1);var a}))],1)],1),t._v(" "),i("v-footer",{attrs:{fixed:t.fixed}},[i("div",[t._v("  Footer - @2018 godBeom.Ltd  "+t._s(t.msg))])])],1)},staticRenderFns:[]};var v=i("VU/8")({data:function(){return{cards:[{title:"홈 인테리어",src:"https://cdn.vuetifyjs.com/images/cards/house.jpg",flex:6},{title:"아웃도어",src:"https://cdn.vuetifyjs.com/images/cards/road.jpg",flex:6},{title:"여행",src:"https://cdn.vuetifyjs.com/images/cards/plane.jpg",flex:12},{title:"루프탑",src:"https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",flex:6},{title:"woman",src:"https://cdn.vuetifyjs.com/images/lists/ali.png",flex:6}]}}},c,!1,function(t){i("oZ55")},"data-v-1b3a81d5",null).exports,d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hello"},[e("h1",[this._v(this._s(this.msg))])])},staticRenderFns:[]};var p=i("VU/8")({name:"Login",data:function(){return{msg:"로그인 페이지"}}},d,!1,function(t){i("l8ew")},"data-v-3676140f",null).exports;a.default.use(l.a),a.default.use(o.a);var u=new o.a({mode:"hash",routes:[{path:"/",name:"Home",component:v},{path:"/login",name:"login",component:p}]});i("7zck");a.default.config.productionTip=!1,new a.default({el:"#app",router:u,components:{App:r},template:"<App/>"})},l8ew:function(t,e){},oZ55:function(t,e){}},["NHnr"]);