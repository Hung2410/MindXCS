// let person = {
//     name: 'Quan',
//     age: 22,
//     location: 'Ha Noi',
//     height: 170,
//     gender: 50,
//     gender: 'Male',
//     weight: 50
// }
// let emptyObj = {};
// console.log(person);
// console.log(emptyObj);


// //RUCD
// console.log (person.age);
// console.log ('Dia chi cua quan la',person.location);

// console.log(`Dia chi cua ${person.name} la`,person.location );

// console.log(person["age"]);

// let key = "weight";
// console.log(person[key]);

// console.log(person.key);


let film = {
    title: 'End Game',
    year: 2020,
    rate: 9.5
}


film.rate = 8.7;
console.log(film);

film.rate = film['rate'] + 0.5
//film.rate += 0.5
console.log(film.rate);



// console.log(film.title);
// let key = 'title';
// console.log(film[key]);

// let y = prompt('Nhap tu ban phim');
// console.log(film[y]);
// if(film[y] === undefined){
//     alert('Khong co');
// }


// film.rate = 8.7;
// console.log(film[rate]);