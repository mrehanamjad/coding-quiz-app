const questionLeftUpdate = document.querySelector(
  "#question-left"
) as HTMLParagraphElement;
const timeDisplay = document.querySelector("#time") as HTMLSpanElement;
const question = document.querySelector("#question") as HTMLParagraphElement;
const resultC = document.querySelector("#result-c") as HTMLDivElement;
const nextQuizBtn = document.querySelector(
  "#next-quiz-btn"
) as HTMLButtonElement;
const lab1 = document.querySelector("#opt1 label p") as HTMLParagraphElement;
const lab2 = document.querySelector("#opt2 label p") as HTMLParagraphElement;
const lab3 = document.querySelector("#opt3 label p") as HTMLParagraphElement;
const lab4 = document.querySelector("#opt4 label p") as HTMLParagraphElement;
const options = document.querySelectorAll(
  ".radio-options"
) as NodeListOf<HTMLInputElement>;

let quizOf: Question[];
const selectedQuiz: string = localStorage.getItem("selectedQuiz") || "";
switch (selectedQuiz) {
  case "Html":
    quizOf = htmlQ;
    break;
  case "Css":
    quizOf = cssQ;
    break;
  default:
    break;
}

let usedNumbers: number[] = [];

const NewRandomN = (
  question: Question[],
  usedNumbers: number[] = []
): number => {
  let n = Math.floor(Math.random() * question.length);
  if (usedNumbers.includes(n)) {
    return NewRandomN(question, usedNumbers);
  } else {
    usedNumbers.push(n);
    return n;
  }
};

let SNo: number = 1;

const changeQuestion = (n: number, QData: Question[]) => {
  question.textContent = QData[n].question;
  lab1.textContent = QData[n].options.A;
  lab2.textContent = QData[n].options.B;
  lab3.textContent = QData[n].options.C;
  lab4.textContent = QData[n].options.D;
};

function showResult(
  n: number,
  textColor: string,
  result: string,
  QData: Question[]
) {
  // textColor = text-green-600 or text-red-600
  resultC.innerHTML = `
  <p id="result" class="text-center">
              Your Answer is "
              <span class="font-bold text-lg ${textColor}">${result}</span> "
            </p>
            <p class="text-center">Correct option is <b>${QData[n].answer}</b></p>
            <p id="explain">${QData[n].explanation}</p>
  `;
}

let marks: number = 0;

const checkQuestion = (n: number, QData: Question[]) => {
  let answeredCorrectly = false;

  options.forEach((opt) => {
    opt.addEventListener("click", () => {
      if (!answeredCorrectly) {
        if (opt.value === QData[n].answer) {
          marks++;
          showResult(n, "text-green-600", "CORRECT", QData);
          opt.parentElement?.classList.add("bg-green-400");
          answeredCorrectly = true;
        } else {
          showResult(n, "text-red-600", "WRONG", QData);
          opt.parentElement?.classList.add("bg-red-400");
          answeredCorrectly = true;
        }

        options.forEach((element) => {
          element.disabled = true;
        });
      }
    });
  });
};

let localStorageData = localStorage.getItem("QuizData");
let CQData = localStorageData ? JSON.parse(localStorageData) : [];

const StoreData = (username: string, marks: number, selectedQuiz: string) => {
  //getting and setting date
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth(); // Zero-indexed (0-11)
  const day = today.getDate();
  const todaysDate: string = ` ${day}-${month + 1}-${year}`; // Month is zero-indexed, so add 1

  CQData.push({
    name: userName,
    marks: marks,
    date: todaysDate,
    quiz: selectedQuiz,
  });
  localStorage.setItem("QuizData", JSON.stringify(CQData));
};

let userName: string;

const ended = () => {
  StoreData(userName, marks, selectedQuiz);
  const scoreShow = document.querySelector("#ending") as HTMLDivElement;
  quizBox.classList.add("hidden");
  scoreShow.classList.remove("hidden");
  scoreShow.classList.add("flex");
  // displaying mariks of view score:
  if (scoreShow.firstElementChild) {
    let L: number = CQData.length - 1;
    scoreShow.firstElementChild.textContent = `You score is ${marks} out of 10`;
  }
};
const setQuestion = () => {
  if (SNo <= 10) {
    questionLeftUpdate.textContent = `${SNo} of 10 Questions`;
    SNo++;
    const n: number = NewRandomN(quizOf, usedNumbers);

    resultC.innerHTML = "";
    options.forEach((option) => {
      option.parentElement?.classList.remove("bg-green-400");
      option.parentElement?.classList.remove("bg-red-400");
    });
    changeQuestion(n, quizOf);
    checkQuestion(n, quizOf);
    options.forEach((element) => {
      element.disabled = false;
    });
    SNo === 9 ? (nextQuizBtn.textContent = "View Score") : null;
  } else {
    ended();
  }
};


let timeSeconds = 10;
let timeMinutes = 4;
const timer = () => {
  const time = setInterval(() => {
    timeSeconds--;
    if (timeSeconds < 0) {
      timeMinutes--;
      timeSeconds = 9;
    }

    if (timeMinutes === 0 && timeSeconds === 0) {
      clearInterval(time);
      ended();
    }

    timeDisplay.textContent = `${timeMinutes}:${timeSeconds}`;
  }, 1000);
};


nextQuizBtn.addEventListener("click", setQuestion);

const nameInput = document.querySelector(
  "#starting form input"
) as HTMLInputElement;
const quizBox = document.querySelector("#quiz-box") as HTMLDivElement;

const getFormData = () => {
  nameInput.parentElement?.addEventListener("submit", (e: SubmitEvent) => {
    e.preventDefault();
    userName = nameInput.value;
    quizBox.classList.remove("hidden");
    nameInput.parentElement?.parentElement?.classList.add("hidden");
    setQuestion();
    timer();
  });
};
getFormData();
