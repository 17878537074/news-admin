import Vue from 'vue'
import App from './App.vue'
// Element组件完整导入
import ElementUI from 'element-ui';
// Element组件样式
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'

Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
