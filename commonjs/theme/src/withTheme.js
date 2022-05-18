"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _ThemeContext = require("./ThemeContext");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * HOC that uses ThemeConsumer.
 * @param {React.Component} WrappedComponent - Component that gets theme.
 */
function withTheme(WrappedComponent) {
  var _class;

  var displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  return _class = /*#__PURE__*/function (_React$Component) {
    (0, _inherits2["default"])(_class, _React$Component);

    var _super = _createSuper(_class);

    function _class() {
      (0, _classCallCheck2["default"])(this, _class);
      return _super.apply(this, arguments);
    }

    (0, _createClass2["default"])(_class, [{
      key: "render",
      value: function render() {
        var _this = this;

        return /*#__PURE__*/_react["default"].createElement(_ThemeContext.ThemeConsumer, null, function (theme) {
          return /*#__PURE__*/_react["default"].createElement(WrappedComponent, (0, _extends2["default"])({
            theme: theme
          }, _this.props));
        });
      }
    }]);
    return _class;
  }(_react["default"].Component), (0, _defineProperty2["default"])(_class, "displayName", "withTheme(".concat(displayName, ")")), _class;
}

var _default = withTheme;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJ3aXRoVGhlbWUiLCJXcmFwcGVkQ29tcG9uZW50IiwiZGlzcGxheU5hbWUiLCJuYW1lIiwidGhlbWUiLCJwcm9wcyIsIlJlYWN0IiwiQ29tcG9uZW50Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3RoZW1lL3NyYy93aXRoVGhlbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVGhlbWVDb25zdW1lciB9IGZyb20gJy4vVGhlbWVDb250ZXh0J1xuXG4vKipcbiAqIEhPQyB0aGF0IHVzZXMgVGhlbWVDb25zdW1lci5cbiAqIEBwYXJhbSB7UmVhY3QuQ29tcG9uZW50fSBXcmFwcGVkQ29tcG9uZW50IC0gQ29tcG9uZW50IHRoYXQgZ2V0cyB0aGVtZS5cbiAqL1xuZnVuY3Rpb24gd2l0aFRoZW1lKFdyYXBwZWRDb21wb25lbnQpIHtcbiAgY29uc3QgZGlzcGxheU5hbWUgPVxuICAgIFdyYXBwZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgV3JhcHBlZENvbXBvbmVudC5uYW1lIHx8ICdDb21wb25lbnQnXG5cbiAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZGlzcGxheU5hbWUgPSBgd2l0aFRoZW1lKCR7ZGlzcGxheU5hbWV9KWBcblxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUaGVtZUNvbnN1bWVyPlxuICAgICAgICAgIHt0aGVtZSA9PiA8V3JhcHBlZENvbXBvbmVudCB0aGVtZT17dGhlbWV9IHsuLi50aGlzLnByb3BzfSAvPn1cbiAgICAgICAgPC9UaGVtZUNvbnN1bWVyPlxuICAgICAgKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWVcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTQSxTQUFULENBQW1CQyxnQkFBbkIsRUFBcUM7RUFBQTs7RUFDbkMsSUFBTUMsV0FBVyxHQUNmRCxnQkFBZ0IsQ0FBQ0MsV0FBakIsSUFBZ0NELGdCQUFnQixDQUFDRSxJQUFqRCxJQUF5RCxXQUQzRDtFQUdBO0lBQUE7O0lBQUE7O0lBQUE7TUFBQTtNQUFBO0lBQUE7O0lBQUE7TUFBQTtNQUFBLE9BR0Usa0JBQVM7UUFBQTs7UUFDUCxvQkFDRSxnQ0FBQywyQkFBRCxRQUNHLFVBQUFDLEtBQUs7VUFBQSxvQkFBSSxnQ0FBQyxnQkFBRDtZQUFrQixLQUFLLEVBQUVBO1VBQXpCLEdBQW9DLEtBQUksQ0FBQ0MsS0FBekMsRUFBSjtRQUFBLENBRFIsQ0FERjtNQUtEO0lBVEg7SUFBQTtFQUFBLEVBQXFCQyxpQkFBQSxDQUFNQyxTQUEzQiwrRUFDb0NMLFdBRHBDO0FBV0Q7O2VBRWNGLFMifQ==