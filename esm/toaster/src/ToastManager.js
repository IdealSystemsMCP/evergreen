import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _excluded = ["id", "description"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React from 'react';
import { css } from 'glamor';
import PropTypes from 'prop-types';
import { StackingOrder } from '../../constants';
import Toast from './Toast';
var wrapperClass = css({
  maxWidth: 560,
  margin: '0 auto',
  top: 0,
  left: 0,
  right: 0,
  position: 'fixed',
  zIndex: StackingOrder.TOASTER,
  pointerEvents: 'none'
});

var hasCustomId = function hasCustomId(settings) {
  return Object.hasOwnProperty.call(settings, 'id');
};

var ToastManager = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(ToastManager, _React$PureComponent);

  var _super = _createSuper(ToastManager);

  function ToastManager(props, context) {
    var _this;

    _classCallCheck(this, ToastManager);

    _this = _super.call(this, props, context);

    _defineProperty(_assertThisInitialized(_this), "getToasts", function () {
      return _this.state.toasts;
    });

    _defineProperty(_assertThisInitialized(_this), "closeAll", function () {
      _this.getToasts().forEach(function (toast) {
        return toast.close();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "remove", function (id) {
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

    _defineProperty(_assertThisInitialized(_this), "notify", function (title, settings) {
      // If there's a custom toast ID passed, close existing toasts with the same custom ID
      if (hasCustomId(settings)) {
        _this.remove(settings.id);
      }

      var instance = _this.createToastInstance(title, settings);

      _this.setState(function (previousState) {
        return {
          toasts: [instance].concat(_toConsumableArray(previousState.toasts))
        };
      });

      return instance;
    });

    _defineProperty(_assertThisInitialized(_this), "createToastInstance", function (title, settings) {
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

    _defineProperty(_assertThisInitialized(_this), "closeToast", function (id) {
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

    _defineProperty(_assertThisInitialized(_this), "removeToast", function (id) {
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

  _createClass(ToastManager, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/React.createElement("span", {
        className: wrapperClass
      }, this.state.toasts.map(function (_ref) {
        var id = _ref.id,
            description = _ref.description,
            props = _objectWithoutProperties(_ref, _excluded);

        return /*#__PURE__*/React.createElement(Toast, _extends({
          key: id,
          onRemove: function onRemove() {
            return _this2.removeToast(id);
          }
        }, props), description);
      }));
    }
  }]);

  return ToastManager;
}(React.PureComponent);

ToastManager.displayName = "ToastManager";

_defineProperty(ToastManager, "propTypes", {
  /**
   * Function called with the `this.notify` function.
   */
  bindNotify: PropTypes.func.isRequired,

  /**
   * Function called with the `this.remove` function.
   */
  bindRemove: PropTypes.func.isRequired,

  /**
   * Function called with the `this.getToasts` function.
   */
  bindGetToasts: PropTypes.func.isRequired,

  /**
   * Function called with the `this.closeAll` function.
   */
  bindCloseAll: PropTypes.func.isRequired
});

_defineProperty(ToastManager, "idCounter", 0);

export { ToastManager as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsImNzcyIsIlByb3BUeXBlcyIsIlN0YWNraW5nT3JkZXIiLCJUb2FzdCIsIndyYXBwZXJDbGFzcyIsIm1heFdpZHRoIiwibWFyZ2luIiwidG9wIiwibGVmdCIsInJpZ2h0IiwicG9zaXRpb24iLCJ6SW5kZXgiLCJUT0FTVEVSIiwicG9pbnRlckV2ZW50cyIsImhhc0N1c3RvbUlkIiwic2V0dGluZ3MiLCJPYmplY3QiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJUb2FzdE1hbmFnZXIiLCJwcm9wcyIsImNvbnRleHQiLCJzdGF0ZSIsInRvYXN0cyIsImdldFRvYXN0cyIsImZvckVhY2giLCJ0b2FzdCIsImNsb3NlIiwiaWQiLCJTdHJpbmciLCJzdGFydHNXaXRoIiwiY2xvc2VUb2FzdCIsInRpdGxlIiwicmVtb3ZlIiwiaW5zdGFuY2UiLCJjcmVhdGVUb2FzdEluc3RhbmNlIiwic2V0U3RhdGUiLCJwcmV2aW91c1N0YXRlIiwidW5pcXVlSWQiLCJpZENvdW50ZXIiLCJkZXNjcmlwdGlvbiIsImhhc0Nsb3NlQnV0dG9uIiwiZHVyYXRpb24iLCJpbnRlbnQiLCJtYXAiLCJpc1Nob3duIiwiZmlsdGVyIiwiYmluZE5vdGlmeSIsIm5vdGlmeSIsImJpbmRSZW1vdmUiLCJiaW5kR2V0VG9hc3RzIiwiYmluZENsb3NlQWxsIiwiY2xvc2VBbGwiLCJyZW1vdmVUb2FzdCIsIlB1cmVDb21wb25lbnQiLCJmdW5jIiwiaXNSZXF1aXJlZCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90b2FzdGVyL3NyYy9Ub2FzdE1hbmFnZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnZ2xhbW9yJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgU3RhY2tpbmdPcmRlciB9IGZyb20gJy4uLy4uL2NvbnN0YW50cydcbmltcG9ydCBUb2FzdCBmcm9tICcuL1RvYXN0J1xuXG5jb25zdCB3cmFwcGVyQ2xhc3MgPSBjc3Moe1xuICBtYXhXaWR0aDogNTYwLFxuICBtYXJnaW46ICcwIGF1dG8nLFxuICB0b3A6IDAsXG4gIGxlZnQ6IDAsXG4gIHJpZ2h0OiAwLFxuICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgekluZGV4OiBTdGFja2luZ09yZGVyLlRPQVNURVIsXG4gIHBvaW50ZXJFdmVudHM6ICdub25lJ1xufSlcblxuY29uc3QgaGFzQ3VzdG9tSWQgPSBzZXR0aW5ncyA9PiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChzZXR0aW5ncywgJ2lkJylcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9hc3RNYW5hZ2VyIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gY2FsbGVkIHdpdGggdGhlIGB0aGlzLm5vdGlmeWAgZnVuY3Rpb24uXG4gICAgICovXG4gICAgYmluZE5vdGlmeTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIGNhbGxlZCB3aXRoIHRoZSBgdGhpcy5yZW1vdmVgIGZ1bmN0aW9uLlxuICAgICAqL1xuICAgIGJpbmRSZW1vdmU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiBjYWxsZWQgd2l0aCB0aGUgYHRoaXMuZ2V0VG9hc3RzYCBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICBiaW5kR2V0VG9hc3RzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gY2FsbGVkIHdpdGggdGhlIGB0aGlzLmNsb3NlQWxsYCBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICBiaW5kQ2xvc2VBbGw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgfVxuXG4gIHN0YXRpYyBpZENvdW50ZXIgPSAwXG5cbiAgY29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpIHtcbiAgICBzdXBlcihwcm9wcywgY29udGV4dClcblxuICAgIHByb3BzLmJpbmROb3RpZnkodGhpcy5ub3RpZnkpXG4gICAgcHJvcHMuYmluZFJlbW92ZSh0aGlzLnJlbW92ZSlcbiAgICBwcm9wcy5iaW5kR2V0VG9hc3RzKHRoaXMuZ2V0VG9hc3RzKVxuICAgIHByb3BzLmJpbmRDbG9zZUFsbCh0aGlzLmNsb3NlQWxsKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRvYXN0czogW11cbiAgICB9XG4gIH1cblxuICBnZXRUb2FzdHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUudG9hc3RzXG4gIH1cblxuICBjbG9zZUFsbCA9ICgpID0+IHtcbiAgICB0aGlzLmdldFRvYXN0cygpLmZvckVhY2godG9hc3QgPT4gdG9hc3QuY2xvc2UoKSlcbiAgfVxuXG4gIHJlbW92ZSA9IGlkID0+IHtcbiAgICBmb3IgKGNvbnN0IHRvYXN0IG9mIHRoaXMuc3RhdGUudG9hc3RzKSB7XG4gICAgICAvLyBTaW5jZSB1bmlxdWUgSUQgaXMgc3RpbGwgYXBwZW5kZWQgdG8gYSBjdXN0b20gSUQsIHNraXAgdGhlIHVuaXF1ZSBJRCBhbmQgY2hlY2sgb25seSBwcmVmaXhcbiAgICAgIGlmIChTdHJpbmcodG9hc3QuaWQpLnN0YXJ0c1dpdGgoaWQpKSB7XG4gICAgICAgIHRoaXMuY2xvc2VUb2FzdCh0b2FzdC5pZClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBub3RpZnkgPSAodGl0bGUsIHNldHRpbmdzKSA9PiB7XG4gICAgLy8gSWYgdGhlcmUncyBhIGN1c3RvbSB0b2FzdCBJRCBwYXNzZWQsIGNsb3NlIGV4aXN0aW5nIHRvYXN0cyB3aXRoIHRoZSBzYW1lIGN1c3RvbSBJRFxuICAgIGlmIChoYXNDdXN0b21JZChzZXR0aW5ncykpIHtcbiAgICAgIHRoaXMucmVtb3ZlKHNldHRpbmdzLmlkKVxuICAgIH1cblxuICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5jcmVhdGVUb2FzdEluc3RhbmNlKHRpdGxlLCBzZXR0aW5ncylcblxuICAgIHRoaXMuc2V0U3RhdGUocHJldmlvdXNTdGF0ZSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0b2FzdHM6IFtpbnN0YW5jZSwgLi4ucHJldmlvdXNTdGF0ZS50b2FzdHNdXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiBpbnN0YW5jZVxuICB9XG5cbiAgY3JlYXRlVG9hc3RJbnN0YW5jZSA9ICh0aXRsZSwgc2V0dGluZ3MpID0+IHtcbiAgICBjb25zdCB1bmlxdWVJZCA9ICsrVG9hc3RNYW5hZ2VyLmlkQ291bnRlclxuICAgIGNvbnN0IGlkID0gaGFzQ3VzdG9tSWQoc2V0dGluZ3MpID8gYCR7c2V0dGluZ3MuaWR9LSR7dW5pcXVlSWR9YCA6IHVuaXF1ZUlkXG5cbiAgICByZXR1cm4ge1xuICAgICAgaWQsXG4gICAgICB0aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uOiBzZXR0aW5ncy5kZXNjcmlwdGlvbixcbiAgICAgIGhhc0Nsb3NlQnV0dG9uOiBzZXR0aW5ncy5oYXNDbG9zZUJ1dHRvbiB8fCB0cnVlLFxuICAgICAgZHVyYXRpb246IHNldHRpbmdzLmR1cmF0aW9uIHx8IDUsXG4gICAgICBjbG9zZTogKCkgPT4gdGhpcy5jbG9zZVRvYXN0KGlkKSxcbiAgICAgIGludGVudDogc2V0dGluZ3MuaW50ZW50XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgd2lsbCBzZXQgaXNTaG93biBvbiB0aGUgVG9hc3Qgd2hpY2ggd2lsbCBjbG9zZSB0aGUgdG9hc3QuXG4gICAqIEl0IHdvbid0IHJlbW92ZSB0aGUgdG9hc3QgdW50aWwgb25FeGl0ZWQgdHJpZ2dlcnMgb25SZW1vdmUuXG4gICAqL1xuICBjbG9zZVRvYXN0ID0gaWQgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUocHJldmlvdXNTdGF0ZSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0b2FzdHM6IHByZXZpb3VzU3RhdGUudG9hc3RzLm1hcCh0b2FzdCA9PiB7XG4gICAgICAgICAgaWYgKHRvYXN0LmlkID09PSBpZCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgLi4udG9hc3QsXG4gICAgICAgICAgICAgIGlzU2hvd246IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHRvYXN0XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJlbW92ZVRvYXN0ID0gaWQgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUocHJldmlvdXNTdGF0ZSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0b2FzdHM6IHByZXZpb3VzU3RhdGUudG9hc3RzLmZpbHRlcih0b2FzdCA9PiB0b2FzdC5pZCAhPT0gaWQpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXt3cmFwcGVyQ2xhc3N9PlxuICAgICAgICB7dGhpcy5zdGF0ZS50b2FzdHMubWFwKCh7IGlkLCBkZXNjcmlwdGlvbiwgLi4ucHJvcHMgfSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8VG9hc3Qga2V5PXtpZH0gb25SZW1vdmU9eygpID0+IHRoaXMucmVtb3ZlVG9hc3QoaWQpfSB7Li4ucHJvcHN9PlxuICAgICAgICAgICAgICB7ZGVzY3JpcHRpb259XG4gICAgICAgICAgICA8L1RvYXN0PlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICA8L3NwYW4+XG4gICAgKVxuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLFNBQVNDLEdBQVQsUUFBb0IsUUFBcEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsYUFBVCxRQUE4QixpQkFBOUI7QUFDQSxPQUFPQyxLQUFQ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