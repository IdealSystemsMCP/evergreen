"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _createAppearance = _interopRequireDefault(require("./createAppearance"));

var _missingStateWarning = _interopRequireDefault(require("./missingStateWarning"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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
  (0, _missingStateWarning["default"])({
    items: items,
    props: ['base', 'hover', 'active', 'focus', 'current'],
    cb: function cb(prop) {
      console.error("Themer.createRowAppearance() is missing a ".concat(prop, " item"), items);
    }
  });
  return _objectSpread(_objectSpread(_objectSpread({}, baseStyle), (0, _createAppearance["default"])(items.base)), {}, (_objectSpread2 = {}, (0, _defineProperty2["default"])(_objectSpread2, hoverState, (0, _createAppearance["default"])(items.hover)), (0, _defineProperty2["default"])(_objectSpread2, focusState, (0, _createAppearance["default"])(items.focus)), (0, _defineProperty2["default"])(_objectSpread2, activeState, (0, _createAppearance["default"])(items.active)), (0, _defineProperty2["default"])(_objectSpread2, currentState, (0, _createAppearance["default"])(items.current)), _objectSpread2));
};

var _default = createRowAppearance;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJob3ZlclN0YXRlIiwiZm9jdXNTdGF0ZSIsImFjdGl2ZVN0YXRlIiwiY3VycmVudFN0YXRlIiwiYmFzZVN0eWxlIiwiY3Vyc29yIiwib3V0bGluZSIsInRleHREZWNvcmF0aW9uIiwiY3JlYXRlUm93QXBwZWFyYW5jZSIsIml0ZW1zIiwibWlzc2luZ1N0YXRlV2FybmluZyIsInByb3BzIiwiY2IiLCJwcm9wIiwiY29uc29sZSIsImVycm9yIiwiY3JlYXRlQXBwZWFyYW5jZSIsImJhc2UiLCJob3ZlciIsImZvY3VzIiwiYWN0aXZlIiwiY3VycmVudCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aGVtZXIvc3JjL2NyZWF0ZVJvd0FwcGVhcmFuY2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZUFwcGVhcmFuY2UgZnJvbSAnLi9jcmVhdGVBcHBlYXJhbmNlJ1xuaW1wb3J0IG1pc3NpbmdTdGF0ZVdhcm5pbmcgZnJvbSAnLi9taXNzaW5nU3RhdGVXYXJuaW5nJ1xuXG5jb25zdCBob3ZlclN0YXRlID0gJyZbZGF0YS1pc3NlbGVjdGFibGU9XCJ0cnVlXCJdOmhvdmVyJ1xuY29uc3QgZm9jdXNTdGF0ZSA9ICcmW2RhdGEtaXNzZWxlY3RhYmxlPVwidHJ1ZVwiXTpmb2N1cywgJlthcmlhLXNlbGVjdGVkPVwidHJ1ZVwiXSdcbmNvbnN0IGFjdGl2ZVN0YXRlID0gJyZbYXJpYS1jdXJyZW50PVwidHJ1ZVwiXSwgJltkYXRhLWlzc2VsZWN0YWJsZT1cInRydWVcIl06YWN0aXZlJ1xuY29uc3QgY3VycmVudFN0YXRlID0gJyZbYXJpYS1jdXJyZW50PVwidHJ1ZVwiXSdcblxuY29uc3QgYmFzZVN0eWxlID0ge1xuICAnJltkYXRhLWlzc2VsZWN0YWJsZT1cInRydWVcIl0nOiB7XG4gICAgY3Vyc29yOiAncG9pbnRlcidcbiAgfSxcbiAgb3V0bGluZTogJ25vbmUnLFxuICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnXG59XG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IGl0ZW1zIC0gb2JqZWN0IHdpdGggYSBzZXQgb2Ygc3RhdGVzLlxuICogQHJldHVybiB7b2JqZWN0fSB0aGUgZmluYWwgYXBwZWFyYW5jZS5cbiAqL1xuY29uc3QgY3JlYXRlUm93QXBwZWFyYW5jZSA9IChpdGVtcyA9IHt9KSA9PiB7XG4gIG1pc3NpbmdTdGF0ZVdhcm5pbmcoe1xuICAgIGl0ZW1zLFxuICAgIHByb3BzOiBbJ2Jhc2UnLCAnaG92ZXInLCAnYWN0aXZlJywgJ2ZvY3VzJywgJ2N1cnJlbnQnXSxcbiAgICBjYjogcHJvcCA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICBgVGhlbWVyLmNyZWF0ZVJvd0FwcGVhcmFuY2UoKSBpcyBtaXNzaW5nIGEgJHtwcm9wfSBpdGVtYCxcbiAgICAgICAgaXRlbXNcbiAgICAgIClcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICAuLi5iYXNlU3R5bGUsXG4gICAgLi4uY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5iYXNlKSxcbiAgICBbaG92ZXJTdGF0ZV06IGNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuaG92ZXIpLFxuICAgIFtmb2N1c1N0YXRlXTogY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5mb2N1cyksXG4gICAgW2FjdGl2ZVN0YXRlXTogY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5hY3RpdmUpLFxuICAgIFtjdXJyZW50U3RhdGVdOiBjcmVhdGVBcHBlYXJhbmNlKGl0ZW1zLmN1cnJlbnQpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUm93QXBwZWFyYW5jZVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsbUNBQW5CO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLDREQUFuQjtBQUNBLElBQU1DLFdBQVcsR0FBRyw0REFBcEI7QUFDQSxJQUFNQyxZQUFZLEdBQUcsd0JBQXJCO0FBRUEsSUFBTUMsU0FBUyxHQUFHO0VBQ2hCLCtCQUErQjtJQUM3QkMsTUFBTSxFQUFFO0VBRHFCLENBRGY7RUFJaEJDLE9BQU8sRUFBRSxNQUpPO0VBS2hCQyxjQUFjLEVBQUU7QUFMQSxDQUFsQjtBQVFBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1DLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsR0FBZ0I7RUFBQTs7RUFBQSxJQUFmQyxLQUFlLHVFQUFQLEVBQU87RUFDMUMsSUFBQUMsK0JBQUEsRUFBb0I7SUFDbEJELEtBQUssRUFBTEEsS0FEa0I7SUFFbEJFLEtBQUssRUFBRSxDQUFDLE1BQUQsRUFBUyxPQUFULEVBQWtCLFFBQWxCLEVBQTRCLE9BQTVCLEVBQXFDLFNBQXJDLENBRlc7SUFHbEJDLEVBQUUsRUFBRSxZQUFBQyxJQUFJLEVBQUk7TUFDVkMsT0FBTyxDQUFDQyxLQUFSLHFEQUMrQ0YsSUFEL0MsWUFFRUosS0FGRjtJQUlEO0VBUmlCLENBQXBCO0VBV0EscURBQ0tMLFNBREwsR0FFSyxJQUFBWSw0QkFBQSxFQUFpQlAsS0FBSyxDQUFDUSxJQUF2QixDQUZMLDhFQUdHakIsVUFISCxFQUdnQixJQUFBZ0IsNEJBQUEsRUFBaUJQLEtBQUssQ0FBQ1MsS0FBdkIsQ0FIaEIsb0RBSUdqQixVQUpILEVBSWdCLElBQUFlLDRCQUFBLEVBQWlCUCxLQUFLLENBQUNVLEtBQXZCLENBSmhCLG9EQUtHakIsV0FMSCxFQUtpQixJQUFBYyw0QkFBQSxFQUFpQlAsS0FBSyxDQUFDVyxNQUF2QixDQUxqQixvREFNR2pCLFlBTkgsRUFNa0IsSUFBQWEsNEJBQUEsRUFBaUJQLEtBQUssQ0FBQ1ksT0FBdkIsQ0FObEI7QUFRRCxDQXBCRDs7ZUFzQmViLG1CIn0=