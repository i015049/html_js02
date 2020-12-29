const quiz = [
  {
    question: 'ゲーム市場、最も売れたゲーム機は？',
    answers: [
      'スーパーファミコン', 
      'プレイステーション２', 
      'ニンテンドースイッチ', 
      'ニンテンドーDS'
    ],
    correct: 'ニンテンドーDS'
  }, {
    question: '問題２',
    answers: [
      'スーパーファミコン', 
      'プレイステーション２', 
      'ニンテンドースイッチ', 
      'ニンテンドーDS'
    ],
    correct: 'ニンテンドーDS'
  }, {
    question: '問題３',
    answers: [
      'スーパーファミコン', 
      'プレイステーション２', 
      'ニンテンドースイッチ', 
      'ニンテンドーDS'
    ],
    correct: 'ニンテンドーDS'
  }, {
    question: '問題４',
    answers: [
      'スーパーファミコン', 
      'プレイステーション２', 
      'ニンテンドースイッチ', 
      'ニンテンドーDS'
    ],
    correct: 'ニンテンドーDS'
  }
];
const quizLength = quiz.length;
let quizIndex = 0;


const $button = document.getElementsByTagName('button');
// const buttonLength = $button.Lenght;
let buttonLength = $button.length;

// クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  } 
}
setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解');
  } else{
    window.alert('不正解');
  }

  quizIndex++;

  if(quizIndex < quizLength){
   setupQuiz();
  } else {
   window.alert('終了');
  }
};

// ボタンをクリックしたら正解判定
let handleIndex = 0;
let answersLen = quiz[quizIndex].answers.length;

while (handleIndex < answersLen){
  $button[handleIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}
