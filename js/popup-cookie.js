// 팝업 관리 및 쿠키 관련 스크립트
$(document).ready(function() {
    if ("Y" == "Y" && getCookie("popupDayClose") != "done") {
        $("#ahnPopupWrap").show();
    }
});

$(document).on("click", "#popupDayCloseBtn", function() {
    setCookie("popupDayClose", "done", 1);
});

// 쿠키 설정 함수
function setCookie(cookieName, cookieValue, expiredays) {
    var cookieText = escape(cookieName) + '=' + escape(cookieValue);
    var todayDate = new Date();

    todayDate = new Date(parseInt(todayDate.getTime() / 86400000) * 86400000 + 54000000);

    if (todayDate > new Date()) {
        expiredays = expiredays - 1;
    }

    todayDate.setDate(todayDate.getDate() + expiredays);
    cookieText += "; expires=" + todayDate.toGMTString();

    document.cookie = cookieText;
}

// 쿠키 가져오기 함수
function getCookie(cookieName) {
    var cookieValue = null;

    if (document.cookie) {
        var array = document.cookie.split((escape(cookieName) + '='));

        if (array.length >= 2) {
            var arraySub = array[1].split(';');
            cookieValue = unescape(arraySub[0]);
        }
    }

    return cookieValue;
}