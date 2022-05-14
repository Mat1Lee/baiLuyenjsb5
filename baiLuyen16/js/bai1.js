function tinhDiemTuyenSinh() {
    var diemchuan = document.getElementById("diemchuan").value;
    var khuVuc = document.getElementById("khuVuc").value;
    var doiTuong = document.getElementById("doiTuong").value;
    var diemmon1 = document.getElementById("diemmon1").value;
    var diemmon2 = document.getElementById("diemmon2").value;
    var diemmon3 = document.getElementById("diemmon3").value;
    var diem = Number(diemmon1) + Number(diemmon2) + Number(diemmon3);

    if ((diemmon1 <= 0 || diemmon2 <= 0 || diemmon3 <= 0) || (diemmon1 > 10 || diemmon2 > 10  || diemmon3 > 10)) {
        document.getElementById("txtResult").innerHTML = "Nhập điểm sai"
    } else {
        if (diemchuan <= 0) {
            document.getElementById("txtResult").innerHTML = "Điểm chuẩn không hợp lệ"
        } else {
            switch (khuVuc) {
                case "2":
                    break;
                case "3":
                    diem += 2;
                    break;
                case "4":
                    diem += 1;
                    break;
                case "5":
                    diem += 0.5;
                    break;
                default:
                    document.getElementById("txtResult").innerHTML = "Vui lòng chọn khu vực"
                    return;
            }
            switch (doiTuong) {
                case "2":
                    break;
                case "3":
                    diem += 2.5;
                    break;
                case "4":
                    diem += 1.5;
                    break;
                case "5":
                    diem += 1;
                    break;
                default:
                    document.getElementById("txtResult").innerHTML = "Vui lòng chọn đối tượng"
                    return;
            }
            if (diem >= diemchuan) {
                document.getElementById("txtResult").innerHTML = "Bạn trúng tuyển với tổng điểm : " + diem;
            } else {
                document.getElementById("txtResult").innerHTML = "Bạn không trúng tuyển vào trường, tổng điểm đạt được: " + diem;
            }
        }
    }
}
