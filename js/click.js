var a_idx = 0;

jQuery(document).ready(function($) {
	$("body").click(function(e) {
		var a = new Array("小王Fly","小王Bot","LiChen","小源151","Explorer_Chils","Leo","Hope解说","BadJui","0殺神在心0","Minecraft","我的世界","BSOD-SYSTEM","爱玩机的SYSTEM-QCX","乐乐QWQLL404","正在喝可乐的九月","DataCleaner");
		var $i = $("<span/>").text(a[a_idx]);
		a_idx = (a_idx + 1) % a.length;
		var x = e.pageX, y = e.pageY;
		$i.css({
			"z-index": 5,
			"top": y - 20,
			"left": x,
			"position": "absolute",
			"font-weight": "bold",
			"color": "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")"
		});
		$("body").append($i);
		$i.animate({
			"top": y - 180,
			"opacity": 0
		},3000,function() {
			$i.remove();
		});
	});
	setTimeout('delay()', 2000);
});

function delay() {
	$(".buryit").removeAttr("onclick");
}