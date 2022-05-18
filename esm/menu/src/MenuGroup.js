import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React from 'react';
import PropTypes from 'prop-types';
import { Pane } from '../../layers';
import { Heading } from '../../typography';

var MenuGroup = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(MenuGroup, _React$PureComponent);

  var _super = _createSuper(MenuGroup);

  function MenuGroup() {
    _classCallCheck(this, MenuGroup);

    return _super.apply(this, arguments);
  }

  _createClass(MenuGroup, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          children = _this$props.children;
      return /*#__PURE__*/React.createElement(Pane, {
        paddingY: 8
      }, title && /*#__PURE__*/React.createElement(Heading, {
        size: 100,
        marginX: 16,
        marginY: 8
      }, title), children);
    }
  }]);

  return MenuGroup;
}(React.PureComponent);

MenuGroup.displayName = "MenuGroup";

_defineProperty(MenuGroup, "propTypes", {
  /**
   * Title of the menu group.
   */
  title: PropTypes.node,

  /**
   * The children of the menu group.
   */
  children: PropTypes.node
});

export { MenuGroup as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIlBhbmUiLCJIZWFkaW5nIiwiTWVudUdyb3VwIiwicHJvcHMiLCJ0aXRsZSIsImNoaWxkcmVuIiwiUHVyZUNvbXBvbmVudCIsIm5vZGUiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbWVudS9zcmMvTWVudUdyb3VwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFBhbmUgfSBmcm9tICcuLi8uLi9sYXllcnMnXG5pbXBvcnQgeyBIZWFkaW5nIH0gZnJvbSAnLi4vLi4vdHlwb2dyYXBoeSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudUdyb3VwIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogVGl0bGUgb2YgdGhlIG1lbnUgZ3JvdXAuXG4gICAgICovXG4gICAgdGl0bGU6IFByb3BUeXBlcy5ub2RlLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGNoaWxkcmVuIG9mIHRoZSBtZW51IGdyb3VwLlxuICAgICAqL1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGl0bGUsIGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxQYW5lIHBhZGRpbmdZPXs4fT5cbiAgICAgICAge3RpdGxlICYmIChcbiAgICAgICAgICA8SGVhZGluZyBzaXplPXsxMDB9IG1hcmdpblg9ezE2fSBtYXJnaW5ZPXs4fT5cbiAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICl9XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvUGFuZT5cbiAgICApXG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLElBQVQsUUFBcUIsY0FBckI7QUFDQSxTQUFTQyxPQUFULFFBQXdCLGtCQUF4Qjs7SUFFcUJDLFM7Ozs7Ozs7Ozs7Ozs7V0FhbkIsa0JBQVM7TUFDUCxrQkFBNEIsS0FBS0MsS0FBakM7TUFBQSxJQUFRQyxLQUFSLGVBQVFBLEtBQVI7TUFBQSxJQUFlQyxRQUFmLGVBQWVBLFFBQWY7TUFDQSxvQkFDRSxvQkFBQyxJQUFEO1FBQU0sUUFBUSxFQUFFO01BQWhCLEdBQ0dELEtBQUssaUJBQ0osb0JBQUMsT0FBRDtRQUFTLElBQUksRUFBRSxHQUFmO1FBQW9CLE9BQU8sRUFBRSxFQUE3QjtRQUFpQyxPQUFPLEVBQUU7TUFBMUMsR0FDR0EsS0FESCxDQUZKLEVBTUdDLFFBTkgsQ0FERjtJQVVEOzs7O0VBekJvQ1AsS0FBSyxDQUFDUSxhOztBQUF4QkosUzs7Z0JBQUFBLFMsZUFDQTtFQUNqQjtBQUNKO0FBQ0E7RUFDSUUsS0FBSyxFQUFFTCxTQUFTLENBQUNRLElBSkE7O0VBTWpCO0FBQ0o7QUFDQTtFQUNJRixRQUFRLEVBQUVOLFNBQVMsQ0FBQ1E7QUFUSCxDOztTQURBTCxTIn0=