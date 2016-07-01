$(window).load(function() {

	if (screen.width > 768 ){

		$('.col1').each(
			function()
			{
				$(this).jScrollPane();
				var api = $(this).data('jsp');
				var throttleTimeout;
				$(window).bind(
					'resize',
					function()
					{
						if (!throttleTimeout) {
							throttleTimeout = setTimeout(
								function()
								{
									api.reinitialise();
									throttleTimeout = null;
								},
								50
							);
						}
					}
				);
			}
		);

		$('.outer-scroll').each(
			function()
			{
				$(this).jScrollPane();
				var api = $(this).data('jsp');
				var throttleTimeout;
				$(window).bind(
					'resize',
					function()
					{
						if (!throttleTimeout) {
							throttleTimeout = setTimeout(
								function()
								{
									api.reinitialise();
									throttleTimeout = null;
								},
								50
							);
						}
					}
				);
			}
		);

	}

// if ($('.container').css('display') == 'block') {
//
// 	$('.container').each(
// 		function()
// 		{
// 			$(this).jScrollPane();
// 			var api = $(this).data('jsp');
// 			var throttleTimeout;
// 			$(window).bind(
// 				'resize',
// 				function()
// 				{
// 					if (!throttleTimeout) {
// 						throttleTimeout = setTimeout(
// 							function()
// 							{
// 								api.reinitialise();
// 								throttleTimeout = null;
// 							},
// 							50
// 						);
// 					}
// 				}
// 			);
// 		}
// 	);
//
// 	}

});
