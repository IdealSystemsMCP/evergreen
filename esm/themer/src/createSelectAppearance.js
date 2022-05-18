import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import createAppearance from './createAppearance';
import missingStateWarning from './missingStateWarning';
var baseStyle = {
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  border: 'none',
  flex: 1,
  background: 'none',
  width: '100%',
  WebkitFontSmoothing: 'antialiased',
  textDecoration: 'none',
  outline: 'none',
  cursor: 'pointer',
  ':-moz-focusring': {
    color: 'transparent',
    textShadow: '0 0 0 #000'
  }
};
var disabledState = '[disabled]';
var invalidState = '&[aria-invalid="true"]';
var hoverState = '&:not([disabled]):hover';
var focusState = '&:not([disabled]):focus';
var activeState = '&:not([disabled]):active';
/**
 * @param {object} items - object with a set of states.
 * @return {object} the final appearance.
 */

var createSelectAppearance = function createSelectAppearance() {
  var _objectSpread2;

  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  missingStateWarning({
    items: items,
    props: ['base', 'disabled', 'invalid', 'hover', 'active', 'focus'],
    cb: function cb(prop) {
      console.error("Themer.createSelectAppearance() is missing a ".concat(prop, " item"), items);
    }
  });
  return _objectSpread(_objectSpread(_objectSpread({}, baseStyle), createAppearance(items.base)), {}, (_objectSpread2 = {}, _defineProperty(_objectSpread2, disabledState, _objectSpread({
    cursor: 'not-allowed'
  }, createAppearance(items.disabled))), _defineProperty(_objectSpread2, invalidState, createAppearance(items.invalid)), _defineProperty(_objectSpread2, hoverState, createAppearance(items.hover)), _defineProperty(_objectSpread2, focusState, createAppearance(items.focus)), _defineProperty(_objectSpread2, activeState, createAppearance(items.active)), _objectSpread2));
};

export default createSelectAppearance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjcmVhdGVBcHBlYXJhbmNlIiwibWlzc2luZ1N0YXRlV2FybmluZyIsImJhc2VTdHlsZSIsIldlYmtpdEFwcGVhcmFuY2UiLCJNb3pBcHBlYXJhbmNlIiwiYm9yZGVyIiwiZmxleCIsImJhY2tncm91bmQiLCJ3aWR0aCIsIldlYmtpdEZvbnRTbW9vdGhpbmciLCJ0ZXh0RGVjb3JhdGlvbiIsIm91dGxpbmUiLCJjdXJzb3IiLCJjb2xvciIsInRleHRTaGFkb3ciLCJkaXNhYmxlZFN0YXRlIiwiaW52YWxpZFN0YXRlIiwiaG92ZXJTdGF0ZSIsImZvY3VzU3RhdGUiLCJhY3RpdmVTdGF0ZSIsImNyZWF0ZVNlbGVjdEFwcGVhcmFuY2UiLCJpdGVtcyIsInByb3BzIiwiY2IiLCJwcm9wIiwiY29uc29sZSIsImVycm9yIiwiYmFzZSIsImRpc2FibGVkIiwiaW52YWxpZCIsImhvdmVyIiwiZm9jdXMiLCJhY3RpdmUiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdGhlbWVyL3NyYy9jcmVhdGVTZWxlY3RBcHBlYXJhbmNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVBcHBlYXJhbmNlIGZyb20gJy4vY3JlYXRlQXBwZWFyYW5jZSdcbmltcG9ydCBtaXNzaW5nU3RhdGVXYXJuaW5nIGZyb20gJy4vbWlzc2luZ1N0YXRlV2FybmluZydcblxuY29uc3QgYmFzZVN0eWxlID0ge1xuICBXZWJraXRBcHBlYXJhbmNlOiAnbm9uZScsXG4gIE1vekFwcGVhcmFuY2U6ICdub25lJyxcbiAgYm9yZGVyOiAnbm9uZScsXG4gIGZsZXg6IDEsXG4gIGJhY2tncm91bmQ6ICdub25lJyxcbiAgd2lkdGg6ICcxMDAlJyxcbiAgV2Via2l0Rm9udFNtb290aGluZzogJ2FudGlhbGlhc2VkJyxcbiAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgb3V0bGluZTogJ25vbmUnLFxuICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgJzotbW96LWZvY3VzcmluZyc6IHtcbiAgICBjb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICB0ZXh0U2hhZG93OiAnMCAwIDAgIzAwMCdcbiAgfVxufVxuXG5jb25zdCBkaXNhYmxlZFN0YXRlID0gJ1tkaXNhYmxlZF0nXG5jb25zdCBpbnZhbGlkU3RhdGUgPSAnJlthcmlhLWludmFsaWQ9XCJ0cnVlXCJdJ1xuY29uc3QgaG92ZXJTdGF0ZSA9ICcmOm5vdChbZGlzYWJsZWRdKTpob3ZlcidcbmNvbnN0IGZvY3VzU3RhdGUgPSAnJjpub3QoW2Rpc2FibGVkXSk6Zm9jdXMnXG5jb25zdCBhY3RpdmVTdGF0ZSA9ICcmOm5vdChbZGlzYWJsZWRdKTphY3RpdmUnXG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IGl0ZW1zIC0gb2JqZWN0IHdpdGggYSBzZXQgb2Ygc3RhdGVzLlxuICogQHJldHVybiB7b2JqZWN0fSB0aGUgZmluYWwgYXBwZWFyYW5jZS5cbiAqL1xuY29uc3QgY3JlYXRlU2VsZWN0QXBwZWFyYW5jZSA9IChpdGVtcyA9IHt9KSA9PiB7XG4gIG1pc3NpbmdTdGF0ZVdhcm5pbmcoe1xuICAgIGl0ZW1zLFxuICAgIHByb3BzOiBbJ2Jhc2UnLCAnZGlzYWJsZWQnLCAnaW52YWxpZCcsICdob3ZlcicsICdhY3RpdmUnLCAnZm9jdXMnXSxcbiAgICBjYjogcHJvcCA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICBgVGhlbWVyLmNyZWF0ZVNlbGVjdEFwcGVhcmFuY2UoKSBpcyBtaXNzaW5nIGEgJHtwcm9wfSBpdGVtYCxcbiAgICAgICAgaXRlbXNcbiAgICAgIClcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICAuLi5iYXNlU3R5bGUsXG4gICAgLi4uY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5iYXNlKSxcbiAgICBbZGlzYWJsZWRTdGF0ZV06IHtcbiAgICAgIGN1cnNvcjogJ25vdC1hbGxvd2VkJyxcbiAgICAgIC4uLmNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuZGlzYWJsZWQpXG4gICAgfSxcbiAgICBbaW52YWxpZFN0YXRlXTogY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5pbnZhbGlkKSxcbiAgICBbaG92ZXJTdGF0ZV06IGNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuaG92ZXIpLFxuICAgIFtmb2N1c1N0YXRlXTogY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5mb2N1cyksXG4gICAgW2FjdGl2ZVN0YXRlXTogY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5hY3RpdmUpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2VsZWN0QXBwZWFyYW5jZVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPQSxnQkFBUCxNQUE2QixvQkFBN0I7QUFDQSxPQUFPQyxtQkFBUCxNQUFnQyx1QkFBaEM7QUFFQSxJQUFNQyxTQUFTLEdBQUc7RUFDaEJDLGdCQUFnQixFQUFFLE1BREY7RUFFaEJDLGFBQWEsRUFBRSxNQUZDO0VBR2hCQyxNQUFNLEVBQUUsTUFIUTtFQUloQkMsSUFBSSxFQUFFLENBSlU7RUFLaEJDLFVBQVUsRUFBRSxNQUxJO0VBTWhCQyxLQUFLLEVBQUUsTUFOUztFQU9oQkMsbUJBQW1CLEVBQUUsYUFQTDtFQVFoQkMsY0FBYyxFQUFFLE1BUkE7RUFTaEJDLE9BQU8sRUFBRSxNQVRPO0VBVWhCQyxNQUFNLEVBQUUsU0FWUTtFQVdoQixtQkFBbUI7SUFDakJDLEtBQUssRUFBRSxhQURVO0lBRWpCQyxVQUFVLEVBQUU7RUFGSztBQVhILENBQWxCO0FBaUJBLElBQU1DLGFBQWEsR0FBRyxZQUF0QjtBQUNBLElBQU1DLFlBQVksR0FBRyx3QkFBckI7QUFDQSxJQUFNQyxVQUFVLEdBQUcseUJBQW5CO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLHlCQUFuQjtBQUNBLElBQU1DLFdBQVcsR0FBRywwQkFBcEI7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQyxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLEdBQWdCO0VBQUE7O0VBQUEsSUFBZkMsS0FBZSx1RUFBUCxFQUFPO0VBQzdDcEIsbUJBQW1CLENBQUM7SUFDbEJvQixLQUFLLEVBQUxBLEtBRGtCO0lBRWxCQyxLQUFLLEVBQUUsQ0FBQyxNQUFELEVBQVMsVUFBVCxFQUFxQixTQUFyQixFQUFnQyxPQUFoQyxFQUF5QyxRQUF6QyxFQUFtRCxPQUFuRCxDQUZXO0lBR2xCQyxFQUFFLEVBQUUsWUFBQUMsSUFBSSxFQUFJO01BQ1ZDLE9BQU8sQ0FBQ0MsS0FBUix3REFDa0RGLElBRGxELFlBRUVILEtBRkY7SUFJRDtFQVJpQixDQUFELENBQW5CO0VBV0EscURBQ0tuQixTQURMLEdBRUtGLGdCQUFnQixDQUFDcUIsS0FBSyxDQUFDTSxJQUFQLENBRnJCLDZEQUdHWixhQUhIO0lBSUlILE1BQU0sRUFBRTtFQUpaLEdBS09aLGdCQUFnQixDQUFDcUIsS0FBSyxDQUFDTyxRQUFQLENBTHZCLG9DQU9HWixZQVBILEVBT2tCaEIsZ0JBQWdCLENBQUNxQixLQUFLLENBQUNRLE9BQVAsQ0FQbEMsbUNBUUdaLFVBUkgsRUFRZ0JqQixnQkFBZ0IsQ0FBQ3FCLEtBQUssQ0FBQ1MsS0FBUCxDQVJoQyxtQ0FTR1osVUFUSCxFQVNnQmxCLGdCQUFnQixDQUFDcUIsS0FBSyxDQUFDVSxLQUFQLENBVGhDLG1DQVVHWixXQVZILEVBVWlCbkIsZ0JBQWdCLENBQUNxQixLQUFLLENBQUNXLE1BQVAsQ0FWakM7QUFZRCxDQXhCRDs7QUEwQkEsZUFBZVosc0JBQWYifQ==