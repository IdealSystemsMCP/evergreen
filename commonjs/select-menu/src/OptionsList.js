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

var _fuzzaldrinPlus = _interopRequireDefault(require("fuzzaldrin-plus"));

var _reactTinyVirtualList = _interopRequireDefault(require("react-tiny-virtual-list"));

var _layers = require("../../layers");

var _table = require("../../table");

var _OptionShapePropType = _interopRequireDefault(require("./OptionShapePropType"));

var _Option = _interopRequireDefault(require("./Option"));

var _excluded = ["options", "close", "closeOnSelect", "width", "height", "onSelect", "onDeselect", "onFilterChange", "selected", "hasFilter", "filterPlaceholder", "filterIcon", "optionSize", "renderItem", "optionsFilter", "isMultiSelect", "defaultSearchValue"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Fuzzaldrin-plus is the default filter, but you can use your own
 * as long as they follow the following signature:
 * @param options <Array[String]> - ['label', 'label2', ...]
 * @param input <String>
 */
var fuzzyFilter = function fuzzyFilter(options, input, _ref) {
  var key = _ref.key;
  return _fuzzaldrinPlus["default"].filter(options, input, {
    key: key
  });
};
/**
 * This is the default item renderer of options
 * you can pass custom renderers as long as they work the same as the Option
 */


var itemRenderer = function itemRenderer(props) {
  return /*#__PURE__*/_react["default"].createElement(_Option["default"], props);
};

itemRenderer.displayName = "itemRenderer";

var OptionsList = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(OptionsList, _PureComponent);

  var _super = _createSuper(OptionsList);

  function OptionsList(props, context) {
    var _this;

    (0, _classCallCheck2["default"])(this, OptionsList);
    _this = _super.call(this, props, context);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "isSelected", function (item) {
      var selected = _this.state.selected;
      return Boolean(selected.find(function (selectedItem) {
        return selectedItem === item.value;
      }));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "search", function (options) {
      var optionsFilter = _this.props.optionsFilter;
      var searchValue = _this.state.searchValue;

      if (searchValue.trim() === '') {
        return options;
      } // Preserve backwards compatibility with allowing custom filters, which accept array of strings


      if (typeof optionsFilter === 'function') {
        return optionsFilter(options.map(function (item) {
          return item.label;
        }), searchValue).map(function (name) {
          return options.find(function (item) {
            return item.label === name;
          });
        });
      }

      return fuzzyFilter(options, searchValue, {
        key: 'label'
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getCurrentIndex", function () {
      var selected = _this.props.selected;

      var options = _this.getFilteredOptions();

      return options.findIndex(function (option) {
        return option.value === selected[selected.length - 1];
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleKeyDown", function (e) {
      if (e.key === 'ArrowUp') {
        _this.handleArrowUp();
      }

      if (e.key === 'ArrowDown') {
        _this.handleArrowDown();
      }

      if (e.key === 'Enter') {
        _this.handleEnter();
      }

      if (e.key === 'Escape') {
        _this.props.close();
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleArrowUp", function () {
      var onSelect = _this.props.onSelect;

      var options = _this.getFilteredOptions();

      var nextIndex = _this.getCurrentIndex() - 1;

      if (nextIndex < 0) {
        nextIndex = options.length - 1;
      }

      if (_this.isSelected(options[nextIndex])) {
        return;
      }

      onSelect(options[nextIndex]);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleArrowDown", function () {
      var onSelect = _this.props.onSelect;

      var options = _this.getFilteredOptions();

      var nextIndex = _this.getCurrentIndex() + 1;

      if (nextIndex === options.length) {
        nextIndex = 0;
      }

      if (!_this.isSelected(options[nextIndex])) {
        onSelect(options[nextIndex]);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleEnter", function () {
      var isSelected = _this.getCurrentIndex() !== -1;

      if (isSelected) {
        if (!_this.props.isMultiSelect && _this.props.closeOnSelect) {
          _this.props.close();
        }
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleChange", function (searchValue) {
      _this.setState({
        searchValue: searchValue
      });

      _this.props.onFilterChange(searchValue);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleSelect", function (item) {
      if (_this.isSelected(item)) {
        _this.props.onDeselect(item);
      } else {
        _this.props.onSelect(item);
      }

      if (!_this.props.isMultiSelect && _this.props.closeOnSelect) {
        _this.props.close();
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleDeselect", function (item) {
      _this.props.onDeselect(item);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "assignSearchRef", function (ref) {
      _this.searchRef = ref;
    });
    _this.state = {
      searchValue: props.defaultSearchValue,
      selected: props.selected
    };
    return _this;
  }

  (0, _createClass2["default"])(OptionsList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var hasFilter = this.props.hasFilter;
      if (!hasFilter) return;
      /**
       * Hacky solution for broken autoFocus
       * https://github.com/segmentio/evergreen/issues/90
       */

      this.requestId = requestAnimationFrame(function () {
        _this2.searchRef.querySelector('input').focus();
      });
      window.addEventListener('keydown', this.handleKeyDown);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      cancelAnimationFrame(this.requestId);
      window.removeEventListener('keydown', this.handleKeyDown);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.selected !== this.props.selected) {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({
          selected: this.props.selected
        });
      }
    }
  }, {
    key: "getFilteredOptions",
    value: function getFilteredOptions() {
      var options = this.props.options;
      return this.search(options);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          originalOptions = _this$props.options,
          close = _this$props.close,
          closeOnSelect = _this$props.closeOnSelect,
          width = _this$props.width,
          height = _this$props.height,
          onSelect = _this$props.onSelect,
          onDeselect = _this$props.onDeselect,
          onFilterChange = _this$props.onFilterChange,
          selected = _this$props.selected,
          hasFilter = _this$props.hasFilter,
          filterPlaceholder = _this$props.filterPlaceholder,
          filterIcon = _this$props.filterIcon,
          optionSize = _this$props.optionSize,
          _renderItem = _this$props.renderItem,
          optionsFilter = _this$props.optionsFilter,
          isMultiSelect = _this$props.isMultiSelect,
          defaultSearchValue = _this$props.defaultSearchValue,
          props = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      var options = this.search(originalOptions);
      var listHeight = height - (hasFilter ? 32 : 0);
      var currentIndex = this.getCurrentIndex();
      var scrollToIndex = currentIndex === -1 ? 0 : currentIndex;
      return /*#__PURE__*/_react["default"].createElement(_layers.Pane, (0, _extends2["default"])({
        height: height,
        width: width,
        display: "flex",
        flexDirection: "column"
      }, props), hasFilter && /*#__PURE__*/_react["default"].createElement(_table.TableHead, null, /*#__PURE__*/_react["default"].createElement(_table.SearchTableHeaderCell, {
        onChange: this.handleChange,
        innerRef: this.assignSearchRef,
        borderRight: null,
        height: 32,
        placeholder: filterPlaceholder,
        icon: filterIcon
      })), /*#__PURE__*/_react["default"].createElement(_layers.Pane, {
        flex: 1
      }, /*#__PURE__*/_react["default"].createElement(_reactTinyVirtualList["default"], {
        height: listHeight,
        width: "100%",
        itemSize: optionSize,
        itemCount: options.length,
        overscanCount: 20,
        scrollToAlignment: "auto",
        scrollToIndex: scrollToIndex || undefined,
        renderItem: function renderItem(_ref2) {
          var index = _ref2.index,
              style = _ref2.style;
          var item = options[index];

          var isSelected = _this3.isSelected(item);

          return _renderItem({
            key: item.value,
            label: item.label,
            icon: item.icon,
            style: style,
            height: optionSize,
            onSelect: function onSelect() {
              return _this3.handleSelect(item);
            },
            onDeselect: function onDeselect() {
              return _this3.handleDeselect(item);
            },
            isSelectable: !isSelected || isMultiSelect,
            isSelected: isSelected,
            disabled: item.disabled,
            tabIndex: 0
          });
        }
      })));
    }
  }]);
  return OptionsList;
}(_react.PureComponent);

exports["default"] = OptionsList;
OptionsList.displayName = "OptionsList";
(0, _defineProperty2["default"])(OptionsList, "propTypes", {
  options: _propTypes["default"].arrayOf(_OptionShapePropType["default"]),
  close: _propTypes["default"].func,
  height: _propTypes["default"].number,
  width: _propTypes["default"].number,

  /**
   * When true, multi select is accounted for.
   */
  isMultiSelect: _propTypes["default"].bool,

  /**
   * When true, menu closes on option selection.
   */
  closeOnSelect: _propTypes["default"].bool,

  /**
   * This holds the values of the options
   */
  selected: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])),
  onSelect: _propTypes["default"].func,
  onDeselect: _propTypes["default"].func,
  onFilterChange: _propTypes["default"].func,
  hasFilter: _propTypes["default"].bool,
  optionSize: _propTypes["default"].number,
  renderItem: _propTypes["default"].func,
  filterPlaceholder: _propTypes["default"].string,
  filterIcon: _propTypes["default"].string,
  optionsFilter: _propTypes["default"].func,
  defaultSearchValue: _propTypes["default"].string
});
(0, _defineProperty2["default"])(OptionsList, "defaultProps", {
  options: [],

  /**
   * Including border bottom
   * For some reason passing height to TableRow doesn't work
   * TODO: fix hacky solution
   */
  optionSize: 33,
  onSelect: function onSelect() {},
  onDeselect: function onDeselect() {},
  onFilterChange: function onFilterChange() {},
  selected: [],
  renderItem: itemRenderer,
  filterPlaceholder: 'Filter...',
  filterIcon: 'search',
  defaultSearchValue: ''
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJmdXp6eUZpbHRlciIsIm9wdGlvbnMiLCJpbnB1dCIsImtleSIsImZ1enphbGRyaW4iLCJmaWx0ZXIiLCJpdGVtUmVuZGVyZXIiLCJwcm9wcyIsIk9wdGlvbnNMaXN0IiwiY29udGV4dCIsIml0ZW0iLCJzZWxlY3RlZCIsInN0YXRlIiwiQm9vbGVhbiIsImZpbmQiLCJzZWxlY3RlZEl0ZW0iLCJ2YWx1ZSIsIm9wdGlvbnNGaWx0ZXIiLCJzZWFyY2hWYWx1ZSIsInRyaW0iLCJtYXAiLCJsYWJlbCIsIm5hbWUiLCJnZXRGaWx0ZXJlZE9wdGlvbnMiLCJmaW5kSW5kZXgiLCJvcHRpb24iLCJsZW5ndGgiLCJlIiwiaGFuZGxlQXJyb3dVcCIsImhhbmRsZUFycm93RG93biIsImhhbmRsZUVudGVyIiwiY2xvc2UiLCJvblNlbGVjdCIsIm5leHRJbmRleCIsImdldEN1cnJlbnRJbmRleCIsImlzU2VsZWN0ZWQiLCJpc011bHRpU2VsZWN0IiwiY2xvc2VPblNlbGVjdCIsInNldFN0YXRlIiwib25GaWx0ZXJDaGFuZ2UiLCJvbkRlc2VsZWN0IiwicmVmIiwic2VhcmNoUmVmIiwiZGVmYXVsdFNlYXJjaFZhbHVlIiwiaGFzRmlsdGVyIiwicmVxdWVzdElkIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicXVlcnlTZWxlY3RvciIsImZvY3VzIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUtleURvd24iLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJwcmV2UHJvcHMiLCJzZWFyY2giLCJvcmlnaW5hbE9wdGlvbnMiLCJ3aWR0aCIsImhlaWdodCIsImZpbHRlclBsYWNlaG9sZGVyIiwiZmlsdGVySWNvbiIsIm9wdGlvblNpemUiLCJyZW5kZXJJdGVtIiwibGlzdEhlaWdodCIsImN1cnJlbnRJbmRleCIsInNjcm9sbFRvSW5kZXgiLCJoYW5kbGVDaGFuZ2UiLCJhc3NpZ25TZWFyY2hSZWYiLCJ1bmRlZmluZWQiLCJpbmRleCIsInN0eWxlIiwiaWNvbiIsImhhbmRsZVNlbGVjdCIsImhhbmRsZURlc2VsZWN0IiwiaXNTZWxlY3RhYmxlIiwiZGlzYWJsZWQiLCJ0YWJJbmRleCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwiT3B0aW9uU2hhcGVQcm9wVHlwZSIsImZ1bmMiLCJudW1iZXIiLCJib29sIiwib25lT2ZUeXBlIiwic3RyaW5nIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3NlbGVjdC1tZW51L3NyYy9PcHRpb25zTGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IGZ1enphbGRyaW4gZnJvbSAnZnV6emFsZHJpbi1wbHVzJ1xuaW1wb3J0IFZpcnR1YWxMaXN0IGZyb20gJ3JlYWN0LXRpbnktdmlydHVhbC1saXN0J1xuaW1wb3J0IHsgUGFuZSB9IGZyb20gJy4uLy4uL2xheWVycydcbmltcG9ydCB7IFRhYmxlSGVhZCwgU2VhcmNoVGFibGVIZWFkZXJDZWxsIH0gZnJvbSAnLi4vLi4vdGFibGUnXG5pbXBvcnQgT3B0aW9uU2hhcGVQcm9wVHlwZSBmcm9tICcuL09wdGlvblNoYXBlUHJvcFR5cGUnXG5pbXBvcnQgT3B0aW9uIGZyb20gJy4vT3B0aW9uJ1xuXG4vKipcbiAqIEZ1enphbGRyaW4tcGx1cyBpcyB0aGUgZGVmYXVsdCBmaWx0ZXIsIGJ1dCB5b3UgY2FuIHVzZSB5b3VyIG93blxuICogYXMgbG9uZyBhcyB0aGV5IGZvbGxvdyB0aGUgZm9sbG93aW5nIHNpZ25hdHVyZTpcbiAqIEBwYXJhbSBvcHRpb25zIDxBcnJheVtTdHJpbmddPiAtIFsnbGFiZWwnLCAnbGFiZWwyJywgLi4uXVxuICogQHBhcmFtIGlucHV0IDxTdHJpbmc+XG4gKi9cbmNvbnN0IGZ1enp5RmlsdGVyID0gKG9wdGlvbnMsIGlucHV0LCB7IGtleSB9KSA9PiB7XG4gIHJldHVybiBmdXp6YWxkcmluLmZpbHRlcihvcHRpb25zLCBpbnB1dCwgeyBrZXkgfSlcbn1cblxuLyoqXG4gKiBUaGlzIGlzIHRoZSBkZWZhdWx0IGl0ZW0gcmVuZGVyZXIgb2Ygb3B0aW9uc1xuICogeW91IGNhbiBwYXNzIGN1c3RvbSByZW5kZXJlcnMgYXMgbG9uZyBhcyB0aGV5IHdvcmsgdGhlIHNhbWUgYXMgdGhlIE9wdGlvblxuICovXG5jb25zdCBpdGVtUmVuZGVyZXIgPSBwcm9wcyA9PiA8T3B0aW9uIHsuLi5wcm9wc30gLz5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3B0aW9uc0xpc3QgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBvcHRpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihPcHRpb25TaGFwZVByb3BUeXBlKSxcbiAgICBjbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCBtdWx0aSBzZWxlY3QgaXMgYWNjb3VudGVkIGZvci5cbiAgICAgKi9cbiAgICBpc011bHRpU2VsZWN0OiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgbWVudSBjbG9zZXMgb24gb3B0aW9uIHNlbGVjdGlvbi5cbiAgICAgKi9cbiAgICBjbG9zZU9uU2VsZWN0OiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFRoaXMgaG9sZHMgdGhlIHZhbHVlcyBvZiB0aGUgb3B0aW9uc1xuICAgICAqL1xuICAgIHNlbGVjdGVkOiBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICAgIFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxuICAgICksXG4gICAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uRGVzZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uRmlsdGVyQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBoYXNGaWx0ZXI6IFByb3BUeXBlcy5ib29sLFxuICAgIG9wdGlvblNpemU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgcmVuZGVySXRlbTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZmlsdGVyUGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZmlsdGVySWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvcHRpb25zRmlsdGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBkZWZhdWx0U2VhcmNoVmFsdWU6IFByb3BUeXBlcy5zdHJpbmdcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgb3B0aW9uczogW10sXG4gICAgLyoqXG4gICAgICogSW5jbHVkaW5nIGJvcmRlciBib3R0b21cbiAgICAgKiBGb3Igc29tZSByZWFzb24gcGFzc2luZyBoZWlnaHQgdG8gVGFibGVSb3cgZG9lc24ndCB3b3JrXG4gICAgICogVE9ETzogZml4IGhhY2t5IHNvbHV0aW9uXG4gICAgICovXG4gICAgb3B0aW9uU2l6ZTogMzMsXG4gICAgb25TZWxlY3Q6ICgpID0+IHt9LFxuICAgIG9uRGVzZWxlY3Q6ICgpID0+IHt9LFxuICAgIG9uRmlsdGVyQ2hhbmdlOiAoKSA9PiB7fSxcbiAgICBzZWxlY3RlZDogW10sXG4gICAgcmVuZGVySXRlbTogaXRlbVJlbmRlcmVyLFxuICAgIGZpbHRlclBsYWNlaG9sZGVyOiAnRmlsdGVyLi4uJyxcbiAgICBmaWx0ZXJJY29uOiAnc2VhcmNoJyxcbiAgICBkZWZhdWx0U2VhcmNoVmFsdWU6ICcnXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCkge1xuICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlYXJjaFZhbHVlOiBwcm9wcy5kZWZhdWx0U2VhcmNoVmFsdWUsXG4gICAgICBzZWxlY3RlZDogcHJvcHMuc2VsZWN0ZWRcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGhhc0ZpbHRlciB9ID0gdGhpcy5wcm9wc1xuICAgIGlmICghaGFzRmlsdGVyKSByZXR1cm5cbiAgICAvKipcbiAgICAgKiBIYWNreSBzb2x1dGlvbiBmb3IgYnJva2VuIGF1dG9Gb2N1c1xuICAgICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9zZWdtZW50aW8vZXZlcmdyZWVuL2lzc3Vlcy85MFxuICAgICAqL1xuICAgIHRoaXMucmVxdWVzdElkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIHRoaXMuc2VhcmNoUmVmLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykuZm9jdXMoKVxuICAgIH0pXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5RG93bilcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMucmVxdWVzdElkKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlEb3duKVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGlmIChwcmV2UHJvcHMuc2VsZWN0ZWQgIT09IHRoaXMucHJvcHMuc2VsZWN0ZWQpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1kaWQtdXBkYXRlLXNldC1zdGF0ZVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNlbGVjdGVkOiB0aGlzLnByb3BzLnNlbGVjdGVkXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGlzU2VsZWN0ZWQgPSBpdGVtID0+IHtcbiAgICBjb25zdCB7IHNlbGVjdGVkIH0gPSB0aGlzLnN0YXRlXG5cbiAgICByZXR1cm4gQm9vbGVhbihzZWxlY3RlZC5maW5kKHNlbGVjdGVkSXRlbSA9PiBzZWxlY3RlZEl0ZW0gPT09IGl0ZW0udmFsdWUpKVxuICB9XG5cbiAgc2VhcmNoID0gb3B0aW9ucyA9PiB7XG4gICAgY29uc3QgeyBvcHRpb25zRmlsdGVyIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBzZWFyY2hWYWx1ZSB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgaWYgKHNlYXJjaFZhbHVlLnRyaW0oKSA9PT0gJycpIHtcbiAgICAgIHJldHVybiBvcHRpb25zXG4gICAgfVxuXG4gICAgLy8gUHJlc2VydmUgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgd2l0aCBhbGxvd2luZyBjdXN0b20gZmlsdGVycywgd2hpY2ggYWNjZXB0IGFycmF5IG9mIHN0cmluZ3NcbiAgICBpZiAodHlwZW9mIG9wdGlvbnNGaWx0ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBvcHRpb25zRmlsdGVyKFxuICAgICAgICBvcHRpb25zLm1hcChpdGVtID0+IGl0ZW0ubGFiZWwpLFxuICAgICAgICBzZWFyY2hWYWx1ZVxuICAgICAgKS5tYXAobmFtZSA9PiBvcHRpb25zLmZpbmQoaXRlbSA9PiBpdGVtLmxhYmVsID09PSBuYW1lKSlcbiAgICB9XG5cbiAgICByZXR1cm4gZnV6enlGaWx0ZXIob3B0aW9ucywgc2VhcmNoVmFsdWUsIHsga2V5OiAnbGFiZWwnIH0pXG4gIH1cblxuICBnZXRDdXJyZW50SW5kZXggPSAoKSA9PiB7XG4gICAgY29uc3QgeyBzZWxlY3RlZCB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmdldEZpbHRlcmVkT3B0aW9ucygpXG5cbiAgICByZXR1cm4gb3B0aW9ucy5maW5kSW5kZXgoXG4gICAgICBvcHRpb24gPT4gb3B0aW9uLnZhbHVlID09PSBzZWxlY3RlZFtzZWxlY3RlZC5sZW5ndGggLSAxXVxuICAgIClcbiAgfVxuXG4gIGdldEZpbHRlcmVkT3B0aW9ucygpIHtcbiAgICBjb25zdCB7IG9wdGlvbnMgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiB0aGlzLnNlYXJjaChvcHRpb25zKVxuICB9XG5cbiAgaGFuZGxlS2V5RG93biA9IGUgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gJ0Fycm93VXAnKSB7XG4gICAgICB0aGlzLmhhbmRsZUFycm93VXAoKVxuICAgIH1cblxuICAgIGlmIChlLmtleSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgIHRoaXMuaGFuZGxlQXJyb3dEb3duKClcbiAgICB9XG5cbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIHRoaXMuaGFuZGxlRW50ZXIoKVxuICAgIH1cblxuICAgIGlmIChlLmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgIHRoaXMucHJvcHMuY2xvc2UoKVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUFycm93VXAgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBvblNlbGVjdCB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmdldEZpbHRlcmVkT3B0aW9ucygpXG5cbiAgICBsZXQgbmV4dEluZGV4ID0gdGhpcy5nZXRDdXJyZW50SW5kZXgoKSAtIDFcblxuICAgIGlmIChuZXh0SW5kZXggPCAwKSB7XG4gICAgICBuZXh0SW5kZXggPSBvcHRpb25zLmxlbmd0aCAtIDFcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc1NlbGVjdGVkKG9wdGlvbnNbbmV4dEluZGV4XSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIG9uU2VsZWN0KG9wdGlvbnNbbmV4dEluZGV4XSlcbiAgfVxuXG4gIGhhbmRsZUFycm93RG93biA9ICgpID0+IHtcbiAgICBjb25zdCB7IG9uU2VsZWN0IH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuZ2V0RmlsdGVyZWRPcHRpb25zKClcblxuICAgIGxldCBuZXh0SW5kZXggPSB0aGlzLmdldEN1cnJlbnRJbmRleCgpICsgMVxuXG4gICAgaWYgKG5leHRJbmRleCA9PT0gb3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgIG5leHRJbmRleCA9IDBcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaXNTZWxlY3RlZChvcHRpb25zW25leHRJbmRleF0pKSB7XG4gICAgICBvblNlbGVjdChvcHRpb25zW25leHRJbmRleF0pXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRW50ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgaXNTZWxlY3RlZCA9IHRoaXMuZ2V0Q3VycmVudEluZGV4KCkgIT09IC0xXG5cbiAgICBpZiAoaXNTZWxlY3RlZCkge1xuICAgICAgaWYgKCF0aGlzLnByb3BzLmlzTXVsdGlTZWxlY3QgJiYgdGhpcy5wcm9wcy5jbG9zZU9uU2VsZWN0KSB7XG4gICAgICAgIHRoaXMucHJvcHMuY2xvc2UoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IHNlYXJjaFZhbHVlID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNlYXJjaFZhbHVlXG4gICAgfSlcbiAgICB0aGlzLnByb3BzLm9uRmlsdGVyQ2hhbmdlKHNlYXJjaFZhbHVlKVxuICB9XG5cbiAgaGFuZGxlU2VsZWN0ID0gaXRlbSA9PiB7XG4gICAgaWYgKHRoaXMuaXNTZWxlY3RlZChpdGVtKSkge1xuICAgICAgdGhpcy5wcm9wcy5vbkRlc2VsZWN0KGl0ZW0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvcHMub25TZWxlY3QoaXRlbSlcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMucHJvcHMuaXNNdWx0aVNlbGVjdCAmJiB0aGlzLnByb3BzLmNsb3NlT25TZWxlY3QpIHtcbiAgICAgIHRoaXMucHJvcHMuY2xvc2UoKVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZURlc2VsZWN0ID0gaXRlbSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vbkRlc2VsZWN0KGl0ZW0pXG4gIH1cblxuICBhc3NpZ25TZWFyY2hSZWYgPSByZWYgPT4ge1xuICAgIHRoaXMuc2VhcmNoUmVmID0gcmVmXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgb3B0aW9uczogb3JpZ2luYWxPcHRpb25zLFxuICAgICAgY2xvc2UsXG4gICAgICBjbG9zZU9uU2VsZWN0LFxuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHQsXG4gICAgICBvblNlbGVjdCxcbiAgICAgIG9uRGVzZWxlY3QsXG4gICAgICBvbkZpbHRlckNoYW5nZSxcbiAgICAgIHNlbGVjdGVkLFxuICAgICAgaGFzRmlsdGVyLFxuICAgICAgZmlsdGVyUGxhY2Vob2xkZXIsXG4gICAgICBmaWx0ZXJJY29uLFxuICAgICAgb3B0aW9uU2l6ZSxcbiAgICAgIHJlbmRlckl0ZW0sXG4gICAgICBvcHRpb25zRmlsdGVyLFxuICAgICAgaXNNdWx0aVNlbGVjdCxcbiAgICAgIGRlZmF1bHRTZWFyY2hWYWx1ZSxcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5zZWFyY2gob3JpZ2luYWxPcHRpb25zKVxuICAgIGNvbnN0IGxpc3RIZWlnaHQgPSBoZWlnaHQgLSAoaGFzRmlsdGVyID8gMzIgOiAwKVxuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHRoaXMuZ2V0Q3VycmVudEluZGV4KClcbiAgICBjb25zdCBzY3JvbGxUb0luZGV4ID0gY3VycmVudEluZGV4ID09PSAtMSA/IDAgOiBjdXJyZW50SW5kZXhcblxuICAgIHJldHVybiAoXG4gICAgICA8UGFuZVxuICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICA+XG4gICAgICAgIHtoYXNGaWx0ZXIgJiYgKFxuICAgICAgICAgIDxUYWJsZUhlYWQ+XG4gICAgICAgICAgICA8U2VhcmNoVGFibGVIZWFkZXJDZWxsXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgaW5uZXJSZWY9e3RoaXMuYXNzaWduU2VhcmNoUmVmfVxuICAgICAgICAgICAgICBib3JkZXJSaWdodD17bnVsbH1cbiAgICAgICAgICAgICAgaGVpZ2h0PXszMn1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2ZpbHRlclBsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICBpY29uPXtmaWx0ZXJJY29ufVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L1RhYmxlSGVhZD5cbiAgICAgICAgKX1cbiAgICAgICAgPFBhbmUgZmxleD17MX0+XG4gICAgICAgICAgPFZpcnR1YWxMaXN0XG4gICAgICAgICAgICBoZWlnaHQ9e2xpc3RIZWlnaHR9XG4gICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgaXRlbVNpemU9e29wdGlvblNpemV9XG4gICAgICAgICAgICBpdGVtQ291bnQ9e29wdGlvbnMubGVuZ3RofVxuICAgICAgICAgICAgb3ZlcnNjYW5Db3VudD17MjB9XG4gICAgICAgICAgICBzY3JvbGxUb0FsaWdubWVudD1cImF1dG9cIlxuICAgICAgICAgICAgc2Nyb2xsVG9JbmRleD17c2Nyb2xsVG9JbmRleCB8fCB1bmRlZmluZWR9XG4gICAgICAgICAgICByZW5kZXJJdGVtPXsoeyBpbmRleCwgc3R5bGUgfSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBpdGVtID0gb3B0aW9uc1tpbmRleF1cbiAgICAgICAgICAgICAgY29uc3QgaXNTZWxlY3RlZCA9IHRoaXMuaXNTZWxlY3RlZChpdGVtKVxuICAgICAgICAgICAgICByZXR1cm4gcmVuZGVySXRlbSh7XG4gICAgICAgICAgICAgICAga2V5OiBpdGVtLnZhbHVlLFxuICAgICAgICAgICAgICAgIGxhYmVsOiBpdGVtLmxhYmVsLFxuICAgICAgICAgICAgICAgIGljb246IGl0ZW0uaWNvbixcbiAgICAgICAgICAgICAgICBzdHlsZSxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IG9wdGlvblNpemUsXG4gICAgICAgICAgICAgICAgb25TZWxlY3Q6ICgpID0+IHRoaXMuaGFuZGxlU2VsZWN0KGl0ZW0pLFxuICAgICAgICAgICAgICAgIG9uRGVzZWxlY3Q6ICgpID0+IHRoaXMuaGFuZGxlRGVzZWxlY3QoaXRlbSksXG4gICAgICAgICAgICAgICAgaXNTZWxlY3RhYmxlOiAhaXNTZWxlY3RlZCB8fCBpc011bHRpU2VsZWN0LFxuICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGl0ZW0uZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgdGFiSW5kZXg6IDBcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9QYW5lPlxuICAgICAgPC9QYW5lPlxuICAgIClcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxPQUFELEVBQVVDLEtBQVYsUUFBNkI7RUFBQSxJQUFWQyxHQUFVLFFBQVZBLEdBQVU7RUFDL0MsT0FBT0MsMEJBQUEsQ0FBV0MsTUFBWCxDQUFrQkosT0FBbEIsRUFBMkJDLEtBQTNCLEVBQWtDO0lBQUVDLEdBQUcsRUFBSEE7RUFBRixDQUFsQyxDQUFQO0FBQ0QsQ0FGRDtBQUlBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxJQUFNRyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFBQyxLQUFLO0VBQUEsb0JBQUksZ0NBQUMsa0JBQUQsRUFBWUEsS0FBWixDQUFKO0FBQUEsQ0FBMUI7O0FBQU1ELFk7O0lBRWVFLFc7Ozs7O0VBcURuQixxQkFBWUQsS0FBWixFQUFtQkUsT0FBbkIsRUFBNEI7SUFB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