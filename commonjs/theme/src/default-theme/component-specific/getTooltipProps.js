"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _tinycolor = _interopRequireDefault(require("tinycolor2"));

var _palette = _interopRequireDefault(require("../foundational-styles/palette"));

var getTooltipProps = function getTooltipProps(appearance) {
  switch (appearance) {
    case 'card':
      return {
        backgroundColor: 'white',
        elevation: 3
      };

    case 'default':
    default:
      return {
        color: 'white',
        backgroundColor: (0, _tinycolor["default"])(_palette["default"].neutral.base).setAlpha(0.95).toString()
      };
  }
};

var _default = getTooltipProps;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJnZXRUb29sdGlwUHJvcHMiLCJhcHBlYXJhbmNlIiwiYmFja2dyb3VuZENvbG9yIiwiZWxldmF0aW9uIiwiY29sb3IiLCJ0aW55Y29sb3IiLCJwYWxldHRlIiwibmV1dHJhbCIsImJhc2UiLCJzZXRBbHBoYSIsInRvU3RyaW5nIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3RoZW1lL3NyYy9kZWZhdWx0LXRoZW1lL2NvbXBvbmVudC1zcGVjaWZpYy9nZXRUb29sdGlwUHJvcHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRpbnljb2xvciBmcm9tICd0aW55Y29sb3IyJ1xuaW1wb3J0IHBhbGV0dGUgZnJvbSAnLi4vZm91bmRhdGlvbmFsLXN0eWxlcy9wYWxldHRlJ1xuXG5jb25zdCBnZXRUb29sdGlwUHJvcHMgPSBhcHBlYXJhbmNlID0+IHtcbiAgc3dpdGNoIChhcHBlYXJhbmNlKSB7XG4gICAgY2FzZSAnY2FyZCc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgICAgIGVsZXZhdGlvbjogM1xuICAgICAgfVxuICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aW55Y29sb3IocGFsZXR0ZS5uZXV0cmFsLmJhc2UpXG4gICAgICAgICAgLnNldEFscGhhKDAuOTUpXG4gICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRUb29sdGlwUHJvcHNcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFBQyxVQUFVLEVBQUk7RUFDcEMsUUFBUUEsVUFBUjtJQUNFLEtBQUssTUFBTDtNQUNFLE9BQU87UUFDTEMsZUFBZSxFQUFFLE9BRFo7UUFFTEMsU0FBUyxFQUFFO01BRk4sQ0FBUDs7SUFJRixLQUFLLFNBQUw7SUFDQTtNQUNFLE9BQU87UUFDTEMsS0FBSyxFQUFFLE9BREY7UUFFTEYsZUFBZSxFQUFFLElBQUFHLHFCQUFBLEVBQVVDLG1CQUFBLENBQVFDLE9BQVIsQ0FBZ0JDLElBQTFCLEVBQ2RDLFFBRGMsQ0FDTCxJQURLLEVBRWRDLFFBRmM7TUFGWixDQUFQO0VBUko7QUFlRCxDQWhCRDs7ZUFrQmVWLGUifQ==