// const btnControll = document.getElementById("btn-one");
// const btnReset = document.getElementById("btn-two");
// const redDiv = document.querySelector("#red");
// const yellowDiv = document.querySelector("#yellow");
// const greenDiv = document.querySelector("#green");
// const car = document.querySelector("#car-move");

// let clickCount = 0;

// btnControll.addEventListener("click", function () {
//     clickCount++;
//     if (clickCount === 1) {
//         redDiv.style.backgroundColor = "red";
//     } else if (clickCount === 2) {
//         yellowDiv.style.backgroundColor = "yellow";
//     } else if (clickCount === 3) {
//         greenDiv.style.backgroundColor = "green";
//         car.classList.toggle("car-ani");
//         car.classList.remove("car-ani-two");
//     }
// });


// btnReset.addEventListener("click", function () {
//     clickCount = 0;
//     redDiv.style.backgroundColor = "";
//     yellowDiv.style.backgroundColor = "";
//     greenDiv.style.backgroundColor = "";
//     car.classList.toggle("car-ani-two");
//     car.classList.remove("car-ani");
// });




const btnControll = document.getElementById("btn-one");
const btnReset = document.getElementById("btn-two");
const redDiv = document.querySelector("#red");
const yellowDiv = document.querySelector("#yellow");
const greenDiv = document.querySelector("#green");
const car = document.querySelector("#car-move");

btnControll.addEventListener("click", function () {
    setTimeout(test, 1000);
    setTimeout(yellow, 2000)

    function test() {
        yellowDiv.style.backgroundColor = "yellow";
    }

    function yellow() {
        redDiv.style.backgroundColor = "lightcoral"
        yellowDiv.style.backgroundColor = ""
        greenDiv.style.backgroundColor = "green";
        car.classList.toggle("car-ani");
        car.classList.remove("car-ani-two");
    }
});

btnReset.addEventListener("click", function () {
    setTimeout(reset, 700);
    setTimeout(resetLight, 2400);
    setTimeout(greenReset, 600);
    function reset() {
        car.classList.toggle("car-ani-two");
        car.classList.remove("car-ani");
        yellowDiv.style.backgroundColor = "yellow"
    }

    function greenReset() {
        greenDiv.style.backgroundColor = "#C6EBC5";
    }

    function resetLight() {
        redDiv.style.backgroundColor = "red"
        yellowDiv.style.backgroundColor = "#FFE17A"
    }
});