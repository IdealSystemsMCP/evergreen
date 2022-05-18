import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import createAppearance from './createAppearance';
import missingStateWarning from './missingStateWarning';
var hoverState = '&[data-isselectable="true"]:hover';
var focusState = '&[data-isselectable="true"]:focus, &[aria-selected="true"]';
var activeState = '&[aria-current="true"], &[data-isselectable="true"]:active';
var currentState = '&[aria-current="true"]';
var baseStyle = {
  '&[data-isselectable="true"]': {
    cursor: 'pointer'
  },
  outline: 'none',
  textDecoration: 'none'
};
/**
 * @param {object} items - object with a set of states.
 * @return {object} the final appearance.
 */

var createRowAppearance = function createRowAppearance() {
  var _objectSpread2;

  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  missingStateWarning({
    items: items,
    props: ['base', 'hover', 'active', 'focus', 'current'],
    cb: function cb(prop) {
      console.error("Themer.createRowAppearance() is missing a ".concat(prop, " item"), items);
    }
  });
  return _objectSpread(_objectSpread(_objectSpread({}, baseStyle), createAppearance(items.base)), {}, (_objectSpread2 = {}, _defineProperty(_objectSpread2, hoverState, createAppearance(items.hover)), _defineProperty(_objectSpread2, focusState, createAppearance(items.focus)), _defineProperty(_objectSpread2, activeState, createAppearance(items.active)), _defineProperty(_objectSpread2, currentState, createAppearance(items.current)), _objectSpread2));
};

export default createRowAppearance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjcmVhdGVBcHBlYXJhbmNlIiwibWlzc2luZ1N0YXRlV2FybmluZyIsImhvdmVyU3RhdGUiLCJmb2N1c1N0YXRlIiwiYWN0aXZlU3RhdGUiLCJjdXJyZW50U3RhdGUiLCJiYXNlU3R5bGUiLCJjdXJzb3IiLCJvdXRsaW5lIiwidGV4dERlY29yYXRpb24iLCJjcmVhdGVSb3dBcHBlYXJhbmNlIiwiaXRlbXMiLCJwcm9wcyIsImNiIiwicHJvcCIsImNvbnNvbGUiLCJlcnJvciIsImJhc2UiLCJob3ZlciIsImZvY3VzIiwiYWN0aXZlIiwiY3VycmVudCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aGVtZXIvc3JjL2NyZWF0ZVJvd0FwcGVhcmFuY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZUFwcGVhcmFuY2UgZnJvbSAnLi9jcmVhdGVBcHBlYXJhbmNlJ1xuaW1wb3J0IG1pc3NpbmdTdGF0ZVdhcm5pbmcgZnJvbSAnLi9taXNzaW5nU3RhdGVXYXJuaW5nJ1xuXG5jb25zdCBob3ZlclN0YXRlID0gJyZbZGF0YS1pc3NlbGVjdGFibGU9XCJ0cnVlXCJdOmhvdmVyJ1xuY29uc3QgZm9jdXNTdGF0ZSA9ICcmW2RhdGEtaXNzZWxlY3RhYmxlPVwidHJ1ZVwiXTpmb2N1cywgJlthcmlhLXNlbGVjdGVkPVwidHJ1ZVwiXSdcbmNvbnN0IGFjdGl2ZVN0YXRlID0gJyZbYXJpYS1jdXJyZW50PVwidHJ1ZVwiXSwgJltkYXRhLWlzc2VsZWN0YWJsZT1cInRydWVcIl06YWN0aXZlJ1xuY29uc3QgY3VycmVudFN0YXRlID0gJyZbYXJpYS1jdXJyZW50PVwidHJ1ZVwiXSdcblxuY29uc3QgYmFzZVN0eWxlID0ge1xuICAnJltkYXRhLWlzc2VsZWN0YWJsZT1cInRydWVcIl0nOiB7XG4gICAgY3Vyc29yOiAncG9pbnRlcidcbiAgfSxcbiAgb3V0bGluZTogJ25vbmUnLFxuICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnXG59XG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IGl0ZW1zIC0gb2JqZWN0IHdpdGggYSBzZXQgb2Ygc3RhdGVzLlxuICogQHJldHVybiB7b2JqZWN0fSB0aGUgZmluYWwgYXBwZWFyYW5jZS5cbiAqL1xuY29uc3QgY3JlYXRlUm93QXBwZWFyYW5jZSA9IChpdGVtcyA9IHt9KSA9PiB7XG4gIG1pc3NpbmdTdGF0ZVdhcm5pbmcoe1xuICAgIGl0ZW1zLFxuICAgIHByb3BzOiBbJ2Jhc2UnLCAnaG92ZXInLCAnYWN0aXZlJywgJ2ZvY3VzJywgJ2N1cnJlbnQnXSxcbiAgICBjYjogcHJvcCA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICBgVGhlbWVyLmNyZWF0ZVJvd0FwcGVhcmFuY2UoKSBpcyBtaXNzaW5nIGEgJHtwcm9wfSBpdGVtYCxcbiAgICAgICAgaXRlbXNcbiAgICAgIClcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICAuLi5iYXNlU3R5bGUsXG4gICAgLi4uY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5iYXNlKSxcbiAgICBbaG92ZXJTdGF0ZV06IGNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuaG92ZXIpLFxuICAgIFtmb2N1c1N0YXRlXTogY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5mb2N1cyksXG4gICAgW2FjdGl2ZVN0YXRlXTogY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5hY3RpdmUpLFxuICAgIFtjdXJyZW50U3RhdGVdOiBjcmVhdGVBcHBlYXJhbmNlKGl0ZW1zLmN1cnJlbnQpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUm93QXBwZWFyYW5jZVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPQSxnQkFBUCxNQUE2QixvQkFBN0I7QUFDQSxPQUFPQyxtQkFBUCxNQUFnQyx1QkFBaEM7QUFFQSxJQUFNQyxVQUFVLEdBQUcsbUNBQW5CO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLDREQUFuQjtBQUNBLElBQU1DLFdBQVcsR0FBRyw0REFBcEI7QUFDQSxJQUFNQyxZQUFZLEdBQUcsd0JBQXJCO0FBRUEsSUFBTUMsU0FBUyxHQUFHO0VBQ2hCLCtCQUErQjtJQUM3QkMsTUFBTSxFQUFFO0VBRHFCLENBRGY7RUFJaEJDLE9BQU8sRUFBRSxNQUpPO0VBS2hCQyxjQUFjLEVBQUU7QUFMQSxDQUFsQjtBQVFBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1DLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsR0FBZ0I7RUFBQTs7RUFBQSxJQUFmQyxLQUFlLHVFQUFQLEVBQU87RUFDMUNWLG1CQUFtQixDQUFDO0lBQ2xCVSxLQUFLLEVBQUxBLEtBRGtCO0lBRWxCQyxLQUFLLEVBQUUsQ0FBQyxNQUFELEVBQVMsT0FBVCxFQUFrQixRQUFsQixFQUE0QixPQUE1QixFQUFxQyxTQUFyQyxDQUZXO0lBR2xCQyxFQUFFLEVBQUUsWUFBQUMsSUFBSSxFQUFJO01BQ1ZDLE9BQU8sQ0FBQ0MsS0FBUixxREFDK0NGLElBRC9DLFlBRUVILEtBRkY7SUFJRDtFQVJpQixDQUFELENBQW5CO0VBV0EscURBQ0tMLFNBREwsR0FFS04sZ0JBQWdCLENBQUNXLEtBQUssQ0FBQ00sSUFBUCxDQUZyQiw2REFHR2YsVUFISCxFQUdnQkYsZ0JBQWdCLENBQUNXLEtBQUssQ0FBQ08sS0FBUCxDQUhoQyxtQ0FJR2YsVUFKSCxFQUlnQkgsZ0JBQWdCLENBQUNXLEtBQUssQ0FBQ1EsS0FBUCxDQUpoQyxtQ0FLR2YsV0FMSCxFQUtpQkosZ0JBQWdCLENBQUNXLEtBQUssQ0FBQ1MsTUFBUCxDQUxqQyxtQ0FNR2YsWUFOSCxFQU1rQkwsZ0JBQWdCLENBQUNXLEtBQUssQ0FBQ1UsT0FBUCxDQU5sQztBQVFELENBcEJEOztBQXNCQSxlQUFlWCxtQkFBZiJ9