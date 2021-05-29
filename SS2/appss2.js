/*
let firstName1 =prompt('Ho cua ban');
let lastName1 = prompt('Ten cua ban');
let fullName2 = firstName + ' ' + lastName;
alert(`Xin chao ${firstName} ${fullName}`);

let firstName2 =prompt('Ho cua ban');
let lastName2 = prompt('Ten cua ban');
let fullName2 = firstName + ' ' + lastName;
alert(`Xin chao ${firstName} ${fullName}`);

let firstName3 =prompt('Ho cua ban');
let lastName3 = prompt('Ten cua ban');
let fullName3 = firstName + ' ' + lastName;
alert(`Xin chao ${firstName} ${fullName}`);
*/

/*for (let i = 1 ; i<=3 ; i++){
    let firstName =prompt('Ho cua ban');
    let lastName = prompt('Ten cua ban');
    let fullName= firstName + ' ' + lastName;
alert(`Xin chao ${firstName} ${fullName}`);
}*/





/*let i = 10;
while(i<=50){
    console.log(i);i=i+2;
}*/

/*let ans ='';
while (ans !== 'co'){
    console.log(ans);
    ans = prompt('Ban co yeu minh khong ?');
}*/

let weight = prompt('Nhap can nang cua ban');
let height = prompt('Nhap vao chieu cao cua ban');
let BMI = weight/(height * height);

if(BMI < 18.5){
    alert('Gay');
}
else if (BMI < 24.9){
    alert('Binh thuong');
}
else if ( BMI < 29.9){
    alert('Hoi beo');
}
else if(BMI < 34.9){
    alert('Beo phi cap do 1');
}
else if(  BMI < 39.9){
    alert('Beo phi cap do 2');
}
else{
    alert('Beo phi cap do 3');
}