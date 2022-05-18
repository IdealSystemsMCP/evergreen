"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _glamor = require("glamor");

var _scales = _interopRequireDefault(require("../foundational-styles/scales"));

var _colors = _interopRequireDefault(require("../foundational-styles/colors"));

var getTrimStyle = function getTrimStyle(intent) {
  return {
    '&:before': {
      content: '""',
      width: 3,
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      backgroundColor: _colors["default"].intent[intent]
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
  var trimClassName = hasTrim ? (0, _glamor.css)(getTrimStyle(intent)).toString() : '';

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
        boxShadow: "inset 0 0 0 1px ".concat(_scales["default"].neutral.N4A),
        className: trimClassName
      };
  }
};

var _default = getAlertProps;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJnZXRUcmltU3R5bGUiLCJpbnRlbnQiLCJjb250ZW50Iiwid2lkdGgiLCJoZWlnaHQiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvcnMiLCJnZXRBbGVydFByb3BzIiwiYXBwZWFyYW5jZSIsImhhc1RyaW0iLCJ0cmltQ2xhc3NOYW1lIiwiY3NzIiwidG9TdHJpbmciLCJlbGV2YXRpb24iLCJib3JkZXJSYWRpdXMiLCJjbGFzc05hbWUiLCJib3hTaGFkb3ciLCJzY2FsZXMiLCJuZXV0cmFsIiwiTjRBIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3RoZW1lL3NyYy9kZWZhdWx0LXRoZW1lL2NvbXBvbmVudC1zcGVjaWZpYy9nZXRBbGVydFByb3BzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ2dsYW1vcidcbmltcG9ydCBzY2FsZXMgZnJvbSAnLi4vZm91bmRhdGlvbmFsLXN0eWxlcy9zY2FsZXMnXG5pbXBvcnQgY29sb3JzIGZyb20gJy4uL2ZvdW5kYXRpb25hbC1zdHlsZXMvY29sb3JzJ1xuXG5jb25zdCBnZXRUcmltU3R5bGUgPSBpbnRlbnQgPT4gKHtcbiAgJyY6YmVmb3JlJzoge1xuICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICB3aWR0aDogMyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9ycy5pbnRlbnRbaW50ZW50XVxuICB9XG59KVxuXG4vKipcbiAqIEdldCB0aGUgdGhlbWVkIHByb3BzIGZvciB0aGUgQWxlcnQgY29tcG9uZW50LlxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcHMuYXBwZWFyYW5jZSAtIGRlZmF1bHQgdGhlbWUgc3VwcG9ydHMgYGRlZmF1bHRgIGFuZCBgY2FyZGAuXG4gKiBAcGFyYW0ge0ludGVudH0gcHJvcHMuaW50ZW50IC0gaW50ZW50IG9mIHRoZSBhbGVydC4gTWF5IGJlIGBub25lYC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gcHJvcHMuaGFzVHJpbSAtIHdoZW4gdHJ1ZSwgdGhlIGFsZXJ0IGhhcyBhIHRyaW0uXG4gKiBAcmV0dXJuIHtPYmplY3R9IHsgY2xhc3NOYW1lLCAuLi50aGVtZWRQcm9wcyB9XG4gKi9cbmNvbnN0IGdldEFsZXJ0UHJvcHMgPSAoeyBhcHBlYXJhbmNlLCBpbnRlbnQsIGhhc1RyaW0gfSkgPT4ge1xuICBjb25zdCB0cmltQ2xhc3NOYW1lID0gaGFzVHJpbSA/IGNzcyhnZXRUcmltU3R5bGUoaW50ZW50KSkudG9TdHJpbmcoKSA6ICcnXG5cbiAgc3dpdGNoIChhcHBlYXJhbmNlKSB7XG4gICAgY2FzZSAnY2FyZCc6XG4gICAgICByZXR1cm4geyBlbGV2YXRpb246IDEsIGJvcmRlclJhZGl1czogMywgY2xhc3NOYW1lOiB0cmltQ2xhc3NOYW1lIH1cbiAgICBjYXNlICdkZWZhdWx0JzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYm94U2hhZG93OiBgaW5zZXQgMCAwIDAgMXB4ICR7c2NhbGVzLm5ldXRyYWwuTjRBfWAsXG4gICAgICAgIGNsYXNzTmFtZTogdHJpbUNsYXNzTmFtZVxuICAgICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldEFsZXJ0UHJvcHNcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQUMsTUFBTTtFQUFBLE9BQUs7SUFDOUIsWUFBWTtNQUNWQyxPQUFPLEVBQUUsSUFEQztNQUVWQyxLQUFLLEVBQUUsQ0FGRztNQUdWQyxNQUFNLEVBQUUsTUFIRTtNQUlWQyxRQUFRLEVBQUUsVUFKQTtNQUtWQyxHQUFHLEVBQUUsQ0FMSztNQU1WQyxJQUFJLEVBQUUsQ0FOSTtNQU9WQyxlQUFlLEVBQUVDLGtCQUFBLENBQU9SLE1BQVAsQ0FBY0EsTUFBZDtJQVBQO0VBRGtCLENBQUw7QUFBQSxDQUEzQjtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLElBQU1TLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FBcUM7RUFBQSxJQUFsQ0MsVUFBa0MsUUFBbENBLFVBQWtDO0VBQUEsSUFBdEJWLE1BQXNCLFFBQXRCQSxNQUFzQjtFQUFBLElBQWRXLE9BQWMsUUFBZEEsT0FBYztFQUN6RCxJQUFNQyxhQUFhLEdBQUdELE9BQU8sR0FBRyxJQUFBRSxXQUFBLEVBQUlkLFlBQVksQ0FBQ0MsTUFBRCxDQUFoQixFQUEwQmMsUUFBMUIsRUFBSCxHQUEwQyxFQUF2RTs7RUFFQSxRQUFRSixVQUFSO0lBQ0UsS0FBSyxNQUFMO01BQ0UsT0FBTztRQUFFSyxTQUFTLEVBQUUsQ0FBYjtRQUFnQkMsWUFBWSxFQUFFLENBQTlCO1FBQWlDQyxTQUFTLEVBQUVMO01BQTVDLENBQVA7O0lBQ0YsS0FBSyxTQUFMO0lBQ0E7TUFDRSxPQUFPO1FBQ0xNLFNBQVMsNEJBQXFCQyxrQkFBQSxDQUFPQyxPQUFQLENBQWVDLEdBQXBDLENBREo7UUFFTEosU0FBUyxFQUFFTDtNQUZOLENBQVA7RUFMSjtBQVVELENBYkQ7O2VBZWVILGEifQ==