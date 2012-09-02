/*	jQuery Slidable plugin

	Victor Smirnov © 2012
*/

(function($) {
	var defaults = {
		minimal: 200,
		controls: ["Show", "Hide"],
		speed: 500
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

		function switchController(controller) {
			var text = $(controller).hasClass('more') ? options.controls[1] : options.controls[0];
			setTimeout(function() {
				$(controller).html("<span>" + text + "</span>");
				$(controller).toggleClass('more');
				$(controller).toggleClass('less');
			}, options.speed);
		}

		function controllerAction() {
			var self = this;
			var block = $(self).siblings('.tall');
			var new_height = $(self).hasClass('more') ? block.data('height') : options.minimal;
			block.animate({
				height: new_height
			}, options.speed, switchController(self));
		}

		function handleClick(controller) {
			$(controller).on('click', controllerAction);
		}

		function init(slidable) {
			$(slidable).find('.tall').each(function() {
				var block = this,
					height = block.clientHeight;
				if (noHeightData(block) && height > options.minimal) {
					$(block).after(controller_html);
					var controller = $(slidable).find('.controller');
					handleClick(controller);
					$(block).data('height', height);
					$(block).height(options.minimal);
				}
			});
		}

		this.each(function() {
			init(this);
		});

		return this;
	};
})(jQuery);
