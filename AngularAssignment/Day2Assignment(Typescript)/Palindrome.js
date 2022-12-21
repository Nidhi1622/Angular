var PersonName = "Shayli";
for (var i = 0; i < (PersonName.length) / 2; i++) {
    if (PersonName[i] !== PersonName[PersonName.length - 1 - i])
        ;
}
console.log('It is not a palindrome');
