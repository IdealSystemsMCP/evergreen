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

var _icon = require("../../icon");

var _Text = _interopRequireDefault(require("./Text"));

var _excluded = ["children", "size", "icon", "iconColor"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ListItem = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(ListItem, _PureComponent);

  var _super = _createSuper(ListItem);

  function ListItem() {
    (0, _classCallCheck2["default"])(this, ListItem);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(ListItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          size = _this$props.size,
          icon = _this$props.icon,
          iconColor = _this$props.iconColor,
          props = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      var paddingLeft;
      if (size === 300) paddingLeft = 4;
      if (size === 400) paddingLeft = 8;
      if (size === 500) paddingLeft = 8;
      if (size === 600) paddingLeft = 12;
      var iconTop;
      if (size === 300) iconTop = 1;
      if (size === 400) iconTop = 3;
      if (size === 500) iconTop = 3;
      if (size === 600) iconTop = 4;
      var iconSize;
      if (size === 300) iconSize = 12;
      if (size === 400) iconSize = 14;
      if (size === 500) iconSize = 14;
      if (size === 600) iconSize = 16;
      var iconLeft = -iconSize - 4;
      if (size === 600) iconLeft = -iconSize;
      return /*#__PURE__*/_react["default"].createElement(_Text["default"], (0, _extends2["default"])({
        is: "li",
        position: "relative",
        marginY: "0.5em",
        size: size,
        listStyleType: icon ? 'none' : null,
        paddingLeft: icon ? paddingLeft : null
      }, props), icon && /*#__PURE__*/_react["default"].createElement(_icon.Icon, {
        icon: icon,
        color: iconColor,
        position: "absolute",
        size: iconSize,
        left: iconLeft,
        top: iconTop
      }), children);
    }
  }]);
  return ListItem;
}(_react.PureComponent);

exports["default"] = ListItem;
ListItem.displayName = "ListItem";
(0, _defineProperty2["default"])(ListItem, "propTypes", _objectSpread(_objectSpread({}, _Text["default"].propTypes), {}, {
  /**
   * When passed, adds a icon before the list item.
   * See Evergreen `Icon` for documentation.
   */
  icon: _propTypes["default"].string,

  /**
   * The color of the icon.
   */
  iconColor: _propTypes["default"].string
}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJMaXN0SXRlbSIsInByb3BzIiwiY2hpbGRyZW4iLCJzaXplIiwiaWNvbiIsImljb25Db2xvciIsInBhZGRpbmdMZWZ0IiwiaWNvblRvcCIsImljb25TaXplIiwiaWNvbkxlZnQiLCJQdXJlQ29tcG9uZW50IiwiVGV4dCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9MaXN0SXRlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJy4uLy4uL2ljb24nXG5pbXBvcnQgVGV4dCBmcm9tICcuL1RleHQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3RJdGVtIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLi4uVGV4dC5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHBhc3NlZCwgYWRkcyBhIGljb24gYmVmb3JlIHRoZSBsaXN0IGl0ZW0uXG4gICAgICogU2VlIEV2ZXJncmVlbiBgSWNvbmAgZm9yIGRvY3VtZW50YXRpb24uXG4gICAgICovXG4gICAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBjb2xvciBvZiB0aGUgaWNvbi5cbiAgICAgKi9cbiAgICBpY29uQ29sb3I6IFByb3BUeXBlcy5zdHJpbmdcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBzaXplLCBpY29uLCBpY29uQ29sb3IsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzXG5cbiAgICBsZXQgcGFkZGluZ0xlZnRcbiAgICBpZiAoc2l6ZSA9PT0gMzAwKSBwYWRkaW5nTGVmdCA9IDRcbiAgICBpZiAoc2l6ZSA9PT0gNDAwKSBwYWRkaW5nTGVmdCA9IDhcbiAgICBpZiAoc2l6ZSA9PT0gNTAwKSBwYWRkaW5nTGVmdCA9IDhcbiAgICBpZiAoc2l6ZSA9PT0gNjAwKSBwYWRkaW5nTGVmdCA9IDEyXG5cbiAgICBsZXQgaWNvblRvcFxuICAgIGlmIChzaXplID09PSAzMDApIGljb25Ub3AgPSAxXG4gICAgaWYgKHNpemUgPT09IDQwMCkgaWNvblRvcCA9IDNcbiAgICBpZiAoc2l6ZSA9PT0gNTAwKSBpY29uVG9wID0gM1xuICAgIGlmIChzaXplID09PSA2MDApIGljb25Ub3AgPSA0XG5cbiAgICBsZXQgaWNvblNpemVcbiAgICBpZiAoc2l6ZSA9PT0gMzAwKSBpY29uU2l6ZSA9IDEyXG4gICAgaWYgKHNpemUgPT09IDQwMCkgaWNvblNpemUgPSAxNFxuICAgIGlmIChzaXplID09PSA1MDApIGljb25TaXplID0gMTRcbiAgICBpZiAoc2l6ZSA9PT0gNjAwKSBpY29uU2l6ZSA9IDE2XG5cbiAgICBsZXQgaWNvbkxlZnQgPSAtaWNvblNpemUgLSA0XG4gICAgaWYgKHNpemUgPT09IDYwMCkgaWNvbkxlZnQgPSAtaWNvblNpemVcblxuICAgIHJldHVybiAoXG4gICAgICA8VGV4dFxuICAgICAgICBpcz1cImxpXCJcbiAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXG4gICAgICAgIG1hcmdpblk9XCIwLjVlbVwiXG4gICAgICAgIHNpemU9e3NpemV9XG4gICAgICAgIGxpc3RTdHlsZVR5cGU9e2ljb24gPyAnbm9uZScgOiBudWxsfVxuICAgICAgICBwYWRkaW5nTGVmdD17aWNvbiA/IHBhZGRpbmdMZWZ0IDogbnVsbH1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgPlxuICAgICAgICB7aWNvbiAmJiAoXG4gICAgICAgICAgPEljb25cbiAgICAgICAgICAgIGljb249e2ljb259XG4gICAgICAgICAgICBjb2xvcj17aWNvbkNvbG9yfVxuICAgICAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXG4gICAgICAgICAgICBzaXplPXtpY29uU2l6ZX1cbiAgICAgICAgICAgIGxlZnQ9e2ljb25MZWZ0fVxuICAgICAgICAgICAgdG9wPXtpY29uVG9wfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvVGV4dD5cbiAgICApXG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFE7Ozs7Ozs7Ozs7OztXQWdCbkIsa0JBQVM7TUFDUCxrQkFBc0QsS0FBS0MsS0FBM0Q7TUFBQSxJQUFRQyxRQUFSLGVBQVFBLFFBQVI7TUFBQSxJQUFrQkMsSUFBbEIsZUFBa0JBLElBQWxCO01BQUEsSUFBd0JDLElBQXhCLGVBQXdCQSxJQUF4QjtNQUFBLElBQThCQyxTQUE5QixlQUE4QkEsU0FBOUI7TUFBQSxJQUE0Q0osS0FBNUM7TUFFQSxJQUFJSyxXQUFKO01BQ0EsSUFBSUgsSUFBSSxLQUFLLEdBQWIsRUFBa0JHLFdBQVcsR0FBRyxDQUFkO01BQ2xCLElBQUlILElBQUksS0FBSyxHQUFiLEVBQWtCRyxXQUFXLEdBQUcsQ0FBZDtNQUNsQixJQUFJSCxJQUFJLEtBQUssR0FBYixFQUFrQkcsV0FBVyxHQUFHLENBQWQ7TUFDbEIsSUFBSUgsSUFBSSxLQUFLLEdBQWIsRUFBa0JHLFdBQVcsR0FBRyxFQUFkO01BRWxCLElBQUlDLE9BQUo7TUFDQSxJQUFJSixJQUFJLEtBQUssR0FBYixFQUFrQkksT0FBTyxHQUFHLENBQVY7TUFDbEIsSUFBSUosSUFBSSxLQUFLLEdBQWIsRUFBa0JJLE9BQU8sR0FBRyxDQUFWO01BQ2xCLElBQUlKLElBQUksS0FBSyxHQUFiLEVBQWtCSSxPQUFPLEdBQUcsQ0FBVjtNQUNsQixJQUFJSixJQUFJLEtBQUssR0FBYixFQUFrQkksT0FBTyxHQUFHLENBQVY7TUFFbEIsSUFBSUMsUUFBSjtNQUNBLElBQUlMLElBQUksS0FBSyxHQUFiLEVBQWtCSyxRQUFRLEdBQUcsRUFBWDtNQUNsQixJQUFJTCxJQUFJLEtBQUssR0FBYixFQUFrQkssUUFBUSxHQUFHLEVBQVg7TUFDbEIsSUFBSUwsSUFBSSxLQUFLLEdBQWIsRUFBa0JLLFFBQVEsR0FBRyxFQUFYO01BQ2xCLElBQUlMLElBQUksS0FBSyxHQUFiLEVBQWtCSyxRQUFRLEdBQUcsRUFBWDtNQUVsQixJQUFJQyxRQUFRLEdBQUcsQ0FBQ0QsUUFBRCxHQUFZLENBQTNCO01BQ0EsSUFBSUwsSUFBSSxLQUFLLEdBQWIsRUFBa0JNLFFBQVEsR0FBRyxDQUFDRCxRQUFaO01BRWxCLG9CQUNFLGdDQUFDLGdCQUFEO1FBQ0UsRUFBRSxFQUFDLElBREw7UUFFRSxRQUFRLEVBQUMsVUFGWDtRQUdFLE9BQU8sRUFBQyxPQUhWO1FBSUUsSUFBSSxFQUFFTCxJQUpSO1FBS0UsYUFBYSxFQUFFQyxJQUFJLEdBQUcsTUFBSCxHQUFZLElBTGpDO1FBTUUsV0FBVyxFQUFFQSxJQUFJLEdBQUdFLFdBQUgsR0FBaUI7TUFOcEMsR0FPTUwsS0FQTixHQVNHRyxJQUFJLGlCQUNILGdDQUFDLFVBQUQ7UUFDRSxJQUFJLEVBQUVBLElBRFI7UUFFRSxLQUFLLEVBQUVDLFNBRlQ7UUFHRSxRQUFRLEVBQUMsVUFIWDtRQUlFLElBQUksRUFBRUcsUUFKUjtRQUtFLElBQUksRUFBRUMsUUFMUjtRQU1FLEdBQUcsRUFBRUY7TUFOUCxFQVZKLEVBbUJHTCxRQW5CSCxDQURGO0lBdUJEOzs7RUEvRG1DUSxvQjs7O0FBQWpCVixRO2lDQUFBQSxRLCtDQUVkVyxnQkFBQSxDQUFLQyxTO0VBRVI7QUFDSjtBQUNBO0FBQ0E7RUFDSVIsSUFBSSxFQUFFUyxxQkFBQSxDQUFVQyxNOztFQUVoQjtBQUNKO0FBQ0E7RUFDSVQsU0FBUyxFQUFFUSxxQkFBQSxDQUFVQyJ9