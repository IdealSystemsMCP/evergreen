import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import createAppearance from './createAppearance';
import missingStateWarning from './missingStateWarning';
var hoverState = '&:hover';
var baseStyle = {
  cursor: 'pointer'
};
/**
 * @param {object} items - object with a set of states.
 * @return {object} the final appearance.
 */

var createBadgeAppearance = function createBadgeAppearance() {
  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  missingStateWarning({
    items: items,
    props: ['base', 'hover'],
    cb: function cb(prop) {
      console.error("Themer.createBadgeAppearance() is missing a ".concat(prop, " item"), items);
    }
  });
  return _objectSpread(_objectSpread(_objectSpread({}, baseStyle), createAppearance(items.base)), {}, _defineProperty({}, hoverState, createAppearance(items.hover)));
};

export default createBadgeAppearance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjcmVhdGVBcHBlYXJhbmNlIiwibWlzc2luZ1N0YXRlV2FybmluZyIsImhvdmVyU3RhdGUiLCJiYXNlU3R5bGUiLCJjdXJzb3IiLCJjcmVhdGVCYWRnZUFwcGVhcmFuY2UiLCJpdGVtcyIsInByb3BzIiwiY2IiLCJwcm9wIiwiY29uc29sZSIsImVycm9yIiwiYmFzZSIsImhvdmVyIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3RoZW1lci9zcmMvY3JlYXRlQmFkZ2VBcHBlYXJhbmNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVBcHBlYXJhbmNlIGZyb20gJy4vY3JlYXRlQXBwZWFyYW5jZSdcbmltcG9ydCBtaXNzaW5nU3RhdGVXYXJuaW5nIGZyb20gJy4vbWlzc2luZ1N0YXRlV2FybmluZydcblxuY29uc3QgaG92ZXJTdGF0ZSA9ICcmOmhvdmVyJ1xuXG5jb25zdCBiYXNlU3R5bGUgPSB7XG4gIGN1cnNvcjogJ3BvaW50ZXInXG59XG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IGl0ZW1zIC0gb2JqZWN0IHdpdGggYSBzZXQgb2Ygc3RhdGVzLlxuICogQHJldHVybiB7b2JqZWN0fSB0aGUgZmluYWwgYXBwZWFyYW5jZS5cbiAqL1xuY29uc3QgY3JlYXRlQmFkZ2VBcHBlYXJhbmNlID0gKGl0ZW1zID0ge30pID0+IHtcbiAgbWlzc2luZ1N0YXRlV2FybmluZyh7XG4gICAgaXRlbXMsXG4gICAgcHJvcHM6IFsnYmFzZScsICdob3ZlciddLFxuICAgIGNiOiBwcm9wID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgIGBUaGVtZXIuY3JlYXRlQmFkZ2VBcHBlYXJhbmNlKCkgaXMgbWlzc2luZyBhICR7cHJvcH0gaXRlbWAsXG4gICAgICAgIGl0ZW1zXG4gICAgICApXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgLi4uYmFzZVN0eWxlLFxuICAgIC4uLmNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuYmFzZSksXG4gICAgW2hvdmVyU3RhdGVdOiBjcmVhdGVBcHBlYXJhbmNlKGl0ZW1zLmhvdmVyKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUJhZGdlQXBwZWFyYW5jZVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPQSxnQkFBUCxNQUE2QixvQkFBN0I7QUFDQSxPQUFPQyxtQkFBUCxNQUFnQyx1QkFBaEM7QUFFQSxJQUFNQyxVQUFVLEdBQUcsU0FBbkI7QUFFQSxJQUFNQyxTQUFTLEdBQUc7RUFDaEJDLE1BQU0sRUFBRTtBQURRLENBQWxCO0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUMscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixHQUFnQjtFQUFBLElBQWZDLEtBQWUsdUVBQVAsRUFBTztFQUM1Q0wsbUJBQW1CLENBQUM7SUFDbEJLLEtBQUssRUFBTEEsS0FEa0I7SUFFbEJDLEtBQUssRUFBRSxDQUFDLE1BQUQsRUFBUyxPQUFULENBRlc7SUFHbEJDLEVBQUUsRUFBRSxZQUFBQyxJQUFJLEVBQUk7TUFDVkMsT0FBTyxDQUFDQyxLQUFSLHVEQUNpREYsSUFEakQsWUFFRUgsS0FGRjtJQUlEO0VBUmlCLENBQUQsQ0FBbkI7RUFXQSxxREFDS0gsU0FETCxHQUVLSCxnQkFBZ0IsQ0FBQ00sS0FBSyxDQUFDTSxJQUFQLENBRnJCLDJCQUdHVixVQUhILEVBR2dCRixnQkFBZ0IsQ0FBQ00sS0FBSyxDQUFDTyxLQUFQLENBSGhDO0FBS0QsQ0FqQkQ7O0FBbUJBLGVBQWVSLHFCQUFmIn0=