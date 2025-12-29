const dataArr = [12,326,23];
// const smalldata = dataArr.sort()[0]
const smallData = Math.min(...dataArr)
console.log(smallData)

const valuesPara = document.querySelectorAll(".value")

document.addEventListener("DOMContentLoaded", ()=>{
  valuesPara.forEach((el, index) => {
    let increVal = dataArr[index]/smallData;
    el.innerText = '0'
    incrementCounter()
    function incrementCounter(){
      let currVal = +el.innerText
      console.log(typeof currVal)
      currVal += increVal 
      el.innerText = Math.ceil(currVal)
      if(currVal < dataArr[index]){
        setTimeout(incrementCounter, 50)
      } else{
        el.innerText = dataArr[index]
      }
    }
  })
})

