<template>
    <div id="pmLogin" v-on:keyup.enter="keyEnterEvent">
        <div class="login-pad">
            <div class="project-manager-login-logo">
                <h2>项目管理器管理系统</h2>
            </div>
            <el-form :model="loginForm" label-width="120px" label-position="left">
                <el-form-item label="管理员帐号" prop="account" :rules="[{required: true, message:'帐号不能为空'}]">
                    <el-input type="text" v-model="loginForm.account" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input type="password" v-model="loginForm.password"
                              prop="password" :rules="[{required: true, message:'密码不能为空'}]"
                              autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            /*let checkAccount = (rule, value, callback) => {
               if(!value) {
                   return callback(new Error("帐号不能为空"));
               }
               // setTimeout(() => {});可以设置定时检查
            };*/
            return {
                loginForm: {
                    account: "",
                    password: ""
                },
                loginRule: {

                }
            }
        },
        methods: {
            keyEnterEvent() {
                console.log("回车");
            }
        }
    }
</script>

<style scoped>
    #pmLogin {
        background-color: darkcyan;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
    .login-pad {
        width: 500px;
        height: 400px;
        background-color: #f0f0f0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border-radius: 3px;
        box-shadow: 1px 1px 1px 1px #2c3e50;
        padding: 30px;
        box-sizing: border-box;
    }
    .project-manager-login-logo {
        margin-top: 30px;
        margin-bottom: 50px;
        transform: translate(-50px);
        background-color: #2c3e50;
        width: 100%;
        height: 75px;
        color: #f0f0f0;
    }
    .project-manager-login-logo>h2 {
        line-height: 75px;
        transform: translate(-50px);
    }
</style>