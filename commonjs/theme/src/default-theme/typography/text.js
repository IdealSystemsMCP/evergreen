"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fontFamilies = _interopRequireDefault(require("./fontFamilies"));

/**
 * Text styles for single line text.
 * This is used in the Text component. The Text component is used by:
 * - Small
 * - Strong
 * - Code
 * - ListItem
 * - Label
 * - Link
 * @property {Object} 600 - Required property.
 * @property {Object} 500 - Required property.
 * @property {Object} 400 - Required property. Default.
 * @property {Object} 300 - Required property.
 */
var _default = {
  /**
   * It's useful to have 600 because `Link` uses the `Text` component.
   * A `Link` could be used as 600 in the context of a breadcrumb.
   */
  '600': {
    fontSize: '20px',
    fontWeight: 400,
    lineHeight: '24px',
    letterSpacing: '-0.07px',
    marginTop: 28,

    /**
     * Use font family display because the font-size is 20px.
     */
    fontFamily: _fontFamilies["default"].display
  },
  '500': {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '20px',
    letterSpacing: '-0.05px',
    marginTop: 16
  },
  '400': {
    // Default
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '20px',
    letterSpacing: '-0.05px',
    marginTop: 12
  },
  '300': {
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '16px',
    letterSpacing: '0',
    marginTop: 12
  }
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJsaW5lSGVpZ2h0IiwibGV0dGVyU3BhY2luZyIsIm1hcmdpblRvcCIsImZvbnRGYW1pbHkiLCJmb250RmFtaWxpZXMiLCJkaXNwbGF5Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3RoZW1lL3NyYy9kZWZhdWx0LXRoZW1lL3R5cG9ncmFwaHkvdGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZm9udEZhbWlsaWVzIGZyb20gJy4vZm9udEZhbWlsaWVzJ1xuXG4vKipcbiAqIFRleHQgc3R5bGVzIGZvciBzaW5nbGUgbGluZSB0ZXh0LlxuICogVGhpcyBpcyB1c2VkIGluIHRoZSBUZXh0IGNvbXBvbmVudC4gVGhlIFRleHQgY29tcG9uZW50IGlzIHVzZWQgYnk6XG4gKiAtIFNtYWxsXG4gKiAtIFN0cm9uZ1xuICogLSBDb2RlXG4gKiAtIExpc3RJdGVtXG4gKiAtIExhYmVsXG4gKiAtIExpbmtcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSA2MDAgLSBSZXF1aXJlZCBwcm9wZXJ0eS5cbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSA1MDAgLSBSZXF1aXJlZCBwcm9wZXJ0eS5cbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSA0MDAgLSBSZXF1aXJlZCBwcm9wZXJ0eS4gRGVmYXVsdC5cbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSAzMDAgLSBSZXF1aXJlZCBwcm9wZXJ0eS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICAvKipcbiAgICogSXQncyB1c2VmdWwgdG8gaGF2ZSA2MDAgYmVjYXVzZSBgTGlua2AgdXNlcyB0aGUgYFRleHRgIGNvbXBvbmVudC5cbiAgICogQSBgTGlua2AgY291bGQgYmUgdXNlZCBhcyA2MDAgaW4gdGhlIGNvbnRleHQgb2YgYSBicmVhZGNydW1iLlxuICAgKi9cbiAgJzYwMCc6IHtcbiAgICBmb250U2l6ZTogJzIwcHgnLFxuICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICBsaW5lSGVpZ2h0OiAnMjRweCcsXG4gICAgbGV0dGVyU3BhY2luZzogJy0wLjA3cHgnLFxuICAgIG1hcmdpblRvcDogMjgsXG4gICAgLyoqXG4gICAgICogVXNlIGZvbnQgZmFtaWx5IGRpc3BsYXkgYmVjYXVzZSB0aGUgZm9udC1zaXplIGlzIDIwcHguXG4gICAgICovXG4gICAgZm9udEZhbWlseTogZm9udEZhbWlsaWVzLmRpc3BsYXlcbiAgfSxcbiAgJzUwMCc6IHtcbiAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICBsaW5lSGVpZ2h0OiAnMjBweCcsXG4gICAgbGV0dGVyU3BhY2luZzogJy0wLjA1cHgnLFxuICAgIG1hcmdpblRvcDogMTZcbiAgfSxcbiAgJzQwMCc6IHtcbiAgICAvLyBEZWZhdWx0XG4gICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgbGluZUhlaWdodDogJzIwcHgnLFxuICAgIGxldHRlclNwYWNpbmc6ICctMC4wNXB4JyxcbiAgICBtYXJnaW5Ub3A6IDEyXG4gIH0sXG4gICczMDAnOiB7XG4gICAgZm9udFNpemU6ICcxMnB4JyxcbiAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgbGluZUhlaWdodDogJzE2cHgnLFxuICAgIGxldHRlclNwYWNpbmc6ICcwJyxcbiAgICBtYXJnaW5Ub3A6IDEyXG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtlQUNlO0VBQ2I7QUFDRjtBQUNBO0FBQ0E7RUFDRSxPQUFPO0lBQ0xBLFFBQVEsRUFBRSxNQURMO0lBRUxDLFVBQVUsRUFBRSxHQUZQO0lBR0xDLFVBQVUsRUFBRSxNQUhQO0lBSUxDLGFBQWEsRUFBRSxTQUpWO0lBS0xDLFNBQVMsRUFBRSxFQUxOOztJQU1MO0FBQ0o7QUFDQTtJQUNJQyxVQUFVLEVBQUVDLHdCQUFBLENBQWFDO0VBVHBCLENBTE07RUFnQmIsT0FBTztJQUNMUCxRQUFRLEVBQUUsTUFETDtJQUVMQyxVQUFVLEVBQUUsR0FGUDtJQUdMQyxVQUFVLEVBQUUsTUFIUDtJQUlMQyxhQUFhLEVBQUUsU0FKVjtJQUtMQyxTQUFTLEVBQUU7RUFMTixDQWhCTTtFQXVCYixPQUFPO0lBQ0w7SUFDQUosUUFBUSxFQUFFLE1BRkw7SUFHTEMsVUFBVSxFQUFFLEdBSFA7SUFJTEMsVUFBVSxFQUFFLE1BSlA7SUFLTEMsYUFBYSxFQUFFLFNBTFY7SUFNTEMsU0FBUyxFQUFFO0VBTk4sQ0F2Qk07RUErQmIsT0FBTztJQUNMSixRQUFRLEVBQUUsTUFETDtJQUVMQyxVQUFVLEVBQUUsR0FGUDtJQUdMQyxVQUFVLEVBQUUsTUFIUDtJQUlMQyxhQUFhLEVBQUUsR0FKVjtJQUtMQyxTQUFTLEVBQUU7RUFMTjtBQS9CTSxDIn0=