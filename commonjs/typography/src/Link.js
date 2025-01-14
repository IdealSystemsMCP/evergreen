"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _theme = require("../../theme");

var _Text = _interopRequireDefault(require("./Text"));

var _excluded = ["theme", "className", "color"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Link = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Link, _PureComponent);

  var _super = _createSuper(Link);

  function Link() {
    (0, _classCallCheck2["default"])(this, Link);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Link, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          className = _this$props.className,
          color = _this$props.color,
          props = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      var themedClassName = theme.getLinkClassName(color);
      return /*#__PURE__*/_react["default"].createElement(_Text["default"], (0, _extends2["default"])({
        is: "a",
        className: (0, _classnames["default"])(className, themedClassName),
        textDecoration: "underline",
        color: null
      }, props));
    }
  }]);
  return Link;
}(_react.PureComponent);

Link.displayName = "Link";
(0, _defineProperty2["default"])(Link, "propTypes", _objectSpread(_objectSpread({}, _Text["default"].propTypes), {}, {
  /**
   * This attribute names a relationship of the linked document to the current document.
   * Common use case is: rel="noopener noreferrer".
   */
  rel: _propTypes["default"].string,

  /**
   * Specifies the URL of the linked resource. A URL might be absolute or relative.
   */
  href: _propTypes["default"].string,

  /**
   * Target atrribute, common use case is target="_blank."
   */
  target: _propTypes["default"].string,

  /**
   * The color (and styling) of the Link. Can be default, blue, green or neutral.
   */
  color: _propTypes["default"].string.isRequired,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: _propTypes["default"].object.isRequired,

  /**
   * Class name passed to the link.
   * Only use if you know what you are doing.
   */
  className: _propTypes["default"].string
}));
(0, _defineProperty2["default"])(Link, "defaultProps", {
  color: 'default'
});

var _default = (0, _theme.withTheme)(Link);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJMaW5rIiwicHJvcHMiLCJ0aGVtZSIsImNsYXNzTmFtZSIsImNvbG9yIiwidGhlbWVkQ2xhc3NOYW1lIiwiZ2V0TGlua0NsYXNzTmFtZSIsImN4IiwiUHVyZUNvbXBvbmVudCIsIlRleHQiLCJwcm9wVHlwZXMiLCJyZWwiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJocmVmIiwidGFyZ2V0IiwiaXNSZXF1aXJlZCIsIm9iamVjdCIsIndpdGhUaGVtZSJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9MaW5rLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0J1xuXG5jbGFzcyBMaW5rIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLi4uVGV4dC5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGF0dHJpYnV0ZSBuYW1lcyBhIHJlbGF0aW9uc2hpcCBvZiB0aGUgbGlua2VkIGRvY3VtZW50IHRvIHRoZSBjdXJyZW50IGRvY3VtZW50LlxuICAgICAqIENvbW1vbiB1c2UgY2FzZSBpczogcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiLlxuICAgICAqL1xuICAgIHJlbDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFNwZWNpZmllcyB0aGUgVVJMIG9mIHRoZSBsaW5rZWQgcmVzb3VyY2UuIEEgVVJMIG1pZ2h0IGJlIGFic29sdXRlIG9yIHJlbGF0aXZlLlxuICAgICAqL1xuICAgIGhyZWY6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBUYXJnZXQgYXRycmlidXRlLCBjb21tb24gdXNlIGNhc2UgaXMgdGFyZ2V0PVwiX2JsYW5rLlwiXG4gICAgICovXG4gICAgdGFyZ2V0OiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbG9yIChhbmQgc3R5bGluZykgb2YgdGhlIExpbmsuIENhbiBiZSBkZWZhdWx0LCBibHVlLCBncmVlbiBvciBuZXV0cmFsLlxuICAgICAqL1xuICAgIGNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGVtZSBwcm92aWRlZCBieSBUaGVtZVByb3ZpZGVyLlxuICAgICAqL1xuICAgIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBDbGFzcyBuYW1lIHBhc3NlZCB0byB0aGUgbGluay5cbiAgICAgKiBPbmx5IHVzZSBpZiB5b3Uga25vdyB3aGF0IHlvdSBhcmUgZG9pbmcuXG4gICAgICovXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNvbG9yOiAnZGVmYXVsdCdcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRoZW1lLCBjbGFzc05hbWUsIGNvbG9yLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgdGhlbWVkQ2xhc3NOYW1lID0gdGhlbWUuZ2V0TGlua0NsYXNzTmFtZShjb2xvcilcblxuICAgIHJldHVybiAoXG4gICAgICA8VGV4dFxuICAgICAgICBpcz1cImFcIlxuICAgICAgICBjbGFzc05hbWU9e2N4KGNsYXNzTmFtZSwgdGhlbWVkQ2xhc3NOYW1lKX1cbiAgICAgICAgdGV4dERlY29yYXRpb249XCJ1bmRlcmxpbmVcIlxuICAgICAgICBjb2xvcj17bnVsbH1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKExpbmspXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLEk7Ozs7Ozs7Ozs7OztXQXlDSixrQkFBUztNQUNQLGtCQUE4QyxLQUFLQyxLQUFuRDtNQUFBLElBQVFDLEtBQVIsZUFBUUEsS0FBUjtNQUFBLElBQWVDLFNBQWYsZUFBZUEsU0FBZjtNQUFBLElBQTBCQyxLQUExQixlQUEwQkEsS0FBMUI7TUFBQSxJQUFvQ0gsS0FBcEM7TUFFQSxJQUFNSSxlQUFlLEdBQUdILEtBQUssQ0FBQ0ksZ0JBQU4sQ0FBdUJGLEtBQXZCLENBQXhCO01BRUEsb0JBQ0UsZ0NBQUMsZ0JBQUQ7UUFDRSxFQUFFLEVBQUMsR0FETDtRQUVFLFNBQVMsRUFBRSxJQUFBRyxzQkFBQSxFQUFHSixTQUFILEVBQWNFLGVBQWQsQ0FGYjtRQUdFLGNBQWMsRUFBQyxXQUhqQjtRQUlFLEtBQUssRUFBRTtNQUpULEdBS01KLEtBTE4sRUFERjtJQVNEOzs7RUF2RGdCTyxvQjs7QUFBYlIsSTtpQ0FBQUEsSSwrQ0FFQ1MsZ0JBQUEsQ0FBS0MsUztFQUVSO0FBQ0o7QUFDQTtBQUNBO0VBQ0lDLEdBQUcsRUFBRUMscUJBQUEsQ0FBVUMsTTs7RUFFZjtBQUNKO0FBQ0E7RUFDSUMsSUFBSSxFQUFFRixxQkFBQSxDQUFVQyxNOztFQUVoQjtBQUNKO0FBQ0E7RUFDSUUsTUFBTSxFQUFFSCxxQkFBQSxDQUFVQyxNOztFQUVsQjtBQUNKO0FBQ0E7RUFDSVQsS0FBSyxFQUFFUSxxQkFBQSxDQUFVQyxNQUFWLENBQWlCRyxVOztFQUV4QjtBQUNKO0FBQ0E7RUFDSWQsS0FBSyxFQUFFVSxxQkFBQSxDQUFVSyxNQUFWLENBQWlCRCxVOztFQUV4QjtBQUNKO0FBQ0E7QUFDQTtFQUNJYixTQUFTLEVBQUVTLHFCQUFBLENBQVVDOztpQ0FsQ25CYixJLGtCQXFDa0I7RUFDcEJJLEtBQUssRUFBRTtBQURhLEM7O2VBcUJULElBQUFjLGdCQUFBLEVBQVVsQixJQUFWLEMifQ==