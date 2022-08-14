const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

//move on to the next randomly selected questiom
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

//display questions
function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}


//move on to the next random question
function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

//display the text inside the questions
function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

//change color
function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}


//allocate questions
const questions = [
    {
      question: 'What is the real name of Augustus Caeser',
      answers: [
        {text:'Caeser Octavian',correct:false},
        {text: 'Gaius Octavian',correct:true},
        {text: 'Gaius Augustus',correct:false},
        {text: 'Julius Caeser',correct:false}
      ]
    },

    {
      question: 'Who is known to be the cruelist Roman Emperor',
      answers: [
        { text: 'Caligula', correct: true },
        { text: 'Claudius', correct: false },
        { text: 'Nero', correct: false },
        { text: 'Romulus', correct: false }
      ]
    },

    {
      question: 'Who had the shortest reign as Emperor',
      answers: [
        { text: 'Louis XIV', correct: false },
        { text: 'Caligula', correct: true },
        { text: 'Augustus', correct: false },
        { text: 'Nero', correct: false }
      ]
    },
    {
      question: 'Who is the last Emperor in the Julio-Claudis Dynasty?',
      answers: [
        { text: 'Constantine XI Palaiologos', correct: false },
        { text: 'Nero', correct: true },
        { text: 'Augustus', correct: false },
        { text: 'Constantine I', correct: false }
      ]
    },
    {
        question: 'What is the full name of Nero',
        answers: [
          { text: 'Dead Weight', correct: false },
          { text: 'Nero', correct: false },
          { text: 'Nero Claudius Caesar Augustus Germanicus', correct: true },
          { text: 'UMU', correct: false }
        ]
    },
    {
        question: 'Where is Rome located',
        answers: [
          { text: 'Italy', correct: true },
          { text: 'Egypt', correct: false },
          { text: 'America', correct: false },
          { text: 'Germany', correct: false }
        ]
    },
    {
        question: 'Who is the Legendary Founder of Rome',
        answers: [
          { text: 'Remus', correct: false },
          { text: 'Nero', correct: false },
          { text: 'Romulus', correct: true },
          { text: 'Julius Caeser', correct: false }
        ]
    },
    {
        question: 'What is the full name of Nero',
        answers: [
          { text: 'Dead Weight', correct: false },
          { text: 'Nero', correct: false },
          { text: 'Nero Claudius Caesar Augustus Germanicus', correct: true },
          { text: 'UMU', correct: false }
        ]
    },
    {
        question: 'After which military event did Augustus declare himself the Emperor',
        answers: [
          { text: 'The Punic War', correct: false },
          { text: 'Battle of Actium', correct: true },
          { text: 'Caesars Civil War', correct: false },
          { text: 'Holy Grail War', correct: false }
        ]
    },
    {
        question: 'How many Emperors were inside the Julio-Claudius Dynasty',
        answers: [
          { text: '4', correct: false },
          { text: '5', correct: true },
          { text: '6', correct: false },
          { text: '8', correct: false }
        ]
    }
  ]