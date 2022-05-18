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
import Pane from './Pane';

var Card = /*#__PURE__*/function (_PureComponent) {
  _inherits(Card, _PureComponent);

  var _super = _createSuper(Card);

  function Card() {
    _classCallCheck(this, Card);

    return _super.apply(this, arguments);
  }

  _createClass(Card, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(Pane, _extends({
        borderRadius: 5
      }, this.props));
    }
  }]);

  return Card;
}(PureComponent);

Card.displayName = "Card";

_defineProperty(Card, "propTypes", _objectSpread({}, Pane.propTypes));

export { Card as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQYW5lIiwiQ2FyZCIsInByb3BzIiwicHJvcFR5cGVzIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xheWVycy9zcmMvQ2FyZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFBhbmUgZnJvbSAnLi9QYW5lJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLi4uUGFuZS5wcm9wVHlwZXNcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPFBhbmUgYm9yZGVyUmFkaXVzPXs1fSB7Li4udGhpcy5wcm9wc30gLz5cbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsYUFBaEIsUUFBcUMsT0FBckM7QUFDQSxPQUFPQyxJQUFQLE1BQWlCLFFBQWpCOztJQUVxQkMsSTs7Ozs7Ozs7Ozs7OztXQUtuQixrQkFBUztNQUNQLG9CQUFPLG9CQUFDLElBQUQ7UUFBTSxZQUFZLEVBQUU7TUFBcEIsR0FBMkIsS0FBS0MsS0FBaEMsRUFBUDtJQUNEOzs7O0VBUCtCSCxhOztBQUFiRSxJOztnQkFBQUEsSSxpQ0FFZEQsSUFBSSxDQUFDRyxTOztTQUZTRixJIn0=