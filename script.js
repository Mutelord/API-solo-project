
const headerButton = document.querySelector("#header-button")
const main = document.querySelector("#main")
const footer = document.querySelector("#footer")
const colorContainer = document.querySelector("#color-container")
headerButton.addEventListener("click", function() {
    const color = document.querySelector("#color").value
    const mode = document.querySelector("#mode option:checked").value
    console.log(color)
    fetch(`https://www.thecolorapi.com/scheme?hex=${color.replace("#","")}&mode=${mode}&count=5`)
        .then(response => response.json())
        .then(data => {
                let html = []
                let footerArray = []
                for (let i of data.colors) {
                    html.push(`<img class="color-image" src="${i.image.bare}" data-color="${i.hex.value}" class="color-item">`)
                    footerArray.push(`<p data-color="${i.hex.value} class="color-item">${i.hex.value}</p>`)
                }
                main.innerHTML = html.join("")
                footer.innerHTML = footerArray.join("")
            }

    )
    
})
document.addEventListener("click", function(e) {
    if (e.target.dataset.color) {
        navigator.clipboard.writeText([e.target.dataset.color])
    }
})