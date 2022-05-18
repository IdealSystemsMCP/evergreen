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

var _typography = require("../../typography");

var _theme = require("../../theme");

var _warning = _interopRequireDefault(require("../../lib/warning"));

var _excluded = ["theme", "is", "height", "onSelect", "isSelected", "appearance", "disabled"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Tab = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Tab, _PureComponent);

  var _super = _createSuper(Tab);

  function Tab() {
    var _this;

    (0, _classCallCheck2["default"])(this, Tab);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClick", function (e) {
      if (typeof _this.props.onClick === 'function') {
        _this.props.onClick(e);
      }

      _this.props.onSelect();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleKeyPress", function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        _this.props.onSelect();

        e.preventDefault();
      }

      _this.props.onKeyPress(e);
    });
    return _this;
  }

  (0, _createClass2["default"])(Tab, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          is = _this$props.is,
          height = _this$props.height,
          onSelect = _this$props.onSelect,
          isSelected = _this$props.isSelected,
          appearance = _this$props.appearance,
          disabled = _this$props.disabled,
          props = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);

      if (process.env.NODE_ENV !== 'production') {
        (0, _warning["default"])(typeof this.props.onClick === 'function', '<Tab> expects `onSelect` prop, but you passed `onClick`.');
      }

      var textSize = theme.getTextSizeForControlHeight(height);
      var elementBasedProps;

      if (disabled) {
        elementBasedProps = {
          'aria-disabled': true
        };
      }

      if (is === 'a') {
        // Use aria-current when it's a link
        // https://tink.uk/using-the-aria-current-attribute/
        elementBasedProps = isSelected ? _objectSpread(_objectSpread({}, elementBasedProps), {}, {
          'aria-current': 'page'
        }) : {};
      } else {
        // Use a role="tablist" around the tabs
        // Also pass down a aria-controls="panelId"
        // https://www.stefanjudis.com/blog/aria-selected-and-when-to-use-it/
        elementBasedProps = _objectSpread(_objectSpread({}, elementBasedProps), {}, {
          'aria-selected': isSelected,
          role: 'tab'
        });
      }

      return /*#__PURE__*/_react["default"].createElement(_typography.Text, (0, _extends2["default"])({
        className: theme.getTabClassName(appearance),
        is: is,
        size: textSize,
        height: height
      }, Tab.styles, props, {
        onClick: this.handleClick,
        onKeyPress: this.handleKeyPress
      }, elementBasedProps));
    }
  }]);
  return Tab;
}(_react.PureComponent);

Tab.displayName = "Tab";
(0, _defineProperty2["default"])(Tab, "propTypes", _objectSpread(_objectSpread({}, _typography.Text.propTypes), {}, {
  /**
   * Function triggered when tab is selected.
   */
  onSelect: _propTypes["default"].func,

  /**
   * When true, the tab is selected.
   */
  isSelected: _propTypes["default"].bool,

  /**
   * The appearance of the tab.
   * The default theme only comes with a default style.
   */
  appearance: _propTypes["default"].string,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: _propTypes["default"].object.isRequired
}));
(0, _defineProperty2["default"])(Tab, "defaultProps", {
  onSelect: function onSelect() {},
  onKeyPress: function onKeyPress() {},
  is: 'span',
  height: 28,
  disabled: false
});
(0, _defineProperty2["default"])(Tab, "styles", {
  display: 'inline-flex',
  fontWeight: 500,
  paddingX: 8,
  marginX: 4,
  borderRadius: 3,
  lineHeight: '28px',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',
  tabIndex: 0
});

var _default = (0, _theme.withTheme)(Tab);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJUYWIiLCJlIiwicHJvcHMiLCJvbkNsaWNrIiwib25TZWxlY3QiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsIm9uS2V5UHJlc3MiLCJ0aGVtZSIsImlzIiwiaGVpZ2h0IiwiaXNTZWxlY3RlZCIsImFwcGVhcmFuY2UiLCJkaXNhYmxlZCIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsIndhcm5pbmciLCJ0ZXh0U2l6ZSIsImdldFRleHRTaXplRm9yQ29udHJvbEhlaWdodCIsImVsZW1lbnRCYXNlZFByb3BzIiwicm9sZSIsImdldFRhYkNsYXNzTmFtZSIsInN0eWxlcyIsImhhbmRsZUNsaWNrIiwiaGFuZGxlS2V5UHJlc3MiLCJQdXJlQ29tcG9uZW50IiwiVGV4dCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJib29sIiwic3RyaW5nIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImRpc3BsYXkiLCJmb250V2VpZ2h0IiwicGFkZGluZ1giLCJtYXJnaW5YIiwiYm9yZGVyUmFkaXVzIiwibGluZUhlaWdodCIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInRleHREZWNvcmF0aW9uIiwidGFiSW5kZXgiLCJ3aXRoVGhlbWUiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdGFicy9zcmMvVGFiLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vLi4vdHlwb2dyYXBoeSdcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuaW1wb3J0IHdhcm5pbmcgZnJvbSAnLi4vLi4vbGliL3dhcm5pbmcnXG5cbmNsYXNzIFRhYiBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBUZXh0IGNvbXBvbmVudCBhcyB0aGUgYmFzZS5cbiAgICAgKi9cbiAgICAuLi5UZXh0LnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRyaWdnZXJlZCB3aGVuIHRhYiBpcyBzZWxlY3RlZC5cbiAgICAgKi9cbiAgICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSB0YWIgaXMgc2VsZWN0ZWQuXG4gICAgICovXG4gICAgaXNTZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgYXBwZWFyYW5jZSBvZiB0aGUgdGFiLlxuICAgICAqIFRoZSBkZWZhdWx0IHRoZW1lIG9ubHkgY29tZXMgd2l0aCBhIGRlZmF1bHQgc3R5bGUuXG4gICAgICovXG4gICAgYXBwZWFyYW5jZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFRoZW1lIHByb3ZpZGVkIGJ5IFRoZW1lUHJvdmlkZXIuXG4gICAgICovXG4gICAgdGhlbWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBvblNlbGVjdDogKCkgPT4ge30sXG4gICAgb25LZXlQcmVzczogKCkgPT4ge30sXG4gICAgaXM6ICdzcGFuJyxcbiAgICBoZWlnaHQ6IDI4LFxuICAgIGRpc2FibGVkOiBmYWxzZVxuICB9XG5cbiAgc3RhdGljIHN0eWxlcyA9IHtcbiAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICBwYWRkaW5nWDogOCxcbiAgICBtYXJnaW5YOiA0LFxuICAgIGJvcmRlclJhZGl1czogMyxcbiAgICBsaW5lSGVpZ2h0OiAnMjhweCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgdGFiSW5kZXg6IDBcbiAgfVxuXG4gIGhhbmRsZUNsaWNrID0gZSA9PiB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMucHJvcHMub25DbGljayhlKVxuICAgIH1cblxuICAgIHRoaXMucHJvcHMub25TZWxlY3QoKVxuICB9XG5cbiAgaGFuZGxlS2V5UHJlc3MgPSBlID0+IHtcbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicgfHwgZS5rZXkgPT09ICcgJykge1xuICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdCgpXG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLm9uS2V5UHJlc3MoZSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB0aGVtZSxcbiAgICAgIGlzLFxuICAgICAgaGVpZ2h0LFxuICAgICAgb25TZWxlY3QsXG4gICAgICBpc1NlbGVjdGVkLFxuICAgICAgYXBwZWFyYW5jZSxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHdhcm5pbmcoXG4gICAgICAgIHR5cGVvZiB0aGlzLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicsXG4gICAgICAgICc8VGFiPiBleHBlY3RzIGBvblNlbGVjdGAgcHJvcCwgYnV0IHlvdSBwYXNzZWQgYG9uQ2xpY2tgLidcbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCB0ZXh0U2l6ZSA9IHRoZW1lLmdldFRleHRTaXplRm9yQ29udHJvbEhlaWdodChoZWlnaHQpXG5cbiAgICBsZXQgZWxlbWVudEJhc2VkUHJvcHNcbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIGVsZW1lbnRCYXNlZFByb3BzID0ge1xuICAgICAgICAnYXJpYS1kaXNhYmxlZCc6IHRydWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXMgPT09ICdhJykge1xuICAgICAgLy8gVXNlIGFyaWEtY3VycmVudCB3aGVuIGl0J3MgYSBsaW5rXG4gICAgICAvLyBodHRwczovL3RpbmsudWsvdXNpbmctdGhlLWFyaWEtY3VycmVudC1hdHRyaWJ1dGUvXG4gICAgICBlbGVtZW50QmFzZWRQcm9wcyA9IGlzU2VsZWN0ZWRcbiAgICAgICAgPyB7XG4gICAgICAgICAgICAuLi5lbGVtZW50QmFzZWRQcm9wcyxcbiAgICAgICAgICAgICdhcmlhLWN1cnJlbnQnOiAncGFnZSdcbiAgICAgICAgICB9XG4gICAgICAgIDoge31cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVXNlIGEgcm9sZT1cInRhYmxpc3RcIiBhcm91bmQgdGhlIHRhYnNcbiAgICAgIC8vIEFsc28gcGFzcyBkb3duIGEgYXJpYS1jb250cm9scz1cInBhbmVsSWRcIlxuICAgICAgLy8gaHR0cHM6Ly93d3cuc3RlZmFuanVkaXMuY29tL2Jsb2cvYXJpYS1zZWxlY3RlZC1hbmQtd2hlbi10by11c2UtaXQvXG4gICAgICBlbGVtZW50QmFzZWRQcm9wcyA9IHtcbiAgICAgICAgLi4uZWxlbWVudEJhc2VkUHJvcHMsXG4gICAgICAgICdhcmlhLXNlbGVjdGVkJzogaXNTZWxlY3RlZCxcbiAgICAgICAgcm9sZTogJ3RhYidcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFRleHRcbiAgICAgICAgY2xhc3NOYW1lPXt0aGVtZS5nZXRUYWJDbGFzc05hbWUoYXBwZWFyYW5jZSl9XG4gICAgICAgIGlzPXtpc31cbiAgICAgICAgc2l6ZT17dGV4dFNpemV9XG4gICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICB7Li4uVGFiLnN0eWxlc31cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxuICAgICAgICBvbktleVByZXNzPXt0aGlzLmhhbmRsZUtleVByZXNzfVxuICAgICAgICB7Li4uZWxlbWVudEJhc2VkUHJvcHN9XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoVGFiKVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLEc7Ozs7Ozs7Ozs7Ozs7OztvR0FrRFUsVUFBQUMsQ0FBQyxFQUFJO01BQ2pCLElBQUksT0FBTyxNQUFLQyxLQUFMLENBQVdDLE9BQWxCLEtBQThCLFVBQWxDLEVBQThDO1FBQzVDLE1BQUtELEtBQUwsQ0FBV0MsT0FBWCxDQUFtQkYsQ0FBbkI7TUFDRDs7TUFFRCxNQUFLQyxLQUFMLENBQVdFLFFBQVg7SUFDRCxDO3VHQUVnQixVQUFBSCxDQUFDLEVBQUk7TUFDcEIsSUFBSUEsQ0FBQyxDQUFDSSxHQUFGLEtBQVUsT0FBVixJQUFxQkosQ0FBQyxDQUFDSSxHQUFGLEtBQVUsR0FBbkMsRUFBd0M7UUFDdEMsTUFBS0gsS0FBTCxDQUFXRSxRQUFYOztRQUNBSCxDQUFDLENBQUNLLGNBQUY7TUFDRDs7TUFFRCxNQUFLSixLQUFMLENBQVdLLFVBQVgsQ0FBc0JOLENBQXRCO0lBQ0QsQzs7Ozs7O1dBRUQsa0JBQVM7TUFDUCxrQkFTSSxLQUFLQyxLQVRUO01BQUEsSUFDRU0sS0FERixlQUNFQSxLQURGO01BQUEsSUFFRUMsRUFGRixlQUVFQSxFQUZGO01BQUEsSUFHRUMsTUFIRixlQUdFQSxNQUhGO01BQUEsSUFJRU4sUUFKRixlQUlFQSxRQUpGO01BQUEsSUFLRU8sVUFMRixlQUtFQSxVQUxGO01BQUEsSUFNRUMsVUFORixlQU1FQSxVQU5GO01BQUEsSUFPRUMsUUFQRixlQU9FQSxRQVBGO01BQUEsSUFRS1gsS0FSTDs7TUFXQSxJQUFJWSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsUUFBWixLQUF5QixZQUE3QixFQUEyQztRQUN6QyxJQUFBQyxtQkFBQSxFQUNFLE9BQU8sS0FBS2YsS0FBTCxDQUFXQyxPQUFsQixLQUE4QixVQURoQyxFQUVFLDBEQUZGO01BSUQ7O01BRUQsSUFBTWUsUUFBUSxHQUFHVixLQUFLLENBQUNXLDJCQUFOLENBQWtDVCxNQUFsQyxDQUFqQjtNQUVBLElBQUlVLGlCQUFKOztNQUNBLElBQUlQLFFBQUosRUFBYztRQUNaTyxpQkFBaUIsR0FBRztVQUNsQixpQkFBaUI7UUFEQyxDQUFwQjtNQUdEOztNQUVELElBQUlYLEVBQUUsS0FBSyxHQUFYLEVBQWdCO1FBQ2Q7UUFDQTtRQUNBVyxpQkFBaUIsR0FBR1QsVUFBVSxtQ0FFckJTLGlCQUZxQjtVQUd4QixnQkFBZ0I7UUFIUSxLQUsxQixFQUxKO01BTUQsQ0FURCxNQVNPO1FBQ0w7UUFDQTtRQUNBO1FBQ0FBLGlCQUFpQixtQ0FDWkEsaUJBRFk7VUFFZixpQkFBaUJULFVBRkY7VUFHZlUsSUFBSSxFQUFFO1FBSFMsRUFBakI7TUFLRDs7TUFFRCxvQkFDRSxnQ0FBQyxnQkFBRDtRQUNFLFNBQVMsRUFBRWIsS0FBSyxDQUFDYyxlQUFOLENBQXNCVixVQUF0QixDQURiO1FBRUUsRUFBRSxFQUFFSCxFQUZOO1FBR0UsSUFBSSxFQUFFUyxRQUhSO1FBSUUsTUFBTSxFQUFFUjtNQUpWLEdBS01WLEdBQUcsQ0FBQ3VCLE1BTFYsRUFNTXJCLEtBTk47UUFPRSxPQUFPLEVBQUUsS0FBS3NCLFdBUGhCO1FBUUUsVUFBVSxFQUFFLEtBQUtDO01BUm5CLEdBU01MLGlCQVROLEVBREY7SUFhRDs7O0VBaEllTSxvQjs7QUFBWjFCLEc7aUNBQUFBLEcsK0NBS0MyQixnQkFBQSxDQUFLQyxTO0VBRVI7QUFDSjtBQUNBO0VBQ0l4QixRQUFRLEVBQUV5QixxQkFBQSxDQUFVQyxJOztFQUVwQjtBQUNKO0FBQ0E7RUFDSW5CLFVBQVUsRUFBRWtCLHFCQUFBLENBQVVFLEk7O0VBRXRCO0FBQ0o7QUFDQTtBQUNBO0VBQ0luQixVQUFVLEVBQUVpQixxQkFBQSxDQUFVRyxNOztFQUV0QjtBQUNKO0FBQ0E7RUFDSXhCLEtBQUssRUFBRXFCLHFCQUFBLENBQVVJLE1BQVYsQ0FBaUJDOztpQ0ExQnRCbEMsRyxrQkE2QmtCO0VBQ3BCSSxRQUFRLEVBQUUsb0JBQU0sQ0FBRSxDQURFO0VBRXBCRyxVQUFVLEVBQUUsc0JBQU0sQ0FBRSxDQUZBO0VBR3BCRSxFQUFFLEVBQUUsTUFIZ0I7RUFJcEJDLE1BQU0sRUFBRSxFQUpZO0VBS3BCRyxRQUFRLEVBQUU7QUFMVSxDO2lDQTdCbEJiLEcsWUFxQ1k7RUFDZG1DLE9BQU8sRUFBRSxhQURLO0VBRWRDLFVBQVUsRUFBRSxHQUZFO0VBR2RDLFFBQVEsRUFBRSxDQUhJO0VBSWRDLE9BQU8sRUFBRSxDQUpLO0VBS2RDLFlBQVksRUFBRSxDQUxBO0VBTWRDLFVBQVUsRUFBRSxNQU5FO0VBT2RDLFVBQVUsRUFBRSxRQVBFO0VBUWRDLGNBQWMsRUFBRSxRQVJGO0VBU2RDLGNBQWMsRUFBRSxNQVRGO0VBVWRDLFFBQVEsRUFBRTtBQVZJLEM7O2VBOEZILElBQUFDLGdCQUFBLEVBQVU3QyxHQUFWLEMifQ==