import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Pane } from '../../layers';
import { Heading } from '../../typography';
import { IconButton } from '../../buttons';
import OptionsList from './OptionsList';
import OptionShapePropType from './OptionShapePropType';

var DefaultTitleView = function DefaultTitleView(_ref) {
  var close = _ref.close,
      title = _ref.title,
      headerHeight = _ref.headerHeight;
  return /*#__PURE__*/React.createElement(Pane, {
    display: "flex",
    alignItems: "center",
    borderBottom: "default",
    padding: 8,
    height: headerHeight,
    boxSizing: "border-box"
  }, /*#__PURE__*/React.createElement(Pane, {
    flex: "1",
    display: "flex",
    alignItems: "center"
  }, /*#__PURE__*/React.createElement(Heading, {
    size: 400
  }, title)), /*#__PURE__*/React.createElement(IconButton, {
    icon: "cross",
    appearance: "minimal",
    height: 24,
    onClick: close
  }));
};

DefaultTitleView.displayName = "DefaultTitleView";
DefaultTitleView.propTypes = {
  close: PropTypes.func,
  title: PropTypes.string,
  headerHeight: PropTypes.number
};

var SelectMenuContent = /*#__PURE__*/function (_PureComponent) {
  _inherits(SelectMenuContent, _PureComponent);

  var _super = _createSuper(SelectMenuContent);

  function SelectMenuContent() {
    _classCallCheck(this, SelectMenuContent);

    return _super.apply(this, arguments);
  }

  _createClass(SelectMenuContent, [{
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
      return /*#__PURE__*/React.createElement(Pane, {
        display: "flex",
        height: height
      }, /*#__PURE__*/React.createElement(Pane, {
        width: width,
        height: height,
        display: "flex",
        flexDirection: "column",
        borderRight: hasDetailView ? 'muted' : null
      }, hasTitle && titleView({
        close: close,
        title: title,
        headerHeight: headerHeight
      }), options.length === 0 && hasEmptyView ? /*#__PURE__*/React.createElement(Pane, {
        height: optionsListHeight
      }, emptyView) : /*#__PURE__*/React.createElement(OptionsList, _extends({
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
}(PureComponent);

SelectMenuContent.displayName = "SelectMenuContent";

_defineProperty(SelectMenuContent, "propTypes", {
  close: PropTypes.func,
  title: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  headerHeight: PropTypes.number,
  options: PropTypes.arrayOf(OptionShapePropType),
  hasTitle: PropTypes.bool,
  hasFilter: PropTypes.bool,
  filterPlaceholder: PropTypes.string,
  filterIcon: PropTypes.string,
  listProps: PropTypes.shape(OptionsList.propTypes),

  /**
   * When true, multi select is accounted for.
   */
  isMultiSelect: PropTypes.bool,

  /*
   * When true, menu closes on option selection.
   */
  closeOnSelect: PropTypes.bool,

  /**
   * Node that is placed in the header section, above the options.
   */
  titleView: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),

  /**
   * Node that is placed right next to the options.
   */
  detailView: PropTypes.node,

  /**
   * Node that is displayed instead of options list when there are no options.
   */
  emptyView: PropTypes.node
});

_defineProperty(SelectMenuContent, "defaultProps", {
  options: [],
  hasTitle: true,
  hasFilter: true,
  titleView: DefaultTitleView
});

export { SelectMenuContent as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJQYW5lIiwiSGVhZGluZyIsIkljb25CdXR0b24iLCJPcHRpb25zTGlzdCIsIk9wdGlvblNoYXBlUHJvcFR5cGUiLCJEZWZhdWx0VGl0bGVWaWV3IiwiY2xvc2UiLCJ0aXRsZSIsImhlYWRlckhlaWdodCIsInByb3BUeXBlcyIsImZ1bmMiLCJzdHJpbmciLCJudW1iZXIiLCJTZWxlY3RNZW51Q29udGVudCIsInByb3BzIiwid2lkdGgiLCJoZWlnaHQiLCJvcHRpb25zIiwiaGFzVGl0bGUiLCJoYXNGaWx0ZXIiLCJmaWx0ZXJQbGFjZWhvbGRlciIsImZpbHRlckljb24iLCJsaXN0UHJvcHMiLCJ0aXRsZVZpZXciLCJkZXRhaWxWaWV3IiwiZW1wdHlWaWV3IiwiaXNNdWx0aVNlbGVjdCIsImNsb3NlT25TZWxlY3QiLCJvcHRpb25zTGlzdEhlaWdodCIsImhhc0RldGFpbFZpZXciLCJCb29sZWFuIiwiaGFzRW1wdHlWaWV3IiwibGVuZ3RoIiwib25lT2ZUeXBlIiwiYXJyYXlPZiIsImJvb2wiLCJzaGFwZSIsIm5vZGUiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2VsZWN0LW1lbnUvc3JjL1NlbGVjdE1lbnVDb250ZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBQYW5lIH0gZnJvbSAnLi4vLi4vbGF5ZXJzJ1xuaW1wb3J0IHsgSGVhZGluZyB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknXG5pbXBvcnQgeyBJY29uQnV0dG9uIH0gZnJvbSAnLi4vLi4vYnV0dG9ucydcbmltcG9ydCBPcHRpb25zTGlzdCBmcm9tICcuL09wdGlvbnNMaXN0J1xuaW1wb3J0IE9wdGlvblNoYXBlUHJvcFR5cGUgZnJvbSAnLi9PcHRpb25TaGFwZVByb3BUeXBlJ1xuXG5jb25zdCBEZWZhdWx0VGl0bGVWaWV3ID0gKHsgY2xvc2UsIHRpdGxlLCBoZWFkZXJIZWlnaHQgfSkgPT4gKFxuICA8UGFuZVxuICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICBib3JkZXJCb3R0b209XCJkZWZhdWx0XCJcbiAgICBwYWRkaW5nPXs4fVxuICAgIGhlaWdodD17aGVhZGVySGVpZ2h0fVxuICAgIGJveFNpemluZz1cImJvcmRlci1ib3hcIlxuICA+XG4gICAgPFBhbmUgZmxleD1cIjFcIiBkaXNwbGF5PVwiZmxleFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgIDxIZWFkaW5nIHNpemU9ezQwMH0+e3RpdGxlfTwvSGVhZGluZz5cbiAgICA8L1BhbmU+XG4gICAgPEljb25CdXR0b24gaWNvbj1cImNyb3NzXCIgYXBwZWFyYW5jZT1cIm1pbmltYWxcIiBoZWlnaHQ9ezI0fSBvbkNsaWNrPXtjbG9zZX0gLz5cbiAgPC9QYW5lPlxuKVxuXG5EZWZhdWx0VGl0bGVWaWV3LnByb3BUeXBlcyA9IHtcbiAgY2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaGVhZGVySGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyXG59XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3RNZW51Q29udGVudCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB3aWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICAgIGhlaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICAgIGhlYWRlckhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBvcHRpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihPcHRpb25TaGFwZVByb3BUeXBlKSxcbiAgICBoYXNUaXRsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgaGFzRmlsdGVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBmaWx0ZXJQbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBmaWx0ZXJJY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGxpc3RQcm9wczogUHJvcFR5cGVzLnNoYXBlKE9wdGlvbnNMaXN0LnByb3BUeXBlcyksXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIG11bHRpIHNlbGVjdCBpcyBhY2NvdW50ZWQgZm9yLlxuICAgICAqL1xuICAgIGlzTXVsdGlTZWxlY3Q6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLypcbiAgICAgKiBXaGVuIHRydWUsIG1lbnUgY2xvc2VzIG9uIG9wdGlvbiBzZWxlY3Rpb24uXG4gICAgICovXG4gICAgY2xvc2VPblNlbGVjdDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBOb2RlIHRoYXQgaXMgcGxhY2VkIGluIHRoZSBoZWFkZXIgc2VjdGlvbiwgYWJvdmUgdGhlIG9wdGlvbnMuXG4gICAgICovXG4gICAgdGl0bGVWaWV3OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLm5vZGVdKSxcblxuICAgIC8qKlxuICAgICAqIE5vZGUgdGhhdCBpcyBwbGFjZWQgcmlnaHQgbmV4dCB0byB0aGUgb3B0aW9ucy5cbiAgICAgKi9cbiAgICBkZXRhaWxWaWV3OiBQcm9wVHlwZXMubm9kZSxcblxuICAgIC8qKlxuICAgICAqIE5vZGUgdGhhdCBpcyBkaXNwbGF5ZWQgaW5zdGVhZCBvZiBvcHRpb25zIGxpc3Qgd2hlbiB0aGVyZSBhcmUgbm8gb3B0aW9ucy5cbiAgICAgKi9cbiAgICBlbXB0eVZpZXc6IFByb3BUeXBlcy5ub2RlXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIG9wdGlvbnM6IFtdLFxuICAgIGhhc1RpdGxlOiB0cnVlLFxuICAgIGhhc0ZpbHRlcjogdHJ1ZSxcbiAgICB0aXRsZVZpZXc6IERlZmF1bHRUaXRsZVZpZXdcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB0aXRsZSxcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0LFxuICAgICAgb3B0aW9ucyxcbiAgICAgIGhhc1RpdGxlLFxuICAgICAgaGFzRmlsdGVyLFxuICAgICAgZmlsdGVyUGxhY2Vob2xkZXIsXG4gICAgICBmaWx0ZXJJY29uLFxuICAgICAgY2xvc2UsXG4gICAgICBsaXN0UHJvcHMsXG4gICAgICB0aXRsZVZpZXcsXG4gICAgICBkZXRhaWxWaWV3LFxuICAgICAgZW1wdHlWaWV3LFxuICAgICAgaXNNdWx0aVNlbGVjdCxcbiAgICAgIGNsb3NlT25TZWxlY3RcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgaGVhZGVySGVpZ2h0ID0gNDBcbiAgICBjb25zdCBvcHRpb25zTGlzdEhlaWdodCA9IGhhc1RpdGxlID8gaGVpZ2h0IC0gaGVhZGVySGVpZ2h0IDogaGVpZ2h0XG5cbiAgICBjb25zdCBoYXNEZXRhaWxWaWV3ID0gQm9vbGVhbihkZXRhaWxWaWV3KVxuICAgIGNvbnN0IGhhc0VtcHR5VmlldyA9IEJvb2xlYW4oZW1wdHlWaWV3KVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQYW5lIGRpc3BsYXk9XCJmbGV4XCIgaGVpZ2h0PXtoZWlnaHR9PlxuICAgICAgICA8UGFuZVxuICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgICAgYm9yZGVyUmlnaHQ9e2hhc0RldGFpbFZpZXcgPyAnbXV0ZWQnIDogbnVsbH1cbiAgICAgICAgPlxuICAgICAgICAgIHtoYXNUaXRsZSAmJiB0aXRsZVZpZXcoeyBjbG9zZSwgdGl0bGUsIGhlYWRlckhlaWdodCB9KX1cbiAgICAgICAgICB7b3B0aW9ucy5sZW5ndGggPT09IDAgJiYgaGFzRW1wdHlWaWV3ID8gKFxuICAgICAgICAgICAgPFBhbmUgaGVpZ2h0PXtvcHRpb25zTGlzdEhlaWdodH0+e2VtcHR5Vmlld308L1BhbmU+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxPcHRpb25zTGlzdFxuICAgICAgICAgICAgICBoZWlnaHQ9e29wdGlvbnNMaXN0SGVpZ2h0fVxuICAgICAgICAgICAgICBoYXNGaWx0ZXI9e2hhc0ZpbHRlcn1cbiAgICAgICAgICAgICAgZmlsdGVyUGxhY2Vob2xkZXI9e2ZpbHRlclBsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICBmaWx0ZXJJY29uPXtmaWx0ZXJJY29ufVxuICAgICAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgICAgICAgICBpc011bHRpU2VsZWN0PXtpc011bHRpU2VsZWN0fVxuICAgICAgICAgICAgICBjbG9zZT17Y2xvc2V9XG4gICAgICAgICAgICAgIGNsb3NlT25TZWxlY3Q9e2Nsb3NlT25TZWxlY3R9XG4gICAgICAgICAgICAgIHsuLi5saXN0UHJvcHN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvUGFuZT5cbiAgICAgICAge2hhc0RldGFpbFZpZXcgJiYgZGV0YWlsVmlld31cbiAgICAgIDwvUGFuZT5cbiAgICApXG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsYUFBaEIsUUFBcUMsT0FBckM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQixjQUFyQjtBQUNBLFNBQVNDLE9BQVQsUUFBd0Isa0JBQXhCO0FBQ0EsU0FBU0MsVUFBVCxRQUEyQixlQUEzQjtBQUNBLE9BQU9DLFdBQVAsTUFBd0IsZUFBeEI7QUFDQSxPQUFP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