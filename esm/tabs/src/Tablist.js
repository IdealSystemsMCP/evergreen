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
import Box from 'ui-box';

var Tablist = /*#__PURE__*/function (_PureComponent) {
  _inherits(Tablist, _PureComponent);

  var _super = _createSuper(Tablist);

  function Tablist() {
    _classCallCheck(this, Tablist);

    return _super.apply(this, arguments);
  }

  _createClass(Tablist, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(Box, _extends({
        role: "tablist"
      }, this.props));
    }
  }]);

  return Tablist;
}(PureComponent);

Tablist.displayName = "Tablist";

_defineProperty(Tablist, "propTypes", _objectSpread({}, Box.propTypes));

export { Tablist as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJCb3giLCJUYWJsaXN0IiwicHJvcHMiLCJwcm9wVHlwZXMiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdGFicy9zcmMvVGFibGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJveCBmcm9tICd1aS1ib3gnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYmxpc3QgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAuLi5Cb3gucHJvcFR5cGVzXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxCb3ggcm9sZT1cInRhYmxpc3RcIiB7Li4udGhpcy5wcm9wc30gLz5cbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsYUFBaEIsUUFBcUMsT0FBckM7QUFDQSxPQUFPQyxHQUFQLE1BQWdCLFFBQWhCOztJQUVxQkMsTzs7Ozs7Ozs7Ozs7OztXQUtuQixrQkFBUztNQUNQLG9CQUFPLG9CQUFDLEdBQUQ7UUFBSyxJQUFJLEVBQUM7TUFBVixHQUF3QixLQUFLQyxLQUE3QixFQUFQO0lBQ0Q7Ozs7RUFQa0NILGE7O0FBQWhCRSxPOztnQkFBQUEsTyxpQ0FFZEQsR0FBRyxDQUFDRyxTOztTQUZVRixPIn0=