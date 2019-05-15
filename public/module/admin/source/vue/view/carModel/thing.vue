<template>
    <div class="module-container">
        <module-nav :topRoute="topRoute" :pos="pos"></module-nav>
        <div class="module-content">
            <div class="in">
                <v-menu-switch ref="menu-switch" :data="navMenu"></v-menu-switch>
                <form @submit.prevent="submit">
                    <div class="options" ref="options">

                        <!-- 基本信息 -->
                        <div class="option base hide" data-id="base">
                            <table class="input-tb">
                                <tbody>
                                <tr id="name" :class="getClass(error.name)">
                                    <td>名称</td>
                                    <td>
                                        <input type="text" class="form-text" v-model="form.name">
                                        <span class="necessary">*</span>
                                        <span class="tip"></span>
                                        <span class="msg">{{ error.name }}</span>
                                    </td>
                                </tr>
                                <tr id="brand_id" :class="getClass(error.brand_id)">
                                    <td>品牌</td>
                                    <td>
                                        <v-brand ref="brand" :brand="brand"></v-brand>
                                        <span class="necessary">*</span>
                                        <span class="tip"></span>
                                        <span class="msg">{{ error.brand_id }}</span>
                                    </td>
                                </tr>
                                <tr id="car_series_id" :class="getClass(error.car_series_id)">
                                    <td>车系</td>
                                    <td>
                                        <i-select v-model="form.car_series_id" style="width: 300px;">
                                            <i-option v-for="v in carSeries" :key="v.id" :value="v.id">{{ v.name }}</i-option>
                                        </i-select>
                                        <span class="necessary">*</span>
                                        <span class="tip">请选择品牌后在选择车系！如果没有搜索到结果，请添加车系！</span>
                                        <span class="msg">{{ error.car_series_id }}</span>
                                    </td>
                                </tr>
                                <tr id="car_type_id" :class="getClass(error.car_type_id)">
                                    <td>车辆类型</td>
                                    <td>
                                        <i-select v-model="form.car_type_id" style="width: 300px;">
                                            <i-option v-for="v in carType" :key="v.id" :value="v.id">{{ v.name }}</i-option>
                                        </i-select>
                                        <span class="necessary"></span>
                                        <span class="tip">如果没有搜索到结果，请添加车辆类型</span>
                                        <span class="msg">{{ error.car_type_id }}</span>
                                    </td>
                                </tr>
                                <tr id="year" :class="getClass(error.year)">
                                    <td>年份</td>
                                    <td>
                                        <input type="number" step="0" class="form-text" v-model="form.year">
                                        <span class="necessary">*</span>
                                        <span class="tip">默认：当前年份，仅允许输入整数，长度 4 位</span>
                                        <span class="msg">{{ error.year }}</span>
                                    </td>
                                </tr>
                                <tr id="price" :class="getClass(error.price)">
                                    <td>价格</td>
                                    <td>
                                        <input type="number" step="0.01" class="form-text" v-model="form.price">
                                        <span class="necessary">*</span>
                                        <span class="tip">默认：0.00，单位，美元；仅允许最多两位小数</span>
                                        <span class="msg">{{ error.price }}</span>
                                    </td>
                                </tr>
                                <tr id="gearbox" :class="getClass(error.gearbox)">
                                    <td>变速箱</td>
                                    <td>
                                        <i-select v-model="form.gearbox" style="width: 300px;">
                                            <i-option v-for="v in $store.state.business.car.gearbox" :key="v" :value="v">{{ v }}</i-option>
                                        </i-select>
                                        <span class="necessary">*</span>
                                        <span class="tip">默认：手动</span>
                                        <span class="msg">{{ error.gearbox }}</span>
                                    </td>
                                </tr>
                                <tr id="size" :class="getClass(error.size)">
                                    <td>车辆尺寸</td>
                                    <td>
                                        <input type="text" class="form-text" v-model="form.size">
                                        <span class="necessary"></span>
                                        <span class="tip">长/宽/高</span>
                                        <span class="msg">{{ error.size }}</span>
                                    </td>
                                </tr>
                                <tr id="driver_type" :class="getClass(error.driver_type)">
                                    <td>驱动方式</td>
                                    <td>
                                        <input type="text" class="form-text" v-model="form.driver_type">
                                        <span class="necessary"></span>
                                        <span class="tip"></span>
                                        <span class="msg">{{ error.driver_type }}</span>
                                    </td>
                                </tr>
                                <tr id="door_count" :class="getClass(error.door_count)">
                                    <td>车门数量</td>
                                    <td>
                                        <input type="number" step="0" class="form-text" v-model="form.door_count">
                                        <span class="necessary"></span>
                                        <span class="tip">默认：0</span>
                                        <span class="msg">{{ error.door_count }}</span>
                                    </td>
                                </tr>
                                <tr id="seat_count" :class="getClass(error.seat_count)">
                                    <td>座位数</td>
                                    <td>
                                        <input type="number" step="0" class="form-text" v-model="form.seat_count">
                                        <span class="necessary"></span>
                                        <span class="tip">默认：0</span>
                                        <span class="msg">{{ error.seat_count }}</span>
                                    </td>
                                </tr>
                                <tr id="high_speed_fuel_consumption" :class="getClass(error.high_speed_fuel_consumption)">
                                    <td>高速油耗（GL）</td>
                                    <td>
                                        <input type="number" step="0" class="form-text" v-model="form.high_speed_fuel_consumption">
                                        <span class="necessary"></span>
                                        <span class="tip">默认：0，单位：GL</span>
                                        <span class="msg">{{ error.high_speed_fuel_consumption }}</span>
                                    </td>
                                </tr>
                                <tr id="city_fuel_consumption" :class="getClass(error.city_fuel_consumption)">
                                    <td>城市油耗（GL）</td>
                                    <td>
                                        <input type="number" step="0" class="form-text" v-model="form.city_fuel_consumption">
                                        <span class="necessary"></span>
                                        <span class="tip">默认：0，单位：GL</span>
                                        <span class="msg">{{ error.city_fuel_consumption }}</span>
                                    </td>
                                </tr>
                                <tr id="engine" :class="getClass(error.engine)">
                                    <td>发动机</td>
                                    <td>
                                        <input type="text" class="form-text" v-model="form.engine">
                                        <span class="necessary"></span>
                                        <span class="tip"></span>
                                        <span class="msg">{{ error.engine }}</span>
                                    </td>
                                </tr>
                                <tr id="company" :class="getClass(error.company)">
                                    <td>厂商</td>
                                    <td>
                                        <input type="text" class="form-text" v-model="form.company">
                                        <span class="necessary"></span>
                                        <span class="tip"></span>
                                        <span class="msg">{{ error.company }}</span>
                                    </td>
                                </tr>
                                <tr id="level" :class="getClass(error.level)">
                                    <td>级别</td>
                                    <td>
                                        <input type="text" class="form-text" v-model="form.level">
                                        <span class="necessary"></span>
                                        <span class="tip"></span>
                                        <span class="msg">{{ error.level }}</span>
                                    </td>
                                </tr>
                                <tr id="wheelbase" :class="getClass(error.wheelbase)">
                                    <td>轴距（inch）</td>
                                    <td>
                                        <input type="text" class="form-text" v-model="form.wheelbase">
                                        <span class="necessary"></span>
                                        <span class="tip"></span>
                                        <span class="msg">{{ error.wheelbase }}</span>
                                    </td>
                                </tr>
                                <tr id="displacement" :class="getClass(error.displacement)">
                                    <td>排量（L）</td>
                                    <td>
                                        <input type="number" step="0.01" class="form-text" v-model="form.displacement">
                                        <span class="necessary"></span>
                                        <span class="tip">默认：0.0；单位：L；仅允许最多1位小数</span>
                                        <span class="msg">{{ error.displacement }}</span>
                                    </td>
                                </tr>
                                <tr id="intake_type" :class="getClass(error.intake_type)">
                                    <td>进气类型</td>
                                    <td>
                                        <input type="text" class="form-text" v-model="form.intake_type">
                                        <span class="necessary"></span>
                                        <span class="tip"></span>
                                        <span class="msg">{{ error.intake_type }}</span>
                                    </td>
                                </tr>
                                <tr id="cylinder_count" :class="getClass(error.cylinder_count)">
                                    <td>汽缸数辆</td>
                                    <td>
                                        <input type="number" step="0" class="form-text" v-model="form.cylinder_count">
                                        <span class="necessary"></span>
                                        <span class="tip">默认：0</span>
                                        <span class="msg">{{ error.cylinder_count }}</span>
                                    </td>
                                </tr>
                                <tr id="maximum_horsepower" :class="getClass(error.maximum_horsepower)">
                                    <td>最大马力（Ps）</td>
                                    <td>
                                        <input type="number" step="0.01" class="form-text" v-model="form.maximum_horsepower">
                                        <span class="necessary"></span>
                                        <span class="tip">默认：0.00，单位：Ps</span>
                                        <span class="msg">{{ error.maximum_horsepower }}</span>
                                    </td>
                                </tr>
                                <tr id="maximum_torque" :class="getClass(error.maximum_torque)">
                                    <td>最大扭矩（N*m）</td>
                                    <td>
                                        <input type="number" step="0.01" class="form-text" v-model="form.maximum_torque">
                                        <span class="necessary"></span>
                                        <span class="tip">默认：0.00</span>
                                        <span class="msg">{{ error.maximum_torque }}</span>
                                    </td>
                                </tr>
                                <tr id="fuel_type" :class="getClass(error.fuel_type)">
                                    <td>燃料类型</td>
                                    <td>
                                        <input type="text" class="form-text" v-model="form.fuel_type">
                                        <span class="necessary"></span>
                                        <span class="tip"></span>
                                        <span class="msg">{{ error.fuel_type }}</span>
                                    </td>
                                </tr>
                                <tr id="engine_anti_theft_system" :class="getClass(error.engine_anti_theft_system)">
                                    <td>发动机防盗系统</td>
                                    <td>
                                        <RadioGroup v-model="form.engine_anti_theft_system">
                                            <Radio v-for="(v,k) in $store.state.business.bool_str" :key="k" :label="k">{{ v }}</Radio>
                                        </RadioGroup>
                                        <span class="necessary"></span>
                                        <span class="tip"></span>
                                        <span class="msg">{{ error.engine_anti_theft_system }}</span>
                                    </td>
                                </tr>
                                <tr id="assist_type" :class="getClass(error.assist_type)">
                                    <td>助力类型</td>
                                    <td>
                                        <input type="text" class="form-text" v-model="form.assist_type">
                                        <span class="necessary"></span>
                                        <span class="tip"></span>
                                        <span class="msg">{{ error.assist_type }}</span>
                                    </td>
                                </tr>
                                <tr id="front_suspension_type" :class="getClass(error.front_suspension_type)">
                                    <td>前悬挂类型</td>
                                    <td>
                                        <input type="text" class="form-text" v-model="form.front_suspension_type">
                                        <span class="necessary"></span>
                                        <span class="tip"></span>
                                        <span class="msg">{{ error.front_suspension_type }}</span>
                                    </td>
                                </tr>
                                <tr id="back_suspension_type" :class="getClass(error.back_suspension_type)">
                                    <td>后悬挂类型</td>
                                    <td>
                                        <input type="text" class="form-text" v-model="form.back_suspension_type">
                                        <span class="necessary"></span>
                                        <span class="tip"></span>
                                        <span class="msg">{{ error.back_suspension_type }}</span>
                                    </td>
                                </tr>
                                <tr id="front_brake_type" :class="getClass(error.front_brake_type)">
                                    <td>前制动类型</td>
                                    <td>
                                        <input type="text" class="form-text" v-model="form.front_brake_type">
                                        <span class="necessary"></span>
                                        <span class="tip"></span>
                                        <span class="msg">{{ error.front_brake_type }}</span>
                                    </td>
                                </tr>
                                <tr id="back_brake_type" :class="getClass(error.back_brake_type)">
                                    <td>后制动类型</td>
                                    <td>
                                        <input type="text" class="form-text" v-model="form.back_brake_type">
                                        <span class="necessary"></span>
                                        <span class="tip"></span>
                                        <span class="msg">{{ error.back_brake_type }}</span>
                                    </td>
                                </tr>
                                <tr id="tire_desc" :class="getClass(error.tire_desc)">
                                    <td>轮胎描述</td>
                                    <td>
                                        <input type="text" class="form-text" v-model="form.tire_desc">
                                        <span class="necessary"></span>
                                        <span class="tip"></span>
                                        <span class="msg">{{ error.tire_desc }}</span>
                                    </td>
                                </tr>
                                <tr id="weight" :class="getClass(error.weight)">
                                    <td>权重</td>
                                    <td>
                                        <input type="number" step="0" class="form-text" v-model="form.weight">
                                        <span class="necessary"></span>
                                        <span class="tip">默认：0，仅允许输入整数</span>
                                        <span class="msg">{{ error.weight }}</span>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <!-- 功能配置 -->
                        <div class="option configuration hide" data-id="configuration">

                            <div class="group" v-for="v in configuration" :key="v.id">
                                <div class="run-title-3">
                                    <div class="left">{{ v.name }}</div>
                                    <div class="right"></div>
                                </div>
                                <div class="list">

                                    <div class="item" v-for="v1 in v.data">
                                        <div class="left">{{ v1.name }}</div>
                                        <div class="right">
                                            <RadioGroup v-model="v1.checked" @on-change="configurationChangeEvent">
                                                <Radio v-for="(v,k) in $store.state.business.bool_str" :key="k" :label="k">{{ v }}</Radio>
                                            </RadioGroup>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="submit">
                        <button type="submit" class="run-button run-button-submit">提交</button>
                    </div>
                </form>
            </div>
        </div>
        <v-loading ref="loading"></v-loading>
    </div>
</template>

<script src="./js/thing.js"></script>
<style src="../public/css/global.css"></style>
<style scoped src="../public/css/public.css"></style>
<style scoped src="../public/css/form.css"></style>
<style scoped src="./css/thing.css"></style>