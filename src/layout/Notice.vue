<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    code?: number
    msg?: string
    visible?: boolean
}>()

const classObj = computed(() => ({
    'is-primary': props.code.value === 200,
    'is-danger': props.code.value !== 200
}))
</script>

<template>
    <div v-if="visible" class="notification" :class="classObj">
        <button class="delete"></button>
        {{ props.msg }}
    </div>
</template>