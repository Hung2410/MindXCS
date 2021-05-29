//Bai 1

// let str_input = prompt("Nhap vao chuoi: ").toLowerCase();
// let str_Reverse = ' ';
// for (let i = str_input.length - 1 ; i >= 0; i--) {
//     str_Reverse += str_input[i]; 
// }
// alert(str_Reverse);


//Bai 2
// let str_input1 = prompt('Nhap vao chuoi:');
// let aRR_input = str_input1.split(" ");
// for (let i = 0; i < aRR_input.length; i++) {
//     aRR_input[i] = aRR_input[i][0].toUpperCase() + aRR_input[i].slice(1);
// }
// alert(aRR_input.join(" "))
      

//Bai 3

//let Arr = ['one', 'two', 'three', 'one', 'one', 'four', 'five', 'four', 'five', 'five'];
// let arr_output=[];
// for (let i = 0; i < Arr.length; i++) {
///     if(arr_output.includes(Arr[i])==0)
//         arr_output.push(Arr[i]);
// }
// console.log(arr_output);

//Bai 4

// let staffs = [{ name: 'Nguyễn Phúc Quý', age: 20, wage: 10000000, position: 'giám đốc' },
//     { name: 'Nguyễn tiến An', age: 20, wage: 10000000, position: 'quản lý' },
//     { name: 'Nguyễn Hoàng Bảo', age: 19, wage: 5000000, position: 'công nhân' }];
// while (true) {
//     let value = prompt('what do you want(C,R,U,D)?').toLowerCase();
//     if (value == 'r') {
//         let x = 1;
//         for (let i of staffs) {
//             console.log(x);
//             for (let index in i) {
//                 console.log(`${index}: ${i[index]}`);
//             }
//             x++;
//         }
//         break;
//     }
//     if(value == 'c'){
//         let name_new = prompt('Name:');
//         let age_new = prompt('Age:');
//         let wage_new = prompt('Wage:');
//         let position_new = prompt('Position:');
//         staffs.push({name:name_new,age:age_new,wage:wage_new,position:position_new})
//     }
//     if(value == 'u'){
//         let index = Number(prompt('You want update index:'))-1;
//         let name_new = prompt(`leave it blank if you don't want to update\nName:`);
//         let age_new =prompt(`leave it blank if you don't want to update\nAge:`);
//         let wage_new =prompt(`leave it blank if you don't want to update\nWage:`);
//         let position_new = prompt(`leave it blank if you don't want to update\nPosition:`);
//         if(name_new != ''){
//             staffs[index].name=name_new;
//         }
//         if(age_new != ''){
//             staffs[index].age=Number(age_new);
//         }
//         if(wage_new != ''){
//             staffs[index].wage=Number(wage_new);
//         }
//         if(position_new != ''){
//             staffs[index].position = position_new;
//         }
//     }
//     if(value == 'd'){
//         let index = Number(prompt('you want delete index:')-1);
//         staffs.splice(index);
//     }
// }

//Bai 5

// function check_nhuan(x) {
//     if (x % 400 == 0) return 1;
//     if (x % 4 == 0 && x % 100 != 0) return 1;
//     return 0
// }
// let day = Number(prompt('set day'));
// let month = Number(prompt('set month'));
// let year = Number(prompt('set year'));
// let check = false;
// switch (month) {
//     case 1: case 3: case 5: case 7: case 8: case 10: case 12:
//         {
//             if (day > 0 && day <= 31) check = true;
//             else break;
//         }
//     case 2: {
//         if (day > 0 && day <= 28 + check_nhuan(year)) check = true;
//         else break;
//     }
//     case 4: case 6: case 9: case 11:
//         {
//             if (day > 0 && day <= 30) check = true;
//             else break;
//         }
//     default: break;
// }
// if (check == false) {
//     alert(check);
// }
// else {
//     let cont = 0;
//     switch (month) {
//         case 1: case 3: case 5: case 7: case 8: case 10: {
//             if (day == 31) {
//                 day = 1; cont++;
//                 month++;
//             }
//             break;
//         }
//         case 4: case 6: case 9: case 11: {
//             if (day == 30) {
//                 day = 1; cont++;
//                 month++;
//             }
//             break;
//         }
//         case 2: {
//             if (day == 28 + check_nhuan(year)) {
//                 day = 1; cont++;
//                 month++;
//             }
//             break;
//         }
//         default: {
//             if (day == 31) {
//                 day = 1; cont++;
//                 month = 1;
//                 year++;
//             }
//             break;
//         }
//     }
//     if (cont == 0) day++;
//     alert(`Ngày tiếp theo là: ${day}/${month}/${year}`)
// }
