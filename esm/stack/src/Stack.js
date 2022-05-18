import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StackingOrder } from '../../constants';
import StackingContext from './StackingContext';

var Stack = /*#__PURE__*/function (_PureComponent) {
  _inherits(Stack, _PureComponent);

  var _super = _createSuper(Stack);

  function Stack() {
    _classCallCheck(this, Stack);

    return _super.apply(this, arguments);
  }

  _createClass(Stack, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          value = _this$props.value;
      return /*#__PURE__*/React.createElement(StackingContext.Consumer, null, function (previousValue) {
        var currentValue = Math.max(value, previousValue);
        var nextValue = currentValue + 1;
        return /*#__PURE__*/React.createElement(StackingContext.Provider, {
          value: nextValue
        }, children(currentValue));
      });
    }
  }]);

  return Stack;
}(PureComponent);

Stack.displayName = "Stack";

_defineProperty(Stack, "propTypes", {
  /**
   * Function that takes the current z-index and returns a React Node.
   * (zIndex) => ReactNode.
   */
  children: PropTypes.func.isRequired,

  /**
   * Set the value of the stack. This will increment for children.
   */
  value: PropTypes.number
});

_defineProperty(Stack, "defaultProps", {
  value: StackingOrder.STACKING_CONTEXT
});

export { Stack as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJTdGFja2luZ09yZGVyIiwiU3RhY2tpbmdDb250ZXh0IiwiU3RhY2siLCJwcm9wcyIsImNoaWxkcmVuIiwidmFsdWUiLCJwcmV2aW91c1ZhbHVlIiwiY3VycmVudFZhbHVlIiwiTWF0aCIsIm1heCIsIm5leHRWYWx1ZSIsImZ1bmMiLCJpc1JlcXVpcmVkIiwibnVtYmVyIiwiU1RBQ0tJTkdfQ09OVEVYVCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdGFjay9zcmMvU3RhY2suanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFN0YWNraW5nT3JkZXIgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnXG5pbXBvcnQgU3RhY2tpbmdDb250ZXh0IGZyb20gJy4vU3RhY2tpbmdDb250ZXh0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFjayBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRoYXQgdGFrZXMgdGhlIGN1cnJlbnQgei1pbmRleCBhbmQgcmV0dXJucyBhIFJlYWN0IE5vZGUuXG4gICAgICogKHpJbmRleCkgPT4gUmVhY3ROb2RlLlxuICAgICAqL1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSB2YWx1ZSBvZiB0aGUgc3RhY2suIFRoaXMgd2lsbCBpbmNyZW1lbnQgZm9yIGNoaWxkcmVuLlxuICAgICAqL1xuICAgIHZhbHVlOiBQcm9wVHlwZXMubnVtYmVyXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHZhbHVlOiBTdGFja2luZ09yZGVyLlNUQUNLSU5HX0NPTlRFWFRcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCB2YWx1ZSB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8U3RhY2tpbmdDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgICB7cHJldmlvdXNWYWx1ZSA9PiB7XG4gICAgICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gTWF0aC5tYXgodmFsdWUsIHByZXZpb3VzVmFsdWUpXG4gICAgICAgICAgY29uc3QgbmV4dFZhbHVlID0gY3VycmVudFZhbHVlICsgMVxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8U3RhY2tpbmdDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtuZXh0VmFsdWV9PlxuICAgICAgICAgICAgICB7Y2hpbGRyZW4oY3VycmVudFZhbHVlKX1cbiAgICAgICAgICAgIDwvU3RhY2tpbmdDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgICAgIClcbiAgICAgICAgfX1cbiAgICAgIDwvU3RhY2tpbmdDb250ZXh0LkNvbnN1bWVyPlxuICAgIClcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLGFBQWhCLFFBQXFDLE9BQXJDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLGFBQVQsUUFBOEIsaUJBQTlCO0FBQ0EsT0FBT0MsZUFBUCxNQUE0QixtQkFBNUI7O0lBRXFCQyxLOzs7Ozs7Ozs7Ozs7O1dBa0JuQixrQkFBUztNQUNQLGtCQUE0QixLQUFLQyxLQUFqQztNQUFBLElBQVFDLFFBQVIsZUFBUUEsUUFBUjtNQUFBLElBQWtCQyxLQUFsQixlQUFrQkEsS0FBbEI7TUFDQSxvQkFDRSxvQkFBQyxlQUFELENBQWlCLFFBQWpCLFFBQ0csVUFBQUMsYUFBYSxFQUFJO1FBQ2hCLElBQU1DLFlBQVksR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQVNKLEtBQVQsRUFBZ0JDLGFBQWhCLENBQXJCO1FBQ0EsSUFBTUksU0FBUyxHQUFHSCxZQUFZLEdBQUcsQ0FBakM7UUFDQSxvQkFDRSxvQkFBQyxlQUFELENBQWlCLFFBQWpCO1VBQTBCLEtBQUssRUFBRUc7UUFBakMsR0FDR04sUUFBUSxDQUFDRyxZQUFELENBRFgsQ0FERjtNQUtELENBVEgsQ0FERjtJQWFEOzs7O0VBakNnQ1QsYTs7QUFBZEksSzs7Z0JBQUFBLEssZUFDQTtFQUNqQjtBQUNKO0FBQ0E7QUFDQTtFQUNJRSxRQUFRLEVBQUVMLFNBQVMsQ0FBQ1ksSUFBVixDQUFlQyxVQUxSOztFQU9qQjtBQUNKO0FBQ0E7RUFDSVAsS0FBSyxFQUFFTixTQUFTLENBQUNjO0FBVkEsQzs7Z0JBREFYLEssa0JBY0c7RUFDcEJHLEtBQUssRUFBRUwsYUFBYSxDQUFDYztBQURELEM7O1NBZEhaLEsifQ==