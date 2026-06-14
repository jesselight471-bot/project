// const questions = document.querySelectorAll(".faq-question");

// questions.forEach((question) => {
//     question.addEventListener("click", () => {

//         const answer = question.nextElementSibling;

//         if (answer.style.display === "block") {
//             answer.style.display = "none";
//         } else {
//             answer.style.display = "block";
//         }
//     });
// });

// function showPage2() {
//     document.getElementById("page1")
//         .classList.add("hidden");

//     document.getElementById("page2")
//         .classList.remove("hidden");
// }

// function showPage1() {
//     document.getElementById("page2")
// //         .classList.add("hidden");

// //     document.getElementById("page1")
// //         .classList.remove("hidden");
// // }

// function showPage2() {
//     document.getElementById("page1").classList.add("hidden");
//     document.getElementById("page2").classList.remove("hidden");

//     createBoxes(); // run loop when page 2 opens
// }

// function showPage1() {
//     document.getElementById("page2").classList.add("hidden");
//     document.getElementById("page1").classList.remove("hidden");
// }

// /* LOOP - create 10 boxes */
// function createBoxes() {

//     let container = document.getElementById("box-container");

//     container.innerHTML = ""; // prevent duplicates

//     for (let i = 1; i <= 10; i++) {

//         let box = document.createElement("div");
//         box.classList.add("box");

//         box.innerText = i; // show number inside box

//         container.appendChild(box);
//     }
// }




function goToPage() {
    window.location.href = "pe.html";
}

