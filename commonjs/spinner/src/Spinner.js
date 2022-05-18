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

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uiBox = _interopRequireDefault(require("ui-box"));

var _theme = require("../../theme");

var _excluded = ["theme", "size"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var loadingKeyframes = _glamor.css.keyframes('loading', {
  '0%': {
    transform: 'rotate(0)'
  },
  '100%': {
    transform: 'rotate(360deg)'
  }
});

var loadingCircleKeyframes = _glamor.css.keyframes('loading-circle', {
  '0%': {
    strokeDashoffset: 600
  },
  '100%': {
    strokeDashoffset: 0
  }
});

var outerClass = (0, _glamor.css)({
  animation: "".concat(loadingKeyframes, " 2s linear infinite")
}).toString();

var innerClass = function innerClass(color) {
  return (0, _glamor.css)({
    strokeDashoffset: 600,
    strokeDasharray: 300,
    strokeWidth: 12,
    strokeMiterlimit: 10,
    strokeLinecap: 'round',
    animation: "".concat(loadingCircleKeyframes, " 1.6s cubic-bezier(0.4, 0.15, 0.6, 0.85) infinite"),
    stroke: color,
    fill: 'transparent'
  }).toString();
};

var Spinner = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Spinner, _PureComponent);

  var _super = _createSuper(Spinner);

  function Spinner(_ref) {
    var _this;

    var delay = _ref.delay;
    (0, _classCallCheck2["default"])(this, Spinner);
    _this = _super.call(this);
    _this.state = {
      isVisible: delay === 0
    };
    return _this;
  }

  (0, _createClass2["default"])(Spinner, [{
    key: "render",
    value: function render() {
      if (!this.state.isVisible) {
        return null;
      }

      var _this$props = this.props,
          theme = _this$props.theme,
          size = _this$props.size,
          props = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      return /*#__PURE__*/_react["default"].createElement(_uiBox["default"], (0, _extends2["default"])({
        width: size,
        height: size,
        lineHeight: 0
      }, props), /*#__PURE__*/_react["default"].createElement(_uiBox["default"], {
        is: "svg",
        className: outerClass,
        x: "0px",
        y: "0px",
        viewBox: "0 0 150 150"
      }, /*#__PURE__*/_react["default"].createElement(_uiBox["default"], {
        is: "circle",
        className: innerClass(theme.spinnerColor),
        cx: "75",
        cy: "75",
        r: "60"
      })));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var delay = this.props.delay;

      if (delay > 0) {
        this.delayTimer = setTimeout(function () {
          _this2.setState({
            isVisible: true
          });
        }, delay);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.delayTimer);
    }
  }]);
  return Spinner;
}(_react.PureComponent);

Spinner.displayName = "Spinner";
(0, _defineProperty2["default"])(Spinner, "propTypes", _objectSpread(_objectSpread({}, _uiBox["default"].propTypes), {}, {
  /**
   * Delay after which spinner should be visible.
   */
  delay: _propTypes["default"].number,

  /**
   * The size of the spinner.
   */
  size: _propTypes["default"].number.isRequired,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: _propTypes["default"].object.isRequired
}));
(0, _defineProperty2["default"])(Spinner, "defaultProps", {
  size: 40,
  delay: 0
});

var _default = (0, _theme.withTheme)(Spinner);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJsb2FkaW5nS2V5ZnJhbWVzIiwiY3NzIiwia2V5ZnJhbWVzIiwidHJhbnNmb3JtIiwibG9hZGluZ0NpcmNsZUtleWZyYW1lcyIsInN0cm9rZURhc2hvZmZzZXQiLCJvdXRlckNsYXNzIiwiYW5pbWF0aW9uIiwidG9TdHJpbmciLCJpbm5lckNsYXNzIiwiY29sb3IiLCJzdHJva2VEYXNoYXJyYXkiLCJzdHJva2VXaWR0aCIsInN0cm9rZU1pdGVybGltaXQiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlIiwiZmlsbCIsIlNwaW5uZXIiLCJkZWxheSIsInN0YXRlIiwiaXNWaXNpYmxlIiwicHJvcHMiLCJ0aGVtZSIsInNpemUiLCJzcGlubmVyQ29sb3IiLCJkZWxheVRpbWVyIiwic2V0VGltZW91dCIsInNldFN0YXRlIiwiY2xlYXJUaW1lb3V0IiwiUHVyZUNvbXBvbmVudCIsIkJveCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm51bWJlciIsImlzUmVxdWlyZWQiLCJvYmplY3QiLCJ3aXRoVGhlbWUiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc3Bpbm5lci9zcmMvU3Bpbm5lci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InXG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEJveCBmcm9tICd1aS1ib3gnXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcblxuY29uc3QgbG9hZGluZ0tleWZyYW1lcyA9IGNzcy5rZXlmcmFtZXMoJ2xvYWRpbmcnLCB7XG4gICcwJSc6IHtcbiAgICB0cmFuc2Zvcm06ICdyb3RhdGUoMCknXG4gIH0sXG4gICcxMDAlJzoge1xuICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgzNjBkZWcpJ1xuICB9XG59KVxuXG5jb25zdCBsb2FkaW5nQ2lyY2xlS2V5ZnJhbWVzID0gY3NzLmtleWZyYW1lcygnbG9hZGluZy1jaXJjbGUnLCB7XG4gICcwJSc6IHtcbiAgICBzdHJva2VEYXNob2Zmc2V0OiA2MDBcbiAgfSxcbiAgJzEwMCUnOiB7XG4gICAgc3Ryb2tlRGFzaG9mZnNldDogMFxuICB9XG59KVxuXG5jb25zdCBvdXRlckNsYXNzID0gY3NzKHtcbiAgYW5pbWF0aW9uOiBgJHtsb2FkaW5nS2V5ZnJhbWVzfSAycyBsaW5lYXIgaW5maW5pdGVgXG59KS50b1N0cmluZygpXG5cbmNvbnN0IGlubmVyQ2xhc3MgPSBjb2xvciA9PlxuICBjc3Moe1xuICAgIHN0cm9rZURhc2hvZmZzZXQ6IDYwMCxcbiAgICBzdHJva2VEYXNoYXJyYXk6IDMwMCxcbiAgICBzdHJva2VXaWR0aDogMTIsXG4gICAgc3Ryb2tlTWl0ZXJsaW1pdDogMTAsXG4gICAgc3Ryb2tlTGluZWNhcDogJ3JvdW5kJyxcbiAgICBhbmltYXRpb246IGAke2xvYWRpbmdDaXJjbGVLZXlmcmFtZXN9IDEuNnMgY3ViaWMtYmV6aWVyKDAuNCwgMC4xNSwgMC42LCAwLjg1KSBpbmZpbml0ZWAsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBmaWxsOiAndHJhbnNwYXJlbnQnXG4gIH0pLnRvU3RyaW5nKClcblxuY2xhc3MgU3Bpbm5lciBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBCb3ggY29tcG9uZW50IGFzIHRoZSBiYXNlLlxuICAgICAqL1xuICAgIC4uLkJveC5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBEZWxheSBhZnRlciB3aGljaCBzcGlubmVyIHNob3VsZCBiZSB2aXNpYmxlLlxuICAgICAqL1xuICAgIGRlbGF5OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHNpemUgb2YgdGhlIHNwaW5uZXIuXG4gICAgICovXG4gICAgc2l6ZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlbWUgcHJvdmlkZWQgYnkgVGhlbWVQcm92aWRlci5cbiAgICAgKi9cbiAgICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHNpemU6IDQwLFxuICAgIGRlbGF5OiAwXG4gIH1cblxuICBjb25zdHJ1Y3Rvcih7IGRlbGF5IH0pIHtcbiAgICBzdXBlcigpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNWaXNpYmxlOiBkZWxheSA9PT0gMFxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUuaXNWaXNpYmxlKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGNvbnN0IHsgdGhlbWUsIHNpemUsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3ggd2lkdGg9e3NpemV9IGhlaWdodD17c2l6ZX0gbGluZUhlaWdodD17MH0gey4uLnByb3BzfT5cbiAgICAgICAgPEJveFxuICAgICAgICAgIGlzPVwic3ZnXCJcbiAgICAgICAgICBjbGFzc05hbWU9e291dGVyQ2xhc3N9XG4gICAgICAgICAgeD1cIjBweFwiXG4gICAgICAgICAgeT1cIjBweFwiXG4gICAgICAgICAgdmlld0JveD1cIjAgMCAxNTAgMTUwXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIGlzPVwiY2lyY2xlXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17aW5uZXJDbGFzcyh0aGVtZS5zcGlubmVyQ29sb3IpfVxuICAgICAgICAgICAgY3g9XCI3NVwiXG4gICAgICAgICAgICBjeT1cIjc1XCJcbiAgICAgICAgICAgIHI9XCI2MFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveD5cbiAgICApXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGRlbGF5IH0gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAoZGVsYXkgPiAwKSB7XG4gICAgICB0aGlzLmRlbGF5VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgaXNWaXNpYmxlOiB0cnVlXG4gICAgICAgIH0pXG4gICAgICB9LCBkZWxheSlcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5kZWxheVRpbWVyKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShTcGlubmVyKVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGdCQUFnQixHQUFHQyxXQUFBLENBQUlDLFNBQUosQ0FBYyxTQUFkLEVBQXlCO0VBQ2hELE1BQU07SUFDSkMsU0FBUyxFQUFFO0VBRFAsQ0FEMEM7RUFJaEQsUUFBUTtJQUNOQSxTQUFTLEVBQUU7RUFETDtBQUp3QyxDQUF6QixDQUF6Qjs7QUFTQSxJQUFNQyxzQkFBc0IsR0FBR0gsV0FBQSxDQUFJQyxTQUFKLENBQWMsZ0JBQWQsRUFBZ0M7RUFDN0QsTUFBTTtJQUNKRyxnQkFBZ0IsRUFBRTtFQURkLENBRHVEO0VBSTdELFFBQVE7SUFDTkEsZ0JBQWdCLEVBQUU7RUFEWjtBQUpxRCxDQUFoQyxDQUEvQjs7QUFTQSxJQUFNQyxVQUFVLEdBQUcsSUFBQUwsV0FBQSxFQUFJO0VBQ3JCTSxTQUFTLFlBQUtQLGdCQUFMO0FBRFksQ0FBSixFQUVoQlEsUUFGZ0IsRUFBbkI7O0FBSUEsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQUMsS0FBSztFQUFBLE9BQ3RCLElBQUFULFdBQUEsRUFBSTtJQUNGSSxnQkFBZ0IsRUFBRSxHQURoQjtJQUVGTSxlQUFlLEVBQUUsR0FGZjtJQUdGQyxXQUFXLEVBQUUsRUFIWDtJQUlGQyxnQkFBZ0IsRUFBRSxFQUpoQjtJQUtGQyxhQUFhLEVBQUUsT0FMYjtJQU1GUCxTQUFTLFlBQUtILHNCQUFMLHNEQU5QO0lBT0ZXLE1BQU0sRUFBRUwsS0FQTjtJQVFGTSxJQUFJLEVBQUU7RUFSSixDQUFKLEVBU0dSLFFBVEgsRUFEc0I7QUFBQSxDQUF4Qjs7SUFZTVMsTzs7Ozs7RUE0QkosdUJBQXVCO0lBQUE7O0lBQUEsSUFBVEMsS0FBUyxRQUFUQSxLQUFTO0lBQUE7SUFDckI7SUFFQSxNQUFLQyxLQUFMLEdBQWE7TUFDWEMsU0FBUyxFQUFFRixLQUFLLEtBQUs7SUFEVixDQUFiO0lBSHFCO0VBTXRCOzs7O1dBRUQsa0JBQVM7TUFDUCxJQUFJLENBQUMsS0FBS0MsS0FBTCxDQUFXQyxTQUFoQixFQUEyQjtRQUN6QixPQUFPLElBQVA7TUFDRDs7TUFFRCxrQkFBa0MsS0FBS0MsS0FBdkM7TUFBQSxJQUFRQyxLQUFSLGVBQVFBLEtBQVI7TUFBQSxJQUFlQyxJQUFmLGVBQWVBLElBQWY7TUFBQSxJQUF3QkYsS0FBeEI7TUFDQSxvQkFDRSxnQ0FBQyxpQkFBRDtRQUFLLEtBQUssRUFBRUUsSUFBWjtRQUFrQixNQUFNLEVBQUVBLElBQTFCO1FBQWdDLFVBQVUsRUFBRTtNQUE1QyxHQUFtREYsS0FBbkQsZ0JBQ0UsZ0NBQUMsaUJBQUQ7UUFDRSxFQUFFLEVBQUMsS0FETDtRQUVFLFNBQVMsRUFBRWYsVUFGYjtRQUdFLENBQUMsRUFBQyxLQUhKO1FBSUUsQ0FBQyxFQUFDLEtBSko7UUFLRSxPQUFPLEVBQUM7TUFMVixnQkFPRSxnQ0FBQyxpQkFBRDtRQUNFLEVBQUUsRUFBQyxRQURMO1FBRUUsU0FBUyxFQUFFRyxVQUFVLENBQUNhLEtBQUssQ0FBQ0UsWUFBUCxDQUZ2QjtRQUdFLEVBQUUsRUFBQyxJQUhMO1FBSUUsRUFBRSxFQUFDLElBSkw7UUFLRSxDQUFDLEVBQUM7TUFMSixFQVBGLENBREYsQ0FERjtJQW1CRDs7O1dBRUQsNkJBQW9CO01BQUE7O01BQ2xCLElBQVFOLEtBQVIsR0FBa0IsS0FBS0csS0FBdkIsQ0FBUUgsS0FBUjs7TUFFQSxJQUFJQSxLQUFLLEdBQUcsQ0FBWixFQUFlO1FBQ2IsS0FBS08sVUFBTCxHQUFrQkMsVUFBVSxDQUFDLFlBQU07VUFDakMsTUFBSSxDQUFDQyxRQUFMLENBQWM7WUFDWlAsU0FBUyxFQUFFO1VBREMsQ0FBZDtRQUdELENBSjJCLEVBSXpCRixLQUp5QixDQUE1QjtNQUtEO0lBQ0Y7OztXQUVELGdDQUF1QjtNQUNyQlUsWUFBWSxDQUFDLEtBQUtILFVBQU4sQ0FBWjtJQUNEOzs7RUE3RW1CSSxvQjs7QUFBaEJaLE87aUNBQUFBLE8sK0NBS0NhLGlCQUFBLENBQUlDLFM7RUFFUDtBQUNKO0FBQ0E7RUFDSWIsS0FBSyxFQUFFYyxxQkFBQSxDQUFVQyxNOztFQUVqQjtBQUNKO0FBQ0E7RUFDSVYsSUFBSSxFQUFFUyxxQkFBQSxDQUFVQyxNQUFWLENBQWlCQyxVOztFQUV2QjtBQUNKO0FBQ0E7RUFDSVosS0FBSyxFQUFFVSxxQkFBQSxDQUFVRyxNQUFWLENBQWlCRDs7aUNBcEJ0QmpCLE8sa0JBdUJrQjtFQUNwQk0sSUFBSSxFQUFFLEVBRGM7RUFFcEJMLEtBQUssRUFBRTtBQUZhLEM7O2VBeURULElBQUFrQixnQkFBQSxFQUFVbkIsT0FBVixDIn0=