window.onload = function(){
	let navLi = document.querySelectorAll(".nav a");
	let liLenght = navLi.length;
	for(let i = 0;i < liLenght;i ++){
		navLi[i].onclick = function(){
			for(let j=0;j<liLenght;j++){
				navLi[j].classList.remove("red");
			}
			this.classList.add("red");
			console.log(this);
		}
	}
	// 导航栏固定
	let nav = document.querySelector(".nav");
	window.addEventListener("scroll",function(){
		let scrollTop = document.documentElement.scrollTop + document.body.scrollTop;
		if(scrollTop >= 1524){
			nav.style.width = "100%";
			nav.style.position = "fixed";
			nav.style.top = "-20px";
			nav.style.borderRadius = "0";
		}else{
			nav.style.width = "80%";
			nav.style.position = "static";
			nav.style.borderRadius = "10px";
			nav.style.transition = "none";
		}
	});
	// let slide_five_location =   document.querySelector(".section_five_content").getBoundingClientRect().top;
	// console.log(slide_five_location);
	// 下面是各个的锚点位置
	document.querySelector('.slide_one').addEventListener("click",function(e){
		e.preventDefault();
		window.scroll({ top: 1745-230, left: 0, behavior: 'smooth' });   
	});
	document.querySelector('.slide_two').addEventListener("click",function(e){
		e.preventDefault();
		window.scroll({ top: 2306-360, left: 0, behavior: 'smooth' });   
	});
	document.querySelector('.slide_three').addEventListener("click",function(e){
		e.preventDefault();
		window.scroll({ top: 4350, left: 0, behavior: 'smooth' });   
	});
	document.querySelector('.slide_four').addEventListener("click",function(e){
		e.preventDefault();
		window.scroll({ top: 5000, left: 0, behavior: 'smooth' });   
	});
	document.querySelector('.slide_five').addEventListener("click",function(e){
		e.preventDefault();
		window.scroll({ top: 5546, left: 0, behavior: 'smooth' });   
	});
}
