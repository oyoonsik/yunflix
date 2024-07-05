$(function(){
	
	//섹션1 애니메이션 - 콜백애니메이션
	$('.ani0').stop().animate({opacity:1},1000, function(){
		$('.ani1').stop().animate({opacity:1},1000, function(){
			$('.ani2').stop().animate({opacity:1},1000, function(){
				$('.ani3').stop().animate({opacity:1},1000, function(){
					$('.ani4').stop().animate({opacity:1},1000, function(){
						$('.ani5').stop().animate({opacity:1},1000);
					});
				});
			});
		});
	});	
});  //section1.js