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

var _excluded = ["children", "isAstrixShown"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var FormFieldLabel = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(FormFieldLabel, _PureComponent);

  var _super = _createSuper(FormFieldLabel);

  function FormFieldLabel() {
    (0, _classCallCheck2["default"])(this, FormFieldLabel);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(FormFieldLabel, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          isAstrixShown = _this$props.isAstrixShown,
          props = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      return /*#__PURE__*/_react["default"].createElement(_typography.Label, (0, _extends2["default"])({
        display: "block"
      }, props), children, ' ', isAstrixShown && /*#__PURE__*/_react["default"].createElement("span", {
        title: "This field is required."
      }, "*"));
    }
  }]);
  return FormFieldLabel;
}(_react.PureComponent);

exports["default"] = FormFieldLabel;
FormFieldLabel.displayName = "FormFieldLabel";
(0, _defineProperty2["default"])(FormFieldLabel, "propTypes", _objectSpread(_objectSpread({}, _typography.Label.propTypes), {}, {
  /**
   * Whether or not to show an asterix after the label.
   */
  isAstrixShown: _propTypes["default"].bool
}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJGb3JtRmllbGRMYWJlbCIsInByb3BzIiwiY2hpbGRyZW4iLCJpc0FzdHJpeFNob3duIiwiUHVyZUNvbXBvbmVudCIsIkxhYmVsIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mb3JtLWZpZWxkL3NyYy9Gb3JtRmllbGRMYWJlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtRmllbGRMYWJlbCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBMYWJlbCBjb21wb25lbnQgYXMgdGhlIGJhc2UuXG4gICAgICovXG4gICAgLi4uTGFiZWwucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogV2hldGhlciBvciBub3QgdG8gc2hvdyBhbiBhc3Rlcml4IGFmdGVyIHRoZSBsYWJlbC5cbiAgICAgKi9cbiAgICBpc0FzdHJpeFNob3duOiBQcm9wVHlwZXMuYm9vbFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIGlzQXN0cml4U2hvd24sIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYWJlbCBkaXNwbGF5PVwiYmxvY2tcIiB7Li4ucHJvcHN9PlxuICAgICAgICB7Y2hpbGRyZW59eycgJ31cbiAgICAgICAge2lzQXN0cml4U2hvd24gJiYgPHNwYW4gdGl0bGU9XCJUaGlzIGZpZWxkIGlzIHJlcXVpcmVkLlwiPio8L3NwYW4+fVxuICAgICAgPC9MYWJlbD5cbiAgICApXG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGM7Ozs7Ozs7Ozs7OztXQWFuQixrQkFBUztNQUNQLGtCQUE4QyxLQUFLQyxLQUFuRDtNQUFBLElBQVFDLFFBQVIsZUFBUUEsUUFBUjtNQUFBLElBQWtCQyxhQUFsQixlQUFrQkEsYUFBbEI7TUFBQSxJQUFvQ0YsS0FBcEM7TUFDQSxvQkFDRSxnQ0FBQyxpQkFBRDtRQUFPLE9BQU8sRUFBQztNQUFmLEdBQTJCQSxLQUEzQixHQUNHQyxRQURILEVBQ2EsR0FEYixFQUVHQyxhQUFhLGlCQUFJO1FBQU0sS0FBSyxFQUFDO01BQVosT0FGcEIsQ0FERjtJQU1EOzs7RUFyQnlDQyxvQjs7O0FBQXZCSixjO2lDQUFBQSxjLCtDQUtkSyxpQkFBQSxDQUFNQyxTO0VBRVQ7QUFDSjtBQUNBO0VBQ0lILGFBQWEsRUFBRUkscUJBQUEsQ0FBVUMifQ==