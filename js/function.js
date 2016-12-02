//1.获取类名的兼容函数
// function getClass(classname,dad){
// 			var dad=dad||document;//返回靠前的真的值
// 			if(dad.getElementsByClassName){
// 				return dad.getElementsByClassName(classname);
// 			}else{
// 				var arr=[];
// 				var tags = dad.getElementsByTagName("*");
// 				for(var i=0;i<tags.length;i++){
// 					var perCla=' '+tags[i].className+' ';
// 					// 给元素不止一个class的第一个class前和最后一个class后加上' ',也方便下一步查找判断
// 					if(perCla.indexOf(' '+classname+' ')!=-1){
// 					//这加' '防止查找class为test而将test3查找进来
// 						arr.push(tags[i]);
// 					}
// 				}				
// 				return arr;
// 			}
// 		}
// 		
//1.获取类名的兼容函数
function getClass(classname,father){//传入类名和父类
	var father=father||document;//返回靠前的真的值
	if(father.getElementsByClassName){//判断浏览器是否支持
		return father.getElementsByClassName(classname);//W3C浏览器返回
	}else{
		var arr=[];//建立新数组存放获取到的元素
		var alls=father.getElementsByTagName("*");//获取所有的标签元素
		for(var i=0;i<alls.length;i++){//遍历所有的获取到的元素
			if(checkClass(alls[i].className,classname)){//防止元素不止一个类名
				arr.push(alls[i]);//找到该类名则加入新数组
			}
		}
		return arr;//返回获取到的数组
	}
}
function checkClass(str,classname){
	var newarr=str.split(" ");//将数组进行分割
	for(var i=0;i<newarr.length;i++){
		if(newarr[i]==classname){//找出与所要寻找的类名相同的元素
			return true;
		}
	}
	return false;
}
//获取对象的文本内容
function getText(obj,str){//传入对象名和需要设置的文本内容
		if(str==null){//传入文本内容为空表示只是获取对象文本
			if(obj.textContent){//为真表示是W3C浏览器
				return obj.textContent;
			}else{
				return obj.innerText;
			}
		}else{//文本内容不为空表示需要设置对象的文本内容
			if(obj.textContent!=undefined){
				 obj.textContent=str;
			}else{
				 obj.innerText=str;
			}
		}
		
	}
	// function getStyle(obj){
	// 	if(obj.currentStyle){
	// 		return obj.currentStyle;
	// 	}else{
	// 		return getComputedStyle(obj);
	// 	}
	// }
	
	//获取对象所有的css样式
	function getStyle(obj,attr){//传入 对象和属性
		if(obj.currentStyle){//判断浏览器类型
			return parseInt(obj.currentStyle[attr]);//iE返回获取属性
		}else{
			return parseInt(window.getComputedStyle(obj)[attr]);//其他浏览器返回
		}
	}

	function $(selector,father){
		if(typeof selector=="string"){
			selector=selector.replace(/^\s*|\s*$/g,"");//正则去字符串前后空格
			var father=father||document;
			var first=selector.substr(0,1);//charAt(0);
			if(first=="."){
				return getClass(selector.slice(1),father);
			}else if(first=="#"){
				return father.getElementById(selector.slice(1));
			}//else if(/^[a-z|1-10]{1,10}$/g.test(selector)){//正则表达式/^开始 $/结束
			// 	return father.getElementsByTagName(selector);
			// }
			else if(first>="a"&&first<="z"){
				return father.getElementsByTagName(selector);
			}
		}else if(typeof selector=="function"){
			window.onload=function(){
				selector();
			}
		}						
	}
	//获取父元素中的所有子元素或文本节点
		function getChilds(father,type){
			type=type||1;//第二个参数为空,默认获取元素节点
			var alls=father.childNodes;//获取所有子节点
			var arr=[];//定义新数组存放满足条件的节点
			for(var i=0;i<alls.length;i++){
				if(type==13){//获取元素与文本节点
					if(alls[i].nodeType==3){//文本节点
						var str=alls[i].nodeValue;//得到文本节点的值
						str=str.replace(/^\s*|\s*$/g,"");//去除文本值中的空格
						if(str!=""){
							arr.push(alls[i]);//存放满足条件的节点
						}	
					}
					if(alls[i].nodeType==1){//元素节点
						arr.push(alls[i]);
					}
				}else if(type=1){//获取元素节点
					if(alls[i].nodeType==1){
						arr.push(alls[i]);
					}
				}
			}
			return arr;//返回所有满足条件节点
		}
		function getFirst(father){
		 	return getChilds(father)[0];
		 }
		 function getLast(father){
			return getChilds(father)[getChilds(father).length-1];
		}
		Node.prototype.insertAfter=function (obj,after){
			if(after.nextSibling==null){//下一个兄弟节点不存在的话
				 this.appendChild(obj);//则新对象追加到最后
			}else{//下一个兄弟节点存在
				 this.insertBefore(obj,after.nextSibling);
				 //新对象添加到下一个兄弟节点的前面
			}
		}

		function getDown(obj){
			var next=obj.nextSibling;
			while(next.nodeType!=1){
			// while(next.nodeType!=1&&(next.nodeType!=3||next.nodeValue.replace(/^\s*|\s*$/g,"")=="")){
				next=next.nextSibling;
				if(next==null){
					return false;
				}
			}
			return next;
		}
		function getUp(obj){
			var pre=obj.previousSibling;
			while(pre.nodeType!=1){
				pre=pre.previousSibling;
			}
			if(pre==null){
					return false;
			}
			return pre;
		}

		

		//随滚动条变化的搜索框
		//srcollfix:搜索框主体
		//height:滚动条下滑的高度
		function fixedTop(srcollfix,height){
			var obj=document.documentElement.scrollTop?document.documentElement:document.body;
			if(obj.scrollTop>height){
				srcollfix.style.display="block";
			}if(obj.scrollTop<=height){
				srcollfix.style.display="none";
			}	
		}
		//页面漂浮广告
		//box:浮动主题
		//btn:关闭按钮
		//speedx与speedy  代表X轴移动速度和Y轴移动速度
		function floatwindow(box,btn,speedx,speedy){
			box.style.position="fixed";
			var t=setInterval(piao,50);
			var cheight=document.documentElement.clientHeight;//浏览器高度
			var cwidth=document.documentElement.clientWidth;//浏览器宽度
			var sheight=box.offsetHeight;//自身高度
			var swidth=box.offsetWidth;//自身宽度
			var sheepX=speedx||5;//X轴速度
			var sheepY=speedy||5;//Y轴速度
			function piao(){
				cheight=document.documentElement.clientHeight;//浏览器高度
				cwidth=document.documentElement.clientWidth;//浏览器宽度
				var left=box.offsetLeft;//自身左边距
				var top=box.offsetTop;//自身上边距
				var newleft=left+sheepX;
				var newTop=top+sheepY;
				if(newTop<=0||newTop>=(cheight-sheight)){
					if(newTop>=(cheight-sheight)){
						newTop=cheight-sheight;
					}
					sheepY*=-1;
				}
				if(newleft<=0||newleft>=(cwidth-swidth)){
					if(newleft>=(cwidth-swidth)){
						newleft=cwidth-swidth;
					}
					sheepX*=-1;
				}
				box.style.left=newleft+"px";
				box.style.top=newTop+"px";
			}
			box.onmouseover=function (){
				clearInterval(t);
			}
			box.onmouseout=function (){
				t=setInterval(piao,50);
			}

			btn.onclick=function (){
				document.body.removeChild(box);
			}
		}

		// 同一事件添加多个事件处理程序
		function addEvent(obj,events,fun){
			if(obj.addEventListener){
				 obj.addEventListener(events,fun,false);
			}else{
				 obj.attachEvent("on"+events,fun);
			}
		}
		
		//阻止事件流
		function stopEvent(eve){
			if(eve.stopPropagation){
				eve.stopPropagation();
			}else{
				eve.cancelBubble=true;
			}
		}
		//阻止浏览器默认行为
		function stopClient(eve){
			if (eve.preventDefault){	
				eve.preventDefault();
			} //阻止默认浏览器动作(W3C)
			else{
				eve.returnValue = false;//IE中阻止函数器默认动作的方式
			}
		}
		//检测是不是数组
		function isArray(arr){
			return arr instanceof Array;
			// if(arr.push){
			// 	return true;
			// }else{
			// 	return false
			// }
		}
		//检测数据类型 区分数组和对象
		//isType(o,type)   
		//type:[Array,Number,String,Function,Object,Boolean,Null,Undefined]
		function isType(o,type){
			if(Object.prototype.toString.call(o)=='[object '+type+']'){
				return true;
			}
			return false;	
		}
		function isArray(o){
			return isType(o,'Array');
		}
		function isObject(){
			return isType(o,'Object');
		}


		//求数组最大 最小值
		Array.prototype.max=function(){
			return Math.max.apply(this,this);
		}
		Array.prototype.min=function(){
			return Math.min.apply(this,this);
		}

		//获取具有定位属性的父元素相对于body的left  top值
		function offset(obj){
			var ob=document.documentElement.scrollTop?document.documentElement:document.body;
			var parent=obj.parentNode;
			var xsum=0;
			var ysum=0;
			while(parent!=null&&parent.nodeName!='BODY'){
				
				if(getStyle(parent,'position')!='static'){
					var borderL=parseInt(getStyle(parent,'borderLeftWidth'));
					var borderT=parseInt(getStyle(parent,'borderTopWidth'));
					var x=parent.offsetLeft+borderL;
					var y=parent.offsetTop+borderT;
					xsum=xsum+x;
					ysum=ysum+y;
				}
				parent=parent.parentNode;
			}
			//当存在滚动条的时候top需要减去scrollTop
			ysum-=ob.scrollTop;
			return {left:xsum,top:ysum}
		}

		//拖拽函数
		function drag(obj,options){
			this.obj=obj;
			this.options=options==undefined?{}:options;
			//X轴是否可拖拽
			this.options.x=this.options.x==undefined?true:this.options.x;
			//Y轴是否可拖拽
			this.options.y=this.options.y==undefined?true:this.options.y;
			//是否限制边界
			this.options.side=this.options.side==undefined?false:this.options.side;
			//是否有动画
			this.options.animate=this.options.animate==undefined?false:this.options.animate;
			this.parentX=0;
			this.parentY=0;
			this.parentW=parseInt(getStyle(this.obj.parentNode,"width"));
			this.parentH=parseInt(getStyle(this.obj.parentNode,"height"));
			this.endX=0;
			this.endY=0;
			this.startX=0;
			this.startY=0;
			this.cx=0;
			this.cy=0;
			this.ox=0;
			this.oy=0;
		}
		drag.prototype.start=function(){
			var that=this;
			this.obj.onmousedown=function(e){
				var ev=e||window.event;	
				that.parentX=offset(that.obj).left;
				that.parentY=offset(that.obj).top;
				that.ox=ev.offsetX;
				that.oy=ev.offsetY;
				that.endX=ev.clientX;
				that.endY=ev.clientY;
				stopClient(ev);
				that.move();
				that.stop();
				
			}
		}
		drag.prototype.move=function(){
			var that=this;
			document.onmousemove=function(e){
				var ev=e||window.event;
				that.startX=that.endX;
				that.startY=that.endY;
				that.endX=that.cx=ev.clientX;
				that.endY=that.cy=ev.clientY;
				var newleft=that.cx-that.ox-that.parentX;
				var newtop=that.cy-that.oy-that.parentY;

				if(that.options.side==true){
					if(newleft<=0){newleft=0;}
					if(newtop<=0){newtop=0;}
					if(newleft>=that.parentW-that.obj.offsetWidth){
						newleft=that.parentW-that.obj.offsetWidth;
					}
					if(newtop>=that.parentH-that.obj.offsetHeight){
						newtop=that.parentH-that.obj.offsetHeight;
					}
				}
				if(that.options.x==true){
					that.obj.style.left=newleft+'px';
				}
				if(that.options.y==true){
					that.obj.style.top=newtop+'px';
				}	
				
			}
		}
		drag.prototype.stop=function (){
			var that=this;
			document.onmouseup=function(e){
				if(that.startX==0){
					that.endX=0;
				}
				if(that.startY==0){
					that.endY=0;
				}
				if(that.options.animate==true){
					var lenX=that.endX-that.startX;
					var lenY=that.endY-that.startY;

					var xishu=0.8;
					var t=setInterval(function(){
						lenX*=xishu;
						lenY*=xishu;
						if(Math.abs(lenX)<1&&Math.abs(lenY)<1){
							clearInterval(t);
							that.endY=0;
							that.endX=0;
							that.startX=0;
							that.startY=0;
						}
						var nleft=that.obj.offsetLeft+lenX;
						var ntop=that.obj.offsetTop+lenY;
						if(nleft<0||ntop<0||nleft>that.parentW-that.obj.offsetWidth||ntop>that.parentH-that.obj.offsetHeight){xishu*=-1}
						that.obj.style.left=nleft+'px';
						that.obj.style.top=ntop+'px';
					},50)

				}
				var ev=e||window.event;
				this.onmousemove=null;
			}
		}
		//拖拽函数2
		function drag2(obj,opt){
			this.obj=obj;
			this.opt=opt==undefined?{}:opt;
			this.opt.x=this.opt.x==undefined?true:this.opt.x;
			this.opt.y=this.opt.y==undefined?true:this.opt.y;
			this.opt.side=this.opt.side==undefined?false:this.opt.side;
			this.opt.animate=this.opt.animate==undefined?false:this.opt.animate;
			this.downX=0;//鼠标按下时到浏览器左边距
			this.downY=0;//鼠标按下时到浏览器上边距
			this.offsetX=0;//到父元素left值
			this.offsetY=0;//到父元素top值
			this.moveX=0;//鼠标移动时到浏览器左边距
			this.moveY=0;//鼠标移动时到浏览器上边距
			this.parentW=parseInt(getStyle(this.obj.parentNode,"width"));
			this.parentH=parseInt(getStyle(this.obj.parentNode,"height"));
			this.endX=0;//为动画设置 每个时间点开始结束位置
			this.endY=0;
			this.startX=0;
			this.startY=0;
		}
		drag2.prototype={
			//修改构造函数指向
			constructor:drag2,
			//开始事件
			start:function(){
				var that=this;
				this.obj.onmousedown=function(e){
					var ev=e||window.event;
					that.endX=that.downX=ev.clientX;
					that.endY=that.downY=ev.clientY;
					that.offsetX=this.offsetLeft;
					that.offsetY=this.offsetTop;
					stopClient(ev);
					that.move();
					that.stop();
				}
			},
			move:function(){
				var that=this;
				document.onmousemove=function(e){
					var	ev=e||window.event;
					that.startX=that.endX;
					that.startY=that.endY;
					that.endX=that.moveX=ev.clientX;
					that.endY=that.moveY=ev.clientY;
					var left=that.moveX-that.downX+that.offsetX;
					var top=that.moveY-that.downY+that.offsetY;
					if(that.opt.side==true){
						if(left<=0){left=0;}
						if(top<=0){top=0;}
						if(left>=that.parentW-that.obj.offsetWidth){
							left=that.parentW-that.obj.offsetWidth;
						}
						if(top>=that.parentH-that.obj.offsetHeight){
							top=that.parentH-that.obj.offsetHeight;
						}
					}

					if(that.opt.x){
						that.obj.style.left=left+'px';
					}if(that.opt.y){
						that.obj.style.top=top+'px';
					}
				}
			},
			stop:function(){
				var that=this;
				document.onmouseup=function(){
				if(that.startX==0){
					that.endX=0;
				}
				if(that.startY==0){
					that.endY=0;
				}
				if(that.opt.animate==true){
					var lenX=that.endX-that.startX;
					var lenY=that.endY-that.startY;
					var xishu=0.7;
					var t=setInterval(function(){
						lenX*=xishu;
						lenY*=xishu;
						if(Math.abs(lenX)<0.01&&Math.abs(lenY)<0.01){
							clearInterval(t);
							that.startX=0;that.startY=0;
							that.endX=0;that.endY=0;
						}
						var nleft=that.obj.offsetLeft+lenX;
						var ntop=that.obj.offsetTop+lenY;
						// if(nleft<0||ntop<0||nleft>that.parentW-that.obj.offsetWidth||ntop>that.parentH-that.obj.offsetHeight){xishu*=-1}
						if(nleft<0){
							nleft=0;
							lenX*=-xishu;	
						}
						if(ntop<0){
							ntop=0;
							lenY*=-xishu;
						}
						if(nleft>that.parentW-that.obj.offsetWidth){
							nleft=that.parentW-that.obj.offsetWidth;
							lenX*=-xishu;
						}
						if(ntop>that.parentH-that.obj.offsetHeight){
							ntop=that.parentH-that.obj.offsetHeight;
							lenY*=-xishu;
						}
						that.obj.style.left=nleft+'px';
						that.obj.style.top=ntop+'px';

					},30)
				}
					document.onmousemove=null;
				}
			}
		}


		function mousewheel(obj,upfun,downfun){
		//鼠标滚轮兼容问题
		if(document.attachEvent){
			obj.attachEvent("onmousewheel",scrollFn); //IE、 opera
		}else if(document.addEventListener){
			obj.addEventListener("mousewheel",scrollFn,false);
			//chrome,safari -webkitdocument.
			obj.addEventListener("DOMMouseScroll",scrollFn,false);
			//firefox -moz-
		}

		function scrollFn(e){
			var eve=e||window.event;
			var direction=eve.detail||eve.wheelDelta;
			if(eve.preventDefault){
				eve.preventDefault();//阻止默认浏览器动作(W3C)
		 	}
			else{
				eve.returnValue = false;//IE中阻止函数器默认动作的方法
			}
			if(direction==-3||direction==120){
				if(upfun){
					upfun.call(obj);
				}
			}
			if(direction==3||direction==-120){
				if(downfun){
					downfun.call(obj);
				}
			}
		}
	}
