"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _scales = _interopRequireDefault(require("../foundational-styles/scales"));

/**
 * Get the themed properties for a `Code` text component.
 * @param {string} appearance - default, minimal.
 * @return {string} the themd properties.
 */
var getCodeProps = function getCodeProps(appearance) {
  switch (appearance) {
    case 'minimal':
      return {};

    case 'default':
    default:
      // Passing padding and border radius is non-ideal here.
      return {
        backgroundColor: _scales["default"].blue.B2A,
        boxShadow: "inset 0 0 0 1px ".concat(_scales["default"].blue.B4A),
        paddingLeft: 6,
        paddingRight: 6,
        paddingTop: 3,
        paddingBottom: 3,
        borderRadius: 2
      };
  }
};

var _default = getCodeProps;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJnZXRDb2RlUHJvcHMiLCJhcHBlYXJhbmNlIiwiYmFja2dyb3VuZENvbG9yIiwic2NhbGVzIiwiYmx1ZSIsIkIyQSIsImJveFNoYWRvdyIsIkI0QSIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJib3JkZXJSYWRpdXMiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvdGhlbWUvc3JjL2RlZmF1bHQtdGhlbWUvY29tcG9uZW50LXNwZWNpZmljL2dldENvZGVQcm9wcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2NhbGVzIGZyb20gJy4uL2ZvdW5kYXRpb25hbC1zdHlsZXMvc2NhbGVzJ1xuXG4vKipcbiAqIEdldCB0aGUgdGhlbWVkIHByb3BlcnRpZXMgZm9yIGEgYENvZGVgIHRleHQgY29tcG9uZW50LlxuICogQHBhcmFtIHtzdHJpbmd9IGFwcGVhcmFuY2UgLSBkZWZhdWx0LCBtaW5pbWFsLlxuICogQHJldHVybiB7c3RyaW5nfSB0aGUgdGhlbWQgcHJvcGVydGllcy5cbiAqL1xuY29uc3QgZ2V0Q29kZVByb3BzID0gYXBwZWFyYW5jZSA9PiB7XG4gIHN3aXRjaCAoYXBwZWFyYW5jZSkge1xuICAgIGNhc2UgJ21pbmltYWwnOlxuICAgICAgcmV0dXJuIHt9XG4gICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIC8vIFBhc3NpbmcgcGFkZGluZyBhbmQgYm9yZGVyIHJhZGl1cyBpcyBub24taWRlYWwgaGVyZS5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogc2NhbGVzLmJsdWUuQjJBLFxuICAgICAgICBib3hTaGFkb3c6IGBpbnNldCAwIDAgMCAxcHggJHtzY2FsZXMuYmx1ZS5CNEF9YCxcbiAgICAgICAgcGFkZGluZ0xlZnQ6IDYsXG4gICAgICAgIHBhZGRpbmdSaWdodDogNixcbiAgICAgICAgcGFkZGluZ1RvcDogMyxcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogMyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAyXG4gICAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0Q29kZVByb3BzXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFBQyxVQUFVLEVBQUk7RUFDakMsUUFBUUEsVUFBUjtJQUNFLEtBQUssU0FBTDtNQUNFLE9BQU8sRUFBUDs7SUFDRixLQUFLLFNBQUw7SUFDQTtNQUNFO01BQ0EsT0FBTztRQUNMQyxlQUFlLEVBQUVDLGtCQUFBLENBQU9DLElBQVAsQ0FBWUMsR0FEeEI7UUFFTEMsU0FBUyw0QkFBcUJILGtCQUFBLENBQU9DLElBQVAsQ0FBWUcsR0FBakMsQ0FGSjtRQUdMQyxXQUFXLEVBQUUsQ0FIUjtRQUlMQyxZQUFZLEVBQUUsQ0FKVDtRQUtMQyxVQUFVLEVBQUUsQ0FMUDtRQU1MQyxhQUFhLEVBQUUsQ0FOVjtRQU9MQyxZQUFZLEVBQUU7TUFQVCxDQUFQO0VBTko7QUFnQkQsQ0FqQkQ7O2VBbUJlWixZIn0=