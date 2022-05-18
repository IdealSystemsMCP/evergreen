"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _layers = require("../../layers");

var _MenuItem = _interopRequireDefault(require("./MenuItem"));

var _MenuDivider = _interopRequireDefault(require("./MenuDivider"));

var _MenuGroup = _interopRequireDefault(require("./MenuGroup"));

var _MenuOption = _interopRequireDefault(require("./MenuOption"));

var _MenuOptionsGroup = _interopRequireDefault(require("./MenuOptionsGroup"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Menu = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(Menu, _React$PureComponent);

  var _super = _createSuper(Menu);

  function Menu() {
    var _this;

    (0, _classCallCheck2["default"])(this, Menu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onMenuRef", function (ref) {
      _this.menuRef = ref;
    });
    return _this;
  }

  (0, _createClass2["default"])(Menu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // Get the menu item buttons
      // eslint-disable-next-line unicorn/prefer-spread
      this.menuItems = Array.from(this.menuRef.querySelectorAll('[role="menuitemradio"], [role="menuitem"]'));

      if (this.menuItems.length === 0) {
        throw new Error('The menu has no menu items');
      }

      this.firstItem = this.menuItems[0];
      this.lastItem = this.menuItems[this.menuItems.length - 1];

      var focusNext = function focusNext(currentItem, startItem) {
        // Determine which item is the startItem (first or last)
        var goingDown = startItem === _this2.firstItem; // Helper function for getting next legitimate element

        var move = function move(elem) {
          var indexOfItem = _this2.menuItems.indexOf(elem);

          if (goingDown) {
            if (indexOfItem < _this2.menuItems.length - 1) {
              return _this2.menuItems[indexOfItem + 1];
            }

            return startItem;
          }

          if (indexOfItem - 1 > -1) {
            return _this2.menuItems[indexOfItem - 1];
          }

          return startItem;
        }; // Make first move


        var nextItem = move(currentItem); // If the menuitem is disabled move on

        while (nextItem.disabled) {
          nextItem = move(nextItem);
        } // Focus the first one that's not disabled


        nextItem.focus();
      };

      this.menuItems.forEach(function (menuItem) {
        // Handle key presses for menuItem
        menuItem.addEventListener('keydown', function (e) {
          // Go to next/previous item if it exists
          // or loop around
          if (e.key === 'ArrowDown') {
            e.preventDefault();
            focusNext(menuItem, _this2.firstItem);
          }

          if (e.key === 'ArrowUp') {
            e.preventDefault();
            focusNext(menuItem, _this2.lastItem);
          }

          if (e.key === 'Home') {
            e.preventDefault();

            _this2.firstItem.focus();
          }

          if (e.key === 'End') {
            e.preventDefault();

            _this2.lastItem.focus();
          }
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return /*#__PURE__*/_react["default"].createElement(_layers.Pane, {
        is: "nav",
        innerRef: this.onMenuRef,
        role: "menu",
        outline: "none"
      }, children);
    }
  }]);
  return Menu;
}(_react["default"].PureComponent);

exports["default"] = Menu;
Menu.displayName = "Menu";
(0, _defineProperty2["default"])(Menu, "Item", _MenuItem["default"]);
(0, _defineProperty2["default"])(Menu, "Divider", _MenuDivider["default"]);
(0, _defineProperty2["default"])(Menu, "Group", _MenuGroup["default"]);
(0, _defineProperty2["default"])(Menu, "Option", _MenuOption["default"]);
(0, _defineProperty2["default"])(Menu, "OptionsGroup", _MenuOptionsGroup["default"]);
(0, _defineProperty2["default"])(Menu, "propTypes", {
  /**
   * The children of the component.
   */
  children: _propTypes["default"].node
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJNZW51IiwicmVmIiwibWVudVJlZiIsIm1lbnVJdGVtcyIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJFcnJvciIsImZpcnN0SXRlbSIsImxhc3RJdGVtIiwiZm9jdXNOZXh0IiwiY3VycmVudEl0ZW0iLCJzdGFydEl0ZW0iLCJnb2luZ0Rvd24iLCJtb3ZlIiwiZWxlbSIsImluZGV4T2ZJdGVtIiwiaW5kZXhPZiIsIm5leHRJdGVtIiwiZGlzYWJsZWQiLCJmb2N1cyIsImZvckVhY2giLCJtZW51SXRlbSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwia2V5IiwicHJldmVudERlZmF1bHQiLCJjaGlsZHJlbiIsInByb3BzIiwib25NZW51UmVmIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiTWVudUl0ZW0iLCJNZW51RGl2aWRlciIsIk1lbnVHcm91cCIsIk1lbnVPcHRpb24iLCJNZW51T3B0aW9uc0dyb3VwIiwiUHJvcFR5cGVzIiwibm9kZSJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tZW51L3NyYy9NZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFBhbmUgfSBmcm9tICcuLi8uLi9sYXllcnMnXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnLi9NZW51SXRlbSdcbmltcG9ydCBNZW51RGl2aWRlciBmcm9tICcuL01lbnVEaXZpZGVyJ1xuaW1wb3J0IE1lbnVHcm91cCBmcm9tICcuL01lbnVHcm91cCdcbmltcG9ydCBNZW51T3B0aW9uIGZyb20gJy4vTWVudU9wdGlvbidcbmltcG9ydCBNZW51T3B0aW9uc0dyb3VwIGZyb20gJy4vTWVudU9wdGlvbnNHcm91cCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgSXRlbSA9IE1lbnVJdGVtXG5cbiAgc3RhdGljIERpdmlkZXIgPSBNZW51RGl2aWRlclxuXG4gIHN0YXRpYyBHcm91cCA9IE1lbnVHcm91cFxuXG4gIHN0YXRpYyBPcHRpb24gPSBNZW51T3B0aW9uXG5cbiAgc3RhdGljIE9wdGlvbnNHcm91cCA9IE1lbnVPcHRpb25zR3JvdXBcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIFRoZSBjaGlsZHJlbiBvZiB0aGUgY29tcG9uZW50LlxuICAgICAqL1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gR2V0IHRoZSBtZW51IGl0ZW0gYnV0dG9uc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL3ByZWZlci1zcHJlYWRcbiAgICB0aGlzLm1lbnVJdGVtcyA9IEFycmF5LmZyb20oXG4gICAgICB0aGlzLm1lbnVSZWYucXVlcnlTZWxlY3RvckFsbCgnW3JvbGU9XCJtZW51aXRlbXJhZGlvXCJdLCBbcm9sZT1cIm1lbnVpdGVtXCJdJylcbiAgICApXG5cbiAgICBpZiAodGhpcy5tZW51SXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBtZW51IGhhcyBubyBtZW51IGl0ZW1zJylcbiAgICB9XG5cbiAgICB0aGlzLmZpcnN0SXRlbSA9IHRoaXMubWVudUl0ZW1zWzBdXG4gICAgdGhpcy5sYXN0SXRlbSA9IHRoaXMubWVudUl0ZW1zW3RoaXMubWVudUl0ZW1zLmxlbmd0aCAtIDFdXG5cbiAgICBjb25zdCBmb2N1c05leHQgPSAoY3VycmVudEl0ZW0sIHN0YXJ0SXRlbSkgPT4ge1xuICAgICAgLy8gRGV0ZXJtaW5lIHdoaWNoIGl0ZW0gaXMgdGhlIHN0YXJ0SXRlbSAoZmlyc3Qgb3IgbGFzdClcbiAgICAgIGNvbnN0IGdvaW5nRG93biA9IHN0YXJ0SXRlbSA9PT0gdGhpcy5maXJzdEl0ZW1cblxuICAgICAgLy8gSGVscGVyIGZ1bmN0aW9uIGZvciBnZXR0aW5nIG5leHQgbGVnaXRpbWF0ZSBlbGVtZW50XG4gICAgICBjb25zdCBtb3ZlID0gZWxlbSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4T2ZJdGVtID0gdGhpcy5tZW51SXRlbXMuaW5kZXhPZihlbGVtKVxuXG4gICAgICAgIGlmIChnb2luZ0Rvd24pIHtcbiAgICAgICAgICBpZiAoaW5kZXhPZkl0ZW0gPCB0aGlzLm1lbnVJdGVtcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tZW51SXRlbXNbaW5kZXhPZkl0ZW0gKyAxXVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBzdGFydEl0ZW1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmRleE9mSXRlbSAtIDEgPiAtMSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLm1lbnVJdGVtc1tpbmRleE9mSXRlbSAtIDFdXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RhcnRJdGVtXG4gICAgICB9XG5cbiAgICAgIC8vIE1ha2UgZmlyc3QgbW92ZVxuICAgICAgbGV0IG5leHRJdGVtID0gbW92ZShjdXJyZW50SXRlbSlcblxuICAgICAgLy8gSWYgdGhlIG1lbnVpdGVtIGlzIGRpc2FibGVkIG1vdmUgb25cbiAgICAgIHdoaWxlIChuZXh0SXRlbS5kaXNhYmxlZCkge1xuICAgICAgICBuZXh0SXRlbSA9IG1vdmUobmV4dEl0ZW0pXG4gICAgICB9XG5cbiAgICAgIC8vIEZvY3VzIHRoZSBmaXJzdCBvbmUgdGhhdCdzIG5vdCBkaXNhYmxlZFxuICAgICAgbmV4dEl0ZW0uZm9jdXMoKVxuICAgIH1cblxuICAgIHRoaXMubWVudUl0ZW1zLmZvckVhY2gobWVudUl0ZW0gPT4ge1xuICAgICAgLy8gSGFuZGxlIGtleSBwcmVzc2VzIGZvciBtZW51SXRlbVxuICAgICAgbWVudUl0ZW0uYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4ge1xuICAgICAgICAvLyBHbyB0byBuZXh0L3ByZXZpb3VzIGl0ZW0gaWYgaXQgZXhpc3RzXG4gICAgICAgIC8vIG9yIGxvb3AgYXJvdW5kXG5cbiAgICAgICAgaWYgKGUua2V5ID09PSAnQXJyb3dEb3duJykge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGZvY3VzTmV4dChtZW51SXRlbSwgdGhpcy5maXJzdEl0ZW0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZS5rZXkgPT09ICdBcnJvd1VwJykge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGZvY3VzTmV4dChtZW51SXRlbSwgdGhpcy5sYXN0SXRlbSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0hvbWUnKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgdGhpcy5maXJzdEl0ZW0uZm9jdXMoKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGUua2V5ID09PSAnRW5kJykge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIHRoaXMubGFzdEl0ZW0uZm9jdXMoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBvbk1lbnVSZWYgPSByZWYgPT4ge1xuICAgIHRoaXMubWVudVJlZiA9IHJlZlxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPFBhbmUgaXM9XCJuYXZcIiBpbm5lclJlZj17dGhpcy5vbk1lbnVSZWZ9IHJvbGU9XCJtZW51XCIgb3V0bGluZT1cIm5vbmVcIj5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9QYW5lPlxuICAgIClcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7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