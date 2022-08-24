function rotateImage(idimg) {
  var img = document.getElementById(idimg);
  var width = img.width;
  var height = img.height;
  var scale = height < width ? height / width : width / height;

  if (img.style.transform.length > 0) {
    var deg = parseInt(img.style.transform.split("(")[1]);
    deg += 90;

    if (deg % 180) {
      img.style.transform = "rotate(" + deg + "deg) scale(" + scale + ")";
    } else {
      img.style.transform = "rotate(" + deg + "deg) scale(1)";
    }
  } else {
    img.style.transform = "rotate(90deg) scale(" + scale + ")";
  }
}