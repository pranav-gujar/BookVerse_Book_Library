document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.querySelector('.animated-text');
    let text = textElement.textContent;
    let newText = '';
    let index = 0;

    function typeText() {
        if (index < text.length) {
            newText += text[index];
            textElement.textContent = newText;
            index++;
            setTimeout(typeText, 100);
        }
    }

    textElement.textContent = '';
    typeText();

    // Heart animation code
    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s";

        heart.innerText = "❤";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 300);
});
