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

var _layers = require("../../layers");

var _icon = require("../../icon");

var _image = require("../../image");

var _table = require("../../table");

var _excluded = ["label", "onSelect", "onDeselect", "isHighlighted", "isSelected", "isSelectable", "disabled", "style", "height", "icon"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Option = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Option, _PureComponent);

  var _super = _createSuper(Option);

  function Option() {
    (0, _classCallCheck2["default"])(this, Option);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Option, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          label = _this$props.label,
          onSelect = _this$props.onSelect,
          onDeselect = _this$props.onDeselect,
          isHighlighted = _this$props.isHighlighted,
          isSelected = _this$props.isSelected,
          isSelectable = _this$props.isSelectable,
          disabled = _this$props.disabled,
          style = _this$props.style,
          height = _this$props.height,
          icon = _this$props.icon,
          props = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      var textProps = {};

      if (disabled) {
        textProps.color = 'muted';
      }

      if (isSelected) {
        textProps.color = 'selected';
      }

      return /*#__PURE__*/_react["default"].createElement(_table.TableRow, (0, _extends2["default"])({
        isSelectable: isSelectable && !disabled,
        isHighlighted: isHighlighted,
        onSelect: onSelect,
        onDeselect: onDeselect,
        isSelected: isSelected,
        style: style,
        display: "flex",
        alignItems: "center",
        borderBottom: false
      }, props), /*#__PURE__*/_react["default"].createElement(_layers.Pane, {
        paddingLeft: 12,
        paddingRight: 8,
        opacity: isSelected ? 1 : 0,
        flexGrow: 0,
        paddingTop: 4
      }, /*#__PURE__*/_react["default"].createElement(_icon.Icon, {
        color: "selected",
        icon: "tick",
        size: 14
      })), /*#__PURE__*/_react["default"].createElement(_table.TextTableCell, {
        height: height,
        borderBottom: "muted",
        textProps: textProps,
        paddingLeft: 0,
        borderRight: null,
        flex: 1,
        alignSelf: "stretch",
        cursor: disabled ? 'default' : 'pointer'
      }, /*#__PURE__*/_react["default"].createElement(_layers.Pane, {
        alignItems: "center",
        display: "flex"
      }, icon && /*#__PURE__*/_react["default"].createElement(_image.Image, {
        src: icon,
        width: 24,
        marginRight: 8
      }), label)));
    }
  }]);
  return Option;
}(_react.PureComponent);

exports["default"] = Option;
Option.displayName = "Option";
(0, _defineProperty2["default"])(Option, "propTypes", {
  label: _propTypes["default"].string,
  icon: _propTypes["default"].string,
  style: _propTypes["default"].any,
  height: _propTypes["default"].number,
  onSelect: _propTypes["default"].func,
  onDeselect: _propTypes["default"].func,
  isHighlighted: _propTypes["default"].bool,
  isSelected: _propTypes["default"].bool,
  isSelectable: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPcHRpb24iLCJwcm9wcyIsImxhYmVsIiwib25TZWxlY3QiLCJvbkRlc2VsZWN0IiwiaXNIaWdobGlnaHRlZCIsImlzU2VsZWN0ZWQiLCJpc1NlbGVjdGFibGUiLCJkaXNhYmxlZCIsInN0eWxlIiwiaGVpZ2h0IiwiaWNvbiIsInRleHRQcm9wcyIsImNvbG9yIiwiUHVyZUNvbXBvbmVudCIsIlByb3BUeXBlcyIsInN0cmluZyIsImFueSIsIm51bWJlciIsImZ1bmMiLCJib29sIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3NlbGVjdC1tZW51L3NyYy9PcHRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFBhbmUgfSBmcm9tICcuLi8uLi9sYXllcnMnXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnLi4vLi4vaWNvbidcbmltcG9ydCB7IEltYWdlIH0gZnJvbSAnLi4vLi4vaW1hZ2UnXG5pbXBvcnQgeyBUYWJsZVJvdywgVGV4dFRhYmxlQ2VsbCB9IGZyb20gJy4uLy4uL3RhYmxlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcHRpb24gZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHN0eWxlOiBQcm9wVHlwZXMuYW55LFxuICAgIGhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25EZXNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaXNIaWdobGlnaHRlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNTZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNTZWxlY3RhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2xcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBsYWJlbCxcbiAgICAgIG9uU2VsZWN0LFxuICAgICAgb25EZXNlbGVjdCxcbiAgICAgIGlzSGlnaGxpZ2h0ZWQsXG4gICAgICBpc1NlbGVjdGVkLFxuICAgICAgaXNTZWxlY3RhYmxlLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBzdHlsZSxcbiAgICAgIGhlaWdodCxcbiAgICAgIGljb24sXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCB0ZXh0UHJvcHMgPSB7fVxuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgdGV4dFByb3BzLmNvbG9yID0gJ211dGVkJ1xuICAgIH1cblxuICAgIGlmIChpc1NlbGVjdGVkKSB7XG4gICAgICB0ZXh0UHJvcHMuY29sb3IgPSAnc2VsZWN0ZWQnXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUYWJsZVJvd1xuICAgICAgICBpc1NlbGVjdGFibGU9e2lzU2VsZWN0YWJsZSAmJiAhZGlzYWJsZWR9XG4gICAgICAgIGlzSGlnaGxpZ2h0ZWQ9e2lzSGlnaGxpZ2h0ZWR9XG4gICAgICAgIG9uU2VsZWN0PXtvblNlbGVjdH1cbiAgICAgICAgb25EZXNlbGVjdD17b25EZXNlbGVjdH1cbiAgICAgICAgaXNTZWxlY3RlZD17aXNTZWxlY3RlZH1cbiAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICBib3JkZXJCb3R0b209e2ZhbHNlfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICA+XG4gICAgICAgIDxQYW5lXG4gICAgICAgICAgcGFkZGluZ0xlZnQ9ezEyfVxuICAgICAgICAgIHBhZGRpbmdSaWdodD17OH1cbiAgICAgICAgICBvcGFjaXR5PXtpc1NlbGVjdGVkID8gMSA6IDB9XG4gICAgICAgICAgZmxleEdyb3c9ezB9XG4gICAgICAgICAgcGFkZGluZ1RvcD17NH1cbiAgICAgICAgPlxuICAgICAgICAgIDxJY29uIGNvbG9yPVwic2VsZWN0ZWRcIiBpY29uPVwidGlja1wiIHNpemU9ezE0fSAvPlxuICAgICAgICA8L1BhbmU+XG4gICAgICAgIDxUZXh0VGFibGVDZWxsXG4gICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgYm9yZGVyQm90dG9tPVwibXV0ZWRcIlxuICAgICAgICAgIHRleHRQcm9wcz17dGV4dFByb3BzfVxuICAgICAgICAgIHBhZGRpbmdMZWZ0PXswfVxuICAgICAgICAgIGJvcmRlclJpZ2h0PXtudWxsfVxuICAgICAgICAgIGZsZXg9ezF9XG4gICAgICAgICAgYWxpZ25TZWxmPVwic3RyZXRjaFwiXG4gICAgICAgICAgY3Vyc29yPXtkaXNhYmxlZCA/ICdkZWZhdWx0JyA6ICdwb2ludGVyJ31cbiAgICAgICAgPlxuICAgICAgICAgIDxQYW5lIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBkaXNwbGF5PVwiZmxleFwiPlxuICAgICAgICAgICAge2ljb24gJiYgPEltYWdlIHNyYz17aWNvbn0gd2lkdGg9ezI0fSBtYXJnaW5SaWdodD17OH0gLz59XG4gICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgPC9QYW5lPlxuICAgICAgICA8L1RleHRUYWJsZUNlbGw+XG4gICAgICA8L1RhYmxlUm93PlxuICAgIClcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxNOzs7Ozs7Ozs7Ozs7V0FjbkIsa0JBQVM7TUFDUCxrQkFZSSxLQUFLQyxLQVpUO01BQUEsSUFDRUMsS0FERixlQUNFQSxLQURGO01BQUEsSUFFRUMsUUFGRixlQUVFQSxRQUZGO01BQUEsSUFHRUMsVUFIRixlQUdFQSxVQUhGO01B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