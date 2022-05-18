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

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uiBox = _interopRequireDefault(require("ui-box"));

var _glamor = require("glamor");

var _icon = require("../../icon");

var _constants = require("../../constants");

var _excluded = ["isClosing", "position"];

var _sheetCloseStyles;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var animationEasing = {
  deceleration: "cubic-bezier(0.0, 0.0, 0.2, 1)",
  acceleration: "cubic-bezier(0.4, 0.0, 1, 1)"
};
var ANIMATION_DURATION = 240;
var sharedStyles = {
  padding: 4,
  borderRadius: 9999,
  position: 'absolute',
  cursor: 'pointer',
  backgroundColor: "rgba(255, 255, 255, 0.4)",
  transition: "background-color 120ms",
  '&:hover': {
    backgroundColor: "rgba(255, 255, 255, 0.6)"
  },
  '&:active': {
    backgroundColor: "rgba(255, 255, 255, 0.4)"
  }
};

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

var sheetCloseStyles = (_sheetCloseStyles = {}, (0, _defineProperty2["default"])(_sheetCloseStyles, _constants.Position.RIGHT, _objectSpread({
  left: 0,
  marginLeft: -12,
  marginTop: 12,
  transform: "translateX(-100%)"
}, withAnimations(_glamor.css.keyframes('rotate360InAnimation', {
  from: {
    transform: "translateX(100%) rotate(0deg)"
  },
  to: {
    transform: "translateX(-100%) rotate(-360deg)"
  }
}), _glamor.css.keyframes('rotate360OutAnimation', {
  from: {
    transform: "translateX(-100%) rotate(0deg)"
  },
  to: {
    transform: "translateX(100%) rotate(360deg)"
  }
})))), (0, _defineProperty2["default"])(_sheetCloseStyles, _constants.Position.LEFT, _objectSpread({
  marginRight: -12,
  right: 0,
  marginTop: 12,
  transform: "translateX(100%)"
}, withAnimations(_glamor.css.keyframes('leftRotate360InAnimation', {
  from: {
    transform: "translateX(-100%) rotate(0deg)"
  },
  to: {
    transform: "translateX(100%), rotate(360deg)"
  }
}), _glamor.css.keyframes('leftRotate360OutAnimation', {
  from: {
    transform: "translateX(100%) rotate(0deg)"
  },
  to: {
    transform: "translateX(-100%), rotate(360deg)"
  }
})))), (0, _defineProperty2["default"])(_sheetCloseStyles, _constants.Position.TOP, _objectSpread({
  right: 0,
  marginRight: 12,
  top: '100%',
  marginTop: 12,
  transform: "translateY(0)"
}, withAnimations(_glamor.css.keyframes('topRotate360InAnimation', {
  from: {
    transform: "translateY(-200%) rotate(0deg)"
  },
  to: {
    transform: "translateY(0%), rotate(360deg)"
  }
}), _glamor.css.keyframes('topRotate360OutAnimation', {
  from: {
    transform: "translateY(0%) rotate(0deg)"
  },
  to: {
    transform: "translateY(-200%), rotate(360deg)"
  }
})))), (0, _defineProperty2["default"])(_sheetCloseStyles, _constants.Position.BOTTOM, _objectSpread({
  right: 0,
  marginRight: 12,
  bottom: '100%',
  marginBottom: 12,
  transform: "translateY(0)"
}, withAnimations(_glamor.css.keyframes('bottomRotate360InAnimation', {
  from: {
    transform: "translateY(200%) rotate(0deg)"
  },
  to: {
    transform: "translateY(0%), rotate(360deg)"
  }
}), _glamor.css.keyframes('bottomRotate360OutAnimation', {
  from: {
    transform: "translateY(0%) rotate(0deg)"
  },
  to: {
    transform: "translateY(200%), rotate(360deg)"
  }
})))), _sheetCloseStyles);
var sheetCloseClassNameCache = {};

var getSheetCloseClassName = function getSheetCloseClassName(position) {
  if (!sheetCloseClassNameCache[position]) {
    sheetCloseClassNameCache[position] = (0, _glamor.css)(_objectSpread(_objectSpread({}, sheetCloseStyles[position]), sharedStyles)).toString();
  }

  return sheetCloseClassNameCache[position];
};

var SheetClose = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(SheetClose, _PureComponent);

  var _super = _createSuper(SheetClose);

  function SheetClose() {
    (0, _classCallCheck2["default"])(this, SheetClose);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(SheetClose, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isClosing = _this$props.isClosing,
          position = _this$props.position,
          props = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      return /*#__PURE__*/_react["default"].createElement(_uiBox["default"], (0, _extends2["default"])({
        width: 32,
        height: 32,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        className: getSheetCloseClassName(position)
      }, props), /*#__PURE__*/_react["default"].createElement(_icon.Icon, {
        icon: "cross",
        color: "#fff"
      }));
    }
  }]);
  return SheetClose;
}(_react.PureComponent);

exports["default"] = SheetClose;
SheetClose.displayName = "SheetClose";
(0, _defineProperty2["default"])(SheetClose, "propTypes", _objectSpread(_objectSpread({}, _uiBox["default"].propTypes), {}, {
  isClosing: _propTypes["default"].bool,
  position: _propTypes["default"].oneOf([_constants.Position.LEFT, _constants.Position.RIGHT, _constants.Position.TOP, _constants.Position.BOTTOM]).isRequired
}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJhbmltYXRpb25FYXNpbmciLCJkZWNlbGVyYXRpb24iLCJhY2NlbGVyYXRpb24iLCJBTklNQVRJT05fRFVSQVRJT04iLCJzaGFyZWRTdHlsZXMiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwicG9zaXRpb24iLCJjdXJzb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0cmFuc2l0aW9uIiwid2l0aEFuaW1hdGlvbnMiLCJhbmltYXRlSW4iLCJhbmltYXRlT3V0IiwiYW5pbWF0aW9uIiwic2hlZXRDbG9zZVN0eWxlcyIsIlBvc2l0aW9uIiwiUklHSFQiLCJsZWZ0IiwibWFyZ2luTGVmdCIsIm1hcmdpblRvcCIsInRyYW5zZm9ybSIsImNzcyIsImtleWZyYW1lcyIsImZyb20iLCJ0byIsIkxFRlQiLCJtYXJnaW5SaWdodCIsInJpZ2h0IiwiVE9QIiwidG9wIiwiQk9UVE9NIiwiYm90dG9tIiwibWFyZ2luQm90dG9tIiwic2hlZXRDbG9zZUNsYXNzTmFtZUNhY2hlIiwiZ2V0U2hlZXRDbG9zZUNsYXNzTmFtZSIsInRvU3RyaW5nIiwiU2hlZXRDbG9zZSIsInByb3BzIiwiaXNDbG9zaW5nIiwiUHVyZUNvbXBvbmVudCIsIkJveCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJvbmVPZiIsImlzUmVxdWlyZWQiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2lkZS1zaGVldC9zcmMvU2hlZXRDbG9zZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEJveCBmcm9tICd1aS1ib3gnXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnLi4vLi4vaWNvbidcbmltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJ1xuXG5jb25zdCBhbmltYXRpb25FYXNpbmcgPSB7XG4gIGRlY2VsZXJhdGlvbjogYGN1YmljLWJlemllcigwLjAsIDAuMCwgMC4yLCAxKWAsXG4gIGFjY2VsZXJhdGlvbjogYGN1YmljLWJlemllcigwLjQsIDAuMCwgMSwgMSlgXG59XG5cbmNvbnN0IEFOSU1BVElPTl9EVVJBVElPTiA9IDI0MFxuXG5jb25zdCBzaGFyZWRTdHlsZXMgPSB7XG4gIHBhZGRpbmc6IDQsXG4gIGJvcmRlclJhZGl1czogOTk5OSxcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIGN1cnNvcjogJ3BvaW50ZXInLFxuICBiYWNrZ3JvdW5kQ29sb3I6IGByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNClgLFxuICB0cmFuc2l0aW9uOiBgYmFja2dyb3VuZC1jb2xvciAxMjBtc2AsXG4gICcmOmhvdmVyJzoge1xuICAgIGJhY2tncm91bmRDb2xvcjogYHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KWBcbiAgfSxcbiAgJyY6YWN0aXZlJzoge1xuICAgIGJhY2tncm91bmRDb2xvcjogYHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KWBcbiAgfVxufVxuXG5jb25zdCB3aXRoQW5pbWF0aW9ucyA9IChhbmltYXRlSW4sIGFuaW1hdGVPdXQpID0+IHtcbiAgcmV0dXJuIHtcbiAgICAnJltkYXRhLXN0YXRlPVwiZW50ZXJpbmdcIl0sICZbZGF0YS1zdGF0ZT1cImVudGVyZWRcIl0nOiB7XG4gICAgICBhbmltYXRpb246IGAke2FuaW1hdGVJbn0gJHtBTklNQVRJT05fRFVSQVRJT059bXMgJHtcbiAgICAgICAgYW5pbWF0aW9uRWFzaW5nLmRlY2VsZXJhdGlvblxuICAgICAgfSBib3RoYFxuICAgIH0sXG4gICAgJyZbZGF0YS1zdGF0ZT1cImV4aXRpbmdcIl0nOiB7XG4gICAgICBhbmltYXRpb246IGAke2FuaW1hdGVPdXR9ICR7QU5JTUFUSU9OX0RVUkFUSU9OfW1zICR7XG4gICAgICAgIGFuaW1hdGlvbkVhc2luZy5hY2NlbGVyYXRpb25cbiAgICAgIH0gYm90aGBcbiAgICB9XG4gIH1cbn1cblxuY29uc3Qgc2hlZXRDbG9zZVN0eWxlcyA9IHtcbiAgW1Bvc2l0aW9uLlJJR0hUXToge1xuICAgIGxlZnQ6IDAsXG4gICAgbWFyZ2luTGVmdDogLTEyLFxuICAgIG1hcmdpblRvcDogMTIsXG4gICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgtMTAwJSlgLFxuICAgIC4uLndpdGhBbmltYXRpb25zKFxuICAgICAgY3NzLmtleWZyYW1lcygncm90YXRlMzYwSW5BbmltYXRpb24nLCB7XG4gICAgICAgIGZyb206IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgxMDAlKSByb3RhdGUoMGRlZylgIH0sXG4gICAgICAgIHRvOiB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoLTEwMCUpIHJvdGF0ZSgtMzYwZGVnKWAgfVxuICAgICAgfSksXG4gICAgICBjc3Mua2V5ZnJhbWVzKCdyb3RhdGUzNjBPdXRBbmltYXRpb24nLCB7XG4gICAgICAgIGZyb206IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgtMTAwJSkgcm90YXRlKDBkZWcpYCB9LFxuICAgICAgICB0bzogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKDEwMCUpIHJvdGF0ZSgzNjBkZWcpYCB9XG4gICAgICB9KVxuICAgIClcbiAgfSxcbiAgW1Bvc2l0aW9uLkxFRlRdOiB7XG4gICAgbWFyZ2luUmlnaHQ6IC0xMixcbiAgICByaWdodDogMCxcbiAgICBtYXJnaW5Ub3A6IDEyLFxuICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoMTAwJSlgLFxuICAgIC4uLndpdGhBbmltYXRpb25zKFxuICAgICAgY3NzLmtleWZyYW1lcygnbGVmdFJvdGF0ZTM2MEluQW5pbWF0aW9uJywge1xuICAgICAgICBmcm9tOiB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoLTEwMCUpIHJvdGF0ZSgwZGVnKWAgfSxcbiAgICAgICAgdG86IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgxMDAlKSwgcm90YXRlKDM2MGRlZylgIH1cbiAgICAgIH0pLFxuICAgICAgY3NzLmtleWZyYW1lcygnbGVmdFJvdGF0ZTM2ME91dEFuaW1hdGlvbicsIHtcbiAgICAgICAgZnJvbTogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKDEwMCUpIHJvdGF0ZSgwZGVnKWAgfSxcbiAgICAgICAgdG86IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgtMTAwJSksIHJvdGF0ZSgzNjBkZWcpYCB9XG4gICAgICB9KVxuICAgIClcbiAgfSxcbiAgW1Bvc2l0aW9uLlRPUF06IHtcbiAgICByaWdodDogMCxcbiAgICBtYXJnaW5SaWdodDogMTIsXG4gICAgdG9wOiAnMTAwJScsXG4gICAgbWFyZ2luVG9wOiAxMixcbiAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKDApYCxcbiAgICAuLi53aXRoQW5pbWF0aW9ucyhcbiAgICAgIGNzcy5rZXlmcmFtZXMoJ3RvcFJvdGF0ZTM2MEluQW5pbWF0aW9uJywge1xuICAgICAgICBmcm9tOiB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoLTIwMCUpIHJvdGF0ZSgwZGVnKWAgfSxcbiAgICAgICAgdG86IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgwJSksIHJvdGF0ZSgzNjBkZWcpYCB9XG4gICAgICB9KSxcbiAgICAgIGNzcy5rZXlmcmFtZXMoJ3RvcFJvdGF0ZTM2ME91dEFuaW1hdGlvbicsIHtcbiAgICAgICAgZnJvbTogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKDAlKSByb3RhdGUoMGRlZylgIH0sXG4gICAgICAgIHRvOiB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoLTIwMCUpLCByb3RhdGUoMzYwZGVnKWAgfVxuICAgICAgfSlcbiAgICApXG4gIH0sXG4gIFtQb3NpdGlvbi5CT1RUT01dOiB7XG4gICAgcmlnaHQ6IDAsXG4gICAgbWFyZ2luUmlnaHQ6IDEyLFxuICAgIGJvdHRvbTogJzEwMCUnLFxuICAgIG1hcmdpbkJvdHRvbTogMTIsXG4gICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgwKWAsXG4gICAgLi4ud2l0aEFuaW1hdGlvbnMoXG4gICAgICBjc3Mua2V5ZnJhbWVzKCdib3R0b21Sb3RhdGUzNjBJbkFuaW1hdGlvbicsIHtcbiAgICAgICAgZnJvbTogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKDIwMCUpIHJvdGF0ZSgwZGVnKWAgfSxcbiAgICAgICAgdG86IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgwJSksIHJvdGF0ZSgzNjBkZWcpYCB9XG4gICAgICB9KSxcbiAgICAgIGNzcy5rZXlmcmFtZXMoJ2JvdHRvbVJvdGF0ZTM2ME91dEFuaW1hdGlvbicsIHtcbiAgICAgICAgZnJvbTogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKDAlKSByb3RhdGUoMGRlZylgIH0sXG4gICAgICAgIHRvOiB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoMjAwJSksIHJvdGF0ZSgzNjBkZWcpYCB9XG4gICAgICB9KVxuICAgIClcbiAgfVxufVxuXG5jb25zdCBzaGVldENsb3NlQ2xhc3NOYW1lQ2FjaGUgPSB7fVxuXG5jb25zdCBnZXRTaGVldENsb3NlQ2xhc3NOYW1lID0gcG9zaXRpb24gPT4ge1xuICBpZiAoIXNoZWV0Q2xvc2VDbGFzc05hbWVDYWNoZVtwb3NpdGlvbl0pIHtcbiAgICBzaGVldENsb3NlQ2xhc3NOYW1lQ2FjaGVbcG9zaXRpb25dID0gY3NzKHtcbiAgICAgIC4uLnNoZWV0Q2xvc2VTdHlsZXNbcG9zaXRpb25dLFxuICAgICAgLi4uc2hhcmVkU3R5bGVzXG4gICAgfSkudG9TdHJpbmcoKVxuICB9XG5cbiAgcmV0dXJuIHNoZWV0Q2xvc2VDbGFzc05hbWVDYWNoZVtwb3NpdGlvbl1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hlZXRDbG9zZSBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC4uLkJveC5wcm9wVHlwZXMsXG4gICAgaXNDbG9zaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBwb3NpdGlvbjogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAgIFBvc2l0aW9uLkxFRlQsXG4gICAgICBQb3NpdGlvbi5SSUdIVCxcbiAgICAgIFBvc2l0aW9uLlRPUCxcbiAgICAgIFBvc2l0aW9uLkJPVFRPTVxuICAgIF0pLmlzUmVxdWlyZWRcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGlzQ2xvc2luZywgcG9zaXRpb24sIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3hcbiAgICAgICAgd2lkdGg9ezMyfVxuICAgICAgICBoZWlnaHQ9ezMyfVxuICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgIGNsYXNzTmFtZT17Z2V0U2hlZXRDbG9zZUNsYXNzTmFtZShwb3NpdGlvbil9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgID5cbiAgICAgICAgPEljb24gaWNvbj1cImNyb3NzXCIgY29sb3I9XCIjZmZmXCIgLz5cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsZUFBZSxHQUFHO0VBQ3RCQyxZQUFZLGtDQURVO0VBRXRCQyxZQUFZO0FBRlUsQ0FBeEI7QUFLQSxJQUFNQyxrQkFBa0IsR0FBRyxHQUEzQjtBQUVBLElBQU1DLFlBQVksR0FBRztFQUNuQkMsT0FBTyxFQUFFLENBRFU7RUFFbkJDLFlBQVksRUFBRSxJQUZLO0VBR25CQyxRQUFRLEVBQUUsVUFIUztFQUluQkMsTUFBTSxFQUFFLFNBSlc7RUFLbkJDLGVBQWUsNEJBTEk7RUFNbkJDLFVBQVUsMEJBTlM7RUFPbkIsV0FBVztJQUNURCxlQUFlO0VBRE4sQ0FQUTtFQVVuQixZQUFZO0lBQ1ZBLGVBQWU7RUFETDtBQVZPLENBQXJCOztBQWVBLElBQU1FLGNBQWMsR0FBRyxT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