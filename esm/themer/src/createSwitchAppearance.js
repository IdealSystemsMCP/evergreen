import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import createAppearance from './createAppearance';
import missingStateWarning from './missingStateWarning';
var disabledState = '&[disabled] + div';
var hoverState = '&:not([disabled]):hover + div';
var focusState = '&:not([disabled]):focus + div';
var activeState = '&:not([disabled]):active + div';
var checkedState = '&:checked + div';
var checkedHoverState = '&:checked:hover + div';
var checkedActiveState = '&:not([disabled]):checked:active + div';
var checkedDisabledState = '&[disabled]:checked + div';
var hiddenCheckboxStyle = {
  border: '0',
  clip: 'rect(1px, 1px, 1px, 1px)',
  height: '1',
  overflow: 'hidden',
  padding: '0',
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: '1',
  opacity: '0'
};
/**
 * @param {object} items - object with a set of states.
 * @return {object} the final appearance.
 */

var createSwitchAppearance = function createSwitchAppearance() {
  var _objectSpread2;

  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  missingStateWarning({
    items: items,
    props: ['base', 'disabled', 'hover', 'active', 'focus', 'checked', 'checkedActive', 'checkedDisabled'],
    cb: function cb(prop) {
      console.error("Themer.createSwitchAppearance() is missing a ".concat(prop, " item"), items);
    }
  });
  return _objectSpread(_objectSpread({}, hiddenCheckboxStyle), {}, (_objectSpread2 = {
    '& + div > svg': {
      display: 'none'
    },
    '& + div': _objectSpread({
      cursor: 'pointer'
    }, createAppearance(items.base))
  }, _defineProperty(_objectSpread2, disabledState, _objectSpread({
    cursor: 'not-allowed'
  }, createAppearance(items.disabled))), _defineProperty(_objectSpread2, hoverState, createAppearance(items.hover)), _defineProperty(_objectSpread2, focusState, createAppearance(items.focus)), _defineProperty(_objectSpread2, activeState, createAppearance(items.active)), _defineProperty(_objectSpread2, checkedState, _objectSpread(_objectSpread({}, createAppearance(items.checked)), {}, {
    '& > svg': {
      display: 'block'
    }
  })), _defineProperty(_objectSpread2, checkedHoverState, _objectSpread(_objectSpread({}, createAppearance(items.checkedHover)), {}, {
    '& > svg': {
      display: 'block'
    }
  })), _defineProperty(_objectSpread2, checkedActiveState, _objectSpread(_objectSpread({}, createAppearance(items.checkedActive)), {}, {
    '& > svg': {
      display: 'block'
    }
  })), _defineProperty(_objectSpread2, checkedDisabledState, _objectSpread(_objectSpread({}, createAppearance(items.checkedDisabled)), {}, {
    '& > svg': {
      display: 'block'
    }
  })), _objectSpread2));
};

export default createSwitchAppearance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjcmVhdGVBcHBlYXJhbmNlIiwibWlzc2luZ1N0YXRlV2FybmluZyIsImRpc2FibGVkU3RhdGUiLCJob3ZlclN0YXRlIiwiZm9jdXNTdGF0ZSIsImFjdGl2ZVN0YXRlIiwiY2hlY2tlZFN0YXRlIiwiY2hlY2tlZEhvdmVyU3RhdGUiLCJjaGVja2VkQWN0aXZlU3RhdGUiLCJjaGVja2VkRGlzYWJsZWRTdGF0ZSIsImhpZGRlbkNoZWNrYm94U3R5bGUiLCJib3JkZXIiLCJjbGlwIiwiaGVpZ2h0Iiwib3ZlcmZsb3ciLCJwYWRkaW5nIiwicG9zaXRpb24iLCJ3aGl0ZVNwYWNlIiwid2lkdGgiLCJvcGFjaXR5IiwiY3JlYXRlU3dpdGNoQXBwZWFyYW5jZSIsIml0ZW1zIiwicHJvcHMiLCJjYiIsInByb3AiLCJjb25zb2xlIiwiZXJyb3IiLCJkaXNwbGF5IiwiY3Vyc29yIiwiYmFzZSIsImRpc2FibGVkIiwiaG92ZXIiLCJmb2N1cyIsImFjdGl2ZSIsImNoZWNrZWQiLCJjaGVja2VkSG92ZXIiLCJjaGVja2VkQWN0aXZlIiwiY2hlY2tlZERpc2FibGVkIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3RoZW1lci9zcmMvY3JlYXRlU3dpdGNoQXBwZWFyYW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlQXBwZWFyYW5jZSBmcm9tICcuL2NyZWF0ZUFwcGVhcmFuY2UnXG5pbXBvcnQgbWlzc2luZ1N0YXRlV2FybmluZyBmcm9tICcuL21pc3NpbmdTdGF0ZVdhcm5pbmcnXG5cbmNvbnN0IGRpc2FibGVkU3RhdGUgPSAnJltkaXNhYmxlZF0gKyBkaXYnXG5jb25zdCBob3ZlclN0YXRlID0gJyY6bm90KFtkaXNhYmxlZF0pOmhvdmVyICsgZGl2J1xuY29uc3QgZm9jdXNTdGF0ZSA9ICcmOm5vdChbZGlzYWJsZWRdKTpmb2N1cyArIGRpdidcbmNvbnN0IGFjdGl2ZVN0YXRlID0gJyY6bm90KFtkaXNhYmxlZF0pOmFjdGl2ZSArIGRpdidcbmNvbnN0IGNoZWNrZWRTdGF0ZSA9ICcmOmNoZWNrZWQgKyBkaXYnXG5jb25zdCBjaGVja2VkSG92ZXJTdGF0ZSA9ICcmOmNoZWNrZWQ6aG92ZXIgKyBkaXYnXG5jb25zdCBjaGVja2VkQWN0aXZlU3RhdGUgPSAnJjpub3QoW2Rpc2FibGVkXSk6Y2hlY2tlZDphY3RpdmUgKyBkaXYnXG5jb25zdCBjaGVja2VkRGlzYWJsZWRTdGF0ZSA9ICcmW2Rpc2FibGVkXTpjaGVja2VkICsgZGl2J1xuXG5jb25zdCBoaWRkZW5DaGVja2JveFN0eWxlID0ge1xuICBib3JkZXI6ICcwJyxcbiAgY2xpcDogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KScsXG4gIGhlaWdodDogJzEnLFxuICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gIHBhZGRpbmc6ICcwJyxcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICB3aWR0aDogJzEnLFxuICBvcGFjaXR5OiAnMCdcbn1cblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdH0gaXRlbXMgLSBvYmplY3Qgd2l0aCBhIHNldCBvZiBzdGF0ZXMuXG4gKiBAcmV0dXJuIHtvYmplY3R9IHRoZSBmaW5hbCBhcHBlYXJhbmNlLlxuICovXG5jb25zdCBjcmVhdGVTd2l0Y2hBcHBlYXJhbmNlID0gKGl0ZW1zID0ge30pID0+IHtcbiAgbWlzc2luZ1N0YXRlV2FybmluZyh7XG4gICAgaXRlbXMsXG4gICAgcHJvcHM6IFtcbiAgICAgICdiYXNlJyxcbiAgICAgICdkaXNhYmxlZCcsXG4gICAgICAnaG92ZXInLFxuICAgICAgJ2FjdGl2ZScsXG4gICAgICAnZm9jdXMnLFxuICAgICAgJ2NoZWNrZWQnLFxuICAgICAgJ2NoZWNrZWRBY3RpdmUnLFxuICAgICAgJ2NoZWNrZWREaXNhYmxlZCdcbiAgICBdLFxuICAgIGNiOiBwcm9wID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgIGBUaGVtZXIuY3JlYXRlU3dpdGNoQXBwZWFyYW5jZSgpIGlzIG1pc3NpbmcgYSAke3Byb3B9IGl0ZW1gLFxuICAgICAgICBpdGVtc1xuICAgICAgKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4ge1xuICAgIC4uLmhpZGRlbkNoZWNrYm94U3R5bGUsXG4gICAgJyYgKyBkaXYgPiBzdmcnOiB7IGRpc3BsYXk6ICdub25lJyB9LFxuICAgICcmICsgZGl2JzogeyBjdXJzb3I6ICdwb2ludGVyJywgLi4uY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5iYXNlKSB9LFxuICAgIFtkaXNhYmxlZFN0YXRlXToge1xuICAgICAgY3Vyc29yOiAnbm90LWFsbG93ZWQnLFxuICAgICAgLi4uY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5kaXNhYmxlZClcbiAgICB9LFxuICAgIFtob3ZlclN0YXRlXTogY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5ob3ZlciksXG4gICAgW2ZvY3VzU3RhdGVdOiBjcmVhdGVBcHBlYXJhbmNlKGl0ZW1zLmZvY3VzKSxcbiAgICBbYWN0aXZlU3RhdGVdOiBjcmVhdGVBcHBlYXJhbmNlKGl0ZW1zLmFjdGl2ZSksXG4gICAgW2NoZWNrZWRTdGF0ZV06IHtcbiAgICAgIC4uLmNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuY2hlY2tlZCksXG4gICAgICAnJiA+IHN2Zyc6IHsgZGlzcGxheTogJ2Jsb2NrJyB9XG4gICAgfSxcbiAgICBbY2hlY2tlZEhvdmVyU3RhdGVdOiB7XG4gICAgICAuLi5jcmVhdGVBcHBlYXJhbmNlKGl0ZW1zLmNoZWNrZWRIb3ZlciksXG4gICAgICAnJiA+IHN2Zyc6IHsgZGlzcGxheTogJ2Jsb2NrJyB9XG4gICAgfSxcbiAgICBbY2hlY2tlZEFjdGl2ZVN0YXRlXToge1xuICAgICAgLi4uY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5jaGVja2VkQWN0aXZlKSxcbiAgICAgICcmID4gc3ZnJzogeyBkaXNwbGF5OiAnYmxvY2snIH1cbiAgICB9LFxuICAgIFtjaGVja2VkRGlzYWJsZWRTdGF0ZV06IHtcbiAgICAgIC4uLmNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuY2hlY2tlZERpc2FibGVkKSxcbiAgICAgICcmID4gc3ZnJzogeyBkaXNwbGF5OiAnYmxvY2snIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3dpdGNoQXBwZWFyYW5jZVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPQSxnQkFBUCxNQUE2QixvQkFBN0I7QUFDQSxPQUFPQyxtQkFBUCxNQUFnQyx1QkFBaEM7QUFFQSxJQUFNQyxhQUFhLEdBQUcsbUJBQXRCO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLCtCQUFuQjtBQUNBLElBQU1DLFVBQVUsR0FBRywrQkFBbkI7QUFDQSxJQUFNQyxXQUFXLEdBQUcsZ0NBQXBCO0FBQ0EsSUFBTUMsWUFBWSxHQUFHLGlCQUFyQjtBQUNBLElBQU1DLGlCQUFpQixHQUFHLHVCQUExQjtBQUNBLElBQU1DLGtCQUFrQixHQUFHLHdDQUEzQjtBQUNBLElBQU1DLG9CQUFvQixHQUFHLDJCQUE3QjtBQUVBLElBQU1DLG1CQUFtQixHQUFHO0VBQzFCQyxNQUFNLEVBQUUsR0FEa0I7RUFFMUJDLElBQUksRUFBRSwwQkFGb0I7RUFHMUJDLE1BQU0sRUFBRSxHQUhrQjtFQUkxQkMsUUFBUSxFQUFFLFFBSmdCO0VBSzFCQyxPQUFPLEVBQUUsR0FMaUI7RUFNMUJDLFFBQVEsRUFBRSxVQU5nQjtFQU8xQkMsVUFBVSxFQUFFLFFBUGM7RUFRMUJDLEtBQUssRUFBRSxHQVJtQjtFQVMxQkMsT0FBTyxFQUFFO0FBVGlCLENBQTVCO0FBWUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUMsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QixHQUFnQjtFQUFBOztFQUFBLElBQWZDLEtBQWUsdUVBQVAsRUFBTztFQUM3Q3BCLG1CQUFtQixDQUFDO0lBQ2xCb0IsS0FBSyxFQUFMQSxLQURrQjtJQUVsQkMsS0FBSyxFQUFFLENBQ0wsTUFESyxFQUVMLFVBRkssRUFHTCxPQUhLLEVBSUwsUUFKSyxFQUtMLE9BTEssRUFNTCxTQU5LLEVBT0wsZUFQSyxFQVFMLGlCQVJLLENBRlc7SUFZbEJDLEVBQUUsRUFBRSxZQUFBQyxJQUFJLEVBQUk7TUFDVkMsT0FBTyxDQUFDQyxLQUFSLHdEQUNrREYsSUFEbEQsWUFFRUgsS0FGRjtJQUlEO0VBakJpQixDQUFELENBQW5CO0VBb0JBLHVDQUNLWCxtQkFETDtJQUVFLGlCQUFpQjtNQUFFaUIsT0FBTyxFQUFFO0lBQVgsQ0FGbkI7SUFHRTtNQUFhQyxNQUFNLEVBQUU7SUFBckIsR0FBbUM1QixnQkFBZ0IsQ0FBQ3FCLEtBQUssQ0FBQ1EsSUFBUCxDQUFuRDtFQUhGLG1DQUlHM0IsYUFKSDtJQUtJMEIsTUFBTSxFQUFFO0VBTFosR0FNTzVCLGdCQUFnQixDQUFDcUIsS0FBSyxDQUFDUyxRQUFQLENBTnZCLG9DQVFHM0IsVUFSSCxFQVFnQkgsZ0JBQWdCLENBQUNxQixLQUFLLENBQUNVLEtBQVAsQ0FSaEMsbUNBU0czQixVQVRILEVBU2dCSixnQkFBZ0IsQ0FBQ3FCLEtBQUssQ0FBQ1csS0FBUCxDQVRoQyxtQ0FVRzNCLFdBVkgsRUFVaUJMLGdCQUFnQixDQUFDcUIsS0FBSyxDQUFDWSxNQUFQLENBVmpDLG1DQVdHM0IsWUFYSCxrQ0FZT04sZ0JBQWdCLENBQUNxQixLQUFLLENBQUNhLE9BQVAsQ0FadkI7SUFhSSxXQUFXO01BQUVQLE9BQU8sRUFBRTtJQUFYO0VBYmYscUNBZUdwQixpQkFmSCxrQ0FnQk9QLGdCQUFnQixDQUFDcUIsS0FBSyxDQUFDYyxZQUFQLENBaEJ2QjtJQWlCSSxXQUFXO01BQUVSLE9BQU8sRUFBRTtJQUFYO0VBakJmLHFDQW1CR25CLGtCQW5CSCxrQ0FvQk9SLGdCQUFnQixDQUFDcUIsS0FBSyxDQUFDZSxhQUFQLENBcEJ2QjtJQXFCSSxXQUFXO01BQUVULE9BQU8sRUFBRTtJQUFYO0VBckJmLHFDQXVCR2xCLG9CQXZCSCxrQ0F3Qk9ULGdCQUFnQixDQUFDcUIsS0FBSyxDQUFDZ0IsZUFBUCxDQXhCdkI7SUF5QkksV0FBVztNQUFFVixPQUFPLEVBQUU7SUFBWDtFQXpCZjtBQTRCRCxDQWpERDs7QUFtREEsZUFBZVAsc0JBQWYifQ==