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

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _arrify = _interopRequireDefault(require("arrify"));

var _popover = require("../../popover");

var _constants = require("../../constants");

var _SelectMenuContent = _interopRequireDefault(require("./SelectMenuContent"));

var _OptionShapePropType = _interopRequireDefault(require("./OptionShapePropType"));

var _SelectedPropType = _interopRequireDefault(require("./SelectedPropType"));

var _excluded = ["title", "width", "height", "options", "selected", "position", "hasTitle", "hasFilter", "filterPlaceholder", "filterIcon", "detailView", "emptyView", "titleView", "isMultiSelect", "closeOnSelect"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var SelectMenu = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(SelectMenu, _PureComponent);

  var _super = _createSuper(SelectMenu);

  function SelectMenu() {
    var _this;

    (0, _classCallCheck2["default"])(this, SelectMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getDetailView", function (close, detailView) {
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
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getEmptyView", function (close, emptyView) {
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

  (0, _createClass2["default"])(SelectMenu, [{
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
          props = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      return /*#__PURE__*/_react["default"].createElement(_popover.Popover, (0, _extends2["default"])({
        minWidth: width,
        position: position,
        minHeight: height,
        content: function content(_ref) {
          var close = _ref.close;
          return /*#__PURE__*/_react["default"].createElement(_SelectMenuContent["default"], (0, _extends2["default"])({
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
              selected: (0, _arrify["default"])(selected)
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
}(_react.PureComponent);

exports["default"] = SelectMenu;
SelectMenu.displayName = "SelectMenu";
(0, _defineProperty2["default"])(SelectMenu, "propTypes", {
  /**
   * The title of the Select Menu.
   */
  title: _propTypes["default"].string,

  /**
   * The width of the Select Menu.
   */
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),

  /**
   * The height of the Select Menu.
   */
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),

  /**
   * The options to show in the menu.
   * [{ label: String, value: String | Number }]
   */
  options: _propTypes["default"].arrayOf(_OptionShapePropType["default"]),

  /**
   * Function that is called when an option is selected.
   */
  onSelect: _propTypes["default"].func,

  /**
   * Function that is called when an option is deselected.
   */
  onDeselect: _propTypes["default"].func,

  /**
   * The selected value/values.
   */
  selected: _SelectedPropType["default"],

  /**
   * When true, multi select is accounted for.
   */
  isMultiSelect: _propTypes["default"].bool,

  /**
   * When true, show the title.
   */
  hasTitle: _propTypes["default"].bool,

  /**
   * When true, show the filter.
   */
  hasFilter: _propTypes["default"].bool,

  /**
   * The placeholder of the search filter.
   */
  filterPlaceholder: _propTypes["default"].string,

  /**
   * The icon of the search filter.
   */
  filterIcon: _propTypes["default"].string,

  /**
   * Function that is called as the onChange() event for the filter.
   */
  onFilterChange: _propTypes["default"].func,

  /**
   * The position of the Select Menu.
   */
  position: _propTypes["default"].oneOf([_constants.Position.TOP, _constants.Position.TOP_LEFT, _constants.Position.TOP_RIGHT, _constants.Position.BOTTOM, _constants.Position.BOTTOM_LEFT, _constants.Position.BOTTOM_RIGHT]),

  /**
   * Can be a function that returns a node, or a node itself, that is
   * rendered on the right side of the Select Menu to give additional
   * information when an option is selected.
   */
  detailView: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].node]),

  /**
   * Can be a function that returns a node, or a node itself, that is
   * rendered in the header section of the Select Menu to customize
   * the header.
   */
  titleView: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].node]),

  /**
   * Can be a function that returns a node, or a node itself, that is
   * rendered instead of the options list when there are no options.
   */
  emptyView: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].node]),

  /*
   * When true, menu closes on option selection.
   */
  closeOnSelect: _propTypes["default"].bool
});
(0, _defineProperty2["default"])(SelectMenu, "defaultProps", {
  onSelect: function onSelect() {},
  onDeselect: function onDeselect() {},
  width: 240,
  height: 248,
  position: _constants.Position.BOTTOM_LEFT,
  isMultiSelect: false,
  filterPlaceholder: 'Filter...',
  filterIcon: 'search',
  closeOnSelect: false
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJTZWxlY3RNZW51IiwiY2xvc2UiLCJkZXRhaWxWaWV3IiwiZW1wdHlWaWV3IiwicHJvcHMiLCJ0aXRsZSIsIndpZHRoIiwiaGVpZ2h0Iiwib3B0aW9ucyIsInNlbGVjdGVkIiwicG9zaXRpb24iLCJoYXNUaXRsZSIsImhhc0ZpbHRlciIsImZpbHRlclBsYWNlaG9sZGVyIiwiZmlsdGVySWNvbiIsInRpdGxlVmlldyIsImlzTXVsdGlTZWxlY3QiLCJjbG9zZU9uU2VsZWN0Iiwib25TZWxlY3QiLCJpdGVtIiwib25EZXNlbGVjdCIsIm9uRmlsdGVyQ2hhbmdlIiwiYXJyaWZ5IiwiZ2V0RGV0YWlsVmlldyIsImdldEVtcHR5VmlldyIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJvbmVPZlR5cGUiLCJudW1iZXIiLCJhcnJheU9mIiwiT3B0aW9uU2hhcGVQcm9wVHlwZSIsImZ1bmMiLCJTZWxlY3RlZFByb3BUeXBlIiwiYm9vbCIsIm9uZU9mIiwiUG9zaXRpb24iLCJUT1AiLCJUT1BfTEVGVCIsIlRPUF9SSUdIVCIsIkJPVFRPTSIsIkJPVFRPTV9MRUZUIiwiQk9UVE9NX1JJR0hUIiwibm9kZSJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZWxlY3QtbWVudS9zcmMvU2VsZWN0TWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IGFycmlmeSBmcm9tICdhcnJpZnknXG5pbXBvcnQgeyBQb3BvdmVyIH0gZnJvbSAnLi4vLi4vcG9wb3ZlcidcbmltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJ1xuaW1wb3J0IFNlbGVjdE1lbnVDb250ZW50IGZyb20gJy4vU2VsZWN0TWVudUNvbnRlbnQnXG5pbXBvcnQgT3B0aW9uU2hhcGVQcm9wVHlwZSBmcm9tICcuL09wdGlvblNoYXBlUHJvcFR5cGUnXG5pbXBvcnQgU2VsZWN0ZWRQcm9wVHlwZSBmcm9tICcuL1NlbGVjdGVkUHJvcFR5cGUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdE1lbnUgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBUaGUgdGl0bGUgb2YgdGhlIFNlbGVjdCBNZW51LlxuICAgICAqL1xuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHdpZHRoIG9mIHRoZSBTZWxlY3QgTWVudS5cbiAgICAgKi9cbiAgICB3aWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGhlaWdodCBvZiB0aGUgU2VsZWN0IE1lbnUuXG4gICAgICovXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3B0aW9ucyB0byBzaG93IGluIHRoZSBtZW51LlxuICAgICAqIFt7IGxhYmVsOiBTdHJpbmcsIHZhbHVlOiBTdHJpbmcgfCBOdW1iZXIgfV1cbiAgICAgKi9cbiAgICBvcHRpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihPcHRpb25TaGFwZVByb3BUeXBlKSxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIHdoZW4gYW4gb3B0aW9uIGlzIHNlbGVjdGVkLlxuICAgICAqL1xuICAgIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRoYXQgaXMgY2FsbGVkIHdoZW4gYW4gb3B0aW9uIGlzIGRlc2VsZWN0ZWQuXG4gICAgICovXG4gICAgb25EZXNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2VsZWN0ZWQgdmFsdWUvdmFsdWVzLlxuICAgICAqL1xuICAgIHNlbGVjdGVkOiBTZWxlY3RlZFByb3BUeXBlLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCBtdWx0aSBzZWxlY3QgaXMgYWNjb3VudGVkIGZvci5cbiAgICAgKi9cbiAgICBpc011bHRpU2VsZWN0OiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgc2hvdyB0aGUgdGl0bGUuXG4gICAgICovXG4gICAgaGFzVGl0bGU6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCBzaG93IHRoZSBmaWx0ZXIuXG4gICAgICovXG4gICAgaGFzRmlsdGVyOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBwbGFjZWhvbGRlciBvZiB0aGUgc2VhcmNoIGZpbHRlci5cbiAgICAgKi9cbiAgICBmaWx0ZXJQbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBpY29uIG9mIHRoZSBzZWFyY2ggZmlsdGVyLlxuICAgICAqL1xuICAgIGZpbHRlckljb246IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IGlzIGNhbGxlZCBhcyB0aGUgb25DaGFuZ2UoKSBldmVudCBmb3IgdGhlIGZpbHRlci5cbiAgICAgKi9cbiAgICBvbkZpbHRlckNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgcG9zaXRpb24gb2YgdGhlIFNlbGVjdCBNZW51LlxuICAgICAqL1xuICAgIHBvc2l0aW9uOiBQcm9wVHlwZXMub25lT2YoW1xuICAgICAgUG9zaXRpb24uVE9QLFxuICAgICAgUG9zaXRpb24uVE9QX0xFRlQsXG4gICAgICBQb3NpdGlvbi5UT1BfUklHSFQsXG4gICAgICBQb3NpdGlvbi5CT1RUT00sXG4gICAgICBQb3NpdGlvbi5CT1RUT01fTEVGVCxcbiAgICAgIFBvc2l0aW9uLkJPVFRPTV9SSUdIVFxuICAgIF0pLFxuXG4gICAgLyoqXG4gICAgICogQ2FuIGJlIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgbm9kZSwgb3IgYSBub2RlIGl0c2VsZiwgdGhhdCBpc1xuICAgICAqIHJlbmRlcmVkIG9uIHRoZSByaWdodCBzaWRlIG9mIHRoZSBTZWxlY3QgTWVudSB0byBnaXZlIGFkZGl0aW9uYWxcbiAgICAgKiBpbmZvcm1hdGlvbiB3aGVuIGFuIG9wdGlvbiBpcyBzZWxlY3RlZC5cbiAgICAgKi9cbiAgICBkZXRhaWxWaWV3OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLm5vZGVdKSxcblxuICAgIC8qKlxuICAgICAqIENhbiBiZSBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIG5vZGUsIG9yIGEgbm9kZSBpdHNlbGYsIHRoYXQgaXNcbiAgICAgKiByZW5kZXJlZCBpbiB0aGUgaGVhZGVyIHNlY3Rpb24gb2YgdGhlIFNlbGVjdCBNZW51IHRvIGN1c3RvbWl6ZVxuICAgICAqIHRoZSBoZWFkZXIuXG4gICAgICovXG4gICAgdGl0bGVWaWV3OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLm5vZGVdKSxcblxuICAgIC8qKlxuICAgICAqIENhbiBiZSBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIG5vZGUsIG9yIGEgbm9kZSBpdHNlbGYsIHRoYXQgaXNcbiAgICAgKiByZW5kZXJlZCBpbnN0ZWFkIG9mIHRoZSBvcHRpb25zIGxpc3Qgd2hlbiB0aGVyZSBhcmUgbm8gb3B0aW9ucy5cbiAgICAgKi9cbiAgICBlbXB0eVZpZXc6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMubm9kZV0pLFxuXG4gICAgLypcbiAgICAgKiBXaGVuIHRydWUsIG1lbnUgY2xvc2VzIG9uIG9wdGlvbiBzZWxlY3Rpb24uXG4gICAgICovXG4gICAgY2xvc2VPblNlbGVjdDogUHJvcFR5cGVzLmJvb2xcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgb25TZWxlY3Q6ICgpID0+IHt9LFxuICAgIG9uRGVzZWxlY3Q6ICgpID0+IHt9LFxuICAgIHdpZHRoOiAyNDAsXG4gICAgaGVpZ2h0OiAyNDgsXG4gICAgcG9zaXRpb246IFBvc2l0aW9uLkJPVFRPTV9MRUZULFxuICAgIGlzTXVsdGlTZWxlY3Q6IGZhbHNlLFxuICAgIGZpbHRlclBsYWNlaG9sZGVyOiAnRmlsdGVyLi4uJyxcbiAgICBmaWx0ZXJJY29uOiAnc2VhcmNoJyxcbiAgICBjbG9zZU9uU2VsZWN0OiBmYWxzZVxuICB9XG5cbiAgZ2V0RGV0YWlsVmlldyA9IChjbG9zZSwgZGV0YWlsVmlldykgPT4ge1xuICAgIGlmICh0eXBlb2YgZGV0YWlsVmlldyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGV0YWlsVmlldzogZGV0YWlsVmlldyh7IGNsb3NlIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRldGFpbFZpZXcpIHtcbiAgICAgIHJldHVybiB7IGRldGFpbFZpZXcgfVxuICAgIH1cblxuICAgIHJldHVybiB7fVxuICB9XG5cbiAgZ2V0RW1wdHlWaWV3ID0gKGNsb3NlLCBlbXB0eVZpZXcpID0+IHtcbiAgICBpZiAodHlwZW9mIGVtcHR5VmlldyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZW1wdHlWaWV3OiBlbXB0eVZpZXcoeyBjbG9zZSB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChlbXB0eVZpZXcpIHtcbiAgICAgIHJldHVybiB7IGVtcHR5VmlldyB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHt9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdGl0bGUsXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICAgIG9wdGlvbnMsXG4gICAgICBzZWxlY3RlZCxcbiAgICAgIHBvc2l0aW9uLFxuICAgICAgaGFzVGl0bGUsXG4gICAgICBoYXNGaWx0ZXIsXG4gICAgICBmaWx0ZXJQbGFjZWhvbGRlcixcbiAgICAgIGZpbHRlckljb24sXG4gICAgICBkZXRhaWxWaWV3LFxuICAgICAgZW1wdHlWaWV3LFxuICAgICAgdGl0bGVWaWV3LFxuICAgICAgaXNNdWx0aVNlbGVjdCxcbiAgICAgIGNsb3NlT25TZWxlY3QsXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBvcG92ZXJcbiAgICAgICAgbWluV2lkdGg9e3dpZHRofVxuICAgICAgICBwb3NpdGlvbj17cG9zaXRpb259XG4gICAgICAgIG1pbkhlaWdodD17aGVpZ2h0fVxuICAgICAgICBjb250ZW50PXsoeyBjbG9zZSB9KSA9PiAoXG4gICAgICAgICAgPFNlbGVjdE1lbnVDb250ZW50XG4gICAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgICBoYXNGaWx0ZXI9e2hhc0ZpbHRlcn1cbiAgICAgICAgICAgIGZpbHRlclBsYWNlaG9sZGVyPXtmaWx0ZXJQbGFjZWhvbGRlcn1cbiAgICAgICAgICAgIGZpbHRlckljb249e2ZpbHRlckljb259XG4gICAgICAgICAgICBoYXNUaXRsZT17aGFzVGl0bGV9XG4gICAgICAgICAgICBpc011bHRpU2VsZWN0PXtpc011bHRpU2VsZWN0fVxuICAgICAgICAgICAgdGl0bGVWaWV3PXt0aXRsZVZpZXd9XG4gICAgICAgICAgICBsaXN0UHJvcHM9e3tcbiAgICAgICAgICAgICAgb25TZWxlY3Q6IGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25TZWxlY3QoaXRlbSlcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb25EZXNlbGVjdDogaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkRlc2VsZWN0KGl0ZW0pXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG9uRmlsdGVyQ2hhbmdlOiB0aGlzLnByb3BzLm9uRmlsdGVyQ2hhbmdlLFxuICAgICAgICAgICAgICBzZWxlY3RlZDogYXJyaWZ5KHNlbGVjdGVkKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsb3NlPXtjbG9zZX1cbiAgICAgICAgICAgIHsuLi50aGlzLmdldERldGFpbFZpZXcoY2xvc2UsIGRldGFpbFZpZXcpfVxuICAgICAgICAgICAgey4uLnRoaXMuZ2V0RW1wdHlWaWV3KGNsb3NlLCBlbXB0eVZpZXcpfVxuICAgICAgICAgICAgY2xvc2VPblNlbGVjdD17Y2xvc2VPblNlbGVjdH1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFU7Ozs7Ozs7Ozs7Ozs7OztzR0FzSEgsVUFBQ0MsS0FBRCxFQUFRQyxVQUFSLEVBQXVCO01BQ3JDLElBQUksT0FBT0EsVUFBUCxLQUFzQixVQUExQixFQUFzQztRQUNwQyxPQUFPO1VBQ0xBLFVBQVUsRUFBRUEsVUFBVSxDQUFDO1lBQUVELEtBQUssRUFBTEE7VUFBRixDQUFEO1FBRGpCLENBQVA7TUFHRDs7TUFFRCxJQUFJQyxVQUFKLEVBQWdCO1FBQ2QsT0FBTztVQUFFQSxVQUFVLEVBQVZBO1FBQUYsQ0FBUDtNQUNEOztNQUVELE9BQU8sRUFBUDtJQUNELEM7cUdBRWMsVUFBQ0QsS0FBRCxFQUFRRSxTQUFSLEVBQXNCO01BQ25DLElBQUksT0FBT0EsU0FBUCxLQUFxQixVQUF6QixFQUFx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