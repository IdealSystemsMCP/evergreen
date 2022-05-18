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

var _uiBox = _interopRequireDefault(require("ui-box"));

var _Tab = _interopRequireDefault(require("./Tab"));

var _excluded = ["children", "height", "isSelected"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var SidebarTab = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(SidebarTab, _PureComponent);

  var _super = _createSuper(SidebarTab);

  function SidebarTab() {
    (0, _classCallCheck2["default"])(this, SidebarTab);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(SidebarTab, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          height = _this$props.height,
          isSelected = _this$props.isSelected,
          props = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      return /*#__PURE__*/_react["default"].createElement(_Tab["default"], (0, _extends2["default"])({
        isSelected: isSelected,
        height: height
      }, SidebarTab.styles, props, {
        display: "flex"
      }), /*#__PURE__*/_react["default"].createElement(_uiBox["default"], {
        is: "span",
        flex: "1"
      }, children));
    }
  }]);
  return SidebarTab;
}(_react.PureComponent);

exports["default"] = SidebarTab;
SidebarTab.displayName = "SidebarTab";
(0, _defineProperty2["default"])(SidebarTab, "propTypes", _objectSpread({}, _Tab["default"].propTypes));
(0, _defineProperty2["default"])(SidebarTab, "defaultProps", {
  height: 32
});
(0, _defineProperty2["default"])(SidebarTab, "styles", {
  width: '100%',
  paddingX: 0,
  paddingLeft: 8,
  marginX: 0,
  marginBottom: 4,
  justifyContent: 'auto'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJTaWRlYmFyVGFiIiwicHJvcHMiLCJjaGlsZHJlbiIsImhlaWdodCIsImlzU2VsZWN0ZWQiLCJzdHlsZXMiLCJQdXJlQ29tcG9uZW50IiwiVGFiIiwicHJvcFR5cGVzIiwid2lkdGgiLCJwYWRkaW5nWCIsInBhZGRpbmdMZWZ0IiwibWFyZ2luWCIsIm1hcmdpbkJvdHRvbSIsImp1c3RpZnlDb250ZW50Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3RhYnMvc3JjL1NpZGViYXJUYWIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBCb3ggZnJvbSAndWktYm94J1xuaW1wb3J0IFRhYiBmcm9tICcuL1RhYidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lkZWJhclRhYiBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC4uLlRhYi5wcm9wVHlwZXNcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgaGVpZ2h0OiAzMlxuICB9XG5cbiAgc3RhdGljIHN0eWxlcyA9IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIHBhZGRpbmdYOiAwLFxuICAgIHBhZGRpbmdMZWZ0OiA4LFxuICAgIG1hcmdpblg6IDAsXG4gICAgbWFyZ2luQm90dG9tOiA0LFxuICAgIGp1c3RpZnlDb250ZW50OiAnYXV0bydcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBoZWlnaHQsIGlzU2VsZWN0ZWQsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxUYWJcbiAgICAgICAgaXNTZWxlY3RlZD17aXNTZWxlY3RlZH1cbiAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgIHsuLi5TaWRlYmFyVGFiLnN0eWxlc31cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICA+XG4gICAgICAgIDxCb3ggaXM9XCJzcGFuXCIgZmxleD1cIjFcIj5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9UYWI+XG4gICAgKVxuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxVOzs7Ozs7Ozs7Ozs7V0FrQm5CLGtCQUFTO01BQ1Asa0JBQW1ELEtBQUtDLEtBQXhEO01BQUEsSUFBUUMsUUFBUixlQUFRQSxRQUFSO01BQUEsSUFBa0JDLE1BQWxCLGVBQWtCQSxNQUFsQjtNQUFBLElBQTBCQyxVQUExQixlQUEwQkEsVUFBMUI7TUFBQSxJQUF5Q0gsS0FBekM7TUFDQSxvQkFDRSxnQ0FBQyxlQUFEO1FBQ0UsVUFBVSxFQUFFRyxVQURkO1FBRUUsTUFBTSxFQUFFRDtNQUZWLEdBR01ILFVBQVUsQ0FBQ0ssTUFIakIsRUFJTUosS0FKTjtRQUtFLE9BQU8sRUFBQztNQUxWLGlCQU9FLGdDQUFDLGlCQUFEO1FBQUssRUFBRSxFQUFDLE1BQVI7UUFBZSxJQUFJLEVBQUM7TUFBcEIsR0FDR0MsUUFESCxDQVBGLENBREY7SUFhRDs7O0VBakNxQ0ksb0I7OztBQUFuQk4sVTtpQ0FBQUEsVSxpQ0FFZE8sZUFBQSxDQUFJQyxTO2lDQUZVUixVLGtCQUtHO0VBQ3BCRyxNQUFNLEVBQUU7QUFEWSxDO2lDQUxISCxVLFlBU0g7RUFDZFMsS0FBSyxFQUFFLE1BRE87RUFFZEMsUUFBUSxFQUFFLENBRkk7RUFHZEMsV0FBVyxFQUFFLENBSEM7RUFJZEMsT0FBTyxFQUFFLENBSks7RUFLZEMsWUFBWSxFQUFFLENBTEE7RUFNZEMsY0FBYyxFQUFFO0FBTkYsQyJ9