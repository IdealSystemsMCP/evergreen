"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

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

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = _interopRequireDefault(require("lodash.debounce"));

var _theme = require("../../theme");

var _selectMenu = require("../../select-menu");

var _icon = require("../../icon");

var _TextTableCell = _interopRequireDefault(require("./TextTableCell"));

var _TableCell = _interopRequireDefault(require("./TableCell"));

var _excluded = ["children", "theme", "size", "selectMenuProps", "disabled", "placeholder", "isSelectable", "textProps"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var MIN_SELECT_MENU_WIDTH = 240;

var SelectMenuCell = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(SelectMenuCell, _React$PureComponent);

  var _super = _createSuper(SelectMenuCell);

  function SelectMenuCell(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, SelectMenuCell);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      targetWidth: MIN_SELECT_MENU_WIDTH,
      shouldClickToggle: false,
      isFocused: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onResize", function () {
      _this.updateOnResize();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "updateOnResize", function () {
      if (!_this.mainRef) return;
      var targetWidth = _this.mainRef.offsetWidth;

      _this.setState({
        targetWidth: Math.max(MIN_SELECT_MENU_WIDTH, targetWidth)
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onMainRef", function (getRef, ref) {
      _this.mainRef = ref;
      getRef(ref);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onOverlayRef", function (ref) {
      _this.overlayRef = ref;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleKeyDown", function (toggle, isShown, e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        e.stopPropagation();

        if (!isShown && _this.props.isSelectable && !_this.props.disabled) {
          toggle();
        }
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleDoubleClick", function (toggle, isShown) {
      if (!isShown && _this.props.isSelectable && !_this.props.disabled) {
        toggle();
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClick", function (toggle, isShown) {
      var shouldClickToggle = _this.state.shouldClickToggle;

      if (!shouldClickToggle && !isShown) {
        _this.setState({
          shouldClickToggle: true
        });

        return;
      }

      if (_this.props.isSelectable && !_this.props.disabled) {
        toggle();

        _this.setState({
          shouldClickToggle: true
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleFocus", function () {
      _this.setState({
        isFocused: true
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleBlur", function () {
      _this.setState({
        shouldClickToggle: false,
        isFocused: false
      });
    });
    _this.onResize = (0, _lodash["default"])(_this.onResize, 200);
    return _this;
  }

  (0, _createClass2["default"])(SelectMenuCell, [{
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

      var _this$props = this.props,
          children = _this$props.children,
          theme = _this$props.theme,
          size = _this$props.size,
          selectMenuProps = _this$props.selectMenuProps,
          disabled = _this$props.disabled,
          placeholder = _this$props.placeholder,
          isSelectable = _this$props.isSelectable,
          _this$props$textProps = _this$props.textProps,
          textProps = _this$props$textProps === void 0 ? {} : _this$props$textProps,
          props = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      var _this$state = this.state,
          targetWidth = _this$state.targetWidth,
          isFocused = _this$state.isFocused;
      var cursor = 'default';

      if (disabled) {
        cursor = 'not-allowed';
      } else if (isSelectable) {
        if (isFocused) {
          cursor = 'pointer';
        } else {
          cursor = 'default';
        }
      } else {
        cursor = 'text';
      }

      return /*#__PURE__*/_react["default"].createElement(_selectMenu.SelectMenu, (0, _extends2["default"])({
        width: targetWidth
      }, selectMenuProps), function (_ref) {
        var toggle = _ref.toggle,
            getRef = _ref.getRef,
            isShown = _ref.isShown;
        return /*#__PURE__*/_react["default"].createElement(_TextTableCell["default"], (0, _extends2["default"])({
          innerRef: _this2.onMainRef.bind(null, getRef),
          onClick: _this2.handleClick.bind(null, toggle, isShown),
          onFocus: _this2.handleFocus.bind(null, toggle, isShown),
          onBlur: _this2.handleBlur,
          isSelectable: isSelectable && !disabled,
          rightView: isSelectable ? /*#__PURE__*/_react["default"].createElement(_icon.Icon, {
            icon: "caret-down",
            color: "muted"
          }) : null,
          "aria-haspopup": true,
          "aria-expanded": isShown,
          cursor: isShown ? 'pointer' : cursor,
          textProps: _objectSpread({
            size: size,
            opacity: disabled || !children && placeholder ? 0.5 : 1
          }, textProps),
          onKeyDown: _this2.handleKeyDown.bind(null, toggle, isShown),
          onDoubleClick: _this2.handleDoubleClick.bind(null, toggle, isShown)
        }, props), children ? children : placeholder);
      });
    }
  }]);
  return SelectMenuCell;
}(_react["default"].PureComponent);

SelectMenuCell.displayName = "SelectMenuCell";
(0, _defineProperty2["default"])(SelectMenuCell, "propTypes", _objectSpread(_objectSpread({}, _TableCell["default"].propTypes), {}, {
  /*
  * Makes the TableCell focusable.
  * Will add tabIndex={-1 || this.props.tabIndex}.
  */
  isSelectable: _propTypes["default"].bool.isRequired,

  /**
   * When true, the cell can't be edited.
   */
  disabled: _propTypes["default"].bool,

  /**
   * Optional placeholder when children is falsy.
   */
  placeholder: _propTypes["default"].node,

  /**
   * The size used for the TextTableCell and Textarea.
   */
  size: _propTypes["default"].oneOf([300, 400]).isRequired,
  selectMenuProps: _propTypes["default"].object
}));
(0, _defineProperty2["default"])(SelectMenuCell, "defaultProps", {
  size: 300,
  isSelectable: true
});

var _default = (0, _theme.withTheme)(SelectMenuCell);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJNSU5fU0VMRUNUX01FTlVfV0lEVEgiLCJTZWxlY3RNZW51Q2VsbCIsInByb3BzIiwidGFyZ2V0V2lkdGgiLCJzaG91bGRDbGlja1RvZ2dsZSIsImlzRm9jdXNlZCIsInVwZGF0ZU9uUmVzaXplIiwibWFpblJlZiIsIm9mZnNldFdpZHRoIiwic2V0U3RhdGUiLCJNYXRoIiwibWF4IiwiZ2V0UmVmIiwicmVmIiwib3ZlcmxheVJlZiIsInRvZ2dsZSIsImlzU2hvd24iLCJlIiwia2V5IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJpc1NlbGVjdGFibGUiLCJkaXNhYmxlZCIsInN0YXRlIiwib25SZXNpemUiLCJkZWJvdW5jZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2hpbGRyZW4iLCJ0aGVtZSIsInNpemUiLCJzZWxlY3RNZW51UHJvcHMiLCJwbGFjZWhvbGRlciIsInRleHRQcm9wcyIsImN1cnNvciIsIm9uTWFpblJlZiIsImJpbmQiLCJoYW5kbGVDbGljayIsImhhbmRsZUZvY3VzIiwiaGFuZGxlQmx1ciIsIm9wYWNpdHkiLCJoYW5kbGVLZXlEb3duIiwiaGFuZGxlRG91YmxlQ2xpY2siLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJUYWJsZUNlbGwiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwiaXNSZXF1aXJlZCIsIm5vZGUiLCJvbmVPZiIsIm9iamVjdCIsIndpdGhUaGVtZSJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvU2VsZWN0TWVudUNlbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJ2xvZGFzaC5kZWJvdW5jZSdcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuaW1wb3J0IHsgU2VsZWN0TWVudSB9IGZyb20gJy4uLy4uL3NlbGVjdC1tZW51J1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJy4uLy4uL2ljb24nXG5pbXBvcnQgVGV4dFRhYmxlQ2VsbCBmcm9tICcuL1RleHRUYWJsZUNlbGwnXG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJy4vVGFibGVDZWxsJ1xuXG5jb25zdCBNSU5fU0VMRUNUX01FTlVfV0lEVEggPSAyNDBcblxuY2xhc3MgU2VsZWN0TWVudUNlbGwgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgVGFibGVDZWxsIGNvbXBvbmVudCBhcyB0aGUgYmFzZS5cbiAgICAgKi9cbiAgICAuLi5UYWJsZUNlbGwucHJvcFR5cGVzLFxuXG4gICAgLypcbiAgICAqIE1ha2VzIHRoZSBUYWJsZUNlbGwgZm9jdXNhYmxlLlxuICAgICogV2lsbCBhZGQgdGFiSW5kZXg9ey0xIHx8IHRoaXMucHJvcHMudGFiSW5kZXh9LlxuICAgICovXG4gICAgaXNTZWxlY3RhYmxlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgY2VsbCBjYW4ndCBiZSBlZGl0ZWQuXG4gICAgICovXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogT3B0aW9uYWwgcGxhY2Vob2xkZXIgd2hlbiBjaGlsZHJlbiBpcyBmYWxzeS5cbiAgICAgKi9cbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2l6ZSB1c2VkIGZvciB0aGUgVGV4dFRhYmxlQ2VsbCBhbmQgVGV4dGFyZWEuXG4gICAgICovXG4gICAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFszMDAsIDQwMF0pLmlzUmVxdWlyZWQsXG5cbiAgICBzZWxlY3RNZW51UHJvcHM6IFByb3BUeXBlcy5vYmplY3RcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgc2l6ZTogMzAwLFxuICAgIGlzU2VsZWN0YWJsZTogdHJ1ZVxuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgdGFyZ2V0V2lkdGg6IE1JTl9TRUxFQ1RfTUVOVV9XSURUSCxcbiAgICBzaG91bGRDbGlja1RvZ2dsZTogZmFsc2UsXG4gICAgaXNGb2N1c2VkOiBmYWxzZVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLm9uUmVzaXplID0gZGVib3VuY2UodGhpcy5vblJlc2l6ZSwgMjAwKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gQ2FsbCB0aGlzIHRvIGluaXRpYWxpemUgYW5kIHNldFxuICAgIHRoaXMudXBkYXRlT25SZXNpemUoKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uUmVzaXplLCBmYWxzZSlcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uUmVzaXplKVxuICB9XG5cbiAgb25SZXNpemUgPSAoKSA9PiB7XG4gICAgdGhpcy51cGRhdGVPblJlc2l6ZSgpXG4gIH1cblxuICB1cGRhdGVPblJlc2l6ZSA9ICgpID0+IHtcbiAgICBpZiAoIXRoaXMubWFpblJlZikgcmV0dXJuXG4gICAgY29uc3QgdGFyZ2V0V2lkdGggPSB0aGlzLm1haW5SZWYub2Zmc2V0V2lkdGhcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRhcmdldFdpZHRoOiBNYXRoLm1heChNSU5fU0VMRUNUX01FTlVfV0lEVEgsIHRhcmdldFdpZHRoKVxuICAgIH0pXG4gIH1cblxuICBvbk1haW5SZWYgPSAoZ2V0UmVmLCByZWYpID0+IHtcbiAgICB0aGlzLm1haW5SZWYgPSByZWZcbiAgICBnZXRSZWYocmVmKVxuICB9XG5cbiAgb25PdmVybGF5UmVmID0gcmVmID0+IHtcbiAgICB0aGlzLm92ZXJsYXlSZWYgPSByZWZcbiAgfVxuXG4gIGhhbmRsZUtleURvd24gPSAodG9nZ2xlLCBpc1Nob3duLCBlKSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgICAgaWYgKCFpc1Nob3duICYmIHRoaXMucHJvcHMuaXNTZWxlY3RhYmxlICYmICF0aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgIHRvZ2dsZSgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRG91YmxlQ2xpY2sgPSAodG9nZ2xlLCBpc1Nob3duKSA9PiB7XG4gICAgaWYgKCFpc1Nob3duICYmIHRoaXMucHJvcHMuaXNTZWxlY3RhYmxlICYmICF0aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICB0b2dnbGUoKVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUNsaWNrID0gKHRvZ2dsZSwgaXNTaG93bikgPT4ge1xuICAgIGNvbnN0IHsgc2hvdWxkQ2xpY2tUb2dnbGUgfSA9IHRoaXMuc3RhdGVcblxuICAgIGlmICghc2hvdWxkQ2xpY2tUb2dnbGUgJiYgIWlzU2hvd24pIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzaG91bGRDbGlja1RvZ2dsZTogdHJ1ZVxuICAgICAgfSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLmlzU2VsZWN0YWJsZSAmJiAhdGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgdG9nZ2xlKClcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzaG91bGRDbGlja1RvZ2dsZTogdHJ1ZVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBoYW5kbGVGb2N1cyA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzRm9jdXNlZDogdHJ1ZVxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVCbHVyID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvdWxkQ2xpY2tUb2dnbGU6IGZhbHNlLFxuICAgICAgaXNGb2N1c2VkOiBmYWxzZVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2hpbGRyZW4sXG4gICAgICB0aGVtZSxcbiAgICAgIHNpemUsXG4gICAgICBzZWxlY3RNZW51UHJvcHMsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgaXNTZWxlY3RhYmxlLFxuICAgICAgdGV4dFByb3BzID0ge30sXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyB0YXJnZXRXaWR0aCwgaXNGb2N1c2VkIH0gPSB0aGlzLnN0YXRlXG5cbiAgICBsZXQgY3Vyc29yID0gJ2RlZmF1bHQnXG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICBjdXJzb3IgPSAnbm90LWFsbG93ZWQnXG4gICAgfSBlbHNlIGlmIChpc1NlbGVjdGFibGUpIHtcbiAgICAgIGlmIChpc0ZvY3VzZWQpIHtcbiAgICAgICAgY3Vyc29yID0gJ3BvaW50ZXInXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdXJzb3IgPSAnZGVmYXVsdCdcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY3Vyc29yID0gJ3RleHQnXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTZWxlY3RNZW51IHdpZHRoPXt0YXJnZXRXaWR0aH0gey4uLnNlbGVjdE1lbnVQcm9wc30+XG4gICAgICAgIHsoeyB0b2dnbGUsIGdldFJlZiwgaXNTaG93biB9KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxUZXh0VGFibGVDZWxsXG4gICAgICAgICAgICAgIGlubmVyUmVmPXt0aGlzLm9uTWFpblJlZi5iaW5kKG51bGwsIGdldFJlZil9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2suYmluZChudWxsLCB0b2dnbGUsIGlzU2hvd24pfVxuICAgICAgICAgICAgICBvbkZvY3VzPXt0aGlzLmhhbmRsZUZvY3VzLmJpbmQobnVsbCwgdG9nZ2xlLCBpc1Nob3duKX1cbiAgICAgICAgICAgICAgb25CbHVyPXt0aGlzLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgIGlzU2VsZWN0YWJsZT17aXNTZWxlY3RhYmxlICYmICFkaXNhYmxlZH1cbiAgICAgICAgICAgICAgcmlnaHRWaWV3PXtcbiAgICAgICAgICAgICAgICBpc1NlbGVjdGFibGUgPyA8SWNvbiBpY29uPVwiY2FyZXQtZG93blwiIGNvbG9yPVwibXV0ZWRcIiAvPiA6IG51bGxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwXG4gICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9e2lzU2hvd259XG4gICAgICAgICAgICAgIGN1cnNvcj17aXNTaG93biA/ICdwb2ludGVyJyA6IGN1cnNvcn1cbiAgICAgICAgICAgICAgdGV4dFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2l6ZSxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiBkaXNhYmxlZCB8fCAoIWNoaWxkcmVuICYmIHBsYWNlaG9sZGVyKSA/IDAuNSA6IDEsXG4gICAgICAgICAgICAgICAgLi4udGV4dFByb3BzXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5oYW5kbGVLZXlEb3duLmJpbmQobnVsbCwgdG9nZ2xlLCBpc1Nob3duKX1cbiAgICAgICAgICAgICAgb25Eb3VibGVDbGljaz17dGhpcy5oYW5kbGVEb3VibGVDbGljay5iaW5kKG51bGwsIHRvZ2dsZSwgaXNTaG93bil9XG4gICAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2NoaWxkcmVuID8gY2hpbGRyZW4gOiBwbGFjZWhvbGRlcn1cbiAgICAgICAgICAgIDwvVGV4dFRhYmxlQ2VsbD5cbiAgICAgICAgICApXG4gICAgICAgIH19XG4gICAgICA8L1NlbGVjdE1lbnU+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShTZWxlY3RNZW51Q2VsbClcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLHFCQUFxQixHQUFHLEdBQTlCOztJQUVNQyxjOzs7OztFQTBDSix3QkFBWUMsS0FBWixFQUFtQjtJQUFBOztJQUFBO0lBQ2pCLDBCQUFNQSxLQUFOO0lBRGlCLDBGQU5YO01BQ05DLFdBQVcsRUFBRUgscUJBRFA7TUFFTkksaUJBQWlCLEVBQUUsS0FGYjtNQUdOQyxTQUFTLEVBQUU7SUFITCxDQU1XO0lBQUEsNkZBZVIsWUFBTTtNQUNmLE1BQUtDLGNBQUw7SUFDRCxDQWpCa0I7SUFBQSxtR0FtQkYsWUFBTTtNQUNyQixJQUFJLENBQUMsTUFBS0MsT0FBVixFQUFtQjtNQUNuQixJQUFNSixXQUFXLEdBQUcsTUFBS0ksT0FBTCxDQUFhQyxXQUFqQzs7TUFDQSxNQUFLQyxRQUFMLENBQWM7UUFDWk4sV0FBVyxFQUFFTyxJQUFJLENBQUNDLEdBQUwsQ0FBU1gscUJBQVQsRUFBZ0NHLFdBQWhDO01BREQsQ0FBZDtJQUdELENBekJrQjtJQUFBLDhGQTJCUCxVQUFDUyxNQUFELEVBQVNDLEdBQVQsRUFBaUI7TUFDM0IsTUFBS04sT0FBTCxHQUFlTSxHQUFmO01BQ0FELE1BQU0sQ0FBQ0MsR0FBRCxDQUFOO0lBQ0QsQ0E5QmtCO0lBQUEsaUdBZ0NKLFVBQUFBLEdBQUcsRUFBSTtNQUNwQixNQUFLQyxVQUFMLEdBQWtCRCxHQUFsQjtJQUNELENBbENrQjtJQUFBLGtHQW9DSCxVQUFDRSxNQUFELEVBQVNDLE9BQVQsRUFBa0JDLENBQWxCLEVBQXdCO01BQ3RDLElBQUlBLENBQUMs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