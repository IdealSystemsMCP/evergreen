"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _themer = require("../../../../themer");

var _memoizeClassName = _interopRequireDefault(require("../utils/memoizeClassName"));

var _scales = _interopRequireDefault(require("../foundational-styles/scales"));

var Appearances = {};
Appearances["default"] = _themer.Themer.createTableCellAppearance({
  focus: {
    outline: 'none',
    backgroundColor: _scales["default"].blue.B2A,
    boxShadow: "inset 0 0 0 1px ".concat(_scales["default"].blue.B7A)
  }
});
/**
 * Get the appearance of a `TableCell`.
 * @param {string} appearance
 * @return {string} the appearance object.
 */

var getAppearance = function getAppearance() {
  return Appearances["default"];
};
/**
 * Get the className of a `Table.EditableCell`.
 * @param {string} appearance
 * @return {string} the appearance class name.
 */


var _default = (0, _memoizeClassName["default"])(getAppearance);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJBcHBlYXJhbmNlcyIsIlRoZW1lciIsImNyZWF0ZVRhYmxlQ2VsbEFwcGVhcmFuY2UiLCJmb2N1cyIsIm91dGxpbmUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzY2FsZXMiLCJibHVlIiwiQjJBIiwiYm94U2hhZG93IiwiQjdBIiwiZ2V0QXBwZWFyYW5jZSIsIm1lbW9pemVDbGFzc05hbWUiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvdGhlbWUvc3JjL2RlZmF1bHQtdGhlbWUvY29tcG9uZW50LXNwZWNpZmljL2dldFRhYmxlQ2VsbENsYXNzTmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaGVtZXIgfSBmcm9tICcuLi8uLi8uLi8uLi90aGVtZXInXG5pbXBvcnQgbWVtb2l6ZUNsYXNzTmFtZSBmcm9tICcuLi91dGlscy9tZW1vaXplQ2xhc3NOYW1lJ1xuaW1wb3J0IHNjYWxlcyBmcm9tICcuLi9mb3VuZGF0aW9uYWwtc3R5bGVzL3NjYWxlcydcblxuY29uc3QgQXBwZWFyYW5jZXMgPSB7fVxuXG5BcHBlYXJhbmNlcy5kZWZhdWx0ID0gVGhlbWVyLmNyZWF0ZVRhYmxlQ2VsbEFwcGVhcmFuY2Uoe1xuICBmb2N1czoge1xuICAgIG91dGxpbmU6ICdub25lJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHNjYWxlcy5ibHVlLkIyQSxcbiAgICBib3hTaGFkb3c6IGBpbnNldCAwIDAgMCAxcHggJHtzY2FsZXMuYmx1ZS5CN0F9YFxuICB9XG59KVxuXG4vKipcbiAqIEdldCB0aGUgYXBwZWFyYW5jZSBvZiBhIGBUYWJsZUNlbGxgLlxuICogQHBhcmFtIHtzdHJpbmd9IGFwcGVhcmFuY2VcbiAqIEByZXR1cm4ge3N0cmluZ30gdGhlIGFwcGVhcmFuY2Ugb2JqZWN0LlxuICovXG5jb25zdCBnZXRBcHBlYXJhbmNlID0gKCkgPT4ge1xuICByZXR1cm4gQXBwZWFyYW5jZXMuZGVmYXVsdFxufVxuXG4vKipcbiAqIEdldCB0aGUgY2xhc3NOYW1lIG9mIGEgYFRhYmxlLkVkaXRhYmxlQ2VsbGAuXG4gKiBAcGFyYW0ge3N0cmluZ30gYXBwZWFyYW5jZVxuICogQHJldHVybiB7c3RyaW5nfSB0aGUgYXBwZWFyYW5jZSBjbGFzcyBuYW1lLlxuICovXG5leHBvcnQgZGVmYXVsdCBtZW1vaXplQ2xhc3NOYW1lKGdldEFwcGVhcmFuY2UpXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxFQUFwQjtBQUVBQSxXQUFXLFdBQVgsR0FBc0JDLGNBQUEsQ0FBT0MseUJBQVAsQ0FBaUM7RUFDckRDLEtBQUssRUFBRTtJQUNMQyxPQUFPLEVBQUUsTUFESjtJQUVMQyxlQUFlLEVBQUVDLGtCQUFBLENBQU9DLElBQVAsQ0FBWUMsR0FGeEI7SUFHTEMsU0FBUyw0QkFBcUJILGtCQUFBLENBQU9DLElBQVAsQ0FBWUcsR0FBakM7RUFISjtBQUQ4QyxDQUFqQyxDQUF0QjtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0VBQzFCLE9BQU9YLFdBQVcsV0FBbEI7QUFDRCxDQUZEO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O2VBQ2UsSUFBQVksNEJBQUEsRUFBaUJELGFBQWpCLEMifQ==