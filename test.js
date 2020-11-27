// object
var hocSinh = {
    ho : "Nguyen",
    hoDem : "Thien",
    ten : "Bao",
    tuoi : 20,
    gioiTinh : "Nam"
};
console.log(hocSinh.ho + " " + hocSinh.hoDem + " " + hocSinh.ten + ";" + " giới tính: " + hocSinh.gioiTinh +";"+ " tuổi: " + hocSinh.tuoi);

// function
// cách 1 dùng return
function phepCong(a,b) {
    return a + b;
}
var x = phepCong(4,3);
console.log("x = "+ x);
// cách 2
function tinhToan(a,b){
    var tong = a + b;
    console.log("Tổng của 2 số là: "+ tong);
    var hieu = a - b;
    console.log("Hiệu của 2 số là: "+ hieu);
    var nhan = a * b;
    console.log("Tích của 2 số là: "+ nhan);
    var chia = a / b;
    console.log("Thương của 2 số là: "+ chia);
    var chiaLayDu = a / b;
    console.log("Chia lấy dư của 2 số là: "+ chiaLayDu);
}
tinhToan(3,5);

// String và String methonds
var A = "Nguyễn Thiên Bảo - Nghệ An \"Thanh Chương, Nghệ An\"";
console.log("In chuỗi: "+A);
// độ dài chuỗi
var sln = A.length;
console.log("Độ dài chuỗi: "+sln);
// indexOf() là phương thức trả về vị trí đầu tiên xuất hiện của 1 văn bản trong chuỗi
var ind = A.indexOf("Nghệ");
console.log("Vị trí đầu tiên trong VB trong chuỗi: "+ind);
// lastIndexOf() là phương thức trả về vị trí cuối cùng xuất hiện 1 văn bản trong chuỗi
var last = A.lastIndexOf("Nghệ");
console.log("Vị trí xuất hiện cuối cùng: "+last);
//  indexOf() và lastIndexOf() trả về -1 nếu không tìm thấy văn bản.
var s = A.lastIndexOf("Hello");
console.log("Vị trí xuất hiện cuối cùng: "+s);
// slice : 
var B = "Bao, Bang, Dung";
var res = B.slice(4,9);
console.log("Phần chuỗi được trích xuất: " +res);
// Replace thay thế 1 giá trị nhất định với 1 giá trị trong chuỗi
var txt = B.replace("Bao","Lai");
console.log("sau khi thay thế: " +txt);
// topUppercase() chuyển chuỗi thành chữ hoa
var upca = B.toUpperCase();
console.log("Chuyển đổi thành chữ hoa:" +upca);
// concat() nối chuỗi
var D = "Đẹp zai!!"
var C = B.concat(" ", D);
console.log("nối chuỗi: " +C);
// trim() loại bỏ khoảng trắng
var E = "            XIN CHAO           ";
var F = E.trim();
alert(E.trim());
console.log(F);

// Number & Number methonds
var x = 5;
var y = 8;
// toString() trả về 1 số như 1 chuỗi
console.log(x.toString() + "\n" + (5).toString()+ "\n" + (2+3).toString());
// valueOf() trả về 1 số dưới dạng 1 số
console.log(x.valueOf() + "\n" + (5).valueOf()+ "\n" + (2+3).valueOf());

// array & JavaScript Array Methods
var cars = new Array("Ánh", "Hiền", "Thương");
console.log(cars);
console.log("Lấy từng phần từ trong mảng: "+cars[0]);
console.log("Lấy từng phần từ trong mảng: "+cars[1]);
console.log("Lấy từng phần từ trong mảng: "+cars[2]);
console.log("Số phần tử mảng:" + cars.length);
// push Thêm pt vào mảng
cars.push("Hải");
console.log(cars);
// for
var i;
var leng = cars.length;
var text = "";
for (i=0; i<leng; i++)
{
    text += " - "+cars[i]+"\n";
}

console.log(text);

//  pop() loại bỏ yếu tố cuối cùng từ 1 mảng
console.log("pt cuối: " +cars.pop());
// shift() loại bỏ phần tử đầu tiên
console.log("pt đầu: " + cars.shift());
// unshift() thêm 1 yếu tố mới 
cars.unshift("Bảo");
console.log("thêm vào đầu: " +cars);
// Thay đổi
cars[0] = "AB";
console.log(cars);
// xoá pt
delete cars[0];
console.log("Xoá pt: ")
console.log(cars);
//sắp xếp 
var points = new Array (5,20,1,6,8,9);
console.log("Cho mảng: ")
console.log(points);
//tăng và tìm giá trị min
points.sort(function(a,b){return a- b});
console.log("sắp xếp tăng: "+points);
console.log("giá trị Min: "+points[0]);

//giảm và giá trị Max
points.sort(function(a,b){return b- a});
console.log("sắp xếp giảm: "+points)
console.log("giá trị Max: "+points[0]);
//tìm max, min cách khác
console.log("max: "+ arrayMax(points));
function arrayMax(arr){
    var leng = arr.length;
    var max = -Infinity;
    while (leng--){
        if(arr[leng]>max){
            max = arr[leng];
        }
    }
    return max;
}

