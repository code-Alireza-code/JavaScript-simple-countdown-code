//* A simple countdown code

function countDown(time, step = 1) {
  const timer = () => {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    if (time === 0) {
      clearInterval(intervalId);
      console.log("click to resend OTP!");
    } else {
      console.log(`${min}:${sec}`);
      time = time - step;
    }
  };
  const delay = step * 1000;
  timer();
  const intervalId = setInterval(timer, delay);
}
//countDown(time, timeStep)
countDown(120, 1);
