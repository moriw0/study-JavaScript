const studentNumberList = [];

const setTargetStudents = function(studentNumber){
  console.log(studentNumber);
  　for(let i = 1; i <= studentNumber;i++){
    studentNumberList.push(i);
    }
  }


const shuffleArray = function(){
  for(let i = studentNumberList.length; i > 0; i--){
    const randomNum = Math.floor(Math.random() * i);
    let tmp = studentNumberList[i - 1];
    studentNumberList[i - 1] = studentNumberList[randomNum];
    studentNumberList[randomNum] = tmp;
  }
}

 const showSeatBoxes = function(){
  let insertHTML = '';
  studentNumberList.forEach(function(num){
    insertHTML += '<div class="seat__item">' + num + '</div>';
  })

  document.querySelector('#seat').innerHTML = insertHTML;
 }

 const soundPlay = function(){
  const audioElement = new Audio();
  audioElement.src = 'assets/audio/drum.mp3';
  audioElement.play();

  audioElement.addEventListener('ended', function(){
    clearInterval(timer);
  })
}

document.querySelector('#btn-start').addEventListener('click', function(){
  const studentNumber = document.querySelector("#studentNumber").value;
  document.querySelector('.c-overlay').classList.add("is-closed");

  console.log(studentNumber);
  setTargetStudents(studentNumber);

  timer = setInterval(function(){
    shuffleArray();
    showSeatBoxes();
  },50);
  
  soundPlay();
});
