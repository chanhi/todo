const clock = document.querySelector("#js-clock h2");

function getTime() {
    const date = new Date();
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const hours = String(date.getHours()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    //new Date().getSeconds().toString().padStart(2,"0");  기능 같음
    clock.innerText = `${hours}:${minutes}:${seconds}`;
    //padStart(2,"0") -> 문자열을 2로 fix하고 만약 길이가 2가 아니면 '앞'에 "0"을 붙인다.
}

function init() {
    getTime(); // 실행후 한번 무조건 실행을 위해 함수 실행
    setInterval(getTime, 1000); // 1000ms, 즉 1초마다 함수 실행
}

init();
