"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTextStyle = exports.getTextSizeForControlHeight = exports.getTextColor = exports.getParagraphStyle = exports.getIconSizeForSelect = exports.getIconSizeForInput = exports.getIconSizeForIconButton = exports.getIconSizeForButton = exports.getIconForIntent = exports.getIconColor = exports.getHeadingStyle = exports.getFontFamily = exports.getElevation = exports.getBorderRadiusForControlHeight = exports.getBackground = void 0;

var _constants = require("../../../../constants");

var _themedProperty = _interopRequireDefault(require("../utils/themedProperty"));

var _foundationalStyles = require("../foundational-styles");

var _typography = require("../typography");

/**
 * Controls include:
 * - Button
 * - IconButton
 * - TextInput
 * @param {number} height
 * @return {number} border radius
 */
var getBorderRadiusForControlHeight = function getBorderRadiusForControlHeight(height) {
  if (height <= 40) return 3;
  return 4;
};
/**
 * Get the text size for a control with a certain height.
 * @param {number} height
 * @return {number} text size of the control height.
 */


exports.getBorderRadiusForControlHeight = getBorderRadiusForControlHeight;

var getTextSizeForControlHeight = function getTextSizeForControlHeight(height) {
  if (height <= 24) return 300;
  if (height <= 28) return 300;
  if (height <= 32) return 300;
  if (height <= 36) return 400;
  if (height <= 40) return 400;
  return 500;
};
/**
 * Get the size for a icon in a Button with a certain height.
 * @param {number} height
 * @return {number} icon size
 */


exports.getTextSizeForControlHeight = getTextSizeForControlHeight;

var getIconSizeForButton = function getIconSizeForButton(height) {
  if (height <= 28) return 12;
  if (height <= 32) return 12;
  if (height <= 40) return 16;
  if (height <= 48) return 18;
  return 20;
}; // Use the same for input components.


exports.getIconSizeForButton = getIconSizeForButton;
var getIconSizeForInput = getIconSizeForButton;
exports.getIconSizeForInput = getIconSizeForInput;
var getIconSizeForSelect = getIconSizeForButton;
/**
 * Get the size for a icon in a IconButton with a certain height.
 * @param {number} height
 * @return {number} icon size
 */

exports.getIconSizeForSelect = getIconSizeForSelect;

var getIconSizeForIconButton = function getIconSizeForIconButton(height) {
  if (height <= 28) return 12;
  if (height <= 32) return 14; // Slightly bigger than getIconSizeForButton

  if (height <= 40) return 16;
  if (height <= 48) return 18;
  return 20;
};
/**
 * Get background property.
 * @param {string} background
 * @return {string} background property.
 */


exports.getIconSizeForIconButton = getIconSizeForIconButton;

var getBackground = function getBackground(background) {
  /**
   * Return one of theme presets or the original value.
   */
  return (0, _themedProperty["default"])(_foundationalStyles.colors.background, background);
};
/**
 * Get box-shadow (elevation).
 * @param {string} level — level of elevation.
 * @return {string} elevation box-shadow.
 */


exports.getBackground = getBackground;

var getElevation = function getElevation(level) {
  /**
   * There is no fallback, undefined will be returned.
   */
  return _foundationalStyles.elevations[level];
};
/**
 * Get the color for an icon.
 * @param {string} color
 * @return {string} color of the icon
 */


exports.getElevation = getElevation;

var getIconColor = function getIconColor(color) {
  /**
   * Check if there is a preset in the theme for the icon color.
   */
  return (0, _themedProperty["default"])(_foundationalStyles.colors.icon, color);
};
/**
 * Get the properties for an icon based on the intent.
 * @param {Intent} intent
 * @return {Object} properties
 */


exports.getIconColor = getIconColor;

var getIconForIntent = function getIconForIntent(intent) {
  switch (intent) {
    case _constants.Intent.SUCCESS:
      return {
        icon: 'tick-circle',
        color: 'success'
      };

    case _constants.Intent.DANGER:
      return {
        icon: 'error',
        color: 'danger'
      };

    case _constants.Intent.WARNING:
      return {
        icon: 'warning-sign',
        color: 'warning'
      };

    case _constants.Intent.NONE:
    default:
      return {
        icon: 'info-sign',
        color: 'info'
      };
  }
};
/**
 * Heading styles.
 * @param {number} size - 100–900. 500 is default.
 * @return {Object} heading style.
 */


exports.getIconForIntent = getIconForIntent;

var getHeadingStyle = function getHeadingStyle(size) {
  return (0, _themedProperty["default"])(_typography.headings, String(size));
};
/**
 * Text styles for single line text.
 * This is used in the Text component. The Text component is used by:
 * - Small
 * - Strong
 * - Code
 * - ListItem
 * - Label
 * @param {number} size - 300–500. 400 is default.
 * @return {Object} text style.
 */


exports.getHeadingStyle = getHeadingStyle;

var getTextStyle = function getTextStyle(size) {
  return (0, _themedProperty["default"])(_typography.text, String(size));
};
/**
 * Text styles for paragraphs (multi line text).
 * This is used in the Paragraph.
 * @param {number} size - 300–500. 400 is default.
 * @return {Object} text style.
 */


exports.getTextStyle = getTextStyle;

var getParagraphStyle = function getParagraphStyle(size) {
  return (0, _themedProperty["default"])(_typography.paragraph, String(size));
};
/**
 * Get the font family. This is used to override the font family.
 * @param {string} fontFamily
 * @return {string} font family
 */


exports.getParagraphStyle = getParagraphStyle;

var getFontFamily = function getFontFamily(fontFamily) {
  /**
   * Allow for passing in a custom fontFamily not in the theme.
   */
  return (0, _themedProperty["default"])(_typography.fontFamilies, fontFamily);
};
/**
 * Get the text color. This is used to override the color.
 * @param {string} fontFamily
 * @return {string} font family
 */


exports.getFontFamily = getFontFamily;

var getTextColor = function getTextColor(color) {
  /**
   * Allow for passing in a custom text color not in the theme.
   */
  return (0, _themedProperty["default"])(_foundationalStyles.colors.text, color);
};

exports.getTextColor = getTextColor;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJnZXRCb3JkZXJSYWRpdXNGb3JDb250cm9sSGVpZ2h0IiwiaGVpZ2h0IiwiZ2V0VGV4dFNpemVGb3JDb250cm9sSGVpZ2h0IiwiZ2V0SWNvblNpemVGb3JCdXR0b24iLCJnZXRJY29uU2l6ZUZvcklucHV0IiwiZ2V0SWNvblNpemVGb3JTZWxlY3QiLCJnZXRJY29uU2l6ZUZvckljb25CdXR0b24iLCJnZXRCYWNrZ3JvdW5kIiwiYmFja2dyb3VuZCIsInRoZW1lZFByb3BlcnR5IiwiY29sb3JzIiwiZ2V0RWxldmF0aW9uIiwibGV2ZWwiLCJlbGV2YXRpb25zIiwiZ2V0SWNvbkNvbG9yIiwiY29sb3IiLCJpY29uIiwiZ2V0SWNvbkZvckludGVudCIsImludGVudCIsIkludGVudCIsIlNVQ0NFU1MiLCJEQU5HRVIiLCJXQVJOSU5HIiwiTk9ORSIsImdldEhlYWRpbmdTdHlsZSIsInNpemUiLCJoZWFkaW5ncyIsIlN0cmluZyIsImdldFRleHRTdHlsZSIsInRleHQiLCJnZXRQYXJhZ3JhcGhTdHlsZSIsInBhcmFncmFwaCIsImdldEZvbnRGYW1pbHkiLCJmb250RmFtaWx5IiwiZm9udEZhbWlsaWVzIiwiZ2V0VGV4dENvbG9yIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3RoZW1lL3NyYy9kZWZhdWx0LXRoZW1lL3RoZW1lLWhlbHBlcnMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW50ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29uc3RhbnRzJ1xuaW1wb3J0IHRoZW1lZFByb3BlcnR5IGZyb20gJy4uL3V0aWxzL3RoZW1lZFByb3BlcnR5J1xuaW1wb3J0IHsgY29sb3JzLCBlbGV2YXRpb25zIH0gZnJvbSAnLi4vZm91bmRhdGlvbmFsLXN0eWxlcydcbmltcG9ydCB7IGZvbnRGYW1pbGllcywgaGVhZGluZ3MsIHBhcmFncmFwaCwgdGV4dCB9IGZyb20gJy4uL3R5cG9ncmFwaHknXG5cbi8qKlxuICogQ29udHJvbHMgaW5jbHVkZTpcbiAqIC0gQnV0dG9uXG4gKiAtIEljb25CdXR0b25cbiAqIC0gVGV4dElucHV0XG4gKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XG4gKiBAcmV0dXJuIHtudW1iZXJ9IGJvcmRlciByYWRpdXNcbiAqL1xuY29uc3QgZ2V0Qm9yZGVyUmFkaXVzRm9yQ29udHJvbEhlaWdodCA9IGhlaWdodCA9PiB7XG4gIGlmIChoZWlnaHQgPD0gNDApIHJldHVybiAzXG4gIHJldHVybiA0XG59XG5cbi8qKlxuICogR2V0IHRoZSB0ZXh0IHNpemUgZm9yIGEgY29udHJvbCB3aXRoIGEgY2VydGFpbiBoZWlnaHQuXG4gKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XG4gKiBAcmV0dXJuIHtudW1iZXJ9IHRleHQgc2l6ZSBvZiB0aGUgY29udHJvbCBoZWlnaHQuXG4gKi9cbmNvbnN0IGdldFRleHRTaXplRm9yQ29udHJvbEhlaWdodCA9IGhlaWdodCA9PiB7XG4gIGlmIChoZWlnaHQgPD0gMjQpIHJldHVybiAzMDBcbiAgaWYgKGhlaWdodCA8PSAyOCkgcmV0dXJuIDMwMFxuICBpZiAoaGVpZ2h0IDw9IDMyKSByZXR1cm4gMzAwXG4gIGlmIChoZWlnaHQgPD0gMzYpIHJldHVybiA0MDBcbiAgaWYgKGhlaWdodCA8PSA0MCkgcmV0dXJuIDQwMFxuICByZXR1cm4gNTAwXG59XG5cbi8qKlxuICogR2V0IHRoZSBzaXplIGZvciBhIGljb24gaW4gYSBCdXR0b24gd2l0aCBhIGNlcnRhaW4gaGVpZ2h0LlxuICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodFxuICogQHJldHVybiB7bnVtYmVyfSBpY29uIHNpemVcbiAqL1xuY29uc3QgZ2V0SWNvblNpemVGb3JCdXR0b24gPSBoZWlnaHQgPT4ge1xuICBpZiAoaGVpZ2h0IDw9IDI4KSByZXR1cm4gMTJcbiAgaWYgKGhlaWdodCA8PSAzMikgcmV0dXJuIDEyXG4gIGlmIChoZWlnaHQgPD0gNDApIHJldHVybiAxNlxuICBpZiAoaGVpZ2h0IDw9IDQ4KSByZXR1cm4gMThcbiAgcmV0dXJuIDIwXG59XG5cbi8vIFVzZSB0aGUgc2FtZSBmb3IgaW5wdXQgY29tcG9uZW50cy5cbmNvbnN0IGdldEljb25TaXplRm9ySW5wdXQgPSBnZXRJY29uU2l6ZUZvckJ1dHRvblxuY29uc3QgZ2V0SWNvblNpemVGb3JTZWxlY3QgPSBnZXRJY29uU2l6ZUZvckJ1dHRvblxuXG4vKipcbiAqIEdldCB0aGUgc2l6ZSBmb3IgYSBpY29uIGluIGEgSWNvbkJ1dHRvbiB3aXRoIGEgY2VydGFpbiBoZWlnaHQuXG4gKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XG4gKiBAcmV0dXJuIHtudW1iZXJ9IGljb24gc2l6ZVxuICovXG5jb25zdCBnZXRJY29uU2l6ZUZvckljb25CdXR0b24gPSBoZWlnaHQgPT4ge1xuICBpZiAoaGVpZ2h0IDw9IDI4KSByZXR1cm4gMTJcbiAgaWYgKGhlaWdodCA8PSAzMikgcmV0dXJuIDE0IC8vIFNsaWdodGx5IGJpZ2dlciB0aGFuIGdldEljb25TaXplRm9yQnV0dG9uXG4gIGlmIChoZWlnaHQgPD0gNDApIHJldHVybiAxNlxuICBpZiAoaGVpZ2h0IDw9IDQ4KSByZXR1cm4gMThcbiAgcmV0dXJuIDIwXG59XG5cbi8qKlxuICogR2V0IGJhY2tncm91bmQgcHJvcGVydHkuXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFja2dyb3VuZFxuICogQHJldHVybiB7c3RyaW5nfSBiYWNrZ3JvdW5kIHByb3BlcnR5LlxuICovXG5jb25zdCBnZXRCYWNrZ3JvdW5kID0gYmFja2dyb3VuZCA9PiB7XG4gIC8qKlxuICAgKiBSZXR1cm4gb25lIG9mIHRoZW1lIHByZXNldHMgb3IgdGhlIG9yaWdpbmFsIHZhbHVlLlxuICAgKi9cbiAgcmV0dXJuIHRoZW1lZFByb3BlcnR5KGNvbG9ycy5iYWNrZ3JvdW5kLCBiYWNrZ3JvdW5kKVxufVxuXG4vKipcbiAqIEdldCBib3gtc2hhZG93IChlbGV2YXRpb24pLlxuICogQHBhcmFtIHtzdHJpbmd9IGxldmVsIOKAlCBsZXZlbCBvZiBlbGV2YXRpb24uXG4gKiBAcmV0dXJuIHtzdHJpbmd9IGVsZXZhdGlvbiBib3gtc2hhZG93LlxuICovXG5jb25zdCBnZXRFbGV2YXRpb24gPSBsZXZlbCA9PiB7XG4gIC8qKlxuICAgKiBUaGVyZSBpcyBubyBmYWxsYmFjaywgdW5kZWZpbmVkIHdpbGwgYmUgcmV0dXJuZWQuXG4gICAqL1xuICByZXR1cm4gZWxldmF0aW9uc1tsZXZlbF1cbn1cblxuLyoqXG4gKiBHZXQgdGhlIGNvbG9yIGZvciBhbiBpY29uLlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yXG4gKiBAcmV0dXJuIHtzdHJpbmd9IGNvbG9yIG9mIHRoZSBpY29uXG4gKi9cbmNvbnN0IGdldEljb25Db2xvciA9IGNvbG9yID0+IHtcbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZXJlIGlzIGEgcHJlc2V0IGluIHRoZSB0aGVtZSBmb3IgdGhlIGljb24gY29sb3IuXG4gICAqL1xuICByZXR1cm4gdGhlbWVkUHJvcGVydHkoY29sb3JzLmljb24sIGNvbG9yKVxufVxuXG4vKipcbiAqIEdldCB0aGUgcHJvcGVydGllcyBmb3IgYW4gaWNvbiBiYXNlZCBvbiB0aGUgaW50ZW50LlxuICogQHBhcmFtIHtJbnRlbnR9IGludGVudFxuICogQHJldHVybiB7T2JqZWN0fSBwcm9wZXJ0aWVzXG4gKi9cbmNvbnN0IGdldEljb25Gb3JJbnRlbnQgPSBpbnRlbnQgPT4ge1xuICBzd2l0Y2ggKGludGVudCkge1xuICAgIGNhc2UgSW50ZW50LlNVQ0NFU1M6XG4gICAgICByZXR1cm4geyBpY29uOiAndGljay1jaXJjbGUnLCBjb2xvcjogJ3N1Y2Nlc3MnIH1cbiAgICBjYXNlIEludGVudC5EQU5HRVI6XG4gICAgICByZXR1cm4geyBpY29uOiAnZXJyb3InLCBjb2xvcjogJ2RhbmdlcicgfVxuICAgIGNhc2UgSW50ZW50LldBUk5JTkc6XG4gICAgICByZXR1cm4geyBpY29uOiAnd2FybmluZy1zaWduJywgY29sb3I6ICd3YXJuaW5nJyB9XG4gICAgY2FzZSBJbnRlbnQuTk9ORTpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHsgaWNvbjogJ2luZm8tc2lnbicsIGNvbG9yOiAnaW5mbycgfVxuICB9XG59XG5cbi8qKlxuICogSGVhZGluZyBzdHlsZXMuXG4gKiBAcGFyYW0ge251bWJlcn0gc2l6ZSAtIDEwMOKAkzkwMC4gNTAwIGlzIGRlZmF1bHQuXG4gKiBAcmV0dXJuIHtPYmplY3R9IGhlYWRpbmcgc3R5bGUuXG4gKi9cbmNvbnN0IGdldEhlYWRpbmdTdHlsZSA9IHNpemUgPT4ge1xuICByZXR1cm4gdGhlbWVkUHJvcGVydHkoaGVhZGluZ3MsIFN0cmluZyhzaXplKSlcbn1cblxuLyoqXG4gKiBUZXh0IHN0eWxlcyBmb3Igc2luZ2xlIGxpbmUgdGV4dC5cbiAqIFRoaXMgaXMgdXNlZCBpbiB0aGUgVGV4dCBjb21wb25lbnQuIFRoZSBUZXh0IGNvbXBvbmVudCBpcyB1c2VkIGJ5OlxuICogLSBTbWFsbFxuICogLSBTdHJvbmdcbiAqIC0gQ29kZVxuICogLSBMaXN0SXRlbVxuICogLSBMYWJlbFxuICogQHBhcmFtIHtudW1iZXJ9IHNpemUgLSAzMDDigJM1MDAuIDQwMCBpcyBkZWZhdWx0LlxuICogQHJldHVybiB7T2JqZWN0fSB0ZXh0IHN0eWxlLlxuICovXG5jb25zdCBnZXRUZXh0U3R5bGUgPSBzaXplID0+IHtcbiAgcmV0dXJuIHRoZW1lZFByb3BlcnR5KHRleHQsIFN0cmluZyhzaXplKSlcbn1cblxuLyoqXG4gKiBUZXh0IHN0eWxlcyBmb3IgcGFyYWdyYXBocyAobXVsdGkgbGluZSB0ZXh0KS5cbiAqIFRoaXMgaXMgdXNlZCBpbiB0aGUgUGFyYWdyYXBoLlxuICogQHBhcmFtIHtudW1iZXJ9IHNpemUgLSAzMDDigJM1MDAuIDQwMCBpcyBkZWZhdWx0LlxuICogQHJldHVybiB7T2JqZWN0fSB0ZXh0IHN0eWxlLlxuICovXG5jb25zdCBnZXRQYXJhZ3JhcGhTdHlsZSA9IHNpemUgPT4ge1xuICByZXR1cm4gdGhlbWVkUHJvcGVydHkocGFyYWdyYXBoLCBTdHJpbmcoc2l6ZSkpXG59XG5cbi8qKlxuICogR2V0IHRoZSBmb250IGZhbWlseS4gVGhpcyBpcyB1c2VkIHRvIG92ZXJyaWRlIHRoZSBmb250IGZhbWlseS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBmb250RmFtaWx5XG4gKiBAcmV0dXJuIHtzdHJpbmd9IGZvbnQgZmFtaWx5XG4gKi9cbmNvbnN0IGdldEZvbnRGYW1pbHkgPSBmb250RmFtaWx5ID0+IHtcbiAgLyoqXG4gICAqIEFsbG93IGZvciBwYXNzaW5nIGluIGEgY3VzdG9tIGZvbnRGYW1pbHkgbm90IGluIHRoZSB0aGVtZS5cbiAgICovXG4gIHJldHVybiB0aGVtZWRQcm9wZXJ0eShmb250RmFtaWxpZXMsIGZvbnRGYW1pbHkpXG59XG5cbi8qKlxuICogR2V0IHRoZSB0ZXh0IGNvbG9yLiBUaGlzIGlzIHVzZWQgdG8gb3ZlcnJpZGUgdGhlIGNvbG9yLlxuICogQHBhcmFtIHtzdHJpbmd9IGZvbnRGYW1pbHlcbiAqIEByZXR1cm4ge3N0cmluZ30gZm9udCBmYW1pbHlcbiAqL1xuY29uc3QgZ2V0VGV4dENvbG9yID0gY29sb3IgPT4ge1xuICAvKipcbiAgICogQWxsb3cgZm9yIHBhc3NpbmcgaW4gYSBjdXN0b20gdGV4dCBjb2xvciBub3QgaW4gdGhlIHRoZW1lLlxuICAgKi9cbiAgcmV0dXJuIHRoZW1lZFByb3BlcnR5KGNvbG9ycy50ZXh0LCBjb2xvcilcbn1cblxuZXhwb3J0IHtcbiAgZ2V0Qm9yZGVyUmFkaXVzRm9yQ29udHJvbEhlaWdodCxcbiAgZ2V0VGV4dFNpemVGb3JDb250cm9sSGVpZ2h0LFxuICBnZXRJY29uU2l6ZUZvckJ1dHRvbixcbiAgZ2V0SWNvblNpemVGb3JJbnB1dCxcbiAgZ2V0SWNvblNpemVGb3JTZWxlY3QsXG4gIGdldEljb25TaXplRm9ySWNvbkJ1dHRvbixcbiAgZ2V0QmFja2dyb3VuZCxcbiAgZ2V0RWxldmF0aW9uLFxuICBnZXRJY29uQ29sb3IsXG4gIGdldEljb25Gb3JJbnRlbnQsXG4gIGdldEhlYWRpbmdTdHlsZSxcbiAgZ2V0VGV4dFN0eWxlLFxuICBnZXRQYXJhZ3JhcGhTdHlsZSxcbiAgZ2V0Rm9udEZhbWlseSxcbiAgZ2V0VGV4dENvbG9yXG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSwrQkFBK0IsR0FBRyxTQUFsQ0EsK0JBQWtDLENBQUFDLE1BQU0sRUFBSTtFQUNoRCxJQUFJQSxNQUFNLElBQUksRUFBZCxFQUFrQixPQUFPLENBQVA7RUFDbEIsT0FBTyxDQUFQO0FBQ0QsQ0FIRDtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ0EsSUFBTUMsMkJBQTJCLEdBQUcsU0FBOUJBLDJCQUE4QixDQUFBRCxNQUFNLEVBQUk7RUFDNUMsSUFBSUEsTUFBTSxJQUFJLEVBQWQsRUFBa0IsT0FBTyxHQUFQO0VBQ2xCLElBQUlBLE1BQU0sSUFBSSxFQUFkLEVBQWtCLE9BQU8sR0FBUDtFQUNsQixJQUFJQSxNQUFNLElBQUksRUFBZCxFQUFrQixPQUFPLEdBQVA7RUFDbEIsSUFBSUEsTUFBTSxJQUFJLEVBQWQsRUFBa0IsT0FBTyxHQUFQO0VBQ2xCLElBQUlBLE1BQU0sSUFBSSxFQUFkLEVBQWtCLE9BQU8sR0FBUDtFQUNsQixPQUFPLEdBQVA7QUFDRCxDQVBEO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDQSxJQUFNRSxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUFGLE1BQU0sRUFBSTtFQUNyQyxJQUFJQSxNQUFNLElBQUksRUFBZCxFQUFrQixPQUFPLEVBQVA7RUFDbEIsSUFBSUEsTUFBTSxJQUFJLEVBQWQsRUFBa0IsT0FBTyxFQUFQO0VBQ2xCLElBQUlBLE1BQU0sSUFBSSxFQUFkLEVBQWtCLE9BQU8sRUFBUDtFQUNsQixJQUFJQSxNQUFNLElBQUksRUFBZCxFQUFrQixPQUFPLEVBQVA7RUFDbEIsT0FBTyxFQUFQO0FBQ0QsQ0FORCxDLENBUUE7Ozs7QUFDQSxJQUFNRyxtQkFB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