var Person = /** @class */ (function () {
    // propriétés Public, private et protected pour + de sécurité (public par défault)
    // propriété: typage (string, number, boolean, void);
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        var localVariable = 123;
    }
    // convention
    Person.prototype.introduce = function () {
        return "Bonjour, je suis " + this.firstName;
    };
    Person.prototype.addFriend = function (friend) {
    };
    return Person;
}());
