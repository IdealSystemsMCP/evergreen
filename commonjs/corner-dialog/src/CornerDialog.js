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

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Transition = _interopRequireDefault(require("react-transition-group/Transition"));

var _layers = require("../../layers");

var _portal = require("../../portal");

var _typography = require("../../typography");

var _buttons = require("../../buttons");

var _AbsolutePosition = _interopRequireDefault(require("../../constants/src/AbsolutePosition"));

var _Position = _interopRequireDefault(require("../../constants/src/Position"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var animationEasing = {
  deceleration: "cubic-bezier(0.0, 0.0, 0.2, 1)",
  acceleration: "cubic-bezier(0.4, 0.0, 1, 1)",
  spring: "cubic-bezier(0.175, 0.885, 0.320, 1.175)"
};
var ANIMATION_DURATION = 240;

var openAnimation = _glamor.css.keyframes('openAnimation', {
  from: {
    transform: 'translateY(100%)'
  },
  to: {
    transform: 'translateY(0)'
  }
});

var closeAnimation = _glamor.css.keyframes('closeAnimation', {
  from: {
    transform: 'scale(1)',
    opacity: 1
  },
  to: {
    transform: 'scale(0.9)',
    opacity: 0
  }
});

var animationStyles = {
  '&[data-state="entering"], &[data-state="entered"]': {
    animation: "".concat(openAnimation, " ").concat(ANIMATION_DURATION, "ms ").concat(animationEasing.spring, " both")
  },
  '&[data-state="exiting"]': {
    animation: "".concat(closeAnimation, " 120ms ").concat(animationEasing.acceleration, " both")
  }
};

var CornerDialog = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(CornerDialog, _PureComponent);

  var _super = _createSuper(CornerDialog);

  function CornerDialog(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, CornerDialog);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleExited", function () {
      _this.setState({
        exiting: false,
        exited: true
      });

      _this.props.onCloseComplete();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleCancel", function () {
      _this.props.onCancel(_this.handleClose);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClose", function () {
      _this.setState({
        exiting: true
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleConfirm", function () {
      _this.props.onConfirm(_this.handleClose);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderChildren", function () {
      var children = _this.props.children;

      if (typeof children === 'function') {
        return children({
          close: _this.handleClose
        });
      }

      if (typeof children === 'string') {
        return /*#__PURE__*/_react["default"].createElement(_typography.Paragraph, {
          size: 400,
          color: "muted"
        }, children);
      }

      return children;
    });
    _this.state = {
      exiting: false,
      exited: !props.isShown
    };
    return _this;
  }

  (0, _createClass2["default"])(CornerDialog, [{
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
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          title = _this$props.title,
          width = _this$props.width,
          intent = _this$props.intent,
          isShown = _this$props.isShown,
          hasFooter = _this$props.hasFooter,
          hasCancel = _this$props.hasCancel,
          hasClose = _this$props.hasClose,
          cancelLabel = _this$props.cancelLabel,
          confirmLabel = _this$props.confirmLabel,
          onOpenComplete = _this$props.onOpenComplete,
          _this$props$container = _this$props.containerProps,
          containerProps = _this$props$container === void 0 ? {} : _this$props$container,
          position = _this$props.position;
      var _this$state = this.state,
          exiting = _this$state.exiting,
          exited = _this$state.exited;
      if (exited) return null;
      return /*#__PURE__*/_react["default"].createElement(_portal.Portal, null, /*#__PURE__*/_react["default"].createElement(_Transition["default"], {
        appear: true,
        unmountOnExit: true,
        timeout: ANIMATION_DURATION,
        "in": isShown && !exiting,
        onExited: this.handleExited,
        onEntered: onOpenComplete
      }, function (state) {
        return /*#__PURE__*/_react["default"].createElement(_layers.Card, (0, _extends2["default"])({
          role: "dialog",
          backgroundColor: "white",
          elevation: 4,
          width: width,
          css: animationStyles,
          "data-state": state,
          padding: 32,
          position: "fixed"
        }, _AbsolutePosition["default"][Object.keys(_AbsolutePosition["default"]).includes(position) ? position : _Position["default"].BOTTOM_RIGHT], containerProps), /*#__PURE__*/_react["default"].createElement(_layers.Pane, {
          display: "flex",
          alignItems: "center",
          marginBottom: 12
        }, /*#__PURE__*/_react["default"].createElement(_typography.Heading, {
          is: "h4",
          size: 600,
          flex: "1"
        }, title), hasClose && /*#__PURE__*/_react["default"].createElement(_buttons.IconButton, {
          height: 32,
          icon: "cross",
          appearance: "minimal",
          onClick: _this2.handleClose
        })), /*#__PURE__*/_react["default"].createElement(_layers.Pane, {
          overflowY: "auto",
          "data-state": state
        }, _this2.renderChildren()), hasFooter && /*#__PURE__*/_react["default"].createElement(_layers.Pane, {
          marginTop: 24,
          flexShrink: 0,
          display: "flex",
          flexDirection: "row-reverse"
        }, /*#__PURE__*/_react["default"].createElement(_buttons.Button, {
          appearance: "primary",
          intent: intent,
          marginLeft: 8,
          onClick: _this2.handleConfirm
        }, confirmLabel), hasCancel && /*#__PURE__*/_react["default"].createElement(_buttons.Button, {
          onClick: _this2.handleCancel
        }, cancelLabel)));
      }));
    }
  }]);
  return CornerDialog;
}(_react.PureComponent);

exports["default"] = CornerDialog;
CornerDialog.displayName = "CornerDialog";
(0, _defineProperty2["default"])(CornerDialog, "propTypes", {
  /**
   * Children can be a string, node or a function accepting `({ close })`.
   * When passing a string, <Paragraph size={400} color="muted" /> is used to wrap the string.
   */
  children: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].func]).isRequired,

  /**
   * The intent of the CornerDialog. Used for the button.
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
   * Function that will be called when the exit transition is complete.
   */
  onCloseComplete: _propTypes["default"].func,

  /**
   * Function that will be called when the enter transition is complete.
   */
  onOpenComplete: _propTypes["default"].func,

  /**
   * When true, the footer with the cancel and confirm button is shown.
   */
  hasFooter: _propTypes["default"].bool,

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
   * When true, the cancel button is shown.
   */
  hasCancel: _propTypes["default"].bool,

  /**
   * When true, the close button is shown.
   */
  hasClose: _propTypes["default"].bool,

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
   * Width of the Dialog.
   */
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),

  /**
   * Props that are passed to the dialog container.
   */
  containerProps: _propTypes["default"].object,

  /**
   * Props that will set position of corner dialog
   */
  position: _propTypes["default"].oneOf([_Position["default"].TOP_LEFT, _Position["default"].TOP_RIGHT, _Position["default"].BOTTOM_LEFT, _Position["default"].BOTTOM_RIGHT])
});
(0, _defineProperty2["default"])(CornerDialog, "defaultProps", {
  width: 392,
  intent: 'none',
  hasFooter: true,
  confirmLabel: 'Learn More',
  hasCancel: true,
  hasClose: true,
  cancelLabel: 'Close',
  onCancel: function onCancel(close) {
    return close();
  },
  onConfirm: function onConfirm(close) {
    return close();
  },
  onCloseComplete: function onCloseComplete() {},
  position: _Position["default"].BOTTOM_RIGHT
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJhbmltYXRpb25FYXNpbmciLCJkZWNlbGVyYXRpb24iLCJhY2NlbGVyYXRpb24iLCJzcHJpbmciLCJBTklNQVRJT05fRFVSQVRJT04iLCJvcGVuQW5pbWF0aW9uIiwiY3NzIiwia2V5ZnJhbWVzIiwiZnJvbSIsInRyYW5zZm9ybSIsInRvIiwiY2xvc2VBbmltYXRpb24iLCJvcGFjaXR5IiwiYW5pbWF0aW9uU3R5bGVzIiwiYW5pbWF0aW9uIiwiQ29ybmVyRGlhbG9nIiwicHJvcHMiLCJzZXRTdGF0ZSIsImV4aXRpbmciLCJleGl0ZWQiLCJvbkNsb3NlQ29tcGxldGUiLCJvbkNhbmNlbCIsImhhbmRsZUNsb3NlIiwib25Db25maXJtIiwiY2hpbGRyZW4iLCJjbG9zZSIsInN0YXRlIiwiaXNTaG93biIsInByZXZQcm9wcyIsInRpdGxlIiwid2lkdGgiLCJpbnRlbnQiLCJoYXNGb290ZXIiLCJoYXNDYW5jZWwiLCJoYXNDbG9zZSIsImNhbmNlbExhYmVsIiwiY29uZmlybUxhYmVsIiwib25PcGVuQ29tcGxldGUiLCJjb250YWluZXJQcm9wcyIsInBvc2l0aW9uIiwiaGFuZGxlRXhpdGVkIiwiYWJzb2x1dGVQb3NpdGlvbnMiLCJPYmplY3QiLCJrZXlzIiwiaW5jbHVkZXMiLCJwb3NpdGlvbnMiLCJCT1RUT01fUklHSFQiLCJyZW5kZXJDaGlsZHJlbiIsImhhbmRsZUNvbmZpcm0iLCJoYW5kbGVDYW5jZWwiLCJQdXJlQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwib25lT2ZUeXBlIiwibm9kZSIsImZ1bmMiLCJpc1JlcXVpcmVkIiwib25lT2YiLCJib29sIiwic3RyaW5nIiwibnVtYmVyIiwib2JqZWN0IiwiVE9QX0xFRlQiLCJUT1BfUklHSFQiLCJCT1RUT01fTEVGVCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JuZXItZGlhbG9nL3NyYy9Db3JuZXJEaWFsb2cuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnZ2xhbW9yJ1xuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBUcmFuc2l0aW9uIGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvVHJhbnNpdGlvbidcbmltcG9ydCB7IFBhbmUsIENhcmQgfSBmcm9tICcuLi8uLi9sYXllcnMnXG5pbXBvcnQgeyBQb3J0YWwgfSBmcm9tICcuLi8uLi9wb3J0YWwnXG5pbXBvcnQgeyBQYXJhZ3JhcGgsIEhlYWRpbmcgfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuaW1wb3J0IHsgQnV0dG9uLCBJY29uQnV0dG9uIH0gZnJvbSAnLi4vLi4vYnV0dG9ucydcbmltcG9ydCBhYnNvbHV0ZVBvc2l0aW9ucyBmcm9tICcuLi8uLi9jb25zdGFudHMvc3JjL0Fic29sdXRlUG9zaXRpb24nXG5pbXBvcnQgcG9zaXRpb25zIGZyb20gJy4uLy4uL2NvbnN0YW50cy9zcmMvUG9zaXRpb24nXG5cbmNvbnN0IGFuaW1hdGlvbkVhc2luZyA9IHtcbiAgZGVjZWxlcmF0aW9uOiBgY3ViaWMtYmV6aWVyKDAuMCwgMC4wLCAwLjIsIDEpYCxcbiAgYWNjZWxlcmF0aW9uOiBgY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAxLCAxKWAsXG4gIHNwcmluZzogYGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIwLCAxLjE3NSlgXG59XG5cbmNvbnN0IEFOSU1BVElPTl9EVVJBVElPTiA9IDI0MFxuXG5jb25zdCBvcGVuQW5pbWF0aW9uID0gY3NzLmtleWZyYW1lcygnb3BlbkFuaW1hdGlvbicsIHtcbiAgZnJvbToge1xuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMTAwJSknXG4gIH0sXG4gIHRvOiB7XG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKSdcbiAgfVxufSlcblxuY29uc3QgY2xvc2VBbmltYXRpb24gPSBjc3Mua2V5ZnJhbWVzKCdjbG9zZUFuaW1hdGlvbicsIHtcbiAgZnJvbToge1xuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpJyxcbiAgICBvcGFjaXR5OiAxXG4gIH0sXG4gIHRvOiB7XG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMC45KScsXG4gICAgb3BhY2l0eTogMFxuICB9XG59KVxuXG5jb25zdCBhbmltYXRpb25TdHlsZXMgPSB7XG4gICcmW2RhdGEtc3RhdGU9XCJlbnRlcmluZ1wiXSwgJltkYXRhLXN0YXRlPVwiZW50ZXJlZFwiXSc6IHtcbiAgICBhbmltYXRpb246IGAke29wZW5BbmltYXRpb259ICR7QU5JTUFUSU9OX0RVUkFUSU9OfW1zICR7XG4gICAgICBhbmltYXRpb25FYXNpbmcuc3ByaW5nXG4gICAgfSBib3RoYFxuICB9LFxuICAnJltkYXRhLXN0YXRlPVwiZXhpdGluZ1wiXSc6IHtcbiAgICBhbmltYXRpb246IGAke2Nsb3NlQW5pbWF0aW9ufSAxMjBtcyAke2FuaW1hdGlvbkVhc2luZy5hY2NlbGVyYXRpb259IGJvdGhgXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29ybmVyRGlhbG9nIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ2hpbGRyZW4gY2FuIGJlIGEgc3RyaW5nLCBub2RlIG9yIGEgZnVuY3Rpb24gYWNjZXB0aW5nIGAoeyBjbG9zZSB9KWAuXG4gICAgICogV2hlbiBwYXNzaW5nIGEgc3RyaW5nLCA8UGFyYWdyYXBoIHNpemU9ezQwMH0gY29sb3I9XCJtdXRlZFwiIC8+IGlzIHVzZWQgdG8gd3JhcCB0aGUgc3RyaW5nLlxuICAgICAqL1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubm9kZSwgUHJvcFR5cGVzLmZ1bmNdKS5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGludGVudCBvZiB0aGUgQ29ybmVyRGlhbG9nLiBVc2VkIGZvciB0aGUgYnV0dG9uLlxuICAgICAqL1xuICAgIGludGVudDogUHJvcFR5cGVzLm9uZU9mKFsnbm9uZScsICdzdWNjZXNzJywgJ3dhcm5pbmcnLCAnZGFuZ2VyJ10pXG4gICAgICAuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIGRpYWxvZyBpcyBzaG93bi5cbiAgICAgKi9cbiAgICBpc1Nob3duOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFRpdGxlIG9mIHRoZSBEaWFsb2cuIFRpdGxlcyBzaG91bGQgdXNlIFRpdGxlIENhc2UuXG4gICAgICovXG4gICAgdGl0bGU6IFByb3BUeXBlcy5ub2RlLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZSBleGl0IHRyYW5zaXRpb24gaXMgY29tcGxldGUuXG4gICAgICovXG4gICAgb25DbG9zZUNvbXBsZXRlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgZW50ZXIgdHJhbnNpdGlvbiBpcyBjb21wbGV0ZS5cbiAgICAgKi9cbiAgICBvbk9wZW5Db21wbGV0ZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSBmb290ZXIgd2l0aCB0aGUgY2FuY2VsIGFuZCBjb25maXJtIGJ1dHRvbiBpcyBzaG93bi5cbiAgICAgKi9cbiAgICBoYXNGb290ZXI6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZSBjb25maXJtIGJ1dHRvbiBpcyBjbGlja2VkLlxuICAgICAqIFRoaXMgZG9lcyBub3QgY2xvc2UgdGhlIERpYWxvZy4gQSBjbG9zZSBmdW5jdGlvbiB3aWxsIGJlIHBhc3NlZFxuICAgICAqIGFzIGEgcGFyYW1hdGVyIHlvdSBjYW4gdXNlIHRvIGNsb3NlIHRoZSBkaWFsb2cuXG4gICAgICpcbiAgICAgKiBgb25Db25maXJtPXsoY2xvc2UpID0+IGNsb3NlKCl9YFxuICAgICAqL1xuICAgIG9uQ29uZmlybTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBMYWJlbCBvZiB0aGUgY29uZmlybSBidXR0b24uXG4gICAgICovXG4gICAgY29uZmlybUxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgY2FuY2VsIGJ1dHRvbiBpcyBzaG93bi5cbiAgICAgKi9cbiAgICBoYXNDYW5jZWw6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgY2xvc2UgYnV0dG9uIGlzIHNob3duLlxuICAgICAqL1xuICAgIGhhc0Nsb3NlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgY2FuY2VsIGJ1dHRvbiBpcyBjbGlja2VkLlxuICAgICAqIFRoaXMgY2xvc2VzIHRoZSBEaWFsb2cgYnkgZGVmYXVsdC5cbiAgICAgKlxuICAgICAqIGBvbkNhbmNlbD17KGNsb3NlKSA9PiBjbG9zZSgpfWBcbiAgICAgKi9cbiAgICBvbkNhbmNlbDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBMYWJlbCBvZiB0aGUgY2FuY2VsIGJ1dHRvbi5cbiAgICAgKi9cbiAgICBjYW5jZWxMYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFdpZHRoIG9mIHRoZSBEaWFsb2cuXG4gICAgICovXG4gICAgd2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcblxuICAgIC8qKlxuICAgICAqIFByb3BzIHRoYXQgYXJlIHBhc3NlZCB0byB0aGUgZGlhbG9nIGNvbnRhaW5lci5cbiAgICAgKi9cbiAgICBjb250YWluZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAgIC8qKlxuICAgICAqIFByb3BzIHRoYXQgd2lsbCBzZXQgcG9zaXRpb24gb2YgY29ybmVyIGRpYWxvZ1xuICAgICAqL1xuICAgIHBvc2l0aW9uOiBQcm9wVHlwZXMub25lT2YoW1xuICAgICAgcG9zaXRpb25zLlRPUF9MRUZULFxuICAgICAgcG9zaXRpb25zLlRPUF9SSUdIVCxcbiAgICAgIHBvc2l0aW9ucy5CT1RUT01fTEVGVCxcbiAgICAgIHBvc2l0aW9ucy5CT1RUT01fUklHSFRcbiAgICBdKVxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB3aWR0aDogMzkyLFxuICAgIGludGVudDogJ25vbmUnLFxuICAgIGhhc0Zvb3RlcjogdHJ1ZSxcbiAgICBjb25maXJtTGFiZWw6ICdMZWFybiBNb3JlJyxcbiAgICBoYXNDYW5jZWw6IHRydWUsXG4gICAgaGFzQ2xvc2U6IHRydWUsXG4gICAgY2FuY2VsTGFiZWw6ICdDbG9zZScsXG4gICAgb25DYW5jZWw6IGNsb3NlID0+IGNsb3NlKCksXG4gICAgb25Db25maXJtOiBjbG9zZSA9PiBjbG9zZSgpLFxuICAgIG9uQ2xvc2VDb21wbGV0ZTogKCkgPT4ge30sXG4gICAgcG9zaXRpb246IHBvc2l0aW9ucy5CT1RUT01fUklHSFRcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZXhpdGluZzogZmFsc2UsXG4gICAgICBleGl0ZWQ6ICFwcm9wcy5pc1Nob3duXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGlmICghcHJldlByb3BzLmlzU2hvd24gJiYgdGhpcy5wcm9wcy5pc1Nob3duKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tZGlkLXVwZGF0ZS1zZXQtc3RhdGVcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBleGl0ZWQ6IGZhbHNlXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUV4aXRlZCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZXhpdGluZzogZmFsc2UsIGV4aXRlZDogdHJ1ZSB9KVxuICAgIHRoaXMucHJvcHMub25DbG9zZUNvbXBsZXRlKClcbiAgfVxuXG4gIGhhbmRsZUNhbmNlbCA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLm9uQ2FuY2VsKHRoaXMuaGFuZGxlQ2xvc2UpXG4gIH1cblxuICBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZXhpdGluZzogdHJ1ZSB9KVxuICB9XG5cbiAgaGFuZGxlQ29uZmlybSA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLm9uQ29uZmlybSh0aGlzLmhhbmRsZUNsb3NlKVxuICB9XG5cbiAgcmVuZGVyQ2hpbGRyZW4gPSAoKSA9PiB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBjaGlsZHJlbih7IGNsb3NlOiB0aGlzLmhhbmRsZUNsb3NlIH0pXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxQYXJhZ3JhcGggc2l6ZT17NDAwfSBjb2xvcj1cIm11dGVkXCI+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L1BhcmFncmFwaD5cbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGRyZW5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB0aXRsZSxcbiAgICAgIHdpZHRoLFxuICAgICAgaW50ZW50LFxuICAgICAgaXNTaG93bixcbiAgICAgIGhhc0Zvb3RlcixcbiAgICAgIGhhc0NhbmNlbCxcbiAgICAgIGhhc0Nsb3NlLFxuICAgICAgY2FuY2VsTGFiZWwsXG4gICAgICBjb25maXJtTGFiZWwsXG4gICAgICBvbk9wZW5Db21wbGV0ZSxcbiAgICAgIGNvbnRhaW5lclByb3BzID0ge30sXG4gICAgICBwb3NpdGlvblxuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCB7IGV4aXRpbmcsIGV4aXRlZCB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgaWYgKGV4aXRlZCkgcmV0dXJuIG51bGxcbiAgICByZXR1cm4gKFxuICAgICAgPFBvcnRhbD5cbiAgICAgICAgPFRyYW5zaXRpb25cbiAgICAgICAgICBhcHBlYXJcbiAgICAgICAgICB1bm1vdW50T25FeGl0XG4gICAgICAgICAgdGltZW91dD17QU5JTUFUSU9OX0RVUkFUSU9OfVxuICAgICAgICAgIGluPXtpc1Nob3duICYmICFleGl0aW5nfVxuICAgICAgICAgIG9uRXhpdGVkPXt0aGlzLmhhbmRsZUV4aXRlZH1cbiAgICAgICAgICBvbkVudGVyZWQ9e29uT3BlbkNvbXBsZXRlfVxuICAgICAgICA+XG4gICAgICAgICAge3N0YXRlID0+IChcbiAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgIHJvbGU9XCJkaWFsb2dcIlxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgIGVsZXZhdGlvbj17NH1cbiAgICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgICAgICBjc3M9e2FuaW1hdGlvblN0eWxlc31cbiAgICAgICAgICAgICAgZGF0YS1zdGF0ZT17c3RhdGV9XG4gICAgICAgICAgICAgIHBhZGRpbmc9ezMyfVxuICAgICAgICAgICAgICBwb3NpdGlvbj1cImZpeGVkXCJcbiAgICAgICAgICAgICAgey4uLmFic29sdXRlUG9zaXRpb25zW1xuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGFic29sdXRlUG9zaXRpb25zKS5pbmNsdWRlcyhwb3NpdGlvbilcbiAgICAgICAgICAgICAgICAgID8gcG9zaXRpb25cbiAgICAgICAgICAgICAgICAgIDogcG9zaXRpb25zLkJPVFRPTV9SSUdIVFxuICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICB7Li4uY29udGFpbmVyUHJvcHN9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxQYW5lIGRpc3BsYXk9XCJmbGV4XCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIG1hcmdpbkJvdHRvbT17MTJ9PlxuICAgICAgICAgICAgICAgIDxIZWFkaW5nIGlzPVwiaDRcIiBzaXplPXs2MDB9IGZsZXg9XCIxXCI+XG4gICAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAgICAgIHtoYXNDbG9zZSAmJiAoXG4gICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezMyfVxuICAgICAgICAgICAgICAgICAgICBpY29uPVwiY3Jvc3NcIlxuICAgICAgICAgICAgICAgICAgICBhcHBlYXJhbmNlPVwibWluaW1hbFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2V9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvUGFuZT5cblxuICAgICAgICAgICAgICA8UGFuZSBvdmVyZmxvd1k9XCJhdXRvXCIgZGF0YS1zdGF0ZT17c3RhdGV9PlxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckNoaWxkcmVuKCl9XG4gICAgICAgICAgICAgIDwvUGFuZT5cblxuICAgICAgICAgICAgICB7aGFzRm9vdGVyICYmIChcbiAgICAgICAgICAgICAgICA8UGFuZVxuICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wPXsyNH1cbiAgICAgICAgICAgICAgICAgIGZsZXhTaHJpbms9ezB9XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwicm93LXJldmVyc2VcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgYXBwZWFyYW5jZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICBpbnRlbnQ9e2ludGVudH1cbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdD17OH1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDb25maXJtfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7Y29uZmlybUxhYmVsfVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICB7aGFzQ2FuY2VsICYmIChcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNhbmNlbH0+e2NhbmNlbExhYmVsfTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L1BhbmU+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9UcmFuc2l0aW9uPlxuICAgICAgPC9Qb3J0YWw+XG4gICAgKVxuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsZUFBZSxHQUFHO0VBQ3RCQyxZQUFZLGtDQURVO0VBRXRCQyxZQUFZLGdDQUZVO0VBR3RCQyxNQUFNO0FBSGdCLENBQXhCO0FBTUEsSUFBTUMsa0JBQWtCLEdBQUcsR0FBM0I7O0FBRUEsSUFBTUMsYUFBYSxHQUFHQyxXQUFBLENBQUlDLFNBQUosQ0FBYyxlQUFkLEVBQStCO0VBQ25EQyxJQUFJLEVBQUU7SUFDSkMsU0FBUyxFQUFFO0VBRFAsQ0FENkM7RUFJbkRDLEVB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