  console.log("--------题目一----------")
//方法一：
    let fnArr1 = [];
    for (let i = 0; i < 10; i ++) {
        fnArr1[i] =  function(){
          return i;
        };
    }
    console.log('方法1')
    console.log( fnArr1[3]() );  //3
    //形成块作用域
// 方法二：
    var fnArr2=[]
    for(var i =0; i < 10; i++){
      !function(n){
        fnArr2[i] = function(){
          return n;
        }
      }(i)
    }
    console.log('方法2')
    console.log(fnArr2[3]())
//方法三：
    var fnArr3 = [];
    for (var i = 0; i < 10; i ++) {
        fnArr3[i] = (function(s){
          return function(){
            return s;
          };
        })(i);
    }
    console.log('方法3')
    console.log( fnArr3[3]() );  //3
// 题目2： 封装一个汽车对象，可以通过如下方式获取汽车状态
console.log("--------题目二----------")
var Car = (function(){
   var speed = 0;
   function setSpeed(s){
    speed = s
   }
   function getSpeed(){
    console.log(speed)
   }
   function accelerate(){
    speed += 10
   }
   function decelerate(){
    speed -= 10
   }
   function getStatus(){
    if(speed == 0){
      console.log('stop')
    }else{
      console.log('running')
    }
   }
   return {
      setSpeed: setSpeed,
      getSpeed:getSpeed,
      accelerate:accelerate,
      decelerate:decelerate,
      getStatus:getStatus,
   }
})()
Car.setSpeed(30);
Car.getSpeed(); //30
Car.accelerate();
Car.getSpeed(); //40;
Car.decelerate();
Car.decelerate();
Car.getSpeed(); //20
Car.getStatus(); // 'running';
Car.decelerate(); 
Car.decelerate();
Car.getStatus();  //'stop';
//Car.speed;  //error

// // 题目3：下面这段代码输出结果是? 为什么?
console.log("--------题目三----------")
var a = 1;
setTimeout(function(){
    a = 2;

    console.log('这是题目三的2啊！   '+a);
}, 0);
var a ;
console.log(a);
a = 3;
console.log(a);
console.log(`按照132的顺序出现
由于使用了setTimeout，即便是延迟0毫秒，
但是浏览器依旧会将setTimeout中的函数放置在代码最后，
执行完前面的代码，再看时间是否到了，到了就运行，
没到就再等等`)

// // 题目4：下面这段代码输出结果是? 为什么?
console.log("--------题目四----------")
console.log(`var flag = true;
setTimeout(function(){
    flag = false;
},0)
while(flag){}
console.log(flag);`)
console.log("答：")
console.log(`立个flag根本停不下来……
会一直卡在while循环里，无限循环，
原因和上一题一样，setTimeout的第一个参数被放在代码的最后，
所以在执行while循环时，flag为true，导致while无限循环
后面的console.log也打印不出来
在while中加一个console.log(flag)会一直打印出ture
这个代码就不运行了，怕死机……`)


// // 题目5： 下面这段代码输出？如何输出
console.log("--------题目五----------")
console.log(`delayer: 0, delayer:1...（使用闭包来实现）`)
for(var i=0;i<5;i++){
  setTimeout(function(){
         console.log('delayer:' + i );
  }, 0);
  console.log(i);
}
console.log('答:代码按顺序输出01234然后同时输出5个5(这几个5在下面……)')
!function(){
  for(var i=0;i<5;i++){
  !function (s){
    setTimeout(function(){
           console.log('delayer:' + s );
      }, 0);
    }(i)
  }
}()
console.log('setTimeout是真不好用啊……这题的输出内容都到下面去了')
// 题目6： 如何获取元素的真实宽高
console.log('--------题目六--------')
console.log(getComputedStyle(document.getElementById("layout-tab")).height)
console.log(getComputedStyle(document.getElementById("layout-tab")).width)


// 题目7： URL 如何编码解码？为什么要编码？
// 题目8： 补全如下函数，判断用户的浏览器类型
console.log('--------题目八--------')
!function isAndroid(){
  if(/Android/i.test(navigator.userAgent)){
    return console.log('is Android')
  }else{
    return console.log('is not Android')
  }
}()
!function isIphone(){
  if(/Iphone/i.test(navigator.userAgent)){
    return console.log('is Iphone')
  }else{
    return console.log('is not Iphone')
  }
}()
!function isIpad(){
  if(/Ipad/i.test(navigator.userAgent)){
    return console.log('is Ipad')
  }else{
    return console.log('is not Ipad')
  }
}()
!function isIOS(){
  if(/IOS/i.test(navigator.userAgent)){
    return console.log('is IOS')
  }else{
    return console.log('is not IOS')
  }
}()
console.log('--------题目八----END----')
console.log('--------以下是所有用了setTimeout的代码的延迟输出--------')