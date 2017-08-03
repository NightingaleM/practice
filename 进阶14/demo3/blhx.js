var commoditys = $('.commoditys')
var showbox = $('.show-boxs')
var cover = $('.cover')
var biuld = $('#biuld')
var appendin = $('.show-boxs')
var products = [
	{
		img:"http://joymepic.joyme.com/wiki/images/blhx/5/53/%E5%A3%B0%E6%9C%9B%E5%A4%B4%E5%83%8F.jpg?v=201707020312",
		name:"嘿嘿~",
		price:"哎哟喂"
	},{
		img:"http://joymepic.joyme.com/wiki/images/blhx/0/0e/%E4%BC%8A%E4%B8%BD%E8%8E%8E%E7%99%BD%E5%A5%B3%E7%8E%8B%E5%A4%B4%E5%83%8F.jpg?v=201707020312",
		name:"嘿嘿~",
		price:"哎哟喂"
	},{
		img:"http://joymepic.joyme.com/wiki/images/blhx/a/a5/%E5%A5%B3%E7%81%B6%E7%A5%9E%E5%A4%B4%E5%83%8F.jpg?v=201707020312",
		name:"嘿嘿~",
		price:"哎哟喂"
	},{
		img:"http://joymepic.joyme.com/wiki/images/blhx/1/14/%E5%85%89%E8%BE%89%E5%A4%B4%E5%83%8F.jpg?v=201707020312",
		name:"嘿嘿~",
		price:"哎哟喂"
	},{
		img:"http://joymepic.joyme.com/wiki/images/blhx/1/16/%E5%8E%8C%E6%88%98%E5%A4%B4%E5%83%8F.jpg?v=201707020312",
		name:"嘿嘿~",
		price:"哎哟喂"
	},{
		img:"http://joymepic.joyme.com/wiki/images/blhx/6/6c/%E5%8A%A0%E5%8F%A4%E5%A4%B4%E5%83%8F.jpg?v=201707020312",
		name:"嘿嘿~",
		price:"哎哟喂"
	},{
		img:"http://joymepic.joyme.com/wiki/images/blhx/1/1d/%E5%BD%97%E6%98%9F%E5%A4%B4%E5%83%8F.jpg?v=201707020312",
		name:"嘿嘿~",
		price:"哎哟喂"
	},{
		img:"http://joymepic.joyme.com/wiki/images/blhx/6/68/%E5%B0%8F%E5%A4%A9%E9%B9%85%E5%A4%B4%E5%83%8F.jpg?v=201707020312",
		name:"嘿嘿~",
		price:"哎哟喂"
	},{
		img:"http://joymepic.joyme.com/wiki/images/blhx/d/df/%E9%98%BF%E6%AD%A6%E9%9A%88%E5%A4%B4%E5%83%8F.jpg?v=201707020312",
		name:"嘿嘿~",
		price:"哎哟喂"
	},{
		img:"http://joymepic.joyme.com/wiki/images/blhx/5/5f/%E5%A8%81%E5%B0%94%E5%A3%AB%E4%BA%B2%E7%8E%8B%E5%A4%B4%E5%83%8F.jpg?v=201707020312",
		name:"嘿嘿~",
		price:"哎哟喂"
	}
]
showbox.on('mouseenter','.commoditys',function(){
	$(this).children('.cover').addClass('active-buy')
})
showbox.on('mouseleave','.cover',function(){
	$(this).removeClass('active-buy')
})


biuld.on('click',function(){
	for(let i = 0; i < 3 ;i++){
		let p = parseInt(Math.random()*products.length)
		let src = products[p].img
		let name = products[p].name
		let price = products[p].price
		var html = `<li class="commoditys">
				<img src=`+src+` alt="" class="commoditys-img">
				<p class="commoditys-name">`+name+`</p>
				<p class="price">`+price+`</p>
				<div class="cover"><span class="see-it">查看详情</span></div>
			</li>`
		appendin.append(html)
	}
})


