"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _isDev = _interopRequireDefault(require("./isDev"));

var whitelist = ['background', 'backgroundColor', 'backgroundImage', 'borderRadius', 'transition', 'boxShadow', 'opacity', 'color', 'textShadow', 'outline', // Not sure if cursor should be configurable
'cursor', // Added to prevent pointer events on disabled tab
'pointerEvents'];
/**
 * @param {object?} obj - input object that will be filtered against the whitelist.
 * @return {object} the result will always be a object
 */

function createAppearance() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var result = {};
  Object.keys(obj).forEach(function (key) {
    if (whitelist.includes(key)) {
      if (typeof obj[key] === 'string' || typeof obj[key] === 'number') {
        result[key] = obj[key];
      } else if (_isDev["default"]) {
        console.error("createAppearance() only accepts strings as properties, key '".concat(key, "' with value '").concat(obj[key], "' is not a string"));
      }
    } else if (_isDev["default"]) {
      console.error("createAppearance() only accepts whitelisted properties, key '".concat(key, "' is not whitelisted in whitelist:"), whitelist);
    }
  });
  return result;
}

var _default = createAppearance;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJ3aGl0ZWxpc3QiLCJjcmVhdGVBcHBlYXJhbmNlIiwib2JqIiwicmVzdWx0IiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJpbmNsdWRlcyIsImlzRGV2IiwiY29uc29sZSIsImVycm9yIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3RoZW1lci9zcmMvY3JlYXRlQXBwZWFyYW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaXNEZXYgZnJvbSAnLi9pc0RldidcblxuY29uc3Qgd2hpdGVsaXN0ID0gW1xuICAnYmFja2dyb3VuZCcsXG4gICdiYWNrZ3JvdW5kQ29sb3InLFxuICAnYmFja2dyb3VuZEltYWdlJyxcblxuICAnYm9yZGVyUmFkaXVzJyxcblxuICAndHJhbnNpdGlvbicsXG4gICdib3hTaGFkb3cnLFxuICAnb3BhY2l0eScsXG5cbiAgJ2NvbG9yJyxcbiAgJ3RleHRTaGFkb3cnLFxuXG4gICdvdXRsaW5lJyxcbiAgLy8gTm90IHN1cmUgaWYgY3Vyc29yIHNob3VsZCBiZSBjb25maWd1cmFibGVcbiAgJ2N1cnNvcicsXG5cbiAgLy8gQWRkZWQgdG8gcHJldmVudCBwb2ludGVyIGV2ZW50cyBvbiBkaXNhYmxlZCB0YWJcbiAgJ3BvaW50ZXJFdmVudHMnXG5dXG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3Q/fSBvYmogLSBpbnB1dCBvYmplY3QgdGhhdCB3aWxsIGJlIGZpbHRlcmVkIGFnYWluc3QgdGhlIHdoaXRlbGlzdC5cbiAqIEByZXR1cm4ge29iamVjdH0gdGhlIHJlc3VsdCB3aWxsIGFsd2F5cyBiZSBhIG9iamVjdFxuICovXG5mdW5jdGlvbiBjcmVhdGVBcHBlYXJhbmNlKG9iaiA9IHt9KSB7XG4gIGNvbnN0IHJlc3VsdCA9IHt9XG5cbiAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgaWYgKHdoaXRlbGlzdC5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBpZiAodHlwZW9mIG9ialtrZXldID09PSAnc3RyaW5nJyB8fCB0eXBlb2Ygb2JqW2tleV0gPT09ICdudW1iZXInKSB7XG4gICAgICAgIHJlc3VsdFtrZXldID0gb2JqW2tleV1cbiAgICAgIH0gZWxzZSBpZiAoaXNEZXYpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICBgY3JlYXRlQXBwZWFyYW5jZSgpIG9ubHkgYWNjZXB0cyBzdHJpbmdzIGFzIHByb3BlcnRpZXMsIGtleSAnJHtrZXl9JyB3aXRoIHZhbHVlICcke1xuICAgICAgICAgICAgb2JqW2tleV1cbiAgICAgICAgICB9JyBpcyBub3QgYSBzdHJpbmdgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzRGV2KSB7XG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICBgY3JlYXRlQXBwZWFyYW5jZSgpIG9ubHkgYWNjZXB0cyB3aGl0ZWxpc3RlZCBwcm9wZXJ0aWVzLCBrZXkgJyR7a2V5fScgaXMgbm90IHdoaXRlbGlzdGVkIGluIHdoaXRlbGlzdDpgLFxuICAgICAgICB3aGl0ZWxpc3RcbiAgICAgIClcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVBcHBlYXJhbmNlXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxDQUNoQixZQURnQixFQUVoQixpQkFGZ0IsRUFHaEIsaUJBSGdCLEVBS2hCLGNBTGdCLEVBT2hCLFlBUGdCLEVBUWhCLFdBUmdCLEVBU2hCLFNBVGdCLEVBV2hCLE9BWGdCLEVBWWhCLFlBWmdCLEVBY2hCLFNBZGdCLEVBZWhCO0FBQ0EsUUFoQmdCLEVBa0JoQjtBQUNBLGVBbkJnQixDQUFsQjtBQXNCQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTQyxnQkFBVCxHQUFvQztFQUFBLElBQVZDLEdBQVUsdUVBQUosRUFBSTtFQUNsQyxJQUFNQyxNQUFNLEdBQUcsRUFBZjtFQUVBQyxNQUFNLENBQUNDLElBQVAsQ0FBWUgsR0FBWixFQUFpQkksT0FBakIsQ0FBeUIsVUFBQUMsR0FBRyxFQUFJO0lBQzlCLElBQUlQLFNBQVMsQ0FBQ1EsUUFBVixDQUFtQkQsR0FBbkIsQ0FBSixFQUE2QjtNQUMzQixJQUFJLE9BQU9MLEdBQUcsQ0FBQ0ssR0FBRCxDQUFWLEtBQW9CLFFBQXBCLElBQWdDLE9BQU9MLEdBQUcsQ0FBQ0ssR0FBRCxDQUFWLEtBQW9CLFFBQXhELEVBQWtFO1FBQ2hFSixNQUFNLENBQUNJLEdBQUQsQ0FBTixHQUFjTCxHQUFHLENBQUNLLEdBQUQsQ0FBakI7TUFDRCxDQUZELE1BRU8sSUFBSUUsaUJBQUosRUFBVztRQUNoQkMsT0FBTyxDQUFDQyxLQUFSLHVFQUNpRUosR0FEakUsMkJBRUlMLEdBQUcsQ0FBQ0ssR0FBRCxDQUZQO01BS0Q7SUFDRixDQVZELE1BVU8sSUFBSUUsaUJBQUosRUFBVztNQUNoQkMsT0FBTyxDQUFDQyxLQUFSLHdFQUNrRUosR0FEbEUseUNBRUVQLFNBRkY7SUFJRDtFQUNGLENBakJEO0VBbUJBLE9BQU9HLE1BQVA7QUFDRDs7ZUFFY0YsZ0IifQ==