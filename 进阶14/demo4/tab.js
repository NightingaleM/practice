var $tabs = $('.tabs')
$tabs.on('click',function(){
	var $this = $(this)
	var index = $this.index()
	$this.addClass('active-tab')
	$this.siblings('li').removeClass('active-tab')
	$this.parents('.layout').find('.show-boxs')
							.eq(index).addClass('active-show')
							.siblings('.show-boxs')
							.removeClass('active-show')

})