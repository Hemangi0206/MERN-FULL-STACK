const H = document.createElement("h2");

const P = document.createElement("p");

const B = document.createElement("button");

H.classList.add("text-info");
H.textContent = "Sub Heading";

P.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis in vitae obcaecati expedita ipsa repellat nobis laborum inventore recusandae temporibus?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus sapiente officia omnis dolor quaerat quos autem distinctio vitae tempora, nam earum rerum a aperiam. Officia possimus fugiat rerum deleniti odit!";


  B.classList.add=("btn","btn-primary");
  B.innerText ="Submit";
const div = document.getElementById("task1");
div.appendChild(H);
div.appendChild(P);
div.appendChild(B);



H.append("welcome");