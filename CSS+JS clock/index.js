


const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");



function setTime()  //
{


    //creating new object to get date methods
    const now = new Date();


    //SECONDS

    //acquiring the seconds value
    const seconds = now.getSeconds();

    //converting secs(0-60) to deg(0-360)
    const secondsDegrees = ((seconds/60)*360)+90;

    //styling seconds hand to represent appropriate angle
    secondHand.style.transform = "rotate("+secondsDegrees+"deg)";
    console.log(seconds);


    //MINUTES

      //acquiring the minutes value
  const minutes = now.getMinutes();

  //converting minutes(0-60) to deg(0-360)
  const minutesDegrees = ((minutes/60)*360)+90;

  //styling minutes hand to represent appropriate angle
  minuteHand.style.transform = "rotate("+minutesDegrees+"deg)";
  console.log(minutes);


  //HOURS

  //acquiring the hours value
  const hours = now.getHours();

  //converting hours(0-12) to deg(0-360)
  const hoursDegrees = ((hours/12)*360)+90;

  //styling hours hand to represent appropriate angle
  hourHand.style.transform = "rotate("+hoursDegrees+"deg)";
  console.log(hours);






    

}






setInterval(setTime,1000);


