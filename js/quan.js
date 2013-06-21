// 圈
$(document).ready(function(){
	$(".md li,.me li").hover(function(e) {
    	$(this).find(".join").show();
	},function(){
		$(this).find(".join").hide();
    });
})