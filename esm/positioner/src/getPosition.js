import { Position } from '../../constants';
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
    case Position.TOP_LEFT:
      return Position.BOTTOM_LEFT;

    case Position.TOP:
    default:
      return Position.BOTTOM;

    case Position.TOP_RIGHT:
      return Position.BOTTOM_RIGHT;

    case Position.BOTTOM_LEFT:
      return Position.TOP_LEFT;

    case Position.BOTTOM:
      return Position.TOP;

    case Position.BOTTOM_RIGHT:
      return Position.TOP_RIGHT;
  }
};
/**
 * Function that returns if position is aligned on top.
 * @param {Position} position
 * @return {Boolean}
 */


var isAlignedOnTop = function isAlignedOnTop(position) {
  switch (position) {
    case Position.TOP_LEFT:
    case Position.TOP:
    case Position.TOP_RIGHT:
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
    case Position.LEFT:
    case Position.RIGHT:
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

  if (position === Position.LEFT) {
    /* Syntax: x-offset | y-offset */
    return "".concat(dimensions.width, "px ").concat(centerY, "px");
  }

  if (position === Position.RIGHT) {
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


export default function getFittedPosition(_ref4) {
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
      position: Position.LEFT,
      dimensions: dimensions,
      targetRect: targetRect,
      targetOffset: targetOffset
    });
    var rightRect = getRect({
      position: Position.RIGHT,
      dimensions: dimensions,
      targetRect: targetRect,
      targetOffset: targetOffset
    });
    var fitsOnLeft = getFitsOnLeft(leftRect, viewportOffset);
    var fitsOnRight = getFitsOnRight(rightRect, viewport, viewportOffset);

    if (position === Position.LEFT) {
      if (fitsOnLeft) {
        return {
          position: position,
          rect: leftRect
        };
      }

      if (fitsOnRight) {
        return {
          position: Position.RIGHT,
          rect: rightRect
        };
      }
    }

    if (position === Position.RIGHT) {
      if (fitsOnRight) {
        return {
          position: position,
          rect: rightRect
        };
      }

      if (fitsOnLeft) {
        return {
          position: Position.LEFT,
          rect: leftRect
        };
      }
    } // Default to using the position with the most space


    var spaceRight = Math.abs(viewport.width - viewportOffset - rightRect.right);
    var spaceLeft = Math.abs(leftRect.left - viewportOffset);

    if (spaceRight < spaceLeft) {
      return {
        position: Position.RIGHT,
        rect: rightRect
      };
    }

    return {
      position: Position.LEFT,
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
    case Position.LEFT:
      return makeRect(dimensions, {
        left: targetRect.left - dimensions.width - targetOffset,
        top: alignedLeftRightY
      });

    case Position.RIGHT:
      return makeRect(dimensions, {
        left: targetRect.right + targetOffset,
        top: alignedLeftRightY
      });

    case Position.TOP:
      return makeRect(dimensions, {
        left: leftRect,
        top: alignedTopY
      });

    case Position.TOP_LEFT:
      return makeRect(dimensions, {
        left: targetRect.left,
        top: alignedTopY
      });

    case Position.TOP_RIGHT:
      return makeRect(dimensions, {
        left: alignedRightX,
        top: alignedTopY
      });

    default:
    case Position.BOTTOM:
      return makeRect(dimensions, {
        left: leftRect,
        top: alignedBottomY
      });

    case Position.BOTTOM_LEFT:
      return makeRect(dimensions, {
        left: targetRect.left,
        top: alignedBottomY
      });

    case Position.BOTTOM_RIGHT:
      return makeRect(dimensions, {
        left: alignedRightX,
        top: alignedBottomY
      });
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJQb3NpdGlvbiIsIm1ha2VSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJsZWZ0IiwidG9wIiwiY2VpbGVkTGVmdCIsIk1hdGgiLCJjZWlsIiwiY2VpbGVkVG9wIiwicmlnaHQiLCJib3R0b20iLCJmbGlwSG9yaXpvbnRhbCIsInBvc2l0aW9uIiwiVE9QX0xFRlQiLCJCT1RUT01fTEVGVCIsIlRPUCIsIkJPVFRPTSIsIlRPUF9SSUdIVCIsIkJPVFRPTV9SSUdIVCIsImlzQWxpZ25lZE9uVG9wIiwiaXNBbGlnbmVkSG9yaXpvbnRhbCIsIkxFRlQiLCJSSUdIVCIsImdldEZpdHNPbkJvdHRvbSIsInJlY3QiLCJ2aWV3cG9ydCIsInZpZXdwb3J0T2Zmc2V0IiwiZ2V0Rml0c09uVG9wIiwiZ2V0Rml0c09uUmlnaHQiLCJnZXRGaXRzT25MZWZ0IiwiZ2V0VHJhbnNmb3JtT3JpZ2luIiwiZGltZW5zaW9ucyIsInRhcmdldENlbnRlciIsImNlbnRlclkiLCJyb3VuZCIsImNlbnRlclgiLCJnZXRGaXR0ZWRQb3NpdGlvbiIsInRhcmdldFJlY3QiLCJ0YXJnZXRPZmZzZXQiLCJnZXRQb3NpdGlvbiIsImZpbmFsUG9zaXRpb24iLCJhYnMiLCJkZWx0YSIsInRyYW5zZm9ybU9yaWdpbiIsImlzSG9yaXpvbnRhbCIsImxlZnRSZWN0IiwiZ2V0UmVjdCIsInJpZ2h0UmVjdCIsImZpdHNPbkxlZnQiLCJmaXRzT25SaWdodCIsInNwYWNlUmlnaHQiLCJzcGFjZUxlZnQiLCJwb3NpdGlvbklzQWxpZ25lZE9uVG9wIiwidG9wUmVjdCIsImJvdHRvbVJlY3QiLCJ0b3BSZWN0Rml0c09uVG9wIiwiYm90dG9tUmVjdEZpdHNPbkJvdHRvbSIsInNwYWNlQm90dG9tIiwic3BhY2VUb3AiLCJhbGlnbmVkVG9wWSIsImFsaWduZWRCb3R0b21ZIiwiYWxpZ25lZFJpZ2h0WCIsImFsaWduZWRMZWZ0UmlnaHRZIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3Bvc2l0aW9uZXIvc3JjL2dldFBvc2l0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJ1xuXG4vKipcbiAqIEZ1bmN0aW9uIHRvIGNyZWF0ZSBhIFJlY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gZGltZW5zaW9uc1xuICogQHBhcmFtIHtOdW1iZXJ9IGRpbWVuc2lvbnMud2lkdGhcbiAqIEBwYXJhbSB7TnVtYmVyfSBkaW1lbnNpb25zLmhlaWdodFxuICogQHBhcmFtIHtPYmplY3R9IHBvc2l0aW9uXG4gKiBAcGFyYW0ge051bWJlcn0gcG9zaXRpb24ubGVmdFxuICogQHBhcmFtIHtOdW1iZXJ9IHBvc2l0aW9uLnRvcFxuICogQHJldHVybiB7T2JqZWN0fSBSZWN0IHsgd2lkdGgsIGhlaWdodCwgbGVmdCwgdG9wLCByaWdodCwgYm90dG9tIH1cbiAqL1xuY29uc3QgbWFrZVJlY3QgPSAoeyB3aWR0aCwgaGVpZ2h0IH0sIHsgbGVmdCwgdG9wIH0pID0+IHtcbiAgY29uc3QgY2VpbGVkTGVmdCA9IE1hdGguY2VpbChsZWZ0KVxuICBjb25zdCBjZWlsZWRUb3AgPSBNYXRoLmNlaWwodG9wKVxuICByZXR1cm4ge1xuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBsZWZ0OiBjZWlsZWRMZWZ0LFxuICAgIHRvcDogY2VpbGVkVG9wLFxuICAgIHJpZ2h0OiBjZWlsZWRMZWZ0ICsgd2lkdGgsXG4gICAgYm90dG9tOiBjZWlsZWRUb3AgKyBoZWlnaHRcbiAgfVxufVxuXG4vKipcbiAqIEZ1bmN0aW9uIHRvIGZsaXAgYSBwb3NpdGlvbiB1cHNpZGUgZG93bi5cbiAqIEBwYXJhbSB7UG9zaXRpb259IHBvc2l0aW9uXG4gKiBAcmV0dXJuIHtQb3NpdGlvbn0gZmxpcHBlZCBwb3NpdGlvblxuICovXG5jb25zdCBmbGlwSG9yaXpvbnRhbCA9IHBvc2l0aW9uID0+IHtcbiAgc3dpdGNoIChwb3NpdGlvbikge1xuICAgIGNhc2UgUG9zaXRpb24uVE9QX0xFRlQ6XG4gICAgICByZXR1cm4gUG9zaXRpb24uQk9UVE9NX0xFRlRcbiAgICBjYXNlIFBvc2l0aW9uLlRPUDpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIFBvc2l0aW9uLkJPVFRPTVxuICAgIGNhc2UgUG9zaXRpb24uVE9QX1JJR0hUOlxuICAgICAgcmV0dXJuIFBvc2l0aW9uLkJPVFRPTV9SSUdIVFxuICAgIGNhc2UgUG9zaXRpb24uQk9UVE9NX0xFRlQ6XG4gICAgICByZXR1cm4gUG9zaXRpb24uVE9QX0xFRlRcbiAgICBjYXNlIFBvc2l0aW9uLkJPVFRPTTpcbiAgICAgIHJldHVybiBQb3NpdGlvbi5UT1BcbiAgICBjYXNlIFBvc2l0aW9uLkJPVFRPTV9SSUdIVDpcbiAgICAgIHJldHVybiBQb3NpdGlvbi5UT1BfUklHSFRcbiAgfVxufVxuXG4vKipcbiAqIEZ1bmN0aW9uIHRoYXQgcmV0dXJucyBpZiBwb3NpdGlvbiBpcyBhbGlnbmVkIG9uIHRvcC5cbiAqIEBwYXJhbSB7UG9zaXRpb259IHBvc2l0aW9uXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5jb25zdCBpc0FsaWduZWRPblRvcCA9IHBvc2l0aW9uID0+IHtcbiAgc3dpdGNoIChwb3NpdGlvbikge1xuICAgIGNhc2UgUG9zaXRpb24uVE9QX0xFRlQ6XG4gICAgY2FzZSBQb3NpdGlvbi5UT1A6XG4gICAgY2FzZSBQb3NpdGlvbi5UT1BfUklHSFQ6XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG4vKipcbiAqIEZ1bmN0aW9uIHRoYXQgcmV0dXJucyBpZiBwb3NpdGlvbiBpcyBhbGlnbmVkIGxlZnQgb3IgcmlnaHQuXG4gKiBAcGFyYW0ge1Bvc2l0aW9ufSBwb3NpdGlvblxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuY29uc3QgaXNBbGlnbmVkSG9yaXpvbnRhbCA9IHBvc2l0aW9uID0+IHtcbiAgc3dpdGNoIChwb3NpdGlvbikge1xuICAgIGNhc2UgUG9zaXRpb24uTEVGVDpcbiAgICBjYXNlIFBvc2l0aW9uLlJJR0hUOlxuICAgICAgcmV0dXJuIHRydWVcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuLyoqXG4gKiBGdW5jdGlvbiB0aGF0IHJldHVybnMgaWYgYSByZWN0IGZpdHMgb24gYm90dG9tLlxuICogQHBhcmFtIHtSZWN0fSByZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gdmlld3BvcnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB2aWV3cG9ydE9mZnNldFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuY29uc3QgZ2V0Rml0c09uQm90dG9tID0gKHJlY3QsIHZpZXdwb3J0LCB2aWV3cG9ydE9mZnNldCkgPT4ge1xuICByZXR1cm4gcmVjdC5ib3R0b20gPCB2aWV3cG9ydC5oZWlnaHQgLSB2aWV3cG9ydE9mZnNldFxufVxuXG4vKipcbiAqIEZ1bmN0aW9uIHRoYXQgcmV0dXJucyBpZiBhIHJlY3QgZml0cyBvbiB0b3AuXG4gKiBAcGFyYW0ge1JlY3R9IHJlY3RcbiAqIEBwYXJhbSB7TnVtYmVyfSB2aWV3cG9ydE9mZnNldFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuY29uc3QgZ2V0Rml0c09uVG9wID0gKHJlY3QsIHZpZXdwb3J0T2Zmc2V0KSA9PiB7XG4gIHJldHVybiByZWN0LnRvcCA+IHZpZXdwb3J0T2Zmc2V0XG59XG5cbi8qKlxuICogRnVuY3Rpb24gdGhhdCByZXR1cm5zIGlmIGEgcmVjdCBmaXRzIG9uIHJpZ2h0LlxuICogQHBhcmFtIHtSZWN0fSByZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gdmlld3BvcnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB2aWV3cG9ydE9mZnNldFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuY29uc3QgZ2V0Rml0c09uUmlnaHQgPSAocmVjdCwgdmlld3BvcnQsIHZpZXdwb3J0T2Zmc2V0KSA9PiB7XG4gIHJldHVybiByZWN0LnJpZ2h0IDwgdmlld3BvcnQud2lkdGggLSB2aWV3cG9ydE9mZnNldFxufVxuXG4vKipcbiAqIEZ1bmN0aW9uIHRoYXQgcmV0dXJucyBpZiBhIHJlY3QgZml0cyBvbiBsZWZ0LlxuICogQHBhcmFtIHtSZWN0fSByZWN0XG4gKiBAcGFyYW0ge051bWJlcn0gdmlld3BvcnRPZmZzZXRcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmNvbnN0IGdldEZpdHNPbkxlZnQgPSAocmVjdCwgdmlld3BvcnRPZmZzZXQpID0+IHtcbiAgcmV0dXJuIHJlY3QubGVmdCA+IHZpZXdwb3J0T2Zmc2V0XG59XG5cbi8qKlxuICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL3RyYW5zZm9ybS1vcmlnaW5cbiAqIEZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgQ1NTIGB0cmFuZm9ybS1vcmlnaW5gIHByb3BlcnR5LlxuICogQHBhcmFtIHtSZWN0fSByZWN0XG4gKiBAcGFyYW0ge1Bvc2l0aW9ufSBwb3NpdGlvblxuICogQHBhcmFtIHtPYmplY3R9IGRpbWVuc2lvbnMg4oCUIHRoZSBkaW1lbnNpb25zIG9mIHRoZSBwb3NpdGlvbmVyLlxuICogQHBhcmFtIHtOdW1iZXJ9IHRhcmdldENlbnRlciAtIGNlbnRlciBvZiB0aGUgdGFyZ2V0LlxuICogQHJldHVybiB7U3RyaW5nfSB0cmFuc2Zvcm0gb3JpZ2luXG4gKi9cbmNvbnN0IGdldFRyYW5zZm9ybU9yaWdpbiA9ICh7IHJlY3QsIHBvc2l0aW9uLCBkaW1lbnNpb25zLCB0YXJnZXRDZW50ZXIgfSkgPT4ge1xuICBjb25zdCBjZW50ZXJZID0gTWF0aC5yb3VuZCh0YXJnZXRDZW50ZXIgLSByZWN0LnRvcClcblxuICBpZiAocG9zaXRpb24gPT09IFBvc2l0aW9uLkxFRlQpIHtcbiAgICAvKiBTeW50YXg6IHgtb2Zmc2V0IHwgeS1vZmZzZXQgKi9cbiAgICByZXR1cm4gYCR7ZGltZW5zaW9ucy53aWR0aH1weCAke2NlbnRlcll9cHhgXG4gIH1cblxuICBpZiAocG9zaXRpb24gPT09IFBvc2l0aW9uLlJJR0hUKSB7XG4gICAgLyogU3ludGF4OiB4LW9mZnNldCB8IHktb2Zmc2V0ICovXG4gICAgcmV0dXJuIGAwcHggJHtjZW50ZXJZfXB4YFxuICB9XG5cbiAgY29uc3QgY2VudGVyWCA9IE1hdGgucm91bmQodGFyZ2V0Q2VudGVyIC0gcmVjdC5sZWZ0KVxuXG4gIGlmIChpc0FsaWduZWRPblRvcChwb3NpdGlvbikpIHtcbiAgICAvKiBTeW50YXg6IHgtb2Zmc2V0IHwgeS1vZmZzZXQgKi9cbiAgICByZXR1cm4gYCR7Y2VudGVyWH1weCAke2RpbWVuc2lvbnMuaGVpZ2h0fXB4IGBcbiAgfVxuXG4gIC8qIFN5bnRheDogeC1vZmZzZXQgfCB5LW9mZnNldCAqL1xuICByZXR1cm4gYCR7Y2VudGVyWH1weCAwcHggYFxufVxuXG4vKipcbiAqIEZ1bmN0aW9uIHRoYXQgdGFrZXMgaW4gbnVtYmVycyBhbmQgcG9zaXRpb24gYW5kIGdpdmVzIHRoZSBmaW5hbCBjb29yZHMuXG4gKiBAcGFyYW0ge1Bvc2l0aW9ufSBwb3NpdGlvbiDigJQgdGhlIHBvc2l0aW9uIHRoZSBwb3NpdGlvbmVyIHNob3VsZCBiZSBvbi5cbiAqIEBwYXJhbSB7T2JqZWN0fSBkaW1lbnNpb25zIOKAlCB0aGUgZGltZW5zaW9ucyBvZiB0aGUgcG9zaXRpb25lci5cbiAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXRSZWN0IOKAlCB0aGUgcmVjdCBvZiB0aGUgdGFyZ2V0LlxuICogQHBhcmFtIHtOdW1iZXJ9IHRhcmdldE9mZnNldCAtIG9mZnNldCBmcm9tIHRoZSB0YXJnZXQuXG4gKiBAcGFyYW0ge09iamVjdH0gdmlld3BvcnQgLSB0aGUgd2lkdGggYW5kIGhlaWdodCBvZiB0aGUgdmlld3BvcnQuXG4gKiBAcGFyYW0ge09iamVjdH0gdmlld3BvcnRPZmZzZXQgLSBvZmZzZXQgZnJvbSB0aGUgdmlld3BvcnQuXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0geyB4OiBOdW1iZXIsIHk6IE51bWJlciB9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEZpdHRlZFBvc2l0aW9uKHtcbiAgcG9zaXRpb24sXG4gIGRpbWVuc2lvbnMsXG4gIHRhcmdldFJlY3QsXG4gIHRhcmdldE9mZnNldCxcbiAgdmlld3BvcnQsXG4gIHZpZXdwb3J0T2Zmc2V0ID0gOFxufSkge1xuICBjb25zdCB7IHJlY3QsIHBvc2l0aW9uOiBmaW5hbFBvc2l0aW9uIH0gPSBnZXRQb3NpdGlvbih7XG4gICAgcG9zaXRpb24sXG4gICAgZGltZW5zaW9ucyxcbiAgICB0YXJnZXRSZWN0LFxuICAgIHRhcmdldE9mZnNldCxcbiAgICB2aWV3cG9ydCxcbiAgICB2aWV3cG9ydE9mZnNldFxuICB9KVxuXG4gIC8vIFB1c2ggcmVjdCB0byB0aGUgcmlnaHQgaWYgb3ZlcmZsb3dpbmcgb24gdGhlIGxlZnQgc2lkZSBvZiB0aGUgdmlld3BvcnQuXG4gIGlmIChyZWN0LmxlZnQgPCB2aWV3cG9ydE9mZnNldCkge1xuICAgIHJlY3QucmlnaHQgKz0gTWF0aC5jZWlsKE1hdGguYWJzKHJlY3QubGVmdCAtIHZpZXdwb3J0T2Zmc2V0KSlcbiAgICByZWN0LmxlZnQgPSBNYXRoLmNlaWwodmlld3BvcnRPZmZzZXQpXG4gIH1cblxuICAvLyBQdXNoIHJlY3QgdG8gdGhlIGxlZnQgaWYgb3ZlcmZsb3dpbmcgb24gdGhlIHJpZ2h0IHNpZGUgb2YgdGhlIHZpZXdwb3J0LlxuICBpZiAocmVjdC5yaWdodCA+IHZpZXdwb3J0LndpZHRoIC0gdmlld3BvcnRPZmZzZXQpIHtcbiAgICBjb25zdCBkZWx0YSA9IE1hdGguY2VpbChyZWN0LnJpZ2h0IC0gKHZpZXdwb3J0LndpZHRoIC0gdmlld3BvcnRPZmZzZXQpKVxuICAgIHJlY3QubGVmdCAtPSBkZWx0YVxuICAgIHJlY3QucmlnaHQgLT0gZGVsdGFcbiAgfVxuXG4gIC8vIFB1c2ggcmVjdCBkb3duIGlmIG92ZXJmbG93aW5nIG9uIHRoZSB0b3Agc2lkZSBvZiB0aGUgdmlld3BvcnQuXG4gIGlmIChyZWN0LnRvcCA8IHZpZXdwb3J0T2Zmc2V0KSB7XG4gICAgcmVjdC50b3AgKz0gTWF0aC5jZWlsKE1hdGguYWJzKHJlY3QudG9wIC0gdmlld3BvcnRPZmZzZXQpKVxuICAgIHJlY3QuYm90dG9tID0gTWF0aC5jZWlsKHZpZXdwb3J0T2Zmc2V0KVxuICB9XG5cbiAgLy8gUHVzaCByZWN0IHVwIGlmIG92ZXJmbG93aW5nIG9uIHRoZSBib3R0b20gc2lkZSBvZiB0aGUgdmlld3BvcnQuXG4gIGlmIChyZWN0LmJvdHRvbSA+IHZpZXdwb3J0LmhlaWdodCAtIHZpZXdwb3J0T2Zmc2V0KSB7XG4gICAgY29uc3QgZGVsdGEgPSBNYXRoLmNlaWwocmVjdC5ib3R0b20gLSAodmlld3BvcnQuaGVpZ2h0IC0gdmlld3BvcnRPZmZzZXQpKVxuICAgIHJlY3QudG9wIC09IGRlbHRhXG4gICAgcmVjdC5ib3R0b20gLT0gZGVsdGFcbiAgfVxuXG4gIGNvbnN0IHRhcmdldENlbnRlciA9IGlzQWxpZ25lZEhvcml6b250YWwocG9zaXRpb24pXG4gICAgPyB0YXJnZXRSZWN0LnRvcCArIHRhcmdldFJlY3QuaGVpZ2h0IC8gMlxuICAgIDogdGFyZ2V0UmVjdC5sZWZ0ICsgdGFyZ2V0UmVjdC53aWR0aCAvIDJcblxuICBjb25zdCB0cmFuc2Zvcm1PcmlnaW4gPSBnZXRUcmFuc2Zvcm1PcmlnaW4oe1xuICAgIHJlY3QsXG4gICAgcG9zaXRpb246IGZpbmFsUG9zaXRpb24sXG4gICAgZGltZW5zaW9ucyxcbiAgICB0YXJnZXRDZW50ZXJcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHJlY3QsXG4gICAgcG9zaXRpb246IGZpbmFsUG9zaXRpb24sXG4gICAgdHJhbnNmb3JtT3JpZ2luXG4gIH1cbn1cblxuLyoqXG4gKiBGdW5jdGlvbiB0aGF0IHRha2VzIGluIG51bWJlcnMgYW5kIHBvc2l0aW9uIGFuZCBnaXZlcyB0aGUgZmluYWwgY29vcmRzLlxuICogQHBhcmFtIHtQb3NpdGlvbn0gcG9zaXRpb24g4oCUIHRoZSBwb3NpdGlvbiB0aGUgcG9zaXRpb25lciBzaG91bGQgYmUgb24uXG4gKiBAcGFyYW0ge09iamVjdH0gZGltZW5zaW9ucyDigJQgdGhlIGRpbWVuc2lvbnMgb2YgdGhlIHBvc2l0aW9uZXIuXG4gKiBAcGFyYW0ge09iamVjdH0gdGFyZ2V0UmVjdCDigJQgdGhlIHJlY3Qgb2YgdGhlIHRhcmdldC5cbiAqIEBwYXJhbSB7TnVtYmVyfSB0YXJnZXRPZmZzZXQgLSBvZmZzZXQgZnJvbSB0aGUgdGFyZ2V0LlxuICogQHBhcmFtIHtPYmplY3R9IHZpZXdwb3J0IC0gdGhlIHdpZHRoIGFuZCBoZWlnaHQgb2YgdGhlIHZpZXdwb3J0LlxuICogQHBhcmFtIHtPYmplY3R9IHZpZXdwb3J0T2Zmc2V0IC0gb2Zmc2V0IGZyb20gdGhlIHZpZXdwb3J0LlxuICogQHJldHVybiB7T2JqZWN0fSAtIHsgcmVjdDogUmVjdCwgcG9zaXRpb246IFBvc2l0aW9uIH1cbiAqL1xuZnVuY3Rpb24gZ2V0UG9zaXRpb24oe1xuICBwb3NpdGlvbixcbiAgZGltZW5zaW9ucyxcbiAgdGFyZ2V0UmVjdCxcbiAgdGFyZ2V0T2Zmc2V0LFxuICB2aWV3cG9ydCxcbiAgdmlld3BvcnRPZmZzZXQgPSA4XG59KSB7XG4gIGNvbnN0IGlzSG9yaXpvbnRhbCA9IGlzQWxpZ25lZEhvcml6b250YWwocG9zaXRpb24pXG5cbiAgLy8gSGFuZGxlIGxlZnQgYW5kIHJpZ2h0IHBvc2l0aW9uc1xuICBpZiAoaXNIb3Jpem9udGFsKSB7XG4gICAgY29uc3QgbGVmdFJlY3QgPSBnZXRSZWN0KHtcbiAgICAgIHBvc2l0aW9uOiBQb3NpdGlvbi5MRUZULFxuICAgICAgZGltZW5zaW9ucyxcbiAgICAgIHRhcmdldFJlY3QsXG4gICAgICB0YXJnZXRPZmZzZXRcbiAgICB9KVxuXG4gICAgY29uc3QgcmlnaHRSZWN0ID0gZ2V0UmVjdCh7XG4gICAgICBwb3NpdGlvbjogUG9zaXRpb24uUklHSFQsXG4gICAgICBkaW1lbnNpb25zLFxuICAgICAgdGFyZ2V0UmVjdCxcbiAgICAgIHRhcmdldE9mZnNldFxuICAgIH0pXG5cbiAgICBjb25zdCBmaXRzT25MZWZ0ID0gZ2V0Rml0c09uTGVmdChsZWZ0UmVjdCwgdmlld3BvcnRPZmZzZXQpXG4gICAgY29uc3QgZml0c09uUmlnaHQgPSBnZXRGaXRzT25SaWdodChyaWdodFJlY3QsIHZpZXdwb3J0LCB2aWV3cG9ydE9mZnNldClcblxuICAgIGlmIChwb3NpdGlvbiA9PT0gUG9zaXRpb24uTEVGVCkge1xuICAgICAgaWYgKGZpdHNPbkxlZnQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwb3NpdGlvbixcbiAgICAgICAgICByZWN0OiBsZWZ0UmVjdFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaXRzT25SaWdodCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBvc2l0aW9uOiBQb3NpdGlvbi5SSUdIVCxcbiAgICAgICAgICByZWN0OiByaWdodFJlY3RcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwb3NpdGlvbiA9PT0gUG9zaXRpb24uUklHSFQpIHtcbiAgICAgIGlmIChmaXRzT25SaWdodCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHBvc2l0aW9uLFxuICAgICAgICAgIHJlY3Q6IHJpZ2h0UmVjdFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaXRzT25MZWZ0KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcG9zaXRpb246IFBvc2l0aW9uLkxFRlQsXG4gICAgICAgICAgcmVjdDogbGVmdFJlY3RcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgdG8gdXNpbmcgdGhlIHBvc2l0aW9uIHdpdGggdGhlIG1vc3Qgc3BhY2VcbiAgICBjb25zdCBzcGFjZVJpZ2h0ID0gTWF0aC5hYnMoXG4gICAgICB2aWV3cG9ydC53aWR0aCAtIHZpZXdwb3J0T2Zmc2V0IC0gcmlnaHRSZWN0LnJpZ2h0XG4gICAgKVxuICAgIGNvbnN0IHNwYWNlTGVmdCA9IE1hdGguYWJzKGxlZnRSZWN0LmxlZnQgLSB2aWV3cG9ydE9mZnNldClcblxuICAgIGlmIChzcGFjZVJpZ2h0IDwgc3BhY2VMZWZ0KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwb3NpdGlvbjogUG9zaXRpb24uUklHSFQsXG4gICAgICAgIHJlY3Q6IHJpZ2h0UmVjdFxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBwb3NpdGlvbjogUG9zaXRpb24uTEVGVCxcbiAgICAgIHJlY3Q6IGxlZnRSZWN0XG4gICAgfVxuICB9XG5cbiAgY29uc3QgcG9zaXRpb25Jc0FsaWduZWRPblRvcCA9IGlzQWxpZ25lZE9uVG9wKHBvc2l0aW9uKVxuICBsZXQgdG9wUmVjdFxuICBsZXQgYm90dG9tUmVjdFxuXG4gIGlmIChwb3NpdGlvbklzQWxpZ25lZE9uVG9wKSB7XG4gICAgdG9wUmVjdCA9IGdldFJlY3Qoe1xuICAgICAgcG9zaXRpb24sXG4gICAgICBkaW1lbnNpb25zLFxuICAgICAgdGFyZ2V0UmVjdCxcbiAgICAgIHRhcmdldE9mZnNldFxuICAgIH0pXG4gICAgYm90dG9tUmVjdCA9IGdldFJlY3Qoe1xuICAgICAgcG9zaXRpb246IGZsaXBIb3Jpem9udGFsKHBvc2l0aW9uKSxcbiAgICAgIGRpbWVuc2lvbnMsXG4gICAgICB0YXJnZXRSZWN0LFxuICAgICAgdGFyZ2V0T2Zmc2V0XG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICB0b3BSZWN0ID0gZ2V0UmVjdCh7XG4gICAgICBwb3NpdGlvbjogZmxpcEhvcml6b250YWwocG9zaXRpb24pLFxuICAgICAgZGltZW5zaW9ucyxcbiAgICAgIHRhcmdldFJlY3QsXG4gICAgICB0YXJnZXRPZmZzZXRcbiAgICB9KVxuICAgIGJvdHRvbVJlY3QgPSBnZXRSZWN0KHtcbiAgICAgIHBvc2l0aW9uLFxuICAgICAgZGltZW5zaW9ucyxcbiAgICAgIHRhcmdldFJlY3QsXG4gICAgICB0YXJnZXRPZmZzZXRcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgdG9wUmVjdEZpdHNPblRvcCA9IGdldEZpdHNPblRvcCh0b3BSZWN0LCB2aWV3cG9ydE9mZnNldClcblxuICBjb25zdCBib3R0b21SZWN0Rml0c09uQm90dG9tID0gZ2V0Rml0c09uQm90dG9tKFxuICAgIGJvdHRvbVJlY3QsXG4gICAgdmlld3BvcnQsXG4gICAgdmlld3BvcnRPZmZzZXRcbiAgKVxuXG4gIGlmIChwb3NpdGlvbklzQWxpZ25lZE9uVG9wKSB7XG4gICAgaWYgKHRvcFJlY3RGaXRzT25Ub3ApIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBvc2l0aW9uLFxuICAgICAgICByZWN0OiB0b3BSZWN0XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGJvdHRvbVJlY3RGaXRzT25Cb3R0b20pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBvc2l0aW9uOiBmbGlwSG9yaXpvbnRhbChwb3NpdGlvbiksXG4gICAgICAgIHJlY3Q6IGJvdHRvbVJlY3RcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoIXBvc2l0aW9uSXNBbGlnbmVkT25Ub3ApIHtcbiAgICBpZiAoYm90dG9tUmVjdEZpdHNPbkJvdHRvbSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcG9zaXRpb24sXG4gICAgICAgIHJlY3Q6IGJvdHRvbVJlY3RcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodG9wUmVjdEZpdHNPblRvcCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcG9zaXRpb246IGZsaXBIb3Jpem9udGFsKHBvc2l0aW9uKSxcbiAgICAgICAgcmVjdDogdG9wUmVjdFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIERlZmF1bHQgdG8gbW9zdCBzcGFjaW91cyBpZiB0aGVyZSBpcyBubyBmaXQuXG4gIGNvbnN0IHNwYWNlQm90dG9tID0gTWF0aC5hYnMoXG4gICAgdmlld3BvcnQuaGVpZ2h0IC0gdmlld3BvcnRPZmZzZXQgLSBib3R0b21SZWN0LmJvdHRvbVxuICApXG5cbiAgY29uc3Qgc3BhY2VUb3AgPSBNYXRoLmFicyh0b3BSZWN0LnRvcCAtIHZpZXdwb3J0T2Zmc2V0KVxuXG4gIGlmIChzcGFjZUJvdHRvbSA8IHNwYWNlVG9wKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbklzQWxpZ25lZE9uVG9wID8gZmxpcEhvcml6b250YWwocG9zaXRpb24pIDogcG9zaXRpb24sXG4gICAgICByZWN0OiBib3R0b21SZWN0XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwb3NpdGlvbjogcG9zaXRpb25Jc0FsaWduZWRPblRvcCA/IHBvc2l0aW9uIDogZmxpcEhvcml6b250YWwocG9zaXRpb24pLFxuICAgIHJlY3Q6IHRvcFJlY3RcbiAgfVxufVxuXG4vKipcbiAqIEZ1bmN0aW9uIHRoYXQgdGFrZXMgaW4gbnVtYmVycyBhbmQgcG9zaXRpb24gYW5kIGdpdmVzIHRoZSBmaW5hbCBjb29yZHMuXG4gKiBAcGFyYW0ge09iamVjdH0gcG9zaXRpb24gLSB0aGUgd2lkdGggYW5kIGhlaWdodCBvZiB0aGUgdmlld3BvcnQuXG4gKiBAcGFyYW0ge051bWJlcn0gdGFyZ2V0T2Zmc2V0IC0gb2Zmc2V0IGZyb20gdGhlIHRhcmdldC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBkaW1lbnNpb25zIOKAlCB0aGUgZGltZW5zaW9ucyBvZiB0aGUgcG9zaXRpb25lci5cbiAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXRSZWN0IOKAlCB0aGUgcmVjdCBvZiB0aGUgdGFyZ2V0LlxuICogQHJldHVybiB7T2JqZWN0fSAtIHsgeDogTnVtYmVyLCB5OiBOdW1iZXIgfVxuICovXG5mdW5jdGlvbiBnZXRSZWN0KHsgcG9zaXRpb24sIHRhcmdldE9mZnNldCwgZGltZW5zaW9ucywgdGFyZ2V0UmVjdCB9KSB7XG4gIGNvbnN0IGxlZnRSZWN0ID0gdGFyZ2V0UmVjdC5sZWZ0ICsgdGFyZ2V0UmVjdC53aWR0aCAvIDIgLSBkaW1lbnNpb25zLndpZHRoIC8gMlxuICBjb25zdCBhbGlnbmVkVG9wWSA9IHRhcmdldFJlY3QudG9wIC0gZGltZW5zaW9ucy5oZWlnaHQgLSB0YXJnZXRPZmZzZXRcbiAgY29uc3QgYWxpZ25lZEJvdHRvbVkgPSB0YXJnZXRSZWN0LmJvdHRvbSArIHRhcmdldE9mZnNldFxuICBjb25zdCBhbGlnbmVkUmlnaHRYID0gdGFyZ2V0UmVjdC5yaWdodCAtIGRpbWVuc2lvbnMud2lkdGhcbiAgY29uc3QgYWxpZ25lZExlZnRSaWdodFkgPVxuICAgIHRhcmdldFJlY3QudG9wICsgdGFyZ2V0UmVjdC5oZWlnaHQgLyAyIC0gZGltZW5zaW9ucy5oZWlnaHQgLyAyXG5cbiAgc3dpdGNoIChwb3NpdGlvbikge1xuICAgIGNhc2UgUG9zaXRpb24uTEVGVDpcbiAgICAgIHJldHVybiBtYWtlUmVjdChkaW1lbnNpb25zLCB7XG4gICAgICAgIGxlZnQ6IHRhcmdldFJlY3QubGVmdCAtIGRpbWVuc2lvbnMud2lkdGggLSB0YXJnZXRPZmZzZXQsXG4gICAgICAgIHRvcDogYWxpZ25lZExlZnRSaWdodFlcbiAgICAgIH0pXG4gICAgY2FzZSBQb3NpdGlvbi5SSUdIVDpcbiAgICAgIHJldHVybiBtYWtlUmVjdChkaW1lbnNpb25zLCB7XG4gICAgICAgIGxlZnQ6IHRhcmdldFJlY3QucmlnaHQgKyB0YXJnZXRPZmZzZXQsXG4gICAgICAgIHRvcDogYWxpZ25lZExlZnRSaWdodFlcbiAgICAgIH0pXG4gICAgY2FzZSBQb3NpdGlvbi5UT1A6XG4gICAgICByZXR1cm4gbWFrZVJlY3QoZGltZW5zaW9ucywge1xuICAgICAgICBsZWZ0OiBsZWZ0UmVjdCxcbiAgICAgICAgdG9wOiBhbGlnbmVkVG9wWVxuICAgICAgfSlcbiAgICBjYXNlIFBvc2l0aW9uLlRPUF9MRUZUOlxuICAgICAgcmV0dXJuIG1ha2VSZWN0KGRpbWVuc2lvbnMsIHtcbiAgICAgICAgbGVmdDogdGFyZ2V0UmVjdC5sZWZ0LFxuICAgICAgICB0b3A6IGFsaWduZWRUb3BZXG4gICAgICB9KVxuICAgIGNhc2UgUG9zaXRpb24uVE9QX1JJR0hUOlxuICAgICAgcmV0dXJuIG1ha2VSZWN0KGRpbWVuc2lvbnMsIHtcbiAgICAgICAgbGVmdDogYWxpZ25lZFJpZ2h0WCxcbiAgICAgICAgdG9wOiBhbGlnbmVkVG9wWVxuICAgICAgfSlcbiAgICBkZWZhdWx0OlxuICAgIGNhc2UgUG9zaXRpb24uQk9UVE9NOlxuICAgICAgcmV0dXJuIG1ha2VSZWN0KGRpbWVuc2lvbnMsIHtcbiAgICAgICAgbGVmdDogbGVmdFJlY3QsXG4gICAgICAgIHRvcDogYWxpZ25lZEJvdHRvbVlcbiAgICAgIH0pXG4gICAgY2FzZSBQb3NpdGlvbi5CT1RUT01fTEVGVDpcbiAgICAgIHJldHVybiBtYWtlUmVjdChkaW1lbnNpb25zLCB7XG4gICAgICAgIGxlZnQ6IHRhcmdldFJlY3QubGVmdCxcbiAgICAgICAgdG9wOiBhbGlnbmVkQm90dG9tWVxuICAgICAgfSlcbiAgICBjYXNlIFBvc2l0aW9uLkJPVFRPTV9SSUdIVDpcbiAgICAgIHJldHVybiBtYWtlUmVjdChkaW1lbnNpb25zLCB7XG4gICAgICAgIGxlZnQ6IGFsaWduZWRSaWdodFgsXG4gICAgICAgIHRvcDogYWxpZ25lZEJvdHRvbVlcbiAgICAgIH0pXG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsUUFBVCxRQUF5QixpQkFBekI7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxjQUFzQztFQUFBLElBQW5DQyxLQUFtQyxRQUFuQ0EsS0FBbUM7RUFBQSxJQUE1QkMsTUFBNEIsUUFBNUJBLE1BQTRCO0VBQUEsSUFBaEJDLElBQWdCLFNBQWhCQSxJQUFnQjtFQUFBLElBQVZDLEdBQVUsU0FBVkEsR0FBVTtFQUNyRCxJQUFNQyxVQUFVLEdBQUdDLElBQUksQ0FBQ0MsSUFBTCxDQUFVSixJQUFWLENBQW5CO0VBQ0EsSUFBTUssU0FBUyxHQUFHRixJQUFJLENBQUNDLElBQUwsQ0FBVUgsR0FBVixDQUFsQjtFQUNBLE9BQU87SUFDTEgsS0FBSyxFQUFMQSxL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