// GNB 모바일 메뉴 기능 통합 (jQuery)
(function ($) {
  const GNB = {
    // 셀렉터/옵션
    SEL: {
      wrapMobile:   "#wrap.mobile",
      header:       "#header",
      gnb:          ".gnb",
      gnbNav:       ".gnb nav",
      openBtn:      ".gnb .gnbOpenBtn",
      closeBtn:     ".gnb .gnbCloseBtn",
      subWrap:      ".gnb .gnbItemSub",
      subLink:      ".gnb .gnbItemSub a",
      pageTop:      ".pageTop",
      dim:          ".gnb .gnbDim"       // 선택: 오버레이가 있다면 사용
    },
    SPEED: 300,

    // 공통: 서브메뉴 전부 닫기/초기화
    resetSubmenus: function () {
      const { subWrap } = this.SEL;
      // block 등 인라인 스타일 제거 + 부드럽게 닫힘
      $(subWrap).stop(true, true).slideUp(200, function () {
        $(this).removeAttr("style");
      });
    },

    // 메뉴 열기
    gnbMobileOpen: function () {
      const { wrapMobile, gnb, openBtn, gnbNav, header, pageTop } = this.SEL;
      $(document).on("click", `${wrapMobile} ${gnb} ${openBtn}`, () => {
        $("body").css({ overflow: "hidden", "touch-action": "none" });
        $(header).addClass("gnbOpenMobile");
        $(pageTop).css({ "z-index": "-1" });
        // 필요 시Dim 표시
        // $(this.SEL.dim).fadeIn(150);

        $(gnbNav).stop(true, true).animate({ left: "0%" }, this.SPEED, () => {
          $(this.SEL.closeBtn).show();
        });
      });
    },

    // 메뉴 닫기 (공통 함수)
    closeMenu: function (callback) {
      const { gnbNav, header, pageTop, closeBtn } = this.SEL;

      $("body").removeAttr("style");
      $(header).removeClass("gnbOpenMobile");
      $(closeBtn).hide();

      // 서브메뉴도 함께 닫기/초기화
      this.resetSubmenus();

      $(gnbNav).stop(true, true).animate({ left: "100%" }, this.SPEED, () => {
        $(gnbNav).removeAttr("style");
        $(pageTop).css({ "z-index": "20" });
        // $(this.SEL.dim).hide();
        if (typeof callback === "function") callback();
      });
    },

    // 닫기 버튼
    gnbMobileClose: function () {
      const { wrapMobile, gnb, closeBtn } = this.SEL;
      $(document).on("click", `${wrapMobile} ${gnb} ${closeBtn}`, () => {
        this.closeMenu();
      });
    },

    // (선택) 딤 클릭으로 닫기
    bindDimClose: function () {
      const { dim } = this.SEL;
      $(document).on("click", dim, () => this.closeMenu());
    },

    // (선택) ESC로 닫기
    bindEscClose: function () {
      $(document).on("keyup", (e) => {
        if (e.key === "Escape") this.closeMenu();
      });
    },

    // 메뉴 안 링크 클릭: 서브메뉴도 닫고 → 메뉴 닫은 뒤 스크롤 이동
    gnbMenuLinkScroll: function () {
      const { subLink } = this.SEL;

      $(document).on("click", subLink, (e) => {
        e.preventDefault();

        const $a = $(e.currentTarget);
        const href = $a.attr("href") || "";
        const targetId = href.replace("#", "");
        const $target = targetId ? $("#" + targetId) : $();

        // ✅ 클릭 즉시 서브메뉴 정리(열려 있던 block/slide 상태 종료)
        this.resetSubmenus();

        // 내부 앵커면 스크롤, 아니면 메뉴만 닫기
        if ($target.length) {
          this.closeMenu(() => {
            $("html, body").animate(
              { scrollTop: $target.offset().top },
              500
            );
          });
        } else {
          this.closeMenu();
        }
      });
    },

    // 초기화
    init: function () {
      this.gnbMobileOpen();
      this.gnbMobileClose();
      this.gnbMenuLinkScroll();
      this.bindEscClose();  // 필요 없으면 주석
      // this.bindDimClose(); // 딤 사용할 때만
    }
  };

  // 실행
  $(function () {
    GNB.init();
    window.GNB = GNB; // 디버깅/외부 호출용(선택)
  });
})(jQuery);
