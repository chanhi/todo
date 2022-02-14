const loginForm = document.querySelector("#login-form");
const logoutForm = document.querySelector("#logout-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const loginTodo = document.getElementById("todo-form");
const alertLogin = document.getElementById("alert-login");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) { //submitEvent라는 object를 submit할 때마다 argument로 받음
    event.preventDefault(); // submit 의 특성상 새로고침을 하는데 이것을 막음, preventDefault()가 이벤트들의 기본 동작을 막음
    loginForm.classList.add(HIDDEN_CLASSNAME);
    alertLogin.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username); //[key : value]
    paintGreetings(username);
}

function onLogoutClick(event) {
    localStorage.removeItem(USERNAME_KEY);
    window.location.reload(); //리로딩
}
//logout 후에 저장되어있는 localstorge를 날려야 함
function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    logoutForm.classList.remove(HIDDEN_CLASSNAME);
    loginTodo.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) { //이름 입력 전
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    alertLogin.classList.remove(HIDDEN_CLASSNAME);
    logoutForm.classList.add(HIDDEN_CLASSNAME);
    loginTodo.classList.add(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}

logoutForm.addEventListener("click", onLogoutClick); //로그아웃 버튼 클릭

//변수로 todo에서와 똑깉이 todoForm으로 사용하니 같은 변수로 인식해서 todo.js가 정상실행 안됨(수정)