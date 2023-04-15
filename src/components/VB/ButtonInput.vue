<template>
  <div class="form-group">
    <button class="btn btn-default" @click="onClick">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "ButtonInput",
  methods: {
    onClick() {
      this.$emit("click");
    },
  },
};
</script>
