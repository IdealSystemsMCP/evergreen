"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _constants = require("../../constants");

var _missingStateWarning = _interopRequireDefault(require("./missingStateWarning"));

var _createAppearance = _interopRequireDefault(require("./createAppearance"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var baseStyle = {
  alignItems: 'center',
  display: 'inline-flex',
  flexWrap: 'wrap'
};
var focusState = '&[aria-activedescendant]';
var disabledState = '&[aria-disabled="true"]';
/**
 * @param {object} items - object with a set of states.
 * @return {object} the final appearance.
 */

var createTagInputAppearance = function createTagInputAppearance() {
  var _objectSpread2;

  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  (0, _missingStateWarning["default"])({
    items: items,
    props: ['base', 'focus', 'disabled'],
    cb: function cb(prop) {
      console.error("Themer.createTagInputAppearance() is missing a ".concat(prop, " item"), items);
    }
  });
  return _objectSpread(_objectSpread(_objectSpread({}, baseStyle), (0, _createAppearance["default"])(items.base)), {}, (_objectSpread2 = {}, (0, _defineProperty2["default"])(_objectSpread2, focusState, _objectSpread({
    zIndex: _constants.StackingOrder.FOCUSED
  }, (0, _createAppearance["default"])(items.focus))), (0, _defineProperty2["default"])(_objectSpread2, disabledState, _objectSpread({
    cursor: 'not-allowed'
  }, (0, _createAppearance["default"])(items.disabled))), _objectSpread2));
};

var _default = createTagInputAppearance;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJiYXNlU3R5bGUiLCJhbGlnbkl0ZW1zIiwiZGlzcGxheSIsImZsZXhXcmFwIiwiZm9jdXNTdGF0ZSIsImRpc2FibGVkU3RhdGUiLCJjcmVhdGVUYWdJbnB1dEFwcGVhcmFuY2UiLCJpdGVtcyIsIm1pc3NpbmdTdGF0ZVdhcm5pbmciLCJwcm9wcyIsImNiIiwicHJvcCIsImNvbnNvbGUiLCJlcnJvciIsImNyZWF0ZUFwcGVhcmFuY2UiLCJiYXNlIiwiekluZGV4IiwiU3RhY2tpbmdPcmRlciIsIkZPQ1VTRUQiLCJmb2N1cyIsImN1cnNvciIsImRpc2FibGVkIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3RoZW1lci9zcmMvY3JlYXRlVGFnSW5wdXRBcHBlYXJhbmNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YWNraW5nT3JkZXIgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnXG5pbXBvcnQgbWlzc2luZ1N0YXRlV2FybmluZyBmcm9tICcuL21pc3NpbmdTdGF0ZVdhcm5pbmcnXG5pbXBvcnQgY3JlYXRlQXBwZWFyYW5jZSBmcm9tICcuL2NyZWF0ZUFwcGVhcmFuY2UnXG5cbmNvbnN0IGJhc2VTdHlsZSA9IHtcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gIGZsZXhXcmFwOiAnd3JhcCdcbn1cblxuY29uc3QgZm9jdXNTdGF0ZSA9ICcmW2FyaWEtYWN0aXZlZGVzY2VuZGFudF0nXG5jb25zdCBkaXNhYmxlZFN0YXRlID0gJyZbYXJpYS1kaXNhYmxlZD1cInRydWVcIl0nXG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IGl0ZW1zIC0gb2JqZWN0IHdpdGggYSBzZXQgb2Ygc3RhdGVzLlxuICogQHJldHVybiB7b2JqZWN0fSB0aGUgZmluYWwgYXBwZWFyYW5jZS5cbiAqL1xuY29uc3QgY3JlYXRlVGFnSW5wdXRBcHBlYXJhbmNlID0gKGl0ZW1zID0ge30pID0+IHtcbiAgbWlzc2luZ1N0YXRlV2FybmluZyh7XG4gICAgaXRlbXMsXG4gICAgcHJvcHM6IFsnYmFzZScsICdmb2N1cycsICdkaXNhYmxlZCddLFxuICAgIGNiOiBwcm9wID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgIGBUaGVtZXIuY3JlYXRlVGFnSW5wdXRBcHBlYXJhbmNlKCkgaXMgbWlzc2luZyBhICR7cHJvcH0gaXRlbWAsXG4gICAgICAgIGl0ZW1zXG4gICAgICApXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgLi4uYmFzZVN0eWxlLFxuICAgIC4uLmNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuYmFzZSksXG4gICAgW2ZvY3VzU3RhdGVdOiB7XG4gICAgICB6SW5kZXg6IFN0YWNraW5nT3JkZXIuRk9DVVNFRCxcbiAgICAgIC4uLmNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuZm9jdXMpXG4gICAgfSxcbiAgICBbZGlzYWJsZWRTdGF0ZV06IHtcbiAgICAgIGN1cnNvcjogJ25vdC1hbGxvd2VkJyxcbiAgICAgIC4uLmNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuZGlzYWJsZWQpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRhZ0lucHV0QXBwZWFyYW5jZVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUc7RUFDaEJDLFVBQVUsRUFBRSxRQURJO0VBRWhCQyxPQUFPLEVBQUUsYUFGTztFQUdoQkMsUUFBUSxFQUFFO0FBSE0sQ0FBbEI7QUFNQSxJQUFNQyxVQUFVLEdBQUcsMEJBQW5CO0FBQ0EsSUFBTUMsYUFBYSxHQUFHLHlCQUF0QjtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1DLHdCQUF3QixHQUFHLFNBQTNCQSx3QkFBMkIsR0FBZ0I7RUFBQTs7RUFBQSxJQUFmQyxLQUFlLHVFQUFQLEVBQU87RUFDL0MsSUFBQUMsK0JBQUEsRUFBb0I7SUFDbEJELEtBQUssRUFBTEEsS0FEa0I7SUFFbEJFLEtBQUssRUFBRSxDQUFDLE1BQUQsRUFBUyxPQUFULEVBQWtCLFVBQWxCLENBRlc7SUFHbEJDLEVBQUUsRUFBRSxZQUFBQyxJQUFJLEVBQUk7TUFDVkMsT0FBTyxDQUFDQyxLQUFSLDBEQUNvREYsSUFEcEQsWUFFRUosS0FGRjtJQUlEO0VBUmlCLENBQXBCO0VBV0EscURBQ0tQLFNBREwsR0FFSyxJQUFBYyw0QkFBQSxFQUFpQlAsS0FBSyxDQUFDUSxJQUF2QixDQUZMLDhFQUdHWCxVQUhIO0lBSUlZLE1BQU0sRUFBRUMsd0JBQUEsQ0FBY0M7RUFKMUIsR0FLTyxJQUFBSiw0QkFBQSxFQUFpQlAsS0FBSyxDQUFDWSxLQUF2QixDQUxQLHFEQU9HZCxhQVBIO0lBUUllLE1BQU0sRUFBRTtFQVJaLEdBU08sSUFBQU4sNEJBQUEsRUFBaUJQLEtBQUssQ0FBQ2MsUUFBdkIsQ0FUUDtBQVlELENBeEJEOztlQTBCZWYsd0IifQ==