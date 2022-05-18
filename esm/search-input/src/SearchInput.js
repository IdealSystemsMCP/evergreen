import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _excluded = ["theme", "appearance", "disabled", "height"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import Box, { splitBoxProps } from 'ui-box';
import { Icon } from '../../icon';
import { TextInput } from '../../text-input';
import { withTheme } from '../../theme';
import { StackingOrder } from '../../constants';

var SearchInput = /*#__PURE__*/function (_PureComponent) {
  _inherits(SearchInput, _PureComponent);

  var _super = _createSuper(SearchInput);

  function SearchInput() {
    _classCallCheck(this, SearchInput);

    return _super.apply(this, arguments);
  }

  _createClass(SearchInput, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          appearance = _this$props.appearance,
          disabled = _this$props.disabled,
          height = _this$props.height,
          props = _objectWithoutProperties(_this$props, _excluded);

      var _splitBoxProps = splitBoxProps(props),
          matchedProps = _splitBoxProps.matchedProps,
          remainingProps = _splitBoxProps.remainingProps;

      var width = matchedProps.width;
      var iconSize = theme.getIconSizeForInput(height);
      return /*#__PURE__*/React.createElement(Box, _extends({
        position: "relative",
        display: "inline-flex",
        height: height
      }, matchedProps), /*#__PURE__*/React.createElement(Box, {
        height: height,
        width: height,
        pointerEvents: "none",
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }, /*#__PURE__*/React.createElement(Icon, {
        icon: "search",
        color: "default",
        zIndex: StackingOrder.FOCUSED + 1,
        size: iconSize
      })), /*#__PURE__*/React.createElement(TextInput, _extends({
        height: height,
        paddingLeft: height,
        appearance: appearance,
        disabled: disabled,
        width: width,
        type: "search"
      }, remainingProps)));
    }
  }]);

  return SearchInput;
}(PureComponent);

SearchInput.displayName = "SearchInput";

_defineProperty(SearchInput, "propTypes", _objectSpread({}, TextInput.propTypes));

_defineProperty(SearchInput, "defaultProps", {
  height: 32,
  appearance: 'default'
});

export default withTheme(SearchInput);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJCb3giLCJzcGxpdEJveFByb3BzIiwiSWNvbiIsIlRleHRJbnB1dCIsIndpdGhUaGVtZSIsIlN0YWNraW5nT3JkZXIiLCJTZWFyY2hJbnB1dCIsInByb3BzIiwidGhlbWUiLCJhcHBlYXJhbmNlIiwiZGlzYWJsZWQiLCJoZWlnaHQiLCJtYXRjaGVkUHJvcHMiLCJyZW1haW5pbmdQcm9wcyIsIndpZHRoIiwiaWNvblNpemUiLCJnZXRJY29uU2l6ZUZvcklucHV0IiwiRk9DVVNFRCIsInByb3BUeXBlcyJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZWFyY2gtaW5wdXQvc3JjL1NlYXJjaElucHV0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQm94LCB7IHNwbGl0Qm94UHJvcHMgfSBmcm9tICd1aS1ib3gnXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnLi4vLi4vaWNvbidcbmltcG9ydCB7IFRleHRJbnB1dCB9IGZyb20gJy4uLy4uL3RleHQtaW5wdXQnXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcbmltcG9ydCB7IFN0YWNraW5nT3JkZXIgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnXG5cbmNsYXNzIFNlYXJjaElucHV0IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIFRleHRJbnB1dCBjb21wb25lbnQgYXMgdGhlIGJhc2UuXG4gICAgICovXG4gICAgLi4uVGV4dElucHV0LnByb3BUeXBlc1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBoZWlnaHQ6IDMyLFxuICAgIGFwcGVhcmFuY2U6ICdkZWZhdWx0J1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGhlbWUsIGFwcGVhcmFuY2UsIGRpc2FibGVkLCBoZWlnaHQsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBtYXRjaGVkUHJvcHMsIHJlbWFpbmluZ1Byb3BzIH0gPSBzcGxpdEJveFByb3BzKHByb3BzKVxuICAgIGNvbnN0IHsgd2lkdGggfSA9IG1hdGNoZWRQcm9wc1xuICAgIGNvbnN0IGljb25TaXplID0gdGhlbWUuZ2V0SWNvblNpemVGb3JJbnB1dChoZWlnaHQpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJveFxuICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgICAgZGlzcGxheT1cImlubGluZS1mbGV4XCJcbiAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgIHsuLi5tYXRjaGVkUHJvcHN9XG4gICAgICA+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICB3aWR0aD17aGVpZ2h0fVxuICAgICAgICAgIHBvaW50ZXJFdmVudHM9XCJub25lXCJcbiAgICAgICAgICBwb3NpdGlvbj1cImFic29sdXRlXCJcbiAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgPEljb25cbiAgICAgICAgICAgIGljb249XCJzZWFyY2hcIlxuICAgICAgICAgICAgY29sb3I9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgIHpJbmRleD17U3RhY2tpbmdPcmRlci5GT0NVU0VEICsgMX1cbiAgICAgICAgICAgIHNpemU9e2ljb25TaXplfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgcGFkZGluZ0xlZnQ9e2hlaWdodH1cbiAgICAgICAgICBhcHBlYXJhbmNlPXthcHBlYXJhbmNlfVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgICAgey4uLnJlbWFpbmluZ1Byb3BzfVxuICAgICAgICAvPlxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShTZWFyY2hJbnB1dClcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsYUFBaEIsUUFBcUMsT0FBckM7QUFDQSxPQUFPQyxHQUFQLElBQWNDLGFBQWQsUUFBbUMsUUFBbkM7QUFDQSxTQUFTQyxJQUFULFFBQXFCLFlBQXJCO0FBQ0EsU0FBU0MsU0FBVCxRQUEwQixrQkFBMUI7QUFDQSxTQUFTQyxTQUFULFFBQTBCLGFBQTFCO0FBQ0EsU0FBU0MsYUFBVCxRQUE4QixpQkFBOUI7O0lBRU1DLFc7Ozs7Ozs7Ozs7Ozs7V0FhSixrQkFBUztNQUNQLGtCQUEwRCxLQUFLQyxLQUEvRDtNQUFBLElBQVFDLEtBQVIsZUFBUUEsS0FBUjtNQUFBLElBQWVDLFVBQWYsZUFBZUEsVUFBZjtNQUFBLElBQTJCQyxRQUEzQixlQUEyQkEsUUFBM0I7TUFBQSxJQUFxQ0MsTUFBckMsZUFBcUNBLE1BQXJDO01BQUEsSUFBZ0RKLEtBQWhEOztNQUNBLHFCQUF5Q04sYUFBYSxDQUFDTSxLQUFELENBQXREO01BQUEsSUFBUUssWUFBUixrQkFBUUEsWUFBUjtNQUFBLElBQXNCQyxjQUF0QixrQkFBc0JBLGNBQXRCOztNQUNBLElBQVFDLEtBQVIsR0FBa0JGLFlBQWxCLENBQVFFLEtBQVI7TUFDQSxJQUFNQyxRQUFRLEdBQUdQLEtBQUssQ0FBQ1EsbUJBQU4sQ0FBMEJMLE1BQTFCLENBQWpCO01BRUEsb0JBQ0Usb0JBQUMsR0FBRDtRQUNFLFFBQVEsRUFBQyxVQURYO1FBRUUsT0FBTyxFQUFDLGFBRlY7UUFHRSxNQUFNLEVBQUVBO01BSFYsR0FJTUMsWUFKTixnQkFNRSxvQkFBQyxHQUFEO1FBQ0UsTUFBTSxFQUFFRCxNQURWO1FBRUUsS0FBSyxFQUFFQSxNQUZUO1FBR0UsYUFBYSxFQUFDLE1BSGhCO1FBSUUsUUFBUSxFQUFDLFVBSlg7UUFLRSxPQUFPLEVBQUMsTUFMVjtRQU1FLGNBQWMsRUFBQyxRQU5qQjtRQU9FLFVBQVUsRUFBQztNQVBiLGdCQVNFLG9CQUFDLElBQUQ7UUFDRSxJQUFJLEVBQUMsUUFEUDtRQUVFLEtBQUssRUFBQyxTQUZSO1FBR0UsTUFBTSxFQUFFTixhQUFhLENBQUNZLE9BQWQsR0FBd0IsQ0FIbEM7UUFJRSxJQUFJLEVBQUVGO01BSlIsRUFURixDQU5GLGVBc0JFLG9CQUFDLFNBQUQ7UUFDRSxNQUFNLEVBQUVKLE1BRFY7UUFFRSxXQUFXLEVBQUVBLE1BRmY7UUFHRSxVQUFVLEVBQUVGLFVBSGQ7UUFJRSxRQUFRLEVBQUVDLFFBSlo7UUFLRSxLQUFLLEVBQUVJLEtBTFQ7UUFNRSxJQUFJLEVBQUM7TUFOUCxHQU9NRCxjQVBOLEVBdEJGLENBREY7SUFrQ0Q7Ozs7RUFyRHVCZCxhOztBQUFwQk8sVzs7Z0JBQUFBLFcsaUNBS0NILFNBQVMsQ0FBQ2UsUzs7Z0JBTFhaLFcsa0JBUWtCO0VBQ3BCSyxNQUFNLEVBQUUsRUFEWTtFQUVwQkYsVUFBVSxFQUFFO0FBRlEsQzs7QUFnRHhCLGVBQWVMLFNBQVMsQ0FBQ0UsV0FBRCxDQUF4QiJ9