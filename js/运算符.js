console.group('运算符')
// + - * / % 
var a = 10
var b = 18
console.log('加法', a + b)
console.log('减法', a - b)
console.log('乘法', a * b)
console.log('除法', a / b)
console.log('取余', a % b)
console.log('(a+b)*(b-a)=', (a+b)*(b-a))

console.groupEnd()

console.group('赋值')
var a = 10
var b
b = 11
console.log(a, b)

// += -+ *= /= %= ++ --
a += b
// a = a + b
// -=   a = a -b
console.log(a)

// ++
console.log(a)
a ++
console.log(a)

console.log(a++)    // 返回原始值

console.log(a)

console.log('-----------')

console.log(++a)        // 返回计算后的值

console.log(a)

console.groupEnd()