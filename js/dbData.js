$(function(){
    $('#fl_list li').on('click',function(){
        $('#fl_list li').removeClass('active')
        $(this).addClass('active')
        var val = $(this).attr('name')
        $.ajax({
            url:'https://api.douban.com//v2/movie/search?callback=?',
            data:{
                q:val,
                start:0,
                count:20
            },
            dataType:'jsonp',
            success:function(data){
                var str = '';
                $.each(data.subjects,function(e,i){
                    str +=`<li>
						<span>${data.subjects[e].title}</span>
						<span>${data.subjects[e].year}</span>
						<span>${data.subjects[e].id}</span>
						<span>${data.subjects[e].subtype}</span>
					</li>`
                })
                $('#fr_list')[0].innerHTML = str;
            }
        })
    })
    $('#fr_list').on('click',function(ev){
        $('#fr_list li').removeClass('active')
        if (ev.target.tagName=='SPAN') {
            $(ev.target).parent().addClass('active')
        }
    })
    $('#fr_header span').eq(0).on('click',function(){
        var arr =[];
        var str = '';
        $.each($('#fr_list li'),function(i,e){
            arr.push($(e))
        })
        arr.sort(function(a,b){
            var at = a.children()[0].innerHTML.charCodeAt(0)
            var bt = b.children()[0].innerHTML.charCodeAt(0)
            return at-bt
        })
        for (var i = 0; i < arr.length; i++) {
            str+=arr[i][0].outerHTML
        }
        $('#fr_list').html(str)
    })
    $('#fr_header span').eq(1).on('click',function(){
        var arr =[];
        var str = '';
        $.each($('#fr_list li'),function(i,e){
            arr.push($(e))
        })
        arr.sort(function(a,b){
            var at = a.children()[1].innerHTML
            var bt = b.children()[1].innerHTML
            return at-bt
        })
        for (var i = 0; i < arr.length; i++) {
            str+=arr[i][0].outerHTML
        }
        $('#fr_list').html(str)
    })
    $('#fr_header span').eq(2).on('click',function(){
        var arr =[];
        var str = '';
        $.each($('#fr_list li'),function(i,e){
            arr.push($(e))
        })
        arr.sort(function(a,b){
            var at = a.children()[2].innerHTML
            var bt = b.children()[2].innerHTML
            return at-bt
        })
        for (var i = 0; i < arr.length; i++) {
            str+=arr[i][0].outerHTML
        }
        $('#fr_list').html(str)
    })
    $('#fr_header span').eq(3).on('click',function(){
        var arr =[];
        var str = '';
        $.each($('#fr_list li'),function(i,e){
            arr.push($(e))
        })
        arr.sort(function(a,b){
            var at = a.children()[3].innerHTML.length
            var bt = b.children()[3].innerHTML.length
            return at-bt
        })
        for (var i = 0; i < arr.length; i++) {
            str+=arr[i][0].outerHTML
        }
        $('#fr_list').html(str)
    })
})
