"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _themer = require("../../../../themer");

var _memoizeClassName = _interopRequireDefault(require("../utils/memoizeClassName"));

var interactiveAppearance = _themer.Themer.createBadgeAppearance({
  base: {},
  hover: {
    opacity: 0.8
  }
});
/**
 * Get the appearance of an interactive `Badge`.
 * @param {string} appearance - the appearance name
 * @return {string} the appearance object.
 */


var getBadgeAppearance = function getBadgeAppearance(appearance) {
  switch (appearance) {
    case 'interactive':
      return interactiveAppearance;

    default:
      return undefined;
  }
};
/**
 * Get the className of a `Badge`.
 * @param {string} appearance - the appearance name
 * @return {string} the appearance class name.
 */


var _default = (0, _memoizeClassName["default"])(getBadgeAppearance);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJpbnRlcmFjdGl2ZUFwcGVhcmFuY2UiLCJUaGVtZXIiLCJjcmVhdGVCYWRnZUFwcGVhcmFuY2UiLCJiYXNlIiwiaG92ZXIiLCJvcGFjaXR5IiwiZ2V0QmFkZ2VBcHBlYXJhbmNlIiwiYXBwZWFyYW5jZSIsInVuZGVmaW5lZCIsIm1lbW9pemVDbGFzc05hbWUiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvdGhlbWUvc3JjL2RlZmF1bHQtdGhlbWUvY29tcG9uZW50LXNwZWNpZmljL2dldEJhZGdlQ2xhc3NOYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRoZW1lciB9IGZyb20gJy4uLy4uLy4uLy4uL3RoZW1lcidcbmltcG9ydCBtZW1vaXplQ2xhc3NOYW1lIGZyb20gJy4uL3V0aWxzL21lbW9pemVDbGFzc05hbWUnXG5cbmNvbnN0IGludGVyYWN0aXZlQXBwZWFyYW5jZSA9IFRoZW1lci5jcmVhdGVCYWRnZUFwcGVhcmFuY2Uoe1xuICBiYXNlOiB7fSxcbiAgaG92ZXI6IHtcbiAgICBvcGFjaXR5OiAwLjhcbiAgfVxufSlcblxuLyoqXG4gKiBHZXQgdGhlIGFwcGVhcmFuY2Ugb2YgYW4gaW50ZXJhY3RpdmUgYEJhZGdlYC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBhcHBlYXJhbmNlIC0gdGhlIGFwcGVhcmFuY2UgbmFtZVxuICogQHJldHVybiB7c3RyaW5nfSB0aGUgYXBwZWFyYW5jZSBvYmplY3QuXG4gKi9cbmNvbnN0IGdldEJhZGdlQXBwZWFyYW5jZSA9IGFwcGVhcmFuY2UgPT4ge1xuICBzd2l0Y2ggKGFwcGVhcmFuY2UpIHtcbiAgICBjYXNlICdpbnRlcmFjdGl2ZSc6XG4gICAgICByZXR1cm4gaW50ZXJhY3RpdmVBcHBlYXJhbmNlXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxufVxuXG4vKipcbiAqIEdldCB0aGUgY2xhc3NOYW1lIG9mIGEgYEJhZGdlYC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBhcHBlYXJhbmNlIC0gdGhlIGFwcGVhcmFuY2UgbmFtZVxuICogQHJldHVybiB7c3RyaW5nfSB0aGUgYXBwZWFyYW5jZSBjbGFzcyBuYW1lLlxuICovXG5leHBvcnQgZGVmYXVsdCBtZW1vaXplQ2xhc3NOYW1lKGdldEJhZGdlQXBwZWFyYW5jZSlcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUEsSUFBTUEscUJBQXFCLEdBQUdDLGNBQUEsQ0FBT0MscUJBQVAsQ0FBNkI7RUFDekRDLElBQUksRUFBRSxFQURtRDtFQUV6REMsS0FBSyxFQUFFO0lBQ0xDLE9BQU8sRUFBRTtFQURKO0FBRmtELENBQTdCLENBQTlCO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFBQyxVQUFVLEVBQUk7RUFDdkMsUUFBUUEsVUFBUjtJQUNFLEtBQUssYUFBTDtNQUNFLE9BQU9QLHFCQUFQOztJQUNGO01BQ0UsT0FBT1EsU0FBUDtFQUpKO0FBTUQsQ0FQRDtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztlQUNlLElBQUFDLDRCQUFBLEVBQWlCSCxrQkFBakIsQyJ9