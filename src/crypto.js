'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const createHash = require('create-hash');

function ripemd160(buffer) {
  try {
    return createHash('rmd160')
      .update(buffer)
      .digest();
  } catch (err) {
    return createHash('ripemd160')
      .update(buffer)
      .digest();
  }
}
exports.ripemd160 = ripemd160;
function sha1(buffer) {
  return createHash('sha1')
    .update(buffer)
    .digest();
}
exports.sha1 = sha1;
function sha256(buffer) {
  return createHash('sha256')
    .update(buffer)
    .digest();
}
exports.sha256 = sha256;

function x17(buffer) {
  //var x17Hash = require('multi-hashing');
  return createHash('sha256')
    .update(buffer)
    .digest();
  // try {
  //   return x17Hash['x15'](buffer);  
  // } catch (err) {
  //   console.log("X17 Hash Algorithm Error")
  //   console.log(err);
  //   console.log("------------------");
  //   return sha256(buffer);
  // }
  // return createHash('sha256')
  // .update(buffer)
  // .digest();
}
exports.x17 = x17;

function hash160(buffer) {
  return ripemd160(sha256(buffer));
}
exports.hash160 = hash160;
function hash256(buffer) {
  return sha256(sha256(buffer));
}
exports.hash256 = hash256;
