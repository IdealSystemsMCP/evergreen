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

var _excluded = ["size", "fill"],
    _excluded2 = ["theme", "id", "name", "label", "disabled", "isInvalid", "checked", "onChange", "value", "size", "isRequired", "appearance"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var CircleIcon = function CircleIcon(_ref) {
  var size = _ref.size,
      _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? 'currentColor' : _ref$fill,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement("svg", (0, _extends2["default"])({
    width: size,
    height: size,
    viewBox: "0 0 10 10"
  }, props), /*#__PURE__*/_react["default"].createElement("circle", {
    fill: fill,
    cx: "5",
    cy: "5",
    r: "5"
  }));
};

CircleIcon.displayName = "CircleIcon";
CircleIcon.propTypes = {
  fill: _propTypes["default"].string,
  size: _propTypes["default"].number
};

var Radio = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Radio, _PureComponent);

  var _super = _createSuper(Radio);

  function Radio() {
    var _this;

    (0, _classCallCheck2["default"])(this, Radio);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleChange", function (event) {
      _this.props.onChange(event, event.target.checked);
    });
    return _this;
  }

  (0, _createClass2["default"])(Radio, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          id = _this$props.id,
          name = _this$props.name,
          label = _this$props.label,
          disabled = _this$props.disabled,
          isInvalid = _this$props.isInvalid,
          checked = _this$props.checked,
          onChange = _this$props.onChange,
          value = _this$props.value,
          size = _this$props.size,
          isRequired = _this$props.isRequired,
          appearance = _this$props.appearance,
          props = (0, _objectWithoutProperties2["default"])(_this$props, _excluded2);
      var themedClassName = theme.getRadioClassName(appearance);
      return /*#__PURE__*/_react["default"].createElement(_uiBox["default"], (0, _extends2["default"])({
        is: "label",
        cursor: disabled ? 'not-allowed' : 'pointer',
        position: "relative",
        display: "flex",
        marginY: size === 12 ? 8 : 12
      }, props), /*#__PURE__*/_react["default"].createElement(_uiBox["default"], {
        is: "input",
        className: themedClassName,
        id: id,
        type: "radio",
        name: name,
        value: value,
        checked: checked,
        onChange: this.handleChange,
        disabled: disabled,
        "aria-invalid": isInvalid,
        required: isRequired
      }), /*#__PURE__*/_react["default"].createElement(_uiBox["default"], {
        boxSizing: "border-box",
        borderRadius: 9999,
        display: "flex",
        flex: "none",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 2,
        width: size,
        height: size
      }, /*#__PURE__*/_react["default"].createElement(CircleIcon, {
        size: size === 12 ? 4 : 4
      })), label && /*#__PURE__*/_react["default"].createElement(_typography.Text, {
        marginLeft: size === 12 ? 8 : 10,
        size: size === 12 ? 300 : 400,
        color: disabled ? 'muted' : 'default'
      }, label));
    }
  }]);
  return Radio;
}(_react.PureComponent);

Radio.displayName = "Radio";
(0, _defineProperty2["default"])(Radio, "propTypes", _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _uiBox.spacing.propTypes), _uiBox.position.propTypes), _uiBox.layout.propTypes), _uiBox.dimensions.propTypes), {}, {
  /**
   * The id attribute of the radio.
   */
  id: _propTypes["default"].string,

  /**
   * The name attribute of the radio.
   */
  name: _propTypes["default"].string,

  /**
   * Label of the radio.
   */
  label: _propTypes["default"].node,

  /**
   * The value attribute of the radio.
   */
  value: _propTypes["default"].string,

  /**
   * Function called when state changes
   * Signature:
   * ```
   * function(event: object, checked: boolean) => void
   * ```
   */
  onChange: _propTypes["default"].func,

  /**
   * When true, the radio is disabled.
   */
  disabled: _propTypes["default"].bool,

  /**
   * When true, the radio is checked.
   */
  checked: _propTypes["default"].bool,

  /**
   * The size of the radio circle. This also informs the text size and spacing.
   */
  size: _propTypes["default"].oneOf([12, 16]),

  /**
   * When true, the radio get the required attribute.
   */
  isRequired: _propTypes["default"].bool.isRequired,

  /**
   * When true, the aria-invalid attribute is true.
   * Used for accessibility.
   */
  isInvalid: _propTypes["default"].bool.isRequired,

  /**
   * The appearance of the checkbox.
   * The default theme only comes with a default style.
   */
  appearance: _propTypes["default"].string.isRequired,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: _propTypes["default"].object.isRequired
}));
(0, _defineProperty2["default"])(Radio, "defaultProps", {
  appearance: 'default',
  onChange: function onChange() {},
  size: 12,
  isRequired: false,
  isInvalid: false
});

var _default = (0, _theme.withTheme)(Radio);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJDaXJjbGVJY29uIiwic2l6ZSIsImZpbGwiLCJwcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsIm51bWJlciIsIlJhZGlvIiwiZXZlbnQiLCJvbkNoYW5nZSIsInRhcmdldCIsImNoZWNrZWQiLCJ0aGVtZSIsImlkIiwibmFtZSIsImxhYmVsIiwiZGlzYWJsZWQiLCJpc0ludmFsaWQiLCJ2YWx1ZSIsImlzUmVxdWlyZWQiLCJhcHBlYXJhbmNlIiwidGhlbWVkQ2xhc3NOYW1lIiwiZ2V0UmFkaW9DbGFzc05hbWUiLCJoYW5kbGVDaGFuZ2UiLCJQdXJlQ29tcG9uZW50Iiwic3BhY2luZyIsInBvc2l0aW9uIiwibGF5b3V0IiwiZGltZW5zaW9ucyIsIm5vZGUiLCJmdW5jIiwiYm9vbCIsIm9uZU9mIiwib2JqZWN0Iiwid2l0aFRoZW1lIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JhZGlvL3NyYy9SYWRpby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEJveCwgeyBzcGFjaW5nLCBwb3NpdGlvbiwgbGF5b3V0LCBkaW1lbnNpb25zIH0gZnJvbSAndWktYm94J1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcblxuY29uc3QgQ2lyY2xlSWNvbiA9ICh7IHNpemUsIGZpbGwgPSAnY3VycmVudENvbG9yJywgLi4ucHJvcHMgfSkgPT4gKFxuICA8c3ZnIHdpZHRoPXtzaXplfSBoZWlnaHQ9e3NpemV9IHZpZXdCb3g9XCIwIDAgMTAgMTBcIiB7Li4ucHJvcHN9PlxuICAgIDxjaXJjbGUgZmlsbD17ZmlsbH0gY3g9XCI1XCIgY3k9XCI1XCIgcj1cIjVcIiAvPlxuICA8L3N2Zz5cbilcblxuQ2lyY2xlSWNvbi5wcm9wVHlwZXMgPSB7XG4gIGZpbGw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNpemU6IFByb3BUeXBlcy5udW1iZXJcbn1cblxuY2xhc3MgUmFkaW8gZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyBzb21lIEJveCBBUElzLlxuICAgICAqL1xuICAgIC4uLnNwYWNpbmcucHJvcFR5cGVzLFxuICAgIC4uLnBvc2l0aW9uLnByb3BUeXBlcyxcbiAgICAuLi5sYXlvdXQucHJvcFR5cGVzLFxuICAgIC4uLmRpbWVuc2lvbnMucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGlkIGF0dHJpYnV0ZSBvZiB0aGUgcmFkaW8uXG4gICAgICovXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSBhdHRyaWJ1dGUgb2YgdGhlIHJhZGlvLlxuICAgICAqL1xuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBMYWJlbCBvZiB0aGUgcmFkaW8uXG4gICAgICovXG4gICAgbGFiZWw6IFByb3BUeXBlcy5ub2RlLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHZhbHVlIGF0dHJpYnV0ZSBvZiB0aGUgcmFkaW8uXG4gICAgICovXG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiBjYWxsZWQgd2hlbiBzdGF0ZSBjaGFuZ2VzXG4gICAgICogU2lnbmF0dXJlOlxuICAgICAqIGBgYFxuICAgICAqIGZ1bmN0aW9uKGV2ZW50OiBvYmplY3QsIGNoZWNrZWQ6IGJvb2xlYW4pID0+IHZvaWRcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSByYWRpbyBpcyBkaXNhYmxlZC5cbiAgICAgKi9cbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSByYWRpbyBpcyBjaGVja2VkLlxuICAgICAqL1xuICAgIGNoZWNrZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHNpemUgb2YgdGhlIHJhZGlvIGNpcmNsZS4gVGhpcyBhbHNvIGluZm9ybXMgdGhlIHRleHQgc2l6ZSBhbmQgc3BhY2luZy5cbiAgICAgKi9cbiAgICBzaXplOiBQcm9wVHlwZXMub25lT2YoWzEyLCAxNl0pLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgcmFkaW8gZ2V0IHRoZSByZXF1aXJlZCBhdHRyaWJ1dGUuXG4gICAgICovXG4gICAgaXNSZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIGFyaWEtaW52YWxpZCBhdHRyaWJ1dGUgaXMgdHJ1ZS5cbiAgICAgKiBVc2VkIGZvciBhY2Nlc3NpYmlsaXR5LlxuICAgICAqL1xuICAgIGlzSW52YWxpZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBhcHBlYXJhbmNlIG9mIHRoZSBjaGVja2JveC5cbiAgICAgKiBUaGUgZGVmYXVsdCB0aGVtZSBvbmx5IGNvbWVzIHdpdGggYSBkZWZhdWx0IHN0eWxlLlxuICAgICAqL1xuICAgIGFwcGVhcmFuY2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZW1lIHByb3ZpZGVkIGJ5IFRoZW1lUHJvdmlkZXIuXG4gICAgICovXG4gICAgdGhlbWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBhcHBlYXJhbmNlOiAnZGVmYXVsdCcsXG4gICAgb25DaGFuZ2U6ICgpID0+IHt9LFxuICAgIHNpemU6IDEyLFxuICAgIGlzUmVxdWlyZWQ6IGZhbHNlLFxuICAgIGlzSW52YWxpZDogZmFsc2VcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IGV2ZW50ID0+IHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50LCBldmVudC50YXJnZXQuY2hlY2tlZClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB0aGVtZSxcblxuICAgICAgaWQsXG4gICAgICBuYW1lLFxuICAgICAgbGFiZWwsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGlzSW52YWxpZCxcbiAgICAgIGNoZWNrZWQsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIHZhbHVlLFxuICAgICAgc2l6ZSxcbiAgICAgIGlzUmVxdWlyZWQsXG4gICAgICBhcHBlYXJhbmNlLFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHRoZW1lZENsYXNzTmFtZSA9IHRoZW1lLmdldFJhZGlvQ2xhc3NOYW1lKGFwcGVhcmFuY2UpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJveFxuICAgICAgICBpcz1cImxhYmVsXCJcbiAgICAgICAgY3Vyc29yPXtkaXNhYmxlZCA/ICdub3QtYWxsb3dlZCcgOiAncG9pbnRlcid9XG4gICAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxuICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgIG1hcmdpblk9e3NpemUgPT09IDEyID8gOCA6IDEyfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICA+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBpcz1cImlucHV0XCJcbiAgICAgICAgICBjbGFzc05hbWU9e3RoZW1lZENsYXNzTmFtZX1cbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBjaGVja2VkPXtjaGVja2VkfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgYXJpYS1pbnZhbGlkPXtpc0ludmFsaWR9XG4gICAgICAgICAgcmVxdWlyZWQ9e2lzUmVxdWlyZWR9XG4gICAgICAgIC8+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBib3hTaXppbmc9XCJib3JkZXItYm94XCJcbiAgICAgICAgICBib3JkZXJSYWRpdXM9ezk5OTl9XG4gICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgIGZsZXg9XCJub25lXCJcbiAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgICAgbWFyZ2luVG9wPXsyfVxuICAgICAgICAgIHdpZHRoPXtzaXplfVxuICAgICAgICAgIGhlaWdodD17c2l6ZX1cbiAgICAgICAgPlxuICAgICAgICAgIDxDaXJjbGVJY29uIHNpemU9e3NpemUgPT09IDEyID8gNCA6IDR9IC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgICB7bGFiZWwgJiYgKFxuICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICBtYXJnaW5MZWZ0PXtzaXplID09PSAxMiA/IDggOiAxMH1cbiAgICAgICAgICAgIHNpemU9e3NpemUgPT09IDEyID8gMzAwIDogNDAwfVxuICAgICAgICAgICAgY29sb3I9e2Rpc2FibGVkID8gJ211dGVkJyA6ICdkZWZhdWx0J31cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICApfVxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShSYWRpbylcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7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