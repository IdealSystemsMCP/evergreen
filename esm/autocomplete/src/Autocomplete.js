import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _excluded = ["children", "itemSize", "position", "renderItem", "itemsFilter", "popoverMaxHeight", "popoverMinWidth", "defaultSelectedItem", "initialSelectedItem", "defaultInputValue", "initialInputValue", "getButtonProps", "getToggleButtonProps"],
    _excluded2 = ["isOpen", "inputValue", "getItemProps", "selectedItem", "highlightedIndex", "selectItemAtIndex", "getRootProps"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import fuzzaldrin from 'fuzzaldrin-plus';
import Downshift from 'downshift';
import VirtualList from 'react-tiny-virtual-list';
import { Popover } from '../../popover';
import { Position } from '../../constants';
import { Heading } from '../../typography';
import { Pane } from '../../layers';
import deprecated from '../../lib/deprecated';
import AutocompleteItem from './AutocompleteItem';

var fuzzyFilter = function fuzzyFilter(itemToString) {
  if (itemToString) {
    return function (items, input) {
      var wrappedItems = items.map(function (item) {
        return {
          key: itemToString(item),
          item: item
        };
      });
      return fuzzaldrin.filter(wrappedItems, input, {
        key: 'key'
      }).map(function (_ref) {
        var item = _ref.item;
        return item;
      });
    };
  }

  return function (items, input) {
    return fuzzaldrin.filter(items, input);
  };
};

var noop = function noop() {};

var autocompleteItemRenderer = function autocompleteItemRenderer(props) {
  return /*#__PURE__*/React.createElement(AutocompleteItem, props);
};

autocompleteItemRenderer.displayName = "autocompleteItemRenderer";

// https://github.com/paypal/downshift/issues/164
var Autocomplete = /*#__PURE__*/function (_PureComponent) {
  _inherits(Autocomplete, _PureComponent);

  var _super = _createSuper(Autocomplete);

  function Autocomplete() {
    var _this;

    _classCallCheck(this, Autocomplete);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      targetWidth: 0
    });

    _defineProperty(_assertThisInitialized(_this), "stateReducer", function (state, changes) {
      var items = _this.props.items;

      if (Object.prototype.hasOwnProperty.call(changes, 'isOpen') && changes.isOpen) {
        return _objectSpread(_objectSpread({}, changes), {}, {
          highlightedIndex: items.indexOf(state.selectedItem)
        });
      }

      return changes;
    });

    _defineProperty(_assertThisInitialized(_this), "renderResults", function (_ref2) {
      var width = _ref2.width,
          inputValue = _ref2.inputValue,
          highlightedIndex = _ref2.highlightedIndex,
          selectItemAtIndex = _ref2.selectItemAtIndex,
          selectedItem = _ref2.selectedItem,
          getItemProps = _ref2.getItemProps;
      var _this$props = _this.props,
          title = _this$props.title,
          itemSize = _this$props.itemSize,
          itemsFilter = _this$props.itemsFilter,
          originalItems = _this$props.items,
          itemToString = _this$props.itemToString,
          _renderItem = _this$props.renderItem,
          popoverMaxHeight = _this$props.popoverMaxHeight,
          isFilterDisabled = _this$props.isFilterDisabled;
      var filter = itemsFilter || fuzzyFilter(itemToString);
      var items = isFilterDisabled || inputValue.trim() === '' ? originalItems : filter(originalItems, inputValue);
      if (items.length === 0) return null;
      return /*#__PURE__*/React.createElement(Pane, {
        width: width
      }, title && /*#__PURE__*/React.createElement(Pane, {
        padding: 8,
        borderBottom: "muted"
      }, /*#__PURE__*/React.createElement(Heading, {
        size: 100
      }, title)), items.length > 0 && /*#__PURE__*/React.createElement(VirtualList, {
        width: "100%",
        height: Math.min(items.length * itemSize, popoverMaxHeight),
        itemSize: itemSize,
        itemCount: items.length,
        scrollToIndex: highlightedIndex || 0,
        overscanCount: 3,
        scrollToAlignment: "auto",
        renderItem: function renderItem(_ref3) {
          var index = _ref3.index,
              style = _ref3.style;
          var item = items[index];
          var itemString = itemToString(item);

          var onSelect = function onSelect() {
            selectItemAtIndex(index);
          };

          return _renderItem(getItemProps({
            item: item,
            key: itemString,
            index: index,
            style: style,
            children: itemString,
            onMouseUp: onSelect,
            onTouchEnd: onSelect,
            isSelected: itemToString(selectedItem) === itemString,
            isHighlighted: highlightedIndex === index
          }));
        }
      }));
    });

    return _this;
  }

  _createClass(Autocomplete, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        targetWidth: this.targetRef.getBoundingClientRect().width
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          children = _this$props2.children,
          itemSize = _this$props2.itemSize,
          position = _this$props2.position,
          renderItem = _this$props2.renderItem,
          itemsFilter = _this$props2.itemsFilter,
          popoverMaxHeight = _this$props2.popoverMaxHeight,
          popoverMinWidth = _this$props2.popoverMinWidth,
          defaultSelectedItem = _this$props2.defaultSelectedItem,
          initialSelectedItem = _this$props2.initialSelectedItem,
          defaultInputValue = _this$props2.defaultInputValue,
          initialInputValue = _this$props2.initialInputValue,
          getButtonProps = _this$props2.getButtonProps,
          getToggleButtonProps = _this$props2.getToggleButtonProps,
          props = _objectWithoutProperties(_this$props2, _excluded);

      return /*#__PURE__*/React.createElement(Downshift, _extends({
        initialSelectedItem: initialSelectedItem || defaultSelectedItem,
        initialInputValue: initialInputValue || defaultInputValue,
        getToggleButtonProps: getToggleButtonProps || getButtonProps,
        stateReducer: this.stateReducer,
        scrollIntoView: noop
      }, props), function (_ref4) {
        var isShown = _ref4.isOpen,
            inputValue = _ref4.inputValue,
            getItemProps = _ref4.getItemProps,
            selectedItem = _ref4.selectedItem,
            highlightedIndex = _ref4.highlightedIndex,
            selectItemAtIndex = _ref4.selectItemAtIndex,
            getRootProps = _ref4.getRootProps,
            restDownshiftProps = _objectWithoutProperties(_ref4, _excluded2);

        return /*#__PURE__*/React.createElement(Pane, _extends({
          width: "100%"
        }, getRootProps({
          refKey: 'innerRef'
        })), /*#__PURE__*/React.createElement(Popover, {
          bringFocusInside: false,
          isShown: isShown,
          minWidth: popoverMinWidth,
          position: position || (_this2.state.targetWidth < popoverMinWidth ? Position.BOTTOM_LEFT : Position.BOTTOM),
          content: function content() {
            return _this2.renderResults({
              width: Math.max(_this2.state.targetWidth, popoverMinWidth),
              inputValue: inputValue,
              getItemProps: getItemProps,
              selectedItem: selectedItem,
              highlightedIndex: highlightedIndex,
              selectItemAtIndex: selectItemAtIndex
            });
          },
          minHeight: 0,
          animationDuration: 0
        }, function (_ref5) {
          var isShownPopover = _ref5.isShown,
              toggle = _ref5.toggle,
              _getRef = _ref5.getRef;
          return children(_objectSpread({
            isShown: isShownPopover,
            toggle: toggle,
            getRef: function getRef(ref) {
              // Use the ref internally to determine the width
              _this2.targetRef = ref;

              _getRef(ref);
            },
            inputValue: inputValue,
            selectedItem: selectedItem,
            highlightedIndex: highlightedIndex,
            selectItemAtIndex: selectItemAtIndex
          }, restDownshiftProps));
        }));
      });
    }
  }]);

  return Autocomplete;
}(PureComponent);

Autocomplete.displayName = "Autocomplete";

_defineProperty(Autocomplete, "propTypes", _objectSpread({
  /**
   * This prop can be either a string or a Node.
   * It will provide a title for the items
   */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  /**
   * An array of items to be used as options for the select
   */
  items: PropTypes.array.isRequired,

  /**
   * The selected Item to be shown on the autocomplete
   */
  selectedItem: PropTypes.any,

  /**
   * The selected item to be selected & shown by default on the autocomplete (deprecated)
   */
  defaultSelectedItem: deprecated(PropTypes.any, 'Use "initialSelectedItem" instead.'),

  /**
   * The selected item to be selected & shown by default on the autocomplete (deprecated)
   */
  defaultInputValue: deprecated(PropTypes.any, 'Use "initialInputValue" instead.'),

  /**
   * In case the array of items is not an array of strings,
   * this function is used on each item to return the string that will be shown on the filter
   */
  itemToString: PropTypes.func.isRequired,

  /**
   * Function that will render the 'filter' component.
   */
  children: PropTypes.func.isRequired,

  /**
   * The height of each item in the list
   * Because the list is virtualized this is required beforehand.
   */
  itemSize: PropTypes.number,

  /**
   * Function that returns a component to render the item
   */
  renderItem: PropTypes.func,

  /**
   * The position of the Popover the Autocomplete is rendered in.
   */
  position: PropTypes.oneOf(Object.keys(Position)),

  /**
   * A function that is used to filter the items.
   * It should return a subset of the initial items.
   * By default the "fuzzaldrin-plus" package is used.
   */
  itemsFilter: PropTypes.func,

  /**
   * Prop that enables and disables filtering
   * True: Enables Filtering
   * False: Disables Filtering
   */
  isFilterDisabled: PropTypes.bool,

  /**
   * Defines the minimum height the results container will be
   */
  popoverMinWidth: PropTypes.number,

  /**
   * Defines the maximum height the results container will be
   */
  popoverMaxHeight: PropTypes.number,

  /**
   * The selected item to be selected & shown by default on the autocomplete (deprecated)
   */
  getButtonProps: deprecated(PropTypes.func, 'Use "getToggleButtonProps" instead.')
}, Downshift.propTypes));

_defineProperty(Autocomplete, "defaultProps", {
  itemToString: function itemToString(i) {
    return i ? String(i) : '';
  },
  itemSize: 32,
  isFilterDisabled: false,
  popoverMinWidth: 240,
  popoverMaxHeight: 240,
  renderItem: autocompleteItemRenderer
});

export { Autocomplete as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJmdXp6YWxkcmluIiwiRG93bnNoaWZ0IiwiVmlydHVhbExpc3QiLCJQb3BvdmVyIiwiUG9zaXRpb24iLCJIZWFkaW5nIiwiUGFuZSIsImRlcHJlY2F0ZWQiLCJBdXRvY29tcGxldGVJdGVtIiwiZnV6enlGaWx0ZXIiLCJpdGVtVG9TdHJpbmciLCJpdGVtcyIsImlucHV0Iiwid3JhcHBlZEl0ZW1zIiwibWFwIiwiaXRlbSIsImtleSIsImZpbHRlciIsIm5vb3AiLCJhdXRvY29tcGxldGVJdGVtUmVuZGVyZXIiLCJwcm9wcyIsIkF1dG9jb21wbGV0ZSIsInRhcmdldFdpZHRoIiwic3RhdGUiLCJjaGFuZ2VzIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaXNPcGVuIiwiaGlnaGxpZ2h0ZWRJbmRleCIsImluZGV4T2YiLCJzZWxlY3RlZEl0ZW0iLCJ3aWR0aCIsImlucHV0VmFsdWUiLCJzZWxlY3RJdGVtQXRJbmRleCIsImdldEl0ZW1Qcm9wcyIsInRpdGxlIiwiaXRlbVNpemUiLCJpdGVtc0ZpbHRlciIsIm9yaWdpbmFsSXRlbXMiLCJyZW5kZXJJdGVtIiwicG9wb3Zlck1heEhlaWdodCIsImlzRmlsdGVyRGlzYWJsZWQiLCJ0cmltIiwibGVuZ3RoIiwiTWF0aCIsIm1pbiIsImluZGV4Iiwic3R5bGUiLCJpdGVtU3RyaW5nIiwib25TZWxlY3QiLCJjaGlsZHJlbiIsIm9uTW91c2VVcCIsIm9uVG91Y2hFbmQiLCJpc1NlbGVjdGVkIiwiaXNIaWdobGlnaHRlZCIsInNldFN0YXRlIiwidGFyZ2V0UmVmIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicG9zaXRpb24iLCJwb3BvdmVyTWluV2lkdGgiLCJkZWZhdWx0U2VsZWN0ZWRJdGVtIiwiaW5pdGlhbFNlbGVjdGVkSXRlbSIsImRlZmF1bHRJbnB1dFZhbHVlIiwiaW5pdGlhbElucHV0VmFsdWUiLCJnZXRCdXR0b25Qcm9wcyIsImdldFRvZ2dsZUJ1dHRvblByb3BzIiwic3RhdGVSZWR1Y2VyIiwiaXNTaG93biIsImdldFJvb3RQcm9wcyIsInJlc3REb3duc2hpZnRQcm9wcyIsInJlZktleSIsIkJPVFRPTV9MRUZUIiwiQk9UVE9NIiwicmVuZGVyUmVzdWx0cyIsIm1heCIsImlzU2hvd25Qb3BvdmVyIiwidG9nZ2xlIiwiZ2V0UmVmIiwicmVmIiwib25lT2ZUeXBlIiwic3RyaW5nIiwibm9kZSIsImFycmF5IiwiaXNSZXF1aXJlZCIsImFueSIsImZ1bmMiLCJudW1iZXIiLCJvbmVPZiIsImtleXMiLCJib29sIiwicHJvcFR5cGVzIiwiaSIsIlN0cmluZyJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdXRvY29tcGxldGUvc3JjL0F1dG9jb21wbGV0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IGZ1enphbGRyaW4gZnJvbSAnZnV6emFsZHJpbi1wbHVzJ1xuaW1wb3J0IERvd25zaGlmdCBmcm9tICdkb3duc2hpZnQnXG5pbXBvcnQgVmlydHVhbExpc3QgZnJvbSAncmVhY3QtdGlueS12aXJ0dWFsLWxpc3QnXG5pbXBvcnQgeyBQb3BvdmVyIH0gZnJvbSAnLi4vLi4vcG9wb3ZlcidcbmltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJ1xuaW1wb3J0IHsgSGVhZGluZyB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknXG5pbXBvcnQgeyBQYW5lIH0gZnJvbSAnLi4vLi4vbGF5ZXJzJ1xuaW1wb3J0IGRlcHJlY2F0ZWQgZnJvbSAnLi4vLi4vbGliL2RlcHJlY2F0ZWQnXG5pbXBvcnQgQXV0b2NvbXBsZXRlSXRlbSBmcm9tICcuL0F1dG9jb21wbGV0ZUl0ZW0nXG5cbmNvbnN0IGZ1enp5RmlsdGVyID0gaXRlbVRvU3RyaW5nID0+IHtcbiAgaWYgKGl0ZW1Ub1N0cmluZykge1xuICAgIHJldHVybiAoaXRlbXMsIGlucHV0KSA9PiB7XG4gICAgICBjb25zdCB3cmFwcGVkSXRlbXMgPSBpdGVtcy5tYXAoaXRlbSA9PiAoe1xuICAgICAgICBrZXk6IGl0ZW1Ub1N0cmluZyhpdGVtKSxcbiAgICAgICAgaXRlbVxuICAgICAgfSkpXG5cbiAgICAgIHJldHVybiBmdXp6YWxkcmluXG4gICAgICAgIC5maWx0ZXIod3JhcHBlZEl0ZW1zLCBpbnB1dCwgeyBrZXk6ICdrZXknIH0pXG4gICAgICAgIC5tYXAoKHsgaXRlbSB9KSA9PiBpdGVtKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoaXRlbXMsIGlucHV0KSA9PiBmdXp6YWxkcmluLmZpbHRlcihpdGVtcywgaW5wdXQpXG59XG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7fVxuXG5jb25zdCBhdXRvY29tcGxldGVJdGVtUmVuZGVyZXIgPSBwcm9wcyA9PiA8QXV0b2NvbXBsZXRlSXRlbSB7Li4ucHJvcHN9IC8+XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wYXlwYWwvZG93bnNoaWZ0L2lzc3Vlcy8xNjRcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dG9jb21wbGV0ZSBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIFRoaXMgcHJvcCBjYW4gYmUgZWl0aGVyIGEgc3RyaW5nIG9yIGEgTm9kZS5cbiAgICAgKiBJdCB3aWxsIHByb3ZpZGUgYSB0aXRsZSBmb3IgdGhlIGl0ZW1zXG4gICAgICovXG4gICAgdGl0bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5ub2RlXSksXG5cbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiBpdGVtcyB0byBiZSB1c2VkIGFzIG9wdGlvbnMgZm9yIHRoZSBzZWxlY3RcbiAgICAgKi9cbiAgICBpdGVtczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2VsZWN0ZWQgSXRlbSB0byBiZSBzaG93biBvbiB0aGUgYXV0b2NvbXBsZXRlXG4gICAgICovXG4gICAgc2VsZWN0ZWRJdGVtOiBQcm9wVHlwZXMuYW55LFxuXG4gICAgLyoqXG4gICAgICogVGhlIHNlbGVjdGVkIGl0ZW0gdG8gYmUgc2VsZWN0ZWQgJiBzaG93biBieSBkZWZhdWx0IG9uIHRoZSBhdXRvY29tcGxldGUgKGRlcHJlY2F0ZWQpXG4gICAgICovXG4gICAgZGVmYXVsdFNlbGVjdGVkSXRlbTogZGVwcmVjYXRlZChcbiAgICAgIFByb3BUeXBlcy5hbnksXG4gICAgICAnVXNlIFwiaW5pdGlhbFNlbGVjdGVkSXRlbVwiIGluc3RlYWQuJ1xuICAgICksXG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2VsZWN0ZWQgaXRlbSB0byBiZSBzZWxlY3RlZCAmIHNob3duIGJ5IGRlZmF1bHQgb24gdGhlIGF1dG9jb21wbGV0ZSAoZGVwcmVjYXRlZClcbiAgICAgKi9cbiAgICBkZWZhdWx0SW5wdXRWYWx1ZTogZGVwcmVjYXRlZChcbiAgICAgIFByb3BUeXBlcy5hbnksXG4gICAgICAnVXNlIFwiaW5pdGlhbElucHV0VmFsdWVcIiBpbnN0ZWFkLidcbiAgICApLFxuXG4gICAgLyoqXG4gICAgICogSW4gY2FzZSB0aGUgYXJyYXkgb2YgaXRlbXMgaXMgbm90IGFuIGFycmF5IG9mIHN0cmluZ3MsXG4gICAgICogdGhpcyBmdW5jdGlvbiBpcyB1c2VkIG9uIGVhY2ggaXRlbSB0byByZXR1cm4gdGhlIHN0cmluZyB0aGF0IHdpbGwgYmUgc2hvd24gb24gdGhlIGZpbHRlclxuICAgICAqL1xuICAgIGl0ZW1Ub1N0cmluZzogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRoYXQgd2lsbCByZW5kZXIgdGhlICdmaWx0ZXInIGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBoZWlnaHQgb2YgZWFjaCBpdGVtIGluIHRoZSBsaXN0XG4gICAgICogQmVjYXVzZSB0aGUgbGlzdCBpcyB2aXJ0dWFsaXplZCB0aGlzIGlzIHJlcXVpcmVkIGJlZm9yZWhhbmQuXG4gICAgICovXG4gICAgaXRlbVNpemU6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IHJldHVybnMgYSBjb21wb25lbnQgdG8gcmVuZGVyIHRoZSBpdGVtXG4gICAgICovXG4gICAgcmVuZGVySXRlbTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgcG9zaXRpb24gb2YgdGhlIFBvcG92ZXIgdGhlIEF1dG9jb21wbGV0ZSBpcyByZW5kZXJlZCBpbi5cbiAgICAgKi9cbiAgICBwb3NpdGlvbjogUHJvcFR5cGVzLm9uZU9mKE9iamVjdC5rZXlzKFBvc2l0aW9uKSksXG5cbiAgICAvKipcbiAgICAgKiBBIGZ1bmN0aW9uIHRoYXQgaXMgdXNlZCB0byBmaWx0ZXIgdGhlIGl0ZW1zLlxuICAgICAqIEl0IHNob3VsZCByZXR1cm4gYSBzdWJzZXQgb2YgdGhlIGluaXRpYWwgaXRlbXMuXG4gICAgICogQnkgZGVmYXVsdCB0aGUgXCJmdXp6YWxkcmluLXBsdXNcIiBwYWNrYWdlIGlzIHVzZWQuXG4gICAgICovXG4gICAgaXRlbXNGaWx0ZXI6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogUHJvcCB0aGF0IGVuYWJsZXMgYW5kIGRpc2FibGVzIGZpbHRlcmluZ1xuICAgICAqIFRydWU6IEVuYWJsZXMgRmlsdGVyaW5nXG4gICAgICogRmFsc2U6IERpc2FibGVzIEZpbHRlcmluZ1xuICAgICAqL1xuICAgIGlzRmlsdGVyRGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogRGVmaW5lcyB0aGUgbWluaW11bSBoZWlnaHQgdGhlIHJlc3VsdHMgY29udGFpbmVyIHdpbGwgYmVcbiAgICAgKi9cbiAgICBwb3BvdmVyTWluV2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIHRoZSBtYXhpbXVtIGhlaWdodCB0aGUgcmVzdWx0cyBjb250YWluZXIgd2lsbCBiZVxuICAgICAqL1xuICAgIHBvcG92ZXJNYXhIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2VsZWN0ZWQgaXRlbSB0byBiZSBzZWxlY3RlZCAmIHNob3duIGJ5IGRlZmF1bHQgb24gdGhlIGF1dG9jb21wbGV0ZSAoZGVwcmVjYXRlZClcbiAgICAgKi9cbiAgICBnZXRCdXR0b25Qcm9wczogZGVwcmVjYXRlZChcbiAgICAgIFByb3BUeXBlcy5mdW5jLFxuICAgICAgJ1VzZSBcImdldFRvZ2dsZUJ1dHRvblByb3BzXCIgaW5zdGVhZC4nXG4gICAgKSxcblxuICAgIC4uLkRvd25zaGlmdC5wcm9wVHlwZXNcbiAgfVxuXG4gIHN0YXRlID0ge1xuICAgIHRhcmdldFdpZHRoOiAwXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGl0ZW1Ub1N0cmluZzogaSA9PiAoaSA/IFN0cmluZyhpKSA6ICcnKSxcbiAgICBpdGVtU2l6ZTogMzIsXG4gICAgaXNGaWx0ZXJEaXNhYmxlZDogZmFsc2UsXG4gICAgcG9wb3Zlck1pbldpZHRoOiAyNDAsXG4gICAgcG9wb3Zlck1heEhlaWdodDogMjQwLFxuICAgIHJlbmRlckl0ZW06IGF1dG9jb21wbGV0ZUl0ZW1SZW5kZXJlclxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0YXJnZXRXaWR0aDogdGhpcy50YXJnZXRSZWYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGhcbiAgICB9KVxuICB9XG5cbiAgc3RhdGVSZWR1Y2VyID0gKHN0YXRlLCBjaGFuZ2VzKSA9PiB7XG4gICAgY29uc3QgeyBpdGVtcyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgaWYgKFxuICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGNoYW5nZXMsICdpc09wZW4nKSAmJlxuICAgICAgY2hhbmdlcy5pc09wZW5cbiAgICApIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmNoYW5nZXMsXG4gICAgICAgIGhpZ2hsaWdodGVkSW5kZXg6IGl0ZW1zLmluZGV4T2Yoc3RhdGUuc2VsZWN0ZWRJdGVtKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjaGFuZ2VzXG4gIH1cblxuICByZW5kZXJSZXN1bHRzID0gKHtcbiAgICB3aWR0aCxcbiAgICBpbnB1dFZhbHVlLFxuICAgIGhpZ2hsaWdodGVkSW5kZXgsXG4gICAgc2VsZWN0SXRlbUF0SW5kZXgsXG4gICAgc2VsZWN0ZWRJdGVtLFxuICAgIGdldEl0ZW1Qcm9wc1xuICB9KSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgdGl0bGUsXG4gICAgICBpdGVtU2l6ZSxcbiAgICAgIGl0ZW1zRmlsdGVyLFxuICAgICAgaXRlbXM6IG9yaWdpbmFsSXRlbXMsXG4gICAgICBpdGVtVG9TdHJpbmcsXG4gICAgICByZW5kZXJJdGVtLFxuICAgICAgcG9wb3Zlck1heEhlaWdodCxcbiAgICAgIGlzRmlsdGVyRGlzYWJsZWRcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgZmlsdGVyID0gaXRlbXNGaWx0ZXIgfHwgZnV6enlGaWx0ZXIoaXRlbVRvU3RyaW5nKVxuICAgIGNvbnN0IGl0ZW1zID1cbiAgICAgIGlzRmlsdGVyRGlzYWJsZWQgfHwgaW5wdXRWYWx1ZS50cmltKCkgPT09ICcnXG4gICAgICAgID8gb3JpZ2luYWxJdGVtc1xuICAgICAgICA6IGZpbHRlcihvcmlnaW5hbEl0ZW1zLCBpbnB1dFZhbHVlKVxuXG4gICAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGxcblxuICAgIHJldHVybiAoXG4gICAgICA8UGFuZSB3aWR0aD17d2lkdGh9PlxuICAgICAgICB7dGl0bGUgJiYgKFxuICAgICAgICAgIDxQYW5lIHBhZGRpbmc9ezh9IGJvcmRlckJvdHRvbT1cIm11dGVkXCI+XG4gICAgICAgICAgICA8SGVhZGluZyBzaXplPXsxMDB9Pnt0aXRsZX08L0hlYWRpbmc+XG4gICAgICAgICAgPC9QYW5lPlxuICAgICAgICApfVxuICAgICAgICB7aXRlbXMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgPFZpcnR1YWxMaXN0XG4gICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgaGVpZ2h0PXtNYXRoLm1pbihpdGVtcy5sZW5ndGggKiBpdGVtU2l6ZSwgcG9wb3Zlck1heEhlaWdodCl9XG4gICAgICAgICAgICBpdGVtU2l6ZT17aXRlbVNpemV9XG4gICAgICAgICAgICBpdGVtQ291bnQ9e2l0ZW1zLmxlbmd0aH1cbiAgICAgICAgICAgIHNjcm9sbFRvSW5kZXg9e2hpZ2hsaWdodGVkSW5kZXggfHwgMH1cbiAgICAgICAgICAgIG92ZXJzY2FuQ291bnQ9ezN9XG4gICAgICAgICAgICBzY3JvbGxUb0FsaWdubWVudD1cImF1dG9cIlxuICAgICAgICAgICAgcmVuZGVySXRlbT17KHsgaW5kZXgsIHN0eWxlIH0pID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IGl0ZW1zW2luZGV4XVxuICAgICAgICAgICAgICBjb25zdCBpdGVtU3RyaW5nID0gaXRlbVRvU3RyaW5nKGl0ZW0pXG4gICAgICAgICAgICAgIGNvbnN0IG9uU2VsZWN0ID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGVjdEl0ZW1BdEluZGV4KGluZGV4KVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlckl0ZW0oXG4gICAgICAgICAgICAgICAgZ2V0SXRlbVByb3BzKHtcbiAgICAgICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgICAgICBrZXk6IGl0ZW1TdHJpbmcsXG4gICAgICAgICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgICAgICAgIHN0eWxlLFxuICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IGl0ZW1TdHJpbmcsXG4gICAgICAgICAgICAgICAgICBvbk1vdXNlVXA6IG9uU2VsZWN0LFxuICAgICAgICAgICAgICAgICAgb25Ub3VjaEVuZDogb25TZWxlY3QsXG4gICAgICAgICAgICAgICAgICBpc1NlbGVjdGVkOiBpdGVtVG9TdHJpbmcoc2VsZWN0ZWRJdGVtKSA9PT0gaXRlbVN0cmluZyxcbiAgICAgICAgICAgICAgICAgIGlzSGlnaGxpZ2h0ZWQ6IGhpZ2hsaWdodGVkSW5kZXggPT09IGluZGV4XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9QYW5lPlxuICAgIClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjaGlsZHJlbixcbiAgICAgIGl0ZW1TaXplLFxuICAgICAgcG9zaXRpb24sXG4gICAgICByZW5kZXJJdGVtLFxuICAgICAgaXRlbXNGaWx0ZXIsXG4gICAgICBwb3BvdmVyTWF4SGVpZ2h0LFxuICAgICAgcG9wb3Zlck1pbldpZHRoLFxuICAgICAgZGVmYXVsdFNlbGVjdGVkSXRlbSwgLy8gRGVwcmVjYXRlZFxuICAgICAgaW5pdGlhbFNlbGVjdGVkSXRlbSxcbiAgICAgIGRlZmF1bHRJbnB1dFZhbHVlLCAvLyBEZXByZWNhdGVkXG4gICAgICBpbml0aWFsSW5wdXRWYWx1ZSxcbiAgICAgIGdldEJ1dHRvblByb3BzLCAvLyBEZXByZWNhdGVkXG4gICAgICBnZXRUb2dnbGVCdXR0b25Qcm9wcyxcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8RG93bnNoaWZ0XG4gICAgICAgIGluaXRpYWxTZWxlY3RlZEl0ZW09e2luaXRpYWxTZWxlY3RlZEl0ZW0gfHwgZGVmYXVsdFNlbGVjdGVkSXRlbX1cbiAgICAgICAgaW5pdGlhbElucHV0VmFsdWU9e2luaXRpYWxJbnB1dFZhbHVlIHx8IGRlZmF1bHRJbnB1dFZhbHVlfVxuICAgICAgICBnZXRUb2dnbGVCdXR0b25Qcm9wcz17Z2V0VG9nZ2xlQnV0dG9uUHJvcHMgfHwgZ2V0QnV0dG9uUHJvcHN9XG4gICAgICAgIHN0YXRlUmVkdWNlcj17dGhpcy5zdGF0ZVJlZHVjZXJ9XG4gICAgICAgIHNjcm9sbEludG9WaWV3PXtub29wfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICA+XG4gICAgICAgIHsoe1xuICAgICAgICAgIGlzT3BlbjogaXNTaG93bixcbiAgICAgICAgICBpbnB1dFZhbHVlLFxuICAgICAgICAgIGdldEl0ZW1Qcm9wcyxcbiAgICAgICAgICBzZWxlY3RlZEl0ZW0sXG4gICAgICAgICAgaGlnaGxpZ2h0ZWRJbmRleCxcbiAgICAgICAgICBzZWxlY3RJdGVtQXRJbmRleCxcbiAgICAgICAgICBnZXRSb290UHJvcHMsXG4gICAgICAgICAgLi4ucmVzdERvd25zaGlmdFByb3BzXG4gICAgICAgIH0pID0+IChcbiAgICAgICAgICA8UGFuZSB3aWR0aD1cIjEwMCVcIiB7Li4uZ2V0Um9vdFByb3BzKHsgcmVmS2V5OiAnaW5uZXJSZWYnIH0pfT5cbiAgICAgICAgICAgIDxQb3BvdmVyXG4gICAgICAgICAgICAgIGJyaW5nRm9jdXNJbnNpZGU9e2ZhbHNlfVxuICAgICAgICAgICAgICBpc1Nob3duPXtpc1Nob3dufVxuICAgICAgICAgICAgICBtaW5XaWR0aD17cG9wb3Zlck1pbldpZHRofVxuICAgICAgICAgICAgICBwb3NpdGlvbj17XG4gICAgICAgICAgICAgICAgcG9zaXRpb24gfHxcbiAgICAgICAgICAgICAgICAodGhpcy5zdGF0ZS50YXJnZXRXaWR0aCA8IHBvcG92ZXJNaW5XaWR0aFxuICAgICAgICAgICAgICAgICAgPyBQb3NpdGlvbi5CT1RUT01fTEVGVFxuICAgICAgICAgICAgICAgICAgOiBQb3NpdGlvbi5CT1RUT00pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29udGVudD17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlclJlc3VsdHMoe1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IE1hdGgubWF4KHRoaXMuc3RhdGUudGFyZ2V0V2lkdGgsIHBvcG92ZXJNaW5XaWR0aCksXG4gICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlLFxuICAgICAgICAgICAgICAgICAgZ2V0SXRlbVByb3BzLFxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtLFxuICAgICAgICAgICAgICAgICAgaGlnaGxpZ2h0ZWRJbmRleCxcbiAgICAgICAgICAgICAgICAgIHNlbGVjdEl0ZW1BdEluZGV4XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgbWluSGVpZ2h0PXswfVxuICAgICAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbj17MH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgeyh7IGlzU2hvd246IGlzU2hvd25Qb3BvdmVyLCB0b2dnbGUsIGdldFJlZiB9KSA9PlxuICAgICAgICAgICAgICAgIGNoaWxkcmVuKHtcbiAgICAgICAgICAgICAgICAgIGlzU2hvd246IGlzU2hvd25Qb3BvdmVyLFxuICAgICAgICAgICAgICAgICAgdG9nZ2xlLFxuICAgICAgICAgICAgICAgICAgZ2V0UmVmOiByZWYgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBVc2UgdGhlIHJlZiBpbnRlcm5hbGx5IHRvIGRldGVybWluZSB0aGUgd2lkdGhcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YXJnZXRSZWYgPSByZWZcbiAgICAgICAgICAgICAgICAgICAgZ2V0UmVmKHJlZilcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlLFxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtLFxuICAgICAgICAgICAgICAgICAgaGlnaGxpZ2h0ZWRJbmRleCxcbiAgICAgICAgICAgICAgICAgIHNlbGVjdEl0ZW1BdEluZGV4LFxuICAgICAgICAgICAgICAgICAgLi4ucmVzdERvd25zaGlmdFByb3BzXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgKX1cbiAgICAgIDwvRG93bnNoaWZ0PlxuICAgIClcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLGFBQWhCLFFBQXFDLE9BQXJDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLFVBQVAsTUFBdUIsaUJBQXZCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixXQUF0QjtBQUNBLE9BQU9DLFdBQVAsTUFBd0IseUJBQXhCO0FBQ0EsU0FBU0MsT0FBVCxRQUF3QixlQUF4QjtBQUNBLFNBQVNDLFFBQVQsUUFBeUIsaUJBQXpCO0FBQ0EsU0FBU0MsT0FBVCxRQUF3QixrQkFBeEI7QUFDQSxTQUFTQyxJQUFULFFBQXFCLGNBQXJCO0FBQ0EsT0FBT0MsVUFBUCxNQUF1QixzQkFBdkI7QUFDQSxPQUFPQyxnQkFBUCxNQUE2QixvQkFBN0I7O0FBRUEsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQUMsWUFBWSxFQUFJO0VBQ2xDLElBQUlBLFlBQUosRUFBa0I7SUFDaEIsT0FBTyxVQUFDQyxLQUFELEVBQVFDLEtBQVIsRUFBa0I7TUFDdkIsSUFBTUMsWUFBWSxHQUFHRixLQUFLLENBQUNHLEdBQU4sQ0FBVSxVQUFBQyxJQUFJO1FBQUEsT0FBSztVQUN0Q0MsR0FBRyxFQUFFTixZQUFZLENBQUNLLElBQUQsQ0FEcUI7VUFFdENBLElBQUksRUFBSkE7UUFGc0MsQ0FBTDtNQUFBLENBQWQsQ0FBckI7TUFLQSxPQUFPZixVQUFVLENBQ2RpQixNQURJLENBQ0dKLFlBREgs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