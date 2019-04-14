(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{364:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"module-container"},[e("module-nav",{attrs:{topRoute:t.topRoute,pos:t.pos}}),t._v(" "),e("div",{staticClass:"module-content"},[e("div",{staticClass:"in"},[e("v-menu-switch",{ref:"menu-switch",attrs:{data:t.navMenu}}),t._v(" "),e("form",{on:{submit:function(s){return s.preventDefault(),t.submit(s)}}},[e("div",{ref:"options",staticClass:"options"},[e("div",{staticClass:"option base hide",attrs:{"data-id":"base"}},[e("table",{staticClass:"input-tb"},[e("tbody",[e("tr",{class:t.getClass(t.error.name),attrs:{id:"name"}},[e("td",[t._v("名称")]),t._v(" "),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-text",attrs:{type:"text"},domProps:{value:t.form.name},on:{input:function(s){s.target.composing||t.$set(t.form,"name",s.target.value)}}}),t._v(" "),e("span",{staticClass:"necessary"},[t._v("*")]),t._v(" "),e("span",{staticClass:"tip"}),t._v(" "),e("span",{staticClass:"msg"},[t._v(t._s(t.error.name))])])]),t._v(" "),e("tr",{class:t.getClass(t.error.brand_id),attrs:{id:"brand_id"}},[e("td",[t._v("品牌")]),t._v(" "),e("td",[e("v-brand",{ref:"brand",attrs:{brand:t.brand}}),t._v(" "),e("span",{staticClass:"necessary"},[t._v("*")]),t._v(" "),e("span",{staticClass:"tip"}),t._v(" "),e("span",{staticClass:"msg"},[t._v(t._s(t.error.brand_id))])],1)]),t._v(" "),e("tr",{class:t.getClass(t.error.car_series_id),attrs:{id:"car_series_id"}},[e("td",[t._v("车系")]),t._v(" "),e("td",[e("i-select",{staticStyle:{width:"300px"},model:{value:t.form.car_series_id,callback:function(s){t.$set(t.form,"car_series_id",s)},expression:"form.car_series_id"}},t._l(t.carSeries,function(s){return e("i-option",{key:s.id,attrs:{value:s.id}},[t._v(t._s(s.name))])}),1),t._v(" "),e("span",{staticClass:"necessary"},[t._v("*")]),t._v(" "),e("span",{staticClass:"tip"},[t._v("请选择品牌后在选择车系！如果没有搜索到结果，请添加车系！")]),t._v(" "),e("span",{staticClass:"msg"},[t._v(t._s(t.error.car_series_id))])],1)]),t._v(" "),e("tr",{class:t.getClass(t.error.car_type_id),attrs:{id:"car_type_id"}},[e("td",[t._v("车辆类型")]),t._v(" "),e("td",[e("i-select",{staticStyle:{width:"300px"},model:{value:t.form.car_type_id,callback:function(s){t.$set(t.form,"car_type_id",s)},expression:"form.car_type_id"}},t._l(t.carType,function(s){return e("i-option",{key:s.id,attrs:{value:s.id}},[t._v(t._s(s.name))])}),1),t._v(" "),e("span",{staticClass:"necessary"}),t._v(" "),e("span",{staticClass:"tip"},[t._v("如果没有搜索到结果，请添加车辆类型")]),t._v(" "),e("span",{staticClass:"msg"},[t._v(t._s(t.error.car_type_id))])],1)]),t._v(" "),e("tr",{class:t.getClass(t.error.year),attrs:{id:"year"}},[e("td",[t._v("年份")]),t._v(" "),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.year,expression:"form.year"}],staticClass:"form-text",attrs:{type:"number",step:"0"},domProps:{value:t.form.year},on:{input:function(s){s.target.composing||t.$set(t.form,"year",s.target.value)}}}),t._v(" "),e("span",{staticClass:"necessary"},[t._v("*")]),t._v(" "),e("span",{staticClass:"tip"},[t._v("默认：当前年份，仅允许输入整数，长度 4 位")]),t._v(" "),e("span",{staticClass:"msg"},[t._v(t._s(t.error.year))])])]),t._v(" "),e("tr",{class:t.getClass(t.error.price),attrs:{id:"price"}},[e("td",[t._v("价格")]),t._v(" "),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.price,expression:"form.price"}],staticClass:"form-text",attrs:{type:"number",step:"0.01"},domProps:{value:t.form.price},on:{input:function(s){s.target.composing||t.$set(t.form,"price",s.target.value)}}}),t._v(" "),e("span",{staticClass:"necessary"},[t._v("*")]),t._v(" "),e("span",{staticClass:"tip"},[t._v("默认：0.00，单位，美元；仅允许最多两位小数")]),t._v(" "),e("span",{staticClass:"msg"},[t._v(t._s(t.error.price))])])]),t._v(" "),e("tr",{class:t.getClass(t.error.gearbox),attrs:{id:"gearbox"}},[e("td",[t._v("变速箱")]),t._v(" "),e("td",[e("i-select",{staticStyle:{width:"300px"},model:{value:t.form.gearbox,callback:function(s){t.$set(t.form,"gearbox",s)},expression:"form.gearbox"}},t._l(t.$store.state.business.car.gearbox,function(s){return e("i-option",{key:s,attrs:{value:s}},[t._v(t._s(s))])}),1),t._v(" "),e("span",{staticClass:"necessary"},[t._v("*")]),t._v(" "),e("span",{staticClass:"tip"},[t._v("默认：手动")]),t._v(" "),e("span",{staticClass:"msg"},[t._v(t._s(t.error.gearbox))])],1)]),t._v(" "),e("tr",{class:t.getClass(t.error.size),attrs:{id:"size"}},[e("td",[t._v("车辆尺寸")]),t._v(" "),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.size,expression:"form.size"}],staticClass:"form-text",attrs:{type:"text"},domProps:{value:t.form.size},on:{input:function(s){s.target.composing||t.$set(t.form,"size",s.target.value)}}}),t._v(" "),e("span",{staticClass:"necessary"}),t._v(" "),e("span",{staticClass:"tip"},[t._v("长/宽/高")]),t._v(" "),e("span",{staticClass:"msg"},[t._v(t._s(t.error.size))])])]),t._v(" "),e("tr",{class:t.getClass(t.error.driver_type),attrs:{id:"driver_type"}},[e("td",[t._v("驱动方式")]),t._v(" "),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.driver_type,expression:"form.driver_type"}],staticClass:"form-text",attrs:{type:"text"},domProps:{value:t.form.driver_type},on:{input:function(s){s.target.composing||t.$set(t.form,"driver_type",s.target.value)}}}),t._v(" "),e("span",{staticClass:"necessary"}),t._v(" "),e("span",{staticClass:"tip"}),t._v(" "),e("span",{staticClass:"msg"},[t._v(t._s(t.error.driver_type))])])]),t._v(" "),e("tr",{class:t.getClass(t.error.door_count),attrs:{id:"door_count"}},[e("td",[t._v("车门数量")]),t._v(" "),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.door_count,expression:"form.door_count"}],staticClass:"form-text",attrs:{type:"number",step:"0"},domProps:{value:t.form.door_count},on:{input:function(s){s.target.composing||t.$set(t.form,"door_count",s.target.value)}}}),t._v(" "),e("span",{staticClass:"necessary"}),t._v(" "),e("span",{staticClass:"tip"},[t._v("默认：0")]),t._v(" "),e("span",{staticClass:"msg"},[t._v(t._s(t.error.door_count))])])]),t._v(" "),e("tr",{class:t.getClass(t.error.seat_count),attrs:{id:"seat_count"}},[e("td",[t._v("座位数")]),t._v(" "),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.seat_count,expression:"form.seat_count"}],staticClass:"form-text",attrs:{type:"number",step:"0"},domProps:{value:t.form.seat_count},on:{input:function(s){s.target.composing||t.$set(t.form,"seat_count",s.target.value)}}}),t._v(" "),e("span",{staticClass:"necessary"}),t._v(" "),e("span",{staticClass:"tip"},[t._v("默认：0")]),t._v(" "),e("span",{staticClass:"msg"},[t._v(t._s(t.error.seat_count))])])]),t._v(" "),e("tr",{class:t.getClass(t.error.high_speed_fuel_consumption),attrs:{id:"high_speed_fuel_consumption"}},[e("td",[t._v("高速油耗（GL）")]),t._v(" "),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.high_speed_fuel_consumption,expression:"form.high_speed_fuel_consumption"}],staticClass:"form-text",attrs:{type:"number",step:"0"},domProps:{value:t.form.high_speed_fuel_consumption},on:{input:function(s){s.target.composing||t.$set(t.form,"high_speed_fuel_consumption",s.target.value)}}}),t._v(" "),e("span",{staticClass:"necessary"}),t._v(" "),e("span",{staticClass:"tip"},[t._v("默认：0，单位：GL")]),t._v(" "),e("span",{staticClass:"msg"},[t._v(t._s(t.error.high_speed_fuel_consumption))])])]),t._v(" "),e("tr",{class:t.getClass(t.error.city_fuel_consumption),attrs:{id:"city_fuel_consumption"}},[e("td",[t._v("城市油耗（GL）")]),t._v(" "),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.city_fuel_consumption,expression:"form.city_fuel_consumption"}],staticClass:"form-text",attrs:{type:"number",step:"0"},domProps:{value:t.form.city_fuel_consumption},on:{input:function(s){s.target.composing||t.$set(t.form,"city_fuel_consumption",s.target.value)}}}),t._v(" "),e("span",{staticClass:"necessary"}),t._v(" "),e("span",{staticClass:"tip"},[t._v("默认：0，单位：GL")]),t._v(" "),e("span",{staticClass:"msg"},[t._v(t._s(t.error.city_fuel_consumption))])])]),t._v(" "),e("tr",{class:t.getClass(t.error.engine),attrs:{id:"engine"}},[e("td",[t._v("发动机")]),t._v(" "),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.engine,expression:"form.engine"}],staticClass:"form-text",attrs:{type:"text"},domProps:{value:t.form.engine},on:{input:function(s){s.target.composing||t.$set(t.form,"engine",s.target.value)}}}),t._v(" "),e("span",{staticClass:"necessary"}),t._v(" "),e("span",{staticClass:"tip"}),t._v(" "),e("span",{staticClass:"msg"},[t._v(t._s(t.error.engine))])])]),t._v(" "),e("tr",{class:t.getClass(t.error.company),attrs:{id:"company"}},[e("td",[t._v("厂商")]),t._v(" "),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.company,expression:"form.company"}],staticClass:"form-text",attrs:{type:"text"},domProps:{value:t.form.company},on:{input:function(s){s.target.composing||t.$set(t.form,"company",s.target.value)}}}),t._v(" "),e("span",{staticClass:"necessary"}),t._v(" "),e("span",{staticClass:"tip"}),t._v(" "),e("span",{staticClass:"msg"},[t._v(t._s(t.error.company))])])]),t._v(" "),e("tr",{class:t.getClass(t.error.level),attrs:{id:"level"}},[e("td",[t._v("级别")]),t._v(" "),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.level,expression:"form.level"}],staticClass:"form-text",attrs:{type:"text"},domProps:{value:t.form.level},on:{input:function(s){s.target.composing||t.$set(t.form,"level",s.target.value)}}}),t._v(" "),e("span",{staticClass:"necessary"}),t._v(" "),e("span",{staticClass:"tip"}),t._v(" "),e("span",{staticClass:"msg"},[t._v(t._s(t.error.level))])])]),t._v(" "),e("tr",{class:t.getClass(t.error.wheelbase),attrs:{id:"wheelbase"}},[e("td",[t._v("轴距（inch）")]),t._v(" "),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.wheelbase,expression:"form.wheelbase"}],staticClass:"form-text",attrs:{type:"text"},domProps:{value:t.form.wheelbase},on:{input:function(s){s.target.composing||t.$set(t.form,"wheelbase",s.target.value)}}}),t._v(" "),e("span",{staticClass:"necessary"}),t._v(" "),e("span",{staticClass:"tip"}),t._v(" "),e("span",{staticClass:"msg"},[t._v(t._s(t.error.wheelbase))])])]),t._v(" "),e("tr",{class:t.getClass(t.error.displacement),attrs:{id:"displacement"}},[e("td",[t._v("排量（L）")]),t._v(" "),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.displacement,expression:"form.displacement"}],staticClass:"form-text",attrs:{type:"number",step:"0.01"},domProps:{value:t.form.displacement},on:{input:function(s){s.target.composing||t.$set(t.form,"displacement",s.target.value)}}}),t._v(" "),e("span",{staticClass:"necessary"}),t._v(" "),e("span",{staticClass:"tip"},[t._v("默认：0.00；单位：L；仅允许最多两位小数")]),t._v(" "),e("span",{staticClass:"msg"},[t._v(t._s(t.error.displacement))])])]),t._v(" "),e("tr",{class:t.getClass(t.error.intake_type),attrs:{id:"intake_type"}},[e("td",[t._v("进气类型")]),t._v(" "),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.intake_type,expression:"form.intake_type"}],staticClass:"form-text",attrs:{type:"text"},domProps:{value:t.form.intake_type},on:{input:function(s){s.target.composing||t.$set(t.form,"intake_type",s.target.value)}}}),t._v(" "),e("span",{staticClass:"necessary"}),t._v(" "),e("span",{staticClass:"tip"}),t._v(" "),e("span",{staticClass:"msg"},[t._v(t._s(t.error.intake_type))])])]),t._v(" "),e("tr",{class:t.getClass(t.error.cylinder_count),attrs:{id:"cylinder_count"}},[e("td",[t._v("汽缸数辆")]),t._v(" "),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.cylinder_count,expression:"form.cylinder_count"}],staticClass:"form-text",attrs:{type:"number",step:"0"},domProps:{value:t.form.cylinder_count},on:{input:function(s){s.target.composing||t.$set(t.form,"cylinder_count",s.target.value)}}}),t._v(" "),e("span",{staticClass:"necessary"}),t._v(" "),e("span",{staticClass:"tip"},[t._v("默认：0")]),t._v(" "),e("span",{staticClass:"msg"},[t._v(t._s(t.error.cylinder_count))])])]),t._v(" "),e("tr",{class:t.getClass(t.error.maximum_horsepower),attrs:{id:"maximum_horsepower"}},[e("td",[t._v("最大马力（Ps）")]),t._v(" "),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.maximum_horsepower,expression:"form.maximum_horsepower"}],staticClass:"form-text",attrs:{type:"number",step:"0.01"},domProps:{value:t.form.maximum_horsepower},on:{input:function(s){s.target.composing||t.$set(t.form,"maximum_horsepower",s.target.value)}}}),t._v(" "),e("span",{staticClass:"necessary"}),t._v(" "),e("span",{staticClass:"tip"},[t._v("默认：0.00，单位：Ps")]),t._v(" "),e("span",{staticClass:"msg"},[t._v(t._s(t.error.maximum_horsepower))])])]),t._v(" "),e("tr",{class:t.getClass(t.error.maximum_torque),attrs:{id:"maximum_torque"}},[e("td",[t._v("最大扭矩（N*m）")]),t._v(" "),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.maximum_torque,expression:"form.maximum_torque"}],staticClass:"form-text",attrs:{type:"number",step:"0.01"},domProps:{value:t.form.maximum_torque},on:{input:function(s){s.target.composing||t.$set(t.form,"maximum_torque",s.target.value)}}}),t._v(" "),e("span",{staticClass:"necessary"}),t._v(" "),e("span",{staticClass:"tip"},[t._v("默认：0.00")]),t._v(" "),e("span",{staticClass:"msg"},[t._v(t._s(t.error.maximum_torque))])])]),t._v(" "),e("tr",{class:t.getClass(t.error.fuel_type),attrs:{id:"fuel_type"}},[e("td",[t._v("燃料类型")]),t._v(" "),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.fuel_type,expression:"form.fuel_type"}],staticClass:"form-text",attrs:{type:"text"},domProps:{value:t.form.fuel_type},on:{input:function(s){s.target.composing||t.$set(t.form,"fuel_type",s.target.value)}}}),t._v(" "),e("span",{staticClass:"necessary"}),t._v(" "),e("span",{staticClass:"tip"}),t._v(" "),e("span",{staticClass:"msg"},[t._v(t._s(t.error.fuel_type))])])]),t._v(" "),e("tr",{class:t.getClass(t.error.engine_anti_theft_system),attrs:{id:"engine_anti_theft_system"}},[e("td",[t._v("发动机防盗系统")]),t._v(" "),e("td",[e("RadioGroup",{model:{value:t.form.engine_anti_theft_system,callback:function(s){t.$set(t.form,"engine_anti_theft_system",s)},expression:"form.engine_anti_theft_system"}},t._l(t.$store.state.business.bool_str,function(s,a){return e("Radio",{key:a,attrs:{label:a}},[t._v(t._s(s))])}),1),t._v(" "),e("span",{staticClass:"necessary"}),t._v(" "),e("span",{staticClass:"tip"}),t._v(" "),e("span",{staticClass:"msg"},[t._v(t._s(t.error.engine_anti_theft_system))])],1)]),t._v(" "),e("tr",{class:t.getClass(t.error.assist_type),attrs:{id:"assist_type"}},[e("td",[t._v("助力类型")]),t._v(" "),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.assist_type,expression:"form.assist_type"}],staticClass:"form-text",attrs:{type:"text"},domProps:{value:t.form.assist_type},on:{input:function(s){s.target.composing||t.$set(t.form,"assist_type",s.target.value)}}}),t._v(" "),e("span",{staticClass:"necessary"}),t._v(" "),e("span",{staticClass:"tip"}),t._v(" "),e("span",{staticClass:"msg"},[t._v(t._s(t.error.assist_type))])])]),t._v(" "),e("tr",{class:t.getClass(t.error.front_suspension_type),attrs:{id:"front_suspension_type"}},[e("td",[t._v("前悬挂类型")]),t._v(" "),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.front_suspension_type,expression:"form.front_suspension_type"}],staticClass:"form-text",attrs:{type:"text"},domProps:{value:t.form.front_suspension_type},on:{input:function(s){s.target.composing||t.$set(t.form,"front_suspension_type",s.target.value)}}}),t._v(" "),e("span",{staticClass:"necessary"}),t._v(" "),e("span",{staticClass:"tip"}),t._v(" "),e("span",{staticClass:"msg"},[t._v(t._s(t.error.front_suspension_type))])])]),t._v(" "),e("tr",{class:t.getClass(t.error.back_suspension_type),attrs:{id:"back_suspension_type"}},[e("td",[t._v("后悬挂类型")]),t._v(" "),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.back_suspension_type,expression:"form.back_suspension_type"}],staticClass:"form-text",attrs:{type:"text"},domProps:{value:t.form.back_suspension_type},on:{input:function(s){s.target.composing||t.$set(t.form,"back_suspension_type",s.target.value)}}}),t._v(" "),e("span",{staticClass:"necessary"}),t._v(" "),e("span",{staticClass:"tip"}),t._v(" "),e("span",{staticClass:"msg"},[t._v(t._s(t.error.back_suspension_type))])])]),t._v(" "),e("tr",{class:t.getClass(t.error.front_brake_type),attrs:{id:"front_brake_type"}},[e("td",[t._v("前制动类型")]),t._v(" "),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.front_brake_type,expression:"form.front_brake_type"}],staticClass:"form-text",attrs:{type:"text"},domProps:{value:t.form.front_brake_type},on:{input:function(s){s.target.composing||t.$set(t.form,"front_brake_type",s.target.value)}}}),t._v(" "),e("span",{staticClass:"necessary"}),t._v(" "),e("span",{staticClass:"tip"}),t._v(" "),e("span",{staticClass:"msg"},[t._v(t._s(t.error.front_brake_type))])])]),t._v(" "),e("tr",{class:t.getClass(t.error.back_brake_type),attrs:{id:"back_brake_type"}},[e("td",[t._v("后制动类型")]),t._v(" "),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.back_brake_type,expression:"form.back_brake_type"}],staticClass:"form-text",attrs:{type:"text"},domProps:{value:t.form.back_brake_type},on:{input:function(s){s.target.composing||t.$set(t.form,"back_brake_type",s.target.value)}}}),t._v(" "),e("span",{staticClass:"necessary"}),t._v(" "),e("span",{staticClass:"tip"}),t._v(" "),e("span",{staticClass:"msg"},[t._v(t._s(t.error.back_brake_type))])])]),t._v(" "),e("tr",{class:t.getClass(t.error.tire_desc),attrs:{id:"tire_desc"}},[e("td",[t._v("轮胎描述")]),t._v(" "),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.tire_desc,expression:"form.tire_desc"}],staticClass:"form-text",attrs:{type:"text"},domProps:{value:t.form.tire_desc},on:{input:function(s){s.target.composing||t.$set(t.form,"tire_desc",s.target.value)}}}),t._v(" "),e("span",{staticClass:"necessary"}),t._v(" "),e("span",{staticClass:"tip"}),t._v(" "),e("span",{staticClass:"msg"},[t._v(t._s(t.error.tire_desc))])])]),t._v(" "),e("tr",{class:t.getClass(t.error.weight),attrs:{id:"weight"}},[e("td",[t._v("权重")]),t._v(" "),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.weight,expression:"form.weight"}],staticClass:"form-text",attrs:{type:"number",step:"0"},domProps:{value:t.form.weight},on:{input:function(s){s.target.composing||t.$set(t.form,"weight",s.target.value)}}}),t._v(" "),e("span",{staticClass:"necessary"}),t._v(" "),e("span",{staticClass:"tip"},[t._v("默认：0，仅允许输入整数")]),t._v(" "),e("span",{staticClass:"msg"},[t._v(t._s(t.error.weight))])])])])])]),t._v(" "),e("div",{staticClass:"option configuration hide",attrs:{"data-id":"configuration"}},t._l(t.configuration,function(s){return e("div",{key:s.id,staticClass:"group"},[e("div",{staticClass:"run-title-3"},[e("div",{staticClass:"left"},[t._v(t._s(s.name))]),t._v(" "),e("div",{staticClass:"right"})]),t._v(" "),e("div",{staticClass:"list"},t._l(s.data,function(s){return e("div",{staticClass:"item"},[e("div",{staticClass:"left"},[t._v(t._s(s.name))]),t._v(" "),e("div",{staticClass:"right"},[e("RadioGroup",{on:{"on-change":t.configurationChangeEvent},model:{value:s.checked,callback:function(e){t.$set(s,"checked",e)},expression:"v1.checked"}},t._l(t.$store.state.business.bool_str,function(s,a){return e("Radio",{key:a,attrs:{label:a}},[t._v(t._s(s))])}),1)],1)])}),0)])}),0)]),t._v(" "),t._m(0)])],1)]),t._v(" "),e("v-loading",{ref:"loading"})],1)};a._withStripped=!0;var r=e(526),i=e.n(r),n={name:"v-car-model",data:function(){return{form:{name:"",year:(new Date).getFullYear(),price:"0.00",door_count:0,seat_count:0,high_speed_fuel_consumption:0,city_fuel_consumption:0,displacement:"0.00",cylinder_count:0,weight:0,maximum_horsepower:"0.00",maximum_torque:"0.00",engine_anti_theft_system:"n",gearbox:"手动"},error:{},ajax:{get:null,submit:null},dom:{},ins:{loading:null},pending:{submit:null},data:{},callback:{},api:carModelApi,navMenu:[{id:"base",name:"基本信息"},{id:"configuration",name:"车型配置"}],menu:"base",type:1,brand:[],carSeries:[],carType:[],comp:{},configuration:[]}},created:function(){},mounted:function(){this.initDom(),this.initComp(),this.initialize()},mixins:[mixins.state,mixins.loading,mixins.form.get,mixins.form.confirm,mixins.form.menuSwitch],methods:{initDom:function(){this.dom.options=G(this.$refs.options),this.dom.optionSet=this.dom.options.children(null,!1,!0)},initComp:function(){this.comp.brand=this.$refs.brand},initInstance:function(){var t=this;this.initMenuSwitch(),this.ins.brand=new Brand(this.comp.brand.$el,{multiple:!1,checked:function(s){t.form.brand_id=s,t.getCarSeries(s)},unchecked:function(){t.form.brand_id="",t.carSeries=[]}})},initialize:function(){var t=this;new Promise(function(s){var e=0;t.ins.loading.show(),brandApi.all(function(a,r){if(200!=r)return s(!1),void t.eNotice(a);t.brand=a,3==++e&&s(!0)}),carTypeApi.all(function(a,r){if(200!=r)return s(!1),void t.eNotice(a);t.carType=a,3==++e&&s(!0)}),carConfigurationApi.group(function(a,r){if(200!=r)return s(!1),void t.eNotice(a);a.forEach(function(t){t.data.forEach(function(t){t.checked="n"})}),t.configuration=a,3==++e&&s(!0)})}).then(function(s){s&&t.$nextTick(function(){t.initInstance(),t.getData(function(){t.form._configuration=i()(t.form.configuration),t.configuration.forEach(function(s){s.data.forEach(function(s){for(var e=0;e<t.form._configuration.length;++e){var a=t.form._configuration[e];if(s.id==a.id)return void(s.checked="y")}s.checked="n"})}),t.ins.brand.checked(t.form.brand_id)})})}).finally(function(){t.ins.loading.hide()})},getCarSeries:function(t){var s=this;this.ajax.carSeries instanceof G.ajax&&this.ajax.carSeries.native("abort"),this.ajax.carSeries=carSeriesApi.all({brand_id:t},function(t,e){200==e?s.carSeries=t:s.eNotice(t)})},hasConfiguration:function(){},configurationChangeEvent:function(){},check:function(t){return{status:!0,field:"",msg:""}},getConfiguration:function(){var t=this;this.form.configuration=[],this.configuration.forEach(function(s){s.data.forEach(function(s){"y"==s.checked&&t.form.configuration.push(s.id)})}),this.form.configuration=G.jsonEncode(this.form.configuration)},submit:function(){var t=this;new Promise(function(s){if(t.pending.submit)t.$info("请求中...请耐心等待");else{var e=t.check();if(!e.status)return t.error[e.field]=e.msg,void vScroll(e.field);t.getConfiguration(),t.pending.submit=!0,t.ins.loading.show(),t.ajax.submit=t.api[t.param.mode](t.form,function(e,a){if(t.error={},200!=a)return t.initialState("loading","submit","submit"),400==a?(t.error=e,void vScroll(G.firstKey(e))):void t.$error(e);t.form.id=e,s()}),t.ins.loading.setArgs(t.ajax.submit,"submit")}}).then(function(){t.confirm("车辆型号","/carModel/list")}).finally(function(){t.initialState("loading","submit","submit")})}}},o=(e(378),e(530),e(531),e(532),e(23)),c=Object(o.a)(n,a,[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"submit"},[s("button",{staticClass:"run-button run-button-submit",attrs:{type:"submit"}},[this._v("提交")])])}],!1,null,"57dba74f",null);c.options.__file="source/vue/view/carModel/thing.vue";s.default=c.exports},377:function(t,s,e){},378:function(t,s,e){"use strict";var a=e(377);e.n(a).a},434:function(t,s,e){},435:function(t,s,e){},436:function(t,s,e){},526:function(t,s,e){var a=e(527),r=e(528),i=e(529);t.exports=function(t){return a(t)||r(t)||i()}},527:function(t,s){t.exports=function(t){if(Array.isArray(t)){for(var s=0,e=new Array(t.length);s<t.length;s++)e[s]=t[s];return e}}},528:function(t,s){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},529:function(t,s){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},530:function(t,s,e){"use strict";var a=e(434);e.n(a).a},531:function(t,s,e){"use strict";var a=e(435);e.n(a).a},532:function(t,s,e){"use strict";var a=e(436);e.n(a).a}}]);