import _createClass from "@babel/runtime/helpers/esm/createClass";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React from 'react';
import ReactDOM from 'react-dom';
import ToastManager from './ToastManager';
var isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';
/**
 * The Toaster manages the interactionsb between
 * the ToasterManger and the toast API.
 */

var Toaster = /*#__PURE__*/_createClass(function Toaster() {
  var _this = this;

  _classCallCheck(this, Toaster);

  _defineProperty(this, "_bindNotify", function (handler) {
    _this.notifyHandler = handler;
  });

  _defineProperty(this, "_bindRemove", function (handler) {
    _this.removeHandler = handler;
  });

  _defineProperty(this, "_bindGetToasts", function (handler) {
    _this.getToastsHandler = handler;
  });

  _defineProperty(this, "_bindCloseAll", function (handler) {
    _this.closeAllHandler = handler;
  });

  _defineProperty(this, "getToasts", function () {
    return _this.getToastsHandler();
  });

  _defineProperty(this, "closeAll", function () {
    return _this.closeAllHandler();
  });

  _defineProperty(this, "notify", function (title) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _this.notifyHandler(title, _objectSpread(_objectSpread({}, settings), {}, {
      intent: 'none'
    }));
  });

  _defineProperty(this, "success", function (title) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _this.notifyHandler(title, _objectSpread(_objectSpread({}, settings), {}, {
      intent: 'success'
    }));
  });

  _defineProperty(this, "warning", function (title) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _this.notifyHandler(title, _objectSpread(_objectSpread({}, settings), {}, {
      intent: 'warning'
    }));
  });

  _defineProperty(this, "danger", function (title) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _this.notifyHandler(title, _objectSpread(_objectSpread({}, settings), {}, {
      intent: 'danger'
    }));
  });

  _defineProperty(this, "remove", function (id) {
    return _this.removeHandler(id);
  });

  if (!isBrowser) return;
  var container = document.createElement('div');
  container.setAttribute('data-evergreen-toaster-container', '');
  document.body.appendChild(container);
  ReactDOM.render( /*#__PURE__*/React.createElement(ToastManager, {
    bindNotify: this._bindNotify,
    bindRemove: this._bindRemove,
    bindGetToasts: this._bindGetToasts,
    bindCloseAll: this._bindCloseAll
  }), container);
});

export { Toaster as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlJlYWN0RE9NIiwiVG9hc3RNYW5hZ2VyIiwiaXNCcm93c2VyIiwid2luZG93IiwiZG9jdW1lbnQiLCJUb2FzdGVyIiwiaGFuZGxlciIsIm5vdGlmeUhhbmRsZXIiLCJyZW1vdmVIYW5kbGVyIiwiZ2V0VG9hc3RzSGFuZGxlciIsImNsb3NlQWxsSGFuZGxlciIsInRpdGxlIiwic2V0dGluZ3MiLCJpbnRlbnQiLCJpZCIsImNvbnRhaW5lciIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJyZW5kZXIiLCJfYmluZE5vdGlmeSIsIl9iaW5kUmVtb3ZlIiwiX2JpbmRHZXRUb2FzdHMiLCJfYmluZENsb3NlQWxsIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3RvYXN0ZXIvc3JjL1RvYXN0ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCBUb2FzdE1hbmFnZXIgZnJvbSAnLi9Ub2FzdE1hbmFnZXInXG5cbmNvbnN0IGlzQnJvd3NlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG5cbi8qKlxuICogVGhlIFRvYXN0ZXIgbWFuYWdlcyB0aGUgaW50ZXJhY3Rpb25zYiBiZXR3ZWVuXG4gKiB0aGUgVG9hc3Rlck1hbmdlciBhbmQgdGhlIHRvYXN0IEFQSS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9hc3RlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGlmICghaXNCcm93c2VyKSByZXR1cm5cblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1ldmVyZ3JlZW4tdG9hc3Rlci1jb250YWluZXInLCAnJylcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcilcblxuICAgIFJlYWN0RE9NLnJlbmRlcihcbiAgICAgIDxUb2FzdE1hbmFnZXJcbiAgICAgICAgYmluZE5vdGlmeT17dGhpcy5fYmluZE5vdGlmeX1cbiAgICAgICAgYmluZFJlbW92ZT17dGhpcy5fYmluZFJlbW92ZX1cbiAgICAgICAgYmluZEdldFRvYXN0cz17dGhpcy5fYmluZEdldFRvYXN0c31cbiAgICAgICAgYmluZENsb3NlQWxsPXt0aGlzLl9iaW5kQ2xvc2VBbGx9XG4gICAgICAvPixcbiAgICAgIGNvbnRhaW5lclxuICAgIClcbiAgfVxuXG4gIF9iaW5kTm90aWZ5ID0gaGFuZGxlciA9PiB7XG4gICAgdGhpcy5ub3RpZnlIYW5kbGVyID0gaGFuZGxlclxuICB9XG5cbiAgX2JpbmRSZW1vdmUgPSBoYW5kbGVyID0+IHtcbiAgICB0aGlzLnJlbW92ZUhhbmRsZXIgPSBoYW5kbGVyXG4gIH1cblxuICBfYmluZEdldFRvYXN0cyA9IGhhbmRsZXIgPT4ge1xuICAgIHRoaXMuZ2V0VG9hc3RzSGFuZGxlciA9IGhhbmRsZXJcbiAgfVxuXG4gIF9iaW5kQ2xvc2VBbGwgPSBoYW5kbGVyID0+IHtcbiAgICB0aGlzLmNsb3NlQWxsSGFuZGxlciA9IGhhbmRsZXJcbiAgfVxuXG4gIGdldFRvYXN0cyA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRUb2FzdHNIYW5kbGVyKClcbiAgfVxuXG4gIGNsb3NlQWxsID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLmNsb3NlQWxsSGFuZGxlcigpXG4gIH1cblxuICBub3RpZnkgPSAodGl0bGUsIHNldHRpbmdzID0ge30pID0+IHtcbiAgICByZXR1cm4gdGhpcy5ub3RpZnlIYW5kbGVyKHRpdGxlLCB7IC4uLnNldHRpbmdzLCBpbnRlbnQ6ICdub25lJyB9KVxuICB9XG5cbiAgc3VjY2VzcyA9ICh0aXRsZSwgc2V0dGluZ3MgPSB7fSkgPT4ge1xuICAgIHJldHVybiB0aGlzLm5vdGlmeUhhbmRsZXIodGl0bGUsIHsgLi4uc2V0dGluZ3MsIGludGVudDogJ3N1Y2Nlc3MnIH0pXG4gIH1cblxuICB3YXJuaW5nID0gKHRpdGxlLCBzZXR0aW5ncyA9IHt9KSA9PiB7XG4gICAgcmV0dXJuIHRoaXMubm90aWZ5SGFuZGxlcih0aXRsZSwgeyAuLi5zZXR0aW5ncywgaW50ZW50OiAnd2FybmluZycgfSlcbiAgfVxuXG4gIGRhbmdlciA9ICh0aXRsZSwgc2V0dGluZ3MgPSB7fSkgPT4ge1xuICAgIHJldHVybiB0aGlzLm5vdGlmeUhhbmRsZXIodGl0bGUsIHsgLi4uc2V0dGluZ3MsIGludGVudDogJ2RhbmdlcicgfSlcbiAgfVxuXG4gIHJlbW92ZSA9IGlkID0+IHtcbiAgICByZXR1cm4gdGhpcy5yZW1vdmVIYW5kbGVyKGlkKVxuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFFBQVAsTUFBcUIsV0FBckI7QUFDQSxPQUFPQyxZQUFQLE1BQXlCLGdCQUF6QjtBQUVBLElBQU1DLFNBQVMsR0FDYixPQUFPQyxNQUFQLEtBQWtCLFdBQWxCLElBQWlDLE9BQU9BLE1BQU0sQ0FBQ0MsUUFBZCxLQUEyQixXQUQ5RDtBQUdBO0FBQ0E7QUFDQTtBQUNBOztJQUNxQkMsTyw2QkFDbkIsbUJBQWM7RUFBQTs7RUFBQTs7RUFBQSxxQ0FrQkEsVUFBQUMsT0FBTyxFQUFJO0lBQ3ZCLEtBQUksQ0FBQ0MsYUFBTCxHQUFxQkQsT0FBckI7RUFDRCxDQXBCYTs7RUFBQSxxQ0FzQkEsVUFBQUEsT0FBTyxFQUFJO0lBQ3ZCLEtBQUksQ0FBQ0UsYUFBTCxHQUFxQkYsT0FBckI7RUFDRCxDQXhCYTs7RUFBQSx3Q0EwQkcsVUFBQUEsT0FBTyxFQUFJO0lBQzFCLEtBQUksQ0FBQ0csZ0JBQUwsR0FBd0JILE9BQXhCO0VBQ0QsQ0E1QmE7O0VBQUEsdUNBOEJFLFVBQUFBLE9BQU8sRUFBSTtJQUN6QixLQUFJLENBQUNJLGVBQUwsR0FBdUJKLE9BQXZCO0VBQ0QsQ0FoQ2E7O0VBQUEsbUNBa0NGLFlBQU07SUFDaEIsT0FBTyxLQUFJLENBQUNHLGdCQUFMLEVBQVA7RUFDRCxDQXBDYTs7RUFBQSxrQ0FzQ0gsWUFBTTtJQUNmLE9BQU8sS0FBSSxDQUFDQyxlQUFMLEVBQVA7RUFDRCxDQXhDYTs7RUFBQSxnQ0EwQ0wsVUFBQ0MsS0FBRCxFQUEwQjtJQUFBLElBQWxCQyxRQUFrQix1RUFBUCxFQUFPO0lBQ2pDLE9BQU8sS0FBSSxDQUFDTCxhQUFMLENBQW1CSSxLQUFuQixrQ0FBK0JDLFFBQS9CO01BQXlDQyxNQUFNLEVBQUU7SUFBakQsR0FBUDtFQUNELENBNUNhOztFQUFBLGlDQThDSixVQUFDRixLQUFELEVBQTBCO0lBQUEsSUFBbEJDLFFBQWtCLHVFQUFQLEVBQU87SUFDbEMsT0FBTyxLQUFJLENBQUNMLGFBQUwsQ0FBbUJJLEtBQW5CLGtDQUErQkMsUUFBL0I7TUFBeUNDLE1BQU0sRUFBRTtJQUFqRCxHQUFQO0VBQ0QsQ0FoRGE7O0VBQUEsaUNBa0RKLFVBQUNGLEtBQUQsRUFBMEI7SUFBQSxJQUFsQkMsUUFBa0IsdUVBQVAsRUFBTztJQUNsQyxPQUFPLEtBQUksQ0FBQ0wsYUFBTCxDQUFtQkksS0FBbkIsa0NBQStCQyxRQUEvQjtNQUF5Q0MsTUFBTSxFQUFFO0lBQWpELEdBQVA7RUFDRCxDQXBEYTs7RUFBQSxnQ0FzREwsVUFBQ0YsS0FBRCxFQUEwQjtJQUFBLElBQWxCQyxRQUFrQix1RUFBUCxFQUFPO0lBQ2pDLE9BQU8sS0FBSSxDQUFDTCxhQUFMLENBQW1CSSxLQUFuQixrQ0FBK0JDLFFBQS9CO01BQXlDQyxNQUFNLEVBQUU7SUFBakQsR0FBUDtFQUNELENBeERhOztFQUFBLGdDQTBETCxVQUFBQyxFQUFFLEVBQUk7SUFDYixPQUFPLEtBQUksQ0FBQ04sYUFBTCxDQUFtQk0sRUFBbkIsQ0FBUDtFQUNELENBNURhOztFQUNaLElBQUksQ0FBQ1osU0FBTCxFQUFnQjtFQUVoQixJQUFNYSxTQUFTLEdBQUdYLFFBQVEsQ0FBQ1ksYUFBVCxDQUF1QixLQUF2QixDQUFsQjtFQUNBRCxTQUFTLENBQUNFLFlBQVYsQ0FBdUIsa0NBQXZCLEVBQTJELEVBQTNEO0VBQ0FiLFFBQVEsQ0FBQ2MsSUFBVCxDQUFjQyxXQUFkLENBQTBCSixTQUExQjtFQUVBZixRQUFRLENBQUNvQixNQUFULGVBQ0Usb0JBQUMsWUFBRDtJQUNFLFVBQVUsRUFBRSxLQUFLQyxXQURuQjtJQUVFLFVBQVUsRUFBRSxLQUFLQyxXQUZuQjtJQUdFLGFBQWEsRUFBRSxLQUFLQyxjQUh0QjtJQUlFLFlBQVksRUFBRSxLQUFLQztFQUpyQixFQURGLEVBT0VULFNBUEY7QUFTRCxDOztTQWpCa0JWLE8ifQ==