$(document).ready(function(){


		var partnerInfo = '[ { "name":"IdyaHub", "imgsrc":"idya.png" }, { "name":"WibesApp", "imgsrc":"wibes.png" },{ "name":"WatEva", "imgsrc":"whateva.png" },{ "name":"Defmax", "imgsrc":"defmax.png" } ]'
		var partneredInfo = JSON.parse(partnerInfo);
		var htmlString = "";
		var i;
		var partnersPage = $(".partners-page");
		for (i in partneredInfo) {
			
      		 htmlString += '<div class="partner"><img class="imgsrc " src="./images/'+partneredInfo[i].imgsrc+'"' + '><span class="name "> '+partneredInfo[i].name+' </span></div>'  ;       
                   
		}
		partnersPage.append(htmlString);
		htmlString = '<div class="partner bePartner"> <img class="imgsrc" src="./images/bePartner.png"> <span class="name"> Be Our Partner </span></div>';
		partnersPage.append(htmlString);
		$(".bePartner").css({"background-color":"#C8F7C5"});


		var windowHeight = $(window).height();
		var windowScrollPosTop ;
		var windowScrollPosBottom ;
		$(".partner:even").addClass("even");
		$(".partner:odd").addClass("odd");


	$.fn.reveal = function(direction)
	{


		return this.each(function()
		{
			

			var itemOffset = $(this).offset();
			var itemOffsetTop = itemOffset.top;
			
		// $("#just").html(itemOffsetTop);


		if( !$(this).hasClass("hidden"))
		{
					
			$(this).css({"opacity":0}).addClass("hidden");
		}


			

		if(!$(this).hasClass("animation-complete"))
		{
			if(windowScrollPosBottom > itemOffsetTop+150)
			{
				
					
							// console.log(" item offset : "+itemOffsetTop) ;
				if(direction == "left")
					$(this).addClass("animate-left").css({"opacity":1}).addClass("animation-complete");
				else 
					$(this).addClass("animate-right").css({"opacity":1}).addClass("animation-complete");
				
			
				
				
				 	
			}
		}

		});
	}


		$(window).scroll(function(){
		 
		 windowScrollPosTop = $(window).scrollTop();
		 
		 windowScrollPosBottom = windowHeight + windowScrollPosTop;
		
		 // console.log("window Scroll po bottom: "+windowScrollPosTop);
		
		$(".even").reveal("left");
		$(".odd").reveal("right");

	});

	

	

});