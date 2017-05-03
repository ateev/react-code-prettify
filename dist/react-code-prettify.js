(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', 'code-prettify', './styles'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('code-prettify'), require('./styles'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.codePrettify, global.styles);
        global.reactCodePrettify = mod.exports;
    }
})(this, function (exports, _react, _codePrettify, _styles) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _codePrettify2 = _interopRequireDefault(_codePrettify);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var Code = function (_React$Component) {
        _inherits(Code, _React$Component);

        function Code() {
            _classCallCheck(this, Code);

            return _possibleConstructorReturn(this, (Code.__proto__ || Object.getPrototypeOf(Code)).apply(this, arguments));
        }

        _createClass(Code, [{
            key: 'render',
            value: function render() {
                var codeData = _codePrettify2.default.prettyPrintOne(this.props.codeString);
                var codeClassName = this.props.language !== undefined ? 'language-' + this.props.language : undefined;
                return _react2.default.createElement(
                    _styles.TomorrowNight,
                    null,
                    _react2.default.createElement(
                        'pre',
                        { className: 'prettyprint' },
                        _react2.default.createElement(
                            'code',
                            { className: codeClassName },
                            _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: codeData } })
                        )
                    )
                );
            }
        }]);

        return Code;
    }(_react2.default.Component);

    exports.default = Code;
});