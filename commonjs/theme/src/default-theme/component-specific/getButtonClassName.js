"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _themer = require("../../../../themer");

var _memoizeClassName = _interopRequireDefault(require("../utils/memoizeClassName"));

var _scales = _interopRequireDefault(require("../foundational-styles/scales"));

var _helpers = require("../helpers");

var _shared = require("../shared");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

/**
 * Disabled styles are all the same for all buttons.
 */
var disabled = _shared.defaultControlStyles.disabled;
/**
 * Get button appearance.
 * @param {string} appearance - default, primary, minimal.
 * @param {string} intent - none, success, warning, danger.
 * @return {Object} the appearance of the button.
 */

var getButtonAppearance = function getButtonAppearance(appearance, intent) {
  switch (appearance) {
    case 'primary':
      {
        var _getPrimaryButtonStyl = (0, _helpers.getPrimaryButtonStylesForIntent)(intent),
            linearGradient = _getPrimaryButtonStyl.linearGradient,
            focusColor = _getPrimaryButtonStyl.focusColor;

        return _themer.Themer.createButtonAppearance({
          disabled: disabled,
          base: {
            color: 'white',
            backgroundColor: 'white',
            backgroundImage: linearGradient.base,
            boxShadow: "inset 0 0 0 1px ".concat(_scales["default"].neutral.N5A, ", inset 0 -1px 1px 0 ").concat(_scales["default"].neutral.N2A)
          },
          hover: {
            backgroundImage: linearGradient.hover
          },
          focus: {
            boxShadow: "0 0 0 3px ".concat(focusColor, ", inset 0 0 0 1px ").concat(_scales["default"].neutral.N4A, ", inset 0 -1px 1px 0 ").concat(_scales["default"].neutral.N5A)
          },
          active: {
            backgroundImage: linearGradient.active,
            boxShadow: "inset 0 0 0 1px ".concat(_scales["default"].neutral.N4A, ", inset 0 1px 1px 0 ").concat(_scales["default"].neutral.N2A)
          },
          focusAndActive: {
            boxShadow: "0 0 0 3px ".concat(focusColor, ", inset 0 0 0 1px ").concat(_scales["default"].neutral.N4A, ", inset 0 1px 1px 0 ").concat(_scales["default"].neutral.N2A)
          }
        });
      }

    case 'minimal':
      {
        var intentTextColor = (0, _helpers.getTextColorForIntent)(intent, _scales["default"].blue.B9);
        return _themer.Themer.createButtonAppearance({
          disabled: disabled,
          base: {
            color: intentTextColor,
            backgroundColor: 'transparent'
          },
          hover: {
            backgroundColor: _scales["default"].neutral.N2A
          },
          focus: {
            boxShadow: "0 0 0 3px ".concat(_scales["default"].blue.B5A)
          },
          active: {
            backgroundImage: 'none',
            backgroundColor: _scales["default"].blue.B3A
          },
          focusAndActive: {}
        });
      }

    case 'default':
    default:
      {
        var _intentTextColor = (0, _helpers.getTextColorForIntent)(intent);

        return _themer.Themer.createButtonAppearance({
          disabled: disabled,
          base: _objectSpread({
            color: _intentTextColor
          }, _shared.defaultControlStyles.base),
          hover: _shared.defaultControlStyles.hover,
          focus: _shared.defaultControlStyles.focus,
          active: _shared.defaultControlStyles.active,
          focusAndActive: _shared.defaultControlStyles.focusAndActive
        });
      }
  }
};
/**
 * Get the className of a `Button`|`IconButton`.
 * @param {string} appearance - default, primary, minimal.
 * @param {Intent} intent - none, success, warning, danger.
 * @return {string} the appearance class name.
 */


var _default = (0, _memoizeClassName["default"])(getButtonAppearance);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJkaXNhYmxlZCIsImRlZmF1bHRDb250cm9sU3R5bGVzIiwiZ2V0QnV0dG9uQXBwZWFyYW5jZSIsImFwcGVhcmFuY2UiLCJpbnRlbnQiLCJnZXRQcmltYXJ5QnV0dG9uU3R5bGVzRm9ySW50ZW50IiwibGluZWFyR3JhZGllbnQiLCJmb2N1c0NvbG9yIiwiVGhlbWVyIiwiY3JlYXRlQnV0dG9uQXBwZWFyYW5jZSIsImJhc2UiLCJjb2xvciIsImJhY2tncm91bmRDb2xvciIsImJhY2tncm91bmRJbWFnZSIsImJveFNoYWRvdyIsInNjYWxlcyIsIm5ldXRyYWwiLCJONUEiLCJOMkEiLCJob3ZlciIsImZvY3VzIiwiTjRBIiwiYWN0aXZlIiwiZm9jdXNBbmRBY3RpdmUiLCJpbnRlbnRUZXh0Q29sb3IiLCJnZXRUZXh0Q29sb3JGb3JJbnRlbnQiLCJibHVlIiwiQjkiLCJCNUEiLCJCM0EiLCJtZW1vaXplQ2xhc3NOYW1lIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3RoZW1lL3NyYy9kZWZhdWx0LXRoZW1lL2NvbXBvbmVudC1zcGVjaWZpYy9nZXRCdXR0b25DbGFzc05hbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGhlbWVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vdGhlbWVyJ1xuaW1wb3J0IG1lbW9pemVDbGFzc05hbWUgZnJvbSAnLi4vdXRpbHMvbWVtb2l6ZUNsYXNzTmFtZSdcbmltcG9ydCBzY2FsZXMgZnJvbSAnLi4vZm91bmRhdGlvbmFsLXN0eWxlcy9zY2FsZXMnXG5pbXBvcnQge1xuICBnZXRUZXh0Q29sb3JGb3JJbnRlbnQsXG4gIGdldFByaW1hcnlCdXR0b25TdHlsZXNGb3JJbnRlbnRcbn0gZnJvbSAnLi4vaGVscGVycydcbmltcG9ydCB7IGRlZmF1bHRDb250cm9sU3R5bGVzIH0gZnJvbSAnLi4vc2hhcmVkJ1xuXG4vKipcbiAqIERpc2FibGVkIHN0eWxlcyBhcmUgYWxsIHRoZSBzYW1lIGZvciBhbGwgYnV0dG9ucy5cbiAqL1xuY29uc3QgeyBkaXNhYmxlZCB9ID0gZGVmYXVsdENvbnRyb2xTdHlsZXNcblxuLyoqXG4gKiBHZXQgYnV0dG9uIGFwcGVhcmFuY2UuXG4gKiBAcGFyYW0ge3N0cmluZ30gYXBwZWFyYW5jZSAtIGRlZmF1bHQsIHByaW1hcnksIG1pbmltYWwuXG4gKiBAcGFyYW0ge3N0cmluZ30gaW50ZW50IC0gbm9uZSwgc3VjY2Vzcywgd2FybmluZywgZGFuZ2VyLlxuICogQHJldHVybiB7T2JqZWN0fSB0aGUgYXBwZWFyYW5jZSBvZiB0aGUgYnV0dG9uLlxuICovXG5jb25zdCBnZXRCdXR0b25BcHBlYXJhbmNlID0gKGFwcGVhcmFuY2UsIGludGVudCkgPT4ge1xuICBzd2l0Y2ggKGFwcGVhcmFuY2UpIHtcbiAgICBjYXNlICdwcmltYXJ5Jzoge1xuICAgICAgY29uc3QgeyBsaW5lYXJHcmFkaWVudCwgZm9jdXNDb2xvciB9ID0gZ2V0UHJpbWFyeUJ1dHRvblN0eWxlc0ZvckludGVudChcbiAgICAgICAgaW50ZW50XG4gICAgICApXG4gICAgICByZXR1cm4gVGhlbWVyLmNyZWF0ZUJ1dHRvbkFwcGVhcmFuY2Uoe1xuICAgICAgICBkaXNhYmxlZCxcbiAgICAgICAgYmFzZToge1xuICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGxpbmVhckdyYWRpZW50LmJhc2UsXG4gICAgICAgICAgYm94U2hhZG93OiBgaW5zZXQgMCAwIDAgMXB4ICR7XG4gICAgICAgICAgICBzY2FsZXMubmV1dHJhbC5ONUFcbiAgICAgICAgICB9LCBpbnNldCAwIC0xcHggMXB4IDAgJHtzY2FsZXMubmV1dHJhbC5OMkF9YFxuICAgICAgICB9LFxuICAgICAgICBob3Zlcjoge1xuICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogbGluZWFyR3JhZGllbnQuaG92ZXJcbiAgICAgICAgfSxcbiAgICAgICAgZm9jdXM6IHtcbiAgICAgICAgICBib3hTaGFkb3c6IGAwIDAgMCAzcHggJHtmb2N1c0NvbG9yfSwgaW5zZXQgMCAwIDAgMXB4ICR7XG4gICAgICAgICAgICBzY2FsZXMubmV1dHJhbC5ONEFcbiAgICAgICAgICB9LCBpbnNldCAwIC0xcHggMXB4IDAgJHtzY2FsZXMubmV1dHJhbC5ONUF9YFxuICAgICAgICB9LFxuICAgICAgICBhY3RpdmU6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGxpbmVhckdyYWRpZW50LmFjdGl2ZSxcbiAgICAgICAgICBib3hTaGFkb3c6IGBpbnNldCAwIDAgMCAxcHggJHtcbiAgICAgICAgICAgIHNjYWxlcy5uZXV0cmFsLk40QVxuICAgICAgICAgIH0sIGluc2V0IDAgMXB4IDFweCAwICR7c2NhbGVzLm5ldXRyYWwuTjJBfWBcbiAgICAgICAgfSxcbiAgICAgICAgZm9jdXNBbmRBY3RpdmU6IHtcbiAgICAgICAgICBib3hTaGFkb3c6IGAwIDAgMCAzcHggJHtmb2N1c0NvbG9yfSwgaW5zZXQgMCAwIDAgMXB4ICR7XG4gICAgICAgICAgICBzY2FsZXMubmV1dHJhbC5ONEFcbiAgICAgICAgICB9LCBpbnNldCAwIDFweCAxcHggMCAke3NjYWxlcy5uZXV0cmFsLk4yQX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY2FzZSAnbWluaW1hbCc6IHtcbiAgICAgIGNvbnN0IGludGVudFRleHRDb2xvciA9IGdldFRleHRDb2xvckZvckludGVudChpbnRlbnQsIHNjYWxlcy5ibHVlLkI5KVxuICAgICAgcmV0dXJuIFRoZW1lci5jcmVhdGVCdXR0b25BcHBlYXJhbmNlKHtcbiAgICAgICAgZGlzYWJsZWQsXG4gICAgICAgIGJhc2U6IHtcbiAgICAgICAgICBjb2xvcjogaW50ZW50VGV4dENvbG9yLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50J1xuICAgICAgICB9LFxuICAgICAgICBob3Zlcjoge1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogc2NhbGVzLm5ldXRyYWwuTjJBXG4gICAgICAgIH0sXG4gICAgICAgIGZvY3VzOiB7XG4gICAgICAgICAgYm94U2hhZG93OiBgMCAwIDAgM3B4ICR7c2NhbGVzLmJsdWUuQjVBfWBcbiAgICAgICAgfSxcbiAgICAgICAgYWN0aXZlOiB7XG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOiAnbm9uZScsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBzY2FsZXMuYmx1ZS5CM0FcbiAgICAgICAgfSxcbiAgICAgICAgZm9jdXNBbmRBY3RpdmU6IHt9XG4gICAgICB9KVxuICAgIH1cblxuICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIGNvbnN0IGludGVudFRleHRDb2xvciA9IGdldFRleHRDb2xvckZvckludGVudChpbnRlbnQpXG4gICAgICByZXR1cm4gVGhlbWVyLmNyZWF0ZUJ1dHRvbkFwcGVhcmFuY2Uoe1xuICAgICAgICBkaXNhYmxlZCxcbiAgICAgICAgYmFzZToge1xuICAgICAgICAgIGNvbG9yOiBpbnRlbnRUZXh0Q29sb3IsXG4gICAgICAgICAgLi4uZGVmYXVsdENvbnRyb2xTdHlsZXMuYmFzZVxuICAgICAgICB9LFxuICAgICAgICBob3ZlcjogZGVmYXVsdENvbnRyb2xTdHlsZXMuaG92ZXIsXG4gICAgICAgIGZvY3VzOiBkZWZhdWx0Q29udHJvbFN0eWxlcy5mb2N1cyxcbiAgICAgICAgYWN0aXZlOiBkZWZhdWx0Q29udHJvbFN0eWxlcy5hY3RpdmUsXG4gICAgICAgIGZvY3VzQW5kQWN0aXZlOiBkZWZhdWx0Q29udHJvbFN0eWxlcy5mb2N1c0FuZEFjdGl2ZVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBHZXQgdGhlIGNsYXNzTmFtZSBvZiBhIGBCdXR0b25gfGBJY29uQnV0dG9uYC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBhcHBlYXJhbmNlIC0gZGVmYXVsdCwgcHJpbWFyeSwgbWluaW1hbC5cbiAqIEBwYXJhbSB7SW50ZW50fSBpbnRlbnQgLSBub25lLCBzdWNjZXNzLCB3YXJuaW5nLCBkYW5nZXIuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBhcHBlYXJhbmNlIGNsYXNzIG5hbWUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IG1lbW9pemVDbGFzc05hbWUoZ2V0QnV0dG9uQXBwZWFyYW5jZSlcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFJQTs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBUUEsUUFBUixHQUFxQkMsNEJBQXJCLENBQVFELFFBQVI7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUUsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDQyxVQUFELEVBQWFDLE1BQWIsRUFBd0I7RUFDbEQsUUFBUUQsVUFBUjtJQUNFLEtBQUssU0FBTDtNQUFnQjtRQUNkLDRCQUF1QyxJQUFBRSx3Q0FBQSxFQUNyQ0QsTUFEcUMsQ0FBdkM7UUFBQSxJQUFRRSxjQUFSLHlCQUFRQSxjQUFSO1FBQUEsSUFBd0JDLFVBQXhCLHlCQUF3QkEsVUFBeEI7O1FBR0EsT0FBT0MsY0FBQSxDQUFPQyxzQkFBUCxDQUE4QjtVQUNuQ1QsUUFBUSxFQUFSQSxRQURtQztVQUVuQ1UsSUFBSSxFQUFFO1lBQ0pDLEtBQUssRUFBRSxPQURIO1lBRUpDLGVBQWUsRUFBRSxPQUZiO1lBR0pDLGVBQWUsRUFBRVAsY0FBYyxDQUFDSSxJQUg1QjtZQUlKSSxTQUFTLDRCQUNQQyxrQkFBQSxDQUFPQyxPQUFQLENBQWVDLEdBRFIsa0NBRWVGLGtCQUFBLENBQU9DLE9BQVAsQ0FBZUUsR0FGOUI7VUFKTCxDQUY2QjtVQVVuQ0MsS0FBSyxFQUFFO1lBQ0xOLGVBQWUsRUFBRVAsY0FBYyxDQUFDYTtVQUQzQixDQVY0QjtVQWFuQ0MsS0FBSyxFQUFFO1lBQ0xOLFNBQVMsc0JBQWVQLFVBQWYsK0JBQ1BRLGtCQUFBLENBQU9DLE9BQVAsQ0FBZUssR0FEUixrQ0FFZU4sa0JBQUEsQ0FBT0MsT0FBUCxDQUFlQyxHQUY5QjtVQURKLENBYjRCO1VBa0JuQ0ssTUFBTSxFQUFFO1lBQ05ULGVBQWUsRUFBRVAsY0FBYyxDQUFDZ0IsTUFEMUI7WUFFTlIsU0FBUyw0QkFDUEMsa0JBQUEsQ0FBT0MsT0FBUCxDQUFlSyxHQURSLGlDQUVjTixrQkFBQSxDQUFPQyxPQUFQLENBQWVFLEdBRjdCO1VBRkgsQ0FsQjJCO1VBd0JuQ0ssY0FBYyxFQUFFO1lBQ2RULFNBQVMsc0JBQWVQLFVBQWYsK0JBQ1BRLGtCQUFBLENBQU9DLE9BQVAsQ0FBZUssR0FEUixpQ0FFY04sa0JBQUEsQ0FBT0MsT0FBUCxDQUFlRSxHQUY3QjtVQURLO1FBeEJtQixDQUE5QixDQUFQO01BOEJEOztJQUVELEtBQUssU0FBTDtNQUFnQjtRQUNkLElBQU1NLGVBQWUsR0FBRyxJQUFBQyw4QkFBQSxFQUFzQnJCLE1BQXRCLEVBQThCVyxrQkFBQSxDQUFPVyxJQUFQLENBQVlDLEVBQTFDLENBQXhCO1FBQ0EsT0FBT25CLGNBQUEsQ0FBT0Msc0JBQVAsQ0FBOEI7VUFDbkNULFFBQVEsRUFBUkEsUUFEbUM7VUFFbkNVLElBQUksRUFBRTtZQUNKQyxLQUFLLEVBQUVhLGVBREg7WUFFSlosZUFBZSxFQUFFO1VBRmIsQ0FGNkI7VUFNbkNPLEtBQUssRUFBRTtZQUNMUCxlQUFlLEVBQUVHLGtCQUFBLENBQU9DLE9BQVAsQ0FBZUU7VUFEM0IsQ0FONEI7VUFTbkNFLEtBQUssRUFBRTtZQUNMTixTQUFTLHNCQUFlQyxrQkFBQSxDQUFPVyxJQUFQLENBQVlFLEdBQTNCO1VBREosQ0FUNEI7VUFZbkNOLE1BQU0sRUFBRTtZQUNOVCxlQUFlLEVBQUUsTUFEWDtZQUVORCxlQUFlLEVBQUVHLGtCQUFBLENBQU9XLElBQVAsQ0FBWUc7VUFGdkIsQ0FaMkI7VUFnQm5DTixjQUFjLEVBQUU7UUFoQm1CLENBQTlCLENBQVA7TUFrQkQ7O0lBRUQsS0FBSyxTQUFMO0lBQ0E7TUFBUztRQUNQLElBQU1DLGdCQUFlLEdBQUcsSUFBQUMsOEJBQUEsRUFBc0JyQixNQUF0QixDQUF4Qjs7UUFDQSxPQUFPSSxjQUFBLENBQU9DLHNCQUFQLENBQThCO1VBQ25DVCxRQUFRLEVBQVJBLFFBRG1DO1VBRW5DVSxJQUFJO1lBQ0ZDLEtBQUssRUFBRWE7VUFETCxHQUVDdkIsNEJBQUEsQ0FBcUJTLElBRnRCLENBRitCO1VBTW5DUyxLQUFLLEVBQUVsQiw0QkFBQSxDQUFxQmtCLEtBTk87VUFPbkNDLEtBQUssRUFBRW5CLDRCQUFBLENBQXFCbUIsS0FQTztVQVFuQ0UsTUFBTSxFQUFFckIsNEJBQUEsQ0FBcUJxQixNQVJNO1VBU25DQyxjQUFjLEVBQUV0Qiw0QkFBQSxDQUFxQnNCO1FBVEYsQ0FBOUIsQ0FBUDtNQVdEO0VBekVIO0FBMkVELENBNUVEO0FBOEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O2VBQ2UsSUFBQU8sNEJBQUEsRUFBaUI1QixtQkFBakIsQyJ9