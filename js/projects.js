let t1 = document.getElementById("1st").textContent;
let t2 = document.getElementById("2nd").textContent;
let t3 = document.getElementById("3rd").textContent;
let t4 = document.getElementById("4th").textContent;
let t5 = document.getElementById("5th").textContent;

let project1 = prompt("Please enter 1st project name: ", t1);
let project2 = prompt("Please enter 2st project name: ", t2);
let project3 = prompt("Please enter 3st project name: ", t3);
let project4 = prompt("Please enter 4st project name: ", t4);
let project5 = prompt("Please enter 5st project name: ", t5);

document.getElementById("1st").textContent = project1;
document.getElementById("2nd").textContent = project2;
document.getElementById("3rd").textContent = project3;
document.getElementById("4th").textContent = project4;
document.getElementById("5th").textContent = project5;
