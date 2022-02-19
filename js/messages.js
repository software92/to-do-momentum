const saying = [
  "잠과 공부, 식사 이외의 것은 해롭다",
  "나의 의지를 믿지 말고, 해낼 수 있도록 환경을 만들어라",
  "나를 방해하는 것을 적고, 버려라",
  "불광불급(不狂不及): 미치지 않으면 미치지 못한다",
  "공부를 열심히 하는 건 어렵지만, 공부를 방해하는 것을 안하는 것은 쉽다",
  "잡생각이 들고 나에 대해 의심이 드는 순간을 하루 이틀 30일 버텨야 공부가 시작된다",
];
const messages = document.querySelector(".messages");

const selectNum = Math.floor(Math.random() * saying.length);

messages.innerHTML = saying[selectNum];
