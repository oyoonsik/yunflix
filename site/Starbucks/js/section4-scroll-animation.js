$(function(){
	var t = [0,0,0,0,0,0,0,0];  //토글변수로 지정함 // 배열처리로 8개방을지정
	//var t = t=0,t=1,t=2 위와같다
	var scrollTop = 0;
	var sec1Top = $('#section1').offset().top; // 맨처음부 섹션1 탑값까지 간격(높이값) //2번에 도달하면 4번으로
	var sec2Top = $('#section2').offset().top-300; // 맨처음부 섹션2 탑값까지 간격(높이값)
	var sec3Top = $('#section3').offset().top; // 맨처음부 섹션3 탑값까지 간격(높이값)
	var sec4Top = $('#section4').offset().top; // 맨처음부 섹션4 탑값까지 간격(높이값)
	var sec5Top = $('#section5').offset().top; // 맨처음부 섹션5 탑값까지 간격(높이값)
	var sec6Top = $('#section6').offset().top; // 맨처음부 섹션6 탑값까지 간격(높이값)
	var sec7Top = $('#section7').offset().top; // 맨처음부 섹션7 탑값까지 간격(높이값)
		
		
		
    // $('section5-star-r-right').stop().animate({opacity:0},1000);	
	 $('.section4-ani1').stop().animate({left:'-100%'},1000);
     $('.section4-ani2').stop().animate({left:'100%'},1000);
		
	// $('.section6-left-wrap>li').eq(0).stop().animate({left:0,opacity:1},1000);
	// $('.section6-left-wrap>li').eq(1).stop().animate({left:0,opacity:1},1100);
	// $('.section6-left-wrap>li').eq(2).stop().animate({opacity:1},1000);			
	

	
	//스크롤이벤트 스크롤이 발생 할때만 실행
	$(window).scroll(function(){
		//crollTop = $(window).scrollTop(); //현재 위치를 수치로 표현
		
		ani1Fn();
		ani2Fn();
		ani3Fn();
		ani4Fn();
	});
	
		
	//애니메이션 두가지 addClass();  animate();
	//섹션 4번애니메이션 애니원
	function ani1Fn(){
		
		if($(window).scrollTop() >= sec2Top){	
			if(t[0]==0){ //애니메이션을 1회만 실행 버블링 막음
				$('.section4-ani1').stop().animate({left:'50%'},2000,'easeOutExpo');
				$('.section4-ani2').stop().animate({left:'50%'},2000,'easeOutExpo');
				t[0]=1;
		   }
		}	
		else{
			if(t[0]==1){
			   $('.section4-ani1').stop().animate({left:'-100%'},1000);
			   $('.section4-ani2').stop().animate({left:'100%'},1000);
			   t[0]=0;
			}
		}	
		
	}
	
	//섹션 5번 애니메이션 애니투
	function ani2Fn(){
		if($(window).scrollTop() >= sec3Top-300){
			$('.section5-star-r-right').addClass('addSec5Ani');
			// if(t[1]==0) {//티는 두번째방은 0하고 같다면 //
			// $('.section5-star-r-right').stop().animate({opacity:1},500);
			// t[1]=1;
			// }
		}
		else{
			$('.section5-star-r-right').removeClass('addSec5Ani');
			// if(t[1]==1){
			// $('.section5-star-r-right').stop().animate({opacity:0},500);
			// t[1]=0;
			// }
		}
	
	}
	
	
	//섹션 6번 애니메이션 애니투
	function ani3Fn(){
		if($(window).scrollTop() >= sec5Top-500){   //!!!스크롤탑값 찾는거 !!
			$('.section6-left-wrap>li').addClass('addSec6Ani');
			// if(t[2]==0) {
			// $('.section6-left-wrap>li').eq(0).stop().animate({left:0,opacity:1},1000);
			// $('.section6-left-wrap>li').eq(1).stop().delay(30).animate({left:0,opacity:1},1000);
			// $('.section6-left-wrap>li').eq(2).stop().animate({opacity:1},1500);
			// t[2]=1;
			// }
		}
		else{
			$('.section6-left-wrap>li').removeClass('addSec6Ani');
			// if(t[2]==1){
			// $('.section6-left-wrap>li').eq(0).stop().animate({left:-1000,opacity:0},1100);
			// $('.section6-left-wrap>li').eq(1).stop().animate({left:-1000,opacity:0},1000);
			// $('.section6-left-wrap>li').eq(2).stop().animate({opacity:0},500);
			// t[2]=0;
			// }
		}
	
	}
	
	
	
	
		//섹션 8번 애니메이션 애니투
	function ani4Fn(){ //에드클래스를 쓸경우 토글이 필요없다.
		if($(window).scrollTop() >= sec7Top-300 ){
			$('.section8-element-3>li').addClass('addSec8Ani');
		}
		else{
			$('.section8-element-3>li').removeClass('addSec8Ani');
			
		}
	

	}
	
	
	
	
	//섹션 7번 
	$('.section7-reserve_medal').on({
		mouseenter: function(){
			$('.section7-reserve_medal>ul>li').addClass('addSec7Ani');
		},
		mouseleave: function(){
			$('.section7-reserve_medal>ul>li').removeClass('addSec7Ani');
		}
		
	});
	
	
	
	
	
	
	
	
	
	
	

}); //section4-scroll-animation.js