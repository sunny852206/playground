// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const redP = document.createElement("p");
redP.textContent = "Hey I'm red!";
redP.style.cssText = "color: red";
container.appendChild(redP);

const blueH3 = document.createElement("h3");
blueH3.textContent = "I'm a blue h3!";
blueH3.style.cssText = "color: blue";
container.appendChild(blueH3);

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
const p = document.createElement("p");
p.textContent = "ME TOO!";

const lastContent = document.createElement("div");
lastContent.classList.add("lastContent");
lastContent.appendChild(h1);
lastContent.appendChild(p);
container.appendChild(lastContent);
