
const headerButton = document.querySelector("#header-button")
const main = document.querySelector("#main")
headerButton.addEventListener("click", function() {
    const color = document.querySelector("#color").value
    const mode = document.querySelector("#mode option:checked").value
    console.log(color)
    fetch(`https://www.thecolorapi.com/scheme?hex=${color.replace("#","")}&mode=${mode}&count=5`)
        .then(response => response.json())
        .then(data => {
                console.log(data.colors[0].image.bare)
                let html = ""
                for (let i of data.colors) {
                    html += `<img class="color-image" src="${i.image.bare}">`
                }
                main.innerHTML = html
            }

    )
    
})
