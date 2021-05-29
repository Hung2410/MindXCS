//console.log('Hello C4E'); 
//hien thi ra dev tool (inspect)
//dev tool la giao dien hien thi khac cua javascript

//alert('Hello World'); // alert hien thi ra dong nay
//Bien de luu tru du lieu

/* 
comment nhieu dong
*/

//Biến
/*let x = 'Hello X';
const temp = 20;
var name = 'Hung'; // ít dùng
console.log(x);
console.log(temp);
console.log(name);

let age;
age=20;
age=22;
console.log('Tuổi:',age);
*/
/*
//string
let fullName ='Hung';
let firstName ="Hoang";
let code = 'C4E';
let count = 22;
let courseName =`Lop hoc ${code} co si so ${count}`;

let lastName = 'Manh';
let name = firstName +' '+ lastName +' '+ fullName;
console.log(fullName,firstName,courseName);
console.log(name);
*/
//Number
/*
let count = 22;
let mark = 9.5;
let temp = -20;
let y = 5;

console.log(count,mark,temp);
let sum = count + mark;
let diff = count - mark;
let div = count / mark;
let mul = count * mark;
let mod = count % y; //chia lay du
console.log(sum , diff , div , mul);
console.log(mod);
console.log(count + '3');
*/
/*let name = prompt('Your name: ');
console.log(name);
*/
/*
let age = prompt('Tuoi cua ban');
let Answer1 = 'Ban da co';
let Answer2 =  'xuan xanh';
let Answer3 = Answer1 + ' ' + age + ' ' + Answer2;
alert(Answer3);
*/
/*let age = prompt('Tuoi cua ban');
let Answer = `Ban da co ${age} xuan xanh`;
alert(Answer); 
*/
let birthYearStr = prompt('Nam sinh cua ban'); // prompt tra du lieu kieu chuoi
console.log(typeof birthYearStr); //typeof check kieu du lieu
let birthYear = Number(birthYearStr);
console.log(typeof birthYear);
let age = 2021 - birthYear; 
alert(`ban da co ${age} xuan xanh`);