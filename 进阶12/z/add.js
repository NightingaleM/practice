// var hli = $$('.addli')
// !function(){
// 	console.log(hli)
// 	for(var i = 0; i < hli.length; i++){
// 		console.log(hli[i].className)
// 		liName = hli[i].className
// 		hli[i].addEventListener('mouseover',function(e){
// 			e.target.className = liName+' hover'
// 			console.log(e)
// 		})
// 		hli[i].addEventListener('mouseout',function(e){
// 			e.target.className = 'addli'
// 			console.log(e)
// 		})
// 	}
// }()

var addbtn = $('#add')
!function(){
	addbtn.addEventListener('click',function(e){
		e.preventDefault()//取消a的默认动作
		var addnewli = document.createElement('li')
		addnewli.innerText = '内容2'
		var parents = $('#addBox')
		parents.appendChild(addnewli)
	})
}()
