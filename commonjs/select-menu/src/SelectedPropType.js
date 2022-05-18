"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

/**
 * Selected can either be a string (single values)
 * or an array of string (multiple values)
 * NOTE: multiple values are not supported atm
 */
var SelectedPropType = _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]);

var _default = SelectedPropType;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJTZWxlY3RlZFByb3BUeXBlIiwiUHJvcFR5cGVzIiwib25lT2ZUeXBlIiwic3RyaW5nIiwiYXJyYXlPZiJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZWxlY3QtbWVudS9zcmMvU2VsZWN0ZWRQcm9wVHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbi8qKlxuICogU2VsZWN0ZWQgY2FuIGVpdGhlciBiZSBhIHN0cmluZyAoc2luZ2xlIHZhbHVlcylcbiAqIG9yIGFuIGFycmF5IG9mIHN0cmluZyAobXVsdGlwbGUgdmFsdWVzKVxuICogTk9URTogbXVsdGlwbGUgdmFsdWVzIGFyZSBub3Qgc3VwcG9ydGVkIGF0bVxuICovXG5jb25zdCBTZWxlY3RlZFByb3BUeXBlID0gUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gIFByb3BUeXBlcy5zdHJpbmcsXG4gIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpXG5dKVxuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RlZFByb3BUeXBlXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxnQkFBZ0IsR0FBR0MscUJBQUEsQ0FBVUMsU0FBVixDQUFvQixDQUMzQ0QscUJBQUEsQ0FBVUUsTUFEaUMsRUFFM0NGLHFCQUFBLENBQVVHLE9BQVYsQ0FBa0JILHFCQUFBLENBQVVFLE1BQTVCLENBRjJDLENBQXBCLENBQXpCOztlQUtlSCxnQiJ9