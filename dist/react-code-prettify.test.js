(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['react', 'enzyme', '../react-code-prettify.jsx'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('react'), require('enzyme'), require('../react-code-prettify.jsx'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.reactCodePrettify);
    global.reactCodePrettifyTest = mod.exports;
  }
})(this, function (_react, _enzyme, _reactCodePrettify) {
  'use strict';

  var _react2 = _interopRequireDefault(_react);

  var _reactCodePrettify2 = _interopRequireDefault(_reactCodePrettify);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  test('render maeve input', function () {
    var component = (0, _enzyme.shallow)(_react2.default.createElement(_reactCodePrettify2.default, null));
    expect(component).toMatchSnapshot();
  });
});