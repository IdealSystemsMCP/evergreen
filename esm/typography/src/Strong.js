import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import Text from './Text';

var Strong = /*#__PURE__*/function (_PureComponent) {
  _inherits(Strong, _PureComponent);

  var _super = _createSuper(Strong);

  function Strong() {
    _classCallCheck(this, Strong);

    return _super.apply(this, arguments);
  }

  _createClass(Strong, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(Text, _extends({
        is: "strong",
        fontWeight: 600
      }, this.props));
    }
  }]);

  return Strong;
}(PureComponent);

Strong.displayName = "Strong";

_defineProperty(Strong, "propTypes", _objectSpread({}, Text.propTypes));

export { Strong as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJUZXh0IiwiU3Ryb25nIiwicHJvcHMiLCJwcm9wVHlwZXMiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdHlwb2dyYXBoeS9zcmMvU3Ryb25nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgVGV4dCBmcm9tICcuL1RleHQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0cm9uZyBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC4uLlRleHQucHJvcFR5cGVzXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxUZXh0IGlzPVwic3Ryb25nXCIgZm9udFdlaWdodD17NjAwfSB7Li4udGhpcy5wcm9wc30gLz5cbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsYUFBaEIsUUFBcUMsT0FBckM7QUFDQSxPQUFPQyxJQUFQLE1BQWlCLFFBQWpCOztJQUVxQkMsTTs7Ozs7Ozs7Ozs7OztXQUtuQixrQkFBUztNQUNQLG9CQUFPLG9CQUFDLElBQUQ7UUFBTSxFQUFFLEVBQUMsUUFBVDtRQUFrQixVQUFVLEVBQUU7TUFBOUIsR0FBdUMsS0FBS0MsS0FBNUMsRUFBUDtJQUNEOzs7O0VBUGlDSCxhOztBQUFmRSxNOztnQkFBQUEsTSxpQ0FFZEQsSUFBSSxDQUFDRyxTOztTQUZTRixNIn0=