"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uiBox = _interopRequireWildcard(require("ui-box"));

var _theme = require("../../theme");

var _excluded = ["size", "fill"],
    _excluded2 = ["theme", "id", "name", "height", "checked", "onChange", "disabled", "appearance", "hasCheckIcon", "defaultChecked"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var animationEasing = {
  spring: "cubic-bezier(0.175, 0.885, 0.320, 1.175)"
};
var handleStyleClass = (0, _glamor.css)({
  backgroundColor: '#fff',
  borderRadius: 9999
}).toString();
var iconContainerStyleClass = (0, _glamor.css)({
  transition: "all 500ms ".concat(animationEasing.spring),
  opacity: 0,
  display: 'flex',
  position: 'absolute',
  alignItems: 'center',
  justifyContent: 'center',
  paddingLeft: 4,
  '&[data-checked="true"]': {
    opacity: 1,
    transform: 'scale(1)'
  },
  '> svg': {
    transition: "all 500ms ".concat(animationEasing.spring),
    transform: 'scale(0)'
  },
  '&[data-checked="true"] > svg': {
    transform: 'scale(1)'
  }
}).toString();
var handleContainerStyleClass = (0, _glamor.css)({
  transition: 'transform 200ms ease-in-out',
  transform: 'translateX(0%)',
  '&[data-checked="true"]': {
    transform: 'translateX(50%)'
  }
}).toString();

var CheckIcon = function CheckIcon(_ref) {
  var size = _ref.size,
      _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? 'currentColor' : _ref$fill,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement("svg", (0, _extends2["default"])({
    width: 10,
    height: size,
    viewBox: "0 0 10 7"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: fill,
    fillRule: "evenodd",
    d: "M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z"
  }));
};

CheckIcon.displayName = "CheckIcon";
CheckIcon.propTypes = {
  fill: _propTypes["default"].string,
  size: _propTypes["default"].number
};

var isControlled = function isControlled(component) {
  return {}.hasOwnProperty.call(component.props, 'checked');
};

var Switch = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Switch, _PureComponent);

  var _super = _createSuper(Switch);

  function Switch(props, context) {
    var _this;

    (0, _classCallCheck2["default"])(this, Switch);
    _this = _super.call(this, props, context);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleChange", function (value) {
      if (isControlled((0, _assertThisInitialized2["default"])(_this))) {
        _this.props.onChange(value);
      } else {
        _this.setState(function (_ref2) {
          var checked = _ref2.checked;
          return {
            checked: !checked
          };
        });

        _this.props.onChange(value);
      }
    });
    _this.state = {
      checked: props.checked || props.defaultChecked || false
    };
    return _this;
  }

  (0, _createClass2["default"])(Switch, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          id = _this$props.id,
          name = _this$props.name,
          height = _this$props.height,
          checkedProps = _this$props.checked,
          onChange = _this$props.onChange,
          disabled = _this$props.disabled,
          appearance = _this$props.appearance,
          hasCheckIcon = _this$props.hasCheckIcon,
          defaultChecked = _this$props.defaultChecked,
          props = (0, _objectWithoutProperties2["default"])(_this$props, _excluded2);
      var checked = isControlled(this) ? checkedProps : this.state.checked;
      var themedClassName = theme.getSwitchClassName(appearance);
      return /*#__PURE__*/_react["default"].createElement(_uiBox["default"], (0, _extends2["default"])({
        is: "label",
        display: "block",
        width: height * 2,
        position: "relative"
      }, props), /*#__PURE__*/_react["default"].createElement(_uiBox["default"], {
        is: "input",
        className: themedClassName,
        id: id,
        name: name,
        type: "checkbox",
        checked: checked,
        disabled: disabled,
        defaultChecked: defaultChecked,
        onChange: this.handleChange
      }), /*#__PURE__*/_react["default"].createElement(_uiBox["default"], {
        onClick: this.handleClick,
        height: height,
        width: height * 2
      }, /*#__PURE__*/_react["default"].createElement(_uiBox["default"], {
        height: height,
        width: height,
        "data-checked": checked,
        className: iconContainerStyleClass
      }, hasCheckIcon && /*#__PURE__*/_react["default"].createElement(CheckIcon, {
        size: height / 2 - 3
      })), /*#__PURE__*/_react["default"].createElement(_uiBox["default"], {
        width: height * 2,
        display: "flex",
        "data-checked": checked,
        className: handleContainerStyleClass
      }, /*#__PURE__*/_react["default"].createElement(_uiBox["default"], {
        flex: 1,
        padding: 2
      }, /*#__PURE__*/_react["default"].createElement(_uiBox["default"], {
        width: height - 4,
        height: height - 4,
        className: handleStyleClass
      })))));
    }
  }]);
  return Switch;
}(_react.PureComponent);

Switch.displayName = "Switch";
(0, _defineProperty2["default"])(Switch, "propTypes", _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _uiBox.spacing.propTypes), _uiBox.position.propTypes), _uiBox.layout.propTypes), {}, {
  /**
   * The id attribute of the radio.
   */
  id: _propTypes["default"].string,

  /**
   * The name attribute of the radio.
   */
  name: _propTypes["default"].string,

  /**
   * The value attribute of the radio.
   */
  value: _propTypes["default"].string,

  /**
   * The height of the switch.
   */
  height: _propTypes["default"].number,

  /**
   * When true, the switch is checked (on).
   */
  checked: _propTypes["default"].bool,

  /**
   * Function called when state changes.
   */
  onChange: _propTypes["default"].func,

  /**
   * When true, the switch is disabled.
   */
  disabled: _propTypes["default"].bool,

  /**
   * When true, the switch is invalid.
   */
  isInvalid: _propTypes["default"].bool,

  /**
   * The appearance of the checkbox.
   * The default theme only comes with a default style.
   */
  appearance: _propTypes["default"].string.isRequired,

  /**
   * When true, the switch has a check icon.
   */
  hasCheckIcon: _propTypes["default"].bool,

  /**
   * When true, the switch is true by default.
   * This is for uncontrolled usage.
   */
  defaultChecked: _propTypes["default"].bool,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: _propTypes["default"].object.isRequired
}));
(0, _defineProperty2["default"])(Switch, "defaultProps", {
  height: 16,
  onChange: function onChange() {},
  appearance: 'default',
  hasCheckIcon: true,
  disabled: false
});

var _default = (0, _theme.withTheme)(Switch);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJhbmltYXRpb25FYXNpbmciLCJzcHJpbmciLCJoYW5kbGVTdHlsZUNsYXNzIiwiY3NzIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwidG9TdHJpbmciLCJpY29uQ29udGFpbmVyU3R5bGVDbGFzcyIsInRyYW5zaXRpb24iLCJvcGFjaXR5IiwiZGlzcGxheSIsInBvc2l0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwicGFkZGluZ0xlZnQiLCJ0cmFuc2Zvcm0iLCJoYW5kbGVDb250YWluZXJTdHlsZUNsYXNzIiwiQ2hlY2tJY29uIiwic2l6ZSIsImZpbGwiLCJwcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsIm51bWJlciIsImlzQ29udHJvbGxlZCIsImNvbXBvbmVudCIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIlN3aXRjaCIsImNvbnRleHQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwic2V0U3RhdGUiLCJjaGVja2VkIiwic3RhdGUiLCJkZWZhdWx0Q2hlY2tlZCIsInRoZW1lIiwiaWQiLCJuYW1lIiwiaGVpZ2h0IiwiY2hlY2tlZFByb3BzIiwiZGlzYWJsZWQiLCJhcHBlYXJhbmNlIiwiaGFzQ2hlY2tJY29uIiwidGhlbWVkQ2xhc3NOYW1lIiwiZ2V0U3dpdGNoQ2xhc3NOYW1lIiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlQ2xpY2siLCJQdXJlQ29tcG9uZW50Iiwic3BhY2luZyIsImxheW91dCIsImJvb2wiLCJmdW5jIiwiaXNJbnZhbGlkIiwiaXNSZXF1aXJlZCIsIm9iamVjdCIsIndpdGhUaGVtZSJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zd2l0Y2gvc3JjL1N3aXRjaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InXG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEJveCwgeyBzcGFjaW5nLCBwb3NpdGlvbiwgbGF5b3V0IH0gZnJvbSAndWktYm94J1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5cbmNvbnN0IGFuaW1hdGlvbkVhc2luZyA9IHtcbiAgc3ByaW5nOiBgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMjAsIDEuMTc1KWBcbn1cblxuY29uc3QgaGFuZGxlU3R5bGVDbGFzcyA9IGNzcyh7XG4gIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICBib3JkZXJSYWRpdXM6IDk5OTlcbn0pLnRvU3RyaW5nKClcblxuY29uc3QgaWNvbkNvbnRhaW5lclN0eWxlQ2xhc3MgPSBjc3Moe1xuICB0cmFuc2l0aW9uOiBgYWxsIDUwMG1zICR7YW5pbWF0aW9uRWFzaW5nLnNwcmluZ31gLFxuICBvcGFjaXR5OiAwLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICBwYWRkaW5nTGVmdDogNCxcbiAgJyZbZGF0YS1jaGVja2VkPVwidHJ1ZVwiXSc6IHtcbiAgICBvcGFjaXR5OiAxLFxuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpJ1xuICB9LFxuICAnPiBzdmcnOiB7XG4gICAgdHJhbnNpdGlvbjogYGFsbCA1MDBtcyAke2FuaW1hdGlvbkVhc2luZy5zcHJpbmd9YCxcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgwKSdcbiAgfSxcbiAgJyZbZGF0YS1jaGVja2VkPVwidHJ1ZVwiXSA+IHN2Zyc6IHtcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKSdcbiAgfVxufSkudG9TdHJpbmcoKVxuXG5jb25zdCBoYW5kbGVDb250YWluZXJTdHlsZUNsYXNzID0gY3NzKHtcbiAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSAyMDBtcyBlYXNlLWluLW91dCcsXG4gIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCUpJyxcbiAgJyZbZGF0YS1jaGVja2VkPVwidHJ1ZVwiXSc6IHtcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDUwJSknXG4gIH1cbn0pLnRvU3RyaW5nKClcblxuY29uc3QgQ2hlY2tJY29uID0gKHsgc2l6ZSwgZmlsbCA9ICdjdXJyZW50Q29sb3InLCAuLi5wcm9wcyB9KSA9PiAoXG4gIDxzdmcgd2lkdGg9ezEwfSBoZWlnaHQ9e3NpemV9IHZpZXdCb3g9XCIwIDAgMTAgN1wiIHsuLi5wcm9wc30+XG4gICAgPHBhdGhcbiAgICAgIGZpbGw9e2ZpbGx9XG4gICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgZD1cIk00IDQuNTg2TDEuNzA3IDIuMjkzQTEgMSAwIDEgMCAuMjkzIDMuNzA3bDMgM2EuOTk3Ljk5NyAwIDAgMCAxLjQxNCAwbDUtNUExIDEgMCAxIDAgOC4yOTMuMjkzTDQgNC41ODZ6XCJcbiAgICAvPlxuICA8L3N2Zz5cbilcblxuQ2hlY2tJY29uLnByb3BUeXBlcyA9IHtcbiAgZmlsbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2l6ZTogUHJvcFR5cGVzLm51bWJlclxufVxuXG5jb25zdCBpc0NvbnRyb2xsZWQgPSBjb21wb25lbnQgPT4ge1xuICByZXR1cm4ge30uaGFzT3duUHJvcGVydHkuY2FsbChjb21wb25lbnQucHJvcHMsICdjaGVja2VkJylcbn1cblxuY2xhc3MgU3dpdGNoIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgc29tZSBCb3ggQVBJcy5cbiAgICAgKi9cbiAgICAuLi5zcGFjaW5nLnByb3BUeXBlcyxcbiAgICAuLi5wb3NpdGlvbi5wcm9wVHlwZXMsXG4gICAgLi4ubGF5b3V0LnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBpZCBhdHRyaWJ1dGUgb2YgdGhlIHJhZGlvLlxuICAgICAqL1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogVGhlIG5hbWUgYXR0cmlidXRlIG9mIHRoZSByYWRpby5cbiAgICAgKi9cbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHZhbHVlIGF0dHJpYnV0ZSBvZiB0aGUgcmFkaW8uXG4gICAgICovXG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSBzd2l0Y2guXG4gICAgICovXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgc3dpdGNoIGlzIGNoZWNrZWQgKG9uKS5cbiAgICAgKi9cbiAgICBjaGVja2VkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIHN0YXRlIGNoYW5nZXMuXG4gICAgICovXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgc3dpdGNoIGlzIGRpc2FibGVkLlxuICAgICAqL1xuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIHN3aXRjaCBpcyBpbnZhbGlkLlxuICAgICAqL1xuICAgIGlzSW52YWxpZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgYXBwZWFyYW5jZSBvZiB0aGUgY2hlY2tib3guXG4gICAgICogVGhlIGRlZmF1bHQgdGhlbWUgb25seSBjb21lcyB3aXRoIGEgZGVmYXVsdCBzdHlsZS5cbiAgICAgKi9cbiAgICBhcHBlYXJhbmNlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSBzd2l0Y2ggaGFzIGEgY2hlY2sgaWNvbi5cbiAgICAgKi9cbiAgICBoYXNDaGVja0ljb246IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgc3dpdGNoIGlzIHRydWUgYnkgZGVmYXVsdC5cbiAgICAgKiBUaGlzIGlzIGZvciB1bmNvbnRyb2xsZWQgdXNhZ2UuXG4gICAgICovXG4gICAgZGVmYXVsdENoZWNrZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogVGhlbWUgcHJvdmlkZWQgYnkgVGhlbWVQcm92aWRlci5cbiAgICAgKi9cbiAgICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGhlaWdodDogMTYsXG4gICAgb25DaGFuZ2U6ICgpID0+IHt9LFxuICAgIGFwcGVhcmFuY2U6ICdkZWZhdWx0JyxcbiAgICBoYXNDaGVja0ljb246IHRydWUsXG4gICAgZGlzYWJsZWQ6IGZhbHNlXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCkge1xuICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjaGVja2VkOiBwcm9wcy5jaGVja2VkIHx8IHByb3BzLmRlZmF1bHRDaGVja2VkIHx8IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlID0gdmFsdWUgPT4ge1xuICAgIGlmIChpc0NvbnRyb2xsZWQodGhpcykpIHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoKHsgY2hlY2tlZCB9KSA9PiAoe1xuICAgICAgICBjaGVja2VkOiAhY2hlY2tlZFxuICAgICAgfSkpXG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB0aGVtZSxcblxuICAgICAgaWQsXG4gICAgICBuYW1lLFxuICAgICAgaGVpZ2h0LFxuICAgICAgY2hlY2tlZDogY2hlY2tlZFByb3BzLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGFwcGVhcmFuY2UsXG4gICAgICBoYXNDaGVja0ljb24sXG4gICAgICBkZWZhdWx0Q2hlY2tlZCxcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IGNoZWNrZWQgPSBpc0NvbnRyb2xsZWQodGhpcykgPyBjaGVja2VkUHJvcHMgOiB0aGlzLnN0YXRlLmNoZWNrZWRcbiAgICBjb25zdCB0aGVtZWRDbGFzc05hbWUgPSB0aGVtZS5nZXRTd2l0Y2hDbGFzc05hbWUoYXBwZWFyYW5jZSlcblxuICAgIHJldHVybiAoXG4gICAgICA8Qm94XG4gICAgICAgIGlzPVwibGFiZWxcIlxuICAgICAgICBkaXNwbGF5PVwiYmxvY2tcIlxuICAgICAgICB3aWR0aD17aGVpZ2h0ICogMn1cbiAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgID5cbiAgICAgICAgPEJveFxuICAgICAgICAgIGlzPVwiaW5wdXRcIlxuICAgICAgICAgIGNsYXNzTmFtZT17dGhlbWVkQ2xhc3NOYW1lfVxuICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgZGVmYXVsdENoZWNrZWQ9e2RlZmF1bHRDaGVja2VkfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgICAgPEJveCBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfSBoZWlnaHQ9e2hlaWdodH0gd2lkdGg9e2hlaWdodCAqIDJ9PlxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgICAgd2lkdGg9e2hlaWdodH1cbiAgICAgICAgICAgIGRhdGEtY2hlY2tlZD17Y2hlY2tlZH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17aWNvbkNvbnRhaW5lclN0eWxlQ2xhc3N9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2hhc0NoZWNrSWNvbiAmJiA8Q2hlY2tJY29uIHNpemU9e2hlaWdodCAvIDIgLSAzfSAvPn1cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICB3aWR0aD17aGVpZ2h0ICogMn1cbiAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICAgIGRhdGEtY2hlY2tlZD17Y2hlY2tlZH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17aGFuZGxlQ29udGFpbmVyU3R5bGVDbGFzc31cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Qm94IGZsZXg9ezF9IHBhZGRpbmc9ezJ9PlxuICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgd2lkdGg9e2hlaWdodCAtIDR9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXtoZWlnaHQgLSA0fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aGFuZGxlU3R5bGVDbGFzc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoU3dpdGNoKVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGVBQWUsR0FBRztFQUN0QkMsTUFBTTtBQURnQixDQUF4QjtBQUlBLElBQU1DLGdCQUFnQixHQUFHLElBQUFDLFdBQUEsRUFBSTtFQUMzQkMsZUFBZSxFQUFFLE1BRFU7RUFFM0JDLFlBQVks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