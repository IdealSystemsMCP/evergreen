import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _excluded = ["theme", "className", "appearance"],
    _excluded2 = ["className"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { withTheme } from '../../theme';
import Text from './Text';

var Code = /*#__PURE__*/function (_PureComponent) {
  _inherits(Code, _PureComponent);

  var _super = _createSuper(Code);

  function Code() {
    _classCallCheck(this, Code);

    return _super.apply(this, arguments);
  }

  _createClass(Code, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          className = _this$props.className,
          appearance = _this$props.appearance,
          props = _objectWithoutProperties(_this$props, _excluded);

      var _theme$getCodeProps = theme.getCodeProps(appearance),
          _theme$getCodeProps$c = _theme$getCodeProps.className,
          themedClassName = _theme$getCodeProps$c === void 0 ? '' : _theme$getCodeProps$c,
          themeProps = _objectWithoutProperties(_theme$getCodeProps, _excluded2);

      return /*#__PURE__*/React.createElement(Text, _extends({
        is: "code",
        className: cx(className, themedClassName),
        fontFamily: "mono"
      }, themeProps, props));
    }
  }]);

  return Code;
}(PureComponent);

Code.displayName = "Code";

_defineProperty(Code, "propTypes", _objectSpread(_objectSpread({}, Text.propTypes), {}, {
  /**
   * The appearance of the code.
   */
  appearance: PropTypes.oneOf(['default', 'minimal']).isRequired,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired,

  /**
   * Class name passed to the button.
   * Only use if you know what you are doing.
   */
  className: PropTypes.string
}));

_defineProperty(Code, "defaultProps", {
  appearance: 'default'
});

export default withTheme(Code);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJjeCIsIndpdGhUaGVtZSIsIlRleHQiLCJDb2RlIiwicHJvcHMiLCJ0aGVtZSIsImNsYXNzTmFtZSIsImFwcGVhcmFuY2UiLCJnZXRDb2RlUHJvcHMiLCJ0aGVtZWRDbGFzc05hbWUiLCJ0aGVtZVByb3BzIiwicHJvcFR5cGVzIiwib25lT2YiLCJpc1JlcXVpcmVkIiwib2JqZWN0Iiwic3RyaW5nIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3R5cG9ncmFwaHkvc3JjL0NvZGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5pbXBvcnQgVGV4dCBmcm9tICcuL1RleHQnXG5cbmNsYXNzIENvZGUgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAuLi5UZXh0LnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBhcHBlYXJhbmNlIG9mIHRoZSBjb2RlLlxuICAgICAqL1xuICAgIGFwcGVhcmFuY2U6IFByb3BUeXBlcy5vbmVPZihbJ2RlZmF1bHQnLCAnbWluaW1hbCddKS5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlbWUgcHJvdmlkZWQgYnkgVGhlbWVQcm92aWRlci5cbiAgICAgKi9cbiAgICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogQ2xhc3MgbmFtZSBwYXNzZWQgdG8gdGhlIGJ1dHRvbi5cbiAgICAgKiBPbmx5IHVzZSBpZiB5b3Uga25vdyB3aGF0IHlvdSBhcmUgZG9pbmcuXG4gICAgICovXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGFwcGVhcmFuY2U6ICdkZWZhdWx0J1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGhlbWUsIGNsYXNzTmFtZSwgYXBwZWFyYW5jZSwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IHtcbiAgICAgIGNsYXNzTmFtZTogdGhlbWVkQ2xhc3NOYW1lID0gJycsXG4gICAgICAuLi50aGVtZVByb3BzXG4gICAgfSA9IHRoZW1lLmdldENvZGVQcm9wcyhhcHBlYXJhbmNlKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUZXh0XG4gICAgICAgIGlzPVwiY29kZVwiXG4gICAgICAgIGNsYXNzTmFtZT17Y3goY2xhc3NOYW1lLCB0aGVtZWRDbGFzc05hbWUpfVxuICAgICAgICBmb250RmFtaWx5PVwibW9ub1wiXG4gICAgICAgIHsuLi50aGVtZVByb3BzfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoQ29kZSlcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLGFBQWhCLFFBQXFDLE9BQXJDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLEVBQVAsTUFBZSxZQUFmO0FBQ0EsU0FBU0MsU0FBVCxRQUEwQixhQUExQjtBQUNBLE9BQU9DLElBQVAsTUFBaUIsUUFBakI7O0lBRU1DLEk7Ozs7Ozs7Ozs7Ozs7V0F5Qkosa0JBQVM7TUFDUCxrQkFBbUQsS0FBS0MsS0FBeEQ7TUFBQSxJQUFRQyxLQUFSLGVBQVFBLEtBQVI7TUFBQSxJQUFlQyxTQUFmLGVBQWVBLFNBQWY7TUFBQSxJQUEwQkMsVUFBMUIsZUFBMEJBLFVBQTFCO01BQUEsSUFBeUNILEtBQXpDOztNQUVBLDBCQUdJQyxLQUFLLENBQUNHLFlBQU4sQ0FBbUJELFVBQW5CLENBSEo7TUFBQSxnREFDRUQsU0FERjtNQUFBLElBQ2FHLGVBRGIsc0NBQytCLEVBRC9CO01BQUEsSUFFS0MsVUFGTDs7TUFLQSxvQkFDRSxvQkFBQyxJQUFEO1FBQ0UsRUFBRSxFQUFDLE1BREw7UUFFRSxTQUFTLEVBQUVWLEVBQUUsQ0FBQ00sU0FBRCxFQUFZRyxlQUFaLENBRmY7UUFHRSxVQUFVLEVBQUM7TUFIYixHQUlNQyxVQUpOLEVBS01OLEtBTE4sRUFERjtJQVNEOzs7O0VBMUNnQk4sYTs7QUFBYkssSTs7Z0JBQUFBLEksK0NBRUNELElBQUksQ0FBQ1MsUztFQUVSO0FBQ0o7QUFDQTtFQUNJSixVQUFVLEVBQUVSLFNBQVMsQ0FBQ2EsS0FBVixDQUFnQixDQUFDLFNBQUQsRUFBWSxTQUFaLENBQWhCLEVBQXdDQyxVOztFQUVwRDtBQUNKO0FBQ0E7RUFDSVIsS0FBSyxFQUFFTixTQUFTLENBQUNlLE1BQVYsQ0FBaUJELFU7O0VBRXhCO0FBQ0o7QUFDQTtBQUNBO0VBQ0lQLFNBQVMsRUFBRVAsU0FBUyxDQUFDZ0I7OztnQkFsQm5CWixJLGtCQXFCa0I7RUFDcEJJLFVBQVUsRUFBRTtBQURRLEM7O0FBd0J4QixlQUFlTixTQUFTLENBQUNFLElBQUQsQ0FBeEIifQ==