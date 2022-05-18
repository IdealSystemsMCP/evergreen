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

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uiBox = _interopRequireWildcard(require("ui-box"));

var _autocomplete = require("../../autocomplete");

var _textInput = require("../../text-input");

var _buttons = require("../../buttons");

var _deprecated = _interopRequireDefault(require("../../lib/deprecated"));

var _excluded = ["items", "selectedItem", "defaultSelectedItem", "initialSelectedItem", "itemToString", "width", "height", "onChange", "placeholder", "inputProps", "buttonProps", "openOnFocus", "autocompleteProps", "isLoading"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Combobox = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Combobox, _PureComponent);

  var _super = _createSuper(Combobox);

  function Combobox(props, context) {
    var _this;

    (0, _classCallCheck2["default"])(this, Combobox);
    _this = _super.call(this, props, context);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleStateChange", function (changes) {
      if (Object.prototype.hasOwnProperty.call(changes, 'isOpen')) {
        if (!changes.isOpen) {
          _this.setState({
            isOpenedByButton: false
          });
        }
      }
    });
    _this.state = {
      isOpenedByButton: false
    };
    return _this;
  }

  (0, _createClass2["default"])(Combobox, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          items = _this$props.items,
          selectedItem = _this$props.selectedItem,
          defaultSelectedItem = _this$props.defaultSelectedItem,
          initialSelectedItem = _this$props.initialSelectedItem,
          itemToString = _this$props.itemToString,
          width = _this$props.width,
          height = _this$props.height,
          onChange = _this$props.onChange,
          placeholder = _this$props.placeholder,
          inputProps = _this$props.inputProps,
          buttonProps = _this$props.buttonProps,
          openOnFocus = _this$props.openOnFocus,
          autocompleteProps = _this$props.autocompleteProps,
          isLoading = _this$props.isLoading,
          props = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      var disabled = props.disabled || isLoading;
      return /*#__PURE__*/_react["default"].createElement(_autocomplete.Autocomplete, (0, _extends2["default"])({
        items: items,
        selectedItem: selectedItem,
        initialSelectedItem: initialSelectedItem || defaultSelectedItem,
        itemToString: itemToString,
        onChange: onChange,
        onStateChange: this.handleStateChange,
        isFilterDisabled: this.state.isOpenedByButton
      }, autocompleteProps), function (_ref) {
        var getRef = _ref.getRef,
            isShown = _ref.isShown,
            openMenu = _ref.openMenu,
            inputValue = _ref.inputValue,
            getInputProps = _ref.getInputProps,
            getToggleButtonProps = _ref.getToggleButtonProps,
            clearSelection = _ref.clearSelection;
        return /*#__PURE__*/_react["default"].createElement(_uiBox["default"], (0, _extends2["default"])({
          innerRef: function innerRef(ref) {
            return getRef(ref);
          },
          display: "inline-flex",
          width: width
        }, props), /*#__PURE__*/_react["default"].createElement(_textInput.TextInput, (0, _extends2["default"])({
          width: 0,
          flex: 1,
          height: height,
          value: inputValue,
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          disabled: disabled
        }, getInputProps(_objectSpread(_objectSpread({}, inputProps), {}, {
          placeholder: placeholder,
          onFocus: function onFocus() {
            if (openOnFocus) openMenu();
          },
          onChange: function onChange(e) {
            if (_this2.state.isOpenedByButton) {
              _this2.setState({
                isOpenedByButton: false
              });
            }

            if (e.target.value.trim() === '') {
              // Prevent the selected item from sticking around
              clearSelection();
            }
          }
        })))), /*#__PURE__*/_react["default"].createElement(_buttons.IconButton, (0, _extends2["default"])({
          iconAim: "down",
          color: "muted",
          icon: isLoading ? '' : 'caret-down',
          appearance: "default",
          height: height,
          marginLeft: -1,
          paddingLeft: isLoading ? 12 : 0,
          paddingRight: 0,
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          disabled: disabled,
          isLoading: isLoading
        }, getToggleButtonProps(_objectSpread(_objectSpread({}, buttonProps), {}, {
          onClick: function onClick() {
            if (!isShown) {
              _this2.setState({
                isOpenedByButton: true
              });
            }
          }
        })))));
      });
    }
  }]);
  return Combobox;
}(_react.PureComponent);

exports["default"] = Combobox;
Combobox.displayName = "Combobox";
(0, _defineProperty2["default"])(Combobox, "propTypes", _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _uiBox.dimensions.propTypes), _uiBox.spacing.propTypes), _uiBox.position.propTypes), _uiBox.layout.propTypes), {}, {
  /**
   * The options to show in the menu.
   */
  items: _propTypes["default"].array.isRequired,

  /**
   * The selected item when controlled.
   */
  selectedItem: _propTypes["default"].any,

  /**
   * Function called when value changes.
   */
  onChange: _propTypes["default"].func,

  /**
   * When true, open the autocomplete on focus.
   */
  openOnFocus: _propTypes["default"].bool,

  /**
   * Default selected item when uncontrolled.
   */
  initialSelectedItem: _propTypes["default"].any,

  /**
   * Default selected item when uncontrolled (deprecated)
   */
  defaultSelectedItem: (0, _deprecated["default"])(_propTypes["default"].any, 'Use "initialSelectedItem" instead.'),

  /**
   * The placeholder text when there is no value present.
   */
  placeholder: _propTypes["default"].string,

  /**
   * In case the array of items is not an array of strings,
   * this function is used on each item to return the string that will be shown on the filter
   */
  itemToString: _propTypes["default"].func,

  /**
   * Properties forwarded to the input. Use with caution.
   */
  inputProps: _propTypes["default"].object,

  /**
   * Properties forwarded to the button. Use with caution.
   */
  buttonProps: _propTypes["default"].object,

  /**
   * Properties forwarded to the autocomplete component. Use with caution.
   */
  autocompleteProps: _propTypes["default"].object,

  /**
   * Makes the input element disabled.
   */
  disabled: _propTypes["default"].bool,

  /**
   * When true, show a loading spinner. This also disables the button.
   */
  isLoading: _propTypes["default"].bool
}));
(0, _defineProperty2["default"])(Combobox, "defaultProps", {
  width: 240,
  openOnFocus: false,
  disabled: false,
  isLoading: false
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJDb21ib2JveCIsInByb3BzIiwiY29udGV4dCIsImNoYW5nZXMiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJpc09wZW4iLCJzZXRTdGF0ZSIsImlzT3BlbmVkQnlCdXR0b24iLCJzdGF0ZSIsIml0ZW1zIiwic2VsZWN0ZWRJdGVtIiwiZGVmYXVsdFNlbGVjdGVkSXRlbSIsImluaXRpYWxTZWxlY3RlZEl0ZW0iLCJpdGVtVG9TdHJpbmciLCJ3aWR0aCIsImhlaWdodCIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJpbnB1dFByb3BzIiwiYnV0dG9uUHJvcHMiLCJvcGVuT25Gb2N1cyIsImF1dG9jb21wbGV0ZVByb3BzIiwiaXNMb2FkaW5nIiwiZGlzYWJsZWQiLCJoYW5kbGVTdGF0ZUNoYW5nZSIsImdldFJlZiIsImlzU2hvd24iLCJvcGVuTWVudSIsImlucHV0VmFsdWUiLCJnZXRJbnB1dFByb3BzIiwiZ2V0VG9nZ2xlQnV0dG9uUHJvcHMiLCJjbGVhclNlbGVjdGlvbiIsInJlZiIsIm9uRm9jdXMiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ0cmltIiwib25DbGljayIsIlB1cmVDb21wb25lbnQiLCJkaW1lbnNpb25zIiwicHJvcFR5cGVzIiwic3BhY2luZyIsInBvc2l0aW9uIiwibGF5b3V0IiwiUHJvcFR5cGVzIiwiYXJyYXkiLCJpc1JlcXVpcmVkIiwiYW55IiwiZnVuYyIsImJvb2wiLCJkZXByZWNhdGVkIiwic3RyaW5nIiwib2JqZWN0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbWJvYm94L3NyYy9Db21ib2JveC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEJveCwgeyBkaW1lbnNpb25zLCBzcGFjaW5nLCBwb3NpdGlvbiwgbGF5b3V0IH0gZnJvbSAndWktYm94J1xuaW1wb3J0IHsgQXV0b2NvbXBsZXRlIH0gZnJvbSAnLi4vLi4vYXV0b2NvbXBsZXRlJ1xuaW1wb3J0IHsgVGV4dElucHV0IH0gZnJvbSAnLi4vLi4vdGV4dC1pbnB1dCdcbmltcG9ydCB7IEljb25CdXR0b24gfSBmcm9tICcuLi8uLi9idXR0b25zJ1xuaW1wb3J0IGRlcHJlY2F0ZWQgZnJvbSAnLi4vLi4vbGliL2RlcHJlY2F0ZWQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbWJvYm94IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogSW1wbGVtZW50cyBzb21lIEFQSXMgZnJvbSB1aS1ib3guXG4gICAgICovXG4gICAgLi4uZGltZW5zaW9ucy5wcm9wVHlwZXMsXG4gICAgLi4uc3BhY2luZy5wcm9wVHlwZXMsXG4gICAgLi4ucG9zaXRpb24ucHJvcFR5cGVzLFxuICAgIC4uLmxheW91dC5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3B0aW9ucyB0byBzaG93IGluIHRoZSBtZW51LlxuICAgICAqL1xuICAgIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBzZWxlY3RlZCBpdGVtIHdoZW4gY29udHJvbGxlZC5cbiAgICAgKi9cbiAgICBzZWxlY3RlZEl0ZW06IFByb3BUeXBlcy5hbnksXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiBjYWxsZWQgd2hlbiB2YWx1ZSBjaGFuZ2VzLlxuICAgICAqL1xuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgb3BlbiB0aGUgYXV0b2NvbXBsZXRlIG9uIGZvY3VzLlxuICAgICAqL1xuICAgIG9wZW5PbkZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIERlZmF1bHQgc2VsZWN0ZWQgaXRlbSB3aGVuIHVuY29udHJvbGxlZC5cbiAgICAgKi9cbiAgICBpbml0aWFsU2VsZWN0ZWRJdGVtOiBQcm9wVHlwZXMuYW55LFxuXG4gICAgLyoqXG4gICAgICogRGVmYXVsdCBzZWxlY3RlZCBpdGVtIHdoZW4gdW5jb250cm9sbGVkIChkZXByZWNhdGVkKVxuICAgICAqL1xuICAgIGRlZmF1bHRTZWxlY3RlZEl0ZW06IGRlcHJlY2F0ZWQoXG4gICAgICBQcm9wVHlwZXMuYW55LFxuICAgICAgJ1VzZSBcImluaXRpYWxTZWxlY3RlZEl0ZW1cIiBpbnN0ZWFkLidcbiAgICApLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHBsYWNlaG9sZGVyIHRleHQgd2hlbiB0aGVyZSBpcyBubyB2YWx1ZSBwcmVzZW50LlxuICAgICAqL1xuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogSW4gY2FzZSB0aGUgYXJyYXkgb2YgaXRlbXMgaXMgbm90IGFuIGFycmF5IG9mIHN0cmluZ3MsXG4gICAgICogdGhpcyBmdW5jdGlvbiBpcyB1c2VkIG9uIGVhY2ggaXRlbSB0byByZXR1cm4gdGhlIHN0cmluZyB0aGF0IHdpbGwgYmUgc2hvd24gb24gdGhlIGZpbHRlclxuICAgICAqL1xuICAgIGl0ZW1Ub1N0cmluZzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0aWVzIGZvcndhcmRlZCB0byB0aGUgaW5wdXQuIFVzZSB3aXRoIGNhdXRpb24uXG4gICAgICovXG4gICAgaW5wdXRQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnRpZXMgZm9yd2FyZGVkIHRvIHRoZSBidXR0b24uIFVzZSB3aXRoIGNhdXRpb24uXG4gICAgICovXG4gICAgYnV0dG9uUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0aWVzIGZvcndhcmRlZCB0byB0aGUgYXV0b2NvbXBsZXRlIGNvbXBvbmVudC4gVXNlIHdpdGggY2F1dGlvbi5cbiAgICAgKi9cbiAgICBhdXRvY29tcGxldGVQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAgIC8qKlxuICAgICAqIE1ha2VzIHRoZSBpbnB1dCBlbGVtZW50IGRpc2FibGVkLlxuICAgICAqL1xuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgc2hvdyBhIGxvYWRpbmcgc3Bpbm5lci4gVGhpcyBhbHNvIGRpc2FibGVzIHRoZSBidXR0b24uXG4gICAgICovXG4gICAgaXNMb2FkaW5nOiBQcm9wVHlwZXMuYm9vbFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB3aWR0aDogMjQwLFxuICAgIG9wZW5PbkZvY3VzOiBmYWxzZSxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgaXNMb2FkaW5nOiBmYWxzZVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpIHtcbiAgICBzdXBlcihwcm9wcywgY29udGV4dClcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNPcGVuZWRCeUJ1dHRvbjogZmFsc2VcbiAgICB9XG4gIH1cblxuICBoYW5kbGVTdGF0ZUNoYW5nZSA9IGNoYW5nZXMgPT4ge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoY2hhbmdlcywgJ2lzT3BlbicpKSB7XG4gICAgICBpZiAoIWNoYW5nZXMuaXNPcGVuKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc09wZW5lZEJ5QnV0dG9uOiBmYWxzZSB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBpdGVtcyxcbiAgICAgIHNlbGVjdGVkSXRlbSxcbiAgICAgIGRlZmF1bHRTZWxlY3RlZEl0ZW0sIC8vIERlcHJlY2F0ZWRcbiAgICAgIGluaXRpYWxTZWxlY3RlZEl0ZW0sXG4gICAgICBpdGVtVG9TdHJpbmcsXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICBpbnB1dFByb3BzLFxuICAgICAgYnV0dG9uUHJvcHMsXG4gICAgICBvcGVuT25Gb2N1cyxcbiAgICAgIGF1dG9jb21wbGV0ZVByb3BzLFxuICAgICAgaXNMb2FkaW5nLFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZCB8fCBpc0xvYWRpbmdcblxuICAgIHJldHVybiAoXG4gICAgICA8QXV0b2NvbXBsZXRlXG4gICAgICAgIGl0ZW1zPXtpdGVtc31cbiAgICAgICAgc2VsZWN0ZWRJdGVtPXtzZWxlY3RlZEl0ZW19XG4gICAgICAgIGluaXRpYWxTZWxlY3RlZEl0ZW09e2luaXRpYWxTZWxlY3RlZEl0ZW0gfHwgZGVmYXVsdFNlbGVjdGVkSXRlbX1cbiAgICAgICAgaXRlbVRvU3RyaW5nPXtpdGVtVG9TdHJpbmd9XG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgb25TdGF0ZUNoYW5nZT17dGhpcy5oYW5kbGVTdGF0ZUNoYW5nZX1cbiAgICAgICAgaXNGaWx0ZXJEaXNhYmxlZD17dGhpcy5zdGF0ZS5pc09wZW5lZEJ5QnV0dG9ufVxuICAgICAgICB7Li4uYXV0b2NvbXBsZXRlUHJvcHN9XG4gICAgICA+XG4gICAgICAgIHsoe1xuICAgICAgICAgIGdldFJlZixcbiAgICAgICAgICBpc1Nob3duLFxuICAgICAgICAgIG9wZW5NZW51LFxuICAgICAgICAgIGlucHV0VmFsdWUsXG4gICAgICAgICAgZ2V0SW5wdXRQcm9wcyxcbiAgICAgICAgICBnZXRUb2dnbGVCdXR0b25Qcm9wcyxcbiAgICAgICAgICBjbGVhclNlbGVjdGlvblxuICAgICAgICB9KSA9PiAoXG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgaW5uZXJSZWY9e3JlZiA9PiBnZXRSZWYocmVmKX1cbiAgICAgICAgICAgIGRpc3BsYXk9XCJpbmxpbmUtZmxleFwiXG4gICAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgICB3aWR0aD17MH1cbiAgICAgICAgICAgICAgZmxleD17MX1cbiAgICAgICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxuICAgICAgICAgICAgICBib3JkZXJUb3BSaWdodFJhZGl1cz17MH1cbiAgICAgICAgICAgICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM9ezB9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICAgICAgey4uLmdldElucHV0UHJvcHMoe1xuICAgICAgICAgICAgICAgIC4uLmlucHV0UHJvcHMsXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICAgICAgICAgICAgb25Gb2N1czogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKG9wZW5PbkZvY3VzKSBvcGVuTWVudSgpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbkNoYW5nZTogZSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5pc09wZW5lZEJ5QnV0dG9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgIGlzT3BlbmVkQnlCdXR0b246IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC52YWx1ZS50cmltKCkgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFByZXZlbnQgdGhlIHNlbGVjdGVkIGl0ZW0gZnJvbSBzdGlja2luZyBhcm91bmRcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJTZWxlY3Rpb24oKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgaWNvbkFpbT1cImRvd25cIlxuICAgICAgICAgICAgICBjb2xvcj1cIm11dGVkXCJcbiAgICAgICAgICAgICAgaWNvbj17aXNMb2FkaW5nID8gJycgOiAnY2FyZXQtZG93bid9XG4gICAgICAgICAgICAgIGFwcGVhcmFuY2U9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgICAgIG1hcmdpbkxlZnQ9ey0xfVxuICAgICAgICAgICAgICBwYWRkaW5nTGVmdD17aXNMb2FkaW5nID8gMTIgOiAwfVxuICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ9ezB9XG4gICAgICAgICAgICAgIGJvcmRlclRvcExlZnRSYWRpdXM9ezB9XG4gICAgICAgICAgICAgIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM9ezB9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICAgICAgaXNMb2FkaW5nPXtpc0xvYWRpbmd9XG4gICAgICAgICAgICAgIHsuLi5nZXRUb2dnbGVCdXR0b25Qcm9wcyh7XG4gICAgICAgICAgICAgICAgLi4uYnV0dG9uUHJvcHMsXG4gICAgICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKCFpc1Nob3duKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc09wZW5lZEJ5QnV0dG9uOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICl9XG4gICAgICA8L0F1dG9j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