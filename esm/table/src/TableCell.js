import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _excluded = ["innerRef", "theme", "children", "appearance", "onClick", "onKeyPress", "onKeyDown", "isSelectable", "tabIndex", "className", "rightView", "arrowKeysOverrides"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { toaster } from '../../toaster';
import { withTheme } from '../../theme';
import { Pane } from '../../layers';
import safeInvoke from '../../lib/safe-invoke';
import { TableRowConsumer } from './TableRowContext';
import manageTableCellFocusInteraction from './manageTableCellFocusInteraction';

function executeArrowKeyOverride(override) {
  if (!override) {
    return;
  }

  if (typeof override === 'function') {
    override();
    return;
  }

  if (typeof override === 'string') {
    document.querySelector(override).focus();
    return;
  } // This needs to be the node, not a React ref.


  override.focus();
}

var TableCell = /*#__PURE__*/function (_PureComponent) {
  _inherits(TableCell, _PureComponent);

  var _super = _createSuper(TableCell);

  function TableCell() {
    var _this;

    _classCallCheck(this, TableCell);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (e) {
      var _this$props$arrowKeys = _this.props.arrowKeysOverrides,
          arrowKeysOverrides = _this$props$arrowKeys === void 0 ? {} : _this$props$arrowKeys;

      if (_this.props.isSelectable) {
        var key = e.key;

        if (key === 'ArrowUp' || key === 'ArrowDown' || key === 'ArrowLeft' || key === 'ArrowRight') {
          e.preventDefault();

          try {
            // Support arrow key overrides.
            var override = arrowKeysOverrides[key.slice('Arrow'.length).toLowerCase()];
            if (override === false) return;
            if (override) return executeArrowKeyOverride(override);
            manageTableCellFocusInteraction(key, _this.mainRef);
          } catch (error) {
            toaster.danger('Keyboard interaction not possible');
            console.error('Keyboard interaction not possible', error);
          }
        } else if (key === 'Escape') {
          _this.mainRef.blur();
        }
      }

      safeInvoke(_this.props.onKeyDown, e);
    });

    _defineProperty(_assertThisInitialized(_this), "onRef", function (ref) {
      _this.mainRef = ref;
      safeInvoke(_this.props.innerRef, ref);
    });

    return _this;
  }

  _createClass(TableCell, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          innerRef = _this$props.innerRef,
          theme = _this$props.theme,
          children = _this$props.children,
          appearance = _this$props.appearance,
          onClick = _this$props.onClick,
          onKeyPress = _this$props.onKeyPress,
          onKeyDown = _this$props.onKeyDown,
          isSelectable = _this$props.isSelectable,
          _this$props$tabIndex = _this$props.tabIndex,
          tabIndex = _this$props$tabIndex === void 0 ? -1 : _this$props$tabIndex,
          className = _this$props.className,
          rightView = _this$props.rightView,
          arrowKeysOverrides = _this$props.arrowKeysOverrides,
          props = _objectWithoutProperties(_this$props, _excluded);

      var themedClassName = theme.getTableCellClassName(appearance);
      return /*#__PURE__*/React.createElement(TableRowConsumer, null, function (height) {
        return /*#__PURE__*/React.createElement(Pane, _extends({
          innerRef: _this2.onRef,
          height: height,
          className: cx(themedClassName, className),
          tabIndex: isSelectable ? tabIndex : undefined,
          "data-isselectable": isSelectable,
          onClick: onClick,
          onKeyDown: _this2.handleKeyDown
        }, TableCell.styles, props), children, rightView ? rightView : null);
      });
    }
  }]);

  return TableCell;
}(PureComponent);

TableCell.displayName = "TableCell";

_defineProperty(TableCell, "propTypes", _objectSpread(_objectSpread({}, Pane.propTypes), {}, {
  /*
   * Makes the TableCell focusable. Used by EditableCell.
   * Will add tabIndex={-1 || this.props.tabIndex}.
   */
  isSelectable: PropTypes.bool,

  /**
   * The appearance of the table row. Default theme only support default.
   */
  appearance: PropTypes.string.isRequired,

  /**
   * Optional node to be placed on the right side of the table cell.
   * Useful for icons and icon buttons.
   */
  rightView: PropTypes.node,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired,

  /**
   * Advanced arrow keys overrides for selectable cells.
   * A string will be used as a selector.
   */
  arrowKeysOverrides: PropTypes.shape({
    up: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.element, PropTypes.oneOf([false])]),
    down: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.element, PropTypes.oneOf([false])]),
    left: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.element, PropTypes.oneOf([false])]),
    right: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.element, PropTypes.oneOf([false])])
  }),

  /**
   * Class name passed to the table cell.
   * Only use if you know what you are doing.
   */
  className: PropTypes.string
}));

_defineProperty(TableCell, "defaultProps", {
  appearance: 'default'
});

_defineProperty(TableCell, "styles", {
  paddingX: 12,
  boxSizing: 'border-box',
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
  overflow: 'hidden'
});

export default withTheme(TableCell);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJjeCIsInRvYXN0ZXIiLCJ3aXRoVGhlbWUiLCJQYW5lIiwic2FmZUludm9rZSIsIlRhYmxlUm93Q29uc3VtZXIiLCJtYW5hZ2VUYWJsZUNlbGxGb2N1c0ludGVyYWN0aW9uIiwiZXhlY3V0ZUFycm93S2V5T3ZlcnJpZGUiLCJvdmVycmlkZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZvY3VzIiwiVGFibGVDZWxsIiwiZSIsInByb3BzIiwiYXJyb3dLZXlzT3ZlcnJpZGVzIiwiaXNTZWxlY3RhYmxlIiwia2V5IiwicHJldmVudERlZmF1bHQiLCJzbGljZSIsImxlbmd0aCIsInRvTG93ZXJDYXNlIiwibWFpblJlZiIsImVycm9yIiwiZGFuZ2VyIiwiY29uc29sZSIsImJsdXIiLCJvbktleURvd24iLCJyZWYiLCJpbm5lclJlZiIsInRoZW1lIiwiY2hpbGRyZW4iLCJhcHBlYXJhbmNlIiwib25DbGljayIsIm9uS2V5UHJlc3MiLCJ0YWJJbmRleCIsImNsYXNzTmFtZSIsInJpZ2h0VmlldyIsInRoZW1lZENsYXNzTmFtZSIsImdldFRhYmxlQ2VsbENsYXNzTmFtZSIsImhlaWdodCIsIm9uUmVmIiwidW5kZWZpbmVkIiwiaGFuZGxlS2V5RG93biIsInN0eWxlcyIsInByb3BUeXBlcyIsImJvb2wiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwibm9kZSIsIm9iamVjdCIsInNoYXBlIiwidXAiLCJvbmVPZlR5cGUiLCJmdW5jIiwiZWxlbWVudCIsIm9uZU9mIiwiZG93biIsImxlZnQiLCJyaWdodCIsInBhZGRpbmdYIiwiYm94U2l6aW5nIiwiZmxleCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiZmxleFNocmluayIsIm92ZXJmbG93Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3RhYmxlL3NyYy9UYWJsZUNlbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IHsgdG9hc3RlciB9IGZyb20gJy4uLy4uL3RvYXN0ZXInXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcbmltcG9ydCB7IFBhbmUgfSBmcm9tICcuLi8uLi9sYXllcnMnXG5pbXBvcnQgc2FmZUludm9rZSBmcm9tICcuLi8uLi9saWIvc2FmZS1pbnZva2UnXG5pbXBvcnQgeyBUYWJsZVJvd0NvbnN1bWVyIH0gZnJvbSAnLi9UYWJsZVJvd0NvbnRleHQnXG5pbXBvcnQgbWFuYWdlVGFibGVDZWxsRm9jdXNJbnRlcmFjdGlvbiBmcm9tICcuL21hbmFnZVRhYmxlQ2VsbEZvY3VzSW50ZXJhY3Rpb24nXG5cbmZ1bmN0aW9uIGV4ZWN1dGVBcnJvd0tleU92ZXJyaWRlKG92ZXJyaWRlKSB7XG4gIGlmICghb3ZlcnJpZGUpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmICh0eXBlb2Ygb3ZlcnJpZGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvdmVycmlkZSgpXG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAodHlwZW9mIG92ZXJyaWRlID09PSAnc3RyaW5nJykge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3ZlcnJpZGUpLmZvY3VzKClcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIFRoaXMgbmVlZHMgdG8gYmUgdGhlIG5vZGUsIG5vdCBhIFJlYWN0IHJlZi5cbiAgb3ZlcnJpZGUuZm9jdXMoKVxufVxuXG5jbGFzcyBUYWJsZUNlbGwgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgUGFuZSBjb21wb25lbnQgYXMgdGhlIGJhc2UuXG4gICAgICovXG4gICAgLi4uUGFuZS5wcm9wVHlwZXMsXG5cbiAgICAvKlxuICAgICAqIE1ha2VzIHRoZSBUYWJsZUNlbGwgZm9jdXNhYmxlLiBVc2VkIGJ5IEVkaXRhYmxlQ2VsbC5cbiAgICAgKiBXaWxsIGFkZCB0YWJJbmRleD17LTEgfHwgdGhpcy5wcm9wcy50YWJJbmRleH0uXG4gICAgICovXG4gICAgaXNTZWxlY3RhYmxlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBhcHBlYXJhbmNlIG9mIHRoZSB0YWJsZSByb3cuIERlZmF1bHQgdGhlbWUgb25seSBzdXBwb3J0IGRlZmF1bHQuXG4gICAgICovXG4gICAgYXBwZWFyYW5jZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogT3B0aW9uYWwgbm9kZSB0byBiZSBwbGFjZWQgb24gdGhlIHJpZ2h0IHNpZGUgb2YgdGhlIHRhYmxlIGNlbGwuXG4gICAgICogVXNlZnVsIGZvciBpY29ucyBhbmQgaWNvbiBidXR0b25zLlxuICAgICAqL1xuICAgIHJpZ2h0VmlldzogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBUaGVtZSBwcm92aWRlZCBieSBUaGVtZVByb3ZpZGVyLlxuICAgICAqL1xuICAgIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBBZHZhbmNlZCBhcnJvdyBrZXlzIG92ZXJyaWRlcyBmb3Igc2VsZWN0YWJsZSBjZWxscy5cbiAgICAgKiBBIHN0cmluZyB3aWxsIGJlIHVzZWQgYXMgYSBzZWxlY3Rvci5cbiAgICAgKi9cbiAgICBhcnJvd0tleXNPdmVycmlkZXM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICB1cDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICAgICAgUHJvcFR5cGVzLm9uZU9mKFtmYWxzZV0pXG4gICAgICBdKSxcbiAgICAgIGRvd246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICAgIFByb3BUeXBlcy5vbmVPZihbZmFsc2VdKVxuICAgICAgXSksXG4gICAgICBsZWZ0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIFByb3BUeXBlcy5lbGVtZW50LFxuICAgICAgICBQcm9wVHlwZXMub25lT2YoW2ZhbHNlXSlcbiAgICAgIF0pLFxuICAgICAgcmlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICAgIFByb3BUeXBlcy5vbmVPZihbZmFsc2VdKVxuICAgICAgXSlcbiAgICB9KSxcblxuICAgIC8qKlxuICAgICAqIENsYXNzIG5hbWUgcGFzc2VkIHRvIHRoZSB0YWJsZSBjZWxsLlxuICAgICAqIE9ubHkgdXNlIGlmIHlvdSBrbm93IHdoYXQgeW91IGFyZSBkb2luZy5cbiAgICAgKi9cbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYXBwZWFyYW5jZTogJ2RlZmF1bHQnXG4gIH1cblxuICBzdGF0aWMgc3R5bGVzID0ge1xuICAgIHBhZGRpbmdYOiAxMixcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBmbGV4OiAxLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBmbGV4U2hyaW5rOiAwLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICB9XG5cbiAgaGFuZGxlS2V5RG93biA9IGUgPT4ge1xuICAgIGNvbnN0IHsgYXJyb3dLZXlzT3ZlcnJpZGVzID0ge30gfSA9IHRoaXMucHJvcHNcblxuICAgIGlmICh0aGlzLnByb3BzLmlzU2VsZWN0YWJsZSkge1xuICAgICAgY29uc3QgeyBrZXkgfSA9IGVcbiAgICAgIGlmIChcbiAgICAgICAga2V5ID09PSAnQXJyb3dVcCcgfHxcbiAgICAgICAga2V5ID09PSAnQXJyb3dEb3duJyB8fFxuICAgICAgICBrZXkgPT09ICdBcnJvd0xlZnQnIHx8XG4gICAgICAgIGtleSA9PT0gJ0Fycm93UmlnaHQnXG4gICAgICApIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gU3VwcG9ydCBhcnJvdyBrZXkgb3ZlcnJpZGVzLlxuICAgICAgICAgIGNvbnN0IG92ZXJyaWRlID1cbiAgICAgICAgICAgIGFycm93S2V5c092ZXJyaWRlc1trZXkuc2xpY2UoJ0Fycm93Jy5sZW5ndGgpLnRvTG93ZXJDYXNlKCldXG4gICAgICAgICAgaWYgKG92ZXJyaWRlID09PSBmYWxzZSkgcmV0dXJuXG4gICAgICAgICAgaWYgKG92ZXJyaWRlKSByZXR1cm4gZXhlY3V0ZUFycm93S2V5T3ZlcnJpZGUob3ZlcnJpZGUpXG5cbiAgICAgICAgICBtYW5hZ2VUYWJsZUNlbGxGb2N1c0ludGVyYWN0aW9uKGtleSwgdGhpcy5tYWluUmVmKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIHRvYXN0ZXIuZGFuZ2VyKCdLZXlib2FyZCBpbnRlcmFjdGlvbiBub3QgcG9zc2libGUnKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0tleWJvYXJkIGludGVyYWN0aW9uIG5vdCBwb3NzaWJsZScsIGVycm9yKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgdGhpcy5tYWluUmVmLmJsdXIoKVxuICAgICAgfVxuICAgIH1cblxuICAgIHNhZmVJbnZva2UodGhpcy5wcm9wcy5vbktleURvd24sIGUpXG4gIH1cblxuICBvblJlZiA9IHJlZiA9PiB7XG4gICAgdGhpcy5tYWluUmVmID0gcmVmXG4gICAgc2FmZUludm9rZSh0aGlzLnByb3BzLmlubmVyUmVmLCByZWYpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaW5uZXJSZWYsXG4gICAgICB0aGVtZSxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgYXBwZWFyYW5jZSxcbiAgICAgIG9uQ2xpY2ssXG4gICAgICBvbktleVByZXNzLFxuICAgICAgb25LZXlEb3duLFxuICAgICAgaXNTZWxlY3RhYmxlLFxuICAgICAgdGFiSW5kZXggPSAtMSxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHJpZ2h0VmlldyxcbiAgICAgIGFycm93S2V5c092ZXJyaWRlcyxcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IHRoZW1lZENsYXNzTmFtZSA9IHRoZW1lLmdldFRhYmxlQ2VsbENsYXNzTmFtZShhcHBlYXJhbmNlKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUYWJsZVJvd0NvbnN1bWVyPlxuICAgICAgICB7aGVpZ2h0ID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFBhbmVcbiAgICAgICAgICAgICAgaW5uZXJSZWY9e3RoaXMub25SZWZ9XG4gICAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KHRoZW1lZENsYXNzTmFtZSwgY2xhc3NOYW1lKX1cbiAgICAgICAgICAgICAgdGFiSW5kZXg9e2lzU2VsZWN0YWJsZSA/IHRhYkluZGV4IDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICBkYXRhLWlzc2VsZWN0YWJsZT17aXNTZWxlY3RhYmxlfVxuICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICAgICAgICBvbktleURvd249e3RoaXMuaGFuZGxlS2V5RG93bn1cbiAgICAgICAgICAgICAgey4uLlRhYmxlQ2VsbC5zdHlsZXN9XG4gICAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICB7cmlnaHRWaWV3ID8gcmlnaHRWaWV3IDogbnVsbH1cbiAgICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgICApXG4gICAgICAgIH19XG4gICAgICA8L1RhYmxlUm93Q29uc3VtZXI+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShUYWJsZUNlbGwpXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxhQUFoQixRQUFxQyxPQUFyQztBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxFQUFQLE1BQWUsWUFBZjtBQUNBLFNBQVNDLE9BQVQsUUFBd0IsZUFBeEI7QUFDQSxTQUFTQyxTQUFULFFBQTBCLGFBQTFCO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQixjQUFyQjtBQUNBLE9BQU9DLFVBQVAsTUFBdUIsdUJBQXZCO0FBQ0EsU0FBU0MsZ0JBQVQsUUFBaUMsbUJBQWpDO0FBQ0EsT0FBT0MsK0JBQVAsTUFBNEMsbUNBQTVDOztBQUVBLFNBQVNDLHVCQUFULENBQWlDQyxRQUFqQyxFQUEyQztFQUN6QyxJQUFJLENBQUNBLFFBQUwsRUFBZTtJQUNiO0VBQ0Q7O0VBRUQsSUFBSSxPQUFPQSxRQUFQLEtBQW9CLFVBQXhCLEVBQW9DO0lBQ2xDQSxRQUFRO0lBQ1I7RUFDRDs7RUFFRCxJQUFJLE9BQU9BLFFBQVAsS0FBb0IsUUFBeEIsRUFBa0M7SUFDaENDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QkYsUUFBdkIsRUFBaUNHLEtBQWpDO0lBQ0E7RUFDRCxDQWJ3QyxDQWV6Qzs7O0VBQ0FILFFBQVEsQ0FBQ0csS0FBVDtBQUNEOztJQUVLQyxTOzs7Ozs7Ozs7Ozs7Ozs7O29FQWlGWSxVQUFBQyxDQUFDLEVBQUk7TUFDbkIsNEJBQW9DLE1BQUtDLEtBQXpDLENBQVFDLGtCQUFSO01BQUEsSUFBUUEsa0JBQVIsc0NBQTZCLEVBQTdCOztNQUVBLElBQUksTUFBS0QsS0FBTCxDQUFXRSxZQUFmLEVBQTZCO1FBQzNCLElBQVFDLEdBQVIsR0FBZ0JKLENBQWhCLENBQVFJLEdBQVI7O1FBQ0EsSUFDRUEsR0FBRyxLQUFLLFNBQVIsSUFDQUEsR0FBRyxLQUFLLFdBRFIsSUFFQUEsR0FBRyxLQUFLLFdBRlIsSUFHQUEsR0FBRyxLQUFLLFlBSlYsRUFLRTtVQUNBSixDQUFDLENBQUNLLGNBQUY7O1VBQ0EsSUFBSTtZQUNGO1lBQ0EsSUFBTVYsUUFBUSxHQUNaTyxrQkFBa0IsQ0FBQ0UsR0FBRyxDQUFDRSxLQUFKLENBQVUsUUFBUUMsTUFBbEIsRUFBMEJDLFdBQTFCLEVBQUQsQ0FEcEI7WUFFQSxJQUFJYixRQUFRLEtBQUssS0FBakIsRUFBd0I7WUFDeEIsSUFBSUEsUUFBSixFQUFjLE9BQU9ELHVCQUF1QixDQUFDQyxRQUFELENBQTlCO1lBRWRGLCtCQUErQixDQUFDVyxHQUFELEVBQU0sTUFBS0ssT0FBWCxDQUEvQjtVQUNELENBUkQsQ0FRRSxPQUFPQyxLQUFQLEVBQWM7WUFDZHRCLE9BQU8sQ0FBQ3VCLE1BQVIsQ0FBZSxtQ0FBZjtZQUNBQyxPQUFPLENBQUNGLEtBQVIsQ0FBYyxtQ0FBZCxFQUFtREEsS0FBbkQ7VUFDRDtRQUNGLENBbkJELE1BbUJPLElBQUlOLEdBQUcsS0FBSyxRQUFaLEVBQXNCO1VBQzNCLE1BQUtLLE9BQUwsQ0FBYUksSUFBYjtRQUNEO01BQ0Y7O01BRUR0QixVQUFVLENBQUMsTUFBS1UsS0FBTCxDQUFXYSxTQUFaLEVBQXVCZCxDQUF2QixDQUFWO0lBQ0QsQzs7NERBRU8sVUFBQWUsR0FBRyxFQUFJO01BQ2IsTUFBS04sT0FBTCxHQUFlTSxHQUFmO01BQ0F4QixVQUFVLENBQUMsTUFBS1UsS0FBTCxDQUFXZSxRQUFaLEVBQXNCRCxHQUF0QixDQUFWO0lBQ0QsQzs7Ozs7OztXQUVELGtCQUFTO01BQUE7O01BQ1Asa0JBY0ksS0FBS2QsS0FkVDtNQUFBLElBQ0VlLFFBREYsZUFDRUEsUUFERjtNQUFBLElBRUVDLEtBRkYsZUFFRUEsS0FGRjtNQUFBLElBR0VDLFFBSEYsZUFHRUEsUUFIRjtNQUFBLElBSUVDLFVBSkYsZUFJRUEsVUFKRjtNQUFBLElBS0VDLE9BTEYsZUFLRUEsT0FMRjtNQUFBLElBTUVDLFVBTkYsZUFNRUEsVUFORjtNQUFBLElBT0VQLFNBUEYsZUFPRUEsU0FQRjtNQUFBLElBUUVYLFlBUkYsZUFRRUEsWUFSRjtNQUFBLHVDQVNFbUIsUUFURjtNQUFBLElBU0VBLFFBVEYscUNBU2EsQ0FBQyxDQVRkO01BQUEsSUFVRUMsU0FWRixlQVVFQSxTQVZGO01BQUEsSUFXRUMsU0FYRixlQVdFQSxTQVhGO01BQUEsSUFZRXRCLGtCQVpGLGVBWUVBLGtCQVpGO01BQUEsSUFhS0QsS0FiTDs7TUFnQkEsSUFBTXdCLGVBQWUsR0FBR1IsS0FBSyxDQUFDUyxxQkFBTixDQUE0QlAsVUFBNUIsQ0FBeEI7TUFFQSxvQkFDRSxvQkFBQyxnQkFBRCxRQUNHLFVBQUFRLE1BQU0sRUFBSTtRQUNULG9CQUNFLG9CQUFDLElBQUQ7VUFDRSxRQUFRLEVBQUUsTUFBSSxDQUFDQyxLQURqQjtVQUVFLE1BQU0sRUFBRUQsTUFGVjtVQUdFLFNBQVMsRUFBRXhDLEVBQUUsQ0FBQ3NDLGVBQUQsRUFBa0JGLFNBQWxCLENBSGY7VUFJRSxRQUFRLEVBQUVwQixZQUFZLEdBQUdtQixRQUFILEdBQWNPLFNBSnRDO1VBS0UscUJBQW1CMUIsWUFMckI7VUFNRSxPQUFPLEVBQUVpQixPQU5YO1VBT0UsU0FBUyxFQUFFLE1BQUksQ0FBQ1U7UUFQbEIsR0FRTS9CLFNBQVMsQ0FBQ2dDLE1BUmhCLEVBU005QixLQVROLEdBV0dpQixRQVhILEVBWUdNLFNBQVMsR0FBR0EsU0FBSCxHQUFlLElBWjNCLENBREY7TUFnQkQsQ0FsQkgsQ0FERjtJQXNCRDs7OztFQS9KcUJ2QyxhOztBQUFsQmMsUzs7Z0JBQUFBLFMsK0NBS0NULElBQUksQ0FBQzBDLFM7RUFFUjtBQUNKO0FBQ0E7QUFDQTtFQUNJN0IsWUFBWSxFQUFFakIsU0FBUyxDQUFDK0MsSTs7RUFFeEI7QUFDSjtBQUNBO0VBQ0lkLFVBQVUsRUFBRWpDLFNBQVMsQ0FBQ2dELE1BQVYsQ0FBaUJDLFU7O0VBRTdCO0FBQ0o7QUFDQTtBQUNBO0VBQ0lYLFNBQVMsRUFBRXRDLFNBQVMsQ0FBQ2tELEk7O0VBRXJCO0FBQ0o7QUFDQTtFQUNJbkIsS0FBSyxFQUFFL0IsU0FBUyxDQUFDbUQsTUFBVixDQUFpQkYsVTs7RUFFeEI7QUFDSjtBQUNBO0FBQ0E7RUFDSWpDLGtCQUFrQixFQUFFaEIsU0FBUyxDQUFDb0QsS0FBVixDQUFnQjtJQUNsQ0MsRUFBRSxFQUFFckQsU0FBUyxDQUFDc0QsU0FBVixDQUFvQixDQUN0QnRELFNBQVMsQ0FBQ2dELE1BRFksRUFFdEJoRCxTQUFTLENBQUN1RCxJQUZZLEVBR3RCdkQsU0FBUyxDQUFDd0QsT0FIWSxFQUl0QnhELFNBQVMsQ0FBQ3lELEtBQVYsQ0FBZ0IsQ0FBQyxLQUFELENBQWhCLENBSnNCLENBQXBCLENBRDhCO0lBT2xDQyxJQUFJLEVBQUUxRCxTQUFTLENBQUNzRCxTQUFWLENBQW9CLENBQ3hCdEQsU0FBUyxDQUFDZ0QsTUFEYyxFQUV4QmhELFNBQVMsQ0FBQ3VELElBRmMsRUFHeEJ2RCxTQUFTLENBQUN3RCxPQUhjLEVBSXhCeEQsU0FBUyxDQUFDeUQsS0FBVixDQUFnQixDQUFDLEtBQUQsQ0FBaEIsQ0FKd0IsQ0FBcEIsQ0FQNEI7SUFhbENFLElBQUksRUFBRTNELFNBQVMsQ0FBQ3NELFNBQVYsQ0FBb0IsQ0FDeEJ0RCxTQUFTLENBQUNnRCxNQURjLEVBRXhCaEQsU0FBUyxDQUFDdUQsSUFGYyxFQUd4QnZELFNBQVMsQ0FBQ3dELE9BSGMsRUFJeEJ4RCxTQUFTLENBQUN5RCxLQUFWLENBQWdCLENBQUMsS0FBRCxDQUFoQixDQUp3QixDQUFwQixDQWI0QjtJQW1CbENHLEtBQUssRUFBRTVELFNBQVMsQ0FBQ3NELFNBQVYsQ0FBb0IsQ0FDekJ0RCxTQUFTLENBQUNnRCxNQURlLEVBRXpCaEQsU0FBUyxDQUFDdUQsSUFGZSxFQUd6QnZELFNBQVMsQ0FBQ3dELE9BSGUsRUFJekJ4RCxTQUFTLENBQUN5RCxLQUFWLENBQWdCLENBQUMsS0FBRCxDQUFoQixDQUp5QixDQUFwQjtFQW5CMkIsQ0FBaEIsQzs7RUEyQnBCO0FBQ0o7QUFDQTtBQUNBO0VBQ0lwQixTQUFTLEVBQUVyQyxTQUFTLENBQUNnRDs7O2dCQWhFbkJuQyxTLGtCQW1Fa0I7RUFDcEJvQixVQUFVLEVBQUU7QUFEUSxDOztnQkFuRWxCcEIsUyxZQXVFWTtFQUNkZ0QsUUFBUSxFQUFFLEVBREk7RUFFZEMsU0FBUyxFQUFFLFlBRkc7RUFHZEMsSUFBSSxFQUFFLENBSFE7RUFJZEMsT0FBTyxFQUFFLE1BSks7RUFLZEMsVUFBVSxFQUFFLFFBTEU7RUFNZEMsVUFBVSxFQUFFLENBTkU7RUFPZEMsUUFBUSxFQUFFO0FBUEksQzs7QUEyRmxCLGVBQWVoRSxTQUFTLENBQUNVLFNBQUQsQ0FBeEIifQ==