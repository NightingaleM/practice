
var tabBtn = $$('.tab-btn')
var tab = $$('.tab')
var openBtn = $$('.open')
var closeBtn = [$('#closebtn'),$('.mot span')]
var mot = $('.mot')
var motBody = $('.mot-body')
!function(){
	for(var i = 0; i < tabBtn.length; i++){
		tabBtn[i].addEventListener('click',function(e){
			var className = e.target.className
			if(/show/.test(className)){
				return;
			}else{
				for(var k = 0; k < tabBtn.length; k++){
					tabBtn[k].className = "tab-btn"
					tab[k].className = 'tab'
				}
				e.target.className = "tab-btn show"
				for (var k = 0; k <tabBtn.length; k++){
					if(tabBtn[k].className=="tab-btn show"){
						tab[k].className = 'tab tab-block'
					}
				}
				// tab[i].className = 'tab tab-block'
			}
		},false)
	}
}()

!function(){
	for(var i = 0; i < openBtn.length; i++){
		openBtn[i].addEventListener('click',function(e){
			e.stopPropagation()
			mot.className = "mot"
		},false)
	}
	for(var k = 0; k < closeBtn.length; k++){
		closeBtn[k].addEventListener('click',function(e){
			mot.className = "mot disappear"
		},false)
	}
	motBody.addEventListener('click',function(e){
		e.stopPropagation()
	},false)
	window.addEventListener('click',function(e){
		mot.className = "mot disappear"
	},false)
}()












function $(one){
	return document.querySelector(one);
}
function $$(all){
	return document.querySelectorAll(all);
}