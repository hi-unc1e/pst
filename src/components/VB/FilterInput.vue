<template>
  <input v-model="filterText" :placeholder="placeholder" @input="onInput" />
</template>

<script>
export default {
  props: {
    placeholder: String,
    options: {
      type: Array,
      default: () => []
    },
    filterProp: {
      type: String,
      default: "text"
    }
  },
  data() {
    return {
      filterText: ""
    };
  },
  methods: {
    onInput() {
      this.$emit("filter", this.filterText);
    }
  }
};
</script>
