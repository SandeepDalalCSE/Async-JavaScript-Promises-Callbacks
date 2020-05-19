// JavaScript is single threaded, it means that js can execute only one task every-time. In general all steps run one by one(not simultaneously).
// script will be loaded from top to bottom.
// Note: the code which takes bit longer to execute are asynchronous code.

// sync code
const button = document.querySelector("button"); // OrderOfExecution : 1
// sync code
const output = document.querySelector("p"); // OrderOfExecution : 2
// it will be executed only when button is clicked. // sync code
function trackUserHandler() {
  console.log("Clicked!");
}
// sync code
console.log("JavaScript does not block this code execution"); // OrderOfExecution : 3 // js work on single thread, so do not block the code execution.
// Async code
setTimeout(() => {
  console.log("this will be executed after 1 sec"); // OrderOfExecution : 4 // js work on single thread, so do not block the code execution.
  setTimeout(() => {
    console.log("first console");
  }, 5000);
}, 5000);
// Async code
setTimeout(() => {
  console.log("this will be executed after 2 sec"); // OrderOfExecution : 4 // js work on single thread, so do not block the code execution.
  setTimeout(() => {
    console.log("Second console");
  }, 4000);
}, 5000);
// Async code
setTimeout(() => {
  console.log("this will be executed after 3 sec"); // OrderOfExecution : 4 // js work on single thread, so do not block the code execution.
  setTimeout(() => {
    console.log("Third console");
  }, 3000);
}, 5000);
// sync code, because button is ready to execute, event listener is assigned to it. while parsing from top to bottom.
button.addEventListener("click", () => {
  // when button is clicked, it now waiting for callback function to be executed.
  setTimeout(() => {
    // async code, because this time button have been clicked //Inside callback function, we have setTimeout() function which will leads to executes its own callback function after 2 sec which is trackUserHandler() function, so this code takes a bit long to execute.
    trackUserHandler();
  }, 2000);
}); // OrderOfExecution : 5 // note: trackUserHandler is nothing but callback function for the button click. Here browser manages the callback function when button is clicked.
