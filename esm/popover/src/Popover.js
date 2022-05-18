import _extends from "@babel/runtime/helpers/esm/extends";
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

import cx from 'classnames';
import { css as glamorCss } from 'glamor';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Positioner } from '../../positioner';
import { Tooltip } from '../../tooltip';
import { Position } from '../../constants';
import PopoverStateless from './PopoverStateless';

var Popover = /*#__PURE__*/function (_Component) {
  _inherits(Popover, _Component);

  var _super = _createSuper(Popover);

  function Popover(props) {
    var _this;

    _classCallCheck(this, Popover);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "bringFocusInside", function () {
      // Always delay focus manipulation to just before repaint to prevent scroll jumping
      return requestAnimationFrame(function () {
        // Container ref may be undefined between component mounting and Portal rendering
        // activeElement may be undefined in some rare cases in IE
        if (_this.popoverNode == null || // eslint-disable-line eqeqeq, no-eq-null
        document.activeElement == null || // eslint-disable-line eqeqeq, no-eq-null
        !_this.state.isShown) {
          return;
        }

        var isFocusOutsideModal = !_this.popoverNode.contains(document.activeElement);

        if (isFocusOutsideModal) {
          // Element marked autofocus has higher priority than the other clowns
          var autofocusElement = _this.popoverNode.querySelector('[autofocus]');

          var wrapperElement = _this.popoverNode.querySelector('[tabindex]');

          var buttonElements = _this.popoverNode.querySelectorAll('button, a, [role="menuitem"], [role="menuitemradio"]');

          if (autofocusElement) {
            autofocusElement.focus();
          } else if (wrapperElement) {
            wrapperElement.focus();
          } else if (buttonElements.length > 0) {
            buttonElements[0].focus();
          }
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "bringFocusBackToTarget", function () {
      return requestAnimationFrame(function () {
        if (_this.popoverNode == null || // eslint-disable-line eqeqeq, no-eq-null
        document.activeElement == null // eslint-disable-line eqeqeq, no-eq-null
        ) {
          return;
        }

        var isFocusInsideModal = _this.popoverNode.contains(document.activeElement); // Bring back focus on the target.


        if (_this.targetRef && (document.activeElement === document.body || isFocusInsideModal)) {
          _this.targetRef.focus();
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onBodyClick", function (e) {
      // Ignore clicks on the popover or button
      if (_this.targetRef && _this.targetRef.contains(e.target)) {
        return;
      }

      if (_this.popoverNode && _this.popoverNode.contains(e.target)) {
        return;
      } // Notify body click


      _this.props.onBodyClick(e);

      if (_this.props.shouldCloseOnExternalClick === false) {
        return;
      }

      _this.close();
    });

    _defineProperty(_assertThisInitialized(_this), "onEsc", function (e) {
      // Esc key
      if (e.keyCode === 27) {
        _this.close();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "toggle", function () {
      if (_this.state.isShown) {
        _this.close();
      } else {
        _this.open();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "open", function () {
      if (_this.state.isShown) {
        return;
      }

      _this.setState({
        isShown: true
      });

      document.body.addEventListener('click', _this.onBodyClick, false);
      document.body.addEventListener('keydown', _this.onEsc, false);

      _this.props.onOpen();
    });

    _defineProperty(_assertThisInitialized(_this), "close", function () {
      if (!_this.state.isShown) {
        return;
      }

      _this.setState({
        isShown: false
      });

      document.body.removeEventListener('click', _this.onBodyClick, false);
      document.body.removeEventListener('keydown', _this.onEsc, false);

      _this.bringFocusBackToTarget();

      _this.props.onClose();
    });

    _defineProperty(_assertThisInitialized(_this), "handleOpenComplete", function () {
      if (_this.props.bringFocusInside) _this.bringFocusInside();

      _this.props.onOpenComplete();
    });

    _defineProperty(_assertThisInitialized(_this), "handleCloseComplete", function () {
      _this.props.onCloseComplete();
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (e) {
      if (e.key === 'ArrowDown') {
        _this.bringFocusInside();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleOpenHover", function () {
      if (_this.props.trigger === 'hover') {
        _this.open();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleCloseHover", function () {
      if (_this.props.trigger === 'hover') {
        _this.close();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "renderTarget", function (_ref) {
      var getRef = _ref.getRef,
          isShown = _ref.isShown;
      var children = _this.props.children;
      var isTooltipInside = children && children.type === Tooltip;

      var getTargetRef = function getTargetRef(ref) {
        _this.targetRef = ref;
        getRef(ref);
      };
      /**
       * When a function is passed, you can control the Popover manually.
       */


      if (typeof children === 'function') {
        return children({
          toggle: _this.toggle,
          getRef: getTargetRef,
          isShown: isShown
        });
      }

      var popoverTargetProps = {
        onClick: _this.toggle,
        onMouseEnter: _this.handleOpenHover,
        onKeyDown: _this.handleKeyDown,
        role: 'button',
        'aria-expanded': isShown,
        'aria-haspopup': true
      };
      /**
       * Tooltips can be used within a Popover (not the other way around)
       * In this case the children is the Tooltip instead of a button.
       * Pass the properties to the Tooltip and let the Tooltip
       * add the properties to the target.
       */

      if (isTooltipInside) {
        return /*#__PURE__*/React.cloneElement(children, {
          popoverProps: _objectSpread({
            getTargetRef: getTargetRef,
            isShown: isShown
          }, popoverTargetProps)
        });
      }
      /**
       * With normal usage only popover props end up on the target.
       */


      return /*#__PURE__*/React.cloneElement(children, _objectSpread({
        innerRef: getTargetRef
      }, popoverTargetProps));
    });

    _this.state = {
      isShown: props.isShown
    };
    return _this;
  }

  _createClass(Popover, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.body.removeEventListener('click', this.onBodyClick, false);
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
          isShown = _this$props.isShown,
          content = _this$props.content,
          display = _this$props.display,
          minWidth = _this$props.minWidth,
          position = _this$props.position,
          minHeight = _this$props.minHeight,
          _this$props$stateless = _this$props.statelessProps,
          statelessProps = _this$props$stateless === void 0 ? {} : _this$props$stateless,
          animationDuration = _this$props.animationDuration,
          onCloseComplete = _this$props.onCloseComplete;
      var stateIsShown = this.state.isShown; // If `isShown` is a boolean, popover is controlled manually, not via mouse events

      var shown = typeof isShown === 'boolean' ? isShown : stateIsShown;
      return /*#__PURE__*/React.createElement(Positioner, {
        target: function target(_ref2) {
          var getRef = _ref2.getRef,
              isShown = _ref2.isShown,
              targetWidth = _ref2.targetWidth;
          return _this2.renderTarget({
            getRef: getRef,
            isShown: isShown,
            targetWidth: targetWidth
          });
        },
        isShown: shown,
        position: position,
        animationDuration: animationDuration,
        onOpenComplete: this.handleOpenComplete,
        onCloseComplete: onCloseComplete
      }, function (_ref3) {
        var css = _ref3.css,
            style = _ref3.style,
            state = _ref3.state,
            getRef = _ref3.getRef;
        return /*#__PURE__*/React.createElement(PopoverStateless, _extends({
          innerRef: function innerRef(ref) {
            _this2.popoverNode = ref;
            getRef(ref);
          },
          "data-state": state,
          display: display,
          minWidth: minWidth,
          minHeight: minHeight
        }, statelessProps, {
          className: cx(statelessProps.className, css ? glamorCss(css).toString() : undefined),
          style: statelessProps && statelessProps.style ? _objectSpread(_objectSpread({}, style), statelessProps.style) : style,
          onMouseLeave: _this2.handleCloseHover
        }), typeof content === 'function' ? content({
          close: _this2.close
        }) : content);
      });
    }
  }]);

  return Popover;
}(Component);

Popover.displayName = "Popover";

_defineProperty(Popover, "propTypes", {
  /**
   * The position the Popover is on. Smart positioning might override this.
   */
  position: PropTypes.oneOf([Position.TOP, Position.TOP_LEFT, Position.TOP_RIGHT, Position.BOTTOM, Position.BOTTOM_LEFT, Position.BOTTOM_RIGHT, Position.LEFT, Position.RIGHT]),

  /**
   * When true, the Popover is manually shown.
   */
  isShown: PropTypes.bool,

  /**
   * Open the Popover based on click or hover. Default is click.
   */
  trigger: PropTypes.oneOf(['click', 'hover']),

  /**
   * The content of the Popover.
   */
  content: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,

  /**
   * The target button of the Popover.
   * When a function the following arguments are passed:
   * ({ toggle: Function -> Void, getRef: Function -> Ref, isShown: Bool })
   */
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,

  /**
   * The display property passed to the Popover card.
   */
  display: PropTypes.string,

  /**
   * The min width of the Popover card.
   */
  minWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * The min height of the Popover card.
   */
  minHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * Properties passed through to the Popover card.
   */
  statelessProps: PropTypes.shape(PopoverStateless.propTypes),

  /**
   * Duration of the animation.
   */
  animationDuration: PropTypes.number,

  /**
   * Function called when the Popover opens.
   */
  onOpen: PropTypes.func.isRequired,

  /**
   * Function fired when Popover closes.
   */
  onClose: PropTypes.func.isRequired,

  /**
   * Function that will be called when the enter transition is complete.
   */
  onOpenComplete: PropTypes.func.isRequired,

  /**
   * Function that will be called when the exit transition is complete.
   */
  onCloseComplete: PropTypes.func.isRequired,

  /**
   * Function that will be called when the body is clicked.
   */
  onBodyClick: PropTypes.func.isRequired,

  /**
   * When true, bring focus inside of the Popover on open.
   */
  bringFocusInside: PropTypes.bool,

  /**
   * Boolean indicating if clicking outside the dialog should close the dialog.
   */
  shouldCloseOnExternalClick: PropTypes.bool
});

_defineProperty(Popover, "defaultProps", {
  position: Position.BOTTOM,
  minWidth: 200,
  minHeight: 40,
  animationDuration: 300,
  onOpen: function onOpen() {},
  onClose: function onClose() {},
  onOpenComplete: function onOpenComplete() {},
  onCloseComplete: function onCloseComplete() {},
  onBodyClick: function onBodyClick() {},
  bringFocusInside: false,
  shouldCloseOnExternalClick: true,
  trigger: 'click'
});

export { Popover as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjeCIsImNzcyIsImdsYW1vckNzcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiUG9zaXRpb25lciIsIlRvb2x0aXAiLCJQb3NpdGlvbiIsIlBvcG92ZXJTdGF0ZWxlc3MiLCJQb3BvdmVyIiwicHJvcHMiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJwb3BvdmVyTm9kZSIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsInN0YXRlIiwiaXNTaG93biIsImlzRm9jdXNPdXRzaWRlTW9kYWwiLCJjb250YWlucyIsImF1dG9mb2N1c0VsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwid3JhcHBlckVsZW1lbnQiLCJidXR0b25FbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb2N1cyIsImxlbmd0aCIsImlzRm9jdXNJbnNpZGVNb2RhbCIsInRhcmdldFJlZiIsImJvZHkiLCJlIiwidGFyZ2V0Iiwib25Cb2R5Q2xpY2siLCJzaG91bGRDbG9zZU9uRXh0ZXJuYWxDbGljayIsImNsb3NlIiwia2V5Q29kZSIsIm9wZW4iLCJzZXRTdGF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbkVzYyIsIm9uT3BlbiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJicmluZ0ZvY3VzQmFja1RvVGFyZ2V0Iiwib25DbG9zZSIsImJyaW5nRm9jdXNJbnNpZGUiLCJvbk9wZW5Db21wbGV0ZSIsIm9uQ2xvc2VDb21wbGV0ZSIsImtleSIsInRyaWdnZXIiLCJnZXRSZWYiLCJjaGlsZHJlbiIsImlzVG9vbHRpcEluc2lkZSIsInR5cGUiLCJnZXRUYXJnZXRSZWYiLCJyZWYiLCJ0b2dnbGUiLCJwb3BvdmVyVGFyZ2V0UHJvcHMiLCJvbkNsaWNrIiwib25Nb3VzZUVudGVyIiwiaGFuZGxlT3BlbkhvdmVyIiwib25LZXlEb3duIiwiaGFuZGxlS2V5RG93biIsInJvbGUiLCJjbG9uZUVsZW1lbnQiLCJwb3BvdmVyUHJvcHMiLCJpbm5lclJlZiIsImNvbnRlbnQiLCJkaXNwbGF5IiwibWluV2lkdGgiLCJwb3NpdGlvbiIsIm1pbkhlaWdodCIsInN0YXRlbGVzc1Byb3BzIiwiYW5pbWF0aW9uRHVyYXRpb24iLCJzdGF0ZUlzU2hvd24iLCJzaG93biIsInRhcmdldFdpZHRoIiwicmVuZGVyVGFyZ2V0IiwiaGFuZGxlT3BlbkNvbXBsZXRlIiwic3R5bGUiLCJjbGFzc05hbWUiLCJ0b1N0cmluZyIsInVuZGVmaW5lZCIsImhhbmRsZUNsb3NlSG92ZXIiLCJvbmVPZiIsIlRPUCIsIlRPUF9MRUZUIiwiVE9QX1JJR0hUIiwiQk9UVE9NIiwiQk9UVE9NX0xFRlQiLCJCT1RUT01fUklHSFQiLCJMRUZUIiwiUklHSFQiLCJib29sIiwib25lT2ZUeXBlIiwibm9kZSIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiZWxlbWVudCIsInN0cmluZyIsIm51bWJlciIsInNoYXBlIiwicHJvcFR5cGVzIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BvcG92ZXIvc3JjL1BvcG92ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgeyBjc3MgYXMgZ2xhbW9yQ3NzIH0gZnJvbSAnZ2xhbW9yJ1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgUG9zaXRpb25lciB9IGZyb20gJy4uLy4uL3Bvc2l0aW9uZXInXG5pbXBvcnQgeyBUb29sdGlwIH0gZnJvbSAnLi4vLi4vdG9vbHRpcCdcbmltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJ1xuaW1wb3J0IFBvcG92ZXJTdGF0ZWxlc3MgZnJvbSAnLi9Qb3BvdmVyU3RhdGVsZXNzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3BvdmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBUaGUgcG9zaXRpb24gdGhlIFBvcG92ZXIgaXMgb24uIFNtYXJ0IHBvc2l0aW9uaW5nIG1pZ2h0IG92ZXJyaWRlIHRoaXMuXG4gICAgICovXG4gICAgcG9zaXRpb246IFByb3BUeXBlcy5vbmVPZihbXG4gICAgICBQb3NpdGlvbi5UT1AsXG4gICAgICBQb3NpdGlvbi5UT1BfTEVGVCxcbiAgICAgIFBvc2l0aW9uLlRPUF9SSUdIVCxcbiAgICAgIFBvc2l0aW9uLkJPVFRPTSxcbiAgICAgIFBvc2l0aW9uLkJPVFRPTV9MRUZULFxuICAgICAgUG9zaXRpb24uQk9UVE9NX1JJR0hULFxuICAgICAgUG9zaXRpb24uTEVGVCxcbiAgICAgIFBvc2l0aW9uLlJJR0hUXG4gICAgXSksXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSBQb3BvdmVyIGlzIG1hbnVhbGx5IHNob3duLlxuICAgICAqL1xuICAgIGlzU2hvd246IFByb3BUeXBlcy5ib29sLFxuICAgIC8qKlxuICAgICAqIE9wZW4gdGhlIFBvcG92ZXIgYmFzZWQgb24gY2xpY2sgb3IgaG92ZXIuIERlZmF1bHQgaXMgY2xpY2suXG4gICAgICovXG4gICAgdHJpZ2dlcjogUHJvcFR5cGVzLm9uZU9mKFsnY2xpY2snLCAnaG92ZXInXSksXG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29udGVudCBvZiB0aGUgUG9wb3Zlci5cbiAgICAgKi9cbiAgICBjb250ZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubm9kZSwgUHJvcFR5cGVzLmZ1bmNdKS5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHRhcmdldCBidXR0b24gb2YgdGhlIFBvcG92ZXIuXG4gICAgICogV2hlbiBhIGZ1bmN0aW9uIHRoZSBmb2xsb3dpbmcgYXJndW1lbnRzIGFyZSBwYXNzZWQ6XG4gICAgICogKHsgdG9nZ2xlOiBGdW5jdGlvbiAtPiBWb2lkLCBnZXRSZWY6IEZ1bmN0aW9uIC0+IFJlZiwgaXNTaG93bjogQm9vbCB9KVxuICAgICAqL1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLmZ1bmNdKVxuICAgICAgLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGlzcGxheSBwcm9wZXJ0eSBwYXNzZWQgdG8gdGhlIFBvcG92ZXIgY2FyZC5cbiAgICAgKi9cbiAgICBkaXNwbGF5OiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogVGhlIG1pbiB3aWR0aCBvZiB0aGUgUG9wb3ZlciBjYXJkLlxuICAgICAqL1xuICAgIG1pbldpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbWluIGhlaWdodCBvZiB0aGUgUG9wb3ZlciBjYXJkLlxuICAgICAqL1xuICAgIG1pbkhlaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuXG4gICAgLyoqXG4gICAgICogUHJvcGVydGllcyBwYXNzZWQgdGhyb3VnaCB0byB0aGUgUG9wb3ZlciBjYXJkLlxuICAgICAqL1xuICAgIHN0YXRlbGVzc1Byb3BzOiBQcm9wVHlwZXMuc2hhcGUoUG9wb3ZlclN0YXRlbGVzcy5wcm9wVHlwZXMpLFxuXG4gICAgLyoqXG4gICAgICogRHVyYXRpb24gb2YgdGhlIGFuaW1hdGlvbi5cbiAgICAgKi9cbiAgICBhbmltYXRpb25EdXJhdGlvbjogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIHRoZSBQb3BvdmVyIG9wZW5zLlxuICAgICAqL1xuICAgIG9uT3BlbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIGZpcmVkIHdoZW4gUG9wb3ZlciBjbG9zZXMuXG4gICAgICovXG4gICAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgZW50ZXIgdHJhbnNpdGlvbiBpcyBjb21wbGV0ZS5cbiAgICAgKi9cbiAgICBvbk9wZW5Db21wbGV0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgZXhpdCB0cmFuc2l0aW9uIGlzIGNvbXBsZXRlLlxuICAgICAqL1xuICAgIG9uQ2xvc2VDb21wbGV0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgYm9keSBpcyBjbGlja2VkLlxuICAgICAqL1xuICAgIG9uQm9keUNsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCBicmluZyBmb2N1cyBpbnNpZGUgb2YgdGhlIFBvcG92ZXIgb24gb3Blbi5cbiAgICAgKi9cbiAgICBicmluZ0ZvY3VzSW5zaWRlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIEJvb2xlYW4gaW5kaWNhdGluZyBpZiBjbGlja2luZyBvdXRzaWRlIHRoZSBkaWFsb2cgc2hvdWxkIGNsb3NlIHRoZSBkaWFsb2cuXG4gICAgICovXG4gICAgc2hvdWxkQ2xvc2VPbkV4dGVybmFsQ2xpY2s6IFByb3BUeXBlcy5ib29sXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHBvc2l0aW9uOiBQb3NpdGlvbi5CT1RUT00sXG4gICAgbWluV2lkdGg6IDIwMCxcbiAgICBtaW5IZWlnaHQ6IDQwLFxuICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAzMDAsXG4gICAgb25PcGVuOiAoKSA9PiB7fSxcbiAgICBvbkNsb3NlOiAoKSA9PiB7fSxcbiAgICBvbk9wZW5Db21wbGV0ZTogKCkgPT4ge30sXG4gICAgb25DbG9zZUNvbXBsZXRlOiAoKSA9PiB7fSxcbiAgICBvbkJvZHlDbGljazogKCkgPT4ge30sXG4gICAgYnJpbmdGb2N1c0luc2lkZTogZmFsc2UsXG4gICAgc2hvdWxkQ2xvc2VPbkV4dGVybmFsQ2xpY2s6IHRydWUsXG4gICAgdHJpZ2dlcjogJ2NsaWNrJ1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNTaG93bjogcHJvcHMuaXNTaG93blxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQm9keUNsaWNrLCBmYWxzZSlcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uRXNjLCBmYWxzZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2RzIGJvcnJvd2VkIGZyb20gQmx1ZXByaW50SlNcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL3BhbGFudGlyL2JsdWVwcmludC9ibG9iL3JlbGVhc2UvMi4wLjAvcGFja2FnZXMvY29yZS9zcmMvY29tcG9uZW50cy9vdmVybGF5L292ZXJsYXkudHN4XG4gICAqL1xuICBicmluZ0ZvY3VzSW5zaWRlID0gKCkgPT4ge1xuICAgIC8vIEFsd2F5cyBkZWxheSBmb2N1cyBtYW5pcHVsYXRpb24gdG8ganVzdCBiZWZvcmUgcmVwYWludCB0byBwcmV2ZW50IHNjcm9sbCBqdW1waW5nXG4gICAgcmV0dXJuIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAvLyBDb250YWluZXIgcmVmIG1heSBiZSB1bmRlZmluZWQgYmV0d2VlbiBjb21wb25lbnQgbW91bnRpbmcgYW5kIFBvcnRhbCByZW5kZXJpbmdcbiAgICAgIC8vIGFjdGl2ZUVsZW1lbnQgbWF5IGJlIHVuZGVmaW5lZCBpbiBzb21lIHJhcmUgY2FzZXMgaW4gSUVcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5wb3BvdmVyTm9kZSA9PSBudWxsIHx8IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZXFlcWVxLCBuby1lcS1udWxsXG4gICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT0gbnVsbCB8fCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGVxZXFlcSwgbm8tZXEtbnVsbFxuICAgICAgICAhdGhpcy5zdGF0ZS5pc1Nob3duXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlzRm9jdXNPdXRzaWRlTW9kYWwgPSAhdGhpcy5wb3BvdmVyTm9kZS5jb250YWlucyhcbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudFxuICAgICAgKVxuICAgICAgaWYgKGlzRm9jdXNPdXRzaWRlTW9kYWwpIHtcbiAgICAgICAgLy8gRWxlbWVudCBtYXJrZWQgYXV0b2ZvY3VzIGhhcyBoaWdoZXIgcHJpb3JpdHkgdGhhbiB0aGUgb3RoZXIgY2xvd25zXG4gICAgICAgIGNvbnN0IGF1dG9mb2N1c0VsZW1lbnQgPSB0aGlzLnBvcG92ZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoJ1thdXRvZm9jdXNdJylcbiAgICAgICAgY29uc3Qgd3JhcHBlckVsZW1lbnQgPSB0aGlzLnBvcG92ZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoJ1t0YWJpbmRleF0nKVxuICAgICAgICBjb25zdCBidXR0b25FbGVtZW50cyA9IHRoaXMucG9wb3Zlck5vZGUucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgICAnYnV0dG9uLCBhLCBbcm9sZT1cIm1lbnVpdGVtXCJdLCBbcm9sZT1cIm1lbnVpdGVtcmFkaW9cIl0nXG4gICAgICAgIClcblxuICAgICAgICBpZiAoYXV0b2ZvY3VzRWxlbWVudCkge1xuICAgICAgICAgIGF1dG9mb2N1c0VsZW1lbnQuZm9jdXMoKVxuICAgICAgICB9IGVsc2UgaWYgKHdyYXBwZXJFbGVtZW50KSB7XG4gICAgICAgICAgd3JhcHBlckVsZW1lbnQuZm9jdXMoKVxuICAgICAgICB9IGVsc2UgaWYgKGJ1dHRvbkVsZW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBidXR0b25FbGVtZW50c1swXS5mb2N1cygpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgYnJpbmdGb2N1c0JhY2tUb1RhcmdldCA9ICgpID0+IHtcbiAgICByZXR1cm4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5wb3BvdmVyTm9kZSA9PSBudWxsIHx8IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZXFlcWVxLCBuby1lcS1udWxsXG4gICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT0gbnVsbCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGVxZXFlcSwgbm8tZXEtbnVsbFxuICAgICAgKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBpc0ZvY3VzSW5zaWRlTW9kYWwgPSB0aGlzLnBvcG92ZXJOb2RlLmNvbnRhaW5zKFxuICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50XG4gICAgICApXG5cbiAgICAgIC8vIEJyaW5nIGJhY2sgZm9jdXMgb24gdGhlIHRhcmdldC5cbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy50YXJnZXRSZWYgJiZcbiAgICAgICAgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGRvY3VtZW50LmJvZHkgfHwgaXNGb2N1c0luc2lkZU1vZGFsKVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0UmVmLmZvY3VzKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgb25Cb2R5Q2xpY2sgPSBlID0+IHtcbiAgICAvLyBJZ25vcmUgY2xpY2tzIG9uIHRoZSBwb3BvdmVyIG9yIGJ1dHRvblxuICAgIGlmICh0aGlzLnRhcmdldFJlZiAmJiB0aGlzLnRhcmdldFJlZi5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLnBvcG92ZXJOb2RlICYmIHRoaXMucG9wb3Zlck5vZGUuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBOb3RpZnkgYm9keSBjbGlja1xuICAgIHRoaXMucHJvcHMub25Cb2R5Q2xpY2soZSlcblxuICAgIGlmICh0aGlzLnByb3BzLnNob3VsZENsb3NlT25FeHRlcm5hbENsaWNrID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jbG9zZSgpXG4gIH1cblxuICBvbkVzYyA9IGUgPT4ge1xuICAgIC8vIEVzYyBrZXlcbiAgICBpZiAoZS5rZXlDb2RlID09PSAyNykge1xuICAgICAgdGhpcy5jbG9zZSgpXG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLmlzU2hvd24pIHtcbiAgICAgIHRoaXMuY2xvc2UoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wZW4oKVxuICAgIH1cbiAgfVxuXG4gIG9wZW4gPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc3RhdGUuaXNTaG93bikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzU2hvd246IHRydWUgfSlcbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkJvZHlDbGljaywgZmFsc2UpXG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbkVzYywgZmFsc2UpXG5cbiAgICB0aGlzLnByb3BzLm9uT3BlbigpXG4gIH1cblxuICBjbG9zZSA9ICgpID0+IHtcbiAgICBpZiAoIXRoaXMuc3RhdGUuaXNTaG93bikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzU2hvd246IGZhbHNlIH0pXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Cb2R5Q2xpY2ssIGZhbHNlKVxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25Fc2MsIGZhbHNlKVxuXG4gICAgdGhpcy5icmluZ0ZvY3VzQmFja1RvVGFyZ2V0KClcbiAgICB0aGlzLnByb3BzLm9uQ2xvc2UoKVxuICB9XG5cbiAgaGFuZGxlT3BlbkNvbXBsZXRlID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLmJyaW5nRm9jdXNJbnNpZGUpIHRoaXMuYnJpbmdGb2N1c0luc2lkZSgpXG4gICAgdGhpcy5wcm9wcy5vbk9wZW5Db21wbGV0ZSgpXG4gIH1cblxuICBoYW5kbGVDbG9zZUNvbXBsZXRlID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMub25DbG9zZUNvbXBsZXRlKClcbiAgfVxuXG4gIGhhbmRsZUtleURvd24gPSBlID0+IHtcbiAgICBpZiAoZS5rZXkgPT09ICdBcnJvd0Rvd24nKSB7XG4gICAgICB0aGlzLmJyaW5nRm9jdXNJbnNpZGUoKVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZU9wZW5Ib3ZlciA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy50cmlnZ2VyID09PSAnaG92ZXInKSB7XG4gICAgICB0aGlzLm9wZW4oKVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUNsb3NlSG92ZXIgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMudHJpZ2dlciA9PT0gJ2hvdmVyJykge1xuICAgICAgdGhpcy5jbG9zZSgpXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyVGFyZ2V0ID0gKHsgZ2V0UmVmLCBpc1Nob3duIH0pID0+IHtcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgaXNUb29sdGlwSW5zaWRlID0gY2hpbGRyZW4gJiYgY2hpbGRyZW4udHlwZSA9PT0gVG9vbHRpcFxuXG4gICAgY29uc3QgZ2V0VGFyZ2V0UmVmID0gcmVmID0+IHtcbiAgICAgIHRoaXMudGFyZ2V0UmVmID0gcmVmXG4gICAgICBnZXRSZWYocmVmKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdoZW4gYSBmdW5jdGlvbiBpcyBwYXNzZWQsIHlvdSBjYW4gY29udHJvbCB0aGUgUG9wb3ZlciBtYW51YWxseS5cbiAgICAgKi9cbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gY2hpbGRyZW4oe1xuICAgICAgICB0b2dnbGU6IHRoaXMudG9nZ2xlLFxuICAgICAgICBnZXRSZWY6IGdldFRhcmdldFJlZixcbiAgICAgICAgaXNTaG93blxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBwb3BvdmVyVGFyZ2V0UHJvcHMgPSB7XG4gICAgICBvbkNsaWNrOiB0aGlzLnRvZ2dsZSxcbiAgICAgIG9uTW91c2VFbnRlcjogdGhpcy5oYW5kbGVPcGVuSG92ZXIsXG4gICAgICBvbktleURvd246IHRoaXMuaGFuZGxlS2V5RG93bixcbiAgICAgIHJvbGU6ICdidXR0b24nLFxuICAgICAgJ2FyaWEtZXhwYW5kZWQnOiBpc1Nob3duLFxuICAgICAgJ2FyaWEtaGFzcG9wdXAnOiB0cnVlXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVG9vbHRpcHMgY2FuIGJlIHVzZWQgd2l0aGluIGEgUG9wb3ZlciAobm90IHRoZSBvdGhlciB3YXkgYXJvdW5kKVxuICAgICAqIEluIHRoaXMgY2FzZSB0aGUgY2hpbGRyZW4gaXMgdGhlIFRvb2x0aXAgaW5zdGVhZCBvZiBhIGJ1dHRvbi5cbiAgICAgKiBQYXNzIHRoZSBwcm9wZXJ0aWVzIHRvIHRoZSBUb29sdGlwIGFuZCBsZXQgdGhlIFRvb2x0aXBcbiAgICAgKiBhZGQgdGhlIHByb3BlcnRpZXMgdG8gdGhlIHRhcmdldC5cbiAgICAgKi9cbiAgICBpZiAoaXNUb29sdGlwSW5zaWRlKSB7XG4gICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7XG4gICAgICAgIHBvcG92ZXJQcm9wczoge1xuICAgICAgICAgIGdldFRhcmdldFJlZixcbiAgICAgICAgICBpc1Nob3duLFxuXG4gICAgICAgICAgLy8gVGhlc2UgcHJvcGV0aWVzIHdpbGwgYmUgc3ByZWFkIGFzIGBwb3BvdmVyVGFyZ2V0UHJvcHNgXG4gICAgICAgICAgLy8gaW4gdGhlIFRvb2x0aXAgY29tcG9uZW50LlxuICAgICAgICAgIC4uLnBvcG92ZXJUYXJnZXRQcm9wc1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdpdGggbm9ybWFsIHVzYWdlIG9ubHkgcG9wb3ZlciBwcm9wcyBlbmQgdXAgb24gdGhlIHRhcmdldC5cbiAgICAgKi9cbiAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7XG4gICAgICBpbm5lclJlZjogZ2V0VGFyZ2V0UmVmLFxuICAgICAgLi4ucG9wb3ZlclRhcmdldFByb3BzXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBpc1Nob3duLFxuICAgICAgY29udGVudCxcbiAgICAgIGRpc3BsYXksXG4gICAgICBtaW5XaWR0aCxcbiAgICAgIHBvc2l0aW9uLFxuICAgICAgbWluSGVpZ2h0LFxuICAgICAgc3RhdGVsZXNzUHJvcHMgPSB7fSxcbiAgICAgIGFuaW1hdGlvbkR1cmF0aW9uLFxuICAgICAgb25DbG9zZUNvbXBsZXRlXG4gICAgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGlzU2hvd246IHN0YXRlSXNTaG93biB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgLy8gSWYgYGlzU2hvd25gIGlzIGEgYm9vbGVhbiwgcG9wb3ZlciBpcyBjb250cm9sbGVkIG1hbnVhbGx5LCBub3QgdmlhIG1vdXNlIGV2ZW50c1xuICAgIGNvbnN0IHNob3duID0gdHlwZW9mIGlzU2hvd24gPT09ICdib29sZWFuJyA/IGlzU2hvd24gOiBzdGF0ZUlzU2hvd25cblxuICAgIHJldHVybiAoXG4gICAgICA8UG9zaXRpb25lclxuICAgICAgICB0YXJnZXQ9eyh7IGdldFJlZiwgaXNTaG93biwgdGFyZ2V0V2lkdGggfSkgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlclRhcmdldCh7IGdldFJlZiwgaXNTaG93biwgdGFyZ2V0V2lkdGggfSlcbiAgICAgICAgfX1cbiAgICAgICAgaXNTaG93bj17c2hvd259XG4gICAgICAgIHBvc2l0aW9uPXtwb3NpdGlvbn1cbiAgICAgICAgYW5pbWF0aW9uRHVyYXRpb249e2FuaW1hdGlvbkR1cmF0aW9ufVxuICAgICAgICBvbk9wZW5Db21wbGV0ZT17dGhpcy5oYW5kbGVPcGVuQ29tcGxldGV9XG4gICAgICAgIG9uQ2xvc2VDb21wbGV0ZT17b25DbG9zZUNvbXBsZXRlfVxuICAgICAgPlxuICAgICAgICB7KHsgY3NzLCBzdHlsZSwgc3RhdGUsIGdldFJlZiB9KSA9PiAoXG4gICAgICAgICAgPFBvcG92ZXJTdGF0ZWxlc3NcbiAgICAgICAgICAgIGlubmVyUmVmPXtyZWYgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnBvcG92ZXJOb2RlID0gcmVmXG4gICAgICAgICAgICAgIGdldFJlZihyZWYpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgZGF0YS1zdGF0ZT17c3RhdGV9XG4gICAgICAgICAgICBkaXNwbGF5PXtkaXNwbGF5fVxuICAgICAgICAgICAgbWluV2lkdGg9e21pbldpZHRofVxuICAgICAgICAgICAgbWluSGVpZ2h0PXttaW5IZWlnaHR9XG4gICAgICAgICAgICB7Li4uc3RhdGVsZXNzUHJvcHN9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICAgICAgICBzdGF0ZWxlc3NQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICAgIGNzcyA/IGdsYW1vckNzcyhjc3MpLnRvU3RyaW5nKCkgOiB1bmRlZmluZWRcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICBzdHlsZT17XG4gICAgICAgICAgICAgIHN0YXRlbGVzc1Byb3BzICYmIHN0YXRlbGVzc1Byb3BzLnN0eWxlXG4gICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnN0eWxlLFxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZWxlc3NQcm9wcy5zdHlsZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDogc3R5bGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17dGhpcy5oYW5kbGVDbG9zZUhvdmVyfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0eXBlb2YgY29udGVudCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICA/IGNvbnRlbnQoeyBjbG9zZTogdGhpcy5jbG9zZSB9KVxuICAgICAgICAgICAgICA6IGNvbnRlbnR9XG4gICAgICAgICAgPC9Qb3BvdmVyU3RhdGVsZXNzPlxuICAgICAgICApfVxuICAgICAgPC9Qb3NpdGlvbmVyPlxuICAgIClcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEVBQVAsTUFBZSxZQUFmO0FBQ0EsU0FBU0MsR0FBRyxJQUFJQyxTQUFoQixRQUFpQyxRQUFqQztBQUNBLE9BQU9DLEtBQVAsSUFBZ0JDLFNBQWhCLFFBQWlDLE9BQWpDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLFVBQVQsUUFBMkIsa0JBQTNCO0FBQ0EsU0FBU0MsT0FBVCxRQUF3QixlQUF4QjtBQUNBLFNBQVNDLFFBQVQsUUFBeUIsaUJBQXpCO0FBQ0EsT0FBT0MsZ0JBQVAsTUFBNkIsb0JBQTdCOztJQUVxQkMsTzs7Ozs7RUFrSG5CLGlCQUFZQyxLQUFaLEVBQW1CO0lBQUE7O0lBQUE7O0lBQ2pCLDBCQUFNQSxLQUFOOztJQURpQixtRUFnQkEsWUFBTTtNQUN2QjtNQUNBLE9BQU9DLHFCQUFxQixDQUFDLFlBQU07UUFDakM7UUFDQTtRQUNBLElBQ0UsTUFBS0MsV0FB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