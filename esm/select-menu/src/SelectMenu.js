import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _excluded = ["title", "width", "height", "options", "selected", "position", "hasTitle", "hasFilter", "filterPlaceholder", "filterIcon", "detailView", "emptyView", "titleView", "isMultiSelect", "closeOnSelect"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import arrify from 'arrify';
import { Popover } from '../../popover';
import { Position } from '../../constants';
import SelectMenuContent from './SelectMenuContent';
import OptionShapePropType from './OptionShapePropType';
import SelectedPropType from './SelectedPropType';

var SelectMenu = /*#__PURE__*/function (_PureComponent) {
  _inherits(SelectMenu, _PureComponent);

  var _super = _createSuper(SelectMenu);

  function SelectMenu() {
    var _this;

    _classCallCheck(this, SelectMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "getDetailView", function (close, detailView) {
      if (typeof detailView === 'function') {
        return {
          detailView: detailView({
            close: close
          })
        };
      }

      if (detailView) {
        return {
          detailView: detailView
        };
      }

      return {};
    });

    _defineProperty(_assertThisInitialized(_this), "getEmptyView", function (close, emptyView) {
      if (typeof emptyView === 'function') {
        return {
          emptyView: emptyView({
            close: close
          })
        };
      }

      if (emptyView) {
        return {
          emptyView: emptyView
        };
      }

      return {};
    });

    return _this;
  }

  _createClass(SelectMenu, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          title = _this$props.title,
          width = _this$props.width,
          height = _this$props.height,
          options = _this$props.options,
          selected = _this$props.selected,
          position = _this$props.position,
          hasTitle = _this$props.hasTitle,
          hasFilter = _this$props.hasFilter,
          filterPlaceholder = _this$props.filterPlaceholder,
          filterIcon = _this$props.filterIcon,
          detailView = _this$props.detailView,
          emptyView = _this$props.emptyView,
          titleView = _this$props.titleView,
          isMultiSelect = _this$props.isMultiSelect,
          closeOnSelect = _this$props.closeOnSelect,
          props = _objectWithoutProperties(_this$props, _excluded);

      return /*#__PURE__*/React.createElement(Popover, _extends({
        minWidth: width,
        position: position,
        minHeight: height,
        content: function content(_ref) {
          var close = _ref.close;
          return /*#__PURE__*/React.createElement(SelectMenuContent, _extends({
            width: width,
            height: height,
            options: options,
            title: title,
            hasFilter: hasFilter,
            filterPlaceholder: filterPlaceholder,
            filterIcon: filterIcon,
            hasTitle: hasTitle,
            isMultiSelect: isMultiSelect,
            titleView: titleView,
            listProps: {
              onSelect: function onSelect(item) {
                _this2.props.onSelect(item);
              },
              onDeselect: function onDeselect(item) {
                _this2.props.onDeselect(item);
              },
              onFilterChange: _this2.props.onFilterChange,
              selected: arrify(selected)
            },
            close: close
          }, _this2.getDetailView(close, detailView), _this2.getEmptyView(close, emptyView), {
            closeOnSelect: closeOnSelect
          }));
        }
      }, props));
    }
  }]);

  return SelectMenu;
}(PureComponent);

SelectMenu.displayName = "SelectMenu";

_defineProperty(SelectMenu, "propTypes", {
  /**
   * The title of the Select Menu.
   */
  title: PropTypes.string,

  /**
   * The width of the Select Menu.
   */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * The height of the Select Menu.
   */
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * The options to show in the menu.
   * [{ label: String, value: String | Number }]
   */
  options: PropTypes.arrayOf(OptionShapePropType),

  /**
   * Function that is called when an option is selected.
   */
  onSelect: PropTypes.func,

  /**
   * Function that is called when an option is deselected.
   */
  onDeselect: PropTypes.func,

  /**
   * The selected value/values.
   */
  selected: SelectedPropType,

  /**
   * When true, multi select is accounted for.
   */
  isMultiSelect: PropTypes.bool,

  /**
   * When true, show the title.
   */
  hasTitle: PropTypes.bool,

  /**
   * When true, show the filter.
   */
  hasFilter: PropTypes.bool,

  /**
   * The placeholder of the search filter.
   */
  filterPlaceholder: PropTypes.string,

  /**
   * The icon of the search filter.
   */
  filterIcon: PropTypes.string,

  /**
   * Function that is called as the onChange() event for the filter.
   */
  onFilterChange: PropTypes.func,

  /**
   * The position of the Select Menu.
   */
  position: PropTypes.oneOf([Position.TOP, Position.TOP_LEFT, Position.TOP_RIGHT, Position.BOTTOM, Position.BOTTOM_LEFT, Position.BOTTOM_RIGHT]),

  /**
   * Can be a function that returns a node, or a node itself, that is
   * rendered on the right side of the Select Menu to give additional
   * information when an option is selected.
   */
  detailView: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),

  /**
   * Can be a function that returns a node, or a node itself, that is
   * rendered in the header section of the Select Menu to customize
   * the header.
   */
  titleView: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),

  /**
   * Can be a function that returns a node, or a node itself, that is
   * rendered instead of the options list when there are no options.
   */
  emptyView: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),

  /*
   * When true, menu closes on option selection.
   */
  closeOnSelect: PropTypes.bool
});

_defineProperty(SelectMenu, "defaultProps", {
  onSelect: function onSelect() {},
  onDeselect: function onDeselect() {},
  width: 240,
  height: 248,
  position: Position.BOTTOM_LEFT,
  isMultiSelect: false,
  filterPlaceholder: 'Filter...',
  filterIcon: 'search',
  closeOnSelect: false
});

export { SelectMenu as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJhcnJpZnkiLCJQb3BvdmVyIiwiUG9zaXRpb24iLCJTZWxlY3RNZW51Q29udGVudCIsIk9wdGlvblNoYXBlUHJvcFR5cGUiLCJTZWxlY3RlZFByb3BUeXBlIiwiU2VsZWN0TWVudSIsImNsb3NlIiwiZGV0YWlsVmlldyIsImVtcHR5VmlldyIsInByb3BzIiwidGl0bGUiLCJ3aWR0aCIsImhlaWdodCIsIm9wdGlvbnMiLCJzZWxlY3RlZCIsInBvc2l0aW9uIiwiaGFzVGl0bGUiLCJoYXNGaWx0ZXIiLCJmaWx0ZXJQbGFjZWhvbGRlciIsImZpbHRlckljb24iLCJ0aXRsZVZpZXciLCJpc011bHRpU2VsZWN0IiwiY2xvc2VPblNlbGVjdCIsIm9uU2VsZWN0IiwiaXRlbSIsIm9uRGVzZWxlY3QiLCJvbkZpbHRlckNoYW5nZSIsImdldERldGFpbFZpZXciLCJnZXRFbXB0eVZpZXciLCJzdHJpbmciLCJvbmVPZlR5cGUiLCJudW1iZXIiLCJhcnJheU9mIiwiZnVuYyIsImJvb2wiLCJvbmVPZiIsIlRPUCIsIlRPUF9MRUZUIiwiVE9QX1JJR0hUIiwiQk9UVE9NIiwiQk9UVE9NX0xFRlQiLCJCT1RUT01fUklHSFQiLCJub2RlIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3NlbGVjdC1tZW51L3NyYy9TZWxlY3RNZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgYXJyaWZ5IGZyb20gJ2FycmlmeSdcbmltcG9ydCB7IFBvcG92ZXIgfSBmcm9tICcuLi8uLi9wb3BvdmVyJ1xuaW1wb3J0IHsgUG9zaXRpb24gfSBmcm9tICcuLi8uLi9jb25zdGFudHMnXG5pbXBvcnQgU2VsZWN0TWVudUNvbnRlbnQgZnJvbSAnLi9TZWxlY3RNZW51Q29udGVudCdcbmltcG9ydCBPcHRpb25TaGFwZVByb3BUeXBlIGZyb20gJy4vT3B0aW9uU2hhcGVQcm9wVHlwZSdcbmltcG9ydCBTZWxlY3RlZFByb3BUeXBlIGZyb20gJy4vU2VsZWN0ZWRQcm9wVHlwZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0TWVudSBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIFRoZSB0aXRsZSBvZiB0aGUgU2VsZWN0IE1lbnUuXG4gICAgICovXG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgd2lkdGggb2YgdGhlIFNlbGVjdCBNZW51LlxuICAgICAqL1xuICAgIHdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSBTZWxlY3QgTWVudS5cbiAgICAgKi9cbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcHRpb25zIHRvIHNob3cgaW4gdGhlIG1lbnUuXG4gICAgICogW3sgbGFiZWw6IFN0cmluZywgdmFsdWU6IFN0cmluZyB8IE51bWJlciB9XVxuICAgICAqL1xuICAgIG9wdGlvbnM6IFByb3BUeXBlcy5hcnJheU9mKE9wdGlvblNoYXBlUHJvcFR5cGUpLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgd2hlbiBhbiBvcHRpb24gaXMgc2VsZWN0ZWQuXG4gICAgICovXG4gICAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgd2hlbiBhbiBvcHRpb24gaXMgZGVzZWxlY3RlZC5cbiAgICAgKi9cbiAgICBvbkRlc2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBzZWxlY3RlZCB2YWx1ZS92YWx1ZXMuXG4gICAgICovXG4gICAgc2VsZWN0ZWQ6IFNlbGVjdGVkUHJvcFR5cGUsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIG11bHRpIHNlbGVjdCBpcyBhY2NvdW50ZWQgZm9yLlxuICAgICAqL1xuICAgIGlzTXVsdGlTZWxlY3Q6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCBzaG93IHRoZSB0aXRsZS5cbiAgICAgKi9cbiAgICBoYXNUaXRsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHNob3cgdGhlIGZpbHRlci5cbiAgICAgKi9cbiAgICBoYXNGaWx0ZXI6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHBsYWNlaG9sZGVyIG9mIHRoZSBzZWFyY2ggZmlsdGVyLlxuICAgICAqL1xuICAgIGZpbHRlclBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGljb24gb2YgdGhlIHNlYXJjaCBmaWx0ZXIuXG4gICAgICovXG4gICAgZmlsdGVySWNvbjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIGFzIHRoZSBvbkNoYW5nZSgpIGV2ZW50IGZvciB0aGUgZmlsdGVyLlxuICAgICAqL1xuICAgIG9uRmlsdGVyQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBwb3NpdGlvbiBvZiB0aGUgU2VsZWN0IE1lbnUuXG4gICAgICovXG4gICAgcG9zaXRpb246IFByb3BUeXBlcy5vbmVPZihbXG4gICAgICBQb3NpdGlvbi5UT1AsXG4gICAgICBQb3NpdGlvbi5UT1BfTEVGVCxcbiAgICAgIFBvc2l0aW9uLlRPUF9SSUdIVCxcbiAgICAgIFBvc2l0aW9uLkJPVFRPTSxcbiAgICAgIFBvc2l0aW9uLkJPVFRPTV9MRUZULFxuICAgICAgUG9zaXRpb24uQk9UVE9NX1JJR0hUXG4gICAgXSksXG5cbiAgICAvKipcbiAgICAgKiBDYW4gYmUgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBub2RlLCBvciBhIG5vZGUgaXRzZWxmLCB0aGF0IGlzXG4gICAgICogcmVuZGVyZWQgb24gdGhlIHJpZ2h0IHNpZGUgb2YgdGhlIFNlbGVjdCBNZW51IHRvIGdpdmUgYWRkaXRpb25hbFxuICAgICAqIGluZm9ybWF0aW9uIHdoZW4gYW4gb3B0aW9uIGlzIHNlbGVjdGVkLlxuICAgICAqL1xuICAgIGRldGFpbFZpZXc6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMubm9kZV0pLFxuXG4gICAgLyoqXG4gICAgICogQ2FuIGJlIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgbm9kZSwgb3IgYSBub2RlIGl0c2VsZiwgdGhhdCBpc1xuICAgICAqIHJlbmRlcmVkIGluIHRoZSBoZWFkZXIgc2VjdGlvbiBvZiB0aGUgU2VsZWN0IE1lbnUgdG8gY3VzdG9taXplXG4gICAgICogdGhlIGhlYWRlci5cbiAgICAgKi9cbiAgICB0aXRsZVZpZXc6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMubm9kZV0pLFxuXG4gICAgLyoqXG4gICAgICogQ2FuIGJlIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgbm9kZSwgb3IgYSBub2RlIGl0c2VsZiwgdGhhdCBpc1xuICAgICAqIHJlbmRlcmVkIGluc3RlYWQgb2YgdGhlIG9wdGlvbnMgbGlzdCB3aGVuIHRoZXJlIGFyZSBubyBvcHRpb25zLlxuICAgICAqL1xuICAgIGVtcHR5VmlldzogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5ub2RlXSksXG5cbiAgICAvKlxuICAgICAqIFdoZW4gdHJ1ZSwgbWVudSBjbG9zZXMgb24gb3B0aW9uIHNlbGVjdGlvbi5cbiAgICAgKi9cbiAgICBjbG9zZU9uU2VsZWN0OiBQcm9wVHlwZXMuYm9vbFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBvblNlbGVjdDogKCkgPT4ge30sXG4gICAgb25EZXNlbGVjdDogKCkgPT4ge30sXG4gICAgd2lkdGg6IDI0MCxcbiAgICBoZWlnaHQ6IDI0OCxcbiAgICBwb3NpdGlvbjogUG9zaXRpb24uQk9UVE9NX0xFRlQsXG4gICAgaXNNdWx0aVNlbGVjdDogZmFsc2UsXG4gICAgZmlsdGVyUGxhY2Vob2xkZXI6ICdGaWx0ZXIuLi4nLFxuICAgIGZpbHRlckljb246ICdzZWFyY2gnLFxuICAgIGNsb3NlT25TZWxlY3Q6IGZhbHNlXG4gIH1cblxuICBnZXREZXRhaWxWaWV3ID0gKGNsb3NlLCBkZXRhaWxWaWV3KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBkZXRhaWxWaWV3ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkZXRhaWxWaWV3OiBkZXRhaWxWaWV3KHsgY2xvc2UgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZGV0YWlsVmlldykge1xuICAgICAgcmV0dXJuIHsgZGV0YWlsVmlldyB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHt9XG4gIH1cblxuICBnZXRFbXB0eVZpZXcgPSAoY2xvc2UsIGVtcHR5VmlldykgPT4ge1xuICAgIGlmICh0eXBlb2YgZW1wdHlWaWV3ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlbXB0eVZpZXc6IGVtcHR5Vmlldyh7IGNsb3NlIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGVtcHR5Vmlldykge1xuICAgICAgcmV0dXJuIHsgZW1wdHlWaWV3IH1cbiAgICB9XG5cbiAgICByZXR1cm4ge31cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB0aXRsZSxcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0LFxuICAgICAgb3B0aW9ucyxcbiAgICAgIHNlbGVjdGVkLFxuICAgICAgcG9zaXRpb24sXG4gICAgICBoYXNUaXRsZSxcbiAgICAgIGhhc0ZpbHRlcixcbiAgICAgIGZpbHRlclBsYWNlaG9sZGVyLFxuICAgICAgZmlsdGVySWNvbixcbiAgICAgIGRldGFpbFZpZXcsXG4gICAgICBlbXB0eVZpZXcsXG4gICAgICB0aXRsZVZpZXcsXG4gICAgICBpc011bHRpU2VsZWN0LFxuICAgICAgY2xvc2VPblNlbGVjdCxcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8UG9wb3ZlclxuICAgICAgICBtaW5XaWR0aD17d2lkdGh9XG4gICAgICAgIHBvc2l0aW9uPXtwb3NpdGlvbn1cbiAgICAgICAgbWluSGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgIGNvbnRlbnQ9eyh7IGNsb3NlIH0pID0+IChcbiAgICAgICAgICA8U2VsZWN0TWVudUNvbnRlbnRcbiAgICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICAgIGhhc0ZpbHRlcj17aGFzRmlsdGVyfVxuICAgICAgICAgICAgZmlsdGVyUGxhY2Vob2xkZXI9e2ZpbHRlclBsYWNlaG9sZGVyfVxuICAgICAgICAgICAgZmlsdGVySWNvbj17ZmlsdGVySWNvbn1cbiAgICAgICAgICAgIGhhc1RpdGxlPXtoYXNUaXRsZX1cbiAgICAgICAgICAgIGlzTXVsdGlTZWxlY3Q9e2lzTXVsdGlTZWxlY3R9XG4gICAgICAgICAgICB0aXRsZVZpZXc9e3RpdGxlVmlld31cbiAgICAgICAgICAgIGxpc3RQcm9wcz17e1xuICAgICAgICAgICAgICBvblNlbGVjdDogaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdChpdGVtKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbkRlc2VsZWN0OiBpdGVtID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uRGVzZWxlY3QoaXRlbSlcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb25GaWx0ZXJDaGFuZ2U6IHRoaXMucHJvcHMub25GaWx0ZXJDaGFuZ2UsXG4gICAgICAgICAgICAgIHNlbGVjdGVkOiBhcnJpZnkoc2VsZWN0ZWQpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY2xvc2U9e2Nsb3NlfVxuICAgICAgICAgICAgey4uLnRoaXMuZ2V0RGV0YWlsVmlldyhjbG9zZSwgZGV0YWlsVmlldyl9XG4gICAgICAgICAgICB7Li4udGhpcy5nZXRFbXB0eVZpZXcoY2xvc2UsIGVtcHR5Vmlldyl9XG4gICAgICAgICAgICBjbG9zZU9uU2VsZWN0PXtjbG9zZU9uU2VsZWN0fVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgIC8+XG4gICAgKVxuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLGFBQWhCLFFBQXFDLE9BQXJDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsUUFBbkI7QUFDQSxTQUFTQyxPQUFULFFBQXdCLGVBQXhCO0FBQ0EsU0FBU0MsUUFBVCxRQUF5QixpQkFBekI7QUFDQSxPQUFPQyxpQkFBUCxNQUE4QixxQkFBOUI7QUFDQSxPQUFPQyxtQkFBUCxNQUFnQyx1QkFBaEM7QUFDQSxPQUFPQyxnQkFBUCxNQUE2QixvQkFBN0I7O0lBRXFCQyxVOzs7Ozs7Ozs7Ozs7Ozs7O29FQXNISCxVQUFDQyxLQUFELEVBQVFDLFVBQVIsRUFBdUI7TUFDckMsSUFBSSxPQUFPQSxVQUFQLEtBQXNCLFVBQTFCLEVBQXNDO1FBQ3BDLE9BQU87VUFDTEEsVUFBVSxFQUFFQSxV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