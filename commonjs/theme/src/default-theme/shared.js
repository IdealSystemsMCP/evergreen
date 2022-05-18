"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ignore = exports.defaultControlStyles = void 0;

var _helpers = require("./helpers");

var _scales = _interopRequireDefault(require("./foundational-styles/scales"));

var defaultControlStyles = {
  disabled: {
    opacity: 0.8,
    backgroundImage: 'none',
    backgroundColor: _scales["default"].neutral.N2A,
    boxShadow: 'none',
    color: _scales["default"].neutral.N7A,
    pointerEvents: 'none'
  },
  base: {
    backgroundColor: 'white',
    backgroundImage: (0, _helpers.linearGradient)('#FFFFFF', '#F4F5F7'),
    boxShadow: "inset 0 0 0 1px ".concat(_scales["default"].neutral.N4A, ", inset 0 -1px 1px 0 ").concat(_scales["default"].neutral.N2A)
  },
  hover: {
    backgroundImage: (0, _helpers.linearGradient)('#FAFBFB', '#EAECEE')
  },
  focus: {
    boxShadow: "0 0 0 3px ".concat(_scales["default"].blue.B4A, ", inset 0 0 0 1px ").concat(_scales["default"].neutral.N5A, ", inset 0 -1px 1px 0 ").concat(_scales["default"].neutral.N4A)
  },
  active: {
    backgroundImage: 'none',
    backgroundColor: _scales["default"].blue.B3A,
    boxShadow: "inset 0 0 0 1px ".concat(_scales["default"].neutral.N4A, ", inset 0 1px 1px 0 ").concat(_scales["default"].neutral.N2A)
  },
  focusAndActive: {
    boxShadow: "0 0 0 3px ".concat(_scales["default"].blue.B4A, ", inset 0 0 0 1px ").concat(_scales["default"].neutral.N5A, ", inset 0 1px 1px 0 ").concat(_scales["default"].neutral.N2A)
  }
}; // Can't figure out to disable rule for xo linter.

exports.defaultControlStyles = defaultControlStyles;
var ignore = null;
exports.ignore = ignore;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJkZWZhdWx0Q29udHJvbFN0eWxlcyIsImRpc2FibGVkIiwib3BhY2l0eSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRDb2xvciIsInNjYWxlcyIsIm5ldXRyYWwiLCJOMkEiLCJib3hTaGFkb3ciLCJjb2xvciIsIk43QSIsInBvaW50ZXJFdmVudHMiLCJiYXNlIiwibGluZWFyR3JhZGllbnQiLCJONEEiLCJob3ZlciIsImZvY3VzIiwiYmx1ZSIsIkI0QSIsIk41QSIsImFjdGl2ZSIsIkIzQSIsImZvY3VzQW5kQWN0aXZlIiwiaWdub3JlIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3RoZW1lL3NyYy9kZWZhdWx0LXRoZW1lL3NoYXJlZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsaW5lYXJHcmFkaWVudCB9IGZyb20gJy4vaGVscGVycydcbmltcG9ydCBzY2FsZXMgZnJvbSAnLi9mb3VuZGF0aW9uYWwtc3R5bGVzL3NjYWxlcydcblxuY29uc3QgZGVmYXVsdENvbnRyb2xTdHlsZXMgPSB7XG4gIGRpc2FibGVkOiB7XG4gICAgb3BhY2l0eTogMC44LFxuICAgIGJhY2tncm91bmRJbWFnZTogJ25vbmUnLFxuICAgIGJhY2tncm91bmRDb2xvcjogc2NhbGVzLm5ldXRyYWwuTjJBLFxuICAgIGJveFNoYWRvdzogJ25vbmUnLFxuICAgIGNvbG9yOiBzY2FsZXMubmV1dHJhbC5ON0EsXG4gICAgcG9pbnRlckV2ZW50czogJ25vbmUnXG4gIH0sXG4gIGJhc2U6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgYmFja2dyb3VuZEltYWdlOiBsaW5lYXJHcmFkaWVudCgnI0ZGRkZGRicsICcjRjRGNUY3JyksXG4gICAgYm94U2hhZG93OiBgaW5zZXQgMCAwIDAgMXB4ICR7c2NhbGVzLm5ldXRyYWwuTjRBfSwgaW5zZXQgMCAtMXB4IDFweCAwICR7XG4gICAgICBzY2FsZXMubmV1dHJhbC5OMkFcbiAgICB9YFxuICB9LFxuICBob3Zlcjoge1xuICAgIGJhY2tncm91bmRJbWFnZTogbGluZWFyR3JhZGllbnQoJyNGQUZCRkInLCAnI0VBRUNFRScpXG4gIH0sXG4gIGZvY3VzOiB7XG4gICAgYm94U2hhZG93OiBgMCAwIDAgM3B4ICR7c2NhbGVzLmJsdWUuQjRBfSwgaW5zZXQgMCAwIDAgMXB4ICR7XG4gICAgICBzY2FsZXMubmV1dHJhbC5ONUFcbiAgICB9LCBpbnNldCAwIC0xcHggMXB4IDAgJHtzY2FsZXMubmV1dHJhbC5ONEF9YFxuICB9LFxuICBhY3RpdmU6IHtcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6ICdub25lJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHNjYWxlcy5ibHVlLkIzQSxcbiAgICBib3hTaGFkb3c6IGBpbnNldCAwIDAgMCAxcHggJHtzY2FsZXMubmV1dHJhbC5ONEF9LCBpbnNldCAwIDFweCAxcHggMCAke1xuICAgICAgc2NhbGVzLm5ldXRyYWwuTjJBXG4gICAgfWBcbiAgfSxcbiAgZm9jdXNBbmRBY3RpdmU6IHtcbiAgICBib3hTaGFkb3c6IGAwIDAgMCAzcHggJHtzY2FsZXMuYmx1ZS5CNEF9LCBpbnNldCAwIDAgMCAxcHggJHtcbiAgICAgIHNjYWxlcy5uZXV0cmFsLk41QVxuICAgIH0sIGluc2V0IDAgMXB4IDFweCAwICR7c2NhbGVzLm5ldXRyYWwuTjJBfWBcbiAgfVxufVxuXG4vLyBDYW4ndCBmaWd1cmUgb3V0IHRvIGRpc2FibGUgcnVsZSBmb3IgeG8gbGludGVyLlxuY29uc3QgaWdub3JlID0gbnVsbFxuXG5leHBvcnQgeyBkZWZhdWx0Q29udHJvbFN0eWxlcywgaWdub3JlIH1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUEsSUFBTUEsb0JBQW9CLEdBQUc7RUFDM0JDLFFBQVEsRUFBRTtJQUNSQyxPQUFPLEVBQUUsR0FERDtJQUVSQyxlQUFlLEVBQUUsTUFGVDtJQUdSQyxlQUFlLEVBQUVDLGtCQUFBLENBQU9DLE9BQVAsQ0FBZUMsR0FIeEI7SUFJUkMsU0FBUyxFQUFFLE1BSkg7SUFLUkMsS0FBSyxFQUFFSixrQkFBQSxDQUFPQyxPQUFQLENBQWVJLEdBTGQ7SUFNUkMsYUFBYSxFQUFFO0VBTlAsQ0FEaUI7RUFTM0JDLElBQUksRUFBRTtJQUNKUixlQUFlLEVBQUUsT0FEYjtJQUVKRCxlQUFlLEVBQUUsSUFBQVUsdUJBQUEsRUFBZSxTQUFmLEVBQTBCLFNBQTFCLENBRmI7SUFHSkwsU0FBUyw0QkFBcUJILGtCQUFBLENBQU9DLE9BQVAsQ0FBZVEsR0FBcEMsa0NBQ1BULGtCQUFBLENBQU9DLE9BQVAsQ0FBZUMsR0FEUjtFQUhMLENBVHFCO0VBZ0IzQlEsS0FBSyxFQUFFO0lBQ0xaLGVBQWUsRUFBRSxJQUFBVSx1QkFBQSxFQUFlLFNBQWYsRUFBMEIsU0FBMUI7RUFEWixDQWhCb0I7RUFtQjNCRyxLQUFLLEVBQUU7SUFDTFIsU0FBUyxzQkFBZUgsa0JBQUEsQ0FBT1ksSUFBUCxDQUFZQyxHQUEzQiwrQkFDUGIsa0JBQUEsQ0FBT0MsT0FBUCxDQUFlYSxHQURSLGtDQUVlZCxrQkFBQSxDQUFPQyxPQUFQLENBQWVRLEdBRjlCO0VBREosQ0FuQm9CO0VBd0IzQk0sTUFBTSxFQUFFO0lBQ05qQixlQUFlLEVBQUUsTUFEWDtJQUVOQyxlQUFlLEVBQUVDLGtCQUFBLENBQU9ZLElBQVAsQ0FBWUksR0FGdkI7SUFHTmIsU0FBUyw0QkFBcUJILGtCQUFBLENBQU9DLE9BQVAsQ0FBZVEsR0FBcEMsaUNBQ1BULGtCQUFBLENBQU9DLE9BQVAsQ0FBZUMsR0FEUjtFQUhILENBeEJtQjtFQStCM0JlLGNBQWMsRUFBRTtJQUNkZCxTQUFTLHNCQUFlSCxrQkFBQSxDQUFPWSxJQUFQLENBQVlDLEdBQTNCLCtCQUNQYixrQkFBQSxDQUFPQyxPQUFQLENBQWVhLEdBRFIsaUNBRWNkLGtCQUFBLENBQU9DLE9BQVAsQ0FBZUMsR0FGN0I7RUFESztBQS9CVyxDQUE3QixDLENBc0NBOzs7QUFDQSxJQUFNZ0IsTUFBTSxHQUFHLElBQWYifQ==