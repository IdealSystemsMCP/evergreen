import tinycolor from 'tinycolor2';
import { Themer } from '../../../../themer';
import memoizeClassName from '../utils/memoizeClassName';
import scales from '../foundational-styles/scales';
import palette from '../foundational-styles/palette';
var Appearances = {};
Appearances["default"] = Themer.createRowAppearance({
  base: {
    color: palette.neutral.base
  },
  hover: {
    backgroundColor: scales.neutral.N1A
  },
  focus: {
    backgroundColor: scales.blue.B1A
  },
  active: {
    backgroundColor: scales.blue.B2A
  },
  current: {}
});
Appearances.danger = Themer.createRowAppearance({
  base: {
    backgroundColor: palette.red.lightest
  },
  hover: {
    backgroundColor: tinycolor(palette.red.lightest).darken(1).toString()
  },
  focus: {
    backgroundColor: tinycolor(palette.red.lightest).darken(1.5).toString()
  },
  active: {
    backgroundColor: tinycolor(palette.red.lightest).darken(2.2).toString()
  },
  current: {}
});
Appearances.warning = Themer.createRowAppearance({
  base: {
    backgroundColor: palette.orange.lightest
  },
  hover: {
    backgroundColor: tinycolor(palette.orange.lightest).darken(1).toString()
  },
  focus: {
    backgroundColor: tinycolor(palette.orange.lightest).darken(1.5).toString()
  },
  active: {
    backgroundColor: tinycolor(palette.orange.lightest).darken(2.5).toString()
  },
  current: {}
});
Appearances.success = Themer.createRowAppearance({
  base: {
    backgroundColor: palette.green.lightest
  },
  hover: {
    backgroundColor: tinycolor(palette.green.lightest).darken(1).toString()
  },
  focus: {
    backgroundColor: tinycolor(palette.green.lightest).darken(2).toString()
  },
  active: {
    backgroundColor: tinycolor(palette.green.lightest).darken(3).toString()
  },
  current: {}
});
/**
 * Get the appearance of a `Row`.
 * @param {string} appearance — only one default appearance.
 * @param {string} intent - none, info, success, warning, danger.
 * @return {string} the appearance object.
 */

var getRowAppearance = function getRowAppearance(appearance, intent) {
  switch (intent) {
    case 'danger':
      return Appearances.danger;

    case 'warning':
      return Appearances.warning;

    case 'success':
      return Appearances.success;

    case 'none':
    default:
      return Appearances["default"];
  }
};
/**
 * Get the className of a `Row`.
 * @param {string} appearance
 * @return {string} the appearance class name.
 */


export default memoizeClassName(getRowAppearance);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJ0aW55Y29sb3IiLCJUaGVtZXIiLCJtZW1vaXplQ2xhc3NOYW1lIiwic2NhbGVzIiwicGFsZXR0ZSIsIkFwcGVhcmFuY2VzIiwiY3JlYXRlUm93QXBwZWFyYW5jZSIsImJhc2UiLCJjb2xvciIsIm5ldXRyYWwiLCJob3ZlciIsImJhY2tncm91bmRDb2xvciIsIk4xQSIsImZvY3VzIiwiYmx1ZSIsIkIxQSIsImFjdGl2ZSIsIkIyQSIsImN1cnJlbnQiLCJkYW5nZXIiLCJyZWQiLCJsaWdodGVzdCIsImRhcmtlbiIsInRvU3RyaW5nIiwid2FybmluZyIsIm9yYW5nZSIsInN1Y2Nlc3MiLCJncmVlbiIsImdldFJvd0FwcGVhcmFuY2UiLCJhcHBlYXJhbmNlIiwiaW50ZW50Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3RoZW1lL3NyYy9kZWZhdWx0LXRoZW1lL2NvbXBvbmVudC1zcGVjaWZpYy9nZXRSb3dDbGFzc05hbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRpbnljb2xvciBmcm9tICd0aW55Y29sb3IyJ1xuaW1wb3J0IHsgVGhlbWVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vdGhlbWVyJ1xuaW1wb3J0IG1lbW9pemVDbGFzc05hbWUgZnJvbSAnLi4vdXRpbHMvbWVtb2l6ZUNsYXNzTmFtZSdcbmltcG9ydCBzY2FsZXMgZnJvbSAnLi4vZm91bmRhdGlvbmFsLXN0eWxlcy9zY2FsZXMnXG5pbXBvcnQgcGFsZXR0ZSBmcm9tICcuLi9mb3VuZGF0aW9uYWwtc3R5bGVzL3BhbGV0dGUnXG5cbmNvbnN0IEFwcGVhcmFuY2VzID0ge31cblxuQXBwZWFyYW5jZXMuZGVmYXVsdCA9IFRoZW1lci5jcmVhdGVSb3dBcHBlYXJhbmNlKHtcbiAgYmFzZToge1xuICAgIGNvbG9yOiBwYWxldHRlLm5ldXRyYWwuYmFzZVxuICB9LFxuXG4gIGhvdmVyOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBzY2FsZXMubmV1dHJhbC5OMUFcbiAgfSxcblxuICBmb2N1czoge1xuICAgIGJhY2tncm91bmRDb2xvcjogc2NhbGVzLmJsdWUuQjFBXG4gIH0sXG5cbiAgYWN0aXZlOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBzY2FsZXMuYmx1ZS5CMkFcbiAgfSxcblxuICBjdXJyZW50OiB7fVxufSlcblxuQXBwZWFyYW5jZXMuZGFuZ2VyID0gVGhlbWVyLmNyZWF0ZVJvd0FwcGVhcmFuY2Uoe1xuICBiYXNlOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBwYWxldHRlLnJlZC5saWdodGVzdFxuICB9LFxuXG4gIGhvdmVyOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiB0aW55Y29sb3IocGFsZXR0ZS5yZWQubGlnaHRlc3QpXG4gICAgICAuZGFya2VuKDEpXG4gICAgICAudG9TdHJpbmcoKVxuICB9LFxuXG4gIGZvY3VzOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiB0aW55Y29sb3IocGFsZXR0ZS5yZWQubGlnaHRlc3QpXG4gICAgICAuZGFya2VuKDEuNSlcbiAgICAgIC50b1N0cmluZygpXG4gIH0sXG5cbiAgYWN0aXZlOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiB0aW55Y29sb3IocGFsZXR0ZS5yZWQubGlnaHRlc3QpXG4gICAgICAuZGFya2VuKDIuMilcbiAgICAgIC50b1N0cmluZygpXG4gIH0sXG5cbiAgY3VycmVudDoge31cbn0pXG5cbkFwcGVhcmFuY2VzLndhcm5pbmcgPSBUaGVtZXIuY3JlYXRlUm93QXBwZWFyYW5jZSh7XG4gIGJhc2U6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHBhbGV0dGUub3JhbmdlLmxpZ2h0ZXN0XG4gIH0sXG5cbiAgaG92ZXI6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRpbnljb2xvcihwYWxldHRlLm9yYW5nZS5saWdodGVzdClcbiAgICAgIC5kYXJrZW4oMSlcbiAgICAgIC50b1N0cmluZygpXG4gIH0sXG5cbiAgZm9jdXM6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRpbnljb2xvcihwYWxldHRlLm9yYW5nZS5saWdodGVzdClcbiAgICAgIC5kYXJrZW4oMS41KVxuICAgICAgLnRvU3RyaW5nKClcbiAgfSxcblxuICBhY3RpdmU6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRpbnljb2xvcihwYWxldHRlLm9yYW5nZS5saWdodGVzdClcbiAgICAgIC5kYXJrZW4oMi41KVxuICAgICAgLnRvU3RyaW5nKClcbiAgfSxcblxuICBjdXJyZW50OiB7fVxufSlcblxuQXBwZWFyYW5jZXMuc3VjY2VzcyA9IFRoZW1lci5jcmVhdGVSb3dBcHBlYXJhbmNlKHtcbiAgYmFzZToge1xuICAgIGJhY2tncm91bmRDb2xvcjogcGFsZXR0ZS5ncmVlbi5saWdodGVzdFxuICB9LFxuXG4gIGhvdmVyOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiB0aW55Y29sb3IocGFsZXR0ZS5ncmVlbi5saWdodGVzdClcbiAgICAgIC5kYXJrZW4oMSlcbiAgICAgIC50b1N0cmluZygpXG4gIH0sXG5cbiAgZm9jdXM6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRpbnljb2xvcihwYWxldHRlLmdyZWVuLmxpZ2h0ZXN0KVxuICAgICAgLmRhcmtlbigyKVxuICAgICAgLnRvU3RyaW5nKClcbiAgfSxcblxuICBhY3RpdmU6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRpbnljb2xvcihwYWxldHRlLmdyZWVuLmxpZ2h0ZXN0KVxuICAgICAgLmRhcmtlbigzKVxuICAgICAgLnRvU3RyaW5nKClcbiAgfSxcblxuICBjdXJyZW50OiB7fVxufSlcblxuLyoqXG4gKiBHZXQgdGhlIGFwcGVhcmFuY2Ugb2YgYSBgUm93YC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBhcHBlYXJhbmNlIOKAlCBvbmx5IG9uZSBkZWZhdWx0IGFwcGVhcmFuY2UuXG4gKiBAcGFyYW0ge3N0cmluZ30gaW50ZW50IC0gbm9uZSwgaW5mbywgc3VjY2Vzcywgd2FybmluZywgZGFuZ2VyLlxuICogQHJldHVybiB7c3RyaW5nfSB0aGUgYXBwZWFyYW5jZSBvYmplY3QuXG4gKi9cbmNvbnN0IGdldFJvd0FwcGVhcmFuY2UgPSAoYXBwZWFyYW5jZSwgaW50ZW50KSA9PiB7XG4gIHN3aXRjaCAoaW50ZW50KSB7XG4gICAgY2FzZSAnZGFuZ2VyJzpcbiAgICAgIHJldHVybiBBcHBlYXJhbmNlcy5kYW5nZXJcbiAgICBjYXNlICd3YXJuaW5nJzpcbiAgICAgIHJldHVybiBBcHBlYXJhbmNlcy53YXJuaW5nXG4gICAgY2FzZSAnc3VjY2Vzcyc6XG4gICAgICByZXR1cm4gQXBwZWFyYW5jZXMuc3VjY2Vzc1xuICAgIGNhc2UgJ25vbmUnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gQXBwZWFyYW5jZXMuZGVmYXVsdFxuICB9XG59XG5cbi8qKlxuICogR2V0IHRoZSBjbGFzc05hbWUgb2YgYSBgUm93YC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBhcHBlYXJhbmNlXG4gKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBhcHBlYXJhbmNlIGNsYXNzIG5hbWUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IG1lbW9pemVDbGFzc05hbWUoZ2V0Um93QXBwZWFyYW5jZSlcbiJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLE1BQVQsUUFBdUIsb0JBQXZCO0FBQ0EsT0FBT0MsZ0JBQVAsTUFBNkIsMkJBQTdCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQiwrQkFBbkI7QUFDQSxPQUFPQyxPQUFQLE1BQW9CLGdDQUFwQjtBQUVBLElBQU1DLFdBQVcsR0FBRyxFQUFwQjtBQUVBQSxXQUFXLFdBQVgsR0FBc0JKLE1BQU0sQ0FBQ0ssbUJBQVAsQ0FBMkI7RUFDL0NDLElBQUksRUFBRTtJQUNKQyxLQUFLLEVBQUVKLE9BQU8sQ0FBQ0ssT0FBUixDQUFnQkY7RUFEbkIsQ0FEeUM7RUFLL0NHLEtBQUssRUFBRTtJQUNMQyxlQUFlLEVBQUVSLE1BQU0sQ0FBQ00sT0FBUCxDQUFlRztFQUQzQixDQUx3QztFQVMvQ0MsS0FBSyxFQUFFO0lBQ0xGLGVBQWUsRUFBRVIsTUFBTSxDQUFDVyxJQUFQLENBQVlD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