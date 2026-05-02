// الكتابة
const textEl = document.getElementById("typing-text");
const words = ["FRONTEND DEVELOPER", "WEB DESIGNER", "BASSAM'S PORTFOLIO"];
let wordIdx = 0, charIdx = 0, isDel = false;

function type() {
    const currentWord = words[wordIdx];
    textEl.textContent = isDel ? currentWord.substring(0, charIdx - 1) : currentWord.substring(0, charIdx + 1);
    charIdx = isDel ? charIdx - 1 : charIdx + 1;
    let speed = isDel ? 60 : 120;
    if (!isDel && charIdx === currentWord.length) { isDel = true; speed = 2000; }
    else if (isDel && charIdx === 0) { isDel = false; wordIdx = (wordIdx + 1) % words.length; speed = 500; }
    setTimeout(type, speed);
}

// تلوين الأزرار عند السكرول
window.onscroll = () => {
    let current = "";
    document.querySelectorAll("section").forEach(s => {
        if (pageYOffset >= s.offsetTop - 200) current = s.getAttribute("id");
    });
    document.querySelectorAll(".nav-link").forEach(a => {
        a.classList.remove("active");
        if (a.getAttribute("href").includes(current)) a.classList.add("active");
    });
};

document.addEventListener("DOMContentLoaded", type);

// تبديل الوضع
document.getElementById('theme-toggle').onclick = () => document.body.classList.toggle('light-theme');