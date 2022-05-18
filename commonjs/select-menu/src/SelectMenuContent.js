"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _layers = require("../../layers");

var _typography = require("../../typography");

var _buttons = require("../../buttons");

var _OptionsList = _interopRequireDefault(require("./OptionsList"));

var _OptionShapePropType = _interopRequireDefault(require("./OptionShapePropType"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var DefaultTitleView = function DefaultTitleView(_ref) {
  var close = _ref.close,
      title = _ref.title,
      headerHeight = _ref.headerHeight;
  return /*#__PURE__*/_react["default"].createElement(_layers.Pane, {
    display: "flex",
    alignItems: "center",
    borderBottom: "default",
    padding: 8,
    height: headerHeight,
    boxSizing: "border-box"
  }, /*#__PURE__*/_react["default"].createElement(_layers.Pane, {
    flex: "1",
    display: "flex",
    alignItems: "center"
  }, /*#__PURE__*/_react["default"].createElement(_typography.Heading, {
    size: 400
  }, title)), /*#__PURE__*/_react["default"].createElement(_buttons.IconButton, {
    icon: "cross",
    appearance: "minimal",
    height: 24,
    onClick: close
  }));
};

DefaultTitleView.displayName = "DefaultTitleView";
DefaultTitleView.propTypes = {
  close: _propTypes["default"].func,
  title: _propTypes["default"].string,
  headerHeight: _propTypes["default"].number
};

var SelectMenuContent = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(SelectMenuContent, _PureComponent);

  var _super = _createSuper(SelectMenuContent);

  function SelectMenuContent() {
    (0, _classCallCheck2["default"])(this, SelectMenuContent);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(SelectMenuContent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          width = _this$props.width,
          height = _this$props.height,
          options = _this$props.options,
          hasTitle = _this$props.hasTitle,
          hasFilter = _this$props.hasFilter,
          filterPlaceholder = _this$props.filterPlaceholder,
          filterIcon = _this$props.filterIcon,
          close = _this$props.close,
          listProps = _this$props.listProps,
          titleView = _this$props.titleView,
          detailView = _this$props.detailView,
          emptyView = _this$props.emptyView,
          isMultiSelect = _this$props.isMultiSelect,
          closeOnSelect = _this$props.closeOnSelect;
      var headerHeight = 40;
      var optionsListHeight = hasTitle ? height - headerHeight : height;
      var hasDetailView = Boolean(detailView);
      var hasEmptyView = Boolean(emptyView);
      return /*#__PURE__*/_react["default"].createElement(_layers.Pane, {
        display: "flex",
        height: height
      }, /*#__PURE__*/_react["default"].createElement(_layers.Pane, {
        width: width,
        height: height,
        display: "flex",
        flexDirection: "column",
        borderRight: hasDetailView ? 'muted' : null
      }, hasTitle && titleView({
        close: close,
        title: title,
        headerHeight: headerHeight
      }), options.length === 0 && hasEmptyView ? /*#__PURE__*/_react["default"].createElement(_layers.Pane, {
        height: optionsListHeight
      }, emptyView) : /*#__PURE__*/_react["default"].createElement(_OptionsList["default"], (0, _extends2["default"])({
        height: optionsListHeight,
        hasFilter: hasFilter,
        filterPlaceholder: filterPlaceholder,
        filterIcon: filterIcon,
        options: options,
        isMultiSelect: isMultiSelect,
        close: close,
        closeOnSelect: closeOnSelect
      }, listProps))), hasDetailView && detailView);
    }
  }]);
  return SelectMenuContent;
}(_react.PureComponent);

exports["default"] = SelectMenuContent;
SelectMenuContent.displayName = "SelectMenuContent";
(0, _defineProperty2["default"])(SelectMenuContent, "propTypes", {
  close: _propTypes["default"].func,
  title: _propTypes["default"].string,
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  headerHeight: _propTypes["default"].number,
  options: _propTypes["default"].arrayOf(_OptionShapePropType["default"]),
  hasTitle: _propTypes["default"].bool,
  hasFilter: _propTypes["default"].bool,
  filterPlaceholder: _propTypes["default"].string,
  filterIcon: _propTypes["default"].string,
  listProps: _propTypes["default"].shape(_OptionsList["default"].propTypes),

  /**
   * When true, multi select is accounted for.
   */
  isMultiSelect: _propTypes["default"].bool,

  /*
   * When true, menu closes on option selection.
   */
  closeOnSelect: _propTypes["default"].bool,

  /**
   * Node that is placed in the header section, above the options.
   */
  titleView: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].node]),

  /**
   * Node that is placed right next to the options.
   */
  detailView: _propTypes["default"].node,

  /**
   * Node that is displayed instead of options list when there are no options.
   */
  emptyView: _propTypes["default"].node
});
(0, _defineProperty2["default"])(SelectMenuContent, "defaultProps", {
  options: [],
  hasTitle: true,
  hasFilter: true,
  titleView: DefaultTitleView
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJEZWZhdWx0VGl0bGVWaWV3IiwiY2xvc2UiLCJ0aXRsZSIsImhlYWRlckhlaWdodCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJzdHJpbmciLCJudW1iZXIiLCJTZWxlY3RNZW51Q29udGVudCIsInByb3BzIiwid2lkdGgiLCJoZWlnaHQiLCJvcHRpb25zIiwiaGFzVGl0bGUiLCJoYXNGaWx0ZXIiLCJmaWx0ZXJQbGFjZWhvbGRlciIsImZpbHRlckljb24iLCJsaXN0UHJvcHMiLCJ0aXRsZVZpZXciLCJkZXRhaWxWaWV3IiwiZW1wdHlWaWV3IiwiaXNNdWx0aVNlbGVjdCIsImNsb3NlT25TZWxlY3QiLCJvcHRpb25zTGlzdEhlaWdodCIsImhhc0RldGFpbFZpZXciLCJCb29sZWFuIiwiaGFzRW1wdHlWaWV3IiwibGVuZ3RoIiwiUHVyZUNvbXBvbmVudCIsIm9uZU9mVHlwZSIsImFycmF5T2YiLCJPcHRpb25TaGFwZVByb3BUeXBlIiwiYm9vbCIsInNoYXBlIiwiT3B0aW9uc0xpc3QiLCJub2RlIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3NlbGVjdC1tZW51L3NyYy9TZWxlY3RNZW51Q29udGVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgUGFuZSB9IGZyb20gJy4uLy4uL2xheWVycydcbmltcG9ydCB7IEhlYWRpbmcgfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuaW1wb3J0IHsgSWNvbkJ1dHRvbiB9IGZyb20gJy4uLy4uL2J1dHRvbnMnXG5pbXBvcnQgT3B0aW9uc0xpc3QgZnJvbSAnLi9PcHRpb25zTGlzdCdcbmltcG9ydCBPcHRpb25TaGFwZVByb3BUeXBlIGZyb20gJy4vT3B0aW9uU2hhcGVQcm9wVHlwZSdcblxuY29uc3QgRGVmYXVsdFRpdGxlVmlldyA9ICh7IGNsb3NlLCB0aXRsZSwgaGVhZGVySGVpZ2h0IH0pID0+IChcbiAgPFBhbmVcbiAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgYm9yZGVyQm90dG9tPVwiZGVmYXVsdFwiXG4gICAgcGFkZGluZz17OH1cbiAgICBoZWlnaHQ9e2hlYWRlckhlaWdodH1cbiAgICBib3hTaXppbmc9XCJib3JkZXItYm94XCJcbiAgPlxuICAgIDxQYW5lIGZsZXg9XCIxXCIgZGlzcGxheT1cImZsZXhcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICA8SGVhZGluZyBzaXplPXs0MDB9Pnt0aXRsZX08L0hlYWRpbmc+XG4gICAgPC9QYW5lPlxuICAgIDxJY29uQnV0dG9uIGljb249XCJjcm9zc1wiIGFwcGVhcmFuY2U9XCJtaW5pbWFsXCIgaGVpZ2h0PXsyNH0gb25DbGljaz17Y2xvc2V9IC8+XG4gIDwvUGFuZT5cbilcblxuRGVmYXVsdFRpdGxlVmlldy5wcm9wVHlwZXMgPSB7XG4gIGNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGhlYWRlckhlaWdodDogUHJvcFR5cGVzLm51bWJlclxufVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0TWVudUNvbnRlbnQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgd2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgICBoZWFkZXJIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgb3B0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoT3B0aW9uU2hhcGVQcm9wVHlwZSksXG4gICAgaGFzVGl0bGU6IFByb3BUeXBlcy5ib29sLFxuICAgIGhhc0ZpbHRlcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgZmlsdGVyUGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZmlsdGVySWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBsaXN0UHJvcHM6IFByb3BUeXBlcy5zaGFwZShPcHRpb25zTGlzdC5wcm9wVHlwZXMpLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCBtdWx0aSBzZWxlY3QgaXMgYWNjb3VudGVkIGZvci5cbiAgICAgKi9cbiAgICBpc011bHRpU2VsZWN0OiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qXG4gICAgICogV2hlbiB0cnVlLCBtZW51IGNsb3NlcyBvbiBvcHRpb24gc2VsZWN0aW9uLlxuICAgICAqL1xuICAgIGNsb3NlT25TZWxlY3Q6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogTm9kZSB0aGF0IGlzIHBsYWNlZCBpbiB0aGUgaGVhZGVyIHNlY3Rpb24sIGFib3ZlIHRoZSBvcHRpb25zLlxuICAgICAqL1xuICAgIHRpdGxlVmlldzogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5ub2RlXSksXG5cbiAgICAvKipcbiAgICAgKiBOb2RlIHRoYXQgaXMgcGxhY2VkIHJpZ2h0IG5leHQgdG8gdGhlIG9wdGlvbnMuXG4gICAgICovXG4gICAgZGV0YWlsVmlldzogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBOb2RlIHRoYXQgaXMgZGlzcGxheWVkIGluc3RlYWQgb2Ygb3B0aW9ucyBsaXN0IHdoZW4gdGhlcmUgYXJlIG5vIG9wdGlvbnMuXG4gICAgICovXG4gICAgZW1wdHlWaWV3OiBQcm9wVHlwZXMubm9kZVxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBvcHRpb25zOiBbXSxcbiAgICBoYXNUaXRsZTogdHJ1ZSxcbiAgICBoYXNGaWx0ZXI6IHRydWUsXG4gICAgdGl0bGVWaWV3OiBEZWZhdWx0VGl0bGVWaWV3XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdGl0bGUsXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICAgIG9wdGlvbnMsXG4gICAgICBoYXNUaXRsZSxcbiAgICAgIGhhc0ZpbHRlcixcbiAgICAgIGZpbHRlclBsYWNlaG9sZGVyLFxuICAgICAgZmlsdGVySWNvbixcbiAgICAgIGNsb3NlLFxuICAgICAgbGlzdFByb3BzLFxuICAgICAgdGl0bGVWaWV3LFxuICAgICAgZGV0YWlsVmlldyxcbiAgICAgIGVtcHR5VmlldyxcbiAgICAgIGlzTXVsdGlTZWxlY3QsXG4gICAgICBjbG9zZU9uU2VsZWN0XG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IGhlYWRlckhlaWdodCA9IDQwXG4gICAgY29uc3Qgb3B0aW9uc0xpc3RIZWlnaHQgPSBoYXNUaXRsZSA/IGhlaWdodCAtIGhlYWRlckhlaWdodCA6IGhlaWdodFxuXG4gICAgY29uc3QgaGFzRGV0YWlsVmlldyA9IEJvb2xlYW4oZGV0YWlsVmlldylcbiAgICBjb25zdCBoYXNFbXB0eVZpZXcgPSBCb29sZWFuKGVtcHR5VmlldylcblxuICAgIHJldHVybiAoXG4gICAgICA8UGFuZSBkaXNwbGF5PVwiZmxleFwiIGhlaWdodD17aGVpZ2h0fT5cbiAgICAgICAgPFBhbmVcbiAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgIGJvcmRlclJpZ2h0PXtoYXNEZXRhaWxWaWV3ID8gJ211dGVkJyA6IG51bGx9XG4gICAgICAgID5cbiAgICAgICAgICB7aGFzVGl0bGUgJiYgdGl0bGVWaWV3KHsgY2xvc2UsIHRpdGxlLCBoZWFkZXJIZWlnaHQgfSl9XG4gICAgICAgICAge29wdGlvbnMubGVuZ3RoID09PSAwICYmIGhhc0VtcHR5VmlldyA/IChcbiAgICAgICAgICAgIDxQYW5lIGhlaWdodD17b3B0aW9uc0xpc3RIZWlnaHR9PntlbXB0eVZpZXd9PC9QYW5lPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8T3B0aW9uc0xpc3RcbiAgICAgICAgICAgICAgaGVpZ2h0PXtvcHRpb25zTGlzdEhlaWdodH1cbiAgICAgICAgICAgICAgaGFzRmlsdGVyPXtoYXNGaWx0ZXJ9XG4gICAgICAgICAgICAgIGZpbHRlclBsYWNlaG9sZGVyPXtmaWx0ZXJQbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgZmlsdGVySWNvbj17ZmlsdGVySWNvbn1cbiAgICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgICAgICAgICAgaXNNdWx0aVNlbGVjdD17aXNNdWx0aVNlbGVjdH1cbiAgICAgICAgICAgICAgY2xvc2U9e2Nsb3NlfVxuICAgICAgICAgICAgICBjbG9zZU9uU2VsZWN0PXtjbG9zZU9uU2VsZWN0fVxuICAgICAgICAgICAgICB7Li4ubGlzdFByb3BzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L1BhbmU+XG4gICAgICAgIHtoYXNEZXRhaWxWaWV3ICYmIGRldGFpbFZpZXd9XG4gICAgICA8L1BhbmU+XG4gICAgKVxuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUVBLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUI7RUFBQSxJQUFHQyxLQUFILFFBQUdBLEtBQUg7RUFBQSxJQUFVQyxLQUFWLFFBQVVBLEtBQVY7RUFBQSxJQUFpQkMsWUFBakIsUUFBaUJBLFlBQWpCO0VBQUEsb0JBQ3ZCLGdDQUFDLFlBQUQ7SUFDRSxPQUFPLEVBQUMsTUFEVjtJ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