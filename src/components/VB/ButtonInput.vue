<template>
  <button @click="onClick">{{ label }}</button>
</template>

<script>
export default {
  name: 'ButtonInput',
  props: {
    label: {
      type: String,
      required: true
    }
  },
  methods: {
    onClick() {
      this.$emit('click');
    }
  }
};
</script>
