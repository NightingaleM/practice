var $btn = $('#btn')
var $changeColor = $('#change-color-div')
var $inputSth = $('#input-show-box>input')
var $select = $('#select-box>select')

var $showScrollTop = $('#showscrollTop>p')
var $window = $(window)

//点击方块连续变色
$btn.on('click',function(){
	$(this).css('background-color','red')	
	setTimeout(function(){
		$btn.css('background-color','blue')
	},1000)
		// .delay(1000)
	// $(this).animate({backgroundColor:'red'})
})
//放上、移开鼠标变色
$changeColor.on('mouseenter',function(){
	$(this).css('background-color','red')
}).on('mouseleave',function(){
	$(this).css('background-color','#fff')
})
//获取滚动后的垂直滚动距离
$window.scroll(function(){
	$showScrollTop.text($window.scrollTop())
})
//文本输入的改变与展现
$inputSth.on('focus',function(){
	$(this).addClass('blueBorder')
}).on('blur',function(){
	$(this).removeClass('blueBorder')
})

$inputSth.change(function(){
	console.log($(this).context.value)
	$inputSth.parents('#input-show-box').find('.input-show').text($(this).context.value)
	$(this).context.value = $(this).context.value.toUpperCase()
})

//显示 select的选择结果
$select.parents('#select-box').find('.input-show').text($('#select-box>select>option:selected').text())
$select.change(function(){
	console.log($('#select-box>select>option:selected').text())
	$(this).parents('#select-box').find('.input-show').text($('#select-box>select>option:selected').text())

})
