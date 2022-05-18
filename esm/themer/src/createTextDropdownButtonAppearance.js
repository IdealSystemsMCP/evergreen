import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { StackingOrder } from '../../constants';
import createAppearance from './createAppearance';
import missingStateWarning from './missingStateWarning';
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
  missingStateWarning({
    items: items,
    props: ['base', 'hover', 'focus', 'active', 'disabled'],
    cb: function cb(prop) {
      console.error("Themer.createTextDropdownButtonAppearance() is missing a ".concat(prop, " state in items:"), items);
    }
  });
  return _objectSpread(_objectSpread(_objectSpread({}, baseStyle), createAppearance(items.base)), {}, (_objectSpread2 = {}, _defineProperty(_objectSpread2, disabledState, createAppearance(items.disabled)), _defineProperty(_objectSpread2, hoverState, createAppearance(items.hover)), _defineProperty(_objectSpread2, focusState, _objectSpread({
    zIndex: StackingOrder.FOCUSED
  }, createAppearance(items.focus))), _defineProperty(_objectSpread2, activeState, createAppearance(items.active)), _objectSpread2));
};

export default createButtonAppearance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJTdGFja2luZ09yZGVyIiwiY3JlYXRlQXBwZWFyYW5jZSIsIm1pc3NpbmdTdGF0ZVdhcm5pbmciLCJiYXNlU3R5bGUiLCJXZWJraXRGb250U21vb3RoaW5nIiwiV2Via2l0QXBwZWFyYW5jZSIsIk1vekFwcGVhcmFuY2UiLCJ2ZXJ0aWNhbEFsaWduIiwidGV4dERlY29yYXRpb24iLCJib3JkZXIiLCJvdXRsaW5lIiwiY3Vyc29yIiwiYmFja2dyb3VuZCIsImRpc2FibGVkU3RhdGUiLCJob3ZlclN0YXRlIiwiZm9jdXNTdGF0ZSIsImFjdGl2ZVN0YXRlIiwiY3JlYXRlQnV0dG9uQXBwZWFyYW5jZSIsIml0ZW1zIiwicHJvcHMiLCJjYiIsInByb3AiLCJjb25zb2xlIiwiZXJyb3IiLCJiYXNlIiwiZGlzYWJsZWQiLCJob3ZlciIsInpJbmRleCIsIkZPQ1VTRUQiLCJmb2N1cyIsImFjdGl2ZSJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aGVtZXIvc3JjL2NyZWF0ZVRleHREcm9wZG93bkJ1dHRvbkFwcGVhcmFuY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhY2tpbmdPcmRlciB9IGZyb20gJy4uLy4uL2NvbnN0YW50cydcbmltcG9ydCBjcmVhdGVBcHBlYXJhbmNlIGZyb20gJy4vY3JlYXRlQXBwZWFyYW5jZSdcbmltcG9ydCBtaXNzaW5nU3RhdGVXYXJuaW5nIGZyb20gJy4vbWlzc2luZ1N0YXRlV2FybmluZydcblxuY29uc3QgYmFzZVN0eWxlID0ge1xuICBXZWJraXRGb250U21vb3RoaW5nOiAnYW50aWFsaWFzZWQnLFxuICBXZWJraXRBcHBlYXJhbmNlOiAnbm9uZScsXG4gIE1vekFwcGVhcmFuY2U6ICdub25lJyxcbiAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gIGJvcmRlcjogJ25vbmUnLFxuICBvdXRsaW5lOiAnbm9uZScsXG4gIGN1cnNvcjogJ3BvaW50ZXInLFxuICBiYWNrZ3JvdW5kOiAnbm9uZSdcbn1cblxuY29uc3QgZGlzYWJsZWRTdGF0ZSA9IGBbZGlzYWJsZWRdLCBbZGF0YS1kaXNhYmxlZF1gXG5jb25zdCBob3ZlclN0YXRlID0gJyY6bm90KFtkaXNhYmxlZF0pOm5vdChbZGF0YS1kaXNhYmxlZF0pOmhvdmVyJ1xuY29uc3QgZm9jdXNTdGF0ZSA9ICcmOm5vdChbZGlzYWJsZWRdKTpub3QoW2RhdGEtZGlzYWJsZWRdKTpmb2N1cydcbmNvbnN0IGFjdGl2ZVN0YXRlID1cbiAgJyY6bm90KFtkaXNhYmxlZF0pOm5vdChbZGF0YS1kaXNhYmxlZF0pOmFjdGl2ZSwgJjpub3QoW2Rpc2FibGVkXSk6bm90KFtkYXRhLWRpc2FibGVkXSlbYXJpYS1leHBhbmRlZD1cInRydWVcIl0sICY6bm90KFtkaXNhYmxlZF0pOm5vdChbZGF0YS1kaXNhYmxlZF0pW2RhdGEtYWN0aXZlXSdcblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdH0gaXRlbXMgLSBvYmplY3Qgd2l0aCBhIHNldCBvZiBpdGVtcy5cbiAqIEByZXR1cm4ge29iamVjdH0gdGhlIGZpbmFsIGFwcGVhcmFuY2UuXG4gKi9cbmNvbnN0IGNyZWF0ZUJ1dHRvbkFwcGVhcmFuY2UgPSAoaXRlbXMgPSB7fSkgPT4ge1xuICBtaXNzaW5nU3RhdGVXYXJuaW5nKHtcbiAgICBpdGVtcyxcbiAgICBwcm9wczogWydiYXNlJywgJ2hvdmVyJywgJ2ZvY3VzJywgJ2FjdGl2ZScsICdkaXNhYmxlZCddLFxuICAgIGNiOiBwcm9wID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgIGBUaGVtZXIuY3JlYXRlVGV4dERyb3Bkb3duQnV0dG9uQXBwZWFyYW5jZSgpIGlzIG1pc3NpbmcgYSAke3Byb3B9IHN0YXRlIGluIGl0ZW1zOmAsXG4gICAgICAgIGl0ZW1zXG4gICAgICApXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgLi4uYmFzZVN0eWxlLFxuICAgIC4uLmNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuYmFzZSksXG4gICAgW2Rpc2FibGVkU3RhdGVdOiBjcmVhdGVBcHBlYXJhbmNlKGl0ZW1zLmRpc2FibGVkKSxcbiAgICBbaG92ZXJTdGF0ZV06IGNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuaG92ZXIpLFxuICAgIFtmb2N1c1N0YXRlXToge1xuICAgICAgekluZGV4OiBTdGFja2luZ09yZGVyLkZPQ1VTRUQsXG4gICAgICAuLi5jcmVhdGVBcHBlYXJhbmNlKGl0ZW1zLmZvY3VzKVxuICAgIH0sXG4gICAgW2FjdGl2ZVN0YXRlXTogY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5hY3RpdmUpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQnV0dG9uQXBwZWFyYW5jZVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxTQUFTQSxhQUFULFFBQThCLGlCQUE5QjtBQUNBLE9BQU9DLGdCQUFQLE1BQTZCLG9CQUE3QjtBQUNBLE9BQU9DLG1CQUFQLE1BQWdDLHVCQUFoQztBQUVBLElBQU1DLFNBQVMsR0FBRztFQUNoQkMsbUJBQW1CLEVBQUUsYUFETDtFQUVoQkMsZ0JBQWdCLEVBQUUsTUFGRjtFQUdoQkMsYUFBYSxFQUFFLE1BSEM7RUFJaEJDLGFBQWEsRUFBRSxRQUpDO0VBS2hCQyxjQUFjLEVBQUUsTUFMQTtFQU1oQkMsTUFBTSxFQUFFLE1BTlE7RUFPaEJDLE9BQU8sRUFBRSxNQVBPO0VBUWhCQyxNQUFNLEVBQUUsU0FSUTtFQVNoQkMsVUFBVSxFQUFFO0FBVEksQ0FBbEI7QUFZQSxJQUFNQyxhQUFhLGdDQUFuQjtBQUNBLElBQU1DLFVBQVUsR0FBRyw4Q0FBbkI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsOENBQW5CO0FBQ0EsSUFBTUMsV0FBVyxHQUNmLGtLQURGO0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUMsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QixHQUFnQjtFQUFBOztFQUFBLElBQWZDLEtBQWUsdUVBQVAsRUFBTztFQUM3Q2hCLG1CQUFtQixDQUFDO0lBQ2xCZ0IsS0FBSyxFQUFMQSxLQURrQjtJQUVsQkMsS0FBSyxFQUFFLENBQUMsTUFBRCxFQUFTLE9BQVQsRUFBa0IsT0FBbEIsRUFBMkIsUUFBM0IsRUFBcUMsVUFBckMsQ0FGVztJQUdsQkMsRUFBRSxFQUFFLFlBQUFDLElBQUksRUFBSTtNQUNWQyxPQUFPLENBQUNDLEtBQVIsb0VBQzhERixJQUQ5RCx1QkFFRUgsS0FGRjtJQUlEO0VBUmlCLENBQUQsQ0FBbkI7RUFXQSxxREFDS2YsU0FETCxHQUVLRixnQkFBZ0IsQ0FBQ2lCLEtBQUssQ0FBQ00sSUFBUCxDQUZyQiw2REFHR1gsYUFISCxFQUdtQlosZ0JBQWdCLENBQUNpQixLQUFLLENBQUNPLFFBQVAsQ0FIbkMsbUNBSUdYLFVBSkgsRUFJZ0JiLGdCQUFnQixDQUFDaUIsS0FBSyxDQUFDUSxLQUFQLENBSmhDLG1DQUtHWCxVQUxIO0lBTUlZLE1BQU0sRUFBRTNCLGFBQWEsQ0FBQzRCO0VBTjFCLEdBT08zQixnQkFBZ0IsQ0FBQ2lCLEtBQUssQ0FBQ1csS0FBUCxDQVB2QixvQ0FTR2IsV0FUSCxFQVNpQmYsZ0JBQWdCLENBQUNpQixLQUFLLENBQUNZLE1BQVAsQ0FUakM7QUFXRCxDQXZCRDs7QUF5QkEsZUFBZWIsc0JBQWYifQ==