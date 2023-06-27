<template>
  <div id="wrap">
    <div id="container">
      <div class="entry">
        <h1>java.lang.Runtime.exec() Encoder</h1>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <article>
          <p>偶尔有时命令执行有效负载<code>Runtime.getRuntime().exec()</code>失败. 使用 web shells, 反序列化漏洞或其他向量时可能会发生这种情况.</p>
          <p>有时这是因为重定向和管道字符的使用方式在正在启动的进程的上下文中没有意义. 例如 <code>ls &gt; dir_listing</code> 在shell中执行应该将当前目录的列表输出到名为的文件中
            <code>dir_listing</code>. 但是在 <code>exec()</code> 函数的上下文中,该命令将被解释为获取 <code>&gt;</code> 和
            <code>dir_listing</code> 目录.</p>
          <p>其他时候,其中包含空格的参数会被StringTokenizer类破坏.该类将空格分割为命令字符串. 那样的东西 <code>ls "My Directory"</code> 会被解释为 <code>ls '"My'
            'Directory"'</code>.</p>
          <p>在Base64编码的帮助下, 下面的转换器可以帮助减少这些问题. 它可以通过调用Bash或PowerShell再次使管道和重定向更好,并且还确保参数中没有空格.</p>
          <p>
            Input type:
            <label for="bash">
              <input
                  type="radio"
                  id="bash"
                  value="bash"
                  v-model="option"
                  @change="processInput"
              />
              Bash
            </label>
            <label for="powershell">
              <input
                  type="radio"
                  id="powershell"
                  value="powershell"
                  v-model="option"
                  @change="processInput"
              />
              PowerShell
            </label>
            <label for="python">
              <input
                  type="radio"
                  id="python"
                  value="python"
                  v-model="option"
                  @change="processInput"
              />
              Python
            </label>
            <label for="perl">
              <input
                  type="radio"
                  id="perl"
                  value="perl"
                  v-model="option"
                  @change="processInput"
              />
              Perl
            </label>
          </p>
          <p>
            <textarea
                rows="10"
                style="width: 100%; box-sizing: border-box;"
                id="input"
                v-model="input"
                @input="processInput"
                :placeholder="placeholderText"
            ></textarea>
            <textarea
                rows="5"
                style="width: 100%; box-sizing: border-box;"
                id="output"
                v-model="output"
                @click="selectOutput"
                readonly
            ></textarea>
          </p>
        </article>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      option: "bash",
      input: "",
      output: "",
      placeholderText: "Type Bash here...",
    };
  },
  methods: {
    processInput() {
      switch (this.option) {
        case "bash":
          this.placeholderText = "Type Bash here...";
          this.output = "bash -c {echo," + btoa(this.input) + "}|{base64,-d}|{bash,-i}";
          break;
        case "powershell":
          this.placeholderText = "Type PowerShell here...";
          var poshInput = "";
          for (let i = 0; i < this.input.length; i++) {
            poshInput += this.input[i] + unescape("%00");
          }
          this.output = "powershell.exe -NonI -W Hidden -NoP -Exec Bypass -Enc " + btoa(poshInput);
          break;
        case "python":
          this.placeholderText = "Type Python here...";
          this.output = "python -c exec('" + btoa(this.input) + "'.decode('base64'))";
          break;
        case "perl":
          this.placeholderText = "Type Perl here...";
          this.output = "perl -MMIME::Base64 -e eval(decode_base64('" + btoa(this.input) + "'))";
          break;
        default:
          this.output = "";
      }

      if (!this.input) this.output = "";
    },
    selectOutput(event) {
      event.target.focus();
      event.target.select();
    },
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 10px 0;
  text-align: center;
  font-family: 'Ubuntu Condensed', sans-serif;
  color: #585858;
  background-color: #fff;
  font-size: 13px;
  line-height: 1.4
}

::selection {
  background: #fff2a8;
}

pre, code {
  font-family: 'Ubuntu Mono', 'Consolas', Monospace;
  font-size: 13px;
  background-color: #E5F5E5;
  color: #585858;
  padding-left: 0.25em;
  padding-right: 0.25em;
  /*display: block;*/
}

#wrap {
  margin-left: 1em;
  margin-right: 1em;
  text-align: left;
  font-size: 13px;
  line-height: 1.4
}

#wrap {
  width: 820px;
}

#container {
  float: right;
  width: 610px;
}

.entry {
  font-size: 14px;
  line-height: 20px;
  hyphens: auto;
  font-family: 'Roboto', sans-serif, 'Inconsolata', Monospace;
}
</style>