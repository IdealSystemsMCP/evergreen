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

var _icon = require("../../icon");

var _theme = require("../../theme");

var _Button = _interopRequireDefault(require("./Button"));

var _excluded = ["theme", "iconAim", "icon", "iconSize", "height", "intent"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var IconButton = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(IconButton, _PureComponent);

  var _super = _createSuper(IconButton);

  function IconButton() {
    (0, _classCallCheck2["default"])(this, IconButton);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(IconButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          iconAim = _this$props.iconAim,
          icon = _this$props.icon,
          iconSize = _this$props.iconSize,
          height = _this$props.height,
          intent = _this$props.intent,
          props = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      var size = iconSize || theme.getIconSizeForIconButton(height);
      return /*#__PURE__*/_react["default"].createElement(_Button["default"], (0, _extends2["default"])({
        intent: intent,
        height: height,
        width: height,
        paddingLeft: 0,
        paddingRight: 0,
        display: "flex",
        justifyContent: "center"
      }, props), /*#__PURE__*/_react["default"].createElement(_icon.Icon, {
        icon: icon,
        size: size,
        color: intent === 'none' ? 'default' : 'currentColor'
      }));
    }
  }]);
  return IconButton;
}(_react.PureComponent);

IconButton.displayName = "IconButton";
(0, _defineProperty2["default"])(IconButton, "propTypes", _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _uiBox.dimensions.propTypes), _uiBox.spacing.propTypes), _uiBox.position.propTypes), _uiBox.layout.propTypes), {}, {
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
  icon: _propTypes["default"].string,

  /**
   * Specifies an explicit icon size instead of the default value
   */
  iconSize: _propTypes["default"].number,

  /**
   * The intent of the button.
   */
  intent: _propTypes["default"].oneOf(['none', 'success', 'warning', 'danger']).isRequired,

  /**
   * The appearance of the button.
   */
  appearance: _propTypes["default"].oneOf(['default', 'minimal', 'primary']).isRequired,

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
   * Theme provided by ThemeProvider.
   */
  theme: _propTypes["default"].object.isRequired,

  /**
   * Class name passed to the button.
   * Only use if you know what you are doing.
   */
  className: _propTypes["default"].string
}));
(0, _defineProperty2["default"])(IconButton, "defaultProps", {
  intent: 'none',
  appearance: 'default',
  height: 32
});

var _default = (0, _theme.withTheme)(IconButton);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJJY29uQnV0dG9uIiwicHJvcHMiLCJ0aGVtZSIsImljb25BaW0iLCJpY29uIiwiaWNvblNpemUiLCJoZWlnaHQiLCJpbnRlbnQiLCJzaXplIiwiZ2V0SWNvblNpemVGb3JJY29uQnV0dG9uIiwiUHVyZUNvbXBvbmVudCIsImRpbWVuc2lvbnMiLCJwcm9wVHlwZXMiLCJzcGFjaW5nIiwicG9zaXRpb24iLCJsYXlvdXQiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJudW1iZXIiLCJvbmVPZiIsImlzUmVxdWlyZWQiLCJhcHBlYXJhbmNlIiwiaXNBY3RpdmUiLCJib29sIiwiZGlzYWJsZWQiLCJvYmplY3QiLCJjbGFzc05hbWUiLCJ3aXRoVGhlbWUiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYnV0dG9ucy9zcmMvSWNvbkJ1dHRvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgZGltZW5zaW9ucywgc3BhY2luZywgcG9zaXRpb24sIGxheW91dCB9IGZyb20gJ3VpLWJveCdcbmltcG9ydCB7IEljb24gfSBmcm9tICcuLi8uLi9pY29uJ1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJ1xuXG5jbGFzcyBJY29uQnV0dG9uIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIGRpbWVuc2lvbnMgc3BlYyBmcm9tIHRoZSBCb3ggcHJpbWl0aXZlLlxuICAgICAqL1xuICAgIC4uLmRpbWVuc2lvbnMucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIHNwYWNpbmcgc3BlYyBmcm9tIHRoZSBCb3ggcHJpbWl0aXZlLlxuICAgICAqL1xuICAgIC4uLnNwYWNpbmcucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIHBvc2l0aW9uIHNwZWMgZnJvbSB0aGUgQm94IHByaW1pdGl2ZS5cbiAgICAgKi9cbiAgICAuLi5wb3NpdGlvbi5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgbGF5b3V0IHNwZWMgZnJvbSB0aGUgQm94IHByaW1pdGl2ZS5cbiAgICAgKi9cbiAgICAuLi5sYXlvdXQucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogTmFtZSBvZiBhIEJsdWVwcmludCBVSSBpY29uLCBvciBhbiBpY29uIGVsZW1lbnQsIHRvIHJlbmRlci5cbiAgICAgKiBUaGlzIHByb3AgaXMgcmVxdWlyZWQgYmVjYXVzZSBpdCBkZXRlcm1pbmVzIHRoZSBjb250ZW50IG9mIHRoZSBjb21wb25lbnQsIGJ1dCBpdCBjYW5cbiAgICAgKiBiZSBleHBsaWNpdGx5IHNldCB0byBmYWxzeSB2YWx1ZXMgdG8gcmVuZGVyIG5vdGhpbmcuXG4gICAgICpcbiAgICAgKiAtIElmIGBudWxsYCBvciBgdW5kZWZpbmVkYCBvciBgZmFsc2VgLCB0aGlzIGNvbXBvbmVudCB3aWxsIHJlbmRlciBub3RoaW5nLlxuICAgICAqIC0gSWYgZ2l2ZW4gYW4gYEljb25OYW1lYCAoYSBzdHJpbmcgbGl0ZXJhbCB1bmlvbiBvZiBhbGwgaWNvbiBuYW1lcyksXG4gICAgICogICB0aGF0IGljb24gd2lsbCBiZSByZW5kZXJlZCBhcyBhbiBgPHN2Zz5gIHdpdGggYDxwYXRoPmAgdGFncy5cbiAgICAgKiAtIElmIGdpdmVuIGEgYEpTWC5FbGVtZW50YCwgdGhhdCBlbGVtZW50IHdpbGwgYmUgcmVuZGVyZWQgYW5kIF9hbGwgb3RoZXIgcHJvcHMgb24gdGhpcyBjb21wb25lbnQgYXJlIGlnbm9yZWQuX1xuICAgICAqICAgVGhpcyB0eXBlIGlzIHN1cHBvcnRlZCB0byBzaW1wbGlmeSB1c2FnZSBvZiB0aGlzIGNvbXBvbmVudCBpbiBvdGhlciBCbHVlcHJpbnQgY29tcG9uZW50cy5cbiAgICAgKiAgIEFzIGEgY29uc3VtZXIsIHlvdSBzaG91bGQgbmV2ZXIgdXNlIGA8SWNvbiBpY29uPXs8ZWxlbWVudCAvPn1gIGRpcmVjdGx5OyBzaW1wbHkgcmVuZGVyIGA8ZWxlbWVudCAvPmAgaW5zdGVhZC5cbiAgICAgKi9cbiAgICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogU3BlY2lmaWVzIGFuIGV4cGxpY2l0IGljb24gc2l6ZSBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0IHZhbHVlXG4gICAgICovXG4gICAgaWNvblNpemU6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW50ZW50IG9mIHRoZSBidXR0b24uXG4gICAgICovXG4gICAgaW50ZW50OiBQcm9wVHlwZXMub25lT2YoWydub25lJywgJ3N1Y2Nlc3MnLCAnd2FybmluZycsICdkYW5nZXInXSlcbiAgICAgIC5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGFwcGVhcmFuY2Ugb2YgdGhlIGJ1dHRvbi5cbiAgICAgKi9cbiAgICBhcHBlYXJhbmNlOiBQcm9wVHlwZXMub25lT2YoWydkZWZhdWx0JywgJ21pbmltYWwnLCAncHJpbWFyeSddKS5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogRm9yY2VmdWxseSBzZXQgdGhlIGFjdGl2ZSBzdGF0ZSBvZiBhIGJ1dHRvbi5cbiAgICAgKiBVc2VmdWwgaW4gY29uanVjdGlvbiB3aXRoIGEgUG9wb3Zlci5cbiAgICAgKi9cbiAgICBpc0FjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSBidXR0b24gaXMgZGlzYWJsZWQuXG4gICAgICogaXNMb2FkaW5nIGFsc28gc2V0cyB0aGUgYnV0dG9uIHRvIGRpc2FibGVkLlxuICAgICAqL1xuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFRoZW1lIHByb3ZpZGVkIGJ5IFRoZW1lUHJvdmlkZXIuXG4gICAgICovXG4gICAgdGhlbWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIENsYXNzIG5hbWUgcGFzc2VkIHRvIHRoZSBidXR0b24uXG4gICAgICogT25seSB1c2UgaWYgeW91IGtub3cgd2hhdCB5b3UgYXJlIGRvaW5nLlxuICAgICAqL1xuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBpbnRlbnQ6ICdub25lJyxcbiAgICBhcHBlYXJhbmNlOiAnZGVmYXVsdCcsXG4gICAgaGVpZ2h0OiAzMlxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRoZW1lLFxuICAgICAgaWNvbkFpbSxcbiAgICAgIGljb24sXG4gICAgICBpY29uU2l6ZSxcbiAgICAgIGhlaWdodCxcbiAgICAgIGludGVudCxcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBzaXplID0gaWNvblNpemUgfHwgdGhlbWUuZ2V0SWNvblNpemVGb3JJY29uQnV0dG9uKGhlaWdodClcblxuICAgIHJldHVybiAoXG4gICAgICA8QnV0dG9uXG4gICAgICAgIGludGVudD17aW50ZW50fVxuICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgd2lkdGg9e2hlaWdodH1cbiAgICAgICAgcGFkZGluZ0xlZnQ9ezB9XG4gICAgICAgIHBhZGRpbmdSaWdodD17MH1cbiAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgID5cbiAgICAgICAgPEljb25cbiAgICAgICAgICBpY29uPXtpY29ufVxuICAgICAgICAgIHNpemU9e3NpemV9XG4gICAgICAgICAgY29sb3I9e2ludGVudCA9PT0gJ25vbmUnID8gJ2RlZmF1bHQnIDogJ2N1cnJlbnRDb2xvcid9XG4gICAgICAgIC8+XG4gICAgICA8L0J1dHRvbj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKEljb25CdXR0b24pXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLFU7Ozs7Ozs7Ozs7OztXQWtGSixrQkFBUztNQUNQLGtCQVFJLEtBQUtDLEtBUlQ7TUFBQSxJQUNFQyxLQURGLGVBQ0VBLEtBREY7TUFBQSxJQUVFQyxPQUZGLGVBRUVBLE9BRkY7TUFBQSxJQUdFQyxJQUhGLGVBR0VBLElBSEY7TUFBQSxJQUlFQyxRQUpGLGVBSUVBLFFBSkY7TUFBQSxJQUtFQyxNQUxGLGVBS0VBLE1BTEY7TUFBQSxJQU1FQyxNQU5GLGVBTUVBLE1BTkY7TUFBQSxJQU9LTixLQVBMO01BU0EsSUFBTU8sSUFBSSxHQUFHSCxRQUFRLElBQUlILEtBQUssQ0FBQ08sd0JBQU4sQ0FBK0JILE1BQS9CLENBQXpCO01BRUEsb0JBQ0UsZ0NBQUMsa0JBQUQ7UUFDRSxNQUFNLEVBQUVDLE1BRFY7UUFFRSxNQUFNLEVBQUVELE1BRlY7UUFHRSxLQUFLLEVBQUVBLE1BSFQ7UUFJRSxXQUFXLEVBQUUsQ0FKZjtRQUtFLFlBQVksRUFBRSxDQUxoQjtRQU1FLE9BQU8sRUFBQyxNQU5WO1FBT0UsY0FBYyxFQUFDO01BUGpCLEdBUU1MLEtBUk4sZ0JBVUUsZ0NBQUMsVUFBRDtRQUNFLElBQUksRUFBRUcsSUFEUjtRQUVFLElBQUksRUFBRUksSUFGUjtRQUdFLEtBQUssRUFBRUQsTUFBTSxLQUFLLE1BQVgsR0FBb0IsU0FBcEIsR0FBZ0M7TUFIekMsRUFWRixDQURGO0lBa0JEOzs7RUFoSHNCRyxvQjs7QUFBbkJWLFU7aUNBQUFBLFUseUZBS0NXLGlCQUFBLENBQVdDLFMsR0FLWEMsY0FBQSxDQUFRRCxTLEdBS1JFLGVBQUEsQ0FBU0YsUyxHQUtURyxhQUFBLENBQU9ILFM7RUFFVjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDSVIsSUFBSSxFQUFFWSxxQkFBQSxDQUFVQyxNOztFQUVoQjtBQUNKO0FBQ0E7RUFDSVosUUFBUSxFQUFFVyxxQkFBQSxDQUFVRSxNOztFQUVwQjtBQUNKO0FBQ0E7RUFDSVgsTUFBTSxFQUFFUyxxQkFBQSxDQUFVRyxLQUFWLENBQWdCLENBQUMsTUFBRCxFQUFTLFNBQVQsRUFBb0IsU0FBcEIsRUFBK0IsUUFBL0IsQ0FBaEIsRUFDTEMsVTs7RUFFSDtBQUNKO0FBQ0E7RUFDSUMsVUFBVSxFQUFFTCxxQkFBQSxDQUFVRyxLQUFWLENBQWdCLENBQUMsU0FBRCxFQUFZLFNBQVosRUFBdUIsU0FBdkIsQ0FBaEIsRUFBbURDLFU7O0VBRS9EO0FBQ0o7QUFDQTtBQUNBO0VBQ0lFLFFBQVEsRUFBRU4scUJBQUEsQ0FBVU8sSTs7RUFFcEI7QUFDSjtBQUNBO0FBQ0E7RUFDSUMsUUFBUSxFQUFFUixxQkFBQSxDQUFVTyxJOztFQUVwQjtBQUNKO0FBQ0E7RUFDSXJCLEtBQUssRUFBRWMscUJBQUEsQ0FBVVMsTUFBVixDQUFpQkwsVTs7RUFFeEI7QUFDSjtBQUNBO0FBQ0E7RUFDSU0sU0FBUyxFQUFFVixxQkFBQSxDQUFVQzs7aUNBekVuQmpCLFUsa0JBNEVrQjtFQUNwQk8sTUFBTSxFQUFFLE1BRFk7RUFFcEJjLFVBQVUsRUFBRSxTQUZRO0VBR3BCZixNQUFNLEVBQUU7QUFIWSxDOztlQXVDVCxJQUFBcUIsZ0JBQUEsRUFBVTNCLFVBQVYsQyJ9