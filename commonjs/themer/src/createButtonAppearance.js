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
  '&::-moz-focus-inner ': {
    border: 0
  }
};
var disabledState = "[disabled], [data-disabled]";
var hoverState = '&:not([disabled]):not([data-disabled]):hover';
var focusState = '&:not([disabled]):not([data-disabled]):focus';
var focusAndActiveState = '&:not([disabled]):not([data-disabled]):focus:active, &:not([disabled]):not([data-disabled])[aria-expanded="true"]:focus, &:not([disabled]):not([data-disabled])[data-active]:focus';
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
    props: ['base', 'hover', 'focus', 'active', 'focusAndActive', 'disabled'],
    cb: function cb(prop) {
      console.error("Themer.createButtonAppearance() is missing a ".concat(prop, " state in items:"), items);
    }
  });
  return _objectSpread(_objectSpread(_objectSpread({}, baseStyle), (0, _createAppearance["default"])(items.base)), {}, (_objectSpread2 = {}, (0, _defineProperty2["default"])(_objectSpread2, disabledState, _objectSpread({
    cursor: 'not-allowed'
  }, (0, _createAppearance["default"])(items.disabled))), (0, _defineProperty2["default"])(_objectSpread2, hoverState, (0, _createAppearance["default"])(items.hover)), (0, _defineProperty2["default"])(_objectSpread2, focusState, _objectSpread({
    zIndex: _constants.StackingOrder.FOCUSED
  }, (0, _createAppearance["default"])(items.focus))), (0, _defineProperty2["default"])(_objectSpread2, activeState, (0, _createAppearance["default"])(items.active)), (0, _defineProperty2["default"])(_objectSpread2, focusAndActiveState, (0, _createAppearance["default"])(items.focusAndActive)), _objectSpread2));
};

var _default = createButtonAppearance;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJiYXNlU3R5bGUiLCJXZWJraXRGb250U21vb3RoaW5nIiwiV2Via2l0QXBwZWFyYW5jZSIsIk1vekFwcGVhcmFuY2UiLCJ2ZXJ0aWNhbEFsaWduIiwidGV4dERlY29yYXRpb24iLCJib3JkZXIiLCJvdXRsaW5lIiwiY3Vyc29yIiwiZGlzYWJsZWRTdGF0ZSIsImhvdmVyU3RhdGUiLCJmb2N1c1N0YXRlIiwiZm9jdXNBbmRBY3RpdmVTdGF0ZSIsImFjdGl2ZVN0YXRlIiwiY3JlYXRlQnV0dG9uQXBwZWFyYW5jZSIsIml0ZW1zIiwibWlzc2luZ1N0YXRlV2FybmluZyIsInByb3BzIiwiY2IiLCJwcm9wIiwiY29uc29sZSIsImVycm9yIiwiY3JlYXRlQXBwZWFyYW5jZSIsImJhc2UiLCJkaXNhYmxlZCIsImhvdmVyIiwiekluZGV4IiwiU3RhY2tpbmdPcmRlciIsIkZPQ1VTRUQiLCJmb2N1cyIsImFjdGl2ZSIsImZvY3VzQW5kQWN0aXZlIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3RoZW1lci9zcmMvY3JlYXRlQnV0dG9uQXBwZWFyYW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGFja2luZ09yZGVyIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJ1xuaW1wb3J0IGNyZWF0ZUFwcGVhcmFuY2UgZnJvbSAnLi9jcmVhdGVBcHBlYXJhbmNlJ1xuaW1wb3J0IG1pc3NpbmdTdGF0ZVdhcm5pbmcgZnJvbSAnLi9taXNzaW5nU3RhdGVXYXJuaW5nJ1xuXG5jb25zdCBiYXNlU3R5bGUgPSB7XG4gIFdlYmtpdEZvbnRTbW9vdGhpbmc6ICdhbnRpYWxpYXNlZCcsXG4gIFdlYmtpdEFwcGVhcmFuY2U6ICdub25lJyxcbiAgTW96QXBwZWFyYW5jZTogJ25vbmUnLFxuICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgYm9yZGVyOiAnbm9uZScsXG4gIG91dGxpbmU6ICdub25lJyxcbiAgY3Vyc29yOiAncG9pbnRlcicsXG4gICcmOjotbW96LWZvY3VzLWlubmVyICc6IHtcbiAgICBib3JkZXI6IDBcbiAgfVxufVxuXG5jb25zdCBkaXNhYmxlZFN0YXRlID0gYFtkaXNhYmxlZF0sIFtkYXRhLWRpc2FibGVkXWBcbmNvbnN0IGhvdmVyU3RhdGUgPSAnJjpub3QoW2Rpc2FibGVkXSk6bm90KFtkYXRhLWRpc2FibGVkXSk6aG92ZXInXG5jb25zdCBmb2N1c1N0YXRlID0gJyY6bm90KFtkaXNhYmxlZF0pOm5vdChbZGF0YS1kaXNhYmxlZF0pOmZvY3VzJ1xuY29uc3QgZm9jdXNBbmRBY3RpdmVTdGF0ZSA9XG4gICcmOm5vdChbZGlzYWJsZWRdKTpub3QoW2RhdGEtZGlzYWJsZWRdKTpmb2N1czphY3RpdmUsICY6bm90KFtkaXNhYmxlZF0pOm5vdChbZGF0YS1kaXNhYmxlZF0pW2FyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJdOmZvY3VzLCAmOm5vdChbZGlzYWJsZWRdKTpub3QoW2RhdGEtZGlzYWJsZWRdKVtkYXRhLWFjdGl2ZV06Zm9jdXMnXG5jb25zdCBhY3RpdmVTdGF0ZSA9XG4gICcmOm5vdChbZGlzYWJsZWRdKTpub3QoW2RhdGEtZGlzYWJsZWRdKTphY3RpdmUsICY6bm90KFtkaXNhYmxlZF0pOm5vdChbZGF0YS1kaXNhYmxlZF0pW2FyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJdLCAmOm5vdChbZGlzYWJsZWRdKTpub3QoW2RhdGEtZGlzYWJsZWRdKVtkYXRhLWFjdGl2ZV0nXG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IGl0ZW1zIC0gb2JqZWN0IHdpdGggYSBzZXQgb2YgaXRlbXMuXG4gKiBAcmV0dXJuIHtvYmplY3R9IHRoZSBmaW5hbCBhcHBlYXJhbmNlLlxuICovXG5jb25zdCBjcmVhdGVCdXR0b25BcHBlYXJhbmNlID0gKGl0ZW1zID0ge30pID0+IHtcbiAgbWlzc2luZ1N0YXRlV2FybmluZyh7XG4gICAgaXRlbXMsXG4gICAgcHJvcHM6IFsnYmFzZScsICdob3ZlcicsICdmb2N1cycsICdhY3RpdmUnLCAnZm9jdXNBbmRBY3RpdmUnLCAnZGlzYWJsZWQnXSxcbiAgICBjYjogcHJvcCA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICBgVGhlbWVyLmNyZWF0ZUJ1dHRvbkFwcGVhcmFuY2UoKSBpcyBtaXNzaW5nIGEgJHtwcm9wfSBzdGF0ZSBpbiBpdGVtczpgLFxuICAgICAgICBpdGVtc1xuICAgICAgKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4ge1xuICAgIC4uLmJhc2VTdHlsZSxcbiAgICAuLi5jcmVhdGVBcHBlYXJhbmNlKGl0ZW1zLmJhc2UpLFxuICAgIFtkaXNhYmxlZFN0YXRlXToge1xuICAgICAgY3Vyc29yOiAnbm90LWFsbG93ZWQnLFxuICAgICAgLi4uY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5kaXNhYmxlZClcbiAgICB9LFxuICAgIFtob3ZlclN0YXRlXTogY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5ob3ZlciksXG4gICAgW2ZvY3VzU3RhdGVdOiB7XG4gICAgICB6SW5kZXg6IFN0YWNraW5nT3JkZXIuRk9DVVNFRCxcbiAgICAgIC4uLmNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuZm9jdXMpXG4gICAgfSxcbiAgICBbYWN0aXZlU3RhdGVdOiBjcmVhdGVBcHBlYXJhbmNlKGl0ZW1zLmFjdGl2ZSksXG4gICAgW2ZvY3VzQW5kQWN0aXZlU3RhdGVdOiBjcmVhdGVBcHBlYXJhbmNlKGl0ZW1zLmZvY3VzQW5kQWN0aXZlKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUJ1dHRvbkFwcGVhcmFuY2VcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxHQUFHO0VBQ2hCQyxtQkFBbUIsRUFBRSxhQURMO0VBRWhCQyxnQkFBZ0IsRUFBRSxNQUZGO0VBR2hCQyxhQUFhLEVBQUUsTUFIQztFQUloQkMsYUFBYSxFQUFFLFFBSkM7RUFLaEJDLGNBQWMsRUFBRSxNQUxBO0VBTWhCQyxNQUFNLEVBQUUsTUFOUTtFQU9oQkMsT0FBTyxFQUFFLE1BUE87RUFRaEJDLE1BQU0sRUFBRSxTQVJRO0VBU2hCLHdCQUF3QjtJQUN0QkYsTUFBTSxFQUFFO0VBRGM7QUFUUixDQUFsQjtBQWNBLElBQU1HLGFBQWEsZ0NBQW5CO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLDhDQUFuQjtBQUNBLElBQU1DLFVBQVUsR0FBRyw4Q0FBbkI7QUFDQSxJQUFNQyxtQkFBbUIsR0FDdkIsb0xBREY7QUFFQSxJQUFNQyxXQUFXLEdBQ2Ysa0tBREY7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQyxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLEdBQWdCO0VBQUE7O0VBQUEsSUFBZkMsS0FBZSx1RUFBUCxFQUFPO0VBQzdDLElBQUFDLCtCQUFBLEVBQW9CO0lBQ2xCRCxLQUFLLEVBQUxBLEtBRGtCO0lBRWxCRSxLQUFLLEVBQUUsQ0FBQyxNQUFELEVBQVMsT0FBVCxFQUFrQixPQUFsQixFQUEyQixRQUEzQixFQUFxQyxnQkFBckMsRUFBdUQsVUFBdkQsQ0FGVztJQUdsQkMsRUFBRSxFQUFFLFlBQUFDLElBQUksRUFBSTtNQUNWQyxPQUFPLENBQUNDLEtBQVIsd0RBQ2tERixJQURsRCx1QkFFRUosS0FGRjtJQUlEO0VBUmlCLENBQXBCO0VBV0EscURBQ0tmLFNBREwsR0FFSyxJQUFBc0IsNEJBQUEsRUFBaUJQLEtBQUssQ0FBQ1EsSUFBdkIsQ0FGTCw4RUFHR2QsYUFISDtJQUlJRCxNQUFNLEVBQUU7RUFKWixHQUtPLElBQUFjLDRCQUFBLEVBQWlCUCxLQUFLLENBQUNTLFFBQXZCLENBTFAscURBT0dkLFVBUEgsRUFPZ0IsSUFBQVksNEJBQUEsRUFBaUJQLEtBQUssQ0FBQ1UsS0FBdkIsQ0FQaEIsb0RBUUdkLFVBUkg7SUFTSWUsTUFBTSxFQUFFQyx3QkFBQSxDQUFjQztFQVQxQixHQVVPLElBQUFOLDRCQUFBLEVBQWlCUCxLQUFLLENBQUNjLEtBQXZCLENBVlAscURBWUdoQixXQVpILEVBWWlCLElBQUFTLDRCQUFBLEVBQWlCUCxLQUFLLENBQUNlLE1BQXZCLENBWmpCLG9EQWFHbEIsbUJBYkgsRUFheUIsSUFBQVUsNEJBQUEsRUFBaUJQLEtBQUssQ0FBQ2dCLGNBQXZCLENBYnpCO0FBZUQsQ0EzQkQ7O2VBNkJlakIsc0IifQ==