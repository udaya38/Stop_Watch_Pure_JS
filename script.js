var start;
document.querySelector('.btn').addEventListener('click', () => {
  document.querySelector('.btn').disabled = true;
  document.querySelector('.btn-stop').disabled = false;

  start = setInterval(() => {
    let hour = Number(document.querySelector('.hours').innerHTML);
    let min = Number(document.querySelector('.mintues').innerHTML);
    let sec = Number(document.querySelector('.seconds').innerHTML);
    console.log(sec === 1);
    if (sec === 59) {
      document.querySelector('.seconds').innerHTML = '00';
      if (min === 59) {
        document.querySelector('.mintues').innerHTML = '00';
        document.querySelector('.hours').innerHTML =
          hour + 1 <= 9 ? `0${hour + 1}` : `${hour + 1}`;
      } else {
        document.querySelector('.mintues').innerHTML =
          min + 1 <= 9 ? `0${min + 1}` : `${min + 1}`;
      }
    } else {
      document.querySelector('.seconds').innerHTML =
        sec + 1 <= 9 ? `0${sec + 1}` : `${sec + 1}`;
    }
  }, 1000);
});

document.querySelector('.btn-stop').addEventListener('click', () => {
  clearInterval(start);
  document.querySelector('.btn').disabled = false;
  document.querySelector('.btn-stop').disabled = true;
});

document.querySelector('.btn-reset').addEventListener('click', () => {
  clearInterval(start);
  document.querySelector('.hours').innerHTML = '00';
  document.querySelector('.mintues').innerHTML = '00';
  document.querySelector('.seconds').innerHTML = '00';
  document.querySelector('.btn').disabled = false;
  document.querySelector('.btn-stop').disabled = true;
});
