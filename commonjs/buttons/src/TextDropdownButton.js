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

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uiBox = require("ui-box");

var _typography = require("../../typography");

var _icon = require("../../icon");

var _spinner = require("../../spinner");

var _theme = require("../../theme");

var _excluded = ["theme", "className", "intent", "height", "isActive", "children", "disabled", "appearance", "isLoading", "paddingRight", "paddingLeft", "paddingTop", "paddingBottom", "icon"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var TextDropdownButton = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(TextDropdownButton, _PureComponent);

  var _super = _createSuper(TextDropdownButton);

  function TextDropdownButton() {
    (0, _classCallCheck2["default"])(this, TextDropdownButton);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(TextDropdownButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          className = _this$props.className,
          intent = _this$props.intent,
          height = _this$props.height,
          isActive = _this$props.isActive,
          children = _this$props.children,
          disabled = _this$props.disabled,
          appearance = _this$props.appearance,
          isLoading = _this$props.isLoading,
          paddingRight = _this$props.paddingRight,
          paddingLeft = _this$props.paddingLeft,
          paddingTop = _this$props.paddingTop,
          paddingBottom = _this$props.paddingBottom,
          icon = _this$props.icon,
          props = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      var themedClassName = theme.getTextDropdownButtonClassName();
      return /*#__PURE__*/_react["default"].createElement(_typography.Text, (0, _extends2["default"])({
        is: "button",
        className: themedClassName,
        paddingX: 4,
        marginX: -4,
        paddingY: 2,
        marginY: -2,
        size: 300,
        "data-active": isActive
      }, TextDropdownButton.styles, props, {
        disabled: disabled
      }), isLoading && /*#__PURE__*/_react["default"].createElement(_spinner.Spinner, {
        marginLeft: -Math.round(height / 8),
        marginRight: Math.round(height / 4),
        size: Math.round(height / 2)
      }), children, /*#__PURE__*/_react["default"].createElement(_icon.Icon, {
        color: "default",
        icon: icon,
        size: 12,
        marginLeft: 2
      }));
    }
  }]);
  return TextDropdownButton;
}(_react.PureComponent);

TextDropdownButton.displayName = "TextDropdownButton";
(0, _defineProperty2["default"])(TextDropdownButton, "propTypes", _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _uiBox.dimensions.propTypes), _uiBox.spacing.propTypes), _uiBox.position.propTypes), _uiBox.layout.propTypes), {}, {
  /**
   * Forcefully set the active state of a button.
   * Useful in conjuction with a Popover.
   */
  isActive: _propTypes["default"].bool,

  /**
   * When true, the button is disabled.
   * isLoading also sets the button to disabled.
   */
  disabled: _propTypes["default"].bool,

  /**
   * Name of a Blueprint UI icon, or an icon element, to render.
   * This prop is required because it determines the content of the component, but it can
   * be explicitly set to falsy values to render nothing.
   *
   * - If `null` or `undefined` or `false`, this component will render nothing.
   * - If given an `IconName` (a string literal union of all icon names),
   *   that icon will be rendered as an `<svg>` with `<path>` tags.
   * - If given a `JSX.Element`, that element will be rendered and _all other props on this component are ignored._
   *   This type is supported to simplify usage of this component in other Blueprint components.
   *   As a consumer, you should never use `<Icon icon={<element />}` directly; simply render `<element />` instead.
   */
  icon: _propTypes["default"].string.isRequired,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: _propTypes["default"].object.isRequired,

  /**
   * Class name passed to the button.
   * Only use if you know what you are doing.
   */
  className: _propTypes["default"].string
}));
(0, _defineProperty2["default"])(TextDropdownButton, "defaultProps", {
  isActive: false,
  icon: 'caret-down'
});
(0, _defineProperty2["default"])(TextDropdownButton, "styles", {
  position: 'relative',
  fontFamily: 'ui',
  fontWeight: 500,
  display: 'inline-flex',
  alignItems: 'center',
  flexWrap: 'nowrap'
});

var _default = (0, _theme.withTheme)(TextDropdownButton);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJUZXh0RHJvcGRvd25CdXR0b24iLCJwcm9wcyIsInRoZW1lIiwiY2xhc3NOYW1lIiwiaW50ZW50IiwiaGVpZ2h0IiwiaXNBY3RpdmUiLCJjaGlsZHJlbiIsImRpc2FibGVkIiwiYXBwZWFyYW5jZSIsImlzTG9hZGluZyIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJpY29uIiwidGhlbWVkQ2xhc3NOYW1lIiwiZ2V0VGV4dERyb3Bkb3duQnV0dG9uQ2xhc3NOYW1lIiwic3R5bGVzIiwiTWF0aCIsInJvdW5kIiwiUHVyZUNvbXBvbmVudCIsImRpbWVuc2lvbnMiLCJwcm9wVHlwZXMiLCJzcGFjaW5nIiwicG9zaXRpb24iLCJsYXlvdXQiLCJQcm9wVHlwZXMiLCJib29sIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm9iamVjdCIsImZvbnRGYW1pbHkiLCJmb250V2VpZ2h0IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJmbGV4V3JhcCIsIndpdGhUaGVtZSJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9idXR0b25zL3NyYy9UZXh0RHJvcGRvd25CdXR0b24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IGRpbWVuc2lvbnMsIHNwYWNpbmcsIHBvc2l0aW9uLCBsYXlvdXQgfSBmcm9tICd1aS1ib3gnXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vLi4vdHlwb2dyYXBoeSdcbmltcG9ydCB7IEljb24gfSBmcm9tICcuLi8uLi9pY29uJ1xuaW1wb3J0IHsgU3Bpbm5lciB9IGZyb20gJy4uLy4uL3NwaW5uZXInXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcblxuY2xhc3MgVGV4dERyb3Bkb3duQnV0dG9uIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIGRpbWVuc2lvbnMgc3BlYyBmcm9tIHRoZSBCb3ggcHJpbWl0aXZlLlxuICAgICAqL1xuICAgIC4uLmRpbWVuc2lvbnMucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIHNwYWNpbmcgc3BlYyBmcm9tIHRoZSBCb3ggcHJpbWl0aXZlLlxuICAgICAqL1xuICAgIC4uLnNwYWNpbmcucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIHBvc2l0aW9uIHNwZWMgZnJvbSB0aGUgQm94IHByaW1pdGl2ZS5cbiAgICAgKi9cbiAgICAuLi5wb3NpdGlvbi5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgbGF5b3V0IHNwZWMgZnJvbSB0aGUgQm94IHByaW1pdGl2ZS5cbiAgICAgKi9cbiAgICAuLi5sYXlvdXQucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogRm9yY2VmdWxseSBzZXQgdGhlIGFjdGl2ZSBzdGF0ZSBvZiBhIGJ1dHRvbi5cbiAgICAgKiBVc2VmdWwgaW4gY29uanVjdGlvbiB3aXRoIGEgUG9wb3Zlci5cbiAgICAgKi9cbiAgICBpc0FjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSBidXR0b24gaXMgZGlzYWJsZWQuXG4gICAgICogaXNMb2FkaW5nIGFsc28gc2V0cyB0aGUgYnV0dG9uIHRvIGRpc2FibGVkLlxuICAgICAqL1xuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIE5hbWUgb2YgYSBCbHVlcHJpbnQgVUkgaWNvbiwgb3IgYW4gaWNvbiBlbGVtZW50LCB0byByZW5kZXIuXG4gICAgICogVGhpcyBwcm9wIGlzIHJlcXVpcmVkIGJlY2F1c2UgaXQgZGV0ZXJtaW5lcyB0aGUgY29udGVudCBvZiB0aGUgY29tcG9uZW50LCBidXQgaXQgY2FuXG4gICAgICogYmUgZXhwbGljaXRseSBzZXQgdG8gZmFsc3kgdmFsdWVzIHRvIHJlbmRlciBub3RoaW5nLlxuICAgICAqXG4gICAgICogLSBJZiBgbnVsbGAgb3IgYHVuZGVmaW5lZGAgb3IgYGZhbHNlYCwgdGhpcyBjb21wb25lbnQgd2lsbCByZW5kZXIgbm90aGluZy5cbiAgICAgKiAtIElmIGdpdmVuIGFuIGBJY29uTmFtZWAgKGEgc3RyaW5nIGxpdGVyYWwgdW5pb24gb2YgYWxsIGljb24gbmFtZXMpLFxuICAgICAqICAgdGhhdCBpY29uIHdpbGwgYmUgcmVuZGVyZWQgYXMgYW4gYDxzdmc+YCB3aXRoIGA8cGF0aD5gIHRhZ3MuXG4gICAgICogLSBJZiBnaXZlbiBhIGBKU1guRWxlbWVudGAsIHRoYXQgZWxlbWVudCB3aWxsIGJlIHJlbmRlcmVkIGFuZCBfYWxsIG90aGVyIHByb3BzIG9uIHRoaXMgY29tcG9uZW50IGFyZSBpZ25vcmVkLl9cbiAgICAgKiAgIFRoaXMgdHlwZSBpcyBzdXBwb3J0ZWQgdG8gc2ltcGxpZnkgdXNhZ2Ugb2YgdGhpcyBjb21wb25lbnQgaW4gb3RoZXIgQmx1ZXByaW50IGNvbXBvbmVudHMuXG4gICAgICogICBBcyBhIGNvbnN1bWVyLCB5b3Ugc2hvdWxkIG5ldmVyIHVzZSBgPEljb24gaWNvbj17PGVsZW1lbnQgLz59YCBkaXJlY3RseTsgc2ltcGx5IHJlbmRlciBgPGVsZW1lbnQgLz5gIGluc3RlYWQuXG4gICAgICovXG4gICAgaWNvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlbWUgcHJvdmlkZWQgYnkgVGhlbWVQcm92aWRlci5cbiAgICAgKi9cbiAgICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogQ2xhc3MgbmFtZSBwYXNzZWQgdG8gdGhlIGJ1dHRvbi5cbiAgICAgKiBPbmx5IHVzZSBpZiB5b3Uga25vdyB3aGF0IHlvdSBhcmUgZG9pbmcuXG4gICAgICovXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGlzQWN0aXZlOiBmYWxzZSxcbiAgICBpY29uOiAnY2FyZXQtZG93bidcbiAgfVxuXG4gIHN0YXRpYyBzdHlsZXMgPSB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgZm9udEZhbWlseTogJ3VpJyxcbiAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBmbGV4V3JhcDogJ25vd3JhcCdcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB0aGVtZSxcbiAgICAgIGNsYXNzTmFtZSxcblxuICAgICAgaW50ZW50LFxuICAgICAgaGVpZ2h0LFxuICAgICAgaXNBY3RpdmUsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGRpc2FibGVkLFxuICAgICAgYXBwZWFyYW5jZSxcbiAgICAgIGlzTG9hZGluZyxcblxuICAgICAgLy8gUGFkZGluZ3NcbiAgICAgIHBhZGRpbmdSaWdodCxcbiAgICAgIHBhZGRpbmdMZWZ0LFxuICAgICAgcGFkZGluZ1RvcCxcbiAgICAgIHBhZGRpbmdCb3R0b20sXG5cbiAgICAgIC8vIEljb25zXG4gICAgICBpY29uLFxuXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCB0aGVtZWRDbGFzc05hbWUgPSB0aGVtZS5nZXRUZXh0RHJvcGRvd25CdXR0b25DbGFzc05hbWUoKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUZXh0XG4gICAgICAgIGlzPVwiYnV0dG9uXCJcbiAgICAgICAgY2xhc3NOYW1lPXt0aGVtZWRDbGFzc05hbWV9XG4gICAgICAgIHBhZGRpbmdYPXs0fVxuICAgICAgICBtYXJnaW5YPXstNH1cbiAgICAgICAgcGFkZGluZ1k9ezJ9XG4gICAgICAgIG1hcmdpblk9ey0yfVxuICAgICAgICBzaXplPXszMDB9XG4gICAgICAgIGRhdGEtYWN0aXZlPXtpc0FjdGl2ZX1cbiAgICAgICAgey4uLlRleHREcm9wZG93bkJ1dHRvbi5zdHlsZXN9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgPlxuICAgICAgICB7aXNMb2FkaW5nICYmIChcbiAgICAgICAgICA8U3Bpbm5lclxuICAgICAgICAgICAgbWFyZ2luTGVmdD17LU1hdGgucm91bmQoaGVpZ2h0IC8gOCl9XG4gICAgICAgICAgICBtYXJnaW5SaWdodD17TWF0aC5yb3VuZChoZWlnaHQgLyA0KX1cbiAgICAgICAgICAgIHNpemU9e01hdGgucm91bmQoaGVpZ2h0IC8gMil9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8SWNvbiBjb2xvcj1cImRlZmF1bHRcIiBpY29uPXtpY29ufSBzaXplPXsxMn0gbWFyZ2luTGVmdD17Mn0gLz5cbiAgICAgIDwvVGV4dD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKFRleHREcm9wZG93bkJ1dHRvbilcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsa0I7Ozs7Ozs7Ozs7OztXQTBFSixrQkFBUztNQUNQLGtCQXNCSSxLQUFLQyxLQXRCVDtNQUFBLElBQ0VDLEtBREYsZUFDRUEsS0FERjtNQUFBLElBRUVDLFNBRkYsZUFFRUEsU0FGRjtNQUFBLElBSUVDLE1BSkYsZUFJRUEsTUFKRjtNQUFBLElBS0VDLE1BTEYsZUFLRUEsTUFMRjtNQUFBLElBTUVDLFFBTkYsZUFNRUEsUUFORjtNQUFBLElBT0VDLFFBUEYsZUFPRUEsUUFQRjtNQUFBLElBUUVDLFFBUkYsZUFR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