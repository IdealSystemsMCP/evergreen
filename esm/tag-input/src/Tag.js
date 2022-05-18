import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _excluded = ["children", "onRemove", "isRemovable"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * @overview TagInput accepts multiple values that can be individually removed
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from '../../badges';
import { Icon } from '../../icon';
import { minorScale } from '../../scales';

var Tag = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Tag, _React$PureComponent);

  var _super = _createSuper(Tag);

  function Tag() {
    _classCallCheck(this, Tag);

    return _super.apply(this, arguments);
  }

  _createClass(Tag, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          onRemove = _this$props.onRemove,
          isRemovable = _this$props.isRemovable,
          props = _objectWithoutProperties(_this$props, _excluded);

      var badgeStyles = {
        alignItems: 'center',
        display: 'inline-flex',
        fontWeight: 400,
        textTransform: 'none'
      };

      if (isRemovable) {
        badgeStyles.paddingRight = minorScale(1);
      }

      return /*#__PURE__*/React.createElement(Badge, _extends({
        isInteractive: true
      }, badgeStyles, props), children, isRemovable && /*#__PURE__*/React.createElement(Icon, {
        icon: "cross",
        marginLeft: minorScale(1),
        onClick: onRemove,
        size: minorScale(3)
      }));
    }
  }]);

  return Tag;
}(React.PureComponent);

Tag.displayName = "Tag";

_defineProperty(Tag, "propTypes", {
  /** The badge content */
  children: PropTypes.node,

  /**
   * Callback invoked when the removal icon is clicked.
   * (event) => void
   */
  onRemove: PropTypes.func,

  /** Whether or not the tag can be removed. */
  isRemovable: PropTypes.bool
});

export default Tag;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIkJhZGdlIiwiSWNvbiIsIm1pbm9yU2NhbGUiLCJUYWciLCJwcm9wcyIsImNoaWxkcmVuIiwib25SZW1vdmUiLCJpc1JlbW92YWJsZSIsImJhZGdlU3R5bGVzIiwiYWxpZ25JdGVtcyIsImRpc3BsYXkiLCJmb250V2VpZ2h0IiwidGV4dFRyYW5zZm9ybSIsInBhZGRpbmdSaWdodCIsIlB1cmVDb21wb25lbnQiLCJub2RlIiwiZnVuYyIsImJvb2wiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdGFnLWlucHV0L3NyYy9UYWcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAb3ZlcnZpZXcgVGFnSW5wdXQgYWNjZXB0cyBtdWx0aXBsZSB2YWx1ZXMgdGhhdCBjYW4gYmUgaW5kaXZpZHVhbGx5IHJlbW92ZWRcbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBCYWRnZSB9IGZyb20gJy4uLy4uL2JhZGdlcydcbmltcG9ydCB7IEljb24gfSBmcm9tICcuLi8uLi9pY29uJ1xuaW1wb3J0IHsgbWlub3JTY2FsZSB9IGZyb20gJy4uLy4uL3NjYWxlcydcblxuY2xhc3MgVGFnIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqIFRoZSBiYWRnZSBjb250ZW50ICovXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIGludm9rZWQgd2hlbiB0aGUgcmVtb3ZhbCBpY29uIGlzIGNsaWNrZWQuXG4gICAgICogKGV2ZW50KSA9PiB2b2lkXG4gICAgICovXG4gICAgb25SZW1vdmU6IFByb3BUeXBlcy5mdW5jLFxuICAgIC8qKiBXaGV0aGVyIG9yIG5vdCB0aGUgdGFnIGNhbiBiZSByZW1vdmVkLiAqL1xuICAgIGlzUmVtb3ZhYmxlOiBQcm9wVHlwZXMuYm9vbFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIG9uUmVtb3ZlLCBpc1JlbW92YWJsZSwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IGJhZGdlU3R5bGVzID0ge1xuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgdGV4dFRyYW5zZm9ybTogJ25vbmUnXG4gICAgfVxuXG4gICAgaWYgKGlzUmVtb3ZhYmxlKSB7XG4gICAgICBiYWRnZVN0eWxlcy5wYWRkaW5nUmlnaHQgPSBtaW5vclNjYWxlKDEpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCYWRnZSBpc0ludGVyYWN0aXZlIHsuLi5iYWRnZVN0eWxlc30gey4uLnByb3BzfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICB7aXNSZW1vdmFibGUgJiYgKFxuICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICBpY29uPVwiY3Jvc3NcIlxuICAgICAgICAgICAgbWFyZ2luTGVmdD17bWlub3JTY2FsZSgxKX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e29uUmVtb3ZlfVxuICAgICAgICAgICAgc2l6ZT17bWlub3JTY2FsZSgzKX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9CYWRnZT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFnXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxLQUFULFFBQXNCLGNBQXRCO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQixZQUFyQjtBQUNBLFNBQVNDLFVBQVQsUUFBMkIsY0FBM0I7O0lBRU1DLEc7Ozs7Ozs7Ozs7Ozs7V0FhSixrQkFBUztNQUNQLGtCQUFzRCxLQUFLQyxLQUEzRDtNQUFBLElBQVFDLFFBQVIsZUFBUUEsUUFBUjtNQUFBLElBQWtCQyxRQUFsQixlQUFrQkEsUUFBbEI7TUFBQSxJQUE0QkMsV0FBNUIsZUFBNEJBLFdBQTVCO01BQUEsSUFBNENILEtBQTVDOztNQUVBLElBQU1JLFdBQVcsR0FBRztRQUNsQkMsVUFBVSxFQUFFLFFBRE07UUFFbEJDLE9BQU8sRUFBRSxhQUZTO1FBR2xCQyxVQUFVLEVBQUUsR0FITTtRQUlsQkMsYUFBYSxFQUFFO01BSkcsQ0FBcEI7O01BT0EsSUFBSUwsV0FBSixFQUFpQjtRQUNmQyxXQUFXLENBQUNLLFlBQVosR0FBMkJYLFVBQVUsQ0FBQyxDQUFELENBQXJDO01BQ0Q7O01BRUQsb0JBQ0Usb0JBQUMsS0FBRDtRQUFPLGFBQWE7TUFBcEIsR0FBeUJNLFdBQXpCLEVBQTBDSixLQUExQyxHQUNHQyxRQURILEVBRUdFLFdBQVcsaUJBQ1Ysb0JBQUMsSUFBRDtRQUNFLElBQUksRUFBQyxPQURQO1FBRUUsVUFBVSxFQUFFTCxVQUFVLENBQUMsQ0FBRCxDQUZ4QjtRQUdFLE9BQU8sRUFBRUksUUFIWDtRQUlFLElBQUksRUFBRUosVUFBVSxDQUFDLENBQUQ7TUFKbEIsRUFISixDQURGO0lBYUQ7Ozs7RUF4Q2VKLEtBQUssQ0FBQ2dCLGE7O0FBQWxCWCxHOztnQkFBQUEsRyxlQUNlO0VBQ2pCO0VBQ0FFLFFBQVEsRUFBRU4sU0FBUyxDQUFDZ0IsSUFGSDs7RUFHakI7QUFDSjtBQUNBO0FBQ0E7RUFDSVQsUUFBUSxFQUFFUCxTQUFTLENBQUNpQixJQVBIOztFQVFqQjtFQUNBVCxXQUFXLEVBQUVSLFNBQVMsQ0FBQ2tCO0FBVE4sQzs7QUEwQ3JCLGVBQWVkLEdBQWYifQ==