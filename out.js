var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//isme bhi namespace create karenge with same name:
var UsersUtils;
(function (UsersUtils) {
    var Parent = /** @class */ (function () {
        function Parent() {
        }
        Parent.prototype.setName = function (name) {
            return this.name = name;
        };
        return Parent;
    }());
    UsersUtils.Parent = Parent;
})(UsersUtils || (UsersUtils = {}));
//namespace:
//(a peice of code that it used to group inter-related data)
//A namespace in TypeScript is a way to organize and encapsulate code into logical groups, preventing name collisions between variables, functions, or classes. Namespaces are useful when dealing with large codebases where multiple modules or components may define variables or classes with the same name.
//When to Use a Namespace?
//Namespaces are useful when:
//1. You need to group related functionality together.
//2. You want to avoid global scope pollution and prevent naming conflicts.
//3. You're working in a legacy codebase that doesn't use ES modules.
//4. You prefer a simpler way to structure code without using modules.
//****  Note: 
// In modern TypeScript, ES modules (import/export) are the preferred way to manage code organization. 
// Namespaces are mostly used when working with older codebases or non-module environments like browser scripts.
/// <reference path="./Utils.ts"/>
var UsersUtils;
(function (UsersUtils) {
    var Users = /** @class */ (function (_super) {
        __extends(Users, _super);
        function Users() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Users.prototype.getName = function () {
            return this.name;
        };
        return Users;
    }(UsersUtils.Parent));
    UsersUtils.Users = Users;
})(UsersUtils || (UsersUtils = {}));
var u1 = new UsersUtils.Users();
u1.setName("tonyy");
console.log(u1.getName());
