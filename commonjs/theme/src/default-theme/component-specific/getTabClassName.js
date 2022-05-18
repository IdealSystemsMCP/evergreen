"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _themer = require("../../../../themer");

var _memoizeClassName = _interopRequireDefault(require("../utils/memoizeClassName"));

var _scales = _interopRequireDefault(require("../foundational-styles/scales"));

var _shared = require("../shared");

/**
 * Disabled styles are all the same.
 */
var disabled = _shared.defaultControlStyles.disabled;

var defaultAppearance = _themer.Themer.createTabAppearance({
  base: {},
  hover: {
    backgroundColor: _scales["default"].neutral.N2A
  },
  focus: {
    boxShadow: "0 0 0 2px ".concat(_scales["default"].blue.B5A)
  },
  active: {
    backgroundColor: _scales["default"].blue.B3A,
    color: _scales["default"].blue.B9
  },
  disabled: disabled,
  current: {}
});
/**
 * Get the appearance of a `Tab`.
 * @param {string} appearance
 * @return {string} the appearance object.
 */


var getTabAppearance = function getTabAppearance() {
  return defaultAppearance;
};
/**
 * Get the className of a `Tab`.
 * @param {string} appearance
 * @return {string} the appearance class name.
 */


var _default = (0, _memoizeClassName["default"])(getTabAppearance);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJkaXNhYmxlZCIsImRlZmF1bHRDb250cm9sU3R5bGVzIiwiZGVmYXVsdEFwcGVhcmFuY2UiLCJUaGVtZXIiLCJjcmVhdGVUYWJBcHBlYXJhbmNlIiwiYmFzZSIsImhvdmVyIiwiYmFja2dyb3VuZENvbG9yIiwic2NhbGVzIiwibmV1dHJhbCIsIk4yQSIsImZvY3VzIiwiYm94U2hhZG93IiwiYmx1ZSIsIkI1QSIsImFjdGl2ZSIsIkIzQSIsImNvbG9yIiwiQjkiLCJjdXJyZW50IiwiZ2V0VGFiQXBwZWFyYW5jZSIsIm1lbW9pemVDbGFzc05hbWUiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvdGhlbWUvc3JjL2RlZmF1bHQtdGhlbWUvY29tcG9uZW50LXNwZWNpZmljL2dldFRhYkNsYXNzTmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaGVtZXIgfSBmcm9tICcuLi8uLi8uLi8uLi90aGVtZXInXG5pbXBvcnQgbWVtb2l6ZUNsYXNzTmFtZSBmcm9tICcuLi91dGlscy9tZW1vaXplQ2xhc3NOYW1lJ1xuaW1wb3J0IHNjYWxlcyBmcm9tICcuLi9mb3VuZGF0aW9uYWwtc3R5bGVzL3NjYWxlcydcbmltcG9ydCB7IGRlZmF1bHRDb250cm9sU3R5bGVzIH0gZnJvbSAnLi4vc2hhcmVkJ1xuXG4vKipcbiAqIERpc2FibGVkIHN0eWxlcyBhcmUgYWxsIHRoZSBzYW1lLlxuICovXG5jb25zdCB7IGRpc2FibGVkIH0gPSBkZWZhdWx0Q29udHJvbFN0eWxlc1xuXG5jb25zdCBkZWZhdWx0QXBwZWFyYW5jZSA9IFRoZW1lci5jcmVhdGVUYWJBcHBlYXJhbmNlKHtcbiAgYmFzZToge30sXG4gIGhvdmVyOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBzY2FsZXMubmV1dHJhbC5OMkFcbiAgfSxcbiAgZm9jdXM6IHtcbiAgICBib3hTaGFkb3c6IGAwIDAgMCAycHggJHtzY2FsZXMuYmx1ZS5CNUF9YFxuICB9LFxuICBhY3RpdmU6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHNjYWxlcy5ibHVlLkIzQSxcbiAgICBjb2xvcjogc2NhbGVzLmJsdWUuQjlcbiAgfSxcbiAgZGlzYWJsZWQsXG4gIGN1cnJlbnQ6IHt9XG59KVxuXG4vKipcbiAqIEdldCB0aGUgYXBwZWFyYW5jZSBvZiBhIGBUYWJgLlxuICogQHBhcmFtIHtzdHJpbmd9IGFwcGVhcmFuY2VcbiAqIEByZXR1cm4ge3N0cmluZ30gdGhlIGFwcGVhcmFuY2Ugb2JqZWN0LlxuICovXG5jb25zdCBnZXRUYWJBcHBlYXJhbmNlID0gKCkgPT4ge1xuICByZXR1cm4gZGVmYXVsdEFwcGVhcmFuY2Vcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGNsYXNzTmFtZSBvZiBhIGBUYWJgLlxuICogQHBhcmFtIHtzdHJpbmd9IGFwcGVhcmFuY2VcbiAqIEByZXR1cm4ge3N0cmluZ30gdGhlIGFwcGVhcmFuY2UgY2xhc3MgbmFtZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgbWVtb2l6ZUNsYXNzTmFtZShnZXRUYWJBcHBlYXJhbmNlKVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFRQSxRQUFSLEdBQXFCQyw0QkFBckIsQ0FBUUQsUUFBUjs7QUFFQSxJQUFNRSxpQkFBaUIsR0FBR0MsY0FBQSxDQUFPQyxtQkFBUCxDQUEyQjtFQUNuREMsSUFBSSxFQUFFLEVBRDZDO0VBRW5EQyxLQUFLLEVBQUU7SUFDTEMsZUFBZSxFQUFFQyxrQkFBQSxDQUFPQyxPQUFQLENBQWVDO0VBRDNCLENBRjRDO0VBS25EQyxLQUFLLEVBQUU7SUFDTEMsU0FBUyxzQkFBZUosa0JBQUEsQ0FBT0ssSUFBUCxDQUFZQyxHQUEzQjtFQURKLENBTDRDO0VBUW5EQyxNQUFNLEVBQUU7SUFDTlIsZUFBZSxFQUFFQyxrQkFBQSxDQUFPSyxJQUFQLENBQVlHLEdBRHZCO0lBRU5DLEtBQUssRUFBRVQsa0JBQUEsQ0FBT0ssSUFBUCxDQUFZSztFQUZiLENBUjJDO0VBWW5EbEIsUUFBUSxFQUFSQSxRQVptRDtFQWFuRG1CLE9BQU8sRUFBRTtBQWIwQyxDQUEzQixDQUExQjtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU07RUFDN0IsT0FBT2xCLGlCQUFQO0FBQ0QsQ0FGRDtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztlQUNlLElBQUFtQiw0QkFBQSxFQUFpQkQsZ0JBQWpCLEMifQ==