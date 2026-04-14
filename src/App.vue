<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/layout/NavBar.vue'
import FooterBar from '@/layout/FooterBar.vue'
</script>

<template>
  <NavBar />
  <RouterView />
  <FooterBar />
</template>