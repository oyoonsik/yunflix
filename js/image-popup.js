// 이미지 팝업 표시 함수
function OnloadImg(url) {
    var img = new Image();
    
    img.onload = function() {
        var img_width = img.width;
        var win_width = img.width + 25;
        var height = img.height + 30;
        var OpenWindow = window.open('', '_blank', 'width=' + img_width + ', height=' + height + ', menubars=no, scrollbars=auto');
        OpenWindow.document.write("<style>body{margin:0px;}</style><img src='" + url + "' width='" + win_width + "'>");

        // Close the window when clicked
        OpenWindow.document.addEventListener('click', function() {
            OpenWindow.close();
        });
    };

    img.src = url;
}