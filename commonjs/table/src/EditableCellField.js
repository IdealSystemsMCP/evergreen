"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _textarea = require("../../textarea");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var EditableCellField = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(EditableCellField, _React$PureComponent);

  var _super = _createSuper(EditableCellField);

  function EditableCellField() {
    var _this;

    (0, _classCallCheck2["default"])(this, EditableCellField);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      top: 0,
      left: 0,
      height: 0,
      width: 0
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getTableBodyRef", function (targetRef) {
      if (_this.tableBodyRef) return _this.tableBodyRef;
      var ref = targetRef;

      while (ref) {
        var isTableBody = ref.hasAttribute('data-evergreen-table-body');

        if (isTableBody) {
          return ref;
        }

        if (ref.parentElement) {
          ref = ref.parentElement;
        } else {
          return null;
        }
      }

      _this.tableBodyRef = ref;
      return _this.tableBodyRef;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "update", function () {
      var getTargetRef = _this.props.getTargetRef;
      var targetRef = getTargetRef();
      if (!targetRef) return;

      var tableBodyRef = _this.getTableBodyRef(targetRef);

      var _targetRef$getBoundin = targetRef.getBoundingClientRect(),
          left = _targetRef$getBoundin.left,
          targetTop = _targetRef$getBoundin.top,
          height = _targetRef$getBoundin.height,
          width = _targetRef$getBoundin.width;

      var top;

      if (tableBodyRef) {
        var bounds = tableBodyRef.getBoundingClientRect();
        top = Math.min(Math.max(targetTop, bounds.top), bounds.bottom - height);
      } else {
        top = targetTop;
      }

      _this.setState(function () {
        return {
          left: left,
          top: top,
          height: height,
          width: width
        };
      }, function () {
        _this.latestAnimationFrame = requestAnimationFrame(function () {
          _this.update();
        });
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onRef", function (ref) {
      _this.textareaRef = ref;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleBlur", function () {
      if (_this.textareaRef) _this.props.onChangeComplete(_this.textareaRef.value);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleKeyDown", function (e) {
      switch (e.key) {
        case 'Escape':
          _this.props.onCancel();

          _this.textareaRef.blur();

          break;

        case 'Enter':
          _this.textareaRef.blur();

          e.preventDefault();
          break;

        case 'Tab':
          _this.textareaRef.blur();

          break;

        default:
          break;
      }
    });
    return _this;
  }

  (0, _createClass2["default"])(EditableCellField, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.update();
      requestAnimationFrame(function () {
        _this2.textareaRef.focus();
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      cancelAnimationFrame(this.latestAnimationFrame);
      this.props.onCancel();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          size = _this$props.size,
          value = _this$props.value,
          minWidth = _this$props.minWidth,
          minHeight = _this$props.minHeight,
          zIndex = _this$props.zIndex;
      var _this$state = this.state,
          left = _this$state.left,
          top = _this$state.top,
          height = _this$state.height,
          width = _this$state.width;
      return /*#__PURE__*/_react["default"].createElement(_textarea.Textarea, {
        innerRef: this.onRef,
        onKeyDown: this.handleKeyDown,
        onBlur: this.handleBlur,
        appearance: "editable-cell",
        size: size,
        style: {
          left: left,
          top: top,
          height: height,
          minHeight: Math.max(height, minHeight),
          width: width,
          minWidth: Math.max(width, minWidth),
          zIndex: zIndex
        },
        height: null,
        width: null,
        minHeight: null,
        position: "fixed",
        defaultValue: value
      });
    }
  }]);
  return EditableCellField;
}(_react["default"].PureComponent);

exports["default"] = EditableCellField;
EditableCellField.displayName = "EditableCellField";
(0, _defineProperty2["default"])(EditableCellField, "propTypes", {
  /**
   * Used as the defaultValue of the textarea.
   */
  value: _propTypes["default"].string.isRequired,

  /**
   * The z-index placed on the element.
   */
  zIndex: _propTypes["default"].number.isRequired,

  /**
   * Function to get the target ref of the parent.
   * Used to mirror the position.
   */
  getTargetRef: _propTypes["default"].func.isRequired,

  /**
   * Min width of the textarea.
   * The textarea can never be smaller than the cell.
   */
  minWidth: _propTypes["default"].number.isRequired,

  /**
   * Min height of the textarea.
   * The textarea can never be smaller than the cell.
   */
  minHeight: _propTypes["default"].number.isRequired,

  /**
   * Called when the textarea is blurred, pass the value back to the cell.
   */
  onChangeComplete: _propTypes["default"].func.isRequired,

  /**
   * Called when Escape is hit or componentWillUnmount.
   */
  onCancel: _propTypes["default"].func.isRequired,

  /**
   * Text size of the textarea.
   */
  size: _propTypes["default"].number
});
(0, _defineProperty2["default"])(EditableCellField, "defaultProps", {
  minWidth: 80,
  minHeight: 40
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJFZGl0YWJsZUNlbGxGaWVsZCIsInRvcCIsImxlZnQiLCJoZWlnaHQiLCJ3aWR0aCIsInRhcmdldFJlZiIsInRhYmxlQm9keVJlZiIsInJlZiIsImlzVGFibGVCb2R5IiwiaGFzQXR0cmlidXRlIiwicGFyZW50RWxlbWVudCIsImdldFRhcmdldFJlZiIsInByb3BzIiwiZ2V0VGFibGVCb2R5UmVmIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidGFyZ2V0VG9wIiwiYm91bmRzIiwiTWF0aCIsIm1pbiIsIm1heCIsImJvdHRvbSIsInNldFN0YXRlIiwibGF0ZXN0QW5pbWF0aW9uRnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ1cGRhdGUiLCJ0ZXh0YXJlYVJlZiIsIm9uQ2hhbmdlQ29tcGxldGUiLCJ2YWx1ZSIsImUiLCJrZXkiLCJvbkNhbmNlbCIsImJsdXIiLCJwcmV2ZW50RGVmYXVsdCIsImZvY3VzIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJzaXplIiwibWluV2lkdGgiLCJtaW5IZWlnaHQiLCJ6SW5kZXgiLCJzdGF0ZSIsIm9uUmVmIiwiaGFuZGxlS2V5RG93biIsImhhbmRsZUJsdXIiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwibnVtYmVyIiwiZnVuYyJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvRWRpdGFibGVDZWxsRmllbGQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgVGV4dGFyZWEgfSBmcm9tICcuLi8uLi90ZXh0YXJlYSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRpdGFibGVDZWxsRmllbGQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBVc2VkIGFzIHRoZSBkZWZhdWx0VmFsdWUgb2YgdGhlIHRleHRhcmVhLlxuICAgICAqL1xuICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgei1pbmRleCBwbGFjZWQgb24gdGhlIGVsZW1lbnQuXG4gICAgICovXG4gICAgekluZGV4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0byBnZXQgdGhlIHRhcmdldCByZWYgb2YgdGhlIHBhcmVudC5cbiAgICAgKiBVc2VkIHRvIG1pcnJvciB0aGUgcG9zaXRpb24uXG4gICAgICovXG4gICAgZ2V0VGFyZ2V0UmVmOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogTWluIHdpZHRoIG9mIHRoZSB0ZXh0YXJlYS5cbiAgICAgKiBUaGUgdGV4dGFyZWEgY2FuIG5ldmVyIGJlIHNtYWxsZXIgdGhhbiB0aGUgY2VsbC5cbiAgICAgKi9cbiAgICBtaW5XaWR0aDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogTWluIGhlaWdodCBvZiB0aGUgdGV4dGFyZWEuXG4gICAgICogVGhlIHRleHRhcmVhIGNhbiBuZXZlciBiZSBzbWFsbGVyIHRoYW4gdGhlIGNlbGwuXG4gICAgICovXG4gICAgbWluSGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgdGV4dGFyZWEgaXMgYmx1cnJlZCwgcGFzcyB0aGUgdmFsdWUgYmFjayB0byB0aGUgY2VsbC5cbiAgICAgKi9cbiAgICBvbkNoYW5nZUNvbXBsZXRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gRXNjYXBlIGlzIGhpdCBvciBjb21wb25lbnRXaWxsVW5tb3VudC5cbiAgICAgKi9cbiAgICBvbkNhbmNlbDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRleHQgc2l6ZSBvZiB0aGUgdGV4dGFyZWEuXG4gICAgICovXG4gICAgc2l6ZTogUHJvcFR5cGVzLm51bWJlclxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBtaW5XaWR0aDogODAsXG4gICAgbWluSGVpZ2h0OiA0MFxuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgaGVpZ2h0OiAwLFxuICAgIHdpZHRoOiAwXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnVwZGF0ZSgpXG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy50ZXh0YXJlYVJlZi5mb2N1cygpXG4gICAgfSlcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubGF0ZXN0QW5pbWF0aW9uRnJhbWUpXG4gICAgdGhpcy5wcm9wcy5vbkNhbmNlbCgpXG4gIH1cblxuICBnZXRUYWJsZUJvZHlSZWYgPSB0YXJnZXRSZWYgPT4ge1xuICAgIGlmICh0aGlzLnRhYmxlQm9keVJlZikgcmV0dXJuIHRoaXMudGFibGVCb2R5UmVmXG5cbiAgICBsZXQgcmVmID0gdGFyZ2V0UmVmXG4gICAgd2hpbGUgKHJlZikge1xuICAgICAgY29uc3QgaXNUYWJsZUJvZHkgPSByZWYuaGFzQXR0cmlidXRlKCdkYXRhLWV2ZXJncmVlbi10YWJsZS1ib2R5JylcbiAgICAgIGlmIChpc1RhYmxlQm9keSkge1xuICAgICAgICByZXR1cm4gcmVmXG4gICAgICB9XG5cbiAgICAgIGlmIChyZWYucGFyZW50RWxlbWVudCkge1xuICAgICAgICByZWYgPSByZWYucGFyZW50RWxlbWVudFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnRhYmxlQm9keVJlZiA9IHJlZlxuICAgIHJldHVybiB0aGlzLnRhYmxlQm9keVJlZlxuICB9XG5cbiAgdXBkYXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgZ2V0VGFyZ2V0UmVmIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgdGFyZ2V0UmVmID0gZ2V0VGFyZ2V0UmVmKClcbiAgICBpZiAoIXRhcmdldFJlZikgcmV0dXJuXG4gICAgY29uc3QgdGFibGVCb2R5UmVmID0gdGhpcy5nZXRUYWJsZUJvZHlSZWYodGFyZ2V0UmVmKVxuXG4gICAgY29uc3Qge1xuICAgICAgbGVmdCxcbiAgICAgIHRvcDogdGFyZ2V0VG9wLFxuICAgICAgaGVpZ2h0LFxuICAgICAgd2lkdGhcbiAgICB9ID0gdGFyZ2V0UmVmLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICBsZXQgdG9wXG4gICAgaWYgKHRhYmxlQm9keVJlZikge1xuICAgICAgY29uc3QgYm91bmRzID0gdGFibGVCb2R5UmVmLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICB0b3AgPSBNYXRoLm1pbihNYXRoLm1heCh0YXJnZXRUb3AsIGJvdW5kcy50b3ApLCBib3VuZHMuYm90dG9tIC0gaGVpZ2h0KVxuICAgIH0gZWxzZSB7XG4gICAgICB0b3AgPSB0YXJnZXRUb3BcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgKCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGxlZnQsXG4gICAgICAgICAgdG9wLFxuICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICB3aWR0aFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICB0aGlzLmxhdGVzdEFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZSgpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgb25SZWYgPSByZWYgPT4ge1xuICAgIHRoaXMudGV4dGFyZWFSZWYgPSByZWZcbiAgfVxuXG4gIGhhbmRsZUJsdXIgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMudGV4dGFyZWFSZWYpIHRoaXMucHJvcHMub25DaGFuZ2VDb21wbGV0ZSh0aGlzLnRleHRhcmVhUmVmLnZhbHVlKVxuICB9XG5cbiAgaGFuZGxlS2V5RG93biA9IGUgPT4ge1xuICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgIGNhc2UgJ0VzY2FwZSc6XG4gICAgICAgIHRoaXMucHJvcHMub25DYW5jZWwoKVxuICAgICAgICB0aGlzLnRleHRhcmVhUmVmLmJsdXIoKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnRW50ZXInOlxuICAgICAgICB0aGlzLnRleHRhcmVhUmVmLmJsdXIoKVxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ1RhYic6XG4gICAgICAgIHRoaXMudGV4dGFyZWFSZWYuYmx1cigpXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHNpemUsIHZhbHVlLCBtaW5XaWR0aCwgbWluSGVpZ2h0LCB6SW5kZXggfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGxlZnQsIHRvcCwgaGVpZ2h0LCB3aWR0aCB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUZXh0YXJlYVxuICAgICAgICBpbm5lclJlZj17dGhpcy5vblJlZn1cbiAgICAgICAgb25LZXlEb3duPXt0aGlzLmhhbmRsZUtleURvd259XG4gICAgICAgIG9uQmx1cj17dGhpcy5oYW5kbGVCbHVyfVxuICAgICAgICBhcHBlYXJhbmNlPVwiZWRpdGFibGUtY2VsbFwiXG4gICAgICAgIHNpemU9e3NpemV9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgbGVmdCxcbiAgICAgICAgICB0b3AsXG4gICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgIG1pbkhlaWdodDogTWF0aC5tYXgoaGVpZ2h0LCBtaW5IZWlnaHQpLFxuICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgIG1pbldpZHRoOiBNYXRoLm1heCh3aWR0aCwgbWluV2lkdGgpLFxuICAgICAgICAgIHpJbmRleFxuICAgICAgICB9fVxuICAgICAgICBoZWlnaHQ9e251bGx9XG4gICAgICAgIHdpZHRoPXtudWxsfVxuICAgICAgICBtaW5IZWlnaHQ9e251bGx9XG4gICAgICAgIHBvc2l0aW9uPVwiZml4ZWRcIlxuICAgICAgICBkZWZhdWx0VmFsdWU9e3ZhbHVlfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7O0lBRXFCQSxpQjs7Ozs7Ozs7Ozs7Ozs7OzhGQW1EWDtNQUNOQyxHQUFHLEVBQUUsQ0FEQztNQUVOQyxJQUFJLEVBQUUsQ0FGQTtNQUdOQyxNQUFNLEVBQUUsQ0FIRjtNQUlOQyxLQUFLLEVBQUU7SUFKRCxDO3dHQW9CVSxVQUFBQyxTQUFTLEVBQUk7TUFDN0IsSUFBSSxNQUFLQyxZQUFULEVBQXVCLE9BQU8sTUFBS0EsWUFBWjtNQUV2QixJQUFJQyxHQUFHLEdBQUdGLFNBQVY7O01BQ0EsT0FBT0UsR0FBUCxFQUFZO1FBQ1YsSUFBTUMsV0FBVyxHQUFHRCxHQUFHLENBQUNFLFlBQUosQ0FBaUIsMkJBQWpCLENBQXBCOztRQUNBLElBQUlELFdBQUosRUFBaUI7VUFDZixPQUFPRCxHQUFQO1FBQ0Q7O1FBRUQsSUFBSUEsR0FBRyxDQUFDRyxhQUFSLEVBQXVCO1VBQ3JCSCxHQUFHLEdBQUdBLEdBQUcsQ0FBQ0csYUFBVjtRQUNELENBRkQsTUFFTztVQUNMLE9BQU8sSUFBUDtRQUNEO01BQ0Y7O01BRUQsTUFBS0osWUFBTCxHQUFvQkMsR0FBcEI7TUFDQSxPQUFPLE1BQUtELFlBQVo7SUFDRCxDOytGQUVRLFlBQU07TUFDYixJQUFRSyxZ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