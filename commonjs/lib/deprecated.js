"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _warning = _interopRequireDefault(require("./warning"));

var _default = function _default(propType, explanation) {
  return function (props, propName, componentName) {
    if (process.env.NODE_ENV !== 'production') {
      (0, _warning["default"])(propName in props, "\"".concat(propName, "\" property of \"").concat(componentName, "\" has been deprecated.\n").concat(explanation));
    }

    for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      rest[_key - 3] = arguments[_key];
    }

    return propType.apply(void 0, [props, propName, componentName].concat(rest));
  };
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJwcm9wVHlwZSIsImV4cGxhbmF0aW9uIiwicHJvcHMiLCJwcm9wTmFtZSIsImNvbXBvbmVudE5hbWUiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJ3YXJuaW5nIiwicmVzdCJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvZGVwcmVjYXRlZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2FybmluZyBmcm9tICcuL3dhcm5pbmcnXG5cbmV4cG9ydCBkZWZhdWx0IChwcm9wVHlwZSwgZXhwbGFuYXRpb24pID0+IHtcbiAgcmV0dXJuIChwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIC4uLnJlc3QpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgd2FybmluZyhcbiAgICAgICAgcHJvcE5hbWUgaW4gcHJvcHMsXG4gICAgICAgIGBcIiR7cHJvcE5hbWV9XCIgcHJvcGVydHkgb2YgXCIke2NvbXBvbmVudE5hbWV9XCIgaGFzIGJlZW4gZGVwcmVjYXRlZC5cXG4ke2V4cGxhbmF0aW9ufWBcbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcFR5cGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCAuLi5yZXN0KVxuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztlQUVlLGtCQUFDQSxRQUFELEVBQVdDLFdBQVgsRUFBMkI7RUFDeEMsT0FBTyxVQUFDQyxLQUFELEVBQVFDLFFBQVIsRUFBa0JDLGFBQWxCLEVBQTZDO0lBQ2xELElBQUlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxRQUFaLEtBQXlCLFlBQTdCLEVBQTJDO01BQ3pDLElBQUFDLG1CQUFBLEVBQ0VMLFFBQVEsSUFBSUQsS0FEZCxjQUVNQyxRQUZOLDhCQUVnQ0MsYUFGaEMsc0NBRXdFSCxXQUZ4RTtJQUlEOztJQU5pRCxrQ0FBVFEsSUFBUztNQUFUQSxJQUFTO0lBQUE7O0lBUWxELE9BQU9ULFFBQVEsTUFBUixVQUFTRSxLQUFULEVBQWdCQyxRQUFoQixFQUEwQkMsYUFBMUIsU0FBNENLLElBQTVDLEVBQVA7RUFDRCxDQVREO0FBVUQsQyJ9