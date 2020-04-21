import Vue from 'vue'
import App from './App.vue'
// Element组件完整导入
import ElementUI, { MessageBox } from 'element-ui';
// Element组件样式
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
// 导入axios
import axios from "axios";


// 绑定到原型
Vue.prototype.$axios = axios;
// 配置基准路径
axios.defaults.baseURL = "http://localhost:3000"
Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

axios.interceptors.response.use(res => {
  return res;
}, error => {
  // 如果请求返回的结果是错误的，会进入到错误的处理函数中
  // error是js原生的错误对象，我们可以用过error.response可以获取到详细的信息
  console.log(error.response);

  const { statusCode, message } = error.response.data;
  if (statusCode === 400) {
    MessageBox("用户名或者密码错误，请重新登录", "错误", {
      confirmButtonText: "确定"
    });

    // console.log(MessageBox);

  }
  // 如果不是登录状态的话，点击关注跳转到登录页
  if (statusCode === 403) {
    Toast.fail(message);
    // app.$router.push("/login")
    app.$router.push({
      path: "/login",
      query: {
        // app.$router.path是上一个页面的地址参数
        return_url: app.$route.path
      }
    });

  }
  return Promise.reject(error)
});