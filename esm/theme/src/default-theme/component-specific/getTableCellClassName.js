import { Themer } from '../../../../themer';
import memoizeClassName from '../utils/memoizeClassName';
import scales from '../foundational-styles/scales';
var Appearances = {};
Appearances["default"] = Themer.createTableCellAppearance({
  focus: {
    outline: 'none',
    backgroundColor: scales.blue.B2A,
    boxShadow: "inset 0 0 0 1px ".concat(scales.blue.B7A)
  }
});
/**
 * Get the appearance of a `TableCell`.
 * @param {string} appearance
 * @return {string} the appearance object.
 */

var getAppearance = function getAppearance() {
  return Appearances["default"];
};
/**
 * Get the className of a `Table.EditableCell`.
 * @param {string} appearance
 * @return {string} the appearance class name.
 */


export default memoizeClassName(getAppearance);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJUaGVtZXIiLCJtZW1vaXplQ2xhc3NOYW1lIiwic2NhbGVzIiwiQXBwZWFyYW5jZXMiLCJjcmVhdGVUYWJsZUNlbGxBcHBlYXJhbmNlIiwiZm9jdXMiLCJvdXRsaW5lIiwiYmFja2dyb3VuZENvbG9yIiwiYmx1ZSIsIkIyQSIsImJveFNoYWRvdyIsIkI3QSIsImdldEFwcGVhcmFuY2UiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvdGhlbWUvc3JjL2RlZmF1bHQtdGhlbWUvY29tcG9uZW50LXNwZWNpZmljL2dldFRhYmxlQ2VsbENsYXNzTmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaGVtZXIgfSBmcm9tICcuLi8uLi8uLi8uLi90aGVtZXInXG5pbXBvcnQgbWVtb2l6ZUNsYXNzTmFtZSBmcm9tICcuLi91dGlscy9tZW1vaXplQ2xhc3NOYW1lJ1xuaW1wb3J0IHNjYWxlcyBmcm9tICcuLi9mb3VuZGF0aW9uYWwtc3R5bGVzL3NjYWxlcydcblxuY29uc3QgQXBwZWFyYW5jZXMgPSB7fVxuXG5BcHBlYXJhbmNlcy5kZWZhdWx0ID0gVGhlbWVyLmNyZWF0ZVRhYmxlQ2VsbEFwcGVhcmFuY2Uoe1xuICBmb2N1czoge1xuICAgIG91dGxpbmU6ICdub25lJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHNjYWxlcy5ibHVlLkIyQSxcbiAgICBib3hTaGFkb3c6IGBpbnNldCAwIDAgMCAxcHggJHtzY2FsZXMuYmx1ZS5CN0F9YFxuICB9XG59KVxuXG4vKipcbiAqIEdldCB0aGUgYXBwZWFyYW5jZSBvZiBhIGBUYWJsZUNlbGxgLlxuICogQHBhcmFtIHtzdHJpbmd9IGFwcGVhcmFuY2VcbiAqIEByZXR1cm4ge3N0cmluZ30gdGhlIGFwcGVhcmFuY2Ugb2JqZWN0LlxuICovXG5jb25zdCBnZXRBcHBlYXJhbmNlID0gKCkgPT4ge1xuICByZXR1cm4gQXBwZWFyYW5jZXMuZGVmYXVsdFxufVxuXG4vKipcbiAqIEdldCB0aGUgY2xhc3NOYW1lIG9mIGEgYFRhYmxlLkVkaXRhYmxlQ2VsbGAuXG4gKiBAcGFyYW0ge3N0cmluZ30gYXBwZWFyYW5jZVxuICogQHJldHVybiB7c3RyaW5nfSB0aGUgYXBwZWFyYW5jZSBjbGFzcyBuYW1lLlxuICovXG5leHBvcnQgZGVmYXVsdCBtZW1vaXplQ2xhc3NOYW1lKGdldEFwcGVhcmFuY2UpXG4iXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLE1BQVQsUUFBdUIsb0JBQXZCO0FBQ0EsT0FBT0MsZ0JBQVAsTUFBNkIsMkJBQTdCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQiwrQkFBbkI7QUFFQSxJQUFNQyxXQUFXLEdBQUcsRUFBcEI7QUFFQUEsV0FBVyxXQUFYLEdBQXNCSCxNQUFNLENBQUNJLHlCQUFQLENBQWlDO0VBQ3JEQyxLQUFLLEVBQUU7SUFDTEMsT0FBTyxFQUFFLE1BREo7SUFFTEMsZUFBZSxFQUFFTCxNQUFNLENBQUNNLElBQVAsQ0FBWUMsR0FGeEI7SUFHTEMsU0FBUyw0QkFBcUJSLE1BQU0sQ0FBQ00sSUFBUCxDQUFZRyxHQUFqQztFQUhKO0FBRDhDLENBQWpDLENBQXRCO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07RUFDMUIsT0FBT1QsV0FBVyxXQUFsQjtBQUNELENBRkQ7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxlQUFlRixnQkFBZ0IsQ0FBQ1csYUFBRCxDQUEvQiJ9