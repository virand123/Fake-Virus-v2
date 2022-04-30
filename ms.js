function play_se(){
	var warning = new Audio('warning.mp3');
	warning.play();
}







var device = navigator.userAgent.match(/Android|iPhone|iPad|Windows/);
$('#device').text(device);


$('.modal').modal({dismissible: false});
$('#alert').modal('open');
$('#OK').click(function(){
	$('#alert').modal('close')
play_se()
})




var time = 200;
setInterval(function(){
time--;
$('#timer').text(time);
}, 1000);
