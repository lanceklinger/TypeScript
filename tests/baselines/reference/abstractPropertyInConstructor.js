//// [abstractPropertyInConstructor.ts]
abstract class AbstractClass {
    constructor(str: string) {
        this.method(parseInt(str));
        let val = this.prop.toLowerCase();

        if (!str) {
            this.prop = "Hello World";
        }
        this.cb(str);

        const innerFunction = () => {
            return this.prop;
        }
    }

    abstract prop: string;
    abstract cb: (s: string) => void;

    abstract method(num: number): void;

    method2() {
        this.prop = this.prop + "!";
    }
}

class User {
    constructor(a: AbstractClass) {
        a.prop;
        a.cb("hi");
        a.method(12);
        a.method2();
    }
}


//// [abstractPropertyInConstructor.js]
var AbstractClass = /** @class */ (function () {
    function AbstractClass(str) {
        var _this = this;
        this.method(parseInt(str));
        var val = this.prop.toLowerCase();
        if (!str) {
            this.prop = "Hello World";
        }
        this.cb(str);
        var innerFunction = function () {
            return _this.prop;
        };
    }
    AbstractClass.prototype.method2 = function () {
        this.prop = this.prop + "!";
    };
    return AbstractClass;
}());
var User = /** @class */ (function () {
    function User(a) {
        a.prop;
        a.cb("hi");
        a.method(12);
        a.method2();
    }
    return User;
}());
