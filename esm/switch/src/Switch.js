import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["size", "fill"],
    _excluded2 = ["theme", "id", "name", "height", "checked", "onChange", "disabled", "appearance", "hasCheckIcon", "defaultChecked"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import { css } from 'glamor';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box, { spacing, position, layout } from 'ui-box';
import { withTheme } from '../../theme';
var animationEasing = {
  spring: "cubic-bezier(0.175, 0.885, 0.320, 1.175)"
};
var handleStyleClass = css({
  backgroundColor: '#fff',
  borderRadius: 9999
}).toString();
var iconContainerStyleClass = css({
  transition: "all 500ms ".concat(animationEasing.spring),
  opacity: 0,
  display: 'flex',
  position: 'absolute',
  alignItems: 'center',
  justifyContent: 'center',
  paddingLeft: 4,
  '&[data-checked="true"]': {
    opacity: 1,
    transform: 'scale(1)'
  },
  '> svg': {
    transition: "all 500ms ".concat(animationEasing.spring),
    transform: 'scale(0)'
  },
  '&[data-checked="true"] > svg': {
    transform: 'scale(1)'
  }
}).toString();
var handleContainerStyleClass = css({
  transition: 'transform 200ms ease-in-out',
  transform: 'translateX(0%)',
  '&[data-checked="true"]': {
    transform: 'translateX(50%)'
  }
}).toString();

var CheckIcon = function CheckIcon(_ref) {
  var size = _ref.size,
      _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? 'currentColor' : _ref$fill,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 10,
    height: size,
    viewBox: "0 0 10 7"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: fill,
    fillRule: "evenodd",
    d: "M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z"
  }));
};

CheckIcon.displayName = "CheckIcon";
CheckIcon.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.number
};

var isControlled = function isControlled(component) {
  return {}.hasOwnProperty.call(component.props, 'checked');
};

var Switch = /*#__PURE__*/function (_PureComponent) {
  _inherits(Switch, _PureComponent);

  var _super = _createSuper(Switch);

  function Switch(props, context) {
    var _this;

    _classCallCheck(this, Switch);

    _this = _super.call(this, props, context);

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (value) {
      if (isControlled(_assertThisInitialized(_this))) {
        _this.props.onChange(value);
      } else {
        _this.setState(function (_ref2) {
          var checked = _ref2.checked;
          return {
            checked: !checked
          };
        });

        _this.props.onChange(value);
      }
    });

    _this.state = {
      checked: props.checked || props.defaultChecked || false
    };
    return _this;
  }

  _createClass(Switch, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          id = _this$props.id,
          name = _this$props.name,
          height = _this$props.height,
          checkedProps = _this$props.checked,
          onChange = _this$props.onChange,
          disabled = _this$props.disabled,
          appearance = _this$props.appearance,
          hasCheckIcon = _this$props.hasCheckIcon,
          defaultChecked = _this$props.defaultChecked,
          props = _objectWithoutProperties(_this$props, _excluded2);

      var checked = isControlled(this) ? checkedProps : this.state.checked;
      var themedClassName = theme.getSwitchClassName(appearance);
      return /*#__PURE__*/React.createElement(Box, _extends({
        is: "label",
        display: "block",
        width: height * 2,
        position: "relative"
      }, props), /*#__PURE__*/React.createElement(Box, {
        is: "input",
        className: themedClassName,
        id: id,
        name: name,
        type: "checkbox",
        checked: checked,
        disabled: disabled,
        defaultChecked: defaultChecked,
        onChange: this.handleChange
      }), /*#__PURE__*/React.createElement(Box, {
        onClick: this.handleClick,
        height: height,
        width: height * 2
      }, /*#__PURE__*/React.createElement(Box, {
        height: height,
        width: height,
        "data-checked": checked,
        className: iconContainerStyleClass
      }, hasCheckIcon && /*#__PURE__*/React.createElement(CheckIcon, {
        size: height / 2 - 3
      })), /*#__PURE__*/React.createElement(Box, {
        width: height * 2,
        display: "flex",
        "data-checked": checked,
        className: handleContainerStyleClass
      }, /*#__PURE__*/React.createElement(Box, {
        flex: 1,
        padding: 2
      }, /*#__PURE__*/React.createElement(Box, {
        width: height - 4,
        height: height - 4,
        className: handleStyleClass
      })))));
    }
  }]);

  return Switch;
}(PureComponent);

Switch.displayName = "Switch";

_defineProperty(Switch, "propTypes", _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, spacing.propTypes), position.propTypes), layout.propTypes), {}, {
  /**
   * The id attribute of the radio.
   */
  id: PropTypes.string,

  /**
   * The name attribute of the radio.
   */
  name: PropTypes.string,

  /**
   * The value attribute of the radio.
   */
  value: PropTypes.string,

  /**
   * The height of the switch.
   */
  height: PropTypes.number,

  /**
   * When true, the switch is checked (on).
   */
  checked: PropTypes.bool,

  /**
   * Function called when state changes.
   */
  onChange: PropTypes.func,

  /**
   * When true, the switch is disabled.
   */
  disabled: PropTypes.bool,

  /**
   * When true, the switch is invalid.
   */
  isInvalid: PropTypes.bool,

  /**
   * The appearance of the checkbox.
   * The default theme only comes with a default style.
   */
  appearance: PropTypes.string.isRequired,

  /**
   * When true, the switch has a check icon.
   */
  hasCheckIcon: PropTypes.bool,

  /**
   * When true, the switch is true by default.
   * This is for uncontrolled usage.
   */
  defaultChecked: PropTypes.bool,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired
}));

_defineProperty(Switch, "defaultProps", {
  height: 16,
  onChange: function onChange() {},
  appearance: 'default',
  hasCheckIcon: true,
  disabled: false
});

export default withTheme(Switch);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjc3MiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJCb3giLCJzcGFjaW5nIiwicG9zaXRpb24iLCJsYXlvdXQiLCJ3aXRoVGhlbWUiLCJhbmltYXRpb25FYXNpbmciLCJzcHJpbmciLCJoYW5kbGVTdHlsZUNsYXNzIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwidG9TdHJpbmciLCJpY29uQ29udGFpbmVyU3R5bGVDbGFzcyIsInRyYW5zaXRpb24iLCJvcGFjaXR5IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInBhZGRpbmdMZWZ0IiwidHJhbnNmb3JtIiwiaGFuZGxlQ29udGFpbmVyU3R5bGVDbGFzcyIsIkNoZWNrSWNvbiIsInNpemUiLCJmaWxsIiwicHJvcHMiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJudW1iZXIiLCJpc0NvbnRyb2xsZWQiLCJjb21wb25lbnQiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJTd2l0Y2giLCJjb250ZXh0IiwidmFsdWUiLCJvbkNoYW5nZSIsInNldFN0YXRlIiwiY2hlY2tlZCIsInN0YXRlIiwiZGVmYXVsdENoZWNrZWQiLCJ0aGVtZSIsImlkIiwibmFtZSIsImhlaWdodCIsImNoZWNrZWRQcm9wcyIsImRpc2FibGVkIiwiYXBwZWFyYW5jZSIsImhhc0NoZWNrSWNvbiIsInRoZW1lZENsYXNzTmFtZSIsImdldFN3aXRjaENsYXNzTmFtZSIsImhhbmRsZUNoYW5nZSIsImhhbmRsZUNsaWNrIiwiYm9vbCIsImZ1bmMiLCJpc0ludmFsaWQiLCJpc1JlcXVpcmVkIiwib2JqZWN0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3N3aXRjaC9zcmMvU3dpdGNoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ2dsYW1vcidcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgQm94LCB7IHNwYWNpbmcsIHBvc2l0aW9uLCBsYXlvdXQgfSBmcm9tICd1aS1ib3gnXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcblxuY29uc3QgYW5pbWF0aW9uRWFzaW5nID0ge1xuICBzcHJpbmc6IGBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyMCwgMS4xNzUpYFxufVxuXG5jb25zdCBoYW5kbGVTdHlsZUNsYXNzID0gY3NzKHtcbiAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gIGJvcmRlclJhZGl1czogOTk5OVxufSkudG9TdHJpbmcoKVxuXG5jb25zdCBpY29uQ29udGFpbmVyU3R5bGVDbGFzcyA9IGNzcyh7XG4gIHRyYW5zaXRpb246IGBhbGwgNTAwbXMgJHthbmltYXRpb25FYXNpbmcuc3ByaW5nfWAsXG4gIG9wYWNpdHk6IDAsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gIHBhZGRpbmdMZWZ0OiA0LFxuICAnJltkYXRhLWNoZWNrZWQ9XCJ0cnVlXCJdJzoge1xuICAgIG9wYWNpdHk6IDEsXG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknXG4gIH0sXG4gICc+IHN2Zyc6IHtcbiAgICB0cmFuc2l0aW9uOiBgYWxsIDUwMG1zICR7YW5pbWF0aW9uRWFzaW5nLnNwcmluZ31gLFxuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDApJ1xuICB9LFxuICAnJltkYXRhLWNoZWNrZWQ9XCJ0cnVlXCJdID4gc3ZnJzoge1xuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpJ1xuICB9XG59KS50b1N0cmluZygpXG5cbmNvbnN0IGhhbmRsZUNvbnRhaW5lclN0eWxlQ2xhc3MgPSBjc3Moe1xuICB0cmFuc2l0aW9uOiAndHJhbnNmb3JtIDIwMG1zIGVhc2UtaW4tb3V0JyxcbiAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwJSknLFxuICAnJltkYXRhLWNoZWNrZWQ9XCJ0cnVlXCJdJzoge1xuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoNTAlKSdcbiAgfVxufSkudG9TdHJpbmcoKVxuXG5jb25zdCBDaGVja0ljb24gPSAoeyBzaXplLCBmaWxsID0gJ2N1cnJlbnRDb2xvcicsIC4uLnByb3BzIH0pID0+IChcbiAgPHN2ZyB3aWR0aD17MTB9IGhlaWdodD17c2l6ZX0gdmlld0JveD1cIjAgMCAxMCA3XCIgey4uLnByb3BzfT5cbiAgICA8cGF0aFxuICAgICAgZmlsbD17ZmlsbH1cbiAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICBkPVwiTTQgNC41ODZMMS43MDcgMi4yOTNBMSAxIDAgMSAwIC4yOTMgMy43MDdsMyAzYS45OTcuOTk3IDAgMCAwIDEuNDE0IDBsNS01QTEgMSAwIDEgMCA4LjI5My4yOTNMNCA0LjU4NnpcIlxuICAgIC8+XG4gIDwvc3ZnPlxuKVxuXG5DaGVja0ljb24ucHJvcFR5cGVzID0ge1xuICBmaWxsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzaXplOiBQcm9wVHlwZXMubnVtYmVyXG59XG5cbmNvbnN0IGlzQ29udHJvbGxlZCA9IGNvbXBvbmVudCA9PiB7XG4gIHJldHVybiB7fS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbXBvbmVudC5wcm9wcywgJ2NoZWNrZWQnKVxufVxuXG5jbGFzcyBTd2l0Y2ggZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyBzb21lIEJveCBBUElzLlxuICAgICAqL1xuICAgIC4uLnNwYWNpbmcucHJvcFR5cGVzLFxuICAgIC4uLnBvc2l0aW9uLnByb3BUeXBlcyxcbiAgICAuLi5sYXlvdXQucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGlkIGF0dHJpYnV0ZSBvZiB0aGUgcmFkaW8uXG4gICAgICovXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSBhdHRyaWJ1dGUgb2YgdGhlIHJhZGlvLlxuICAgICAqL1xuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmFsdWUgYXR0cmlidXRlIG9mIHRoZSByYWRpby5cbiAgICAgKi9cbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBoZWlnaHQgb2YgdGhlIHN3aXRjaC5cbiAgICAgKi9cbiAgICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSBzd2l0Y2ggaXMgY2hlY2tlZCAob24pLlxuICAgICAqL1xuICAgIGNoZWNrZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gY2FsbGVkIHdoZW4gc3RhdGUgY2hhbmdlcy5cbiAgICAgKi9cbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSBzd2l0Y2ggaXMgZGlzYWJsZWQuXG4gICAgICovXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgc3dpdGNoIGlzIGludmFsaWQuXG4gICAgICovXG4gICAgaXNJbnZhbGlkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBhcHBlYXJhbmNlIG9mIHRoZSBjaGVja2JveC5cbiAgICAgKiBUaGUgZGVmYXVsdCB0aGVtZSBvbmx5IGNvbWVzIHdpdGggYSBkZWZhdWx0IHN0eWxlLlxuICAgICAqL1xuICAgIGFwcGVhcmFuY2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIHN3aXRjaCBoYXMgYSBjaGVjayBpY29uLlxuICAgICAqL1xuICAgIGhhc0NoZWNrSWNvbjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSBzd2l0Y2ggaXMgdHJ1ZSBieSBkZWZhdWx0LlxuICAgICAqIFRoaXMgaXMgZm9yIHVuY29udHJvbGxlZCB1c2FnZS5cbiAgICAgKi9cbiAgICBkZWZhdWx0Q2hlY2tlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBUaGVtZSBwcm92aWRlZCBieSBUaGVtZVByb3ZpZGVyLlxuICAgICAqL1xuICAgIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgaGVpZ2h0OiAxNixcbiAgICBvbkNoYW5nZTogKCkgPT4ge30sXG4gICAgYXBwZWFyYW5jZTogJ2RlZmF1bHQnLFxuICAgIGhhc0NoZWNrSWNvbjogdHJ1ZSxcbiAgICBkaXNhYmxlZDogZmFsc2VcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG4gICAgc3VwZXIocHJvcHMsIGNvbnRleHQpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNoZWNrZWQ6IHByb3BzLmNoZWNrZWQgfHwgcHJvcHMuZGVmYXVsdENoZWNrZWQgfHwgZmFsc2VcbiAgICB9XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UgPSB2YWx1ZSA9PiB7XG4gICAgaWYgKGlzQ29udHJvbGxlZCh0aGlzKSkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSgoeyBjaGVja2VkIH0pID0+ICh7XG4gICAgICAgIGNoZWNrZWQ6ICFjaGVja2VkXG4gICAgICB9KSlcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodmFsdWUpXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRoZW1lLFxuXG4gICAgICBpZCxcbiAgICAgIG5hbWUsXG4gICAgICBoZWlnaHQsXG4gICAgICBjaGVja2VkOiBjaGVja2VkUHJvcHMsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgYXBwZWFyYW5jZSxcbiAgICAgIGhhc0NoZWNrSWNvbixcbiAgICAgIGRlZmF1bHRDaGVja2VkLFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgY2hlY2tlZCA9IGlzQ29udHJvbGxlZCh0aGlzKSA/IGNoZWNrZWRQcm9wcyA6IHRoaXMuc3RhdGUuY2hlY2tlZFxuICAgIGNvbnN0IHRoZW1lZENsYXNzTmFtZSA9IHRoZW1lLmdldFN3aXRjaENsYXNzTmFtZShhcHBlYXJhbmNlKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3hcbiAgICAgICAgaXM9XCJsYWJlbFwiXG4gICAgICAgIGRpc3BsYXk9XCJibG9ja1wiXG4gICAgICAgIHdpZHRoPXtoZWlnaHQgKiAyfVxuICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgPlxuICAgICAgICA8Qm94XG4gICAgICAgICAgaXM9XCJpbnB1dFwiXG4gICAgICAgICAgY2xhc3NOYW1lPXt0aGVtZWRDbGFzc05hbWV9XG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICBjaGVja2VkPXtjaGVja2VkfVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICBkZWZhdWx0Q2hlY2tlZD17ZGVmYXVsdENoZWNrZWR9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgICA8Qm94IG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9IGhlaWdodD17aGVpZ2h0fSB3aWR0aD17aGVpZ2h0ICogMn0+XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgICB3aWR0aD17aGVpZ2h0fVxuICAgICAgICAgICAgZGF0YS1jaGVja2VkPXtjaGVja2VkfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtpY29uQ29udGFpbmVyU3R5bGVDbGFzc31cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aGFzQ2hlY2tJY29uICYmIDxDaGVja0ljb24gc2l6ZT17aGVpZ2h0IC8gMiAtIDN9IC8+fVxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIHdpZHRoPXtoZWlnaHQgKiAyfVxuICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgICAgZGF0YS1jaGVja2VkPXtjaGVja2VkfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtoYW5kbGVDb250YWluZXJTdHlsZUNsYXNzfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxCb3ggZmxleD17MX0gcGFkZGluZz17Mn0+XG4gICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICB3aWR0aD17aGVpZ2h0IC0gNH1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9e2hlaWdodCAtIDR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtoYW5kbGVTdHlsZUNsYXNzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShTd2l0Y2gpXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBU0EsR0FBVCxRQUFvQixRQUFwQjtBQUNBLE9BQU9DLEtBQVAsSUFBZ0JDLGFBQWhCLFFBQXFDLE9BQXJDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLEdBQVAsSUFBY0MsT0FBZCxFQUF1QkMsUUFBdkIsRUFBaUNDLE1BQWpDLFFBQStDLFFB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