import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _excluded = ["theme", "is", "height", "onSelect", "isSelected", "appearance", "disabled"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text } from '../../typography';
import { withTheme } from '../../theme';
import warning from '../../lib/warning';

var Tab = /*#__PURE__*/function (_PureComponent) {
  _inherits(Tab, _PureComponent);

  var _super = _createSuper(Tab);

  function Tab() {
    var _this;

    _classCallCheck(this, Tab);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (e) {
      if (typeof _this.props.onClick === 'function') {
        _this.props.onClick(e);
      }

      _this.props.onSelect();
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyPress", function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        _this.props.onSelect();

        e.preventDefault();
      }

      _this.props.onKeyPress(e);
    });

    return _this;
  }

  _createClass(Tab, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          is = _this$props.is,
          height = _this$props.height,
          onSelect = _this$props.onSelect,
          isSelected = _this$props.isSelected,
          appearance = _this$props.appearance,
          disabled = _this$props.disabled,
          props = _objectWithoutProperties(_this$props, _excluded);

      if (process.env.NODE_ENV !== 'production') {
        warning(typeof this.props.onClick === 'function', '<Tab> expects `onSelect` prop, but you passed `onClick`.');
      }

      var textSize = theme.getTextSizeForControlHeight(height);
      var elementBasedProps;

      if (disabled) {
        elementBasedProps = {
          'aria-disabled': true
        };
      }

      if (is === 'a') {
        // Use aria-current when it's a link
        // https://tink.uk/using-the-aria-current-attribute/
        elementBasedProps = isSelected ? _objectSpread(_objectSpread({}, elementBasedProps), {}, {
          'aria-current': 'page'
        }) : {};
      } else {
        // Use a role="tablist" around the tabs
        // Also pass down a aria-controls="panelId"
        // https://www.stefanjudis.com/blog/aria-selected-and-when-to-use-it/
        elementBasedProps = _objectSpread(_objectSpread({}, elementBasedProps), {}, {
          'aria-selected': isSelected,
          role: 'tab'
        });
      }

      return /*#__PURE__*/React.createElement(Text, _extends({
        className: theme.getTabClassName(appearance),
        is: is,
        size: textSize,
        height: height
      }, Tab.styles, props, {
        onClick: this.handleClick,
        onKeyPress: this.handleKeyPress
      }, elementBasedProps));
    }
  }]);

  return Tab;
}(PureComponent);

Tab.displayName = "Tab";

_defineProperty(Tab, "propTypes", _objectSpread(_objectSpread({}, Text.propTypes), {}, {
  /**
   * Function triggered when tab is selected.
   */
  onSelect: PropTypes.func,

  /**
   * When true, the tab is selected.
   */
  isSelected: PropTypes.bool,

  /**
   * The appearance of the tab.
   * The default theme only comes with a default style.
   */
  appearance: PropTypes.string,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired
}));

_defineProperty(Tab, "defaultProps", {
  onSelect: function onSelect() {},
  onKeyPress: function onKeyPress() {},
  is: 'span',
  height: 28,
  disabled: false
});

_defineProperty(Tab, "styles", {
  display: 'inline-flex',
  fontWeight: 500,
  paddingX: 8,
  marginX: 4,
  borderRadius: 3,
  lineHeight: '28px',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',
  tabIndex: 0
});

export default withTheme(Tab);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJUZXh0Iiwid2l0aFRoZW1lIiwid2FybmluZyIsIlRhYiIsImUiLCJwcm9wcyIsIm9uQ2xpY2siLCJvblNlbGVjdCIsImtleSIsInByZXZlbnREZWZhdWx0Iiwib25LZXlQcmVzcyIsInRoZW1lIiwiaXMiLCJoZWlnaHQiLCJpc1NlbGVjdGVkIiwiYXBwZWFyYW5jZSIsImRpc2FibGVkIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwidGV4dFNpemUiLCJnZXRUZXh0U2l6ZUZvckNvbnRyb2xIZWlnaHQiLCJlbGVtZW50QmFzZWRQcm9wcyIsInJvbGUiLCJnZXRUYWJDbGFzc05hbWUiLCJzdHlsZXMiLCJoYW5kbGVDbGljayIsImhhbmRsZUtleVByZXNzIiwicHJvcFR5cGVzIiwiZnVuYyIsImJvb2wiLCJzdHJpbmciLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiZGlzcGxheSIsImZvbnRXZWlnaHQiLCJwYWRkaW5nWCIsIm1hcmdpblgiLCJib3JkZXJSYWRpdXMiLCJsaW5lSGVpZ2h0IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwidGV4dERlY29yYXRpb24iLCJ0YWJJbmRleCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJzL3NyYy9UYWIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5pbXBvcnQgd2FybmluZyBmcm9tICcuLi8uLi9saWIvd2FybmluZydcblxuY2xhc3MgVGFiIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIFRleHQgY29tcG9uZW50IGFzIHRoZSBiYXNlLlxuICAgICAqL1xuICAgIC4uLlRleHQucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdHJpZ2dlcmVkIHdoZW4gdGFiIGlzIHNlbGVjdGVkLlxuICAgICAqL1xuICAgIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIHRhYiBpcyBzZWxlY3RlZC5cbiAgICAgKi9cbiAgICBpc1NlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBhcHBlYXJhbmNlIG9mIHRoZSB0YWIuXG4gICAgICogVGhlIGRlZmF1bHQgdGhlbWUgb25seSBjb21lcyB3aXRoIGEgZGVmYXVsdCBzdHlsZS5cbiAgICAgKi9cbiAgICBhcHBlYXJhbmNlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogVGhlbWUgcHJvdmlkZWQgYnkgVGhlbWVQcm92aWRlci5cbiAgICAgKi9cbiAgICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIG9uU2VsZWN0OiAoKSA9PiB7fSxcbiAgICBvbktleVByZXNzOiAoKSA9PiB7fSxcbiAgICBpczogJ3NwYW4nLFxuICAgIGhlaWdodDogMjgsXG4gICAgZGlzYWJsZWQ6IGZhbHNlXG4gIH1cblxuICBzdGF0aWMgc3R5bGVzID0ge1xuICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgZm9udFdlaWdodDogNTAwLFxuICAgIHBhZGRpbmdYOiA4LFxuICAgIG1hcmdpblg6IDQsXG4gICAgYm9yZGVyUmFkaXVzOiAzLFxuICAgIGxpbmVIZWlnaHQ6ICcyOHB4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICB0YWJJbmRleDogMFxuICB9XG5cbiAgaGFuZGxlQ2xpY2sgPSBlID0+IHtcbiAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKGUpXG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5vblNlbGVjdCgpXG4gIH1cblxuICBoYW5kbGVLZXlQcmVzcyA9IGUgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJyB8fCBlLmtleSA9PT0gJyAnKSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KClcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIHRoaXMucHJvcHMub25LZXlQcmVzcyhlKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRoZW1lLFxuICAgICAgaXMsXG4gICAgICBoZWlnaHQsXG4gICAgICBvblNlbGVjdCxcbiAgICAgIGlzU2VsZWN0ZWQsXG4gICAgICBhcHBlYXJhbmNlLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgd2FybmluZyhcbiAgICAgICAgdHlwZW9mIHRoaXMucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJyxcbiAgICAgICAgJzxUYWI+IGV4cGVjdHMgYG9uU2VsZWN0YCBwcm9wLCBidXQgeW91IHBhc3NlZCBgb25DbGlja2AuJ1xuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IHRleHRTaXplID0gdGhlbWUuZ2V0VGV4dFNpemVGb3JDb250cm9sSGVpZ2h0KGhlaWdodClcblxuICAgIGxldCBlbGVtZW50QmFzZWRQcm9wc1xuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgZWxlbWVudEJhc2VkUHJvcHMgPSB7XG4gICAgICAgICdhcmlhLWRpc2FibGVkJzogdHJ1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpcyA9PT0gJ2EnKSB7XG4gICAgICAvLyBVc2UgYXJpYS1jdXJyZW50IHdoZW4gaXQncyBhIGxpbmtcbiAgICAgIC8vIGh0dHBzOi8vdGluay51ay91c2luZy10aGUtYXJpYS1jdXJyZW50LWF0dHJpYnV0ZS9cbiAgICAgIGVsZW1lbnRCYXNlZFByb3BzID0gaXNTZWxlY3RlZFxuICAgICAgICA/IHtcbiAgICAgICAgICAgIC4uLmVsZW1lbnRCYXNlZFByb3BzLFxuICAgICAgICAgICAgJ2FyaWEtY3VycmVudCc6ICdwYWdlJ1xuICAgICAgICAgIH1cbiAgICAgICAgOiB7fVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBVc2UgYSByb2xlPVwidGFibGlzdFwiIGFyb3VuZCB0aGUgdGFic1xuICAgICAgLy8gQWxzbyBwYXNzIGRvd24gYSBhcmlhLWNvbnRyb2xzPVwicGFuZWxJZFwiXG4gICAgICAvLyBodHRwczovL3d3dy5zdGVmYW5qdWRpcy5jb20vYmxvZy9hcmlhLXNlbGVjdGVkLWFuZC13aGVuLXRvLXVzZS1pdC9cbiAgICAgIGVsZW1lbnRCYXNlZFByb3BzID0ge1xuICAgICAgICAuLi5lbGVtZW50QmFzZWRQcm9wcyxcbiAgICAgICAgJ2FyaWEtc2VsZWN0ZWQnOiBpc1NlbGVjdGVkLFxuICAgICAgICByb2xlOiAndGFiJ1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8VGV4dFxuICAgICAgICBjbGFzc05hbWU9e3RoZW1lLmdldFRhYkNsYXNzTmFtZShhcHBlYXJhbmNlKX1cbiAgICAgICAgaXM9e2lzfVxuICAgICAgICBzaXplPXt0ZXh0U2l6ZX1cbiAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgIHsuLi5UYWIuc3R5bGVzfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XG4gICAgICAgIG9uS2V5UHJlc3M9e3RoaXMuaGFuZGxlS2V5UHJlc3N9XG4gICAgICAgIHsuLi5lbGVtZW50QmFzZWRQcm9wc31cbiAgICAgIC8+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShUYWIpXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxhQUFoQixRQUFxQyxPQUFyQztBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxJQUFULFFBQXFCLGtCQUFyQjtBQUNBLFNBQVNDLFNBQVQsUUFBMEIsYUFBMUI7QUFDQSxPQUFPQyxPQUFQLE1BQW9CLG1CQUFwQjs7SUFFTUMsRzs7Ozs7Ozs7Ozs7Ozs7OztrRUFrRFUsVUFBQUMsQ0FBQyxFQUFJO01BQ2pCLElBQUksT0FBTyxNQUFLQyxLQUFMLENBQVdDLE9BQWxCLEtBQThCLFVBQWxDLEVBQThDO1FBQzVDLE1BQUtELEtBQUwsQ0FBV0MsT0FBWCxDQUFtQkYsQ0FBbkI7TUFDRDs7TUFFRCxNQUFLQyxLQUFMLENBQVdFLFFBQVg7SUFDRCxDOztxRUFFZ0IsVUFBQUgsQ0FBQyxFQUFJO01BQ3BCLElBQUlBLENBQUMsQ0FBQ0ksR0FBRixLQUFVLE9BQVYsSUFBcUJKLENBQUMsQ0FBQ0ksR0FBRixLQUFVLEdBQW5DLEVBQXdDO1FBQ3RDLE1BQUtILEtBQUwsQ0FBV0UsUUFBWDs7UUFDQUgsQ0FBQyxDQUFDSyxjQUFGO01BQ0Q7O01BRUQsTUFBS0osS0FBTCxDQUFXSyxVQUFYLENBQXNCTixDQUF0QjtJQUNELEM7Ozs7Ozs7V0FFRCxrQkFBUztNQUNQLGtCQVNJLEtBQUtDLEtBVFQ7TUFBQSxJQUNFTSxLQURGLGVBQ0VBLEtBREY7TUFBQSxJQUVFQyxFQUZGLGVBRUVBLEVBRkY7TUFBQSxJQUdFQyxNQUhGLGVBR0VBLE1BSEY7TUFBQSxJQUlFTixRQUpGLGVBSUVBLFFBSkY7TUFBQSxJQUtFTyxVQUxGLGVBS0VBLFVBTEY7TUFBQSxJQU1FQyxVQU5GLGVBTUVBLFVBTkY7TUFBQSxJQU9FQyxRQVBGLGVBT0VBLFFBUEY7TUFBQSxJQVFLWCxLQVJMOztNQVdBLElBQUlZLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxRQUFaLEtBQXlCLFlBQTdCLEVBQTJDO1FBQ3pDakIsT0FBTyxDQUNMLE9BQU8sS0FBS0csS0FBTCxDQUFXQyxPQUFsQixLQUE4QixVQUR6QixFQUVMLDBEQUZLLENBQVA7TUFJRDs7TUFFRCxJQUFNYyxRQUFRLEdBQUdULEtBQUssQ0FBQ1UsMkJBQU4sQ0FBa0NSLE1BQWxDLENBQWpCO01BRUEsSUFBSVMsaUJBQUo7O01BQ0EsSUFBSU4sUUFBSixFQUFjO1FBQ1pNLGlCQUFpQixHQUFHO1VBQ2xCLGlCQUFpQjtRQURDLENBQXBCO01BR0Q7O01BRUQsSUFBSVYsRUFBRSxLQUFLLEdBQVgsRUFBZ0I7UUFDZDtRQUNBO1FBQ0FVLGlCQUFpQixHQUFHUixVQUFVLG1DQUVyQlEsaUJBRnFCO1VBR3hCLGdCQUFnQjtRQUhRLEtBSzFCLEVBTEo7TUFNRCxDQVRELE1BU087UUFDTDtRQUNBO1FBQ0E7UUFDQUEsaUJBQWlCLG1DQUNaQSxpQkFEWTtVQUVmLGlCQUFpQlIsVUFGRjtVQUdmUyxJQUFJLEVBQUU7UUFIUyxFQUFqQjtNQUtEOztNQUVELG9CQUNFLG9CQUFDLElBQUQ7UUFDRSxTQUFTLEVBQUVaLEtBQUssQ0FBQ2EsZUFBTixDQUFzQlQsVUFBdEIsQ0FEYjtRQUVFLEVBQUUsRUFBRUgsRUFGTjtRQUdFLElBQUksRUFBRVEsUUFIUjtRQUlFLE1BQU0sRUFBRVA7TUFKVixHQUtNVixHQUFHLENBQUNzQixNQUxWLEVBTU1wQixLQU5OO1FBT0UsT0FBTyxFQUFFLEtBQUtxQixXQVBoQjtRQVFFLFVBQVUsRUFBRSxLQUFLQztNQVJuQixHQVNNTCxpQkFUTixFQURGO0lBYUQ7Ozs7RUFoSWV4QixhOztBQUFaSyxHOztnQkFBQUEsRywrQ0FLQ0gsSUFBSSxDQUFDNEIsUztFQUVSO0FBQ0o7QUFDQTtFQUNJckIsUUFBUSxFQUFFUixTQUFTLENBQUM4QixJOztFQUVwQjtBQUNKO0FBQ0E7RUFDSWYsVUFBVSxFQUFFZixTQUFTLENBQUMrQixJOztFQUV0QjtBQUNKO0FBQ0E7QUFDQTtFQUNJZixVQUFVLEVBQUVoQixTQUFTLENBQUNnQyxNOztFQUV0QjtBQUNKO0FBQ0E7RUFDSXBCLEtBQUssRUFBRVosU0FBUyxDQUFDaUMsTUFBVixDQUFpQkM7OztnQkExQnRCOUIsRyxrQkE2QmtCO0VBQ3BCSSxRQUFRLEVBQUUsb0JBQU0sQ0FBRSxDQURFO0VBRXBCRyxVQUFVLEVBQUUsc0JBQU0sQ0FBRSxDQUZBO0VBR3BCRSxFQUFFLEVBQUUsTUFIZ0I7RUFJcEJDLE1BQU0sRUFBRSxFQUpZO0VBS3BCRyxRQUFRLEVBQUU7QUFMVSxDOztnQkE3QmxCYixHLFlBcUNZO0VBQ2QrQixPQUFPLEVBQUUsYUFESztFQUVkQyxVQUFVLEVBQUUsR0FGRTtFQUdkQyxRQUFRLEVBQUUsQ0FISTtFQUlkQyxPQUFPLEVBQUUsQ0FKSztFQUtkQyxZQUFZLEVBQUUsQ0FMQTtFQU1kQyxVQUFVLEVBQUUsTUFORTtFQU9kQyxVQUFVLEVBQUUsUUFQRTtFQVFkQyxjQUFjLEVBQUUsUUFSRjtFQVNkQyxjQUFjLEVBQUUsTUFURjtFQVVkQyxRQUFRLEVBQUU7QUFWSSxDOztBQThGbEIsZUFBZTFDLFNBQVMsQ0FBQ0UsR0FBRCxDQUF4QiJ9