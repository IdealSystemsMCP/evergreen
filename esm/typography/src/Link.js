import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _excluded = ["theme", "className", "color"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { withTheme } from '../../theme';
import Text from './Text';

var Link = /*#__PURE__*/function (_PureComponent) {
  _inherits(Link, _PureComponent);

  var _super = _createSuper(Link);

  function Link() {
    _classCallCheck(this, Link);

    return _super.apply(this, arguments);
  }

  _createClass(Link, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          className = _this$props.className,
          color = _this$props.color,
          props = _objectWithoutProperties(_this$props, _excluded);

      var themedClassName = theme.getLinkClassName(color);
      return /*#__PURE__*/React.createElement(Text, _extends({
        is: "a",
        className: cx(className, themedClassName),
        textDecoration: "underline",
        color: null
      }, props));
    }
  }]);

  return Link;
}(PureComponent);

Link.displayName = "Link";

_defineProperty(Link, "propTypes", _objectSpread(_objectSpread({}, Text.propTypes), {}, {
  /**
   * This attribute names a relationship of the linked document to the current document.
   * Common use case is: rel="noopener noreferrer".
   */
  rel: PropTypes.string,

  /**
   * Specifies the URL of the linked resource. A URL might be absolute or relative.
   */
  href: PropTypes.string,

  /**
   * Target atrribute, common use case is target="_blank."
   */
  target: PropTypes.string,

  /**
   * The color (and styling) of the Link. Can be default, blue, green or neutral.
   */
  color: PropTypes.string.isRequired,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired,

  /**
   * Class name passed to the link.
   * Only use if you know what you are doing.
   */
  className: PropTypes.string
}));

_defineProperty(Link, "defaultProps", {
  color: 'default'
});

export default withTheme(Link);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJjeCIsIndpdGhUaGVtZSIsIlRleHQiLCJMaW5rIiwicHJvcHMiLCJ0aGVtZSIsImNsYXNzTmFtZSIsImNvbG9yIiwidGhlbWVkQ2xhc3NOYW1lIiwiZ2V0TGlua0NsYXNzTmFtZSIsInByb3BUeXBlcyIsInJlbCIsInN0cmluZyIsImhyZWYiLCJ0YXJnZXQiLCJpc1JlcXVpcmVkIiwib2JqZWN0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3R5cG9ncmFwaHkvc3JjL0xpbmsuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5pbXBvcnQgVGV4dCBmcm9tICcuL1RleHQnXG5cbmNsYXNzIExpbmsgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAuLi5UZXh0LnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIFRoaXMgYXR0cmlidXRlIG5hbWVzIGEgcmVsYXRpb25zaGlwIG9mIHRoZSBsaW5rZWQgZG9jdW1lbnQgdG8gdGhlIGN1cnJlbnQgZG9jdW1lbnQuXG4gICAgICogQ29tbW9uIHVzZSBjYXNlIGlzOiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIuXG4gICAgICovXG4gICAgcmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogU3BlY2lmaWVzIHRoZSBVUkwgb2YgdGhlIGxpbmtlZCByZXNvdXJjZS4gQSBVUkwgbWlnaHQgYmUgYWJzb2x1dGUgb3IgcmVsYXRpdmUuXG4gICAgICovXG4gICAgaHJlZjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFRhcmdldCBhdHJyaWJ1dGUsIGNvbW1vbiB1c2UgY2FzZSBpcyB0YXJnZXQ9XCJfYmxhbmsuXCJcbiAgICAgKi9cbiAgICB0YXJnZXQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29sb3IgKGFuZCBzdHlsaW5nKSBvZiB0aGUgTGluay4gQ2FuIGJlIGRlZmF1bHQsIGJsdWUsIGdyZWVuIG9yIG5ldXRyYWwuXG4gICAgICovXG4gICAgY29sb3I6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZW1lIHByb3ZpZGVkIGJ5IFRoZW1lUHJvdmlkZXIuXG4gICAgICovXG4gICAgdGhlbWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIENsYXNzIG5hbWUgcGFzc2VkIHRvIHRoZSBsaW5rLlxuICAgICAqIE9ubHkgdXNlIGlmIHlvdSBrbm93IHdoYXQgeW91IGFyZSBkb2luZy5cbiAgICAgKi9cbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY29sb3I6ICdkZWZhdWx0J1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGhlbWUsIGNsYXNzTmFtZSwgY29sb3IsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCB0aGVtZWRDbGFzc05hbWUgPSB0aGVtZS5nZXRMaW5rQ2xhc3NOYW1lKGNvbG9yKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUZXh0XG4gICAgICAgIGlzPVwiYVwiXG4gICAgICAgIGNsYXNzTmFtZT17Y3goY2xhc3NOYW1lLCB0aGVtZWRDbGFzc05hbWUpfVxuICAgICAgICB0ZXh0RGVjb3JhdGlvbj1cInVuZGVybGluZVwiXG4gICAgICAgIGNvbG9yPXtudWxsfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoTGluaylcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsYUFBaEIsUUFBcUMsT0FBckM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsRUFBUCxNQUFlLFlBQWY7QUFDQSxTQUFTQyxTQUFULFFBQTBCLGFBQTFCO0FBQ0EsT0FBT0MsSUFBUCxNQUFpQixRQUFqQjs7SUFFTUMsSTs7Ozs7Ozs7Ozs7OztXQXlDSixrQkFBUztNQUNQLGtCQUE4QyxLQUFLQyxLQUFuRDtNQUFBLElBQVFDLEtBQVIsZUFBUUEsS0FBUjtNQUFBLElBQWVDLFNBQWYsZUFBZUEsU0FBZjtNQUFBLElBQTBCQyxLQUExQixlQUEwQkEsS0FBMUI7TUFBQSxJQUFvQ0gsS0FBcEM7O01BRUEsSUFBTUksZUFBZSxHQUFHSCxLQUFLLENBQUNJLGdCQUFOLENBQXVCRixLQUF2QixDQUF4QjtNQUVBLG9CQUNFLG9CQUFDLElBQUQ7UUFDRSxFQUFFLEVBQUMsR0FETDtRQUVFLFNBQVMsRUFBRVAsRUFBRSxDQUFDTSxTQUFELEVBQVlFLGVBQVosQ0FGZjtRQUdFLGNBQWMsRUFBQyxXQUhqQjtRQUlFLEtBQUssRUFBRTtNQUpULEdBS01KLEtBTE4sRUFERjtJQVNEOzs7O0VBdkRnQk4sYTs7QUFBYkssSTs7Z0JBQUFBLEksK0NBRUNELElBQUksQ0FBQ1EsUztFQUVSO0FBQ0o7QUFDQTtBQUNBO0VBQ0lDLEdBQUcsRUFBRVosU0FBUyxDQUFDYSxNOztFQUVmO0FBQ0o7QUFDQTtFQUNJQyxJQUFJLEVBQUVkLFNBQVMsQ0FBQ2EsTTs7RUFFaEI7QUFDSjtBQUNBO0VBQ0lFLE1BQU0sRUFBRWYsU0FBUyxDQUFDYSxNOztFQUVsQjtBQUNKO0FBQ0E7RUFDSUwsS0FBSyxFQUFFUixTQUFTLENBQUNhLE1BQVYsQ0FBaUJHLFU7O0VBRXhCO0FBQ0o7QUFDQTtFQUNJVixLQUFLLEVBQUVOLFNBQVMsQ0FBQ2lCLE1BQVYsQ0FBaUJELFU7O0VBRXhCO0FBQ0o7QUFDQTtBQUNBO0VBQ0lULFNBQVMsRUFBRVAsU0FBUyxDQUFDYTs7O2dCQWxDbkJULEksa0JBcUNrQjtFQUNwQkksS0FBSyxFQUFFO0FBRGEsQzs7QUFxQnhCLGVBQWVOLFNBQVMsQ0FBQ0UsSUFBRCxDQUF4QiJ9