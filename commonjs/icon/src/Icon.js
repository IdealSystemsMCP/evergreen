"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "IconNames", {
  enumerable: true,
  get: function get() {
    return _icons.IconNames;
  }
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uiBox = _interopRequireDefault(require("ui-box"));

var _icons = require("@blueprintjs/icons");

var _theme = require("../../theme");

var _excluded = ["theme", "color", "icon", "size", "title"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * This implementation is a remix of the Icon component in Blueprintjs:
 * https://github.com/palantir/blueprint/blob/813e93f2/packages/core/src/components/icon/icon.tsx#L15
 * Refer to the LICENSE for BlueprintJS here: https://github.com/palantir/blueprint/blob/develop/LICENSE
 */
var Icon = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Icon, _PureComponent);

  var _super = _createSuper(Icon);

  function Icon() {
    var _this;

    (0, _classCallCheck2["default"])(this, Icon);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderSvgPaths", function (pathsSize, iconName) {
      var svgPathsRecord = pathsSize === Icon.SIZE_STANDARD ? _icons.IconSvgPaths16 : _icons.IconSvgPaths20;
      var pathStrings = svgPathsRecord[iconName];

      if (pathStrings == null) {
        return null;
      }

      return pathStrings.map(function (d, i) {
        return /*#__PURE__*/_react["default"].createElement("path", {
          key: i,
          d: d,
          fillRule: "evenodd"
        });
      });
    });
    return _this;
  }

  (0, _createClass2["default"])(Icon, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          color = _this$props.color,
          icon = _this$props.icon,
          size = _this$props.size,
          title = _this$props.title,
          svgProps = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      var _this$props$style = this.props.style,
          style = _this$props$style === void 0 ? {} : _this$props$style;

      if (icon == null) {
        return null;
      }

      if (typeof icon !== 'string') {
        return icon;
      } // Choose which pixel grid is most appropriate for given icon size


      var pixelGridSize = size >= Icon.SIZE_LARGE ? Icon.SIZE_LARGE : Icon.SIZE_STANDARD;
      var paths = this.renderSvgPaths(pixelGridSize, icon);

      if (paths == null) {
        return null;
      }

      var viewBox = "0 0 ".concat(pixelGridSize, " ").concat(pixelGridSize);

      if (color != null) {
        style = _objectSpread(_objectSpread({}, style), {}, {
          fill: theme.getIconColor(color)
        });
      }

      return /*#__PURE__*/_react["default"].createElement(_uiBox["default"], (0, _extends2["default"])({
        is: "svg"
      }, svgProps, {
        style: style,
        "data-icon": icon,
        width: size,
        height: size,
        viewBox: viewBox
      }), title ? /*#__PURE__*/_react["default"].createElement("title", null, title) : null, paths);
    }
  }]);
  return Icon;
}(_react.PureComponent);

Icon.displayName = "Icon";
(0, _defineProperty2["default"])(Icon, "SIZE_STANDARD", 16);
(0, _defineProperty2["default"])(Icon, "SIZE_LARGE", 20);
(0, _defineProperty2["default"])(Icon, "propTypes", {
  /**
   * Color of icon. Equivalent to setting CSS `fill` property.
   */
  color: _propTypes["default"].string,

  /**
   * Name of a Blueprint UI icon, or an icon element, to render.
   * This prop is required because it determines the content of the component, but it can
   * be explicitly set to falsy values to render nothing.
   *
   * - If `null` or `undefined` or `false`, this component will render nothing.
   * - If given an `IconName` (a string literal union of all icon names),
   *   that icon will be rendered as an `<svg>` with `<path>` tags.
   * - If given a `JSX.Element`, that element will be rendered and _all other props on this component are ignored._
   *   This type is supported to simplify usage of this component in other Blueprint components.
   *   As a consumer, you should never use `<Icon icon={<element />}` directly; simply render `<element />` instead.
   */
  icon: _propTypes["default"].node.isRequired,

  /**
   * Size of the icon, in pixels.
   * Blueprint contains 16px and 20px SVG icon images,
   * and chooses the appropriate resolution based on this prop.
   */
  size: _propTypes["default"].number.isRequired,

  /**
   * Description string.
   * Browsers usually render this as a tooltip on hover, whereas screen
   * readers will use it for aural feedback.
   * By default, this is set to the icon's name for accessibility.
   */
  title: _propTypes["default"].string,

  /**
   * CSS style properties.
   */
  style: _propTypes["default"].object,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: _propTypes["default"].object.isRequired
});
(0, _defineProperty2["default"])(Icon, "defaultProps", {
  size: 16,
  color: 'currentColor'
});

var _default = (0, _theme.withTheme)(Icon);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJJY29uIiwicGF0aHNTaXplIiwiaWNvbk5hbWUiLCJzdmdQYXRoc1JlY29yZCIsIlNJWkVfU1RBTkRBUkQiLCJJY29uU3ZnUGF0aHMxNiIsIkljb25TdmdQYXRoczIwIiwicGF0aFN0cmluZ3MiLCJtYXAiLCJkIiwiaSIsInByb3BzIiwidGhlbWUiLCJjb2xvciIsImljb24iLCJzaXplIiwidGl0bGUiLCJzdmdQcm9wcyIsInN0eWxlIiwicGl4ZWxHcmlkU2l6ZSIsIlNJWkVfTEFSR0UiLCJwYXRocyIsInJlbmRlclN2Z1BhdGhzIiwidmlld0JveCIsImZpbGwiLCJnZXRJY29uQ29sb3IiLCJQdXJlQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwic3RyaW5nIiwibm9kZSIsImlzUmVxdWlyZWQiLCJudW1iZXIiLCJvYmplY3QiLCJ3aXRoVGhlbWUiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvaWNvbi9zcmMvSWNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgcmVhY3Qvbm8tYXJyYXktaW5kZXgta2V5OiAwLCBlcWVxZXE6IDAsIG5vLWVxLW51bGw6IDAgKi9cbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgQm94IGZyb20gJ3VpLWJveCdcbmltcG9ydCB7IEljb25OYW1lcywgSWNvblN2Z1BhdGhzMTYsIEljb25TdmdQYXRoczIwIH0gZnJvbSAnQGJsdWVwcmludGpzL2ljb25zJ1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5cbmV4cG9ydCB7IEljb25OYW1lcyB9XG5cbi8qKlxuICogVGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBhIHJlbWl4IG9mIHRoZSBJY29uIGNvbXBvbmVudCBpbiBCbHVlcHJpbnRqczpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9wYWxhbnRpci9ibHVlcHJpbnQvYmxvYi84MTNlOTNmMi9wYWNrYWdlcy9jb3JlL3NyYy9jb21wb25lbnRzL2ljb24vaWNvbi50c3gjTDE1XG4gKiBSZWZlciB0byB0aGUgTElDRU5TRSBmb3IgQmx1ZXByaW50SlMgaGVyZTogaHR0cHM6Ly9naXRodWIuY29tL3BhbGFudGlyL2JsdWVwcmludC9ibG9iL2RldmVsb3AvTElDRU5TRVxuICovXG5cbmNsYXNzIEljb24gZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIFNJWkVfU1RBTkRBUkQgPSAxNlxuXG4gIHN0YXRpYyBTSVpFX0xBUkdFID0gMjBcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENvbG9yIG9mIGljb24uIEVxdWl2YWxlbnQgdG8gc2V0dGluZyBDU1MgYGZpbGxgIHByb3BlcnR5LlxuICAgICAqL1xuICAgIGNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogTmFtZSBvZiBhIEJsdWVwcmludCBVSSBpY29uLCBvciBhbiBpY29uIGVsZW1lbnQsIHRvIHJlbmRlci5cbiAgICAgKiBUaGlzIHByb3AgaXMgcmVxdWlyZWQgYmVjYXVzZSBpdCBkZXRlcm1pbmVzIHRoZSBjb250ZW50IG9mIHRoZSBjb21wb25lbnQsIGJ1dCBpdCBjYW5cbiAgICAgKiBiZSBleHBsaWNpdGx5IHNldCB0byBmYWxzeSB2YWx1ZXMgdG8gcmVuZGVyIG5vdGhpbmcuXG4gICAgICpcbiAgICAgKiAtIElmIGBudWxsYCBvciBgdW5kZWZpbmVkYCBvciBgZmFsc2VgLCB0aGlzIGNvbXBvbmVudCB3aWxsIHJlbmRlciBub3RoaW5nLlxuICAgICAqIC0gSWYgZ2l2ZW4gYW4gYEljb25OYW1lYCAoYSBzdHJpbmcgbGl0ZXJhbCB1bmlvbiBvZiBhbGwgaWNvbiBuYW1lcyksXG4gICAgICogICB0aGF0IGljb24gd2lsbCBiZSByZW5kZXJlZCBhcyBhbiBgPHN2Zz5gIHdpdGggYDxwYXRoPmAgdGFncy5cbiAgICAgKiAtIElmIGdpdmVuIGEgYEpTWC5FbGVtZW50YCwgdGhhdCBlbGVtZW50IHdpbGwgYmUgcmVuZGVyZWQgYW5kIF9hbGwgb3RoZXIgcHJvcHMgb24gdGhpcyBjb21wb25lbnQgYXJlIGlnbm9yZWQuX1xuICAgICAqICAgVGhpcyB0eXBlIGlzIHN1cHBvcnRlZCB0byBzaW1wbGlmeSB1c2FnZSBvZiB0aGlzIGNvbXBvbmVudCBpbiBvdGhlciBCbHVlcHJpbnQgY29tcG9uZW50cy5cbiAgICAgKiAgIEFzIGEgY29uc3VtZXIsIHlvdSBzaG91bGQgbmV2ZXIgdXNlIGA8SWNvbiBpY29uPXs8ZWxlbWVudCAvPn1gIGRpcmVjdGx5OyBzaW1wbHkgcmVuZGVyIGA8ZWxlbWVudCAvPmAgaW5zdGVhZC5cbiAgICAgKi9cbiAgICBpY29uOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogU2l6ZSBvZiB0aGUgaWNvbiwgaW4gcGl4ZWxzLlxuICAgICAqIEJsdWVwcmludCBjb250YWlucyAxNnB4IGFuZCAyMHB4IFNWRyBpY29uIGltYWdlcyxcbiAgICAgKiBhbmQgY2hvb3NlcyB0aGUgYXBwcm9wcmlhdGUgcmVzb2x1dGlvbiBiYXNlZCBvbiB0aGlzIHByb3AuXG4gICAgICovXG4gICAgc2l6ZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogRGVzY3JpcHRpb24gc3RyaW5nLlxuICAgICAqIEJyb3dzZXJzIHVzdWFsbHkgcmVuZGVyIHRoaXMgYXMgYSB0b29sdGlwIG9uIGhvdmVyLCB3aGVyZWFzIHNjcmVlblxuICAgICAqIHJlYWRlcnMgd2lsbCB1c2UgaXQgZm9yIGF1cmFsIGZlZWRiYWNrLlxuICAgICAqIEJ5IGRlZmF1bHQsIHRoaXMgaXMgc2V0IHRvIHRoZSBpY29uJ3MgbmFtZSBmb3IgYWNjZXNzaWJpbGl0eS5cbiAgICAgKi9cbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIENTUyBzdHlsZSBwcm9wZXJ0aWVzLlxuICAgICAqL1xuICAgIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gICAgLyoqXG4gICAgICogVGhlbWUgcHJvdmlkZWQgYnkgVGhlbWVQcm92aWRlci5cbiAgICAgKi9cbiAgICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHNpemU6IDE2LFxuICAgIGNvbG9yOiAnY3VycmVudENvbG9yJ1xuICB9XG5cbiAgcmVuZGVyU3ZnUGF0aHMgPSAocGF0aHNTaXplLCBpY29uTmFtZSkgPT4ge1xuICAgIGNvbnN0IHN2Z1BhdGhzUmVjb3JkID1cbiAgICAgIHBhdGhzU2l6ZSA9PT0gSWNvbi5TSVpFX1NUQU5EQVJEID8gSWNvblN2Z1BhdGhzMTYgOiBJY29uU3ZnUGF0aHMyMFxuICAgIGNvbnN0IHBhdGhTdHJpbmdzID0gc3ZnUGF0aHNSZWNvcmRbaWNvbk5hbWVdXG5cbiAgICBpZiAocGF0aFN0cmluZ3MgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gcGF0aFN0cmluZ3MubWFwKChkLCBpKSA9PiA8cGF0aCBrZXk9e2l9IGQ9e2R9IGZpbGxSdWxlPVwiZXZlbm9kZFwiIC8+KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGhlbWUsIGNvbG9yLCBpY29uLCBzaXplLCB0aXRsZSwgLi4uc3ZnUHJvcHMgfSA9IHRoaXMucHJvcHNcbiAgICBsZXQgeyBzdHlsZSA9IHt9IH0gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAoaWNvbiA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgaWNvbiAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBpY29uXG4gICAgfVxuXG4gICAgLy8gQ2hvb3NlIHdoaWNoIHBpeGVsIGdyaWQgaXMgbW9zdCBhcHByb3ByaWF0ZSBmb3IgZ2l2ZW4gaWNvbiBzaXplXG4gICAgY29uc3QgcGl4ZWxHcmlkU2l6ZSA9XG4gICAgICBzaXplID49IEljb24uU0laRV9MQVJHRSA/IEljb24uU0laRV9MQVJHRSA6IEljb24uU0laRV9TVEFOREFSRFxuICAgIGNvbnN0IHBhdGhzID0gdGhpcy5yZW5kZXJTdmdQYXRocyhwaXhlbEdyaWRTaXplLCBpY29uKVxuICAgIGlmIChwYXRocyA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGNvbnN0IHZpZXdCb3ggPSBgMCAwICR7cGl4ZWxHcmlkU2l6ZX0gJHtwaXhlbEdyaWRTaXplfWBcblxuICAgIGlmIChjb2xvciAhPSBudWxsKSB7XG4gICAgICBzdHlsZSA9IHsgLi4uc3R5bGUsIGZpbGw6IHRoZW1lLmdldEljb25Db2xvcihjb2xvcikgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8Qm94XG4gICAgICAgIGlzPVwic3ZnXCJcbiAgICAgICAgey4uLnN2Z1Byb3BzfVxuICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgIGRhdGEtaWNvbj17aWNvbn1cbiAgICAgICAgd2lkdGg9e3NpemV9XG4gICAgICAgIGhlaWdodD17c2l6ZX1cbiAgICAgICAgdmlld0JveD17dmlld0JveH1cbiAgICAgID5cbiAgICAgICAge3RpdGxlID8gPHRpdGxlPnt0aXRsZX08L3RpdGxlPiA6IG51bGx9XG4gICAgICAgIHtwYXRoc31cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoSWNvbilcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFFTUEsSTs7Ozs7Ozs7Ozs7Ozs7O3VHQXdEYSxVQUFDQyxTQUFELEVBQVlDLFFBQVosRUFBeUI7TUFDeEMsSUFBTUMsY0FBYyxHQUNsQkYsU0FBUyxLQUFLRCxJQUFJLENBQUNJ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