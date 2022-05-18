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

var _downshift = _interopRequireDefault(require("downshift"));

var _reactTinyVirtualList = _interopRequireDefault(require("react-tiny-virtual-list"));

var _popover = require("../../popover");

var _constants = require("../../constants");

var _typography = require("../../typography");

var _layers = require("../../layers");

var _deprecated = _interopRequireDefault(require("../../lib/deprecated"));

var _AutocompleteItem = _interopRequireDefault(require("./AutocompleteItem"));

var _excluded = ["children", "itemSize", "position", "renderItem", "itemsFilter", "popoverMaxHeight", "popoverMinWidth", "defaultSelectedItem", "initialSelectedItem", "defaultInputValue", "initialInputValue", "getButtonProps", "getToggleButtonProps"],
    _excluded2 = ["isOpen", "inputValue", "getItemProps", "selectedItem", "highlightedIndex", "selectItemAtIndex", "getRootProps"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var fuzzyFilter = function fuzzyFilter(itemToString) {
  if (itemToString) {
    return function (items, input) {
      var wrappedItems = items.map(function (item) {
        return {
          key: itemToString(item),
          item: item
        };
      });
      return _fuzzaldrinPlus["default"].filter(wrappedItems, input, {
        key: 'key'
      }).map(function (_ref) {
        var item = _ref.item;
        return item;
      });
    };
  }

  return function (items, input) {
    return _fuzzaldrinPlus["default"].filter(items, input);
  };
};

var noop = function noop() {};

var autocompleteItemRenderer = function autocompleteItemRenderer(props) {
  return /*#__PURE__*/_react["default"].createElement(_AutocompleteItem["default"], props);
};

autocompleteItemRenderer.displayName = "autocompleteItemRenderer";

// https://github.com/paypal/downshift/issues/164
var Autocomplete = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Autocomplete, _PureComponent);

  var _super = _createSuper(Autocomplete);

  function Autocomplete() {
    var _this;

    (0, _classCallCheck2["default"])(this, Autocomplete);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      targetWidth: 0
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "stateReducer", function (state, changes) {
      var items = _this.props.items;

      if (Object.prototype.hasOwnProperty.call(changes, 'isOpen') && changes.isOpen) {
        return _objectSpread(_objectSpread({}, changes), {}, {
          highlightedIndex: items.indexOf(state.selectedItem)
        });
      }

      return changes;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderResults", function (_ref2) {
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
      return /*#__PURE__*/_react["default"].createElement(_layers.Pane, {
        width: width
      }, title && /*#__PURE__*/_react["default"].createElement(_layers.Pane, {
        padding: 8,
        borderBottom: "muted"
      }, /*#__PURE__*/_react["default"].createElement(_typography.Heading, {
        size: 100
      }, title)), items.length > 0 && /*#__PURE__*/_react["default"].createElement(_reactTinyVirtualList["default"], {
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

  (0, _createClass2["default"])(Autocomplete, [{
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
          props = (0, _objectWithoutProperties2["default"])(_this$props2, _excluded);
      return /*#__PURE__*/_react["default"].createElement(_downshift["default"], (0, _extends2["default"])({
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
            restDownshiftProps = (0, _objectWithoutProperties2["default"])(_ref4, _excluded2);
        return /*#__PURE__*/_react["default"].createElement(_layers.Pane, (0, _extends2["default"])({
          width: "100%"
        }, getRootProps({
          refKey: 'innerRef'
        })), /*#__PURE__*/_react["default"].createElement(_popover.Popover, {
          bringFocusInside: false,
          isShown: isShown,
          minWidth: popoverMinWidth,
          position: position || (_this2.state.targetWidth < popoverMinWidth ? _constants.Position.BOTTOM_LEFT : _constants.Position.BOTTOM),
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
}(_react.PureComponent);

exports["default"] = Autocomplete;
Autocomplete.displayName = "Autocomplete";
(0, _defineProperty2["default"])(Autocomplete, "propTypes", _objectSpread({
  /**
   * This prop can be either a string or a Node.
   * It will provide a title for the items
   */
  title: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),

  /**
   * An array of items to be used as options for the select
   */
  items: _propTypes["default"].array.isRequired,

  /**
   * The selected Item to be shown on the autocomplete
   */
  selectedItem: _propTypes["default"].any,

  /**
   * The selected item to be selected & shown by default on the autocomplete (deprecated)
   */
  defaultSelectedItem: (0, _deprecated["default"])(_propTypes["default"].any, 'Use "initialSelectedItem" instead.'),

  /**
   * The selected item to be selected & shown by default on the autocomplete (deprecated)
   */
  defaultInputValue: (0, _deprecated["default"])(_propTypes["default"].any, 'Use "initialInputValue" instead.'),

  /**
   * In case the array of items is not an array of strings,
   * this function is used on each item to return the string that will be shown on the filter
   */
  itemToString: _propTypes["default"].func.isRequired,

  /**
   * Function that will render the 'filter' component.
   */
  children: _propTypes["default"].func.isRequired,

  /**
   * The height of each item in the list
   * Because the list is virtualized this is required beforehand.
   */
  itemSize: _propTypes["default"].number,

  /**
   * Function that returns a component to render the item
   */
  renderItem: _propTypes["default"].func,

  /**
   * The position of the Popover the Autocomplete is rendered in.
   */
  position: _propTypes["default"].oneOf(Object.keys(_constants.Position)),

  /**
   * A function that is used to filter the items.
   * It should return a subset of the initial items.
   * By default the "fuzzaldrin-plus" package is used.
   */
  itemsFilter: _propTypes["default"].func,

  /**
   * Prop that enables and disables filtering
   * True: Enables Filtering
   * False: Disables Filtering
   */
  isFilterDisabled: _propTypes["default"].bool,

  /**
   * Defines the minimum height the results container will be
   */
  popoverMinWidth: _propTypes["default"].number,

  /**
   * Defines the maximum height the results container will be
   */
  popoverMaxHeight: _propTypes["default"].number,

  /**
   * The selected item to be selected & shown by default on the autocomplete (deprecated)
   */
  getButtonProps: (0, _deprecated["default"])(_propTypes["default"].func, 'Use "getToggleButtonProps" instead.')
}, _downshift["default"].propTypes));
(0, _defineProperty2["default"])(Autocomplete, "defaultProps", {
  itemToString: function itemToString(i) {
    return i ? String(i) : '';
  },
  itemSize: 32,
  isFilterDisabled: false,
  popoverMinWidth: 240,
  popoverMaxHeight: 240,
  renderItem: autocompleteItemRenderer
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJmdXp6eUZpbHRlciIsIml0ZW1Ub1N0cmluZyIsIml0ZW1zIiwiaW5wdXQiLCJ3cmFwcGVkSXRlbXMiLCJtYXAiLCJpdGVtIiwia2V5IiwiZnV6emFsZHJpbiIsImZpbHRlciIsIm5vb3AiLCJhdXRvY29tcGxldGVJdGVtUmVuZGVyZXIiLCJwcm9wcyIsIkF1dG9jb21wbGV0ZSIsInRhcmdldFdpZHRoIiwic3RhdGUiLCJjaGFuZ2VzIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiaXNPcGVuIiwiaGlnaGxpZ2h0ZWRJbmRleCIsImluZGV4T2YiLCJzZWxlY3RlZEl0ZW0iLCJ3aWR0aCIsImlucHV0VmFsdWUiLCJzZWxlY3RJdGVtQXRJbmRleCIsImdldEl0ZW1Qcm9wcyIsInRpdGxlIiwiaXRlbVNpemUiLCJpdGVtc0ZpbHRlciIsIm9yaWdpbmFsSXRlbXMiLCJyZW5kZXJJdGVtIiwicG9wb3Zlck1heEhlaWdodCIsImlzRmlsdGVyRGlzYWJsZWQiLCJ0cmltIiwibGVuZ3RoIiwiTWF0aCIsIm1pbiIsImluZGV4Iiwic3R5bGUiLCJpdGVtU3RyaW5nIiwib25TZWxlY3QiLCJjaGlsZHJlbiIsIm9uTW91c2VVcCIsIm9uVG91Y2hFbmQiLCJpc1NlbGVjdGVkIiwiaXNIaWdobGlnaHRlZCIsInNldFN0YXRlIiwidGFyZ2V0UmVmIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicG9zaXRpb24iLCJwb3BvdmVyTWluV2lkdGgiLCJkZWZhdWx0U2VsZWN0ZWRJdGVtIiwiaW5pdGlhbFNlbGVjdGVkSXRlbSIsImRlZmF1bHRJbnB1dFZhbHVlIiwiaW5pdGlhbElucHV0VmFsdWUiLCJnZXRCdXR0b25Qcm9wcyIsImdldFRvZ2dsZUJ1dHRvblByb3BzIiwic3RhdGVSZWR1Y2VyIiwiaXNTaG93biIsImdldFJvb3RQcm9wcyIsInJlc3REb3duc2hpZnRQcm9wcyIsInJlZktleSIsIlBvc2l0aW9uIiwiQk9UVE9NX0xFRlQiLCJCT1RUT00iLCJyZW5kZXJSZXN1bHRzIiwibWF4IiwiaXNTaG93blBvcG92ZXIiLCJ0b2dnbGUiLCJnZXRSZWYiLCJyZWYiLCJQdXJlQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwib25lT2ZUeXBlIiwic3RyaW5nIiwibm9kZSIsImFycmF5IiwiaXNSZXF1aXJlZCIsImFueSIsImRlcHJlY2F0ZWQiLCJmdW5jIiwibnVtYmVyIiwib25lT2YiLCJrZXlzIiwiYm9vbCIsIkRvd25zaGlmdCIsInByb3BUeXBlcyIsImkiLCJTdHJpbmciXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXV0b2NvbXBsZXRlL3NyYy9BdXRvY29tcGxldGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBmdXp6YWxkcmluIGZyb20gJ2Z1enphbGRyaW4tcGx1cydcbmltcG9ydCBEb3duc2hpZnQgZnJvbSAnZG93bnNoaWZ0J1xuaW1wb3J0IFZpcnR1YWxMaXN0IGZyb20gJ3JlYWN0LXRpbnktdmlydHVhbC1saXN0J1xuaW1wb3J0IHsgUG9wb3ZlciB9IGZyb20gJy4uLy4uL3BvcG92ZXInXG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gJy4uLy4uL2NvbnN0YW50cydcbmltcG9ydCB7IEhlYWRpbmcgfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuaW1wb3J0IHsgUGFuZSB9IGZyb20gJy4uLy4uL2xheWVycydcbmltcG9ydCBkZXByZWNhdGVkIGZyb20gJy4uLy4uL2xpYi9kZXByZWNhdGVkJ1xuaW1wb3J0IEF1dG9jb21wbGV0ZUl0ZW0gZnJvbSAnLi9BdXRvY29tcGxldGVJdGVtJ1xuXG5jb25zdCBmdXp6eUZpbHRlciA9IGl0ZW1Ub1N0cmluZyA9PiB7XG4gIGlmIChpdGVtVG9TdHJpbmcpIHtcbiAgICByZXR1cm4gKGl0ZW1zLCBpbnB1dCkgPT4ge1xuICAgICAgY29uc3Qgd3JhcHBlZEl0ZW1zID0gaXRlbXMubWFwKGl0ZW0gPT4gKHtcbiAgICAgICAga2V5OiBpdGVtVG9TdHJpbmcoaXRlbSksXG4gICAgICAgIGl0ZW1cbiAgICAgIH0pKVxuXG4gICAgICByZXR1cm4gZnV6emFsZHJpblxuICAgICAgICAuZmlsdGVyKHdyYXBwZWRJdGVtcywgaW5wdXQsIHsga2V5OiAna2V5JyB9KVxuICAgICAgICAubWFwKCh7IGl0ZW0gfSkgPT4gaXRlbSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKGl0ZW1zLCBpbnB1dCkgPT4gZnV6emFsZHJpbi5maWx0ZXIoaXRlbXMsIGlucHV0KVxufVxuXG5jb25zdCBub29wID0gKCkgPT4ge31cblxuY29uc3QgYXV0b2NvbXBsZXRlSXRlbVJlbmRlcmVyID0gcHJvcHMgPT4gPEF1dG9jb21wbGV0ZUl0ZW0gey4uLnByb3BzfSAvPlxuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vcGF5cGFsL2Rvd25zaGlmdC9pc3N1ZXMvMTY0XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRvY29tcGxldGUgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBUaGlzIHByb3AgY2FuIGJlIGVpdGhlciBhIHN0cmluZyBvciBhIE5vZGUuXG4gICAgICogSXQgd2lsbCBwcm92aWRlIGEgdGl0bGUgZm9yIHRoZSBpdGVtc1xuICAgICAqL1xuICAgIHRpdGxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubm9kZV0pLFxuXG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2YgaXRlbXMgdG8gYmUgdXNlZCBhcyBvcHRpb25zIGZvciB0aGUgc2VsZWN0XG4gICAgICovXG4gICAgaXRlbXM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHNlbGVjdGVkIEl0ZW0gdG8gYmUgc2hvd24gb24gdGhlIGF1dG9jb21wbGV0ZVxuICAgICAqL1xuICAgIHNlbGVjdGVkSXRlbTogUHJvcFR5cGVzLmFueSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBzZWxlY3RlZCBpdGVtIHRvIGJlIHNlbGVjdGVkICYgc2hvd24gYnkgZGVmYXVsdCBvbiB0aGUgYXV0b2NvbXBsZXRlIChkZXByZWNhdGVkKVxuICAgICAqL1xuICAgIGRlZmF1bHRTZWxlY3RlZEl0ZW06IGRlcHJlY2F0ZWQoXG4gICAgICBQcm9wVHlwZXMuYW55LFxuICAgICAgJ1VzZSBcImluaXRpYWxTZWxlY3RlZEl0ZW1cIiBpbnN0ZWFkLidcbiAgICApLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHNlbGVjdGVkIGl0ZW0gdG8gYmUgc2VsZWN0ZWQgJiBzaG93biBieSBkZWZhdWx0IG9uIHRoZSBhdXRvY29tcGxldGUgKGRlcHJlY2F0ZWQpXG4gICAgICovXG4gICAgZGVmYXVsdElucHV0VmFsdWU6IGRlcHJlY2F0ZWQoXG4gICAgICBQcm9wVHlwZXMuYW55LFxuICAgICAgJ1VzZSBcImluaXRpYWxJbnB1dFZhbHVlXCIgaW5zdGVhZC4nXG4gICAgKSxcblxuICAgIC8qKlxuICAgICAqIEluIGNhc2UgdGhlIGFycmF5IG9mIGl0ZW1zIGlzIG5vdCBhbiBhcnJheSBvZiBzdHJpbmdzLFxuICAgICAqIHRoaXMgZnVuY3Rpb24gaXMgdXNlZCBvbiBlYWNoIGl0ZW0gdG8gcmV0dXJuIHRoZSBzdHJpbmcgdGhhdCB3aWxsIGJlIHNob3duIG9uIHRoZSBmaWx0ZXJcbiAgICAgKi9cbiAgICBpdGVtVG9TdHJpbmc6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IHdpbGwgcmVuZGVyIHRoZSAnZmlsdGVyJyBjb21wb25lbnQuXG4gICAgICovXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaGVpZ2h0IG9mIGVhY2ggaXRlbSBpbiB0aGUgbGlzdFxuICAgICAqIEJlY2F1c2UgdGhlIGxpc3QgaXMgdmlydHVhbGl6ZWQgdGhpcyBpcyByZXF1aXJlZCBiZWZvcmVoYW5kLlxuICAgICAqL1xuICAgIGl0ZW1TaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgY29tcG9uZW50IHRvIHJlbmRlciB0aGUgaXRlbVxuICAgICAqL1xuICAgIHJlbmRlckl0ZW06IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHBvc2l0aW9uIG9mIHRoZSBQb3BvdmVyIHRoZSBBdXRvY29tcGxldGUgaXMgcmVuZGVyZWQgaW4uXG4gICAgICovXG4gICAgcG9zaXRpb246IFByb3BUeXBlcy5vbmVPZihPYmplY3Qua2V5cyhQb3NpdGlvbikpLFxuXG4gICAgLyoqXG4gICAgICogQSBmdW5jdGlvbiB0aGF0IGlzIHVzZWQgdG8gZmlsdGVyIHRoZSBpdGVtcy5cbiAgICAgKiBJdCBzaG91bGQgcmV0dXJuIGEgc3Vic2V0IG9mIHRoZSBpbml0aWFsIGl0ZW1zLlxuICAgICAqIEJ5IGRlZmF1bHQgdGhlIFwiZnV6emFsZHJpbi1wbHVzXCIgcGFja2FnZSBpcyB1c2VkLlxuICAgICAqL1xuICAgIGl0ZW1zRmlsdGVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIFByb3AgdGhhdCBlbmFibGVzIGFuZCBkaXNhYmxlcyBmaWx0ZXJpbmdcbiAgICAgKiBUcnVlOiBFbmFibGVzIEZpbHRlcmluZ1xuICAgICAqIEZhbHNlOiBEaXNhYmxlcyBGaWx0ZXJpbmdcbiAgICAgKi9cbiAgICBpc0ZpbHRlckRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIERlZmluZXMgdGhlIG1pbmltdW0gaGVpZ2h0IHRoZSByZXN1bHRzIGNvbnRhaW5lciB3aWxsIGJlXG4gICAgICovXG4gICAgcG9wb3Zlck1pbldpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogRGVmaW5lcyB0aGUgbWF4aW11bSBoZWlnaHQgdGhlIHJlc3VsdHMgY29udGFpbmVyIHdpbGwgYmVcbiAgICAgKi9cbiAgICBwb3BvdmVyTWF4SGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHNlbGVjdGVkIGl0ZW0gdG8gYmUgc2VsZWN0ZWQgJiBzaG93biBieSBkZWZhdWx0IG9uIHRoZSBhdXRvY29tcGxldGUgKGRlcHJlY2F0ZWQpXG4gICAgICovXG4gICAgZ2V0QnV0dG9uUHJvcHM6IGRlcHJlY2F0ZWQoXG4gICAgICBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICdVc2UgXCJnZXRUb2dnbGVCdXR0b25Qcm9wc1wiIGluc3RlYWQuJ1xuICAgICksXG5cbiAgICAuLi5Eb3duc2hpZnQucHJvcFR5cGVzXG4gIH1cblxuICBzdGF0ZSA9IHtcbiAgICB0YXJnZXRXaWR0aDogMFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBpdGVtVG9TdHJpbmc6IGkgPT4gKGkgPyBTdHJpbmcoaSkgOiAnJyksXG4gICAgaXRlbVNpemU6IDMyLFxuICAgIGlzRmlsdGVyRGlzYWJsZWQ6IGZhbHNlLFxuICAgIHBvcG92ZXJNaW5XaWR0aDogMjQwLFxuICAgIHBvcG92ZXJNYXhIZWlnaHQ6IDI0MCxcbiAgICByZW5kZXJJdGVtOiBhdXRvY29tcGxldGVJdGVtUmVuZGVyZXJcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdGFyZ2V0V2lkdGg6IHRoaXMudGFyZ2V0UmVmLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoXG4gICAgfSlcbiAgfVxuXG4gIHN0YXRlUmVkdWNlciA9IChzdGF0ZSwgY2hhbmdlcykgPT4ge1xuICAgIGNvbnN0IHsgaXRlbXMgfSA9IHRoaXMucHJvcHNcblxuICAgIGlmIChcbiAgICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChjaGFuZ2VzLCAnaXNPcGVuJykgJiZcbiAgICAgIGNoYW5nZXMuaXNPcGVuXG4gICAgKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5jaGFuZ2VzLFxuICAgICAgICBoaWdobGlnaHRlZEluZGV4OiBpdGVtcy5pbmRleE9mKHN0YXRlLnNlbGVjdGVkSXRlbSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY2hhbmdlc1xuICB9XG5cbiAgcmVuZGVyUmVzdWx0cyA9ICh7XG4gICAgd2lkdGgsXG4gICAgaW5wdXRWYWx1ZSxcbiAgICBoaWdobGlnaHRlZEluZGV4LFxuICAgIHNlbGVjdEl0ZW1BdEluZGV4LFxuICAgIHNlbGVjdGVkSXRlbSxcbiAgICBnZXRJdGVtUHJvcHNcbiAgfSkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIHRpdGxlLFxuICAgICAgaXRlbVNpemUsXG4gICAgICBpdGVtc0ZpbHRlcixcbiAgICAgIGl0ZW1zOiBvcmlnaW5hbEl0ZW1zLFxuICAgICAgaXRlbVRvU3RyaW5nLFxuICAgICAgcmVuZGVySXRlbSxcbiAgICAgIHBvcG92ZXJNYXhIZWlnaHQsXG4gICAgICBpc0ZpbHRlckRpc2FibGVkXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IGZpbHRlciA9IGl0ZW1zRmlsdGVyIHx8IGZ1enp5RmlsdGVyKGl0ZW1Ub1N0cmluZylcbiAgICBjb25zdCBpdGVtcyA9XG4gICAgICBpc0ZpbHRlckRpc2FibGVkIHx8IGlucHV0VmFsdWUudHJpbSgpID09PSAnJ1xuICAgICAgICA/IG9yaWdpbmFsSXRlbXNcbiAgICAgICAgOiBmaWx0ZXIob3JpZ2luYWxJdGVtcywgaW5wdXRWYWx1ZSlcblxuICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHJldHVybiBudWxsXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBhbmUgd2lkdGg9e3dpZHRofT5cbiAgICAgICAge3RpdGxlICYmIChcbiAgICAgICAgICA8UGFuZSBwYWRkaW5nPXs4fSBib3JkZXJCb3R0b209XCJtdXRlZFwiPlxuICAgICAgICAgICAgPEhlYWRpbmcgc2l6ZT17MTAwfT57dGl0bGV9PC9IZWFkaW5nPlxuICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgKX1cbiAgICAgICAge2l0ZW1zLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgIDxWaXJ0dWFsTGlzdFxuICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgIGhlaWdodD17TWF0aC5taW4oaXRlbXMubGVuZ3RoICogaXRlbVNpemUsIHBvcG92ZXJNYXhIZWlnaHQpfVxuICAgICAgICAgICAgaXRlbVNpemU9e2l0ZW1TaXplfVxuICAgICAgICAgICAgaXRlbUNvdW50PXtpdGVtcy5sZW5ndGh9XG4gICAgICAgICAgICBzY3JvbGxUb0luZGV4PXtoaWdobGlnaHRlZEluZGV4IHx8IDB9XG4gICAgICAgICAgICBvdmVyc2NhbkNvdW50PXszfVxuICAgICAgICAgICAgc2Nyb2xsVG9BbGlnbm1lbnQ9XCJhdXRvXCJcbiAgICAgICAgICAgIHJlbmRlckl0ZW09eyh7IGluZGV4LCBzdHlsZSB9KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBpdGVtc1tpbmRleF1cbiAgICAgICAgICAgICAgY29uc3QgaXRlbVN0cmluZyA9IGl0ZW1Ub1N0cmluZyhpdGVtKVxuICAgICAgICAgICAgICBjb25zdCBvblNlbGVjdCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBzZWxlY3RJdGVtQXRJbmRleChpbmRleClcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiByZW5kZXJJdGVtKFxuICAgICAgICAgICAgICAgIGdldEl0ZW1Qcm9wcyh7XG4gICAgICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICAgICAga2V5OiBpdGVtU3RyaW5nLFxuICAgICAgICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICAgICAgICBzdHlsZSxcbiAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBpdGVtU3RyaW5nLFxuICAgICAgICAgICAgICAgICAgb25Nb3VzZVVwOiBvblNlbGVjdCxcbiAgICAgICAgICAgICAgICAgIG9uVG91Y2hFbmQ6IG9uU2VsZWN0LFxuICAgICAgICAgICAgICAgICAgaXNTZWxlY3RlZDogaXRlbVRvU3RyaW5nKHNlbGVjdGVkSXRlbSkgPT09IGl0ZW1TdHJpbmcsXG4gICAgICAgICAgICAgICAgICBpc0hpZ2hsaWdodGVkOiBoaWdobGlnaHRlZEluZGV4ID09PSBpbmRleFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvUGFuZT5cbiAgICApXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2hpbGRyZW4sXG4gICAgICBpdGVtU2l6ZSxcbiAgICAgIHBvc2l0aW9uLFxuICAgICAgcmVuZGVySXRlbSxcbiAgICAgIGl0ZW1zRmlsdGVyLFxuICAgICAgcG9wb3Zlck1heEhlaWdodCxcbiAgICAgIHBvcG92ZXJNaW5XaWR0aCxcbiAgICAgIGRlZmF1bHRTZWxlY3RlZEl0ZW0sIC8vIERlcHJlY2F0ZWRcbiAgICAgIGluaXRpYWxTZWxlY3RlZEl0ZW0sXG4gICAgICBkZWZhdWx0SW5wdXRWYWx1ZSwgLy8gRGVwcmVjYXRlZFxuICAgICAgaW5pdGlhbElucHV0VmFsdWUsXG4gICAgICBnZXRCdXR0b25Qcm9wcywgLy8gRGVwcmVjYXRlZFxuICAgICAgZ2V0VG9nZ2xlQnV0dG9uUHJvcHMsXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPERvd25zaGlmdFxuICAgICAgICBpbml0aWFsU2VsZWN0ZWRJdGVtPXtpbml0aWFsU2VsZWN0ZWRJdGVtIHx8IGRlZmF1bHRTZWxlY3RlZEl0ZW19XG4gICAgICAgIGluaXRpYWxJbnB1dFZhbHVlPXtpbml0aWFsSW5wdXRWYWx1ZSB8fCBkZWZhdWx0SW5wdXRWYWx1ZX1cbiAgICAgICAgZ2V0VG9nZ2xlQnV0dG9uUHJvcHM9e2dldFRvZ2dsZUJ1dHRvblByb3BzIHx8IGdldEJ1dHRvblByb3BzfVxuICAgICAgICBzdGF0ZVJlZHVjZXI9e3RoaXMuc3RhdGVSZWR1Y2VyfVxuICAgICAgICBzY3JvbGxJbnRvVmlldz17bm9vcH1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgPlxuICAgICAgICB7KHtcbiAgICAgICAgICBpc09wZW46IGlzU2hvd24sXG4gICAgICAgICAgaW5wdXRWYWx1ZSxcbiAgICAgICAgICBnZXRJdGVtUHJvcHMsXG4gICAgICAgICAgc2VsZWN0ZWRJdGVtLFxuICAgICAgICAgIGhpZ2hsaWdodGVkSW5kZXgsXG4gICAgICAgICAgc2VsZWN0SXRlbUF0SW5kZXgsXG4gICAgICAgICAgZ2V0Um9vdFByb3BzLFxuICAgICAgICAgIC4uLnJlc3REb3duc2hpZnRQcm9wc1xuICAgICAgICB9KSA9PiAoXG4gICAgICAgICAgPFBhbmUgd2lkdGg9XCIxMDAlXCIgey4uLmdldFJvb3RQcm9wcyh7IHJlZktleTogJ2lubmVyUmVmJyB9KX0+XG4gICAgICAgICAgICA8UG9wb3ZlclxuICAgICAgICAgICAgICBicmluZ0ZvY3VzSW5zaWRlPXtmYWxzZX1cbiAgICAgICAgICAgICAgaXNTaG93bj17aXNTaG93bn1cbiAgICAgICAgICAgICAgbWluV2lkdGg9e3BvcG92ZXJNaW5XaWR0aH1cbiAgICAgICAgICAgICAgcG9zaXRpb249e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uIHx8XG4gICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUudGFyZ2V0V2lkdGggPCBwb3BvdmVyTWluV2lkdGhcbiAgICAgICAgICAgICAgICAgID8gUG9zaXRpb24uQk9UVE9NX0xFRlRcbiAgICAgICAgICAgICAgICAgIDogUG9zaXRpb24uQk9UVE9NKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnRlbnQ9eygpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJSZXN1bHRzKHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBNYXRoLm1heCh0aGlzLnN0YXRlLnRhcmdldFdpZHRoLCBwb3BvdmVyTWluV2lkdGgpLFxuICAgICAgICAgICAgICAgICAgaW5wdXRWYWx1ZSxcbiAgICAgICAgICAgICAgICAgIGdldEl0ZW1Qcm9wcyxcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbSxcbiAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodGVkSW5kZXgsXG4gICAgICAgICAgICAgICAgICBzZWxlY3RJdGVtQXRJbmRleFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG1pbkhlaWdodD17MH1cbiAgICAgICAgICAgICAgYW5pbWF0aW9uRHVyYXRpb249ezB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHsoeyBpc1Nob3duOiBpc1Nob3duUG9wb3ZlciwgdG9nZ2xlLCBnZXRSZWYgfSkgPT5cbiAgICAgICAgICAgICAgICBjaGlsZHJlbih7XG4gICAgICAgICAgICAgICAgICBpc1Nob3duOiBpc1Nob3duUG9wb3ZlcixcbiAgICAgICAgICAgICAgICAgIHRvZ2dsZSxcbiAgICAgICAgICAgICAgICAgIGdldFJlZjogcmVmID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVXNlIHRoZSByZWYgaW50ZXJuYWxseSB0byBkZXRlcm1pbmUgdGhlIHdpZHRoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0UmVmID0gcmVmXG4gICAgICAgICAgICAgICAgICAgIGdldFJlZihyZWYpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgaW5wdXRWYWx1ZSxcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbSxcbiAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodGVkSW5kZXgsXG4gICAgICAgICAgICAgICAgICBzZWxlY3RJdGVtQXRJbmRleCxcbiAgICAgICAgICAgICAgICAgIC4uLnJlc3REb3duc2hpZnRQcm9wc1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgICA8L1BhbmU+XG4gICAgICAgICl9XG4gICAgICA8L0Rvd25zaGlmdD5cbiAgICApXG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFBQyxZQUFZLEVBQUk7RUFDbEMsSUFBSUEsWUFBSixFQUFrQjtJQUNoQixPQUFPLFVBQUNDLEtBQUQsRUFBUUMsS0FBUixFQUFrQjtNQUN2QixJQUFNQyxZQUFZLEdBQUdGLEtBQUssQ0FBQ0csR0FBTixDQUFVLFVBQUFDLElBQUk7UUFBQSxPQUFLO1VBQ3RDQyxHQUFHLEVBQUVOLFlBQVksQ0FBQ0ssSUFBRCxDQURxQjtVQUV0Q0EsSUFBSSxFQUFKQTtRQUZzQyxDQUFMO01BQUEsQ0FBZCxDQUFyQjtNQUtBLE9BQU9FLDBCQUFBLENBQ0pDLE1BREksQ0FDR0wsWUFESCxFQUNpQkQsS0FEakIsRUFDd0I7UUFBRUksR0FBRyxFQUFFO01BQVAsQ0FEeEIsRUFFSkYsR0FGSSxDQUVBO1FBQUEsSUFBR0MsSUFBSCxRQUFHQSxJQUFIO1FBQUEsT0FBY0EsSUFBZDtNQUFBLENBRkEsQ0FBUDtJQUdELENBVEQ7RUFVRDs7RUFFRCxPQUFPLFVBQUNKLEtBQUQsRUFBUUMsS0FBUjtJQUFBLE9BQWtCSywwQkFBQSxDQUFXQyxNQUFYLENBQWtCUCxLQUFsQixFQUF5QkMsS0FBekIsQ0FBbEI7RUFBQSxDQUFQO0FBQ0QsQ0FmRDs7QUFpQkEsSUFBTU8sSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTSxDQUFFLENBQXJCOztBQUVBLElB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