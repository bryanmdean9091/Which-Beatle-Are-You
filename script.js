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
    if (timesClicked === 1) {
        submit();
    } else if (timesClicked === 2) {
        submit2()
    } else if (timesClicked === 3) {
        submit3()
    } else if (timesClicked === 4) {
        submit4()
    } else {
        resultTime()
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
    document.getElementById('one').innerHTML = 'Collaborate, but know what you want';
    document.getElementById('two').innerHTML = 'Take control of the situation';
    document.getElementById('three').innerHTML = 'Work things out on your own';
    document.getElementById('four').innerHTML = 'Go with the flow and do what is needed';
    value()
    uncheckRadio()
};

function submit2() {
    document.getElementById('questions').innerHTML = 'Which of these best describes you?';
    document.getElementById('one').innerHTML = 'Intellectual';
    document.getElementById('two').innerHTML = 'Workaholic';
    document.getElementById('three').innerHTML = 'Spiritual';
    document.getElementById('four').innerHTML = 'Affable';
    value()
    uncheckRadio()
};

function submit3() {
    document.getElementById('questions').innerHTML = 'fourth question asked here:';
    document.getElementById('one').innerHTML = 'fsdsdgfsdgsdgdgdg';
    document.getElementById('two').innerHTML = 'dgdgdgdgadfgafdhga';
    document.getElementById('three').innerHTML = 'siojfshfidhgfaogvds';
    document.getElementById('four').innerHTML = 'dhfjlkhfajkdhfakdjf';
    value()
    uncheckRadio()
};

function submit4() {
    document.getElementById('questions').innerHTML = 'fifth question asked here:';
    document.getElementById('one').innerHTML = 'fsdsdgfsdgsdgdgdg';
    document.getElementById('two').innerHTML = 'dgdgdgdgadfgafdhga';
    document.getElementById('three').innerHTML = 'siojfshfidhgfaogvds';
    document.getElementById('four').innerHTML = 'dhfjlkhfajkdhfakdjf';
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
    setTimeout( result2, 2200)
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