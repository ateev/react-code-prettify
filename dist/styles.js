(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'styled-components'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('styled-components'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.styledComponents);
        global.styles = mod.exports;
    }
})(this, function (exports, _styledComponents) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.TomorrowNight = undefined;

    var _styledComponents2 = _interopRequireDefault(_styledComponents);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _templateObject = _taggedTemplateLiteral(['\n  .prettyprint {\n    background: #1d1f21;\n    font-family: Menlo, "Bitstream Vera Sans Mono", "DejaVu Sans Mono", Monaco, Consolas, monospace;\n    border: 0 !important;\n  }\n  .pln {\n    color: #c5c8c6;\n  }\n  ol.linenums {\n    margin-top: 0;\n    margin-bottom: 0;\n    color: #969896;\n  }\n  li.L0,\n  li.L1,\n  li.L2,\n  li.L3,\n  li.L4,\n  li.L5,\n  li.L6,\n  li.L7,\n  li.L8,\n  li.L9 {\n    padding-left: 1em;\n    background-color: #1d1f21;\n    list-style-type: decimal;\n  }\n  @media screen {\n    .str {\n        color: #b5bd68;\n    }\n    .kwd {\n        color: #b294bb;\n    }\n    .com {\n        color: #969896;\n    }\n    .typ {\n        color: #81a2be;\n    }\n    .lit {\n        color: #de935f;\n    }\n    .pun {\n        color: #c5c8c6;\n    }\n    .opn {\n        color: #c5c8c6;\n    }\n    .clo {\n        color: #c5c8c6;\n    }\n    .tag {\n        color: #cc6666;\n    }\n    .atn {\n        color: #de935f;\n    }\n    .atv {\n        color: #8abeb7;\n    }\n    /* declaration */\n    \n    .dec {\n        color: #de935f;\n    }\n    .var {\n        color: #cc6666;\n    }\n    .fun {\n        color: #81a2be;\n    }\n  }\n'], ['\n  .prettyprint {\n    background: #1d1f21;\n    font-family: Menlo, "Bitstream Vera Sans Mono", "DejaVu Sans Mono", Monaco, Consolas, monospace;\n    border: 0 !important;\n  }\n  .pln {\n    color: #c5c8c6;\n  }\n  ol.linenums {\n    margin-top: 0;\n    margin-bottom: 0;\n    color: #969896;\n  }\n  li.L0,\n  li.L1,\n  li.L2,\n  li.L3,\n  li.L4,\n  li.L5,\n  li.L6,\n  li.L7,\n  li.L8,\n  li.L9 {\n    padding-left: 1em;\n    background-color: #1d1f21;\n    list-style-type: decimal;\n  }\n  @media screen {\n    .str {\n        color: #b5bd68;\n    }\n    .kwd {\n        color: #b294bb;\n    }\n    .com {\n        color: #969896;\n    }\n    .typ {\n        color: #81a2be;\n    }\n    .lit {\n        color: #de935f;\n    }\n    .pun {\n        color: #c5c8c6;\n    }\n    .opn {\n        color: #c5c8c6;\n    }\n    .clo {\n        color: #c5c8c6;\n    }\n    .tag {\n        color: #cc6666;\n    }\n    .atn {\n        color: #de935f;\n    }\n    .atv {\n        color: #8abeb7;\n    }\n    /* declaration */\n    \n    .dec {\n        color: #de935f;\n    }\n    .var {\n        color: #cc6666;\n    }\n    .fun {\n        color: #81a2be;\n    }\n  }\n']);

    function _taggedTemplateLiteral(strings, raw) {
        return Object.freeze(Object.defineProperties(strings, {
            raw: {
                value: Object.freeze(raw)
            }
        }));
    }

    var TomorrowNight = exports.TomorrowNight = _styledComponents2.default.div(_templateObject);
});