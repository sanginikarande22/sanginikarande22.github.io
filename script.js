/* Menu Toggle */
function toggleMenu(){
    const nav = document.querySelector('.nav-links');
    nav.classList.toggle('active');
}

/* Modal Handling */
function openModal(id){document.getElementById(id).style.display='flex';}
function closeModal(id){document.getElementById(id).style.display='none';}

/* Typing Effect */
const typedText = ["Full Stack Developer", "Problem Solver", "Tech Enthusiast"];
let idx=0, charIdx=0, currentText="", isDeleting=false;
const typingElement = document.querySelector('.typing');
function type(){
    if(!typingElement) return;
    if(!isDeleting && charIdx<=typedText[idx].length){
        typingElement.textContent=typedText[idx].substring(0,charIdx++);
        setTimeout(type,100);
    } else if(isDeleting && charIdx>=0){
        typingElement.textContent=typedText[idx].substring(0,charIdx--);
        setTimeout(type,50);
    } else if(charIdx>typedText[idx].length){isDeleting=true; setTimeout(type,800);}
    else if(charIdx<0){isDeleting=false; idx=(idx+1)%typedText.length; setTimeout(type,500);}
}
type();

/* AI Response Mock */
function askSanginiAI(){
    const q=document.getElementById('ai-question').value.trim();
    const res=document.getElementById('ai-response');
    if(q===""){res.textContent="Please type a question.";}
    else{res.textContent="🤖 AI Response: Sangini has excellent knowledge in Core Java, SQL, and Full Stack development.";}
}

/* AI Draft Contact Message */
function draftMessageAI(){
    const msg=document.getElementById('contact-message');
    msg.value="Hello Sangini, I am impressed with your portfolio and would like to discuss a potential Full Stack Development opportunity with you.";
}
