$(function(){
	var d1 = new Move('#mac_footer');
	d1.init();
})
function icoMove(id){
		this.oDiv = $(id)
		this.aImg = $(id+' span')
	}
icoMove.prototype.init = function(){
	this.fnMove();
};
icoMove.prototype.fnMove = function(){
	var _this = this;
	document.addEventListener('mousemove',function(ev){
		for (var i = 0; i < _this.aImg.length; i++) {
			var x = _this.aImg[i].offsetLeft+_this.aImg[i].offsetWidth/2;
			var y = _this.aImg[i].offsetTop+_this.aImg[i].offsetHeight/2+_this.oDiv.offset().top;
			var a = ev.pageX - x;	
			var b = ev.pageY - y;
			var c = Math.sqrt(Math.pow(a,2)+Math.pow(b,2))
			var scale = 1 - c/300;
			if (scale < 0.5) {
				scale = 0.5
			}
			_this.aImg[i].style.width = scale*128+'px';
			_this.aImg[i].style.height = scale*128+'px';
		}
	})
};