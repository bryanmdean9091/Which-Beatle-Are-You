let startBtn = document.getElementById('startBtn');

function uncheckRadio() {
    let choice = document.getElementsByName('answer')
    for (i = 0; i < choice.length; i++) {
        if (choice[i].checked = true)
            choice[i].checked = false;
    }
};


let btn = document.getElementById('submitAnswer');
let timesClicked = 1;

function btnClicks() {
    let valdt = document.forms['myForm']['answer'];
    let validate = (valdt[0].checked==false && valdt[1].checked==false && valdt[2].checked==false && valdt[3].checked==false)

    if (timesClicked === 1) {
        if (validate) {
            alert('Please Make a Selection') 
            timesClicked =0
        } else{
        submit()}
    } else if (timesClicked === 2) {
        if(validate) {
            alert('Please Make a Selection')
            timesClicked =1;
        } else{
        submit2()}
    } else if (timesClicked === 3) {
        if (validate) {
            alert('Please Make a Selection')
            timesClicked =2;
        } else{
        submit3()}
    } else if (timesClicked === 4) {
        if (validate) {
            alert('Please Make a Selection')
            timesClicked=3;
        }else{
        submit4()}
    } else {
        if (validate) {
            alert('Please Make a Selection')
            timesClicked =4;
        }else{
        resultTime()}
    }
    timesClicked++
};



let list = []

function value() {
    let beatle = document.forms[0];
    let arr = [];
    let i;

    for (i = 0; i < beatle.length; i++) {
        if (beatle[i].checked) {
            arr = beatle[i].value
            list.push(beatle[i].value)
            console.log(arr);
            console.log(list)
        }
    }
};

function listUp() {
    for (const elem of list)
        console.log(elem);

    let duplicates = {};
    max = '';
    maxi = 0;
    list.forEach((el) => {
        duplicates[el] = duplicates[el] + 1 || 1;
        if (maxi < duplicates[el]) {
            max = el;
            maxi = duplicates[el];
        }
    })
};

function startQuiz() {
    document.getElementsByClassName('contain')[0].classList.remove('show');
    document.getElementsByClassName('contain')[0].classList.add('hidden');
    document.getElementsByClassName('contain2')[0].classList.remove('hidden')
};

function submit() {
    document.getElementById('questions').innerHTML = 'In a team situation, you usually:';
    document.querySelector('#span1').innerHTML = 'Collaborate, but know what you want';
    document.querySelector('#span2').innerHTML =  'Take control of the situation';
    document.querySelector('#span3').innerHTML  = 'Work things out on your own';
    document.querySelector('#span4').innerHTML  = 'Go with the flow and do what is needed';
    value()
    uncheckRadio()
};

function submit2() {
    document.getElementById('questions').innerHTML = 'Which of these best describes you?';
    document.querySelector('#span1').innerHTML = 'Intellectual';
    document.querySelector('#span2').innerHTML = 'Workaholic';
    document.querySelector('#span3').innerHTML  = 'Spiritual';
    document.querySelector('#span4').innerHTML  = 'Affable';
    value()
    uncheckRadio()
};

function submit3() {
    document.getElementById('questions').innerHTML = 'Which do you prefer for Relaxation?:';
    document.querySelector('#span1').innerHTML = 'Hiding away indoors';
    document.querySelector('#span2').innerHTML = 'Going out to museums';
    document.querySelector('#span3').innerHTML  = 'Traveling & learning about other cultures';
    document.querySelector('#span4').innerHTML  =  'Having a night on the town';
    value()
    uncheckRadio()
};

function submit4() {
    document.getElementById('questions').innerHTML = 'Which type of movie do you prefer?';
    document.querySelector('#span1').innerHTML = 'Avant garde';
    document.querySelector('#span2').innerHTML = 'Musicals';
    document.querySelector('#span3').innerHTML  = 'Satire';
    document.querySelector('#span4').innerHTML  = 'Screwball Comedies'; 
    value()
    uncheckRadio()
};

function replay() {
    location.reload()
};

function resultTime() {
    value()
    listUp()
    document.getElementById('long').src = "https://player.vimeo.com/video/760640253?h=483799ddc7&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&autopause=0&loop=0&muted=0";
    setTimeout( result2, 2100)
    function result2() {
    document.getElementsByClassName('contain2')[0].classList.remove('bg');    
    document.getElementsByClassName('questionsBox')[0].classList.add('hidden');
    document.getElementsByClassName('waiting')[0].classList.remove('hidden');
    document.getElementsByClassName('waiting2')[0].classList.remove('hidden');
    document.getElementsByClassName(`${max}Vid`)[0].classList.remove('hidden');
    document.getElementsByClassName('submitAnswer')[0].classList.add('hidden');
    if (max === 'John') {
        JohnVidz()
    } else if (max === 'Paul') {
        PaulVidz()
    } else if (max === 'George') {
        GeorgeVidz()
    } else if (max === 'Ringo') {
        RingoVidz()
    }}
    setTimeout(result3, 7000)

    function result3() {
        document.getElementById('long').src = '';
        document.getElementsByClassName('contain2')[0].classList.remove('show');
        document.getElementsByClassName('contain2')[0].classList.add('hidden'),
        document.getElementsByClassName('contain')[0].classList.remove('hidden');
        document.getElementsByClassName('pepper')[0].classList.add('hidden');
        document.getElementsByClassName('start1')[0].classList.add('hidden');
        document.getElementsByClassName('pageResult')[0].classList.remove('hidden');
        document.getElementById('pageResult').innerHTML = `You are a ${max}!`;
        document.getElementsByClassName('reset')[0].classList.remove('hidden');

    }
};

function JohnVidz() {
    document.getElementById(`${max}`).src = "https://player.vimeo.com/video/760620388?h=8d4250da2b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&autopause=0&loop=1&muted=0";
}

function PaulVidz() {
    document.getElementById(`${max}`).src = "https://player.vimeo.com/video/760618087?h=d94f7682ec&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&autopause=0&loop=1&muted=0";
}

function GeorgeVidz() {
    document.getElementById(`${max}`).src = "https://player.vimeo.com/video/760619326?h=93e4c929fd&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&autopause=0&loop=1&muted=0";
}

function RingoVidz() {
    document.getElementById(`${max}`).src = "https://player.vimeo.com/video/760617454?h=3f10f48b21&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&autopause=0&loop=1&muted=0";
}
// function waitSong() {
   
// }