"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ThemeProvider = exports.ThemeConsumer = void 0;

var _react = _interopRequireDefault(require("react"));

var _defaultTheme = _interopRequireDefault(require("./default-theme"));

/**
 * Use React 16.3+ createContext API.
 */
var ThemeContext = /*#__PURE__*/_react["default"].createContext(_defaultTheme["default"]);

var ThemeProvider = ThemeContext.Provider,
    ThemeConsumer = ThemeContext.Consumer;
exports.ThemeConsumer = ThemeConsumer;
exports.ThemeProvider = ThemeProvider;
var _default = ThemeContext;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJUaGVtZUNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJkZWZhdWx0VGhlbWUiLCJUaGVtZVByb3ZpZGVyIiwiUHJvdmlkZXIiLCJUaGVtZUNvbnN1bWVyIiwiQ29uc3VtZXIiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdGhlbWUvc3JjL1RoZW1lQ29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgZGVmYXVsdFRoZW1lIGZyb20gJy4vZGVmYXVsdC10aGVtZSdcblxuLyoqXG4gKiBVc2UgUmVhY3QgMTYuMysgY3JlYXRlQ29udGV4dCBBUEkuXG4gKi9cbmNvbnN0IFRoZW1lQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZGVmYXVsdFRoZW1lKVxuY29uc3Qge1xuICBQcm92aWRlcjogVGhlbWVQcm92aWRlcixcbiAgQ29uc3VtZXI6IFRoZW1lQ29uc3VtZXJcbn0gPSBUaGVtZUNvbnRleHRcblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVDb250ZXh0XG5leHBvcnQgeyBUaGVtZVByb3ZpZGVyLCBUaGVtZUNvbnN1bWVyIH1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsWUFBWSxnQkFBR0MsaUJBQUEsQ0FBTUMsYUFBTixDQUFvQkMsd0JBQXBCLENBQXJCOztBQUNBLElBQ1lDLGFBRFosR0FHSUosWUFISixDQUNFSyxRQURGO0FBQUEsSUFFWUMsYUFGWixHQUdJTixZQUhKLENBRUVPLFFBRkY7OztlQUtlUCxZIn0=