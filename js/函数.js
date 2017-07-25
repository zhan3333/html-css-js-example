console.group('函数')

// 相加两个数
function sum (a, b = 9) {
    var res = a + b
    return res
}
var c = sum (2)
console.log(c)
var d = sum (100)
console.log(d)

function noRet () {

}
var e = noRet ()
var f
console.log(e, f)

function sum2 (a, b, c) {
    var d = sum(a, b)
    return sum(d, c)
}
// 函数式编程

console.log(sum2(100, 200, 33))


// 变量作用域


function fun1 () {
    var i = 1
    console.log(i)
    console.log(s)
}

fun1()
var s = 10          // 全局变量
console.log(i)

console.groupEnd()