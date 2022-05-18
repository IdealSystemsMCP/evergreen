"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uiBox = _interopRequireDefault(require("ui-box"));

var _classnames = _interopRequireDefault(require("classnames"));

var _typography = require("../../typography");

var _theme = require("../../theme");

var _scales = require("../../scales");

var _safeInvoke = _interopRequireDefault(require("../../lib/safe-invoke"));

var _Tag = _interopRequireDefault(require("./Tag"));

var _excluded = ["addOnBlur", "className", "disabled", "height", "inputProps", "inputRef", "onAdd", "onChange", "onInputChange", "onRemove", "separator", "tagProps", "theme", "values"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var inputId = 1;

var TagInput = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(TagInput, _React$Component);

  var _super = _createSuper(TagInput);

  function TagInput() {
    var _this;

    (0, _classCallCheck2["default"])(this, TagInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      inputValue: '',
      isFocused: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "id", "TagInput-".concat(inputId++));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "addTags", function () {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var _this$props = _this.props,
          onAdd = _this$props.onAdd,
          onChange = _this$props.onChange,
          values = _this$props.values;

      var newValues = _this.getValues(value);

      var shouldClearInput = (0, _safeInvoke["default"])(onAdd, newValues);

      if (typeof onChange === 'function') {
        shouldClearInput = shouldClearInput || onChange(values.concat(newValues));
      }

      if (shouldClearInput !== false) {
        _this.setState({
          inputValue: ''
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getValues", function () {
      var inputValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var separator = _this.props.separator;
      return separator ? inputValue.split(separator).map(function (v) {
        return v.trim();
      }).filter(function (v) {
        return v.length > 0;
      }) : [inputValue];
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleBackspaceToRemove", function () {
      var values = _this.props.values; // Delete last item in values

      _this.removeTagAtIndex(values.length - 1);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleBlur", function (event) {
      var container = event.target; // Use raf so that the dom has time to update `activeElement`

      requestAnimationFrame(function () {
        if (!container.contains(document.activeElement)) {
          if (_this.props.addOnBlur && _this.state.inputValue) {
            _this.addTags(_this.state.inputValue);
          }

          _this.setState({
            isFocused: false
          });
        }
      });
      (0, _safeInvoke["default"])(_this.props.onBlur, event);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleInputChange", function (event) {
      _this.setState({
        inputValue: event.target.value
      });

      (0, _safeInvoke["default"])(_this.props.onInputChange, event);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleInputFocus", function (event) {
      _this.setState({
        isFocused: true
      });

      (0, _safeInvoke["default"])(_this.props.onFocus, event);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleKeyDown", function (event) {
      var _event$target = event.target,
          selectionEnd = _event$target.selectionEnd,
          value = _event$target.value;

      if (event.key === 'Enter') {
        // Prevent Enter keypresses from submitting forms since they have special powers inside TagInput
        event.preventDefault();

        _this.addTags(value);
      } else if (event.key === 'Backspace' && selectionEnd === 0) {
        _this.handleBackspaceToRemove(event);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleRemoveTag", function (event) {
      // Using data attribute to simplify callback logic -- one handler for all children
      var index = Number(event.currentTarget.parentElement.getAttribute('data-tag-index'));

      _this.removeTagAtIndex(index);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "maybeRenderTag", function (tag, index) {
      if (!tag) {
        return null;
      }

      var _this$props2 = _this.props,
          disabled = _this$props2.disabled,
          tagProps = _this$props2.tagProps;
      var props = (0, _safeInvoke["default"])(tagProps, tag, index) || tagProps;
      return /*#__PURE__*/_react["default"].createElement(_Tag["default"], (0, _extends2["default"])({
        key: "".concat(tag, ":").concat(index),
        "data-tag-index": index,
        marginRight: (0, _scales.majorScale)(1),
        marginY: "6px",
        onRemove: disabled ? null : _this.handleRemoveTag,
        isRemovable: !disabled
      }, props), tag);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "removeTagAtIndex", function (index) {
      var _this$props3 = _this.props,
          onChange = _this$props3.onChange,
          onRemove = _this$props3.onRemove,
          values = _this$props3.values;
      (0, _safeInvoke["default"])(onRemove, values[index], index); // Remove item at index as a new array

      var newValues = values.filter(function (_, i) {
        return i !== index;
      });
      (0, _safeInvoke["default"])(onChange, newValues);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "setRef", function (node) {
      _this.input = node;
      (0, _safeInvoke["default"])(_this.props.inputRef, node);
    });
    return _this;
  }

  (0, _createClass2["default"])(TagInput, [{
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          addOnBlur = _this$props4.addOnBlur,
          className = _this$props4.className,
          disabled = _this$props4.disabled,
          height = _this$props4.height,
          inputProps = _this$props4.inputProps,
          inputRef = _this$props4.inputRef,
          onAdd = _this$props4.onAdd,
          onChange = _this$props4.onChange,
          onInputChange = _this$props4.onInputChange,
          onRemove = _this$props4.onRemove,
          separator = _this$props4.separator,
          tagProps = _this$props4.tagProps,
          theme = _this$props4.theme,
          values = _this$props4.values,
          props = (0, _objectWithoutProperties2["default"])(_this$props4, _excluded);
      var _this$state = this.state,
          inputValue = _this$state.inputValue,
          isFocused = _this$state.isFocused;
      var themedContainerClassName = theme.getTagInputClassName('default');
      var themedInputClassName = theme.getTextInputClassName('none');
      var textSize = theme.getTextSizeForControlHeight(height);
      var borderRadius = theme.getBorderRadiusForControlHeight(height);
      return /*#__PURE__*/_react["default"].createElement(_uiBox["default"], (0, _extends2["default"])({
        "aria-disabled": disabled || undefined,
        "aria-activedescendant": isFocused ? this.id : undefined,
        borderRadius: borderRadius,
        className: (0, _classnames["default"])(themedContainerClassName, className),
        paddingLeft: Math.round(height / 3.2),
        paddingRight: Math.round(height / 3.2),
        paddingY: "2px"
      }, props, {
        onBlur: this.handleBlur
      }), values.map(this.maybeRenderTag), /*#__PURE__*/_react["default"].createElement(_typography.Text, (0, _extends2["default"])({
        is: "input",
        id: this.id,
        color: disabled ? 'muted' : undefined,
        disabled: disabled,
        flexGrow: "1",
        height: height - 4,
        size: textSize,
        type: "text",
        value: inputValue
      }, inputProps, {
        className: themedInputClassName,
        ref: this.setRef,
        onChange: this.handleInputChange,
        onFocus: this.handleInputFocus,
        onKeyDown: this.handleKeyDown
      })));
    }
  }]);
  return TagInput;
}(_react["default"].Component);

TagInput.displayName = "TagInput";
(0, _defineProperty2["default"])(TagInput, "propTypes", {
  /** Whether or not the inputValue should be added to the tags when the input blurs. */
  addOnBlur: _propTypes["default"].bool,

  /** The class name to apply to the container component. */
  className: _propTypes["default"].string,

  /** Whether or not the input should be disabled. */
  disabled: _propTypes["default"].bool,

  /** The vertical size of the input */
  height: _propTypes["default"].number,

  /** Props to pass to the input component. Note that `ref` and `key` are not supported. See `inputRef`. */
  inputProps: _propTypes["default"].object,

  /**
   * Ref handler for the input element.
   * (input: HTMLInputElement | null) => void
   */
  inputRef: _propTypes["default"].func,

  /**
   * Callback invoked when new tags are added.
   * Returning `false` will prevent clearing the input.
   * (values: Array) => void | false
   */
  onAdd: _propTypes["default"].func,

  /**
   * Callback invoked when focus on the input blurs.
   * (event) => void
   */
  onBlur: _propTypes["default"].func,

  /**
   * Callback invoked when the tag values change.
   * Returning `false` will prevent clearing the input.
   * (values: Array) => void | false
   */
  onChange: _propTypes["default"].func,

  /**
   * Callback invoked when the input receives focus.
   * (event) => void
   */
  onFocus: _propTypes["default"].func,

  /**
   * Callback invoked when the value of the input is changed. Shorthand for `inputProps={{ onChange }}`.
   * (event) => void
   */
  onInputChange: _propTypes["default"].func,

  /**
   * Callback invoked when a tag is removed.
   * Receives value and index of removed tag.
   * (value: string | node, index: number) => void
   */
  onRemove: _propTypes["default"].func,

  /** Value or RegExp to split on pasted text or on enter keypress */
  separator: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].instanceOf(RegExp), _propTypes["default"].oneOf([false])]),

  /** Provide props to tag component (actually `Badge`, for now). */
  tagProps: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].func]),

  /**
   * Theme provided by ThemeProvider.
   */
  theme: _propTypes["default"].object.isRequired,

  /** Controlled tag values. Each value is rendered inside a tag. */
  values: _propTypes["default"].arrayOf(_propTypes["default"].node)
});
(0, _defineProperty2["default"])(TagInput, "defaultProps", {
  addOnBlur: false,
  disabled: false,
  height: 32,
  separator: /[,\n\r]/,
  values: [],
  tagProps: {}
});

var _default = (0, _theme.withTheme)(TagInput);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJpbnB1dElkIiwiVGFnSW5wdXQiLCJpbnB1dFZhbHVlIiwiaXNGb2N1c2VkIiwidmFsdWUiLCJwcm9wcyIsIm9uQWRkIiwib25DaGFuZ2UiLCJ2YWx1ZXMiLCJuZXdWYWx1ZXMiLCJnZXRWYWx1ZXMiLCJzaG91bGRDbGVhcklucHV0Iiwic2FmZUludm9rZSIsImNvbmNhdCIsInNldFN0YXRlIiwic2VwYXJhdG9yIiwic3BsaXQiLCJtYXAiLCJ2IiwidHJpbSIsImZpbHRlciIsImxlbmd0aCIsInJlbW92ZVRhZ0F0SW5kZXgiLCJldmVudCIsImNvbnRhaW5lciIsInRhcmdldCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNvbnRhaW5zIiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50IiwiYWRkT25CbHVyIiwic3RhdGUiLCJhZGRUYWdzIiwib25CbHVyIiwib25JbnB1dENoYW5nZSIsIm9uRm9jdXMiLCJzZWxlY3Rpb25FbmQiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZUJhY2tzcGFjZVRvUmVtb3ZlIiwiaW5kZXgiLCJOdW1iZXIiLCJjdXJyZW50VGFyZ2V0IiwicGFyZW50RWxlbWVudCIsImdldEF0dHJpYnV0ZSIsInRhZyIsImRpc2FibGVkIiwidGFnUHJvcHMiLCJtYWpvclNjYWxlIiwiaGFuZGxlUmVtb3ZlVGFnIiwib25SZW1vdmUiLCJfIiwiaSIsIm5vZGUiLCJpbnB1dCIsImlucHV0UmVmIiwiY2xhc3NOYW1lIiwiaGVpZ2h0IiwiaW5wdXRQcm9wcyIsInRoZW1lIiwidGhlbWVkQ29udGFpbmVyQ2xhc3NOYW1lIiwiZ2V0VGFnSW5wdXRDbGFzc05hbWUiLCJ0aGVtZWRJbnB1dENsYXNzTmFtZSIsImdldFRleHRJbnB1dENsYXNzTmFtZSIsInRleHRTaXplIiwiZ2V0VGV4dFNpemVGb3JDb250cm9sSGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiZ2V0Qm9yZGVyUmFkaXVzRm9yQ29udHJvbEhlaWdodCIsInVuZGVmaW5lZCIsImlkIiwiY3giLCJNYXRoIiwicm91bmQiLCJoYW5kbGVCbHVyIiwibWF5YmVSZW5kZXJUYWciLCJzZXRSZWYiLCJoYW5kbGVJbnB1dENoYW5nZSIsImhhbmRsZUlucHV0Rm9jdXMiLCJoYW5kbGVLZXlEb3duIiwiUmVhY3QiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJib29sIiwic3RyaW5nIiwibnVtYmVyIiwib2JqZWN0IiwiZnVuYyIsIm9uZU9mVHlwZSIsImluc3RhbmNlT2YiLCJSZWdFeHAiLCJvbmVPZiIsImlzUmVxdWlyZWQiLCJhcnJheU9mIiwid2l0aFRoZW1lIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3RhZy1pbnB1dC9zcmMvVGFnSW5wdXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAb3ZlcnZpZXcgVGFnSW5wdXQgYWNjZXB0cyBtdWx0aXBsZSB2YWx1ZXMgdGhhdCBjYW4gYmUgaW5kaXZpZHVhbGx5IHJlbW92ZWRcbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgQm94IGZyb20gJ3VpLWJveCdcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcbmltcG9ydCB7IG1ham9yU2NhbGUgfSBmcm9tICcuLi8uLi9zY2FsZXMnXG5pbXBvcnQgc2FmZUludm9rZSBmcm9tICcuLi8uLi9saWIvc2FmZS1pbnZva2UnXG5pbXBvcnQgVGFnIGZyb20gJy4vVGFnJ1xuXG5sZXQgaW5wdXRJZCA9IDFcblxuY2xhc3MgVGFnSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKiBXaGV0aGVyIG9yIG5vdCB0aGUgaW5wdXRWYWx1ZSBzaG91bGQgYmUgYWRkZWQgdG8gdGhlIHRhZ3Mgd2hlbiB0aGUgaW5wdXQgYmx1cnMuICovXG4gICAgYWRkT25CbHVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKiogVGhlIGNsYXNzIG5hbWUgdG8gYXBwbHkgdG8gdGhlIGNvbnRhaW5lciBjb21wb25lbnQuICovXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIC8qKiBXaGV0aGVyIG9yIG5vdCB0aGUgaW5wdXQgc2hvdWxkIGJlIGRpc2FibGVkLiAqL1xuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICAvKiogVGhlIHZlcnRpY2FsIHNpemUgb2YgdGhlIGlucHV0ICovXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIC8qKiBQcm9wcyB0byBwYXNzIHRvIHRoZSBpbnB1dCBjb21wb25lbnQuIE5vdGUgdGhhdCBgcmVmYCBhbmQgYGtleWAgYXJlIG5vdCBzdXBwb3J0ZWQuIFNlZSBgaW5wdXRSZWZgLiAqL1xuICAgIGlucHV0UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgLyoqXG4gICAgICogUmVmIGhhbmRsZXIgZm9yIHRoZSBpbnB1dCBlbGVtZW50LlxuICAgICAqIChpbnB1dDogSFRNTElucHV0RWxlbWVudCB8IG51bGwpID0+IHZvaWRcbiAgICAgKi9cbiAgICBpbnB1dFJlZjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgaW52b2tlZCB3aGVuIG5ldyB0YWdzIGFyZSBhZGRlZC5cbiAgICAgKiBSZXR1cm5pbmcgYGZhbHNlYCB3aWxsIHByZXZlbnQgY2xlYXJpbmcgdGhlIGlucHV0LlxuICAgICAqICh2YWx1ZXM6IEFycmF5KSA9PiB2b2lkIHwgZmFsc2VcbiAgICAgKi9cbiAgICBvbkFkZDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgaW52b2tlZCB3aGVuIGZvY3VzIG9uIHRoZSBpbnB1dCBibHVycy5cbiAgICAgKiAoZXZlbnQpID0+IHZvaWRcbiAgICAgKi9cbiAgICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIGludm9rZWQgd2hlbiB0aGUgdGFnIHZhbHVlcyBjaGFuZ2UuXG4gICAgICogUmV0dXJuaW5nIGBmYWxzZWAgd2lsbCBwcmV2ZW50IGNsZWFyaW5nIHRoZSBpbnB1dC5cbiAgICAgKiAodmFsdWVzOiBBcnJheSkgPT4gdm9pZCB8IGZhbHNlXG4gICAgICovXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIGludm9rZWQgd2hlbiB0aGUgaW5wdXQgcmVjZWl2ZXMgZm9jdXMuXG4gICAgICogKGV2ZW50KSA9PiB2b2lkXG4gICAgICovXG4gICAgb25Gb2N1czogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgaW52b2tlZCB3aGVuIHRoZSB2YWx1ZSBvZiB0aGUgaW5wdXQgaXMgY2hhbmdlZC4gU2hvcnRoYW5kIGZvciBgaW5wdXRQcm9wcz17eyBvbkNoYW5nZSB9fWAuXG4gICAgICogKGV2ZW50KSA9PiB2b2lkXG4gICAgICovXG4gICAgb25JbnB1dENoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgaW52b2tlZCB3aGVuIGEgdGFnIGlzIHJlbW92ZWQuXG4gICAgICogUmVjZWl2ZXMgdmFsdWUgYW5kIGluZGV4IG9mIHJlbW92ZWQgdGFnLlxuICAgICAqICh2YWx1ZTogc3RyaW5nIHwgbm9kZSwgaW5kZXg6IG51bWJlcikgPT4gdm9pZFxuICAgICAqL1xuICAgIG9uUmVtb3ZlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKiogVmFsdWUgb3IgUmVnRXhwIHRvIHNwbGl0IG9uIHBhc3RlZCB0ZXh0IG9yIG9uIGVudGVyIGtleXByZXNzICovXG4gICAgc2VwYXJhdG9yOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBQcm9wVHlwZXMuaW5zdGFuY2VPZihSZWdFeHApLFxuICAgICAgUHJvcFR5cGVzLm9uZU9mKFtmYWxzZV0pXG4gICAgXSksXG4gICAgLyoqIFByb3ZpZGUgcHJvcHMgdG8gdGFnIGNvbXBvbmVudCAoYWN0dWFsbHkgYEJhZGdlYCwgZm9yIG5vdykuICovXG4gICAgdGFnUHJvcHM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgLyoqXG4gICAgICogVGhlbWUgcHJvdmlkZWQgYnkgVGhlbWVQcm92aWRlci5cbiAgICAgKi9cbiAgICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIC8qKiBDb250cm9sbGVkIHRhZyB2YWx1ZXMuIEVhY2ggdmFsdWUgaXMgcmVuZGVyZWQgaW5zaWRlIGEgdGFnLiAqL1xuICAgIHZhbHVlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUpXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGFkZE9uQmx1cjogZmFsc2UsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIGhlaWdodDogMzIsXG4gICAgc2VwYXJhdG9yOiAvWyxcXG5cXHJdLyxcbiAgICB2YWx1ZXM6IFtdLFxuICAgIHRhZ1Byb3BzOiB7fVxuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgaW5wdXRWYWx1ZTogJycsXG4gICAgaXNGb2N1c2VkOiBmYWxzZVxuICB9XG5cbiAgaWQgPSBgVGFnSW5wdXQtJHtpbnB1dElkKyt9YFxuXG4gIGFkZFRhZ3MgPSAodmFsdWUgPSAnJykgPT4ge1xuICAgIGNvbnN0IHsgb25BZGQsIG9uQ2hhbmdlLCB2YWx1ZXMgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBuZXdWYWx1ZXMgPSB0aGlzLmdldFZhbHVlcyh2YWx1ZSlcbiAgICBsZXQgc2hvdWxkQ2xlYXJJbnB1dCA9IHNhZmVJbnZva2Uob25BZGQsIG5ld1ZhbHVlcylcblxuICAgIGlmICh0eXBlb2Ygb25DaGFuZ2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHNob3VsZENsZWFySW5wdXQgPSBzaG91bGRDbGVhcklucHV0IHx8IG9uQ2hhbmdlKHZhbHVlcy5jb25jYXQobmV3VmFsdWVzKSlcbiAgICB9XG5cbiAgICBpZiAoc2hvdWxkQ2xlYXJJbnB1dCAhPT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpbnB1dFZhbHVlOiAnJyB9KVxuICAgIH1cbiAgfVxuXG4gIGdldFZhbHVlcyA9IChpbnB1dFZhbHVlID0gJycpID0+IHtcbiAgICBjb25zdCB7IHNlcGFyYXRvciB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIHNlcGFyYXRvclxuICAgICAgPyBpbnB1dFZhbHVlXG4gICAgICAgICAgLnNwbGl0KHNlcGFyYXRvcilcbiAgICAgICAgICAubWFwKHYgPT4gdi50cmltKCkpXG4gICAgICAgICAgLmZpbHRlcih2ID0+IHYubGVuZ3RoID4gMClcbiAgICAgIDogW2lucHV0VmFsdWVdXG4gIH1cblxuICBoYW5kbGVCYWNrc3BhY2VUb1JlbW92ZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IHZhbHVlcyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgLy8gRGVsZXRlIGxhc3QgaXRlbSBpbiB2YWx1ZXNcbiAgICB0aGlzLnJlbW92ZVRhZ0F0SW5kZXgodmFsdWVzLmxlbmd0aCAtIDEpXG4gIH1cblxuICBoYW5kbGVCbHVyID0gZXZlbnQgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGV2ZW50LnRhcmdldFxuXG4gICAgLy8gVXNlIHJhZiBzbyB0aGF0IHRoZSBkb20gaGFzIHRpbWUgdG8gdXBkYXRlIGBhY3RpdmVFbGVtZW50YFxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBpZiAoIWNvbnRhaW5lci5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5hZGRPbkJsdXIgJiYgdGhpcy5zdGF0ZS5pbnB1dFZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5hZGRUYWdzKHRoaXMuc3RhdGUuaW5wdXRWYWx1ZSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0ZvY3VzZWQ6IGZhbHNlIH0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIHNhZmVJbnZva2UodGhpcy5wcm9wcy5vbkJsdXIsIGV2ZW50KVxuICB9XG5cbiAgaGFuZGxlSW5wdXRDaGFuZ2UgPSBldmVudCA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlucHV0VmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxuICAgIHNhZmVJbnZva2UodGhpcy5wcm9wcy5vbklucHV0Q2hhbmdlLCBldmVudClcbiAgfVxuXG4gIGhhbmRsZUlucHV0Rm9jdXMgPSBldmVudCA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzRm9jdXNlZDogdHJ1ZSB9KVxuICAgIHNhZmVJbnZva2UodGhpcy5wcm9wcy5vbkZvY3VzLCBldmVudClcbiAgfVxuXG4gIGhhbmRsZUtleURvd24gPSBldmVudCA9PiB7XG4gICAgY29uc3QgeyBzZWxlY3Rpb25FbmQsIHZhbHVlIH0gPSBldmVudC50YXJnZXRcblxuICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIC8vIFByZXZlbnQgRW50ZXIga2V5cHJlc3NlcyBmcm9tIHN1Ym1pdHRpbmcgZm9ybXMgc2luY2UgdGhleSBoYXZlIHNwZWNpYWwgcG93ZXJzIGluc2lkZSBUYWdJbnB1dFxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgdGhpcy5hZGRUYWdzKHZhbHVlKVxuICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09PSAnQmFja3NwYWNlJyAmJiBzZWxlY3Rpb25FbmQgPT09IDApIHtcbiAgICAgIHRoaXMuaGFuZGxlQmFja3NwYWNlVG9SZW1vdmUoZXZlbnQpXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlUmVtb3ZlVGFnID0gZXZlbnQgPT4ge1xuICAgIC8vIFVzaW5nIGRhdGEgYXR0cmlidXRlIHRvIHNpbXBsaWZ5IGNhbGxiYWNrIGxvZ2ljIC0tIG9uZSBoYW5kbGVyIGZvciBhbGwgY2hpbGRyZW5cbiAgICBjb25zdCBpbmRleCA9IE51bWJlcihcbiAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFnLWluZGV4JylcbiAgICApXG4gICAgdGhpcy5yZW1vdmVUYWdBdEluZGV4KGluZGV4KVxuICB9XG5cbiAgbWF5YmVSZW5kZXJUYWcgPSAodGFnLCBpbmRleCkgPT4ge1xuICAgIGlmICghdGFnKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGNvbnN0IHsgZGlzYWJsZWQsIHRhZ1Byb3BzIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgcHJvcHMgPSBzYWZlSW52b2tlKHRhZ1Byb3BzLCB0YWcsIGluZGV4KSB8fCB0YWdQcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUYWdcbiAgICAgICAga2V5PXtgJHt0YWd9OiR7aW5kZXh9YH1cbiAgICAgICAgZGF0YS10YWctaW5kZXg9e2luZGV4fVxuICAgICAgICBtYXJnaW5SaWdodD17bWFqb3JTY2FsZSgxKX1cbiAgICAgICAgbWFyZ2luWT1cIjZweFwiXG4gICAgICAgIG9uUmVtb3ZlPXtkaXNhYmxlZCA/IG51bGwgOiB0aGlzLmhhbmRsZVJlbW92ZVRhZ31cbiAgICAgICAgaXNSZW1vdmFibGU9eyFkaXNhYmxlZH1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgPlxuICAgICAgICB7dGFnfVxuICAgICAgPC9UYWc+XG4gICAgKVxuICB9XG5cbiAgcmVtb3ZlVGFnQXRJbmRleCA9IGluZGV4ID0+IHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlLCBvblJlbW92ZSwgdmFsdWVzIH0gPSB0aGlzLnByb3BzXG4gICAgc2FmZUludm9rZShvblJlbW92ZSwgdmFsdWVzW2luZGV4XSwgaW5kZXgpXG5cbiAgICAvLyBSZW1vdmUgaXRlbSBhdCBpbmRleCBhcyBhIG5ldyBhcnJheVxuICAgIGNvbnN0IG5ld1ZhbHVlcyA9IHZhbHVlcy5maWx0ZXIoKF8sIGkpID0+IGkgIT09IGluZGV4KVxuICAgIHNhZmVJbnZva2Uob25DaGFuZ2UsIG5ld1ZhbHVlcylcbiAgfVxuXG4gIHNldFJlZiA9IG5vZGUgPT4ge1xuICAgIHRoaXMuaW5wdXQgPSBub2RlXG4gICAgc2FmZUludm9rZSh0aGlzLnByb3BzLmlucHV0UmVmLCBub2RlKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGFkZE9uQmx1cixcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgaGVpZ2h0LFxuICAgICAgaW5wdXRQcm9wcyxcbiAgICAgIGlucHV0UmVmLFxuICAgICAgb25BZGQsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIG9uSW5wdXRDaGFuZ2UsXG4gICAgICBvblJlbW92ZSxcbiAgICAgIHNlcGFyYXRvcixcbiAgICAgIHRhZ1Byb3BzLFxuICAgICAgdGhlbWUsXG4gICAgICB2YWx1ZXMsXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCB7IGlucHV0VmFsdWUsIGlzRm9jdXNlZCB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgY29uc3QgdGhlbWVkQ29udGFpbmVyQ2xhc3NOYW1lID0gdGhlbWUuZ2V0VGFnSW5wdXRDbGFzc05hbWUoJ2RlZmF1bHQnKVxuICAgIGNvbnN0IHRoZW1lZElucHV0Q2xhc3NOYW1lID0gdGhlbWUuZ2V0VGV4dElucHV0Q2xhc3NOYW1lKCdub25lJylcbiAgICBjb25zdCB0ZXh0U2l6ZSA9IHRoZW1lLmdldFRleHRTaXplRm9yQ29udHJvbEhlaWdodChoZWlnaHQpXG4gICAgY29uc3QgYm9yZGVyUmFkaXVzID0gdGhlbWUuZ2V0Qm9yZGVyUmFkaXVzRm9yQ29udHJvbEhlaWdodChoZWlnaHQpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJveFxuICAgICAgICBhcmlhLWRpc2FibGVkPXtkaXNhYmxlZCB8fCB1bmRlZmluZWR9XG4gICAgICAgIGFyaWEtYWN0aXZlZGVzY2VuZGFudD17aXNGb2N1c2VkID8gdGhpcy5pZCA6IHVuZGVmaW5lZH1cbiAgICAgICAgYm9yZGVyUmFkaXVzPXtib3JkZXJSYWRpdXN9XG4gICAgICAgIGNsYXNzTmFtZT17Y3godGhlbWVkQ29udGFpbmVyQ2xhc3NOYW1lLCBjbGFzc05hbWUpfVxuICAgICAgICBwYWRkaW5nTGVmdD17TWF0aC5yb3VuZChoZWlnaHQgLyAzLjIpfVxuICAgICAgICBwYWRkaW5nUmlnaHQ9e01hdGgucm91bmQoaGVpZ2h0IC8gMy4yKX1cbiAgICAgICAgcGFkZGluZ1k9XCIycHhcIlxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgIG9uQmx1cj17dGhpcy5oYW5kbGVCbHVyfVxuICAgICAgPlxuICAgICAgICB7dmFsdWVzLm1hcCh0aGlzLm1heWJlUmVuZGVyVGFnKX1cbiAgICAgICAgPFRleHRcbiAgICAgICAgICBpcz1cImlucHV0XCJcbiAgICAgICAgICBpZD17dGhpcy5pZH1cbiAgICAgICAgICBjb2xvcj17ZGlzYWJsZWQgPyAnbXV0ZWQnIDogdW5kZWZpbmVkfVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICBmbGV4R3Jvdz1cIjFcIlxuICAgICAgICAgIGhlaWdodD17aGVpZ2h0IC0gNH1cbiAgICAgICAgICBzaXplPXt0ZXh0U2l6ZX1cbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XG4gICAgICAgICAgey4uLmlucHV0UHJvcHN9XG4gICAgICAgICAgY2xhc3NOYW1lPXt0aGVtZWRJbnB1dENsYXNzTmFtZX1cbiAgICAgICAgICByZWY9e3RoaXMuc2V0UmVmfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgIG9uRm9jdXM9e3RoaXMuaGFuZGxlSW5wdXRGb2N1c31cbiAgICAgICAgICBvbktleURvd249e3RoaXMuaGFuZGxlS2V5RG93bn1cbiAgICAgICAgLz5cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoVGFnSW5wdXQpXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBLElBQUlBLE9BQU8sR0FBRyxDQUFkOztJQUVNQyxROzs7Ozs7Ozs7Ozs7Ozs7OEZBMkVJO01BQ05DLFVBQVUsRUFBRSxFQUROO01BRU5DLFNBQVMsRUFBRTtJQUZMLEM7OEdBS1NILE9BQU8sRTtnR0FFZCxZQUFnQjtNQUFBLElBQWZJLEtBQWUsdUVBQVAsRUFBTztNQUN4QixrQkFBb0MsTUFBS0MsS0FBekM7TUFBQSxJQUFRQyxLQUFSLGVBQVFBLEtBQVI7TUFBQSxJQUFlQyxRQUFmLGVBQWVBLFFBQWY7TUFBQSxJQUF5QkMsTUFBekIsZUFBeUJBLE1BQXpCOztNQUNBLElBQU1DLFNBQVMsR0FBRyxNQUFLQyxTQUFMLENBQWVOLEtBQWYsQ0FBbEI7O01BQ0EsSUFBSU8sZ0JBQWdCLEdBQUcsSUFBQUMsc0JBQUEsRUFBV04sS0FBWCxFQUFrQkcsU0FBbEIsQ0FBdkI7O01BRUEsSUFBSSxPQUFPRixRQUFQLEtBQW9CLFVBQXhCLEVBQW9DO1FBQ2xDSSxnQkFBZ0IsR0FBR0EsZ0JBQWdCLElBQUlKLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDSyxNQUFQLENBQWNKLFNBQWQsQ0FBRCxDQUEvQztNQUNEOztNQUVELElBQUlFLGdCQUFnQixLQUFLLEtBQXpCLEVBQWdDO1FBQzlCLE1BQUtHLFFBQUwsQ0FBYztVQUFFWixVQUFVLEVBQUU7UUFBZCxDQUFkO01BQ0Q7SUFDRixDO2tHQUVXLFlBQXFCO01BQUEsSUFBcEJBLFVBQW9CLHVFQUFQLEVBQU87TUFDL0IsSUFBUWEsU0FBUixHQUFzQixNQUFLVixLQUEzQixDQUFRVSxTQUFSO01BRUEsT0FBT0EsU0FBUyxHQUNaYixV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