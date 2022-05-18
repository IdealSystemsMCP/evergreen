import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _excluded = ["children", "theme", "size", "selectMenuProps", "disabled", "placeholder", "isSelectable", "textProps"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';
import { withTheme } from '../../theme';
import { SelectMenu } from '../../select-menu';
import { Icon } from '../../icon';
import TextTableCell from './TextTableCell';
import TableCell from './TableCell';
var MIN_SELECT_MENU_WIDTH = 240;

var SelectMenuCell = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(SelectMenuCell, _React$PureComponent);

  var _super = _createSuper(SelectMenuCell);

  function SelectMenuCell(props) {
    var _this;

    _classCallCheck(this, SelectMenuCell);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "state", {
      targetWidth: MIN_SELECT_MENU_WIDTH,
      shouldClickToggle: false,
      isFocused: false
    });

    _defineProperty(_assertThisInitialized(_this), "onResize", function () {
      _this.updateOnResize();
    });

    _defineProperty(_assertThisInitialized(_this), "updateOnResize", function () {
      if (!_this.mainRef) return;
      var targetWidth = _this.mainRef.offsetWidth;

      _this.setState({
        targetWidth: Math.max(MIN_SELECT_MENU_WIDTH, targetWidth)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onMainRef", function (getRef, ref) {
      _this.mainRef = ref;
      getRef(ref);
    });

    _defineProperty(_assertThisInitialized(_this), "onOverlayRef", function (ref) {
      _this.overlayRef = ref;
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (toggle, isShown, e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        e.stopPropagation();

        if (!isShown && _this.props.isSelectable && !_this.props.disabled) {
          toggle();
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleDoubleClick", function (toggle, isShown) {
      if (!isShown && _this.props.isSelectable && !_this.props.disabled) {
        toggle();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (toggle, isShown) {
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

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function () {
      _this.setState({
        isFocused: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function () {
      _this.setState({
        shouldClickToggle: false,
        isFocused: false
      });
    });

    _this.onResize = debounce(_this.onResize, 200);
    return _this;
  }

  _createClass(SelectMenuCell, [{
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
          props = _objectWithoutProperties(_this$props, _excluded);

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

      return /*#__PURE__*/React.createElement(SelectMenu, _extends({
        width: targetWidth
      }, selectMenuProps), function (_ref) {
        var toggle = _ref.toggle,
            getRef = _ref.getRef,
            isShown = _ref.isShown;
        return /*#__PURE__*/React.createElement(TextTableCell, _extends({
          innerRef: _this2.onMainRef.bind(null, getRef),
          onClick: _this2.handleClick.bind(null, toggle, isShown),
          onFocus: _this2.handleFocus.bind(null, toggle, isShown),
          onBlur: _this2.handleBlur,
          isSelectable: isSelectable && !disabled,
          rightView: isSelectable ? /*#__PURE__*/React.createElement(Icon, {
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
}(React.PureComponent);

SelectMenuCell.displayName = "SelectMenuCell";

_defineProperty(SelectMenuCell, "propTypes", _objectSpread(_objectSpread({}, TableCell.propTypes), {}, {
  /*
  * Makes the TableCell focusable.
  * Will add tabIndex={-1 || this.props.tabIndex}.
  */
  isSelectable: PropTypes.bool.isRequired,

  /**
   * When true, the cell can't be edited.
   */
  disabled: PropTypes.bool,

  /**
   * Optional placeholder when children is falsy.
   */
  placeholder: PropTypes.node,

  /**
   * The size used for the TextTableCell and Textarea.
   */
  size: PropTypes.oneOf([300, 400]).isRequired,
  selectMenuProps: PropTypes.object
}));

_defineProperty(SelectMenuCell, "defaultProps", {
  size: 300,
  isSelectable: true
});

export default withTheme(SelectMenuCell);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsImRlYm91bmNlIiwid2l0aFRoZW1lIiwiU2VsZWN0TWVudSIsIkljb24iLCJUZXh0VGFibGVDZWxsIiwiVGFibGVDZWxsIiwiTUlOX1NFTEVDVF9NRU5VX1dJRFRIIiwiU2VsZWN0TWVudUNlbGwiLCJwcm9wcyIsInRhcmdldFdpZHRoIiwic2hvdWxkQ2xpY2tUb2dnbGUiLCJpc0ZvY3VzZWQiLCJ1cGRhdGVPblJlc2l6ZSIsIm1haW5SZWYiLCJvZmZzZXRXaWR0aCIsInNldFN0YXRlIiwiTWF0aCIsIm1heCIsImdldFJlZiIsInJlZiIsIm92ZXJsYXlSZWYiLCJ0b2dnbGUiLCJpc1Nob3duIiwiZSIsImtleSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiaXNTZWxlY3RhYmxlIiwiZGlzYWJsZWQiLCJzdGF0ZSIsIm9uUmVzaXplIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjaGlsZHJlbiIsInRoZW1lIiwic2l6ZSIsInNlbGVjdE1lbnVQcm9wcyIsInBsYWNlaG9sZGVyIiwidGV4dFByb3BzIiwiY3Vyc29yIiwib25NYWluUmVmIiwiYmluZCIsImhhbmRsZUNsaWNrIiwiaGFuZGxlRm9jdXMiLCJoYW5kbGVCbHVyIiwib3BhY2l0eSIsImhhbmRsZUtleURvd24iLCJoYW5kbGVEb3VibGVDbGljayIsIlB1cmVDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJib29sIiwiaXNSZXF1aXJlZCIsIm5vZGUiLCJvbmVPZiIsIm9iamVjdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvU2VsZWN0TWVudUNlbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJ2xvZGFzaC5kZWJvdW5jZSdcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuaW1wb3J0IHsgU2VsZWN0TWVudSB9IGZyb20gJy4uLy4uL3NlbGVjdC1tZW51J1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJy4uLy4uL2ljb24nXG5pbXBvcnQgVGV4dFRhYmxlQ2VsbCBmcm9tICcuL1RleHRUYWJsZUNlbGwnXG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJy4vVGFibGVDZWxsJ1xuXG5jb25zdCBNSU5fU0VMRUNUX01FTlVfV0lEVEggPSAyNDBcblxuY2xhc3MgU2VsZWN0TWVudUNlbGwgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyB0aGUgVGFibGVDZWxsIGNvbXBvbmVudCBhcyB0aGUgYmFzZS5cbiAgICAgKi9cbiAgICAuLi5UYWJsZUNlbGwucHJvcFR5cGVzLFxuXG4gICAgLypcbiAgICAqIE1ha2VzIHRoZSBUYWJsZUNlbGwgZm9jdXNhYmxlLlxuICAgICogV2lsbCBhZGQgdGFiSW5kZXg9ey0xIHx8IHRoaXMucHJvcHMudGFiSW5kZXh9LlxuICAgICovXG4gICAgaXNTZWxlY3RhYmxlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgY2VsbCBjYW4ndCBiZSBlZGl0ZWQuXG4gICAgICovXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogT3B0aW9uYWwgcGxhY2Vob2xkZXIgd2hlbiBjaGlsZHJlbiBpcyBmYWxzeS5cbiAgICAgKi9cbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2l6ZSB1c2VkIGZvciB0aGUgVGV4dFRhYmxlQ2VsbCBhbmQgVGV4dGFyZWEuXG4gICAgICovXG4gICAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFszMDAsIDQwMF0pLmlzUmVxdWlyZWQsXG5cbiAgICBzZWxlY3RNZW51UHJvcHM6IFByb3BUeXBlcy5vYmplY3RcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgc2l6ZTogMzAwLFxuICAgIGlzU2VsZWN0YWJsZTogdHJ1ZVxuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgdGFyZ2V0V2lkdGg6IE1JTl9TRUxFQ1RfTUVOVV9XSURUSCxcbiAgICBzaG91bGRDbGlja1RvZ2dsZTogZmFsc2UsXG4gICAgaXNGb2N1c2VkOiBmYWxzZVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLm9uUmVzaXplID0gZGVib3VuY2UodGhpcy5vblJlc2l6ZSwgMjAwKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gQ2FsbCB0aGlzIHRvIGluaXRpYWxpemUgYW5kIHNldFxuICAgIHRoaXMudXBkYXRlT25SZXNpemUoKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uUmVzaXplLCBmYWxzZSlcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uUmVzaXplKVxuICB9XG5cbiAgb25SZXNpemUgPSAoKSA9PiB7XG4gICAgdGhpcy51cGRhdGVPblJlc2l6ZSgpXG4gIH1cblxuICB1cGRhdGVPblJlc2l6ZSA9ICgpID0+IHtcbiAgICBpZiAoIXRoaXMubWFpblJlZikgcmV0dXJuXG4gICAgY29uc3QgdGFyZ2V0V2lkdGggPSB0aGlzLm1haW5SZWYub2Zmc2V0V2lkdGhcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRhcmdldFdpZHRoOiBNYXRoLm1heChNSU5fU0VMRUNUX01FTlVfV0lEVEgsIHRhcmdldFdpZHRoKVxuICAgIH0pXG4gIH1cblxuICBvbk1haW5SZWYgPSAoZ2V0UmVmLCByZWYpID0+IHtcbiAgICB0aGlzLm1haW5SZWYgPSByZWZcbiAgICBnZXRSZWYocmVmKVxuICB9XG5cbiAgb25PdmVybGF5UmVmID0gcmVmID0+IHtcbiAgICB0aGlzLm92ZXJsYXlSZWYgPSByZWZcbiAgfVxuXG4gIGhhbmRsZUtleURvd24gPSAodG9nZ2xlLCBpc1Nob3duLCBlKSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgICAgaWYgKCFpc1Nob3duICYmIHRoaXMucHJvcHMuaXNTZWxlY3RhYmxlICYmICF0aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgIHRvZ2dsZSgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlRG91YmxlQ2xpY2sgPSAodG9nZ2xlLCBpc1Nob3duKSA9PiB7XG4gICAgaWYgKCFpc1Nob3duICYmIHRoaXMucHJvcHMuaXNTZWxlY3RhYmxlICYmICF0aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICB0b2dnbGUoKVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUNsaWNrID0gKHRvZ2dsZSwgaXNTaG93bikgPT4ge1xuICAgIGNvbnN0IHsgc2hvdWxkQ2xpY2tUb2dnbGUgfSA9IHRoaXMuc3RhdGVcblxuICAgIGlmICghc2hvdWxkQ2xpY2tUb2dnbGUgJiYgIWlzU2hvd24pIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzaG91bGRDbGlja1RvZ2dsZTogdHJ1ZVxuICAgICAgfSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLmlzU2VsZWN0YWJsZSAmJiAhdGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgdG9nZ2xlKClcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzaG91bGRDbGlja1RvZ2dsZTogdHJ1ZVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBoYW5kbGVGb2N1cyA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzRm9jdXNlZDogdHJ1ZVxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVCbHVyID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvdWxkQ2xpY2tUb2dnbGU6IGZhbHNlLFxuICAgICAgaXNGb2N1c2VkOiBmYWxzZVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2hpbGRyZW4sXG4gICAgICB0aGVtZSxcbiAgICAgIHNpemUsXG4gICAgICBzZWxlY3RNZW51UHJvcHMsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgaXNTZWxlY3RhYmxlLFxuICAgICAgdGV4dFByb3BzID0ge30sXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyB0YXJnZXRXaWR0aCwgaXNGb2N1c2VkIH0gPSB0aGlzLnN0YXRlXG5cbiAgICBsZXQgY3Vyc29yID0gJ2RlZmF1bHQnXG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICBjdXJzb3IgPSAnbm90LWFsbG93ZWQnXG4gICAgfSBlbHNlIGlmIChpc1NlbGVjdGFibGUpIHtcbiAgICAgIGlmIChpc0ZvY3VzZWQpIHtcbiAgICAgICAgY3Vyc29yID0gJ3BvaW50ZXInXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdXJzb3IgPSAnZGVmYXVsdCdcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY3Vyc29yID0gJ3RleHQnXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTZWxlY3RNZW51IHdpZHRoPXt0YXJnZXRXaWR0aH0gey4uLnNlbGVjdE1lbnVQcm9wc30+XG4gICAgICAgIHsoeyB0b2dnbGUsIGdldFJlZiwgaXNTaG93biB9KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxUZXh0VGFibGVDZWxsXG4gICAgICAgICAgICAgIGlubmVyUmVmPXt0aGlzLm9uTWFpblJlZi5iaW5kKG51bGwsIGdldFJlZil9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2suYmluZChudWxsLCB0b2dnbGUsIGlzU2hvd24pfVxuICAgICAgICAgICAgICBvbkZvY3VzPXt0aGlzLmhhbmRsZUZvY3VzLmJpbmQobnVsbCwgdG9nZ2xlLCBpc1Nob3duKX1cbiAgICAgICAgICAgICAgb25CbHVyPXt0aGlzLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgIGlzU2VsZWN0YWJsZT17aXNTZWxlY3RhYmxlICYmICFkaXNhYmxlZH1cbiAgICAgICAgICAgICAgcmlnaHRWaWV3PXtcbiAgICAgICAgICAgICAgICBpc1NlbGVjdGFibGUgPyA8SWNvbiBpY29uPVwiY2FyZXQtZG93blwiIGNvbG9yPVwibXV0ZWRcIiAvPiA6IG51bGxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwXG4gICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9e2lzU2hvd259XG4gICAgICAgICAgICAgIGN1cnNvcj17aXNTaG93biA/ICdwb2ludGVyJyA6IGN1cnNvcn1cbiAgICAgICAgICAgICAgdGV4dFByb3BzPXt7XG4gICAgICAgICAgICAgICAgc2l6ZSxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiBkaXNhYmxlZCB8fCAoIWNoaWxkcmVuICYmIHBsYWNlaG9sZGVyKSA/IDAuNSA6IDEsXG4gICAgICAgICAgICAgICAgLi4udGV4dFByb3BzXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5oYW5kbGVLZXlEb3duLmJpbmQobnVsbCwgdG9nZ2xlLCBpc1Nob3duKX1cbiAgICAgICAgICAgICAgb25Eb3VibGVDbGljaz17dGhpcy5oYW5kbGVEb3VibGVDbGljay5iaW5kKG51bGwsIHRvZ2dsZSwgaXNTaG93bil9XG4gICAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2NoaWxkcmVuID8gY2hpbGRyZW4gOiBwbGFjZWhvbGRlcn1cbiAgICAgICAgICAgIDwvVGV4dFRhYmxlQ2VsbD5cbiAgICAgICAgICApXG4gICAgICAgIH19XG4gICAgICA8L1NlbGVjdE1lbnU+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShTZWxlY3RNZW51Q2VsbClcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsUUFBUCxNQUFxQixpQkFBckI7QUFDQSxTQUFTQyxTQUFULFFBQTBCLGFBQTFCO0FBQ0EsU0FBU0MsVUFBVCxRQUEyQixtQkFBM0I7QUFDQSxTQUFTQyxJQUFULFFBQXFCLFlBQXJCO0FBQ0EsT0FBT0MsYUFBUCxNQUEwQixpQkFBMUI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLGFBQXRCO0FBRUEsSUFBTUMscUJBQXFCLEdBQUcsR0FBOUI7O0lBRU1DLGM7Ozs7O0VBMENKLHdCQUFZQyxLQUFaLEVBQW1CO0lBQUE7O0lBQUE7O0lBQ2pCLDBCQUFNQSxLQUFOOztJQURpQix3REFOWDtNQUNOQyxXQUFXLEVBQUVILHFCQURQO01BRU5JLGlCQUFpQixFQUFFLEtBRmI7TUFHTkMsU0FBUyxFQUFFO0lBSEwsQ0FNVzs7SUFBQSwyREFlUixZQUFNO01BQ2YsTUFBS0MsY0FBTDtJQUNELENBakJrQjs7SUFBQSxpRUFtQkYsWUFBTTtNQUNyQixJQUFJLENBQUMsTUFBS0MsT0FBVixFQUFtQjtNQUNuQixJQUFNSixXQUFXLEdBQUcsTUFBS0ksT0FBTCxDQUFhQyxXQUFqQzs7TUFDQSxNQUFLQyxRQUFMLENBQWM7UUFDWk4sV0FBVyxFQUFFTyxJQUFJLENBQUNDLEdBQUwsQ0FBU1gscUJBQVQsRUFBZ0NHLFdBQWhDO01BREQsQ0FBZDtJQUdELENBekJrQjs7SUFBQSw0REEyQlAsVUFBQ1MsTUFBRCxFQUFTQyxHQUFULEVBQWlCO01BQzNCLE1BQUtOLE9BQUwsR0FBZU0sR0FBZjtNQUNBRCxNQUFNLENBQUNDLEdBQUQsQ0FBTjtJQUNELENBOUJrQjs7SUFBQSwrREFnQ0osVUFBQUEsR0FBRyxFQUFJO01BQ3BCLE1BQUtDLFVBQUwsR0FBa0JELEdBQWxCO0lBQ0QsQ0FsQ2tCOztJQUFBLGdFQW9DSCxVQUFDRSxNQUFELEVBQVNDLE9BQVQsRUFBa0JDLENBQWxCLEVBQXdCO01BQ3RDLElBQUlBLENBQUMsQ0FBQ0MsR0FBRixLQUFVLE9BQWQsRUFBdUI7UUFDckJELENBQUMsQ0FBQ0UsY0FBRjtRQUNBRixDQUFDLENBQUNHLGVBQUY7O1FBRUEsSUFBSSxDQUFDSixPQUFELElBQVksTUFBS2QsS0FBTCxDQUFXbUIsWUFBdkIsSUFBdUMsQ0FBQyxNQUFLbkIsS0FBTCxDQUFXb0IsUUFBdkQsRUFBaUU7VUFDL0RQLE1BQU07UUFDUDtNQUNGO0lBQ0YsQ0E3Q2tCOztJQUFBLG9FQStDQyxVQUFDQSxNQUFELEVBQVNDLE9BQVQsRUFBcUI7TUFDdkMsSUFBSSxDQUFDQSxPQUFELElBQVksTUFBS2QsS0FBTCxDQUFXbUIsWUFBdkIsSUFBdUMsQ0FBQyxNQUFLbkIsS0FBTCxDQUFXb0IsUUFBdkQsRUFBaUU7UUFDL0RQLE1BQU07TUFDUDtJQUNGLENBbkRrQjs7SUFBQSw4REFxREwsVUFBQ0EsTUFBRCxFQUFTQyxPQUFULEVBQXFCO01BQ2pDLElBQVFaLGlCQUFSLEdBQThCLE1BQUttQixLQUFuQyxDQUFRbkIsaUJBQVI7O01BRUEsSUFBSSxDQUFDQSxpQkFBRCxJQUFzQixDQUFDWSxPQUEzQixFQUFvQztRQUNsQyxNQUFLUCxRQUFMLENBQWM7VUFDWkwsaUJBQWlCLEVBQUU7UUFEUCxDQUFkOztRQUdBO01BQ0Q7O01BRUQsSUFBSSxNQUFLRixLQUFMLENBQVdtQixZQUFYLElBQTJCLENBQUMsTUFBS25CLEtBQUwsQ0FBV29CLFFBQTNDLEVBQXFEO1FBQ25EUCxNQUFNOztRQUNOLE1BQUtOLFFBQUwsQ0FBYztVQUNaTCxpQkFBaUIsRUFBRTtRQURQLENBQWQ7TUFHRDtJQUNGLENBckVrQjs7SUFBQSw4REF1RUwsWUFBTTtNQUNsQixNQUFLSyxRQUFMLENBQWM7UUFDWkosU0FBUyxFQUFFO01BREMsQ0FBZDtJQUdELENBM0VrQjs7SUFBQSw2REE2RU4sWUFBTTtNQUNqQixNQUFLSSxRQUFMLENBQWM7UUFDWkwsaUJBQWlCLEVBQUUsS0FEUDtRQUVaQyxTQUFTLEVBQUU7TUFGQyxDQUFkO0lBSUQsQ0FsRmtCOztJQUVqQixNQUFLbUIsUUFBTCxHQUFnQjlCLFFBQVEsQ0FBQyxNQUFLOEIsUUFBTixFQUFnQixHQUFoQixDQUF4QjtJQUZpQjtFQUdsQjs7OztXQUVELDZCQUFvQjtNQUNsQjtNQUNBLEtBQUtsQixjQUFMO01BQ0FtQixNQUFNLENBQUNDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLEtBQUtGLFFBQXZDLEVBQWlELEtBQWpEO0lBQ0Q7OztXQUVELGdDQUF1QjtNQUNyQkMsTUFBTSxDQUFDRSxtQkFBUCxDQUEyQixRQUEzQixFQUFxQyxLQUFLSCxRQUExQztJQUNEOzs7V0F1RUQsa0JBQVM7TUFBQTs7TUFDUCxrQkFVSSxLQUFLdEIsS0FWVDtNQUFBLElBQ0UwQixRQURGLGVBQ0VBLFFBREY7TUFBQSxJQUVFQyxLQUZGLGVBRUVBLEtBRkY7TUFBQSxJQUdFQyxJQUhGLGVBR0VBLElBSEY7TUFBQSxJQUlFQyxlQUpGLGVBSUVBLGVBSkY7TUFBQSxJQUtFVCxRQUxGLGVBS0VBLFFBTEY7TUFBQSxJQU1FVSxXQU5GLGVBTUVBLFdBTkY7TUFBQSxJQU9FWCxZQVBGLGVBT0VBLFlBUEY7TUFBQSx3Q0FRRVksU0FSRjtNQUFBLElBUUVBLFNBUkYsc0NBUWMsRUFSZDtNQUFBLElBU0svQixLQVRMOztNQVdBLGtCQUFtQyxLQUFLcUIsS0FBeEM7TUFBQSxJQUFRcEIsV0FBUixlQUFRQSxXQUFSO01BQUEsSUFBcUJFLFNBQXJCLGVBQXFCQSxTQUFyQjtNQUVBLElBQUk2QixNQUFNLEdBQUcsU0FBYjs7TUFDQSxJQUFJWixRQUFKLEVBQWM7UUFDWlksTUFBTSxHQUFHLGFBQVQ7TUFDRCxDQUZELE1BRU8sSUFBSWIsWUFBSixFQUFrQjtRQUN2QixJQUFJaEIsU0FBSixFQUFlO1VBQ2I2QixNQUFNLEdBQUcsU0FBVDtRQUNELENBRkQsTUFFTztVQUNMQSxNQUFNLEdBQUcsU0FBVDtRQUNEO01BQ0YsQ0FOTSxNQU1BO1FBQ0xBLE1BQU0sR0FBRyxNQUFUO01BQ0Q7O01BRUQsb0JBQ0Usb0JBQUMsVUFBRDtRQUFZLEtBQUssRUFBRS9CO01BQW5CLEdBQW9DNEIsZUFBcEMsR0FDRyxnQkFBaUM7UUFBQSxJQUE5QmhCLE1BQThCLFFBQTlCQSxNQUE4QjtRQUFBLElBQXRCSCxNQUFzQixRQUF0QkEsTUFBc0I7UUFBQSxJQUFkSSxPQUFjLFFBQWRBLE9BQWM7UUFDaEMsb0JBQ0Usb0JBQUMsYUFBRDtVQUNFLFFBQVEsRUFBRSxNQUFJLENBQUNtQixTQUFMLENBQWVDLElBQWYsQ0FBb0IsSUFBcEIsRUFBMEJ4QixNQUExQixDQURaO1VBRUUsT0FBTyxFQUFFLE1BQUksQ0FBQ3lCLFdBQUwsQ0FBaUJELElBQWpCLENBQXNCLElBQXRCLEVBQTRCckIsTUFBNUIsRUFBb0NDLE9BQXBDLENBRlg7VUFHRSxPQUFPLEVBQUUsTUFBSSxDQUFDc0IsV0FBTCxDQUFpQkYsSUFBakIsQ0FBc0IsSUFBdEIsRUFBNEJyQixNQUE1QixFQUFvQ0MsT0FBcEMsQ0FIWDtVQUlFLE1BQU0sRUFBRSxNQUFJLENBQUN1QixVQUpmO1VBS0UsWUFBWSxFQUFFbEIsWUFBWSxJQUFJLENBQUNDLFFBTGpDO1VBTUUsU0FBUyxFQUNQRCxZQUFZLGdCQUFHLG9CQUFDLElBQUQ7WUFBTSxJQUFJLEVBQUMsWUFBWDtZQUF3QixLQUFLLEVBQUM7VUFBOUIsRUFBSCxHQUE4QyxJQVA5RDtVQVNFLHFCQVRGO1VBVUUsaUJBQWVMLE9BVmpCO1VBV0UsTUFBTSxFQUFFQSxPQUFPLEdBQUcsU0FBSCxHQUFla0IsTUFYaEM7VUFZRSxTQUFTO1lBQ1BKLElBQUksRUFBSkEsSUFETztZQUVQVSxPQUFPLEVBQUVsQixRQUFRLElBQUssQ0FBQ00sUUFBRCxJQUFhSSxXQUExQixHQUF5QyxHQUF6QyxHQUErQztVQUZqRCxHQUdKQyxTQUhJLENBWlg7VUFpQkUsU0FBUyxFQUFFLE1BQUksQ0FBQ1EsYUFBTCxDQUFtQkwsSUFBbkIsQ0FBd0IsSUFBeEIsRUFBOEJyQixNQUE5QixFQUFzQ0MsT0FBdEMsQ0FqQmI7VUFrQkUsYUFBYSxFQUFFLE1BQUksQ0FBQzBCLGlCQUFMLENBQXVCTixJQUF2QixDQUE0QixJQUE1QixFQUFrQ3JCLE1BQWxDLEVBQTBDQyxPQUExQztRQWxCakIsR0FtQk1kLEtBbkJOLEdBcUJHMEIsUUFBUSxHQUFHQSxRQUFILEdBQWNJLFdBckJ6QixDQURGO01BeUJELENBM0JILENBREY7SUErQkQ7Ozs7RUF4TDBCeEMsS0FBSyxDQUFDbUQsYTs7QUFBN0IxQyxjOztnQkFBQUEsYywrQ0FLQ0YsU0FBUyxDQUFDNkMsUztFQUViO0FBQ0o7QUFDQTtBQUNBO0VBQ0l2QixZQUFZLEVBQUU1QixTQUFTLENBQUNvRCxJQUFWLENBQWVDLFU7O0VBRTdCO0FBQ0o7QUFDQTtFQUNJeEIsUUFBUSxFQUFFN0IsU0FBUyxDQUFDb0QsSTs7RUFFcEI7QUFDSjtBQUNBO0VBQ0liLFdBQVcsRUFBRXZDLFNBQVMsQ0FBQ3NELEk7O0VBRXZCO0FBQ0o7QUFDQTtFQUNJakIsSUFBSSxFQUFFckMsU0FBUyxDQUFDdUQsS0FBVixDQUFnQixDQUFDLEdBQUQsRUFBTSxHQUFOLENBQWhCLEVBQTRCRixVO0VBRWxDZixlQUFlLEVBQUV0QyxTQUFTLENBQUN3RDs7O2dCQTVCekJoRCxjLGtCQStCa0I7RUFDcEI2QixJQUFJLEVBQUUsR0FEYztFQUVwQlQsWUFBWSxFQUFFO0FBRk0sQzs7QUE0SnhCLGVBQWUxQixTQUFTLENBQUNNLGNBQUQsQ0FBeEIifQ==