"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _themer = require("../../../../themer");

var _memoizeClassName = _interopRequireDefault(require("../utils/memoizeClassName"));

var _scales = _interopRequireDefault(require("../foundational-styles/scales"));

var defaultAppearance = _themer.Themer.createSwitchAppearance({
  base: {
    transition: 'all 120ms ease-in-out',
    cursor: 'pointer',
    color: 'white',
    backgroundColor: _scales["default"].neutral.N5A,
    borderRadius: 9999
  },
  disabled: {
    opacity: 0.5,
    backgroundImage: 'none'
  },
  hover: {
    backgroundColor: _scales["default"].neutral.N5A
  },
  active: {
    backgroundColor: _scales["default"].neutral.N6A
  },
  focus: {
    boxShadow: "0 0 0 3px ".concat(_scales["default"].blue.B6A)
  },
  checked: {
    backgroundColor: _scales["default"].blue.B8,
    color: 'white'
  },
  checkedHover: {
    backgroundColor: _scales["default"].blue.B8,
    color: 'white'
  },
  checkedActive: {
    backgroundColor: _scales["default"].blue.B9,
    color: 'white'
  },
  checkedDisabled: {}
});
/**
 * Get the className of a `Switch`.
 * @param {string} appearance
 * @return {Object} the appearance object.
 */


var getSwitchAppearance = function getSwitchAppearance() {
  return defaultAppearance;
};
/**
 * Get the className of a `Switch`.
 * @param {string} appearance
 * @return {string} the appearance class name.
 */


var _default = (0, _memoizeClassName["default"])(getSwitchAppearance);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJkZWZhdWx0QXBwZWFyYW5jZSIsIlRoZW1lciIsImNyZWF0ZVN3aXRjaEFwcGVhcmFuY2UiLCJiYXNlIiwidHJhbnNpdGlvbiIsImN1cnNvciIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwic2NhbGVzIiwibmV1dHJhbCIsIk41QSIsImJvcmRlclJhZGl1cyIsImRpc2FibGVkIiwib3BhY2l0eSIsImJhY2tncm91bmRJbWFnZSIsImhvdmVyIiwiYWN0aXZlIiwiTjZBIiwiZm9jdXMiLCJib3hTaGFkb3ciLCJibHVlIiwiQjZBIiwiY2hlY2tlZCIsIkI4IiwiY2hlY2tlZEhvdmVyIiwiY2hlY2tlZEFjdGl2ZSIsIkI5IiwiY2hlY2tlZERpc2FibGVkIiwiZ2V0U3dpdGNoQXBwZWFyYW5jZSIsIm1lbW9pemVDbGFzc05hbWUiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvdGhlbWUvc3JjL2RlZmF1bHQtdGhlbWUvY29tcG9uZW50LXNwZWNpZmljL2dldFN3aXRjaENsYXNzTmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaGVtZXIgfSBmcm9tICcuLi8uLi8uLi8uLi90aGVtZXInXG5pbXBvcnQgbWVtb2l6ZUNsYXNzTmFtZSBmcm9tICcuLi91dGlscy9tZW1vaXplQ2xhc3NOYW1lJ1xuaW1wb3J0IHNjYWxlcyBmcm9tICcuLi9mb3VuZGF0aW9uYWwtc3R5bGVzL3NjYWxlcydcblxuY29uc3QgZGVmYXVsdEFwcGVhcmFuY2UgPSBUaGVtZXIuY3JlYXRlU3dpdGNoQXBwZWFyYW5jZSh7XG4gIGJhc2U6IHtcbiAgICB0cmFuc2l0aW9uOiAnYWxsIDEyMG1zIGVhc2UtaW4tb3V0JyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHNjYWxlcy5uZXV0cmFsLk41QSxcbiAgICBib3JkZXJSYWRpdXM6IDk5OTlcbiAgfSxcbiAgZGlzYWJsZWQ6IHtcbiAgICBvcGFjaXR5OiAwLjUsXG4gICAgYmFja2dyb3VuZEltYWdlOiAnbm9uZSdcbiAgfSxcbiAgaG92ZXI6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHNjYWxlcy5uZXV0cmFsLk41QVxuICB9LFxuICBhY3RpdmU6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHNjYWxlcy5uZXV0cmFsLk42QVxuICB9LFxuICBmb2N1czoge1xuICAgIGJveFNoYWRvdzogYDAgMCAwIDNweCAke3NjYWxlcy5ibHVlLkI2QX1gXG4gIH0sXG4gIGNoZWNrZWQ6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHNjYWxlcy5ibHVlLkI4LFxuICAgIGNvbG9yOiAnd2hpdGUnXG4gIH0sXG4gIGNoZWNrZWRIb3Zlcjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogc2NhbGVzLmJsdWUuQjgsXG4gICAgY29sb3I6ICd3aGl0ZSdcbiAgfSxcbiAgY2hlY2tlZEFjdGl2ZToge1xuICAgIGJhY2tncm91bmRDb2xvcjogc2NhbGVzLmJsdWUuQjksXG4gICAgY29sb3I6ICd3aGl0ZSdcbiAgfSxcbiAgY2hlY2tlZERpc2FibGVkOiB7fVxufSlcblxuLyoqXG4gKiBHZXQgdGhlIGNsYXNzTmFtZSBvZiBhIGBTd2l0Y2hgLlxuICogQHBhcmFtIHtzdHJpbmd9IGFwcGVhcmFuY2VcbiAqIEByZXR1cm4ge09iamVjdH0gdGhlIGFwcGVhcmFuY2Ugb2JqZWN0LlxuICovXG5jb25zdCBnZXRTd2l0Y2hBcHBlYXJhbmNlID0gKCkgPT4ge1xuICByZXR1cm4gZGVmYXVsdEFwcGVhcmFuY2Vcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGNsYXNzTmFtZSBvZiBhIGBTd2l0Y2hgLlxuICogQHBhcmFtIHtzdHJpbmd9IGFwcGVhcmFuY2VcbiAqIEByZXR1cm4ge3N0cmluZ30gdGhlIGFwcGVhcmFuY2UgY2xhc3MgbmFtZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgbWVtb2l6ZUNsYXNzTmFtZShnZXRTd2l0Y2hBcHBlYXJhbmNlKVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQSxJQUFNQSxpQkFBaUIsR0FBR0MsY0FBQSxDQUFPQyxzQkFBUCxDQUE4QjtFQUN0REMsSUFBSSxFQUFFO0lBQ0pDLFVBQVUsRUFBRSx1QkFEUjtJQUVKQyxNQUFNLEVBQUUsU0FGSjtJQUdKQyxLQUFLLEVBQUUsT0FISDtJQUlKQyxlQUFlLEVBQUVDLGtCQUFBLENBQU9DLE9BQVAsQ0FBZUMsR0FKNUI7SUFLSkMsWUFBWSxFQUFFO0VBTFYsQ0FEZ0Q7RUFRdERDLFFBQVEsRUFBRTtJQUNSQyxPQUFPLEVBQUUsR0FERDtJQUVSQyxlQUFlLEVBQUU7RUFGVCxDQVI0QztFQVl0REMsS0FBSyxFQUFFO0lBQ0xSLGVBQWUsRUFBRUMsa0JBQUEsQ0FBT0MsT0FBUCxDQUFlQztFQUQzQixDQVorQztFQWV0RE0sTUFBTSxFQUFFO0lBQ05ULGVBQWUsRUFBRUMsa0JBQUEsQ0FBT0MsT0FBUCxDQUFlUTtFQUQxQixDQWY4QztFQWtCdERDLEtBQUssRUFBRTtJQUNMQyxTQUFTLHNCQUFlWCxrQkFBQSxDQUFPWSxJQUFQLENBQVlDLEdBQTNCO0VBREosQ0FsQitDO0VBcUJ0REMsT0FBTyxFQUFFO0lBQ1BmLGVBQWUsRUFBRUMsa0JBQUEsQ0FBT1ksSUFBUCxDQUFZRyxFQUR0QjtJQUVQakIsS0FBSyxFQUFFO0VBRkEsQ0FyQjZDO0VBeUJ0RGtCLFlBQVksRUFBRTtJQUNaakIsZUFBZSxFQUFFQyxrQkFBQSxDQUFPWSxJQUFQLENBQVlHLEVBRGpCO0lBRVpqQixLQUFLLEVBQUU7RUFGSyxDQXpCd0M7RUE2QnREbUIsYUFBYSxFQUFFO0lBQ2JsQixlQUFlLEVBQUVDLGtCQUFBLENBQU9ZLElBQVAsQ0FBWU0sRUFEaEI7SUFFYnBCLEtBQUssRUFBRTtFQUZNLENBN0J1QztFQWlDdERxQixlQUFlLEVBQUU7QUFqQ3FDLENBQTlCLENBQTFCO0FBb0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLElBQU1DLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsR0FBTTtFQUNoQyxPQUFPNUIsaUJBQVA7QUFDRCxDQUZEO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O2VBQ2UsSUFBQTZCLDRCQUFBLEVBQWlCRCxtQkFBakIsQyJ9