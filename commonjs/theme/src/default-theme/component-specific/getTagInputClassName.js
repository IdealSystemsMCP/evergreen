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

var TagInputAppearances = {};
TagInputAppearances["default"] = _themer.Themer.createTagInputAppearance({
  base: {
    backgroundColor: 'white',
    boxShadow: "inset 0 0 0 1px ".concat(_scales["default"].neutral.N5A, ", inset 0 1px 2px ").concat(_scales["default"].neutral.N4A)
  },
  invalid: {
    boxShadow: "inset 0 0 0 1px ".concat(_palette["default"].red.base, ", inset 0 1px 2px ").concat(_scales["default"].neutral.N4A)
  },
  focus: {
    boxShadow: "inset 0 0 2px ".concat(_scales["default"].neutral.N4A, ", inset 0 0 0 1px ").concat(_scales["default"].blue.B7, ", 0 0 0 3px ").concat(_scales["default"].blue.B4A)
  },
  disabled: {
    boxShadow: "inset 0 0 0 1px ".concat(_scales["default"].neutral.N4A),
    backgroundColor: _scales["default"].neutral.N2
  }
});
/**
 * Get the appearance of a `TagInput`.
 * @param {string} appearance - the appearance name
 * @return {Object} the appearance object.
 */

var getTextInputAppearance = function getTextInputAppearance() {
  return TagInputAppearances["default"];
};
/**
 * Get the className of a `TagInput`.
 * @param {string} appearance - the appearance name
 * @return {string} the appearance class name.
 */


var _default = (0, _memoizeClassName["default"])(getTextInputAppearance);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJUYWdJbnB1dEFwcGVhcmFuY2VzIiwiVGhlbWVyIiwiY3JlYXRlVGFnSW5wdXRBcHBlYXJhbmNlIiwiYmFzZSIsImJhY2tncm91bmRDb2xvciIsImJveFNoYWRvdyIsInNjYWxlcyIsIm5ldXRyYWwiLCJONUEiLCJONEEiLCJpbnZhbGlkIiwicGFsZXR0ZSIsInJlZCIsImZvY3VzIiwiYmx1ZSIsIkI3IiwiQjRBIiwiZGlzYWJsZWQiLCJOMiIsImdldFRleHRJbnB1dEFwcGVhcmFuY2UiLCJtZW1vaXplQ2xhc3NOYW1lIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3RoZW1lL3NyYy9kZWZhdWx0LXRoZW1lL2NvbXBvbmVudC1zcGVjaWZpYy9nZXRUYWdJbnB1dENsYXNzTmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaGVtZXIgfSBmcm9tICcuLi8uLi8uLi8uLi90aGVtZXInXG5pbXBvcnQgbWVtb2l6ZUNsYXNzTmFtZSBmcm9tICcuLi91dGlscy9tZW1vaXplQ2xhc3NOYW1lJ1xuaW1wb3J0IHNjYWxlcyBmcm9tICcuLi9mb3VuZGF0aW9uYWwtc3R5bGVzL3NjYWxlcydcbmltcG9ydCBwYWxldHRlIGZyb20gJy4uL2ZvdW5kYXRpb25hbC1zdHlsZXMvcGFsZXR0ZSdcblxuY29uc3QgVGFnSW5wdXRBcHBlYXJhbmNlcyA9IHt9XG5cblRhZ0lucHV0QXBwZWFyYW5jZXMuZGVmYXVsdCA9IFRoZW1lci5jcmVhdGVUYWdJbnB1dEFwcGVhcmFuY2Uoe1xuICBiYXNlOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgIGJveFNoYWRvdzogYGluc2V0IDAgMCAwIDFweCAke3NjYWxlcy5uZXV0cmFsLk41QX0sIGluc2V0IDAgMXB4IDJweCAke1xuICAgICAgc2NhbGVzLm5ldXRyYWwuTjRBXG4gICAgfWBcbiAgfSxcbiAgaW52YWxpZDoge1xuICAgIGJveFNoYWRvdzogYGluc2V0IDAgMCAwIDFweCAke3BhbGV0dGUucmVkLmJhc2V9LCBpbnNldCAwIDFweCAycHggJHtcbiAgICAgIHNjYWxlcy5uZXV0cmFsLk40QVxuICAgIH1gXG4gIH0sXG4gIGZvY3VzOiB7XG4gICAgYm94U2hhZG93OiBgaW5zZXQgMCAwIDJweCAke3NjYWxlcy5uZXV0cmFsLk40QX0sIGluc2V0IDAgMCAwIDFweCAke1xuICAgICAgc2NhbGVzLmJsdWUuQjdcbiAgICB9LCAwIDAgMCAzcHggJHtzY2FsZXMuYmx1ZS5CNEF9YFxuICB9LFxuICBkaXNhYmxlZDoge1xuICAgIGJveFNoYWRvdzogYGluc2V0IDAgMCAwIDFweCAke3NjYWxlcy5uZXV0cmFsLk40QX1gLFxuICAgIGJhY2tncm91bmRDb2xvcjogc2NhbGVzLm5ldXRyYWwuTjJcbiAgfVxufSlcblxuLyoqXG4gKiBHZXQgdGhlIGFwcGVhcmFuY2Ugb2YgYSBgVGFnSW5wdXRgLlxuICogQHBhcmFtIHtzdHJpbmd9IGFwcGVhcmFuY2UgLSB0aGUgYXBwZWFyYW5jZSBuYW1lXG4gKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBhcHBlYXJhbmNlIG9iamVjdC5cbiAqL1xuY29uc3QgZ2V0VGV4dElucHV0QXBwZWFyYW5jZSA9ICgpID0+IHtcbiAgcmV0dXJuIFRhZ0lucHV0QXBwZWFyYW5jZXMuZGVmYXVsdFxufVxuXG4vKipcbiAqIEdldCB0aGUgY2xhc3NOYW1lIG9mIGEgYFRhZ0lucHV0YC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBhcHBlYXJhbmNlIC0gdGhlIGFwcGVhcmFuY2UgbmFtZVxuICogQHJldHVybiB7c3RyaW5nfSB0aGUgYXBwZWFyYW5jZSBjbGFzcyBuYW1lLlxuICovXG5leHBvcnQgZGVmYXVsdCBtZW1vaXplQ2xhc3NOYW1lKGdldFRleHRJbnB1dEFwcGVhcmFuY2UpXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUVBLElBQU1BLG1CQUFtQixHQUFHLEVBQTVCO0FBRUFBLG1CQUFtQixXQUFuQixHQUE4QkMsY0FBQSxDQUFPQyx3QkFBUCxDQUFnQztFQUM1REMsSUFBSSxFQUFFO0lBQ0pDLGVBQWUsRUFBRSxPQURiO0lBRUpDLFNBQVMsNEJBQXFCQyxrQkFBQSxDQUFPQyxPQUFQLENBQWVDLEdBQXBDLCtCQUNQRixrQkFBQSxDQUFPQyxPQUFQLENBQWVFLEdBRFI7RUFGTCxDQURzRDtFQU81REMsT0FBTyxFQUFFO0lBQ1BMLFNBQVMsNEJBQXFCTSxtQkFBQSxDQUFRQyxHQUFSLENBQVlULElBQWpDLCtCQUNQRyxrQkFBQSxDQUFPQyxPQUFQLENBQWVFLEdBRFI7RUFERixDQVBtRDtFQVk1REksS0FBSyxFQUFFO0lBQ0xSLFNBQVMsMEJBQW1CQyxrQkFBQSxDQUFPQyxPQUFQLENBQWVFLEdBQWxDLCtCQUNQSCxrQkFBQSxDQUFPUSxJQUFQLENBQVlDLEVBREwseUJBRU1ULGtCQUFBLENBQU9RLElBQVAsQ0FBWUUsR0FGbEI7RUFESixDQVpxRDtFQWlCNURDLFFBQVEsRUFBRTtJQUNSWixTQUFTLDRCQUFxQkMsa0JBQUEsQ0FBT0MsT0FBUCxDQUFlRSxHQUFwQyxDQUREO0lBRVJMLGVBQWUsRUFBRUUsa0JBQUEsQ0FBT0MsT0FBUCxDQUFlVztFQUZ4QjtBQWpCa0QsQ0FBaEMsQ0FBOUI7QUF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQyxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLEdBQU07RUFDbkMsT0FBT25CLG1CQUFtQixXQUExQjtBQUNELENBRkQ7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7ZUFDZSxJQUFBb0IsNEJBQUEsRUFBaUJELHNCQUFqQixDIn0=