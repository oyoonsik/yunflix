$(function(){
	
	//메인버튼 마우스 오버 이벤트(mouseenter == mouseover) 
	
	$('.mainBtn').on({
		mouseenter:	function(){
			$('.mainBtn').removeClass('addMainBtn');
			$(this).addClass('addMainBtn');
			
			$('.sub').stop().slideUp(100);
			$(this).next().stop().slideDown(200);
		},
		focusin:	function(){
			$('.mainBtn').removeClass('addMainBtn');
			$(this).addClass('addMainBtn');
			
			$('.sub').stop().slideUp(100);
			$(this).next().stop().slideDown(200);			
		}
	});
	
	
	//선택자 - nav>ul 서브메뉴와 메인메뉴 영역(히트영역)을 떠나면(mouseleave)
	//서브메뉴와 메인메뉴 버튼 이벤트 
	//모두 삭제(removeClass()) 또 서브메뉴 슬라이드 업(slideUp())	
	$('nav>ul').on({
		mouseleave:	function(){
			$('.mainBtn').removeClass('addMainBtn');
			$('.sub').stop().slideUp(100);
		}
	});
	//키보드 탭키 접근성  ]
	//아이콘이 돋보기 검색버튼, 또는 우측에 고정된 프리퀀시 링크에 접근하면
	$('.findBtn, .event-2019-summer>a').on({
		focusin:	function(){
			$('.mainBtn').removeClass('addMainBtn');
			$('.sub').stop().slideUp(100);
		}
	});
	
	
}); //nav.js