import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'
import axios from 'axios'

Vue.prototype.axios = axios;

Vue.config.productionTip = false

Vue.filter('setWH',(url,arg) =>{
  return url.replace(/w\.h/,arg);
});
// scroller全局组件
import Scroller from '@/components/Scroller/Scroller.vue'
Vue.component('Scroller',Scroller);

// loading 组件全局注册
import Loading from '@/components/Loading/Loading.vue'
Vue.component('Loading',Loading);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
