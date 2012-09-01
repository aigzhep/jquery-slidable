(function($) {
	var defaults = {
		minimized: 200,
		controls: ["Show", "Hide"]
	};

	var options;

	$.fn.slidable = function(params) {
		var options = $.extend({}, defaults, params);
		var controller_html = '<div class="controller more">' +
			'<span>' + options.controls[0] + '</span>' +
		'</div>';

		function noHeightData(block) {
			return !$(block).data('height');
		}

		function controllerAction() {
			var block = $(this).siblings('.tall');
			var new_height = $(this).hasClass('more') ? block.data('height') : options.minimized;
			block.animate({
				height: new_height
			}, 500);
			switchDirection(this);
		}

		function handleClick(controller) {
			$(controller).on('click', controllerAction);
		}

		function setHeight(slidable) {
			$(slidable).children('.tall').each(function() {
				var block = this,
					height = block.clientHeight;
				if (noHeightData(block) && height > options.minimized) {
					$(block).after(controller_html);
					var controller = $(slidable).children('.controller');
					handleClick(controller);
					$(block).data('height', height);
					$(block).height(options.minimized);
				}
			});
		}

		function switchDirection(controller) {
			var text = '<span>' +
				($(controller).hasClass('more') ? options.controls[1] : options.controls[0]) +
			'</span>';
			setTimeout(function() {
				$(controller).html(text);
				$(controller).toggleClass('more');
				$(controller).toggleClass('less');
			}, 500);
		}

		this.each(function() {
			setHeight(this);
		});

		return this;
	};
})(jQuery);
