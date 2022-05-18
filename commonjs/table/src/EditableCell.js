"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _theme = require("../../theme");

var _portal = require("../../portal");

var _stack = require("../../stack");

var _safeInvoke = _interopRequireDefault(require("../../lib/safe-invoke"));

var _TextTableCell = _interopRequireDefault(require("./TextTableCell"));

var _TableCell = _interopRequireDefault(require("./TableCell"));

var _EditableCellField = _interopRequireDefault(require("./EditableCellField"));

var _excluded = ["children", "theme", "size", "disabled", "placeholder", "isSelectable", "textProps"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var EditableCell = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(EditableCell, _React$PureComponent);

  var _super = _createSuper(EditableCell);

  function EditableCell() {
    var _this;

    (0, _classCallCheck2["default"])(this, EditableCell);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      value: _this.props.children,
      isEditing: _this.props.autoFocus
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onMainRef", function (ref) {
      _this.mainRef = ref;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onOverlayRef", function (ref) {
      _this.overlayRef = ref;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleDoubleClick", function () {
      if (_this.props.disabled || !_this.props.isSelectable) return;

      _this.setState({
        isEditing: true
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleKeyDown", function (e) {
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
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleFieldChangeComplete", function (value) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          isSelectable = _this$props.isSelectable;

      _this.setState({
        isEditing: false,
        value: value
      });

      (0, _safeInvoke["default"])(onChange, value);

      if (_this.mainRef && isSelectable) {
        _this.mainRef.focus();
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleFieldCancel", function () {
      _this.setState({
        isEditing: false
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClick", function () {
      _this.mainRef.focus();
    });
    return _this;
  }

  (0, _createClass2["default"])(EditableCell, [{
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
          props = (0, _objectWithoutProperties2["default"])(_this$props2, _excluded);
      var _this$state = this.state,
          isEditing = _this$state.isEditing,
          value = _this$state.value;
      var cursor = 'text';

      if (disabled) {
        cursor = 'not-allowed';
      } else if (isSelectable) {
        cursor = 'default';
      }

      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_TextTableCell["default"], (0, _extends2["default"])({
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
      }, props), children ? children : placeholder), isEditing && /*#__PURE__*/_react["default"].createElement(_portal.Portal, null, /*#__PURE__*/_react["default"].createElement(_stack.Stack, null, function (zIndex) {
        return /*#__PURE__*/_react["default"].createElement(_EditableCellField["default"], {
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
}(_react["default"].PureComponent);

EditableCell.displayName = "EditableCell";
(0, _defineProperty2["default"])(EditableCell, "propTypes", _objectSpread(_objectSpread({}, _TableCell["default"].propTypes), {}, {
  /*
   * Makes the TableCell focusable.
   * Will add tabIndex={-1 || this.props.tabIndex}.
   */
  isSelectable: _propTypes["default"].bool.isRequired,

  /**
   * When true, the cell can't be edited.
   */
  disabled: _propTypes["default"].bool,

  /**
   * Optional placeholder when children is falsy.
   */
  placeholder: _propTypes["default"].node,

  /**
   * The size used for the TextTableCell and Textarea.
   */
  size: _propTypes["default"].oneOf([300, 400]).isRequired,

  /**
   * This is the value of the cell.
   */
  children: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),

  /**
   * Function called when value changes. (value: string) => void.
   */
  onChange: _propTypes["default"].func,

  /**
   * When true, the cell will initialize in the editing state.
   */
  autoFocus: _propTypes["default"].bool
}));
(0, _defineProperty2["default"])(EditableCell, "defaultProps", {
  size: 300,
  isSelectable: true,
  autoFocus: false
});

var _default = (0, _theme.withTheme)(EditableCell);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJFZGl0YWJsZUNlbGwiLCJ2YWx1ZSIsInByb3BzIiwiY2hpbGRyZW4iLCJpc0VkaXRpbmciLCJhdXRvRm9jdXMiLCJyZWYiLCJtYWluUmVmIiwib3ZlcmxheVJlZiIsImRpc2FibGVkIiwiaXNTZWxlY3RhYmxlIiwic2V0U3RhdGUiLCJlIiwia2V5IiwibWF0Y2giLCJtZXRhS2V5IiwiY3RybEtleSIsImFsdEtleSIsInByZXZTdGF0ZSIsIm9uQ2hhbmdlIiwic2FmZUludm9rZSIsImZvY3VzIiwidGhlbWUiLCJzaXplIiwicGxhY2Vob2xkZXIiLCJ0ZXh0UHJvcHMiLCJzdGF0ZSIsImN1cnNvciIsIm9uTWFpblJlZiIsImhhbmRsZUNsaWNrIiwiaGFuZGxlRG91YmxlQ2xpY2siLCJoYW5kbGVLZXlEb3duIiwib3BhY2l0eSIsInpJbmRleCIsImhhbmRsZUZpZWxkRXNjYXBlIiwiaGFuZGxlRmllbGRDaGFuZ2VDb21wbGV0ZSIsImhhbmRsZUZpZWxkQ2FuY2VsIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiVGFibGVDZWxsIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsImlzUmVxdWlyZWQiLCJub2RlIiwib25lT2YiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJudW1iZXIiLCJmdW5jIiwid2l0aFRoZW1lIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3RhYmxlL3NyYy9FZGl0YWJsZUNlbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5pbXBvcnQgeyBQb3J0YWwgfSBmcm9tICcuLi8uLi9wb3J0YWwnXG5pbXBvcnQgeyBTdGFjayB9IGZyb20gJy4uLy4uL3N0YWNrJ1xuaW1wb3J0IHNhZmVJbnZva2UgZnJvbSAnLi4vLi4vbGliL3NhZmUtaW52b2tlJ1xuaW1wb3J0IFRleHRUYWJsZUNlbGwgZnJvbSAnLi9UZXh0VGFibGVDZWxsJ1xuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tICcuL1RhYmxlQ2VsbCdcbmltcG9ydCBFZGl0YWJsZUNlbGxGaWVsZCBmcm9tICcuL0VkaXRhYmxlQ2VsbEZpZWxkJ1xuXG5jbGFzcyBFZGl0YWJsZUNlbGwgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgVGFibGVDZWxsIGNvbXBvbmVudCBhcyB0aGUgYmFzZS5cbiAgICAgKi9cbiAgICAuLi5UYWJsZUNlbGwucHJvcFR5cGVzLFxuXG4gICAgLypcbiAgICAgKiBNYWtlcyB0aGUgVGFibGVDZWxsIGZvY3VzYWJsZS5cbiAgICAgKiBXaWxsIGFkZCB0YWJJbmRleD17LTEgfHwgdGhpcy5wcm9wcy50YWJJbmRleH0uXG4gICAgICovXG4gICAgaXNTZWxlY3RhYmxlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgY2VsbCBjYW4ndCBiZSBlZGl0ZWQuXG4gICAgICovXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogT3B0aW9uYWwgcGxhY2Vob2xkZXIgd2hlbiBjaGlsZHJlbiBpcyBmYWxzeS5cbiAgICAgKi9cbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2l6ZSB1c2VkIGZvciB0aGUgVGV4dFRhYmxlQ2VsbCBhbmQgVGV4dGFyZWEuXG4gICAgICovXG4gICAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFszMDAsIDQwMF0pLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGlzIHRoZSB2YWx1ZSBvZiB0aGUgY2VsbC5cbiAgICAgKi9cbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gY2FsbGVkIHdoZW4gdmFsdWUgY2hhbmdlcy4gKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQuXG4gICAgICovXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgY2VsbCB3aWxsIGluaXRpYWxpemUgaW4gdGhlIGVkaXRpbmcgc3RhdGUuXG4gICAgICovXG4gICAgYXV0b0ZvY3VzOiBQcm9wVHlwZXMuYm9vbFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBzaXplOiAzMDAsXG4gICAgaXNTZWxlY3RhYmxlOiB0cnVlLFxuICAgIGF1dG9Gb2N1czogZmFsc2VcbiAgfVxuXG4gIHN0YXRlID0ge1xuICAgIHZhbHVlOiB0aGlzLnByb3BzLmNoaWxkcmVuLFxuICAgIGlzRWRpdGluZzogdGhpcy5wcm9wcy5hdXRvRm9jdXNcbiAgfVxuXG4gIG9uTWFpblJlZiA9IHJlZiA9PiB7XG4gICAgdGhpcy5tYWluUmVmID0gcmVmXG4gIH1cblxuICBvbk92ZXJsYXlSZWYgPSByZWYgPT4ge1xuICAgIHRoaXMub3ZlcmxheVJlZiA9IHJlZlxuICB9XG5cbiAgaGFuZGxlRG91YmxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMuZGlzYWJsZWQgfHwgIXRoaXMucHJvcHMuaXNTZWxlY3RhYmxlKSByZXR1cm5cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNFZGl0aW5nOiB0cnVlXG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZUtleURvd24gPSBlID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy5kaXNhYmxlZCkgcmV0dXJuXG4gICAgY29uc3QgeyBrZXkgfSA9IGVcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdGhlIHVzZXIgcHJlc3NlcyBhIGNoYXJhY3RlciBvbiB0aGUga2V5Ym9hcmQsIHVzZSB0aGF0IGNoYXJhY3RlclxuICAgICAqIGFzIHRoZSB2YWx1ZSBpbiB0aGUgdGV4dCBmaWVsZC5cbiAgICAgKi9cbiAgICBpZiAoa2V5ID09PSAnRW50ZXInIHx8IGtleSA9PT0gJ1NoaWZ0Jykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlzRWRpdGluZzogdHJ1ZVxuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKFxuICAgICAga2V5Lm1hdGNoKC9eW2Etel17MCwxMH0kLykgJiZcbiAgICAgICFlLm1ldGFLZXkgJiZcbiAgICAgICFlLmN0cmxLZXkgJiZcbiAgICAgICFlLmFsdEtleVxuICAgICkge1xuICAgICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcbiAgICAgICAgaXNFZGl0aW5nOiB0cnVlLFxuICAgICAgICB2YWx1ZTogcHJldlN0YXRlLnZhbHVlICsga2V5XG4gICAgICB9KSlcbiAgICB9XG4gIH1cblxuICBoYW5kbGVGaWVsZENoYW5nZUNvbXBsZXRlID0gdmFsdWUgPT4ge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UsIGlzU2VsZWN0YWJsZSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc0VkaXRpbmc6IGZhbHNlLFxuICAgICAgdmFsdWVcbiAgICB9KVxuXG4gICAgc2FmZUludm9rZShvbkNoYW5nZSwgdmFsdWUpXG5cbiAgICBpZiAodGhpcy5tYWluUmVmICYmIGlzU2VsZWN0YWJsZSkge1xuICAgICAgdGhpcy5tYWluUmVmLmZvY3VzKClcbiAgICB9XG4gIH1cblxuICBoYW5kbGVGaWVsZENhbmNlbCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNFZGl0aW5nOiBmYWxzZSB9KVxuICB9XG5cbiAgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgdGhpcy5tYWluUmVmLmZvY3VzKClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjaGlsZHJlbixcbiAgICAgIHRoZW1lLFxuICAgICAgc2l6ZSxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICBpc1NlbGVjdGFibGUsXG4gICAgICB0ZXh0UHJvcHMgPSB7fSxcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGlzRWRpdGluZywgdmFsdWUgfSA9IHRoaXMuc3RhdGVcblxuICAgIGxldCBjdXJzb3IgPSAndGV4dCdcbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIGN1cnNvciA9ICdub3QtYWxsb3dlZCdcbiAgICB9IGVsc2UgaWYgKGlzU2VsZWN0YWJsZSkge1xuICAgICAgY3Vyc29yID0gJ2RlZmF1bHQnXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPFRleHRUYWJsZUNlbGxcbiAgICAgICAgICBpbm5lclJlZj17dGhpcy5vbk1haW5SZWZ9XG4gICAgICAgICAgaXNTZWxlY3RhYmxlPXtpc1NlbGVjdGFibGV9XG4gICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cbiAgICAgICAgICBvbkRvdWJsZUNsaWNrPXt0aGlzLmhhbmRsZURvdWJsZUNsaWNrfVxuICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5oYW5kbGVLZXlEb3dufVxuICAgICAgICAgIGN1cnNvcj17Y3Vyc29yfVxuICAgICAgICAgIHRleHRQcm9wcz17e1xuICAgICAgICAgICAgc2l6ZSxcbiAgICAgICAgICAgIG9wYWNpdHk6IGRpc2FibGVkIHx8ICghY2hpbGRyZW4gJiYgcGxhY2Vob2xkZXIpID8gMC41IDogMSxcbiAgICAgICAgICAgIC4uLnRleHRQcm9wc1xuICAgICAgICAgIH19XG4gICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAge2NoaWxkcmVuID8gY2hpbGRyZW4gOiBwbGFjZWhvbGRlcn1cbiAgICAgICAgPC9UZXh0VGFibGVDZWxsPlxuICAgICAgICB7aXNFZGl0aW5nICYmIChcbiAgICAgICAgICA8UG9ydGFsPlxuICAgICAgICAgICAgPFN0YWNrPlxuICAgICAgICAgICAgICB7ekluZGV4ID0+IChcbiAgICAgICAgICAgICAgICA8RWRpdGFibGVDZWxsRmllbGRcbiAgICAgICAgICAgICAgICAgIHpJbmRleD17ekluZGV4fVxuICAgICAgICAgICAgICAgICAgZ2V0VGFyZ2V0UmVmPXsoKSA9PiB0aGlzLm1haW5SZWZ9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgICAgICBvbkVzY2FwZT17dGhpcy5oYW5kbGVGaWVsZEVzY2FwZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlQ29tcGxldGU9e3RoaXMuaGFuZGxlRmllbGRDaGFuZ2VDb21wbGV0ZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXt0aGlzLmhhbmRsZUZpZWxkQ2FuY2VsfVxuICAgICAgICAgICAgICAgICAgc2l6ZT17c2l6ZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICA8L1BvcnRhbD5cbiAgICAgICAgKX1cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShFZGl0YWJsZUNlbGwpXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsWTs7Ozs7Ozs7Ozs7Ozs7OzhGQWtESTtNQUNOQyxLQUFLLEVBQUUsTUFBS0MsS0FBTCxDQUFXQyxRQURaO01BRU5DLFNBQVMsRUFBRSxNQUFLRixLQUFMLENBQVdHO0lBRmhCLEM7a0dBS0ksVUFBQUMsR0FBRyxFQUFJO01BQ2pCLE1BQUtDLE9BQUwsR0FBZUQsR0FBZjtJQUNELEM7cUdBRWMsVUFBQUEsR0FBRyxFQUFJO01BQ3BCLE1B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