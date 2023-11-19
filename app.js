const imageBox = document.querySelector("#card-image");
const rolloverImage = document.querySelector("#rollover-div");
imageBox.addEventListener("mouseover", function () {
  rolloverImage.style.transform = "translateY(-310px)";
});

imageBox.addEventListener("mouseout", function () {
  rolloverImage.style.transform = "translateY(0)";
});
