// 8.Create a function that will reverse the given string.
// Ստեղծել ֆունկցիա որը դասավորում է տողը հակառակ հերթականությամբ։


let string = "hello";
function reverseString(str) {
    str = str.split("");
    for (let i = 0; i <= str.length / 2; i++) {
        let temp = str[i];
        str[i] = str[str.length - i - 1];
        str[str.length - i - 1] = temp;
    }
    return str.join("");
}
let res = reverseString(string);
console.log(res);