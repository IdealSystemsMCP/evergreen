import { Themer } from '../../../../themer';
import memoizeClassName from '../utils/memoizeClassName';
import scales from '../foundational-styles/scales';
import palette from '../foundational-styles/palette';
var TagInputAppearances = {};
TagInputAppearances["default"] = Themer.createTagInputAppearance({
  base: {
    backgroundColor: 'white',
    boxShadow: "inset 0 0 0 1px ".concat(scales.neutral.N5A, ", inset 0 1px 2px ").concat(scales.neutral.N4A)
  },
  invalid: {
    boxShadow: "inset 0 0 0 1px ".concat(palette.red.base, ", inset 0 1px 2px ").concat(scales.neutral.N4A)
  },
  focus: {
    boxShadow: "inset 0 0 2px ".concat(scales.neutral.N4A, ", inset 0 0 0 1px ").concat(scales.blue.B7, ", 0 0 0 3px ").concat(scales.blue.B4A)
  },
  disabled: {
    boxShadow: "inset 0 0 0 1px ".concat(scales.neutral.N4A),
    backgroundColor: scales.neutral.N2
  }
});
/**
 * Get the appearance of a `TagInput`.
 * @param {string} appearance - the appearance name
 * @return {Object} the appearance object.
 */

var getTextInputAppearance = function getTextInputAppearance() {
  return TagInputAppearances["default"];
};
/**
 * Get the className of a `TagInput`.
 * @param {string} appearance - the appearance name
 * @return {string} the appearance class name.
 */


export default memoizeClassName(getTextInputAppearance);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJUaGVtZXIiLCJtZW1vaXplQ2xhc3NOYW1lIiwic2NhbGVzIiwicGFsZXR0ZSIsIlRhZ0lucHV0QXBwZWFyYW5jZXMiLCJjcmVhdGVUYWdJbnB1dEFwcGVhcmFuY2UiLCJiYXNlIiwiYmFja2dyb3VuZENvbG9yIiwiYm94U2hhZG93IiwibmV1dHJhbCIsIk41QSIsIk40QSIsImludmFsaWQiLCJyZWQiLCJmb2N1cyIsImJsdWUiLCJCNyIsIkI0QSIsImRpc2FibGVkIiwiTjIiLCJnZXRUZXh0SW5wdXRBcHBlYXJhbmNlIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3RoZW1lL3NyYy9kZWZhdWx0LXRoZW1lL2NvbXBvbmVudC1zcGVjaWZpYy9nZXRUYWdJbnB1dENsYXNzTmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaGVtZXIgfSBmcm9tICcuLi8uLi8uLi8uLi90aGVtZXInXG5pbXBvcnQgbWVtb2l6ZUNsYXNzTmFtZSBmcm9tICcuLi91dGlscy9tZW1vaXplQ2xhc3NOYW1lJ1xuaW1wb3J0IHNjYWxlcyBmcm9tICcuLi9mb3VuZGF0aW9uYWwtc3R5bGVzL3NjYWxlcydcbmltcG9ydCBwYWxldHRlIGZyb20gJy4uL2ZvdW5kYXRpb25hbC1zdHlsZXMvcGFsZXR0ZSdcblxuY29uc3QgVGFnSW5wdXRBcHBlYXJhbmNlcyA9IHt9XG5cblRhZ0lucHV0QXBwZWFyYW5jZXMuZGVmYXVsdCA9IFRoZW1lci5jcmVhdGVUYWdJbnB1dEFwcGVhcmFuY2Uoe1xuICBiYXNlOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgIGJveFNoYWRvdzogYGluc2V0IDAgMCAwIDFweCAke3NjYWxlcy5uZXV0cmFsLk41QX0sIGluc2V0IDAgMXB4IDJweCAke1xuICAgICAgc2NhbGVzLm5ldXRyYWwuTjRBXG4gICAgfWBcbiAgfSxcbiAgaW52YWxpZDoge1xuICAgIGJveFNoYWRvdzogYGluc2V0IDAgMCAwIDFweCAke3BhbGV0dGUucmVkLmJhc2V9LCBpbnNldCAwIDFweCAycHggJHtcbiAgICAgIHNjYWxlcy5uZXV0cmFsLk40QVxuICAgIH1gXG4gIH0sXG4gIGZvY3VzOiB7XG4gICAgYm94U2hhZG93OiBgaW5zZXQgMCAwIDJweCAke3NjYWxlcy5uZXV0cmFsLk40QX0sIGluc2V0IDAgMCAwIDFweCAke1xuICAgICAgc2NhbGVzLmJsdWUuQjdcbiAgICB9LCAwIDAgMCAzcHggJHtzY2FsZXMuYmx1ZS5CNEF9YFxuICB9LFxuICBkaXNhYmxlZDoge1xuICAgIGJveFNoYWRvdzogYGluc2V0IDAgMCAwIDFweCAke3NjYWxlcy5uZXV0cmFsLk40QX1gLFxuICAgIGJhY2tncm91bmRDb2xvcjogc2NhbGVzLm5ldXRyYWwuTjJcbiAgfVxufSlcblxuLyoqXG4gKiBHZXQgdGhlIGFwcGVhcmFuY2Ugb2YgYSBgVGFnSW5wdXRgLlxuICogQHBhcmFtIHtzdHJpbmd9IGFwcGVhcmFuY2UgLSB0aGUgYXBwZWFyYW5jZSBuYW1lXG4gKiBAcmV0dXJuIHtPYmplY3R9IHRoZSBhcHBlYXJhbmNlIG9iamVjdC5cbiAqL1xuY29uc3QgZ2V0VGV4dElucHV0QXBwZWFyYW5jZSA9ICgpID0+IHtcbiAgcmV0dXJuIFRhZ0lucHV0QXBwZWFyYW5jZXMuZGVmYXVsdFxufVxuXG4vKipcbiAqIEdldCB0aGUgY2xhc3NOYW1lIG9mIGEgYFRhZ0lucHV0YC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBhcHBlYXJhbmNlIC0gdGhlIGFwcGVhcmFuY2UgbmFtZVxuICogQHJldHVybiB7c3RyaW5nfSB0aGUgYXBwZWFyYW5jZSBjbGFzcyBuYW1lLlxuICovXG5leHBvcnQgZGVmYXVsdCBtZW1vaXplQ2xhc3NOYW1lKGdldFRleHRJbnB1dEFwcGVhcmFuY2UpXG4iXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLE1BQVQsUUFBdUIsb0JBQXZCO0FBQ0EsT0FBT0MsZ0JBQVAsTUFBNkIsMkJBQTdCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQiwrQkFBbkI7QUFDQSxPQUFPQyxPQUFQLE1BQW9CLGdDQUFwQjtBQUVBLElBQU1DLG1CQUFtQixHQUFHLEVBQTVCO0FBRUFBLG1CQUFtQixXQUFuQixHQUE4QkosTUFBTSxDQUFDSyx3QkFBUCxDQUFnQztFQUM1REMsSUFBSSxFQUFFO0lBQ0pDLGVBQWUsRUFBRSxPQURiO0lBRUpDLFNBQVMsNEJBQXFCTixNQUFNLENBQUNPLE9BQVAsQ0FBZUMsR0FBcEMsK0JBQ1BSLE1BQU0sQ0FBQ08sT0FBUCxDQUFlRSxHQURSO0VBRkwsQ0FEc0Q7RUFPNURDLE9BQU8sRUFBRTtJQUNQSixTQUFTLDRCQUFxQkwsT0FBTyxDQUFDVSxHQUFSLENBQVlQLElBQWpDLCtCQUNQSixNQUFNLENBQUNPLE9BQVAsQ0FBZUUsR0FEUjtFQURGLENBUG1EO0VBWTVERyxLQUFLLEVBQUU7SUFDTE4sU0FBUywwQkFBbUJOLE1BQU0sQ0FBQ08sT0FBUCxDQUFlRSxHQUFsQywrQkFDUFQsTUFBTSxDQUFDYSxJQUFQLENBQVlDLEVBREwseUJBRU1kLE1BQU0sQ0FBQ2EsSUFBUCxDQUFZRSxHQUZsQjtFQURKLENBWnFEO0VBaUI1REMsUUFBUSxFQUFFO0lBQ1JWLFNBQVMsNEJBQXFCTixNQUFNLENBQUNPLE9BQVAsQ0FBZUUsR0FBcEMsQ0FERDtJQUVSSixlQUFlLEVBQUVMLE1BQU0sQ0FBQ08sT0FBUCxDQUFlVTtFQUZ4QjtBQWpCa0QsQ0FBaEMsQ0FBOUI7QUF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQyxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLEdBQU07RUFDbkMsT0FBT2hCLG1CQUFtQixXQUExQjtBQUNELENBRkQ7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxlQUFlSCxnQkFBZ0IsQ0FBQ21CLHNCQUFELENBQS9CIn0=