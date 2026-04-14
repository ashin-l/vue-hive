<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
import Notice from "./Notice.vue";

// 使用 ref 声明响应式变量
const visible = ref(false);
const code = ref(200);
const msg = ref("xxxx");

const showNotice = () => {
    console.log('showNotice');
    visible.value = true;
    setTimeout(() => {
        visible.value = false;
    }, 5000); // 5秒后关闭提示框
}
</script>

<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.org.cn">
                <img src="@/assets/logo.svg">
            </a>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"
                data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
                <RouterLink to="/" class="navbar-item">Home</RouterLink>
                <RouterLink to="/blog" class="navbar-item">Blog</RouterLink>
                <!-- <RouterLink to="/stock" class="navbar-item">全部股票</RouterLink> -->
                <RouterLink to="/about" class="navbar-item">About</RouterLink>
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <a class="button is-primary">
                            <strong>Sign up</strong>
                        </a>
                        <a class="button is-light" @click="showNotice">
                            Log in
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <Notice :visible="visible" :code="code" :msg="msg" />
</template>