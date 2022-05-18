"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _themer = require("../../../../themer");

var _memoizeClassName = _interopRequireDefault(require("../utils/memoizeClassName"));

var _scales = _interopRequireDefault(require("../foundational-styles/scales"));

var _palette = _interopRequireDefault(require("../foundational-styles/palette"));

var Appearances = {};
Appearances["default"] = _themer.Themer.createInputAppearance({
  base: {
    backgroundColor: 'white',
    boxShadow: "inset 0 0 0 1px ".concat(_scales["default"].neutral.N5A, ", inset 0 1px 2px ").concat(_scales["default"].neutral.N4A)
  },
  invalid: {
    boxShadow: "inset 0 0 0 1px ".concat(_palette["default"].red.base, ", inset 0 1px 2px ").concat(_scales["default"].neutral.N4A)
  },
  placeholder: {
    color: _scales["default"].neutral.N6A
  },
  focus: {
    outline: 'none',
    boxShadow: "inset 0 0 2px ".concat(_scales["default"].neutral.N4A, ", inset 0 0 0 1px ").concat(_scales["default"].blue.B7, ", 0 0 0 3px ").concat(_scales["default"].blue.B4A)
  },
  disabled: {
    boxShadow: "inset 0 0 0 1px ".concat(_scales["default"].neutral.N4A),
    backgroundColor: _scales["default"].neutral.N2
  }
});
Appearances.neutral = _themer.Themer.createInputAppearance({
  base: {
    backgroundColor: _scales["default"].neutral.N2A
  },
  invalid: {
    boxShadow: "inset 0 0 0 1px ".concat(_palette["default"].red.base)
  },
  placeholder: {
    color: _scales["default"].neutral.N6A
  },
  focus: {
    outline: 'none',
    backgroundColor: 'white',
    boxShadow: "0 0 0 2px ".concat(_scales["default"].blue.B6A)
  },
  disabled: {
    boxShadow: "inset 0 0 0 1px ".concat(_scales["default"].neutral.N4A),
    backgroundColor: _scales["default"].neutral.N2
  }
});
Appearances.editableCell = _themer.Themer.createInputAppearance({
  base: {
    backgroundColor: _scales["default"].neutral.N2A
  },
  invalid: {
    boxShadow: "inset 0 0 0 1px ".concat(_palette["default"].red.base)
  },
  placeholder: {
    color: _scales["default"].neutral.N6A
  },
  focus: {
    outline: 'none',
    backgroundColor: 'white',
    boxShadow: "0 0 0 2px ".concat(_scales["default"].blue.B7)
  },
  disabled: {
    boxShadow: "inset 0 0 0 1px ".concat(_scales["default"].neutral.N4A),
    backgroundColor: _scales["default"].neutral.N2
  }
});
/**
 * Get the appearance of a `TextInput`.
 * @param {string} appearance
 * @return {Object} the appearance object.
 */

var getTextareaAppearance = function getTextareaAppearance(appearance) {
  switch (appearance) {
    case 'neutral':
      return Appearances.neutral;

    case 'editable-cell':
      return Appearances.editableCell;

    default:
      return Appearances["default"];
  }
};
/**
 * Get the className of a `TextInput`.
 * @param {string} appearance
 * @return {string} the appearance class name.
 */


var _default = (0, _memoizeClassName["default"])(getTextareaAppearance);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJBcHBlYXJhbmNlcyIsIlRoZW1lciIsImNyZWF0ZUlucHV0QXBwZWFyYW5jZSIsImJhc2UiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3hTaGFkb3ciLCJzY2FsZXMiLCJuZXV0cmFsIiwiTjVBIiwiTjRBIiwiaW52YWxpZCIsInBhbGV0dGUiLCJyZWQiLCJwbGFjZWhvbGRlciIsImNvbG9yIiwiTjZBIiwiZm9jdXMiLCJvdXRsaW5lIiwiYmx1ZSIsIkI3IiwiQjRBIiwiZGlzYWJsZWQiLCJOMiIsIk4yQSIsIkI2QSIsImVkaXRhYmxlQ2VsbCIsImdldFRleHRhcmVhQXBwZWFyYW5jZSIsImFwcGVhcmFuY2UiLCJtZW1vaXplQ2xhc3NOYW1lIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3RoZW1lL3NyYy9kZWZhdWx0LXRoZW1lL2NvbXBvbmVudC1zcGVjaWZpYy9nZXRUZXh0YXJlYUNsYXNzTmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaGVtZXIgfSBmcm9tICcuLi8uLi8uLi8uLi90aGVtZXInXG5pbXBvcnQgbWVtb2l6ZUNsYXNzTmFtZSBmcm9tICcuLi91dGlscy9tZW1vaXplQ2xhc3NOYW1lJ1xuaW1wb3J0IHNjYWxlcyBmcm9tICcuLi9mb3VuZGF0aW9uYWwtc3R5bGVzL3NjYWxlcydcbmltcG9ydCBwYWxldHRlIGZyb20gJy4uL2ZvdW5kYXRpb25hbC1zdHlsZXMvcGFsZXR0ZSdcblxuY29uc3QgQXBwZWFyYW5jZXMgPSB7fVxuXG5BcHBlYXJhbmNlcy5kZWZhdWx0ID0gVGhlbWVyLmNyZWF0ZUlucHV0QXBwZWFyYW5jZSh7XG4gIGJhc2U6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgYm94U2hhZG93OiBgaW5zZXQgMCAwIDAgMXB4ICR7c2NhbGVzLm5ldXRyYWwuTjVBfSwgaW5zZXQgMCAxcHggMnB4ICR7XG4gICAgICBzY2FsZXMubmV1dHJhbC5ONEFcbiAgICB9YFxuICB9LFxuICBpbnZhbGlkOiB7XG4gICAgYm94U2hhZG93OiBgaW5zZXQgMCAwIDAgMXB4ICR7cGFsZXR0ZS5yZWQuYmFzZX0sIGluc2V0IDAgMXB4IDJweCAke1xuICAgICAgc2NhbGVzLm5ldXRyYWwuTjRBXG4gICAgfWBcbiAgfSxcbiAgcGxhY2Vob2xkZXI6IHtcbiAgICBjb2xvcjogc2NhbGVzLm5ldXRyYWwuTjZBXG4gIH0sXG4gIGZvY3VzOiB7XG4gICAgb3V0bGluZTogJ25vbmUnLFxuICAgIGJveFNoYWRvdzogYGluc2V0IDAgMCAycHggJHtzY2FsZXMubmV1dHJhbC5ONEF9LCBpbnNldCAwIDAgMCAxcHggJHtcbiAgICAgIHNjYWxlcy5ibHVlLkI3XG4gICAgfSwgMCAwIDAgM3B4ICR7c2NhbGVzLmJsdWUuQjRBfWBcbiAgfSxcbiAgZGlzYWJsZWQ6IHtcbiAgICBib3hTaGFkb3c6IGBpbnNldCAwIDAgMCAxcHggJHtzY2FsZXMubmV1dHJhbC5ONEF9YCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHNjYWxlcy5uZXV0cmFsLk4yXG4gIH1cbn0pXG5cbkFwcGVhcmFuY2VzLm5ldXRyYWwgPSBUaGVtZXIuY3JlYXRlSW5wdXRBcHBlYXJhbmNlKHtcbiAgYmFzZToge1xuICAgIGJhY2tncm91bmRDb2xvcjogc2NhbGVzLm5ldXRyYWwuTjJBXG4gIH0sXG4gIGludmFsaWQ6IHtcbiAgICBib3hTaGFkb3c6IGBpbnNldCAwIDAgMCAxcHggJHtwYWxldHRlLnJlZC5iYXNlfWBcbiAgfSxcbiAgcGxhY2Vob2xkZXI6IHtcbiAgICBjb2xvcjogc2NhbGVzLm5ldXRyYWwuTjZBXG4gIH0sXG4gIGZvY3VzOiB7XG4gICAgb3V0bGluZTogJ25vbmUnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICBib3hTaGFkb3c6IGAwIDAgMCAycHggJHtzY2FsZXMuYmx1ZS5CNkF9YFxuICB9LFxuICBkaXNhYmxlZDoge1xuICAgIGJveFNoYWRvdzogYGluc2V0IDAgMCAwIDFweCAke3NjYWxlcy5uZXV0cmFsLk40QX1gLFxuICAgIGJhY2tncm91bmRDb2xvcjogc2NhbGVzLm5ldXRyYWwuTjJcbiAgfVxufSlcblxuQXBwZWFyYW5jZXMuZWRpdGFibGVDZWxsID0gVGhlbWVyLmNyZWF0ZUlucHV0QXBwZWFyYW5jZSh7XG4gIGJhc2U6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHNjYWxlcy5uZXV0cmFsLk4yQVxuICB9LFxuICBpbnZhbGlkOiB7XG4gICAgYm94U2hhZG93OiBgaW5zZXQgMCAwIDAgMXB4ICR7cGFsZXR0ZS5yZWQuYmFzZX1gXG4gIH0sXG4gIHBsYWNlaG9sZGVyOiB7XG4gICAgY29sb3I6IHNjYWxlcy5uZXV0cmFsLk42QVxuICB9LFxuICBmb2N1czoge1xuICAgIG91dGxpbmU6ICdub25lJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgYm94U2hhZG93OiBgMCAwIDAgMnB4ICR7c2NhbGVzLmJsdWUuQjd9YFxuICB9LFxuICBkaXNhYmxlZDoge1xuICAgIGJveFNoYWRvdzogYGluc2V0IDAgMCAwIDFweCAke3NjYWxlcy5uZXV0cmFsLk40QX1gLFxuICAgIGJhY2tncm91bmRDb2xvcjogc2NhbGVzLm5ldXRyYWwuTjJcbiAgfVxufSlcblxuLyoqXG4gKiBHZXQgdGhlIGFwcGVhcmFuY2Ugb2YgYSBgVGV4dElucHV0YC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBhcHBlYXJhbmNlXG4gKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBhcHBlYXJhbmNlIG9iamVjdC5cbiAqL1xuY29uc3QgZ2V0VGV4dGFyZWFBcHBlYXJhbmNlID0gYXBwZWFyYW5jZSA9PiB7XG4gIHN3aXRjaCAoYXBwZWFyYW5jZSkge1xuICAgIGNhc2UgJ25ldXRyYWwnOlxuICAgICAgcmV0dXJuIEFwcGVhcmFuY2VzLm5ldXRyYWxcbiAgICBjYXNlICdlZGl0YWJsZS1jZWxsJzpcbiAgICAgIHJldHVybiBBcHBlYXJhbmNlcy5lZGl0YWJsZUNlbGxcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIEFwcGVhcmFuY2VzLmRlZmF1bHRcbiAgfVxufVxuXG4vKipcbiAqIEdldCB0aGUgY2xhc3NOYW1lIG9mIGEgYFRleHRJbnB1dGAuXG4gKiBAcGFyYW0ge3N0cmluZ30gYXBwZWFyYW5jZVxuICogQHJldHVybiB7c3RyaW5nfSB0aGUgYXBwZWFyYW5jZSBjbGFzcyBuYW1lLlxuICovXG5leHBvcnQgZGVmYXVsdCBtZW1vaXplQ2xhc3NOYW1lKGdldFRleHRhcmVhQXBwZWFyYW5jZSlcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLEVBQXBCO0FBRUFBLFdBQVcsV0FBWCxHQUFzQkMsY0FBQSxDQUFPQyxxQkFBUCxDQUE2QjtFQUNqREMsSUFBSSxFQUFFO0lBQ0pDLGVBQWUsRUFBRSxPQURiO0lBRUpDLFNBQVMsNEJBQXFCQyxrQkFBQSxDQUFPQyxPQUFQLENBQWVDLEdBQXBDLCtCQUNQRixrQkFBQSxDQUFPQyxPQUFQLENBQWVFLEdBRFI7RUFGTCxDQUQyQztFQU9qREMsT0FBTyxFQUFFO0lBQ1BMLFNBQVMsNEJBQXFCTSxtQkFBQSxDQUFRQyxHQUFSLENBQVlULElBQWpDLCtCQUNQRyxrQkFBQSxDQUFPQyxPQUFQLENBQWVFLEdBRFI7RUFERixDQVB3QztFQVlqREksV0FBVyxFQUFFO0lBQ1hDLEtBQUssRUFBRVIsa0JBQUEsQ0FBT0MsT0FBUCxDQUFlUTtFQURYLENBWm9DO0VBZWpEQyxLQUFLLEVBQUU7SUFDTEMsT0FBTyxFQUFFLE1BREo7SUFFTFosU0FBUywwQkFBbUJDLGtCQUFBLENBQU9DLE9BQVAsQ0FBZUUsR0FBbEMsK0JBQ1BILGtCQUFBLENBQU9ZLElBQVAsQ0FBWUMsRUFETCx5QkFFTWIsa0JBQUEsQ0FBT1ksSUFBUCxDQUFZRSxHQUZsQjtFQUZKLENBZjBDO0VBcUJqREMsUUFBUSxFQUFFO0lBQ1JoQixTQUFTLDRCQUFxQkMsa0JBQUEsQ0FBT0MsT0FBUCxDQUFlRSxHQUFwQyxDQUREO0lBRVJMLGVBQWUsRUFBRUUsa0JBQUEsQ0FBT0MsT0FBUCxDQUFlZTtFQUZ4QjtBQXJCdUMsQ0FBN0IsQ0FBdEI7QUEyQkF0QixXQUFXLENBQUNPLE9BQVosR0FBc0JOLGNBQUEsQ0FBT0MscUJBQVAsQ0FBNkI7RUFDakRDLElBQUksRUFBRTtJQUNKQyxlQUFlLEVBQUVFLGtCQUFBLENBQU9DLE9BQVAsQ0FBZWdCO0VBRDVCLENBRDJDO0VBSWpEYixPQUFPLEVBQUU7SUFDUEwsU0FBUyw0QkFBcUJNLG1CQUFBLENBQVFDLEdBQVIsQ0FBWVQsSUFBakM7RUFERixDQUp3QztFQU9qRFUsV0FBVyxFQUFFO0lBQ1hDLEtBQUssRUFBRVIsa0JBQUEsQ0FBT0MsT0FBUCxDQUFlUTtFQURYLENBUG9DO0VBVWpEQyxLQUFLLEVBQUU7SUFDTEMsT0FBTyxFQUFFLE1BREo7SUFFTGIsZUFBZSxFQUFFLE9BRlo7SUFHTEMsU0FBUyxzQkFBZUMsa0JBQUEsQ0FBT1ksSUFBUCxDQUFZTSxHQUEzQjtFQUhKLENBVjBDO0VBZWpESCxRQUFRLEVBQUU7SUFDUmhCLFNBQVMsNEJBQXFCQyxrQkFBQSxDQUFPQyxPQUFQLENBQWVFLEdBQXBDLENBREQ7SUFFUkwsZUFBZSxFQUFFRSxrQkFBQSxDQUFPQyxPQUFQLENBQWVlO0VBRnhCO0FBZnVDLENBQTdCLENBQXRCO0FBcUJBdEIsV0FBVyxDQUFDeUIsWUFBWixHQUEyQnhCLGNBQUEsQ0FBT0MscUJBQVAsQ0FBNkI7RUFDdERDLElBQUksRUFBRTtJQUNKQyxlQUFlLEVBQUVFLGtCQUFBLENBQU9DLE9BQVAsQ0FBZWdCO0VBRDVCLENBRGdEO0VBSXREYixPQUFPLEVBQUU7SUFDUEwsU0FBUyw0QkFBcUJNLG1CQUFBLENBQVFDLEdBQVIsQ0FBWVQsSUFBakM7RUFERixDQUo2QztFQU90RFUsV0FBVyxFQUFFO0lBQ1hDLEtBQUssRUFBRVIsa0JBQUEsQ0FBT0MsT0FBUCxDQUFlUTtFQURYLENBUHlDO0VBVXREQyxLQUFLLEVBQUU7SUFDTEMsT0FBTyxFQUFFLE1BREo7SUFFTGIsZUFBZSxFQUFFLE9BRlo7SUFHTEMsU0FBUyxzQkFBZUMsa0JBQUEsQ0FBT1ksSUFBUCxDQUFZQyxFQUEzQjtFQUhKLENBVitDO0VBZXRERSxRQUFRLEVBQUU7SUFDUmhCLFNBQVMsNEJBQXFCQyxrQkFBQSxDQUFPQyxPQUFQLENBQWVFLEdBQXBDLENBREQ7SUFFUkwsZUFBZSxFQUFFRSxrQkFBQSxDQUFPQyxPQUFQLENBQWVlO0VBRnhCO0FBZjRDLENBQTdCLENBQTNCO0FBcUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUkscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixDQUFBQyxVQUFVLEVBQUk7RUFDMUMsUUFBUUEsVUFBUjtJQUNFLEtBQUssU0FBTDtNQUNFLE9BQU8zQixXQUFXLENBQUNPLE9BQW5COztJQUNGLEtBQUssZUFBTDtNQUNFLE9BQU9QLFdBQVcsQ0FBQ3lCLFlBQW5COztJQUNGO01BQ0UsT0FBT3pCLFdBQVcsV0FBbEI7RUFOSjtBQVFELENBVEQ7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7ZUFDZSxJQUFBNEIsNEJBQUEsRUFBaUJGLHFCQUFqQixDIn0=