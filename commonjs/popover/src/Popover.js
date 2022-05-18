"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

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

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _positioner = require("../../positioner");

var _tooltip = require("../../tooltip");

var _constants = require("../../constants");

var _PopoverStateless = _interopRequireDefault(require("./PopoverStateless"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Popover = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Popover, _Component);

  var _super = _createSuper(Popover);

  function Popover(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Popover);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "bringFocusInside", function () {
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
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "bringFocusBackToTarget", function () {
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
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onBodyClick", function (e) {
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
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onEsc", function (e) {
      // Esc key
      if (e.keyCode === 27) {
        _this.close();
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "toggle", function () {
      if (_this.state.isShown) {
        _this.close();
      } else {
        _this.open();
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "open", function () {
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
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "close", function () {
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
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleOpenComplete", function () {
      if (_this.props.bringFocusInside) _this.bringFocusInside();

      _this.props.onOpenComplete();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleCloseComplete", function () {
      _this.props.onCloseComplete();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleKeyDown", function (e) {
      if (e.key === 'ArrowDown') {
        _this.bringFocusInside();
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleOpenHover", function () {
      if (_this.props.trigger === 'hover') {
        _this.open();
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleCloseHover", function () {
      if (_this.props.trigger === 'hover') {
        _this.close();
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderTarget", function (_ref) {
      var getRef = _ref.getRef,
          isShown = _ref.isShown;
      var children = _this.props.children;
      var isTooltipInside = children && children.type === _tooltip.Tooltip;

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
        return /*#__PURE__*/_react["default"].cloneElement(children, {
          popoverProps: _objectSpread({
            getTargetRef: getTargetRef,
            isShown: isShown
          }, popoverTargetProps)
        });
      }
      /**
       * With normal usage only popover props end up on the target.
       */


      return /*#__PURE__*/_react["default"].cloneElement(children, _objectSpread({
        innerRef: getTargetRef
      }, popoverTargetProps));
    });
    _this.state = {
      isShown: props.isShown
    };
    return _this;
  }

  (0, _createClass2["default"])(Popover, [{
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
      return /*#__PURE__*/_react["default"].createElement(_positioner.Positioner, {
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
        return /*#__PURE__*/_react["default"].createElement(_PopoverStateless["default"], (0, _extends2["default"])({
          innerRef: function innerRef(ref) {
            _this2.popoverNode = ref;
            getRef(ref);
          },
          "data-state": state,
          display: display,
          minWidth: minWidth,
          minHeight: minHeight
        }, statelessProps, {
          className: (0, _classnames["default"])(statelessProps.className, css ? (0, _glamor.css)(css).toString() : undefined),
          style: statelessProps && statelessProps.style ? _objectSpread(_objectSpread({}, style), statelessProps.style) : style,
          onMouseLeave: _this2.handleCloseHover
        }), typeof content === 'function' ? content({
          close: _this2.close
        }) : content);
      });
    }
  }]);
  return Popover;
}(_react.Component);

exports["default"] = Popover;
Popover.displayName = "Popover";
(0, _defineProperty2["default"])(Popover, "propTypes", {
  /**
   * The position the Popover is on. Smart positioning might override this.
   */
  position: _propTypes["default"].oneOf([_constants.Position.TOP, _constants.Position.TOP_LEFT, _constants.Position.TOP_RIGHT, _constants.Position.BOTTOM, _constants.Position.BOTTOM_LEFT, _constants.Position.BOTTOM_RIGHT, _constants.Position.LEFT, _constants.Position.RIGHT]),

  /**
   * When true, the Popover is manually shown.
   */
  isShown: _propTypes["default"].bool,

  /**
   * Open the Popover based on click or hover. Default is click.
   */
  trigger: _propTypes["default"].oneOf(['click', 'hover']),

  /**
   * The content of the Popover.
   */
  content: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].func]).isRequired,

  /**
   * The target button of the Popover.
   * When a function the following arguments are passed:
   * ({ toggle: Function -> Void, getRef: Function -> Ref, isShown: Bool })
   */
  children: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func]).isRequired,

  /**
   * The display property passed to the Popover card.
   */
  display: _propTypes["default"].string,

  /**
   * The min width of the Popover card.
   */
  minWidth: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),

  /**
   * The min height of the Popover card.
   */
  minHeight: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]),

  /**
   * Properties passed through to the Popover card.
   */
  statelessProps: _propTypes["default"].shape(_PopoverStateless["default"].propTypes),

  /**
   * Duration of the animation.
   */
  animationDuration: _propTypes["default"].number,

  /**
   * Function called when the Popover opens.
   */
  onOpen: _propTypes["default"].func.isRequired,

  /**
   * Function fired when Popover closes.
   */
  onClose: _propTypes["default"].func.isRequired,

  /**
   * Function that will be called when the enter transition is complete.
   */
  onOpenComplete: _propTypes["default"].func.isRequired,

  /**
   * Function that will be called when the exit transition is complete.
   */
  onCloseComplete: _propTypes["default"].func.isRequired,

  /**
   * Function that will be called when the body is clicked.
   */
  onBodyClick: _propTypes["default"].func.isRequired,

  /**
   * When true, bring focus inside of the Popover on open.
   */
  bringFocusInside: _propTypes["default"].bool,

  /**
   * Boolean indicating if clicking outside the dialog should close the dialog.
   */
  shouldCloseOnExternalClick: _propTypes["default"].bool
});
(0, _defineProperty2["default"])(Popover, "defaultProps", {
  position: _constants.Position.BOTTOM,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJQb3BvdmVyIiwicHJvcHMiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJwb3BvdmVyTm9kZSIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsInN0YXRlIiwiaXNTaG93biIsImlzRm9jdXNPdXRzaWRlTW9kYWwiLCJjb250YWlucyIsImF1dG9mb2N1c0VsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwid3JhcHBlckVsZW1lbnQiLCJidXR0b25FbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb2N1cyIsImxlbmd0aCIsImlzRm9jdXNJbnNpZGVNb2RhbCIsInRhcmdldFJlZiIsImJvZHkiLCJlIiwidGFyZ2V0Iiwib25Cb2R5Q2xpY2siLCJzaG91bGRDbG9zZU9uRXh0ZXJuYWxDbGljayIsImNsb3NlIiwia2V5Q29kZSIsIm9wZW4iLCJzZXRTdGF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbkVzYyIsIm9uT3BlbiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJicmluZ0ZvY3VzQmFja1RvVGFyZ2V0Iiwib25DbG9zZSIsImJyaW5nRm9jdXNJbnNpZGUiLCJvbk9wZW5Db21wbGV0ZSIsIm9uQ2xvc2VDb21wbGV0ZSIsImtleSIsInRyaWdnZXIiLCJnZXRSZWYiLCJjaGlsZHJlbiIsImlzVG9vbHRpcEluc2lkZSIsInR5cGUiLCJUb29sdGlwIiwiZ2V0VGFyZ2V0UmVmIiwicmVmIiwidG9nZ2xlIiwicG9wb3ZlclRhcmdldFByb3BzIiwib25DbGljayIsIm9uTW91c2VFbnRlciIsImhhbmRsZU9wZW5Ib3ZlciIsIm9uS2V5RG93biIsImhhbmRsZUtleURvd24iLCJyb2xlIiwiUmVhY3QiLCJjbG9uZUVsZW1lbnQiLCJwb3BvdmVyUHJvcHMiLCJpbm5lclJlZiIsImNvbnRlbnQiLCJkaXNwbGF5IiwibWluV2lkdGgiLCJwb3NpdGlvbiIsIm1pbkhlaWdodCIsInN0YXRlbGVzc1Byb3BzIiwiYW5pbWF0aW9uRHVyYXRpb24iLCJzdGF0ZUlzU2hvd24iLCJzaG93biIsInRhcmdldFdpZHRoIiwicmVuZGVyVGFyZ2V0IiwiaGFuZGxlT3BlbkNvbXBsZXRlIiwiY3NzIiwic3R5bGUiLCJjeCIsImNsYXNzTmFtZSIsImdsYW1vckNzcyIsInRvU3RyaW5nIiwidW5kZWZpbmVkIiwiaGFuZGxlQ2xvc2VIb3ZlciIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsIm9uZU9mIiwiUG9zaXRpb24iLCJUT1AiLCJUT1BfTEVGVCIsIlRPUF9SSUdIVCIsIkJPVFRPTSIsIkJPVFRPTV9MRUZUIiwiQk9UVE9NX1JJR0hUIiwiTEVGVCIsIlJJR0hUIiwiYm9vbCIsIm9uZU9mVHlwZSIsIm5vZGUiLCJmdW5jIiwiaXNSZXF1aXJlZCIsImVsZW1lbnQiLCJzdHJpbmciLCJudW1iZXIiLCJzaGFwZSIsIlBvcG92ZXJTdGF0ZWxlc3MiLCJwcm9wVHlwZXMiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcG9wb3Zlci9zcmMvUG9wb3Zlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCB7IGNzcyBhcyBnbGFtb3JDc3MgfSBmcm9tICdnbGFtb3InXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBQb3NpdGlvbmVyIH0gZnJvbSAnLi4vLi4vcG9zaXRpb25lcidcbmltcG9ydCB7IFRvb2x0aXAgfSBmcm9tICcuLi8uLi90b29sdGlwJ1xuaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tICcuLi8uLi9jb25zdGFudHMnXG5pbXBvcnQgUG9wb3ZlclN0YXRlbGVzcyBmcm9tICcuL1BvcG92ZXJTdGF0ZWxlc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcG92ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIFRoZSBwb3NpdGlvbiB0aGUgUG9wb3ZlciBpcyBvbi4gU21hcnQgcG9zaXRpb25pbmcgbWlnaHQgb3ZlcnJpZGUgdGhpcy5cbiAgICAgKi9cbiAgICBwb3NpdGlvbjogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAgIFBvc2l0aW9uLlRPUCxcbiAgICAgIFBvc2l0aW9uLlRPUF9MRUZULFxuICAgICAgUG9zaXRpb24uVE9QX1JJR0hULFxuICAgICAgUG9zaXRpb24uQk9UVE9NLFxuICAgICAgUG9zaXRpb24uQk9UVE9NX0xFRlQsXG4gICAgICBQb3NpdGlvbi5CT1RUT01fUklHSFQsXG4gICAgICBQb3NpdGlvbi5MRUZULFxuICAgICAgUG9zaXRpb24uUklHSFRcbiAgICBdKSxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIFBvcG92ZXIgaXMgbWFudWFsbHkgc2hvd24uXG4gICAgICovXG4gICAgaXNTaG93bjogUHJvcFR5cGVzLmJvb2wsXG4gICAgLyoqXG4gICAgICogT3BlbiB0aGUgUG9wb3ZlciBiYXNlZCBvbiBjbGljayBvciBob3Zlci4gRGVmYXVsdCBpcyBjbGljay5cbiAgICAgKi9cbiAgICB0cmlnZ2VyOiBQcm9wVHlwZXMub25lT2YoWydjbGljaycsICdob3ZlciddKSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBjb250ZW50IG9mIHRoZSBQb3BvdmVyLlxuICAgICAqL1xuICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ub2RlLCBQcm9wVHlwZXMuZnVuY10pLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGFyZ2V0IGJ1dHRvbiBvZiB0aGUgUG9wb3Zlci5cbiAgICAgKiBXaGVuIGEgZnVuY3Rpb24gdGhlIGZvbGxvd2luZyBhcmd1bWVudHMgYXJlIHBhc3NlZDpcbiAgICAgKiAoeyB0b2dnbGU6IEZ1bmN0aW9uIC0+IFZvaWQsIGdldFJlZjogRnVuY3Rpb24gLT4gUmVmLCBpc1Nob3duOiBCb29sIH0pXG4gICAgICovXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LCBQcm9wVHlwZXMuZnVuY10pXG4gICAgICAuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBkaXNwbGF5IHByb3BlcnR5IHBhc3NlZCB0byB0aGUgUG9wb3ZlciBjYXJkLlxuICAgICAqL1xuICAgIGRpc3BsYXk6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbWluIHdpZHRoIG9mIHRoZSBQb3BvdmVyIGNhcmQuXG4gICAgICovXG4gICAgbWluV2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBtaW4gaGVpZ2h0IG9mIHRoZSBQb3BvdmVyIGNhcmQuXG4gICAgICovXG4gICAgbWluSGVpZ2h0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0aWVzIHBhc3NlZCB0aHJvdWdoIHRvIHRoZSBQb3BvdmVyIGNhcmQuXG4gICAgICovXG4gICAgc3RhdGVsZXNzUHJvcHM6IFByb3BUeXBlcy5zaGFwZShQb3BvdmVyU3RhdGVsZXNzLnByb3BUeXBlcyksXG5cbiAgICAvKipcbiAgICAgKiBEdXJhdGlvbiBvZiB0aGUgYW5pbWF0aW9uLlxuICAgICAqL1xuICAgIGFuaW1hdGlvbkR1cmF0aW9uOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gY2FsbGVkIHdoZW4gdGhlIFBvcG92ZXIgb3BlbnMuXG4gICAgICovXG4gICAgb25PcGVuOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gZmlyZWQgd2hlbiBQb3BvdmVyIGNsb3Nlcy5cbiAgICAgKi9cbiAgICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZSBlbnRlciB0cmFuc2l0aW9uIGlzIGNvbXBsZXRlLlxuICAgICAqL1xuICAgIG9uT3BlbkNvbXBsZXRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZSBleGl0IHRyYW5zaXRpb24gaXMgY29tcGxldGUuXG4gICAgICovXG4gICAgb25DbG9zZUNvbXBsZXRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZSBib2R5IGlzIGNsaWNrZWQuXG4gICAgICovXG4gICAgb25Cb2R5Q2xpY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIGJyaW5nIGZvY3VzIGluc2lkZSBvZiB0aGUgUG9wb3ZlciBvbiBvcGVuLlxuICAgICAqL1xuICAgIGJyaW5nRm9jdXNJbnNpZGU6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogQm9vbGVhbiBpbmRpY2F0aW5nIGlmIGNsaWNraW5nIG91dHNpZGUgdGhlIGRpYWxvZyBzaG91bGQgY2xvc2UgdGhlIGRpYWxvZy5cbiAgICAgKi9cbiAgICBzaG91bGRDbG9zZU9uRXh0ZXJuYWxDbGljazogUHJvcFR5cGVzLmJvb2xcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgcG9zaXRpb246IFBvc2l0aW9uLkJPVFRPTSxcbiAgICBtaW5XaWR0aDogMjAwLFxuICAgIG1pbkhlaWdodDogNDAsXG4gICAgYW5pbWF0aW9uRHVyYXRpb246IDMwMCxcbiAgICBvbk9wZW46ICgpID0+IHt9LFxuICAgIG9uQ2xvc2U6ICgpID0+IHt9LFxuICAgIG9uT3BlbkNvbXBsZXRlOiAoKSA9PiB7fSxcbiAgICBvbkNsb3NlQ29tcGxldGU6ICgpID0+IHt9LFxuICAgIG9uQm9keUNsaWNrOiAoKSA9PiB7fSxcbiAgICBicmluZ0ZvY3VzSW5zaWRlOiBmYWxzZSxcbiAgICBzaG91bGRDbG9zZU9uRXh0ZXJuYWxDbGljazogdHJ1ZSxcbiAgICB0cmlnZ2VyOiAnY2xpY2snXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc1Nob3duOiBwcm9wcy5pc1Nob3duXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Cb2R5Q2xpY2ssIGZhbHNlKVxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25Fc2MsIGZhbHNlKVxuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZHMgYm9ycm93ZWQgZnJvbSBCbHVlcHJpbnRKU1xuICAgKiBodHRwczovL2dpdGh1Yi5jb20vcGFsYW50aXIvYmx1ZXByaW50L2Jsb2IvcmVsZWFzZS8yLjAuMC9wYWNrYWdlcy9jb3JlL3NyYy9jb21wb25lbnRzL292ZXJsYXkvb3ZlcmxheS50c3hcbiAgICovXG4gIGJyaW5nRm9jdXNJbnNpZGUgPSAoKSA9PiB7XG4gICAgLy8gQWx3YXlzIGRlbGF5IGZvY3VzIG1hbmlwdWxhdGlvbiB0byBqdXN0IGJlZm9yZSByZXBhaW50IHRvIHByZXZlbnQgc2Nyb2xsIGp1bXBpbmdcbiAgICByZXR1cm4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIC8vIENvbnRhaW5lciByZWYgbWF5IGJlIHVuZGVmaW5lZCBiZXR3ZWVuIGNvbXBvbmVudCBtb3VudGluZyBhbmQgUG9ydGFsIHJlbmRlcmluZ1xuICAgICAgLy8gYWN0aXZlRWxlbWVudCBtYXkgYmUgdW5kZWZpbmVkIGluIHNvbWUgcmFyZSBjYXNlcyBpbiBJRVxuICAgICAgaWYgKFxuICAgICAgICB0aGlzLnBvcG92ZXJOb2RlID09IG51bGwgfHwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBlcWVxZXEsIG5vLWVxLW51bGxcbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PSBudWxsIHx8IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZXFlcWVxLCBuby1lcS1udWxsXG4gICAgICAgICF0aGlzLnN0YXRlLmlzU2hvd25cbiAgICAgICkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgaXNGb2N1c091dHNpZGVNb2RhbCA9ICF0aGlzLnBvcG92ZXJOb2RlLmNvbnRhaW5zKFxuICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50XG4gICAgICApXG4gICAgICBpZiAoaXNGb2N1c091dHNpZGVNb2RhbCkge1xuICAgICAgICAvLyBFbGVtZW50IG1hcmtlZCBhdXRvZm9jdXMgaGFzIGhpZ2hlciBwcmlvcml0eSB0aGFuIHRoZSBvdGhlciBjbG93bnNcbiAgICAgICAgY29uc3QgYXV0b2ZvY3VzRWxlbWVudCA9IHRoaXMucG9wb3Zlck5vZGUucXVlcnlTZWxlY3RvcignW2F1dG9mb2N1c10nKVxuICAgICAgICBjb25zdCB3cmFwcGVyRWxlbWVudCA9IHRoaXMucG9wb3Zlck5vZGUucXVlcnlTZWxlY3RvcignW3RhYmluZGV4XScpXG4gICAgICAgIGNvbnN0IGJ1dHRvbkVsZW1lbnRzID0gdGhpcy5wb3BvdmVyTm9kZS5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAgICdidXR0b24sIGEsIFtyb2xlPVwibWVudWl0ZW1cIl0sIFtyb2xlPVwibWVudWl0ZW1yYWRpb1wiXSdcbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChhdXRvZm9jdXNFbGVtZW50KSB7XG4gICAgICAgICAgYXV0b2ZvY3VzRWxlbWVudC5mb2N1cygpXG4gICAgICAgIH0gZWxzZSBpZiAod3JhcHBlckVsZW1lbnQpIHtcbiAgICAgICAgICB3cmFwcGVyRWxlbWVudC5mb2N1cygpXG4gICAgICAgIH0gZWxzZSBpZiAoYnV0dG9uRWxlbWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGJ1dHRvbkVsZW1lbnRzWzBdLmZvY3VzKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBicmluZ0ZvY3VzQmFja1RvVGFyZ2V0ID0gKCkgPT4ge1xuICAgIHJldHVybiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLnBvcG92ZXJOb2RlID09IG51bGwgfHwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBlcWVxZXEsIG5vLWVxLW51bGxcbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PSBudWxsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZXFlcWVxLCBuby1lcS1udWxsXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlzRm9jdXNJbnNpZGVNb2RhbCA9IHRoaXMucG9wb3Zlck5vZGUuY29udGFpbnMoXG4gICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRcbiAgICAgIClcblxuICAgICAgLy8gQnJpbmcgYmFjayBmb2N1cyBvbiB0aGUgdGFyZ2V0LlxuICAgICAgaWYgKFxuICAgICAgICB0aGlzLnRhcmdldFJlZiAmJlxuICAgICAgICAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gZG9jdW1lbnQuYm9keSB8fCBpc0ZvY3VzSW5zaWRlTW9kYWwpXG4gICAgICApIHtcbiAgICAgICAgdGhpcy50YXJnZXRSZWYuZm9jdXMoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBvbkJvZHlDbGljayA9IGUgPT4ge1xuICAgIC8vIElnbm9yZSBjbGlja3Mgb24gdGhlIHBvcG92ZXIgb3IgYnV0dG9uXG4gICAgaWYgKHRoaXMudGFyZ2V0UmVmICYmIHRoaXMudGFyZ2V0UmVmLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMucG9wb3Zlck5vZGUgJiYgdGhpcy5wb3BvdmVyTm9kZS5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIE5vdGlmeSBib2R5IGNsaWNrXG4gICAgdGhpcy5wcm9wcy5vbkJvZHlDbGljayhlKVxuXG4gICAgaWYgKHRoaXMucHJvcHMuc2hvdWxkQ2xvc2VPbkV4dGVybmFsQ2xpY2sgPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNsb3NlKClcbiAgfVxuXG4gIG9uRXNjID0gZSA9PiB7XG4gICAgLy8gRXNjIGtleVxuICAgIGlmIChlLmtleUNvZGUgPT09IDI3KSB7XG4gICAgICB0aGlzLmNsb3NlKClcbiAgICB9XG4gIH1cblxuICB0b2dnbGUgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc3RhdGUuaXNTaG93bikge1xuICAgICAgdGhpcy5jbG9zZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3BlbigpXG4gICAgfVxuICB9XG5cbiAgb3BlbiA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5pc1Nob3duKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgaXNTaG93bjogdHJ1ZSB9KVxuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQm9keUNsaWNrLCBmYWxzZSlcbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uRXNjLCBmYWxzZSlcblxuICAgIHRoaXMucHJvcHMub25PcGVuKClcbiAgfVxuXG4gIGNsb3NlID0gKCkgPT4ge1xuICAgIGlmICghdGhpcy5zdGF0ZS5pc1Nob3duKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgaXNTaG93bjogZmFsc2UgfSlcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkJvZHlDbGljaywgZmFsc2UpXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbkVzYywgZmFsc2UpXG5cbiAgICB0aGlzLmJyaW5nRm9jdXNCYWNrVG9UYXJnZXQoKVxuICAgIHRoaXMucHJvcHMub25DbG9zZSgpXG4gIH1cblxuICBoYW5kbGVPcGVuQ29tcGxldGUgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMuYnJpbmdGb2N1c0luc2lkZSkgdGhpcy5icmluZ0ZvY3VzSW5zaWRlKClcbiAgICB0aGlzLnByb3BzLm9uT3BlbkNvbXBsZXRlKClcbiAgfVxuXG4gIGhhbmRsZUNsb3NlQ29tcGxldGUgPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vbkNsb3NlQ29tcGxldGUoKVxuICB9XG5cbiAgaGFuZGxlS2V5RG93biA9IGUgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgIHRoaXMuYnJpbmdGb2N1c0luc2lkZSgpXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlT3BlbkhvdmVyID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLnRyaWdnZXIgPT09ICdob3ZlcicpIHtcbiAgICAgIHRoaXMub3BlbigpXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ2xvc2VIb3ZlciA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy50cmlnZ2VyID09PSAnaG92ZXInKSB7XG4gICAgICB0aGlzLmNsb3NlKClcbiAgICB9XG4gIH1cblxuICByZW5kZXJUYXJnZXQgPSAoeyBnZXRSZWYsIGlzU2hvd24gfSkgPT4ge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBpc1Rvb2x0aXBJbnNpZGUgPSBjaGlsZHJlbiAmJiBjaGlsZHJlbi50eXBlID09PSBUb29sdGlwXG5cbiAgICBjb25zdCBnZXRUYXJnZXRSZWYgPSByZWYgPT4ge1xuICAgICAgdGhpcy50YXJnZXRSZWYgPSByZWZcbiAgICAgIGdldFJlZihyZWYpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2hlbiBhIGZ1bmN0aW9uIGlzIHBhc3NlZCwgeW91IGNhbiBjb250cm9sIHRoZSBQb3BvdmVyIG1hbnVhbGx5LlxuICAgICAqL1xuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBjaGlsZHJlbih7XG4gICAgICAgIHRvZ2dsZTogdGhpcy50b2dnbGUsXG4gICAgICAgIGdldFJlZjogZ2V0VGFyZ2V0UmVmLFxuICAgICAgICBpc1Nob3duXG4gICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHBvcG92ZXJUYXJnZXRQcm9wcyA9IHtcbiAgICAgIG9uQ2xpY2s6IHRoaXMudG9nZ2xlLFxuICAgICAgb25Nb3VzZUVudGVyOiB0aGlzLmhhbmRsZU9wZW5Ib3ZlcixcbiAgICAgIG9uS2V5RG93bjogdGhpcy5oYW5kbGVLZXlEb3duLFxuICAgICAgcm9sZTogJ2J1dHRvbicsXG4gICAgICAnYXJpYS1leHBhbmRlZCc6IGlzU2hvd24sXG4gICAgICAnYXJpYS1oYXNwb3B1cCc6IHRydWVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUb29sdGlwcyBjYW4gYmUgdXNlZCB3aXRoaW4gYSBQb3BvdmVyIChub3QgdGhlIG90aGVyIHdheSBhcm91bmQpXG4gICAgICogSW4gdGhpcyBjYXNlIHRoZSBjaGlsZHJlbiBpcyB0aGUgVG9vbHRpcCBpbnN0ZWFkIG9mIGEgYnV0dG9uLlxuICAgICAqIFBhc3MgdGhlIHByb3BlcnRpZXMgdG8gdGhlIFRvb2x0aXAgYW5kIGxldCB0aGUgVG9vbHRpcFxuICAgICAqIGFkZCB0aGUgcHJvcGVydGllcyB0byB0aGUgdGFyZ2V0LlxuICAgICAqL1xuICAgIGlmIChpc1Rvb2x0aXBJbnNpZGUpIHtcbiAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIHtcbiAgICAgICAgcG9wb3ZlclByb3BzOiB7XG4gICAgICAgICAgZ2V0VGFyZ2V0UmVmLFxuICAgICAgICAgIGlzU2hvd24sXG5cbiAgICAgICAgICAvLyBUaGVzZSBwcm9wZXRpZXMgd2lsbCBiZSBzcHJlYWQgYXMgYHBvcG92ZXJUYXJnZXRQcm9wc2BcbiAgICAgICAgICAvLyBpbiB0aGUgVG9vbHRpcCBjb21wb25lbnQuXG4gICAgICAgICAgLi4ucG9wb3ZlclRhcmdldFByb3BzXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2l0aCBub3JtYWwgdXNhZ2Ugb25seSBwb3BvdmVyIHByb3BzIGVuZCB1cCBvbiB0aGUgdGFyZ2V0LlxuICAgICAqL1xuICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIHtcbiAgICAgIGlubmVyUmVmOiBnZXRUYXJnZXRSZWYsXG4gICAgICAuLi5wb3BvdmVyVGFyZ2V0UHJvcHNcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGlzU2hvd24sXG4gICAgICBjb250ZW50LFxuICAgICAgZGlzcGxheSxcbiAgICAgIG1pbldpZHRoLFxuICAgICAgcG9zaXRpb24sXG4gICAgICBtaW5IZWlnaHQsXG4gICAgICBzdGF0ZWxlc3NQcm9wcyA9IHt9LFxuICAgICAgYW5pbWF0aW9uRHVyYXRpb24sXG4gICAgICBvbkNsb3NlQ29tcGxldGVcbiAgICB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgaXNTaG93bjogc3RhdGVJc1Nob3duIH0gPSB0aGlzLnN0YXRlXG5cbiAgICAvLyBJZiBgaXNTaG93bmAgaXMgYSBib29sZWFuLCBwb3BvdmVyIGlzIGNvbnRyb2xsZWQgbWFudWFsbHksIG5vdCB2aWEgbW91c2UgZXZlbnRzXG4gICAgY29uc3Qgc2hvd24gPSB0eXBlb2YgaXNTaG93biA9PT0gJ2Jvb2xlYW4nID8gaXNTaG93biA6IHN0YXRlSXNTaG93blxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQb3NpdGlvbmVyXG4gICAgICAgIHRhcmdldD17KHsgZ2V0UmVmLCBpc1Nob3duLCB0YXJnZXRXaWR0aCB9KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyVGFyZ2V0KHsgZ2V0UmVmLCBpc1Nob3duLCB0YXJnZXRXaWR0aCB9KVxuICAgICAgICB9fVxuICAgICAgICBpc1Nob3duPXtzaG93bn1cbiAgICAgICAgcG9zaXRpb249e3Bvc2l0aW9ufVxuICAgICAgICBhbmltYXRpb25EdXJhdGlvbj17YW5pbWF0aW9uRHVyYXRpb259XG4gICAgICAgIG9uT3BlbkNvbXBsZXRlPXt0aGlzLmhhbmRsZU9wZW5Db21wbGV0ZX1cbiAgICAgICAgb25DbG9zZUNvbXBsZXRlPXtvbkNsb3NlQ29tcGxldGV9XG4gICAgICA+XG4gICAgICAgIHsoeyBjc3MsIHN0eWxlLCBzdGF0ZSwgZ2V0UmVmIH0pID0+IChcbiAgICAgICAgICA8UG9wb3ZlclN0YXRlbGVzc1xuICAgICAgICAgICAgaW5uZXJSZWY9e3JlZiA9PiB7XG4gICAgICAgICAgICAgIHRoaXMucG9wb3Zlck5vZGUgPSByZWZcbiAgICAgICAgICAgICAgZ2V0UmVmKHJlZilcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBkYXRhLXN0YXRlPXtzdGF0ZX1cbiAgICAgICAgICAgIGRpc3BsYXk9e2Rpc3BsYXl9XG4gICAgICAgICAgICBtaW5XaWR0aD17bWluV2lkdGh9XG4gICAgICAgICAgICBtaW5IZWlnaHQ9e21pbkhlaWdodH1cbiAgICAgICAgICAgIHsuLi5zdGF0ZWxlc3NQcm9wc31cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y3goXG4gICAgICAgICAgICAgIHN0YXRlbGVzc1Byb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgY3NzID8gZ2xhbW9yQ3NzKGNzcykudG9TdHJpbmcoKSA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHN0eWxlPXtcbiAgICAgICAgICAgICAgc3RhdGVsZXNzUHJvcHMgJiYgc3RhdGVsZXNzUHJvcHMuc3R5bGVcbiAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgLi4uc3R5bGUsXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlbGVzc1Byb3BzLnN0eWxlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgOiBzdHlsZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLmhhbmRsZUNsb3NlSG92ZXJ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3R5cGVvZiBjb250ZW50ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgID8gY29udGVudCh7IGNsb3NlOiB0aGlzLmNsb3NlIH0pXG4gICAgICAgICAgICAgIDogY29udGVudH1cbiAgICAgICAgICA8L1BvcG92ZXJTdGF0ZWxlc3M+XG4gICAgICAgICl9XG4gICAgICA8L1Bvc2l0aW9uZXI+XG4gICAgKVxuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsTzs7Ozs7RUFrSG5CLGlCQUFZQyxLQUFaLEVBQW1CO0lBQUE7O0lBQUE7SUFDakIsMEJBQU1BLEtBQU47SUFEaUIscUdBZ0JBLFlBQU07TUFDdkI7TUFDQSxPQUFPQyxxQkFBcUIsQ0FBQyxZQUFNO1FBQ2pDO1FBQ0E7UUFDQSxJQUNFLE1BQUtDLFdBQUwsSUFBb0IsSUFBcEIsSUFBNEI7UUFDNUJDLFFBQVEsQ0FBQ0MsYUFBVCxJQUEwQixJQUQxQixJQUNrQztRQUNsQyxDQUFDLE1BQUtDLEtBQUwsQ0FBV0MsT0FIZCxFQUlFO1VBQ0E7UUFDRDs7UUFFRCxJQUFNQyxtQkFBbUIsR0FBRyxDQUFDLE1BQUtMLFdBQUwsQ0FBaUJNLFFBQWpCLENBQzNCTCxRQUFRLENBQUNDLGFBRGtCLENBQTdCOztRQUdB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