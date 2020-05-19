const button = document.querySelector("button");
const output = document.querySelector("p");

function trackUserHandler() {
  // async code as this totally depends upon how much time browser will take to fetch the geolocation.
  navigator.geolocation.getCurrentPosition(
    positionValue => {
      console.log(positionValue);
      console.log(positionValue.coords);
      console.log(positionValue.coords.latitude);
    },
    positionErr => {
      console.log(positionErr.code);
      console.log(positionErr.message);
      console.log(positionErr);
    }
  );
  // sync code
  console.log("this will be executed first than the geolocation.");
}
button.addEventListener("click", trackUserHandler);

// this will be executed, js do not block the code for execution.
let result = 0;
for (let i = 0; i < 100000000; i++) {
  result += i;
}
console.log(result);
