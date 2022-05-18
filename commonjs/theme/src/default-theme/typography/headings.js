"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _colors = _interopRequireDefault(require("../foundational-styles/colors"));

var _fontFamilies = _interopRequireDefault(require("./fontFamilies"));

/**
 * Heading styles.
 * @property {Object} headings.900
 * @property {Object} headings.800
 * @property {Object} headings.700
 * @property {Object} headings.600
 * @property {Object} headings.500 - Default.
 * @property {Object} headings.400
 * @property {Object} headings.300
 * @property {Object} headings.200
 * @property {Object} headings.100
 */
var _default = {
  '900': {
    fontSize: '35px',
    fontWeight: 500,
    lineHeight: '40px',
    letterSpacing: '-0.2px',
    marginTop: 52,
    fontFamily: _fontFamilies["default"].display,
    color: _colors["default"].text.dark
  },
  '800': {
    fontSize: '29px',
    fontWeight: 500,
    lineHeight: '32px',
    letterSpacing: '-0.2px',
    marginTop: 40,
    fontFamily: _fontFamilies["default"].display,
    color: _colors["default"].text.dark
  },
  '700': {
    fontSize: '24px',
    fontWeight: 500,
    lineHeight: '28px',
    letterSpacing: '-0.07px',
    marginTop: 40,
    fontFamily: _fontFamilies["default"].display,
    color: _colors["default"].text.dark
  },
  '600': {
    fontSize: '20px',
    fontWeight: 500,
    lineHeight: '24px',
    letterSpacing: '-0.07px',
    marginTop: 28,
    fontFamily: _fontFamilies["default"].display,
    color: _colors["default"].text.dark
  },
  '500': {
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '20px',
    letterSpacing: '-0.05px',
    marginTop: 24,
    fontFamily: _fontFamilies["default"].ui,
    color: _colors["default"].text.dark
  },
  '400': {
    fontSize: '14px',
    fontWeight: 600,
    lineHeight: '20px',
    letterSpacing: '-0.05px',
    marginTop: 16,
    fontFamily: _fontFamilies["default"].ui,
    color: _colors["default"].text.dark
  },
  '300': {
    fontSize: '12px',
    fontWeight: 600,
    lineHeight: '16px',
    letterSpacing: '0',
    marginTop: 16,
    fontFamily: _fontFamilies["default"].ui,
    color: _colors["default"].text.dark
  },
  '200': {
    fontSize: '12px',
    fontWeight: 600,
    lineHeight: '16px',
    letterSpacing: '0',
    marginTop: 16,
    fontFamily: _fontFamilies["default"].ui,
    color: _colors["default"].text.muted
  },
  '100': {
    fontSize: '11px',
    fontWeight: 400,
    textTransform: 'uppercase',
    lineHeight: '16px',
    letterSpacing: '0.6px',
    marginTop: 16,
    fontFamily: _fontFamilies["default"].ui,
    color: _colors["default"].text.muted
  }
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJsaW5lSGVpZ2h0IiwibGV0dGVyU3BhY2luZyIsIm1hcmdpblRvcCIsImZvbnRGYW1pbHkiLCJmb250RmFtaWxpZXMiLCJkaXNwbGF5IiwiY29sb3IiLCJjb2xvcnMiLCJ0ZXh0IiwiZGFyayIsInVpIiwibXV0ZWQiLCJ0ZXh0VHJhbnNmb3JtIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3RoZW1lL3NyYy9kZWZhdWx0LXRoZW1lL3R5cG9ncmFwaHkvaGVhZGluZ3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbG9ycyBmcm9tICcuLi9mb3VuZGF0aW9uYWwtc3R5bGVzL2NvbG9ycydcbmltcG9ydCBmb250RmFtaWxpZXMgZnJvbSAnLi9mb250RmFtaWxpZXMnXG5cbi8qKlxuICogSGVhZGluZyBzdHlsZXMuXG4gKiBAcHJvcGVydHkge09iamVjdH0gaGVhZGluZ3MuOTAwXG4gKiBAcHJvcGVydHkge09iamVjdH0gaGVhZGluZ3MuODAwXG4gKiBAcHJvcGVydHkge09iamVjdH0gaGVhZGluZ3MuNzAwXG4gKiBAcHJvcGVydHkge09iamVjdH0gaGVhZGluZ3MuNjAwXG4gKiBAcHJvcGVydHkge09iamVjdH0gaGVhZGluZ3MuNTAwIC0gRGVmYXVsdC5cbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBoZWFkaW5ncy40MDBcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBoZWFkaW5ncy4zMDBcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBoZWFkaW5ncy4yMDBcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBoZWFkaW5ncy4xMDBcbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICAnOTAwJzoge1xuICAgIGZvbnRTaXplOiAnMzVweCcsXG4gICAgZm9udFdlaWdodDogNTAwLFxuICAgIGxpbmVIZWlnaHQ6ICc0MHB4JyxcbiAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuMnB4JyxcbiAgICBtYXJnaW5Ub3A6IDUyLFxuICAgIGZvbnRGYW1pbHk6IGZvbnRGYW1pbGllcy5kaXNwbGF5LFxuICAgIGNvbG9yOiBjb2xvcnMudGV4dC5kYXJrXG4gIH0sXG4gICc4MDAnOiB7XG4gICAgZm9udFNpemU6ICcyOXB4JyxcbiAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgbGluZUhlaWdodDogJzMycHgnLFxuICAgIGxldHRlclNwYWNpbmc6ICctMC4ycHgnLFxuICAgIG1hcmdpblRvcDogNDAsXG4gICAgZm9udEZhbWlseTogZm9udEZhbWlsaWVzLmRpc3BsYXksXG4gICAgY29sb3I6IGNvbG9ycy50ZXh0LmRhcmtcbiAgfSxcbiAgJzcwMCc6IHtcbiAgICBmb250U2l6ZTogJzI0cHgnLFxuICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICBsaW5lSGVpZ2h0OiAnMjhweCcsXG4gICAgbGV0dGVyU3BhY2luZzogJy0wLjA3cHgnLFxuICAgIG1hcmdpblRvcDogNDAsXG4gICAgZm9udEZhbWlseTogZm9udEZhbWlsaWVzLmRpc3BsYXksXG4gICAgY29sb3I6IGNvbG9ycy50ZXh0LmRhcmtcbiAgfSxcbiAgJzYwMCc6IHtcbiAgICBmb250U2l6ZTogJzIwcHgnLFxuICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICBsaW5lSGVpZ2h0OiAnMjRweCcsXG4gICAgbGV0dGVyU3BhY2luZzogJy0wLjA3cHgnLFxuICAgIG1hcmdpblRvcDogMjgsXG4gICAgZm9udEZhbWlseTogZm9udEZhbWlsaWVzLmRpc3BsYXksXG4gICAgY29sb3I6IGNvbG9ycy50ZXh0LmRhcmtcbiAgfSxcbiAgJzUwMCc6IHtcbiAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICBsaW5lSGVpZ2h0OiAnMjBweCcsXG4gICAgbGV0dGVyU3BhY2luZzogJy0wLjA1cHgnLFxuICAgIG1hcmdpblRvcDogMjQsXG4gICAgZm9udEZhbWlseTogZm9udEZhbWlsaWVzLnVpLFxuICAgIGNvbG9yOiBjb2xvcnMudGV4dC5kYXJrXG4gIH0sXG4gICc0MDAnOiB7XG4gICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgbGluZUhlaWdodDogJzIwcHgnLFxuICAgIGxldHRlclNwYWNpbmc6ICctMC4wNXB4JyxcbiAgICBtYXJnaW5Ub3A6IDE2LFxuICAgIGZvbnRGYW1pbHk6IGZvbnRGYW1pbGllcy51aSxcbiAgICBjb2xvcjogY29sb3JzLnRleHQuZGFya1xuICB9LFxuICAnMzAwJzoge1xuICAgIGZvbnRTaXplOiAnMTJweCcsXG4gICAgZm9udFdlaWdodDogNjAwLFxuICAgIGxpbmVIZWlnaHQ6ICcxNnB4JyxcbiAgICBsZXR0ZXJTcGFjaW5nOiAnMCcsXG4gICAgbWFyZ2luVG9wOiAxNixcbiAgICBmb250RmFtaWx5OiBmb250RmFtaWxpZXMudWksXG4gICAgY29sb3I6IGNvbG9ycy50ZXh0LmRhcmtcbiAgfSxcbiAgJzIwMCc6IHtcbiAgICBmb250U2l6ZTogJzEycHgnLFxuICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICBsaW5lSGVpZ2h0OiAnMTZweCcsXG4gICAgbGV0dGVyU3BhY2luZzogJzAnLFxuICAgIG1hcmdpblRvcDogMTYsXG4gICAgZm9udEZhbWlseTogZm9udEZhbWlsaWVzLnVpLFxuICAgIGNvbG9yOiBjb2xvcnMudGV4dC5tdXRlZFxuICB9LFxuICAnMTAwJzoge1xuICAgIGZvbnRTaXplOiAnMTFweCcsXG4gICAgZm9udFdlaWdodDogNDAwLFxuICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuICAgIGxpbmVIZWlnaHQ6ICcxNnB4JyxcbiAgICBsZXR0ZXJTcGFjaW5nOiAnMC42cHgnLFxuICAgIG1hcmdpblRvcDogMTYsXG4gICAgZm9udEZhbWlseTogZm9udEZhbWlsaWVzLnVpLFxuICAgIGNvbG9yOiBjb2xvcnMudGV4dC5tdXRlZFxuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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