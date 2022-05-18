import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _excluded = ["className", "css", "theme", "size", "color", "fontFamily", "marginTop"],
    _excluded2 = ["marginTop"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import cx from 'classnames';
import { css as glamorCss } from 'glamor';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from 'ui-box';
import { withTheme } from '../../theme';

var Text = /*#__PURE__*/function (_PureComponent) {
  _inherits(Text, _PureComponent);

  var _super = _createSuper(Text);

  function Text() {
    _classCallCheck(this, Text);

    return _super.apply(this, arguments);
  }

  _createClass(Text, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          css = _this$props.css,
          theme = _this$props.theme,
          size = _this$props.size,
          color = _this$props.color,
          fontFamily = _this$props.fontFamily,
          marginTop = _this$props.marginTop,
          props = _objectWithoutProperties(_this$props, _excluded);

      var _theme$getTextStyle = theme.getTextStyle(size),
          defaultMarginTop = _theme$getTextStyle.marginTop,
          textStyle = _objectWithoutProperties(_theme$getTextStyle, _excluded2);

      var finalMarginTop = marginTop === 'default' ? defaultMarginTop : marginTop;
      return /*#__PURE__*/React.createElement(Box, _extends({
        is: "span",
        color: theme.getTextColor(color),
        fontFamily: theme.getFontFamily(fontFamily),
        marginTop: finalMarginTop
      }, textStyle, {
        className: cx(className, css ? glamorCss(css).toString() : undefined)
      }, props));
    }
  }]);

  return Text;
}(PureComponent);

Text.displayName = "Text";

_defineProperty(Text, "propTypes", _objectSpread(_objectSpread({}, Box.propTypes), {}, {
  /**
   * Size of the text style.
   * Can be: 300, 400, 500, 600.
   */
  size: PropTypes.oneOf([300, 400, 500, 600]).isRequired,

  /**
   * Font family.
   * Can be: `ui`, `display` or `mono` or a custom font family.
   */
  fontFamily: PropTypes.string.isRequired,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired
}));

_defineProperty(Text, "defaultProps", {
  size: 400,
  color: 'default',
  fontFamily: 'ui'
});

export default withTheme(Text);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjeCIsImNzcyIsImdsYW1vckNzcyIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIlByb3BUeXBlcyIsIkJveCIsIndpdGhUaGVtZSIsIlRleHQiLCJwcm9wcyIsImNsYXNzTmFtZSIsInRoZW1lIiwic2l6ZSIsImNvbG9yIiwiZm9udEZhbWlseSIsIm1hcmdpblRvcCIsImdldFRleHRTdHlsZSIsImRlZmF1bHRNYXJnaW5Ub3AiLCJ0ZXh0U3R5bGUiLCJmaW5hbE1hcmdpblRvcCIsImdldFRleHRDb2xvciIsImdldEZvbnRGYW1pbHkiLCJ0b1N0cmluZyIsInVuZGVmaW5lZCIsInByb3BUeXBlcyIsIm9uZU9mIiwiaXNSZXF1aXJlZCIsInN0cmluZyIsIm9iamVjdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9UZXh0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IHsgY3NzIGFzIGdsYW1vckNzcyB9IGZyb20gJ2dsYW1vcidcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgQm94IGZyb20gJ3VpLWJveCdcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuXG5jbGFzcyBUZXh0IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIEJveCBjb21wb25lbnQgYXMgdGhlIGJhc2UuXG4gICAgICovXG4gICAgLi4uQm94LnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIFNpemUgb2YgdGhlIHRleHQgc3R5bGUuXG4gICAgICogQ2FuIGJlOiAzMDAsIDQwMCwgNTAwLCA2MDAuXG4gICAgICovXG4gICAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFszMDAsIDQwMCwgNTAwLCA2MDBdKS5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogRm9udCBmYW1pbHkuXG4gICAgICogQ2FuIGJlOiBgdWlgLCBgZGlzcGxheWAgb3IgYG1vbm9gIG9yIGEgY3VzdG9tIGZvbnQgZmFtaWx5LlxuICAgICAqL1xuICAgIGZvbnRGYW1pbHk6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZW1lIHByb3ZpZGVkIGJ5IFRoZW1lUHJvdmlkZXIuXG4gICAgICovXG4gICAgdGhlbWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBzaXplOiA0MDAsXG4gICAgY29sb3I6ICdkZWZhdWx0JyxcbiAgICBmb250RmFtaWx5OiAndWknXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2xhc3NOYW1lLFxuICAgICAgY3NzLFxuICAgICAgdGhlbWUsXG4gICAgICBzaXplLFxuICAgICAgY29sb3IsXG4gICAgICBmb250RmFtaWx5LFxuICAgICAgbWFyZ2luVG9wLFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgeyBtYXJnaW5Ub3A6IGRlZmF1bHRNYXJnaW5Ub3AsIC4uLnRleHRTdHlsZSB9ID0gdGhlbWUuZ2V0VGV4dFN0eWxlKFxuICAgICAgc2l6ZVxuICAgIClcblxuICAgIGNvbnN0IGZpbmFsTWFyZ2luVG9wID1cbiAgICAgIG1hcmdpblRvcCA9PT0gJ2RlZmF1bHQnID8gZGVmYXVsdE1hcmdpblRvcCA6IG1hcmdpblRvcFxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3hcbiAgICAgICAgaXM9XCJzcGFuXCJcbiAgICAgICAgY29sb3I9e3RoZW1lLmdldFRleHRDb2xvcihjb2xvcil9XG4gICAgICAgIGZvbnRGYW1pbHk9e3RoZW1lLmdldEZvbnRGYW1pbHkoZm9udEZhbWlseSl9XG4gICAgICAgIG1hcmdpblRvcD17ZmluYWxNYXJnaW5Ub3B9XG4gICAgICAgIHsuLi50ZXh0U3R5bGV9XG4gICAgICAgIGNsYXNzTmFtZT17Y3goY2xhc3NOYW1lLCBjc3MgPyBnbGFtb3JDc3MoY3NzKS50b1N0cmluZygpIDogdW5kZWZpbmVkKX1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKFRleHQpXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxFQUFQLE1BQWUsWUFBZjtBQUNBLFNBQVNDLEdBQUcsSUFBSUMsU0FBaEIsUUFBaUMsUUFBakM7QUFDQSxPQUFPQyxLQUFQLElBQWdCQyxhQUFoQixRQUFxQyxPQUFyQztBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxHQUFQLE1BQWdCLFFBQWhCO0FBQ0EsU0FBU0MsU0FBVCxRQUEwQixhQUExQjs7SUFFTUMsSTs7Ozs7Ozs7Ozs7OztXQStCSixrQkFBUztNQUNQLGtCQVNJLEtBQUtDLEtBVFQ7TUFBQSxJQUNFQyxTQURGLGVBQ0VBLFNBREY7TUFBQSxJQUVFVCxHQUZGLGVBRUVBLEdBRkY7TUFBQSxJQUdFVSxLQUhGLGVBR0VBLEtBSEY7TUFBQSxJQUlFQyxJQUpGLGVBSUVBLElBSkY7TUFBQSxJQUtFQyxLQUxGLGVBS0VBLEtBTEY7TUFBQSxJQU1FQyxVQU5GLGVBTUVBLFVBTkY7TUFBQSxJQU9FQyxTQVBGLGVBT0VBLFNBUEY7TUFBQSxJQVFLTixLQVJMOztNQVdBLDBCQUFzREUsS0FBSyxDQUFDSyxZQUFOLENBQ3BESixJQURvRCxDQUF0RDtNQUFBLElBQW1CSyxnQkFBbkIsdUJBQVFGLFNBQVI7TUFBQSxJQUF3Q0csU0FBeEM7O01BSUEsSUFBTUMsY0FBYyxHQUNsQkosU0FBUyxLQUFLLFNBQWQsR0FBMEJFLGdCQUExQixHQUE2Q0YsU0FEL0M7TUFHQSxvQkFDRSxvQkFBQyxHQUFEO1FBQ0UsRUFBRSxFQUFDLE1BREw7UUFFRSxLQUFLLEVBQUVKLEtBQUssQ0FBQ1MsWUFBTixDQUFtQlAsS0FBbkIsQ0FGVDtRQUdFLFVBQVUsRUFBRUYsS0FBSyxDQUFDVSxhQUFOLENBQW9CUCxVQUFwQixDQUhkO1FBSUUsU0FBUyxFQUFFSztNQUpiLEdBS01ELFNBTE47UUFNRSxTQUFTLEVBQUVsQixFQUFFLENBQUNVLFNBQUQsRUFBWVQsR0FBRyxHQUFHQyxTQUFTLENBQUNELEdBQUQsQ0FBVCxDQUFlcUIsUUFBZixFQUFILEdBQStCQyxTQUE5QztNQU5mLEdBT01kLEtBUE4sRUFERjtJQVdEOzs7O0VBN0RnQkwsYTs7QUFBYkksSTs7Z0JBQUFBLEksK0NBS0NGLEdBQUcsQ0FBQ2tCLFM7RUFFUDtBQUNKO0FBQ0E7QUFDQTtFQUNJWixJQUFJLEVBQUVQLFNBQVMsQ0FBQ29CLEtBQVYsQ0FBZ0IsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsQ0FBaEIsRUFBc0NDLFU7O0VBRTVDO0FBQ0o7QUFDQTtBQUNBO0VBQ0laLFVBQVUsRUFBRVQsU0FBUyxDQUFDc0IsTUFBVixDQUFpQkQsVTs7RUFFN0I7QUFDSjtBQUNBO0VBQ0lmLEtBQUssRUFBRU4sU0FBUyxDQUFDdUIsTUFBVixDQUFpQkY7OztnQkF0QnRCbEIsSSxrQkF5QmtCO0VBQ3BCSSxJQUFJLEVBQUUsR0FEYztFQUVwQkMsS0FBSyxFQUFFLFNBRmE7RUFHcEJDLFVBQVUsRUFBRTtBQUhRLEM7O0FBdUN4QixlQUFlUCxTQUFTLENBQUNDLElBQUQsQ0FBeEIifQ==