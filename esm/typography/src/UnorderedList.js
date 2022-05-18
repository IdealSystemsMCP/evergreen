import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _excluded = ["children", "size", "icon", "iconColor"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from 'ui-box';

var UnorderedList = /*#__PURE__*/function (_PureComponent) {
  _inherits(UnorderedList, _PureComponent);

  var _super = _createSuper(UnorderedList);

  function UnorderedList() {
    _classCallCheck(this, UnorderedList);

    return _super.apply(this, arguments);
  }

  _createClass(UnorderedList, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          size = _this$props.size,
          icon = _this$props.icon,
          iconColor = _this$props.iconColor,
          props = _objectWithoutProperties(_this$props, _excluded); // Only pass down icon-related props if specified


      var inheritedProps = icon ? {
        size: size,
        icon: icon,
        iconColor: iconColor
      } : {
        size: size
      };
      var finalChildren = React.Children.map(children, function (child) {
        if (! /*#__PURE__*/React.isValidElement(child)) {
          return child;
        }

        return /*#__PURE__*/React.cloneElement(child, _objectSpread(_objectSpread({}, inheritedProps), child.props));
      });
      return /*#__PURE__*/React.createElement(Box, _extends({}, UnorderedList.styles, props), finalChildren);
    }
  }]);

  return UnorderedList;
}(PureComponent);

UnorderedList.displayName = "UnorderedList";

_defineProperty(UnorderedList, "propTypes", _objectSpread(_objectSpread({}, Box.propTypes), {}, {
  /**
   * Size of the text used in a list item.
   * Can be: 300, 400, 500, 600.
   */
  size: PropTypes.oneOf([300, 400, 500, 600]).isRequired,

  /**
   * When passed, adds a icon before each list item in the list
   * You can override this on a individual list item.
   */
  icon: PropTypes.string,

  /**
   * The color of the icon in each list item in the list.
   */
  iconColor: PropTypes.string
}));

_defineProperty(UnorderedList, "defaultProps", {
  size: 400
});

_defineProperty(UnorderedList, "styles", {
  is: 'ul',
  margin: 0,
  marginLeft: '1.1em',
  padding: 0,
  listStyle: 'disc'
});

export { UnorderedList as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJCb3giLCJVbm9yZGVyZWRMaXN0IiwicHJvcHMiLCJjaGlsZHJlbiIsInNpemUiLCJpY29uIiwiaWNvbkNvbG9yIiwiaW5oZXJpdGVkUHJvcHMiLCJmaW5hbENoaWxkcmVuIiwiQ2hpbGRyZW4iLCJtYXAiLCJjaGlsZCIsImlzVmFsaWRFbGVtZW50IiwiY2xvbmVFbGVtZW50Iiwic3R5bGVzIiwicHJvcFR5cGVzIiwib25lT2YiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwiaXMiLCJtYXJnaW4iLCJtYXJnaW5MZWZ0IiwicGFkZGluZyIsImxpc3RTdHlsZSJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90eXBvZ3JhcGh5L3NyYy9Vbm9yZGVyZWRMaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgQm94IGZyb20gJ3VpLWJveCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVW5vcmRlcmVkTGlzdCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC4uLkJveC5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBTaXplIG9mIHRoZSB0ZXh0IHVzZWQgaW4gYSBsaXN0IGl0ZW0uXG4gICAgICogQ2FuIGJlOiAzMDAsIDQwMCwgNTAwLCA2MDAuXG4gICAgICovXG4gICAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFszMDAsIDQwMCwgNTAwLCA2MDBdKS5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiBwYXNzZWQsIGFkZHMgYSBpY29uIGJlZm9yZSBlYWNoIGxpc3QgaXRlbSBpbiB0aGUgbGlzdFxuICAgICAqIFlvdSBjYW4gb3ZlcnJpZGUgdGhpcyBvbiBhIGluZGl2aWR1YWwgbGlzdCBpdGVtLlxuICAgICAqL1xuICAgIGljb246IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29sb3Igb2YgdGhlIGljb24gaW4gZWFjaCBsaXN0IGl0ZW0gaW4gdGhlIGxpc3QuXG4gICAgICovXG4gICAgaWNvbkNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHNpemU6IDQwMFxuICB9XG5cbiAgc3RhdGljIHN0eWxlcyA9IHtcbiAgICBpczogJ3VsJyxcbiAgICBtYXJnaW46IDAsXG4gICAgbWFyZ2luTGVmdDogJzEuMWVtJyxcbiAgICBwYWRkaW5nOiAwLFxuICAgIGxpc3RTdHlsZTogJ2Rpc2MnXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgc2l6ZSwgaWNvbiwgaWNvbkNvbG9yLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgLy8gT25seSBwYXNzIGRvd24gaWNvbi1yZWxhdGVkIHByb3BzIGlmIHNwZWNpZmllZFxuICAgIGNvbnN0IGluaGVyaXRlZFByb3BzID0gaWNvbiA/IHsgc2l6ZSwgaWNvbiwgaWNvbkNvbG9yIH0gOiB7IHNpemUgfVxuXG4gICAgY29uc3QgZmluYWxDaGlsZHJlbiA9IFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgY2hpbGQgPT4ge1xuICAgICAgaWYgKCFSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgLi4uaW5oZXJpdGVkUHJvcHMsXG4gICAgICAgIC8vIFByZWZlciBtb3JlIGdyYW51bGFybHkgZGVmaW5lZCBpY29uIGlmIHByZXNlbnRcbiAgICAgICAgLi4uY2hpbGQucHJvcHNcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIHJldHVybiAoXG4gICAgICA8Qm94IHsuLi5Vbm9yZGVyZWRMaXN0LnN0eWxlc30gey4uLnByb3BzfT5cbiAgICAgICAge2ZpbmFsQ2hpbGRyZW59XG4gICAgICA8L0JveD5cbiAgICApXG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsYUFBaEIsUUFBcUMsT0FBckM7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsR0FBUCxNQUFnQixRQUFoQjs7SUFFcUJDLGE7Ozs7Ozs7Ozs7Ozs7V0FrQ25CLGtCQUFTO01BQ1Asa0JBQXNELEtBQUtDLEtBQTNEO01BQUEsSUFBUUMsUUFBUixlQUFRQSxRQUFSO01BQUEsSUFBa0JDLElBQWxCLGVBQWtCQSxJQUFsQjtNQUFBLElBQXdCQyxJQUF4QixlQUF3QkEsSUFBeEI7TUFBQSxJQUE4QkMsU0FBOUIsZUFBOEJBLFNBQTlCO01BQUEsSUFBNENKLEtBQTVDLG9EQURPLENBR1A7OztNQUNBLElBQU1LLGNBQWMsR0FBR0YsSUFBSSxHQUFHO1FBQUVELElBQUksRUFBSkEsSUFBRjtRQUFRQyxJQUFJLEVBQUpBLElBQVI7UUFBY0MsU0FBUyxFQUFUQTtNQUFkLENBQUgsR0FBK0I7UUFBRUYsSUFBSSxFQUFKQTtNQUFGLENBQTFEO01BRUEsSUFBTUksYUFBYSxHQUFHWCxLQUFLLENBQUNZLFFBQU4sQ0FBZUMsR0FBZixDQUFtQlAsUUFBbkIsRUFBNkIsVUFBQVEsS0FBSyxFQUFJO1FBQzFELElBQUksZUFBQ2QsS0FBSyxDQUFDZSxjQUFOLENBQXFCRCxLQUFyQixDQUFMLEVBQWtDO1VBQ2hDLE9BQU9BLEtBQVA7UUFDRDs7UUFFRCxvQkFBT2QsS0FBSyxDQUFDZ0IsWUFBTixDQUFtQkYsS0FBbkIsa0NBQ0ZKLGNBREUsR0FHRkksS0FBSyxDQUFDVCxLQUhKLEVBQVA7TUFLRCxDQVZxQixDQUF0QjtNQVlBLG9CQUNFLG9CQUFDLEdBQUQsZUFBU0QsYUFBYSxDQUFDYSxNQUF2QixFQUFtQ1osS0FBbkMsR0FDR00sYUFESCxDQURGO0lBS0Q7Ozs7RUF6RHdDVixhOztBQUF0QkcsYTs7Z0JBQUFBLGEsK0NBRWRELEdBQUcsQ0FBQ2UsUztFQUVQO0FBQ0o7QUFDQTtBQUNBO0VBQ0lYLElBQUksRUFBRUwsU0FBUyxDQUFDaUIsS0FBVixDQUFnQixDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixHQUFoQixDQUFoQixFQUFzQ0MsVTs7RUFFNUM7QUFDSjtBQUNBO0FBQ0E7RUFDSVosSUFBSSxFQUFFTixTQUFTLENBQUNtQixNOztFQUVoQjtBQUNKO0FBQ0E7RUFDSVosU0FBUyxFQUFFUCxTQUFTLENBQUNtQjs7O2dCQW5CSmpCLGEsa0JBc0JHO0VBQ3BCRyxJQUFJLEVBQUU7QUFEYyxDOztnQkF0QkhILGEsWUEwQkg7RUFDZGtCLEVBQUUsRUFBRSxJQURVO0VBRWRDLE1BQU0sRUFBRSxDQUZNO0VBR2RDLFVBQVUsRUFBRSxPQUhFO0VBSWRDLE9BQU8sRUFBRSxDQUpLO0VBS2RDLFNBQVMsRUFBRTtBQUxHLEM7O1NBMUJHdEIsYSJ9