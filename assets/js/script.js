const studentNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
let insertHTML = ''; // 足し算した結果を保存して置く場所を確保する

for(let i = studentNumbers.length; i > 0; i--){
  const randomNum = Math.floor(Math.random() * i);
  let tmp = studentNumbers[i - 1]; 
  studentNumbers[i - 1] = studentNumbers[randomNum]; 
  studentNumbers[randomNum] = tmp;
}

console.log(studentNumbers);

studentNumbers.forEach(function(num){
  insertHTML += '<div class="seat__item">' + num + '</div>';
})

document.querySelector('#seat').innerHTML = insertHTML;
