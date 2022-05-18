import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

var ScrollbarSize = /*#__PURE__*/function (_PureComponent) {
  _inherits(ScrollbarSize, _PureComponent);

  var _super = _createSuper(ScrollbarSize);

  function ScrollbarSize() {
    var _this;

    _classCallCheck(this, ScrollbarSize);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      innerWidth: null,
      outerWidth: null
    });

    _defineProperty(_assertThisInitialized(_this), "handleOuterRef", function (ref) {
      _this.outerRef = ref;
    });

    _defineProperty(_assertThisInitialized(_this), "handleInnerRef", function (ref) {
      _this.innerRef = ref;
    });

    return _this;
  }

  _createClass(ScrollbarSize, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var innerWidth = this.innerRef.getBoundingClientRect().width;
      var outerWidth = this.outerRef.getBoundingClientRect().width;
      this.setState({
        innerWidth: innerWidth,
        outerWidth: outerWidth
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.state.innerWidth && this.state.outerWidth) {
        this.props.handleScrollbarSize(this.state.outerWidth - this.state.innerWidth);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        ref: this.handleOuterRef,
        "aria-hidden": true,
        style: {
          position: 'fixed',
          top: -500,
          left: -500,
          width: 100,
          overflowY: 'scroll'
        }
      }, /*#__PURE__*/React.createElement("div", {
        ref: this.handleInnerRef
      }));
    }
  }]);

  return ScrollbarSize;
}(PureComponent);

ScrollbarSize.displayName = "ScrollbarSize";

_defineProperty(ScrollbarSize, "propTypes", {
  /**
   * Returns the size of the scrollbar by creating a hidden fixed div.
   */
  handleScrollbarSize: PropTypes.func
});

_defineProperty(ScrollbarSize, "defaultProps", {
  handleScrollbarSize: function handleScrollbarSize() {}
});

export { ScrollbarSize as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJTY3JvbGxiYXJTaXplIiwiaW5uZXJXaWR0aCIsIm91dGVyV2lkdGgiLCJyZWYiLCJvdXRlclJlZiIsImlubmVyUmVmIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJzZXRTdGF0ZSIsInN0YXRlIiwicHJvcHMiLCJoYW5kbGVTY3JvbGxiYXJTaXplIiwiaGFuZGxlT3V0ZXJSZWYiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJvdmVyZmxvd1kiLCJoYW5kbGVJbm5lclJlZiIsImZ1bmMiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdGFibGUvc3JjL1Njcm9sbGJhclNpemUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nyb2xsYmFyU2l6ZSBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHNpemUgb2YgdGhlIHNjcm9sbGJhciBieSBjcmVhdGluZyBhIGhpZGRlbiBmaXhlZCBkaXYuXG4gICAgICovXG4gICAgaGFuZGxlU2Nyb2xsYmFyU2l6ZTogUHJvcFR5cGVzLmZ1bmNcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgaGFuZGxlU2Nyb2xsYmFyU2l6ZTogKCkgPT4ge31cbiAgfVxuXG4gIHN0YXRlID0ge1xuICAgIGlubmVyV2lkdGg6IG51bGwsXG4gICAgb3V0ZXJXaWR0aDogbnVsbFxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgaW5uZXJXaWR0aCA9IHRoaXMuaW5uZXJSZWYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGhcbiAgICBjb25zdCBvdXRlcldpZHRoID0gdGhpcy5vdXRlclJlZi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aFxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaW5uZXJXaWR0aCxcbiAgICAgIG91dGVyV2lkdGhcbiAgICB9KVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmlubmVyV2lkdGggJiYgdGhpcy5zdGF0ZS5vdXRlcldpZHRoKSB7XG4gICAgICB0aGlzLnByb3BzLmhhbmRsZVNjcm9sbGJhclNpemUoXG4gICAgICAgIHRoaXMuc3RhdGUub3V0ZXJXaWR0aCAtIHRoaXMuc3RhdGUuaW5uZXJXaWR0aFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZU91dGVyUmVmID0gcmVmID0+IHtcbiAgICB0aGlzLm91dGVyUmVmID0gcmVmXG4gIH1cblxuICBoYW5kbGVJbm5lclJlZiA9IHJlZiA9PiB7XG4gICAgdGhpcy5pbm5lclJlZiA9IHJlZlxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIHJlZj17dGhpcy5oYW5kbGVPdXRlclJlZn1cbiAgICAgICAgYXJpYS1oaWRkZW5cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICB0b3A6IC01MDAsXG4gICAgICAgICAgbGVmdDogLTUwMCxcbiAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgIG92ZXJmbG93WTogJ3Njcm9sbCdcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdiByZWY9e3RoaXMuaGFuZGxlSW5uZXJSZWZ9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsYUFBaEIsUUFBcUMsT0FBckM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCOztJQUVxQkMsYTs7Ozs7Ozs7Ozs7Ozs7Ozs0REFZWDtNQUNOQyxVQUFVLEVBQUUsSUFETjtNQUVOQyxVQUFVLEVBQUU7SUFGTixDOztxRUFzQlMsVUFBQUMsR0FBRyxFQUFJO01BQ3RCLE1BQUtDLFFBQUwsR0FBZ0JELEdBQWhCO0lBQ0QsQzs7cUVBRWdCLFVBQUFBLEdBQUcsRUFBSTtNQUN0QixNQUFLRSxRQUFMLEdBQWdCRixHQUFoQjtJQUNELEM7Ozs7Ozs7V0F2QkQsNkJBQW9CO01BQ2xCLElBQU1GLFVBQVUsR0FBRyxLQUFLSSxRQUFMLENBQWNDLHFCQUFkLEdBQXNDQyxLQUF6RDtNQUNBLElBQU1MLFVBQVUsR0FBRyxLQUFLRSxRQUFMLENBQWNFLHFCQUFkLEdBQXNDQyxLQUF6RDtNQUNBLEtBQUtDLFFBQUwsQ0FBYztRQUNaUCxVQUFVLEVBQVZBLFVBRFk7UUFFWkMsVUFBVSxFQUFWQTtNQUZZLENBQWQ7SUFJRDs7O1dBRUQsOEJBQXFCO01BQ25CLElBQUksS0FBS08sS0FBTCxDQUFXUixVQUFYLElBQXlCLEtBQUtRLEtBQUwsQ0FBV1AsVUFBeEMsRUFBb0Q7UUFDbEQsS0FBS1EsS0FBTCxDQUFXQyxtQkFBWCxDQUNFLEtBQUtGLEtBQUwsQ0FBV1AsVUFBWCxHQUF3QixLQUFLTyxLQUFMLENBQVdSLFVBRHJDO01BR0Q7SUFDRjs7O1dBVUQsa0JBQVM7TUFDUCxvQkFDRTtRQUNFLEdBQUcsRUFBRSxLQUFLVyxjQURaO1FBRUUsbUJBRkY7UUFHRSxLQUFLLEVBQUU7VUFDTEMsUUFBUSxFQUFFLE9BREw7VUFFTEMsR0FBRyxFQUFFLENBQUMsR0FGRDtVQUdMQyxJQUFJLEVBQUUsQ0FBQyxHQUhGO1VBSUxSLEtBQUssRUFBRSxHQUpGO1VBS0xTLFNBQVMsRUFBRTtRQUxOO01BSFQsZ0JBV0U7UUFBSyxHQUFHLEVBQUUsS0FBS0M7TUFBZixFQVhGLENBREY7SUFlRDs7OztFQTFEd0NuQixhOztBQUF0QkUsYTs7Z0JBQUFBLGEsZUFDQTtFQUNqQjtBQUNKO0FBQ0E7RUFDSVcsbUJBQW1CLEVBQUVaLFNBQVMsQ0FBQ21CO0FBSmQsQzs7Z0JBREFsQixhLGtCQVFHO0VBQ3BCVyxtQkFBbUIsRUFBRSwrQkFBTSxDQUFFO0FBRFQsQzs7U0FSSFgsYSJ9