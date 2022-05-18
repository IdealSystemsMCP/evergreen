"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _ToastManager = _interopRequireDefault(require("./ToastManager"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';
/**
 * The Toaster manages the interactionsb between
 * the ToasterManger and the toast API.
 */

var Toaster = /*#__PURE__*/(0, _createClass2["default"])(function Toaster() {
  var _this = this;

  (0, _classCallCheck2["default"])(this, Toaster);
  (0, _defineProperty2["default"])(this, "_bindNotify", function (handler) {
    _this.notifyHandler = handler;
  });
  (0, _defineProperty2["default"])(this, "_bindRemove", function (handler) {
    _this.removeHandler = handler;
  });
  (0, _defineProperty2["default"])(this, "_bindGetToasts", function (handler) {
    _this.getToastsHandler = handler;
  });
  (0, _defineProperty2["default"])(this, "_bindCloseAll", function (handler) {
    _this.closeAllHandler = handler;
  });
  (0, _defineProperty2["default"])(this, "getToasts", function () {
    return _this.getToastsHandler();
  });
  (0, _defineProperty2["default"])(this, "closeAll", function () {
    return _this.closeAllHandler();
  });
  (0, _defineProperty2["default"])(this, "notify", function (title) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _this.notifyHandler(title, _objectSpread(_objectSpread({}, settings), {}, {
      intent: 'none'
    }));
  });
  (0, _defineProperty2["default"])(this, "success", function (title) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _this.notifyHandler(title, _objectSpread(_objectSpread({}, settings), {}, {
      intent: 'success'
    }));
  });
  (0, _defineProperty2["default"])(this, "warning", function (title) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _this.notifyHandler(title, _objectSpread(_objectSpread({}, settings), {}, {
      intent: 'warning'
    }));
  });
  (0, _defineProperty2["default"])(this, "danger", function (title) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return _this.notifyHandler(title, _objectSpread(_objectSpread({}, settings), {}, {
      intent: 'danger'
    }));
  });
  (0, _defineProperty2["default"])(this, "remove", function (id) {
    return _this.removeHandler(id);
  });
  if (!isBrowser) return;
  var container = document.createElement('div');
  container.setAttribute('data-evergreen-toaster-container', '');
  document.body.appendChild(container);

  _reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(_ToastManager["default"], {
    bindNotify: this._bindNotify,
    bindRemove: this._bindRemove,
    bindGetToasts: this._bindGetToasts,
    bindCloseAll: this._bindCloseAll
  }), container);
});
exports["default"] = Toaster;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJpc0Jyb3dzZXIiLCJ3aW5kb3ciLCJkb2N1bWVudCIsIlRvYXN0ZXIiLCJoYW5kbGVyIiwibm90aWZ5SGFuZGxlciIsInJlbW92ZUhhbmRsZXIiLCJnZXRUb2FzdHNIYW5kbGVyIiwiY2xvc2VBbGxIYW5kbGVyIiwidGl0bGUiLCJzZXR0aW5ncyIsImludGVudCIsImlkIiwiY29udGFpbmVyIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiX2JpbmROb3RpZnkiLCJfYmluZFJlbW92ZSIsIl9iaW5kR2V0VG9hc3RzIiwiX2JpbmRDbG9zZUFsbCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90b2FzdGVyL3NyYy9Ub2FzdGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgVG9hc3RNYW5hZ2VyIGZyb20gJy4vVG9hc3RNYW5hZ2VyJ1xuXG5jb25zdCBpc0Jyb3dzZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuXG4vKipcbiAqIFRoZSBUb2FzdGVyIG1hbmFnZXMgdGhlIGludGVyYWN0aW9uc2IgYmV0d2VlblxuICogdGhlIFRvYXN0ZXJNYW5nZXIgYW5kIHRoZSB0b2FzdCBBUEkuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvYXN0ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBpZiAoIWlzQnJvd3NlcikgcmV0dXJuXG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtZXZlcmdyZWVuLXRvYXN0ZXItY29udGFpbmVyJywgJycpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpXG5cbiAgICBSZWFjdERPTS5yZW5kZXIoXG4gICAgICA8VG9hc3RNYW5hZ2VyXG4gICAgICAgIGJpbmROb3RpZnk9e3RoaXMuX2JpbmROb3RpZnl9XG4gICAgICAgIGJpbmRSZW1vdmU9e3RoaXMuX2JpbmRSZW1vdmV9XG4gICAgICAgIGJpbmRHZXRUb2FzdHM9e3RoaXMuX2JpbmRHZXRUb2FzdHN9XG4gICAgICAgIGJpbmRDbG9zZUFsbD17dGhpcy5fYmluZENsb3NlQWxsfVxuICAgICAgLz4sXG4gICAgICBjb250YWluZXJcbiAgICApXG4gIH1cblxuICBfYmluZE5vdGlmeSA9IGhhbmRsZXIgPT4ge1xuICAgIHRoaXMubm90aWZ5SGFuZGxlciA9IGhhbmRsZXJcbiAgfVxuXG4gIF9iaW5kUmVtb3ZlID0gaGFuZGxlciA9PiB7XG4gICAgdGhpcy5yZW1vdmVIYW5kbGVyID0gaGFuZGxlclxuICB9XG5cbiAgX2JpbmRHZXRUb2FzdHMgPSBoYW5kbGVyID0+IHtcbiAgICB0aGlzLmdldFRvYXN0c0hhbmRsZXIgPSBoYW5kbGVyXG4gIH1cblxuICBfYmluZENsb3NlQWxsID0gaGFuZGxlciA9PiB7XG4gICAgdGhpcy5jbG9zZUFsbEhhbmRsZXIgPSBoYW5kbGVyXG4gIH1cblxuICBnZXRUb2FzdHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VG9hc3RzSGFuZGxlcigpXG4gIH1cblxuICBjbG9zZUFsbCA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5jbG9zZUFsbEhhbmRsZXIoKVxuICB9XG5cbiAgbm90aWZ5ID0gKHRpdGxlLCBzZXR0aW5ncyA9IHt9KSA9PiB7XG4gICAgcmV0dXJuIHRoaXMubm90aWZ5SGFuZGxlcih0aXRsZSwgeyAuLi5zZXR0aW5ncywgaW50ZW50OiAnbm9uZScgfSlcbiAgfVxuXG4gIHN1Y2Nlc3MgPSAodGl0bGUsIHNldHRpbmdzID0ge30pID0+IHtcbiAgICByZXR1cm4gdGhpcy5ub3RpZnlIYW5kbGVyKHRpdGxlLCB7IC4uLnNldHRpbmdzLCBpbnRlbnQ6ICdzdWNjZXNzJyB9KVxuICB9XG5cbiAgd2FybmluZyA9ICh0aXRsZSwgc2V0dGluZ3MgPSB7fSkgPT4ge1xuICAgIHJldHVybiB0aGlzLm5vdGlmeUhhbmRsZXIodGl0bGUsIHsgLi4uc2V0dGluZ3MsIGludGVudDogJ3dhcm5pbmcnIH0pXG4gIH1cblxuICBkYW5nZXIgPSAodGl0bGUsIHNldHRpbmdzID0ge30pID0+IHtcbiAgICByZXR1cm4gdGhpcy5ub3RpZnlIYW5kbGVyKHRpdGxlLCB7IC4uLnNldHRpbmdzLCBpbnRlbnQ6ICdkYW5nZXInIH0pXG4gIH1cblxuICByZW1vdmUgPSBpZCA9PiB7XG4gICAgcmV0dXJuIHRoaXMucmVtb3ZlSGFuZGxlcihpZClcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxHQUNiLE9BQU9DLE1BQVAsS0FBa0IsV0FBbEIsSUFBaUMsT0FBT0EsTUFBTSxDQUFDQyxRQUFkLEtBQTJCLFdBRDlEO0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0lBQ3FCQyxPLDhDQUNuQixtQkFBYztFQUFBOztFQUFBO0VBQUEsc0RBa0JBLFVBQUFDLE9BQU8sRUFBSTtJQUN2QixLQUFJLENBQUNDLGFBQUwsR0FBcUJELE9BQXJCO0VBQ0QsQ0FwQmE7RUFBQSxzREFzQkEsVUFBQUEsT0FBTyxFQUFJO0lBQ3ZCLEtBQUksQ0FBQ0UsYUFBTCxHQUFxQkYsT0FBckI7RUFDRCxDQXhCYTtFQUFBLHlEQTBCRyxVQUFBQSxPQUFPLEVBQUk7SUFDMUIsS0FBSSxDQUFDRyxnQkFBTCxHQUF3QkgsT0FBeEI7RUFDRCxDQTVCYTtFQUFBLHdEQThCRSxVQUFBQSxPQUFPLEVBQUk7SUFDekIsS0FBSSxDQUFDSSxlQUFMLEdBQXVCSixPQUF2QjtFQUNELENBaENhO0VBQUEsb0RBa0NGLFlBQU07SUFDaEIsT0FBTyxLQUFJLENBQUNHLGdCQUFMLEVBQVA7RUFDRCxDQXBDYTtFQUFBLG1EQXNDSCxZQUFNO0lBQ2YsT0FBTyxLQUFJLENBQUNDLGVBQUwsRUFBUDtFQUNELENBeENhO0VBQUEsaURBMENMLFVBQUNDLEtBQUQsRUFBMEI7SUFBQSxJQUFsQkMsUUFBa0IsdUVBQVAsRUFBTztJQUNqQyxPQUFPLEtBQUksQ0FBQ0wsYUFBTCxDQUFtQkksS0FBbkIsa0NBQStCQyxRQUEvQjtNQUF5Q0MsTUFBTSxFQUFFO0lBQWpELEdBQVA7RUFDRCxDQTVDYTtFQUFBLGtEQThDSixVQUFDRixLQUFELEVBQTBCO0lBQUEsSUFBbEJDLFFBQWtCLHVFQUFQLEVBQU87SUFDbEMsT0FBTyxLQUFJLENBQUNMLGFBQUwsQ0FBbUJJLEtBQW5CLGtDQUErQkMsUUFBL0I7TUFBeUNDLE1BQU0sRUFBRTtJQUFqRCxHQUFQO0VBQ0QsQ0FoRGE7RUFBQSxrREFrREosVUFBQ0YsS0FBRCxFQUEwQjtJQUFBLElBQWxCQyxRQUFrQix1RUFBUCxFQUFPO0lBQ2xDLE9BQU8sS0FBSSxDQUFDTCxhQUFMLENBQW1CSSxLQUFuQixrQ0FBK0JDLFFBQS9CO01BQXlDQyxNQUFNLEVBQUU7SUFBakQsR0FBUDtFQUNELENBcERhO0VBQUEsaURBc0RMLFVBQUNGLEtBQUQsRUFBMEI7SUFBQSxJQUFsQkMsUUFBa0IsdUVBQVAsRUFBTztJQUNqQyxPQUFPLEtBQUksQ0FBQ0wsYUFBTCxDQUFtQkksS0FBbkIsa0NBQStCQyxRQUEvQjtNQUF5Q0MsTUFBTSxFQUFFO0lBQWpELEdBQVA7RUFDRCxDQXhEYTtFQUFBLGlEQTBETCxVQUFBQyxFQUFFLEVBQUk7SUFDYixPQUFPLEtBQUksQ0FBQ04sYUFBTCxDQUFtQk0sRUFBbkIsQ0FBUDtFQUNELENBNURhO0VBQ1osSUFBSSxDQUFDWixTQUFMLEVBQWdCO0VBRWhCLElBQU1hLFNBQVMsR0FBR1gsUUFBUSxDQUFDWSxhQUFULENBQXVCLEtBQXZCLENBQWxCO0VBQ0FELFNBQVMsQ0FBQ0UsWUFBVixDQUF1QixrQ0FBdkIsRUFBMkQsRUFBM0Q7RUFDQWIsUUFBUSxDQUFDYyxJQUFULENBQWNDLFdBQWQsQ0FBMEJKLFNBQTFCOztFQUVBSyxvQkFBQSxDQUFTQyxNQUFULGVBQ0UsZ0NBQUMsd0JBQUQ7SUFDRSxVQUFVLEVBQUUsS0FBS0MsV0FEbkI7SUFFRSxVQUFVLEVBQUUsS0FBS0MsV0FGbkI7SUFHRSxhQUFhLEVBQUUsS0FBS0MsY0FIdEI7SUFJRSxZQUFZLEVBQUUsS0FBS0M7RUFKckIsRUFERixFQU9FVixTQVBGO0FBU0QsQyJ9