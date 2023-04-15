<template>
  <select v-model="selectedPlatform">
    <option v-for="platform in platforms" :key="platform" :value="platform">{{ platform }}</option>
  </select>
</template>


<script>
export default {
  name: 'PlatformInput',
  data() {
    return {
      platforms: ['Windows', 'Linux', 'Mac', 'Android'],
      selectedPlatform: 'Windows',
    };
  },
};
</script>
