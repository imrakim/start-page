// let hr, mn, sec;

// function date() {
//   let time = new Date();
//   hr = time.getHours();
//   mn = time.getMinutes();
//   sec = time.getSeconds();

//   hr = hr < 10 ? "0" + hr : hr;
//   mn = mn < 10 ? "0" + mn : mn;
//   sec = sec < 10 ? "0" + sec : sec;

//   return {
//     hr: hr,
//     mn: mn,
//     sec: sec,
//   };
// }

// function updateTime() {
//   let timeinfo = date();
//   document.getElementById("hour").innerHTML = timeinfo.hr;
//   document.getElementById("min").innerHTML = timeinfo.mn;
//   document.getElementById("sec").innerHTML = timeinfo.sec;
// }
// setInterval(updateTime, 1000);
// updateTime();





//from chat gpt
 
function updateTime() {
  let time = new Date();
  let hr = time.getHours();
  let mn = String(time.getMinutes()).padStart(2, '0');
  let sec = String(time.getSeconds()).padStart(2, '0');
  let ampm = hr >= 12 ? 'PM' : 'AM';

  hr = hr % 12;
  hr = hr ? hr : 12; // the hour '0' should be '12'
  hr = String(hr).padStart(2, '0');

  document.getElementById("hour").innerHTML = hr;
  document.getElementById("min").innerHTML = mn;
  document.getElementById("sec").innerHTML = sec;
  document.getElementById("ampm").innerHTML = ampm;
}

setInterval(updateTime, 1000);
updateTime();

