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
}
else {
    CData = null;
}
let n = 1;
if (Data.length > 0) {
    for (let i = 0; i < Data.length; i++) {
        if (i > 0) {
            if (Data[i].marks === Data[i - 1].marks) {
                n--;
            }
        }
        tBody.insertAdjacentHTML("beforeend", `
          <tr class="bg-white">
            <td class="px-2 md:px-6 py-4 hidden md:block">${Data[i].date}</td>
            <td class="px-2 md:px-6 py-4 ">${Data[i].name}</td>
            <td class="px-2 md:px-6 py-4 ">${Data[i].quiz}</td>
            <td class="px-2 md:px-6 py-4 ">${Data[i].marks}</td>
            <td class="px-2 md:px-6 py-4 hidden sm:block">${n}</td>
          </tr>
        `);
        n++;
    }
    emptyLeaderBoard.classList.add("hidden");
}
// clear-leaderboard:
let Clear = document.querySelector("#clear-leaderboard");
Clear.addEventListener("click", () => {
    localStorage.clear();
    location.reload();
});
// hembur nav bar:
let navBarI = document.querySelector("#nav-bar-i");
let hBNavBar = document.querySelector("#burger-bar");
navBarI.addEventListener("click", () => {
    hBNavBar.classList.remove("-bottom-full");
    hBNavBar.classList.add("bottom-0");
});
hBNavBar.firstElementChild?.addEventListener("click", () => {
    hBNavBar.classList.add("-bottom-full");
    hBNavBar.classList.remove("bottom-0");
});
