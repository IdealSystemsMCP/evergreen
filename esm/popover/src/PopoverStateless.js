import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _excluded = ["children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Card } from '../../layers';

var PopoverStateless = /*#__PURE__*/function (_PureComponent) {
  _inherits(PopoverStateless, _PureComponent);

  var _super = _createSuper(PopoverStateless);

  function PopoverStateless() {
    _classCallCheck(this, PopoverStateless);

    return _super.apply(this, arguments);
  }

  _createClass(PopoverStateless, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          props = _objectWithoutProperties(_this$props, _excluded);

      return /*#__PURE__*/React.createElement(Card, _extends({
        role: "dialog",
        elevation: 3,
        overflow: "hidden",
        minWidth: 200,
        backgroundColor: "white"
      }, props), children);
    }
  }]);

  return PopoverStateless;
}(PureComponent);

PopoverStateless.displayName = "PopoverStateless";

_defineProperty(PopoverStateless, "propTypes", _objectSpread(_objectSpread({}, Card.propTypes), {}, {
  /**
   * The content of the Popover.
   */
  children: PropTypes.node
}));

export { PopoverStateless as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJDYXJkIiwiUG9wb3ZlclN0YXRlbGVzcyIsInByb3BzIiwiY2hpbGRyZW4iLCJwcm9wVHlwZXMiLCJub2RlIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BvcG92ZXIvc3JjL1BvcG92ZXJTdGF0ZWxlc3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IENhcmQgfSBmcm9tICcuLi8uLi9sYXllcnMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcG92ZXJTdGF0ZWxlc3MgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgQ2FyZCBhcyB0aGUgYmFzZS5cbiAgICAgKi9cbiAgICAuLi5DYXJkLnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBjb250ZW50IG9mIHRoZSBQb3BvdmVyLlxuICAgICAqL1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPENhcmRcbiAgICAgICAgcm9sZT1cImRpYWxvZ1wiXG4gICAgICAgIGVsZXZhdGlvbj17M31cbiAgICAgICAgb3ZlcmZsb3c9XCJoaWRkZW5cIlxuICAgICAgICBtaW5XaWR0aD17MjAwfVxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9DYXJkPlxuICAgIClcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxhQUFoQixRQUFxQyxPQUFyQztBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxJQUFULFFBQXFCLGNBQXJCOztJQUVxQkMsZ0I7Ozs7Ozs7Ozs7Ozs7V0FhbkIsa0JBQVM7TUFDUCxrQkFBK0IsS0FBS0MsS0FBcEM7TUFBQSxJQUFRQyxRQUFSLGVBQVFBLFFBQVI7TUFBQSxJQUFxQkQsS0FBckI7O01BRUEsb0JBQ0Usb0JBQUMsSUFBRDtRQUNFLElBQUksRUFBQyxRQURQO1FBRUUsU0FBUyxFQUFFLENBRmI7UUFHRSxRQUFRLEVBQUMsUUFIWDtRQUlFLFFBQVEsRUFBRSxHQUpaO1FBS0UsZUFBZSxFQUFDO01BTGxCLEdBTU1BLEtBTk4sR0FRR0MsUUFSSCxDQURGO0lBWUQ7Ozs7RUE1QjJDTCxhOztBQUF6QkcsZ0I7O2dCQUFBQSxnQiwrQ0FLZEQsSUFBSSxDQUFDSSxTO0VBRVI7QUFDSjtBQUNBO0VBQ0lELFFBQVEsRUFBRUosU0FBUyxDQUFDTTs7O1NBVkhKLGdCIn0=