$(function(){
	var s=[0,0,0], a=[], b=[], setId=0, t=0, t2=0;
		s[0]=1;
		navBtFn(0);
			
		autoPlay('click',t2);	
	
	function autoPlay(z,y){
		if(z=='click' || z=='mouseleave' ){
			// console.log(y,t,z);
			t2=y;
			if(t2==0){
				setId = setInterval(nextSlidIf, 4000);	
				t2=1;
			}
		}
		
	}
	
	
	//네비버튼 클릭이벤트 //each는 번호가져오기
	$('.navBtn').each(function(idx){
		$(this).on({
			click: function(){
				for(i=0; i<=2; i++){
					if(s[i]==1){
						if(i<idx){ //다음슬라이드
							if( i==0 && idx ==2){ //0~2 맨끝까지 이동
								moveSlide(idx);
							}
							else if(i==0 && idx==1){ //0~1 다음이동
								slide(idx);
							}
							else if(i==1 && idx==2){ //1~2 다음이동
								slide(idx);
							}
						}
						else if(i>idx){ //이전슬라이드
							if(i==2 && idx==0){ //2 ~ 0 맨처음까지 이동
								moveprevSlide(idx);
							}
							else if(i==2 && idx==1){ //2~1 이전이동
								prevSlide(idx);
							}
							else if(i==1 && idx==0){ //1~0이동
								prevSlide(idx);
							}
						}
					}
				}
			}
		});
	});
	
	

	//처음에서 끝으로 이동하는 함수
	function moveSlide(z){
		s=[0,0,0];
		s[z]=1;
		navBtFn(z);
		
		
		$('.slide').eq(0).animate({left:  '0%'},0).animate({left:'-200%'},1000,function(){
			$(this).removeClass('addOpacity');
		});
		$('.slide').eq(1).animate({left:'100%'},0).animate({left:'-100%'},1000);
		$('.slide').eq(2).animate({left:'200%'},0).animate({left:   '0%'},1000,function(){
			$(this).addClass('addOpacity');
			$('.slide').eq(0).animate({left:  '100%'},0);
		});
		
		
	}
	
	
	
	
	
	//끝에서 처음으로
	function moveprevSlide(z){
		s=[0,0,0];
		s[z]=1;
		navBtFn(z);
		
		
		$('.slide').eq(2).animate({left:  '0%'},0).animate({left:'200%'},1000,function(){ //콜백함수활용
			$(this).removeClass('addOpacity');
		});
		$('.slide').eq(1).animate({left:'-100%'},0).animate({left:'100%'},1000);
		$('.slide').eq(0).animate({left:'-200%'},0).animate({left:  '0%'},1000,function(){
			$(this).addClass('addOpacity');
			$('.slide').eq(2).animate({left:'-100%'},0);
		});
		
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//플레이버튼, 네비버튼, Next버튼,Prev버튼 마우스 오버시 일시정지
	//그리고 버튼위에서 마우스가 떠나면 다시 플레이
	$('.slide-control-wrap, .nextBtn, .prevBtn').on({
		mouseenter:	function(){
			clearInterval(setId);  //일시정지 마우스 오버시
			t2=1;
		},
		mouseleave:	function(){  //플레이버튼으로 중지상태(t==1)에는 동작되면 안된다.
			if(t==0){   //t==0 이상태에서만 플레이 작동 마우스 리브시
				t2=0;
				autoPlay('mouseleave',t2);  			//플레이 마우스 롤아웃시
			}
		},
	});
	
	
	
	$('.section2-row2-wrap').slideUp(0); //초기
	//프로모션 버튼 
	$('.promotionBtn').on({
		click:	function(){
			$('.section2-row2-wrap').slideToggle(300);
		}
	});
	

	//네비게이션 버튼 함수
	function navBtFn(z){
		$('.navBtn').removeClass('addNav');
		$('.navBtn').eq(z).addClass('addNav');
	}
	
	//플레이 스톱버튼 이벤트
	$('.playBtn').on({
		click:	function(){
			
			//$(this).toggleClass('addNav');
			
			if( t==0 ){
				$(this).addClass('addNav');
				clearInterval(setId);  //일시중지
				t=1;  //중지상태임
				t2=0;
			}
			else if( t==1 ){
				$(this).removeClass('addNav');
				t2=1;
				autoPlay('click',t2);
				t=0;  //플레이상태임	

			}
			
		}
	});
	
	
	//다음슬라이드 버튼 이벤트
	$('.nextBtn').on({
		click: function(){
			nextSlidIf();
		}
	});
	
	//이전슬라이드 버튼 이벤트
	$('.prevBtn').on({
		click: function(){
			prevSlideIf();
		}
	});
	
	
	//이전슬라이드 조건문
	function prevSlideIf(){
		if(s[2]==1){
			prevSlide(1);	
		}
		else if(s[1]==1){
			prevSlide(0);	
		}
		else if(s[0]==1){ 	//처음이면
			prevSlide(2);	//끝으로	 
		}
	}
	
	//다음슬라이드 조건문
	function nextSlidIf(){
		if(s[0]==1){
			slide(1);
		}
		else if(s[1]==1){
			slide(2);
		}
		else if(s[2]==1){	//끝이면
			slide(0);		//처음으로
		}
	}

	
	function slide(z){
		s=[0,0,0];
		s[z]=1;
		navBtFn(z);
		
		if(z==0){ //0 1 2   201
			a = [2,0,1];
		}
		else if(z==1){ //012
			a = [0,1,2];
		}
		else if(z==2){ //120
			a = [1,2,0];		
		}
		
		$('.slide').eq(a[0]).stop().animate({left:  '0%'},0).animate({left:'-100%'},1000, function(){
			$('.slide').removeClass('addOpacity');
		});			
		$('.slide').eq(a[1]).stop().animate({left:'100%'},0).animate({left:   '0%'},1000, function(){
			$(this).addClass('addOpacity');
		});
		$('.slide').eq(a[2]).stop().animate({left:'200%'},0).animate({left: '100%'},1000);
		
	}
	

	//이전슬라이드 함수(prevSlide) 내림차순 
	function prevSlide(z){
		s=[0,0,0];
		s[z]=1;
		navBtFn(z);		
		
		if(z==2){ //원래 다음 슬라이드 2 1 0 역순은 0 2 1로 시작
			b = [0,2,1];
		}
		else if(z==1){
			b = [2,1,0];
		}
		else if(z==0){
			b = [1,0,2];		
		}
		$('.slide').eq(b[0]).stop().animate({left:   '0%'},0).animate({left: '100%'},1000, function(){
			$('.slide').removeClass('addOpacity');
		});
		$('.slide').eq(b[1]).stop().animate({left:'-100%'},0).animate({left:   '0%'},1000, function(){
			$(this).addClass('addOpacity');
		});
		$('.slide').eq(b[2]).stop().animate({left:'-200%'},0).animate({left:'-100%'},1000);
	}
	
	
	
	
	
	
	
	
});