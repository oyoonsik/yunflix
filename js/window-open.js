// 새 창 열기 함수
function openwindow(opage, x, y) { 
    farwindow = window.open('','Links','width=' + x + ', height=' + y + ', toolbar=0, scrollbars=0, resizable=no'); 
    if (farwindow != null) { 
        if (farwindow.opener == null) { 
            farwindow.opener = self; 
        } 
        farwindow.location.href = opage; 
    } 
}