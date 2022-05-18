/**
 * Theme
 * ---
 * The theme object is used to style Evergreen.
 * It is passed into the  `<ThemeProvider theme={theme} />`.
 * ----
 * You can use this as a template for your own themes.
 */

/**
 * Foundational Styles.
 * ---
 * The following properties are NOT REQUIRED by Evergreen.
 * It's exposed for convenience and documentation.
 */
import { colors, elevations, fills, palette, scales } from './foundational-styles';
/**
 * Typography.
 * ---
 * The following properties are NOT REQUIRED by Evergreen.
 * It's exposed for convenience and documentation.
 */

import { headings, text, fontFamilies, paragraph } from './typography';
/**
 * Component Specific.
 * ---
 * These ARE REQUIRED for Evergreen to work.
 */

import { avatarColors, badgeColors, spinnerColor, overlayBackgroundColor, getBadgeClassName, getButtonClassName, getLinkClassName, getCheckboxClassName, getRadioClassName, getTagInputClassName, getTextInputClassName, getTextareaClassName, getTextDropdownButtonClassName, getTabClassName, getTableCellClassName, getTooltipProps, getRowClassName, getMenuItemClassName, getSelectClassName, getSegmentedControlRadioClassName, getSwitchClassName, getAlertProps, getCodeProps, getAvatarProps, getBadgeProps, getAvatarInitialsFontSize } from './component-specific';
/**
 * Theme Helpers.
 * ---
 * These ARE REQUIRED for Evergreen to work.
 */

import { getBorderRadiusForControlHeight, getTextSizeForControlHeight, getIconSizeForButton, getIconSizeForInput, getIconSizeForSelect, getIconSizeForIconButton, getBackground, getElevation, getIconColor, getIconForIntent, getHeadingStyle, getTextStyle, getParagraphStyle, getFontFamily, getTextColor } from './theme-helpers';
export default {
  // Foundational Styles.
  colors: colors,
  elevations: elevations,
  fills: fills,
  palette: palette,
  scales: scales,
  // Component Specific.
  avatarColors: avatarColors,
  badgeColors: badgeColors,
  spinnerColor: spinnerColor,
  overlayBackgroundColor: overlayBackgroundColor,
  getBadgeClassName: getBadgeClassName,
  getButtonClassName: getButtonClassName,
  getLinkClassName: getLinkClassName,
  getCheckboxClassName: getCheckboxClassName,
  getRadioClassName: getRadioClassName,
  getTagInputClassName: getTagInputClassName,
  getTextInputClassName: getTextInputClassName,
  getTextareaClassName: getTextareaClassName,
  getTextDropdownButtonClassName: getTextDropdownButtonClassName,
  getTabClassName: getTabClassName,
  getTableCellClassName: getTableCellClassName,
  getTooltipProps: getTooltipProps,
  getRowClassName: getRowClassName,
  getMenuItemClassName: getMenuItemClassName,
  getSelectClassName: getSelectClassName,
  getSegmentedControlRadioClassName: getSegmentedControlRadioClassName,
  getSwitchClassName: getSwitchClassName,
  getAlertProps: getAlertProps,
  getCodeProps: getCodeProps,
  getAvatarProps: getAvatarProps,
  getBadgeProps: getBadgeProps,
  getAvatarInitialsFontSize: getAvatarInitialsFontSize,
  // Theme Helpers.
  getBorderRadiusForControlHeight: getBorderRadiusForControlHeight,
  getTextSizeForControlHeight: getTextSizeForControlHeight,
  getIconSizeForButton: getIconSizeForButton,
  getIconSizeForInput: getIconSizeForInput,
  getIconSizeForSelect: getIconSizeForSelect,
  getIconSizeForIconButton: getIconSizeForIconButton,
  getBackground: getBackground,
  getElevation: getElevation,
  getIconColor: getIconColor,
  getIconForIntent: getIconForIntent,
  getHeadingStyle: getHeadingStyle,
  getTextStyle: getTextStyle,
  getParagraphStyle: getParagraphStyle,
  getFontFamily: getFontFamily,
  getTextColor: getTextColor,
  typography: {
    headings: headings,
    text: text,
    fontFamilies: fontFamilies,
    paragraph: paragraph
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb2xvcnMiLCJlbGV2YXRpb25zIiwiZmlsbHMiLCJwYWxldHRlIiwic2NhbGVzIiwiaGVhZGluZ3MiLCJ0ZXh0IiwiZm9udEZhbWlsaWVzIiwicGFyYWdyYXBoIiwiYXZhdGFyQ29sb3JzIiwiYmFkZ2VDb2xvcnMiLCJzcGlubmVyQ29sb3IiLCJvdmVybGF5QmFja2dyb3VuZENvbG9yIiwiZ2V0QmFkZ2VDbGFzc05hbWUiLCJnZXRCdXR0b25DbGFzc05hbWUiLCJnZXRMaW5rQ2xhc3NOYW1lIiwiZ2V0Q2hlY2tib3hDbGFzc05hbWUiLCJnZXRSYWRpb0NsYXNzTmFtZSIsImdldFRhZ0lucHV0Q2xhc3NOYW1lIiwiZ2V0VGV4dElucHV0Q2xhc3NOYW1lIiwiZ2V0VGV4dGFyZWFDbGFzc05hbWUiLCJnZXRUZXh0RHJvcGRvd25CdXR0b25DbGFzc05hbWUiLCJnZXRUYWJDbGFzc05hbWUiLCJnZXRUYWJsZUNlbGxDbGFzc05hbWUiLCJnZXRUb29sdGlwUHJvcHMiLCJnZXRSb3dDbGFzc05hbWUiLCJnZXRNZW51SXRlbUNsYXNzTmFtZSIsImdldFNlbGVjdENsYXNzTmFtZSIsImdldFNlZ21lbnRlZENvbnRyb2xSYWRpb0NsYXNzTmFtZSIsImdldFN3aXRjaENsYXNzTmFtZSIsImdldEFsZXJ0UHJvcHMiLCJnZXRDb2RlUHJvcHMiLCJnZXRBdmF0YXJQcm9wcyIsImdldEJhZGdlUHJvcHMiLCJnZXRBdmF0YXJJbml0aWFsc0ZvbnRTaXplIiwiZ2V0Qm9yZGVyUmFkaXVzRm9yQ29udHJvbEhlaWdodCIsImdldFRleHRTaXplRm9yQ29udHJvbEhlaWdodCIsImdldEljb25TaXplRm9yQnV0dG9uIiwiZ2V0SWNvblNpemVGb3JJbnB1dCIsImdldEljb25TaXplRm9yU2VsZWN0IiwiZ2V0SWNvblNpemVGb3JJY29uQnV0dG9uIiwiZ2V0QmFja2dyb3VuZCIsImdldEVsZXZhdGlvbiIsImdldEljb25Db2xvciIsImdldEljb25Gb3JJbnRlbnQiLCJnZXRIZWFkaW5nU3R5bGUiLCJnZXRUZXh0U3R5bGUiLCJnZXRQYXJhZ3JhcGhTdHlsZSIsImdldEZvbnRGYW1pbHkiLCJnZXRUZXh0Q29sb3IiLCJ0eXBvZ3JhcGh5Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3RoZW1lL3NyYy9kZWZhdWx0LXRoZW1lL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhlbWVcbiAqIC0tLVxuICogVGhlIHRoZW1lIG9iamVjdCBpcyB1c2VkIHRvIHN0eWxlIEV2ZXJncmVlbi5cbiAqIEl0IGlzIHBhc3NlZCBpbnRvIHRoZSAgYDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0gLz5gLlxuICogLS0tLVxuICogWW91IGNhbiB1c2UgdGhpcyBhcyBhIHRlbXBsYXRlIGZvciB5b3VyIG93biB0aGVtZXMuXG4gKi9cblxuLyoqXG4gKiBGb3VuZGF0aW9uYWwgU3R5bGVzLlxuICogLS0tXG4gKiBUaGUgZm9sbG93aW5nIHByb3BlcnRpZXMgYXJlIE5PVCBSRVFVSVJFRCBieSBFdmVyZ3JlZW4uXG4gKiBJdCdzIGV4cG9zZWQgZm9yIGNvbnZlbmllbmNlIGFuZCBkb2N1bWVudGF0aW9uLlxuICovXG5pbXBvcnQge1xuICBjb2xvcnMsXG4gIGVsZXZhdGlvbnMsXG4gIGZpbGxzLFxuICBwYWxldHRlLFxuICBzY2FsZXNcbn0gZnJvbSAnLi9mb3VuZGF0aW9uYWwtc3R5bGVzJ1xuXG4vKipcbiAqIFR5cG9ncmFwaHkuXG4gKiAtLS1cbiAqIFRoZSBmb2xsb3dpbmcgcHJvcGVydGllcyBhcmUgTk9UIFJFUVVJUkVEIGJ5IEV2ZXJncmVlbi5cbiAqIEl0J3MgZXhwb3NlZCBmb3IgY29udmVuaWVuY2UgYW5kIGRvY3VtZW50YXRpb24uXG4gKi9cbmltcG9ydCB7IGhlYWRpbmdzLCB0ZXh0LCBmb250RmFtaWxpZXMsIHBhcmFncmFwaCB9IGZyb20gJy4vdHlwb2dyYXBoeSdcblxuLyoqXG4gKiBDb21wb25lbnQgU3BlY2lmaWMuXG4gKiAtLS1cbiAqIFRoZXNlIEFSRSBSRVFVSVJFRCBmb3IgRXZlcmdyZWVuIHRvIHdvcmsuXG4gKi9cbmltcG9ydCB7XG4gIGF2YXRhckNvbG9ycyxcbiAgYmFkZ2VDb2xvcnMsXG4gIHNwaW5uZXJDb2xvcixcbiAgb3ZlcmxheUJhY2tncm91bmRDb2xvcixcbiAgZ2V0QmFkZ2VDbGFzc05hbWUsXG4gIGdldEJ1dHRvbkNsYXNzTmFtZSxcbiAgZ2V0TGlua0NsYXNzTmFtZSxcbiAgZ2V0Q2hlY2tib3hDbGFzc05hbWUsXG4gIGdldFJhZGlvQ2xhc3NOYW1lLFxuICBnZXRUYWdJbnB1dENsYXNzTmFtZSxcbiAgZ2V0VGV4dElucHV0Q2xhc3NOYW1lLFxuICBnZXRUZXh0YXJlYUNsYXNzTmFtZSxcbiAgZ2V0VGV4dERyb3Bkb3duQnV0dG9uQ2xhc3NOYW1lLFxuICBnZXRUYWJDbGFzc05hbWUsXG4gIGdldFRhYmxlQ2VsbENsYXNzTmFtZSxcbiAgZ2V0VG9vbHRpcFByb3BzLFxuICBnZXRSb3dDbGFzc05hbWUsXG4gIGdldE1lbnVJdGVtQ2xhc3NOYW1lLFxuICBnZXRTZWxlY3RDbGFzc05hbWUsXG4gIGdldFNlZ21lbnRlZENvbnRyb2xSYWRpb0NsYXNzTmFtZSxcbiAgZ2V0U3dpdGNoQ2xhc3NOYW1lLFxuICBnZXRBbGVydFByb3BzLFxuICBnZXRDb2RlUHJvcHMsXG4gIGdldEF2YXRhclByb3BzLFxuICBnZXRCYWRnZVByb3BzLFxuICBnZXRBdmF0YXJJbml0aWFsc0ZvbnRTaXplXG59IGZyb20gJy4vY29tcG9uZW50LXNwZWNpZmljJ1xuXG4vKipcbiAqIFRoZW1lIEhlbHBlcnMuXG4gKiAtLS1cbiAqIFRoZXNlIEFSRSBSRVFVSVJFRCBmb3IgRXZlcmdyZWVuIHRvIHdvcmsuXG4gKi9cbmltcG9ydCB7XG4gIGdldEJvcmRlclJhZGl1c0ZvckNvbnRyb2xIZWlnaHQsXG4gIGdldFRleHRTaXplRm9yQ29udHJvbEhlaWdodCxcbiAgZ2V0SWNvblNpemVGb3JCdXR0b24sXG4gIGdldEljb25TaXplRm9ySW5wdXQsXG4gIGdldEljb25TaXplRm9yU2VsZWN0LFxuICBnZXRJY29uU2l6ZUZvckljb25CdXR0b24sXG4gIGdldEJhY2tncm91bmQsXG4gIGdldEVsZXZhdGlvbixcbiAgZ2V0SWNvbkNvbG9yLFxuICBnZXRJY29uRm9ySW50ZW50LFxuICBnZXRIZWFkaW5nU3R5bGUsXG4gIGdldFRleHRTdHlsZSxcbiAgZ2V0UGFyYWdyYXBoU3R5bGUsXG4gIGdldEZvbnRGYW1pbHksXG4gIGdldFRleHRDb2xvclxufSBmcm9tICcuL3RoZW1lLWhlbHBlcnMnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgLy8gRm91bmRhdGlvbmFsIFN0eWxlcy5cbiAgY29sb3JzLFxuICBlbGV2YXRpb25zLFxuICBmaWxscyxcbiAgcGFsZXR0ZSxcbiAgc2NhbGVzLFxuXG4gIC8vIENvbXBvbmVudCBTcGVjaWZpYy5cbiAgYXZhdGFyQ29sb3JzLFxuICBiYWRnZUNvbG9ycyxcbiAgc3Bpbm5lckNvbG9yLFxuICBvdmVybGF5QmFja2dyb3VuZENvbG9yLFxuICBnZXRCYWRnZUNsYXNzTmFtZSxcbiAgZ2V0QnV0dG9uQ2xhc3NOYW1lLFxuICBnZXRMaW5rQ2xhc3NOYW1lLFxuICBnZXRDaGVja2JveENsYXNzTmFtZSxcbiAgZ2V0UmFkaW9DbGFzc05hbWUsXG4gIGdldFRhZ0lucHV0Q2xhc3NOYW1lLFxuICBnZXRUZXh0SW5wdXRDbGFzc05hbWUsXG4gIGdldFRleHRhcmVhQ2xhc3NOYW1lLFxuICBnZXRUZXh0RHJvcGRvd25CdXR0b25DbGFzc05hbWUsXG4gIGdldFRhYkNsYXNzTmFtZSxcbiAgZ2V0VGFibGVDZWxsQ2xhc3NOYW1lLFxuICBnZXRUb29sdGlwUHJvcHMsXG4gIGdldFJvd0NsYXNzTmFtZSxcbiAgZ2V0TWVudUl0ZW1DbGFzc05hbWUsXG4gIGdldFNlbGVjdENsYXNzTmFtZSxcbiAgZ2V0U2VnbWVudGVkQ29udHJvbFJhZGlvQ2xhc3NOYW1lLFxuICBnZXRTd2l0Y2hDbGFzc05hbWUsXG4gIGdldEFsZXJ0UHJvcHMsXG4gIGdldENvZGVQcm9wcyxcbiAgZ2V0QXZhdGFyUHJvcHMsXG4gIGdldEJhZGdlUHJvcHMsXG4gIGdldEF2YXRhckluaXRpYWxzRm9udFNpemUsXG5cbiAgLy8gVGhlbWUgSGVscGVycy5cbiAgZ2V0Qm9yZGVyUmFkaXVzRm9yQ29udHJvbEhlaWdodCxcbiAgZ2V0VGV4dFNpemVGb3JDb250cm9sSGVpZ2h0LFxuICBnZXRJY29uU2l6ZUZvckJ1dHRvbixcbiAgZ2V0SWNvblNpemVGb3JJbnB1dCxcbiAgZ2V0SWNvblNpemVGb3JTZWxlY3QsXG4gIGdldEljb25TaXplRm9ySWNvbkJ1dHRvbixcbiAgZ2V0QmFja2dyb3VuZCxcbiAgZ2V0RWxldmF0aW9uLFxuICBnZXRJY29uQ29sb3IsXG4gIGdldEljb25Gb3JJbnRlbnQsXG4gIGdldEhlYWRpbmdTdHlsZSxcbiAgZ2V0VGV4dFN0eWxlLFxuICBnZXRQYXJhZ3JhcGhTdHlsZSxcbiAgZ2V0Rm9udEZhbWlseSxcbiAgZ2V0VGV4dENvbG9yLFxuXG4gIHR5cG9ncmFwaHk6IHtcbiAgICBoZWFkaW5ncyxcbiAgICB0ZXh0LFxuICAgIGZvbnRGYW1pbGllcyxcbiAgICBwYXJhZ3JhcGhcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQ0VBLE1BREYsRUFFRUMsVUFGRixFQUdFQyxLQUhGLEVBSUVDLE9BSkYsRUFLRUMsTUFMRixRQU1PLHVCQU5QO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNDLFFBQVQsRUFBbUJDLElBQW5CLEVBQXlCQyxZQUF6QixFQUF1Q0MsU0FBdkMsUUFBd0QsY0FBeEQ7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQ0VDLFlBREYsRUFFRUMsV0FGRixFQUdFQyxZQUhGLEVBSUVDLHNCQUpGLEVBS0VDLGlCQUxGLEVBTUVDLGtCQU5GLEVBT0VDLGdCQVBGLEVBUUVDLG9CQVJGLEVBU0VDLGlC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