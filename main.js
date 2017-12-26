;window.onload = function(){
	// 封装一个获取ID节点的函数
	function $(idName){
		return document.getElementById(idName);
	}
	// 获取节点
	var box = $("box"),
		leftBtn = $("left")
		rightBtn = $("right"),
		imgs = $("imgBox").getElementsByTagName('img'),
		lis = $("liBox").getElementsByTagName('li');

		var count = 0,
			time = null;

		leftBtn.onclick = function(){
			changeIf(true)
		}
		rightBtn.onclick = function(){
			changeIf(false);
		}

		time = setInterval(changeIf,1000);

		box.onmouseover = function(){
			clearInterval( time )
		}
		box.onmouseout = function(){
			time = setInterval(changeIf,1000);
		}

		for(var i=0;i<lis.length;i++){
			lis[i].index = i;
			lis[i].onmouseover = function(){
				count = this.index;
				changeImg();
			}
		}

		function changeIf(tan){
			if(tan){
				count--;
				if(count<0){
					count = imgs.length-1;
				}
				changeImg();
			}else{
				count++;
				if(count>imgs.length-1){
					count = 0;
				}
				changeImg()
			}
		}


		function changeImg(){
			for(var i=0;i<imgs.length;i++){
				imgs[i].style.display = "none";
				lis[i].className = "";
			}
			imgs[count].style.display = "block";
			lis[count].className = "active";
		}
}
