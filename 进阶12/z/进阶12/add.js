let news;
var addnewli = document.createElement('li')
var parents = $('#addBox')
var addbtn = $('#add')



addbtn.addEventListener('click',function(e){
	e.preventDefault()//取消a的默认动作
    var xhr = new XMLHttpRequest();
	xhr.open('get','/addSomeNews',true);
	console.log(xhr)
    xhr.onload = function(){
		console.log(xhr.readState)
		if(xhr.readyState === 4 && xhr.status === 200){
			console.log('eee')
			addSomeNews(JSON.parse(xhr.responseText))
		}
	}
	xhr.send();
})

function addSomeNews(news){
	console.log('eeee')
	for(var i = 0; i < news.length; i++){
		var addnewli = document.createElement('li')
		addnewli.innerText = news[i];
		parents.appendChild(addnewli)
	}
}