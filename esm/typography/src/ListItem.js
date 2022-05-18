import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _excluded = ["children", "size", "icon", "iconColor"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../../icon';
import Text from './Text';

var ListItem = /*#__PURE__*/function (_PureComponent) {
  _inherits(ListItem, _PureComponent);

  var _super = _createSuper(ListItem);

  function ListItem() {
    _classCallCheck(this, ListItem);

    return _super.apply(this, arguments);
  }

  _createClass(ListItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          size = _this$props.size,
          icon = _this$props.icon,
          iconColor = _this$props.iconColor,
          props = _objectWithoutProperties(_this$props, _excluded);

      var paddingLeft;
      if (size === 300) paddingLeft = 4;
      if (size === 400) paddingLeft = 8;
      if (size === 500) paddingLeft = 8;
      if (size === 600) paddingLeft = 12;
      var iconTop;
      if (size === 300) iconTop = 1;
      if (size === 400) iconTop = 3;
      if (size === 500) iconTop = 3;
      if (size === 600) iconTop = 4;
      var iconSize;
      if (size === 300) iconSize = 12;
      if (size === 400) iconSize = 14;
      if (size === 500) iconSize = 14;
      if (size === 600) iconSize = 16;
      var iconLeft = -iconSize - 4;
      if (size === 600) iconLeft = -iconSize;
      return /*#__PURE__*/React.createElement(Text, _extends({
        is: "li",
        position: "relative",
        marginY: "0.5em",
        size: size,
        listStyleType: icon ? 'none' : null,
        paddingLeft: icon ? paddingLeft : null
      }, props), icon && /*#__PURE__*/React.createElement(Icon, {
        icon: icon,
        color: iconColor,
        position: "absolute",
        size: iconSize,
        left: iconLeft,
        top: iconTop
      }), children);
    }
  }]);

  return ListItem;
}(PureComponent);

ListItem.displayName = "ListItem";

_defineProperty(ListItem, "propTypes", _objectSpread(_objectSpread({}, Text.propTypes), {}, {
  /**
   * When passed, adds a icon before the list item.
   * See Evergreen `Icon` for documentation.
   */
  icon: PropTypes.string,

  /**
   * The color of the icon.
   */
  iconColor: PropTypes.string
}));

export { ListItem as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJJY29uIiwiVGV4dCIsIkxpc3RJdGVtIiwicHJvcHMiLCJjaGlsZHJlbiIsInNpemUiLCJpY29uIiwiaWNvbkNvbG9yIiwicGFkZGluZ0xlZnQiLCJpY29uVG9wIiwiaWNvblNpemUiLCJpY29uTGVmdCIsInByb3BUeXBlcyIsInN0cmluZyJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9MaXN0SXRlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJy4uLy4uL2ljb24nXG5pbXBvcnQgVGV4dCBmcm9tICcuL1RleHQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3RJdGVtIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLi4uVGV4dC5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHBhc3NlZCwgYWRkcyBhIGljb24gYmVmb3JlIHRoZSBsaXN0IGl0ZW0uXG4gICAgICogU2VlIEV2ZXJncmVlbiBgSWNvbmAgZm9yIGRvY3VtZW50YXRpb24uXG4gICAgICovXG4gICAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBjb2xvciBvZiB0aGUgaWNvbi5cbiAgICAgKi9cbiAgICBpY29uQ29sb3I6IFByb3BUeXBlcy5zdHJpbmdcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBzaXplLCBpY29uLCBpY29uQ29sb3IsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzXG5cbiAgICBsZXQgcGFkZGluZ0xlZnRcbiAgICBpZiAoc2l6ZSA9PT0gMzAwKSBwYWRkaW5nTGVmdCA9IDRcbiAgICBpZiAoc2l6ZSA9PT0gNDAwKSBwYWRkaW5nTGVmdCA9IDhcbiAgICBpZiAoc2l6ZSA9PT0gNTAwKSBwYWRkaW5nTGVmdCA9IDhcbiAgICBpZiAoc2l6ZSA9PT0gNjAwKSBwYWRkaW5nTGVmdCA9IDEyXG5cbiAgICBsZXQgaWNvblRvcFxuICAgIGlmIChzaXplID09PSAzMDApIGljb25Ub3AgPSAxXG4gICAgaWYgKHNpemUgPT09IDQwMCkgaWNvblRvcCA9IDNcbiAgICBpZiAoc2l6ZSA9PT0gNTAwKSBpY29uVG9wID0gM1xuICAgIGlmIChzaXplID09PSA2MDApIGljb25Ub3AgPSA0XG5cbiAgICBsZXQgaWNvblNpemVcbiAgICBpZiAoc2l6ZSA9PT0gMzAwKSBpY29uU2l6ZSA9IDEyXG4gICAgaWYgKHNpemUgPT09IDQwMCkgaWNvblNpemUgPSAxNFxuICAgIGlmIChzaXplID09PSA1MDApIGljb25TaXplID0gMTRcbiAgICBpZiAoc2l6ZSA9PT0gNjAwKSBpY29uU2l6ZSA9IDE2XG5cbiAgICBsZXQgaWNvbkxlZnQgPSAtaWNvblNpemUgLSA0XG4gICAgaWYgKHNpemUgPT09IDYwMCkgaWNvbkxlZnQgPSAtaWNvblNpemVcblxuICAgIHJldHVybiAoXG4gICAgICA8VGV4dFxuICAgICAgICBpcz1cImxpXCJcbiAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXG4gICAgICAgIG1hcmdpblk9XCIwLjVlbVwiXG4gICAgICAgIHNpemU9e3NpemV9XG4gICAgICAgIGxpc3RTdHlsZVR5cGU9e2ljb24gPyAnbm9uZScgOiBudWxsfVxuICAgICAgICBwYWRkaW5nTGVmdD17aWNvbiA/IHBhZGRpbmdMZWZ0IDogbnVsbH1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgPlxuICAgICAgICB7aWNvbiAmJiAoXG4gICAgICAgICAgPEljb25cbiAgICAgICAgICAgIGljb249e2ljb259XG4gICAgICAgICAgICBjb2xvcj17aWNvbkNvbG9yfVxuICAgICAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXG4gICAgICAgICAgICBzaXplPXtpY29uU2l6ZX1cbiAgICAgICAgICAgIGxlZnQ9e2ljb25MZWZ0fVxuICAgICAgICAgICAgdG9wPXtpY29uVG9wfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvVGV4dD5cbiAgICApXG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsYUFBaEIsUUFBcUMsT0FBckM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQixZQUFyQjtBQUNBLE9BQU9DLElBQVAsTUFBaUIsUUFBakI7O0lBRXFCQyxROzs7Ozs7Ozs7Ozs7O1dBZ0JuQixrQkFBUztNQUNQLGtCQUFzRCxLQUFLQyxLQUEzRDtNQUFBLElBQVFDLFFBQVIsZUFBUUEsUUFBUjtNQUFBLElBQWtCQyxJQUFsQixlQUFrQkEsSUFBbEI7TUFBQSxJQUF3QkMsSUFBeEIsZUFBd0JBLElBQXhCO01BQUEsSUFBOEJDLFNBQTlCLGVBQThCQSxTQUE5QjtNQUFBLElBQTRDSixLQUE1Qzs7TUFFQSxJQUFJSyxXQUFKO01BQ0EsSUFBSUgsSUFBSSxLQUFLLEdBQWIsRUFBa0JHLFdBQVcsR0FBRyxDQUFkO01BQ2xCLElBQUlILElBQUksS0FBSyxHQUFiLEVBQWtCRyxXQUFXLEdBQUcsQ0FBZDtNQUNsQixJQUFJSCxJQUFJLEtBQUssR0FBYixFQUFrQkcsV0FBVyxHQUFHLENBQWQ7TUFDbEIsSUFBSUgsSUFBSSxLQUFLLEdBQWIsRUFBa0JHLFdBQVcsR0FBRyxFQUFkO01BRWxCLElBQUlDLE9BQUo7TUFDQSxJQUFJSixJQUFJLEtBQUssR0FBYixFQUFrQkksT0FBTyxHQUFHLENBQVY7TUFDbEIsSUFBSUosSUFBSSxLQUFLLEdBQWIsRUFBa0JJLE9BQU8sR0FBRyxDQUFWO01BQ2xCLElBQUlKLElBQUksS0FBSyxHQUFiLEVBQWtCSSxPQUFPLEdBQUcsQ0FBVjtNQUNsQixJQUFJSixJQUFJLEtBQUssR0FBYixFQUFrQkksT0FBTyxHQUFHLENBQVY7TUFFbEIsSUFBSUMsUUFBSjtNQUNBLElBQUlMLElBQUksS0FBSyxHQUFiLEVBQWtCSyxRQUFRLEdBQUcsRUFBWDtNQUNsQixJQUFJTCxJQUFJLEtBQUssR0FBYixFQUFrQkssUUFBUSxHQUFHLEVBQVg7TUFDbEIsSUFBSUwsSUFBSSxLQUFLLEdBQWIsRUFBa0JLLFFBQVEsR0FBRyxFQUFYO01BQ2xCLElBQUlMLElBQUksS0FBSyxHQUFiLEVBQWtCSyxRQUFRLEdBQUcsRUFBWDtNQUVsQixJQUFJQyxRQUFRLEdBQUcsQ0FBQ0QsUUFBRCxHQUFZLENBQTNCO01BQ0EsSUFBSUwsSUFBSSxLQUFLLEdBQWIsRUFBa0JNLFFBQVEsR0FBRyxDQUFDRCxRQUFaO01BRWxCLG9CQUNFLG9CQUFDLElBQUQ7UUFDRSxFQUFFLEVBQUMsSUFETDtRQUVFLFFBQVEsRUFBQyxVQUZYO1FBR0UsT0FBTyxFQUFDLE9BSFY7UUFJRSxJQUFJLEVBQUVMLElBSlI7UUFLRSxhQUFhLEVBQUVDLElBQUksR0FBRyxNQUFILEdBQVksSUFMakM7UUFNRSxXQUFXLEVBQUVBLElBQUksR0FBR0UsV0FBSCxHQUFpQjtNQU5wQyxHQU9NTCxLQVBOLEdBU0dHLElBQUksaUJBQ0gsb0JBQUMsSUFBRDtRQUNFLElBQUksRUFBRUEsSUFEUjtRQUVFLEtBQUssRUFBRUMsU0FGVDtRQUdFLFFBQVEsRUFBQyxVQUhYO1FBSUUsSUFBSSxFQUFFRyxRQUpSO1FBS0UsSUFBSSxFQUFFQyxRQUxSO1FBTUUsR0FBRyxFQUFFRjtNQU5QLEVBVkosRUFtQkdMLFFBbkJILENBREY7SUF1QkQ7Ozs7RUEvRG1DTixhOztBQUFqQkksUTs7Z0JBQUFBLFEsK0NBRWRELElBQUksQ0FBQ1csUztFQUVSO0FBQ0o7QUFDQTtBQUNBO0VBQ0lOLElBQUksRUFBRVAsU0FBUyxDQUFDYyxNOztFQUVoQjtBQUNKO0FBQ0E7RUFDSU4sU0FBUyxFQUFFUixTQUFTLENBQUNjOzs7U0FiSlgsUSJ9