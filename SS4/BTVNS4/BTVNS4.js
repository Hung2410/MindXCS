//1.0
let dictionary = {
    debug: `The process of figuring out why your program has a certain error and how to fix it`,
    done: `When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)`,
    defect: `The formal word for 'error'`,
    pm: `The short version  of Project Manager, the person in charge of the final result of a project`,
    uiux: `UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels`
}
//1.1, 1.2
alert(`Hi there, this is dev dictionary`);
while (true) {
    let keyWord = prompt(`Enter a keyword:`);
    if (dictionary[keyWord] === undefined) {
        dictionary[keyWord] = prompt(`We could not find your word: ${keyWord}, leave your explanation :`);
    }
    else {
        alert(`${keyWord}\n${dictionary[keyWord]}`);
    }
}
//2
let product ={ 
    name: 'Xiaomi rice cooker',
    price: 1700,
    brand: 'Xiaomi',
    color: 'white'
 } ;
for (let x in product) {
    console.log(x, product[x]);
}


//2.2
for (let key in product) {
    console.log(key, ':', product[key]);
//3.1
let product = [{
    name: 'Xiaomi portable charger 20000mah',
    brand: 'Xiaomi',
    price: 480,
    color: 'White',
    category: 'Charger',
    providers: ['Phukienzero', 'Dientuccc']
},
{
    name: 'VSmart Active 1',
    brand: 'VSmart',
    price: 5487,
    color: 'Black',
    category: 'Phone',
    providers: ['Tgdd', 'Ddghn', 'VhStore']
},
{
    name: 'IPhone X',
    brand: 'Apple',
    price: 21490,
    color: 'Gray',
    category: 'Phone',
    providers: ['Tgdd']
},
{
    name: 'Samsung galaxy S10',
    brand: 'Samsung',
    price: 8490,
    color: 'Blue',
    category: 'Phone',
    providers: ['Tgdd']
}
]
   for(let i = 0; i < product.length; i++ ){
  console.log('-------------------------------');
  console.log(`name: ${product[i].name}`);
  console.log(`price: ${product[i].price}`);

  }
//3.2

 for(let i = 0; i< product.length; i++ ){
   console.log(`#${i+1}. ${product[i].name}`);
   console.log(`    Price: ${product[i].price}`);
   
 }
 console.log(`----------------------------------------`);
 let pos = Number(prompt("Enter produce position:"));
 if (pos >= 1 && pos <= product.length){
    for(let x in product[pos - 1]){
         console.log(`${x}: ${product[pos - 1][x]}`);
     }
 } else {
     alert(`position is not found`)
 };
 console.log('------------------------------------------');
//3.3
let category = prompt('Enter your category:');

 for(let i = 0; i < product.length; i++){
    if(category === product[i].category){
        console.log(`name : ${product[i].name}`);
        console.log(`    Price: ${product[i].price}`);

    }
}

//3.4
 product[0].providers = ["phukienzero", "dientuccc"];
 product[1].providers = ["tgdd", "ddghn", "vhStore"];
 product[2].providers = ["tgdd"];
 product[3].providers = ["tgdd"];
 for (let i = 0; i < product.length; i++) {
     console.log(`#${i+1}. ${product[i].name}`);
     console.log(`Price: ${product[i].price}`);
     console.log(`Providers: ${product[i].providers}`);
 }
