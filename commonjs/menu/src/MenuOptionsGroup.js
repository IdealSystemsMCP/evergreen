"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _layers = require("../../layers");

var _typography = require("../../typography");

var _theme = require("../../theme");

var _MenuOption = _interopRequireDefault(require("./MenuOption"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var MenuOptionsGroup = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(MenuOptionsGroup, _React$PureComponent);

  var _super = _createSuper(MenuOptionsGroup);

  function MenuOptionsGroup() {
    (0, _classCallCheck2["default"])(this, MenuOptionsGroup);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(MenuOptionsGroup, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          options = _this$props.options,
          selected = _this$props.selected,
          onChange = _this$props.onChange;
      return /*#__PURE__*/_react["default"].createElement(_layers.Pane, {
        paddingY: 8
      }, title && /*#__PURE__*/_react["default"].createElement(_typography.Heading, {
        size: 100,
        marginLeft: 44,
        marginRight: 16,
        marginY: 8
      }, title), /*#__PURE__*/_react["default"].createElement(_layers.Pane, null, options.map(function (option) {
        return /*#__PURE__*/_react["default"].createElement(_MenuOption["default"], {
          key: option.value,
          isSelected: option.value === selected,
          onSelect: function onSelect() {
            return onChange(option.value);
          }
        }, option.label);
      })));
    }
  }]);
  return MenuOptionsGroup;
}(_react["default"].PureComponent);

MenuOptionsGroup.displayName = "MenuOptionsGroup";
(0, _defineProperty2["default"])(MenuOptionsGroup, "propTypes", {
  /**
   * Title of the menu group.
   */
  title: _propTypes["default"].node,

  /**
   * The current value of the option group.
   */
  selected: _propTypes["default"].any,

  /**
   * Function called when selection changes.
   */
  onChange: _propTypes["default"].func,

  /**
   * List of options rendered in the group.
   */
  options: _propTypes["default"].array
});

var _default = (0, _theme.withTheme)(MenuOptionsGroup);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJNZW51T3B0aW9uc0dyb3VwIiwicHJvcHMiLCJ0aXRsZSIsIm9wdGlvbnMiLCJzZWxlY3RlZCIsIm9uQ2hhbmdlIiwibWFwIiwib3B0aW9uIiwidmFsdWUiLCJsYWJlbCIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIlByb3BUeXBlcyIsIm5vZGUiLCJhbnkiLCJmdW5jIiwiYXJyYXkiLCJ3aXRoVGhlbWUiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbWVudS9zcmMvTWVudU9wdGlvbnNHcm91cC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBQYW5lIH0gZnJvbSAnLi4vLi4vbGF5ZXJzJ1xuaW1wb3J0IHsgSGVhZGluZyB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcbmltcG9ydCBNZW51T3B0aW9uIGZyb20gJy4vTWVudU9wdGlvbidcblxuY2xhc3MgTWVudU9wdGlvbnNHcm91cCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIFRpdGxlIG9mIHRoZSBtZW51IGdyb3VwLlxuICAgICAqL1xuICAgIHRpdGxlOiBQcm9wVHlwZXMubm9kZSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IHZhbHVlIG9mIHRoZSBvcHRpb24gZ3JvdXAuXG4gICAgICovXG4gICAgc2VsZWN0ZWQ6IFByb3BUeXBlcy5hbnksXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiBjYWxsZWQgd2hlbiBzZWxlY3Rpb24gY2hhbmdlcy5cbiAgICAgKi9cbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBMaXN0IG9mIG9wdGlvbnMgcmVuZGVyZWQgaW4gdGhlIGdyb3VwLlxuICAgICAqL1xuICAgIG9wdGlvbnM6IFByb3BUeXBlcy5hcnJheVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGl0bGUsIG9wdGlvbnMsIHNlbGVjdGVkLCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQYW5lIHBhZGRpbmdZPXs4fT5cbiAgICAgICAge3RpdGxlICYmIChcbiAgICAgICAgICA8SGVhZGluZyBzaXplPXsxMDB9IG1hcmdpbkxlZnQ9ezQ0fSBtYXJnaW5SaWdodD17MTZ9IG1hcmdpblk9ezh9PlxuICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgKX1cbiAgICAgICAgPFBhbmU+XG4gICAgICAgICAge29wdGlvbnMubWFwKChvcHRpb24pID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxNZW51T3B0aW9uXG4gICAgICAgICAgICAgICAga2V5PXtvcHRpb24udmFsdWV9XG4gICAgICAgICAgICAgICAgaXNTZWxlY3RlZD17b3B0aW9uLnZhbHVlID09PSBzZWxlY3RlZH1cbiAgICAgICAgICAgICAgICBvblNlbGVjdD17KCkgPT4gb25DaGFuZ2Uob3B0aW9uLnZhbHVlKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtvcHRpb24ubGFiZWx9XG4gICAgICAgICAgICAgIDwvTWVudU9wdGlvbj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9QYW5lPlxuICAgICAgPC9QYW5lPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoTWVudU9wdGlvbnNHcm91cClcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztJQUVNQSxnQjs7Ozs7Ozs7Ozs7O1dBdUJKLGtCQUFTO01BQ1Asa0JBQStDLEtBQUtDLEtBQXBEO01BQUEsSUFBUUMsS0FBUixlQUFRQSxLQUFSO01BQUEsSUFBZUMsT0FBZixlQUFlQSxPQUFmO01BQUEsSUFBd0JDLFFBQXhCLGVBQXdCQSxRQUF4QjtNQUFBLElBQWtDQyxRQUFsQyxlQUFrQ0EsUUFBbEM7TUFFQSxvQkFDRSxnQ0FBQyxZQUFEO1FBQU0sUUFBUSxFQUFFO01BQWhCLEdBQ0dILEtBQUssaUJBQ0osZ0NBQUMsbUJBQUQ7UUFBUyxJQUFJLEVBQUUsR0FBZjtRQUFvQixVQUFVLEVBQUUsRUFBaEM7UUFBb0MsV0FBVyxFQUFFLEVBQWpEO1FBQXFELE9BQU8sRUFBRTtNQUE5RCxHQUNHQSxLQURILENBRkosZUFNRSxnQ0FBQyxZQUFELFFBQ0dDLE9BQU8sQ0FBQ0csR0FBUixDQUFZLFVBQUNDLE1BQUQsRUFBWTtRQUN2QixvQkFDRSxnQ0FBQyxzQkFBRDtVQUNFLEdBQUcsRUFBRUEsTUFBTSxDQUFDQyxLQURkO1VBRUUsVUFBVSxFQUFFRCxNQUFNLENBQUNDLEtBQVAsS0FBaUJKLFFBRi9CO1VBR0UsUUFBUSxFQUFFO1lBQUEsT0FBTUMsUUFBUSxDQUFDRSxNQUFNLENBQUNDLEtBQVIsQ0FBZDtVQUFBO1FBSFosR0FLR0QsTUFBTSxDQUFDRSxLQUxWLENBREY7TUFTRCxDQVZBLENBREgsQ0FORixDQURGO0lBc0JEOzs7RUFoRDRCQyxpQkFBQSxDQUFNQyxhOztBQUEvQlgsZ0I7aUNBQUFBLGdCLGVBQ2U7RUFDakI7QUFDSjtBQUNBO0VBQ0lFLEtBQUssRUFBRVUscUJBQUEsQ0FBVUMsSUFKQTs7RUFNakI7QUFDSjtBQUNBO0VBQ0lULFFBQVEsRUFBRVEscUJBQUEsQ0FBVUUsR0FUSDs7RUFXakI7QUFDSjtBQUNBO0VBQ0lULFFBQVEsRUFBRU8scUJBQUEsQ0FBVUcsSUFkSDs7RUFnQmpCO0FBQ0o7QUFDQTtFQUNJWixPQUFPLEVBQUVTLHFCQUFBLENBQVVJO0FBbkJGLEM7O2VBa0ROLElBQUFDLGdCQUFBLEVBQVVqQixnQkFBVixDIn0=