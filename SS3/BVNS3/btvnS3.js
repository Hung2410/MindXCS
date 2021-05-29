// //Chua bai 1
// let cloths = ["Ao", "Quan", "Vay"];

// while (true) {
//     let command = prompt('Hi there, what do you want (C, R, U, D').toLowerCase();
//     console.log(command)
//     if (!command) {
//         break;
//     }
//     if (command === 'r') {
//         for (i = 0; i < cloths.length; i++) {
//             console.log(`${i + 1} ${cloths[i]}`);
//         }
//     } else if (command === 'c') {

//         let newItems = prompt('Enter the name of new item');
//         cloths.push(newItems);
//         console.log(cloths);
//     }
//     else if (command === 'u') {
//         let updateItems = Number(prompt('Vi tri can cap nhat'));
//         let nameItems = prompt('Ten can cap nhat');
//         cloths[updateItems] = nameItems;
//         console.log(cloths);

//     } else if (command === 'd') {
//         const delItem = Number(prompt('enter position to delete'))
//         cloths.splice(delItem, 1)
//         console.log(cloths)
//     }
// }


// let nameListStr = prompt("Nhap danh sach:");
// //string => array
// console.log('string', nameListStr)
// let names = nameListStr.split(',',3);
// console.log('array',names);

// let newNames =[];
// for ( let i = 0; i < names.length; i++){
//     let upperName = names[i].toUpperCase();
//     newNames.push(upperName)
// }
// alert(newNames);


let arr =['Tao', 'Dua', 'Xoai', 'Dua hau'];
arr.splice(arr.length, 0, 'Dao', 'Dau');
console.log(arr);