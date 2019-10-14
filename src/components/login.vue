<template>
    <div class="login">
        <div class="manage">
          <div class="manage-title">后台管理系统</div>
          <i-form :model="loginForm" :rules="loginRules" ref="loginForm">
         <Form-item prop="userName">
             <i-input placeholder="请输入用户名" v-model="loginForm.userName">
                    <Icon type="ios-person" :size="16" slot="prepend"></Icon>
             </i-input>
         </Form-item>
         <Form-item prop="password">
          <i-input placeholder="请输入密码" v-model="loginForm.password">
            <Icon type="md-lock" :size="16" slot="prepend"></Icon>
            
          </i-input>
         </Form-item>
          </i-form>
          <i-button type="primary" class="loginBtn" @click="login(loginForm)" long>登录</i-button>
        </div>
    </div>
</template>
<script>
export default{
    name:"login",
    data(){
        return{
            loginForm:{
                userName:"",
                password:""
            },
          loginRules:{
              userName:[
                  {
                      required:true,
                      message:"账号不能为空",
                      tirgger:"blur"
                  },
                  {
                      required:true,
                      message:"密码不能为空",
                      tirgger:"blur"
                  }
              ]

          }
        }
    },
    mounted(){
      
        

    },
    methods:{
        login:function(loginForm){
            console.log(this.$refs)
        }
    }
    
    }
</script>
<style>
html,body{
    height:100%;
}
*{
    margin:0;
    padding:0;
}
.login{
    width:100%;
    height:100vh;
   background:url("../assets/login.jpg") no-repeat;
   position:relative;
}
.login .manage{
    width:360px;
    height:275px; 
    background:hsla(0,0%,100%,.5);
    position:absolute;
    top:29%;
    right:8%;
    border-radius:6px;
    text-align:center;
    padding:20px;
    box-sizing: border-box;  
}
.login .manage-title{
    color:white;
    font-size:18px;
    font-weight:550;
    margin:5px 0 20px 0;
}
.loginBtn{
    background:#d51b51;
    border-color:#d51b51;
}

</style>