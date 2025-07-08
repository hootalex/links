document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelector(".viewtoggle").addEventListener("click", (e) => {
    animateshelf();

    if (
      document.querySelector(".linkbooks").classList.contains("linkbooksstack")
    ) {
      shelvebooks();
    } else {
      stackbooks();
    }
  });

  function stackbooks() {
    document.querySelector(".linkbooks").classList.add("linkbooksstack");
  }

  function shelvebooks() {
    document.querySelector(".linkbooks").classList.remove("linkbooksstack");
  }

  function animateshelf() {
    document.querySelector(".bookshelfoverflow").classList.add("shelfshake");
    document.querySelector(".viewtoggle").classList.add("spin");
    setTimeout(function () {
      document
        .querySelector(".bookshelfoverflow")
        .classList.remove("shelfshake");
      document.querySelector(".viewtoggle").classList.remove("spin");
    }, 650);
  }


var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
if (viewportWidth > 640) {
} else {
	document.querySelector(".linkbooks").classList.add("linkbooksstack");
}


});
