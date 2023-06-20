import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
document.querySelector("h1").addEventListener("click", function (e) {
  alert("Bana tıkladın!");
});

// Kodlar buraya gelecek!
function zoom(event, elParam) {
  event.preventDefault();
  scale += event.deltaY * -0.01;

  scale = Math.min(Math.max(0.125, scale), 4);

  elParam.style.transform = `scale(${scale})`;
}

let scale = 1;
const navEl = document.querySelector("nav");
navEl.addEventListener("wheel", (event) => zoom(event, navEl));
// navEl.onwheel = zoom;

window.addEventListener("load", (event) => {
  console.log("Tüm kaynaklar yüklendi!");
});

let imagesNodeList = document.querySelectorAll("img");
imagesNodeList.forEach((imgEl) => {
  imgEl.addEventListener("mouseover", (event) => {
    event.target.style.transform = "scale(1.2)";
    imgEl.addEventListener("wheel", (event) => zoom(event, imgEl));
  });
  imgEl.addEventListener("mouseout", (event) => {
    event.target.style.transform = "scale(1)";
    imgEl.removeEventListener("wheel", (event) => zoom(event, imgEl));
  });
});

const navAnchorNodeList = document.querySelectorAll("nav a");

navAnchorNodeList.forEach((anchorEl) => {
  anchorEl.addEventListener("focus", (event) => {
    event.target.style.background = "red";
    event.target.style.fontSize = "2rem";
  });
  anchorEl.addEventListener("blur", (event) => {
    event.target.style.background = "tomato";
    event.target.style.fontSize = "1rem";
  });
});

window.addEventListener("resize", (event) => {
  console.log("Yeniden Boyutlandırıldı!");
  console.log(event.target.innerWidth, "x", event.target.innerHeight);
});

window.addEventListener("scroll", (event) => {
  console.log("Kaydırıldı!");
  console.log(window.scrollX, "x", window.scrollY);
});

const allDivs = document.querySelectorAll("div");
allDivs.forEach((divEl) => {
  divEl.addEventListener("click", (event) => {
    console.log("Div'e tıkladın!");
    console.log(event.target.getBoundingClientRect().y);
  });
});

// const allPs =document.querySelectorAll("p");
// allPs.forEach((pEl) =>{
//     pEl.addEventListener("select",(event) =>{
//         console.log(event.target, "Seçildi");
//     });
// });
const allPs = document.querySelectorAll("p");
allPs.forEach((pEl) => {
  pEl.addEventListener("dblclick", (event) => {
    console.log(event.target, "Seçildi");
  });
});

const introSection = document.querySelector(".intro");
const textareaEl = document.createElement("textarea");

textareaEl.style.width = "100%";
textareaEl.style.height = "100px";
introSection.appendChild(textareaEl);

textareaEl.addEventListener("select", (event) => {
  const selectedText = event.target.value.substring(
    event.target.selectionStart,
    event.target.selectionEnd
  );
  event.target.value = event.target.value.replace(
    selectedText,
    `"${selectedText}"`
  );
});
