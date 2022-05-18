"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _createAppearance = _interopRequireDefault(require("./createAppearance"));

var _missingStateWarning = _interopRequireDefault(require("./missingStateWarning"));

var focusState = '&[data-isselectable="true"]:focus, &[aria-expanded="true"][aria-haspopup="true"]';
/**
 * @param {object} items - object with a set of states.
 * @return {object} the final appearance.
 */

var createTableCellAppearance = function createTableCellAppearance() {
  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  (0, _missingStateWarning["default"])({
    items: items,
    props: ['focus'],
    cb: function cb(prop) {
      console.error("Themer.createTableCellAppearance() is missing a ".concat(prop, " item"), items);
    }
  });
  return (0, _defineProperty2["default"])({}, focusState, (0, _createAppearance["default"])(items.focus));
};

var _default = createTableCellAppearance;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJmb2N1c1N0YXRlIiwiY3JlYXRlVGFibGVDZWxsQXBwZWFyYW5jZSIsIml0ZW1zIiwibWlzc2luZ1N0YXRlV2FybmluZyIsInByb3BzIiwiY2IiLCJwcm9wIiwiY29uc29sZSIsImVycm9yIiwiY3JlYXRlQXBwZWFyYW5jZSIsImZvY3VzIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3RoZW1lci9zcmMvY3JlYXRlVGFibGVDZWxsQXBwZWFyYW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlQXBwZWFyYW5jZSBmcm9tICcuL2NyZWF0ZUFwcGVhcmFuY2UnXG5pbXBvcnQgbWlzc2luZ1N0YXRlV2FybmluZyBmcm9tICcuL21pc3NpbmdTdGF0ZVdhcm5pbmcnXG5cbmNvbnN0IGZvY3VzU3RhdGUgPVxuICAnJltkYXRhLWlzc2VsZWN0YWJsZT1cInRydWVcIl06Zm9jdXMsICZbYXJpYS1leHBhbmRlZD1cInRydWVcIl1bYXJpYS1oYXNwb3B1cD1cInRydWVcIl0nXG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IGl0ZW1zIC0gb2JqZWN0IHdpdGggYSBzZXQgb2Ygc3RhdGVzLlxuICogQHJldHVybiB7b2JqZWN0fSB0aGUgZmluYWwgYXBwZWFyYW5jZS5cbiAqL1xuY29uc3QgY3JlYXRlVGFibGVDZWxsQXBwZWFyYW5jZSA9IChpdGVtcyA9IHt9KSA9PiB7XG4gIG1pc3NpbmdTdGF0ZVdhcm5pbmcoe1xuICAgIGl0ZW1zLFxuICAgIHByb3BzOiBbJ2ZvY3VzJ10sXG4gICAgY2I6IHByb3AgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgYFRoZW1lci5jcmVhdGVUYWJsZUNlbGxBcHBlYXJhbmNlKCkgaXMgbWlzc2luZyBhICR7cHJvcH0gaXRlbWAsXG4gICAgICAgIGl0ZW1zXG4gICAgICApXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgW2ZvY3VzU3RhdGVdOiBjcmVhdGVBcHBlYXJhbmNlKGl0ZW1zLmZvY3VzKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRhYmxlQ2VsbEFwcGVhcmFuY2VcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQ2Qsa0ZBREY7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQyx5QkFBeUIsR0FBRyxTQUE1QkEseUJBQTRCLEdBQWdCO0VBQUEsSUFBZkMsS0FBZSx1RUFBUCxFQUFPO0VBQ2hELElBQUFDLCtCQUFBLEVBQW9CO0lBQ2xCRCxLQUFLLEVBQUxBLEtBRGtCO0lBRWxCRSxLQUFLLEVBQUUsQ0FBQyxPQUFELENBRlc7SUFHbEJDLEVBQUUsRUFBRSxZQUFBQyxJQUFJLEVBQUk7TUFDVkMsT0FBTyxDQUFDQyxLQUFSLDJEQUNxREYsSUFEckQsWUFFRUosS0FGRjtJQUlEO0VBUmlCLENBQXBCO0VBV0EsNENBQ0dGLFVBREgsRUFDZ0IsSUFBQVMsNEJBQUEsRUFBaUJQLEtBQUssQ0FBQ1EsS0FBdkIsQ0FEaEI7QUFHRCxDQWZEOztlQWlCZVQseUIifQ==