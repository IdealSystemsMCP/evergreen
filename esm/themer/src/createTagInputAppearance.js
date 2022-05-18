import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { StackingOrder } from '../../constants';
import missingStateWarning from './missingStateWarning';
import createAppearance from './createAppearance';
var baseStyle = {
  alignItems: 'center',
  display: 'inline-flex',
  flexWrap: 'wrap'
};
var focusState = '&[aria-activedescendant]';
var disabledState = '&[aria-disabled="true"]';
/**
 * @param {object} items - object with a set of states.
 * @return {object} the final appearance.
 */

var createTagInputAppearance = function createTagInputAppearance() {
  var _objectSpread2;

  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  missingStateWarning({
    items: items,
    props: ['base', 'focus', 'disabled'],
    cb: function cb(prop) {
      console.error("Themer.createTagInputAppearance() is missing a ".concat(prop, " item"), items);
    }
  });
  return _objectSpread(_objectSpread(_objectSpread({}, baseStyle), createAppearance(items.base)), {}, (_objectSpread2 = {}, _defineProperty(_objectSpread2, focusState, _objectSpread({
    zIndex: StackingOrder.FOCUSED
  }, createAppearance(items.focus))), _defineProperty(_objectSpread2, disabledState, _objectSpread({
    cursor: 'not-allowed'
  }, createAppearance(items.disabled))), _objectSpread2));
};

export default createTagInputAppearance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJTdGFja2luZ09yZGVyIiwibWlzc2luZ1N0YXRlV2FybmluZyIsImNyZWF0ZUFwcGVhcmFuY2UiLCJiYXNlU3R5bGUiLCJhbGlnbkl0ZW1zIiwiZGlzcGxheSIsImZsZXhXcmFwIiwiZm9jdXNTdGF0ZSIsImRpc2FibGVkU3RhdGUiLCJjcmVhdGVUYWdJbnB1dEFwcGVhcmFuY2UiLCJpdGVtcyIsInByb3BzIiwiY2IiLCJwcm9wIiwiY29uc29sZSIsImVycm9yIiwiYmFzZSIsInpJbmRleCIsIkZPQ1VTRUQiLCJmb2N1cyIsImN1cnNvciIsImRpc2FibGVkIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3RoZW1lci9zcmMvY3JlYXRlVGFnSW5wdXRBcHBlYXJhbmNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YWNraW5nT3JkZXIgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnXG5pbXBvcnQgbWlzc2luZ1N0YXRlV2FybmluZyBmcm9tICcuL21pc3NpbmdTdGF0ZVdhcm5pbmcnXG5pbXBvcnQgY3JlYXRlQXBwZWFyYW5jZSBmcm9tICcuL2NyZWF0ZUFwcGVhcmFuY2UnXG5cbmNvbnN0IGJhc2VTdHlsZSA9IHtcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gIGZsZXhXcmFwOiAnd3JhcCdcbn1cblxuY29uc3QgZm9jdXNTdGF0ZSA9ICcmW2FyaWEtYWN0aXZlZGVzY2VuZGFudF0nXG5jb25zdCBkaXNhYmxlZFN0YXRlID0gJyZbYXJpYS1kaXNhYmxlZD1cInRydWVcIl0nXG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IGl0ZW1zIC0gb2JqZWN0IHdpdGggYSBzZXQgb2Ygc3RhdGVzLlxuICogQHJldHVybiB7b2JqZWN0fSB0aGUgZmluYWwgYXBwZWFyYW5jZS5cbiAqL1xuY29uc3QgY3JlYXRlVGFnSW5wdXRBcHBlYXJhbmNlID0gKGl0ZW1zID0ge30pID0+IHtcbiAgbWlzc2luZ1N0YXRlV2FybmluZyh7XG4gICAgaXRlbXMsXG4gICAgcHJvcHM6IFsnYmFzZScsICdmb2N1cycsICdkaXNhYmxlZCddLFxuICAgIGNiOiBwcm9wID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgIGBUaGVtZXIuY3JlYXRlVGFnSW5wdXRBcHBlYXJhbmNlKCkgaXMgbWlzc2luZyBhICR7cHJvcH0gaXRlbWAsXG4gICAgICAgIGl0ZW1zXG4gICAgICApXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgLi4uYmFzZVN0eWxlLFxuICAgIC4uLmNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuYmFzZSksXG4gICAgW2ZvY3VzU3RhdGVdOiB7XG4gICAgICB6SW5kZXg6IFN0YWNraW5nT3JkZXIuRk9DVVNFRCxcbiAgICAgIC4uLmNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuZm9jdXMpXG4gICAgfSxcbiAgICBbZGlzYWJsZWRTdGF0ZV06IHtcbiAgICAgIGN1cnNvcjogJ25vdC1hbGxvd2VkJyxcbiAgICAgIC4uLmNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuZGlzYWJsZWQpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRhZ0lucHV0QXBwZWFyYW5jZVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxTQUFTQSxhQUFULFFBQThCLGlCQUE5QjtBQUNBLE9BQU9DLG1CQUFQLE1BQWdDLHVCQUFoQztBQUNBLE9BQU9DLGdCQUFQLE1BQTZCLG9CQUE3QjtBQUVBLElBQU1DLFNBQVMsR0FBRztFQUNoQkMsVUFBVSxFQUFFLFFBREk7RUFFaEJDLE9BQU8sRUFBRSxhQUZPO0VBR2hCQyxRQUFRLEVBQUU7QUFITSxDQUFsQjtBQU1BLElBQU1DLFVBQVUsR0FBRywwQkFBbkI7QUFDQSxJQUFNQyxhQUFhLEdBQUcseUJBQXRCO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUMsd0JBQXdCLEdBQUcsU0FBM0JBLHdCQUEyQixHQUFnQjtFQUFBOztFQUFBLElBQWZDLEtBQWUsdUVBQVAsRUFBTztFQUMvQ1QsbUJBQW1CLENBQUM7SUFDbEJTLEtBQUssRUFBTEEsS0FEa0I7SUFFbEJDLEtBQUssRUFBRSxDQUFDLE1BQUQsRUFBUyxPQUFULEVBQWtCLFVBQWxCLENBRlc7SUFHbEJDLEVBQUUsRUFBRSxZQUFBQyxJQUFJLEVBQUk7TUFDVkMsT0FBTyxDQUFDQyxLQUFSLDBEQUNvREYsSUFEcEQsWUFFRUgsS0FGRjtJQUlEO0VBUmlCLENBQUQsQ0FBbkI7RUFXQSxxREFDS1AsU0FETCxHQUVLRCxnQkFBZ0IsQ0FBQ1EsS0FBSyxDQUFDTSxJQUFQLENBRnJCLDZEQUdHVCxVQUhIO0lBSUlVLE1BQU0sRUFBRWpCLGFBQWEsQ0FBQ2tCO0VBSjFCLEdBS09oQixnQkFBZ0IsQ0FBQ1EsS0FBSyxDQUFDUyxLQUFQLENBTHZCLG9DQU9HWCxhQVBIO0lBUUlZLE1BQU0sRUFBRTtFQVJaLEdBU09sQixnQkFBZ0IsQ0FBQ1EsS0FBSyxDQUFDVyxRQUFQLENBVHZCO0FBWUQsQ0F4QkQ7O0FBMEJBLGVBQWVaLHdCQUFmIn0=