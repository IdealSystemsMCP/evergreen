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

var _reactTinyVirtualList = _interopRequireDefault(require("react-tiny-virtual-list"));

var _lodash = _interopRequireDefault(require("lodash.debounce"));

var _layers = require("../../layers");

var _excluded = ["children", "height", "defaultHeight", "allowAutoHeight", "overscanCount", "estimatedItemSize", "useAverageAutoHeightEstimation", "scrollToIndex", "scrollOffset", "scrollToAlignment", "onScroll"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var TableVirtualBody = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(TableVirtualBody, _PureComponent);

  var _super = _createSuper(TableVirtualBody);

  function TableVirtualBody(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, TableVirtualBody);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      isIntegerHeight: false,
      calculatedHeight: 0
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "initializeHelpers", function () {
      _this.autoHeights = [];
      _this.autoHeightRefs = [];
      _this.averageAutoHeight = _this.props.defaultHeight;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "processAutoHeights", function () {
      var isUpdated = false; // This will determine the averageAutoHeight.

      var total = 0;
      var totalAmount = 0; // Loop through all of the refs that have height="auto".

      _this.autoHeightRefs.forEach(function (ref, index) {
        // If the height is already calculated, skip it,
        // but calculate the height for the total.
        if (_this.autoHeights[index]) {
          total += _this.autoHeights[index];
          totalAmount += 1;
          return;
        } // Make sure the ref has a child


        if (ref && ref.childNodes && ref.childNodes[0] && Number.isInteger(ref.childNodes[0].offsetHeight)) {
          var height = ref.childNodes[0].offsetHeight; // Add to the total to calculate the averageAutoHeight.

          total += height;
          totalAmount += 1; // Cache the height.

          _this.autoHeights[index] = height; // Set the update flag to true.

          isUpdated = true;
        }
      }); // Save the average height.


      _this.averageAutoHeight = total / totalAmount; // There are some new heights detected that had previously not been calculated.
      // Call forceUpdate to make sure the virtual list renders again.

      if (isUpdated) _this.forceUpdate();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onRef", function (ref) {
      _this.paneRef = ref;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onVirtualHelperRef", function (index, ref) {
      _this.autoHeightRefs[index] = ref;
      requestAnimationFrame(function () {
        _this.processAutoHeights();
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onResize", function () {
      _this.updateOnResize();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "updateOnResize", function () {
      _this.initializeHelpers(); // Simply return when we now the height of the pane is fixed.


      if (_this.state.isIntegerHeight) return; // Return if we are in a weird edge case in which the ref is no longer valid.

      if (_this.paneRef) {
        var calculatedHeight = _this.paneRef.offsetHeight;

        if (calculatedHeight > 0) {
          // Save the calculated height which is needed for the VirtualList.
          _this.setState({
            calculatedHeight: calculatedHeight
          }); // Prevent updateOnResize being called recursively when there is a valid height.


          return;
        }
      } // When height is still 0 (or paneRef is not valid) try recursively until success.


      requestAnimationFrame(function () {
        _this.updateOnResize();
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getItemSize", function (children) {
      var _this$props = _this.props,
          allowAutoHeight = _this$props.allowAutoHeight,
          useAverageAutoHeightEstimation = _this$props.useAverageAutoHeightEstimation,
          defaultHeight = _this$props.defaultHeight; // Prefer to return a array of all heights.

      if (!allowAutoHeight) {
        return children.map(function (child) {
          if (! /*#__PURE__*/_react["default"].isValidElement(child)) return defaultHeight;
          var height = child.props.height;

          if (Number.isInteger(height)) {
            return height;
          }

          return defaultHeight;
        });
      } // If allowAutoHeight is true, return a function instead.


      var itemSizeFn = function itemSizeFn(index) {
        if (! /*#__PURE__*/_react["default"].isValidElement(children[index])) return defaultHeight;
        var height = children[index].props.height; // When the height is number simply, simply return it.

        if (Number.isInteger(height)) {
          return height;
        } // When allowAutoHeight is set and  the height is set to "auto"...


        if (allowAutoHeight && children[index].props.height === 'auto') {
          // ... and the height is calculated, return the calculated height.
          if (_this.autoHeights[index]) return _this.autoHeights[index]; // ... if the height is not yet calculated, return the averge

          if (useAverageAutoHeightEstimation) return _this.averageAutoHeight;
        } // Return the default height.


        return defaultHeight;
      };

      return itemSizeFn;
    });

    _this.initializeHelpers(); // Add a onResize.


    _this.onResize = (0, _lodash["default"])(_this.onResize, 200);
    return _this;
  }

  (0, _createClass2["default"])(TableVirtualBody, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Call this to initialize and set
      this.updateOnResize();
      window.addEventListener('resize', this.onResize, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.onResize);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          inputChildren = _this$props2.children,
          paneHeight = _this$props2.height,
          defaultHeight = _this$props2.defaultHeight,
          allowAutoHeight = _this$props2.allowAutoHeight,
          overscanCount = _this$props2.overscanCount,
          estimatedItemSize = _this$props2.estimatedItemSize,
          useAverageAutoHeightEstimation = _this$props2.useAverageAutoHeightEstimation,
          scrollToIndex = _this$props2.scrollToIndex,
          scrollOffset = _this$props2.scrollOffset,
          scrollToAlignment = _this$props2.scrollToAlignment,
          onScroll = _this$props2.onScroll,
          props = (0, _objectWithoutProperties2["default"])(_this$props2, _excluded); // Children always needs to be an array.

      var children = Array.isArray(inputChildren) ? inputChildren : _react["default"].Children.toArray(inputChildren);
      var itemSize = this.getItemSize(children); // VirtualList needs a fixed height.

      var _this$state = this.state,
          calculatedHeight = _this$state.calculatedHeight,
          isIntegerHeight = _this$state.isIntegerHeight;
      return /*#__PURE__*/_react["default"].createElement(_layers.Pane, (0, _extends2["default"])({
        "data-evergreen-table-body": true,
        innerRef: this.onRef,
        height: paneHeight,
        flex: "1",
        overflow: "hidden"
      }, props), /*#__PURE__*/_react["default"].createElement(_reactTinyVirtualList["default"], {
        height: isIntegerHeight ? paneHeight : calculatedHeight,
        width: "100%",
        estimatedItemSize: allowAutoHeight && useAverageAutoHeightEstimation ? this.averageAutoHeight : estimatedItemSize || null,
        itemSize: itemSize,
        overscanCount: overscanCount,
        itemCount: _react["default"].Children.count(children),
        scrollToIndex: scrollToIndex,
        scrollOffset: scrollOffset,
        scrollToAlignment: scrollToAlignment,
        onScroll: onScroll,
        renderItem: function renderItem(_ref) {
          var index = _ref.index,
              style = _ref.style;
          var child = children[index];
          var key = child.key || index;
          var props = {
            key: key,
            style: style
          }; // If some children are strings by accident, support this gracefully.

          if (! /*#__PURE__*/_react["default"].isValidElement(child)) {
            if (typeof child === 'string') {
              return /*#__PURE__*/_react["default"].createElement("div", props, child);
            }

            return /*#__PURE__*/_react["default"].createElement("div", props, "\xA0");
          } // When allowing height="auto" for rows, and a auto height item is
          // rendered for the first time...


          if (allowAutoHeight && /*#__PURE__*/_react["default"].isValidElement(child) && child.props.height === 'auto' && // ... and only when the height is not already been calculated.
          !_this2.autoHeights[index]) {
            // ... render the item in a helper div, the ref is used to calculate
            // the height of its children.
            return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
              ref: function ref(_ref2) {
                return _this2.onVirtualHelperRef(index, _ref2);
              },
              "data-virtual-index": index
            }, props, {
              style: _objectSpread({
                opacity: 0
              }, props.style)
            }), child);
          } // When allowAutoHeight is false, or when the height is known.
          // Simply render the item.


          return /*#__PURE__*/_react["default"].cloneElement(child, props);
        }
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (props.height !== state.calculatedHeight) {
        return {
          isIntegerHeight: Number.isInteger(props.height)
        };
      } // Return null to indicate no change to state.


      return null;
    }
  }]);
  return TableVirtualBody;
}(_react.PureComponent);

exports["default"] = TableVirtualBody;
TableVirtualBody.displayName = "TableVirtualBody";
(0, _defineProperty2["default"])(TableVirtualBody, "propTypes", _objectSpread(_objectSpread({}, _layers.Pane.propTypes), {}, {
  /**
   * Children needs to be an array of a single node.
   */
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].node]),

  /**
   * Default height of each row.
   * 48 is the default height of a TableRow.
   */
  defaultHeight: _propTypes["default"].number,

  /**
   * When true, support `height="auto"` on children being rendered.
   * This is somewhat of an expirmental feature.
   */
  allowAutoHeight: _propTypes["default"].bool,

  /**
   * The overscanCount property passed to react-tiny-virtual-list.
   */
  overscanCount: _propTypes["default"].number.isRequired,

  /**
   * When passed, this is used as the `estimatedItemSize` in react-tiny-virtual-list.
   * Only when `allowAutoHeight` and`useAverageAutoHeightEstimation` are false.
   */
  estimatedItemSize: _propTypes["default"].number,

  /**
   * When allowAutoHeight is true and this prop is true, the estimated height
   * will be computed based on the average height of auto height rows.
   */
  useAverageAutoHeightEstimation: _propTypes["default"].bool,

  /**
   * The scrollToIndex property passed to react-tiny-virtual-list
   */
  scrollToIndex: _propTypes["default"].number,

  /**
   * The scrollOffset property passed to react-tiny-virtual-list
   */
  scrollOffset: _propTypes["default"].number,

  /**
   * The scrollToAlignment property passed to react-tiny-virtual-list
   */
  scrollToAlignment: _propTypes["default"].oneOf(['start', 'center', 'end', 'auto']),

  /**
   * The onScroll callback passed to react-tiny-virtual-list
   */
  onScroll: _propTypes["default"].func
}));
(0, _defineProperty2["default"])(TableVirtualBody, "defaultProps", {
  defaultHeight: 48,
  allowAutoHeight: false,
  overscanCount: 5,
  useAverageAutoHeightEstimation: true
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJUYWJsZVZpcnR1YWxCb2R5IiwicHJvcHMiLCJpc0ludGVnZXJIZWlnaHQiLCJjYWxjdWxhdGVkSGVpZ2h0IiwiYXV0b0hlaWdodHMiLCJhdXRvSGVpZ2h0UmVmcyIsImF2ZXJhZ2VBdXRvSGVpZ2h0IiwiZGVmYXVsdEhlaWdodCIsImlzVXBkYXRlZCIsInRvdGFsIiwidG90YWxBbW91bnQiLCJmb3JFYWNoIiwicmVmIiwiaW5kZXgiLCJjaGlsZE5vZGVzIiwiTnVtYmVyIiwiaXNJbnRlZ2VyIiwib2Zmc2V0SGVpZ2h0IiwiaGVpZ2h0IiwiZm9yY2VVcGRhdGUiLCJwYW5lUmVmIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicHJvY2Vzc0F1dG9IZWlnaHRzIiwidXBkYXRlT25SZXNpemUiLCJpbml0aWFsaXplSGVscGVycyIsInN0YXRlIiwic2V0U3RhdGUiLCJjaGlsZHJlbiIsImFsbG93QXV0b0hlaWdodCIsInVzZUF2ZXJhZ2VBdXRvSGVpZ2h0RXN0aW1hdGlvbiIsIm1hcCIsImNoaWxkIiwiUmVhY3QiLCJpc1ZhbGlkRWxlbWVudCIsIml0ZW1TaXplRm4iLCJvblJlc2l6ZSIsImRlYm91bmNlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpbnB1dENoaWxkcmVuIiwicGFuZUhlaWdodCIsIm92ZXJzY2FuQ291bnQiLCJlc3RpbWF0ZWRJdGVtU2l6ZSIsInNjcm9sbFRvSW5kZXgiLCJzY3JvbGxPZmZzZXQiLCJzY3JvbGxUb0FsaWdubWVudCIsIm9uU2Nyb2xsIiwiQXJyYXkiLCJpc0FycmF5IiwiQ2hpbGRyZW4iLCJ0b0FycmF5IiwiaXRlbVNpemUiLCJnZXRJdGVtU2l6ZSIsIm9uUmVmIiwiY291bnQiLCJzdHlsZSIsImtleSIsIm9uVmlydHVhbEhlbHBlclJlZiIsIm9wYWNpdHkiLCJjbG9uZUVsZW1lbnQiLCJQdXJlQ29tcG9uZW50IiwiUGFuZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9uZU9mVHlwZSIsImFycmF5T2YiLCJub2RlIiwibnVtYmVyIiwiYm9vbCIsImlzUmVxdWlyZWQiLCJvbmVPZiIsImZ1bmMiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdGFibGUvc3JjL1RhYmxlVmlydHVhbEJvZHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBWaXJ0dWFsTGlzdCBmcm9tICdyZWFjdC10aW55LXZpcnR1YWwtbGlzdCdcbmltcG9ydCBkZWJvdW5jZSBmcm9tICdsb2Rhc2guZGVib3VuY2UnXG5pbXBvcnQgeyBQYW5lIH0gZnJvbSAnLi4vLi4vbGF5ZXJzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJsZVZpcnR1YWxCb2R5IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIFBhbmUgY29tcG9uZW50IGFzIHRoZSBiYXNlLlxuICAgICAqL1xuICAgIC4uLlBhbmUucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogQ2hpbGRyZW4gbmVlZHMgdG8gYmUgYW4gYXJyYXkgb2YgYSBzaW5nbGUgbm9kZS5cbiAgICAgKi9cbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSksXG4gICAgICBQcm9wVHlwZXMubm9kZVxuICAgIF0pLFxuXG4gICAgLyoqXG4gICAgICogRGVmYXVsdCBoZWlnaHQgb2YgZWFjaCByb3cuXG4gICAgICogNDggaXMgdGhlIGRlZmF1bHQgaGVpZ2h0IG9mIGEgVGFibGVSb3cuXG4gICAgICovXG4gICAgZGVmYXVsdEhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgc3VwcG9ydCBgaGVpZ2h0PVwiYXV0b1wiYCBvbiBjaGlsZHJlbiBiZWluZyByZW5kZXJlZC5cbiAgICAgKiBUaGlzIGlzIHNvbWV3aGF0IG9mIGFuIGV4cGlybWVudGFsIGZlYXR1cmUuXG4gICAgICovXG4gICAgYWxsb3dBdXRvSGVpZ2h0OiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBvdmVyc2NhbkNvdW50IHByb3BlcnR5IHBhc3NlZCB0byByZWFjdC10aW55LXZpcnR1YWwtbGlzdC5cbiAgICAgKi9cbiAgICBvdmVyc2NhbkNvdW50OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHBhc3NlZCwgdGhpcyBpcyB1c2VkIGFzIHRoZSBgZXN0aW1hdGVkSXRlbVNpemVgIGluIHJlYWN0LXRpbnktdmlydHVhbC1saXN0LlxuICAgICAqIE9ubHkgd2hlbiBgYWxsb3dBdXRvSGVpZ2h0YCBhbmRgdXNlQXZlcmFnZUF1dG9IZWlnaHRFc3RpbWF0aW9uYCBhcmUgZmFsc2UuXG4gICAgICovXG4gICAgZXN0aW1hdGVkSXRlbVNpemU6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIGFsbG93QXV0b0hlaWdodCBpcyB0cnVlIGFuZCB0aGlzIHByb3AgaXMgdHJ1ZSwgdGhlIGVzdGltYXRlZCBoZWlnaHRcbiAgICAgKiB3aWxsIGJlIGNvbXB1dGVkIGJhc2VkIG9uIHRoZSBhdmVyYWdlIGhlaWdodCBvZiBhdXRvIGhlaWdodCByb3dzLlxuICAgICAqL1xuICAgIHVzZUF2ZXJhZ2VBdXRvSGVpZ2h0RXN0aW1hdGlvbjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2Nyb2xsVG9JbmRleCBwcm9wZXJ0eSBwYXNzZWQgdG8gcmVhY3QtdGlueS12aXJ0dWFsLWxpc3RcbiAgICAgKi9cbiAgICBzY3JvbGxUb0luZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIC8qKlxuICAgICAqIFRoZSBzY3JvbGxPZmZzZXQgcHJvcGVydHkgcGFzc2VkIHRvIHJlYWN0LXRpbnktdmlydHVhbC1saXN0XG4gICAgICovXG4gICAgc2Nyb2xsT2Zmc2V0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIC8qKlxuICAgICAqIFRoZSBzY3JvbGxUb0FsaWdubWVudCBwcm9wZXJ0eSBwYXNzZWQgdG8gcmVhY3QtdGlueS12aXJ0dWFsLWxpc3RcbiAgICAgKi9cbiAgICBzY3JvbGxUb0FsaWdubWVudDogUHJvcFR5cGVzLm9uZU9mKFsnc3RhcnQnLCAnY2VudGVyJywgJ2VuZCcsICdhdXRvJ10pLFxuICAgIC8qKlxuICAgICAqIFRoZSBvblNjcm9sbCBjYWxsYmFjayBwYXNzZWQgdG8gcmVhY3QtdGlueS12aXJ0dWFsLWxpc3RcbiAgICAgKi9cbiAgICBvblNjcm9sbDogUHJvcFR5cGVzLmZ1bmNcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZGVmYXVsdEhlaWdodDogNDgsXG4gICAgYWxsb3dBdXRvSGVpZ2h0OiBmYWxzZSxcbiAgICBvdmVyc2NhbkNvdW50OiA1LFxuICAgIHVzZUF2ZXJhZ2VBdXRvSGVpZ2h0RXN0aW1hdGlvbjogdHJ1ZVxuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgaXNJbnRlZ2VySGVpZ2h0OiBmYWxzZSxcbiAgICBjYWxjdWxhdGVkSGVpZ2h0OiAwXG4gIH1cblxuICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzLCBzdGF0ZSkge1xuICAgIGlmIChwcm9wcy5oZWlnaHQgIT09IHN0YXRlLmNhbGN1bGF0ZWRIZWlnaHQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzSW50ZWdlckhlaWdodDogTnVtYmVyLmlzSW50ZWdlcihwcm9wcy5oZWlnaHQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIG51bGwgdG8gaW5kaWNhdGUgbm8gY2hhbmdlIHRvIHN0YXRlLlxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5pbml0aWFsaXplSGVscGVycygpXG5cbiAgICAvLyBBZGQgYSBvblJlc2l6ZS5cbiAgICB0aGlzLm9uUmVzaXplID0gZGVib3VuY2UodGhpcy5vblJlc2l6ZSwgMjAwKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gQ2FsbCB0aGlzIHRvIGluaXRpYWxpemUgYW5kIHNldFxuICAgIHRoaXMudXBkYXRlT25SZXNpemUoKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uUmVzaXplLCBmYWxzZSlcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uUmVzaXplKVxuICB9XG5cbiAgaW5pdGlhbGl6ZUhlbHBlcnMgPSAoKSA9PiB7XG4gICAgdGhpcy5hdXRvSGVpZ2h0cyA9IFtdXG4gICAgdGhpcy5hdXRvSGVpZ2h0UmVmcyA9IFtdXG4gICAgdGhpcy5hdmVyYWdlQXV0b0hlaWdodCA9IHRoaXMucHJvcHMuZGVmYXVsdEhlaWdodFxuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gd2lsbCBwcm9jZXNzIGFsbCBpdGVtcyB0aGF0IGhhdmUgaGVpZ2h0PVwiYXV0b1wiIHNldC5cbiAgICogSXQgd2lsbCBsb29wIHRocm91Z2ggYWxsIHJlZnMgYW5kIGdldCBjYWxjdWxhdGUgdGhlIGhlaWdodC5cbiAgICovXG4gIHByb2Nlc3NBdXRvSGVpZ2h0cyA9ICgpID0+IHtcbiAgICBsZXQgaXNVcGRhdGVkID0gZmFsc2VcblxuICAgIC8vIFRoaXMgd2lsbCBkZXRlcm1pbmUgdGhlIGF2ZXJhZ2VBdXRvSGVpZ2h0LlxuICAgIGxldCB0b3RhbCA9IDBcbiAgICBsZXQgdG90YWxBbW91bnQgPSAwXG5cbiAgICAvLyBMb29wIHRocm91Z2ggYWxsIG9mIHRoZSByZWZzIHRoYXQgaGF2ZSBoZWlnaHQ9XCJhdXRvXCIuXG4gICAgdGhpcy5hdXRvSGVpZ2h0UmVmcy5mb3JFYWNoKChyZWYsIGluZGV4KSA9PiB7XG4gICAgICAvLyBJZiB0aGUgaGVpZ2h0IGlzIGFscmVhZHkgY2FsY3VsYXRlZCwgc2tpcCBpdCxcbiAgICAgIC8vIGJ1dCBjYWxjdWxhdGUgdGhlIGhlaWdodCBmb3IgdGhlIHRvdGFsLlxuICAgICAgaWYgKHRoaXMuYXV0b0hlaWdodHNbaW5kZXhdKSB7XG4gICAgICAgIHRvdGFsICs9IHRoaXMuYXV0b0hlaWdodHNbaW5kZXhdXG4gICAgICAgIHRvdGFsQW1vdW50ICs9IDFcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgcmVmIGhhcyBhIGNoaWxkXG4gICAgICBpZiAoXG4gICAgICAgIHJlZiAmJlxuICAgICAgICByZWYuY2hpbGROb2RlcyAmJlxuICAgICAgICByZWYuY2hpbGROb2Rlc1swXSAmJlxuICAgICAgICBOdW1iZXIuaXNJbnRlZ2VyKHJlZi5jaGlsZE5vZGVzWzBdLm9mZnNldEhlaWdodClcbiAgICAgICkge1xuICAgICAgICBjb25zdCBoZWlnaHQgPSByZWYuY2hpbGROb2Rlc1swXS5vZmZzZXRIZWlnaHRcblxuICAgICAgICAvLyBBZGQgdG8gdGhlIHRvdGFsIHRvIGNhbGN1bGF0ZSB0aGUgYXZlcmFnZUF1dG9IZWlnaHQuXG4gICAgICAgIHRvdGFsICs9IGhlaWdodFxuICAgICAgICB0b3RhbEFtb3VudCArPSAxXG5cbiAgICAgICAgLy8gQ2FjaGUgdGhlIGhlaWdodC5cbiAgICAgICAgdGhpcy5hdXRvSGVpZ2h0c1tpbmRleF0gPSBoZWlnaHRcblxuICAgICAgICAvLyBTZXQgdGhlIHVwZGF0ZSBmbGFnIHRvIHRydWUuXG4gICAgICAgIGlzVXBkYXRlZCA9IHRydWVcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gU2F2ZSB0aGUgYXZlcmFnZSBoZWlnaHQuXG4gICAgdGhpcy5hdmVyYWdlQXV0b0hlaWdodCA9IHRvdGFsIC8gdG90YWxBbW91bnRcblxuICAgIC8vIFRoZXJlIGFyZSBzb21lIG5ldyBoZWlnaHRzIGRldGVjdGVkIHRoYXQgaGFkIHByZXZpb3VzbHkgbm90IGJlZW4gY2FsY3VsYXRlZC5cbiAgICAvLyBDYWxsIGZvcmNlVXBkYXRlIHRvIG1ha2Ugc3VyZSB0aGUgdmlydHVhbCBsaXN0IHJlbmRlcnMgYWdhaW4uXG4gICAgaWYgKGlzVXBkYXRlZCkgdGhpcy5mb3JjZVVwZGF0ZSgpXG4gIH1cblxuICBvblJlZiA9IHJlZiA9PiB7XG4gICAgdGhpcy5wYW5lUmVmID0gcmVmXG4gIH1cblxuICBvblZpcnR1YWxIZWxwZXJSZWYgPSAoaW5kZXgsIHJlZikgPT4ge1xuICAgIHRoaXMuYXV0b0hlaWdodFJlZnNbaW5kZXhdID0gcmVmXG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5wcm9jZXNzQXV0b0hlaWdodHMoKVxuICAgIH0pXG4gIH1cblxuICBvblJlc2l6ZSA9ICgpID0+IHtcbiAgICB0aGlzLnVwZGF0ZU9uUmVzaXplKClcbiAgfVxuXG4gIHVwZGF0ZU9uUmVzaXplID0gKCkgPT4ge1xuICAgIHRoaXMuaW5pdGlhbGl6ZUhlbHBlcnMoKVxuXG4gICAgLy8gU2ltcGx5IHJldHVybiB3aGVuIHdlIG5vdyB0aGUgaGVpZ2h0IG9mIHRoZSBwYW5lIGlzIGZpeGVkLlxuICAgIGlmICh0aGlzLnN0YXRlLmlzSW50ZWdlckhlaWdodCkgcmV0dXJuXG5cbiAgICAvLyBSZXR1cm4gaWYgd2UgYXJlIGluIGEgd2VpcmQgZWRnZSBjYXNlIGluIHdoaWNoIHRoZSByZWYgaXMgbm8gbG9uZ2VyIHZhbGlkLlxuICAgIGlmICh0aGlzLnBhbmVSZWYpIHtcbiAgICAgIGNvbnN0IGNhbGN1bGF0ZWRIZWlnaHQgPSB0aGlzLnBhbmVSZWYub2Zmc2V0SGVpZ2h0XG5cbiAgICAgIGlmIChjYWxjdWxhdGVkSGVpZ2h0ID4gMCkge1xuICAgICAgICAvLyBTYXZlIHRoZSBjYWxjdWxhdGVkIGhlaWdodCB3aGljaCBpcyBuZWVkZWQgZm9yIHRoZSBWaXJ0dWFsTGlzdC5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgY2FsY3VsYXRlZEhlaWdodFxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIFByZXZlbnQgdXBkYXRlT25SZXNpemUgYmVpbmcgY2FsbGVkIHJlY3Vyc2l2ZWx5IHdoZW4gdGhlcmUgaXMgYSB2YWxpZCBoZWlnaHQuXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFdoZW4gaGVpZ2h0IGlzIHN0aWxsIDAgKG9yIHBhbmVSZWYgaXMgbm90IHZhbGlkKSB0cnkgcmVjdXJzaXZlbHkgdW50aWwgc3VjY2Vzcy5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVPblJlc2l6ZSgpXG4gICAgfSlcbiAgfVxuXG4gIGdldEl0ZW1TaXplID0gY2hpbGRyZW4gPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGFsbG93QXV0b0hlaWdodCxcbiAgICAgIHVzZUF2ZXJhZ2VBdXRvSGVpZ2h0RXN0aW1hdGlvbixcbiAgICAgIGRlZmF1bHRIZWlnaHRcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgLy8gUHJlZmVyIHRvIHJldHVybiBhIGFycmF5IG9mIGFsbCBoZWlnaHRzLlxuICAgIGlmICghYWxsb3dBdXRvSGVpZ2h0KSB7XG4gICAgICByZXR1cm4gY2hpbGRyZW4ubWFwKGNoaWxkID0+IHtcbiAgICAgICAgaWYgKCFSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHJldHVybiBkZWZhdWx0SGVpZ2h0XG4gICAgICAgIGNvbnN0IHsgaGVpZ2h0IH0gPSBjaGlsZC5wcm9wc1xuXG4gICAgICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKGhlaWdodCkpIHtcbiAgICAgICAgICByZXR1cm4gaGVpZ2h0XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGVmYXVsdEhlaWdodFxuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBJZiBhbGxvd0F1dG9IZWlnaHQgaXMgdHJ1ZSwgcmV0dXJuIGEgZnVuY3Rpb24gaW5zdGVhZC5cbiAgICBjb25zdCBpdGVtU2l6ZUZuID0gaW5kZXggPT4ge1xuICAgICAgaWYgKCFSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZHJlbltpbmRleF0pKSByZXR1cm4gZGVmYXVsdEhlaWdodFxuICAgICAgY29uc3QgeyBoZWlnaHQgfSA9IGNoaWxkcmVuW2luZGV4XS5wcm9wc1xuXG4gICAgICAvLyBXaGVuIHRoZSBoZWlnaHQgaXMgbnVtYmVyIHNpbXBseSwgc2ltcGx5IHJldHVybiBpdC5cbiAgICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKGhlaWdodCkpIHtcbiAgICAgICAgcmV0dXJuIGhlaWdodFxuICAgICAgfVxuXG4gICAgICAvLyBXaGVuIGFsbG93QXV0b0hlaWdodCBpcyBzZXQgYW5kICB0aGUgaGVpZ2h0IGlzIHNldCB0byBcImF1dG9cIi4uLlxuICAgICAgaWYgKGFsbG93QXV0b0hlaWdodCAmJiBjaGlsZHJlbltpbmRleF0ucHJvcHMuaGVpZ2h0ID09PSAnYXV0bycpIHtcbiAgICAgICAgLy8gLi4uIGFuZCB0aGUgaGVpZ2h0IGlzIGNhbGN1bGF0ZWQsIHJldHVybiB0aGUgY2FsY3VsYXRlZCBoZWlnaHQuXG4gICAgICAgIGlmICh0aGlzLmF1dG9IZWlnaHRzW2luZGV4XSkgcmV0dXJuIHRoaXMuYXV0b0hlaWdodHNbaW5kZXhdXG5cbiAgICAgICAgLy8gLi4uIGlmIHRoZSBoZWlnaHQgaXMgbm90IHlldCBjYWxjdWxhdGVkLCByZXR1cm4gdGhlIGF2ZXJnZVxuICAgICAgICBpZiAodXNlQXZlcmFnZUF1dG9IZWlnaHRFc3RpbWF0aW9uKSByZXR1cm4gdGhpcy5hdmVyYWdlQXV0b0hlaWdodFxuICAgICAgfVxuXG4gICAgICAvLyBSZXR1cm4gdGhlIGRlZmF1bHQgaGVpZ2h0LlxuICAgICAgcmV0dXJuIGRlZmF1bHRIZWlnaHRcbiAgICB9XG5cbiAgICByZXR1cm4gaXRlbVNpemVGblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNoaWxkcmVuOiBpbnB1dENoaWxkcmVuLFxuICAgICAgaGVpZ2h0OiBwYW5lSGVpZ2h0LFxuICAgICAgZGVmYXVsdEhlaWdodCxcbiAgICAgIGFsbG93QXV0b0hlaWdodCxcbiAgICAgIG92ZXJzY2FuQ291bnQsXG4gICAgICBlc3RpbWF0ZWRJdGVtU2l6ZSxcbiAgICAgIHVzZUF2ZXJhZ2VBdXRvSGVpZ2h0RXN0aW1hdGlvbixcbiAgICAgIHNjcm9sbFRvSW5kZXgsXG4gICAgICBzY3JvbGxPZmZzZXQsXG4gICAgICBzY3JvbGxUb0FsaWdubWVudCxcbiAgICAgIG9uU2Nyb2xsLFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgLy8gQ2hpbGRyZW4gYWx3YXlzIG5lZWRzIHRvIGJlIGFuIGFycmF5LlxuICAgIGNvbnN0IGNoaWxkcmVuID0gQXJyYXkuaXNBcnJheShpbnB1dENoaWxkcmVuKVxuICAgICAgPyBpbnB1dENoaWxkcmVuXG4gICAgICA6IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoaW5wdXRDaGlsZHJlbilcblxuICAgIGNvbnN0IGl0ZW1TaXplID0gdGhpcy5nZXRJdGVtU2l6ZShjaGlsZHJlbilcblxuICAgIC8vIFZpcnR1YWxMaXN0IG5lZWRzIGEgZml4ZWQgaGVpZ2h0LlxuICAgIGNvbnN0IHsgY2FsY3VsYXRlZEhlaWdodCwgaXNJbnRlZ2VySGVpZ2h0IH0gPSB0aGlzLnN0YXRlXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBhbmVcbiAgICAgICAgZGF0YS1ldmVyZ3JlZW4tdGFibGUtYm9keVxuICAgICAgICBpbm5lclJlZj17dGhpcy5vblJlZn1cbiAgICAgICAgaGVpZ2h0PXtwYW5lSGVpZ2h0fVxuICAgICAgICBmbGV4PVwiMVwiXG4gICAgICAgIG92ZXJmbG93PVwiaGlkZGVuXCJcbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgPlxuICAgICAgICA8VmlydHVhbExpc3RcbiAgICAgICAgICBoZWlnaHQ9e2lzSW50ZWdlckhlaWdodCA/IHBhbmVIZWlnaHQgOiBjYWxjdWxhdGVkSGVpZ2h0fVxuICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgZXN0aW1hdGVkSXRlbVNpemU9e1xuICAgICAgICAgICAgYWxsb3dBdXRvSGVpZ2h0ICYmIHVzZUF2ZXJhZ2VBdXRvSGVpZ2h0RXN0aW1hdGlvblxuICAgICAgICAgICAgICA/IHRoaXMuYXZlcmFnZUF1dG9IZWlnaHRcbiAgICAgICAgICAgICAgOiBlc3RpbWF0ZWRJdGVtU2l6ZSB8fCBudWxsXG4gICAgICAgICAgfVxuICAgICAgICAgIGl0ZW1TaXplPXtpdGVtU2l6ZX1cbiAgICAgICAgICBvdmVyc2NhbkNvdW50PXtvdmVyc2NhbkNvdW50fVxuICAgICAgICAgIGl0ZW1Db3VudD17UmVhY3QuQ2hpbGRyZW4uY291bnQoY2hpbGRyZW4pfVxuICAgICAgICAgIHNjcm9sbFRvSW5kZXg9e3Njcm9sbFRvSW5kZXh9XG4gICAgICAgICAgc2Nyb2xsT2Zmc2V0PXtzY3JvbGxPZmZzZXR9XG4gICAgICAgICAgc2Nyb2xsVG9BbGlnbm1lbnQ9e3Njcm9sbFRvQWxpZ25tZW50fVxuICAgICAgICAgIG9uU2Nyb2xsPXtvblNjcm9sbH1cbiAgICAgICAgICByZW5kZXJJdGVtPXsoeyBpbmRleCwgc3R5bGUgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSBjaGlsZHJlbltpbmRleF1cbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGNoaWxkLmtleSB8fCBpbmRleFxuICAgICAgICAgICAgY29uc3QgcHJvcHMgPSB7XG4gICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgc3R5bGVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgc29tZSBjaGlsZHJlbiBhcmUgc3RyaW5ncyBieSBhY2NpZGVudCwgc3VwcG9ydCB0aGlzIGdyYWNlZnVsbHkuXG4gICAgICAgICAgICBpZiAoIVJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IHsuLi5wcm9wc30+e2NoaWxkfTwvZGl2PlxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgey4uLnByb3BzfT4mbmJzcDs8L2Rpdj5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gV2hlbiBhbGxvd2luZyBoZWlnaHQ9XCJhdXRvXCIgZm9yIHJvd3MsIGFuZCBhIGF1dG8gaGVpZ2h0IGl0ZW0gaXNcbiAgICAgICAgICAgIC8vIHJlbmRlcmVkIGZvciB0aGUgZmlyc3QgdGltZS4uLlxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBhbGxvd0F1dG9IZWlnaHQgJiZcbiAgICAgICAgICAgICAgUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpICYmXG4gICAgICAgICAgICAgIGNoaWxkLnByb3BzLmhlaWdodCA9PT0gJ2F1dG8nICYmXG4gICAgICAgICAgICAgIC8vIC4uLiBhbmQgb25seSB3aGVuIHRoZSBoZWlnaHQgaXMgbm90IGFscmVhZHkgYmVlbiBjYWxjdWxhdGVkLlxuICAgICAgICAgICAgICAhdGhpcy5hdXRvSGVpZ2h0c1tpbmRleF1cbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAvLyAuLi4gcmVuZGVyIHRoZSBpdGVtIGluIGEgaGVscGVyIGRpdiwgdGhlIHJlZiBpcyB1c2VkIHRvIGNhbGN1bGF0ZVxuICAgICAgICAgICAgICAvLyB0aGUgaGVpZ2h0IG9mIGl0cyBjaGlsZHJlbi5cbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICByZWY9e3JlZiA9PiB0aGlzLm9uVmlydHVhbEhlbHBlclJlZihpbmRleCwgcmVmKX1cbiAgICAgICAgICAgICAgICAgIGRhdGEtdmlydHVhbC1pbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgICAgICAgICAuLi5wcm9wcy5zdHlsZVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7Y2hpbGR9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gV2hlbiBhbGxvd0F1dG9IZWlnaHQgaXMgZmFsc2UsIG9yIHdoZW4gdGhlIGhlaWdodCBpcyBrbm93bi5cbiAgICAgICAgICAgIC8vIFNpbXBseSByZW5kZXIgdGhlIGl0ZW0uXG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBwcm9wcylcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9QYW5lPlxuICAgIClcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxnQjs7Ozs7RUFxRm5CLDBCQUFZQyxLQUFaLEVBQW1CO0lBQUE7O0lBQUE7SUFDakIsMEJBQU1BLEtBQU47SUFEaUIsMEZBaEJYO01BQ05DLGVBQWUsRUFBRSxLQURYO01BRU5DLGdCQUFnQixFQUFFO0lBRlosQ0FnQlc7SUFBQSxzR0FtQkMsWUFBTTtNQUN4QixNQUFLQyxXQUFMLEdBQW1CLEVBQW5CO01BQ0EsTUFBS0MsY0FBTCxHQUFzQixFQUF0QjtNQUNBLE1BQUtDLGlCQUFMLEdBQXlCLE1BQUtMLEtBQUwsQ0FBV00sYUFBcEM7SUFDRCxDQXZCa0I7SUFBQSx1R0E2QkUsWUFBTTtNQUN6QixJQUFJQyxTQUFTLEdBQUcsS0FBaEIsQ0FEeUIsQ0FH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