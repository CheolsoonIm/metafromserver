!function(e){var r={};function t(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var i in e)t.d(n,i,function(r){return e[r]}.bind(null,i));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=1)}([function(e,r){e.exports=require("fs")},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});const n=t(2),i=t(6),o=Buffer.from("(function (exports, require, module, __filename, __dirname) { "),u=Buffer.from("\n});"),c=Buffer.from("#!"),a=Buffer.from("\r")[0],s=Buffer.from("\n")[0],f=(e,r,t)=>{if(n.hash(e)===r)return!0;if(t){if(i=c,e.slice(0,i.length).equals(i)){let t=e.indexOf(s);return e[t-1]===a&&t--,n.hash(e.slice(t))===r}if(n.hash(Buffer.concat([o,e,u]))===r)return!0}var i;return!1},l=e=>e instanceof Buffer?e:Buffer.from(e,"utf-8");var d;process.send&&(d=process.send.bind(process),process.on("message",e=>{(async function(e){switch(e.type){case 0:try{const r=await i.readFileRaw(e.file);return{id:e.id,hash:n.hash(r)}}catch(r){return{id:e.id}}case 1:try{return{id:e.id,hash:n.hash(l(e.data))}}catch(r){return{id:e.id}}case 2:try{const r=await i.readFileRaw(e.file);return{id:e.id,matches:f(r,e.expected,e.checkNode)}}catch(r){return{id:e.id,matches:!1}}case 3:try{return{id:e.id,matches:f(l(e.data),e.expected,e.checkNode)}}catch(r){return{id:e.id,matches:!1}}}})(e).then(d)}))},function(e,r,t){const{hash:n}=t(3),i=Buffer.alloc(20);r.hash=e=>(n(o(e),i),i.toString("hex"));const o=e=>(e=>e.length>=3&&239===e[0]&&187===e[1]&&191===e[2])(e)?u(e.slice(3)):(e=>e.length>=2&&255===e[0]&&254===e[1])(e)?e.slice(2):(e=>e.length>=2&&254===e[0]&&255===e[1])(e)?e.slice(2).swap16():u(e),u=e=>Buffer.from(e.toString("utf8"),"utf16le")},function(e,r,t){let n,i=null;function o(){return null!==i&&i.buffer===n.memory.buffer||(i=new Uint8Array(n.memory.buffer)),i}let u=0;function c(e,r){const t=r(1*e.length);return o().set(e,t/1),u=e.length,t}e.exports.hash=function(e,r){try{var t=c(e,n.__wbindgen_malloc),i=u,a=c(r,n.__wbindgen_malloc),s=u;n.hash(t,i,a,s)}finally{r.set(o().subarray(a/1,a/1+s)),n.__wbindgen_free(a,1*s)}},n=t(4)},function(e,r,t){const n=t(5).join(__dirname,"chromehash_bg.wasm"),i=t(0).readFileSync(n);const o=new WebAssembly.Module(i),u=new WebAssembly.Instance(o,{});e.exports=u.exports},function(e,r){e.exports=require("path")},function(e,r,t){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r};Object.defineProperty(r,"__esModule",{value:!0});const i=n(t(0)),o=n(t(7));r.fsModule=i,r.canAccess=async function({access:e},r){if(!r)return!1;try{return await e(r),!0}catch(e){return!1}},r.moveFile=async function({copyFile:e,rename:r,unlink:t},n,i){try{await r(n,i)}catch(r){await e(n,i),await t(n)}},r.stat=function(e){return new Promise(r=>{i.stat(e,(e,t)=>r(e?void 0:t))})},r.readdir=function(e){return new Promise(r=>{i.readdir(e,"utf8",async(e,t)=>{r(e?[]:t)})})},r.readfile=function(e){return new Promise(r=>{i.readFile(e,"utf8",async(e,t)=>{r(e?"":t)})})},r.writeFile=o.promisify(i.writeFile),r.readFileRaw=function(e){return i.promises.readFile(e).catch(()=>Buffer.alloc(0))},r.exists=function(e){return new Promise(r=>{i.exists(e,r)})}},function(e,r){e.exports=require("util")}]);