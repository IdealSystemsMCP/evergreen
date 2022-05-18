import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _excluded = ["theme", "children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Paragraph } from '../../typography';
import { withTheme } from '../../theme';
import { Icon } from '../../icon';
import { Pane } from '../../layers';

var FormFieldValidationMessage = /*#__PURE__*/function (_PureComponent) {
  _inherits(FormFieldValidationMessage, _PureComponent);

  var _super = _createSuper(FormFieldValidationMessage);

  function FormFieldValidationMessage() {
    _classCallCheck(this, FormFieldValidationMessage);

    return _super.apply(this, arguments);
  }

  _createClass(FormFieldValidationMessage, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          children = _this$props.children,
          props = _objectWithoutProperties(_this$props, _excluded);

      return /*#__PURE__*/React.createElement(Pane, _extends({
        display: "flex"
      }, props), /*#__PURE__*/React.createElement(Icon, {
        icon: "error",
        color: "danger",
        marginTop: 1,
        size: 14,
        marginRight: 8
      }), /*#__PURE__*/React.createElement(Paragraph, {
        marginTop: 0,
        size: 300,
        color: "danger",
        role: "alert"
      }, children));
    }
  }]);

  return FormFieldValidationMessage;
}(PureComponent);

FormFieldValidationMessage.displayName = "FormFieldValidationMessage";

_defineProperty(FormFieldValidationMessage, "propTypes", _objectSpread(_objectSpread({}, Pane.propTypes), {}, {
  /**
   * The contents of the validation message.
   * This is wrapped in a paragraph, use a string.
   */
  children: PropTypes.node,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired
}));

export default withTheme(FormFieldValidationMessage);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJQYXJhZ3JhcGgiLCJ3aXRoVGhlbWUiLCJJY29uIiwiUGFuZSIsIkZvcm1GaWVsZFZhbGlkYXRpb25NZXNzYWdlIiwicHJvcHMiLCJ0aGVtZSIsImNoaWxkcmVuIiwicHJvcFR5cGVzIiwibm9kZSIsIm9iamVjdCIsImlzUmVxdWlyZWQiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZm9ybS1maWVsZC9zcmMvRm9ybUZpZWxkVmFsaWRhdGlvbk1lc3NhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFBhcmFncmFwaCB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcbmltcG9ydCB7IEljb24gfSBmcm9tICcuLi8uLi9pY29uJ1xuaW1wb3J0IHsgUGFuZSB9IGZyb20gJy4uLy4uL2xheWVycydcblxuY2xhc3MgRm9ybUZpZWxkVmFsaWRhdGlvbk1lc3NhZ2UgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgUGFuZSBjb21wb25lbnQgYXMgdGhlIGJhc2UuXG4gICAgICovXG4gICAgLi4uUGFuZS5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29udGVudHMgb2YgdGhlIHZhbGlkYXRpb24gbWVzc2FnZS5cbiAgICAgKiBUaGlzIGlzIHdyYXBwZWQgaW4gYSBwYXJhZ3JhcGgsIHVzZSBhIHN0cmluZy5cbiAgICAgKi9cbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBUaGVtZSBwcm92aWRlZCBieSBUaGVtZVByb3ZpZGVyLlxuICAgICAqL1xuICAgIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRoZW1lLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPFBhbmUgZGlzcGxheT1cImZsZXhcIiB7Li4ucHJvcHN9PlxuICAgICAgICA8SWNvblxuICAgICAgICAgIGljb249XCJlcnJvclwiXG4gICAgICAgICAgY29sb3I9XCJkYW5nZXJcIlxuICAgICAgICAgIG1hcmdpblRvcD17MX1cbiAgICAgICAgICBzaXplPXsxNH1cbiAgICAgICAgICBtYXJnaW5SaWdodD17OH1cbiAgICAgICAgLz5cbiAgICAgICAgPFBhcmFncmFwaCBtYXJnaW5Ub3A9ezB9IHNpemU9ezMwMH0gY29sb3I9XCJkYW5nZXJcIiByb2xlPVwiYWxlcnRcIj5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvUGFyYWdyYXBoPlxuICAgICAgPC9QYW5lPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoRm9ybUZpZWxkVmFsaWRhdGlvbk1lc3NhZ2UpXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLGFBQWhCLFFBQXFDLE9BQXJDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLFNBQVQsUUFBMEIsa0JBQTFCO0FBQ0EsU0FBU0MsU0FBVCxRQUEwQixhQUExQjtBQUNBLFNBQVNDLElBQVQsUUFBcUIsWUFBckI7QUFDQSxTQUFTQyxJQUFULFFBQXFCLGNBQXJCOztJQUVNQywwQjs7Ozs7Ozs7Ozs7OztXQW1CSixrQkFBUztNQUNQLGtCQUFzQyxLQUFLQyxLQUEzQztNQUFBLElBQVFDLEtBQVIsZUFBUUEsS0FBUjtNQUFBLElBQWVDLFFBQWYsZUFBZUEsUUFBZjtNQUFBLElBQTRCRixLQUE1Qjs7TUFDQSxvQkFDRSxvQkFBQyxJQUFEO1FBQU0sT0FBTyxFQUFDO01BQWQsR0FBeUJBLEtBQXpCLGdCQUNFLG9CQUFDLElBQUQ7UUFDRSxJQUFJLEVBQUMsT0FEUDtRQUVFLEtBQUssRUFBQyxRQUZSO1FBR0UsU0FBUyxFQUFFLENBSGI7UUFJRSxJQUFJLEVBQUUsRUFKUjtRQUtFLFdBQVcsRUFBRTtNQUxmLEVBREYsZUFRRSxvQkFBQyxTQUFEO1FBQVcsU0FBUyxFQUFFLENBQXRCO1FBQXlCLElBQUksRUFBRSxHQUEvQjtRQUFvQyxLQUFLLEVBQUMsUUFBMUM7UUFBbUQsSUFBSSxFQUFDO01BQXhELEdBQ0dFLFFBREgsQ0FSRixDQURGO0lBY0Q7Ozs7RUFuQ3NDVCxhOztBQUFuQ00sMEI7O2dCQUFBQSwwQiwrQ0FLQ0QsSUFBSSxDQUFDSyxTO0VBRVI7QUFDSjtBQUNBO0FBQ0E7RUFDSUQsUUFBUSxFQUFFUixTQUFTLENBQUNVLEk7O0VBRXBCO0FBQ0o7QUFDQTtFQUNJSCxLQUFLLEVBQUVQLFNBQVMsQ0FBQ1csTUFBVixDQUFpQkM7OztBQXNCNUIsZUFBZVYsU0FBUyxDQUFDRywwQkFBRCxDQUF4QiJ9