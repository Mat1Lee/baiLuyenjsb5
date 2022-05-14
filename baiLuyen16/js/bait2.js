const Gia50kw_Dau = 500;
const Gia50kw_Ke = 650;
const Gia100kw_Ke = 850;
const Gia150kw_Ke = 1100;
const Gia_ConLai = 1300;

function tinhTienDien() {
    var SoKW = document.getElementById('sokw').value;
    var Ten = document.getElementById('ten').value;
    

    var thanhTien = tinhTienKw(SoKW, Gia50kw_Dau, Gia50kw_Ke, Gia100kw_Ke,Gia150kw_Ke,Gia_ConLai)
    document.getElementById("xuatTien").innerHTML = "Tên người thanh toán: " + Ten + "<br>" + "Số tiền: "+ thanhTien;
    document.getElementById("divThanhTien").style.display = "block";
}

function tinhTienKw(soKW, Gia50kw_Dau, Gia50kw_Ke, Gia100kw_Ke,Gia150kw_Ke,Gia_ConLai) {
    if (0 < soKW && soKW <= 50) {
        // console.log("đoạn 1");
        return soKW * Gia50kw_Dau;
    } else if (50 < soKW && soKW <= 100) {
        
        return Gia50kw_Dau*50 + (soKW - 50) * Gia50kw_Ke;
    }
     else if (100 < soKW && soKW <= 200) {
        
        return Gia50kw_Dau*50 + 50 * Gia50kw_Ke + (soKW-100)*Gia100kw_Ke;
    } 
     else if (200 < soKW && soKW <= 350) {
        
        return Gia50kw_Dau*50 + 50 * Gia50kw_Ke + 100*Gia100kw_Ke + (soKW-200)*Gia150kw_Ke;
    } 
     else if (soKW > 350) {
        // console.log("đoạn 3");
        return Gia50kw_Dau*50 + 50 * Gia50kw_Ke + 100*Gia100kw_Ke + 150*Gia150kw_Ke + (soKW-350)*Gia_ConLai;
    } else {
        // console.log("số KM không hợp lệ");
        return 0;
    }

 }