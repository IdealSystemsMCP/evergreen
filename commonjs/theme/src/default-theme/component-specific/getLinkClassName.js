"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _tinycolor = _interopRequireDefault(require("tinycolor2"));

var _themer = require("../../../../themer");

var _memoizeClassName = _interopRequireDefault(require("../utils/memoizeClassName"));

var _palette = _interopRequireDefault(require("../foundational-styles/palette"));

/**
 * The link appearance unlike the Button is based on the color property.
 * Currently the Link does not support the Intent or the appearance interface.
 * @param {string} color
 * @return {Object} appearance of the link.
 */
var getLinkAppearance = function getLinkAppearance(color) {
  switch (color) {
    case 'neutral':
      return _themer.Themer.createLinkAppearance({
        base: {
          color: _palette["default"].neutral.base
        },
        hover: {
          color: (0, _tinycolor["default"])(_palette["default"].neutral.base).lighten(10).toString()
        },
        active: {
          color: (0, _tinycolor["default"])(_palette["default"].neutral.base).darken(10).toString()
        },
        focus: {
          boxShadow: "0 0 0 2px ".concat((0, _tinycolor["default"])(_palette["default"].neutral.base).setAlpha(0.4).toString())
        }
      });

    case 'green':
      return _themer.Themer.createLinkAppearance({
        base: {
          color: _palette["default"].green.base
        },
        hover: {
          color: (0, _tinycolor["default"])(_palette["default"].green.base).lighten(10).toString()
        },
        active: {
          color: (0, _tinycolor["default"])(_palette["default"].green.base).darken(10).toString()
        },
        focus: {
          boxShadow: "0 0 0 2px ".concat((0, _tinycolor["default"])(_palette["default"].green.base).setAlpha(0.4).toString())
        }
      });

    case 'default':
    case 'blue':
    default:
      return _themer.Themer.createLinkAppearance({
        base: {
          color: _palette["default"].blue.base
        },
        hover: {
          color: (0, _tinycolor["default"])(_palette["default"].blue.base).lighten(10).toString()
        },
        active: {
          color: (0, _tinycolor["default"])(_palette["default"].blue.base).darken(10).toString()
        },
        focus: {
          boxShadow: "0 0 0 2px ".concat((0, _tinycolor["default"])(_palette["default"].blue.base).setAlpha(0.4).toString())
        }
      });
  }
};
/**
 * Get the className of a `Link` component.
 * @param {string} color
 * @return {string} the appearance class name.
 */


var _default = (0, _memoizeClassName["default"])(getLinkAppearance);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJnZXRMaW5rQXBwZWFyYW5jZSIsImNvbG9yIiwiVGhlbWVyIiwiY3JlYXRlTGlua0FwcGVhcmFuY2UiLCJiYXNlIiwicGFsZXR0ZSIsIm5ldXRyYWwiLCJob3ZlciIsInRpbnljb2xvciIsImxpZ2h0ZW4iLCJ0b1N0cmluZyIsImFjdGl2ZSIsImRhcmtlbiIsImZvY3VzIiwiYm94U2hhZG93Iiwic2V0QWxwaGEiLCJncmVlbiIsImJsdWUiLCJtZW1vaXplQ2xhc3NOYW1lIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3RoZW1lL3NyYy9kZWZhdWx0LXRoZW1lL2NvbXBvbmVudC1zcGVjaWZpYy9nZXRMaW5rQ2xhc3NOYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0aW55Y29sb3IgZnJvbSAndGlueWNvbG9yMidcbmltcG9ydCB7IFRoZW1lciB9IGZyb20gJy4uLy4uLy4uLy4uL3RoZW1lcidcbmltcG9ydCBtZW1vaXplQ2xhc3NOYW1lIGZyb20gJy4uL3V0aWxzL21lbW9pemVDbGFzc05hbWUnXG5pbXBvcnQgcGFsZXR0ZSBmcm9tICcuLi9mb3VuZGF0aW9uYWwtc3R5bGVzL3BhbGV0dGUnXG5cbi8qKlxuICogVGhlIGxpbmsgYXBwZWFyYW5jZSB1bmxpa2UgdGhlIEJ1dHRvbiBpcyBiYXNlZCBvbiB0aGUgY29sb3IgcHJvcGVydHkuXG4gKiBDdXJyZW50bHkgdGhlIExpbmsgZG9lcyBub3Qgc3VwcG9ydCB0aGUgSW50ZW50IG9yIHRoZSBhcHBlYXJhbmNlIGludGVyZmFjZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvclxuICogQHJldHVybiB7T2JqZWN0fSBhcHBlYXJhbmNlIG9mIHRoZSBsaW5rLlxuICovXG5jb25zdCBnZXRMaW5rQXBwZWFyYW5jZSA9IGNvbG9yID0+IHtcbiAgc3dpdGNoIChjb2xvcikge1xuICAgIGNhc2UgJ25ldXRyYWwnOlxuICAgICAgcmV0dXJuIFRoZW1lci5jcmVhdGVMaW5rQXBwZWFyYW5jZSh7XG4gICAgICAgIGJhc2U6IHtcbiAgICAgICAgICBjb2xvcjogcGFsZXR0ZS5uZXV0cmFsLmJhc2VcbiAgICAgICAgfSxcbiAgICAgICAgaG92ZXI6IHtcbiAgICAgICAgICBjb2xvcjogdGlueWNvbG9yKHBhbGV0dGUubmV1dHJhbC5iYXNlKVxuICAgICAgICAgICAgLmxpZ2h0ZW4oMTApXG4gICAgICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICB9LFxuICAgICAgICBhY3RpdmU6IHtcbiAgICAgICAgICBjb2xvcjogdGlueWNvbG9yKHBhbGV0dGUubmV1dHJhbC5iYXNlKVxuICAgICAgICAgICAgLmRhcmtlbigxMClcbiAgICAgICAgICAgIC50b1N0cmluZygpXG4gICAgICAgIH0sXG4gICAgICAgIGZvY3VzOiB7XG4gICAgICAgICAgYm94U2hhZG93OiBgMCAwIDAgMnB4ICR7dGlueWNvbG9yKHBhbGV0dGUubmV1dHJhbC5iYXNlKVxuICAgICAgICAgICAgLnNldEFscGhhKDAuNClcbiAgICAgICAgICAgIC50b1N0cmluZygpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICBjYXNlICdncmVlbic6XG4gICAgICByZXR1cm4gVGhlbWVyLmNyZWF0ZUxpbmtBcHBlYXJhbmNlKHtcbiAgICAgICAgYmFzZToge1xuICAgICAgICAgIGNvbG9yOiBwYWxldHRlLmdyZWVuLmJhc2VcbiAgICAgICAgfSxcbiAgICAgICAgaG92ZXI6IHtcbiAgICAgICAgICBjb2xvcjogdGlueWNvbG9yKHBhbGV0dGUuZ3JlZW4uYmFzZSlcbiAgICAgICAgICAgIC5saWdodGVuKDEwKVxuICAgICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgfSxcbiAgICAgICAgYWN0aXZlOiB7XG4gICAgICAgICAgY29sb3I6IHRpbnljb2xvcihwYWxldHRlLmdyZWVuLmJhc2UpXG4gICAgICAgICAgICAuZGFya2VuKDEwKVxuICAgICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgfSxcbiAgICAgICAgZm9jdXM6IHtcbiAgICAgICAgICBib3hTaGFkb3c6IGAwIDAgMCAycHggJHt0aW55Y29sb3IocGFsZXR0ZS5ncmVlbi5iYXNlKVxuICAgICAgICAgICAgLnNldEFscGhhKDAuNClcbiAgICAgICAgICAgIC50b1N0cmluZygpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICBjYXNlICdkZWZhdWx0JzpcbiAgICBjYXNlICdibHVlJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIFRoZW1lci5jcmVhdGVMaW5rQXBwZWFyYW5jZSh7XG4gICAgICAgIGJhc2U6IHtcbiAgICAgICAgICBjb2xvcjogcGFsZXR0ZS5ibHVlLmJhc2VcbiAgICAgICAgfSxcbiAgICAgICAgaG92ZXI6IHtcbiAgICAgICAgICBjb2xvcjogdGlueWNvbG9yKHBhbGV0dGUuYmx1ZS5iYXNlKVxuICAgICAgICAgICAgLmxpZ2h0ZW4oMTApXG4gICAgICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICB9LFxuICAgICAgICBhY3RpdmU6IHtcbiAgICAgICAgICBjb2xvcjogdGlueWNvbG9yKHBhbGV0dGUuYmx1ZS5iYXNlKVxuICAgICAgICAgICAgLmRhcmtlbigxMClcbiAgICAgICAgICAgIC50b1N0cmluZygpXG4gICAgICAgIH0sXG4gICAgICAgIGZvY3VzOiB7XG4gICAgICAgICAgYm94U2hhZG93OiBgMCAwIDAgMnB4ICR7dGlueWNvbG9yKHBhbGV0dGUuYmx1ZS5iYXNlKVxuICAgICAgICAgICAgLnNldEFscGhhKDAuNClcbiAgICAgICAgICAgIC50b1N0cmluZygpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIEdldCB0aGUgY2xhc3NOYW1lIG9mIGEgYExpbmtgIGNvbXBvbmVudC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvclxuICogQHJldHVybiB7c3RyaW5nfSB0aGUgYXBwZWFyYW5jZSBjbGFzcyBuYW1lLlxuICovXG5leHBvcnQgZGVmYXVsdCBtZW1vaXplQ2xhc3NOYW1lKGdldExpbmtBcHBlYXJh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