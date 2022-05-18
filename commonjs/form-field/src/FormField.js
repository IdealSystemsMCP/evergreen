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

var _uiBox = _interopRequireWildcard(require("ui-box"));

var _FormFieldLabel = _interopRequireDefault(require("./FormFieldLabel"));

var _FormFieldDescription = _interopRequireDefault(require("./FormFieldDescription"));

var _FormFieldValidationMessage = _interopRequireDefault(require("./FormFieldValidationMessage"));

var _FormFieldHint = _interopRequireDefault(require("./FormFieldHint"));

var _excluded = ["hint", "label", "labelFor", "children", "isRequired", "labelProps", "description", "validationMessage"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var FormField = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(FormField, _PureComponent);

  var _super = _createSuper(FormField);

  function FormField() {
    (0, _classCallCheck2["default"])(this, FormField);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(FormField, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          hint = _this$props.hint,
          label = _this$props.label,
          labelFor = _this$props.labelFor,
          children = _this$props.children,
          isRequired = _this$props.isRequired,
          labelProps = _this$props.labelProps,
          description = _this$props.description,
          validationMessage = _this$props.validationMessage,
          props = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      return /*#__PURE__*/_react["default"].createElement(_uiBox["default"], props, /*#__PURE__*/_react["default"].createElement(_FormFieldLabel["default"], (0, _extends2["default"])({
        htmlFor: labelFor,
        isAstrixShown: isRequired,
        marginBottom: description ? 0 : 4
      }, labelProps), label), typeof description === 'string' ? /*#__PURE__*/_react["default"].createElement(_FormFieldDescription["default"], {
        marginBottom: 4
      }, description) : description, children, typeof validationMessage === 'string' ? /*#__PURE__*/_react["default"].createElement(_FormFieldValidationMessage["default"], {
        marginTop: 8
      }, validationMessage) : validationMessage, typeof hint === 'string' ? /*#__PURE__*/_react["default"].createElement(_FormFieldHint["default"], {
        marginTop: 6
      }, hint) : hint);
    }
  }]);
  return FormField;
}(_react.PureComponent);

exports["default"] = FormField;
FormField.displayName = "FormField";
(0, _defineProperty2["default"])(FormField, "propTypes", _objectSpread(_objectSpread(_objectSpread(_objectSpread({
  /**
   * The label used above the input element.
   */
  label: _propTypes["default"].node.isRequired,

  /**
   * Passed on the label as a htmlFor prop.
   */
  labelFor: _propTypes["default"].string,

  /**
   * Whether or not show an asterix after the label.
   */
  isRequired: _propTypes["default"].bool,

  /**
   * An optional description of the field under the label, above the input element.
   */
  description: _propTypes["default"].node,

  /**
   * An optional hint under the input element.
   */
  hint: _propTypes["default"].node,

  /**
   * If a validation message is passed it is shown under the input element
   * and above the hint. This is unaffected by `isInvalid`.
   */
  validationMessage: _propTypes["default"].node
}, _uiBox.dimensions.propTypes), _uiBox.spacing.propTypes), _uiBox.position.propTypes), _uiBox.layout.propTypes));
(0, _defineProperty2["default"])(FormField, "defaultProps", {
  labelProps: {
    size: 400
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJGb3JtRmllbGQiLCJwcm9wcyIsImhpbnQiLCJsYWJlbCIsImxhYmVsRm9yIiwiY2hpbGRyZW4iLCJpc1JlcXVpcmVkIiwibGFiZWxQcm9wcyIsImRlc2NyaXB0aW9uIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJQdXJlQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwibm9kZSIsInN0cmluZyIsImJvb2wiLCJkaW1lbnNpb25zIiwicHJvcFR5cGVzIiwic3BhY2luZyIsInBvc2l0aW9uIiwibGF5b3V0Iiwic2l6ZSJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mb3JtLWZpZWxkL3NyYy9Gb3JtRmllbGQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBCb3gsIHsgZGltZW5zaW9ucywgc3BhY2luZywgcG9zaXRpb24sIGxheW91dCB9IGZyb20gJ3VpLWJveCdcbmltcG9ydCBGb3JtRmllbGRMYWJlbCBmcm9tICcuL0Zvcm1GaWVsZExhYmVsJ1xuaW1wb3J0IEZvcm1GaWVsZERlc2NyaXB0aW9uIGZyb20gJy4vRm9ybUZpZWxkRGVzY3JpcHRpb24nXG5pbXBvcnQgRm9ybUZpZWxkVmFsaWRhdGlvbk1lc3NhZ2UgZnJvbSAnLi9Gb3JtRmllbGRWYWxpZGF0aW9uTWVzc2FnZSdcbmltcG9ydCBGb3JtRmllbGRIaW50IGZyb20gJy4vRm9ybUZpZWxkSGludCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybUZpZWxkIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogVGhlIGxhYmVsIHVzZWQgYWJvdmUgdGhlIGlucHV0IGVsZW1lbnQuXG4gICAgICovXG4gICAgbGFiZWw6IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBQYXNzZWQgb24gdGhlIGxhYmVsIGFzIGEgaHRtbEZvciBwcm9wLlxuICAgICAqL1xuICAgIGxhYmVsRm9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogV2hldGhlciBvciBub3Qgc2hvdyBhbiBhc3Rlcml4IGFmdGVyIHRoZSBsYWJlbC5cbiAgICAgKi9cbiAgICBpc1JlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIEFuIG9wdGlvbmFsIGRlc2NyaXB0aW9uIG9mIHRoZSBmaWVsZCB1bmRlciB0aGUgbGFiZWwsIGFib3ZlIHRoZSBpbnB1dCBlbGVtZW50LlxuICAgICAqL1xuICAgIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMubm9kZSxcblxuICAgIC8qKlxuICAgICAqIEFuIG9wdGlvbmFsIGhpbnQgdW5kZXIgdGhlIGlucHV0IGVsZW1lbnQuXG4gICAgICovXG4gICAgaGludDogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBJZiBhIHZhbGlkYXRpb24gbWVzc2FnZSBpcyBwYXNzZWQgaXQgaXMgc2hvd24gdW5kZXIgdGhlIGlucHV0IGVsZW1lbnRcbiAgICAgKiBhbmQgYWJvdmUgdGhlIGhpbnQuIFRoaXMgaXMgdW5hZmZlY3RlZCBieSBgaXNJbnZhbGlkYC5cbiAgICAgKi9cbiAgICB2YWxpZGF0aW9uTWVzc2FnZTogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgZGltZW5zaW9ucyBzcGVjIGZyb20gdGhlIEJveCBwcmltaXRpdmUuXG4gICAgICovXG4gICAgLi4uZGltZW5zaW9ucy5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgc3BhY2luZyBzcGVjIGZyb20gdGhlIEJveCBwcmltaXRpdmUuXG4gICAgICovXG4gICAgLi4uc3BhY2luZy5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgcG9zaXRpb24gc3BlYyBmcm9tIHRoZSBCb3ggcHJpbWl0aXZlLlxuICAgICAqL1xuICAgIC4uLnBvc2l0aW9uLnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHRoZSBsYXlvdXQgc3BlYyBmcm9tIHRoZSBCb3ggcHJpbWl0aXZlLlxuICAgICAqL1xuICAgIC4uLmxheW91dC5wcm9wVHlwZXNcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgbGFiZWxQcm9wczoge1xuICAgICAgc2l6ZTogNDAwXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGhpbnQsXG4gICAgICBsYWJlbCxcbiAgICAgIGxhYmVsRm9yLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBpc1JlcXVpcmVkLFxuICAgICAgbGFiZWxQcm9wcyxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UsXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJveCB7Li4ucHJvcHN9PlxuICAgICAgICA8Rm9ybUZpZWxkTGFiZWxcbiAgICAgICAgICBodG1sRm9yPXtsYWJlbEZvcn1cbiAgICAgICAgICBpc0FzdHJpeFNob3duPXtpc1JlcXVpcmVkfVxuICAgICAgICAgIG1hcmdpbkJvdHRvbT17ZGVzY3JpcHRpb24gPyAwIDogNH1cbiAgICAgICAgICB7Li4ubGFiZWxQcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgPC9Gb3JtRmllbGRMYWJlbD5cbiAgICAgICAge3R5cGVvZiBkZXNjcmlwdGlvbiA9PT0gJ3N0cmluZycgPyAoXG4gICAgICAgICAgPEZvcm1GaWVsZERlc2NyaXB0aW9uIG1hcmdpbkJvdHRvbT17NH0+XG4gICAgICAgICAgICB7ZGVzY3JpcHRpb259XG4gICAgICAgICAgPC9Gb3JtRmllbGREZXNjcmlwdGlvbj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICApfVxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIHt0eXBlb2YgdmFsaWRhdGlvbk1lc3NhZ2UgPT09ICdzdHJpbmcnID8gKFxuICAgICAgICAgIDxGb3JtRmllbGRWYWxpZGF0aW9uTWVzc2FnZSBtYXJnaW5Ub3A9ezh9PlxuICAgICAgICAgICAge3ZhbGlkYXRpb25NZXNzYWdlfVxuICAgICAgICAgIDwvRm9ybUZpZWxkVmFsaWRhdGlvbk1lc3NhZ2U+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgdmFsaWRhdGlvbk1lc3NhZ2VcbiAgICAgICAgKX1cbiAgICAgICAge3R5cGVvZiBoaW50ID09PSAnc3RyaW5nJyA/IChcbiAgICAgICAgICA8Rm9ybUZpZWxkSGludCBtYXJnaW5Ub3A9ezZ9PntoaW50fTwvRm9ybUZpZWxkSGludD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICBoaW50XG4gICAgICAgICl9XG4gICAgICA8L0JveD5cbiAgICApXG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFM7Ozs7Ozs7Ozs7OztXQTREbkIsa0JBQVM7TUFDUCxrQkFVSSxLQUFLQyxLQVZUO01BQUEsSUFDRUMsSUFERixlQUNFQSxJQURGO01BQUEsSUFFRUMsS0FGRixlQUVFQSxLQUZGO01BQUEsSUFHRUMsUUFIRixlQUdFQSxRQUhGO01BQUEsSUFJRUMsUUFKRixlQUlFQSxRQUpGO01BQUEsSUFLRUMsVUFMRixlQUtFQSxVQUxGO01BQUEsSUFNRUMsVUFORixlQU1FQSxVQU5GO01BQUEsSUFPRUMsV0FQRixlQU9FQSxXQVBGO01BQUEsSUFRRUMsaUJBUkYsZUFRRUEsaUJBUkY7TUFBQSxJQVNLUixLQVRMO01BWUEsb0JBQ0UsZ0NBQUMsaUJBQUQsRUFBU0EsS0FBVCxlQUNFLGdDQUFDLDBCQUFEO1FBQ0UsT0FBTyxFQUFFRyxRQURYO1FBRUUsYUFBYSxFQUFFRSxVQUZqQjtRQUdFLFlBQVksRUFBRUUsV0FBVyxHQUFHLENBQUgsR0FBTztNQUhsQyxHQUlNRCxVQUpOLEdBTUdKLEtBTkgsQ0FERixFQVNHLE9BQU9LLFdBQVAsS0FBdUIsUUFBdkIsZ0JBQ0MsZ0NBQUMsZ0NBQUQ7UUFBc0IsWUFBWSxFQUFFO01BQXBDLEdBQ0dBLFdBREgsQ0FERCxHQUtDQSxXQWRKLEVBZ0JHSCxRQWhCSCxFQWlCRyxPQUFPSSxpQkFBUCxLQUE2QixRQUE3QixnQkFDQyxnQ0FBQyxzQ0FBRDtRQUE0QixTQUFTLEVBQUU7TUFBdkMsR0FDR0EsaUJBREgsQ0FERCxHQUtDQSxpQkF0QkosRUF3QkcsT0FBT1AsSUFBUCxLQUFnQixRQUFoQixnQkFDQyxnQ0FBQyx5QkFBRDtRQUFlLFNBQVMsRUFBRTtNQUExQixHQUE4QkEsSUFBOUIsQ0FERCxHQUdDQSxJQTNCSixDQURGO0lBZ0NEOzs7RUF6R29DUSxvQjs7O0FBQWxCVixTO2lDQUFBQSxTO0VBRWpCO0FBQ0o7QUFDQTtFQUNJRyxLQUFLLEVBQUVRLHFCQUFBLENBQVVDLElBQVYsQ0FBZU4sVTs7RUFFdEI7QUFDSjtBQUNBO0VBQ0lGLFFBQVEsRUFBRU8scUJBQUEsQ0FBVUUsTTs7RUFFcEI7QUFDSjtBQUNBO0VBQ0lQLFVBQVUsRUFBRUsscUJBQUEsQ0FBVUcsSTs7RUFFdEI7QUFDSjtBQUNBO0VBQ0lOLFdBQVcsRUFBRUcscUJBQUEsQ0FBVUMsSTs7RUFFdkI7QUFDSjtBQUNBO0VBQ0lWLElBQUksRUFBRVMscUJBQUEsQ0FBVUMsSTs7RUFFaEI7QUFDSjtBQUNBO0FBQ0E7RUFDSUgsaUJBQWlCLEVBQUVFLHFCQUFBLENBQVVDO0dBSzFCRyxpQkFBQSxDQUFXQyxTLEdBS1hDLGNBQUEsQ0FBUUQsUyxHQUtSRSxlQUFBLENBQVNGLFMsR0FLVEcsYUFBQSxDQUFPSCxTO2lDQW5ET2hCLFMsa0JBc0RHO0VBQ3BCTyxVQUFVLEVBQUU7SUFDVmEsSUFBSSxFQUFFO0VBREk7QUFEUSxDIn0=