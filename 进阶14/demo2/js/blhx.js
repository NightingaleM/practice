var selections = $('.selections')
var showBoxs = $('.show-boxs')
var commoditys = $('.commoditys')
var cover = $('.cover')

for (let i = 0; i < selections.length; i++){
	selections.eq(i).on('click',function(){
		showBoxs.eq(i).addClass('active')
		showBoxs.eq(i).siblings().removeClass('active')
		selections.eq(i).addClass('active-selected')
		selections.eq(i).siblings().removeClass('active-selected')
	})
}

for (let i = 0; i < commoditys.length; i++){
	commoditys.eq(i).on('mouseenter',function(){
		console.log(1)
		// cover.eq(i).show()
		cover.eq(i).addClass('active-buy')
	})
	cover.eq(i).on('mouseleave',function(){
		console.log(2)
		// cover.eq(i).hide()
		cover.eq(i).removeClass('active-buy')
	})
}