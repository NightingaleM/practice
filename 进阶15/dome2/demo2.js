var btnA = $('a')
btnA.on('click',function(e){
    e.preventDefault()
    $(this).css('display','none')
    $(this).parent('#add-more-box')
            .find('img').css('display','block')
    $.ajax({
    url: '/addSomeNews',
    method: 'GET',
    }).done(function(result){
        for(var i = 0; i < result.length; i++){
    	    var addnewli = $(`<li class="show-li">`+result[i]+`</li>`)
            addnewli.appendTo('#show-box')
	    }
        $('a').css('display','block')
        $('a').parent('#add-more-box')
              .find('img').css('display','none')
        }).fail(function(jqXHR, textStatus){
        $('a').css('display','block').text('加载失败')
        $('a').parent('#add-more-box')
              .find('img').css('display','none')
});
})