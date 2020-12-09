const name = "Superman"
const isTrue = false
const arr = [435, 123, 345, 123, 453]
const myObj = {
    name: "John DDoe",
    age: 22
}
function saySomething() {
    console.log("Hallo Function");
}

// mehrere Sachen exxportieren => object
// module.exports.nameKey = name;
// module.exports.kim = isTrue;
// module.exports.francis = arr
// module.exports.aos = myObj

// module.exports = {
//     mohammad: name,
//     mirnel: isTrue,
//     hakan: arr,
//     asad: myObj,
//     raquel: saySomething
// }
module.exports = {
    name,
    isTrue,
    arr,
    myObj,
    saySomething
}