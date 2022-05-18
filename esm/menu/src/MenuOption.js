import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React from 'react';
import PropTypes from 'prop-types';
import { Pane } from '../../layers';
import { Text } from '../../typography';
import { Icon } from '../../icon';
import { withTheme } from '../../theme';

var MenuOption = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(MenuOption, _React$PureComponent);

  var _super = _createSuper(MenuOption);

  function MenuOption() {
    var _this;

    _classCallCheck(this, MenuOption);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "handleClick", function () {
      _this.props.onSelect();
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyPress", function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        _this.props.onSelect();

        e.preventDefault();
      }
    });

    return _this;
  }

  _createClass(MenuOption, [{
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
      return /*#__PURE__*/React.createElement(Pane, {
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
      }, isSelected && /*#__PURE__*/React.createElement(Icon, {
        "aria-hidden": true,
        color: "selected",
        icon: "tick",
        marginLeft: 16,
        marginRight: -4,
        size: 16,
        flexShrink: 0
      }), /*#__PURE__*/React.createElement(Text, _extends({}, textProps, {
        marginRight: 16,
        flex: 1
      }), children), secondaryText && /*#__PURE__*/React.createElement(Text, {
        marginRight: 16,
        color: "muted"
      }, secondaryText));
    }
  }]);

  return MenuOption;
}(React.PureComponent);

MenuOption.displayName = "MenuOption";

_defineProperty(MenuOption, "propTypes", {
  /**
   * The id attribute of the menu option.
   */
  id: PropTypes.string,

  /**
   * Function that is called on click and enter/space keypress.
   */
  onSelect: PropTypes.func,

  /**
   * The icon before the label.
   */
  isSelected: PropTypes.bool,

  /**
   * The children of the component.
   */
  children: PropTypes.node,

  /**
   * Secondary text shown on the right.
   */
  secondaryText: PropTypes.node,

  /**
   * The default theme only supports one default appearance.
   */
  appearance: PropTypes.string.isRequired,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired
});

_defineProperty(MenuOption, "defaultProps", {
  appearance: 'default',
  isSelected: false,
  onClick: function onClick() {},
  onSelect: function onSelect() {},
  onKeyPress: function onKeyPress() {}
});

export default withTheme(MenuOption);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIlBhbmUiLCJUZXh0IiwiSWNvbiIsIndpdGhUaGVtZSIsIk1lbnVPcHRpb24iLCJwcm9wcyIsIm9uU2VsZWN0IiwiZSIsImtleSIsInByZXZlbnREZWZhdWx0IiwiaWQiLCJjaGlsZHJlbiIsInRoZW1lIiwiYXBwZWFyYW5jZSIsInNlY29uZGFyeVRleHQiLCJpc1NlbGVjdGVkIiwidGhlbWVkQ2xhc3NOYW1lIiwiZ2V0TWVudUl0ZW1DbGFzc05hbWUiLCJ0ZXh0UHJvcHMiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJtYXJnaW5MZWZ0IiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVLZXlQcmVzcyIsIlB1cmVDb21wb25lbnQiLCJzdHJpbmciLCJmdW5jIiwiYm9vbCIsIm5vZGUiLCJpc1JlcXVpcmVkIiwib2JqZWN0Iiwib25DbGljayIsIm9uS2V5UHJlc3MiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbWVudS9zcmMvTWVudU9wdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBQYW5lIH0gZnJvbSAnLi4vLi4vbGF5ZXJzJ1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnLi4vLi4vaWNvbidcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuXG5jbGFzcyBNZW51T3B0aW9uIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogVGhlIGlkIGF0dHJpYnV0ZSBvZiB0aGUgbWVudSBvcHRpb24uXG4gICAgICovXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCBvbiBjbGljayBhbmQgZW50ZXIvc3BhY2Uga2V5cHJlc3MuXG4gICAgICovXG4gICAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGljb24gYmVmb3JlIHRoZSBsYWJlbC5cbiAgICAgKi9cbiAgICBpc1NlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBjaGlsZHJlbiBvZiB0aGUgY29tcG9uZW50LlxuICAgICAqL1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAgIC8qKlxuICAgICAqIFNlY29uZGFyeSB0ZXh0IHNob3duIG9uIHRoZSByaWdodC5cbiAgICAgKi9cbiAgICBzZWNvbmRhcnlUZXh0OiBQcm9wVHlwZXMubm9kZSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBkZWZhdWx0IHRoZW1lIG9ubHkgc3VwcG9ydHMgb25lIGRlZmF1bHQgYXBwZWFyYW5jZS5cbiAgICAgKi9cbiAgICBhcHBlYXJhbmNlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGVtZSBwcm92aWRlZCBieSBUaGVtZVByb3ZpZGVyLlxuICAgICAqL1xuICAgIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYXBwZWFyYW5jZTogJ2RlZmF1bHQnLFxuICAgIGlzU2VsZWN0ZWQ6IGZhbHNlLFxuICAgIG9uQ2xpY2s6ICgpID0+IHt9LFxuICAgIG9uU2VsZWN0OiAoKSA9PiB7fSxcbiAgICBvbktleVByZXNzOiAoKSA9PiB7fVxuICB9XG5cbiAgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vblNlbGVjdCgpXG4gIH1cblxuICBoYW5kbGVLZXlQcmVzcyA9IGUgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJyB8fCBlLmtleSA9PT0gJyAnKSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KClcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgdGhlbWUsXG4gICAgICBhcHBlYXJhbmNlLFxuICAgICAgc2Vjb25kYXJ5VGV4dCxcbiAgICAgIGlzU2VsZWN0ZWRcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgdGhlbWVkQ2xhc3NOYW1lID0gdGhlbWUuZ2V0TWVudUl0ZW1DbGFzc05hbWUoYXBwZWFyYW5jZSwgJ25vbmUnKVxuXG4gICAgY29uc3QgdGV4dFByb3BzID0gaXNTZWxlY3RlZFxuICAgICAgPyB7XG4gICAgICAgICAgY29sb3I6ICdzZWxlY3RlZCcsXG4gICAgICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgICAgIG1hcmdpbkxlZnQ6IDE2XG4gICAgICAgIH1cbiAgICAgIDogeyBtYXJnaW5MZWZ0OiA0NCB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBhbmVcbiAgICAgICAgaWQ9e2lkfVxuICAgICAgICByb2xlPVwibWVudWl0ZW1yYWRpb1wiXG4gICAgICAgIHRhYkluZGV4PXswfVxuICAgICAgICBjbGFzc05hbWU9e3RoZW1lZENsYXNzTmFtZX1cbiAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cbiAgICAgICAgb25LZXlQcmVzcz17dGhpcy5oYW5kbGVLZXlQcmVzc31cbiAgICAgICAgZGF0YS1pc3NlbGVjdGFibGU9XCJ0cnVlXCJcbiAgICAgICAgYXJpYS1jaGVja2VkPXtpc1NlbGVjdGVkfVxuICAgICAgICBoZWlnaHQ9ezQwfVxuICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgPlxuICAgICAgICB7aXNTZWxlY3RlZCAmJiAoXG4gICAgICAgICAgPEljb25cbiAgICAgICAgICAgIGFyaWEtaGlkZGVuXG4gICAgICAgICAgICBjb2xvcj1cInNlbGVjdGVkXCJcbiAgICAgICAgICAgIGljb249XCJ0aWNrXCJcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ9ezE2fVxuICAgICAgICAgICAgbWFyZ2luUmlnaHQ9ey00fVxuICAgICAgICAgICAgc2l6ZT17MTZ9XG4gICAgICAgICAgICBmbGV4U2hyaW5rPXswfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIDxUZXh0IHsuLi50ZXh0UHJvcHN9IG1hcmdpblJpZ2h0PXsxNn0gZmxleD17MX0+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIHtzZWNvbmRhcnlUZXh0ICYmIChcbiAgICAgICAgICA8VGV4dCBtYXJnaW5SaWdodD17MTZ9IGNvbG9yPVwibXV0ZWRcIj5cbiAgICAgICAgICAgIHtzZWNvbmRhcnlUZXh0fVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgKX1cbiAgICAgIDwvUGFuZT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKE1lbnVPcHRpb24pXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLElBQVQsUUFBcUIsY0FBckI7QUFDQSxTQUFTQyxJQUFULFFBQXFCLGtCQUFyQjtBQUNBLFNBQVNDLElBQVQsUUFBcUIsWUFBckI7QUFDQSxTQUFTQyxTQUFULFFBQTBCLGFBQTFCOztJQUVNQyxVOzs7Ozs7Ozs7Ozs7Ozs7O2tFQThDVSxZQUFNO01BQ2xCLE1BQUtDLEtBQUwsQ0FBV0MsUUFBWDtJQUNELEM7O3FFQUVnQixVQUFBQyxDQUFDLEVBQUk7TUFDcEIsSUFBSUEsQ0FBQyxDQUFDQyxHQUFGLEtBQVUsT0FBVixJQUFxQkQsQ0FBQyxDQUFDQyxHQUFGLEtBQVUsR0FBbkMsRUFBd0M7UUFDdEMsTUFBS0gsS0FBTCxDQUFXQyxRQUFYOztRQUNBQyxD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