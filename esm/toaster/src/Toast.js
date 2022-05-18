import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React from 'react';
import { css } from 'glamor';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';
import Alert from '../../alert/src/Alert';
var animationEasing = {
  deceleration: "cubic-bezier(0.0, 0.0, 0.2, 1)",
  acceleration: "cubic-bezier(0.4, 0.0, 1, 1)",
  spring: "cubic-bezier(0.175, 0.885, 0.320, 1.175)"
};
var ANIMATION_DURATION = 240;
var openAnimation = css.keyframes('openAnimation', {
  from: {
    opacity: 0,
    transform: 'translateY(-120%)'
  },
  to: {
    transform: 'translateY(0)'
  }
});
var closeAnimation = css.keyframes('closeAnimation', {
  from: {
    transform: 'scale(1)',
    opacity: 1
  },
  to: {
    transform: 'scale(0.9)',
    opacity: 0
  }
});
var animationStyles = css({
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
  _inherits(Toast, _React$PureComponent);

  var _super = _createSuper(Toast);

  function Toast() {
    var _this;

    _classCallCheck(this, Toast);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isShown: true,
      height: 0
    });

    _defineProperty(_assertThisInitialized(_this), "close", function () {
      _this.clearCloseTimer();

      _this.setState({
        isShown: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "startCloseTimer", function () {
      if (_this.props.duration) {
        _this.closeTimer = setTimeout(function () {
          _this.close();
        }, _this.props.duration * 1000);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "clearCloseTimer", function () {
      if (_this.closeTimer) {
        clearTimeout(_this.closeTimer);
        _this.closeTimer = null;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseEnter", function () {
      _this.clearCloseTimer();
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseLeave", function () {
      _this.startCloseTimer();
    });

    _defineProperty(_assertThisInitialized(_this), "onRef", function (ref) {
      if (ref === null) return;

      var _ref$getBoundingClien = ref.getBoundingClientRect(),
          height = _ref$getBoundingClien.height;

      _this.setState({
        height: height
      });
    });

    return _this;
  }

  _createClass(Toast, [{
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

      return /*#__PURE__*/React.createElement(Transition, {
        appear: true,
        unmountOnExit: true,
        timeout: ANIMATION_DURATION,
        "in": this.state.isShown,
        onExited: this.props.onRemove
      }, function (state) {
        return /*#__PURE__*/React.createElement("div", {
          "data-state": state,
          className: animationStyles,
          onMouseEnter: _this2.handleMouseEnter,
          onMouseLeave: _this2.handleMouseLeave,
          style: {
            height: _this2.state.height,
            zIndex: _this2.props.zIndex,
            marginBottom: _this2.state.isShown ? 0 : -_this2.state.height
          }
        }, /*#__PURE__*/React.createElement("div", {
          ref: _this2.onRef,
          style: {
            padding: 8
          }
        }, /*#__PURE__*/React.createElement(Alert, {
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
}(React.PureComponent);

Toast.displayName = "Toast";

_defineProperty(Toast, "propTypes", {
  /**
   * The z-index of the toast.
   */
  zIndex: PropTypes.number,

  /**
   * Duration of the toast.
   */
  duration: PropTypes.number,

  /**
   * Function called when the toast is all the way closed.
   */
  onRemove: PropTypes.func,

  /**
   * The type of the alert.
   */
  intent: PropTypes.oneOf(['none', 'success', 'warning', 'danger']).isRequired,

  /**
   * The title of the alert.
   */
  title: PropTypes.node,

  /**
   * Description of the alert.
   */
  children: PropTypes.node,

  /**
   * When true, show a close icon button inside of the toast.
   */
  hasCloseButton: PropTypes.bool,

  /**
   * When false, will close the Toast and call onRemove when finished.
   */
  isShown: PropTypes.bool
});

_defineProperty(Toast, "defaultProps", {
  intent: 'none'
});

export { Toast as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsImNzcyIsIlByb3BUeXBlcyIsIlRyYW5zaXRpb24iLCJBbGVydCIsImFuaW1hdGlvbkVhc2luZyIsImRlY2VsZXJhdGlvbiIsImFjY2VsZXJhdGlvbiIsInNwcmluZyIsIkFOSU1BVElPTl9EVVJBVElPTiIsIm9wZW5BbmltYXRpb24iLCJrZXlmcmFtZXMiLCJmcm9tIiwib3BhY2l0eSIsInRyYW5zZm9ybSIsInRvIiwiY2xvc2VBbmltYXRpb24iLCJhbmltYXRpb25TdHlsZXMiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJoZWlnaHQiLCJ0cmFuc2l0aW9uIiwiYW5pbWF0aW9uIiwiVG9hc3QiLCJpc1Nob3duIiwiY2xlYXJDbG9zZVRpbWVyIiwic2V0U3RhdGUiLCJwcm9wcyIsImR1cmF0aW9uIiwiY2xvc2VUaW1lciIsInNldFRpbWVvdXQiLCJjbG9zZSIsImNsZWFyVGltZW91dCIsInN0YXJ0Q2xvc2VUaW1lciIsInJlZiIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInByZXZQcm9wcyIsInN0YXRlIiwib25SZW1vdmUiLCJoYW5kbGVNb3VzZUVudGVyIiwiaGFuZGxlTW91c2VMZWF2ZSIsInpJbmRleCIsIm1hcmdpbkJvdHRvbSIsIm9uUmVmIiwicGFkZGluZyIsImludGVudCIsInRpdGxlIiwiaGFzQ2xvc2VCdXR0b24iLCJjaGlsZHJlbiIsIlB1cmVDb21wb25lbnQiLCJudW1iZXIiLCJmdW5jIiwib25lT2YiLCJpc1JlcXVpcmVkIiwibm9kZSIsImJvb2wiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdG9hc3Rlci9zcmMvVG9hc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnZ2xhbW9yJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFRyYW5zaXRpb24gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cC9UcmFuc2l0aW9uJ1xuaW1wb3J0IEFsZXJ0IGZyb20gJy4uLy4uL2FsZXJ0L3NyYy9BbGVydCdcblxuY29uc3QgYW5pbWF0aW9uRWFzaW5nID0ge1xuICBkZWNlbGVyYXRpb246IGBjdWJpYy1iZXppZXIoMC4wLCAwLjAsIDAuMiwgMSlgLFxuICBhY2NlbGVyYXRpb246IGBjdWJpYy1iZXppZXIoMC40LCAwLjAsIDEsIDEpYCxcbiAgc3ByaW5nOiBgY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMjAsIDEuMTc1KWBcbn1cblxuY29uc3QgQU5JTUFUSU9OX0RVUkFUSU9OID0gMjQwXG5cbmNvbnN0IG9wZW5BbmltYXRpb24gPSBjc3Mua2V5ZnJhbWVzKCdvcGVuQW5pbWF0aW9uJywge1xuICBmcm9tOiB7XG4gICAgb3BhY2l0eTogMCxcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0xMjAlKSdcbiAgfSxcbiAgdG86IHtcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJ1xuICB9XG59KVxuXG5jb25zdCBjbG9zZUFuaW1hdGlvbiA9IGNzcy5rZXlmcmFtZXMoJ2Nsb3NlQW5pbWF0aW9uJywge1xuICBmcm9tOiB7XG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknLFxuICAgIG9wYWNpdHk6IDFcbiAgfSxcbiAgdG86IHtcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgwLjkpJyxcbiAgICBvcGFjaXR5OiAwXG4gIH1cbn0pXG5cbmNvbnN0IGFuaW1hdGlvblN0eWxlcyA9IGNzcyh7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBoZWlnaHQ6IDAsXG4gIHRyYW5zaXRpb246IGBhbGwgJHtBTklNQVRJT05fRFVSQVRJT059bXMgJHthbmltYXRpb25FYXNpbmcuZGVjZWxlcmF0aW9ufWAsXG4gICcmW2RhdGEtc3RhdGU9XCJlbnRlcmluZ1wiXSwgJltkYXRhLXN0YXRlPVwiZW50ZXJlZFwiXSc6IHtcbiAgICBhbmltYXRpb246IGAke29wZW5BbmltYXRpb259ICR7QU5JTUFUSU9OX0RVUkFUSU9OfW1zICR7XG4gICAgICBhbmltYXRpb25FYXNpbmcuc3ByaW5nXG4gICAgfSBib3RoYFxuICB9LFxuICAnJltkYXRhLXN0YXRlPVwiZXhpdGluZ1wiXSc6IHtcbiAgICBhbmltYXRpb246IGAke2Nsb3NlQW5pbWF0aW9ufSAxMjBtcyAke2FuaW1hdGlvbkVhc2luZy5hY2NlbGVyYXRpb259IGJvdGhgXG4gIH1cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvYXN0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogVGhlIHotaW5kZXggb2YgdGhlIHRvYXN0LlxuICAgICAqL1xuICAgIHpJbmRleDogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIER1cmF0aW9uIG9mIHRoZSB0b2FzdC5cbiAgICAgKi9cbiAgICBkdXJhdGlvbjogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIHRoZSB0b2FzdCBpcyBhbGwgdGhlIHdheSBjbG9zZWQuXG4gICAgICovXG4gICAgb25SZW1vdmU6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHR5cGUgb2YgdGhlIGFsZXJ0LlxuICAgICAqL1xuICAgIGludGVudDogUHJvcFR5cGVzLm9uZU9mKFsnbm9uZScsICdzdWNjZXNzJywgJ3dhcm5pbmcnLCAnZGFuZ2VyJ10pXG4gICAgICAuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZSB0aXRsZSBvZiB0aGUgYWxlcnQuXG4gICAgICovXG4gICAgdGl0bGU6IFByb3BUeXBlcy5ub2RlLFxuXG4gICAgLyoqXG4gICAgICogRGVzY3JpcHRpb24gb2YgdGhlIGFsZXJ0LlxuICAgICAqL1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgc2hvdyBhIGNsb3NlIGljb24gYnV0dG9uIGluc2lkZSBvZiB0aGUgdG9hc3QuXG4gICAgICovXG4gICAgaGFzQ2xvc2VCdXR0b246IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiBmYWxzZSwgd2lsbCBjbG9zZSB0aGUgVG9hc3QgYW5kIGNhbGwgb25SZW1vdmUgd2hlbiBmaW5pc2hlZC5cbiAgICAgKi9cbiAgICBpc1Nob3duOiBQcm9wVHlwZXMuYm9vbFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBpbnRlbnQ6ICdub25lJ1xuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgaXNTaG93bjogdHJ1ZSxcbiAgICBoZWlnaHQ6IDBcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBpZiAocHJldlByb3BzLmlzU2hvd24gIT09IHRoaXMucHJvcHMuaXNTaG93bikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWRpZC11cGRhdGUtc2V0LXN0YXRlXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaXNTaG93bjogdGhpcy5wcm9wcy5pc1Nob3duXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc3RhcnRDbG9zZVRpbWVyKClcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuY2xlYXJDbG9zZVRpbWVyKClcbiAgfVxuXG4gIGNsb3NlID0gKCkgPT4ge1xuICAgIHRoaXMuY2xlYXJDbG9zZVRpbWVyKClcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzU2hvd246IGZhbHNlXG4gICAgfSlcbiAgfVxuXG4gIHN0YXJ0Q2xvc2VUaW1lciA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy5kdXJhdGlvbikge1xuICAgICAgdGhpcy5jbG9zZVRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuY2xvc2UoKVxuICAgICAgfSwgdGhpcy5wcm9wcy5kdXJhdGlvbiAqIDEwMDApXG4gICAgfVxuICB9XG5cbiAgY2xlYXJDbG9zZVRpbWVyID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmNsb3NlVGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmNsb3NlVGltZXIpXG4gICAgICB0aGlzLmNsb3NlVGltZXIgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlTW91c2VFbnRlciA9ICgpID0+IHtcbiAgICB0aGlzLmNsZWFyQ2xvc2VUaW1lcigpXG4gIH1cblxuICBoYW5kbGVNb3VzZUxlYXZlID0gKCkgPT4ge1xuICAgIHRoaXMuc3RhcnRDbG9zZVRpbWVyKClcbiAgfVxuXG4gIG9uUmVmID0gcmVmID0+IHtcbiAgICBpZiAocmVmID09PSBudWxsKSByZXR1cm5cblxuICAgIGNvbnN0IHsgaGVpZ2h0IH0gPSByZWYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaGVpZ2h0XG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFRyYW5zaXRpb25cbiAgICAgICAgYXBwZWFyXG4gICAgICAgIHVubW91bnRPbkV4aXRcbiAgICAgICAgdGltZW91dD17QU5JTUFUSU9OX0RVUkFUSU9OfVxuICAgICAgICBpbj17dGhpcy5zdGF0ZS5pc1Nob3dufVxuICAgICAgICBvbkV4aXRlZD17dGhpcy5wcm9wcy5vblJlbW92ZX1cbiAgICAgID5cbiAgICAgICAge3N0YXRlID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBkYXRhLXN0YXRlPXtzdGF0ZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YW5pbWF0aW9uU3R5bGVzfVxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXt0aGlzLmhhbmRsZU1vdXNlRW50ZXJ9XG4gICAgICAgICAgICBvbk1vdXNlTGVhdmU9e3RoaXMuaGFuZGxlTW91c2VMZWF2ZX1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGhlaWdodDogdGhpcy5zdGF0ZS5oZWlnaHQsXG4gICAgICAgICAgICAgIHpJbmRleDogdGhpcy5wcm9wcy56SW5kZXgsXG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogdGhpcy5zdGF0ZS5pc1Nob3duID8gMCA6IC10aGlzLnN0YXRlLmhlaWdodFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IHJlZj17dGhpcy5vblJlZn0gc3R5bGU9e3sgcGFkZGluZzogOCB9fT5cbiAgICAgICAgICAgICAgPEFsZXJ0XG4gICAgICAgICAgICAgICAgZmxleFNocmluaz17MH1cbiAgICAgICAgICAgICAgICBhcHBlYXJhbmNlPVwiY2FyZFwiXG4gICAgICAgICAgICAgICAgZWxldmF0aW9uPXszfVxuICAgICAgICAgICAgICAgIGludGVudD17dGhpcy5wcm9wcy5pbnRlbnR9XG4gICAgICAgICAgICAgICAgdGl0bGU9e3RoaXMucHJvcHMudGl0bGV9XG4gICAgICAgICAgICAgICAgaXNSZW1vdmVhYmxlPXt0aGlzLnByb3BzLmhhc0Nsb3NlQnV0dG9ufVxuICAgICAgICAgICAgICAgIG9uUmVtb3ZlPXsoKSA9PiB0aGlzLmNsb3NlKCl9XG4gICAgICAgICAgICAgICAgcG9pbnRlckV2ZW50cz1cImFsbFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgPC9BbGVydD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9UcmFuc2l0aW9uPlxuICAgIClcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FB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