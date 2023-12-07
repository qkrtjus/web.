const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 14;

const showHideIcons =() => {
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        carousel.scrollLeft += icon.id == "left" ? - firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60);
    });
    
});

const dragStart = (e) =>{
    isDragStart = true;
    prevpageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    carousel.classList.add("dragging");
    let positionDiff = e.pageX - prevpageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop =() =>
      inDragStart = false;
      carousel.classList.remove("dragging");



carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);
