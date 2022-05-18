import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _excluded = ["name", "accept", "required", "multiple", "disabled", "capture", "height", "onChange", "placeholder"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from 'ui-box';
import { Button } from '../../buttons';
import { TextInput } from '../../text-input';
import safeInvoke from '../../lib/safe-invoke';
export var CLASS_PREFIX = 'evergreen-file-picker';

var FilePicker = /*#__PURE__*/function (_PureComponent) {
  _inherits(FilePicker, _PureComponent);

  var _super = _createSuper(FilePicker);

  function FilePicker() {
    var _this;

    _classCallCheck(this, FilePicker);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "fileInputRef", function (node) {
      _this.fileInput = node;
    });

    _defineProperty(_assertThisInitialized(_this), "handleFileChange", function (e) {
      // Firefox returns the same array instance each time for some reason
      var files = _toConsumableArray(e.target.files);

      _this.setState({
        files: files
      });

      safeInvoke(_this.props.onChange, files);
    });

    _defineProperty(_assertThisInitialized(_this), "handleButtonClick", function () {
      _this.fileInput.click();
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function (e) {
      // Setting e.target.files to an array fails. It must be a FileList
      if (e && e.target) e.target.files = _this.fileInput && _this.fileInput.files;
      safeInvoke(_this.props.onBlur, e);
    });

    _this.state = {
      files: []
    };
    return _this;
  }

  _createClass(FilePicker, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          name = _this$props.name,
          accept = _this$props.accept,
          required = _this$props.required,
          multiple = _this$props.multiple,
          disabled = _this$props.disabled,
          capture = _this$props.capture,
          height = _this$props.height,
          onChange = _this$props.onChange,
          placeholder = _this$props.placeholder,
          props = _objectWithoutProperties(_this$props, _excluded);

      var files = this.state.files;
      var inputValue;

      if (files.length === 0) {
        inputValue = '';
      } else if (files.length === 1) {
        inputValue = files[0].name;
      } else {
        inputValue = "".concat(files.length, " files");
      }

      var buttonText;

      if (files.length === 0) {
        buttonText = 'Select file';
      } else if (files.length === 1) {
        buttonText = 'Replace file';
      } else {
        buttonText = 'Replace files';
      }

      return /*#__PURE__*/React.createElement(Box, _extends({
        display: "flex",
        className: "".concat(CLASS_PREFIX, "-root")
      }, props), /*#__PURE__*/React.createElement(Box, {
        innerRef: this.fileInputRef,
        className: "".concat(CLASS_PREFIX, "-file-input"),
        is: "input",
        type: "file",
        name: name,
        accept: accept,
        required: required,
        multiple: multiple,
        disabled: disabled,
        capture: capture,
        onChange: this.handleFileChange,
        display: "none"
      }), /*#__PURE__*/React.createElement(TextInput, {
        className: "".concat(CLASS_PREFIX, "-text-input"),
        readOnly: true,
        value: inputValue,
        placeholder: placeholder // There's a weird specifity issue when there's two differently sized inputs on the page
        ,
        borderTopRightRadius: "0 !important",
        borderBottomRightRadius: "0 !important",
        height: height,
        flex: 1,
        textOverflow: "ellipsis",
        onBlur: this.handleBlur
      }), /*#__PURE__*/React.createElement(Button, {
        className: "".concat(CLASS_PREFIX, "-button"),
        onClick: this.handleButtonClick,
        disabled: disabled,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        height: height,
        flexShrink: 0,
        type: "button",
        onBlur: this.handleBlur
      }, buttonText));
    }
  }]);

  return FilePicker;
}(PureComponent);

FilePicker.displayName = "FilePicker";

_defineProperty(FilePicker, "propTypes", {
  /**
   * Name attribute of the input.
   */
  name: PropTypes.string,

  /**
   * The accept attribute of the input.
   */
  accept: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),

  /**
   * When true, the file picker is required.
   */
  required: PropTypes.bool,

  /**
   * When true, accept multiple files.
   */
  multiple: PropTypes.bool,

  /**
   * When true, the filepicker is disabled.
   */
  disabled: PropTypes.bool,

  /**
   * The capture attribute of the input.
   */
  capture: PropTypes.bool,

  /**
   * The height of the file picker.
   */
  height: PropTypes.number,

  /**
   * Function called when onChange is fired
   */
  onChange: PropTypes.func,

  /**
   * Function called when onBlur is fired
   */
  onBlur: PropTypes.func,

  /**
   * Placeholder of the text input
   */
  placeholder: PropTypes.string
});

_defineProperty(FilePicker, "defaultProps", {
  placeholder: 'Select a file to upload…'
});

export { FilePicker as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJCb3giLCJCdXR0b24iLCJUZXh0SW5wdXQiLCJzYWZlSW52b2tlIiwiQ0xBU1NfUFJFRklYIiwiRmlsZVBpY2tlciIsIm5vZGUiLCJmaWxlSW5wdXQiLCJlIiwiZmlsZXMiLCJ0YXJnZXQiLCJzZXRTdGF0ZSIsInByb3BzIiwib25DaGFuZ2UiLCJjbGljayIsIm9uQmx1ciIsInN0YXRlIiwibmFtZSIsImFjY2VwdCIsInJlcXVpcmVkIiwibXVsdGlwbGUiLCJkaXNhYmxlZCIsImNhcHR1cmUiLCJoZWlnaHQiLCJwbGFjZWhvbGRlciIsImlucHV0VmFsdWUiLCJsZW5ndGgiLCJidXR0b25UZXh0IiwiZmlsZUlucHV0UmVmIiwiaGFuZGxlRmlsZUNoYW5nZSIsImhhbmRsZUJsdXIiLCJoYW5kbGVCdXR0b25DbGljayIsInN0cmluZyIsIm9uZU9mVHlwZSIsImFycmF5T2YiLCJib29sIiwibnVtYmVyIiwiZnVuYyJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9maWxlLXBpY2tlci9zcmMvRmlsZVBpY2tlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEJveCBmcm9tICd1aS1ib3gnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi8uLi9idXR0b25zJ1xuaW1wb3J0IHsgVGV4dElucHV0IH0gZnJvbSAnLi4vLi4vdGV4dC1pbnB1dCdcbmltcG9ydCBzYWZlSW52b2tlIGZyb20gJy4uLy4uL2xpYi9zYWZlLWludm9rZSdcblxuZXhwb3J0IGNvbnN0IENMQVNTX1BSRUZJWCA9ICdldmVyZ3JlZW4tZmlsZS1waWNrZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGVQaWNrZXIgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBOYW1lIGF0dHJpYnV0ZSBvZiB0aGUgaW5wdXQuXG4gICAgICovXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBhY2NlcHQgYXR0cmlidXRlIG9mIHRoZSBpbnB1dC5cbiAgICAgKi9cbiAgICBhY2NlcHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpXG4gICAgXSksXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSBmaWxlIHBpY2tlciBpcyByZXF1aXJlZC5cbiAgICAgKi9cbiAgICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIGFjY2VwdCBtdWx0aXBsZSBmaWxlcy5cbiAgICAgKi9cbiAgICBtdWx0aXBsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSBmaWxlcGlja2VyIGlzIGRpc2FibGVkLlxuICAgICAqL1xuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBjYXB0dXJlIGF0dHJpYnV0ZSBvZiB0aGUgaW5wdXQuXG4gICAgICovXG4gICAgY2FwdHVyZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSBmaWxlIHBpY2tlci5cbiAgICAgKi9cbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiBjYWxsZWQgd2hlbiBvbkNoYW5nZSBpcyBmaXJlZFxuICAgICAqL1xuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIG9uQmx1ciBpcyBmaXJlZFxuICAgICAqL1xuICAgIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBQbGFjZWhvbGRlciBvZiB0aGUgdGV4dCBpbnB1dFxuICAgICAqL1xuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHBsYWNlaG9sZGVyOiAnU2VsZWN0IGEgZmlsZSB0byB1cGxvYWTigKYnXG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZmlsZXM6IFtdXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIG5hbWUsXG4gICAgICBhY2NlcHQsXG4gICAgICByZXF1aXJlZCxcbiAgICAgIG11bHRpcGxlLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBjYXB0dXJlLFxuICAgICAgaGVpZ2h0LFxuICAgICAgb25DaGFuZ2UsIC8vIFJlbW92ZSBvbkNoYW5nZSBmcm9tIHByb3BzXG4gICAgICBwbGFjZWhvbGRlcixcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGZpbGVzIH0gPSB0aGlzLnN0YXRlXG5cbiAgICBsZXQgaW5wdXRWYWx1ZVxuICAgIGlmIChmaWxlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIGlucHV0VmFsdWUgPSAnJ1xuICAgIH0gZWxzZSBpZiAoZmlsZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICBpbnB1dFZhbHVlID0gZmlsZXNbMF0ubmFtZVxuICAgIH0gZWxzZSB7XG4gICAgICBpbnB1dFZhbHVlID0gYCR7ZmlsZXMubGVuZ3RofSBmaWxlc2BcbiAgICB9XG5cbiAgICBsZXQgYnV0dG9uVGV4dFxuICAgIGlmIChmaWxlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIGJ1dHRvblRleHQgPSAnU2VsZWN0IGZpbGUnXG4gICAgfSBlbHNlIGlmIChmaWxlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIGJ1dHRvblRleHQgPSAnUmVwbGFjZSBmaWxlJ1xuICAgIH0gZWxzZSB7XG4gICAgICBidXR0b25UZXh0ID0gJ1JlcGxhY2UgZmlsZXMnXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBjbGFzc05hbWU9e2Ake0NMQVNTX1BSRUZJWH0tcm9vdGB9IHsuLi5wcm9wc30+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBpbm5lclJlZj17dGhpcy5maWxlSW5wdXRSZWZ9XG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtDTEFTU19QUkVGSVh9LWZpbGUtaW5wdXRgfVxuICAgICAgICAgIGlzPVwiaW5wdXRcIlxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgIGFjY2VwdD17YWNjZXB0fVxuICAgICAgICAgIHJlcXVpcmVkPXtyZXF1aXJlZH1cbiAgICAgICAgICBtdWx0aXBsZT17bXVsdGlwbGV9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIGNhcHR1cmU9e2NhcHR1cmV9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRmlsZUNoYW5nZX1cbiAgICAgICAgICBkaXNwbGF5PVwibm9uZVwiXG4gICAgICAgIC8+XG5cbiAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7Q0xBU1NfUFJFRklYfS10ZXh0LWlucHV0YH1cbiAgICAgICAgICByZWFkT25seVxuICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICAvLyBUaGVyZSdzIGEgd2VpcmQgc3BlY2lmaXR5IGlzc3VlIHdoZW4gdGhlcmUncyB0d28gZGlmZmVyZW50bHkgc2l6ZWQgaW5wdXRzIG9uIHRoZSBwYWdlXG4gICAgICAgICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM9XCIwICFpbXBvcnRhbnRcIlxuICAgICAgICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzPVwiMCAhaW1wb3J0YW50XCJcbiAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICBmbGV4PXsxfVxuICAgICAgICAgIHRleHRPdmVyZmxvdz1cImVsbGlwc2lzXCJcbiAgICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlQmx1cn1cbiAgICAgICAgLz5cblxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtDTEFTU19QUkVGSVh9LWJ1dHRvbmB9XG4gICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVCdXR0b25DbGlja31cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1cz17MH1cbiAgICAgICAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzPXswfVxuICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgIGZsZXhTaHJpbms9ezB9XG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgb25CbHVyPXt0aGlzLmhhbmRsZUJsdXJ9XG4gICAgICAgID5cbiAgICAgICAgICB7YnV0dG9uVGV4dH1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0JveD5cbiAgICApXG4gIH1cblxuICBmaWxlSW5wdXRSZWYgPSBub2RlID0+IHtcbiAgICB0aGlzLmZpbGVJbnB1dCA9IG5vZGVcbiAgfVxuXG4gIGhhbmRsZUZpbGVDaGFuZ2UgPSBlID0+IHtcbiAgICAvLyBGaXJlZm94IHJldHVybnMgdGhlIHNhbWUgYXJyYXkgaW5zdGFuY2UgZWFjaCB0aW1lIGZvciBzb21lIHJlYXNvblxuICAgIGNvbnN0IGZpbGVzID0gWy4uLmUudGFyZ2V0LmZpbGVzXVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZpbGVzIH0pXG5cbiAgICBzYWZlSW52b2tlKHRoaXMucHJvcHMub25DaGFuZ2UsIGZpbGVzKVxuICB9XG5cbiAgaGFuZGxlQnV0dG9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgdGhpcy5maWxlSW5wdXQuY2xpY2soKVxuICB9XG5cbiAgaGFuZGxlQmx1ciA9IGUgPT4ge1xuICAgIC8vIFNldHRpbmcgZS50YXJnZXQuZmlsZXMgdG8gYW4gYXJyYXkgZmFpbHMuIEl0IG11c3QgYmUgYSBGaWxlTGlzdFxuICAgIGlmIChlICYmIGUudGFyZ2V0KSBlLnRhcmdldC5maWxlcyA9IHRoaXMuZmlsZUlucHV0ICYmIHRoaXMuZmlsZUlucHV0LmZpbGVzXG5cbiAgICBzYWZlSW52b2tlKHRoaXMucHJvcHMub25CbHVyLCBlKVxuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxhQUFoQixRQUFxQyxPQUFyQztBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxHQUFQLE1BQWdCLFFBQWhCO0FBQ0EsU0FBU0MsTUFBVCxRQUF1QixlQUF2QjtBQUNBLFNBQVNDLFNBQVQsUUFBMEIsa0JBQTFCO0FBQ0EsT0FBT0MsVUFBUCxNQUF1Qix1QkFBdkI7QUFFQSxPQUFPLElBQU1DLFlBQVksR0FBRyx1QkFBckI7O0lBRWNDLFU7Ozs7O0VBNERuQixzQkFBYztJQUFBOztJQUFBOztJQUNaOztJQURZLCtEQXlGQyxVQUFBQyxJQUFJLEVBQUk7TUFDckIsTUFBS0MsU0FBTCxHQUFpQkQsSUFBakI7SUFDRCxDQTNGYTs7SUFBQSxtRUE2RkssVUFBQUUsQ0FBQyxFQUFJO01BQ3RCO01BQ0EsSUFBTUMsS0FBSyxzQkFBT0QsQ0FBQyxDQUFDRSxNQUFGLENBQVNELEtBQWhCLENBQVg7O01BRUEsTUFBS0UsUUFBTCxDQUFjO1FBQUVGLEtBQUssRUFBTEE7TUFBRixDQUFkOztNQUVBTixVQUFVLENBQUMsTUFBS1MsS0FBTCxDQUFXQyxRQUFaLEVBQXNCSixLQUF0QixDQUFWO0lBQ0QsQ0FwR2E7O0lBQUEsb0VBc0dNLFlBQU07TUFDeEIsTUFBS0YsU0FBTCxDQUFlTyxLQUFmO0lBQ0QsQ0F4R2E7O0lBQUEsNkRBMEdELFVBQUFOLENBQUMsRUFBSTtNQUNoQjtNQUNBLElBQUlBLENBQUMsSUFBSUEsQ0FBQyxDQUFDRSxNQUFYLEVBQW1CRixDQUFDLENBQUNFLE1BQUYsQ0FBU0QsS0FBVCxHQUFpQixNQUFLRixTQUFMLElBQWtCLE1BQUtBLFNBQUwsQ0FBZUUsS0FBbEQ7TUFFbkJOLFVBQVUsQ0FBQyxNQUFLUyxLQUFMLENBQVdHLE1BQVosRUFBb0JQLENBQXBCLENBQVY7SUFDRCxDQS9HYTs7SUFHWixNQUFLUSxLQUFMLEdBQWE7TUFDWFAsS0FBSyxFQUFFO0lBREksQ0FBYjtJQUhZO0VBTWI7Ozs7V0FFRCxrQkFBUztNQUNQLGtCQVdJLEtBQUtHLEtBWFQ7TUFBQSxJQUNFSyxJQURGLGVBQ0VBLElBREY7TUFBQSxJQUVFQyxNQUZGLGVBRUVBLE1BRkY7TUFBQSxJQUdFQyxRQUhGLGVBR0VBLFFBSEY7TUFBQSxJQUlFQyxRQUpGLGVBSUVBLFFBSkY7TUFBQSxJQUtFQyxRQUxGLGVBS0VBLFFBTEY7TUFBQSxJQU1FQyxPQU5GLGVBTUVBLE9BTkY7TUFBQSxJQU9FQyxNQVBGLGVBT0VBLE1BUEY7TUFBQSxJQVFFVixRQVJGLGVBUUVBLFFBUkY7TUFBQSxJQVNFVyxXQVRGLGVBU0VBLFdBVEY7TUFBQSxJQVVLWixLQVZMOztNQVlBLElBQVFILEtBQVIsR0FBa0IsS0FBS08sS0FBdkIsQ0FBUVAsS0FBUjtNQUVBLElBQUlnQixVQUFKOztNQUNBLElBQUloQixLQUFLLENBQUNpQixNQUFOLEtBQWlCLENBQXJCLEVBQXdCO1FBQ3RCRCxVQUFVLEdBQUcsRUFBYjtNQUNELENBRkQsTUFFTyxJQUFJaEIsS0FBSyxDQUFDaUIsTUFBTixLQUFpQixDQUFyQixFQUF3QjtRQUM3QkQsVUFBVSxHQUFHaEIsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTUSxJQUF0QjtNQUNELENBRk0sTUFFQTtRQUNMUSxVQUFVLGFBQU1oQixLQUFLLENBQUNpQixNQUFaLFdBQVY7TUFDRDs7TUFFRCxJQUFJQyxVQUFKOztNQUNBLElBQUlsQixLQUFLLENBQUNpQixNQUFOLEtBQWlCLENBQXJCLEVBQXdCO1FBQ3RCQyxVQUFVLEdBQUcsYUFBYjtNQUNELENBRkQsTUFFTyxJQUFJbEIsS0FBSyxDQUFDaUIsTUFBTixLQUFpQixDQUFyQixFQUF3QjtRQUM3QkMsVUFBVSxHQUFHLGNBQWI7TUFDRCxDQUZNLE1BRUE7UUFDTEEsVUFBVSxHQUFHLGVBQWI7TUFDRDs7TUFFRCxvQkFDRSxvQkFBQyxHQUFEO1FBQUssT0FBTyxFQUFDLE1BQWI7UUFBb0IsU0FBUyxZQUFLdkIsWUFBTDtNQUE3QixHQUEyRFEsS0FBM0QsZ0JBQ0Usb0JBQUMsR0FBRDtRQUNFLFFBQVEsRUFBRSxLQUFLZ0IsWUFEakI7UUFFRSxTQUFTLFlBQUt4QixZQUFMLGdCQUZYO1FBR0UsRUFBRSxFQUFDLE9BSEw7UUFJRSxJQUFJLEVBQUMsTUFKUDtRQUtFLElBQUksRUFBRWEsSUFMUjtRQU1FLE1BQU0sRUFBRUMsTUFOVjtRQU9FLFFBQVEsRUFBRUMsUUFQWjtRQVFFLFFBQVEsRUFBRUMsUUFSWjtRQVNFLFFBQVEsRUFBRUMsUUFUWjtRQVVFLE9BQU8sRUFBRUMsT0FWWDtRQVdFLFFBQVEsRUFBRSxLQUFLTyxnQkFYakI7UUFZRSxPQUFPLEVBQUM7TUFaVixFQURGLGVBZ0JFLG9CQUFDLFNBQUQ7UUFDRSxTQUFTLFlBQUt6QixZQUFMLGdCQURYO1FBRUUsUUFBUSxNQUZWO1FBR0UsS0FBSyxFQUFFcUIsVUFIVDtRQUlFLFdBQVcsRUFBRUQsV0FKZixDQUtFO1FBTEY7UUFNRSxvQkFBb0IsRUFBQyxjQU52QjtRQU9FLHVCQUF1QixFQUFDLGNBUDFCO1FBUUUsTUFBTSxFQUFFRCxNQVJWO1FBU0UsSUFBSSxFQUFFLENBVFI7UUFVRSxZQUFZLEVBQUMsVUFWZjtRQVdFLE1BQU0sRUFBRSxLQUFLTztNQVhmLEVBaEJGLGVBOEJFLG9CQUFDLE1BQUQ7UUFDRSxTQUFTLFlBQUsxQixZQUFMLFlBRFg7UUFFRSxPQUFPLEVBQUUsS0FBSzJCLGlCQUZoQjtRQUdFLFFBQVEsRUFBRVYsUUFIWjtRQUlFLG1CQUFtQixFQUFFLENBSnZCO1FBS0Usc0JBQXNCLEVBQUUsQ0FMMUI7UUFNRSxNQUFNLEVBQUVFLE1BTlY7UUFPRSxVQUFVLEVBQUUsQ0FQZDtRQVFFLElBQUksRUFBQyxRQVJQO1FBU0UsTUFBTSxFQUFFLEtBQUtPO01BVGYsR0FXR0gsVUFYSCxDQTlCRixDQURGO0lBOENEOzs7O0VBbkpxQzdCLGE7O0FBQW5CTyxVOztnQkFBQUEsVSxlQUNBO0VBQ2pCO0FBQ0o7QUFDQTtFQUNJWSxJQUFJLEVBQUVsQixTQUFTLENBQUNpQyxNQUpDOztFQU1qQjtBQUNKO0FBQ0E7RUFDSWQsTUFBTSxFQUFFbkIsU0FBUyxDQUFDa0MsU0FBVixDQUFvQixDQUMxQmxDLFNBQVMsQ0FBQ2lDLE1BRGdCLEVBRTFCakMsU0FBUyxDQUFDbUMsT0FBVixDQUFrQm5DLFNBQVMsQ0FBQ2lDLE1BQTVCLENBRjBCLENBQXBCLENBVFM7O0VBY2pCO0FBQ0o7QUFDQTtFQUNJYixRQUFRLEVBQUVwQixTQUFTLENBQUNvQyxJQWpCSDs7RUFtQmpCO0FBQ0o7QUFDQTtFQUNJZixRQUFRLEVBQUVyQixTQUFTLENBQUNvQyxJQXRCSDs7RUF3QmpCO0FBQ0o7QUFDQTtFQUNJZCxRQUFRLEVBQUV0QixTQUFTLENBQUNvQyxJQTNCSDs7RUE2QmpCO0FBQ0o7QUFDQTtFQUNJYixPQUFPLEVBQUV2QixTQUFTLENBQUNvQyxJQWhDRjs7RUFrQ2pCO0FBQ0o7QUFDQTtFQUNJWixNQUFNLEVBQUV4QixTQUFTLENBQUNxQyxNQXJDRDs7RUF1Q2pCO0FBQ0o7QUFDQTtFQUNJdkIsUUFBUSxFQUFFZCxTQUFTLENBQUNzQyxJQTFDSDs7RUE0Q2pCO0FBQ0o7QUFDQTtFQUNJdEIsTUFBTSxFQUFFaEIsU0FBUyxDQUFDc0MsSUEvQ0Q7O0VBaURqQjtBQUNKO0FBQ0E7RUFDSWIsV0FBVyxFQUFFekIsU0FBUyxDQUFDaUM7QUFwRE4sQzs7Z0JBREEzQixVLGtCQXdERztFQUNwQm1CLFdBQVcsRUFBRTtBQURPLEM7O1NBeERIbkIsVSJ9