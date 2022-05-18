import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import createAppearance from './createAppearance';
import missingStateWarning from './missingStateWarning';
var hoverState = '&:hover';
var selectedState = '&[aria-current="page"], &[aria-selected="true"], &:active';
var currentState = '&[aria-current="page"], &[aria-selected="true"]';
var focusState = '&:focus';
var disabledState = '&[aria-disabled="true"]';
var baseStyle = {
  cursor: 'pointer',
  outline: 'none'
};
/**
 * @param {object} items - object with a set of states.
 * @return {object} the final appearance.
 */

var createTabAppearance = function createTabAppearance() {
  var _objectSpread2;

  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  missingStateWarning({
    items: items,
    props: ['base', 'hover', 'active', 'focus', 'current', 'disabled'],
    cb: function cb(prop) {
      console.error("Themer.createTabAppearance() is missing a ".concat(prop, " item"), items);
    }
  });
  return _objectSpread(_objectSpread(_objectSpread({}, baseStyle), createAppearance(items.base)), {}, (_objectSpread2 = {}, _defineProperty(_objectSpread2, hoverState, createAppearance(items.hover)), _defineProperty(_objectSpread2, focusState, createAppearance(items.focus)), _defineProperty(_objectSpread2, selectedState, createAppearance(items.active)), _defineProperty(_objectSpread2, currentState, _objectSpread({
    cursor: 'default'
  }, createAppearance(items.current))), _defineProperty(_objectSpread2, disabledState, _objectSpread({
    cursor: 'not-allowed'
  }, createAppearance(items.disabled))), _objectSpread2));
};

export default createTabAppearance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjcmVhdGVBcHBlYXJhbmNlIiwibWlzc2luZ1N0YXRlV2FybmluZyIsImhvdmVyU3RhdGUiLCJzZWxlY3RlZFN0YXRlIiwiY3VycmVudFN0YXRlIiwiZm9jdXNTdGF0ZSIsImRpc2FibGVkU3RhdGUiLCJiYXNlU3R5bGUiLCJjdXJzb3IiLCJvdXRsaW5lIiwiY3JlYXRlVGFiQXBwZWFyYW5jZSIsIml0ZW1zIiwicHJvcHMiLCJjYiIsInByb3AiLCJjb25zb2xlIiwiZXJyb3IiLCJiYXNlIiwiaG92ZXIiLCJmb2N1cyIsImFjdGl2ZSIsImN1cnJlbnQiLCJkaXNhYmxlZCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aGVtZXIvc3JjL2NyZWF0ZVRhYkFwcGVhcmFuY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZUFwcGVhcmFuY2UgZnJvbSAnLi9jcmVhdGVBcHBlYXJhbmNlJ1xuaW1wb3J0IG1pc3NpbmdTdGF0ZVdhcm5pbmcgZnJvbSAnLi9taXNzaW5nU3RhdGVXYXJuaW5nJ1xuXG5jb25zdCBob3ZlclN0YXRlID0gJyY6aG92ZXInXG5jb25zdCBzZWxlY3RlZFN0YXRlID1cbiAgJyZbYXJpYS1jdXJyZW50PVwicGFnZVwiXSwgJlthcmlhLXNlbGVjdGVkPVwidHJ1ZVwiXSwgJjphY3RpdmUnXG5jb25zdCBjdXJyZW50U3RhdGUgPSAnJlthcmlhLWN1cnJlbnQ9XCJwYWdlXCJdLCAmW2FyaWEtc2VsZWN0ZWQ9XCJ0cnVlXCJdJ1xuY29uc3QgZm9jdXNTdGF0ZSA9ICcmOmZvY3VzJ1xuY29uc3QgZGlzYWJsZWRTdGF0ZSA9ICcmW2FyaWEtZGlzYWJsZWQ9XCJ0cnVlXCJdJ1xuXG5jb25zdCBiYXNlU3R5bGUgPSB7XG4gIGN1cnNvcjogJ3BvaW50ZXInLFxuICBvdXRsaW5lOiAnbm9uZSdcbn1cblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdH0gaXRlbXMgLSBvYmplY3Qgd2l0aCBhIHNldCBvZiBzdGF0ZXMuXG4gKiBAcmV0dXJuIHtvYmplY3R9IHRoZSBmaW5hbCBhcHBlYXJhbmNlLlxuICovXG5jb25zdCBjcmVhdGVUYWJBcHBlYXJhbmNlID0gKGl0ZW1zID0ge30pID0+IHtcbiAgbWlzc2luZ1N0YXRlV2FybmluZyh7XG4gICAgaXRlbXMsXG4gICAgcHJvcHM6IFsnYmFzZScsICdob3ZlcicsICdhY3RpdmUnLCAnZm9jdXMnLCAnY3VycmVudCcsICdkaXNhYmxlZCddLFxuICAgIGNiOiBwcm9wID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgIGBUaGVtZXIuY3JlYXRlVGFiQXBwZWFyYW5jZSgpIGlzIG1pc3NpbmcgYSAke3Byb3B9IGl0ZW1gLFxuICAgICAgICBpdGVtc1xuICAgICAgKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4ge1xuICAgIC4uLmJhc2VTdHlsZSxcbiAgICAuLi5jcmVhdGVBcHBlYXJhbmNlKGl0ZW1zLmJhc2UpLFxuICAgIFtob3ZlclN0YXRlXTogY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5ob3ZlciksXG4gICAgW2ZvY3VzU3RhdGVdOiBjcmVhdGVBcHBlYXJhbmNlKGl0ZW1zLmZvY3VzKSxcbiAgICBbc2VsZWN0ZWRTdGF0ZV06IGNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuYWN0aXZlKSxcbiAgICBbY3VycmVudFN0YXRlXToge1xuICAgICAgY3Vyc29yOiAnZGVmYXVsdCcsXG4gICAgICAuLi5jcmVhdGVBcHBlYXJhbmNlKGl0ZW1zLmN1cnJlbnQpXG4gICAgfSxcbiAgICBbZGlzYWJsZWRTdGF0ZV06IHtcbiAgICAgIGN1cnNvcjogJ25vdC1hbGxvd2VkJyxcbiAgICAgIC4uLmNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuZGlzYWJsZWQpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRhYkFwcGVhcmFuY2VcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBT0EsZ0JBQVAsTUFBNkIsb0JBQTdCO0FBQ0EsT0FBT0MsbUJBQVAsTUFBZ0MsdUJBQWhDO0FBRUEsSUFBTUMsVUFBVSxHQUFHLFNBQW5CO0FBQ0EsSUFBTUMsYUFBYSxHQUNqQiwyREFERjtBQUVBLElBQU1DLFlBQVksR0FBRyxpREFBckI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsU0FBbkI7QUFDQSxJQUFNQyxhQUFhLEdBQUcseUJBQXRCO0FBRUEsSUFBTUMsU0FBUyxHQUFHO0VBQ2hCQyxNQUFNLEVBQUUsU0FEUTtFQUVoQkMsT0FBTyxFQUFFO0FBRk8sQ0FBbEI7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLEdBQWdCO0VBQUE7O0VBQUEsSUFBZkMsS0FBZSx1RUFBUCxFQUFPO0VBQzFDVixtQkFBbUIsQ0FBQztJQUNsQlUsS0FBSyxFQUFMQSxLQURrQjtJQUVsQkMsS0FBSyxFQUFFLENBQUMsTUFBRCxFQUFTLE9BQVQsRUFBa0IsUUFBbEIsRUFBNEIsT0FBNUIsRUFBcUMsU0FBckMsRUFBZ0QsVUFBaEQsQ0FGVztJQUdsQkMsRUFBRSxFQUFFLFlBQUFDLElBQUksRUFBSTtNQUNWQyxPQUFPLENBQUNDLEtBQVIscURBQytDRixJQUQvQyxZQUVFSCxLQUZGO0lBSUQ7RUFSaUIsQ0FBRCxDQUFuQjtFQVdBLHFEQUNLSixTQURMLEdBRUtQLGdCQUFnQixDQUFDVyxLQUFLLENBQUNNLElBQVAsQ0FGckIsNkRBR0dmLFVBSEgsRUFHZ0JGLGdCQUFnQixDQUFDVyxLQUFLLENBQUNPLEtBQVAsQ0FIaEMsbUNBSUdiLFVBSkgsRUFJZ0JMLGdCQUFnQixDQUFDVyxLQUFLLENBQUNRLEtBQVAsQ0FKaEMsbUNBS0doQixhQUxILEVBS21CSCxnQkFBZ0IsQ0FBQ1csS0FBSyxDQUFDUyxNQUFQLENBTG5DLG1DQU1HaEIsWUFOSDtJQU9JSSxNQUFNLEVBQUU7RUFQWixHQVFPUixnQkFBZ0IsQ0FBQ1csS0FBSyxDQUFDVSxPQUFQLENBUnZCLG9DQVVHZixhQVZIO0lBV0lFLE1BQU0sRUFBRTtFQVhaLEdBWU9SLGdCQUFnQixDQUFDVyxLQUFLLENBQUNXLFFBQVAsQ0FadkI7QUFlRCxDQTNCRDs7QUE2QkEsZUFBZVosbUJBQWYifQ==