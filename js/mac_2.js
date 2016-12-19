$(function(){
	var appsMove = new IcoMove('#mac_footer');
	appsMove.init();
	var leftListShow = new Nav('#mac_header_left','#top_list');
	leftListShow.init()
	var rightListShow = new Nav('#mac_header_right','#top_list_r')
	rightListShow.init()
})
// -----------------apps鼠标移入运动---------------------

function IcoMove(id){ 
		this.oDiv = $(id)
		this.span = $(id+' span')
	}
IcoMove.prototype.init = function(){
	this.fnMove();
};
IcoMove.prototype.fnMove = function(){
	var _this = this;
	document.addEventListener('mousemove',function(ev){
		for (var i = 0; i < _this.span.length; i++) {
			var x = _this.span[i].offsetLeft+_this.span[i].offsetWidth/2+_this.oDiv.offset().left;
			var y = _this.span[i].offsetTop+_this.span[i].offsetHeight/2+_this.oDiv.offset().top;
			var a = ev.pageX - x;	
			var b = ev.pageY - y;
			var c = Math.sqrt(Math.pow(a,2)+Math.pow(b,2))
			var scale = 1 - c/200;
			if (scale < 0.5) {
				scale = 0.5
			}
			_this.span[i].style.width = scale*80+'px';
			_this.span[i].style.height = scale*80+'px';
		}
	})
};
//----------------导航菜单点击弹出----------------------
function Nav(id1,id2){
	this.header = $(id1);
	this.spans = $(id1+' span')
	this.list = $(id2+' ul')
	this.lists = $(id2+' ul li')
}
Nav.prototype.init = function(){
	this.titleClick();
	this.listsOver();
};
Nav.prototype.titleClick = function(){
	var _this = this;
	this.spans.click(function(){
		console.log()
		$('.r_more').hide()
		_this.spans.css({
			background:'',
			color:'',
			borderColor:''
		})
		_this.list.hide()
		if ($(this).index()==0 && _this.header.attr('id')=='mac_header_left') {
			$(this).css({
				backgroundImage:'url(mac_img/ico/apple3.png)'
			})
		} else if ($(this).index()==8 && _this.header.attr('id')=='mac_header_right') {
			$('.r_more').show()
			return
		} else if (_this.header.attr('id')=='mac_header_left'){
			$(this).css({
				background:'#015bcf',
				color:'#fff',
				borderColor:'#015bcf'
			})
		} else {
			$(this).css({
				backgroundColor:'#42a5f5'
			})
		}
		
		_this.list.eq($(this).index()).show()
	})
	document.addEventListener('mousedown',function(){
		_this.list.hide();
		_this.spans.css({
			background:'',
			color:'',
			borderColor:''
		})
		_this.lists.css('background','')
		$('.r_more').hide()
	})
};
Nav.prototype.listsOver = function(){
	var _this = this;
	this.lists.on('mouseover',function(){
		_this.lists.css('background','')
		$(this).css('background','#015bcf')
	})
};