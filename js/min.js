// /////////////////////////////////////// width
function checkWidth(init)
{
    /*If browser resized, check width again */
    if ($(window).width() < 953) {
        
        //$("#con").addClass(" container");
    }
    else {
        if (!init) {
        
        }
    }
}
function checkWidth(init)
{
    /*If browser resized, check width again */
    if ($(window).width() < 938) {
		$("#grid2").removeClass("ui sticky");
		$("#grid2").addClass("ui container");
		$("#grid1").removeClass("ui-grid");
        //$("#con").addClass(" container");
    }
    else {
        if (!init) {
		$("#grid2").addClass("ui sticky");
		$("#grid1").addClass("ui-grid");
        }
    }
}
$(document).ready(function() {
    checkWidth(true);

    $(window).resize(function() {
        checkWidth(false);
    });
});
// **********************************************
 // ///////////////////////////////////// ticker
    (function ($) {
      $(function () {
        var agMarqueeOptions = {
          //speed in milliseconds of the marquee
          // duration: 15500,
          duration: 25500,
          // duration: 5500,
          //gap in pixels between the tickers
          gap: 0,
          //time in milliseconds before the marquee will start animating
          delayBeforeStart: 0,
          //'left' or 'right'
          direction: "left",
          //true or false - should the marquee be duplicated to show an effect of continues flow
          duplicated: true,
          pauseOnHover: true,
          startVisible: true
        };
    
        $(window).on("load", function () {
          var agMarqueeBlock = $(".js-marquee");
    
          agMarqueeBlock.marquee(agMarqueeOptions);
        });
      });
    })(jQuery);

    (function ($) {
      $(function () {
        var agMarqueeOptions = {
          //speed in milliseconds of the marquee
          // duration: 15500,
          duration: 50500,
          // duration: 5500,
          //gap in pixels between the tickers
          gap: 90,
          //time in milliseconds before the marquee will start animating
          delayBeforeStart: 0,
          //'left' or 'right'
          direction: "left",
          //true or false - should the marquee be duplicated to show an effect of continues flow
          duplicated: true,
          pauseOnHover: true,
          startVisible: true
        };
    
        $(window).on("load", function () {
          var agMarqueeBlock = $(".js-marquee2");
    
          agMarqueeBlock.marquee(agMarqueeOptions);
        });
      });
    })(jQuery);
    

// *********************************** end ticker


// ///////////////////////////////// widget roll
(function($) {
	$.simpleTicker = function(element, options) {
		var defaults = {
			speed : 500,
			delay : 4000,
			easing : 'swing',
			effectType : 'fade'
		}
		var param = {
			'ul' : '',
			'li' : '',
			'initList' : '',
			'ulWidth' : '',
			'liHeight' : '',
			'tickerHook' : 'tickerHook',
			'effect' : {}
		}

		var plugin = this;
		plugin.settings = {}
		var $element = $(element),
			element = element;

		plugin.init = function() {
			plugin.settings = $.extend({}, defaults, options);
			param.ul = element.children('ul');
			param.li = element.find('li');
			param.initList = element.find('li:first');
			param.ulWidth = param.ul.width();
			param.liHeight = param.li.height();

	
			param.li.css({top:'0', left:'0', position:'absolute'});


			switch (plugin.settings.effectType) {
				case 'fade':
					plugin.effect.fade();
					break;
				case 'roll':
					plugin.effect.roll();
					break;
				case 'slide':
					plugin.effect.slide();
					break;
			}
			plugin.effect.exec();
		}

		plugin.effect = {};
		plugin.effect.exec = function() {
			param.initList.css(param.effect.init.css)
				.animate(param.effect.init.animate,plugin.settings.speed,plugin.settings.easing)
				.addClass(param.tickerHook);
			setInterval(function(){
				element.find('.' + param.tickerHook)
					.animate(param.effect.start.animate,plugin.settings.speed,plugin.settings.easing)
					.next()
					.css(param.effect.next.css)
					.animate(param.effect.next.animate,plugin.settings.speed,plugin.settings.easing)
					.addClass(param.tickerHook)
					.end()
					.appendTo(param.ul)
					.css(param.effect.end.css)
					.removeClass(param.tickerHook);
			}, plugin.settings.delay);
		}

		plugin.effect.fade = function() {
			param.effect = {
				'init' : {
					'css' : {display:'none',opacity:'0'},
					'animate' : {opacity:'1',zIndex:'98'}
				},
					'start' : {
					'animate' : {opacity:'0'}
				},
				'next' : {
					'css' : {display:'block',opacity:'0',zIndex:'99'},
					'animate' : {opacity:'1'}
				},
				'end' : {
					'css' : {display:'none',zIndex:'98'}
				}
			}
		}

		plugin.effect.roll = function() {
			param.effect = {
				'init' : {
					'css' : {top:'3em',display:'none',opacity:'0'},
					'animate' : {top:'0',opacity:'1',zIndex:'0'}
				},
				'start' : {
					'animate' : {top:'-3em',opacity:'0'}
				},
				'next' : {
					'css' : {top:'3em',display:'block',opacity:'0',zIndex:'1'},
					'animate' : {top:'0',opacity:'1'}
				},
				'end' : {
					'css' : {zIndex:'0'}
				}
			}
		}

		plugin.effect.slide = function() {
			param.effect = {
				'init' : {
					'css' : {left:(200),display:'none',opacity:'0'},
					'animate' : {left:'0',opacity:'1',zIndex:'98'}
				},
				'start' : {
					'animate' : {left:(-(200)),opacity:'0'}
				},
				'next' : {
					'css' : {left:(param.ulWidth),display:'block',opacity:'0',zIndex:'99'},
					'animate' : {left:'0',opacity:'1'}
				},
				'end' : {
					'css' : {zIndex:'98'}
				}
			}
		}

		plugin.init();
	}

	$.fn.simpleTicker = function(options) {
		return this.each(function() {
			if (undefined == $(this).data('simpleTicker')) {
				var plugin = new $.simpleTiecker(this, options);
				$(this).data('simpleTicker', plugin);
			}
		});
	}
})(jQuery);

$(function(){
	$.simpleTicker($('#js-ticker-fade'), {'effectType':'fade'});
	$.simpleTicker($('#js-ticker-roll'), {'effectType':'roll'});
	$.simpleTicker($('#js-ticker-slide'), {'effectType':'slide'});
});
// ******************************************** endwidget
// ///////////////////////////////// color

// ///////////////////////////////////// mine
function colorchange() {
	var color = document.getElementById('color');
		check = document.getElementById('colorchange');
	if ($(check).is(':checked')) {
		$(color).attr('href','http://localhost/was1/wp-content/themes/area-17/css/minw.css?ver=888');
	}
	else {
		$(color).attr('href','http://localhost/was1/wp-content/themes/area-17/css/min.css?ver=888');
	}
	
}
function colorchange2() {
	var color = document.getElementById('color');
		check = document.getElementById('colorchange2');
	if ($(check).is(':checked')) {
		$(color).attr('href','http://localhost/was1/wp-content/themes/area-17/css/minw.css?ver=999');
	}
	else {
		$(color).attr('href','http://localhost/was1/wp-content/themes/area-17/css/min.css?ver=888');
	}
	
}
// ******************************************** color