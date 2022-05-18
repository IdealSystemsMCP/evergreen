"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

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

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ScrollbarSize = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(ScrollbarSize, _PureComponent);

  var _super = _createSuper(ScrollbarSize);

  function ScrollbarSize() {
    var _this;

    (0, _classCallCheck2["default"])(this, ScrollbarSize);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      innerWidth: null,
      outerWidth: null
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleOuterRef", function (ref) {
      _this.outerRef = ref;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleInnerRef", function (ref) {
      _this.innerRef = ref;
    });
    return _this;
  }

  (0, _createClass2["default"])(ScrollbarSize, [{
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
      return /*#__PURE__*/_react["default"].createElement("div", {
        ref: this.handleOuterRef,
        "aria-hidden": true,
        style: {
          position: 'fixed',
          top: -500,
          left: -500,
          width: 100,
          overflowY: 'scroll'
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        ref: this.handleInnerRef
      }));
    }
  }]);
  return ScrollbarSize;
}(_react.PureComponent);

exports["default"] = ScrollbarSize;
ScrollbarSize.displayName = "ScrollbarSize";
(0, _defineProperty2["default"])(ScrollbarSize, "propTypes", {
  /**
   * Returns the size of the scrollbar by creating a hidden fixed div.
   */
  handleScrollbarSize: _propTypes["default"].func
});
(0, _defineProperty2["default"])(ScrollbarSize, "defaultProps", {
  handleScrollbarSize: function handleScrollbarSize() {}
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJTY3JvbGxiYXJTaXplIiwiaW5uZXJXaWR0aCIsIm91dGVyV2lkdGgiLCJyZWYiLCJvdXRlclJlZiIsImlubmVyUmVmIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJzZXRTdGF0ZSIsInN0YXRlIiwicHJvcHMiLCJoYW5kbGVTY3JvbGxiYXJTaXplIiwiaGFuZGxlT3V0ZXJSZWYiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJvdmVyZmxvd1kiLCJoYW5kbGVJbm5lclJlZiIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJmdW5jIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3RhYmxlL3NyYy9TY3JvbGxiYXJTaXplLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbGJhclNpemUgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBzaXplIG9mIHRoZSBzY3JvbGxiYXIgYnkgY3JlYXRpbmcgYSBoaWRkZW4gZml4ZWQgZGl2LlxuICAgICAqL1xuICAgIGhhbmRsZVNjcm9sbGJhclNpemU6IFByb3BUeXBlcy5mdW5jXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGhhbmRsZVNjcm9sbGJhclNpemU6ICgpID0+IHt9XG4gIH1cblxuICBzdGF0ZSA9IHtcbiAgICBpbm5lcldpZHRoOiBudWxsLFxuICAgIG91dGVyV2lkdGg6IG51bGxcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IGlubmVyV2lkdGggPSB0aGlzLmlubmVyUmVmLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoXG4gICAgY29uc3Qgb3V0ZXJXaWR0aCA9IHRoaXMub3V0ZXJSZWYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGhcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlubmVyV2lkdGgsXG4gICAgICBvdXRlcldpZHRoXG4gICAgfSlcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5pbm5lcldpZHRoICYmIHRoaXMuc3RhdGUub3V0ZXJXaWR0aCkge1xuICAgICAgdGhpcy5wcm9wcy5oYW5kbGVTY3JvbGxiYXJTaXplKFxuICAgICAgICB0aGlzLnN0YXRlLm91dGVyV2lkdGggLSB0aGlzLnN0YXRlLmlubmVyV2lkdGhcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBoYW5kbGVPdXRlclJlZiA9IHJlZiA9PiB7XG4gICAgdGhpcy5vdXRlclJlZiA9IHJlZlxuICB9XG5cbiAgaGFuZGxlSW5uZXJSZWYgPSByZWYgPT4ge1xuICAgIHRoaXMuaW5uZXJSZWYgPSByZWZcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICByZWY9e3RoaXMuaGFuZGxlT3V0ZXJSZWZ9XG4gICAgICAgIGFyaWEtaGlkZGVuXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgdG9wOiAtNTAwLFxuICAgICAgICAgIGxlZnQ6IC01MDAsXG4gICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICBvdmVyZmxvd1k6ICdzY3JvbGwnXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXYgcmVmPXt0aGlzLmhhbmRsZUlubmVyUmVmfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsYTs7Ozs7Ozs7Ozs7Ozs7OzhGQVlYO01BQ05DLFVBQVUsRUFBRSxJQUROO01BRU5DLFVBQVUsRUFBRTtJQUZOLEM7dUdBc0JTLFVBQUFDLEdBQUcsRUFBSTtNQUN0QixNQUFLQyxRQUFMLEdBQWdCRCxHQUFoQjtJQUNELEM7dUdBRWdCLFVBQUFBLEdBQUcsRUFBSTtNQUN0QixNQUFLRSxRQUFMLEdBQWdCRixHQUFoQjtJQUNELEM7Ozs7OztXQXZCRCw2QkFBb0I7TUFDbEIsSUFBTUYsVUFBVSxHQUFHLEtBQUtJLFFBQUwsQ0FBY0MscUJBQWQsR0FBc0NDLEtBQXpEO01BQ0EsSUFBTUwsVUFBVSxHQUFHLEtBQUtFLFFBQUwsQ0FBY0UscUJBQWQsR0FBc0NDLEtBQXpEO01BQ0EsS0FBS0MsUUFBTCxDQUFjO1FBQ1pQLFVBQVUsRUFBVkEsVUFEWTtRQUVaQyxVQUFVLEVBQVZBO01BRlksQ0FBZDtJQUlEOzs7V0FFRCw4QkFBcUI7TUFDbkIsSUFBSSxLQUFLTyxLQUFMLENBQVdSLFVBQVgsSUFBeUIsS0FBS1EsS0FBTCxDQUFXUCxVQUF4QyxFQUFvRDtRQUNsRCxLQUFLUSxLQUFMLENBQVdDLG1CQUFYLENBQ0UsS0FBS0YsS0FBTCxDQUFXUCxVQUFYLEdBQXdCLEtBQUtPLEtBQUwsQ0FBV1IsVUFEckM7TUFHRDtJQUNGOzs7V0FVRCxrQkFBUztNQUNQLG9CQUNFO1FBQ0UsR0FBRyxFQUFFLEtBQUtXLGNBRFo7UUFFRSxtQkFGRjtRQUdFLEtBQUssRUFBRTtVQUNMQyxRQUFRLEVBQUUsT0FETDtVQUVMQyxHQUFHLEVBQUUsQ0FBQyxHQUZEO1VBR0xDLElBQUksRUFBRSxDQUFDLEdBSEY7VUFJTFIsS0FBSyxFQUFFLEdBSkY7VUFLTFMsU0FBUyxFQUFFO1FBTE47TUFIVCxnQkFXRTtRQUFLLEdBQUcsRUFBRSxLQUFLQztNQUFmLEVBWEYsQ0FERjtJQWVEOzs7RUExRHdDQyxvQjs7O0FBQXRCbEIsYTtpQ0FBQUEsYSxlQUNBO0VBQ2pCO0FBQ0o7QUFDQTtFQUNJVyxtQkFBbUIsRUFBRVEscUJBQUEsQ0FBVUM7QUFKZCxDO2lDQURBcEIsYSxrQkFRRztFQUNwQlcsbUJBQW1CLEVBQUUsK0JBQU0sQ0FBRTtBQURULEMifQ==