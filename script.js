/* Menu Toggle */
function toggleMenu() {
    const nav = document.querySelector('.nav-links');
    nav.classList.toggle('active');
}

/* Modal Handling */
function openModal(id) { document.getElementById(id).style.display = 'flex'; }
function closeModal(id) { document.getElementById(id).style.display = 'none'; }

/* Close modal when clicking outside of it */
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}

/* Typing Effect (Fixed Infinite Loop) */
const typedText = ["Full Stack Developer", "Problem Solver", "Tech Enthusiast"];
let textIdx = 0;
let charIdx = 0;
let isDeleting = false;
const typingElement = document.querySelector('.typing');

function typeEffect() {
    if (!typingElement) return;

    let currentString = typedText[textIdx];

    if (isDeleting) {
        typingElement.textContent = currentString.substring(0, charIdx - 1);
        charIdx--;
    } else {
        typingElement.textContent = currentString.substring(0, charIdx + 1);
        charIdx++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    // Pause at the end of a word
    if (!isDeleting && charIdx === currentString.length) {
        typeSpeed = 1500;
        isDeleting = true;
    } 
    // Move to next word when deleted
    else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        textIdx = (textIdx + 1) % typedText.length;
        typeSpeed = 500;
    }

    setTimeout(typeEffect, typeSpeed);
}

// Start typing effect when page loads
document.addEventListener("DOMContentLoaded", () => {
    if(typingElement) typeEffect();
});

/* AI Response Mock */
function askSanginiAI() {
    const q = document.getElementById('ai-question').value.trim();
    const res = document.getElementById('ai-response');
    if (q === "") { 
        res.innerHTML = "<span style='color: #e74c3c;'>Please type a question.</span>"; 
    } else { 
        res.innerHTML = "🤖 <strong>AI Response:</strong> Sangini has excellent knowledge in Core Java, SQL, and Full Stack development. She is a quick learner and a great problem solver!"; 
    }
}

/* AI Draft Contact Message */
function draftMessageAI() {
    const msg = document.getElementById('contact-message');
    msg.value = "Hello Sangini, I am impressed with your portfolio and would like to discuss a potential Full Stack Development opportunity with you. Let's connect!";
}
