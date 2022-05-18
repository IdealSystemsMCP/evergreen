"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _themer = require("../../../../themer");

var _memoizeClassName = _interopRequireDefault(require("../utils/memoizeClassName"));

var _shared = require("../shared");

var defaultAppearance = _themer.Themer.createSegmentedControlRadioAppearance({
  base: _shared.defaultControlStyles.base,
  disabled: _shared.defaultControlStyles.disabled,
  hover: _shared.defaultControlStyles.hover,
  active: _shared.defaultControlStyles.active,
  focus: _shared.defaultControlStyles.focus
});
/**
 * Get the appearanece of a `SegmentedControlRadio`.
 * @param {string} appearance
 * @return {string} the appearance object.
 */


var getSegmentedControlRadioAppearance = function getSegmentedControlRadioAppearance() {
  return defaultAppearance;
};
/**
 * Get the className of a `SegmentedControlRadio`.
 * @param {string} appearance
 * @return {string} the appearance class name.
 */


var _default = (0, _memoizeClassName["default"])(getSegmentedControlRadioAppearance);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJkZWZhdWx0QXBwZWFyYW5jZSIsIlRoZW1lciIsImNyZWF0ZVNlZ21lbnRlZENvbnRyb2xSYWRpb0FwcGVhcmFuY2UiLCJiYXNlIiwiZGVmYXVsdENvbnRyb2xTdHlsZXMiLCJkaXNhYmxlZCIsImhvdmVyIiwiYWN0aXZlIiwiZm9jdXMiLCJnZXRTZWdtZW50ZWRDb250cm9sUmFkaW9BcHBlYXJhbmNlIiwibWVtb2l6ZUNsYXNzTmFtZSJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90aGVtZS9zcmMvZGVmYXVsdC10aGVtZS9jb21wb25lbnQtc3BlY2lmaWMvZ2V0U2VnbWVudGVkQ29udHJvbFJhZGlvQ2xhc3NOYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRoZW1lciB9IGZyb20gJy4uLy4uLy4uLy4uL3RoZW1lcidcbmltcG9ydCBtZW1vaXplQ2xhc3NOYW1lIGZyb20gJy4uL3V0aWxzL21lbW9pemVDbGFzc05hbWUnXG5pbXBvcnQgeyBkZWZhdWx0Q29udHJvbFN0eWxlcyB9IGZyb20gJy4uL3NoYXJlZCdcblxuY29uc3QgZGVmYXVsdEFwcGVhcmFuY2UgPSBUaGVtZXIuY3JlYXRlU2VnbWVudGVkQ29udHJvbFJhZGlvQXBwZWFyYW5jZSh7XG4gIGJhc2U6IGRlZmF1bHRDb250cm9sU3R5bGVzLmJhc2UsXG4gIGRpc2FibGVkOiBkZWZhdWx0Q29udHJvbFN0eWxlcy5kaXNhYmxlZCxcbiAgaG92ZXI6IGRlZmF1bHRDb250cm9sU3R5bGVzLmhvdmVyLFxuICBhY3RpdmU6IGRlZmF1bHRDb250cm9sU3R5bGVzLmFjdGl2ZSxcbiAgZm9jdXM6IGRlZmF1bHRDb250cm9sU3R5bGVzLmZvY3VzXG59KVxuXG4vKipcbiAqIEdldCB0aGUgYXBwZWFyYW5lY2Ugb2YgYSBgU2VnbWVudGVkQ29udHJvbFJhZGlvYC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBhcHBlYXJhbmNlXG4gKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBhcHBlYXJhbmNlIG9iamVjdC5cbiAqL1xuY29uc3QgZ2V0U2VnbWVudGVkQ29udHJvbFJhZGlvQXBwZWFyYW5jZSA9ICgpID0+IHtcbiAgcmV0dXJuIGRlZmF1bHRBcHBlYXJhbmNlXG59XG5cbi8qKlxuICogR2V0IHRoZSBjbGFzc05hbWUgb2YgYSBgU2VnbWVudGVkQ29udHJvbFJhZGlvYC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBhcHBlYXJhbmNlXG4gKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBhcHBlYXJhbmNlIGNsYXNzIG5hbWUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IG1lbW9pemVDbGFzc05hbWUoZ2V0U2VnbWVudGVkQ29udHJvbFJhZGlvQXBwZWFyYW5jZSlcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUEsSUFBTUEsaUJBQWlCLEdBQUdDLGNBQUEsQ0FBT0MscUNBQVAsQ0FBNkM7RUFDckVDLElBQUksRUFBRUMsNEJBQUEsQ0FBcUJELElBRDBDO0VBRXJFRSxRQUFRLEVBQUVELDRCQUFBLENBQXFCQyxRQUZzQztFQUdyRUMsS0FBSyxFQUFFRiw0QkFBQSxDQUFxQkUsS0FIeUM7RUFJckVDLE1BQU0sRUFBRUgsNEJBQUEsQ0FBcUJHLE1BSndDO0VBS3JFQyxLQUFLLEVBQUVKLDRCQUFBLENBQXFCSTtBQUx5QyxDQUE3QyxDQUExQjtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLElBQU1DLGtDQUFrQyxHQUFHLFNBQXJDQSxrQ0FBcUMsR0FBTTtFQUMvQyxPQUFPVCxpQkFBUDtBQUNELENBRkQ7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7ZUFDZSxJQUFBVSw0QkFBQSxFQUFpQkQsa0NBQWpCLEMifQ==