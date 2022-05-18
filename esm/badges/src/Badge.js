import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _excluded = ["theme", "className", "color", "isInteractive", "isSolid"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { Strong } from '../../typography';
import { withTheme } from '../../theme';

var Badge = /*#__PURE__*/function (_PureComponent) {
  _inherits(Badge, _PureComponent);

  var _super = _createSuper(Badge);

  function Badge() {
    _classCallCheck(this, Badge);

    return _super.apply(this, arguments);
  }

  _createClass(Badge, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          className = _this$props.className,
          propsColor = _this$props.color,
          isInteractive = _this$props.isInteractive,
          isSolid = _this$props.isSolid,
          props = _objectWithoutProperties(_this$props, _excluded);

      var _theme$getBadgeProps = theme.getBadgeProps({
        color: propsColor,
        isSolid: isSolid
      }),
          color = _theme$getBadgeProps.color,
          backgroundColor = _theme$getBadgeProps.backgroundColor;

      var appearance = isInteractive ? 'interactive' : 'default';
      var classNames = cx(className, theme.getBadgeClassName(appearance));
      return /*#__PURE__*/React.createElement(Strong, _extends({
        size: 300
      }, Badge.styles, {
        color: color,
        backgroundColor: backgroundColor
      }, props, {
        className: classNames
      }));
    }
  }]);

  return Badge;
}(PureComponent);

Badge.displayName = "Badge";

_defineProperty(Badge, "propTypes", _objectSpread(_objectSpread({}, Strong.propTypes), {}, {
  /**
   * The color used for the badge.
   */
  color: PropTypes.string.isRequired,

  /**
   * Whether or not to apply hover/focus/active styles
   */
  isInteractive: PropTypes.bool,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired
}));

_defineProperty(Badge, "defaultProps", {
  color: 'neutral',
  isInteractive: false,
  isSolid: false
});

_defineProperty(Badge, "styles", {
  display: 'inline-block',
  boxSizing: 'border-box',
  height: 16,
  paddingTop: 0,
  paddingRight: 6,
  paddingBottom: 0,
  paddingLeft: 6,
  borderRadius: 2,
  textAlign: 'center',
  textDecoration: 'none',
  textTransform: 'uppercase'
});

export default withTheme(Badge);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJjeCIsIlByb3BUeXBlcyIsIlN0cm9uZyIsIndpdGhUaGVtZSIsIkJhZGdlIiwicHJvcHMiLCJ0aGVtZSIsImNsYXNzTmFtZSIsInByb3BzQ29sb3IiLCJjb2xvciIsImlzSW50ZXJhY3RpdmUiLCJpc1NvbGlkIiwiZ2V0QmFkZ2VQcm9wcyIsImJhY2tncm91bmRDb2xvciIsImFwcGVhcmFuY2UiLCJjbGFzc05hbWVzIiwiZ2V0QmFkZ2VDbGFzc05hbWUiLCJzdHlsZXMiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYm9vbCIsIm9iamVjdCIsImRpc3BsYXkiLCJib3hTaXppbmciLCJoZWlnaHQiLCJwYWRkaW5nVG9wIiwicGFkZGluZ1JpZ2h0IiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmdMZWZ0IiwiYm9yZGVyUmFkaXVzIiwidGV4dEFsaWduIiwidGV4dERlY29yYXRpb24iLCJ0ZXh0VHJhbnNmb3JtIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2JhZGdlcy9zcmMvQmFkZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgU3Ryb25nIH0gZnJvbSAnLi4vLi4vdHlwb2dyYXBoeSdcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuXG5jbGFzcyBCYWRnZSBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC4uLlN0cm9uZy5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29sb3IgdXNlZCBmb3IgdGhlIGJhZGdlLlxuICAgICAqL1xuICAgIGNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIG9yIG5vdCB0byBhcHBseSBob3Zlci9mb2N1cy9hY3RpdmUgc3R5bGVzXG4gICAgICovXG4gICAgaXNJbnRlcmFjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBUaGVtZSBwcm92aWRlZCBieSBUaGVtZVByb3ZpZGVyLlxuICAgICAqL1xuICAgIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY29sb3I6ICduZXV0cmFsJyxcbiAgICBpc0ludGVyYWN0aXZlOiBmYWxzZSxcbiAgICBpc1NvbGlkOiBmYWxzZVxuICB9XG5cbiAgc3RhdGljIHN0eWxlcyA9IHtcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBoZWlnaHQ6IDE2LFxuICAgIHBhZGRpbmdUb3A6IDAsXG4gICAgcGFkZGluZ1JpZ2h0OiA2LFxuICAgIHBhZGRpbmdCb3R0b206IDAsXG4gICAgcGFkZGluZ0xlZnQ6IDYsXG4gICAgYm9yZGVyUmFkaXVzOiAyLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJ1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRoZW1lLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgY29sb3I6IHByb3BzQ29sb3IsXG4gICAgICBpc0ludGVyYWN0aXZlLFxuICAgICAgaXNTb2xpZCxcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IHsgY29sb3IsIGJhY2tncm91bmRDb2xvciB9ID0gdGhlbWUuZ2V0QmFkZ2VQcm9wcyh7XG4gICAgICBjb2xvcjogcHJvcHNDb2xvcixcbiAgICAgIGlzU29saWRcbiAgICB9KVxuXG4gICAgY29uc3QgYXBwZWFyYW5jZSA9IGlzSW50ZXJhY3RpdmUgPyAnaW50ZXJhY3RpdmUnIDogJ2RlZmF1bHQnXG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IGN4KGNsYXNzTmFtZSwgdGhlbWUuZ2V0QmFkZ2VDbGFzc05hbWUoYXBwZWFyYW5jZSkpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFN0cm9uZ1xuICAgICAgICBzaXplPXszMDB9XG4gICAgICAgIHsuLi5CYWRnZS5zdHlsZXN9XG4gICAgICAgIGNvbG9yPXtjb2xvcn1cbiAgICAgICAgYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3J9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKEJhZGdlKVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxhQUFoQixRQUFxQyxPQUFyQztBQUNBLE9BQU9DLEVBQVAsTUFBZSxZQUFmO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLE1BQVQsUUFBdUIsa0JBQXZCO0FBQ0EsU0FBU0MsU0FBVCxRQUEwQixhQUExQjs7SUFFTUMsSzs7Ozs7Ozs7Ozs7OztXQXdDSixrQkFBUztNQUNQLGtCQU9JLEtBQUtDLEtBUFQ7TUFBQSxJQUNFQyxLQURGLGVBQ0VBLEtBREY7TUFBQSxJQUVFQyxTQUZGLGVBRUVBLFNBRkY7TUFBQSxJQUdTQyxVQUhULGVBR0VDLEtBSEY7TUFBQSxJQUlFQyxhQUpGLGVBSUVBLGFBSkY7TUFBQSxJQUtFQyxPQUxGLGVBS0VBLE9BTEY7TUFBQSxJQU1LTixLQU5MOztNQVNBLDJCQUFtQ0MsS0FBSyxDQUFDTSxhQUFOLENBQW9CO1FBQ3JESCxLQUFLLEVBQUVELFVBRDhDO1FBRXJERyxPQUFPLEVBQVBBO01BRnFELENBQXBCLENBQW5DO01BQUEsSUFBUUYsS0FBUix3QkFBUUEsS0FBUjtNQUFBLElBQWVJLGVBQWYsd0JBQWVBLGVBQWY7O01BS0EsSUFBTUMsVUFBVSxHQUFHSixhQUFhLEdBQUcsYUFBSCxHQUFtQixTQUFuRDtNQUNBLElBQU1LLFVBQVUsR0FBR2YsRUFBRSxDQUFDTyxTQUFELEVBQVlELEtBQUssQ0FBQ1UsaUJBQU4sQ0FBd0JGLFVBQXhCLENBQVosQ0FBckI7TUFFQSxvQkFDRSxvQkFBQyxNQUFEO1FBQ0UsSUFBSSxFQUFFO01BRFIsR0FFTVYsS0FBSyxDQUFDYSxNQUZaO1FBR0UsS0FBSyxFQUFFUixLQUhUO1FBSUUsZUFBZSxFQUFFSTtNQUpuQixHQUtNUixLQUxOO1FBTUUsU0FBUyxFQUFFVTtNQU5iLEdBREY7SUFVRDs7OztFQXBFaUJoQixhOztBQUFkSyxLOztnQkFBQUEsSywrQ0FFQ0YsTUFBTSxDQUFDZ0IsUztFQUVWO0FBQ0o7QUFDQTtFQUNJVCxLQUFLLEVBQUVSLFNBQVMsQ0FBQ2tCLE1BQVYsQ0FBaUJDLFU7O0VBRXhCO0FBQ0o7QUFDQTtFQUNJVixhQUFhLEVBQUVULFNBQVMsQ0FBQ29CLEk7O0VBRXpCO0FBQ0o7QUFDQTtFQUNJZixLQUFLLEVBQUVMLFNBQVMsQ0FBQ3FCLE1BQVYsQ0FBaUJGOzs7Z0JBakJ0QmhCLEssa0JBb0JrQjtFQUNwQkssS0FBSyxFQUFFLFNBRGE7RUFFcEJDLGFBQWEsRUFBRSxLQUZLO0VBR3BCQyxPQUFPLEVBQUU7QUFIVyxDOztnQkFwQmxCUCxLLFlBMEJZO0VBQ2RtQixPQUFPLEVBQUUsY0FESztFQUVkQyxTQUFTLEVBQUUsWUFGRztFQUdkQyxNQUFNLEVBQUUsRUFITTtFQUlkQyxVQUFVLEVBQUUsQ0FKRTtFQUtkQyxZQUFZLEVBQUUsQ0FMQTtFQU1kQyxhQUFhLEVBQUUsQ0FORDtFQU9kQyxXQUFXLEVBQUUsQ0FQQztFQVFkQyxZQUFZLEVBQUUsQ0FSQTtFQVNkQyxTQUFTLEVBQUUsUUFURztFQVVkQyxjQUFjLEVBQUUsTUFWRjtFQVdkQyxhQUFhLEVBQUU7QUFYRCxDOztBQTZDbEIsZUFBZTlCLFNBQVMsQ0FBQ0MsS0FBRCxDQUF4QiJ9