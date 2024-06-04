let play = document.querySelector(".play");
let cross = document.querySelector(".cross");
let box = document.querySelector(".box");
let main = document.querySelector(".main")
let video1 = document.querySelector(".video")
let speak = document.querySelector("#speak")
let king = document.querySelector(".king")

let blank = false

cross.addEventListener("click",()=>{
     main.removeChild(box)
})

function start(){
     if(video1.paused){
          video1.play()
           king.removeChild(speak)
     }else{
          video1.pause()
     }
}

// play.addEventListener("click",()=>{
//      if(video1.play){
//           video1.pause()
//      }
// })


box.addEventListener("mouseleave",()=>{
     cross.style.opacity = 0
     play.style.opacity = 0
})
box.addEventListener("mouseenter",()=>{
     cross.style.opacity = 1
     play.style.opacity = 1
})


gsap.from(box,{
  x:300,
  duration:0.5,
  opacity:0.5
})

