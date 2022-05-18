"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _constants = require("../../constants");

var _createAppearance = _interopRequireDefault(require("./createAppearance"));

var _missingStateWarning = _interopRequireDefault(require("./missingStateWarning"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var baseStyle = {
  WebkitFontSmoothing: 'antialiased',
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  verticalAlign: 'middle',
  textDecoration: 'none',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  background: 'none'
};
var disabledState = "[disabled], [data-disabled]";
var hoverState = '&:not([disabled]):not([data-disabled]):hover';
var focusState = '&:not([disabled]):not([data-disabled]):focus';
var activeState = '&:not([disabled]):not([data-disabled]):active, &:not([disabled]):not([data-disabled])[aria-expanded="true"], &:not([disabled]):not([data-disabled])[data-active]';
/**
 * @param {object} items - object with a set of items.
 * @return {object} the final appearance.
 */

var createButtonAppearance = function createButtonAppearance() {
  var _objectSpread2;

  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  (0, _missingStateWarning["default"])({
    items: items,
    props: ['base', 'hover', 'focus', 'active', 'disabled'],
    cb: function cb(prop) {
      console.error("Themer.createTextDropdownButtonAppearance() is missing a ".concat(prop, " state in items:"), items);
    }
  });
  return _objectSpread(_objectSpread(_objectSpread({}, baseStyle), (0, _createAppearance["default"])(items.base)), {}, (_objectSpread2 = {}, (0, _defineProperty2["default"])(_objectSpread2, disabledState, (0, _createAppearance["default"])(items.disabled)), (0, _defineProperty2["default"])(_objectSpread2, hoverState, (0, _createAppearance["default"])(items.hover)), (0, _defineProperty2["default"])(_objectSpread2, focusState, _objectSpread({
    zIndex: _constants.StackingOrder.FOCUSED
  }, (0, _createAppearance["default"])(items.focus))), (0, _defineProperty2["default"])(_objectSpread2, activeState, (0, _createAppearance["default"])(items.active)), _objectSpread2));
};

var _default = createButtonAppearance;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJiYXNlU3R5bGUiLCJXZWJraXRGb250U21vb3RoaW5nIiwiV2Via2l0QXBwZWFyYW5jZSIsIk1vekFwcGVhcmFuY2UiLCJ2ZXJ0aWNhbEFsaWduIiwidGV4dERlY29yYXRpb24iLCJib3JkZXIiLCJvdXRsaW5lIiwiY3Vyc29yIiwiYmFja2dyb3VuZCIsImRpc2FibGVkU3RhdGUiLCJob3ZlclN0YXRlIiwiZm9jdXNTdGF0ZSIsImFjdGl2ZVN0YXRlIiwiY3JlYXRlQnV0dG9uQXBwZWFyYW5jZSIsIml0ZW1zIiwibWlzc2luZ1N0YXRlV2FybmluZyIsInByb3BzIiwiY2IiLCJwcm9wIiwiY29uc29sZSIsImVycm9yIiwiY3JlYXRlQXBwZWFyYW5jZSIsImJhc2UiLCJkaXNhYmxlZCIsImhvdmVyIiwiekluZGV4IiwiU3RhY2tpbmdPcmRlciIsIkZPQ1VTRUQiLCJmb2N1cyIsImFjdGl2ZSJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aGVtZXIvc3JjL2NyZWF0ZVRleHREcm9wZG93bkJ1dHRvbkFwcGVhcmFuY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhY2tpbmdPcmRlciB9IGZyb20gJy4uLy4uL2NvbnN0YW50cydcbmltcG9ydCBjcmVhdGVBcHBlYXJhbmNlIGZyb20gJy4vY3JlYXRlQXBwZWFyYW5jZSdcbmltcG9ydCBtaXNzaW5nU3RhdGVXYXJuaW5nIGZyb20gJy4vbWlzc2luZ1N0YXRlV2FybmluZydcblxuY29uc3QgYmFzZVN0eWxlID0ge1xuICBXZWJraXRGb250U21vb3RoaW5nOiAnYW50aWFsaWFzZWQnLFxuICBXZWJraXRBcHBlYXJhbmNlOiAnbm9uZScsXG4gIE1vekFwcGVhcmFuY2U6ICdub25lJyxcbiAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gIGJvcmRlcjogJ25vbmUnLFxuICBvdXRsaW5lOiAnbm9uZScsXG4gIGN1cnNvcjogJ3BvaW50ZXInLFxuICBiYWNrZ3JvdW5kOiAnbm9uZSdcbn1cblxuY29uc3QgZGlzYWJsZWRTdGF0ZSA9IGBbZGlzYWJsZWRdLCBbZGF0YS1kaXNhYmxlZF1gXG5jb25zdCBob3ZlclN0YXRlID0gJyY6bm90KFtkaXNhYmxlZF0pOm5vdChbZGF0YS1kaXNhYmxlZF0pOmhvdmVyJ1xuY29uc3QgZm9jdXNTdGF0ZSA9ICcmOm5vdChbZGlzYWJsZWRdKTpub3QoW2RhdGEtZGlzYWJsZWRdKTpmb2N1cydcbmNvbnN0IGFjdGl2ZVN0YXRlID1cbiAgJyY6bm90KFtkaXNhYmxlZF0pOm5vdChbZGF0YS1kaXNhYmxlZF0pOmFjdGl2ZSwgJjpub3QoW2Rpc2FibGVkXSk6bm90KFtkYXRhLWRpc2FibGVkXSlbYXJpYS1leHBhbmRlZD1cInRydWVcIl0sICY6bm90KFtkaXNhYmxlZF0pOm5vdChbZGF0YS1kaXNhYmxlZF0pW2RhdGEtYWN0aXZlXSdcblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdH0gaXRlbXMgLSBvYmplY3Qgd2l0aCBhIHNldCBvZiBpdGVtcy5cbiAqIEByZXR1cm4ge29iamVjdH0gdGhlIGZpbmFsIGFwcGVhcmFuY2UuXG4gKi9cbmNvbnN0IGNyZWF0ZUJ1dHRvbkFwcGVhcmFuY2UgPSAoaXRlbXMgPSB7fSkgPT4ge1xuICBtaXNzaW5nU3RhdGVXYXJuaW5nKHtcbiAgICBpdGVtcyxcbiAgICBwcm9wczogWydiYXNlJywgJ2hvdmVyJywgJ2ZvY3VzJywgJ2FjdGl2ZScsICdkaXNhYmxlZCddLFxuICAgIGNiOiBwcm9wID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgIGBUaGVtZXIuY3JlYXRlVGV4dERyb3Bkb3duQnV0dG9uQXBwZWFyYW5jZSgpIGlzIG1pc3NpbmcgYSAke3Byb3B9IHN0YXRlIGluIGl0ZW1zOmAsXG4gICAgICAgIGl0ZW1zXG4gICAgICApXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgLi4uYmFzZVN0eWxlLFxuICAgIC4uLmNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuYmFzZSksXG4gICAgW2Rpc2FibGVkU3RhdGVdOiBjcmVhdGVBcHBlYXJhbmNlKGl0ZW1zLmRpc2FibGVkKSxcbiAgICBbaG92ZXJTdGF0ZV06IGNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuaG92ZXIpLFxuICAgIFtmb2N1c1N0YXRlXToge1xuICAgICAgekluZGV4OiBTdGFja2luZ09yZGVyLkZPQ1VTRUQsXG4gICAgICAuLi5jcmVhdGVBcHBlYXJhbmNlKGl0ZW1zLmZvY3VzKVxuICAgIH0sXG4gICAgW2FjdGl2ZVN0YXRlXTogY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5hY3RpdmUpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQnV0dG9uQXBwZWFyYW5jZVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUc7RUFDaEJDLG1CQUFtQixFQUFFLGFBREw7RUFFaEJDLGdCQUFnQixFQUFFLE1BRkY7RUFHaEJDLGFBQWEsRUFBRSxNQUhDO0VBSWhCQyxhQUFhLEVBQUUsUUFKQztFQUtoQkMsY0FBYyxFQUFFLE1BTEE7RUFNaEJDLE1BQU0sRUFBRSxNQU5RO0VBT2hCQyxPQUFPLEVBQUUsTUFQTztFQVFoQkMsTUFBTSxFQUFFLFNBUlE7RUFTaEJDLFVBQVUsRUFBRTtBQVRJLENBQWxCO0FBWUEsSUFBTUMsYUFBYSxnQ0FBbkI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsOENBQW5CO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLDhDQUFuQjtBQUNBLElBQU1DLFdBQVcsR0FDZixrS0FERjtBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1DLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsR0FBZ0I7RUFBQTs7RUFBQSxJQUFmQyxLQUFlLHVFQUFQLEVBQU87RUFDN0MsSUFBQUMsK0JBQUEsRUFBb0I7SUFDbEJELEtBQUssRUFBTEEsS0FEa0I7SUFFbEJFLEtBQUssRUFBRSxDQUFDLE1BQUQsRUFBUyxPQUFULEVBQWtCLE9BQWxCLEVBQTJCLFFBQTNCLEVBQXFDLFVBQXJDLENBRlc7SUFHbEJDLEVBQUUsRUFBRSxZQUFBQyxJQUFJLEVBQUk7TUFDVkMsT0FBTyxDQUFDQyxLQUFSLG9FQUM4REYsSUFEOUQsdUJBRUVKLEtBRkY7SUFJRDtFQVJpQixDQUFwQjtFQVdBLHFEQUNLZixTQURMLEdBRUssSUFBQXNCLDRCQUFBLEVBQWlCUCxLQUFLLENBQUNRLElBQXZCLENBRkwsOEVBR0diLGFBSEgsRUFHbUIsSUFBQVksNEJBQUEsRUFBaUJQLEtBQUssQ0FBQ1MsUUFBdkIsQ0FIbkIsb0RBSUdiLFVBSkgsRUFJZ0IsSUFBQVcsNEJBQUEsRUFBaUJQLEtBQUssQ0FBQ1UsS0FBdkIsQ0FKaEIsb0RBS0diLFVBTEg7SUFNSWMsTUFBTSxFQUFFQyx3QkFBQSxDQUFjQztFQU4xQixHQU9PLElBQUFOLDRCQUFBLEVBQWlCUCxLQUFLLENBQUNjLEtBQXZCLENBUFAscURBU0doQixXQVRILEVBU2lCLElBQUFTLDRCQUFBLEVBQWlCUCxLQUFLLENBQUNlLE1BQXZCLENBVGpCO0FBV0QsQ0F2QkQ7O2VBeUJlaEIsc0IifQ==