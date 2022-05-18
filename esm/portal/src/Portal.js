import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/* eslint-disable unicorn/prefer-query-selector, no-eq-null, eqeqeq */
import React, { Component } from 'react';
import canUseDom from 'dom-helpers/util/inDOM';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
var _id = 'evergreen-portal-container';

function createPortalContainer() {
  var portalContainer = document.createElement('div');
  portalContainer.id = _id;
  portalContainer.setAttribute(_id, '');
  return portalContainer;
}

var Portal = /*#__PURE__*/function (_Component) {
  _inherits(Portal, _Component);

  var _super = _createSuper(Portal);

  function Portal(props) {
    var _this;

    _classCallCheck(this, Portal);

    _this = _super.call(this, props); // This fixes SSR

    if (!canUseDom) return _possibleConstructorReturn(_this);

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

  _createClass(Portal, [{
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
      if (!canUseDom || this.portalContainer == null) return null;
      return /*#__PURE__*/ReactDOM.createPortal(this.props.children, this.el);
    }
  }]);

  return Portal;
}(Component);

Portal.displayName = "Portal";
Portal.propTypes = {
  children: PropTypes.node.isRequired,
  contextHasPopup: PropTypes.bool.isRequired,
  contextId: PropTypes.string,
  contextWindow: PropTypes.object
};
export var HasPopupContext = /*#__PURE__*/React.createContext(false);
export var WidgetContext = /*#__PURE__*/React.createContext({
  id: null,
  window: null
});
PortalWithContext.propTypes = {
  children: PropTypes.node.isRequired
};
export default function PortalWithContext(props) {
  return /*#__PURE__*/React.createElement(HasPopupContext.Consumer, null, function (hasPopup) {
    return /*#__PURE__*/React.createElement(WidgetContext.Consumer, null, function (context) {
      return /*#__PURE__*/React.createElement(Portal, {
        contextHasPopup: hasPopup,
        contextId: context.id,
        contextWindow: context.window
      }, props.children);
    });
  });
}
PortalWithContext.displayName = "PortalWithContext";
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImNhblVzZURvbSIsIlJlYWN0RE9NIiwiUHJvcFR5cGVzIiwiX2lkIiwiY3JlYXRlUG9ydGFsQ29udGFpbmVyIiwicG9ydGFsQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJzZXRBdHRyaWJ1dGUiLCJQb3J0YWwiLCJwcm9wcyIsImNvbnRleHRJZCIsImNvbnRleHRXaW5kb3ciLCJnZXRFbGVtZW50QnlJZCIsImJvZHkiLCJhcHBlbmQiLCJjb250ZXh0SGFzUG9wdXAiLCJlbCIsInJlbW92ZUNoaWxkIiwiY3JlYXRlUG9ydGFsIiwiY2hpbGRyZW4iLCJwcm9wVHlwZXMiLCJub2RlIiwiaXNSZXF1aXJlZCIsImJvb2wiLCJzdHJpbmciLCJvYmplY3QiLCJIYXNQb3B1cENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiV2lkZ2V0Q29udGV4dCIsIndpbmRvdyIsIlBvcnRhbFdpdGhDb250ZXh0IiwiaGFzUG9wdXAiLCJjb250ZXh0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BvcnRhbC9zcmMvUG9ydGFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHVuaWNvcm4vcHJlZmVyLXF1ZXJ5LXNlbGVjdG9yLCBuby1lcS1udWxsLCBlcWVxZXEgKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBjYW5Vc2VEb20gZnJvbSAnZG9tLWhlbHBlcnMvdXRpbC9pbkRPTSdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmNvbnN0IF9pZCA9ICdldmVyZ3JlZW4tcG9ydGFsLWNvbnRhaW5lcidcblxuZnVuY3Rpb24gY3JlYXRlUG9ydGFsQ29udGFpbmVyKCkge1xuICBjb25zdCBwb3J0YWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBwb3J0YWxDb250YWluZXIuaWQgPSBfaWRcbiAgcG9ydGFsQ29udGFpbmVyLnNldEF0dHJpYnV0ZShfaWQsICcnKVxuXG4gIHJldHVybiBwb3J0YWxDb250YWluZXJcbn1cblxuY2xhc3MgUG9ydGFsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIC8vIFRoaXMgZml4ZXMgU1NSXG4gICAgaWYgKCFjYW5Vc2VEb20pIHJldHVyblxuXG4gICAgaWYgKHRoaXMucHJvcHMuY29udGV4dElkKSB7XG4gICAgICB0aGlzLnBvcnRhbENvbnRhaW5lciA9IHRoaXMucHJvcHMuY29udGV4dFdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgX2lkXG4gICAgICApXG5cbiAgICAgIGlmICh0aGlzLnBvcnRhbENvbnRhaW5lciA9PSBudWxsKSB7XG4gICAgICAgIHRoaXMucG9ydGFsQ29udGFpbmVyID0gY3JlYXRlUG9ydGFsQ29udGFpbmVyKClcbiAgICAgICAgdGhpcy5wcm9wcy5jb250ZXh0V2luZG93LmRvY3VtZW50LmJvZHkuYXBwZW5kKHRoaXMucG9ydGFsQ29udGFpbmVyKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIXRoaXMucHJvcHMuY29udGV4dEhhc1BvcHVwKSB7XG4gICAgICB0aGlzLnBvcnRhbENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKF9pZClcblxuICAgICAgaWYgKHRoaXMucG9ydGFsQ29udGFpbmVyID09IG51bGwpIHtcbiAgICAgICAgdGhpcy5wb3J0YWxDb250YWluZXIgPSBjcmVhdGVQb3J0YWxDb250YWluZXIoKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0aGlzLnBvcnRhbENvbnRhaW5lcilcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5wb3J0YWxDb250YWluZXIgIT0gbnVsbCkge1xuICAgICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICB0aGlzLnBvcnRhbENvbnRhaW5lci5hcHBlbmQodGhpcy5lbClcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5wb3J0YWxDb250YWluZXIgIT0gbnVsbCkge1xuICAgICAgdGhpcy5wb3J0YWxDb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5lbClcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgLy8gVGhpcyBmaXhlcyBTU1JcbiAgICBpZiAoIWNhblVzZURvbSB8fCB0aGlzLnBvcnRhbENvbnRhaW5lciA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIHJldHVybiBSZWFjdERPTS5jcmVhdGVQb3J0YWwodGhpcy5wcm9wcy5jaGlsZHJlbiwgdGhpcy5lbClcbiAgfVxufVxuXG5Qb3J0YWwucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgY29udGV4dEhhc1BvcHVwOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBjb250ZXh0SWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNvbnRleHRXaW5kb3c6IFByb3BUeXBlcy5vYmplY3Rcbn1cblxuZXhwb3J0IGNvbnN0IEhhc1BvcHVwQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoZmFsc2UpXG5cbmV4cG9ydCBjb25zdCBXaWRnZXRDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7XG4gIGlkOiBudWxsLFxuICB3aW5kb3c6IG51bGxcbn0pXG5cblBvcnRhbFdpdGhDb250ZXh0LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9ydGFsV2l0aENvbnRleHQocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8SGFzUG9wdXBDb250ZXh0LkNvbnN1bWVyPlxuICAgICAge2hhc1BvcHVwID0+IChcbiAgICAgICAgPFdpZGdldENvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgICAge2NvbnRleHQgPT4gKFxuICAgICAgICAgICAgPFBvcnRhbFxuICAgICAgICAgICAgICBjb250ZXh0SGFzUG9wdXA9e2hhc1BvcHVwfVxuICAgICAgICAgICAgICBjb250ZXh0SWQ9e2NvbnRleHQuaWR9XG4gICAgICAgICAgICAgIGNvbnRleHRXaW5kb3c9e2NvbnRleHQud2luZG93fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8L1BvcnRhbD5cbiAgICAgICAgICApfVxuICAgICAgICA8L1dpZGdldENvbnRleHQuQ29uc3VtZXI+XG4gICAgICApfVxuICAgIDwvSGFzUG9wdXBDb250ZXh0LkNvbnN1bWVyPlxuICApXG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBLE9BQU9BLEtBQVAsSUFBZ0JDLFNBQWhCLFFBQWlDLE9BQWpDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQix3QkFBdEI7QUFDQSxPQUFPQyxRQUFQLE1BQXFCLFdBQXJCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUVBLElBQU1DLEdBQUcsR0FBRyw0QkFBWjs7QUFFQSxTQUFTQyxxQkFBVCxHQUFpQztFQUMvQixJQUFNQyxlQUFlLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUF4QjtFQUNBRixlQUFlLENBQUNHLEVBQWhCLEdBQXFCTCxHQUFyQjtFQUNBRSxlQUFlLENBQUNJLFlBQWhCLENBQTZCTixHQUE3QixFQUFrQyxFQUFsQztFQUVBLE9BQU9FLGVBQVA7QUFDRDs7SUFFS0ssTTs7Ozs7RUFDSixnQkFBWUMsS0FBWixFQUFtQjtJQUFBOztJQUFBOztJQUNqQiwwQkFBTUEsS0FBTixFQURpQixDQUdqQjs7SUFDQSxJQUFJLENBQUNYLFNBQUwsRUFBZ0I7O0lBRWhCLElBQUksTUFBS1csS0FBTCxDQUFXQyxT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