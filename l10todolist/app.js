//Get UI
var getform = document.getElementById('form');
var gettextbox = document.getElementById('textbox');
var getul = document.getElementById('list-group');

getform.addEventListener('submit',(e)=>{
	// console.log('hay');

	addnew();

	e.preventDefault();
});


var gettodos = JSON.parse(localStorage.getItem('todos'));
// console.log(gettodos);


if(gettodos){
	gettodos.forEach(gettodo=>addnew(gettodo));
}

function addnew(todo){
	
	let todotext = gettextbox.value;
	// console.log(todotext);

	if(todo){
		todotext = todo.text;
	}

	if(todotext){

		const li = document.createElement('li');

		if(todo && todo.done){
			li.classList.add('completed');
		}

		li.appendChild(document.createTextNode(todotext));
		// console.log(li);
		getul.appendChild(li);
		gettextbox.value='';
		gettextbox.focus();


		updatelocalstorge();

		li.addEventListener('click',function(){
			li.classList.toggle('completed');
			updatelocalstorge();
		});


		li.addEventListener('contextmenu',function(e){
			li.remove();
			e.preventDefault();
			updatelocalstorge();
		});

	}
}


function updatelocalstorge(){
	var getalllis = document.querySelectorAll('li');

	// console.log(getalllis);

	const todos = [];

	getalllis.forEach(getallli=>{
		// console.log(getallli.textContent);

		todos.push({
			text:getallli.textContent,
			done:getallli.classList.contains('completed')
		});
	});

	console.log(todos);

	localStorage.setItem('todos',JSON.stringify(todos));
}