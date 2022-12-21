var num = [1, 5, 7, 9, 3];
var a = function (num) {
    for (var i = 0; i < num.length; i++) {
        for (var j = 0; j < num.length - 1; j++) {
            if (num[j] > num[j + 1]) {
                var temp = num[j];
                num[j] = num[j + 1];
                num[j + 1] = temp;
            }
        }
    }
    console.log(num);
};
a(num);
