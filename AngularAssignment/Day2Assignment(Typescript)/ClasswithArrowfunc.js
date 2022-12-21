var Item = /** @class */ (function () {
    function Item(itemid, itemname, itemprice, category) {
        var _this = this;
        this.showDetail = function () { return console.log("itemid: " + _this.itemid + '\nitemname: ' + _this.itemname + '\nitemprice:' + _this.itemprice + '\ncategory:' + _this.category); };
        this.itemid = itemid;
        this.itemname = itemname;
        this.itemprice = itemprice;
        this.category = category;
    }
    return Item;
}());
var obj = new Item(1, "machine", 202, "Mechanic");
obj.showDetail();
