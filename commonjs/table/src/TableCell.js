"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

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

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _toaster = require("../../toaster");

var _theme = require("../../theme");

var _layers = require("../../layers");

var _safeInvoke = _interopRequireDefault(require("../../lib/safe-invoke"));

var _TableRowContext = require("./TableRowContext");

var _manageTableCellFocusInteraction = _interopRequireDefault(require("./manageTableCellFocusInteraction"));

var _excluded = ["innerRef", "theme", "children", "appearance", "onClick", "onKeyPress", "onKeyDown", "isSelectable", "tabIndex", "className", "rightView", "arrowKeysOverrides"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

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
  (0, _inherits2["default"])(TableCell, _PureComponent);

  var _super = _createSuper(TableCell);

  function TableCell() {
    var _this;

    (0, _classCallCheck2["default"])(this, TableCell);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleKeyDown", function (e) {
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
            (0, _manageTableCellFocusInteraction["default"])(key, _this.mainRef);
          } catch (error) {
            _toaster.toaster.danger('Keyboard interaction not possible');

            console.error('Keyboard interaction not possible', error);
          }
        } else if (key === 'Escape') {
          _this.mainRef.blur();
        }
      }

      (0, _safeInvoke["default"])(_this.props.onKeyDown, e);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onRef", function (ref) {
      _this.mainRef = ref;
      (0, _safeInvoke["default"])(_this.props.innerRef, ref);
    });
    return _this;
  }

  (0, _createClass2["default"])(TableCell, [{
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
          props = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      var themedClassName = theme.getTableCellClassName(appearance);
      return /*#__PURE__*/_react["default"].createElement(_TableRowContext.TableRowConsumer, null, function (height) {
        return /*#__PURE__*/_react["default"].createElement(_layers.Pane, (0, _extends2["default"])({
          innerRef: _this2.onRef,
          height: height,
          className: (0, _classnames["default"])(themedClassName, className),
          tabIndex: isSelectable ? tabIndex : undefined,
          "data-isselectable": isSelectable,
          onClick: onClick,
          onKeyDown: _this2.handleKeyDown
        }, TableCell.styles, props), children, rightView ? rightView : null);
      });
    }
  }]);
  return TableCell;
}(_react.PureComponent);

TableCell.displayName = "TableCell";
(0, _defineProperty2["default"])(TableCell, "propTypes", _objectSpread(_objectSpread({}, _layers.Pane.propTypes), {}, {
  /*
   * Makes the TableCell focusable. Used by EditableCell.
   * Will add tabIndex={-1 || this.props.tabIndex}.
   */
  isSelectable: _propTypes["default"].bool,

  /**
   * The appearance of the table row. Default theme only support default.
   */
  appearance: _propTypes["default"].string.isRequired,

  /**
   * Optional node to be placed on the right side of the table cell.
   * Useful for icons and icon buttons.
   */
  rightView: _propTypes["default"].node,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: _propTypes["default"].object.isRequired,

  /**
   * Advanced arrow keys overrides for selectable cells.
   * A string will be used as a selector.
   */
  arrowKeysOverrides: _propTypes["default"].shape({
    up: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func, _propTypes["default"].element, _propTypes["default"].oneOf([false])]),
    down: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func, _propTypes["default"].element, _propTypes["default"].oneOf([false])]),
    left: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func, _propTypes["default"].element, _propTypes["default"].oneOf([false])]),
    right: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func, _propTypes["default"].element, _propTypes["default"].oneOf([false])])
  }),

  /**
   * Class name passed to the table cell.
   * Only use if you know what you are doing.
   */
  className: _propTypes["default"].string
}));
(0, _defineProperty2["default"])(TableCell, "defaultProps", {
  appearance: 'default'
});
(0, _defineProperty2["default"])(TableCell, "styles", {
  paddingX: 12,
  boxSizing: 'border-box',
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
  overflow: 'hidden'
});

var _default = (0, _theme.withTheme)(TableCell);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJleGVjdXRlQXJyb3dLZXlPdmVycmlkZSIsIm92ZXJyaWRlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZm9jdXMiLCJUYWJsZUNlbGwiLCJlIiwicHJvcHMiLCJhcnJvd0tleXNPdmVycmlkZXMiLCJpc1NlbGVjdGFibGUiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsInNsaWNlIiwibGVuZ3RoIiwidG9Mb3dlckNhc2UiLCJtYW5hZ2VUYWJsZUNlbGxGb2N1c0ludGVyYWN0aW9uIiwibWFpblJlZiIsImVycm9yIiwidG9hc3RlciIsImRhbmdlciIsImNvbnNvbGUiLCJibHVyIiwic2FmZUludm9rZSIsIm9uS2V5RG93biIsInJlZiIsImlubmVyUmVmIiwidGhlbWUiLCJjaGlsZHJlbiIsImFwcGVhcmFuY2UiLCJvbkNsaWNrIiwib25LZXlQcmVzcyIsInRhYkluZGV4IiwiY2xhc3NOYW1lIiwicmlnaHRWaWV3IiwidGhlbWVkQ2xhc3NOYW1lIiwiZ2V0VGFibGVDZWxsQ2xhc3NOYW1lIiwiaGVpZ2h0Iiwib25SZWYiLCJjeCIsInVuZGVmaW5lZCIsImhhbmRsZUtleURvd24iLCJzdHlsZXMiLCJQdXJlQ29tcG9uZW50IiwiUGFuZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwibm9kZSIsIm9iamVjdCIsInNoYXBlIiwidXAiLCJvbmVPZlR5cGUiLCJmdW5jIiwiZWxlbWVudCIsIm9uZU9mIiwiZG93biIsImxlZnQiLCJyaWdodCIsInBhZGRpbmdYIiwiYm94U2l6aW5nIiwiZmxleCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiZmxleFNocmluayIsIm92ZXJmbG93Iiwid2l0aFRoZW1lIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3RhYmxlL3NyYy9UYWJsZUNlbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IHsgdG9hc3RlciB9IGZyb20gJy4uLy4uL3RvYXN0ZXInXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcbmltcG9ydCB7IFBhbmUgfSBmcm9tICcuLi8uLi9sYXllcnMnXG5pbXBvcnQgc2FmZUludm9rZSBmcm9tICcuLi8uLi9saWIvc2FmZS1pbnZva2UnXG5pbXBvcnQgeyBUYWJsZVJvd0NvbnN1bWVyIH0gZnJvbSAnLi9UYWJsZVJvd0NvbnRleHQnXG5pbXBvcnQgbWFuYWdlVGFibGVDZWxsRm9jdXNJbnRlcmFjdGlvbiBmcm9tICcuL21hbmFnZVRhYmxlQ2VsbEZvY3VzSW50ZXJhY3Rpb24nXG5cbmZ1bmN0aW9uIGV4ZWN1dGVBcnJvd0tleU92ZXJyaWRlKG92ZXJyaWRlKSB7XG4gIGlmICghb3ZlcnJpZGUpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmICh0eXBlb2Ygb3ZlcnJpZGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvdmVycmlkZSgpXG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAodHlwZW9mIG92ZXJyaWRlID09PSAnc3RyaW5nJykge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3ZlcnJpZGUpLmZvY3VzKClcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIFRoaXMgbmVlZHMgdG8gYmUgdGhlIG5vZGUsIG5vdCBhIFJlYWN0IHJlZi5cbiAgb3ZlcnJpZGUuZm9jdXMoKVxufVxuXG5jbGFzcyBUYWJsZUNlbGwgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgUGFuZSBjb21wb25lbnQgYXMgdGhlIGJhc2UuXG4gICAgICovXG4gICAgLi4uUGFuZS5wcm9wVHlwZXMsXG5cbiAgICAvKlxuICAgICAqIE1ha2VzIHRoZSBUYWJsZUNlbGwgZm9jdXNhYmxlLiBVc2VkIGJ5IEVkaXRhYmxlQ2VsbC5cbiAgICAgKiBXaWxsIGFkZCB0YWJJbmRleD17LTEgfHwgdGhpcy5wcm9wcy50YWJJbmRleH0uXG4gICAgICovXG4gICAgaXNTZWxlY3RhYmxlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBhcHBlYXJhbmNlIG9mIHRoZSB0YWJsZSByb3cuIERlZmF1bHQgdGhlbWUgb25seSBzdXBwb3J0IGRlZmF1bHQuXG4gICAgICovXG4gICAgYXBwZWFyYW5jZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogT3B0aW9uYWwgbm9kZSB0byBiZSBwbGFjZWQgb24gdGhlIHJpZ2h0IHNpZGUgb2YgdGhlIHRhYmxlIGNlbGwuXG4gICAgICogVXNlZnVsIGZvciBpY29ucyBhbmQgaWNvbiBidXR0b25zLlxuICAgICAqL1xuICAgIHJpZ2h0VmlldzogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBUaGVtZSBwcm92aWRlZCBieSBUaGVtZVByb3ZpZGVyLlxuICAgICAqL1xuICAgIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBBZHZhbmNlZCBhcnJvdyBrZXlzIG92ZXJyaWRlcyBmb3Igc2VsZWN0YWJsZSBjZWxscy5cbiAgICAgKiBBIHN0cmluZyB3aWxsIGJlIHVzZWQgYXMgYSBzZWxlY3Rvci5cbiAgICAgKi9cbiAgICBhcnJvd0tleXNPdmVycmlkZXM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICB1cDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICAgICAgUHJvcFR5cGVzLm9uZU9mKFtmYWxzZV0pXG4gICAgICBdKSxcbiAgICAgIGRvd246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICAgIFByb3BUeXBlcy5vbmVPZihbZmFsc2VdKVxuICAgICAgXSksXG4gICAgICBsZWZ0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIFByb3BUeXBlcy5lbGVtZW50LFxuICAgICAgICBQcm9wVHlwZXMub25lT2YoW2ZhbHNlXSlcbiAgICAgIF0pLFxuICAgICAgcmlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICAgIFByb3BUeXBlcy5vbmVPZihbZmFsc2VdKVxuICAgICAgXSlcbiAgICB9KSxcblxuICAgIC8qKlxuICAgICAqIENsYXNzIG5hbWUgcGFzc2VkIHRvIHRoZSB0YWJsZSBjZWxsLlxuICAgICAqIE9ubHkgdXNlIGlmIHlvdSBrbm93IHdoYXQgeW91IGFyZSBkb2luZy5cbiAgICAgKi9cbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYXBwZWFyYW5jZTogJ2RlZmF1bHQnXG4gIH1cblxuICBzdGF0aWMgc3R5bGVzID0ge1xuICAgIHBhZGRpbmdYOiAxMixcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBmbGV4OiAxLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBmbGV4U2hyaW5rOiAwLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICB9XG5cbiAgaGFuZGxlS2V5RG93biA9IGUgPT4ge1xuICAgIGNvbnN0IHsgYXJyb3dLZXlzT3ZlcnJpZGVzID0ge30gfSA9IHRoaXMucHJvcHNcblxuICAgIGlmICh0aGlzLnByb3BzLmlzU2VsZWN0YWJsZSkge1xuICAgICAgY29uc3QgeyBrZXkgfSA9IGVcbiAgICAgIGlmIChcbiAgICAgICAga2V5ID09PSAnQXJyb3dVcCcgfHxcbiAgICAgICAga2V5ID09PSAnQXJyb3dEb3duJyB8fFxuICAgICAgICBrZXkgPT09ICdBcnJvd0xlZnQnIHx8XG4gICAgICAgIGtleSA9PT0gJ0Fycm93UmlnaHQnXG4gICAgICApIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gU3VwcG9ydCBhcnJvdyBrZXkgb3ZlcnJpZGVzLlxuICAgICAgICAgIGNvbnN0IG92ZXJyaWRlID1cbiAgICAgICAgICAgIGFycm93S2V5c092ZXJyaWRlc1trZXkuc2xpY2UoJ0Fycm93Jy5sZW5ndGgpLnRvTG93ZXJDYXNlKCldXG4gICAgICAgICAgaWYgKG92ZXJyaWRlID09PSBmYWxzZSkgcmV0dXJuXG4gICAgICAgICAgaWYgKG92ZXJyaWRlKSByZXR1cm4gZXhlY3V0ZUFycm93S2V5T3ZlcnJpZGUob3ZlcnJpZGUpXG5cbiAgICAgICAgICBtYW5hZ2VUYWJsZUNlbGxGb2N1c0ludGVyYWN0aW9uKGtleSwgdGhpcy5tYWluUmVmKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIHRvYXN0ZXIuZGFuZ2VyKCdLZXlib2FyZCBpbnRlcmFjdGlvbiBub3QgcG9zc2libGUnKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0tleWJvYXJkIGludGVyYWN0aW9uIG5vdCBwb3NzaWJsZScsIGVycm9yKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgdGhpcy5tYWluUmVmLmJsdXIoKVxuICAgICAgfVxuICAgIH1cblxuICAgIHNhZmVJbnZva2UodGhpcy5wcm9wcy5vbktleURvd24sIGUpXG4gIH1cblxuICBvblJlZiA9IHJlZiA9PiB7XG4gICAgdGhpcy5tYWluUmVmID0gcmVmXG4gICAgc2FmZUludm9rZSh0aGlzLnByb3BzLmlubmVyUmVmLCByZWYpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaW5uZXJSZWYsXG4gICAgICB0aGVtZSxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgYXBwZWFyYW5jZSxcbiAgICAgIG9uQ2xpY2ssXG4gICAgICBvbktleVByZXNzLFxuICAgICAgb25LZXlEb3duLFxuICAgICAgaXNTZWxlY3RhYmxlLFxuICAgICAgdGFiSW5kZXggPSAtMSxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHJpZ2h0VmlldyxcbiAgICAgIGFycm93S2V5c092ZXJyaWRlcyxcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IHRoZW1lZENsYXNzTmFtZSA9IHRoZW1lLmdldFRhYmxlQ2VsbENsYXNzTmFtZShhcHBlYXJhbmNlKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUYWJsZVJvd0NvbnN1bWVyPlxuICAgICAgICB7aGVpZ2h0ID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFBhbmVcbiAgICAgICAgICAgICAgaW5uZXJSZWY9e3RoaXMub25SZWZ9XG4gICAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2N4KHRoZW1lZENsYXNzTmFtZSwgY2xhc3NOYW1lKX1cbiAgICAgICAgICAgICAgdGFiSW5kZXg9e2lzU2VsZWN0YWJsZSA/IHRhYkluZGV4IDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICBkYXRhLWlzc2VsZWN0YWJsZT17aXNTZWxlY3RhYmxlfVxuICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICAgICAgICBvbktleURvd249e3RoaXMuaGFuZGxlS2V5RG93bn1cbiAgICAgICAgICAgICAgey4uLlRhYmxlQ2VsbC5zdHlsZXN9XG4gICAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICB7cmlnaHRWaWV3ID8gcmlnaHRWaWV3IDogbnVsbH1cbiAgICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgICApXG4gICAgICAgIH19XG4gICAgICA8L1RhYmxlUm93Q29uc3VtZXI+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShUYWJsZUNlbGwpXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxTQUFTQSx1QkFBVCxDQUFpQ0MsUUFBakMsRUFBMkM7RUFDekMsSUFBSSxDQUFDQSxRQUFMLEVBQWU7SUFDYjtFQUNEOztFQUVELElBQUksT0FBT0EsUUFBUCxLQUFvQixVQUF4QixFQUFvQztJQUNsQ0EsUUFBUTtJQUNSO0VBQ0Q7O0VBRUQsSUFBSSxPQUFPQSxRQUFQLEtBQW9CLFFBQXhCLEVBQWtDO0lBQ2hDQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUJGLFFBQXZCLEVBQWlDRyxLQUFqQztJQUNBO0VBQ0QsQ0Fid0MsQ0FlekM7OztFQUNBSCxRQUFRLENBQUNHLEtBQVQ7QUFDRDs7SUFFS0MsUzs7Ozs7Ozs7Ozs7Ozs7O3NHQWlGWSxVQUFBQyxDQUFDLEVBQUk7TUFDbkIsNEJBQW9DLE1BQUtDLEtBQXpDLENBQVFDLGtCQUFSO01BQUEsSUFBUUEsa0JBQVIsc0NBQTZCLEVBQTdCOztNQUVBLElBQUksTUFBS0QsS0FBTCxDQUFXRSxZQUFmLEVBQTZCO1FBQzNCLElBQVFDLEdBQVIsR0FBZ0JKLENBQWhCLENBQVFJLEdBQVI7O1FBQ0EsSUFDRUEsR0FBRyxLQUFLLFNBQVIsSUFDQUEsR0FBRyxLQUFLLFdBRFIsSUFFQUEsR0FBRyxLQUFL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