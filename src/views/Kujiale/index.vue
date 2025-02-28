<template>
    <div class="grid">
        <div class="cell">
            <div class="field is-grouped">
                <div class="control">
                    <button @click="handleSubmit" class="button is-link">提交</button>
                </div>
                <div class="control">
                    <button @click="clear" class="button is-link is-light">清空</button>
                </div>
            </div>
            <div class="control">
                <textarea v-model="jsonStr" class="textarea" rows="25" placeholder="请输入Json"></textarea>
            </div>
        </div>
        <div class="cell">
            <div class="field is-grouped">
                <div class="control">
                    <button @click="copyData" class="button is-link">复制</button>
                </div>
            </div>
            <div class="control">
                <textarea v-model="data" class="textarea" rows="25" readonly></textarea>
            </div>
        </div>
    </div>
    <Message ref="message" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import Message from '@/components/Message.vue'; // 引入自定义消息提示组件

const jsonStr = ref('');
const data = ref('');
const message = ref<InstanceType<typeof Message>>(); // 消息提示组件的引用

// 提交表单
const handleSubmit = async () => {
    try {
        const response = await axios.post('/kujiale', jsonStr.value);
        data.value = String(response.data.data);
        data.value = data.value.replace(/,/g, '\n');
        message.value?.showMessage('解析成功', 'success'); // 显示成功消息
    } catch (error) {
        console.error('解析失败:', error);
        message.value?.showMessage('解析失败，请重试', 'error'); // 显示失败消息
    }
};

const clear = async () => {
    jsonStr.value = '';
}

const copyData = async () => {
    try {
        await navigator.clipboard.writeText(data.value);
        message.value?.showMessage('内容已复制', 'success'); // 显示成功消息
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
};
</script>