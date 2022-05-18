import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _excluded = ["children", "height", "accountForScrollbar"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Pane } from '../../layers';
import ScrollbarSize from './ScrollbarSize';

var TableHead = /*#__PURE__*/function (_PureComponent) {
  _inherits(TableHead, _PureComponent);

  var _super = _createSuper(TableHead);

  function TableHead() {
    var _this;

    _classCallCheck(this, TableHead);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      scrollbarWidth: 0
    });

    _defineProperty(_assertThisInitialized(_this), "handleScrollbarSize", function (width) {
      _this.setState({
        scrollbarWidth: width
      });
    });

    return _this;
  }

  _createClass(TableHead, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          height = _this$props.height,
          accountForScrollbar = _this$props.accountForScrollbar,
          props = _objectWithoutProperties(_this$props, _excluded);

      var scrollbarWidth = this.state.scrollbarWidth;
      return /*#__PURE__*/React.createElement(Pane, _extends({
        display: "flex",
        flexShrink: 0,
        paddingRight: scrollbarWidth,
        borderBottom: "default",
        background: "tint2",
        height: height
      }, props), children, ' ', accountForScrollbar && /*#__PURE__*/React.createElement(ScrollbarSize, {
        handleScrollbarSize: this.handleScrollbarSize
      }));
    }
  }]);

  return TableHead;
}(PureComponent);

TableHead.displayName = "TableHead";

_defineProperty(TableHead, "propTypes", _objectSpread(_objectSpread({}, Pane.propTypes), {}, {
  /**
   * The height of the table head.
   */
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,

  /**
   * This should always be true if you are using TableHead together with a TableBody.
   * Because TableBody has `overflowY: scroll` by default.
   */
  accountForScrollbar: PropTypes.bool
}));

_defineProperty(TableHead, "defaultProps", {
  height: 32,
  accountForScrollbar: true
});

export { TableHead as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJQYW5lIiwiU2Nyb2xsYmFyU2l6ZSIsIlRhYmxlSGVhZCIsInNjcm9sbGJhcldpZHRoIiwid2lkdGgiLCJzZXRTdGF0ZSIsInByb3BzIiwiY2hpbGRyZW4iLCJoZWlnaHQiLCJhY2NvdW50Rm9yU2Nyb2xsYmFyIiwic3RhdGUiLCJoYW5kbGVTY3JvbGxiYXJTaXplIiwicHJvcFR5cGVzIiwib25lT2ZUeXBlIiwibnVtYmVyIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImJvb2wiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdGFibGUvc3JjL1RhYmxlSGVhZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgUGFuZSB9IGZyb20gJy4uLy4uL2xheWVycydcbmltcG9ydCBTY3JvbGxiYXJTaXplIGZyb20gJy4vU2Nyb2xsYmFyU2l6ZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFibGVIZWFkIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIFBhbmUgY29tcG9uZW50IGFzIHRoZSBiYXNlLlxuICAgICAqL1xuICAgIC4uLlBhbmUucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGhlaWdodCBvZiB0aGUgdGFibGUgaGVhZC5cbiAgICAgKi9cbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKS5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhpcyBzaG91bGQgYWx3YXlzIGJlIHRydWUgaWYgeW91IGFyZSB1c2luZyBUYWJsZUhlYWQgdG9nZXRoZXIgd2l0aCBhIFRhYmxlQm9keS5cbiAgICAgKiBCZWNhdXNlIFRhYmxlQm9keSBoYXMgYG92ZXJmbG93WTogc2Nyb2xsYCBieSBkZWZhdWx0LlxuICAgICAqL1xuICAgIGFjY291bnRGb3JTY3JvbGxiYXI6IFByb3BUeXBlcy5ib29sXG4gIH1cblxuICBzdGF0ZSA9IHtcbiAgICBzY3JvbGxiYXJXaWR0aDogMFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBoZWlnaHQ6IDMyLFxuICAgIGFjY291bnRGb3JTY3JvbGxiYXI6IHRydWVcbiAgfVxuXG4gIGhhbmRsZVNjcm9sbGJhclNpemUgPSB3aWR0aCA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzY3JvbGxiYXJXaWR0aDogd2lkdGhcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIGhlaWdodCwgYWNjb3VudEZvclNjcm9sbGJhciwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IHNjcm9sbGJhcldpZHRoIH0gPSB0aGlzLnN0YXRlXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBhbmVcbiAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICBmbGV4U2hyaW5rPXswfVxuICAgICAgICBwYWRkaW5nUmlnaHQ9e3Njcm9sbGJhcldpZHRofVxuICAgICAgICBib3JkZXJCb3R0b209XCJkZWZhdWx0XCJcbiAgICAgICAgYmFja2dyb3VuZD1cInRpbnQyXCJcbiAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufXsnICd9XG4gICAgICAgIHthY2NvdW50Rm9yU2Nyb2xsYmFyICYmIChcbiAgICAgICAgICA8U2Nyb2xsYmFyU2l6ZSBoYW5kbGVTY3JvbGxiYXJTaXplPXt0aGlzLmhhbmRsZVNjcm9sbGJhclNpemV9IC8+XG4gICAgICAgICl9XG4gICAgICA8L1BhbmU+XG4gICAgKVxuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxhQUFoQixRQUFxQyxPQUFyQztBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxJQUFULFFBQXFCLGNBQXJCO0FBQ0EsT0FBT0MsYUFBUCxNQUEwQixpQkFBMUI7O0lBRXFCQyxTOzs7Ozs7Ozs7Ozs7Ozs7OzREQW1CWDtNQUNOQyxjQUFjLEVBQUU7SUFEVixDOzswRUFTYyxVQUFBQyxLQUFLLEVBQUk7TUFDN0IsTUFBS0MsUUFBTCxDQUFjO1FBQ1pGLGNBQWMsRUFBRUM7TUFESixDQUFkO0lBR0QsQzs7Ozs7OztXQUVELGtCQUFTO01BQ1Asa0JBQTRELEtBQUtFLEtBQWpFO01BQUEsSUFBUUMsUUFBUixlQUFRQSxRQUFSO01BQUEsSUFBa0JDLE1BQWxCLGVBQWtCQSxNQUFsQjtNQUFBLElBQTBCQyxtQkFBMUIsZUFBMEJBLG1CQUExQjtNQUFBLElBQWtESCxLQUFsRDs7TUFDQSxJQUFRSCxjQUFSLEdBQTJCLEtBQUtPLEtBQWhDLENBQVFQLGNBQVI7TUFFQSxvQkFDRSxvQkFBQyxJQUFEO1FBQ0UsT0FBTyxFQUFDLE1BRFY7UUFFRSxVQUFVLEVBQUUsQ0FGZDtRQUdFLFlBQVksRUFBRUEsY0FIaEI7UUFJRSxZQUFZLEVBQUMsU0FKZjtRQUtFLFVBQVUsRUFBQyxPQUxiO1FBTUUsTUFBTSxFQUFFSztNQU5WLEdBT01GLEtBUE4sR0FTR0MsUUFUSCxFQVNhLEdBVGIsRUFVR0UsbUJBQW1CLGlCQUNsQixvQkFBQyxhQUFEO1FBQWUsbUJBQW1CLEVBQUUsS0FBS0U7TUFBekMsRUFYSixDQURGO0lBZ0JEOzs7O0VBdERvQ2IsYTs7QUFBbEJJLFM7O2dCQUFBQSxTLCtDQUtkRixJQUFJLENBQUNZLFM7RUFFUjtBQUNKO0FBQ0E7RUFDSUosTUFBTSxFQUFFVCxTQUFTLENBQUNjLFNBQVYsQ0FBb0IsQ0FBQ2QsU0FBUyxDQUFDZSxNQUFYLEVBQW1CZixTQUFTLENBQUNnQixNQUE3QixDQUFwQixFQUEwREMsVTs7RUFFbEU7QUFDSjtBQUNBO0FBQ0E7RUFDSVAsbUJBQW1CLEVBQUVWLFNBQVMsQ0FBQ2tCOzs7Z0JBaEJkZixTLGtCQXVCRztFQUNwQk0sTUFBTSxFQUFFLEVBRFk7RUFFcEJDLG1CQUFtQixFQUFFO0FBRkQsQzs7U0F2QkhQLFMifQ==