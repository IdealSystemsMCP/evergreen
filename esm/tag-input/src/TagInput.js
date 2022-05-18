import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _excluded = ["addOnBlur", "className", "disabled", "height", "inputProps", "inputRef", "onAdd", "onChange", "onInputChange", "onRemove", "separator", "tagProps", "theme", "values"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @overview TagInput accepts multiple values that can be individually removed
 */
import React from 'react';
import PropTypes from 'prop-types';
import Box from 'ui-box';
import cx from 'classnames';
import { Text } from '../../typography';
import { withTheme } from '../../theme';
import { majorScale } from '../../scales';
import safeInvoke from '../../lib/safe-invoke';
import Tag from './Tag';
var inputId = 1;

var TagInput = /*#__PURE__*/function (_React$Component) {
  _inherits(TagInput, _React$Component);

  var _super = _createSuper(TagInput);

  function TagInput() {
    var _this;

    _classCallCheck(this, TagInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      inputValue: '',
      isFocused: false
    });

    _defineProperty(_assertThisInitialized(_this), "id", "TagInput-".concat(inputId++));

    _defineProperty(_assertThisInitialized(_this), "addTags", function () {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var _this$props = _this.props,
          onAdd = _this$props.onAdd,
          onChange = _this$props.onChange,
          values = _this$props.values;

      var newValues = _this.getValues(value);

      var shouldClearInput = safeInvoke(onAdd, newValues);

      if (typeof onChange === 'function') {
        shouldClearInput = shouldClearInput || onChange(values.concat(newValues));
      }

      if (shouldClearInput !== false) {
        _this.setState({
          inputValue: ''
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getValues", function () {
      var inputValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var separator = _this.props.separator;
      return separator ? inputValue.split(separator).map(function (v) {
        return v.trim();
      }).filter(function (v) {
        return v.length > 0;
      }) : [inputValue];
    });

    _defineProperty(_assertThisInitialized(_this), "handleBackspaceToRemove", function () {
      var values = _this.props.values; // Delete last item in values

      _this.removeTagAtIndex(values.length - 1);
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function (event) {
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
      safeInvoke(_this.props.onBlur, event);
    });

    _defineProperty(_assertThisInitialized(_this), "handleInputChange", function (event) {
      _this.setState({
        inputValue: event.target.value
      });

      safeInvoke(_this.props.onInputChange, event);
    });

    _defineProperty(_assertThisInitialized(_this), "handleInputFocus", function (event) {
      _this.setState({
        isFocused: true
      });

      safeInvoke(_this.props.onFocus, event);
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (event) {
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

    _defineProperty(_assertThisInitialized(_this), "handleRemoveTag", function (event) {
      // Using data attribute to simplify callback logic -- one handler for all children
      var index = Number(event.currentTarget.parentElement.getAttribute('data-tag-index'));

      _this.removeTagAtIndex(index);
    });

    _defineProperty(_assertThisInitialized(_this), "maybeRenderTag", function (tag, index) {
      if (!tag) {
        return null;
      }

      var _this$props2 = _this.props,
          disabled = _this$props2.disabled,
          tagProps = _this$props2.tagProps;
      var props = safeInvoke(tagProps, tag, index) || tagProps;
      return /*#__PURE__*/React.createElement(Tag, _extends({
        key: "".concat(tag, ":").concat(index),
        "data-tag-index": index,
        marginRight: majorScale(1),
        marginY: "6px",
        onRemove: disabled ? null : _this.handleRemoveTag,
        isRemovable: !disabled
      }, props), tag);
    });

    _defineProperty(_assertThisInitialized(_this), "removeTagAtIndex", function (index) {
      var _this$props3 = _this.props,
          onChange = _this$props3.onChange,
          onRemove = _this$props3.onRemove,
          values = _this$props3.values;
      safeInvoke(onRemove, values[index], index); // Remove item at index as a new array

      var newValues = values.filter(function (_, i) {
        return i !== index;
      });
      safeInvoke(onChange, newValues);
    });

    _defineProperty(_assertThisInitialized(_this), "setRef", function (node) {
      _this.input = node;
      safeInvoke(_this.props.inputRef, node);
    });

    return _this;
  }

  _createClass(TagInput, [{
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
          props = _objectWithoutProperties(_this$props4, _excluded);

      var _this$state = this.state,
          inputValue = _this$state.inputValue,
          isFocused = _this$state.isFocused;
      var themedContainerClassName = theme.getTagInputClassName('default');
      var themedInputClassName = theme.getTextInputClassName('none');
      var textSize = theme.getTextSizeForControlHeight(height);
      var borderRadius = theme.getBorderRadiusForControlHeight(height);
      return /*#__PURE__*/React.createElement(Box, _extends({
        "aria-disabled": disabled || undefined,
        "aria-activedescendant": isFocused ? this.id : undefined,
        borderRadius: borderRadius,
        className: cx(themedContainerClassName, className),
        paddingLeft: Math.round(height / 3.2),
        paddingRight: Math.round(height / 3.2),
        paddingY: "2px"
      }, props, {
        onBlur: this.handleBlur
      }), values.map(this.maybeRenderTag), /*#__PURE__*/React.createElement(Text, _extends({
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
}(React.Component);

TagInput.displayName = "TagInput";

_defineProperty(TagInput, "propTypes", {
  /** Whether or not the inputValue should be added to the tags when the input blurs. */
  addOnBlur: PropTypes.bool,

  /** The class name to apply to the container component. */
  className: PropTypes.string,

  /** Whether or not the input should be disabled. */
  disabled: PropTypes.bool,

  /** The vertical size of the input */
  height: PropTypes.number,

  /** Props to pass to the input component. Note that `ref` and `key` are not supported. See `inputRef`. */
  inputProps: PropTypes.object,

  /**
   * Ref handler for the input element.
   * (input: HTMLInputElement | null) => void
   */
  inputRef: PropTypes.func,

  /**
   * Callback invoked when new tags are added.
   * Returning `false` will prevent clearing the input.
   * (values: Array) => void | false
   */
  onAdd: PropTypes.func,

  /**
   * Callback invoked when focus on the input blurs.
   * (event) => void
   */
  onBlur: PropTypes.func,

  /**
   * Callback invoked when the tag values change.
   * Returning `false` will prevent clearing the input.
   * (values: Array) => void | false
   */
  onChange: PropTypes.func,

  /**
   * Callback invoked when the input receives focus.
   * (event) => void
   */
  onFocus: PropTypes.func,

  /**
   * Callback invoked when the value of the input is changed. Shorthand for `inputProps={{ onChange }}`.
   * (event) => void
   */
  onInputChange: PropTypes.func,

  /**
   * Callback invoked when a tag is removed.
   * Receives value and index of removed tag.
   * (value: string | node, index: number) => void
   */
  onRemove: PropTypes.func,

  /** Value or RegExp to split on pasted text or on enter keypress */
  separator: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(RegExp), PropTypes.oneOf([false])]),

  /** Provide props to tag component (actually `Badge`, for now). */
  tagProps: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired,

  /** Controlled tag values. Each value is rendered inside a tag. */
  values: PropTypes.arrayOf(PropTypes.node)
});

_defineProperty(TagInput, "defaultProps", {
  addOnBlur: false,
  disabled: false,
  height: 32,
  separator: /[,\n\r]/,
  values: [],
  tagProps: {}
});

export default withTheme(TagInput);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIkJveCIsImN4IiwiVGV4dCIsIndpdGhUaGVtZSIsIm1ham9yU2NhbGUiLCJzYWZlSW52b2tlIiwiVGFnIiwiaW5wdXRJZCIsIlRhZ0lucHV0IiwiaW5wdXRWYWx1ZSIsImlzRm9jdXNlZCIsInZhbHVlIiwicHJvcHMiLCJvbkFkZCIsIm9uQ2hhbmdlIiwidmFsdWVzIiwibmV3VmFsdWVzIiwiZ2V0VmFsdWVzIiwic2hvdWxkQ2xlYXJJbnB1dCIsImNvbmNhdCIsInNldFN0YXRlIiwic2VwYXJhdG9yIiwic3BsaXQiLCJtYXAiLCJ2IiwidHJpbSIsImZpbHRlciIsImxlbmd0aCIsInJlbW92ZVRhZ0F0SW5kZXgiLCJldmVudCIsImNvbnRhaW5lciIsInRhcmdldCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNvbnRhaW5zIiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50IiwiYWRkT25CbHVyIiwic3RhdGUiLCJhZGRUYWdzIiwib25CbHVyIiwib25JbnB1dENoYW5nZSIsIm9uRm9jdXMiLCJzZWxlY3Rpb25FbmQiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZUJhY2tzcGFjZVRvUmVtb3ZlIiwiaW5kZXgiLCJOdW1iZXIiLCJjdXJyZW50VGFyZ2V0IiwicGFyZW50RWxlbWVudCIsImdldEF0dHJpYnV0ZSIsInRhZyIsImRpc2FibGVkIiwidGFnUHJvcHMiLCJoYW5kbGVSZW1vdmVUYWciLCJvblJlbW92ZSIsIl8iLCJpIiwibm9kZSIsImlucHV0IiwiaW5wdXRSZWYiLCJjbGFzc05hbWUiLCJoZWlnaHQiLCJpbnB1dFByb3BzIiwidGhlbWUiLCJ0aGVtZWRDb250YWluZXJDbGFzc05hbWUiLCJnZXRUYWdJbnB1dENsYXNzTmFtZSIsInRoZW1lZElucHV0Q2xhc3NOYW1lIiwiZ2V0VGV4dElucHV0Q2xhc3NOYW1lIiwidGV4dFNpemUiLCJnZXRUZXh0U2l6ZUZvckNvbnRyb2xIZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJnZXRCb3JkZXJSYWRpdXNGb3JDb250cm9sSGVpZ2h0IiwidW5kZWZpbmVkIiwiaWQiLCJNYXRoIiwicm91bmQiLCJoYW5kbGVCbHVyIiwibWF5YmVSZW5kZXJUYWciLCJzZXRSZWYiLCJoYW5kbGVJbnB1dENoYW5nZSIsImhhbmRsZUlucHV0Rm9jdXMiLCJoYW5kbGVLZXlEb3duIiwiQ29tcG9uZW50IiwiYm9vbCIsInN0cmluZyIsIm51bWJlciIsIm9iamVjdCIsImZ1bmMiLCJvbmVPZlR5cGUiLCJpbnN0YW5jZU9mIiwiUmVnRXhwIiwib25lT2YiLCJpc1JlcXVpcmVkIiwiYXJyYXlPZiJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWctaW5wdXQvc3JjL1RhZ0lucHV0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQG92ZXJ2aWV3IFRhZ0lucHV0IGFjY2VwdHMgbXVsdGlwbGUgdmFsdWVzIHRoYXQgY2FuIGJlIGluZGl2aWR1YWxseSByZW1vdmVkXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEJveCBmcm9tICd1aS1ib3gnXG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5pbXBvcnQgeyBtYWpvclNjYWxlIH0gZnJvbSAnLi4vLi4vc2NhbGVzJ1xuaW1wb3J0IHNhZmVJbnZva2UgZnJvbSAnLi4vLi4vbGliL3NhZmUtaW52b2tlJ1xuaW1wb3J0IFRhZyBmcm9tICcuL1RhZydcblxubGV0IGlucHV0SWQgPSAxXG5cbmNsYXNzIFRhZ0lucHV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKiogV2hldGhlciBvciBub3QgdGhlIGlucHV0VmFsdWUgc2hvdWxkIGJlIGFkZGVkIHRvIHRoZSB0YWdzIHdoZW4gdGhlIGlucHV0IGJsdXJzLiAqL1xuICAgIGFkZE9uQmx1cjogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqIFRoZSBjbGFzcyBuYW1lIHRvIGFwcGx5IHRvIHRoZSBjb250YWluZXIgY29tcG9uZW50LiAqL1xuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvKiogV2hldGhlciBvciBub3QgdGhlIGlucHV0IHNob3VsZCBiZSBkaXNhYmxlZC4gKi9cbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqIFRoZSB2ZXJ0aWNhbCBzaXplIG9mIHRoZSBpbnB1dCAqL1xuICAgIGhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAvKiogUHJvcHMgdG8gcGFzcyB0byB0aGUgaW5wdXQgY29tcG9uZW50LiBOb3RlIHRoYXQgYHJlZmAgYW5kIGBrZXlgIGFyZSBub3Qgc3VwcG9ydGVkLiBTZWUgYGlucHV0UmVmYC4gKi9cbiAgICBpbnB1dFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIC8qKlxuICAgICAqIFJlZiBoYW5kbGVyIGZvciB0aGUgaW5wdXQgZWxlbWVudC5cbiAgICAgKiAoaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsKSA9PiB2b2lkXG4gICAgICovXG4gICAgaW5wdXRSZWY6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIGludm9rZWQgd2hlbiBuZXcgdGFncyBhcmUgYWRkZWQuXG4gICAgICogUmV0dXJuaW5nIGBmYWxzZWAgd2lsbCBwcmV2ZW50IGNsZWFyaW5nIHRoZSBpbnB1dC5cbiAgICAgKiAodmFsdWVzOiBBcnJheSkgPT4gdm9pZCB8IGZhbHNlXG4gICAgICovXG4gICAgb25BZGQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIGludm9rZWQgd2hlbiBmb2N1cyBvbiB0aGUgaW5wdXQgYmx1cnMuXG4gICAgICogKGV2ZW50KSA9PiB2b2lkXG4gICAgICovXG4gICAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayBpbnZva2VkIHdoZW4gdGhlIHRhZyB2YWx1ZXMgY2hhbmdlLlxuICAgICAqIFJldHVybmluZyBgZmFsc2VgIHdpbGwgcHJldmVudCBjbGVhcmluZyB0aGUgaW5wdXQuXG4gICAgICogKHZhbHVlczogQXJyYXkpID0+IHZvaWQgfCBmYWxzZVxuICAgICAqL1xuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayBpbnZva2VkIHdoZW4gdGhlIGlucHV0IHJlY2VpdmVzIGZvY3VzLlxuICAgICAqIChldmVudCkgPT4gdm9pZFxuICAgICAqL1xuICAgIG9uRm9jdXM6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIGludm9rZWQgd2hlbiB0aGUgdmFsdWUgb2YgdGhlIGlucHV0IGlzIGNoYW5nZWQuIFNob3J0aGFuZCBmb3IgYGlucHV0UHJvcHM9e3sgb25DaGFuZ2UgfX1gLlxuICAgICAqIChldmVudCkgPT4gdm9pZFxuICAgICAqL1xuICAgIG9uSW5wdXRDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIGludm9rZWQgd2hlbiBhIHRhZyBpcyByZW1vdmVkLlxuICAgICAqIFJlY2VpdmVzIHZhbHVlIGFuZCBpbmRleCBvZiByZW1vdmVkIHRhZy5cbiAgICAgKiAodmFsdWU6IHN0cmluZyB8IG5vZGUsIGluZGV4OiBudW1iZXIpID0+IHZvaWRcbiAgICAgKi9cbiAgICBvblJlbW92ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgLyoqIFZhbHVlIG9yIFJlZ0V4cCB0byBzcGxpdCBvbiBwYXN0ZWQgdGV4dCBvciBvbiBlbnRlciBrZXlwcmVzcyAqL1xuICAgIHNlcGFyYXRvcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgUHJvcFR5cGVzLmluc3RhbmNlT2YoUmVnRXhwKSxcbiAgICAgIFByb3BUeXBlcy5vbmVPZihbZmFsc2VdKVxuICAgIF0pLFxuICAgIC8qKiBQcm92aWRlIHByb3BzIHRvIHRhZyBjb21wb25lbnQgKGFjdHVhbGx5IGBCYWRnZWAsIGZvciBub3cpLiAqL1xuICAgIHRhZ1Byb3BzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIC8qKlxuICAgICAqIFRoZW1lIHByb3ZpZGVkIGJ5IFRoZW1lUHJvdmlkZXIuXG4gICAgICovXG4gICAgdGhlbWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAvKiogQ29udHJvbGxlZCB0YWcgdmFsdWVzLiBFYWNoIHZhbHVlIGlzIHJlbmRlcmVkIGluc2lkZSBhIHRhZy4gKi9cbiAgICB2YWx1ZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlKVxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBhZGRPbkJsdXI6IGZhbHNlLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBoZWlnaHQ6IDMyLFxuICAgIHNlcGFyYXRvcjogL1ssXFxuXFxyXS8sXG4gICAgdmFsdWVzOiBbXSxcbiAgICB0YWdQcm9wczoge31cbiAgfVxuXG4gIHN0YXRlID0ge1xuICAgIGlucHV0VmFsdWU6ICcnLFxuICAgIGlzRm9jdXNlZDogZmFsc2VcbiAgfVxuXG4gIGlkID0gYFRhZ0lucHV0LSR7aW5wdXRJZCsrfWBcblxuICBhZGRUYWdzID0gKHZhbHVlID0gJycpID0+IHtcbiAgICBjb25zdCB7IG9uQWRkLCBvbkNoYW5nZSwgdmFsdWVzIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgbmV3VmFsdWVzID0gdGhpcy5nZXRWYWx1ZXModmFsdWUpXG4gICAgbGV0IHNob3VsZENsZWFySW5wdXQgPSBzYWZlSW52b2tlKG9uQWRkLCBuZXdWYWx1ZXMpXG5cbiAgICBpZiAodHlwZW9mIG9uQ2hhbmdlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBzaG91bGRDbGVhcklucHV0ID0gc2hvdWxkQ2xlYXJJbnB1dCB8fCBvbkNoYW5nZSh2YWx1ZXMuY29uY2F0KG5ld1ZhbHVlcykpXG4gICAgfVxuXG4gICAgaWYgKHNob3VsZENsZWFySW5wdXQgIT09IGZhbHNlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaW5wdXRWYWx1ZTogJycgfSlcbiAgICB9XG4gIH1cblxuICBnZXRWYWx1ZXMgPSAoaW5wdXRWYWx1ZSA9ICcnKSA9PiB7XG4gICAgY29uc3QgeyBzZXBhcmF0b3IgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiBzZXBhcmF0b3JcbiAgICAgID8gaW5wdXRWYWx1ZVxuICAgICAgICAgIC5zcGxpdChzZXBhcmF0b3IpXG4gICAgICAgICAgLm1hcCh2ID0+IHYudHJpbSgpKVxuICAgICAgICAgIC5maWx0ZXIodiA9PiB2Lmxlbmd0aCA+IDApXG4gICAgICA6IFtpbnB1dFZhbHVlXVxuICB9XG5cbiAgaGFuZGxlQmFja3NwYWNlVG9SZW1vdmUgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB2YWx1ZXMgfSA9IHRoaXMucHJvcHNcblxuICAgIC8vIERlbGV0ZSBsYXN0IGl0ZW0gaW4gdmFsdWVzXG4gICAgdGhpcy5yZW1vdmVUYWdBdEluZGV4KHZhbHVlcy5sZW5ndGggLSAxKVxuICB9XG5cbiAgaGFuZGxlQmx1ciA9IGV2ZW50ID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBldmVudC50YXJnZXRcblxuICAgIC8vIFVzZSByYWYgc28gdGhhdCB0aGUgZG9tIGhhcyB0aW1lIHRvIHVwZGF0ZSBgYWN0aXZlRWxlbWVudGBcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgaWYgKCFjb250YWluZXIuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuYWRkT25CbHVyICYmIHRoaXMuc3RhdGUuaW5wdXRWYWx1ZSkge1xuICAgICAgICAgIHRoaXMuYWRkVGFncyh0aGlzLnN0YXRlLmlucHV0VmFsdWUpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNGb2N1c2VkOiBmYWxzZSB9KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBzYWZlSW52b2tlKHRoaXMucHJvcHMub25CbHVyLCBldmVudClcbiAgfVxuXG4gIGhhbmRsZUlucHV0Q2hhbmdlID0gZXZlbnQgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpbnB1dFZhbHVlOiBldmVudC50YXJnZXQudmFsdWUgfSlcbiAgICBzYWZlSW52b2tlKHRoaXMucHJvcHMub25JbnB1dENoYW5nZSwgZXZlbnQpXG4gIH1cblxuICBoYW5kbGVJbnB1dEZvY3VzID0gZXZlbnQgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpc0ZvY3VzZWQ6IHRydWUgfSlcbiAgICBzYWZlSW52b2tlKHRoaXMucHJvcHMub25Gb2N1cywgZXZlbnQpXG4gIH1cblxuICBoYW5kbGVLZXlEb3duID0gZXZlbnQgPT4ge1xuICAgIGNvbnN0IHsgc2VsZWN0aW9uRW5kLCB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0XG5cbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAvLyBQcmV2ZW50IEVudGVyIGtleXByZXNzZXMgZnJvbSBzdWJtaXR0aW5nIGZvcm1zIHNpbmNlIHRoZXkgaGF2ZSBzcGVjaWFsIHBvd2VycyBpbnNpZGUgVGFnSW5wdXRcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIHRoaXMuYWRkVGFncyh2YWx1ZSlcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gJ0JhY2tzcGFjZScgJiYgc2VsZWN0aW9uRW5kID09PSAwKSB7XG4gICAgICB0aGlzLmhhbmRsZUJhY2tzcGFjZVRvUmVtb3ZlKGV2ZW50KVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVJlbW92ZVRhZyA9IGV2ZW50ID0+IHtcbiAgICAvLyBVc2luZyBkYXRhIGF0dHJpYnV0ZSB0byBzaW1wbGlmeSBjYWxsYmFjayBsb2dpYyAtLSBvbmUgaGFuZGxlciBmb3IgYWxsIGNoaWxkcmVuXG4gICAgY29uc3QgaW5kZXggPSBOdW1iZXIoXG4gICAgICBldmVudC5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRhZy1pbmRleCcpXG4gICAgKVxuICAgIHRoaXMucmVtb3ZlVGFnQXRJbmRleChpbmRleClcbiAgfVxuXG4gIG1heWJlUmVuZGVyVGFnID0gKHRhZywgaW5kZXgpID0+IHtcbiAgICBpZiAoIXRhZykge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBjb25zdCB7IGRpc2FibGVkLCB0YWdQcm9wcyB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHByb3BzID0gc2FmZUludm9rZSh0YWdQcm9wcywgdGFnLCBpbmRleCkgfHwgdGFnUHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8VGFnXG4gICAgICAgIGtleT17YCR7dGFnfToke2luZGV4fWB9XG4gICAgICAgIGRhdGEtdGFnLWluZGV4PXtpbmRleH1cbiAgICAgICAgbWFyZ2luUmlnaHQ9e21ham9yU2NhbGUoMSl9XG4gICAgICAgIG1hcmdpblk9XCI2cHhcIlxuICAgICAgICBvblJlbW92ZT17ZGlzYWJsZWQgPyBudWxsIDogdGhpcy5oYW5kbGVSZW1vdmVUYWd9XG4gICAgICAgIGlzUmVtb3ZhYmxlPXshZGlzYWJsZWR9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgID5cbiAgICAgICAge3RhZ31cbiAgICAgIDwvVGFnPlxuICAgIClcbiAgfVxuXG4gIHJlbW92ZVRhZ0F0SW5kZXggPSBpbmRleCA9PiB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSwgb25SZW1vdmUsIHZhbHVlcyB9ID0gdGhpcy5wcm9wc1xuICAgIHNhZmVJbnZva2Uob25SZW1vdmUsIHZhbHVlc1tpbmRleF0sIGluZGV4KVxuXG4gICAgLy8gUmVtb3ZlIGl0ZW0gYXQgaW5kZXggYXMgYSBuZXcgYXJyYXlcbiAgICBjb25zdCBuZXdWYWx1ZXMgPSB2YWx1ZXMuZmlsdGVyKChfLCBpKSA9PiBpICE9PSBpbmRleClcbiAgICBzYWZlSW52b2tlKG9uQ2hhbmdlLCBuZXdWYWx1ZXMpXG4gIH1cblxuICBzZXRSZWYgPSBub2RlID0+IHtcbiAgICB0aGlzLmlucHV0ID0gbm9kZVxuICAgIHNhZmVJbnZva2UodGhpcy5wcm9wcy5pbnB1dFJlZiwgbm9kZSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBhZGRPbkJsdXIsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGhlaWdodCxcbiAgICAgIGlucHV0UHJvcHMsXG4gICAgICBpbnB1dFJlZixcbiAgICAgIG9uQWRkLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICBvbklucHV0Q2hhbmdlLFxuICAgICAgb25SZW1vdmUsXG4gICAgICBzZXBhcmF0b3IsXG4gICAgICB0YWdQcm9wcyxcbiAgICAgIHRoZW1lLFxuICAgICAgdmFsdWVzLFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgeyBpbnB1dFZhbHVlLCBpc0ZvY3VzZWQgfSA9IHRoaXMuc3RhdGVcblxuICAgIGNvbnN0IHRoZW1lZENvbnRhaW5lckNsYXNzTmFtZSA9IHRoZW1lLmdldFRhZ0lucHV0Q2xhc3NOYW1lKCdkZWZhdWx0JylcbiAgICBjb25zdCB0aGVtZWRJbnB1dENsYXNzTmFtZSA9IHRoZW1lLmdldFRleHRJbnB1dENsYXNzTmFtZSgnbm9uZScpXG4gICAgY29uc3QgdGV4dFNpemUgPSB0aGVtZS5nZXRUZXh0U2l6ZUZvckNvbnRyb2xIZWlnaHQoaGVpZ2h0KVxuICAgIGNvbnN0IGJvcmRlclJhZGl1cyA9IHRoZW1lLmdldEJvcmRlclJhZGl1c0ZvckNvbnRyb2xIZWlnaHQoaGVpZ2h0KVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3hcbiAgICAgICAgYXJpYS1kaXNhYmxlZD17ZGlzYWJsZWQgfHwgdW5kZWZpbmVkfVxuICAgICAgICBhcmlhLWFjdGl2ZWRlc2NlbmRhbnQ9e2lzRm9jdXNlZCA/IHRoaXMuaWQgOiB1bmRlZmluZWR9XG4gICAgICAgIGJvcmRlclJhZGl1cz17Ym9yZGVyUmFkaXVzfVxuICAgICAgICBjbGFzc05hbWU9e2N4KHRoZW1lZENvbnRhaW5lckNsYXNzTmFtZSwgY2xhc3NOYW1lKX1cbiAgICAgICAgcGFkZGluZ0xlZnQ9e01hdGgucm91bmQoaGVpZ2h0IC8gMy4yKX1cbiAgICAgICAgcGFkZGluZ1JpZ2h0PXtNYXRoLnJvdW5kKGhlaWdodCAvIDMuMil9XG4gICAgICAgIHBhZGRpbmdZPVwiMnB4XCJcbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlQmx1cn1cbiAgICAgID5cbiAgICAgICAge3ZhbHVlcy5tYXAodGhpcy5tYXliZVJlbmRlclRhZyl9XG4gICAgICAgIDxUZXh0XG4gICAgICAgICAgaXM9XCJpbnB1dFwiXG4gICAgICAgICAgaWQ9e3RoaXMuaWR9XG4gICAgICAgICAgY29sb3I9e2Rpc2FibGVkID8gJ211dGVkJyA6IHVuZGVmaW5lZH1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgZmxleEdyb3c9XCIxXCJcbiAgICAgICAgICBoZWlnaHQ9e2hlaWdodCAtIDR9XG4gICAgICAgICAgc2l6ZT17dGV4dFNpemV9XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxuICAgICAgICAgIHsuLi5pbnB1dFByb3BzfVxuICAgICAgICAgIGNsYXNzTmFtZT17dGhlbWVkSW5wdXRDbGFzc05hbWV9XG4gICAgICAgICAgcmVmPXt0aGlzLnNldFJlZn1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICBvbkZvY3VzPXt0aGlzLmhhbmRsZUlucHV0Rm9jdXN9XG4gICAgICAgICAgb25LZXlEb3duPXt0aGlzLmhhbmRsZUtleURvd259XG4gICAgICAgIC8+XG4gICAgICA8L0JveD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKFRhZ0lucHV0KVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLEdBQVAsTUFBZ0IsUUFBaEI7QUFDQSxPQUFPQyxFQUFQLE1BQWUsWUFBZjtBQUNBLFNBQVNDLElBQVQsUUFBcUIsa0JBQXJCO0FBQ0EsU0FBU0MsU0FBVCxRQUEwQixhQUExQjtBQUNBLFNBQVNDLFVBQVQsUUFBMkIsY0FBM0I7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLHVCQUF2QjtBQUNBLE9BQU9DLEdBQVAsTUFBZ0IsT0FBaEI7QUFFQSxJQUFJQyxPQUFPLEdBQUcsQ0FBZDs7SUFFTUMsUTs7Ozs7Ozs7Ozs7Ozs7Ozs0REEyRUk7TUFDTkMsVUFBVSxFQUFFLEVBRE47TUFFTkMsU0FBUyxFQUFFO0lBRkwsQzs7NEVBS1NILE9BQU8sRTs7OERBRWQsWUFBZ0I7TUFBQSxJQUFmSSxLQUFlLHVFQUFQLEVBQU87TUFDeEIsa0JBQW9DLE1BQUtDLEtBQXpDO01BQUEsSUFBUUMsS0FBUixlQUFRQSxLQUFSO01BQUEsSUFBZUMsUUFBZixlQUFlQSxRQUFmO01BQUEsSUFBeUJDLE1BQXpCLGVBQXlCQSxNQUF6Qjs7TUFDQSxJQUFNQyxTQUFTLEdBQUcsTUFBS0MsU0FBTCxDQUFlTixLQUFmLENBQWxCOztNQUNBLElBQUlPLGdCQUFnQixHQUFHYixVQUFVLENBQUNRLEtBQUQsRUFBUUcsU0FBUixDQUFqQzs7TUFFQSxJQUFJLE9BQU9GLFFBQVAsS0FBb0IsVUFBeEIsRUFBb0M7UUFDbENJLGdCQUFnQixHQUFHQSxnQkFBZ0IsSUFBSUosUUFBUSxDQUFDQyxNQUFNLENBQUNJLE1BQVAsQ0FBY0gsU0FBZCxDQUFELENBQS9DO01B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