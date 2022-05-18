import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import { css } from 'glamor';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';
import { Pane, Card } from '../../layers';
import { Portal } from '../../portal';
import { Paragraph, Heading } from '../../typography';
import { Button, IconButton } from '../../buttons';
import absolutePositions from '../../constants/src/AbsolutePosition';
import positions from '../../constants/src/Position';
var animationEasing = {
  deceleration: "cubic-bezier(0.0, 0.0, 0.2, 1)",
  acceleration: "cubic-bezier(0.4, 0.0, 1, 1)",
  spring: "cubic-bezier(0.175, 0.885, 0.320, 1.175)"
};
var ANIMATION_DURATION = 240;
var openAnimation = css.keyframes('openAnimation', {
  from: {
    transform: 'translateY(100%)'
  },
  to: {
    transform: 'translateY(0)'
  }
});
var closeAnimation = css.keyframes('closeAnimation', {
  from: {
    transform: 'scale(1)',
    opacity: 1
  },
  to: {
    transform: 'scale(0.9)',
    opacity: 0
  }
});
var animationStyles = {
  '&[data-state="entering"], &[data-state="entered"]': {
    animation: "".concat(openAnimation, " ").concat(ANIMATION_DURATION, "ms ").concat(animationEasing.spring, " both")
  },
  '&[data-state="exiting"]': {
    animation: "".concat(closeAnimation, " 120ms ").concat(animationEasing.acceleration, " both")
  }
};

var CornerDialog = /*#__PURE__*/function (_PureComponent) {
  _inherits(CornerDialog, _PureComponent);

  var _super = _createSuper(CornerDialog);

  function CornerDialog(props) {
    var _this;

    _classCallCheck(this, CornerDialog);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleExited", function () {
      _this.setState({
        exiting: false,
        exited: true
      });

      _this.props.onCloseComplete();
    });

    _defineProperty(_assertThisInitialized(_this), "handleCancel", function () {
      _this.props.onCancel(_this.handleClose);
    });

    _defineProperty(_assertThisInitialized(_this), "handleClose", function () {
      _this.setState({
        exiting: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleConfirm", function () {
      _this.props.onConfirm(_this.handleClose);
    });

    _defineProperty(_assertThisInitialized(_this), "renderChildren", function () {
      var children = _this.props.children;

      if (typeof children === 'function') {
        return children({
          close: _this.handleClose
        });
      }

      if (typeof children === 'string') {
        return /*#__PURE__*/React.createElement(Paragraph, {
          size: 400,
          color: "muted"
        }, children);
      }

      return children;
    });

    _this.state = {
      exiting: false,
      exited: !props.isShown
    };
    return _this;
  }

  _createClass(CornerDialog, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!prevProps.isShown && this.props.isShown) {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({
          exited: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          title = _this$props.title,
          width = _this$props.width,
          intent = _this$props.intent,
          isShown = _this$props.isShown,
          hasFooter = _this$props.hasFooter,
          hasCancel = _this$props.hasCancel,
          hasClose = _this$props.hasClose,
          cancelLabel = _this$props.cancelLabel,
          confirmLabel = _this$props.confirmLabel,
          onOpenComplete = _this$props.onOpenComplete,
          _this$props$container = _this$props.containerProps,
          containerProps = _this$props$container === void 0 ? {} : _this$props$container,
          position = _this$props.position;
      var _this$state = this.state,
          exiting = _this$state.exiting,
          exited = _this$state.exited;
      if (exited) return null;
      return /*#__PURE__*/React.createElement(Portal, null, /*#__PURE__*/React.createElement(Transition, {
        appear: true,
        unmountOnExit: true,
        timeout: ANIMATION_DURATION,
        "in": isShown && !exiting,
        onExited: this.handleExited,
        onEntered: onOpenComplete
      }, function (state) {
        return /*#__PURE__*/React.createElement(Card, _extends({
          role: "dialog",
          backgroundColor: "white",
          elevation: 4,
          width: width,
          css: animationStyles,
          "data-state": state,
          padding: 32,
          position: "fixed"
        }, absolutePositions[Object.keys(absolutePositions).includes(position) ? position : positions.BOTTOM_RIGHT], containerProps), /*#__PURE__*/React.createElement(Pane, {
          display: "flex",
          alignItems: "center",
          marginBottom: 12
        }, /*#__PURE__*/React.createElement(Heading, {
          is: "h4",
          size: 600,
          flex: "1"
        }, title), hasClose && /*#__PURE__*/React.createElement(IconButton, {
          height: 32,
          icon: "cross",
          appearance: "minimal",
          onClick: _this2.handleClose
        })), /*#__PURE__*/React.createElement(Pane, {
          overflowY: "auto",
          "data-state": state
        }, _this2.renderChildren()), hasFooter && /*#__PURE__*/React.createElement(Pane, {
          marginTop: 24,
          flexShrink: 0,
          display: "flex",
          flexDirection: "row-reverse"
        }, /*#__PURE__*/React.createElement(Button, {
          appearance: "primary",
          intent: intent,
          marginLeft: 8,
          onClick: _this2.handleConfirm
        }, confirmLabel), hasCancel && /*#__PURE__*/React.createElement(Button, {
          onClick: _this2.handleCancel
        }, cancelLabel)));
      }));
    }
  }]);

  return CornerDialog;
}(PureComponent);

CornerDialog.displayName = "CornerDialog";

_defineProperty(CornerDialog, "propTypes", {
  /**
   * Children can be a string, node or a function accepting `({ close })`.
   * When passing a string, <Paragraph size={400} color="muted" /> is used to wrap the string.
   */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,

  /**
   * The intent of the CornerDialog. Used for the button.
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
   * Function that will be called when the exit transition is complete.
   */
  onCloseComplete: PropTypes.func,

  /**
   * Function that will be called when the enter transition is complete.
   */
  onOpenComplete: PropTypes.func,

  /**
   * When true, the footer with the cancel and confirm button is shown.
   */
  hasFooter: PropTypes.bool,

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
   * When true, the cancel button is shown.
   */
  hasCancel: PropTypes.bool,

  /**
   * When true, the close button is shown.
   */
  hasClose: PropTypes.bool,

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
   * Width of the Dialog.
   */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Props that are passed to the dialog container.
   */
  containerProps: PropTypes.object,

  /**
   * Props that will set position of corner dialog
   */
  position: PropTypes.oneOf([positions.TOP_LEFT, positions.TOP_RIGHT, positions.BOTTOM_LEFT, positions.BOTTOM_RIGHT])
});

_defineProperty(CornerDialog, "defaultProps", {
  width: 392,
  intent: 'none',
  hasFooter: true,
  confirmLabel: 'Learn More',
  hasCancel: true,
  hasClose: true,
  cancelLabel: 'Close',
  onCancel: function onCancel(close) {
    return close();
  },
  onConfirm: function onConfirm(close) {
    return close();
  },
  onCloseComplete: function onCloseComplete() {},
  position: positions.BOTTOM_RIGHT
});

export { CornerDialog as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjc3MiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJUcmFuc2l0aW9uIiwiUGFuZSIsIkNhcmQiLCJQb3J0YWwiLCJQYXJhZ3JhcGgiLCJIZWFkaW5nIiwiQnV0dG9uIiwiSWNvbkJ1dHRvbiIsImFic29sdXRlUG9zaXRpb25zIiwicG9zaXRpb25zIiwiYW5pbWF0aW9uRWFzaW5nIiwiZGVjZWxlcmF0aW9uIiwiYWNjZWxlcmF0aW9uIiwic3ByaW5nIiwiQU5JTUFUSU9OX0RVUkFUSU9OIiwib3BlbkFuaW1hdGlvbiIsImtleWZyYW1lcyIsImZyb20iLCJ0cmFuc2Zvcm0iLCJ0byIsImNsb3NlQW5pbWF0aW9uIiwib3BhY2l0eSIsImFuaW1hdGlvblN0eWxlcyIsImFuaW1hdGlvbiIsIkNvcm5lckRpYWxvZyIsInByb3BzIiwic2V0U3RhdGUiLCJleGl0aW5nIiwiZXhpdGVkIiwib25DbG9zZUNvbXBsZXRlIiwib25DYW5jZWwiLCJoYW5kbGVDbG9zZSIsIm9uQ29uZmlybSIsImNoaWxkcmVuIiwiY2xvc2UiLCJzdGF0ZSIsImlzU2hvd24iLCJwcmV2UHJvcHMiLCJ0aXRsZSIsIndpZHRoIiwiaW50ZW50IiwiaGFzRm9vdGVyIiwiaGFzQ2FuY2VsIiwiaGFzQ2xvc2UiLCJjYW5jZWxMYWJlbCIsImNvbmZpcm1MYWJlbCIsIm9uT3BlbkNvbXBsZXRlIiwiY29udGFpbmVyUHJvcHMiLCJwb3NpdGlvbiIsImhhbmRsZUV4aXRlZCIsIk9iamVjdCIsImtleXMiLCJpbmNsdWRlcyIsIkJPVFRPTV9SSUdIVCIsInJlbmRlckNoaWxkcmVuIiwiaGFuZGxlQ29uZmlybSIsImhhbmRsZUNhbmNlbCIsIm9uZU9mVHlwZSIsIm5vZGUiLCJmdW5jIiwiaXNSZXF1aXJlZCIsIm9uZU9mIiwiYm9vbCIsInN0cmluZyIsIm51bWJlciIsIm9iamVjdCIsIlRPUF9MRUZUIiwiVE9QX1JJR0hUIiwiQk9UVE9NX0xFRlQiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29ybmVyLWRpYWxvZy9zcmMvQ29ybmVyRGlhbG9nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ2dsYW1vcidcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgVHJhbnNpdGlvbiBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwL1RyYW5zaXRpb24nXG5pbXBvcnQgeyBQYW5lLCBDYXJkIH0gZnJvbSAnLi4vLi4vbGF5ZXJzJ1xuaW1wb3J0IHsgUG9ydGFsIH0gZnJvbSAnLi4vLi4vcG9ydGFsJ1xuaW1wb3J0IHsgUGFyYWdyYXBoLCBIZWFkaW5nIH0gZnJvbSAnLi4vLi4vdHlwb2dyYXBoeSdcbmltcG9ydCB7IEJ1dHRvbiwgSWNvbkJ1dHRvbiB9IGZyb20gJy4uLy4uL2J1dHRvbnMnXG5pbXBvcnQgYWJzb2x1dGVQb3NpdGlvbnMgZnJvbSAnLi4vLi4vY29uc3RhbnRzL3NyYy9BYnNvbHV0ZVBvc2l0aW9uJ1xuaW1wb3J0IHBvc2l0aW9ucyBmcm9tICcuLi8uLi9jb25zdGFudHMvc3JjL1Bvc2l0aW9uJ1xuXG5jb25zdCBhbmltYXRpb25FYXNpbmcgPSB7XG4gIGRlY2VsZXJhdGlvbjogYGN1YmljLWJlemllcigwLjAsIDAuMCwgMC4yLCAxKWAsXG4gIGFjY2VsZXJhdGlvbjogYGN1YmljLWJlemllcigwLjQsIDAuMCwgMSwgMSlgLFxuICBzcHJpbmc6IGBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyMCwgMS4xNzUpYFxufVxuXG5jb25zdCBBTklNQVRJT05fRFVSQVRJT04gPSAyNDBcblxuY29uc3Qgb3BlbkFuaW1hdGlvbiA9IGNzcy5rZXlmcmFtZXMoJ29wZW5BbmltYXRpb24nLCB7XG4gIGZyb206IHtcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDEwMCUpJ1xuICB9LFxuICB0bzoge1xuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCknXG4gIH1cbn0pXG5cbmNvbnN0IGNsb3NlQW5pbWF0aW9uID0gY3NzLmtleWZyYW1lcygnY2xvc2VBbmltYXRpb24nLCB7XG4gIGZyb206IHtcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKScsXG4gICAgb3BhY2l0eTogMVxuICB9LFxuICB0bzoge1xuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDAuOSknLFxuICAgIG9wYWNpdHk6IDBcbiAgfVxufSlcblxuY29uc3QgYW5pbWF0aW9uU3R5bGVzID0ge1xuICAnJltkYXRhLXN0YXRlPVwiZW50ZXJpbmdcIl0sICZbZGF0YS1zdGF0ZT1cImVudGVyZWRcIl0nOiB7XG4gICAgYW5pbWF0aW9uOiBgJHtvcGVuQW5pbWF0aW9ufSAke0FOSU1BVElPTl9EVVJBVElPTn1tcyAke1xuICAgICAgYW5pbWF0aW9uRWFzaW5nLnNwcmluZ1xuICAgIH0gYm90aGBcbiAgfSxcbiAgJyZbZGF0YS1zdGF0ZT1cImV4aXRpbmdcIl0nOiB7XG4gICAgYW5pbWF0aW9uOiBgJHtjbG9zZUFuaW1hdGlvbn0gMTIwbXMgJHthbmltYXRpb25FYXNpbmcuYWNjZWxlcmF0aW9ufSBib3RoYFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvcm5lckRpYWxvZyBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENoaWxkcmVuIGNhbiBiZSBhIHN0cmluZywgbm9kZSBvciBhIGZ1bmN0aW9uIGFjY2VwdGluZyBgKHsgY2xvc2UgfSlgLlxuICAgICAqIFdoZW4gcGFzc2luZyBhIHN0cmluZywgPFBhcmFncmFwaCBzaXplPXs0MDB9IGNvbG9yPVwibXV0ZWRcIiAvPiBpcyB1c2VkIHRvIHdyYXAgdGhlIHN0cmluZy5cbiAgICAgKi9cbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm5vZGUsIFByb3BUeXBlcy5mdW5jXSkuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbnRlbnQgb2YgdGhlIENvcm5lckRpYWxvZy4gVXNlZCBmb3IgdGhlIGJ1dHRvbi5cbiAgICAgKi9cbiAgICBpbnRlbnQ6IFByb3BUeXBlcy5vbmVPZihbJ25vbmUnLCAnc3VjY2VzcycsICd3YXJuaW5nJywgJ2RhbmdlciddKVxuICAgICAgLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSBkaWFsb2cgaXMgc2hvd24uXG4gICAgICovXG4gICAgaXNTaG93bjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBUaXRsZSBvZiB0aGUgRGlhbG9nLiBUaXRsZXMgc2hvdWxkIHVzZSBUaXRsZSBDYXNlLlxuICAgICAqL1xuICAgIHRpdGxlOiBQcm9wVHlwZXMubm9kZSxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgZXhpdCB0cmFuc2l0aW9uIGlzIGNvbXBsZXRlLlxuICAgICAqL1xuICAgIG9uQ2xvc2VDb21wbGV0ZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIGVudGVyIHRyYW5zaXRpb24gaXMgY29tcGxldGUuXG4gICAgICovXG4gICAgb25PcGVuQ29tcGxldGU6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgZm9vdGVyIHdpdGggdGhlIGNhbmNlbCBhbmQgY29uZmlybSBidXR0b24gaXMgc2hvd24uXG4gICAgICovXG4gICAgaGFzRm9vdGVyOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgY29uZmlybSBidXR0b24gaXMgY2xpY2tlZC5cbiAgICAgKiBUaGlzIGRvZXMgbm90IGNsb3NlIHRoZSBEaWFsb2cuIEEgY2xvc2UgZnVuY3Rpb24gd2lsbCBiZSBwYXNzZWRcbiAgICAgKiBhcyBhIHBhcmFtYXRlciB5b3UgY2FuIHVzZSB0byBjbG9zZSB0aGUgZGlhbG9nLlxuICAgICAqXG4gICAgICogYG9uQ29uZmlybT17KGNsb3NlKSA9PiBjbG9zZSgpfWBcbiAgICAgKi9cbiAgICBvbkNvbmZpcm06IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogTGFiZWwgb2YgdGhlIGNvbmZpcm0gYnV0dG9uLlxuICAgICAqL1xuICAgIGNvbmZpcm1MYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIGNhbmNlbCBidXR0b24gaXMgc2hvd24uXG4gICAgICovXG4gICAgaGFzQ2FuY2VsOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIGNsb3NlIGJ1dHRvbiBpcyBzaG93bi5cbiAgICAgKi9cbiAgICBoYXNDbG9zZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIGNhbmNlbCBidXR0b24gaXMgY2xpY2tlZC5cbiAgICAgKiBUaGlzIGNsb3NlcyB0aGUgRGlhbG9nIGJ5IGRlZmF1bHQuXG4gICAgICpcbiAgICAgKiBgb25DYW5jZWw9eyhjbG9zZSkgPT4gY2xvc2UoKX1gXG4gICAgICovXG4gICAgb25DYW5jZWw6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogTGFiZWwgb2YgdGhlIGNhbmNlbCBidXR0b24uXG4gICAgICovXG4gICAgY2FuY2VsTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBXaWR0aCBvZiB0aGUgRGlhbG9nLlxuICAgICAqL1xuICAgIHdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG5cbiAgICAvKipcbiAgICAgKiBQcm9wcyB0aGF0IGFyZSBwYXNzZWQgdG8gdGhlIGRpYWxvZyBjb250YWluZXIuXG4gICAgICovXG4gICAgY29udGFpbmVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgICAvKipcbiAgICAgKiBQcm9wcyB0aGF0IHdpbGwgc2V0IHBvc2l0aW9uIG9mIGNvcm5lciBkaWFsb2dcbiAgICAgKi9cbiAgICBwb3NpdGlvbjogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAgIHBvc2l0aW9ucy5UT1BfTEVGVCxcbiAgICAgIHBvc2l0aW9ucy5UT1BfUklHSFQsXG4gICAgICBwb3NpdGlvbnMuQk9UVE9NX0xFRlQsXG4gICAgICBwb3NpdGlvbnMuQk9UVE9NX1JJR0hUXG4gICAgXSlcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgd2lkdGg6IDM5MixcbiAgICBpbnRlbnQ6ICdub25lJyxcbiAgICBoYXNGb290ZXI6IHRydWUsXG4gICAgY29uZmlybUxhYmVsOiAnTGVhcm4gTW9yZScsXG4gICAgaGFzQ2FuY2VsOiB0cnVlLFxuICAgIGhhc0Nsb3NlOiB0cnVlLFxuICAgIGNhbmNlbExhYmVsOiAnQ2xvc2UnLFxuICAgIG9uQ2FuY2VsOiBjbG9zZSA9PiBjbG9zZSgpLFxuICAgIG9uQ29uZmlybTogY2xvc2UgPT4gY2xvc2UoKSxcbiAgICBvbkNsb3NlQ29tcGxldGU6ICgpID0+IHt9LFxuICAgIHBvc2l0aW9uOiBwb3NpdGlvbnMuQk9UVE9NX1JJR0hUXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGV4aXRpbmc6IGZhbHNlLFxuICAgICAgZXhpdGVkOiAhcHJvcHMuaXNTaG93blxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBpZiAoIXByZXZQcm9wcy5pc1Nob3duICYmIHRoaXMucHJvcHMuaXNTaG93bikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWRpZC11cGRhdGUtc2V0LXN0YXRlXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZXhpdGVkOiBmYWxzZVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBoYW5kbGVFeGl0ZWQgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGV4aXRpbmc6IGZhbHNlLCBleGl0ZWQ6IHRydWUgfSlcbiAgICB0aGlzLnByb3BzLm9uQ2xvc2VDb21wbGV0ZSgpXG4gIH1cblxuICBoYW5kbGVDYW5jZWwgPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vbkNhbmNlbCh0aGlzLmhhbmRsZUNsb3NlKVxuICB9XG5cbiAgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGV4aXRpbmc6IHRydWUgfSlcbiAgfVxuXG4gIGhhbmRsZUNvbmZpcm0gPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vbkNvbmZpcm0odGhpcy5oYW5kbGVDbG9zZSlcbiAgfVxuXG4gIHJlbmRlckNoaWxkcmVuID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gY2hpbGRyZW4oeyBjbG9zZTogdGhpcy5oYW5kbGVDbG9zZSB9KVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8UGFyYWdyYXBoIHNpemU9ezQwMH0gY29sb3I9XCJtdXRlZFwiPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9QYXJhZ3JhcGg+XG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkcmVuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdGl0bGUsXG4gICAgICB3aWR0aCxcbiAgICAgIGludGVudCxcbiAgICAgIGlzU2hvd24sXG4gICAgICBoYXNGb290ZXIsXG4gICAgICBoYXNDYW5jZWwsXG4gICAgICBoYXNDbG9zZSxcbiAgICAgIGNhbmNlbExhYmVsLFxuICAgICAgY29uZmlybUxhYmVsLFxuICAgICAgb25PcGVuQ29tcGxldGUsXG4gICAgICBjb250YWluZXJQcm9wcyA9IHt9LFxuICAgICAgcG9zaXRpb25cbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgeyBleGl0aW5nLCBleGl0ZWQgfSA9IHRoaXMuc3RhdGVcblxuICAgIGlmIChleGl0ZWQpIHJldHVybiBudWxsXG4gICAgcmV0dXJuIChcbiAgICAgIDxQb3J0YWw+XG4gICAgICAgIDxUcmFuc2l0aW9uXG4gICAgICAgICAgYXBwZWFyXG4gICAgICAgICAgdW5tb3VudE9uRXhpdFxuICAgICAgICAgIHRpbWVvdXQ9e0FOSU1BVElPTl9EVVJBVElPTn1cbiAgICAgICAgICBpbj17aXNTaG93biAmJiAhZXhpdGluZ31cbiAgICAgICAgICBvbkV4aXRlZD17dGhpcy5oYW5kbGVFeGl0ZWR9XG4gICAgICAgICAgb25FbnRlcmVkPXtvbk9wZW5Db21wbGV0ZX1cbiAgICAgICAgPlxuICAgICAgICAgIHtzdGF0ZSA9PiAoXG4gICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICByb2xlPVwiZGlhbG9nXCJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICBlbGV2YXRpb249ezR9XG4gICAgICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICAgICAgY3NzPXthbmltYXRpb25TdHlsZXN9XG4gICAgICAgICAgICAgIGRhdGEtc3RhdGU9e3N0YXRlfVxuICAgICAgICAgICAgICBwYWRkaW5nPXszMn1cbiAgICAgICAgICAgICAgcG9zaXRpb249XCJmaXhlZFwiXG4gICAgICAgICAgICAgIHsuLi5hYnNvbHV0ZVBvc2l0aW9uc1tcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhhYnNvbHV0ZVBvc2l0aW9ucykuaW5jbHVkZXMocG9zaXRpb24pXG4gICAgICAgICAgICAgICAgICA/IHBvc2l0aW9uXG4gICAgICAgICAgICAgICAgICA6IHBvc2l0aW9ucy5CT1RUT01fUklHSFRcbiAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgey4uLmNvbnRhaW5lclByb3BzfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8UGFuZSBkaXNwbGF5PVwiZmxleFwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBtYXJnaW5Cb3R0b209ezEyfT5cbiAgICAgICAgICAgICAgICA8SGVhZGluZyBpcz1cImg0XCIgc2l6ZT17NjAwfSBmbGV4PVwiMVwiPlxuICAgICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgICAgICB7aGFzQ2xvc2UgJiYgKFxuICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXszMn1cbiAgICAgICAgICAgICAgICAgICAgaWNvbj1cImNyb3NzXCJcbiAgICAgICAgICAgICAgICAgICAgYXBwZWFyYW5jZT1cIm1pbmltYWxcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsb3NlfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L1BhbmU+XG5cbiAgICAgICAgICAgICAgPFBhbmUgb3ZlcmZsb3dZPVwiYXV0b1wiIGRhdGEtc3RhdGU9e3N0YXRlfT5cbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJDaGlsZHJlbigpfVxuICAgICAgICAgICAgICA8L1BhbmU+XG5cbiAgICAgICAgICAgICAge2hhc0Zvb3RlciAmJiAoXG4gICAgICAgICAgICAgICAgPFBhbmVcbiAgICAgICAgICAgICAgICAgIG1hcmdpblRvcD17MjR9XG4gICAgICAgICAgICAgICAgICBmbGV4U2hyaW5rPXswfVxuICAgICAgICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbj1cInJvdy1yZXZlcnNlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGFwcGVhcmFuY2U9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgaW50ZW50PXtpbnRlbnR9XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ9ezh9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ29uZmlybX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2NvbmZpcm1MYWJlbH1cbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAge2hhc0NhbmNlbCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVDYW5jZWx9PntjYW5jZWxMYWJlbH08L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9QYW5lPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvVHJhbnNpdGlvbj5cbiAgICAgIDwvUG9ydGFsPlxuICAgIClcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsU0FBU0EsR0FBVCxRQUFvQixRQUFwQjtBQUNBLE9BQU9DLEtBQVAsSUFBZ0JDLGFBQWhCLFFBQXFDLE9BQXJDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLFVBQVAsTUFBdUIsbUNBQXZCO0FBQ0EsU0FBU0MsSUFBVCxFQUFlQyxJQUFmLFFBQTJCLGNBQTNCO0FBQ0EsU0FBU0MsTUFBVCxRQUF1QixjQUF2QjtBQUNBLFNBQVNDLFNBQVQsRUFB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