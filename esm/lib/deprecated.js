import warning from './warning';
export default (function (propType, explanation) {
  return function (props, propName, componentName) {
    if (process.env.NODE_ENV !== 'production') {
      warning(propName in props, "\"".concat(propName, "\" property of \"").concat(componentName, "\" has been deprecated.\n").concat(explanation));
    }

    for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      rest[_key - 3] = arguments[_key];
    }

    return propType.apply(void 0, [props, propName, componentName].concat(rest));
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJ3YXJuaW5nIiwicHJvcFR5cGUiLCJleHBsYW5hdGlvbiIsInByb3BzIiwicHJvcE5hbWUiLCJjb21wb25lbnROYW1lIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwicmVzdCJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvZGVwcmVjYXRlZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2FybmluZyBmcm9tICcuL3dhcm5pbmcnXG5cbmV4cG9ydCBkZWZhdWx0IChwcm9wVHlwZSwgZXhwbGFuYXRpb24pID0+IHtcbiAgcmV0dXJuIChwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIC4uLnJlc3QpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgd2FybmluZyhcbiAgICAgICAgcHJvcE5hbWUgaW4gcHJvcHMsXG4gICAgICAgIGBcIiR7cHJvcE5hbWV9XCIgcHJvcGVydHkgb2YgXCIke2NvbXBvbmVudE5hbWV9XCIgaGFzIGJlZW4gZGVwcmVjYXRlZC5cXG4ke2V4cGxhbmF0aW9ufWBcbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcFR5cGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCAuLi5yZXN0KVxuICB9XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLE9BQVAsTUFBb0IsV0FBcEI7QUFFQSxnQkFBZSxVQUFDQyxRQUFELEVBQVdDLFdBQVgsRUFBMkI7RUFDeEMsT0FBTyxVQUFDQyxLQUFELEVBQVFDLFFBQVIsRUFBa0JDLGFBQWxCLEVBQTZDO0lBQ2xELElBQUlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxRQUFaLEtBQXlCLFlBQTdCLEVBQTJDO01BQ3pDUixPQUFPLENBQ0xJLFFBQVEsSUFBSUQsS0FEUCxjQUVEQyxRQUZDLDhCQUV5QkMsYUFGekIsc0NBRWlFSCxXQUZqRSxFQUFQO0lBSUQ7O0lBTmlELGtDQUFUTyxJQUFTO01BQVRBLElBQVM7SUFBQTs7SUFRbEQsT0FBT1IsUUFBUSxNQUFSLFVBQVNFLEtBQVQsRUFBZ0JDLFFBQWhCLEVBQTBCQyxhQUExQixTQUE0Q0ksSUFBNUMsRUFBUDtFQUNELENBVEQ7QUFVRCxDQVhEIn0=