// THINGS I SHOULD PROBABLY UNDERSTAND FIRST
// what's the difference with/without babel core-js
// how is core-js configurable?
// what's the difference with/without babel preset-env
// how is preset-env configurable?

// babel.config.js vs .babelrc (if we're using it, does browserslist.rc follow a similar convention?)



// WITH browserslist key and ARRAY value. WITH "@babel/preset-env". WITH { "useBuiltIns": "entry" }
// 5315 chars formatted
(function (a) {
  function b(d) {
    if (c[d]) return c[d].exports;
    var e = (c[d] = { i: d, l: !1, exports: {} });
    return a[d].call(e.exports, e, e.exports, b), (e.l = !0), e.exports;
  }
  var c = {};
  return (
    (b.m = a),
    (b.c = c),
    (b.d = function (a, c, d) {
      b.o(a, c) || Object.defineProperty(a, c, { enumerable: !0, get: d });
    }),
    (b.r = function (a) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(a, "__esModule", { value: !0 });
    }),
    (b.t = function (a, c) {
      if ((1 & c && (a = b(a)), 8 & c)) return a;
      if (4 & c && "object" == typeof a && a && a.__esModule) return a;
      var d = Object.create(null);
      if (
        (b.r(d),
        Object.defineProperty(d, "default", { enumerable: !0, value: a }),
        2 & c && "string" != typeof a)
      )
        for (var e in a)
          b.d(
            d,
            e,
            function (b) {
              return a[b];
            }.bind(null, e),
          );
      return d;
    }),
    (b.n = function (a) {
      var c =
        a && a.__esModule
          ? function () {
              return a["default"];
            }
          : function () {
              return a;
            };
      return b.d(c, "a", c), c;
    }),
    (b.o = function (a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    }),
    (b.p = ""),
    b((b.s = "./index.js"))
  );
})({
  "./debug-script-for-some-library.js": function (a, b, c) {
    "use strict";
    function d(a) {
      return h(a) || g(a) || f(a) || e();
    }
    function e() {
      throw new TypeError(
        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
      );
    }
    function f(a, b) {
      if (a) {
        if ("string" == typeof a) return i(a, b);
        var c = Object.prototype.toString.call(a).slice(8, -1);
        return (
          "Object" === c && a.constructor && (c = a.constructor.name),
          "Map" === c || "Set" === c
            ? Array.from(a)
            : "Arguments" === c ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)
            ? i(a, b)
            : void 0
        );
      }
    }
    function g(a) {
      if ("undefined" != typeof Symbol && Symbol.iterator in Object(a))
        return Array.from(a);
    }
    function h(a) {
      if (Array.isArray(a)) return i(a);
    }
    function i(a, b) {
      (null == b || b > a.length) && (b = a.length);
      for (var c = 0, d = Array(b); c < b; c++) d[c] = a[c];
      return d;
    }
    c.r(b);
    var j = c("./some-library.js");
    b["default"] = function () {
      console.log(
        "Welcome to the debug script! Here are all the possible libraries:",
      ),
        console.log("France: ".concat(Object(j["default"])("France"))),
        console.log("Egypt: ".concat(Object(j["default"])("Egypt"))),
        console.log("Myst: ".concat(Object(j["default"])("Myst")));
      (function () {
        var a = d(document.querySelector("#locations").children);
        a.forEach(console.log);
      })();
    };
  },
  "./index.js": function (a, b, c) {
    "use strict";
    function d(a) {
      return h(a) || g(a) || f(a) || e();
    }
    function e() {
      throw new TypeError(
        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
      );
    }
    function f(a, b) {
      if (a) {
        if ("string" == typeof a) return i(a, b);
        var c = Object.prototype.toString.call(a).slice(8, -1);
        return (
          "Object" === c && a.constructor && (c = a.constructor.name),
          "Map" === c || "Set" === c
            ? Array.from(a)
            : "Arguments" === c ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)
            ? i(a, b)
            : void 0
        );
      }
    }
    function g(a) {
      if ("undefined" != typeof Symbol && Symbol.iterator in Object(a))
        return Array.from(a);
    }
    function h(a) {
      if (Array.isArray(a)) return i(a);
    }
    function i(a, b) {
      (null == b || b > a.length) && (b = a.length);
      for (var c = 0, d = Array(b); c < b; c++) d[c] = a[c];
      return d;
    }
    c.r(b);
    var j = c("./some-library.js"),
      k = c("./debug-script-for-some-library.js");
    (function () {
      window.addEventListener("load", function () {
        var a = d(document.getElementById("locations").children),
          b = Math.floor(Math.random() * a.length),
          c = a[b].innerText;
        Object(k["default"])(),
          console.log(
            "I log therefore I am chilling at "
              .concat(Object(j["default"])(c), " in ")
              .concat(c),
          );
      });
    })();
  },
  "./some-library.js": function (a, b, c) {
    "use strict";
    c.r(b),
      (b["default"] = function (a) {
        switch (a) {
          case "France":
            return "Shakespeare & Co";
            break;
          case "Egypt":
            return "Alexandria";
            break;
          case "Myst":
            return "the tower";
        }
      });
  },
});

// WITH browserslist key and STRING value. WITH "@babel/preset-env". WITH { "useBuiltIns": "entry" }
// 5315 chars formatted
(function (a) {
  function b(d) {
    if (c[d]) return c[d].exports;
    var e = (c[d] = { i: d, l: !1, exports: {} });
    return a[d].call(e.exports, e, e.exports, b), (e.l = !0), e.exports;
  }
  var c = {};
  return (
    (b.m = a),
    (b.c = c),
    (b.d = function (a, c, d) {
      b.o(a, c) || Object.defineProperty(a, c, { enumerable: !0, get: d });
    }),
    (b.r = function (a) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(a, "__esModule", { value: !0 });
    }),
    (b.t = function (a, c) {
      if ((1 & c && (a = b(a)), 8 & c)) return a;
      if (4 & c && "object" == typeof a && a && a.__esModule) return a;
      var d = Object.create(null);
      if (
        (b.r(d),
        Object.defineProperty(d, "default", { enumerable: !0, value: a }),
        2 & c && "string" != typeof a)
      )
        for (var e in a)
          b.d(
            d,
            e,
            function (b) {
              return a[b];
            }.bind(null, e),
          );
      return d;
    }),
    (b.n = function (a) {
      var c =
        a && a.__esModule
          ? function () {
              return a["default"];
            }
          : function () {
              return a;
            };
      return b.d(c, "a", c), c;
    }),
    (b.o = function (a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    }),
    (b.p = ""),
    b((b.s = "./index.js"))
  );
})({
  "./debug-script-for-some-library.js": function (a, b, c) {
    "use strict";
    function d(a) {
      return h(a) || g(a) || f(a) || e();
    }
    function e() {
      throw new TypeError(
        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
      );
    }
    function f(a, b) {
      if (a) {
        if ("string" == typeof a) return i(a, b);
        var c = Object.prototype.toString.call(a).slice(8, -1);
        return (
          "Object" === c && a.constructor && (c = a.constructor.name),
          "Map" === c || "Set" === c
            ? Array.from(a)
            : "Arguments" === c ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)
            ? i(a, b)
            : void 0
        );
      }
    }
    function g(a) {
      if ("undefined" != typeof Symbol && Symbol.iterator in Object(a))
        return Array.from(a);
    }
    function h(a) {
      if (Array.isArray(a)) return i(a);
    }
    function i(a, b) {
      (null == b || b > a.length) && (b = a.length);
      for (var c = 0, d = Array(b); c < b; c++) d[c] = a[c];
      return d;
    }
    c.r(b);
    var j = c("./some-library.js");
    b["default"] = function () {
      console.log(
        "Welcome to the debug script! Here are all the possible libraries:",
      ),
        console.log("France: ".concat(Object(j["default"])("France"))),
        console.log("Egypt: ".concat(Object(j["default"])("Egypt"))),
        console.log("Myst: ".concat(Object(j["default"])("Myst")));
      (function () {
        var a = d(document.querySelector("#locations").children);
        a.forEach(console.log);
      })();
    };
  },
  "./index.js": function (a, b, c) {
    "use strict";
    function d(a) {
      return h(a) || g(a) || f(a) || e();
    }
    function e() {
      throw new TypeError(
        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
      );
    }
    function f(a, b) {
      if (a) {
        if ("string" == typeof a) return i(a, b);
        var c = Object.prototype.toString.call(a).slice(8, -1);
        return (
          "Object" === c && a.constructor && (c = a.constructor.name),
          "Map" === c || "Set" === c
            ? Array.from(a)
            : "Arguments" === c ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)
            ? i(a, b)
            : void 0
        );
      }
    }
    function g(a) {
      if ("undefined" != typeof Symbol && Symbol.iterator in Object(a))
        return Array.from(a);
    }
    function h(a) {
      if (Array.isArray(a)) return i(a);
    }
    function i(a, b) {
      (null == b || b > a.length) && (b = a.length);
      for (var c = 0, d = Array(b); c < b; c++) d[c] = a[c];
      return d;
    }
    c.r(b);
    var j = c("./some-library.js"),
      k = c("./debug-script-for-some-library.js");
    (function () {
      window.addEventListener("load", function () {
        var a = d(document.getElementById("locations").children),
          b = Math.floor(Math.random() * a.length),
          c = a[b].innerText;
        Object(k["default"])(),
          console.log(
            "I log therefore I am chilling at "
              .concat(Object(j["default"])(c), " in ")
              .concat(c),
          );
      });
    })();
  },
  "./some-library.js": function (a, b, c) {
    "use strict";
    c.r(b),
      (b["default"] = function (a) {
        switch (a) {
          case "France":
            return "Shakespeare & Co";
            break;
          case "Egypt":
            return "Alexandria";
            break;
          case "Myst":
            return "the tower";
        }
      });
  },
});

// WITH browserslist key and ARRAY value. WITH preset/env. without { "useBuiltIns": "entry" }
// 5315 chars formatted
(function (a) {
  function b(d) {
    if (c[d]) return c[d].exports;
    var e = (c[d] = { i: d, l: !1, exports: {} });
    return a[d].call(e.exports, e, e.exports, b), (e.l = !0), e.exports;
  }
  var c = {};
  return (
    (b.m = a),
    (b.c = c),
    (b.d = function (a, c, d) {
      b.o(a, c) || Object.defineProperty(a, c, { enumerable: !0, get: d });
    }),
    (b.r = function (a) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(a, "__esModule", { value: !0 });
    }),
    (b.t = function (a, c) {
      if ((1 & c && (a = b(a)), 8 & c)) return a;
      if (4 & c && "object" == typeof a && a && a.__esModule) return a;
      var d = Object.create(null);
      if (
        (b.r(d),
        Object.defineProperty(d, "default", { enumerable: !0, value: a }),
        2 & c && "string" != typeof a)
      )
        for (var e in a)
          b.d(
            d,
            e,
            function (b) {
              return a[b];
            }.bind(null, e),
          );
      return d;
    }),
    (b.n = function (a) {
      var c =
        a && a.__esModule
          ? function () {
              return a["default"];
            }
          : function () {
              return a;
            };
      return b.d(c, "a", c), c;
    }),
    (b.o = function (a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    }),
    (b.p = ""),
    b((b.s = "./index.js"))
  );
})({
  "./debug-script-for-some-library.js": function (a, b, c) {
    "use strict";
    function d(a) {
      return h(a) || g(a) || f(a) || e();
    }
    function e() {
      throw new TypeError(
        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
      );
    }
    function f(a, b) {
      if (a) {
        if ("string" == typeof a) return i(a, b);
        var c = Object.prototype.toString.call(a).slice(8, -1);
        return (
          "Object" === c && a.constructor && (c = a.constructor.name),
          "Map" === c || "Set" === c
            ? Array.from(a)
            : "Arguments" === c ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)
            ? i(a, b)
            : void 0
        );
      }
    }
    function g(a) {
      if ("undefined" != typeof Symbol && Symbol.iterator in Object(a))
        return Array.from(a);
    }
    function h(a) {
      if (Array.isArray(a)) return i(a);
    }
    function i(a, b) {
      (null == b || b > a.length) && (b = a.length);
      for (var c = 0, d = Array(b); c < b; c++) d[c] = a[c];
      return d;
    }
    c.r(b);
    var j = c("./some-library.js");
    b["default"] = function () {
      console.log(
        "Welcome to the debug script! Here are all the possible libraries:",
      ),
        console.log("France: ".concat(Object(j["default"])("France"))),
        console.log("Egypt: ".concat(Object(j["default"])("Egypt"))),
        console.log("Myst: ".concat(Object(j["default"])("Myst")));
      (function () {
        var a = d(document.querySelector("#locations").children);
        a.forEach(console.log);
      })();
    };
  },
  "./index.js": function (a, b, c) {
    "use strict";
    function d(a) {
      return h(a) || g(a) || f(a) || e();
    }
    function e() {
      throw new TypeError(
        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
      );
    }
    function f(a, b) {
      if (a) {
        if ("string" == typeof a) return i(a, b);
        var c = Object.prototype.toString.call(a).slice(8, -1);
        return (
          "Object" === c && a.constructor && (c = a.constructor.name),
          "Map" === c || "Set" === c
            ? Array.from(a)
            : "Arguments" === c ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)
            ? i(a, b)
            : void 0
        );
      }
    }
    function g(a) {
      if ("undefined" != typeof Symbol && Symbol.iterator in Object(a))
        return Array.from(a);
    }
    function h(a) {
      if (Array.isArray(a)) return i(a);
    }
    function i(a, b) {
      (null == b || b > a.length) && (b = a.length);
      for (var c = 0, d = Array(b); c < b; c++) d[c] = a[c];
      return d;
    }
    c.r(b);
    var j = c("./some-library.js"),
      k = c("./debug-script-for-some-library.js");
    (function () {
      window.addEventListener("load", function () {
        var a = d(document.getElementById("locations").children),
          b = Math.floor(Math.random() * a.length),
          c = a[b].innerText;
        Object(k["default"])(),
          console.log(
            "I log therefore I am chilling at "
              .concat(Object(j["default"])(c), " in ")
              .concat(c),
          );
      });
    })();
  },
  "./some-library.js": function (a, b, c) {
    "use strict";
    c.r(b),
      (b["default"] = function (a) {
        switch (a) {
          case "France":
            return "Shakespeare & Co";
            break;
          case "Egypt":
            return "Alexandria";
            break;
          case "Myst":
            return "the tower";
        }
      });
  },
});

// without browserlist key and ARRAY value. WITH preset/env. without { "useBuiltIns": "entry" }
// 5315 chars formatted
(function (a) {
  function b(d) {
    if (c[d]) return c[d].exports;
    var e = (c[d] = { i: d, l: !1, exports: {} });
    return a[d].call(e.exports, e, e.exports, b), (e.l = !0), e.exports;
  }
  var c = {};
  return (
    (b.m = a),
    (b.c = c),
    (b.d = function (a, c, d) {
      b.o(a, c) || Object.defineProperty(a, c, { enumerable: !0, get: d });
    }),
    (b.r = function (a) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(a, "__esModule", { value: !0 });
    }),
    (b.t = function (a, c) {
      if ((1 & c && (a = b(a)), 8 & c)) return a;
      if (4 & c && "object" == typeof a && a && a.__esModule) return a;
      var d = Object.create(null);
      if (
        (b.r(d),
        Object.defineProperty(d, "default", { enumerable: !0, value: a }),
        2 & c && "string" != typeof a)
      )
        for (var e in a)
          b.d(
            d,
            e,
            function (b) {
              return a[b];
            }.bind(null, e),
          );
      return d;
    }),
    (b.n = function (a) {
      var c =
        a && a.__esModule
          ? function () {
              return a["default"];
            }
          : function () {
              return a;
            };
      return b.d(c, "a", c), c;
    }),
    (b.o = function (a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    }),
    (b.p = ""),
    b((b.s = "./index.js"))
  );
})({
  "./debug-script-for-some-library.js": function (a, b, c) {
    "use strict";
    function d(a) {
      return h(a) || g(a) || f(a) || e();
    }
    function e() {
      throw new TypeError(
        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
      );
    }
    function f(a, b) {
      if (a) {
        if ("string" == typeof a) return i(a, b);
        var c = Object.prototype.toString.call(a).slice(8, -1);
        return (
          "Object" === c && a.constructor && (c = a.constructor.name),
          "Map" === c || "Set" === c
            ? Array.from(a)
            : "Arguments" === c ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)
            ? i(a, b)
            : void 0
        );
      }
    }
    function g(a) {
      if ("undefined" != typeof Symbol && Symbol.iterator in Object(a))
        return Array.from(a);
    }
    function h(a) {
      if (Array.isArray(a)) return i(a);
    }
    function i(a, b) {
      (null == b || b > a.length) && (b = a.length);
      for (var c = 0, d = Array(b); c < b; c++) d[c] = a[c];
      return d;
    }
    c.r(b);
    var j = c("./some-library.js");
    b["default"] = function () {
      console.log(
        "Welcome to the debug script! Here are all the possible libraries:",
      ),
        console.log("France: ".concat(Object(j["default"])("France"))),
        console.log("Egypt: ".concat(Object(j["default"])("Egypt"))),
        console.log("Myst: ".concat(Object(j["default"])("Myst")));
      (function () {
        var a = d(document.querySelector("#locations").children);
        a.forEach(console.log);
      })();
    };
  },
  "./index.js": function (a, b, c) {
    "use strict";
    function d(a) {
      return h(a) || g(a) || f(a) || e();
    }
    function e() {
      throw new TypeError(
        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
      );
    }
    function f(a, b) {
      if (a) {
        if ("string" == typeof a) return i(a, b);
        var c = Object.prototype.toString.call(a).slice(8, -1);
        return (
          "Object" === c && a.constructor && (c = a.constructor.name),
          "Map" === c || "Set" === c
            ? Array.from(a)
            : "Arguments" === c ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)
            ? i(a, b)
            : void 0
        );
      }
    }
    function g(a) {
      if ("undefined" != typeof Symbol && Symbol.iterator in Object(a))
        return Array.from(a);
    }
    function h(a) {
      if (Array.isArray(a)) return i(a);
    }
    function i(a, b) {
      (null == b || b > a.length) && (b = a.length);
      for (var c = 0, d = Array(b); c < b; c++) d[c] = a[c];
      return d;
    }
    c.r(b);
    var j = c("./some-library.js"),
      k = c("./debug-script-for-some-library.js");
    (function () {
      window.addEventListener("load", function () {
        var a = d(document.getElementById("locations").children),
          b = Math.floor(Math.random() * a.length),
          c = a[b].innerText;
        Object(k["default"])(),
          console.log(
            "I log therefore I am chilling at "
              .concat(Object(j["default"])(c), " in ")
              .concat(c),
          );
      });
    })();
  },
  "./some-library.js": function (a, b, c) {
    "use strict";
    c.r(b),
      (b["default"] = function (a) {
        switch (a) {
          case "France":
            return "Shakespeare & Co";
            break;
          case "Egypt":
            return "Alexandria";
            break;
          case "Myst":
            return "the tower";
        }
      });
  },
});

// WITH browserslist key and ARRAY value. without preset/env. without { "useBuiltIns": "entry" }
// 3076 chars formatted
(function (a) {
  function b(d) {
    if (c[d]) return c[d].exports;
    var e = (c[d] = { i: d, l: !1, exports: {} });
    return a[d].call(e.exports, e, e.exports, b), (e.l = !0), e.exports;
  }
  var c = {};
  return (
    (b.m = a),
    (b.c = c),
    (b.d = function (a, c, d) {
      b.o(a, c) || Object.defineProperty(a, c, { enumerable: !0, get: d });
    }),
    (b.r = function (a) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(a, "__esModule", { value: !0 });
    }),
    (b.t = function (a, c) {
      if ((1 & c && (a = b(a)), 8 & c)) return a;
      if (4 & c && "object" == typeof a && a && a.__esModule) return a;
      var d = Object.create(null);
      if (
        (b.r(d),
        Object.defineProperty(d, "default", { enumerable: !0, value: a }),
        2 & c && "string" != typeof a)
      )
        for (var e in a)
          b.d(
            d,
            e,
            function (b) {
              return a[b];
            }.bind(null, e),
          );
      return d;
    }),
    (b.n = function (a) {
      var c =
        a && a.__esModule
          ? function () {
              return a["default"];
            }
          : function () {
              return a;
            };
      return b.d(c, "a", c), c;
    }),
    (b.o = function (a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    }),
    (b.p = ""),
    b((b.s = "./index.js"))
  );
})({
  "./debug-script-for-some-library.js": function (a, b, c) {
    "use strict";
    c.r(b);
    var d = c("./some-library.js");
    b["default"] = function () {
      console.log(
        "Welcome to the debug script! Here are all the possible libraries:",
      ),
        console.log(`France: ${Object(d["default"])("France")}`),
        console.log(`Egypt: ${Object(d["default"])("Egypt")}`),
        console.log(`Myst: ${Object(d["default"])("Myst")}`);
      (() => {
        const a = [...document.querySelector("#locations").children];
        a.forEach(console.log);
      })();
    };
  },
  "./index.js": function (a, b, c) {
    "use strict";
    c.r(b);
    var d = c("./some-library.js"),
      e = c("./debug-script-for-some-library.js");
    (() => {
      window.addEventListener("load", function () {
        const a = [...document.getElementById("locations").children],
          b = Math.floor(Math.random() * a.length),
          c = a[b].innerText;
        Object(e["default"])(),
          console.log(
            `I log therefore I am chilling at ${Object(d["default"])(
              c,
            )} in ${c}`,
          );
      });
    })();
  },
  "./some-library.js": function (a, b, c) {
    "use strict";
    c.r(b),
      (b["default"] = function (a) {
        switch (a) {
          case "France":
            return "Shakespeare & Co";
            break;
          case "Egypt":
            return "Alexandria";
            break;
          case "Myst":
            return "the tower";
        }
      });
  },
});

// WITH browserslist key and ARRAY value. without preset/env. WITH { "useBuiltIns": "entry" }
// build error, basically: "useBuiltIns wtf"

// without browserlist key and ARRAY value. without preset/env. without { "useBuiltIns": "entry" }
// 3076 chars formatted
(function (a) {
  function b(d) {
    if (c[d]) return c[d].exports;
    var e = (c[d] = { i: d, l: !1, exports: {} });
    return a[d].call(e.exports, e, e.exports, b), (e.l = !0), e.exports;
  }
  var c = {};
  return (
    (b.m = a),
    (b.c = c),
    (b.d = function (a, c, d) {
      b.o(a, c) || Object.defineProperty(a, c, { enumerable: !0, get: d });
    }),
    (b.r = function (a) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(a, "__esModule", { value: !0 });
    }),
    (b.t = function (a, c) {
      if ((1 & c && (a = b(a)), 8 & c)) return a;
      if (4 & c && "object" == typeof a && a && a.__esModule) return a;
      var d = Object.create(null);
      if (
        (b.r(d),
        Object.defineProperty(d, "default", { enumerable: !0, value: a }),
        2 & c && "string" != typeof a)
      )
        for (var e in a)
          b.d(
            d,
            e,
            function (b) {
              return a[b];
            }.bind(null, e),
          );
      return d;
    }),
    (b.n = function (a) {
      var c =
        a && a.__esModule
          ? function () {
              return a["default"];
            }
          : function () {
              return a;
            };
      return b.d(c, "a", c), c;
    }),
    (b.o = function (a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    }),
    (b.p = ""),
    b((b.s = "./index.js"))
  );
})({
  "./debug-script-for-some-library.js": function (a, b, c) {
    "use strict";
    c.r(b);
    var d = c("./some-library.js");
    b["default"] = function () {
      console.log(
        "Welcome to the debug script! Here are all the possible libraries:",
      ),
        console.log(`France: ${Object(d["default"])("France")}`),
        console.log(`Egypt: ${Object(d["default"])("Egypt")}`),
        console.log(`Myst: ${Object(d["default"])("Myst")}`);
      (() => {
        const a = [...document.querySelector("#locations").children];
        a.forEach(console.log);
      })();
    };
  },
  "./index.js": function (a, b, c) {
    "use strict";
    c.r(b);
    var d = c("./some-library.js"),
      e = c("./debug-script-for-some-library.js");
    (() => {
      window.addEventListener("load", function () {
        const a = [...document.getElementById("locations").children],
          b = Math.floor(Math.random() * a.length),
          c = a[b].innerText;
        Object(e["default"])(),
          console.log(
            `I log therefore I am chilling at ${Object(d["default"])(
              c,
            )} in ${c}`,
          );
      });
    })();
  },
  "./some-library.js": function (a, b, c) {
    "use strict";
    c.r(b),
      (b["default"] = function (a) {
        switch (a) {
          case "France":
            return "Shakespeare & Co";
            break;
          case "Egypt":
            return "Alexandria";
            break;
          case "Myst":
            return "the tower";
        }
      });
  },
});
