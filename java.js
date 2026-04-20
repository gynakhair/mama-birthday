window.addEventListener("load", () => {
  setTimeout(() => {
    document.body.classList.remove("not-loaded");
  }, 500);
});

const text = `Terima kasih selalu memberi kasih sayang dan perhatian.
Hidupku akan selalu baik-baik saja jika di dunia ini masih ada Mamah.
Maka dari itu, semoga mamah selalu sehat, panjang umur, dilancarkan rezekinya dan diberkahi hidupnya, 
we love you, Mah! 
-Junaedi Family`;

let i = 0;
const speed = 40;

function typeWriter() {
  const el = document.querySelector(".subtitle");

  if (i === 0) el.style.opacity = "1";

  if (i < text.length) {
    el.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

setTimeout(typeWriter, 2000);