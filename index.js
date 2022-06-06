const root = document.querySelector("#root");
const div = document.createElement("div");
const linkBlock = document.createElement("div");

div.className = "text1";
div.innerHTML =
  "<b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nesciunt eum excepturi nulla, rerum tempor.</b>";

div.style.width = "600px";
div.style.borderRadius = "5px";
div.style.border = "red solid 1px";
div.style.height = "70px";
div.style.textAlign = "center";
div.style.padding = "10px";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
div.style.margin = "20px";

const inst = document.createElement("a");
inst.href = "https://www.instagram.com";
inst.textContent = "Instagram";
inst.style.display = "flex";

inst.style.width = "100px";

const intocode = document.createElement("a");
intocode.href = "https://intocode.ru/";
intocode.textContent = "Intocode";
intocode.style.display = "flex";
intocode.style.width = "100px";

const google = document.createElement("a");
google.href = "https://www.google.com/";
google.textContent = "Google";
google.style.display = "flex";

linkBlock.append(inst, intocode, google);
linkBlock.style.display = "flex";
linkBlock.style.margin = "auto";
linkBlock.style.justifyContent = "space-between";
linkBlock.style.width = "600px";

console.log(div);
root.append(div, linkBlock);
