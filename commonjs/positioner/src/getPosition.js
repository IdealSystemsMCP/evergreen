"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getFittedPosition;

var _constants = require("../../constants");

/**
 * Function to create a Rect.
 * @param {Object} dimensions
 * @param {Number} dimensions.width
 * @param {Number} dimensions.height
 * @param {Object} position
 * @param {Number} position.left
 * @param {Number} position.top
 * @return {Object} Rect { width, height, left, top, right, bottom }
 */
var makeRect = function makeRect(_ref, _ref2) {
  var width = _ref.width,
      height = _ref.height;
  var left = _ref2.left,
      top = _ref2.top;
  var ceiledLeft = Math.ceil(left);
  var ceiledTop = Math.ceil(top);
  return {
    width: width,
    height: height,
    left: ceiledLeft,
    top: ceiledTop,
    right: ceiledLeft + width,
    bottom: ceiledTop + height
  };
};
/**
 * Function to flip a position upside down.
 * @param {Position} position
 * @return {Position} flipped position
 */


var flipHorizontal = function flipHorizontal(position) {
  switch (position) {
    case _constants.Position.TOP_LEFT:
      return _constants.Position.BOTTOM_LEFT;

    case _constants.Position.TOP:
    default:
      return _constants.Position.BOTTOM;

    case _constants.Position.TOP_RIGHT:
      return _constants.Position.BOTTOM_RIGHT;

    case _constants.Position.BOTTOM_LEFT:
      return _constants.Position.TOP_LEFT;

    case _constants.Position.BOTTOM:
      return _constants.Position.TOP;

    case _constants.Position.BOTTOM_RIGHT:
      return _constants.Position.TOP_RIGHT;
  }
};
/**
 * Function that returns if position is aligned on top.
 * @param {Position} position
 * @return {Boolean}
 */


var isAlignedOnTop = function isAlignedOnTop(position) {
  switch (position) {
    case _constants.Position.TOP_LEFT:
    case _constants.Position.TOP:
    case _constants.Position.TOP_RIGHT:
      return true;

    default:
      return false;
  }
};
/**
 * Function that returns if position is aligned left or right.
 * @param {Position} position
 * @return {Boolean}
 */


var isAlignedHorizontal = function isAlignedHorizontal(position) {
  switch (position) {
    case _constants.Position.LEFT:
    case _constants.Position.RIGHT:
      return true;

    default:
      return false;
  }
};
/**
 * Function that returns if a rect fits on bottom.
 * @param {Rect} rect
 * @param {Object} viewport
 * @param {Number} viewportOffset
 * @return {Boolean}
 */


var getFitsOnBottom = function getFitsOnBottom(rect, viewport, viewportOffset) {
  return rect.bottom < viewport.height - viewportOffset;
};
/**
 * Function that returns if a rect fits on top.
 * @param {Rect} rect
 * @param {Number} viewportOffset
 * @return {Boolean}
 */


var getFitsOnTop = function getFitsOnTop(rect, viewportOffset) {
  return rect.top > viewportOffset;
};
/**
 * Function that returns if a rect fits on right.
 * @param {Rect} rect
 * @param {Object} viewport
 * @param {Number} viewportOffset
 * @return {Boolean}
 */


var getFitsOnRight = function getFitsOnRight(rect, viewport, viewportOffset) {
  return rect.right < viewport.width - viewportOffset;
};
/**
 * Function that returns if a rect fits on left.
 * @param {Rect} rect
 * @param {Number} viewportOffset
 * @return {Boolean}
 */


var getFitsOnLeft = function getFitsOnLeft(rect, viewportOffset) {
  return rect.left > viewportOffset;
};
/**
 * https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin
 * Function that returns the CSS `tranform-origin` property.
 * @param {Rect} rect
 * @param {Position} position
 * @param {Object} dimensions — the dimensions of the positioner.
 * @param {Number} targetCenter - center of the target.
 * @return {String} transform origin
 */


var getTransformOrigin = function getTransformOrigin(_ref3) {
  var rect = _ref3.rect,
      position = _ref3.position,
      dimensions = _ref3.dimensions,
      targetCenter = _ref3.targetCenter;
  var centerY = Math.round(targetCenter - rect.top);

  if (position === _constants.Position.LEFT) {
    /* Syntax: x-offset | y-offset */
    return "".concat(dimensions.width, "px ").concat(centerY, "px");
  }

  if (position === _constants.Position.RIGHT) {
    /* Syntax: x-offset | y-offset */
    return "0px ".concat(centerY, "px");
  }

  var centerX = Math.round(targetCenter - rect.left);

  if (isAlignedOnTop(position)) {
    /* Syntax: x-offset | y-offset */
    return "".concat(centerX, "px ").concat(dimensions.height, "px ");
  }
  /* Syntax: x-offset | y-offset */


  return "".concat(centerX, "px 0px ");
};
/**
 * Function that takes in numbers and position and gives the final coords.
 * @param {Position} position — the position the positioner should be on.
 * @param {Object} dimensions — the dimensions of the positioner.
 * @param {Object} targetRect — the rect of the target.
 * @param {Number} targetOffset - offset from the target.
 * @param {Object} viewport - the width and height of the viewport.
 * @param {Object} viewportOffset - offset from the viewport.
 * @return {Object} - { x: Number, y: Number }
 */


function getFittedPosition(_ref4) {
  var position = _ref4.position,
      dimensions = _ref4.dimensions,
      targetRect = _ref4.targetRect,
      targetOffset = _ref4.targetOffset,
      viewport = _ref4.viewport,
      _ref4$viewportOffset = _ref4.viewportOffset,
      viewportOffset = _ref4$viewportOffset === void 0 ? 8 : _ref4$viewportOffset;

  var _getPosition = getPosition({
    position: position,
    dimensions: dimensions,
    targetRect: targetRect,
    targetOffset: targetOffset,
    viewport: viewport,
    viewportOffset: viewportOffset
  }),
      rect = _getPosition.rect,
      finalPosition = _getPosition.position; // Push rect to the right if overflowing on the left side of the viewport.


  if (rect.left < viewportOffset) {
    rect.right += Math.ceil(Math.abs(rect.left - viewportOffset));
    rect.left = Math.ceil(viewportOffset);
  } // Push rect to the left if overflowing on the right side of the viewport.


  if (rect.right > viewport.width - viewportOffset) {
    var delta = Math.ceil(rect.right - (viewport.width - viewportOffset));
    rect.left -= delta;
    rect.right -= delta;
  } // Push rect down if overflowing on the top side of the viewport.


  if (rect.top < viewportOffset) {
    rect.top += Math.ceil(Math.abs(rect.top - viewportOffset));
    rect.bottom = Math.ceil(viewportOffset);
  } // Push rect up if overflowing on the bottom side of the viewport.


  if (rect.bottom > viewport.height - viewportOffset) {
    var _delta = Math.ceil(rect.bottom - (viewport.height - viewportOffset));

    rect.top -= _delta;
    rect.bottom -= _delta;
  }

  var targetCenter = isAlignedHorizontal(position) ? targetRect.top + targetRect.height / 2 : targetRect.left + targetRect.width / 2;
  var transformOrigin = getTransformOrigin({
    rect: rect,
    position: finalPosition,
    dimensions: dimensions,
    targetCenter: targetCenter
  });
  return {
    rect: rect,
    position: finalPosition,
    transformOrigin: transformOrigin
  };
}
/**
 * Function that takes in numbers and position and gives the final coords.
 * @param {Position} position — the position the positioner should be on.
 * @param {Object} dimensions — the dimensions of the positioner.
 * @param {Object} targetRect — the rect of the target.
 * @param {Number} targetOffset - offset from the target.
 * @param {Object} viewport - the width and height of the viewport.
 * @param {Object} viewportOffset - offset from the viewport.
 * @return {Object} - { rect: Rect, position: Position }
 */


function getPosition(_ref5) {
  var position = _ref5.position,
      dimensions = _ref5.dimensions,
      targetRect = _ref5.targetRect,
      targetOffset = _ref5.targetOffset,
      viewport = _ref5.viewport,
      _ref5$viewportOffset = _ref5.viewportOffset,
      viewportOffset = _ref5$viewportOffset === void 0 ? 8 : _ref5$viewportOffset;
  var isHorizontal = isAlignedHorizontal(position); // Handle left and right positions

  if (isHorizontal) {
    var leftRect = getRect({
      position: _constants.Position.LEFT,
      dimensions: dimensions,
      targetRect: targetRect,
      targetOffset: targetOffset
    });
    var rightRect = getRect({
      position: _constants.Position.RIGHT,
      dimensions: dimensions,
      targetRect: targetRect,
      targetOffset: targetOffset
    });
    var fitsOnLeft = getFitsOnLeft(leftRect, viewportOffset);
    var fitsOnRight = getFitsOnRight(rightRect, viewport, viewportOffset);

    if (position === _constants.Position.LEFT) {
      if (fitsOnLeft) {
        return {
          position: position,
          rect: leftRect
        };
      }

      if (fitsOnRight) {
        return {
          position: _constants.Position.RIGHT,
          rect: rightRect
        };
      }
    }

    if (position === _constants.Position.RIGHT) {
      if (fitsOnRight) {
        return {
          position: position,
          rect: rightRect
        };
      }

      if (fitsOnLeft) {
        return {
          position: _constants.Position.LEFT,
          rect: leftRect
        };
      }
    } // Default to using the position with the most space


    var spaceRight = Math.abs(viewport.width - viewportOffset - rightRect.right);
    var spaceLeft = Math.abs(leftRect.left - viewportOffset);

    if (spaceRight < spaceLeft) {
      return {
        position: _constants.Position.RIGHT,
        rect: rightRect
      };
    }

    return {
      position: _constants.Position.LEFT,
      rect: leftRect
    };
  }

  var positionIsAlignedOnTop = isAlignedOnTop(position);
  var topRect;
  var bottomRect;

  if (positionIsAlignedOnTop) {
    topRect = getRect({
      position: position,
      dimensions: dimensions,
      targetRect: targetRect,
      targetOffset: targetOffset
    });
    bottomRect = getRect({
      position: flipHorizontal(position),
      dimensions: dimensions,
      targetRect: targetRect,
      targetOffset: targetOffset
    });
  } else {
    topRect = getRect({
      position: flipHorizontal(position),
      dimensions: dimensions,
      targetRect: targetRect,
      targetOffset: targetOffset
    });
    bottomRect = getRect({
      position: position,
      dimensions: dimensions,
      targetRect: targetRect,
      targetOffset: targetOffset
    });
  }

  var topRectFitsOnTop = getFitsOnTop(topRect, viewportOffset);
  var bottomRectFitsOnBottom = getFitsOnBottom(bottomRect, viewport, viewportOffset);

  if (positionIsAlignedOnTop) {
    if (topRectFitsOnTop) {
      return {
        position: position,
        rect: topRect
      };
    }

    if (bottomRectFitsOnBottom) {
      return {
        position: flipHorizontal(position),
        rect: bottomRect
      };
    }
  }

  if (!positionIsAlignedOnTop) {
    if (bottomRectFitsOnBottom) {
      return {
        position: position,
        rect: bottomRect
      };
    }

    if (topRectFitsOnTop) {
      return {
        position: flipHorizontal(position),
        rect: topRect
      };
    }
  } // Default to most spacious if there is no fit.


  var spaceBottom = Math.abs(viewport.height - viewportOffset - bottomRect.bottom);
  var spaceTop = Math.abs(topRect.top - viewportOffset);

  if (spaceBottom < spaceTop) {
    return {
      position: positionIsAlignedOnTop ? flipHorizontal(position) : position,
      rect: bottomRect
    };
  }

  return {
    position: positionIsAlignedOnTop ? position : flipHorizontal(position),
    rect: topRect
  };
}
/**
 * Function that takes in numbers and position and gives the final coords.
 * @param {Object} position - the width and height of the viewport.
 * @param {Number} targetOffset - offset from the target.
 * @param {Object} dimensions — the dimensions of the positioner.
 * @param {Object} targetRect — the rect of the target.
 * @return {Object} - { x: Number, y: Number }
 */


function getRect(_ref6) {
  var position = _ref6.position,
      targetOffset = _ref6.targetOffset,
      dimensions = _ref6.dimensions,
      targetRect = _ref6.targetRect;
  var leftRect = targetRect.left + targetRect.width / 2 - dimensions.width / 2;
  var alignedTopY = targetRect.top - dimensions.height - targetOffset;
  var alignedBottomY = targetRect.bottom + targetOffset;
  var alignedRightX = targetRect.right - dimensions.width;
  var alignedLeftRightY = targetRect.top + targetRect.height / 2 - dimensions.height / 2;

  switch (position) {
    case _constants.Position.LEFT:
      return makeRect(dimensions, {
        left: targetRect.left - dimensions.width - targetOffset,
        top: alignedLeftRightY
      });

    case _constants.Position.RIGHT:
      return makeRect(dimensions, {
        left: targetRect.right + targetOffset,
        top: alignedLeftRightY
      });

    case _constants.Position.TOP:
      return makeRect(dimensions, {
        left: leftRect,
        top: alignedTopY
      });

    case _constants.Position.TOP_LEFT:
      return makeRect(dimensions, {
        left: targetRect.left,
        top: alignedTopY
      });

    case _constants.Position.TOP_RIGHT:
      return makeRect(dimensions, {
        left: alignedRightX,
        top: alignedTopY
      });

    default:
    case _constants.Position.BOTTOM:
      return makeRect(dimensions, {
        left: leftRect,
        top: alignedBottomY
      });

    case _constants.Position.BOTTOM_LEFT:
      return makeRect(dimensions, {
        left: targetRect.left,
        top: alignedBottomY
      });

    case _constants.Position.BOTTOM_RIGHT:
      return makeRect(dimensions, {
        left: alignedRightX,
        top: alignedBottomY
      });
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJtYWtlUmVjdCIsIndpZHRoIiwiaGVpZ2h0IiwibGVmdCIsInRvcCIsImNlaWxlZExlZnQiLCJNYXRoIiwiY2VpbCIsImNlaWxlZFRvcCIsInJpZ2h0IiwiYm90dG9tIiwiZmxpcEhvcml6b250YWwiLCJwb3NpdGlvbiIsIlBvc2l0aW9uIiwiVE9QX0xFRlQiLCJCT1RUT01fTEVGVCIsIlRPUCIsIkJPVFRPTSIsIlRPUF9SSUdIVCIsIkJPVFRPTV9SSUdIVCIsImlzQWxpZ25lZE9uVG9wIiwiaXNBbGlnbmVkSG9yaXpvbnRhbCIsIkxFRlQiLCJSSUdIVCIsImdldEZpdHNPbkJvdHRvbSIsInJlY3QiLCJ2aWV3cG9ydCIsInZpZXdwb3J0T2Zmc2V0IiwiZ2V0Rml0c09uVG9wIiwiZ2V0Rml0c09uUmlnaHQiLCJnZXRGaXRzT25MZWZ0IiwiZ2V0VHJhbnNmb3JtT3JpZ2luIiwiZGltZW5zaW9ucyIsInRhcmdldENlbnRlciIsImNlbnRlclkiLCJyb3VuZCIsImNlbnRlclgiLCJnZXRGaXR0ZWRQb3NpdGlvbiIsInRhcmdldFJlY3QiLCJ0YXJnZXRPZmZzZXQiLCJnZXRQb3NpdGlvbiIsImZpbmFsUG9zaXRpb24iLCJhYnMiLCJkZWx0YSIsInRyYW5zZm9ybU9yaWdpbiIsImlzSG9yaXpvbnRhbCIsImxlZnRSZWN0IiwiZ2V0UmVjdCIsInJpZ2h0UmVjdCIsImZpdHNPbkxlZnQiLCJmaXRzT25SaWdodCIsInNwYWNlUmlnaHQiLCJzcGFjZUxlZnQiLCJwb3NpdGlvbklzQWxpZ25lZE9uVG9wIiwidG9wUmVjdCIsImJvdHRvbVJlY3QiLCJ0b3BSZWN0Rml0c09uVG9wIiwiYm90dG9tUmVjdEZpdHNPbkJvdHRvbSIsInNwYWNlQm90dG9tIiwic3BhY2VUb3AiLCJhbGlnbmVkVG9wWSIsImFsaWduZWRCb3R0b21ZIiwiYWxpZ25lZFJpZ2h0WCIsImFsaWduZWRMZWZ0UmlnaHRZIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3Bvc2l0aW9uZXIvc3JjL2dldFBvc2l0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJ1xuXG4vKipcbiAqIEZ1bmN0aW9uIHRvIGNyZWF0ZSBhIFJlY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gZGltZW5zaW9uc1xuICogQHBhcmFtIHtOdW1iZXJ9IGRpbWVuc2lvbnMud2lkdGhcbiAqIEBwYXJhbSB7TnVtYmVyfSBkaW1lbnNpb25zLmhlaWdodFxuICogQHBhcmFtIHtPYmplY3R9IHBvc2l0aW9uXG4gKiBAcGFyYW0ge051bWJlcn0gcG9zaXRpb24ubGVmdFxuICogQHBhcmFtIHtOdW1iZXJ9IHBvc2l0aW9uLnRvcFxuICogQHJldHVybiB7T2JqZWN0fSBSZWN0IHsgd2lkdGgsIGhlaWdodCwgbGVmdCwgdG9wLCByaWdodCwgYm90dG9tIH1cbiAqL1xuY29uc3QgbWFrZVJlY3QgPSAoeyB3aWR0aCwgaGVpZ2h0IH0sIHsgbGVmdCwgdG9wIH0pID0+IHtcbiAgY29uc3QgY2VpbGVkTGVmdCA9IE1hdGguY2VpbChsZWZ0KVxuICBjb25zdCBjZWlsZWRUb3AgPSBNYXRoLmNlaWwodG9wKVxuICByZXR1cm4ge1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBsZWZ0OiBjZWlsZWRMZWZ0LFxuICAgIHRvcDogY2VpbGVkVG9wLFxuICAgIHJpZ2h0OiBjZWlsZWRMZWZ0ICsgd2lkdGgsXG4gICAgYm90dG9tOiBjZWlsZWRUb3AgKyBoZWlnaHRcbiAgfVxufVxuXG4vKipcbiAqIEZ1bmN0aW9uIHRvIGZsaXAgYSBwb3NpdGlvbiB1cHNpZGUgZG93bi5cbiAqIEBwYXJhbSB7UG9zaXRpb259IHBvc2l0aW9uXG4gKiBAcmV0dXJuIHtQb3NpdGlvbn0gZmxpcHBlZCBwb3NpdGlvblxuICovXG5jb25zdCBmbGlwSG9yaXpvbnRhbCA9IHBvc2l0aW9uID0+IHtcbiAgc3dpdGNoIChwb3NpdGlvbikge1xuICAgIGNhc2UgUG9zaXRpb24uVE9QX0xFRlQ6XG4gICAgICByZXR1cm4gUG9zaXRpb24uQk9UVE9NX0xFRlRcbiAgICBjYXNlIFBvc2l0aW9uLlRPUDpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIFBvc2l0aW9uLkJPVFRPTVxuICAgIGNhc2UgUG9zaXRpb24uVE9QX1JJR0hUOlxuICAgICAgcmV0dXJuIFBvc2l0aW9uLkJPVFRPTV9SSUdIVFxuICAgIGNhc2UgUG9zaXRpb24uQk9UVE9NX0xFRlQ6XG4gICAgICByZXR1cm4gUG9zaXRpb24uVE9QX0xFRlRcbiAgICBjYXNlIFBvc2l0aW9uLkJPVFRPTTpcbiAgICAgIHJldHVybiBQb3NpdGlvbi5UT1BcbiAgICBjYXNlIFBvc2l0aW9uLkJPVFRPTV9SSUdIVDpcbiAgICAgIHJldHVybiBQb3NpdGlvbi5UT1BfUklHSFRcbiAgfVxufVxuXG4vKipcbiAqIEZ1bmN0aW9uIHRoYXQgcmV0dXJucyBpZiBwb3NpdGlvbiBpcyBhbGlnbmVkIG9uIHRvcC5cbiAqIEBwYXJhbSB7UG9zaXRpb259IHBvc2l0aW9uXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5jb25zdCBpc0FsaWduZWRPblRvcCA9IHBvc2l0aW9uID0+IHtcbiAgc3dpdGNoIChwb3NpdGlvbikge1xuICAgIGNhc2UgUG9zaXRpb24uVE9QX0xFRlQ6XG4gICAgY2FzZSBQb3NpdGlvbi5UT1A6XG4gICAgY2FzZSBQb3NpdGlvbi5UT1BfUklHSFQ6XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG4vKipcbiAqIEZ1bmN0aW9uIHRoYXQgcmV0dXJucyBpZiBwb3NpdGlvbiBpcyBhbGlnbmVkIGxlZnQgb3IgcmlnaHQuXG4gKiBAcGFyYW0ge1Bvc2l0aW9ufSBwb3NpdGlvblxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuY29uc3QgaXNBbGlnbmVkSG9yaXpvbnRhbCA9IHBvc2l0aW9uID0+IHtcbiAgc3dpdGNoIChwb3NpdGlvbikge1xuICAgIGNhc2UgUG9zaXRpb24uTEVGVDpcbiAgICBjYXNlIFBvc2l0aW9uLlJJR0hUOlxuICAgICAgcmV0dXJuIHRydWVcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuLyoqXG4gKiBGdW5jdGlvbiB0aGF0IHJldHVybnMgaWYgYSByZWN0IGZpdHMgb24gYm90dG9tLlxuICogQHBhcmFtIHtSZWN0fSByZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gdmlld3BvcnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB2aWV3cG9ydE9mZnNldFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuY29uc3QgZ2V0Rml0c09uQm90dG9tID0gKHJlY3QsIHZpZXdwb3J0LCB2aWV3cG9ydE9mZnNldCkgPT4ge1xuICByZXR1cm4gcmVjdC5ib3R0b20gPCB2aWV3cG9ydC5oZWlnaHQgLSB2aWV3cG9ydE9mZnNldFxufVxuXG4vKipcbiAqIEZ1bmN0aW9uIHRoYXQgcmV0dXJucyBpZiBhIHJlY3QgZml0cyBvbiB0b3AuXG4gKiBAcGFyYW0ge1JlY3R9IHJlY3RcbiAqIEBwYXJhbSB7TnVtYmVyfSB2aWV3cG9ydE9mZnNldFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuY29uc3QgZ2V0Rml0c09uVG9wID0gKHJlY3QsIHZpZXdwb3J0T2Zmc2V0KSA9PiB7XG4gIHJldHVybiByZWN0LnRvcCA+IHZpZXdwb3J0T2Zmc2V0XG59XG5cbi8qKlxuICogRnVuY3Rpb24gdGhhdCByZXR1cm5zIGlmIGEgcmVjdCBmaXRzIG9uIHJpZ2h0LlxuICogQHBhcmFtIHtSZWN0fSByZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gdmlld3BvcnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB2aWV3cG9ydE9mZnNldFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuY29uc3QgZ2V0Rml0c09uUmlnaHQgPSAocmVjdCwgdmlld3BvcnQsIHZpZXdwb3J0T2Zmc2V0KSA9PiB7XG4gIHJldHVybiByZWN0LnJpZ2h0IDwgdmlld3BvcnQud2lkdGggLSB2aWV3cG9ydE9mZnNldFxufVxuXG4vKipcbiAqIEZ1bmN0aW9uIHRoYXQgcmV0dXJucyBpZiBhIHJlY3QgZml0cyBvbiBsZWZ0LlxuICogQHBhcmFtIHtSZWN0fSByZWN0XG4gKiBAcGFyYW0ge051bWJlcn0gdmlld3BvcnRPZmZzZXRcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmNvbnN0IGdldEZpdHNPbkxlZnQgPSAocmVjdCwgdmlld3BvcnRPZmZzZXQpID0+IHtcbiAgcmV0dXJuIHJlY3QubGVmdCA+IHZpZXdwb3J0T2Zmc2V0XG59XG5cbi8qKlxuICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3RyYW5zZm9ybS1vcmlnaW5cbiAqIEZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgQ1NTIGB0cmFuZm9ybS1vcmlnaW5gIHByb3BlcnR5LlxuICogQHBhcmFtIHtSZWN0fSByZWN0XG4gKiBAcGFyYW0ge1Bvc2l0aW9ufSBwb3NpdGlvblxuICogQHBhcmFtIHtPYmplY3R9IGRpbWVuc2lvbnMg4oCUIHRoZSBkaW1lbnNpb25zIG9mIHRoZSBwb3NpdGlvbmVyLlxuICogQHBhcmFtIHtOdW1iZXJ9IHRhcmdldENlbnRlciAtIGNlbnRlciBvZiB0aGUgdGFyZ2V0LlxuICogQHJldHVybiB7U3RyaW5nfSB0cmFuc2Zvcm0gb3JpZ2luXG4gKi9cbmNvbnN0IGdldFRyYW5zZm9ybU9yaWdpbiA9ICh7IHJlY3QsIHBvc2l0aW9uLCBkaW1lbnNpb25zLCB0YXJnZXRDZW50ZXIgfSkgPT4ge1xuICBjb25zdCBjZW50ZXJZID0gTWF0aC5yb3VuZCh0YXJnZXRDZW50ZXIgLSByZWN0LnRvcClcblxuICBpZiAocG9zaXRpb24gPT09IFBvc2l0aW9uLkxFRlQpIHtcbiAgICAvKiBTeW50YXg6IHgtb2Zmc2V0IHwgeS1vZmZzZXQgKi9cbiAgICByZXR1cm4gYCR7ZGltZW5zaW9ucy53aWR0aH1weCAke2NlbnRlcll9cHhgXG4gIH1cblxuICBpZiAocG9zaXRpb24gPT09IFBvc2l0aW9uLlJJR0hUKSB7XG4gICAgLyogU3ludGF4OiB4LW9mZnNldCB8IHktb2Zmc2V0ICovXG4gICAgcmV0dXJuIGAwcHggJHtjZW50ZXJZfXB4YFxuICB9XG5cbiAgY29uc3QgY2VudGVyWCA9IE1hdGgucm91bmQodGFyZ2V0Q2VudGVyIC0gcmVjdC5sZWZ0KVxuXG4gIGlmIChpc0FsaWduZWRPblRvcChwb3NpdGlvbikpIHtcbiAgICAvKiBTeW50YXg6IHgtb2Zmc2V0IHwgeS1vZmZzZXQgKi9cbiAgICByZXR1cm4gYCR7Y2VudGVyWH1weCAke2RpbWVuc2lvbnMuaGVpZ2h0fXB4IGBcbiAgfVxuXG4gIC8qIFN5bnRheDogeC1vZmZzZXQgfCB5LW9mZnNldCAqL1xuICByZXR1cm4gYCR7Y2VudGVyWH1weCAwcHggYFxufVxuXG4vKipcbiAqIEZ1bmN0aW9uIHRoYXQgdGFrZXMgaW4gbnVtYmVycyBhbmQgcG9zaXRpb24gYW5kIGdpdmVzIHRoZSBmaW5hbCBjb29yZHMuXG4gKiBAcGFyYW0ge1Bvc2l0aW9ufSBwb3NpdGlvbiDigJQgdGhlIHBvc2l0aW9uIHRoZSBwb3NpdGlvbmVyIHNob3VsZCBiZSBvbi5cbiAqIEBwYXJhbSB7T2JqZWN0fSBkaW1lbnNpb25zIOKAlCB0aGUgZGltZW5zaW9ucyBvZiB0aGUgcG9zaXRpb25lci5cbiAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXRSZWN0IOKAlCB0aGUgcmVjdCBvZiB0aGUgdGFyZ2V0LlxuICogQHBhcmFtIHtOdW1iZXJ9IHRhcmdldE9mZnNldCAtIG9mZnNldCBmcm9tIHRoZSB0YXJnZXQuXG4gKiBAcGFyYW0ge09iamVjdH0gdmlld3BvcnQgLSB0aGUgd2lkdGggYW5kIGhlaWdodCBvZiB0aGUgdmlld3BvcnQuXG4gKiBAcGFyYW0ge09iamVjdH0gdmlld3BvcnRPZmZzZXQgLSBvZmZzZXQgZnJvbSB0aGUgdmlld3BvcnQuXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0geyB4OiBOdW1iZXIsIHk6IE51bWJlciB9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEZpdHRlZFBvc2l0aW9uKHtcbiAgcG9zaXRpb24sXG4gIGRpbWVuc2lvbnMsXG4gIHRhcmdldFJlY3QsXG4gIHRhcmdldE9mZnNldCxcbiAgdmlld3BvcnQsXG4gIHZpZXdwb3J0T2Zmc2V0ID0gOFxufSkge1xuICBjb25zdCB7IHJlY3QsIHBvc2l0aW9uOiBmaW5hbFBvc2l0aW9uIH0gPSBnZXRQb3NpdGlvbih7XG4gICAgcG9zaXRpb24sXG4gICAgZGltZW5zaW9ucyxcbiAgICB0YXJnZXRSZWN0LFxuICAgIHRhcmdldE9mZnNldCxcbiAgICB2aWV3cG9ydCxcbiAgICB2aWV3cG9ydE9mZnNldFxuICB9KVxuXG4gIC8vIFB1c2ggcmVjdCB0byB0aGUgcmlnaHQgaWYgb3ZlcmZsb3dpbmcgb24gdGhlIGxlZnQgc2lkZSBvZiB0aGUgdmlld3BvcnQuXG4gIGlmIChyZWN0LmxlZnQgPCB2aWV3cG9ydE9mZnNldCkge1xuICAgIHJlY3QucmlnaHQgKz0gTWF0aC5jZWlsKE1hdGguYWJzKHJlY3QubGVmdCAtIHZpZXdwb3J0T2Zmc2V0KSlcbiAgICByZWN0LmxlZnQgPSBNYXRoLmNlaWwodmlld3BvcnRPZmZzZXQpXG4gIH1cblxuICAvLyBQdXNoIHJlY3QgdG8gdGhlIGxlZnQgaWYgb3ZlcmZsb3dpbmcgb24gdGhlIHJpZ2h0IHNpZGUgb2YgdGhlIHZpZXdwb3J0LlxuICBpZiAocmVjdC5yaWdodCA+IHZpZXdwb3J0LndpZHRoIC0gdmlld3BvcnRPZmZzZXQpIHtcbiAgICBjb25zdCBkZWx0YSA9IE1hdGguY2VpbChyZWN0LnJpZ2h0IC0gKHZpZXdwb3J0LndpZHRoIC0gdmlld3BvcnRPZmZzZXQpKVxuICAgIHJlY3QubGVmdCAtPSBkZWx0YVxuICAgIHJlY3QucmlnaHQgLT0gZGVsdGFcbiAgfVxuXG4gIC8vIFB1c2ggcmVjdCBkb3duIGlmIG92ZXJmbG93aW5nIG9uIHRoZSB0b3Agc2lkZSBvZiB0aGUgdmlld3BvcnQuXG4gIGlmIChyZWN0LnRvcCA8IHZpZXdwb3J0T2Zmc2V0KSB7XG4gICAgcmVjdC50b3AgKz0gTWF0aC5jZWlsKE1hdGguYWJzKHJlY3QudG9wIC0gdmlld3BvcnRPZmZzZXQpKVxuICAgIHJlY3QuYm90dG9tID0gTWF0aC5jZWlsKHZpZXdwb3J0T2Zmc2V0KVxuICB9XG5cbiAgLy8gUHVzaCByZWN0IHVwIGlmIG92ZXJmbG93aW5nIG9uIHRoZSBib3R0b20gc2lkZSBvZiB0aGUgdmlld3BvcnQuXG4gIGlmIChyZWN0LmJvdHRvbSA+IHZpZXdwb3J0LmhlaWdodCAtIHZpZXdwb3J0T2Zmc2V0KSB7XG4gICAgY29uc3QgZGVsdGEgPSBNYXRoLmNlaWwocmVjdC5ib3R0b20gLSAodmlld3BvcnQuaGVpZ2h0IC0gdmlld3BvcnRPZmZzZXQpKVxuICAgIHJlY3QudG9wIC09IGRlbHRhXG4gICAgcmVjdC5ib3R0b20gLT0gZGVsdGFcbiAgfVxuXG4gIGNvbnN0IHRhcmdldENlbnRlciA9IGlzQWxpZ25lZEhvcml6b250YWwocG9zaXRpb24pXG4gICAgPyB0YXJnZXRSZWN0LnRvcCArIHRhcmdldFJlY3QuaGVpZ2h0IC8gMlxuICAgIDogdGFyZ2V0UmVjdC5sZWZ0ICsgdGFyZ2V0UmVjdC53aWR0aCAvIDJcblxuICBjb25zdCB0cmFuc2Zvcm1PcmlnaW4gPSBnZXRUcmFuc2Zvcm1PcmlnaW4oe1xuICAgIHJlY3QsXG4gICAgcG9zaXRpb246IGZpbmFsUG9zaXRpb24sXG4gICAgZGltZW5zaW9ucyxcbiAgICB0YXJnZXRDZW50ZXJcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHJlY3QsXG4gICAgcG9zaXRpb246IGZpbmFsUG9zaXRpb24sXG4gICAgdHJhbnNmb3JtT3JpZ2luXG4gIH1cbn1cblxuLyoqXG4gKiBGdW5jdGlvbiB0aGF0IHRha2VzIGluIG51bWJlcnMgYW5kIHBvc2l0aW9uIGFuZCBnaXZlcyB0aGUgZmluYWwgY29vcmRzLlxuICogQHBhcmFtIHtQb3NpdGlvbn0gcG9zaXRpb24g4oCUIHRoZSBwb3NpdGlvbiB0aGUgcG9zaXRpb25lciBzaG91bGQgYmUgb24uXG4gKiBAcGFyYW0ge09iamVjdH0gZGltZW5zaW9ucyDigJQgdGhlIGRpbWVuc2lvbnMgb2YgdGhlIHBvc2l0aW9uZXIuXG4gKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0UmVjdCDigJQgdGhlIHJlY3Qgb2YgdGhlIHRhcmdldC5cbiAqIEBwYXJhbSB7TnVtYmVyfSB0YXJnZXRPZmZzZXQgLSBvZmZzZXQgZnJvbSB0aGUgdGFyZ2V0LlxuICogQHBhcmFtIHtPYmplY3R9IHZpZXdwb3J0IC0gdGhlIHdpZHRoIGFuZCBoZWlnaHQgb2YgdGhlIHZpZXdwb3J0LlxuICogQHBhcmFtIHtPYmplY3R9IHZpZXdwb3J0T2Zmc2V0IC0gb2Zmc2V0IGZyb20gdGhlIHZpZXdwb3J0LlxuICogQHJldHVybiB7T2JqZWN0fSAtIHsgcmVjdDogUmVjdCwgcG9zaXRpb246IFBvc2l0aW9uIH1cbiAqL1xuZnVuY3Rpb24gZ2V0UG9zaXRpb24oe1xuICBwb3NpdGlvbixcbiAgZGltZW5zaW9ucyxcbiAgdGFyZ2V0UmVjdCxcbiAgdGFyZ2V0T2Zmc2V0LFxuICB2aWV3cG9ydCxcbiAgdmlld3BvcnRPZmZzZXQgPSA4XG59KSB7XG4gIGNvbnN0IGlzSG9yaXpvbnRhbCA9IGlzQWxpZ25lZEhvcml6b250YWwocG9zaXRpb24pXG5cbiAgLy8gSGFuZGxlIGxlZnQgYW5kIHJpZ2h0IHBvc2l0aW9uc1xuICBpZiAoaXNIb3Jpem9udGFsKSB7XG4gICAgY29uc3QgbGVmdFJlY3QgPSBnZXRSZWN0KHtcbiAgICAgIHBvc2l0aW9uOiBQb3NpdGlvbi5MRUZULFxuICAgICAgZGltZW5zaW9ucyxcbiAgICAgIHRhcmdldFJlY3QsXG4gICAgICB0YXJnZXRPZmZzZXRcbiAgICB9KVxuXG4gICAgY29uc3QgcmlnaHRSZWN0ID0gZ2V0UmVjdCh7XG4gICAgICBwb3NpdGlvbjogUG9zaXRpb24uUklHSFQsXG4gICAgICBkaW1lbnNpb25zLFxuICAgICAgdGFyZ2V0UmVjdCxcbiAgICAgIHRhcmdldE9mZnNldFxuICAgIH0pXG5cbiAgICBjb25zdCBmaXRzT25MZWZ0ID0gZ2V0Rml0c09uTGVmdChsZWZ0UmVjdCwgdmlld3BvcnRPZmZzZXQpXG4gICAgY29uc3QgZml0c09uUmlnaHQgPSBnZXRGaXRzT25SaWdodChyaWdodFJlY3QsIHZpZXdwb3J0LCB2aWV3cG9ydE9mZnNldClcblxuICAgIGlmIChwb3NpdGlvbiA9PT0gUG9zaXRpb24uTEVGVCkge1xuICAgICAgaWYgKGZpdHNPbkxlZnQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwb3NpdGlvbixcbiAgICAgICAgICByZWN0OiBsZWZ0UmVjdFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaXRzT25SaWdodCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBvc2l0aW9uOiBQb3NpdGlvbi5SSUdIVCxcbiAgICAgICAgICByZWN0OiByaWdodFJlY3RcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwb3NpdGlvbiA9PT0gUG9zaXRpb24uUklHSFQpIHtcbiAgICAgIGlmIChmaXRzT25SaWdodCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBvc2l0aW9uLFxuICAgICAgICAgIHJlY3Q6IHJpZ2h0UmVjdFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaXRzT25MZWZ0KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcG9zaXRpb246IFBvc2l0aW9uLkxFRlQsXG4gICAgICAgICAgcmVjdDogbGVmdFJlY3RcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgdG8gdXNpbmcgdGhlIHBvc2l0aW9uIHdpdGggdGhlIG1vc3Qgc3BhY2VcbiAgICBjb25zdCBzcGFjZVJpZ2h0ID0gTWF0aC5hYnMoXG4gICAgICB2aWV3cG9ydC53aWR0aCAtIHZpZXdwb3J0T2Zmc2V0IC0gcmlnaHRSZWN0LnJpZ2h0XG4gICAgKVxuICAgIGNvbnN0IHNwYWNlTGVmdCA9IE1hdGguYWJzKGxlZnRSZWN0LmxlZnQgLSB2aWV3cG9ydE9mZnNldClcblxuICAgIGlmIChzcGFjZVJpZ2h0IDwgc3BhY2VMZWZ0KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwb3NpdGlvbjogUG9zaXRpb24uUklHSFQsXG4gICAgICAgIHJlY3Q6IHJpZ2h0UmVjdFxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBwb3NpdGlvbjogUG9zaXRpb24uTEVGVCxcbiAgICAgIHJlY3Q6IGxlZnRSZWN0XG4gICAgfVxuICB9XG5cbiAgY29uc3QgcG9zaXRpb25Jc0FsaWduZWRPblRvcCA9IGlzQWxpZ25lZE9uVG9wKHBvc2l0aW9uKVxuICBsZXQgdG9wUmVjdFxuICBsZXQgYm90dG9tUmVjdFxuXG4gIGlmIChwb3NpdGlvbklzQWxpZ25lZE9uVG9wKSB7XG4gICAgdG9wUmVjdCA9IGdldFJlY3Qoe1xuICAgICAgcG9zaXRpb24sXG4gICAgICBkaW1lbnNpb25zLFxuICAgICAgdGFyZ2V0UmVjdCxcbiAgICAgIHRhcmdldE9mZnNldFxuICAgIH0pXG4gICAgYm90dG9tUmVjdCA9IGdldFJlY3Qoe1xuICAgICAgcG9zaXRpb246IGZsaXBIb3Jpem9udGFsKHBvc2l0aW9uKSxcbiAgICAgIGRpbWVuc2lvbnMsXG4gICAgICB0YXJnZXRSZWN0LFxuICAgICAgdGFyZ2V0T2Zmc2V0XG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICB0b3BSZWN0ID0gZ2V0UmVjdCh7XG4gICAgICBwb3NpdGlvbjogZmxpcEhvcml6b250YWwocG9zaXRpb24pLFxuICAgICAgZGltZW5zaW9ucyxcbiAgICAgIHRhcmdldFJlY3QsXG4gICAgICB0YXJnZXRPZmZzZXRcbiAgICB9KVxuICAgIGJvdHRvbVJlY3QgPSBnZXRSZWN0KHtcbiAgICAgIHBvc2l0aW9uLFxuICAgICAgZGltZW5zaW9ucyxcbiAgICAgIHRhcmdldFJlY3QsXG4gICAgICB0YXJnZXRPZmZzZXRcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgdG9wUmVjdEZpdHNPblRvcCA9IGdldEZpdHNPblRvcCh0b3BSZWN0LCB2aWV3cG9ydE9mZnNldClcblxuICBjb25zdCBib3R0b21SZWN0Rml0c09uQm90dG9tID0gZ2V0Rml0c09uQm90dG9tKFxuICAgIGJvdHRvbVJlY3QsXG4gICAgdmlld3BvcnQsXG4gICAgdmlld3BvcnRPZmZzZXRcbiAgKVxuXG4gIGlmIChwb3NpdGlvbklzQWxpZ25lZE9uVG9wKSB7XG4gICAgaWYgKHRvcFJlY3RGaXRzT25Ub3ApIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBvc2l0aW9uLFxuICAgICAgICByZWN0OiB0b3BSZWN0XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGJvdHRvbVJlY3RGaXRzT25Cb3R0b20pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBvc2l0aW9uOiBmbGlwSG9yaXpvbnRhbChwb3NpdGlvbiksXG4gICAgICAgIHJlY3Q6IGJvdHRvbVJlY3RcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoIXBvc2l0aW9uSXNBbGlnbmVkT25Ub3ApIHtcbiAgICBpZiAoYm90dG9tUmVjdEZpdHNPbkJvdHRvbSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcG9zaXRpb24sXG4gICAgICAgIHJlY3Q6IGJvdHRvbVJlY3RcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodG9wUmVjdEZpdHNPblRvcCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcG9zaXRpb246IGZsaXBIb3Jpem9udGFsKHBvc2l0aW9uKSxcbiAgICAgICAgcmVjdDogdG9wUmVjdFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIERlZmF1bHQgdG8gbW9zdCBzcGFjaW91cyBpZiB0aGVyZSBpcyBubyBmaXQuXG4gIGNvbnN0IHNwYWNlQm90dG9tID0gTWF0aC5hYnMoXG4gICAgdmlld3BvcnQuaGVpZ2h0IC0gdmlld3BvcnRPZmZzZXQgLSBib3R0b21SZWN0LmJvdHRvbVxuICApXG5cbiAgY29uc3Qgc3BhY2VUb3AgPSBNYXRoLmFicyh0b3BSZWN0LnRvcCAtIHZpZXdwb3J0T2Zmc2V0KVxuXG4gIGlmIChzcGFjZUJvdHRvbSA8IHNwYWNlVG9wKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbklzQWxpZ25lZE9uVG9wID8gZmxpcEhvcml6b250YWwocG9zaXRpb24pIDogcG9zaXRpb24sXG4gICAgICByZWN0OiBib3R0b21SZWN0XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwb3NpdGlvbjogcG9zaXRpb25Jc0FsaWduZWRPblRvcCA/IHBvc2l0aW9uIDogZmxpcEhvcml6b250YWwocG9zaXRpb24pLFxuICAgIHJlY3Q6IHRvcFJlY3RcbiAgfVxufVxuXG4vKipcbiAqIEZ1bmN0aW9uIHRoYXQgdGFrZXMgaW4gbnVtYmVycyBhbmQgcG9zaXRpb24gYW5kIGdpdmVzIHRoZSBmaW5hbCBjb29yZHMuXG4gKiBAcGFyYW0ge09iamVjdH0gcG9zaXRpb24gLSB0aGUgd2lkdGggYW5kIGhlaWdodCBvZiB0aGUgdmlld3BvcnQuXG4gKiBAcGFyYW0ge051bWJlcn0gdGFyZ2V0T2Zmc2V0IC0gb2Zmc2V0IGZyb20gdGhlIHRhcmdldC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBkaW1lbnNpb25zIOKAlCB0aGUgZGltZW5zaW9ucyBvZiB0aGUgcG9zaXRpb25lci5cbiAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXRSZWN0IOKAlCB0aGUgcmVjdCBvZiB0aGUgdGFyZ2V0LlxuICogQHJldHVybiB7T2JqZWN0fSAtIHsgeDogTnVtYmVyLCB5OiBOdW1iZXIgfVxuICovXG5mdW5jdGlvbiBnZXRSZWN0KHsgcG9zaXRpb24sIHRhcmdldE9mZnNldCwgZGltZW5zaW9ucywgdGFyZ2V0UmVjdCB9KSB7XG4gIGNvbnN0IGxlZnRSZWN0ID0gdGFyZ2V0UmVjdC5sZWZ0ICsgdGFyZ2V0UmVjdC53aWR0aCAvIDIgLSBkaW1lbnNpb25zLndpZHRoIC8gMlxuICBjb25zdCBhbGlnbmVkVG9wWSA9IHRhcmdldFJlY3QudG9wIC0gZGltZW5zaW9ucy5oZWlnaHQgLSB0YXJnZXRPZmZzZXRcbiAgY29uc3QgYWxpZ25lZEJvdHRvbVkgPSB0YXJnZXRSZWN0LmJvdHRvbSArIHRhcmdldE9mZnNldFxuICBjb25zdCBhbGlnbmVkUmlnaHRYID0gdGFyZ2V0UmVjdC5yaWdodCAtIGRpbWVuc2lvbnMud2lkdGhcbiAgY29uc3QgYWxpZ25lZExlZnRSaWdodFkgPVxuICAgIHRhcmdldFJlY3QudG9wICsgdGFyZ2V0UmVjdC5oZWlnaHQgLyAyIC0gZGltZW5zaW9ucy5oZWlnaHQgLyAyXG5cbiAgc3dpdGNoIChwb3NpdGlvbikge1xuICAgIGNhc2UgUG9zaXRpb24uTEVGVDpcbiAgICAgIHJldHVybiBtYWtlUmVjdChkaW1lbnNpb25zLCB7XG4gICAgICAgIGxlZnQ6IHRhcmdldFJlY3QubGVmdCAtIGRpbWVuc2lvbnMud2lkdGggLSB0YXJnZXRPZmZzZXQsXG4gICAgICAgIHRvcDogYWxpZ25lZExlZnRSaWdodFlcbiAgICAgIH0pXG4gICAgY2FzZSBQb3NpdGlvbi5SSUdIVDpcbiAgICAgIHJldHVybiBtYWtlUmVjdChkaW1lbnNpb25zLCB7XG4gICAgICAgIGxlZnQ6IHRhcmdldFJlY3QucmlnaHQgKyB0YXJnZXRPZmZzZXQsXG4gICAgICAgIHRvcDogYWxpZ25lZExlZnRSaWdodFlcbiAgICAgIH0pXG4gICAgY2FzZSBQb3NpdGlvbi5UT1A6XG4gICAgICByZXR1cm4gbWFrZVJlY3QoZGltZW5zaW9ucywge1xuICAgICAgICBsZWZ0OiBsZWZ0UmVjdCxcbiAgICAgICAgdG9wOiBhbGlnbmVkVG9wWVxuICAgICAgfSlcbiAgICBjYXNlIFBvc2l0aW9uLlRPUF9MRUZUOlxuICAgICAgcmV0dXJuIG1ha2VSZWN0KGRpbWVuc2lvbnMsIHtcbiAgICAgICAgbGVmdDogdGFyZ2V0UmVjdC5sZWZ0LFxuICAgICAgICB0b3A6IGFsaWduZWRUb3BZXG4gICAgICB9KVxuICAgIGNhc2UgUG9zaXRpb24uVE9QX1JJR0hUOlxuICAgICAgcmV0dXJuIG1ha2VSZWN0KGRpbWVuc2lvbnMsIHtcbiAgICAgICAgbGVmdDogYWxpZ25lZFJpZ2h0WCxcbiAgICAgICAgdG9wOiBhbGlnbmVkVG9wWVxuICAgICAgfSlcbiAgICBkZWZhdWx0OlxuICAgIGNhc2UgUG9zaXRpb24uQk9UVE9NOlxuICAgICAgcmV0dXJuIG1ha2VSZWN0KGRpbWVuc2lvbnMsIHtcbiAgICAgICAgbGVmdDogbGVmdFJlY3QsXG4gICAgICAgIHRvcDogYWxpZ25lZEJvdHRvbVlcbiAgICAgIH0pXG4gICAgY2FzZSBQb3NpdGlvbi5CT1RUT01fTEVGVDpcbiAgICAgIHJldHVybiBtYWtlUmVjdChkaW1lbnNpb25zLCB7XG4gICAgICAgIGxlZnQ6IHRhcmdldFJlY3QubGVmdCxcbiAgICAgICAgdG9wOiBhbGlnbmVkQm90dG9tWVxuICAgICAgfSlcbiAgICBjYXNlIFBvc2l0aW9uLkJPVFRPTV9SSUdIVDpcbiAgICAgIHJldHVybiBtYWtlUmVjdChkaW1lbnNpb25zLCB7XG4gICAgICAgIGxlZnQ6IGFsaWduZWRSaWdodFgsXG4gICAgICAgIHRvcDogYWxpZ25lZEJvdHRvbVlcbiAgICAgIH0pXG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsY0FBc0M7RUFBQSxJQUFuQ0MsS0FBbUMsUUFBbkNBLEtBQW1DO0VBQUEsSUFBNUJDLE1BQTRCLFFBQTVCQSxNQUE0QjtFQUFBLElBQWhCQyxJQUFnQixTQUFoQkEsSUFBZ0I7RUFBQSxJQUFWQyxHQUFVLFNBQVZBLEdBQVU7RUFDckQsSUFBTUMsVUFBVSxHQUFHQyxJQUFJLENBQUNDLElBQUwsQ0FBVUosSUFBVixDQUFuQjtFQUNBLElBQU1LLFNBQVMsR0FBR0YsSUFBSSxDQUFDQyxJQUFMLENBQVVILEdBQVYsQ0FBbEI7RUFDQSxPQUFPO0lBQ0xILEtBQUssRUFBTEEsS0FESztJQUVMQyxNQUFNLEVB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