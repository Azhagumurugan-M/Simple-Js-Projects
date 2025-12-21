const stars = document.querySelectorAll(".star")
const svgs = document.querySelectorAll("svg")
const transformArr = [0,-100,-200,-300,-400]

function feed(number){
  stars.forEach(star => {
    star.classList.remove("select")
  })
  svgs.forEach(svg => {
    svg.style.transform = `translate(${transformArr[number]}%)`;
  })
  for(let i=0;i<=number;i++){
    stars[i].classList.add("select")
  }
}

stars.forEach((star, index) => {
  star.addEventListener("click",()=>{
    feed(index)
  })
})
