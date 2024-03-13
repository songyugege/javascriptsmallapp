//GET uI
let gettablinks = document.getElementsByClassName('tablinks'),
	gettabpanels = document.getElementsByClassName('tab-panel'),
	getbtnclose = document.querySelectorAll('.btn-close');


	// console.log(gettablinks);
	// console.log(gettablinks[0]);

	// console.log(gettabpanels);

let tabpanels = Array.from(gettabpanels);
	// console.log(tabpanels);

function gettab(evn,link){
	// console.log(evn.target);
	// console.log(evn.currentTarget);
	// console.log(link);


	// Remove Active
	for(var x=0; x < gettablinks.length; x++){
		// console.log(x); //0 to 3

		// remove active 
		gettablinks[x].className = gettablinks[x].className.replace(' active','');

		// hide tabpanebox from btn-close 
		getbtnclose[x].addEventListener('click',function(){
			this.parentElement.style.display= "none";
		});	

	}


	// Add Active 

	// evn.target.className = "tablinks active";
	// evn.target.className = "active";
	// evn.currentTarget.className += " active";
	// evn.target.className = evn.target.className.replace('tablinks','tablinks active');
	evn.target.classList.add('active');


	// Hide panel 
	tabpanels.forEach(function(tabpanel){
		tabpanel.style.display= "none";
	});


	// Show panel
	document.getElementById(link).style.display= "block";


	

}


document.getElementById('autoclick').click();