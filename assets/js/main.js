/*==========================================
        PROJECT RIDDHI CINEMATIC
==========================================*/

//================ PRELOADER ================//

window.addEventListener("load", () => {

const preloader = document.getElementById("preloader");

setTimeout(() => {

preloader.style.opacity = "0";

preloader.style.visibility = "hidden";

preloader.style.transition = "1s";

},1800);

});

//================ LOVE COUNTER ================//

const startDate = new Date("2025-02-07T00:00:00");

function updateCounter(){

const now = new Date();

const diff = now - startDate;

const days = Math.floor(diff / (1000*60*60*24));

const hours = Math.floor((diff%(1000*60*60*24))/(1000*60*60));

const minutes = Math.floor((diff%(1000*60*60))/(1000*60));

const seconds = Math.floor((diff%(1000*60))/1000);

document.getElementById("days").innerHTML =
String(days).padStart(3,"0");

document.getElementById("hours").innerHTML =
String(hours).padStart(2,"0");

document.getElementById("minutes").innerHTML =
String(minutes).padStart(2,"0");

document.getElementById("seconds").innerHTML =
String(seconds).padStart(2,"0");

}

updateCounter();

setInterval(updateCounter,1000);

//================ CURSOR GLOW ================//

const glow = document.querySelector(".cursor-glow");

window.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});

//================ HEADER EFFECT ================//

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.style.background="rgba(5,5,20,.88)";

header.style.backdropFilter="blur(30px)";

}

else{

header.style.background="rgba(4,4,18,.45)";

}

});

//================ SMOOTH SCROLL ================//

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

//================ SCROLL REVEAL ================//

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{

threshold:.15

});

document.querySelectorAll(

".story-container,.counter-card,.timeline-item,.gallery-item,.letter-paper,.forever-content"

).forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(80px)";

el.style.transition="1s";

observer.observe(el);

});

/*==============================
        SURPRISE MODAL
==============================*/

const surpriseBtn = document.getElementById("surpriseBtn");
const surpriseModal = document.getElementById("surpriseModal");
const closeBtn = document.querySelector(".close");

if (surpriseBtn && surpriseModal && closeBtn) {

    surpriseBtn.addEventListener("click", () => {
        surpriseModal.style.display = "flex";
        document.body.style.overflow = "hidden";
    });

    closeBtn.addEventListener("click", () => {
        surpriseModal.style.display = "none";
        document.body.style.overflow = "auto";
    });

    window.addEventListener("click", (e) => {
        if (e.target === surpriseModal) {
            surpriseModal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });

}

/*==============================
        MUSIC PLAYER
==============================*/

const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

let isPlaying = false;

if (musicBtn && bgMusic) {

    musicBtn.addEventListener("click", async () => {

        try {

            if (!isPlaying) {

                await bgMusic.play();

                musicBtn.innerHTML =
                '<i class="fa-solid fa-pause"></i>';

                isPlaying = true;

            } else {

                bgMusic.pause();

                musicBtn.innerHTML =
                '<i class="fa-solid fa-music"></i>';

                isPlaying = false;

            }

        } catch (e) {

            console.log(e);

        }

    });

}

/*==============================
        MOBILE MENU
==============================*/

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

nav.classList.toggle("active");

});

}

/*==============================
        PARALLAX HERO
==============================*/

const hero = document.querySelector(".hero");

window.addEventListener("mousemove",(e)=>{

if(!hero) return;

const x=(window.innerWidth/2-e.clientX)/45;
const y=(window.innerHeight/2-e.clientY)/45;

hero.style.transform=`translate(${x}px,${y}px)`;

});

/*==============================
        FLOATING HEARTS
==============================*/

setInterval(()=>{

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";
heart.style.left=Math.random()*100+"vw";
heart.style.bottom="-30px";
heart.style.fontSize=(18+Math.random()*20)+"px";
heart.style.opacity=".22";
heart.style.pointerEvents="none";
heart.style.zIndex="2";
heart.style.transition="transform 8s linear, opacity 8s linear";

document.body.appendChild(heart);

requestAnimationFrame(()=>{

heart.style.transform="translateY(-120vh)";
heart.style.opacity="0";

});

setTimeout(()=>{

heart.remove();

},8000);

},1800);

/*==============================
        GALLERY EFFECT
==============================*/

document.querySelectorAll(".gallery-item").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;
const y=e.clientY-rect.top;

card.style.transform=`
perspective(1000px)
rotateY(${(x-rect.width/2)/25}deg)
rotateX(${-(y-rect.height/2)/25}deg)
`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="perspective(1000px) rotateX(0) rotateY(0)";

});

});

console.log("❤️ Project Riddhi Loaded Successfully ❤️");