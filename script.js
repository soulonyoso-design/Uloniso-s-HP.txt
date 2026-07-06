x = 0;
y = 0;
let t = 0
let b = 128
let memory = [];
let memory2 = [];
let memory3 = [];
let memory4 = [];
let memory5 = [];
let flag = false;
const text = document.querySelector("#text")
const back = document.querySelector(".back")
const back2 = document.querySelector(".back2")
const back3 = document.querySelector(".back3")
const back4 = document.querySelector(".back4")
const back5 = document.querySelector(".back5")
const per = document.querySelector("#per")
let p = 1
const group = document.querySelector("#group")
const data = document.querySelector("#data")
const fail = document.querySelector("#fail")
fail.style.display = "none";

data.style.display = "none";

document.addEventListener("click", () => {  
  fail.style.display = "";
  
setInterval(() => {
  x = Math.floor(Math.random() * (window.innerWidth + 1));
y = Math.floor(Math.random() * (window.innerHeight + 1));
  
  text.style.left = x +"px"
  text.style.top = y +"px"
  const chunk = new Uint8Array(t * b * b)
  crypto.getRandomValues(chunk)
  memory.push(chunk)
  const tC = chunk.join(",")
  back.innerText = tC;
  
  
  const chunk2 = new Uint8Array(t * b * b)
  crypto.getRandomValues(chunk2)
  memory2.push(chunk2)
  const tC2 = chunk2.join(",")
  back2.innerText = tC2;
  
   const chunk3 = new Uint8Array(t * b * b)
  crypto.getRandomValues(chunk3)
  memory3.push(chunk3)
  const tC3 = chunk3.join(",")
  back3.innerText = tC3;
 
  const chunk4 = new Uint8Array(t * b * b)
  crypto.getRandomValues(chunk4)
  memory4.push(chunk4)
  const tC4 = chunk4.join(",")
  back4.innerText = tC4;
  
   const chunk5 = new Uint8Array(t * b * b)
  crypto.getRandomValues(chunk5)
  memory5.push(chunk5)
  const tC5 = chunk5.join(",")
  back5.innerText = tC5;
  
  if (t <= 4)
 t += 0.1; 
 
p += Math.floor(Math.random() * 1.16)//1.16 is the best
 per.textContent = p
window.getComputedStyle(back).opacity; 
  if (p >= 99){
document.body.style.backgroundColor = "red";
  group.style.display = "none";
  data.style.display = "";
    setTimeout(() =>{
      flag = true;
    },5000)
    if (flag == true){
      data.style.display = "none";
      setTimeout(() => {
        document.body.style.backgroundColor = "black";
      },750)
    }
}
},1)
});
