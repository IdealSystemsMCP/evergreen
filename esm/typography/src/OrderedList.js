import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _excluded = ["children", "size"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from 'ui-box';

var OrderedList = /*#__PURE__*/function (_PureComponent) {
  _inherits(OrderedList, _PureComponent);

  var _super = _createSuper(OrderedList);

  function OrderedList() {
    _classCallCheck(this, OrderedList);

    return _super.apply(this, arguments);
  }

  _createClass(OrderedList, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          size = _this$props.size,
          props = _objectWithoutProperties(_this$props, _excluded);

      var finalChildren = React.Children.map(children, function (child) {
        if (! /*#__PURE__*/React.isValidElement(child)) {
          return child;
        }

        return /*#__PURE__*/React.cloneElement(child, {
          // Prefer more granularly defined icon if present
          size: child.props.size || size
        });
      });
      return /*#__PURE__*/React.createElement(Box, _extends({}, OrderedList.styles, props), finalChildren);
    }
  }]);

  return OrderedList;
}(PureComponent);

OrderedList.displayName = "OrderedList";

_defineProperty(OrderedList, "propTypes", _objectSpread(_objectSpread({}, Box.propTypes), {}, {
  /**
   * Size of the text used in a list item.
   * Can be: 300, 400, 500, 600.
   */
  size: PropTypes.oneOf([300, 400, 500, 600]).isRequired
}));

_defineProperty(OrderedList, "defaultProps", {
  size: 400
});

_defineProperty(OrderedList, "styles", {
  is: 'ol',
  margin: 0,
  marginLeft: '1.1em',
  padding: 0,
  listStyle: 'decimal'
});

export { OrderedList as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJCb3giLCJPcmRlcmVkTGlzdCIsInByb3BzIiwiY2hpbGRyZW4iLCJzaXplIiwiZmluYWxDaGlsZHJlbiIsIkNoaWxkcmVuIiwibWFwIiwiY2hpbGQiLCJpc1ZhbGlkRWxlbWVudCIsImNsb25lRWxlbWVudCIsInN0eWxlcyIsInByb3BUeXBlcyIsIm9uZU9mIiwiaXNSZXF1aXJlZCIsImlzIiwibWFyZ2luIiwibWFyZ2luTGVmdCIsInBhZGRpbmciLCJsaXN0U3R5bGUiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdHlwb2dyYXBoeS9zcmMvT3JkZXJlZExpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBCb3ggZnJvbSAndWktYm94J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcmRlcmVkTGlzdCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC4uLkJveC5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBTaXplIG9mIHRoZSB0ZXh0IHVzZWQgaW4gYSBsaXN0IGl0ZW0uXG4gICAgICogQ2FuIGJlOiAzMDAsIDQwMCwgNTAwLCA2MDAuXG4gICAgICovXG4gICAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFszMDAsIDQwMCwgNTAwLCA2MDBdKS5pc1JlcXVpcmVkXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHNpemU6IDQwMFxuICB9XG5cbiAgc3RhdGljIHN0eWxlcyA9IHtcbiAgICBpczogJ29sJyxcbiAgICBtYXJnaW46IDAsXG4gICAgbWFyZ2luTGVmdDogJzEuMWVtJyxcbiAgICBwYWRkaW5nOiAwLFxuICAgIGxpc3RTdHlsZTogJ2RlY2ltYWwnXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgc2l6ZSwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IGZpbmFsQ2hpbGRyZW4gPSBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGNoaWxkID0+IHtcbiAgICAgIGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgIHJldHVybiBjaGlsZFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgIC8vIFByZWZlciBtb3JlIGdyYW51bGFybHkgZGVmaW5lZCBpY29uIGlmIHByZXNlbnRcbiAgICAgICAgc2l6ZTogY2hpbGQucHJvcHMuc2l6ZSB8fCBzaXplXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJveCB7Li4uT3JkZXJlZExpc3Quc3R5bGVzfSB7Li4ucHJvcHN9PlxuICAgICAgICB7ZmluYWxDaGlsZHJlbn1cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxhQUFoQixRQUFxQyxPQUFyQztBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxHQUFQLE1BQWdCLFFBQWhCOztJQUVxQkMsVzs7Ozs7Ozs7Ozs7OztXQXVCbkIsa0JBQVM7TUFDUCxrQkFBcUMsS0FBS0MsS0FBMUM7TUFBQSxJQUFRQyxRQUFSLGVBQVFBLFFBQVI7TUFBQSxJQUFrQkMsSUFBbEIsZUFBa0JBLElBQWxCO01BQUEsSUFBMkJGLEtBQTNCOztNQUVBLElBQU1HLGFBQWEsR0FBR1IsS0FBSyxDQUFDUyxRQUFOLENBQWVDLEdBQWYsQ0FBbUJKLFFBQW5CLEVBQTZCLFVBQUFLLEtBQUssRUFBSTtRQUMxRCxJQUFJLGVBQUNYLEtBQUssQ0FBQ1ksY0FBTixDQUFxQkQsS0FBckIsQ0FBTCxFQUFrQztVQUNoQyxPQUFPQSxLQUFQO1FBQ0Q7O1FBRUQsb0JBQU9YLEtBQUssQ0FBQ2EsWUFBTixDQUFtQkYsS0FBbkIsRUFBMEI7VUFDL0I7VUFDQUosSUFBSSxFQUFFSSxLQUFLLENBQUNOLEtBQU4sQ0FBWUUsSUFBWixJQUFvQkE7UUFGSyxDQUExQixDQUFQO01BSUQsQ0FUcUIsQ0FBdEI7TUFXQSxvQkFDRSxvQkFBQyxHQUFELGVBQVNILFdBQVcsQ0FBQ1UsTUFBckIsRUFBaUNULEtBQWpDLEdBQ0dHLGFBREgsQ0FERjtJQUtEOzs7O0VBMUNzQ1AsYTs7QUFBcEJHLFc7O2dCQUFBQSxXLCtDQUVkRCxHQUFHLENBQUNZLFM7RUFFUDtBQUNKO0FBQ0E7QUFDQTtFQUNJUixJQUFJLEVBQUVMLFNBQVMsQ0FBQ2MsS0FBVixDQUFnQixDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixHQUFoQixDQUFoQixFQUFzQ0M7OztnQkFSM0JiLFcsa0JBV0c7RUFDcEJHLElBQUksRUFBRTtBQURjLEM7O2dCQVhISCxXLFlBZUg7RUFDZGMsRUFBRSxFQUFFLElBRFU7RUFFZEMsTUFBTSxFQUFFLENBRk07RUFHZEMsVUFBVSxFQUFFLE9BSEU7RUFJZEMsT0FBTyxFQUFFLENBSks7RUFLZEMsU0FBUyxFQUFFO0FBTEcsQzs7U0FmR2xCLFcifQ==