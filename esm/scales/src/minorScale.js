/**
 * Helper function to conform to 4 (px) minor scale.
 * @param {number} x — unitless number
 * @return {number} - unitless number
 * @example
 * minorScale(3) => 3*4 = 12
 * minorScale(1) => 1*4 = 4
 */
export default function minorScale(x) {
  if (!Number.isInteger(x)) {
    throw new TypeError("minorScale only accepts integers as input, instead ".concat(x, " was passed."));
  }

  return x * 4;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJtaW5vclNjYWxlIiwieCIsIk51bWJlciIsImlzSW50ZWdlciIsIlR5cGVFcnJvciJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zY2FsZXMvc3JjL21pbm9yU2NhbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gY29uZm9ybSB0byA0IChweCkgbWlub3Igc2NhbGUuXG4gKiBAcGFyYW0ge251bWJlcn0geCDigJQgdW5pdGxlc3MgbnVtYmVyXG4gKiBAcmV0dXJuIHtudW1iZXJ9IC0gdW5pdGxlc3MgbnVtYmVyXG4gKiBAZXhhbXBsZVxuICogbWlub3JTY2FsZSgzKSA9PiAzKjQgPSAxMlxuICogbWlub3JTY2FsZSgxKSA9PiAxKjQgPSA0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pbm9yU2NhbGUoeCkge1xuICBpZiAoIU51bWJlci5pc0ludGVnZXIoeCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgYG1pbm9yU2NhbGUgb25seSBhY2NlcHRzIGludGVnZXJzIGFzIGlucHV0LCBpbnN0ZWFkICR7eH0gd2FzIHBhc3NlZC5gXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHggKiA0XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFNBQVNBLFVBQVQsQ0FBb0JDLENBQXBCLEVBQXVCO0VBQ3BDLElBQUksQ0FBQ0MsTUFBTSxDQUFDQyxTQUFQLENBQWlCRixDQUFqQixDQUFMLEVBQTBCO0lBQ3hCLE1BQU0sSUFBSUcsU0FBSiw4REFDa0RILENBRGxELGtCQUFOO0VBR0Q7O0VBRUQsT0FBT0EsQ0FBQyxHQUFHLENBQVg7QUFDRCJ9