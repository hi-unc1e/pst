<template>
    <div class="panel panel-default margin-top-20">
      <div class="panel-heading bold">
        <i
          data-clipboard-target="#msfScript"
          style="line-height: 1.5em"
          class="fa fa-clipboard clipboard margin-right-10"
        ></i>
        <span>Load Handler Only</span>
      </div>
      <div class="panel-body display-flex">
        <pre
          id="msfScript"
          style="line-height: 1.5em; width: 100%; padding: 0;"
          class="input-clean"
        >use exploit/multi/handler
  set PAYLOAD 
  set LHOST 
  set LPORT 
  run
  .</pre>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "MsfScript"
  };
  </script>
  