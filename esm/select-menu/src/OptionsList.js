import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _excluded = ["options", "close", "closeOnSelect", "width", "height", "onSelect", "onDeselect", "onFilterChange", "selected", "hasFilter", "filterPlaceholder", "filterIcon", "optionSize", "renderItem", "optionsFilter", "isMultiSelect", "defaultSearchValue"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import fuzzaldrin from 'fuzzaldrin-plus';
import VirtualList from 'react-tiny-virtual-list';
import { Pane } from '../../layers';
import { TableHead, SearchTableHeaderCell } from '../../table';
import OptionShapePropType from './OptionShapePropType';
import Option from './Option';
/**
 * Fuzzaldrin-plus is the default filter, but you can use your own
 * as long as they follow the following signature:
 * @param options <Array[String]> - ['label', 'label2', ...]
 * @param input <String>
 */

var fuzzyFilter = function fuzzyFilter(options, input, _ref) {
  var key = _ref.key;
  return fuzzaldrin.filter(options, input, {
    key: key
  });
};
/**
 * This is the default item renderer of options
 * you can pass custom renderers as long as they work the same as the Option
 */


var itemRenderer = function itemRenderer(props) {
  return /*#__PURE__*/React.createElement(Option, props);
};

itemRenderer.displayName = "itemRenderer";

var OptionsList = /*#__PURE__*/function (_PureComponent) {
  _inherits(OptionsList, _PureComponent);

  var _super = _createSuper(OptionsList);

  function OptionsList(props, context) {
    var _this;

    _classCallCheck(this, OptionsList);

    _this = _super.call(this, props, context);

    _defineProperty(_assertThisInitialized(_this), "isSelected", function (item) {
      var selected = _this.state.selected;
      return Boolean(selected.find(function (selectedItem) {
        return selectedItem === item.value;
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "search", function (options) {
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

    _defineProperty(_assertThisInitialized(_this), "getCurrentIndex", function () {
      var selected = _this.props.selected;

      var options = _this.getFilteredOptions();

      return options.findIndex(function (option) {
        return option.value === selected[selected.length - 1];
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (e) {
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

    _defineProperty(_assertThisInitialized(_this), "handleArrowUp", function () {
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

    _defineProperty(_assertThisInitialized(_this), "handleArrowDown", function () {
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

    _defineProperty(_assertThisInitialized(_this), "handleEnter", function () {
      var isSelected = _this.getCurrentIndex() !== -1;

      if (isSelected) {
        if (!_this.props.isMultiSelect && _this.props.closeOnSelect) {
          _this.props.close();
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (searchValue) {
      _this.setState({
        searchValue: searchValue
      });

      _this.props.onFilterChange(searchValue);
    });

    _defineProperty(_assertThisInitialized(_this), "handleSelect", function (item) {
      if (_this.isSelected(item)) {
        _this.props.onDeselect(item);
      } else {
        _this.props.onSelect(item);
      }

      if (!_this.props.isMultiSelect && _this.props.closeOnSelect) {
        _this.props.close();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleDeselect", function (item) {
      _this.props.onDeselect(item);
    });

    _defineProperty(_assertThisInitialized(_this), "assignSearchRef", function (ref) {
      _this.searchRef = ref;
    });

    _this.state = {
      searchValue: props.defaultSearchValue,
      selected: props.selected
    };
    return _this;
  }

  _createClass(OptionsList, [{
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
          props = _objectWithoutProperties(_this$props, _excluded);

      var options = this.search(originalOptions);
      var listHeight = height - (hasFilter ? 32 : 0);
      var currentIndex = this.getCurrentIndex();
      var scrollToIndex = currentIndex === -1 ? 0 : currentIndex;
      return /*#__PURE__*/React.createElement(Pane, _extends({
        height: height,
        width: width,
        display: "flex",
        flexDirection: "column"
      }, props), hasFilter && /*#__PURE__*/React.createElement(TableHead, null, /*#__PURE__*/React.createElement(SearchTableHeaderCell, {
        onChange: this.handleChange,
        innerRef: this.assignSearchRef,
        borderRight: null,
        height: 32,
        placeholder: filterPlaceholder,
        icon: filterIcon
      })), /*#__PURE__*/React.createElement(Pane, {
        flex: 1
      }, /*#__PURE__*/React.createElement(VirtualList, {
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
}(PureComponent);

OptionsList.displayName = "OptionsList";

_defineProperty(OptionsList, "propTypes", {
  options: PropTypes.arrayOf(OptionShapePropType),
  close: PropTypes.func,
  height: PropTypes.number,
  width: PropTypes.number,

  /**
   * When true, multi select is accounted for.
   */
  isMultiSelect: PropTypes.bool,

  /**
   * When true, menu closes on option selection.
   */
  closeOnSelect: PropTypes.bool,

  /**
   * This holds the values of the options
   */
  selected: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  onSelect: PropTypes.func,
  onDeselect: PropTypes.func,
  onFilterChange: PropTypes.func,
  hasFilter: PropTypes.bool,
  optionSize: PropTypes.number,
  renderItem: PropTypes.func,
  filterPlaceholder: PropTypes.string,
  filterIcon: PropTypes.string,
  optionsFilter: PropTypes.func,
  defaultSearchValue: PropTypes.string
});

_defineProperty(OptionsList, "defaultProps", {
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

export { OptionsList as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJmdXp6YWxkcmluIiwiVmlydHVhbExpc3QiLCJQYW5lIiwiVGFibGVIZWFkIiwiU2VhcmNoVGFibGVIZWFkZXJDZWxsIiwiT3B0aW9uU2hhcGVQcm9wVHlwZSIsIk9wdGlvbiIsImZ1enp5RmlsdGVyIiwib3B0aW9ucyIsImlucHV0Iiwia2V5IiwiZmlsdGVyIiwiaXRlbVJlbmRlcmVyIiwicHJvcHMiLCJPcHRpb25zTGlzdCIsImNvbnRleHQiLCJpdGVtIiwic2VsZWN0ZWQiLCJzdGF0ZSIsIkJvb2xlYW4iLCJmaW5kIiwic2VsZWN0ZWRJdGVtIiwidmFsdWUiLCJvcHRpb25zRmlsdGVyIiwic2VhcmNoVmFsdWUiLCJ0cmltIiwibWFwIiwibGFiZWwiLCJuYW1lIiwiZ2V0RmlsdGVyZWRPcHRpb25zIiwiZmluZEluZGV4Iiwib3B0aW9uIiwibGVuZ3RoIiwiZSIsImhhbmRsZUFycm93VXAiLCJoYW5kbGVBcnJvd0Rvd24iLCJoYW5kbGVFbnRlciIsImNsb3NlIiwib25TZWxlY3QiLCJuZXh0SW5kZXgiLCJnZXRDdXJyZW50SW5kZXgiLCJpc1NlbGVjdGVkIiwiaXNNdWx0aVNlbGVjdCIsImNsb3NlT25TZWxlY3QiLCJzZXRTdGF0ZSIsIm9uRmlsdGVyQ2hhbmdlIiwib25EZXNlbGVjdCIsInJlZiIsInNlYXJjaFJlZiIsImRlZmF1bHRTZWFyY2hWYWx1ZSIsImhhc0ZpbHRlciIsInJlcXVlc3RJZCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInF1ZXJ5U2VsZWN0b3IiLCJmb2N1cyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVLZXlEb3duIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicHJldlByb3BzIiwic2VhcmNoIiwib3JpZ2luYWxPcHRpb25zIiwid2lkdGgiLCJoZWlnaHQiLCJmaWx0ZXJQbGFjZWhvbGRlciIsImZpbHRlckljb24iLCJvcHRpb25TaXplIiwicmVuZGVySXRlbSIsImxpc3RIZWlnaHQiLCJjdXJyZW50SW5kZXgiLCJzY3JvbGxUb0luZGV4IiwiaGFuZGxlQ2hhbmdlIiwiYXNzaWduU2VhcmNoUmVmIiwidW5kZWZpbmVkIiwiaW5kZXgiLCJzdHlsZSIsImljb24iLCJoYW5kbGVTZWxlY3QiLCJoYW5kbGVEZXNlbGVjdCIsImlzU2VsZWN0YWJsZSIsImRpc2FibGVkIiwidGFiSW5kZXgiLCJhcnJheU9mIiwiZnVuYyIsIm51bWJlciIsImJvb2wiLCJvbmVPZlR5cGUiLCJzdHJpbmciXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2VsZWN0LW1lbnUvc3JjL09wdGlvbnNMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgZnV6emFsZHJpbiBmcm9tICdmdXp6YWxkcmluLXBsdXMnXG5pbXBvcnQgVmlydHVhbExpc3QgZnJvbSAncmVhY3QtdGlueS12aXJ0dWFsLWxpc3QnXG5pbXBvcnQgeyBQYW5lIH0gZnJvbSAnLi4vLi4vbGF5ZXJzJ1xuaW1wb3J0IHsgVGFibGVIZWFkLCBTZWFyY2hUYWJsZUhlYWRlckNlbGwgfSBmcm9tICcuLi8uLi90YWJsZSdcbmltcG9ydCBPcHRpb25TaGFwZVByb3BUeXBlIGZyb20gJy4vT3B0aW9uU2hhcGVQcm9wVHlwZSdcbmltcG9ydCBPcHRpb24gZnJvbSAnLi9PcHRpb24nXG5cbi8qKlxuICogRnV6emFsZHJpbi1wbHVzIGlzIHRoZSBkZWZhdWx0IGZpbHRlciwgYnV0IHlvdSBjYW4gdXNlIHlvdXIgb3duXG4gKiBhcyBsb25nIGFzIHRoZXkgZm9sbG93IHRoZSBmb2xsb3dpbmcgc2lnbmF0dXJlOlxuICogQHBhcmFtIG9wdGlvbnMgPEFycmF5W1N0cmluZ10+IC0gWydsYWJlbCcsICdsYWJlbDInLCAuLi5dXG4gKiBAcGFyYW0gaW5wdXQgPFN0cmluZz5cbiAqL1xuY29uc3QgZnV6enlGaWx0ZXIgPSAob3B0aW9ucywgaW5wdXQsIHsga2V5IH0pID0+IHtcbiAgcmV0dXJuIGZ1enphbGRyaW4uZmlsdGVyKG9wdGlvbnMsIGlucHV0LCB7IGtleSB9KVxufVxuXG4vKipcbiAqIFRoaXMgaXMgdGhlIGRlZmF1bHQgaXRlbSByZW5kZXJlciBvZiBvcHRpb25zXG4gKiB5b3UgY2FuIHBhc3MgY3VzdG9tIHJlbmRlcmVycyBhcyBsb25nIGFzIHRoZXkgd29yayB0aGUgc2FtZSBhcyB0aGUgT3B0aW9uXG4gKi9cbmNvbnN0IGl0ZW1SZW5kZXJlciA9IHByb3BzID0+IDxPcHRpb24gey4uLnByb3BzfSAvPlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcHRpb25zTGlzdCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG9wdGlvbnM6IFByb3BUeXBlcy5hcnJheU9mKE9wdGlvblNoYXBlUHJvcFR5cGUpLFxuICAgIGNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIG11bHRpIHNlbGVjdCBpcyBhY2NvdW50ZWQgZm9yLlxuICAgICAqL1xuICAgIGlzTXVsdGlTZWxlY3Q6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCBtZW51IGNsb3NlcyBvbiBvcHRpb24gc2VsZWN0aW9uLlxuICAgICAqL1xuICAgIGNsb3NlT25TZWxlY3Q6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogVGhpcyBob2xkcyB0aGUgdmFsdWVzIG9mIHRoZSBvcHRpb25zXG4gICAgICovXG4gICAgc2VsZWN0ZWQ6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXG4gICAgKSxcbiAgICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25EZXNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25GaWx0ZXJDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIGhhc0ZpbHRlcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgb3B0aW9uU2l6ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICByZW5kZXJJdGVtOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBmaWx0ZXJQbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBmaWx0ZXJJY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9wdGlvbnNGaWx0ZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIGRlZmF1bHRTZWFyY2hWYWx1ZTogUHJvcFR5cGVzLnN0cmluZ1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBvcHRpb25zOiBbXSxcbiAgICAvKipcbiAgICAgKiBJbmNsdWRpbmcgYm9yZGVyIGJvdHRvbVxuICAgICAqIEZvciBzb21lIHJlYXNvbiBwYXNzaW5nIGhlaWdodCB0byBUYWJsZVJvdyBkb2Vzbid0IHdvcmtcbiAgICAgKiBUT0RPOiBmaXggaGFja3kgc29sdXRpb25cbiAgICAgKi9cbiAgICBvcHRpb25TaXplOiAzMyxcbiAgICBvblNlbGVjdDogKCkgPT4ge30sXG4gICAgb25EZXNlbGVjdDogKCkgPT4ge30sXG4gICAgb25GaWx0ZXJDaGFuZ2U6ICgpID0+IHt9LFxuICAgIHNlbGVjdGVkOiBbXSxcbiAgICByZW5kZXJJdGVtOiBpdGVtUmVuZGVyZXIsXG4gICAgZmlsdGVyUGxhY2Vob2xkZXI6ICdGaWx0ZXIuLi4nLFxuICAgIGZpbHRlckljb246ICdzZWFyY2gnLFxuICAgIGRlZmF1bHRTZWFyY2hWYWx1ZTogJydcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG4gICAgc3VwZXIocHJvcHMsIGNvbnRleHQpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VhcmNoVmFsdWU6IHByb3BzLmRlZmF1bHRTZWFyY2hWYWx1ZSxcbiAgICAgIHNlbGVjdGVkOiBwcm9wcy5zZWxlY3RlZFxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgaGFzRmlsdGVyIH0gPSB0aGlzLnByb3BzXG4gICAgaWYgKCFoYXNGaWx0ZXIpIHJldHVyblxuICAgIC8qKlxuICAgICAqIEhhY2t5IHNvbHV0aW9uIGZvciBicm9rZW4gYXV0b0ZvY3VzXG4gICAgICogaHR0cHM6Ly9naXRodWIuY29tL3NlZ21lbnRpby9ldmVyZ3JlZW4vaXNzdWVzLzkwXG4gICAgICovXG4gICAgdGhpcy5yZXF1ZXN0SWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5zZWFyY2hSZWYucXVlcnlTZWxlY3RvcignaW5wdXQnKS5mb2N1cygpXG4gICAgfSlcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlEb3duKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5yZXF1ZXN0SWQpXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleURvd24pXG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgaWYgKHByZXZQcm9wcy5zZWxlY3RlZCAhPT0gdGhpcy5wcm9wcy5zZWxlY3RlZCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWRpZC11cGRhdGUtc2V0LXN0YXRlXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2VsZWN0ZWQ6IHRoaXMucHJvcHMuc2VsZWN0ZWRcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgaXNTZWxlY3RlZCA9IGl0ZW0gPT4ge1xuICAgIGNvbnN0IHsgc2VsZWN0ZWQgfSA9IHRoaXMuc3RhdGVcblxuICAgIHJldHVybiBCb29sZWFuKHNlbGVjdGVkLmZpbmQoc2VsZWN0ZWRJdGVtID0+IHNlbGVjdGVkSXRlbSA9PT0gaXRlbS52YWx1ZSkpXG4gIH1cblxuICBzZWFyY2ggPSBvcHRpb25zID0+IHtcbiAgICBjb25zdCB7IG9wdGlvbnNGaWx0ZXIgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IHNlYXJjaFZhbHVlIH0gPSB0aGlzLnN0YXRlXG5cbiAgICBpZiAoc2VhcmNoVmFsdWUudHJpbSgpID09PSAnJykge1xuICAgICAgcmV0dXJuIG9wdGlvbnNcbiAgICB9XG5cbiAgICAvLyBQcmVzZXJ2ZSBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSB3aXRoIGFsbG93aW5nIGN1c3RvbSBmaWx0ZXJzLCB3aGljaCBhY2NlcHQgYXJyYXkgb2Ygc3RyaW5nc1xuICAgIGlmICh0eXBlb2Ygb3B0aW9uc0ZpbHRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIG9wdGlvbnNGaWx0ZXIoXG4gICAgICAgIG9wdGlvbnMubWFwKGl0ZW0gPT4gaXRlbS5sYWJlbCksXG4gICAgICAgIHNlYXJjaFZhbHVlXG4gICAgICApLm1hcChuYW1lID0+IG9wdGlvbnMuZmluZChpdGVtID0+IGl0ZW0ubGFiZWwgPT09IG5hbWUpKVxuICAgIH1cblxuICAgIHJldHVybiBmdXp6eUZpbHRlcihvcHRpb25zLCBzZWFyY2hWYWx1ZSwgeyBrZXk6ICdsYWJlbCcgfSlcbiAgfVxuXG4gIGdldEN1cnJlbnRJbmRleCA9ICgpID0+IHtcbiAgICBjb25zdCB7IHNlbGVjdGVkIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuZ2V0RmlsdGVyZWRPcHRpb25zKClcblxuICAgIHJldHVybiBvcHRpb25zLmZpbmRJbmRleChcbiAgICAgIG9wdGlvbiA9PiBvcHRpb24udmFsdWUgPT09IHNlbGVjdGVkW3NlbGVjdGVkLmxlbmd0aCAtIDFdXG4gICAgKVxuICB9XG5cbiAgZ2V0RmlsdGVyZWRPcHRpb25zKCkge1xuICAgIGNvbnN0IHsgb3B0aW9ucyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIHRoaXMuc2VhcmNoKG9wdGlvbnMpXG4gIH1cblxuICBoYW5kbGVLZXlEb3duID0gZSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAnQXJyb3dVcCcpIHtcbiAgICAgIHRoaXMuaGFuZGxlQXJyb3dVcCgpXG4gICAgfVxuXG4gICAgaWYgKGUua2V5ID09PSAnQXJyb3dEb3duJykge1xuICAgICAgdGhpcy5oYW5kbGVBcnJvd0Rvd24oKVxuICAgIH1cblxuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgdGhpcy5oYW5kbGVFbnRlcigpXG4gICAgfVxuXG4gICAgaWYgKGUua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgdGhpcy5wcm9wcy5jbG9zZSgpXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQXJyb3dVcCA9ICgpID0+IHtcbiAgICBjb25zdCB7IG9uU2VsZWN0IH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuZ2V0RmlsdGVyZWRPcHRpb25zKClcblxuICAgIGxldCBuZXh0SW5kZXggPSB0aGlzLmdldEN1cnJlbnRJbmRleCgpIC0gMVxuXG4gICAgaWYgKG5leHRJbmRleCA8IDApIHtcbiAgICAgIG5leHRJbmRleCA9IG9wdGlvbnMubGVuZ3RoIC0gMVxuICAgIH1cblxuICAgIGlmICh0aGlzLmlzU2VsZWN0ZWQob3B0aW9uc1tuZXh0SW5kZXhdKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgb25TZWxlY3Qob3B0aW9uc1tuZXh0SW5kZXhdKVxuICB9XG5cbiAgaGFuZGxlQXJyb3dEb3duID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgb25TZWxlY3QgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5nZXRGaWx0ZXJlZE9wdGlvbnMoKVxuXG4gICAgbGV0IG5leHRJbmRleCA9IHRoaXMuZ2V0Q3VycmVudEluZGV4KCkgKyAxXG5cbiAgICBpZiAobmV4dEluZGV4ID09PSBvcHRpb25zLmxlbmd0aCkge1xuICAgICAgbmV4dEluZGV4ID0gMFxuICAgIH1cblxuICAgIGlmICghdGhpcy5pc1NlbGVjdGVkKG9wdGlvbnNbbmV4dEluZGV4XSkpIHtcbiAgICAgIG9uU2VsZWN0KG9wdGlvbnNbbmV4dEluZGV4XSlcbiAgICB9XG4gIH1cblxuICBoYW5kbGVFbnRlciA9ICgpID0+IHtcbiAgICBjb25zdCBpc1NlbGVjdGVkID0gdGhpcy5nZXRDdXJyZW50SW5kZXgoKSAhPT0gLTFcblxuICAgIGlmIChpc1NlbGVjdGVkKSB7XG4gICAgICBpZiAoIXRoaXMucHJvcHMuaXNNdWx0aVNlbGVjdCAmJiB0aGlzLnByb3BzLmNsb3NlT25TZWxlY3QpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5jbG9zZSgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlID0gc2VhcmNoVmFsdWUgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2VhcmNoVmFsdWVcbiAgICB9KVxuICAgIHRoaXMucHJvcHMub25GaWx0ZXJDaGFuZ2Uoc2VhcmNoVmFsdWUpXG4gIH1cblxuICBoYW5kbGVTZWxlY3QgPSBpdGVtID0+IHtcbiAgICBpZiAodGhpcy5pc1NlbGVjdGVkKGl0ZW0pKSB7XG4gICAgICB0aGlzLnByb3BzLm9uRGVzZWxlY3QoaXRlbSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdChpdGVtKVxuICAgIH1cblxuICAgIGlmICghdGhpcy5wcm9wcy5pc011bHRpU2VsZWN0ICYmIHRoaXMucHJvcHMuY2xvc2VPblNlbGVjdCkge1xuICAgICAgdGhpcy5wcm9wcy5jbG9zZSgpXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRGVzZWxlY3QgPSBpdGVtID0+IHtcbiAgICB0aGlzLnByb3BzLm9uRGVzZWxlY3QoaXRlbSlcbiAgfVxuXG4gIGFzc2lnblNlYXJjaFJlZiA9IHJlZiA9PiB7XG4gICAgdGhpcy5zZWFyY2hSZWYgPSByZWZcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBvcHRpb25zOiBvcmlnaW5hbE9wdGlvbnMsXG4gICAgICBjbG9zZSxcbiAgICAgIGNsb3NlT25TZWxlY3QsXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICAgIG9uU2VsZWN0LFxuICAgICAgb25EZXNlbGVjdCxcbiAgICAgIG9uRmlsdGVyQ2hhbmdlLFxuICAgICAgc2VsZWN0ZWQsXG4gICAgICBoYXNGaWx0ZXIsXG4gICAgICBmaWx0ZXJQbGFjZWhvbGRlcixcbiAgICAgIGZpbHRlckljb24sXG4gICAgICBvcHRpb25TaXplLFxuICAgICAgcmVuZGVySXRlbSxcbiAgICAgIG9wdGlvbnNGaWx0ZXIsXG4gICAgICBpc011bHRpU2VsZWN0LFxuICAgICAgZGVmYXVsdFNlYXJjaFZhbHVlLFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLnNlYXJjaChvcmlnaW5hbE9wdGlvbnMpXG4gICAgY29uc3QgbGlzdEhlaWdodCA9IGhlaWdodCAtIChoYXNGaWx0ZXIgPyAzMiA6IDApXG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gdGhpcy5nZXRDdXJyZW50SW5kZXgoKVxuICAgIGNvbnN0IHNjcm9sbFRvSW5kZXggPSBjdXJyZW50SW5kZXggPT09IC0xID8gMCA6IGN1cnJlbnRJbmRleFxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQYW5lXG4gICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgID5cbiAgICAgICAge2hhc0ZpbHRlciAmJiAoXG4gICAgICAgICAgPFRhYmxlSGVhZD5cbiAgICAgICAgICAgIDxTZWFyY2hUYWJsZUhlYWRlckNlbGxcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICBpbm5lclJlZj17dGhpcy5hc3NpZ25TZWFyY2hSZWZ9XG4gICAgICAgICAgICAgIGJvcmRlclJpZ2h0PXtudWxsfVxuICAgICAgICAgICAgICBoZWlnaHQ9ezMyfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17ZmlsdGVyUGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgIGljb249e2ZpbHRlckljb259XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvVGFibGVIZWFkPlxuICAgICAgICApfVxuICAgICAgICA8UGFuZSBmbGV4PXsxfT5cbiAgICAgICAgICA8VmlydHVhbExpc3RcbiAgICAgICAgICAgIGhlaWdodD17bGlzdEhlaWdodH1cbiAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICBpdGVtU2l6ZT17b3B0aW9uU2l6ZX1cbiAgICAgICAgICAgIGl0ZW1Db3VudD17b3B0aW9ucy5sZW5ndGh9XG4gICAgICAgICAgICBvdmVyc2NhbkNvdW50PXsyMH1cbiAgICAgICAgICAgIHNjcm9sbFRvQWxpZ25tZW50PVwiYXV0b1wiXG4gICAgICAgICAgICBzY3JvbGxUb0luZGV4PXtzY3JvbGxUb0luZGV4IHx8IHVuZGVmaW5lZH1cbiAgICAgICAgICAgIHJlbmRlckl0ZW09eyh7IGluZGV4LCBzdHlsZSB9KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBvcHRpb25zW2luZGV4XVxuICAgICAgICAgICAgICBjb25zdCBpc1NlbGVjdGVkID0gdGhpcy5pc1NlbGVjdGVkKGl0ZW0pXG4gICAgICAgICAgICAgIHJldHVybiByZW5kZXJJdGVtKHtcbiAgICAgICAgICAgICAgICBrZXk6IGl0ZW0udmFsdWUsXG4gICAgICAgICAgICAgICAgbGFiZWw6IGl0ZW0ubGFiZWwsXG4gICAgICAgICAgICAgICAgaWNvbjogaXRlbS5pY29uLFxuICAgICAgICAgICAgICAgIHN0eWxlLFxuICAgICAgICAgICAgICAgIGhlaWdodDogb3B0aW9uU2l6ZSxcbiAgICAgICAgICAgICAgICBvblNlbGVjdDogKCkgPT4gdGhpcy5oYW5kbGVTZWxlY3QoaXRlbSksXG4gICAgICAgICAgICAgICAgb25EZXNlbGVjdDogKCkgPT4gdGhpcy5oYW5kbGVEZXNlbGVjdChpdGVtKSxcbiAgICAgICAgICAgICAgICBpc1NlbGVjdGFibGU6ICFpc1NlbGVjdGVkIHx8IGlzTXVsdGlTZWxlY3QsXG4gICAgICAgICAgICAgICAgaXNTZWxlY3RlZCxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogaXRlbS5kaXNhYmxlZCxcbiAgICAgICAgICAgICAgICB0YWJJbmRleDogMFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1BhbmU+XG4gICAgICA8L1BhbmU+XG4gICAgKVxuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLGFBQWhCLFFBQXFDLE9BQXJDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLFVBQVAsTUFBdUIsaUJBQXZCO0FBQ0EsT0FBT0MsV0FBUCxNQUF3Qix5QkFBeEI7QUFDQSxTQUFTQyxJQUFULFFBQXFCLGNBQXJCO0FBQ0EsU0FBU0MsU0FBVCxFQUFvQkMscUJBQXBCLFFBQWlELGFBQWpEO0FBQ0EsT0FBT0MsbUJBQVAsTUFBZ0MsdUJBQWhDO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixVQUFuQjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxPQUFELEVBQVVDLEtBQVYsUUFBNkI7RUFBQSxJQUFWQyxHQUFVLFFBQVZBLEdBQVU7RUFDL0MsT0FBT1YsVUFBVSxDQUFDVyxN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