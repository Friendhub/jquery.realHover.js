$.fn.realHover = function(settings) {
    var config = {'class': 'hoverclass'};
    if (settings){$.extend(config, settings);}
    $(this).bind("touchstart", function() {
  $(this).addClass(config.class);
    });
    $(this).bind("touchend", function() {
	$(this).removeClass(config.class);            
    });
}
