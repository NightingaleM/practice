var picIndex = 1//图片编号
var itemArr = []//每列高度
var loadImgSrc = 'http://jrgzuoye.applinzi.com/%E4%BD%9C%E4%B8%9A%E5%AE%89%E6%8E%92/jscode/JS9-jqueryajax/loading.gif'

appendImg(makeImg(24))//打开浏览器加载18张图片并按照瀑布流规则放在页面中

//当滚到页面底部时，加载更多图片
$(window).on('scroll', function () {
  if ($(window).scrollTop() + $(window).height() == $(document).height()) {
    appendImg(makeImg(6))
  }
})

//当页面宽度发生改变时，改变页面布局
$(window).on('resize', function () {
  render();
})

function render() {
  var picWidth = $('#layout img').outerWidth(true)//获取图片高度
  var colLength = parseInt($(window).width() / picWidth)//得到可以摆放的列数
  var newHeightArr = []//各个列的高度
  for (var i = 0; i < colLength; i++) {
    newHeightArr.push(0)//从0开始机选新列的高度
  }
  $('#layout img').each((index, element) => {//遍历所有图片，并且执行一下函数
    var minIndex = 0//最小数的下标
    var minHeight = newHeightArr[0]//最小列的高度
    for (var i = 0; i < newHeightArr.length; i++) {//找到最小高度的一列
      if (newHeightArr[i] < minHeight) {
        minIndex = i
        minHeight = newHeightArr[i]
      }
    }
    $(element).animate({//动画效果
      left: picWidth * minIndex,//距左偏移图片宽度*列数
      top: minHeight//距上偏移最小列的高度
    });
    newHeightArr[minIndex] = $(element).outerHeight(true) + newHeightArr[minIndex]//将新曾图片高度加入该列的总高度中
  });
  itemArr = newHeightArr
}


//将图片插入页面
function appendImg($images) {
  var containerWidth = $('#layout').width()//容器宽度
  let imgNum = 0;
  $(`<p class='loading'>正在下载<img src=${loadImgSrc}></p>`).appendTo($('body'))//插入等待提示
  $images.on('load', function () {//当图片加载完成后
    imgNum++
    if (imgNum === $images.length) {
      for (let i = 0; i < $images.length; i++) {
        $images.eq(i).appendTo($('#layout')).css(`top`, -300)//将图片放在页面某处
        $images.eq(i).appendTo($('#layout')).css(`left`, -300)//将图片放在页面某处
      }
      var imgWidth = $('#layout img').width()//获取图片宽度，因为jquery不能获取还未在文档流中图片的宽高，所以需要将图片放入文档流中再获取图片宽高
      var colLength = parseInt(containerWidth / imgWidth, 10)
      for (let key = 0; key < colLength; key++) {//初始化高度数组的数据，确定数组的长度
        if (itemArr[key] === undefined) {
          itemArr[key] = 0
        }
      }
      for (let i = 0; i < $images.length; i++) {
        var minValue = Math.min.apply(null, itemArr)//另一种获取最小值的方法
        var minIndex = itemArr.indexOf(minValue)//获取最小值的下标
        $images.eq(i).animate({
          top: itemArr[minIndex],
          left: $images.eq(i).outerWidth(true) * minIndex,
        })
        itemArr[minIndex] += $images.eq(i).outerHeight(true)
        $(".loading").remove()//图片全部加载完成后移除等待提示
      }
    }
  })
}




//生成一个200宽度，随机高度、随机颜色的图片的Jquery集合（默认三个）
function makeImg(Num) {
  Num = Num || 3
  var colorbox = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'a', 'b', 'c', 'd', 'e', 'f']
  var images = []
  var imgSrc = ``
  for (let key = 0; key < Num; key++) {//随机颜色
    imgHeight = parseInt(Math.random() * 200 + 200, 10)//随机高度
    var color = ''
    for (let i = 0; i < 6; i++) {
      var c = parseInt(Math.random() * colorbox.length)
      color += colorbox[c]
    }
    imgSrc = `http://via.placeholder.com/200x${imgHeight}/${color}?text=${picIndex++}`
    var img = new Image()
    images.push(img)
    img.src = imgSrc
  }
  var $images = $(images)
  return $images;
}



//等待完善的随机图片
// function makeImg(Num,imgHeight,imgWidth){
//   Num = Num||3
//   imgWidth = imgWidth||200
//   imgHeight = imgHeight||parseInt(Math.random()*200+200, 10)//随机高度
//   var colorbox=[1,2,3,4,5,6,7,8,9,0,'a','b','c','d','e','f']
//   var images=[]
//   var imgSrc=``
//   for(let key=0; key < Num; key++){//随机颜色
//     var color=''
//     for(let i = 0; i < 6; i++){
//       var c = parseInt(Math.random()*colorbox.length)
//       color += colorbox[c]
//     }
//     imgSrc = `http://via.placeholder.com/${imgWidth}x${imgHeight}/${color}`
//     var img = new Image()
//     images.push(img)
//     img.src = imgSrc
//   }
//   var $images = $(images)
//   return $images;
// }


