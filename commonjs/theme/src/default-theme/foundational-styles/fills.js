"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _palette = _interopRequireDefault(require("./palette"));

var _colors = _interopRequireDefault(require("./colors"));

/**
 * Fills are used in Avatars and Badges.
 */
var fills = {};
fills.solid = {
  neutral: {
    color: 'white',
    backgroundColor: _palette["default"].neutral.base
  },
  blue: {
    color: 'white',
    backgroundColor: _palette["default"].blue.base
  },
  red: {
    color: 'white',
    backgroundColor: _palette["default"].red.base
  },
  orange: {
    color: 'white',
    backgroundColor: _palette["default"].orange.base
  },
  yellow: {
    color: _palette["default"].yellow.dark,
    backgroundColor: _palette["default"].yellow.base
  },
  green: {
    color: 'white',
    backgroundColor: _palette["default"].green.base
  },
  teal: {
    color: 'white',
    backgroundColor: _palette["default"].teal.base
  },
  purple: {
    color: 'white',
    backgroundColor: _palette["default"].purple.base
  }
};
fills.subtle = {
  neutral: {
    color: _colors["default"].text["default"],
    backgroundColor: _palette["default"].neutral.light
  },
  blue: {
    color: _palette["default"].blue.dark,
    backgroundColor: _palette["default"].blue.light
  },
  red: {
    color: _palette["default"].red.dark,
    backgroundColor: _palette["default"].red.light
  },
  orange: {
    color: _palette["default"].orange.dark,
    backgroundColor: _palette["default"].orange.light
  },
  yellow: {
    color: _palette["default"].yellow.dark,
    backgroundColor: _palette["default"].yellow.light
  },
  green: {
    color: _palette["default"].green.dark,
    backgroundColor: _palette["default"].green.light
  },
  teal: {
    color: _palette["default"].teal.dark,
    backgroundColor: _palette["default"].teal.light
  },
  purple: {
    color: _palette["default"].purple.dark,
    backgroundColor: _palette["default"].purple.light
  }
};
fills.options = Object.keys(fills.solid);
var _default = fills;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJmaWxscyIsInNvbGlkIiwibmV1dHJhbCIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImJhc2UiLCJibHVlIiwicmVkIiwib3JhbmdlIiwieWVsbG93IiwiZGFyayIsImdyZWVuIiwidGVhbCIsInB1cnBsZSIsInN1YnRsZSIsImNvbG9ycyIsInRleHQiLCJsaWdodCIsIm9wdGlvbnMiLCJPYmplY3QiLCJrZXlzIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3RoZW1lL3NyYy9kZWZhdWx0LXRoZW1lL2ZvdW5kYXRpb25hbC1zdHlsZXMvZmlsbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhbGV0dGUgZnJvbSAnLi9wYWxldHRlJ1xuaW1wb3J0IGNvbG9ycyBmcm9tICcuL2NvbG9ycydcblxuLyoqXG4gKiBGaWxscyBhcmUgdXNlZCBpbiBBdmF0YXJzIGFuZCBCYWRnZXMuXG4gKi9cbmNvbnN0IGZpbGxzID0ge31cblxuZmlsbHMuc29saWQgPSB7XG4gIG5ldXRyYWw6IHtcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHBhbGV0dGUubmV1dHJhbC5iYXNlXG4gIH0sXG4gIGJsdWU6IHtcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHBhbGV0dGUuYmx1ZS5iYXNlXG4gIH0sXG4gIHJlZDoge1xuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIGJhY2tncm91bmRDb2xvcjogcGFsZXR0ZS5yZWQuYmFzZVxuICB9LFxuICBvcmFuZ2U6IHtcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHBhbGV0dGUub3JhbmdlLmJhc2VcbiAgfSxcbiAgeWVsbG93OiB7XG4gICAgY29sb3I6IHBhbGV0dGUueWVsbG93LmRhcmssXG4gICAgYmFja2dyb3VuZENvbG9yOiBwYWxldHRlLnllbGxvdy5iYXNlXG4gIH0sXG4gIGdyZWVuOiB7XG4gICAgY29sb3I6ICd3aGl0ZScsXG4gICAgYmFja2dyb3VuZENvbG9yOiBwYWxldHRlLmdyZWVuLmJhc2VcbiAgfSxcbiAgdGVhbDoge1xuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIGJhY2tncm91bmRDb2xvcjogcGFsZXR0ZS50ZWFsLmJhc2VcbiAgfSxcbiAgcHVycGxlOiB7XG4gICAgY29sb3I6ICd3aGl0ZScsXG4gICAgYmFja2dyb3VuZENvbG9yOiBwYWxldHRlLnB1cnBsZS5iYXNlXG4gIH1cbn1cblxuZmlsbHMuc3VidGxlID0ge1xuICBuZXV0cmFsOiB7XG4gICAgY29sb3I6IGNvbG9ycy50ZXh0LmRlZmF1bHQsXG4gICAgYmFja2dyb3VuZENvbG9yOiBwYWxldHRlLm5ldXRyYWwubGlnaHRcbiAgfSxcbiAgYmx1ZToge1xuICAgIGNvbG9yOiBwYWxldHRlLmJsdWUuZGFyayxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHBhbGV0dGUuYmx1ZS5saWdodFxuICB9LFxuICByZWQ6IHtcbiAgICBjb2xvcjogcGFsZXR0ZS5yZWQuZGFyayxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHBhbGV0dGUucmVkLmxpZ2h0XG4gIH0sXG4gIG9yYW5nZToge1xuICAgIGNvbG9yOiBwYWxldHRlLm9yYW5nZS5kYXJrLFxuICAgIGJhY2tncm91bmRDb2xvcjogcGFsZXR0ZS5vcmFuZ2UubGlnaHRcbiAgfSxcbiAgeWVsbG93OiB7XG4gICAgY29sb3I6IHBhbGV0dGUueWVsbG93LmRhcmssXG4gICAgYmFja2dyb3VuZENvbG9yOiBwYWxldHRlLnllbGxvdy5saWdodFxuICB9LFxuICBncmVlbjoge1xuICAgIGNvbG9yOiBwYWxldHRlLmdyZWVuLmRhcmssXG4gICAgYmFja2dyb3VuZENvbG9yOiBwYWxldHRlLmdyZWVuLmxpZ2h0XG4gIH0sXG4gIHRlYWw6IHtcbiAgICBjb2xvcjogcGFsZXR0ZS50ZWFsLmRhcmssXG4gICAgYmFja2dyb3VuZENvbG9yOiBwYWxldHRlLnRlYWwubGlnaHRcbiAgfSxcbiAgcHVycGxlOiB7XG4gICAgY29sb3I6IHBhbGV0dGUucHVycGxlLmRhcmssXG4gICAgYmFja2dyb3VuZENvbG9yOiBwYWxldHRlLnB1cnBsZS5saWdodFxuICB9XG59XG5cbmZpbGxzLm9wdGlvbnMgPSBPYmplY3Qua2V5cyhmaWxscy5zb2xpZClcblxuZXhwb3J0IGRlZmF1bHQgZmlsbHNcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsS0FBSyxHQUFHLEVBQWQ7QUFFQUEsS0FBSyxDQUFDQyxLQUFOLEdBQWM7RUFDWkMsT0FBTyxFQUFFO0lBQ1BDLEtBQUssRUFBRSxPQURBO0lBRVBDLGVBQWUsRUFBRUMsbUJBQUEsQ0FBUUgsT0FBUixDQUFnQkk7RUFGMUIsQ0FERztFQUtaQyxJQUFJLEVBQUU7SUFDSkosS0FBSyxFQUFFLE9BREg7SUFFSkMsZUFBZSxFQUFFQyxtQkFBQSxDQUFRRSxJQUFSLENBQWFEO0VBRjFCLENBTE07RUFTWkUsR0FBRyxFQUFFO0lBQ0hMLEtBQUssRUFBRSxPQURKO0lBRUhDLGVBQWUsRUFBRUMsbUJBQUEsQ0FBUUcsR0FBUixDQUFZRjtFQUYxQixDQVRPO0VBYVpHLE1BQU0sRUFBRTtJQUNOTixLQUFLLEVBQUUsT0FERDtJQUVOQyxlQUFlLEVBQUVDLG1CQUFBLENBQVFJLE1BQVIsQ0FBZUg7RUFGMUIsQ0FiSTtFQWlCWkksTUFBTSxFQUFFO0lBQ05QLEtBQUssRUFBRUUsbUJBQUEsQ0FBUUssTUFBUixDQUFlQyxJQURoQjtJQUVOUCxlQUFlLEVBQUVDLG1CQUFBLENBQVFLLE1BQVIsQ0FBZUo7RUFGMUIsQ0FqQkk7RUFxQlpNLEtBQUssRUFBRTtJQUNMVCxLQUFLLEVBQUUsT0FERjtJQUVMQyxlQUFlLEVBQUVDLG1CQUFBLENBQVFPLEtBQVIsQ0FBY047RUFGMUIsQ0FyQks7RUF5QlpPLElBQUksRUFBRTtJQUNKVixLQUFLLEVBQUUsT0FESDtJQUVKQyxlQUFlLEVBQUVDLG1CQUFBLENBQVFRLElBQVIsQ0FBYVA7RUFGMUIsQ0F6Qk07RUE2QlpRLE1BQU0sRUFBRTtJQUNOWCxLQUFLLEVBQUUsT0FERDtJQUVOQyxlQUFlLEVBQUVDLG1CQUFBLENBQVFTLE1BQVIsQ0FBZVI7RUFGMUI7QUE3QkksQ0FBZDtBQW1DQU4sS0FBSyxDQUFDZSxNQUFOLEdBQWU7RUFDYmIsT0FBTyxFQUFFO0lBQ1BDLEtBQUssRUFBRWEsa0JBQUEsQ0FBT0MsSUFBUCxXQURBO0lBRVBiLGVBQWUsRUFBRUMsbUJBQUEsQ0FBUUgsT0FBUixDQUFnQmdCO0VBRjFCLENBREk7RUFLYlgsSUFBSSxFQUFFO0lBQ0pKLEtBQUssRUFBRUUsbUJBQUEsQ0FBUUUsSUFBUixDQUFhSSxJQURoQjtJQUVKUCxlQUFlLEVBQUVDLG1CQUFBLENBQVFFLElBQVIsQ0FBYVc7RUFGMUIsQ0FMTztFQVNiVixHQUFHLEVBQUU7SUFDSEwsS0FBSyxFQUFFRSxtQkFBQSxDQUFRRyxHQUFSLENBQVlHLElBRGhCO0lBRUhQLGVBQWUsRUFBRUMsbUJBQUEsQ0FBUUcsR0FBUixDQUFZVTtFQUYxQixDQVRRO0VBYWJULE1BQU0sRUFBRTtJQUNOTixLQUFLLEVBQUVFLG1CQUFBLENBQVFJLE1BQVIsQ0FBZUUsSUFEaEI7SUFFTlAsZUFBZSxFQUFFQyxtQkFBQSxDQUFRSSxNQUFSLENBQWVTO0VBRjFCLENBYks7RUFpQmJSLE1BQU0sRUFBRTtJQUNOUCxLQUFLLEVBQUVFLG1CQUFBLENBQVFLLE1BQVIsQ0FBZUMsSUFEaEI7SUFFTlAsZUFBZSxFQUFFQyxtQkFBQSxDQUFRSyxNQUFSLENBQWVRO0VBRjFCLENBakJLO0VBcUJiTixLQUFLLEVBQUU7SUFDTFQsS0FBSyxFQUFFRSxtQkFBQSxDQUFRTyxLQUFSLENBQWNELElBRGhCO0lBRUxQLGVBQWUsRUFBRUMsbUJBQUEsQ0FBUU8sS0FBUixDQUFjTTtFQUYxQixDQXJCTTtFQXlCYkwsSUFBSSxFQUFFO0lBQ0pWLEtBQUssRUFBRUUsbUJBQUEsQ0FBUVEsSUFBUixDQUFhRixJQURoQjtJQUVKUCxlQUFlLEVBQUVDLG1CQUFBLENBQVFRLElBQVIsQ0FBYUs7RUFGMUIsQ0F6Qk87RUE2QmJKLE1BQU0sRUFBRTtJQUNOWCxLQUFLLEVBQUVFLG1CQUFBLENBQVFTLE1BQVIsQ0FBZUgsSUFEaEI7SUFFTlAsZUFBZSxFQUFFQyxtQkFBQSxDQUFRUyxNQUFSLENBQWVJO0VBRjFCO0FBN0JLLENBQWY7QUFtQ0FsQixLQUFLLENBQUNtQixPQUFOLEdBQWdCQyxNQUFNLENBQUNDLElBQVAsQ0FBWXJCLEtBQUssQ0FBQ0MsS0FBbEIsQ0FBaEI7ZUFFZUQsSyJ9