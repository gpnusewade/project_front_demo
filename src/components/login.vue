<template>
    <div id="pmLogin">
        <div class="login-pad"></div>
    </div>
</template>

<script>
    export default {
        name: "login"
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
    }
</style>