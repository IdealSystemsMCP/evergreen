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

var _glamor = require("glamor");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _layers = require("../../layers");

var _typography = require("../../typography");

var _overlay = require("../../overlay");

var _buttons = require("../../buttons");

var _theme = require("../../theme");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var animationEasing = {
  deceleration: "cubic-bezier(0.0, 0.0, 0.2, 1)",
  acceleration: "cubic-bezier(0.4, 0.0, 1, 1)"
};
var ANIMATION_DURATION = 200;

var openAnimation = _glamor.css.keyframes('openAnimation', {
  from: {
    transform: 'scale(0.8)',
    opacity: 0
  },
  to: {
    transform: 'scale(1)',
    opacity: 1
  }
});

var closeAnimation = _glamor.css.keyframes('closeAnimation', {
  from: {
    transform: 'scale(1)',
    opacity: 1
  },
  to: {
    transform: 'scale(0.8)',
    opacity: 0
  }
});

var animationStyles = {
  '&[data-state="entering"], &[data-state="entered"]': {
    animation: "".concat(openAnimation, " ").concat(ANIMATION_DURATION, "ms ").concat(animationEasing.deceleration, " both")
  },
  '&[data-state="exiting"]': {
    animation: "".concat(closeAnimation, " ").concat(ANIMATION_DURATION, "ms ").concat(animationEasing.acceleration, " both")
  }
};

var Dialog = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Dialog, _React$Component);

  var _super = _createSuper(Dialog);

  function Dialog() {
    var _this;

    (0, _classCallCheck2["default"])(this, Dialog);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderChildren", function (close) {
      var children = _this.props.children;

      if (typeof children === 'function') {
        return children({
          close: close
        });
      }

      if (typeof children === 'string') {
        return /*#__PURE__*/_react["default"].createElement(_typography.Paragraph, null, children);
      }

      return children;
    });
    return _this;
  }

  (0, _createClass2["default"])(Dialog, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          title = _this$props.title,
          width = _this$props.width,
          intent = _this$props.intent,
          isShown = _this$props.isShown,
          topOffset = _this$props.topOffset,
          sideOffset = _this$props.sideOffset,
          hasHeader = _this$props.hasHeader,
          hasClose = _this$props.hasClose,
          hasFooter = _this$props.hasFooter,
          hasCancel = _this$props.hasCancel,
          onCloseComplete = _this$props.onCloseComplete,
          onOpenComplete = _this$props.onOpenComplete,
          onCancel = _this$props.onCancel,
          onConfirm = _this$props.onConfirm,
          confirmLabel = _this$props.confirmLabel,
          isConfirmLoading = _this$props.isConfirmLoading,
          isConfirmDisabled = _this$props.isConfirmDisabled,
          cancelLabel = _this$props.cancelLabel,
          shouldCloseOnOverlayClick = _this$props.shouldCloseOnOverlayClick,
          shouldCloseOnEscapePress = _this$props.shouldCloseOnEscapePress,
          _this$props$container = _this$props.containerProps,
          containerProps = _this$props$container === void 0 ? {} : _this$props$container,
          contentContainerProps = _this$props.contentContainerProps,
          minHeightContent = _this$props.minHeightContent,
          preventBodyScrolling = _this$props.preventBodyScrolling,
          overlayProps = _this$props.overlayProps;
      var sideOffsetWithUnit = Number.isInteger(sideOffset) ? "".concat(sideOffset, "px") : sideOffset;
      var maxWidth = "calc(100% - ".concat(sideOffsetWithUnit, " * 2)");
      var topOffsetWithUnit = Number.isInteger(topOffset) ? "".concat(topOffset, "px") : topOffset;
      var maxHeight = "calc(100% - ".concat(topOffsetWithUnit, " * 2)");
      return /*#__PURE__*/_react["default"].createElement(_overlay.Overlay, {
        isShown: isShown,
        shouldCloseOnClick: shouldCloseOnOverlayClick,
        shouldCloseOnEscapePress: shouldCloseOnEscapePress,
        onExited: onCloseComplete,
        onEntered: onOpenComplete,
        containerProps: _objectSpread({
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center'
        }, overlayProps),
        preventBodyScrolling: preventBodyScrolling
      }, function (_ref) {
        var state = _ref.state,
            close = _ref.close;
        return /*#__PURE__*/_react["default"].createElement(_layers.Pane, (0, _extends2["default"])({
          role: "dialog",
          backgroundColor: "white",
          elevation: 4,
          borderRadius: 8,
          width: width,
          maxWidth: maxWidth,
          maxHeight: maxHeight,
          marginX: sideOffsetWithUnit,
          marginY: topOffsetWithUnit,
          display: "flex",
          flexDirection: "column",
          css: animationStyles,
          "data-state": state
        }, containerProps), hasHeader && /*#__PURE__*/_react["default"].createElement(_layers.Pane, {
          padding: 16,
          flexShrink: 0,
          borderBottom: "muted",
          display: "flex",
          alignItems: "center"
        }, /*#__PURE__*/_react["default"].createElement(_typography.Heading, {
          is: "h4",
          size: 600,
          flex: "1"
        }, title), hasClose && /*#__PURE__*/_react["default"].createElement(_buttons.IconButton, {
          appearance: "minimal",
          icon: "cross",
          onClick: function onClick() {
            return onCancel(close);
          }
        })), /*#__PURE__*/_react["default"].createElement(_layers.Pane, (0, _extends2["default"])({
          "data-state": state,
          display: "flex",
          overflow: "auto",
          padding: 16,
          flexDirection: "column",
          minHeight: minHeightContent
        }, contentContainerProps), /*#__PURE__*/_react["default"].createElement(_layers.Pane, null, _this2.renderChildren(close))), hasFooter && /*#__PURE__*/_react["default"].createElement(_layers.Pane, {
          borderTop: "muted",
          clearfix: true
        }, /*#__PURE__*/_react["default"].createElement(_layers.Pane, {
          padding: 16,
          "float": "right"
        }, hasCancel && /*#__PURE__*/_react["default"].createElement(_buttons.Button, {
          tabIndex: 0,
          onClick: function onClick() {
            return onCancel(close);
          }
        }, cancelLabel), /*#__PURE__*/_react["default"].createElement(_buttons.Button, {
          tabIndex: 0,
          marginLeft: 8,
          appearance: "primary",
          isLoading: isConfirmLoading,
          disabled: isConfirmDisabled,
          onClick: function onClick() {
            return onConfirm(close);
          },
          intent: intent
        }, confirmLabel))));
      });
    }
  }]);
  return Dialog;
}(_react["default"].Component);

Dialog.displayName = "Dialog";
(0, _defineProperty2["default"])(Dialog, "propTypes", {
  /**
   * Children can be a string, node or a function accepting `({ close })`.
   * When passing a string, <Paragraph /> is used to wrap the string.
   */
  children: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].func]).isRequired,

  /**
   * The intent of the Dialog. Used for the button.
   */
  intent: _propTypes["default"].oneOf(['none', 'success', 'warning', 'danger']).isRequired,

  /**
   * When true, the dialog is shown.
   */
  isShown: _propTypes["default"].bool,

  /**
   * Title of the Dialog. Titles should use Title Case.
   */
  title: _propTypes["default"].node,

  /**
   * When true, the header with the title and close icon button is shown.
   */
  hasHeader: _propTypes["default"].bool,

  /**
   * When true, the footer with the cancel and confirm button is shown.
   */
  hasFooter: _propTypes["default"].bool,

  /**
   * When true, the cancel button is shown.
   */
  hasCancel: _propTypes["default"].bool,

  /**
   * When true, the close button is shown
   */
  hasClose: _propTypes["default"].bool,

  /**
   * Function that will be called when the exit transition is complete.
   */
  onCloseComplete: _propTypes["default"].func,

  /**
   * Function that will be called when the enter transition is complete.
   */
  onOpenComplete: _propTypes["default"].func,

  /**
   * Function that will be called when the confirm button is clicked.
   * This does not close the Dialog. A close function will be passed
   * as a paramater you can use to close the dialog.
   *
   * `onConfirm={(close) => close()}`
   */
  onConfirm: _propTypes["default"].func,

  /**
   * Label of the confirm button.
   */
  confirmLabel: _propTypes["default"].string,

  /**
   * When true, the confirm button is set to loading.
   */
  isConfirmLoading: _propTypes["default"].bool,

  /**
   * When true, the confirm button is set to disabled.
   */
  isConfirmDisabled: _propTypes["default"].bool,

  /**
   * Function that will be called when the cancel button is clicked.
   * This closes the Dialog by default.
   *
   * `onCancel={(close) => close()}`
   */
  onCancel: _propTypes["default"].func,

  /**
   * Label of the cancel button.
   */
  cancelLabel: _propTypes["default"].string,

  /**
   * Boolean indicating if clicking the overlay should close the overlay.
   */
  shouldCloseOnOverlayClick: _propTypes["default"].bool,

  /**
   * Boolean indicating if pressing the esc key should close the overlay.
   */
  shouldCloseOnEscapePress: _propTypes["default"].bool,

  /**
   * Width of the Dialog.
   */
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),

  /**
   * The space above the dialog.
   * This offset is also used at the bottom when there is not enough vertical
   * space available on screen — and the dialog scrolls internally.
   */
  topOffset: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),

  /**
   * The space on the left/right sides of the dialog when there isn't enough
   * horizontal space available on screen.
   */
  sideOffset: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),

  /**
   * The min height of the body content.
   * Makes it less weird when only showing little content.
   */
  minHeightContent: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),

  /**
   * Props that are passed to the dialog container.
   */
  containerProps: _propTypes["default"].object,

  /**
   * Props that are passed to the content container.
   */
  contentContainerProps: _propTypes["default"].object,

  /**
   * Whether or not to prevent scrolling in the outer body
   */
  preventBodyScrolling: _propTypes["default"].bool,

  /**
   * Props that are passed to the Overlay component.
   */
  overlayProps: _propTypes["default"].object
});
(0, _defineProperty2["default"])(Dialog, "defaultProps", {
  isShown: false,
  hasHeader: true,
  hasClose: true,
  hasFooter: true,
  hasCancel: true,
  intent: 'none',
  width: 560,
  topOffset: '12vmin',
  sideOffset: '16px',
  minHeightContent: 80,
  confirmLabel: 'Confirm',
  isConfirmLoading: false,
  isConfirmDisabled: false,
  cancelLabel: 'Cancel',
  shouldCloseOnOverlayClick: true,
  shouldCloseOnEscapePress: true,
  onCancel: function onCancel(close) {
    return close();
  },
  onConfirm: function onConfirm(close) {
    return close();
  },
  preventBodyScrolling: false,
  overlayProps: {}
});

var _default = (0, _theme.withTheme)(Dialog);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJhbmltYXRpb25FYXNpbmciLCJkZWNlbGVyYXRpb24iLCJhY2NlbGVyYXRpb24iLCJBTklNQVRJT05fRFVSQVRJT04iLCJvcGVuQW5pbWF0aW9uIiwiY3NzIiwia2V5ZnJhbWVzIiwiZnJvbSIsInRyYW5zZm9ybSIsIm9wYWNpdHkiLCJ0byIsImNsb3NlQW5pbWF0aW9uIiwiYW5pbWF0aW9uU3R5bGVzIiwiYW5pbWF0aW9uIiwiRGlhbG9nIiwiY2xvc2UiLCJjaGlsZHJlbiIsInByb3BzIiwidGl0bGUiLCJ3aWR0aCIsImludGVudCIsImlzU2hvd24iLCJ0b3BPZmZzZXQiLCJzaWRlT2Zmc2V0IiwiaGFzSGVhZGVyIiwiaGFzQ2xvc2UiLCJoYXNGb290ZXIiLCJoYXNDYW5jZWwiLCJvbkNsb3NlQ29tcGxldGUiLCJvbk9wZW5Db21wbGV0ZSIsIm9uQ2FuY2VsIiwib25Db25maXJtIiwiY29uZmlybUxhYmVsIiwiaXNDb25maXJtTG9hZGluZyIsImlzQ29uZmlybURpc2FibGVkIiwiY2FuY2VsTGFiZWwiLCJzaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrIiwic2hvdWxkQ2xvc2VPbkVzY2FwZVByZXNzIiwiY29udGFpbmVyUHJvcHMiLCJjb250ZW50Q29udGFpbmVyUHJvcHMiLCJtaW5IZWlnaHRDb250ZW50IiwicHJldmVudEJvZHlTY3JvbGxpbmciLCJvdmVybGF5UHJvcHMiLCJzaWRlT2Zmc2V0V2l0aFVuaXQiLCJOdW1iZXIiLCJpc0ludGVnZXIiLCJtYXhXaWR0aCIsInRvcE9mZnNldFdpdGhVbml0IiwibWF4SGVpZ2h0IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInN0YXRlIiwicmVuZGVyQ2hpbGRyZW4iLCJSZWFjdCIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsIm9uZU9mVHlwZSIsIm5vZGUiLCJmdW5jIiwiaXNSZXF1aXJlZCIsIm9uZU9mIiwiYm9vbCIsInN0cmluZyIsIm51bWJlciIsIm9iamVjdCIsIndpdGhUaGVtZSJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaWFsb2cvc3JjL0RpYWxvZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tICdnbGFtb3InXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBQYW5lIH0gZnJvbSAnLi4vLi4vbGF5ZXJzJ1xuaW1wb3J0IHsgUGFyYWdyYXBoLCBIZWFkaW5nIH0gZnJvbSAnLi4vLi4vdHlwb2dyYXBoeSdcbmltcG9ydCB7IE92ZXJsYXkgfSBmcm9tICcuLi8uLi9vdmVybGF5J1xuaW1wb3J0IHsgQnV0dG9uLCBJY29uQnV0dG9uIH0gZnJvbSAnLi4vLi4vYnV0dG9ucydcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuXG5jb25zdCBhbmltYXRpb25FYXNpbmcgPSB7XG4gIGRlY2VsZXJhdGlvbjogYGN1YmljLWJlemllcigwLjAsIDAuMCwgMC4yLCAxKWAsXG4gIGFjY2VsZXJhdGlvbjogYGN1YmljLWJlemllcigwLjQsIDAuMCwgMSwgMSlgXG59XG5cbmNvbnN0IEFOSU1BVElPTl9EVVJBVElPTiA9IDIwMFxuXG5jb25zdCBvcGVuQW5pbWF0aW9uID0gY3NzLmtleWZyYW1lcygnb3BlbkFuaW1hdGlvbicsIHtcbiAgZnJvbToge1xuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDAuOCknLFxuICAgIG9wYWNpdHk6IDBcbiAgfSxcbiAgdG86IHtcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKScsXG4gICAgb3BhY2l0eTogMVxuICB9XG59KVxuXG5jb25zdCBjbG9zZUFuaW1hdGlvbiA9IGNzcy5rZXlmcmFtZXMoJ2Nsb3NlQW5pbWF0aW9uJywge1xuICBmcm9tOiB7XG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknLFxuICAgIG9wYWNpdHk6IDFcbiAgfSxcbiAgdG86IHtcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgwLjgpJyxcbiAgICBvcGFjaXR5OiAwXG4gIH1cbn0pXG5cbmNvbnN0IGFuaW1hdGlvblN0eWxlcyA9IHtcbiAgJyZbZGF0YS1zdGF0ZT1cImVudGVyaW5nXCJdLCAmW2RhdGEtc3RhdGU9XCJlbnRlcmVkXCJdJzoge1xuICAgIGFuaW1hdGlvbjogYCR7b3BlbkFuaW1hdGlvbn0gJHtBTklNQVRJT05fRFVSQVRJT059bXMgJHtcbiAgICAgIGFuaW1hdGlvbkVhc2luZy5kZWNlbGVyYXRpb25cbiAgICB9IGJvdGhgXG4gIH0sXG4gICcmW2RhdGEtc3RhdGU9XCJleGl0aW5nXCJdJzoge1xuICAgIGFuaW1hdGlvbjogYCR7Y2xvc2VBbmltYXRpb259ICR7QU5JTUFUSU9OX0RVUkFUSU9OfW1zICR7XG4gICAgICBhbmltYXRpb25FYXNpbmcuYWNjZWxlcmF0aW9uXG4gICAgfSBib3RoYFxuICB9XG59XG5cbmNsYXNzIERpYWxvZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ2hpbGRyZW4gY2FuIGJlIGEgc3RyaW5nLCBub2RlIG9yIGEgZnVuY3Rpb24gYWNjZXB0aW5nIGAoeyBjbG9zZSB9KWAuXG4gICAgICogV2hlbiBwYXNzaW5nIGEgc3RyaW5nLCA8UGFyYWdyYXBoIC8+IGlzIHVzZWQgdG8gd3JhcCB0aGUgc3RyaW5nLlxuICAgICAqL1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubm9kZSwgUHJvcFR5cGVzLmZ1bmNdKS5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGludGVudCBvZiB0aGUgRGlhbG9nLiBVc2VkIGZvciB0aGUgYnV0dG9uLlxuICAgICAqL1xuICAgIGludGVudDogUHJvcFR5cGVzLm9uZU9mKFsnbm9uZScsICdzdWNjZXNzJywgJ3dhcm5pbmcnLCAnZGFuZ2VyJ10pXG4gICAgICAuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIGRpYWxvZyBpcyBzaG93bi5cbiAgICAgKi9cbiAgICBpc1Nob3duOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFRpdGxlIG9mIHRoZSBEaWFsb2cuIFRpdGxlcyBzaG91bGQgdXNlIFRpdGxlIENhc2UuXG4gICAgICovXG4gICAgdGl0bGU6IFByb3BUeXBlcy5ub2RlLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgaGVhZGVyIHdpdGggdGhlIHRpdGxlIGFuZCBjbG9zZSBpY29uIGJ1dHRvbiBpcyBzaG93bi5cbiAgICAgKi9cbiAgICBoYXNIZWFkZXI6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgZm9vdGVyIHdpdGggdGhlIGNhbmNlbCBhbmQgY29uZmlybSBidXR0b24gaXMgc2hvd24uXG4gICAgICovXG4gICAgaGFzRm9vdGVyOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIGNhbmNlbCBidXR0b24gaXMgc2hvd24uXG4gICAgICovXG4gICAgaGFzQ2FuY2VsOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIGNsb3NlIGJ1dHRvbiBpcyBzaG93blxuICAgICAqL1xuICAgIGhhc0Nsb3NlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgZXhpdCB0cmFuc2l0aW9uIGlzIGNvbXBsZXRlLlxuICAgICAqL1xuICAgIG9uQ2xvc2VDb21wbGV0ZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIGVudGVyIHRyYW5zaXRpb24gaXMgY29tcGxldGUuXG4gICAgICovXG4gICAgb25PcGVuQ29tcGxldGU6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZSBjb25maXJtIGJ1dHRvbiBpcyBjbGlja2VkLlxuICAgICAqIFRoaXMgZG9lcyBub3QgY2xvc2UgdGhlIERpYWxvZy4gQSBjbG9zZSBmdW5jdGlvbiB3aWxsIGJlIHBhc3NlZFxuICAgICAqIGFzIGEgcGFyYW1hdGVyIHlvdSBjYW4gdXNlIHRvIGNsb3NlIHRoZSBkaWFsb2cuXG4gICAgICpcbiAgICAgKiBgb25Db25maXJtPXsoY2xvc2UpID0+IGNsb3NlKCl9YFxuICAgICAqL1xuICAgIG9uQ29uZmlybTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBMYWJlbCBvZiB0aGUgY29uZmlybSBidXR0b24uXG4gICAgICovXG4gICAgY29uZmlybUxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgY29uZmlybSBidXR0b24gaXMgc2V0IHRvIGxvYWRpbmcuXG4gICAgICovXG4gICAgaXNDb25maXJtTG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSBjb25maXJtIGJ1dHRvbiBpcyBzZXQgdG8gZGlzYWJsZWQuXG4gICAgICovXG4gICAgaXNDb25maXJtRGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZSBjYW5jZWwgYnV0dG9uIGlzIGNsaWNrZWQuXG4gICAgICogVGhpcyBjbG9zZXMgdGhlIERpYWxvZyBieSBkZWZhdWx0LlxuICAgICAqXG4gICAgICogYG9uQ2FuY2VsPXsoY2xvc2UpID0+IGNsb3NlKCl9YFxuICAgICAqL1xuICAgIG9uQ2FuY2VsOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIExhYmVsIG9mIHRoZSBjYW5jZWwgYnV0dG9uLlxuICAgICAqL1xuICAgIGNhbmNlbExhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogQm9vbGVhbiBpbmRpY2F0aW5nIGlmIGNsaWNraW5nIHRoZSBvdmVybGF5IHNob3VsZCBjbG9zZSB0aGUgb3ZlcmxheS5cbiAgICAgKi9cbiAgICBzaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIEJvb2xlYW4gaW5kaWNhdGluZyBpZiBwcmVzc2luZyB0aGUgZXNjIGtleSBzaG91bGQgY2xvc2UgdGhlIG92ZXJsYXkuXG4gICAgICovXG4gICAgc2hvdWxkQ2xvc2VPbkVzY2FwZVByZXNzOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFdpZHRoIG9mIHRoZSBEaWFsb2cuXG4gICAgICovXG4gICAgd2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBzcGFjZSBhYm92ZSB0aGUgZGlhbG9nLlxuICAgICAqIFRoaXMgb2Zmc2V0IGlzIGFsc28gdXNlZCBhdCB0aGUgYm90dG9tIHdoZW4gdGhlcmUgaXMgbm90IGVub3VnaCB2ZXJ0aWNhbFxuICAgICAqIHNwYWNlIGF2YWlsYWJsZSBvbiBzY3JlZW4g4oCUIGFuZCB0aGUgZGlhbG9nIHNjcm9sbHMgaW50ZXJuYWxseS5cbiAgICAgKi9cbiAgICB0b3BPZmZzZXQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBzcGFjZSBvbiB0aGUgbGVmdC9yaWdodCBzaWRlcyBvZiB0aGUgZGlhbG9nIHdoZW4gdGhlcmUgaXNuJ3QgZW5vdWdoXG4gICAgICogaG9yaXpvbnRhbCBzcGFjZSBhdmFpbGFibGUgb24gc2NyZWVuLlxuICAgICAqL1xuICAgIHNpZGVPZmZzZXQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBtaW4gaGVpZ2h0IG9mIHRoZSBib2R5IGNvbnRlbnQuXG4gICAgICogTWFrZXMgaXQgbGVzcyB3ZWlyZCB3aGVuIG9ubHkgc2hvd2luZyBsaXR0bGUgY29udGVudC5cbiAgICAgKi9cbiAgICBtaW5IZWlnaHRDb250ZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG5cbiAgICAvKipcbiAgICAgKiBQcm9wcyB0aGF0IGFyZSBwYXNzZWQgdG8gdGhlIGRpYWxvZyBjb250YWluZXIuXG4gICAgICovXG4gICAgY29udGFpbmVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgICAvKipcbiAgICAgKiBQcm9wcyB0aGF0IGFyZSBwYXNzZWQgdG8gdGhlIGNvbnRlbnQgY29udGFpbmVyLlxuICAgICAqL1xuICAgIGNvbnRlbnRDb250YWluZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgb3Igbm90IHRvIHByZXZlbnQgc2Nyb2xsaW5nIGluIHRoZSBvdXRlciBib2R5XG4gICAgICovXG4gICAgcHJldmVudEJvZHlTY3JvbGxpbmc6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogUHJvcHMgdGhhdCBhcmUgcGFzc2VkIHRvIHRoZSBPdmVybGF5IGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICBvdmVybGF5UHJvcHM6IFByb3BUeXBlcy5vYmplY3RcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgaXNTaG93bjogZmFsc2UsXG4gICAgaGFzSGVhZGVyOiB0cnVlLFxuICAgIGhhc0Nsb3NlOiB0cnVlLFxuICAgIGhhc0Zvb3RlcjogdHJ1ZSxcbiAgICBoYXNDYW5jZWw6IHRydWUsXG4gICAgaW50ZW50OiAnbm9uZScsXG4gICAgd2lkdGg6IDU2MCxcbiAgICB0b3BPZmZzZXQ6ICcxMnZtaW4nLFxuICAgIHNpZGVPZmZzZXQ6ICcxNnB4JyxcbiAgICBtaW5IZWlnaHRDb250ZW50OiA4MCxcbiAgICBjb25maXJtTGFiZWw6ICdDb25maXJtJyxcbiAgICBpc0NvbmZpcm1Mb2FkaW5nOiBmYWxzZSxcbiAgICBpc0NvbmZpcm1EaXNhYmxlZDogZmFsc2UsXG4gICAgY2FuY2VsTGFiZWw6ICdDYW5jZWwnLFxuICAgIHNob3VsZENsb3NlT25PdmVybGF5Q2xpY2s6IHRydWUsXG4gICAgc2hvdWxkQ2xvc2VPbkVzY2FwZVByZXNzOiB0cnVlLFxuICAgIG9uQ2FuY2VsOiBjbG9zZSA9PiBjbG9zZSgpLFxuICAgIG9uQ29uZmlybTogY2xvc2UgPT4gY2xvc2UoKSxcbiAgICBwcmV2ZW50Qm9keVNjcm9sbGluZzogZmFsc2UsXG4gICAgb3ZlcmxheVByb3BzOiB7fVxuICB9XG5cbiAgcmVuZGVyQ2hpbGRyZW4gPSBjbG9zZSA9PiB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xuXG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGNoaWxkcmVuKHsgY2xvc2UgfSlcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIDxQYXJhZ3JhcGg+e2NoaWxkcmVufTwvUGFyYWdyYXBoPlxuICAgIH1cblxuICAgIHJldHVybiBjaGlsZHJlblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRpdGxlLFxuICAgICAgd2lkdGgsXG4gICAgICBpbnRlbnQsXG4gICAgICBpc1Nob3duLFxuICAgICAgdG9wT2Zmc2V0LFxuICAgICAgc2lkZU9mZnNldCxcbiAgICAgIGhhc0hlYWRlcixcbiAgICAgIGhhc0Nsb3NlLFxuICAgICAgaGFzRm9vdGVyLFxuICAgICAgaGFzQ2FuY2VsLFxuICAgICAgb25DbG9zZUNvbXBsZXRlLFxuICAgICAgb25PcGVuQ29tcGxldGUsXG4gICAgICBvbkNhbmNlbCxcbiAgICAgIG9uQ29uZmlybSxcbiAgICAgIGNvbmZpcm1MYWJlbCxcbiAgICAgIGlzQ29uZmlybUxvYWRpbmcsXG4gICAgICBpc0NvbmZpcm1EaXNhYmxlZCxcbiAgICAgIGNhbmNlbExhYmVsLFxuICAgICAgc2hvdWxkQ2xvc2VPbk92ZXJsYXlDbGljayxcbiAgICAgIHNob3VsZENsb3NlT25Fc2NhcGVQcmVzcyxcbiAgICAgIGNvbnRhaW5lclByb3BzID0ge30sXG4gICAgICBjb250ZW50Q29udGFpbmVyUHJvcHMsXG4gICAgICBtaW5IZWlnaHRDb250ZW50LFxuICAgICAgcHJldmVudEJvZHlTY3JvbGxpbmcsXG4gICAgICBvdmVybGF5UHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3Qgc2lkZU9mZnNldFdpdGhVbml0ID0gTnVtYmVyLmlzSW50ZWdlcihzaWRlT2Zmc2V0KVxuICAgICAgPyBgJHtzaWRlT2Zmc2V0fXB4YFxuICAgICAgOiBzaWRlT2Zmc2V0XG4gICAgY29uc3QgbWF4V2lkdGggPSBgY2FsYygxMDAlIC0gJHtzaWRlT2Zmc2V0V2l0aFVuaXR9ICogMilgXG5cbiAgICBjb25zdCB0b3BPZmZzZXRXaXRoVW5pdCA9IE51bWJlci5pc0ludGVnZXIodG9wT2Zmc2V0KVxuICAgICAgPyBgJHt0b3BPZmZzZXR9cHhgXG4gICAgICA6IHRvcE9mZnNldFxuICAgIGNvbnN0IG1heEhlaWdodCA9IGBjYWxjKDEwMCUgLSAke3RvcE9mZnNldFdpdGhVbml0fSAqIDIpYFxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxPdmVybGF5XG4gICAgICAgIGlzU2hvd249e2lzU2hvd259XG4gICAgICAgIHNob3VsZENsb3NlT25DbGljaz17c2hvdWxkQ2xvc2VPbk92ZXJsYXlDbGlja31cbiAgICAgICAgc2hvdWxkQ2xvc2VPbkVzY2FwZVByZXNzPXtzaG91bGRDbG9zZU9uRXNjYXBlUHJlc3N9XG4gICAgICAgIG9uRXhpdGVkPXtvbkNsb3NlQ29tcGxldGV9XG4gICAgICAgIG9uRW50ZXJlZD17b25PcGVuQ29tcGxldGV9XG4gICAgICAgIGNvbnRhaW5lclByb3BzPXt7XG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgLi4ub3ZlcmxheVByb3BzXG4gICAgICAgIH19XG4gICAgICAgIHByZXZlbnRCb2R5U2Nyb2xsaW5nPXtwcmV2ZW50Qm9keVNjcm9sbGluZ31cbiAgICAgID5cbiAgICAgICAgeyh7IHN0YXRlLCBjbG9zZSB9KSA9PiAoXG4gICAgICAgICAgPFBhbmVcbiAgICAgICAgICAgIHJvbGU9XCJkaWFsb2dcIlxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgZWxldmF0aW9uPXs0fVxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzPXs4fVxuICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgICAgbWF4V2lkdGg9e21heFdpZHRofVxuICAgICAgICAgICAgbWF4SGVpZ2h0PXttYXhIZWlnaHR9XG4gICAgICAgICAgICBtYXJnaW5YPXtzaWRlT2Zmc2V0V2l0aFVuaXR9XG4gICAgICAgICAgICBtYXJnaW5ZPXt0b3BPZmZzZXRXaXRoVW5pdH1cbiAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgICAgY3NzPXthbmltYXRpb25TdHlsZXN9XG4gICAgICAgICAgICBkYXRhLXN0YXRlPXtzdGF0ZX1cbiAgICAgICAgICAgIHsuLi5jb250YWluZXJQcm9wc31cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aGFzSGVhZGVyICYmIChcbiAgICAgICAgICAgICAgPFBhbmVcbiAgICAgICAgICAgICAgICBwYWRkaW5nPXsxNn1cbiAgICAgICAgICAgICAgICBmbGV4U2hyaW5rPXswfVxuICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbT1cIm11dGVkXCJcbiAgICAgICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8SGVhZGluZyBpcz1cImg0XCIgc2l6ZT17NjAwfSBmbGV4PVwiMVwiPlxuICAgICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgICAgICB7aGFzQ2xvc2UgJiYgKFxuICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICAgICAgYXBwZWFyYW5jZT1cIm1pbmltYWxcIlxuICAgICAgICAgICAgICAgICAgICBpY29uPVwiY3Jvc3NcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNhbmNlbChjbG9zZSl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIDxQYW5lXG4gICAgICAgICAgICAgIGRhdGEtc3RhdGU9e3N0YXRlfVxuICAgICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgICAgIG92ZXJmbG93PVwiYXV0b1wiXG4gICAgICAgICAgICAgIHBhZGRpbmc9ezE2fVxuICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgbWluSGVpZ2h0PXttaW5IZWlnaHRDb250ZW50fVxuICAgICAgICAgICAgICB7Li4uY29udGVudENvbnRhaW5lclByb3BzfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8UGFuZT57dGhpcy5yZW5kZXJDaGlsZHJlbihjbG9zZSl9PC9QYW5lPlxuICAgICAgICAgICAgPC9QYW5lPlxuXG4gICAgICAgICAgICB7aGFzRm9vdGVyICYmIChcbiAgICAgICAgICAgICAgPFBhbmUgYm9yZGVyVG9wPVwibXV0ZWRcIiBjbGVhcmZpeD5cbiAgICAgICAgICAgICAgICA8UGFuZSBwYWRkaW5nPXsxNn0gZmxvYXQ9XCJyaWdodFwiPlxuICAgICAgICAgICAgICAgICAgey8qIENhbmNlbCBzaG91bGQgYmUgZmlyc3QgdG8gbWFrZSBzdXJlIGZvY3VzIGdldHMgb24gaXQgZmlyc3QuICovfVxuICAgICAgICAgICAgICAgICAge2hhc0NhbmNlbCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGFiSW5kZXg9ezB9IG9uQ2xpY2s9eygpID0+IG9uQ2FuY2VsKGNsb3NlKX0+XG4gICAgICAgICAgICAgICAgICAgICAge2NhbmNlbExhYmVsfVxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ezB9XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ9ezh9XG4gICAgICAgICAgICAgICAgICAgIGFwcGVhcmFuY2U9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nPXtpc0NvbmZpcm1Mb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNDb25maXJtRGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ29uZmlybShjbG9zZSl9XG4gICAgICAgICAgICAgICAgICAgIGludGVudD17aW50ZW50fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7Y29uZmlybUxhYmVsfVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9QYW5lPlxuICAgICAgICAgICAgICA8L1BhbmU+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgKX1cbiAgICAgIDwvT3ZlcmxheT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKERpYWxvZylcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsZUFBZSxHQUFHO0VBQ3RCQyxZQUFZLGtDQURVO0VBRXRCQyxZQUFZO0FBRlUsQ0FBeEI7QUFLQSxJQUFNQyxrQkFBa0IsR0FBRyxHQUEzQjs7QUFFQSxJQUFNQyxhQUFhLEdBQUdDLFdBQUEsQ0FBSUMsU0FBSixDQUFjLGVBQWQsRUFBK0I7RUFDbkRDLElBQUksRUFBRTtJQUNKQyxTQUFTLEVBQUUsWUFEUDtJQUVKQyxPQUFPLEVBQUU7RUFGTCxDQUQ2QztFQUtuREMsRUFBRSxFQUFFO0lBQ0ZGLFNBQVMsRUFBRSxVQURUO0lBRUZDLE9BQU8sRUFBRTtFQUZQO0FBTCtDLENBQS9CLENBQXRCOztBQVdBLElBQU1FLGNBQWMsR0FBR04sV0FBQSxDQUFJQyxTQUFKLENBQWMsZ0JBQWQsRUFBZ0M7RUFDckRDLElBQUksRUFBRTtJQUNKQyxTQUFTLEVBQUUsVUFEUDtJQUVKQyxPQUFPLEVBQUU7RUFGTCxDQUQrQztFQUtyREMsRUFBRSxFQUFFO0lBQ0ZGLFNBQVMsRUFBRSxZQURUO0lBRUZDLE9BQU8sRUFBRTtFQUZQO0FBTGlELENBQWhDLENBQXZCOztBQVdBLElBQU1HLGVBQWUsR0FBRztFQUN0QixxREFBcUQ7SUFDbkRDLFNBQVMsWUFBS1QsYUFBTCxjQUFzQkQsa0JBQXRCLGdCQUNQSCxlQUFlLENBQUNDLFlBRFQ7RUFEMEMsQ0FEL0I7RUFNdEIsMkJBQTJCO0lBQ3pCWSxTQUFTLFlBQUtGLGNBQUwsY0FBdUJSLGtCQUF2QixnQkFDUEgsZUFBZSxDQUFDRSxZQURUO0VBRGdCO0FBTkwsQ0FBeEI7O0lBYU1ZLE07Ozs7Ozs7Ozs7Ozs7Ozt1R0F5S2EsVUFBQUMsS0FBSyxFQUFJO01BQ3hCLElBQVFDLFFBQVIsR0FBcUIsTUFBS0MsS0FBMUIsQ0FBUUQsUUFBUjs7TUFFQSxJQUFJLE9BQU9BLFFBQVAsS0FBb0IsVUFBeEIsRUFBb0M7UUFDbEMsT0FBT0EsUUFBUSxDQUFDO1VBQUVELEtBQUssRUFBTEE7UUFBRixDQUFELENBQWY7TUFDRDs7TUFFRCxJQUFJLE9BQU9DLFFBQVAsS0FBb0IsUUFBeEIsRUFBa0M7UUFDaEMsb0JBQU8sZ0NBQUMscUJBQUQsUUFBWUEsUUFBWixDQUFQO01BQ0Q7O01BRUQsT0FBT0EsUUFBUDtJQUNELEM7Ozs7OztXQUVELGtCQUFTO01BQUE7O01BQ1Asa0JBMEJJLEtBQUtDLEtBMUJUO01BQUEsSUFDRUMsS0FERixlQUNFQSxLQURGO01BQUEsSUFFRUMsS0FGRixlQUVFQSxLQUZGO01BQUEsSUFHRUMsTUFIRixlQUdFQSxNQUhGO01BQUEsSUFJRUMsT0FKRixlQUlFQSxPQUpGO01BQUEsSUFLRUMsU0FMRixlQUtFQSxTQUxGO01BQUEsSUFNRUMsVUFORixlQU1FQSxVQU5GO01BQUEsSUFPRUMsU0FQRixlQU9FQSxTQVBGO01BQUEsSUFRRUMsUUFSRixlQVFFQSxRQVJGO01BQUEsSUFTRUMsU0FURixlQVNFQSxTQVRGO01BQUEsSUFVRUMsU0FWRixlQVVFQSxTQVZGO01BQUEsSUFXRUMsZUFYRixlQVdFQSxlQVhGO01BQUEsSUFZRUMsY0FaRixlQVlFQSxjQVpGO01BQUEsSUFhRUMsUUFiRixlQWFFQSxRQWJGO01BQUEsSUFjRUMsU0FkRixlQWNFQSxTQWRGO01BQUEsSUFlRUMsWUFmRixlQWVFQSxZQWZGO01BQUEsSUFnQkVDLGdCQWhCRixlQWdCRUEsZ0JBaEJGO01BQUEsSUFpQkVDLGlCQWpCRixlQWlCRUEsaUJBakJGO01BQUEsSUFrQkVDLFdBbEJGLGVBa0JFQSxXQWxCRjtNQUFBLElBbUJFQyx5QkFuQkYsZUFtQkVBLHlCQW5CRjtNQUFBLElBb0JFQyx3QkFwQkYsZUFvQkVBLHdCQXBCRjtNQUFBLHdDQXFCRUMsY0FyQkY7TUFBQSxJQXFCRUEsY0FyQkYsc0NBcUJtQixFQXJCbkI7TUFBQSxJQXNCRUMscUJBdEJGLGVBc0JFQSxxQkF0QkY7TUFBQSxJQXVCRUMsZ0JBdkJGLGVBdUJFQSxnQkF2QkY7TUFBQSxJQXdCRUMsb0JBeEJGLGVBd0JFQSxvQkF4QkY7TUFBQSxJQXlCRUMsWUF6QkYsZUF5QkVBLFlBekJGO01BNEJBLElBQU1DLGtCQUFrQixHQUFHQyxNQUFNLENBQUNDLFNBQVAsQ0FBaUJ0QixVQUFqQixjQUNwQkEsVUFEb0IsVUFFdkJBLFVBRko7TUFHQSxJQUFNdUIsUUFBUSx5QkFBa0JILGtCQUFsQixVQUFkO01BRUEsSUFBTUksaUJBQWlCLEdBQUdILE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQnZCLFNBQWpCLGNBQ25CQSxTQURtQixVQUV0QkEsU0FGSjtNQUdBLElBQU0wQixTQUFTLHlCQUFrQkQsaUJBQWxCLFVBQWY7TUFFQSxvQkFDRSxnQ0FBQyxnQkFBRDtRQUNFLE9BQU8sRUFBRTFCLE9BRFg7UUFFRSxrQkFBa0IsRUFBRWUseUJBRnRCO1FBR0Usd0JBQXdCLEVBQUVDLHdCQUg1QjtRQUlFLFFBQVEsRUFBRVQsZUFKWjtRQUtFLFNBQVMsRUFBRUMsY0FMYjtRQU1FLGNBQWM7VUFDWm9CLE9BQU8sRUFBRSxNQURHO1VBRVpDLFVBQVUsRUFBRSxZQUZBO1VBR1pDLGNBQWMsRUFBRTtRQUhKLEdBSVRULFlBSlMsQ0FOaEI7UUFZRSxvQkFBb0IsRUFBRUQ7TUFaeEIsR0FjRztRQUFBLElBQUdXLEtBQUgsUUFBR0EsS0FBSDtRQUFBLElBQVVyQyxLQUFWLFFBQVVBLEtBQVY7UUFBQSxvQkFDQyxnQ0FBQyxZQUFEO1VBQ0UsSUFBSSxFQUFDLFFBRFA7VUFFRSxlQUFlLEVBQUMsT0FGbEI7VUFHRSxTQUFTLEVBQUUsQ0FIYjtVQUlFLFlBQVksRUFBRSxDQUpoQjtVQUtFLEtBQUssRUFBRUksS0FMVDtVQU1FLFFBQVEsRUFBRTJCLFFBTlo7VUFPRSxTQUFTLEVBQUVFLFNBUGI7VUFRRSxPQUFPLEVBQUVMLGtCQVJYO1VBU0UsT0FBTyxFQUFFSSxpQkFUWDtVQVVFLE9BQU8sRUFBQyxNQVZWO1VBV0UsYUFBYSxFQUFDLFFBWGhCO1VBWUUsR0FBRyxFQUFFbkMsZUFaUDtVQWFFLGNBQVl3QztRQWJkLEdBY01kLGNBZE4sR0FnQkdkLFNBQVMsaUJBQ1IsZ0NBQUMsWUFBRDtVQUNFLE9BQU8sRUFBRSxFQURYO1VBRUUsVUFBVSxFQUFFLENBRmQ7VUFHRSxZQUFZLEVBQUMsT0FIZjtVQUlFLE9BQU8sRUFBQyxNQUpWO1VBS0UsVUFBVSxFQUFDO1FBTGIsZ0JBT0UsZ0NBQUMsbUJBQUQ7VUFBUyxFQUFFLEVBQUMsSUFBWjtVQUFpQixJQUFJLEVBQUUsR0FBdkI7VUFBNEIsSUFBSSxFQUFDO1FBQWpDLEdBQ0dOLEtBREgsQ0FQRixFQVVHTyxRQUFRLGlCQUNQLGdDQUFDLG1CQUFEO1VBQ0UsVUFBVSxFQUFDLFNBRGI7VUFFRSxJQUFJLEVBQUMsT0FGUDtVQUdFLE9BQU8sRUFBRTtZQUFBLE9BQU1LLFFBQVEsQ0FBQ2YsS0FBRCxDQUFkO1VBQUE7UUFIWCxFQVhKLENBakJKLGVBcUNFLGdDQUFDLFlBQUQ7VUFDRSxjQUFZcUMsS0FEZDtVQUVFLE9BQU8sRUFBQyxNQUZWO1VBR0UsUUFBUSxFQUFDLE1BSFg7VUFJRSxPQUFPLEVBQUUsRUFKWDtVQUtFLGFBQWEsRUFBQyxRQUxoQjtVQU1FLFNBQVMsRUFBRVo7UUFOYixHQU9NRCxxQkFQTixnQkFTRSxnQ0FBQyxZQUFELFFBQU8sTUFBSSxDQUFDYyxjQUFMLENBQW9CdEMsS0FBcEIsQ0FBUCxDQVRGLENBckNGLEVBaURHVyxTQUFTLGlCQUNSLGdDQUFDLFlBQUQ7VUFBTSxTQUFTLEVBQUMsT0FBaEI7VUFBd0IsUUFBUTtRQUFoQyxnQkFDRSxnQ0FBQyxZQUFEO1VBQU0sT0FBTyxFQUFFLEVBQWY7VUFBbUIsU0FBTTtRQUF6QixHQUVHQyxTQUFTLGlCQUNSLGdDQUFDLGVBQUQ7VUFBUSxRQUFRLEVBQUUsQ0FBbEI7VUFBcUIsT0FBTyxFQUFFO1lBQUEsT0FBTUcsUUFBUSxDQUFDZixLQUFELENBQWQ7VUFBQTtRQUE5QixHQUNHb0IsV0FESCxDQUhKLGVBUUUsZ0NBQUMsZUFBRDtVQUNFLFFBQVEsRUFBRSxDQURaO1VBRUUsVUFBVSxFQUFFLENBRmQ7VUFHRSxVQUFVLEVBQUMsU0FIYjtVQUlFLFNBQVMsRUFBRUYsZ0JBSmI7VUFLRSxRQUFRLEVBQUVDLGlCQUxaO1VBTUUsT0FBTyxFQUFFO1lBQUEsT0FBTUgsU0FBUyxDQUFDaEIsS0FBRCxDQUFmO1VBQUEsQ0FOWDtVQU9FLE1BQU0sRUFBRUs7UUFQVixHQVNHWSxZQVRILENBUkYsQ0FERixDQWxESixDQUREO01BQUEsQ0FkSCxDQURGO0lBNkZEOzs7RUEzVGtCc0IsaUJBQUEsQ0FBTUMsUzs7QUFBckJ6QyxNO2lDQUFBQSxNLGVBQ2U7RUFDakI7QUFDSjtBQUNBO0FBQ0E7RUFDSUUsUUFBUSxFQUFFd0MscUJBQUEsQ0FBVUMsU0FBVixDQUFvQixDQUFDRCxxQkFBQSxDQUFVRSxJQUFYLEVBQWlCRixxQkFBQSxDQUFVRyxJQUEzQixDQUFwQixFQUFzREMsVUFML0M7O0VBT2pCO0FBQ0o7QUFDQTtFQUNJeEMsTUFBTSxFQUFFb0MscUJBQUEsQ0FBVUssS0FBVixDQUFnQixDQUFDLE1BQUQsRUFBUyxTQUFULEVBQW9CLFNBQXBCLEVBQStCLFFBQS9CLENBQWhCLEVBQ0xELFVBWGM7O0VBYWpCO0FBQ0o7QUFDQTtFQUNJdkMsT0FBTyxFQUFFbUMscUJBQUEsQ0FBVU0sSUFoQkY7O0VBa0JqQjtBQUNKO0FBQ0E7RUFDSTVDLEtBQUssRUFBRXNDLHFCQUFBLENBQVVFLElBckJBOztFQXVCakI7QUFDSjtBQUNBO0VBQ0lsQyxTQUFTLEVBQUVnQyxxQkFBQSxDQUFVTSxJQTFCSjs7RUE0QmpCO0FBQ0o7QUFDQTtFQUNJcEMsU0FBUyxFQUFFOEIscUJBQUEsQ0FBVU0sSUEvQko7O0VBaUNqQjtBQUNKO0FBQ0E7RUFDSW5DLFNBQVMsRUFBRTZCLHFCQUFBLENBQVVNLElBcENKOztFQXNDakI7QUFDSjtBQUNBO0VBQ0lyQyxRQUFRLEVBQUUrQixxQkFBQSxDQUFVTSxJQXpDSDs7RUEyQ2pCO0FBQ0o7QUFDQTtFQUNJbEMsZUFBZSxFQUFFNEIscUJBQUEsQ0FBVUcsSUE5Q1Y7O0VBZ0RqQjtBQUNKO0FBQ0E7RUFDSTlCLGNBQWMsRUFBRTJCLHFCQUFBLENBQVVHLElBbkRUOztFQXFEakI7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDSTVCLFNBQVMsRUFBRXlCLHFCQUFBLENBQVVHLElBNURKOztFQThEakI7QUFDSjtBQUNBO0VBQ0kzQixZQUFZLEVBQUV3QixxQkFBQSxDQUFVTyxNQWpFUDs7RUFtRWpCO0FBQ0o7QUFDQTtFQUNJOUIsZ0JBQWdCLEVBQUV1QixxQkFBQSxDQUFVTSxJQXRFWDs7RUF3RWpCO0FBQ0o7QUFDQTtFQUNJNUIsaUJBQWlCLEVBQUVzQixxQkFBQSxDQUFVTSxJQTNFWjs7RUE2RWpCO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNJaEMsUUFBUSxFQUFFMEIscUJBQUEsQ0FBVUcsSUFuRkg7O0VBcUZqQjtBQUNKO0FBQ0E7RUFDSXhCLFdBQVcsRUFBRXFCLHFCQUFBLENBQVVPLE1BeEZOOztFQTBGakI7QUFDSjtBQUNBO0VBQ0kzQix5QkFBeUIsRUFBRW9CLHFCQUFBLENBQVVNLElBN0ZwQjs7RUErRmpCO0FBQ0o7QUFDQTtFQUNJekIsd0JBQXdCLEVBQUVtQixxQkFBQSxDQUFVTSxJQWxHbkI7O0VBb0dqQjtBQUNKO0FBQ0E7RUFDSTNDLEtBQUssRUFBRXFDLHFCQUFBLENBQVVDLFNBQVYsQ0FBb0IsQ0FBQ0QscUJBQUEsQ0FBVU8sTUFBWCxFQUFtQlAscUJBQUEsQ0FBVVEsTUFBN0IsQ0FBcEIsQ0F2R1U7O0VBeUdqQjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0VBQ0kxQyxTQUFTLEVBQUVrQyxxQkFBQSxDQUFVQyxTQUFWLENBQW9CLENBQUNELHFCQUFBLENBQVVPLE1BQVgsRUFBbUJQLHFCQUFBLENBQVVRLE1BQTdCLENBQXBCLENBOUdNOztFQWdIakI7QUFDSjtBQUNBO0FBQ0E7RUFDSXpDLFVBQVUsRUFBRWlDLHFCQUFBLENBQVVDLFNBQVYsQ0FBb0IsQ0FBQ0QscUJBQUEsQ0FBVU8sTUFBWCxFQUFtQlAscUJBQUEsQ0FBVVEsTUFBN0IsQ0FBcEIsQ0FwSEs7O0VBc0hqQjtBQUNKO0FBQ0E7QUFDQTtFQUNJeEIsZ0JBQWdCLEVBQUVnQixxQkFBQSxDQUFVQyxTQUFWLENBQW9CLENBQUNELHFCQUFBLENBQVVPLE1BQVgsRUFBbUJQLHFCQUFBLENBQVVRLE1BQTdCLENBQXBCLENBMUhEOztFQTRIakI7QUFDSjtBQUNBO0VBQ0kxQixjQUFjLEVBQUVrQixxQkFBQSxDQUFVUyxNQS9IVDs7RUFpSWpCO0FBQ0o7QUFDQTtFQUNJMUIscUJBQXFCLEVBQUVpQixxQkFBQSxDQUFVUyxNQXBJaEI7O0VBc0lqQjtBQUNKO0FBQ0E7RUFDSXhCLG9CQUFvQixFQUFFZSxxQkFBQSxDQUFVTSxJQXpJZjs7RUEySWpCO0FBQ0o7QUFDQTtFQUNJcEIsWUFBWSxFQUFFYyxxQkFBQSxDQUFVUztBQTlJUCxDO2lDQURmbkQsTSxrQkFrSmtCO0VBQ3BCTyxPQUFPLEVBQUUsS0FEVztFQUVwQkcsU0FBUyxFQUFFLElBRlM7RUFHcEJDLFFBQVEsRUFBRSxJQUhVO0VBSXBCQyxTQUFTLEVBQUUsSUFKUztFQUtwQkMsU0FBUyxFQUFFLElBTFM7RUFNcEJQLE1BQU0sRUFBRSxNQU5ZO0VBT3BCRCxLQUFLLEVBQUUsR0FQYTtFQVFwQkcsU0FBUyxFQUFFLFFBUlM7RUFTcEJDLFVBQVUsRUFBRSxNQVRRO0VBVXBCaUIsZ0JBQWdCLEVBQUUsRUFWRTtFQVdwQlIsWUFBWSxFQUFFLFNBWE07RUFZcEJDLGdCQUFnQixFQUFFLEtBWkU7RUFhcEJDLGlCQUFpQixFQUFFLEtBYkM7RUFjcEJDLFdBQVcsRUFBRSxRQWRPO0VBZXBCQyx5QkFBeUIsRUFBRSxJQWZQO0VBZ0JwQkMsd0JBQXdCLEVBQUUsSUFoQk47RUFpQnBCUCxRQUFRLEVBQUUsa0JBQUFmLEtBQUs7SUFBQSxPQUFJQSxLQUFLLEVBQVQ7RUFBQSxDQWpCSztFQWtCcEJnQixTQUFTLEVBQUUsbUJBQUFoQixLQUFLO0lBQUEsT0FBSUEsS0FBSyxFQUFUO0VBQUEsQ0FsQkk7RUFtQnBCMEIsb0JBQW9CLEVBQUUsS0FuQkY7RUFvQnBCQyxZQUFZLEVBQUU7QUFwQk0sQzs7ZUE0S1QsSUFBQXdCLGdCQUFBLEVBQVVwRCxNQUFWLEMifQ==