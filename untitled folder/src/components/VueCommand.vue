<template>
  <div class="container">
    <div id="terminal-container"></div>
  </div>
</template>

<script>
import "xterm/dist/xterm.css";
import { Terminal } from "xterm";
import * as fit from "xterm/lib/addons/fit/fit";
Terminal.applyAddon(fit); // Apply the `fit` addon

import 'xterm/dist/addons/fullscreen/fullscreen.css'//如果不成功，请检查路径

import * as fullscreen from 'xterm/lib/addons/fullscreen/fullscreen';
Terminal.applyAddon(fullscreen);  // Apply the `fullscreen` addon

export default {
  data() {
    return {
      copy: ""
    };
  },
  mounted() {
    let terminalContainer = document.getElementById("terminal-container");
    let term = new Terminal({
      // 光标闪烁
      cursorBlink: true
    });
    term.open(terminalContainer, true);
    //term.toggleFullScreen();
    term.fit();

    let websocket = new WebSocket('ws://localhost:7777/websocket/s');//地址
    websocket.binaryType = "arraybuffer";
    //连接成功
    websocket.onopen = function(evt) {
      console.log("onopen", evt);
      term.writeln(
        "Connected Success!"
      );
    };
    //输入
    term.on("data", function(data) {
      //term.write(data);
      console.log("data", data);
      websocket.send(data);
      //websocket.send(new TextEncoder().encode("\x00" + data));
    });
    //返回
    websocket.onmessage = function(evt) {
      let str = evt.data;
      console.log("back_data",evt.data)
      term.write(str);
    };
    //关闭
    websocket.onclose = function(evt) {
      console.log("close", evt);
    };
    //错误
    websocket.onerror = function(evt) {
      console.log("error", evt);
    };
    //选中 复制
    term.on("selection", function() {
      if (term.hasSelection()) {
        this.copy = term.getSelection();
      }
    });
    term.attachCustomKeyEventHandler(function(ev) {
      //粘贴 ctrl+v
      if (ev.keyCode == 86 && ev.ctrlKey) {
        websocket.send(new TextEncoder().encode("\x00" + this.copy));
      }
    });
  }
};
</script>