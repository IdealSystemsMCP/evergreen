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

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uiBox = _interopRequireWildcard(require("ui-box"));

var _typography = require("../../typography");

var _theme = require("../../theme");

var _excluded = ["fill"],
    _excluded2 = ["fill"],
    _excluded3 = ["theme", "id", "name", "label", "appearance", "disabled", "isInvalid", "checked", "onChange", "value", "indeterminate", "innerRef"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var CheckIcon = function CheckIcon(_ref) {
  var _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? 'currentColor' : _ref$fill,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement("svg", (0, _extends2["default"])({
    width: 10,
    height: 7,
    viewBox: "0 0 10 7"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: fill,
    fillRule: "evenodd",
    d: "M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z"
  }));
};

CheckIcon.displayName = "CheckIcon";
CheckIcon.propTypes = {
  fill: _propTypes["default"].string
};

var MinusIcon = function MinusIcon(_ref2) {
  var _ref2$fill = _ref2.fill,
      fill = _ref2$fill === void 0 ? 'currentColor' : _ref2$fill,
      props = (0, _objectWithoutProperties2["default"])(_ref2, _excluded2);
  return /*#__PURE__*/_react["default"].createElement("svg", (0, _extends2["default"])({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: fill,
    fillRule: "evenodd",
    d: "M11 7H5c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1z"
  }));
};

MinusIcon.displayName = "MinusIcon";
MinusIcon.propTypes = {
  fill: _propTypes["default"].string
};

var Checkbox = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Checkbox, _PureComponent);

  var _super = _createSuper(Checkbox);

  function Checkbox() {
    var _this;

    (0, _classCallCheck2["default"])(this, Checkbox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleInnerRef", function (el) {
      if (el) {
        el.indeterminate = _this.props.indeterminate;
      }

      _this.props.innerRef(el);
    });
    return _this;
  }

  (0, _createClass2["default"])(Checkbox, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          id = _this$props.id,
          name = _this$props.name,
          label = _this$props.label,
          appearance = _this$props.appearance,
          disabled = _this$props.disabled,
          isInvalid = _this$props.isInvalid,
          checked = _this$props.checked,
          onChange = _this$props.onChange,
          value = _this$props.value,
          indeterminate = _this$props.indeterminate,
          innerRef = _this$props.innerRef,
          props = (0, _objectWithoutProperties2["default"])(_this$props, _excluded3);
      var themedClassName = theme.getCheckboxClassName(appearance);
      return /*#__PURE__*/_react["default"].createElement(_uiBox["default"], (0, _extends2["default"])({
        is: "label",
        cursor: disabled ? 'not-allowed' : 'pointer',
        position: "relative",
        display: "flex",
        marginY: 16
      }, props), /*#__PURE__*/_react["default"].createElement(_uiBox["default"], {
        className: themedClassName,
        is: "input",
        id: id,
        type: "checkbox",
        name: name,
        value: value,
        checked: checked || indeterminate,
        onChange: onChange,
        disabled: disabled,
        "aria-invalid": isInvalid,
        innerRef: this.handleInnerRef
      }), /*#__PURE__*/_react["default"].createElement(_uiBox["default"], {
        boxSizing: "border-box",
        borderRadius: 3,
        display: "flex",
        flex: "none",
        alignItems: "center",
        justifyContent: "center",
        width: 16,
        height: 16
      }, indeterminate ? /*#__PURE__*/_react["default"].createElement(MinusIcon, null) : /*#__PURE__*/_react["default"].createElement(CheckIcon, null)), label && /*#__PURE__*/_react["default"].createElement(_typography.Text, {
        marginLeft: 8,
        size: 300,
        color: disabled ? 'muted' : 'default'
      }, label));
    }
  }]);
  return Checkbox;
}(_react.PureComponent);

Checkbox.displayName = "Checkbox";
(0, _defineProperty2["default"])(Checkbox, "propTypes", _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _uiBox.spacing.propTypes), _uiBox.position.propTypes), _uiBox.layout.propTypes), _uiBox.dimensions.propTypes), {}, {
  /**
   * The id attribute of the checkbox.
   */
  id: _propTypes["default"].string,

  /**
   * The id attribute of the checkbox.
   */
  name: _propTypes["default"].string,

  /**
   * Label of the checkbox.
   */
  label: _propTypes["default"].node,

  /**
   * The value attribute of the checkbox.
   */
  value: _propTypes["default"].string,

  /**
   * The checked attribute of the checkbox.
   */
  checked: _propTypes["default"].bool,

  /**
   * State in addition to "checked" and "unchecked".
   * When true, the checkbox displays a "minus" icon.
   */
  indeterminate: _propTypes["default"].bool,

  /**
   * Function that returns the ref of the checkbox.
   */
  innerRef: _propTypes["default"].func,

  /**
   * Function called when state changes.
   */
  onChange: _propTypes["default"].func,

  /**
   * When true, the checkbox is disabled.
   */
  disabled: _propTypes["default"].bool,

  /**
   * When true, the aria-invalid attribute is true.
   * Used for accessibility.
   */
  isInvalid: _propTypes["default"].bool,

  /**
   * The appearance of the checkbox.
   * The default theme only comes with a default style.
   */
  appearance: _propTypes["default"].string,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: _propTypes["default"].object.isRequired
}));
(0, _defineProperty2["default"])(Checkbox, "defaultProps", {
  checked: false,
  indeterminate: false,
  innerRef: function innerRef() {},
  onChange: function onChange() {},
  appearance: 'default'
});

var _default = (0, _theme.withTheme)(Checkbox);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJDaGVja0ljb24iLCJmaWxsIiwicHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJNaW51c0ljb24iLCJDaGVja2JveCIsImVsIiwiaW5kZXRlcm1pbmF0ZSIsImlubmVyUmVmIiwidGhlbWUiLCJpZCIsIm5hbWUiLCJsYWJlbCIsImFwcGVhcmFuY2UiLCJkaXNhYmxlZCIsImlzSW52YWxpZCIsImNoZWNrZWQiLCJvbkNoYW5nZSIsInZhbHVlIiwidGhlbWVkQ2xhc3NOYW1lIiwiZ2V0Q2hlY2tib3hDbGFzc05hbWUiLCJoYW5kbGVJbm5lclJlZiIsIlB1cmVDb21wb25lbnQiLCJzcGFjaW5nIiwicG9zaXRpb24iLCJsYXlvdXQiLCJkaW1lbnNpb25zIiwibm9kZSIsImJvb2wiLCJmdW5jIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsIndpdGhUaGVtZSJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jaGVja2JveC9zcmMvQ2hlY2tib3guanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBCb3gsIHsgc3BhY2luZywgcG9zaXRpb24sIGxheW91dCwgZGltZW5zaW9ucyB9IGZyb20gJ3VpLWJveCdcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5cbmNvbnN0IENoZWNrSWNvbiA9ICh7IGZpbGwgPSAnY3VycmVudENvbG9yJywgLi4ucHJvcHMgfSkgPT4gKFxuICA8c3ZnIHdpZHRoPXsxMH0gaGVpZ2h0PXs3fSB2aWV3Qm94PVwiMCAwIDEwIDdcIiB7Li4ucHJvcHN9PlxuICAgIDxwYXRoXG4gICAgICBmaWxsPXtmaWxsfVxuICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgIGQ9XCJNNCA0LjU4NkwxLjcwNyAyLjI5M0ExIDEgMCAxIDAgLjI5MyAzLjcwN2wzIDNhLjk5Ny45OTcgMCAwIDAgMS40MTQgMGw1LTVBMSAxIDAgMSAwIDguMjkzLjI5M0w0IDQuNTg2elwiXG4gICAgLz5cbiAgPC9zdmc+XG4pXG5cbkNoZWNrSWNvbi5wcm9wVHlwZXMgPSB7XG4gIGZpbGw6IFByb3BUeXBlcy5zdHJpbmdcbn1cblxuY29uc3QgTWludXNJY29uID0gKHsgZmlsbCA9ICdjdXJyZW50Q29sb3InLCAuLi5wcm9wcyB9KSA9PiAoXG4gIDxzdmcgd2lkdGg9ezE2fSBoZWlnaHQ9ezE2fSB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgey4uLnByb3BzfT5cbiAgICA8cGF0aFxuICAgICAgZmlsbD17ZmlsbH1cbiAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICBkPVwiTTExIDdINWMtLjU1IDAtMSAuNDUtMSAxcy40NSAxIDEgMWg2Yy41NSAwIDEtLjQ1IDEtMXMtLjQ1LTEtMS0xelwiXG4gICAgLz5cbiAgPC9zdmc+XG4pXG5cbk1pbnVzSWNvbi5wcm9wVHlwZXMgPSB7XG4gIGZpbGw6IFByb3BUeXBlcy5zdHJpbmdcbn1cblxuY2xhc3MgQ2hlY2tib3ggZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyBzb21lIEJveCBBUElzLlxuICAgICAqL1xuICAgIC4uLnNwYWNpbmcucHJvcFR5cGVzLFxuICAgIC4uLnBvc2l0aW9uLnByb3BUeXBlcyxcbiAgICAuLi5sYXlvdXQucHJvcFR5cGVzLFxuICAgIC4uLmRpbWVuc2lvbnMucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGlkIGF0dHJpYnV0ZSBvZiB0aGUgY2hlY2tib3guXG4gICAgICovXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaWQgYXR0cmlidXRlIG9mIHRoZSBjaGVja2JveC5cbiAgICAgKi9cbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogTGFiZWwgb2YgdGhlIGNoZWNrYm94LlxuICAgICAqL1xuICAgIGxhYmVsOiBQcm9wVHlwZXMubm9kZSxcblxuICAgIC8qKlxuICAgICAqIFRoZSB2YWx1ZSBhdHRyaWJ1dGUgb2YgdGhlIGNoZWNrYm94LlxuICAgICAqL1xuICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGNoZWNrZWQgYXR0cmlidXRlIG9mIHRoZSBjaGVja2JveC5cbiAgICAgKi9cbiAgICBjaGVja2VkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFN0YXRlIGluIGFkZGl0aW9uIHRvIFwiY2hlY2tlZFwiIGFuZCBcInVuY2hlY2tlZFwiLlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIGNoZWNrYm94IGRpc3BsYXlzIGEgXCJtaW51c1wiIGljb24uXG4gICAgICovXG4gICAgaW5kZXRlcm1pbmF0ZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIHJlZiBvZiB0aGUgY2hlY2tib3guXG4gICAgICovXG4gICAgaW5uZXJSZWY6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gY2FsbGVkIHdoZW4gc3RhdGUgY2hhbmdlcy5cbiAgICAgKi9cbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSBjaGVja2JveCBpcyBkaXNhYmxlZC5cbiAgICAgKi9cbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSBhcmlhLWludmFsaWQgYXR0cmlidXRlIGlzIHRydWUuXG4gICAgICogVXNlZCBmb3IgYWNjZXNzaWJpbGl0eS5cbiAgICAgKi9cbiAgICBpc0ludmFsaWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGFwcGVhcmFuY2Ugb2YgdGhlIGNoZWNrYm94LlxuICAgICAqIFRoZSBkZWZhdWx0IHRoZW1lIG9ubHkgY29tZXMgd2l0aCBhIGRlZmF1bHQgc3R5bGUuXG4gICAgICovXG4gICAgYXBwZWFyYW5jZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFRoZW1lIHByb3ZpZGVkIGJ5IFRoZW1lUHJvdmlkZXIuXG4gICAgICovXG4gICAgdGhlbWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjaGVja2VkOiBmYWxzZSxcbiAgICBpbmRldGVybWluYXRlOiBmYWxzZSxcbiAgICBpbm5lclJlZjogKCkgPT4ge30sXG4gICAgb25DaGFuZ2U6ICgpID0+IHt9LFxuICAgIGFwcGVhcmFuY2U6ICdkZWZhdWx0J1xuICB9XG5cbiAgaGFuZGxlSW5uZXJSZWYgPSBlbCA9PiB7XG4gICAgaWYgKGVsKSB7XG4gICAgICBlbC5pbmRldGVybWluYXRlID0gdGhpcy5wcm9wcy5pbmRldGVybWluYXRlXG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5pbm5lclJlZihlbClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB0aGVtZSxcblxuICAgICAgaWQsXG4gICAgICBuYW1lLFxuICAgICAgbGFiZWwsXG4gICAgICBhcHBlYXJhbmNlLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBpc0ludmFsaWQsXG4gICAgICBjaGVja2VkLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICB2YWx1ZSxcbiAgICAgIGluZGV0ZXJtaW5hdGUsXG4gICAgICBpbm5lclJlZixcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IHRoZW1lZENsYXNzTmFtZSA9IHRoZW1lLmdldENoZWNrYm94Q2xhc3NOYW1lKGFwcGVhcmFuY2UpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJveFxuICAgICAgICBpcz1cImxhYmVsXCJcbiAgICAgICAgY3Vyc29yPXtkaXNhYmxlZCA/ICdub3QtYWxsb3dlZCcgOiAncG9pbnRlcid9XG4gICAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxuICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgIG1hcmdpblk9ezE2fVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICA+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBjbGFzc05hbWU9e3RoZW1lZENsYXNzTmFtZX1cbiAgICAgICAgICBpcz1cImlucHV0XCJcbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBjaGVja2VkPXtjaGVja2VkIHx8IGluZGV0ZXJtaW5hdGV9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICBhcmlhLWludmFsaWQ9e2lzSW52YWxpZH1cbiAgICAgICAgICBpbm5lclJlZj17dGhpcy5oYW5kbGVJbm5lclJlZn1cbiAgICAgICAgLz5cbiAgICAgICAgPEJveFxuICAgICAgICAgIGJveFNpemluZz1cImJvcmRlci1ib3hcIlxuICAgICAgICAgIGJvcmRlclJhZGl1cz17M31cbiAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgZmxleD1cIm5vbmVcIlxuICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcbiAgICAgICAgICB3aWR0aD17MTZ9XG4gICAgICAgICAgaGVpZ2h0PXsxNn1cbiAgICAgICAgPlxuICAgICAgICAgIHtpbmRldGVybWluYXRlID8gPE1pbnVzSWNvbiAvPiA6IDxDaGVja0ljb24gLz59XG4gICAgICAgIDwvQm94PlxuICAgICAgICB7bGFiZWwgJiYgKFxuICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICBtYXJnaW5MZWZ0PXs4fVxuICAgICAgICAgICAgc2l6ZT17MzAwfVxuICAgICAgICAgICAgY29sb3I9e2Rpc2FibGVkID8gJ211dGVkJyA6ICdkZWZhdWx0J31cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICApfVxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShDaGVja2JveClcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVk7RUFBQSxxQkFBR0MsSUFBSDtFQUFBLElBQUdBLElBQUgsMEJBQVUsY0FBVjtFQUFBLElBQTZCQyxLQUE3QjtFQUFBLG9CQUNoQjtJQUFLLEtBQUssRUFBRSxFQUFaO0lBQWdCLE1BQU0sRUFBRSxDQUF4QjtJQUEyQixPQUFPLEVBQUM7RUFBbkMsR0FBa0RBLEtBQWxELGdCQUNFO0lBQ0UsSUFBSSxFQUFFRCxJQURSO0lBRUUsUUFBUSxFQUFDLFNBRlg7SUFHRSxDQUFDLEVBQUM7RUFISixFQURGLENBRGdCO0FBQUEsQ0FBbEI7O0FBQU1ELFM7QUFVTkEsU0FBUyxDQUFDRyxTQUFWLEdBQXNCO0VBQ3BCRixJQUFJLEVBQUVHLHFCQUFBLENBQVVDO0FBREksQ0FBdEI7O0FBSUEsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVk7RUFBQSx1QkFBR0wsSUFBSDtFQUFBLElBQUdBLElBQUgsMkJBQVUsY0FBVjtFQUFBLElBQTZCQyxLQUE3QjtFQUFBLG9CQUNoQjtJQUFLLEtBQUssRUFBRSxFQUFaO0lBQWdCLE1BQU0sRUFBRSxFQUF4QjtJQUE0QixPQUFPLEVBQUM7RUFB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