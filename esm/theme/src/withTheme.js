import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React from 'react';
import { ThemeConsumer } from './ThemeContext';
/**
 * HOC that uses ThemeConsumer.
 * @param {React.Component} WrappedComponent - Component that gets theme.
 */

function withTheme(WrappedComponent) {
  var _class;

  var displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  return _class = /*#__PURE__*/function (_React$Component) {
    _inherits(_class, _React$Component);

    var _super = _createSuper(_class);

    function _class() {
      _classCallCheck(this, _class);

      return _super.apply(this, arguments);
    }

    _createClass(_class, [{
      key: "render",
      value: function render() {
        var _this = this;

        return /*#__PURE__*/React.createElement(ThemeConsumer, null, function (theme) {
          return /*#__PURE__*/React.createElement(WrappedComponent, _extends({
            theme: theme
          }, _this.props));
        });
      }
    }]);

    return _class;
  }(React.Component), _defineProperty(_class, "displayName", "withTheme(".concat(displayName, ")")), _class;
}

export default withTheme;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlRoZW1lQ29uc3VtZXIiLCJ3aXRoVGhlbWUiLCJXcmFwcGVkQ29tcG9uZW50IiwiZGlzcGxheU5hbWUiLCJuYW1lIiwidGhlbWUiLCJwcm9wcyIsIkNvbXBvbmVudCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90aGVtZS9zcmMvd2l0aFRoZW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFRoZW1lQ29uc3VtZXIgfSBmcm9tICcuL1RoZW1lQ29udGV4dCdcblxuLyoqXG4gKiBIT0MgdGhhdCB1c2VzIFRoZW1lQ29uc3VtZXIuXG4gKiBAcGFyYW0ge1JlYWN0LkNvbXBvbmVudH0gV3JhcHBlZENvbXBvbmVudCAtIENvbXBvbmVudCB0aGF0IGdldHMgdGhlbWUuXG4gKi9cbmZ1bmN0aW9uIHdpdGhUaGVtZShXcmFwcGVkQ29tcG9uZW50KSB7XG4gIGNvbnN0IGRpc3BsYXlOYW1lID1cbiAgICBXcmFwcGVkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IFdyYXBwZWRDb21wb25lbnQubmFtZSB8fCAnQ29tcG9uZW50J1xuXG4gIHJldHVybiBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIGRpc3BsYXlOYW1lID0gYHdpdGhUaGVtZSgke2Rpc3BsYXlOYW1lfSlgXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGhlbWVDb25zdW1lcj5cbiAgICAgICAgICB7dGhlbWUgPT4gPFdyYXBwZWRDb21wb25lbnQgdGhlbWU9e3RoZW1lfSB7Li4udGhpcy5wcm9wc30gLz59XG4gICAgICAgIDwvVGhlbWVDb25zdW1lcj5cbiAgICAgIClcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxTQUFTQyxhQUFULFFBQThCLGdCQUE5QjtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNDLFNBQVQsQ0FBbUJDLGdCQUFuQixFQUFxQztFQUFBOztFQUNuQyxJQUFNQyxXQUFXLEdBQ2ZELGdCQUFnQixDQUFDQyxXQUFqQixJQUFnQ0QsZ0JBQWdCLENBQUNFLElBQWpELElBQXlELFdBRDNEO0VBR0E7SUFBQTs7SUFBQTs7SUFBQTtNQUFBOztNQUFBO0lBQUE7O0lBQUE7TUFBQTtNQUFBLE9BR0Usa0JBQVM7UUFBQTs7UUFDUCxvQkFDRSxvQkFBQyxhQUFELFFBQ0csVUFBQUMsS0FBSztVQUFBLG9CQUFJLG9CQUFDLGdCQUFEO1lBQWtCLEtBQUssRUFBRUE7VUFBekIsR0FBb0MsS0FBSSxDQUFDQyxLQUF6QyxFQUFKO1FBQUEsQ0FEUixDQURGO01BS0Q7SUFUSDs7SUFBQTtFQUFBLEVBQXFCUCxLQUFLLENBQUNRLFNBQTNCLDhEQUNvQ0osV0FEcEM7QUFXRDs7QUFFRCxlQUFlRixTQUFmIn0=