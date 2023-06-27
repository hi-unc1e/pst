<template>
  <div class="panel panel-default margin-top-20">
    <div class="panel-heading bold">
      <i data-clipboard-target="#vbOutput" style="line-height:1.5em" class="fa fa-clipboard clipboard margin-right-10"></i>
      <span>MSF Venom Command</span>
    </div>
    <div class="panel-body display-flex">
      <pre id="vbOutput" style="line-height:1.5em">{{ command }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  name: "MsfVenomCommand",
  props: {
    payload: String,
    lhost: String,
    lport: String,
    platform: String,
    arch: String,
    nops: String,
    encoder: String,
    iterations: String,
    badchars: String,
    addparams: String,
    format: String,
    outfile: String,
  },
  computed: {
    command() {
      // 拼接各个参数到msfvenom的命令
      return `msfvenom -p ${this.payload} LHOST=${this.lhost} LPORT=${this.lport} ${this.platform ? `PLATFORM=${this.platform}` : ""} ${this.arch ? `ARCH=${this.arch}` : ""} ${this.nops ? `NOP=${this.nops}` : ""} ${this.encoder ? `Encoder=${this.encoder}` : ""} ${this.iterations ? `ITERATIONS=${this.iterations}` : ""} ${this.badchars ? `BADCHARS=${this.badchars}` : ""} ${this.addparams ? this.addparams : ""} ${this.format ? `FORMAT=${this.format}` : ""} ${this.outfile ? `OUTFILE=${this.outfile}` : ""}`;
    },
  },
};
</script>
