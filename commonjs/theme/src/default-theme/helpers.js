"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.linearGradient = exports.getTextColorForIntent = exports.getPrimaryButtonStylesForIntent = exports.getLinearGradientWithStates = void 0;

var _tinycolor = _interopRequireDefault(require("tinycolor2"));

var _constants = require("../../../constants");

var _colors = _interopRequireDefault(require("./foundational-styles/colors"));

/**
 * @param {String} top - color.
 * @param {String} bottom - color.
 * @return {String} CSS background propery.
 */
var linearGradient = function linearGradient(top, bottom) {
  return "linear-gradient(to bottom, ".concat(top, ", ").concat(bottom, ")");
};
/**
 * @param {Intent} intent
 * @return {String} color
 */


exports.linearGradient = linearGradient;

var getTextColorForIntent = function getTextColorForIntent(intent, defaultColor) {
  switch (intent) {
    case _constants.Intent.SUCCESS:
      return _colors["default"].text.success;

    case _constants.Intent.DANGER:
      return _colors["default"].text.danger;

    case _constants.Intent.WARNING:
      return _colors["default"].text.warning;

    default:
      return defaultColor || _colors["default"].text["default"];
  }
};
/**
 * @param {String} startColor
 * @param {String} endColor
 * @param {Number} intensityMultiplier - Some colors need more darkening.
 */


exports.getTextColorForIntent = getTextColorForIntent;

var getLinearGradientWithStates = function getLinearGradientWithStates(startColor, endColor) {
  var intensityMultiplier = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  return {
    base: linearGradient(startColor, endColor),
    hover: linearGradient((0, _tinycolor["default"])(startColor).darken(5 * intensityMultiplier).toString(), (0, _tinycolor["default"])(endColor).darken(5 * intensityMultiplier).toString()),
    active: linearGradient((0, _tinycolor["default"])(endColor).darken(5 * intensityMultiplier).toString(), (0, _tinycolor["default"])(endColor).darken(5 * intensityMultiplier).toString())
  };
};
/**
 * Gradients in the default theme have a intentional hue shift.
 * @param {Intent} intent - intent of the gradient.
 * @return {Object} { base, hover, active }
 */


exports.getLinearGradientWithStates = getLinearGradientWithStates;

var getPrimaryButtonStylesForIntent = function getPrimaryButtonStylesForIntent(intent) {
  switch (intent) {
    case _constants.Intent.SUCCESS:
      {
        var startColor = '#23C277';
        var endColor = '#399D6C';
        return {
          linearGradient: getLinearGradientWithStates(startColor, endColor),
          focusColor: (0, _tinycolor["default"])(startColor).setAlpha(0.4).toString()
        };
      }

    case _constants.Intent.WARNING:
      {
        var _startColor = '#EE9913';
        var _endColor = '#D9822B';
        return {
          linearGradient: getLinearGradientWithStates(_startColor, _endColor),
          focusColor: (0, _tinycolor["default"])(_startColor).setAlpha(0.4).toString()
        };
      }

    case _constants.Intent.DANGER:
      {
        var _startColor2 = '#EC4C47';
        var _endColor2 = '#D64540';
        return {
          linearGradient: getLinearGradientWithStates(_startColor2, _endColor2),
          focusColor: (0, _tinycolor["default"])(_startColor2).setAlpha(0.4).toString()
        };
      }

    default:
      {
        var _startColor3 = '#0788DE';
        var _endColor3 = '#116AB8';
        return {
          linearGradient: getLinearGradientWithStates(_startColor3, _endColor3),
          focusColor: (0, _tinycolor["default"])(_startColor3).setAlpha(0.4).toString()
        };
      }
  }
};

exports.getPrimaryButtonStylesForIntent = getPrimaryButtonStylesForIntent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJsaW5lYXJHcmFkaWVudCIsInRvcCIsImJvdHRvbSIsImdldFRleHRDb2xvckZvckludGVudCIsImludGVudCIsImRlZmF1bHRDb2xvciIsIkludGVudCIsIlNVQ0NFU1MiLCJjb2xvcnMiLCJ0ZXh0Iiwic3VjY2VzcyIsIkRBTkdFUiIsImRhbmdlciIsIldBUk5JTkciLCJ3YXJuaW5nIiwiZ2V0TGluZWFyR3JhZGllbnRXaXRoU3RhdGVzIiwic3RhcnRDb2xvciIsImVuZENvbG9yIiwiaW50ZW5zaXR5TXVsdGlwbGllciIsImJhc2UiLCJob3ZlciIsInRpbnljb2xvciIsImRhcmtlbiIsInRvU3RyaW5nIiwiYWN0aXZlIiwiZ2V0UHJpbWFyeUJ1dHRvblN0eWxlc0ZvckludGVudCIsImZvY3VzQ29sb3IiLCJzZXRBbHBoYSJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90aGVtZS9zcmMvZGVmYXVsdC10aGVtZS9oZWxwZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0aW55Y29sb3IgZnJvbSAndGlueWNvbG9yMidcbmltcG9ydCB7IEludGVudCB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cydcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi9mb3VuZGF0aW9uYWwtc3R5bGVzL2NvbG9ycydcblxuLyoqXG4gKiBAcGFyYW0ge1N0cmluZ30gdG9wIC0gY29sb3IuXG4gKiBAcGFyYW0ge1N0cmluZ30gYm90dG9tIC0gY29sb3IuXG4gKiBAcmV0dXJuIHtTdHJpbmd9IENTUyBiYWNrZ3JvdW5kIHByb3BlcnkuXG4gKi9cbmNvbnN0IGxpbmVhckdyYWRpZW50ID0gKHRvcCwgYm90dG9tKSA9PiB7XG4gIHJldHVybiBgbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgJHt0b3B9LCAke2JvdHRvbX0pYFxufVxuXG4vKipcbiAqIEBwYXJhbSB7SW50ZW50fSBpbnRlbnRcbiAqIEByZXR1cm4ge1N0cmluZ30gY29sb3JcbiAqL1xuY29uc3QgZ2V0VGV4dENvbG9yRm9ySW50ZW50ID0gKGludGVudCwgZGVmYXVsdENvbG9yKSA9PiB7XG4gIHN3aXRjaCAoaW50ZW50KSB7XG4gICAgY2FzZSBJbnRlbnQuU1VDQ0VTUzpcbiAgICAgIHJldHVybiBjb2xvcnMudGV4dC5zdWNjZXNzXG4gICAgY2FzZSBJbnRlbnQuREFOR0VSOlxuICAgICAgcmV0dXJuIGNvbG9ycy50ZXh0LmRhbmdlclxuICAgIGNhc2UgSW50ZW50LldBUk5JTkc6XG4gICAgICByZXR1cm4gY29sb3JzLnRleHQud2FybmluZ1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZGVmYXVsdENvbG9yIHx8IGNvbG9ycy50ZXh0LmRlZmF1bHRcbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdGFydENvbG9yXG4gKiBAcGFyYW0ge1N0cmluZ30gZW5kQ29sb3JcbiAqIEBwYXJhbSB7TnVtYmVyfSBpbnRlbnNpdHlNdWx0aXBsaWVyIC0gU29tZSBjb2xvcnMgbmVlZCBtb3JlIGRhcmtlbmluZy5cbiAqL1xuY29uc3QgZ2V0TGluZWFyR3JhZGllbnRXaXRoU3RhdGVzID0gKFxuICBzdGFydENvbG9yLFxuICBlbmRDb2xvcixcbiAgaW50ZW5zaXR5TXVsdGlwbGllciA9IDFcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIGJhc2U6IGxpbmVhckdyYWRpZW50KHN0YXJ0Q29sb3IsIGVuZENvbG9yKSxcbiAgICBob3ZlcjogbGluZWFyR3JhZGllbnQoXG4gICAgICB0aW55Y29sb3Ioc3RhcnRDb2xvcilcbiAgICAgICAgLmRhcmtlbig1ICogaW50ZW5zaXR5TXVsdGlwbGllcilcbiAgICAgICAgLnRvU3RyaW5nKCksXG4gICAgICB0aW55Y29sb3IoZW5kQ29sb3IpXG4gICAgICAgIC5kYXJrZW4oNSAqIGludGVuc2l0eU11bHRpcGxpZXIpXG4gICAgICAgIC50b1N0cmluZygpXG4gICAgKSxcbiAgICBhY3RpdmU6IGxpbmVhckdyYWRpZW50KFxuICAgICAgdGlueWNvbG9yKGVuZENvbG9yKVxuICAgICAgICAuZGFya2VuKDUgKiBpbnRlbnNpdHlNdWx0aXBsaWVyKVxuICAgICAgICAudG9TdHJpbmcoKSxcbiAgICAgIHRpbnljb2xvcihlbmRDb2xvcilcbiAgICAgICAgLmRhcmtlbig1ICogaW50ZW5zaXR5TXVsdGlwbGllcilcbiAgICAgICAgLnRvU3RyaW5nKClcbiAgICApXG4gIH1cbn1cblxuLyoqXG4gKiBHcmFkaWVudHMgaW4gdGhlIGRlZmF1bHQgdGhlbWUgaGF2ZSBhIGludGVudGlvbmFsIGh1ZSBzaGlmdC5cbiAqIEBwYXJhbSB7SW50ZW50fSBpbnRlbnQgLSBpbnRlbnQgb2YgdGhlIGdyYWRpZW50LlxuICogQHJldHVybiB7T2JqZWN0fSB7IGJhc2UsIGhvdmVyLCBhY3RpdmUgfVxuICovXG5jb25zdCBnZXRQcmltYXJ5QnV0dG9uU3R5bGVzRm9ySW50ZW50ID0gaW50ZW50ID0+IHtcbiAgc3dpdGNoIChpbnRlbnQpIHtcbiAgICBjYXNlIEludGVudC5TVUNDRVNTOiB7XG4gICAgICBjb25zdCBzdGFydENvbG9yID0gJyMyM0MyNzcnXG4gICAgICBjb25zdCBlbmRDb2xvciA9ICcjMzk5RDZDJ1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGluZWFyR3JhZGllbnQ6IGdldExpbmVhckdyYWRpZW50V2l0aFN0YXRlcyhzdGFydENvbG9yLCBlbmRDb2xvciksXG4gICAgICAgIGZvY3VzQ29sb3I6IHRpbnljb2xvcihzdGFydENvbG9yKVxuICAgICAgICAgIC5zZXRBbHBoYSgwLjQpXG4gICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlIEludGVudC5XQVJOSU5HOiB7XG4gICAgICBjb25zdCBzdGFydENvbG9yID0gJyNFRTk5MTMnXG4gICAgICBjb25zdCBlbmRDb2xvciA9ICcjRDk4MjJCJ1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGluZWFyR3JhZGllbnQ6IGdldExpbmVhckdyYWRpZW50V2l0aFN0YXRlcyhzdGFydENvbG9yLCBlbmRDb2xvciksXG4gICAgICAgIGZvY3VzQ29sb3I6IHRpbnljb2xvcihzdGFydENvbG9yKVxuICAgICAgICAgIC5zZXRBbHBoYSgwLjQpXG4gICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYXNlIEludGVudC5EQU5HRVI6IHtcbiAgICAgIGNvbnN0IHN0YXJ0Q29sb3IgPSAnI0VDNEM0NydcbiAgICAgIGNvbnN0IGVuZENvbG9yID0gJyNENjQ1NDAnXG4gICAgICByZXR1cm4ge1xuICAgICAgICBsaW5lYXJHcmFkaWVudDogZ2V0TGluZWFyR3JhZGllbnRXaXRoU3RhdGVzKHN0YXJ0Q29sb3IsIGVuZENvbG9yKSxcbiAgICAgICAgZm9jdXNDb2xvcjogdGlueWNvbG9yKHN0YXJ0Q29sb3IpXG4gICAgICAgICAgLnNldEFscGhhKDAuNClcbiAgICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIGNvbnN0IHN0YXJ0Q29sb3IgPSAnIzA3ODhERSdcbiAgICAgIGNvbnN0IGVuZENvbG9yID0gJyMxMTZBQjgnXG4gICAgICByZXR1cm4ge1xuICAgICAgICBsaW5lYXJHcmFkaWVudDogZ2V0TGluZWFyR3JhZGllbnRXaXRoU3RhdGVzKHN0YXJ0Q29sb3IsIGVuZENvbG9yKSxcbiAgICAgICAgZm9jdXNDb2xvcjogdGlueWNvbG9yKHN0YXJ0Q29sb3IpXG4gICAgICAgICAgLnNldEFscGhhKDAuNClcbiAgICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQge1xuICBsaW5lYXJHcmFkaWVudCxcbiAgZ2V0VGV4dENvbG9yRm9ySW50ZW50LFxuICBnZXRMaW5lYXJHcmFkaWVudFdpdGhTdGF0ZXMsXG4gIGdldFByaW1hcnlCdXR0b25TdHlsZXNGb3JJbnRlbnRcbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FB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