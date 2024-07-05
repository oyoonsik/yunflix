$(function(){
	var s=[0,0,0,0,0]; n=$('.txtSlide').length-1; //5개(0,1,2,3,4)
		s[0]=1;  //초기 기본값 첫번째 슬라이드 노출된것
		
	//공지사항 텍스트 롤링 슬라이드  
	//구현 - 아래에서 위로 올라와서 정지 계속 롤링 
	//공지사항 5개 슬라이드 롤링 3초마다 실행
	
	setInterval(noticeSlideIf,3000);

	//다음에 실행 함수 	
	function noticeSlideIf(){
			
		for(i=0; i<=n; i++){
			if(s[i]==1){
				noticeSlide(i+1); //다음
				break;			  //버블링해결
			}
			else if(s[n]==1){ //마지막이면
				noticeSlide(0);   //처음
				break;			  //버블링해결
			}
		}	
			
		
		
		
	}
	
	//텍스트 슬라이드 롤림 함수 
	function noticeSlide(z){
		s=[0,0,0,0,0];
		s[z]=1;   //s[0]=0,s[1]=1,s[2]=0,s[3]=0,s[4]=0
			
		if(z==0){
			a=[4,0,1,2,3];			//a=[0,4,3,2,1];역순
		}
		else if(z==1){
			a=[0,1,2,3,4];			
		}
		else if(z==2){
			a=[1,2,3,4,0];
		}
		else if(z==3){
			a=[2,3,4,0,1];
		}
		else if(z==4){
			a=[3,4,0,1,2];
		}
		
		$('.txtSlide').eq(a[0]).stop().animate({top:(100*0)+'%'},0).animate({top:(100*0)+'%'},1000).css({zIndex:1});
		$('.txtSlide').eq(a[1]).stop().animate({top:(100*1)+'%'},0).animate({top:(100*0)+'%'},1000).css({zIndex:2});
		$('.txtSlide').eq(a[2]).stop().animate({top:(100*1)+'%'},0).animate({top:(100*1)+'%'},1000).css({zIndex:2});
		$('.txtSlide').eq(a[3]).stop().animate({top:(100*1)+'%'},0).animate({top:(100*1)+'%'},1000).css({zIndex:2});
		$('.txtSlide').eq(a[4]).stop().animate({top:(100*1)+'%'},0).animate({top:(100*1)+'%'},1000).css({zIndex:2});			
		
	}

	
}); //section2-text-slide.js