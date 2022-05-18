"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WidgetContext = exports.HasPopupContext = void 0;
exports["default"] = PortalWithContext;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _inDOM = _interopRequireDefault(require("dom-helpers/util/inDOM"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var _id = 'evergreen-portal-container';

function createPortalContainer() {
  var portalContainer = document.createElement('div');
  portalContainer.id = _id;
  portalContainer.setAttribute(_id, '');
  return portalContainer;
}

var Portal = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Portal, _Component);

  var _super = _createSuper(Portal);

  function Portal(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Portal);
    _this = _super.call(this, props); // This fixes SSR

    if (!_inDOM["default"]) return (0, _possibleConstructorReturn2["default"])(_this);

    if (_this.props.contextId) {
      _this.portalContainer = _this.props.contextWindow.document.getElementById(_id);

      if (_this.portalContainer == null) {
        _this.portalContainer = createPortalContainer();

        _this.props.contextWindow.document.body.append(_this.portalContainer);
      }
    } else if (!_this.props.contextHasPopup) {
      _this.portalContainer = document.getElementById(_id);

      if (_this.portalContainer == null) {
        _this.portalContainer = createPortalContainer();
        document.body.append(_this.portalContainer);
      }
    }

    if (_this.portalContainer != null) {
      _this.el = document.createElement('div');

      _this.portalContainer.append(_this.el);
    }

    return _this;
  }

  (0, _createClass2["default"])(Portal, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.portalContainer != null) {
        this.portalContainer.removeChild(this.el);
      }
    }
  }, {
    key: "render",
    value: function render() {
      // This fixes SSR
      if (!_inDOM["default"] || this.portalContainer == null) return null;
      return /*#__PURE__*/_reactDom["default"].createPortal(this.props.children, this.el);
    }
  }]);
  return Portal;
}(_react.Component);

Portal.displayName = "Portal";
Portal.propTypes = {
  children: _propTypes["default"].node.isRequired,
  contextHasPopup: _propTypes["default"].bool.isRequired,
  contextId: _propTypes["default"].string,
  contextWindow: _propTypes["default"].object
};

var HasPopupContext = /*#__PURE__*/_react["default"].createContext(false);

exports.HasPopupContext = HasPopupContext;

var WidgetContext = /*#__PURE__*/_react["default"].createContext({
  id: null,
  window: null
});

exports.WidgetContext = WidgetContext;
PortalWithContext.propTypes = {
  children: _propTypes["default"].node.isRequired
};

function PortalWithContext(props) {
  return /*#__PURE__*/_react["default"].createElement(HasPopupContext.Consumer, null, function (hasPopup) {
    return /*#__PURE__*/_react["default"].createElement(WidgetContext.Consumer, null, function (context) {
      return /*#__PURE__*/_react["default"].createElement(Portal, {
        contextHasPopup: hasPopup,
        contextId: context.id,
        contextWindow: context.window
      }, props.children);
    });
  });
}

PortalWithContext.displayName = "PortalWithContext";
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaWQiLCJjcmVhdGVQb3J0YWxDb250YWluZXIiLCJwb3J0YWxDb250YWluZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsInNldEF0dHJpYnV0ZSIsIlBvcnRhbCIsInByb3BzIiwiY2FuVXNlRG9tIiwiY29udGV4dElkIiwiY29udGV4dFdpbmRvdyIsImdldEVsZW1lbnRCeUlkIiwiYm9keSIsImFwcGVuZCIsImNvbnRleHRIYXNQb3B1cCIsImVsIiwicmVtb3ZlQ2hpbGQiLCJSZWFjdERPTSIsImNyZWF0ZVBvcnRhbCIsImNoaWxkcmVuIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSIsImlzUmVxdWlyZWQiLCJib29sIiwic3RyaW5nIiwib2JqZWN0IiwiSGFzUG9wdXBDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiV2lkZ2V0Q29udGV4dCIsIndpbmRvdyIsIlBvcnRhbFdpdGhDb250ZXh0IiwiaGFzUG9wdXAiLCJjb250ZXh0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BvcnRhbC9zcmMvUG9ydGFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHVuaWNvcm4vcHJlZmVyLXF1ZXJ5LXNlbGVjdG9yLCBuby1lcS1udWxsLCBlcWVxZXEgKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBjYW5Vc2VEb20gZnJvbSAnZG9tLWhlbHBlcnMvdXRpbC9pbkRPTSdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmNvbnN0IF9pZCA9ICdldmVyZ3JlZW4tcG9ydGFsLWNvbnRhaW5lcidcblxuZnVuY3Rpb24gY3JlYXRlUG9ydGFsQ29udGFpbmVyKCkge1xuICBjb25zdCBwb3J0YWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBwb3J0YWxDb250YWluZXIuaWQgPSBfaWRcbiAgcG9ydGFsQ29udGFpbmVyLnNldEF0dHJpYnV0ZShfaWQsICcnKVxuXG4gIHJldHVybiBwb3J0YWxDb250YWluZXJcbn1cblxuY2xhc3MgUG9ydGFsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIC8vIFRoaXMgZml4ZXMgU1NSXG4gICAgaWYgKCFjYW5Vc2VEb20pIHJldHVyblxuXG4gICAgaWYgKHRoaXMucHJvcHMuY29udGV4dElkKSB7XG4gICAgICB0aGlzLnBvcnRhbENvbnRhaW5lciA9IHRoaXMucHJvcHMuY29udGV4dFdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgX2lkXG4gICAgICApXG5cbiAgICAgIGlmICh0aGlzLnBvcnRhbENvbnRhaW5lciA9PSBudWxsKSB7XG4gICAgICAgIHRoaXMucG9ydGFsQ29udGFpbmVyID0gY3JlYXRlUG9ydGFsQ29udGFpbmVyKClcbiAgICAgICAgdGhpcy5wcm9wcy5jb250ZXh0V2luZG93LmRvY3VtZW50LmJvZHkuYXBwZW5kKHRoaXMucG9ydGFsQ29udGFpbmVyKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIXRoaXMucHJvcHMuY29udGV4dEhhc1BvcHVwKSB7XG4gICAgICB0aGlzLnBvcnRhbENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKF9pZClcblxuICAgICAgaWYgKHRoaXMucG9ydGFsQ29udGFpbmVyID09IG51bGwpIHtcbiAgICAgICAgdGhpcy5wb3J0YWxDb250YWluZXIgPSBjcmVhdGVQb3J0YWxDb250YWluZXIoKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0aGlzLnBvcnRhbENvbnRhaW5lcilcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5wb3J0YWxDb250YWluZXIgIT0gbnVsbCkge1xuICAgICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICB0aGlzLnBvcnRhbENvbnRhaW5lci5hcHBlbmQodGhpcy5lbClcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5wb3J0YWxDb250YWluZXIgIT0gbnVsbCkge1xuICAgICAgdGhpcy5wb3J0YWxDb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5lbClcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgLy8gVGhpcyBmaXhlcyBTU1JcbiAgICBpZiAoIWNhblVzZURvbSB8fCB0aGlzLnBvcnRhbENvbnRhaW5lciA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIHJldHVybiBSZWFjdERPTS5jcmVhdGVQb3J0YWwodGhpcy5wcm9wcy5jaGlsZHJlbiwgdGhpcy5lbClcbiAgfVxufVxuXG5Qb3J0YWwucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgY29udGV4dEhhc1BvcHVwOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBjb250ZXh0SWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNvbnRleHRXaW5kb3c6IFByb3BUeXBlcy5vYmplY3Rcbn1cblxuZXhwb3J0IGNvbnN0IEhhc1BvcHVwQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZmFsc2UpXG5cbmV4cG9ydCBjb25zdCBXaWRnZXRDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7XG4gIGlkOiBudWxsLFxuICB3aW5kb3c6IG51bGxcbn0pXG5cblBvcnRhbFdpdGhDb250ZXh0LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9ydGFsV2l0aENvbnRleHQocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8SGFzUG9wdXBDb250ZXh0LkNvbnN1bWVyPlxuICAgICAge2hhc1BvcHVwID0+IChcbiAgICAgICAgPFdpZGdldENvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgICAge2NvbnRleHQgPT4gKFxuICAgICAgICAgICAgPFBvcnRhbFxuICAgICAgICAgICAgICBjb250ZXh0SGFzUG9wdXA9e2hhc1BvcHVwfVxuICAgICAgICAgICAgICBjb250ZXh0SWQ9e2NvbnRleHQuaWR9XG4gICAgICAgICAgICAgIGNvbnRleHRXaW5kb3c9e2NvbnRleHQud2luZG93fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8L1BvcnRhbD5cbiAgICAgICAgICApfVxuICAgICAgICA8L1dpZGdldENvbnRleHQuQ29uc3VtZXI+XG4gICAgICApfVxuICAgIDwvSGFzUG9wdXBDb250ZXh0LkNvbnN1bWVyPlxuICApXG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUVBLElBQU1BLEdBQUcsR0FBRyw0QkFBWjs7QUFFQSxTQUFTQyxxQkFBVCxHQUFpQztFQUMvQixJQUFNQyxlQUFlLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUF4QjtFQUNBRixlQUFlLENBQUNHLEVBQWhCLEdBQXFCTCxHQUFyQjtFQUNBRSxlQUFlLENBQUNJLFlBQWhCLENBQTZCTixHQUE3QixFQUFrQyxFQUFsQztFQUVBLE9BQU9FLGVBQVA7QUFDRDs7SUFFS0ssTTs7Ozs7RUFDSixnQkFBWUMsS0FBWixFQUFtQjtJQUFBOztJQUFBO0lBQ2pCLDBCQUFNQSxLQUFOLEVBRGlCLENBR2pCOztJQUNBLElBQUksQ0FBQ0MsaUJBQUwsRUFBZ0I7O0lBRWhCLElBQUksTUFBS0QsS0FBTCxDQUFXRSxTQUFmLEVBQTBCO01BQ3hCLE1BQUtSLGVBQUwsR0FBdUIsTUFBS00sS0FBTCxDQUFXRyxhQUFYLENBQXlCUixRQUF6QixDQUFrQ1MsY0FBbEMsQ0FDckJaLEdBRHFCLENBQXZCOztNQUlBLElBQUksTUFBS0UsZUFBTCxJQUF3QixJQUE1QixFQUFrQztRQUNoQyxNQUFLQSxlQUFMLEdBQXVCRCxxQkFBcUIsRUFBNUM7O1FBQ0EsTUFBS08sS0FBTCxDQUFXRyxhQUFYLENBQXlCUixRQUF6QixDQUFrQ1UsSUFBbEMsQ0FBdUNDLE1BQXZDLENBQThDLE1BQUtaLGVBQW5EO01BQ0Q7SUFDRixDQVRELE1BU08sSUFBSSxDQUFDLE1BQUtNLEtBQUwsQ0FBV08sZUFBaEIsRUFBaUM7TUFDdEMsTUFBS2IsZUFBTCxHQUF1QkMsUUFBUSxDQUFDUyxjQUFULENBQXdCWixHQUF4QixDQUF2Qjs7TUFFQSxJQUFJLE1BQUtFLGVBQUwsSUFBd0IsSUFBNUIsRUFBa0M7UUFDaEMsTUFBS0EsZUFBTCxHQUF1QkQscUJBQXFCLEVBQTVDO1FBQ0FFLFFBQVEsQ0FBQ1UsSUFBVCxDQUFjQyxNQUFkLENBQXFCLE1BQUtaLGVBQTFCO01BQ0Q7SUFDRjs7SUFFRCxJQUFJLE1BQUtBLGVBQUwsSUFBd0IsSUFBNUIsRUFBa0M7TUFDaEMsTUFBS2MsRUFBTCxHQUFVYixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBVjs7TUFDQSxNQUFLRixlQUFMLENBQXFCWSxNQUFyQixDQUE0QixNQUFLRSxFQUFqQztJQUNEOztJQTNCZ0I7RUE0QmxCOzs7O1dBRUQsZ0NBQXVCO01BQ3JCLElBQUksS0FBS2QsZUFBTCxJQUF3QixJQUE1QixFQUFrQztRQUNoQyxLQUFLQSxlQUFMLENBQXFCZSxXQUFyQixDQUFpQyxLQUFLRCxFQUF0QztNQUNEO0lBQ0Y7OztXQUVELGtCQUFTO01BQ1A7TUFDQSxJQUFJLENBQUNQLGlCQUFELElBQWMsS0FBS1AsZUFBTCxJQUF3QixJQUExQyxFQUFnRCxPQUFPLElBQVA7TUFDaEQsb0JBQU9nQixvQkFBQSxDQUFTQyxZQUFULENBQXNCLEtBQUtYLEtBQUwsQ0FBV1ksUUFBakMsRUFBMkMsS0FBS0osRUFBaEQsQ0FBUDtJQUNEOzs7RUF6Q2tCSyxnQjs7QUFBZmQsTTtBQTRDTkEsTUFBTSxDQUFDZSxTQUFQLEdBQW1CO0VBQ2pCRixRQUFRLEVBQUVHLHFCQUFBLENBQVVDLElBQVYsQ0FBZUMsVUFEUjtFQUVqQlYsZUFBZSxFQUFFUSxxQkFBQSxDQUFVRyxJQUFWLENBQWVELFVBRmY7RUFHakJmLFNBQVMsRUFBRWEscUJBQUEsQ0FBVUksTUFISjtFQUlqQmhCLGFBQWEsRUFBRVkscUJBQUEsQ0FBVUs7QUFKUixDQUFuQjs7QUFPTyxJQUFNQyxlQUFlLGdCQUFHQyxpQkFBQSxDQUFNQyxhQUFOLENBQW9CLEtBQXBCLENBQXhCOzs7O0FBRUEsSUFBTUMsYUFBYSxnQkFBR0YsaUJBQUEsQ0FBTUMsYUFBTixDQUFvQjtFQUMvQzFCLEVBQUUsRUFBRSxJQUQyQztFQUUvQzRCLE1BQU0sRUFBRTtBQUZ1QyxDQUFwQixDQUF0Qjs7O0FBS1BDLGlCQUFpQixDQUFDWixTQUFsQixHQUE4QjtFQUM1QkYsUUFBUSxFQUFFRyxxQkFBQSxDQUFVQyxJQUFWLENBQWVDO0FBREcsQ0FBOUI7O0FBSWUsU0FBU1MsaUJBQVQsQ0FBMkIxQixLQUEzQixFQUFrQztFQUMvQyxvQkFDRSxnQ0FBQyxlQUFELENBQWlCLFFBQWpCLFFBQ0csVUFBQTJCLFFBQVE7SUFBQSxvQkFDUCxnQ0FBQyxhQUFELENBQWUsUUFBZixRQUNHLFVBQUFDLE9BQU87TUFBQSxvQkFDTixnQ0FBQyxNQUFEO1FBQ0UsZUFBZSxFQUFFRCxRQURuQjtRQUVFLFNBQVMsRUFBRUMsT0FBTyxDQUFDL0IsRUFGckI7UUFHRSxhQUFhLEVBQUUrQixPQUFPLENBQUNIO01BSHpCLEdBS0d6QixLQUFLLENBQUNZLFFBTFQsQ0FETTtJQUFBLENBRFYsQ0FETztFQUFBLENBRFgsQ0FERjtBQWlCRDs7QUFsQnVCYyxpQiJ9