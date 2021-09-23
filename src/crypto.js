'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const createHash = require('create-hash');
const x17hash = require('./x17hash.js');
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
  // init hash class
  const x17 = new x17hash();
  return Buffer.from(x17.hash(buffer.toString('hex')), "hex");
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
