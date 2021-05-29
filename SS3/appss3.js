// Chữa bài 1.5
//Chú ý prompt giá trị là string
//Phép cộng string khác cộng 2 số
// let n = Number(prompt('Nhap n :'));
// let c = Number(prompt('Nhap c :'));
// let s = Number(prompt('Nhap s :'));
// for ( i = n ; i < c ; i = i + s){
//     console.log(i);

// }

// //Chữa bài 5 => Đăng nhập
// let username = (' ');
// let password = (' ');

// while(username !== 'mindx' || password !== 'codethechange'){
    
//     username = prompt('Nhap username: ');
//     password = prompt('Nhap password: ');
//     if(username !== 'mindx'){
//         alert('Username sai');
//     }else if(password !== 'codethechange'){
//         alert('Password sai');
//     }else{
//         alert('Dang nhap thanh cong');
//     }
// }

// //C2
// let username = (' ');
// let password = (' ');

// while(true){
    
//     username = prompt('Nhap username: ');
//     password = prompt('Nhap password: ');
//     if(username !== 'mindx'){
//         alert('Username sai');
//     }else if(password !== 'codethechange'){
//         alert('Password sai');
//     }else{
//         alert('Dang nhap thanh cong');
//     }
//     break;
// }

// console.log('Ngoai vong lap')

//Scope (Phạm vi của biến)
// let n = 10;
// //let n = 20
// {
//     let n = 30;
//     console.log('1', n);
// }
// if( n > 2){
// //console.log('1' , n);

// let n =20;
// console.log('2', n);

// }
// for(let i = 0; i < 5; i++){
//     console.log(i);
// }
// console.log('Ngoai block for', i);

// Init mang
// let menu = [ "thit", "ca", "trung", "rau"];
// console.log(menu);
// //Khai bao mang rong
// let emptyMenu;
// emptyMenu =[""];
// console.log(emptyMenu);
// //Do dai cua mang
// let lengthOfMenu = menu.length;
// console.log('Do dai cua mang', menu.length);

// let moviesFav =["Titanic", "Ice Age", "Pokemon", "Naruto", "Doraemon"];
// console.log(moviesFav, moviesFav.length);
// let lengthofmoviesFav = moviesFav.length;
// console.log('Do dai cua mang', moviesFav.length);

// //Creat - Thêm phần tử vào mảng
// moviesFav.push("God Father");
// moviesFav.push("Home");
// console.log(moviesFav, moviesFav.length);

// // //Nhập thêm phần tử vào mảng từ người dùng
// // moviesFav.push(prompt('Them bo phim yeu thich: '));
// // console.log(moviesFav);
//  let newMov = prompt('Them bo phim yeu thich: ');
//  moviesFav.push(newMov);
//  console.log(moviesFav);



// //Read - Đọc mảng
// let firstMovie = moviesFav[0];
// let secondMovie = moviesFav[1];
// let thirdMovie = moviesFav[2];
// console.log(firstMovie, secondMovie, thirdMovie); 

// let i = prompt('So thu tu bo phim: ');
// let stt = moviesFav[i];
// console.log(stt);

//Đọc hết phần tử mảng
// let allMovie = moviesFav;
// for(let i = 0 ; i < moviesFav.length; i++){
//     console.log(allMovie[i]);
// }
// console.log(moviesFav);

//Cap nhat phan tu trong mang
// moviesFav[0] ="Bo gia";
// console.log(moviesFav);

// let updMov = prompt("Thay doi ten phim: ");
// moviesFav[0] = updMov;
// console.log(moviesFav);

// let numMov =prompt('So thu tu phim can doi:');
// let nameMov =prompt('Ten can doi:');
// moviesFav[numMov] = nameMov;
// console.log(moviesFav);

//Delete - Xoa phan tu trong mang
// moviesFav.splice(0 , 1);
// console.log(moviesFav);




// let delMov = prompt('Vi tri ten phim can xoa');
// let numdelMOv =prompt('So phim can xoa:');
// moviesFav.splice(delMov, numdelMOv);
// console.log(moviesFav);

// //CRUD
function votableCheck(isAuthenticated, role){
    var result;
    if(isAuthenticated = true && role == 'member'){
        result = true;
    }if(isAuthenticated = true && role == 'admin'){
        result = true;
    }if(isAuthenticated = true && role == ''){
        result = false;
    }else{
        result = false;
    }return result;
}