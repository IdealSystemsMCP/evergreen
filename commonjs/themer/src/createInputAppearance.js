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
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  border: 'none'
};
var invalidState = '&[aria-invalid="true"]';
var placeholder = '&::placeholder';
var focusState = '&:focus';
var disabledState = '&:disabled';
/**
 * @param {object} items - object with a set of states.
 * @return {object} the final appearance.
 */

var createInputAppearance = function createInputAppearance() {
  var _objectSpread2;

  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  (0, _missingStateWarning["default"])({
    items: items,
    props: ['base', 'invalid', 'placeholder', 'focus', 'disabled'],
    cb: function cb(prop) {
      console.error("Themer.createInputAppearance() is missing a ".concat(prop, " item"), items);
    }
  });
  return _objectSpread(_objectSpread(_objectSpread({}, baseStyle), (0, _createAppearance["default"])(items.base)), {}, (_objectSpread2 = {}, (0, _defineProperty2["default"])(_objectSpread2, invalidState, (0, _createAppearance["default"])(items.invalid)), (0, _defineProperty2["default"])(_objectSpread2, placeholder, (0, _createAppearance["default"])(items.placeholder)), (0, _defineProperty2["default"])(_objectSpread2, focusState, _objectSpread({
    zIndex: _constants.StackingOrder.FOCUSED
  }, (0, _createAppearance["default"])(items.focus))), (0, _defineProperty2["default"])(_objectSpread2, disabledState, _objectSpread({
    cursor: 'not-allowed'
  }, (0, _createAppearance["default"])(items.disabled))), _objectSpread2));
};

var _default = createInputAppearance;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJiYXNlU3R5bGUiLCJXZWJraXRBcHBlYXJhbmNlIiwiTW96QXBwZWFyYW5jZSIsImJvcmRlciIsImludmFsaWRTdGF0ZSIsInBsYWNlaG9sZGVyIiwiZm9jdXNTdGF0ZSIsImRpc2FibGVkU3RhdGUiLCJjcmVhdGVJbnB1dEFwcGVhcmFuY2UiLCJpdGVtcyIsIm1pc3NpbmdTdGF0ZVdhcm5pbmciLCJwcm9wcyIsImNiIiwicHJvcCIsImNvbnNvbGUiLCJlcnJvciIsImNyZWF0ZUFwcGVhcmFuY2UiLCJiYXNlIiwiaW52YWxpZCIsInpJbmRleCIsIlN0YWNraW5nT3JkZXIiLCJGT0NVU0VEIiwiZm9jdXMiLCJjdXJzb3IiLCJkaXNhYmxlZCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aGVtZXIvc3JjL2NyZWF0ZUlucHV0QXBwZWFyYW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGFja2luZ09yZGVyIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJ1xuaW1wb3J0IG1pc3NpbmdTdGF0ZVdhcm5pbmcgZnJvbSAnLi9taXNzaW5nU3RhdGVXYXJuaW5nJ1xuaW1wb3J0IGNyZWF0ZUFwcGVhcmFuY2UgZnJvbSAnLi9jcmVhdGVBcHBlYXJhbmNlJ1xuXG5jb25zdCBiYXNlU3R5bGUgPSB7XG4gIFdlYmtpdEFwcGVhcmFuY2U6ICdub25lJyxcbiAgTW96QXBwZWFyYW5jZTogJ25vbmUnLFxuICBib3JkZXI6ICdub25lJ1xufVxuXG5jb25zdCBpbnZhbGlkU3RhdGUgPSAnJlthcmlhLWludmFsaWQ9XCJ0cnVlXCJdJ1xuY29uc3QgcGxhY2Vob2xkZXIgPSAnJjo6cGxhY2Vob2xkZXInXG5jb25zdCBmb2N1c1N0YXRlID0gJyY6Zm9jdXMnXG5jb25zdCBkaXNhYmxlZFN0YXRlID0gJyY6ZGlzYWJsZWQnXG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IGl0ZW1zIC0gb2JqZWN0IHdpdGggYSBzZXQgb2Ygc3RhdGVzLlxuICogQHJldHVybiB7b2JqZWN0fSB0aGUgZmluYWwgYXBwZWFyYW5jZS5cbiAqL1xuY29uc3QgY3JlYXRlSW5wdXRBcHBlYXJhbmNlID0gKGl0ZW1zID0ge30pID0+IHtcbiAgbWlzc2luZ1N0YXRlV2FybmluZyh7XG4gICAgaXRlbXMsXG4gICAgcHJvcHM6IFsnYmFzZScsICdpbnZhbGlkJywgJ3BsYWNlaG9sZGVyJywgJ2ZvY3VzJywgJ2Rpc2FibGVkJ10sXG4gICAgY2I6IHByb3AgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgYFRoZW1lci5jcmVhdGVJbnB1dEFwcGVhcmFuY2UoKSBpcyBtaXNzaW5nIGEgJHtwcm9wfSBpdGVtYCxcbiAgICAgICAgaXRlbXNcbiAgICAgIClcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICAuLi5iYXNlU3R5bGUsXG4gICAgLi4uY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5iYXNlKSxcbiAgICBbaW52YWxpZFN0YXRlXTogY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5pbnZhbGlkKSxcbiAgICBbcGxhY2Vob2xkZXJdOiBjcmVhdGVBcHBlYXJhbmNlKGl0ZW1zLnBsYWNlaG9sZGVyKSxcbiAgICBbZm9jdXNTdGF0ZV06IHtcbiAgICAgIHpJbmRleDogU3RhY2tpbmdPcmRlci5GT0NVU0VELFxuICAgICAgLi4uY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5mb2N1cylcbiAgICB9LFxuICAgIFtkaXNhYmxlZFN0YXRlXToge1xuICAgICAgY3Vyc29yOiAnbm90LWFsbG93ZWQnLFxuICAgICAgLi4uY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5kaXNhYmxlZClcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSW5wdXRBcHBlYXJhbmNlXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFNBQVMsR0FBRztFQUNoQkMsZ0JBQWdCLEVBQUUsTUFERjtFQUVoQkMsYUFBYSxFQUFFLE1BRkM7RUFHaEJDLE1BQU0sRUFBRTtBQUhRLENBQWxCO0FBTUEsSUFBTUMsWUFBWSxHQUFHLHdCQUFyQjtBQUNBLElBQU1DLFdBQVcsR0FBRyxnQkFBcEI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsU0FBbkI7QUFDQSxJQUFNQyxhQUFhLEdBQUcsWUFBdEI7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQyxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLEdBQWdCO0VBQUE7O0VBQUEsSUFBZkMsS0FBZSx1RUFBUCxFQUFPO0VBQzVDLElBQUFDLCtCQUFBLEVBQW9CO0lBQ2xCRCxLQUFLLEVBQUxBLEtBRGtCO0lBRWxCRSxLQUFLLEVBQUUsQ0FBQyxNQUFELEVBQVMsU0FBVCxFQUFvQixhQUFwQixFQUFtQyxPQUFuQyxFQUE0QyxVQUE1QyxDQUZXO0lBR2xCQyxFQUFFLEVBQUUsWUFBQUMsSUFBSSxFQUFJO01BQ1ZDLE9BQU8sQ0FBQ0MsS0FBUix1REFDaURGLElBRGpELFlBRUVKLEtBRkY7SUFJRDtFQVJpQixDQUFwQjtFQVdBLHFEQUNLVCxTQURMLEdBRUssSUFBQWdCLDRCQUFBLEVBQWlCUCxLQUFLLENBQUNRLElBQXZCLENBRkwsOEVBR0diLFlBSEgsRUFHa0IsSUFBQVksNEJBQUEsRUFBaUJQLEtBQUssQ0FBQ1MsT0FBdkIsQ0FIbEIsb0RBSUdiLFdBSkgsRUFJaUIsSUFBQVcsNEJBQUEsRUFBaUJQLEtBQUssQ0FBQ0osV0FBdkIsQ0FKakIsb0RBS0dDLFVBTEg7SUFNSWEsTUFBTSxFQUFFQyx3QkFBQSxDQUFjQztFQU4xQixHQU9PLElBQUFMLDRCQUFBLEVBQWlCUCxLQUFLLENBQUNhLEtBQXZCLENBUFAscURBU0dmLGFBVEg7SUFVSWdCLE1BQU0sRUFBRTtFQVZaLEdBV08sSUFBQVAsNEJBQUEsRUFBaUJQLEtBQUssQ0FBQ2UsUUFBdkIsQ0FYUDtBQWNELENBMUJEOztlQTRCZWhCLHFCIn0=