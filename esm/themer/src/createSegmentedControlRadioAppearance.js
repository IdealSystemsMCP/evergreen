import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { StackingOrder } from '../../constants';
import createAppearance from './createAppearance';
import missingStateWarning from './missingStateWarning';
var baseStyle = {
  WebkitFontSmoothing: 'antialiased',
  boxSizing: 'border-box',
  textDecoration: 'none',
  transition: 'box-shadow 80ms ease-in-out',
  WebkitAppearance: 'none',
  border: 'none',
  outline: 'none',
  cursor: 'pointer'
};
var disabledState = '[disabled="true"], [data-disabled="true"]';
var hoverState = '&:not([disabled="true"]):not([data-disabled="true"]):hover';
var activeState = '&:not([disabled="true"]):not([data-disabled="true"]):active, &:not([disabled="true"]):not([data-disabled="true"])[data-popover-opened="true"], &:not([disabled="true"]):not([data-disabled="true"])[data-active="true"]';
var focusState = '& input:focus + label';
/**
 * @param {object} items - object with a set of states.
 * @return {object} the final appearance.
 */

var createSegmentedControlRadioAppearance = function createSegmentedControlRadioAppearance() {
  var _objectSpread2;

  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  missingStateWarning({
    items: items,
    props: ['base', 'hover', 'disabled', 'active', 'focus'],
    cb: function cb(prop) {
      console.error("Themer.createSegmentedControlRadioAppearance() is missing a ".concat(prop, " item"), items);
    }
  });
  return _objectSpread(_objectSpread(_objectSpread({}, baseStyle), createAppearance(items.base)), {}, (_objectSpread2 = {}, _defineProperty(_objectSpread2, disabledState, _objectSpread({
    cursor: 'not-allowed'
  }, createAppearance(items.disabled))), _defineProperty(_objectSpread2, hoverState, createAppearance(items.hover)), _defineProperty(_objectSpread2, focusState, _objectSpread({
    zIndex: StackingOrder.FOCUSED
  }, createAppearance(items.focus))), _defineProperty(_objectSpread2, activeState, createAppearance(items.active)), _defineProperty(_objectSpread2, '&[data-active="true"]', {
    cursor: 'default'
  }), _objectSpread2));
};

export default createSegmentedControlRadioAppearance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJTdGFja2luZ09yZGVyIiwiY3JlYXRlQXBwZWFyYW5jZSIsIm1pc3NpbmdTdGF0ZVdhcm5pbmciLCJiYXNlU3R5bGUiLCJXZWJraXRGb250U21vb3RoaW5nIiwiYm94U2l6aW5nIiwidGV4dERlY29yYXRpb24iLCJ0cmFuc2l0aW9uIiwiV2Via2l0QXBwZWFyYW5jZSIsImJvcmRlciIsIm91dGxpbmUiLCJjdXJzb3IiLCJkaXNhYmxlZFN0YXRlIiwiaG92ZXJTdGF0ZSIsImFjdGl2ZVN0YXRlIiwiZm9jdXNTdGF0ZSIsImNyZWF0ZVNlZ21lbnRlZENvbnRyb2xSYWRpb0FwcGVhcmFuY2UiLCJpdGVtcyIsInByb3BzIiwiY2IiLCJwcm9wIiwiY29uc29sZSIsImVycm9yIiwiYmFzZSIsImRpc2FibGVkIiwiaG92ZXIiLCJ6SW5kZXgiLCJGT0NVU0VEIiwiZm9jdXMiLCJhY3RpdmUiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdGhlbWVyL3NyYy9jcmVhdGVTZWdtZW50ZWRDb250cm9sUmFkaW9BcHBlYXJhbmNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YWNraW5nT3JkZXIgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnXG5pbXBvcnQgY3JlYXRlQXBwZWFyYW5jZSBmcm9tICcuL2NyZWF0ZUFwcGVhcmFuY2UnXG5pbXBvcnQgbWlzc2luZ1N0YXRlV2FybmluZyBmcm9tICcuL21pc3NpbmdTdGF0ZVdhcm5pbmcnXG5cbmNvbnN0IGJhc2VTdHlsZSA9IHtcbiAgV2Via2l0Rm9udFNtb290aGluZzogJ2FudGlhbGlhc2VkJyxcbiAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gIHRyYW5zaXRpb246ICdib3gtc2hhZG93IDgwbXMgZWFzZS1pbi1vdXQnLFxuICBXZWJraXRBcHBlYXJhbmNlOiAnbm9uZScsXG4gIGJvcmRlcjogJ25vbmUnLFxuICBvdXRsaW5lOiAnbm9uZScsXG4gIGN1cnNvcjogJ3BvaW50ZXInXG59XG5cbmNvbnN0IGRpc2FibGVkU3RhdGUgPSAnW2Rpc2FibGVkPVwidHJ1ZVwiXSwgW2RhdGEtZGlzYWJsZWQ9XCJ0cnVlXCJdJ1xuY29uc3QgaG92ZXJTdGF0ZSA9ICcmOm5vdChbZGlzYWJsZWQ9XCJ0cnVlXCJdKTpub3QoW2RhdGEtZGlzYWJsZWQ9XCJ0cnVlXCJdKTpob3ZlcidcbmNvbnN0IGFjdGl2ZVN0YXRlID1cbiAgJyY6bm90KFtkaXNhYmxlZD1cInRydWVcIl0pOm5vdChbZGF0YS1kaXNhYmxlZD1cInRydWVcIl0pOmFjdGl2ZSwgJjpub3QoW2Rpc2FibGVkPVwidHJ1ZVwiXSk6bm90KFtkYXRhLWRpc2FibGVkPVwidHJ1ZVwiXSlbZGF0YS1wb3BvdmVyLW9wZW5lZD1cInRydWVcIl0sICY6bm90KFtkaXNhYmxlZD1cInRydWVcIl0pOm5vdChbZGF0YS1kaXNhYmxlZD1cInRydWVcIl0pW2RhdGEtYWN0aXZlPVwidHJ1ZVwiXSdcbmNvbnN0IGZvY3VzU3RhdGUgPSAnJiBpbnB1dDpmb2N1cyArIGxhYmVsJ1xuXG4vKipcbiAqIEBwYXJhbSB7b2JqZWN0fSBpdGVtcyAtIG9iamVjdCB3aXRoIGEgc2V0IG9mIHN0YXRlcy5cbiAqIEByZXR1cm4ge29iamVjdH0gdGhlIGZpbmFsIGFwcGVhcmFuY2UuXG4gKi9cbmNvbnN0IGNyZWF0ZVNlZ21lbnRlZENvbnRyb2xSYWRpb0FwcGVhcmFuY2UgPSAoaXRlbXMgPSB7fSkgPT4ge1xuICBtaXNzaW5nU3RhdGVXYXJuaW5nKHtcbiAgICBpdGVtcyxcbiAgICBwcm9wczogWydiYXNlJywgJ2hvdmVyJywgJ2Rpc2FibGVkJywgJ2FjdGl2ZScsICdmb2N1cyddLFxuICAgIGNiOiBwcm9wID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgIGBUaGVtZXIuY3JlYXRlU2VnbWVudGVkQ29udHJvbFJhZGlvQXBwZWFyYW5jZSgpIGlzIG1pc3NpbmcgYSAke3Byb3B9IGl0ZW1gLFxuICAgICAgICBpdGVtc1xuICAgICAgKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4ge1xuICAgIC4uLmJhc2VTdHlsZSxcbiAgICAuLi5jcmVhdGVBcHBlYXJhbmNlKGl0ZW1zLmJhc2UpLFxuICAgIFtkaXNhYmxlZFN0YXRlXToge1xuICAgICAgY3Vyc29yOiAnbm90LWFsbG93ZWQnLFxuICAgICAgLi4uY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5kaXNhYmxlZClcbiAgICB9LFxuICAgIFtob3ZlclN0YXRlXTogY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5ob3ZlciksXG4gICAgW2ZvY3VzU3RhdGVdOiB7XG4gICAgICB6SW5kZXg6IFN0YWNraW5nT3JkZXIuRk9DVVNFRCxcbiAgICAgIC4uLmNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuZm9jdXMpXG4gICAgfSxcbiAgICBbYWN0aXZlU3RhdGVdOiBjcmVhdGVBcHBlYXJhbmNlKGl0ZW1zLmFjdGl2ZSksXG4gICAgJyZbZGF0YS1hY3RpdmU9XCJ0cnVlXCJdJzoge1xuICAgICAgY3Vyc29yOiAnZGVmYXVsdCdcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2VnbWVudGVkQ29udHJvbFJhZGlvQXBwZWFyYW5jZVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxTQUFTQSxhQUFULFFBQThCLGlCQUE5QjtBQUNBLE9BQU9DLGdCQUFQLE1BQTZCLG9CQUE3QjtBQUNBLE9BQU9DLG1CQUFQLE1BQWdDLHVCQUFoQztBQUVBLElBQU1DLFNBQVMsR0FBRztFQUNoQkMsbUJBQW1CLEVBQUUsYUFETDtFQUVoQkMsU0FBUyxFQUFFLFlBRks7RUFHaEJDLGNBQWMsRUFBRSxNQUhBO0VBSWhCQyxVQUFVLEVBQUUsNkJBSkk7RUFLaEJDLGdCQUFnQixFQUFFLE1BTEY7RUFNaEJDLE1BQU0sRUFBRSxNQU5RO0VBT2hCQyxPQUFPLEVBQUUsTUFQTztFQVFoQkMsTUFBTSxFQUFFO0FBUlEsQ0FBbEI7QUFXQSxJQUFNQyxhQUFhLEdBQUcsMkNBQXRCO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLDREQUFuQjtBQUNBLElBQU1DLFdBQVcsR0FDZix5TkFERjtBQUVBLElBQU1DLFVBQVUsR0FBRyx1QkFBbkI7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQyxxQ0FBcUMsR0FBRyxTQUF4Q0EscUNBQXdDLEdBQWdCO0VBQUE7O0VBQUEsSUFBZkMsS0FBZSx1RUFBUCxFQUFPO0VBQzVEZixtQkFBbUIsQ0FBQztJQUNsQmUsS0FBSyxFQUFMQSxLQURrQjtJQUVsQkMsS0FBSyxFQUFFLENBQUMsTUFBRCxFQUFTLE9BQVQsRUFBa0IsVUFBbEIsRUFBOEIsUUFBOUIsRUFBd0MsT0FBeEMsQ0FGVztJQUdsQkMsRUFBRSxFQUFFLFlBQUFDLElBQUksRUFBSTtNQUNWQyxPQUFPLENBQUNDLEtBQVIsdUVBQ2lFRixJQURqRSxZQUVFSCxLQUZGO0lBSUQ7RUFSaUIsQ0FBRCxDQUFuQjtFQVdBLHFEQUNLZCxTQURMLEdBRUtGLGdCQUFnQixDQUFDZ0IsS0FBSyxDQUFDTSxJQUFQLENBRnJCLDZEQUdHWCxhQUhIO0lBSUlELE1BQU0sRUFBRTtFQUpaLEdBS09WLGdCQUFnQixDQUFDZ0IsS0FBSyxDQUFDTyxRQUFQLENBTHZCLG9DQU9HWCxVQVBILEVBT2dCWixnQkFBZ0IsQ0FBQ2dCLEtBQUssQ0FBQ1EsS0FBUCxDQVBoQyxtQ0FRR1YsVUFSSDtJQVNJVyxNQUFNLEVBQUUxQixhQUFhLENBQUMyQjtFQVQxQixHQVVPMUIsZ0JBQWdCLENBQUNnQixLQUFLLENBQUNXLEtBQVAsQ0FWdkIsb0NBWUdkLFdBWkgsRUFZaUJiLGdCQUFnQixDQUFDZ0IsS0FBSyxDQUFDWSxNQUFQLENBWmpDLG1DQWFFLHVCQWJGLEVBYTJCO0lBQ3ZCbEIsTUFBTSxFQUFFO0VBRGUsQ0FiM0I7QUFpQkQsQ0E3QkQ7O0FBK0JBLGVBQWVLLHFDQUFmIn0=