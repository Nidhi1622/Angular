var Cone = /** @class */ (function () {
    function Cone(h, r) {
        this.h = h;
        this.r = r;
    }
    Cone.prototype.Area = function () {
        var l = Math.sqrt((Math.pow(this.r, 2)) + (Math.pow(this.h, 2)));
        console.log(((this.r * 3.14 * this.r) + (this.r * 3.14 * l)));
    };
    Cone.prototype.Printname = function () { };
    return Cone;
}());
var Sphere = /** @class */ (function () {
    function Sphere(rd) {
        this.rd = rd;
    }
    Sphere.prototype.Area = function () {
        console.log((4 * 3.14 * (Math.pow(this.rd, 2))));
    };
    Sphere.prototype.Printname = function () { };
    return Sphere;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(l, h) {
        this.l = l;
        this.h = h;
    }
    Rectangle.prototype.Area = function () {
        console.log(this.l * this.h);
    };
    Rectangle.prototype.Printname = function () { };
    return Rectangle;
}());
var data = new Cone(12, 4);
data.Area();
var obj = new Sphere(3);
obj.Area();
var objRectangle = new Rectangle(12, 4);
objRectangle.Area();
