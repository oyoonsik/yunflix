<? include("./include/header.php");
<hader id="header" class="scroll" style="margin-left: 0px;">
    <div class="headerIn">
        <a href="javascript:history.back();" class="pageBack"><span>이전 페이지</span></a>
        <h1 class="logoText"><a href="/videoMain/selectMainList" style="text-decoration: none;"></a></h1>
        <div class="gnb">
            <button type="button" class="gnbOpenBtn"><span>메뉴 열기</span></button>
            <nav>
                <div class="navIn">
                    <div class="gnbItem category">
                        <button type="button">전체카테고리</button>
                        <div class="gnbItemSub" style="margin-left: 0px;">
                            <div class="gnbItemSubIn">
                                <div class="gnbItemTitle">전체카테고리</div>
                                <ul class="gnbItemSubBox">
                                    <li><a href="/schMain/sub01.html" style="text-decoration: none;"><span>오윤식은?</span></a></li>
                                    <li><a href="/videoMain/selectVideoList?videoCd=policy" style="text-decoration: none;"><span>?</span></a></li>
                                    <li><a href="/videoMain/selectVideoList?videoCd=sch" style="text-decoration: none;"><span>?</span></a></li>
                                </ul>
                                <ul class="gnbItemSubBox">
                                    <li><a href="/videoMain/selectVideoVideoList?videoCd=video" style="text-decoration: none;"><span>영상</span></a></li>
                                    <li><a href="/liveMain/selectLiveDetail?replySort=new" style="text-decoration: none;"><span class="live">라이브 보기</span></a></li>
                                    <li><a href="/videoMain/selectVideoList?videoCd=commu" style="text-decoration: none;"><span>커뮤니티</span></a></li>
                                </ul>
                                <ul class="gnbItemSubBox">
                                    <li><a href="https://www.marketahn.co.kr/" target="_blank" style="text-decoration: none;"><span>ㅁㄴㄹㅇ</span></a></li>
                                    <li><a href="https://www.preparedfuture.kr" target="_blank" style="text-decoration: none;"><span> 입장</span></a></li>
                                </ul>
                                <ul class="gnbItemSubBox">
                                    <li><a href="https://docs.google.com/forms/d/1JIu5fu9InbFuDbn0Y1X4VsV0Z3qNxmr8qLBsTR0E1Mg/edit" target="_blank" style="text-decoration: none;"><span>테스트</span></a></li>
                                    <li><a href="https://peopleparty.kr" target="_blank" style="text-decoration: none;"><span class="peoplepartyHomepage">홈페이지</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="gnbItem">
                        <a href="/schMain/sub01.html" style="text-decoration: none;">오윤식은?</a>
                    </div>
                    <div class="gnbItem">
                        <a href="/videoMain/selectVideoList?videoCd=policy" style="text-decoration: none;">오윤식의 작업물</a>
                    </div>
                    <div class="gnbItem">
                        <a href="/videoMain/selectVideoList?videoCd=sch" style="text-decoration: none;">디자인</a>
                    </div>
                    <div class="gnbItem login">
                        <!-- login 이전 -->
                        <button type="button">
                            <span class="loginText">로그인</span>
                        </button>
                        <div class="gnbItemSub" style="margin-left: 0px;">
                            <div class="gnbItemSubIn">
                                <div class="gnbItemTitle">
                                  로그인
                                </div>
                                <div class="gnbItemSns">
                                    <a href="javascript:kakaoLogin();" class="kakao"><span>카카오톡 간편 로그인</span></a>
                                    <a href="javascript:fnNaverGo();" class="naver"><span>네이버 간편 로그인</span></a>
                                    <!-- <a href="/snsLogin/logout" class="google"><span>구글 간편 로그인</span></a>
                                    <a href="#" class="facebook"><span>페이스북 간편 로그인</span></a>
                                    <a href="#" class="twitch"><span>트위치 간편 로그인</span></a> -->
                                    <div id="naverIdLogin" style="display: none;"><a id="naverIdLogin_loginButton" href="#"><img src="https://static.nid.naver.com/oauth/small_g_in.PNG?version=js-2.0.0" height="60"></a></div>
                                </div>
                                <div class="gnbItemContext">
                                    불법/악성 콘텐츠를 방지하기 위해 실명을 확인합니다.<br>
                                    SNS로 로그인하여 간편하게 이용하실 수 있습니다.<br>
                                    원하시는 SNS를 선택하시고 로그인 해주세요.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="gnbItem search">
                        <button type="button"><span>검색하기</span></button>
                        <div class="gnbItemSub" style="margin-left: 0px;">
                            <div class="gnbItemSubIn">
                                <div class="searchTitleArea">검색하가</div>
                                <div class="searchInputArea">
                                    <span class="searchText">검색어를 입력하세요</span>
                                    <span class="searchInput">
                                        <input type="text" id="srchText">
                                        <button type="button" onclick="fnSrchData();"><span>검색</span></button>
                                    </span>
                                </div>
                                <div class="swiperDataArea" id="srchData" style="display: none;">
                                  <div class="swiper swiper-initialized swiper-horizontal swiper-pointer-events">
                                      <div class="swiper-wrapper" id="srchResult" aria-live="polite" style="transition-duration: 0ms;">
                                      </div>
                                      <div class="swiper-button-next" tabindex="0" role="button" aria-label="Next slide" aria-controls="srchResult" aria-disabled="false"></div>
                                        <div class="swiper-button-prev" tabindex="0" role="button" aria-label="Previous slide" aria-controls="srchResult" aria-disabled="false"></div>
                                    <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                                    <script>
                                        var swiper = new Swiper(".swiperDataArea .swiper", {
                                            breakpoints: {
                                                781: {
                                                    slidesPerView: 5,
                                                    spaceBetween: 18
                                                },
                                                1: {
                                                    slidesPerView: 3,
                                                    spaceBetween: 10
                                                }
                                            },
                                            navigation: {
                                                nextEl: ".swiper-button-next",
                                                prevEl: ".swiper-button-prev",
                                            },
                                        });
                                    </script>
                                </div>
                                <div class="searchNodataArea" id="srchNoData" style="display: none;">
                                    <span>입력하신 검색어 “<strong id="srchNoText"></strong>” (와)과</span>
                                    <span>일치하는 결과가 없습니다.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <button type="button" class="gnbCloseBtn"><span>메뉴 닫기</span></button>
        </div>
    </div>
</hader>    
?>
