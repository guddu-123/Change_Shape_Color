var color = [
    "#20639b",
    "#F9E795",
    "#F96167",
    "#CCF381",
    "#4831D4",
    "#FF69B4",
    "#00FFFF",
    "#FFA351",
    "#FFBE7B",
    "#EED971"
  ];
  var index = 0;
  var isTriangle = false;
  
  var cShape = document.getElementById("change-shape");
  var cColor = document.getElementById("change-color");
  
  cShape.addEventListener("click", changeShape);
  cColor.addEventListener("click", changeColor);
  
  function changeColor() {
  //   console.log(index);
    if (index === color.length) {
      index = 0;
    }
    document.getElementById("circle").style.backgroundColor = color[index];
    index++;
  }
  
  function changeShape() {
    if (!isTriangle) {
      var i = document.getElementsByClassName("inner")[0];
      i.className = "triangle-bottom-left";
      isTriangle = true;
    }else{
      var i = document.getElementsByClassName("triangle-bottom-left")[0];
      i.className = "inner";
      isTriangle = false;
    }
  }