//Bai 1

//1.1
for (let i = 0; i <= 7; i++) {
    console.log(i);
}

//1.2
let n1 = Number(prompt('Enter a number ?'));
for (let i = 0; i < n1; i++) {
    console.log(i);
}

//1.3
let n2 = Number(prompt('Enter a number ?'));
for (let i = 3; i < n2; i++) {
    console.log(i);
}

//1.4
let c4 = Number(prompt('Enter a number ?'));
let n4 = Number(prompt('Enter a number ?'));
for (let i = c4; i < n4; i++) {
    console.log(i);
}

//1.5
let c5 = Number(prompt('Enter a number ?'));
let n5 = Number(prompt('Enter a number ?'));
let s5 = Number(prompt('Enter a number ?'));
for (let i = c5; i < n5; i += s5) {
    console.log(i);
}

//Bai 2
let fact = 1;
let n22 = Number(prompt('Enter a number ?'));
for (let i = 1; i <= n22; i++) {
    fact = fact * i;
}
alert(`The factorial of ${n22} is ${fact}`)


//Bai 3
let age = Number(prompt('Nhap tuoi cua ban:'));
if (age < 14) {
    alert('Ban khong du tuoi');
}
else {
    alert('Ban du tuoi');

}

//Bai 4
let x = Number(prompt('x=?'));
if (x % 2 === 0) {
    alert(`${x} la so chan`);
}
else {
    alert(`${x} la so le`);
}

//Bai 5
let username = prompt('Ten nguoi dung');
let password = prompt('Mat khau');
if (username !== 'mindx') {
    alert('username khong dung');
}
else if (password !== 'codethechange') {
    alert('password khong dung');
}
else {
    alert('Dang nhap thanh cong');
}