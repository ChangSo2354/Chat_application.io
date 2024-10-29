const msgerForm = get(".msger-inputarea");
const msgerInput = get(".msger-input");
const msgerChat = get(".msger-chat");

const BOT_MSGS = [
  "Hi, how are you?",
  "Ohh... I can't understand what you trying to say. Sorry!",
  "I like to play games... But I don't know how to play!",
  "Sorry if my answers are not relevant. :))",
  "I feel sleepy! :("
];

// Picture Girl and Boy
const BOT_IMG = "data:image/jpeg;base64,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";
const PERSON_IMG = "https://scontent.xx.fbcdn.net/v/t1.15752-9/462577845_913241816858501_481870152292929521_n.jpg?stp=dst-jpg_s480x480&_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=DIqGUpPI9agQ7kNvgGRN6KN&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&_nc_gid=A3mCE5BMAG5uwVXrfMq42E2&oh=03_Q7cD1QG0UNw6bf8Ws-POtYyJqqBt8Ba0l92ONqKfOPR9ZmEtVA&oe=67486C7E";
 // cont BOT_NAME = " My Girlfriend ";
 // const PERSON_NAME = " Chang So ";
const BOT_NAME = "";
 const PERSON_NAME = "";

msgerForm.addEventListener("submit", event => {
  event.preventDefault();

  const msgText = msgerInput.value;
  if (!msgText) return;

  appendMessage(PERSON_NAME, PERSON_IMG, "right", msgText);
  msgerInput.value = "";

  botResponse();
});

function appendMessage(name, img, side, text) {
  //   Simple solution for small apps
  const msgHTML = `
    <div class="msg ${side}-msg">
      <div class="msg-img" style="background-image: url(${img})"></div>

      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">${name}</div>
          <div class="msg-info-time">${formatDate(new Date())}</div>
        </div>

        <div class="msg-text">${text}</div>
      </div>
    </div>
  `;

  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerChat.scrollTop += 500;
}

function botResponse() {
  const r = random(0, BOT_MSGS.length - 1);
  const msgText = BOT_MSGS[r];
  const delay = msgText.split(" ").length * 100;

  setTimeout(() => {
    appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
  }, delay);
}

// Utils
function get(selector, root = document) {
  return root.querySelector(selector);
}

function formatDate(date) {
  const h = "0" + date.getHours();
  const m = "0" + date.getMinutes();

  return `${h.slice(-2)}:${m.slice(-2)}`;
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
