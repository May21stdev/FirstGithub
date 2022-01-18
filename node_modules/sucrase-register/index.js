'use strict'

const { transform } = require('sucrase')
const { addHook } = require('pirates')

module.exports = opts =>
  addHook(code => transform(code, opts), { exts: ['.jsx'] })
