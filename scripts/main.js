const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/vw-beetle.jpg") {
    myImage.setAttribute("src", "images/small-car.jpg");
  } else {
    myImage.setAttribute("src", "images/vw-beetle.jpg");
  }
};

let myButton = document.querySelector("button");
myButton.onclick = () => {
    setUserName();
  };

let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
  }
  

if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }
   
