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

var _uiBox = _interopRequireDefault(require("ui-box"));

var _excluded = ["children", "size", "icon", "iconColor"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var UnorderedList = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(UnorderedList, _PureComponent);

  var _super = _createSuper(UnorderedList);

  function UnorderedList() {
    (0, _classCallCheck2["default"])(this, UnorderedList);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(UnorderedList, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          size = _this$props.size,
          icon = _this$props.icon,
          iconColor = _this$props.iconColor,
          props = (0, _objectWithoutProperties2["default"])(_this$props, _excluded); // Only pass down icon-related props if specified

      var inheritedProps = icon ? {
        size: size,
        icon: icon,
        iconColor: iconColor
      } : {
        size: size
      };

      var finalChildren = _react["default"].Children.map(children, function (child) {
        if (! /*#__PURE__*/_react["default"].isValidElement(child)) {
          return child;
        }

        return /*#__PURE__*/_react["default"].cloneElement(child, _objectSpread(_objectSpread({}, inheritedProps), child.props));
      });

      return /*#__PURE__*/_react["default"].createElement(_uiBox["default"], (0, _extends2["default"])({}, UnorderedList.styles, props), finalChildren);
    }
  }]);
  return UnorderedList;
}(_react.PureComponent);

exports["default"] = UnorderedList;
UnorderedList.displayName = "UnorderedList";
(0, _defineProperty2["default"])(UnorderedList, "propTypes", _objectSpread(_objectSpread({}, _uiBox["default"].propTypes), {}, {
  /**
   * Size of the text used in a list item.
   * Can be: 300, 400, 500, 600.
   */
  size: _propTypes["default"].oneOf([300, 400, 500, 600]).isRequired,

  /**
   * When passed, adds a icon before each list item in the list
   * You can override this on a individual list item.
   */
  icon: _propTypes["default"].string,

  /**
   * The color of the icon in each list item in the list.
   */
  iconColor: _propTypes["default"].string
}));
(0, _defineProperty2["default"])(UnorderedList, "defaultProps", {
  size: 400
});
(0, _defineProperty2["default"])(UnorderedList, "styles", {
  is: 'ul',
  margin: 0,
  marginLeft: '1.1em',
  padding: 0,
  listStyle: 'disc'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJVbm9yZGVyZWRMaXN0IiwicHJvcHMiLCJjaGlsZHJlbiIsInNpemUiLCJpY29uIiwiaWNvbkNvbG9yIiwiaW5oZXJpdGVkUHJvcHMiLCJmaW5hbENoaWxkcmVuIiwiUmVhY3QiLCJDaGlsZHJlbiIsIm1hcCIsImNoaWxkIiwiaXNWYWxpZEVsZW1lbnQiLCJjbG9uZUVsZW1lbnQiLCJzdHlsZXMiLCJQdXJlQ29tcG9uZW50IiwiQm94IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib25lT2YiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwiaXMiLCJtYXJnaW4iLCJtYXJnaW5MZWZ0IiwicGFkZGluZyIsImxpc3RTdHlsZSJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9Vbm9yZGVyZWRMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgQm94IGZyb20gJ3VpLWJveCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVW5vcmRlcmVkTGlzdCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC4uLkJveC5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBTaXplIG9mIHRoZSB0ZXh0IHVzZWQgaW4gYSBsaXN0IGl0ZW0uXG4gICAgICogQ2FuIGJlOiAzMDAsIDQwMCwgNTAwLCA2MDAuXG4gICAgICovXG4gICAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFszMDAsIDQwMCwgNTAwLCA2MDBdKS5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiBwYXNzZWQsIGFkZHMgYSBpY29uIGJlZm9yZSBlYWNoIGxpc3QgaXRlbSBpbiB0aGUgbGlzdFxuICAgICAqIFlvdSBjYW4gb3ZlcnJpZGUgdGhpcyBvbiBhIGluZGl2aWR1YWwgbGlzdCBpdGVtLlxuICAgICAqL1xuICAgIGljb246IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29sb3Igb2YgdGhlIGljb24gaW4gZWFjaCBsaXN0IGl0ZW0gaW4gdGhlIGxpc3QuXG4gICAgICovXG4gICAgaWNvbkNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHNpemU6IDQwMFxuICB9XG5cbiAgc3RhdGljIHN0eWxlcyA9IHtcbiAgICBpczogJ3VsJyxcbiAgICBtYXJnaW46IDAsXG4gICAgbWFyZ2luTGVmdDogJzEuMWVtJyxcbiAgICBwYWRkaW5nOiAwLFxuICAgIGxpc3RTdHlsZTogJ2Rpc2MnXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgc2l6ZSwgaWNvbiwgaWNvbkNvbG9yLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgLy8gT25seSBwYXNzIGRvd24gaWNvbi1yZWxhdGVkIHByb3BzIGlmIHNwZWNpZmllZFxuICAgIGNvbnN0IGluaGVyaXRlZFByb3BzID0gaWNvbiA/IHsgc2l6ZSwgaWNvbiwgaWNvbkNvbG9yIH0gOiB7IHNpemUgfVxuXG4gICAgY29uc3QgZmluYWxDaGlsZHJlbiA9IFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgY2hpbGQgPT4ge1xuICAgICAgaWYgKCFSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgLi4uaW5oZXJpdGVkUHJvcHMsXG4gICAgICAgIC8vIFByZWZlciBtb3JlIGdyYW51bGFybHkgZGVmaW5lZCBpY29uIGlmIHByZXNlbnRcbiAgICAgICAgLi4uY2hpbGQucHJvcHNcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIHJldHVybiAoXG4gICAgICA8Qm94IHsuLi5Vbm9yZGVyZWRMaXN0LnN0eWxlc30gey4uLnByb3BzfT5cbiAgICAgICAge2ZpbmFsQ2hpbGRyZW59XG4gICAgICA8L0JveD5cbiAgICApXG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGE7Ozs7Ozs7Ozs7OztXQWtDbkIsa0JBQVM7TUFDUCxrQkFBc0QsS0FBS0MsS0FBM0Q7TUFBQSxJQUFRQyxRQUFSLGVBQVFBLFFBQVI7TUFBQSxJQUFrQkMsSUFBbEIsZUFBa0JBLElBQWxCO01BQUEsSUFBd0JDLElBQXhCLGVBQXdCQSxJQUF4QjtNQUFBLElBQThCQyxTQUE5QixlQUE4QkEsU0FBOUI7TUFBQSxJQUE0Q0osS0FBNUMscUVBRE8sQ0FHUDs7TUFDQSxJQUFNSyxjQUFjLEdBQUdGLElBQUksR0FBRztRQUFFRCxJQUFJLEVBQUpBLElBQUY7UUFBUUMsSUFBSSxFQUFKQSxJQUFSO1FBQWNDLFNBQVMsRUFBVEE7TUFBZCxDQUFILEdBQStCO1FBQUVGLElBQUksRUFBSkE7TUFBRixDQUExRDs7TUFFQSxJQUFNSSxhQUFhLEdBQUdDLGlCQUFBLENBQU1DLFFBQU4sQ0FBZUMsR0FBZixDQUFtQlIsUUFBbkIsRUFBNkIsVUFBQVMsS0FBSyxFQUFJO1FBQzFELElBQUksZUFBQ0gsaUJBQUEsQ0FBTUksY0FBTixDQUFxQkQsS0FBckIsQ0FBTCxFQUFrQztVQUNoQyxPQUFPQSxLQUFQO1FBQ0Q7O1FBRUQsb0JBQU9ILGlCQUFBLENBQU1LLFlBQU4sQ0FBbUJGLEtBQW5CLGtDQUNGTCxjQURFLEdBR0ZLLEtBQUssQ0FBQ1YsS0FISixFQUFQO01BS0QsQ0FWcUIsQ0FBdEI7O01BWUEsb0JBQ0UsZ0NBQUMsaUJBQUQsZ0NBQVNELGFBQWEsQ0FBQ2MsTUFBdkIsRUFBbUNiLEtBQW5DLEdBQ0dNLGFBREgsQ0FERjtJQUtEOzs7RUF6RHdDUSxvQjs7O0FBQXRCZixhO2lDQUFBQSxhLCtDQUVkZ0IsaUJBQUEsQ0FBSUMsUztFQUVQO0FBQ0o7QUFDQTtBQUNBO0VBQ0lkLElBQUksRUFBRWUscUJBQUEsQ0FBVUMsS0FBVixDQUFnQixDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixHQUFoQixDQUFoQixFQUFzQ0MsVTs7RUFFNUM7QUFDSjtBQUNBO0FBQ0E7RUFDSWhCLElBQUksRUFBRWMscUJBQUEsQ0FBVUcsTTs7RUFFaEI7QUFDSjtBQUNBO0VBQ0loQixTQUFTLEVBQUVhLHFCQUFBLENBQVVHOztpQ0FuQkpyQixhLGtCQXNCRztFQUNwQkcsSUFBSSxFQUFFO0FBRGMsQztpQ0F0QkhILGEsWUEwQkg7RUFDZHNCLEVBQUUsRUFBRSxJQURVO0VBRWRDLE1BQU0sRUFBRSxDQUZNO0VBR2RDLFVBQVUsRUFBRSxPQUhFO0VBSWRDLE9BQU8sRUFBRSxDQUpLO0VBS2RDLFNBQVMsRUFBRTtBQUxHLEMifQ==