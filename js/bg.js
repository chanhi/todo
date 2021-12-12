const body = document.querySelector("body");

const IMG_NUMBER = 4;

function paintImage(imgNumber) {
  const bgimage = document.createElement("img");
  bgimage.src = `images/${imgNumber + 1}.jpg`; // path를 이용해서 해당 폴더에 있는 파일 랜덤으로 못가져오는지 확인
  bgimage.classList.add("bgImage");
  document.body.prepend(bgimage);
}

function init() {
  paintImage(Math.floor(Math.random() * IMG_NUMBER)); //0~3
}

init();