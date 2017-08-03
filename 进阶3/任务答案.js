//-------7
function getInfo(name, age, sex){
        console.log('name:',name);
        console.log('age:', age);
        console.log('sex:', sex);
        console.log(arguments);
        arguments[0] = 'valley';
        console.log('name', name);
        }

getInfo('饥人谷', 2, '男');
/*
name: 饥人谷
age: 2
sex: 男
饥人谷
2
男
name: valley
*/
getInfo('小谷', 3);
/*
name: 小谷
age: 3
sex: undefined
小谷
3
name: valuuey
*/
getInfo('男');
/*
name: 男
age: undefined
sex: undefined
男
name: valuuey
*/

//-------8 求平方和
function sumOfSquares(){
    var result=0;
    for(var x = 0; x<arguments.length; x++){
       result = arguments[x]*arguments[x]+result;
       console.log(arguments[x])
    }
    return result;
}

var a = sumOfSquares(2,3,4);
var b = sumOfSquares(1,3);
console.log(a);  //29
console.log(b);  //10

//-------9 
console.log(a);
var a = 1;
console.log(b);
/*
var a;
console.log(a);  //undefined
a=1;
console.log(b);  //b is not defined
*/

//-------10
sayName('world');
sayAge(10);
function sayName(name){
    console.log('hello ', name);
}
var sayAge = function(age){
    console.log(age);
};
    
/*
function sayName(name){
    console.log('hello ', name);
}
var sayAge;
sayName('world');//hello world
sayAge(10);//sayAge is not a function
sayAge = function(age){
    console.log(age);
};
*/

//-------11
var x = 10
bar() 
function foo() {
  console.log(x)
}
function bar(){
  var x = 30
  foo()
}
/*
声明前置 --> x=10 --> 进入barcontext --> 创建x --> x=30 --> 
进入foocontext --> 打印x --> foocontext内无x -->
在globalcontext.AO查找x --> x=10 --> 打印10

*/


//-------12
var x = 10;
bar() 
function bar(){
  var x = 30;
  function foo(){
    console.log(x) 
  }
  foo();
}   
/*
声明前置 --> x=10 --> 进入barcontext --> 创建x --> x=30 --> 
进入foocontext --> 打印x --> foocontext内无x -->
在barcontext.AO查找x --> x=30 --> 打印30
*/

//-------13
var x = 10;
bar() 
function bar(){
  var x = 30;
  (function (){
    console.log(x)
  })()
}
/*
声明前置 --> x=10 --> 进入barcontext --> 创建x --> x=30 --> 
进入foocontext --> 打印x --> foocontext内无x -->
在barcontext.AO查找x --> x=30 --> 打印30
*/

//-------14
var a;//声明前置

function fn(){//声明前置
    var a//声明前置
    var a//声明前置
    function fn2(){//1.声明前置
        console.log(a)//12.打印a，在fn2context中找不到a，在fncontext找到a为6
        a = 20//13·赋值fncontext局部变量a=20
    }//14.退出fn2context
    console.log(a)//3.打印a，在fncontext中找到a为undefined
    a = 5//4.赋值fncontext局部变量a=5
    console.log(a)//5.打印a，在fncontext中找到a为5
    a++//6.a自加1 a=6
    fn3()//7·进入fn3context
    fn2()//11·进入fn2context
    console.log(a)//15·打印a，在fncontext中找到a为20
}//16·退出fncontext
function fn3(){
    console.log(a)//8·打印a，在fn3context中找不到a，在globalcontext找到a为1
    a = 200//9·赋值全局变量a=200
}//10·退出fn3context
a=1;//1.赋值全局变量a=1
fn()//2.进入fncontext
console.log(a)//17.打印a，在globalcontext找到a为200










var items = document.querySelectorAll("li")

for (var i=0; i<items.length; i++){
    items[i].onclick=function(i){
        return function(){
            console.log(i);
        }
    }(i)
}





for (var i = 0; i < 5; i++){
    setTimeout(function(){
        console.log(i);
    },1000);
}
console.log(i)