$(document).ready(function() {
var showCharacater = 150;
var newsroomdescriptiontext = ".....";
var descriptionmoretext = "> Read More";
var descriptionlesstext = "< Show less";
$('.newsroom-title-description').each(function() {
 var content = $(this).html();
 if(content.length > showCharacater) {
 var contnt = content.substr(0, showCharacater);
var hght = content.substr(showCharacater, content.length - showCharacater);
 var html =  contnt + '<span class="moreshow">' + newsroomdescriptiontext+ '&nbsp;</span><span class="newsroom-title-description-morecontent"><span>' +  hght + '</span>&nbsp;&nbsp;<a href="#" class="newsroom-title-description-morelink mt-2">' +descriptionmoretext + '</a></span>';
 $(this).html(html);
}});
 $(".newsroom-title-description-morelink").click(function(){
if($(this).hasClass("less")) {
$(this).removeClass("less");
$(this).html(descriptionmoretext);
} else {$(this).addClass("less");$(this).html(descriptionlesstext);}$(this).parent().prev().toggle();$(this).prev().toggle();return false;
 });
});


$(document).ready(function() {
	$('.pop').on('click', function($e) {
			$e.preventDefault();
		$('#imagegallerytext').html($(this).text().replace());
		$('.imagegallerydescription').html($(this).text().replace());
		$('.imagepreview').attr('src', $(this).find('img').attr('src'));
		
		});
	
	$('.imggallery_viewmore').click(function(e) {
    e.stopPropagation();
    $('.imggallery_viewmore_show').css({
        'display': 'flex'
    })
});
	
		});


