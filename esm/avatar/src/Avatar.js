import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _excluded = ["theme", "src", "size", "name", "isSolid", "hashValue", "getInitials", "color", "forceShowInitials", "sizeLimitOneCharacter"];

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import { css } from 'glamor';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from 'ui-box';
import { Image } from '../../image';
import { Text } from '../../typography';
import { withTheme } from '../../theme';
import globalGetInitials from './utils/getInitials';
import globalHash from './utils/hash';
var isObjectFitSupported = typeof document !== 'undefined' && 'objectFit' in document.documentElement.style;
var initialsStyleClass = css({
  top: 0,
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  lineHeight: 1
}).toString();

var Avatar = /*#__PURE__*/function (_PureComponent) {
  _inherits(Avatar, _PureComponent);

  var _super = _createSuper(Avatar);

  function Avatar(props, context) {
    var _this;

    _classCallCheck(this, Avatar);

    _this = _super.call(this, props, context);

    _defineProperty(_assertThisInitialized(_this), "handleError", function () {
      _this.setState({
        imageHasFailedLoading: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getColorProps", function () {
      var _this$props = _this.props,
          isSolid = _this$props.isSolid,
          theme = _this$props.theme,
          color = _this$props.color,
          propsHashValue = _this$props.hashValue,
          name = _this$props.name;

      if (color === 'automatic') {
        var hashValue = globalHash(propsHashValue || name);
        return theme.getAvatarProps({
          isSolid: isSolid,
          color: color,
          hashValue: hashValue
        });
      }

      return theme.getAvatarProps({
        isSolid: isSolid,
        color: color
      });
    });

    _this.state = {
      imageHasFailedLoading: false
    };
    return _this;
  }

  _createClass(Avatar, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          theme = _this$props2.theme,
          src = _this$props2.src,
          size = _this$props2.size,
          name = _this$props2.name,
          isSolid = _this$props2.isSolid,
          propsHashValue = _this$props2.hashValue,
          getInitials = _this$props2.getInitials,
          propsColor = _this$props2.color,
          forceShowInitials = _this$props2.forceShowInitials,
          sizeLimitOneCharacter = _this$props2.sizeLimitOneCharacter,
          props = _objectWithoutProperties(_this$props2, _excluded);

      var imageHasFailedLoading = this.state.imageHasFailedLoading;
      var imageUnavailable = !src || imageHasFailedLoading;
      var initialsFontSize = "".concat(theme.getAvatarInitialsFontSize(size, sizeLimitOneCharacter), "px");
      var initials = getInitials(name);

      if (size <= sizeLimitOneCharacter) {
        initials = initials.slice(0, 1);
      }

      var colorProps = this.getColorProps();
      return /*#__PURE__*/React.createElement(Box, _extends({
        width: size,
        height: size,
        overflow: "hidden",
        borderRadius: 9999,
        position: "relative",
        display: "inline-flex",
        flexShrink: 0,
        justifyContent: "center",
        backgroundColor: colorProps.backgroundColor,
        title: name
      }, props), (imageUnavailable || forceShowInitials) && /*#__PURE__*/React.createElement(Text, {
        className: initialsStyleClass,
        fontSize: initialsFontSize,
        lineHeight: initialsFontSize,
        width: size,
        height: size,
        color: colorProps.color
      }, initials), !imageUnavailable && /*#__PURE__*/React.createElement(Image, {
        style: {
          objectFit: 'cover'
        } // Unsupported by ui-box directly
        ,
        width: isObjectFitSupported ? '100%' : 'auto' // Fallback to old behaviour on IE
        ,
        height: "100%",
        src: src,
        onError: this.handleError
      }));
    }
  }]);

  return Avatar;
}(PureComponent);

Avatar.displayName = "Avatar";

_defineProperty(Avatar, "propTypes", {
  /**
   * The src attribute of the image.
   * When it's not available, render initials instead.
   */
  src: PropTypes.string,

  /**
   * The size of the avatar.
   */
  size: PropTypes.number,

  /**
   * The name used for the initials and title attribute.
   */
  name: PropTypes.string,

  /**
   * The value used for the hash function.
   * The name is used as the hashValue by default.
   * When dealing with anonymous users you should use the id instead.
   */
  hashValue: PropTypes.string,

  /**
   * When true, render a solid avatar.
   */
  isSolid: PropTypes.bool,

  /**
   * The color used for the avatar.
   * When the value is `automatic`, use the hash function to determine the color.
   */
  color: PropTypes.string.isRequired,

  /**
   * Function to get the initials based on the name.
   */
  getInitials: PropTypes.func,

  /**
   * When true, force show the initials.
   * This is useful in some cases when using Gravatar and transparent pngs.
   */
  forceShowInitials: PropTypes.bool,

  /**
   * When the size is smaller than this number, use a single initial for the avatar.
   */
  sizeLimitOneCharacter: PropTypes.number,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired
});

_defineProperty(Avatar, "defaultProps", {
  color: 'automatic',
  size: 24,
  isSolid: false,
  getInitials: globalGetInitials,
  forceShowInitials: false,
  sizeLimitOneCharacter: 20
});

export default withTheme(Avatar);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjc3MiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJCb3giLCJJbWFnZSIsIlRleHQiLCJ3aXRoVGhlbWUiLCJnbG9iYWxHZXRJbml0aWFscyIsImdsb2JhbEhhc2giLCJpc09iamVjdEZpdFN1cHBvcnRlZCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic3R5bGUiLCJpbml0aWFsc1N0eWxlQ2xhc3MiLCJ0b3AiLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJsaW5lSGVpZ2h0IiwidG9TdHJpbmciLCJBdmF0YXIiLCJwcm9wcyIsImNvbnRleHQiLCJzZXRTdGF0ZSIsImltYWdlSGFzRmFpbGVkTG9hZGluZyIsImlzU29saWQiLCJ0aGVtZSIsImNvbG9yIiwicHJvcHNIYXNoVmFsdWUiLCJoYXNoVmFsdWUiLCJuYW1lIiwiZ2V0QXZhdGFyUHJvcHMiLCJzdGF0ZSIsInNyYyIsInNpemUiLCJnZXRJbml0aWFscyIsInByb3BzQ29sb3IiLCJmb3JjZVNob3dJbml0aWFscyIsInNpemVMaW1pdE9uZUNoYXJhY3RlciIsImltYWdlVW5hdmFpbGFibGUiLCJpbml0aWFsc0ZvbnRTaXplIiwiZ2V0QXZhdGFySW5pdGlhbHNGb250U2l6ZSIsImluaXRpYWxzIiwic2xpY2UiLCJjb2xvclByb3BzIiwiZ2V0Q29sb3JQcm9wcyIsImJhY2tncm91bmRDb2xvciIsIm9iamVjdEZpdCIsImhhbmRsZUVycm9yIiwic3RyaW5nIiwibnVtYmVyIiwiYm9vbCIsImlzUmVxdWlyZWQiLCJmdW5jIiwib2JqZWN0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2F2YXRhci9zcmMvQXZhdGFyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ2dsYW1vcidcbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgQm94IGZyb20gJ3VpLWJveCdcbmltcG9ydCB7IEltYWdlIH0gZnJvbSAnLi4vLi4vaW1hZ2UnXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vLi4vdHlwb2dyYXBoeSdcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuaW1wb3J0IGdsb2JhbEdldEluaXRpYWxzIGZyb20gJy4vdXRpbHMvZ2V0SW5pdGlhbHMnXG5pbXBvcnQgZ2xvYmFsSGFzaCBmcm9tICcuL3V0aWxzL2hhc2gnXG5cbmNvbnN0IGlzT2JqZWN0Rml0U3VwcG9ydGVkID1cbiAgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnb2JqZWN0Rml0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGVcblxuY29uc3QgaW5pdGlhbHNTdHlsZUNsYXNzID0gY3NzKHtcbiAgdG9wOiAwLFxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICBsaW5lSGVpZ2h0OiAxXG59KS50b1N0cmluZygpXG5cbmNsYXNzIEF2YXRhciBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIFRoZSBzcmMgYXR0cmlidXRlIG9mIHRoZSBpbWFnZS5cbiAgICAgKiBXaGVuIGl0J3Mgbm90IGF2YWlsYWJsZSwgcmVuZGVyIGluaXRpYWxzIGluc3RlYWQuXG4gICAgICovXG4gICAgc3JjOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHNpemUgb2YgdGhlIGF2YXRhci5cbiAgICAgKi9cbiAgICBzaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogVGhlIG5hbWUgdXNlZCBmb3IgdGhlIGluaXRpYWxzIGFuZCB0aXRsZSBhdHRyaWJ1dGUuXG4gICAgICovXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFRoZSB2YWx1ZSB1c2VkIGZvciB0aGUgaGFzaCBmdW5jdGlvbi5cbiAgICAgKiBUaGUgbmFtZSBpcyB1c2VkIGFzIHRoZSBoYXNoVmFsdWUgYnkgZGVmYXVsdC5cbiAgICAgKiBXaGVuIGRlYWxpbmcgd2l0aCBhbm9ueW1vdXMgdXNlcnMgeW91IHNob3VsZCB1c2UgdGhlIGlkIGluc3RlYWQuXG4gICAgICovXG4gICAgaGFzaFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCByZW5kZXIgYSBzb2xpZCBhdmF0YXIuXG4gICAgICovXG4gICAgaXNTb2xpZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29sb3IgdXNlZCBmb3IgdGhlIGF2YXRhci5cbiAgICAgKiBXaGVuIHRoZSB2YWx1ZSBpcyBgYXV0b21hdGljYCwgdXNlIHRoZSBoYXNoIGZ1bmN0aW9uIHRvIGRldGVybWluZSB0aGUgY29sb3IuXG4gICAgICovXG4gICAgY29sb3I6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRvIGdldCB0aGUgaW5pdGlhbHMgYmFzZWQgb24gdGhlIG5hbWUuXG4gICAgICovXG4gICAgZ2V0SW5pdGlhbHM6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCBmb3JjZSBzaG93IHRoZSBpbml0aWFscy5cbiAgICAgKiBUaGlzIGlzIHVzZWZ1bCBpbiBzb21lIGNhc2VzIHdoZW4gdXNpbmcgR3JhdmF0YXIgYW5kIHRyYW5zcGFyZW50IHBuZ3MuXG4gICAgICovXG4gICAgZm9yY2VTaG93SW5pdGlhbHM6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0aGUgc2l6ZSBpcyBzbWFsbGVyIHRoYW4gdGhpcyBudW1iZXIsIHVzZSBhIHNpbmdsZSBpbml0aWFsIGZvciB0aGUgYXZhdGFyLlxuICAgICAqL1xuICAgIHNpemVMaW1pdE9uZUNoYXJhY3RlcjogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIFRoZW1lIHByb3ZpZGVkIGJ5IFRoZW1lUHJvdmlkZXIuXG4gICAgICovXG4gICAgdGhlbWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjb2xvcjogJ2F1dG9tYXRpYycsXG4gICAgc2l6ZTogMjQsXG4gICAgaXNTb2xpZDogZmFsc2UsXG4gICAgZ2V0SW5pdGlhbHM6IGdsb2JhbEdldEluaXRpYWxzLFxuICAgIGZvcmNlU2hvd0luaXRpYWxzOiBmYWxzZSxcbiAgICBzaXplTGltaXRPbmVDaGFyYWN0ZXI6IDIwXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCkge1xuICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KVxuICAgIHRoaXMuc3RhdGUgPSB7IGltYWdlSGFzRmFpbGVkTG9hZGluZzogZmFsc2UgfVxuICB9XG5cbiAgaGFuZGxlRXJyb3IgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGltYWdlSGFzRmFpbGVkTG9hZGluZzogdHJ1ZSB9KVxuICB9XG5cbiAgZ2V0Q29sb3JQcm9wcyA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBpc1NvbGlkLFxuICAgICAgdGhlbWUsXG4gICAgICBjb2xvcixcbiAgICAgIGhhc2hWYWx1ZTogcHJvcHNIYXNoVmFsdWUsXG4gICAgICBuYW1lXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGlmIChjb2xvciA9PT0gJ2F1dG9tYXRpYycpIHtcbiAgICAgIGNvbnN0IGhhc2hWYWx1ZSA9IGdsb2JhbEhhc2gocHJvcHNIYXNoVmFsdWUgfHwgbmFtZSlcbiAgICAgIHJldHVybiB0aGVtZS5nZXRBdmF0YXJQcm9wcyh7IGlzU29saWQsIGNvbG9yLCBoYXNoVmFsdWUgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gdGhlbWUuZ2V0QXZhdGFyUHJvcHMoeyBpc1NvbGlkLCBjb2xvciB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRoZW1lLFxuXG4gICAgICBzcmMsXG4gICAgICBzaXplLFxuICAgICAgbmFtZSxcbiAgICAgIGlzU29saWQsXG4gICAgICBoYXNoVmFsdWU6IHByb3BzSGFzaFZhbHVlLFxuICAgICAgZ2V0SW5pdGlhbHMsXG4gICAgICBjb2xvcjogcHJvcHNDb2xvcixcbiAgICAgIGZvcmNlU2hvd0luaXRpYWxzLFxuICAgICAgc2l6ZUxpbWl0T25lQ2hhcmFjdGVyLFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgeyBpbWFnZUhhc0ZhaWxlZExvYWRpbmcgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCBpbWFnZVVuYXZhaWxhYmxlID0gIXNyYyB8fCBpbWFnZUhhc0ZhaWxlZExvYWRpbmdcbiAgICBjb25zdCBpbml0aWFsc0ZvbnRTaXplID0gYCR7dGhlbWUuZ2V0QXZhdGFySW5pdGlhbHNGb250U2l6ZShcbiAgICAgIHNpemUsXG4gICAgICBzaXplTGltaXRPbmVDaGFyYWN0ZXJcbiAgICApfXB4YFxuXG4gICAgbGV0IGluaXRpYWxzID0gZ2V0SW5pdGlhbHMobmFtZSlcbiAgICBpZiAoc2l6ZSA8PSBzaXplTGltaXRPbmVDaGFyYWN0ZXIpIHtcbiAgICAgIGluaXRpYWxzID0gaW5pdGlhbHMuc2xpY2UoMCwgMSlcbiAgICB9XG5cbiAgICBjb25zdCBjb2xvclByb3BzID0gdGhpcy5nZXRDb2xvclByb3BzKClcblxuICAgIHJldHVybiAoXG4gICAgICA8Qm94XG4gICAgICAgIHdpZHRoPXtzaXplfVxuICAgICAgICBoZWlnaHQ9e3NpemV9XG4gICAgICAgIG92ZXJmbG93PVwiaGlkZGVuXCJcbiAgICAgICAgYm9yZGVyUmFkaXVzPXs5OTk5fVxuICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgICAgZGlzcGxheT1cImlubGluZS1mbGV4XCJcbiAgICAgICAgZmxleFNocmluaz17MH1cbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9e2NvbG9yUHJvcHMuYmFja2dyb3VuZENvbG9yfVxuICAgICAgICB0aXRsZT17bmFtZX1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgPlxuICAgICAgICB7KGltYWdlVW5hdmFpbGFibGUgfHwgZm9yY2VTaG93SW5pdGlhbHMpICYmIChcbiAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtpbml0aWFsc1N0eWxlQ2xhc3N9XG4gICAgICAgICAgICBmb250U2l6ZT17aW5pdGlhbHNGb250U2l6ZX1cbiAgICAgICAgICAgIGxpbmVIZWlnaHQ9e2luaXRpYWxzRm9udFNpemV9XG4gICAgICAgICAgICB3aWR0aD17c2l6ZX1cbiAgICAgICAgICAgIGhlaWdodD17c2l6ZX1cbiAgICAgICAgICAgIGNvbG9yPXtjb2xvclByb3BzLmNvbG9yfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtpbml0aWFsc31cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICl9XG4gICAgICAgIHshaW1hZ2VVbmF2YWlsYWJsZSAmJiAoXG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzdHlsZT17eyBvYmplY3RGaXQ6ICdjb3ZlcicgfX0gLy8gVW5zdXBwb3J0ZWQgYnkgdWktYm94IGRpcmVjdGx5XG4gICAgICAgICAgICB3aWR0aD17aXNPYmplY3RGaXRTdXBwb3J0ZWQgPyAnMTAwJScgOiAnYXV0byd9IC8vIEZhbGxiYWNrIHRvIG9sZCBiZWhhdmlvdXIgb24gSUVcbiAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICAgICAgc3JjPXtzcmN9XG4gICAgICAgICAgICBvbkVycm9yPXt0aGlzLmhhbmRsZUVycm9yfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L0JveD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKEF2YXRhcilcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBU0EsR0FBVCxRQUFvQixRQUFwQjtBQUNBLE9BQU9DLEtBQVAsSUFBZ0JDLGFBQWhCLFFBQXFDLE9BQXJDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLEdBQVAsTUFBZ0IsUUFBaEI7QUFDQSxTQUFTQyxLQUFULFFBQXNCLGFBQXRCO0FBQ0EsU0FBU0MsSUFBVCxRQUFxQixrQkFBckI7QUFDQSxTQUFTQyxTQUFULFFBQTBCLGFBQTFCO0FBQ0EsT0FBT0MsaUJBQVAsTUFBOEIscUJBQTlCO0FBQ0EsT0FBT0MsVUFBUCxNQUF1QixjQUF2QjtBQUVBLElBQU1DLG9CQUFvQixHQUN4QixPQUFPQyxRQUFQLEtBQW9CLFdBQXBCLElBQ0EsZUFBZUEsUUFBUSxDQUFDQyxlQUFULENBQXlCQyxLQUYxQztBQUlBLElBQU1DLGtCQUFrQixHQUFHZCxHQUFHLENBQUM7RUFDN0JlLEdBQUcsRUFBRSxDQUR3QjtFQUU3QkMsUUFBUSxFQUFFLFVBRm1CO0VBRzdCQyxPQUFPLEVBQUUsTUFIb0I7RUFJN0JDLFVBQVUsRUFBRSxRQUppQjtFQUs3QkMsY0FBYyxFQUFFLFFBTGE7RUFNN0JDLFVBQVUsRUFBRTtBQU5pQixDQUFELENBQUgsQ0FPeEJDLFFBUHdCLEVBQTNCOztJQVNNQyxNOzs7OztFQW1FSixnQkFBWUMsS0FBWixFQUFtQkMsT0FBbkIsRUFBNEI7SUFBQTs7SUFBQTs7SUFDMUIsMEJBQU1ELEtBQU4sRUFBYUMsT0FBYjs7SUFEMEIsOERBS2QsWUFBTTtNQUNsQixNQUFLQyxRQUFMLENBQWM7UUFBRUMscUJBQXFCLEVBQUU7TUFBekIsQ0FBZDtJQUNELENBUDJCOztJQUFBLGdFQVNaLFlBQU07TUFDcEIsa0JBTUksTUFBS0gsS0FOVDtNQUFBLElBQ0VJLE9BREYsZUFD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