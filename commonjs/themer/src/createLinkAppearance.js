"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _missingStateWarning = _interopRequireDefault(require("./missingStateWarning"));

var _createAppearance = _interopRequireDefault(require("./createAppearance"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var hoverState = '&:hover';
var activeState = '&:active';
var focusState = '&:focus';
/**
 * @param {object} items - object with a set of states.
 * @return {object} the final appearance.
 */

var createLinkAppearance = function createLinkAppearance() {
  var _objectSpread2;

  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  (0, _missingStateWarning["default"])({
    items: items,
    props: ['base', 'hover', 'active', 'focus'],
    cb: function cb(prop) {
      console.error("Themer.createLinkAppearance() is missing a ".concat(prop, " item"), items);
    }
  });
  return _objectSpread(_objectSpread({}, items.base), {}, (_objectSpread2 = {}, (0, _defineProperty2["default"])(_objectSpread2, hoverState, (0, _createAppearance["default"])(items.hover)), (0, _defineProperty2["default"])(_objectSpread2, activeState, (0, _createAppearance["default"])(items.active)), (0, _defineProperty2["default"])(_objectSpread2, focusState, (0, _createAppearance["default"])(items.focus)), _objectSpread2));
};

var _default = createLinkAppearance;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJob3ZlclN0YXRlIiwiYWN0aXZlU3RhdGUiLCJmb2N1c1N0YXRlIiwiY3JlYXRlTGlua0FwcGVhcmFuY2UiLCJpdGVtcyIsIm1pc3NpbmdTdGF0ZVdhcm5pbmciLCJwcm9wcyIsImNiIiwicHJvcCIsImNvbnNvbGUiLCJlcnJvciIsImJhc2UiLCJjcmVhdGVBcHBlYXJhbmNlIiwiaG92ZXIiLCJhY3RpdmUiLCJmb2N1cyJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aGVtZXIvc3JjL2NyZWF0ZUxpbmtBcHBlYXJhbmNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtaXNzaW5nU3RhdGVXYXJuaW5nIGZyb20gJy4vbWlzc2luZ1N0YXRlV2FybmluZydcbmltcG9ydCBjcmVhdGVBcHBlYXJhbmNlIGZyb20gJy4vY3JlYXRlQXBwZWFyYW5jZSdcblxuY29uc3QgaG92ZXJTdGF0ZSA9ICcmOmhvdmVyJ1xuY29uc3QgYWN0aXZlU3RhdGUgPSAnJjphY3RpdmUnXG5jb25zdCBmb2N1c1N0YXRlID0gJyY6Zm9jdXMnXG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IGl0ZW1zIC0gb2JqZWN0IHdpdGggYSBzZXQgb2Ygc3RhdGVzLlxuICogQHJldHVybiB7b2JqZWN0fSB0aGUgZmluYWwgYXBwZWFyYW5jZS5cbiAqL1xuY29uc3QgY3JlYXRlTGlua0FwcGVhcmFuY2UgPSAoaXRlbXMgPSB7fSkgPT4ge1xuICBtaXNzaW5nU3RhdGVXYXJuaW5nKHtcbiAgICBpdGVtcyxcbiAgICBwcm9wczogWydiYXNlJywgJ2hvdmVyJywgJ2FjdGl2ZScsICdmb2N1cyddLFxuICAgIGNiOiBwcm9wID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgIGBUaGVtZXIuY3JlYXRlTGlua0FwcGVhcmFuY2UoKSBpcyBtaXNzaW5nIGEgJHtwcm9wfSBpdGVtYCxcbiAgICAgICAgaXRlbXNcbiAgICAgIClcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICAuLi5pdGVtcy5iYXNlLFxuICAgIFtob3ZlclN0YXRlXTogY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5ob3ZlciksXG4gICAgW2FjdGl2ZVN0YXRlXTogY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5hY3RpdmUpLFxuICAgIFtmb2N1c1N0YXRlXTogY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5mb2N1cylcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVMaW5rQXBwZWFyYW5jZVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBbkI7QUFDQSxJQUFNQyxXQUFXLEdBQUcsVUFBcEI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsU0FBbkI7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQyxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLEdBQWdCO0VBQUE7O0VBQUEsSUFBZkMsS0FBZSx1RUFBUCxFQUFPO0VBQzNDLElBQUFDLCtCQUFBLEVBQW9CO0lBQ2xCRCxLQUFLLEVBQUxBLEtBRGtCO0lBRWxCRSxLQUFLLEVBQUUsQ0FBQyxNQUFELEVBQVMsT0FBVCxFQUFrQixRQUFsQixFQUE0QixPQUE1QixDQUZXO0lBR2xCQyxFQUFFLEVBQUUsWUFBQUMsSUFBSSxFQUFJO01BQ1ZDLE9BQU8sQ0FBQ0MsS0FBUixzREFDZ0RGLElBRGhELFlBRUVKLEtBRkY7SUFJRDtFQVJpQixDQUFwQjtFQVdBLHVDQUNLQSxLQUFLLENBQUNPLElBRFgsOEVBRUdYLFVBRkgsRUFFZ0IsSUFBQVksNEJBQUEsRUFBaUJSLEtBQUssQ0FBQ1MsS0FBdkIsQ0FGaEIsb0RBR0daLFdBSEgsRUFHaUIsSUFBQVcsNEJBQUEsRUFBaUJSLEtBQUssQ0FBQ1UsTUFBdkIsQ0FIakIsb0RBSUdaLFVBSkgsRUFJZ0IsSUFBQVUsNEJBQUEsRUFBaUJSLEtBQUssQ0FBQ1csS0FBdkIsQ0FKaEI7QUFNRCxDQWxCRDs7ZUFvQmVaLG9CIn0=