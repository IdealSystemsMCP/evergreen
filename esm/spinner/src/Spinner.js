import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _excluded = ["theme", "size"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import { css } from 'glamor';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from 'ui-box';
import { withTheme } from '../../theme';
var loadingKeyframes = css.keyframes('loading', {
  '0%': {
    transform: 'rotate(0)'
  },
  '100%': {
    transform: 'rotate(360deg)'
  }
});
var loadingCircleKeyframes = css.keyframes('loading-circle', {
  '0%': {
    strokeDashoffset: 600
  },
  '100%': {
    strokeDashoffset: 0
  }
});
var outerClass = css({
  animation: "".concat(loadingKeyframes, " 2s linear infinite")
}).toString();

var innerClass = function innerClass(color) {
  return css({
    strokeDashoffset: 600,
    strokeDasharray: 300,
    strokeWidth: 12,
    strokeMiterlimit: 10,
    strokeLinecap: 'round',
    animation: "".concat(loadingCircleKeyframes, " 1.6s cubic-bezier(0.4, 0.15, 0.6, 0.85) infinite"),
    stroke: color,
    fill: 'transparent'
  }).toString();
};

var Spinner = /*#__PURE__*/function (_PureComponent) {
  _inherits(Spinner, _PureComponent);

  var _super = _createSuper(Spinner);

  function Spinner(_ref) {
    var _this;

    var delay = _ref.delay;

    _classCallCheck(this, Spinner);

    _this = _super.call(this);
    _this.state = {
      isVisible: delay === 0
    };
    return _this;
  }

  _createClass(Spinner, [{
    key: "render",
    value: function render() {
      if (!this.state.isVisible) {
        return null;
      }

      var _this$props = this.props,
          theme = _this$props.theme,
          size = _this$props.size,
          props = _objectWithoutProperties(_this$props, _excluded);

      return /*#__PURE__*/React.createElement(Box, _extends({
        width: size,
        height: size,
        lineHeight: 0
      }, props), /*#__PURE__*/React.createElement(Box, {
        is: "svg",
        className: outerClass,
        x: "0px",
        y: "0px",
        viewBox: "0 0 150 150"
      }, /*#__PURE__*/React.createElement(Box, {
        is: "circle",
        className: innerClass(theme.spinnerColor),
        cx: "75",
        cy: "75",
        r: "60"
      })));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var delay = this.props.delay;

      if (delay > 0) {
        this.delayTimer = setTimeout(function () {
          _this2.setState({
            isVisible: true
          });
        }, delay);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.delayTimer);
    }
  }]);

  return Spinner;
}(PureComponent);

Spinner.displayName = "Spinner";

_defineProperty(Spinner, "propTypes", _objectSpread(_objectSpread({}, Box.propTypes), {}, {
  /**
   * Delay after which spinner should be visible.
   */
  delay: PropTypes.number,

  /**
   * The size of the spinner.
   */
  size: PropTypes.number.isRequired,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired
}));

_defineProperty(Spinner, "defaultProps", {
  size: 40,
  delay: 0
});

export default withTheme(Spinner);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjc3MiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJCb3giLCJ3aXRoVGhlbWUiLCJsb2FkaW5nS2V5ZnJhbWVzIiwia2V5ZnJhbWVzIiwidHJhbnNmb3JtIiwibG9hZGluZ0NpcmNsZUtleWZyYW1lcyIsInN0cm9rZURhc2hvZmZzZXQiLCJvdXRlckNsYXNzIiwiYW5pbWF0aW9uIiwidG9TdHJpbmciLCJpbm5lckNsYXNzIiwiY29sb3IiLCJzdHJva2VEYXNoYXJyYXkiLCJzdHJva2VXaWR0aCIsInN0cm9rZU1pdGVybGltaXQiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlIiwiZmlsbCIsIlNwaW5uZXIiLCJkZWxheSIsInN0YXRlIiwiaXNWaXNpYmxlIiwicHJvcHMiLCJ0aGVtZSIsInNpemUiLCJzcGlubmVyQ29sb3IiLCJkZWxheVRpbWVyIiwic2V0VGltZW91dCIsInNldFN0YXRlIiwiY2xlYXJUaW1lb3V0IiwicHJvcFR5cGVzIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsIm9iamVjdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zcGlubmVyL3NyYy9TcGlubmVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ2dsYW1vcidcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgQm94IGZyb20gJ3VpLWJveCdcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuXG5jb25zdCBsb2FkaW5nS2V5ZnJhbWVzID0gY3NzLmtleWZyYW1lcygnbG9hZGluZycsIHtcbiAgJzAlJzoge1xuICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgwKSdcbiAgfSxcbiAgJzEwMCUnOiB7XG4gICAgdHJhbnNmb3JtOiAncm90YXRlKDM2MGRlZyknXG4gIH1cbn0pXG5cbmNvbnN0IGxvYWRpbmdDaXJjbGVLZXlmcmFtZXMgPSBjc3Mua2V5ZnJhbWVzKCdsb2FkaW5nLWNpcmNsZScsIHtcbiAgJzAlJzoge1xuICAgIHN0cm9rZURhc2hvZmZzZXQ6IDYwMFxuICB9LFxuICAnMTAwJSc6IHtcbiAgICBzdHJva2VEYXNob2Zmc2V0OiAwXG4gIH1cbn0pXG5cbmNvbnN0IG91dGVyQ2xhc3MgPSBjc3Moe1xuICBhbmltYXRpb246IGAke2xvYWRpbmdLZXlmcmFtZXN9IDJzIGxpbmVhciBpbmZpbml0ZWBcbn0pLnRvU3RyaW5nKClcblxuY29uc3QgaW5uZXJDbGFzcyA9IGNvbG9yID0+XG4gIGNzcyh7XG4gICAgc3Ryb2tlRGFzaG9mZnNldDogNjAwLFxuICAgIHN0cm9rZURhc2hhcnJheTogMzAwLFxuICAgIHN0cm9rZVdpZHRoOiAxMixcbiAgICBzdHJva2VNaXRlcmxpbWl0OiAxMCxcbiAgICBzdHJva2VMaW5lY2FwOiAncm91bmQnLFxuICAgIGFuaW1hdGlvbjogYCR7bG9hZGluZ0NpcmNsZUtleWZyYW1lc30gMS42cyBjdWJpYy1iZXppZXIoMC40LCAwLjE1LCAwLjYsIDAuODUpIGluZmluaXRlYCxcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIGZpbGw6ICd0cmFuc3BhcmVudCdcbiAgfSkudG9TdHJpbmcoKVxuXG5jbGFzcyBTcGlubmVyIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIEJveCBjb21wb25lbnQgYXMgdGhlIGJhc2UuXG4gICAgICovXG4gICAgLi4uQm94LnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIERlbGF5IGFmdGVyIHdoaWNoIHNwaW5uZXIgc2hvdWxkIGJlIHZpc2libGUuXG4gICAgICovXG4gICAgZGVsYXk6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2l6ZSBvZiB0aGUgc3Bpbm5lci5cbiAgICAgKi9cbiAgICBzaXplOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGVtZSBwcm92aWRlZCBieSBUaGVtZVByb3ZpZGVyLlxuICAgICAqL1xuICAgIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgc2l6ZTogNDAsXG4gICAgZGVsYXk6IDBcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHsgZGVsYXkgfSkge1xuICAgIHN1cGVyKClcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc1Zpc2libGU6IGRlbGF5ID09PSAwXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICghdGhpcy5zdGF0ZS5pc1Zpc2libGUpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgY29uc3QgeyB0aGVtZSwgc2l6ZSwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPEJveCB3aWR0aD17c2l6ZX0gaGVpZ2h0PXtzaXplfSBsaW5lSGVpZ2h0PXswfSB7Li4ucHJvcHN9PlxuICAgICAgICA8Qm94XG4gICAgICAgICAgaXM9XCJzdmdcIlxuICAgICAgICAgIGNsYXNzTmFtZT17b3V0ZXJDbGFzc31cbiAgICAgICAgICB4PVwiMHB4XCJcbiAgICAgICAgICB5PVwiMHB4XCJcbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE1MCAxNTBcIlxuICAgICAgICA+XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgaXM9XCJjaXJjbGVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtpbm5lckNsYXNzKHRoZW1lLnNwaW5uZXJDb2xvcil9XG4gICAgICAgICAgICBjeD1cIjc1XCJcbiAgICAgICAgICAgIGN5PVwiNzVcIlxuICAgICAgICAgICAgcj1cIjYwXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgZGVsYXkgfSA9IHRoaXMucHJvcHNcblxuICAgIGlmIChkZWxheSA+IDApIHtcbiAgICAgIHRoaXMuZGVsYXlUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBpc1Zpc2libGU6IHRydWVcbiAgICAgICAgfSlcbiAgICAgIH0sIGRlbGF5KVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmRlbGF5VGltZXIpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKFNwaW5uZXIpXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVNBLEdBQVQsUUFBb0IsUUFBcEI7QUFDQSxPQUFPQyxLQUFQLElBQWdCQyxhQUFoQixRQUFxQyxPQUFyQztBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxHQUFQLE1BQWdCLFFBQWhCO0FBQ0EsU0FBU0MsU0FBVCxRQUEwQixhQUExQjtBQUVBLElBQU1DLGdCQUFnQixHQUFHTixHQUFHLENBQUNPLFNBQUosQ0FBYyxTQUFkLEVBQXlCO0VBQ2hELE1BQU07SUFDSkMsU0FBUyxFQUFFO0VBRFAsQ0FEMEM7RUFJaEQsUUFBUTtJQUNOQSxTQUFTLEVBQUU7RUFETDtBQUp3QyxDQUF6QixDQUF6QjtBQVNBLElBQU1DLHNCQUFzQixHQUFHVCxHQUFHLENBQUNPLFNBQUosQ0FBYyxnQkFBZCxFQUFnQztFQUM3RCxNQUFNO0lBQ0pHLGdCQUFnQixFQUFFO0VBRGQsQ0FEdUQ7RUFJN0QsUUFBUTtJQUNOQSxnQkFBZ0IsRUFBRTtFQURaO0FBSnFELENBQWhDLENBQS9CO0FBU0EsSUFBTUMsVUFBVSxHQUFHWCxHQUFHLENBQUM7RUFDckJZLFNBQVMsWUFBS04sZ0JBQUw7QUFEWSxDQUFELENBQUgsQ0FFaEJPLFFBRmdCLEVBQW5COztBQUlBLElBQU1DLFVB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