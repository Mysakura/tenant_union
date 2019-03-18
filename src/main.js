import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'
// 加入路由
import router from './plugins/router'

Vue.config.productionTip = false

new Vue({
    router,   // 路由
    render: h => h(App),
}).$mount('#app')
