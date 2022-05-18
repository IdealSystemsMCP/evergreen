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

var _layers = require("../../layers");

var _theme = require("../../theme");

var _safeInvoke = _interopRequireDefault(require("../../lib/safe-invoke"));

var _TableRowContext = require("./TableRowContext");

var _manageTableRowFocusInteraction = _interopRequireDefault(require("./manageTableRowFocusInteraction"));

var _excluded = ["innerRef", "theme", "className", "height", "children", "intent", "appearance", "tabIndex", "onClick", "onKeyPress", "onSelect", "onDeselect", "isHighlighted", "isSelectable", "isSelected"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var TableRow = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(TableRow, _PureComponent);

  var _super = _createSuper(TableRow);

  function TableRow() {
    var _this;

    (0, _classCallCheck2["default"])(this, TableRow);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClick", function (e) {
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
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleKeyDown", function (e) {
      if (_this.props.isSelectable) {
        var key = e.key;

        if (key === 'Enter' || key === ' ') {
          _this.props.onSelect();

          e.preventDefault();
        } else if (key === 'ArrowUp' || key === 'ArrowDown') {
          try {
            (0, _manageTableRowFocusInteraction["default"])(key, _this.mainRef);
          } catch (_) {}
        } else if (key === 'Escape') {
          if (_this.mainRef) _this.mainRef.blur();
        }
      }

      _this.props.onKeyPress(e);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onRef", function (ref) {
      _this.mainRef = ref;
      (0, _safeInvoke["default"])(_this.props.innerRef, ref);
    });
    return _this;
  }

  (0, _createClass2["default"])(TableRow, [{
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
          props = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      var themedClassName = theme.getRowClassName(appearance, intent);
      return /*#__PURE__*/_react["default"].createElement(_TableRowContext.TableRowProvider, {
        height: height
      }, /*#__PURE__*/_react["default"].createElement(_layers.Pane, (0, _extends2["default"])({
        innerRef: this.onRef,
        className: (0, _classnames["default"])(themedClassName, className),
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
}(_react.PureComponent);

TableRow.displayName = "TableRow";
(0, _defineProperty2["default"])(TableRow, "propTypes", _objectSpread(_objectSpread({}, _layers.Pane.propTypes), {}, {
  /**
   * The height of the row. Remember to add paddings when using "auto".
   */
  height: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]).isRequired,

  /**
   * Function that is called on click and enter/space keypress.
   */
  onSelect: _propTypes["default"].func,

  /**
   * Function that is called on click and enter/space keypress.
   */
  onDeselect: _propTypes["default"].func,

  /**
   * Makes the TableRow selectable.
   */
  isSelectable: _propTypes["default"].bool,

  /**
   * Makes the TableRow selected.
   */
  isSelected: _propTypes["default"].bool,

  /**
   * Manually set the TableRow to be highlighted.
   */
  isHighlighted: _propTypes["default"].bool,

  /**
   * The intent of the alert.
   */
  intent: _propTypes["default"].oneOf(['none', 'success', 'warning', 'danger']).isRequired,

  /**
   * The appearance of the table row. Default theme only support default.
   */
  appearance: _propTypes["default"].string.isRequired,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: _propTypes["default"].object.isRequired,

  /**
   * Class name passed to the table row.
   * Only use if you know what you are doing.
   */
  className: _propTypes["default"].string
}));
(0, _defineProperty2["default"])(TableRow, "defaultProps", {
  intent: 'none',
  appearance: 'default',
  height: 48,
  onSelect: function onSelect() {},
  onDeselect: function onDeselect() {},
  onKeyPress: function onKeyPress() {}
});

var _default = (0, _theme.withTheme)(TableRow);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJUYWJsZVJvdyIsImUiLCJwcm9wcyIsIm9uQ2xpY2siLCJpc1NlbGVjdGFibGUiLCJpc1NlbGVjdGVkIiwib25EZXNlbGVjdCIsIm9uU2VsZWN0Iiwia2V5IiwicHJldmVudERlZmF1bHQiLCJtYW5hZ2VUYWJsZVJvd0ZvY3VzSW50ZXJhY3Rpb24iLCJtYWluUmVmIiwiXyIsImJsdXIiLCJvbktleVByZXNzIiwicmVmIiwic2FmZUludm9rZSIsImlubmVyUmVmIiwidGhlbWUiLCJjbGFzc05hbWUiLCJoZWlnaHQiLCJjaGlsZHJlbiIsImludGVudCIsImFwcGVhcmFuY2UiLCJ0YWJJbmRleCIsImlzSGlnaGxpZ2h0ZWQiLCJ0aGVtZWRDbGFzc05hbWUiLCJnZXRSb3dDbGFzc05hbWUiLCJvblJlZiIsImN4IiwidW5kZWZpbmVkIiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVLZXlEb3duIiwiUHVyZUNvbXBvbmVudCIsIlBhbmUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJudW1iZXIiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiZnVuYyIsImJvb2wiLCJvbmVPZiIsIm9iamVjdCIsIndpdGhUaGVtZSJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvVGFibGVSb3cuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IHsgUGFuZSB9IGZyb20gJy4uLy4uL2xheWVycydcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuaW1wb3J0IHNhZmVJbnZva2UgZnJvbSAnLi4vLi4vbGliL3NhZmUtaW52b2tlJ1xuaW1wb3J0IHsgVGFibGVSb3dQcm92aWRlciB9IGZyb20gJy4vVGFibGVSb3dDb250ZXh0J1xuaW1wb3J0IG1hbmFnZVRhYmxlUm93Rm9jdXNJbnRlcmFjdGlvbiBmcm9tICcuL21hbmFnZVRhYmxlUm93Rm9jdXNJbnRlcmFjdGlvbidcblxuY2xhc3MgVGFibGVSb3cgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgUGFuZSBjb21wb25lbnQgYXMgdGhlIGJhc2UuXG4gICAgICovXG4gICAgLi4uUGFuZS5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSByb3cuIFJlbWVtYmVyIHRvIGFkZCBwYWRkaW5ncyB3aGVuIHVzaW5nIFwiYXV0b1wiLlxuICAgICAqL1xuICAgIGhlaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pXG4gICAgICAuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIG9uIGNsaWNrIGFuZCBlbnRlci9zcGFjZSBrZXlwcmVzcy5cbiAgICAgKi9cbiAgICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCBvbiBjbGljayBhbmQgZW50ZXIvc3BhY2Uga2V5cHJlc3MuXG4gICAgICovXG4gICAgb25EZXNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBNYWtlcyB0aGUgVGFibGVSb3cgc2VsZWN0YWJsZS5cbiAgICAgKi9cbiAgICBpc1NlbGVjdGFibGU6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogTWFrZXMgdGhlIFRhYmxlUm93IHNlbGVjdGVkLlxuICAgICAqL1xuICAgIGlzU2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogTWFudWFsbHkgc2V0IHRoZSBUYWJsZVJvdyB0byBiZSBoaWdobGlnaHRlZC5cbiAgICAgKi9cbiAgICBpc0hpZ2hsaWdodGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbnRlbnQgb2YgdGhlIGFsZXJ0LlxuICAgICAqL1xuICAgIGludGVudDogUHJvcFR5cGVzLm9uZU9mKFsnbm9uZScsICdzdWNjZXNzJywgJ3dhcm5pbmcnLCAnZGFuZ2VyJ10pXG4gICAgICAuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBhcHBlYXJhbmNlIG9mIHRoZSB0YWJsZSByb3cuIERlZmF1bHQgdGhlbWUgb25seSBzdXBwb3J0IGRlZmF1bHQuXG4gICAgICovXG4gICAgYXBwZWFyYW5jZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlbWUgcHJvdmlkZWQgYnkgVGhlbWVQcm92aWRlci5cbiAgICAgKi9cbiAgICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogQ2xhc3MgbmFtZSBwYXNzZWQgdG8gdGhlIHRhYmxlIHJvdy5cbiAgICAgKiBPbmx5IHVzZSBpZiB5b3Uga25vdyB3aGF0IHlvdSBhcmUgZG9pbmcuXG4gICAgICovXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGludGVudDogJ25vbmUnLFxuICAgIGFwcGVhcmFuY2U6ICdkZWZhdWx0JyxcbiAgICBoZWlnaHQ6IDQ4LFxuICAgIG9uU2VsZWN0OiAoKSA9PiB7fSxcbiAgICBvbkRlc2VsZWN0OiAoKSA9PiB7fSxcbiAgICBvbktleVByZXNzOiAoKSA9PiB7fVxuICB9XG5cbiAgaGFuZGxlQ2xpY2sgPSBlID0+IHtcbiAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKGUpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMuaXNTZWxlY3RhYmxlKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5pc1NlbGVjdGVkKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25EZXNlbGVjdCgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYW5kbGVLZXlEb3duID0gZSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMuaXNTZWxlY3RhYmxlKSB7XG4gICAgICBjb25zdCB7IGtleSB9ID0gZVxuICAgICAgaWYgKGtleSA9PT0gJ0VudGVyJyB8fCBrZXkgPT09ICcgJykge1xuICAgICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KClcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0Fycm93VXAnIHx8IGtleSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBtYW5hZ2VUYWJsZVJvd0ZvY3VzSW50ZXJhY3Rpb24oa2V5LCB0aGlzLm1haW5SZWYpXG4gICAgICAgIH0gY2F0Y2ggKF8pIHt9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgaWYgKHRoaXMubWFpblJlZikgdGhpcy5tYWluUmVmLmJsdXIoKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMucHJvcHMub25LZXlQcmVzcyhlKVxuICB9XG5cbiAgb25SZWYgPSByZWYgPT4ge1xuICAgIHRoaXMubWFpblJlZiA9IHJlZlxuICAgIHNhZmVJbnZva2UodGhpcy5wcm9wcy5pbm5lclJlZiwgcmVmKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGlubmVyUmVmLFxuICAgICAgdGhlbWUsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBoZWlnaHQsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGludGVudCxcbiAgICAgIGFwcGVhcmFuY2UsXG4gICAgICB0YWJJbmRleCA9IC0xLFxuXG4gICAgICAvLyBGaWx0ZXIgb3V0XG4gICAgICBvbkNsaWNrLFxuICAgICAgb25LZXlQcmVzcyxcbiAgICAgIG9uU2VsZWN0LFxuICAgICAgb25EZXNlbGVjdCxcblxuICAgICAgaXNIaWdobGlnaHRlZCxcbiAgICAgIGlzU2VsZWN0YWJsZSxcbiAgICAgIGlzU2VsZWN0ZWQsXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgdGhlbWVkQ2xhc3NOYW1lID0gdGhlbWUuZ2V0Um93Q2xhc3NOYW1lKGFwcGVhcmFuY2UsIGludGVudClcblxuICAgIHJldHVybiAoXG4gICAgICA8VGFibGVSb3dQcm92aWRlciBoZWlnaHQ9e2hlaWdodH0+XG4gICAgICAgIDxQYW5lXG4gICAgICAgICAgaW5uZXJSZWY9e3RoaXMub25SZWZ9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjeCh0aGVtZWRDbGFzc05hbWUsIGNsYXNzTmFtZSl9XG4gICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgIGFyaWEtc2VsZWN0ZWQ9e2lzSGlnaGxpZ2h0ZWR9XG4gICAgICAgICAgYXJpYS1jdXJyZW50PXtpc1NlbGVjdGVkfVxuICAgICAgICAgIGRhdGEtaXNzZWxlY3RhYmxlPXtpc1NlbGVjdGFibGV9XG4gICAgICAgICAgdGFiSW5kZXg9e2lzU2VsZWN0YWJsZSA/IHRhYkluZGV4IDogdW5kZWZpbmVkfVxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG4gICAgICAgICAgb25LZXlEb3duPXt0aGlzLmhhbmRsZUtleURvd259XG4gICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgYm9yZGVyQm90dG9tPVwibXV0ZWRcIlxuICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9QYW5lPlxuICAgICAgPC9UYWJsZVJvd1Byb3ZpZGVyPlxuICAgIClcbiAgfVxu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