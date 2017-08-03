var columns = [$('.col1'),$('.col2'),$('.col3')]
var imgNum = 1
let images =[]
let totalHeights = [0,0,0]
var loadImgSrc='http://jrgzuoye.applinzi.com/%E4%BD%9C%E4%B8%9A%E5%AE%89%E6%8E%92/jscode/JS9-jqueryajax/loading.gif'
getMorePic(2)

$(window).scroll(function(){
	if($(window).scrollTop() + $(window).height() == $(document).height()){
		console.log(111)
		getMorePic()
	}
})

function getMorePic(times){
	times=times||1
	let images =[]
	var number = imgNum
	var imgN = imgNum
	
	for(imgN; imgN < imgNum+(6*times); imgN++){
		let img = new Image()
		images.push(img)
		$(`<p class='loading'>正在下载<img src=${loadImgSrc}></p>`).appendTo($('body'))
		$(img).on('load',function(){
			number+=1
			if(number===imgNum){
				for(let i = 0; i < images.length; i++){
					let shortest = findShortestColumn()
					columns[shortest].append(images[i])
					totalHeights[shortest] += images[i].height+10
				}
			$(".loading").remove()
			}
		})
		img.src = randomImge(imgN)
	}
	imgNum = imgNum+(6*times)
}

function findShortestColumn(){
	let minIndex = 0
	for (let i = 0; i < totalHeights.length; i++){
		if (totalHeights[i]<totalHeights[minIndex]){
			minIndex = i
		}
	}
	return minIndex
}

function randomImge(imgNum){
		var imgHeight = parseInt(Math.random()*200+200, 10)
		return `http://via.placeholder.com/350x${imgHeight}?text=This is Page${imgNum}`
}
