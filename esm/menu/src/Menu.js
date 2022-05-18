import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

import React from 'react';
import PropTypes from 'prop-types';
import { Pane } from '../../layers';
import MenuItem from './MenuItem';
import MenuDivider from './MenuDivider';
import MenuGroup from './MenuGroup';
import MenuOption from './MenuOption';
import MenuOptionsGroup from './MenuOptionsGroup';

var Menu = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Menu, _React$PureComponent);

  var _super = _createSuper(Menu);

  function Menu() {
    var _this;

    _classCallCheck(this, Menu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "onMenuRef", function (ref) {
      _this.menuRef = ref;
    });

    return _this;
  }

  _createClass(Menu, [{
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
      return /*#__PURE__*/React.createElement(Pane, {
        is: "nav",
        innerRef: this.onMenuRef,
        role: "menu",
        outline: "none"
      }, children);
    }
  }]);

  return Menu;
}(React.PureComponent);

Menu.displayName = "Menu";

_defineProperty(Menu, "Item", MenuItem);

_defineProperty(Menu, "Divider", MenuDivider);

_defineProperty(Menu, "Group", MenuGroup);

_defineProperty(Menu, "Option", MenuOption);

_defineProperty(Menu, "OptionsGroup", MenuOptionsGroup);

_defineProperty(Menu, "propTypes", {
  /**
   * The children of the component.
   */
  children: PropTypes.node
});

export { Menu as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIlBhbmUiLCJNZW51SXRlbSIsIk1lbnVEaXZpZGVyIiwiTWVudUdyb3VwIiwiTWVudU9wdGlvbiIsIk1lbnVPcHRpb25zR3JvdXAiLCJNZW51IiwicmVmIiwibWVudVJlZiIsIm1lbnVJdGVtcyIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJFcnJvciIsImZpcnN0SXRlbSIsImxhc3RJdGVtIiwiZm9jdXNOZXh0IiwiY3VycmVudEl0ZW0iLCJzdGFydEl0ZW0iLCJnb2luZ0Rvd24iLCJtb3ZlIiwiZWxlbSIsImluZGV4T2ZJdGVtIiwiaW5kZXhPZiIsIm5leHRJdGVtIiwiZGlzYWJsZWQiLCJmb2N1cyIsImZvckVhY2giLCJtZW51SXRlbSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwia2V5IiwicHJldmVudERlZmF1bHQiLCJjaGlsZHJlbiIsInByb3BzIiwib25NZW51UmVmIiwiUHVyZUNvbXBvbmVudCIsIm5vZGUiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbWVudS9zcmMvTWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBQYW5lIH0gZnJvbSAnLi4vLi4vbGF5ZXJzJ1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJy4vTWVudUl0ZW0nXG5pbXBvcnQgTWVudURpdmlkZXIgZnJvbSAnLi9NZW51RGl2aWRlcidcbmltcG9ydCBNZW51R3JvdXAgZnJvbSAnLi9NZW51R3JvdXAnXG5pbXBvcnQgTWVudU9wdGlvbiBmcm9tICcuL01lbnVPcHRpb24nXG5pbXBvcnQgTWVudU9wdGlvbnNHcm91cCBmcm9tICcuL01lbnVPcHRpb25zR3JvdXAnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnUgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIEl0ZW0gPSBNZW51SXRlbVxuXG4gIHN0YXRpYyBEaXZpZGVyID0gTWVudURpdmlkZXJcblxuICBzdGF0aWMgR3JvdXAgPSBNZW51R3JvdXBcblxuICBzdGF0aWMgT3B0aW9uID0gTWVudU9wdGlvblxuXG4gIHN0YXRpYyBPcHRpb25zR3JvdXAgPSBNZW51T3B0aW9uc0dyb3VwXG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBUaGUgY2hpbGRyZW4gb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGVcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIEdldCB0aGUgbWVudSBpdGVtIGJ1dHRvbnNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9wcmVmZXItc3ByZWFkXG4gICAgdGhpcy5tZW51SXRlbXMgPSBBcnJheS5mcm9tKFxuICAgICAgdGhpcy5tZW51UmVmLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tyb2xlPVwibWVudWl0ZW1yYWRpb1wiXSwgW3JvbGU9XCJtZW51aXRlbVwiXScpXG4gICAgKVxuXG4gICAgaWYgKHRoaXMubWVudUl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgbWVudSBoYXMgbm8gbWVudSBpdGVtcycpXG4gICAgfVxuXG4gICAgdGhpcy5maXJzdEl0ZW0gPSB0aGlzLm1lbnVJdGVtc1swXVxuICAgIHRoaXMubGFzdEl0ZW0gPSB0aGlzLm1lbnVJdGVtc1t0aGlzLm1lbnVJdGVtcy5sZW5ndGggLSAxXVxuXG4gICAgY29uc3QgZm9jdXNOZXh0ID0gKGN1cnJlbnRJdGVtLCBzdGFydEl0ZW0pID0+IHtcbiAgICAgIC8vIERldGVybWluZSB3aGljaCBpdGVtIGlzIHRoZSBzdGFydEl0ZW0gKGZpcnN0IG9yIGxhc3QpXG4gICAgICBjb25zdCBnb2luZ0Rvd24gPSBzdGFydEl0ZW0gPT09IHRoaXMuZmlyc3RJdGVtXG5cbiAgICAgIC8vIEhlbHBlciBmdW5jdGlvbiBmb3IgZ2V0dGluZyBuZXh0IGxlZ2l0aW1hdGUgZWxlbWVudFxuICAgICAgY29uc3QgbW92ZSA9IGVsZW0gPT4ge1xuICAgICAgICBjb25zdCBpbmRleE9mSXRlbSA9IHRoaXMubWVudUl0ZW1zLmluZGV4T2YoZWxlbSlcblxuICAgICAgICBpZiAoZ29pbmdEb3duKSB7XG4gICAgICAgICAgaWYgKGluZGV4T2ZJdGVtIDwgdGhpcy5tZW51SXRlbXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWVudUl0ZW1zW2luZGV4T2ZJdGVtICsgMV1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gc3RhcnRJdGVtXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5kZXhPZkl0ZW0gLSAxID4gLTEpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5tZW51SXRlbXNbaW5kZXhPZkl0ZW0gLSAxXVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0YXJ0SXRlbVxuICAgICAgfVxuXG4gICAgICAvLyBNYWtlIGZpcnN0IG1vdmVcbiAgICAgIGxldCBuZXh0SXRlbSA9IG1vdmUoY3VycmVudEl0ZW0pXG5cbiAgICAgIC8vIElmIHRoZSBtZW51aXRlbSBpcyBkaXNhYmxlZCBtb3ZlIG9uXG4gICAgICB3aGlsZSAobmV4dEl0ZW0uZGlzYWJsZWQpIHtcbiAgICAgICAgbmV4dEl0ZW0gPSBtb3ZlKG5leHRJdGVtKVxuICAgICAgfVxuXG4gICAgICAvLyBGb2N1cyB0aGUgZmlyc3Qgb25lIHRoYXQncyBub3QgZGlzYWJsZWRcbiAgICAgIG5leHRJdGVtLmZvY3VzKClcbiAgICB9XG5cbiAgICB0aGlzLm1lbnVJdGVtcy5mb3JFYWNoKG1lbnVJdGVtID0+IHtcbiAgICAgIC8vIEhhbmRsZSBrZXkgcHJlc3NlcyBmb3IgbWVudUl0ZW1cbiAgICAgIG1lbnVJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHtcbiAgICAgICAgLy8gR28gdG8gbmV4dC9wcmV2aW91cyBpdGVtIGlmIGl0IGV4aXN0c1xuICAgICAgICAvLyBvciBsb29wIGFyb3VuZFxuXG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICBmb2N1c05leHQobWVudUl0ZW0sIHRoaXMuZmlyc3RJdGVtKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGUua2V5ID09PSAnQXJyb3dVcCcpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICBmb2N1c05leHQobWVudUl0ZW0sIHRoaXMubGFzdEl0ZW0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZS5rZXkgPT09ICdIb21lJykge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIHRoaXMuZmlyc3RJdGVtLmZvY3VzKClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0VuZCcpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICB0aGlzLmxhc3RJdGVtLmZvY3VzKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgb25NZW51UmVmID0gcmVmID0+IHtcbiAgICB0aGlzLm1lbnVSZWYgPSByZWZcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxQYW5lIGlzPVwibmF2XCIgaW5uZXJSZWY9e3RoaXMub25NZW51UmVmfSByb2xlPVwibWVudVwiIG91dGxpbmU9XCJub25lXCI+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvUGFuZT5cbiAgICApXG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFB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