function Timkiem(arr,x){
    for (var i=0;i<arr.length;i++){
        if (arr[i]==x) return true;
    }
    return false;
}
function Vietlot(){
    var lucky=[];
    do {
        var n=parseInt(Math.random()*46);
        if (!Timkiem(lucky,n)){
            lucky.push(n);
        }
    }while (lucky.length<6);
    console.log(lucky);
    var vietlot=[];
    for (var i=0;i<5;i++){
        vietlot[i]=[];
        do {
            var n=prompt("Nhập một số trong khoảng từ 0-45: ");
            n=parseInt(n);
            if (!Timkiem(vietlot[i],n)){
                vietlot[i].push(n);
            }
        }while (vietlot[i].length<6);
    }
    var count =0;
    for (var i=0;i<vietlot.length;i++) {
        if (Sosanh2Arr(lucky, vietlot[i])) {
            alert("Xin chúc mừng bạn đã trở thành tỷ phú");
            count++;
            break;
        }
    }
    if (count==0){
        alert("Chúc bạn may mắn lần sau");
    }
}
function Sosanh2Arr(lk,vl){
    var count=0;
    for (var i=0;i<lk.length;i++){
        if (Timkiem(vl,lk[i])){
            count++;
        }
    }
    if (count==6) return true;
    return false;
}
Vietlot();
