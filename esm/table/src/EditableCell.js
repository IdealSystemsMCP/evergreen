import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _excluded = ["children", "theme", "size", "disabled", "placeholder", "isSelectable", "textProps"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from '../../theme';
import { Portal } from '../../portal';
import { Stack } from '../../stack';
import safeInvoke from '../../lib/safe-invoke';
import TextTableCell from './TextTableCell';
import TableCell from './TableCell';
import EditableCellField from './EditableCellField';

var EditableCell = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(EditableCell, _React$PureComponent);

  var _super = _createSuper(EditableCell);

  function EditableCell() {
    var _this;

    _classCallCheck(this, EditableCell);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      value: _this.props.children,
      isEditing: _this.props.autoFocus
    });

    _defineProperty(_assertThisInitialized(_this), "onMainRef", function (ref) {
      _this.mainRef = ref;
    });

    _defineProperty(_assertThisInitialized(_this), "onOverlayRef", function (ref) {
      _this.overlayRef = ref;
    });

    _defineProperty(_assertThisInitialized(_this), "handleDoubleClick", function () {
      if (_this.props.disabled || !_this.props.isSelectable) return;

      _this.setState({
        isEditing: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (e) {
      if (_this.props.disabled) return;
      var key = e.key;
      /**
       * When the user presses a character on the keyboard, use that character
       * as the value in the text field.
       */

      if (key === 'Enter' || key === 'Shift') {
        _this.setState({
          isEditing: true
        });
      } else if (key.match(/^[a-z]{0,10}$/) && !e.metaKey && !e.ctrlKey && !e.altKey) {
        _this.setState(function (prevState) {
          return {
            isEditing: true,
            value: prevState.value + key
          };
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleFieldChangeComplete", function (value) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          isSelectable = _this$props.isSelectable;

      _this.setState({
        isEditing: false,
        value: value
      });

      safeInvoke(onChange, value);

      if (_this.mainRef && isSelectable) {
        _this.mainRef.focus();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleFieldCancel", function () {
      _this.setState({
        isEditing: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function () {
      _this.mainRef.focus();
    });

    return _this;
  }

  _createClass(EditableCell, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          children = _this$props2.children,
          theme = _this$props2.theme,
          size = _this$props2.size,
          disabled = _this$props2.disabled,
          placeholder = _this$props2.placeholder,
          isSelectable = _this$props2.isSelectable,
          _this$props2$textProp = _this$props2.textProps,
          textProps = _this$props2$textProp === void 0 ? {} : _this$props2$textProp,
          props = _objectWithoutProperties(_this$props2, _excluded);

      var _this$state = this.state,
          isEditing = _this$state.isEditing,
          value = _this$state.value;
      var cursor = 'text';

      if (disabled) {
        cursor = 'not-allowed';
      } else if (isSelectable) {
        cursor = 'default';
      }

      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TextTableCell, _extends({
        innerRef: this.onMainRef,
        isSelectable: isSelectable,
        onClick: this.handleClick,
        onDoubleClick: this.handleDoubleClick,
        onKeyDown: this.handleKeyDown,
        cursor: cursor,
        textProps: _objectSpread({
          size: size,
          opacity: disabled || !children && placeholder ? 0.5 : 1
        }, textProps)
      }, props), children ? children : placeholder), isEditing && /*#__PURE__*/React.createElement(Portal, null, /*#__PURE__*/React.createElement(Stack, null, function (zIndex) {
        return /*#__PURE__*/React.createElement(EditableCellField, {
          zIndex: zIndex,
          getTargetRef: function getTargetRef() {
            return _this2.mainRef;
          },
          value: value,
          onEscape: _this2.handleFieldEscape,
          onChangeComplete: _this2.handleFieldChangeComplete,
          onCancel: _this2.handleFieldCancel,
          size: size
        });
      })));
    }
  }]);

  return EditableCell;
}(React.PureComponent);

EditableCell.displayName = "EditableCell";

_defineProperty(EditableCell, "propTypes", _objectSpread(_objectSpread({}, TableCell.propTypes), {}, {
  /*
   * Makes the TableCell focusable.
   * Will add tabIndex={-1 || this.props.tabIndex}.
   */
  isSelectable: PropTypes.bool.isRequired,

  /**
   * When true, the cell can't be edited.
   */
  disabled: PropTypes.bool,

  /**
   * Optional placeholder when children is falsy.
   */
  placeholder: PropTypes.node,

  /**
   * The size used for the TextTableCell and Textarea.
   */
  size: PropTypes.oneOf([300, 400]).isRequired,

  /**
   * This is the value of the cell.
   */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Function called when value changes. (value: string) => void.
   */
  onChange: PropTypes.func,

  /**
   * When true, the cell will initialize in the editing state.
   */
  autoFocus: PropTypes.bool
}));

_defineProperty(EditableCell, "defaultProps", {
  size: 300,
  isSelectable: true,
  autoFocus: false
});

export default withTheme(EditableCell);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIndpdGhUaGVtZSIsIlBvcnRhbCIsIlN0YWNrIiwic2FmZUludm9rZSIsIlRleHRUYWJsZUNlbGwiLCJUYWJsZUNlbGwiLCJFZGl0YWJsZUNlbGxGaWVsZCIsIkVkaXRhYmxlQ2VsbCIsInZhbHVlIiwicHJvcHMiLCJjaGlsZHJlbiIsImlzRWRpdGluZyIsImF1dG9Gb2N1cyIsInJlZiIsIm1haW5SZWYiLCJvdmVybGF5UmVmIiwiZGlzYWJsZWQiLCJpc1NlbGVjdGFibGUiLCJzZXRTdGF0ZSIsImUiLCJrZXkiLCJtYXRjaCIsIm1ldGFLZXkiLCJjdHJsS2V5IiwiYWx0S2V5IiwicHJldlN0YXRlIiwib25DaGFuZ2UiLCJmb2N1cyIsInRoZW1lIiwic2l6ZSIsInBsYWNlaG9sZGVyIiwidGV4dFByb3BzIiwic3RhdGUiLCJjdXJzb3IiLCJvbk1haW5SZWYiLCJoYW5kbGVDbGljayIsImhhbmRsZURvdWJsZUNsaWNrIiwiaGFuZGxlS2V5RG93biIsIm9wYWNpdHkiLCJ6SW5kZXgiLCJoYW5kbGVGaWVsZEVzY2FwZSIsImhhbmRsZUZpZWxkQ2hhbmdlQ29tcGxldGUiLCJoYW5kbGVGaWVsZENhbmNlbCIsIlB1cmVDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJib29sIiwiaXNSZXF1aXJlZCIsIm5vZGUiLCJvbmVPZiIsIm9uZU9mVHlwZSIsInN0cmluZyIsIm51bWJlciIsImZ1bmMiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdGFibGUvc3JjL0VkaXRhYmxlQ2VsbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcbmltcG9ydCB7IFBvcnRhbCB9IGZyb20gJy4uLy4uL3BvcnRhbCdcbmltcG9ydCB7IFN0YWNrIH0gZnJvbSAnLi4vLi4vc3RhY2snXG5pbXBvcnQgc2FmZUludm9rZSBmcm9tICcuLi8uLi9saWIvc2FmZS1pbnZva2UnXG5pbXBvcnQgVGV4dFRhYmxlQ2VsbCBmcm9tICcuL1RleHRUYWJsZUNlbGwnXG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJy4vVGFibGVDZWxsJ1xuaW1wb3J0IEVkaXRhYmxlQ2VsbEZpZWxkIGZyb20gJy4vRWRpdGFibGVDZWxsRmllbGQnXG5cbmNsYXNzIEVkaXRhYmxlQ2VsbCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBUYWJsZUNlbGwgY29tcG9uZW50IGFzIHRoZSBiYXNlLlxuICAgICAqL1xuICAgIC4uLlRhYmxlQ2VsbC5wcm9wVHlwZXMsXG5cbiAgICAvKlxuICAgICAqIE1ha2VzIHRoZSBUYWJsZUNlbGwgZm9jdXNhYmxlLlxuICAgICAqIFdpbGwgYWRkIHRhYkluZGV4PXstMSB8fCB0aGlzLnByb3BzLnRhYkluZGV4fS5cbiAgICAgKi9cbiAgICBpc1NlbGVjdGFibGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSBjZWxsIGNhbid0IGJlIGVkaXRlZC5cbiAgICAgKi9cbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBPcHRpb25hbCBwbGFjZWhvbGRlciB3aGVuIGNoaWxkcmVuIGlzIGZhbHN5LlxuICAgICAqL1xuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMubm9kZSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBzaXplIHVzZWQgZm9yIHRoZSBUZXh0VGFibGVDZWxsIGFuZCBUZXh0YXJlYS5cbiAgICAgKi9cbiAgICBzaXplOiBQcm9wVHlwZXMub25lT2YoWzMwMCwgNDAwXSkuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoaXMgaXMgdGhlIHZhbHVlIG9mIHRoZSBjZWxsLlxuICAgICAqL1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiBjYWxsZWQgd2hlbiB2YWx1ZSBjaGFuZ2VzLiAodmFsdWU6IHN0cmluZykgPT4gdm9pZC5cbiAgICAgKi9cbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSBjZWxsIHdpbGwgaW5pdGlhbGl6ZSBpbiB0aGUgZWRpdGluZyBzdGF0ZS5cbiAgICAgKi9cbiAgICBhdXRvRm9jdXM6IFByb3BUeXBlcy5ib29sXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHNpemU6IDMwMCxcbiAgICBpc1NlbGVjdGFibGU6IHRydWUsXG4gICAgYXV0b0ZvY3VzOiBmYWxzZVxuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgdmFsdWU6IHRoaXMucHJvcHMuY2hpbGRyZW4sXG4gICAgaXNFZGl0aW5nOiB0aGlzLnByb3BzLmF1dG9Gb2N1c1xuICB9XG5cbiAgb25NYWluUmVmID0gcmVmID0+IHtcbiAgICB0aGlzLm1haW5SZWYgPSByZWZcbiAgfVxuXG4gIG9uT3ZlcmxheVJlZiA9IHJlZiA9PiB7XG4gICAgdGhpcy5vdmVybGF5UmVmID0gcmVmXG4gIH1cblxuICBoYW5kbGVEb3VibGVDbGljayA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy5kaXNhYmxlZCB8fCAhdGhpcy5wcm9wcy5pc1NlbGVjdGFibGUpIHJldHVyblxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc0VkaXRpbmc6IHRydWVcbiAgICB9KVxuICB9XG5cbiAgaGFuZGxlS2V5RG93biA9IGUgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLmRpc2FibGVkKSByZXR1cm5cbiAgICBjb25zdCB7IGtleSB9ID0gZVxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0aGUgdXNlciBwcmVzc2VzIGEgY2hhcmFjdGVyIG9uIHRoZSBrZXlib2FyZCwgdXNlIHRoYXQgY2hhcmFjdGVyXG4gICAgICogYXMgdGhlIHZhbHVlIGluIHRoZSB0ZXh0IGZpZWxkLlxuICAgICAqL1xuICAgIGlmIChrZXkgPT09ICdFbnRlcicgfHwga2V5ID09PSAnU2hpZnQnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaXNFZGl0aW5nOiB0cnVlXG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAoXG4gICAgICBrZXkubWF0Y2goL15bYS16XXswLDEwfSQvKSAmJlxuICAgICAgIWUubWV0YUtleSAmJlxuICAgICAgIWUuY3RybEtleSAmJlxuICAgICAgIWUuYWx0S2V5XG4gICAgKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgICBpc0VkaXRpbmc6IHRydWUsXG4gICAgICAgIHZhbHVlOiBwcmV2U3RhdGUudmFsdWUgKyBrZXlcbiAgICAgIH0pKVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUZpZWxkQ2hhbmdlQ29tcGxldGUgPSB2YWx1ZSA9PiB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSwgaXNTZWxlY3RhYmxlIH0gPSB0aGlzLnByb3BzXG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzRWRpdGluZzogZmFsc2UsXG4gICAgICB2YWx1ZVxuICAgIH0pXG5cbiAgICBzYWZlSW52b2tlKG9uQ2hhbmdlLCB2YWx1ZSlcblxuICAgIGlmICh0aGlzLm1haW5SZWYgJiYgaXNTZWxlY3RhYmxlKSB7XG4gICAgICB0aGlzLm1haW5SZWYuZm9jdXMoKVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUZpZWxkQ2FuY2VsID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpc0VkaXRpbmc6IGZhbHNlIH0pXG4gIH1cblxuICBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICB0aGlzLm1haW5SZWYuZm9jdXMoKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgdGhlbWUsXG4gICAgICBzaXplLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBwbGFjZWhvbGRlcixcbiAgICAgIGlzU2VsZWN0YWJsZSxcbiAgICAgIHRleHRQcm9wcyA9IHt9LFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgaXNFZGl0aW5nLCB2YWx1ZSB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgbGV0IGN1cnNvciA9ICd0ZXh0J1xuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgY3Vyc29yID0gJ25vdC1hbGxvd2VkJ1xuICAgIH0gZWxzZSBpZiAoaXNTZWxlY3RhYmxlKSB7XG4gICAgICBjdXJzb3IgPSAnZGVmYXVsdCdcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8VGV4dFRhYmxlQ2VsbFxuICAgICAgICAgIGlubmVyUmVmPXt0aGlzLm9uTWFpblJlZn1cbiAgICAgICAgICBpc1NlbGVjdGFibGU9e2lzU2VsZWN0YWJsZX1cbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxuICAgICAgICAgIG9uRG91YmxlQ2xpY2s9e3RoaXMuaGFuZGxlRG91YmxlQ2xpY2t9XG4gICAgICAgICAgb25LZXlEb3duPXt0aGlzLmhhbmRsZUtleURvd259XG4gICAgICAgICAgY3Vyc29yPXtjdXJzb3J9XG4gICAgICAgICAgdGV4dFByb3BzPXt7XG4gICAgICAgICAgICBzaXplLFxuICAgICAgICAgICAgb3BhY2l0eTogZGlzYWJsZWQgfHwgKCFjaGlsZHJlbiAmJiBwbGFjZWhvbGRlcikgPyAwLjUgOiAxLFxuICAgICAgICAgICAgLi4udGV4dFByb3BzXG4gICAgICAgICAgfX1cbiAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICB7Y2hpbGRyZW4gPyBjaGlsZHJlbiA6IHBsYWNlaG9sZGVyfVxuICAgICAgICA8L1RleHRUYWJsZUNlbGw+XG4gICAgICAgIHtpc0VkaXRpbmcgJiYgKFxuICAgICAgICAgIDxQb3J0YWw+XG4gICAgICAgICAgICA8U3RhY2s+XG4gICAgICAgICAgICAgIHt6SW5kZXggPT4gKFxuICAgICAgICAgICAgICAgIDxFZGl0YWJsZUNlbGxGaWVsZFxuICAgICAgICAgICAgICAgICAgekluZGV4PXt6SW5kZXh9XG4gICAgICAgICAgICAgICAgICBnZXRUYXJnZXRSZWY9eygpID0+IHRoaXMubWFpblJlZn1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgICAgIG9uRXNjYXBlPXt0aGlzLmhhbmRsZUZpZWxkRXNjYXBlfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2VDb21wbGV0ZT17dGhpcy5oYW5kbGVGaWVsZENoYW5nZUNvbXBsZXRlfVxuICAgICAgICAgICAgICAgICAgb25DYW5jZWw9e3RoaXMuaGFuZGxlRmllbGRDYW5jZWx9XG4gICAgICAgICAgICAgICAgICBzaXplPXtzaXplfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgIDwvUG9ydGFsPlxuICAgICAgICApfVxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKEVkaXRhYmxlQ2VsbClcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsU0FBVCxRQUEwQixhQUExQjtBQUNBLFNBQVNDLE1BQVQsUUFBdUIsY0FBdkI7QUFDQSxTQUFTQyxLQUFULFFBQXNCLGFBQXRCO0FBQ0EsT0FBT0MsVUFBUCxNQUF1Qix1QkFBdkI7QUFDQSxPQUFPQyxhQUFQLE1BQTBCLGlCQUExQjtBQUNBLE9BQU9DLFNBQVAs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