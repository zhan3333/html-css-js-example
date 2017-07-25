// if else else if switch while do while for for in
var is = true // 下雨
var is2 = 0

if (is2) {
    console.log('不出去玩')
} else {
    console.log('出去玩')
}

// bool 类型数据
// true false

if (is) {
    // is == true
} else if (is2) {
    // is2 == true
} else {
    // 两者都不满足
}

// 成绩


var c = 50
if (c > 60) {
    console.log('及格')
} else if (c > 50) {
    console.log('还可以')
} else if (c > 30) {
    console.log('还能看')
} else {
    console.log('惨不忍睹')
}

// switch
switch(c) {
    case 60: 
         console.log('及格')
         break
    case 50:
        console.log('还可以')
        break
    default:
        console.log('惨不忍睹')
} 

//for
// for(var i=0; i < 10; i ++) {}
for(var i=0;  i < 10000; i ++) {
    console.log(i)
}
//while

// 逻辑判断符 == === > < <= >= != !==
var a = 10
var b = 10
var c = '10'
console.log(a == b, b == c)

// ===
console.log(a === b, b === c)

// != 
console.log(a != b, a !== c)

// 逻辑运算符
var a = (50 > 30)
var b = false
console.log(a && b) // && 全真为真
console.log(b && b)
console.log(a && a)
console.log('=========')
// ||
console.log(a || b)     // 一真全真
console.log(b || a)
console.log(b || b)

