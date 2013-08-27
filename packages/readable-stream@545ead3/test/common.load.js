montageDefine("545ead3","test/common",{dependencies:["path","assert","util","child_process"],factory:function(e,t){function n(e){for(var t=[];e;e=e.__proto__)t.push(e.constructor);return t.join()}function a(){var e=l.filter(function(e){return e.actual!==e.expected});e.forEach(function(e){console.log("Mismatched %s function calls. Expected %d, actual %d.",e.name,e.expected,e.actual),console.log(e.stack.split("\n").slice(2).join("\n"))}),e.length&&process.exit(1)}var s=e("path"),r=e("assert");t.testDir=s.dirname(__filename),t.fixturesDir=s.join(t.testDir,"fixtures"),t.libDir=s.join(t.testDir,"../lib"),t.tmpDir=s.join(t.testDir,"tmp"),t.PORT=12346,t.PIPE="win32"===process.platform?"\\\\.\\pipe\\libuv-test":t.tmpDir+"/test.sock";var i=e("util");for(var o in i)t[o]=i[o];t.indirectInstanceOf=function(e,t){if(e instanceof t)return!0;var a=n(t.prototype),s=n(e);return s.slice(-a.length)===a},t.ddCommand=function(e,n){if("win32"===process.platform){var a=s.resolve(t.fixturesDir,"create-file.js");return'"'+process.argv[0]+'" "'+a+'" "'+e+'" '+1024*n}return'dd if=/dev/zero of="'+e+'" bs=1024 count='+n},t.spawnPwd=function(t){var n=e("child_process").spawn;return"win32"===process.platform?n("cmd.exe",["/c","cd"],t):n("pwd",[],t)},t.globalCheck=!0,process.on("exit",function(){if(t.globalCheck){var e=[setTimeout,setInterval,global.setImmediate,clearTimeout,clearInterval,global.clearImmediate,console,Buffer,process,global];global.errno&&e.push(errno),global.gc&&e.push(gc),global.DTRACE_HTTP_SERVER_RESPONSE&&(e.push(DTRACE_HTTP_SERVER_RESPONSE),e.push(DTRACE_HTTP_SERVER_REQUEST),e.push(DTRACE_HTTP_CLIENT_RESPONSE),e.push(DTRACE_HTTP_CLIENT_REQUEST),e.push(DTRACE_NET_STREAM_END),e.push(DTRACE_NET_SERVER_CONNECTION),e.push(DTRACE_NET_SOCKET_READ),e.push(DTRACE_NET_SOCKET_WRITE)),global.COUNTER_NET_SERVER_CONNECTION&&(e.push(COUNTER_NET_SERVER_CONNECTION),e.push(COUNTER_NET_SERVER_CONNECTION_CLOSE),e.push(COUNTER_HTTP_SERVER_REQUEST),e.push(COUNTER_HTTP_SERVER_RESPONSE),e.push(COUNTER_HTTP_CLIENT_REQUEST),e.push(COUNTER_HTTP_CLIENT_RESPONSE)),global.ArrayBuffer&&(e.push(ArrayBuffer),e.push(Int8Array),e.push(Uint8Array),e.push(Uint8ClampedArray),e.push(Int16Array),e.push(Uint16Array),e.push(Int32Array),e.push(Uint32Array),e.push(Float32Array),e.push(Float64Array),e.push(DataView));for(var n in global){var a=!1;for(var s in e)if(global[n]===e[s]){a=!0;break}a||(console.error("Unknown global: %s",n),r.ok(!1,"Unknown global found"))}}});var l=[];t.mustCall=function(e,t){"number"!=typeof t&&(t=1);var n={expected:t,actual:0,stack:Error().stack,name:e.name||"<anonymous>"};return 0===l.length&&process.on("exit",a),l.push(n),function(){return n.actual++,e.apply(this,arguments)}}}});