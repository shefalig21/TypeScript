var UserUtils;
(function (UserUtils) {
    var Users = /** @class */ (function () {
        function Users() {
        }
        Users.prototype.getName = function () {
            return "Shefali Gupta";
        };
        return Users;
    }());
    UserUtils.Users = Users;
})(UserUtils || (UserUtils = {}));
var u1 = new UserUtils.Users();
console.log(u1.getName());
