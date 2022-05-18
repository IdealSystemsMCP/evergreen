"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = extractStyles;

var _react = _interopRequireDefault(require("react"));

var _uiBox = require("ui-box");

var _server = require("glamor/server");

function extractStyles() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _boxExtractStyles = (0, _uiBox.extractStyles)(),
      styles = _boxExtractStyles.styles,
      cache = _boxExtractStyles.cache;

  var _renderStatic = (0, _server.renderStatic)(function () {
    return 'let glamor believe there is some html here';
  }),
      ids = _renderStatic.ids,
      css = _renderStatic.css;

  var evergreenCache = {
    uiBoxCache: cache,
    glamorIds: ids
  };
  var scriptProps = {
    type: 'application/json',
    id: 'evergreen-hydrate',
    dangerouslySetInnerHTML: {
      __html: JSON.stringify(evergreenCache)
    }
  };

  if (options.nonce) {
    scriptProps.nonce = options.nonce;
  }

  return {
    css: styles + '\n' + css,
    cache: evergreenCache,
    hydrationScript: /*#__PURE__*/_react["default"].createElement("script", scriptProps)
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJleHRyYWN0U3R5bGVzIiwib3B0aW9ucyIsImJveEV4dHJhY3RTdHlsZXMiLCJzdHlsZXMiLCJjYWNoZSIsInJlbmRlclN0YXRpYyIsImlkcyIsImNzcyIsImV2ZXJncmVlbkNhY2hlIiwidWlCb3hDYWNoZSIsImdsYW1vcklkcyIsInNjcmlwdFByb3BzIiwidHlwZSIsImlkIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJKU09OIiwic3RyaW5naWZ5Iiwibm9uY2UiLCJoeWRyYXRpb25TY3JpcHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc3NyL3NyYy9leHRyYWN0U3R5bGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGV4dHJhY3RTdHlsZXMgYXMgYm94RXh0cmFjdFN0eWxlcyB9IGZyb20gJ3VpLWJveCdcbmltcG9ydCB7IHJlbmRlclN0YXRpYyB9IGZyb20gJ2dsYW1vci9zZXJ2ZXInXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV4dHJhY3RTdHlsZXMob3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IHsgc3R5bGVzLCBjYWNoZSB9ID0gYm94RXh0cmFjdFN0eWxlcygpXG4gIGNvbnN0IHsgaWRzLCBjc3MgfSA9IHJlbmRlclN0YXRpYyhcbiAgICAoKSA9PiAnbGV0IGdsYW1vciBiZWxpZXZlIHRoZXJlIGlzIHNvbWUgaHRtbCBoZXJlJ1xuICApXG5cbiAgY29uc3QgZXZlcmdyZWVuQ2FjaGUgPSB7XG4gICAgdWlCb3hDYWNoZTogY2FjaGUsXG4gICAgZ2xhbW9ySWRzOiBpZHNcbiAgfVxuXG4gIGNvbnN0IHNjcmlwdFByb3BzID0ge1xuICAgIHR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICBpZDogJ2V2ZXJncmVlbi1oeWRyYXRlJyxcbiAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDogeyBfX2h0bWw6IEpTT04uc3RyaW5naWZ5KGV2ZXJncmVlbkNhY2hlKSB9XG4gIH1cblxuICBpZiAob3B0aW9ucy5ub25jZSkge1xuICAgIHNjcmlwdFByb3BzLm5vbmNlID0gb3B0aW9ucy5ub25jZVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjc3M6IHN0eWxlcyArICdcXG4nICsgY3NzLFxuICAgIGNhY2hlOiBldmVyZ3JlZW5DYWNoZSxcbiAgICBoeWRyYXRpb25TY3JpcHQ6IDxzY3JpcHQgey4uLnNjcmlwdFByb3BzfSAvPlxuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVlLFNBQVNBLGFBQVQsR0FBcUM7RUFBQSxJQUFkQyxPQUFjLHVFQUFKLEVBQUk7O0VBQ2xELHdCQUEwQixJQUFBQyxvQkFBQSxHQUExQjtFQUFBLElBQVFDLE1BQVIscUJBQVFBLE1BQVI7RUFBQSxJQUFnQkMsS0FBaEIscUJBQWdCQSxLQUFoQjs7RUFDQSxvQkFBcUIsSUFBQUMsb0JBQUEsRUFDbkI7SUFBQSxPQUFNLDRDQUFOO0VBQUEsQ0FEbUIsQ0FBckI7RUFBQSxJQUFRQyxHQUFSLGlCQUFRQSxHQUFSO0VBQUEsSUFBYUMsR0FBYixpQkFBYUEsR0FBYjs7RUFJQSxJQUFNQyxjQUFjLEdBQUc7SUFDckJDLFVBQVUsRUFBRUwsS0FEUztJQUVyQk0sU0FBUyxFQUFFSjtFQUZVLENBQXZCO0VBS0EsSUFBTUssV0FBVyxHQUFHO0lBQ2xCQyxJQUFJLEVBQUUsa0JBRFk7SUFFbEJDLEVBQUUsRUFBRSxtQkFGYztJQUdsQkMsdUJBQXVCLEVBQUU7TUFBRUMsTUFBTSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVQsY0FBZjtJQUFWO0VBSFAsQ0FBcEI7O0VBTUEsSUFBSVAsT0FBTyxDQUFDaUIsS0FBWixFQUFtQjtJQUNqQlAsV0FBVyxDQUFDTyxLQUFaLEdBQW9CakIsT0FBTyxDQUFDaUIsS0FBNUI7RUFDRDs7RUFFRCxPQUFPO0lBQ0xYLEdBQUcsRUFBRUosTUFBTSxHQUFHLElBQVQsR0FBZ0JJLEdBRGhCO0lBRUxILEtBQUssRUFBRUksY0FGRjtJQUdMVyxlQUFlLGVBQUUsMENBQVlSLFdBQVo7RUFIWixDQUFQO0FBS0QifQ==