const studentNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

 const shuffleArray = function(){
  for(let i = studentNumbers.length; i > 0; i--){
    const randomNum = Math.floor(Math.random() * i);
    let tmp = studentNumbers[i - 1];
    studentNumbers[i - 1] = studentNumbers[randomNum];
    studentNumbers[randomNum] = tmp;
  }
 }

 const showSeatBoxes = function(){
  let insertHTML = '';
  studentNumbers.forEach(function(num){
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

// document.querySelector('#btn-start').addEventListener('click', function(){
//   timer = setInterval(function(){
//     shuffleArray();
//     showSeatBoxes();
//   },500);
  
//   soundPlay();
// });
