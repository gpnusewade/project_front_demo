<template>
    <div id="admin-home-page">
        <div class="pm-admin-left-nav">
            <el-menu class="right-menu" :collapse="isOpen">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span slot="title">导航一</span>
                    </template>
                    <el-menu-item-group>
                        <span slot="title">分组一</span>
                        <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                        <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                        <span slot="title">选项4</span>
                        <el-menu-item index="1-4-1">选项1</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="3" disabled>
                    <i class="el-icon-document"></i>
                    <span slot="title">导航三</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span slot="title">导航四</span>
                </el-menu-item>
            </el-menu>
            <!--<div class="ctrl-collapse">
                <i class="el-icon-arrow-right"></i>
            </div>-->
        </div>
        <div class="pm-admin-right-right-page">
            右侧主页
            <router-view to="/user"></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home.vue",
        data() {
            return {
                isOpen: false, //侧边展开与否
            }
        }
    }
</script>

<style scoped>
    .pm-admin-left-nav,.pm-admin-right-right-page {
        display: inline-block;
        vertical-align: top;
    }
    .pm-admin-left-nav {
        position: relative;
    }
    .pm-admin-left-nav>.ctrl-collapse {
        position: absolute;
        right: -20px;
        top: 0;
        transform: translate(-50%);
        height: 100%;
        cursor: pointer;
        line-height: 100%;
    }
    .pm-admin-left-nav>.ctrl-collapse:hover {
        color: #f0f0f0;
        background-color: rgba(125,125,125,0.7);
    }
</style>