
app.get('/addSomeNews',function(req,res){
	var news = [
		"高考加油",
		"欢乐颂",
		"苹果或将微信下架",
		"厉害了小姐姐",
		"11岁少女酷似刘诗诗",
		"看评论",
		"泰国爱豆月",
		"程序员",
		"七十二层奇楼",
		"奔跑吧",
		"魂斗罗归来",
		"楚乔转",
		"欢乐颂2",
		"高考作文",
		"北电侯良平",
		"这一刻的时光"
	]
	var date = [];
	for(var i = 0; i < 3; i++){
		var index = parseInt(Math.random()*news.length)
		date.push(news[index])
	}
	res.send(date)
})