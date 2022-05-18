import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _excluded = ["getTargetRef", "isShown"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import cx from 'classnames';
import { css as glamorCss } from 'glamor';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';
import { Positioner } from '../../positioner';
import { Position } from '../../constants';
import TooltipStateless from './TooltipStateless';
var idCounter = 0;

var Tooltip = /*#__PURE__*/function (_PureComponent) {
  _inherits(Tooltip, _PureComponent);

  var _super = _createSuper(Tooltip);

  function Tooltip(props, context) {
    var _this;

    _classCallCheck(this, Tooltip);

    _this = _super.call(this, props, context);

    _defineProperty(_assertThisInitialized(_this), "show", function () {
      if (_this.state.isShown) return;

      _this.setState({
        willShow: true
      });

      _this.timeout = setTimeout(function () {
        if (!_this.state.willShow) return;

        _this.setState({
          isShown: true
        });
      }, _this.props.showDelay);
    });

    _defineProperty(_assertThisInitialized(_this), "hide", function () {
      _this.setState({
        isShown: false,
        willShow: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderTarget", function (_ref) {
      var getRef = _ref.getRef;
      var children = _this.props.children;
      var tooltipTargetProps = {
        onMouseEnter: _this.show,
        onMouseLeave: _this.hide,
        'aria-describedby': _this.state.id
      };
      /**
       * Tooltips can be used within a Popover (not the other way around)
       * When a Tooltip is used within a Popover, the Popover passes
       * its props to the Tooltip in a `popoverProps` object.
       */
      // eslint-disable-next-line react/prop-types

      if (_this.props.popoverProps) {
        var _this$props$popoverPr = _this.props.popoverProps,
            getTargetRef = _this$props$popoverPr.getTargetRef,
            isShown = _this$props$popoverPr.isShown,
            popoverTargetProps = _objectWithoutProperties(_this$props$popoverPr, _excluded);

        return /*#__PURE__*/React.cloneElement(children, _objectSpread(_objectSpread(_objectSpread({}, popoverTargetProps), tooltipTargetProps), {}, {
          innerRef: function innerRef(ref) {
            // Get the ref for the Tooltip.
            getRef(ref); // Pass the ref to the Popover.

            getTargetRef(ref);
          }
        }));
      }
      /**
       * With normal usage only the props for a Tooltip are passed to the target.
       */


      return /*#__PURE__*/React.cloneElement(children, _objectSpread(_objectSpread({}, tooltipTargetProps), {}, {
        innerRef: function innerRef(ref) {
          getRef(ref);
        }
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "isPopoverShown", function () {
      return (// eslint-disable-next-line react/prop-types
        _this.props.popoverProps && _this.props.popoverProps.isShown
      );
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseEnterTarget", function () {
      _this.setState({
        isShownByTarget: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseLeaveTarget", function () {
      _this.setState({
        isShownByTarget: false,
        willShow: false
      });
    });

    _this.state = {
      id: "evergreen-tooltip-".concat(++idCounter),
      willShow: false,
      isShown: props.isShown,
      isShownByTarget: false
    };
    _this.handleMouseLeaveTarget = debounce(_this.handleMouseLeaveTarget, _this.props.hideDelay);
    _this.hide = debounce(_this.hide, _this.props.hideDelay);
    return _this;
  }

  _createClass(Tooltip, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.timeout);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          appearance = _this$props.appearance,
          isShown = _this$props.isShown,
          content = _this$props.content,
          position = _this$props.position,
          _this$props$stateless = _this$props.statelessProps,
          statelessProps = _this$props$stateless === void 0 ? {} : _this$props$stateless;
      var _this$state = this.state,
          stateIsShown = _this$state.isShown,
          isShownByTarget = _this$state.isShownByTarget;
      var shown = (isShown || stateIsShown || isShownByTarget) && !this.isPopoverShown(); // Tooltip was explicitly set to not be shown

      if (isShown === false) {
        shown = false;
      }

      return /*#__PURE__*/React.createElement(Positioner, {
        target: function target(_ref2) {
          var getRef = _ref2.getRef;
          return _this2.renderTarget({
            getRef: getRef
          });
        },
        isShown: shown,
        position: position,
        animationDuration: 160
      }, function (_ref3) {
        var css = _ref3.css,
            style = _ref3.style,
            state = _ref3.state,
            getRef = _ref3.getRef;
        return /*#__PURE__*/React.createElement(TooltipStateless, _extends({
          id: _this2.state.id,
          appearance: appearance,
          innerRef: function innerRef(ref) {
            return getRef(ref);
          },
          "data-state": state,
          style: style,
          onMouseEnter: _this2.handleMouseEnterTarget,
          onMouseLeave: _this2.handleMouseLeaveTarget
        }, statelessProps, {
          className: cx(statelessProps.className, css ? glamorCss(css).toString() : undefined)
        }), content);
      });
    }
  }]);

  return Tooltip;
}(PureComponent);

Tooltip.displayName = "Tooltip";

_defineProperty(Tooltip, "propTypes", {
  /**
   * The appearance of the tooltip.
   */
  appearance: PropTypes.oneOf(['default', 'card']).isRequired,

  /**
   * The position the Popover is on.
   */
  position: PropTypes.oneOf([Position.TOP, Position.TOP_LEFT, Position.TOP_RIGHT, Position.BOTTOM, Position.BOTTOM_LEFT, Position.BOTTOM_RIGHT, Position.LEFT, Position.RIGHT]),

  /**
   * The content of the Popover.
   */
  content: PropTypes.node.isRequired,

  /**
   * Time in ms before hiding the Tooltip.
   */
  hideDelay: PropTypes.number.isRequired,

  /**
   * Time in ms before showing the Tooltip.
   */
  showDelay: PropTypes.number.isRequired,

  /**
   * When True, manually show the Tooltip.
   */
  isShown: PropTypes.bool,

  /**
   * The target button of the Tooltip.
   */
  children: PropTypes.node.isRequired,

  /**
   * Properties passed through to the Tooltip.
   */
  statelessProps: PropTypes.object
});

_defineProperty(Tooltip, "defaultProps", {
  appearance: 'default',
  position: Position.BOTTOM,
  hideDelay: 120,
  showDelay: 0
});

export { Tooltip as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjeCIsImNzcyIsImdsYW1vckNzcyIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIlByb3BUeXBlcyIsImRlYm91bmNlIiwiUG9zaXRpb25lciIsIlBvc2l0aW9uIiwiVG9vbHRpcFN0YXRlbGVzcyIsImlkQ291bnRlciIsIlRvb2x0aXAiLCJwcm9wcyIsImNvbnRleHQiLCJzdGF0ZSIsImlzU2hvd24iLCJzZXRTdGF0ZSIsIndpbGxTaG93IiwidGltZW91dCIsInNldFRpbWVvdXQiLCJzaG93RGVsYXkiLCJnZXRSZWYiLCJjaGlsZHJlbiIsInRvb2x0aXBUYXJnZXRQcm9wcyIsIm9uTW91c2VFbnRlciIsInNob3ciLCJvbk1vdXNlTGVhdmUiLCJoaWRlIiwiaWQiLCJwb3BvdmVyUHJvcHMiLCJnZXRUYXJnZXRSZWYiLCJwb3BvdmVyVGFyZ2V0UHJvcHMiLCJjbG9uZUVsZW1lbnQiLCJpbm5lclJlZiIsInJlZiIsImlzU2hvd25CeVRhcmdldCIsImhhbmRsZU1vdXNlTGVhdmVUYXJnZXQiLCJoaWRlRGVsYXkiLCJjbGVhclRpbWVvdXQiLCJhcHBlYXJhbmNlIiwiY29udGVudCIsInBvc2l0aW9uIiwic3RhdGVsZXNzUHJvcHMiLCJzdGF0ZUlzU2hvd24iLCJzaG93biIsImlzUG9wb3ZlclNob3duIiwicmVuZGVyVGFyZ2V0Iiwic3R5bGUiLCJoYW5kbGVNb3VzZUVudGVyVGFyZ2V0IiwiY2xhc3NOYW1lIiwidG9TdHJpbmciLCJ1bmRlZmluZWQiLCJvbmVPZiIsImlzUmVxdWlyZWQiLCJUT1AiLCJUT1BfTEVGVCIsIlRPUF9SSUdIVCIsIkJPVFRPTSIsIkJPVFRPTV9MRUZUIiwiQk9UVE9NX1JJR0hUIiwiTEVGVCIsIlJJR0hUIiwibm9kZSIsIm51bWJlciIsImJvb2wiLCJvYmplY3QiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdG9vbHRpcC9zcmMvVG9vbHRpcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCB7IGNzcyBhcyBnbGFtb3JDc3MgfSBmcm9tICdnbGFtb3InXG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJ2xvZGFzaC5kZWJvdW5jZSdcbmltcG9ydCB7IFBvc2l0aW9uZXIgfSBmcm9tICcuLi8uLi9wb3NpdGlvbmVyJ1xuaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tICcuLi8uLi9jb25zdGFudHMnXG5pbXBvcnQgVG9vbHRpcFN0YXRlbGVzcyBmcm9tICcuL1Rvb2x0aXBTdGF0ZWxlc3MnXG5cbmxldCBpZENvdW50ZXIgPSAwXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvb2x0aXAgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBUaGUgYXBwZWFyYW5jZSBvZiB0aGUgdG9vbHRpcC5cbiAgICAgKi9cbiAgICBhcHBlYXJhbmNlOiBQcm9wVHlwZXMub25lT2YoWydkZWZhdWx0JywgJ2NhcmQnXSkuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBwb3NpdGlvbiB0aGUgUG9wb3ZlciBpcyBvbi5cbiAgICAgKi9cbiAgICBwb3NpdGlvbjogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAgIFBvc2l0aW9uLlRPUCxcbiAgICAgIFBvc2l0aW9uLlRPUF9MRUZULFxuICAgICAgUG9zaXRpb24uVE9QX1JJR0hULFxuICAgICAgUG9zaXRpb24uQk9UVE9NLFxuICAgICAgUG9zaXRpb24uQk9UVE9NX0xFRlQsXG4gICAgICBQb3NpdGlvbi5CT1RUT01fUklHSFQsXG4gICAgICBQb3NpdGlvbi5MRUZULFxuICAgICAgUG9zaXRpb24uUklHSFRcbiAgICBdKSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBjb250ZW50IG9mIHRoZSBQb3BvdmVyLlxuICAgICAqL1xuICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaW1lIGluIG1zIGJlZm9yZSBoaWRpbmcgdGhlIFRvb2x0aXAuXG4gICAgICovXG4gICAgaGlkZURlbGF5OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaW1lIGluIG1zIGJlZm9yZSBzaG93aW5nIHRoZSBUb29sdGlwLlxuICAgICAqL1xuICAgIHNob3dEZWxheTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiBUcnVlLCBtYW51YWxseSBzaG93IHRoZSBUb29sdGlwLlxuICAgICAqL1xuICAgIGlzU2hvd246IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHRhcmdldCBidXR0b24gb2YgdGhlIFRvb2x0aXAuXG4gICAgICovXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0aWVzIHBhc3NlZCB0aHJvdWdoIHRvIHRoZSBUb29sdGlwLlxuICAgICAqL1xuICAgIHN0YXRlbGVzc1Byb3BzOiBQcm9wVHlwZXMub2JqZWN0XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGFwcGVhcmFuY2U6ICdkZWZhdWx0JyxcbiAgICBwb3NpdGlvbjogUG9zaXRpb24uQk9UVE9NLFxuICAgIGhpZGVEZWxheTogMTIwLFxuICAgIHNob3dEZWxheTogMFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpIHtcbiAgICBzdXBlcihwcm9wcywgY29udGV4dClcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpZDogYGV2ZXJncmVlbi10b29sdGlwLSR7KytpZENvdW50ZXJ9YCxcbiAgICAgIHdpbGxTaG93OiBmYWxzZSxcbiAgICAgIGlzU2hvd246IHByb3BzLmlzU2hvd24sXG4gICAgICBpc1Nob3duQnlUYXJnZXQ6IGZhbHNlXG4gICAgfVxuXG4gICAgdGhpcy5oYW5kbGVNb3VzZUxlYXZlVGFyZ2V0ID0gZGVib3VuY2UoXG4gICAgICB0aGlzLmhhbmRsZU1vdXNlTGVhdmVUYXJnZXQsXG4gICAgICB0aGlzLnByb3BzLmhpZGVEZWxheVxuICAgIClcblxuICAgIHRoaXMuaGlkZSA9IGRlYm91bmNlKHRoaXMuaGlkZSwgdGhpcy5wcm9wcy5oaWRlRGVsYXkpXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KVxuICB9XG5cbiAgc2hvdyA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5pc1Nob3duKSByZXR1cm5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHdpbGxTaG93OiB0cnVlXG4gICAgfSlcbiAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICghdGhpcy5zdGF0ZS53aWxsU2hvdykgcmV0dXJuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaXNTaG93bjogdHJ1ZVxuICAgICAgfSlcbiAgICB9LCB0aGlzLnByb3BzLnNob3dEZWxheSlcbiAgfVxuXG4gIGhpZGUgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc1Nob3duOiBmYWxzZSxcbiAgICAgIHdpbGxTaG93OiBmYWxzZVxuICAgIH0pXG4gIH1cblxuICByZW5kZXJUYXJnZXQgPSAoeyBnZXRSZWYgfSkgPT4ge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IHRvb2x0aXBUYXJnZXRQcm9wcyA9IHtcbiAgICAgIG9uTW91c2VFbnRlcjogdGhpcy5zaG93LFxuICAgICAgb25Nb3VzZUxlYXZlOiB0aGlzLmhpZGUsXG4gICAgICAnYXJpYS1kZXNjcmliZWRieSc6IHRoaXMuc3RhdGUuaWRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUb29sdGlwcyBjYW4gYmUgdXNlZCB3aXRoaW4gYSBQb3BvdmVyIChub3QgdGhlIG90aGVyIHdheSBhcm91bmQpXG4gICAgICogV2hlbiBhIFRvb2x0aXAgaXMgdXNlZCB3aXRoaW4gYSBQb3BvdmVyLCB0aGUgUG9wb3ZlciBwYXNzZXNcbiAgICAgKiBpdHMgcHJvcHMgdG8gdGhlIFRvb2x0aXAgaW4gYSBgcG9wb3ZlclByb3BzYCBvYmplY3QuXG4gICAgICovXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L3Byb3AtdHlwZXNcbiAgICBpZiAodGhpcy5wcm9wcy5wb3BvdmVyUHJvcHMpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L3Byb3AtdHlwZXNcbiAgICAgICAgZ2V0VGFyZ2V0UmVmLFxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvcHJvcC10eXBlc1xuICAgICAgICBpc1Nob3duLFxuICAgICAgICAuLi5wb3BvdmVyVGFyZ2V0UHJvcHNcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L3Byb3AtdHlwZXNcbiAgICAgIH0gPSB0aGlzLnByb3BzLnBvcG92ZXJQcm9wc1xuXG4gICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7XG4gICAgICAgIC8vIEFkZCB0aGUgUG9wb3ZlciBwcm9wcyB0byB0aGUgdGFyZ2V0LlxuICAgICAgICAuLi5wb3BvdmVyVGFyZ2V0UHJvcHMsXG4gICAgICAgIC8vIEFkZCB0aGUgVG9vbHRpcCBwcm9wcyB0byB0aGUgdGFyZ2V0LlxuICAgICAgICAuLi50b29sdGlwVGFyZ2V0UHJvcHMsXG5cbiAgICAgICAgaW5uZXJSZWY6IHJlZiA9PiB7XG4gICAgICAgICAgLy8gR2V0IHRoZSByZWYgZm9yIHRoZSBUb29sdGlwLlxuICAgICAgICAgIGdldFJlZihyZWYpXG4gICAgICAgICAgLy8gUGFzcyB0aGUgcmVmIHRvIHRoZSBQb3BvdmVyLlxuICAgICAgICAgIGdldFRhcmdldFJlZihyZWYpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2l0aCBub3JtYWwgdXNhZ2Ugb25seSB0aGUgcHJvcHMgZm9yIGEgVG9vbHRpcCBhcmUgcGFzc2VkIHRvIHRoZSB0YXJnZXQuXG4gICAgICovXG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlbiwge1xuICAgICAgLi4udG9vbHRpcFRhcmdldFByb3BzLFxuICAgICAgaW5uZXJSZWY6IHJlZiA9PiB7XG4gICAgICAgIGdldFJlZihyZWYpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGlzUG9wb3ZlclNob3duID0gKCkgPT5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvcHJvcC10eXBlc1xuICAgIHRoaXMucHJvcHMucG9wb3ZlclByb3BzICYmIHRoaXMucHJvcHMucG9wb3ZlclByb3BzLmlzU2hvd25cblxuICBoYW5kbGVNb3VzZUVudGVyVGFyZ2V0ID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNTaG93bkJ5VGFyZ2V0OiB0cnVlXG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZU1vdXNlTGVhdmVUYXJnZXQgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc1Nob3duQnlUYXJnZXQ6IGZhbHNlLFxuICAgICAgd2lsbFNob3c6IGZhbHNlXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBhcHBlYXJhbmNlLFxuICAgICAgaXNTaG93bixcbiAgICAgIGNvbnRlbnQsXG4gICAgICBwb3NpdGlvbixcbiAgICAgIHN0YXRlbGVzc1Byb3BzID0ge31cbiAgICB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgaXNTaG93bjogc3RhdGVJc1Nob3duLCBpc1Nob3duQnlUYXJnZXQgfSA9IHRoaXMuc3RhdGVcblxuICAgIGxldCBzaG93biA9XG4gICAgICAoaXNTaG93biB8fCBzdGF0ZUlzU2hvd24gfHwgaXNTaG93bkJ5VGFyZ2V0KSAmJiAhdGhpcy5pc1BvcG92ZXJTaG93bigpXG5cbiAgICAvLyBUb29sdGlwIHdhcyBleHBsaWNpdGx5IHNldCB0byBub3QgYmUgc2hvd25cbiAgICBpZiAoaXNTaG93biA9PT0gZmFsc2UpIHtcbiAgICAgIHNob3duID0gZmFsc2VcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBvc2l0aW9uZXJcbiAgICAgICAgdGFyZ2V0PXsoeyBnZXRSZWYgfSkgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlclRhcmdldCh7IGdldFJlZiB9KVxuICAgICAgICB9fVxuICAgICAgICBpc1Nob3duPXtzaG93bn1cbiAgICAgICAgcG9zaXRpb249e3Bvc2l0aW9ufVxuICAgICAgICBhbmltYXRpb25EdXJhdGlvbj17MTYwfVxuICAgICAgPlxuICAgICAgICB7KHsgY3NzLCBzdHlsZSwgc3RhdGUsIGdldFJlZiB9KSA9PiAoXG4gICAgICAgICAgPFRvb2x0aXBTdGF0ZWxlc3NcbiAgICAgICAgICAgIGlkPXt0aGlzLnN0YXRlLmlkfVxuICAgICAgICAgICAgYXBwZWFyYW5jZT17YXBwZWFyYW5jZX1cbiAgICAgICAgICAgIGlubmVyUmVmPXtyZWYgPT4gZ2V0UmVmKHJlZil9XG4gICAgICAgICAgICBkYXRhLXN0YXRlPXtzdGF0ZX1cbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgIG9uTW91c2VFbnRlcj17dGhpcy5oYW5kbGVNb3VzZUVudGVyVGFyZ2V0fVxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLmhhbmRsZU1vdXNlTGVhdmVUYXJnZXR9XG4gICAgICAgICAgICB7Li4uc3RhdGVsZXNzUHJvcHN9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2N4KFxuICAgICAgICAgICAgICBzdGF0ZWxlc3NQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICAgIGNzcyA/IGdsYW1vckNzcyhjc3MpLnRvU3RyaW5nKCkgOiB1bmRlZmluZWRcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2NvbnRlbnR9XG4gICAgICAgICAgPC9Ub29sdGlwU3RhdGVsZXNzPlxuICAgICAgICApfVxuICAgICAgPC9Qb3NpdGlvbmVyPlxuICAgIClcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsRUFBUCxNQUFlLFlBQWY7QUFDQSxTQUFTQyxHQUFHLElBQUlDLFNBQWhCLFFBQWlDLFFBQWpDO0FBQ0EsT0FBT0MsS0FBUCxJQUFnQkMsYUFBaEIsUUFBcUMsT0FBckM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsUUFBUCxNQUFxQixpQkFBckI7QUFDQSxTQUFTQyxVQUFULFFBQTJCLGtCQUEzQjtBQUNBLFNBQVNDLFFBQVQsUUFBeUIsaUJBQXpCO0FBQ0EsT0FBT0MsZ0JBQVAsTUFBNkIsb0JBQTdCO0FBRUEsSUFBSUMsU0FBUyxHQUFHLENBQWhCOztJQUVxQkMsTzs7Ozs7RUEyRG5CLGlCQUFZQyxLQUFaLEVBQW1CQyxPQUFuQixFQUE0QjtJQUFBOztJQUFBOztJQUMxQiwwQkFBTUQsS0FBTixFQUFhQyxPQUFiOztJQUQwQix1REFzQnJCLFlBQU07TUFDWCxJQUFJLE1BQUtDLEtBQUwsQ0FBV0MsT0FBZixFQUF3Qjs7TUFDeEIsTUFBS0MsUUFBTCxDQUFjO1FBQ1pDLFFBQVEsRUFBRTtNQURFLENBQWQ7O01BR0EsTUFBS0MsT0FBTCxHQUFlQyxVQUFVLENBQUMsWUFBTTtRQUM5QixJQUFJLENBQUMsTUFBS0wsS0FBTCxDQUFXRyxRQUFoQixFQUEwQjs7UUFDMUIsTUFBS0QsUUFBTCxDQUFjO1VBQ1pELE9BQU8sRUFBRTtRQURHLENBQWQ7TUFHRCxDQUx3QixFQUt0QixNQUFLSCxLQUFMLENBQVdRLFNBTFcsQ0FBekI7SUFNRCxDQWpDMkI7O0lBQUEsdURBbUNyQixZQUFN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