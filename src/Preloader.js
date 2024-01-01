$(document).ready(function () {
  var imagesLoaded = 0;
  var totalImages = $("img").length;
  $("img").each(function (idx, img) {
    $("<img>").on("load", imageLoaded).attr("src", $(img).attr("src"));
  });
  function imageLoaded() {
    imagesLoaded++;
    if (imagesLoaded == totalImages) {
      allImagesLoaded();
    }
  }

  function allImagesLoaded() {
    setTimeout(() => {
      $(".pre-loader").addClass("hide-pre-loader");
      $(".loader-square").addClass("hide-pre-loader");
      $(".typewriter").addClass("hide-pre-loader");
    }, "3000");
    setTimeout(() => {
      $(".pre-loader").hide();
    }, "4000");
  }
});
