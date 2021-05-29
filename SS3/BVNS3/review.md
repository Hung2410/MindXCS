# Mảng
1.Tại sao cần mảng
-Cần quản lý danh sách các phần tử cùng ý nghĩa
-Chỉ cần 1 biến kiểu dữ liệu mảng (Array)

2.Khởi tạo (Init)
let arr = []
=> arr.length = 0
let movies = ['End Game', 'Superman', 'Batman' ]

//CRUD
3.Creat
Tạo phần tử mảng trong mảng
arr.push => Thêm vào cuối
Thêm vào vị trí bất kì thì dùng cú pháp nào ?

4.Read
=> Mảng không đổi
Truy cập qua chỉ số (index) => đánh số từ 0
Cú pháp : lấy Superman => movies[1] or movies['1']

5.Update
=> Mảng thay đổi
movies[1]  = 'Người nhện' let x = 1; movies[x] = 'Người nhện'

6.Delete
=>Mảng thay đổi
movies.splice(arg1, arg2)
arg1 : Vị trí bắt đầu xóa
arg2 : Sô phần tử sẽ xóa => movies.splice(1, 2) =>movies['End Game']


