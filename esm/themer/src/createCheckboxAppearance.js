import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import createAppearance from './createAppearance';
import missingStateWarning from './missingStateWarning';
var defaultState = '& + div';
var disabledState = '&[disabled] + div';
var hoverState = '&:not([disabled]):hover + div';
var focusState = '&:not([disabled]):focus + div';
var activeState = '&:not([disabled]):active + div';
var checkedState = '&:checked + div, &[type=checkbox]:indeterminate + div';
var checkedHoverState = '&:not([disabled]):checked:hover + div, &[type=checkbox]:not([disabled]):indeterminate:hover + div';
var checkedActiveState = '&:not([disabled]):checked:active + div, &[type=checkbox]:not([disabled]):indeterminate:active + div';
var checkedDisabledState = '&[disabled]:checked + div, &[type=checkbox][disabled]:indeterminate + div';
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
var baseStyle = {
  WebkitFontSmoothing: 'antialiased',
  textDecoration: 'none',
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  border: 'none',
  outline: 'none',
  cursor: 'pointer'
};
var checkedStyles = {
  '& > svg': {
    display: 'block'
  }
};
/**
 * @param {object} items - object with a set of items.
 * @return {object} the final appearance.
 */

var createCheckboxAppearance = function createCheckboxAppearance() {
  var _objectSpread2;

  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  missingStateWarning({
    items: items,
    props: ['base', 'hover', 'focus', 'active', 'disabled', 'checked', 'checkedDisabled', 'checkedHover', 'checkedActive'],
    cb: function cb(prop) {
      console.error("Themer.createCheckboxAppearance() is missing a ".concat(prop, " state in items:"), items);
    }
  });
  return _objectSpread(_objectSpread({}, hiddenCheckboxStyle), {}, (_objectSpread2 = {
    '& + div > svg': {
      display: 'none'
    }
  }, _defineProperty(_objectSpread2, defaultState, _objectSpread(_objectSpread({}, baseStyle), createAppearance(items.base))), _defineProperty(_objectSpread2, hoverState, createAppearance(items.hover)), _defineProperty(_objectSpread2, focusState, createAppearance(items.focus)), _defineProperty(_objectSpread2, activeState, createAppearance(items.active)), _defineProperty(_objectSpread2, disabledState, createAppearance(items.disabled)), _defineProperty(_objectSpread2, checkedState, _objectSpread(_objectSpread({}, checkedStyles), createAppearance(items.checked))), _defineProperty(_objectSpread2, checkedHoverState, _objectSpread(_objectSpread({}, checkedStyles), createAppearance(items.checkedHover))), _defineProperty(_objectSpread2, checkedDisabledState, _objectSpread(_objectSpread({}, checkedStyles), createAppearance(items.checkedDisabled))), _defineProperty(_objectSpread2, checkedActiveState, _objectSpread(_objectSpread({}, checkedStyles), createAppearance(items.checkedActive))), _objectSpread2));
};

export default createCheckboxAppearance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjcmVhdGVBcHBlYXJhbmNlIiwibWlzc2luZ1N0YXRlV2FybmluZyIsImRlZmF1bHRTdGF0ZSIsImRpc2FibGVkU3RhdGUiLCJob3ZlclN0YXRlIiwiZm9jdXNTdGF0ZSIsImFjdGl2ZVN0YXRlIiwiY2hlY2tlZFN0YXRlIiwiY2hlY2tlZEhvdmVyU3RhdGUiLCJjaGVja2VkQWN0aXZlU3RhdGUiLCJjaGVja2VkRGlzYWJsZWRTdGF0ZSIsImhpZGRlbkNoZWNrYm94U3R5bGUiLCJib3JkZXIiLCJjbGlwIiwiaGVpZ2h0Iiwib3ZlcmZsb3ciLCJwYWRkaW5nIiwicG9zaXRpb24iLCJ3aGl0ZVNwYWNlIiwid2lkdGgiLCJvcGFjaXR5IiwiYmFzZVN0eWxlIiwiV2Via2l0Rm9udFNtb290aGluZyIsInRleHREZWNvcmF0aW9uIiwiV2Via2l0QXBwZWFyYW5jZSIsIk1vekFwcGVhcmFuY2UiLCJvdXRsaW5lIiwiY3Vyc29yIiwiY2hlY2tlZFN0eWxlcyIsImRpc3BsYXkiLCJjcmVhdGVDaGVja2JveEFwcGVhcmFuY2UiLCJpdGVtcyIsInByb3BzIiwiY2IiLCJwcm9wIiwiY29uc29sZSIsImVycm9yIiwiYmFzZSIsImhvdmVyIiwiZm9jdXMiLCJhY3RpdmUiLCJkaXNhYmxlZCIsImNoZWNrZWQiLCJjaGVja2VkSG92ZXIiLCJjaGVja2VkRGlzYWJsZWQiLCJjaGVja2VkQWN0aXZlIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3RoZW1lci9zcmMvY3JlYXRlQ2hlY2tib3hBcHBlYXJhbmNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVBcHBlYXJhbmNlIGZyb20gJy4vY3JlYXRlQXBwZWFyYW5jZSdcbmltcG9ydCBtaXNzaW5nU3RhdGVXYXJuaW5nIGZyb20gJy4vbWlzc2luZ1N0YXRlV2FybmluZydcblxuY29uc3QgZGVmYXVsdFN0YXRlID0gJyYgKyBkaXYnXG5jb25zdCBkaXNhYmxlZFN0YXRlID0gJyZbZGlzYWJsZWRdICsgZGl2J1xuY29uc3QgaG92ZXJTdGF0ZSA9ICcmOm5vdChbZGlzYWJsZWRdKTpob3ZlciArIGRpdidcbmNvbnN0IGZvY3VzU3RhdGUgPSAnJjpub3QoW2Rpc2FibGVkXSk6Zm9jdXMgKyBkaXYnXG5jb25zdCBhY3RpdmVTdGF0ZSA9ICcmOm5vdChbZGlzYWJsZWRdKTphY3RpdmUgKyBkaXYnXG5jb25zdCBjaGVja2VkU3RhdGUgPSAnJjpjaGVja2VkICsgZGl2LCAmW3R5cGU9Y2hlY2tib3hdOmluZGV0ZXJtaW5hdGUgKyBkaXYnXG5jb25zdCBjaGVja2VkSG92ZXJTdGF0ZSA9XG4gICcmOm5vdChbZGlzYWJsZWRdKTpjaGVja2VkOmhvdmVyICsgZGl2LCAmW3R5cGU9Y2hlY2tib3hdOm5vdChbZGlzYWJsZWRdKTppbmRldGVybWluYXRlOmhvdmVyICsgZGl2J1xuY29uc3QgY2hlY2tlZEFjdGl2ZVN0YXRlID1cbiAgJyY6bm90KFtkaXNhYmxlZF0pOmNoZWNrZWQ6YWN0aXZlICsgZGl2LCAmW3R5cGU9Y2hlY2tib3hdOm5vdChbZGlzYWJsZWRdKTppbmRldGVybWluYXRlOmFjdGl2ZSArIGRpdidcbmNvbnN0IGNoZWNrZWREaXNhYmxlZFN0YXRlID1cbiAgJyZbZGlzYWJsZWRdOmNoZWNrZWQgKyBkaXYsICZbdHlwZT1jaGVja2JveF1bZGlzYWJsZWRdOmluZGV0ZXJtaW5hdGUgKyBkaXYnXG5cbmNvbnN0IGhpZGRlbkNoZWNrYm94U3R5bGUgPSB7XG4gIGJvcmRlcjogJzAnLFxuICBjbGlwOiAncmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpJyxcbiAgaGVpZ2h0OiAnMScsXG4gIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgcGFkZGluZzogJzAnLFxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gIHdpZHRoOiAnMScsXG4gIG9wYWNpdHk6ICcwJ1xufVxuXG5jb25zdCBiYXNlU3R5bGUgPSB7XG4gIFdlYmtpdEZvbnRTbW9vdGhpbmc6ICdhbnRpYWxpYXNlZCcsXG4gIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gIFdlYmtpdEFwcGVhcmFuY2U6ICdub25lJyxcbiAgTW96QXBwZWFyYW5jZTogJ25vbmUnLFxuICBib3JkZXI6ICdub25lJyxcbiAgb3V0bGluZTogJ25vbmUnLFxuICBjdXJzb3I6ICdwb2ludGVyJ1xufVxuXG5jb25zdCBjaGVja2VkU3R5bGVzID0ge1xuICAnJiA+IHN2Zyc6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snXG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdH0gaXRlbXMgLSBvYmplY3Qgd2l0aCBhIHNldCBvZiBpdGVtcy5cbiAqIEByZXR1cm4ge29iamVjdH0gdGhlIGZpbmFsIGFwcGVhcmFuY2UuXG4gKi9cbmNvbnN0IGNyZWF0ZUNoZWNrYm94QXBwZWFyYW5jZSA9IChpdGVtcyA9IHt9KSA9PiB7XG4gIG1pc3NpbmdTdGF0ZVdhcm5pbmcoe1xuICAgIGl0ZW1zLFxuICAgIHByb3BzOiBbXG4gICAgICAnYmFzZScsXG4gICAgICAnaG92ZXInLFxuICAgICAgJ2ZvY3VzJyxcbiAgICAgICdhY3RpdmUnLFxuICAgICAgJ2Rpc2FibGVkJyxcbiAgICAgICdjaGVja2VkJyxcbiAgICAgICdjaGVja2VkRGlzYWJsZWQnLFxuICAgICAgJ2NoZWNrZWRIb3ZlcicsXG4gICAgICAnY2hlY2tlZEFjdGl2ZSdcbiAgICBdLFxuICAgIGNiOiBwcm9wID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgIGBUaGVtZXIuY3JlYXRlQ2hlY2tib3hBcHBlYXJhbmNlKCkgaXMgbWlzc2luZyBhICR7cHJvcH0gc3RhdGUgaW4gaXRlbXM6YCxcbiAgICAgICAgaXRlbXNcbiAgICAgIClcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICAuLi5oaWRkZW5DaGVja2JveFN0eWxlLFxuICAgICcmICsgZGl2ID4gc3ZnJzogeyBkaXNwbGF5OiAnbm9uZScgfSxcbiAgICBbZGVmYXVsdFN0YXRlXTogeyAuLi5iYXNlU3R5bGUsIC4uLmNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuYmFzZSkgfSxcbiAgICBbaG92ZXJTdGF0ZV06IGNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuaG92ZXIpLFxuICAgIFtmb2N1c1N0YXRlXTogY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5mb2N1cyksXG4gICAgW2FjdGl2ZVN0YXRlXTogY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5hY3RpdmUpLFxuICAgIFtkaXNhYmxlZFN0YXRlXTogY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5kaXNhYmxlZCksXG4gICAgW2NoZWNrZWRTdGF0ZV06IHsgLi4uY2hlY2tlZFN0eWxlcywgLi4uY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5jaGVja2VkKSB9LFxuICAgIFtjaGVja2VkSG92ZXJTdGF0ZV06IHtcbiAgICAgIC4uLmNoZWNrZWRTdHlsZXMsXG4gICAgICAuLi5jcmVhdGVBcHBlYXJhbmNlKGl0ZW1zLmNoZWNrZWRIb3ZlcilcbiAgICB9LFxuICAgIFtjaGVja2VkRGlzYWJsZWRTdGF0ZV06IHtcbiAgICAgIC4uLmNoZWNrZWRTdHlsZXMsXG4gICAgICAuLi5jcmVhdGVBcHBlYXJhbmNlKGl0ZW1zLmNoZWNrZWREaXNhYmxlZClcbiAgICB9LFxuICAgIFtjaGVja2VkQWN0aXZlU3RhdGVdOiB7XG4gICAgICAuLi5jaGVja2VkU3R5bGVzLFxuICAgICAgLi4uY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5jaGVja2VkQWN0aXZlKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDaGVja2JveEFwcGVhcmFuY2VcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBT0EsZ0JBQVAsTUFBNkIsb0JBQTdCO0FBQ0EsT0FBT0MsbUJBQVAsTUFBZ0MsdUJBQWhDO0FBRUEsSUFBTUMsWUFBWSxHQUFHLFNBQXJCO0FBQ0EsSUFBTUMsYUFBYSxHQUFHLG1CQUF0QjtBQUNBLElBQU1DLFVBQVUsR0FBRywrQkFBbkI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsK0JBQW5CO0FBQ0EsSUFBTUMs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