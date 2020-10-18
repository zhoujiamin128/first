let persion = new Object();
persion.name = 'zhoujiamin';
persion.age = 17;
console.log(persion.name);

let persion2 = {
    name :'zhoujiamin',
    age :17
};
console.log(persion2.name);
console.log(typeof persion2);  //object

const oArray = new Array();
//let s =``;  模板字符串 可以换行  保持格式不变
const oArray = [];
console.log

const herous = [];
console.log(herous[0]);
herous[0] = '蝙蝠侠';
herous[1] = '神奇女侠';
herous[2] = '闪电侠';
herous[5] = '水行侠';
console.log(herous);

const avengers = ['美国队长','钢铁侠','雷神','绿巨人'];
console.log(avengers);
delete avengers[0];
console.log(avengers);


//解构语法
const [a,b,c] = [1,2,3];
console.log(a);

const [a,b,c] = [1,2,3];
console.log(`a=${a},b=${b},c=${c}`); //是``不是''

const avengers = ['美国队长','钢铁侠','雷神','绿巨人'];
console.log(avengers.length);
avengers.length=1;
console.log(avengers);


const avengers = ['美国队长','钢铁侠','雷神','绿巨人'];
avengers.pop();
console.log(avengers);

const avengers = ['美国队长','钢铁侠','雷神','绿巨人'];
const b = avengers.slice(2,3);
console.log(b);


//切片
const avengers = ['美国队长','钢铁侠','雷神','绿巨人'];
const c = avengers.splice(2,2,'zhoujiamin',2);
console.log(c);
console.log(avengers);

const d = ['a','b','c','d'];
const e = d.reverse();
console.log(e);

const f = [1,2,10,100,30];
const g = f.sort();
console.log(g,f);

const avengers = ['美国队长','钢铁侠','雷神','绿巨人'];
const a2= avengers.indexOf('美国队长1');
console.log(a2);

//多维数组
const ma  =[[1,2],[3,4]];
console.log(ma[0],[0]);

const list = new Set();
list.add(1);
list.add(2).add(3).add(4).add(5);
list.add(5);
console.log(5);

//数组去重
const a = [1,2,12,1,2,3,4,5];
const b = new Set(a);
console.log(b);

const c = new Set('hello');
console.log(c);
const d = new Set(c)

const list4 = new Set().add('the').add('quick').add('brown').add('aaa');
console.log(list4.size)
list4.size = 6;
console.log(list4);

//报错 保证内存不泄露
let Array1 = [1,2,3,];
let Array2 = [1,2,3,];
const weak = new WeakSet().add(Array1).add(Array2);
console.log(weak);
Array1 = null ;
Array2 = null ;
const Array3 = [...weak][0];
const Array4 = [...weak][0];
console.log(Array1);
console.log(Array2);

// map 
const romanNumerals = new Map();
romanNumerals.set(1,'l');
romanNumerals.set(2,'ll').set(3,'lll').set(4,'lv').set(5,'v');
console.log(romanNumerals);
console.log(romanNumerals.size);
console.log(romanNumerals.get(3));
console.log(romanNumerals.has(5));
romanNumerals.delete(5);
romanNumerals.clear();
console.log(romanNumerals);

//map to array
const romanNumerals = new Map();
romanNumerals.set(1,'l').set(2,'ll').set(3,'lll').set(4,'lv').set(5,'v');
const oArray1 = [...romanNumerals];
const oArray2 = Array.from(romanNumerals);
console.log(oArray1);
console.log(oArray2);