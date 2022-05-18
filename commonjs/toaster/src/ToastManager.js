"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _glamor = require("glamor");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("../../constants");

var _Toast = _interopRequireDefault(require("./Toast"));

var _excluded = ["id", "description"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var wrapperClass = (0, _glamor.css)({
  maxWidth: 560,
  margin: '0 auto',
  top: 0,
  left: 0,
  right: 0,
  position: 'fixed',
  zIndex: _constants.StackingOrder.TOASTER,
  pointerEvents: 'none'
});

var hasCustomId = function hasCustomId(settings) {
  return Object.hasOwnProperty.call(settings, 'id');
};

var ToastManager = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(ToastManager, _React$PureComponent);

  var _super = _createSuper(ToastManager);

  function ToastManager(props, context) {
    var _this;

    (0, _classCallCheck2["default"])(this, ToastManager);
    _this = _super.call(this, props, context);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getToasts", function () {
      return _this.state.toasts;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "closeAll", function () {
      _this.getToasts().forEach(function (toast) {
        return toast.close();
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "remove", function (id) {
      var _iterator = _createForOfIteratorHelper(_this.state.toasts),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var toast = _step.value;

          // Since unique ID is still appended to a custom ID, skip the unique ID and check only prefix
          if (String(toast.id).startsWith(id)) {
            _this.closeToast(toast.id);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "notify", function (title, settings) {
      // If there's a custom toast ID passed, close existing toasts with the same custom ID
      if (hasCustomId(settings)) {
        _this.remove(settings.id);
      }

      var instance = _this.createToastInstance(title, settings);

      _this.setState(function (previousState) {
        return {
          toasts: [instance].concat((0, _toConsumableArray2["default"])(previousState.toasts))
        };
      });

      return instance;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "createToastInstance", function (title, settings) {
      var uniqueId = ++ToastManager.idCounter;
      var id = hasCustomId(settings) ? "".concat(settings.id, "-").concat(uniqueId) : uniqueId;
      return {
        id: id,
        title: title,
        description: settings.description,
        hasCloseButton: settings.hasCloseButton || true,
        duration: settings.duration || 5,
        close: function close() {
          return _this.closeToast(id);
        },
        intent: settings.intent
      };
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "closeToast", function (id) {
      _this.setState(function (previousState) {
        return {
          toasts: previousState.toasts.map(function (toast) {
            if (toast.id === id) {
              return _objectSpread(_objectSpread({}, toast), {}, {
                isShown: false
              });
            }

            return toast;
          })
        };
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "removeToast", function (id) {
      _this.setState(function (previousState) {
        return {
          toasts: previousState.toasts.filter(function (toast) {
            return toast.id !== id;
          })
        };
      });
    });
    props.bindNotify(_this.notify);
    props.bindRemove(_this.remove);
    props.bindGetToasts(_this.getToasts);
    props.bindCloseAll(_this.closeAll);
    _this.state = {
      toasts: []
    };
    return _this;
  }

  (0, _createClass2["default"])(ToastManager, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/_react["default"].createElement("span", {
        className: wrapperClass
      }, this.state.toasts.map(function (_ref) {
        var id = _ref.id,
            description = _ref.description,
            props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
        return /*#__PURE__*/_react["default"].createElement(_Toast["default"], (0, _extends2["default"])({
          key: id,
          onRemove: function onRemove() {
            return _this2.removeToast(id);
          }
        }, props), description);
      }));
    }
  }]);
  return ToastManager;
}(_react["default"].PureComponent);

exports["default"] = ToastManager;
ToastManager.displayName = "ToastManager";
(0, _defineProperty2["default"])(ToastManager, "propTypes", {
  /**
   * Function called with the `this.notify` function.
   */
  bindNotify: _propTypes["default"].func.isRequired,

  /**
   * Function called with the `this.remove` function.
   */
  bindRemove: _propTypes["default"].func.isRequired,

  /**
   * Function called with the `this.getToasts` function.
   */
  bindGetToasts: _propTypes["default"].func.isRequired,

  /**
   * Function called with the `this.closeAll` function.
   */
  bindCloseAll: _propTypes["default"].func.isRequired
});
(0, _defineProperty2["default"])(ToastManager, "idCounter", 0);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJ3cmFwcGVyQ2xhc3MiLCJjc3MiLCJtYXhXaWR0aCIsIm1hcmdpbiIsInRvcCIsImxlZnQiLCJyaWdodCIsInBvc2l0aW9uIiwiekluZGV4IiwiU3RhY2tpbmdPcmRlciIsIlRPQVNURVIiLCJwb2ludGVyRXZlbnRzIiwiaGFzQ3VzdG9tSWQiLCJzZXR0aW5ncyIsIk9iamVjdCIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIlRvYXN0TWFuYWdlciIsInByb3BzIiwiY29udGV4dCIsInN0YXRlIiwidG9hc3RzIiwiZ2V0VG9hc3RzIiwiZm9yRWFjaCIsInRvYXN0IiwiY2xvc2UiLCJpZCIsIlN0cmluZyIsInN0YXJ0c1dpdGgiLCJjbG9zZVRvYXN0IiwidGl0bGUiLCJyZW1vdmUiLCJpbnN0YW5jZSIsImNyZWF0ZVRvYXN0SW5zdGFuY2UiLCJzZXRTdGF0ZSIsInByZXZpb3VzU3RhdGUiLCJ1bmlxdWVJZCIsImlkQ291bnRlciIsImRlc2NyaXB0aW9uIiwiaGFzQ2xvc2VCdXR0b24iLCJkdXJhdGlvbiIsImludGVudCIsIm1hcCIsImlzU2hvd24iLCJmaWx0ZXIiLCJiaW5kTm90aWZ5Iiwibm90aWZ5IiwiYmluZFJlbW92ZSIsImJpbmRHZXRUb2FzdHMiLCJiaW5kQ2xvc2VBbGwiLCJjbG9zZUFsbCIsInJlbW92ZVRvYXN0IiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdG9hc3Rlci9zcmMvVG9hc3RNYW5hZ2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNzcyB9IGZyb20gJ2dsYW1vcidcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFN0YWNraW5nT3JkZXIgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnXG5pbXBvcnQgVG9hc3QgZnJvbSAnLi9Ub2FzdCdcblxuY29uc3Qgd3JhcHBlckNsYXNzID0gY3NzKHtcbiAgbWF4V2lkdGg6IDU2MCxcbiAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgdG9wOiAwLFxuICBsZWZ0OiAwLFxuICByaWdodDogMCxcbiAgcG9zaXRpb246ICdmaXhlZCcsXG4gIHpJbmRleDogU3RhY2tpbmdPcmRlci5UT0FTVEVSLFxuICBwb2ludGVyRXZlbnRzOiAnbm9uZSdcbn0pXG5cbmNvbnN0IGhhc0N1c3RvbUlkID0gc2V0dGluZ3MgPT4gT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwoc2V0dGluZ3MsICdpZCcpXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvYXN0TWFuYWdlciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIGNhbGxlZCB3aXRoIHRoZSBgdGhpcy5ub3RpZnlgIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIGJpbmROb3RpZnk6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiBjYWxsZWQgd2l0aCB0aGUgYHRoaXMucmVtb3ZlYCBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICBiaW5kUmVtb3ZlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gY2FsbGVkIHdpdGggdGhlIGB0aGlzLmdldFRvYXN0c2AgZnVuY3Rpb24uXG4gICAgICovXG4gICAgYmluZEdldFRvYXN0czogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIGNhbGxlZCB3aXRoIHRoZSBgdGhpcy5jbG9zZUFsbGAgZnVuY3Rpb24uXG4gICAgICovXG4gICAgYmluZENsb3NlQWxsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gIH1cblxuICBzdGF0aWMgaWRDb3VudGVyID0gMFxuXG4gIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG4gICAgc3VwZXIocHJvcHMsIGNvbnRleHQpXG5cbiAgICBwcm9wcy5iaW5kTm90aWZ5KHRoaXMubm90aWZ5KVxuICAgIHByb3BzLmJpbmRSZW1vdmUodGhpcy5yZW1vdmUpXG4gICAgcHJvcHMuYmluZEdldFRvYXN0cyh0aGlzLmdldFRvYXN0cylcbiAgICBwcm9wcy5iaW5kQ2xvc2VBbGwodGhpcy5jbG9zZUFsbClcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0b2FzdHM6IFtdXG4gICAgfVxuICB9XG5cbiAgZ2V0VG9hc3RzID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLnRvYXN0c1xuICB9XG5cbiAgY2xvc2VBbGwgPSAoKSA9PiB7XG4gICAgdGhpcy5nZXRUb2FzdHMoKS5mb3JFYWNoKHRvYXN0ID0+IHRvYXN0LmNsb3NlKCkpXG4gIH1cblxuICByZW1vdmUgPSBpZCA9PiB7XG4gICAgZm9yIChjb25zdCB0b2FzdCBvZiB0aGlzLnN0YXRlLnRvYXN0cykge1xuICAgICAgLy8gU2luY2UgdW5pcXVlIElEIGlzIHN0aWxsIGFwcGVuZGVkIHRvIGEgY3VzdG9tIElELCBza2lwIHRoZSB1bmlxdWUgSUQgYW5kIGNoZWNrIG9ubHkgcHJlZml4XG4gICAgICBpZiAoU3RyaW5nKHRvYXN0LmlkKS5zdGFydHNXaXRoKGlkKSkge1xuICAgICAgICB0aGlzLmNsb3NlVG9hc3QodG9hc3QuaWQpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbm90aWZ5ID0gKHRpdGxlLCBzZXR0aW5ncykgPT4ge1xuICAgIC8vIElmIHRoZXJlJ3MgYSBjdXN0b20gdG9hc3QgSUQgcGFzc2VkLCBjbG9zZSBleGlzdGluZyB0b2FzdHMgd2l0aCB0aGUgc2FtZSBjdXN0b20gSURcbiAgICBpZiAoaGFzQ3VzdG9tSWQoc2V0dGluZ3MpKSB7XG4gICAgICB0aGlzLnJlbW92ZShzZXR0aW5ncy5pZClcbiAgICB9XG5cbiAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuY3JlYXRlVG9hc3RJbnN0YW5jZSh0aXRsZSwgc2V0dGluZ3MpXG5cbiAgICB0aGlzLnNldFN0YXRlKHByZXZpb3VzU3RhdGUgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdG9hc3RzOiBbaW5zdGFuY2UsIC4uLnByZXZpb3VzU3RhdGUudG9hc3RzXVxuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfVxuXG4gIGNyZWF0ZVRvYXN0SW5zdGFuY2UgPSAodGl0bGUsIHNldHRpbmdzKSA9PiB7XG4gICAgY29uc3QgdW5pcXVlSWQgPSArK1RvYXN0TWFuYWdlci5pZENvdW50ZXJcbiAgICBjb25zdCBpZCA9IGhhc0N1c3RvbUlkKHNldHRpbmdzKSA/IGAke3NldHRpbmdzLmlkfS0ke3VuaXF1ZUlkfWAgOiB1bmlxdWVJZFxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGlkLFxuICAgICAgdGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbjogc2V0dGluZ3MuZGVzY3JpcHRpb24sXG4gICAgICBoYXNDbG9zZUJ1dHRvbjogc2V0dGluZ3MuaGFzQ2xvc2VCdXR0b24gfHwgdHJ1ZSxcbiAgICAgIGR1cmF0aW9uOiBzZXR0aW5ncy5kdXJhdGlvbiB8fCA1LFxuICAgICAgY2xvc2U6ICgpID0+IHRoaXMuY2xvc2VUb2FzdChpZCksXG4gICAgICBpbnRlbnQ6IHNldHRpbmdzLmludGVudFxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIHdpbGwgc2V0IGlzU2hvd24gb24gdGhlIFRvYXN0IHdoaWNoIHdpbGwgY2xvc2UgdGhlIHRvYXN0LlxuICAgKiBJdCB3b24ndCByZW1vdmUgdGhlIHRvYXN0IHVudGlsIG9uRXhpdGVkIHRyaWdnZXJzIG9uUmVtb3ZlLlxuICAgKi9cbiAgY2xvc2VUb2FzdCA9IGlkID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHByZXZpb3VzU3RhdGUgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdG9hc3RzOiBwcmV2aW91c1N0YXRlLnRvYXN0cy5tYXAodG9hc3QgPT4ge1xuICAgICAgICAgIGlmICh0b2FzdC5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIC4uLnRvYXN0LFxuICAgICAgICAgICAgICBpc1Nob3duOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB0b2FzdFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZW1vdmVUb2FzdCA9IGlkID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHByZXZpb3VzU3RhdGUgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdG9hc3RzOiBwcmV2aW91c1N0YXRlLnRvYXN0cy5maWx0ZXIodG9hc3QgPT4gdG9hc3QuaWQgIT09IGlkKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17d3JhcHBlckNsYXNzfT5cbiAgICAgICAge3RoaXMuc3RhdGUudG9hc3RzLm1hcCgoeyBpZCwgZGVzY3JpcHRpb24sIC4uLnByb3BzIH0pID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFRvYXN0IGtleT17aWR9IG9uUmVtb3ZlPXsoKSA9PiB0aGlzLnJlbW92ZVRvYXN0KGlkKX0gey4uLnByb3BzfT5cbiAgICAgICAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgPC9Ub2FzdD5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgPC9zcGFuPlxuICAgIClcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsSUFBQUMsV0FBQSxFQUFJO0VBQ3ZCQyxRQUFRLEVBQUUsR0FEYTtFQUV2QkMsTUFBTSxFQUFFLFFBRmU7RUFHdkJD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