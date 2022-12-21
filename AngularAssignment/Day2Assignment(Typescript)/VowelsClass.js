var Employee = /** @class */ (function () {
    function Employee() {
        this.strname = "";
    }
    Employee.prototype.setter = function (strname) {
        this.strname = strname;
    };
    Employee.prototype.Display = function () {
        var st = this.strname.toLowerCase();
        var count = 0;
        if (st[0] == "a" || st[0] == "i" || st[0] == "o" || st[0] == "u" || st[0] == 'e') {
            for (var i = 1; i <= (this.strname).length - 1; i++) {
                if (st[i] == "a" || st[i] == "i" || st[i] == "o" || st[i] == "u" || st[i] == 'e') { }
                else {
                    count += 1;
                }
            }
        }
        else {
            for (var j = 1; j <= (this.strname).length - 1; j++) {
                if (st[j] == "a" || st[j] == "i" || st[j] == "o" || st[j] == "u" || st[j] == 'e')
                    count += 1;
            }
        }
        console.log(count);
    };
    return Employee;
}());
var objemp = new Employee();
objemp.setter('Mrauillkagasadscd');
objemp.Display();
