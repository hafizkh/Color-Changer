const background = document.body
const btn = document.querySelector("button")


btn.addEventListener("click", () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    const redGreenBlue = `rgb(${red}, ${green}, ${blue})`
    console.log(redGreenBlue);
    background.style.backgroundColor = redGreenBlue
    btn.textContent = redGreenBlue
    return redGreenBlue;
})
