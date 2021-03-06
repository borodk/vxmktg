/*! vaForms 2015-05-14 */
if ("undefined" == typeof console) {
    var console = {};
    console.log = console.error = console.info = console.debug = console.warn = console.trace = console.dir = console.dirxml = console.group = console.groupEnd = console.time = console.timeEnd = console.assert = console.profile = function() {}
}
window.location.origin || (window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "")), Array.prototype.indexOf || (Array.prototype.indexOf = function(a, b) {
    for (var c = b || 0, d = this.length; d > c; c++)
        if (this[c] === a) return c;
    return -1
}),
function(a, b) {
    "use strict";
    var c = c || void 0,
        d = d || void 0,
        e = this || window;
    "undefined" != typeof c ? c.exports = b() : "function" == typeof d && "object" == typeof d.amd ? d(b) : e[a] = b()
}("Validator", function() {
    "use strict";
    var a = function(a) {
        this.form = a.form || document.forms[0], this.cName = a.cName || "elevate-inc-register-cookie", this.cValue = a.cValue || "registered", this.cDays = a.cDays || 365, this.mainMessage = a.mainMessage || "", this.errorResponse = a.errorResponse || function(a, b) {
            alert(a + " " + b)
        }, this.forwardLocation = a.forwardLocation || "/cms/promos/elevate-inc-register-form-thank-you", this.requiredInputs = [], this.checkForRegCookie(function() {
            this.formListener(), this.selectBoxListeners()
        })
    };
    return a.prototype = {
        formListener: function() {
            var a = this;
            this.form.addEventListener("submit", function(b) {
                a.checkAllFields(b)
            });
            for (var b = this.form.getElementsByTagName("input"), c = 0; c < b.length; c++) b[c].required === !0 && this.requiredInputs.push(b[c])
        },
        validateInput: function(a) {
            var b = a.type;
            return this[b + "Validate"](a)
        },
        checkAllFields: function(a) {
            a.preventDefault();
            for (var b = 0; b < this.requiredInputs.length; b++) {
                var c = this.validateInput(this.requiredInputs[b]);
                if (!c) return !1
            }
            this.form.submit(), this.setRegCookie(this.cName, this.cValue, this.cDays)
        },
        textValidate: function(a) {
            var b = a.value;
            return b && "" != b ? !0 : (this.errorResponse(this.mainMessage, a.dataset.message), !1)
        },
        checkboxValidate: function(a) {
            return a.checked ? !0 : (this.errorResponse(this.mainMessage, a.dataset.message), !1)
        },
        emailValidate: function(a) {
            var b = a.value,
                c = b.indexOf("@"),
                d = b.lastIndexOf(".");
            return 1 > c || c + 2 > d || d + 2 >= b.length ? (this.errorResponse(this.mainMessage, a.dataset.message), a.value = "", !1) : !0
        },
        numberValidate: function(a) {
            var b = a.value,
                c = /^[0-9]{11}$/,
                d = new Array;
            if (!a.value) return this.errorResponse(this.mainMessage, a.dataset.message), a.value = "", !1;
            try {
                if (b.match(c)) {
                    var d = b.split(""),
                        e = 6 * d[0],
                        f = 5 * d[1],
                        g = 4 * d[2],
                        h = 3 * d[3],
                        i = 8 * d[4],
                        j = 7 * d[5],
                        k = 6 * d[6],
                        l = 5 * d[7],
                        m = 4 * d[8],
                        n = 3 * d[9],
                        o = e + f + g + h + i + j + k + l + m + n,
                        p = Math.floor(o / 11),
                        q = 11 * p,
                        r = o - q;
                    if (r >= 2) return d[10] == 11 - r ? !0 : (a.value = "", this.errorResponse(this.mainMessage, a.dataset.message), !1);
                    if (0 != d[10]) return a.value = "", this.errorResponse(this.mainMessage, a.dataset.message), !1
                } else if ("" !== b) return a.value = "", this.errorResponse(this.mainMessage, a.dataset.message), !1
            } catch (s) {
                return a.value = "", this.errorResponse(this.mainMessage, a.dataset.message), !1
            }
            return !0
        },
        telValidate: function(a) {
            var b = a.value;
            return b = b.replace(/[^0-9]/g, ""), b.length < 10 ? (this.errorResponse(this.mainMessage, a.dataset.message), a.value = "", !1) : !0
        },
        setRegCookie: function(a, b, c) {
            var d = new Date;
            d.setDate(d.getDate() + c);
            var e = escape(b) + (null == c ? "" : "; expires=" + d.toUTCString());
            document.cookie = a + "=" + e
        },
        getCookie: function(a) {
            for (var b = document.cookie, c = a + "=", d = b.length, e = 0; d > e;) {
                var f = e + c.length;
                if (b.substring(e, f) == c) {
                    var g = b.indexOf(";", f);
                    return -1 == g && (g = d), unescape(b.substring(f, g))
                }
                if (e = b.indexOf(" ", e) + 1, 0 == e) break
            }
            return null
        },
        checkForRegCookie: function(a) {
            var b = this.getCookie(this.cName);
            return null === b || "" === b ? (a.apply(this), !1) : void(window.location = this.forwardLocation)
        },
        selectBoxListeners: function() {
            for (var a = this.form.getElementsByTagName("select"), b = 0; b < a.length; b++) a[b].addEventListener("change", function(a) {
                var b = this.getAttributeNode("rel").value;
                document.getElementById(b).innerHTML = this.value
            })
        }
    }, a
});
