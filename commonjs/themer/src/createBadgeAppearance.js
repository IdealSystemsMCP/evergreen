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
  (0, _missingStateWarning["default"])({
    items: items,
    props: ['base', 'hover'],
    cb: function cb(prop) {
      console.error("Themer.createBadgeAppearance() is missing a ".concat(prop, " item"), items);
    }
  });
  return _objectSpread(_objectSpread(_objectSpread({}, baseStyle), (0, _createAppearance["default"])(items.base)), {}, (0, _defineProperty2["default"])({}, hoverState, (0, _createAppearance["default"])(items.hover)));
};

var _default = createBadgeAppearance;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJob3ZlclN0YXRlIiwiYmFzZVN0eWxlIiwiY3Vyc29yIiwiY3JlYXRlQmFkZ2VBcHBlYXJhbmNlIiwiaXRlbXMiLCJtaXNzaW5nU3RhdGVXYXJuaW5nIiwicHJvcHMiLCJjYiIsInByb3AiLCJjb25zb2xlIiwiZXJyb3IiLCJjcmVhdGVBcHBlYXJhbmNlIiwiYmFzZSIsImhvdmVyIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3RoZW1lci9zcmMvY3JlYXRlQmFkZ2VBcHBlYXJhbmNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVBcHBlYXJhbmNlIGZyb20gJy4vY3JlYXRlQXBwZWFyYW5jZSdcbmltcG9ydCBtaXNzaW5nU3RhdGVXYXJuaW5nIGZyb20gJy4vbWlzc2luZ1N0YXRlV2FybmluZydcblxuY29uc3QgaG92ZXJTdGF0ZSA9ICcmOmhvdmVyJ1xuXG5jb25zdCBiYXNlU3R5bGUgPSB7XG4gIGN1cnNvcjogJ3BvaW50ZXInXG59XG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IGl0ZW1zIC0gb2JqZWN0IHdpdGggYSBzZXQgb2Ygc3RhdGVzLlxuICogQHJldHVybiB7b2JqZWN0fSB0aGUgZmluYWwgYXBwZWFyYW5jZS5cbiAqL1xuY29uc3QgY3JlYXRlQmFkZ2VBcHBlYXJhbmNlID0gKGl0ZW1zID0ge30pID0+IHtcbiAgbWlzc2luZ1N0YXRlV2FybmluZyh7XG4gICAgaXRlbXMsXG4gICAgcHJvcHM6IFsnYmFzZScsICdob3ZlciddLFxuICAgIGNiOiBwcm9wID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgIGBUaGVtZXIuY3JlYXRlQmFkZ2VBcHBlYXJhbmNlKCkgaXMgbWlzc2luZyBhICR7cHJvcH0gaXRlbWAsXG4gICAgICAgIGl0ZW1zXG4gICAgICApXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgLi4uYmFzZVN0eWxlLFxuICAgIC4uLmNyZWF0ZUFwcGVhcmFuY2UoaXRlbXMuYmFzZSksXG4gICAgW2hvdmVyU3RhdGVdOiBjcmVhdGVBcHBlYXJhbmNlKGl0ZW1zLmhvdmVyKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUJhZGdlQXBwZWFyYW5jZVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBbkI7QUFFQSxJQUFNQyxTQUFTLEdBQUc7RUFDaEJDLE1BQU0sRUFBRTtBQURRLENBQWxCO0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUMscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixHQUFnQjtFQUFBLElBQWZDLEtBQWUsdUVBQVAsRUFBTztFQUM1QyxJQUFBQywrQkFBQSxFQUFvQjtJQUNsQkQsS0FBSyxFQUFMQSxLQURrQjtJQUVsQkUsS0FBSyxFQUFFLENBQUMsTUFBRCxFQUFTLE9BQVQsQ0FGVztJQUdsQkMsRUFBRSxFQUFFLFlBQUFDLElBQUksRUFBSTtNQUNWQyxPQUFPLENBQUNDLEtBQVIsdURBQ2lERixJQURqRCxZQUVFSixLQUZGO0lBSUQ7RUFSaUIsQ0FBcEI7RUFXQSxxREFDS0gsU0FETCxHQUVLLElBQUFVLDRCQUFBLEVBQWlCUCxLQUFLLENBQUNRLElBQXZCLENBRkwsNENBR0daLFVBSEgsRUFHZ0IsSUFBQVcsNEJBQUEsRUFBaUJQLEtBQUssQ0FBQ1MsS0FBdkIsQ0FIaEI7QUFLRCxDQWpCRDs7ZUFtQmVWLHFCIn0=