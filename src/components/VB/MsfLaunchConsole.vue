<template>
  <div>
    <button @click="launchConsole">Launch Console</button>
    <div v-if="consoleLaunched">
      <iframe ref="consoleFrame" srcdoc="<html><body><script src='/msf_console'></script></body></html>" width="100%" height="500"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MsfLaunchConsole',
  data() {
    return {
      consoleLaunched: false
    };
  },
  methods: {
    launchConsole() {
      this.consoleLaunched = true;
    }
  },
  mounted() {
    const consoleFrame = this.$refs.consoleFrame;
    consoleFrame.addEventListener('load', () => {
      consoleFrame.contentWindow.postMessage('start_console', '*');
    });
  }
};
</script>
