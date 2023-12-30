
const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/20231222.jpeg") {
    myImage.setAttribute("src", "images/another.webp");
  } else {
    myImage.setAttribute("src", "images/20231222.jpeg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("あなたの名前を入力してください。");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `${myName} さん、Mozilla はかっこいいよ。`;
    }
  }  
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla はかっこいいよ、${storedName}`;
}
myButton.onclick = () => {
    setUserName();
  };

  