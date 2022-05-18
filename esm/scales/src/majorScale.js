/**
 * Helper function to conform to 8 (px) major scale.
 * @param {number} x — unitless number
 * @return {number} - unitless number
 * @example
 * majorScale(2) => 2*8 = 16
 * majorScale(4) => 4*8 = 32
 */
export default function majorScale(x) {
  if (!Number.isInteger(x)) {
    throw new TypeError("majorScale only accepts integers as input, instead ".concat(x, " was passed."));
  }

  return x * 8;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJtYWpvclNjYWxlIiwieCIsIk51bWJlciIsImlzSW50ZWdlciIsIlR5cGVFcnJvciJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zY2FsZXMvc3JjL21ham9yU2NhbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gY29uZm9ybSB0byA4IChweCkgbWFqb3Igc2NhbGUuXG4gKiBAcGFyYW0ge251bWJlcn0geCDigJQgdW5pdGxlc3MgbnVtYmVyXG4gKiBAcmV0dXJuIHtudW1iZXJ9IC0gdW5pdGxlc3MgbnVtYmVyXG4gKiBAZXhhbXBsZVxuICogbWFqb3JTY2FsZSgyKSA9PiAyKjggPSAxNlxuICogbWFqb3JTY2FsZSg0KSA9PiA0KjggPSAzMlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWpvclNjYWxlKHgpIHtcbiAgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKHgpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgIGBtYWpvclNjYWxlIG9ubHkgYWNjZXB0cyBpbnRlZ2VycyBhcyBpbnB1dCwgaW5zdGVhZCAke3h9IHdhcyBwYXNzZWQuYFxuICAgIClcbiAgfVxuXG4gIHJldHVybiB4ICogOFxufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxTQUFTQSxVQUFULENBQW9CQyxDQUFwQixFQUF1QjtFQUNwQyxJQUFJLENBQUNDLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQkYsQ0FBakIsQ0FBTCxFQUEwQjtJQUN4QixNQUFNLElBQUlHLFNBQUosOERBQ2tESCxDQURsRCxrQkFBTjtFQUdEOztFQUVELE9BQU9BLENBQUMsR0FBRyxDQUFYO0FBQ0QifQ==