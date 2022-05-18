import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _excluded = ["innerRef", "theme", "className", "height", "children", "intent", "appearance", "tabIndex", "onClick", "onKeyPress", "onSelect", "onDeselect", "isHighlighted", "isSelectable", "isSelected"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Pane } from '../../layers';
import { withTheme } from '../../theme';
import safeInvoke from '../../lib/safe-invoke';
import { TableRowProvider } from './TableRowContext';
import manageTableRowFocusInteraction from './manageTableRowFocusInteraction';

var TableRow = /*#__PURE__*/function (_PureComponent) {
  _inherits(TableRow, _PureComponent);

  var _super = _createSuper(TableRow);

  function TableRow() {
    var _this;

    _classCallCheck(this, TableRow);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (e) {
      if (typeof _this.props.onClick === 'function') {
        _this.props.onClick(e);
      }

      if (_this.props.isSelectable) {
        if (_this.props.isSelected) {
          _this.props.onDeselect();
        } else {
          _this.props.onSelect();
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (e) {
      if (_this.props.isSelectable) {
        var key = e.key;

        if (key === 'Enter' || key === ' ') {
          _this.props.onSelect();

          e.preventDefault();
        } else if (key === 'ArrowUp' || key === 'ArrowDown') {
          try {
            manageTableRowFocusInteraction(key, _this.mainRef);
          } catch (_) {}
        } else if (key === 'Escape') {
          if (_this.mainRef) _this.mainRef.blur();
        }
      }

      _this.props.onKeyPress(e);
    });

    _defineProperty(_assertThisInitialized(_this), "onRef", function (ref) {
      _this.mainRef = ref;
      safeInvoke(_this.props.innerRef, ref);
    });

    return _this;
  }

  _createClass(TableRow, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          innerRef = _this$props.innerRef,
          theme = _this$props.theme,
          className = _this$props.className,
          height = _this$props.height,
          children = _this$props.children,
          intent = _this$props.intent,
          appearance = _this$props.appearance,
          _this$props$tabIndex = _this$props.tabIndex,
          tabIndex = _this$props$tabIndex === void 0 ? -1 : _this$props$tabIndex,
          onClick = _this$props.onClick,
          onKeyPress = _this$props.onKeyPress,
          onSelect = _this$props.onSelect,
          onDeselect = _this$props.onDeselect,
          isHighlighted = _this$props.isHighlighted,
          isSelectable = _this$props.isSelectable,
          isSelected = _this$props.isSelected,
          props = _objectWithoutProperties(_this$props, _excluded);

      var themedClassName = theme.getRowClassName(appearance, intent);
      return /*#__PURE__*/React.createElement(TableRowProvider, {
        height: height
      }, /*#__PURE__*/React.createElement(Pane, _extends({
        innerRef: this.onRef,
        className: cx(themedClassName, className),
        display: "flex",
        "aria-selected": isHighlighted,
        "aria-current": isSelected,
        "data-isselectable": isSelectable,
        tabIndex: isSelectable ? tabIndex : undefined,
        onClick: this.handleClick,
        onKeyDown: this.handleKeyDown,
        height: height,
        borderBottom: "muted"
      }, props), children));
    }
  }]);

  return TableRow;
}(PureComponent);

TableRow.displayName = "TableRow";

_defineProperty(TableRow, "propTypes", _objectSpread(_objectSpread({}, Pane.propTypes), {}, {
  /**
   * The height of the row. Remember to add paddings when using "auto".
   */
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,

  /**
   * Function that is called on click and enter/space keypress.
   */
  onSelect: PropTypes.func,

  /**
   * Function that is called on click and enter/space keypress.
   */
  onDeselect: PropTypes.func,

  /**
   * Makes the TableRow selectable.
   */
  isSelectable: PropTypes.bool,

  /**
   * Makes the TableRow selected.
   */
  isSelected: PropTypes.bool,

  /**
   * Manually set the TableRow to be highlighted.
   */
  isHighlighted: PropTypes.bool,

  /**
   * The intent of the alert.
   */
  intent: PropTypes.oneOf(['none', 'success', 'warning', 'danger']).isRequired,

  /**
   * The appearance of the table row. Default theme only support default.
   */
  appearance: PropTypes.string.isRequired,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired,

  /**
   * Class name passed to the table row.
   * Only use if you know what you are doing.
   */
  className: PropTypes.string
}));

_defineProperty(TableRow, "defaultProps", {
  intent: 'none',
  appearance: 'default',
  height: 48,
  onSelect: function onSelect() {},
  onDeselect: function onDeselect() {},
  onKeyPress: function onKeyPress() {}
});

export default withTheme(TableRow);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJjeCIsIlBhbmUiLCJ3aXRoVGhlbWUiLCJzYWZlSW52b2tlIiwiVGFibGVSb3dQcm92aWRlciIsIm1hbmFnZVRhYmxlUm93Rm9jdXNJbnRlcmFjdGlvbiIsIlRhYmxlUm93IiwiZSIsInByb3BzIiwib25DbGljayIsImlzU2VsZWN0YWJsZSIsImlzU2VsZWN0ZWQiLCJvbkRlc2VsZWN0Iiwib25TZWxlY3QiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsIm1haW5SZWYiLCJfIiwiYmx1ciIsIm9uS2V5UHJlc3MiLCJyZWYiLCJpbm5lclJlZiIsInRoZW1lIiwiY2xhc3NOYW1lIiwiaGVpZ2h0IiwiY2hpbGRyZW4iLCJpbnRlbnQiLCJhcHBlYXJhbmNlIiwidGFiSW5kZXgiLCJpc0hpZ2hsaWdodGVkIiwidGhlbWVkQ2xhc3NOYW1lIiwiZ2V0Um93Q2xhc3NOYW1lIiwib25SZWYiLCJ1bmRlZmluZWQiLCJoYW5kbGVDbGljayIsImhhbmRsZUtleURvd24iLCJwcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJudW1iZXIiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiZnVuYyIsImJvb2wiLCJvbmVPZiIsIm9iamVjdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvVGFibGVSb3cuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IHsgUGFuZSB9IGZyb20gJy4uLy4uL2xheWVycydcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuaW1wb3J0IHNhZmVJbnZva2UgZnJvbSAnLi4vLi4vbGliL3NhZmUtaW52b2tlJ1xuaW1wb3J0IHsgVGFibGVSb3dQcm92aWRlciB9IGZyb20gJy4vVGFibGVSb3dDb250ZXh0J1xuaW1wb3J0IG1hbmFnZVRhYmxlUm93Rm9jdXNJbnRlcmFjdGlvbiBmcm9tICcuL21hbmFnZVRhYmxlUm93Rm9jdXNJbnRlcmFjdGlvbidcblxuY2xhc3MgVGFibGVSb3cgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgUGFuZSBjb21wb25lbnQgYXMgdGhlIGJhc2UuXG4gICAgICovXG4gICAgLi4uUGFuZS5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSByb3cuIFJlbWVtYmVyIHRvIGFkZCBwYWRkaW5ncyB3aGVuIHVzaW5nIFwiYXV0b1wiLlxuICAgICAqL1xuICAgIGhlaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pXG4gICAgICAuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIG9uIGNsaWNrIGFuZCBlbnRlci9zcGFjZSBrZXlwcmVzcy5cbiAgICAgKi9cbiAgICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCBvbiBjbGljayBhbmQgZW50ZXIvc3BhY2Uga2V5cHJlc3MuXG4gICAgICovXG4gICAgb25EZXNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBNYWtlcyB0aGUgVGFibGVSb3cgc2VsZWN0YWJsZS5cbiAgICAgKi9cbiAgICBpc1NlbGVjdGFibGU6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogTWFrZXMgdGhlIFRhYmxlUm93IHNlbGVjdGVkLlxuICAgICAqL1xuICAgIGlzU2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogTWFudWFsbHkgc2V0IHRoZSBUYWJsZVJvdyB0byBiZSBoaWdobGlnaHRlZC5cbiAgICAgKi9cbiAgICBpc0hpZ2hsaWdodGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbnRlbnQgb2YgdGhlIGFsZXJ0LlxuICAgICAqL1xuICAgIGludGVudDogUHJvcFR5cGVzLm9uZU9mKFsnbm9uZScsICdzdWNjZXNzJywgJ3dhcm5pbmcnLCAnZGFuZ2VyJ10pXG4gICAgICAuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBhcHBlYXJhbmNlIG9mIHRoZSB0YWJsZSByb3cuIERlZmF1bHQgdGhlbWUgb25seSBzdXBwb3J0IGRlZmF1bHQuXG4gICAgICovXG4gICAgYXBwZWFyYW5jZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlbWUgcHJvdmlkZWQgYnkgVGhlbWVQcm92aWRlci5cbiAgICAgKi9cbiAgICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogQ2xhc3MgbmFtZSBwYXNzZWQgdG8gdGhlIHRhYmxlIHJvdy5cbiAgICAgKiBPbmx5IHVzZSBpZiB5b3Uga25vdyB3aGF0IHlvdSBhcmUgZG9pbmcuXG4gICAgICovXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGludGVudDogJ25vbmUnLFxuICAgIGFwcGVhcmFuY2U6ICdkZWZhdWx0JyxcbiAgICBoZWlnaHQ6IDQ4LFxuICAgIG9uU2VsZWN0OiAoKSA9PiB7fSxcbiAgICBvbkRlc2VsZWN0OiAoKSA9PiB7fSxcbiAgICBvbktleVByZXNzOiAoKSA9PiB7fVxuICB9XG5cbiAgaGFuZGxlQ2xpY2sgPSBlID0+IHtcbiAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKGUpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMuaXNTZWxlY3RhYmxlKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5pc1NlbGVjdGVkKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25EZXNlbGVjdCgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYW5kbGVLZXlEb3duID0gZSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMuaXNTZWxlY3RhYmxlKSB7XG4gICAgICBjb25zdCB7IGtleSB9ID0gZVxuICAgICAgaWYgKGtleSA9PT0gJ0VudGVyJyB8fCBrZXkgPT09ICcgJykge1xuICAgICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KClcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0Fycm93VXAnIHx8IGtleSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBtYW5hZ2VUYWJsZVJvd0ZvY3VzSW50ZXJhY3Rpb24oa2V5LCB0aGlzLm1haW5SZWYpXG4gICAgICAgIH0gY2F0Y2ggKF8pIHt9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgaWYgKHRoaXMubWFpblJlZikgdGhpcy5tYWluUmVmLmJsdXIoKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMucHJvcHMub25LZXlQcmVzcyhlKVxuICB9XG5cbiAgb25SZWYgPSByZWYgPT4ge1xuICAgIHRoaXMubWFpblJlZiA9IHJlZlxuICAgIHNhZmVJbnZva2UodGhpcy5wcm9wcy5pbm5lclJlZiwgcmVmKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGlubmVyUmVmLFxuICAgICAgdGhlbWUsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBoZWlnaHQsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGludGVudCxcbiAgICAgIGFwcGVhcmFuY2UsXG4gICAgICB0YWJJbmRleCA9IC0xLFxuXG4gICAgICAvLyBGaWx0ZXIgb3V0XG4gICAgICBvbkNsaWNrLFxuICAgICAgb25LZXlQcmVzcyxcbiAgICAgIG9uU2VsZWN0LFxuICAgICAgb25EZXNlbGVjdCxcblxuICAgICAgaXNIaWdobGlnaHRlZCxcbiAgICAgIGlzU2VsZWN0YWJsZSxcbiAgICAgIGlzU2VsZWN0ZWQsXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgdGhlbWVkQ2xhc3NOYW1lID0gdGhlbWUuZ2V0Um93Q2xhc3NOYW1lKGFwcGVhcmFuY2UsIGludGVudClcblxuICAgIHJldHVybiAoXG4gICAgICA8VGFibGVSb3dQcm92aWRlciBoZWlnaHQ9e2hlaWdodH0+XG4gICAgICAgIDxQYW5lXG4gICAgICAgICAgaW5uZXJSZWY9e3RoaXMub25SZWZ9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjeCh0aGVtZWRDbGFzc05hbWUsIGNsYXNzTmFtZSl9XG4gICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgIGFyaWEtc2VsZWN0ZWQ9e2lzSGlnaGxpZ2h0ZWR9XG4gICAgICAgICAgYXJpYS1jdXJyZW50PXtpc1NlbGVjdGVkfVxuICAgICAgICAgIGRhdGEtaXNzZWxlY3RhYmxlPXtpc1NlbGVjdGFibGV9XG4gICAgICAgICAgdGFiSW5kZXg9e2lzU2VsZWN0YWJsZSA/IHRhYkluZGV4IDogdW5kZWZpbmVkfVxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG4gICAgICAgICAgb25LZXlEb3duPXt0aGlzLmhhbmRsZUtleURvd259XG4gICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgYm9yZGVyQm90dG9tPVwibXV0ZWRcIlxuICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9QYW5lPlxuICAgICAgPC9UYWJsZVJvd1Byb3ZpZGVyPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoVGFibGVSb3cpXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxhQUFoQixRQUFxQyxPQUFyQztBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxFQUFQLE1BQWUsWUFBZjtBQUNBLFNBQVNDLElBQVQsUUFBcUIsY0FBckI7QUFDQSxTQUFTQyxTQUFULFFBQTBCLGFBQTFCO0FBQ0EsT0FBT0MsVUFBUCxNQUF1Qix1QkFBdkI7QUFDQSxTQUFTQyxnQkFBVCxRQUFpQyxtQkFBakM7QUFDQSxPQUFPQyw4QkFBUCxNQUEyQyxrQ0FBM0M7O0lBRU1DLFE7Ozs7Ozs7Ozs7Ozs7Ozs7a0VBc0VVLFVBQUFDLENBQUMsRUFBSTtNQUNqQixJQUFJLE9BQU8sTUFBS0MsS0FBTCxDQUFXQyxPQUFsQixLQUE4QixVQUFsQyxFQUE4QztRQUM1QyxNQUFLRCxLQUFMLENBQVdDLE9BQVgsQ0FBbUJGLENBQW5CO01BQ0Q7O01BRUQsSUFBSSxNQUFLQyxLQUFMLENBQVdFLFlBQWYsRUFBNkI7UUFDM0IsSUFBSSxNQUFLRixLQUFMLENBQVdHLFVBQWYsRUFBMkI7VUFDekIsTUFBS0gsS0FBTCxDQUFXSSxVQUFYO1FBQ0QsQ0FGRCxNQUVPO1VBQ0wsTUFBS0osS0FBTCxDQUFXSyxRQUFYO1FBQ0Q7TUFDRjtJQUNGLEM7O29FQUVlLFVBQUFOLENBQUMsRUFBSTtNQUNuQixJQUFJLE1BQUtDLEtBQUwsQ0FBV0UsWUFBZixFQUE2QjtRQUMzQixJQUFRSSxHQUFSLEdBQWdCUCxDQUFoQixDQUFRTyxHQUFSOztRQUNBLElBQUlBLEdBQUcsS0FBSyxPQUFSLElBQW1CQSxHQUFHLEtBQUssR0FBL0IsRUFBb0M7VUFDbEMsTUFBS04sS0FBTCxDQUFXSyxRQUFYOztVQUNBTixDQUFDLENBQUNRLGNBQUY7UUFDRCxDQUhELE1BR08sSUFBSUQsR0FBRyxLQUFLLFNB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