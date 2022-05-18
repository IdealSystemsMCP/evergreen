"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _themer = require("../../../../themer");

var _memoizeClassName = _interopRequireDefault(require("../utils/memoizeClassName"));

var _scales = _interopRequireDefault(require("../foundational-styles/scales"));

var defaultAppearance = _themer.Themer.createTextDropdownButtonAppearance({
  base: {
    borderRadius: 3
  },
  hover: {},
  focus: {
    boxShadow: "0 0 0 3px ".concat(_scales["default"].blue.B5A)
  },
  active: {},
  disabled: {
    opacity: 0.5
  }
});
/**
 * Get the appearance of a `TextDropdownButton`.
 */


var getTextDropdownButtonAppearance = function getTextDropdownButtonAppearance() {
  return defaultAppearance;
};
/**
 * Get the className of a `TextDropdownButton`.
 */


var _default = (0, _memoizeClassName["default"])(getTextDropdownButtonAppearance);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJkZWZhdWx0QXBwZWFyYW5jZSIsIlRoZW1lciIsImNyZWF0ZVRleHREcm9wZG93bkJ1dHRvbkFwcGVhcmFuY2UiLCJiYXNlIiwiYm9yZGVyUmFkaXVzIiwiaG92ZXIiLCJmb2N1cyIsImJveFNoYWRvdyIsInNjYWxlcyIsImJsdWUiLCJCNUEiLCJhY3RpdmUiLCJkaXNhYmxlZCIsIm9wYWNpdHkiLCJnZXRUZXh0RHJvcGRvd25CdXR0b25BcHBlYXJhbmNlIiwibWVtb2l6ZUNsYXNzTmFtZSJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90aGVtZS9zcmMvZGVmYXVsdC10aGVtZS9jb21wb25lbnQtc3BlY2lmaWMvZ2V0VGV4dERyb3Bkb3duQnV0dG9uQ2xhc3NOYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRoZW1lciB9IGZyb20gJy4uLy4uLy4uLy4uL3RoZW1lcidcbmltcG9ydCBtZW1vaXplQ2xhc3NOYW1lIGZyb20gJy4uL3V0aWxzL21lbW9pemVDbGFzc05hbWUnXG5pbXBvcnQgc2NhbGVzIGZyb20gJy4uL2ZvdW5kYXRpb25hbC1zdHlsZXMvc2NhbGVzJ1xuXG5jb25zdCBkZWZhdWx0QXBwZWFyYW5jZSA9IFRoZW1lci5jcmVhdGVUZXh0RHJvcGRvd25CdXR0b25BcHBlYXJhbmNlKHtcbiAgYmFzZToge1xuICAgIGJvcmRlclJhZGl1czogM1xuICB9LFxuICBob3Zlcjoge30sXG4gIGZvY3VzOiB7XG4gICAgYm94U2hhZG93OiBgMCAwIDAgM3B4ICR7c2NhbGVzLmJsdWUuQjVBfWBcbiAgfSxcbiAgYWN0aXZlOiB7fSxcbiAgZGlzYWJsZWQ6IHtcbiAgICBvcGFjaXR5OiAwLjVcbiAgfVxufSlcblxuLyoqXG4gKiBHZXQgdGhlIGFwcGVhcmFuY2Ugb2YgYSBgVGV4dERyb3Bkb3duQnV0dG9uYC5cbiAqL1xuY29uc3QgZ2V0VGV4dERyb3Bkb3duQnV0dG9uQXBwZWFyYW5jZSA9ICgpID0+IHtcbiAgcmV0dXJuIGRlZmF1bHRBcHBlYXJhbmNlXG59XG5cbi8qKlxuICogR2V0IHRoZSBjbGFzc05hbWUgb2YgYSBgVGV4dERyb3Bkb3duQnV0dG9uYC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgbWVtb2l6ZUNsYXNzTmFtZShnZXRUZXh0RHJvcGRvd25CdXR0b25BcHBlYXJhbmNlKVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQSxJQUFNQSxpQkFBaUIsR0FBR0MsY0FBQSxDQUFPQyxrQ0FBUCxDQUEwQztFQUNsRUMsSUFBSSxFQUFFO0lBQ0pDLFlBQVksRUFBRTtFQURWLENBRDREO0VBSWxFQyxLQUFLLEVBQUUsRUFKMkQ7RUFLbEVDLEtBQUssRUFBRTtJQUNMQyxTQUFTLHNCQUFlQyxrQkFBQSxDQUFPQyxJQUFQLENBQVlDLEdBQTNCO0VBREosQ0FMMkQ7RUFRbEVDLE1BQU0sRUFBRSxFQVIwRDtFQVNsRUMsUUFBUSxFQUFFO0lBQ1JDLE9BQU8sRUFBRTtFQUREO0FBVHdELENBQTFDLENBQTFCO0FBY0E7QUFDQTtBQUNBOzs7QUFDQSxJQUFNQywrQkFBK0IsR0FBRyxTQUFsQ0EsK0JBQWtDLEdBQU07RUFDNUMsT0FBT2QsaUJBQVA7QUFDRCxDQUZEO0FBSUE7QUFDQTtBQUNBOzs7ZUFDZSxJQUFBZSw0QkFBQSxFQUFpQkQsK0JBQWpCLEMifQ==