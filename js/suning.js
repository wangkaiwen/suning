window.onload=function(){
	var caidanc=getClass("caidanc");
	var caidans=getClass("caidans");
	for(var i=0;i<caidanc.length;i++){
		caidanc[i].a=i;
		caidanc[i].onmouseover=function(){
			caidans[this.a].style.display="block";
		};
		caidanc[i].onmouseout=function(){
			caidans[this.a].style.display="none";
		};
	}
	for(var j=0;j<caidans.length;j++){
		caidans[j].a=j;
		caidans[j].onmouseover=function(){
			caidans[this.a].style.display="block";
		};
		caidans[j].onmouseout=function(){
			caidans[this.a].style.display="none";
		};
	}

	var daohangc=getClass("daohangc");
	var daohangs=getClass("daohangs");
	for(var i=0;i<daohangc.length;i++){
		daohangc[i].a=i;
		daohangc[i].onmouseover=function(){
			daohangs[this.a].style.display="block";
		};
		daohangc[i].onmouseout=function(){
			daohangs[this.a].style.display="none";
		};
	}
	for(var j=0;j<daohangs.length;j++){
		daohangs[j].a=j;
		daohangs[j].onmouseover=function(){
			daohangs[this.a].style.display="block";
		};
		daohangs[j].onmouseout=function(){
			daohangs[this.a].style.display="none";
		};
	}

	var xialac=getClass("xialac");
	var xialas=getClass("xialas");
	var down=getClass("down");
	for(var i=0;i<xialac.length;i++){
		xialac[i].a=i;
		xialac[i].onmouseover=function(){
			xialas[this.a].style.display="block";
			down[this.a].innerHTML="∧"
		};
		xialac[i].onmouseout=function(){
			xialas[this.a].style.display="none";
			down[this.a].innerHTML="∨"
		};
	}
	for(var j=0;j<xialas.length;j++){
		xialas[j].a=j;
		xialas[j].onmouseover=function(){
			xialas[this.a].style.display="block";
		};
		xialas[j].onmouseout=function(){
			xialas[this.a].style.display="none";
		};
	}









var yanse= [["#7701a1","#ff9c00","#6539e6"],
			["#f39eb1","#6539e6"],
			["#ff9c00","#ebeffb","#6539e6"],
			["#ffffff","#ae0035","#f39eb1"],
			["#ebeffb","#dc083b","#7701a1"],
			["#6539e6","#ff9c00","#478ffe"],
			["#ae0035","#ffffff","#5a21bc"],
			["#dc083b"],
			["#478ffe","#7701a1","#ebeffb"],
			["#5a21bc","#ff9c00","#ae0035"],
			["#19182a","#6539e6","#dc083b"]];

var quan=document.getElementById('quanjing');
var lunbo=getClass('lunbo2')[0];	
var we=document.getElementById('daa');
var xiao=getClass('xiao',we);
var shuzi=getClass('shuzi');
var dot=getClass("ctrl-dot");
var item=getClass('title-item');
for(var i=0;i<item.length;i++){
	var ps=item[i].getElementsByTagName('p');
	var pl=ps.length;
	item[i].style.height=pl*20+'px';
}




dot[0].style.display='block';
var num1=0;
var num2=0;
var time=2000;
var	s;
function gun(){	
	s=setInterval(bb,time);
	function bb(){
		num2++;
		var xiaoxiao=getClass("xiaoxiao",xiao[num1]);	
		if(num2==xiaoxiao.length){
			num1++;
			if(num1==11){num1=0}
			clearInterval(s);
			num2=-1;time=0;
			gun();return;
		}
		var doti=$('i',dot[num1]);
		for(var k=0;k<shuzi.length;k++){
			shuzi[k].id="";
			dot[k].style.display='none';
		}
		shuzi[num1].id="shuzihot";
		dot[num1].style.display='block';
		we.style.marginLeft=-810*(num1)+'px';
		var xiaol=xiaoxiao.length;
		quan.style.background=yanse[num1][num2];
		for(var l=0;l<xiaol;l++){
			xiaoxiao[l].style.display="none";
			doti[l].className="";
		}
		doti[num2].className="dothot";
		xiaoxiao[num2].style.display="block";
		//num2++;
		if(time==0){
			clearInterval(s);
			time=2000;
			gun();
		}	
	}
}
gun();

var lunboleft=document.getElementById('lunboleft');
var lunboright=document.getElementById('lunboright');
lunbo.onmouseover=function(e){
	lunboleft.style.display="block";
	lunboright.style.display="block";
	//clearInterval(s);
}
lunbo.onmouseout=function(e){
	lunboleft.style.display="none";
	lunboright.style.display="none";
	//gun();
}
for(var j=0;j<shuzi.length;j++){
	shuzi[j].index=j;
	shuzi[j].onmouseover=function(e){
		var ev=e||window.event;
		var yuan=ev.srcElement||ev.target;

		num1=this.index;
		clearInterval(s);

		for(var k=0;k<shuzi.length;k++){
			shuzi[k].id="";
			dot[k].style.display='none';
			item[k].style.display='none';
		}

		we.style.marginLeft=-810*this.index+'px';
		this.id="shuzihot";
		item[this.index].style.display='block';

		var itemp=$('p',item[num1]);
		var xiaoxiao=getClass("xiaoxiao",xiao[num1]);	
		if(yuan.className=='shuzi'){
			num2=0;
			quan.style.background=yanse[num1][0];
			for(var l=0;l<xiaoxiao.length;l++){
				xiaoxiao[l].style.display="none";
			}
			xiaoxiao[0].style.display='block';
			var pi=$('i',itemp[0])[0];
			pi.style.background='orange';
		}

		for(var i=0;i<itemp.length;i++){
			itemp[i].index=i;
			itemp[i].onmouseover=function(e){
				var ev=e||window.event;
				var yuan=ev.srcElement||ev.target;
				num2=this.index;
				quan.style.background=yanse[num1][num2];
				for(var l=0;l<xiaoxiao.length;l++){
					var pi=$('i',itemp[l])[0];
					pi.style.background='#fff';
					xiaoxiao[l].style.display="none";
				}
				var pi=$('i',this)[0];
				pi.style.background='orange';
				xiaoxiao[num2].style.display="block";
			}
			itemp[i].onmouseout=function(){
				var pi=$('i',this)[0];
				pi.style.background='#fff';
			}
		}
		
		
		
		
	}
	shuzi[j].onmouseout=function(){
		for(var k=0;k<shuzi.length;k++){
			dot[k].style.display='none';
			item[k].style.display='none';
		}
		dot[this.index].style.display='block';
		var doti=$('i',dot[this.index]);
		for(var i=0;i<doti.length;i++){
			doti[i].className='';
		}
		doti[num2].className='dothot';
		gun();
	}
}


lunboright.onmouseover=lunboleft.onmouseover=function(){
	clearInterval(s);
}
lunboright.onmouseout=lunboleft.onmouseout=function(){
	gun();
}
lunboright.onclick=function(){
	var xiaoxiao=getClass("xiaoxiao",xiao[num1]);	
	num2++;
	if(num2==xiaoxiao.length){
		num2=0;
		num1++;
		if(num1==11){num1=0};
	}
	xiaoxiao=getClass("xiaoxiao",xiao[num1]);	
	var doti=$('i',dot[num1]);
		for(var k=0;k<shuzi.length;k++){
			shuzi[k].id="";
			dot[k].style.display='none';
		}
		shuzi[num1].id="shuzihot";
		dot[num1].style.display='block';
		we.style.marginLeft=-810*(num1)+'px';
		var xiaol=xiaoxiao.length;
		quan.style.background=yanse[num1][num2];
		for(var l=0;l<xiaol;l++){
			xiaoxiao[l].style.display="none";
			doti[l].className="";
		}
		doti[num2].className="dothot";
		xiaoxiao[num2].style.display="block";
		
}
lunboleft.onclick=function(){
	var xiaoxiao=getClass("xiaoxiao",xiao[num1]);	
	num2--;
	if(num2<0){
		num1--;if(num1<0){num1=10}
		xiaoxiao=getClass("xiaoxiao",xiao[num1]);	
		num2=xiaoxiao.length-1;	
	}
	
	var doti=$('i',dot[num1]);
		for(var k=0;k<shuzi.length;k++){
			shuzi[k].id="";
			dot[k].style.display='none';
		}
		shuzi[num1].id="shuzihot";
		dot[num1].style.display='block';
		we.style.marginLeft=-810*(num1)+'px';
		var xiaol=xiaoxiao.length;
		quan.style.background=yanse[num1][num2];
		for(var l=0;l<xiaol;l++){
			xiaoxiao[l].style.display="none";
			doti[l].className="";
		}
		doti[num2].className="dothot";
		xiaoxiao[num2].style.display="block";
		
		
}















var on=getClass('on');
var off=getClass('off');
var maindol1=getClass("main-dol1");
var maindol2=getClass("main-dol2");

for(var j=0;j<on.length;j++){
	on[j].index=j;
	on[j].onmouseover=function(){
		maindol1[this.index].style.display="block";
		maindol2[this.index].style.display="none";
		on=getClass('on');
		on[this.index].className="off";
		this.className="on";		
	}

}
for(var l=0;l<off.length;l++){
	off[l].index=l;
	off[l].onmouseover=function(){
		maindol1[this.index].style.display="none";
		maindol2[this.index].style.display="block";on=getClass('on');
		on[this.index].className="off";
		this.className="on";
	}
}

var pager=getClass('pager');
var share1s=getClass('share1');
var divW=share1s[0].offsetWidth;
var len=share1s.length;
for(var i=1;i<len;i++){
		share1s[i].style.left=divW+"px";
}
var now=0;//当前图片下标
var pageflag=true;
var pagerlen=pager.length;
for(var i=0;i<pagerlen;i++){
	pager[i].index=i;
	pager[i].onmouseover=function (){
		if(now==this.index||!pageflag){
			return
		}
		pageflag=false;
		if(now<this.index){
			share1s[this.index].style.left=divW+"px";
			animate(share1s[now],{left:-divW},300);
		}else{
			share1s[this.index].style.left=-divW+"px";
			animate(share1s[now],{left:divW},300);
		}
		animate(share1s[this.index],{left:0},300,Tween.Linear,function(){
			pageflag=true;
		});
		pager[now].style.background="#fff";
		pager[this.index].style.background="#fa0";
		now=this.index;
	}
}

var zuo=document.getElementById("zuo");
var you=document.getElementById("you");
var next=0;
zuo.onclick=function (){
	next--;
	if(!pageflag){return;}
	if(next<0){
		next=pagerlen-1;
	}
	pageflag=false;
	share1s[next].style.left=-divW+"px";
	animate(share1s[now],{left:divW},300);
	animate(share1s[next],{left:0},300,Tween.Linear,function(){
		pageflag=true;
	});
	pager[now].style.background="#fff";
	pager[next].style.background="#fa0";
	now=next;	
}
you.onclick=function (){
	next++;
	if(!pageflag){return;}
	if(next==pagerlen){
		next=0;
	}
	pageflag=false;
	share1s[next].style.left=divW+"px";
	animate(share1s[now],{left:-divW},300);
	animate(share1s[next],{left:0},300,Tween.Linear,function(){
		pageflag=true;
	});
	pager[now].style.background="#fff";
	pager[next].style.background="#fa0";
	now=next;	
}
var share=getClass("share")[0];
share.onmouseover=function (){
	zuo.style.display="block";
	you.style.display="block";
}
share.onmouseout=function (){
	zuo.style.display="none";
	you.style.display="none";
}
zuo.onmouseover=function (){
	zuo.style.opacity=0.8;
}
zuo.onmouseout=function (){
	zuo.style.opacity=0.7;
}
you.onmouseover=function (){
	you.style.opacity=0.8;
}
you.onmouseout=function (){
	you.style.opacity=0.7;
}


	var srcollfix=getClass("srcollfix")[0];
	var floorfix=getClass("floorfix")[0];
	var flag1=true;//保证每次下拉的时候开关都是开着的
	var flag2=true;
	var obj=document.documentElement.scrollTop?document.documentElement:document.body;
	

	
	var louceng=getClass("floor");
	var louding=louceng[0].offsetTop;
	var floornum=getClass("floornum");
	var floorheight=louceng[0].offsetHeight+25;
	
	var cW=document.documentElement.clientWidth;
	window.onresize=function(){
		cW=document.documentElement.clientWidth;
		if(cW<1190){
			floorfix.style.display="none";
		}
		else{
			floorfix.style.display="block";
		}
	}


	
	window.onscroll=function (){
		var obj=document.documentElement.scrollTop?document.documentElement:document.body;
		if(cW>=1190){

			if(obj.scrollTop>=230){
				if(obj.scrollTop>=louceng[0].offsetTop-200&&obj.scrollTop<=louceng[9].offsetTop+300){
					floorfix.style.display="block";
				}
				if(obj.scrollTop<louceng[0].offsetTop-200||obj.scrollTop>louceng[9].offsetTop+300){
					floorfix.style.display="none";
				}
				if(flag1){
					animate(srcollfix,{top:0},500,Tween.Linear)
					flag1=false;
					flag2=true;
				}
			}else{		
				if(flag2){
					animate(srcollfix,{top:-54},100,Tween.Linear);
					flag1=true;
					flag2=false;
				}	
			}
		}
		

		

		for(m=0;m<louceng.length;m++){
			louceng[m].index=m;
			floornum[m].g1=louding+floorheight*m-200;
			floornum[m].g2=louding+floorheight*(m+1)-200;
			if(obj.scrollTop>=louceng[m].offsetTop-200){
				for(n=0;n<floornum.length;n++){
					floornum[n].style.background="#eee";
					floornum[n].style.color="#222";
				}
				floornum[m].style.background="orange";
				floornum[m].style.color="#fff";
			}
		}

		for(var f=0;f<floornum.length;f++){
			floornum[f].index=f;
			floornum[f].onclick=function(){
				for(var g=0;g<floornum.length;g++){
					floornum[g].style.background="#eee";
					floornum[g].style.color="#222";
				}
				this.style.background="orange";
				this.style.color="#fff"
				animate(obj,{scrollTop:louceng[this.index].offsetTop-100},300,Tween.Linear);
			}
		}
	}

	var bian=getClass("bian");
	var bians=getClass("bians");
	var gouwucheli=getClass('gouwucheli')[0];
	var gouwuchelogo=getClass('gouwuchelogo')[0];
	gouwucheli.onmouseover=function (){
		gouwuchelogo.style.backgroundPosition='4px -27px';
	}
	gouwucheli.onmouseout=function (){
		gouwuchelogo.style.backgroundPosition='-31px -27px';
	}
	for(var i=0;i<bian.length;i++){
		bian[i].index=i;
		bian[i].onmouseover=function (){
			if(this.index!=5){
				bians[this.index].style.background="#ffaa01";
				bians[this.index].style.color="#383838";
			}
			var bs=getFirst(bians[this.index]);
			var bh=getStyle(bs,"width");
			
			animate(bians[this.index],{width:bh},300,Tween.Linear);
			
		}
		bian[i].onmouseout=function (){
			if(this.index!=5){
				bians[this.index].style.background="#383838";
				bians[this.index].style.color="#ffaa01";
			}
			
			//bians[this.index].style.display="none";
			animate(bians[this.index],{width:0},300,Tween.Linear)
		}

	}


















}