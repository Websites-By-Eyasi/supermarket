(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ec6e433"],{"698a":function(t,e,s){t.exports=s.p+"img/user_.60c70b0f.png"},"7cdf":function(t,e,s){var a=s("5ca1");a(a.S,"Number",{isInteger:s("9c12")})},"9c12":function(t,e,s){var a=s("d3f4"),i=Math.floor;t.exports=function(t){return!a(t)&&isFinite(t)&&i(t)===t}},b3e2:function(t,e,s){"use strict";s("d6df")},c30d:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"page-user-view"}},[s("div",{staticClass:"md:px-6"},[s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col md:w-1/3 w-1/4"},[s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full mt-4",attrs:{label:"Staff Name",name:"staff_name"},model:{value:t.staff.staff_name,callback:function(e){t.$set(t.staff,"staff_name",e)},expression:"staff.staff_name"}}),s("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("staff_name"),expression:"errors.has('staff_name')"}],staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("staff_name")))]),s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"w-full mt-4",attrs:{label:"Email",name:"email"},model:{value:t.staff.email,callback:function(e){t.$set(t.staff,"email",e)},expression:"staff.email"}}),s("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("email"),expression:"errors.has('email')"}],staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("email")))]),s("vs-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"w-full mt-4",attrs:{label:"Phone",type:"phone_number",name:"phone_number"},model:{value:t.staff.phone_number,callback:function(e){t.$set(t.staff,"phone_number",e)},expression:"staff.phone_number"}}),s("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("phone_number"),expression:"errors.has('phone_number')"}],staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("phone_number")))])],1),s("div",{staticClass:"vx-col md:w-1/3 w-1/4"},[s("div",{staticClass:"mt-4"},[s("label",{staticClass:"vs-input--label"},[t._v("Role")]),s("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{clearable:!1,options:t.rolesAvailable,name:"role_name",dir:t.$vs.rtl?"rtl":"ltr"},model:{value:t.staff.role_name,callback:function(e){t.$set(t.staff,"role_name",e)},expression:"staff.role_name"}}),s("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("role_name"),expression:"errors.has('role_name')"}],staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("role_name")))])],1),s("div",{staticClass:"mt-4 mb-5"},[s("label",{staticClass:"vs-input--label"},[t._v("Status")]),s("v-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{clearable:!1,options:t.staffStatus,name:"status",dir:t.$vs.rtl?"rtl":"ltr"},model:{value:t.staff.status,callback:function(e){t.$set(t.staff,"status",e)},expression:"staff.status"}}),s("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("status"),expression:"errors.has('status')"}],staticClass:"text-danger text-sm"},[t._v(t._s(t.errors.first("status")))])],1),s("span"),s("label",{staticClass:"vs-input--label"},[t._v("Default Depot")]),s("v-select",{staticClass:" mb-5",attrs:{clearable:!1,options:t.availableDepots,label:"depot_name"},model:{value:t.selectedDepot,callback:function(e){t.selectedDepot=e},expression:"selectedDepot"}})],1)]),s("div",{staticClass:"vx-row mt-12"},[s("div",{staticClass:"vx-col w-full"},[s("div",{staticClass:"flex items-start flex-col sm:flex-row"},[s("div",[s("vs-button",{ref:"saveButton",staticClass:"mr-4 mb-4",attrs:{color:"success"},on:{click:function(e){return t.saveUser()}}},[t._v("Save User")])],1)])])])])])},i=[],r=(s("7cdf"),s("c5f6"),s("bb36")),o=s("4a7a"),l=s.n(o),n={components:{vSelect:l.a},props:{userId:[String,Number]},data:function(){return{user_data:null,user_not_found:!1,staff:{id:"",user_id:"",default_depot_id:"",staff_name:"",phone_number:"",email:"",created_at:"",role_name:"",status:"Active"},rolesAvailable:[],staffStatus:["Active","Suspended"],availableDepots:[],selectedDepot:{id:null,depot_name:"Select Depot"}}},computed:{validateForm:function(){return!this.errors.any()}},methods:{fetchUserDetails:function(){var t=this;r["a"].post("/resources/staff/details",{id:this.userId}).then((function(e){t.staff=e.data.payload.staff,t.selectedDepot=e.data.payload.staff.depot})).catch((function(t){console.log(t)}))},saveUser:function(){var t=this;this.$vs.loading();var e="/config/staff/user/add";Number.isInteger(this.staff.id)&&(e="/config/staff/user/update",console.log("Updating...")),this.staff.default_depot_id=this.selectedDepot.id,console.log(JSON.stringify(this.staff)),r["a"].post(e,this.staff).then((function(e){t.$vs.loading.close(),t.closeUserForm()})).catch((function(e){var s="Something went wrong";e.response&&(s=e.response.data.message),t.$vs.loading.close(),t.$vs.notify({time:12e3,color:"danger",title:"Failed",text:s}),console.log(e)}))},fetchAvailableRoles:function(){var t=this;r["a"].get("/resources/staff/roles/all").then((function(e){t.rolesAvailable=e.data.payload.roles})).catch((function(t){console.log(t)}))},fetchDepots:function(){var t=this;console.info("fetching depots.."),console.info(JSON.stringify(this.selectedDepot)),r["a"].get("/resources/assets/depots").then((function(e){t.availableDepots=e.data.payload.depots.data})).catch((function(t){console.log(t)}))},closeUserForm:function(){this.$store.commit("general/TOGGLE_USER_FORM",!1)}},created:function(){console.log("UserForm userId:"+this.userId),this.userId&&this.fetchUserDetails(),this.fetchAvailableRoles(),this.fetchDepots()}},c=n,f=s("2877"),d=Object(f["a"])(c,a,i,!1,null,null,null);e["a"]=d.exports},d6df:function(t,e,s){},d759:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"page-user-view"}},[a("div",{attrs:{id:"user-data"}},[a("vx-card",{staticClass:"mb-base",attrs:{title:"Account"}},[a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col",attrs:{id:"avatar-col"}},[a("div",{staticClass:"img-container mb-4"},[a("img",{staticClass:"rounded w-full",attrs:{src:s("698a")}})])]),a("div",{staticClass:"vx-col flex-1",attrs:{id:"account-info-col-1"}},[a("table",[a("tr",[a("td",{staticClass:"font-semibold"},[t._v("Name")]),a("td",[t._v(" "+t._s(t.staff.staff_name)+" ")])]),a("tr",[a("td",{staticClass:"font-semibold"},[t._v("Phone ")]),a("td",[t._v(t._s(t.staff.phone_number)+" ")])]),a("tr",[a("td",{staticClass:"font-semibold"},[t._v("Email")]),a("td",[t._v(t._s(t.staff.email))])])])]),a("div",{staticClass:"vx-col flex-1",attrs:{id:"account-info-col-2"}},[a("table",[a("tr",[a("td",{staticClass:"font-semibold"},[t._v("Status")]),a("td",[t._v("Active")])]),a("tr",[a("td",{staticClass:"font-semibold"},[t._v("Role")]),a("td",[t._v(t._s(t.staff.role_name))])]),a("tr",[a("td",{staticClass:"font-semibold"},[t._v("Last Seen")]),a("td",[t._v("January 7th 2020")])])])]),a("div",{staticClass:"vx-col w-full flex",attrs:{id:"account-manage-buttons"}},[a("vs-button",{staticClass:"mr-4",attrs:{"icon-pack":"feather",icon:"icon-edit"},on:{click:function(e){return t.showUserForm()}}},[t._v("Edit")]),a("vs-button",{attrs:{type:"border",color:"danger","icon-pack":"feather",icon:"icon-trash"},on:{click:t.confirmDeleteRecord}},[t._v("Delete")])],1)])]),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col lg:w-1/2 w-full"},[a("vx-card",{staticClass:"mb-base",attrs:{title:"Default Depot"}},[t.staff.depot?a("table",[a("tr",[a("td",{staticClass:"font-semibold"},[t._v("Depot Name")]),a("td",[t._v(t._s(t.staff.depot.depot_name))])]),t.staff.depot.region?a("tr",[a("td",{staticClass:"font-semibold"},[t._v("Region")]),a("td",[t._v(t._s(t.staff.depot.region.region_name))])]):t._e()]):t._e()])],1),a("div",{staticClass:"vx-col lg:w-1/2 w-full"},[a("vx-card",{staticClass:"mb-base",attrs:{title:"Assets"}},[a("table",[a("tr",[a("th",[t._v("Asset Type")]),a("th",[t._v("Particulars")]),a("th",[t._v("Status")])]),a("div",{staticStyle:{height:"8px"}}),t._l(t.staff.vehicles,(function(e,s){return a("tr",{key:s},[a("td",{staticClass:"font-semibold"},[t._v(t._s(e.vehicle_type))]),a("td",[t._v(" "+t._s(e.make)+" "+t._s(e.licence_plate_number)+" ")]),a("td",[a("vs-chip",{staticClass:"mx-4",attrs:{color:"#8a5a44"}},[t._v(" "+t._s(e.vehicle_status)+" ")])],1)])}))],2)])],1)])],1),a("vs-popup",{attrs:{fullscreen:"",title:"Staff Info",active:t.userFormVisible},on:{close:function(e){return t.closeUserForm()},"update:active":function(e){t.userFormVisible=e}}},[a("div",[a("user-form",{attrs:{userId:t.userId}})],1)])],1)},i=[],r=(s("c5f6"),s("bb36")),o=s("c30d"),l={components:{UserForm:o["a"]},props:{userId:[String,Number]},data:function(){return{user_data:null,user_not_found:!1,staff:{id:"",user_id:"",staff_name:"",phone_number:"",email:"",created_at:""},userFormDialog:!1}},computed:{userFormVisible:function(){return this.$store.state.general.userFormVisible}},watch:{userFormVisible:function(t){this.fetchUserDetails()}},methods:{fetchUserDetails:function(){var t=this;r["a"].post("/resources/staff/details",{id:this.userId}).then((function(e){t.staff=e.data.payload.staff})).catch((function(t){console.log(t)}))},deleteStaff:function(){var t=this;r["a"].post("/config/staff/user/remove",{id:this.userId}).then((function(e){t.$router.go(-1)})).catch((function(t){console.log(t)}))},confirmDeleteRecord:function(){this.$vs.dialog({type:"confirm",color:"danger",title:"Confirm Delete",text:'You are about to delete "'.concat(this.staff.staff_name,'"'),accept:this.deleteStaff,acceptText:"Delete"})},showUserForm:function(){this.$store.commit("general/TOGGLE_USER_FORM",!0)},closeUserForm:function(){this.$store.commit("general/TOGGLE_USER_FORM",!1)},navigateToUsers:function(){this.$router.push({name:"config-access-user"})}},created:function(){console.log("UserDetails: UserID:"+this.userId),this.userId?this.fetchUserDetails():this.navigateToUsers()}},n=l,c=(s("b3e2"),s("2877")),f=Object(c["a"])(n,a,i,!1,null,null,null);e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-4ec6e433.58b77632.js.map