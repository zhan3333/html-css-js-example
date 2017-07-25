// 定义一个变量
/* 这里是一个多行
的注释 */
var i = 1
console.log('i is: ' + i)

var I = 2
console.log('i is:' + i, 'I is:' + I)

// 类型声明
var str = 'my name'
var num = 1
var obj = {
    name: 'zhan',
    age: 23,
    'max-tag': 'show'
}
var arr = ['10', '11', '12', '13']
//console.log(nonono)     // Uncaught ReferenceError: zhan is not defined

// 计算
var a = 10
var b = 9
console.log('加法', a + b)
console.log('减法', a - b)
console.log('乘法', a * b)
console.log('除法', a / b)

// bool类型
console.group('数据类型')
var is = true
var notIs = false

console.log(is, notIs)

// 数组类型
var arr = ['zhan', 'zhai', 'xu']
console.log(arr, arr.length)
console.log(arr[0])
console.log(arr[3])
arr[3] = 'add name'
console.log(arr, arr[3], arr.length)
arr[100] = '100 name'
console.log(arr, arr.length)

// 对象类型
var obj = {
    name: 'zhan',
    age: 23
}
console.log(obj)
obj.office = '程序员'
console.log(obj)
console.log(obj.office, obj['office'])
console.groupEnd()

// 运算符
console.group('运算符')
var a = 10
var b = 100
console.log('a + b = ', a + b)
console.log('a - b = ', a - b)
console.log('a * b = ', a * b)
console.log('a / b = ', a / b)
console.log('b % a = ', b % a)
console.log('a++ = ', a++)
console.log('++a = ', ++a)
console.log('b-- = ', b--)
console.log('--b = ', --b)
console.groupEnd()

// 赋值运算符
console.group('赋值运算符')
var a = 'zhan'
var b = 10
var c = 1

// 加等
c += b
console.log('c += b', c)

// 减等
c = 1
c -= b
console.log('c -= b', c)

// 乘等
c = 1
c *= b
console.log('c *= b', c)

// 除等
c = 1
c /= b
console.log('c /= b', c)

// 余等
c = 23
b = 3
c %= b
console.log('c %= b', c)
console.groupEnd()

// 比较运算符
console.group('比较运算符')
var age = 18
var age2 = 23
var ageStr = '18'
// ==
console.log('age == ageStr', age == ageStr)
// ===
console.log('age === ageStr', age === ageStr)

// !=
console.log('age != ageStr', age != ageStr)
console.log('age != age2', age != age2)

// !==
console.log('age !== ageStr', age !== ageStr)

// >
console.log('age > ageStr', age > ageStr)
console.log('age > age2', age > age2)

// <
console.log('age < ageStr', age < ageStr)
console.log('age < age2', age < age2)

// >=
console.log('age >= ageStr', age >= ageStr)
console.log('age >= age2', age >= age2)

// <=
console.log('age <= ageStr', age <= ageStr)
console.log('age <= age2', age <= age2)
console.groupEnd()

// 逻辑运算符
console.group('逻辑运算符')
// &&
console.log('true && false = ', true && false)
console.log('true && true = ', true && true)
console.log('false && true = ',false && true)
console.log('false && false = ', false && false)

// ||
console.log('true || false = ', true || false)
console.log('false || false = ', false || false)
console.log('false || true = ', false || true)
console.log('true || true = ', true || true)

// !
console.log('!true = ', !true)
console.log('!false = ', !false)
console.groupEnd()

// 流程控制
console.group('流程控制')
// if... else...
var age = 18
if (age <= 18) {
    // 当括号中值为true时执行
    console.log('还年轻')
} else {
    // 当括号中值为false时执行
    console.log('老年人')
}

// if... else if... else...
age = 28
if (age <= 18) {
    console.log('还年轻')
} else if (age <= 25) {
    console.log('中年人')
} else {
    console.log('老年人')
}

// switch
console.group('switch')
age = 19
switch (age) {
    case 18:
        console.log('18一枝花')
        break
    case 19:
        console.log('19一颗瓜')
        break
    default:
        console.log('这年龄没啥用')
}
console.groupEnd()

console.group('array for in')
// array for in
var arr = ['zhan', 'xu', 'zhai']
for (k in arr) {
    console.log(k, arr[k])
}
console.groupEnd()

// array for
console.group('array for')
for (var i; i < arr.length; i++) {
    console.log(i, arr[i])
}
console.groupEnd()

// object 万物皆对象,都可以用for in
console.group('object for in')
var obj = {
    name: 'zhan',
    age: 18
}
for (k in obj) {
    console.log(k, obj[k])
}

var str = 'hello world'
for (k in str) {
    console.log(k, str[k])
}
console.groupEnd()

// while
var i = 0
console.group('while')
while (i < 10) {
    i++
    console.log(i)
}
console.groupEnd()
console.groupEnd()


