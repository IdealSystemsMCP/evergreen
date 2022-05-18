export default function safeInvoke(fn) {
  if (typeof fn === 'function') {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return fn.apply(void 0, args);
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJzYWZlSW52b2tlIiwiZm4iLCJhcmdzIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xpYi9zYWZlLWludm9rZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzYWZlSW52b2tlKGZuLCAuLi5hcmdzKSB7XG4gIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZm4oLi4uYXJncylcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiQUFBQSxlQUFlLFNBQVNBLFVBQVQsQ0FBb0JDLEVBQXBCLEVBQWlDO0VBQzlDLElBQUksT0FBT0EsRUFBUCxLQUFjLFVBQWxCLEVBQThCO0lBQUEsa0NBRFVDLElBQ1Y7TUFEVUEsSUFDVjtJQUFBOztJQUM1QixPQUFPRCxFQUFFLE1BQUYsU0FBTUMsSUFBTixDQUFQO0VBQ0Q7QUFDRiJ9