import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { Themer } from '../../../../themer';
import memoizeClassName from '../utils/memoizeClassName';
import scales from '../foundational-styles/scales';
import { getTextColorForIntent, getPrimaryButtonStylesForIntent } from '../helpers';
import { defaultControlStyles } from '../shared';
/**
 * Disabled styles are all the same for all buttons.
 */

var disabled = defaultControlStyles.disabled;
/**
 * Get button appearance.
 * @param {string} appearance - default, primary, minimal.
 * @param {string} intent - none, success, warning, danger.
 * @return {Object} the appearance of the button.
 */

var getButtonAppearance = function getButtonAppearance(appearance, intent) {
  switch (appearance) {
    case 'primary':
      {
        var _getPrimaryButtonStyl = getPrimaryButtonStylesForIntent(intent),
            linearGradient = _getPrimaryButtonStyl.linearGradient,
            focusColor = _getPrimaryButtonStyl.focusColor;

        return Themer.createButtonAppearance({
          disabled: disabled,
          base: {
            color: 'white',
            backgroundColor: 'white',
            backgroundImage: linearGradient.base,
            boxShadow: "inset 0 0 0 1px ".concat(scales.neutral.N5A, ", inset 0 -1px 1px 0 ").concat(scales.neutral.N2A)
          },
          hover: {
            backgroundImage: linearGradient.hover
          },
          focus: {
            boxShadow: "0 0 0 3px ".concat(focusColor, ", inset 0 0 0 1px ").concat(scales.neutral.N4A, ", inset 0 -1px 1px 0 ").concat(scales.neutral.N5A)
          },
          active: {
            backgroundImage: linearGradient.active,
            boxShadow: "inset 0 0 0 1px ".concat(scales.neutral.N4A, ", inset 0 1px 1px 0 ").concat(scales.neutral.N2A)
          },
          focusAndActive: {
            boxShadow: "0 0 0 3px ".concat(focusColor, ", inset 0 0 0 1px ").concat(scales.neutral.N4A, ", inset 0 1px 1px 0 ").concat(scales.neutral.N2A)
          }
        });
      }

    case 'minimal':
      {
        var intentTextColor = getTextColorForIntent(intent, scales.blue.B9);
        return Themer.createButtonAppearance({
          disabled: disabled,
          base: {
            color: intentTextColor,
            backgroundColor: 'transparent'
          },
          hover: {
            backgroundColor: scales.neutral.N2A
          },
          focus: {
            boxShadow: "0 0 0 3px ".concat(scales.blue.B5A)
          },
          active: {
            backgroundImage: 'none',
            backgroundColor: scales.blue.B3A
          },
          focusAndActive: {}
        });
      }

    case 'default':
    default:
      {
        var _intentTextColor = getTextColorForIntent(intent);

        return Themer.createButtonAppearance({
          disabled: disabled,
          base: _objectSpread({
            color: _intentTextColor
          }, defaultControlStyles.base),
          hover: defaultControlStyles.hover,
          focus: defaultControlStyles.focus,
          active: defaultControlStyles.active,
          focusAndActive: defaultControlStyles.focusAndActive
        });
      }
  }
};
/**
 * Get the className of a `Button`|`IconButton`.
 * @param {string} appearance - default, primary, minimal.
 * @param {Intent} intent - none, success, warning, danger.
 * @return {string} the appearance class name.
 */


export default memoizeClassName(getButtonAppearance);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJUaGVtZXIiLCJtZW1vaXplQ2xhc3NOYW1lIiwic2NhbGVzIiwiZ2V0VGV4dENvbG9yRm9ySW50ZW50IiwiZ2V0UHJpbWFyeUJ1dHRvblN0eWxlc0ZvckludGVudCIsImRlZmF1bHRDb250cm9sU3R5bGVzIiwiZGlzYWJsZWQiLCJnZXRCdXR0b25BcHBlYXJhbmNlIiwiYXBwZWFyYW5jZSIsImludGVudCIsImxpbmVhckdyYWRpZW50IiwiZm9jdXNDb2xvciIsImNyZWF0ZUJ1dHRvbkFwcGVhcmFuY2UiLCJiYXNlIiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJib3hTaGFkb3ciLCJuZXV0cmFsIiwiTjVBIiwiTjJBIiwiaG92ZXIiLCJmb2N1cyIsIk40QSIsImFjdGl2ZSIsImZvY3VzQW5kQWN0aXZlIiwiaW50ZW50VGV4dENvbG9yIiwiYmx1ZSIsIkI5IiwiQjVBIiwiQjNBIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3RoZW1lL3NyYy9kZWZhdWx0LXRoZW1lL2NvbXBvbmVudC1zcGVjaWZpYy9nZXRCdXR0b25DbGFzc05hbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGhlbWVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vdGhlbWVyJ1xuaW1wb3J0IG1lbW9pemVDbGFzc05hbWUgZnJvbSAnLi4vdXRpbHMvbWVtb2l6ZUNsYXNzTmFtZSdcbmltcG9ydCBzY2FsZXMgZnJvbSAnLi4vZm91bmRhdGlvbmFsLXN0eWxlcy9zY2FsZXMnXG5pbXBvcnQge1xuICBnZXRUZXh0Q29sb3JGb3JJbnRlbnQsXG4gIGdldFByaW1hcnlCdXR0b25TdHlsZXNGb3JJbnRlbnRcbn0gZnJvbSAnLi4vaGVscGVycydcbmltcG9ydCB7IGRlZmF1bHRDb250cm9sU3R5bGVzIH0gZnJvbSAnLi4vc2hhcmVkJ1xuXG4vKipcbiAqIERpc2FibGVkIHN0eWxlcyBhcmUgYWxsIHRoZSBzYW1lIGZvciBhbGwgYnV0dG9ucy5cbiAqL1xuY29uc3QgeyBkaXNhYmxlZCB9ID0gZGVmYXVsdENvbnRyb2xTdHlsZXNcblxuLyoqXG4gKiBHZXQgYnV0dG9uIGFwcGVhcmFuY2UuXG4gKiBAcGFyYW0ge3N0cmluZ30gYXBwZWFyYW5jZSAtIGRlZmF1bHQsIHByaW1hcnksIG1pbmltYWwuXG4gKiBAcGFyYW0ge3N0cmluZ30gaW50ZW50IC0gbm9uZSwgc3VjY2Vzcywgd2FybmluZywgZGFuZ2VyLlxuICogQHJldHVybiB7T2JqZWN0fSB0aGUgYXBwZWFyYW5jZSBvZiB0aGUgYnV0dG9uLlxuICovXG5jb25zdCBnZXRCdXR0b25BcHBlYXJhbmNlID0gKGFwcGVhcmFuY2UsIGludGVudCkgPT4ge1xuICBzd2l0Y2ggKGFwcGVhcmFuY2UpIHtcbiAgICBjYXNlICdwcmltYXJ5Jzoge1xuICAgICAgY29uc3QgeyBsaW5lYXJHcmFkaWVudCwgZm9jdXNDb2xvciB9ID0gZ2V0UHJpbWFyeUJ1dHRvblN0eWxlc0ZvckludGVudChcbiAgICAgICAgaW50ZW50XG4gICAgICApXG4gICAgICByZXR1cm4gVGhlbWVyLmNyZWF0ZUJ1dHRvbkFwcGVhcmFuY2Uoe1xuICAgICAgICBkaXNhYmxlZCxcbiAgICAgICAgYmFzZToge1xuICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGxpbmVhckdyYWRpZW50LmJhc2UsXG4gICAgICAgICAgYm94U2hhZG93OiBgaW5zZXQgMCAwIDAgMXB4ICR7XG4gICAgICAgICAgICBzY2FsZXMubmV1dHJhbC5ONUFcbiAgICAgICAgICB9LCBpbnNldCAwIC0xcHggMXB4IDAgJHtzY2FsZXMubmV1dHJhbC5OMkF9YFxuICAgICAgICB9LFxuICAgICAgICBob3Zlcjoge1xuICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogbGluZWFyR3JhZGllbnQuaG92ZXJcbiAgICAgICAgfSxcbiAgICAgICAgZm9jdXM6IHtcbiAgICAgICAgICBib3hTaGFkb3c6IGAwIDAgMCAzcHggJHtmb2N1c0NvbG9yfSwgaW5zZXQgMCAwIDAgMXB4ICR7XG4gICAgICAgICAgICBzY2FsZXMubmV1dHJhbC5ONEFcbiAgICAgICAgICB9LCBpbnNldCAwIC0xcHggMXB4IDAgJHtzY2FsZXMubmV1dHJhbC5ONUF9YFxuICAgICAgICB9LFxuICAgICAgICBhY3RpdmU6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGxpbmVhckdyYWRpZW50LmFjdGl2ZSxcbiAgICAgICAgICBib3hTaGFkb3c6IGBpbnNldCAwIDAgMCAxcHggJHtcbiAgICAgICAgICAgIHNjYWxlcy5uZXV0cmFsLk40QVxuICAgICAgICAgIH0sIGluc2V0IDAgMXB4IDFweCAwICR7c2NhbGVzLm5ldXRyYWwuTjJBfWBcbiAgICAgICAgfSxcbiAgICAgICAgZm9jdXNBbmRBY3RpdmU6IHtcbiAgICAgICAgICBib3hTaGFkb3c6IGAwIDAgMCAzcHggJHtmb2N1c0NvbG9yfSwgaW5zZXQgMCAwIDAgMXB4ICR7XG4gICAgICAgICAgICBzY2FsZXMubmV1dHJhbC5ONEFcbiAgICAgICAgICB9LCBpbnNldCAwIDFweCAxcHggMCAke3NjYWxlcy5uZXV0cmFsLk4yQX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY2FzZSAnbWluaW1hbCc6IHtcbiAgICAgIGNvbnN0IGludGVudFRleHRDb2xvciA9IGdldFRleHRDb2xvckZvckludGVudChpbnRlbnQsIHNjYWxlcy5ibHVlLkI5KVxuICAgICAgcmV0dXJuIFRoZW1lci5jcmVhdGVCdXR0b25BcHBlYXJhbmNlKHtcbiAgICAgICAgZGlzYWJsZWQsXG4gICAgICAgIGJhc2U6IHtcbiAgICAgICAgICBjb2xvcjogaW50ZW50VGV4dENvbG9yLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50J1xuICAgICAgICB9LFxuICAgICAgICBob3Zlcjoge1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogc2NhbGVzLm5ldXRyYWwuTjJBXG4gICAgICAgIH0sXG4gICAgICAgIGZvY3VzOiB7XG4gICAgICAgICAgYm94U2hhZG93OiBgMCAwIDAgM3B4ICR7c2NhbGVzLmJsdWUuQjVBfWBcbiAgICAgICAgfSxcbiAgICAgICAgYWN0aXZlOiB7XG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOiAnbm9uZScsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBzY2FsZXMuYmx1ZS5CM0FcbiAgICAgICAgfSxcbiAgICAgICAgZm9jdXNBbmRBY3RpdmU6IHt9XG4gICAgICB9KVxuICAgIH1cblxuICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIGNvbnN0IGludGVudFRleHRDb2xvciA9IGdldFRleHRDb2xvckZvckludGVudChpbnRlbnQpXG4gICAgICByZXR1cm4gVGhlbWVyLmNyZWF0ZUJ1dHRvbkFwcGVhcmFuY2Uoe1xuICAgICAgICBkaXNhYmxlZCxcbiAgICAgICAgYmFzZToge1xuICAgICAgICAgIGNvbG9yOiBpbnRlbnRUZXh0Q29sb3IsXG4gICAgICAgICAgLi4uZGVmYXVsdENvbnRyb2xTdHlsZXMuYmFzZVxuICAgICAgICB9LFxuICAgICAgICBob3ZlcjogZGVmYXVsdENvbnRyb2xTdHlsZXMuaG92ZXIsXG4gICAgICAgIGZvY3VzOiBkZWZhdWx0Q29udHJvbFN0eWxlcy5mb2N1cyxcbiAgICAgICAgYWN0aXZlOiBkZWZhdWx0Q29udHJvbFN0eWxlcy5hY3RpdmUsXG4gICAgICAgIGZvY3VzQW5kQWN0aXZlOiBkZWZhdWx0Q29udHJvbFN0eWxlcy5mb2N1c0FuZEFjdGl2ZVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBHZXQgdGhlIGNsYXNzTmFtZSBvZiBhIGBCdXR0b25gfGBJY29uQnV0dG9uYC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBhcHBlYXJhbmNlIC0gZGVmYXVsdCwgcHJpbWFyeSwgbWluaW1hbC5cbiAqIEBwYXJhbSB7SW50ZW50fSBpbnRlbnQgLSBub25lLCBzdWNjZXNzLCB3YXJuaW5nLCBkYW5nZXIuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBhcHBlYXJhbmNlIGNsYXNzIG5hbWUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IG1lbW9pemVDbGFzc05hbWUoZ2V0QnV0dG9uQXBwZWFyYW5jZSlcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsU0FBU0EsTUFBVCxRQUF1QixvQkFBdkI7QUFDQSxPQUFPQyxnQkFBUCxNQUE2QiwyQkFBN0I7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLCtCQUFuQjtBQUNBLFNBQ0VDLHFCQURGLEVBRUVDLCtCQUZGLFFBR08sWUFIUDtBQUlBLFNBQVNDLG9CQUFULFFBQXFDLFdBQXJDO0FBRUE7QUFDQTtBQUNBOztBQUNBLElBQVFDLFFBQVIsR0FBcUJELG9CQUFyQixDQUFRQyxRQUFSO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1DLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ0MsVUFBRCxFQUFhQyxNQUFiLEVBQXdCO0VBQ2xELFFBQVFELFVBQVI7SUFDRSxLQUFLLFNBQUw7TUFBZ0I7UUFDZCw0QkFBdUNKLCtCQUErQixDQUNwRUssTUFEb0UsQ0FBdEU7UUFBQSxJQUFRQyxjQUFSLHlCQUFRQSxjQUFSO1FBQUEsSUFBd0JDLFVBQXhCLHlCQUF3QkEsVUFBeEI7O1FBR0EsT0FBT1gsTUFBTSxDQUFDWSxzQkFBUCxDQUE4QjtVQUNuQ04sUUFBUSxFQUFSQSxRQURtQztVQUVuQ08sSUFBSSxFQUFFO1lBQ0pDLEtBQUssRUFBRSxPQURIO1lBRUpDLGVBQWUsRUFBRSxPQUZiO1lBR0pDLGVBQWUsRUFBRU4sY0FBYyxDQUFDRyxJQUg1QjtZQUlKSSxTQUFTLDRCQUNQZixNQUFNLENBQUNnQixPQUFQLENBQWVDLEdBRFIsa0NBRWVqQixNQUFNLENBQUNnQixPQUFQLENBQWVFLEdBRjlCO1VBSkwsQ0FGNkI7VUFVbkNDLEtBQUssRUFBRTtZQUNMTCxlQUFlLEVBQUVOLGNBQWMsQ0FBQ1c7VUFEM0IsQ0FWNEI7VUFhbkNDLEtBQUssRUFBRTtZQUNMTCxTQUFTLHNCQUFlTixVQUFmLCtCQUNQVCxNQUFNLENBQUNnQixPQUFQLENBQWVLLEdBRFIsa0NBRWVyQixNQUFNLENBQUNnQixPQUFQLENBQWVDLEdBRjlCO1VBREosQ0FiNEI7VUFrQm5DSyxNQUFNLEVBQUU7WUFDTlIsZUFBZSxFQUFFTixjQUFjLENBQUNjLE1BRDFCO1lBRU5QLFNBQVMsNEJBQ1BmLE1BQU0sQ0FBQ2dCLE9BQVAsQ0FBZUssR0FEUixpQ0FFY3JCLE1BQU0sQ0FBQ2dCLE9BQVAsQ0FBZUUsR0FGN0I7VUFGSCxDQWxCMkI7VUF3Qm5DSyxjQUFjLEVBQUU7WUFDZFIsU0FBUyxzQkFBZU4sVUFBZiwrQkFDUFQsTUFBTSxDQUFDZ0IsT0FBUCxDQUFlSyxHQURSLGlDQUVjckIsTUFBTSxDQUFDZ0IsT0FBUCxDQUFlRSxHQUY3QjtVQURLO1FBeEJtQixDQUE5QixDQUFQO01BOEJEOztJQUVELEtBQUssU0FBTDtNQUFnQjtRQUNkLElBQU1NLGVBQWUsR0FBR3ZCLHFCQUFxQixDQUFDTSxNQUFELEVBQVNQLE1BQU0sQ0FBQ3lCLElBQVAsQ0FBWUMsRUFBckIsQ0FBN0M7UUFDQSxPQUFPNUIsTUFBTSxDQUFDWSxzQkFBUCxDQUE4QjtVQUNuQ04sUUFBUSxFQUFSQSxRQURtQztVQUVuQ08sSUFBSSxFQUFFO1lBQ0pDLEtBQUssRUFBRVksZUFESDtZQUVKWCxlQUFlLEVBQUU7VUFGYixDQUY2QjtVQU1uQ00sS0FBSyxFQUFFO1lBQ0xOLGVBQWUsRUFBRWIsTUFBTSxDQUFDZ0IsT0FBUCxDQUFlRTtVQUQzQixDQU40QjtVQVNuQ0UsS0FBSyxFQUFFO1lBQ0xMLFNBQVMsc0JBQWVmLE1BQU0sQ0FBQ3lCLElBQVAsQ0FBWUUsR0FBM0I7VUFESixDQVQ0QjtVQVluQ0wsTUFBTSxFQUFFO1lBQ05SLGVBQWUsRUFBRSxNQURYO1lBRU5ELGVBQWUsRUFBRWIsTUFBTSxDQUFDeUIsSUFBUCxDQUFZRztVQUZ2QixDQVoyQjtVQWdCbkNMLGNBQWMsRUFBRTtRQWhCbUIsQ0FBOUIsQ0FBUDtNQWtCRDs7SUFFRCxLQUFLLFNBQUw7SUFDQTtNQUFTO1FBQ1AsSUFBTUMsZ0JBQWUsR0FBR3ZCLHFCQUFxQixDQUFDTSxNQUFELENBQTdDOztRQUNBLE9BQU9ULE1BQU0sQ0FBQ1ksc0JBQVAsQ0FBOEI7VUFDbkNOLFFBQVEsRUFBUkEsUUFEbUM7VUFFbkNPLElBQUk7WUFDRkMsS0FBSyxFQUFFWTtVQURMLEdBRUNyQixvQkFBb0IsQ0FBQ1EsSUFGdEIsQ0FGK0I7VUFNbkNRLEtBQUssRUFBRWhCLG9CQUFvQixDQUFDZ0IsS0FOTztVQU9uQ0MsS0FBSyxFQUFFakIsb0JBQW9CLENBQUNpQixLQVBPO1VBUW5DRSxNQUFNLEVBQUVuQixvQkFBb0IsQ0FBQ21CLE1BUk07VUFTbkNDLGNBQWMsRUFBRXBCLG9CQUFvQixDQUFDb0I7UUFURixDQUE5QixDQUFQO01BV0Q7RUF6RUg7QUEyRUQsQ0E1RUQ7QUE4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxlQUFleEIsZ0JBQWdCLENBQUNNLG1CQUFELENBQS9CIn0=