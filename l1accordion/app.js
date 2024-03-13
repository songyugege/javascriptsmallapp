const getacctitles = document.getElementsByClassName('acctitle');
// console.log(getacctitles); //HTMLCollection
const getactivecontents = document.querySelectorAll('.acccontent');
// console.log(getcontents); //Nodelist

// console.log(getacctitles.length); //4

// console.log(getacctitles.length[0]);
// console.log(getacctitles.length[1]);
// console.log(getacctitles.length[2]);
// console.log(getacctitles.length[3]);

for(var x=0; x < getacctitles.length;x++){
	// console.log(x);
	// console.log(getacctitles);

	getacctitles[x].addEventListener('click',function(e){

		// console.log('hay');

		// console.log(e);
		// console.log(e.target);
		// console.log('this');

		// e.target.classList.toggle('active');
		this.classList.toggle('active'); 

							// acctitle acccontent
		const getcontent = this.nextElementSibling; 
		// console.log(getcontent);
		// console.log(getcontent.scrollHeight+"px");   

		// getcontent.style.height = getcontent.scrollHeight+"px";


		if(getcontent.style.height){
			// remove
			getcontent.style.height = null;
		}else{
			// add
			getcontent.style.height = getcontent.scrollHeight+"px";
		}                    

	});


		if(getacctitles[x].classList.contains('active')){
			getactivecontents[x].style.height = getactivecontents[x].scrollHeight+"px";
		}

}