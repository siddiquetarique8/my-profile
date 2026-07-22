// =================================
// RANDOM IMAGE SYSTEM
// =================================


const images = [

"https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200",

"https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200",

"https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200",

"https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200",

"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200",

"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200"

];



const cards =
document.querySelectorAll(".card img");



cards.forEach(card=>{

let random =
images[Math.floor(Math.random()*images.length)];


card.src=random;


});






// =================================
// SCROLL REVEAL
// =================================


const animated =
document.querySelectorAll(
".story h2,.card,.stats div,.final h1"
);



function reveal(){


animated.forEach(item=>{


let position =
item.getBoundingClientRect().top;



if(position <
window.innerHeight-100){


item.classList.add("show");


}


});


}



window.addEventListener(
"scroll",
reveal
);


reveal();







// =================================
// HORIZONTAL PROJECT SCROLL
// =================================


const track =
document.querySelector(".track");



window.addEventListener(
"scroll",
()=>{


let scroll =
window.scrollY;



let section =
document.querySelector(".projects");



let top =
section.offsetTop;



let move =
(scroll-top)*0.8;



if(scroll>top-300){

track.style.transform =
`
translateX(-${move}px)

`;

}


});






// =================================
// HERO PARALLAX
// =================================



const hero =
document.querySelector(".hero-bg");



window.addEventListener(
"scroll",
()=>{


let y =
window.scrollY;


hero.style.transform =
`
scale(1.2)
translateY(${y*.15}px)

`;



});






// =================================
// NAVBAR GLASS EFFECT
// =================================


const nav =
document.querySelector("nav");



window.addEventListener(
"scroll",
()=>{


if(window.scrollY>80){


nav.style.background=
"rgba(0,0,0,.55)";


nav.style.backdropFilter=
"blur(20px)";


}

else{


nav.style.background=
"transparent";


}


});







// =================================
// NUMBER COUNTER
// =================================


const counters =
document.querySelectorAll(
"[data-number]"
);



counters.forEach(counter=>{


let target =
Number(counter.dataset.number);



let current=0;



let speed=50;



let update=()=>{


if(current<target){


current+=1;


counter.innerText=current;


setTimeout(update,speed);


}



};



let observer =
new IntersectionObserver(entries=>{


if(entries[0].isIntersecting){


update();

observer.disconnect();


}


});



observer.observe(counter);



});







// =================================
// BUTTON MICRO ANIMATION
// =================================


const button =
document.querySelector("button");



button.addEventListener(
"click",
()=>{


button.innerHTML=
"Loading...";


setTimeout(()=>{


button.innerHTML=
"Explore";


},1000);



});