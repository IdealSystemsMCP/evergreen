import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["size", "fill"],
    _excluded2 = ["theme", "id", "name", "label", "disabled", "isInvalid", "checked", "onChange", "value", "size", "isRequired", "appearance"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box, { spacing, position, layout, dimensions } from 'ui-box';
import { Text } from '../../typography';
import { withTheme } from '../../theme';

var CircleIcon = function CircleIcon(_ref) {
  var size = _ref.size,
      _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? 'currentColor' : _ref$fill,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 10 10"
  }, props), /*#__PURE__*/React.createElement("circle", {
    fill: fill,
    cx: "5",
    cy: "5",
    r: "5"
  }));
};

CircleIcon.displayName = "CircleIcon";
CircleIcon.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.number
};

var Radio = /*#__PURE__*/function (_PureComponent) {
  _inherits(Radio, _PureComponent);

  var _super = _createSuper(Radio);

  function Radio() {
    var _this;

    _classCallCheck(this, Radio);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      _this.props.onChange(event, event.target.checked);
    });

    return _this;
  }

  _createClass(Radio, [{
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
          props = _objectWithoutProperties(_this$props, _excluded2);

      var themedClassName = theme.getRadioClassName(appearance);
      return /*#__PURE__*/React.createElement(Box, _extends({
        is: "label",
        cursor: disabled ? 'not-allowed' : 'pointer',
        position: "relative",
        display: "flex",
        marginY: size === 12 ? 8 : 12
      }, props), /*#__PURE__*/React.createElement(Box, {
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
      }), /*#__PURE__*/React.createElement(Box, {
        boxSizing: "border-box",
        borderRadius: 9999,
        display: "flex",
        flex: "none",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 2,
        width: size,
        height: size
      }, /*#__PURE__*/React.createElement(CircleIcon, {
        size: size === 12 ? 4 : 4
      })), label && /*#__PURE__*/React.createElement(Text, {
        marginLeft: size === 12 ? 8 : 10,
        size: size === 12 ? 300 : 400,
        color: disabled ? 'muted' : 'default'
      }, label));
    }
  }]);

  return Radio;
}(PureComponent);

Radio.displayName = "Radio";

_defineProperty(Radio, "propTypes", _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, spacing.propTypes), position.propTypes), layout.propTypes), dimensions.propTypes), {}, {
  /**
   * The id attribute of the radio.
   */
  id: PropTypes.string,

  /**
   * The name attribute of the radio.
   */
  name: PropTypes.string,

  /**
   * Label of the radio.
   */
  label: PropTypes.node,

  /**
   * The value attribute of the radio.
   */
  value: PropTypes.string,

  /**
   * Function called when state changes
   * Signature:
   * ```
   * function(event: object, checked: boolean) => void
   * ```
   */
  onChange: PropTypes.func,

  /**
   * When true, the radio is disabled.
   */
  disabled: PropTypes.bool,

  /**
   * When true, the radio is checked.
   */
  checked: PropTypes.bool,

  /**
   * The size of the radio circle. This also informs the text size and spacing.
   */
  size: PropTypes.oneOf([12, 16]),

  /**
   * When true, the radio get the required attribute.
   */
  isRequired: PropTypes.bool.isRequired,

  /**
   * When true, the aria-invalid attribute is true.
   * Used for accessibility.
   */
  isInvalid: PropTypes.bool.isRequired,

  /**
   * The appearance of the checkbox.
   * The default theme only comes with a default style.
   */
  appearance: PropTypes.string.isRequired,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired
}));

_defineProperty(Radio, "defaultProps", {
  appearance: 'default',
  onChange: function onChange() {},
  size: 12,
  isRequired: false,
  isInvalid: false
});

export default withTheme(Radio);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJCb3giLCJzcGFjaW5nIiwicG9zaXRpb24iLCJsYXlvdXQiLCJkaW1lbnNpb25zIiwiVGV4dCIsIndpdGhUaGVtZSIsIkNpcmNsZUljb24iLCJzaXplIiwiZmlsbCIsInByb3BzIiwicHJvcFR5cGVzIiwic3RyaW5nIiwibnVtYmVyIiwiUmFkaW8iLCJldmVudCIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiY2hlY2tlZCIsInRoZW1lIiwiaWQiLCJuYW1lIiwibGFiZWwiLCJkaXNhYmxlZCIsImlzSW52YWxpZCIsInZhbHVlIiwiaXNSZXF1aXJlZCIsImFwcGVhcmFuY2UiLCJ0aGVtZWRDbGFzc05hbWUiLCJnZXRSYWRpb0NsYXNzTmFtZSIsImhhbmRsZUNoYW5nZSIsIm5vZGUiLCJmdW5jIiwiYm9vbCIsIm9uZU9mIiwib2JqZWN0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JhZGlvL3NyYy9SYWRpby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEJveCwgeyBzcGFjaW5nLCBwb3NpdGlvbiwgbGF5b3V0LCBkaW1lbnNpb25zIH0gZnJvbSAndWktYm94J1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcblxuY29uc3QgQ2lyY2xlSWNvbiA9ICh7IHNpemUsIGZpbGwgPSAnY3VycmVudENvbG9yJywgLi4ucHJvcHMgfSkgPT4gKFxuICA8c3ZnIHdpZHRoPXtzaXplfSBoZWlnaHQ9e3NpemV9IHZpZXdCb3g9XCIwIDAgMTAgMTBcIiB7Li4ucHJvcHN9PlxuICAgIDxjaXJjbGUgZmlsbD17ZmlsbH0gY3g9XCI1XCIgY3k9XCI1XCIgcj1cIjVcIiAvPlxuICA8L3N2Zz5cbilcblxuQ2lyY2xlSWNvbi5wcm9wVHlwZXMgPSB7XG4gIGZpbGw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNpemU6IFByb3BUeXBlcy5udW1iZXJcbn1cblxuY2xhc3MgUmFkaW8gZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyBzb21lIEJveCBBUElzLlxuICAgICAqL1xuICAgIC4uLnNwYWNpbmcucHJvcFR5cGVzLFxuICAgIC4uLnBvc2l0aW9uLnByb3BUeXBlcyxcbiAgICAuLi5sYXlvdXQucHJvcFR5cGVzLFxuICAgIC4uLmRpbWVuc2lvbnMucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGlkIGF0dHJpYnV0ZSBvZiB0aGUgcmFkaW8uXG4gICAgICovXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSBhdHRyaWJ1dGUgb2YgdGhlIHJhZGlvLlxuICAgICAqL1xuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBMYWJlbCBvZiB0aGUgcmFkaW8uXG4gICAgICovXG4gICAgbGFiZWw6IFByb3BUeXBlcy5ub2RlLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHZhbHVlIGF0dHJpYnV0ZSBvZiB0aGUgcmFkaW8uXG4gICAgICovXG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiBjYWxsZWQgd2hlbiBzdGF0ZSBjaGFuZ2VzXG4gICAgICogU2lnbmF0dXJlOlxuICAgICAqIGBgYFxuICAgICAqIGZ1bmN0aW9uKGV2ZW50OiBvYmplY3QsIGNoZWNrZWQ6IGJvb2xlYW4pID0+IHZvaWRcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSByYWRpbyBpcyBkaXNhYmxlZC5cbiAgICAgKi9cbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSByYWRpbyBpcyBjaGVja2VkLlxuICAgICAqL1xuICAgIGNoZWNrZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHNpemUgb2YgdGhlIHJhZGlvIGNpcmNsZS4gVGhpcyBhbHNvIGluZm9ybXMgdGhlIHRleHQgc2l6ZSBhbmQgc3BhY2luZy5cbiAgICAgKi9cbiAgICBzaXplOiBQcm9wVHlwZXMub25lT2YoWzEyLCAxNl0pLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgcmFkaW8gZ2V0IHRoZSByZXF1aXJlZCBhdHRyaWJ1dGUuXG4gICAgICovXG4gICAgaXNSZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIGFyaWEtaW52YWxpZCBhdHRyaWJ1dGUgaXMgdHJ1ZS5cbiAgICAgKiBVc2VkIGZvciBhY2Nlc3NpYmlsaXR5LlxuICAgICAqL1xuICAgIGlzSW52YWxpZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBhcHBlYXJhbmNlIG9mIHRoZSBjaGVja2JveC5cbiAgICAgKiBUaGUgZGVmYXVsdCB0aGVtZSBvbmx5IGNvbWVzIHdpdGggYSBkZWZhdWx0IHN0eWxlLlxuICAgICAqL1xuICAgIGFwcGVhcmFuY2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZW1lIHByb3ZpZGVkIGJ5IFRoZW1lUHJvdmlkZXIuXG4gICAgICovXG4gICAgdGhlbWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBhcHBlYXJhbmNlOiAnZGVmYXVsdCcsXG4gICAgb25DaGFuZ2U6ICgpID0+IHt9LFxuICAgIHNpemU6IDEyLFxuICAgIGlzUmVxdWlyZWQ6IGZhbHNlLFxuICAgIGlzSW52YWxpZDogZmFsc2VcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IGV2ZW50ID0+IHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50LCBldmVudC50YXJnZXQuY2hlY2tlZClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB0aGVtZSxcblxuICAgICAgaWQsXG4gICAgICBuYW1lLFxuICAgICAgbGFiZWwsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGlzSW52YWxpZCxcbiAgICAgIGNoZWNrZWQsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIHZhbHVlLFxuICAgICAgc2l6ZSxcbiAgICAgIGlzUmVxdWlyZWQsXG4gICAgICBhcHBlYXJhbmNlLFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHRoZW1lZENsYXNzTmFtZSA9IHRoZW1lLmdldFJhZGlvQ2xhc3NOYW1lKGFwcGVhcmFuY2UpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJveFxuICAgICAgICBpcz1cImxhYmVsXCJcbiAgICAgICAgY3Vyc29yPXtkaXNhYmxlZCA/ICdub3QtYWxsb3dlZCcgOiAncG9pbnRlcid9XG4gICAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxuICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgIG1hcmdpblk9e3NpemUgPT09IDEyID8gOCA6IDEyfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICA+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBpcz1cImlucHV0XCJcbiAgICAgICAgICBjbGFzc05hbWU9e3RoZW1lZENsYXNzTmFtZX1cbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBjaGVja2VkPXtjaGVja2VkfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgYXJpYS1pbnZhbGlkPXtpc0ludmFsaWR9XG4gICAgICAgICAgcmVxdWlyZWQ9e2lzUmVxdWlyZWR9XG4gICAgICAgIC8+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBib3hTaXppbmc9XCJib3JkZXItYm94XCJcbiAgICAgICAgICBib3JkZXJSYWRpdXM9ezk5OTl9XG4gICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgIGZsZXg9XCJub25lXCJcbiAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgICAgbWFyZ2luVG9wPXsyfVxuICAgICAgICAgIHdpZHRoPXtzaXplfVxuICAgICAgICAgIGhlaWdodD17c2l6ZX1cbiAgICAgICAgPlxuICAgICAgICAgIDxDaXJjbGVJY29uIHNpemU9e3NpemUgPT09IDEyID8gNCA6IDR9IC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgICB7bGFiZWwgJiYgKFxuICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICBtYXJnaW5MZWZ0PXtzaXplID09PSAxMiA/IDggOiAxMH1cbiAgICAgICAgICAgIHNpemU9e3NpemUgPT09IDEyID8gMzAwIDogNDAwfVxuICAgICAgICAgICAgY29sb3I9e2Rpc2FibGVkID8gJ211dGVkJyA6ICdkZWZhdWx0J31cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICApfVxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShSYWRpbylcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxhQUFo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