"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typography = require("../../typography");

var _TableCell = _interopRequireDefault(require("./TableCell"));

var _excluded = ["children", "textProps", "isNumber", "placeholder"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ellipsis = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
};

var TextTableCell = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(TextTableCell, _PureComponent);

  var _super = _createSuper(TextTableCell);

  function TextTableCell() {
    (0, _classCallCheck2["default"])(this, TextTableCell);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(TextTableCell, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          textProps = _this$props.textProps,
          isNumber = _this$props.isNumber,
          placeholder = _this$props.placeholder,
          props = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      return /*#__PURE__*/_react["default"].createElement(_TableCell["default"], props, /*#__PURE__*/_react["default"].createElement(_typography.Text, (0, _extends2["default"])({
        size: 300,
        flex: "1"
      }, ellipsis, isNumber ? {
        fontFamily: 'mono'
      } : {}, textProps), children));
    }
  }]);
  return TextTableCell;
}(_react.PureComponent);

exports["default"] = TextTableCell;
TextTableCell.displayName = "TextTableCell";
(0, _defineProperty2["default"])(TextTableCell, "propTypes", _objectSpread(_objectSpread({}, _TableCell["default"].propTypes), {}, {
  /**
   * Adds fontFamily: mono.
   */
  isNumber: _propTypes["default"].bool.isRequired,

  /**
   * Pass additional props to the Text component.
   */
  textProps: _propTypes["default"].object
}));
(0, _defineProperty2["default"])(TextTableCell, "defaultProps", {
  isNumber: false
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJlbGxpcHNpcyIsIm92ZXJmbG93IiwidGV4dE92ZXJmbG93Iiwid2hpdGVTcGFjZSIsIlRleHRUYWJsZUNlbGwiLCJwcm9wcyIsImNoaWxkcmVuIiwidGV4dFByb3BzIiwiaXNOdW1iZXIiLCJwbGFjZWhvbGRlciIsImZvbnRGYW1pbHkiLCJQdXJlQ29tcG9uZW50IiwiVGFibGVDZWxsIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsImlzUmVxdWlyZWQiLCJvYmplY3QiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdGFibGUvc3JjL1RleHRUYWJsZUNlbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tICcuL1RhYmxlQ2VsbCdcblxuY29uc3QgZWxsaXBzaXMgPSB7XG4gIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICB3aGl0ZVNwYWNlOiAnbm93cmFwJ1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0VGFibGVDZWxsIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogQ29tcG9zZXMgdGhlIFRhYmxlQ2VsbCBjb21wb25lbnQgYXMgdGhlIGJhc2UuXG4gICAgICovXG4gICAgLi4uVGFibGVDZWxsLnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIEFkZHMgZm9udEZhbWlseTogbW9uby5cbiAgICAgKi9cbiAgICBpc051bWJlcjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIFBhc3MgYWRkaXRpb25hbCBwcm9wcyB0byB0aGUgVGV4dCBjb21wb25lbnQuXG4gICAgICovXG4gICAgdGV4dFByb3BzOiBQcm9wVHlwZXMub2JqZWN0XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGlzTnVtYmVyOiBmYWxzZVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIHRleHRQcm9wcywgaXNOdW1iZXIsIHBsYWNlaG9sZGVyLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUYWJsZUNlbGwgey4uLnByb3BzfT5cbiAgICAgICAgPFRleHRcbiAgICAgICAgICBzaXplPXszMDB9XG4gICAgICAgICAgZmxleD1cIjFcIlxuICAgICAgICAgIHsuLi5lbGxpcHNpc31cbiAgICAgICAgICB7Li4uKGlzTnVtYmVyID8geyBmb250RmFtaWx5OiAnbW9ubycgfSA6IHt9KX1cbiAgICAgICAgICB7Li4udGV4dFByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L1RhYmxlQ2VsbD5cbiAgICApXG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRLEdBQUc7RUFDZkMsUUFBUSxFQUFFLFFBREs7RUFFZkMsWUFBWSxFQUFFLFVBRkM7RUFHZkMsVUFBVSxFQUFFO0FBSEcsQ0FBakI7O0lBTXFCQyxhOzs7Ozs7Ozs7Ozs7V0FzQm5CLGtCQUFTO01BQ1Asa0JBQWlFLEtBQUtDLEtBQXRFO01BQUEsSUFBUUMsUUFBUixlQUFRQSxRQUFSO01BQUEsSUFBa0JDLFNBQWxCLGVBQWtCQSxTQUFsQjtNQUFBLElBQTZCQyxRQUE3QixlQUE2QkEsUUFBN0I7TUFBQSxJQUF1Q0MsV0FBdkMsZUFBdUNBLFdBQXZDO01BQUEsSUFBdURKLEtBQXZEO01BRUEsb0JBQ0UsZ0NBQUMscUJBQUQsRUFBZUEsS0FBZixlQUNFLGdDQUFDLGdCQUFEO1FBQ0UsSUFBSSxFQUFFLEdBRFI7UUFFRSxJQUFJLEVBQUM7TUFGUCxHQUdNTCxRQUhOLEVBSU9RLFFBQVEsR0FBRztRQUFFRSxVQUFVLEVBQUU7TUFBZCxDQUFILEdBQTRCLEVBSjNDLEVBS01ILFNBTE4sR0FPR0QsUUFQSCxDQURGLENBREY7SUFhRDs7O0VBdEN3Q0ssb0I7OztBQUF0QlAsYTtpQ0FBQUEsYSwrQ0FLZFEscUJBQUEsQ0FBVUMsUztFQUViO0FBQ0o7QUFDQTtFQUNJTCxRQUFRLEVBQUVNLHFCQUFBLENBQVVDLElBQVYsQ0FBZUMsVTs7RUFFekI7QUFDSjtBQUNBO0VBQ0lULFNBQVMsRUFBRU8scUJBQUEsQ0FBVUc7O2lDQWZKYixhLGtCQWtCRztFQUNwQkksUUFBUSxFQUFFO0FBRFUsQyJ9