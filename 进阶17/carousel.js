var $picBox = $('.pic-ul')
var $pic = $('.pic-li')
var picSize = $('.pic-li').width()
var $preBtn = $('.previous')
var $nextBtn = $('.next')
var $dot = $('.dot-li')
var index = 1;//页数标记
var key = 1;//防止重复点击
$picBox.prepend($pic.last().clone()).append($pic.first().clone())
$picBox.css('width',$('.pic-li').length*picSize)
$picBox.css('left',-1*picSize)

autoPlay()
//向前翻页
$preBtn.on('click',function(){
  if(key === 1){
    index--
    changePic(index)
  }else{
    console.log('别急啊')
    return false;
  }
})
//向后翻页
$nextBtn.on('click',function(){
  if(key === 1){
    index++
    changePic(index)
  }else{
    console.log('别急啊')
    return false;
  }
})
//通过点翻页
$dot.on('click',function(){
  if(key === 1){
    changePic($(this).index()+1)
    index = $(this).index()+1
  }else{
    console.log('别急啊')
    return false;
  }
})
//自动翻页
function autoPlay(){
  if(key === 1){
    clock = setInterval(function(){
      index++
      changePic(index)
    },2000)
  }
}


//改变图片
function changePic(Nindex){
  key = 0;
  $picBox.animate({
    left: -Nindex*picSize
  },function(){
    if(Nindex === 0 ){
      index = 5 
      $picBox.css('left',-index*picSize)     
    }else if(Nindex === 6){
      index = 1  
      $picBox.css('left',-index*picSize)     
    }
    //改变点的显示
    $dot.eq(index-1).addClass('dot-active').siblings('li').removeClass('dot-active')
  })
  key = 1;
}
