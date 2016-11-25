(function(d){
	var footer = d.getElementById('mac_footer');
	var topList = d.getElementById('top_list');
	var hLeft = d.getElementById('mac_hearer_left');
	var hRight = d.getElementById('mac_hearer_right');
	var topListR = d.getElementById('top_list_r');
	var tLis = topList.getElementsByTagName('li');
	var mail = d.getElementById('email');
	var closeEm = d.getElementById('closeEm');
	var moreTime = d.getElementById('more_time');
	var rMore = d.querySelector('.r_more');
	var docAll = d.getElementById('doc_all')
	var docs = d.querySelectorAll('.docs');
	var downloadList = d.getElementById('download_list');
	var dlLis = downloadList.getElementsByTagName('li');
	var cj = 0;
	var tds = d.getElementsByTagName('td')
	for (var i = 0; i < footer.children.length; i++) {
		footer.children[i].index = i;
		footer.children[i].onmouseover = function(ev){
			cj++;
			for (var i = 0; i < footer.children.length; i++) {
				footer.children[i].style.webkitTransform = '';
			}
			this.style.webkitTransform = ' scale(2.5) translate(0,-18px)'
			this.style.zIndex = cj+1;
			if (this.previousElementSibling) {
				this.previousElementSibling.style.webkitTransform = ' scale(1.6) translate(-10px,-15px)';
			}
			if (this.nextElementSibling) {
				this.nextElementSibling.style.webkitTransform = ' scale(1.6) translate(10px,-15px)'
			}
			if (this.previousElementSibling.previousElementSibling) {
				this.previousElementSibling.previousElementSibling.style.webkitTransform = ' scale(1.3) translate(-5px,-8px)';
			}
			if (this.nextElementSibling.nextElementSibling) {
				this.nextElementSibling.nextElementSibling.style.webkitTransform = ' scale(1.3) translate(5px,-8px)';
			}
		}
	}
	footer.onmouseout = function(ev){
		for (var i = 0; i < footer.children.length; i++) {
			footer.children[i].style.WebkitTransform = '';
		}
	}
	for (var i = 0; i < hLeft.children.length; i++) {
		hLeft.children[i].index = i;
		hLeft.children[i].onclick = function(ev){
			for (var i = 0; i < hLeft.children.length; i++) {
				hLeft.children[i].style.border = '';
				hLeft.children[i].backgroundColor = '';
				hLeft.children[i].style.color = '';
				hLeft.children[i].style.background = '';
				topList.children[i].style.display = 'none'
			}
			if (this.index==0) {
				this.style.backgroundImage = 'url(mac_img/ico/apple3.png)'
			}
			topList.children[this.index].style.display = 'block'
			this.style.borderRight = this.style.borderLeft = '8px solid #015bcf';
			this.style.backgroundColor = '#015bcf'
			this.style.color = '#fff';
		}
	}
	for (var i = 0; i < hRight.children.length; i++) {
		hRight.children[i].index = i;
		hRight.children[i].onclick = function(ev){
			for (var i = 0; i < hLeft.children.length; i++) {
				hLeft.children[i].backgroundColor = '';
				topListR.children[i].style.display = 'none'
			}
			if (this.index ==hRight.children.length-1 ) {
				rMore.style.display = 'block';
			} else {
				topListR.children[this.index].style.display = 'block'
			}
			
			this.style.backgroundColor = '#015bcf'
		}
	}
	for (var i = 0; i < tLis.length; i++) {
		tLis[i].onmouseover = function(){
			for (var i = 0; i < tLis.length; i++) {
				tLis[i].style.background = ''
			}
			this.style.background = '#015bcf'
		}
	}
	d.onmousedown = function(ev){
		for (var i = 0; i < hLeft.children.length; i++) {
			hLeft.children[i].style.border = '';
			hLeft.children[i].backgroundColor = '';
			hLeft.children[i].style.color = '';
			hLeft.children[i].style.background = '';
			hRight.children[i].style.backgroundColor = '';
			topList.children[i].style.display = 'none';
		}
		rMore.style.display = 'none';
		for (var i = 0; i < hRight.children.length; i++) {
			hRight.children[i].backgroundColor = '';
			hRight.children[i].style.backgroundColor = '';
		}
		for (var i = 0; i < topListR.children.length-1; i++) {
			topListR.children[i].style.display = 'none';
		}
		for (var i = 0; i < tLis.length; i++) {
			tLis[i].style.background = '';
		}
		for (var i = 0; i < dlLis.length; i++) {
			dlLis[i].style.top = '';
			downloadList.style.display = 'none';
		}
	}
	setTime(d)
	function setTime(d){
			var time = d.getElementById('time');
			var timer = null;
			timer = setInterval(fnTimer, 1);
			fnTimer();
			function fnTimer(){
				var myTime = new Date();
				var iYear = myTime.getFullYear();
				var iMonth = myTime.getMonth()+1;
				var iDate = myTime.getDate();
				var iWeek = myTime.getDay();
				var iHours = myTime.getHours();
				var iMin = myTime.getMinutes();
				var iSec = myTime.getSeconds();
				var iMillSec = myTime.getMilliseconds();
				var str = '';
				var str1 = '';
				if( iWeek === 0 ) iWeek = '周日';
				if( iWeek === 1 ) iWeek = '周一';
				if( iWeek === 2 ) iWeek = '周二';
				if( iWeek === 3 ) iWeek = '周三';
				if( iWeek === 4 ) iWeek = '周四';
				if( iWeek === 5 ) iWeek = '周五';
				if( iWeek === 6 ) iWeek = '周六';

				str = iWeek+' '+ toTwo(iHours)+' : '+ toTwo(iMin);
				str1 = iYear+ '年' +iMonth+'月'+iDate+'日 '+iWeek+' '+ toTwo(iHours)+' : '+ toTwo(iMin)+' : '+ toTwo(iSec);
				time.innerHTML = str;
				moreTime.innerHTML = str1;
				for (var i = 0; i < tds.length; i++) {
					if (parseInt(tds[i].innerHTML) ==iDate ) {
						tds[i].style.background = 'rgba(26,201,252,.4)'
					}
				}
			}
			function toTwo(n){
				return n < 10 ?  '0' + n : '' + n;
			}
			email()
			function email(){
				var canvas = d.getElementById('canvas')
				var cxt = canvas.getContext('2d');
				cxt.beginPath();
				cxt.fillStyle = '#85c8e8'
				cxt.fillRect(0,100,200,100)
				cxt.closePath();
				cxt.beginPath()
				cxt.moveTo(0,100)
				cxt.lineTo(100,150)
				cxt.lineTo(200,100)
				cxt.strokeStyle = '#ccc'
				cxt.stroke()
				cxt.fillStyle = '#eee'
				cxt.fill();
				cxt.closePath();
				cxt.beginPath()
				cxt.moveTo(30,115)
				cxt.lineTo(170,115)
				cxt.lineTo(100,150)
				cxt.closePath()
				cxt.strokeStyle = '#000'
				cxt.stroke()
				cxt.fillStyle = '#fff'
				cxt.fill()
				cxt.beginPath();
				cxt.moveTo(0,100)
				cxt.lineTo(100,150)
				cxt.lineTo(200,100)
				cxt.strokeStyle = '#ccc'
				cxt.stroke()
				cxt.fillStyle = '#ffa7ac'
				cxt.fill();
				cxt.closePath();
				cxt.beginPath()
				cxt.font = `14px Arial`;
				cxt.textBaseLine = 'middle'
				cxt.fillText('New Email',65,130);
				setTimeout(function(){
					mTween(canvas,{left:window.innerWidth/2-canvas.offsetWidth/2},3000,'elasticOut')
				},1000)
				canvas.onclick = function(){
					cxt.beginPath()
					cxt.moveTo(0,100)
					cxt.lineTo(100,150)
					cxt.lineTo(200,100)
					cxt.strokeStyle = '#ccc'
					cxt.stroke()
					cxt.fillStyle = '#eee'
					cxt.fill();
					cxt.closePath();
					cxt.beginPath()
					cxt.moveTo(30,115)
					cxt.lineTo(170,115)
					cxt.lineTo(100,150)
					cxt.closePath()
					cxt.strokeStyle = '#000'
					cxt.stroke()
					cxt.fillStyle = '#fff'
					cxt.fill()
					cxt.beginPath();
					cxt.moveTo(0,100)
					cxt.lineTo(100,50)
					cxt.lineTo(200,100)
					cxt.strokeStyle = '#ccc'
					cxt.stroke()
					cxt.fillStyle = '#ffa7ac'
					cxt.fill();
					cxt.closePath();
					cxt.beginPath()
					cxt.font = `14px Arial`;
					cxt.textBaseLine = 'middle'
					cxt.fillText('New Email',65,130);
					setTimeout(function(){
						canvas.style.display = 'none'
						mTween(mail,{top:mail.offsetHeight/8},1000,'bounceOut')
					},1000)
				}
			}
			closeEm.onclick = function(){
				mail.style.display = 'none'
			}
			console.log(docs)
			for (var i = 0; i < docs.length; i++) {
				docs[i].style.right = '2vw';
				docs[i].style.top = (i%6)*100 +'px';
			}
			dragDoc()
			function dragDoc(){
				for (var i = 0; i < docs.length; i++) {
					docs[i].addEventListener('mousedown', docsDown)
					function docsDown(ev){
						var disX = ev.pageX - this.offsetLeft;
						var disY = ev.pageY - this.offsetTop;
						var _this = this;
						var docsClone = this.cloneNode(true);
						docAll.appendChild(docsClone)
						this.style.opacity = .5;
						d.addEventListener('mousemove',docsMove)
						function docsMove(ev){
							_this.style.left = ev.pageX - disX +'px';
							_this.style.top = ev.pageY - disY +'px';
						}
						d.addEventListener('mouseup',docsUp)
						function docsUp(){
							d.removeEventListener('mousemove',docsMove);
							d.removeEventListener('mouseup',docsUp);
							docAll.removeChild(docsClone)
							_this.style.opacity = 1;
							for (var i = 0; i < docs.length; i++) {
								if (docs.length==1) {
									return
								}
								if (duang(docs[i],_this)) {
									console.log(1)
									if (docs[i]!=_this) {
										_this.style.left = 0;
										_this.style.top = 0;
										_this.style.display = 'none'
										_this.removeEventListener('mousemove',docsMove)
										docs[i].appendChild(_this);
										return
									}
								} 
							}
						}
						ev.preventDefault()
					}
				}
			}
			// for (var i = downloadList.children.length-1; i>-1	; i--) {
			// 	downloadList.children[i].style.WebkitTransform = 'translateX('+(downloadList.children.length-1-i)*5+'px) rotateZ('+(downloadList.children.length-1-i)*4+'deg)'
			// }
			var dlZbL = [];
			var dlZbT = [];
			var dlTf = [];
			for (var i = 0; i < downloadList.children.length; i++) {
				dlZbT.push(downloadList.children[i].offsetTop)
				dlTf.push(downloadList.children[i].style.webkitTransform)
			}
			
			footer.children[16].addEventListener('mousedown',dlListShow)
			function dlListShow(ev){	
				console.log(1)
				downloadList.style.display = 'block'
				for (var i = dlLis.length-1; i >-1; i--) {
					mTween(dlLis[i],{top:i*60},250,'easeOut')
					dlLis[i].style.WebkitTransform = 'translateX('+(dlLis.length-1-i)*5+'px) rotateZ('+(dlLis.length-1-i)*4+'deg)'
				}
				ev.cancelBubble = true;
			}
			function duang(obj1,obj2){
			var l1 = obj1.offsetLeft;
			var t1 = obj1.offsetTop;
			var b1 = t1 + obj1.offsetHeight;
			var r1 = l1 + obj1.offsetWidth;
			
			var l2 = obj2.offsetLeft;
			var t2 = obj2.offsetTop;
			var b2 = t2 + obj2.offsetHeight;
			var r2 = l2 + obj2.offsetWidth;
			
			if(r1 < l2 || b1 < t2 || l1 > r2 || t1 > b2){
				//没碰到
				return false;
			}else{
				//碰到了
				return true;
			}
		}
	}
})(document)