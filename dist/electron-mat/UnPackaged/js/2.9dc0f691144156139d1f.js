webpackJsonp([2],{ObU3:function(t,e,s){var a=s("X2v6");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,s("rjj0").default)("53ff0334",a,!1,{})},X2v6:function(t,e,s){(t.exports=s("FZ+f")(!1)).push([t.i,"\nimg.avatar[data-v-7a2b6835] {\n\twidth: 150px;\n\theight: 150px;\n\tborder-radius: 50%;\n\tbox-shadow: 0 1px 3px rgba(0, 0, 0, 0.2), 0 1px 1px rgba(0, 0, 0, 0.14),\n\t\t0 2px 1px -1px rgba(0, 0, 0, 0.12);\n\tvertical-align: middle;\n}\n.panel-heading[data-v-7a2b6835] {\n\tbackground: #8fbcbb;\n}\n.panel-footer[data-v-7a2b6835] {\n\tbackground: #ffffff;\n}\n.q-item-side[data-v-7a2b6835] {\n\twidth: 120px;\n\tcolor: #8fbcbb;\n}\n",""])},qKQV:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={name:"Profile",data:function(){return{errors:[]}},computed:{userIsAuthenticated:function(){return null!==this.$store.getters.user&&void 0!==this.$store.getters.user},user:function(){return this.$store.getters.user},error:function(){return this.$store.getters.error},loading:function(){return this.$store.getters.loading}},watch:{user:function(t){console.log(t),null!=t&&void 0!=t||console.log("lost user")}},methods:{}},i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{staticClass:"row justify-center",attrs:{padding:""}},[s("div",{staticStyle:{width:"800px","max-width":"90vw"},attrs:{"v-if":t.userIsAuthenticated}},[s("q-tabs",{attrs:{inverted:"",color:"secondary",align:"justify"}},[s("q-tab",{attrs:{slot:"title",default:"",name:"mails",icon:"business",label:"Basic Info"},slot:"title"}),t._v(" "),s("q-tab",{attrs:{slot:"title",name:"alarms",icon:"devices other",label:"Checked Assets"},slot:"title"}),t._v(" "),s("q-tab",{attrs:{slot:"title",name:"movies",icon:"history",label:"History"},slot:"title"}),t._v(" "),s("q-tab-pane",{attrs:{name:"mails"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-3 col-lg-3 "},[s("img",{staticStyle:{height:"160px"},attrs:{src:t.user.photoURL}})]),t._v(" "),s("div",{staticClass:" col-md-9 col-lg-9 "},[s("q-list",{attrs:{highlight:""}},[s("q-item",[s("q-item-side",{attrs:{label:""}},[t._v("Position:")]),t._v(" "),s("q-item-main",[s("q-item-tile",[t._v(t._s(t.user.department))])],1)],1),t._v(" "),s("q-item",[s("q-item-side",{attrs:{label:""}},[t._v("Hire date:")]),t._v(" "),s("q-item-main",[s("q-item-tile",[t._v(t._s(t.user.hire_date))])],1)],1),t._v(" "),s("q-item",[s("q-item-side",{attrs:{label:""}},[t._v("Home Address:")]),t._v(" "),s("q-item-main",[t._v("\n                 "+t._s(t.user.address)+"\n                 "),s("br"),t._v(t._s(t.user.city)+"\n                 "),s("br"),t._v(" "+t._s(t.user.country)+"\n                 ")])],1),t._v(" "),s("q-item",[s("q-item-side",{attrs:{label:""}},[t._v("Email:")]),t._v(" "),s("q-item-main",[s("a",{attrs:{href:"mailto:","user.email":""}},[t._v(t._s(t.user.email))])])],1),t._v(" "),s("q-item",[s("q-item-side",{attrs:{label:""}},[t._v("Phone Number:")]),t._v(" "),s("q-item-main",[t._v(t._s(t.user.phone)+"\n                        ")])],1)],1)],1)])]),t._v(" "),s("q-tab-pane",{attrs:{name:"alarms"}},[t._v("Checked Assets")]),t._v(" "),s("q-tab-pane",{attrs:{name:"movies"}},[t._v("History")])],1)],1)])},r=[];i._withStripped=!0;var n=s("XyMi"),o=!1;var l=function(t){o||s("ObU3")},d=Object(n.a)(a,i,r,!1,l,"data-v-7a2b6835",null);d.options.__file="src/pages/Profile.vue";e.default=d.exports}});