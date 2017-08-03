
app.get('/getNews',function(req,res){
	var news = [
		"1.高考加油",
		"2.欢乐颂",
		"3.苹果或将微信下架",
		"4.厉害了小姐姐",
		"5.11岁少女酷似刘诗诗",
		"6.看评论",
		"7.泰国爱豆月",
		"8.程序员"
	]
	var date = [];
	for(var i = 0; i < 3; i++){
		var index = parseInt(Math.random()*news.length);
		date.push(news[index])
	}

	res.send(date);
	
})