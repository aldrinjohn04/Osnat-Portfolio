const text = "I'm Osnat";
const element = document.getElementById("typed-text");
let index = 0;
let isDeleting = false;

function type() {
  if (!isDeleting) {
    element.textContent = text.substring(0, index + 1);
    index++;
    if (index === text.length) {
      isDeleting = true;
      setTimeout(type, 1500); // pause before deleting
    } else {
      setTimeout(type, 150); // typing speed
    }
  } else {
    element.textContent = text.substring(0, index - 1);
    index--;
    if (index === 0) {
      isDeleting = false;
      setTimeout(type, 500); // pause before typing again
    } else {
      setTimeout(type, 100); // deleting speed
    }
  }
}

type();
