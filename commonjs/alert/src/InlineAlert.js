"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

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

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uiBox = require("ui-box");

var _theme = require("../../theme");

var _layers = require("../../layers");

var _typography = require("../../typography");

var _icon = require("../../icon");

var _excluded = ["theme", "children", "intent", "hasIcon", "size"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var InlineAlert = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(InlineAlert, _PureComponent);

  var _super = _createSuper(InlineAlert);

  function InlineAlert() {
    var _this;

    (0, _classCallCheck2["default"])(this, InlineAlert);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getIconForIntent", function (intent) {
      var theme = _this.props.theme;
      return /*#__PURE__*/_react["default"].createElement(_icon.Icon, (0, _extends2["default"])({
        size: 14,
        marginTop: 2
      }, theme.getIconForIntent(intent)));
    });
    return _this;
  }

  (0, _createClass2["default"])(InlineAlert, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          children = _this$props.children,
          intent = _this$props.intent,
          hasIcon = _this$props.hasIcon,
          size = _this$props.size,
          props = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      return /*#__PURE__*/_react["default"].createElement(_layers.Pane, (0, _extends2["default"])({
        alignItems: "center",
        display: "flex"
      }, props), hasIcon && /*#__PURE__*/_react["default"].createElement(_layers.Pane, {
        display: "inline",
        marginRight: 8
      }, this.getIconForIntent(intent)), /*#__PURE__*/_react["default"].createElement(_typography.Text, {
        size: size,
        fontWeight: 500
      }, children));
    }
  }]);
  return InlineAlert;
}(_react.PureComponent);

InlineAlert.displayName = "InlineAlert";
(0, _defineProperty2["default"])(InlineAlert, "propTypes", _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _uiBox.spacing.propTypes), _uiBox.position.propTypes), _uiBox.layout.propTypes), _uiBox.dimensions.propTypes), {}, {
  /**
   * The content of the alert.
   */
  children: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),

  /**
   * The intent of the alert. This should always be set explicitly.
   */
  intent: _propTypes["default"].oneOf(['none', 'success', 'warning', 'danger']).isRequired,

  /**
   * When true, show a icon on the left matching the type.
   * There is no point not showing this.
   */
  hasIcon: _propTypes["default"].bool,

  /**
   * The size of the Text.
   */
  size: _propTypes["default"].number,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: _propTypes["default"].object.isRequired
}));
(0, _defineProperty2["default"])(InlineAlert, "defaultProps", {
  intent: 'none',
  hasIcon: true,
  size: 400
});

var _default = (0, _theme.withTheme)(InlineAlert);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJJbmxpbmVBbGVydCIsImludGVudCIsInRoZW1lIiwicHJvcHMiLCJnZXRJY29uRm9ySW50ZW50IiwiY2hpbGRyZW4iLCJoYXNJY29uIiwic2l6ZSIsIlB1cmVDb21wb25lbnQiLCJzcGFjaW5nIiwicHJvcFR5cGVzIiwicG9zaXRpb24iLCJsYXlvdXQiLCJkaW1lbnNpb25zIiwiUHJvcFR5cGVzIiwib25lT2ZUeXBlIiwic3RyaW5nIiwibm9kZSIsIm9uZU9mIiwiaXNSZXF1aXJlZCIsImJvb2wiLCJudW1iZXIiLCJvYmplY3QiLCJ3aXRoVGhlbWUiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYWxlcnQvc3JjL0lubGluZUFsZXJ0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBzcGFjaW5nLCBkaW1lbnNpb25zLCBwb3NpdGlvbiwgbGF5b3V0IH0gZnJvbSAndWktYm94J1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5pbXBvcnQgeyBQYW5lIH0gZnJvbSAnLi4vLi4vbGF5ZXJzJ1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnLi4vLi4vaWNvbidcblxuY2xhc3MgSW5saW5lQWxlcnQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyBzb21lIEJveCBBUElzLlxuICAgICAqL1xuICAgIC4uLnNwYWNpbmcucHJvcFR5cGVzLFxuICAgIC4uLnBvc2l0aW9uLnByb3BUeXBlcyxcbiAgICAuLi5sYXlvdXQucHJvcFR5cGVzLFxuICAgIC4uLmRpbWVuc2lvbnMucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGFsZXJ0LlxuICAgICAqL1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubm9kZV0pLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGludGVudCBvZiB0aGUgYWxlcnQuIFRoaXMgc2hvdWxkIGFsd2F5cyBiZSBzZXQgZXhwbGljaXRseS5cbiAgICAgKi9cbiAgICBpbnRlbnQ6IFByb3BUeXBlcy5vbmVPZihbJ25vbmUnLCAnc3VjY2VzcycsICd3YXJuaW5nJywgJ2RhbmdlciddKVxuICAgICAgLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHNob3cgYSBpY29uIG9uIHRoZSBsZWZ0IG1hdGNoaW5nIHRoZSB0eXBlLlxuICAgICAqIFRoZXJlIGlzIG5vIHBvaW50IG5vdCBzaG93aW5nIHRoaXMuXG4gICAgICovXG4gICAgaGFzSWNvbjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2l6ZSBvZiB0aGUgVGV4dC5cbiAgICAgKi9cbiAgICBzaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogVGhlbWUgcHJvdmlkZWQgYnkgVGhlbWVQcm92aWRlci5cbiAgICAgKi9cbiAgICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGludGVudDogJ25vbmUnLFxuICAgIGhhc0ljb246IHRydWUsXG4gICAgc2l6ZTogNDAwXG4gIH1cblxuICBnZXRJY29uRm9ySW50ZW50ID0gaW50ZW50ID0+IHtcbiAgICBjb25zdCB7IHRoZW1lIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gPEljb24gc2l6ZT17MTR9IG1hcmdpblRvcD17Mn0gey4uLnRoZW1lLmdldEljb25Gb3JJbnRlbnQoaW50ZW50KX0gLz5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRoZW1lLCBjaGlsZHJlbiwgaW50ZW50LCBoYXNJY29uLCBzaXplLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQYW5lIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBkaXNwbGF5PVwiZmxleFwiIHsuLi5wcm9wc30+XG4gICAgICAgIHtoYXNJY29uICYmIChcbiAgICAgICAgICA8UGFuZSBkaXNwbGF5PVwiaW5saW5lXCIgbWFyZ2luUmlnaHQ9ezh9PlxuICAgICAgICAgICAge3RoaXMuZ2V0SWNvbkZvckludGVudChpbnRlbnQpfVxuICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgKX1cbiAgICAgICAgPFRleHQgc2l6ZT17c2l6ZX0gZm9udFdlaWdodD17NTAwfT5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvUGFuZT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKElubGluZUFsZXJ0KVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLFc7Ozs7Ozs7Ozs7Ozs7Ozt5R0E0Q2UsVUFBQUMsTUFBTSxFQUFJO01BQzNCLElBQVFDLEtBQVIsR0FBa0IsTUFBS0MsS0FBdkIsQ0FBUUQsS0FBUjtNQUVBLG9CQUFPLGdDQUFDLFVBQUQ7UUFBTSxJQUFJLEVBQUUsRUFBWjtRQUFnQixTQUFTLEVBQUU7TUFBM0IsR0FBa0NBLEtBQUssQ0FBQ0UsZ0JBQU4sQ0FBdUJILE1BQXZCLENBQWxDLEVBQVA7SUFDRCxDOzs7Ozs7V0FFRCxrQkFBUztNQUNQLGtCQUE2RCxLQUFLRSxLQUFsRTtNQUFBLElBQVFELEtBQVIsZUFBUUEsS0FBUjtNQUFBLElBQWVHLFFBQWYsZUFBZUEsUUFBZjtNQUFBLElBQXlCSixNQUF6QixlQUF5QkEsTUFBekI7TUFBQSxJQUFpQ0ssT0FBakMsZUFBaUNBLE9BQWpDO01BQUEsSUFBMENDLElBQTFDLGVBQTBDQSxJQUExQztNQUFBLElBQW1ESixLQUFuRDtNQUVBLG9CQUNFLGdDQUFDLFlBQUQ7UUFBTSxVQUFVLEVBQUMsUUFBakI7UUFBMEIsT0FBTyxFQUFDO01BQWxDLEdBQTZDQSxLQUE3QyxHQUNHRyxPQUFPLGlCQUNOLGdDQUFDLFlBQUQ7UUFBTSxPQUFPLEVBQUMsUUFBZDtRQUF1QixXQUFXLEVBQUU7TUFBcEMsR0FDRyxLQUFLRixnQkFBTCxDQUFzQkgsTUFBdEIsQ0FESCxDQUZKLGVBTUUsZ0NBQUMsZ0JBQUQ7UUFBTSxJQUFJLEVBQUVNLElBQVo7UUFBa0IsVUFBVSxFQUFFO01BQTlCLEdBQ0dGLFFBREgsQ0FORixDQURGO0lBWUQ7OztFQWpFdUJHLG9COztBQUFwQlIsVztpQ0FBQUEsVyx5RkFLQ1MsY0FBQSxDQUFRQyxTLEdBQ1JDLGVBQUEsQ0FBU0QsUyxHQUNURSxhQUFBLENBQU9GLFMsR0FDUEcsaUJBQUEsQ0FBV0gsUztFQUVkO0FBQ0o7QUFDQTtFQUNJTCxRQUFRLEVBQUVTLHFCQUFBLENBQVVDLFNBQVYsQ0FBb0IsQ0FBQ0QscUJBQUEsQ0FBVUUsTUFBWCxFQUFtQkYscUJBQUEsQ0FBVUcsSUFBN0IsQ0FBcEIsQzs7RUFFVjtBQUNKO0FBQ0E7RUFDSWhCLE1BQU0sRUFBRWEscUJBQUEsQ0FBVUksS0FBVixDQUFnQixDQUFDLE1BQUQsRUFBUyxTQUFULEVBQW9CLFNBQXBCLEVBQStCLFFBQS9CLENBQWhCLEVBQ0xDLFU7O0VBRUg7QUFDSjtBQUNBO0FBQ0E7RUFDSWIsT0FBTyxFQUFFUSxxQkFBQSxDQUFVTSxJOztFQUVuQjtBQUNKO0FBQ0E7RUFDSWIsSUFBSSxFQUFFTyxxQkFBQSxDQUFVTyxNOztFQUVoQjtBQUNKO0FBQ0E7RUFDSW5CLEtBQUssRUFBRVkscUJBQUEsQ0FBVVEsTUFBVixDQUFpQkg7O2lDQW5DdEJuQixXLGtCQXNDa0I7RUFDcEJDLE1BQU0sRUFBRSxNQURZO0VBRXBCSyxPQUFPLEVBQUUsSUFGVztFQUdwQkMsSUFBSSxFQUFFO0FBSGMsQzs7ZUE4QlQsSUFBQWdCLGdCQUFBLEVBQVV2QixXQUFWLEMifQ==