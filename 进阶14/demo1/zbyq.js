var sidebar_button = $('.ul-box')
var sidebar_box = $('.commodity-box')



for(let i = 0; i < sidebar_button.length; i++){

	sidebar_button.eq(i).on("mouseenter",function(){
		sidebar_box.eq(i).addClass('show').siblings()

	})


	$('#sidebar-ul').on("mouseleave",function(){
		sidebar_box.removeClass('show')
	})
}