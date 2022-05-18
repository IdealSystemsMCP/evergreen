import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import { css } from 'glamor';
import React from 'react';
import PropTypes from 'prop-types';
import { Pane } from '../../layers';
import { Paragraph, Heading } from '../../typography';
import { Overlay } from '../../overlay';
import { Button, IconButton } from '../../buttons';
import { withTheme } from '../../theme';
var animationEasing = {
  deceleration: "cubic-bezier(0.0, 0.0, 0.2, 1)",
  acceleration: "cubic-bezier(0.4, 0.0, 1, 1)"
};
var ANIMATION_DURATION = 200;
var openAnimation = css.keyframes('openAnimation', {
  from: {
    transform: 'scale(0.8)',
    opacity: 0
  },
  to: {
    transform: 'scale(1)',
    opacity: 1
  }
});
var closeAnimation = css.keyframes('closeAnimation', {
  from: {
    transform: 'scale(1)',
    opacity: 1
  },
  to: {
    transform: 'scale(0.8)',
    opacity: 0
  }
});
var animationStyles = {
  '&[data-state="entering"], &[data-state="entered"]': {
    animation: "".concat(openAnimation, " ").concat(ANIMATION_DURATION, "ms ").concat(animationEasing.deceleration, " both")
  },
  '&[data-state="exiting"]': {
    animation: "".concat(closeAnimation, " ").concat(ANIMATION_DURATION, "ms ").concat(animationEasing.acceleration, " both")
  }
};

var Dialog = /*#__PURE__*/function (_React$Component) {
  _inherits(Dialog, _React$Component);

  var _super = _createSuper(Dialog);

  function Dialog() {
    var _this;

    _classCallCheck(this, Dialog);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "renderChildren", function (close) {
      var children = _this.props.children;

      if (typeof children === 'function') {
        return children({
          close: close
        });
      }

      if (typeof children === 'string') {
        return /*#__PURE__*/React.createElement(Paragraph, null, children);
      }

      return children;
    });

    return _this;
  }

  _createClass(Dialog, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          title = _this$props.title,
          width = _this$props.width,
          intent = _this$props.intent,
          isShown = _this$props.isShown,
          topOffset = _this$props.topOffset,
          sideOffset = _this$props.sideOffset,
          hasHeader = _this$props.hasHeader,
          hasClose = _this$props.hasClose,
          hasFooter = _this$props.hasFooter,
          hasCancel = _this$props.hasCancel,
          onCloseComplete = _this$props.onCloseComplete,
          onOpenComplete = _this$props.onOpenComplete,
          onCancel = _this$props.onCancel,
          onConfirm = _this$props.onConfirm,
          confirmLabel = _this$props.confirmLabel,
          isConfirmLoading = _this$props.isConfirmLoading,
          isConfirmDisabled = _this$props.isConfirmDisabled,
          cancelLabel = _this$props.cancelLabel,
          shouldCloseOnOverlayClick = _this$props.shouldCloseOnOverlayClick,
          shouldCloseOnEscapePress = _this$props.shouldCloseOnEscapePress,
          _this$props$container = _this$props.containerProps,
          containerProps = _this$props$container === void 0 ? {} : _this$props$container,
          contentContainerProps = _this$props.contentContainerProps,
          minHeightContent = _this$props.minHeightContent,
          preventBodyScrolling = _this$props.preventBodyScrolling,
          overlayProps = _this$props.overlayProps;
      var sideOffsetWithUnit = Number.isInteger(sideOffset) ? "".concat(sideOffset, "px") : sideOffset;
      var maxWidth = "calc(100% - ".concat(sideOffsetWithUnit, " * 2)");
      var topOffsetWithUnit = Number.isInteger(topOffset) ? "".concat(topOffset, "px") : topOffset;
      var maxHeight = "calc(100% - ".concat(topOffsetWithUnit, " * 2)");
      return /*#__PURE__*/React.createElement(Overlay, {
        isShown: isShown,
        shouldCloseOnClick: shouldCloseOnOverlayClick,
        shouldCloseOnEscapePress: shouldCloseOnEscapePress,
        onExited: onCloseComplete,
        onEntered: onOpenComplete,
        containerProps: _objectSpread({
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center'
        }, overlayProps),
        preventBodyScrolling: preventBodyScrolling
      }, function (_ref) {
        var state = _ref.state,
            close = _ref.close;
        return /*#__PURE__*/React.createElement(Pane, _extends({
          role: "dialog",
          backgroundColor: "white",
          elevation: 4,
          borderRadius: 8,
          width: width,
          maxWidth: maxWidth,
          maxHeight: maxHeight,
          marginX: sideOffsetWithUnit,
          marginY: topOffsetWithUnit,
          display: "flex",
          flexDirection: "column",
          css: animationStyles,
          "data-state": state
        }, containerProps), hasHeader && /*#__PURE__*/React.createElement(Pane, {
          padding: 16,
          flexShrink: 0,
          borderBottom: "muted",
          display: "flex",
          alignItems: "center"
        }, /*#__PURE__*/React.createElement(Heading, {
          is: "h4",
          size: 600,
          flex: "1"
        }, title), hasClose && /*#__PURE__*/React.createElement(IconButton, {
          appearance: "minimal",
          icon: "cross",
          onClick: function onClick() {
            return onCancel(close);
          }
        })), /*#__PURE__*/React.createElement(Pane, _extends({
          "data-state": state,
          display: "flex",
          overflow: "auto",
          padding: 16,
          flexDirection: "column",
          minHeight: minHeightContent
        }, contentContainerProps), /*#__PURE__*/React.createElement(Pane, null, _this2.renderChildren(close))), hasFooter && /*#__PURE__*/React.createElement(Pane, {
          borderTop: "muted",
          clearfix: true
        }, /*#__PURE__*/React.createElement(Pane, {
          padding: 16,
          "float": "right"
        }, hasCancel && /*#__PURE__*/React.createElement(Button, {
          tabIndex: 0,
          onClick: function onClick() {
            return onCancel(close);
          }
        }, cancelLabel), /*#__PURE__*/React.createElement(Button, {
          tabIndex: 0,
          marginLeft: 8,
          appearance: "primary",
          isLoading: isConfirmLoading,
          disabled: isConfirmDisabled,
          onClick: function onClick() {
            return onConfirm(close);
          },
          intent: intent
        }, confirmLabel))));
      });
    }
  }]);

  return Dialog;
}(React.Component);

Dialog.displayName = "Dialog";

_defineProperty(Dialog, "propTypes", {
  /**
   * Children can be a string, node or a function accepting `({ close })`.
   * When passing a string, <Paragraph /> is used to wrap the string.
   */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,

  /**
   * The intent of the Dialog. Used for the button.
   */
  intent: PropTypes.oneOf(['none', 'success', 'warning', 'danger']).isRequired,

  /**
   * When true, the dialog is shown.
   */
  isShown: PropTypes.bool,

  /**
   * Title of the Dialog. Titles should use Title Case.
   */
  title: PropTypes.node,

  /**
   * When true, the header with the title and close icon button is shown.
   */
  hasHeader: PropTypes.bool,

  /**
   * When true, the footer with the cancel and confirm button is shown.
   */
  hasFooter: PropTypes.bool,

  /**
   * When true, the cancel button is shown.
   */
  hasCancel: PropTypes.bool,

  /**
   * When true, the close button is shown
   */
  hasClose: PropTypes.bool,

  /**
   * Function that will be called when the exit transition is complete.
   */
  onCloseComplete: PropTypes.func,

  /**
   * Function that will be called when the enter transition is complete.
   */
  onOpenComplete: PropTypes.func,

  /**
   * Function that will be called when the confirm button is clicked.
   * This does not close the Dialog. A close function will be passed
   * as a paramater you can use to close the dialog.
   *
   * `onConfirm={(close) => close()}`
   */
  onConfirm: PropTypes.func,

  /**
   * Label of the confirm button.
   */
  confirmLabel: PropTypes.string,

  /**
   * When true, the confirm button is set to loading.
   */
  isConfirmLoading: PropTypes.bool,

  /**
   * When true, the confirm button is set to disabled.
   */
  isConfirmDisabled: PropTypes.bool,

  /**
   * Function that will be called when the cancel button is clicked.
   * This closes the Dialog by default.
   *
   * `onCancel={(close) => close()}`
   */
  onCancel: PropTypes.func,

  /**
   * Label of the cancel button.
   */
  cancelLabel: PropTypes.string,

  /**
   * Boolean indicating if clicking the overlay should close the overlay.
   */
  shouldCloseOnOverlayClick: PropTypes.bool,

  /**
   * Boolean indicating if pressing the esc key should close the overlay.
   */
  shouldCloseOnEscapePress: PropTypes.bool,

  /**
   * Width of the Dialog.
   */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * The space above the dialog.
   * This offset is also used at the bottom when there is not enough vertical
   * space available on screen — and the dialog scrolls internally.
   */
  topOffset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * The space on the left/right sides of the dialog when there isn't enough
   * horizontal space available on screen.
   */
  sideOffset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * The min height of the body content.
   * Makes it less weird when only showing little content.
   */
  minHeightContent: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Props that are passed to the dialog container.
   */
  containerProps: PropTypes.object,

  /**
   * Props that are passed to the content container.
   */
  contentContainerProps: PropTypes.object,

  /**
   * Whether or not to prevent scrolling in the outer body
   */
  preventBodyScrolling: PropTypes.bool,

  /**
   * Props that are passed to the Overlay component.
   */
  overlayProps: PropTypes.object
});

_defineProperty(Dialog, "defaultProps", {
  isShown: false,
  hasHeader: true,
  hasClose: true,
  hasFooter: true,
  hasCancel: true,
  intent: 'none',
  width: 560,
  topOffset: '12vmin',
  sideOffset: '16px',
  minHeightContent: 80,
  confirmLabel: 'Confirm',
  isConfirmLoading: false,
  isConfirmDisabled: false,
  cancelLabel: 'Cancel',
  shouldCloseOnOverlayClick: true,
  shouldCloseOnEscapePress: true,
  onCancel: function onCancel(close) {
    return close();
  },
  onConfirm: function onConfirm(close) {
    return close();
  },
  preventBodyScrolling: false,
  overlayProps: {}
});

export default withTheme(Dialog);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjc3MiLCJSZWFjdCIsIlByb3BUeXBlcyIsIlBhbmUiLCJQYXJhZ3JhcGgiLCJIZWFkaW5nIiwiT3ZlcmxheSIsIkJ1dHRvbiIsIkljb25CdXR0b24iLCJ3aXRoVGhlbWUiLCJhbmltYXRpb25FYXNpbmciLCJkZWNlbGVyYXRpb24iLCJhY2NlbGVyYXRpb24iLCJBTklNQVRJT05fRFVSQVRJT04iLCJvcGVuQW5pbWF0aW9uIiwia2V5ZnJhbWVzIiwiZnJvbSIsInRyYW5zZm9ybSIsIm9wYWNpdHkiLCJ0byIsImNsb3NlQW5pbWF0aW9uIiwiYW5pbWF0aW9uU3R5bGVzIiwiYW5pbWF0aW9uIiwiRGlhbG9nIiwiY2xvc2UiLCJjaGlsZHJlbiIsInByb3BzIiwidGl0bGUiLCJ3aWR0aCIsImludGVudCIsImlzU2hvd24iLCJ0b3BPZmZzZXQiLCJzaWRlT2Zmc2V0IiwiaGFzSGVhZGVyIiwiaGFzQ2xvc2UiLCJoYXNGb290ZXIiLCJoYXNDYW5jZWwiLCJvbkNsb3NlQ29tcGxldGUiLCJvbk9wZW5Db21wbGV0ZSIsIm9uQ2FuY2VsIiwib25Db25maXJtIiwiY29uZmlybUxhYmVsIiwiaXNDb25maXJtTG9hZGluZyIsImlzQ29uZmlybURpc2FibGVkIiwiY2FuY2VsTGFiZWwiLCJzaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrIiwic2hvdWxkQ2xvc2VPbkVzY2FwZVByZXNzIiwiY29udGFpbmVyUHJvcHMiLCJjb250ZW50Q29udGFpbmVyUHJvcHMiLCJtaW5IZWlnaHRDb250ZW50IiwicHJldmVudEJvZHlTY3JvbGxpbmciLCJvdmVybGF5UHJvcHMiLCJzaWRlT2Zmc2V0V2l0aFVuaXQiLCJOdW1iZXIiLCJpc0ludGVnZXIiLCJtYXhXaWR0aCIsInRvcE9mZnNldFdpdGhVbml0IiwibWF4SGVpZ2h0IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInN0YXRlIiwicmVuZGVyQ2hpbGRyZW4iLCJDb21wb25lbnQiLCJvbmVPZlR5cGUiLCJub2RlIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJvbmVPZiIsImJvb2wiLCJzdHJpbmciLCJudW1iZXIiLCJvYmplY3QiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZGlhbG9nL3NyYy9EaWFsb2cuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnZ2xhbW9yJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgUGFuZSB9IGZyb20gJy4uLy4uL2xheWVycydcbmltcG9ydCB7IFBhcmFncmFwaCwgSGVhZGluZyB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknXG5pbXBvcnQgeyBPdmVybGF5IH0gZnJvbSAnLi4vLi4vb3ZlcmxheSdcbmltcG9ydCB7IEJ1dHRvbiwgSWNvbkJ1dHRvbiB9IGZyb20gJy4uLy4uL2J1dHRvbnMnXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcblxuY29uc3QgYW5pbWF0aW9uRWFzaW5nID0ge1xuICBkZWNlbGVyYXRpb246IGBjdWJpYy1iZXppZXIoMC4wLCAwLjAsIDAuMiwgMSlgLFxuICBhY2NlbGVyYXRpb246IGBjdWJpYy1iZXppZXIoMC40LCAwLjAsIDEsIDEpYFxufVxuXG5jb25zdCBBTklNQVRJT05fRFVSQVRJT04gPSAyMDBcblxuY29uc3Qgb3BlbkFuaW1hdGlvbiA9IGNzcy5rZXlmcmFtZXMoJ29wZW5BbmltYXRpb24nLCB7XG4gIGZyb206IHtcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgwLjgpJyxcbiAgICBvcGFjaXR5OiAwXG4gIH0sXG4gIHRvOiB7XG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknLFxuICAgIG9wYWNpdHk6IDFcbiAgfVxufSlcblxuY29uc3QgY2xvc2VBbmltYXRpb24gPSBjc3Mua2V5ZnJhbWVzKCdjbG9zZUFuaW1hdGlvbicsIHtcbiAgZnJvbToge1xuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpJyxcbiAgICBvcGFjaXR5OiAxXG4gIH0sXG4gIHRvOiB7XG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMC44KScsXG4gICAgb3BhY2l0eTogMFxuICB9XG59KVxuXG5jb25zdCBhbmltYXRpb25TdHlsZXMgPSB7XG4gICcmW2RhdGEtc3RhdGU9XCJlbnRlcmluZ1wiXSwgJltkYXRhLXN0YXRlPVwiZW50ZXJlZFwiXSc6IHtcbiAgICBhbmltYXRpb246IGAke29wZW5BbmltYXRpb259ICR7QU5JTUFUSU9OX0RVUkFUSU9OfW1zICR7XG4gICAgICBhbmltYXRpb25FYXNpbmcuZGVjZWxlcmF0aW9uXG4gICAgfSBib3RoYFxuICB9LFxuICAnJltkYXRhLXN0YXRlPVwiZXhpdGluZ1wiXSc6IHtcbiAgICBhbmltYXRpb246IGAke2Nsb3NlQW5pbWF0aW9ufSAke0FOSU1BVElPTl9EVVJBVElPTn1tcyAke1xuICAgICAgYW5pbWF0aW9uRWFzaW5nLmFjY2VsZXJhdGlvblxuICAgIH0gYm90aGBcbiAgfVxufVxuXG5jbGFzcyBEaWFsb2cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENoaWxkcmVuIGNhbiBiZSBhIHN0cmluZywgbm9kZSBvciBhIGZ1bmN0aW9uIGFjY2VwdGluZyBgKHsgY2xvc2UgfSlgLlxuICAgICAqIFdoZW4gcGFzc2luZyBhIHN0cmluZywgPFBhcmFncmFwaCAvPiBpcyB1c2VkIHRvIHdyYXAgdGhlIHN0cmluZy5cbiAgICAgKi9cbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm5vZGUsIFByb3BUeXBlcy5mdW5jXSkuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbnRlbnQgb2YgdGhlIERpYWxvZy4gVXNlZCBmb3IgdGhlIGJ1dHRvbi5cbiAgICAgKi9cbiAgICBpbnRlbnQ6IFByb3BUeXBlcy5vbmVPZihbJ25vbmUnLCAnc3VjY2VzcycsICd3YXJuaW5nJywgJ2RhbmdlciddKVxuICAgICAgLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSBkaWFsb2cgaXMgc2hvd24uXG4gICAgICovXG4gICAgaXNTaG93bjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBUaXRsZSBvZiB0aGUgRGlhbG9nLiBUaXRsZXMgc2hvdWxkIHVzZSBUaXRsZSBDYXNlLlxuICAgICAqL1xuICAgIHRpdGxlOiBQcm9wVHlwZXMubm9kZSxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIGhlYWRlciB3aXRoIHRoZSB0aXRsZSBhbmQgY2xvc2UgaWNvbiBidXR0b24gaXMgc2hvd24uXG4gICAgICovXG4gICAgaGFzSGVhZGVyOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIGZvb3RlciB3aXRoIHRoZSBjYW5jZWwgYW5kIGNvbmZpcm0gYnV0dG9uIGlzIHNob3duLlxuICAgICAqL1xuICAgIGhhc0Zvb3RlcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSBjYW5jZWwgYnV0dG9uIGlzIHNob3duLlxuICAgICAqL1xuICAgIGhhc0NhbmNlbDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSBjbG9zZSBidXR0b24gaXMgc2hvd25cbiAgICAgKi9cbiAgICBoYXNDbG9zZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIGV4aXQgdHJhbnNpdGlvbiBpcyBjb21wbGV0ZS5cbiAgICAgKi9cbiAgICBvbkNsb3NlQ29tcGxldGU6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZSBlbnRlciB0cmFuc2l0aW9uIGlzIGNvbXBsZXRlLlxuICAgICAqL1xuICAgIG9uT3BlbkNvbXBsZXRlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgY29uZmlybSBidXR0b24gaXMgY2xpY2tlZC5cbiAgICAgKiBUaGlzIGRvZXMgbm90IGNsb3NlIHRoZSBEaWFsb2cuIEEgY2xvc2UgZnVuY3Rpb24gd2lsbCBiZSBwYXNzZWRcbiAgICAgKiBhcyBhIHBhcmFtYXRlciB5b3UgY2FuIHVzZSB0byBjbG9zZSB0aGUgZGlhbG9nLlxuICAgICAqXG4gICAgICogYG9uQ29uZmlybT17KGNsb3NlKSA9PiBjbG9zZSgpfWBcbiAgICAgKi9cbiAgICBvbkNvbmZpcm06IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogTGFiZWwgb2YgdGhlIGNvbmZpcm0gYnV0dG9uLlxuICAgICAqL1xuICAgIGNvbmZpcm1MYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIGNvbmZpcm0gYnV0dG9uIGlzIHNldCB0byBsb2FkaW5nLlxuICAgICAqL1xuICAgIGlzQ29uZmlybUxvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgY29uZmlybSBidXR0b24gaXMgc2V0IHRvIGRpc2FibGVkLlxuICAgICAqL1xuICAgIGlzQ29uZmlybURpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgY2FuY2VsIGJ1dHRvbiBpcyBjbGlja2VkLlxuICAgICAqIFRoaXMgY2xvc2VzIHRoZSBEaWFsb2cgYnkgZGVmYXVsdC5cbiAgICAgKlxuICAgICAqIGBvbkNhbmNlbD17KGNsb3NlKSA9PiBjbG9zZSgpfWBcbiAgICAgKi9cbiAgICBvbkNhbmNlbDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBMYWJlbCBvZiB0aGUgY2FuY2VsIGJ1dHRvbi5cbiAgICAgKi9cbiAgICBjYW5jZWxMYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIEJvb2xlYW4gaW5kaWNhdGluZyBpZiBjbGlja2luZyB0aGUgb3ZlcmxheSBzaG91bGQgY2xvc2UgdGhlIG92ZXJsYXkuXG4gICAgICovXG4gICAgc2hvdWxkQ2xvc2VPbk92ZXJsYXlDbGljazogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBCb29sZWFuIGluZGljYXRpbmcgaWYgcHJlc3NpbmcgdGhlIGVzYyBrZXkgc2hvdWxkIGNsb3NlIHRoZSBvdmVybGF5LlxuICAgICAqL1xuICAgIHNob3VsZENsb3NlT25Fc2NhcGVQcmVzczogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBXaWR0aCBvZiB0aGUgRGlhbG9nLlxuICAgICAqL1xuICAgIHdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG5cbiAgICAvKipcbiAgICAgKiBUaGUgc3BhY2UgYWJvdmUgdGhlIGRpYWxvZy5cbiAgICAgKiBUaGlzIG9mZnNldCBpcyBhbHNvIHVzZWQgYXQgdGhlIGJvdHRvbSB3aGVuIHRoZXJlIGlzIG5vdCBlbm91Z2ggdmVydGljYWxcbiAgICAgKiBzcGFjZSBhdmFpbGFibGUgb24gc2NyZWVuIOKAlCBhbmQgdGhlIGRpYWxvZyBzY3JvbGxzIGludGVybmFsbHkuXG4gICAgICovXG4gICAgdG9wT2Zmc2V0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG5cbiAgICAvKipcbiAgICAgKiBUaGUgc3BhY2Ugb24gdGhlIGxlZnQvcmlnaHQgc2lkZXMgb2YgdGhlIGRpYWxvZyB3aGVuIHRoZXJlIGlzbid0IGVub3VnaFxuICAgICAqIGhvcml6b250YWwgc3BhY2UgYXZhaWxhYmxlIG9uIHNjcmVlbi5cbiAgICAgKi9cbiAgICBzaWRlT2Zmc2V0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbWluIGhlaWdodCBvZiB0aGUgYm9keSBjb250ZW50LlxuICAgICAqIE1ha2VzIGl0IGxlc3Mgd2VpcmQgd2hlbiBvbmx5IHNob3dpbmcgbGl0dGxlIGNvbnRlbnQuXG4gICAgICovXG4gICAgbWluSGVpZ2h0Q29udGVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuXG4gICAgLyoqXG4gICAgICogUHJvcHMgdGhhdCBhcmUgcGFzc2VkIHRvIHRoZSBkaWFsb2cgY29udGFpbmVyLlxuICAgICAqL1xuICAgIGNvbnRhaW5lclByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gICAgLyoqXG4gICAgICogUHJvcHMgdGhhdCBhcmUgcGFzc2VkIHRvIHRoZSBjb250ZW50IGNvbnRhaW5lci5cbiAgICAgKi9cbiAgICBjb250ZW50Q29udGFpbmVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIG9yIG5vdCB0byBwcmV2ZW50IHNjcm9sbGluZyBpbiB0aGUgb3V0ZXIgYm9keVxuICAgICAqL1xuICAgIHByZXZlbnRCb2R5U2Nyb2xsaW5nOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFByb3BzIHRoYXQgYXJlIHBhc3NlZCB0byB0aGUgT3ZlcmxheSBjb21wb25lbnQuXG4gICAgICovXG4gICAgb3ZlcmxheVByb3BzOiBQcm9wVHlwZXMub2JqZWN0XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGlzU2hvd246IGZhbHNlLFxuICAgIGhhc0hlYWRlcjogdHJ1ZSxcbiAgICBoYXNDbG9zZTogdHJ1ZSxcbiAgICBoYXNGb290ZXI6IHRydWUsXG4gICAgaGFzQ2FuY2VsOiB0cnVlLFxuICAgIGludGVudDogJ25vbmUnLFxuICAgIHdpZHRoOiA1NjAsXG4gICAgdG9wT2Zmc2V0OiAnMTJ2bWluJyxcbiAgICBzaWRlT2Zmc2V0OiAnMTZweCcsXG4gICAgbWluSGVpZ2h0Q29udGVudDogODAsXG4gICAgY29uZmlybUxhYmVsOiAnQ29uZmlybScsXG4gICAgaXNDb25maXJtTG9hZGluZzogZmFsc2UsXG4gICAgaXNDb25maXJtRGlzYWJsZWQ6IGZhbHNlLFxuICAgIGNhbmNlbExhYmVsOiAnQ2FuY2VsJyxcbiAgICBzaG91bGRDbG9zZU9uT3ZlcmxheUNsaWNrOiB0cnVlLFxuICAgIHNob3VsZENsb3NlT25Fc2NhcGVQcmVzczogdHJ1ZSxcbiAgICBvbkNhbmNlbDogY2xvc2UgPT4gY2xvc2UoKSxcbiAgICBvbkNvbmZpcm06IGNsb3NlID0+IGNsb3NlKCksXG4gICAgcHJldmVudEJvZHlTY3JvbGxpbmc6IGZhbHNlLFxuICAgIG92ZXJsYXlQcm9wczoge31cbiAgfVxuXG4gIHJlbmRlckNoaWxkcmVuID0gY2xvc2UgPT4ge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcblxuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBjaGlsZHJlbih7IGNsb3NlIH0pXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiA8UGFyYWdyYXBoPntjaGlsZHJlbn08L1BhcmFncmFwaD5cbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGRyZW5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB0aXRsZSxcbiAgICAgIHdpZHRoLFxuICAgICAgaW50ZW50LFxuICAgICAgaXNTaG93bixcbiAgICAgIHRvcE9mZnNldCxcbiAgICAgIHNpZGVPZmZzZXQsXG4gICAgICBoYXNIZWFkZXIsXG4gICAgICBoYXNDbG9zZSxcbiAgICAgIGhhc0Zvb3RlcixcbiAgICAgIGhhc0NhbmNlbCxcbiAgICAgIG9uQ2xvc2VDb21wbGV0ZSxcbiAgICAgIG9uT3BlbkNvbXBsZXRlLFxuICAgICAgb25DYW5jZWwsXG4gICAgICBvbkNvbmZpcm0sXG4gICAgICBjb25maXJtTGFiZWwsXG4gICAgICBpc0NvbmZpcm1Mb2FkaW5nLFxuICAgICAgaXNDb25maXJtRGlzYWJsZWQsXG4gICAgICBjYW5jZWxMYWJlbCxcbiAgICAgIHNob3VsZENsb3NlT25PdmVybGF5Q2xpY2ssXG4gICAgICBzaG91bGRDbG9zZU9uRXNjYXBlUHJlc3MsXG4gICAgICBjb250YWluZXJQcm9wcyA9IHt9LFxuICAgICAgY29udGVudENvbnRhaW5lclByb3BzLFxuICAgICAgbWluSGVpZ2h0Q29udGVudCxcbiAgICAgIHByZXZlbnRCb2R5U2Nyb2xsaW5nLFxuICAgICAgb3ZlcmxheVByb3BzXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IHNpZGVPZmZzZXRXaXRoVW5pdCA9IE51bWJlci5pc0ludGVnZXIoc2lkZU9mZnNldClcbiAgICAgID8gYCR7c2lkZU9mZnNldH1weGBcbiAgICAgIDogc2lkZU9mZnNldFxuICAgIGNvbnN0IG1heFdpZHRoID0gYGNhbGMoMTAwJSAtICR7c2lkZU9mZnNldFdpdGhVbml0fSAqIDIpYFxuXG4gICAgY29uc3QgdG9wT2Zmc2V0V2l0aFVuaXQgPSBOdW1iZXIuaXNJbnRlZ2VyKHRvcE9mZnNldClcbiAgICAgID8gYCR7dG9wT2Zmc2V0fXB4YFxuICAgICAgOiB0b3BPZmZzZXRcbiAgICBjb25zdCBtYXhIZWlnaHQgPSBgY2FsYygxMDAlIC0gJHt0b3BPZmZzZXRXaXRoVW5pdH0gKiAyKWBcblxuICAgIHJldHVybiAoXG4gICAgICA8T3ZlcmxheVxuICAgICAgICBpc1Nob3duPXtpc1Nob3dufVxuICAgICAgICBzaG91bGRDbG9zZU9uQ2xpY2s9e3Nob3VsZENsb3NlT25PdmVybGF5Q2xpY2t9XG4gICAgICAgIHNob3VsZENsb3NlT25Fc2NhcGVQcmVzcz17c2hvdWxkQ2xvc2VPbkVzY2FwZVByZXNzfVxuICAgICAgICBvbkV4aXRlZD17b25DbG9zZUNvbXBsZXRlfVxuICAgICAgICBvbkVudGVyZWQ9e29uT3BlbkNvbXBsZXRlfVxuICAgICAgICBjb250YWluZXJQcm9wcz17e1xuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgIC4uLm92ZXJsYXlQcm9wc1xuICAgICAgICB9fVxuICAgICAgICBwcmV2ZW50Qm9keVNjcm9sbGluZz17cHJldmVudEJvZHlTY3JvbGxpbmd9XG4gICAgICA+XG4gICAgICAgIHsoeyBzdGF0ZSwgY2xvc2UgfSkgPT4gKFxuICAgICAgICAgIDxQYW5lXG4gICAgICAgICAgICByb2xlPVwiZGlhbG9nXCJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgIGVsZXZhdGlvbj17NH1cbiAgICAgICAgICAgIGJvcmRlclJhZGl1cz17OH1cbiAgICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICAgIG1heFdpZHRoPXttYXhXaWR0aH1cbiAgICAgICAgICAgIG1heEhlaWdodD17bWF4SGVpZ2h0fVxuICAgICAgICAgICAgbWFyZ2luWD17c2lkZU9mZnNldFdpdGhVbml0fVxuICAgICAgICAgICAgbWFyZ2luWT17dG9wT2Zmc2V0V2l0aFVuaXR9XG4gICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgICAgIGNzcz17YW5pbWF0aW9uU3R5bGVzfVxuICAgICAgICAgICAgZGF0YS1zdGF0ZT17c3RhdGV9XG4gICAgICAgICAgICB7Li4uY29udGFpbmVyUHJvcHN9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2hhc0hlYWRlciAmJiAoXG4gICAgICAgICAgICAgIDxQYW5lXG4gICAgICAgICAgICAgICAgcGFkZGluZz17MTZ9XG4gICAgICAgICAgICAgICAgZmxleFNocmluaz17MH1cbiAgICAgICAgICAgICAgICBib3JkZXJCb3R0b209XCJtdXRlZFwiXG4gICAgICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEhlYWRpbmcgaXM9XCJoNFwiIHNpemU9ezYwMH0gZmxleD1cIjFcIj5cbiAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICAgICAge2hhc0Nsb3NlICYmIChcbiAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGFwcGVhcmFuY2U9XCJtaW5pbWFsXCJcbiAgICAgICAgICAgICAgICAgICAgaWNvbj1cImNyb3NzXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DYW5jZWwoY2xvc2UpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L1BhbmU+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICA8UGFuZVxuICAgICAgICAgICAgICBkYXRhLXN0YXRlPXtzdGF0ZX1cbiAgICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgICAgICBvdmVyZmxvdz1cImF1dG9cIlxuICAgICAgICAgICAgICBwYWRkaW5nPXsxNn1cbiAgICAgICAgICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgICAgICAgIG1pbkhlaWdodD17bWluSGVpZ2h0Q29udGVudH1cbiAgICAgICAgICAgICAgey4uLmNvbnRlbnRDb250YWluZXJQcm9wc31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFBhbmU+e3RoaXMucmVuZGVyQ2hpbGRyZW4oY2xvc2UpfTwvUGFuZT5cbiAgICAgICAgICAgIDwvUGFuZT5cblxuICAgICAgICAgICAge2hhc0Zvb3RlciAmJiAoXG4gICAgICAgICAgICAgIDxQYW5lIGJvcmRlclRvcD1cIm11dGVkXCIgY2xlYXJmaXg+XG4gICAgICAgICAgICAgICAgPFBhbmUgcGFkZGluZz17MTZ9IGZsb2F0PVwicmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgIHsvKiBDYW5jZWwgc2hvdWxkIGJlIGZpcnN0IHRvIG1ha2Ugc3VyZSBmb2N1cyBnZXRzIG9uIGl0IGZpcnN0LiAqL31cbiAgICAgICAgICAgICAgICAgIHtoYXNDYW5jZWwgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRhYkluZGV4PXswfSBvbkNsaWNrPXsoKSA9PiBvbkNhbmNlbChjbG9zZSl9PlxuICAgICAgICAgICAgICAgICAgICAgIHtjYW5jZWxMYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXswfVxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0PXs4fVxuICAgICAgICAgICAgICAgICAgICBhcHBlYXJhbmNlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZz17aXNDb25maXJtTG9hZGluZ31cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzQ29uZmlybURpc2FibGVkfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNvbmZpcm0oY2xvc2UpfVxuICAgICAgICAgICAgICAgICAgICBpbnRlbnQ9e2ludGVudH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2NvbmZpcm1MYWJlbH1cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvUGFuZT5cbiAgICAgICAgICAgICAgPC9QYW5lPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L1BhbmU+XG4gICAgICAgICl9XG4gICAgICA8L092ZXJsYXk+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShEaWFsb2cpXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBU0EsR0FBVCxRQUFvQixRQUFwQjtBQUNBLE9BQU9DLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQixjQUFyQjtBQUNBLFNBQVNDLFNBQVQsRUFBb0JDLE9BQXBCLFFBQW1DLGtCQUFuQztBQUNBLFNBQVNDLE9BQVQsUUFBd0IsZUFBeEI7QUFDQSxTQUFTQyxNQUFULEVBQWlCQyxVQUFqQixRQUFtQyxlQUFuQztBQUNBLFNBQVNDLFNBQVQsUUFBMEIsYUFBMUI7QUFFQSxJQUFNQyxlQUFlLEdBQUc7RUFDdEJDLFlBQVksa0NBRFU7RUFFdEJDLFlBQVk7QUFGVSxDQUF4QjtBQUtBLElBQU1DLGtCQUFrQixHQUFHLEdBQTNCO0FBRUEsSUFBTUMsYUFBYSxHQUFHZCxHQUFHLENBQUNlLFNBQUosQ0FBYyxlQUFkLEVBQStCO0VBQ25EQyxJQUFJLEVBQUU7SUFDSkMsU0FBUyxFQUFFLFlBRFA7SUFFSkMsT0FBTyxFQUFFO0VBRkwsQ0FENkM7RUFLbkRDLEVBQUUsRUFBRTtJQUNGRixTQUFTLEVBQUUsVUFEVDtJQUVGQyxPQUFPLEVBQUU7RUFGUDtBQUwrQyxDQUEvQixDQUF0QjtBQVdBLElBQU1FLGNBQWMsR0FBR3BCLEdBQUcsQ0FBQ2UsU0FBSixDQUFjLGdCQUFkLEVBQWdDO0VBQ3JEQyxJQUFJLEVBQUU7SUFDSkMsU0FBUyxFQUFFLFVBRFA7SUFFSkMsT0FBTyxFQUFFO0VBRkwsQ0FEK0M7RUFLckRDLEVBQUUsRUFBRTtJQUNGRixT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