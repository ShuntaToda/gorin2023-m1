const p = document.querySelector("p")
const text = p.innerHTML

const start = () => {
    const inputValue = document.querySelector("input").value
    p.innerHTML = text
    p.innerHTML = p.innerHTML.replace(new RegExp(inputValue, "g"), () => {
        return `<span style="background: ${randomColor()}">${inputValue}</span>`
    })
}


const randomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16)
}