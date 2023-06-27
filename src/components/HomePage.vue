<template>
<!--  渗透测试工作台-首页。通过模块化的设计，使得使用者能够构建前端/后端的功能。 -->
  <div>
    <h1>渗透测试工作台</h1>
    <router-link to="/tools/venom-builder/">Venom Builder</router-link>
    <br>
    <router-link to="/java-runtime-encoder">Java-Runtime-Encoder</router-link>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HomePage', // 修改此处

  data() {
    return {
      ip: '',
      port: '',
      result: ''
    };
  },
  methods: {
    async generatePayload() {
      try {
        const response = await axios.post('http://127.0.0.1:5000/generate-payload', {
          ip: this.ip,
          port: this.port
        });
        this.result = response.data.result;
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>
