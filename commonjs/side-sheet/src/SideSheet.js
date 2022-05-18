"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _glamor = require("glamor");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _layers = require("../../layers");

var _overlay = require("../../overlay");

var _constants = require("../../constants");

var _SheetClose = _interopRequireDefault(require("./SheetClose"));

var _paneProps, _subpaneProps, _animationStylesClass;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var paneProps = (_paneProps = {}, (0, _defineProperty2["default"])(_paneProps, _constants.Position.LEFT, {
  height: '100vh',
  maxWidth: '100vw',
  position: 'absolute',
  left: 0,
  right: 'auto'
}), (0, _defineProperty2["default"])(_paneProps, _constants.Position.RIGHT, {
  height: '100vh',
  maxWidth: '100vw',
  position: 'absolute',
  right: 0,
  left: 'auto'
}), (0, _defineProperty2["default"])(_paneProps, _constants.Position.TOP, {
  width: '100vw',
  position: 'absolute',
  maxHeight: '100vh',
  top: 0,
  bottom: 'auto'
}), (0, _defineProperty2["default"])(_paneProps, _constants.Position.BOTTOM, {
  width: '100vw',
  maxHeight: '100vh',
  position: 'absolute',
  bottom: 0,
  top: 'auto'
}), _paneProps);
var subpaneProps = (_subpaneProps = {}, (0, _defineProperty2["default"])(_subpaneProps, _constants.Position.LEFT, {
  height: '100vh'
}), (0, _defineProperty2["default"])(_subpaneProps, _constants.Position.RIGHT, {
  height: '100vh'
}), (0, _defineProperty2["default"])(_subpaneProps, _constants.Position.TOP, {
  width: '100vw'
}), (0, _defineProperty2["default"])(_subpaneProps, _constants.Position.BOTTOM, {
  width: '100vw'
}), _subpaneProps);
var animationEasing = {
  deceleration: "cubic-bezier(0.0, 0.0, 0.2, 1)",
  acceleration: "cubic-bezier(0.4, 0.0, 1, 1)"
};
var ANIMATION_DURATION = 240;

var withAnimations = function withAnimations(animateIn, animateOut) {
  return {
    '&[data-state="entering"], &[data-state="entered"]': {
      animation: "".concat(animateIn, " ").concat(ANIMATION_DURATION, "ms ").concat(animationEasing.deceleration, " both")
    },
    '&[data-state="exiting"]': {
      animation: "".concat(animateOut, " ").concat(ANIMATION_DURATION, "ms ").concat(animationEasing.acceleration, " both")
    }
  };
};

var animationStylesClass = (_animationStylesClass = {}, (0, _defineProperty2["default"])(_animationStylesClass, _constants.Position.LEFT, _objectSpread({
  transform: "translateX(-100%)"
}, withAnimations(_glamor.css.keyframes('anchoredLeftSlideInAnimation', {
  from: {
    transform: "translateX(-100%)"
  },
  to: {
    transform: "translateX(0)"
  }
}), _glamor.css.keyframes('anchoredLeftSlideOutAnimation', {
  from: {
    transform: "translateX(0)"
  },
  to: {
    transform: "translateX(-100%)"
  }
})))), (0, _defineProperty2["default"])(_animationStylesClass, _constants.Position.RIGHT, _objectSpread({
  transform: "translateX(100%)"
}, withAnimations(_glamor.css.keyframes('anchoredRightSlideInAnimation', {
  from: {
    transform: "translateX(100%)"
  },
  to: {
    transform: "translateX(0)"
  }
}), _glamor.css.keyframes('anchoredRightSlideOutAnimation', {
  from: {
    transform: "translateX(0)"
  },
  to: {
    transform: "translateX(100%)"
  }
})))), (0, _defineProperty2["default"])(_animationStylesClass, _constants.Position.TOP, _objectSpread({
  transform: "translateY(-100%)"
}, withAnimations(_glamor.css.keyframes('anchoredTopSlideInAnimation', {
  from: {
    transform: "translateY(-100%)"
  },
  to: {
    transform: "translateY(0)"
  }
}), _glamor.css.keyframes('anchoredTopSlideOutAnimation', {
  from: {
    transform: "translateY(0)"
  },
  to: {
    transform: "translateY(-100%)"
  }
})))), (0, _defineProperty2["default"])(_animationStylesClass, _constants.Position.BOTTOM, _objectSpread({
  transform: "translateY(100%)"
}, withAnimations(_glamor.css.keyframes('anchoredBottomSlideInAnimation', {
  from: {
    transform: "translateY(100%)"
  },
  to: {
    transform: "translateY(0)"
  }
}), _glamor.css.keyframes('anchoredBottomSlideOutAnimation', {
  from: {
    transform: "translateY(0)"
  },
  to: {
    transform: "translateY(100%)"
  }
})))), _animationStylesClass);

var SideSheet = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(SideSheet, _React$Component);

  var _super = _createSuper(SideSheet);

  function SideSheet() {
    (0, _classCallCheck2["default"])(this, SideSheet);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(SideSheet, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          width = _this$props.width,
          isShown = _this$props.isShown,
          children = _this$props.children,
          containerProps = _this$props.containerProps,
          onOpenComplete = _this$props.onOpenComplete,
          onCloseComplete = _this$props.onCloseComplete,
          onBeforeClose = _this$props.onBeforeClose,
          shouldCloseOnOverlayClick = _this$props.shouldCloseOnOverlayClick,
          shouldCloseOnEscapePress = _this$props.shouldCloseOnEscapePress,
          position = _this$props.position,
          preventBodyScrolling = _this$props.preventBodyScrolling;
      return /*#__PURE__*/_react["default"].createElement(_overlay.Overlay, {
        isShown: isShown,
        shouldCloseOnClick: shouldCloseOnOverlayClick,
        shouldCloseOnEscapePress: shouldCloseOnEscapePress,
        onBeforeClose: onBeforeClose,
        onExited: onCloseComplete,
        onEntered: onOpenComplete,
        preventBodyScrolling: preventBodyScrolling
      }, function (_ref) {
        var state = _ref.state,
            close = _ref.close;
        return /*#__PURE__*/_react["default"].createElement(_layers.Pane, (0, _extends2["default"])({
          width: width
        }, paneProps[position], {
          css: animationStylesClass[position],
          "data-state": state
        }), /*#__PURE__*/_react["default"].createElement(_SheetClose["default"], {
          position: position,
          "data-state": state,
          isClosing: false,
          onClick: close
        }), /*#__PURE__*/_react["default"].createElement(_layers.Pane, (0, _extends2["default"])({
          elevation: 4,
          backgroundColor: "white",
          overflowY: "auto",
          maxHeight: "100vh",
          "data-state": state,
          width: width
        }, subpaneProps[position], containerProps), typeof children === 'function' ? children({
          close: close
        }) : children));
      });
    }
  }]);
  return SideSheet;
}(_react["default"].Component);

SideSheet.displayName = "SideSheet";
(0, _defineProperty2["default"])(SideSheet, "propTypes", {
  /**
   * Children can be a string, node or a function accepting `({ close })`.
   */
  children: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].func]).isRequired,

  /**
   * When true, the Side Sheet is shown.
   */
  isShown: _propTypes["default"].bool,

  /**
   * Function that will be called when the exit transition is complete.
   */
  onCloseComplete: _propTypes["default"].func,

  /**
   * Function that will be called when the enter transition is complete.
   */
  onOpenComplete: _propTypes["default"].func,

  /**
   * Function called when overlay is about to close.
   * Return `false` to prevent the sheet from closing.
   * type: `Function -> Boolean`
   */
  onBeforeClose: _propTypes["default"].func,

  /**
   * Boolean indicating if clicking the overlay should close the overlay.
   */
  shouldCloseOnOverlayClick: _propTypes["default"].bool,

  /**
   * Boolean indicating if pressing the esc key should close the overlay.
   */
  shouldCloseOnEscapePress: _propTypes["default"].bool,

  /**
   * Width of the SideSheet.
   */
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]).isRequired,

  /**
   * Properties to pass through the SideSheet container Pane.
   */
  containerProps: _propTypes["default"].object,

  /**
   * Positions the sheet to the top, left, right, or bottom of the screen.
   */
  position: _propTypes["default"].oneOf([_constants.Position.TOP, _constants.Position.BOTTOM, _constants.Position.LEFT, _constants.Position.RIGHT]).isRequired,

  /**
   * Whether or not to prevent scrolling in the outer body
   */
  preventBodyScrolling: _propTypes["default"].bool
});
(0, _defineProperty2["default"])(SideSheet, "defaultProps", {
  width: 620,
  onCloseComplete: function onCloseComplete() {},
  onOpenComplete: function onOpenComplete() {},
  shouldCloseOnOverlayClick: true,
  shouldCloseOnEscapePress: true,
  position: _constants.Position.RIGHT
});
var _default = SideSheet;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJwYW5lUHJvcHMiLCJQb3NpdGlvbiIsIkxFRlQiLCJoZWlnaHQiLCJtYXhXaWR0aCIsInBvc2l0aW9uIiwibGVmdCIsInJpZ2h0IiwiUklHSFQiLCJUT1AiLCJ3aWR0aCIsIm1heEhlaWdodCIsInRvcCIsImJvdHRvbSIsIkJPVFRPTSIsInN1YnBhbmVQcm9wcyIsImFuaW1hdGlvbkVhc2luZyIsImRlY2VsZXJhdGlvbiIsImFjY2VsZXJhdGlvbiIsIkFOSU1BVElPTl9EVVJBVElPTiIsIndpdGhBbmltYXRpb25zIiwiYW5pbWF0ZUluIiwiYW5pbWF0ZU91dCIsImFuaW1hdGlvbiIsImFuaW1hdGlvblN0eWxlc0NsYXNzIiwidHJhbnNmb3JtIiwiY3NzIiwia2V5ZnJhbWVzIiwiZnJvbSIsInRvIiwiU2lkZVNoZWV0IiwicHJvcHMiLCJpc1Nob3duIiwiY2hpbGRyZW4iLCJjb250YWluZXJQcm9wcyIsIm9uT3BlbkNvbXBsZXRlIiwib25DbG9zZUNvbXBsZXRlIiwib25CZWZvcmVDbG9zZSIsInNob3VsZENsb3NlT25PdmVybGF5Q2xpY2siLCJzaG91bGRDbG9zZU9uRXNjYXBlUHJlc3MiLCJwcmV2ZW50Qm9keVNjcm9sbGluZyIsInN0YXRlIiwiY2xvc2UiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsIm9uZU9mVHlwZSIsIm5vZGUiLCJmdW5jIiwiaXNSZXF1aXJlZCIsImJvb2wiLCJzdHJpbmciLCJudW1iZXIiLCJvYmplY3QiLCJvbmVPZiJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zaWRlLXNoZWV0L3NyYy9TaWRlU2hlZXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnZ2xhbW9yJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgUGFuZSB9IGZyb20gJy4uLy4uL2xheWVycydcbmltcG9ydCB7IE92ZXJsYXkgfSBmcm9tICcuLi8uLi9vdmVybGF5J1xuaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tICcuLi8uLi9jb25zdGFudHMnXG5pbXBvcnQgU2hlZXRDbG9zZSBmcm9tICcuL1NoZWV0Q2xvc2UnXG5cbmNvbnN0IHBhbmVQcm9wcyA9IHtcbiAgW1Bvc2l0aW9uLkxFRlRdOiB7XG4gICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgIG1heFdpZHRoOiAnMTAwdncnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGxlZnQ6IDAsXG4gICAgcmlnaHQ6ICdhdXRvJ1xuICB9LFxuICBbUG9zaXRpb24uUklHSFRdOiB7XG4gICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgIG1heFdpZHRoOiAnMTAwdncnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHJpZ2h0OiAwLFxuICAgIGxlZnQ6ICdhdXRvJ1xuICB9LFxuICBbUG9zaXRpb24uVE9QXToge1xuICAgIHdpZHRoOiAnMTAwdncnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIG1heEhlaWdodDogJzEwMHZoJyxcbiAgICB0b3A6IDAsXG4gICAgYm90dG9tOiAnYXV0bydcbiAgfSxcbiAgW1Bvc2l0aW9uLkJPVFRPTV06IHtcbiAgICB3aWR0aDogJzEwMHZ3JyxcbiAgICBtYXhIZWlnaHQ6ICcxMDB2aCcsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgYm90dG9tOiAwLFxuICAgIHRvcDogJ2F1dG8nXG4gIH1cbn1cblxuY29uc3Qgc3VicGFuZVByb3BzID0ge1xuICBbUG9zaXRpb24uTEVGVF06IHtcbiAgICBoZWlnaHQ6ICcxMDB2aCdcbiAgfSxcbiAgW1Bvc2l0aW9uLlJJR0hUXToge1xuICAgIGhlaWdodDogJzEwMHZoJ1xuICB9LFxuICBbUG9zaXRpb24uVE9QXToge1xuICAgIHdpZHRoOiAnMTAwdncnXG4gIH0sXG4gIFtQb3NpdGlvbi5CT1RUT01dOiB7XG4gICAgd2lkdGg6ICcxMDB2dydcbiAgfVxufVxuXG5jb25zdCBhbmltYXRpb25FYXNpbmcgPSB7XG4gIGRlY2VsZXJhdGlvbjogYGN1YmljLWJlemllcigwLjAsIDAuMCwgMC4yLCAxKWAsXG4gIGFjY2VsZXJhdGlvbjogYGN1YmljLWJlemllcigwLjQsIDAuMCwgMSwgMSlgXG59XG5cbmNvbnN0IEFOSU1BVElPTl9EVVJBVElPTiA9IDI0MFxuXG5jb25zdCB3aXRoQW5pbWF0aW9ucyA9IChhbmltYXRlSW4sIGFuaW1hdGVPdXQpID0+IHtcbiAgcmV0dXJuIHtcbiAgICAnJltkYXRhLXN0YXRlPVwiZW50ZXJpbmdcIl0sICZbZGF0YS1zdGF0ZT1cImVudGVyZWRcIl0nOiB7XG4gICAgICBhbmltYXRpb246IGAke2FuaW1hdGVJbn0gJHtBTklNQVRJT05fRFVSQVRJT059bXMgJHtcbiAgICAgICAgYW5pbWF0aW9uRWFzaW5nLmRlY2VsZXJhdGlvblxuICAgICAgfSBib3RoYFxuICAgIH0sXG4gICAgJyZbZGF0YS1zdGF0ZT1cImV4aXRpbmdcIl0nOiB7XG4gICAgICBhbmltYXRpb246IGAke2FuaW1hdGVPdXR9ICR7QU5JTUFUSU9OX0RVUkFUSU9OfW1zICR7XG4gICAgICAgIGFuaW1hdGlvbkVhc2luZy5hY2NlbGVyYXRpb25cbiAgICAgIH0gYm90aGBcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgYW5pbWF0aW9uU3R5bGVzQ2xhc3MgPSB7XG4gIFtQb3NpdGlvbi5MRUZUXToge1xuICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoLTEwMCUpYCxcbiAgICAuLi53aXRoQW5pbWF0aW9ucyhcbiAgICAgIGNzcy5rZXlmcmFtZXMoJ2FuY2hvcmVkTGVmdFNsaWRlSW5BbmltYXRpb24nLCB7XG4gICAgICAgIGZyb206IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgtMTAwJSlgIH0sXG4gICAgICAgIHRvOiB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoMClgIH1cbiAgICAgIH0pLFxuICAgICAgY3NzLmtleWZyYW1lcygnYW5jaG9yZWRMZWZ0U2xpZGVPdXRBbmltYXRpb24nLCB7XG4gICAgICAgIGZyb206IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgwKWAgfSxcbiAgICAgICAgdG86IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgtMTAwJSlgIH1cbiAgICAgIH0pXG4gICAgKVxuICB9LFxuICBbUG9zaXRpb24uUklHSFRdOiB7XG4gICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgxMDAlKWAsXG4gICAgLi4ud2l0aEFuaW1hdGlvbnMoXG4gICAgICBjc3Mua2V5ZnJhbWVzKCdhbmNob3JlZFJpZ2h0U2xpZGVJbkFuaW1hdGlvbicsIHtcbiAgICAgICAgZnJvbTogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKDEwMCUpYCB9LFxuICAgICAgICB0bzogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKDApYCB9XG4gICAgICB9KSxcbiAgICAgIGNzcy5rZXlmcmFtZXMoJ2FuY2hvcmVkUmlnaHRTbGlkZU91dEFuaW1hdGlvbicsIHtcbiAgICAgICAgZnJvbTogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKDApYCB9LFxuICAgICAgICB0bzogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKDEwMCUpYCB9XG4gICAgICB9KVxuICAgIClcbiAgfSxcbiAgW1Bvc2l0aW9uLlRPUF06IHtcbiAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKC0xMDAlKWAsXG4gICAgLi4ud2l0aEFuaW1hdGlvbnMoXG4gICAgICBjc3Mua2V5ZnJhbWVzKCdhbmNob3JlZFRvcFNsaWRlSW5BbmltYXRpb24nLCB7XG4gICAgICAgIGZyb206IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgtMTAwJSlgIH0sXG4gICAgICAgIHRvOiB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoMClgIH1cbiAgICAgIH0pLFxuICAgICAgY3NzLmtleWZyYW1lcygnYW5jaG9yZWRUb3BTbGlkZU91dEFuaW1hdGlvbicsIHtcbiAgICAgICAgZnJvbTogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKDApYCB9LFxuICAgICAgICB0bzogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKC0xMDAlKWAgfVxuICAgICAgfSlcbiAgICApXG4gIH0sXG4gIFtQb3NpdGlvbi5CT1RUT01dOiB7XG4gICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgxMDAlKWAsXG4gICAgLi4ud2l0aEFuaW1hdGlvbnMoXG4gICAgICBjc3Mua2V5ZnJhbWVzKCdhbmNob3JlZEJvdHRvbVNsaWRlSW5BbmltYXRpb24nLCB7XG4gICAgICAgIGZyb206IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgxMDAlKWAgfSxcbiAgICAgICAgdG86IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgwKWAgfVxuICAgICAgfSksXG4gICAgICBjc3Mua2V5ZnJhbWVzKCdhbmNob3JlZEJvdHRvbVNsaWRlT3V0QW5pbWF0aW9uJywge1xuICAgICAgICBmcm9tOiB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoMClgIH0sXG4gICAgICAgIHRvOiB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoMTAwJSlgIH1cbiAgICAgIH0pXG4gICAgKVxuICB9XG59XG5cbmNsYXNzIFNpZGVTaGVldCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ2hpbGRyZW4gY2FuIGJlIGEgc3RyaW5nLCBub2RlIG9yIGEgZnVuY3Rpb24gYWNjZXB0aW5nIGAoeyBjbG9zZSB9KWAuXG4gICAgICovXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ub2RlLCBQcm9wVHlwZXMuZnVuY10pLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSBTaWRlIFNoZWV0IGlzIHNob3duLlxuICAgICAqL1xuICAgIGlzU2hvd246IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZSBleGl0IHRyYW5zaXRpb24gaXMgY29tcGxldGUuXG4gICAgICovXG4gICAgb25DbG9zZUNvbXBsZXRlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgZW50ZXIgdHJhbnNpdGlvbiBpcyBjb21wbGV0ZS5cbiAgICAgKi9cbiAgICBvbk9wZW5Db21wbGV0ZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiBjYWxsZWQgd2hlbiBvdmVybGF5IGlzIGFib3V0IHRvIGNsb3NlLlxuICAgICAqIFJldHVybiBgZmFsc2VgIHRvIHByZXZlbnQgdGhlIHNoZWV0IGZyb20gY2xvc2luZy5cbiAgICAgKiB0eXBlOiBgRnVuY3Rpb24gLT4gQm9vbGVhbmBcbiAgICAgKi9cbiAgICBvbkJlZm9yZUNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIEJvb2xlYW4gaW5kaWNhdGluZyBpZiBjbGlja2luZyB0aGUgb3ZlcmxheSBzaG91bGQgY2xvc2UgdGhlIG92ZXJsYXkuXG4gICAgICovXG4gICAgc2hvdWxkQ2xvc2VPbk92ZXJsYXlDbGljazogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBCb29sZWFuIGluZGljYXRpbmcgaWYgcHJlc3NpbmcgdGhlIGVzYyBrZXkgc2hvdWxkIGNsb3NlIHRoZSBvdmVybGF5LlxuICAgICAqL1xuICAgIHNob3VsZENsb3NlT25Fc2NhcGVQcmVzczogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBXaWR0aCBvZiB0aGUgU2lkZVNoZWV0LlxuICAgICAqL1xuICAgIHdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSkuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnRpZXMgdG8gcGFzcyB0aHJvdWdoIHRoZSBTaWRlU2hlZXQgY29udGFpbmVyIFBhbmUuXG4gICAgICovXG4gICAgY29udGFpbmVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgICAvKipcbiAgICAgKiBQb3NpdGlvbnMgdGhlIHNoZWV0IHRvIHRoZSB0b3AsIGxlZnQsIHJpZ2h0LCBvciBib3R0b20gb2YgdGhlIHNjcmVlbi5cbiAgICAgKi9cbiAgICBwb3NpdGlvbjogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAgIFBvc2l0aW9uLlRPUCxcbiAgICAgIFBvc2l0aW9uLkJPVFRPTSxcbiAgICAgIFBvc2l0aW9uLkxFRlQsXG4gICAgICBQb3NpdGlvbi5SSUdIVFxuICAgIF0pLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIG9yIG5vdCB0byBwcmV2ZW50IHNjcm9sbGluZyBpbiB0aGUgb3V0ZXIgYm9keVxuICAgICAqL1xuICAgIHByZXZlbnRCb2R5U2Nyb2xsaW5nOiBQcm9wVHlwZXMuYm9vbFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB3aWR0aDogNjIwLFxuICAgIG9uQ2xvc2VDb21wbGV0ZTogKCkgPT4ge30sXG4gICAgb25PcGVuQ29tcGxldGU6ICgpID0+IHt9LFxuICAgIHNob3VsZENsb3NlT25PdmVybGF5Q2xpY2s6IHRydWUsXG4gICAgc2hvdWxkQ2xvc2VPbkVzY2FwZVByZXNzOiB0cnVlLFxuICAgIHBvc2l0aW9uOiBQb3NpdGlvbi5SSUdIVFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHdpZHRoLFxuICAgICAgaXNTaG93bixcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgY29udGFpbmVyUHJvcHMsXG4gICAgICBvbk9wZW5Db21wbGV0ZSxcbiAgICAgIG9uQ2xvc2VDb21wbGV0ZSxcbiAgICAgIG9uQmVmb3JlQ2xvc2UsXG4gICAgICBzaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrLFxuICAgICAgc2hvdWxkQ2xvc2VPbkVzY2FwZVByZXNzLFxuICAgICAgcG9zaXRpb24sXG4gICAgICBwcmV2ZW50Qm9keVNjcm9sbGluZ1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPE92ZXJsYXlcbiAgICAgICAgaXNTaG93bj17aXNTaG93bn1cbiAgICAgICAgc2hvdWxkQ2xvc2VPbkNsaWNrPXtzaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrfVxuICAgICAgICBzaG91bGRDbG9zZU9uRXNjYXBlUHJlc3M9e3Nob3VsZENsb3NlT25Fc2NhcGVQcmVzc31cbiAgICAgICAgb25CZWZvcmVDbG9zZT17b25CZWZvcmVDbG9zZX1cbiAgICAgICAgb25FeGl0ZWQ9e29uQ2xvc2VDb21wbGV0ZX1cbiAgICAgICAgb25FbnRlcmVkPXtvbk9wZW5Db21wbGV0ZX1cbiAgICAgICAgcHJldmVudEJvZHlTY3JvbGxpbmc9e3ByZXZlbnRCb2R5U2Nyb2xsaW5nfVxuICAgICAgPlxuICAgICAgICB7KHsgc3RhdGUsIGNsb3NlIH0pID0+IChcbiAgICAgICAgICA8UGFuZVxuICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgICAgey4uLnBhbmVQcm9wc1twb3NpdGlvbl19XG4gICAgICAgICAgICBjc3M9e2FuaW1hdGlvblN0eWxlc0NsYXNzW3Bvc2l0aW9uXX1cbiAgICAgICAgICAgIGRhdGEtc3RhdGU9e3N0YXRlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxTaGVldENsb3NlXG4gICAgICAgICAgICAgIHBvc2l0aW9uPXtwb3NpdGlvbn1cbiAgICAgICAgICAgICAgZGF0YS1zdGF0ZT17c3RhdGV9XG4gICAgICAgICAgICAgIGlzQ2xvc2luZz17ZmFsc2V9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2Nsb3NlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxQYW5lXG4gICAgICAgICAgICAgIGVsZXZhdGlvbj17NH1cbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICBvdmVyZmxvd1k9XCJhdXRvXCJcbiAgICAgICAgICAgICAgbWF4SGVpZ2h0PVwiMTAwdmhcIlxuICAgICAgICAgICAgICBkYXRhLXN0YXRlPXtzdGF0ZX1cbiAgICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgICAgICB7Li4uc3VicGFuZVByb3BzW3Bvc2l0aW9uXX1cbiAgICAgICAgICAgICAgey4uLmNvbnRhaW5lclByb3BzfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dHlwZW9mIGNoaWxkcmVuID09PSAnZnVuY3Rpb24nID8gY2hpbGRyZW4oeyBjbG9zZSB9KSA6IGNoaWxkcmVufVxuICAgICAgICAgICAgPC9QYW5lPlxuICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgKX1cbiAgICAgIDwvT3ZlcmxheT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lkZVNoZWV0XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVMsa0VBQ1pDLG1CQUFBLENBQVNDLElBREcsRUFDSTtFQUNmQyxNQUFNLEVBQUUsT0FETztFQUVmQyxRQUFRLEVBQUUsT0FGSztFQUdmQyxRQUFRLEVBQUUsVUFISztFQUlmQyxJQUFJLEVBQUUsQ0FKUztFQUtmQyxLQUFLLEVBQUU7QUFMUSxDQURKLGdEQVFaTixtQkFBQSxDQUFTTyxLQVJHLEVBUUs7RUFDaEJMLE1BQU0sRUFBRSxPQURRO0VBRWhCQyxRQUFRLEVBQUUsT0FGTTtFQUdoQkMsUUFBUSxFQUFFLFVBSE07RUFJaEJFLEtBQUssRUFBRSxDQUpTO0VBS2hCRCxJQUFJLEVBQUU7QUFMVSxDQVJMLGdEQWVaTCxtQkFBQSxDQUFTUSxHQWZHLEVBZUc7RUFDZEMsS0FBSyxFQUFFLE9BRE87RUFFZEwsUUFBUSxFQUFFLFVBRkk7RUFHZE0sU0FBUyxFQUFFLE9BSEc7RUFJZEMsR0FBRyxFQUFFLENBSlM7RUFLZEMsTUFBTSxFQUFFO0FBTE0sQ0FmSCxnREFz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