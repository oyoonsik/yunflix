
let common = {
    init : function(){
        this.scrollFunction(); // scroll 이벤트
        this.resizeFunction(); // resize 이벤트
        this.webMobileFunction(); // web mobile 구분 이벤트 (width: 780px)
        this.leftRightScrolls(); // 가로 scroll 시 header 이동
        this.pageTopBtn(); // page top button 생성
        this.pageTopMove(); // page top 이동
        this.gnbDim(); // scroll 시 gnb dim 처리
        this.gnbWebOpen(); // gnb web open
        this.gnbWebClose(); // gnb web close
        this.gnbMobileOpen(); // gnb mobile open
        this.gnbMobileClose(); // gnb mobile close
        this.gnbMobileLoginSearchSlide(); // gnb mobile login, search 메뉴 slide
    },

    // scroll 이벤트
    scrollFunction : function () {
        let $this = this;

        $(window).scroll(function () {
            // 가로 scroll 시 header 이동
            $this.leftRightScrolls();

            // page top button 생성
            $this.pageTopBtn();

            // scroll 시 gnb dim 처리
            $this.gnbDim();
        });
    },

    // resize 이벤트
    resizeFunction : function () {
        let $this = this;

        $(window).resize(function () {
            // web mobile 구분 이벤트 (width: 780px)
            $this.webMobileFunction();
        });
    },

    // web mobile 이벤트 (width: 780px)
    webMobileFunction : function () {
        let windowWidth = $(window).outerWidth(true);
        let mobileWidth = 780;

        if (windowWidth <= mobileWidth) {
            // web mobile 구분 class
            $("#wrap").removeClass("web");
            $("#wrap").addClass("mobile");

            // mobile width 로 resize 시 gnb 빠른 닫기
            this.gnbWebCloseResize();
        } else {
            // web mobile 구분 class
            $("#wrap").addClass("web");
            $("#wrap").removeClass("mobile");

            // web width 로 resize 시 gnb 빠른 닫기
            this.gnbMobileCloseResize();
        }
    },

    // 가로 scroll 시 header 이동
    leftRightScrolls : function(){
        let scrollLeft = $(window).scrollLeft();

        $("#header").css("margin-left", -(scrollLeft));
        $(".gnb .category .gnbItemSub").css("margin-left", -(scrollLeft));
        $(".gnb .login .gnbItemSub").css("margin-left", -(scrollLeft));
        $(".gnb .search .gnbItemSub").css("margin-left", -(scrollLeft));
    },

    // page top button 생성
    pageTopBtn : function () {
        let scrollTop = $(window).scrollTop();
        let topBtn = "<button type='button' class='pageTop'><span>TOP</span></button>";
        let fadeSpeed = 200;

        if (scrollTop > 0) {
            if ($(".pageTop").is(".pageTop")) {
                $(".pageTop").fadeIn(fadeSpeed);
            } else {
                $("#wrap").append(topBtn);
            }
        } else {
            $(".pageTop").fadeOut(fadeSpeed);
        }
    },

    // page top 이동
    pageTopMove : function () {
        $(document).on("click", ".pageTop", function () {
            let scrollSpeed = 300;

            $("html, body").stop().animate({
                scrollTop: 0
            }, scrollSpeed);
        });


        let scrollTop = $(window).scrollTop();
        let topBtn = "<button type='button' class='pageTop'><span>TOP</span></button>";
        let fadeSpeed = 200;

        if (scrollTop > 0) {
            if ($(".pageTop").is(".pageTop")) {
                $(".pageTop").fadeIn(fadeSpeed);
            } else {
                $("#wrap").append(topBtn);
            }
        } else {
            $(".pageTop").fadeOut(fadeSpeed);
        }
    },

    // scroll 시 gnb dim 처리
    gnbDim : function () {
        let scrollTop = $(window).scrollTop();

        if (scrollTop > 0) {
            $("#header").addClass("scroll");
        } else {
            $("#header").removeClass("scroll");
        }
    },

    // gnb web open
    gnbWebOpen : function () {
        $(document).on("click", "#wrap.web .gnb .category > button, #wrap.web .gnb .login > button, #wrap.web .gnb .search > button", function(){
            let $this = $(this);
            let $gnbItemSub = $this.closest(".gnbItem").find(".gnbItemSub");
            let slideSpeed = 300;

            $("#header").addClass("gnbOpenWeb");
            $gnbItemSub.stop().slideDown(slideSpeed, function () {
                $(".gnbCloseBtn").show();
            });
        });
    },

    // gnb web close
    gnbWebClose : function () {
        $(document).on("click", "#wrap.web .gnb .gnbCloseBtn", function(){
            let $this = $(this);
            let $gnbItemSub = $this.closest(".gnb").find(".gnbItemSub");
            let slideSpeed = 300;

            $("#header").removeClass("gnbOpenWeb");
            $(".gnbCloseBtn").hide();
            $gnbItemSub.stop().slideUp(slideSpeed, function () {
                $(this).removeAttr("style");
            });
        });
    },

    // mobile width 로 resize 시 gnb 빠른 닫기
    gnbWebCloseResize : function () {
        let gnbOpencheck = $("#header").is(".gnbOpenWeb");

        if (gnbOpencheck) {
            $("#header").removeClass("gnbOpenWeb");
            $(".gnbCloseBtn").hide();
            $(".gnb .gnbItemSub").removeAttr("style");
        }
    },

    // gnb mobile open
    gnbMobileOpen : function () {
        $(document).on("click", "#wrap.mobile .gnb .gnbOpenBtn", function(){
            let slideSpeed = 300;

            $("body").css({"overflow" : "hidden", "touch-action" : "none"});
            $("#header").addClass("gnbOpenMobile");
            $(".pageTop").css({"z-index" : "-1"});
            $(".gnb nav").stop().animate({
                left: "0%"
            }, slideSpeed, function () {
                $(".gnb .gnbCloseBtn").show();
            });
        });
    },

    // gnb mobile close
    gnbMobileClose : function () {
        $(document).on("click", "#wrap.mobile .gnb .gnbCloseBtn", function(){
            let slideSpeed = 300;

            $("body").removeAttr("style");
            $("#header").removeClass("gnbOpenMobile");
            $(".gnb .gnbCloseBtn").hide();
            $(".gnb nav").stop().animate({
                left: "100%"
            }, slideSpeed, function () {
                $(".gnb nav").removeAttr("style");
                $(".gnb .gnbItemSub").removeAttr("style");
                $(".pageTop").css({"z-index" : "20"});
            });
        });
    },

    // web width 로 resize 시 gnb 빠른 닫기
    gnbMobileCloseResize : function () {
        let gnbOpencheck = $("#header").is(".gnbOpenMobile");

        if (gnbOpencheck) {
            $("body").removeAttr("style");
            $("#header").removeClass("gnbOpenMobile");
            $(".gnb .gnbCloseBtn").hide();
            $(".gnb nav").removeAttr("style");
            $(".gnb .gnbItemSub").removeAttr("style");
            $(".pageTop").css({"z-index" : "20"});
        }
    },

    // gnb mobile login, search 메뉴 slide
    gnbMobileLoginSearchSlide : function () {
        $(document).on("click", "#wrap.mobile .gnb .login > button, #wrap.mobile .gnb .search > button", function () {
            let $this = $(this);
            let $gnbItemSub = $this.closest(".gnbItem").find(".gnbItemSub");
            let $gnbItemSubCheck = $gnbItemSub.is(":visible");
            let slideSpeed = 300;

            if ($gnbItemSubCheck) {
                $gnbItemSub.stop().slideUp(slideSpeed);
            } else {
                $gnbItemSub.stop().slideDown(slideSpeed);
            }
        });
    },

}

$(function(){
    common.init();
});