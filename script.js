let random_number;
let total_tries = 0;
let user_number = document.getElementById("user_number").value;
const speaker_2 = document.getElementById("speaker_2");
const btn = document.getElementById("btn");
const tries = document.getElementById("tries");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(random_number);
  user_number = parseInt(user_number);
  console.log(user_number);
});

setTimeout(() => {
  console.log("Starting....");
  speaker_2.style.display = "block";
  random_number = Math.floor(Math.random() * 100);
}, 3000);

const checkuserInput = (userNumber) => {
  if (random_number === userNumber) {
  } else {
  }
};
