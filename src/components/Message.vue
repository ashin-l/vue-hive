<template>
    <div v-if="visible" class="message" :class="type">
        {{ text }}
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const visible = ref(false);
const text = ref('');
const type = ref<'success' | 'error'>('success');

const showMessage = (message: string, messageType: 'success' | 'error') => {
    text.value = message;
    type.value = messageType;
    visible.value = true;
    setTimeout(() => {
        visible.value = false;
    }, 3000); // 3 秒后自动隐藏
};

defineExpose({ showMessage });
</script>

<style scoped>
.message {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px 20px;
    border-radius: 4px;
    color: white;
    z-index: 1000;
}

.success {
    background-color: #67c23a;
}

.error {
    background-color: #f56c6c;
}
</style>