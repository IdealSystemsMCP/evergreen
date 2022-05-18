"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _layers = require("../../layers");

var _typography = require("../../typography");

var _icon = require("../../icon");

var _theme = require("../../theme");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var MenuOption = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(MenuOption, _React$PureComponent);

  var _super = _createSuper(MenuOption);

  function MenuOption() {
    var _this;

    (0, _classCallCheck2["default"])(this, MenuOption);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClick", function () {
      _this.props.onSelect();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleKeyPress", function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        _this.props.onSelect();

        e.preventDefault();
      }
    });
    return _this;
  }

  (0, _createClass2["default"])(MenuOption, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          children = _this$props.children,
          theme = _this$props.theme,
          appearance = _this$props.appearance,
          secondaryText = _this$props.secondaryText,
          isSelected = _this$props.isSelected;
      var themedClassName = theme.getMenuItemClassName(appearance, 'none');
      var textProps = isSelected ? {
        color: 'selected',
        fontWeight: 500,
        marginLeft: 16
      } : {
        marginLeft: 44
      };
      return /*#__PURE__*/_react["default"].createElement(_layers.Pane, {
        id: id,
        role: "menuitemradio",
        tabIndex: 0,
        className: themedClassName,
        onClick: this.handleClick,
        onKeyPress: this.handleKeyPress,
        "data-isselectable": "true",
        "aria-checked": isSelected,
        height: 40,
        display: "flex",
        alignItems: "center"
      }, isSelected && /*#__PURE__*/_react["default"].createElement(_icon.Icon, {
        "aria-hidden": true,
        color: "selected",
        icon: "tick",
        marginLeft: 16,
        marginRight: -4,
        size: 16,
        flexShrink: 0
      }), /*#__PURE__*/_react["default"].createElement(_typography.Text, (0, _extends2["default"])({}, textProps, {
        marginRight: 16,
        flex: 1
      }), children), secondaryText && /*#__PURE__*/_react["default"].createElement(_typography.Text, {
        marginRight: 16,
        color: "muted"
      }, secondaryText));
    }
  }]);
  return MenuOption;
}(_react["default"].PureComponent);

MenuOption.displayName = "MenuOption";
(0, _defineProperty2["default"])(MenuOption, "propTypes", {
  /**
   * The id attribute of the menu option.
   */
  id: _propTypes["default"].string,

  /**
   * Function that is called on click and enter/space keypress.
   */
  onSelect: _propTypes["default"].func,

  /**
   * The icon before the label.
   */
  isSelected: _propTypes["default"].bool,

  /**
   * The children of the component.
   */
  children: _propTypes["default"].node,

  /**
   * Secondary text shown on the right.
   */
  secondaryText: _propTypes["default"].node,

  /**
   * The default theme only supports one default appearance.
   */
  appearance: _propTypes["default"].string.isRequired,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: _propTypes["default"].object.isRequired
});
(0, _defineProperty2["default"])(MenuOption, "defaultProps", {
  appearance: 'default',
  isSelected: false,
  onClick: function onClick() {},
  onSelect: function onSelect() {},
  onKeyPress: function onKeyPress() {}
});

var _default = (0, _theme.withTheme)(MenuOption);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJNZW51T3B0aW9uIiwicHJvcHMiLCJvblNlbGVjdCIsImUiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsImlkIiwiY2hpbGRyZW4iLCJ0aGVtZSIsImFwcGVhcmFuY2UiLCJzZWNvbmRhcnlUZXh0IiwiaXNTZWxlY3RlZCIsInRoZW1lZENsYXNzTmFtZSIsImdldE1lbnVJdGVtQ2xhc3NOYW1lIiwidGV4dFByb3BzIiwiY29sb3IiLCJmb250V2VpZ2h0IiwibWFyZ2luTGVmdCIsImhhbmRsZUNsaWNrIiwiaGFuZGxlS2V5UHJlc3MiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJmdW5jIiwiYm9vbCIsIm5vZGUiLCJpc1JlcXVpcmVkIiwib2JqZWN0Iiwib25DbGljayIsIm9uS2V5UHJlc3MiLCJ3aXRoVGhlbWUiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbWVudS9zcmMvTWVudU9wdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBQYW5lIH0gZnJvbSAnLi4vLi4vbGF5ZXJzJ1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnLi4vLi4vaWNvbidcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuXG5jbGFzcyBNZW51T3B0aW9uIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogVGhlIGlkIGF0dHJpYnV0ZSBvZiB0aGUgbWVudSBvcHRpb24uXG4gICAgICovXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCBvbiBjbGljayBhbmQgZW50ZXIvc3BhY2Uga2V5cHJlc3MuXG4gICAgICovXG4gICAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGljb24gYmVmb3JlIHRoZSBsYWJlbC5cbiAgICAgKi9cbiAgICBpc1NlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBjaGlsZHJlbiBvZiB0aGUgY29tcG9uZW50LlxuICAgICAqL1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAgIC8qKlxuICAgICAqIFNlY29uZGFyeSB0ZXh0IHNob3duIG9uIHRoZSByaWdodC5cbiAgICAgKi9cbiAgICBzZWNvbmRhcnlUZXh0OiBQcm9wVHlwZXMubm9kZSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBkZWZhdWx0IHRoZW1lIG9ubHkgc3VwcG9ydHMgb25lIGRlZmF1bHQgYXBwZWFyYW5jZS5cbiAgICAgKi9cbiAgICBhcHBlYXJhbmNlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGVtZSBwcm92aWRlZCBieSBUaGVtZVByb3ZpZGVyLlxuICAgICAqL1xuICAgIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYXBwZWFyYW5jZTogJ2RlZmF1bHQnLFxuICAgIGlzU2VsZWN0ZWQ6IGZhbHNlLFxuICAgIG9uQ2xpY2s6ICgpID0+IHt9LFxuICAgIG9uU2VsZWN0OiAoKSA9PiB7fSxcbiAgICBvbktleVByZXNzOiAoKSA9PiB7fVxuICB9XG5cbiAgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vblNlbGVjdCgpXG4gIH1cblxuICBoYW5kbGVLZXlQcmVzcyA9IGUgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJyB8fCBlLmtleSA9PT0gJyAnKSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KClcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgdGhlbWUsXG4gICAgICBhcHBlYXJhbmNlLFxuICAgICAgc2Vjb25kYXJ5VGV4dCxcbiAgICAgIGlzU2VsZWN0ZWRcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgdGhlbWVkQ2xhc3NOYW1lID0gdGhlbWUuZ2V0TWVudUl0ZW1DbGFzc05hbWUoYXBwZWFyYW5jZSwgJ25vbmUnKVxuXG4gICAgY29uc3QgdGV4dFByb3BzID0gaXNTZWxlY3RlZFxuICAgICAgPyB7XG4gICAgICAgICAgY29sb3I6ICdzZWxlY3RlZCcsXG4gICAgICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgICAgIG1hcmdpbkxlZnQ6IDE2XG4gICAgICAgIH1cbiAgICAgIDogeyBtYXJnaW5MZWZ0OiA0NCB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBhbmVcbiAgICAgICAgaWQ9e2lkfVxuICAgICAgICByb2xlPVwibWVudWl0ZW1yYWRpb1wiXG4gICAgICAgIHRhYkluZGV4PXswfVxuICAgICAgICBjbGFzc05hbWU9e3RoZW1lZENsYXNzTmFtZX1cbiAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cbiAgICAgICAgb25LZXlQcmVzcz17dGhpcy5oYW5kbGVLZXlQcmVzc31cbiAgICAgICAgZGF0YS1pc3NlbGVjdGFibGU9XCJ0cnVlXCJcbiAgICAgICAgYXJpYS1jaGVja2VkPXtpc1NlbGVjdGVkfVxuICAgICAgICBoZWlnaHQ9ezQwfVxuICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgPlxuICAgICAgICB7aXNTZWxlY3RlZCAmJiAoXG4gICAgICAgICAgPEljb25cbiAgICAgICAgICAgIGFyaWEtaGlkZGVuXG4gICAgICAgICAgICBjb2xvcj1cInNlbGVjdGVkXCJcbiAgICAgICAgICAgIGljb249XCJ0aWNrXCJcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ9ezE2fVxuICAgICAgICAgICAgbWFyZ2luUmlnaHQ9ey00fVxuICAgICAgICAgICAgc2l6ZT17MTZ9XG4gICAgICAgICAgICBmbGV4U2hyaW5rPXswfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIDxUZXh0IHsuLi50ZXh0UHJvcHN9IG1hcmdpblJpZ2h0PXsxNn0gZmxleD17MX0+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIHtzZWNvbmRhcnlUZXh0ICYmIChcbiAgICAgICAgICA8VGV4dCBtYXJnaW5SaWdodD17MTZ9IGNvbG9yPVwibXV0ZWRcIj5cbiAgICAgICAgICAgIHtzZWNvbmRhcnlUZXh0fVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgKX1cbiAgICAgIDwvUGFuZT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKE1lbnVPcHRpb24pXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7O0lBRU1BLFU7Ozs7Ozs7Ozs7Ozs7OztvR0E4Q1UsWUFBTTtNQUNsQixNQUFLQyxLQUFMLENBQVdDLFFBQVg7SUFDRCxDO3VHQUVnQixVQUFBQyxDQUFDLEVBQUk7TUFDcEIsSUFBSUEsQ0FBQyxDQUFDQyxHQUFGLEtBQVUsT0FBVixJQUFxQkQsQ0FBQyxDQUFDQyxHQUFGLEtBQVUsR0FBbkMsRUFBd0M7UUFDdEMsTUFBS0gsS0FBTCxDQUFXQyxRQUFYOztRQUNBQyxDQUFDLENBQUNFLGNBQUY7TUFDRDtJQUNGLEM7Ozs7OztXQUVELGtCQUFTO01BQ1Asa0JBT0ksS0FBS0osS0FQVDtNQUFBLElBQ0VLLEVBREYsZUFDRUEsRUFERjtNQUFBLElBRUVDLFFBRkYsZUFFRUEsUUFGRjtNQUFBLElBR0VDLEtBSEYsZUFHRUEs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