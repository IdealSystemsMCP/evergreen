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
import { Paragraph } from '../../typography';

var FormFieldHint = /*#__PURE__*/function (_PureComponent) {
  _inherits(FormFieldHint, _PureComponent);

  var _super = _createSuper(FormFieldHint);

  function FormFieldHint() {
    _classCallCheck(this, FormFieldHint);

    return _super.apply(this, arguments);
  }

  _createClass(FormFieldHint, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(Paragraph, _extends({
        marginTop: 0,
        size: 300,
        color: "muted"
      }, this.props));
    }
  }]);

  return FormFieldHint;
}(PureComponent);

FormFieldHint.displayName = "FormFieldHint";

_defineProperty(FormFieldHint, "propTypes", _objectSpread({}, Paragraph.propTypes));

export { FormFieldHint as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQYXJhZ3JhcGgiLCJGb3JtRmllbGRIaW50IiwicHJvcHMiLCJwcm9wVHlwZXMiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZm9ybS1maWVsZC9zcmMvRm9ybUZpZWxkSGludC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUGFyYWdyYXBoIH0gZnJvbSAnLi4vLi4vdHlwb2dyYXBoeSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybUZpZWxkSGludCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBQYXJhZ3JhcGggY29tcG9uZW50IGFzIHRoZSBiYXNlLlxuICAgICAqL1xuICAgIC4uLlBhcmFncmFwaC5wcm9wVHlwZXNcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPFBhcmFncmFwaCBtYXJnaW5Ub3A9ezB9IHNpemU9ezMwMH0gY29sb3I9XCJtdXRlZFwiIHsuLi50aGlzLnByb3BzfSAvPlxuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxhQUFoQixRQUFxQyxPQUFyQztBQUNBLFNBQVNDLFNBQVQsUUFBMEIsa0JBQTFCOztJQUVxQkMsYTs7Ozs7Ozs7Ozs7OztXQVFuQixrQkFBUztNQUNQLG9CQUFPLG9CQUFDLFNBQUQ7UUFBVyxTQUFTLEVBQUUsQ0FBdEI7UUFBeUIsSUFBSSxFQUFFLEdBQS9CO1FBQW9DLEtBQUssRUFBQztNQUExQyxHQUFzRCxLQUFLQyxLQUEzRCxFQUFQO0lBQ0Q7Ozs7RUFWd0NILGE7O0FBQXRCRSxhOztnQkFBQUEsYSxpQ0FLZEQsU0FBUyxDQUFDRyxTOztTQUxJRixhIn0=