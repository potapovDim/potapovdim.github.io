
const {JSDOM} = require('jsdom')
const Enzyme = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')
Enzyme.configure({adapter: new Adapter()})

const jsdom = new JSDOM('<!doctype html><html><body></body></html>')
const {window} = jsdom

function copyProps(src, target) {
  const srcDescriptor = Object.getOwnPropertyDescriptors(src)
  const targetDescriptor = Object.getOwnPropertyDescriptors(target)
  Object.defineProperties(target, Object.assign(srcDescriptor, targetDescriptor))
}

global.window = window
global.document = window.document
global.navigator = {
  userAgent: 'node.js'
}
global.requestAnimationFrame = function(callback) {
  return setTimeout(callback, 0)
}
global.cancelAnimationFrame = function(id) {
  clearTimeout(id);
}
copyProps(window, global)
