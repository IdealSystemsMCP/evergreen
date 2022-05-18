"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typography = require("../../typography");

var _theme = require("../../theme");

var _icon = require("../../icon");

var _layers = require("../../layers");

var _excluded = ["theme", "children"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var FormFieldValidationMessage = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(FormFieldValidationMessage, _PureComponent);

  var _super = _createSuper(FormFieldValidationMessage);

  function FormFieldValidationMessage() {
    (0, _classCallCheck2["default"])(this, FormFieldValidationMessage);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(FormFieldValidationMessage, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          children = _this$props.children,
          props = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      return /*#__PURE__*/_react["default"].createElement(_layers.Pane, (0, _extends2["default"])({
        display: "flex"
      }, props), /*#__PURE__*/_react["default"].createElement(_icon.Icon, {
        icon: "error",
        color: "danger",
        marginTop: 1,
        size: 14,
        marginRight: 8
      }), /*#__PURE__*/_react["default"].createElement(_typography.Paragraph, {
        marginTop: 0,
        size: 300,
        color: "danger",
        role: "alert"
      }, children));
    }
  }]);
  return FormFieldValidationMessage;
}(_react.PureComponent);

FormFieldValidationMessage.displayName = "FormFieldValidationMessage";
(0, _defineProperty2["default"])(FormFieldValidationMessage, "propTypes", _objectSpread(_objectSpread({}, _layers.Pane.propTypes), {}, {
  /**
   * The contents of the validation message.
   * This is wrapped in a paragraph, use a string.
   */
  children: _propTypes["default"].node,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: _propTypes["default"].object.isRequired
}));

var _default = (0, _theme.withTheme)(FormFieldValidationMessage);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJGb3JtRmllbGRWYWxpZGF0aW9uTWVzc2FnZSIsInByb3BzIiwidGhlbWUiLCJjaGlsZHJlbiIsIlB1cmVDb21wb25lbnQiLCJQYW5lIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJ3aXRoVGhlbWUiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZm9ybS1maWVsZC9zcmMvRm9ybUZpZWxkVmFsaWRhdGlvbk1lc3NhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFBhcmFncmFwaCB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcbmltcG9ydCB7IEljb24gfSBmcm9tICcuLi8uLi9pY29uJ1xuaW1wb3J0IHsgUGFuZSB9IGZyb20gJy4uLy4uL2xheWVycydcblxuY2xhc3MgRm9ybUZpZWxkVmFsaWRhdGlvbk1lc3NhZ2UgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgUGFuZSBjb21wb25lbnQgYXMgdGhlIGJhc2UuXG4gICAgICovXG4gICAgLi4uUGFuZS5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29udGVudHMgb2YgdGhlIHZhbGlkYXRpb24gbWVzc2FnZS5cbiAgICAgKiBUaGlzIGlzIHdyYXBwZWQgaW4gYSBwYXJhZ3JhcGgsIHVzZSBhIHN0cmluZy5cbiAgICAgKi9cbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBUaGVtZSBwcm92aWRlZCBieSBUaGVtZVByb3ZpZGVyLlxuICAgICAqL1xuICAgIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRoZW1lLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPFBhbmUgZGlzcGxheT1cImZsZXhcIiB7Li4ucHJvcHN9PlxuICAgICAgICA8SWNvblxuICAgICAgICAgIGljb249XCJlcnJvclwiXG4gICAgICAgICAgY29sb3I9XCJkYW5nZXJcIlxuICAgICAgICAgIG1hcmdpblRvcD17MX1cbiAgICAgICAgICBzaXplPXsxNH1cbiAgICAgICAgICBtYXJnaW5SaWdodD17OH1cbiAgICAgICAgLz5cbiAgICAgICAgPFBhcmFncmFwaCBtYXJnaW5Ub3A9ezB9IHNpemU9ezMwMH0gY29sb3I9XCJkYW5nZXJcIiByb2xlPVwiYWxlcnRcIj5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvUGFyYWdyYXBoPlxuICAgICAgPC9QYW5lPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoRm9ybUZpZWxkVmFsaWRhdGlvbk1lc3NhZ2UpXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLDBCOzs7Ozs7Ozs7Ozs7V0FtQkosa0JBQVM7TUFDUCxrQkFBc0MsS0FBS0MsS0FBM0M7TUFBQSxJQUFRQyxLQUFSLGVBQVFBLEtBQVI7TUFBQSxJQUFlQyxRQUFmLGVBQWVBLFFBQWY7TUFBQSxJQUE0QkYsS0FBNUI7TUFDQSxvQkFDRSxnQ0FBQyxZQUFEO1FBQU0sT0FBTyxFQUFDO01BQWQsR0FBeUJBLEtBQXpCLGdCQUNFLGdDQUFDLFVBQUQ7UUFDRSxJQUFJLEVBQUMsT0FEUDtRQUVFLEtBQUssRUFBQyxRQUZSO1FBR0UsU0FBUyxFQUFFLENBSGI7UUFJRSxJQUFJLEVBQUUsRUFKUjtRQUtFLFdBQVcsRUFBRTtNQUxmLEVBREYsZUFRRSxnQ0FBQyxxQkFBRDtRQUFXLFNBQVMsRUFBRSxDQUF0QjtRQUF5QixJQUFJLEVBQUUsR0FBL0I7UUFBb0MsS0FBSyxFQUFDLFFBQTFDO1FBQW1ELElBQUksRUFBQztNQUF4RCxHQUNHRSxRQURILENBUkYsQ0FERjtJQWNEOzs7RUFuQ3NDQyxvQjs7QUFBbkNKLDBCO2lDQUFBQSwwQiwrQ0FLQ0ssWUFBQSxDQUFLQyxTO0VBRVI7QUFDSjtBQUNBO0FBQ0E7RUFDSUgsUUFBUSxFQUFFSSxxQkFBQSxDQUFVQyxJOztFQUVwQjtBQUNKO0FBQ0E7RUFDSU4sS0FBSyxFQUFFSyxxQkFBQSxDQUFVRSxNQUFWLENBQWlCQzs7O2VBc0JiLElBQUFDLGdCQUFBLEVBQVVYLDBCQUFWLEMifQ==