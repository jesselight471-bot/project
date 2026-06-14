// function hidePage() {
//     document.getElementById("page").classList.add("hidden");
// }

// function togglePage() {
//   document.getElementById("page,page2")

//     .classList.toggle("hidden,hel")
//     ;
// }

function showPage2() {
    document.getElementById("page1")
        .classList.add("hidden");

    document.getElementById("page2")
        .classList.remove("hidden");
}

function showPage1() {
    document.getElementById("page2")
        .classList.add("hidden");

    document.getElementById("page1")
        .classList.remove("hidden");
}