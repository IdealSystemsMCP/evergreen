"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Transition = _interopRequireDefault(require("react-transition-group/Transition"));

var _portal = require("../../portal");

var _stack = require("../../stack");

var _constants = require("../../constants");

var _getPosition2 = _interopRequireDefault(require("./getPosition"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var animationEasing = {
  spring: "cubic-bezier(0.175, 0.885, 0.320, 1.175)"
};

var initialState = function initialState() {
  return {
    top: null,
    left: null,
    transformOrigin: null
  };
};

var getCSS = function getCSS(_ref) {
  var initialScale = _ref.initialScale,
      animationDuration = _ref.animationDuration;
  return {
    position: 'fixed',
    opacity: 0,
    transitionTimingFunction: animationEasing.spring,
    transitionDuration: "".concat(animationDuration, "ms"),
    transitionProperty: 'opacity, transform',
    transform: "scale(".concat(initialScale, ") translateY(-1px)"),
    '&[data-state="entering"], &[data-state="entered"]': {
      opacity: 1,
      visibility: 'visible',
      transform: "scale(1)"
    },
    '&[data-state="exiting"]': {
      opacity: 0,
      transform: 'scale(1)'
    }
  };
};

var Positioner = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Positioner, _PureComponent);

  var _super = _createSuper(Positioner);

  function Positioner(props, context) {
    var _this;

    (0, _classCallCheck2["default"])(this, Positioner);
    _this = _super.call(this, props, context);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getTargetRef", function (ref) {
      _this.targetRef = ref;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getRef", function (ref) {
      _this.positionerRef = ref;

      _this.props.innerRef(ref);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleEnter", function () {
      _this.update();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "update", function () {
      var prevHeight = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var prevWidth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      if (!_this.props.isShown || !_this.targetRef || !_this.positionerRef) return;

      var targetRect = _this.targetRef.getBoundingClientRect();

      var hasEntered = _this.positionerRef.getAttribute('data-state') === 'entered';
      var viewportHeight = document.documentElement.clientHeight;
      var viewportWidth = document.documentElement.clientWidth;
      var height;
      var width;

      if (hasEntered) {
        // Only when the animation is done should we opt-in to `getBoundingClientRect`
        var positionerRect = _this.positionerRef.getBoundingClientRect(); // https://github.com/segmentio/evergreen/issues/255
        // We need to ceil the width and height to prevent jitter when
        // the window is zoomed (when `window.devicePixelRatio` is not an integer)


        height = Math.round(positionerRect.height);
        width = Math.round(positionerRect.width);
      } else {
        // When the animation is in flight use `offsetWidth/Height` which
        // does not calculate the `transform` property as part of its result.
        // There is still change on jitter during the animation (although unoticable)
        // When the browser is zoomed in — we fix this with `Math.max`.
        height = Math.max(_this.positionerRef.offsetHeight, prevHeight);
        width = Math.max(_this.positionerRef.offsetWidth, prevWidth);
      }

      var _getPosition = (0, _getPosition2["default"])({
        position: _this.props.position,
        targetRect: targetRect,
        targetOffset: _this.props.targetOffset,
        dimensions: {
          height: height,
          width: width
        },
        viewport: {
          width: viewportWidth,
          height: viewportHeight
        },
        viewportOffset: _this.props.bodyOffset
      }),
          rect = _getPosition.rect,
          transformOrigin = _getPosition.transformOrigin;

      _this.setState({
        left: rect.left,
        top: rect.top,
        transformOrigin: transformOrigin
      }, function () {
        _this.latestAnimationFrame = requestAnimationFrame(function () {
          _this.update(height, width);
        });
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleExited", function () {
      _this.setState(function () {
        return _objectSpread({}, initialState());
      }, function () {
        _this.props.onCloseComplete();
      });
    });
    _this.state = initialState();
    return _this;
  }

  (0, _createClass2["default"])(Positioner, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.latestAnimationFrame) {
        cancelAnimationFrame(this.latestAnimationFrame);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          target = _this$props.target,
          isShown = _this$props.isShown,
          children = _this$props.children,
          initialScale = _this$props.initialScale,
          targetOffset = _this$props.targetOffset,
          animationDuration = _this$props.animationDuration;
      var _this$state = this.state,
          left = _this$state.left,
          top = _this$state.top,
          transformOrigin = _this$state.transformOrigin;
      return /*#__PURE__*/_react["default"].createElement(_stack.Stack, {
        value: _constants.StackingOrder.POSITIONER
      }, function (zIndex) {
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, target({
          getRef: _this2.getTargetRef,
          isShown: isShown
        }), /*#__PURE__*/_react["default"].createElement(_Transition["default"], {
          appear: true,
          "in": isShown,
          timeout: animationDuration,
          onEnter: _this2.handleEnter,
          onEntered: _this2.props.onOpenComplete,
          onExited: _this2.handleExited,
          unmountOnExit: true
        }, function (state) {
          return /*#__PURE__*/_react["default"].createElement(_portal.Portal, null, children({
            top: top,
            left: left,
            state: state,
            zIndex: zIndex,
            css: getCSS({
              targetOffset: targetOffset,
              initialScale: initialScale,
              animationDuration: animationDuration
            }),
            style: {
              transformOrigin: transformOrigin,
              left: left,
              top: top,
              zIndex: zIndex
            },
            getRef: _this2.getRef,
            animationDuration: animationDuration
          }));
        }));
      });
    }
  }]);
  return Positioner;
}(_react.PureComponent);

exports["default"] = Positioner;
Positioner.displayName = "Positioner";
(0, _defineProperty2["default"])(Positioner, "propTypes", {
  /**
   * The position the element that is being positioned is on.
   * Smart positioning might override this.
   */
  position: _propTypes["default"].oneOf([_constants.Position.TOP, _constants.Position.TOP_LEFT, _constants.Position.TOP_RIGHT, _constants.Position.BOTTOM, _constants.Position.BOTTOM_LEFT, _constants.Position.BOTTOM_RIGHT, _constants.Position.LEFT, _constants.Position.RIGHT]).isRequired,

  /**
   * When true, show the element being positioned.
   */
  isShown: _propTypes["default"].bool,

  /**
   * Function that returns the element being positioned.
   */
  children: _propTypes["default"].func.isRequired,

  /**
   * Function that returns the ref of the element being positioned.
   */
  innerRef: _propTypes["default"].func.isRequired,

  /**
   * The minimum distance from the body to the element being positioned.
   */
  bodyOffset: _propTypes["default"].number.isRequired,

  /**
   * The minimum distance from the target to the element being positioned.
   */
  targetOffset: _propTypes["default"].number.isRequired,

  /**
   * Function that should return a node for the target.
   * ({ getRef: () -> Ref, isShown: Bool }) -> React Node
   */
  target: _propTypes["default"].func.isRequired,

  /**
   * Initial scale of the element being positioned.
   */
  initialScale: _propTypes["default"].number.isRequired,

  /**
   * Duration of the animation.
   */
  animationDuration: _propTypes["default"].number.isRequired,

  /**
   * Function that will be called when the exit transition is complete.
   */
  onCloseComplete: _propTypes["default"].func.isRequired,

  /**
   * Function that will be called when the enter transition is complete.
   */
  onOpenComplete: _propTypes["default"].func.isRequired
});
(0, _defineProperty2["default"])(Positioner, "defaultProps", {
  position: _constants.Position.BOTTOM,
  bodyOffset: 6,
  targetOffset: 6,
  initialScale: 0.9,
  animationDuration: 300,
  innerRef: function innerRef() {},
  onOpenComplete: function onOpenComplete() {},
  onCloseComplete: function onCloseComplete() {}
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJhbmltYXRpb25FYXNpbmciLCJzcHJpbmciLCJpbml0aWFsU3RhdGUiLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtT3JpZ2luIiwiZ2V0Q1NTIiwiaW5pdGlhbFNjYWxlIiwiYW5pbWF0aW9uRHVyYXRpb24iLCJwb3NpdGlvbiIsIm9wYWNpdHkiLCJ0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24iLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJ0cmFuc2l0aW9uUHJvcGVydHkiLCJ0cmFuc2Zvcm0iLCJ2aXNpYmlsaXR5IiwiUG9zaXRpb25lciIsInByb3BzIiwiY29udGV4dCIsInJlZiIsInRhcmdldFJlZiIsInBvc2l0aW9uZXJSZWYiLCJpbm5lclJlZiIsInVwZGF0ZSIsInByZXZIZWlnaHQiLCJwcmV2V2lkdGgiLCJpc1Nob3duIiwidGFyZ2V0UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImhhc0VudGVyZWQiLCJnZXRBdHRyaWJ1dGUiLCJ2aWV3cG9ydEhlaWdodCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50SGVpZ2h0Iiwidmlld3BvcnRXaWR0aCIsImNsaWVudFdpZHRoIiwiaGVpZ2h0Iiwid2lkdGgiLCJwb3NpdGlvbmVyUmVjdCIsIk1hdGgiLCJyb3VuZCIsIm1heCIsIm9mZnNldEhlaWdodCIsIm9mZnNldFdpZHRoIiwiZ2V0UG9zaXRpb24iLCJ0YXJnZXRPZmZzZXQiLCJkaW1lbnNpb25zIiwidmlld3BvcnQiLCJ2aWV3cG9ydE9mZnNldCIsImJvZHlPZmZzZXQiLCJyZWN0Iiwic2V0U3RhdGUiLCJsYXRlc3RBbmltYXRpb25GcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm9uQ2xvc2VDb21wbGV0ZSIsInN0YXRlIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJ0YXJnZXQiLCJjaGlsZHJlbiIsIlN0YWNraW5nT3JkZXIiLCJQT1NJVElPTkVSIiwiekluZGV4IiwiZ2V0UmVmIiwiZ2V0VGFyZ2V0UmVmIiwiaGFuZGxlRW50ZXIiLCJvbk9wZW5Db21wbGV0ZSIsImhhbmRsZUV4aXRlZCIsImNzcyIsInN0eWxlIiwiUHVyZUNvbXBvbmVudCIsIlByb3BUeXBlcyIsIm9uZU9mIiwiUG9zaXRpb24iLCJUT1AiLCJUT1BfTEVGVCIsIlRPUF9SSUdIVCIsIkJPVFRPTSIsIkJPVFRPTV9MRUZUIiwiQk9UVE9NX1JJR0hUIiwiTEVGVCIsIlJJR0hUIiwiaXNSZXF1aXJlZCIsImJvb2wiLCJmdW5jIiwibnVtYmVyIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3Bvc2l0aW9uZXIvc3JjL1Bvc2l0aW9uZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBUcmFuc2l0aW9uIGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvVHJhbnNpdGlvbidcbmltcG9ydCB7IFBvcnRhbCB9IGZyb20gJy4uLy4uL3BvcnRhbCdcbmltcG9ydCB7IFN0YWNrIH0gZnJvbSAnLi4vLi4vc3RhY2snXG5pbXBvcnQgeyBTdGFja2luZ09yZGVyLCBQb3NpdGlvbiB9IGZyb20gJy4uLy4uL2NvbnN0YW50cydcbmltcG9ydCBnZXRQb3NpdGlvbiBmcm9tICcuL2dldFBvc2l0aW9uJ1xuXG5jb25zdCBhbmltYXRpb25FYXNpbmcgPSB7XG4gIHNwcmluZzogYGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIwLCAxLjE3NSlgXG59XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9ICgpID0+ICh7XG4gIHRvcDogbnVsbCxcbiAgbGVmdDogbnVsbCxcbiAgdHJhbnNmb3JtT3JpZ2luOiBudWxsXG59KVxuXG5jb25zdCBnZXRDU1MgPSAoeyBpbml0aWFsU2NhbGUsIGFuaW1hdGlvbkR1cmF0aW9uIH0pID0+ICh7XG4gIHBvc2l0aW9uOiAnZml4ZWQnLFxuICBvcGFjaXR5OiAwLFxuICB0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb246IGFuaW1hdGlvbkVhc2luZy5zcHJpbmcsXG4gIHRyYW5zaXRpb25EdXJhdGlvbjogYCR7YW5pbWF0aW9uRHVyYXRpb259bXNgLFxuICB0cmFuc2l0aW9uUHJvcGVydHk6ICdvcGFjaXR5LCB0cmFuc2Zvcm0nLFxuICB0cmFuc2Zvcm06IGBzY2FsZSgke2luaXRpYWxTY2FsZX0pIHRyYW5zbGF0ZVkoLTFweClgLFxuICAnJltkYXRhLXN0YXRlPVwiZW50ZXJpbmdcIl0sICZbZGF0YS1zdGF0ZT1cImVudGVyZWRcIl0nOiB7XG4gICAgb3BhY2l0eTogMSxcbiAgICB2aXNpYmlsaXR5OiAndmlzaWJsZScsXG4gICAgdHJhbnNmb3JtOiBgc2NhbGUoMSlgXG4gIH0sXG4gICcmW2RhdGEtc3RhdGU9XCJleGl0aW5nXCJdJzoge1xuICAgIG9wYWNpdHk6IDAsXG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknXG4gIH1cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvc2l0aW9uZXIgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBUaGUgcG9zaXRpb24gdGhlIGVsZW1lbnQgdGhhdCBpcyBiZWluZyBwb3NpdGlvbmVkIGlzIG9uLlxuICAgICAqIFNtYXJ0IHBvc2l0aW9uaW5nIG1pZ2h0IG92ZXJyaWRlIHRoaXMuXG4gICAgICovXG4gICAgcG9zaXRpb246IFByb3BUeXBlcy5vbmVPZihbXG4gICAgICBQb3NpdGlvbi5UT1AsXG4gICAgICBQb3NpdGlvbi5UT1BfTEVGVCxcbiAgICAgIFBvc2l0aW9uLlRPUF9SSUdIVCxcbiAgICAgIFBvc2l0aW9uLkJPVFRPTSxcbiAgICAgIFBvc2l0aW9uLkJPVFRPTV9MRUZULFxuICAgICAgUG9zaXRpb24uQk9UVE9NX1JJR0hULFxuICAgICAgUG9zaXRpb24uTEVGVCxcbiAgICAgIFBvc2l0aW9uLlJJR0hUXG4gICAgXSkuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgc2hvdyB0aGUgZWxlbWVudCBiZWluZyBwb3NpdGlvbmVkLlxuICAgICAqL1xuICAgIGlzU2hvd246IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBlbGVtZW50IGJlaW5nIHBvc2l0aW9uZWQuXG4gICAgICovXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIHJlZiBvZiB0aGUgZWxlbWVudCBiZWluZyBwb3NpdGlvbmVkLlxuICAgICAqL1xuICAgIGlubmVyUmVmOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlIG1pbmltdW0gZGlzdGFuY2UgZnJvbSB0aGUgYm9keSB0byB0aGUgZWxlbWVudCBiZWluZyBwb3NpdGlvbmVkLlxuICAgICAqL1xuICAgIGJvZHlPZmZzZXQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBtaW5pbXVtIGRpc3RhbmNlIGZyb20gdGhlIHRhcmdldCB0byB0aGUgZWxlbWVudCBiZWluZyBwb3NpdGlvbmVkLlxuICAgICAqL1xuICAgIHRhcmdldE9mZnNldDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdGhhdCBzaG91bGQgcmV0dXJuIGEgbm9kZSBmb3IgdGhlIHRhcmdldC5cbiAgICAgKiAoeyBnZXRSZWY6ICgpIC0+IFJlZiwgaXNTaG93bjogQm9vbCB9KSAtPiBSZWFjdCBOb2RlXG4gICAgICovXG4gICAgdGFyZ2V0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbCBzY2FsZSBvZiB0aGUgZWxlbWVudCBiZWluZyBwb3NpdGlvbmVkLlxuICAgICAqL1xuICAgIGluaXRpYWxTY2FsZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogRHVyYXRpb24gb2YgdGhlIGFuaW1hdGlvbi5cbiAgICAgKi9cbiAgICBhbmltYXRpb25EdXJhdGlvbjogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZSBleGl0IHRyYW5zaXRpb24gaXMgY29tcGxldGUuXG4gICAgICovXG4gICAgb25DbG9zZUNvbXBsZXRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZSBlbnRlciB0cmFuc2l0aW9uIGlzIGNvbXBsZXRlLlxuICAgICAqL1xuICAgIG9uT3BlbkNvbXBsZXRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHBvc2l0aW9uOiBQb3NpdGlvbi5CT1RUT00sXG4gICAgYm9keU9mZnNldDogNixcbiAgICB0YXJnZXRPZmZzZXQ6IDYsXG4gICAgaW5pdGlhbFNjYWxlOiAwLjksXG4gICAgYW5pbWF0aW9uRHVyYXRpb246IDMwMCxcbiAgICBpbm5lclJlZjogKCkgPT4ge30sXG4gICAgb25PcGVuQ29tcGxldGU6ICgpID0+IHt9LFxuICAgIG9uQ2xvc2VDb21wbGV0ZTogKCkgPT4ge31cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG4gICAgc3VwZXIocHJvcHMsIGNvbnRleHQpXG4gICAgdGhpcy5zdGF0ZSA9IGluaXRpYWxTdGF0ZSgpXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5sYXRlc3RBbmltYXRpb25GcmFtZSkge1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5sYXRlc3RBbmltYXRpb25GcmFtZSlcbiAgICB9XG4gIH1cblxuICBnZXRUYXJnZXRSZWYgPSByZWYgPT4ge1xuICAgIHRoaXMudGFyZ2V0UmVmID0gcmVmXG4gIH1cblxuICBnZXRSZWYgPSByZWYgPT4ge1xuICAgIHRoaXMucG9zaXRpb25lclJlZiA9IHJlZlxuICAgIHRoaXMucHJvcHMuaW5uZXJSZWYocmVmKVxuICB9XG5cbiAgaGFuZGxlRW50ZXIgPSAoKSA9PiB7XG4gICAgdGhpcy51cGRhdGUoKVxuICB9XG5cbiAgdXBkYXRlID0gKHByZXZIZWlnaHQgPSAwLCBwcmV2V2lkdGggPSAwKSA9PiB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmlzU2hvd24gfHwgIXRoaXMudGFyZ2V0UmVmIHx8ICF0aGlzLnBvc2l0aW9uZXJSZWYpIHJldHVyblxuXG4gICAgY29uc3QgdGFyZ2V0UmVjdCA9IHRoaXMudGFyZ2V0UmVmLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgY29uc3QgaGFzRW50ZXJlZCA9XG4gICAgICB0aGlzLnBvc2l0aW9uZXJSZWYuZ2V0QXR0cmlidXRlKCdkYXRhLXN0YXRlJykgPT09ICdlbnRlcmVkJ1xuXG4gICAgY29uc3Qgdmlld3BvcnRIZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgY29uc3Qgdmlld3BvcnRXaWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aFxuXG4gICAgbGV0IGhlaWdodFxuICAgIGxldCB3aWR0aFxuICAgIGlmIChoYXNFbnRlcmVkKSB7XG4gICAgICAvLyBPbmx5IHdoZW4gdGhlIGFuaW1hdGlvbiBpcyBkb25lIHNob3VsZCB3ZSBvcHQtaW4gdG8gYGdldEJvdW5kaW5nQ2xpZW50UmVjdGBcbiAgICAgIGNvbnN0IHBvc2l0aW9uZXJSZWN0ID0gdGhpcy5wb3NpdGlvbmVyUmVmLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zZWdtZW50aW8vZXZlcmdyZWVuL2lzc3Vlcy8yNTVcbiAgICAgIC8vIFdlIG5lZWQgdG8gY2VpbCB0aGUgd2lkdGggYW5kIGhlaWdodCB0byBwcmV2ZW50IGppdHRlciB3aGVuXG4gICAgICAvLyB0aGUgd2luZG93IGlzIHpvb21lZCAod2hlbiBgd2luZG93LmRldmljZVBpeGVsUmF0aW9gIGlzIG5vdCBhbiBpbnRlZ2VyKVxuICAgICAgaGVpZ2h0ID0gTWF0aC5yb3VuZChwb3NpdGlvbmVyUmVjdC5oZWlnaHQpXG4gICAgICB3aWR0aCA9IE1hdGgucm91bmQocG9zaXRpb25lclJlY3Qud2lkdGgpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFdoZW4gdGhlIGFuaW1hdGlvbiBpcyBpbiBmbGlnaHQgdXNlIGBvZmZzZXRXaWR0aC9IZWlnaHRgIHdoaWNoXG4gICAgICAvLyBkb2VzIG5vdCBjYWxjdWxhdGUgdGhlIGB0cmFuc2Zvcm1gIHByb3BlcnR5IGFzIHBhcnQgb2YgaXRzIHJlc3VsdC5cbiAgICAgIC8vIFRoZXJlIGlzIHN0aWxsIGNoYW5nZSBvbiBqaXR0ZXIgZHVyaW5nIHRoZSBhbmltYXRpb24gKGFsdGhvdWdoIHVub3RpY2FibGUpXG4gICAgICAvLyBXaGVuIHRoZSBicm93c2VyIGlzIHpvb21lZCBpbiDigJQgd2UgZml4IHRoaXMgd2l0aCBgTWF0aC5tYXhgLlxuICAgICAgaGVpZ2h0ID0gTWF0aC5tYXgodGhpcy5wb3NpdGlvbmVyUmVmLm9mZnNldEhlaWdodCwgcHJldkhlaWdodClcbiAgICAgIHdpZHRoID0gTWF0aC5tYXgodGhpcy5wb3NpdGlvbmVyUmVmLm9mZnNldFdpZHRoLCBwcmV2V2lkdGgpXG4gICAgfVxuXG4gICAgY29uc3QgeyByZWN0LCB0cmFuc2Zvcm1PcmlnaW4gfSA9IGdldFBvc2l0aW9uKHtcbiAgICAgIHBvc2l0aW9uOiB0aGlzLnByb3BzLnBvc2l0aW9uLFxuICAgICAgdGFyZ2V0UmVjdCxcbiAgICAgIHRhcmdldE9mZnNldDogdGhpcy5wcm9wcy50YXJnZXRPZmZzZXQsXG4gICAgICBkaW1lbnNpb25zOiB7XG4gICAgICAgIGhlaWdodCxcbiAgICAgICAgd2lkdGhcbiAgICAgIH0sXG4gICAgICB2aWV3cG9ydDoge1xuICAgICAgICB3aWR0aDogdmlld3BvcnRXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiB2aWV3cG9ydEhlaWdodFxuICAgICAgfSxcbiAgICAgIHZpZXdwb3J0T2Zmc2V0OiB0aGlzLnByb3BzLmJvZHlPZmZzZXRcbiAgICB9KVxuXG4gICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgIHtcbiAgICAgICAgbGVmdDogcmVjdC5sZWZ0LFxuICAgICAgICB0b3A6IHJlY3QudG9wLFxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW5cbiAgICAgIH0sXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHRoaXMubGF0ZXN0QW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMudXBkYXRlKGhlaWdodCwgd2lkdGgpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgaGFuZGxlRXhpdGVkID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uaW5pdGlhbFN0YXRlKClcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNsb3NlQ29tcGxldGUoKVxuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB0YXJnZXQsXG4gICAgICBpc1Nob3duLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBpbml0aWFsU2NhbGUsXG4gICAgICB0YXJnZXRPZmZzZXQsXG4gICAgICBhbmltYXRpb25EdXJhdGlvblxuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCB7IGxlZnQsIHRvcCwgdHJhbnNmb3JtT3JpZ2luIH0gPSB0aGlzLnN0YXRlXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFN0YWNrIHZhbHVlPXtTdGFja2luZ09yZGVyLlBPU0lUSU9ORVJ9PlxuICAgICAgICB7ekluZGV4ID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICB7dGFyZ2V0KHsgZ2V0UmVmOiB0aGlzLmdldFRhcmdldFJlZiwgaXNTaG93biB9KX1cblxuICAgICAgICAgICAgICA8VHJhbnNpdGlvblxuICAgICAgICAgICAgICAgIGFwcGVhclxuICAgICAgICAgICAgICAgIGluPXtpc1Nob3dufVxuICAgICAgICAgICAgICAgIHRpbWVvdXQ9e2FuaW1hdGlvbkR1cmF0aW9ufVxuICAgICAgICAgICAgICAgIG9uRW50ZXI9e3RoaXMuaGFuZGxlRW50ZXJ9XG4gICAgICAgICAgICAgICAgb25FbnRlcmVkPXt0aGlzLnByb3BzLm9uT3BlbkNvbXBsZXRlfVxuICAgICAgICAgICAgICAgIG9uRXhpdGVkPXt0aGlzLmhhbmRsZUV4aXRlZH1cbiAgICAgICAgICAgICAgICB1bm1vdW50T25FeGl0XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7c3RhdGUgPT4gKFxuICAgICAgICAgICAgICAgICAgPFBvcnRhbD5cbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVuKHtcbiAgICAgICAgICAgICAgICAgICAgICB0b3AsXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdCxcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICB6SW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgY3NzOiBnZXRDU1Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0T2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFNjYWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uRHVyYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHpJbmRleFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZ2V0UmVmOiB0aGlzLmdldFJlZixcbiAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25EdXJhdGlvblxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgIDwvUG9ydGFsPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvVHJhbnNpdGlvbj5cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgKVxuICAgICAgICB9fVxuICAgICAgPC9TdGFjaz5cbiAgICApXG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGVBQWUsR0FBRztFQUN0QkMsTUFBTTtBQURnQixDQUF4Qjs7QUFJQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZTtFQUFBLE9BQU87SUFDMUJDLEdBQUcsRUFBRSxJQURxQjtJQUUxQkMsSUFBSSxFQUFFLElBRm9CO0lBRzFCQyxlQUFlLEVBQUU7RUFIUyxDQUFQO0FBQUEsQ0FBckI7O0FBTUEsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVM7RUFBQSxJQUFHQyxZQUFILFFBQUdBLFlBQUg7RUFBQSxJQUFpQkMsaUJBQWpCLFFBQWlCQSxpQkFBakI7RUFBQSxPQUEwQztJQUN2REMsUUFBUSxFQUFFLE9BRDZDO0lBRXZEQyxPQUFPLEVBQUUsQ0FGOEM7SUFHdkRDLHdCQUF3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