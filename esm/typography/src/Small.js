import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import Box from 'ui-box';
/**
 * Small can only be used inside of Text or Paragraph.
 */

var Small = /*#__PURE__*/function (_PureComponent) {
  _inherits(Small, _PureComponent);

  var _super = _createSuper(Small);

  function Small() {
    _classCallCheck(this, Small);

    return _super.apply(this, arguments);
  }

  _createClass(Small, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(Box, _extends({
        is: "small",
        fontSize: "85%"
      }, this.props));
    }
  }]);

  return Small;
}(PureComponent);

Small.displayName = "Small";
export { Small as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJCb3giLCJTbWFsbCIsInByb3BzIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3R5cG9ncmFwaHkvc3JjL1NtYWxsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQm94IGZyb20gJ3VpLWJveCdcblxuLyoqXG4gKiBTbWFsbCBjYW4gb25seSBiZSB1c2VkIGluc2lkZSBvZiBUZXh0IG9yIFBhcmFncmFwaC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU21hbGwgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8Qm94IGlzPVwic21hbGxcIiBmb250U2l6ZT1cIjg1JVwiIHsuLi50aGlzLnByb3BzfSAvPlxuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsYUFBaEIsUUFBcUMsT0FBckM7QUFDQSxPQUFPQyxHQUFQLE1BQWdCLFFBQWhCO0FBRUE7QUFDQTtBQUNBOztJQUNxQkMsSzs7Ozs7Ozs7Ozs7OztXQUNuQixrQkFBUztNQUNQLG9CQUFPLG9CQUFDLEdBQUQ7UUFBSyxFQUFFLEVBQUMsT0FBUjtRQUFnQixRQUFRLEVBQUM7TUFBekIsR0FBbUMsS0FBS0MsS0FBeEMsRUFBUDtJQUNEOzs7O0VBSGdDSCxhOztBQUFkRSxLO1NBQUFBLEsifQ==