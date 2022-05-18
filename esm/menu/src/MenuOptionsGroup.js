import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React from 'react';
import PropTypes from 'prop-types';
import { Pane } from '../../layers';
import { Heading } from '../../typography';
import { withTheme } from '../../theme';
import MenuOption from './MenuOption';

var MenuOptionsGroup = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(MenuOptionsGroup, _React$PureComponent);

  var _super = _createSuper(MenuOptionsGroup);

  function MenuOptionsGroup() {
    _classCallCheck(this, MenuOptionsGroup);

    return _super.apply(this, arguments);
  }

  _createClass(MenuOptionsGroup, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          options = _this$props.options,
          selected = _this$props.selected,
          onChange = _this$props.onChange;
      return /*#__PURE__*/React.createElement(Pane, {
        paddingY: 8
      }, title && /*#__PURE__*/React.createElement(Heading, {
        size: 100,
        marginLeft: 44,
        marginRight: 16,
        marginY: 8
      }, title), /*#__PURE__*/React.createElement(Pane, null, options.map(function (option) {
        return /*#__PURE__*/React.createElement(MenuOption, {
          key: option.value,
          isSelected: option.value === selected,
          onSelect: function onSelect() {
            return onChange(option.value);
          }
        }, option.label);
      })));
    }
  }]);

  return MenuOptionsGroup;
}(React.PureComponent);

MenuOptionsGroup.displayName = "MenuOptionsGroup";

_defineProperty(MenuOptionsGroup, "propTypes", {
  /**
   * Title of the menu group.
   */
  title: PropTypes.node,

  /**
   * The current value of the option group.
   */
  selected: PropTypes.any,

  /**
   * Function called when selection changes.
   */
  onChange: PropTypes.func,

  /**
   * List of options rendered in the group.
   */
  options: PropTypes.array
});

export default withTheme(MenuOptionsGroup);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIlBhbmUiLCJIZWFkaW5nIiwid2l0aFRoZW1lIiwiTWVudU9wdGlvbiIsIk1lbnVPcHRpb25zR3JvdXAiLCJwcm9wcyIsInRpdGxlIiwib3B0aW9ucyIsInNlbGVjdGVkIiwib25DaGFuZ2UiLCJtYXAiLCJvcHRpb24iLCJ2YWx1ZSIsImxhYmVsIiwiUHVyZUNvbXBvbmVudCIsIm5vZGUiLCJhbnkiLCJmdW5jIiwiYXJyYXkiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbWVudS9zcmMvTWVudU9wdGlvbnNHcm91cC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBQYW5lIH0gZnJvbSAnLi4vLi4vbGF5ZXJzJ1xuaW1wb3J0IHsgSGVhZGluZyB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcbmltcG9ydCBNZW51T3B0aW9uIGZyb20gJy4vTWVudU9wdGlvbidcblxuY2xhc3MgTWVudU9wdGlvbnNHcm91cCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIFRpdGxlIG9mIHRoZSBtZW51IGdyb3VwLlxuICAgICAqL1xuICAgIHRpdGxlOiBQcm9wVHlwZXMubm9kZSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBjdXJyZW50IHZhbHVlIG9mIHRoZSBvcHRpb24gZ3JvdXAuXG4gICAgICovXG4gICAgc2VsZWN0ZWQ6IFByb3BUeXBlcy5hbnksXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiBjYWxsZWQgd2hlbiBzZWxlY3Rpb24gY2hhbmdlcy5cbiAgICAgKi9cbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBMaXN0IG9mIG9wdGlvbnMgcmVuZGVyZWQgaW4gdGhlIGdyb3VwLlxuICAgICAqL1xuICAgIG9wdGlvbnM6IFByb3BUeXBlcy5hcnJheVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGl0bGUsIG9wdGlvbnMsIHNlbGVjdGVkLCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQYW5lIHBhZGRpbmdZPXs4fT5cbiAgICAgICAge3RpdGxlICYmIChcbiAgICAgICAgICA8SGVhZGluZyBzaXplPXsxMDB9IG1hcmdpbkxlZnQ9ezQ0fSBtYXJnaW5SaWdodD17MTZ9IG1hcmdpblk9ezh9PlxuICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgKX1cbiAgICAgICAgPFBhbmU+XG4gICAgICAgICAge29wdGlvbnMubWFwKChvcHRpb24pID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxNZW51T3B0aW9uXG4gICAgICAgICAgICAgICAga2V5PXtvcHRpb24udmFsdWV9XG4gICAgICAgICAgICAgICAgaXNTZWxlY3RlZD17b3B0aW9uLnZhbHVlID09PSBzZWxlY3RlZH1cbiAgICAgICAgICAgICAgICBvblNlbGVjdD17KCkgPT4gb25DaGFuZ2Uob3B0aW9uLnZhbHVlKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtvcHRpb24ubGFiZWx9XG4gICAgICAgICAgICAgIDwvTWVudU9wdGlvbj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9QYW5lPlxuICAgICAgPC9QYW5lPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoTWVudU9wdGlvbnNHcm91cClcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLElBQVQsUUFBcUIsY0FBckI7QUFDQSxTQUFTQyxPQUFULFFBQXdCLGtCQUF4QjtBQUNBLFNBQVNDLFNBQVQsUUFBMEIsYUFBMUI7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLGNBQXZCOztJQUVNQyxnQjs7Ozs7Ozs7Ozs7OztXQXVCSixrQkFBUztNQUNQLGtCQUErQyxLQUFLQyxLQUFwRDtNQUFBLElBQVFDLEtBQVIsZUFBUUEsS0FBUjtNQUFBLElBQWVDLE9BQWYsZUFBZUEsT0FBZjtNQUFBLElBQXdCQyxRQUF4QixlQUF3QkEsUUFBeEI7TUFBQSxJQUFrQ0MsUUFBbEMsZUFBa0NBLFFBQWxDO01BRUEsb0JBQ0Usb0JBQUMsSUFBRDtRQUFNLFFBQVEsRUFBRTtNQUFoQixHQUNHSCxLQUFLLGlCQUNKLG9CQUFDLE9BQUQ7UUFBUyxJQUFJLEVBQUUsR0FBZjtRQUFvQixVQUFVLEVBQUUsRUFBaEM7UUFBb0MsV0FBVyxFQUFFLEVBQWpEO1FBQXFELE9BQU8sRUFBRTtNQUE5RCxHQUNHQSxLQURILENBRkosZUFNRSxvQkFBQyxJQUFELFFBQ0dDLE9BQU8sQ0FBQ0csR0FBUixDQUFZLFVBQUNDLE1BQUQsRUFBWTtRQUN2QixvQkFDRSxvQkFBQyxVQUFEO1VBQ0UsR0FBRyxFQUFFQSxNQUFNLENBQUNDLEtBRGQ7VUFFRSxVQUFVLEVBQUVELE1BQU0sQ0FBQ0MsS0FBUCxLQUFpQkosUUFGL0I7VUFHRSxRQUFRLEVBQUU7WUFBQSxPQUFNQyxRQUFRLENBQUNFLE1BQU0sQ0FBQ0MsS0FBUixDQUFkO1VBQUE7UUFIWixHQUtHRCxNQUFNLENBQUNFLEtBTFYsQ0FERjtNQVNELENBVkEsQ0FESCxDQU5GLENBREY7SUFzQkQ7Ozs7RUFoRDRCZixLQUFLLENBQUNnQixhOztBQUEvQlYsZ0I7O2dCQUFBQSxnQixlQUNlO0VBQ2pCO0FBQ0o7QUFDQTtFQUNJRSxLQUFLLEVBQUVQLFNBQVMsQ0FBQ2dCLElBSkE7O0VBTWpCO0FBQ0o7QUFDQTtFQUNJUCxRQUFRLEVBQUVULFNBQVMsQ0FBQ2lCLEdBVEg7O0VBV2pCO0FBQ0o7QUFDQTtFQUNJUCxRQUFRLEVBQUVWLFNBQVMsQ0FBQ2tCLElBZEg7O0VBZ0JqQjtBQUNKO0FBQ0E7RUFDSVYsT0FBTyxFQUFFUixTQUFTLENBQUNtQjtBQW5CRixDOztBQWtEckIsZUFBZWhCLFNBQVMsQ0FBQ0UsZ0JBQUQsQ0FBeEIifQ==