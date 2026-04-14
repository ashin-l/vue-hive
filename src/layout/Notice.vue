<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    code?: number
    msg?: string
    visible?: boolean
}>()

const classObj = computed(() => ({
    // 修复：去掉多余的 .value
    'is-primary': props.code === 200,
    'is-danger': props.code !== 200
}))
</script>

<template>
    <div v-if="visible" class="notification" :class="classObj">
        <button class="delete"></button>
        {{ props.msg }}
    </div>
</template>