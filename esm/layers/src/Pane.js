import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _excluded = ["theme", "background", "elevation", "hoverElevation", "activeElevation", "border", "borderTop", "borderRight", "borderBottom", "borderLeft", "css"];

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
var StringAndBoolPropType = PropTypes.oneOfType([PropTypes.string, PropTypes.bool]);

var Pane = /*#__PURE__*/function (_PureComponent) {
  _inherits(Pane, _PureComponent);

  var _super = _createSuper(Pane);

  function Pane() {
    var _this;

    _classCallCheck(this, Pane);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "getHoverElevationStyle", function (hoverElevation, css) {
      var theme = _this.props.theme;
      if (!Number.isInteger(hoverElevation)) return {};
      return {
        transitionDuration: '150ms',
        transitionProperty: 'box-shadow, transform',
        transitionTimingFunction: "cubic-bezier(0.0, 0.0, 0.2, 1)",
        ':hover': _objectSpread(_objectSpread({}, css[':hover'] || {}), {}, {
          transform: 'translateY(-2px)',
          boxShadow: theme.getElevation(hoverElevation)
        })
      };
    });

    _defineProperty(_assertThisInitialized(_this), "getActiveElevationStyle", function (activeElevation, css) {
      var theme = _this.props.theme;
      if (!Number.isInteger(activeElevation)) return {};
      return {
        ':active': _objectSpread(_objectSpread({}, css[':active'] || {}), {}, {
          transform: 'translateY(-1px)',
          boxShadow: theme.getElevation(activeElevation)
        })
      };
    });

    _defineProperty(_assertThisInitialized(_this), "getBorderSideProperty", function (_ref) {
      var borderSideProperty = _ref.borderSideProperty,
          border = _ref.border;
      var theme = _this.props.theme;

      if (Object.prototype.hasOwnProperty.call(theme.colors.border, borderSideProperty)) {
        return "1px solid ".concat(theme.colors.border[borderSideProperty]);
      }

      if (borderSideProperty === true) {
        return "1px solid ".concat(theme.colors.border["default"]);
      }

      if (borderSideProperty === false) {
        return null;
      }

      if (Object.prototype.hasOwnProperty.call(theme.colors.border, border)) {
        return "1px solid ".concat(theme.colors.border[border]);
      }

      if (border === true) {
        return "1px solid ".concat(theme.colors.border["default"]);
      }

      return borderSideProperty;
    });

    return _this;
  }

  _createClass(Pane, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          theme = _this$props.theme,
          background = _this$props.background,
          elevation = _this$props.elevation,
          hoverElevation = _this$props.hoverElevation,
          activeElevation = _this$props.activeElevation,
          border = _this$props.border,
          borderTop = _this$props.borderTop,
          borderRight = _this$props.borderRight,
          borderBottom = _this$props.borderBottom,
          borderLeft = _this$props.borderLeft,
          _this$props$css = _this$props.css,
          css = _this$props$css === void 0 ? {} : _this$props$css,
          props = _objectWithoutProperties(_this$props, _excluded);

      var elevationStyle = theme.getElevation(elevation);
      var hoverElevationStyle = this.getHoverElevationStyle(hoverElevation, css);
      var activeElevationStyle = this.getActiveElevationStyle(activeElevation, css);

      var _map = [borderTop, borderRight, borderBottom, borderLeft].map(function (borderSideProperty) {
        return _this2.getBorderSideProperty({
          borderSideProperty: borderSideProperty,
          border: border
        });
      }),
          _map2 = _slicedToArray(_map, 4),
          _borderTop = _map2[0],
          _borderRight = _map2[1],
          _borderBottom = _map2[2],
          _borderLeft = _map2[3];

      var className = cx(props.className, glamorCss(_objectSpread(_objectSpread(_objectSpread({}, css), hoverElevationStyle), activeElevationStyle)).toString());
      return /*#__PURE__*/React.createElement(Box, _extends({
        borderTop: _borderTop,
        borderRight: _borderRight,
        borderBottom: _borderBottom,
        borderLeft: _borderLeft,
        boxShadow: elevationStyle,
        background: theme.getBackground(background)
      }, props, {
        className: className
      }));
    }
  }]);

  return Pane;
}(PureComponent);

Pane.displayName = "Pane";

_defineProperty(Pane, "propTypes", _objectSpread(_objectSpread({}, Box.propTypes), {}, {
  /**
   * Background property.
   * `tint1`, `tint2` etc. from `theme.colors.background` are available.
   */
  background: PropTypes.string,

  /**
   * Elevation of the Pane.
   * Values: 0, 1, 2, 3, 4.
   */
  elevation: PropTypes.oneOf([0, 1, 2, 3, 4]),

  /**
   * Elevation of the Pane on hover. Might get deprecated.
   * Values: 0, 1, 2, 3, 4.
   */
  hoverElevation: PropTypes.oneOf([0, 1, 2, 3, 4]),

  /**
   * Elevation of the Pane on click. Might get deprecated.
   * Values: 0, 1, 2, 3, 4.
   */
  activeElevation: PropTypes.oneOf([0, 1, 2, 3, 4]),

  /**
   * Can be a explicit border value or a boolean.
   * Values: true, muted, default.
   */
  border: StringAndBoolPropType,

  /**
   * Can be a explicit border value or a boolean.
   * Values: true, extraMuted, muted, default.
   */
  borderTop: StringAndBoolPropType,

  /**
   * Can be a explicit border value or a boolean.
   * Values: true, extraMuted, muted, default.
   */
  borderRight: StringAndBoolPropType,

  /**
   * Can be a explicit border value or a boolean.
   * Values: true, extraMuted, muted, default.
   */
  borderBottom: StringAndBoolPropType,

  /**
   * Can be a explicit border value or a boolean.
   * Values: true, extraMuted, muted, default.
   */
  borderLeft: StringAndBoolPropType,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired
}));

export default withTheme(Pane);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjeCIsImNzcyIsImdsYW1vckNzcyIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIlByb3BUeXBlcyIsIkJveCIsIndpdGhUaGVtZSIsIlN0cmluZ0FuZEJvb2xQcm9wVHlwZSIsIm9uZU9mVHlwZSIsInN0cmluZyIsImJvb2wiLCJQYW5lIiwiaG92ZXJFbGV2YXRpb24iLCJ0aGVtZSIsInByb3BzIiwiTnVtYmVyIiwiaXNJbnRlZ2VyIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwidHJhbnNpdGlvblByb3BlcnR5IiwidHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uIiwidHJhbnNmb3JtIiwiYm94U2hhZG93IiwiZ2V0RWxldmF0aW9uIiwiYWN0aXZlRWxldmF0aW9uIiwiYm9yZGVyU2lkZVByb3BlcnR5IiwiYm9yZGVyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiY29sb3JzIiwiYmFja2dyb3VuZCIsImVsZXZhdGlvbiIsImJvcmRlclRvcCIsImJvcmRlclJpZ2h0IiwiYm9yZGVyQm90dG9tIiwiYm9yZGVyTGVmdCIsImVsZXZhdGlvblN0eWxlIiwiaG92ZXJFbGV2YXRpb25TdHlsZSIsImdldEhvdmVyRWxldmF0aW9uU3R5bGUiLCJhY3RpdmVFbGV2YXRpb25TdHlsZSIsImdldEFjdGl2ZUVsZXZhdGlvblN0eWxlIiwibWFwIiwiZ2V0Qm9yZGVyU2lkZVByb3BlcnR5IiwiX2JvcmRlclRvcCIsIl9ib3JkZXJSaWdodCIsIl9ib3JkZXJCb3R0b20iLCJfYm9yZGVyTGVmdCIsImNsYXNzTmFtZSIsInRvU3RyaW5nIiwiZ2V0QmFja2dyb3VuZCIsInByb3BUeXBlcyIsIm9uZU9mIiwib2JqZWN0IiwiaXNSZXF1aXJlZCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvc3JjL1BhbmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgeyBjc3MgYXMgZ2xhbW9yQ3NzIH0gZnJvbSAnZ2xhbW9yJ1xuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBCb3ggZnJvbSAndWktYm94J1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5cbmNvbnN0IFN0cmluZ0FuZEJvb2xQcm9wVHlwZSA9IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICBQcm9wVHlwZXMuc3RyaW5nLFxuICBQcm9wVHlwZXMuYm9vbFxuXSlcblxuY2xhc3MgUGFuZSBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBCb3ggY29tcG9uZW50IGFzIHRoZSBiYXNlLlxuICAgICAqL1xuICAgIC4uLkJveC5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBCYWNrZ3JvdW5kIHByb3BlcnR5LlxuICAgICAqIGB0aW50MWAsIGB0aW50MmAgZXRjLiBmcm9tIGB0aGVtZS5jb2xvcnMuYmFja2dyb3VuZGAgYXJlIGF2YWlsYWJsZS5cbiAgICAgKi9cbiAgICBiYWNrZ3JvdW5kOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogRWxldmF0aW9uIG9mIHRoZSBQYW5lLlxuICAgICAqIFZhbHVlczogMCwgMSwgMiwgMywgNC5cbiAgICAgKi9cbiAgICBlbGV2YXRpb246IFByb3BUeXBlcy5vbmVPZihbMCwgMSwgMiwgMywgNF0pLFxuXG4gICAgLyoqXG4gICAgICogRWxldmF0aW9uIG9mIHRoZSBQYW5lIG9uIGhvdmVyLiBNaWdodCBnZXQgZGVwcmVjYXRlZC5cbiAgICAgKiBWYWx1ZXM6IDAsIDEsIDIsIDMsIDQuXG4gICAgICovXG4gICAgaG92ZXJFbGV2YXRpb246IFByb3BUeXBlcy5vbmVPZihbMCwgMSwgMiwgMywgNF0pLFxuXG4gICAgLyoqXG4gICAgICogRWxldmF0aW9uIG9mIHRoZSBQYW5lIG9uIGNsaWNrLiBNaWdodCBnZXQgZGVwcmVjYXRlZC5cbiAgICAgKiBWYWx1ZXM6IDAsIDEsIDIsIDMsIDQuXG4gICAgICovXG4gICAgYWN0aXZlRWxldmF0aW9uOiBQcm9wVHlwZXMub25lT2YoWzAsIDEsIDIsIDMsIDRdKSxcblxuICAgIC8qKlxuICAgICAqIENhbiBiZSBhIGV4cGxpY2l0IGJvcmRlciB2YWx1ZSBvciBhIGJvb2xlYW4uXG4gICAgICogVmFsdWVzOiB0cnVlLCBtdXRlZCwgZGVmYXVsdC5cbiAgICAgKi9cbiAgICBib3JkZXI6IFN0cmluZ0FuZEJvb2xQcm9wVHlwZSxcblxuICAgIC8qKlxuICAgICAqIENhbiBiZSBhIGV4cGxpY2l0IGJvcmRlciB2YWx1ZSBvciBhIGJvb2xlYW4uXG4gICAgICogVmFsdWVzOiB0cnVlLCBleHRyYU11dGVkLCBtdXRlZCwgZGVmYXVsdC5cbiAgICAgKi9cbiAgICBib3JkZXJUb3A6IFN0cmluZ0FuZEJvb2xQcm9wVHlwZSxcblxuICAgIC8qKlxuICAgICAqIENhbiBiZSBhIGV4cGxpY2l0IGJvcmRlciB2YWx1ZSBvciBhIGJvb2xlYW4uXG4gICAgICogVmFsdWVzOiB0cnVlLCBleHRyYU11dGVkLCBtdXRlZCwgZGVmYXVsdC5cbiAgICAgKi9cbiAgICBib3JkZXJSaWdodDogU3RyaW5nQW5kQm9vbFByb3BUeXBlLFxuXG4gICAgLyoqXG4gICAgICogQ2FuIGJlIGEgZXhwbGljaXQgYm9yZGVyIHZhbHVlIG9yIGEgYm9vbGVhbi5cbiAgICAgKiBWYWx1ZXM6IHRydWUsIGV4dHJhTXV0ZWQsIG11dGVkLCBkZWZhdWx0LlxuICAgICAqL1xuICAgIGJvcmRlckJvdHRvbTogU3RyaW5nQW5kQm9vbFByb3BUeXBlLFxuXG4gICAgLyoqXG4gICAgICogQ2FuIGJlIGEgZXhwbGljaXQgYm9yZGVyIHZhbHVlIG9yIGEgYm9vbGVhbi5cbiAgICAgKiBWYWx1ZXM6IHRydWUsIGV4dHJhTXV0ZWQsIG11dGVkLCBkZWZhdWx0LlxuICAgICAqL1xuICAgIGJvcmRlckxlZnQ6IFN0cmluZ0FuZEJvb2xQcm9wVHlwZSxcblxuICAgIC8qKlxuICAgICAqIFRoZW1lIHByb3ZpZGVkIGJ5IFRoZW1lUHJvdmlkZXIuXG4gICAgICovXG4gICAgdGhlbWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICB9XG5cbiAgZ2V0SG92ZXJFbGV2YXRpb25TdHlsZSA9IChob3ZlckVsZXZhdGlvbiwgY3NzKSA9PiB7XG4gICAgY29uc3QgeyB0aGVtZSB9ID0gdGhpcy5wcm9wc1xuICAgIGlmICghTnVtYmVyLmlzSW50ZWdlcihob3ZlckVsZXZhdGlvbikpIHJldHVybiB7fVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogJzE1MG1zJyxcbiAgICAgIHRyYW5zaXRpb25Qcm9wZXJ0eTogJ2JveC1zaGFkb3csIHRyYW5zZm9ybScsXG4gICAgICB0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb246IGBjdWJpYy1iZXppZXIoMC4wLCAwLjAsIDAuMiwgMSlgLFxuICAgICAgJzpob3Zlcic6IHtcbiAgICAgICAgLi4uKGNzc1snOmhvdmVyJ10gfHwge30pLFxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0ycHgpJyxcbiAgICAgICAgYm94U2hhZG93OiB0aGVtZS5nZXRFbGV2YXRpb24oaG92ZXJFbGV2YXRpb24pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0QWN0aXZlRWxldmF0aW9uU3R5bGUgPSAoYWN0aXZlRWxldmF0aW9uLCBjc3MpID0+IHtcbiAgICBjb25zdCB7IHRoZW1lIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKGFjdGl2ZUVsZXZhdGlvbikpIHJldHVybiB7fVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICc6YWN0aXZlJzoge1xuICAgICAgICAuLi4oY3NzWyc6YWN0aXZlJ10gfHwge30pLFxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0xcHgpJyxcbiAgICAgICAgYm94U2hhZG93OiB0aGVtZS5nZXRFbGV2YXRpb24oYWN0aXZlRWxldmF0aW9uKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldEJvcmRlclNpZGVQcm9wZXJ0eSA9ICh7IGJvcmRlclNpZGVQcm9wZXJ0eSwgYm9yZGVyIH0pID0+IHtcbiAgICBjb25zdCB7IHRoZW1lIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKFxuICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKFxuICAgICAgICB0aGVtZS5jb2xvcnMuYm9yZGVyLFxuICAgICAgICBib3JkZXJTaWRlUHJvcGVydHlcbiAgICAgIClcbiAgICApIHtcbiAgICAgIHJldHVybiBgMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmJvcmRlcltib3JkZXJTaWRlUHJvcGVydHldfWBcbiAgICB9XG5cbiAgICBpZiAoYm9yZGVyU2lkZVByb3BlcnR5ID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gYDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5ib3JkZXIuZGVmYXVsdH1gXG4gICAgfVxuXG4gICAgaWYgKGJvcmRlclNpZGVQcm9wZXJ0eSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0aGVtZS5jb2xvcnMuYm9yZGVyLCBib3JkZXIpKSB7XG4gICAgICByZXR1cm4gYDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5ib3JkZXJbYm9yZGVyXX1gXG4gICAgfVxuXG4gICAgaWYgKGJvcmRlciA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIGAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMuYm9yZGVyLmRlZmF1bHR9YFxuICAgIH1cblxuICAgIHJldHVybiBib3JkZXJTaWRlUHJvcGVydHlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB0aGVtZSxcblxuICAgICAgYmFja2dyb3VuZCxcblxuICAgICAgZWxldmF0aW9uLFxuICAgICAgaG92ZXJFbGV2YXRpb24sXG4gICAgICBhY3RpdmVFbGV2YXRpb24sXG5cbiAgICAgIGJvcmRlcixcbiAgICAgIGJvcmRlclRvcCxcbiAgICAgIGJvcmRlclJpZ2h0LFxuICAgICAgYm9yZGVyQm90dG9tLFxuICAgICAgYm9yZGVyTGVmdCxcblxuICAgICAgY3NzID0ge30sXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCBlbGV2YXRpb25TdHlsZSA9IHRoZW1lLmdldEVsZXZhdGlvbihlbGV2YXRpb24pXG4gICAgY29uc3QgaG92ZXJFbGV2YXRpb25TdHlsZSA9IHRoaXMuZ2V0SG92ZXJFbGV2YXRpb25TdHlsZShob3ZlckVsZXZhdGlvbiwgY3NzKVxuICAgIGNvbnN0IGFjdGl2ZUVsZXZhdGlvblN0eWxlID0gdGhpcy5nZXRBY3RpdmVFbGV2YXRpb25TdHlsZShcbiAgICAgIGFjdGl2ZUVsZXZhdGlvbixcbiAgICAgIGNzc1xuICAgIClcblxuICAgIGNvbnN0IFtfYm9yZGVyVG9wLCBfYm9yZGVyUmlnaHQsIF9ib3JkZXJCb3R0b20sIF9ib3JkZXJMZWZ0XSA9IFtcbiAgICAgIGJvcmRlclRvcCxcbiAgICAgIGJvcmRlclJpZ2h0LFxuICAgICAgYm9yZGVyQm90dG9tLFxuICAgICAgYm9yZGVyTGVmdFxuICAgIF0ubWFwKGJvcmRlclNpZGVQcm9wZXJ0eSA9PlxuICAgICAgdGhpcy5nZXRCb3JkZXJTaWRlUHJvcGVydHkoeyBib3JkZXJTaWRlUHJvcGVydHksIGJvcmRlciB9KVxuICAgIClcblxuICAgIGNvbnN0IGNsYXNzTmFtZSA9IGN4KFxuICAgICAgcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgZ2xhbW9yQ3NzKHtcbiAgICAgICAgLi4uY3NzLFxuICAgICAgICAuLi5ob3ZlckVsZXZhdGlvblN0eWxlLFxuICAgICAgICAuLi5hY3RpdmVFbGV2YXRpb25TdHlsZVxuICAgICAgfSkudG9TdHJpbmcoKVxuICAgIClcblxuICAgIHJldHVybiAoXG4gICAgICA8Qm94XG4gICAgICAgIGJvcmRlclRvcD17X2JvcmRlclRvcH1cbiAgICAgICAgYm9yZGVyUmlnaHQ9e19ib3JkZXJSaWdodH1cbiAgICAgICAgYm9yZGVyQm90dG9tPXtfYm9yZGVyQm90dG9tfVxuICAgICAgICBib3JkZXJMZWZ0PXtfYm9yZGVyTGVmdH1cbiAgICAgICAgYm94U2hhZG93PXtlbGV2YXRpb25TdHlsZX1cbiAgICAgICAgYmFja2dyb3VuZD17dGhlbWUuZ2V0QmFja2dyb3VuZChiYWNrZ3JvdW5kKX1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgIC8+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShQYW5lKVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEVBQVAsTUFBZSxZQUFmO0FBQ0EsU0FBU0MsR0FBRyxJQUFJQyxTQUFoQixRQUFpQyxRQUFqQztBQUNBLE9BQU9DLEtBQVAsSUFBZ0JDLGFBQWhCLFFBQXFDLE9BQXJDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLEdBQVAsTUFBZ0IsUUFBaEI7QUFDQSxTQUFTQyxTQUFULFFBQTBCLGFBQTFCO0FBRUEsSUFBTUMscUJBQXFCLEdBQUdILFNBQVMsQ0FBQ0ksU0FBVixDQUFvQixDQUNoREosU0FBUyxDQUFDSyxNQURzQyxFQUVoREwsU0FBUyxDQUFDTSxJQUZzQyxDQUFwQixDQUE5Qjs7SUFLTUMsSTs7Ozs7Ozs7Ozs7Ozs7Ozs2RUFtRXFCLFVBQUNDLGNBQUQsRUFBaUJaLEdBQWpCLEVBQXlCO01BQ2hELElBQVFhLEtBQVIsR0FBa0IsTUFBS0MsS0FBdkIsQ0FBUUQsS0FBUjtNQUNBLElBQUksQ0FBQ0UsTUFBTSxDQUFDQyxTQUFQLENBQWlCSixjQUFqQixDQUFMLEVBQXVDLE9BQU8sRUFBUDtNQUV2QyxPQUFPO1FBQ0xLLGtCQUFr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