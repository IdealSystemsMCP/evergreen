import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import cx from 'classnames';
import { css } from 'glamor';
import React from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';
import Box from 'ui-box';
import { Portal } from '../../portal';
import { Stack } from '../../stack';
import { StackingOrder } from '../../constants';
import { withTheme } from '../../theme';
import safeInvoke from '../../lib/safe-invoke';
import preventBodyScroll from '../../lib/prevent-body-scroll';
var animationEasing = {
  standard: "cubic-bezier(0.4, 0.0, 0.2, 1)",
  deceleration: "cubic-bezier(0.0, 0.0, 0.2, 1)",
  acceleration: "cubic-bezier(0.4, 0.0, 1, 1)",
  sharp: "cubic-bezier(0.4, 0.0, 0.6, 1)",
  spring: "cubic-bezier(0.175, 0.885, 0.320, 1.175)"
};
var ANIMATION_DURATION = 240;
var fadeInAnimation = css.keyframes('fadeInAnimation', {
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  }
});
var fadeOutAnimation = css.keyframes('fadeOutAnimation', {
  from: {
    opacity: 1
  },
  to: {
    opacity: 0
  }
});

var animationStyles = function animationStyles(backgroundColor) {
  return {
    '&::before': {
      backgroundColor: backgroundColor,
      left: 0,
      top: 0,
      position: 'fixed',
      display: 'block',
      width: '100%',
      height: '100%',
      content: '" "'
    },
    '&[data-state="entering"]::before, &[data-state="entered"]::before': {
      animation: "".concat(fadeInAnimation, " ").concat(ANIMATION_DURATION, "ms ").concat(animationEasing.deceleration, " both")
    },
    '&[data-state="exiting"]::before, &[data-state="exited"]::before': {
      animation: "".concat(fadeOutAnimation, " ").concat(ANIMATION_DURATION, "ms ").concat(animationEasing.acceleration, " both")
    }
  };
};
/**
 * Overlay is essentially a wrapper around react-transition-group/Transition
 * Learn more: https://reactcommunity.org/react-transition-group/
 */


var Overlay = /*#__PURE__*/function (_React$Component) {
  _inherits(Overlay, _React$Component);

  var _super = _createSuper(Overlay);

  function Overlay(props) {
    var _this;

    _classCallCheck(this, Overlay);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "bringFocusInsideOverlay", function () {
      // Always delay focus manipulation to just before repaint to prevent scroll jumping
      return requestAnimationFrame(function () {
        // Container ref may be undefined between component mounting and Portal rendering
        // activeElement may be undefined in some rare cases in IE
        if (_this.containerElement == null || // eslint-disable-line eqeqeq, no-eq-null
        document.activeElement == null || // eslint-disable-line eqeqeq, no-eq-null
        !_this.props.isShown) {
          return;
        }

        var isFocusOutsideModal = !_this.containerElement.contains(document.activeElement);

        if (isFocusOutsideModal) {
          // Element marked autofocus has higher priority than the other clowns
          var autofocusElement = _this.containerElement.querySelector('[autofocus]');

          var wrapperElement = _this.containerElement.querySelector('[tabindex]');

          var buttonElement = _this.containerElement.querySelector('button');

          if (autofocusElement) {
            autofocusElement.focus();
          } else if (wrapperElement) {
            wrapperElement.focus();
          } else if (buttonElement) {
            buttonElement.focus();
          }
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "bringFocusBackToTarget", function () {
      return requestAnimationFrame(function () {
        if (_this.containerElement == null || // eslint-disable-line eqeqeq, no-eq-null
        document.activeElement == null // eslint-disable-line eqeqeq, no-eq-null
        ) {
          return;
        }

        var isFocusInsideModal = _this.containerElement.contains(document.activeElement); // Bring back focus on the target.


        if (_this.previousActiveElement && (document.activeElement === document.body || isFocusInsideModal)) {
          _this.previousActiveElement.focus();
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onEsc", function (e) {
      // Esc key
      if (e.keyCode === 27 && _this.props.shouldCloseOnEscapePress) {
        _this.close();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "close", function () {
      var shouldClose = safeInvoke(_this.props.onBeforeClose);

      if (shouldClose !== false) {
        _this.setState({
          exiting: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleBodyScroll", function (preventScroll) {
      if (_this.props.preventBodyScrolling) {
        preventBodyScroll(preventScroll);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleEnter", function () {
      _this.handleBodyScroll(true);

      safeInvoke(_this.props.onEnter);
    });

    _defineProperty(_assertThisInitialized(_this), "handleEntering", function (node) {
      document.body.addEventListener('keydown', _this.onEsc, false);

      _this.props.onEntering(node);
    });

    _defineProperty(_assertThisInitialized(_this), "handleEntered", function (node) {
      _this.previousActiveElement = document.activeElement;

      _this.bringFocusInsideOverlay();

      _this.props.onEntered(node);
    });

    _defineProperty(_assertThisInitialized(_this), "handleExit", function () {
      _this.handleBodyScroll(false);

      safeInvoke(_this.props.onExit);
    });

    _defineProperty(_assertThisInitialized(_this), "handleExiting", function (node) {
      document.body.removeEventListener('keydown', _this.onEsc, false);

      _this.bringFocusBackToTarget();

      _this.props.onExiting(node);
    });

    _defineProperty(_assertThisInitialized(_this), "handleExited", function (node) {
      _this.setState({
        exiting: false,
        exited: true
      });

      _this.props.onExited(node);
    });

    _defineProperty(_assertThisInitialized(_this), "handleBackdropClick", function (e) {
      if (e.target !== e.currentTarget || !_this.props.shouldCloseOnClick) {
        return;
      }

      _this.close();
    });

    _defineProperty(_assertThisInitialized(_this), "onContainerRef", function (ref) {
      _this.containerElement = ref;
    });

    _this.state = {
      exiting: false,
      exited: !props.isShown
    };
    return _this;
  }

  _createClass(Overlay, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!prevProps.isShown && this.props.isShown) {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({
          exited: false
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.handleBodyScroll(false);
      document.body.removeEventListener('keydown', this.onEsc, false);
    }
    /**
     * Methods borrowed from BlueprintJS
     * https://github.com/palantir/blueprint/blob/release/2.0.0/packages/core/src/components/overlay/overlay.tsx
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          theme = _this$props.theme,
          _this$props$container = _this$props.containerProps,
          containerProps = _this$props$container === void 0 ? {} : _this$props$container,
          isShown = _this$props.isShown,
          children = _this$props.children;
      var _this$state = this.state,
          exiting = _this$state.exiting,
          exited = _this$state.exited;
      if (exited) return null;
      return /*#__PURE__*/React.createElement(Stack, {
        value: StackingOrder.OVERLAY
      }, function (zIndex) {
        return /*#__PURE__*/React.createElement(Portal, null, /*#__PURE__*/React.createElement(Transition, {
          appear: true,
          unmountOnExit: true,
          timeout: ANIMATION_DURATION,
          "in": isShown && !exiting,
          onExit: _this2.handleExit,
          onExiting: _this2.handleExiting,
          onExited: _this2.handleExited,
          onEnter: _this2.handleEnter,
          onEntering: _this2.handleEntering,
          onEntered: _this2.handleEntered
        }, function (state) {
          return /*#__PURE__*/React.createElement(Box, _extends({
            onClick: _this2.handleBackdropClick,
            innerRef: _this2.onContainerRef,
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: zIndex,
            "data-state": state
          }, containerProps, {
            className: cx(containerProps.className, css(animationStyles(theme.overlayBackgroundColor)).toString())
          }), typeof children === 'function' ? children({
            state: state,
            close: _this2.close
          }) : children);
        }));
      });
    }
  }]);

  return Overlay;
}(React.Component);

Overlay.displayName = "Overlay";

_defineProperty(Overlay, "propTypes", {
  /**
   * Children can be a node or a function accepting `close: func`
   * and `state: ENTERING | ENTERED | EXITING | EXITED`.
   */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,

  /**
   * Show the component; triggers the enter or exit states.
   */
  isShown: PropTypes.bool,

  /**
   * Props to be passed through on the inner Box.
   */
  containerProps: PropTypes.object,

  /**
   * Whether or not to prevent body scrolling outside the context of the overlay
   */
  preventBodyScrolling: PropTypes.bool,

  /**
   * Boolean indicating if clicking the overlay should close the overlay.
   */
  shouldCloseOnClick: PropTypes.bool,

  /**
   * Boolean indicating if pressing the esc key should close the overlay.
   */
  shouldCloseOnEscapePress: PropTypes.bool,

  /**
   * Function called when overlay is about to close.
   * Return `false` to prevent the sheet from closing.
   * type: `Function -> Boolean`
   */
  onBeforeClose: PropTypes.func,

  /**
   * Callback fired before the "exiting" status is applied.
   * type: `Function(node: HtmlElement) -> void`
   */
  onExit: PropTypes.func,

  /**
   * Callback fired after the "exiting" status is applied.
   * type: `Function(node: HtmlElement) -> void`
   */
  onExiting: PropTypes.func,

  /**
   * Callback fired after the "exited" status is applied.
   * type: `Function(exitState: Any?, node: HtmlElement) -> void`
   */
  onExited: PropTypes.func,

  /**
   * Callback fired before the "entering" status is applied.
   * An extra parameter isAppearing is supplied to indicate if the enter stage
   * is occurring on the initial mount.
   *
   * type: `Function(node: HtmlElement, isAppearing: bool) -> void`
   */
  onEnter: PropTypes.func,

  /**
   * Callback fired after the "entering" status is applied.
   * An extra parameter isAppearing is supplied to indicate if the enter stage
   * is occurring on the initial mount.
   *
   * type: `Function(node: HtmlElement, isAppearing: bool) -> void`
   */
  onEntering: PropTypes.func,

  /**
   * Callback fired after the "entered" status is applied.
   * An extra parameter isAppearing is supplied to indicate if the enter stage
   * is occurring on the initial mount.
   *
   * type: `Function(node: HtmlElement, isAppearing: bool) -> void`
   */
  onEntered: PropTypes.func,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired
});

_defineProperty(Overlay, "defaultProps", {
  onHide: function onHide() {},
  shouldCloseOnClick: true,
  shouldCloseOnEscapePress: true,
  preventBodyScrolling: false,
  onExit: function onExit() {},
  onExiting: function onExiting() {},
  onExited: function onExited() {},
  onEnter: function onEnter() {},
  onEntering: function onEntering() {},
  onEntered: function onEntered() {}
});

export default withTheme(Overlay);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjeCIsImNzcyIsIlJlYWN0IiwiUHJvcFR5cGVzIiwiVHJhbnNpdGlvbiIsIkJveCIsIlBvcnRhbCIsIlN0YWNrIiwiU3RhY2tpbmdPcmRlciIsIndpdGhUaGVtZSIsInNhZmVJbnZva2UiLCJwcmV2ZW50Qm9keVNjcm9sbCIsImFuaW1hdGlvbkVhc2luZyIsInN0YW5kYXJkIiwiZGVjZWxlcmF0aW9uIiwiYWNjZWxlcmF0aW9uIiwic2hhcnAiLCJzcHJpbmciLCJBTklNQVRJT05fRFVSQVRJT04iLCJmYWRlSW5BbmltYXRpb24iLCJrZXlmcmFtZXMiLCJmcm9tIiwib3BhY2l0eSIsInRvIiwiZmFkZU91dEFuaW1hdGlvbiIsImFuaW1hdGlvblN0eWxlcyIsImJhY2tncm91bmRDb2xvciIsImxlZnQiLCJ0b3AiLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJ3aWR0aCIsImhlaWdodCIsImNvbnRlbnQiLCJhbmltYXRpb24iLCJPdmVybGF5IiwicHJvcHMiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjb250YWluZXJFbGVtZW50IiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50IiwiaXNTaG93biIsImlzRm9jdXNPdXRzaWRlTW9kYWwiLCJjb250YWlucyIsImF1dG9mb2N1c0VsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwid3JhcHBlckVsZW1lbnQiLCJidXR0b25FbGVtZW50IiwiZm9jdXMiLCJpc0ZvY3VzSW5zaWRlTW9kYWwiLCJwcmV2aW91c0FjdGl2ZUVsZW1lbnQiLCJib2R5IiwiZSIsImtleUNvZGUiLCJzaG91bGRDbG9zZU9uRXNjYXBlUHJlc3MiLCJjbG9zZSIsInNob3VsZENsb3NlIiwib25CZWZvcmVDbG9zZSIsInNldFN0YXRlIiwiZXhpdGluZyIsInByZXZlbnRTY3JvbGwiLCJwcmV2ZW50Qm9keVNjcm9sbGluZyIsImhhbmRsZUJvZHlTY3JvbGwiLCJvbkVudGVyIiwibm9kZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbkVzYyIsIm9uRW50ZXJpbmciLCJicmluZ0ZvY3VzSW5zaWRlT3ZlcmxheSIsIm9uRW50ZXJlZCIsIm9uRXhpdCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJicmluZ0ZvY3VzQmFja1RvVGFyZ2V0Iiwib25FeGl0aW5nIiwiZXhpdGVkIiwib25FeGl0ZWQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0Iiwic2hvdWxkQ2xvc2VPbkNsaWNrIiwicmVmIiwic3RhdGUiLCJwcmV2UHJvcHMiLCJ0aGVtZSIsImNvbnRhaW5lclByb3BzIiwiY2hpbGRyZW4iLCJPVkVSTEFZIiwiekluZGV4IiwiaGFuZGxlRXhpdCIsImhhbmRsZUV4aXRpbmciLCJoYW5kbGVFeGl0ZWQiLCJoYW5kbGVFbnRlciIsImhhbmRsZUVudGVyaW5nIiwiaGFuZGxlRW50ZXJlZCIsImhhbmRsZUJhY2tkcm9wQ2xpY2siLCJvbkNvbnRhaW5lclJlZiIsImNsYXNzTmFtZSIsIm92ZXJsYXlCYWNrZ3JvdW5kQ29sb3IiLCJ0b1N0cmluZyIsIkNvbXBvbmVudCIsIm9uZU9mVHlwZSIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiYm9vbCIsIm9iamVjdCIsIm9uSGlkZSJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vdmVybGF5L3NyYy9PdmVybGF5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnZ2xhbW9yJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFRyYW5zaXRpb24gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cC9UcmFuc2l0aW9uJ1xuaW1wb3J0IEJveCBmcm9tICd1aS1ib3gnXG5pbXBvcnQgeyBQb3J0YWwgfSBmcm9tICcuLi8uLi9wb3J0YWwnXG5pbXBvcnQgeyBTdGFjayB9IGZyb20gJy4uLy4uL3N0YWNrJ1xuaW1wb3J0IHsgU3RhY2tpbmdPcmRlciB9IGZyb20gJy4uLy4uL2NvbnN0YW50cydcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuaW1wb3J0IHNhZmVJbnZva2UgZnJvbSAnLi4vLi4vbGliL3NhZmUtaW52b2tlJ1xuaW1wb3J0IHByZXZlbnRCb2R5U2Nyb2xsIGZyb20gJy4uLy4uL2xpYi9wcmV2ZW50LWJvZHktc2Nyb2xsJ1xuXG5jb25zdCBhbmltYXRpb25FYXNpbmcgPSB7XG4gIHN0YW5kYXJkOiBgY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAwLjIsIDEpYCxcbiAgZGVjZWxlcmF0aW9uOiBgY3ViaWMtYmV6aWVyKDAuMCwgMC4wLCAwLjIsIDEpYCxcbiAgYWNjZWxlcmF0aW9uOiBgY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAxLCAxKWAsXG4gIHNoYXJwOiBgY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAwLjYsIDEpYCxcbiAgc3ByaW5nOiBgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMjAsIDEuMTc1KWBcbn1cblxuY29uc3QgQU5JTUFUSU9OX0RVUkFUSU9OID0gMjQwXG5cbmNvbnN0IGZhZGVJbkFuaW1hdGlvbiA9IGNzcy5rZXlmcmFtZXMoJ2ZhZGVJbkFuaW1hdGlvbicsIHtcbiAgZnJvbToge1xuICAgIG9wYWNpdHk6IDBcbiAgfSxcbiAgdG86IHtcbiAgICBvcGFjaXR5OiAxXG4gIH1cbn0pXG5cbmNvbnN0IGZhZGVPdXRBbmltYXRpb24gPSBjc3Mua2V5ZnJhbWVzKCdmYWRlT3V0QW5pbWF0aW9uJywge1xuICBmcm9tOiB7XG4gICAgb3BhY2l0eTogMVxuICB9LFxuICB0bzoge1xuICAgIG9wYWNpdHk6IDBcbiAgfVxufSlcblxuY29uc3QgYW5pbWF0aW9uU3R5bGVzID0gYmFja2dyb3VuZENvbG9yID0+ICh7XG4gICcmOjpiZWZvcmUnOiB7XG4gICAgYmFja2dyb3VuZENvbG9yLFxuICAgIGxlZnQ6IDAsXG4gICAgdG9wOiAwLFxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBjb250ZW50OiAnXCIgXCInXG4gIH0sXG4gICcmW2RhdGEtc3RhdGU9XCJlbnRlcmluZ1wiXTo6YmVmb3JlLCAmW2RhdGEtc3RhdGU9XCJlbnRlcmVkXCJdOjpiZWZvcmUnOiB7XG4gICAgYW5pbWF0aW9uOiBgJHtmYWRlSW5BbmltYXRpb259ICR7QU5JTUFUSU9OX0RVUkFUSU9OfW1zICR7XG4gICAgICBhbmltYXRpb25FYXNpbmcuZGVjZWxlcmF0aW9uXG4gICAgfSBib3RoYFxuICB9LFxuICAnJltkYXRhLXN0YXRlPVwiZXhpdGluZ1wiXTo6YmVmb3JlLCAmW2RhdGEtc3RhdGU9XCJleGl0ZWRcIl06OmJlZm9yZSc6IHtcbiAgICBhbmltYXRpb246IGAke2ZhZGVPdXRBbmltYXRpb259ICR7QU5JTUFUSU9OX0RVUkFUSU9OfW1zICR7XG4gICAgICBhbmltYXRpb25FYXNpbmcuYWNjZWxlcmF0aW9uXG4gICAgfSBib3RoYFxuICB9XG59KVxuXG4vKipcbiAqIE92ZXJsYXkgaXMgZXNzZW50aWFsbHkgYSB3cmFwcGVyIGFyb3VuZCByZWFjdC10cmFuc2l0aW9uLWdyb3VwL1RyYW5zaXRpb25cbiAqIExlYXJuIG1vcmU6IGh0dHBzOi8vcmVhY3Rjb21tdW5pdHkub3JnL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvXG4gKi9cbmNsYXNzIE92ZXJsYXkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENoaWxkcmVuIGNhbiBiZSBhIG5vZGUgb3IgYSBmdW5jdGlvbiBhY2NlcHRpbmcgYGNsb3NlOiBmdW5jYFxuICAgICAqIGFuZCBgc3RhdGU6IEVOVEVSSU5HIHwgRU5URVJFRCB8IEVYSVRJTkcgfCBFWElURURgLlxuICAgICAqL1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubm9kZSwgUHJvcFR5cGVzLmZ1bmNdKS5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogU2hvdyB0aGUgY29tcG9uZW50OyB0cmlnZ2VycyB0aGUgZW50ZXIgb3IgZXhpdCBzdGF0ZXMuXG4gICAgICovXG4gICAgaXNTaG93bjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBQcm9wcyB0byBiZSBwYXNzZWQgdGhyb3VnaCBvbiB0aGUgaW5uZXIgQm94LlxuICAgICAqL1xuICAgIGNvbnRhaW5lclByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gICAgLyoqXG4gICAgICogV2hldGhlciBvciBub3QgdG8gcHJldmVudCBib2R5IHNjcm9sbGluZyBvdXRzaWRlIHRoZSBjb250ZXh0IG9mIHRoZSBvdmVybGF5XG4gICAgICovXG4gICAgcHJldmVudEJvZHlTY3JvbGxpbmc6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogQm9vbGVhbiBpbmRpY2F0aW5nIGlmIGNsaWNraW5nIHRoZSBvdmVybGF5IHNob3VsZCBjbG9zZSB0aGUgb3ZlcmxheS5cbiAgICAgKi9cbiAgICBzaG91bGRDbG9zZU9uQ2xpY2s6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogQm9vbGVhbiBpbmRpY2F0aW5nIGlmIHByZXNzaW5nIHRoZSBlc2Mga2V5IHNob3VsZCBjbG9zZSB0aGUgb3ZlcmxheS5cbiAgICAgKi9cbiAgICBzaG91bGRDbG9zZU9uRXNjYXBlUHJlc3M6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gY2FsbGVkIHdoZW4gb3ZlcmxheSBpcyBhYm91dCB0byBjbG9zZS5cbiAgICAgKiBSZXR1cm4gYGZhbHNlYCB0byBwcmV2ZW50IHRoZSBzaGVldCBmcm9tIGNsb3NpbmcuXG4gICAgICogdHlwZTogYEZ1bmN0aW9uIC0+IEJvb2xlYW5gXG4gICAgICovXG4gICAgb25CZWZvcmVDbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayBmaXJlZCBiZWZvcmUgdGhlIFwiZXhpdGluZ1wiIHN0YXR1cyBpcyBhcHBsaWVkLlxuICAgICAqIHR5cGU6IGBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCkgLT4gdm9pZGBcbiAgICAgKi9cbiAgICBvbkV4aXQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgZmlyZWQgYWZ0ZXIgdGhlIFwiZXhpdGluZ1wiIHN0YXR1cyBpcyBhcHBsaWVkLlxuICAgICAqIHR5cGU6IGBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCkgLT4gdm9pZGBcbiAgICAgKi9cbiAgICBvbkV4aXRpbmc6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgZmlyZWQgYWZ0ZXIgdGhlIFwiZXhpdGVkXCIgc3RhdHVzIGlzIGFwcGxpZWQuXG4gICAgICogdHlwZTogYEZ1bmN0aW9uKGV4aXRTdGF0ZTogQW55Pywgbm9kZTogSHRtbEVsZW1lbnQpIC0+IHZvaWRgXG4gICAgICovXG4gICAgb25FeGl0ZWQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgZmlyZWQgYmVmb3JlIHRoZSBcImVudGVyaW5nXCIgc3RhdHVzIGlzIGFwcGxpZWQuXG4gICAgICogQW4gZXh0cmEgcGFyYW1ldGVyIGlzQXBwZWFyaW5nIGlzIHN1cHBsaWVkIHRvIGluZGljYXRlIGlmIHRoZSBlbnRlciBzdGFnZVxuICAgICAqIGlzIG9jY3VycmluZyBvbiB0aGUgaW5pdGlhbCBtb3VudC5cbiAgICAgKlxuICAgICAqIHR5cGU6IGBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCwgaXNBcHBlYXJpbmc6IGJvb2wpIC0+IHZvaWRgXG4gICAgICovXG4gICAgb25FbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgXCJlbnRlcmluZ1wiIHN0YXR1cyBpcyBhcHBsaWVkLlxuICAgICAqIEFuIGV4dHJhIHBhcmFtZXRlciBpc0FwcGVhcmluZyBpcyBzdXBwbGllZCB0byBpbmRpY2F0ZSBpZiB0aGUgZW50ZXIgc3RhZ2VcbiAgICAgKiBpcyBvY2N1cnJpbmcgb24gdGhlIGluaXRpYWwgbW91bnQuXG4gICAgICpcbiAgICAgKiB0eXBlOiBgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQsIGlzQXBwZWFyaW5nOiBib29sKSAtPiB2b2lkYFxuICAgICAqL1xuICAgIG9uRW50ZXJpbmc6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgZmlyZWQgYWZ0ZXIgdGhlIFwiZW50ZXJlZFwiIHN0YXR1cyBpcyBhcHBsaWVkLlxuICAgICAqIEFuIGV4dHJhIHBhcmFtZXRlciBpc0FwcGVhcmluZyBpcyBzdXBwbGllZCB0byBpbmRpY2F0ZSBpZiB0aGUgZW50ZXIgc3RhZ2VcbiAgICAgKiBpcyBvY2N1cnJpbmcgb24gdGhlIGluaXRpYWwgbW91bnQuXG4gICAgICpcbiAgICAgKiB0eXBlOiBgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQsIGlzQXBwZWFyaW5nOiBib29sKSAtPiB2b2lkYFxuICAgICAqL1xuICAgIG9uRW50ZXJlZDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBUaGVtZSBwcm92aWRlZCBieSBUaGVtZVByb3ZpZGVyLlxuICAgICAqL1xuICAgIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgb25IaWRlOiAoKSA9PiB7fSxcbiAgICBzaG91bGRDbG9zZU9uQ2xpY2s6IHRydWUsXG4gICAgc2hvdWxkQ2xvc2VPbkVzY2FwZVByZXNzOiB0cnVlLFxuICAgIHByZXZlbnRCb2R5U2Nyb2xsaW5nOiBmYWxzZSxcbiAgICBvbkV4aXQ6ICgpID0+IHt9LFxuICAgIG9uRXhpdGluZzogKCkgPT4ge30sXG4gICAgb25FeGl0ZWQ6ICgpID0+IHt9LFxuICAgIG9uRW50ZXI6ICgpID0+IHt9LFxuICAgIG9uRW50ZXJpbmc6ICgpID0+IHt9LFxuICAgIG9uRW50ZXJlZDogKCkgPT4ge31cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZXhpdGluZzogZmFsc2UsXG4gICAgICBleGl0ZWQ6ICFwcm9wcy5pc1Nob3duXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGlmICghcHJldlByb3BzLmlzU2hvd24gJiYgdGhpcy5wcm9wcy5pc1Nob3duKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tZGlkLXVwZGF0ZS1zZXQtc3RhdGVcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBleGl0ZWQ6IGZhbHNlXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuaGFuZGxlQm9keVNjcm9sbChmYWxzZSlcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uRXNjLCBmYWxzZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2RzIGJvcnJvd2VkIGZyb20gQmx1ZXByaW50SlNcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL3BhbGFudGlyL2JsdWVwcmludC9ibG9iL3JlbGVhc2UvMi4wLjAvcGFja2FnZXMvY29yZS9zcmMvY29tcG9uZW50cy9vdmVybGF5L292ZXJsYXkudHN4XG4gICAqL1xuICBicmluZ0ZvY3VzSW5zaWRlT3ZlcmxheSA9ICgpID0+IHtcbiAgICAvLyBBbHdheXMgZGVsYXkgZm9jdXMgbWFuaXB1bGF0aW9uIHRvIGp1c3QgYmVmb3JlIHJlcGFpbnQgdG8gcHJldmVudCBzY3JvbGwganVtcGluZ1xuICAgIHJldHVybiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgLy8gQ29udGFpbmVyIHJlZiBtYXkgYmUgdW5kZWZpbmVkIGJldHdlZW4gY29tcG9uZW50IG1vdW50aW5nIGFuZCBQb3J0YWwgcmVuZGVyaW5nXG4gICAgICAvLyBhY3RpdmVFbGVtZW50IG1heSBiZSB1bmRlZmluZWQgaW4gc29tZSByYXJlIGNhc2VzIGluIElFXG5cbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5jb250YWluZXJFbGVtZW50ID09IG51bGwgfHwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBlcWVxZXEsIG5vLWVxLW51bGxcbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PSBudWxsIHx8IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZXFlcWVxLCBuby1lcS1udWxsXG4gICAgICAgICF0aGlzLnByb3BzLmlzU2hvd25cbiAgICAgICkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgaXNGb2N1c091dHNpZGVNb2RhbCA9ICF0aGlzLmNvbnRhaW5lckVsZW1lbnQuY29udGFpbnMoXG4gICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRcbiAgICAgIClcbiAgICAgIGlmIChpc0ZvY3VzT3V0c2lkZU1vZGFsKSB7XG4gICAgICAgIC8vIEVsZW1lbnQgbWFya2VkIGF1dG9mb2N1cyBoYXMgaGlnaGVyIHByaW9yaXR5IHRoYW4gdGhlIG90aGVyIGNsb3duc1xuICAgICAgICBjb25zdCBhdXRvZm9jdXNFbGVtZW50ID0gdGhpcy5jb250YWluZXJFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgJ1thdXRvZm9jdXNdJ1xuICAgICAgICApXG4gICAgICAgIGNvbnN0IHdyYXBwZXJFbGVtZW50ID0gdGhpcy5jb250YWluZXJFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1t0YWJpbmRleF0nKVxuICAgICAgICBjb25zdCBidXR0b25FbGVtZW50ID0gdGhpcy5jb250YWluZXJFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpXG5cbiAgICAgICAgaWYgKGF1dG9mb2N1c0VsZW1lbnQpIHtcbiAgICAgICAgICBhdXRvZm9jdXNFbGVtZW50LmZvY3VzKClcbiAgICAgICAgfSBlbHNlIGlmICh3cmFwcGVyRWxlbWVudCkge1xuICAgICAgICAgIHdyYXBwZXJFbGVtZW50LmZvY3VzKClcbiAgICAgICAgfSBlbHNlIGlmIChidXR0b25FbGVtZW50KSB7XG4gICAgICAgICAgYnV0dG9uRWxlbWVudC5mb2N1cygpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgYnJpbmdGb2N1c0JhY2tUb1RhcmdldCA9ICgpID0+IHtcbiAgICByZXR1cm4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5jb250YWluZXJFbGVtZW50ID09IG51bGwgfHwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBlcWVxZXEsIG5vLWVxLW51bGxcbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PSBudWxsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZXFlcWVxLCBuby1lcS1udWxsXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlzRm9jdXNJbnNpZGVNb2RhbCA9IHRoaXMuY29udGFpbmVyRWxlbWVudC5jb250YWlucyhcbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudFxuICAgICAgKVxuXG4gICAgICAvLyBCcmluZyBiYWNrIGZvY3VzIG9uIHRoZSB0YXJnZXQuXG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMucHJldmlvdXNBY3RpdmVFbGVtZW50ICYmXG4gICAgICAgIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBkb2N1bWVudC5ib2R5IHx8IGlzRm9jdXNJbnNpZGVNb2RhbClcbiAgICAgICkge1xuICAgICAgICB0aGlzLnByZXZpb3VzQWN0aXZlRWxlbWVudC5mb2N1cygpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIG9uRXNjID0gZSA9PiB7XG4gICAgLy8gRXNjIGtleVxuICAgIGlmIChlLmtleUNvZGUgPT09IDI3ICYmIHRoaXMucHJvcHMuc2hvdWxkQ2xvc2VPbkVzY2FwZVByZXNzKSB7XG4gICAgICB0aGlzLmNsb3NlKClcbiAgICB9XG4gIH1cblxuICBjbG9zZSA9ICgpID0+IHtcbiAgICBjb25zdCBzaG91bGRDbG9zZSA9IHNhZmVJbnZva2UodGhpcy5wcm9wcy5vbkJlZm9yZUNsb3NlKVxuICAgIGlmIChzaG91bGRDbG9zZSAhPT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBleGl0aW5nOiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQm9keVNjcm9sbCA9IHByZXZlbnRTY3JvbGwgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLnByZXZlbnRCb2R5U2Nyb2xsaW5nKSB7XG4gICAgICBwcmV2ZW50Qm9keVNjcm9sbChwcmV2ZW50U2Nyb2xsKVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUVudGVyID0gKCkgPT4ge1xuICAgIHRoaXMuaGFuZGxlQm9keVNjcm9sbCh0cnVlKVxuICAgIHNhZmVJbnZva2UodGhpcy5wcm9wcy5vbkVudGVyKVxuICB9XG5cbiAgaGFuZGxlRW50ZXJpbmcgPSBub2RlID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uRXNjLCBmYWxzZSlcbiAgICB0aGlzLnByb3BzLm9uRW50ZXJpbmcobm9kZSlcbiAgfVxuXG4gIGhhbmRsZUVudGVyZWQgPSBub2RlID0+IHtcbiAgICB0aGlzLnByZXZpb3VzQWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRcbiAgICB0aGlzLmJyaW5nRm9jdXNJbnNpZGVPdmVybGF5KClcbiAgICB0aGlzLnByb3BzLm9uRW50ZXJlZChub2RlKVxuICB9XG5cbiAgaGFuZGxlRXhpdCA9ICgpID0+IHtcbiAgICB0aGlzLmhhbmRsZUJvZHlTY3JvbGwoZmFsc2UpXG4gICAgc2FmZUludm9rZSh0aGlzLnByb3BzLm9uRXhpdClcbiAgfVxuXG4gIGhhbmRsZUV4aXRpbmcgPSBub2RlID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uRXNjLCBmYWxzZSlcbiAgICB0aGlzLmJyaW5nRm9jdXNCYWNrVG9UYXJnZXQoKVxuICAgIHRoaXMucHJvcHMub25FeGl0aW5nKG5vZGUpXG4gIH1cblxuICBoYW5kbGVFeGl0ZWQgPSBub2RlID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZXhpdGluZzogZmFsc2UsIGV4aXRlZDogdHJ1ZSB9KVxuICAgIHRoaXMucHJvcHMub25FeGl0ZWQobm9kZSlcbiAgfVxuXG4gIGhhbmRsZUJhY2tkcm9wQ2xpY2sgPSBlID0+IHtcbiAgICBpZiAoZS50YXJnZXQgIT09IGUuY3VycmVudFRhcmdldCB8fCAhdGhpcy5wcm9wcy5zaG91bGRDbG9zZU9uQ2xpY2spIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2xvc2UoKVxuICB9XG5cbiAgb25Db250YWluZXJSZWYgPSByZWYgPT4ge1xuICAgIHRoaXMuY29udGFpbmVyRWxlbWVudCA9IHJlZlxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRoZW1lLFxuXG4gICAgICBjb250YWluZXJQcm9wcyA9IHt9LFxuICAgICAgaXNTaG93bixcbiAgICAgIGNoaWxkcmVuXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IHsgZXhpdGluZywgZXhpdGVkIH0gPSB0aGlzLnN0YXRlXG5cbiAgICBpZiAoZXhpdGVkKSByZXR1cm4gbnVsbFxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTdGFjayB2YWx1ZT17U3RhY2tpbmdPcmRlci5PVkVSTEFZfT5cbiAgICAgICAge3pJbmRleCA9PiAoXG4gICAgICAgICAgPFBvcnRhbD5cbiAgICAgICAgICAgIDxUcmFuc2l0aW9uXG4gICAgICAgICAgICAgIGFwcGVhclxuICAgICAgICAgICAgICB1bm1vdW50T25FeGl0XG4gICAgICAgICAgICAgIHRpbWVvdXQ9e0FOSU1BVElPTl9EVVJBVElPTn1cbiAgICAgICAgICAgICAgaW49e2lzU2hvd24gJiYgIWV4aXRpbmd9XG4gICAgICAgICAgICAgIG9uRXhpdD17dGhpcy5oYW5kbGVFeGl0fVxuICAgICAgICAgICAgICBvbkV4aXRpbmc9e3RoaXMuaGFuZGxlRXhpdGluZ31cbiAgICAgICAgICAgICAgb25FeGl0ZWQ9e3RoaXMuaGFuZGxlRXhpdGVkfVxuICAgICAgICAgICAgICBvbkVudGVyPXt0aGlzLmhhbmRsZUVudGVyfVxuICAgICAgICAgICAgICBvbkVudGVyaW5nPXt0aGlzLmhhbmRsZUVudGVyaW5nfVxuICAgICAgICAgICAgICBvbkVudGVyZWQ9e3RoaXMuaGFuZGxlRW50ZXJlZH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3N0YXRlID0+IChcbiAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUJhY2tkcm9wQ2xpY2t9XG4gICAgICAgICAgICAgICAgICBpbm5lclJlZj17dGhpcy5vbkNvbnRhaW5lclJlZn1cbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwiZml4ZWRcIlxuICAgICAgICAgICAgICAgICAgdG9wPXswfVxuICAgICAgICAgICAgICAgICAgbGVmdD17MH1cbiAgICAgICAgICAgICAgICAgIHJpZ2h0PXswfVxuICAgICAgICAgICAgICAgICAgYm90dG9tPXswfVxuICAgICAgICAgICAgICAgICAgekluZGV4PXt6SW5kZXh9XG4gICAgICAgICAgICAgICAgICBkYXRhLXN0YXRlPXtzdGF0ZX1cbiAgICAgICAgICAgICAgICAgIHsuLi5jb250YWluZXJQcm9wc31cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgY3NzKGFuaW1hdGlvblN0eWxlcyh0aGVtZS5vdmVybGF5QmFja2dyb3VuZENvbG9yKSkudG9TdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7dHlwZW9mIGNoaWxkcmVuID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY2hpbGRyZW4oe1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZTogdGhpcy5jbG9zZVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIDogY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L1RyYW5zaXRpb24+XG4gICAgICAgICAgPC9Qb3J0YWw+XG4gICAgICAgICl9XG4gICAgICA8L1N0YWNrPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoT3ZlcmxheSlcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEVBQVAsTUFBZSxZQUFmO0FBQ0EsU0FBU0MsR0FBVCxRQUFvQixRQUFwQjtBQUNBLE9BQU9DLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsVUFBUCxNQUF1QixtQ0FBdkI7QUFDQSxPQUFPQyxHQUFQLE1BQWdCLFFBQWhCO0FBQ0EsU0FBU0MsTUFBVCxRQUF1QixjQUF2QjtBQUNBLFNBQVNDLEtBQVQsUUFBc0IsYUFBdEI7QUFDQSxTQUFTQyxhQUFULFFBQThCLGlCQUE5QjtBQUNBLFNBQVNDLFNBQVQsUUFBMEIsYUFBMUI7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLHVCQUF2QjtBQUNBLE9BQU9DLGlCQUFQLE1BQThCLCtCQUE5QjtBQUVBLElBQU1DLGVBQWUsR0FBRztFQUN0QkMsUUFBUSxrQ0FEYztFQUV0QkMs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