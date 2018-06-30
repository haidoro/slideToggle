$(function(){
	$('dt').click(function(){
		$('dd:not(:animated)').slideToggle('slow');
	})
})
