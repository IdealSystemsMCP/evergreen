import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _excluded = ["isClosing", "position"];

var _sheetCloseStyles;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from 'ui-box';
import { css } from 'glamor';
import { Icon } from '../../icon';
import { Position } from '../../constants';
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

var sheetCloseStyles = (_sheetCloseStyles = {}, _defineProperty(_sheetCloseStyles, Position.RIGHT, _objectSpread({
  left: 0,
  marginLeft: -12,
  marginTop: 12,
  transform: "translateX(-100%)"
}, withAnimations(css.keyframes('rotate360InAnimation', {
  from: {
    transform: "translateX(100%) rotate(0deg)"
  },
  to: {
    transform: "translateX(-100%) rotate(-360deg)"
  }
}), css.keyframes('rotate360OutAnimation', {
  from: {
    transform: "translateX(-100%) rotate(0deg)"
  },
  to: {
    transform: "translateX(100%) rotate(360deg)"
  }
})))), _defineProperty(_sheetCloseStyles, Position.LEFT, _objectSpread({
  marginRight: -12,
  right: 0,
  marginTop: 12,
  transform: "translateX(100%)"
}, withAnimations(css.keyframes('leftRotate360InAnimation', {
  from: {
    transform: "translateX(-100%) rotate(0deg)"
  },
  to: {
    transform: "translateX(100%), rotate(360deg)"
  }
}), css.keyframes('leftRotate360OutAnimation', {
  from: {
    transform: "translateX(100%) rotate(0deg)"
  },
  to: {
    transform: "translateX(-100%), rotate(360deg)"
  }
})))), _defineProperty(_sheetCloseStyles, Position.TOP, _objectSpread({
  right: 0,
  marginRight: 12,
  top: '100%',
  marginTop: 12,
  transform: "translateY(0)"
}, withAnimations(css.keyframes('topRotate360InAnimation', {
  from: {
    transform: "translateY(-200%) rotate(0deg)"
  },
  to: {
    transform: "translateY(0%), rotate(360deg)"
  }
}), css.keyframes('topRotate360OutAnimation', {
  from: {
    transform: "translateY(0%) rotate(0deg)"
  },
  to: {
    transform: "translateY(-200%), rotate(360deg)"
  }
})))), _defineProperty(_sheetCloseStyles, Position.BOTTOM, _objectSpread({
  right: 0,
  marginRight: 12,
  bottom: '100%',
  marginBottom: 12,
  transform: "translateY(0)"
}, withAnimations(css.keyframes('bottomRotate360InAnimation', {
  from: {
    transform: "translateY(200%) rotate(0deg)"
  },
  to: {
    transform: "translateY(0%), rotate(360deg)"
  }
}), css.keyframes('bottomRotate360OutAnimation', {
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
    sheetCloseClassNameCache[position] = css(_objectSpread(_objectSpread({}, sheetCloseStyles[position]), sharedStyles)).toString();
  }

  return sheetCloseClassNameCache[position];
};

var SheetClose = /*#__PURE__*/function (_PureComponent) {
  _inherits(SheetClose, _PureComponent);

  var _super = _createSuper(SheetClose);

  function SheetClose() {
    _classCallCheck(this, SheetClose);

    return _super.apply(this, arguments);
  }

  _createClass(SheetClose, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isClosing = _this$props.isClosing,
          position = _this$props.position,
          props = _objectWithoutProperties(_this$props, _excluded);

      return /*#__PURE__*/React.createElement(Box, _extends({
        width: 32,
        height: 32,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        className: getSheetCloseClassName(position)
      }, props), /*#__PURE__*/React.createElement(Icon, {
        icon: "cross",
        color: "#fff"
      }));
    }
  }]);

  return SheetClose;
}(PureComponent);

SheetClose.displayName = "SheetClose";

_defineProperty(SheetClose, "propTypes", _objectSpread(_objectSpread({}, Box.propTypes), {}, {
  isClosing: PropTypes.bool,
  position: PropTypes.oneOf([Position.LEFT, Position.RIGHT, Position.TOP, Position.BOTTOM]).isRequired
}));

export { SheetClose as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJCb3giLCJjc3MiLCJJY29uIiwiUG9zaXRpb24iLCJhbmltYXRpb25FYXNpbmciLCJkZWNlbGVyYXRpb24iLCJhY2NlbGVyYXRpb24iLCJBTklNQVRJT05fRFVSQVRJT04iLCJzaGFyZWRTdHlsZXMiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwicG9zaXRpb24iLCJjdXJzb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0cmFuc2l0aW9uIiwid2l0aEFuaW1hdGlvbnMiLCJhbmltYXRlSW4iLCJhbmltYXRlT3V0IiwiYW5pbWF0aW9uIiwic2hlZXRDbG9zZVN0eWxlcyIsIlJJR0hUIiwibGVmdCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5Ub3AiLCJ0cmFuc2Zvcm0iLCJrZXlmcmFtZXMiLCJmcm9tIiwidG8iLCJMRUZUIiwibWFyZ2luUmlnaHQiLCJyaWdodCIsIlRPUCIsInRvcCIsIkJPVFRPTSIsImJvdHRvbSIsIm1hcmdpbkJvdHRvbSIsInNoZWV0Q2xvc2VDbGFzc05hbWVDYWNoZSIsImdldFNoZWV0Q2xvc2VDbGFzc05hbWUiLCJ0b1N0cmluZyIsIlNoZWV0Q2xvc2UiLCJwcm9wcyIsImlzQ2xvc2luZyIsInByb3BUeXBlcyIsImJvb2wiLCJvbmVPZiIsImlzUmVxdWlyZWQiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2lkZS1zaGVldC9zcmMvU2hlZXRDbG9zZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEJveCBmcm9tICd1aS1ib3gnXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnLi4vLi4vaWNvbidcbmltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJ1xuXG5jb25zdCBhbmltYXRpb25FYXNpbmcgPSB7XG4gIGRlY2VsZXJhdGlvbjogYGN1YmljLWJlemllcigwLjAsIDAuMCwgMC4yLCAxKWAsXG4gIGFjY2VsZXJhdGlvbjogYGN1YmljLWJlemllcigwLjQsIDAuMCwgMSwgMSlgXG59XG5cbmNvbnN0IEFOSU1BVElPTl9EVVJBVElPTiA9IDI0MFxuXG5jb25zdCBzaGFyZWRTdHlsZXMgPSB7XG4gIHBhZGRpbmc6IDQsXG4gIGJvcmRlclJhZGl1czogOTk5OSxcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIGN1cnNvcjogJ3BvaW50ZXInLFxuICBiYWNrZ3JvdW5kQ29sb3I6IGByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNClgLFxuICB0cmFuc2l0aW9uOiBgYmFja2dyb3VuZC1jb2xvciAxMjBtc2AsXG4gICcmOmhvdmVyJzoge1xuICAgIGJhY2tncm91bmRDb2xvcjogYHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KWBcbiAgfSxcbiAgJyY6YWN0aXZlJzoge1xuICAgIGJhY2tncm91bmRDb2xvcjogYHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KWBcbiAgfVxufVxuXG5jb25zdCB3aXRoQW5pbWF0aW9ucyA9IChhbmltYXRlSW4sIGFuaW1hdGVPdXQpID0+IHtcbiAgcmV0dXJuIHtcbiAgICAnJltkYXRhLXN0YXRlPVwiZW50ZXJpbmdcIl0sICZbZGF0YS1zdGF0ZT1cImVudGVyZWRcIl0nOiB7XG4gICAgICBhbmltYXRpb246IGAke2FuaW1hdGVJbn0gJHtBTklNQVRJT05fRFVSQVRJT059bXMgJHtcbiAgICAgICAgYW5pbWF0aW9uRWFzaW5nLmRlY2VsZXJhdGlvblxuICAgICAgfSBib3RoYFxuICAgIH0sXG4gICAgJyZbZGF0YS1zdGF0ZT1cImV4aXRpbmdcIl0nOiB7XG4gICAgICBhbmltYXRpb246IGAke2FuaW1hdGVPdXR9ICR7QU5JTUFUSU9OX0RVUkFUSU9OfW1zICR7XG4gICAgICAgIGFuaW1hdGlvbkVhc2luZy5hY2NlbGVyYXRpb25cbiAgICAgIH0gYm90aGBcbiAgICB9XG4gIH1cbn1cblxuY29uc3Qgc2hlZXRDbG9zZVN0eWxlcyA9IHtcbiAgW1Bvc2l0aW9uLlJJR0hUXToge1xuICAgIGxlZnQ6IDAsXG4gICAgbWFyZ2luTGVmdDogLTEyLFxuICAgIG1hcmdpblRvcDogMTIsXG4gICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgtMTAwJSlgLFxuICAgIC4uLndpdGhBbmltYXRpb25zKFxuICAgICAgY3NzLmtleWZyYW1lcygncm90YXRlMzYwSW5BbmltYXRpb24nLCB7XG4gICAgICAgIGZyb206IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgxMDAlKSByb3RhdGUoMGRlZylgIH0sXG4gICAgICAgIHRvOiB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoLTEwMCUpIHJvdGF0ZSgtMzYwZGVnKWAgfVxuICAgICAgfSksXG4gICAgICBjc3Mua2V5ZnJhbWVzKCdyb3RhdGUzNjBPdXRBbmltYXRpb24nLCB7XG4gICAgICAgIGZyb206IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgtMTAwJSkgcm90YXRlKDBkZWcpYCB9LFxuICAgICAgICB0bzogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKDEwMCUpIHJvdGF0ZSgzNjBkZWcpYCB9XG4gICAgICB9KVxuICAgIClcbiAgfSxcbiAgW1Bvc2l0aW9uLkxFRlRdOiB7XG4gICAgbWFyZ2luUmlnaHQ6IC0xMixcbiAgICByaWdodDogMCxcbiAgICBtYXJnaW5Ub3A6IDEyLFxuICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoMTAwJSlgLFxuICAgIC4uLndpdGhBbmltYXRpb25zKFxuICAgICAgY3NzLmtleWZyYW1lcygnbGVmdFJvdGF0ZTM2MEluQW5pbWF0aW9uJywge1xuICAgICAgICBmcm9tOiB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoLTEwMCUpIHJvdGF0ZSgwZGVnKWAgfSxcbiAgICAgICAgdG86IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgxMDAlKSwgcm90YXRlKDM2MGRlZylgIH1cbiAgICAgIH0pLFxuICAgICAgY3NzLmtleWZyYW1lcygnbGVmdFJvdGF0ZTM2ME91dEFuaW1hdGlvbicsIHtcbiAgICAgICAgZnJvbTogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKDEwMCUpIHJvdGF0ZSgwZGVnKWAgfSxcbiAgICAgICAgdG86IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgtMTAwJSksIHJvdGF0ZSgzNjBkZWcpYCB9XG4gICAgICB9KVxuICAgIClcbiAgfSxcbiAgW1Bvc2l0aW9uLlRPUF06IHtcbiAgICByaWdodDogMCxcbiAgICBtYXJnaW5SaWdodDogMTIsXG4gICAgdG9wOiAnMTAwJScsXG4gICAgbWFyZ2luVG9wOiAxMixcbiAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKDApYCxcbiAgICAuLi53aXRoQW5pbWF0aW9ucyhcbiAgICAgIGNzcy5rZXlmcmFtZXMoJ3RvcFJvdGF0ZTM2MEluQW5pbWF0aW9uJywge1xuICAgICAgICBmcm9tOiB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoLTIwMCUpIHJvdGF0ZSgwZGVnKWAgfSxcbiAgICAgICAgdG86IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgwJSksIHJvdGF0ZSgzNjBkZWcpYCB9XG4gICAgICB9KSxcbiAgICAgIGNzcy5rZXlmcmFtZXMoJ3RvcFJvdGF0ZTM2ME91dEFuaW1hdGlvbicsIHtcbiAgICAgICAgZnJvbTogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKDAlKSByb3RhdGUoMGRlZylgIH0sXG4gICAgICAgIHRvOiB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoLTIwMCUpLCByb3RhdGUoMzYwZGVnKWAgfVxuICAgICAgfSlcbiAgICApXG4gIH0sXG4gIFtQb3NpdGlvbi5CT1RUT01dOiB7XG4gICAgcmlnaHQ6IDAsXG4gICAgbWFyZ2luUmlnaHQ6IDEyLFxuICAgIGJvdHRvbTogJzEwMCUnLFxuICAgIG1hcmdpbkJvdHRvbTogMTIsXG4gICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgwKWAsXG4gICAgLi4ud2l0aEFuaW1hdGlvbnMoXG4gICAgICBjc3Mua2V5ZnJhbWVzKCdib3R0b21Sb3RhdGUzNjBJbkFuaW1hdGlvbicsIHtcbiAgICAgICAgZnJvbTogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKDIwMCUpIHJvdGF0ZSgwZGVnKWAgfSxcbiAgICAgICAgdG86IHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgwJSksIHJvdGF0ZSgzNjBkZWcpYCB9XG4gICAgICB9KSxcbiAgICAgIGNzcy5rZXlmcmFtZXMoJ2JvdHRvbVJvdGF0ZTM2ME91dEFuaW1hdGlvbicsIHtcbiAgICAgICAgZnJvbTogeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKDAlKSByb3RhdGUoMGRlZylgIH0sXG4gICAgICAgIHRvOiB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoMjAwJSksIHJvdGF0ZSgzNjBkZWcpYCB9XG4gICAgICB9KVxuICAgIClcbiAgfVxufVxuXG5jb25zdCBzaGVldENsb3NlQ2xhc3NOYW1lQ2FjaGUgPSB7fVxuXG5jb25zdCBnZXRTaGVldENsb3NlQ2xhc3NOYW1lID0gcG9zaXRpb24gPT4ge1xuICBpZiAoIXNoZWV0Q2xvc2VDbGFzc05hbWVDYWNoZVtwb3NpdGlvbl0pIHtcbiAgICBzaGVldENsb3NlQ2xhc3NOYW1lQ2FjaGVbcG9zaXRpb25dID0gY3NzKHtcbiAgICAgIC4uLnNoZWV0Q2xvc2VTdHlsZXNbcG9zaXRpb25dLFxuICAgICAgLi4uc2hhcmVkU3R5bGVzXG4gICAgfSkudG9TdHJpbmcoKVxuICB9XG5cbiAgcmV0dXJuIHNoZWV0Q2xvc2VDbGFzc05hbWVDYWNoZVtwb3NpdGlvbl1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hlZXRDbG9zZSBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC4uLkJveC5wcm9wVHlwZXMsXG4gICAgaXNDbG9zaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBwb3NpdGlvbjogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAgIFBvc2l0aW9uLkxFRlQsXG4gICAgICBQb3NpdGlvbi5SSUdIVCxcbiAgICAgIFBvc2l0aW9uLlRPUCxcbiAgICAgIFBvc2l0aW9uLkJPVFRPTVxuICAgIF0pLmlzUmVxdWlyZWRcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGlzQ2xvc2luZywgcG9zaXRpb24sIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3hcbiAgICAgICAgd2lkdGg9ezMyfVxuICAgICAgICBoZWlnaHQ9ezMyfVxuICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgIGNsYXNzTmFtZT17Z2V0U2hlZXRDbG9zZUNsYXNzTmFtZShwb3NpdGlvbil9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgID5cbiAgICAgICAgPEljb24gaWNvbj1cImNyb3NzXCIgY29sb3I9XCIjZmZmXCIgLz5cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLGFBQWhCLFFBQXFDLE9BQXJDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLEdBQVAsTUFBZ0IsUUFBaEI7QUFDQSxTQUFTQyxHQUFULFFBQW9CLFFBQXBCO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQixZQUFyQjtBQUNBLFNBQVNDLFFBQVQsUUFBeUIsaUJBQXpCO0FBRUEsSUFBTUMsZUFBZSxHQUFHO0VBQ3RCQyxZQUFZLGtDQURVO0VBRXRCQyxZQUFZO0FBRlUsQ0FBeEI7QUFLQSxJQUFNQyxrQkFBa0IsR0FBRyxHQUEzQjtBQUVBLElBQU1DLFlBQVksR0FBRztFQUNuQkMsT0FBTyxFQUFFLENBRFU7RUFFbkJDLFlBQVksRUFBRSxJQUZLO0VBR25CQyxRQUFRLEVBQUUsVUFIUztFQUluQkMsTUFBTSxFQUFFLFNBSlc7RUFLbkJDLGVBQWUsNEJBTEk7RUFNbkJDLFVBQVUsMEJBTlM7RUFPbkIsV0FBVztJQUNURCxlQUFlO0VBRE4sQ0FQUTtFQVVuQixZQUFZO0lBQ1ZBLGVBQWU7RUFETDtBQVZPLENBQXJCOztBQWVBLElBQU1FLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsU0FBRCxFQUFZQyxVQUFaLEVBQTJCO0VBQ2hELE9BQU87SUFDTCxxREFBcUQ7TUFDbkRDLFNBQVMsWUFBS0YsU0FBTCxjQUFrQlQsa0JBQWxCLGdCQUNQSCxlQUFlLENBQUNDLFlBRFQ7SUFEMEMsQ0FEaEQ7SUFNTCwyQkFBMkI7TUFDekJhLFNBQVMsWUFBS0QsVUFBTCxjQUFtQlYsa0JBQW5CLGdCQUNQSCxlQUFlLENBQUNFLFlBRFQ7SUFEZ0I7RUFOdEIsQ0FBUDtBQVlELENBYkQ7O0FBZUEsSUFBTWEsZ0JBQWdCLCtEQUNuQmhCLFFBQVEsQ0FBQ2lCLEtBRFU7RUFFbEJDLElBQUksRUFBRSxDQUZZO0VBR2xCQyxVQUFVLEVBQUUsQ0FBQyxFQUhLO0VBSWxCQyxTQUFTLEVBQUUsRUFKTztFQUtsQkMsU0FBUztBQUxTLEdBTWZULGNBQWMsQ0FDZmQsR0FBRyxDQUFDd0IsU0FBSixDQUFjLHNCQUFkLEVBQXNDO0VBQ3BDQyxJQUFJLEVBQUU7SUFBRUYsU0FBUztFQUFYLENBRDhCO0VBRXBDRyxFQUFFLEVBQUU7SUFBRUgsU0FBUztFQUFYO0FBRmdDLENBQXRDLENBRGUsRUFLZnZCLEdBQUcsQ0FBQ3dCLFNBQUosQ0FBYyx1QkFBZCxFQUF1QztFQUNyQ0MsSUFBSSxFQUFFO0lBQUVGLFNBQVM7RUFBWCxDQUQrQjtFQUVyQ0csRUFBRSxFQUFFO0lBQUVILFNBQVM7RUFBWDtBQUZpQyxDQUF2QyxDQUxlLENBTkMsdUNBaUJuQnJCLFFBQVEsQ0FBQ3lCLElBakJVO0VBa0JsQkMsV0FBVyxFQUFFLENBQUMsRUFsQkk7RUFtQmxCQyxLQUFLLEVBQUUsQ0FuQlc7RUFvQmxCUCxTQUFTLEVBQUUsRUFwQk87RUFxQmxCQyxTQUFTO0FBckJTLEdBc0JmVCxjQUFjLENBQ2ZkLEdBQUcsQ0FBQ3dCLFNBQUosQ0FBYywwQkFBZCxFQUEwQztFQUN4Q0MsSUFBSSxFQUFFO0lBQUVGLFNBQVM7RUFBWCxDQURrQztFQUV4Q0csRUFBRSxFQUFFO0lBQUVILFNBQVM7RUFBWDtBQUZvQyxDQUExQyxDQURlLEVBS2Z2QixHQUFHLENBQUN3QixTQUFKLENBQWMsMkJBQWQsRUFBMkM7RUFDekNDLElBQUksRUFBRTtJQUFFRixTQUFTO0VBQVgsQ0FEbUM7RUFFekNHLEVBQUUsRUFBRTtJQUFFSCxTQUFTO0VBQVg7QUFGcUMsQ0FBM0MsQ0FMZSxDQXRCQyx1Q0FpQ25CckIsUUFBUSxDQUFDNEIsR0FqQ1U7RUFrQ2xCRCxLQUFLLEVBQUUsQ0FsQ1c7RUFtQ2xCRCxXQUFXLEVBQUUsRUFuQ0s7RUFvQ2xCRyxHQUFHLEVBQUUsTUFwQ2E7RUFxQ2xCVCxTQUFTLEVBQUUsRUFyQ087RUFzQ2xCQyxTQUFTO0FBdENTLEdBdUNmVCxjQUFjLENBQ2ZkLEdBQUcsQ0FBQ3dCLFNBQUosQ0FBYyx5QkFBZCxFQUF5QztFQUN2Q0MsSUFBSSxFQUFFO0lBQUVGLFNBQVM7RUFBWCxDQURpQztFQUV2Q0csRUFBRSxFQUFFO0lBQUVILFNBQVM7RUFBWDtBQUZtQyxDQUF6QyxDQURlLEVBS2Z2QixHQUFHLENBQUN3QixTQUFKLENBQWMsMEJBQWQsRUFBMEM7RUFDeENDLElBQUksRUFBRTtJQUFFRixTQUFTO0VBQVgsQ0FEa0M7RUFFeENHLEVBQUUsRUFBRTtJQUFFSCxTQUFTO0VBQVg7QUFGb0MsQ0FBMUMsQ0FMZSxDQXZDQyx1Q0FrRG5CckIsUUFBUSxDQUFDOEIsTUFsRFU7RUFtRGxCSCxLQUFLLEVBQUUsQ0FuRFc7RUFvRGxCRCxXQUFXLEVBQUUsRUFwREs7RUFxRGxCSyxNQUFNLEVBQUUsTUFyRFU7RUFzRGxCQyxZQUFZLEVBQUUsRUF0REk7RUF1RGxCWCxTQUFTO0FBdkRTLEdBd0RmVCxjQUFjLENBQ2ZkLEdBQUcsQ0FBQ3dCLFNBQUosQ0FBYyw0QkFBZCxFQUE0QztFQUMxQ0MsSUFBSSxFQUFFO0lBQUVGLFNBQVM7RUFBWCxDQURvQztFQUUxQ0csRUFBRSxFQUFFO0lBQUVILFNBQVM7RUFBWDtBQUZzQyxDQUE1QyxDQURlLEVBS2Z2QixHQUFHLENBQUN3QixTQUFKLENBQWMsNkJBQWQsRUFBNkM7RUFDM0NDLElBQUksRUFBRTtJQUFFRixTQUFTO0VBQVgsQ0FEcUM7RUFFM0NHLEVBQUUsRUFBRTtJQUFFSCxTQUFTO0VBQVg7QUFGdUMsQ0FBN0MsQ0FMZSxDQXhEQyxzQkFBdEI7QUFxRUEsSUFBTVksd0JBQXdCLEdBQUcsRUFBakM7O0FBRUEsSUFBTUMsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QixDQUFBMUIsUUFBUSxFQUFJO0VBQ3pDLElBQUksQ0FBQ3lCLHdCQUF3QixDQUFDekIsUUFBRCxDQUE3QixFQUF5QztJQUN2Q3lCLHdCQUF3QixDQUFDekIsUUFBRCxDQUF4QixHQUFxQ1YsR0FBRyxpQ0FDbkNrQixnQkFBZ0IsQ0FBQ1IsUUFBRCxDQURtQixHQUVuQ0gsWUFGbUMsRUFBSCxDQUdsQzhCLFFBSGtDLEVBQXJDO0VBSUQ7O0VBRUQsT0FBT0Ysd0JBQXdCLENBQUN6QixRQUFELENBQS9CO0FBQ0QsQ0FURDs7SUFXcUI0QixVOzs7Ozs7Ozs7Ozs7O1dBWW5CLGtCQUFTO01BQ1Asa0JBQTBDLEtBQUtDLEtBQS9DO01BQUEsSUFBUUMsU0FBUixlQUFRQSxTQUFSO01BQUEsSUFBbUI5QixRQUFuQixlQUFtQkEsUUFBbkI7TUFBQSxJQUFnQzZCLEtBQWhDOztNQUNBLG9CQUNFLG9CQUFDLEdBQUQ7UUFDRSxLQUFLLEVBQUUsRUFEVDtRQUVFLE1BQU0sRUFBRSxFQUZWO1FBR0UsT0FBTyxFQUFDLE1BSFY7UUFJRSxVQUFVLEVBQUMsUUFKYjtRQUtFLGNBQWMsRUFBQyxRQUxqQjtRQU1FLFNBQVMsRUFBRUgsc0JBQXNCLENBQUMxQixRQUFEO01BTm5DLEdBT002QixLQVBOLGdCQVNFLG9CQUFDLElBQUQ7UUFBTSxJQUFJLEVBQUMsT0FBWDtRQUFtQixLQUFLLEVBQUM7TUFBekIsRUFURixDQURGO0lBYUQ7Ozs7RUEzQnFDMUMsYTs7QUFBbkJ5QyxVOztnQkFBQUEsVSwrQ0FFZHZDLEdBQUcsQ0FBQzBDLFM7RUFDUEQsU0FBUyxFQUFFMUMsU0FBUyxDQUFDNEMsSTtFQUNyQmhDLFFBQVEsRUFBRVosU0FBUyxDQUFDNkMsS0FBVixDQUFnQixDQUN4QnpDLFFBQVEsQ0FBQ3lCLElBRGUsRUFFeEJ6QixRQUFRLENBQUNpQixLQUZlLEVBR3hCakIsUUFBUSxDQUFDNEIsR0FIZSxFQUl4QjVCLFFBQVEsQ0FBQzhCLE1BSmUsQ0FBaEIsRUFLUFk7OztTQVRjTixVIn0=