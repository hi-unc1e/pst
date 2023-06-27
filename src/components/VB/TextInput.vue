<template>
  <input type="text" v-model="text" :placeholder="placeholder">
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    placeholder: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      text: '',
    };
  },
};
</script>
