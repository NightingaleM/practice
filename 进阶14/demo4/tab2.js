var $tabs = $('.tabs')

$tabs.on('click',function(){
	var $this = $(this)
	var index = $this.index()
	var boxWidth = $('.show-boxs').width()
	$this.addClass('active-tab')
	$this.siblings('li').removeClass('active-tab')

	$this.parents('.layout').find('.show-box')
							.css('margin-left',-boxWidth*index)
							.find('.show-boxs').eq(index)
							.css('background-color',giveColor())

})





var colorbox=[1,2,3,4,5,6,7,8,9,0,'a','b','c','d','e','f']
var giveColor = function(){
	var color='#'
	for(let i = 0; i < 6; i++){
		var c = parseInt(Math.random()*colorbox.length)
		color += colorbox[c]
	}
	return color;
}