//namespace example:
//declaring namespace
var MathUtil;
(function (MathUtil) {
    function add(a, b) {
        return a + b;
    }
    MathUtil.add = add;
    function subtract(a, b) {
        return a - b;
    }
    MathUtil.subtract = subtract;
})(MathUtil || (MathUtil = {}));
//The export keyword makes the functions accessible outside the namespace.
//Without export, the functions would be private to the namespace.
//accessing namespace:
console.log(MathUtil.add(10, 5));
console.log(MathUtil.subtract(10, 5));
//nested namespace: Namespaces can be nested for better organization.
var App;
(function (App) {
    var Utils;
    (function (Utils) {
        function log(message) {
            console.log(message);
        }
        Utils.log = log;
    })(Utils = App.Utils || (App.Utils = {}));
})(App || (App = {}));
App.Utils.log("Hello,Namespace!!!");
