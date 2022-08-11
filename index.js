function rotateImage(idimg) {
  var img = document.getElementById(idimg);

  if (img.style.transform.length) {
    var deg = parseInt(img.style.transform.split("(")[1]);
    deg += 90;

    img.style.transform = "rotate(" + deg + "deg)";
  } else {
    img.style.transform = "rotate(90deg)";
  }
}