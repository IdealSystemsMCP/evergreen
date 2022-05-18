"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _themer = require("../../../../themer");

var _memoizeClassName = _interopRequireDefault(require("../utils/memoizeClassName"));

var _scales = _interopRequireDefault(require("../foundational-styles/scales"));

var _helpers = require("../helpers");

var primaryStyle = (0, _helpers.getPrimaryButtonStylesForIntent)();

var defaultAppearance = _themer.Themer.createCheckboxAppearance({
  base: {
    color: 'white',
    backgroundColor: 'white',
    backgroundImage: "linear-gradient(to top, ".concat(_scales["default"].neutral.N2A, ", white)"),
    boxShadow: "inset 0 0 0 1px ".concat(_scales["default"].neutral.N4A, ", inset 0 -1px 1px 0 ").concat(_scales["default"].neutral.N3A)
  },
  disabled: {
    cursor: 'not-allowed',
    boxShadow: "inset 0 0 0 1px ".concat(_scales["default"].neutral.N4A),
    backgroundColor: _scales["default"].neutral.N2A,
    backgroundImage: 'none'
  },
  hover: {
    backgroundImage: "linear-gradient(to top, ".concat(_scales["default"].neutral.N2A, ", ").concat(_scales["default"].neutral.N1A, ")"),
    boxShadow: "inset 0 0 0 1px ".concat(_scales["default"].neutral.N4A, ", inset 0 -1px 1px 0 ").concat(_scales["default"].neutral.N2A)
  },
  focus: {
    boxShadow: "0 0 0 2px ".concat(_scales["default"].blue.B4A, ", inset 0 0 0 1px ").concat(_scales["default"].neutral.N5A, ", inset 0 -1px 1px 0 ").concat(_scales["default"].neutral.N3A)
  },
  active: {
    backgroundImage: 'none',
    backgroundColor: _scales["default"].blue.B3A,
    boxShadow: "inset 0 0 0 1px ".concat(_scales["default"].blue.B5A)
  },
  checked: {
    color: 'white',
    backgroundImage: primaryStyle.linearGradient.base,
    boxShadow: "inset 0 0 0 1px ".concat(_scales["default"].neutral.N5A, ", inset 0 -1px 1px 0 ").concat(_scales["default"].neutral.N2A)
  },
  checkedHover: {
    color: 'white',
    backgroundImage: primaryStyle.linearGradient.hover,
    boxShadow: "inset 0 0 0 1px ".concat(_scales["default"].neutral.N5A, ", inset 0 -1px 1px 0 ").concat(_scales["default"].neutral.N2A)
  },
  checkedDisabled: {
    color: _scales["default"].neutral.N6A,
    backgroundImage: "linear-gradient(to top, ".concat(_scales["default"].neutral.N2A, ", ").concat(_scales["default"].neutral.N1A, ")"),
    boxShadow: "inset 0 0 0 1px ".concat(_scales["default"].neutral.N4A, ", inset 0 -1px 1px 0 ").concat(_scales["default"].neutral.N2A)
  },
  checkedActive: {
    color: 'white',
    backgroundImage: primaryStyle.linearGradient.active,
    boxShadow: "inset 0 0 0 1px ".concat(_scales["default"].neutral.N4A, ", inset 0 -1px 1px 0 ").concat(_scales["default"].neutral.N2A)
  }
});
/**
 * There is only a single appearance in the default theme.
 * @param {String} appearance.
 * @return {Object} the appearance of the checkbox.
 */


var getCheckboxAppearance = function getCheckboxAppearance() {
  return defaultAppearance;
};
/**
 * Get the className of a `Checkbox`.
 * @param {string} appearance
 * @return {string} the appearance class name.
 */


var _default = (0, _memoizeClassName["default"])(getCheckboxAppearance);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJwcmltYXJ5U3R5bGUiLCJnZXRQcmltYXJ5QnV0dG9uU3R5bGVzRm9ySW50ZW50IiwiZGVmYXVsdEFwcGVhcmFuY2UiLCJUaGVtZXIiLCJjcmVhdGVDaGVja2JveEFwcGVhcmFuY2UiLCJiYXNlIiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJzY2FsZXMiLCJuZXV0cmFsIiwiTjJBIiwiYm94U2hhZG93IiwiTjRBIiwiTjNBIiwiZGlzYWJsZWQiLCJjdXJzb3IiLCJob3ZlciIsIk4xQSIsImZvY3VzIiwiYmx1ZSIsIkI0QSIsIk41QSIsImFjdGl2ZSIsIkIzQSIsIkI1QSIsImNoZWNrZWQiLCJsaW5lYXJHcmFkaWVudCIsImNoZWNrZWRIb3ZlciIsImNoZWNrZWREaXNhYmxlZCIsIk42QSIsImNoZWNrZWRBY3RpdmUiLCJnZXRDaGVja2JveEFwcGVhcmFuY2UiLCJtZW1vaXplQ2xhc3NOYW1lIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3RoZW1lL3NyYy9kZWZhdWx0LXRoZW1lL2NvbXBvbmVudC1zcGVjaWZpYy9nZXRDaGVja2JveENsYXNzTmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaGVtZXIgfSBmcm9tICcuLi8uLi8uLi8uLi90aGVtZXInXG5pbXBvcnQgbWVtb2l6ZUNsYXNzTmFtZSBmcm9tICcuLi91dGlscy9tZW1vaXplQ2xhc3NOYW1lJ1xuaW1wb3J0IHNjYWxlcyBmcm9tICcuLi9mb3VuZGF0aW9uYWwtc3R5bGVzL3NjYWxlcydcbmltcG9ydCB7IGdldFByaW1hcnlCdXR0b25TdHlsZXNGb3JJbnRlbnQgfSBmcm9tICcuLi9oZWxwZXJzJ1xuXG5jb25zdCBwcmltYXJ5U3R5bGUgPSBnZXRQcmltYXJ5QnV0dG9uU3R5bGVzRm9ySW50ZW50KClcblxuY29uc3QgZGVmYXVsdEFwcGVhcmFuY2UgPSBUaGVtZXIuY3JlYXRlQ2hlY2tib3hBcHBlYXJhbmNlKHtcbiAgYmFzZToge1xuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IGBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAke3NjYWxlcy5uZXV0cmFsLk4yQX0sIHdoaXRlKWAsXG4gICAgYm94U2hhZG93OiBgaW5zZXQgMCAwIDAgMXB4ICR7c2NhbGVzLm5ldXRyYWwuTjRBfSwgaW5zZXQgMCAtMXB4IDFweCAwICR7XG4gICAgICBzY2FsZXMubmV1dHJhbC5OM0FcbiAgICB9YFxuICB9LFxuICBkaXNhYmxlZDoge1xuICAgIGN1cnNvcjogJ25vdC1hbGxvd2VkJyxcbiAgICBib3hTaGFkb3c6IGBpbnNldCAwIDAgMCAxcHggJHtzY2FsZXMubmV1dHJhbC5ONEF9YCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHNjYWxlcy5uZXV0cmFsLk4yQSxcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6ICdub25lJ1xuICB9LFxuICBob3Zlcjoge1xuICAgIGJhY2tncm91bmRJbWFnZTogYGxpbmVhci1ncmFkaWVudCh0byB0b3AsICR7c2NhbGVzLm5ldXRyYWwuTjJBfSwgJHtcbiAgICAgIHNjYWxlcy5uZXV0cmFsLk4xQVxuICAgIH0pYCxcbiAgICBib3hTaGFkb3c6IGBpbnNldCAwIDAgMCAxcHggJHtzY2FsZXMubmV1dHJhbC5ONEF9LCBpbnNldCAwIC0xcHggMXB4IDAgJHtcbiAgICAgIHNjYWxlcy5uZXV0cmFsLk4yQVxuICAgIH1gXG4gIH0sXG4gIGZvY3VzOiB7XG4gICAgYm94U2hhZG93OiBgMCAwIDAgMnB4ICR7c2NhbGVzLmJsdWUuQjRBfSwgaW5zZXQgMCAwIDAgMXB4ICR7XG4gICAgICBzY2FsZXMubmV1dHJhbC5ONUFcbiAgICB9LCBpbnNldCAwIC0xcHggMXB4IDAgJHtzY2FsZXMubmV1dHJhbC5OM0F9YFxuICB9LFxuICBhY3RpdmU6IHtcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6ICdub25lJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHNjYWxlcy5ibHVlLkIzQSxcbiAgICBib3hTaGFkb3c6IGBpbnNldCAwIDAgMCAxcHggJHtzY2FsZXMuYmx1ZS5CNUF9YFxuICB9LFxuICBjaGVja2VkOiB7XG4gICAgY29sb3I6ICd3aGl0ZScsXG4gICAgYmFja2dyb3VuZEltYWdlOiBwcmltYXJ5U3R5bGUubGluZWFyR3JhZGllbnQuYmFzZSxcbiAgICBib3hTaGFkb3c6IGBpbnNldCAwIDAgMCAxcHggJHtzY2FsZXMubmV1dHJhbC5ONUF9LCBpbnNldCAwIC0xcHggMXB4IDAgJHtcbiAgICAgIHNjYWxlcy5uZXV0cmFsLk4yQVxuICAgIH1gXG4gIH0sXG4gIGNoZWNrZWRIb3Zlcjoge1xuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIGJhY2tncm91bmRJbWFnZTogcHJpbWFyeVN0eWxlLmxpbmVhckdyYWRpZW50LmhvdmVyLFxuICAgIGJveFNoYWRvdzogYGluc2V0IDAgMCAwIDFweCAke3NjYWxlcy5uZXV0cmFsLk41QX0sIGluc2V0IDAgLTFweCAxcHggMCAke1xuICAgICAgc2NhbGVzLm5ldXRyYWwuTjJBXG4gICAgfWBcbiAgfSxcbiAgY2hlY2tlZERpc2FibGVkOiB7XG4gICAgY29sb3I6IHNjYWxlcy5uZXV0cmFsLk42QSxcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IGBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAke3NjYWxlcy5uZXV0cmFsLk4yQX0sICR7XG4gICAgICBzY2FsZXMubmV1dHJhbC5OMUFcbiAgICB9KWAsXG4gICAgYm94U2hhZG93OiBgaW5zZXQgMCAwIDAgMXB4ICR7c2NhbGVzLm5ldXRyYWwuTjRBfSwgaW5zZXQgMCAtMXB4IDFweCAwICR7XG4gICAgICBzY2FsZXMubmV1dHJhbC5OMkFcbiAgICB9YFxuICB9LFxuICBjaGVja2VkQWN0aXZlOiB7XG4gICAgY29sb3I6ICd3aGl0ZScsXG4gICAgYmFja2dyb3VuZEltYWdlOiBwcmltYXJ5U3R5bGUubGluZWFyR3JhZGllbnQuYWN0aXZlLFxuICAgIGJveFNoYWRvdzogYGluc2V0IDAgMCAwIDFweCAke3NjYWxlcy5uZXV0cmFsLk40QX0sIGluc2V0IDAgLTFweCAxcHggMCAke1xuICAgICAgc2NhbGVzLm5ldXRyYWwuTjJBXG4gICAgfWBcbiAgfVxufSlcblxuLyoqXG4gKiBUaGVyZSBpcyBvbmx5IGEgc2luZ2xlIGFwcGVhcmFuY2UgaW4gdGhlIGRlZmF1bHQgdGhlbWUuXG4gKiBAcGFyYW0ge1N0cmluZ30gYXBwZWFyYW5jZS5cbiAqIEByZXR1cm4ge09iamVjdH0gdGhlIGFwcGVhcmFuY2Ugb2YgdGhlIGNoZWNrYm94LlxuICovXG5jb25zdCBnZXRDaGVja2JveEFwcGVhcmFuY2UgPSAoKSA9PiB7XG4gIHJldHVybiBkZWZhdWx0QXBwZWFyYW5jZVxufVxuXG4vKipcbiAqIEdldCB0aGUgY2xhc3NOYW1lIG9mIGEgYENoZWNrYm94YC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBhcHBlYXJhbmNlXG4gKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBhcHBlYXJhbmNlIGNsYXNzIG5hbWUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IG1lbW9pemVDbGFzc05hbWUoZ2V0Q2hlY2tib3hBcHBlYXJhbmNlKVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsSUFBQUMsd0NBQUEsR0FBckI7O0FBRUEsSUFBTUMsaUJBQWlCLEdBQUdDLGNBQUEsQ0FBT0Msd0JBQVAsQ0FBZ0M7RUFDeERDLElBQUksRUFBRTtJQUNKQyxLQUFLLEVBQUUsT0FESDtJQUVKQyxlQUFlLEVBQUUsT0FGYjtJQUdKQyxlQUFlLG9DQUE2QkMsa0JBQUEsQ0FBT0MsT0FBUCxDQUFlQyxHQUE1QyxhQUhYO0lBSUpDLFNBQVMsNEJBQXFCSCxrQkFBQSxDQUFPQyxPQUFQLENBQWVHLEdBQXBDLGtDQUNQSixrQkFBQSxDQUFPQyxPQUFQLENBQWVJLEdBRFI7RUFKTCxDQURrRDtFQVN4REMsUUFBUSxFQUFFO0lBQ1JDLE1BQU0sRUFBRSxhQURBO0lBRVJKLFNBQVMsNEJB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