import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import missingStateWarning from './missingStateWarning';
import createAppearance from './createAppearance';
var hoverState = '&:hover';
var activeState = '&:active';
var focusState = '&:focus';
/**
 * @param {object} items - object with a set of states.
 * @return {object} the final appearance.
 */

var createLinkAppearance = function createLinkAppearance() {
  var _objectSpread2;

  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  missingStateWarning({
    items: items,
    props: ['base', 'hover', 'active', 'focus'],
    cb: function cb(prop) {
      console.error("Themer.createLinkAppearance() is missing a ".concat(prop, " item"), items);
    }
  });
  return _objectSpread(_objectSpread({}, items.base), {}, (_objectSpread2 = {}, _defineProperty(_objectSpread2, hoverState, createAppearance(items.hover)), _defineProperty(_objectSpread2, activeState, createAppearance(items.active)), _defineProperty(_objectSpread2, focusState, createAppearance(items.focus)), _objectSpread2));
};

export default createLinkAppearance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJtaXNzaW5nU3RhdGVXYXJuaW5nIiwiY3JlYXRlQXBwZWFyYW5jZSIsImhvdmVyU3RhdGUiLCJhY3RpdmVTdGF0ZSIsImZvY3VzU3RhdGUiLCJjcmVhdGVMaW5rQXBwZWFyYW5jZSIsIml0ZW1zIiwicHJvcHMiLCJjYiIsInByb3AiLCJjb25zb2xlIiwiZXJyb3IiLCJiYXNlIiwiaG92ZXIiLCJhY3RpdmUiLCJmb2N1cyJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aGVtZXIvc3JjL2NyZWF0ZUxpbmtBcHBlYXJhbmNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtaXNzaW5nU3RhdGVXYXJuaW5nIGZyb20gJy4vbWlzc2luZ1N0YXRlV2FybmluZydcbmltcG9ydCBjcmVhdGVBcHBlYXJhbmNlIGZyb20gJy4vY3JlYXRlQXBwZWFyYW5jZSdcblxuY29uc3QgaG92ZXJTdGF0ZSA9ICcmOmhvdmVyJ1xuY29uc3QgYWN0aXZlU3RhdGUgPSAnJjphY3RpdmUnXG5jb25zdCBmb2N1c1N0YXRlID0gJyY6Zm9jdXMnXG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IGl0ZW1zIC0gb2JqZWN0IHdpdGggYSBzZXQgb2Ygc3RhdGVzLlxuICogQHJldHVybiB7b2JqZWN0fSB0aGUgZmluYWwgYXBwZWFyYW5jZS5cbiAqL1xuY29uc3QgY3JlYXRlTGlua0FwcGVhcmFuY2UgPSAoaXRlbXMgPSB7fSkgPT4ge1xuICBtaXNzaW5nU3RhdGVXYXJuaW5nKHtcbiAgICBpdGVtcyxcbiAgICBwcm9wczogWydiYXNlJywgJ2hvdmVyJywgJ2FjdGl2ZScsICdmb2N1cyddLFxuICAgIGNiOiBwcm9wID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgIGBUaGVtZXIuY3JlYXRlTGlua0FwcGVhcmFuY2UoKSBpcyBtaXNzaW5nIGEgJHtwcm9wfSBpdGVtYCxcbiAgICAgICAgaXRlbXNcbiAgICAgIClcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICAuLi5pdGVtcy5iYXNlLFxuICAgIFtob3ZlclN0YXRlXTogY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5ob3ZlciksXG4gICAgW2FjdGl2ZVN0YXRlXTogY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5hY3RpdmUpLFxuICAgIFtmb2N1c1N0YXRlXTogY3JlYXRlQXBwZWFyYW5jZShpdGVtcy5mb2N1cylcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVMaW5rQXBwZWFyYW5jZVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPQSxtQkFBUCxNQUFnQyx1QkFBaEM7QUFDQSxPQUFPQyxnQkFBUCxNQUE2QixvQkFBN0I7QUFFQSxJQUFNQyxVQUFVLEdBQUcsU0FBbkI7QUFDQSxJQUFNQyxXQUFXLEdBQUcsVUFBcEI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsU0FBbkI7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQyxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLEdBQWdCO0VBQUE7O0VBQUEsSUFBZkMsS0FBZSx1RUFBUCxFQUFPO0VBQzNDTixtQkFBbUIsQ0FBQztJQUNsQk0sS0FBSyxFQUFMQSxLQURrQjtJQUVsQkMsS0FBSyxFQUFFLENBQUMsTUFBRCxFQUFTLE9BQVQsRUFBa0IsUUFBbEIsRUFBNEIsT0FBNUIsQ0FGVztJQUdsQkMsRUFBRSxFQUFFLFlBQUFDLElBQUksRUFBSTtNQUNWQyxPQUFPLENBQUNDLEtBQVIsc0RBQ2dERixJQURoRCxZQUVFSCxLQUZGO0lBSUQ7RUFSaUIsQ0FBRCxDQUFuQjtFQVdBLHVDQUNLQSxLQUFLLENBQUNNLElBRFgsNkRBRUdWLFVBRkgsRUFFZ0JELGdCQUFnQixDQUFDSyxLQUFLLENBQUNPLEtBQVAsQ0FGaEMsbUNBR0dWLFdBSEgsRUFHaUJGLGdCQUFnQixDQUFDSyxLQUFLLENBQUNRLE1BQVAsQ0FIakMsbUNBSUdWLFVBSkgsRUFJZ0JILGdCQUFnQixDQUFDSyxLQUFLLENBQUNTLEtBQVAsQ0FKaEM7QUFNRCxDQWxCRDs7QUFvQkEsZUFBZVYsb0JBQWYifQ==