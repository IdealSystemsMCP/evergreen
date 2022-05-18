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

var _uiBox = _interopRequireWildcard(require("ui-box"));

var _icon = require("../../icon");

var _textInput = require("../../text-input");

var _theme = require("../../theme");

var _constants = require("../../constants");

var _excluded = ["theme", "appearance", "disabled", "height"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var SearchInput = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(SearchInput, _PureComponent);

  var _super = _createSuper(SearchInput);

  function SearchInput() {
    (0, _classCallCheck2["default"])(this, SearchInput);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(SearchInput, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          appearance = _this$props.appearance,
          disabled = _this$props.disabled,
          height = _this$props.height,
          props = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);

      var _splitBoxProps = (0, _uiBox.splitBoxProps)(props),
          matchedProps = _splitBoxProps.matchedProps,
          remainingProps = _splitBoxProps.remainingProps;

      var width = matchedProps.width;
      var iconSize = theme.getIconSizeForInput(height);
      return /*#__PURE__*/_react["default"].createElement(_uiBox["default"], (0, _extends2["default"])({
        position: "relative",
        display: "inline-flex",
        height: height
      }, matchedProps), /*#__PURE__*/_react["default"].createElement(_uiBox["default"], {
        height: height,
        width: height,
        pointerEvents: "none",
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }, /*#__PURE__*/_react["default"].createElement(_icon.Icon, {
        icon: "search",
        color: "default",
        zIndex: _constants.StackingOrder.FOCUSED + 1,
        size: iconSize
      })), /*#__PURE__*/_react["default"].createElement(_textInput.TextInput, (0, _extends2["default"])({
        height: height,
        paddingLeft: height,
        appearance: appearance,
        disabled: disabled,
        width: width,
        type: "search"
      }, remainingProps)));
    }
  }]);
  return SearchInput;
}(_react.PureComponent);

SearchInput.displayName = "SearchInput";
(0, _defineProperty2["default"])(SearchInput, "propTypes", _objectSpread({}, _textInput.TextInput.propTypes));
(0, _defineProperty2["default"])(SearchInput, "defaultProps", {
  height: 32,
  appearance: 'default'
});

var _default = (0, _theme.withTheme)(SearchInput);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJTZWFyY2hJbnB1dCIsInByb3BzIiwidGhlbWUiLCJhcHBlYXJhbmNlIiwiZGlzYWJsZWQiLCJoZWlnaHQiLCJzcGxpdEJveFByb3BzIiwibWF0Y2hlZFByb3BzIiwicmVtYWluaW5nUHJvcHMiLCJ3aWR0aCIsImljb25TaXplIiwiZ2V0SWNvblNpemVGb3JJbnB1dCIsIlN0YWNraW5nT3JkZXIiLCJGT0NVU0VEIiwiUHVyZUNvbXBvbmVudCIsIlRleHRJbnB1dCIsInByb3BUeXBlcyIsIndpdGhUaGVtZSJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZWFyY2gtaW5wdXQvc3JjL1NlYXJjaElucHV0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQm94LCB7IHNwbGl0Qm94UHJvcHMgfSBmcm9tICd1aS1ib3gnXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnLi4vLi4vaWNvbidcbmltcG9ydCB7IFRleHRJbnB1dCB9IGZyb20gJy4uLy4uL3RleHQtaW5wdXQnXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcbmltcG9ydCB7IFN0YWNraW5nT3JkZXIgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnXG5cbmNsYXNzIFNlYXJjaElucHV0IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIFRleHRJbnB1dCBjb21wb25lbnQgYXMgdGhlIGJhc2UuXG4gICAgICovXG4gICAgLi4uVGV4dElucHV0LnByb3BUeXBlc1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBoZWlnaHQ6IDMyLFxuICAgIGFwcGVhcmFuY2U6ICdkZWZhdWx0J1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGhlbWUsIGFwcGVhcmFuY2UsIGRpc2FibGVkLCBoZWlnaHQsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBtYXRjaGVkUHJvcHMsIHJlbWFpbmluZ1Byb3BzIH0gPSBzcGxpdEJveFByb3BzKHByb3BzKVxuICAgIGNvbnN0IHsgd2lkdGggfSA9IG1hdGNoZWRQcm9wc1xuICAgIGNvbnN0IGljb25TaXplID0gdGhlbWUuZ2V0SWNvblNpemVGb3JJbnB1dChoZWlnaHQpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJveFxuICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgICAgZGlzcGxheT1cImlubGluZS1mbGV4XCJcbiAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgIHsuLi5tYXRjaGVkUHJvcHN9XG4gICAgICA+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICB3aWR0aD17aGVpZ2h0fVxuICAgICAgICAgIHBvaW50ZXJFdmVudHM9XCJub25lXCJcbiAgICAgICAgICBwb3NpdGlvbj1cImFic29sdXRlXCJcbiAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgPEljb25cbiAgICAgICAgICAgIGljb249XCJzZWFyY2hcIlxuICAgICAgICAgICAgY29sb3I9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgIHpJbmRleD17U3RhY2tpbmdPcmRlci5GT0NVU0VEICsgMX1cbiAgICAgICAgICAgIHNpemU9e2ljb25TaXplfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgcGFkZGluZ0xlZnQ9e2hlaWdodH1cbiAgICAgICAgICBhcHBlYXJhbmNlPXthcHBlYXJhbmNlfVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgICAgey4uLnJlbWFpbmluZ1Byb3BzfVxuICAgICAgICAvPlxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShTZWFyY2hJbnB1dClcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsVzs7Ozs7Ozs7Ozs7O1dBYUosa0JBQVM7TUFDUCxrQkFBMEQsS0FBS0MsS0FBL0Q7TUFBQSxJQUFRQyxLQUFSLGVBQVFBLEtBQVI7TUFBQSxJQUFlQyxVQUFmLGVBQWVBLFVBQWY7TUFBQSxJQUEyQkMsUUFBM0IsZUFBMkJBLFFBQTNCO01BQUEsSUFBcUNDLE1BQXJDLGVBQXFDQSxNQUFyQztNQUFBLElBQWdESixLQUFoRDs7TUFDQSxxQkFBeUMsSUFBQUssb0JBQUEsRUFBY0wsS0FBZCxDQUF6QztNQUFBLElBQVFNLFlBQVIsa0JBQVFBLFlBQVI7TUFBQSxJQUFzQkMsY0FBdEIsa0JBQXNCQSxjQUF0Qjs7TUFDQSxJQUFRQyxLQUFSLEdBQWtCRixZQUFsQixDQUFRRSxLQUFSO01BQ0EsSUFBTUMsUUFBUSxHQUFHUixLQUFLLENBQUNTLG1CQUFOLENBQTBCTixNQUExQixDQUFqQjtNQUVBLG9CQUNFLGdDQUFDLGlCQUFEO1FBQ0UsUUFBUSxFQUFDLFVBRFg7UUFFRSxPQUFPLEVBQUMsYUFGVjtRQUdFLE1BQU0sRUFBRUE7TUFIVixHQUlNRSxZQUpOLGdCQU1FLGdDQUFDLGlCQUFEO1FBQ0UsTUFBTSxFQUFFRixNQURWO1FBRUUsS0FBSyxFQUFFQSxNQUZUO1FBR0UsYUFBYSxFQUFDLE1BSGhCO1FBSUUsUUFBUSxFQUFDLFVBSlg7UUFLRSxPQUFPLEVBQUMsTUFMVjtRQU1FLGNBQWMsRUFBQyxRQU5qQjtRQU9FLFVBQVUsRUFBQztNQVBiLGdCQVNFLGdDQUFDLFVBQUQ7UUFDRSxJQUFJLEVBQUMsUUFEUDtRQUVFLEtBQUssRUFBQyxTQUZSO1FBR0UsTUFBTSxFQUFFTyx3QkFBQSxDQUFjQyxPQUFkLEdBQXdCLENBSGxDO1FBSUUsSUFBSSxFQUFFSDtNQUpSLEVBVEYsQ0FORixlQXNCRSxnQ0FBQyxvQkFBRDtRQUNFLE1BQU0sRUFBRUwsTUFEVjtRQUVFLFdBQVcsRUFBRUEsTUFGZjtRQUdFLFVBQVUsRUFBRUYsVUFIZDtRQUlFLFFBQVEsRUFBRUMsUUFKWjtRQUtFLEtBQUssRUFBRUssS0FMVDtRQU1FLElBQUksRUFBQztNQU5QLEdBT01ELGNBUE4sRUF0QkYsQ0FERjtJQWtDRDs7O0VBckR1Qk0sb0I7O0FBQXBCZCxXO2lDQUFBQSxXLGlDQUtDZSxvQkFBQSxDQUFVQyxTO2lDQUxYaEIsVyxrQkFRa0I7RUFDcEJLLE1BQU0sRUFBRSxFQURZO0VBRXBCRixVQUFVLEVBQUU7QUFGUSxDOztlQWdEVCxJQUFBYyxnQkFBQSxFQUFVakIsV0FBVixDIn0=