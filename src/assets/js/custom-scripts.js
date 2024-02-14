/*
Author: webthemez.com
Author URL: http://webthemez.com
*/
"use strict";

jQuery(function ($) {
	new WOW().init();

	smoothScroll.init();

	$(window).load(function () {
		"use strict";
		var $portfolio_selectors = $(".portfolio-filter >li>a");
		var $portfolio = $(".portfolio-items");
		$portfolio.isotope({
			itemSelector: ".portfolio-item",
			layoutMode: "fitRows",
		});

		$portfolio_selectors.on("click", function () {
			$portfolio_selectors.removeClass("active");
			$(this).addClass("active");
			var selector = $(this).attr("data-filter");
			$portfolio.isotope({
				filter: selector,
			});
			return false;
		});
	});

	$(document).ready(function () {
		$.fn.animateNumbers = function (stop, commas, duration, ease) {
			return this.each(function () {
				var $this = $(this);
				var start = parseInt($this.text().replace(/,/g, ""));
				commas = commas === undefined ? true : commas;
				$({
					value: start,
				}).animate(
					{
						value: stop,
					},
					{
						duration: duration == undefined ? 1000 : duration,
						easing: ease == undefined ? "swing" : ease,
						step: function () {
							$this.text(Math.floor(this.value));
							if (commas) {
								$this.text(
									$this
										.text()
										.replace(
											/(\d)(?=(\d\d\d)+(?!\d))/g,
											"$1,"
										)
								);
							}
						},
						complete: function () {
							if (parseInt($this.text()) !== stop) {
								$this.text(stop);
								if (commas) {
									$this.text(
										$this
											.text()
											.replace(
												/(\d)(?=(\d\d\d)+(?!\d))/g,
												"$1,"
											)
									);
								}
							}
						},
					}
				);
			});
		};

		$(".business-stats").bind(
			"inview",
			function (event, visible, visiblePartX, visiblePartY) {
				var $this = $(this);
				if (visible) {
					$this.animateNumbers(
						$this.data("digit"),
						false,
						$this.data("duration")
					);
					$this.unbind("inview");
				}
			}
		);
	});

	$("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools: false,
	});
});
