;if ( typeof stickymenu === 'undefined' ) {
	var stickymenu = ( function ( $, window, document, undefined ) {

		'use strict';

		var adminMenuWrap,
			bodyMinWidth;

		$(document).ready( function () {
			stickymenu.init();
			stickymenu.update();
		});

		return {

			init : function () {

				adminMenuWrap = $('#adminmenuwrap');
				bodyMinWidth = parseInt( $(document.body).css('min-width') );

				$(window).on( 'resize scroll', function () {
					stickymenu.update();
				});

				$('#collapse-menu').on( 'click', function () {
					stickymenu.update();
				});

			},

			update : function () {
				// float the admin menu sticky if:
				// 1) the viewport is taller than the admin menu
				// 2) the viewport is wider than the min-width of the <body>
				// to float it only if it's collapsed add: $(document.body).hasClass('folded')
				if ( $(window).height() > adminMenuWrap.height() + 28 && $(window).width() > bodyMinWidth ) {
					if ( !adminMenuWrap.hasClass('floating') )
						adminMenuWrap.addClass('floating');
				} else {
					if ( adminMenuWrap.hasClass('floating') )
						adminMenuWrap.removeClass('floating');
				}

			}

		};

	})( jQuery, window, document );
}