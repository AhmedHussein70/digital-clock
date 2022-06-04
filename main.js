// const GetData = () => {
//   let date1 = document.querySelector(".date");

//   let datecreate = `
//     <div class="date">

//     </div>`;

//   date1.innerHTML = datecreate;
// };

const getHours = () => {
  let parent = document.querySelector(".parent");

  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let date = now.toDateString();

  let pmm = "AM";

  if (hours > 12) {
    hours -= 12;
    pmm = "PM";
  }
 
  if (seconds < 10) {
      seconds = `0${seconds}`
  }
  if (minutes < 10) {
    minutes = `0${minutes}`
}
if (hours < 10) {
    hours = `0${hours}`
  }
if (hours === 0) {
    hours = 12
  }

  let parentInn = `
 <div class="parent">

 <div class="date">
    ${date}
 </div>


    <span>${hours}</span>
    <span>:</span>
    <span>${minutes}</span>
    <span>:</span>
    <span>${seconds}</span>
    <span>${pmm}</span>

</div>`;
  parent.innerHTML = parentInn;
};

setInterval(() => {
  getHours();
}, 100);
