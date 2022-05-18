"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _glamor = require("glamor");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typography = require("../../typography");

var _icon = require("../../icon");

var _TableHeaderCell = _interopRequireDefault(require("./TableHeaderCell"));

var _excluded = ["value", "children", "onChange", "autoFocus", "spellCheck", "placeholder", "icon"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var invisibleInputClass = (0, _glamor.css)({
  border: 'none',
  backgroundColor: 'transparent',
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  WebkitFontSmoothing: 'antialiased',
  '&:focus': {
    outline: 'none'
  },
  '&::placeholder': {
    color: "rgba(67, 90, 111, 0.7)"
  }
}).toString();

var SearchTableHeaderCell = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(SearchTableHeaderCell, _PureComponent);

  var _super = _createSuper(SearchTableHeaderCell);

  function SearchTableHeaderCell() {
    (0, _classCallCheck2["default"])(this, SearchTableHeaderCell);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(SearchTableHeaderCell, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          value = _this$props.value,
          children = _this$props.children,
          _onChange = _this$props.onChange,
          autoFocus = _this$props.autoFocus,
          spellCheck = _this$props.spellCheck,
          placeholder = _this$props.placeholder,
          icon = _this$props.icon,
          props = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      return /*#__PURE__*/_react["default"].createElement(_TableHeaderCell["default"], props, /*#__PURE__*/_react["default"].createElement(_icon.Icon, {
        icon: icon,
        color: "muted",
        marginLeft: 2,
        marginRight: 10,
        size: 12
      }), /*#__PURE__*/_react["default"].createElement(_typography.Text, {
        is: "input",
        size: 300,
        flex: "1",
        className: invisibleInputClass,
        value: value,
        onChange: function onChange(e) {
          return _onChange(e.target.value);
        },
        autoFocus: autoFocus,
        spellCheck: spellCheck,
        fontWeight: 500,
        marginLeft: -2,
        paddingLeft: 0,
        placeholder: placeholder
      }));
    }
  }]);
  return SearchTableHeaderCell;
}(_react.PureComponent);

exports["default"] = SearchTableHeaderCell;
SearchTableHeaderCell.displayName = "SearchTableHeaderCell";
(0, _defineProperty2["default"])(SearchTableHeaderCell, "propTypes", _objectSpread(_objectSpread({}, _TableHeaderCell["default"].propTypes), {}, {
  /**
   * The value of the input.
   */
  value: _propTypes["default"].string,

  /**
   * Handler to be called when the input changes.
   */
  onChange: _propTypes["default"].func,

  /**
   * Sets whether the component should be automatically focused on component render.
   */
  autoFocus: _propTypes["default"].bool,

  /**
   * Sets whether to apply spell checking to the content.
   */
  spellCheck: _propTypes["default"].bool,

  /**
   * Text to display in the input if the input is empty.
   */
  placeholder: _propTypes["default"].string,

  /**
   * Icon to display in the input.
   */
  icon: _propTypes["default"].string
}));
(0, _defineProperty2["default"])(SearchTableHeaderCell, "defaultProps", {
  onChange: function onChange() {},
  spellCheck: true,
  placeholder: 'Filter...',
  icon: 'search'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJpbnZpc2libGVJbnB1dENsYXNzIiwiY3NzIiwiYm9yZGVyIiwiYmFja2dyb3VuZENvbG9yIiwiV2Via2l0QXBwZWFyYW5jZSIsIk1vekFwcGVhcmFuY2UiLCJXZWJraXRGb250U21vb3RoaW5nIiwib3V0bGluZSIsImNvbG9yIiwidG9TdHJpbmciLCJTZWFyY2hUYWJsZUhlYWRlckNlbGwiLCJwcm9wcyIsInZhbHVlIiwiY2hpbGRyZW4iLCJvbkNoYW5nZSIsImF1dG9Gb2N1cyIsInNwZWxsQ2hlY2siLCJwbGFjZWhvbGRlciIsImljb24iLCJlIiwidGFyZ2V0IiwiUHVyZUNvbXBvbmVudCIsIlRhYmxlSGVhZGVyQ2VsbCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImZ1bmMiLCJib29sIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3RhYmxlL3NyYy9TZWFyY2hUYWJsZUhlYWRlckNlbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnZ2xhbW9yJ1xuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJy4uLy4uL2ljb24nXG5pbXBvcnQgVGFibGVIZWFkZXJDZWxsIGZyb20gJy4vVGFibGVIZWFkZXJDZWxsJ1xuXG5jb25zdCBpbnZpc2libGVJbnB1dENsYXNzID0gY3NzKHtcbiAgYm9yZGVyOiAnbm9uZScsXG4gIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgV2Via2l0QXBwZWFyYW5jZTogJ25vbmUnLFxuICBNb3pBcHBlYXJhbmNlOiAnbm9uZScsXG4gIFdlYmtpdEZvbnRTbW9vdGhpbmc6ICdhbnRpYWxpYXNlZCcsXG5cbiAgJyY6Zm9jdXMnOiB7XG4gICAgb3V0bGluZTogJ25vbmUnXG4gIH0sXG5cbiAgJyY6OnBsYWNlaG9sZGVyJzoge1xuICAgIGNvbG9yOiBgcmdiYSg2NywgOTAsIDExMSwgMC43KWBcbiAgfVxufSkudG9TdHJpbmcoKVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hUYWJsZUhlYWRlckNlbGwgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgVGFibGVIZWFkZXJDZWxsIGNvbXBvbmVudCBhcyB0aGUgYmFzZS5cbiAgICAgKi9cbiAgICAuLi5UYWJsZUhlYWRlckNlbGwucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHZhbHVlIG9mIHRoZSBpbnB1dC5cbiAgICAgKi9cbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXIgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIGlucHV0IGNoYW5nZXMuXG4gICAgICovXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB3aGV0aGVyIHRoZSBjb21wb25lbnQgc2hvdWxkIGJlIGF1dG9tYXRpY2FsbHkgZm9jdXNlZCBvbiBjb21wb25lbnQgcmVuZGVyLlxuICAgICAqL1xuICAgIGF1dG9Gb2N1czogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHdoZXRoZXIgdG8gYXBwbHkgc3BlbGwgY2hlY2tpbmcgdG8gdGhlIGNvbnRlbnQuXG4gICAgICovXG4gICAgc3BlbGxDaGVjazogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBUZXh0IHRvIGRpc3BsYXkgaW4gdGhlIGlucHV0IGlmIHRoZSBpbnB1dCBpcyBlbXB0eS5cbiAgICAgKi9cbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIEljb24gdG8gZGlzcGxheSBpbiB0aGUgaW5wdXQuXG4gICAgICovXG4gICAgaWNvbjogUHJvcFR5cGVzLnN0cmluZ1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBvbkNoYW5nZTogKCkgPT4ge30sXG4gICAgc3BlbGxDaGVjazogdHJ1ZSxcbiAgICBwbGFjZWhvbGRlcjogJ0ZpbHRlci4uLicsXG4gICAgaWNvbjogJ3NlYXJjaCdcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB2YWx1ZSxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICBhdXRvRm9jdXMsXG4gICAgICBzcGVsbENoZWNrLFxuICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICBpY29uLFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUYWJsZUhlYWRlckNlbGwgey4uLnByb3BzfT5cbiAgICAgICAgPEljb25cbiAgICAgICAgICBpY29uPXtpY29ufVxuICAgICAgICAgIGNvbG9yPVwibXV0ZWRcIlxuICAgICAgICAgIG1hcmdpbkxlZnQ9ezJ9XG4gICAgICAgICAgbWFyZ2luUmlnaHQ9ezEwfVxuICAgICAgICAgIHNpemU9ezEyfVxuICAgICAgICAvPlxuICAgICAgICA8VGV4dFxuICAgICAgICAgIGlzPVwiaW5wdXRcIlxuICAgICAgICAgIHNpemU9ezMwMH1cbiAgICAgICAgICBmbGV4PVwiMVwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtpbnZpc2libGVJbnB1dENsYXNzfVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBvbkNoYW5nZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgYXV0b0ZvY3VzPXthdXRvRm9jdXN9XG4gICAgICAgICAgc3BlbGxDaGVjaz17c3BlbGxDaGVja31cbiAgICAgICAgICBmb250V2VpZ2h0PXs1MDB9XG4gICAgICAgICAgbWFyZ2luTGVmdD17LTJ9XG4gICAgICAgICAgcGFkZGluZ0xlZnQ9ezB9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAvPlxuICAgICAgPC9UYWJsZUhlYWRlckNlbGw+XG4gICAgKVxuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLG1CQUFtQixHQUFHLElBQUFDLFdBQUEsRUFBSTtFQUM5QkMsTUFBTSxFQUFFLE1BRHNCO0VBRTlCQyxlQUFlLEVBQUUsYUFGYTtFQUc5QkMsZ0JBQWdCLEVBQUUsTUFIWTtFQUk5QkMsYUFBYSxFQUFFLE1BSmU7RUFLOUJDLG1CQUFtQixFQUFFLGFBTFM7RUFPOUIsV0FBVztJQUNUQyxPQUFPLEVBQUU7RUFEQSxDQVBtQjtFQVc5QixrQkFBa0I7SUFDaEJDLEtBQUs7RUFEVztBQVhZLENBQUosRUFjekJDLFFBZHlCLEVBQTVCOztJQWdCcUJDLHFCOzs7Ozs7Ozs7Ozs7V0E2Q25CLGtCQUFTO01BQ1Asa0JBU0ksS0FBS0MsS0FUVDtNQUFBLElBQ0VDLEtBREYsZUFDRUEsS0FERjtNQUFBLElBRUVDLFFBRkYsZUFFRUEsUUFGRjtNQUFBLElBR0VDLFNBSEYsZUFHRUEsUUFIRjtNQUFBLElBSUVDLFNBSkYsZUFJRUEsU0FKRjtNQUFBLElBS0VDLFVBTEYsZUFLRUEsVUFMRjtNQUFBLElBTUVDLFdBTkYsZUFNRUEsV0FORjtNQUFBLElBT0VDLElBUEYsZUFPRUEsSUFQRjtNQUFBLElBUUtQLEtBUkw7TUFXQSxvQkFDRSxnQ0FBQywyQkFBRCxFQUFxQkEsS0FBckIsZUFDRSxnQ0FBQyxVQUFEO1FBQ0UsSUFBSSxFQUFFTyxJQURSO1FBRUUsS0FBSyxFQUFDLE9BRlI7UUFHRSxVQUFVLEVBQUUsQ0FIZDtRQUlFLFdBQVcsRUFBRSxFQUpmO1FBS0UsSUFBSSxFQUFFO01BTFIsRUFERixlQVFFLGdDQUFDLGdCQUFEO1FBQ0UsRUFBRSxFQUFDLE9BREw7UUFFRSxJQUFJLEVBQUUsR0FGUjtRQUdFLElBQUksRUFBQyxHQUhQO1FBSUUsU0FBUyxFQUFFbEIsbUJBSmI7UUFLRSxLQUFLLEVBQUVZLEtBTFQ7UUFNRSxRQUFRLEVBQUUsa0JBQUFPLENBQUM7VUFBQSxPQUFJTCxTQUFRLENBQUNLLENBQUMsQ0FBQ0MsTUFBRixDQUFTUixLQUFWLENBQVo7UUFBQSxDQU5iO1FBT0UsU0FBUyxFQUFFRyxTQVBiO1FBUUUsVUFBVSxFQUFFQyxVQVJkO1FBU0UsVUFBVSxFQUFFLEdBVGQ7UUFVRSxVQUFVLEVBQUUsQ0FBQyxDQVZmO1FBV0UsV0FBVyxFQUFFLENBWGY7UUFZRSxXQUFXLEVBQUVDO01BWmYsRUFSRixDQURGO0lBeUJEOzs7RUFsRmdESSxvQjs7O0FBQTlCWCxxQjtpQ0FBQUEscUIsK0NBS2RZLDJCQUFBLENBQWdCQyxTO0VBRW5CO0FBQ0o7QUFDQTtFQUNJWCxLQUFLLEVBQUVZLHFCQUFBLENBQVVDLE07O0VBRWpCO0FBQ0o7QUFDQTtFQUNJWCxRQUFRLEVBQUVVLHFCQUFBLENBQVVFLEk7O0VBRXBCO0FBQ0o7QUFDQTtFQUNJWCxTQUFTLEVBQUVTLHFCQUFBLENBQVVHLEk7O0VBRXJCO0FBQ0o7QUFDQTtFQUNJWCxVQUFVLEVBQUVRLHFCQUFBLENBQVVHLEk7O0VBRXRCO0FBQ0o7QUFDQTtFQUNJVixXQUFXLEVBQUVPLHFCQUFBLENBQVVDLE07O0VBRXZCO0FBQ0o7QUFDQTtFQUNJUCxJQUFJLEVBQUVNLHFCQUFBLENBQVVDOztpQ0FuQ0NmLHFCLGtCQXNDRztFQUNwQkksUUFBUSxFQUFFLG9CQUFNLENBQUUsQ0FERTtFQUVwQkUsVUFBVSxFQUFFLElBRlE7RUFHcEJDLFdBQVcsRUFBRSxXQUhPO0VBSXBCQyxJQUFJLEVBQUU7QUFKYyxDIn0=