import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _excluded = ["items", "selectedItem", "defaultSelectedItem", "initialSelectedItem", "itemToString", "width", "height", "onChange", "placeholder", "inputProps", "buttonProps", "openOnFocus", "autocompleteProps", "isLoading"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box, { dimensions, spacing, position, layout } from 'ui-box';
import { Autocomplete } from '../../autocomplete';
import { TextInput } from '../../text-input';
import { IconButton } from '../../buttons';
import deprecated from '../../lib/deprecated';

var Combobox = /*#__PURE__*/function (_PureComponent) {
  _inherits(Combobox, _PureComponent);

  var _super = _createSuper(Combobox);

  function Combobox(props, context) {
    var _this;

    _classCallCheck(this, Combobox);

    _this = _super.call(this, props, context);

    _defineProperty(_assertThisInitialized(_this), "handleStateChange", function (changes) {
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

  _createClass(Combobox, [{
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
          props = _objectWithoutProperties(_this$props, _excluded);

      var disabled = props.disabled || isLoading;
      return /*#__PURE__*/React.createElement(Autocomplete, _extends({
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
        return /*#__PURE__*/React.createElement(Box, _extends({
          innerRef: function innerRef(ref) {
            return getRef(ref);
          },
          display: "inline-flex",
          width: width
        }, props), /*#__PURE__*/React.createElement(TextInput, _extends({
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
        })))), /*#__PURE__*/React.createElement(IconButton, _extends({
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
}(PureComponent);

Combobox.displayName = "Combobox";

_defineProperty(Combobox, "propTypes", _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, dimensions.propTypes), spacing.propTypes), position.propTypes), layout.propTypes), {}, {
  /**
   * The options to show in the menu.
   */
  items: PropTypes.array.isRequired,

  /**
   * The selected item when controlled.
   */
  selectedItem: PropTypes.any,

  /**
   * Function called when value changes.
   */
  onChange: PropTypes.func,

  /**
   * When true, open the autocomplete on focus.
   */
  openOnFocus: PropTypes.bool,

  /**
   * Default selected item when uncontrolled.
   */
  initialSelectedItem: PropTypes.any,

  /**
   * Default selected item when uncontrolled (deprecated)
   */
  defaultSelectedItem: deprecated(PropTypes.any, 'Use "initialSelectedItem" instead.'),

  /**
   * The placeholder text when there is no value present.
   */
  placeholder: PropTypes.string,

  /**
   * In case the array of items is not an array of strings,
   * this function is used on each item to return the string that will be shown on the filter
   */
  itemToString: PropTypes.func,

  /**
   * Properties forwarded to the input. Use with caution.
   */
  inputProps: PropTypes.object,

  /**
   * Properties forwarded to the button. Use with caution.
   */
  buttonProps: PropTypes.object,

  /**
   * Properties forwarded to the autocomplete component. Use with caution.
   */
  autocompleteProps: PropTypes.object,

  /**
   * Makes the input element disabled.
   */
  disabled: PropTypes.bool,

  /**
   * When true, show a loading spinner. This also disables the button.
   */
  isLoading: PropTypes.bool
}));

_defineProperty(Combobox, "defaultProps", {
  width: 240,
  openOnFocus: false,
  disabled: false,
  isLoading: false
});

export { Combobox as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJCb3giLCJkaW1lbnNpb25zIiwic3BhY2luZyIsInBvc2l0aW9uIiwibGF5b3V0IiwiQXV0b2NvbXBsZXRlIiwiVGV4dElucHV0IiwiSWNvbkJ1dHRvbiIsImRlcHJlY2F0ZWQiLCJDb21ib2JveCIsInByb3BzIiwiY29udGV4dCIsImNoYW5nZXMiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJpc09wZW4iLCJzZXRTdGF0ZSIsImlzT3BlbmVkQnlCdXR0b24iLCJzdGF0ZSIsIml0ZW1zIiwic2VsZWN0ZWRJdGVtIiwiZGVmYXVsdFNlbGVjdGVkSXRlbSIsImluaXRpYWxTZWxlY3RlZEl0ZW0iLCJpdGVtVG9TdHJpbmciLCJ3aWR0aCIsImhlaWdodCIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJpbnB1dFByb3BzIiwiYnV0dG9uUHJvcHMiLCJvcGVuT25Gb2N1cyIsImF1dG9jb21wbGV0ZVByb3BzIiwiaXNMb2FkaW5nIiwiZGlzYWJsZWQiLCJoYW5kbGVTdGF0ZUNoYW5nZSIsImdldFJlZiIsImlzU2hvd24iLCJvcGVuTWVudSIsImlucHV0VmFsdWUiLCJnZXRJbnB1dFByb3BzIiwiZ2V0VG9nZ2xlQnV0dG9uUHJvcHMiLCJjbGVhclNlbGVjdGlvbiIsInJlZiIsIm9uRm9jdXMiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ0cmltIiwib25DbGljayIsInByb3BUeXBlcyIsImFycmF5IiwiaXNSZXF1aXJlZCIsImFueSIsImZ1bmMiLCJib29sIiwic3RyaW5nIiwib2JqZWN0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbWJvYm94L3NyYy9Db21ib2JveC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEJveCwgeyBkaW1lbnNpb25zLCBzcGFjaW5nLCBwb3NpdGlvbiwgbGF5b3V0IH0gZnJvbSAndWktYm94J1xuaW1wb3J0IHsgQXV0b2NvbXBsZXRlIH0gZnJvbSAnLi4vLi4vYXV0b2NvbXBsZXRlJ1xuaW1wb3J0IHsgVGV4dElucHV0IH0gZnJvbSAnLi4vLi4vdGV4dC1pbnB1dCdcbmltcG9ydCB7IEljb25CdXR0b24gfSBmcm9tICcuLi8uLi9idXR0b25zJ1xuaW1wb3J0IGRlcHJlY2F0ZWQgZnJvbSAnLi4vLi4vbGliL2RlcHJlY2F0ZWQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbWJvYm94IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogSW1wbGVtZW50cyBzb21lIEFQSXMgZnJvbSB1aS1ib3guXG4gICAgICovXG4gICAgLi4uZGltZW5zaW9ucy5wcm9wVHlwZXMsXG4gICAgLi4uc3BhY2luZy5wcm9wVHlwZXMsXG4gICAgLi4ucG9zaXRpb24ucHJvcFR5cGVzLFxuICAgIC4uLmxheW91dC5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3B0aW9ucyB0byBzaG93IGluIHRoZSBtZW51LlxuICAgICAqL1xuICAgIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBzZWxlY3RlZCBpdGVtIHdoZW4gY29udHJvbGxlZC5cbiAgICAgKi9cbiAgICBzZWxlY3RlZEl0ZW06IFByb3BUeXBlcy5hbnksXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiBjYWxsZWQgd2hlbiB2YWx1ZSBjaGFuZ2VzLlxuICAgICAqL1xuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgb3BlbiB0aGUgYXV0b2NvbXBsZXRlIG9uIGZvY3VzLlxuICAgICAqL1xuICAgIG9wZW5PbkZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIERlZmF1bHQgc2VsZWN0ZWQgaXRlbSB3aGVuIHVuY29udHJvbGxlZC5cbiAgICAgKi9cbiAgICBpbml0aWFsU2VsZWN0ZWRJdGVtOiBQcm9wVHlwZXMuYW55LFxuXG4gICAgLyoqXG4gICAgICogRGVmYXVsdCBzZWxlY3RlZCBpdGVtIHdoZW4gdW5jb250cm9sbGVkIChkZXByZWNhdGVkKVxuICAgICAqL1xuICAgIGRlZmF1bHRTZWxlY3RlZEl0ZW06IGRlcHJlY2F0ZWQoXG4gICAgICBQcm9wVHlwZXMuYW55LFxuICAgICAgJ1VzZSBcImluaXRpYWxTZWxlY3RlZEl0ZW1cIiBpbnN0ZWFkLidcbiAgICApLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHBsYWNlaG9sZGVyIHRleHQgd2hlbiB0aGVyZSBpcyBubyB2YWx1ZSBwcmVzZW50LlxuICAgICAqL1xuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogSW4gY2FzZSB0aGUgYXJyYXkgb2YgaXRlbXMgaXMgbm90IGFuIGFycmF5IG9mIHN0cmluZ3MsXG4gICAgICogdGhpcyBmdW5jdGlvbiBpcyB1c2VkIG9uIGVhY2ggaXRlbSB0byByZXR1cm4gdGhlIHN0cmluZyB0aGF0IHdpbGwgYmUgc2hvd24gb24gdGhlIGZpbHRlclxuICAgICAqL1xuICAgIGl0ZW1Ub1N0cmluZzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0aWVzIGZvcndhcmRlZCB0byB0aGUgaW5wdXQuIFVzZSB3aXRoIGNhdXRpb24uXG4gICAgICovXG4gICAgaW5wdXRQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnRpZXMgZm9yd2FyZGVkIHRvIHRoZSBidXR0b24uIFVzZSB3aXRoIGNhdXRpb24uXG4gICAgICovXG4gICAgYnV0dG9uUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0aWVzIGZvcndhcmRlZCB0byB0aGUgYXV0b2NvbXBsZXRlIGNvbXBvbmVudC4gVXNlIHdpdGggY2F1dGlvbi5cbiAgICAgKi9cbiAgICBhdXRvY29tcGxldGVQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAgIC8qKlxuICAgICAqIE1ha2VzIHRoZSBpbnB1dCBlbGVtZW50IGRpc2FibGVkLlxuICAgICAqL1xuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgc2hvdyBhIGxvYWRpbmcgc3Bpbm5lci4gVGhpcyBhbHNvIGRpc2FibGVzIHRoZSBidXR0b24uXG4gICAgICovXG4gICAgaXNMb2FkaW5nOiBQcm9wVHlwZXMuYm9vbFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB3aWR0aDogMjQwLFxuICAgIG9wZW5PbkZvY3VzOiBmYWxzZSxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgaXNMb2FkaW5nOiBmYWxzZVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpIHtcbiAgICBzdXBlcihwcm9wcywgY29udGV4dClcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNPcGVuZWRCeUJ1dHRvbjogZmFsc2VcbiAgICB9XG4gIH1cblxuICBoYW5kbGVTdGF0ZUNoYW5nZSA9IGNoYW5nZXMgPT4ge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoY2hhbmdlcywgJ2lzT3BlbicpKSB7XG4gICAgICBpZiAoIWNoYW5nZXMuaXNPcGVuKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc09wZW5lZEJ5QnV0dG9uOiBmYWxzZSB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBpdGVtcyxcbiAgICAgIHNlbGVjdGVkSXRlbSxcbiAgICAgIGRlZmF1bHRTZWxlY3RlZEl0ZW0sIC8vIERlcHJlY2F0ZWRcbiAgICAgIGluaXRpYWxTZWxlY3RlZEl0ZW0sXG4gICAgICBpdGVtVG9TdHJpbmcsXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICBpbnB1dFByb3BzLFxuICAgICAgYnV0dG9uUHJvcHMsXG4gICAgICBvcGVuT25Gb2N1cyxcbiAgICAgIGF1dG9jb21wbGV0ZVByb3BzLFxuICAgICAgaXNMb2FkaW5nLFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZCB8fCBpc0xvYWRpbmdcblxuICAgIHJldHVybiAoXG4gICAgICA8QXV0b2NvbXBsZXRlXG4gICAgICAgIGl0ZW1zPXtpdGVtc31cbiAgICAgICAgc2VsZWN0ZWRJdGVtPXtzZWxlY3RlZEl0ZW19XG4gICAgICAgIGluaXRpYWxTZWxlY3RlZEl0ZW09e2luaXRpYWxTZWxlY3RlZEl0ZW0gfHwgZGVmYXVsdFNlbGVjdGVkSXRlbX1cbiAgICAgICAgaXRlbVRvU3RyaW5nPXtpdGVtVG9TdHJpbmd9XG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgb25TdGF0ZUNoYW5nZT17dGhpcy5oYW5kbGVTdGF0ZUNoYW5nZX1cbiAgICAgICAgaXNGaWx0ZXJEaXNhYmxlZD17dGhpcy5zdGF0ZS5pc09wZW5lZEJ5QnV0dG9ufVxuICAgICAgICB7Li4uYXV0b2NvbXBsZXRlUHJvcHN9XG4gICAgICA+XG4gICAgICAgIHsoe1xuICAgICAgICAgIGdldFJlZixcbiAgICAgICAgICBpc1Nob3duLFxuICAgICAgICAgIG9wZW5NZW51LFxuICAgICAgICAgIGlucHV0VmFsdWUsXG4gICAgICAgICAgZ2V0SW5wdXRQcm9wcyxcbiAgICAgICAgICBnZXRUb2dnbGVCdXR0b25Qcm9wcyxcbiAgICAgICAgICBjbGVhclNlbGVjdGlvblxuICAgICAgICB9KSA9PiAoXG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgaW5uZXJSZWY9e3JlZiA9PiBnZXRSZWYocmVmKX1cbiAgICAgICAgICAgIGRpc3BsYXk9XCJpbmxpbmUtZmxleFwiXG4gICAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgICB3aWR0aD17MH1cbiAgICAgICAgICAgICAgZmxleD17MX1cbiAgICAgICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxuICAgICAgICAgICAgICBib3JkZXJUb3BSaWdodFJhZGl1cz17MH1cbiAgICAgICAgICAgICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM9ezB9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICAgICAgey4uLmdldElucHV0UHJvcHMoe1xuICAgICAgICAgICAgICAgIC4uLmlucHV0UHJvcHMsXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICAgICAgICAgICAgb25Gb2N1czogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKG9wZW5PbkZvY3VzKSBvcGVuTWVudSgpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbkNoYW5nZTogZSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5pc09wZW5lZEJ5QnV0dG9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgIGlzT3BlbmVkQnlCdXR0b246IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC52YWx1ZS50cmltKCkgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFByZXZlbnQgdGhlIHNlbGVjdGVkIGl0ZW0gZnJvbSBzdGlja2luZyBhcm91bmRcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJTZWxlY3Rpb24oKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgaWNvbkFpbT1cImRvd25cIlxuICAgICAgICAgICAgICBjb2xvcj1cIm11dGVkXCJcbiAgICAgICAgICAgICAgaWNvbj17aXNMb2FkaW5nID8gJycgOiAnY2FyZXQtZG93bid9XG4gICAgICAgICAgICAgIGFwcGVhcmFuY2U9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgICAgIG1hcmdpbkxlZnQ9ey0xfVxuICAgICAgICAgICAgICBwYWRkaW5nTGVmdD17aXNMb2FkaW5nID8gMTIgOiAwfVxuICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ9ezB9XG4gICAgICAgICAgICAgIGJvcmRlclRvcExlZnRSYWRpdXM9ezB9XG4gICAgICAgICAgICAgIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM9ezB9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICAgICAgaXNMb2FkaW5nPXtpc0xvYWRpbmd9XG4gICAgICAgICAgICAgIHsuLi5nZXRUb2dnbGVCdXR0b25Qcm9wcyh7XG4gICAgICAgICAgICAgICAgLi4uYnV0dG9uUHJvcHMsXG4gICAgICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKCFpc1Nob3duKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc09wZW5lZEJ5QnV0dG9uOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICl9XG4gICAgICA8L0F1dG9jb21wbGV0ZT5cbiAgICApXG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLGFBQWhCLFFBQXFDLE9BQXJDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLEdBQVAsSUFBY0MsVUFBZCxFQUEwQkMsT0FBMUIsRUFBbUNDLFFBQW5DLEVBQTZDQyxNQUE3QyxRQUEyRCxRQUEzRDtBQUNBLFNBQVNDLFlBQVQsUUFBNkIsb0JBQTdCO0FBQ0EsU0FBU0MsU0FBVCxRQUEwQixrQkFBMUI7QUFDQSxTQUFTQyxVQUFULFFBQTJCLGVBQTNCO0FBQ0EsT0FBT0MsVUFBUCxNQUF1QixzQkFBdkI7O0lBRXFCQyxROzs7OztFQXVGbkIsa0JBQVlDLEtBQVosRUFBbUJDLE9BQW5CLEVBQTRCO0lBQUE7O0lBQUE7O0lBQzFCLDBCQUFNRCxLQUFOLEVBQWFDLE9BQWI7O0lBRDBCLG9FQU9SLFVBQUFDLE9BQU8sRUFBSTtNQUM3QixJQUFJQyxNQUFNLENBQUNDLFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFxQ0osT0FBckMsRUFBOEMsUUFBOUMsQ0FBSixFQUE2RDtRQUMzRCxJQUFJLENBQUNBLE9BQU8sQ0FBQ0ssTUFBYixFQUFxQjtVQUNuQixNQUFLQyxRQUFMLENBQWM7WUFBRUMsZ0JBQWdCLEVBQUU7VUFBcEIsQ0FBZDtRQUNEO01BQ0Y7SUFDRixDQWIyQjs7SUFFMUIsTUFBS0MsS0FBTCxHQUFhO01BQ1hELGdCQUFnQixFQUFFO0lBRFAsQ0FBYjtJQUYwQjtFQUszQjs7OztXQVVELGtCQUFTO01BQUE7O01BQ1Asa0JBZ0JJLEtBQUtULEtBaEJUO01BQUEsSUFDRVcsS0FERixlQUNFQSxLQURGO01BQUEsSUFFRUMsWUFGRixlQUVFQSxZQUZGO01BQUEsSUFHRUMsbUJBSEYsZUFHRUEsbUJBSEY7TUFBQSxJQUlFQyxt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