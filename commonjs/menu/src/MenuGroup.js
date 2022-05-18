"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _layers = require("../../layers");

var _typography = require("../../typography");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var MenuGroup = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(MenuGroup, _React$PureComponent);

  var _super = _createSuper(MenuGroup);

  function MenuGroup() {
    (0, _classCallCheck2["default"])(this, MenuGroup);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(MenuGroup, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          children = _this$props.children;
      return /*#__PURE__*/_react["default"].createElement(_layers.Pane, {
        paddingY: 8
      }, title && /*#__PURE__*/_react["default"].createElement(_typography.Heading, {
        size: 100,
        marginX: 16,
        marginY: 8
      }, title), children);
    }
  }]);
  return MenuGroup;
}(_react["default"].PureComponent);

exports["default"] = MenuGroup;
MenuGroup.displayName = "MenuGroup";
(0, _defineProperty2["default"])(MenuGroup, "propTypes", {
  /**
   * Title of the menu group.
   */
  title: _propTypes["default"].node,

  /**
   * The children of the menu group.
   */
  children: _propTypes["default"].node
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJNZW51R3JvdXAiLCJwcm9wcyIsInRpdGxlIiwiY2hpbGRyZW4iLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJub2RlIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21lbnUvc3JjL01lbnVHcm91cC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBQYW5lIH0gZnJvbSAnLi4vLi4vbGF5ZXJzJ1xuaW1wb3J0IHsgSGVhZGluZyB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnVHcm91cCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIFRpdGxlIG9mIHRoZSBtZW51IGdyb3VwLlxuICAgICAqL1xuICAgIHRpdGxlOiBQcm9wVHlwZXMubm9kZSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBjaGlsZHJlbiBvZiB0aGUgbWVudSBncm91cC5cbiAgICAgKi9cbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGVcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRpdGxlLCBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8UGFuZSBwYWRkaW5nWT17OH0+XG4gICAgICAgIHt0aXRsZSAmJiAoXG4gICAgICAgICAgPEhlYWRpbmcgc2l6ZT17MTAwfSBtYXJnaW5YPXsxNn0gbWFyZ2luWT17OH0+XG4gICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICApfVxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L1BhbmU+XG4gICAgKVxuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7SUFFcUJBLFM7Ozs7Ozs7Ozs7OztXQWFuQixrQkFBUztNQUNQLGtCQUE0QixLQUFLQyxLQUFqQztNQUFBLElBQVFDLEtBQVIsZUFBUUEsS0FBUjtNQUFBLElBQWVDLFFBQWYsZUFBZUEsUUFBZjtNQUNBLG9CQUNFLGdDQUFDLFlBQUQ7UUFBTSxRQUFRLEVBQUU7TUFBaEIsR0FDR0QsS0FBSyxpQkFDSixnQ0FBQyxtQkFBRDtRQUFTLElBQUksRUFBRSxHQUFmO1FBQW9CLE9BQU8sRUFBRSxFQUE3QjtRQUFpQyxPQUFPLEVBQUU7TUFBMUMsR0FDR0EsS0FESCxDQUZKLEVBTUdDLFFBTkgsQ0FERjtJQVVEOzs7RUF6Qm9DQyxpQkFBQSxDQUFNQyxhOzs7QUFBeEJMLFM7aUNBQUFBLFMsZUFDQTtFQUNqQjtBQUNKO0FBQ0E7RUFDSUUsS0FBSyxFQUFFSSxxQkFBQSxDQUFVQyxJQUpBOztFQU1qQjtBQUNKO0FBQ0E7RUFDSUosUUFBUSxFQUFFRyxxQkFBQSxDQUFVQztBQVRILEMifQ==