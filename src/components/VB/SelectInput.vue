<template>
  <select v-model="selectedOption">
    <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
  </select>
</template>


<script>
export default {
  name: 'SelectInput',
  props: {
    options: {
      type: Array,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      selectedOption: this.value
    };
  },
  watch: {
    selectedOption() {
      this.$emit('input', this.selectedOption);
    },
    value(newValue) {
      this.selectedOption = newValue;
    }
  }
};
</script>
