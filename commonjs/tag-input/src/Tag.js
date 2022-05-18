"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _badges = require("../../badges");

var _icon = require("../../icon");

var _scales = require("../../scales");

var _excluded = ["children", "onRemove", "isRemovable"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Tag = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(Tag, _React$PureComponent);

  var _super = _createSuper(Tag);

  function Tag() {
    (0, _classCallCheck2["default"])(this, Tag);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Tag, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          onRemove = _this$props.onRemove,
          isRemovable = _this$props.isRemovable,
          props = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      var badgeStyles = {
        alignItems: 'center',
        display: 'inline-flex',
        fontWeight: 400,
        textTransform: 'none'
      };

      if (isRemovable) {
        badgeStyles.paddingRight = (0, _scales.minorScale)(1);
      }

      return /*#__PURE__*/_react["default"].createElement(_badges.Badge, (0, _extends2["default"])({
        isInteractive: true
      }, badgeStyles, props), children, isRemovable && /*#__PURE__*/_react["default"].createElement(_icon.Icon, {
        icon: "cross",
        marginLeft: (0, _scales.minorScale)(1),
        onClick: onRemove,
        size: (0, _scales.minorScale)(3)
      }));
    }
  }]);
  return Tag;
}(_react["default"].PureComponent);

Tag.displayName = "Tag";
(0, _defineProperty2["default"])(Tag, "propTypes", {
  /** The badge content */
  children: _propTypes["default"].node,

  /**
   * Callback invoked when the removal icon is clicked.
   * (event) => void
   */
  onRemove: _propTypes["default"].func,

  /** Whether or not the tag can be removed. */
  isRemovable: _propTypes["default"].bool
});
var _default = Tag;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJUYWciLCJwcm9wcyIsImNoaWxkcmVuIiwib25SZW1vdmUiLCJpc1JlbW92YWJsZSIsImJhZGdlU3R5bGVzIiwiYWxpZ25JdGVtcyIsImRpc3BsYXkiLCJmb250V2VpZ2h0IiwidGV4dFRyYW5zZm9ybSIsInBhZGRpbmdSaWdodCIsIm1pbm9yU2NhbGUiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJub2RlIiwiZnVuYyIsImJvb2wiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdGFnLWlucHV0L3NyYy9UYWcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAb3ZlcnZpZXcgVGFnSW5wdXQgYWNjZXB0cyBtdWx0aXBsZSB2YWx1ZXMgdGhhdCBjYW4gYmUgaW5kaXZpZHVhbGx5IHJlbW92ZWRcbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBCYWRnZSB9IGZyb20gJy4uLy4uL2JhZGdlcydcbmltcG9ydCB7IEljb24gfSBmcm9tICcuLi8uLi9pY29uJ1xuaW1wb3J0IHsgbWlub3JTY2FsZSB9IGZyb20gJy4uLy4uL3NjYWxlcydcblxuY2xhc3MgVGFnIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqIFRoZSBiYWRnZSBjb250ZW50ICovXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIGludm9rZWQgd2hlbiB0aGUgcmVtb3ZhbCBpY29uIGlzIGNsaWNrZWQuXG4gICAgICogKGV2ZW50KSA9PiB2b2lkXG4gICAgICovXG4gICAgb25SZW1vdmU6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKiBXaGV0aGVyIG9yIG5vdCB0aGUgdGFnIGNhbiBiZSByZW1vdmVkLiAqL1xuICAgIGlzUmVtb3ZhYmxlOiBQcm9wVHlwZXMuYm9vbFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIG9uUmVtb3ZlLCBpc1JlbW92YWJsZSwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IGJhZGdlU3R5bGVzID0ge1xuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgdGV4dFRyYW5zZm9ybTogJ25vbmUnXG4gICAgfVxuXG4gICAgaWYgKGlzUmVtb3ZhYmxlKSB7XG4gICAgICBiYWRnZVN0eWxlcy5wYWRkaW5nUmlnaHQgPSBtaW5vclNjYWxlKDEpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCYWRnZSBpc0ludGVyYWN0aXZlIHsuLi5iYWRnZVN0eWxlc30gey4uLnByb3BzfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICB7aXNSZW1vdmFibGUgJiYgKFxuICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICBpY29uPVwiY3Jvc3NcIlxuICAgICAgICAgICAgbWFyZ2luTGVmdD17bWlub3JTY2FsZSgxKX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e29uUmVtb3ZlfVxuICAgICAgICAgICAgc2l6ZT17bWlub3JTY2FsZSgzKX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9CYWRnZT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFnXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7SUFFTUEsRzs7Ozs7Ozs7Ozs7O1dBYUosa0JBQVM7TUFDUCxrQkFBc0QsS0FBS0MsS0FBM0Q7TUFBQSxJQUFRQyxRQUFSLGVBQVFBLFFBQVI7TUFBQSxJQUFrQkMsUUFBbEIsZUFBa0JBLFFBQWxCO01BQUEsSUFBNEJDLFdBQTVCLGVBQTRCQSxXQUE1QjtNQUFBLElBQTRDSCxLQUE1QztNQUVBLElBQU1JLFdBQVcsR0FBRztRQUNsQkMsVUFBVSxFQUFFLFFBRE07UUFFbEJDLE9BQU8sRUFBRSxhQUZTO1FBR2xCQyxVQUFVLEVBQUUsR0FITTtRQUlsQkMsYUFBYSxFQUFFO01BSkcsQ0FBcEI7O01BT0EsSUFBSUwsV0FBSixFQUFpQjtRQUNmQyxXQUFXLENBQUNLLFlBQVosR0FBMkIsSUFBQUMsa0JBQUEsRUFBVyxDQUFYLENBQTNCO01BQ0Q7O01BRUQsb0JBQ0UsZ0NBQUMsYUFBRDtRQUFPLGFBQWE7TUFBcEIsR0FBeUJOLFdBQXpCLEVBQTBDSixLQUExQyxHQUNHQyxRQURILEVBRUdFLFdBQVcsaUJBQ1YsZ0NBQUMsVUFBRDtRQUNFLElBQUksRUFBQyxPQURQO1FBRUUsVUFBVSxFQUFFLElBQUFPLGtCQUFBLEVBQVcsQ0FBWCxDQUZkO1FBR0UsT0FBTyxFQUFFUixRQUhYO1FBSUUsSUFBSSxFQUFFLElBQUFRLGtCQUFBLEVBQVcsQ0FBWDtNQUpSLEVBSEosQ0FERjtJQWFEOzs7RUF4Q2VDLGlCQUFBLENBQU1DLGE7O0FBQWxCYixHO2lDQUFBQSxHLGVBQ2U7RUFDakI7RUFDQUUsUUFBUSxFQUFFWSxxQkFBQSxDQUFVQyxJQUZIOztFQUdqQjtBQUNKO0FBQ0E7QUFDQTtFQUNJWixRQUFRLEVBQUVXLHFCQUFBLENBQVVFLElBUEg7O0VBUWpCO0VBQ0FaLFdBQVcsRUFBRVUscUJBQUEsQ0FBVUc7QUFUTixDO2VBMENOakIsRyJ9