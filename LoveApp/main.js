window.onload = function(){
	let submitBtn = document.getElementById('btn');
	submitBtn.addEventListener('click', getValueOfSexAndName);
}

function onFocus(){
	document.getElementById("form").style.marginLeft= "40px";
	
}
function getValueOfSexAndName(){
	let maleOrFemale = document.getElementById('sex');
	let name = document.getElementById('name');
	let letter = "[A-Za-z]{4,15}";	
	

	//check to validate only alphabet
	if(name.value.match(letter) &&
		maleOrFemale.value.toLowerCase() === "male"||
		maleOrFemale.value.toLowerCase() === "female"){
		startApp(maleOrFemale, name);
			
	}else{
		let p = document.createElement('p');
		let text = document.createTextNode("Fill out only male or female, and name with only 4 to 15 characters");
		p.id = 'input-p1';
		p.appendChild(text);
		document.getElementById('form').appendChild(p);
	}	
}
function startApp(maleOrFemale, name){
	let loveApp = new Love();
	let wrapper =document.getElementById('wrapper'); 
	document.getElementById('form').style.display = 'none';

	loveApp.checkHeorShe(maleOrFemale.value, name.value);
	let getRandomText = loveApp.checkForRandomText();

	let container1 = loveApp.createContainer("1");
	let h1 = loveApp.createHeadingOne();
	container1.appendChild(h1);

	let firstImage = loveApp.createList("1");
	let secondImage = loveApp.createList("2");
	let thirdImage = loveApp.createList("3");
	
	//add another three image to container2 as childs.
    let childOfContainer1 =loveApp.addParaToContainer(container1, firstImage, secondImage, thirdImage);
	wrapper.appendChild(childOfContainer1);


	let getValueOfInterVal = loveApp.setOnclickOnParagraph(getRandomText);
	//the popup going back to menu;
	let anchor = loveApp.createAnchorTag();
	//let childOfContainer2= loveApp.createChildOfContainer2();
	//container2.appendChild(childOfContainer2);
	//addcontainer2 
	//to wrapper;
	wrapper.appendChild(anchor);

	//end the program wtih try again
	//loveApp.setAnimationForContainer2();
}





































