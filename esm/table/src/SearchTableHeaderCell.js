import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _excluded = ["value", "children", "onChange", "autoFocus", "spellCheck", "placeholder", "icon"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import { css } from 'glamor';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text } from '../../typography';
import { Icon } from '../../icon';
import TableHeaderCell from './TableHeaderCell';
var invisibleInputClass = css({
  border: 'none',
  backgroundColor: 'transparent',
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  WebkitFontSmoothing: 'antialiased',
  '&:focus': {
    outline: 'none'
  },
  '&::placeholder': {
    color: "rgba(67, 90, 111, 0.7)"
  }
}).toString();

var SearchTableHeaderCell = /*#__PURE__*/function (_PureComponent) {
  _inherits(SearchTableHeaderCell, _PureComponent);

  var _super = _createSuper(SearchTableHeaderCell);

  function SearchTableHeaderCell() {
    _classCallCheck(this, SearchTableHeaderCell);

    return _super.apply(this, arguments);
  }

  _createClass(SearchTableHeaderCell, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          value = _this$props.value,
          children = _this$props.children,
          _onChange = _this$props.onChange,
          autoFocus = _this$props.autoFocus,
          spellCheck = _this$props.spellCheck,
          placeholder = _this$props.placeholder,
          icon = _this$props.icon,
          props = _objectWithoutProperties(_this$props, _excluded);

      return /*#__PURE__*/React.createElement(TableHeaderCell, props, /*#__PURE__*/React.createElement(Icon, {
        icon: icon,
        color: "muted",
        marginLeft: 2,
        marginRight: 10,
        size: 12
      }), /*#__PURE__*/React.createElement(Text, {
        is: "input",
        size: 300,
        flex: "1",
        className: invisibleInputClass,
        value: value,
        onChange: function onChange(e) {
          return _onChange(e.target.value);
        },
        autoFocus: autoFocus,
        spellCheck: spellCheck,
        fontWeight: 500,
        marginLeft: -2,
        paddingLeft: 0,
        placeholder: placeholder
      }));
    }
  }]);

  return SearchTableHeaderCell;
}(PureComponent);

SearchTableHeaderCell.displayName = "SearchTableHeaderCell";

_defineProperty(SearchTableHeaderCell, "propTypes", _objectSpread(_objectSpread({}, TableHeaderCell.propTypes), {}, {
  /**
   * The value of the input.
   */
  value: PropTypes.string,

  /**
   * Handler to be called when the input changes.
   */
  onChange: PropTypes.func,

  /**
   * Sets whether the component should be automatically focused on component render.
   */
  autoFocus: PropTypes.bool,

  /**
   * Sets whether to apply spell checking to the content.
   */
  spellCheck: PropTypes.bool,

  /**
   * Text to display in the input if the input is empty.
   */
  placeholder: PropTypes.string,

  /**
   * Icon to display in the input.
   */
  icon: PropTypes.string
}));

_defineProperty(SearchTableHeaderCell, "defaultProps", {
  onChange: function onChange() {},
  spellCheck: true,
  placeholder: 'Filter...',
  icon: 'search'
});

export { SearchTableHeaderCell as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjc3MiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJUZXh0IiwiSWNvbiIsIlRhYmxlSGVhZGVyQ2VsbCIsImludmlzaWJsZUlucHV0Q2xhc3MiLCJib3JkZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJXZWJraXRBcHBlYXJhbmNlIiwiTW96QXBwZWFyYW5jZSIsIldlYmtpdEZvbnRTbW9vdGhpbmciLCJvdXRsaW5lIiwiY29sb3IiLCJ0b1N0cmluZyIsIlNlYXJjaFRhYmxlSGVhZGVyQ2VsbCIsInByb3BzIiwidmFsdWUiLCJjaGlsZHJlbiIsIm9uQ2hhbmdlIiwiYXV0b0ZvY3VzIiwic3BlbGxDaGVjayIsInBsYWNlaG9sZGVyIiwiaWNvbiIsImUiLCJ0YXJnZXQiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJmdW5jIiwiYm9vbCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90YWJsZS9zcmMvU2VhcmNoVGFibGVIZWFkZXJDZWxsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ2dsYW1vcidcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vLi4vdHlwb2dyYXBoeSdcbmltcG9ydCB7IEljb24gfSBmcm9tICcuLi8uLi9pY29uJ1xuaW1wb3J0IFRhYmxlSGVhZGVyQ2VsbCBmcm9tICcuL1RhYmxlSGVhZGVyQ2VsbCdcblxuY29uc3QgaW52aXNpYmxlSW5wdXRDbGFzcyA9IGNzcyh7XG4gIGJvcmRlcjogJ25vbmUnLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gIFdlYmtpdEFwcGVhcmFuY2U6ICdub25lJyxcbiAgTW96QXBwZWFyYW5jZTogJ25vbmUnLFxuICBXZWJraXRGb250U21vb3RoaW5nOiAnYW50aWFsaWFzZWQnLFxuXG4gICcmOmZvY3VzJzoge1xuICAgIG91dGxpbmU6ICdub25lJ1xuICB9LFxuXG4gICcmOjpwbGFjZWhvbGRlcic6IHtcbiAgICBjb2xvcjogYHJnYmEoNjcsIDkwLCAxMTEsIDAuNylgXG4gIH1cbn0pLnRvU3RyaW5nKClcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoVGFibGVIZWFkZXJDZWxsIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIFRhYmxlSGVhZGVyQ2VsbCBjb21wb25lbnQgYXMgdGhlIGJhc2UuXG4gICAgICovXG4gICAgLi4uVGFibGVIZWFkZXJDZWxsLnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIFRoZSB2YWx1ZSBvZiB0aGUgaW5wdXQuXG4gICAgICovXG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVyIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBpbnB1dCBjaGFuZ2VzLlxuICAgICAqL1xuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIFNldHMgd2hldGhlciB0aGUgY29tcG9uZW50IHNob3VsZCBiZSBhdXRvbWF0aWNhbGx5IGZvY3VzZWQgb24gY29tcG9uZW50IHJlbmRlci5cbiAgICAgKi9cbiAgICBhdXRvRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB3aGV0aGVyIHRvIGFwcGx5IHNwZWxsIGNoZWNraW5nIHRvIHRoZSBjb250ZW50LlxuICAgICAqL1xuICAgIHNwZWxsQ2hlY2s6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogVGV4dCB0byBkaXNwbGF5IGluIHRoZSBpbnB1dCBpZiB0aGUgaW5wdXQgaXMgZW1wdHkuXG4gICAgICovXG4gICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBJY29uIHRvIGRpc3BsYXkgaW4gdGhlIGlucHV0LlxuICAgICAqL1xuICAgIGljb246IFByb3BUeXBlcy5zdHJpbmdcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgb25DaGFuZ2U6ICgpID0+IHt9LFxuICAgIHNwZWxsQ2hlY2s6IHRydWUsXG4gICAgcGxhY2Vob2xkZXI6ICdGaWx0ZXIuLi4nLFxuICAgIGljb246ICdzZWFyY2gnXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdmFsdWUsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgYXV0b0ZvY3VzLFxuICAgICAgc3BlbGxDaGVjayxcbiAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgaWNvbixcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8VGFibGVIZWFkZXJDZWxsIHsuLi5wcm9wc30+XG4gICAgICAgIDxJY29uXG4gICAgICAgICAgaWNvbj17aWNvbn1cbiAgICAgICAgICBjb2xvcj1cIm11dGVkXCJcbiAgICAgICAgICBtYXJnaW5MZWZ0PXsyfVxuICAgICAgICAgIG1hcmdpblJpZ2h0PXsxMH1cbiAgICAgICAgICBzaXplPXsxMn1cbiAgICAgICAgLz5cbiAgICAgICAgPFRleHRcbiAgICAgICAgICBpcz1cImlucHV0XCJcbiAgICAgICAgICBzaXplPXszMDB9XG4gICAgICAgICAgZmxleD1cIjFcIlxuICAgICAgICAgIGNsYXNzTmFtZT17aW52aXNpYmxlSW5wdXRDbGFzc31cbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gb25DaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIGF1dG9Gb2N1cz17YXV0b0ZvY3VzfVxuICAgICAgICAgIHNwZWxsQ2hlY2s9e3NwZWxsQ2hlY2t9XG4gICAgICAgICAgZm9udFdlaWdodD17NTAwfVxuICAgICAgICAgIG1hcmdpbkxlZnQ9ey0yfVxuICAgICAgICAgIHBhZGRpbmdMZWZ0PXswfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgLz5cbiAgICAgIDwvVGFibGVIZWFkZXJDZWxsPlxuICAgIClcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVNBLEdBQVQsUUFBb0IsUUFBcEI7QUFDQSxPQUFPQyxLQUFQLElBQWdCQyxhQUFoQixRQUFxQyxPQUFyQztBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxTQUFTQyxJQUFULFFBQXFCLGtCQUFyQjtBQUNBLFNBQVNDLElBQVQsUUFBcUIsWUFBckI7QUFDQSxPQUFPQyxlQUFQLE1BQTRCLG1CQUE1QjtBQUVBLElBQU1DLG1CQUFtQixHQUFHUCxHQUFHLENBQUM7RUFDOUJRLE1BQU0sRUFBRSxNQURzQjtFQUU5QkMsZUFBZSxFQUFFLGFBRmE7RUFHOUJDLGdCQUFnQixFQUFFLE1BSFk7RUFJOUJDLGFBQWEsRUFBRSxNQUplO0VBSzlCQyxtQkFBbUIsRUFBRSxhQUxTO0VBTzlCLFdBQVc7SUFDVEMsT0FBTyxFQUFFO0VBREEsQ0FQbUI7RUFXOUIsa0JBQWtCO0lBQ2hCQyxLQUFLO0VBRFc7QUFYWSxDQUFELENBQUgsQ0FjekJDLFFBZHlCLEVBQTVCOztJQWdCcUJDLHFCOzs7Ozs7Ozs7Ozs7O1dBNkNuQixrQkFBUztNQUNQLGtCQVNJLEtBQUtDLEtBVFQ7TUFBQSxJQUNFQyxLQURGLGVBQ0VBLEtBREY7TUFBQSxJQUVFQyxRQUZGLGVBRUVBLFFBRkY7TUFBQSxJQUdFQyxTQUhGLGVBR0VBLFFBSEY7TUFBQSxJQUlFQyxTQUpGLGVBSUVBLFNBSkY7TUFBQSxJQUtFQyxVQUxGLGVBS0VBLFVBTEY7TUFBQSxJQU1FQyxXQU5GLGVBTUVBLFdBTkY7TUFBQSxJQU9FQyxJQVBGLGVBT0VBLElBUEY7TUFBQSxJQVFLUCxLQVJMOztNQVdBLG9CQUNFLG9CQUFDLGVBQUQsRUFBcUJBLEtBQXJCLGVBQ0Usb0JBQUMsSUFBRDtRQUNFLElBQUksRUFBRU8sSUFEUjtRQUVFLEtBQUssRUFBQyxPQUZSO1FBR0UsVUFBVSxFQUFFLENBSGQ7UUFJRSxXQUFXLEVBQUUsRUFKZjtRQUtFLElBQUksRUFBRTtNQUxSLEVBREYsZUFRRSxvQkFBQyxJQUFEO1FBQ0UsRUFBRSxFQUFDLE9BREw7UUFFRSxJQUFJLEVBQUUsR0FGUjtRQUdFLElBQUksRUFBQyxHQUhQO1FBSUUsU0FBUyxFQUFFakIsbUJBSmI7UUFLRSxLQUFLLEVBQUVXLEtBTFQ7UUFNRSxRQUFRLEVBQUUsa0JBQUFPLENBQUM7VUFBQSxPQUFJTCxTQUFRLENBQUNLLENBQUMsQ0FBQ0MsTUFBRixDQUFTUixLQUFWLENBQVo7UUFBQSxDQU5iO1FBT0UsU0FBUyxFQUFFRyxTQVBiO1FBUUUsVUFBVSxFQUFFQyxVQVJkO1FBU0UsVUFBVSxFQUFFLEdBVGQ7UUFVRSxVQUFVLEVBQUUsQ0FBQyxDQVZmO1FBV0UsV0FBVyxFQUFFLENBWGY7UUFZRSxXQUFXLEVBQUVDO01BWmYsRUFSRixDQURGO0lBeUJEOzs7O0VBbEZnRHJCLGE7O0FBQTlCYyxxQjs7Z0JBQUFBLHFCLCtDQUtkVixlQUFlLENBQUNxQixTO0VBRW5CO0FBQ0o7QUFDQTtFQUNJVCxLQUFLLEVBQUVmLFNBQVMsQ0FBQ3lCLE07O0VBRWpCO0FBQ0o7QUFDQTtFQUNJUixRQUFRLEVBQUVqQixTQUFTLENBQUMwQixJOztFQUVwQjtBQUNKO0FBQ0E7RUFDSVIsU0FBUyxFQUFFbEIsU0FBUyxDQUFDMkIsSTs7RUFFckI7QUFDSjtBQUNBO0VBQ0lSLFVBQVUsRUFBRW5CLFNBQVMsQ0FBQzJCLEk7O0VBRXRCO0FBQ0o7QUFDQTtFQUNJUCxXQUFXLEVBQUVwQixTQUFTLENBQUN5QixNOztFQUV2QjtBQUNKO0FBQ0E7RUFDSUosSUFBSSxFQUFFckIsU0FBUyxDQUFDeUI7OztnQkFuQ0NaLHFCLGtCQXNDRztFQUNwQkksUUFBUSxFQUFFLG9CQUFNLENBQUUsQ0FERTtFQUVwQkUsVUFBVSxFQUFFLElBRlE7RUFHcEJDLFdBQVcsRUFBRSxXQUhPO0VBSXBCQyxJQUFJLEVBQUU7QUFKYyxDOztTQXRDSFIscUIifQ==