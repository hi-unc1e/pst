<!--Vue实现的前端功能，通过接收用户输入的ip, port, encoder等参数，自动生成msfvenom的命令行-->
<template>
  <div>
      <h1>欢迎来到Venom Builder工具</h1>

    <input v-model="ip" placeholder="请输入IP">
    <input v-model="port" placeholder="请输入端口">
    <button @click="generatePayload">生成Payload</button>
    <FilterInput />
    <TextInput />
    <ButtonInput />
    <MsfVenomCommand />
    <MsfScript />
    <p>{{ result }}</p>

  </div>
</template>

<script>
import FilterInput from "@/components/VB/FilterInput.vue";
import TextInput from "@/components/VB/TextInput.vue";
import ButtonInput from "@/components/VB/ButtonInput.vue";
import MsfVenomCommand from "@/components/VB/MsfVenomCommand.vue";
import MsfScript from "@/components/VB/MsfScript.vue";

export default {
  name: "VenomBuilder",
  components: {
    FilterInput,
    TextInput,
    ButtonInput,
    MsfVenomCommand,
    MsfScript
  }
};
</script>
