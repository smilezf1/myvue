// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.


import Vue from 'vue' //vue框架
import App from './App' //APP根组件
import router from './router' //路由文件
import Vuex from 'vuex';//引入vuex
import iView from 'iview';//引入iview
import 'iview/dist/styles/iview.css'; //引入iview中的css
Vue.config.productionTip = false //阻止vue在启动时生成生产提示
Vue.use(iView);
Vue.use(Vuex);

const store=new Vuex.Store({
  //state这个属性就是vuex仓库装数据的地方,state相当于组件中的data属性,用来提供数据的
  state:{
    data1:"aa",
    data2:12.4
  },
  //getters这个属性是用来配置公共数据的计算属性,getters相当于组件中computed属性,用来计算复杂逻辑的。官方说：getters的返回值会根据
  //它的依赖被缓存起来,且只有它的依赖值发生改变才会重新计算。
  getters:{
    data1_UpperCase(state){
      return state.data1.toUpperCase();
    },
    data2_Int(state){
      return parseInt(state.data2);
    }
  },
  //mutations这个属性用来配置公共仓库的方法,相当于组件中的methods属性,用来定义方法,实际作用就是修改state的数据;
  //官方说法:你不能直接改变store中的state,改变store中的state的唯一途径就是显示的提交mutations,这样改变state,在vue的devtools工具里
  //跟踪数据变化历史,mutations里面的方法在改变state时，必须时同步改变,异步的话,devtools就检测不到state数据的变化，如果要异步改变
  //state的数据，可以把mutations的方法,在actions里面调用
  mutations:{
    setData1(state,arg){
      state.data1=arg;
    },
    setData2(state,arg){
     setTimeout(()=>{
       state.data2=arg
     },2000)
    }
  },
  //action这个属性用来调用mutations里面的方法
  actions:{
    m1(store,arg){
      //不管同步还是异步,改变state数据,devtools都能跟踪数据变化
      setTimeout(function(){
        store.commit("setData1",arg[0]);
        store.commit("setData2",arg[1]);
      },2000)
    }
  }
})




/* eslint-disable no-new */
new Vue({
  el: '#app', //vue数据装在index.html页面中id为app的那个标签里面
  router,//基本路由
  store,//把仓库提供给当前根组件
  components: {App}, //把引入的app组件注册给vue
  template: '<App/>' //上面注册了，表示向标签里面插入已注册的app组件里面的数据
})
