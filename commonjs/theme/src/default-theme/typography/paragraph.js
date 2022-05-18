"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _text = _interopRequireDefault(require("./text"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

/**
 * Text styles for paragraphs (multi line text).
 * This is used in the Paragraph.
 * @property {Object} text.500 - Required property.
 * @property {Object} text.400 - Required property. Default.
 * @property {Object} text.300 - Required property.
 */
var _default = {
  '500': _objectSpread(_objectSpread({}, _text["default"]['500']), {}, {
    lineHeight: '24px'
  }),
  '400': _objectSpread(_objectSpread({}, _text["default"]['400']), {}, {
    lineHeight: '21px'
  }),
  '300': _objectSpread(_objectSpread({}, _text["default"]['300']), {}, {
    lineHeight: '18px'
  })
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJ0ZXh0IiwibGluZUhlaWdodCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90aGVtZS9zcmMvZGVmYXVsdC10aGVtZS90eXBvZ3JhcGh5L3BhcmFncmFwaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdGV4dCBmcm9tICcuL3RleHQnXG5cbi8qKlxuICogVGV4dCBzdHlsZXMgZm9yIHBhcmFncmFwaHMgKG11bHRpIGxpbmUgdGV4dCkuXG4gKiBUaGlzIGlzIHVzZWQgaW4gdGhlIFBhcmFncmFwaC5cbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSB0ZXh0LjUwMCAtIFJlcXVpcmVkIHByb3BlcnR5LlxuICogQHByb3BlcnR5IHtPYmplY3R9IHRleHQuNDAwIC0gUmVxdWlyZWQgcHJvcGVydHkuIERlZmF1bHQuXG4gKiBAcHJvcGVydHkge09iamVjdH0gdGV4dC4zMDAgLSBSZXF1aXJlZCBwcm9wZXJ0eS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICAnNTAwJzoge1xuICAgIC4uLnRleHRbJzUwMCddLFxuICAgIGxpbmVIZWlnaHQ6ICcyNHB4J1xuICB9LFxuICAnNDAwJzoge1xuICAgIC4uLnRleHRbJzQwMCddLFxuICAgIGxpbmVIZWlnaHQ6ICcyMXB4J1xuICB9LFxuICAnMzAwJzoge1xuICAgIC4uLnRleHRbJzMwMCddLFxuICAgIGxpbmVIZWlnaHQ6ICcxOHB4J1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO2VBQ2U7RUFDYix1Q0FDS0EsZ0JBQUEsQ0FBSyxLQUFMLENBREw7SUFFRUMsVUFBVSxFQUFFO0VBRmQsRUFEYTtFQUtiLHVDQUNLRCxnQkFBQSxDQUFLLEtBQUwsQ0FETDtJQUVFQyxVQUFVLEVBQUU7RUFGZCxFQUxhO0VBU2IsdUNBQ0tELGdCQUFBLENBQUssS0FBTCxDQURMO0lBRUVDLFVBQVUsRUFBRTtFQUZkO0FBVGEsQyJ9