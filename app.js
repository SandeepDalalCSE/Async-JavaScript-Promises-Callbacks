const button = document.querySelector("button");
const output = document.querySelector("p");

const getPosition = options => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      successCallback => {
        resolve(successCallback);
      },
      errorCallback => {
        reject(errorCallback);
      },
      options
    );
  });
  return promise;
};

// adding a promise in setTimer function.
const setTimer = duration => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promise in setTimer function");
      reject("it was rejected");
    }, duration);
  });
  return promise;
};

function trackUserHandler() {
  // async code as this totally depends upon how much time browser will take to fetch the geolocation.
  // navigator.geolocation.getCurrentPosition(
  //   positionValue => {
  //     console.log(positionValue);
  //     console.log(positionValue.coords);
  //     console.log(positionValue.coords.latitude);
  //   },
  //   positionErr => {
  //     console.log(positionErr.code);
  //     console.log(positionErr.message);
  //     console.log(positionErr);
  //   }
  // );

  // calling getPosition() method
  getPosition().then(
    resData => {
      console.log(resData);
    },
    rejData => {
      console.log(rejData);
    }
  );

  // chaining multiple promises.
  getPosition()
    .then(
      resData => {
        console.log(resData);
        return setTimer(2000); // calling another setTimer function(). using then block this will be executed.
      },
      rejData => {
        console.log(rejData);
      }
    )
    .then(
      timerData => {
        console.log(timerData);
      },
      timerRejData => {
        console.log(timerRejData);
      }
    );
  // sync code
  console.log("this will be executed first than the geolocation.");
  // calling setTimer function.
  setTimer(2000).then(resData => {
    console.log(resData);
  });
}
button.addEventListener("click", trackUserHandler);

// this will be executed, js do not block the code for execution.
let result = 0;
for (let i = 0; i < 100000000; i++) {
  result += i;
}
console.log(result);
