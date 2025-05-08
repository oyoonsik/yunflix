// GNB 모바일 메뉴 기능 통합
const GNB = {
    // 메뉴 열기
    gnbMobileOpen: function () {
        $(document).on("click", "#wrap.mobile .gnb .gnbOpenBtn", function () {
            let slideSpeed = 300;

            $("body").css({ "overflow": "hidden", "touch-action": "none" });
            $("#header").addClass("gnbOpenMobile");
            $(".pageTop").css({ "z-index": "-1" });
            $(".gnb nav").stop().animate({
                left: "0%"
            }, slideSpeed, function () {
                $(".gnb .gnbCloseBtn").show();
            });
        });
    },

    // 메뉴 닫기 (공통 함수화)
    closeMenu: function (callback) {
        let slideSpeed = 300;

        $("body").removeAttr("style");
        $("#header").removeClass("gnbOpenMobile");
        $(".gnb .gnbCloseBtn").hide();
        $(".gnb nav").stop().animate({
            left: "100%"
        }, slideSpeed, function () {
            $(".gnb nav").removeAttr("style");
            $(".gnb .gnbItemSub").removeAttr("style");
            $(".pageTop").css({ "z-index": "20" });

            // 닫은 후 콜백 실행 (스크롤 등)
            if (typeof callback === 'function') callback();
        });
    },

    // 메뉴 닫기 버튼 클릭
    gnbMobileClose: function () {
        $(document).on("click", "#wrap.mobile .gnb .gnbCloseBtn", function () {
            GNB.closeMenu();
        });
    },

    // 메뉴 안 링크 클릭 시: 메뉴 닫고 → 해당 위치로 스크롤
    gnbMenuLinkScroll: function () {
        $(document).on("click", ".gnbItemSub a", function (e) {
            e.preventDefault();

            const targetId = $(this).attr("href").replace("#", "");
            const target = $("#" + targetId);

            if (target.length) {
                GNB.closeMenu(function () {
                    // 메뉴 닫힌 후 스크롤 이동
                    $("html, body").animate({
                        scrollTop: target.offset().top
                    }, 500);
                });
            }
        });
    },

    // 초기화
    init: function () {
        this.gnbMobileOpen();
        this.gnbMobileClose();
        this.gnbMenuLinkScroll();
    }
};

// 실행
$(function () {
    GNB.init();
});