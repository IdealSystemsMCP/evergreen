/**
 * @param {number} size
 * @param {number} sizeLimitOneCharacter
 * @return {number} font size
 */
var getAvatarInitialsFontSize = function getAvatarInitialsFontSize(size, sizeLimitOneCharacter) {
  if (size <= sizeLimitOneCharacter) {
    return Math.ceil(size / 2.2);
  }

  return Math.ceil(size / 2.6);
};

export default getAvatarInitialsFontSize;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJnZXRBdmF0YXJJbml0aWFsc0ZvbnRTaXplIiwic2l6ZSIsInNpemVMaW1pdE9uZUNoYXJhY3RlciIsIk1hdGgiLCJjZWlsIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3RoZW1lL3NyYy9kZWZhdWx0LXRoZW1lL2NvbXBvbmVudC1zcGVjaWZpYy9nZXRBdmF0YXJJbml0aWFsc0ZvbnRTaXplLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IHNpemVcbiAqIEBwYXJhbSB7bnVtYmVyfSBzaXplTGltaXRPbmVDaGFyYWN0ZXJcbiAqIEByZXR1cm4ge251bWJlcn0gZm9udCBzaXplXG4gKi9cbmNvbnN0IGdldEF2YXRhckluaXRpYWxzRm9udFNpemUgPSAoc2l6ZSwgc2l6ZUxpbWl0T25lQ2hhcmFjdGVyKSA9PiB7XG4gIGlmIChzaXplIDw9IHNpemVMaW1pdE9uZUNoYXJhY3Rlcikge1xuICAgIHJldHVybiBNYXRoLmNlaWwoc2l6ZSAvIDIuMilcbiAgfVxuXG4gIHJldHVybiBNYXRoLmNlaWwoc2l6ZSAvIDIuNilcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0QXZhdGFySW5pdGlhbHNGb250U2l6ZVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEseUJBQXlCLEdBQUcsU0FBNUJBLHlCQUE0QixDQUFDQyxJQUFELEVBQU9DLHFCQUFQLEVBQWlDO0VBQ2pFLElBQUlELElBQUksSUFBSUMscUJBQVosRUFBbUM7SUFDakMsT0FBT0MsSUFBSSxDQUFDQyxJQUFMLENBQVVILElBQUksR0FBRyxHQUFqQixDQUFQO0VBQ0Q7O0VBRUQsT0FBT0UsSUFBSSxDQUFDQyxJQUFMLENBQVVILElBQUksR0FBRyxHQUFqQixDQUFQO0FBQ0QsQ0FORDs7QUFRQSxlQUFlRCx5QkFBZiJ9