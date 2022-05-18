"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classnames = _interopRequireDefault(require("classnames"));

var _glamor = require("glamor");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Transition = _interopRequireDefault(require("react-transition-group/Transition"));

var _uiBox = _interopRequireDefault(require("ui-box"));

var _portal = require("../../portal");

var _stack = require("../../stack");

var _constants = require("../../constants");

var _theme = require("../../theme");

var _safeInvoke = _interopRequireDefault(require("../../lib/safe-invoke"));

var _preventBodyScroll = _interopRequireDefault(require("../../lib/prevent-body-scroll"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var animationEasing = {
  standard: "cubic-bezier(0.4, 0.0, 0.2, 1)",
  deceleration: "cubic-bezier(0.0, 0.0, 0.2, 1)",
  acceleration: "cubic-bezier(0.4, 0.0, 1, 1)",
  sharp: "cubic-bezier(0.4, 0.0, 0.6, 1)",
  spring: "cubic-bezier(0.175, 0.885, 0.320, 1.175)"
};
var ANIMATION_DURATION = 240;

var fadeInAnimation = _glamor.css.keyframes('fadeInAnimation', {
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  }
});

var fadeOutAnimation = _glamor.css.keyframes('fadeOutAnimation', {
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
  (0, _inherits2["default"])(Overlay, _React$Component);

  var _super = _createSuper(Overlay);

  function Overlay(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Overlay);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "bringFocusInsideOverlay", function () {
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
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "bringFocusBackToTarget", function () {
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
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onEsc", function (e) {
      // Esc key
      if (e.keyCode === 27 && _this.props.shouldCloseOnEscapePress) {
        _this.close();
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "close", function () {
      var shouldClose = (0, _safeInvoke["default"])(_this.props.onBeforeClose);

      if (shouldClose !== false) {
        _this.setState({
          exiting: true
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleBodyScroll", function (preventScroll) {
      if (_this.props.preventBodyScrolling) {
        (0, _preventBodyScroll["default"])(preventScroll);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleEnter", function () {
      _this.handleBodyScroll(true);

      (0, _safeInvoke["default"])(_this.props.onEnter);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleEntering", function (node) {
      document.body.addEventListener('keydown', _this.onEsc, false);

      _this.props.onEntering(node);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleEntered", function (node) {
      _this.previousActiveElement = document.activeElement;

      _this.bringFocusInsideOverlay();

      _this.props.onEntered(node);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleExit", function () {
      _this.handleBodyScroll(false);

      (0, _safeInvoke["default"])(_this.props.onExit);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleExiting", function (node) {
      document.body.removeEventListener('keydown', _this.onEsc, false);

      _this.bringFocusBackToTarget();

      _this.props.onExiting(node);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleExited", function (node) {
      _this.setState({
        exiting: false,
        exited: true
      });

      _this.props.onExited(node);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleBackdropClick", function (e) {
      if (e.target !== e.currentTarget || !_this.props.shouldCloseOnClick) {
        return;
      }

      _this.close();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onContainerRef", function (ref) {
      _this.containerElement = ref;
    });
    _this.state = {
      exiting: false,
      exited: !props.isShown
    };
    return _this;
  }

  (0, _createClass2["default"])(Overlay, [{
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
      return /*#__PURE__*/_react["default"].createElement(_stack.Stack, {
        value: _constants.StackingOrder.OVERLAY
      }, function (zIndex) {
        return /*#__PURE__*/_react["default"].createElement(_portal.Portal, null, /*#__PURE__*/_react["default"].createElement(_Transition["default"], {
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
          return /*#__PURE__*/_react["default"].createElement(_uiBox["default"], (0, _extends2["default"])({
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
            className: (0, _classnames["default"])(containerProps.className, (0, _glamor.css)(animationStyles(theme.overlayBackgroundColor)).toString())
          }), typeof children === 'function' ? children({
            state: state,
            close: _this2.close
          }) : children);
        }));
      });
    }
  }]);
  return Overlay;
}(_react["default"].Component);

Overlay.displayName = "Overlay";
(0, _defineProperty2["default"])(Overlay, "propTypes", {
  /**
   * Children can be a node or a function accepting `close: func`
   * and `state: ENTERING | ENTERED | EXITING | EXITED`.
   */
  children: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].func]).isRequired,

  /**
   * Show the component; triggers the enter or exit states.
   */
  isShown: _propTypes["default"].bool,

  /**
   * Props to be passed through on the inner Box.
   */
  containerProps: _propTypes["default"].object,

  /**
   * Whether or not to prevent body scrolling outside the context of the overlay
   */
  preventBodyScrolling: _propTypes["default"].bool,

  /**
   * Boolean indicating if clicking the overlay should close the overlay.
   */
  shouldCloseOnClick: _propTypes["default"].bool,

  /**
   * Boolean indicating if pressing the esc key should close the overlay.
   */
  shouldCloseOnEscapePress: _propTypes["default"].bool,

  /**
   * Function called when overlay is about to close.
   * Return `false` to prevent the sheet from closing.
   * type: `Function -> Boolean`
   */
  onBeforeClose: _propTypes["default"].func,

  /**
   * Callback fired before the "exiting" status is applied.
   * type: `Function(node: HtmlElement) -> void`
   */
  onExit: _propTypes["default"].func,

  /**
   * Callback fired after the "exiting" status is applied.
   * type: `Function(node: HtmlElement) -> void`
   */
  onExiting: _propTypes["default"].func,

  /**
   * Callback fired after the "exited" status is applied.
   * type: `Function(exitState: Any?, node: HtmlElement) -> void`
   */
  onExited: _propTypes["default"].func,

  /**
   * Callback fired before the "entering" status is applied.
   * An extra parameter isAppearing is supplied to indicate if the enter stage
   * is occurring on the initial mount.
   *
   * type: `Function(node: HtmlElement, isAppearing: bool) -> void`
   */
  onEnter: _propTypes["default"].func,

  /**
   * Callback fired after the "entering" status is applied.
   * An extra parameter isAppearing is supplied to indicate if the enter stage
   * is occurring on the initial mount.
   *
   * type: `Function(node: HtmlElement, isAppearing: bool) -> void`
   */
  onEntering: _propTypes["default"].func,

  /**
   * Callback fired after the "entered" status is applied.
   * An extra parameter isAppearing is supplied to indicate if the enter stage
   * is occurring on the initial mount.
   *
   * type: `Function(node: HtmlElement, isAppearing: bool) -> void`
   */
  onEntered: _propTypes["default"].func,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: _propTypes["default"].object.isRequired
});
(0, _defineProperty2["default"])(Overlay, "defaultProps", {
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

var _default = (0, _theme.withTheme)(Overlay);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJhbmltYXRpb25FYXNpbmciLCJzdGFuZGFyZCIsImRlY2VsZXJhdGlvbiIsImFjY2VsZXJhdGlvbiIsInNoYXJwIiwic3ByaW5nIiwiQU5JTUFUSU9OX0RVUkFUSU9OIiwiZmFkZUluQW5pbWF0aW9uIiwiY3NzIiwia2V5ZnJhbWVzIiwiZnJvbSIsIm9wYWNpdHkiLCJ0byIsImZhZGVPdXRBbmltYXRpb24iLCJhbmltYXRpb25TdHlsZXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsZWZ0IiwidG9wIiwicG9zaXRpb24iLCJkaXNwbGF5Iiwid2lkdGgiLCJoZWlnaHQiLCJjb250ZW50IiwiYW5pbWF0aW9uIiwiT3ZlcmxheSIsInByb3BzIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY29udGFpbmVyRWxlbWVudCIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsImlzU2hvd24iLCJpc0ZvY3VzT3V0c2lkZU1vZGFsIiwiY29udGFpbnMiLCJhdXRvZm9jdXNFbGVtZW50IiwicXVlcnlTZWxlY3RvciIsIndyYXBwZXJFbGVtZW50IiwiYnV0dG9uRWxlbWVudCIsImZvY3VzIiwiaXNGb2N1c0luc2lkZU1vZGFsIiwicHJldmlvdXNBY3RpdmVFbGVtZW50IiwiYm9keSIsImUiLCJrZXlDb2RlIiwic2hvdWxkQ2xvc2VPbkVzY2FwZVByZXNzIiwiY2xvc2UiLCJzaG91bGRDbG9zZSIsInNhZmVJbnZva2UiLCJvbkJlZm9yZUNsb3NlIiwic2V0U3RhdGUiLCJleGl0aW5nIiwicHJldmVudFNjcm9sbCIsInByZXZlbnRCb2R5U2Nyb2xsaW5nIiwicHJldmVudEJvZHlTY3JvbGwiLCJoYW5kbGVCb2R5U2Nyb2xsIiwib25FbnRlciIsIm5vZGUiLCJhZGRFdmVudExpc3RlbmVyIiwib25Fc2MiLCJvbkVudGVyaW5nIiwiYnJpbmdGb2N1c0luc2lkZU92ZXJsYXkiLCJvbkVudGVyZWQiLCJvbkV4aXQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYnJpbmdGb2N1c0JhY2tUb1RhcmdldCIsIm9uRXhpdGluZyIsImV4aXRlZCIsIm9uRXhpdGVkIiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsInNob3VsZENsb3NlT25DbGljayIsInJlZiIsInN0YXRlIiwicHJldlByb3BzIiwidGhlbWUiLCJjb250YWluZXJQcm9wcyIsImNoaWxkcmVuIiwiU3RhY2tpbmdPcmRlciIsIk9WRVJMQVkiLCJ6SW5kZXgiLCJoYW5kbGVFeGl0IiwiaGFuZGxlRXhpdGluZyIsImhhbmRsZUV4aXRlZCIsImhhbmRsZUVudGVyIiwiaGFuZGxlRW50ZXJpbmciLCJoYW5kbGVFbnRlcmVkIiwiaGFuZGxlQmFja2Ryb3BDbGljayIsIm9uQ29udGFpbmVyUmVmIiwiY3giLCJjbGFzc05hbWUiLCJvdmVybGF5QmFja2dyb3VuZENvbG9yIiwidG9TdHJpbmciLCJSZWFjdCIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsIm9uZU9mVHlwZSIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiYm9vbCIsIm9iamVjdCIsIm9uSGlkZSIsIndpdGhUaGVtZSJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vdmVybGF5L3NyYy9PdmVybGF5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnZ2xhbW9yJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFRyYW5zaXRpb24gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cC9UcmFuc2l0aW9uJ1xuaW1wb3J0IEJveCBmcm9tICd1aS1ib3gnXG5pbXBvcnQgeyBQb3J0YWwgfSBmcm9tICcuLi8uLi9wb3J0YWwnXG5pbXBvcnQgeyBTdGFjayB9IGZyb20gJy4uLy4uL3N0YWNrJ1xuaW1wb3J0IHsgU3RhY2tpbmdPcmRlciB9IGZyb20gJy4uLy4uL2NvbnN0YW50cydcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuaW1wb3J0IHNhZmVJbnZva2UgZnJvbSAnLi4vLi4vbGliL3NhZmUtaW52b2tlJ1xuaW1wb3J0IHByZXZlbnRCb2R5U2Nyb2xsIGZyb20gJy4uLy4uL2xpYi9wcmV2ZW50LWJvZHktc2Nyb2xsJ1xuXG5jb25zdCBhbmltYXRpb25FYXNpbmcgPSB7XG4gIHN0YW5kYXJkOiBgY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAwLjIsIDEpYCxcbiAgZGVjZWxlcmF0aW9uOiBgY3ViaWMtYmV6aWVyKDAuMCwgMC4wLCAwLjIsIDEpYCxcbiAgYWNjZWxlcmF0aW9uOiBgY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAxLCAxKWAsXG4gIHNoYXJwOiBgY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAwLjYsIDEpYCxcbiAgc3ByaW5nOiBgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMjAsIDEuMTc1KWBcbn1cblxuY29uc3QgQU5JTUFUSU9OX0RVUkFUSU9OID0gMjQwXG5cbmNvbnN0IGZhZGVJbkFuaW1hdGlvbiA9IGNzcy5rZXlmcmFtZXMoJ2ZhZGVJbkFuaW1hdGlvbicsIHtcbiAgZnJvbToge1xuICAgIG9wYWNpdHk6IDBcbiAgfSxcbiAgdG86IHtcbiAgICBvcGFjaXR5OiAxXG4gIH1cbn0pXG5cbmNvbnN0IGZhZGVPdXRBbmltYXRpb24gPSBjc3Mua2V5ZnJhbWVzKCdmYWRlT3V0QW5pbWF0aW9uJywge1xuICBmcm9tOiB7XG4gICAgb3BhY2l0eTogMVxuICB9LFxuICB0bzoge1xuICAgIG9wYWNpdHk6IDBcbiAgfVxufSlcblxuY29uc3QgYW5pbWF0aW9uU3R5bGVzID0gYmFja2dyb3VuZENvbG9yID0+ICh7XG4gICcmOjpiZWZvcmUnOiB7XG4gICAgYmFja2dyb3VuZENvbG9yLFxuICAgIGxlZnQ6IDAsXG4gICAgdG9wOiAwLFxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBjb250ZW50OiAnXCIgXCInXG4gIH0sXG4gICcmW2RhdGEtc3RhdGU9XCJlbnRlcmluZ1wiXTo6YmVmb3JlLCAmW2RhdGEtc3RhdGU9XCJlbnRlcmVkXCJdOjpiZWZvcmUnOiB7XG4gICAgYW5pbWF0aW9uOiBgJHtmYWRlSW5BbmltYXRpb259ICR7QU5JTUFUSU9OX0RVUkFUSU9OfW1zICR7XG4gICAgICBhbmltYXRpb25FYXNpbmcuZGVjZWxlcmF0aW9uXG4gICAgfSBib3RoYFxuICB9LFxuICAnJltkYXRhLXN0YXRlPVwiZXhpdGluZ1wiXTo6YmVmb3JlLCAmW2RhdGEtc3RhdGU9XCJleGl0ZWRcIl06OmJlZm9yZSc6IHtcbiAgICBhbmltYXRpb246IGAke2ZhZGVPdXRBbmltYXRpb259ICR7QU5JTUFUSU9OX0RVUkFUSU9OfW1zICR7XG4gICAgICBhbmltYXRpb25FYXNpbmcuYWNjZWxlcmF0aW9uXG4gICAgfSBib3RoYFxuICB9XG59KVxuXG4vKipcbiAqIE92ZXJsYXkgaXMgZXNzZW50aWFsbHkgYSB3cmFwcGVyIGFyb3VuZCByZWFjdC10cmFuc2l0aW9uLWdyb3VwL1RyYW5zaXRpb25cbiAqIExlYXJuIG1vcmU6IGh0dHBzOi8vcmVhY3Rjb21tdW5pdHkub3JnL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvXG4gKi9cbmNsYXNzIE92ZXJsYXkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENoaWxkcmVuIGNhbiBiZSBhIG5vZGUgb3IgYSBmdW5jdGlvbiBhY2NlcHRpbmcgYGNsb3NlOiBmdW5jYFxuICAgICAqIGFuZCBgc3RhdGU6IEVOVEVSSU5HIHwgRU5URVJFRCB8IEVYSVRJTkcgfCBFWElURURgLlxuICAgICAqL1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubm9kZSwgUHJvcFR5cGVzLmZ1bmNdKS5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogU2hvdyB0aGUgY29tcG9uZW50OyB0cmlnZ2VycyB0aGUgZW50ZXIgb3IgZXhpdCBzdGF0ZXMuXG4gICAgICovXG4gICAgaXNTaG93bjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBQcm9wcyB0byBiZSBwYXNzZWQgdGhyb3VnaCBvbiB0aGUgaW5uZXIgQm94LlxuICAgICAqL1xuICAgIGNvbnRhaW5lclByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gICAgLyoqXG4gICAgICogV2hldGhlciBvciBub3QgdG8gcHJldmVudCBib2R5IHNjcm9sbGluZyBvdXRzaWRlIHRoZSBjb250ZXh0IG9mIHRoZSBvdmVybGF5XG4gICAgICovXG4gICAgcHJldmVudEJvZHlTY3JvbGxpbmc6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogQm9vbGVhbiBpbmRpY2F0aW5nIGlmIGNsaWNraW5nIHRoZSBvdmVybGF5IHNob3VsZCBjbG9zZSB0aGUgb3ZlcmxheS5cbiAgICAgKi9cbiAgICBzaG91bGRDbG9zZU9uQ2xpY2s6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogQm9vbGVhbiBpbmRpY2F0aW5nIGlmIHByZXNzaW5nIHRoZSBlc2Mga2V5IHNob3VsZCBjbG9zZSB0aGUgb3ZlcmxheS5cbiAgICAgKi9cbiAgICBzaG91bGRDbG9zZU9uRXNjYXBlUHJlc3M6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gY2FsbGVkIHdoZW4gb3ZlcmxheSBpcyBhYm91dCB0byBjbG9zZS5cbiAgICAgKiBSZXR1cm4gYGZhbHNlYCB0byBwcmV2ZW50IHRoZSBzaGVldCBmcm9tIGNsb3NpbmcuXG4gICAgICogdHlwZTogYEZ1bmN0aW9uIC0+IEJvb2xlYW5gXG4gICAgICovXG4gICAgb25CZWZvcmVDbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayBmaXJlZCBiZWZvcmUgdGhlIFwiZXhpdGluZ1wiIHN0YXR1cyBpcyBhcHBsaWVkLlxuICAgICAqIHR5cGU6IGBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCkgLT4gdm9pZGBcbiAgICAgKi9cbiAgICBvbkV4aXQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgZmlyZWQgYWZ0ZXIgdGhlIFwiZXhpdGluZ1wiIHN0YXR1cyBpcyBhcHBsaWVkLlxuICAgICAqIHR5cGU6IGBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCkgLT4gdm9pZGBcbiAgICAgKi9cbiAgICBvbkV4aXRpbmc6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgZmlyZWQgYWZ0ZXIgdGhlIFwiZXhpdGVkXCIgc3RhdHVzIGlzIGFwcGxpZWQuXG4gICAgICogdHlwZTogYEZ1bmN0aW9uKGV4aXRTdGF0ZTogQW55Pywgbm9kZTogSHRtbEVsZW1lbnQpIC0+IHZvaWRgXG4gICAgICovXG4gICAgb25FeGl0ZWQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgZmlyZWQgYmVmb3JlIHRoZSBcImVudGVyaW5nXCIgc3RhdHVzIGlzIGFwcGxpZWQuXG4gICAgICogQW4gZXh0cmEgcGFyYW1ldGVyIGlzQXBwZWFyaW5nIGlzIHN1cHBsaWVkIHRvIGluZGljYXRlIGlmIHRoZSBlbnRlciBzdGFnZVxuICAgICAqIGlzIG9jY3VycmluZyBvbiB0aGUgaW5pdGlhbCBtb3VudC5cbiAgICAgKlxuICAgICAqIHR5cGU6IGBGdW5jdGlvbihub2RlOiBIdG1sRWxlbWVudCwgaXNBcHBlYXJpbmc6IGJvb2wpIC0+IHZvaWRgXG4gICAgICovXG4gICAgb25FbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayBmaXJlZCBhZnRlciB0aGUgXCJlbnRlcmluZ1wiIHN0YXR1cyBpcyBhcHBsaWVkLlxuICAgICAqIEFuIGV4dHJhIHBhcmFtZXRlciBpc0FwcGVhcmluZyBpcyBzdXBwbGllZCB0byBpbmRpY2F0ZSBpZiB0aGUgZW50ZXIgc3RhZ2VcbiAgICAgKiBpcyBvY2N1cnJpbmcgb24gdGhlIGluaXRpYWwgbW91bnQuXG4gICAgICpcbiAgICAgKiB0eXBlOiBgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQsIGlzQXBwZWFyaW5nOiBib29sKSAtPiB2b2lkYFxuICAgICAqL1xuICAgIG9uRW50ZXJpbmc6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgZmlyZWQgYWZ0ZXIgdGhlIFwiZW50ZXJlZFwiIHN0YXR1cyBpcyBhcHBsaWVkLlxuICAgICAqIEFuIGV4dHJhIHBhcmFtZXRlciBpc0FwcGVhcmluZyBpcyBzdXBwbGllZCB0byBpbmRpY2F0ZSBpZiB0aGUgZW50ZXIgc3RhZ2VcbiAgICAgKiBpcyBvY2N1cnJpbmcgb24gdGhlIGluaXRpYWwgbW91bnQuXG4gICAgICpcbiAgICAgKiB0eXBlOiBgRnVuY3Rpb24obm9kZTogSHRtbEVsZW1lbnQsIGlzQXBwZWFyaW5nOiBib29sKSAtPiB2b2lkYFxuICAgICAqL1xuICAgIG9uRW50ZXJlZDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBUaGVtZSBwcm92aWRlZCBieSBUaGVtZVByb3ZpZGVyLlxuICAgICAqL1xuICAgIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgb25IaWRlOiAoKSA9PiB7fSxcbiAgICBzaG91bGRDbG9zZU9uQ2xpY2s6IHRydWUsXG4gICAgc2hvdWxkQ2xvc2VPbkVzY2FwZVByZXNzOiB0cnVlLFxuICAgIHByZXZlbnRCb2R5U2Nyb2xsaW5nOiBmYWxzZSxcbiAgICBvbkV4aXQ6ICgpID0+IHt9LFxuICAgIG9uRXhpdGluZzogKCkgPT4ge30sXG4gICAgb25FeGl0ZWQ6ICgpID0+IHt9LFxuICAgIG9uRW50ZXI6ICgpID0+IHt9LFxuICAgIG9uRW50ZXJpbmc6ICgpID0+IHt9LFxuICAgIG9uRW50ZXJlZDogKCkgPT4ge31cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZXhpdGluZzogZmFsc2UsXG4gICAgICBleGl0ZWQ6ICFwcm9wcy5pc1Nob3duXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGlmICghcHJldlByb3BzLmlzU2hvd24gJiYgdGhpcy5wcm9wcy5pc1Nob3duKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tZGlkLXVwZGF0ZS1zZXQtc3RhdGVcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBleGl0ZWQ6IGZhbHNlXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuaGFuZGxlQm9keVNjcm9sbChmYWxzZSlcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uRXNjLCBmYWxzZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2RzIGJvcnJvd2VkIGZyb20gQmx1ZXByaW50SlNcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL3BhbGFudGlyL2JsdWVwcmludC9ibG9iL3JlbGVhc2UvMi4wLjAvcGFja2FnZXMvY29yZS9zcmMvY29tcG9uZW50cy9vdmVybGF5L292ZXJsYXkudHN4XG4gICAqL1xuICBicmluZ0ZvY3VzSW5zaWRlT3ZlcmxheSA9ICgpID0+IHtcbiAgICAvLyBBbHdheXMgZGVsYXkgZm9jdXMgbWFuaXB1bGF0aW9uIHRvIGp1c3QgYmVmb3JlIHJlcGFpbnQgdG8gcHJldmVudCBzY3JvbGwganVtcGluZ1xuICAgIHJldHVybiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgLy8gQ29udGFpbmVyIHJlZiBtYXkgYmUgdW5kZWZpbmVkIGJldHdlZW4gY29tcG9uZW50IG1vdW50aW5nIGFuZCBQb3J0YWwgcmVuZGVyaW5nXG4gICAgICAvLyBhY3RpdmVFbGVtZW50IG1heSBiZSB1bmRlZmluZWQgaW4gc29tZSByYXJlIGNhc2VzIGluIElFXG5cbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5jb250YWluZXJFbGVtZW50ID09IG51bGwgfHwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBlcWVxZXEsIG5vLWVxLW51bGxcbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PSBudWxsIHx8IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZXFlcWVxLCBuby1lcS1udWxsXG4gICAgICAgICF0aGlzLnByb3BzLmlzU2hvd25cbiAgICAgICkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgaXNGb2N1c091dHNpZGVNb2RhbCA9ICF0aGlzLmNvbnRhaW5lckVsZW1lbnQuY29udGFpbnMoXG4gICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRcbiAgICAgIClcbiAgICAgIGlmIChpc0ZvY3VzT3V0c2lkZU1vZGFsKSB7XG4gICAgICAgIC8vIEVsZW1lbnQgbWFya2VkIGF1dG9mb2N1cyBoYXMgaGlnaGVyIHByaW9yaXR5IHRoYW4gdGhlIG90aGVyIGNsb3duc1xuICAgICAgICBjb25zdCBhdXRvZm9jdXNFbGVtZW50ID0gdGhpcy5jb250YWluZXJFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgJ1thdXRvZm9jdXNdJ1xuICAgICAgICApXG4gICAgICAgIGNvbnN0IHdyYXBwZXJFbGVtZW50ID0gdGhpcy5jb250YWluZXJFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1t0YWJpbmRleF0nKVxuICAgICAgICBjb25zdCBidXR0b25FbGVtZW50ID0gdGhpcy5jb250YWluZXJFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpXG5cbiAgICAgICAgaWYgKGF1dG9mb2N1c0VsZW1lbnQpIHtcbiAgICAgICAgICBhdXRvZm9jdXNFbGVtZW50LmZvY3VzKClcbiAgICAgICAgfSBlbHNlIGlmICh3cmFwcGVyRWxlbWVudCkge1xuICAgICAgICAgIHdyYXBwZXJFbGVtZW50LmZvY3VzKClcbiAgICAgICAgfSBlbHNlIGlmIChidXR0b25FbGVtZW50KSB7XG4gICAgICAgICAgYnV0dG9uRWxlbWVudC5mb2N1cygpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgYnJpbmdGb2N1c0JhY2tUb1RhcmdldCA9ICgpID0+IHtcbiAgICByZXR1cm4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5jb250YWluZXJFbGVtZW50ID09IG51bGwgfHwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBlcWVxZXEsIG5vLWVxLW51bGxcbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PSBudWxsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZXFlcWVxLCBuby1lcS1udWxsXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlzRm9jdXNJbnNpZGVNb2RhbCA9IHRoaXMuY29udGFpbmVyRWxlbWVudC5jb250YWlucyhcbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudFxuICAgICAgKVxuXG4gICAgICAvLyBCcmluZyBiYWNrIGZvY3VzIG9uIHRoZSB0YXJnZXQuXG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMucHJldmlvdXNBY3RpdmVFbGVtZW50ICYmXG4gICAgICAgIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBkb2N1bWVudC5ib2R5IHx8IGlzRm9jdXNJbnNpZGVNb2RhbClcbiAgICAgICkge1xuICAgICAgICB0aGlzLnByZXZpb3VzQWN0aXZlRWxlbWVudC5mb2N1cygpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIG9uRXNjID0gZSA9PiB7XG4gICAgLy8gRXNjIGtleVxuICAgIGlmIChlLmtleUNvZGUgPT09IDI3ICYmIHRoaXMucHJvcHMuc2hvdWxkQ2xvc2VPbkVzY2FwZVByZXNzKSB7XG4gICAgICB0aGlzLmNsb3NlKClcbiAgICB9XG4gIH1cblxuICBjbG9zZSA9ICgpID0+IHtcbiAgICBjb25zdCBzaG91bGRDbG9zZSA9IHNhZmVJbnZva2UodGhpcy5wcm9wcy5vbkJlZm9yZUNsb3NlKVxuICAgIGlmIChzaG91bGRDbG9zZSAhPT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBleGl0aW5nOiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQm9keVNjcm9sbCA9IHByZXZlbnRTY3JvbGwgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLnByZXZlbnRCb2R5U2Nyb2xsaW5nKSB7XG4gICAgICBwcmV2ZW50Qm9keVNjcm9sbChwcmV2ZW50U2Nyb2xsKVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUVudGVyID0gKCkgPT4ge1xuICAgIHRoaXMuaGFuZGxlQm9keVNjcm9sbCh0cnVlKVxuICAgIHNhZmVJbnZva2UodGhpcy5wcm9wcy5vbkVudGVyKVxuICB9XG5cbiAgaGFuZGxlRW50ZXJpbmcgPSBub2RlID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uRXNjLCBmYWxzZSlcbiAgICB0aGlzLnByb3BzLm9uRW50ZXJpbmcobm9kZSlcbiAgfVxuXG4gIGhhbmRsZUVudGVyZWQgPSBub2RlID0+IHtcbiAgICB0aGlzLnByZXZpb3VzQWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRcbiAgICB0aGlzLmJyaW5nRm9jdXNJbnNpZGVPdmVybGF5KClcbiAgICB0aGlzLnByb3BzLm9uRW50ZXJlZChub2RlKVxuICB9XG5cbiAgaGFuZGxlRXhpdCA9ICgpID0+IHtcbiAgICB0aGlzLmhhbmRsZUJvZHlTY3JvbGwoZmFsc2UpXG4gICAgc2FmZUludm9rZSh0aGlzLnByb3BzLm9uRXhpdClcbiAgfVxuXG4gIGhhbmRsZUV4aXRpbmcgPSBub2RlID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uRXNjLCBmYWxzZSlcbiAgICB0aGlzLmJyaW5nRm9jdXNCYWNrVG9UYXJnZXQoKVxuICAgIHRoaXMucHJvcHMub25FeGl0aW5nKG5vZGUpXG4gIH1cblxuICBoYW5kbGVFeGl0ZWQgPSBub2RlID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZXhpdGluZzogZmFsc2UsIGV4aXRlZDogdHJ1ZSB9KVxuICAgIHRoaXMucHJvcHMub25FeGl0ZWQobm9kZSlcbiAgfVxuXG4gIGhhbmRsZUJhY2tkcm9wQ2xpY2sgPSBlID0+IHtcbiAgICBpZiAoZS50YXJnZXQgIT09IGUuY3VycmVudFRhcmdldCB8fCAhdGhpcy5wcm9wcy5zaG91bGRDbG9zZU9uQ2xpY2spIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2xvc2UoKVxuICB9XG5cbiAgb25Db250YWluZXJSZWYgPSByZWYgPT4ge1xuICAgIHRoaXMuY29udGFpbmVyRWxlbWVudCA9IHJlZlxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRoZW1lLFxuXG4gICAgICBjb250YWluZXJQcm9wcyA9IHt9LFxuICAgICAgaXNTaG93bixcbiAgICAgIGNoaWxkcmVuXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IHsgZXhpdGluZywgZXhpdGVkIH0gPSB0aGlzLnN0YXRlXG5cbiAgICBpZiAoZXhpdGVkKSByZXR1cm4gbnVsbFxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTdGFjayB2YWx1ZT17U3RhY2tpbmdPcmRlci5PVkVSTEFZfT5cbiAgICAgICAge3pJbmRleCA9PiAoXG4gICAgICAgICAgPFBvcnRhbD5cbiAgICAgICAgICAgIDxUcmFuc2l0aW9uXG4gICAgICAgICAgICAgIGFwcGVhclxuICAgICAgICAgICAgICB1bm1vdW50T25FeGl0XG4gICAgICAgICAgICAgIHRpbWVvdXQ9e0FOSU1BVElPTl9EVVJBVElPTn1cbiAgICAgICAgICAgICAgaW49e2lzU2hvd24gJiYgIWV4aXRpbmd9XG4gICAgICAgICAgICAgIG9uRXhpdD17dGhpcy5oYW5kbGVFeGl0fVxuICAgICAgICAgICAgICBvbkV4aXRpbmc9e3RoaXMuaGFuZGxlRXhpdGluZ31cbiAgICAgICAgICAgICAgb25FeGl0ZWQ9e3RoaXMuaGFuZGxlRXhpdGVkfVxuICAgICAgICAgICAgICBvbkVudGVyPXt0aGlzLmhhbmRsZUVudGVyfVxuICAgICAgICAgICAgICBvbkVudGVyaW5nPXt0aGlzLmhhbmRsZUVudGVyaW5nfVxuICAgICAgICAgICAgICBvbkVudGVyZWQ9e3RoaXMuaGFuZGxlRW50ZXJlZH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3N0YXRlID0+IChcbiAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUJhY2tkcm9wQ2xpY2t9XG4gICAgICAgICAgICAgICAgICBpbm5lclJlZj17dGhpcy5vbkNvbnRhaW5lclJlZn1cbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwiZml4ZWRcIlxuICAgICAgICAgICAgICAgICAgdG9wPXswfVxuICAgICAgICAgICAgICAgICAgbGVmdD17MH1cbiAgICAgICAgICAgICAgICAgIHJpZ2h0PXswfVxuICAgICAgICAgICAgICAgICAgYm90dG9tPXswfVxuICAgICAgICAgICAgICAgICAgekluZGV4PXt6SW5kZXh9XG4gICAgICAgICAgICAgICAgICBkYXRhLXN0YXRlPXtzdGF0ZX1cbiAgICAgICAgICAgICAgICAgIHsuLi5jb250YWluZXJQcm9wc31cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgY3NzKGFuaW1hdGlvblN0eWxlcyh0aGVtZS5vdmVybGF5QmFja2dyb3VuZENvbG9yKSkudG9TdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7dHlwZW9mIGNoaWxkcmVuID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgID8gY2hpbGRyZW4oe1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZTogdGhpcy5jbG9zZVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIDogY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L1RyYW5zaXRpb24+XG4gICAgICAgICAgPC9Qb3J0YWw+XG4gICAgICAgICl9XG4gICAgICA8L1N0YWNrPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoT3ZlcmxheSlcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxlQUFlLEdBQUc7RUFDdEJDLFFBQVEsa0NBRGM7RUFFdEJDLFlBQVksa0NBRlU7RUFHdEJDLFlBQVksZ0NBSFU7RUFJdEJDLEtBQUssa0NBSmlCO0VBS3RCQyxNQUFNO0FBTGdCLENBQXhCO0FBUUEsSUFBTUMsa0JBQWtCLEdBQUcsR0FBM0I7O0FBRUEsSUFBTUMsZUFBZSxHQUFHQyxXQUFBLENBQUlDLFNBQUosQ0FBYyxpQkFBZCxFQUFpQztFQUN2REMsSUFBSSxFQUFFO0lBQ0pDLE9BQU8sRUFBRTtFQURMLENBRGlEO0VBSXZEQyxFQUFFLEVBQUU7SUFDRkQsT0FBTyxFQUFFO0VBRFA7QUFKbUQsQ0FBakMsQ0FBeEI7O0FBU0EsSUFBTUUsZ0JBQWdCLEdBQUdMLFdBQUEs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