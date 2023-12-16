const btn = document.querySelector("button")
const body = document.querySelector("body")
let whiteMode = true

const change = () => {
    whiteMode = !whiteMode
    
    if(whiteMode){
        body.classList.remove("night-mode")
    }else{
        body.classList.add("night-mode")
    }
}