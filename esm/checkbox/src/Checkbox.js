import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["fill"],
    _excluded2 = ["fill"],
    _excluded3 = ["theme", "id", "name", "label", "appearance", "disabled", "isInvalid", "checked", "onChange", "value", "indeterminate", "innerRef"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box, { spacing, position, layout, dimensions } from 'ui-box';
import { Text } from '../../typography';
import { withTheme } from '../../theme';

var CheckIcon = function CheckIcon(_ref) {
  var _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? 'currentColor' : _ref$fill,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 10,
    height: 7,
    viewBox: "0 0 10 7"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: fill,
    fillRule: "evenodd",
    d: "M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z"
  }));
};

CheckIcon.displayName = "CheckIcon";
CheckIcon.propTypes = {
  fill: PropTypes.string
};

var MinusIcon = function MinusIcon(_ref2) {
  var _ref2$fill = _ref2.fill,
      fill = _ref2$fill === void 0 ? 'currentColor' : _ref2$fill,
      props = _objectWithoutProperties(_ref2, _excluded2);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: fill,
    fillRule: "evenodd",
    d: "M11 7H5c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1z"
  }));
};

MinusIcon.displayName = "MinusIcon";
MinusIcon.propTypes = {
  fill: PropTypes.string
};

var Checkbox = /*#__PURE__*/function (_PureComponent) {
  _inherits(Checkbox, _PureComponent);

  var _super = _createSuper(Checkbox);

  function Checkbox() {
    var _this;

    _classCallCheck(this, Checkbox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "handleInnerRef", function (el) {
      if (el) {
        el.indeterminate = _this.props.indeterminate;
      }

      _this.props.innerRef(el);
    });

    return _this;
  }

  _createClass(Checkbox, [{
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
          props = _objectWithoutProperties(_this$props, _excluded3);

      var themedClassName = theme.getCheckboxClassName(appearance);
      return /*#__PURE__*/React.createElement(Box, _extends({
        is: "label",
        cursor: disabled ? 'not-allowed' : 'pointer',
        position: "relative",
        display: "flex",
        marginY: 16
      }, props), /*#__PURE__*/React.createElement(Box, {
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
      }), /*#__PURE__*/React.createElement(Box, {
        boxSizing: "border-box",
        borderRadius: 3,
        display: "flex",
        flex: "none",
        alignItems: "center",
        justifyContent: "center",
        width: 16,
        height: 16
      }, indeterminate ? /*#__PURE__*/React.createElement(MinusIcon, null) : /*#__PURE__*/React.createElement(CheckIcon, null)), label && /*#__PURE__*/React.createElement(Text, {
        marginLeft: 8,
        size: 300,
        color: disabled ? 'muted' : 'default'
      }, label));
    }
  }]);

  return Checkbox;
}(PureComponent);

Checkbox.displayName = "Checkbox";

_defineProperty(Checkbox, "propTypes", _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, spacing.propTypes), position.propTypes), layout.propTypes), dimensions.propTypes), {}, {
  /**
   * The id attribute of the checkbox.
   */
  id: PropTypes.string,

  /**
   * The id attribute of the checkbox.
   */
  name: PropTypes.string,

  /**
   * Label of the checkbox.
   */
  label: PropTypes.node,

  /**
   * The value attribute of the checkbox.
   */
  value: PropTypes.string,

  /**
   * The checked attribute of the checkbox.
   */
  checked: PropTypes.bool,

  /**
   * State in addition to "checked" and "unchecked".
   * When true, the checkbox displays a "minus" icon.
   */
  indeterminate: PropTypes.bool,

  /**
   * Function that returns the ref of the checkbox.
   */
  innerRef: PropTypes.func,

  /**
   * Function called when state changes.
   */
  onChange: PropTypes.func,

  /**
   * When true, the checkbox is disabled.
   */
  disabled: PropTypes.bool,

  /**
   * When true, the aria-invalid attribute is true.
   * Used for accessibility.
   */
  isInvalid: PropTypes.bool,

  /**
   * The appearance of the checkbox.
   * The default theme only comes with a default style.
   */
  appearance: PropTypes.string,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired
}));

_defineProperty(Checkbox, "defaultProps", {
  checked: false,
  indeterminate: false,
  innerRef: function innerRef() {},
  onChange: function onChange() {},
  appearance: 'default'
});

export default withTheme(Checkbox);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJCb3giLCJzcGFjaW5nIiwicG9zaXRpb24iLCJsYXlvdXQiLCJkaW1lbnNpb25zIiwiVGV4dCIsIndpdGhUaGVtZSIsIkNoZWNrSWNvbiIsImZpbGwiLCJwcm9wcyIsInByb3BUeXBlcyIsInN0cmluZyIsIk1pbnVzSWNvbiIsIkNoZWNrYm94IiwiZWwiLCJpbmRldGVybWluYXRlIiwiaW5uZXJSZWYiLCJ0aGVtZSIsImlkIiwibmFtZSIsImxhYmVsIiwiYXBwZWFyYW5jZSIsImRpc2FibGVkIiwiaXNJbnZhbGlkIiwiY2hlY2tlZCIsIm9uQ2hhbmdlIiwidmFsdWUiLCJ0aGVtZWRDbGFzc05hbWUiLCJnZXRDaGVja2JveENsYXNzTmFtZSIsImhhbmRsZUlubmVyUmVmIiwibm9kZSIsImJvb2wiLCJmdW5jIiwib2JqZWN0IiwiaXNSZXF1aXJlZCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jaGVja2JveC9zcmMvQ2hlY2tib3guanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBCb3gsIHsgc3BhY2luZywgcG9zaXRpb24sIGxheW91dCwgZGltZW5zaW9ucyB9IGZyb20gJ3VpLWJveCdcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5cbmNvbnN0IENoZWNrSWNvbiA9ICh7IGZpbGwgPSAnY3VycmVudENvbG9yJywgLi4ucHJvcHMgfSkgPT4gKFxuICA8c3ZnIHdpZHRoPXsxMH0gaGVpZ2h0PXs3fSB2aWV3Qm94PVwiMCAwIDEwIDdcIiB7Li4ucHJvcHN9PlxuICAgIDxwYXRoXG4gICAgICBmaWxsPXtmaWxsfVxuICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgIGQ9XCJNNCA0LjU4NkwxLjcwNyAyLjI5M0ExIDEgMCAxIDAgLjI5MyAzLjcwN2wzIDNhLjk5Ny45OTcgMCAwIDAgMS40MTQgMGw1LTVBMSAxIDAgMSAwIDguMjkzLjI5M0w0IDQuNTg2elwiXG4gICAgLz5cbiAgPC9zdmc+XG4pXG5cbkNoZWNrSWNvbi5wcm9wVHlwZXMgPSB7XG4gIGZpbGw6IFByb3BUeXBlcy5zdHJpbmdcbn1cblxuY29uc3QgTWludXNJY29uID0gKHsgZmlsbCA9ICdjdXJyZW50Q29sb3InLCAuLi5wcm9wcyB9KSA9PiAoXG4gIDxzdmcgd2lkdGg9ezE2fSBoZWlnaHQ9ezE2fSB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgey4uLnByb3BzfT5cbiAgICA8cGF0aFxuICAgICAgZmlsbD17ZmlsbH1cbiAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICBkPVwiTTExIDdINWMtLjU1IDAtMSAuNDUtMSAxcy40NSAxIDEgMWg2Yy41NSAwIDEtLjQ1IDEtMXMtLjQ1LTEtMS0xelwiXG4gICAgLz5cbiAgPC9zdmc+XG4pXG5cbk1pbnVzSWNvbi5wcm9wVHlwZXMgPSB7XG4gIGZpbGw6IFByb3BUeXBlcy5zdHJpbmdcbn1cblxuY2xhc3MgQ2hlY2tib3ggZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyBzb21lIEJveCBBUElzLlxuICAgICAqL1xuICAgIC4uLnNwYWNpbmcucHJvcFR5cGVzLFxuICAgIC4uLnBvc2l0aW9uLnByb3BUeXBlcyxcbiAgICAuLi5sYXlvdXQucHJvcFR5cGVzLFxuICAgIC4uLmRpbWVuc2lvbnMucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGlkIGF0dHJpYnV0ZSBvZiB0aGUgY2hlY2tib3guXG4gICAgICovXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaWQgYXR0cmlidXRlIG9mIHRoZSBjaGVja2JveC5cbiAgICAgKi9cbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogTGFiZWwgb2YgdGhlIGNoZWNrYm94LlxuICAgICAqL1xuICAgIGxhYmVsOiBQcm9wVHlwZXMubm9kZSxcblxuICAgIC8qKlxuICAgICAqIFRoZSB2YWx1ZSBhdHRyaWJ1dGUgb2YgdGhlIGNoZWNrYm94LlxuICAgICAqL1xuICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGNoZWNrZWQgYXR0cmlidXRlIG9mIHRoZSBjaGVja2JveC5cbiAgICAgKi9cbiAgICBjaGVja2VkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFN0YXRlIGluIGFkZGl0aW9uIHRvIFwiY2hlY2tlZFwiIGFuZCBcInVuY2hlY2tlZFwiLlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIGNoZWNrYm94IGRpc3BsYXlzIGEgXCJtaW51c1wiIGljb24uXG4gICAgICovXG4gICAgaW5kZXRlcm1pbmF0ZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIHJlZiBvZiB0aGUgY2hlY2tib3guXG4gICAgICovXG4gICAgaW5uZXJSZWY6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gY2FsbGVkIHdoZW4gc3RhdGUgY2hhbmdlcy5cbiAgICAgKi9cbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSBjaGVja2JveCBpcyBkaXNhYmxlZC5cbiAgICAgKi9cbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSBhcmlhLWludmFsaWQgYXR0cmlidXRlIGlzIHRydWUuXG4gICAgICogVXNlZCBmb3IgYWNjZXNzaWJpbGl0eS5cbiAgICAgKi9cbiAgICBpc0ludmFsaWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGFwcGVhcmFuY2Ugb2YgdGhlIGNoZWNrYm94LlxuICAgICAqIFRoZSBkZWZhdWx0IHRoZW1lIG9ubHkgY29tZXMgd2l0aCBhIGRlZmF1bHQgc3R5bGUuXG4gICAgICovXG4gICAgYXBwZWFyYW5jZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFRoZW1lIHByb3ZpZGVkIGJ5IFRoZW1lUHJvdmlkZXIuXG4gICAgICovXG4gICAgdGhlbWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjaGVja2VkOiBmYWxzZSxcbiAgICBpbmRldGVybWluYXRlOiBmYWxzZSxcbiAgICBpbm5lclJlZjogKCkgPT4ge30sXG4gICAgb25DaGFuZ2U6ICgpID0+IHt9LFxuICAgIGFwcGVhcmFuY2U6ICdkZWZhdWx0J1xuICB9XG5cbiAgaGFuZGxlSW5uZXJSZWYgPSBlbCA9PiB7XG4gICAgaWYgKGVsKSB7XG4gICAgICBlbC5pbmRldGVybWluYXRlID0gdGhpcy5wcm9wcy5pbmRldGVybWluYXRlXG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5pbm5lclJlZihlbClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB0aGVtZSxcblxuICAgICAgaWQsXG4gICAgICBuYW1lLFxuICAgICAgbGFiZWwsXG4gICAgICBhcHBlYXJhbmNlLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBpc0ludmFsaWQsXG4gICAgICBjaGVja2VkLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICB2YWx1ZSxcbiAgICAgIGluZGV0ZXJtaW5hdGUsXG4gICAgICBpbm5lclJlZixcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IHRoZW1lZENsYXNzTmFtZSA9IHRoZW1lLmdldENoZWNrYm94Q2xhc3NOYW1lKGFwcGVhcmFuY2UpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJveFxuICAgICAgICBpcz1cImxhYmVsXCJcbiAgICAgICAgY3Vyc29yPXtkaXNhYmxlZCA/ICdub3QtYWxsb3dlZCcgOiAncG9pbnRlcid9XG4gICAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxuICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgIG1hcmdpblk9ezE2fVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICA+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBjbGFzc05hbWU9e3RoZW1lZENsYXNzTmFtZX1cbiAgICAgICAgICBpcz1cImlucHV0XCJcbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBjaGVja2VkPXtjaGVja2VkIHx8IGluZGV0ZXJtaW5hdGV9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICBhcmlhLWludmFsaWQ9e2lzSW52YWxpZH1cbiAgICAgICAgICBpbm5lclJlZj17dGhpcy5oYW5kbGVJbm5lclJlZn1cbiAgICAgICAgLz5cbiAgICAgICAgPEJveFxuICAgICAgICAgIGJveFNpemluZz1cImJvcmRlci1ib3hcIlxuICAgICAgICAgIGJvcmRlclJhZGl1cz17M31cbiAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgZmxleD1cIm5vbmVcIlxuICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcbiAgICAgICAgICB3aWR0aD17MTZ9XG4gICAgICAgICAgaGVpZ2h0PXsxNn1cbiAgICAgICAgPlxuICAgICAgICAgIHtpbmRldGVybWluYXRlID8gPE1pbnVzSWNvbiAvPiA6IDxDaGVja0ljb24gLz59XG4gICAgICAgIDwvQm94PlxuICAgICAgICB7bGFiZWwgJiYgKFxuICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICBtYXJnaW5MZWZ0PXs4fVxuICAgICAgICAgICAgc2l6ZT17MzAwfVxuICAgICAgICAgICAgY29sb3I9e2Rpc2FibGVkID8gJ211dGVkJyA6ICdkZWZhdWx0J31cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICApfVxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShDaGVja2JveClcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsYUFBaEIsUUFBcUMsT0FBckM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsR0FBUCxJQUFjQyxPQUFkLEVBQXVCQyxRQUF2QixFQUFpQ0MsTUFBakMsRUFBeUNDLFVBQXpDLFFBQTJELFFBQTNEO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQixrQkFBckI7QUFDQSxTQUFTQyxTQUFULFFBQTBCLGFBQTFCOztBQUVBLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0VBQUEscUJBQUdDLElBQUg7RUFBQSxJQUFHQSxJQUFILDBCQUFVLGNBQVY7RUFBQSxJQUE2QkMsS0FBN0I7O0VBQUEsb0JBQ2hCO0lBQUssS0FBSyxFQUFFLEVBQVo7SUFBZ0IsTUFBTSxFQUFFLENBQXhCO0lBQTJCLE9BQU8sRUFBQztFQUFuQyxHQUFrREEsS0FBbEQsZ0JBQ0U7SUFDRSxJQUFJLEVBQUVELElBRFI7SUFFRSxRQUFRLEVBQUMsU0FGWDtJQUdFLENBQUMsRUFBQztFQUhKLEVBREYsQ0FEZ0I7QUFBQSxDQUFsQjs7QUFBTUQsUztBQVVOQSxTQUFTLENBQUNHLFNBQVYsR0FBc0I7RUFDcEJGLElBQUksRUFBRVQsU0FBUyxDQUFDWTtBQURJLENB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