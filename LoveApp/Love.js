class Love{
	constructor(){
		this._heOrShe = "";
		this._sex = "";
		this._name = name;
		this._boolean = true;
		this._getValueOfInterval = 0;
		this._array = ["friendZone ",
						"loves you",
						"hates you"];
	}
	createContainer(i){
		let container = document.createElement('div');
		//give div the id
		container.id = 'container'+i;
		return container;
	}
	createList(numb){
		let p = document.createElement("p");
		let li = document.createElement('li');
		
		li.id = "list"+numb;
		p.id = 'p'+numb;

		let div = document.createElement('div');
		div.id ="threeDimage";
	
		div.appendChild(li);
		div.appendChild(p);
		return div;
	}
	createHeadingOne(){
		let h1 = document.createElement("h1");
		h1.textContent = "Pick "+this._sex+" thoughts below";
		h1.id = "js_h1";
		h1.style.color = "white";
		h1.style.fontWeight = "60";
		return h1;
	}
	addParaToContainer(p_Container2, p_P1, p_P2, p_P3){
		p_Container2.appendChild(p_P1);
		p_Container2.appendChild(p_P2);
		p_Container2.appendChild(p_P3);

		return p_Container2;
	}
	createAnchorTag(){	
		let aTag = document.createElement('a');
		aTag.id = "theEndMenuAnchorTag";
		
		return aTag;

	}
	checkHeorShe(sex, heOrshe){
		this._sex = sex;
		this._heOrshe = heOrshe;

		if(this._sex.toLowerCase() === "female"){
			this._sex = "her";
			this._heOrshe = "She ";
		}else if(this._sex.toLowerCase() === 'male'){
			this._sex = "his";
			this._heOrshe = "He ";

		}
	}
	checkForRandomText(){
		let randomNumb = Math.floor(Math.random() * 3);   
		let randomText = "";
		let heOrShe = this._heOrshe;
			
		if(randomNumb === 0){
			randomText = this._array[0];
		}else if(randomNumb === 1){
			randomText = heOrShe + this._array[1];
		}else if(randomNumb === 2){
			randomText = heOrShe + this._array[2];
		}
		return randomText;
	}
	setOnclickOnParagraph(randomText){
		let li = document.querySelectorAll('li');
		let i = 50;
		let boolea = true;

		for(let i=0;i<li.length;i++){
			li[i].addEventListener('click', function(){
				if(boolea === true){
						if(i == 0){
							getAnimation("list1", "p1");
						}else if(i==1){
							getAnimation('list2', "p2");
						}else{
							getAnimation('list3', "p3");
						}
					boolea = false;
				}
			
			});
		}
				//style the boxes
		function boxes(list){
			//dissplay the text with paragrap;
			let box = document.getElementById(list);
			box.style.background = "red";
			box.style.borderRadius = "20px";
			box.style.borderColor = "red";	
		}

		function getAnimation(list, p){
			let interval = setInterval(boxesAnimation,50);	
			function boxesAnimation(){
				document.getElementById(list).style.transform = 'rotateY('+i+'deg)';
				i+=5;
					if(i == 365){
						clearInterval(interval);
						document.getElementById(list).style.display = "none";
						boxes(p);
						document.getElementById(p).innerHTML = randomText;
						getAnimationForContainer2();	
					}
			}
		}

		function getAnimationForContainer2(){
			let x = 5;
			let tryAgain = "Try Again";
			let interval = setInterval(function(){
				document.getElementById('container1').style.display = 'none';
				//document.getElementById('wrapper').style.background = 'black';
				let anchor = document.getElementById('theEndMenuAnchorTag');
				anchor.setAttribute('href',"index.html");
				anchor.innerHTML = "Try Again";
				anchor.style.transform = 'scale('+x+')';
				anchor.style.color = 'white';
				anchor.style.border = "2px solid #E0115F";
				anchor.style.background = "#E0115F";
				if(x === 5){
					clearInterval(interval);
				}
				//linkTOMain();
			},5000);
		}

		
		// function linkTOMain(){
		// 	let container2 = document.getElementById('container2');
		// 	container2.addEventListener('click', function(){
		// 		container2.link('index.html');
		// 	});
		// }

	}
	
}


















