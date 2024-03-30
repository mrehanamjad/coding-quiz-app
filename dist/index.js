"use strict";
let tQBtns = document.querySelectorAll(".tq-btn");
let buttonValue = localStorage.getItem("selectedQuiz") || "";
tQBtns.forEach((b) => {
    b.addEventListener("click", () => {
        buttonValue = b.value;
        localStorage.setItem("selectedQuiz", buttonValue);
    });
});
// display data on leader board
const tBody = document.querySelector("#table-body");
const emptyLeaderBoard = document.querySelector("#empty-leaderboard");
let Data = [];
let CData = localStorage.getItem("QuizData");
if (CData !== null) {
    Data = JSON.parse(CData);
    Data.sort((a, b) => b.marks - a.marks);
    console.log(Data);
}
else {
    CData = null;
}
if (Data.length > 0) {
    for (let i = 0; i < Data.length; i++) {
        tBody.insertAdjacentHTML("beforeend", `
          <tr class="bg-white">
            <td class="px-2 md:px-6 py-4 hidden md:block">${Data[i].date}</td>
            <td class="px-2 md:px-6 py-4 ">${Data[i].name}</td>
            <td class="px-2 md:px-6 py-4 ">${"html"}</td>
            <td class="px-2 md:px-6 py-4 ">${Data[i].marks}</td>
            <td class="px-2 md:px-6 py-4 hidden sm:block">${i + 1}</td>
          </tr>
        `);
    }
    emptyLeaderBoard.classList.add("hidden");
}
// clear-leaderboard:
let Clear = document.querySelector("#clear-leaderboard");
Clear.addEventListener("click", () => {
    localStorage.clear();
    location.reload();
});
