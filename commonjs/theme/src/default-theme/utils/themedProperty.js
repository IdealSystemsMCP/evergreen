"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/**
 * Helper function for theming.
 * @param {Object} object - an object with theme presets.
 * @param {Object} keyOrValue - the key for the object, or an actual value.
 * @return {*} the value of the object, or the `keyOrValue` itself.
 */
var themedProperty = function themedProperty(object, keyOrValue) {
  // Check if there is a preset in the collection for the property.
  if (Object.prototype.hasOwnProperty.call(object, keyOrValue)) {
    return object[keyOrValue];
  } // If there is no preset, simply return the property as is.


  return keyOrValue;
};

var _default = themedProperty;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJ0aGVtZWRQcm9wZXJ0eSIsIm9iamVjdCIsImtleU9yVmFsdWUiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvdGhlbWUvc3JjL2RlZmF1bHQtdGhlbWUvdXRpbHMvdGhlbWVkUHJvcGVydHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gZm9yIHRoZW1pbmcuXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IC0gYW4gb2JqZWN0IHdpdGggdGhlbWUgcHJlc2V0cy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBrZXlPclZhbHVlIC0gdGhlIGtleSBmb3IgdGhlIG9iamVjdCwgb3IgYW4gYWN0dWFsIHZhbHVlLlxuICogQHJldHVybiB7Kn0gdGhlIHZhbHVlIG9mIHRoZSBvYmplY3QsIG9yIHRoZSBga2V5T3JWYWx1ZWAgaXRzZWxmLlxuICovXG5jb25zdCB0aGVtZWRQcm9wZXJ0eSA9IChvYmplY3QsIGtleU9yVmFsdWUpID0+IHtcbiAgLy8gQ2hlY2sgaWYgdGhlcmUgaXMgYSBwcmVzZXQgaW4gdGhlIGNvbGxlY3Rpb24gZm9yIHRoZSBwcm9wZXJ0eS5cbiAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleU9yVmFsdWUpKSB7XG4gICAgcmV0dXJuIG9iamVjdFtrZXlPclZhbHVlXVxuICB9XG5cbiAgLy8gSWYgdGhlcmUgaXMgbm8gcHJlc2V0LCBzaW1wbHkgcmV0dXJuIHRoZSBwcm9wZXJ0eSBhcyBpcy5cbiAgcmV0dXJuIGtleU9yVmFsdWVcbn1cblxuZXhwb3J0IGRlZmF1bHQgdGhlbWVkUHJvcGVydHlcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsTUFBRCxFQUFTQyxVQUFULEVBQXdCO0VBQzdDO0VBQ0EsSUFBSUMsTUFBTSxDQUFDQyxTQUFQLENBQWlCQyxjQUFqQixDQUFnQ0MsSUFBaEMsQ0FBcUNMLE1BQXJDLEVBQTZDQyxVQUE3QyxDQUFKLEVBQThEO0lBQzVELE9BQU9ELE1BQU0sQ0FBQ0MsVUFBRCxDQUFiO0VBQ0QsQ0FKNEMsQ0FNN0M7OztFQUNBLE9BQU9BLFVBQVA7QUFDRCxDQVJEOztlQVVlRixjIn0=