import { Themer } from '../../../../themer';
import memoizeClassName from '../utils/memoizeClassName';
import scales from '../foundational-styles/scales';
var defaultAppearance = Themer.createSwitchAppearance({
  base: {
    transition: 'all 120ms ease-in-out',
    cursor: 'pointer',
    color: 'white',
    backgroundColor: scales.neutral.N5A,
    borderRadius: 9999
  },
  disabled: {
    opacity: 0.5,
    backgroundImage: 'none'
  },
  hover: {
    backgroundColor: scales.neutral.N5A
  },
  active: {
    backgroundColor: scales.neutral.N6A
  },
  focus: {
    boxShadow: "0 0 0 3px ".concat(scales.blue.B6A)
  },
  checked: {
    backgroundColor: scales.blue.B8,
    color: 'white'
  },
  checkedHover: {
    backgroundColor: scales.blue.B8,
    color: 'white'
  },
  checkedActive: {
    backgroundColor: scales.blue.B9,
    color: 'white'
  },
  checkedDisabled: {}
});
/**
 * Get the className of a `Switch`.
 * @param {string} appearance
 * @return {Object} the appearance object.
 */

var getSwitchAppearance = function getSwitchAppearance() {
  return defaultAppearance;
};
/**
 * Get the className of a `Switch`.
 * @param {string} appearance
 * @return {string} the appearance class name.
 */


export default memoizeClassName(getSwitchAppearance);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJUaGVtZXIiLCJtZW1vaXplQ2xhc3NOYW1lIiwic2NhbGVzIiwiZGVmYXVsdEFwcGVhcmFuY2UiLCJjcmVhdGVTd2l0Y2hBcHBlYXJhbmNlIiwiYmFzZSIsInRyYW5zaXRpb24iLCJjdXJzb3IiLCJjb2xvciIsImJhY2tncm91bmRDb2xvciIsIm5ldXRyYWwiLCJONUEiLCJib3JkZXJSYWRpdXMiLCJkaXNhYmxlZCIsIm9wYWNpdHkiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJob3ZlciIsImFjdGl2ZSIsIk42QSIsImZvY3VzIiwiYm94U2hhZG93IiwiYmx1ZSIsIkI2QSIsImNoZWNrZWQiLCJCOCIsImNoZWNrZWRIb3ZlciIsImNoZWNrZWRBY3RpdmUiLCJCOSIsImNoZWNrZWREaXNhYmxlZCIsImdldFN3aXRjaEFwcGVhcmFuY2UiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvdGhlbWUvc3JjL2RlZmF1bHQtdGhlbWUvY29tcG9uZW50LXNwZWNpZmljL2dldFN3aXRjaENsYXNzTmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaGVtZXIgfSBmcm9tICcuLi8uLi8uLi8uLi90aGVtZXInXG5pbXBvcnQgbWVtb2l6ZUNsYXNzTmFtZSBmcm9tICcuLi91dGlscy9tZW1vaXplQ2xhc3NOYW1lJ1xuaW1wb3J0IHNjYWxlcyBmcm9tICcuLi9mb3VuZGF0aW9uYWwtc3R5bGVzL3NjYWxlcydcblxuY29uc3QgZGVmYXVsdEFwcGVhcmFuY2UgPSBUaGVtZXIuY3JlYXRlU3dpdGNoQXBwZWFyYW5jZSh7XG4gIGJhc2U6IHtcbiAgICB0cmFuc2l0aW9uOiAnYWxsIDEyMG1zIGVhc2UtaW4tb3V0JyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHNjYWxlcy5uZXV0cmFsLk41QSxcbiAgICBib3JkZXJSYWRpdXM6IDk5OTlcbiAgfSxcbiAgZGlzYWJsZWQ6IHtcbiAgICBvcGFjaXR5OiAwLjUsXG4gICAgYmFja2dyb3VuZEltYWdlOiAnbm9uZSdcbiAgfSxcbiAgaG92ZXI6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHNjYWxlcy5uZXV0cmFsLk41QVxuICB9LFxuICBhY3RpdmU6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHNjYWxlcy5uZXV0cmFsLk42QVxuICB9LFxuICBmb2N1czoge1xuICAgIGJveFNoYWRvdzogYDAgMCAwIDNweCAke3NjYWxlcy5ibHVlLkI2QX1gXG4gIH0sXG4gIGNoZWNrZWQ6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHNjYWxlcy5ibHVlLkI4LFxuICAgIGNvbG9yOiAnd2hpdGUnXG4gIH0sXG4gIGNoZWNrZWRIb3Zlcjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogc2NhbGVzLmJsdWUuQjgsXG4gICAgY29sb3I6ICd3aGl0ZSdcbiAgfSxcbiAgY2hlY2tlZEFjdGl2ZToge1xuICAgIGJhY2tncm91bmRDb2xvcjogc2NhbGVzLmJsdWUuQjksXG4gICAgY29sb3I6ICd3aGl0ZSdcbiAgfSxcbiAgY2hlY2tlZERpc2FibGVkOiB7fVxufSlcblxuLyoqXG4gKiBHZXQgdGhlIGNsYXNzTmFtZSBvZiBhIGBTd2l0Y2hgLlxuICogQHBhcmFtIHtzdHJpbmd9IGFwcGVhcmFuY2VcbiAqIEByZXR1cm4ge09iamVjdH0gdGhlIGFwcGVhcmFuY2Ugb2JqZWN0LlxuICovXG5jb25zdCBnZXRTd2l0Y2hBcHBlYXJhbmNlID0gKCkgPT4ge1xuICByZXR1cm4gZGVmYXVsdEFwcGVhcmFuY2Vcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGNsYXNzTmFtZSBvZiBhIGBTd2l0Y2hgLlxuICogQHBhcmFtIHtzdHJpbmd9IGFwcGVhcmFuY2VcbiAqIEByZXR1cm4ge3N0cmluZ30gdGhlIGFwcGVhcmFuY2UgY2xhc3MgbmFtZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgbWVtb2l6ZUNsYXNzTmFtZShnZXRTd2l0Y2hBcHBlYXJhbmNlKVxuIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxNQUFULFFBQXVCLG9CQUF2QjtBQUNBLE9BQU9DLGdCQUFQLE1BQTZCLDJCQUE3QjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsK0JBQW5CO0FBRUEsSUFBTUMsaUJBQWlCLEdBQUdILE1BQU0sQ0FBQ0ksc0JBQVAsQ0FBOEI7RUFDdERDLElBQUksRUFBRTtJQUNKQyxVQUFVLEVBQUUsdUJBRFI7SUFFSkMsTUFBTSxFQUFFLFNBRko7SUFHSkMsS0FBSyxFQUFFLE9BSEg7SUFJSkMsZUFBZSxFQUFFUCxNQUFNLENBQUNRLE9BQVAsQ0FBZUMsR0FKNUI7SUFLSkMsWUFBWSxFQUFFO0VBTFYsQ0FEZ0Q7RUFRdERDLFFBQVEsRUFBRTtJQUNSQyxPQUFPLEVBQUUsR0FERDtJQUVSQyxlQUFlLEVBQUU7RUFGVCxDQVI0QztFQVl0REMsS0FBSyxFQUFFO0lBQ0xQLGVBQWUsRUFBRVAsTUFBTSxDQUFDUSxPQUFQLENBQWVDO0VBRDNCLENBWitDO0VBZXRETSxNQUFNLEVBQUU7SUFDTlIsZUFBZSxFQUFFUCxNQUFNLENBQUNRLE9BQVAsQ0FBZVE7RUFEMUIsQ0FmOEM7RUFrQnREQyxLQUFLLEVBQUU7SUFDTEMsU0FBUyxzQkFBZWxCLE1BQU0sQ0FBQ21CLElBQVAsQ0FBWUMsR0FBM0I7RUFESixDQWxCK0M7RUFxQnREQyxPQUFPLEVBQUU7SUFDUGQsZUFBZSxFQUFFUCxNQUFNLENBQUNtQixJQUFQLENBQVlHLEVBRHRCO0lBRVBoQixLQUFLLEVBQUU7RUFGQSxDQXJCNkM7RUF5QnREaUIsWUFBWSxFQUFFO0lBQ1poQixlQUFlLEVBQUVQLE1BQU0sQ0FBQ21CLElBQVAsQ0FBWUcsRUFEakI7SUFFWmhCLEtBQUssRUFBRTtFQUZLLENBekJ3QztFQTZCdERrQixhQUFhLEVBQUU7SUFDYmpCLGVBQWUsRUFBRVAsTUFBTSxDQUFDbUIsSUFBUCxDQUFZTSxFQURoQjtJQUVibkIsS0FBSyxFQUFFO0VBRk0sQ0E3QnVDO0VBaUN0RG9CLGVBQWUsRUFBRTtBQWpDcUMsQ0FBOUIsQ0FBMUI7QUFvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLEdBQU07RUFDaEMsT0FBTzFCLGlCQUFQO0FBQ0QsQ0FGRDtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLGVBQWVGLGdCQUFnQixDQUFDNEIsbUJBQUQsQ0FBL0IifQ==