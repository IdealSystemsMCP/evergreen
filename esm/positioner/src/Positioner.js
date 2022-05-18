import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';
import { Portal } from '../../portal';
import { Stack } from '../../stack';
import { StackingOrder, Position } from '../../constants';
import getPosition from './getPosition';
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
  _inherits(Positioner, _PureComponent);

  var _super = _createSuper(Positioner);

  function Positioner(props, context) {
    var _this;

    _classCallCheck(this, Positioner);

    _this = _super.call(this, props, context);

    _defineProperty(_assertThisInitialized(_this), "getTargetRef", function (ref) {
      _this.targetRef = ref;
    });

    _defineProperty(_assertThisInitialized(_this), "getRef", function (ref) {
      _this.positionerRef = ref;

      _this.props.innerRef(ref);
    });

    _defineProperty(_assertThisInitialized(_this), "handleEnter", function () {
      _this.update();
    });

    _defineProperty(_assertThisInitialized(_this), "update", function () {
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

      var _getPosition = getPosition({
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

    _defineProperty(_assertThisInitialized(_this), "handleExited", function () {
      _this.setState(function () {
        return _objectSpread({}, initialState());
      }, function () {
        _this.props.onCloseComplete();
      });
    });

    _this.state = initialState();
    return _this;
  }

  _createClass(Positioner, [{
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
      return /*#__PURE__*/React.createElement(Stack, {
        value: StackingOrder.POSITIONER
      }, function (zIndex) {
        return /*#__PURE__*/React.createElement(React.Fragment, null, target({
          getRef: _this2.getTargetRef,
          isShown: isShown
        }), /*#__PURE__*/React.createElement(Transition, {
          appear: true,
          "in": isShown,
          timeout: animationDuration,
          onEnter: _this2.handleEnter,
          onEntered: _this2.props.onOpenComplete,
          onExited: _this2.handleExited,
          unmountOnExit: true
        }, function (state) {
          return /*#__PURE__*/React.createElement(Portal, null, children({
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
}(PureComponent);

Positioner.displayName = "Positioner";

_defineProperty(Positioner, "propTypes", {
  /**
   * The position the element that is being positioned is on.
   * Smart positioning might override this.
   */
  position: PropTypes.oneOf([Position.TOP, Position.TOP_LEFT, Position.TOP_RIGHT, Position.BOTTOM, Position.BOTTOM_LEFT, Position.BOTTOM_RIGHT, Position.LEFT, Position.RIGHT]).isRequired,

  /**
   * When true, show the element being positioned.
   */
  isShown: PropTypes.bool,

  /**
   * Function that returns the element being positioned.
   */
  children: PropTypes.func.isRequired,

  /**
   * Function that returns the ref of the element being positioned.
   */
  innerRef: PropTypes.func.isRequired,

  /**
   * The minimum distance from the body to the element being positioned.
   */
  bodyOffset: PropTypes.number.isRequired,

  /**
   * The minimum distance from the target to the element being positioned.
   */
  targetOffset: PropTypes.number.isRequired,

  /**
   * Function that should return a node for the target.
   * ({ getRef: () -> Ref, isShown: Bool }) -> React Node
   */
  target: PropTypes.func.isRequired,

  /**
   * Initial scale of the element being positioned.
   */
  initialScale: PropTypes.number.isRequired,

  /**
   * Duration of the animation.
   */
  animationDuration: PropTypes.number.isRequired,

  /**
   * Function that will be called when the exit transition is complete.
   */
  onCloseComplete: PropTypes.func.isRequired,

  /**
   * Function that will be called when the enter transition is complete.
   */
  onOpenComplete: PropTypes.func.isRequired
});

_defineProperty(Positioner, "defaultProps", {
  position: Position.BOTTOM,
  bodyOffset: 6,
  targetOffset: 6,
  initialScale: 0.9,
  animationDuration: 300,
  innerRef: function innerRef() {},
  onOpenComplete: function onOpenComplete() {},
  onCloseComplete: function onCloseComplete() {}
});

export { Positioner as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJUcmFuc2l0aW9uIiwiUG9ydGFsIiwiU3RhY2siLCJTdGFja2luZ09yZGVyIiwiUG9zaXRpb24iLCJnZXRQb3NpdGlvbiIsImFuaW1hdGlvbkVhc2luZyIsInNwcmluZyIsImluaXRpYWxTdGF0ZSIsInRvcCIsImxlZnQiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJnZXRDU1MiLCJpbml0aWFsU2NhbGUiLCJhbmltYXRpb25EdXJhdGlvbiIsInBvc2l0aW9uIiwib3BhY2l0eSIsInRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbiIsInRyYW5zaXRpb25EdXJhdGlvbiIsInRyYW5zaXRpb25Qcm9wZXJ0eSIsInRyYW5zZm9ybSIsInZpc2liaWxpdHkiLCJQb3NpdGlvbmVyIiwicHJvcHMiLCJjb250ZXh0IiwicmVmIiwidGFyZ2V0UmVmIiwicG9zaXRpb25lclJlZiIsImlubmVyUmVmIiwidXBkYXRlIiwicHJldkhlaWdodCIsInByZXZXaWR0aCIsImlzU2hvd24iLCJ0YXJnZXRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGFzRW50ZXJlZCIsImdldEF0dHJpYnV0ZSIsInZpZXdwb3J0SGVpZ2h0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJ2aWV3cG9ydFdpZHRoIiwiY2xpZW50V2lkdGgiLCJoZWlnaHQiLCJ3aWR0aCIsInBvc2l0aW9uZXJSZWN0IiwiTWF0aCIsInJvdW5kIiwibWF4Iiwib2Zmc2V0SGVpZ2h0Iiwib2Zmc2V0V2lkdGgiLCJ0YXJnZXRPZmZzZXQiLCJkaW1lbnNpb25zIiwidmlld3BvcnQiLCJ2aWV3cG9ydE9mZnNldCIsImJvZHlPZmZzZXQiLCJyZWN0Iiwic2V0U3RhdGUiLCJsYXRlc3RBbmltYXRpb25GcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm9uQ2xvc2VDb21wbGV0ZSIsInN0YXRlIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJ0YXJnZXQiLCJjaGlsZHJlbiIsIlBPU0lUSU9ORVIiLCJ6SW5kZXgiLCJnZXRSZWYiLCJnZXRUYXJnZXRSZWYiLCJoYW5kbGVFbnRlciIsIm9uT3BlbkNvbXBsZXRlIiwiaGFuZGxlRXhpdGVkIiwiY3NzIiwic3R5bGUiLCJvbmVPZiIsIlRPUCIsIlRPUF9MRUZUIiwiVE9QX1JJR0hUIiwiQk9UVE9NIiwiQk9UVE9NX0xFRlQiLCJCT1RUT01fUklHSFQiLCJMRUZUIiwiUklHSFQiLCJpc1JlcXVpcmVkIiwiYm9vbCIsImZ1bmMiLCJudW1iZXIiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcG9zaXRpb25lci9zcmMvUG9zaXRpb25lci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFRyYW5zaXRpb24gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cC9UcmFuc2l0aW9uJ1xuaW1wb3J0IHsgUG9ydGFsIH0gZnJvbSAnLi4vLi4vcG9ydGFsJ1xuaW1wb3J0IHsgU3RhY2sgfSBmcm9tICcuLi8uLi9zdGFjaydcbmltcG9ydCB7IFN0YWNraW5nT3JkZXIsIFBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJ1xuaW1wb3J0IGdldFBvc2l0aW9uIGZyb20gJy4vZ2V0UG9zaXRpb24nXG5cbmNvbnN0IGFuaW1hdGlvbkVhc2luZyA9IHtcbiAgc3ByaW5nOiBgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMjAsIDEuMTc1KWBcbn1cblxuY29uc3QgaW5pdGlhbFN0YXRlID0gKCkgPT4gKHtcbiAgdG9wOiBudWxsLFxuICBsZWZ0OiBudWxsLFxuICB0cmFuc2Zvcm1PcmlnaW46IG51bGxcbn0pXG5cbmNvbnN0IGdldENTUyA9ICh7IGluaXRpYWxTY2FsZSwgYW5pbWF0aW9uRHVyYXRpb24gfSkgPT4gKHtcbiAgcG9zaXRpb246ICdmaXhlZCcsXG4gIG9wYWNpdHk6IDAsXG4gIHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbjogYW5pbWF0aW9uRWFzaW5nLnNwcmluZyxcbiAgdHJhbnNpdGlvbkR1cmF0aW9uOiBgJHthbmltYXRpb25EdXJhdGlvbn1tc2AsXG4gIHRyYW5zaXRpb25Qcm9wZXJ0eTogJ29wYWNpdHksIHRyYW5zZm9ybScsXG4gIHRyYW5zZm9ybTogYHNjYWxlKCR7aW5pdGlhbFNjYWxlfSkgdHJhbnNsYXRlWSgtMXB4KWAsXG4gICcmW2RhdGEtc3RhdGU9XCJlbnRlcmluZ1wiXSwgJltkYXRhLXN0YXRlPVwiZW50ZXJlZFwiXSc6IHtcbiAgICBvcGFjaXR5OiAxLFxuICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJyxcbiAgICB0cmFuc2Zvcm06IGBzY2FsZSgxKWBcbiAgfSxcbiAgJyZbZGF0YS1zdGF0ZT1cImV4aXRpbmdcIl0nOiB7XG4gICAgb3BhY2l0eTogMCxcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKSdcbiAgfVxufSlcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9zaXRpb25lciBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIFRoZSBwb3NpdGlvbiB0aGUgZWxlbWVudCB0aGF0IGlzIGJlaW5nIHBvc2l0aW9uZWQgaXMgb24uXG4gICAgICogU21hcnQgcG9zaXRpb25pbmcgbWlnaHQgb3ZlcnJpZGUgdGhpcy5cbiAgICAgKi9cbiAgICBwb3NpdGlvbjogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAgIFBvc2l0aW9uLlRPUCxcbiAgICAgIFBvc2l0aW9uLlRPUF9MRUZULFxuICAgICAgUG9zaXRpb24uVE9QX1JJR0hULFxuICAgICAgUG9zaXRpb24uQk9UVE9NLFxuICAgICAgUG9zaXRpb24uQk9UVE9NX0xFRlQsXG4gICAgICBQb3NpdGlvbi5CT1RUT01fUklHSFQsXG4gICAgICBQb3NpdGlvbi5MRUZULFxuICAgICAgUG9zaXRpb24uUklHSFRcbiAgICBdKS5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCBzaG93IHRoZSBlbGVtZW50IGJlaW5nIHBvc2l0aW9uZWQuXG4gICAgICovXG4gICAgaXNTaG93bjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIGVsZW1lbnQgYmVpbmcgcG9zaXRpb25lZC5cbiAgICAgKi9cbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgcmVmIG9mIHRoZSBlbGVtZW50IGJlaW5nIHBvc2l0aW9uZWQuXG4gICAgICovXG4gICAgaW5uZXJSZWY6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbWluaW11bSBkaXN0YW5jZSBmcm9tIHRoZSBib2R5IHRvIHRoZSBlbGVtZW50IGJlaW5nIHBvc2l0aW9uZWQuXG4gICAgICovXG4gICAgYm9keU9mZnNldDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlIG1pbmltdW0gZGlzdGFuY2UgZnJvbSB0aGUgdGFyZ2V0IHRvIHRoZSBlbGVtZW50IGJlaW5nIHBvc2l0aW9uZWQuXG4gICAgICovXG4gICAgdGFyZ2V0T2Zmc2V0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IHNob3VsZCByZXR1cm4gYSBub2RlIGZvciB0aGUgdGFyZ2V0LlxuICAgICAqICh7IGdldFJlZjogKCkgLT4gUmVmLCBpc1Nob3duOiBCb29sIH0pIC0+IFJlYWN0IE5vZGVcbiAgICAgKi9cbiAgICB0YXJnZXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsIHNjYWxlIG9mIHRoZSBlbGVtZW50IGJlaW5nIHBvc2l0aW9uZWQuXG4gICAgICovXG4gICAgaW5pdGlhbFNjYWxlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBEdXJhdGlvbiBvZiB0aGUgYW5pbWF0aW9uLlxuICAgICAqL1xuICAgIGFuaW1hdGlvbkR1cmF0aW9uOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIGV4aXQgdHJhbnNpdGlvbiBpcyBjb21wbGV0ZS5cbiAgICAgKi9cbiAgICBvbkNsb3NlQ29tcGxldGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIGVudGVyIHRyYW5zaXRpb24gaXMgY29tcGxldGUuXG4gICAgICovXG4gICAgb25PcGVuQ29tcGxldGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgcG9zaXRpb246IFBvc2l0aW9uLkJPVFRPTSxcbiAgICBib2R5T2Zmc2V0OiA2LFxuICAgIHRhcmdldE9mZnNldDogNixcbiAgICBpbml0aWFsU2NhbGU6IDAuOSxcbiAgICBhbmltYXRpb25EdXJhdGlvbjogMzAwLFxuICAgIGlubmVyUmVmOiAoKSA9PiB7fSxcbiAgICBvbk9wZW5Db21wbGV0ZTogKCkgPT4ge30sXG4gICAgb25DbG9zZUNvbXBsZXRlOiAoKSA9PiB7fVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpIHtcbiAgICBzdXBlcihwcm9wcywgY29udGV4dClcbiAgICB0aGlzLnN0YXRlID0gaW5pdGlhbFN0YXRlKClcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLmxhdGVzdEFuaW1hdGlvbkZyYW1lKSB7XG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmxhdGVzdEFuaW1hdGlvbkZyYW1lKVxuICAgIH1cbiAgfVxuXG4gIGdldFRhcmdldFJlZiA9IHJlZiA9PiB7XG4gICAgdGhpcy50YXJnZXRSZWYgPSByZWZcbiAgfVxuXG4gIGdldFJlZiA9IHJlZiA9PiB7XG4gICAgdGhpcy5wb3NpdGlvbmVyUmVmID0gcmVmXG4gICAgdGhpcy5wcm9wcy5pbm5lclJlZihyZWYpXG4gIH1cblxuICBoYW5kbGVFbnRlciA9ICgpID0+IHtcbiAgICB0aGlzLnVwZGF0ZSgpXG4gIH1cblxuICB1cGRhdGUgPSAocHJldkhlaWdodCA9IDAsIHByZXZXaWR0aCA9IDApID0+IHtcbiAgICBpZiAoIXRoaXMucHJvcHMuaXNTaG93biB8fCAhdGhpcy50YXJnZXRSZWYgfHwgIXRoaXMucG9zaXRpb25lclJlZikgcmV0dXJuXG5cbiAgICBjb25zdCB0YXJnZXRSZWN0ID0gdGhpcy50YXJnZXRSZWYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICBjb25zdCBoYXNFbnRlcmVkID1cbiAgICAgIHRoaXMucG9zaXRpb25lclJlZi5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdGUnKSA9PT0gJ2VudGVyZWQnXG5cbiAgICBjb25zdCB2aWV3cG9ydEhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcbiAgICBjb25zdCB2aWV3cG9ydFdpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoXG5cbiAgICBsZXQgaGVpZ2h0XG4gICAgbGV0IHdpZHRoXG4gICAgaWYgKGhhc0VudGVyZWQpIHtcbiAgICAgIC8vIE9ubHkgd2hlbiB0aGUgYW5pbWF0aW9uIGlzIGRvbmUgc2hvdWxkIHdlIG9wdC1pbiB0byBgZ2V0Qm91bmRpbmdDbGllbnRSZWN0YFxuICAgICAgY29uc3QgcG9zaXRpb25lclJlY3QgPSB0aGlzLnBvc2l0aW9uZXJSZWYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3NlZ21lbnRpby9ldmVyZ3JlZW4vaXNzdWVzLzI1NVxuICAgICAgLy8gV2UgbmVlZCB0byBjZWlsIHRoZSB3aWR0aCBhbmQgaGVpZ2h0IHRvIHByZXZlbnQgaml0dGVyIHdoZW5cbiAgICAgIC8vIHRoZSB3aW5kb3cgaXMgem9vbWVkICh3aGVuIGB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpb2AgaXMgbm90IGFuIGludGVnZXIpXG4gICAgICBoZWlnaHQgPSBNYXRoLnJvdW5kKHBvc2l0aW9uZXJSZWN0LmhlaWdodClcbiAgICAgIHdpZHRoID0gTWF0aC5yb3VuZChwb3NpdGlvbmVyUmVjdC53aWR0aClcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gV2hlbiB0aGUgYW5pbWF0aW9uIGlzIGluIGZsaWdodCB1c2UgYG9mZnNldFdpZHRoL0hlaWdodGAgd2hpY2hcbiAgICAgIC8vIGRvZXMgbm90IGNhbGN1bGF0ZSB0aGUgYHRyYW5zZm9ybWAgcHJvcGVydHkgYXMgcGFydCBvZiBpdHMgcmVzdWx0LlxuICAgICAgLy8gVGhlcmUgaXMgc3RpbGwgY2hhbmdlIG9uIGppdHRlciBkdXJpbmcgdGhlIGFuaW1hdGlvbiAoYWx0aG91Z2ggdW5vdGljYWJsZSlcbiAgICAgIC8vIFdoZW4gdGhlIGJyb3dzZXIgaXMgem9vbWVkIGluIOKAlCB3ZSBmaXggdGhpcyB3aXRoIGBNYXRoLm1heGAuXG4gICAgICBoZWlnaHQgPSBNYXRoLm1heCh0aGlzLnBvc2l0aW9uZXJSZWYub2Zmc2V0SGVpZ2h0LCBwcmV2SGVpZ2h0KVxuICAgICAgd2lkdGggPSBNYXRoLm1heCh0aGlzLnBvc2l0aW9uZXJSZWYub2Zmc2V0V2lkdGgsIHByZXZXaWR0aClcbiAgICB9XG5cbiAgICBjb25zdCB7IHJlY3QsIHRyYW5zZm9ybU9yaWdpbiB9ID0gZ2V0UG9zaXRpb24oe1xuICAgICAgcG9zaXRpb246IHRoaXMucHJvcHMucG9zaXRpb24sXG4gICAgICB0YXJnZXRSZWN0LFxuICAgICAgdGFyZ2V0T2Zmc2V0OiB0aGlzLnByb3BzLnRhcmdldE9mZnNldCxcbiAgICAgIGRpbWVuc2lvbnM6IHtcbiAgICAgICAgaGVpZ2h0LFxuICAgICAgICB3aWR0aFxuICAgICAgfSxcbiAgICAgIHZpZXdwb3J0OiB7XG4gICAgICAgIHdpZHRoOiB2aWV3cG9ydFdpZHRoLFxuICAgICAgICBoZWlnaHQ6IHZpZXdwb3J0SGVpZ2h0XG4gICAgICB9LFxuICAgICAgdmlld3BvcnRPZmZzZXQ6IHRoaXMucHJvcHMuYm9keU9mZnNldFxuICAgIH0pXG5cbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAge1xuICAgICAgICBsZWZ0OiByZWN0LmxlZnQsXG4gICAgICAgIHRvcDogcmVjdC50b3AsXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpblxuICAgICAgfSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgdGhpcy5sYXRlc3RBbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy51cGRhdGUoaGVpZ2h0LCB3aWR0aClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBoYW5kbGVFeGl0ZWQgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5pbml0aWFsU3RhdGUoKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2xvc2VDb21wbGV0ZSgpXG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRhcmdldCxcbiAgICAgIGlzU2hvd24sXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGluaXRpYWxTY2FsZSxcbiAgICAgIHRhcmdldE9mZnNldCxcbiAgICAgIGFuaW1hdGlvbkR1cmF0aW9uXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IHsgbGVmdCwgdG9wLCB0cmFuc2Zvcm1PcmlnaW4gfSA9IHRoaXMuc3RhdGVcblxuICAgIHJldHVybiAoXG4gICAgICA8U3RhY2sgdmFsdWU9e1N0YWNraW5nT3JkZXIuUE9TSVRJT05FUn0+XG4gICAgICAgIHt6SW5kZXggPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgIHt0YXJnZXQoeyBnZXRSZWY6IHRoaXMuZ2V0VGFyZ2V0UmVmLCBpc1Nob3duIH0pfVxuXG4gICAgICAgICAgICAgIDxUcmFuc2l0aW9uXG4gICAgICAgICAgICAgICAgYXBwZWFyXG4gICAgICAgICAgICAgICAgaW49e2lzU2hvd259XG4gICAgICAgICAgICAgICAgdGltZW91dD17YW5pbWF0aW9uRHVyYXRpb259XG4gICAgICAgICAgICAgICAgb25FbnRlcj17dGhpcy5oYW5kbGVFbnRlcn1cbiAgICAgICAgICAgICAgICBvbkVudGVyZWQ9e3RoaXMucHJvcHMub25PcGVuQ29tcGxldGV9XG4gICAgICAgICAgICAgICAgb25FeGl0ZWQ9e3RoaXMuaGFuZGxlRXhpdGVkfVxuICAgICAgICAgICAgICAgIHVubW91bnRPbkV4aXRcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtzdGF0ZSA9PiAoXG4gICAgICAgICAgICAgICAgICA8UG9ydGFsPlxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW4oe1xuICAgICAgICAgICAgICAgICAgICAgIHRvcCxcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0LFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLFxuICAgICAgICAgICAgICAgICAgICAgIHpJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICBjc3M6IGdldENTUyh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsU2NhbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25EdXJhdGlvblxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW4sXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wLFxuICAgICAgICAgICAgICAgICAgICAgICAgekluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBnZXRSZWY6IHRoaXMuZ2V0UmVmLFxuICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgPC9Qb3J0YWw+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9UcmFuc2l0aW9uPlxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICApXG4gICAgICAgIH19XG4gICAgICA8L1N0YWNrPlxuICAgIClcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsYUFBaEIsUUFBcUMsT0FBckM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsVUFBUCxNQUF1QixtQ0FBdkI7QUFDQSxTQUFTQyxNQUFULFFBQXVCLGNBQXZCO0FBQ0EsU0FBU0MsS0FBVCxRQUFzQixhQUF0QjtBQUNBLFNBQVNDLGFBQVQsRUFBd0JDLFFBQXhCLFFBQXdDLGlCQUF4QztBQUNBLE9BQU9DLFdBQVAsTUFBd0IsZUFBeEI7QUFFQSxJQUFNQyxlQUFlLEdBQUc7RUFDdEJDLE1BQU07QUFEZ0IsQ0FBeEI7O0FBSUEsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWU7RUFBQSxPQUFPO0lBQzFCQyxHQUFHLEVBQUUsSUFEcUI7SUFFMUJDLElBQUksRUFBRSxJQUZvQjtJ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