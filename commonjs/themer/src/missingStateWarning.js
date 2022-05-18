"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _isDev = _interopRequireDefault(require("./isDev"));

var _hasOwnProperty = _interopRequireDefault(require("./hasOwnProperty"));

function missingStateWarning(_ref) {
  var items = _ref.items,
      props = _ref.props,
      cb = _ref.cb;
  if (!_isDev["default"]) return;
  props.forEach(function (prop) {
    if (!(0, _hasOwnProperty["default"])(items, prop)) {
      cb(prop);
    }
  });
}

var _default = missingStateWarning;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJtaXNzaW5nU3RhdGVXYXJuaW5nIiwiaXRlbXMiLCJwcm9wcyIsImNiIiwiaXNEZXYiLCJmb3JFYWNoIiwicHJvcCIsImhhc093blByb3BlcnR5Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3RoZW1lci9zcmMvbWlzc2luZ1N0YXRlV2FybmluZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaXNEZXYgZnJvbSAnLi9pc0RldidcbmltcG9ydCBoYXNPd25Qcm9wZXJ0eSBmcm9tICcuL2hhc093blByb3BlcnR5J1xuXG5mdW5jdGlvbiBtaXNzaW5nU3RhdGVXYXJuaW5nKHsgaXRlbXMsIHByb3BzLCBjYiB9KSB7XG4gIGlmICghaXNEZXYpIHJldHVyblxuICBwcm9wcy5mb3JFYWNoKHByb3AgPT4ge1xuICAgIGlmICghaGFzT3duUHJvcGVydHkoaXRlbXMsIHByb3ApKSB7XG4gICAgICBjYihwcm9wKVxuICAgIH1cbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWlzc2luZ1N0YXRlV2FybmluZ1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQSxTQUFTQSxtQkFBVCxPQUFtRDtFQUFBLElBQXBCQyxLQUFvQixRQUFwQkEsS0FBb0I7RUFBQSxJQUFiQyxLQUFhLFFBQWJBLEtBQWE7RUFBQSxJQUFOQyxFQUFNLFFBQU5BLEVBQU07RUFDakQsSUFBSSxDQUFDQyxpQkFBTCxFQUFZO0VBQ1pGLEtBQUssQ0FBQ0csT0FBTixDQUFjLFVBQUFDLElBQUksRUFBSTtJQUNwQixJQUFJLENBQUMsSUFBQUMsMEJBQUEsRUFBZU4sS0FBZixFQUFzQkssSUFBdEIsQ0FBTCxFQUFrQztNQUNoQ0gsRUFBRSxDQUFDRyxJQUFELENBQUY7SUFDRDtFQUNGLENBSkQ7QUFLRDs7ZUFFY04sbUIifQ==