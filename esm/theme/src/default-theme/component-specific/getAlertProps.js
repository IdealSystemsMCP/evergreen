import { css } from 'glamor';
import scales from '../foundational-styles/scales';
import colors from '../foundational-styles/colors';

var getTrimStyle = function getTrimStyle(intent) {
  return {
    '&:before': {
      content: '""',
      width: 3,
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      backgroundColor: colors.intent[intent]
    }
  };
};
/**
 * Get the themed props for the Alert component.
 * @param {Object} props
 * @param {string} props.appearance - default theme supports `default` and `card`.
 * @param {Intent} props.intent - intent of the alert. May be `none`.
 * @param {boolean} props.hasTrim - when true, the alert has a trim.
 * @return {Object} { className, ...themedProps }
 */


var getAlertProps = function getAlertProps(_ref) {
  var appearance = _ref.appearance,
      intent = _ref.intent,
      hasTrim = _ref.hasTrim;
  var trimClassName = hasTrim ? css(getTrimStyle(intent)).toString() : '';

  switch (appearance) {
    case 'card':
      return {
        elevation: 1,
        borderRadius: 3,
        className: trimClassName
      };

    case 'default':
    default:
      return {
        boxShadow: "inset 0 0 0 1px ".concat(scales.neutral.N4A),
        className: trimClassName
      };
  }
};

export default getAlertProps;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjc3MiLCJzY2FsZXMiLCJjb2xvcnMiLCJnZXRUcmltU3R5bGUiLCJpbnRlbnQiLCJjb250ZW50Iiwid2lkdGgiLCJoZWlnaHQiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJnZXRBbGVydFByb3BzIiwiYXBwZWFyYW5jZSIsImhhc1RyaW0iLCJ0cmltQ2xhc3NOYW1lIiwidG9TdHJpbmciLCJlbGV2YXRpb24iLCJib3JkZXJSYWRpdXMiLCJjbGFzc05hbWUiLCJib3hTaGFkb3ciLCJuZXV0cmFsIiwiTjRBIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3RoZW1lL3NyYy9kZWZhdWx0LXRoZW1lL2NvbXBvbmVudC1zcGVjaWZpYy9nZXRBbGVydFByb3BzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ2dsYW1vcidcbmltcG9ydCBzY2FsZXMgZnJvbSAnLi4vZm91bmRhdGlvbmFsLXN0eWxlcy9zY2FsZXMnXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uL2ZvdW5kYXRpb25hbC1zdHlsZXMvY29sb3JzJ1xuXG5jb25zdCBnZXRUcmltU3R5bGUgPSBpbnRlbnQgPT4gKHtcbiAgJyY6YmVmb3JlJzoge1xuICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICB3aWR0aDogMyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5pbnRlbnRbaW50ZW50XVxuICB9XG59KVxuXG4vKipcbiAqIEdldCB0aGUgdGhlbWVkIHByb3BzIGZvciB0aGUgQWxlcnQgY29tcG9uZW50LlxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcHMuYXBwZWFyYW5jZSAtIGRlZmF1bHQgdGhlbWUgc3VwcG9ydHMgYGRlZmF1bHRgIGFuZCBgY2FyZGAuXG4gKiBAcGFyYW0ge0ludGVudH0gcHJvcHMuaW50ZW50IC0gaW50ZW50IG9mIHRoZSBhbGVydC4gTWF5IGJlIGBub25lYC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gcHJvcHMuaGFzVHJpbSAtIHdoZW4gdHJ1ZSwgdGhlIGFsZXJ0IGhhcyBhIHRyaW0uXG4gKiBAcmV0dXJuIHtPYmplY3R9IHsgY2xhc3NOYW1lLCAuLi50aGVtZWRQcm9wcyB9XG4gKi9cbmNvbnN0IGdldEFsZXJ0UHJvcHMgPSAoeyBhcHBlYXJhbmNlLCBpbnRlbnQsIGhhc1RyaW0gfSkgPT4ge1xuICBjb25zdCB0cmltQ2xhc3NOYW1lID0gaGFzVHJpbSA/IGNzcyhnZXRUcmltU3R5bGUoaW50ZW50KSkudG9TdHJpbmcoKSA6ICcnXG5cbiAgc3dpdGNoIChhcHBlYXJhbmNlKSB7XG4gICAgY2FzZSAnY2FyZCc6XG4gICAgICByZXR1cm4geyBlbGV2YXRpb246IDEsIGJvcmRlclJhZGl1czogMywgY2xhc3NOYW1lOiB0cmltQ2xhc3NOYW1lIH1cbiAgICBjYXNlICdkZWZhdWx0JzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYm94U2hhZG93OiBgaW5zZXQgMCAwIDAgMXB4ICR7c2NhbGVzLm5ldXRyYWwuTjRBfWAsXG4gICAgICAgIGNsYXNzTmFtZTogdHJpbUNsYXNzTmFtZVxuICAgICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldEFsZXJ0UHJvcHNcbiJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsR0FBVCxRQUFvQixRQUFwQjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsK0JBQW5CO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQiwrQkFBbkI7O0FBRUEsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQUMsTUFBTTtFQUFBLE9BQUs7SUFDOUIsWUFBWTtNQUNWQyxPQUFPLEVBQUUsSUFEQztNQUVWQyxLQUFLLEVBQUUsQ0FGRztNQUdWQyxNQUFNLEVBQUUsTUFIRTtNQUlWQyxRQUFRLEVBQUUsVUFKQTtNQUtWQyxHQUFHLEVBQUUsQ0FMSztNQU1WQyxJQUFJLEVBQUUsQ0FOSTtNQU9WQyxlQUFlLEVBQUVULE1BQU0sQ0FBQ0UsTUFBUCxDQUFjQSxNQUFkO0lBUFA7RUFEa0IsQ0FBTDtBQUFBLENBQTNCO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsSUFBTVEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixPQUFxQztFQUFBLElBQWxDQyxVQUFrQyxRQUFsQ0EsVUFBa0M7RUFBQSxJQUF0QlQsTUFBc0IsUUFBdEJBLE1BQXNCO0VBQUEsSUFBZFUsT0FBYyxRQUFkQSxPQUFjO0VBQ3pELElBQU1DLGFBQWEsR0FBR0QsT0FBTyxHQUFHZCxHQUFHLENBQUNHLFlBQVksQ0FBQ0MsTUFBRCxDQUFiLENBQUgsQ0FBMEJZLFFBQTFCLEVBQUgsR0FBMEMsRUFBdkU7O0VBRUEsUUFBUUgsVUFBUjtJQUNFLEtBQUssTUFBTDtNQUNFLE9BQU87UUFBRUksU0FBUyxFQUFFLENBQWI7UUFBZ0JDLFlBQVksRUFBRSxDQUE5QjtRQUFpQ0MsU0FBUyxFQUFFSjtNQUE1QyxDQUFQOztJQUNGLEtBQUssU0FBTDtJQUNBO01BQ0UsT0FBTztRQUNMSyxTQUFTLDRCQUFxQm5CLE1BQU0sQ0FBQ29CLE9BQVAsQ0FBZUMsR0FBcEMsQ0FESjtRQUVMSCxTQUFTLEVBQUVKO01BRk4sQ0FBUDtFQUxKO0FBVUQsQ0FiRDs7QUFlQSxlQUFlSCxhQUFmIn0=