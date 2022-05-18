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
import PropTypes from 'prop-types';
import Box from 'ui-box';

var Image = /*#__PURE__*/function (_PureComponent) {
  _inherits(Image, _PureComponent);

  var _super = _createSuper(Image);

  function Image() {
    _classCallCheck(this, Image);

    return _super.apply(this, arguments);
  }

  _createClass(Image, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(Box, _extends({
        is: "img"
      }, this.props));
    }
  }]);

  return Image;
}(PureComponent);

Image.displayName = "Image";

_defineProperty(Image, "propTypes", _objectSpread(_objectSpread({}, Box.propTypes), {}, {
  src: PropTypes.string
}));

export { Image as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJCb3giLCJJbWFnZSIsInByb3BzIiwicHJvcFR5cGVzIiwic3JjIiwic3RyaW5nIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2ltYWdlL3NyYy9JbWFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEJveCBmcm9tICd1aS1ib3gnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLi4uQm94LnByb3BUeXBlcyxcbiAgICBzcmM6IFByb3BUeXBlcy5zdHJpbmdcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPEJveCBpcz1cImltZ1wiIHsuLi50aGlzLnByb3BzfSAvPlxuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxhQUFoQixRQUFxQyxPQUFyQztBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxHQUFQLE1BQWdCLFFBQWhCOztJQUVxQkMsSzs7Ozs7Ozs7Ozs7OztXQU1uQixrQkFBUztNQUNQLG9CQUFPLG9CQUFDLEdBQUQ7UUFBSyxFQUFFLEVBQUM7TUFBUixHQUFrQixLQUFLQyxLQUF2QixFQUFQO0lBQ0Q7Ozs7RUFSZ0NKLGE7O0FBQWRHLEs7O2dCQUFBQSxLLCtDQUVkRCxHQUFHLENBQUNHLFM7RUFDUEMsR0FBRyxFQUFFTCxTQUFTLENBQUNNOzs7U0FIRUosSyJ9