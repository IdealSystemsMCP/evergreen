import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { StackingOrder } from '../../constants';
import missingStateWarning from './missingStateWarning';
import createAppearance from './createAppearance';
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
  missingStateWarning({
    items: items,
    props: ['base', 'invalid', 'placeholder', 'focus', 'disabled'],
    cb: function cb(prop) {
      console.error("Themer.createInputAppearance() is missing a ".concat(prop, " item"), items);
    }
  });
  return _objectSpread(_objectSpread(_objectSpread({}, baseStyle), createAppearance(items.base)), {}, (_objectSpread2 = {}, _defineProperty(_objectSpread2, invalidState, createAppearance(items.invalid)), _defineProperty(_objectSpread2, placeholder, createAppearance(items.placeholder)), _defineProperty(_objectSpread2, focusState, _objectSpread({
    zIndex: StackingOrder.FOCUSED
  }, createAppearance(items.focus))), _defineProperty(_objectSpread2, disabledState, _objectSpread({
    cursor: 'not-allowed'
  }, createAppearance(items.disabled))), _objectSpread2));
};

export default createInputAppearance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJTdGFja2luZ09yZGVyIiwibWlzc2luZ1N0YXRlV2FybmluZyIsImNyZWF0ZUFwcGVhcmFuY2UiLCJiYXNlU3R5bGUiLCJXZWJraXRBcHBlYXJhbmNlIiwiTW96QXBwZWFyYW5jZSIsImJvcmRlciIsImludmFsaWRTdGF0ZSIsInBsYWNlaG9sZGVyIiwiZm9jdXNTdGF0ZSIsImRpc2FibGVkU3RhdGUiLCJjcmVhdGVJbnB1dEFwcGVhcmFuY2UiLCJpdGVtcyIsInByb3BzIiwiY2IiLCJwcm9wIiwiY29uc29sZSIsImVycm9yIiwiYmFzZSIsImludmFsaWQiLCJ6SW5kZXgiLCJGT0NVU0VEIiwiZm9jdXMiLCJjdXJzb3IiLCJkaXNhYmxlZCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aGVtZXIvc3JjL2NyZWF0ZUlucHV0QXBwZWFyYW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGFja2luZ09yZGVyIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJ1xuaW1wb3J0IG1pc3NpbmdTdGF0ZVdhcm5pbmcgZnJvbSAnLi9taXNzaW5nU3RhdGVXYXJuaW5nJ1xuaW1wb3J0IGNyZWF0ZUFwcGVhcmFuY2UgZnJvbSAnLi9jcmVhdGVBcHBlYXJhbmNlJ1xuXG5jb25zdCBiYXNlU3R5bGUgPSB7XG4gIFdlYmtpdEFwcGVhcmFuY2U6ICdub25lJyxcbiAgTW96QXBwZWFyYW5jZTogJ25vbmUnLFxuICBib3JkZXI6ICdub25lJ1xufVxuXG5jb25zdCBpbnZhbGlkU3RhdGUgPSAnJlthcmlhLWludmFsaWQ9XCJ0cnVlXCJdJ1xuY29uc3QgcGxhY2Vob2xkZXIgPSAnJjo6cGxhY2Vob2xkZXInXG5jb25zdCBmb2N1c1N0YXRlID0gJyY6Zm9jdXMnXG5jb25zdCBkaXNhYmxlZFN0YXRlID0gJyY6ZGlzYWJsZWQnXG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IGl0ZW1zIC0gb2JqZWN0IHdpdGggYSBzZXQgb2Ygc3RhdGVzLlxuICogQHJldHVybiB7b2JqZWN0fSB0aGUgZmluYWwgYXBwZWFyYW5jZS5cbiAqL1xuY29uc3QgY3JlYXRlSW5wdXRBcHBlYXJhbmNlID0gKGl0ZW1zID0ge30pID0+IHtcbiAgbWlzc2luZ1N0YXRlV2FybmluZyh7XG4gICAgaXRlbXMsXG4gICAgcHJvcHM6IFsnYmFzZScsICdpbnZhbGlkJywgJ3BsYWNlaG9sZGVyJywgJ2ZvY3VzJywgJ2Rpc2FibGVkJ10sXG4gICAgY2I6IHByb3AgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgYFRoZW1lci5jcmVhdGVJbnB1dEFwcGVhcmFuY2UoKSBpcyBtaXNzaW5nIGEgJHtwcm9wfSBpdGVtYCxcbiAgICAgICAgaXRlbXNcbiAgICAgIClcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICAuLi5iYXNlU3R5bGUsXG4gICAgLi4uY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5iYXNlKSxcbiAgICBbaW52YWxpZFN0YXRlXTogY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5pbnZhbGlkKSxcbiAgICBbcGxhY2Vob2xkZXJdOiBjcmVhdGVBcHBlYXJhbmNlKGl0ZW1zLnBsYWNlaG9sZGVyKSxcbiAgICBbZm9jdXNTdGF0ZV06IHtcbiAgICAgIHpJbmRleDogU3RhY2tpbmdPcmRlci5GT0NVU0VELFxuICAgICAgLi4uY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5mb2N1cylcbiAgICB9LFxuICAgIFtkaXNhYmxlZFN0YXRlXToge1xuICAgICAgY3Vyc29yOiAnbm90LWFsbG93ZWQnLFxuICAgICAgLi4uY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5kaXNhYmxlZClcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSW5wdXRBcHBlYXJhbmNlXG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLFNBQVNBLGFBQVQsUUFBOEIsaUJBQTlCO0FBQ0EsT0FBT0MsbUJBQVAsTUFBZ0MsdUJBQWhDO0FBQ0EsT0FBT0MsZ0JBQVAsTUFBNkIsb0JBQTdCO0FBRUEsSUFBTUMsU0FBUyxHQUFHO0VBQ2hCQyxnQkFBZ0IsRUFBRSxNQURGO0VBRWhCQyxhQUFhLEVBQUUsTUFGQztFQUdoQkMsTUFBTSxFQUFFO0FBSFEsQ0FBbEI7QUFNQSxJQUFNQyxZQUFZLEdBQUcsd0JBQXJCO0FBQ0EsSUFBTUMsV0FBVyxHQUFHLGdCQUFwQjtBQUNBLElBQU1DLFVBQVUsR0FBRyxTQUFuQjtBQUNBLElBQU1DLGFBQWEsR0FBRyxZQUF0QjtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1DLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsR0FBZ0I7RUFBQTs7RUFBQSxJQUFmQyxLQUFlLHVFQUFQLEVBQU87RUFDNUNYLG1CQUFtQixDQUFDO0lBQ2xCVyxLQUFLLEVBQUxBLEtBRGtCO0lBRWxCQyxLQUFLLEVBQUUsQ0FBQyxNQUFELEVBQVMsU0FBVCxFQUFvQixhQUFwQixFQUFtQyxPQUFuQyxFQUE0QyxVQUE1QyxDQUZXO0lBR2xCQyxFQUFFLEVBQUUsWUFBQUMsSUFBSSxFQUFJO01BQ1ZDLE9BQU8sQ0FBQ0MsS0FBUix1REFDaURGLElBRGpELFlBRUVILEtBRkY7SUFJRDtFQVJpQixDQUFELENBQW5CO0VBV0EscURBQ0tULFNBREwsR0FFS0QsZ0JBQWdCLENBQUNVLEtBQUssQ0FBQ00sSUFBUCxDQUZyQiw2REFHR1gsWUFISCxFQUdrQkwsZ0JBQWdCLENBQUNVLEtBQUssQ0FBQ08sT0FBUCxDQUhsQyxtQ0FJR1gsV0FKSCxFQUlpQk4sZ0JBQWdCLENBQUNVLEtBQUssQ0FBQ0osV0FBUCxDQUpqQyxtQ0FLR0MsVUFMSDtJQU1JVyxNQUFNLEVBQUVwQixhQUFhLENBQUNxQjtFQU4xQixHQU9PbkIsZ0JBQWdCLENBQUNVLEtBQUssQ0FBQ1UsS0FBUCxDQVB2QixvQ0FTR1osYUFUSDtJQVVJYSxNQUFNLEVBQUU7RUFWWixHQVdPckIsZ0JBQWdCLENBQUNVLEtBQUssQ0FBQ1ksUUFBUCxDQVh2QjtBQWNELENBMUJEOztBQTRCQSxlQUFlYixxQkFBZiJ9