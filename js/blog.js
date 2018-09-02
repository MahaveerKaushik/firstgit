$(document).ready(function()
		{
			$('#navbar').hide();
			$('#hamburger').click(function()
			{
				$('#navbar').slideToggle("slow");
				$('#hamburger').toggleClass("rotated");

			});
		});