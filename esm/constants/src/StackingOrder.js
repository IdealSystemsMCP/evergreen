/**
 * Stacking order contains z-index values that are used through.
 * Note that the Stack component might increase the z-index for certain components.
 */
export default {
  /**
   * Used for focused buttons and controls.
   */
  FOCUSED: 2,

  /**
   * Used as the default for the StackingContext.
   */
  STACKING_CONTEXT: 5,

  /**
   * Used as the default for the Positioner.
   */
  POSITIONER: 10,

  /**
   * Used for the Overlay and everything that's inside such as Dialog + SideSheet.
   */
  OVERLAY: 20,

  /**
   * Used for the toasts in the toaster. Appears on top of everything else.
   */
  TOASTER: 30
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJGT0NVU0VEIiwiU1RBQ0tJTkdfQ09OVEVYVCIsIlBPU0lUSU9ORVIiLCJPVkVSTEFZIiwiVE9BU1RFUiJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb25zdGFudHMvc3JjL1N0YWNraW5nT3JkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdGFja2luZyBvcmRlciBjb250YWlucyB6LWluZGV4IHZhbHVlcyB0aGF0IGFyZSB1c2VkIHRocm91Z2guXG4gKiBOb3RlIHRoYXQgdGhlIFN0YWNrIGNvbXBvbmVudCBtaWdodCBpbmNyZWFzZSB0aGUgei1pbmRleCBmb3IgY2VydGFpbiBjb21wb25lbnRzLlxuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBmb2N1c2VkIGJ1dHRvbnMgYW5kIGNvbnRyb2xzLlxuICAgKi9cbiAgRk9DVVNFRDogMixcblxuICAvKipcbiAgICogVXNlZCBhcyB0aGUgZGVmYXVsdCBmb3IgdGhlIFN0YWNraW5nQ29udGV4dC5cbiAgICovXG4gIFNUQUNLSU5HX0NPTlRFWFQ6IDUsXG5cbiAgLyoqXG4gICAqIFVzZWQgYXMgdGhlIGRlZmF1bHQgZm9yIHRoZSBQb3NpdGlvbmVyLlxuICAgKi9cbiAgUE9TSVRJT05FUjogMTAsXG5cbiAgLyoqXG4gICAqIFVzZWQgZm9yIHRoZSBPdmVybGF5IGFuZCBldmVyeXRoaW5nIHRoYXQncyBpbnNpZGUgc3VjaCBhcyBEaWFsb2cgKyBTaWRlU2hlZXQuXG4gICAqL1xuICBPVkVSTEFZOiAyMCxcblxuICAvKipcbiAgICogVXNlZCBmb3IgdGhlIHRvYXN0cyBpbiB0aGUgdG9hc3Rlci4gQXBwZWFycyBvbiB0b3Agb2YgZXZlcnl0aGluZyBlbHNlLlxuICAgKi9cbiAgVE9BU1RFUjogMzBcbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0VBQ2I7QUFDRjtBQUNBO0VBQ0VBLE9BQU8sRUFBRSxDQUpJOztFQU1iO0FBQ0Y7QUFDQTtFQUNFQyxnQkFBZ0IsRUFBRSxDQVRMOztFQVdiO0FBQ0Y7QUFDQTtFQUNFQyxVQUFVLEVBQUUsRUFkQzs7RUFnQmI7QUFDRjtBQUNBO0VBQ0VDLE9BQU8sRUFBRSxFQW5CSTs7RUFxQmI7QUFDRjtBQUNBO0VBQ0VDLE9BQU8sRUFBRTtBQXhCSSxDQUFmIn0=