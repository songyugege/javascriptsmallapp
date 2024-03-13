//Get UI

const database = [
    {
        question:"Chosse Traffic Light ?",
        a:"./img/traffic.jpg",
        b:"./img/mountain.jpg",
        c:"./img/ambulance.jpg",
        d:"./img/airport.jpg",
        correctanswer:"a" 
    },
    {
        question:"Chosse Mountain ?",
        a:"./img/ambulance.jpg",
        b:"./img/mountain.jpg",
        c:"./img/traffic.jpg",
        d:"./img/airport.jpg" ,
        correctanswer:"b" 
    },
    {
        question:"Chosse Ambulance Truck ?",
        a:"./img/ambulance.jpg",
        b:"./img/airport.jpg",
        c:"./img/traffic.jpg",
        d:"./img/mountain.jpg"  ,
        correctanswer:"a"
    },
    {
        question:"Chosse Airport ?",
        a:"./img/traffic.jpg",
        b:"./img/mountain.jpg",
        c:"./img/ambulance.jpg",
        d:"./img/airport.jpg"  ,
        correctanswer:"d"
    },
];


// console.log(database);
// console.log(database[0].b);

const getcontainer = document.querySelector('.container');
const getquestion = document.querySelector('.question');
const getinputs = document.querySelectorAll('.answer'); //Nodelist

const geta_img = document.getElementById('a_img'),
        getb_img = document.getElementById('b_img'),
        getc_img = document.getElementById('c_img'),
        getd_img = document.getElementById('d_img');


const getbtn = document.querySelector('.btn');

let currentidx = 0;
let score = 0;



startquestion();

function startquestion(){

    removeselected();

    const currentqes = database[currentidx];

    getquestion.textContent = currentqes.question;
    geta_img.src = currentqes.a;
    getb_img.src = currentqes.b;
    getc_img.src = currentqes.c;
    getd_img.src = currentqes.d;

}



function getsingleinput(){

    let answer; 

    getinputs.forEach(function(getinput){
        // console.log(getinput);
        // console.log(getinput.id);

        if(getinput.checked){
            // console.log(getinput.id);
            answer = getinput.id;
        }

    });

    // console.log(answer);
    return answer;

}

getbtn.addEventListener('click',function(){

    // console.log('i am working');

    const getanswer = getsingleinput();
    // console.log(getanswer);

    if(getanswer){

        // question 0
        // currentidx 0 

        if(getanswer === database[currentidx].correctanswer){
            score++;
        }

        currentidx++;
        // console.log(currentidx);

        // question 1 
        
        // 0 1 2 3 < 4 
        if(currentidx < database.length){
            startquestion();
        }else{
            // console.log(score);

            getcontainer.innerHTML = `
            <h3>Total Score : ${score*25}</h3>
            <h4>You answered correctly at ${score}/${database.lenght} questions.</h4>
            <!-- <button type="button" class="btn" ondblclick="window.location.reload();">Double Click to Reload</button> -->
             <button type="button" class="btn" onclick="doubleclick();">Double Click to Reload</button> 
           
            `;
        
        }

    }else{
        window.alert('Chooser One Answer');
    }


});



function removeselected(){
    getinputs.forEach(function(getinput){
        return getinput.checked = false;
    });
}


let clicktimes = 0;

function doubleclick(){
    console.log('hay');

    // console.log(clicktimes);


    if(clicktimes === 0){

        clicktimes = Date.now();
        // console.log(clicktimes);

    }else{

        if((Date.now() - clicktimes) <1000){

            window.location.reload();
            clicktimes = 0;
        }else{
            clicktimes = Date.now();
        }

    }



}