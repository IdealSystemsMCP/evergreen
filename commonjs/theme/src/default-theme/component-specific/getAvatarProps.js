"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fills = _interopRequireDefault(require("../foundational-styles/fills"));

/**
 * @param {boolean} isSolid
 * @param {string} color — automatic or actual color
 * @param {number} hashValue
 * @return {Object} { color, backgroundColor }
 */
var getAvatarProps = function getAvatarProps(_ref) {
  var isSolid = _ref.isSolid,
      color = _ref.color,
      hashValue = _ref.hashValue;
  var appearances = _fills["default"][isSolid ? 'solid' : 'subtle'];

  if (color === 'automatic') {
    var keys = Object.keys(appearances);
    var key = keys[hashValue % keys.length];
    return appearances[key];
  }

  return appearances[color];
};

var _default = getAvatarProps;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJnZXRBdmF0YXJQcm9wcyIsImlzU29saWQiLCJjb2xvciIsImhhc2hWYWx1ZSIsImFwcGVhcmFuY2VzIiwiZmlsbHMiLCJrZXlzIiwiT2JqZWN0Iiwia2V5IiwibGVuZ3RoIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3RoZW1lL3NyYy9kZWZhdWx0LXRoZW1lL2NvbXBvbmVudC1zcGVjaWZpYy9nZXRBdmF0YXJQcm9wcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmlsbHMgZnJvbSAnLi4vZm91bmRhdGlvbmFsLXN0eWxlcy9maWxscydcblxuLyoqXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzU29saWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvciDigJQgYXV0b21hdGljIG9yIGFjdHVhbCBjb2xvclxuICogQHBhcmFtIHtudW1iZXJ9IGhhc2hWYWx1ZVxuICogQHJldHVybiB7T2JqZWN0fSB7IGNvbG9yLCBiYWNrZ3JvdW5kQ29sb3IgfVxuICovXG5jb25zdCBnZXRBdmF0YXJQcm9wcyA9ICh7IGlzU29saWQsIGNvbG9yLCBoYXNoVmFsdWUgfSkgPT4ge1xuICBjb25zdCBhcHBlYXJhbmNlcyA9IGZpbGxzW2lzU29saWQgPyAnc29saWQnIDogJ3N1YnRsZSddXG5cbiAgaWYgKGNvbG9yID09PSAnYXV0b21hdGljJykge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhhcHBlYXJhbmNlcylcbiAgICBjb25zdCBrZXkgPSBrZXlzW2hhc2hWYWx1ZSAlIGtleXMubGVuZ3RoXVxuICAgIHJldHVybiBhcHBlYXJhbmNlc1trZXldXG4gIH1cblxuICByZXR1cm4gYXBwZWFyYW5jZXNbY29sb3JdXG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldEF2YXRhclByb3BzXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsT0FBbUM7RUFBQSxJQUFoQ0MsT0FBZ0MsUUFBaENBLE9BQWdDO0VBQUEsSUFBdkJDLEtBQXVCLFFBQXZCQSxLQUF1QjtFQUFBLElBQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7RUFDeEQsSUFBTUMsV0FBVyxHQUFHQyxpQkFBQSxDQUFNSixPQUFPLEdBQUcsT0FBSCxHQUFhLFFBQTFCLENBQXBCOztFQUVBLElBQUlDLEtBQUssS0FBSyxXQUFkLEVBQTJCO0lBQ3pCLElBQU1JLElBQUksR0FBR0MsTUFBTSxDQUFDRCxJQUFQLENBQVlGLFdBQVosQ0FBYjtJQUNBLElBQU1JLEdBQUcsR0FBR0YsSUFBSSxDQUFDSCxTQUFTLEdBQUdHLElBQUksQ0FBQ0csTUFBbEIsQ0FBaEI7SUFDQSxPQUFPTCxXQUFXLENBQUNJLEdBQUQsQ0FBbEI7RUFDRDs7RUFFRCxPQUFPSixXQUFXLENBQUNGLEtBQUQsQ0FBbEI7QUFDRCxDQVZEOztlQVllRixjIn0=