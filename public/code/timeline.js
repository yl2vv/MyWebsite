let one = document.getElementById("1998");
  one.addEventListener("mouseover", function () {
    document.getElementById('timelineYear').innerHTML = "1998-2000 <span class='sep'>|</span> 2002-2004";
    document.getElementById('timelinePlace').innerHTML = "<span class='timelineTextYear'>1998:</span> Seoul, South Korea";
  });
  one.addEventListener("mouseout", function () {
    document.getElementById('timelineYear').innerHTML = "Hover over the timeline";
    document.getElementById('timelinePlace').innerHTML = "See where I have lived!";
  });

  let two = document.getElementById("2000");
  two.addEventListener("mouseover", function () {
    document.getElementById('timelineYear').innerHTML = "2000 <span class='sep'>-</span> 2002";
    document.getElementById('timelinePlace').innerHTML = "<span class='timelineTextYear'>2000:</span> Gothenburg, Sweden";
  });
  two.addEventListener("mouseout", function () {
    document.getElementById('timelineYear').innerHTML = "Hover over the timeline";
    document.getElementById('timelinePlace').innerHTML = "See where I have lived!";
  });

  let three = document.getElementById("2004");
  three.addEventListener("mouseover", function () {
    document.getElementById('timelineYear').innerHTML = "2004 <span class='sep'>-</span> 2010";
    document.getElementById('timelinePlace').innerHTML = "<span class='timelineTextYear'>2004:</span> Honolulu, Hawaii";
  });
  three.addEventListener("mouseout", function () {
    document.getElementById('timelineYear').innerHTML = "Hover over the timeline";
    document.getElementById('timelinePlace').innerHTML = "See where I have lived!";
  });

  let four = document.getElementById("2008");
  four.addEventListener("mouseover", function () {
    document.getElementById('timelineYear').innerHTML = "2008 <span class='sep'>|</span> 2010";
    document.getElementById('timelinePlace').innerHTML = "<span class='timelineTextYear'>2008:</span> Singapore City, Singapore <br> <span class='timelineTextYear'>2010:</span> Jeju Island, South Korea";
  });
  four.addEventListener("mouseout", function () {
    document.getElementById('timelineYear').innerHTML = "Hover over the timeline";
    document.getElementById('timelinePlace').innerHTML = "See where I have lived!";
  });

  let five = document.getElementById("2010");
  five.addEventListener("mouseover", function () {
    document.getElementById('timelineYear').innerHTML = "2010 <span class='sep'>-</span> 2020";
    document.getElementById('timelinePlace').innerHTML = "<span class='timelineTextYear'>2010:</span> Virginia, United States<br> <span class='timelineTextYear'>2020:</span> North Carolina, United States<br>";
  });
  five.addEventListener("mouseout", function () {
    document.getElementById('timelineYear').innerHTML = "Hover over the timeline";
    document.getElementById('timelinePlace').innerHTML = "See where I have lived!";
  });

  let six;
  if (document.getElementById("to-be") != null) {
    six = document.getElementById("to-be");
  }
  else {
    six = document.getElementById("to-be2");
  }

  six.addEventListener("mouseover", function () {
    document.getElementById('timelineYear').innerHTML = "2021 <span class='sep'>-</span>";
    document.getElementById('timelinePlace').innerHTML = "Starting my journey as a full time developer....";
  });
  six.addEventListener("mouseout", function () {
    document.getElementById('timelineYear').innerHTML = "Hover over the timeline";
    document.getElementById('timelinePlace').innerHTML = "See where I have lived!";
  });