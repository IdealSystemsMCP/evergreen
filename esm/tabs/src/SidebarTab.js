import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _excluded = ["children", "height", "isSelected"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import Box from 'ui-box';
import Tab from './Tab';

var SidebarTab = /*#__PURE__*/function (_PureComponent) {
  _inherits(SidebarTab, _PureComponent);

  var _super = _createSuper(SidebarTab);

  function SidebarTab() {
    _classCallCheck(this, SidebarTab);

    return _super.apply(this, arguments);
  }

  _createClass(SidebarTab, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          height = _this$props.height,
          isSelected = _this$props.isSelected,
          props = _objectWithoutProperties(_this$props, _excluded);

      return /*#__PURE__*/React.createElement(Tab, _extends({
        isSelected: isSelected,
        height: height
      }, SidebarTab.styles, props, {
        display: "flex"
      }), /*#__PURE__*/React.createElement(Box, {
        is: "span",
        flex: "1"
      }, children));
    }
  }]);

  return SidebarTab;
}(PureComponent);

SidebarTab.displayName = "SidebarTab";

_defineProperty(SidebarTab, "propTypes", _objectSpread({}, Tab.propTypes));

_defineProperty(SidebarTab, "defaultProps", {
  height: 32
});

_defineProperty(SidebarTab, "styles", {
  width: '100%',
  paddingX: 0,
  paddingLeft: 8,
  marginX: 0,
  marginBottom: 4,
  justifyContent: 'auto'
});

export { SidebarTab as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJCb3giLCJUYWIiLCJTaWRlYmFyVGFiIiwicHJvcHMiLCJjaGlsZHJlbiIsImhlaWdodCIsImlzU2VsZWN0ZWQiLCJzdHlsZXMiLCJwcm9wVHlwZXMiLCJ3aWR0aCIsInBhZGRpbmdYIiwicGFkZGluZ0xlZnQiLCJtYXJnaW5YIiwibWFyZ2luQm90dG9tIiwianVzdGlmeUNvbnRlbnQiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdGFicy9zcmMvU2lkZWJhclRhYi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJveCBmcm9tICd1aS1ib3gnXG5pbXBvcnQgVGFiIGZyb20gJy4vVGFiJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWRlYmFyVGFiIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLi4uVGFiLnByb3BUeXBlc1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBoZWlnaHQ6IDMyXG4gIH1cblxuICBzdGF0aWMgc3R5bGVzID0ge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgcGFkZGluZ1g6IDAsXG4gICAgcGFkZGluZ0xlZnQ6IDgsXG4gICAgbWFyZ2luWDogMCxcbiAgICBtYXJnaW5Cb3R0b206IDQsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdhdXRvJ1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIGhlaWdodCwgaXNTZWxlY3RlZCwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPFRhYlxuICAgICAgICBpc1NlbGVjdGVkPXtpc1NlbGVjdGVkfVxuICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgey4uLlNpZGViYXJUYWIuc3R5bGVzfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgID5cbiAgICAgICAgPEJveCBpcz1cInNwYW5cIiBmbGV4PVwiMVwiPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L1RhYj5cbiAgICApXG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsYUFBaEIsUUFBcUMsT0FBckM7QUFDQSxPQUFPQyxHQUFQLE1BQWdCLFFBQWhCO0FBQ0EsT0FBT0MsR0FBUCxNQUFnQixPQUFoQjs7SUFFcUJDLFU7Ozs7Ozs7Ozs7Ozs7V0FrQm5CLGtCQUFTO01BQ1Asa0JBQW1ELEtBQUtDLEtBQXhEO01BQUEsSUFBUUMsUUFBUixlQUFRQSxRQUFSO01BQUEsSUFBa0JDLE1BQWxCLGVBQWtCQSxNQUFsQjtNQUFBLElBQTBCQyxVQUExQixlQUEwQkEsVUFBMUI7TUFBQSxJQUF5Q0gsS0FBekM7O01BQ0Esb0JBQ0Usb0JBQUMsR0FBRDtRQUNFLFVBQVUsRUFBRUcsVUFEZDtRQUVFLE1BQU0sRUFBRUQ7TUFGVixHQUdNSCxVQUFVLENBQUNLLE1BSGpCLEVBSU1KLEtBSk47UUFLRSxPQUFPLEVBQUM7TUFMVixpQkFPRSxvQkFBQyxHQUFEO1FBQUssRUFBRSxFQUFDLE1BQVI7UUFBZSxJQUFJLEVBQUM7TUFBcEIsR0FDR0MsUUFESCxDQVBGLENBREY7SUFhRDs7OztFQWpDcUNMLGE7O0FBQW5CRyxVOztnQkFBQUEsVSxpQ0FFZEQsR0FBRyxDQUFDTyxTOztnQkFGVU4sVSxrQkFLRztFQUNwQkcsTUFBTSxFQUFFO0FBRFksQzs7Z0JBTEhILFUsWUFTSDtFQUNkTyxLQUFLLEVBQUUsTUFETztFQUVkQyxRQUFRLEVBQUUsQ0FGSTtFQUdkQyxXQUFXLEVBQUUsQ0FIQztFQUlkQyxPQUFPLEVBQUUsQ0FKSztFQUtkQyxZQUFZLEVBQUUsQ0FMQTtFQU1kQyxjQUFjLEVBQUU7QUFORixDOztTQVRHWixVIn0=