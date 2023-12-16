
const result = document.querySelector("#result")

const convert = () => {
    const inputValue = document.querySelector("input").value
    if(inputValue.startsWith("#")){
        const r = parseInt(inputValue.substring(1,3), 16)
        const g = parseInt(inputValue.substring(3,5), 16)
        const b = parseInt(inputValue.substring(5,7), 16)
        result.textContent = `rgb(${r},${g},${b})`
        
    }else if(inputValue.startsWith("rgb")){
        const color = inputValue.match(/\d+/g)
        console.log(color)
        const r = parseInt(color[0]).toString(16).padStart(2, "0")
        const g = parseInt(color[1]).toString(16).padStart(2, "0")
        const b = parseInt(color[2]).toString(16).padStart(2, "0")
        
        result.textContent = `#${r}${g}${b}`
    }
}