"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

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

var _react = _interopRequireDefault(require("react"));

var _glamor = require("glamor");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Transition = _interopRequireDefault(require("react-transition-group/Transition"));

var _Alert = _interopRequireDefault(require("../../alert/src/Alert"));

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
    opacity: 0,
    transform: 'translateY(-120%)'
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

var animationStyles = (0, _glamor.css)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: 0,
  transition: "all ".concat(ANIMATION_DURATION, "ms ").concat(animationEasing.deceleration),
  '&[data-state="entering"], &[data-state="entered"]': {
    animation: "".concat(openAnimation, " ").concat(ANIMATION_DURATION, "ms ").concat(animationEasing.spring, " both")
  },
  '&[data-state="exiting"]': {
    animation: "".concat(closeAnimation, " 120ms ").concat(animationEasing.acceleration, " both")
  }
});

var Toast = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(Toast, _React$PureComponent);

  var _super = _createSuper(Toast);

  function Toast() {
    var _this;

    (0, _classCallCheck2["default"])(this, Toast);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      isShown: true,
      height: 0
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "close", function () {
      _this.clearCloseTimer();

      _this.setState({
        isShown: false
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "startCloseTimer", function () {
      if (_this.props.duration) {
        _this.closeTimer = setTimeout(function () {
          _this.close();
        }, _this.props.duration * 1000);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "clearCloseTimer", function () {
      if (_this.closeTimer) {
        clearTimeout(_this.closeTimer);
        _this.closeTimer = null;
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleMouseEnter", function () {
      _this.clearCloseTimer();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleMouseLeave", function () {
      _this.startCloseTimer();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onRef", function (ref) {
      if (ref === null) return;

      var _ref$getBoundingClien = ref.getBoundingClientRect(),
          height = _ref$getBoundingClien.height;

      _this.setState({
        height: height
      });
    });
    return _this;
  }

  (0, _createClass2["default"])(Toast, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.isShown !== this.props.isShown) {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({
          isShown: this.props.isShown
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startCloseTimer();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearCloseTimer();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/_react["default"].createElement(_Transition["default"], {
        appear: true,
        unmountOnExit: true,
        timeout: ANIMATION_DURATION,
        "in": this.state.isShown,
        onExited: this.props.onRemove
      }, function (state) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          "data-state": state,
          className: animationStyles,
          onMouseEnter: _this2.handleMouseEnter,
          onMouseLeave: _this2.handleMouseLeave,
          style: {
            height: _this2.state.height,
            zIndex: _this2.props.zIndex,
            marginBottom: _this2.state.isShown ? 0 : -_this2.state.height
          }
        }, /*#__PURE__*/_react["default"].createElement("div", {
          ref: _this2.onRef,
          style: {
            padding: 8
          }
        }, /*#__PURE__*/_react["default"].createElement(_Alert["default"], {
          flexShrink: 0,
          appearance: "card",
          elevation: 3,
          intent: _this2.props.intent,
          title: _this2.props.title,
          isRemoveable: _this2.props.hasCloseButton,
          onRemove: function onRemove() {
            return _this2.close();
          },
          pointerEvents: "all"
        }, _this2.props.children)));
      });
    }
  }]);
  return Toast;
}(_react["default"].PureComponent);

exports["default"] = Toast;
Toast.displayName = "Toast";
(0, _defineProperty2["default"])(Toast, "propTypes", {
  /**
   * The z-index of the toast.
   */
  zIndex: _propTypes["default"].number,

  /**
   * Duration of the toast.
   */
  duration: _propTypes["default"].number,

  /**
   * Function called when the toast is all the way closed.
   */
  onRemove: _propTypes["default"].func,

  /**
   * The type of the alert.
   */
  intent: _propTypes["default"].oneOf(['none', 'success', 'warning', 'danger']).isRequired,

  /**
   * The title of the alert.
   */
  title: _propTypes["default"].node,

  /**
   * Description of the alert.
   */
  children: _propTypes["default"].node,

  /**
   * When true, show a close icon button inside of the toast.
   */
  hasCloseButton: _propTypes["default"].bool,

  /**
   * When false, will close the Toast and call onRemove when finished.
   */
  isShown: _propTypes["default"].bool
});
(0, _defineProperty2["default"])(Toast, "defaultProps", {
  intent: 'none'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJhbmltYXRpb25FYXNpbmciLCJkZWNlbGVyYXRpb24iLCJhY2NlbGVyYXRpb24iLCJzcHJpbmciLCJBTklNQVRJT05fRFVSQVRJT04iLCJvcGVuQW5pbWF0aW9uIiwiY3NzIiwia2V5ZnJhbWVzIiwiZnJvbSIsIm9wYWNpdHkiLCJ0cmFuc2Zvcm0iLCJ0byIsImNsb3NlQW5pbWF0aW9uIiwiYW5pbWF0aW9uU3R5bGVzIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwiaGVpZ2h0IiwidHJhbnNpdGlvbiIsImFuaW1hdGlvbiIsIlRvYXN0IiwiaXNTaG93biIsImNsZWFyQ2xvc2VUaW1lciIsInNldFN0YXRlIiwicHJvcHMiLCJkdXJhdGlvbiIsImNsb3NlVGltZXIiLCJzZXRUaW1lb3V0IiwiY2xvc2UiLCJjbGVhclRpbWVvdXQiLCJzdGFydENsb3NlVGltZXIiLCJyZWYiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwcmV2UHJvcHMiLCJzdGF0ZSIsIm9uUmVtb3ZlIiwiaGFuZGxlTW91c2VFbnRlciIsImhhbmRsZU1vdXNlTGVhdmUiLCJ6SW5kZXgiLCJtYXJnaW5Cb3R0b20iLCJvblJlZiIsInBhZGRpbmciLCJpbnRlbnQiLCJ0aXRsZSIsImhhc0Nsb3NlQnV0dG9uIiwiY2hpbGRyZW4iLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJudW1iZXIiLCJmdW5jIiwib25lT2YiLCJpc1JlcXVpcmVkIiwibm9kZSIsImJvb2wiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdG9hc3Rlci9zcmMvVG9hc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnZ2xhbW9yJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFRyYW5zaXRpb24gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cC9UcmFuc2l0aW9uJ1xuaW1wb3J0IEFsZXJ0IGZyb20gJy4uLy4uL2FsZXJ0L3NyYy9BbGVydCdcblxuY29uc3QgYW5pbWF0aW9uRWFzaW5nID0ge1xuICBkZWNlbGVyYXRpb246IGBjdWJpYy1iZXppZXIoMC4wLCAwLjAsIDAuMiwgMSlgLFxuICBhY2NlbGVyYXRpb246IGBjdWJpYy1iZXppZXIoMC40LCAwLjAsIDEsIDEpYCxcbiAgc3ByaW5nOiBgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMjAsIDEuMTc1KWBcbn1cblxuY29uc3QgQU5JTUFUSU9OX0RVUkFUSU9OID0gMjQwXG5cbmNvbnN0IG9wZW5BbmltYXRpb24gPSBjc3Mua2V5ZnJhbWVzKCdvcGVuQW5pbWF0aW9uJywge1xuICBmcm9tOiB7XG4gICAgb3BhY2l0eTogMCxcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0xMjAlKSdcbiAgfSxcbiAgdG86IHtcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJ1xuICB9XG59KVxuXG5jb25zdCBjbG9zZUFuaW1hdGlvbiA9IGNzcy5rZXlmcmFtZXMoJ2Nsb3NlQW5pbWF0aW9uJywge1xuICBmcm9tOiB7XG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknLFxuICAgIG9wYWNpdHk6IDFcbiAgfSxcbiAgdG86IHtcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgwLjkpJyxcbiAgICBvcGFjaXR5OiAwXG4gIH1cbn0pXG5cbmNvbnN0IGFuaW1hdGlvblN0eWxlcyA9IGNzcyh7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBoZWlnaHQ6IDAsXG4gIHRyYW5zaXRpb246IGBhbGwgJHtBTklNQVRJT05fRFVSQVRJT059bXMgJHthbmltYXRpb25FYXNpbmcuZGVjZWxlcmF0aW9ufWAsXG4gICcmW2RhdGEtc3RhdGU9XCJlbnRlcmluZ1wiXSwgJltkYXRhLXN0YXRlPVwiZW50ZXJlZFwiXSc6IHtcbiAgICBhbmltYXRpb246IGAke29wZW5BbmltYXRpb259ICR7QU5JTUFUSU9OX0RVUkFUSU9OfW1zICR7XG4gICAgICBhbmltYXRpb25FYXNpbmcuc3ByaW5nXG4gICAgfSBib3RoYFxuICB9LFxuICAnJltkYXRhLXN0YXRlPVwiZXhpdGluZ1wiXSc6IHtcbiAgICBhbmltYXRpb246IGAke2Nsb3NlQW5pbWF0aW9ufSAxMjBtcyAke2FuaW1hdGlvbkVhc2luZy5hY2NlbGVyYXRpb259IGJvdGhgXG4gIH1cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvYXN0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogVGhlIHotaW5kZXggb2YgdGhlIHRvYXN0LlxuICAgICAqL1xuICAgIHpJbmRleDogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIER1cmF0aW9uIG9mIHRoZSB0b2FzdC5cbiAgICAgKi9cbiAgICBkdXJhdGlvbjogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIHRoZSB0b2FzdCBpcyBhbGwgdGhlIHdheSBjbG9zZWQuXG4gICAgICovXG4gICAgb25SZW1vdmU6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHR5cGUgb2YgdGhlIGFsZXJ0LlxuICAgICAqL1xuICAgIGludGVudDogUHJvcFR5cGVzLm9uZU9mKFsnbm9uZScsICdzdWNjZXNzJywgJ3dhcm5pbmcnLCAnZGFuZ2VyJ10pXG4gICAgICAuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZSB0aXRsZSBvZiB0aGUgYWxlcnQuXG4gICAgICovXG4gICAgdGl0bGU6IFByb3BUeXBlcy5ub2RlLFxuXG4gICAgLyoqXG4gICAgICogRGVzY3JpcHRpb24gb2YgdGhlIGFsZXJ0LlxuICAgICAqL1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgc2hvdyBhIGNsb3NlIGljb24gYnV0dG9uIGluc2lkZSBvZiB0aGUgdG9hc3QuXG4gICAgICovXG4gICAgaGFzQ2xvc2VCdXR0b246IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiBmYWxzZSwgd2lsbCBjbG9zZSB0aGUgVG9hc3QgYW5kIGNhbGwgb25SZW1vdmUgd2hlbiBmaW5pc2hlZC5cbiAgICAgKi9cbiAgICBpc1Nob3duOiBQcm9wVHlwZXMuYm9vbFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBpbnRlbnQ6ICdub25lJ1xuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgaXNTaG93bjogdHJ1ZSxcbiAgICBoZWlnaHQ6IDBcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBpZiAocHJldlByb3BzLmlzU2hvd24gIT09IHRoaXMucHJvcHMuaXNTaG93bikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWRpZC11cGRhdGUtc2V0LXN0YXRlXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaXNTaG93bjogdGhpcy5wcm9wcy5pc1Nob3duXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc3RhcnRDbG9zZVRpbWVyKClcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuY2xlYXJDbG9zZVRpbWVyKClcbiAgfVxuXG4gIGNsb3NlID0gKCkgPT4ge1xuICAgIHRoaXMuY2xlYXJDbG9zZVRpbWVyKClcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzU2hvd246IGZhbHNlXG4gICAgfSlcbiAgfVxuXG4gIHN0YXJ0Q2xvc2VUaW1lciA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy5kdXJhdGlvbikge1xuICAgICAgdGhpcy5jbG9zZVRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuY2xvc2UoKVxuICAgICAgfSwgdGhpcy5wcm9wcy5kdXJhdGlvbiAqIDEwMDApXG4gICAgfVxuICB9XG5cbiAgY2xlYXJDbG9zZVRpbWVyID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmNsb3NlVGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmNsb3NlVGltZXIpXG4gICAgICB0aGlzLmNsb3NlVGltZXIgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlTW91c2VFbnRlciA9ICgpID0+IHtcbiAgICB0aGlzLmNsZWFyQ2xvc2VUaW1lcigpXG4gIH1cblxuICBoYW5kbGVNb3VzZUxlYXZlID0gKCkgPT4ge1xuICAgIHRoaXMuc3RhcnRDbG9zZVRpbWVyKClcbiAgfVxuXG4gIG9uUmVmID0gcmVmID0+IHtcbiAgICBpZiAocmVmID09PSBudWxsKSByZXR1cm5cblxuICAgIGNvbnN0IHsgaGVpZ2h0IH0gPSByZWYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaGVpZ2h0XG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFRyYW5zaXRpb25cbiAgICAgICAgYXBwZWFyXG4gICAgICAgIHVubW91bnRPbkV4aXRcbiAgICAgICAgdGltZW91dD17QU5JTUFUSU9OX0RVUkFUSU9OfVxuICAgICAgICBpbj17dGhpcy5zdGF0ZS5pc1Nob3dufVxuICAgICAgICBvbkV4aXRlZD17dGhpcy5wcm9wcy5vblJlbW92ZX1cbiAgICAgID5cbiAgICAgICAge3N0YXRlID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBkYXRhLXN0YXRlPXtzdGF0ZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YW5pbWF0aW9uU3R5bGVzfVxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXt0aGlzLmhhbmRsZU1vdXNlRW50ZXJ9XG4gICAgICAgICAgICBvbk1vdXNlTGVhdmU9e3RoaXMuaGFuZGxlTW91c2VMZWF2ZX1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGhlaWdodDogdGhpcy5zdGF0ZS5oZWlnaHQsXG4gICAgICAgICAgICAgIHpJbmRleDogdGhpcy5wcm9wcy56SW5kZXgsXG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogdGhpcy5zdGF0ZS5pc1Nob3duID8gMCA6IC10aGlzLnN0YXRlLmhlaWdodFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IHJlZj17dGhpcy5vblJlZn0gc3R5bGU9e3sgcGFkZGluZzogOCB9fT5cbiAgICAgICAgICAgICAgPEFsZXJ0XG4gICAgICAgICAgICAgICAgZmxleFNocmluaz17MH1cbiAgICAgICAgICAgICAgICBhcHBlYXJhbmNlPVwiY2FyZFwiXG4gICAgICAgICAgICAgICAgZWxldmF0aW9uPXszfVxuICAgICAgICAgICAgICAgIGludGVudD17dGhpcy5wcm9wcy5pbnRlbnR9XG4gICAgICAgICAgICAgICAgdGl0bGU9e3RoaXMucHJvcHMudGl0bGV9XG4gICAgICAgICAgICAgICAgaXNSZW1vdmVhYmxlPXt0aGlzLnByb3BzLmhhc0Nsb3NlQnV0dG9ufVxuICAgICAgICAgICAgICAgIG9uUmVtb3ZlPXsoKSA9PiB0aGlzLmNsb3NlKCl9XG4gICAgICAgICAgICAgICAgcG9pbnRlckV2ZW50cz1cImFsbFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgPC9BbGVydD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9UcmFuc2l0aW9uPlxuICAgIClcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxJ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