import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _excluded = ["children", "isAstrixShown"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Label } from '../../typography';

var FormFieldLabel = /*#__PURE__*/function (_PureComponent) {
  _inherits(FormFieldLabel, _PureComponent);

  var _super = _createSuper(FormFieldLabel);

  function FormFieldLabel() {
    _classCallCheck(this, FormFieldLabel);

    return _super.apply(this, arguments);
  }

  _createClass(FormFieldLabel, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          isAstrixShown = _this$props.isAstrixShown,
          props = _objectWithoutProperties(_this$props, _excluded);

      return /*#__PURE__*/React.createElement(Label, _extends({
        display: "block"
      }, props), children, ' ', isAstrixShown && /*#__PURE__*/React.createElement("span", {
        title: "This field is required."
      }, "*"));
    }
  }]);

  return FormFieldLabel;
}(PureComponent);

FormFieldLabel.displayName = "FormFieldLabel";

_defineProperty(FormFieldLabel, "propTypes", _objectSpread(_objectSpread({}, Label.propTypes), {}, {
  /**
   * Whether or not to show an asterix after the label.
   */
  isAstrixShown: PropTypes.bool
}));

export { FormFieldLabel as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJMYWJlbCIsIkZvcm1GaWVsZExhYmVsIiwicHJvcHMiLCJjaGlsZHJlbiIsImlzQXN0cml4U2hvd24iLCJwcm9wVHlwZXMiLCJib29sIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2Zvcm0tZmllbGQvc3JjL0Zvcm1GaWVsZExhYmVsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1GaWVsZExhYmVsIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIExhYmVsIGNvbXBvbmVudCBhcyB0aGUgYmFzZS5cbiAgICAgKi9cbiAgICAuLi5MYWJlbC5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIG9yIG5vdCB0byBzaG93IGFuIGFzdGVyaXggYWZ0ZXIgdGhlIGxhYmVsLlxuICAgICAqL1xuICAgIGlzQXN0cml4U2hvd246IFByb3BUeXBlcy5ib29sXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgaXNBc3RyaXhTaG93biwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPExhYmVsIGRpc3BsYXk9XCJibG9ja1wiIHsuLi5wcm9wc30+XG4gICAgICAgIHtjaGlsZHJlbn17JyAnfVxuICAgICAgICB7aXNBc3RyaXhTaG93biAmJiA8c3BhbiB0aXRsZT1cIlRoaXMgZmllbGQgaXMgcmVxdWlyZWQuXCI+Kjwvc3Bhbj59XG4gICAgICA8L0xhYmVsPlxuICAgIClcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxhQUFoQixRQUFxQyxPQUFyQztBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxLQUFULFFBQXNCLGtCQUF0Qjs7SUFFcUJDLGM7Ozs7Ozs7Ozs7Ozs7V0FhbkIsa0JBQVM7TUFDUCxrQkFBOEMsS0FBS0MsS0FBbkQ7TUFBQSxJQUFRQyxRQUFSLGVBQVFBLFFBQVI7TUFBQSxJQUFrQkMsYUFBbEIsZUFBa0JBLGFBQWxCO01BQUEsSUFBb0NGLEtBQXBDOztNQUNBLG9CQUNFLG9CQUFDLEtBQUQ7UUFBTyxPQUFPLEVBQUM7TUFBZixHQUEyQkEsS0FBM0IsR0FDR0MsUUFESCxFQUNhLEdBRGIsRUFFR0MsYUFBYSxpQkFBSTtRQUFNLEtBQUssRUFBQztNQUFaLE9BRnBCLENBREY7SUFNRDs7OztFQXJCeUNOLGE7O0FBQXZCRyxjOztnQkFBQUEsYywrQ0FLZEQsS0FBSyxDQUFDSyxTO0VBRVQ7QUFDSjtBQUNBO0VBQ0lELGFBQWEsRUFBRUwsU0FBUyxDQUFDTzs7O1NBVlJMLGMifQ==