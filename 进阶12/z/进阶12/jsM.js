
var tabBtn = $$('.tab-btn')
var tab = $$('.tab')
var openBtn = $$('.open')
var closeBtn = [$('#closebtn'),$('.mot span')]
var mot = $('.mot')
var motBody = $('.mot-body')
var tab_btn = $$('.tab-btn')
/*tab标签宽度随动*/
!function(){
	var length = tab_btn.length
	for(var i = 0; i < length; i++ ){
		tab_btn[i].style.width = (100/length).toFixed(3)+'%'
	}
	tab_btn[length-1].style.borderRight = '2px solid'
}()

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





// 





function $(one){
	return document.querySelector(one);
}
function $$(all){
	return document.querySelectorAll(all);
}