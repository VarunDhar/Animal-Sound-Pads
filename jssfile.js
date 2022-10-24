let temp = document.querySelectorAll("button");
console.log(temp.length);
for (let i = 0; i < temp.length; i++) {
  temp[i].addEventListener("keypress", function (event) {
    console.log(event.key);
    switch (event.key) {
      case "t": {
        sound("tiger");
        break;
      }
      case "e": {
        sound("elephant");
        break;
      }
      case "p": {
        sound("peacock");
        break;
      }
      case "h": {
        sound("horse");
        break;
      }
    }
  });
}
for (let i = 0; i < temp.length; i++) {
  temp[i].addEventListener("click", function () {
    console.log("PRESSED with MOUSE");
    sound(this.id);
  });
}
function sound(name) {
    animatefun(name);
  let snd = new Audio(`${name}.mp3`);
  snd.play();
}
function animatefun(name){
    document.querySelector("#"+name).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("#"+name).classList.remove("pressed");
    },250);
}
//document.querySelectorAll("button")[0].addEventListener("keypress",event)
